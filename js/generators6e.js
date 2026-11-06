/**
 * L'Établi des Maths — Générateurs aléatoires de la classe de 6ème
 * Programme de mathématiques du cycle 3 (arrêté du 10 avril 2025, BO n° 16 du 17 avril 2025),
 * applicable en 6e depuis la rentrée 2025.
 *
 * Chargé APRÈS js/generatorsCore.js (sans js/randomGenerators.js) : les fonctions generate6XX(tier, mastery) sont
 * ajoutées à l'objet global window.MathsGenerators (helpers du cœur réutilisés : randInt, randChoice,
 * shuffle, gcd, simplifyFraction, resolveTier, renderScratch…).
 *
 * Paliers : 1 Socle & Automatismes · 2 Entraînement guidé · 3 Approfondissement · 4 Défi 5ème.
 *
 * Chaque question générée porte un champ `_v` (données de vérification : { k: 'clé', ...paramètres })
 * exploité par scripts/tests/test_6eme.js pour recalculer indépendamment la réponse attendue.
 */
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  Object.assign(window.MathsGenerators, {
    // =====================================================================
    // HELPERS 6ème (préfixe _6)
    // =====================================================================

    /** Arrondi de sécurité contre les erreurs binaires (0.1 + 0.2). */
    _6r(x, d = 6) {
      const p = Math.pow(10, d);
      return Math.round(x * p) / p;
    },

    /** Réponse saisie : nombre « pur » à la française, ex. 12,5 ; -3 ; 1234 (pas d'espace de milliers). */
    _6ans(x) {
      const v = this._6r(x);
      return String(v).replace('.', ',');
    },

    /** Groupe les chiffres de la partie entière par 3 avec un séparateur donné. */
    _6group(intStr, sep) {
      return intStr.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    },

    /** Écriture LaTeX (à insérer entre $…$) : 12\,345{,}67 */
    _6tex(x) {
      const v = this._6r(x);
      const neg = v < 0;
      const [ip, dp] = String(Math.abs(v)).split('.');
      const s = this._6group(ip, '\\,') + (dp ? `{,}${dp}` : '');
      return (neg ? '-' : '') + s;
    },

    /** Écriture texte (hors $) : 12 345,67 avec espace insécable fine. */
    _6txt(x) {
      const v = this._6r(x);
      const neg = v < 0;
      const [ip, dp] = String(Math.abs(v)).split('.');
      const s = this._6group(ip, ' ') + (dp ? `,${dp}` : '');
      return (neg ? '-' : '') + s;
    },

    /** Fraction LaTeX \frac{n}{d} (non simplifiée). */
    _6frac(n, d) {
      return `\\frac{${n}}{${d}}`;
    },

    /** Réponse fraction saisie, simplifiée : "3/4" ou "2" si entière. */
    _6fracAns(n, d) {
      const [a, b] = this.simplifyFraction(n, d);
      return b === 1 ? String(a) : `${a}/${b}`;
    },

    /**
     * Construit un QCM : options = [correct, ...distracteurs] dédoublonnées (max `max` options),
     * correctIndex = 0 (le moteur mélange via shuffleMcq ; on mélange aussi ici pour les appels directs).
     */
    _6mcq(q, correct, distractors, max = 4) {
      const opts = [correct];
      for (const d of distractors) {
        if (opts.length >= max) break;
        if (d === undefined || d === null) continue;
        if (!opts.includes(d)) opts.push(d);
      }
      const shuffled = this.shuffle(opts);
      q.type = 'mcq';
      q.options = shuffled;
      q.correctIndex = shuffled.indexOf(correct);
      q.answer = correct;
      return q;
    },

    /** Enveloppe SVG standard (thèmes clair/sombre). */
    _6svg(w, h, inner, maxW = 320) {
      return `<div class="geo-figure-wrapper" style="text-align:center; margin:0.85rem auto;">` +
        `<svg class="geo-svg-figure" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="max-width:${maxW}px; width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">` +
        inner + `</svg></div>\n`;
    },

    /** Texte SVG. */
    _6svgText(x, y, txt, opts = {}) {
      const size = opts.size || 12;
      const anchor = opts.anchor || 'middle';
      const fill = opts.fill || 'var(--text-main, #0f172a)';
      const weight = opts.weight || '600';
      return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="system-ui, -apple-system, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${txt}</text>`;
    },

    /**
     * Demi-droite graduée : origine en 0 (valeur `start`), `nTicks` graduations de pas `step` (valeurs),
     * `points` = [{ label:'A', value:… }] placés au-dessus ; labels de graduations listés dans `shown` (valeurs).
     */
    _6numberLine({ start = 0, step = 1, nTicks = 10, points = [], shown = null, sub = 1 }) {
      const W = 340, H = 80, x0 = 20, x1 = 320, y = 46;
      const total = nTicks * sub;
      const px = (v) => x0 + ((v - start) / (step * nTicks)) * (x1 - x0);
      let inner = `<line x1="${x0}" y1="${y}" x2="${x1 + 12}" y2="${y}" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      inner += `<polygon points="${x1 + 12},${y - 4} ${x1 + 18},${y} ${x1 + 12},${y + 4}" fill="var(--text-main, #334155)"/>`;
      for (let i = 0; i <= total; i++) {
        const v = start + (i * step) / sub;
        const x = px(v);
        const major = i % sub === 0;
        inner += `<line x1="${x}" y1="${y - (major ? 7 : 4)}" x2="${x}" y2="${y + (major ? 7 : 4)}" stroke="var(--text-main, #334155)" stroke-width="${major ? 1.6 : 1}"/>`;
      }
      const shownVals = shown || [start, start + step];
      for (const v of shownVals) {
        inner += this._6svgText(px(v), y + 24, this._6txt(v), { size: 11 });
      }
      for (const p of points) {
        const x = px(p.value);
        inner += `<circle cx="${x}" cy="${y}" r="3.5" fill="#dc2626"/>`;
        inner += this._6svgText(x, y - 14, p.label, { size: 13, fill: '#dc2626', weight: '800' });
      }
      return this._6svg(W, H, inner, 340);
    }
  });
})();

// =====================================================================
// 6N1 à 6N5 (nombres et calcul)
// =====================================================================
// =====================================================================
  // 6ème — NOMBRES ET CALCULS : 6N1 à 6N5
  // =====================================================================
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  const RANGS6 = [
    { p: 3, nom: 'milliers' }, { p: 2, nom: 'centaines' }, { p: 1, nom: 'dizaines' }, { p: 0, nom: 'unités' },
    { p: -1, nom: 'dixièmes' }, { p: -2, nom: 'centièmes' }, { p: -3, nom: 'millièmes' }
  ];
  const PRENOMS6 = ['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan', 'Lina', 'Tom', 'Zoé', 'Malo', 'Sacha', 'Nina', 'Yanis', 'Emma'];
  const JOURS6 = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const PH_DEC = 'Ex : 12,5';
  const PH_INT = 'Ex : 24';

  Object.assign(window.MathsGenerators, {
    /** En-tête commun d'une question 6ème. */
    _6A_q(id, t, skill, o) {
      const q = Object.assign({ chapterId: id, tier: t, skill }, o);
      if (t === 4 && q.title && !/^Défi 5ème/.test(q.title)) q.title = `Défi 5ème : ${q.title}`;
      return q;
    },

    /** Prix en centimes → texte « 12,45 » (toujours deux décimales, usage monétaire). */
    _6A_money(c) {
      return `${Math.floor(c / 100)},${String(c % 100).padStart(2, '0')}`;
    },

    /** Décimal en centièmes → LaTeX avec exactement deux décimales (ex. 3{,}50). */
    _6A_fix2(h) {
      return `${Math.floor(h / 100)}{,}${String(h % 100).padStart(2, '0')}`;
    },

    // -------------------------------------------------------------------
    // 6N1 : Nombres entiers et décimaux — écritures et valeur des chiffres
    // -------------------------------------------------------------------
    generate6N1(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const id = '6N1';
      const sk = 'Chercher';

      if (t === 1) {
        const sub = this.randChoice(['chiffre', 'decomposition', 'frac_dec']);
        if (sub === 'chiffre') {
          const digits = [this.randInt(1, 9)];
          for (let i = 0; i < 5; i++) digits.push(this.randInt(0, 9));
          digits.push(this.randInt(1, 9));
          const m = parseInt(digits.join(''), 10);
          const r = this.randChoice(RANGS6);
          const d = digits[3 - r.p];
          return this._6A_q(id, t, sk, {
            title: 'Valeur d\'un chiffre selon son rang',
            statement: `On considère le nombre $${this._6tex(m / 1000)}$.\n**Quel est le chiffre des ${r.nom} ?**`,
            type: 'exact', answer: String(d), placeholder: PH_INT,
            hint1: 'Repère la virgule : le chiffre des unités est juste à sa gauche, celui des dixièmes juste à sa droite.',
            hint2: 'À gauche de la virgule : unités, dizaines, centaines, milliers… À droite : dixièmes, centièmes, millièmes.',
            solution: `Dans $${this._6tex(m / 1000)}$, le chiffre des ${r.nom} est **${d}**.`,
            _v: { k: '6N1.chiffre', m, p: r.p }
          });
        }
        if (sub === 'decomposition') {
          const powers = this.shuffle([2, 1, 0, -1, -2, -3]).slice(0, this.randInt(3, 4)).sort((a, b) => b - a);
          const terms = powers.map(p => [this.randInt(1, 9), p]);
          const texP = p => (p >= 0 ? this._6tex(Math.pow(10, p)) : `\\frac{1}{${this._6tex(Math.pow(10, -p))}}`);
          const expr = terms.map(([c, p]) => `${c} \\times ${texP(p)}`).join(' + ');
          const val = terms.reduce((s, [c, p]) => s + c * Math.pow(10, p + 3), 0) / 1000;
          return this._6A_q(id, t, sk, {
            title: 'Décomposition d\'un nombre décimal',
            statement: `Donner l'écriture décimale du nombre :\n$$${expr}$$`,
            type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
            hint1: 'Chaque produit donne la valeur d\'un chiffre placé au bon rang.',
            hint2: '$\\frac{1}{10}$ correspond au rang des dixièmes, $\\frac{1}{100}$ aux centièmes, $\\frac{1}{1\\,000}$ aux millièmes. Les rangs absents valent 0.',
            solution: `On place chaque chiffre à son rang (les rangs absents valent 0) :\n$$${expr} = ${this._6tex(val)}$$`,
            _v: { k: '6N1.decomp', terms }
          });
        }
        const d = this.randChoice([10, 100, 1000]);
        let n = this.randInt(1, 99999);
        if (n % 10 === 0) n += this.randInt(1, 9);
        const val = this._6r(n / d);
        return this._6A_q(id, t, sk, {
          title: 'Fraction décimale et écriture à virgule',
          statement: `Donner l'écriture décimale (à virgule) de la fraction décimale :\n$$\\frac{${this._6tex(n)}}{${this._6tex(d)}}$$`,
          type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
          hint1: `Diviser par $${this._6tex(d)}$ revient à « décaler » les chiffres de ${String(d).length - 1} rang(s) vers la droite.`,
          hint2: `Le dernier chiffre du numérateur doit se retrouver au rang des ${d === 10 ? 'dixièmes' : d === 100 ? 'centièmes' : 'millièmes'}.`,
          solution: `Diviser par $${this._6tex(d)}$ rend chaque chiffre $${this._6tex(d)}$ fois plus petit : le chiffre des unités de $${this._6tex(n)}$ passe au rang des ${d === 10 ? 'dixièmes' : d === 100 ? 'centièmes' : 'millièmes'}.\n$$\\frac{${this._6tex(n)}}{${this._6tex(d)}} = ${this._6tex(val)}$$`,
          _v: { k: '6N1.fracdec', n, d }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['total', 'pct', 'grand', 'dec_frac']);
        if (sub === 'total') {
          const m = this.randInt(1001, 99999);
          const u = this.randChoice([{ nom: 'dixièmes', q: 10 }, { nom: 'centièmes', q: 1 }, { nom: 'unités', q: 100 }, { nom: 'dizaines', q: 1000 }]);
          const ans = Math.floor(m / u.q);
          return this._6A_q(id, t, sk, {
            title: 'Nombre total d\'unités d\'un rang',
            statement: `Combien y a-t-il de ${u.nom} **en tout** dans le nombre $${this._6tex(m / 100)}$ ?\n*(On compte uniquement les ${u.nom} entiers.)*`,
            type: 'exact', answer: String(ans), placeholder: PH_INT,
            hint1: `Ne pas confondre « le chiffre des ${u.nom} » et « le nombre de ${u.nom} ».`,
            hint2: `On lit tous les chiffres situés à gauche du rang des ${u.nom}, ce rang compris.`,
            solution: `On garde les chiffres jusqu'au rang des ${u.nom} inclus : $${this._6tex(m / 100)}$ contient **${ans}** ${u.nom}.`,
            _v: { k: '6N1.total', m, q: u.q }
          });
        }
        if (sub === 'pct') {
          const p = this.randInt(1, 199, [100]);
          if (Math.random() < 0.5) {
            return this._6A_q(id, t, sk, {
              title: 'Pourcentage et écriture décimale',
              statement: `Écrire $${p}\\,\\%$ sous la forme d'un nombre décimal.`,
              type: 'exact', answer: this._6ans(p / 100), placeholder: PH_DEC,
              hint1: `$${p}\\,\\%$ signifie « ${p} pour 100 », c'est-à-dire $\\frac{${p}}{100}$.`,
              hint2: 'Diviser par 100 : le chiffre des unités passe au rang des centièmes.',
              solution: `Un pourcentage est une fraction de dénominateur 100 :\n$$${p}\\,\\% = \\frac{${p}}{100} = ${this._6tex(p / 100)}$$\nDiviser par 100 décale les chiffres de deux rangs vers la droite.`,
              _v: { k: '6N1.pct', p, dir: 'to_dec' }
            });
          }
          return this._6A_q(id, t, sk, {
            title: 'Écriture décimale et pourcentage',
            statement: `Écrire $${this._6tex(p / 100)}$ sous la forme d'un pourcentage.\n*(Donner seulement le nombre placé devant le symbole %.)*`,
            type: 'exact', answer: String(p), placeholder: PH_INT,
            hint1: 'Écris le nombre sous la forme d\'une fraction de dénominateur 100.',
            hint2: `$${this._6tex(p / 100)} = \\frac{\\dots}{100}$.`,
            solution: `Le dernier chiffre de $${this._6tex(p / 100)}$ est au rang des centièmes, donc :\n$$${this._6tex(p / 100)} = \\frac{${p}}{100} = ${p}\\,\\%$$\nLe nombre cherché est **${p}**.`,
            _v: { k: '6N1.pct', p, dir: 'to_pct' }
          });
        }
        if (sub === 'grand') {
          const a = this.randInt(1, 9);
          const b = Math.random() < 0.2 ? 0 : this.randInt(1, 999);
          const c = Math.random() < 0.2 ? 0 : this.randInt(1, 999);
          const d = Math.random() < 0.3 ? 0 : this.randInt(1, 999);
          const n = a * 1e9 + b * 1e6 + c * 1e3 + d;
          const parts = [`$${a}$ milliard${a > 1 ? 's' : ''}`];
          if (b) parts.push(`$${b}$ million${b > 1 ? 's' : ''}`);
          if (c) parts.push(`$${c}$ mille`);
          if (d) parts.push(`$${d}$ unité${d > 1 ? 's' : ''}`);
          return this._6A_q(id, t, sk, {
            title: 'Écrire un grand nombre en chiffres',
            statement: `Écrire en chiffres le nombre :\n**${parts.join(' ')}**\n*(Saisir le nombre sans espace.)*`,
            type: 'exact', answer: String(n), placeholder: 'Ex : 2005000000',
            hint1: 'Un milliard s\'écrit avec 9 zéros, un million avec 6 zéros, mille avec 3 zéros.',
            hint2: 'Remplis les classes de trois chiffres : milliards | millions | milliers | unités, en complétant par des zéros.',
            solution: `Classe par classe (milliards | millions | milliers | unités) :\n$$${this._6tex(n)}$$`,
            _v: { k: '6N1.grand', a, b, c, d }
          });
        }
        const d = this.randChoice([100, 1000]);
        let n = this.randInt(d + 1, 9 * d);
        if (n % 10 === 0) n += 1;
        const f = (num, den) => `$\\frac{${this._6tex(num)}}{${this._6tex(den)}}$`;
        const correct = f(n, d);
        const q = this._6A_q(id, t, sk, {
          title: 'Écrire un décimal sous forme de fraction décimale',
          statement: `Quelle fraction décimale est égale à $${this._6tex(n / d)}$ ?`,
          hint1: 'Compte le nombre de chiffres après la virgule : il donne le nombre de zéros du dénominateur.',
          hint2: `Le dernier chiffre est au rang des ${d === 100 ? 'centièmes' : 'millièmes'}.`,
          solution: `$${this._6tex(n / d)}$ a ${d === 100 ? 'deux' : 'trois'} chiffres après la virgule, donc $${this._6tex(n / d)} = \\frac{${this._6tex(n)}}{${this._6tex(d)}}$.`,
          _v: { k: '6N1.decfrac', n, d }
        });
        return this._6mcq(q, correct, [f(n, d * 10), f(n, d / 10), f(Math.floor(n / d), n % d)]);
      }

      if (t === 3) {
        const sub = this.randChoice(['mixte', 'frac_mixte', 'ecriture', 'pct_frac', 'numeration']);
        if (sub === 'mixte') {
          const b = this.randInt(2, 12), a = this.randInt(1, b - 1), e = this.randInt(1, 9);
          return this._6A_q(id, t, sk, {
            title: 'Nombre mixte et fraction',
            statement: `Compléter l'égalité :\n$$${e} + \\frac{${a}}{${b}} = \\frac{\\dots}{${b}}$$\nQuel est le numérateur manquant ?`,
            type: 'exact', answer: String(e * b + a), placeholder: PH_INT,
            hint1: `Écris d'abord $${e}$ sous la forme d'une fraction de dénominateur $${b}$.`,
            hint2: `Une unité s'écrit $\\frac{${b}}{${b}}$ : chaque unité apporte donc $${b}$ parts au numérateur.`,
            solution: `$$${e} + \\frac{${a}}{${b}} = \\frac{${e * b}}{${b}} + \\frac{${a}}{${b}} = \\frac{${e * b + a}}{${b}}$$`,
            _v: { k: '6N1.mixte', e, a, b }
          });
        }
        if (sub === 'frac_mixte') {
          const b = this.randInt(2, 10), e = this.randInt(1, 9), r = this.randInt(1, b - 1);
          const n = e * b + r;
          const ask = this.randChoice(['e', 'r']);
          return this._6A_q(id, t, sk, {
            title: 'Écrire une fraction sous forme de nombre mixte',
            statement: `On écrit $\\frac{${n}}{${b}}$ sous la forme $e + \\frac{r}{${b}}$ avec $e$ entier et $r < ${b}$.\n**Que vaut ${ask === 'e' ? 'la partie entière $e$' : 'le numérateur $r$'} ?**`,
            type: 'exact', answer: String(ask === 'e' ? e : r), placeholder: PH_INT,
            hint1: `Cherche combien de fois $${b}$ « rentre » dans $${n}$ : c'est la division euclidienne de $${n}$ par $${b}$.`,
            hint2: `Dans la division euclidienne de $${n}$ par $${b}$, le quotient donne la partie entière $e$ et le reste donne le numérateur $r$.`,
            solution: `**Étape 1 :** division euclidienne de $${n}$ par $${b}$ : $${n} = ${b} \\times ${e} + ${r}$ avec $${r} < ${b}$.\n**Étape 2 :** donc $\\frac{${n}}{${b}} = \\frac{${b} \\times ${e}}{${b}} + \\frac{${r}}{${b}} = ${e} + \\frac{${r}}{${b}}$.\nAinsi ${ask === 'e' ? `**$e = ${e}$**` : `**$r = ${r}$**`}.`,
            _v: { k: '6N1.fracmixte', n, b, ask }
          });
        }
        if (sub === 'ecriture') {
          const u = this.randInt(1, 99), d1 = this.randInt(1, 9);
          const d2 = this.randInt(1, 9, [d1]);
          const val = (u * 100 + d1 * 10 + d2) / 100;
          const correct = `$${u} + \\frac{${d1}}{10} + \\frac{${d2}}{100}$`;
          const q = this._6A_q(id, t, sk, {
            title: 'Différentes écritures d\'un nombre décimal',
            statement: `Quelle écriture est égale à $${this._6tex(val)}$ ?`,
            hint1: 'Le premier chiffre après la virgule est celui des dixièmes, le deuxième celui des centièmes.',
            hint2: 'Un dixième s\'écrit $\\frac{1}{10}$ et un centième s\'écrit $\\frac{1}{100}$.',
            solution: `$${this._6tex(val)} = ${u} + \\frac{${d1}}{10} + \\frac{${d2}}{100}$ : ${d1} dixièmes et ${d2} centièmes.`,
            _v: { k: '6N1.ecriture', u, d1, d2 }
          });
          return this._6mcq(q, correct, [
            `$${u} + \\frac{${d2}}{10} + \\frac{${d1}}{100}$`,
            `$\\frac{${this._6tex(u * 100 + d1 * 10 + d2)}}{10}$`,
            `$${u} + \\frac{${d1 * 10 + d2}}{10}$`
          ]);
        }
        if (sub === 'pct_frac') {
          const b = this.randChoice([2, 4, 5, 10, 20, 25, 50]);
          const a = this.randInt(1, b - 1);
          const p = a * 100 / b;
          return this._6A_q(id, t, sk, {
            title: 'Fraction et pourcentage',
            statement: `Écrire $\\frac{${a}}{${b}}$ sous la forme d'un pourcentage.\n*(Donner seulement le nombre placé devant le symbole %.)*`,
            type: 'exact', answer: String(p), placeholder: PH_INT,
            hint1: 'Cherche une fraction égale de dénominateur 100.',
            hint2: 'Un pourcentage est une fraction de dénominateur 100 ; on obtient une fraction égale en multipliant le numérateur et le dénominateur par un même nombre.',
            solution: `$$\\frac{${a}}{${b}} = \\frac{${a} \\times ${100 / b}}{${b} \\times ${100 / b}} = \\frac{${p}}{100} = ${p}\\,\\%$$`,
            _v: { k: '6N1.pctfrac', a, b }
          });
        }
        const x = this.randInt(11, 999, [100]) / (Math.random() < 0.5 ? 10 : 100);
        const u = this.randChoice([{ nom: 'dizaines', un: 'Une dizaine', m: 10 }, { nom: 'centaines', un: 'Une centaine', m: 100 }, { nom: 'milliers', un: 'Un millier', m: 1000 }]);
        const ans = this._6r(x * u.m);
        return this._6A_q(id, t, sk, {
          title: 'Changer d\'unité de numération',
          statement: `Combien d'unités représentent $${this._6tex(x)}$ ${u.nom} ?`,
          type: 'exact', answer: this._6ans(ans), placeholder: PH_INT,
          hint1: `${u.un} vaut $${this._6tex(u.m)}$ unités.`,
          hint2: `Calcule $${this._6tex(x)} \\times ${this._6tex(u.m)}$.`,
          solution: `${u.un} vaut $${this._6tex(u.m)}$ unités, donc $${this._6tex(x)}$ ${u.nom} valent :\n$$${this._6tex(x)} \\times ${this._6tex(u.m)} = ${this._6tex(ans)}$$\nCela représente **${this._6txt(ans)}** unités.`,
          _v: { k: '6N1.numeration', x100: Math.round(x * 100), m: u.m }
        });
      }

      // Palier 4 : Défi 5ème
      const sub = this.randChoice(['devinette', 'somme_frac', 'conversion', 'plus_grand']);
      if (sub === 'devinette') {
        const u = this.randInt(1, 4), f = this.randInt(0, 9), g = this.randInt(1, 9);
        const d = 2 * u, c = d + 1, e = c - u;
        const val = (c * 100000 + d * 10000 + u * 1000 + e * 100 + f * 10 + g) / 1000;
        return this._6A_q(id, t, 'Raisonner', {
          title: 'Nombre mystère',
          statement: `Je suis un nombre décimal avec trois chiffres avant la virgule et trois chiffres après.\n• Mon chiffre des unités est $${u}$.\n• Mon chiffre des dizaines est le double de mon chiffre des unités.\n• Mon chiffre des centaines vaut un de plus que mon chiffre des dizaines.\n• Mon chiffre des dixièmes est la différence entre mon chiffre des centaines et celui des unités.\n• Mon chiffre des centièmes est $${f}$ et mon chiffre des millièmes est $${g}$.\n**Qui suis-je ?**`,
          type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
          hint1: 'Trouve les chiffres dans l\'ordre des indices : unités, dizaines, centaines, puis dixièmes.',
          hint2: `Dizaines : $2 \\times ${u} = ${d}$ ; centaines : $${d} + 1 = ${c}$.`,
          solution: `Unités ${u}, dizaines ${d}, centaines ${c}, dixièmes $${c} - ${u} = ${e}$, centièmes ${f}, millièmes ${g}.\nLe nombre est **$${this._6tex(val)}$**.`,
          _v: { k: '6N1.devinette', u, f, g }
        });
      }
      if (sub === 'somme_frac') {
        const a = this.randInt(1, 99), b = this.randInt(1, 99), c = this.randInt(1, 999);
        const val = (a * 100 + b * 10 + c) / 1000;
        return this._6A_q(id, t, 'Calculer', {
          title: 'Somme de fractions décimales',
          statement: `Donner l'écriture décimale de :\n$$\\frac{${a}}{10} + \\frac{${b}}{100} + \\frac{${c}}{1\\,000}$$`,
          type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
          hint1: 'Écris chaque fraction sous forme décimale, puis additionne en alignant les virgules.',
          hint2: 'Diviser par 10, 100 ou 1 000 décale les chiffres d\'un, deux ou trois rangs vers la droite.',
          solution: `**Étape 1 :** on écrit chaque fraction décimale à virgule : $\\frac{${a}}{10} = ${this._6tex(a / 10)}$ ; $\\frac{${b}}{100} = ${this._6tex(b / 100)}$ ; $\\frac{${c}}{1\\,000} = ${this._6tex(c / 1000)}$.\n**Étape 2 :** on additionne en alignant les virgules :\n$$${this._6tex(a / 10)} + ${this._6tex(b / 100)} + ${this._6tex(c / 1000)} = ${this._6tex(val)}$$`,
          _v: { k: '6N1.sommefrac', a, b, c }
        });
      }
      if (sub === 'conversion') {
        const a = this.randInt(1, 20), b = this.randInt(1, 9);
        const tgt = this.randChoice([{ nom: 'centièmes', m: 100 }, { nom: 'millièmes', m: 1000 }]);
        const ans = a * tgt.m + b * tgt.m / 10;
        return this._6A_q(id, t, 'Raisonner', {
          title: 'Unités de numération',
          statement: `Combien faut-il de ${tgt.nom} pour faire $${a}$ unité${a > 1 ? 's' : ''} et $${b}$ dixième${b > 1 ? 's' : ''} ?`,
          type: 'exact', answer: String(ans), placeholder: PH_INT,
          hint1: `Convertis séparément les unités puis les dixièmes en ${tgt.nom}, puis additionne.`,
          hint2: `Une unité vaut $${this._6tex(tgt.m)}$ ${tgt.nom} et un dixième vaut $${tgt.m / 10}$ ${tgt.nom}.`,
          solution: `$$${a} \\times ${this._6tex(tgt.m)} + ${b} \\times ${tgt.m / 10} = ${this._6tex(ans)}$$ Il faut **${ans}** ${tgt.nom}.`,
          _v: { k: '6N1.conversion', a, b, m: tgt.m }
        });
      }
      // plus_grand : comparer des écritures variées
      const FR = [[1, 4], [3, 4], [2, 5], [3, 5], [4, 5], [3, 8], [5, 8], [7, 8], [1, 2]];
      let vals, fr, p, dec, n;
      do {
        fr = this.randChoice(FR);
        p = this.randInt(30, 95);
        // Piège fréquent : un décimal court (0,8) jugé plus petit qu'un décimal long (0,725)
        dec = Math.random() < 0.35 ? 100 * this.randInt(3, 9) : this.randInt(300, 950);
        n = this.randInt(300, 999);
        vals = [1000 * fr[0] / fr[1], 10 * p, dec, n];
      } while (new Set(vals).size < 4);
      const sDec = `$${this._6tex(dec / 1000)}$`, sPct = `$${p}\\,\\%$`, sFr = `$\\frac{${fr[0]}}{${fr[1]}}$`, sN = `$\\frac{${n}}{1\\,000}$`;
      const strs = [sFr, sPct, sDec, sN];
      const imax = vals.indexOf(Math.max(...vals));
      const noms = this.shuffle(PRENOMS6).slice(0, 4);
      const ctx = this.randChoice([
        ['ont rempli leur gourde. Chacun indique la part de la gourde qui est remplie', 'Quelle part est la plus grande ?'],
        ['ont répondu à un quiz. Chacun indique la proportion de bonnes réponses obtenue', 'Quelle proportion est la plus grande ?'],
        ['ont lu le même roman. Chacun indique la part du livre déjà lue', 'Quelle part est la plus grande ?'],
        ['chargent leur tablette. Chacun indique la part de la batterie déjà chargée', 'Quelle part est la plus grande ?']
      ]);
      const ordre = this.shuffle([0, 1, 2, 3]);
      const stmt = Math.random() < 0.3
        ? `Parmi les nombres ${ordre.map(i => strs[i]).join(' ; ')}, lequel est **le plus grand** ?`
        : `${noms.slice(0, 3).join(', ')} et ${noms[3]} ${ctx[0]} :\n${ordre.map((i, j) => `• ${noms[j]} : ${strs[i]}`).join('\n')}\n**${ctx[1]}**`;
      const q = this._6A_q(id, t, 'Raisonner', {
        title: 'Comparer des écritures différentes',
        statement: stmt,
        hint1: 'Convertis chaque nombre en écriture décimale.',
        hint2: 'Un pourcentage est une fraction de dénominateur 100 ; une fraction $\\frac{a}{b}$ est égale au quotient $a \\div b$.',
        solution: `En écriture décimale : $\\frac{${fr[0]}}{${fr[1]}} = ${this._6tex(vals[0] / 1000)}$ ; $${p}\\,\\% = ${this._6tex(vals[1] / 1000)}$ ; $${this._6tex(dec / 1000)}$ ; $\\frac{${n}}{1\\,000} = ${this._6tex(n / 1000)}$.\nLe plus grand est **${strs[imax]}**.`,
        _v: { k: '6N1.plusgrand', fa: fr[0], fb: fr[1], p, dec, n }
      });
      return this._6mcq(q, strs[imax], strs.filter((s, i) => i !== imax));
    },

    // -------------------------------------------------------------------
    // 6N2 : Comparer, ranger, encadrer, arrondir
    // -------------------------------------------------------------------
    generate6N2(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const id = '6N2';
      const sk = 'Raisonner';
      const tx = v => this._6tex(v);
      const SYM = ['$<$', '$>$', '$=$'];

      if (t === 1) {
        const sub = this.randChoice(['comparer', 'abscisse', 'arrondi_unite']);
        if (sub === 'comparer') {
          const a = this.randInt(0, 50);
          const x = a * 100 + this.randInt(1, 9) * 10;
          let y = Math.random() < 0.15 ? x : a * 100 + this.randInt(1, 99);
          if (y !== x && Math.random() < 0.3) y = (a + this.randChoice([-1, 1])) * 100 + this.randInt(1, 99);
          if (y < 0) y = x + 7;
          const correct = x < y ? '$<$' : x > y ? '$>$' : '$=$';
          const q = this._6A_q(id, t, 'Comparer', {
            title: 'Comparer deux nombres décimaux',
            statement: `Choisir le symbole qui convient :\n$$${tx(x / 100)} \\dots ${this._6A_fix2(y)}$$`,
            hint1: 'Compare d\'abord les parties entières, puis les dixièmes, puis les centièmes.',
            hint2: 'Tu peux ajouter des zéros à droite de la partie décimale pour avoir autant de chiffres après la virgule.',
            solution: `On écrit les deux nombres avec deux décimales : $${this._6A_fix2(x)}$ et $${this._6A_fix2(y)}$.\nDonc $${tx(x / 100)}$ ${correct} $${this._6A_fix2(y)}$.`,
            _v: { k: '6N2.comparer', x, y }
          });
          return this._6mcq(q, correct, SYM);
        }
        if (sub === 'abscisse') {
          const s = this.randInt(0, 20);
          let k = this.randInt(1, 29);
          if (k % 10 === 0) k += 3;
          const val = this._6r(s + k / 10);
          const fig = this._6numberLine({ start: s, step: 1, nTicks: 3, sub: 10, points: [{ label: 'A', value: val }], shown: [s, s + 1] });
          return this._6A_q(id, t, 'Représenter', {
            title: 'Lire une abscisse sur une demi-droite graduée',
            statement: `Sur la demi-droite graduée ci-dessous, l'unité est partagée en 10 parts égales.\n${fig}\n**Quelle est l'abscisse du point A ?**`,
            type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
            hint1: 'Entre deux graduations entières, il y a 10 petits intervalles : chacun vaut un dixième.',
            hint2: 'Repère la graduation entière située juste avant le point, puis compte les petites graduations à partir d\'elle.',
            solution: `Chaque petite graduation vaut $0{,}1$. Le point A est à ${k} graduations de $${s}$ : son abscisse est **$${tx(val)}$**.`,
            _v: { k: '6N2.abscisse', s, j: k, div: 10 }
          });
        }
        let x = this.randInt(100, 99999);
        if (x % 100 === 50) x += 1;
        const ans = Math.round(x / 100);
        return this._6A_q(id, t, 'Calculer', {
          title: 'Arrondir à l\'unité',
          statement: `Donner l'arrondi à l'unité de $${tx(x / 100)}$.`,
          type: 'exact', answer: String(ans), placeholder: PH_INT,
          hint1: 'Encadre le nombre entre deux entiers consécutifs, puis choisis le plus proche.',
          hint2: 'On regarde le chiffre des dixièmes : de zéro à quatre, on garde l\'entier inférieur ; de cinq à neuf, on passe à l\'entier supérieur.',
          solution: `$${Math.floor(x / 100)} < ${tx(x / 100)} < ${Math.floor(x / 100) + 1}$ et le chiffre des dixièmes est ${Math.floor(x / 10) % 10}.\nL'arrondi à l'unité est **${ans}**.`,
          _v: { k: '6N2.arrondi', x, scale: 100, prec: 0 }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['arrondi', 'encadrement', 'abscisse_fine', 'extremum']);
        if (sub === 'arrondi') {
          const prec = this.randChoice([1, 2]);
          let x = this.randInt(1001, 99999);
          if (prec === 1 && x % 100 === 50) x += 3;
          if (prec === 2 && x % 10 === 5) x += 1;
          const ans = Math.round(x / Math.pow(10, 3 - prec)) / Math.pow(10, prec);
          const nom = prec === 1 ? 'au dixième' : 'au centième';
          return this._6A_q(id, t, 'Calculer', {
            title: `Arrondir ${nom}`,
            statement: `Donner l'arrondi ${nom} de $${tx(x / 1000)}$.`,
            type: 'exact', answer: this._6ans(ans), placeholder: PH_DEC,
            hint1: `Encadre le nombre ${nom} près, puis choisis la valeur la plus proche.`,
            hint2: `On regarde le chiffre ${prec === 1 ? 'des centièmes' : 'des millièmes'} : de zéro à quatre, on garde ; de cinq à neuf, on arrondit au-dessus.`,
            solution: `Le chiffre ${prec === 1 ? 'des centièmes' : 'des millièmes'} de $${tx(x / 1000)}$ est ${prec === 1 ? Math.floor(x / 10) % 10 : x % 10}.\nL'arrondi ${nom} est **$${tx(ans)}$**.`,
            _v: { k: '6N2.arrondi', x, scale: 1000, prec }
          });
        }
        if (sub === 'encadrement') {
          const prec = this.randChoice([0, 1, 2]);
          let x = this.randInt(1001, 999999);
          const st = Math.pow(10, 3 - prec);
          if (x % st === 0) x += 1;
          const lo = Math.floor(x / st) * st;
          const enc = (a, b) => `$${tx(a / 1000)} < ${tx(x / 1000)} < ${tx(b / 1000)}$`;
          const nom = ['à l\'unité', 'au dixième', 'au centième'][prec];
          const correct = enc(lo, lo + st);
          const other = prec === 0 ? 100 : prec === 1 ? 10 : 1000;
          const lo2 = Math.floor(x / other) * other;
          const q = this._6A_q(id, t, sk, {
            title: `Encadrer ${nom}`,
            statement: `Quel est l'encadrement de $${tx(x / 1000)}$ ${nom} ?`,
            hint1: `Les deux bornes doivent être consécutives ${nom} près.`,
            hint2: 'La borne de gauche s\'obtient en « coupant » le nombre au bon rang.',
            solution: `Encadrement ${nom} : ${correct}.`,
            _v: { k: '6N2.encadrement', x, prec }
          });
          return this._6mcq(q, correct, [enc(lo2, lo2 + other), enc(lo - st, lo), enc(lo + st, lo + 2 * st), enc(lo, lo + 2 * st)]);
        }
        if (sub === 'abscisse_fine') {
          const s10 = this.randInt(0, 99);
          let k = this.randInt(1, 29);
          if (k % 10 === 0) k += 1;
          const s = s10 / 10;
          const val = this._6r(s + k / 100);
          const fig = this._6numberLine({ start: s, step: 0.1, nTicks: 3, sub: 10, points: [{ label: 'B', value: val }], shown: [s, this._6r(s + 0.1)] });
          return this._6A_q(id, t, 'Représenter', {
            title: 'Lire une abscisse au centième',
            statement: `Lire l'abscisse du point B.\n${fig}`,
            type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
            hint1: 'Calcule l\'écart entre les deux graduations numérotées, puis divise-le par le nombre de petits intervalles.',
            hint2: 'Un dixième partagé en 10 parts égales donne des centièmes : chaque petite graduation vaut un centième.',
            solution: `Chaque petite graduation vaut $0{,}01$. B est à ${k} graduations de $${tx(s)}$ : $${tx(s)} + ${tx(k / 100)} = ${tx(val)}$.`,
            _v: { k: '6N2.abscisse', s: s10 / 10, j: k, div: 100 }
          });
        }
        const a = this.randInt(0, 30);
        let ds;
        do {
          ds = [this.randInt(1, 9) * 100, this.randInt(10, 99) * 10, this.randInt(100, 999), this.randInt(1, 9) * 100 + this.randInt(1, 9)];
        } while (new Set(ds).size < 4);
        const mode = this.randChoice(['max', 'min']);
        const vals = ds.map(d => a * 1000 + d);
        const target = mode === 'max' ? Math.max(...vals) : Math.min(...vals);
        const strs = vals.map(v => `$${tx(v / 1000)}$`);
        const noms = this.shuffle(PRENOMS6).slice(0, 4);
        const ctx = this.randChoice([
          { u: 'kg', s: 'Quatre colis ont été pesés', max: 'Quelle est la masse du colis le plus lourd ?', min: 'Quelle est la masse du colis le plus léger ?' },
          { u: 'm', s: 'Quatre rouleaux de ficelle ont été mesurés', max: 'Quelle est la longueur du rouleau le plus long ?', min: 'Quelle est la longueur du rouleau le plus court ?' },
          { u: 'L', s: 'Quatre récipients ont été remplis d\'eau', max: 'Quel est le volume du récipient le plus rempli ?', min: 'Quel est le volume du récipient le moins rempli ?' },
          { u: 'km', s: 'Quatre randonneurs ont noté la distance parcourue dans la journée', max: 'Quelle est la plus grande distance parcourue ?', min: 'Quelle est la plus petite distance parcourue ?' },
          { u: '', s: '', max: '', min: '' }
        ]);
        const stmt = ctx.u
          ? `${ctx.s} :\n${vals.map((v, j) => `• ${noms[j]} : $${tx(v / 1000)}$ ${ctx.u}`).join('\n')}\n**${ctx[mode]}**`
          : `Parmi les nombres ${strs.join(' ; ')}, lequel est **le plus ${mode === 'max' ? 'grand' : 'petit'}** ?`;
        const q = this._6A_q(id, t, 'Comparer', {
          title: mode === 'max' ? 'Trouver le plus grand décimal' : 'Trouver le plus petit décimal',
          statement: stmt,
          hint1: 'Le nombre de chiffres après la virgule ne dit rien de la taille du nombre !',
          hint2: 'Complète avec des zéros pour avoir trois chiffres après la virgule, puis compare.',
          solution: `Avec trois décimales : ${vals.map(v => `$${tx(v / 1000)}$ → $${Math.floor(v / 1000)}{,}${String(v % 1000).padStart(3, '0')}$`).join(' ; ')}.\nLe plus ${mode === 'max' ? 'grand' : 'petit'} est **$${tx(target / 1000)}$**.`,
          _v: { k: '6N2.extremum', a, ds, mode }
        });
        return this._6mcq(q, `$${tx(target / 1000)}$`, strs);
      }

      if (t === 3) {
        const sub = this.randChoice(['intercaler', 'ranger', 'pas', 'arrondi_dizaine']);
        if (sub === 'intercaler') {
          const n = this.randInt(10, 199);
          const k = this.randInt(1, 9);
          const correct = `$${tx((n * 10 + k) / 100)}$`;
          const q = this._6A_q(id, t, sk, {
            title: 'Intercaler un nombre décimal',
            statement: `Quel nombre est compris entre $${tx(n / 10)}$ et $${tx((n + 1) / 10)}$ ?`,
            hint1: `Écris les deux bornes avec deux décimales : $${this._6A_fix2(n * 10)}$ et $${this._6A_fix2(n * 10 + 10)}$.`,
            hint2: 'Entre deux dixièmes consécutifs, on peut toujours intercaler des centièmes.',
            solution: `$${this._6A_fix2(n * 10)} < ${tx((n * 10 + k) / 100)} < ${this._6A_fix2(n * 10 + 10)}$, donc la réponse est ${correct}.`,
            _v: { k: '6N2.intercaler', n, j: k }
          });
          return this._6mcq(q, correct, [
            `$${tx((n * 10 + 10 + k) / 100)}$`,
            `$${tx((n * 10 - 10 + k) / 100)}$`,
            `$${tx((n * 10 + k * 10 + 100) / 100)}$`
          ]);
        }
        if (sub === 'ranger') {
          const a = this.randInt(0, 20);
          let ds;
          do {
            ds = [this.randInt(1, 9) * 100, this.randInt(1, 9) * 10 + this.randInt(1, 9) * 100, this.randInt(101, 999), this.randInt(1, 9) * 10];
          } while (new Set(ds).size < 4 || new Set(ds.map(d => String(d).replace(/0+$/, '').length)).size < 2);
          const vals = ds.map(d => a * 1000 + d);
          const str = arr => `$${arr.map(v => tx(v / 1000)).join(' < ')}$`;
          const sorted = vals.slice().sort((p, q2) => p - q2);
          const correct = str(sorted);
          // erreur typique : ranger selon la « partie décimale vue comme un entier »
          const decPart = v => parseInt(String(this._6r(v / 1000)).split('.')[1] || '0', 10);
          const wrong1 = str(vals.slice().sort((p, q2) => decPart(p) - decPart(q2) || p - q2));
          const wrong2 = str(sorted.slice().reverse());
          const wrong3 = str([sorted[1], sorted[0], sorted[2], sorted[3]]);
          const wrong4 = str([sorted[0], sorted[2], sorted[1], sorted[3]]);
          const q = this._6A_q(id, t, sk, {
            title: 'Ranger des décimaux dans l\'ordre croissant',
            statement: `Ranger dans l'ordre **croissant** les nombres : $${vals.map(v => tx(v / 1000)).join(' \\; ; \\; ')}$.`,
            hint1: 'Ordre croissant : du plus petit au plus grand.',
            hint2: 'Écris tous les nombres avec trois chiffres après la virgule pour les comparer.',
            solution: `Avec trois décimales, on compare facilement : ${correct}.`,
            _v: { k: '6N2.ranger', a, ds }
          });
          return this._6mcq(q, correct, [wrong1, wrong2, wrong3, wrong4]);
        }
        if (sub === 'pas') {
          let step, n;
          do {
            step = this.randChoice([0.1, 0.2, 0.25, 0.5, 2, 2.5, 5]);
            n = this.randInt(2, 10);
          } while (Math.abs(this._6r(step * n) - Math.round(step * n)) > 1e-9);
          const A = this.randInt(0, 30);
          const B = A + Math.round(step * n);
          return this._6A_q(id, t, 'Représenter', {
            title: 'Trouver le pas d\'une graduation',
            statement: `Sur une demi-droite graduée, l'intervalle entre les graduations $${A}$ et $${B}$ est partagé en $${n}$ parts égales.\n**Quelle est la valeur d'une part ?**`,
            type: 'exact', answer: this._6ans(step), placeholder: PH_DEC,
            hint1: 'Calcule d\'abord l\'écart entre les deux graduations, puis partage-le équitablement.',
            hint2: 'Valeur d\'une part = écart entre les graduations ÷ nombre de parts égales.',
            solution: `$$(${B} - ${A}) \\div ${n} = ${B - A} \\div ${n} = ${tx(step)}$$`,
            _v: { k: '6N2.pas', A, B, n }
          });
        }
        const prec = this.randChoice([10, 100]);
        let x = this.randInt(1600, 99999);
        if (x % (prec * 10) === prec * 5) x += 1;
        const ans = Math.round(x / (prec * 10)) * prec;
        return this._6A_q(id, t, 'Calculer', {
          title: `Arrondir à la ${prec === 10 ? 'dizaine' : 'centaine'}`,
          statement: `Donner l'arrondi à la ${prec === 10 ? 'dizaine' : 'centaine'} de $${tx(x / 10)}$.`,
          type: 'exact', answer: String(ans), placeholder: PH_INT,
          hint1: `Encadre le nombre entre deux multiples de ${prec} consécutifs.`,
          hint2: 'Choisis la borne la plus proche du nombre.',
          solution: `$${Math.floor(x / (prec * 10)) * prec} < ${tx(x / 10)} < ${Math.floor(x / (prec * 10)) * prec + prec}$ ; le plus proche est **${ans}**.`,
          _v: { k: '6N2.arrondi', x, scale: 10, prec: prec === 10 ? -1 : -2 }
        });
      }

      // Palier 4
      const sub = this.randChoice(['chiffre_manquant', 'abscisse_fine', 'arrondi_possible', 'infinite']);
      if (sub === 'chiffre_manquant') {
        const a = this.randInt(1, 30), d = this.randInt(1, 8);
        let t1 = this.randInt(0, 9), t2 = this.randInt(0, 9);
        if (t1 === t2) t2 = (t2 + 3) % 10;
        const mode = this.randChoice(['max', 'min']);
        const ans = mode === 'max' ? (t1 < t2 ? d : d - 1) : (t1 > t2 ? d : d + 1);
        const rel = mode === 'max' ? '<' : '>';
        return this._6A_q(id, t, sk, {
          title: 'Chiffre manquant',
          statement: `Quel est le **plus ${mode === 'max' ? 'grand' : 'petit'}** chiffre que l'on peut écrire à la place de $\\square$ pour que :\n$$${a}{,}\\square ${t1} ${rel} ${a}{,}${d}${t2}$$`,
          type: 'exact', answer: String(ans), placeholder: 'Ex : 4',
          hint1: 'Les parties entières sont égales : compare d\'abord les chiffres des dixièmes.',
          hint2: 'Deux décimaux de même partie entière se comparent par les dixièmes ; si les dixièmes sont égaux, ce sont les centièmes qui départagent.',
          solution: `**Étape 1 :** si le chiffre des dixièmes $\\square$ est ${mode === 'max' ? 'plus petit' : 'plus grand'} que $${d}$, l'inégalité est toujours vraie.\n**Étape 2 :** si $\\square = ${d}$, on compare les centièmes $${t1}$ et $${t2}$ : $${a}{,}${d}${t1}$ ${(t1 < t2) === (mode === 'max') ? 'convient' : 'ne convient pas'}.\n**Conclusion :** le ${mode === 'max' ? 'plus grand' : 'plus petit'} chiffre possible est **${ans}** ($${a}{,}${ans}${t1} ${rel} ${a}{,}${d}${t2}$).`,
          _v: { k: '6N2.manquant', d, t1, t2, mode }
        });
      }
      if (sub === 'abscisse_fine') {
        const s100 = this.randInt(1, 999); // s = 0 avec k = 1 donnerait la réponse 0,001, écrite dans l'indice 2
        let k = this.randInt(1, 29);
        if (k % 10 === 0) k += 1;
        const s = s100 / 100;
        const val = this._6r(s + k / 1000);
        const fig = this._6numberLine({ start: s, step: 0.01, nTicks: 3, sub: 10, points: [{ label: 'C', value: val }], shown: [s, this._6r(s + 0.01)] });
        return this._6A_q(id, t, 'Représenter', {
          title: 'Lire une abscisse au millième',
          statement: `Lire l'abscisse du point C.\n${fig}`,
          type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
          hint1: `L'écart entre les deux graduations repérées est $0{,}01$, partagé en 10 parts égales.`,
          hint2: 'Chaque petite graduation vaut donc un millième : $0{,}001$.',
          solution: `Chaque petite graduation vaut $0{,}001$. C est à ${k} graduations de $${tx(s)}$ : $${tx(s)} + ${tx(k / 1000)} = ${tx(val)}$.`,
          _v: { k: '6N2.abscisse', s, j: k, div: 1000 }
        });
      }
      if (sub === 'arrondi_possible') {
        const tt = this.randInt(11, 499);
        const c = tt * 10 + this.randChoice([-4, -3, -2, -1, 1, 2, 3, 4]);
        const correct = `$${tx(c / 100)}$`;
        const q = this._6A_q(id, t, sk, {
          title: 'Retrouver un nombre à partir de son arrondi',
          statement: `L'arrondi au dixième d'un nombre est $${tx(tt / 10)}$.\n**Lequel de ces nombres peut-il être ?**`,
          hint1: `Les nombres dont l'arrondi au dixième est $${tx(tt / 10)}$ sont plus proches de $${tx(tt / 10)}$ que des dixièmes voisins.`,
          hint2: 'Pour arrondir au dixième, on regarde le chiffre des centièmes : de 0 à 4, on garde le dixième ; de 5 à 9, on passe au dixième supérieur.',
          solution: `Un nombre a pour arrondi au dixième $${tx(tt / 10)}$ lorsqu'il est plus proche de $${tx(tt / 10)}$ que de $${tx((tt - 1) / 10)}$ et de $${tx((tt + 1) / 10)}$ : il faut $${tx((tt * 10 - 5) / 100)} \\le x < ${tx((tt * 10 + 5) / 100)}$.\nParmi les propositions, seul ${correct} est dans cet intervalle.`,
          _v: { k: '6N2.arrondipossible', tt, c }
        });
        return this._6mcq(q, correct, [`$${tx((tt * 10 - 6) / 100)}$`, `$${tx((tt * 10 + 5) / 100)}$`, `$${tx((tt * 10 + 12) / 100)}$`, `$${tx((tt * 10 - 13) / 100)}$`]);
      }
      const a10 = this.randInt(1, 999);
      const q = this._6A_q(id, t, sk, {
        title: 'Combien de décimaux entre deux nombres ?',
        statement: `Combien existe-t-il de nombres décimaux compris entre $${tx(a10 / 10)}$ et $${tx((a10 + 1) / 10)}$ ?`,
        hint1: 'Pense aux centièmes, puis aux millièmes, puis aux dix-millièmes…',
        hint2: `Entre deux décimaux différents, on peut toujours en intercaler un autre.`,
        solution: `On peut intercaler $${tx((a10 * 10 + 5) / 100)}$, puis $${tx((a10 * 100 + 51) / 1000)}$, et ainsi de suite sans fin : il y en a **une infinité**.`,
        _v: { k: '6N2.infini', a10 }
      });
      return this._6mcq(q, 'Une infinité', ['9', '10', 'Aucun']);
    },

    // -------------------------------------------------------------------
    // 6N3 : Addition et soustraction de décimaux
    // -------------------------------------------------------------------
    generate6N3(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const id = '6N3';
      const sk = 'Calculer';
      const tx = v => this._6tex(v);

      if (t === 1) {
        const sub = this.randChoice(['add', 'sub', 'complement']);
        if (sub === 'add') {
          const a = this.randInt(11, 999), b = this.randInt(11, 999);
          const s = (a + b) / 10;
          return this._6A_q(id, t, sk, {
            title: 'Additionner deux décimaux',
            statement: `Calculer :\n$$${tx(a / 10)} + ${tx(b / 10)}$$`,
            type: 'exact', answer: this._6ans(s), placeholder: PH_DEC,
            hint1: 'Pose l\'addition en alignant les virgules (unités sous unités, dixièmes sous dixièmes).',
            hint2: 'Additionne d\'abord les dixièmes, sans oublier la retenue.',
            solution: `On pose l'addition en alignant les virgules, puis on calcule de droite à gauche (dixièmes, unités, dizaines…) en reportant les retenues :\n$$${tx(a / 10)} + ${tx(b / 10)} = ${tx(s)}$$\nContrôle : $${Math.round(a / 10)} + ${Math.round(b / 10)} = ${Math.round(a / 10) + Math.round(b / 10)}$, proche du résultat.`,
            _v: { k: '6N3.lin', terms: [[1, a, 10], [1, b, 10]] }
          });
        }
        if (sub === 'sub') {
          const b = this.randInt(11, 499), a = b + this.randInt(5, 500);
          return this._6A_q(id, t, sk, {
            title: 'Soustraire deux décimaux',
            statement: `Calculer :\n$$${tx(a / 10)} - ${tx(b / 10)}$$`,
            type: 'exact', answer: this._6ans((a - b) / 10), placeholder: PH_DEC,
            hint1: 'Pose la soustraction en alignant les virgules.',
            hint2: 'Commence par les dixièmes ; si le chiffre du haut est trop petit, fais une retenue.',
            solution: `On pose la soustraction en alignant les virgules, en commençant par les dixièmes :\n$$${tx(a / 10)} - ${tx(b / 10)} = ${tx((a - b) / 10)}$$\nVérification par l'addition : $${tx((a - b) / 10)} + ${tx(b / 10)} = ${tx(a / 10)}$.`,
            _v: { k: '6N3.lin', terms: [[1, a, 10], [-1, b, 10]] }
          });
        }
        const target = this.randChoice([1, 10]);
        const x = target === 1 ? this.randInt(1, 99) / 100 : this.randInt(1, 99) / 10;
        const ans = this._6r(target - x);
        return this._6A_q(id, t, sk, {
          title: `Compléter à ${target}`,
          statement: `Compléter :\n$$${tx(x)} + \\dots = ${target}$$`,
          type: 'exact', answer: this._6ans(ans), placeholder: PH_DEC,
          hint1: `Cherche ce qu'il manque à $${tx(x)}$ pour atteindre $${target}$ : c'est une soustraction.`,
          hint2: `Calcule $${target} - ${tx(x)}$.`,
          solution: `Le nombre manquant est l'écart entre $${tx(x)}$ et $${target}$ : on calcule une soustraction.\n$$${target} - ${tx(x)} = ${tx(ans)} \\quad \\text{donc} \\quad ${tx(x)} + ${tx(ans)} = ${target}$$\nLe nombre manquant est **$${tx(ans)}$**.`,
          _v: { k: '6N3.lin', terms: [[1, target, 1], [-1, Math.round(x * 100), 100]] }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['add_mixed', 'sub_int', 'monnaie']);
        if (sub === 'add_mixed') {
          const a = this.randInt(101, 9999), b = this.randInt(11, 999);
          const op = this.randChoice(['+', '-']);
          const A = a / 100, B = b / 10;
          if (op === '-' && A <= B) {
            return this._6A_q(id, t, sk, {
              title: 'Soustraire des décimaux',
              statement: `Calculer :\n$$${tx(B)} - ${tx(A)}$$`,
              type: 'exact', answer: this._6ans(this._6r(B - A)), placeholder: PH_DEC,
              hint1: 'Aligne les virgules et complète par des zéros si besoin.',
              hint2: `$${tx(B)} = ${this._6A_fix2(b * 10)}$.`,
              solution: `On écrit les deux nombres avec deux chiffres après la virgule, puis on pose la soustraction virgules alignées :\n$$${this._6A_fix2(b * 10)} - ${tx(A)} = ${tx(this._6r(B - A))}$$\nVérification : $${tx(this._6r(B - A))} + ${tx(A)} = ${tx(B)}$.`,
              _v: { k: '6N3.lin', terms: [[1, b, 10], [-1, a, 100]] }
            });
          }
          const res = op === '+' ? this._6r(A + B) : this._6r(A - B);
          return this._6A_q(id, t, sk, {
            title: op === '+' ? 'Additionner des décimaux' : 'Soustraire des décimaux',
            statement: `Calculer :\n$$${tx(A)} ${op} ${tx(B)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: 'Aligne les virgules et complète par des zéros si besoin.',
            hint2: `$${tx(B)} = ${this._6A_fix2(b * 10)}$.`,
            solution: `On complète $${tx(B)}$ par un zéro pour avoir deux chiffres après la virgule, puis on pose l'opération virgules alignées :\n$$${tx(A)} ${op} ${this._6A_fix2(b * 10)} = ${tx(res)}$$`,
            _v: { k: '6N3.lin', terms: [[1, a, 100], [op === '+' ? 1 : -1, b, 10]] }
          });
        }
        if (sub === 'sub_int') {
          const n = this.randInt(5, 60);
          const x = this.randInt(101, n * 100 - 1);
          const res = this._6r(n - x / 100);
          return this._6A_q(id, t, sk, {
            title: 'Soustraire un décimal à un entier',
            statement: `Calculer :\n$$${n} - ${tx(x / 100)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: `Écris $${n}$ sous la forme $${n}{,}00$ pour aligner les virgules.`,
            hint2: 'Fais attention aux retenues successives.',
            solution: `Un entier a une virgule « invisible » : $${n} = ${n}{,}00$. On pose la soustraction virgules alignées, en gérant les retenues :\n$$${n}{,}00 - ${tx(x / 100)} = ${tx(res)}$$\nVérification : $${tx(res)} + ${tx(x / 100)} = ${n}$.`,
            _v: { k: '6N3.lin', terms: [[1, n, 1], [-1, x, 100]] }
          });
        }
        const nom = this.randChoice(PRENOMS6);
        const p1 = this.randInt(450, 2999), p2 = this.randInt(120, 999);
        const billet = [5, 10, 20, 50].find(b => b * 100 > p1 + p2);
        const rendu = this._6r((billet * 100 - p1 - p2) / 100);
        const art = this.randChoice([['un livre', 'un cahier'], ['une place de cinéma', 'du pop-corn'], ['un T-shirt', 'une casquette'], ['un ballon', 'une gourde'], ['une BD', 'un stylo']]);
        return this._6A_q(id, t, 'Modéliser', {
          title: 'Problème : rendu de monnaie',
          statement: `${nom} achète ${art[0]} à ${this._6A_money(p1)} € et ${art[1]} à ${this._6A_money(p2)} €. ${nom} paie avec un billet de ${billet} €.\n**Combien d'euros lui rend-on ?**`,
          type: 'exact', answer: this._6ans(rendu), placeholder: PH_DEC,
          hint1: 'Calcule d\'abord le prix total des deux achats.',
          hint2: `Puis soustrais ce total à ${billet} €.`,
          solution: `Total : $${tx(p1 / 100)} + ${tx(p2 / 100)} = ${tx((p1 + p2) / 100)}$ €.\nRendu : $${billet} - ${tx((p1 + p2) / 100)} = ${tx(rendu)}$ €.`,
          _v: { k: '6N3.lin', terms: [[1, billet, 1], [-1, p1, 100], [-1, p2, 100]] }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['ordre', 'somme3', 'manquant']);
        if (sub === 'ordre') {
          let a, b;
          do { a = this.randInt(1000, 9999); b = this.randInt(1000, 9999); } while (a % 1000 === 500 || b % 1000 === 500 || Math.round(a / 1000) === 0);
          const ra = Math.round(a / 1000) * 100, rb = Math.round(b / 1000) * 100;
          const op = ra > rb && Math.random() < 0.5 ? '-' : '+';
          const og = op === '+' ? ra + rb : ra - rb;
          const q = this._6A_q(id, t, 'Calculer', {
            title: 'Ordre de grandeur',
            statement: `En arrondissant chaque nombre à la centaine, donner un ordre de grandeur de :\n$$${tx(a / 10)} ${op} ${tx(b / 10)}$$`,
            hint1: 'Arrondis chaque terme à la centaine la plus proche.',
            hint2: 'Pour arrondir à la centaine, on regarde le chiffre des dizaines : de 0 à 4, on garde la centaine inférieure ; de 5 à 9, on passe à la centaine supérieure.',
            solution: `**Étape 1 :** on arrondit chaque terme à la centaine : $${tx(a / 10)} \\approx ${ra}$ et $${tx(b / 10)} \\approx ${rb}$.\n**Étape 2 :** on calcule mentalement $${ra} ${op} ${rb} = ${og}$.\nL'ordre de grandeur est **${og}**.`,
            _v: { k: '6N3.ordre', a, b, op }
          });
          return this._6mcq(q, String(og), [String(og * 10), String(og + 100), String(Math.abs(og - 100) || 1000), String(og * 100)]);
        }
        if (sub === 'somme3') {
          const a = this.randInt(101, 9999), b = this.randInt(11, 999), c = this.randInt(1, 99);
          const s = this._6r(a / 100 + b / 10 + c);
          return this._6A_q(id, t, sk, {
            title: 'Somme de trois nombres',
            statement: `Calculer :\n$$${tx(a / 100)} + ${tx(b / 10)} + ${c}$$`,
            type: 'exact', answer: this._6ans(s), placeholder: PH_DEC,
            hint1: 'Pose l\'addition en colonnes, virgules alignées (un entier a une virgule « invisible » après les unités).',
            hint2: `$${c} = ${c}{,}00$.`,
            solution: `On écrit tous les nombres avec deux chiffres après la virgule : $${c} = ${c}{,}00$, puis on additionne virgules alignées :\n$$${tx(a / 100)} + ${tx(b / 10)} + ${c} = ${tx(s)}$$`,
            _v: { k: '6N3.lin', terms: [[1, a, 100], [1, b, 10], [1, c, 1]] }
          });
        }
        const a = this.randInt(101, 9999);
        const d = this.randInt(11, 999);
        if (Math.random() < 0.5) {
          const b = a + d * 10;
          return this._6A_q(id, t, sk, {
            title: 'Terme manquant',
            statement: `Compléter :\n$$${tx(a / 100)} + \\dots = ${tx(b / 100)}$$`,
            type: 'exact', answer: this._6ans(this._6r((b - a) / 100)), placeholder: PH_DEC,
            hint1: 'Le terme manquant est la différence entre le résultat et le terme connu.',
            hint2: `Calcule $${tx(b / 100)} - ${tx(a / 100)}$.`,
            solution: `Le terme manquant est la différence entre la somme et le terme connu :\n$$${tx(b / 100)} - ${tx(a / 100)} = ${tx((b - a) / 100)}$$\nVérification : $${tx(a / 100)} + ${tx((b - a) / 100)} = ${tx(b / 100)}$.`,
            _v: { k: '6N3.lin', terms: [[1, b, 100], [-1, a, 100]] }
          });
        }
        return this._6A_q(id, t, sk, {
          title: 'Nombre de départ manquant',
          statement: `Compléter :\n$$\\dots - ${tx(a / 100)} = ${tx(d / 10)}$$`,
          type: 'exact', answer: this._6ans(this._6r(a / 100 + d / 10)), placeholder: PH_DEC,
          hint1: 'Pour retrouver le nombre de départ d\'une soustraction, on fait l\'addition inverse.',
          hint2: `Calcule $${tx(d / 10)} + ${tx(a / 100)}$.`,
          solution: `L'addition est l'opération inverse de la soustraction : le nombre de départ vaut le résultat plus le nombre retranché.\n$$${tx(d / 10)} + ${tx(a / 100)} = ${tx(this._6r(a / 100 + d / 10))}$$\nVérification : $${tx(this._6r(a / 100 + d / 10))} - ${tx(a / 100)} = ${tx(d / 10)}$.`,
          _v: { k: '6N3.lin', terms: [[1, a, 100], [1, d, 10]] }
        });
      }

      // Palier 4
      const sub = this.randChoice(['enchaine', 'probleme', 'astucieux']);
      if (sub === 'enchaine') {
        const a = this.randInt(2000, 9999), b = this.randInt(101, 1999), c = this.randInt(11, 999), d = this.randInt(101, 999);
        const res = this._6r((a - b) / 100 + c / 10 - d / 100);
        return this._6A_q(id, t, sk, {
          title: 'Calcul enchaîné',
          statement: `Calculer (de gauche à droite) :\n$$${tx(a / 100)} - ${tx(b / 100)} + ${tx(c / 10)} - ${tx(d / 100)}$$`,
          type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
          hint1: 'Sans parenthèses, additions et soustractions se calculent de gauche à droite.',
          hint2: 'Effectue la première opération, puis utilise son résultat pour la suivante, et ainsi de suite.',
          solution: `$${tx(a / 100)} - ${tx(b / 100)} = ${tx((a - b) / 100)}$ ; puis $${tx((a - b) / 100)} + ${tx(c / 10)} = ${tx(this._6r((a - b) / 100 + c / 10))}$ ; enfin $${tx(this._6r((a - b) / 100 + c / 10))} - ${tx(d / 100)} = ${tx(res)}$.`,
          _v: { k: '6N3.lin', terms: [[1, a, 100], [-1, b, 100], [1, c, 10], [-1, d, 100]] }
        });
      }
      if (sub === 'probleme') {
        const total = this.randInt(12, 30);
        const m = this.randInt(250, total * 30);
        const ap = this.randInt(150, total * 100 - m - 50);
        const ctx = this.randChoice([
          ['Une randonneuse prévoit un parcours de', 'km', 'Le matin, elle parcourt', 'l\'après-midi', 'km', 'Combien de kilomètres lui reste-t-il à parcourir ?'],
          ['Un cycliste doit parcourir', 'km', 'Il parcourt d\'abord', 'puis', 'km', 'Combien de kilomètres lui reste-t-il ?'],
          ['Une citerne contient', 'L', 'On en retire', 'puis', 'L', 'Combien de litres reste-t-il dans la citerne ?']
        ]);
        const rest = this._6r(total - m / 100 - ap / 100);
        return this._6A_q(id, t, 'Modéliser', {
          title: 'Problème à étapes',
          statement: `${ctx[0]} ${total} ${ctx[1]}. ${ctx[2]} ${this._6txt(m / 100)} ${ctx[4]}, ${ctx[3]} ${this._6txt(ap / 100)} ${ctx[4]}.\n**${ctx[5]}**`,
          type: 'exact', answer: this._6ans(rest), placeholder: PH_DEC,
          hint1: 'Calcule d\'abord ce qui a déjà été fait (somme des deux étapes).',
          hint2: `Puis soustrais ce résultat à ${total}.`,
          solution: `Déjà fait : $${tx(m / 100)} + ${tx(ap / 100)} = ${tx((m + ap) / 100)}$.\nReste : $${total} - ${tx((m + ap) / 100)} = ${tx(rest)}$ ${ctx[4]}.`,
          _v: { k: '6N3.lin', terms: [[1, total, 1], [-1, m, 100], [-1, ap, 100]] }
        });
      }
      const x = this.randInt(11, 89), k1 = this.randInt(1, 5);
      const y = this.randInt(101, 899), k2 = this.randInt(1, 5);
      const terms = this.shuffle([[1, x, 10], [1, k1 * 100 - x, 10], [1, y, 100], [1, k2 * 1000 - y, 100]]);
      const ans = k1 * 10 + k2 * 10;
      return this._6A_q(id, t, 'Calculer', {
        title: 'Calcul astucieux',
        statement: `Calculer astucieusement (en regroupant les termes) :\n$$${terms.map(([, n, d]) => tx(n / d)).join(' + ')}$$`,
        type: 'exact', answer: String(ans), placeholder: PH_INT,
        hint1: 'Cherche deux termes dont la somme est un nombre entier.',
        hint2: 'Dans une somme, on peut changer l\'ordre des termes et les regrouper : cherche deux termes dont les parties décimales se complètent.',
        solution: `$$(${tx(x / 10)} + ${tx((k1 * 100 - x) / 10)}) + (${tx(y / 100)} + ${tx((k2 * 1000 - y) / 100)}) = ${k1 * 10} + ${k2 * 10} = ${ans}$$`,
        _v: { k: '6N3.lin', terms }
      });
    },

    // -------------------------------------------------------------------
    // 6N4 : Multiplication de décimaux
    // -------------------------------------------------------------------
    generate6N4(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const id = '6N4';
      const sk = 'Calculer';
      const tx = v => this._6tex(v);

      if (t === 1) {
        const sub = this.randChoice(['x10', 'x01', 'entier']);
        if (sub === 'x10') {
          const x = this.randInt(1, 99999) / this.randChoice([10, 100, 1000]);
          const m = this.randChoice([10, 100, 1000]);
          const op = this.randChoice(['times', 'div']);
          const res = op === 'times' ? this._6r(x * m) : this._6r(x / m);
          return this._6A_q(id, t, sk, {
            title: op === 'times' ? 'Multiplier par 10, 100 ou 1 000' : 'Diviser par 10, 100 ou 1 000',
            statement: `Calculer :\n$$${tx(x)} \\${op} ${tx(m)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: op === 'times' ? `Multiplier par $${tx(m)}$ : chaque chiffre prend une valeur $${tx(m)}$ fois plus grande.` : `Diviser par $${tx(m)}$ : chaque chiffre prend une valeur $${tx(m)}$ fois plus petite.`,
            hint2: `Les chiffres se décalent de ${String(m).length - 1} rang(s) vers la ${op === 'times' ? 'gauche' : 'droite'}.`,
            solution: `${op === 'times' ? 'Multiplier' : 'Diviser'} par $${tx(m)}$ rend chaque chiffre $${tx(m)}$ fois plus ${op === 'times' ? 'grand' : 'petit'} : les chiffres se décalent de ${String(m).length - 1} rang(s) vers la ${op === 'times' ? 'gauche' : 'droite'} (on complète par des zéros si besoin).\n$$${tx(x)} \\${op} ${tx(m)} = ${tx(res)}$$`,
            _v: { k: '6N4.prod', f: [[Math.round(x * 1000), 1000], op === 'times' ? [m, 1] : [1, m]] }
          });
        }
        if (sub === 'x01') {
          const x = this.randInt(1, 99999) / this.randChoice([1, 10, 100]);
          const m = this.randChoice([10, 100, 1000]);
          const res = this._6r(x / m);
          return this._6A_q(id, t, sk, {
            title: 'Multiplier par 0,1 ; 0,01 ou 0,001',
            statement: `Calculer :\n$$${tx(x)} \\times ${tx(1 / m)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: `Multiplier par $${tx(1 / m)}$, c'est diviser par $${tx(m)}$.`,
            hint2: `Les chiffres se décalent de ${String(m).length - 1} rang(s) vers la droite.`,
            solution: `Multiplier par $${tx(1 / m)}$, c'est prendre $${tx(1 / m)}$ fois le nombre, c'est-à-dire le diviser par $${tx(m)}$ : les chiffres se décalent de ${String(m).length - 1} rang(s) vers la droite.\n$$${tx(x)} \\times ${tx(1 / m)} = ${tx(x)} \\div ${tx(m)} = ${tx(res)}$$`,
            _v: { k: '6N4.prod', f: [[Math.round(x * 100), 100], [1, m]] }
          });
        }
        const n = this.randInt(2, 9), a = this.randInt(11, 99);
        const res = this._6r(n * a / 10);
        return this._6A_q(id, t, sk, {
          title: 'Multiplier un décimal par un entier',
          statement: `Calculer :\n$$${n} \\times ${tx(a / 10)}$$`,
          type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
          hint1: 'Calcule d\'abord le produit sans tenir compte de la virgule, puis place-la.',
          hint2: 'Le facteur décimal a un chiffre après la virgule : le produit aussi.',
          solution: `**Étape 1 :** on calcule sans la virgule : $${n} \\times ${a} = ${n * a}$.\n**Étape 2 :** $${tx(a / 10)}$ a un chiffre après la virgule, donc le produit aussi : $${n} \\times ${tx(a / 10)} = ${tx(res)}$.\nContrôle : $${n} \\times ${Math.round(a / 10)} = ${n * Math.round(a / 10)}$, proche du résultat.`,
          _v: { k: '6N4.prod', f: [[n, 1], [a, 10]] }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['dec_dec', 'connu', 'prix']);
        if (sub === 'dec_dec') {
          const a = this.randInt(2, 99), b = this.randInt(2, 99);
          const res = this._6r(a * b / 100);
          return this._6A_q(id, t, sk, {
            title: 'Produit de deux décimaux',
            statement: `Calculer :\n$$${tx(a / 10)} \\times ${tx(b / 10)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: 'Calcule le produit des deux nombres sans tenir compte des virgules.',
            hint2: 'Il y a un chiffre après la virgule dans chaque facteur : le produit en a deux au total.',
            solution: `$${a} \\times ${b} = ${a * b}$ ; on place 2 chiffres après la virgule : $${tx(a / 10)} \\times ${tx(b / 10)} = ${tx(res)}$.`,
            _v: { k: '6N4.prod', f: [[a, 10], [b, 10]] }
          });
        }
        if (sub === 'connu') {
          const a = this.randInt(12, 99), b = this.randInt(12, 99);
          const s1 = this.randInt(0, 2), s2 = this.randInt(1, 2);
          const A = a / Math.pow(10, s1), B = b / Math.pow(10, s2);
          const res = this._6r(a * b / Math.pow(10, s1 + s2));
          return this._6A_q(id, t, 'Raisonner', {
            title: 'Utiliser un produit connu',
            statement: `On sait que $${a} \\times ${b} = ${tx(a * b)}$.\nEn déduire :\n$$${tx(A)} \\times ${tx(B)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: 'Compte le nombre total de chiffres après la virgule dans les deux facteurs.',
            hint2: 'Le nombre de chiffres après la virgule du produit est la somme des nombres de chiffres après la virgule des deux facteurs.',
            solution: `**Étape 1 :** $${tx(A)}$ a ${s1} chiffre(s) après la virgule et $${tx(B)}$ en a ${s2}.\n**Étape 2 :** le produit en a donc $${s1} + ${s2} = ${s1 + s2}$ : on place la virgule dans $${tx(a * b)}$.\n$$${tx(A)} \\times ${tx(B)} = ${tx(res)}$$`,
            _v: { k: '6N4.prod', f: [[a, Math.pow(10, s1)], [b, Math.pow(10, s2)]] }
          });
        }
        const p = this.randInt(105, 999);
        const n = this.randInt(2, 9);
        const prod = this.randChoice([['kg de pommes', 'kg'], ['kg de carottes', 'kg'], ['m de tissu', 'm'], ['L de jus d\'orange', 'L'], ['m de ruban', 'm']]);
        const res = this._6r(p * n / 100);
        return this._6A_q(id, t, 'Modéliser', {
          title: 'Problème : prix de plusieurs unités',
          statement: `1 ${prod[0]} coûte ${this._6A_money(p)} €.\n**Combien coûtent ${n} ${prod[1]} ?** (en euros)`,
          type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
          hint1: 'Le prix est proportionnel à la quantité achetée : on multiplie.',
          hint2: `Calcule $${n} \\times ${tx(p / 100)}$.`,
          solution: `Le prix est proportionnel à la quantité : ${n} fois plus de marchandise coûte ${n} fois plus cher.\n$$${n} \\times ${tx(p / 100)} = ${tx(res)}$$\n${n} ${prod[1]} coûtent **${this._6txt(res)} €**.`,
          _v: { k: '6N4.prod', f: [[n, 1], [p, 100]] }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['ordre', 'dec_dec2', 'prix_masse']);
        if (sub === 'ordre') {
          let a, b;
          do { a = this.randInt(110, 999); b = this.randInt(110, 999); } while (a % 100 === 50 || b % 100 === 50);
          const ra = Math.round(a / 100) * 10, rb = Math.round(b / 100) * 10;
          const og = ra * rb;
          const q = this._6A_q(id, t, 'Calculer', {
            title: 'Ordre de grandeur d\'un produit',
            statement: `En arrondissant chaque facteur à la dizaine, donner un ordre de grandeur de :\n$$${tx(a / 10)} \\times ${tx(b / 10)}$$`,
            hint1: 'Arrondis chaque facteur à la dizaine la plus proche.',
            hint2: 'Pour arrondir à la dizaine, on regarde le chiffre des unités : de 0 à 4, dizaine inférieure ; de 5 à 9, dizaine supérieure.',
            solution: `**Étape 1 :** on arrondit chaque facteur à la dizaine : $${tx(a / 10)} \\approx ${ra}$ et $${tx(b / 10)} \\approx ${rb}$.\n**Étape 2 :** $${ra} \\times ${rb} = ${tx(og)}$.\nL'ordre de grandeur est **$${tx(og)}$**.`,
            _v: { k: '6N4.ordre', a, b }
          });
          return this._6mcq(q, String(og), [String(og * 10), String(og / 10), String(ra + rb), String(og + ra * 10)]);
        }
        if (sub === 'dec_dec2') {
          const a = this.randInt(101, 999), b = this.randInt(11, 99);
          const res = this._6r(a * b / 1000);
          return this._6A_q(id, t, sk, {
            title: 'Produit de deux décimaux',
            statement: `Calculer :\n$$${tx(a / 100)} \\times ${tx(b / 10)}$$`,
            type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
            hint1: 'Calcule le produit sans les virgules, puis place la virgule.',
            hint2: 'Le produit a autant de chiffres après la virgule que les deux facteurs réunis.',
            solution: `**Étape 1 :** sans les virgules : $${a} \\times ${b} = ${tx(a * b)}$.\n**Étape 2 :** les facteurs ont $2 + 1 = 3$ chiffres après la virgule, donc le produit aussi :\n$$${tx(a / 100)} \\times ${tx(b / 10)} = ${tx(res)}$$\nContrôle : $${Math.round(a / 100)} \\times ${Math.round(b / 10)} = ${Math.round(a / 100) * Math.round(b / 10)}$, ordre de grandeur cohérent.`,
            _v: { k: '6N4.prod', f: [[a, 100], [b, 10]] }
          });
        }
        const p = this.randInt(21, 199) * 5;
        const m = this.randInt(3, 49) * 2;
        const res = this._6r(p * m / 1000);
        const prod = this.randChoice(['fromage', 'cerises', 'raisin', 'tomates', 'poisson', 'café']);
        return this._6A_q(id, t, 'Modéliser', {
          title: 'Problème : prix au kilogramme',
          statement: `Le kilogramme de ${prod} coûte ${this._6A_money(p)} €. On en achète ${this._6txt(m / 10)} kg.\n**Quel est le prix à payer ?** (en euros)`,
          type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
          hint1: 'Prix à payer = prix d\'un kilogramme × masse en kilogrammes.',
          hint2: `Calcule $${tx(p / 100)} \\times ${tx(m / 10)}$.`,
          solution: `Le prix est proportionnel à la masse : prix à payer = prix d'un kilogramme × masse.\n$$${tx(p / 100)} \\times ${tx(m / 10)} = ${tx(res)}$$\nLe prix à payer est **${this._6txt(res)} €**.`,
          _v: { k: '6N4.prod', f: [[p, 100], [m, 10]] }
        });
      }

      // Palier 4
      const sub = this.randChoice(['facteur', 'produit3', 'comparaison']);
      if (sub === 'facteur') {
        const x = this.randInt(11, 9999) / this.randChoice([10, 100]);
        const m = this.randChoice([10, 100, 1000, 0.1, 0.01, 0.001]);
        const y = this._6r(x * m);
        return this._6A_q(id, t, 'Raisonner', {
          title: 'Facteur manquant',
          statement: `Compléter :\n$$${tx(x)} \\times \\dots = ${tx(y)}$$`,
          type: 'exact', answer: this._6ans(m), placeholder: 'Ex : 0,01',
          hint1: 'Compare la position des chiffres dans les deux nombres : de combien de rangs se sont-ils décalés ?',
          hint2: 'Quand les chiffres « montent » d\'un rang (nombre plus grand), on a multiplié par dix ; quand ils « descendent » d\'un rang, on a multiplié par un dixième.',
          solution: `Les chiffres de $${tx(x)}$ et de $${tx(y)}$ sont les mêmes : seule la virgule a bougé, de ${String(Math.round(Math.max(m, 1 / m))).length - 1} rang(s) vers la ${m > 1 ? 'droite (le nombre devient plus grand)' : 'gauche (le nombre devient plus petit)'}.\n${m > 1 ? `On a donc multiplié par $${tx(m)}$` : `On a donc divisé par $${tx(1 / m)}$, c'est-à-dire multiplié par $${tx(m)}$`} :\n$$${tx(x)} \\times ${tx(m)} = ${tx(y)}$$`,
          _v: { k: '6N4.facteur', x100: Math.round(x * 100), y1e5: Math.round(y * 1e5) }
        });
      }
      if (sub === 'produit3') {
        const a = this.randChoice([5, 25, 4, 2, 125]);
        const den = a === 125 ? 1000 : a === 25 ? 100 : 10;
        const c = a === 125 ? 8 : a === 25 ? 4 : a === 5 ? 2 : a === 4 ? 25 : 5;
        const b = this.randInt(11, 999);
        const res = this._6r(a / den * b / 10 * c);
        return this._6A_q(id, t, 'Calculer', {
          title: 'Produit astucieux de trois facteurs',
          statement: `Calculer astucieusement :\n$$${tx(a / den)} \\times ${tx(b / 10)} \\times ${c}$$`,
          type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
          hint1: 'Dans un produit, on peut changer l\'ordre des facteurs.',
          hint2: 'Cherche deux facteurs dont le produit est un nombre « rond » (entier).',
          solution: `$$${tx(a / den)} \\times ${c} \\times ${tx(b / 10)} = ${tx(this._6r(a / den * c))} \\times ${tx(b / 10)} = ${tx(res)}$$`,
          _v: { k: '6N4.prod', f: [[a, den], [b, 10], [c, 1]] }
        });
      }
      const x = this.randInt(11, 999) / 10;
      const kind = this.randChoice(['lt', 'gt', 'eq']);
      const f = kind === 'lt' ? this.randInt(1, 9) / 10 : kind === 'gt' ? this.randInt(11, 39) / 10 : 1;
      const correct = kind === 'lt' ? 'plus petit que' : kind === 'gt' ? 'plus grand que' : 'égal à';
      const q = this._6A_q(id, t, 'Raisonner', {
        title: 'Multiplier par un nombre plus petit que 1',
        statement: `Sans effectuer le calcul, compléter : le produit $${tx(x)} \\times ${tx(f)}$ est … $${tx(x)}$.`,
        hint1: 'Compare le second facteur à 1.',
        hint2: 'Multiplier par un nombre inférieur à 1 donne un résultat inférieur au nombre de départ ; multiplier par un nombre supérieur à 1 donne un résultat supérieur.',
        solution: `Comme $${tx(f)}$ est ${kind === 'lt' ? 'plus petit que 1' : kind === 'gt' ? 'plus grand que 1' : 'égal à 1'}, le produit est **${correct}** $${tx(x)}$ (il vaut $${tx(this._6r(x * f))}$).`,
        _v: { k: '6N4.compare', x10: Math.round(x * 10), f10: Math.round(f * 10) }
      });
      return this._6mcq(q, correct, ['plus petit que', 'plus grand que', 'égal à']);
    },

    // -------------------------------------------------------------------
    // 6N5 : Division euclidienne, division décimale, multiples et diviseurs
    // -------------------------------------------------------------------
    generate6N5(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const id = '6N5';
      const sk = 'Calculer';
      const tx = v => this._6tex(v);

      const euclide = (a, b, ask, title) => {
        const q0 = Math.floor(a / b), r = a % b;
        return this._6A_q(id, t, sk, {
          title,
          statement: `Effectuer la division euclidienne de $${tx(a)}$ par $${b}$.\n**Quel est le ${ask === 'q' ? 'quotient' : 'reste'} ?**`,
          type: 'exact', answer: String(ask === 'q' ? q0 : r), placeholder: PH_INT,
          hint1: `Cherche le plus grand multiple de $${b}$ inférieur ou égal à $${tx(a)}$.`,
          hint2: 'Le reste doit être strictement inférieur au diviseur.',
          solution: `$$${tx(a)} = ${b} \\times ${tx(q0)} + ${r} \\quad \\text{avec} \\quad ${r} < ${b}$$ Le quotient est $${tx(q0)}$ et le reste est $${r}$.`,
          _v: { k: '6N5.euclide', a, b, ask }
        });
      };

      if (t === 1) {
        const sub = this.randChoice(['euclide', 'diviseur', 'critere']);
        if (sub === 'euclide') {
          const b = this.randInt(2, 12), q0 = this.randInt(3, 60), r = this.randInt(0, b - 1);
          return euclide(b * q0 + r, b, this.randChoice(['q', 'r']), 'Division euclidienne');
        }
        if (sub === 'diviseur') {
          const d = this.randInt(2, 12);
          const yes = Math.random() < 0.5;
          let n = d * this.randInt(3, 25);
          if (!yes) n += this.randInt(1, d - 1);
          const correct = n % d === 0 ? 'Oui' : 'Non';
          const word = this.randChoice(['diviseur', 'multiple']);
          const st = word === 'diviseur' ? `Le nombre $${d}$ est-il un diviseur de $${n}$ ?` : `Le nombre $${n}$ est-il un multiple de $${d}$ ?`;
          const q = this._6A_q(id, t, 'Raisonner', {
            title: word === 'diviseur' ? 'Reconnaître un diviseur' : 'Reconnaître un multiple',
            statement: st,
            hint1: `Effectue la division euclidienne de $${n}$ par $${d}$ et regarde le reste.`,
            hint2: 'Si le reste est nul, alors la réponse est oui.',
            solution: `$${n} = ${d} \\times ${Math.floor(n / d)} + ${n % d}$. Le reste ${n % d === 0 ? 'est nul' : 'n\'est pas nul'} : la réponse est **${correct.toLowerCase()}**.`,
            _v: { k: '6N5.diviseur', n, d }
          });
          return this._6mcq(q, correct, ['Oui', 'Non']);
        }
        const k = this.randChoice([2, 3, 5, 9, 10]);
        const good = k * this.randInt(12, 1111);
        const nums = [good];
        // Distracteurs « pièges » : critère d'un autre diviseur appliqué par erreur
        const sumDig = c => String(c).split('').reduce((a, b) => a + +b, 0);
        const trap = {
          2: c => c % 2 === 1 && +String(c)[0] % 2 === 0,          // premier chiffre pair, unités impaires
          3: c => [3, 6, 9].includes(c % 10),                      // se termine par 3, 6 ou 9
          5: c => sumDig(c) % 5 === 0 || String(c).includes('5'),  // somme des chiffres multiple de 5, ou un 5 ailleurs
          9: c => c % 3 === 0 || c % 10 === 9,                     // divisible par 3 seulement, ou se termine par 9
          10: c => c % 5 === 0                                     // se termine par 5
        }[k];
        for (let tries = 0; nums.length < 3 && tries < 500; tries++) {
          const c = this.randInt(100, 9999);
          if (c % k !== 0 && trap(c) && !nums.includes(c)) nums.push(c);
        }
        while (nums.length < 4) {
          const c = this.randInt(100, 9999);
          if (c % k !== 0 && !nums.includes(c)) nums.push(c);
        }
        const crit = { 2: 'son chiffre des unités est 0, 2, 4, 6 ou 8', 3: 'la somme de ses chiffres est divisible par 3', 5: 'son chiffre des unités est 0 ou 5', 9: 'la somme de ses chiffres est divisible par 9', 10: 'son chiffre des unités est 0' }[k];
        const q = this._6A_q(id, t, 'Raisonner', {
          title: `Critère de divisibilité par ${k}`,
          statement: this.randChoice([
            `Parmi ces nombres, lequel est divisible par $${k}$ ?`,
            `Lequel de ces nombres est un multiple de $${k}$ ?`,
            `Pour lequel de ces nombres la division euclidienne par $${k}$ a-t-elle un reste nul ?`,
            `Lequel de ces nombres admet $${k}$ comme diviseur ?`,
            `${this.randChoice(PRENOMS6)} veut répartir des ${this.randChoice(['billes', 'cartes', 'bonbons', 'images', 'perles'])} en $${k}$ paquets identiques, sans qu'il en reste. Quel nombre d'objets le permet ?`,
            `${this.randChoice(PRENOMS6)} veut coller sa collection de timbres dans $${k}$ albums, avec le même nombre de timbres dans chacun. Quel nombre de timbres le permet ?`
          ]),
          hint1: `Un nombre entier est divisible par ${k} si ${crit}.`,
          hint2: 'Teste le critère sur chacun des nombres.',
          solution: `Un nombre est divisible par ${k} si ${crit}. Seul **$${tx(good)}$** vérifie ce critère.`,
          _v: { k: '6N5.critere', k6: k, nums }
        });
        return this._6mcq(q, `$${tx(good)}$`, nums.slice(1).map(n => `$${tx(n)}$`));
      }

      if (t === 2) {
        const sub = this.randChoice(['div_dec', 'euclide_grand', 'boites']);
        if (sub === 'div_dec') {
          const d = this.randInt(2, 9), qv = this.randInt(11, 999);
          const scale = this.randChoice([10, 100]);
          const x = qv * d;
          return this._6A_q(id, t, sk, {
            title: 'Diviser un décimal par un entier',
            statement: `Calculer :\n$$${tx(x / scale)} \\div ${d}$$`,
            type: 'exact', answer: this._6ans(qv / scale), placeholder: PH_DEC,
            hint1: 'Pose la division : quand tu « abaisses » le premier chiffre après la virgule, place la virgule au quotient.',
            hint2: `Vérifie en multipliant ton résultat par $${d}$.`,
            solution: `$$${tx(x / scale)} \\div ${d} = ${tx(qv / scale)} \\quad \\text{car} \\quad ${d} \\times ${tx(qv / scale)} = ${tx(x / scale)}$$`,
            _v: { k: '6N5.div', num: x, den: d * scale }
          });
        }
        if (sub === 'euclide_grand') {
          const b = this.randInt(11, 99), q0 = this.randInt(12, 99), r = this.randInt(0, b - 1);
          return euclide(b * q0 + r, b, this.randChoice(['q', 'r']), 'Division euclidienne par un nombre à deux chiffres');
        }
        const b = this.randChoice([6, 8, 10, 12, 15, 20, 24, 25, 30]);
        let n = this.randInt(40, 600);
        if (n % b === 0) n += this.randInt(1, b - 1);
        const ask = this.randChoice(['min', 'pleines']);
        const obj = this.randChoice([['œufs', 'boîtes'], ['élèves', 'tables'], ['bouteilles', 'cartons'], ['photos', 'pages d\'album']]);
        const ans = ask === 'min' ? Math.ceil(n / b) : Math.floor(n / b);
        return this._6A_q(id, t, 'Modéliser', {
          title: 'Problème de rangement',
          statement: `On range ${n} ${obj[0]} dans des ${obj[1]} de ${b}.\n**${ask === 'min' ? `Combien faut-il de ${obj[1]} au minimum pour tout ranger ?` : `Combien de ${obj[1]} seront complètement remplies ?`}**`,
          type: 'exact', answer: String(ans), placeholder: PH_INT,
          hint1: `Effectue la division euclidienne de ${n} par ${b}.`,
          hint2: ask === 'min' ? 'S\'il y a un reste, il faut une boîte de plus pour les objets restants.' : 'Le quotient donne le nombre de boîtes pleines.',
          solution: `$${n} = ${b} \\times ${Math.floor(n / b)} + ${n % b}$.\n${ask === 'min' ? `Il reste ${n % b} ${obj[0]} : il faut une de plus, soit **${ans}**.` : `**${ans}** sont complètement remplies.`}`,
          _v: { k: '6N5.boites', n, b, ask }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['egalite', 'nb_div', 'div_term', 'partage']);
        if (sub === 'egalite') {
          const b = this.randInt(3, 25), q0 = this.randInt(5, 150), r = this.randInt(1, b - 1);
          return this._6A_q(id, t, 'Raisonner', {
            title: 'Retrouver le dividende',
            statement: `Dans une division euclidienne, le diviseur est $${b}$, le quotient est $${q0}$ et le reste est $${r}$.\n**Quel est le dividende ?**`,
            type: 'exact', answer: String(b * q0 + r), placeholder: PH_INT,
            hint1: 'Dividende = diviseur × quotient + reste.',
            hint2: `Calcule $${b} \\times ${q0} + ${r}$.`,
            solution: `L'égalité de la division euclidienne s'écrit : dividende = diviseur × quotient + reste (avec reste < diviseur).\n$$${b} \\times ${q0} + ${r} = ${b * q0} + ${r} = ${tx(b * q0 + r)}$$\nLe dividende est **${b * q0 + r}**.`,
            _v: { k: '6N5.dividende', b, q0, r }
          });
        }
        if (sub === 'nb_div') {
          const n = this.randInt(12, 100);
          const divs = [];
          for (let i = 1; i <= n; i++) if (n % i === 0) divs.push(i);
          return this._6A_q(id, t, 'Chercher', {
            title: 'Liste des diviseurs',
            statement: `Combien le nombre $${n}$ a-t-il de diviseurs ? *(1 et ${n} compris)*`,
            type: 'exact', answer: String(divs.length), placeholder: PH_INT,
            hint1: 'Cherche les diviseurs par paires : si $a \\times b = ' + n + '$, alors $a$ et $b$ sont deux diviseurs.',
            hint2: 'Un diviseur d\'un nombre est un entier par lequel la division tombe juste (reste nul). Teste les entiers dans l\'ordre croissant jusqu\'à ce que les paires se répètent.',
            solution: `Les diviseurs de $${n}$ sont : ${divs.join(' ; ')}. Il y en a **${divs.length}**.`,
            _v: { k: '6N5.nbdiv', n }
          });
        }
        if (sub === 'div_term') {
          const d = this.randChoice([2, 4, 5, 8]);
          let n = this.randInt(3, 99);
          if (n % d === 0) n += 1;
          return this._6A_q(id, t, sk, {
            title: 'Quotient décimal exact',
            statement: `Calculer le quotient décimal exact :\n$$${n} \\div ${d}$$`,
            type: 'exact', answer: this._6ans(n / d), placeholder: PH_DEC,
            hint1: `Écris $${n}$ sous la forme $${n}{,}000$ et continue la division après la virgule.`,
            hint2: 'Arrête-toi lorsque le reste devient nul.',
            solution: `On pose la division de $${n}$ par $${d}$ ; quand il reste un reste non nul après les unités, on place la virgule au quotient et on continue avec des zéros ($${n} = ${n}{,}000$) jusqu'à obtenir un reste nul.\n$$${n} \\div ${d} = ${tx(n / d)} \\quad \\text{car} \\quad ${d} \\times ${tx(n / d)} = ${n}$$`,
            _v: { k: '6N5.div', num: n, den: d }
          });
        }
        const d = this.randInt(3, 9), part = this.randInt(105, 2500);
        const total = part * d;
        const names = this.shuffle(PRENOMS6).slice(0, 2);
        return this._6A_q(id, t, 'Modéliser', {
          title: 'Problème de partage équitable',
          statement: `${names[0]}, ${names[1]} et ${d - 2} autre${d - 2 > 1 ? 's' : ''} ami${d - 2 > 1 ? 's' : ''} se partagent équitablement ${this._6A_money(total)} €, soit ${d} personnes en tout.\n**Quelle somme reçoit chacun ?** (en euros)`,
          type: 'exact', answer: this._6ans(part / 100), placeholder: PH_DEC,
          hint1: `Partager équitablement entre ${d} personnes, c'est diviser par ${d}.`,
          hint2: `Calcule $${tx(total / 100)} \\div ${d}$.`,
          solution: `Partager équitablement entre ${d} personnes revient à diviser par ${d} :\n$$${tx(total / 100)} \\div ${d} = ${tx(part / 100)}$$\nVérification : $${d} \\times ${tx(part / 100)} = ${tx(total / 100)}$. Chacun reçoit **${this._6A_money(part)} €**.`,
          _v: { k: '6N5.div', num: total, den: d * 100 }
        });
      }

      // Palier 4
      const sub = this.randChoice(['ppcm', 'commun', 'chiffre9', 'jour']);
      if (sub === 'ppcm') {
        const L = [4, 6, 8, 9, 10, 12, 15, 18, 20];
        const a = this.randChoice(L), b = this.randChoice(L.filter(x => x !== a));
        const g = this.gcd(a, b), l = a * b / g;
        const ctx = this.randChoice([
          ['Deux bus partent ensemble du terminus à 7 h. Le premier repasse toutes les', 'minutes et le second toutes les', 'Dans combien de minutes repartiront-ils de nouveau ensemble pour la première fois ?'],
          ['Deux phares s\'allument en même temps. Le premier s\'allume toutes les', 'secondes et le second toutes les', 'Au bout de combien de secondes s\'allumeront-ils de nouveau ensemble pour la première fois ?'],
          ['Deux coureurs partent ensemble de la ligne de départ. L\'un fait un tour de piste en', 'minutes, l\'autre en', 'Au bout de combien de minutes se retrouveront-ils ensemble sur la ligne pour la première fois ?']
        ]);
        return this._6A_q(id, t, 'Chercher', {
          title: 'Premier multiple commun',
          statement: `${ctx[0]} ${a} ${ctx[1]} ${b}.\n**${ctx[2]}**`,
          type: 'exact', answer: String(l), placeholder: PH_INT,
          hint1: `Écris la liste des multiples de ${a} et celle des multiples de ${b}.`,
          hint2: 'Cherche le plus petit nombre (non nul) présent dans les deux listes.',
          solution: `Multiples de ${a} : ${[1, 2, 3, 4, 5, 6].map(i => a * i).join(', ')}…\nMultiples de ${b} : ${[1, 2, 3, 4, 5, 6].map(i => b * i).join(', ')}…\nLe premier multiple commun est **${l}**.`,
          _v: { k: '6N5.ppcm', a, b }
        });
      }
      if (sub === 'commun') {
        const pairs = [[2, 3], [2, 5], [3, 5], [4, 5], [3, 4], [2, 9], [5, 9], [4, 9]];
        const [a, b] = this.randChoice(pairs);
        const N = this.randInt(100, 999);
        const l = a * b;
        const ans = (Math.floor(N / l) + 1) * l;
        return this._6A_q(id, t, 'Raisonner', {
          title: 'Divisible par deux nombres',
          statement: `Quel est le plus petit nombre entier **strictement supérieur à $${N}$** qui est divisible à la fois par $${a}$ et par $${b}$ ?`,
          type: 'exact', answer: String(ans), placeholder: PH_INT,
          hint1: `Calcule d'abord le plus petit nombre non nul divisible à la fois par ${a} et par ${b}, puis cherche ses multiples après ${N}.`,
          hint2: `Comme ${a} et ${b} n'ont pas d'autre diviseur commun que 1, un nombre divisible par les deux est un multiple de leur produit.`,
          solution: `Les nombres divisibles par ${a} et par ${b} sont les multiples de ${l}. $${N} = ${l} \\times ${Math.floor(N / l)} + ${N % l}$, donc le suivant est $${l} \\times ${Math.floor(N / l) + 1} = ${ans}$.`,
          _v: { k: '6N5.commun', a, b, N }
        });
      }
      if (sub === 'chiffre9') {
        let digits, pos, missing;
        do {
          const len = this.randInt(3, 5);
          digits = [this.randInt(1, 9)];
          for (let i = 1; i < len; i++) digits.push(this.randInt(0, 9));
          pos = this.randInt(1, len - 1);
          const s = digits.reduce((acc, d, i) => acc + (i === pos ? 0 : d), 0);
          missing = (9 - (s % 9)) % 9;
        } while (missing === 0);
        const shown = digits.map((d, i) => (i === pos ? '\\square' : String(d))).join('');
        return this._6A_q(id, t, 'Raisonner', {
          title: 'Chiffre manquant et divisibilité par 9',
          statement: `Quel chiffre faut-il écrire à la place de $\\square$ pour que le nombre $${shown}$ soit divisible par $9$ ?`,
          type: 'exact', answer: String(missing), placeholder: 'Ex : 4',
          hint1: 'Un nombre est divisible par 9 si la somme de ses chiffres est un multiple de 9.',
          hint2: 'Calcule la somme des chiffres connus, puis cherche ce qu\'il manque pour atteindre un multiple de 9.',
          solution: `Somme des chiffres connus : $${digits.filter((d, i) => i !== pos).join(' + ')} = ${digits.reduce((a2, d, i) => a2 + (i === pos ? 0 : d), 0)}$. Il faut ajouter **${missing}** pour obtenir un multiple de 9.`,
          _v: { k: '6N5.chiffre9', digits, pos }
        });
      }
      const start = this.randInt(0, 6), N = this.randInt(10, 400);
      const correct = JOURS6[(start + N) % 7];
      const q = this._6A_q(id, t, 'Modéliser', {
        title: 'Calendrier et division euclidienne',
        statement: `Aujourd'hui, nous sommes ${JOURS6[start]}.\n**Quel jour de la semaine serons-nous dans ${N} jours ?**`,
        hint1: 'Une semaine compte 7 jours : tous les 7 jours, on retombe sur le même jour.',
        hint2: `Effectue la division euclidienne de ${N} par 7 et utilise le reste.`,
        solution: `$${N} = 7 \\times ${Math.floor(N / 7)} + ${N % 7}$. Après ${Math.floor(N / 7)} semaines complètes, on est encore ${JOURS6[start]} ; on avance ensuite de ${N % 7} jour(s) : ce sera **${correct}**.`,
        _v: { k: '6N5.jour', start, N }
      });
      return this._6mcq(q, correct, this.shuffle(JOURS6.filter(j => j !== correct)));
    }
  });
})();

// =====================================================================
// 6N6 à 6N8 et 6P1 (fractions, pensée algébrique, proportionnalité)
// =====================================================================
// =====================================================================
  // 6N6 · 6N7 · 6N8 · 6P1 — Fractions, pensée algébrique, proportionnalité
  // =====================================================================
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  Object.assign(window.MathsGenerators, {
    /** Fabrique de question commune (chapitre, palier, compétence par défaut). */
    _6qB(ch, t, o) {
      const q = Object.assign({ chapterId: ch, tier: t, skill: 'Calculer' }, o);
      if (q.type === 'exact' && !q.placeholder) q.placeholder = 'Ex : 12';
      return q;
    },

    /** Montant en euros pour le texte : 12 ; 12,50. */
    _6euroB(x) {
      const v = this._6r(x);
      return Number.isInteger(v) ? this._6txt(v) : v.toFixed(2).replace('.', ',');
    },

    /** Montant en euros en LaTeX : 13{,}20 (deux décimales si non entier). */
    _6eurTexB(x) {
      const v = this._6r(x);
      return Number.isInteger(v) ? this._6tex(v) : v.toFixed(2).replace('.', '{,}');
    },

    /** Rangée de n carrés accolés (motif d'allumettes). */
    _6matchRowB(nMax, shape) {
      const s = 18, gap = 26;
      let inner = '';
      let x = 10;
      for (let n = 1; n <= nMax; n++) {
        if (shape === 'triangles') {
          for (let i = 0; i < n; i++) {
            const x0 = x + i * s;
            inner += `<polygon points="${x0},60 ${x0 + s},60 ${x0 + s / 2},${60 - s * 0.87}" fill="none" stroke="#b45309" stroke-width="2.2"/>`;
          }
          inner += this._6svgText(x + (n * s) / 2, 80, `Étape ${n}`, { size: 10 });
          x += n * s + gap;
        } else {
          for (let i = 0; i < n; i++) {
            inner += `<rect x="${x + i * s}" y="${60 - s}" width="${s}" height="${s}" fill="none" stroke="#b45309" stroke-width="2.2"/>`;
          }
          inner += this._6svgText(x + (n * s) / 2, 80, `Étape ${n}`, { size: 10 });
          x += n * s + gap;
        }
      }
      return this._6svg(x, 90, inner, 340);
    },

    // -------------------------------------------------------------------
    // 6N6 — Fractions : quotient, repérage, égalité, comparaison
    // -------------------------------------------------------------------
    generate6N6(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const F = (n, d) => `\\frac{${n}}{${d}}`;
      const mk = (o) => this._6qB('6N6', t, o);

      if (t === 1) {
        const sub = this.randChoice(['quotient', 'decimal', 'part', 'vocab', 'compare_one']);
        if (sub === 'quotient') {
          let a, b;
          do { b = this.randInt(2, 12); a = this.randInt(1, 30); } while (a % b === 0 || this.gcd(a, b) !== 1);
          return mk({
            title: 'La fraction comme quotient',
            statement: `Quel nombre faut-il multiplier par $${b}$ pour obtenir $${a}$ ?\n$$${b} \\times \\square = ${a}$$\nDonner la réponse sous forme de fraction.`,
            type: 'exact', answer: this._6fracAns(a, b), placeholder: 'Ex : 3/4',
            hint1: `Par définition, le quotient de $${a}$ par $${b}$ est le nombre qui, multiplié par $${b}$, donne $${a}$.`,
            hint2: 'Rappel : le quotient d\'un nombre entier par un autre (non nul) peut s\'écrire sous la forme d\'une fraction, avec le dividende au numérateur et le diviseur au dénominateur.',
            solution: `Le nombre cherché est le quotient de $${a}$ par $${b}$ :\n$$${b} \\times ${F(a, b)} = ${a}$$\nLa réponse est $${F(a, b)}$.`,
            _v: { k: '6N6.quotient', a, b }
          });
        }
        if (sub === 'decimal') {
          const b = this.randChoice([2, 4, 5, 10, 20, 25, 100]);
          let a;
          do { a = this.randInt(1, 3 * b); } while (a % b === 0);
          const val = this._6r(a / b);
          return mk({
            title: 'Écriture décimale d\'une fraction',
            statement: `Donner l'écriture décimale de la fraction :\n$$${F(a, b)}$$`,
            type: 'exact', answer: this._6ans(val), placeholder: 'Ex : 0,75',
            hint1: `$${F(a, b)}$ est le quotient de $${a}$ par $${b}$ : effectue la division $${a} \\div ${b}$.`,
            hint2: b === 10 || b === 100 ? 'Une fraction décimale se lit directement : dixièmes ou centièmes.' : `Tu peux aussi chercher une fraction égale de dénominateur $10$ ou $100$.`,
            solution: `$$${F(a, b)} = ${a} \\div ${b} = ${this._6tex(val)}$$`,
            _v: { k: '6N6.decimal', a, b }
          });
        }
        if (sub === 'part') {
          const objs = [['une pizza', 'parts'], ['une tablette de chocolat', 'carrés'], ['une tarte', 'parts'], ['un ruban', 'morceaux'], ['un jardin', 'parcelles']];
          const [obj, unit] = this.randChoice(objs);
          const name = this.randChoice(['Léa', 'Malo', 'Inès', 'Noé', 'Jade', 'Yanis', 'Lina', 'Hugo']);
          let a, b;
          do { b = this.randInt(3, 12); a = this.randInt(1, b - 1); } while (2 * a === b);
          const q = mk({
            title: 'Fraction d\'un partage',
            statement: `On partage ${obj} en $${b}$ ${unit} égales. ${name} en prend $${a}$.\n**Quelle fraction de l'ensemble a été prise par ${name} ?**`,
            hint1: 'Le dénominateur indique en combien de parts égales on partage ; le numérateur, combien on en prend.',
            hint2: `Il y a $${b}$ parts au total et on en prend $${a}$.`,
            solution: `On partage l'unité en $${b}$ parts égales et on en prend $${a}$ : c'est $${F(a, b)}$.`,
            skill: 'Représenter',
            _v: { k: '6N6.part', a, b }
          });
          return this._6mcq(q, `$${F(a, b)}$`, [`$${F(b, a)}$`, `$${F(a, b - a)}$`, `$${F(b - a, b)}$`]);
        }
        if (sub === 'vocab') {
          let a, b;
          do { a = this.randInt(1, 40); b = this.randInt(2, 40); } while (a === b);
          const askNum = Math.random() < 0.5;
          return mk({
            title: 'Vocabulaire : numérateur et dénominateur',
            statement: `On considère la fraction $${F(a, b)}$.\n**Quel est son ${askNum ? 'numérateur' : 'dénominateur'} ?**`,
            type: 'exact', answer: String(askNum ? a : b),
            hint1: 'Le numérateur est écrit au-dessus du trait de fraction, le dénominateur en dessous.',
            hint2: 'Le dénominateur « dénomme » le nombre de parts égales.',
            solution: `Dans $${F(a, b)}$, le numérateur est $${a}$ et le dénominateur est $${b}$.`,
            skill: 'Connaître',
            _v: { k: '6N6.vocab', a, b, askNum }
          });
        }
        // compare_one
        let a, b;
        do { b = this.randInt(2, 15); a = this.randInt(1, 2 * b + 3); } while (false);
        const q = mk({
          title: 'Comparer une fraction à 1',
          statement: `Compléter avec le bon symbole :\n$$${F(a, b)} \\; \\dots \\; 1$$`,
          hint1: 'Une fraction est inférieure à 1 quand son numérateur est plus petit que son dénominateur.',
          hint2: `Compare $${a}$ et $${b}$.`,
          solution: a < b ? `$${a} < ${b}$ donc $${F(a, b)} < 1$.` : (a > b ? `$${a} > ${b}$ donc $${F(a, b)} > 1$.` : `Numérateur et dénominateur sont égaux : $${F(a, b)} = 1$.`),
          skill: 'Comparer',
          _v: { k: '6N6.cmp1', a, b }
        });
        const c = a < b ? '$<$' : (a > b ? '$>$' : '$=$');
        return this._6mcq(q, c, ['$<$', '$>$', '$=$']);
      }

      if (t === 2) {
        const sub = this.randChoice(['numberline', 'equal', 'simplify', 'nature']);
        if (sub === 'numberline') {
          const d = this.randChoice([2, 3, 4, 5, 6, 8]);
          let n;
          do { n = this.randInt(1, 3 * d - 1); } while (this.gcd(n, d) !== 1);
          const L = this.randChoice(['A', 'B', 'C', 'M', 'K', 'P']);
          const fig = this._6numberLine({ start: 0, step: 1, nTicks: 3, sub: d, points: [{ label: L, value: n / d }], shown: [0, 1, 2, 3] });
          return mk({
            title: 'Repérer une fraction sur une demi-droite graduée',
            statement: `Sur la demi-droite graduée ci-dessous, chaque unité est partagée en $${d}$ parts égales.\n${fig}**Quelle est l'abscisse du point ${L} ?** Donner la réponse sous forme de fraction.`,
            type: 'exact', answer: this._6fracAns(n, d), placeholder: 'Ex : 5/3',
            hint1: `Chaque unité est partagée en $${d}$ parts égales : repère ce que vaut une petite graduation.`,
            hint2: `Compte le nombre de graduations entre $0$ et le point ${L}.`,
            solution: `Le point ${L} est à $${n}$ graduations de l'origine, chacune valant $${F(1, d)}$ : son abscisse est $${F(n, d)}$.`,
            skill: 'Représenter',
            _v: { k: '6N6.line', n, d }
          });
        }
        if (sub === 'equal') {
          let a, b;
          do { b = this.randInt(2, 9); a = this.randInt(1, 12); } while (this.gcd(a, b) !== 1);
          const k = this.randInt(2, 9);
          const askNum = Math.random() < 0.6;
          return mk({
            title: 'Fractions égales',
            statement: askNum
              ? `Compléter l'égalité :\n$$${F(a, b)} = ${F('\\square', b * k)}$$`
              : `Compléter l'égalité :\n$$${F(a, b)} = ${F(a * k, '\\square')}$$`,
            type: 'exact', answer: String(askNum ? a * k : b * k),
            hint1: 'On ne change pas une fraction en multipliant son numérateur et son dénominateur par un même nombre non nul.',
            hint2: askNum ? `Par combien a-t-on multiplié $${b}$ pour obtenir $${b * k}$ ?` : `Par combien a-t-on multiplié $${a}$ pour obtenir $${a * k}$ ?`,
            solution: `$$${F(a, b)} = ${F(`${a} \\times ${k}`, `${b} \\times ${k}`)} = ${F(a * k, b * k)}$$`,
            _v: { k: '6N6.equal', a, b, kk: k, askNum }
          });
        }
        if (sub === 'simplify') {
          let a, b;
          do { b = this.randInt(2, 10); a = this.randInt(1, 15); } while (this.gcd(a, b) !== 1);
          const k = this.randInt(2, 9);
          return mk({
            title: 'Simplifier une fraction',
            statement: `Simplifier la fraction suivante et donner le résultat sous forme de fraction irréductible :\n$$${F(a * k, b * k)}$$`,
            type: 'exact', answer: this._6fracAns(a, b), placeholder: 'Ex : 2/3',
            hint1: `Cherche un diviseur commun à $${a * k}$ et $${b * k}$ (pense aux tables de multiplication).`,
            hint2: `$${a * k}$ et $${b * k}$ sont tous les deux dans la table de $${k}$.`,
            solution: `$$${F(a * k, b * k)} = ${F(`${a} \\times ${k}`, `${b} \\times ${k}`)} = ${b === 1 ? a : F(a, b)}$$`,
            _v: { k: '6N6.simplify', a: a * k, b: b * k }
          });
        }
        // nature
        const kind = this.randChoice(['ent', 'dec', 'non']);
        let a, b;
        if (kind === 'ent') { b = this.randInt(2, 12); a = b * this.randInt(1, 9); }
        else if (kind === 'dec') { b = this.randChoice([2, 4, 5, 8, 10, 20, 25]); do { a = this.randInt(1, 50); } while (a % b === 0); }
        else {
          const notDec = (n, d) => { let m = this.simplifyFraction(n, d)[1]; while (m % 2 === 0) m /= 2; while (m % 5 === 0) m /= 5; return m !== 1; };
          b = this.randChoice([3, 6, 7, 9, 11, 12, 15]);
          do { a = this.randInt(1, 50); } while (!notDec(a, b));
        }
        const [, rd] = this.simplifyFraction(a, b);
        let m = rd; while (m % 2 === 0) m /= 2; while (m % 5 === 0) m /= 5;
        const correct = rd === 1 ? 'Un nombre entier' : (m === 1 ? 'Un nombre décimal non entier' : 'Un nombre non décimal');
        const q = mk({
          title: 'Nature du nombre représenté par une fraction',
          statement: `Le nombre $${F(a, b)}$ est :`,
          hint1: `Effectue la division $${a} \\div ${b}$ : tombe-t-elle juste ? S'arrête-t-elle après la virgule ?`,
          hint2: 'Si la division ne s\'arrête jamais (des chiffres se répètent sans fin), le nombre n\'est pas décimal.',
          solution: rd === 1 ? `$${a} \\div ${b} = ${a / b}$ : c'est un nombre entier.`
            : (m === 1 ? `$${a} \\div ${b} = ${this._6tex(a / b)}$ : la division s'arrête, c'est un nombre décimal non entier.`
              : `La division $${a} \\div ${b}$ ne s'arrête jamais (des chiffres se répètent) : $${F(a, b)}$ n'est pas un nombre décimal.`),
          skill: 'Raisonner',
          _v: { k: '6N6.nature', a, b }
        });
        return this._6mcq(q, correct, ['Un nombre entier', 'Un nombre décimal non entier', 'Un nombre non décimal']);
      }

      if (t === 3) {
        const sub = this.randChoice(['compare', 'mixed', 'frame']);
        if (sub === 'compare') {
          const b = this.randInt(2, 9), k = this.randInt(2, 5);
          const a = this.randInt(1, 2 * b);
          let c;
          do { c = this.randInt(1, 2 * b * k); } while (Math.random() < 0.7 && c === a * k);
          const left = Math.random() < 0.5;
          const [n1, d1, n2, d2] = left ? [a, b, c, b * k] : [c, b * k, a, b];
          const cmp = n1 * d2 - n2 * d1;
          const q = mk({
            title: 'Comparer deux fractions',
            statement: `Compléter avec le bon symbole :\n$$${F(n1, d1)} \\; \\dots \\; ${F(n2, d2)}$$`,
            hint1: `Écris les deux fractions avec le même dénominateur $${b * k}$.`,
            hint2: 'Rappel : deux fractions de même dénominateur sont rangées dans le même ordre que leurs numérateurs.',
            solution: `$${F(a, b)} = ${F(a * k, b * k)}$. On compare $${a * k}$ et $${c}$ : donc $${F(n1, d1)} ${cmp < 0 ? '<' : (cmp > 0 ? '>' : '=')} ${F(n2, d2)}$.`,
            skill: 'Comparer',
            _v: { k: '6N6.cmp', n1, d1, n2, d2 }
          });
          return this._6mcq(q, cmp < 0 ? '$<$' : (cmp > 0 ? '$>$' : '$=$'), ['$<$', '$>$', '$=$']);
        }
        if (sub === 'mixed') {
          let n, d;
          do { d = this.randInt(2, 9); n = this.randInt(d + 1, 9 * d); } while (n % d === 0);
          const e = Math.floor(n / d), r = n % d;
          const q = mk({
            title: 'Écrire une fraction sous forme de nombre mixte',
            statement: `Parmi les écritures suivantes, laquelle est égale à $${F(n, d)}$ ?`,
            hint1: `Combien de fois $${d}$ est-il contenu dans $${n}$ ? C'est la partie entière.`,
            hint2: `Rappel : si $${n} = ${d} \\times e + r$ avec $r < ${d}$, alors $${F(n, d)} = e + ${F('r', d)}$.`,
            solution: `Étape 1 : division euclidienne de $${n}$ par $${d}$ : $${n} = ${d} \\times ${e} + ${r}$ avec $${r} < ${d}$.\nÉtape 2 : donc $${F(n, d)} = ${F(d * e, d)} + ${F(r, d)} = ${e} + ${F(r, d)}$.\nLa bonne écriture est $${e} + ${F(r, d)}$.`,
            skill: 'Représenter',
            _v: { k: '6N6.mixed', n, d }
          });
          return this._6mcq(q, `$${e} + ${F(r, d)}$`, [`$${e + 1} + ${F(r, d)}$`, `$${e} + ${F(d - r, d)}$`, `$${r} + ${F(e, d)}$`, `$${e - 1} + ${F(r, d)}$`]);
        }
        let n, d;
        do { d = this.randInt(2, 12); n = this.randInt(d + 1, 12 * d); } while (n % d === 0);
        return mk({
          title: 'Encadrer une fraction entre deux entiers',
          statement: `Trouver l'entier $e$ tel que :\n$$e < ${F(n, d)} < e + 1$$`,
          type: 'exact', answer: String(Math.floor(n / d)),
          hint1: `Cherche le plus grand multiple de $${d}$ inférieur à $${n}$.`,
          hint2: 'Rappel : un entier $e$ s\'écrit comme une fraction de même dénominateur ; deux fractions de même dénominateur se rangent comme leurs numérateurs.',
          solution: `Étape 1 : $${d} \\times ${Math.floor(n / d)} = ${d * Math.floor(n / d)}$ et $${d} \\times ${Math.floor(n / d) + 1} = ${d * (Math.floor(n / d) + 1)}$, donc $${d * Math.floor(n / d)} < ${n} < ${d * (Math.floor(n / d) + 1)}$.\nÉtape 2 : $${F(d * Math.floor(n / d), d)} < ${F(n, d)} < ${F(d * (Math.floor(n / d) + 1), d)}$, c'est-à-dire $${Math.floor(n / d)} < ${F(n, d)} < ${Math.floor(n / d) + 1}$.\nDonc $e = ${Math.floor(n / d)}$.`,
          skill: 'Comparer',
          _v: { k: '6N6.frame', n, d }
        });
      }

      // t === 4 : Défi 5ème
      const sub = this.randChoice(['order', 'between', 'from_mixed', 'percent']);
      if (sub === 'order') {
        const b = this.randInt(2, 5);
        const dens = [b, 2 * b, 4 * b, this.randChoice([b, 2 * b, 4 * b])];
        const list = [];
        const vals = new Set();
        for (const d of dens) {
          let n, tries = 0;
          do { n = this.randInt(1, 2 * d); tries++; } while ((vals.has(n * 4 * b / d) || this.gcd(n, d) !== 1) && tries < 50);
          if (vals.has(n * 4 * b / d)) continue;
          vals.add(n * 4 * b / d);
          list.push([n, d]);
        }
        const askMax = Math.random() < 0.5;
        const best = list.reduce((acc, f) => ((askMax ? f[0] / f[1] > acc[0] / acc[1] : f[0] / f[1] < acc[0] / acc[1]) ? f : acc));
        const q = mk({
          title: `Défi 5ème : la plus ${askMax ? 'grande' : 'petite'} fraction`,
          statement: `Quelle est la plus ${askMax ? 'grande' : 'petite'} des fractions suivantes ?\n$$${list.map(f => F(f[0], f[1])).join(' \\; ; \\; ')}$$`,
          hint1: `Écris toutes les fractions avec le dénominateur commun $${4 * b}$.`,
          hint2: 'Avec le même dénominateur, la plus grande fraction est celle qui a le plus grand numérateur.',
          solution: `Avec le dénominateur $${4 * b}$ : $${list.map(f => `${F(f[0], f[1])} = ${F(f[0] * 4 * b / f[1], 4 * b)}`).join(' \\; ; \\; ')}$.\nLa plus ${askMax ? 'grande' : 'petite'} est $${F(best[0], best[1])}$.`,
          skill: 'Comparer',
          _v: { k: '6N6.order', list, askMax }
        });
        return this._6mcq(q, `$${F(best[0], best[1])}$`, list.filter(f => f !== best).map(f => `$${F(f[0], f[1])}$`));
      }
      if (sub === 'between') {
        const b = this.randInt(2, 12), a = this.randInt(1, 3 * b);
        return mk({
          title: 'Défi 5ème : intercaler une fraction',
          statement: `Trouver le nombre entier $n$ tel que :\n$$${F(a, b)} < ${F('n', 2 * b)} < ${F(a + 1, b)}$$`,
          type: 'exact', answer: String(2 * a + 1),
          hint1: `Écris les deux fractions encadrantes avec le dénominateur $${2 * b}$.`,
          hint2: 'Rappel : on obtient une fraction égale en multipliant le numérateur et le dénominateur par un même nombre ; à dénominateur égal, on compare les numérateurs.',
          solution: `Étape 1 : $${F(a, b)} = ${F(2 * a, 2 * b)}$ et $${F(a + 1, b)} = ${F(2 * a + 2, 2 * b)}$ (on multiplie par $2$).\nÉtape 2 : on cherche $n$ tel que $${F(2 * a, 2 * b)} < ${F('n', 2 * b)} < ${F(2 * a + 2, 2 * b)}$, donc $${2 * a} < n < ${2 * a + 2}$.\nLe seul entier qui convient est $n = ${2 * a + 1}$.`,
          skill: 'Raisonner',
          _v: { k: '6N6.between', a, b }
        });
      }
      if (sub === 'from_mixed') {
        let d, r;
        do { d = this.randInt(2, 12); r = this.randInt(1, d - 1); } while (this.gcd(r, d) !== 1);
        const e = this.randInt(1, 9);
        return mk({
          title: 'Défi 5ème : du nombre mixte à la fraction',
          statement: `Écrire le nombre suivant sous la forme d'une seule fraction irréductible :\n$$${e} + ${F(r, d)}$$`,
          type: 'exact', answer: this._6fracAns(e * d + r, d), placeholder: 'Ex : 17/5',
          hint1: `Écris l'entier $${e}$ sous la forme d'une fraction de dénominateur $${d}$.`,
          hint2: 'Rappel : un entier s\'écrit comme une fraction de dénominateur choisi : le numérateur est l\'entier multiplié par ce dénominateur.',
          solution: `Étape 1 : $${e} = ${F(`${e} \\times ${d}`, d)} = ${F(e * d, d)}$.\nÉtape 2 : $${F(e * d, d)} + ${F(r, d)} = ${F(`${e * d} + ${r}`, d)} = ${F(e * d + r, d)}$.\nDonc $${e} + ${F(r, d)} = ${F(e * d + r, d)}$ (irréductible).`,
          _v: { k: '6N6.frommixed', e, r, d }
        });
      }
      const b = this.randChoice([2, 4, 5, 10, 20, 25, 50]);
      const a = this.randInt(1, b - 1);
      return mk({
        title: 'Défi 5ème : fraction et pourcentage',
        statement: `Écrire la fraction $${F(a, b)}$ sous la forme d'un pourcentage.\n**Compléter : $${F(a, b)} = \\square \\, \\%$** (donner le nombre seul).`,
        type: 'exact', answer: this._6ans(a * 100 / b),
        hint1: 'Un pourcentage est une fraction de dénominateur $100$.',
        hint2: 'Rappel : on obtient une fraction égale en multipliant le numérateur et le dénominateur par un même nombre : choisis celui qui transforme le dénominateur en 100.',
        solution: `$$${F(a, b)} = ${F(`${a} \\times ${100 / b}`, `${b} \\times ${100 / b}`)} = ${F(a * 100 / b, 100)} = ${a * 100 / b} \\, \\%$$`,
        _v: { k: '6N6.percent', a, b }
      });
    },

    // -------------------------------------------------------------------
    // 6N7 — Calculs avec les fractions
    // -------------------------------------------------------------------
    generate6N7(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const F = (n, d) => `\\frac{${n}}{${d}}`;
      const mk = (o) => this._6qB('6N7', t, Object.assign({ placeholder: 'Ex : 7/6' }, o));
      const irr = 'Donner le résultat sous forme de fraction irréductible (ou d\'un nombre entier).';
      const res = (n, d) => { const [a, b] = this.simplifyFraction(n, d); return b === 1 ? `${a}` : F(a, b); };
      const simpStep = (n, d) => { const [a, b] = this.simplifyFraction(n, d); return (a === n) ? '' : ` = ${b === 1 ? a : F(a, b)}`; };

      if (t === 1) {
        const sub = this.randChoice(['add_same', 'sub_same', 'of_qty', 'mult_int']);
        if (sub === 'add_same' || sub === 'sub_same') {
          const d = this.randInt(3, 15);
          let a = this.randInt(1, d + 5), b = this.randInt(1, d + 5);
          if (sub === 'sub_same') { if (a < b) [a, b] = [b, a]; if (a === b) a++; }
          const n = sub === 'add_same' ? a + b : a - b;
          const op = sub === 'add_same' ? '+' : '-';
          return mk({
            title: sub === 'add_same' ? 'Additionner des fractions de même dénominateur' : 'Soustraire des fractions de même dénominateur',
            statement: `Calculer :\n$$${F(a, d)} ${op} ${F(b, d)}$$\n${irr}`,
            type: 'exact', answer: this._6fracAns(n, d),
            hint1: 'Quand les dénominateurs sont égaux, on garde le dénominateur et on calcule avec les numérateurs.',
            hint2: `Rappel : $\\frac{a}{d} ${op} \\frac{b}{d} = \\frac{a ${op} b}{d}$ ; pense ensuite à simplifier la fraction obtenue.`,
            solution: `$$${F(a, d)} ${op} ${F(b, d)} = ${F(`${a} ${op} ${b}`, d)} = ${F(n, d)}${simpStep(n, d)}$$`,
            _v: { k: '6N7.addsame', a, b, d, op }
          });
        }
        if (sub === 'of_qty') {
          let a, b;
          do { b = this.randInt(2, 10); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
          const N = b * this.randInt(2, 15);
          return mk({
            title: 'Prendre une fraction d\'une quantité',
            statement: `Calculer $${F(a, b)}$ de $${N}$.`,
            type: 'exact', answer: String(N / b * a), placeholder: 'Ex : 12',
            hint1: `Prendre $${F(a, b)}$ de $${N}$, c'est calculer $${F(a, b)} \\times ${N}$ : on peut diviser $${N}$ par $${b}$ puis multiplier par $${a}$.`,
            hint2: 'Rappel : prendre une fraction $\\frac{a}{b}$ d\'une quantité, c\'est partager cette quantité en $b$ parts égales, puis prendre $a$ de ces parts.',
            solution: `$$${F(a, b)} \\times ${N} = (${N} \\div ${b}) \\times ${a} = ${N / b} \\times ${a} = ${N / b * a}$$`,
            _v: { k: '6N7.ofqty', a, b, N }
          });
        }
        const d = this.randInt(2, 12), a = this.randInt(1, d + 3), k = this.randInt(2, 9);
        return mk({
          title: 'Multiplier une fraction par un entier',
          statement: `Calculer :\n$$${k} \\times ${F(a, d)}$$\n${irr}`,
          type: 'exact', answer: this._6fracAns(k * a, d),
          hint1: 'Pour multiplier une fraction par un entier, on multiplie le numérateur par cet entier et on garde le dénominateur.',
          hint2: 'Rappel : $k \\times \\frac{a}{d} = \\frac{k \\times a}{d}$ ; on simplifie ensuite si possible.',
          solution: `$$${k} \\times ${F(a, d)} = ${F(`${k} \\times ${a}`, d)} = ${F(k * a, d)}${simpStep(k * a, d)}$$`,
          _v: { k: '6N7.multint', kk: k, a, d }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['add_mult', 'sub_mult', 'ctx_qty', 'int_plus']);
        if (sub === 'add_mult' || sub === 'sub_mult') {
          const b = this.randInt(2, 8), k = this.randInt(2, 5);
          const a = this.randInt(1, 2 * b);
          let c = this.randInt(1, 2 * b * k);
          if (sub === 'sub_mult' && c >= a * k) c = this.randInt(1, a * k - 1 || 1);
          if (sub === 'sub_mult' && c >= a * k) return this.generate6N7(2, mastery);
          const op = sub === 'add_mult' ? '+' : '-';
          const n = sub === 'add_mult' ? a * k + c : a * k - c;
          return mk({
            title: 'Fractions de dénominateurs multiples',
            statement: `Calculer :\n$$${F(a, b)} ${op} ${F(c, b * k)}$$\n${irr}`,
            type: 'exact', answer: this._6fracAns(n, b * k),
            hint1: `$${b * k}$ est un multiple de $${b}$ : écris $${F(a, b)}$ avec le dénominateur $${b * k}$.`,
            hint2: 'Rappel : on ne change pas une fraction en multipliant son numérateur et son dénominateur par un même nombre non nul.',
            solution: `Étape 1 : on écrit $${F(a, b)}$ avec le dénominateur $${b * k}$ : $${F(a, b)} = ${F(`${a} \\times ${k}`, `${b} \\times ${k}`)} = ${F(a * k, b * k)}$.\nÉtape 2 : $${F(a * k, b * k)} ${op} ${F(c, b * k)} = ${F(`${a * k} ${op} ${c}`, b * k)} = ${F(n, b * k)}${simpStep(n, b * k)}$.\nLe résultat est $${res(n, b * k)}$.`,
            _v: { k: '6N7.addmult', a, b, c, kk: k, op }
          });
        }
        if (sub === 'ctx_qty') {
          let a, b;
          do { b = this.randChoice([2, 3, 4, 5, 6, 8, 10]); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
          const ctxs = [
            ['Un collège compte', 'élèves', 'sont demi-pensionnaires', 'Combien d\'élèves sont demi-pensionnaires ?'],
            ['Une bibliothèque possède', 'livres', 'sont des romans', 'Combien de romans possède-t-elle ?'],
            ['Un club de sport a', 'adhérents', 'pratiquent le football', 'Combien d\'adhérents pratiquent le football ?'],
            ['Un verger contient', 'arbres', 'sont des pommiers', 'Combien y a-t-il de pommiers ?']
          ];
          const [intro, unit, what, ask] = this.randChoice(ctxs);
          const N = b * this.randInt(5, 60);
          return mk({
            title: 'Problème : fraction d\'une quantité',
            statement: `${intro} $${N}$ ${unit}. Les $${F(a, b)}$ d'entre eux ${what}.\n**${ask}**`,
            type: 'exact', answer: String(N / b * a), placeholder: 'Ex : 120',
            hint1: `Il faut calculer $${F(a, b)}$ de $${N}$.`,
            hint2: 'Rappel : prendre $\\frac{a}{b}$ d\'une quantité, c\'est la diviser par $b$ (une part) puis multiplier le résultat par $a$.',
            solution: `Étape 1 : une part : $${N} \\div ${b} = ${N / b}$.\nÉtape 2 : $${a}$ part${a > 1 ? 's' : ''} : $${N / b} \\times ${a} = ${N / b * a}$.\nLa réponse est $${N / b * a}$ ${unit}.`,
            skill: 'Résoudre',
            _v: { k: '6N7.ofqty', a, b, N }
          });
        }
        let a, b;
        do { b = this.randInt(2, 12); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
        const n = this.randInt(1, 9);
        const left = Math.random() < 0.5;
        return mk({
          title: 'Somme d\'un entier et d\'une fraction',
          statement: `Calculer :\n$$${left ? `${n} + ${F(a, b)}` : `${F(a, b)} + ${n}`}$$\n${irr}`,
          type: 'exact', answer: this._6fracAns(n * b + a, b),
          hint1: `Écris l'entier $${n}$ sous forme de fraction de dénominateur $${b}$.`,
          hint2: 'Rappel : un entier $n$ s\'écrit $\\frac{n \\times b}{b}$ ; on additionne ensuite les numérateurs en gardant le dénominateur.',
          solution: `$$${left ? `${n} + ${F(a, b)}` : `${F(a, b)} + ${n}`} = ${left ? `${F(n * b, b)} + ${F(a, b)}` : `${F(a, b)} + ${F(n * b, b)}`} = ${F(n * b + a, b)}$$`,
          _v: { k: '6N7.intplus', n, a, b }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['three', 'remaining', 'missing', 'reverse']);
        if (sub === 'three') {
          const b = this.randInt(2, 5), k = this.randInt(2, 4), D = b * k;
          const a = this.randInt(1, 2 * b), c = this.randInt(1, D);
          const e = this.randInt(1, a * k + c - 1);
          const n = a * k + c - e;
          return mk({
            title: 'Enchaîner additions et soustractions de fractions',
            statement: `Calculer :\n$$${F(a, b)} + ${F(c, D)} - ${F(e, D)}$$\n${irr}`,
            type: 'exact', answer: this._6fracAns(n, D),
            hint1: `Mets toutes les fractions au dénominateur $${D}$.`,
            hint2: 'Rappel : on ne change pas une fraction en multipliant son numérateur et son dénominateur par un même nombre ; on calcule ensuite de gauche à droite.',
            solution: `Étape 1 : $${F(a, b)} = ${F(`${a} \\times ${k}`, `${b} \\times ${k}`)} = ${F(a * k, D)}$.\nÉtape 2 : $${F(a * k, D)} + ${F(c, D)} - ${F(e, D)} = ${F(`${a * k} + ${c} - ${e}`, D)} = ${F(n, D)}${simpStep(n, D)}$.\nLe résultat est $${res(n, D)}$.`,
            _v: { k: '6N7.three', a, b, c, e, D }
          });
        }
        if (sub === 'remaining') {
          const b = this.randChoice([2, 3, 4, 5]), k = this.randChoice([2, 3, 4]), D = b * k;
          const a = this.randInt(1, b - 1);
          const c = this.randInt(1, D - a * k - 1 > 0 ? D - a * k - 1 : 1);
          if (a * k + c >= D) return this.generate6N7(3, mastery);
          const name = this.randChoice(['Camille', 'Sacha', 'Nora', 'Timéo', 'Rose', 'Adam']);
          const items = this.randChoice([['son argent de poche', 'un livre', 'une place de cinéma'], ['son temps libre', 'la lecture', 'le sport'], ['sa journée de randonnée', 'la montée', 'la pause du midi']]);
          const n = D - a * k - c;
          return mk({
            title: 'Problème : fraction restante',
            statement: `${name} consacre $${F(a, b)}$ de ${items[0]} à ${items[1]} et $${F(c, D)}$ à ${items[2]}.\n**Quelle fraction de ${items[0]} reste-t-il ?** ${irr}`,
            type: 'exact', answer: this._6fracAns(n, D),
            hint1: `Le tout correspond à $1 = ${F(D, D)}$.`,
            hint2: 'Rappel : pour additionner des fractions, on les écrit avec le même dénominateur ; la fraction restante est l\'écart entre 1 et la fraction utilisée.',
            solution: `Fraction utilisée : $${F(a * k, D)} + ${F(c, D)} = ${F(a * k + c, D)}$.\nFraction restante : $${F(D, D)} - ${F(a * k + c, D)} = ${F(n, D)}${simpStep(n, D)}$.`,
            skill: 'Résoudre',
            _v: { k: '6N7.remaining', a, b, c, D }
          });
        }
        if (sub === 'missing') {
          const b = this.randInt(2, 6), k = this.randInt(2, 4), D = b * k;
          const a = this.randInt(1, 2 * b), x = this.randInt(1, 2 * D);
          return mk({
            title: 'Égalité à compléter',
            statement: `Compléter :\n$$${F(a, b)} + ${F('\\square', D)} = ${F(a * k + x, D)}$$`,
            type: 'exact', answer: String(x), placeholder: 'Ex : 5',
            hint1: `Écris $${F(a, b)}$ avec le dénominateur $${D}$.`,
            hint2: 'Rappel : pour additionner deux fractions de même dénominateur, on additionne les numérateurs : le numérateur manquant est donc une différence.',
            solution: `$${F(a, b)} = ${F(a * k, D)}$ et $${a * k + x} - ${a * k} = ${x}$, donc le nombre manquant est $${x}$.`,
            skill: 'Raisonner',
            _v: { k: '6N7.missing', a, b, D, total: a * k + x }
          });
        }
        let a, b;
        do { b = this.randInt(2, 9); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
        const u = this.randInt(2, 25);
        return mk({
          title: 'Retrouver le tout à partir d\'une fraction',
          statement: `Les $${F(a, b)}$ d'un nombre valent $${a * u}$.\n**Quel est ce nombre ?**`,
          type: 'exact', answer: String(b * u), placeholder: 'Ex : 40',
          hint1: `$${a}$ parts sur $${b}$ valent $${a * u}$ : combien vaut une part ?`,
          hint2: `Rappel : $${F(a, b)}$ d'un nombre, ce sont $${a}$ parts parmi $${b}$ parts égales ; le nombre entier correspond aux $${b}$ parts.`,
          solution: `Étape 1 : $${a}$ part${a > 1 ? 's' : ''} valent $${a * u}$, donc une part vaut $${a * u} \\div ${a} = ${u}$.\nÉtape 2 : le nombre compte $${b}$ parts : $${b} \\times ${u} = ${b * u}$.\nVérification : $${F(a, b)} \\times ${b * u} = ${a * u}$. Le nombre cherché est $${b * u}$.`,
          skill: 'Résoudre',
          _v: { k: '6N7.reverse', a, b, val: a * u }
        });
      }

      // t === 4
      const sub = this.randChoice(['money', 'mult_add', 'to_one', 'chain']);
      if (sub === 'money') {
        const b = this.randChoice([2, 3, 4, 5]), k = this.randChoice([2, 3, 4]), D = b * k;
        const a = this.randInt(1, b - 1);
        const c = this.randInt(1, Math.max(1, D - a * k - 1));
        if (a * k + c >= D || this.gcd(a, b) !== 1 || this.gcd(c, D) !== 1) return this.generate6N7(4, mastery);
        const N = D * this.randInt(2, 30);
        const rest = N - N / b * a - N / D * c;
        const name = this.randChoice(['Une association', 'Une famille', 'Une équipe', 'Une classe']);
        return mk({
          title: 'Défi 5ème : budget et fractions',
          statement: `${name} dispose de $${N}$ €. Elle dépense les $${F(a, b)}$ de cette somme pour un voyage et les $${F(c, D)}$ pour du matériel.\n**Combien d'euros lui reste-t-il ?**`,
          type: 'exact', answer: String(rest), placeholder: 'Ex : 150',
          hint1: `Calcule chaque dépense : $${F(a, b)}$ de $${N}$, puis $${F(c, D)}$ de $${N}$.`,
          hint2: 'Rappel : prendre $\\frac{a}{b}$ d\'une somme, c\'est la diviser par $b$ puis multiplier par $a$ ; ce qui reste est la somme de départ moins les dépenses.',
          solution: `Voyage : $${F(a, b)} \\times ${N} = ${N / b * a}$ €. Matériel : $${F(c, D)} \\times ${N} = ${N / D * c}$ €.\nReste : $${N} - ${N / b * a} - ${N / D * c} = ${rest}$ €.`,
          skill: 'Résoudre',
          _v: { k: '6N7.money', a, b, c, D, N }
        });
      }
      if (sub === 'mult_add') {
        const d = this.randInt(2, 12), a = this.randInt(1, d), k = this.randInt(2, 6), c = this.randInt(1, 2 * d);
        return mk({
          title: 'Défi 5ème : priorités avec des fractions',
          statement: `Calculer :\n$$${k} \\times ${F(a, d)} + ${F(c, d)}$$\n${irr}`,
          type: 'exact', answer: this._6fracAns(k * a + c, d),
          hint1: 'La multiplication est prioritaire sur l\'addition.',
          hint2: 'Rappel : pour multiplier une fraction par un entier, on multiplie le numérateur par cet entier et on garde le dénominateur.',
          solution: `$$${k} \\times ${F(a, d)} + ${F(c, d)} = ${F(k * a, d)} + ${F(c, d)} = ${F(k * a + c, d)}${simpStep(k * a + c, d)}$$`,
          _v: { k: '6N7.multadd', kk: k, a, c, d }
        });
      }
      if (sub === 'to_one') {
        const b = this.randInt(2, 5), k = this.randInt(2, 4), D = b * k;
        const a = this.randInt(1, b - 1);
        const c = this.randInt(1, Math.max(1, D - a * k - 1));
        if (a * k + c >= D) return this.generate6N7(4, mastery);
        const n = D - a * k - c;
        return mk({
          title: 'Défi 5ème : compléter jusqu\'à 1',
          statement: `Quelle fraction faut-il ajouter à $${F(a, b)} + ${F(c, D)}$ pour obtenir $1$ ?\n${irr}`,
          type: 'exact', answer: this._6fracAns(n, D),
          hint1: `$1 = ${F(D, D)}$.`,
          hint2: `Rappel : on additionne d'abord les deux fractions après les avoir écrites avec le dénominateur $${D}$, puis on calcule l'écart avec $1$.`,
          solution: `$${F(a, b)} + ${F(c, D)} = ${F(a * k + c, D)}$ et $${F(D, D)} - ${F(a * k + c, D)} = ${F(n, D)}${simpStep(n, D)}$.`,
          skill: 'Raisonner',
          _v: { k: '6N7.remaining', a, b, c, D }
        });
      }
      const b = this.randInt(2, 4);
      const d1 = b, d2 = 2 * b, d3 = 4 * b;
      const a = this.randInt(1, d1), c = this.randInt(1, d2), e = this.randInt(1, d3);
      const n = a * 4 + c * 2 + e;
      return mk({
        title: 'Défi 5ème : somme de trois fractions',
        statement: `Calculer :\n$$${F(a, d1)} + ${F(c, d2)} + ${F(e, d3)}$$\n${irr}`,
        type: 'exact', answer: this._6fracAns(n, d3),
        hint1: `Le dénominateur commun est $${d3}$.`,
        hint2: 'Rappel : pour additionner des fractions, on les écrit d\'abord avec le même dénominateur (en multipliant numérateur et dénominateur par un même nombre).',
        solution: `Étape 1 : $${F(a, d1)} = ${F(`${a} \\times 4`, `${d1} \\times 4`)} = ${F(4 * a, d3)}$ et $${F(c, d2)} = ${F(`${c} \\times 2`, `${d2} \\times 2`)} = ${F(2 * c, d3)}$.\nÉtape 2 : $${F(4 * a, d3)} + ${F(2 * c, d3)} + ${F(e, d3)} = ${F(`${4 * a} + ${2 * c} + ${e}`, d3)} = ${F(n, d3)}${simpStep(n, d3)}$.\nLe résultat est $${res(n, d3)}$.`,
        _v: { k: '6N7.chain', a, c, e, b }
      });
    },

    // -------------------------------------------------------------------
    // 6N8 — Pensée algébrique
    // -------------------------------------------------------------------
    generate6N8(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const mk = (o) => this._6qB('6N8', t, Object.assign({ skill: 'Raisonner' }, o));
      const S = '\\square';

      if (t === 1) {
        const sub = this.randChoice(['add', 'sub1', 'sub2', 'mult', 'div']);
        let a, b, ans, eq, sol;
        if (sub === 'add') { a = this.randInt(12, 250); ans = this.randInt(5, 250); b = a + ans; eq = Math.random() < 0.5 ? `${a} + ${S} = ${b}` : `${S} + ${a} = ${b}`; sol = `${S} = ${b} - ${a} = ${ans}`; }
        else if (sub === 'sub1') { a = this.randInt(5, 150); b = this.randInt(5, 200); ans = a + b; eq = `${S} - ${a} = ${b}`; sol = `${S} = ${b} + ${a} = ${ans}`; }
        else if (sub === 'sub2') { ans = this.randInt(5, 150); b = this.randInt(5, 200); a = ans + b; eq = `${a} - ${S} = ${b}`; sol = `${S} = ${a} - ${b} = ${ans}`; }
        else if (sub === 'mult') { a = this.randInt(2, 12); ans = this.randInt(2, 12); b = a * ans; eq = Math.random() < 0.5 ? `${a} \\times ${S} = ${b}` : `${S} \\times ${a} = ${b}`; sol = `${S} = ${b} \\div ${a} = ${ans}`; }
        else { a = this.randInt(2, 10); b = this.randInt(2, 12); ans = a * b; eq = `${S} \\div ${a} = ${b}`; sol = `${S} = ${b} \\times ${a} = ${ans}`; }
        return mk({
          title: 'Égalité à trou',
          statement: `Quel nombre faut-il écrire dans la case pour que l'égalité soit vraie ?\n$$${eq}$$`,
          type: 'exact', answer: String(ans),
          hint1: sub === 'add' ? 'Pour retrouver un terme manquant d\'une somme, on effectue une soustraction.'
            : (sub === 'mult' ? 'Pour retrouver un facteur manquant, on effectue une division.' : 'Utilise l\'opération « inverse » pour retrouver le nombre manquant.'),
          hint2: 'Rappel : l\'addition et la soustraction sont des opérations contraires, tout comme la multiplication et la division.',
          solution: `Étape 1 : on utilise l'opération contraire :\n$$${sol}$$\nÉtape 2 (vérification) : en remplaçant la case par $${ans}$, l'égalité est vraie.\nLe nombre manquant est $${ans}$.`,
          _v: { k: '6N8.hole', sub, a, b }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['prog', 'hole_dec', 'pattern', 'think']);
        if (sub === 'prog') {
          const a = this.randInt(2, 9), b = this.randInt(1, 20), x = this.randInt(2, 15);
          const order = Math.random() < 0.5;
          const r = order ? a * x + b : (x + b) * a;
          const steps = order ? [`Multiplier par $${a}$`, `Ajouter $${b}$`] : [`Ajouter $${b}$`, `Multiplier par $${a}$`];
          return mk({
            title: 'Programme de calcul',
            statement: `Voici un programme de calcul :\n• Choisir un nombre.\n• ${steps[0]}.\n• ${steps[1]}.\n**Quel résultat obtient-on en choisissant $${x}$ ?**`,
            type: 'exact', answer: String(r),
            hint1: 'Applique les étapes dans l\'ordre, une par une.',
            hint2: 'Rappel : dans un programme de calcul, chaque instruction s\'applique au résultat de l\'instruction précédente.',
            solution: (order ? `Étape 1 : $${x} \\times ${a} = ${a * x}$.\nÉtape 2 : $${a * x} + ${b} = ${r}$.` : `Étape 1 : $${x} + ${b} = ${x + b}$.\nÉtape 2 : $${x + b} \\times ${a} = ${r}$.`) + `\nEn choisissant $${x}$, on obtient $${r}$.`,
            skill: 'Calculer',
            _v: { k: '6N8.prog', a, b, x, order }
          });
        }
        if (sub === 'hole_dec') {
          const a = this.randInt(11, 199) / 10, ans = this.randInt(3, 150) / 10;
          const b = this._6r(a + ans);
          return mk({
            title: 'Égalité à trou avec des décimaux',
            statement: `Compléter l'égalité :\n$$${this._6tex(a)} + ${S} = ${this._6tex(b)}$$`,
            type: 'exact', answer: this._6ans(ans), placeholder: 'Ex : 4,7',
            hint1: 'Le nombre manquant est la différence entre le résultat et le terme connu.',
            hint2: 'Rappel : pour soustraire des décimaux, on aligne les virgules (on peut compléter par des zéros).',
            solution: `Étape 1 : le terme manquant d'une somme s'obtient par soustraction :\n$$${S} = ${this._6tex(b)} - ${this._6tex(a)} = ${this._6tex(ans)}$$\nÉtape 2 (vérification) : $${this._6tex(a)} + ${this._6tex(ans)} = ${this._6tex(b)}$.\nLe nombre manquant est $${this._6tex(ans)}$.`,
            skill: 'Calculer',
            _v: { k: '6N8.hole', sub: 'add', a, b }
          });
        }
        if (sub === 'pattern') {
          const a = this.randInt(3, 9), d = this.randInt(2, 6), n = this.randInt(4, 8);
          const thing = this.randChoice(['jetons', 'carreaux', 'allumettes', 'perles']);
          return mk({
            title: 'Motif évolutif',
            statement: `On construit une suite de motifs. L'étape $1$ compte $${a}$ ${thing}. À chaque nouvelle étape, on ajoute $${d}$ ${thing}.\n**Combien de ${thing} compte l'étape $${n}$ ?**`,
            type: 'exact', answer: String(a + (n - 1) * d),
            hint1: `De l'étape $1$ à l'étape $${n}$, on ajoute des ${thing} $${n - 1}$ fois.`,
            hint2: 'Rappel : dans un motif régulier, on ajoute toujours le même nombre d\'objets pour passer d\'une étape à la suivante.',
            solution: `Étape 1 : de l'étape $1$ à l'étape $${n}$, on ajoute $${d}$ ${thing} $${n - 1}$ fois : $${n - 1} \\times ${d} = ${(n - 1) * d}$.\nÉtape 2 : $${a} + ${(n - 1) * d} = ${a + (n - 1) * d}$.\nL'étape $${n}$ compte $${a + (n - 1) * d}$ ${thing}.`,
            _v: { k: '6N8.pattern', a, d, n }
          });
        }
        const a = this.randInt(2, 9), b = this.randInt(1, 30), x = this.randInt(2, 20);
        return mk({
          title: 'Je pense à un nombre',
          statement: `Je pense à un nombre. Je le multiplie par $${a}$ puis j'ajoute $${b}$. J'obtiens $${a * x + b}$.\n**À quel nombre ai-je pensé ?**`,
          type: 'exact', answer: String(x),
          hint1: 'Remonte le programme à l\'envers en utilisant les opérations inverses.',
          hint2: 'Rappel : on « défait » d\'abord la dernière opération ; le contraire d\'ajouter est soustraire, le contraire de multiplier est diviser.',
          solution: `Étape 1 : on défait « ajouter $${b}$ » : $${a * x + b} - ${b} = ${a * x}$.\nÉtape 2 : on défait « multiplier par $${a}$ » : $${a * x} \\div ${a} = ${x}$.\nVérification : $${x} \\times ${a} + ${b} = ${a * x + b}$. J'ai pensé à $${x}$.`,
          _v: { k: '6N8.think', a, b, r: a * x + b }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['reverse', 'bar_sum', 'bar_diff', 'pattern_far']);
        if (sub === 'reverse') {
          const a = this.randInt(2, 9), b = this.randInt(1, 15), x = this.randInt(2, 25);
          const r = (x + b) * a;
          return mk({
            title: 'Retrouver le nombre de départ',
            statement: `Un programme de calcul consiste à ajouter $${b}$ au nombre choisi, puis à multiplier le résultat par $${a}$.\nOn obtient $${r}$.\n**Quel nombre a été choisi au départ ?**`,
            type: 'exact', answer: String(x),
            hint1: 'Parcours le programme à l\'envers : la dernière étape est défaite en premier.',
            hint2: 'Rappel : pour remonter un programme, on applique les opérations contraires dans l\'ordre inverse (diviser défait multiplier, soustraire défait ajouter).',
            solution: `Étape 1 : on défait « multiplier par $${a}$ » : $${r} \\div ${a} = ${x + b}$.\nÉtape 2 : on défait « ajouter $${b}$ » : $${x + b} - ${b} = ${x}$.\nVérification : $(${x} + ${b}) \\times ${a} = ${r}$. Le nombre choisi est $${x}$.`,
            _v: { k: '6N8.reverse', a, b, r }
          });
        }
        if (sub === 'bar_sum') {
          const k = this.randInt(2, 6), u = this.randInt(3, 40);
          const ctx = this.randChoice([
            ['Lou et son frère ont ensemble', 'billes', 'Lou en a', 'fois plus que son frère', 'Combien de billes a son frère ?'],
            ['Un panier contient en tout', 'fruits', 'Il y a', 'fois plus de pommes que de poires', 'Combien y a-t-il de poires ?'],
            ['Deux classes récoltent en tout', 'bouchons', 'La première en récolte', 'fois plus que la seconde', 'Combien la seconde classe en a-t-elle récolté ?']
          ]);
          return mk({
            title: 'Problème à nombre inconnu (schéma en barres)',
            statement: `${ctx[0]} $${u * (k + 1)}$ ${ctx[1]}. ${ctx[2]} $${k}$ ${ctx[3]}.\n**${ctx[4]}**`,
            type: 'exact', answer: String(u),
            hint1: `Fais un schéma en barres : la petite quantité est une barre, la grande en vaut $${k}$.`,
            hint2: 'Rappel : dans un schéma en barres, le total est partagé en barres de même valeur ; une barre vaut le total divisé par le nombre de barres.',
            solution: `Étape 1 : la petite quantité vaut $1$ barre, la grande $${k}$ barres : en tout $1 + ${k} = ${k + 1}$ barres.\nÉtape 2 : $${k + 1}$ barres valent $${u * (k + 1)}$, donc une barre vaut $${u * (k + 1)} \\div ${k + 1} = ${u}$.\nLa réponse est $${u}$.`,
            skill: 'Modéliser',
            _v: { k: '6N8.barsum', kk: k, s: u * (k + 1) }
          });
        }
        if (sub === 'bar_diff') {
          const k = this.randInt(2, 6), u = this.randInt(3, 40);
          const name = this.randChoice(['Inès', 'Paul', 'Zoé', 'Ilan', 'Maëlle', 'Tom']);
          return mk({
            title: 'Problème à nombre inconnu (écart)',
            statement: `${name} a $${k}$ fois plus d'images que sa cousine. ${name} en a $${u * (k - 1)}$ de plus qu'elle.\n**Combien d'images a sa cousine ?**`,
            type: 'exact', answer: String(u),
            hint1: `Fais un schéma en barres : la cousine a 1 barre, ${name} en a $${k}$. Combien de barres l'écart représente-t-il ?`,
            hint2: 'Rappel : l\'écart entre les deux quantités correspond exactement aux barres que l\'une possède en plus de l\'autre.',
            solution: `L'écart de $${u * (k - 1)}$ correspond à $${k - 1}$ barre(s) : une barre vaut $${u * (k - 1)} \\div ${k - 1} = ${u}$.\nLa cousine a $${u}$ images.`,
            skill: 'Modéliser',
            _v: { k: '6N8.bardiff', kk: k, dd: u * (k - 1) }
          });
        }
        const a = this.randInt(3, 12), d = this.randInt(2, 9), n = this.randInt(10, 60);
        const thing = this.randChoice(['jetons', 'carreaux', 'allumettes', 'cubes']);
        return mk({
          title: 'Motif évolutif : étape éloignée',
          statement: `Dans une suite de motifs, l'étape $1$ compte $${a}$ ${thing} et l'on ajoute $${d}$ ${thing} à chaque étape.\n**Combien de ${thing} compte l'étape $${n}$ ?**`,
          type: 'exact', answer: String(a + (n - 1) * d),
          hint1: 'Inutile de dessiner toutes les étapes : cherche une règle de calcul.',
          hint2: 'Rappel : entre l\'étape 1 et l\'étape $n$, on effectue $n - 1$ ajouts identiques.',
          solution: `Étape 1 : de l'étape $1$ à l'étape $${n}$, on fait $${n} - 1 = ${n - 1}$ ajouts de $${d}$ ${thing} : $${n - 1} \\times ${d} = ${(n - 1) * d}$.\nÉtape 2 : $${a} + ${(n - 1) * d} = ${a + (n - 1) * d}$.\nL'étape $${n}$ compte $${a + (n - 1) * d}$ ${thing}.`,
          _v: { k: '6N8.pattern', a, d, n }
        });
      }

      // t === 4
      const sub = this.randChoice(['matches', 'pattern_rev', 'balance', 'two_prices']);
      if (sub === 'matches') {
        const shape = this.randChoice(['squares', 'triangles']);
        const n = this.randInt(6, 50);
        const per = shape === 'squares' ? 3 : 2;
        const fig = this._6matchRowB(3, shape);
        return mk({
          title: 'Défi 5ème : motif d\'allumettes',
          statement: `On construit une rangée de ${shape === 'squares' ? 'carrés' : 'triangles'} accolés avec des allumettes :\n${fig}**Combien d'allumettes faut-il pour l'étape $${n}$ ?**`,
          type: 'exact', answer: String(per * n + 1),
          hint1: shape === 'squares' ? 'Compte : étape 1 → 4, étape 2 → 7, étape 3 → 10. De combien augmente-t-on à chaque étape ?' : 'Compte : étape 1 → 3, étape 2 → 5, étape 3 → 7. De combien augmente-t-on à chaque étape ?',
          hint2: `On ajoute $${per}$ allumettes à chaque étape, à partir de $${per + 1}$ allumettes.`,
          solution: `Il faut $1$ allumette de départ puis $${per}$ allumettes par ${shape === 'squares' ? 'carré' : 'triangle'} : $${per} \\times ${n} + 1 = ${per * n + 1}$ allumettes.`,
          skill: 'Chercher',
          _v: { k: '6N8.matches', per, n }
        });
      }
      if (sub === 'pattern_rev') {
        const a = this.randInt(3, 12), d = this.randInt(2, 8), n = this.randInt(8, 40);
        const N = a + (n - 1) * d;
        return mk({
          title: 'Défi 5ème : retrouver l\'étape',
          statement: `Dans une suite de motifs, l'étape $1$ compte $${a}$ jetons et l'on ajoute $${d}$ jetons à chaque étape.\n**À quelle étape le motif compte-t-il $${N}$ jetons ?**`,
          type: 'exact', answer: String(n),
          hint1: `Combien de jetons ont été ajoutés depuis l'étape $1$ ?`,
          hint2: 'Rappel : le nombre de jetons à l\'étape $n$ est celui de l\'étape 1 augmenté de $n - 1$ ajouts identiques.',
          solution: `$${N} - ${a} = ${N - a}$ et $${N - a} \\div ${d} = ${n - 1}$ ajouts : c'est l'étape $${n - 1} + 1 = ${n}$.`,
          _v: { k: '6N8.patternrev', a, d, N }
        });
      }
      if (sub === 'balance') {
        const k = this.randInt(2, 7), x = this.randInt(3, 30), a = this.randInt(2, 40);
        return mk({
          title: 'Défi 5ème : la balance',
          statement: `Sur une balance en équilibre, on a d'un côté $${k}$ sacs identiques et une masse de $${a}$ g, de l'autre côté une masse de $${k * x + a}$ g.\n**Quelle est la masse d'un sac, en grammes ?**`,
          type: 'exact', answer: String(x),
          hint1: `Traduis par une égalité à trou : $${k} \\times ${S} + ${a} = ${k * x + a}$.`,
          hint2: 'Rappel : une balance reste en équilibre si l\'on retire la même masse des deux plateaux.',
          solution: `$${k} \\times ${S} = ${k * x + a} - ${a} = ${k * x}$ donc $${S} = ${k * x} \\div ${k} = ${x}$. Un sac pèse $${x}$ g.`,
          skill: 'Modéliser',
          _v: { k: '6N8.balance', kk: k, a, tot: k * x + a }
        });
      }
      const p = this.randInt(4, 60) / 2, dd = this.randInt(1, 20) / 2;
      const s = this._6r(2 * p + dd);
      const [o1, o2] = this.randChoice([['une gomme', 'un cahier'], ['un stylo', 'un classeur'], ['un ballon', 'une raquette'], ['une règle', 'un compas']]);
      return mk({
        title: 'Défi 5ème : deux prix inconnus',
        statement: `Ensemble, ${o1} et ${o2} coûtent $${this._6eurTexB(s)}$ €. ${o2.charAt(0).toUpperCase() + o2.slice(1)} coûte $${this._6eurTexB(dd)}$ € de plus que ${o1}.\n**Quel est le prix de ${o1}, en euros ?**`,
        type: 'exact', answer: this._6ans(p), placeholder: 'Ex : 3,5',
        hint1: 'Schéma en barres : deux barres égales (le prix le plus bas) et un morceau en plus (l\'écart).',
        hint2: 'Rappel : si l\'on retire l\'écart du prix total, il reste deux fois le prix le plus bas.',
        solution: `$${this._6eurTexB(s)} - ${this._6eurTexB(dd)} = ${this._6eurTexB(2 * p)}$ puis $${this._6eurTexB(2 * p)} \\div 2 = ${this._6eurTexB(p)}$. ${o1.charAt(0).toUpperCase() + o1.slice(1)} coûte $${this._6eurTexB(p)}$ €.`,
        skill: 'Modéliser',
        _v: { k: '6N8.twoprices', s, dd }
      });
    },

    // -------------------------------------------------------------------
    // 6P1 — Proportionnalité
    // -------------------------------------------------------------------
    generate6P1(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const mk = (o) => this._6qB('6P1', t, Object.assign({ skill: 'Résoudre' }, o));
      const items = [['croissants', 'croissant'], ['cahiers', 'cahier'], ['stylos', 'stylo'], ['tickets de bus', 'ticket'], ['baguettes', 'baguette'], ['places de cinéma', 'place'], ['pots de peinture', 'pot']];
      const table = (h1, h2, r1, r2) => `$$\\begin{array}{|l|${r1.map(() => 'c').join('|')}|}\\hline \\text{${h1}} & ${r1.join(' & ')} \\\\ \\hline \\text{${h2}} & ${r2.join(' & ')} \\\\ \\hline \\end{array}$$`;

      if (t === 1) {
        const sub = this.randChoice(['mult_lin', 'is_prop', 'recipe']);
        if (sub === 'mult_lin') {
          const [pl] = this.randChoice(items);
          const n = this.randInt(2, 6), k = this.randInt(2, 5), price = this.randInt(2, 25);
          const P = n * price;
          return mk({
            title: 'Linéarité multiplicative',
            statement: `$${n}$ ${pl} coûtent $${P}$ €. Le prix est proportionnel au nombre d'articles.\n**Combien coûtent $${n * k}$ ${pl} ?**`,
            type: 'exact', answer: String(P * k),
            hint1: `$${n * k}$, c'est $${k}$ fois $${n}$.`,
            hint2: `Le prix est donc multiplié par $${k}$.`,
            solution: `$${n * k} = ${n} \\times ${k}$, donc le prix est $${P} \\times ${k} = ${P * k}$ €.`,
            _v: { k: '6P1.lin', n, P, m: n * k }
          });
        }
        if (sub === 'is_prop') {
          const coef = this.randInt(2, 12);
          const xs = this.shuffle([1, 2, 3, 4, 5, 6, 8, 10]).slice(0, 3).sort((a, b) => a - b);
          const isP = Math.random() < 0.5;
          const ys = xs.map(x => x * coef);
          if (!isP) { const i = this.randInt(0, 2); ys[i] += this.randChoice([-2, -1, 1, 2, 3]); }
          const prop = ys.every((y, i) => y * xs[0] === ys[0] * xs[i]);
          const q = mk({
            title: 'Reconnaître un tableau de proportionnalité',
            statement: `Ce tableau est-il un tableau de proportionnalité ?\n${table('Quantité', 'Prix (€)', xs, ys)}`,
            hint1: 'Dans un tableau de proportionnalité, on passe de la première ligne à la seconde en multipliant toujours par le même nombre.',
            hint2: `Calcule $${ys[0]} \\div ${xs[0]}$, $${ys[1]} \\div ${xs[1]}$ et $${ys[2]} \\div ${xs[2]}$.`,
            solution: prop ? `On multiplie toujours par $${coef}$ : c'est un tableau de proportionnalité.` : `Les quotients ne sont pas tous égaux (on ne multiplie pas toujours par le même nombre) : ce n'est pas un tableau de proportionnalité.`,
            skill: 'Raisonner',
            _v: { k: '6P1.isprop', xs, ys }
          });
          return this._6mcq(q, prop ? 'Oui' : 'Non', ['Oui', 'Non']);
        }
        const ing = this.randChoice([['farine', 'g'], ['sucre', 'g'], ['lait', 'mL'], ['beurre', 'g'], ['chocolat', 'g']]);
        const p = this.randChoice([2, 3, 4, 5, 6]), qty = p * this.randInt(5, 40);
        const f = this.randChoice([2, 3, 4]);
        const half = Math.random() < 0.35 && p % 2 === 0;
        const p2 = half ? p / 2 : p * f;
        return mk({
          title: 'Adapter une recette',
          statement: `Pour $${p}$ personnes, une recette demande $${qty}$ ${ing[1]} de ${ing[0]}.\n**Quelle quantité de ${ing[0]} faut-il pour $${p2}$ personnes ?** (en ${ing[1]})`,
          type: 'exact', answer: String(qty * p2 / p),
          hint1: 'Les quantités sont proportionnelles au nombre de personnes.',
          hint2: 'Rappel : dans une situation de proportionnalité, si l\'on multiplie (ou divise) une quantité par un nombre, l\'autre est multipliée (ou divisée) par le même nombre.',
          solution: half ? `Étape 1 : $${p2} = ${p} \\div 2$ : il y a deux fois moins de personnes.\nÉtape 2 : $${qty} \\div 2 = ${qty / 2}$.\nIl faut $${qty / 2}$ ${ing[1]} de ${ing[0]}.` : `Étape 1 : $${p2} = ${p} \\times ${f}$ : il y a $${f}$ fois plus de personnes.\nÉtape 2 : $${qty} \\times ${f} = ${qty * f}$.\nIl faut $${qty * f}$ ${ing[1]} de ${ing[0]}.`,
          _v: { k: '6P1.lin', n: p, P: qty, m: p2 }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['unit', 'additive', 'percent', 'coef']);
        if (sub === 'unit') {
          const [pl] = this.randChoice(items);
          const n = this.randInt(2, 9), u = this.randInt(5, 60) / 10;
          let m; do { m = this.randInt(2, 12); } while (m % n === 0 || n % m === 0);
          const P = this._6r(n * u);
          return mk({
            title: 'Passage par l\'unité',
            statement: `$${n}$ ${pl} coûtent $${this._6eurTexB(P)}$ €. Le prix est proportionnel au nombre d'articles.\n**Combien coûtent $${m}$ ${pl} ?**`,
            type: 'exact', answer: this._6ans(u * m), placeholder: 'Ex : 7,2',
            hint1: 'Calcule d\'abord le prix d\'un seul article.',
            hint2: 'Rappel : passage par l\'unité : on divise le prix total par le nombre d\'articles pour obtenir le prix d\'un article.',
            solution: `Prix d'un article : $${this._6eurTexB(P)} \\div ${n} = ${this._6eurTexB(u)}$ €.\nPrix de $${m}$ articles : $${this._6eurTexB(u)} \\times ${m} = ${this._6eurTexB(u * m)}$ €.`,
            _v: { k: '6P1.lin', n, P, m }
          });
        }
        if (sub === 'additive') {
          const c = this.randInt(2, 15);
          const a = this.randInt(2, 9), b = this.randInt(2, 9);
          const unit = this.randChoice([['Durée (min)', 'Distance (km)'], ['Masse (kg)', 'Prix (€)'], ['Nombre de pages', 'Temps (min)']]);
          return mk({
            title: 'Linéarité additive',
            statement: `Ce tableau est un tableau de proportionnalité. Compléter la case vide.\n${table(unit[0], unit[1], [a, b, a + b], [a * c, b * c, '\\square'])}`,
            type: 'exact', answer: String((a + b) * c),
            hint1: `$${a + b} = ${a} + ${b}$.`,
            hint2: `On peut additionner les valeurs correspondantes : $${a * c} + ${b * c}$.`,
            solution: `Comme $${a + b} = ${a} + ${b}$, la valeur cherchée est $${a * c} + ${b * c} = ${(a + b) * c}$.`,
            _v: { k: '6P1.lin', n: a, P: a * c, m: a + b }
          });
        }
        if (sub === 'percent') {
          const p = this.randChoice([10, 20, 25, 50, 75, 5, 30]);
          const N = this.randInt(2, 60) * 20;
          return mk({
            title: 'Appliquer un pourcentage',
            statement: `Calculer $${p} \\, \\%$ de $${N}$.`,
            type: 'exact', answer: this._6ans(N * p / 100),
            hint1: p === 50 ? 'Pense à une fraction simple : la moitié.' : (p === 25 ? 'Pense à une fraction simple : le quart.' : (p === 10 ? 'Pense à une fraction simple : le dixième.' : `Calcule d'abord dix pour cent (ou un pour cent) de $${N}$, puis adapte.`)),
            hint2: `Rappel : prendre $${p} \\, \\%$ d'un nombre, c'est le multiplier par ${p} puis le diviser par cent.`,
            solution: `Étape 1 : $${p} \\, \\% = \\frac{${p}}{100}$.\nÉtape 2 : $$\\frac{${p}}{100} \\times ${N} = \\frac{${p} \\times ${N}}{100} = ${this._6tex(N * p / 100)}$$\nDonc $${p} \\, \\%$ de $${N}$ vaut $${this._6tex(N * p / 100)}$.`,
            skill: 'Calculer',
            _v: { k: '6P1.percent', p, N }
          });
        }
        const k = this.randInt(2, 15) * (Math.random() < 0.3 ? 0.5 : 1);
        const xs = this.shuffle([2, 3, 4, 5, 6, 8, 10]).slice(0, 3).sort((a, b) => a - b);
        return mk({
          title: 'Coefficient de proportionnalité',
          statement: `Ce tableau est un tableau de proportionnalité.\n${table('Grandeur A', 'Grandeur B', xs, xs.map(x => this._6tex(x * k)))}\n**Par quel nombre multiplie-t-on la première ligne pour obtenir la seconde ?**`,
          type: 'exact', answer: this._6ans(k), placeholder: 'Ex : 2,5',
          hint1: 'Divise un nombre de la deuxième ligne par le nombre correspondant de la première ligne.',
          hint2: `$${this._6tex(xs[0] * k)} \\div ${xs[0]}$.`,
          solution: `$${this._6tex(xs[0] * k)} \\div ${xs[0]} = ${this._6tex(k)}$ : le coefficient de proportionnalité est $${this._6tex(k)}$.`,
          skill: 'Calculer',
          _v: { k: '6P1.coef', x: xs[0], y: this._6r(xs[0] * k) }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['scale', 'scale_rev', 'fourth', 'discount']);
        if (sub === 'scale') {
          const E = this.randChoice([100, 200, 500, 1000, 2000, 5000, 10000, 25000, 50000]);
          const d = this.randInt(2, 15);
          const real_m = d * E / 100;
          return mk({
            title: 'Utiliser une échelle',
            statement: `Sur un plan à l'échelle $\\frac{1}{${E}}$, deux points sont distants de $${d}$ cm.\n**Quelle est la distance réelle, en mètres ?**`,
            type: 'exact', answer: this._6ans(real_m),
            hint1: `À l'échelle $\\frac{1}{${E}}$, $1$ cm sur le plan représente $${this._6tex(E)}$ cm en réalité.`,
            hint2: 'Rappel : un mètre vaut cent centimètres ; pour convertir des centimètres en mètres, on divise donc par cent.',
            solution: `Distance réelle : $${d} \\times ${this._6tex(E)} = ${this._6tex(d * E)}$ cm $= ${this._6tex(real_m)}$ m.`,
            _v: { k: '6P1.scale', d, E }
          });
        }
        if (sub === 'scale_rev') {
          const E = this.randChoice([1000, 2000, 5000, 10000, 20000, 50000, 100000]);
          const d = this.randInt(1, 20);
          const real_m = d * E / 100;
          return mk({
            title: 'Échelle : du réel au plan',
            statement: `Une carte est à l'échelle $\\frac{1}{${E}}$. Deux villages sont à $${this._6tex(real_m)}$ m l'un de l'autre.\n**Quelle distance les sépare sur la carte, en centimètres ?**`,
            type: 'exact', answer: String(d),
            hint1: 'Convertis d\'abord la distance réelle en centimètres.',
            hint2: `Rappel : $1 \\text{ m} = 100 \\text{ cm}$ ; à l'échelle $\\frac{1}{${this._6tex(E)}}$, les longueurs réelles sont $${this._6tex(E)}$ fois plus grandes que sur la carte.`,
            solution: `Étape 1 : $${this._6tex(real_m)}$ m $= ${this._6tex(real_m * 100)}$ cm.\nÉtape 2 : sur la carte, la longueur est $${this._6tex(E)}$ fois plus petite : $${this._6tex(real_m * 100)} \\div ${this._6tex(E)} = ${d}$.\nLa distance sur la carte est $${d}$ cm.`,
            _v: { k: '6P1.scalerev', real_m, E }
          });
        }
        if (sub === 'fourth') {
          const x1 = this.randChoice([2, 3, 4, 5, 6, 8]), u = this.randInt(2, 30);
          let x2; do { x2 = this.randInt(3, 20); } while (x2 % x1 === 0 || x1 % x2 === 0);
          const ctx = this.randChoice([
            [`Un robinet remplit $${x1 * u}$ L en $${x1}$ minutes.`, `Combien de litres remplit-il en $${x2}$ minutes ?`],
            [`Une voiture consomme $${x1 * u}$ L de carburant pour $${x1}$ centaines de kilomètres.`, `Combien consomme-t-elle pour $${x2}$ centaines de kilomètres ?`],
            [`Un cycliste roulant à vitesse constante parcourt $${x1 * u}$ km en $${x1}$ heures.`, `Quelle distance parcourt-il en $${x2}$ heures ?`],
            [`$${x1}$ kg de pommes coûtent $${x1 * u}$ €.`, `Combien coûtent $${x2}$ kg de ces pommes ?`]
          ]);
          return mk({
            title: 'Quatrième proportionnelle',
            statement: `${ctx[0]} On suppose que c'est une situation de proportionnalité.\n**${ctx[1]}**`,
            type: 'exact', answer: String(u * x2),
            hint1: 'Passe par l\'unité : calcule la quantité correspondant à $1$.',
            hint2: 'Rappel : dans une situation de proportionnalité, on peut calculer la valeur correspondant à 1, puis multiplier.',
            solution: `Pour $1$ : $${x1 * u} \\div ${x1} = ${u}$. Pour $${x2}$ : $${u} \\times ${x2} = ${u * x2}$.`,
            _v: { k: '6P1.lin', n: x1, P: x1 * u, m: x2 }
          });
        }
        const p = this.randChoice([10, 20, 25, 50, 30, 15]);
        const N = this.randInt(2, 40) * 20;
        const final = N - N * p / 100;
        const obj = this.randChoice(['un vélo', 'un manteau', 'une console', 'un sac à dos', 'une paire de chaussures']);
        return mk({
          title: 'Réduction en pourcentage',
          statement: `${obj.charAt(0).toUpperCase() + obj.slice(1)} coûte $${N}$ €. Pendant les soldes, son prix baisse de $${p} \\, \\%$.\n**Quel est son nouveau prix, en euros ?**`,
          type: 'exact', answer: this._6ans(final),
          hint1: `Calcule d'abord le montant de la réduction : $${p} \\, \\%$ de $${N}$.`,
          hint2: `Rappel : nouveau prix = prix de départ − réduction ; prendre $${p} \\, \\%$ d'un nombre, c'est le multiplier par $\\frac{${p}}{100}$.`,
          solution: `Réduction : $\\frac{${p}}{100} \\times ${N} = ${this._6tex(N * p / 100)}$ €.\nNouveau prix : $${N} - ${this._6tex(N * p / 100)} = ${this._6tex(final)}$ €.`,
          _hintLeakOk: final === 100, // « 100 » du rappel de cours, pas la réponse
          _v: { k: '6P1.discount', p, N }
        });
      }

      // t === 4
      const sub = this.randChoice(['scale_find', 'which_prop', 'offers', 'recipe_dec']);
      if (sub === 'scale_find') {
        const E = this.randChoice([50, 100, 200, 250, 500, 1000, 2000, 5000, 10000]);
        const d = this.randInt(2, 12);
        const real_cm = d * E;
        const real_m = real_cm / 100;
        return mk({
          title: 'Défi 5ème : déterminer une échelle',
          statement: `Sur un plan, une longueur réelle de $${this._6tex(real_m)}$ m est représentée par $${d}$ cm.\nL'échelle s'écrit $\\frac{1}{E}$. **Quelle est la valeur de $E$ ?**`,
          type: 'exact', answer: String(E),
          hint1: 'Exprime les deux longueurs dans la même unité (le centimètre).',
          hint2: 'Rappel : à l\'échelle $\\frac{1}{E}$, une longueur de 1 cm sur le plan représente $E$ cm en réalité (les deux longueurs doivent être exprimées dans la même unité).',
          solution: `$${this._6tex(real_cm)} \\div ${d} = ${this._6tex(E)}$ : $1$ cm sur le plan représente $${this._6tex(E)}$ cm en réalité, donc $E = ${this._6tex(E)}$.`,
          _v: { k: '6P1.scalefind', d, real_m }
        });
      }
      if (sub === 'which_prop') {
        const a = this.randInt(2, 9), b = this.randInt(10, 15), c = this.randInt(2, 9);
        const props = [
          `Le prix payé pour des baguettes à $${this._6tex(a / 10 + 1)}$ € l'une et le nombre de baguettes achetées.`,
          `Le périmètre d'un carré et la longueur de son côté.`,
          `La distance parcourue à la vitesse constante de $${b * 5}$ km/h et la durée du trajet.`,
          `La masse de $${c}$ sacs de riz identiques et le nombre de sacs.`,
          `La quantité de farine et le nombre de crêpes, en suivant toujours la même recette.`,
          `Le nombre de tickets de bus achetés au tarif unique de $${this._6tex(c / 10 + 1)}$ € et le prix payé.`,
          `Le nombre de tours de piste de $${b * 20}$ m effectués et la distance parcourue.`,
          `La quantité d'essence achetée à prix fixe par litre et le prix payé.`
        ];
        const nonProps = [
          `La taille d'un enfant et son âge.`,
          `L'aire d'un carré et la longueur de son côté.`,
          `Le prix d'un taxi avec une prise en charge de $${a}$ € puis $${this._6tex(c / 10 + 1)}$ € par km, et la distance parcourue.`,
          `La température extérieure et l'heure de la journée.`,
          `Le nombre de buts marqués par une équipe et le nombre de matchs joués.`,
          `La masse d'une personne et sa taille.`,
          `Le prix d'un abonnement de $${b}$ € par mois plus $${a}$ € par séance, et le nombre de séances.`,
          `La pointure d'un élève et son âge.`,
          `Le prix mensuel d'un forfait téléphonique illimité à $${b}$ € et le nombre d'appels passés dans le mois.`
        ];
        const neg = Math.random() < 0.3;
        const nom = this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan', 'Lina', 'Tom']);
        const intro = this.randChoice(['', 'Dans chaque situation, on étudie deux grandeurs.\n', 'Pour chaque situation, demande-toi si doubler une grandeur double l\'autre.\n',
          `Pour un exposé, ${nom} a relevé quatre situations où deux grandeurs varient ensemble.\n`, `${nom} doit classer des situations en deux groupes : proportionnalité ou non.\n`]);
        const correct = this.randChoice(neg ? nonProps : props);
        const q = mk({
          title: 'Défi 5ème : reconnaître la proportionnalité',
          statement: intro + (neg ? 'Parmi ces situations, laquelle **ne relève pas** de la proportionnalité ?' : this.randChoice(['Parmi ces situations, laquelle relève de la **proportionnalité** ?', 'Dans laquelle de ces situations les deux grandeurs sont-elles **proportionnelles** ?'])),
          hint1: 'Deux grandeurs sont proportionnelles si l\'on passe de l\'une à l\'autre en multipliant toujours par le même nombre.',
          hint2: 'Si l\'on double l\'une, l\'autre doit doubler aussi.',
          solution: neg
            ? `La situation non proportionnelle est : ${correct}\nDoubler une des grandeurs ne double pas l'autre. Dans les autres situations, on passe d'une grandeur à l'autre en multipliant toujours par le même nombre.`
            : `La situation proportionnelle est : ${correct}\nDans les autres situations, doubler une grandeur ne double pas l'autre.`,
          skill: 'Raisonner',
          _v: { k: '6P1.which', correct }
        });
        return this._6mcq(q, correct, this.shuffle(neg ? props : nonProps).slice(0, 3));
      }
      if (sub === 'offers') {
        const n1 = this.randChoice([2, 3, 4, 5]), n2 = this.randChoice([6, 8, 10, 12]);
        const u1 = this.randInt(10, 40) / 10;
        let u2 = this.randInt(10, 40) / 10;
        if (Math.random() < 0.2) u2 = u1;
        const P1 = this._6r(n1 * u1), P2 = this._6r(n2 * u2);
        const prod = this.randChoice(['yaourts', 'briques de jus', 'boîtes de thon', 'paquets de mouchoirs']);
        const correct = u1 < u2 ? 'Offre A' : (u1 > u2 ? 'Offre B' : 'Les deux offres se valent');
        const q = mk({
          title: 'Défi 5ème : comparer deux offres',
          statement: `Au supermarché :\n• **Offre A** : $${n1}$ ${prod} pour $${this._6eurTexB(P1)}$ € ;\n• **Offre B** : $${n2}$ ${prod} pour $${this._6eurTexB(P2)}$ €.\n**Quelle offre est la plus avantageuse ?**`,
          hint1: 'Calcule le prix d\'un article dans chaque offre.',
          hint2: 'Rappel : pour comparer deux offres, on compare les prix pour une même quantité, par exemple le prix d\'un seul article.',
          solution: `Offre A : $${this._6eurTexB(P1)} \\div ${n1} = ${this._6eurTexB(u1)}$ € l'article. Offre B : $${this._6eurTexB(P2)} \\div ${n2} = ${this._6eurTexB(u2)}$ € l'article.\nRéponse : ${correct.toLowerCase()}.`,
          skill: 'Raisonner',
          _v: { k: '6P1.offers', n1, P1, n2, P2 }
        });
        return this._6mcq(q, correct, ['Offre A', 'Offre B', 'Les deux offres se valent']);
      }
      const p = this.randChoice([4, 6, 8]), per = this.randInt(15, 60) / 2;
      const qty = this._6r(p * per);
      let p2; do { p2 = this.randInt(3, 15); } while (p2 === p);
      const ing = this.randChoice(['farine', 'sucre', 'beurre', 'chocolat', 'riz']);
      return mk({
        title: 'Défi 5ème : recette et passage par l\'unité',
        statement: `Pour $${p}$ personnes, il faut $${this._6tex(qty)}$ g de ${ing}.\n**Quelle masse de ${ing} faut-il pour $${p2}$ personnes, en grammes ?**`,
        type: 'exact', answer: this._6ans(per * p2), placeholder: 'Ex : 157,5',
        hint1: 'Calcule la masse nécessaire pour une seule personne.',
        hint2: 'Rappel : passage par l\'unité : on calcule d\'abord la masse pour une personne, puis on multiplie par le nombre de personnes.',
        solution: `Pour $1$ personne : $${this._6tex(qty)} \\div ${p} = ${this._6tex(per)}$ g.\nPour $${p2}$ personnes : $${this._6tex(per)} \\times ${p2} = ${this._6tex(per * p2)}$ g.`,
        _v: { k: '6P1.lin', n: p, P: qty, m: p2 }
      });
    }
  });
})();

// =====================================================================
// 6M1 à 6M4 (grandeurs et mesures)
// =====================================================================
// =====================================================================
  // 6ème — GRANDEURS ET MESURES (6M1 longueurs, 6M2 aires, 6M3 volumes, 6M4 durées)
  // =====================================================================
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  Object.assign(window.MathsGenerators, {
    /** Fabrique commune des questions 6M. */
    _6mQ(ch, t, o, skill = 'Calculer') {
      const q = Object.assign({ chapterId: ch, tier: t, skill }, o);
      if (t === 4 && q.title && !/^Défi 5ème/.test(q.title)) q.title = `Défi 5ème : ${q.title}`;
      if (q.type === 'exact' && !q.placeholder) q.placeholder = 'Ex : 12,5';
      return q;
    },

    /** Unité en mode math : \text{ cm} ou \text{ cm}^2 / ^3. */
    _6mU(u, p = 1) {
      return `\\text{ ${u}}` + (p > 1 ? `^${p}` : '');
    },

    // ----------------------------- Figures -----------------------------
    _6mRectSvg(Ltxt, ltxt, fill = 'rgba(59, 130, 246, 0.10)') {
      let s = `<rect x="40" y="22" width="180" height="90" fill="${fill}" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += this._6svgText(130, 134, Ltxt);
      s += this._6svgText(228, 72, ltxt, { anchor: 'start' });
      return this._6svg(300, 145, s, 300);
    },

    _6mLShapeSvg(lb) {
      const pts = '40,130 220,130 220,70 150,70 150,25 40,25';
      let s = `<polygon points="${pts}" fill="rgba(16, 185, 129, 0.12)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      if (lb.bottom) s += this._6svgText(130, 148, lb.bottom);
      if (lb.left) s += this._6svgText(34, 82, lb.left, { anchor: 'end' });
      if (lb.top) s += this._6svgText(95, 17, lb.top);
      if (lb.innerH) s += this._6svgText(185, 63, lb.innerH);
      if (lb.innerV) s += this._6svgText(156, 52, lb.innerV, { anchor: 'start' });
      if (lb.right) s += this._6svgText(226, 104, lb.right, { anchor: 'start' });
      return this._6svg(320, 158, s, 320);
    },

    _6mFrameSvg(outerTxt, innerTxt) {
      let s = `<rect x="30" y="20" width="220" height="120" fill="rgba(245, 158, 11, 0.15)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<rect x="90" y="50" width="100" height="60" fill="var(--bg-surface, #ffffff)" stroke="var(--text-main, #334155)" stroke-width="1.6" stroke-dasharray="5 3"/>`;
      s += this._6svgText(140, 156, outerTxt);
      s += this._6svgText(140, 84, innerTxt, { size: 11 });
      return this._6svg(280, 165, s, 300);
    },

    _6mPaveSvg(Ltxt, ltxt, htxt) {
      const dx = 45, dy = -30;
      let s = `<polygon points="40,60 190,60 190,140 40,140" fill="rgba(124, 58, 237, 0.10)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<polygon points="40,60 ${40 + dx},${60 + dy} ${190 + dx},${60 + dy} 190,60" fill="rgba(124, 58, 237, 0.18)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<polygon points="190,60 ${190 + dx},${60 + dy} ${190 + dx},${140 + dy} 190,140" fill="rgba(124, 58, 237, 0.25)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<line x1="40" y1="140" x2="${40 + dx}" y2="${140 + dy}" stroke="var(--text-muted, #64748b)" stroke-width="1.2" stroke-dasharray="4 3"/>`;
      s += `<line x1="${40 + dx}" y1="${140 + dy}" x2="${190 + dx}" y2="${140 + dy}" stroke="var(--text-muted, #64748b)" stroke-width="1.2" stroke-dasharray="4 3"/>`;
      s += `<line x1="${40 + dx}" y1="${140 + dy}" x2="${40 + dx}" y2="${60 + dy}" stroke="var(--text-muted, #64748b)" stroke-width="1.2" stroke-dasharray="4 3"/>`;
      s += this._6svgText(115, 158, Ltxt);
      s += this._6svgText(34, 104, htxt, { anchor: 'end' });
      s += this._6svgText(222, 138, ltxt, { anchor: 'start' });
      return this._6svg(320, 168, s, 320);
    },

    _6mCircleSvg(lbl, isRadius) {
      let s = `<circle cx="150" cy="80" r="60" fill="rgba(59, 130, 246, 0.08)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<circle cx="150" cy="80" r="2.5" fill="var(--text-main, #334155)"/>`;
      if (isRadius) {
        s += `<line x1="150" y1="80" x2="210" y2="80" stroke="#dc2626" stroke-width="2"/>`;
        s += this._6svgText(180, 72, lbl, { fill: '#dc2626' });
      } else {
        s += `<line x1="90" y1="80" x2="210" y2="80" stroke="#dc2626" stroke-width="2"/>`;
        s += this._6svgText(150, 72, lbl, { fill: '#dc2626' });
      }
      s += this._6svgText(146, 96, 'O', { size: 11 });
      return this._6svg(300, 160, s, 260);
    },

    _6mStadeSvg(Ltxt, dtxt) {
      let s = `<path d="M 90 30 L 210 30 A 50 50 0 0 1 210 130 L 90 130 A 50 50 0 0 1 90 30 Z" fill="rgba(16, 185, 129, 0.12)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<line x1="90" y1="30" x2="90" y2="130" stroke="var(--text-muted, #64748b)" stroke-dasharray="4 3"/>`;
      s += `<line x1="210" y1="30" x2="210" y2="130" stroke="var(--text-muted, #64748b)" stroke-dasharray="4 3"/>`;
      s += this._6svgText(150, 22, Ltxt);
      s += this._6svgText(96, 84, dtxt, { anchor: 'start', size: 11 });
      return this._6svg(300, 145, s, 300);
    },

    _6mSqHalfSvg(ctxt) {
      let s = `<path d="M 60 40 L 160 40 A 50 50 0 0 1 160 140 L 60 140 Z" fill="rgba(245, 158, 11, 0.15)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<line x1="160" y1="40" x2="160" y2="140" stroke="var(--text-muted, #64748b)" stroke-dasharray="4 3"/>`;
      s += this._6svgText(110, 32, ctxt);
      return this._6svg(260, 155, s, 260);
    },

    _6mTriSvg(atxt, btxt) {
      let s = `<polygon points="50,130 230,130 50,30" fill="rgba(239, 68, 68, 0.10)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      s += `<polyline points="50,116 64,116 64,130" fill="none" stroke="var(--text-main, #334155)" stroke-width="1.4"/>`;
      s += this._6svgText(140, 148, atxt);
      s += this._6svgText(44, 84, btxt, { anchor: 'end' });
      return this._6svg(280, 158, s, 280);
    },

    // ----------------------------- Durées ------------------------------
    _6mDur(min) {
      const h = Math.floor(min / 60), m = min % 60;
      if (h === 0) return `${m} min`;
      if (m === 0) return `${h} h`;
      return `${h} h ${m} min`;
    },

    _6mHour(totalMin) {
      const t = ((totalMin % 1440) + 1440) % 1440;
      const h = Math.floor(t / 60), m = t % 60;
      return `${h} h ${String(m).padStart(2, '0')}`;
    },

    // =====================================================================
    // 6M1 — Longueurs et périmètres
    // =====================================================================
    generate6M1(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const U = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
      const T = x => this._6tex(x), X = x => this._6txt(x), A = x => this._6ans(x);
      const mk = (o, sk) => this._6mQ('6M1', t, o, sk);
      const convHint2 = "Dans le tableau de conversion, chaque unité vaut dix fois l'unité située juste à sa droite : on décale la virgule d'un rang par colonne.";

      const conv = (decimal) => {
        let from, to, val, res;
        for (let guard = 0; guard < 50; guard++) {
          const i = this.randInt(0, 5);
          const j = this.randInt(i + 1, Math.min(6, i + 3));
          const toSmall = Math.random() < 0.55;
          from = toSmall ? i : j; to = toSmall ? j : i;
          if (decimal) {
            const dv = this.randInt(1, 2);
            val = this._6r(this.randInt(11, 999) / Math.pow(10, dv));
          } else {
            val = toSmall ? this.randInt(2, 95) : this.randInt(1, 99) * Math.pow(10, j - i);
          }
          res = this._6r(val * Math.pow(10, to - from));
          const dec = (String(res).split('.')[1] || '').length;
          if (dec <= 3 && res < 1e7) break;
        }
        return mk({
          title: decimal ? 'Conversion de longueurs (nombres décimaux)' : 'Conversion de longueurs',
          statement: `Compléter la conversion suivante :\n$$${T(val)}${this._6mU(U[from])} = \\dots${this._6mU(U[to])}$$\n*(Donner seulement le nombre.)*`,
          type: 'exact', answer: A(res),
          hint1: `Place ${X(val)} dans le tableau de conversion (km, hm, dam, m, dm, cm, mm), le chiffre des unités dans la colonne « ${U[from]} ».`,
          hint2: convHint2,
          solution: `On passe des ${U[from]} aux ${U[to]} : ${Math.abs(to - from)} colonne(s) vers la ${to > from ? 'droite (on multiplie' : 'gauche (on divise'} par ${X(Math.pow(10, Math.abs(to - from)))}).\n$$${T(val)}${this._6mU(U[from])} = ${T(res)}${this._6mU(U[to])}$$`,
          _v: { k: '6M1.conv', val, from: U[from], to: U[to] }
        }, 'Convertir');
      };

      if (t === 1) {
        const st = this.randChoice(['conv', 'conv', 'rect', 'reg']);
        if (st === 'conv') return conv(false);
        if (st === 'rect') {
          const u = this.randChoice(['cm', 'm', 'mm', 'km']);
          const L = this.randInt(5, 24), l = this.randInt(2, L - 1);
          const P = 2 * (L + l);
          return mk({
            title: "Périmètre d'un rectangle",
            statement: `On considère le rectangle ci-dessous (figure non à l'échelle).\n${this._6mRectSvg(`${L} ${u}`, `${l} ${u}`)}\n**Calculer son périmètre en ${u}.**`,
            type: 'exact', answer: String(P),
            hint1: 'Le périmètre est la longueur du tour de la figure : on additionne les longueurs des 4 côtés.',
            hint2: `Formule : $P = 2 \\times (L + \\ell)$.`,
            solution: `$$P = 2 \\times (${L} + ${l}) = 2 \\times ${L + l} = ${P}${this._6mU(u)}$$`,
            _v: { k: '6M1.rect', L, l }
          });
        }
        const shapes = [
          { name: 'un carré', n: 4 }, { name: 'un losange', n: 4 },
          { name: 'un triangle équilatéral', n: 3 }, { name: 'un hexagone régulier', n: 6 },
          { name: 'un pentagone régulier', n: 5 }
        ];
        const sh = this.randChoice(shapes);
        const u = this.randChoice(['cm', 'm', 'mm']);
        const c = this.randInt(3, 25);
        return mk({
          title: "Périmètre d'un polygone à côtés égaux",
          statement: `${sh.name.charAt(0).toUpperCase() + sh.name.slice(1)} a des côtés de longueur $${c}${this._6mU(u)}$.\n**Quel est son périmètre en ${u} ?**`,
          type: 'exact', answer: String(sh.n * c),
          hint1: `Combien de côtés a ${sh.name} ? Ils ont tous la même longueur.`,
          hint2: 'Le périmètre est la longueur du contour : pour un polygone dont tous les côtés ont la même longueur, P = nombre de côtés × longueur d\'un côté.',
          solution: `${sh.name.charAt(0).toUpperCase() + sh.name.slice(1)} a ${sh.n} côtés de même longueur :\n$$P = ${sh.n} \\times ${c} = ${sh.n * c}${this._6mU(u)}$$`,
          _v: { k: '6M1.reg', n: sh.n, c }
        });
      }

      if (t === 2) {
        const st = this.randChoice(['conv', 'poly', 'mix', 'side']);
        if (st === 'conv') return conv(true);
        if (st === 'poly') {
          const n = this.randChoice([3, 4]);
          const names = n === 3 ? ['AB', 'BC', 'CA'] : ['AB', 'BC', 'CD', 'DA'];
          const sides = names.map(() => this._6r(this.randInt(15, 99) / 10));
          const P = this._6r(sides.reduce((a, b) => a + b, 0));
          const fig = n === 3 ? 'le triangle $ABC$' : 'le quadrilatère $ABCD$';
          return mk({
            title: "Périmètre d'un polygone (décimaux)",
            statement: `Dans ${fig}, on a : ${names.map((nm, i) => `$${nm} = ${T(sides[i])}\\text{ cm}$`).join(', ')}.\n**Calculer le périmètre de ${n === 3 ? 'ce triangle' : 'ce quadrilatère'} en cm.**`,
            type: 'exact', answer: A(P),
            hint1: 'Additionne les longueurs de tous les côtés.',
            hint2: 'Pose l\'addition en alignant les virgules.',
            solution: `$$P = ${sides.map(T).join(' + ')} = ${T(P)}\\text{ cm}$$`,
            _v: { k: '6M1.sum', sides }
          });
        }
        if (st === 'mix') {
          const Lm = this._6r(this.randInt(11, 49) / 10);
          const lcm = this.randInt(15, 95);
          const P = this._6r(2 * (Lm * 100 + lcm));
          return mk({
            title: 'Périmètre avec des unités différentes',
            statement: `Un rectangle mesure $${T(Lm)}\\text{ m}$ de longueur et $${lcm}\\text{ cm}$ de largeur.\n${this._6mRectSvg(`${X(Lm)} m`, `${lcm} cm`)}\n**Calculer son périmètre en cm.**`,
            type: 'exact', answer: A(P),
            hint1: 'Avant de calculer, il faut exprimer les deux longueurs dans la même unité (ici le cm).',
            hint2: 'Rappel : $1\\text{ m} = 100\\text{ cm}$ ; périmètre du rectangle : $P = 2 \\times (L + \\ell)$.',
            solution: `$${T(Lm)}\\text{ m} = ${T(this._6r(Lm * 100))}\\text{ cm}$.\n$$P = 2 \\times (${T(this._6r(Lm * 100))} + ${lcm}) = 2 \\times ${T(this._6r(Lm * 100 + lcm))} = ${T(P)}\\text{ cm}$$`,
            _v: { k: '6M1.rectmix', Lm, lcm }
          }, 'Convertir');
        }
        if (Math.random() < 0.5) {
          const c = this._6r(this.randInt(12, 150) / (Math.random() < 0.5 ? 1 : 10));
          const P = this._6r(4 * c);
          return mk({
            title: "Retrouver le côté d'un carré",
            statement: `Un carré a un périmètre de $${T(P)}\\text{ cm}$.\n**Quelle est la longueur de son côté, en cm ?**`,
            type: 'exact', answer: A(c),
            hint1: `On cherche le nombre qui, multiplié par quatre, donne ${X(P)}.`,
            hint2: 'Un carré a quatre côtés de même longueur : son périmètre vaut quatre fois la longueur d\'un côté.',
            solution: `**Étape 1 :** pour un carré de côté $c$, $P = 4 \\times c$.\n**Étape 2 :** $c = ${T(P)} \\div 4 = ${T(c)}$.\nLe côté du carré mesure **$${T(c)}\\text{ cm}$**.`,
            _v: { k: '6M1.sqside', P }
          }, 'Raisonner');
        }
        const L = this.randInt(8, 40), l = this.randInt(2, L - 1);
        const P = 2 * (L + l);
        return mk({
          title: "Retrouver la largeur d'un rectangle",
          statement: `Un rectangle a un périmètre de $${P}\\text{ m}$ et une longueur de $${L}\\text{ m}$.\n**Quelle est sa largeur, en m ?**`,
          type: 'exact', answer: String(l),
          hint1: 'La moitié du périmètre est égale à la longueur plus la largeur.',
          hint2: 'Le périmètre d\'un rectangle est le double de la somme « longueur + largeur » : cette somme est donc la moitié du périmètre.',
          solution: `**Étape 1 :** $P = 2 \\times (L + \\ell)$, donc $L + \\ell = ${P} \\div 2 = ${P / 2}\\text{ m}$ (demi-périmètre).\n**Étape 2 :** $\\ell = ${P / 2} - ${L} = ${l}\\text{ m}$.\nLa largeur du rectangle est **$${l}\\text{ m}$**.`,
          _v: { k: '6M1.rectside', P, L }
        }, 'Raisonner');
      }

      if (t === 3) {
        const st = this.randChoice(['circ', 'circExact', 'lshape', 'circInv']);
        if (st === 'circ') {
          const isR = Math.random() < 0.5;
          const r = this.randInt(2, 30);
          const d = isR ? 2 * r : this.randInt(3, 40);
          const res = this._6r(3.14 * d);
          const giv = isR ? `de rayon $${r}\\text{ cm}$` : `de diamètre $${d}\\text{ cm}$`;
          return mk({
            title: "Longueur d'un cercle (valeur approchée)",
            statement: `On considère un cercle ${giv}.\n${this._6mCircleSvg(isR ? `${r} cm` : `${d} cm`, isR)}\n**Calculer la longueur de ce cercle en cm, en prenant $3{,}14$ comme valeur approchée de $\\pi$.**`,
            type: 'exact', answer: A(res),
            hint1: 'La longueur d\'un cercle est proportionnelle à son diamètre : $\\mathcal{P} = \\pi \\times D$.',
            hint2: isR ? 'Attention : on te donne le rayon. Le diamètre est le double du rayon, puis $\\mathcal{P} \\approx 3{,}14 \\times D$.' : 'On remplace $\\pi$ par $3{,}14$ : $\\mathcal{P} \\approx 3{,}14 \\times D$.',
            solution: `${isR ? `$D = 2 \\times ${r} = ${d}\\text{ cm}$.\n` : ''}$$\\mathcal{P} = \\pi \\times D \\approx 3{,}14 \\times ${d} = ${T(res)}\\text{ cm}$$`,
            _v: { k: '6M1.circ', d }
          });
        }
        if (st === 'circExact') {
          const r = this.randInt(2, 15);
          const u = this.randChoice(['cm', 'm', 'mm']);
          const isR = Math.random() < 0.5;
          const fmt = k => `$${k}\\pi${this._6mU(u)}$`;
          const correct = fmt(2 * r);
          const q = mk({
            title: "Longueur exacte d'un cercle",
            statement: `Un cercle a ${isR ? `un rayon de $${r}${this._6mU(u)}$` : `un diamètre de $${2 * r}${this._6mU(u)}$`}.\n**Quelle est la valeur exacte de sa longueur ?**`,
            hint1: 'La longueur d\'un cercle de diamètre $D$ est $\\pi \\times D$.',
            hint2: isR ? 'On te donne le rayon : le diamètre en est le double. La valeur exacte s\'écrit avec la lettre $\\pi$.' : 'La valeur exacte garde la lettre $\\pi$ : on ne remplace pas $\\pi$ par $3{,}14$.',
            solution: `$$\\mathcal{P} = \\pi \\times ${2 * r} = ${2 * r}\\pi${this._6mU(u)}$$`,
            _v: { k: '6M1.circExact', r, u }
          });
          return this._6mcq(q, correct, [fmt(r), fmt(r * r), fmt(4 * r), fmt(2 * r + 2)]);
        }
        if (st === 'lshape') {
          const W = this.randInt(8, 18), H = this.randInt(6, 15);
          const a = this.randInt(2, W - 3), b = this.randInt(2, H - 3);
          return mk({
            title: 'Périmètre d\'une figure composée',
            statement: `Voici une figure dont tous les angles sont droits (dimensions en cm, figure non à l'échelle).\n${this._6mLShapeSvg({ bottom: `${W} cm`, left: `${H} cm`, top: `${W - a} cm`, innerV: `${b} cm` })}\n**Calculer le périmètre de cette figure en cm.**`,
            type: 'exact', answer: String(2 * (W + H)),
            hint1: 'Commence par trouver les deux longueurs manquantes à l\'aide des longueurs connues.',
            hint2: 'Dans une figure dont tous les angles sont droits, la somme des segments horizontaux du haut est égale à la longueur du bas (de même pour les segments verticaux).',
            solution: `Côtés manquants : $${W} - ${W - a} = ${a}\\text{ cm}$ et $${H} - ${b} = ${H - b}\\text{ cm}$.\n$$P = ${W} + ${H} + ${W - a} + ${b} + ${a} + ${H - b} = ${2 * (W + H)}\\text{ cm}$$`,
            _v: { k: '6M1.lshape', W, H }
          }, 'Raisonner');
        }
        const d = this.randInt(2, 40);
        const L = this._6r(3.14 * d);
        return mk({
          title: 'Retrouver le diamètre d\'un cercle',
          statement: `En prenant $3{,}14$ comme valeur approchée de $\\pi$, la longueur d'un cercle vaut $${T(L)}\\text{ cm}$.\n**Quel est son diamètre, en cm ?**`,
          type: 'exact', answer: String(d),
          hint1: 'Longueur du cercle $= 3{,}14 \\times D$ : on cherche $D$.',
          hint2: 'Longueur d\'un cercle : $\\mathcal{P} = \\pi \\times D$ ; pour retrouver un facteur, on divise le produit par l\'autre facteur.',
          solution: `$3{,}14 \\times D = ${T(L)}$, donc $D = ${T(L)} \\div 3{,}14 = ${d}\\text{ cm}$.`,
          _v: { k: '6M1.circInv', L }
        }, 'Raisonner');
      }

      // t === 4 : Défi 5ème
      const st = this.randChoice(['stade', 'sqhalf', 'fence', 'wheel']);
      if (st === 'stade') {
        const L = this.randInt(20, 120), d = this.randInt(10, 60);
        const res = this._6r(2 * L + 3.14 * d);
        return mk({
          title: 'Périmètre d\'une piste',
          statement: `Une piste est formée de deux segments de longueur $${L}\\text{ m}$ et de deux demi-cercles de diamètre $${d}\\text{ m}$.\n${this._6mStadeSvg(`${L} m`, `${d} m`)}\n**Calculer la longueur d'un tour de piste en m (prendre $3{,}14$ pour $\\pi$).**`,
          type: 'exact', answer: A(res),
          hint1: 'Deux demi-cercles de même diamètre forment un cercle entier.',
          hint2: 'Longueur d\'un cercle de diamètre $D$ : $\\pi \\times D$. N\'oublie pas les deux segments droits.',
          solution: `Les deux demi-cercles forment un cercle de diamètre $${d}\\text{ m}$ : $3{,}14 \\times ${d} = ${T(this._6r(3.14 * d))}\\text{ m}$.\n$$\\text{Tour} = 2 \\times ${L} + ${T(this._6r(3.14 * d))} = ${T(res)}\\text{ m}$$`,
          _v: { k: '6M1.stade', L, d }
        }, 'Modéliser');
      }
      if (st === 'sqhalf') {
        const c = 2 * this.randInt(2, 25);
        const res = this._6r(3 * c + 3.14 * c / 2);
        return mk({
          title: 'Carré surmonté d\'un demi-cercle',
          statement: `La figure est formée d'un carré de côté $${c}\\text{ cm}$ et d'un demi-cercle de diamètre égal au côté du carré.\n${this._6mSqHalfSvg(`${c} cm`)}\n**Calculer le périmètre de la figure en cm (prendre $3{,}14$ pour $\\pi$).**`,
          type: 'exact', answer: A(res),
          hint1: 'Le côté du carré en pointillés n\'est pas sur le contour : seuls 3 côtés comptent.',
          hint2: 'Un demi-cercle mesure la moitié de la longueur du cercle de même diamètre : $\\pi \\times D \\div 2$.',
          solution: `Trois côtés du carré : $3 \\times ${c} = ${3 * c}\\text{ cm}$.\nDemi-cercle : $3{,}14 \\times ${c} \\div 2 = ${T(this._6r(3.14 * c / 2))}\\text{ cm}$.\n$$P = ${3 * c} + ${T(this._6r(3.14 * c / 2))} = ${T(res)}\\text{ cm}$$`,
          _v: { k: '6M1.sqhalf', c }
        }, 'Modéliser');
      }
      if (st === 'fence') {
        const L = this.randInt(15, 60), l = this.randInt(8, L - 2), g = this.randInt(2, 5);
        const p = this._6r(this.randInt(25, 95) / 10);
        const len = 2 * (L + l) - g;
        const cost = this._6r(len * p);
        return mk({
          title: 'Clôturer un terrain',
          statement: `Un terrain rectangulaire mesure $${L}\\text{ m}$ sur $${l}\\text{ m}$. On veut le clôturer en laissant un portail de $${g}\\text{ m}$ sans grillage. Le grillage coûte ${X(p)} € le mètre.\n**Quel est le prix du grillage, en euros ?**`,
          type: 'exact', answer: A(cost),
          hint1: 'Calcule d\'abord le périmètre du terrain, puis retire la largeur du portail.',
          hint2: 'Périmètre du rectangle : $P = 2 \\times (L + \\ell)$. Ensuite, prix total = longueur × prix d\'un mètre.',
          solution: `Périmètre : $2 \\times (${L} + ${l}) = ${2 * (L + l)}\\text{ m}$. Grillage : $${2 * (L + l)} - ${g} = ${len}\\text{ m}$.\n$$\\text{Prix} = ${len} \\times ${T(p)} = ${T(cost)}$$ soit ${X(cost)} €.`,
          _v: { k: '6M1.fence', L, l, g, p }
        }, 'Modéliser');
      }
      const d = this.randInt(40, 75), n = this.randInt(10, 60);
      const res = this._6r(n * 3.14 * d);
      return mk({
        title: 'La roue de vélo',
        statement: `Une roue de vélo a un diamètre de $${d}\\text{ cm}$. Elle fait ${n} tours complets sans glisser.\n**Quelle distance le vélo a-t-il parcourue, en cm ? (prendre $3{,}14$ pour $\\pi$)**`,
        type: 'exact', answer: A(res),
        hint1: 'À chaque tour, le vélo avance de la longueur du cercle de la roue.',
        hint2: 'En un tour, la roue avance de la longueur de son cercle : $\\pi \\times D \\approx 3{,}14 \\times D$.',
        solution: `Un tour : $3{,}14 \\times ${d} = ${T(this._6r(3.14 * d))}\\text{ cm}$.\n$$${n} \\times ${T(this._6r(3.14 * d))} = ${T(res)}\\text{ cm}$$`,
        _v: { k: '6M1.wheel', d, n }
      }, 'Modéliser');
    },

    // =====================================================================
    // 6M2 — Aires
    // =====================================================================
    generate6M2(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const U = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
      const T = x => this._6tex(x), X = x => this._6txt(x), A = x => this._6ans(x);
      const mk = (o, sk) => this._6mQ('6M2', t, o, sk);

      const conv = (level) => {
        let from, to, val, res;
        for (let guard = 0; guard < 80; guard++) {
          const i = this.randInt(2, 5);
          const j = level === 1 ? i + 1 : this.randInt(i + 1, Math.min(6, i + 2));
          const toSmall = Math.random() < 0.55;
          from = toSmall ? i : j; to = toSmall ? j : i;
          if (level === 1) val = toSmall ? this.randInt(2, 95) : this.randInt(1, 99) * 100;
          else val = this._6r(this.randInt(11, 999) / Math.pow(10, this.randInt(0, 2)));
          res = this._6r(val * Math.pow(100, to - from));
          const dec = (String(res).split('.')[1] || '').length;
          if (dec <= 4 && res < 1e7) break;
        }
        const k = Math.abs(to - from);
        return mk({
          title: level === 1 ? "Conversion d'aires" : "Conversion d'aires (plusieurs rangs)",
          statement: `Compléter la conversion suivante :\n$$${T(val)}${this._6mU(U[from], 2)} = \\dots${this._6mU(U[to], 2)}$$\n*(Donner seulement le nombre.)*`,
          type: 'exact', answer: A(res),
          hint1: 'Pour les aires, chaque unité vaut 100 fois l\'unité immédiatement inférieure : le tableau a deux colonnes par unité.',
          hint2: `Entre deux unités d'aire voisines, on multiplie ou on divise par cent ; ici, l'écart est de ${['', 'un rang', 'deux rangs', 'trois rangs', 'quatre rangs'][k] || 'plusieurs rangs'}.`,
          solution: `$1${this._6mU(U[Math.min(from, to)], 2)} = ${T(Math.pow(100, k))}${this._6mU(U[Math.max(from, to)], 2)}$, donc :\n$$${T(val)}${this._6mU(U[from], 2)} = ${T(res)}${this._6mU(U[to], 2)}$$`,
          _v: { k: '6M2.conv', val, from: U[from], to: U[to] }
        }, 'Convertir');
      };

      if (t === 1) {
        const st = this.randChoice(['rect', 'sq', 'conv']);
        if (st === 'conv') return conv(1);
        const u = this.randChoice(['cm', 'm', 'mm', 'km']);
        if (st === 'rect') {
          const L = this.randInt(4, 20), l = this.randInt(2, L - 1);
          return mk({
            title: "Aire d'un rectangle",
            statement: `Calculer l'aire du rectangle ci-dessous, en ${u}² (figure non à l'échelle).\n${this._6mRectSvg(`${L} ${u}`, `${l} ${u}`)}`,
            type: 'exact', answer: String(L * l),
            hint1: "L'aire d'un rectangle est égale à Longueur × largeur.",
            hint2: 'Rectangle de longueur $L$ et de largeur $\\ell$ : $\\mathcal{A} = L \\times \\ell$, en unités « carrées ».',
            solution: `$$\\mathcal{A} = L \\times \\ell = ${L} \\times ${l} = ${L * l}${this._6mU(u, 2)}$$`,
            _v: { k: '6M2.rect', L, l }
          });
        }
        const c = this.randInt(2, 15);
        return mk({
          title: "Aire d'un carré",
          statement: `Un carré a pour côté $${c}${this._6mU(u)}$.\n**Calculer son aire en ${u}².**`,
          type: 'exact', answer: String(c * c),
          hint1: "L'aire d'un carré est égale à côté × côté.",
          hint2: 'Carré de côté $c$ : $\\mathcal{A} = c \\times c$ ; l\'aire s\'exprime en unités « carrées ».',
          solution: `$$\\mathcal{A} = c \\times c = ${c} \\times ${c} = ${c * c}${this._6mU(u, 2)}$$`,
          _v: { k: '6M2.sq', c }
        });
      }

      if (t === 2) {
        const st = this.randChoice(['conv', 'rectdec', 'side', 'aireperi']);
        if (st === 'conv') return conv(2);
        if (st === 'rectdec') {
          const L = this._6r(this.randInt(15, 99) / 10), l = this.randInt(2, 9);
          const res = this._6r(L * l);
          return mk({
            title: "Aire d'un rectangle (décimaux)",
            statement: `Un rectangle mesure $${T(L)}\\text{ m}$ de longueur et $${l}\\text{ m}$ de largeur.\n**Calculer son aire en m².**`,
            type: 'exact', answer: A(res),
            hint1: "Aire du rectangle = Longueur × largeur.",
            hint2: 'Rectangle : $\\mathcal{A} = L \\times \\ell$. Pour multiplier un décimal par un entier, calcule comme avec des entiers puis place la virgule.',
            solution: `$$\\mathcal{A} = ${T(L)} \\times ${l} = ${T(res)}\\text{ m}^2$$`,
            _v: { k: '6M2.rect', L, l }
          });
        }
        if (st === 'side') {
          const L = this.randInt(6, 25), l = this.randInt(2, L - 1);
          const Ar = L * l;
          return mk({
            title: 'Retrouver une dimension',
            statement: `Un rectangle a une aire de $${Ar}\\text{ cm}^2$ et une longueur de $${L}\\text{ cm}$.\n**Quelle est sa largeur, en cm ?**`,
            type: 'exact', answer: String(l),
            hint1: `On cherche le nombre qui, multiplié par ${L}, donne ${Ar}.`,
            hint2: 'Aire du rectangle : $\\mathcal{A} = L \\times \\ell$ ; un facteur manquant s\'obtient par une division.',
            solution: `$${L} \\times \\ell = ${Ar}$, donc $\\ell = ${Ar} \\div ${L} = ${l}\\text{ cm}$.`,
            _v: { k: '6M2.side', A: Ar, L }
          }, 'Raisonner');
        }
        const L = this.randInt(3, 20), l = this.randInt(2, L);
        const what = this.randChoice(['aire', 'périmètre']);
        const fa = v => `$${v}\\text{ cm}^2$`, fp = v => `$${v}\\text{ cm}$`;
        const area = L * l, per = 2 * (L + l);
        const correct = what === 'aire' ? fa(area) : fp(per);
        const shape = L === l ? `un carré de côté $${L}\\text{ cm}$` : `un rectangle de $${L}\\text{ cm}$ sur $${l}\\text{ cm}$`;
        const q = mk({
          title: 'Ne pas confondre aire et périmètre',
          statement: `On considère ${shape}.\n**Quel est son ${what} ?**`,
          hint1: "Le périmètre est une longueur (le tour, en cm) ; l'aire mesure la surface (en cm²).",
          hint2: 'Rectangle : périmètre $P = 2 \\times (L + \\ell)$ (en cm) ; aire $\\mathcal{A} = L \\times \\ell$ (en cm²).',
          solution: what === 'aire'
            ? `$$\\mathcal{A} = ${L} \\times ${l} = ${area}\\text{ cm}^2$$ (le périmètre, lui, vaut $${per}\\text{ cm}$).`
            : `$$P = 2 \\times (${L} + ${l}) = ${per}\\text{ cm}$$ (l'aire, elle, vaut $${area}\\text{ cm}^2$).`,
          _v: { k: '6M2.aireperi', L, l, what }
        });
        const distr = what === 'aire' ? [fa(per), fp(area), fa(L + l), fa(2 * L * l)] : [fp(area), fa(per), fp(L + l), fp(2 * L + l)];
        return this._6mcq(q, correct, distr);
      }

      if (t === 3) {
        const st = this.randChoice(['lshape', 'frame', 'mix']);
        if (st === 'lshape') {
          const W = this.randInt(8, 18), H = this.randInt(6, 15);
          const a = this.randInt(2, W - 3), b = this.randInt(2, H - 3);
          const res = W * H - a * b;
          return mk({
            title: "Aire d'une figure composée",
            statement: `Tous les angles de cette figure sont droits (dimensions en cm, figure non à l'échelle).\n${this._6mLShapeSvg({ bottom: `${W} cm`, left: `${H} cm`, innerH: `${a} cm`, innerV: `${b} cm` })}\n**Calculer l'aire de cette figure en cm².**`,
            type: 'exact', answer: String(res),
            hint1: 'La figure est un grand rectangle auquel on a enlevé un petit rectangle dans un coin.',
            hint2: 'Aire par différence : aire de la figure = aire du grand rectangle − aire de la partie enlevée.',
            solution: `Grand rectangle : $${W} \\times ${H} = ${W * H}\\text{ cm}^2$. Rectangle enlevé : $${a} \\times ${b} = ${a * b}\\text{ cm}^2$.\n$$\\mathcal{A} = ${W * H} - ${a * b} = ${res}\\text{ cm}^2$$`,
            _v: { k: '6M2.lshape', W, H, a, b }
          }, 'Raisonner');
        }
        if (st === 'frame') {
          const W = this.randInt(12, 30), H = this.randInt(8, W - 2);
          const w = this.randInt(3, W - 4), h = this.randInt(2, H - 3);
          const res = W * H - w * h;
          return mk({
            title: 'Aire d\'un cadre',
            statement: `Un cadre rectangulaire mesure $${W}\\text{ cm}$ sur $${H}\\text{ cm}$. On découpe en son centre une ouverture rectangulaire de $${w}\\text{ cm}$ sur $${h}\\text{ cm}$.\n${this._6mFrameSvg(`${W} cm × ${H} cm`, `${w} cm × ${h} cm`)}\n**Quelle est l'aire de la partie colorée, en cm² ?**`,
            type: 'exact', answer: String(res),
            hint1: "On calcule l'aire du grand rectangle, puis on retire celle de l'ouverture.",
            hint2: 'Aire par différence : aire colorée = aire du grand rectangle − aire de l\'ouverture, avec $\\mathcal{A} = L \\times \\ell$.',
            solution: `$$\\mathcal{A} = ${W} \\times ${H} - ${w} \\times ${h} = ${W * H} - ${w * h} = ${res}\\text{ cm}^2$$`,
            _v: { k: '6M2.frame', W, H, w, h }
          }, 'Raisonner');
        }
        const Lm = this._6r(this.randInt(11, 39) / 10), lcm = this.randInt(12, 90);
        const res = this._6r(Lm * 100 * lcm);
        return mk({
          title: 'Aire avec des unités différentes',
          statement: `Une planche rectangulaire mesure $${T(Lm)}\\text{ m}$ de long et $${lcm}\\text{ cm}$ de large.\n**Calculer son aire en cm².**`,
          type: 'exact', answer: A(res),
          hint1: 'Exprime d\'abord les deux dimensions dans la même unité : le cm.',
          hint2: 'Rappel : $1\\text{ m} = 100\\text{ cm}$ ; aire du rectangle $\\mathcal{A} = L \\times \\ell$.',
          solution: `$${T(Lm)}\\text{ m} = ${T(this._6r(Lm * 100))}\\text{ cm}$.\n$$\\mathcal{A} = ${T(this._6r(Lm * 100))} \\times ${lcm} = ${T(res)}\\text{ cm}^2$$`,
          _v: { k: '6M2.mix', Lm, lcm }
        }, 'Convertir');
      }

      // t === 4
      const st = this.randChoice(['tri', 'paint', 'sameperi', 'tiles']);
      if (st === 'tri') {
        const a = this.randInt(3, 20), b = this.randInt(3, 20);
        const res = this._6r(a * b / 2);
        return mk({
          title: "Aire d'un triangle rectangle",
          statement: `Le triangle ci-dessous est rectangle ; ses côtés de l'angle droit mesurent $${a}\\text{ cm}$ et $${b}\\text{ cm}$.\n${this._6mTriSvg(`${a} cm`, `${b} cm`)}\n**Calculer son aire en cm².** *(Astuce : c'est la moitié d'un rectangle.)*`,
          type: 'exact', answer: A(res),
          hint1: `Deux triangles identiques à celui-ci forment un rectangle de $${a}\\text{ cm}$ sur $${b}\\text{ cm}$.`,
          hint2: 'Un triangle rectangle est la moitié d\'un rectangle : son aire vaut $\\frac{a \\times b}{2}$, où $a$ et $b$ sont les côtés de l\'angle droit.',
          solution: `Rectangle : $${a} \\times ${b} = ${a * b}\\text{ cm}^2$. Le triangle en est la moitié :\n$$\\mathcal{A} = ${a * b} \\div 2 = ${T(res)}\\text{ cm}^2$$`,
          _v: { k: '6M2.tri', a, b }
        }, 'Raisonner');
      }
      if (st === 'paint') {
        const W = this.randInt(4, 9), H = this.randInt(2, 3);
        const w = this._6r(this.randInt(8, 15) / 10), h = this._6r(this.randInt(8, 12) / 10);
        const c = this.randChoice([2, 3, 4, 5]);
        const area = this._6r(W * H - w * h);
        const pots = Math.ceil(this._6r(area / c) - 1e-9);
        return mk({
          title: 'Peindre un mur',
          statement: `Un mur rectangulaire mesure $${W}\\text{ m}$ sur $${H}\\text{ m}$. Il contient une fenêtre de $${T(w)}\\text{ m}$ sur $${T(h)}\\text{ m}$ qu'on ne peint pas. Un pot de peinture permet de couvrir $${c}\\text{ m}^2$.\n**Combien de pots faut-il acheter au minimum ?**`,
          type: 'exact', answer: String(pots),
          hint1: 'Calcule l\'aire à peindre : aire du mur moins aire de la fenêtre.',
          hint2: 'Aire d\'un rectangle : $L \\times \\ell$. On ne peut acheter qu\'un nombre entier de pots : on arrondit au nombre entier supérieur.',
          solution: `Aire à peindre : $${W} \\times ${H} - ${T(w)} \\times ${T(h)} = ${W * H} - ${T(this._6r(w * h))} = ${T(area)}\\text{ m}^2$.\nNombre de pots : $${T(area)} \\div ${c} \\approx ${T(this._6r(Math.floor(area / c * 100) / 100))}$, donc il faut **${pots} pots**.`,
          _v: { k: '6M2.paint', W, H, w, h, c }
        }, 'Modéliser');
      }
      if (st === 'sameperi') {
        let L, l;
        do { L = this.randInt(5, 24); l = this.randInt(2, L - 1); } while ((L + l) % 2 !== 0);
        const c = (L + l) / 2;
        return mk({
          title: 'Même périmètre, aires différentes',
          statement: `Un rectangle mesure $${L}\\text{ cm}$ sur $${l}\\text{ cm}$. Un carré a le **même périmètre** que ce rectangle.\n**Quelle est l'aire du carré, en cm² ?**`,
          type: 'exact', answer: String(c * c),
          hint1: 'Calcule le périmètre du rectangle, puis déduis-en le côté du carré.',
          hint2: 'Rectangle : $P = 2 \\times (L + \\ell)$. Carré : $P = 4 \\times c$ et $\\mathcal{A} = c \\times c$.',
          solution: `**Étape 1 :** périmètre du rectangle : $2 \\times (${L} + ${l}) = ${2 * (L + l)}\\text{ cm}$.\n**Étape 2 :** le carré a le même périmètre, donc son côté mesure $${2 * (L + l)} \\div 4 = ${c}\\text{ cm}$.\n**Étape 3 :** $$\\mathcal{A} = ${c} \\times ${c} = ${c * c}\\text{ cm}^2$$ L'aire du carré est **$${c * c}\\text{ cm}^2$** (le rectangle n'a que $${L * l}\\text{ cm}^2$ : même périmètre ne veut pas dire même aire).`,
          _v: { k: '6M2.sameperi', L, l }
        }, 'Raisonner');
      }
      const c = this.randChoice([10, 20, 25, 50]);
      const perM = 100 / c;
      const L = this.randInt(2, 8), l = this.randInt(2, 6);
      const n = L * perM * l * perM;
      return mk({
        title: 'Carreler une pièce',
        statement: `Le sol d'une pièce rectangulaire mesure $${L}\\text{ m}$ sur $${l}\\text{ m}$. On le recouvre de carreaux carrés de $${c}\\text{ cm}$ de côté, sans découpe.\n**Combien de carreaux faut-il ?**`,
        type: 'exact', answer: String(n),
        hint1: 'Cherche combien de carreaux on peut aligner sur un mètre, puis sur la longueur et sur la largeur de la pièce.',
        hint2: 'Rappel : un mètre vaut cent centimètres. Les carreaux forment des rangées : nombre total = nombre de rangées × nombre de carreaux par rangée.',
        solution: `**Étape 1 :** on convertit : $${L}\\text{ m} = ${L * 100}\\text{ cm}$ et $${l}\\text{ m} = ${l * 100}\\text{ cm}$.\n**Étape 2 :** sur la longueur : $${L * 100} \\div ${c} = ${L * perM}$ carreaux ; sur la largeur : $${l * 100} \\div ${c} = ${l * perM}$ carreaux.\n**Étape 3 :** $$${L * perM} \\times ${l * perM} = ${n}\\text{ carreaux}$$ Il faut **${n} carreaux**.`,
        _v: { k: '6M2.tiles', L, l, c }
      }, 'Modéliser');
    },

    // =====================================================================
    // 6M3 — Volumes
    // =====================================================================
    generate6M3(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const T = x => this._6tex(x), X = x => this._6txt(x), A = x => this._6ans(x);
      const mk = (o, sk) => this._6mQ('6M3', t, o, sk);
      // Valeurs en cm³
      const V = { 'L': 1000, 'dm³': 1000, 'cm³': 1, 'mL': 1, 'cL': 10, 'dL': 100, 'm³': 1000000 };
      const tex = u => u.endsWith('³') ? this._6mU(u.slice(0, -1), 3) : this._6mU(u);

      const conv = (decimal) => {
        const pairs = decimal
          ? [['L', 'cm³'], ['cm³', 'L'], ['L', 'mL'], ['mL', 'L'], ['dm³', 'cm³'], ['cL', 'L'], ['L', 'cL'], ['m³', 'L'], ['L', 'm³'], ['dL', 'cm³']]
          : [['L', 'cm³'], ['dm³', 'L'], ['L', 'dm³'], ['cm³', 'mL'], ['L', 'mL'], ['dm³', 'cm³'], ['cm³', 'L'], ['mL', 'L']];
        let from, to, val, res;
        for (let guard = 0; guard < 80; guard++) {
          [from, to] = this.randChoice(pairs);
          if (decimal) val = this._6r(this.randInt(11, 999) / Math.pow(10, this.randInt(0, 2)));
          else val = V[from] >= V[to] ? this.randInt(2, 60) : this.randInt(1, 40) * (V[to] / V[from]);
          res = this._6r(val * V[from] / V[to]);
          const dec = (String(res).split('.')[1] || '').length;
          // 100 et 1 000 figurent dans l'indice (égalités à connaître) : on les écarte
          if (dec <= 3 && res < 1e7 && res !== 100 && res !== 1000) break;
        }
        return mk({
          title: decimal ? 'Volumes et contenances (décimaux)' : 'Volumes et contenances',
          statement: `Compléter :\n$$${T(val)}${tex(from)} = \\dots${tex(to)}$$\n*(Rappel : $1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$ et $1\\text{ mL} = 1\\text{ cm}^3$.)*`,
          type: 'exact', answer: A(res),
          hint1: `Passe si besoin par une unité intermédiaire (le cm³ ou le L) pour aller des ${from} aux ${to}.`,
          hint2: 'Égalités à connaître : 1 L = 1 dm³ = 1 000 cm³ = 1 000 mL ; 1 L = 100 cL ; 1 m³ = 1 000 L ; 1 mL = 1 cm³.',
          solution: `On passe par le centimètre cube ($1\\text{ cm}^3 = 1\\text{ mL}$ et $1\\text{ L} = 1\\,000\\text{ cm}^3$) :\n$$${T(val)}${tex(from)} = ${T(this._6r(val * V[from]))}\\text{ cm}^3 = ${T(res)}${tex(to)}$$\nRéponse : **$${T(res)}$** ${to}.`,
          _v: { k: '6M3.conv', val, from, to }
        }, 'Convertir');
      };

      if (t === 1) {
        const st = this.randChoice(['count', 'cube', 'conv']);
        if (st === 'conv') return conv(false);
        if (st === 'count') {
          const a = this.randInt(2, 7), b = this.randInt(2, 6), c = this.randInt(2, 6);
          return mk({
            title: 'Compter des cubes unités',
            statement: `Un pavé droit est construit avec des petits cubes identiques de $1\\text{ cm}^3$ : ${a} cubes dans la longueur, ${b} dans la largeur et ${c} dans la hauteur.\n${this._6mPaveSvg(`${a} cubes`, `${b} cubes`, `${c} cubes`)}\n**Quel est le volume de ce pavé, en cm³ ?**`,
            type: 'exact', answer: String(a * b * c),
            hint1: `Une couche contient ${a} × ${b} cubes.`,
            hint2: `Il y a ${c} couches identiques.`,
            solution: `Une couche : $${a} \\times ${b} = ${a * b}$ cubes. Avec ${c} couches :\n$$${a * b} \\times ${c} = ${a * b * c}\\text{ cubes, soit } ${a * b * c}\\text{ cm}^3$$`,
            _v: { k: '6M3.count', a, b, c }
          });
        }
        const c = this.randInt(2, 12);
        const u = this.randChoice(['cm', 'm', 'dm', 'mm']);
        return mk({
          title: "Volume d'un cube",
          statement: `Un cube a une arête de $${c}${this._6mU(u)}$.\n**Calculer son volume en ${u}³.**`,
          type: 'exact', answer: String(c * c * c),
          hint1: 'Volume du cube = arête × arête × arête.',
          hint2: 'Cube d\'arête $a$ : $\\mathcal{V} = a \\times a \\times a$ ; l\'unité est l\'unité de longueur « au cube ».',
          solution: `$$\\mathcal{V} = ${c} \\times ${c} \\times ${c} = ${c * c * c}${this._6mU(u, 3)}$$`,
          _v: { k: '6M3.cube', c }
        });
      }

      if (t === 2) {
        const st = this.randChoice(['pave', 'conv', 'height']);
        if (st === 'conv') return conv(true);
        if (st === 'pave') {
          const L = this.randInt(3, 15), l = this.randInt(2, 10), h = this.randInt(2, 12);
          const u = this.randChoice(['cm', 'm', 'dm']);
          return mk({
            title: "Volume d'un pavé droit",
            statement: `Calculer le volume du pavé droit ci-dessous en ${u}³ (figure non à l'échelle).\n${this._6mPaveSvg(`${L} ${u}`, `${l} ${u}`, `${h} ${u}`)}`,
            type: 'exact', answer: String(L * l * h),
            hint1: 'Volume du pavé droit = Longueur × largeur × hauteur.',
            hint2: 'Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$, les trois longueurs étant dans la même unité.',
            solution: `$$\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${L * l * h}${this._6mU(u, 3)}$$`,
            _v: { k: '6M3.pave', L, l, h }
          });
        }
        const L = this.randInt(3, 15), l = this.randInt(2, 10), h = this.randInt(2, 12);
        const Vol = L * l * h;
        return mk({
          title: 'Retrouver la hauteur d\'un pavé',
          statement: `Un pavé droit a un volume de $${Vol}\\text{ cm}^3$. Sa base est un rectangle de $${L}\\text{ cm}$ sur $${l}\\text{ cm}$.\n**Quelle est sa hauteur, en cm ?**`,
          type: 'exact', answer: String(h),
          hint1: 'Calcule d\'abord l\'aire de la base, puis cherche par quel nombre il faut la multiplier pour obtenir le volume.',
          hint2: 'Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$ = (aire de la base) × hauteur.',
          solution: `**Étape 1 :** aire de la base : $${L} \\times ${l} = ${L * l}\\text{ cm}^2$.\n**Étape 2 :** $${L * l} \\times h = ${Vol}$, donc $h = ${Vol} \\div ${L * l} = ${h}$.\nLa hauteur du pavé est **$${h}\\text{ cm}$**.`,
          _v: { k: '6M3.height', V: Vol, L, l }
        }, 'Raisonner');
      }

      if (t === 3) {
        const st = this.randChoice(['aqua', 'pavedec', 'remove']);
        if (st === 'aqua') {
          const L = 5 * this.randInt(6, 20), l = 5 * this.randInt(4, 10), h = 5 * this.randInt(4, 10);
          const res = this._6r(L * l * h / 1000);
          return mk({
            title: "Contenance d'un aquarium",
            statement: `Un aquarium a la forme d'un pavé droit de $${L}\\text{ cm}$ de long, $${l}\\text{ cm}$ de large et $${h}\\text{ cm}$ de haut.\n${this._6mPaveSvg(`${L} cm`, `${l} cm`, `${h} cm`)}\n**Quelle est sa contenance, en litres ?**`,
            type: 'exact', answer: A(res),
            hint1: 'Calcule le volume en cm³, puis convertis : 1 L = 1 000 cm³.',
            hint2: 'Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$ ; contenance : $1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$.',
            solution: `**Étape 1 :** $$\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${T(L * l * h)}\\text{ cm}^3$$\n**Étape 2 :** $1\\text{ L} = 1\\,000\\text{ cm}^3$, donc on divise par $1\\,000$ : $${T(L * l * h)}\\text{ cm}^3 = ${T(res)}\\text{ L}$.\nL'aquarium contient **$${T(res)}\\text{ L}$**.`,
            _v: { k: '6M3.aqua', L, l, h }
          }, 'Modéliser');
        }
        if (st === 'pavedec') {
          const L = this._6r(this.randInt(15, 95) / 10), l = this.randInt(2, 8), h = this.randInt(2, 9);
          const res = this._6r(L * l * h);
          return mk({
            title: "Volume d'un pavé (décimaux)",
            statement: `Un pavé droit mesure $${T(L)}\\text{ m}$ sur $${l}\\text{ m}$ sur $${h}\\text{ m}$.\n**Calculer son volume en m³.**`,
            type: 'exact', answer: A(res),
            hint1: 'Volume = Longueur × largeur × hauteur.',
            hint2: 'Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$. On peut multiplier dans l\'ordre que l\'on veut : commence par les deux entiers.',
            solution: `$$\\mathcal{V} = ${T(L)} \\times ${l} \\times ${h} = ${T(L)} \\times ${l * h} = ${T(res)}\\text{ m}^3$$`,
            _v: { k: '6M3.pave', L, l, h }
          });
        }
        const a = this.randInt(3, 7), b = this.randInt(2, 5), c = this.randInt(2, 5);
        const r = this.randInt(2, a * b - 1);
        return mk({
          title: 'Assemblage de cubes incomplet',
          statement: `Léa construit un pavé de ${a} cubes de long, ${b} cubes de large et ${c} cubes de haut, avec des cubes de $1\\text{ cm}^3$. Puis elle retire ${r} cubes de la couche du dessus.\n**Quel est le volume du solide obtenu, en cm³ ?**`,
          type: 'exact', answer: String(a * b * c - r),
          hint1: 'Calcule d\'abord le nombre de cubes du pavé complet.',
          hint2: 'Nombre de cubes d\'un pavé = (cubes en longueur) × (cubes en largeur) × (cubes en hauteur) ; chaque cube vaut 1 cm³.',
          solution: `$$${a} \\times ${b} \\times ${c} - ${r} = ${a * b * c} - ${r} = ${a * b * c - r}\\text{ cm}^3$$`,
          _v: { k: '6M3.remove', a, b, c, r }
        }, 'Raisonner');
      }

      // t === 4
      const st = this.randChoice(['fill', 'fit', 'level']);
      if (st === 'fill') {
        let L, l, h, Vol, divs;
        do {
          L = this.randInt(4, 12); l = this.randInt(3, 8); h = this.randInt(3, 9);
          Vol = L * l * h;
          divs = [];
          for (let d = 4; d <= 30; d++) if (Vol % d === 0 && Vol / d >= 3) divs.push(d);
        } while (!divs.length);
        const d = this.randChoice(divs);
        return mk({
          title: 'Remplir une cuve',
          statement: `Une cuve a la forme d'un pavé droit de $${L}\\text{ dm}$ sur $${l}\\text{ dm}$ sur $${h}\\text{ dm}$. Un robinet débite ${d} litres par minute.\n**Combien de minutes faut-il pour remplir la cuve vide ?**`,
          type: 'exact', answer: String(Vol / d),
          hint1: 'Calcule le volume de la cuve en litres, puis cherche combien de minutes il faut au robinet pour le fournir.',
          hint2: 'Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$ ; $1\\text{ dm}^3 = 1\\text{ L}$.',
          solution: `**Étape 1 :** $\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${Vol}\\text{ dm}^3 = ${Vol}\\text{ L}$.\n**Étape 2 :** chaque minute, le robinet verse ${d} L : $$${Vol} \\div ${d} = ${Vol / d}$$ Il faut **${Vol / d} minutes** pour remplir la cuve.`,
          _v: { k: '6M3.fill', L, l, h, d }
        }, 'Modéliser');
      }
      if (st === 'fit') {
        const s = this.randChoice([2, 3, 4, 5]);
        const p = this.randInt(2, 6), q2 = this.randInt(2, 5), r = this.randInt(2, 5);
        const L = s * p, l = s * q2, h = s * r;
        return mk({
          title: 'Ranger des cubes dans une boîte',
          statement: `Une boîte en forme de pavé droit mesure intérieurement $${L}\\text{ cm}$ sur $${l}\\text{ cm}$ sur $${h}\\text{ cm}$. On la remplit entièrement de cubes de $${s}\\text{ cm}$ d'arête.\n**Combien de cubes peut-on y ranger ?**`,
          type: 'exact', answer: String(p * q2 * r),
          hint1: `Combien de cubes de ${s} cm tiennent sur la longueur ? sur la largeur ? sur la hauteur ?`,
          hint2: 'Les cubes se rangent en couches : nombre total = (cubes en longueur) × (cubes en largeur) × (cubes en hauteur).',
          solution: `On aligne $${p}$ cubes sur la longueur, $${q2}$ sur la largeur et $${r}$ sur la hauteur :\n$$${p} \\times ${q2} \\times ${r} = ${p * q2 * r}\\text{ cubes}$$`,
          _v: { k: '6M3.fit', L, l, h, s }
        }, 'Raisonner');
      }
      const L = 10 * this.randInt(3, 10), l = 10 * this.randInt(2, 6), hh = this.randInt(5, 30);
      const Vl = this._6r(L * l * hh / 1000);
      return mk({
        title: "Hauteur d'eau dans un aquarium",
        statement: `Le fond d'un aquarium est un rectangle de $${L}\\text{ cm}$ sur $${l}\\text{ cm}$. On y verse $${T(Vl)}\\text{ L}$ d'eau.\n**À quelle hauteur, en cm, l'eau monte-t-elle ?**`,
        type: 'exact', answer: String(hh),
        hint1: 'Convertis le volume d\'eau en cm³ : 1 L = 1 000 cm³.',
        hint2: 'L\'eau forme un pavé droit : $\\mathcal{V} = (\\text{aire du fond}) \\times h$, donc $h = \\mathcal{V} \\div (\\text{aire du fond})$.',
        solution: `$${T(Vl)}\\text{ L} = ${T(L * l * hh)}\\text{ cm}^3$. Aire du fond : $${L} \\times ${l} = ${T(L * l)}\\text{ cm}^2$.\n$$h = ${T(L * l * hh)} \\div ${T(L * l)} = ${hh}\\text{ cm}$$`,
        _v: { k: '6M3.level', L, l, V: Vl }
      }, 'Modéliser');
    },

    // =====================================================================
    // 6M4 — Repérage dans le temps et durées
    // =====================================================================
    generate6M4(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const T = x => this._6tex(x), A = x => this._6ans(x);
      const D = m => this._6mDur(m), Hr = m => this._6mHour(m);
      const mk = (o, sk) => this._6mQ('6M4', t, o, sk);

      if (t === 1) {
        const st = this.randChoice(['tomin', 'tohm', 'tosec']);
        if (st === 'tomin') {
          const h = this.randInt(1, 6), m = this.randInt(0, 59);
          const txt = m === 0 ? `${h} h` : `${h} h ${m} min`;
          return mk({
            title: 'Convertir en minutes',
            statement: `Convertir **${txt}** en minutes.`,
            type: 'exact', answer: String(h * 60 + m), placeholder: 'Ex : 135',
            hint1: 'Convertis d\'abord les heures en minutes, puis ajoute les minutes restantes.',
            hint2: 'Une heure compte soixante minutes.',
            solution: `**Étape 1 :** $${h}\\text{ h} = ${h} \\times 60\\text{ min} = ${h * 60}\\text{ min}$.\n**Étape 2 :** $$${h * 60} + ${m} = ${h * 60 + m}\\text{ min}$$ Donc ${txt} = **${h * 60 + m} min**.`,
            _v: { k: '6M4.tomin', h, m }
          }, 'Convertir');
        }
        if (st === 'tohm') {
          let n;
          do { n = this.randInt(65, 299); } while (n % 60 === 0);
          const correct = D(n);
          const wrong = [];
          if (Math.floor(n / 100) >= 1 && n % 100 < 60) wrong.push(`${Math.floor(n / 100)} h ${n % 100} min`);
          wrong.push(D(n + 60), D(n - 60), D(n + 10), D(n - 10));
          const q = mk({
            title: 'Convertir des minutes en heures et minutes',
            statement: `À quelle durée correspondent **${n} minutes** ?`,
            hint1: '1 h = 60 min : cherche combien de fois 60 « rentre » dans le nombre de minutes.',
            hint2: `Division euclidienne de ${n} par 60.`,
            solution: `$${n} = ${Math.floor(n / 60)} \\times 60 + ${n % 60}$, donc ${n} min = **${correct}**.\n(Attention : une heure ne compte pas 100 minutes !)`,
            _v: { k: '6M4.tohm', n }
          }, 'Convertir');
          return this._6mcq(q, correct, wrong.filter(w => !/^-|^0 /.test(w)));
        }
        const m = this.randInt(1, 9), s = this.randInt(1, 59);
        return mk({
          title: 'Convertir en secondes',
          statement: `Convertir **${m} min ${s} s** en secondes.`,
          type: 'exact', answer: String(m * 60 + s), placeholder: 'Ex : 200',
          hint1: 'Convertis d\'abord les minutes en secondes, puis ajoute les secondes restantes.',
          hint2: '1 min = 60 s.',
          solution: `**Étape 1 :** $${m}\\text{ min} = ${m} \\times 60\\text{ s} = ${m * 60}\\text{ s}$.\n**Étape 2 :** $$${m * 60} + ${s} = ${m * 60 + s}\\text{ s}$$ Donc ${m} min ${s} s = **${m * 60 + s} s**.`,
          _v: { k: '6M4.tosec', m, s }
        }, 'Convertir');
      }

      if (t === 2) {
        const st = this.randChoice(['between', 'end', 'days']);
        if (st === 'between') {
          const s = this.randInt(7 * 12, 18 * 12) * 5;
          const d = this.randInt(4, 60) * 5;
          return mk({
            title: 'Calculer une durée en minutes',
            statement: `Un match commence à **${Hr(s)}** et se termine à **${Hr(s + d)}** le même jour.\n**Combien de minutes a-t-il duré ?**`,
            type: 'exact', answer: String(d), placeholder: 'Ex : 95',
            hint1: 'Passe par une heure « ronde » intermédiaire.',
            hint2: 'Durée = horaire de fin − horaire de début ; une heure compte soixante minutes. Méthode du « saut » : on complète d\'abord jusqu\'à l\'heure ronde.',
            solution: `**Méthode du saut :** de ${Hr(s)} à ${Hr(Math.ceil(s / 60) * 60)} : ${Math.ceil(s / 60) * 60 - s} min` + (s + d > Math.ceil(s / 60) * 60 ? ` ; puis de ${Hr(Math.ceil(s / 60) * 60)} à ${Hr(s + d)} : ${s + d - Math.ceil(s / 60) * 60} min.\nTotal : $${Math.ceil(s / 60) * 60 - s} + ${s + d - Math.ceil(s / 60) * 60} = ${d}$ min.` : '.') + `\nLe match a duré ${D(d)}, soit **${d} min**.`,
            _v: { k: '6M4.between', s, e: s + d }
          }, 'Calculer');
        }
        if (st === 'end') {
          const s = this.randInt(7 * 12, 17 * 12) * 5;
          const d = this.randInt(5, 50) * 5;
          const correct = Hr(s + d);
          const q = mk({
            title: 'Calculer un horaire de fin',
            statement: `Un film dure **${D(d)}**. La séance commence à **${Hr(s)}**.\n**À quelle heure le film se termine-t-il ?**`,
            hint1: 'Ajoute d\'abord les heures, puis les minutes.',
            hint2: 'Si tu obtiens 60 minutes ou plus, convertis 60 min en 1 h.',
            solution: `Horaire de fin = horaire de début + durée.\nOn ajoute ${D(d)} à ${Hr(s)} : cela fait ${Math.floor(s / 60) + Math.floor(d / 60)} h et ${s % 60 + d % 60} min` + (s % 60 + d % 60 >= 60 ? `, or ${s % 60 + d % 60} min = 1 h ${s % 60 + d % 60 - 60} min` : '') + `.\nLe film se termine à **${correct}**.`,
            _v: { k: '6M4.end', s, d }
          }, 'Calculer');
          return this._6mcq(q, correct, [Hr(s + d + 40), Hr(s + d - 60), Hr(s + d + 60), Hr(s + d - 40)]);
        }
        const j = this.randInt(1, 6), h = this.randInt(1, 23);
        return mk({
          title: 'Jours et heures',
          statement: `Convertir **${j} jour${j > 1 ? 's' : ''} et ${h} h** en heures.`,
          type: 'exact', answer: String(24 * j + h), placeholder: 'Ex : 50',
          hint1: 'Convertis d\'abord les jours en heures, puis ajoute les heures restantes.',
          hint2: '1 jour = 24 h.',
          solution: `**Étape 1 :** $${j}\\text{ j} = ${j} \\times 24\\text{ h} = ${24 * j}\\text{ h}$.\n**Étape 2 :** $$${24 * j} + ${h} = ${24 * j + h}\\text{ h}$$ Donc la durée vaut **${24 * j + h} h**.`,
          _v: { k: '6M4.days', j, h }
        }, 'Convertir');
      }

      if (t === 3) {
        const st = this.randChoice(['betweenhm', 'start', 'sum']);
        if (st === 'betweenhm') {
          const s = this.randInt(6 * 12, 14 * 12) * 5 + this.randInt(0, 4);
          let d;
          do { d = this.randInt(70, 420); } while (d % 60 === 0);
          const correct = D(d);
          const q = mk({
            title: 'Durée entre deux horaires',
            statement: `Un train part à **${Hr(s)}** et arrive à **${Hr(s + d)}** le même jour.\n**Quelle est la durée du trajet ?**`,
            hint1: 'Compte d\'abord jusqu\'à l\'heure ronde suivante, puis les heures entières, puis les minutes restantes.',
            hint2: 'Durée = horaire d\'arrivée − horaire de départ ; 1 h = 60 min.',
            solution: `**Étape 1 :** de ${Hr(s)} à ${Hr(Math.ceil(s / 60) * 60)} : ${Math.ceil(s / 60) * 60 - s} min.\n**Étape 2 :** de ${Hr(Math.ceil(s / 60) * 60)} à ${Hr(s + d)} : ${D(s + d - Math.ceil(s / 60) * 60)}.\n**Étape 3 :** en tout ${d} min ; or $${d} = ${Math.floor(d / 60)} \\times 60 + ${d % 60}$.\nLe trajet dure **${correct}**.`,
            _v: { k: '6M4.betweenhm', s, e: s + d }
          }, 'Calculer');
          return this._6mcq(q, correct, [D(d + 40), D(d - 40), D(d + 60), D(d - 60)]);
        }
        if (st === 'start') {
          const e = this.randInt(10 * 12, 20 * 12) * 5;
          const d = this.randInt(14, 80) * 5;
          const correct = Hr(e - d);
          const q = mk({
            title: 'Retrouver un horaire de début',
            statement: `Une randonnée a duré **${D(d)}** et s'est terminée à **${Hr(e)}**.\n**À quelle heure a-t-elle commencé ?**`,
            hint1: 'On remonte le temps : on soustrait la durée à l\'horaire de fin.',
            hint2: 'Soustrais d\'abord les heures, puis les minutes (en « empruntant » 60 min si besoin).',
            solution: `Horaire de début = horaire de fin − durée.\nOn retire ${D(d)} à ${Hr(e)}` + ((e % 60) < (d % 60) ? ` : comme ${e % 60} < ${d % 60}, on « emprunte » 1 h = 60 min, ${Hr(e)} = ${Math.floor(e / 60) - 1} h ${e % 60 + 60} min.` : '.') + `\nLa randonnée a commencé à **${correct}**.`,
            _v: { k: '6M4.start', e, d }
          }, 'Raisonner');
          return this._6mcq(q, correct, [Hr(e - d + 40), Hr(e - d - 40), Hr(e - d + 60), Hr(e + d)]);
        }
        const a = this.randInt(20, 170), b = this.randInt(20, 170);
        const correct = D(a + b);
        const q = mk({
          title: 'Additionner des durées',
          statement: `Pour un devoir, Noé travaille **${D(a)}** le samedi et **${D(b)}** le dimanche.\n**Quelle est la durée totale de travail ?**`,
          hint1: 'Additionne les heures entre elles et les minutes entre elles.',
          hint2: '1 h = 60 min : si le total des minutes atteint 60 ou plus, on convertit 60 min en 1 h.',
          solution: `**Étape 1 :** on convertit en minutes : ${D(a)} = ${a} min et ${D(b)} = ${b} min.\n**Étape 2 :** $${a} + ${b} = ${a + b}$ min.\n**Étape 3 :** $${a + b} = ${Math.floor((a + b) / 60)} \\times 60 + ${(a + b) % 60}$, soit **${correct}**.`,
          _v: { k: '6M4.sum', a, b }
        }, 'Calculer');
        return this._6mcq(q, correct, [D(a + b + 40), D(a + b - 40), D(a + b + 60), D(a + b + 20)]);
      }

      // t === 4
      const st = this.randChoice(['hms', 'night', 'dech', 'todec']);
      if (st === 'hms') {
        const h = this.randInt(1, 3), m = this.randInt(1, 59), s = this.randInt(1, 59);
        return mk({
          title: 'Tout en secondes',
          statement: `Un marathonien court pendant **${h} h ${m} min ${s} s**.\n**Combien de secondes cela représente-t-il ?**`,
          type: 'exact', answer: String(h * 3600 + m * 60 + s), placeholder: 'Ex : 4500',
          hint1: 'Convertis séparément les heures et les minutes en secondes, puis additionne le tout.',
          hint2: '1 h = 3 600 s et 1 min = 60 s.',
          solution: `$$${h} \\times 3\\,600 + ${m} \\times 60 + ${s} = ${T(h * 3600)} + ${m * 60} + ${s} = ${T(h * 3600 + m * 60 + s)}\\text{ s}$$`,
          _v: { k: '6M4.hms', h, m, s }
        }, 'Convertir');
      }
      if (st === 'night') {
        const s = this.randInt(20 * 12, 23 * 12 + 11) * 5;
        const d = this.randInt(13, 90) * 5;
        const correct = Hr(s + d) + (s + d >= 1440 ? ' le lendemain' : '');
        const q = mk({
          title: 'Voyage de nuit',
          statement: `Un car de nuit part à **${Hr(s)}** pour un trajet de **${D(d)}**.\n**À quelle heure arrive-t-il ?**`,
          hint1: 'Compte d\'abord le temps qu\'il reste jusqu\'à minuit, puis le temps restant après minuit.',
          hint2: 'Une journée compte 24 h : à minuit, on repasse à 0 h 00 et on change de jour.',
          solution: `**Étape 1 :** de ${Hr(s)} à minuit : ${1440 - s} min.\n` + (s + d >= 1440 ? `**Étape 2 :** il reste $${d} - ${1440 - s} = ${s + d - 1440}$ min de trajet après minuit.\n` : `**Étape 2 :** le trajet (${d} min) se termine avant minuit.\n`) + `L'arrivée est à **${correct}**.`,
          _v: { k: '6M4.night', s, d }
        }, 'Raisonner');
        const alt = (m) => Hr(m) + (m >= 1440 ? ' le lendemain' : '');
        return this._6mcq(q, correct, [alt(s + d + 40), alt(s + d - 40), alt(s + d + 60), `${Math.floor((s + d) / 60)} h ${String((s + d) % 60).padStart(2, '0')}`]);
      }
      if (st === 'dech') {
        const h = this.randInt(0, 4), qt = this.randChoice([1, 2, 3, 1, 2, 3]);
        const tenth = Math.random() < 0.4 ? this.randChoice([1, 2, 3, 4, 6, 7, 8, 9]) : null;
        const frac = tenth !== null ? tenth / 10 : qt / 4;
        const val = this._6r(h + frac);
        const res = this._6r(val * 60);
        return mk({
          title: 'Heures décimales et minutes',
          statement: `Une course dure $${T(val)}\\text{ h}$.\n**Combien de minutes cela fait-il ?** *(Attention : $${T(val)}\\text{ h}$ ne signifie pas « ${h} h ${Math.round(frac * 100)} min » !)*`,
          type: 'exact', answer: A(res), placeholder: 'Ex : 90',
          hint1: '1 h = 60 min : on multiplie le nombre d\'heures par 60.',
          hint2: '1 h = 60 min, donc une durée en heures décimales se convertit en minutes en la multipliant par 60.',
          solution: `$1\\text{ h} = 60\\text{ min}$, donc on multiplie par 60 :\n$$${T(val)} \\times 60 = ${T(res)}\\text{ min}$$\nLa course dure **${T(res)} min**` + (h > 0 ? ` (soit ${h} h ${T(this._6r(frac * 60))} min).` : '.'),
          _v: { k: '6M4.dech', val }
        }, 'Convertir');
      }
      const h = this.randInt(0, 5), m = this.randChoice([6, 12, 15, 18, 24, 30, 36, 42, 45, 48, 54]);
      const res = this._6r(h + m / 60);
      return mk({
        title: 'Écrire une durée en heures décimales',
        statement: `Écrire la durée **${h === 0 ? '' : `${h} h `}${m} min** en heures, sous forme d'un nombre décimal.`,
        type: 'exact', answer: A(res), placeholder: 'Ex : 1,5',
        hint1: 'Convertis d\'abord les minutes en fraction d\'heure, puis écris cette fraction sous forme décimale.',
        hint2: '1 h = 60 min, donc 1 min = $\\frac{1}{60}$ h : un nombre de minutes se convertit en heures en le divisant par 60.',
        solution: `$${m}\\text{ min} = ${m} \\div 60\\text{ h} = ${T(this._6r(m / 60))}\\text{ h}$, donc la durée vaut $${T(res)}\\text{ h}$.`,
        _v: { k: '6M4.todec', h, m }
      }, 'Convertir');
    }
  });
})();

// =====================================================================
// 6G1 à 6G5 (espace et géométrie)
// =====================================================================
/* ===== 6ème — Espace et géométrie : générateurs 6G1 à 6G5 ===== */
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  Object.assign(window.MathsGenerators, {
    // ---------------------------------------------------------------
    // Helpers géométrie 6e (préfixe _6E)
    // ---------------------------------------------------------------
    _6E_pts(n) {
      return this.shuffle('ABCDEFGHKLMNPRSTUVZ'.split('')).slice(0, n);
    },

    _6E_q(ch, t, o) {
      const q = Object.assign({ chapterId: ch, tier: t, skill: 'Raisonner' }, o);
      if (t === 4 && !/^Défi 5ème/.test(q.title)) q.title = 'Défi 5ème : ' + q.title;
      if (q.type === 'exact' && !q.placeholder) q.placeholder = 'Ex : 12';
      return q;
    },

    _6E_mcq(ch, t, o, correct, distractors) {
      const q = this._6E_q(ch, t, o);
      return this._6mcq(q, correct, distractors);
    },

    /** Figure d'angles : sommet O, demi-droites [{deg, label}], arcs [{from, to, text}] (degrés, sens trigonométrique). */
    _6E_rays(vertex, rays, arcs = [], lines = []) {
      const W = 300, H = 190, cx = 150, cy = 120, R = 105;
      const pt = (deg, r) => {
        const a = deg * Math.PI / 180;
        return [Math.round((cx + r * Math.cos(a)) * 10) / 10, Math.round((cy - r * Math.sin(a)) * 10) / 10];
      };
      let inner = '';
      for (const ln of lines) {
        const [x1, y1] = pt(ln, R);
        const [x2, y2] = pt(ln + 180, R);
        inner += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
      }
      for (const r of rays) {
        if (!r.noLine) {
          const [x, y] = pt(r.deg, R);
          inner += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
        }
        const [lx, ly] = pt(r.deg, R + 14);
        inner += this._6svgText(lx, ly + 4, r.label, { size: 13, weight: '800' });
      }
      arcs.forEach((ac, idx) => {
        const rr = 26 + idx * 9;
        const [x1, y1] = pt(ac.from, rr);
        const [x2, y2] = pt(ac.to, rr);
        const large = (ac.to - ac.from) > 180 ? 1 : 0;
        inner += `<path d="M ${x1} ${y1} A ${rr} ${rr} 0 ${large} 0 ${x2} ${y2}" fill="none" stroke="${ac.color || '#2563eb'}" stroke-width="2"/>`;
        const [tx, ty] = pt((ac.from + ac.to) / 2, rr + 24);
        inner += this._6svgText(tx, ty + 4, ac.text, { size: 12, fill: ac.color || '#2563eb', weight: '700' });
      });
      inner += `<circle cx="${cx}" cy="${cy}" r="3" fill="var(--text-main, #334155)"/>`;
      inner += this._6svgText(cx - 12, cy + 18, vertex, { size: 13, weight: '800' });
      return this._6svg(W, H, inner, 300);
    },

    /** Quadrillage avec axe (vertical ou horizontal) et un point. */
    _6E_grid({ vertical, axis, px, py, label }) {
      const c = 22, nx = 10, ny = 7, ox = 12, oy = 12;
      let inner = '';
      for (let i = 0; i <= nx; i++) inner += `<line x1="${ox + i * c}" y1="${oy}" x2="${ox + i * c}" y2="${oy + ny * c}" stroke="var(--border-color, #cbd5e1)" stroke-width="1"/>`;
      for (let j = 0; j <= ny; j++) inner += `<line x1="${ox}" y1="${oy + j * c}" x2="${ox + nx * c}" y2="${oy + j * c}" stroke="var(--border-color, #cbd5e1)" stroke-width="1"/>`;
      if (vertical) {
        inner += `<line x1="${ox + axis * c}" y1="${oy - 6}" x2="${ox + axis * c}" y2="${oy + ny * c + 6}" stroke="#2563eb" stroke-width="3"/>`;
        inner += this._6svgText(ox + axis * c + 14, oy + ny * c + 2, '(d)', { size: 12, fill: '#2563eb', weight: '800' });
      } else {
        inner += `<line x1="${ox - 6}" y1="${oy + axis * c}" x2="${ox + nx * c + 6}" y2="${oy + axis * c}" stroke="#2563eb" stroke-width="3"/>`;
        inner += this._6svgText(ox + nx * c - 10, oy + axis * c - 6, '(d)', { size: 12, fill: '#2563eb', weight: '800' });
      }
      inner += `<circle cx="${ox + px * c}" cy="${oy + py * c}" r="4" fill="#dc2626"/>`;
      inner += this._6svgText(ox + px * c + 9, oy + py * c - 7, label, { size: 13, fill: '#dc2626', weight: '800' });
      return this._6svg(nx * c + 2 * ox, ny * c + 2 * oy, inner, 260);
    },

    /** Assemblage de cubes en perspective (h[i][j] = hauteur de la colonne ; i vers la droite, j vers l'avant). */
    _6E_iso(h, showFace = false) {
      const nx = h.length, ny = h[0].length;
      let hmax = 1;
      h.forEach(r => r.forEach(v => { if (v > hmax) hmax = v; }));
      const s = 26, a = 22.5, b = 13;
      const ox = 22 + ny * a, oy = 22 + hmax * s;
      const W = Math.round(44 + (nx + ny) * a), H = Math.round(44 + hmax * s + (nx + ny) * b + (showFace ? 18 : 0));
      const P = (i, j, k) => `${Math.round((ox + (i - j) * a) * 10) / 10},${Math.round((oy + (i + j) * b - k * s) * 10) / 10}`;
      const cubes = [];
      for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) for (let k = 0; k < h[i][j]; k++) cubes.push([i, j, k]);
      cubes.sort((u, v) => (u[0] + u[1] + u[2]) - (v[0] + v[1] + v[2]));
      const st = 'stroke="#1e3a8a" stroke-width="1.2" stroke-linejoin="round"';
      let inner = '';
      for (const [i, j, k] of cubes) {
        inner += `<polygon points="${P(i, j, k + 1)} ${P(i + 1, j, k + 1)} ${P(i + 1, j + 1, k + 1)} ${P(i, j + 1, k + 1)}" fill="#bfdbfe" ${st}/>`;
        inner += `<polygon points="${P(i + 1, j, k)} ${P(i + 1, j + 1, k)} ${P(i + 1, j + 1, k + 1)} ${P(i + 1, j, k + 1)}" fill="#3b82f6" ${st}/>`;
        inner += `<polygon points="${P(i, j + 1, k)} ${P(i + 1, j + 1, k)} ${P(i + 1, j + 1, k + 1)} ${P(i, j + 1, k + 1)}" fill="#93c5fd" ${st}/>`;
      }
      if (showFace) {
        const x = Math.round(ox + (nx / 2 - ny) * a - 18);
        const y = Math.round(oy + (nx / 2 + ny) * b + 24);
        inner += this._6svgText(x, y, 'FACE', { size: 12, fill: '#dc2626', weight: '800' });
      }
      return this._6svg(W, H, inner, 240);
    },

    /** Assemblage « en escalier » : hauteurs décroissantes vers l'avant (aucune colonne cachée). */
    _6E_heap(nx, ny, hmax) {
      let h;
      do { h = this._6E_heapOnce(nx, ny, hmax); } while (h.flat().reduce((s, v) => s + v, 0) < nx * ny || h.flat().filter(v => v > 0).length < 3);
      return h;
    },

    _6E_heapOnce(nx, ny, hmax) {
      const h = [];
      for (let i = 0; i < nx; i++) {
        h.push([]);
        for (let j = 0; j < ny; j++) {
          let m = hmax;
          if (i > 0) m = Math.min(m, h[i - 1][j]);
          if (j > 0) m = Math.min(m, h[i][j - 1]);
          const lo = (i === 0 && j === 0) ? 1 : 0;
          h[i].push(m < lo ? m : this.randInt(lo, m));
        }
      }
      if (h[0][0] < 2 && hmax >= 2) h[0][0] = 2;
      return h;
    },

    // ---------------------------------------------------------------
    // 6G1 — Droites, segments, distances, milieu et cercle
    // ---------------------------------------------------------------
    generate6G1(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const ch = '6G1';
      const W = x => this._6tex(x), A = x => this._6ans(x);
      const len = (lo, hi) => (Math.random() < 0.6 ? this.randInt(lo, hi) : this.randInt(lo * 10, hi * 10) / 10);

      if (t === 1) {
        const sub = this.randChoice(['notation', 'rayon', 'diametre', 'milieu']);
        if (sub === 'notation') {
          const [P, Q] = this._6E_pts(2);
          const kinds = [
            { d: `le segment d'extrémités $${P}$ et $${Q}$`, c: `$[${P}${Q}]$` },
            { d: `la droite passant par les points $${P}$ et $${Q}$`, c: `$(${P}${Q})$` },
            { d: `la demi-droite d'origine $${P}$ passant par $${Q}$`, c: `$[${P}${Q})$` },
            { d: `la longueur du segment d'extrémités $${P}$ et $${Q}$`, c: `$${P}${Q}$` }
          ];
          const kind = this.randInt(0, 3);
          return this._6E_mcq(ch, t, {
            title: 'Notations : droite, segment, demi-droite',
            statement: `Quelle notation désigne **${kinds[kind].d}** ?`,
            hint1: 'Crochets pour un segment, parenthèses pour une droite, un crochet et une parenthèse pour une demi-droite.',
            hint2: "Une longueur s'écrit sans crochets ni parenthèses.",
            solution: `${kinds[kind].d.charAt(0).toUpperCase() + kinds[kind].d.slice(1)} se note ${kinds[kind].c}.`,
            skill: 'Représenter',
            _v: { k: '6G1.notation', kind, P, Q }
          }, kinds[kind].c, kinds.filter((_, i) => i !== kind).map(x => x.c));
        }
        if (sub === 'rayon') {
          const [O] = this._6E_pts(1);
          const d = this.randInt(3, 40);
          return this._6E_q(ch, t, {
            title: 'Rayon et diamètre d’un cercle',
            statement: `Un cercle de centre $${O}$ a un diamètre de $${W(d)}$ cm. **Quel est son rayon, en cm ?**`,
            type: 'exact', answer: A(d / 2),
            hint1: 'Le diamètre est le double du rayon.',
            hint2: 'Le rayon est la moitié du diamètre : un diamètre est formé de deux rayons mis bout à bout.',
            solution: `Le rayon est la moitié du diamètre : $r = ${W(d)} \\div 2 = ${W(d / 2)}$ cm.`,
            _v: { k: '6G1.half', x: d }
          });
        }
        if (sub === 'diametre') {
          const [O] = this._6E_pts(1);
          const r = len(2, 25);
          return this._6E_q(ch, t, {
            title: 'Diamètre d’un cercle',
            statement: `Un cercle de centre $${O}$ a un rayon de $${W(r)}$ cm. **Quel est son diamètre, en cm ?**`,
            type: 'exact', answer: A(2 * r),
            hint1: 'Trace un diamètre : il passe par le centre et il est formé de deux rayons mis bout à bout.',
            hint2: 'Rappel : le diamètre d\'un cercle est le double de son rayon.',
            solution: `$d = 2 \\times r = 2 \\times ${W(r)} = ${W(2 * r)}$ cm.`,
            _v: { k: '6G1.double', x: r }
          });
        }
        const [P, Q, I] = this._6E_pts(3);
        const L = len(4, 30);
        return this._6E_q(ch, t, {
          title: 'Milieu d’un segment',
          statement: `Le point $${I}$ est le milieu du segment $[${P}${Q}]$ et $${P}${Q} = ${W(L)}$ cm. **Calcule la longueur $${P}${I}$, en cm.**`,
          type: 'exact', answer: A(L / 2),
          hint1: 'Fais un schéma à main levée : place le milieu et code les deux segments égaux.',
          hint2: 'Le milieu d\'un segment est le point du segment situé à égale distance de ses extrémités : il le partage en deux moitiés.',
          solution: `$${I}$ est le milieu de $[${P}${Q}]$ donc $${P}${I} = ${I}${Q} = ${W(L)} \\div 2 = ${W(L / 2)}$ cm.`,
          _v: { k: '6G1.half', x: L }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['milieu_inv', 'somme', 'diff', 'position']);
        if (sub === 'milieu_inv') {
          const [E, F, M] = this._6E_pts(3);
          const a = len(2, 20);
          return this._6E_q(ch, t, {
            title: 'Retrouver la longueur d’un segment à partir de son milieu',
            statement: `$${M}$ est le milieu du segment $[${E}${F}]$ et $${E}${M} = ${W(a)}$ cm. **Quelle est la longueur $${E}${F}$, en cm ?**`,
            type: 'exact', answer: A(2 * a),
            hint1: `Fais un schéma : $[${E}${F}]$ est formé de deux segments, $[${E}${M}]$ et $[${M}${F}]$.`,
            hint2: 'Le milieu d\'un segment le partage en deux segments de même longueur.',
            solution: `$${M}$ est le milieu de $[${E}${F}]$, donc $${M}${F} = ${E}${M} = ${W(a)}$ cm.\n$${E}${F} = ${E}${M} + ${M}${F} = 2 \\times ${W(a)} = ${W(2 * a)}$ cm.`,
            _v: { k: '6G1.double', x: a }
          });
        }
        if (sub === 'somme') {
          const [P, Q, R] = this._6E_pts(3);
          const a = len(2, 15), b = len(2, 15);
          return this._6E_q(ch, t, {
            title: 'Points alignés : somme de longueurs',
            statement: `Les points $${P}$, $${Q}$ et $${R}$ sont alignés dans cet ordre (le point $${Q}$ appartient au segment $[${P}${R}]$). On sait que $${P}${Q} = ${W(a)}$ cm et $${Q}${R} = ${W(b)}$ cm. **Calcule $${P}${R}$, en cm.**`,
            type: 'exact', answer: A(a + b),
            hint1: `Comme $${Q}$ est sur $[${P}${R}]$ : $${P}${R} = ${P}${Q} + ${Q}${R}$.`,
            hint2: 'Si un point appartient à un segment, il le partage en deux segments dont les longueurs s\'additionnent.',
            solution: `$${Q} \\in [${P}${R}]$ donc $${P}${R} = ${P}${Q} + ${Q}${R} = ${W(a)} + ${W(b)} = ${W(this._6r(a + b))}$ cm.`,
            _v: { k: '6G1.sum', a, b }
          });
        }
        if (sub === 'diff') {
          const [P, Q, R] = this._6E_pts(3);
          const a = len(2, 12), c = this._6r(a + len(2, 12));
          return this._6E_q(ch, t, {
            title: 'Points alignés : différence de longueurs',
            statement: `Le point $${Q}$ appartient au segment $[${P}${R}]$. On sait que $${P}${R} = ${W(c)}$ cm et $${P}${Q} = ${W(a)}$ cm. **Calcule $${Q}${R}$, en cm.**`,
            type: 'exact', answer: A(c - a),
            hint1: `$${P}${R} = ${P}${Q} + ${Q}${R}$, donc $${Q}${R} = ${P}${R} - ${P}${Q}$.`,
            hint2: 'Si un point appartient à un segment, il le partage en deux segments dont les longueurs s\'additionnent : on retrouve un morceau par soustraction.',
            solution: `$${Q}${R} = ${P}${R} - ${P}${Q} = ${W(c)} - ${W(a)} = ${W(this._6r(c - a))}$ cm.`,
            _v: { k: '6G1.diff', a: c, b: a }
          });
        }
        const [O, M] = this._6E_pts(2);
        const r = this.randInt(3, 9);
        const d = this._6r(r + this.randChoice([-2, -1, -0.5, 0, 0, 0.5, 1, 2, 3]));
        const opts = ['sur le cercle', "à l'intérieur du disque, mais pas sur le cercle", "à l'extérieur du disque"];
        const correct = d < r ? opts[1] : (d === r ? opts[0] : opts[2]);
        return this._6E_mcq(ch, t, {
          title: 'Position d’un point par rapport à un cercle',
          statement: `On considère le cercle de centre $${O}$ et de rayon $${W(r)}$ cm. Le point $${M}$ vérifie $${O}${M} = ${W(d)}$ cm. **Où se trouve le point $${M}$ ?**`,
          hint1: 'Compare la distance au centre avec le rayon.',
          hint2: 'Sur le cercle : distance égale au rayon. Dans le disque : distance plus petite.',
          solution: `On compare $${O}${M} = ${W(d)}$ cm au rayon $${W(r)}$ cm : le point $${M}$ est donc **${correct}**.`,
          _v: { k: '6G1.position', r, d }
        }, correct, opts.filter(o => o !== correct));
      }

      if (t === 3) {
        const sub = this.randChoice(['vocab', 'triangle_cercles', 'quart']);
        if (sub === 'vocab') {
          const [O, P, Q] = this._6E_pts(3);
          const kind = this.randInt(0, 2);
          const descs = [
            `Les points $${P}$ et $${Q}$ sont sur le cercle de centre $${O}$ et le segment $[${P}${Q}]$ passe par $${O}$.`,
            `Le point $${P}$ est sur le cercle de centre $${O}$. On s'intéresse au segment $[${O}${P}]$.`,
            `Les points $${P}$ et $${Q}$ sont sur le cercle de centre $${O}$ et le segment $[${P}${Q}]$ ne passe pas par $${O}$.`
          ];
          const names = ['un diamètre', 'un rayon', 'une corde (qui n’est pas un diamètre)'];
          const correct = names[kind];
          return this._6E_mcq(ch, t, {
            title: 'Vocabulaire du cercle',
            statement: `${descs[kind]} **Comment appelle-t-on ce segment ?**`,
            hint1: 'Un rayon relie le centre à un point du cercle ; une corde relie deux points du cercle.',
            hint2: 'Un diamètre est une corde qui passe par le centre.',
            solution: `Ce segment est **${correct}** du cercle.`,
            skill: 'Communiquer',
            _v: { k: '6G1.vocab', kind }
          }, correct, names.filter(n => n !== correct).concat(['un arc de cercle']));
        }
        if (sub === 'triangle_cercles') {
          const [P, Q, M] = this._6E_pts(3);
          let r1, r2, d;
          do { r1 = this.randInt(3, 9); r2 = this.randInt(3, 9); d = this.randInt(3, 12); } while (!(d < r1 + r2 && d > Math.abs(r1 - r2)));
          return this._6E_q(ch, t, {
            title: 'Points à une distance donnée et périmètre',
            statement: `On a $${P}${Q} = ${d}$ cm. Le point $${M}$ est sur le cercle de centre $${P}$ et de rayon $${r1}$ cm, et aussi sur le cercle de centre $${Q}$ et de rayon $${r2}$ cm. **Calcule le périmètre du triangle $${P}${Q}${M}$, en cm.**`,
            type: 'exact', answer: A(d + r1 + r2),
            hint1: `$${M}$ est sur le cercle de centre $${P}$ : donc $${P}${M}$ est égal au rayon de ce cercle.`,
            hint2: `$${P}${M} = ${r1}$ cm et $${Q}${M} = ${r2}$ cm.`,
            solution: `$${P}${M} = ${r1}$ cm et $${Q}${M} = ${r2}$ cm (rayons des cercles).\nPérimètre : $${d} + ${r1} + ${r2} = ${d + r1 + r2}$ cm.`,
            _v: { k: '6G1.sum3', a: d, b: r1, c: r2 }
          });
        }
        const [P, Q, R, I] = this._6E_pts(4);
        const c = 4 * this.randInt(2, 15);
        const ask = this.randInt(0, 1);
        const target = ask === 0 ? `${I}${Q}` : `${I}${R}`;
        const val = ask === 0 ? c / 4 : 3 * c / 4;
        return this._6E_q(ch, t, {
          title: 'Milieux successifs',
          statement: `On a $${P}${R} = ${c}$ cm. Le point $${Q}$ est le milieu de $[${P}${R}]$ et le point $${I}$ est le milieu de $[${P}${Q}]$. **Calcule $${target}$, en cm.**`,
          type: 'exact', answer: A(val),
          hint1: `Fais un schéma, puis calcule les longueurs dans l'ordre : d'abord $${P}${Q}$, ensuite $${P}${I}$.`,
          hint2: 'Le milieu d\'un segment le partage en deux segments de même longueur, égale à la moitié du segment.',
          solution: `$${P}${Q} = ${Q}${R} = ${c / 2}$ cm et $${P}${I} = ${I}${Q} = ${c / 4}$ cm.\n` +
            (ask === 0 ? `Donc $${I}${Q} = ${c / 4}$ cm.` : `Donc $${I}${R} = ${I}${Q} + ${Q}${R} = ${c / 4} + ${c / 2} = ${3 * c / 4}$ cm.`),
          _v: { k: '6G1.quart', c, ask }
        });
      }

      // Palier 4
      const sub = this.randChoice(['milieux', 'tangents', 'intersections']);
      if (sub === 'milieux') {
        const L = 8 * this.randInt(2, 12);
        const [Pa, Pb, Pm, Pn, Pp] = this._6E_pts(5);
        const pos = { [Pa]: 0, [Pp]: 3 * L / 8, [Pm]: L / 2, [Pn]: 3 * L / 4, [Pb]: L };
        const pair = this.shuffle([Pa, Pb, Pm, Pn, Pp]).slice(0, 2).sort((u, v) => pos[u] - pos[v]);
        const val = Math.abs(pos[pair[1]] - pos[pair[0]]);
        return this._6E_q(ch, t, {
          title: 'Chaîne de milieux',
          statement: `Le segment $[${Pa}${Pb}]$ mesure $${L}$ cm. $${Pm}$ est le milieu de $[${Pa}${Pb}]$, $${Pn}$ est le milieu de $[${Pm}${Pb}]$ et $${Pp}$ est le milieu de $[${Pa}${Pn}]$. **Calcule $${pair[0]}${pair[1]}$, en cm.**`,
          type: 'exact', answer: A(val),
          hint1: `Repère chaque point par sa distance à $${Pa}$, en suivant l'ordre de l'énoncé : $${Pm}$, puis $${Pn}$, puis $${Pp}$.`,
          hint2: 'Le milieu d\'un segment le partage en deux segments de même longueur, égale à la moitié du segment.',
          solution: `Distances à $${Pa}$ : $${Pa}${Pp} = ${3 * L / 8}$ ; $${Pa}${Pm} = ${L / 2}$ ; $${Pa}${Pn} = ${3 * L / 4}$ ; $${Pa}${Pb} = ${L}$ (en cm).\nDonc $${pair[0]}${pair[1]} = ${pos[pair[1]]} - ${pos[pair[0]]} = ${val}$ cm.`,
          _v: { k: '6G1.chaine', L, roles: [pair[0] === Pa ? 'A' : pair[0] === Pp ? 'P' : pair[0] === Pm ? 'M' : pair[0] === Pn ? 'N' : 'B', pair[1] === Pa ? 'A' : pair[1] === Pp ? 'P' : pair[1] === Pm ? 'M' : pair[1] === Pn ? 'N' : 'B'] }
        });
      }
      if (sub === 'tangents') {
        const [P, Q, T] = this._6E_pts(3);
        const r1 = len(2, 12), r2 = len(2, 12);
        const mode = this.randInt(0, 1);
        const d = this._6r(r1 + r2);
        if (mode === 0) {
          return this._6E_q(ch, t, {
            title: 'Deux cercles qui se touchent',
            statement: `Deux cercles, de centres $${P}$ et $${Q}$ et de rayons $${W(r1)}$ cm et $${W(r2)}$ cm, se touchent en un seul point $${T}$ qui appartient au segment $[${P}${Q}]$. **Calcule $${P}${Q}$, en cm.**`,
            type: 'exact', answer: A(d),
            hint1: `$${T}$ est sur les deux cercles : $${P}${T}$ et $${Q}${T}$ sont des rayons.`,
            hint2: `$${P}${Q} = ${P}${T} + ${T}${Q}$.`,
            solution: `$${P}${T} = ${W(r1)}$ cm et $${T}${Q} = ${W(r2)}$ cm, et $${T} \\in [${P}${Q}]$, donc $${P}${Q} = ${W(r1)} + ${W(r2)} = ${W(d)}$ cm.`,
            _v: { k: '6G1.sum', a: r1, b: r2 }
          });
        }
        return this._6E_q(ch, t, {
          title: 'Deux cercles qui se touchent : rayon inconnu',
          statement: `Deux cercles de centres $${P}$ et $${Q}$ se touchent en un seul point $${T}$ du segment $[${P}${Q}]$. On sait que $${P}${Q} = ${W(d)}$ cm et que le cercle de centre $${P}$ a pour rayon $${W(r1)}$ cm. **Quel est le rayon du cercle de centre $${Q}$, en cm ?**`,
          type: 'exact', answer: A(r2),
          hint1: `$${P}${Q} = ${P}${T} + ${T}${Q}$ avec $${P}${T} = ${W(r1)}$ cm.`,
          hint2: `Les points d'un cercle sont tous à la même distance du centre (le rayon) : $${P}${T}$ et $${T}${Q}$ sont des rayons.`,
          solution: `$${T}${Q} = ${P}${Q} - ${P}${T} = ${W(d)} - ${W(r1)} = ${W(r2)}$ cm : c'est le rayon cherché.`,
          _v: { k: '6G1.diff', a: d, b: r1 }
        });
      }
      const [P, Q] = this._6E_pts(2);
      const kind = this.randChoice(['two', 'two', 'one', 'zero_far', 'zero_in']);
      let r1, r2, d;
      do {
        r1 = this.randInt(2, 9); r2 = this.randInt(2, 9);
        if (kind === 'one') d = r1 + r2;
        else if (kind === 'two') d = this.randInt(Math.abs(r1 - r2) + 1, r1 + r2 - 1);
        else if (kind === 'zero_far') d = r1 + r2 + this.randInt(1, 4);
        else d = Math.abs(r1 - r2) - 1;
      } while (d <= 0);
      const opts = ['aucun point', 'un seul point', 'deux points', 'une infinité de points'];
      const n = (d < r1 + r2 && d > Math.abs(r1 - r2)) ? 2 : (d === r1 + r2 || d === Math.abs(r1 - r2)) ? 1 : 0;
      const correct = opts[n];
      return this._6E_mcq(ch, t, {
        title: 'Points à distances données de deux points',
        statement: `On a $${P}${Q} = ${d}$ cm. **Combien existe-t-il de points situés à la fois à $${r1}$ cm de $${P}$ et à $${r2}$ cm de $${Q}$ ?**`,
        hint1: `Ces points sont sur le cercle de centre $${P}$ de rayon $${r1}$ cm et sur le cercle de centre $${Q}$ de rayon $${r2}$ cm.`,
        hint2: `Compare $${P}${Q}$ avec la somme $${r1} + ${r2}$ et avec la différence des rayons.`,
        solution: `On cherche les points communs aux deux cercles. Ici $${P}${Q} = ${d}$, $${r1} + ${r2} = ${r1 + r2}$ et l'écart des rayons vaut $${Math.abs(r1 - r2)}$.\n` +
          (n === 2 ? 'La distance est strictement comprise entre les deux : les cercles se coupent en **deux points**.' :
            n === 1 ? 'La distance est égale à la somme (ou à l’écart) des rayons : les cercles se touchent en **un seul point**.' :
              'Les cercles ne se rencontrent pas : il n’y a **aucun point**.'),
        _v: { k: '6G1.inter', r1, r2, d }
      }, correct, opts.filter(o => o !== correct));
    },

    // ---------------------------------------------------------------
    // 6G2 — Médiatrice et symétrie axiale
    // ---------------------------------------------------------------
    generate6G2(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const ch = '6G2';
      const W = x => this._6tex(x), A = x => this._6ans(x);
      const len = (lo, hi) => (Math.random() < 0.6 ? this.randInt(lo, hi) : this.randInt(lo * 10, hi * 10) / 10);

      if (t === 1) {
        const sub = this.randChoice(['def', 'dist', 'conserv', 'axes']);
        if (sub === 'def') {
          const [P, Q] = this._6E_pts(2);
          const correct = `la droite perpendiculaire à $[${P}${Q}]$ en son milieu`;
          return this._6E_mcq(ch, t, {
            title: 'Définition de la médiatrice',
            statement: `**Qu'est-ce que la médiatrice du segment $[${P}${Q}]$ ?**`,
            hint1: 'La médiatrice est une droite liée à deux conditions : un angle droit et un point particulier du segment.',
            hint2: 'Elle coupe le segment en son milieu.',
            solution: `La médiatrice de $[${P}${Q}]$ est ${correct}.`,
            skill: 'Communiquer',
            _v: { k: '6G2.def', P, Q }
          }, correct, [
            `la droite perpendiculaire à $[${P}${Q}]$ passant par $${P}$`,
            `la droite parallèle à $[${P}${Q}]$ passant par son milieu`,
            `la droite $(${P}${Q})$`
          ]);
        }
        if (sub === 'dist') {
          const [P, Q, M] = this._6E_pts(3);
          const x = len(2, 15);
          return this._6E_q(ch, t, {
            title: 'Propriété de la médiatrice',
            statement: `Le point $${M}$ appartient à la médiatrice du segment $[${P}${Q}]$ et $${M}${P} = ${W(x)}$ cm. **Quelle est la longueur $${M}${Q}$, en cm ?**`,
            type: 'exact', answer: A(x),
            hint1: `Repère sur quelle droite se trouve le point $${M}$ et ce que cela impose à ses distances aux points $${P}$ et $${Q}$.`,
            hint2: 'Propriété : tout point de la médiatrice d’un segment est équidistant (à la même distance) des deux extrémités de ce segment.',
            solution: `**Étape 1 :** $${M}$ appartient à la médiatrice du segment $[${P}${Q}]$.\n**Étape 2 :** or tout point de la médiatrice d'un segment est équidistant de ses extrémités, donc $${M}${Q} = ${M}${P}$.\n**Conclusion :** $${M}${Q} = ${W(x)}$ cm.`,
            _v: { k: '6G2.same', x }
          });
        }
        if (sub === 'conserv') {
          const [P, Q, R] = this._6E_pts(3);
          const kind = this.randInt(0, 2);
          const x = kind === 1 ? this.randInt(15, 165) : len(2, 30);
          const txt = [
            { s: `le segment $[${P}${Q}]$ mesure $${W(x)}$ cm. **Combien mesure son symétrique $[${P}'${Q}']$, en cm ?**`, w: 'Les longueurs' },
            { s: `l'angle $\\widehat{${P}${Q}${R}}$ mesure $${x}^\\circ$. **Combien mesure son symétrique $\\widehat{${P}'${Q}'${R}'}$, en degrés ?**`, w: 'Les angles' },
            { s: `la figure $\\mathcal{F}$ a une aire de $${W(x)}$ cm². **Quelle est l'aire de sa symétrique $\\mathcal{F}'$, en cm² ?**`, w: 'Les aires' }
          ][kind];
          return this._6E_q(ch, t, {
            title: 'La symétrie axiale conserve les mesures',
            statement: `Par une symétrie axiale d'axe $(d)$, ${txt.s}`,
            type: 'exact', answer: A(x),
            hint1: 'Imagine le pliage le long de l’axe : la figure et son symétrique se superposent-ils exactement ?',
            hint2: 'Propriété : la symétrie axiale conserve les longueurs, les mesures d’angles et les aires.',
            solution: `**Étape 1 :** la figure et sa symétrique se superposent par pliage le long de $(d)$.\n**Étape 2 :** ${txt.w.toLowerCase()} sont donc ${kind === 1 ? 'conservés' : 'conservées'} par la symétrie axiale.\n**Conclusion :** la mesure cherchée est $${W(x)}$ ${kind === 1 ? 'degrés' : kind === 0 ? 'cm' : 'cm²'}.`,
            _v: { k: '6G2.same', x }
          });
        }
        const figs = [
          ['un carré', '4'], ['un rectangle qui n’est pas un carré', '2'], ['un losange qui n’est pas un carré', '2'],
          ['un triangle équilatéral', '3'], ['un triangle isocèle qui n’est pas équilatéral', '1'], ['un cercle', 'une infinité'],
          ['un segment', '2'], ['un parallélogramme quelconque', 'aucun'], ['un hexagone régulier', '6'], ['un triangle quelconque', 'aucun']
        ];
        const idx = this.randInt(0, figs.length - 1);
        const correct = figs[idx][1];
        // Distracteurs typiques : diagonales du rectangle/losange/parallélogramme comptées comme axes, axes oubliés…
        const typical = { 0: ['2', '8'], 1: ['4', 'aucun'], 2: ['4', 'aucun'], 3: ['1', '6'], 4: ['3', 'aucun'], 5: ['2', '4'], 6: ['1', 'une infinité'], 7: ['2', '4'], 8: ['3', '12'], 9: ['1', '3'] }[idx];
        const pool = typical.concat(this.shuffle(['aucun', '1', '2', '3', '4', '6', 'une infinité'])).filter(o => o !== correct);
        const pts = this._6E_pts(6);
        const nm = {
          0: `le carré $${pts.slice(0, 4).join('')}$`, 1: `le rectangle $${pts.slice(0, 4).join('')}$ (qui n’est pas un carré)`,
          2: `le losange $${pts.slice(0, 4).join('')}$ (qui n’est pas un carré)`, 3: `le triangle équilatéral $${pts.slice(0, 3).join('')}$`,
          4: `le triangle $${pts.slice(0, 3).join('')}$, isocèle en $${pts[0]}$ mais pas équilatéral`, 5: `un cercle de centre $${pts[0]}$`,
          6: `le segment $[${pts[0]}${pts[1]}]$`, 7: `le parallélogramme $${pts.slice(0, 4).join('')}$ (ni rectangle, ni losange)`,
          8: `l’hexagone régulier $${pts.join('')}$`, 9: `le triangle $${pts.slice(0, 3).join('')}$, dont les trois côtés ont des longueurs différentes`
        }[idx];
        const stmt = this.randChoice([
          `**Combien d'axes de symétrie possède ${figs[idx][0]} ?**`,
          `On considère ${nm}. **Combien possède-t-il d'axes de symétrie ?**`,
          `${this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam'])} a tracé ${nm} sur une feuille de papier calque. **Selon combien de droites différentes peut-on plier la figure pour que les deux parties se superposent exactement ?**`,
          `**Combien de droites sont des axes de symétrie ${nm.startsWith("le ") ? "du " + nm.slice(3) : nm.startsWith("un ") ? "d’" + nm : "de " + nm} ?**`
        ]);
        return this._6E_mcq(ch, t, {
          title: 'Axes de symétrie des figures usuelles',
          statement: stmt,
          hint1: 'Dessine la figure à main levée et cherche toutes les droites de pliage possibles, sans en oublier ni en compter deux fois.',
          hint2: 'Un axe de symétrie est une droite de pliage pour laquelle les deux parties se superposent exactement. Pour un polygone, on teste les diagonales et les médiatrices des côtés ; pour un cercle, les droites passant par son centre.',
          solution: `On cherche les droites de pliage qui superposent exactement les deux moitiés de la figure.\n**Conclusion :** ${figs[idx][0]} possède **${correct === 'aucun' ? 'aucun axe' : correct === 'une infinité' ? "une infinité d'axes" : correct === '1' ? 'un seul axe' : correct + ' axes'}** de symétrie${correct === 'une infinité' ? ' (toutes les droites passant par son centre)' : ''}.`,
          skill: 'Chercher',
          _v: { k: '6G2.axes', idx }
        }, correct, this.shuffle(pool));
      }

      if (t === 2) {
        const sub = this.randChoice(['grid', 'prop', 'perim']);
        if (sub === 'grid') {
          const vertical = Math.random() < 0.5;
          const [L] = this._6E_pts(1);
          let axis, px, py, n;
          if (vertical) {
            axis = this.randInt(3, 7); n = this.randInt(1, Math.min(axis, 10 - axis));
            px = axis + this.randChoice([-1, 1]) * n; py = this.randInt(1, 6);
            if (px < 0 || px > 10) px = axis + n;
          } else {
            axis = this.randInt(2, 5); n = this.randInt(1, Math.min(axis, 7 - axis));
            py = axis + this.randChoice([-1, 1]) * n; px = this.randInt(1, 9);
          }
          const fig = this._6E_grid({ vertical, axis, px, py, label: L });
          return this._6E_q(ch, t, {
            title: 'Symétrique d’un point sur quadrillage',
            statement: `Sur ce quadrillage, on construit le point $${L}'$, symétrique du point $${L}$ par rapport à la droite $(d)$.\n${fig}\n**Combien de carreaux sépare-t-il $${L}$ de $${L}'$ ?**`,
            type: 'exact', answer: A(2 * n),
            hint1: `Compte le nombre de carreaux entre $${L}$ et l'axe $(d)$, perpendiculairement à l'axe.`,
            hint2: `$${L}'$ est de l'autre côté de $(d)$, à la même distance : l'axe est la médiatrice de $[${L}${L}']$.`,
            solution: `$${L}$ est à $${n}$ carreau${n > 1 ? 'x' : ''} de $(d)$, donc $${L}'$ aussi, de l'autre côté. Ils sont séparés de $2 \\times ${n} = ${2 * n}$ carreaux.`,
            skill: 'Représenter',
            _v: { k: '6G2.grid', vertical, axis, px, py }
          });
        }
        if (sub === 'prop') {
          const [P, Q, M] = this._6E_pts(3);
          const x = this.randInt(3, 12);
          const y = this.randInt(2, 2 * x - 1);
          const correct = `Il appartient à la médiatrice de $[${P}${Q}]$.`;
          return this._6E_mcq(ch, t, {
            title: 'Point équidistant de deux points',
            statement: `On sait que $${P}${Q} = ${y}$ cm et que $${M}${P} = ${M}${Q} = ${x}$ cm. **Que peut-on affirmer sur le point $${M}$ ?**`,
            hint1: `Le point $${M}$ est à la même distance de $${P}$ et de $${Q}$.`,
            hint2: 'Propriété caractéristique : les points équidistants des extrémités d’un segment sont sur sa médiatrice.',
            solution: `$${M}${P} = ${M}${Q}$ : $${M}$ est équidistant de $${P}$ et $${Q}$, donc il appartient à la médiatrice de $[${P}${Q}]$. (Ce n'est pas le milieu, car $${x} \\neq ${W(y / 2)}$.)`,
            _v: { k: '6G2.prop', P, Q }
          }, correct, [`Il est le milieu de $[${P}${Q}]$.`, `Il appartient à la droite $(${P}${Q})$.`, `Il est sur le cercle de centre $${P}$ passant par $${Q}$.`]);
        }
        const [P, Q, R] = this._6E_pts(3);
        let a, b, c;
        do { a = len(2, 12); b = len(2, 12); c = len(2, 12); } while (!(a < b + c && b < a + c && c < a + b));
        return this._6E_q(ch, t, {
          title: 'Périmètre du symétrique d’un triangle',
          statement: `Le triangle $${P}${Q}${R}$ a pour côtés $${P}${Q} = ${W(a)}$ cm, $${Q}${R} = ${W(b)}$ cm et $${P}${R} = ${W(c)}$ cm. On construit son symétrique $${P}'${Q}'${R}'$ par rapport à une droite $(d)$. **Quel est le périmètre du triangle $${P}'${Q}'${R}'$, en cm ?**`,
          type: 'exact', answer: A(a + b + c),
          hint1: 'La symétrie axiale conserve les longueurs.',
          hint2: 'Le symétrique a donc le même périmètre que le triangle de départ.',
          solution: `Les longueurs sont conservées : périmètre $= ${W(a)} + ${W(b)} + ${W(c)} = ${W(this._6r(a + b + c))}$ cm.`,
          _v: { k: '6G2.sum', list: [a, b, c] }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['triangle', 'rect', 'axe']);
        if (sub === 'triangle') {
          const [P, Q, M] = this._6E_pts(3);
          const x = len(3, 12);
          const y = this.randInt(2, Math.max(2, Math.floor(2 * x) - 1));
          return this._6E_q(ch, t, {
            title: 'Médiatrice et périmètre',
            statement: `Le point $${M}$ est sur la médiatrice de $[${P}${Q}]$, avec $${M}${P} = ${W(x)}$ cm et $${P}${Q} = ${y}$ cm. **Calcule le périmètre du triangle $${M}${P}${Q}$, en cm.**`,
            type: 'exact', answer: A(2 * x + y),
            hint1: `$${M}$ est sur la médiatrice de $[${P}${Q}]$ : $${M}${Q} = ${M}${P}$.`,
            hint2: `Périmètre $= ${M}${P} + ${M}${Q} + ${P}${Q}$.`,
            solution: `$${M}${Q} = ${M}${P} = ${W(x)}$ cm.\nPérimètre $= ${W(x)} + ${W(x)} + ${y} = ${W(this._6r(2 * x + y))}$ cm.`,
            _v: { k: '6G2.sum', list: [x, x, y] }
          });
        }
        if (sub === 'rect') {
          const L = this.randInt(3, 15), l = this.randInt(2, L);
          const ask = this.randInt(0, 1);
          return this._6E_q(ch, t, {
            title: 'Symétrique d’un rectangle',
            statement: `Un rectangle de longueur $${L}$ cm et de largeur $${l}$ cm a pour symétrique, par rapport à une droite $(d)$, le rectangle $\\mathcal{R}'$. **Quel est ${ask === 0 ? "l'aire de $\\mathcal{R}'$, en cm²" : "le périmètre de $\\mathcal{R}'$, en cm"} ?**`,
            type: 'exact', answer: A(ask === 0 ? L * l : 2 * (L + l)),
            hint1: 'La symétrie axiale conserve les longueurs et les aires.',
            hint2: ask === 0 ? `Aire d'un rectangle : $L \\times \\ell$.` : `Périmètre d'un rectangle : $2 \\times (L + \\ell)$.`,
            solution: ask === 0 ? `Même aire que le rectangle de départ : $${L} \\times ${l} = ${L * l}$ cm².` : `Même périmètre que le rectangle de départ : $2 \\times (${L} + ${l}) = ${2 * (L + l)}$ cm.`,
            _v: { k: '6G2.rect', L, l, ask }
          });
        }
        const [P, U, V] = this._6E_pts(3);
        const kind = this.randInt(0, 1);
        const ax = this.randChoice(['(d)', '(\\Delta)', `(${U}${V})`]);
        const axTxt = `la droite $${ax}$`;
        if (kind === 0) {
          const correct = `le point $${P}$ lui-même`;
          const stmt = this.randChoice([
            `Le point $${P}$ appartient à l'axe de symétrie $${ax}$. **Quel est le symétrique de $${P}$ par rapport à $${ax}$ ?**`,
            `On construit le symétrique de la figure par rapport à ${axTxt}. Le point $${P}$ est situé sur $${ax}$. **Quel est son symétrique ?**`,
            `Le point $${P}$ est sur ${axTxt}. ${this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam'])} plie la feuille le long de $${ax}$. **Avec quel point le point $${P}$ se superpose-t-il ?**`,
            `Une figure est symétrique par rapport à ${axTxt}. Le point $${P}$ de cette figure est situé sur $${ax}$. **Quel est le symétrique de $${P}$ par rapport à $${ax}$ ?**`
          ]);
          return this._6E_mcq(ch, t, {
            title: 'Point situé sur l’axe',
            statement: stmt,
            hint1: 'Quand on plie le long de l’axe, que devient un point situé sur la ligne de pliage ?',
            hint2: 'Un point de l’axe ne bouge pas.',
            solution: `Un point de l'axe est son propre symétrique : c'est **${correct}**.`,
            _v: { k: '6G2.axe', kind, P }
          }, correct, ['il n’a pas de symétrique', `un point de $${ax}$ différent de $${P}$`, `un point situé à $1$ cm de $${P}$`]);
        }
        const correct = `la médiatrice du segment $[${P}${P}']$`;
        const stmt = this.randChoice([
          `Le point $${P}'$ est le symétrique du point $${P}$ par rapport à ${axTxt}, et $${P}$ n'est pas sur $${ax}$. **Que représente la droite $${ax}$ pour le segment $[${P}${P}']$ ?**`,
          `On a construit le point $${P}'$, symétrique de $${P}$ par rapport à $${ax}$ (le point $${P}$ n'étant pas sur $${ax}$), puis on a tracé le segment $[${P}${P}']$. **Que peut-on dire de $${ax}$ pour ce segment ?**`,
          `En pliant la feuille le long de $${ax}$, le point $${P}$ vient se superposer au point $${P}'$, distinct de $${P}$. **Que représente $${ax}$ pour le segment $[${P}${P}']$ ?**`
        ]);
        return this._6E_mcq(ch, t, {
          title: 'Axe de symétrie et médiatrice',
          statement: stmt,
          hint1: `$(d)$ coupe $[${P}${P}']$ perpendiculairement…`,
          hint2: '… et en son milieu.',
          solution: `Par définition du symétrique, $(d)$ est **${correct}**.`,
          _v: { k: '6G2.axe', kind, P }
        }, correct, [`une droite perpendiculaire à $[${P}${P}']$, sans passer forcément par son milieu`, `une droite passant par le milieu de $[${P}${P}']$, sans lui être forcément perpendiculaire`, `une droite parallèle à $(${P}${P}')$`, `la droite $(${P}${P}')$ elle-même`]);
      }

      // Palier 4
      const sub = this.randChoice(['two_med', 'kite', 'cerf']);
      if (sub === 'two_med') {
        const [P, Q, R, M] = this._6E_pts(4);
        const x = len(2, 15);
        const ask = this.randInt(0, 1);
        return this._6E_q(ch, t, {
          title: 'Point commun à deux médiatrices',
          statement: `Le point $${M}$ appartient à la fois à la médiatrice de $[${P}${Q}]$ et à la médiatrice de $[${Q}${R}]$. On sait que $${M}${P} = ${W(x)}$ cm. **Calcule ${ask === 0 ? `$${M}${R}$` : `$${M}${P} + ${M}${Q} + ${M}${R}$`}, en cm.**`,
          type: 'exact', answer: A(ask === 0 ? x : 3 * x),
          hint1: `$${M}$ sur la médiatrice de $[${P}${Q}]$ : $${M}${P} = ${M}${Q}$.`,
          hint2: `$${M}$ sur la médiatrice de $[${Q}${R}]$ : $${M}${Q} = ${M}${R}$.`,
          solution: `$${M}${P} = ${M}${Q} = ${M}${R} = ${W(x)}$ cm.` + (ask === 0 ? '' : `\nSomme : $3 \\times ${W(x)} = ${W(3 * x)}$ cm.`),
          _v: { k: '6G2.twomed', x, ask }
        });
      }
      if (sub === 'kite') {
        const [P, Q, C, D] = this._6E_pts(4);
        const correct = `la médiatrice de $[${P}${Q}]$`;
        return this._6E_mcq(ch, t, {
          title: 'Construire une médiatrice avec deux points',
          statement: `Les points distincts $${C}$ et $${D}$ vérifient $${C}${P} = ${C}${Q}$ et $${D}${P} = ${D}${Q}$. **Que représente la droite $(${C}${D})$ ?**`,
          hint1: `$${C}$ et $${D}$ sont chacun équidistants de $${P}$ et $${Q}$.`,
          hint2: 'Deux points distincts suffisent à définir une droite.',
          solution: `$${C}$ et $${D}$ appartiennent tous deux à la médiatrice de $[${P}${Q}]$ ; comme ils sont distincts, $(${C}${D})$ est **${correct}**. C'est la méthode de construction au compas.`,
          _v: { k: '6G2.kite', P, Q }
        }, correct, [`une droite parallèle à $(${P}${Q})$`, `la droite $(${P}${Q})$`, `la perpendiculaire à $(${P}${Q})$ passant par $${P}$`]);
      }
      const [P, Q, R, S] = this._6E_pts(4);
      const a = len(3, 12), b = len(3, 12);
      return this._6E_q(ch, t, {
        title: 'Quadrilatère obtenu par symétrie',
        statement: `Dans le triangle $${P}${Q}${R}$, on a $${P}${R} = ${W(a)}$ cm et $${Q}${R} = ${W(b)}$ cm. Le point $${S}$ est le symétrique de $${R}$ par rapport à la droite $(${P}${Q})$. **Calcule le périmètre du quadrilatère $${P}${R}${Q}${S}$, en cm.**`,
        type: 'exact', answer: A(2 * (a + b)),
        hint1: `La symétrie d'axe $(${P}${Q})$ laisse $${P}$ et $${Q}$ fixes et envoie $${R}$ sur $${S}$.`,
        hint2: `Donc $${P}${S} = ${P}${R}$ et $${Q}${S} = ${Q}${R}$.`,
        solution: `$${P}${S} = ${P}${R} = ${W(a)}$ cm et $${Q}${S} = ${Q}${R} = ${W(b)}$ cm.\nPérimètre $= 2 \\times (${W(a)} + ${W(b)}) = ${W(this._6r(2 * (a + b)))}$ cm.`,
        _v: { k: '6G2.sum', list: [a, a, b, b] }
      });
    },

    // ---------------------------------------------------------------
    // 6G3 — Angles
    // ---------------------------------------------------------------
    generate6G3(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const ch = '6G3';
      const A = x => this._6ans(x), W = x => this._6tex(x);
      const ang = (P, O, Q) => `\\widehat{${P}${O}${Q}}`;

      if (t === 1) {
        const sub = this.randChoice(['nature', 'nature', 'sommet', 'cotes']);
        if (sub === 'nature') {
          const cat = this.randInt(0, 3);
          const x = [this.randInt(5, 85), 90, this.randInt(95, 175), 180][cat];
          const opts = ['un angle aigu', 'un angle droit', 'un angle obtus', 'un angle plat'];
          const correct = opts[cat];
          const [P, O, Q] = this._6E_pts(3);
          return this._6E_mcq(ch, t, {
            title: 'Nature d’un angle',
            statement: `L'angle $${ang(P, O, Q)}$ mesure $${x}^\\circ$. **De quelle nature est cet angle ?**`,
            hint1: `Situe la mesure $${x}^\\circ$ par rapport aux deux mesures de référence de l'équerre et de la règle (90° et 180°).`,
            hint2: 'Angle aigu : mesure strictement comprise entre 0° et 90°. Angle droit : 90°. Angle obtus : strictement comprise entre 90° et 180°. Angle plat : 180°.',
            solution: `**Étape 1 :** on compare $${x}^\\circ$ à $90^\\circ$ (angle droit) et à $180^\\circ$ (angle plat).\n**Conclusion :** un angle de $${x}^\\circ$ est **${correct}**.`,
            skill: 'Communiquer',
            _v: { k: '6G3.nature', x }
          }, correct, opts.filter(o => o !== correct));
        }
        const [P, O, Q, Z] = this._6E_pts(4);
        if (sub === 'sommet') {
          return this._6E_mcq(ch, t, {
            title: 'Sommet d’un angle',
            statement: `**Quel est le sommet de l'angle $${ang(P, O, Q)}$ ?**`,
            hint1: 'Dans la notation à trois lettres, une seule lettre a une place particulière : cherche laquelle.',
            hint2: 'Un angle est formé de deux demi-droites de même origine, appelée sommet ; dans la notation avec un chapeau, le sommet est toujours écrit au milieu.',
            solution: `Le sommet est la lettre du milieu : **le point $${O}$**. Les côtés sont $[${O}${P})$ et $[${O}${Q})$.`,
            skill: 'Représenter',
            _v: { k: '6G3.sommet', O }
          }, `le point $${O}$`, [`le point $${P}$`, `le point $${Q}$`, `le point $${Z}$`]);
        }
        return this._6E_mcq(ch, t, {
          title: 'Côtés d’un angle',
          statement: `**Quels sont les côtés de l'angle $${ang(P, O, Q)}$ ?**`,
          hint1: 'Trouve d’abord le sommet de l’angle, puis écris les deux demi-droites qui partent de ce point.',
          hint2: 'Les côtés d’un angle sont deux demi-droites de même origine, le sommet. Une demi-droite se note en commençant par son origine, avec un crochet de ce côté.',
          solution: `Les côtés sont les demi-droites **$[${O}${P})$ et $[${O}${Q})$**.`,
          skill: 'Représenter',
          _v: { k: '6G3.cotes', P, O, Q }
        }, `$[${O}${P})$ et $[${O}${Q})$`, [`$[${P}${O})$ et $[${Q}${O})$`, `$[${O}${P}]$ et $[${P}${Q}]$`, `$(${O}${P})$ et $(${P}${Q})$`]);
      }

      if (t === 2) {
        const sub = this.randChoice(['supp', 'plat', 'adj', 'opp']);
        const [P, O, Q, R, S] = this._6E_pts(5);
        if (sub === 'supp') {
          const x = this.randInt(12, 168);
          return this._6E_q(ch, t, {
            title: 'Angles supplémentaires',
            statement: `Deux angles sont supplémentaires. L'un mesure $${x}^\\circ$. **Combien mesure l'autre, en degrés ?**`,
            type: 'exact', answer: A(180 - x),
            hint1: 'Cherche ce qu’il faut ajouter à la mesure donnée pour obtenir la somme de deux angles supplémentaires.',
            hint2: 'Deux angles sont supplémentaires lorsque la somme de leurs mesures est égale à 180°.',
            solution: `**Étape 1 :** les deux angles sont supplémentaires, donc la somme de leurs mesures vaut $180^\\circ$.\n**Étape 2 :** $180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$.\n**Conclusion :** l'autre angle mesure $${180 - x}^\\circ$.`,
            _v: { k: '6G3.sub', tot: 180, parts: [x] }
          });
        }
        if (sub === 'plat') {
          const x = this.randInt(20, 160);
          const fig = this._6E_rays(O, [{ deg: 0, label: Q }, { deg: 180, label: P }, { deg: 180 - x, label: R }], [{ from: 180 - x, to: 180, text: `${x}°` }, { from: 0, to: 180 - x, text: '?', color: '#dc2626' }]);
          return this._6E_q(ch, t, {
            title: 'Angle plat partagé en deux',
            statement: `Les points $${P}$, $${O}$ et $${Q}$ sont alignés, et $${ang(P, O, R)} = ${x}^\\circ$.\n${fig}\n**Calcule la mesure de l'angle $${ang(R, O, Q)}$, en degrés.**`,
            type: 'exact', answer: A(180 - x),
            hint1: `Les angles $${ang(P, O, R)}$ et $${ang(R, O, Q)}$ sont adjacents : ensemble, ils forment l'angle $${ang(P, O, Q)}$. Quelle est sa nature ?`,
            hint2: 'Trois points alignés forment un angle plat, qui mesure 180° ; deux angles adjacents qui forment un angle plat sont supplémentaires.',
            solution: `**Étape 1 :** $${P}$, $${O}$, $${Q}$ sont alignés, donc $${ang(P, O, Q)}$ est un angle plat : $180^\\circ$.\n**Étape 2 :** $${ang(P, O, R)}$ et $${ang(R, O, Q)}$ sont adjacents et forment cet angle plat : $${ang(R, O, Q)} = 180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$.\n**Conclusion :** $${ang(R, O, Q)} = ${180 - x}^\\circ$.`,
            _v: { k: '6G3.sub', tot: 180, parts: [x] }
          });
        }
        if (sub === 'adj') {
          const a = this.randInt(15, 80), b = this.randInt(15, 85);
          const fig = this._6E_rays(O, [{ deg: 0, label: P }, { deg: a, label: Q }, { deg: a + b, label: R }], [{ from: 0, to: a, text: `${a}°` }, { from: a, to: a + b, text: `${b}°`, color: '#059669' }]);
          return this._6E_q(ch, t, {
            title: 'Angles adjacents',
            statement: `Les angles $${ang(P, O, Q)}$ et $${ang(Q, O, R)}$ sont adjacents, avec $${ang(P, O, Q)} = ${a}^\\circ$ et $${ang(Q, O, R)} = ${b}^\\circ$.\n${fig}\n**Calcule la mesure de l'angle $${ang(P, O, R)}$, en degrés.**`,
            type: 'exact', answer: A(a + b),
            hint1: `Repère le côté commun $[${O}${Q})$ : l'angle $${ang(P, O, R)}$ est composé des deux angles donnés.`,
            hint2: 'Deux angles adjacents ont le même sommet, un côté commun et sont de part et d’autre de ce côté ; la mesure de l’angle qu’ils forment ensemble est la somme de leurs mesures.',
            solution: `**Étape 1 :** $${ang(P, O, Q)}$ et $${ang(Q, O, R)}$ sont adjacents (côté commun $[${O}${Q})$).\n**Étape 2 :** $${ang(P, O, R)} = ${a}^\\circ + ${b}^\\circ = ${a + b}^\\circ$.\n**Conclusion :** $${ang(P, O, R)} = ${a + b}^\\circ$.`,
            _v: { k: '6G3.add', parts: [a, b] }
          });
        }
        const x = this.randInt(20, 160);
        const fig = this._6E_rays(O, [{ deg: 0, label: Q, noLine: true }, { deg: 180, label: P, noLine: true }, { deg: x, label: S, noLine: true }, { deg: 180 + x, label: R, noLine: true }], [{ from: 180, to: 180 + x, text: `${x}°` }], [0, x]);
        return this._6E_q(ch, t, {
          title: 'Angles opposés par le sommet',
          statement: `Les droites $(${P}${Q})$ et $(${R}${S})$ se coupent en $${O}$, et $${ang(P, O, R)} = ${x}^\\circ$.\n${fig}\n**Combien mesure l'angle $${ang(Q, O, S)}$, en degrés ?**`,
          type: 'exact', answer: A(x),
          hint1: `$${ang(P, O, R)}$ et $${ang(Q, O, S)}$ sont opposés par le sommet.`,
          hint2: 'Deux angles opposés par le sommet ont la même mesure.',
          solution: `**Étape 1 :** les angles $${ang(P, O, R)}$ et $${ang(Q, O, S)}$ ont le même sommet $${O}$ et leurs côtés sont dans le prolongement l'un de l'autre : ils sont opposés par le sommet.\n**Étape 2 :** deux angles opposés par le sommet ont la même mesure.\n**Conclusion :** $${ang(Q, O, S)} = ${x}^\\circ$.`,
          _v: { k: '6G3.same', x }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['biss', 'biss_inv', 'tour']);
        const [P, O, Q, M, R] = this._6E_pts(5);
        if (sub === 'biss') {
          const x = this.randInt(20, 170);
          return this._6E_q(ch, t, {
            title: 'Bissectrice d’un angle',
            statement: `La demi-droite $[${O}${M})$ est la bissectrice de l'angle $${ang(P, O, Q)}$, qui mesure $${x}^\\circ$. **Combien mesure l'angle $${ang(P, O, M)}$, en degrés ?**`,
            type: 'exact', answer: A(x / 2), placeholder: 'Ex : 35',
            hint1: `Fais un schéma à main levée : la bissectrice $[${O}${M})$ coupe l'angle $${ang(P, O, Q)}$ en deux morceaux. Que peux-tu dire de ces deux morceaux ?`,
            hint2: 'La bissectrice d’un angle est la demi-droite qui partage cet angle en deux angles adjacents de même mesure.',
            solution: `**Étape 1 :** $[${O}${M})$ est la bissectrice de $${ang(P, O, Q)}$, donc $${ang(P, O, M)} = ${ang(M, O, Q)}$.\n**Étape 2 :** ces deux angles se partagent $${x}^\\circ$ : $${ang(P, O, M)} = ${x}^\\circ \\div 2 = ${W(x / 2)}^\\circ$.\n**Conclusion :** $${ang(P, O, M)} = ${W(x / 2)}^\\circ$.`,
            _v: { k: '6G3.half', x }
          });
        }
        if (sub === 'biss_inv') {
          const y = this.randInt(10, 89);
          return this._6E_q(ch, t, {
            title: 'Retrouver un angle à partir de sa bissectrice',
            statement: `La demi-droite $[${O}${M})$ est la bissectrice de l'angle $${ang(P, O, Q)}$ et $${ang(M, O, Q)} = ${y}^\\circ$. **Combien mesure l'angle $${ang(P, O, Q)}$, en degrés ?**`,
            type: 'exact', answer: A(2 * y),
            hint1: `L'angle $${ang(P, O, Q)}$ est formé de deux angles adjacents, $${ang(P, O, M)}$ et $${ang(M, O, Q)}$ : que sais-tu de leurs mesures ?`,
            hint2: 'La bissectrice d’un angle le partage en deux angles adjacents de même mesure : chacun vaut la moitié de l’angle.',
            solution: `**Étape 1 :** $[${O}${M})$ est la bissectrice, donc $${ang(P, O, M)} = ${ang(M, O, Q)} = ${y}^\\circ$.\n**Étape 2 :** $${ang(P, O, Q)} = ${y}^\\circ + ${y}^\\circ = 2 \\times ${y}^\\circ = ${2 * y}^\\circ$.\n**Conclusion :** $${ang(P, O, Q)} = ${2 * y}^\\circ$.`,
            _v: { k: '6G3.add', parts: [y, y] }
          });
        }
        let a, b;
        do { a = this.randInt(40, 170); b = this.randInt(40, 170); } while (360 - a - b < 30 || 360 - a - b > 200);
        const fig = this._6E_rays(O, [{ deg: 0, label: P }, { deg: a, label: Q }, { deg: a + b, label: R }], [{ from: 0, to: a, text: `${a}°` }, { from: a, to: a + b, text: `${b}°`, color: '#059669' }, { from: a + b, to: 360, text: '?', color: '#dc2626' }]);
        return this._6E_q(ch, t, {
          title: 'Angles autour d’un point',
          statement: `Trois angles adjacents $${ang(P, O, Q)}$, $${ang(Q, O, R)}$ et $${ang(R, O, P)}$ font le tour complet du point $${O}$. On a $${ang(P, O, Q)} = ${a}^\\circ$ et $${ang(Q, O, R)} = ${b}^\\circ$.\n${fig}\n**Combien mesure l'angle $${ang(R, O, P)}$, en degrés ?**`,
          type: 'exact', answer: A(360 - a - b),
          hint1: `Les trois angles remplissent tout le tour du point $${O}$ : additionne les deux angles connus, puis cherche ce qui manque.`,
          hint2: 'Un tour complet autour d’un point (angle plein) mesure 360°.',
          solution: `**Étape 1 :** les trois angles font le tour complet du point $${O}$ : leur somme vaut $360^\\circ$.\n**Étape 2 :** $${a}^\\circ + ${b}^\\circ = ${a + b}^\\circ$.\n**Étape 3 :** $${ang(R, O, P)} = 360^\\circ - ${a + b}^\\circ = ${360 - a - b}^\\circ$.\n**Conclusion :** $${ang(R, O, P)} = ${360 - a - b}^\\circ$.`,
          _v: { k: '6G3.sub', tot: 360, parts: [a, b] }
        });
      }

      // Palier 4
      const sub = this.randChoice(['secantes', 'biss_plat', 'horloge']);
      const [P, O, Q, R, S, D] = this._6E_pts(6);
      if (sub === 'secantes') {
        const x = this.randInt(25, 155);
        const askOpp = Math.random() < 0.4;
        const target = askOpp ? ang(Q, O, S) : this.randChoice([ang(Q, O, R), ang(P, O, S)]);
        const val = askOpp ? x : 180 - x;
        return this._6E_q(ch, t, {
          title: 'Droites sécantes : les quatre angles',
          statement: `Les droites $(${P}${Q})$ et $(${R}${S})$ se coupent en $${O}$ (les points $${P}$, $${O}$, $${Q}$ sont alignés, ainsi que $${R}$, $${O}$, $${S}$). On sait que $${ang(P, O, R)} = ${x}^\\circ$. **Combien mesure l'angle $${target}$, en degrés ?**`,
          type: 'exact', answer: A(val),
          hint1: 'Deux angles adjacents formant un angle plat sont supplémentaires.',
          hint2: 'Deux angles opposés par le sommet ont la même mesure.',
          solution: askOpp
            ? `$${target}$ et $${ang(P, O, R)}$ sont opposés par le sommet : $${target} = ${x}^\\circ$.`
            : `$${target}$ et $${ang(P, O, R)}$ sont adjacents et forment un angle plat : $${target} = 180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$.`,
          _v: { k: '6G3.secantes', x, opp: askOpp }
        });
      }
      if (sub === 'biss_plat') {
        const x = 2 * this.randInt(10, 80);
        const half = (180 - x) / 2;
        return this._6E_q(ch, t, {
          title: 'Angle plat et bissectrice',
          statement: `Les points $${P}$, $${O}$ et $${Q}$ sont alignés dans cet ordre. Le point $${R}$ est tel que $${ang(P, O, R)} = ${x}^\\circ$, et $[${O}${D})$ est la bissectrice de l'angle $${ang(R, O, Q)}$. **Calcule la mesure de l'angle $${ang(P, O, D)}$, en degrés.**`,
          type: 'exact', answer: A(x + half),
          hint1: `Calcule d'abord $${ang(R, O, Q)} = 180^\\circ - ${x}^\\circ$.`,
          hint2: `Puis $${ang(R, O, D)} = ${ang(R, O, Q)} \\div 2$, et $${ang(P, O, D)} = ${ang(P, O, R)} + ${ang(R, O, D)}$.`,
          solution: `$${ang(R, O, Q)} = 180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$, donc $${ang(R, O, D)} = ${half}^\\circ$.\n$${ang(P, O, D)} = ${x}^\\circ + ${half}^\\circ = ${x + half}^\\circ$.`,
          _v: { k: '6G3.bissplat', x }
        });
      }
      const h = this.randInt(1, 11);
      const half = Math.random() < 0.4;
      const hourDeg = half ? 30 * h + 15 : 30 * h;
      const minDeg = half ? 180 : 0;
      let diff = Math.abs(hourDeg - minDeg);
      if (diff > 180) diff = 360 - diff;
      const hh = half ? `${h} h 30` : `${h} h`;
      return this._6E_q(ch, t, {
        title: 'Angle entre les aiguilles d’une horloge',
        statement: `Il est exactement ${hh}. **Quelle est la mesure, en degrés, du plus petit angle formé par les deux aiguilles de l'horloge ?**`,
        type: 'exact', answer: A(diff),
        hint1: 'Le cadran est partagé en 12 intervalles égaux : calcule l’angle d’un intervalle, puis repère la position de chaque aiguille à partir du 12.',
        hint2: half ? "Un tour complet mesure 360°. À la demie, la grande aiguille pointe sur le 6 et la petite aiguille est à mi-chemin entre deux nombres consécutifs." : "Un tour complet mesure 360°. À une heure « pile », la grande aiguille pointe sur le 12 et la petite exactement sur le nombre de l'heure.",
        solution: `La petite aiguille est à $${hourDeg}^\\circ$ du 12 et la grande à $${minDeg}^\\circ$. L'écart est de $${Math.abs(hourDeg - minDeg)}^\\circ$` + (Math.abs(hourDeg - minDeg) > 180 ? `, et le plus petit angle vaut $360^\\circ - ${Math.abs(hourDeg - minDeg)}^\\circ = ${diff}^\\circ$.` : `, soit $${diff}^\\circ$.`),
        skill: 'Modéliser',
        _v: { k: '6G3.horloge', h, half }
      });
    },

    // ---------------------------------------------------------------
    // 6G4 — Triangles
    // ---------------------------------------------------------------
    generate6G4(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const ch = '6G4';
      const A = x => this._6ans(x), W = x => this._6tex(x);
      const hat = v => `\\widehat{${v}}`;

      if (t === 1) {
        const sub = this.randChoice(['somme', 'somme', 'nature', 'equi']);
        const [P, Q, R] = this._6E_pts(3);
        if (sub === 'somme') {
          let a, b;
          do { a = this.randInt(15, 120); b = this.randInt(15, 120); } while (a + b > 165);
          return this._6E_q(ch, t, {
            title: 'Somme des angles d’un triangle',
            statement: `Dans le triangle $${P}${Q}${R}$, on a $${hat(P)} = ${a}^\\circ$ et $${hat(Q)} = ${b}^\\circ$. **Calcule la mesure de l'angle $${hat(R)}$, en degrés.**`,
            type: 'exact', answer: A(180 - a - b),
            hint1: 'Additionne les deux angles connus, puis cherche ce qu’il manque pour atteindre la somme des angles d’un triangle.',
            hint2: 'Propriété : dans un triangle, la somme des mesures des trois angles est égale à 180°.',
            solution: `**Étape 1 :** dans un triangle, la somme des angles vaut $180^\\circ$.\n**Étape 2 :** $${hat(P)} + ${hat(Q)} = ${a}^\\circ + ${b}^\\circ = ${a + b}^\\circ$.\n**Étape 3 :** $${hat(R)} = 180^\\circ - ${a + b}^\\circ = ${180 - a - b}^\\circ$.\n**Conclusion :** $${hat(R)} = ${180 - a - b}^\\circ$.`,
            _v: { k: '6G4.sub', tot: 180, parts: [a, b] }
          });
        }
        if (sub === 'nature') {
          const kind = this.randInt(0, 2);
          let s;
          if (kind === 0) { const c = this.randInt(3, 12); s = [c, c, c]; }
          else if (kind === 1) { let c, d; do { c = this.randInt(3, 12); d = this.randInt(2, 2 * c - 1); } while (d === c); s = this.shuffle([c, c, d]); }
          else { let x, y, z; do { x = this.randInt(3, 12); y = this.randInt(3, 12); z = this.randInt(3, 12); } while (x === y || y === z || x === z || Math.max(x, y, z) >= x + y + z - Math.max(x, y, z)); s = [x, y, z]; }
          const opts = ['équilatéral', 'isocèle (non équilatéral)', 'quelconque (aucun côté égal)'];
          return this._6E_mcq(ch, t, {
            title: 'Nature d’un triangle d’après ses côtés',
            statement: `Le triangle $${P}${Q}${R}$ vérifie $${P}${Q} = ${s[0]}$ cm, $${Q}${R} = ${s[1]}$ cm et $${P}${R} = ${s[2]}$ cm. **Ce triangle est :**`,
            hint1: 'Isocèle : au moins deux côtés de même longueur. Équilatéral : trois côtés de même longueur.',
            hint2: 'Compare les trois longueurs deux à deux.',
            solution: `Les longueurs sont $${s[0]}$, $${s[1]}$ et $${s[2]}$ : le triangle est **${opts[kind]}**.`,
            _v: { k: '6G4.nature', s }
          }, opts[kind], opts.filter((_, i) => i !== kind));
        }
        const c = Math.random() < 0.6 ? this.randInt(2, 20) : this.randInt(21, 99) / 10;
        return this._6E_q(ch, t, {
          title: 'Périmètre d’un triangle équilatéral',
          statement: `Le triangle $${P}${Q}${R}$ est équilatéral et $${P}${Q} = ${W(c)}$ cm. **Calcule son périmètre, en cm.**`,
          type: 'exact', answer: A(3 * c),
          hint1: 'Trouve d’abord la longueur de chacun des trois côtés, puis additionne-les.',
          hint2: 'Un triangle équilatéral a ses trois côtés de même longueur ; le périmètre d’un polygone est la somme des longueurs de ses côtés.',
          solution: `**Étape 1 :** le triangle est équilatéral : ses trois côtés mesurent $${W(c)}$ cm.\n**Étape 2 :** périmètre $= ${W(c)} + ${W(c)} + ${W(c)} = 3 \\times ${W(c)} = ${W(this._6r(3 * c))}$.\n**Conclusion :** le périmètre est $${W(this._6r(3 * c))}$ cm.`,
          _v: { k: '6G4.mul', a: 3, b: c }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['rect', 'iso_base', 'iso_sommet']);
        const [P, Q, R] = this._6E_pts(3);
        if (sub === 'rect') {
          const x = this.randInt(10, 80);
          return this._6E_q(ch, t, {
            title: 'Angles d’un triangle rectangle',
            statement: `Le triangle $${P}${Q}${R}$ est rectangle en $${P}$ et $${hat(Q)} = ${x}^\\circ$. **Calcule $${hat(R)}$, en degrés.**`,
            type: 'exact', answer: A(90 - x),
            hint1: `Le triangle est rectangle en $${P}$ : tu connais donc deux angles sur trois.`,
            hint2: 'Dans un triangle, la somme des angles vaut 180° ; un angle droit mesure 90°.',
            solution: `**Étape 1 :** rectangle en $${P}$ : $${hat(P)} = 90^\\circ$.\n**Étape 2 :** somme des angles : $${hat(R)} = 180^\\circ - 90^\\circ - ${x}^\\circ = ${90 - x}^\\circ$.\n**Conclusion :** $${hat(R)} = ${90 - x}^\\circ$ (les deux angles aigus d'un triangle rectangle ont pour somme $90^\\circ$).`,
            _v: { k: '6G4.sub', tot: 180, parts: [90, x] }
          });
        }
        if (sub === 'iso_base') {
          const x = 2 * this.randInt(10, 80);
          return this._6E_q(ch, t, {
            title: 'Triangle isocèle : angles à la base',
            statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$ et $${hat(P)} = ${x}^\\circ$. **Calcule la mesure de l'angle $${hat(Q)}$, en degrés.**`,
            type: 'exact', answer: A((180 - x) / 2),
            hint1: 'Calcule d’abord ce que valent ensemble les deux angles à la base, puis partage équitablement.',
            hint2: 'Dans un triangle isocèle, les deux angles à la base ont la même mesure ; dans tout triangle, la somme des angles vaut 180°.',
            solution: `$${hat(Q)} + ${hat(R)} = 180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$ et ces deux angles sont égaux : $${hat(Q)} = ${180 - x}^\\circ \\div 2 = ${(180 - x) / 2}^\\circ$.`,
            _v: { k: '6G4.isobase', x }
          });
        }
        const x = this.randInt(20, 85);
        return this._6E_q(ch, t, {
          title: 'Triangle isocèle : angle au sommet principal',
          statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$ et $${hat(Q)} = ${x}^\\circ$. **Calcule la mesure de l'angle $${hat(P)}$, en degrés.**`,
          type: 'exact', answer: A(180 - 2 * x),
          hint1: `Commence par trouver la mesure de l'angle $${hat(R)}$, puis utilise les trois angles du triangle.`,
          hint2: 'Dans un triangle isocèle, les deux angles à la base ont la même mesure ; dans tout triangle, la somme des angles vaut 180°.',
          solution: `**Étape 1 :** isocèle en $${P}$ : les angles à la base sont égaux, $${hat(R)} = ${hat(Q)} = ${x}^\\circ$.\n**Étape 2 :** $${hat(Q)} + ${hat(R)} = 2 \\times ${x}^\\circ = ${2 * x}^\\circ$.\n**Étape 3 :** $${hat(P)} = 180^\\circ - ${2 * x}^\\circ = ${180 - 2 * x}^\\circ$.\n**Conclusion :** $${hat(P)} = ${180 - 2 * x}^\\circ$.`,
          _v: { k: '6G4.sub', tot: 180, parts: [x, x] }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['construct', 'iso_perim', 'angles_possible']);
        const [P, Q, R] = this._6E_pts(3);
        if (sub === 'construct') {
          const ok = Math.random() < 0.5;
          let s;
          do {
            s = [this.randInt(2, 15), this.randInt(2, 15), this.randInt(2, 15)];
            const m = Math.max(...s), rest = s[0] + s[1] + s[2] - m;
            if (ok ? m < rest : m > rest) break;
          } while (true);
          const yes = 'Oui, ce triangle est constructible.', no = "Non, ce triangle n'est pas constructible.";
          const m = Math.max(...s), rest = s[0] + s[1] + s[2] - m;
          return this._6E_mcq(ch, t, {
            title: 'Peut-on construire ce triangle ?',
            statement: `**Peut-on construire un triangle $${P}${Q}${R}$ tel que $${P}${Q} = ${s[0]}$ cm, $${Q}${R} = ${s[1]}$ cm et $${P}${R} = ${s[2]}$ cm ?**`,
            hint1: 'Compare la plus grande longueur à la somme des deux autres.',
            hint2: 'Le triangle est constructible si la plus grande longueur est strictement inférieure à la somme des deux autres.',
            solution: `Plus grande longueur : $${m}$ cm ; somme des deux autres : $${rest}$ cm.\n` + (ok ? `$${m} < ${rest}$ : le triangle est constructible.` : `$${m} > ${rest}$ : les deux arcs de cercle ne se coupent pas, le triangle n'est pas constructible.`),
            skill: 'Raisonner',
            _v: { k: '6G4.construct', s }
          }, ok ? yes : no, [ok ? no : yes]);
        }
        if (sub === 'iso_perim') {
          const x = this.randInt(3, 15);
          const b = this.randInt(2, 2 * x - 1);
          const per = 2 * x + b;
          return this._6E_q(ch, t, {
            title: 'Triangle isocèle et périmètre',
            statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$, avec $${P}${Q} = ${x}$ cm. Son périmètre est $${per}$ cm. **Calcule la longueur $${Q}${R}$, en cm.**`,
            type: 'exact', answer: A(b),
            hint1: `Trouve d'abord la longueur de $[${P}${R}]$, puis retire du périmètre les deux côtés connus.`,
            hint2: `Un triangle isocèle en $${P}$ a deux côtés de même longueur, ceux qui partent de $${P}$ ; le périmètre est la somme des longueurs des trois côtés.`,
            solution: `**Étape 1 :** isocèle en $${P}$ : $${P}${R} = ${P}${Q} = ${x}$ cm.\n**Étape 2 :** $${P}${Q} + ${P}${R} = ${2 * x}$ cm.\n**Étape 3 :** $${Q}${R} = ${per} - ${2 * x} = ${b}$ cm.\n**Conclusion :** $${Q}${R} = ${b}$ cm.`,
            _v: { k: '6G4.sub', tot: per, parts: [x, x] }
          });
        }
        const ok = Math.random() < 0.5;
        let a, b, c;
        do {
          a = this.randInt(20, 110); b = this.randInt(20, 110);
          c = 180 - a - b + (ok ? 0 : this.randChoice([-10, -5, 5, 10, 20]));
        } while (c < 10);
        const yes = 'Oui, car la somme des angles vaut 180°.', no = 'Non, car la somme des angles ne vaut pas 180°.';
        return this._6E_mcq(ch, t, {
          title: 'Ces angles peuvent-ils être ceux d’un triangle ?',
          statement: `**Existe-t-il un triangle dont les angles mesurent $${a}^\\circ$, $${b}^\\circ$ et $${c}^\\circ$ ?**`,
          hint1: 'Additionne les trois mesures.',
          hint2: 'La somme des angles d’un triangle est toujours 180°.',
          solution: `$${a} + ${b} + ${c} = ${a + b + c}$. ` + (a + b + c === 180 ? 'La somme vaut 180° : un tel triangle existe.' : 'La somme ne vaut pas 180° : un tel triangle n’existe pas.'),
          _v: { k: '6G4.possible', list: [a, b, c] }
        }, ok ? yes : no, [ok ? no : yes]);
      }

      // Palier 4
      const sub = this.randChoice(['cercle', 'ext', 'deux']);
      const [P, Q, R, D, O] = this._6E_pts(5);
      if (sub === 'cercle') {
        const r = Math.random() < 0.6 ? this.randInt(2, 15) : this.randInt(21, 99) / 10;
        const ask = this.randInt(0, 2);
        const q = [`le diamètre du cercle circonscrit au triangle $${P}${Q}${R}$`, `la somme $${O}${Q} + ${O}${R}$`, `la somme $${O}${P} + ${O}${Q} + ${O}${R}$`][ask];
        const val = [2 * r, 2 * r, 3 * r][ask];
        return this._6E_q(ch, t, {
          title: 'Médiatrices et cercle circonscrit',
          statement: `Les médiatrices des côtés du triangle $${P}${Q}${R}$ se coupent en $${O}$, et $${O}${P} = ${W(r)}$ cm. **Calcule ${q}, en cm.**`,
          type: 'exact', answer: A(val),
          hint1: `$${O}$ est sur chaque médiatrice : il est à la même distance des trois sommets.`,
          hint2: `$${O}${P} = ${O}${Q} = ${O}${R}$ : c'est le rayon du cercle circonscrit, de centre $${O}$.`,
          solution: `$${O}${P} = ${O}${Q} = ${O}${R} = ${W(r)}$ cm (rayon du cercle circonscrit).\nRésultat : $${W(this._6r(val))}$ cm.`,
          _v: { k: '6G4.mul', a: ask === 2 ? 3 : 2, b: r }
        });
      }
      if (sub === 'ext') {
        const apex = 2 * this.randInt(10, 75);
        const base = (180 - apex) / 2;
        return this._6E_q(ch, t, {
          title: 'Triangle isocèle et angle extérieur',
          statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$ avec $${hat(P)} = ${apex}^\\circ$. Le point $${D}$ est placé sur la demi-droite $[${Q}${R})$, au-delà de $${R}$. **Calcule la mesure de l'angle $\\widehat{${P}${R}${D}}$, en degrés.**`,
          type: 'exact', answer: A(180 - base),
          hint1: `Calcule d'abord les angles à la base : $(180^\\circ - ${apex}^\\circ) \\div 2$.`,
          hint2: `$\\widehat{${P}${R}${Q}}$ et $\\widehat{${P}${R}${D}}$ forment un angle plat.`,
          solution: `$${hat(Q)} = \\widehat{${P}${R}${Q}} = (180^\\circ - ${apex}^\\circ) \\div 2 = ${base}^\\circ$.\n$${Q}$, $${R}$, $${D}$ alignés : $\\widehat{${P}${R}${D}} = 180^\\circ - ${base}^\\circ = ${180 - base}^\\circ$.`,
          _v: { k: '6G4.ext', apex }
        });
      }
      let b, c;
      do { b = this.randInt(25, 100); c = this.randInt(15, 80); } while (b + c > 165);
      const askAdb = Math.random() < 0.5;
      const val = askAdb ? 180 - b - c : b + c;
      return this._6E_q(ch, t, {
        title: 'Deux triangles imbriqués',
        statement: `Dans le triangle $${P}${Q}${R}$, le point $${D}$ appartient au segment $[${Q}${R}]$. On sait que $\\widehat{${P}${Q}${R}} = ${b}^\\circ$ et $\\widehat{${Q}${P}${D}} = ${c}^\\circ$. **Calcule la mesure de l'angle $\\widehat{${P}${D}${askAdb ? Q : R}}$, en degrés.**`,
        type: 'exact', answer: A(val),
        hint1: `Dans le triangle $${P}${Q}${D}$ : $\\widehat{${P}${D}${Q}} = 180^\\circ - ${b}^\\circ - ${c}^\\circ$.`,
        hint2: `$\\widehat{${P}${D}${Q}}$ et $\\widehat{${P}${D}${R}}$ forment un angle plat.`,
        solution: `Dans $${P}${Q}${D}$ : $\\widehat{${P}${D}${Q}} = 180^\\circ - ${b}^\\circ - ${c}^\\circ = ${180 - b - c}^\\circ$.` +
          (askAdb ? '' : `\nComme $${Q}$, $${D}$, $${R}$ sont alignés : $\\widehat{${P}${D}${R}} = 180^\\circ - ${180 - b - c}^\\circ = ${b + c}^\\circ$.`),
        _v: { k: '6G4.deux', b, c, adb: askAdb }
      });
    },

    // ---------------------------------------------------------------
    // 6G5 — Vision dans l'espace
    // ---------------------------------------------------------------
    generate6G5(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const ch = '6G5';
      const A = x => this._6ans(x), W = x => this._6tex(x);
      const rule = 'Il n’y a aucun trou : sous chaque cube visible, la colonne est remplie jusqu’au sol.';

      if (t === 1) {
        const sub = this.randChoice(['pave', 'heap', 'elem']);
        if (sub === 'pave') {
          const a = this.randInt(1, 4), b = this.randInt(1, 3), c = this.randInt(1, 3);
          const h = [];
          for (let i = 0; i < a; i++) h.push(Array(b).fill(c));
          return this._6E_q(ch, t, {
            title: 'Compter les cubes d’un pavé',
            statement: `Ce pavé droit est formé de cubes identiques.\n${this._6E_iso(h)}\n**Combien de cubes le composent ?** (${rule})`,
            type: 'exact', answer: A(a * b * c),
            hint1: 'Compte les cubes d’une couche (longueur × largeur), puis le nombre de couches.',
            hint2: 'Un pavé droit plein formé de cubes contient : (nombre de cubes d’une couche) × (nombre de couches).',
            solution: `Une couche : $${a} \\times ${b} = ${a * b}$ cubes ; il y a $${c}$ couche${c > 1 ? 's' : ''}. Total : $${a * b} \\times ${c} = ${a * b * c}$ cubes.`,
            skill: 'Représenter',
            _v: { k: '6G5.count', h }
          });
        }
        if (sub === 'heap') {
          const h = this._6E_heap(this.randInt(2, 3), this.randInt(2, 3), 2);
          return this._6E_q(ch, t, {
            title: 'Compter les cubes d’un assemblage',
            statement: `Voici un assemblage de cubes identiques.\n${this._6E_iso(h)}\n**Combien de cubes le composent ?** (${rule})`,
            type: 'exact', answer: A(h.flat().reduce((s, v) => s + v, 0)),
            hint1: 'Compte colonne par colonne : regarde la hauteur de chaque pile.',
            hint2: 'Additionne les hauteurs de toutes les piles.',
            solution: `Hauteurs des piles : $${h.flat().filter(v => v > 0).join(' + ')} = ${h.flat().reduce((s, v) => s + v, 0)}$ cubes.`,
            skill: 'Représenter',
            _v: { k: '6G5.count', h }
          });
        }
        const objs = [['un dé à jouer', 'cube'], ['un morceau de sucre en forme de cube', 'cube'], ['un Rubik’s cube', 'cube'],
          ['une boîte à chaussures', 'pavé droit'], ['une brique', 'pavé droit'], ['un carton de déménagement', 'pavé droit'], ['une boîte de mouchoirs', 'pavé droit']];
        const o = this.randChoice(objs);
        const prop = this.randInt(0, 2);
        const pn = ['faces', 'arêtes', 'sommets'][prop];
        const val = [6, 12, 8][prop];
        return this._6E_q(ch, t, {
          title: 'Faces, arêtes et sommets',
          statement: `On assimile ${o[0]} à un ${o[1]}. **Combien de ${pn} possède ce solide ?**`,
          type: 'exact', answer: A(val), placeholder: 'Ex : 4',
          hint1: `Dessine le solide en perspective et compte méthodiquement les ${pn} : ceux du dessus, ceux du dessous, puis ceux qui relient le dessus au dessous.`,
          hint2: 'Une face est une surface plane qui limite le solide ; une arête est le segment commun à deux faces ; un sommet est un point où se rejoignent plusieurs arêtes.',
          solution: `**Méthode :** on compte ${prop === 0 ? 'le dessus, le dessous et les 4 faces latérales' : prop === 1 ? 'les 4 arêtes du dessus, les 4 du dessous et les 4 arêtes verticales' : 'les 4 sommets du dessus et les 4 du dessous'}.\nUn ${o[1]} possède 6 faces, 12 arêtes et 8 sommets.\n**Conclusion :** la réponse est **${val}**.`,
          skill: 'Communiquer',
          _v: { k: '6G5.elem', prop }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['heap', 'dessus', 'grand']);
        if (sub === 'heap') {
          const h = this._6E_heap(this.randInt(2, 3), this.randInt(2, 3), 3);
          const n = h.flat().reduce((s, v) => s + v, 0);
          return this._6E_q(ch, t, {
            title: 'Compter les cubes d’un assemblage',
            statement: `Voici un assemblage de cubes identiques.\n${this._6E_iso(h)}\n**Combien de cubes le composent ?** (${rule})`,
            type: 'exact', answer: A(n),
            hint1: 'Compte la hauteur de chaque pile, de l’arrière vers l’avant.',
            hint2: 'Additionne les hauteurs.',
            solution: `Somme des hauteurs des piles : $${h.flat().filter(v => v > 0).join(' + ')} = ${n}$ cubes.`,
            skill: 'Représenter',
            _v: { k: '6G5.count', h }
          });
        }
        if (sub === 'dessus') {
          const h = this._6E_heap(this.randInt(2, 3), this.randInt(2, 3), 3);
          const n = h.flat().filter(v => v > 0).length;
          return this._6E_q(ch, t, {
            title: 'Vue de dessus d’un assemblage',
            statement: `Voici un assemblage de cubes identiques.\n${this._6E_iso(h)}\n**Combien de carrés voit-on sur la vue de dessus de cet assemblage ?** (${rule})`,
            type: 'exact', answer: A(n), placeholder: 'Ex : 5',
            hint1: 'Vu de dessus, chaque pile apparaît comme un seul carré, quelle que soit sa hauteur.',
            hint2: 'Compte le nombre de piles.',
            solution: `Il y a $${n}$ piles, donc $${n}$ carrés sur la vue de dessus.`,
            skill: 'Représenter',
            _v: { k: '6G5.dessus', h }
          });
        }
        const n = this.randInt(2, 7);
        const ask = this.randInt(0, 1);
        return this._6E_q(ch, t, {
          title: 'Grand cube formé de petits cubes',
          statement: `On construit un grand cube plein avec des petits cubes de $1$ cm d'arête. Le grand cube a une arête de $${n}$ cm. **${ask === 0 ? 'Combien de petits cubes faut-il ?' : 'Combien de petits cubes voit-on sur une seule face du grand cube ?'}**`,
          type: 'exact', answer: A(ask === 0 ? n * n * n : n * n),
          hint1: `Combien de petits cubes sont alignés le long d'une arête du grand cube ? ${ask === 0 ? 'Compte ensuite une couche, puis le nombre de couches.' : 'Une face est formée de rangées de petits cubes.'}`,
          hint2: ask === 0 ? 'Un cube plein formé de petits cubes en contient (cubes d’une couche) × (nombre de couches) ; ses trois dimensions sont égales.' : 'Une face d’un cube est un carré : autant de rangées que de petits cubes par rangée.',
          solution: ask === 0 ? `**Étape 1 :** une arête de $${n}$ cm contient $${n}$ petits cubes.\n**Étape 2 :** une couche contient $${n} \\times ${n} = ${n * n}$ cubes et il y a $${n}$ couches.\n**Conclusion :** $${n * n} \\times ${n} = ${n * n * n}$ petits cubes.` : `**Étape 1 :** une arête de $${n}$ cm contient $${n}$ petits cubes.\n**Étape 2 :** une face est un carré de $${n}$ rangées de $${n}$ cubes.\n**Conclusion :** $${n} \\times ${n} = ${n * n}$ petits cubes sur une face.`,
          _v: { k: '6G5.grand', n, ask }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['completer', 'face', 'aretes']);
        if (sub === 'completer') {
          const h = this._6E_heap(this.randInt(2, 3), this.randInt(2, 3), 3);
          const nx = h.length, ny = h[0].length;
          const H = Math.max(...h.flat());
          const n = h.flat().reduce((s, v) => s + v, 0);
          return this._6E_q(ch, t, {
            title: 'Compléter un assemblage en pavé',
            statement: `Voici un assemblage de cubes identiques. ${rule}\n${this._6E_iso(h)}\n**Combien de cubes faut-il ajouter pour obtenir un pavé droit plein de $${nx}$ cubes sur $${ny}$ cubes et de $${H}$ cubes de haut ?**`,
            type: 'exact', answer: A(nx * ny * H - n),
            hint1: `Le pavé complet contient $${nx} \\times ${ny} \\times ${H}$ cubes.`,
            hint2: 'Soustrais le nombre de cubes déjà présents.',
            solution: `Pavé complet : $${nx} \\times ${ny} \\times ${H} = ${nx * ny * H}$ cubes. Cubes présents : $${n}$. À ajouter : $${nx * ny * H} - ${n} = ${nx * ny * H - n}$.`,
            skill: 'Chercher',
            _v: { k: '6G5.completer', h }
          });
        }
        if (sub === 'face') {
          const h = this._6E_heap(this.randInt(2, 3), this.randInt(2, 3), 3);
          let n = 0;
          for (let i = 0; i < h.length; i++) n += Math.max(...h[i]);
          return this._6E_q(ch, t, {
            title: 'Vue de face d’un assemblage',
            statement: `Voici un assemblage de cubes identiques. ${rule}\n${this._6E_iso(h, true)}\n**On regarde l'assemblage du côté marqué FACE (en bas à gauche). Combien de carrés voit-on sur cette vue de face ?**`,
            type: 'exact', answer: A(n), placeholder: 'Ex : 5',
            hint1: 'Sur une vue de face, on ne voit pas la profondeur : chaque rangée verticale se réduit à sa pile la plus haute.',
            hint2: 'Pour chaque position de gauche à droite, garde la plus grande hauteur.',
            solution: `De gauche à droite, les plus grandes hauteurs sont $${h.map(r => Math.max(...r)).join('$, $')}$ : on voit $${n}$ carrés.`,
            skill: 'Représenter',
            _v: { k: '6G5.face', h }
          });
        }
        const L = this.randInt(3, 15), l = this.randInt(2, 12), hh = this.randInt(2, 10);
        return this._6E_q(ch, t, {
          title: 'Longueur totale des arêtes d’un pavé',
          statement: `On veut fabriquer le squelette d'un pavé droit en fil de fer. Le pavé mesure $${L}$ cm de long, $${l}$ cm de large et $${hh}$ cm de haut. **Quelle longueur totale de fil faut-il, en cm ?**`,
          type: 'exact', answer: A(4 * (L + l + hh)),
          hint1: 'Classe les arêtes du pavé selon leur longueur (longueurs, largeurs, hauteurs), compte combien il y en a de chaque sorte, puis additionne.',
          hint2: 'Un pavé droit a 12 arêtes : 4 arêtes pour la longueur, 4 pour la largeur et 4 pour la hauteur.',
          solution: `**Étape 1 :** $4$ arêtes de $${L}$ cm, $4$ de $${l}$ cm et $4$ de $${hh}$ cm.\n**Étape 2 :** $4 \\times ${L} + 4 \\times ${l} + 4 \\times ${hh} = 4 \\times (${L} + ${l} + ${hh}) = 4 \\times ${L + l + hh} = ${4 * (L + l + hh)}$.\n**Conclusion :** il faut $${4 * (L + l + hh)}$ cm de fil.`,
          skill: 'Modéliser',
          _v: { k: '6G5.aretes', L, l, h: hh }
        });
      }

      // Palier 4 : cube peint
      const a = this.randInt(2, 6), b = this.randInt(2, 6), c = this.randInt(3, 6);
      const kind = this.randInt(0, 2);
      const val = kind === 0 ? (a - 2) * (b - 2) * (c - 2)
        : kind === 1 ? 2 * ((a - 2) * (b - 2) + (b - 2) * (c - 2) + (a - 2) * (c - 2))
          : 4 * ((a - 2) + (b - 2) + (c - 2));
      const what = ['n’ont aucune face peinte', 'ont exactement une face peinte', 'ont exactement deux faces peintes'][kind];
      return this._6E_q(ch, t, {
        title: 'Le pavé peint',
        statement: `On assemble des petits cubes identiques pour former un pavé droit plein de $${a}$ cubes de long, $${b}$ cubes de large et $${c}$ cubes de haut. On peint entièrement l'extérieur du pavé, puis on le démonte. **Combien de petits cubes ${what} ?**`,
        type: 'exact', answer: A(val), placeholder: 'Ex : 8',
        hint1: kind === 0 ? 'Retire une couche de cubes de chaque côté du pavé, dans chacune des trois directions, et compte les cubes du pavé qui reste.' : kind === 1 ? 'Sur chaque face du pavé, enlève la bordure : compte les cubes du rectangle intérieur, puis additionne pour toutes les faces.' : 'Sur chaque arête du pavé, enlève les cubes des coins : compte ceux qui restent, puis additionne pour toutes les arêtes.',
        hint2: kind === 0 ? 'Un cube sans peinture ne touche aucune face extérieure du pavé : il est entièrement à l’intérieur.' : kind === 1 ? 'Un cube n’a qu’une face peinte s’il est sur une face du pavé sans être sur une arête ; un pavé droit a des faces opposées identiques.' : 'Un cube a exactement deux faces peintes s’il est sur une arête du pavé sans être un coin (les coins ont trois faces peintes) ; un pavé droit a douze arêtes, quatre de chaque longueur.',
        solution: kind === 0 ? `**Étape 1 :** on retire une couche de chaque côté : le pavé intérieur mesure $${a} - 2 = ${a - 2}$ sur $${b} - 2 = ${b - 2}$ sur $${c} - 2 = ${c - 2}$ cubes.\n**Étape 2 :** $${a - 2} \\times ${b - 2} \\times ${c - 2} = ${val}$.\n**Conclusion :** **${val}** cubes n'ont aucune face peinte.`
          : kind === 1 ? `**Étape 1 :** sur chaque face, on retire la bordure : rectangles intérieurs de $${a - 2} \\times ${b - 2}$, $${b - 2} \\times ${c - 2}$ et $${a - 2} \\times ${c - 2}$ cubes, chacun présent sur deux faces opposées.\n**Étape 2 :** $2 \\times (${(a - 2) * (b - 2)} + ${(b - 2) * (c - 2)} + ${(a - 2) * (c - 2)}) = ${val}$.\n**Conclusion :** **${val}** cubes ont exactement une face peinte.`
            : `**Étape 1 :** sur chaque arête, on retire les deux coins : il reste $${a - 2}$, $${b - 2}$ ou $${c - 2}$ cubes selon la direction.\n**Étape 2 :** il y a $4$ arêtes de chaque sorte : $4 \\times (${a - 2} + ${b - 2} + ${c - 2}) = ${val}$.\n**Conclusion :** **${val}** cubes ont exactement deux faces peintes.`,
        skill: 'Chercher',
        _v: { k: '6G5.peint', a, b, c, kind }
      });
    }
  });
})();

// =====================================================================
// 6D1, 6D2, 6A1 (données, probabilités, pensée informatique)
// =====================================================================
// ===========================================================================
// 6D1 (gestion de données), 6D2 (probabilités), 6A1 (pensée informatique)
// ===========================================================================
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  Object.assign(window.MathsGenerators, {
    // ---------------------------------------------------------------------
    // Helpers propres à ces chapitres (préfixe _6F)
    // ---------------------------------------------------------------------

    /** Tableau Markdown (rendu par MathsRenderer.markdownToHtml), entouré de lignes vides. */
    _6Ftable(headers, rows) {
      const line = cells => `| ${cells.join(' | ')} |`;
      const sep = `|${headers.map(() => ':---:').join('|')}|`;
      return `\n\n${line(headers)}\n${sep}\n${rows.map(line).join('\n')}\n\n`;
    },

    /** Diagramme en barres SVG, graduations tous les `step`. */
    _6Fbars(cats, vals, step, yLabel) {
      const W = 360, H = 230, x0 = 46, y0 = 190, top = 24;
      const maxV = Math.max(...vals);
      const nSteps = Math.ceil(maxV / step) + 1;
      const yMax = nSteps * step;
      const py = v => y0 - (v / yMax) * (y0 - top);
      const bw = Math.min(46, (W - x0 - 20) / cats.length - 14);
      const gap = (W - x0 - 10) / cats.length;
      let inner = '';
      for (let i = 0; i <= nSteps; i++) {
        const v = i * step;
        inner += `<line x1="${x0}" y1="${py(v)}" x2="${W - 8}" y2="${py(v)}" stroke="var(--border-color, #cbd5e1)" stroke-width="${i === 0 ? 1.6 : 0.8}"/>`;
        inner += this._6svgText(x0 - 6, py(v) + 4, String(v), { size: 10, anchor: 'end', weight: '500' });
      }
      cats.forEach((c, i) => {
        const cx = x0 + gap * i + gap / 2;
        inner += `<rect x="${cx - bw / 2}" y="${py(vals[i])}" width="${bw}" height="${y0 - py(vals[i])}" fill="#f59e0b" fill-opacity="0.75" stroke="#b45309" stroke-width="1.2"/>`;
        inner += this._6svgText(cx, y0 + 16, c, { size: 10, weight: '600' });
      });
      inner += `<line x1="${x0}" y1="${top - 8}" x2="${x0}" y2="${y0}" stroke="var(--text-main, #334155)" stroke-width="1.6"/>`;
      inner += this._6svgText(x0 - 4, top - 12, yLabel, { size: 10, anchor: 'start', weight: '700' });
      return this._6svg(W, H, inner, 380);
    },

    /** Quadrillage 8 × 8 (colonnes A à H, lignes 1 à 8 de bas en haut), robot sur la case de départ. */
    _6Fgrid(start, target) {
      const n = 8, s = 26, x0 = 30, yTop = 12;
      const W = x0 + n * s + 12, H = yTop + n * s + 30;
      let inner = '';
      for (let i = 0; i <= n; i++) {
        inner += `<line x1="${x0 + i * s}" y1="${yTop}" x2="${x0 + i * s}" y2="${yTop + n * s}" stroke="var(--border-color, #94a3b8)" stroke-width="1"/>`;
        inner += `<line x1="${x0}" y1="${yTop + i * s}" x2="${x0 + n * s}" y2="${yTop + i * s}" stroke="var(--border-color, #94a3b8)" stroke-width="1"/>`;
      }
      for (let i = 0; i < n; i++) {
        inner += this._6svgText(x0 + i * s + s / 2, yTop + n * s + 18, 'ABCDEFGH'[i], { size: 11, weight: '700' });
        inner += this._6svgText(x0 - 10, yTop + (n - 1 - i) * s + s / 2 + 4, String(i + 1), { size: 11, weight: '700' });
      }
      const cell = (p, color, label) => {
        const cx = x0 + (p[0] - 1) * s + s / 2, cy = yTop + (n - p[1]) * s + s / 2;
        return `<circle cx="${cx}" cy="${cy}" r="9" fill="${color}" fill-opacity="0.85"/>` + this._6svgText(cx, cy + 4, label, { size: 10, fill: '#ffffff', weight: '800' });
      };
      inner += cell(start, '#7c3aed', 'R');
      if (target) inner += cell(target, '#16a34a', 'T');
      return this._6svg(W, H, inner, 260);
    },

    _6Fcell(p) {
      return 'ABCDEFGH'[p[0] - 1] + p[1];
    },

    _6FDIRS: {
      D: { dx: 1, dy: 0, txt: 'vers la droite', arrow: '→' },
      G: { dx: -1, dy: 0, txt: 'vers la gauche', arrow: '←' },
      H: { dx: 0, dy: 1, txt: 'vers le haut', arrow: '↑' },
      B: { dx: 0, dy: -1, txt: 'vers le bas', arrow: '↓' }
    },

    /** Simule un programme (liste [dir, n]) répété `reps` fois ; renvoie null si le robot sort du quadrillage. */
    _6Frun(start, moves, reps = 1) {
      let [c, r] = start;
      for (let k = 0; k < reps; k++) {
        for (const [d, nb] of moves) {
          c += this._6FDIRS[d].dx * nb;
          r += this._6FDIRS[d].dy * nb;
          if (c < 1 || c > 8 || r < 1 || r > 8) return null;
        }
      }
      return [c, r];
    },

    _6FmoveTxt(m) {
      const d = this._6FDIRS[m[0]];
      return `${m[1]} case${m[1] > 1 ? 's' : ''} ${d.txt} (${d.arrow})`;
    },

    /** Tire un programme aléatoire valide (reste dans la grille). */
    _6FrandomProg(nMoves, maxStep, reps = 1) {
      for (let tries = 0; tries < 200; tries++) {
        const start = [this.randInt(1, 8), this.randInt(1, 8)];
        const moves = [];
        let last = null;
        for (let i = 0; i < nMoves; i++) {
          let d;
          do { d = this.randChoice(['D', 'G', 'H', 'B']); } while (d === last);
          last = d;
          moves.push([d, this.randInt(1, maxStep)]);
        }
        const end = this._6Frun(start, moves, reps);
        if (end && (end[0] !== start[0] || end[1] !== start[1])) return { start, moves, end };
      }
      return { start: [2, 2], moves: [['D', 2], ['H', 3]], end: [4, 5] };
    },

    /** Distracteurs plausibles pour une case d'arrivée. */
    _6FcellDistractors(start, moves, reps, end) {
      const swapV = moves.map(([d, n]) => [d === 'H' ? 'B' : d === 'B' ? 'H' : d, n]);
      const swapH = moves.map(([d, n]) => [d === 'D' ? 'G' : d === 'G' ? 'D' : d, n]);
      const cands = [];
      const add = p => { if (p && p[0] >= 1 && p[0] <= 8 && p[1] >= 1 && p[1] <= 8) cands.push(this._6Fcell(p)); };
      // Erreurs de sens, oubli de la répétition, décalage d'une case
      const run = (mv, rp) => {
        let [c, r] = start;
        for (let k = 0; k < rp; k++) for (const [d, n] of mv) { c += this._6FDIRS[d].dx * n; r += this._6FDIRS[d].dy * n; }
        return [c, r];
      };
      add(run(swapV, reps));
      add(run(swapH, reps));
      if (reps > 1) add(run(moves, 1));
      add([end[0] + 1, end[1]]);
      add([end[0], end[1] - 1]);
      add([end[0] - 1, end[1] + 1]);
      add([end[1], end[0]]);
      return this.shuffle(cands.filter(c => c !== this._6Fcell(end)));
    },

    // =====================================================================
    // 6D1 — Organisation et gestion de données
    // =====================================================================
    _6D1contexts: [
      { theme: "le sport préféré des élèves de 6e", q: "élèves ont choisi", unit: 'élèves', col: 'Sport', cats: ['Football', 'Basket', 'Natation', 'Tennis', 'Judo', 'Danse', 'Escalade'] },
      { theme: "le nombre de livres empruntés au CDI chaque jour", q: "livres ont été empruntés le", unit: 'livres', col: 'Jour', cats: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'] },
      { theme: "le moyen de transport utilisé pour venir au collège", q: "élèves viennent", unit: 'élèves', col: 'Transport', cats: ['À pied', 'Vélo', 'Bus', 'Voiture', 'Trottinette', 'Train'] },
      { theme: "l'animal de compagnie des élèves de la classe", q: "élèves ont comme animal", unit: 'élèves', col: 'Animal', cats: ['Chat', 'Chien', 'Lapin', 'Poisson', 'Hamster', 'Oiseau'] },
      { theme: "le nombre de crêpes vendues à la kermesse selon le parfum", q: "crêpes vendues au parfum", unit: 'crêpes', col: 'Parfum', cats: ['Sucre', 'Chocolat', 'Confiture', 'Caramel', 'Miel', 'Citron'] },
      { theme: "la couleur préférée des élèves interrogés", q: "élèves préfèrent", unit: 'élèves', col: 'Couleur', cats: ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Violet', 'Noir'] }
    ],

    _6D1pick(nCats, minV, maxV, distinct = false) {
      const ctx = this.randChoice(this._6D1contexts);
      const idxs = this.shuffle(ctx.cats.map((_, i) => i)).slice(0, nCats).sort((a, b) => a - b);
      const cats = idxs.map(i => ctx.cats[i]);
      let vals;
      do {
        vals = cats.map(() => this.randInt(minV, maxV));
      } while (distinct && new Set(vals).size !== vals.length);
      return { ctx, cats, vals };
    },

    _6D1students() {
      const names = this.shuffle(['Inès', 'Louis', 'Jade', 'Hugo', 'Lina', 'Noah', 'Chloé', 'Adam', 'Emma', 'Sacha', 'Maël', 'Rose', 'Yanis', 'Léa', 'Tom', 'Nina']);
      const acts = ['Natation', 'Football', 'Musique', 'Théâtre', 'Judo'];
      const n = this.randInt(8, 10);
      const list = [];
      for (let i = 0; i < n; i++) {
        list.push({ name: names[i], age: this.randInt(10, 12), h: this.randInt(132, 158), act: this.randChoice(acts) });
      }
      return list;
    },

    _6D1studentTable(list) {
      return this._6Ftable(['Prénom', 'Âge (ans)', 'Taille (cm)', 'Activité'], list.map(s => [s.name, String(s.age), String(s.h), s.act]));
    },

    generate6D1(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const base = (title, extra) => Object.assign({ chapterId: '6D1', tier: t, title: t === 4 ? `Défi 5ème : ${title}` : title, skill: 'Représenter' }, extra);

      if (t === 1) {
        const sub = this.randChoice(['lire', 'max', 'total']);
        const { ctx, cats, vals } = this._6D1pick(this.randInt(4, 5), 2, 28, sub === 'max');
        const table = this._6Ftable([ctx.col, ...cats], [['Effectif', ...vals.map(String)]]);
        const intro = `Le tableau ci-dessous présente ${ctx.theme}.${table}`;
        if (sub === 'lire') {
          const i = this.randInt(0, cats.length - 1);
          return base("Lire une donnée dans un tableau", {
            statement: `${intro}**Quel est l'effectif de la catégorie « ${cats[i]} » ?**`,
            type: 'exact', answer: String(vals[i]), placeholder: 'Ex : 12',
            hint1: `Repère la colonne « ${cats[i]} » puis lis le nombre de la ligne « Effectif ».`,
            hint2: "L'effectif d'une catégorie est le nombre de fois où elle apparaît.",
            solution: `On repère la colonne « ${cats[i]} » dans la première ligne, puis on descend jusqu'à la ligne « Effectif » : on y lit $${vals[i]}$.\nL'effectif de la catégorie « ${cats[i]} » est **$${vals[i]}$**.`,
            _v: { k: '6D1.lire', vals, i }
          });
        }
        if (sub === 'max') {
          const iMax = vals.indexOf(Math.max(...vals));
          const q = base("Catégorie la plus fréquente", {
            statement: `${intro}**Quelle catégorie a le plus grand effectif ?**`,
            hint1: "Compare tous les effectifs de la deuxième ligne.",
            hint2: "Cherche le plus grand nombre du tableau, puis remonte à sa catégorie.",
            solution: `Le plus grand effectif est $${vals[iMax]}$ : il correspond à « ${cats[iMax]} ».`,
            _v: { k: '6D1.max', vals, cats }
          });
          return this._6mcq(q, cats[iMax], this.shuffle(cats.filter((_, i) => i !== iMax)));
        }
        const tot = vals.reduce((a, b) => a + b, 0);
        return base("Calculer l'effectif total", {
          statement: `${intro}**Quel est l'effectif total ?**`,
          type: 'exact', answer: String(tot), placeholder: 'Ex : 60',
          hint1: "L'effectif total est la somme de tous les effectifs.",
          hint2: "Additionne les nombres de la ligne « Effectif » en les regroupant astucieusement.",
          solution: `L'effectif total est la somme des effectifs de toutes les catégories :\n$$${vals.join(' + ')} = ${tot}$$\nL'effectif total est **$${tot}$**.`,
          _v: { k: '6D1.total', vals }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['bar', 'diff', 'complete']);
        if (sub === 'bar') {
          const step = this.randChoice([2, 5, 10]);
          const { ctx, cats, vals: raw } = this._6D1pick(this.randInt(4, 5), 1, 9);
          const vals = raw.map(v => v * step);
          const i = this.randInt(0, cats.length - 1);
          return base("Lire un diagramme en barres", {
            statement: `Le diagramme en barres ci-dessous représente ${ctx.theme}.\n${this._6Fbars(cats, vals, step, ctx.unit)}\n**Quel est l'effectif de la catégorie « ${cats[i]} » ?**`,
            type: 'exact', answer: String(vals[i]), placeholder: 'Ex : 20',
            hint1: `Repère le haut de la barre « ${cats[i]} » et suis la ligne horizontale jusqu'à l'axe vertical.`,
            hint2: "Dans un diagramme en barres, la hauteur d'une barre donne l'effectif de la catégorie ; lis d'abord de combien en combien l'axe vertical est gradué.",
            solution: `**Étape 1.** L'axe vertical est gradué de $${step}$ en $${step}$.\n**Étape 2.** Le haut de la barre « ${cats[i]} » est au niveau de la graduation $${vals[i]}$.\nL'effectif de la catégorie « ${cats[i]} » est **$${vals[i]}$**.`,
            _v: { k: '6D1.bar', vals, i }
          });
        }
        if (sub === 'diff') {
          const { ctx, cats, vals } = this._6D1pick(this.randInt(4, 5), 3, 45, true);
          const idx = this.shuffle(cats.map((_, i) => i)).slice(0, 2).sort((a, b) => vals[b] - vals[a]);
          const [a, b] = idx;
          const table = this._6Ftable([ctx.col, ...cats], [['Effectif', ...vals.map(String)]]);
          return base("Comparer deux effectifs", {
            statement: `Le tableau ci-dessous présente ${ctx.theme}.${table}**Combien de ${ctx.unit} de plus compte la catégorie « ${cats[a]} » par rapport à la catégorie « ${cats[b]} » ?**`,
            type: 'exact', answer: String(vals[a] - vals[b]), placeholder: 'Ex : 7',
            hint1: "« Combien de plus » : on calcule une différence.",
            hint2: "Pour savoir de combien un nombre dépasse un autre, on soustrait le plus petit du plus grand.",
            solution: `$$${vals[a]} - ${vals[b]} = ${vals[a] - vals[b]}$$\nLa catégorie « ${cats[a]} » compte $${vals[a] - vals[b]}$ ${ctx.unit} de plus.`,
            _v: { k: '6D1.diff', vals, a, b }
          });
        }
        const { ctx, cats, vals } = this._6D1pick(this.randInt(4, 5), 3, 30);
        const i = this.randInt(0, cats.length - 1);
        const tot = vals.reduce((x, y) => x + y, 0);
        const shown = vals.map((v, j) => (j === i ? '?' : String(v)));
        const table = this._6Ftable([ctx.col, ...cats, 'Total'], [['Effectif', ...shown, String(tot)]]);
        const others = vals.filter((_, j) => j !== i);
        const sumO = others.reduce((x, y) => x + y, 0);
        return base("Compléter un tableau d'effectifs", {
          statement: `Le tableau ci-dessous présente ${ctx.theme}, mais une case a été effacée.${table}**Quel nombre doit-on écrire à la place du « ? » ?**`,
          type: 'exact', answer: String(vals[i]), placeholder: 'Ex : 9',
          hint1: "La somme de tous les effectifs doit être égale au total.",
          hint2: `Calcule la somme des effectifs connus, puis soustrais-la de $${tot}$.`,
          solution: `Somme des effectifs connus : $${others.join(' + ')} = ${sumO}$.\n$$${tot} - ${sumO} = ${vals[i]}$$`,
          _v: { k: '6D1.complete', shown: vals.map((v, j) => (j === i ? null : v)), tot }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['filter', 'double', 'barcompare']);
        if (sub === 'filter') {
          let list, crit, count;
          do {
            list = this._6D1students();
            const kind = this.randChoice(['hGt', 'hLe', 'age', 'act']);
            if (kind === 'hGt') { const s = this.randChoice([140, 142, 145, 148, 150]); crit = { kind, s, txt: `mesurent strictement plus de $${s}$ cm` }; }
            else if (kind === 'hLe') { const s = this.randChoice([138, 140, 143, 145, 147]); crit = { kind, s, txt: `mesurent au plus $${s}$ cm` }; }
            else if (kind === 'age') { const s = this.randInt(10, 12); crit = { kind, s, txt: `ont exactement $${s}$ ans` }; }
            else { const s = this.randChoice(['Natation', 'Football', 'Musique', 'Théâtre', 'Judo']); crit = { kind, s, txt: `pratiquent l'activité « ${s} »` }; }
            count = list.filter(st => crit.kind === 'hGt' ? st.h > crit.s : crit.kind === 'hLe' ? st.h <= crit.s : crit.kind === 'age' ? st.age === crit.s : st.act === crit.s).length;
          } while (count === 0);
          const sel = list.filter(st => crit.kind === 'hGt' ? st.h > crit.s : crit.kind === 'hLe' ? st.h <= crit.s : crit.kind === 'age' ? st.age === crit.s : st.act === crit.s);
          return base("Filtrer des données selon un critère", {
            statement: `Voici des informations sur des élèves d'un club.${this._6D1studentTable(list)}**Combien d'élèves ${crit.txt} ?**`,
            type: 'exact', answer: String(count), placeholder: 'Ex : 4',
            hint1: "Parcours le tableau ligne par ligne et coche les élèves qui respectent le critère.",
            hint2: crit.kind === 'hGt' ? `« Strictement plus de $${crit.s}$ » : $${crit.s}$ ne convient pas.` : crit.kind === 'hLe' ? `« Au plus $${crit.s}$ » : $${crit.s}$ convient.` : "Compte seulement les lignes qui correspondent exactement.",
            solution: `Les élèves qui conviennent sont : ${sel.map(s => s.name).join(', ')}.\nIl y en a $${count}$.`,
            _v: { k: '6D1.filter', list, crit: { kind: crit.kind, s: crit.s } }
          });
        }
        if (sub === 'double') {
          const cols = this.randChoice([['Cantine', 'Externe'], ['Anglais', 'Allemand', 'Espagnol'], ['Chorale', 'Échecs', 'Robotique'], ['Bus', 'Vélo', 'À pied']]);
          const rows = ['Filles', 'Garçons'];
          const grid = rows.map(() => cols.map(() => this.randInt(3, 18)));
          const rT = grid.map(r => r.reduce((a, b) => a + b, 0));
          const cT = cols.map((_, j) => grid[0][j] + grid[1][j]);
          const all = rT[0] + rT[1];
          const hr = this.randInt(0, 1), hc = this.randInt(0, cols.length - 1);
          const askTotal = Math.random() < 0.3;
          const tableRows = rows.map((rn, i) => [rn, ...grid[i].map((v, j) => (!askTotal && i === hr && j === hc ? '?' : String(v))), askTotal && i === hr ? '?' : String(rT[i])]);
          tableRows.push(['Total', ...cT.map(String), String(all)]);
          const ans = askTotal ? rT[hr] : grid[hr][hc];
          const sol = askTotal
            ? `Le total de la ligne « ${rows[hr]} » est la somme de ses cases : $${grid[hr].join(' + ')} = ${ans}$.`
            : `Dans la colonne « ${cols[hc]} », le total est $${cT[hc]}$ et l'autre case vaut $${grid[1 - hr][hc]}$ :\n$$${cT[hc]} - ${grid[1 - hr][hc]} = ${ans}$$`;
          return base("Tableau à double entrée", {
            statement: `Le tableau ci-dessous répartit les élèves d'un collège selon leur choix et leur genre.${this._6Ftable(['', ...cols, 'Total'], tableRows)}**Quel nombre doit remplacer le « ? » ?**`,
            type: 'exact', answer: String(ans), placeholder: 'Ex : 15',
            hint1: "Dans un tableau à double entrée, chaque total est la somme des cases de sa ligne (ou de sa colonne).",
            hint2: "Utilise la ligne ou la colonne où il ne manque qu'un seul nombre.",
            solution: sol,
            _v: { k: '6D1.double', grid: grid.map((r, i) => r.map((v, j) => (!askTotal && i === hr && j === hc ? null : v))), cT, rT: rT.map((v, i) => (askTotal && i === hr ? null : v)), hr, hc, askTotal }
          });
        }
        const step = this.randChoice([2, 5, 10]);
        const { ctx, cats, vals: raw } = this._6D1pick(this.randInt(4, 5), 1, 9);
        const vals = raw.map(v => v * step);
        const mode = this.randChoice(['sum2', 'total']);
        let i = 0, j = 1;
        if (mode === 'sum2') { [i, j] = this.shuffle(cats.map((_, k) => k)).slice(0, 2); }
        const ans = mode === 'sum2' ? vals[i] + vals[j] : vals.reduce((a, b) => a + b, 0);
        const question = mode === 'sum2'
          ? `Combien de ${ctx.unit} au total pour les catégories « ${cats[i]} » et « ${cats[j]} » réunies ?`
          : `Quel est l'effectif total représenté par ce diagramme ?`;
        return base("Exploiter un diagramme en barres", {
          statement: `Le diagramme en barres ci-dessous représente ${ctx.theme}.\n${this._6Fbars(cats, vals, step, ctx.unit)}\n**${question}**`,
          type: 'exact', answer: String(ans), placeholder: 'Ex : 40',
          hint1: `Lis d'abord la hauteur de chaque barre utile (graduations de $${step}$ en $${step}$).`,
          hint2: "Additionne ensuite les effectifs lus.",
          solution: mode === 'sum2'
            ? `On lit $${vals[i]}$ et $${vals[j]}$ : $${vals[i]} + ${vals[j]} = ${ans}$.`
            : `On lit $${vals.join('$, $')}$ puis on additionne : $${vals.join(' + ')} = ${ans}$.`,
          _v: { k: '6D1.barcompare', vals, mode, i, j }
        });
      }

      // t === 4 : Défi 5ème
      const sub = this.randChoice(['moyenne', 'pourcent', 'filter2', 'etendue']);
      if (sub === 'moyenne') {
        const k = this.randChoice([4, 5, 5, 8, 10]);
        const ctx = this.randChoice([
          { txt: "Voici les notes (sur 20) obtenues par un élève ce trimestre", min: 6, max: 20, u: '' },
          { txt: "Voici les températures (en °C) relevées à midi pendant plusieurs jours", min: 8, max: 26, u: '' },
          { txt: "Voici le nombre de pages lues par Lina chaque soir", min: 5, max: 40, u: '' }
        ]);
        const vals = [];
        for (let i = 0; i < k; i++) vals.push(this.randInt(ctx.min, ctx.max));
        const sum = vals.reduce((a, b) => a + b, 0);
        const mean = this._6r(sum / k);
        return base("Calculer une moyenne", {
          statement: `${ctx.txt} :\n$$${vals.join(' \\; ; \\; ')}$$\n**Calculer la moyenne de cette série** (valeur exacte).`,
          type: 'exact', answer: this._6ans(mean), placeholder: 'Ex : 12,5',
          hint1: "Additionne toutes les valeurs (en les regroupant astucieusement), puis compte combien il y a de valeurs.",
          hint2: "La moyenne d'une série est égale à la somme de toutes les valeurs divisée par le nombre de valeurs.",
          solution: `**Étape 1.** Somme des valeurs : $${vals.join(' + ')} = ${sum}$.\n**Étape 2.** Il y a $${k}$ valeurs : $${sum} \\div ${k} = ${this._6tex(mean)}$.\nLa moyenne de la série est **$${this._6tex(mean)}$**.`,
          _v: { k: '6D1.moyenne', vals }
        });
      }
      if (sub === 'pourcent') {
        const tot = this.randChoice([20, 25, 50]);
        const { ctx, cats } = this._6D1pick(this.randInt(3, 4), 1, 2);
        // Partition de tot en cats.length effectifs ≥ 1
        let vals;
        do {
          vals = cats.map(() => this.randInt(1, tot));
          const s = vals.reduce((a, b) => a + b, 0);
          vals = vals.map(v => Math.max(1, Math.round((v * tot) / s)));
          const diff = tot - vals.reduce((a, b) => a + b, 0);
          vals[0] += diff;
        } while (vals.some(v => v < 1));
        const i = this.randInt(0, cats.length - 1);
        const pct = (vals[i] * 100) / tot;
        return base("Effectif et pourcentage", {
          statement: `Le tableau ci-dessous présente ${ctx.theme}.${this._6Ftable([ctx.col, ...cats, 'Total'], [['Effectif', ...vals.map(String), String(tot)]])}**Quel pourcentage de l'effectif total représente la catégorie « ${cats[i]} » ?** (réponse sans le symbole %)`,
          type: 'exact', answer: this._6ans(pct), placeholder: 'Ex : 30',
          hint1: `La proportion est $\\frac{${vals[i]}}{${tot}}$ ; écris-la avec le dénominateur $100$.`,
          hint2: "Un pourcentage est une proportion écrite avec le dénominateur 100 : on multiplie le numérateur et le dénominateur par un même nombre pour obtenir 100 en bas.",
          solution: `$$\\frac{${vals[i]}}{${tot}} = \\frac{${vals[i]} \\times ${100 / tot}}{${tot} \\times ${100 / tot}} = \\frac{${this._6tex(pct)}}{100}$$\nLa catégorie « ${cats[i]} » représente $${this._6tex(pct)}\\,\\%$ de l'effectif total.`,
          _v: { k: '6D1.pourcent', vals, i, tot }
        });
      }
      if (sub === 'etendue') {
        const n = this.randInt(6, 9);
        const vals = [];
        for (let i = 0; i < n; i++) vals.push(this.randInt(118, 175));
        const e = Math.max(...vals) - Math.min(...vals);
        return base("Étendue d'une série", {
          statement: `Voici les sauts en longueur (en cm) réalisés par des élèves de 6e :\n$$${vals.join(' \\; ; \\; ')}$$\n**Quelle est l'étendue de cette série, c'est-à-dire l'écart entre la plus grande et la plus petite valeur ?**`,
          type: 'exact', answer: String(e), placeholder: 'Ex : 42',
          hint1: "Repère la plus grande valeur et la plus petite valeur de la série.",
          hint2: "Étendue = plus grande valeur − plus petite valeur.",
          solution: `Plus grande valeur : $${Math.max(...vals)}$ ; plus petite : $${Math.min(...vals)}$.\n$$${Math.max(...vals)} - ${Math.min(...vals)} = ${e}$$`,
          _v: { k: '6D1.etendue', vals }
        });
      }
      let list, crit, sel;
      do {
        list = this._6D1students();
        const s1 = this.randChoice([138, 140, 142, 145, 148]);
        const s2 = this.randInt(10, 12);
        crit = { s1, s2, mode: this.randChoice(['and', 'andNot']) };
        sel = list.filter(st => st.h >= s1 && (crit.mode === 'and' ? st.age === s2 : st.age !== s2));
      } while (sel.length === 0);
      const txt = crit.mode === 'and'
        ? `mesurent au moins $${crit.s1}$ cm **et** ont $${crit.s2}$ ans`
        : `mesurent au moins $${crit.s1}$ cm **et** n'ont pas $${crit.s2}$ ans`;
      return base("Filtrer avec deux critères", {
        statement: `Voici des informations sur des élèves d'un club.${this._6D1studentTable(list)}**Combien d'élèves ${txt} ?**`,
        type: 'exact', answer: String(sel.length), placeholder: 'Ex : 3',
        hint1: "Applique d'abord le premier critère, puis garde seulement les élèves qui vérifient aussi le second.",
        hint2: `« Au moins $${crit.s1}$ cm » signifie $${crit.s1}$ cm ou plus.`,
        solution: `Élèves retenus : ${sel.map(s => s.name).join(', ')}.\nIl y en a $${sel.length}$.`,
        _v: { k: '6D1.filter2', list, crit }
      });
    },

    // =====================================================================
    // 6D2 — Probabilités
    // =====================================================================
    _6D2colors: [['rouge', 'rouges'], ['bleue', 'bleues'], ['verte', 'vertes'], ['jaune', 'jaunes'], ['noire', 'noires'], ['blanche', 'blanches']],

    /** Événements sur un dé équilibré à n faces numérotées de 1 à n. */
    _6D2event(n, allowTrivial) {
      const kinds = ['pair', 'impair', 'mult3', 'geq', 'lt', 'eq', 'leq'];
      if (n >= 8) kinds.push('mult4');
      const kind = this.randChoice(kinds);
      let m = 0, txt = '';
      if (kind === 'pair') txt = 'obtenir un nombre pair';
      else if (kind === 'impair') txt = 'obtenir un nombre impair';
      else if (kind === 'mult3') txt = 'obtenir un multiple de 3';
      else if (kind === 'mult4') txt = 'obtenir un multiple de 4';
      else if (kind === 'geq') { m = allowTrivial ? this.randInt(1, n + 2) : this.randInt(2, n); txt = `obtenir un nombre supérieur ou égal à ${m}`; }
      else if (kind === 'lt') { m = allowTrivial ? this.randInt(1, n + 3) : this.randInt(2, n); txt = `obtenir un nombre strictement inférieur à ${m}`; }
      else if (kind === 'leq') { m = allowTrivial ? this.randInt(1, n + 3) : this.randInt(1, n - 1); txt = `obtenir un nombre inférieur ou égal à ${m}`; }
      else { m = allowTrivial ? this.randInt(1, n + 4) : this.randInt(1, n); txt = `obtenir le nombre ${m}`; }
      const fav = [];
      for (let f = 1; f <= n; f++) {
        const ok = kind === 'pair' ? f % 2 === 0 : kind === 'impair' ? f % 2 === 1 : kind === 'mult3' ? f % 3 === 0 : kind === 'mult4' ? f % 4 === 0
          : kind === 'geq' ? f >= m : kind === 'lt' ? f < m : kind === 'leq' ? f <= m : f === m;
        if (ok) fav.push(f);
      }
      return { kind, m, txt, fav };
    },

    _6D2urn() {
      const nc = this.randInt(2, 3);
      const cols = this.shuffle(this._6D2colors).slice(0, nc);
      const counts = cols.map(() => this.randInt(1, 9));
      const desc = cols.map((c, i) => `${counts[i]} boule${counts[i] > 1 ? 's' : ''} ${counts[i] > 1 ? c[1] : c[0]}`);
      const txt = desc.length === 2 ? `${desc[0]} et ${desc[1]}` : `${desc[0]}, ${desc[1]} et ${desc[2]}`;
      return { cols, counts, txt };
    },

    _6D2wheel(sectors) {
      const R = 70, cx = 90, cy = 85, n = sectors.length;
      const fills = { rouge: '#ef4444', bleu: '#3b82f6', vert: '#22c55e', jaune: '#facc15' };
      let inner = '';
      for (let i = 0; i < n; i++) {
        const a0 = (2 * Math.PI * i) / n - Math.PI / 2, a1 = (2 * Math.PI * (i + 1)) / n - Math.PI / 2;
        const x0 = (cx + R * Math.cos(a0)).toFixed(2), y0 = (cy + R * Math.sin(a0)).toFixed(2);
        const x1 = (cx + R * Math.cos(a1)).toFixed(2), y1 = (cy + R * Math.sin(a1)).toFixed(2);
        inner += `<path d="M${cx},${cy} L${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} Z" fill="${fills[sectors[i]]}" fill-opacity="0.8" stroke="#ffffff" stroke-width="2"/>`;
      }
      inner += `<polygon points="${cx - 7},6 ${cx + 7},6 ${cx},20" fill="var(--text-main, #334155)"/>`;
      return this._6svg(180, 170, inner, 200);
    },

    generate6D2(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const base = (title, extra) => Object.assign({ chapterId: '6D2', tier: t, title: t === 4 ? `Défi 5ème : ${title}` : title, skill: 'Raisonner' }, extra);
      const LBL = { c: 'Certain', i: 'Impossible', p: 'Possible (ni certain, ni impossible)' };

      if (t === 1) {
        const sub = this.randChoice(['vocabDe', 'vocabUrne', 'between', 'de']);
        if (sub === 'vocabDe') {
          const n = this.randChoice([6, 6, 8, 10, 12]);
          const ev = this._6D2event(n, true);
          const k = ev.fav.length;
          const ans = k === 0 ? LBL.i : k === n ? LBL.c : LBL.p;
          const q = base("Vocabulaire du hasard (dé)", {
            statement: `On lance un dé équilibré à ${n} faces numérotées de 1 à ${n}.\nL'événement « ${ev.txt} » est-il certain, impossible ou possible ?`,
            hint1: "Un événement certain se réalise toujours ; un événement impossible ne se réalise jamais.",
            hint2: `Liste les faces du dé (de 1 à ${n}) qui réalisent l'événement.`,
            solution: k === 0 ? `Aucune face ne convient : l'événement est **impossible**.` : k === n ? `Toutes les faces conviennent : l'événement est **certain**.` : `Certaines faces conviennent (${ev.fav.join(', ')}) mais pas toutes : l'événement est **possible** sans être certain.`,
            _v: { k: '6D2.vocabDe', n, kind: ev.kind, m: ev.m }
          });
          return this._6mcq(q, ans, [LBL.c, LBL.i, LBL.p]);
        }
        if (sub === 'vocabUrne') {
          const u = this._6D2urn();
          const mode = this.randChoice(['present', 'absent', 'any']);
          let color, txtEv;
          if (mode === 'present') { const j = this.randInt(0, u.cols.length - 1); color = u.cols[j][0]; txtEv = `tirer une boule ${color}`; }
          else if (mode === 'absent') { const others = this._6D2colors.filter(c => !u.cols.includes(c)); color = this.randChoice(others)[0]; txtEv = `tirer une boule ${color}`; }
          else { color = null; txtEv = `tirer une boule ${u.cols.map(c => c[0]).join(' ou ')}`; }
          const fav = color === null ? u.counts.reduce((a, b) => a + b, 0) : (u.cols.find(c => c[0] === color) ? u.counts[u.cols.findIndex(c => c[0] === color)] : 0);
          const tot = u.counts.reduce((a, b) => a + b, 0);
          const ans = fav === 0 ? LBL.i : fav === tot ? LBL.c : LBL.p;
          const q = base("Vocabulaire du hasard (urne)", {
            statement: `Une urne opaque contient ${u.txt}. On tire une boule au hasard.\nL'événement « ${txtEv} » est-il certain, impossible ou possible ?`,
            hint1: "Regarde quelles boules de l'urne réalisent l'événement.",
            hint2: "Un événement réalisé par toutes les issues est certain ; un événement réalisé par aucune issue ne peut jamais se produire ; sinon, il est seulement possible.",
            solution: fav === 0 ? "Aucune boule de l'urne n'est de cette couleur : l'événement ne peut jamais se réaliser, il est **impossible**." : fav === tot ? "Toutes les boules de l'urne réalisent l'événement : il se réalise à coup sûr, il est **certain**." : `$${fav}$ boule${fav > 1 ? 's' : ''} sur $${tot}$ réalise${fav > 1 ? 'nt' : ''} l'événement, mais pas toutes : l'événement est **possible** sans être certain.`,
            _v: { k: '6D2.vocabUrne', cols: u.cols.map(c => c[0]), counts: u.counts, color }
          });
          return this._6mcq(q, ans, [LBL.c, LBL.i, LBL.p]);
        }
        if (sub === 'between') {
          const good = this.randChoice([this.randInt(1, 99) / 100, this.randInt(1, 9) / 10, 0, 1]);
          const bads = this.shuffle([
            this.randInt(101, 190) / 100, this.randInt(11, 30) / 10, -this.randInt(1, 9) / 10, -this.randInt(1, 99) / 100, this.randInt(2, 15)
          ]).slice(0, 3);
          const opts = bads.map(x => this._6ans(x));
          const evt = this.randChoice([
            'tirer une boule rouge dans une urne', 'il pleut demain', 'le bus arrive en retard',
            'tirer un jeton gagnant dans un sac', 'la flèche de la roue s\'arrête sur le bleu',
            'gagner à une loterie', 'tirer une voyelle dans un sac de lettres'
          ]);
          const nom = this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan']);
          const stmt = this.randChoice([
            "Parmi les nombres suivants, **lequel peut être la probabilité d'un événement ?**",
            `Quatre élèves ont estimé la probabilité de l'événement « ${evt} ». Un seul résultat est possible. **Lequel ?**`,
            `${nom} cherche la probabilité de l'événement « ${evt} ». **Quel nombre peut être cette probabilité ?**`
          ]);
          const q = base("Une probabilité est comprise entre 0 et 1", {
            statement: stmt,
            hint1: "Une probabilité est toujours un nombre compris entre $0$ et $1$.",
            hint2: "Élimine les nombres négatifs et les nombres plus grands que $1$.",
            solution: `Une probabilité est comprise entre $0$ et $1$ (inclus). Seul $${this._6tex(good)}$ convient.`,
            _v: { k: '6D2.between', cands: [good, ...bads] }
          });
          return this._6mcq(q, this._6ans(good), opts);
        }
        const n = this.randChoice([4, 6, 8, 10, 12, 20]);
        const f = this.randInt(1, n);
        return base("Probabilité d'obtenir une face", {
          statement: `On lance un dé équilibré à ${n} faces numérotées de 1 à ${n}.\n**Quelle est la probabilité d'obtenir la face ${f} ?** (réponse sous forme de fraction a/b)`,
          type: 'exact', answer: `1/${n}`, placeholder: 'Ex : 1/6',
          hint1: "Le dé est équilibré : toutes les faces ont la même chance de sortir.",
          hint2: `Il y a $${n}$ issues possibles et une seule est favorable.`,
          solution: `Une issue favorable sur $${n}$ issues équiprobables :\n$$P = \\frac{1}{${n}}$$`,
          _v: { k: '6D2.de', n, f }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['urne', 'roue', 'deEvt']);
        if (sub === 'urne') {
          const u = this._6D2urn();
          const tot = u.counts.reduce((a, b) => a + b, 0);
          let j;
          do { j = this.randInt(0, u.cols.length - 1); } while (u.counts[j] === tot);
          const k = u.counts[j];
          return base("Probabilité dans une urne", {
            statement: `Une urne opaque contient ${u.txt}, indiscernables au toucher. On tire une boule au hasard.\n**Quelle est la probabilité de tirer une boule ${u.cols[j][0]} ?** (fraction irréductible a/b)`,
            type: 'exact', answer: this._6fracAns(k, tot), placeholder: 'Ex : 2/5',
            hint1: "Compte toutes les boules de l'urne, puis celles de la couleur demandée.",
            hint2: "Quand les issues sont équiprobables, probabilité d'un événement = nombre d'issues favorables ÷ nombre total d'issues.",
            solution: `**Étape 1.** Les boules sont indiscernables au toucher : chaque boule a la même chance d'être tirée. Il y a $${u.counts.join(' + ')} = ${tot}$ boules en tout.\n**Étape 2.** $${k}$ d'entre elles sont ${k > 1 ? u.cols[j][1] : u.cols[j][0]} : $P = \\frac{${k}}{${tot}}${this.gcd(k, tot) > 1 ? ` = ${this.formatFraction(k, tot)}` : ''}$.\nLa probabilité de tirer une boule ${u.cols[j][0]} est **$${this.formatFraction(k, tot)}$**.`,
            _v: { k: '6D2.urne', counts: u.counts, j }
          });
        }
        if (sub === 'roue') {
          const n = this.randChoice([4, 5, 6, 8, 10]);
          const pal = this.shuffle(['rouge', 'bleu', 'vert', 'jaune']).slice(0, this.randInt(2, 3));
          let sectors;
          do { sectors = Array.from({ length: n }, () => this.randChoice(pal)); } while (new Set(sectors).size < 2);
          const color = this.randChoice([...new Set(sectors)]);
          const k = sectors.filter(s => s === color).length;
          return base("Probabilité avec une roue de loterie", {
            statement: `Une roue de loterie est partagée en ${n} secteurs identiques. On la fait tourner et on regarde le secteur indiqué par la flèche.\n${this._6D2wheel(sectors)}\n**Quelle est la probabilité que la flèche s'arrête sur un secteur ${color} ?** (fraction irréductible a/b)`,
            type: 'exact', answer: this._6fracAns(k, n), placeholder: 'Ex : 3/8',
            hint1: "Les secteurs sont identiques : chacun a la même chance d'être désigné.",
            hint2: `Compte les secteurs de couleur ${color} parmi les $${n}$ secteurs.`,
            solution: `Il y a $${k}$ secteurs ${color}${k > 1 ? 's' : ''} sur $${n}$ :\n$$P = \\frac{${k}}{${n}}${this.gcd(k, n) > 1 ? ` = ${this.formatFraction(k, n)}` : ''}$$`,
            _v: { k: '6D2.roue', sectors, color }
          });
        }
        const n = this.randChoice([6, 8, 10, 12]);
        let ev;
        do { ev = this._6D2event(n, false); } while (ev.fav.length === 0 || ev.fav.length === n);
        const k = ev.fav.length;
        return base("Probabilité d'un événement avec un dé", {
          statement: `On lance un dé équilibré à ${n} faces numérotées de 1 à ${n}.\n**Quelle est la probabilité de l'événement « ${ev.txt} » ?** (fraction irréductible a/b)`,
          type: 'exact', answer: this._6fracAns(k, n), placeholder: 'Ex : 1/2',
          hint1: "Liste les issues favorables à l'événement.",
          hint2: `Il y a $${n}$ issues équiprobables en tout.`,
          solution: `Issues favorables : ${ev.fav.join(' ; ')}, soit $${k}$ issue${k > 1 ? 's' : ''} sur $${n}$.\n$$P = \\frac{${k}}{${n}}${this.gcd(k, n) > 1 ? ` = ${this.formatFraction(k, n)}` : ''}$$`,
          _v: { k: '6D2.deEvt', n, kind: ev.kind, m: ev.m }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['contraire', 'compare', 'lettres']);
        if (sub === 'contraire') {
          const u = this._6D2urn();
          const tot = u.counts.reduce((a, b) => a + b, 0);
          const j = this.randInt(0, u.cols.length - 1);
          const k = tot - u.counts[j];
          return base("Probabilité de « ne pas obtenir »", {
            statement: `Une urne opaque contient ${u.txt}. On tire une boule au hasard.\n**Quelle est la probabilité de ne PAS tirer une boule ${u.cols[j][0]} ?** (fraction irréductible a/b)`,
            type: 'exact', answer: this._6fracAns(k, tot), placeholder: 'Ex : 3/4',
            hint1: `Compte les boules qui ne sont pas ${u.cols[j][1]}.`,
            hint2: "Probabilité = nombre d'issues favorables ÷ nombre total d'issues ; ici les issues favorables sont toutes les boules d'une autre couleur.",
            solution: `Boules qui ne sont pas ${u.cols[j][1]} : $${tot} - ${u.counts[j]} = ${k}$.\n$$P = \\frac{${k}}{${tot}}${this.gcd(k, tot) > 1 ? ` = ${this.formatFraction(k, tot)}` : ''}$$`,
            _v: { k: '6D2.contraire', counts: u.counts, j }
          });
        }
        if (sub === 'compare') {
          const r1 = this.randInt(1, 8), b1 = this.randInt(1, 8);
          let r2 = this.randInt(1, 8), b2 = this.randInt(1, 8);
          if (Math.random() < 0.2) { const m = this.randInt(2, 3); r2 = r1 * m; b2 = b1 * m; }
          const A = "Urne A", B = "Urne B", E = "Les deux urnes donnent la même chance";
          const lhs = r1 * (r2 + b2), rhs = r2 * (r1 + b1);
          const ans = lhs > rhs ? A : lhs < rhs ? B : E;
          const q = base("Comparer deux probabilités", {
            statement: `L'urne A contient ${r1} boule${r1 > 1 ? 's' : ''} rouge${r1 > 1 ? 's' : ''} et ${b1} boule${b1 > 1 ? 's' : ''} bleue${b1 > 1 ? 's' : ''}.\nL'urne B contient ${r2} boule${r2 > 1 ? 's' : ''} rouge${r2 > 1 ? 's' : ''} et ${b2} boule${b2 > 1 ? 's' : ''} bleue${b2 > 1 ? 's' : ''}.\nOn veut tirer une boule rouge. **Dans quelle urne a-t-on le plus de chances d'y parvenir ?**`,
            hint1: "Calcule la probabilité de tirer une boule rouge dans chaque urne.",
            hint2: "Pour comparer deux fractions, mets-les au même dénominateur.",
            solution: `Urne A : $P = \\frac{${r1}}{${r1 + b1}}$. Urne B : $P = \\frac{${r2}}{${r2 + b2}}$.\nAu même dénominateur : $\\frac{${r1 * (r2 + b2)}}{${(r1 + b1) * (r2 + b2)}}$ et $\\frac{${r2 * (r1 + b1)}}{${(r1 + b1) * (r2 + b2)}}$.\nRéponse : **${ans}**.`,
            _v: { k: '6D2.compare', r1, b1, r2, b2 }
          });
          return this._6mcq(q, ans, [A, B, E]);
        }
        const words = ['MATHEMATIQUES', 'GEOMETRIE', 'FRACTION', 'PROBABILITE', 'TRIANGLE', 'DECIMAL', 'CERCLE', 'COLLEGE', 'SIXIEME', 'PERIMETRE', 'ALGORITHME', 'RECTANGLE'];
        const w = this.randChoice(words);
        const mode = this.randChoice(['voyelle', 'consonne', 'lettre']);
        let letter = null;
        if (mode === 'lettre') letter = this.randChoice(w.split(''));
        const isV = ch => 'AEIOUY'.includes(ch);
        const k = w.split('').filter(ch => mode === 'voyelle' ? isV(ch) : mode === 'consonne' ? !isV(ch) : ch === letter).length;
        const evTxt = mode === 'voyelle' ? 'tirer une voyelle' : mode === 'consonne' ? 'tirer une consonne' : `tirer la lettre ${letter}`;
        return base("Probabilité avec des lettres", {
          statement: `On écrit chaque lettre du mot **${w}** sur un carton (un carton par lettre). On mélange les cartons et on en tire un au hasard.\n**Quelle est la probabilité de ${evTxt} ?** (fraction irréductible a/b)${mode !== 'lettre' ? '\n*(Voyelles : A, E, I, O, U, Y.)*' : ''}`,
          type: 'exact', answer: this._6fracAns(k, w.length), placeholder: 'Ex : 2/7',
          hint1: "Compte les lettres du mot (un carton par lettre, lettres répétées comprises), puis les cartons qui réalisent l'événement.",
          hint2: "Chaque carton a la même chance d'être tiré : probabilité = nombre de cartons favorables ÷ nombre total de cartons.",
          solution: `Il y a $${k}$ carton${k > 1 ? 's' : ''} favorable${k > 1 ? 's' : ''} sur $${w.length}$ :\n$$P = \\frac{${k}}{${w.length}}${this.gcd(k, w.length) > 1 ? ` = ${this.formatFraction(k, w.length)}` : ''}$$`,
          _v: { k: '6D2.lettres', w, mode, letter }
        });
      }

      // t === 4 : Défi 5ème
      const sub = this.randChoice(['freq', 'ajout', 'freqProba']);
      if (sub === 'freq') {
        const N = this.randChoice([10, 20, 25, 40, 50, 100, 200]);
        const c = this.randInt(1, N - 1);
        const obj = this.randChoice([['une pièce de monnaie', 'Pile'], ['un dé à six faces', 'le 6'], ['une punaise', 'la pointe en l\'air'], ['un dé à quatre faces', 'le 1']]);
        const f = this._6r(c / N);
        return base("Fréquence observée", {
          statement: `On lance ${obj[0]} ${N} fois et on obtient ${obj[1]} ${c} fois.\n**Quelle est la fréquence d'apparition de ${obj[1]} ?** (écriture décimale)`,
          type: 'exact', answer: this._6ans(f), placeholder: 'Ex : 0,35',
          hint1: "Écris la fréquence sous forme de fraction, puis cherche son écriture décimale (dénominateur 10, 100 ou 1 000).",
          hint2: "La fréquence d'apparition d'un résultat est le quotient : nombre de fois où il est apparu ÷ nombre total d'essais.",
          solution: `**Étape 1.** ${obj[1].charAt(0).toUpperCase() + obj[1].slice(1)} est apparu $${c}$ fois sur $${N}$ lancers : $f = \\frac{${c}}{${N}}$.\n**Étape 2.** On divise : $${c} \\div ${N} = ${this._6tex(f)}$.\nLa fréquence observée est **$${this._6tex(f)}$**.`,
          _v: { k: '6D2.freq', c, N }
        });
      }
      if (sub === 'ajout') {
        const r = this.randInt(1, 6);
        const target = this.randChoice([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4]]);
        // On cherche le nombre de bleues b et on ajoute x rouges : (r + x) / (r + x + b) = p/q
        const [p, qd] = target;
        let m, b, x;
        do {
          m = this.randInt(1, 8);
          b = m * (qd - p);
          x = p * m - r;
        } while (x < 1);
        return base("Ajouter des boules pour atteindre une probabilité", {
          statement: `Une urne contient ${r} boule${r > 1 ? 's' : ''} rouge${r > 1 ? 's' : ''} et ${b} boules bleues. On ajoute des boules rouges.\n**Combien de boules rouges faut-il ajouter pour que la probabilité de tirer une boule rouge soit égale à $\\frac{${p}}{${qd}}$ ?**`,
          type: 'exact', answer: String(x), placeholder: 'Ex : 4',
          hint1: "Le nombre de boules bleues ne change pas : cherche combien il doit y avoir de boules en tout pour que les bleues occupent la bonne part.",
          hint2: `Tirer une rouge et tirer une bleue sont deux événements contraires : la somme de leurs probabilités est celle de l'événement certain. Si les rouges forment $${p}$ parts sur $${qd}$, les bleues forment les parts restantes.`,
          solution: `Il faut $${p} \\times ${m} = ${r + x}$ boules rouges pour $${b}$ bleues (total $${r + x + b}$, et $\\frac{${r + x}}{${r + x + b}} = \\frac{${p}}{${qd}}$).\nOn doit ajouter $${r + x} - ${r} = ${x}$ boules rouges.`,
          _v: { k: '6D2.ajout', r, b, p, q: qd }
        });
      }
      // freqProba : quel résultat de simulation est le plus cohérent avec la probabilité ?
      const n = this.randChoice([2, 3, 4, 5, 6, 8, 10]);
      const N = this.randChoice([120, 300, 600, 1200].concat(n <= 6 ? [60] : []).filter(x => x % n === 0));
      const exp = N / n;
      const good = exp + this.randInt(-Math.floor(exp * 0.06), Math.floor(exp * 0.06));
      // Distracteurs : « 1 chance sur n » lu comme n succès, moitié des lancers, résultats trop éloignés
      const bad = [];
      for (const b of this.shuffle([n, Math.round(N / 2), Math.round(exp * 0.4), Math.round(exp * 1.8), Math.round(exp * 2.6)])) {
        if (bad.length < 3 && !bad.includes(b) && Math.abs(b - exp) > Math.abs(good - exp) + 2) bad.push(b);
      }
      const objTxt = this.randChoice({
        2: ['une pièce équilibrée (Pile ou Face) et on compte les « Pile »', 'une pièce équilibrée (Pile ou Face) et on compte les « Face »'],
        3: ['une roue équilibrée à 3 secteurs identiques (rouge, vert, bleu) et on compte les « rouge »'],
        4: ['un dé équilibré à 4 faces et on compte les « 4 »', 'une roue équilibrée à 4 secteurs identiques (rouge, vert, bleu, jaune) et on compte les « jaune »'],
        5: ['une roue équilibrée à 5 secteurs identiques numérotés de 1 à 5 et on compte les « 5 »'],
        6: ['un dé équilibré à 6 faces et on compte les « 6 »', 'un dé équilibré à 6 faces et on compte les « 1 »'],
        8: ['un dé équilibré à 8 faces et on compte les « 8 »'],
        10: ['une roue équilibrée à 10 secteurs identiques numérotés de 0 à 9 et on compte les « 7 »']
      }[n]);
      const nom = this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan']);
      const opts = bad.map(String);
      const q = base("Fréquence observée et probabilité", {
        statement: this.randChoice([
          `On lance ${N} fois ${objTxt}.\n**Lequel de ces nombres de succès est le plus vraisemblable ?**`,
          `${nom} fait simuler ${N} lancers par un tableur : on lance ${objTxt}.\n**Quel nombre de succès a-t-on le plus de chances d'observer ?**`
        ]),
        hint1: `La probabilité d'un succès est $\\frac{1}{${n}}$.`,
        hint2: 'Sur un grand nombre d\'essais, la fréquence observée d\'un résultat se rapproche de sa probabilité.',
        solution: `**Étape 1.** La probabilité d'un succès est $\\frac{1}{${n}}$. Sur ${N} essais, la fréquence observée doit être proche de $\\frac{1}{${n}}$, donc le nombre de succès proche de $\\frac{1}{${n}} \\times ${N} = ${exp}$.\n**Étape 2.** Parmi les propositions, la plus proche de $${exp}$ est $${good}$ (les autres sont beaucoup trop éloignées).\nLe nombre le plus vraisemblable est **$${good}$**.`,
        _v: { k: '6D2.freqProba', N, n, cands: [good, ...bad] }
      });
      return this._6mcq(q, String(good), opts);
    },

    // =====================================================================
    // 6A1 — Initiation à la pensée informatique
    // =====================================================================
    generate6A1(tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const base = (title, extra) => Object.assign({ chapterId: '6A1', tier: t, title: t === 4 ? `Défi 5ème : ${title}` : title, skill: 'Modéliser' }, extra);
      const gridIntro = (start) => `Un robot R se déplace sur le quadrillage ci-dessous (colonnes A à H, lignes 1 à 8). Il part de la case **${this._6Fcell(start)}**.\n${this._6Fgrid(start)}`;
      const progList = (moves) => moves.map(m => `- avancer de ${this._6FmoveTxt(m)}`).join('\n');

      if (t === 1) {
        const sub = this.randChoice(['case', 'calc', 'pas']);
        if (sub === 'case') {
          const { start, moves, end } = this._6FrandomProg(this.randInt(2, 3), 4);
          const q = base("Exécuter une séquence d'instructions", {
            statement: `${gridIntro(start)}\nIl exécute dans l'ordre les instructions suivantes :\n\n${progList(moves)}\n\n**Sur quelle case arrive-t-il ?**`,
            hint1: "Exécute les instructions une par une, dans l'ordre, en suivant le robot avec ton doigt.",
            hint2: "Droite/gauche : on change de colonne (lettre). Haut/bas : on change de ligne (numéro).",
            solution: `On suit le trajet case par case : le robot arrive en **${this._6Fcell(end)}**.`,
            _v: { k: '6A1.case', start, moves, reps: 1 }
          });
          return this._6mcq(q, this._6Fcell(end), this._6FcellDistractors(start, moves, 1, end));
        }
        if (sub === 'calc') {
          const x = this.randInt(2, 15);
          const op = this.randChoice(['+', '-', '*']);
          const a = op === '*' ? this.randInt(2, 9) : this.randInt(2, 20);
          const xx = op === '-' ? x + a : x;
          const res = op === '+' ? xx + a : op === '-' ? xx - a : xx * a;
          const sym = op === '*' ? '\\times' : op;
          const html = this.renderScratch([
            'quand drapeau cliqué',
            'demander [Choisis un nombre] et attendre',
            'mettre [N] à (réponse)',
            `mettre [N] à (N ${op} ${a})`,
            'dire (N)'
          ]);
          return base("Programme de calcul (Scratch)", {
            statement: `On exécute le script suivant :\n${html}\n**Si l'on répond $${xx}$, quel nombre le lutin dit-il ?**`,
            type: 'exact', answer: String(res), placeholder: 'Ex : 12',
            hint1: "La variable N prend d'abord la valeur de la réponse, puis elle est modifiée.",
            hint2: "Le bloc « mettre N à (…) » remplace l'ancienne valeur de N par le résultat du calcul entre parenthèses.",
            solution: `N vaut d'abord $${xx}$, puis $${xx} ${sym} ${a} = ${res}$. Le lutin dit $${res}$.`,
            _v: { k: '6A1.calc', x: xx, ops: [[op, a]] }
          });
        }
        const { start, moves } = this._6FrandomProg(this.randInt(3, 4), 4);
        const total = moves.reduce((s, m) => s + m[1], 0);
        return base("Compter les déplacements", {
          statement: `${gridIntro(start)}\nIl exécute les instructions :\n\n${progList(moves)}\n\n**Combien de cases le robot a-t-il parcourues au total ?**`,
          type: 'exact', answer: String(total), placeholder: 'Ex : 9',
          hint1: "Additionne les nombres de cases de chaque instruction.",
          hint2: "Le sens du déplacement ne change pas le nombre de cases parcourues.",
          solution: `$$${moves.map(m => m[1]).join(' + ')} = ${total}$$\nLe robot a parcouru $${total}$ cases.`,
          _v: { k: '6A1.pas', moves }
        });
      }

      if (t === 2) {
        const sub = this.randChoice(['repete', 'poly', 'score']);
        if (sub === 'repete') {
          const reps = this.randInt(2, 3);
          const { start, moves, end } = this._6FrandomProg(2, 2, reps);
          const q = base("Répéter une séquence (boucle)", {
            statement: `${gridIntro(start)}\nIl exécute le programme suivant :\n\n**Répéter ${reps} fois :**\n${progList(moves)}\n\n**Sur quelle case arrive-t-il ?**`,
            hint1: `Les deux instructions sont exécutées ${reps} fois de suite, dans l'ordre.`,
            hint2: "Tu peux calculer le déplacement d'une seule répétition puis le multiplier.",
            solution: `Une répétition déplace le robot ; après ${reps} répétitions il arrive en **${this._6Fcell(end)}**.`,
            _v: { k: '6A1.case', start, moves, reps }
          });
          return this._6mcq(q, this._6Fcell(end), this._6FcellDistractors(start, moves, reps, end));
        }
        if (sub === 'poly') {
          const P = this.randChoice([[3, 120, 'un triangle équilatéral'], [4, 90, 'un carré'], [5, 72, 'un pentagone régulier'], [6, 60, 'un hexagone régulier'], [8, 45, 'un octogone régulier']]);
          const d = this.randChoice([20, 25, 30, 40, 45, 50, 60, 75, 80, 100]);
          const html = this.renderScratch([
            'quand drapeau cliqué',
            'stylo en position d\'écriture',
            `répéter ${P[0]} fois`,
            `    avancer de ${d} pas`,
            `    tourner droite de ${P[1]} degrés`
          ]);
          return base("Figure tracée par une boucle", {
            statement: `Le lutin exécute le script suivant et trace ${P[2]}.\n${html}\n**Quelle est la longueur totale (en pas) du tracé ?**`,
            type: 'exact', answer: String(P[0] * d), placeholder: 'Ex : 160',
            hint1: `Le bloc « avancer de ${d} pas » est exécuté ${P[0]} fois.`,
            hint2: "Une boucle « répéter n fois » exécute n fois les blocs qu'elle contient.",
            solution: `$$${P[0]} \\times ${d} = ${P[0] * d}$$\nLe tracé mesure $${P[0] * d}$ pas.`,
            _v: { k: '6A1.poly', n: P[0], d }
          });
        }
        const s0 = this.randInt(0, 20), k = this.randInt(3, 10), a = this.randInt(2, 15);
        const html = this.renderScratch([
          'quand drapeau cliqué',
          `mettre [S] à ${s0}`,
          `répéter ${k} fois`,
          `    ajouter ${a} à [S]`,
          'dire (S)'
        ]);
        return base("Variable et boucle", {
          statement: `On exécute le script suivant :\n${html}\n**Quel nombre le lutin dit-il à la fin ?**`,
          type: 'exact', answer: String(s0 + k * a), placeholder: 'Ex : 50',
          hint1: `On ajoute $${a}$ à S, et cela $${k}$ fois.`,
          hint2: "« Ajouter a à S » augmente la valeur de S de a ; dans une boucle « répéter n fois », cela se produit n fois.",
          solution: `$$S = ${s0} + ${k} \\times ${a} = ${s0} + ${k * a} = ${s0 + k * a}$$`,
          _v: { k: '6A1.score', s0, n: k, a }
        });
      }

      if (t === 3) {
        const sub = this.randChoice(['depart', 'calc2', 'nbRep']);
        if (sub === 'depart') {
          const { start, moves, end } = this._6FrandomProg(3, 3);
          const q = base("Retrouver la case de départ", {
            statement: `Un robot se déplace sur un quadrillage (colonnes A à H, lignes 1 à 8, la ligne 1 étant en bas). Il exécute les instructions :\n\n${progList(moves)}\n\nIl arrive sur la case **${this._6Fcell(end)}**. **De quelle case est-il parti ?**`,
            hint1: "Remonte le programme à l'envers : pars de la case d'arrivée et effectue les déplacements inverses, en commençant par la dernière instruction.",
            hint2: "L'inverse de « droite » est « gauche », l'inverse de « haut » est « bas ».",
            solution: `En inversant les déplacements depuis ${this._6Fcell(end)}, on retrouve la case de départ **${this._6Fcell(start)}**.`,
            _v: { k: '6A1.depart', end, moves }
          });
          const inv = moves.map(([d, n]) => [d, -n]);
          const wrong = this._6FcellDistractors(end, inv, 1, start).filter(c => c !== this._6Fcell(end));
          return this._6mcq(q, this._6Fcell(start), [...wrong, this._6Fcell(end)]);
        }
        if (sub === 'calc2') {
          const x = this.randInt(2, 12);
          const pool = [['+', this.randInt(2, 12)], ['*', this.randInt(2, 6)], ['-', this.randInt(1, 9)]];
          const ops = this.shuffle(pool).slice(0, this.randChoice([2, 3]));
          // éviter les résultats négatifs
          let v = x;
          for (const [o, a] of ops) v = o === '+' ? v + a : o === '-' ? v - a : v * a;
          if (v < 0) ops.reverse();
          let val = x;
          const steps = [];
          for (const [o, a] of ops) {
            const nv = o === '+' ? val + a : o === '-' ? val - a : val * a;
            steps.push(`$${val} ${o === '*' ? '\\times' : o} ${a} = ${nv}$`);
            val = nv;
          }
          const html = this.renderScratch([
            'quand drapeau cliqué',
            'demander [Choisis un nombre] et attendre',
            'mettre [N] à (réponse)',
            ...ops.map(([o, a]) => `mettre [N] à (N ${o} ${a})`),
            'dire (N)'
          ]);
          return base("Programme de calcul à plusieurs étapes", {
            statement: `On exécute le script suivant :\n${html}\n**Si l'on répond $${x}$, quel nombre le lutin dit-il ?**`,
            type: 'exact', answer: String(val), placeholder: 'Ex : 30',
            hint1: "Les blocs s'exécutent de haut en bas : chaque calcul utilise la nouvelle valeur de N.",
            hint2: "Le bloc « mettre N à (…) » remplace l'ancienne valeur de N par le résultat du calcul entre parenthèses.",
            solution: `Étapes : ${steps.join(' ; puis ')}.\nLe lutin dit $${val}$.`,
            _v: { k: '6A1.calc', x, ops }
          });
        }
        const d = this.randInt(1, 3);
        const k = this.randInt(2, Math.floor(7 / d));
        const horiz = Math.random() < 0.5;
        let start, target;
        if (horiz) { const c = this.randInt(1, 8 - k * d); const r = this.randInt(1, 8); start = [c, r]; target = [c + k * d, r]; }
        else { const r = this.randInt(1, 8 - k * d); const c = this.randInt(1, 8); start = [c, r]; target = [c, r + k * d]; }
        const dirTxt = horiz ? 'vers la droite (→)' : 'vers le haut (↑)';
        return base("Combien de répétitions ?", {
          statement: `Un robot part de la case **${this._6Fcell(start)}** et doit atteindre la case **${this._6Fcell(target)}**.\n${this._6Fgrid(start, target)}\nOn utilise le programme « **répéter ? fois : avancer de ${d} case${d > 1 ? 's' : ''} ${dirTxt}** ».\n**Par quel nombre faut-il remplacer le « ? » ?**`,
          type: 'exact', answer: String(k), placeholder: 'Ex : 3',
          hint1: "Compte le nombre de cases qui séparent le départ de l'arrivée.",
          hint2: `Divise cette distance par $${d}$.`,
          solution: `Distance à parcourir : $${k * d}$ case${k * d > 1 ? 's' : ''}. $${k * d} \\div ${d} = ${k}$ : il faut répéter $${k}$ fois.`,
          _v: { k: '6A1.nbRep', start, target, d }
        });
      }

      // t === 4 : Défi 5ème
      const sub = this.randChoice(['condition', 'angle', 'imbrique', 'choixProg']);
      if (sub === 'condition') {
        const s = this.randInt(5, 30), a = this.randInt(2, 9), b = this.randInt(2, 6);
        const x = this.randInt(1, 40);
        const mode = this.randChoice(['sup', 'inf']);
        const cond = mode === 'sup' ? x > s : x < s;
        const res = cond ? x * b : x + a;
        const html = this.renderScratch([
          'quand drapeau cliqué',
          'demander [Choisis un nombre] et attendre',
          'mettre [N] à (réponse)',
          `si (N ${mode === 'sup' ? '>' : '<'} ${s}) alors`,
          `    mettre [N] à (N * ${b})`,
          'sinon',
          `    ajouter ${a} à [N]`,
          'dire (N)'
        ]);
        return base("Instruction conditionnelle (Scratch)", {
          statement: `On exécute le script suivant :\n${html}\n**Si l'on répond $${x}$, quel nombre le lutin dit-il ?**`,
          type: 'exact', answer: String(res), placeholder: 'Ex : 24',
          hint1: `Teste d'abord la condition : $${x}$ est-il strictement ${mode === 'sup' ? 'supérieur' : 'inférieur'} à $${s}$ ?`,
          hint2: "Dans un bloc « si … alors … sinon », une seule des deux parties est exécutée : celle du « alors » si la condition est vraie, celle du « sinon » si elle est fausse.",
          solution: cond
            ? `N vaut $${x}$ : la condition est vraie, donc on exécute la partie « alors » et N devient $${x} \\times ${b} = ${res}$.\nLe lutin dit $${res}$.`
            : `N vaut $${x}$ : la condition est fausse, donc on exécute la partie « sinon » et N devient $${x} + ${a} = ${res}$.\nLe lutin dit $${res}$.`,
          _v: { k: '6A1.condition', x, s, a, b, mode }
        });
      }
      if (sub === 'angle') {
        const P = this.randChoice([[3, 'un triangle équilatéral'], [4, 'un carré'], [5, 'un pentagone régulier'], [6, 'un hexagone régulier'], [8, 'un octogone régulier'], [9, 'un ennéagone régulier'], [10, 'un décagone régulier'], [12, 'un dodécagone régulier']]);
        const d = this.randChoice([30, 40, 50, 60, 80]);
        const html = this.renderScratch([
          'quand drapeau cliqué',
          `répéter ${P[0]} fois`,
          `    avancer de ${d} pas`,
          '    tourner droite de ? degrés'
        ]);
        return base("Angle de rotation pour un polygone régulier", {
          statement: `On veut que le lutin trace ${P[1]} (${P[0]} côtés) avec le script :\n${html}\n**Par quel angle (en degrés) faut-il remplacer le « ? » ?**`,
          type: 'exact', answer: String(360 / P[0]), placeholder: 'Ex : 90',
          hint1: "Après avoir tracé toute la figure, le lutin a fait un tour complet sur lui-même : $360^\\circ$.",
          hint2: `Ce tour complet est partagé en $${P[0]}$ rotations égales.`,
          solution: `**Étape 1.** Pour tracer la figure fermée, le lutin effectue $${P[0]}$ rotations identiques et revient dans sa direction de départ : il a tourné d'un tour complet, soit $360^\\circ$.\n**Étape 2.** $360^\\circ \\div ${P[0]} = ${360 / P[0]}^\\circ$.\nIl faut remplacer « ? » par **$${360 / P[0]}$**.`,
          _v: { k: '6A1.angle', n: P[0] }
        });
      }
      if (sub === 'imbrique') {
        const k1 = this.randInt(2, 5), k2 = this.randInt(2, 4), d = this.randChoice([5, 10, 15, 20, 25]), e = this.randInt(0, 1) ? this.randChoice([10, 20, 30]) : 0;
        const total = k1 * (k2 * d + e);
        const html = this.renderScratch([
          'quand drapeau cliqué',
          `répéter ${k1} fois`,
          `    répéter ${k2} fois`,
          `        avancer de ${d} pas`,
          ...(e ? [`    avancer de ${e} pas`] : []),
          '    tourner droite de 90 degrés'
        ]);
        return base("Boucles imbriquées (Scratch)", {
          statement: `Le lutin exécute le script suivant :\n${html}\n**Combien de pas le lutin a-t-il parcourus au total ?**`,
          type: 'exact', answer: String(total), placeholder: 'Ex : 120',
          hint1: `Calcule d'abord la distance parcourue pendant UNE répétition de la grande boucle.`,
          hint2: 'Dans des boucles imbriquées, la boucle intérieure est exécutée en entier à chaque tour de la boucle extérieure.',
          solution: `Une répétition de la grande boucle : $${k2} \\times ${d}${e ? ` + ${e}` : ''} = ${k2 * d + e}$ pas.\n$$${k1} \\times ${k2 * d + e} = ${total}$$`,
          _v: { k: '6A1.imbrique', k1, k2, d, e }
        });
      }
      // choixProg : quel programme amène le robot du départ à l'arrivée ?
      let start, target, good;
      for (let tries = 0; tries < 100; tries++) {
        const reps = this.randInt(2, 3);
        const pr = this._6FrandomProg(2, 2, reps);
        start = pr.start; target = pr.end; good = { moves: pr.moves, reps };
        if (Math.abs(target[0] - start[0]) + Math.abs(target[1] - start[1]) >= 3) break;
      }
      const fmt = p => `Répéter ${p.reps} fois : ${p.moves.map(([d, n]) => `${n} ${this._6FDIRS[d].arrow}`).join(' puis ')}`;
      const variants = [];
      const opp = { D: 'G', G: 'D', H: 'B', B: 'H' };
      variants.push({ moves: good.moves.map(([d, n]) => [opp[d], n]), reps: good.reps });
      variants.push({ moves: good.moves, reps: good.reps + 1 });
      variants.push({ moves: [good.moves[0], [opp[good.moves[1][0]], good.moves[1][1]]], reps: good.reps });
      variants.push({ moves: [[good.moves[0][0], good.moves[0][1] + 1], good.moves[1]], reps: good.reps });
      variants.push({ moves: good.moves.map(([d, n]) => [d === 'D' || d === 'G' ? (d === 'D' ? 'H' : 'B') : (d === 'H' ? 'D' : 'G'), n]), reps: good.reps });
      const key = p => { const e = this._6Frun(start, p.moves, p.reps); return e ? this._6Fcell(e) : 'hors'; };
      const goodKey = this._6Fcell(target);
      const progs = [good, ...variants.filter(p => key(p) !== goodKey)];
      const correct = fmt(good);
      const opts = progs.slice(1).map(fmt);
      const q = base("Choisir le bon programme", {
        statement: `Un robot part de la case **${this._6Fcell(start)}** et doit arriver sur la case **${this._6Fcell(target)}** (T).\n${this._6Fgrid(start, target)}\n**Quel programme convient ?** (→ droite, ← gauche, ↑ haut, ↓ bas ; les nombres sont des cases)`,
        hint1: "Teste chaque programme en simulant les déplacements sur le quadrillage.",
        hint2: "Calcule le déplacement total horizontal et vertical de chaque programme.",
        solution: `Le programme « ${correct} » amène bien le robot de ${this._6Fcell(start)} à ${goodKey}.`,
        _v: { k: '6A1.choixProg', start, target, progs: [good, ...variants].map(p => ({ moves: p.moves, reps: p.reps, label: fmt(p) })) }
      });
      return this._6mcq(q, correct, opts);
    }
  });
})();

// =====================================================================
// EXTENSIONS 6ème (audit pédagogique 2026-10-31)
// Nouvelles familles de questions enregistrées par chapitre et par palier, mélangées aux familles
// d'origine : _6X_add(id, palier, fn) ajoute une famille (fn.call(G, mastery) renvoie la question),
// _6X_origWeight(id, palier, w) fixe le poids du générateur d'origine (défaut : 3, ≈ ses familles),
// _6X_drop(id, palier, [clés _v]) retire des familles d'origine jugées faibles (nouveau tirage).
// =====================================================================
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators) return;
  const G = window.MathsGenerators;
  const IDS6 = ['6N1', '6N2', '6N3', '6N4', '6N5', '6N6', '6N7', '6N8', '6P1', '6M1', '6M2', '6M3', '6M4',
    '6G1', '6G2', '6G3', '6G4', '6G5', '6D1', '6D2', '6A1'];
  const REG = {}; // id -> palier -> { fams: [fn], w: poids d'origine, drop: Set }
  const slot = (id, t) => {
    REG[id] = REG[id] || {};
    REG[id][t] = REG[id][t] || { fams: [], w: 3, drop: new Set() };
    return REG[id][t];
  };
  Object.assign(G, {
    _6X_add(id, t, fn) { slot(id, t).fams.push(fn); },
    _6X_origWeight(id, t, w) { slot(id, t).w = w; },
    _6X_drop(id, t, keys) { keys.forEach(k => slot(id, t).drop.add(k)); }
  });
  for (const id of IDS6) {
    const orig = G['generate' + id];
    if (typeof orig !== 'function') continue;
    G['generate' + id] = function (tier = 1, mastery = 0) {
      const t = this.resolveTier(tier);
      const s = REG[id] && REG[id][t];
      if (!s || !s.fams.length) return orig.call(this, t, mastery);
      const r = Math.random() * (s.w + s.fams.length);
      if (r >= s.w) {
        const q = s.fams[Math.floor(r - s.w)].call(this, mastery);
        if (q) return q;
      }
      for (let i = 0; i < 40; i++) {
        const q = orig.call(this, t, mastery);
        if (!q || !q._v || !s.drop.has(q._v.k)) return q;
      }
      return s.fams[Math.floor(Math.random() * s.fams.length)].call(this, mastery);
    };
  }
})();

// ----- Extensions 6ème, groupe E (audit 2026-10-31) -----
// ---------------------------------------------------------------------
// Extensions 6D1, 6D2, 6A1 (audit 2026-10-31)
// ---------------------------------------------------------------------
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenerators._6X_add) return;
  const G = window.MathsGenerators;
  const sumOf = a => a.reduce((s, x) => s + x, 0);
  const pl = (n, w, wp) => (n > 1 ? (wp || w + 's') : w);
  const fracTex = (G0, k, n) => {
    const g = G0.gcd(k, n);
    return g > 1 ? `\\frac{${k}}{${n}} = \\frac{${k / g}}{${n / g}}` : `\\frac{${k}}{${n}}`;
  };

  // ===================================================================
  // 6D1 — Organisation et gestion de données
  // ===================================================================
  G._6X_origWeight('6D1', 1, 3);
  G._6X_origWeight('6D1', 2, 3);
  G._6X_origWeight('6D1', 3, 3);
  G._6X_origWeight('6D1', 4, 4);

  // P1 : catégorie la moins (ou la plus) représentée sur un diagramme en barres
  G._6X_add('6D1', 1, function () {
    const step = this.randChoice([1, 2, 5]);
    const { ctx, cats, vals: raw } = this._6D1pick(this.randInt(4, 5), 1, 9, true);
    const vals = raw.map(v => v * step);
    const mode = this.randChoice(['min', 'max']);
    const target = mode === 'min' ? Math.min(...vals) : Math.max(...vals);
    const i = vals.indexOf(target);
    const q = this._6A_q('6D1', 1, 'Représenter', {
      title: 'Lire un diagramme en barres : comparer les catégories',
      statement: `Le diagramme en barres ci-dessous représente ${ctx.theme}.\n${this._6Fbars(cats, vals, step, ctx.unit)}\n**Quelle catégorie a le ${mode === 'min' ? 'plus petit' : 'plus grand'} effectif ?**`,
      hint1: `Dans un diagramme en barres, la hauteur de chaque barre représente l'effectif de la catégorie.`,
      hint2: `Plus l'effectif est ${mode === 'min' ? 'petit' : 'grand'}, plus la barre est ${mode === 'min' ? 'basse' : 'haute'} : compare les sommets des barres avec les graduations.`,
      solution: `**Étape 1.** On lit la hauteur de chaque barre : ${cats.map((c, j) => `${c} : $${vals[j]}$`).join(' ; ')}.\n**Étape 2.** La barre la plus ${mode === 'min' ? 'basse' : 'haute'} est celle de « ${cats[i]} » (effectif $${target}$).\nLa catégorie qui a le ${mode === 'min' ? 'plus petit' : 'plus grand'} effectif est **${cats[i]}**.`,
      _v: { k: '6D1.barext', vals, cats, mode }
    });
    return this._6mcq(q, cats[i], cats.filter((_, j) => j !== i));
  });

  // P2 : hauteur d'une barre à tracer (échelle de l'axe)
  G._6X_add('6D1', 2, function () {
    const k = this.randChoice([2, 4, 5, 10]);
    const { ctx, cats, vals: raw } = this._6D1pick(this.randInt(4, 5), 2, 16);
    const half = k % 2 === 0 && Math.random() < 0.5;
    const vals = raw.map(v => (half ? v * (k / 2) : v * k));
    const i = this.randInt(0, cats.length - 1);
    const h = this._6r(vals[i] / k);
    const table = this._6Ftable([ctx.col, ...cats], [['Effectif', ...vals.map(String)]]);
    return this._6A_q('6D1', 2, 'Représenter', {
      title: 'Construire un diagramme en barres : hauteur d\'une barre',
      statement: `Le tableau ci-dessous présente ${ctx.theme}.${table}On veut représenter ces données par un diagramme en barres. Sur l'axe vertical, **$1$ cm représente $${k}$ ${ctx.unit}**.\n**Quelle doit être la hauteur (en cm) de la barre « ${cats[i]} » ?**`,
      type: 'exact', answer: this._6ans(h), placeholder: 'Ex : 3,5',
      hint1: `Cherche combien de fois $${k}$ ${ctx.unit} « rentrent » dans l'effectif de la catégorie « ${cats[i]} ».`,
      hint2: `Dans un diagramme en barres, la hauteur de chaque barre est proportionnelle à l'effectif : ici, hauteur (en cm) = effectif ÷ $${k}$.`,
      solution: `**Étape 1.** Dans le tableau, l'effectif de « ${cats[i]} » est $${vals[i]}$.\n**Étape 2.** $1$ cm représente $${k}$ ${ctx.unit}, donc la hauteur est $${vals[i]} \\div ${k} = ${this._6tex(h)}$ cm.\nLa barre « ${cats[i]} » doit mesurer **$${this._6tex(h)}$ cm** de haut.`,
      _v: { k: '6D1.hauteur', vals, i, kk: k }
    });
  });

  // P2 : choisir une représentation adaptée
  const DIAG = {
    barres: 'Un diagramme en barres',
    circ: 'Un diagramme circulaire',
    courbe: 'Un graphique (points reliés) en fonction du temps',
    double: 'Un tableau à double entrée'
  };
  const DIAG_CTX = [
    ['barres', 'On a demandé à chaque élève de la classe son sport préféré. On veut **comparer facilement le nombre d\'élèves** qui ont choisi chaque sport.'],
    ['barres', 'On a compté les livres empruntés au CDI chaque jour de la semaine. On veut **comparer d\'un coup d\'œil les nombres de livres** empruntés selon le jour.'],
    ['barres', 'Un club a relevé le nombre d\'inscrits dans chacune de ses cinq activités. On veut **voir quelle activité a le plus d\'inscrits** et comparer les effectifs.'],
    ['circ', 'Une famille a noté la répartition de son budget mensuel (logement, nourriture, loisirs, transport). On veut **montrer quelle part du budget total** représente chaque poste.'],
    ['circ', 'Lina a noté comment elle répartit ses 24 heures (sommeil, collège, repas, loisirs). On veut **visualiser la part de la journée** occupée par chaque activité.'],
    ['circ', 'Lors d\'une élection de délégués, on veut **représenter la part des voix** obtenue par chaque candidat par rapport au total des votants.'],
    ['courbe', 'On a relevé la température extérieure toutes les heures pendant une journée. On veut **montrer comment la température évolue** au cours de la journée.'],
    ['courbe', 'On a mesuré la taille d\'une plante chaque semaine pendant deux mois. On veut **observer l\'évolution de sa taille** au fil du temps.'],
    ['courbe', 'On a noté la population d\'une ville tous les dix ans depuis 1950. On veut **montrer l\'évolution de la population** au cours du temps.'],
    ['double', 'On a interrogé des élèves sur leur moyen de transport et on veut **croiser deux informations** : le moyen de transport et la classe (6e ou 5e) de chaque élève.'],
    ['double', 'Au restaurant scolaire, on veut **présenter en même temps** le nombre de repas servis selon le jour de la semaine **et** selon le menu choisi (avec ou sans viande).'],
    ['barres', 'On a relevé le nombre de médailles obtenues par cinq pays lors d\'une compétition. On veut **comparer les nombres de médailles** des différents pays.'],
    ['barres', 'Chaque élève de 6e a indiqué son fruit préféré. On veut **comparer les effectifs** obtenus par chaque fruit.'],
    ['barres', 'Un cinéma a compté le nombre de spectateurs pour chacun de ses six films à l\'affiche. On veut **repérer facilement le film le plus vu** et comparer les fréquentations.'],
    ['circ', 'Un collège compte des élèves de 6e, 5e, 4e et 3e. On veut **montrer la part de chaque niveau** dans l\'effectif total du collège.'],
    ['circ', 'Une salade de fruits contient des pommes, des fraises, des bananes et des kiwis. On veut **représenter la part de chaque fruit** dans la masse totale de la salade.'],
    ['circ', 'Un sondage demande aux habitants d\'une ville leur mode de chauffage. On veut **visualiser la répartition de l\'ensemble des réponses** entre les différents modes.'],
    ['courbe', 'Une infirmière a relevé la température d\'un malade toutes les quatre heures pendant trois jours. On veut **suivre l\'évolution de sa température**.'],
    ['courbe', 'On a noté chaque mois la hauteur d\'eau dans un lac pendant une année. On veut **voir comment cette hauteur varie** au fil des mois.'],
    ['courbe', 'Un cycliste a relevé sa vitesse toutes les cinq minutes pendant sa sortie. On veut **montrer comment sa vitesse évolue** pendant le trajet.'],
    ['double', 'On a demandé à des élèves s\'ils pratiquent un instrument de musique, en notant aussi s\'il s\'agit de filles ou de garçons. On veut **présenter les effectifs selon ces deux critères** à la fois.'],
    ['double', 'Une boutique vend des tee-shirts de trois tailles et de quatre couleurs. On veut **présenter le nombre de tee-shirts vendus pour chaque taille et chaque couleur**.']
  ];
  G._6X_add('6D1', 2, function () {
    const [type, txt] = this.randChoice(DIAG_CTX);
    const q = this._6A_q('6D1', 2, 'Représenter', {
      title: 'Choisir une représentation adaptée',
      statement: `${txt}\n**${this.randChoice(['Quelle représentation est la plus adaptée ?', 'Quel type de représentation faut-il choisir ?', 'Quelle représentation convient le mieux ?'])}**`,
      hint1: 'Repère le mot-clé de la consigne : comparer des catégories ? montrer des parts d\'un tout ? suivre une évolution dans le temps ? croiser deux critères ?',
      hint2: 'Diagramme en barres : comparer des effectifs. Diagramme circulaire : parts d\'un tout. Graphique en fonction du temps : évolution. Tableau à double entrée : deux critères à la fois.',
      solution: {
        barres: 'On veut **comparer des effectifs** de différentes catégories : la hauteur des barres permet de les comparer d\'un coup d\'œil. On choisit **un diagramme en barres**.',
        circ: 'On veut montrer **la part de chaque catégorie dans un tout** : chaque secteur du disque représente une part du total. On choisit **un diagramme circulaire**.',
        courbe: 'On veut suivre **une évolution au cours du temps** : on place les mesures en fonction du temps et on relie les points. On choisit **un graphique en fonction du temps**.',
        double: 'Chaque donnée dépend de **deux critères** à la fois : un tableau avec un critère en ligne et l\'autre en colonne convient. On choisit **un tableau à double entrée**.'
      }[type],
      _v: { k: '6D1.choixdiag', type }
    });
    return this._6mcq(q, DIAG[type], Object.keys(DIAG).filter(t => t !== type).map(t => DIAG[t]));
  });

  // P3 : repérer l'erreur dans un diagramme en barres
  G._6X_add('6D1', 3, function () {
    const step = this.randChoice([2, 5, 10]);
    const { ctx, cats, vals: raw } = this._6D1pick(this.randInt(4, 5), 2, 8);
    const vals = raw.map(v => v * step);
    const i = this.randInt(0, cats.length - 1);
    const drawn = vals.slice();
    drawn[i] = vals[i] + this.randChoice([-1, 1]) * step;
    const table = this._6Ftable([ctx.col, ...cats], [['Effectif', ...vals.map(String)]]);
    const q = this._6A_q('6D1', 3, 'Représenter', {
      title: 'Vérifier un diagramme en barres',
      statement: `Le tableau ci-dessous présente ${ctx.theme}.${table}Un élève a construit le diagramme en barres suivant, mais **une barre est fausse**.\n${this._6Fbars(cats, drawn, step, ctx.unit)}\n**Quelle barre est fausse ?**`,
      hint1: 'Lis la hauteur de chaque barre et compare-la, une par une, avec l\'effectif du tableau.',
      hint2: `Attention à la graduation de l'axe vertical : elle va de $${step}$ en $${step}$.`,
      solution: `**Étape 1.** On lit les hauteurs : ${cats.map((c, j) => `${c} : $${drawn[j]}$`).join(' ; ')}.\n**Étape 2.** On compare avec le tableau : la barre « ${cats[i]} » monte à $${drawn[i]}$ alors que l'effectif est $${vals[i]}$.\nLa barre fausse est **${cats[i]}**.`,
      _v: { k: '6D1.erreur', vals, drawn, cats }
    });
    return this._6mcq(q, cats[i], cats.filter((_, j) => j !== i));
  });

  // P4 : tableau à double entrée avec deux cases effacées (raisonnement en deux temps)
  G._6X_add('6D1', 4, function () {
    const C = this.randChoice([
      { cols: ['Anglais', 'Allemand', 'Espagnol'], what: 'la langue vivante choisie' },
      { cols: ['Chorale', 'Échecs', 'Robotique'], what: 'le club choisi' },
      { cols: ['Bus', 'Vélo', 'À pied'], what: 'le moyen de transport' },
      { cols: ['Demi-pension', 'Externat', 'Internat'], what: 'le régime' }
    ]);
    const rows = this.randChoice([['6e', '5e'], ['Filles', 'Garçons']]);
    const grid = rows.map(() => C.cols.map(() => this.randInt(4, 25)));
    const rT = grid.map(r => sumOf(r));
    const cT = C.cols.map((_, j) => grid[0][j] + grid[1][j]);
    const all = rT[0] + rT[1];
    const hr = this.randInt(0, 1), hc = this.randInt(0, C.cols.length - 1);
    // cases effacées : grid[hr][hc] et cT[hc] -> on demande cT[hc]
    const cells = rows.map((rn, i) => [rn, ...grid[i].map((v, j) => (i === hr && j === hc ? '?' : String(v))), String(rT[i])]);
    cells.push(['Total', ...cT.map((v, j) => (j === hc ? '…' : String(v))), String(all)]);
    const known = grid[hr].filter((_, j) => j !== hc);
    const cell = grid[hr][hc];
    return this._6A_q('6D1', 4, 'Raisonner', {
      title: 'Tableau à double entrée : deux cases effacées',
      statement: `Le tableau ci-dessous répartit les élèves d'un collège selon ${C.what}. Deux cases ont été effacées (« ? » et « … »).${this._6Ftable(['', ...C.cols, 'Total'], cells)}**Quel nombre doit-on écrire dans la case « … » (total de la colonne « ${C.cols[hc]} ») ?**`,
      type: 'exact', answer: String(cT[hc]), placeholder: 'Ex : 30',
      hint1: 'La colonne demandée contient deux nombres inconnus : commence par trouver le « ? » grâce à sa ligne, où il ne manque qu\'un nombre.',
      hint2: 'Dans un tableau à double entrée, chaque total de ligne est la somme des cases de la ligne, et chaque total de colonne est la somme des cases de la colonne.',
      solution: `**Étape 1 (ligne « ${rows[hr]} »).** $${known.join(' + ')} = ${sumOf(known)}$, donc « ? » $= ${rT[hr]} - ${sumOf(known)} = ${cell}$.\n**Étape 2 (colonne « ${C.cols[hc]} »).** $${grid[0][hc]} + ${grid[1][hc]} = ${cT[hc]}$.\nVérification : la somme des totaux de colonnes donne bien $${all}$.\nLa case « … » contient **$${cT[hc]}$**.`,
      _v: { k: '6D1.double2', grid: grid.map((r, i) => r.map((v, j) => (i === hr && j === hc ? null : v))), rT, hr, hc }
    });
  });

  // P4 : proportion lue sur un diagramme en barres (fraction irréductible)
  G._6X_add('6D1', 4, function () {
    const step = this.randChoice([2, 5, 10]);
    let pick, vals, tot, i;
    do {
      pick = this._6D1pick(this.randInt(3, 4), 1, 8);
      vals = pick.vals.map(v => v * step);
      tot = sumOf(vals);
      i = this.randInt(0, vals.length - 1);
    } while (this.gcd(vals[i], tot) === 1 || vals[i] === tot);
    const { ctx, cats } = pick;
    return this._6A_q('6D1', 4, 'Raisonner', {
      title: 'Proportion lue sur un diagramme en barres',
      statement: `Le diagramme en barres ci-dessous représente ${ctx.theme}.\n${this._6Fbars(cats, vals, step, ctx.unit)}\n**Quelle fraction de l'effectif total représente la catégorie « ${cats[i]} » ?** (fraction irréductible a/b)`,
      type: 'exact', answer: this._6fracAns(vals[i], tot), placeholder: 'Ex : 2/5',
      hint1: 'Il faut deux nombres : l\'effectif de la catégorie (une barre) et l\'effectif total (toutes les barres).',
      hint2: 'Proportion d\'une catégorie = effectif de la catégorie ÷ effectif total ; on simplifie ensuite la fraction en divisant le numérateur et le dénominateur par un même nombre.',
      solution: `**Étape 1.** On lit les effectifs : $${vals.join(' + ')} = ${tot}$ (effectif total).\n**Étape 2.** La catégorie « ${cats[i]} » a un effectif de $${vals[i]}$, d'où la proportion $${fracTex(this, vals[i], tot)}$.\nLa catégorie « ${cats[i]} » représente **$${this.formatFraction(vals[i], tot)}$** de l'effectif total.`,
      _v: { k: '6D1.barfrac', vals, i }
    });
  });

  // ===================================================================
  // 6D2 — Probabilités
  // ===================================================================
  G._6X_origWeight('6D2', 2, 3);
  G._6X_origWeight('6D2', 3, 3);
  G._6X_origWeight('6D2', 4, 3);

  const ECH = {
    0: '0 : impossible',
    low: 'Entre 0 et 1/2 : peu probable',
    half: '1/2 : une chance sur deux',
    high: 'Entre 1/2 et 1 : très probable',
    1: '1 : certain'
  };
  // P2 : placer un événement sur l'échelle des probabilités
  G._6X_add('6D2', 2, function () {
    const u = this._6D2urn();
    const tot = sumOf(u.counts);
    let j = this.randInt(0, u.cols.length - 1);
    let mode = this.randChoice(['one', 'one', 'one', 'notone']);
    let fav = mode === 'one' ? u.counts[j] : tot - u.counts[j];
    const ev = mode === 'one' ? `tirer une boule ${u.cols[j][0]}` : `ne pas tirer une boule ${u.cols[j][0]}`;
    const key = 2 * fav < tot ? 'low' : 2 * fav === tot ? 'half' : 'high';
    const q = this._6A_q('6D2', 2, 'Raisonner', {
      title: 'Placer un événement sur l\'échelle des probabilités',
      statement: `Une urne opaque contient ${u.txt}. On tire une boule au hasard.\nOù se place l'événement « ${ev} » sur l'échelle des probabilités ?`,
      hint1: 'Compte les boules favorables et compare-les à la moitié du nombre total de boules.',
      hint2: 'Une probabilité est un nombre entre 0 (événement impossible) et 1 (événement certain) ; elle vaut 1/2 quand il y a autant d\'issues favorables que d\'issues défavorables.',
      solution: `**Étape 1.** Il y a $${tot}$ boules en tout et $${fav}$ réalisent l'événement : $P = ${fracTex(this, fav, tot)}$.\n**Étape 2.** La moitié des boules est $${this._6tex(tot / 2)}$ ; or $${fav}$ ${key === 'low' ? '<' : key === 'half' ? '=' : '>'} $${this._6tex(tot / 2)}$.\nL'événement se place donc dans la zone **« ${ECH[key]} »**.`,
      _v: { k: '6D2.echelle', counts: u.counts, j, mode }
    });
    return this._6mcq(q, ECH[key], ['low', 'half', 'high', 0, 1].filter(x => x !== key).map(x => ECH[x]), 5);
  });

  // P2 : probabilité sous forme décimale
  G._6X_add('6D2', 2, function () {
    const tot = this.randChoice([4, 5, 10, 20, 25, 50]);
    const ctx = this.randChoice([
      { obj: 'tickets de tombola', win: 'gagnants', one: 'un ticket', ev: 'tirer un ticket gagnant' },
      { obj: 'cartes', win: 'rouges', one: 'une carte', ev: 'tirer une carte rouge' },
      { obj: 'jetons', win: 'marqués d\'une étoile', one: 'un jeton', ev: 'tirer un jeton marqué d\'une étoile' }
    ]);
    const k = this.randInt(1, tot - 1);
    const p = this._6r(k / tot);
    return this._6A_q('6D2', 2, 'Calculer', {
      title: 'Probabilité en écriture décimale',
      statement: `Un sac contient ${tot} ${ctx.obj}, dont ${k} ${ctx.win}. On tire ${ctx.one} au hasard.\n**Quelle est la probabilité de ${ctx.ev} ?** (écriture décimale)`,
      type: 'exact', answer: this._6ans(p), placeholder: 'Ex : 0,25',
      hint1: 'Écris d\'abord la probabilité sous forme de fraction, puis transforme-la en écriture décimale.',
      hint2: 'Probabilité = nombre d\'issues favorables ÷ nombre d\'issues possibles (toutes équiprobables). Pour obtenir l\'écriture décimale, on cherche une fraction égale de dénominateur 10, 100…',
      solution: `**Étape 1.** Il y a $${tot}$ issues équiprobables, dont $${k}$ favorables : $P = \\frac{${k}}{${tot}}$.\n**Étape 2.** $\\frac{${k}}{${tot}} = \\frac{${k * (100 / tot)}}{100} = ${this._6tex(p)}$.\nLa probabilité est **$${this._6tex(p)}$**.`,
      _v: { k: '6D2.dec', k1: k, tot }
    });
  });

  // P3 : roue avec des secteurs de tailles différentes
  const WCOL = { rouge: '#ef4444', bleu: '#3b82f6', vert: '#22c55e', jaune: '#facc15' };
  const wheelUneven = (G0, parts, n) => {
    const R = 72, cx = 95, cy = 92;
    let inner = '', acc = 0;
    for (const [col, k] of parts) {
      const a0 = (2 * Math.PI * acc) / n - Math.PI / 2, a1 = (2 * Math.PI * (acc + k)) / n - Math.PI / 2;
      const large = k / n > 0.5 ? 1 : 0;
      const p = a => [(cx + R * Math.cos(a)).toFixed(2), (cy + R * Math.sin(a)).toFixed(2)];
      const [x0, y0] = p(a0), [x1, y1] = p(a1);
      inner += `<path d="M${cx},${cy} L${x0},${y0} A${R},${R} 0 ${large} 1 ${x1},${y1} Z" fill="${WCOL[col]}" fill-opacity="0.8" stroke="#ffffff" stroke-width="2"/>`;
      const am = (a0 + a1) / 2;
      inner += G0._6svgText((cx + 0.6 * R * Math.cos(am)).toFixed(1), (cy + 0.6 * R * Math.sin(am) + 4).toFixed(1), `${(360 * k) / n}°`, { size: 11, weight: '800', fill: '#0f172a' });
      acc += k;
    }
    inner += `<polygon points="${cx - 7},8 ${cx + 7},8 ${cx},22" fill="var(--text-main, #334155)"/>`;
    return G0._6svg(190, 175, inner, 210);
  };
  G._6X_add('6D2', 3, function () {
    const n = this.randChoice([4, 6, 8, 12]);
    const cols = this.shuffle(Object.keys(WCOL)).slice(0, this.randInt(2, 3));
    let ks;
    do { ks = cols.map(() => this.randInt(1, n - 1)); } while (sumOf(ks) !== n || new Set(ks).size < 2);
    const parts = cols.map((c, i) => [c, ks[i]]);
    const j = this.randInt(0, cols.length - 1);
    const ang = (360 * ks[j]) / n;
    return this._6A_q('6D2', 3, 'Raisonner', {
      title: 'Roue de loterie à secteurs inégaux',
      statement: `Une roue de loterie est partagée en secteurs **de tailles différentes** (les angles sont indiqués). On la fait tourner et on regarde la couleur indiquée par la flèche.\n${wheelUneven(this, parts, n)}\n**Quelle est la probabilité que la flèche s'arrête sur le ${cols[j]} ?** (fraction irréductible a/b)`,
      type: 'exact', answer: this._6fracAns(ks[j], n), placeholder: 'Ex : 3/8',
      hint1: 'Les couleurs n\'ont pas la même chance de sortir : la probabilité dépend de la part du disque occupée par la couleur.',
      hint2: 'Un tour complet mesure $360^\\circ$ : un secteur d\'angle $a^\\circ$ occupe la fraction $\\frac{a}{360}$ du disque.',
      solution: `**Étape 1.** Le secteur ${cols[j]} mesure $${ang}^\\circ$ sur un tour complet de $360^\\circ$.\n**Étape 2.** $P = \\frac{${ang}}{360}${this.gcd(ang, 360) > 1 ? ` = ${this.formatFraction(ang, 360)}` : ''}$.\nLa probabilité d'obtenir le ${cols[j]} est **$${this.formatFraction(ang, 360)}$**.`,
      _v: { k: '6D2.roueInegale', ks, n, j }
    });
  });

  // P3 : retrouver le nombre de boules d'une couleur à partir d'une probabilité
  G._6X_add('6D2', 3, function () {
    const [p, qd] = this.randChoice([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [1, 5]]);
    const m = this.randInt(1, 6);
    const r = p * m, b = (qd - p) * m;
    return this._6A_q('6D2', 3, 'Raisonner', {
      title: 'Retrouver la composition d\'une urne',
      statement: `Une urne contient ${r} ${pl(r, 'boule rouge', 'boules rouges')} et des boules bleues, indiscernables au toucher. On tire une boule au hasard.\nLa probabilité de tirer une boule rouge est $\\frac{${p}}{${qd}}$.\n**Combien y a-t-il de boules bleues dans l'urne ?**`,
      type: 'exact', answer: String(b), placeholder: 'Ex : 6',
      hint1: `La fraction $\\frac{${p}}{${qd}}$ est égale à « nombre de boules rouges ÷ nombre total de boules » : trouve d'abord le nombre total de boules.`,
      hint2: 'Probabilité = nombre d\'issues favorables ÷ nombre total d\'issues. Deux fractions égales s\'obtiennent en multipliant numérateur et dénominateur par un même nombre.',
      solution: `**Étape 1.** $\\frac{${p}}{${qd}} = \\frac{${r}}{\\dots}$ : on a multiplié le numérateur par $${m}$, donc le nombre total de boules est $${qd} \\times ${m} = ${qd * m}$.\n**Étape 2.** Boules bleues : $${qd * m} - ${r} = ${b}$.\nIl y a **$${b}$** boules bleues.`,
      _v: { k: '6D2.bleues', r, p, q: qd }
    });
  });

  // P4 : fréquence observée et probabilité — peut-on conclure ?
  const CONC = {
    peu: 'On ne peut pas conclure : il y a trop peu de lancers',
    truque: 'Le dé est très probablement truqué',
    ok: 'Rien n\'indique que le dé est truqué'
  };
  G._6X_add('6D2', 4, function () {
    const mode = this.randChoice(['peu', 'truque', 'ok']);
    let N, c;
    if (mode === 'peu') { N = this.randChoice([6, 10, 12, 15, 20]); c = Math.round(N / 6) + this.randInt(2, 3); }
    else if (mode === 'truque') { N = this.randChoice([3000, 6000, 12000]); c = Math.round(N * this.randChoice([0.3, 0.35, 0.05, 0.4])); }
    else { N = this.randChoice([3000, 6000, 12000]); c = N / 6 + this.randInt(-Math.floor(N / 200), Math.floor(N / 200)); }
    const nom = this.randChoice(['Tom', 'Inès', 'Hugo', 'Jade']);
    const f = this._6r(c / N);
    const q = this._6A_q('6D2', 4, 'Raisonner', {
      title: 'Fréquence observée : peut-on conclure ?',
      statement: `${nom} lance ${N} fois un dé à six faces et obtient ${c} fois le 6.\n**Que peut-on dire de ce dé ?**`,
      hint1: 'Calcule la fréquence d\'apparition du 6, compare-la à la probabilité théorique $\\frac{1}{6}$, et tiens compte du nombre de lancers.',
      hint2: 'Sur un grand nombre d\'essais, la fréquence observée se rapproche de la probabilité. Sur peu d\'essais, elle peut en être très éloignée par simple hasard.',
      solution: `**Étape 1.** Fréquence du 6 : $\\frac{${c}}{${N}} ${Math.round(f * 100) / 100 === f ? '=' : '\\approx'} ${this._6tex(Math.round(f * 100) / 100)}$, à comparer à $\\frac{1}{6} \\approx 0{,}17$.\n**Étape 2.** ${mode === 'peu' ? `Avec seulement ${N} lancers, un tel écart peut être dû au hasard.` : mode === 'truque' ? `Avec ${N} lancers (un très grand nombre), la fréquence devrait être proche de $0{,}17$ : l'écart est trop important pour être dû au hasard.` : `Avec ${N} lancers, la fréquence est très proche de $\\frac{1}{6}$, comme attendu pour un dé équilibré.`}\nConclusion : **${CONC[mode]}**.`,
      _v: { k: '6D2.conclure', N, c }
    });
    return this._6mcq(q, CONC[mode], Object.keys(CONC).filter(x => x !== mode).map(x => CONC[x]));
  });

  // P4 : on retire des boules avant le tirage
  G._6X_add('6D2', 4, function () {
    let u, a, b, x;
    do {
      u = this._6D2urn();
      a = this.randInt(0, u.cols.length - 1);
      b = this.randInt(0, u.cols.length - 1);
    } while (u.counts[a] < 3);
    x = this.randInt(1, u.counts[a] - 1);
    const tot = sumOf(u.counts) - x;
    const fav = u.counts[b] - (a === b ? x : 0);
    return this._6A_q('6D2', 4, 'Raisonner', {
      title: 'Modifier le contenu d\'une urne',
      statement: `Une urne opaque contient ${u.txt}. Avant le tirage, on **retire ${x} ${pl(x, 'boule ' + u.cols[a][0], 'boules ' + u.cols[a][1])}** de l'urne. On tire ensuite une boule au hasard.\n**Quelle est la probabilité de tirer une boule ${u.cols[b][0]} ?** (fraction irréductible a/b)`,
      type: 'exact', answer: this._6fracAns(fav, tot), placeholder: 'Ex : 3/10',
      hint1: 'Commence par écrire le nouveau contenu de l\'urne : combien de boules de chaque couleur, et combien en tout ?',
      hint2: 'Probabilité = nombre d\'issues favorables ÷ nombre total d\'issues, calculée avec le contenu de l\'urne au moment du tirage.',
      solution: `**Étape 1.** Après le retrait, il reste $${sumOf(u.counts)} - ${x} = ${tot}$ boules, dont $${fav}$ ${pl(fav, u.cols[b][0], u.cols[b][1])}.\n**Étape 2.** $P = ${fracTex(this, fav, tot)}$.\nLa probabilité de tirer une boule ${u.cols[b][0]} est **$${this.formatFraction(fav, tot)}$**.`,
      _v: { k: '6D2.retrait', counts: u.counts, a, b, x }
    });
  });

  // ===================================================================
  // 6A1 — Pensée informatique
  // ===================================================================
  G._6X_origWeight('6A1', 1, 3);
  G._6X_origWeight('6A1', 2, 3);
  G._6X_origWeight('6A1', 3, 3);
  G._6X_origWeight('6A1', 4, 4);
  const OPP = { D: 'G', G: 'D', H: 'B', B: 'H' };

  // P1 : compléter une instruction pour atteindre une case
  G._6X_add('6A1', 1, function () {
    let start, m1, m2, target;
    for (;;) {
      start = [this.randInt(1, 8), this.randInt(1, 8)];
      const d1 = this.randChoice(['D', 'G', 'H', 'B']);
      const d2 = this.randChoice(d1 === 'D' || d1 === 'G' ? ['H', 'B'] : ['D', 'G']);
      m1 = [d1, this.randInt(2, 5)]; m2 = [d2, this.randInt(1, 4)];
      target = this._6Frun(start, [m1, m2]);
      if (target) break;
    }
    const ask = this.randInt(0, 1);
    const shown = [m1, m2].map((m, i) => (i === ask ? `avancer de **?** cases ${this._6FDIRS[m[0]].txt} (${this._6FDIRS[m[0]].arrow})` : `avancer de ${this._6FmoveTxt(m)}`));
    const mm = ask === 0 ? m1 : m2;
    return this._6A_q('6A1', 1, 'Modéliser', {
      title: 'Compléter un programme de déplacement',
      statement: `Un robot R doit aller de la case **${this._6Fcell(start)}** à la case **${this._6Fcell(target)}** (T).\n${this._6Fgrid(start, target)}\nOn lui donne le programme :\n\n1. ${shown[0]}\n2. ${shown[1]}\n\n**Par quel nombre faut-il remplacer le « ? » ?**`,
      type: 'exact', answer: String(mm[1]), placeholder: 'Ex : 3',
      hint1: `L'instruction à compléter est un déplacement ${mm[0] === 'D' || mm[0] === 'G' ? 'horizontal : compare les colonnes (lettres)' : 'vertical : compare les lignes (numéros)'} du départ et de l'arrivée.`,
      hint2: 'Un déplacement vers la droite ou la gauche change seulement la colonne ; un déplacement vers le haut ou le bas change seulement la ligne.',
      solution: `**Étape 1.** Départ ${this._6Fcell(start)}, arrivée ${this._6Fcell(target)}.\n**Étape 2.** ${mm[0] === 'D' || mm[0] === 'G' ? `De la colonne ${'ABCDEFGH'[start[0] - 1]} à la colonne ${'ABCDEFGH'[target[0] - 1]}` : `De la ligne ${start[1]} à la ligne ${target[1]}`}, il y a $${mm[1]}$ case${mm[1] > 1 ? 's' : ''}.\nIl faut remplacer « ? » par **$${mm[1]}$**.`,
      _v: { k: '6A1.completer', start, target, moves: [m1, m2], ask }
    });
  });

  // P2 : débogage — corriger une instruction
  G._6X_add('6A1', 2, function () {
    let pr, idx, wrong, reached;
    for (let tries = 0; tries < 200; tries++) {
      pr = this._6FrandomProg(3, 4);
      idx = this.randInt(0, 2);
      const [d, n] = pr.moves[idx];
      const cands = [n + 1, n - 1, n + 2].filter(v => v >= 1 && v <= 6);
      wrong = this.randChoice(cands);
      const mv = pr.moves.map((m, i) => (i === idx ? [d, wrong] : m));
      reached = this._6Frun(pr.start, mv);
      if (reached) break;
    }
    const { start, moves, end } = pr;
    const list = moves.map((m, i) => `${i + 1}. avancer de ${this._6FmoveTxt(i === idx ? [m[0], wrong] : m)}`).join('\n');
    return this._6A_q('6A1', 2, 'Modéliser', {
      title: 'Déboguer un programme',
      statement: `Lina veut que son robot aille de la case **${this._6Fcell(start)}** à la case **${this._6Fcell(end)}** (T).\n${this._6Fgrid(start, end)}\nElle a écrit le programme :\n\n${list}\n\nEn le testant, le robot arrive en **${this._6Fcell(reached)}** au lieu de ${this._6Fcell(end)}. Seul le **nombre de cases de l'instruction ${idx + 1}** est faux.\n**Quel nombre faut-il écrire dans l'instruction ${idx + 1} ?**`,
      type: 'exact', answer: String(moves[idx][1]), placeholder: 'Ex : 2',
      hint1: 'Compare la case atteinte et la case visée : de combien de cases le robot s\'est-il trompé, et dans quelle direction ?',
      hint2: 'Déboguer un programme, c\'est l\'exécuter pas à pas pour repérer l\'instruction qui ne produit pas l\'effet voulu, puis la corriger.',
      solution: `**Étape 1.** Le robot arrive en ${this._6Fcell(reached)} au lieu de ${this._6Fcell(end)} : l'écart vient de l'instruction ${idx + 1} (« ${this._6FmoveTxt([moves[idx][0], wrong])} »).\n**Étape 2.** ${wrong > moves[idx][1] ? `Il est allé ${wrong - moves[idx][1]} case${wrong - moves[idx][1] > 1 ? 's' : ''} trop loin` : `Il lui manque ${moves[idx][1] - wrong} case${moves[idx][1] - wrong > 1 ? 's' : ''}`} ${this._6FDIRS[moves[idx][0]].txt} : $${wrong} ${wrong > moves[idx][1] ? '-' : '+'} ${Math.abs(wrong - moves[idx][1])} = ${moves[idx][1]}$.\nIl faut écrire **$${moves[idx][1]}$** dans l'instruction ${idx + 1}.`,
      _v: { k: '6A1.bug', start, end, moves: moves.map((m, i) => (i === idx ? [m[0], null] : m)), idx }
    });
  });

  // P3 : variable modifiée dans une boucle
  G._6X_add('6A1', 3, function () {
    const mode = this.randChoice(['double', 'somme', 'mixte']);
    let lines, ans, sol, v;
    if (mode === 'double') {
      const x = this.randInt(1, 6), k = this.randInt(3, 5);
      lines = ['quand drapeau cliqué', `mettre [N] à ${x}`, `répéter ${k} fois`, '    mettre [N] à (N * 2)', 'dire (N)'];
      const seq = [x]; for (let i = 0; i < k; i++) seq.push(seq[i] * 2);
      ans = seq[k];
      sol = `Valeurs successives de N : ${seq.map(s => `$${s}$`).join(' → ')}.`;
      v = { mode, x, n: k };
    } else if (mode === 'somme') {
      const k = this.randInt(4, 8);
      lines = ['quand drapeau cliqué', 'mettre [S] à 0', 'mettre [C] à 1', `répéter ${k} fois`, '    ajouter (C) à [S]', '    ajouter 1 à [C]', 'dire (S)'];
      ans = (k * (k + 1)) / 2;
      sol = `C prend les valeurs $1, 2, …, ${k}$ et chacune est ajoutée à S : $S = ${Array.from({ length: k }, (_, i) => i + 1).join(' + ')} = ${ans}$.`;
      v = { mode, n: k };
    } else {
      const x = this.randInt(1, 5), a = this.randInt(1, 4), k = this.randInt(2, 4);
      lines = ['quand drapeau cliqué', `mettre [N] à ${x}`, `répéter ${k} fois`, `    ajouter ${a} à [N]`, '    mettre [N] à (N * 2)', 'dire (N)'];
      const seq = [x]; let n = x;
      const st = [];
      for (let i = 0; i < k; i++) { st.push(`$(${n} + ${a}) \\times 2 = ${(n + a) * 2}$`); n = (n + a) * 2; seq.push(n); }
      ans = n;
      sol = `À chaque tour : ${st.join(' ; ')}.`;
      v = { mode, x, a, n: k };
    }
    return this._6A_q('6A1', 3, 'Modéliser', {
      title: 'Variable modifiée dans une boucle',
      statement: `On exécute le script suivant :\n${this.renderScratch(lines)}\n**Quel nombre le lutin dit-il à la fin ?**`,
      type: 'exact', answer: String(ans), placeholder: 'Ex : 48',
      hint1: 'Fais un tableau avec une ligne par tour de boucle et note la valeur de chaque variable à la fin du tour.',
      hint2: 'Une variable garde sa valeur d\'un tour de boucle au suivant : chaque instruction utilise la valeur la plus récente.',
      solution: `**Étape 1.** On exécute la boucle tour par tour.\n${sol}\n**Étape 2.** À la fin de la boucle, le lutin dit **$${ans}$**.`,
      _v: Object.assign({ k: '6A1.boucleVar' }, v)
    });
  });

  // P4 : retrouver le nombre choisi (programme à l'envers)
  G._6X_add('6A1', 4, function () {
    const x = this.randInt(2, 15);
    const pool = this.shuffle([['+', this.randInt(2, 12)], ['*', this.randInt(2, 5)], ['-', this.randInt(1, 9)]]).slice(0, this.randChoice([2, 3]));
    let v = x; const fw = [];
    for (const [o, a] of pool) { const nv = o === '+' ? v + a : o === '-' ? v - a : v * a; fw.push([v, o, a, nv]); v = nv; }
    if (fw.some(s => s[3] < 0)) return null;
    const res = v;
    const sym = o => (o === '*' ? '\\times' : o);
    const inv = { '+': '-', '-': '+', '*': '\\div' };
    const back = fw.slice().reverse().map(([a0, o, a, nv]) => `$${nv} ${inv[o]} ${a} = ${a0}$`);
    return this._6A_q('6A1', 4, 'Raisonner', {
      title: 'Retrouver le nombre choisi',
      statement: `On exécute le script suivant :\n${this.renderScratch(['quand drapeau cliqué', 'demander [Choisis un nombre] et attendre', 'mettre [N] à (réponse)', ...pool.map(([o, a]) => `mettre [N] à (N ${o} ${a})`), 'dire (N)'])}\nLe lutin dit $${res}$. **Quel nombre a-t-on choisi ?**`,
      type: 'exact', answer: String(x), placeholder: 'Ex : 7',
      hint1: 'Remonte le programme à l\'envers : pars du résultat et défais les instructions en commençant par la dernière.',
      hint2: 'Pour défaire « ajouter » on soustrait, pour défaire « soustraire » on ajoute, pour défaire « multiplier » on divise.',
      solution: `**Étape 1.** On remonte les instructions de la dernière à la première : ${back.join(' ; puis ')}.\n**Étape 2 (vérification).** ${fw.map(([a0, o, a, nv]) => `$${a0} ${sym(o)} ${a} = ${nv}$`).join(' ; ')}.\nLe nombre choisi est **$${x}$**.`,
      _v: { k: '6A1.inverse', ops: pool, res }
    });
  });
})();

// ----- Extensions 6ème, groupe B (audit 2026-10-31) -----
// ---------------------------------------------------------------------
// Extensions 6N6, 6N7, 6N8, 6P1 (audit 2026-10-31)
// ---------------------------------------------------------------------
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenerators._6X_add) return;
  const G = window.MathsGenerators;
  const F = (n, d) => `\\frac{${n}}{${d}}`;
  const PRENOMS = ['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan', 'Lina', 'Tom', 'Zoé', 'Malo', 'Sacha', 'Nina'];
  const mk = (id, t, o) => {
    const q = Object.assign({ chapterId: id, tier: t, skill: 'Calculer' }, o);
    if (t === 4 && q.title && !/^Défi 5ème/.test(q.title)) q.title = `Défi 5ème : ${q.title}`;
    if (q.type === 'exact' && !q.placeholder) q.placeholder = 'Ex : 12';
    return q;
  };
  const simpTxt = (g, n, d) => {
    const [a, b] = g.simplifyFraction(n, d);
    return a === n ? '' : ` $= ${b === 1 ? a : F(a, b)}$ (fraction simplifiée)`;
  };
  const dur = m => { const h = Math.floor(m / 60), r = m % 60; return h ? (r ? `${h} h ${r} min` : `${h} h`) : `${r} min`; };

  // Figure : rectangle quadrillé r × c, cases de `set` coloriées.
  const gridSvg = (g, r, c, set) => {
    const s = 32; let inner = '';
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) {
      const k = i * c + j;
      inner += `<rect x="${10 + j * s}" y="${10 + i * s}" width="${s}" height="${s}" fill="${set.has(k) ? 'rgba(59, 130, 246, 0.55)' : 'var(--bg-surface, #ffffff)'}" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
    }
    return g._6svg(20 + c * s, 20 + r * s, inner, 300);
  };

  // Motifs évolutifs dessinés (carreaux) : étape n -> liste de cases [x, y].
  const MOTIFS = {
    L: { nom: 'en forme de L', cells: n => { const a = []; for (let y = 0; y <= n; y++) a.push([0, y]); for (let x = 1; x <= n; x++) a.push([x, n]); return a; } },
    croix: { nom: 'en forme de croix', cells: n => { const a = [[0, 0]]; for (let i = 1; i <= n; i++) a.push([i, 0], [-i, 0], [0, i], [0, -i]); return a; } },
    T: { nom: 'en forme de T', cells: n => { const a = []; for (let x = -n; x <= n; x++) a.push([x, 0]); for (let y = 1; y <= n; y++) a.push([0, y]); return a; } },
    double: { nom: 'en double rangée', cells: n => { const a = []; for (let x = 0; x <= n; x++) a.push([x, 0], [x, 1]); return a; } }
  };
  const motifSvg = (g, shape) => {
    const s = 11, steps = [1, 2, 3].map(n => MOTIFS[shape].cells(n));
    const box = steps.map(c => {
      const xs = c.map(p => p[0]), ys = c.map(p => p[1]);
      return { minx: Math.min(...xs), maxx: Math.max(...xs), miny: Math.min(...ys), maxy: Math.max(...ys) };
    });
    const H = Math.max(...box.map(b => (b.maxy - b.miny + 1) * s));
    let inner = '', ox = 12;
    steps.forEach((c, i) => {
      const b = box[i], w = (b.maxx - b.minx + 1) * s, h = (b.maxy - b.miny + 1) * s, top = 10 + H - h;
      for (const [x, y] of c) inner += `<rect x="${ox + (x - b.minx) * s}" y="${top + (y - b.miny) * s}" width="${s}" height="${s}" fill="rgba(16, 185, 129, 0.35)" stroke="var(--text-main, #334155)" stroke-width="1.2"/>`;
      inner += g._6svgText(ox + w / 2, 10 + H + 18, `Étape ${i + 1}`, { size: 11 });
      ox += Math.max(w, 44) + 30;
    });
    return g._6svg(ox, H + 40, inner, 340);
  };
  const motifCount = (shape, n) => MOTIFS[shape].cells(n).length;
  const motifInfo = (shape) => {
    const c1 = motifCount(shape, 1), d = motifCount(shape, 2) - c1;
    return { c1, d };
  };

  // =====================================================================
  // 6N6 — Fractions
  // =====================================================================
  G._6X_origWeight('6N6', 1, 5);
  G._6X_add('6N6', 1, function () {
    const [r, c] = this.randChoice([[2, 3], [2, 4], [3, 3], [2, 5], [3, 4], [1, 6], [1, 8], [2, 6], [1, 5], [3, 5]]);
    const n = r * c, a = this.randInt(1, n - 1);
    const set = new Set(this.shuffle([...Array(n).keys()]).slice(0, a));
    return mk('6N6', 1, {
      title: 'Fraction d\'une figure coloriée',
      statement: `La figure ci-dessous est partagée en parts égales.\n${gridSvg(this, r, c, set)}**Quelle fraction de la figure est coloriée ?** Donner la réponse sous forme de fraction.`,
      type: 'exact', answer: this._6fracAns(a, n), placeholder: 'Ex : 3/8',
      hint1: 'Compte d\'abord le nombre total de parts égales, puis le nombre de parts coloriées.',
      hint2: 'Dans une fraction, le dénominateur indique en combien de parts égales on partage l\'unité ; le numérateur indique combien de parts on prend.',
      solution: `Étape 1 : la figure est partagée en $${r} \\times ${c} = ${n}$ parts égales (c'est le dénominateur).\nÉtape 2 : $${a}$ parts sont coloriées (c'est le numérateur).\nLa partie coloriée représente $${F(a, n)}$ de la figure${simpTxt(this, a, n)}.`,
      skill: 'Représenter',
      _v: { k: '6N6.shaded', r, c, a }
    });
  });

  G._6X_origWeight('6N6', 2, 4);
  G._6X_add('6N6', 2, function () {
    const d = this.randChoice([2, 4, 5, 20, 25, 50]);
    let n; do { n = this.randInt(1, 3 * d); } while (n % d === 0);
    const N = n * 100 / d, m = 100 / d;
    return mk('6N6', 2, {
      title: 'Du nombre décimal à la fraction',
      statement: `Compléter l'égalité :\n$$${this._6tex(N / 100)} = ${F('\\square', d)}$$`,
      type: 'exact', answer: String(n), placeholder: 'Ex : 3',
      hint1: 'Écris d\'abord le nombre décimal sous la forme d\'une fraction de dénominateur 100.',
      hint2: 'On obtient une fraction égale en divisant (ou multipliant) le numérateur et le dénominateur par un même nombre non nul.',
      solution: `Étape 1 : $${this._6tex(N / 100)} = ${F(N, 100)}$ (le dernier chiffre est au rang des centièmes).\nÉtape 2 : $100 \\div ${d} = ${m}$, donc on divise aussi le numérateur par $${m}$ : $${N} \\div ${m} = ${n}$.\nAinsi $${this._6tex(N / 100)} = ${F(n, d)}$ : le nombre manquant est $${n}$.`,
      skill: 'Représenter',
      _v: { k: '6N6.dec2frac', N, d }
    });
  });

  G._6X_origWeight('6N6', 3, 3);
  G._6X_add('6N6', 3, function () {
    const d = this.randInt(3, 12), k = this.randInt(1, 6), below = Math.random() < 0.5;
    const ans = below ? k * d - 1 : k * d + 1;
    return mk('6N6', 3, {
      title: 'Comparer une fraction à un entier',
      statement: `Quel est le **${below ? 'plus grand' : 'plus petit'}** nombre entier $n$ tel que :\n$$${F('n', d)} ${below ? '<' : '>'} ${k}$$`,
      type: 'exact', answer: String(ans),
      hint1: `Écris l'entier $${k}$ sous la forme d'une fraction de dénominateur $${d}$.`,
      hint2: 'Deux fractions de même dénominateur sont rangées dans le même ordre que leurs numérateurs.',
      solution: `Étape 1 : $${k} = ${F(k * d, d)}$.\nÉtape 2 : on veut $${F('n', d)} ${below ? '<' : '>'} ${F(k * d, d)}$, c'est-à-dire $n ${below ? '<' : '>'} ${k * d}$.\nLe ${below ? 'plus grand' : 'plus petit'} entier qui convient est $n = ${ans}$.`,
      skill: 'Comparer',
      _v: { k: '6N6.maxnum', d, kk: k, below }
    });
  });
  G._6X_add('6N6', 3, function () {
    let a, b; do { b = this.randInt(2, 8); a = this.randInt(1, 2 * b); } while (this.gcd(a, b) !== 1 || a === b);
    const m = this.randInt(1, 4), x = a * m;
    return mk('6N6', 3, {
      title: 'Retrouver la longueur de l\'unité',
      statement: `Sur une demi-droite graduée d'origine O, le point A a pour abscisse $${F(a, b)}$.\nSur le dessin, la longueur OA mesure $${x}$ cm.\n**Quelle est la longueur de l'unité (de O au point d'abscisse 1), en cm ?**`,
      type: 'exact', answer: String(b * m), placeholder: 'Ex : 6',
      hint1: `$${F(a, b)}$, c'est $${a}$ fois $${F(1, b)}$ : cherche d'abord la longueur qui correspond à $${F(1, b)}$.`,
      hint2: `L'unité est partagée en $${b}$ parts égales de longueur $${F(1, b)}$ d'unité.`,
      solution: `Étape 1 : $${F(a, b)}$ de l'unité mesure $${x}$ cm, donc $${F(1, b)}$ de l'unité mesure $${x} \\div ${a} = ${m}$ cm.\nÉtape 2 : l'unité contient $${b}$ fois $${F(1, b)}$ : $${b} \\times ${m} = ${b * m}$ cm.\nL'unité mesure $${b * m}$ cm.`,
      skill: 'Représenter',
      _v: { k: '6N6.unitlen', a, b, x }
    });
  });

  G._6X_origWeight('6N6', 4, 4);
  G._6X_add('6N6', 4, function () {
    const notDec = (n, d) => { let m = this.simplifyFraction(n, d)[1]; while (m % 2 === 0) m /= 2; while (m % 5 === 0) m /= 5; return m !== 1; };
    let a, b; do { b = this.randChoice([3, 6, 7, 9, 11, 12]); a = this.randInt(1, 5 * b); } while (!notDec(a, b));
    const r = Math.round(a / b * 10) / 10;
    const h = Math.floor(a * 1000 / b) / 1000;
    const cent = Math.floor(a * 100 / b) % 10;
    return mk('6N6', 4, {
      title: 'Arrondir le quotient d\'une fraction',
      statement: `Le nombre $${F(a, b)}$ n'est pas un nombre décimal.\n**Donner son arrondi au dixième.**`,
      type: 'exact', answer: this._6ans(r), placeholder: 'Ex : 2,3',
      hint1: `$${F(a, b)}$ est le quotient de $${a}$ par $${b}$ : pose la division décimale jusqu'au chiffre des centièmes.`,
      hint2: 'Pour arrondir au dixième, on regarde le chiffre des centièmes : de 0 à 4, on garde le chiffre des dixièmes ; de 5 à 9, on l\'augmente de 1.',
      solution: `Étape 1 : la division de $${a}$ par $${b}$ donne $${F(a, b)} \\approx ${this._6tex(h)}\\dots$\nÉtape 2 : le chiffre des centièmes est $${cent}$, ${cent >= 5 ? 'on augmente donc le chiffre des dixièmes de 1' : 'on garde donc le chiffre des dixièmes'}.\nL'arrondi au dixième de $${F(a, b)}$ est $${this._6tex(r)}$.`,
      skill: 'Calculer',
      _v: { k: '6N6.round10', a, b }
    });
  });

  // =====================================================================
  // 6N7 — Calculs avec les fractions
  // =====================================================================
  G._6X_origWeight('6N7', 1, 4);
  G._6X_add('6N7', 1, function () {
    const ctx = this.randChoice([
      { tot: 60, big: 'heure', small: 'minutes', dens: [2, 3, 4, 5, 6, 10, 12] },
      { tot: 1000, big: 'kilogramme', small: 'grammes', dens: [2, 4, 5, 8, 10] },
      { tot: 100, big: 'mètre', small: 'centimètres', dens: [2, 4, 5, 10] },
      { tot: 1000, big: 'litre', small: 'millilitres', dens: [2, 4, 5, 10] }
    ]);
    let a, b; do { b = this.randChoice(ctx.dens); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
    const part = ctx.tot / b, ans = part * a;
    return mk('6N7', 1, {
      title: 'Fraction d\'une unité de mesure',
      statement: `Combien de ${ctx.small} y a-t-il dans $${F(a, b)}$ de ${ctx.big} ?`,
      type: 'exact', answer: String(ans), placeholder: 'Ex : 45',
      hint1: `Commence par écrire combien de ${ctx.small} il y a dans ${ctx.big === 'heure' ? 'une heure entière' : `un ${ctx.big} entier`}.`,
      hint2: `Prendre $${F(a, b)}$ d'une quantité : on la partage en $${b}$ parts égales (division par $${b}$), puis on prend $${a}$ part${a > 1 ? 's' : ''} (multiplication par $${a}$).`,
      solution: `Étape 1 : ${ctx.big === 'heure' ? 'une heure' : `un ${ctx.big}`} vaut $${this._6tex(ctx.tot)}$ ${ctx.small}.\nÉtape 2 : $${this._6tex(ctx.tot)} \\div ${b} = ${this._6tex(part)}$, puis $${this._6tex(part)} \\times ${a} = ${this._6tex(ans)}$.\nIl y a $${this._6tex(ans)}$ ${ctx.small} dans $${F(a, b)}$ de ${ctx.big}.`,
      skill: 'Calculer',
      _v: { k: '6N7.ofunit', a, b, tot: ctx.tot }
    });
  });

  G._6X_origWeight('6N7', 2, 3);
  G._6X_add('6N7', 2, function () {
    let a, b; do { b = this.randInt(3, 15); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
    return mk('6N7', 2, {
      title: 'Compléter pour obtenir 1',
      statement: `Quelle fraction faut-il ajouter à $${F(a, b)}$ pour obtenir $1$ ?\nDonner le résultat sous forme de fraction irréductible.`,
      type: 'exact', answer: this._6fracAns(b - a, b), placeholder: 'Ex : 3/7',
      hint1: `Écris $1$ sous la forme d'une fraction de dénominateur $${b}$.`,
      hint2: 'Pour soustraire deux fractions de même dénominateur, on soustrait les numérateurs et on garde le dénominateur.',
      solution: `Étape 1 : $1 = ${F(b, b)}$.\nÉtape 2 : $${F(b, b)} - ${F(a, b)} = ${F(`${b} - ${a}`, b)} = ${F(b - a, b)}$.\nIl faut ajouter $${F(b - a, b)}$ (vérification : $${F(a, b)} + ${F(b - a, b)} = ${F(b, b)} = 1$).`,
      _v: { k: '6N7.complete1', a, b }
    });
  });
  G._6X_add('6N7', 2, function () {
    let a, b; do { b = this.randInt(2, 12); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
    const n = this.randInt(1, 6);
    return mk('6N7', 2, {
      title: 'Différence d\'un entier et d\'une fraction',
      statement: `Calculer :\n$$${n} - ${F(a, b)}$$\nDonner le résultat sous forme de fraction irréductible.`,
      type: 'exact', answer: this._6fracAns(n * b - a, b), placeholder: 'Ex : 7/4',
      hint1: `Écris l'entier $${n}$ sous la forme d'une fraction de dénominateur $${b}$.`,
      hint2: 'Un entier $n$ s\'écrit $\\frac{n \\times b}{b}$ ; on soustrait ensuite les numérateurs en gardant le dénominateur commun.',
      solution: `Étape 1 : $${n} = ${F(n * b, b)}$.\nÉtape 2 : $${F(n * b, b)} - ${F(a, b)} = ${F(`${n * b} - ${a}`, b)} = ${F(n * b - a, b)}$.\nDonc $${n} - ${F(a, b)} = ${F(n * b - a, b)}$.`,
      _v: { k: '6N7.subint', n, a, b }
    });
  });

  G._6X_origWeight('6N7', 3, 4);
  G._6X_add('6N7', 3, function () {
    let a, b; do { b = this.randChoice([3, 4, 5, 6, 8, 10]); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
    const u = this.randInt(2, 15), R = (b - a) * u;
    const name = this.randChoice(PRENOMS);
    return mk('6N7', 3, {
      title: 'Problème : retrouver le total à partir du reste',
      statement: `${name} a dépensé les $${F(a, b)}$ de son argent de poche. Il lui reste $${R}$ €.\n**Combien avait-il (ou elle) d'argent de poche au départ, en euros ?**`,
      type: 'exact', answer: String(b * u), placeholder: 'Ex : 60',
      hint1: 'Commence par trouver la fraction de l\'argent de poche qui reste.',
      hint2: `Le tout correspond à $1 = ${F(b, b)}$. Si plusieurs parts valent une certaine somme, une part vaut cette somme divisée par le nombre de parts.`,
      solution: `Étape 1 : il reste $${F(b, b)} - ${F(a, b)} = ${F(b - a, b)}$ de l'argent de poche.\nÉtape 2 : $${b - a}$ part${b - a > 1 ? 's' : ''} sur $${b}$ valent $${R}$ €, donc une part vaut $${R} \\div ${b - a} = ${u}$ €.\nÉtape 3 : le total compte $${b}$ parts : $${b} \\times ${u} = ${b * u}$ €.\n${name} avait $${b * u}$ € au départ.`,
      skill: 'Résoudre',
      _v: { k: '6N7.whole2', a, b, R }
    });
  });

  G._6X_origWeight('6N7', 4, 4);
  G._6X_add('6N7', 4, function () {
    let a, b; do { b = this.randChoice([3, 4, 5, 6, 8, 10]); a = this.randInt(1, b - 1); } while (this.gcd(a, b) !== 1);
    const u = this.randInt(3, 40), V = a * u;
    const obj = this.randChoice([['Une cuve', 'L'], ['Un réservoir', 'L'], ['Une piscine gonflable', 'L'], ['Un arrosoir géant', 'L']]);
    return mk('6N7', 4, {
      title: 'Remplir un réservoir',
      statement: `${obj[0]} est remplie aux $${F(a, b)}$ de sa capacité : elle contient $${V}$ ${obj[1]}.\n**Combien de litres faut-il encore ajouter pour la remplir complètement ?**`,
      type: 'exact', answer: String((b - a) * u), placeholder: 'Ex : 15',
      hint1: 'Deux étapes : trouve ce que représente une part de la capacité, puis la fraction qui manque.',
      hint2: `Si $${F(a, b)}$ d'une quantité valent un nombre, alors $${F(1, b)}$ de cette quantité vaut ce nombre divisé par $${a}$.`,
      solution: `Étape 1 : $${F(a, b)}$ de la capacité valent $${V}$ L, donc $${F(1, b)}$ vaut $${V} \\div ${a} = ${u}$ L.\nÉtape 2 : il manque $${F(b, b)} - ${F(a, b)} = ${F(b - a, b)}$ de la capacité.\nÉtape 3 : $${b - a} \\times ${u} = ${(b - a) * u}$ L.\nIl faut encore ajouter $${(b - a) * u}$ L (la capacité totale est $${b * u}$ L).`,
      skill: 'Résoudre',
      _v: { k: '6N7.tank', a, b, V }
    });
  });

  // =====================================================================
  // 6N8 — Pensée algébrique
  // =====================================================================
  G._6X_origWeight('6N8', 1, 1.5);
  G._6X_add('6N8', 1, function () {
    const a = this.randInt(2, 5), b = this.randInt(1, 10), x = this.randInt(1, 10);
    const add = Math.random() < 0.6;
    const r = add ? a * x + b : a * x - b;
    if (r <= 0) return null;
    const step2 = add ? `Ajouter $${b}$` : `Soustraire $${b}$`;
    return mk('6N8', 1, {
      title: 'Appliquer un programme de calcul',
      statement: `Voici un programme de calcul :\n• Choisir un nombre.\n• Le multiplier par $${a}$.\n• ${step2} au résultat.\n**Quel nombre obtient-on si l'on choisit $${x}$ au départ ?**`,
      type: 'exact', answer: String(r),
      hint1: 'Effectue les instructions une par une, dans l\'ordre, en partant du nombre choisi.',
      hint2: 'Dans un programme de calcul, chaque étape s\'applique au résultat de l\'étape précédente.',
      solution: `Étape 1 : $${x} \\times ${a} = ${a * x}$.\nÉtape 2 : $${a * x} ${add ? '+' : '-'} ${b} = ${r}$.\nEn choisissant $${x}$, on obtient $${r}$.`,
      _v: { k: '6N8.prog1', a, b, x, add }
    });
  });
  G._6X_add('6N8', 1, function () {
    const d = this.randInt(2, 12), len = this.randInt(4, 5), up = Math.random() < 0.65;
    const u0 = up ? this.randInt(1, 30) : d * (len + 1) + this.randInt(0, 40);
    const terms = []; for (let i = 0; i < len; i++) terms.push(u0 + (up ? d : -d) * i);
    const next = terms[len - 1] + (up ? d : -d);
    return mk('6N8', 1, {
      title: 'Compléter une suite de nombres',
      statement: `Dans cette suite, on passe d'un nombre au suivant en ${up ? 'ajoutant' : 'soustrayant'} toujours le même nombre :\n$$${terms.join(' \\; ; \\; ')} \\; ; \\; \\dots$$\n**Quel est le nombre suivant ?**`,
      type: 'exact', answer: String(next),
      hint1: 'Calcule l\'écart entre deux nombres qui se suivent.',
      hint2: 'Une suite régulière garde le même écart entre deux termes consécutifs : on le vérifie sur plusieurs couples de nombres.',
      solution: `Étape 1 : écart entre deux nombres consécutifs : $${up ? `${terms[1]} - ${terms[0]}` : `${terms[0]} - ${terms[1]}`} = ${d}$ (on vérifie : il est le même partout).\nÉtape 2 : $${terms[len - 1]} ${up ? '+' : '-'} ${d} = ${next}$.\nLe nombre suivant est $${next}$.`,
      skill: 'Chercher',
      _v: { k: '6N8.seq', terms }
    });
  });
  G._6X_add('6N8', 1, function () {
    const shape = this.randChoice(Object.keys(MOTIFS));
    const n = this.randInt(4, 6), ans = motifCount(shape, n);
    const { c1, d } = motifInfo(shape);
    const steps = [1, 2, 3].map(k => motifCount(shape, k));
    return mk('6N8', 1, {
      title: 'Motif évolutif dessiné',
      statement: `Voici les trois premières étapes d'un motif ${MOTIFS[shape].nom} :\n${motifSvg(this, shape)}**Combien de carreaux compte l'étape $${n}$ ?**`,
      type: 'exact', answer: String(ans),
      hint1: 'Compte les carreaux des étapes 1, 2 et 3 : que remarques-tu d\'une étape à la suivante ?',
      hint2: 'Dans un motif régulier, on ajoute toujours le même nombre de carreaux pour passer d\'une étape à la suivante.',
      solution: `Étape 1 : on compte $${steps.join('$, $')}$ carreaux : on ajoute $${d}$ carreaux à chaque étape.\nÉtape 2 : on continue : ${[4, 5, 6].slice(0, n - 3).map((k) => `étape $${k}$ : $${motifCount(shape, k - 1)} + ${d} = ${motifCount(shape, k)}$`).join(' ; ')}.\nL'étape $${n}$ compte $${ans}$ carreaux (on peut aussi calculer $${c1} + ${n - 1} \\times ${d} = ${ans}$).`,
      skill: 'Chercher',
      _v: { k: '6N8.motif', shape, n }
    });
  });
  G._6X_add('6N8', 1, function () {
    const op = this.randChoice(['add', 'sub', 'mul', 'half']);
    let x, a, r, txt, inv, invTxt;
    if (op === 'add') { x = this.randInt(3, 80); a = this.randInt(5, 60); r = x + a; txt = `Je lui ajoute $${a}$`; inv = `${r} - ${a}`; invTxt = 'Le contraire de « ajouter » est « soustraire »'; }
    else if (op === 'sub') { x = this.randInt(20, 99); a = this.randInt(3, x - 1); r = x - a; txt = `Je lui soustrais $${a}$`; inv = `${r} + ${a}`; invTxt = 'Le contraire de « soustraire » est « ajouter »'; }
    else if (op === 'mul') { x = this.randInt(2, 12); a = this.randInt(2, 9); r = x * a; txt = `Je le multiplie par $${a}$`; inv = `${r} \\div ${a}`; invTxt = 'Le contraire de « multiplier » est « diviser »'; }
    else { x = 2 * this.randInt(3, 40); a = 2; r = x / 2; txt = 'J\'en prends la moitié'; inv = `${r} \\times 2`; invTxt = 'Le contraire de « prendre la moitié » est « doubler »'; }
    return mk('6N8', 1, {
      title: 'Je pense à un nombre',
      statement: `Je pense à un nombre. ${txt}. J'obtiens $${r}$.\n**À quel nombre ai-je pensé ?**`,
      type: 'exact', answer: String(x),
      hint1: 'Pour retrouver le nombre de départ, on effectue l\'opération contraire.',
      hint2: 'Addition et soustraction se « défont » l\'une l\'autre, de même que multiplication et division.',
      solution: `Étape 1 : ${invTxt}.\nÉtape 2 : $${inv} = ${x}$.\nJ'ai pensé à $${x}$ (vérification : on retrouve bien $${r}$).`,
      _v: { k: '6N8.think1', op, a, r }
    });
  });

  G._6X_origWeight('6N8', 2, 4);
  G._6X_add('6N8', 2, function () {
    const d = this.randInt(3, 25), len = 5, u0 = this.randInt(1, 50);
    const terms = []; for (let i = 0; i < len; i++) terms.push(u0 + d * i);
    const gap = this.randInt(1, 3);
    const shown = terms.map((x, i) => (i === gap ? '\\square' : String(x)));
    return mk('6N8', 2, {
      title: 'Nombre manquant dans une suite régulière',
      statement: `Dans cette suite, on ajoute toujours le même nombre pour passer d'un terme au suivant :\n$$${shown.join(' \\; ; \\; ')}$$\n**Quel nombre faut-il écrire dans la case ?**`,
      type: 'exact', answer: String(terms[gap]),
      hint1: 'Repère deux nombres connus qui se suivent pour trouver le nombre ajouté à chaque fois.',
      hint2: 'Dans une suite régulière, l\'écart entre deux termes consécutifs est toujours le même.',
      solution: `Étape 1 : écart constant : $${gap >= 2 ? `${terms[1]} - ${terms[0]}` : `${terms[4]} - ${terms[3]}`} = ${d}$.\nÉtape 2 : le terme manquant vaut $${terms[gap - 1]} + ${d} = ${terms[gap]}$.\nVérification : $${terms[gap]} + ${d} = ${terms[gap + 1]}$. Le nombre manquant est $${terms[gap]}$.`,
      skill: 'Chercher',
      _v: { k: '6N8.seqgap', shown: shown.map(s => (s === '\\square' ? null : +s)) }
    });
  });
  G._6X_add('6N8', 2, function () {
    const a = this.randInt(2, 9), x = this.randInt(2, 15), b = this.randInt(1, 30);
    const c = a * x + b;
    return mk('6N8', 2, {
      title: 'Égalité à trou en deux étapes',
      statement: `Quel nombre faut-il écrire dans la case pour que l'égalité soit vraie ?\n$$${a} \\times \\square + ${b} = ${c}$$`,
      type: 'exact', answer: String(x),
      hint1: `Commence par trouver la valeur de $${a} \\times \\square$.`,
      hint2: 'Terme manquant d\'une somme : on soustrait. Facteur manquant d\'un produit : on divise.',
      solution: `Étape 1 : $${a} \\times \\square + ${b} = ${c}$ donc $${a} \\times \\square = ${c} - ${b} = ${a * x}$.\nÉtape 2 : $\\square = ${a * x} \\div ${a} = ${x}$.\nVérification : $${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${c}$. Le nombre est $${x}$.`,
      _v: { k: '6N8.hole2', a, b, c }
    });
  });

  G._6X_origWeight('6N8', 3, 4);
  G._6X_add('6N8', 3, function () {
    const small = this.randInt(5, 60), D = this.randInt(2, 30), big = small + D, S = small + big;
    const [p1, p2] = this.shuffle(PRENOMS).slice(0, 2);
    const obj = this.randChoice(['billes', 'cartes', 'timbres', 'images']);
    const askBig = Math.random() < 0.5;
    return mk('6N8', 3, {
      title: 'Somme et différence de deux nombres inconnus',
      statement: `Ensemble, ${p1} et ${p2} ont $${S}$ ${obj}. ${p2} en a $${D}$ de plus que ${p1}.\n**Combien de ${obj} a ${askBig ? p2 : p1} ?**`,
      type: 'exact', answer: String(askBig ? big : small),
      hint1: `Fais un schéma en barres : la barre de ${p2} est celle de ${p1} avec un morceau de $${D}$ en plus.`,
      hint2: 'Si l\'on retire l\'écart du total, il reste deux parts égales.',
      solution: `Étape 1 : on retire l'écart : $${S} - ${D} = ${2 * small}$ ; il reste deux parts égales à la part de ${p1}.\nÉtape 2 : ${p1} a $${2 * small} \\div 2 = ${small}$ ${obj}.\nÉtape 3 : ${p2} a $${small} + ${D} = ${big}$ ${obj}.\nVérification : $${small} + ${big} = ${S}$. Réponse : $${askBig ? big : small}$ ${obj}.`,
      skill: 'Modéliser',
      _v: { k: '6N8.sumdiff', S, D, askBig }
    });
  });
  G._6X_add('6N8', 3, function () {
    const shape = this.randChoice(Object.keys(MOTIFS));
    const n = this.randInt(10, 40), ans = motifCount(shape, n);
    const { c1, d } = motifInfo(shape);
    return mk('6N8', 3, {
      title: 'Motif dessiné : étape éloignée',
      statement: `Voici les trois premières étapes d'un motif ${MOTIFS[shape].nom} :\n${motifSvg(this, shape)}**Combien de carreaux compte l'étape $${n}$ ?**`,
      type: 'exact', answer: String(ans),
      hint1: 'Inutile de dessiner toutes les étapes : cherche combien de carreaux on ajoute à chaque étape et combien de fois on les ajoute.',
      hint2: 'Entre l\'étape 1 et l\'étape $n$, on effectue $n - 1$ ajouts identiques.',
      solution: `Étape 1 : l'étape 1 compte $${c1}$ carreaux et on ajoute $${d}$ carreaux à chaque étape.\nÉtape 2 : de l'étape 1 à l'étape $${n}$, on fait $${n - 1}$ ajouts : $${n - 1} \\times ${d} = ${(n - 1) * d}$.\nÉtape 3 : $${c1} + ${(n - 1) * d} = ${ans}$.\nL'étape $${n}$ compte $${ans}$ carreaux.`,
      skill: 'Chercher',
      _v: { k: '6N8.motif', shape, n }
    });
  });

  G._6X_origWeight('6N8', 4, 4);
  G._6X_add('6N8', 4, function () {
    let a, b, c, d, x;
    do { a = this.randInt(3, 9); c = this.randInt(2, a - 1); x = this.randInt(2, 12); b = this.randInt(1, 20); d = (a - c) * x + b; } while (d > 120);
    const tbl = [0, 1, 2].map(k => `$${k}$ donne $${a * k + b}$ avec A et $${c * k + d}$ avec B`).join(' ; ');
    return mk('6N8', 4, {
      title: 'Deux programmes, un même résultat',
      statement: `• **Programme A** : choisir un nombre, le multiplier par $${a}$, puis ajouter $${b}$.\n• **Programme B** : choisir un nombre, le multiplier par $${c}$, puis ajouter $${d}$.\n**Quel nombre faut-il choisir pour obtenir le même résultat avec les deux programmes ?**`,
      type: 'exact', answer: String(x),
      hint1: 'Teste quelques nombres entiers avec les deux programmes et observe comment évolue l\'écart entre les résultats.',
      hint2: `Quand le nombre choisi augmente de 1, le résultat de A augmente de $${a}$ et celui de B de $${c}$ : l'écart se réduit donc de $${a} - ${c}$ à chaque fois.`,
      solution: `Étape 1 : essais : ${tbl}.\nÉtape 2 : avec $0$, l'écart est $${d} - ${b} = ${d - b}$ ; il diminue de $${a - c}$ quand le nombre augmente de 1. Il s'annule après $${d - b} \\div ${a - c} = ${x}$ augmentations.\nÉtape 3 : vérification avec $${x}$ : $${a} \\times ${x} + ${b} = ${a * x + b}$ et $${c} \\times ${x} + ${d} = ${c * x + d}$.\nIl faut choisir $${x}$.`,
      skill: 'Raisonner',
      _v: { k: '6N8.twoprogs', a, b, c, d }
    });
  });
  G._6X_add('6N8', 4, function () {
    const shape = this.randChoice(Object.keys(MOTIFS));
    const n = this.randInt(12, 60), N = motifCount(shape, n);
    const { c1, d } = motifInfo(shape);
    return mk('6N8', 4, {
      title: 'Motif : retrouver le numéro de l\'étape',
      statement: `Voici les trois premières étapes d'un motif ${MOTIFS[shape].nom} :\n${motifSvg(this, shape)}**À quelle étape le motif compte-t-il $${N}$ carreaux ?**`,
      type: 'exact', answer: String(n),
      hint1: 'Trouve d\'abord combien de carreaux on ajoute à chaque étape, puis combien de carreaux ont été ajoutés depuis l\'étape 1.',
      hint2: 'Le nombre de carreaux à l\'étape $n$ est égal au nombre de l\'étape 1 augmenté de $n - 1$ ajouts identiques.',
      solution: `Étape 1 : l'étape 1 compte $${c1}$ carreaux et on en ajoute $${d}$ à chaque étape.\nÉtape 2 : carreaux ajoutés depuis l'étape 1 : $${N} - ${c1} = ${N - c1}$, soit $${N - c1} \\div ${d} = ${n - 1}$ ajouts.\nÉtape 3 : après $${n - 1}$ ajouts, on est à l'étape $${n - 1} + 1 = ${n}$.\nLe motif compte $${N}$ carreaux à l'étape $${n}$.`,
      skill: 'Chercher',
      _v: { k: '6N8.motifrev', shape, N }
    });
  });

  // =====================================================================
  // 6P1 — Proportionnalité
  // =====================================================================
  const table = (h1, h2, r1, r2) => `$$\\begin{array}{|l|${r1.map(() => 'c').join('|')}|}\\hline \\text{${h1}} & ${r1.join(' & ')} \\\\ \\hline \\text{${h2}} & ${r2.join(' & ')} \\\\ \\hline \\end{array}$$`;

  G._6X_origWeight('6P1', 1, 3);
  G._6X_add('6P1', 1, function () {
    const k = this.randInt(2, 9);
    const xs = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 10]).slice(0, 3).sort((a, b) => a - b);
    const ys = xs.map(x => x * k);
    const i = this.randInt(1, 2), row = Math.random() < 0.7 ? 'y' : 'x';
    const ctx = this.randChoice([['Nombre de paquets', 'Nombre de biscuits'], ['Nombre de tours de piste', 'Distance (hm)'], ['Nombre de boîtes', 'Nombre d\'œufs'], ['Nombre de tickets', 'Prix (€)']]);
    const r1 = xs.map((x, j) => (row === 'x' && j === i ? '\\square' : x));
    const r2 = ys.map((y, j) => (row === 'y' && j === i ? '\\square' : y));
    const j0 = i === 1 ? 0 : 1;
    const ans = row === 'y' ? ys[i] : xs[i];
    return mk('6P1', 1, {
      title: 'Compléter un tableau de proportionnalité',
      statement: `Ce tableau est un tableau de proportionnalité. **Quel nombre faut-il écrire dans la case ?**\n${table(ctx[0], ctx[1], r1, r2)}`,
      type: 'exact', answer: String(ans),
      hint1: 'Utilise une colonne complète pour trouver par quel nombre on multiplie la première ligne.',
      hint2: 'Dans un tableau de proportionnalité, on passe de la première ligne à la deuxième en multipliant toujours par le même nombre : le coefficient de proportionnalité.',
      solution: `Étape 1 : dans la colonne complète, $${ys[j0]} \\div ${xs[j0]} = ${k}$ : le coefficient de proportionnalité est $${k}$.\nÉtape 2 : ${row === 'y' ? `$${xs[i]} \\times ${k} = ${ys[i]}$` : `on cherche le nombre qui, multiplié par $${k}$, donne $${ys[i]}$ : $${ys[i]} \\div ${k} = ${xs[i]}$`}.\nLe nombre manquant est $${ans}$.`,
      skill: 'Calculer',
      _v: { k: '6P1.tab', r1: r1.map(v => (v === '\\square' ? null : v)), r2: r2.map(v => (v === '\\square' ? null : v)) }
    });
  });
  G._6X_add('6P1', 1, function () {
    const p = this.randChoice([10, 25, 50]);
    const N = (p === 25 ? 4 : (p === 50 ? 2 : 10)) * this.randInt(2, 30);
    const obj = this.randChoice(['Un pull', 'Un jeu de société', 'Une lampe', 'Un ballon', 'Un livre']);
    const how = p === 50 ? 'la moitié' : (p === 25 ? 'le quart' : 'le dixième');
    const div = p === 50 ? 2 : (p === 25 ? 4 : 10);
    return mk('6P1', 1, {
      title: 'Pourcentage simple',
      statement: `${obj} coûte $${N}$ €. Le magasin accorde une réduction de $${p} \\, \\%$.\n**Quel est le montant de la réduction, en euros ?**`,
      type: 'exact', answer: String(N / div),
      hint1: `$${p} \\, \\%$ correspond à une fraction simple du prix : laquelle ?`,
      hint2: `Rappel : $${p} \\, \\% = ${F(p, 100)}$ ; un pourcentage est une fraction de dénominateur cent, que l'on peut souvent simplifier.`,
      solution: `Étape 1 : $${p} \\, \\% = ${F(p, 100)}$, c'est ${how}.\nÉtape 2 : $${N} \\div ${div} = ${N / div}$.\nLa réduction est de $${N / div}$ €.`,
      _v: { k: '6P1.pctsimple', p, N }
    });
  });
  G._6X_add('6P1', 1, function () {
    const u = this.randInt(2, 9), a = this.randInt(2, 5);
    let b; do { b = this.randInt(2, 7); } while (b === a);
    const it = this.randChoice([['cahiers', 'cahiers'], ['croissants', 'croissants'], ['tickets de bus', 'tickets'], ['places de musée', 'places']]);
    return mk('6P1', 1, {
      title: 'Linéarité additive',
      statement: `Le prix est proportionnel au nombre d'articles.\n• $${a}$ ${it[0]} coûtent $${a * u}$ €.\n• $${b}$ ${it[0]} coûtent $${b * u}$ €.\n**Combien coûtent $${a + b}$ ${it[1]} ?**`,
      type: 'exact', answer: String((a + b) * u),
      hint1: `Remarque que $${a + b} = ${a} + ${b}$.`,
      hint2: 'Dans une situation de proportionnalité, à la somme de deux quantités correspond la somme des prix.',
      solution: `Étape 1 : $${a + b}$ ${it[1]}, c'est $${a}$ ${it[1]} et $${b}$ ${it[1]}.\nÉtape 2 : le prix est donc $${a * u} + ${b * u} = ${(a + b) * u}$ €.\n$${a + b}$ ${it[1]} coûtent $${(a + b) * u}$ €.`,
      skill: 'Résoudre',
      _v: { k: '6P1.addlin', a, A: a * u, b, B: b * u }
    });
  });

  G._6X_origWeight('6P1', 2, 4);
  G._6X_add('6P1', 2, function () {
    const N = this.randChoice([20, 25, 50, 200, 300, 400, 500]);
    let p; do { p = this.randChoice([10, 20, 25, 30, 40, 50, 60, 75, 80, 90]); } while ((N * p) % 100 !== 0);
    const M = N * p / 100;
    const ctx = this.randChoice([['Un collège compte', 'élèves', 'sont demi-pensionnaires', 'd\'élèves demi-pensionnaires'], ['Une salle de concert contient', 'places', 'sont occupées', 'de places occupées'], ['Un verger compte', 'arbres', 'sont des pommiers', 'de pommiers']]);
    return mk('6P1', 2, {
      title: 'Exprimer une proportion en pourcentage',
      statement: `${ctx[0]} $${N}$ ${ctx[1]}, dont $${M}$ ${ctx[2]}.\n**Quel est le pourcentage ${ctx[3]} ?** (donner le nombre seul, sans le symbole %)`,
      type: 'exact', answer: String(p), placeholder: 'Ex : 35',
      hint1: `Cherche combien cela représenterait sur $100$ ${ctx[1]} (et non sur $${N}$).`,
      hint2: 'Un pourcentage est une proportion exprimée sur 100 : $p \\, \\%$ signifie $p$ sur $100$.',
      solution: `Étape 1 : la proportion est $${F(M, N)}$.\nÉtape 2 : on cherche une fraction égale de dénominateur $100$ : ${N > 100 ? `$${F(M, N)} = ${F(`${M} \\div ${N / 100}`, `${N} \\div ${N / 100}`)}` : `$${F(M, N)} = ${F(`${M} \\times ${100 / N}`, `${N} \\times ${100 / N}`)}`} = ${F(p, 100)}$.\nLe pourcentage est $${p} \\, \\%$.`,
      skill: 'Calculer',
      _v: { k: '6P1.pctfind', N, M }
    });
  });

  G._6X_origWeight('6P1', 3, 4);
  G._6X_add('6P1', 3, function () {
    const p = this.randChoice([5, 10, 15, 20, 25, 50]);
    const N = this.randInt(2, 40) * 20;
    const inc = N * p / 100;
    const obj = this.randChoice(['de l\'abonnement de transport', 'de la cotisation au club de sport', 'du loyer d\'un garage', 'de l\'abonnement à la médiathèque']);
    return mk('6P1', 3, {
      title: 'Augmentation en pourcentage',
      statement: `Le prix ${obj}, qui était de $${N}$ €, augmente de $${p} \\, \\%$.\n**Quel est le nouveau prix, en euros ?**`,
      type: 'exact', answer: this._6ans(N + inc), placeholder: 'Ex : 46',
      hint1: 'Calcule d\'abord le montant de l\'augmentation, puis ajoute-le au prix de départ.',
      hint2: `Rappel : prendre $${p} \\, \\%$ d'un nombre, c'est le multiplier par $${p}$ puis diviser le résultat par cent.`,
      solution: `Étape 1 : augmentation : $${F(p, 100)} \\times ${N} = ${this._6tex(inc)}$ €.\nÉtape 2 : nouveau prix : $${N} + ${this._6tex(inc)} = ${this._6tex(N + inc)}$ €.\nLe nouveau prix est $${this._6tex(N + inc)}$ €.`,
      _v: { k: '6P1.pctinc', p, N }
    });
  });
  G._6X_add('6P1', 3, function () {
    const p = this.randChoice([2, 4, 6]), g = this.randChoice([25, 30, 40, 50, 60, 75]);
    let n2; do { n2 = this.randInt(3, 15); } while (n2 === p || n2 % p === 0);
    const q = p * g, Q = n2 * g;
    const ing = this.randChoice(['farine', 'sucre', 'riz', 'chocolat']);
    return mk('6P1', 3, {
      title: 'Recette : nombre de personnes',
      statement: `Une recette pour $${p}$ personnes demande $${q}$ g de ${ing}. On utilise $${this._6tex(Q)}$ g de ${ing} en respectant les proportions.\n**Pour combien de personnes prépare-t-on la recette ?**`,
      type: 'exact', answer: String(n2), placeholder: 'Ex : 9',
      hint1: 'Calcule d\'abord la masse nécessaire pour une seule personne.',
      hint2: 'Passage par l\'unité : dans une situation de proportionnalité, on calcule d\'abord la valeur correspondant à 1.',
      solution: `Étape 1 : pour $1$ personne : $${q} \\div ${p} = ${g}$ g de ${ing}.\nÉtape 2 : nombre de personnes : $${this._6tex(Q)} \\div ${g} = ${n2}$.\nOn prépare la recette pour $${n2}$ personnes.`,
      _v: { k: '6P1.recipeinv', p, q, Q }
    });
  });

  G._6X_origWeight('6P1', 4, 4);
  G._6X_add('6P1', 4, function () {
    const base = this.randChoice([10, 15, 20]), dd = this.randInt(4, 30);
    const i = this.randInt(2, 4);
    let j; do { j = this.randInt(4, 10); } while (j === i || j % i === 0);
    const m1 = base * i, m2 = base * j;
    const veh = this.randChoice(['Un train', 'Un car', 'Une voiture', 'Un bateau']);
    return mk('6P1', 4, {
      title: 'Vitesse constante et durées',
      statement: `${veh} roule à vitesse constante. Il parcourt $${dd * i}$ km en ${dur(m1)}.\n**Quelle distance parcourt-il en ${dur(m2)}, en km ?**`,
      type: 'exact', answer: String(dd * j), placeholder: 'Ex : 105',
      hint1: 'Convertis les deux durées en minutes, puis cherche une durée « simple » contenue un nombre entier de fois dans chacune.',
      hint2: 'À vitesse constante, la distance parcourue est proportionnelle à la durée du trajet.',
      solution: `Étape 1 : ${dur(m1)} $= ${m1}$ min et ${dur(m2)} $= ${m2}$ min.\nÉtape 2 : en $${base}$ min, il parcourt $${dd * i} \\div ${i} = ${dd}$ km (car $${m1} = ${i} \\times ${base}$).\nÉtape 3 : $${m2} = ${j} \\times ${base}$, donc il parcourt $${j} \\times ${dd} = ${dd * j}$ km.\nEn ${dur(m2)}, il parcourt $${dd * j}$ km.`,
      skill: 'Résoudre',
      _v: { k: '6P1.speed', D: dd * i, m1, m2 }
    });
  });
  G._6X_add('6P1', 4, function () {
    const step = { 20: 5, 25: 4, 50: 2 };
    let n1, n2, p1, p2, a1, a2;
    do {
      n1 = this.randChoice([20, 25, 50]); n2 = this.randChoice([20, 25, 50]);
      p1 = step[n1] * this.randInt(Math.ceil(20 / step[n1]), Math.floor(90 / step[n1]));
      p2 = step[n2] * this.randInt(Math.ceil(20 / step[n2]), Math.floor(90 / step[n2]));
      a1 = n1 * p1 / 100; a2 = n2 * p2 / 100;
    } while (p1 === p2 || n1 === n2 || (a1 > a2) === (p1 > p2) && Math.random() < 0.6);
    return mk('6P1', 4, {
      title: 'Comparer deux proportions',
      statement: `Dans la classe A, $${a1}$ élèves sur $${n1}$ font partie d'un club sportif. Dans la classe B, ce sont $${a2}$ élèves sur $${n2}$.\n**Quel est le plus grand des deux pourcentages d'élèves inscrits dans un club ?** (donner le nombre seul)`,
      type: 'exact', answer: String(Math.max(p1, p2)), placeholder: 'Ex : 64',
      hint1: 'Les effectifs des classes sont différents : compare des proportions, pas des nombres d\'élèves. Exprime chacune sur 100.',
      hint2: 'Un pourcentage est une fraction de dénominateur 100 ; on obtient une fraction égale en multipliant numérateur et dénominateur par un même nombre.',
      solution: `Étape 1 : classe A : $${F(a1, n1)} = ${F(`${a1} \\times ${100 / n1}`, `${n1} \\times ${100 / n1}`)} = ${F(p1, 100)}$, soit $${p1} \\, \\%$.\nÉtape 2 : classe B : $${F(a2, n2)} = ${F(`${a2} \\times ${100 / n2}`, `${n2} \\times ${100 / n2}`)} = ${F(p2, 100)}$, soit $${p2} \\, \\%$.\nLe plus grand pourcentage est $${Math.max(p1, p2)} \\, \\%$ (classe ${p1 > p2 ? 'A' : 'B'})${(a1 > a2) !== (p1 > p2) ? ', alors que cette classe compte moins d\'inscrits' : ''}.`,
      skill: 'Raisonner',
      _v: { k: '6P1.pctcmp', a1, n1, a2, n2 }
    });
  });
})();

// ----- Extensions 6ème, groupe C (audit 2026-10-31) -----
// ----- Extensions 6M1, 6M2, 6M3, 6M4, 6G1 (audit pédagogique 2026-10-31) -----
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenerators._6X_add) return;
  const G = window.MathsGenerators;
  const PRENOMS = ['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan', 'Lina', 'Tom', 'Zoé', 'Malo'];

  // Figure « en colonnes » sur quadrillage : heights[i] = nombre de carreaux de la colonne i (posés sur le bas).
  const gridHeights = (g) => {
    let hs;
    do {
      const n = g.randInt(3, 6);
      hs = [];
      for (let i = 0; i < n; i++) hs.push(g.randInt(1, 4));
    } while (new Set(hs).size < 2);
    return hs;
  };
  const gridSvg = (g, hs) => {
    const c = 24, n = hs.length, hm = Math.max(...hs);
    const nx = n + 2, ny = hm + 2;
    let s = '';
    for (let i = 0; i <= nx; i++) s += `<line x1="${i * c}" y1="0" x2="${i * c}" y2="${ny * c}" stroke="var(--border-color, #cbd5e1)" stroke-width="1"/>`;
    for (let j = 0; j <= ny; j++) s += `<line x1="0" y1="${j * c}" x2="${nx * c}" y2="${j * c}" stroke="var(--border-color, #cbd5e1)" stroke-width="1"/>`;
    hs.forEach((h, i) => {
      for (let k = 0; k < h; k++) {
        s += `<rect x="${(i + 1) * c}" y="${(ny - 1 - (k + 1)) * c}" width="${c}" height="${c}" fill="rgba(37, 99, 235, 0.35)" stroke="#1e3a8a" stroke-width="1.4"/>`;
      }
    });
    return g._6svg(nx * c, ny * c, s, 260);
  };

  // =====================================================================
  // 6M1 — Longueurs et périmètres
  // =====================================================================
  G._6X_origWeight('6M1', 1, 3);
  G._6X_add('6M1', 1, function () {
    const hs = gridHeights(this);
    const n = hs.length;
    let vert = hs[0] + hs[n - 1];
    for (let i = 0; i + 1 < n; i++) vert += Math.abs(hs[i] - hs[i + 1]);
    const per = 2 * n + vert;
    return this._6mQ('6M1', 1, {
      title: 'Périmètre sur un quadrillage',
      statement: `Sur le quadrillage ci-dessous, chaque carreau est un carré de $1\\text{ cm}$ de côté.\n${gridSvg(this, hs)}**Quel est le périmètre de la figure colorée, en cm ?**`,
      type: 'exact', answer: String(per), placeholder: 'Ex : 14',
      hint1: 'Fais le tour de la figure avec ton doigt en comptant les côtés de carreaux, sans en oublier ni en compter deux fois.',
      hint2: 'Le périmètre est la longueur du contour : seuls les côtés de carreaux situés sur le bord de la figure comptent.',
      solution: `**Méthode :** on parcourt le contour de la figure.\n` +
        `• Côtés horizontaux : la figure a ${n} colonnes, chacune donne un côté en haut et un côté en bas, soit $2 \\times ${n} = ${2 * n}$ côtés.\n` +
        `• Côtés verticaux : $${hs[0]}$ à gauche, $${hs[n - 1]}$ à droite et les « marches » entre colonnes, soit $${vert}$ côtés.\n` +
        `Le périmètre vaut $${2 * n} + ${vert} = ${per}$ côtés de carreau, donc **$${per}\\text{ cm}$**.`,
      _v: { k: '6M1.gridper', hs }
    }, 'Calculer');
  });

  G._6X_origWeight('6M1', 3, 4);
  G._6X_add('6M1', 3, function () {
    const d = this.randInt(4, 40);
    const half = this._6r(3.14 * d / 2);
    const per = this._6r(d + half);
    const T = x => this._6tex(x);
    return this._6mQ('6M1', 3, {
      title: "Périmètre d'un demi-disque",
      statement: `Un demi-disque a pour diamètre $${d}\\text{ cm}$.\n**Calculer son périmètre en cm, en prenant $3{,}14$ comme valeur approchée de $\\pi$.**`,
      type: 'exact', answer: this._6ans(per),
      hint1: "Le contour d'un demi-disque est formé de deux parties : un demi-cercle et… un segment. Lequel ?",
      hint2: 'Longueur d\'un cercle de diamètre $d$ : $\\pi \\times d$ ; un demi-cercle en mesure la moitié.',
      solution: `**Étape 1 :** le demi-cercle mesure la moitié de la longueur du cercle : $3{,}14 \\times ${d} \\div 2 = ${T(half)}\\text{ cm}$.\n` +
        `**Étape 2 :** le contour comprend aussi le diamètre, qui mesure $${d}\\text{ cm}$.\n` +
        `$$P = ${T(half)} + ${d} = ${T(per)}\\text{ cm}$$\nLe périmètre du demi-disque est d'environ **$${T(per)}\\text{ cm}$**.`,
      _v: { k: '6M1.demidisque', d }
    }, 'Calculer');
  });

  G._6X_origWeight('6M1', 4, 4);
  G._6X_add('6M1', 4, function () {
    const d = this.randChoice([50, 60, 64, 70, 72, 80]);
    const Dm = this.randInt(2, 30) * 50;
    const tour = this._6r(3.14 * d);
    const nb = Math.floor(Dm * 100 / tour);
    const T = x => this._6tex(x);
    return this._6mQ('6M1', 4, {
      title: 'Combien de tours de roue ?',
      statement: `Une roue a un diamètre de $${d}\\text{ cm}$. Le vélo doit parcourir $${T(Dm)}\\text{ m}$.\n**Combien de tours complets la roue fait-elle sur ce trajet ?** *(Prendre $3{,}14$ pour $\\pi$.)*`,
      type: 'exact', answer: String(nb), placeholder: 'Ex : 250',
      hint1: 'Calcule la distance parcourue en un tour de roue, puis cherche combien de fois elle « rentre » dans la distance totale (même unité !).',
      hint2: "En un tour, la roue avance de la longueur de son cercle : $\\pi \\times d$. Et $1\\text{ m} = 100\\text{ cm}$.",
      solution: `**Étape 1 :** un tour de roue : $3{,}14 \\times ${d} = ${T(tour)}\\text{ cm}$.\n` +
        `**Étape 2 :** on convertit : $${T(Dm)}\\text{ m} = ${T(Dm * 100)}\\text{ cm}$.\n` +
        `**Étape 3 :** $${T(Dm * 100)} \\div ${T(tour)} \\approx ${T(Math.floor(Dm * 100 / tour * 100) / 100)}$.\n` +
        `La roue fait donc **${nb} tours complets** (le tour suivant n'est pas terminé).`,
      _v: { k: '6M1.tours', d, Dm }
    }, 'Modéliser');
  });

  // =====================================================================
  // 6M2 — Aires
  // =====================================================================
  G._6X_origWeight('6M2', 1, 3);
  G._6X_add('6M2', 1, function () {
    const hs = gridHeights(this);
    const area = hs.reduce((a, b) => a + b, 0);
    return this._6mQ('6M2', 1, {
      title: 'Aire par comptage de carreaux',
      statement: `Sur le quadrillage ci-dessous, chaque carreau a une aire de $1\\text{ cm}^2$.\n${gridSvg(this, hs)}**Quelle est l'aire de la figure colorée, en cm² ?**`,
      type: 'exact', answer: String(area), placeholder: 'Ex : 12',
      hint1: 'Compte les carreaux colonne par colonne, puis additionne.',
      hint2: "L'aire mesure la surface : c'est le nombre de carreaux unités recouverts par la figure (et non le nombre de côtés du contour).",
      solution: `On compte les carreaux colonne par colonne : $${hs.join(' + ')} = ${area}$.\nLa figure recouvre ${area} carreaux de $1\\text{ cm}^2$ : son aire est **$${area}\\text{ cm}^2$**.`,
      _v: { k: '6M2.gridaire', hs }
    }, 'Calculer');
  });
  G._6X_add('6M2', 1, function () {
    const items = [
      ['la surface d\'un terrain de football', 'm²'], ['la surface d\'une page de cahier', 'cm²'],
      ['la surface d\'un timbre', 'mm²'], ['la surface d\'une région française', 'km²'],
      ['le tour d\'un jardin', 'm'], ['la superficie d\'un appartement', 'm²']
    ];
    const [obj, u] = this.randChoice(items);
    const all = ['m²', 'cm²', 'mm²', 'km²', 'm'];
    const fmt = x => (x.includes('²') ? `$\\text{${x.replace('²', '')}}^2$` : `$\\text{${x}}$`);
    const q = this._6mQ('6M2', 1, {
      title: 'Choisir une unité adaptée',
      statement: `Quelle est l'unité la mieux adaptée pour exprimer **${obj}** ?`,
      hint1: 'Demande-toi d\'abord s\'il s\'agit d\'une aire (une surface) ou d\'une longueur (un contour), puis estime l\'ordre de grandeur.',
      hint2: 'Une aire s\'exprime dans une unité « carrée » (mm², cm², m², km²) ; une longueur dans une unité simple (mm, cm, m, km).',
      solution: u === 'm'
        ? `Le tour d'un jardin est une **longueur** (un périmètre) : on l'exprime en mètres, donc **${fmt(u)}**.`
        : `Il s'agit d'une **aire**, donc d'une unité « carrée ». Compte tenu de la taille de l'objet, l'unité adaptée est **${fmt(u)}**.`,
      _v: { k: '6M2.unite', obj, u }
    }, 'Communiquer');
    const opts = this.shuffle(all.filter(x => x !== u)).slice(0, 3).map(fmt);
    return this._6mcq(q, fmt(u), opts);
  });

  G._6X_origWeight('6M2', 2, 4);
  G._6X_add('6M2', 2, function () {
    // rectangle a × b et carré de côté c : comparer aires ou périmètres
    let a, b, c;
    do {
      a = this.randInt(2, 15); b = this.randInt(1, a - 1); c = this.randInt(2, 12);
    } while (c * c === a * b && 2 * c === a + b || 2 * c === a + b && Math.random() < 0.7);
    const ask = this.randChoice(['aire', 'périmètre']);
    const vR = ask === 'aire' ? a * b : 2 * (a + b), vC = ask === 'aire' ? c * c : 4 * c;
    const opts = ['le rectangle', 'le carré', 'ils sont égaux'];
    const correct = vR > vC ? opts[0] : vR < vC ? opts[1] : opts[2];
    const u = ask === 'aire' ? '\\text{ cm}^2' : '\\text{ cm}';
    const q = this._6mQ('6M2', 2, {
      title: 'Comparer les aires ou les périmètres de deux figures',
      statement: `Un rectangle mesure $${a}\\text{ cm}$ sur $${b}\\text{ cm}$. Un carré a pour côté $${c}\\text{ cm}$.\n**Laquelle de ces deux figures a ${ask === 'aire' ? 'la plus grande aire' : 'le plus grand périmètre'} ?**`,
      hint1: `Calcule ${ask === 'aire' ? "l'aire" : 'le périmètre'} de chaque figure, puis compare les deux nombres.`,
      hint2: ask === 'aire' ? 'Aire du rectangle : $L \\times \\ell$ ; aire du carré : $c \\times c$.' : 'Périmètre du rectangle : $2 \\times (L + \\ell)$ ; périmètre du carré : $4 \\times c$.',
      solution: `**Rectangle :** ${ask === 'aire' ? `$${a} \\times ${b} = ${vR}${u}$` : `$2 \\times (${a} + ${b}) = ${vR}${u}$`}.\n` +
        `**Carré :** ${ask === 'aire' ? `$${c} \\times ${c} = ${vC}${u}$` : `$4 \\times ${c} = ${vC}${u}$`}.\n` +
        `On compare $${vR}$ et $${vC}$ : la réponse est **${correct}**.\n*(Attention : une figure peut avoir la plus grande aire sans avoir le plus grand périmètre.)*`,
      _v: { k: '6M2.cmpfig', a, b, c, ask }
    }, 'Raisonner');
    return this._6mcq(q, correct, opts.filter(o => o !== correct));
  });
  G._6X_add('6M2', 2, function () {
    const c = this.randInt(3, 25);
    const P = 4 * c;
    return this._6mQ('6M2', 2, {
      title: "Du périmètre à l'aire d'un carré",
      statement: `Un carré a un périmètre de $${P}\\text{ cm}$.\n**Quelle est son aire, en cm² ?**`,
      type: 'exact', answer: String(c * c), placeholder: 'Ex : 49',
      hint1: "On ne peut pas calculer l'aire directement : cherche d'abord la longueur du côté.",
      hint2: 'Carré de côté $c$ : périmètre $P = 4 \\times c$ et aire $\\mathcal{A} = c \\times c$.',
      solution: `**Étape 1 :** $P = 4 \\times c$, donc $c = ${P} \\div 4 = ${c}\\text{ cm}$.\n**Étape 2 :** $$\\mathcal{A} = ${c} \\times ${c} = ${c * c}\\text{ cm}^2$$\nL'aire du carré est **$${c * c}\\text{ cm}^2$**.`,
      _v: { k: '6M2.per2aire', P }
    }, 'Calculer');
  });

  G._6X_origWeight('6M2', 3, 3);
  G._6X_add('6M2', 3, function () {
    let a, b, h;
    do { a = this.randInt(3, 14); b = this.randInt(2, 10); h = this.randInt(2, 10); } while ((b * h) % 2 !== 0);
    const rect = a * h, tri = b * h / 2, tot = rect + tri;
    const sc = 160 / (a + b), x0 = 30, y0 = 20, H = Math.max(40, h * sc), y1 = y0 + H;
    const xa = x0 + a * sc, xb = x0 + (a + b) * sc;
    let s = `<polygon points="${x0},${y0} ${xa},${y0} ${xb},${y1} ${x0},${y1}" fill="rgba(16, 185, 129, 0.15)" stroke="var(--text-main, #334155)" stroke-width="2"/>`;
    s += `<line x1="${xa}" y1="${y0}" x2="${xa}" y2="${y1}" stroke="var(--text-muted, #64748b)" stroke-dasharray="4 3"/>`;
    s += `<polyline points="${x0},${y1 - 10} ${x0 + 10},${y1 - 10} ${x0 + 10},${y1}" fill="none" stroke="var(--text-main, #334155)" stroke-width="1.2"/>`;
    s += `<polyline points="${x0},${y0 + 10} ${x0 + 10},${y0 + 10} ${x0 + 10},${y0}" fill="none" stroke="var(--text-main, #334155)" stroke-width="1.2"/>`;
    s += this._6svgText((x0 + xa) / 2, y0 - 6, `${a} cm`);
    s += this._6svgText((x0 + xb) / 2, y1 + 16, `${a + b} cm`);
    s += this._6svgText(x0 - 6, (y0 + y1) / 2 + 4, `${h} cm`, { anchor: 'end' });
    const fig = this._6svg(240, Math.round(y1 + 26), s, 300);
    return this._6mQ('6M2', 3, {
      title: 'Aire par découpage : rectangle et triangle rectangle',
      statement: `La figure ci-dessous a deux angles droits (dimensions en cm, figure non à l'échelle). Le pointillé la partage en un rectangle et un triangle rectangle.\n${fig}**Calculer l'aire de cette figure en cm².**`,
      type: 'exact', answer: this._6ans(tot),
      hint1: 'Calcule séparément l\'aire du rectangle et celle du triangle rectangle (cherche d\'abord la base du triangle), puis additionne.',
      hint2: 'Un triangle rectangle dont les côtés de l\'angle droit mesurent $a$ et $b$ est la moitié d\'un rectangle : son aire vaut $\\frac{a \\times b}{2}$.',
      solution: `**Étape 1 (rectangle) :** $${a} \\times ${h} = ${rect}\\text{ cm}^2$.\n` +
        `**Étape 2 (triangle rectangle) :** sa base mesure $${a + b} - ${a} = ${b}\\text{ cm}$ et sa hauteur $${h}\\text{ cm}$ ; c'est la moitié d'un rectangle de $${b}\\text{ cm}$ sur $${h}\\text{ cm}$ : $${b} \\times ${h} \\div 2 = ${this._6tex(tri)}\\text{ cm}^2$.\n` +
        `**Étape 3 :** $$\\mathcal{A} = ${rect} + ${this._6tex(tri)} = ${this._6tex(tot)}\\text{ cm}^2$$`,
      _v: { k: '6M2.trapeze', a, b, h }
    }, 'Modéliser');
  });

  // =====================================================================
  // 6M3 — Volumes
  // =====================================================================
  G._6X_origWeight('6M3', 1, 3);
  G._6X_add('6M3', 1, function () {
    const items = [
      ['le volume d\'eau d\'une piscine', 'm³'], ['le volume d\'une benne de camion', 'm³'],
      ['la contenance d\'une bouteille d\'eau', 'L'], ['la contenance d\'un réservoir de voiture', 'L'],
      ['la contenance d\'une cuillère à café', 'mL'], ['la contenance d\'une seringue', 'mL']
    ];
    const [obj, u] = this.randChoice(items);
    const fmt = x => (x === 'm³' ? '$\\text{m}^3$' : x === 'm²' ? '$\\text{m}^2$' : `$\\text{${x}}$`);
    const others = ['m³', 'L', 'mL', 'm²'].filter(x => x !== u);
    const q = this._6mQ('6M3', 1, {
      title: 'Choisir une unité de volume adaptée',
      statement: `Quelle est l'unité la mieux adaptée pour exprimer **${obj}** ?`,
      hint1: 'Imagine la taille de l\'objet : tient-il dans une main, dans une cuisine, ou faut-il un camion ?',
      hint2: '$1\\text{ m}^3 = 1\\,000\\text{ L}$ et $1\\text{ L} = 1\\,000\\text{ mL}$. Attention : le m² est une unité d\'aire, pas de volume.',
      solution: `Il s'agit d'un volume (ou d'une contenance). Compte tenu de la taille de l'objet, l'unité adaptée est **${fmt(u)}**.\n(Le $\\text{m}^2$ mesure une aire : il ne convient jamais pour un volume.)`,
      _v: { k: '6M3.unite', obj, u }
    }, 'Communiquer');
    return this._6mcq(q, fmt(u), others.map(fmt));
  });
  G._6X_add('6M3', 1, function () {
    let A, B;
    do {
      A = [this.randInt(2, 6), this.randInt(2, 5), this.randInt(1, 4)];
      B = [this.randInt(2, 6), this.randInt(2, 5), this.randInt(1, 4)];
    } while (A[0] * A[1] * A[2] === B[0] * B[1] * B[2]);
    const vA = A[0] * A[1] * A[2], vB = B[0] * B[1] * B[2];
    return this._6mQ('6M3', 1, {
      title: 'Comparer deux volumes',
      statement: `Avec des cubes de $1\\text{ cm}^3$, ${this.randChoice(PRENOMS)} construit deux pavés droits :\n• le pavé A : ${A[0]} cubes de long, ${A[1]} de large et ${A[2]} de haut ;\n• le pavé B : ${B[0]} cubes de long, ${B[1]} de large et ${B[2]} de haut.\n**Quelle est la différence entre les deux volumes, en cm³ ?**`,
      type: 'exact', answer: String(Math.abs(vA - vB)), placeholder: 'Ex : 6',
      hint1: 'Calcule le nombre de cubes de chaque pavé (cubes par couche × nombre de couches), puis fais la différence.',
      hint2: 'Volume d\'un pavé droit : longueur × largeur × hauteur.',
      solution: `**Pavé A :** $${A[0]} \\times ${A[1]} \\times ${A[2]} = ${vA}$ cubes, soit $${vA}\\text{ cm}^3$.\n**Pavé B :** $${B[0]} \\times ${B[1]} \\times ${B[2]} = ${vB}$ cubes, soit $${vB}\\text{ cm}^3$.\nDifférence : $${Math.max(vA, vB)} - ${Math.min(vA, vB)} = ${Math.abs(vA - vB)}$. Le pavé ${vA > vB ? 'A' : 'B'} a **$${Math.abs(vA - vB)}\\text{ cm}^3$** de plus.`,
      _v: { k: '6M3.compare', A, B }
    }, 'Calculer');
  });

  G._6X_origWeight('6M3', 2, 3);
  G._6X_add('6M3', 2, function () {
    const a = this.randInt(4, 12);
    const V = a * a * a;
    return this._6mQ('6M3', 2, {
      title: "Retrouver l'arête d'un cube",
      statement: `Un cube a un volume de $${this._6tex(V)}\\text{ cm}^3$.\n**Quelle est la longueur de son arête, en cm ?**`,
      type: 'exact', answer: String(a), placeholder: 'Ex : 4',
      hint1: 'Essaie des nombres entiers : $2 \\times 2 \\times 2$, $3 \\times 3 \\times 3$… jusqu\'à retrouver le volume.',
      hint2: "Volume d'un cube d'arête $a$ : $\\mathcal{V} = a \\times a \\times a$.",
      solution: `On cherche le nombre $a$ tel que $a \\times a \\times a = ${this._6tex(V)}$.\nOr $${a} \\times ${a} \\times ${a} = ${a * a} \\times ${a} = ${this._6tex(V)}$.\nL'arête du cube mesure **$${a}\\text{ cm}$**.`,
      _v: { k: '6M3.arete', V }
    }, 'Raisonner');
  });
  G._6X_add('6M3', 2, function () {
    const L = this.randChoice([10, 20, 25, 30, 40, 50]), l = this.randChoice([5, 8, 10, 12, 15, 20]), h = this.randChoice([4, 5, 6, 10, 12, 15]);
    const V = L * l * h;
    const res = this._6r(V / 1000);
    if ([1, 3, 1000].includes(res)) return null;
    return this._6mQ('6M3', 2, {
      title: "Contenance d'une boîte en litres",
      statement: `Une boîte en forme de pavé droit mesure intérieurement $${L}\\text{ cm}$ sur $${l}\\text{ cm}$ sur $${h}\\text{ cm}$.\n**Quelle est sa contenance, en litres ?**`,
      type: 'exact', answer: this._6ans(res), placeholder: 'Ex : 1,5',
      hint1: 'Calcule d\'abord le volume en cm³, puis convertis-le en litres.',
      hint2: '$1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$.',
      solution: `**Étape 1 :** $\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${this._6tex(V)}\\text{ cm}^3$.\n**Étape 2 :** $1\\text{ L} = 1\\,000\\text{ cm}^3$, donc on divise par $1\\,000$ : $${this._6tex(V)} \\div 1\\,000 = ${this._6tex(res)}$.\nLa boîte contient **$${this._6tex(res)}\\text{ L}$**.`,
      _v: { k: '6M3.boiteL', L, l, h }
    }, 'Calculer');
  });

  G._6X_origWeight('6M3', 3, 3);
  G._6X_add('6M3', 3, function () {
    const a = this.randInt(4, 10), b = this.randInt(2, 6), h1 = this.randInt(1, 4);
    const c = this.randInt(1, a - 1), h2 = this.randInt(1, 4);
    const v1 = a * b * h1, v2 = c * b * h2, tot = v1 + v2;
    return this._6mQ('6M3', 3, {
      title: 'Volume d\'un solide composé de deux pavés',
      statement: `Un escalier en béton est formé de deux pavés droits posés l'un sur l'autre :\n• en bas, un pavé de $${a}\\text{ dm}$ de long, $${b}\\text{ dm}$ de large et $${h1}\\text{ dm}$ de haut ;\n• au-dessus, un pavé de $${c}\\text{ dm}$ de long, $${b}\\text{ dm}$ de large et $${h2}\\text{ dm}$ de haut.\n**Quel est le volume de béton, en dm³ ?**`,
      type: 'exact', answer: String(tot), placeholder: 'Ex : 84',
      hint1: 'Calcule le volume de chaque pavé séparément, puis additionne.',
      hint2: 'Volume d\'un pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$ (dans la même unité de longueur).',
      solution: `**Étape 1 :** pavé du bas : $${a} \\times ${b} \\times ${h1} = ${v1}\\text{ dm}^3$.\n**Étape 2 :** pavé du haut : $${c} \\times ${b} \\times ${h2} = ${v2}\\text{ dm}^3$.\n**Étape 3 :** $$\\mathcal{V} = ${v1} + ${v2} = ${tot}\\text{ dm}^3$$\nIl faut **$${tot}\\text{ dm}^3$** de béton (soit ${tot} L).`,
      _v: { k: '6M3.compose', a, b, h1, c, h2 }
    }, 'Modéliser');
  });
  G._6X_add('6M3', 3, function () {
    const verre = this.randChoice([20, 25, 10]);
    const nb = this.randChoice([4, 5, 6, 8, 9, 12, 15, 16, 18, 20, 24, 30]);
    const totCl = verre * nb;
    // pavé en cm dont le volume (cm³) = totCl × 10
    const V = totCl * 10;
    const choices = [];
    for (const L of [10, 20, 25, 30, 40, 50]) for (const l of [5, 10, 15, 20, 25]) if (V % (L * l) === 0 && V / (L * l) >= 2 && V / (L * l) <= 40) choices.push([L, l, V / (L * l)]);
    if (!choices.length) return null;
    const [L, l, h] = this.randChoice(choices);
    return this._6mQ('6M3', 3, {
      title: 'Remplir des verres',
      statement: `Un récipient en forme de pavé droit mesure intérieurement $${L}\\text{ cm}$ sur $${l}\\text{ cm}$ sur $${h}\\text{ cm}$. Il est plein de jus de fruits.\n**Combien de verres de $${verre}\\text{ cL}$ peut-on remplir ?**`,
      type: 'exact', answer: String(nb), placeholder: 'Ex : 12',
      hint1: 'Calcule le volume en cm³, convertis-le en centilitres, puis partage en verres.',
      hint2: '$1\\text{ cm}^3 = 1\\text{ mL}$ et $1\\text{ cL} = 10\\text{ mL}$.',
      solution: `**Étape 1 :** $\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${this._6tex(V)}\\text{ cm}^3 = ${this._6tex(V)}\\text{ mL}$.\n**Étape 2 :** $${this._6tex(V)}\\text{ mL} = ${this._6tex(totCl)}\\text{ cL}$ (on divise par 10).\n**Étape 3 :** $${this._6tex(totCl)} \\div ${verre} = ${nb}$.\nOn peut remplir **${nb} verres**.`,
      _v: { k: '6M3.verres', L, l, h, verre }
    }, 'Modéliser');
  });

  G._6X_origWeight('6M3', 4, 3);
  G._6X_add('6M3', 4, function () {
    const a = this.randInt(2, 6), k = this.randChoice([2, 3]);
    const V1 = a * a * a, V2 = Math.pow(k * a, 3);
    const ask = this.randChoice(['vol', 'fois']);
    const mot = k === 2 ? 'double' : 'triple';
    return this._6mQ('6M3', 4, {
      title: 'Agrandir un cube',
      statement: `Un cube a une arête de $${a}\\text{ cm}$. On construit un second cube dont l'arête est le ${mot} de la première.\n` +
        (ask === 'vol' ? '**Quel est le volume du second cube, en cm³ ?**' : '**Par combien le volume a-t-il été multiplié ?**'),
      type: 'exact', answer: String(ask === 'vol' ? V2 : V2 / V1), placeholder: 'Ex : 8',
      hint1: 'Calcule la nouvelle arête, puis le volume des deux cubes. Le volume n\'est pas multiplié par le même nombre que l\'arête !',
      hint2: 'Volume d\'un cube d\'arête $a$ : $a \\times a \\times a$ (l\'arête intervient trois fois).',
      solution: `**Étape 1 :** nouvelle arête : $${k} \\times ${a} = ${k * a}\\text{ cm}$.\n**Étape 2 :** volumes : $${a} \\times ${a} \\times ${a} = ${V1}\\text{ cm}^3$ et $${k * a} \\times ${k * a} \\times ${k * a} = ${this._6tex(V2)}\\text{ cm}^3$.\n` +
        (ask === 'vol' ? `Le second cube a un volume de **$${this._6tex(V2)}\\text{ cm}^3$**.` : `**Étape 3 :** $${this._6tex(V2)} \\div ${V1} = ${V2 / V1}$ : le volume est multiplié par **${V2 / V1}** ($= ${k} \\times ${k} \\times ${k}$), et non par ${k}.`),
      _v: { k: '6M3.agrandir', a, kf: k, ask }
    }, 'Raisonner');
  });
  G._6X_add('6M3', 4, function () {
    const a = this.randChoice([5, 10]);
    const [L, l] = this.randChoice([[25, 20], [50, 20], [40, 25], [50, 40], [20, 20], [50, 50]]);
    const rise = this._6r(a * a * a / (L * l));
    return this._6mQ('6M3', 4, {
      title: "Plonger un cube dans l'eau",
      statement: `Un aquarium a un fond rectangulaire de $${L}\\text{ cm}$ sur $${l}\\text{ cm}$ ; il contient de l'eau. On y plonge entièrement un cube plein de $${a}\\text{ cm}$ d'arête (l'eau ne déborde pas).\n**De combien de centimètres le niveau de l'eau monte-t-il ?**`,
      type: 'exact', answer: this._6ans(rise), placeholder: 'Ex : 0,5',
      hint1: "Le cube prend la place d'un volume d'eau égal à son propre volume : cette eau « monte » en formant un pavé de même fond que l'aquarium.",
      hint2: 'Volume d\'un pavé = aire du fond × hauteur, donc hauteur = volume ÷ aire du fond.',
      solution: `**Étape 1 :** volume du cube : $${a} \\times ${a} \\times ${a} = ${this._6tex(a * a * a)}\\text{ cm}^3$.\n**Étape 2 :** aire du fond : $${L} \\times ${l} = ${this._6tex(L * l)}\\text{ cm}^2$.\n**Étape 3 :** l'eau déplacée forme un pavé de hauteur $${this._6tex(a * a * a)} \\div ${this._6tex(L * l)} = ${this._6tex(rise)}$.\nLe niveau monte de **$${this._6tex(rise)}\\text{ cm}$**.`,
      _v: { k: '6M3.immersion', a, L, l }
    }, 'Modéliser');
  });

  // =====================================================================
  // 6M4 — Durées
  // =====================================================================
  const Hr = m => G._6mHour(m), D = m => G._6mDur(m);
  const hms = s => `${Math.floor(s / 3600)} h ${String(Math.floor(s / 60) % 60).padStart(2, '0')} min ${String(s % 60).padStart(2, '0')} s`;

  G._6X_origWeight('6M4', 1, 3);
  G._6X_add('6M4', 1, function () {
    const h = this.randInt(7, 18), m1 = this.randInt(0, 40), m2 = this.randInt(m1 + 5, 59);
    const s = h * 60 + m1, e = h * 60 + m2;
    const act = this.randChoice(['Une séance de natation', 'Un cours de musique', 'Une partie de jeu', 'Une réunion']);
    return this._6mQ('6M4', 1, {
      title: 'Durée dans une même heure',
      statement: `${act} commence à **${Hr(s)}** et se termine à **${Hr(e)}**.\n**Combien de minutes a-t-elle duré ?**`,
      type: 'exact', answer: String(e - s), placeholder: 'Ex : 25',
      hint1: 'Les deux horaires sont dans la même heure : il suffit de comparer les minutes.',
      hint2: 'Durée = horaire de fin − horaire de début.',
      solution: `Les deux horaires sont dans la même heure (${h} h).\nDurée : $${m2} - ${m1} = ${e - s}$ min.\nL'activité a duré **${e - s} minutes**.`,
      _v: { k: '6M4.samehour', s, e }
    }, 'Calculer');
  });
  G._6X_add('6M4', 1, function () {
    const w = this.randInt(1, 8), d = this.randInt(1, 6);
    return this._6mQ('6M4', 1, {
      title: 'Semaines et jours',
      statement: `Des vacances durent **${w} semaine${w > 1 ? 's' : ''} et ${d} jour${d > 1 ? 's' : ''}**.\n**Combien de jours cela fait-il en tout ?**`,
      type: 'exact', answer: String(7 * w + d), placeholder: 'Ex : 16',
      hint1: 'Convertis d\'abord les semaines en jours, puis ajoute les jours restants.',
      hint2: '1 semaine = 7 jours.',
      solution: `**Étape 1 :** $${w} \\times 7 = ${7 * w}$ jours.\n**Étape 2 :** $${7 * w} + ${d} = ${7 * w + d}$ jours.\nLes vacances durent **${7 * w + d} jours**.`,
      _v: { k: '6M4.semaines', w, d }
    }, 'Convertir');
  });

  G._6X_origWeight('6M4', 2, 3);
  G._6X_add('6M4', 2, function () {
    const n = this.randInt(2, 5), c = this.randChoice([15, 20, 25, 30, 35, 40, 45]);
    const x = this.randInt(65, 110);
    const tot = n * c + x;
    const nom = this.randChoice(PRENOMS);
    return this._6mQ('6M4', 2, {
      title: 'Durée totale de plusieurs activités',
      statement: `Cette semaine, ${nom} a fait ${n} séances de révision de **${c} min** chacune et une longue séance de **${D(x)}**.\n**Combien de minutes a-t-${/^(Léa|Inès|Jade|Chloé|Lina|Zoé)$/.test(nom) ? 'elle' : 'il'} révisé en tout ?**`,
      type: 'exact', answer: String(tot), placeholder: 'Ex : 150',
      hint1: 'Convertis tout en minutes avant d\'additionner.',
      hint2: '1 h = 60 min ; pour plusieurs séances identiques, on peut multiplier.',
      solution: `**Étape 1 :** séances courtes : $${n} \\times ${c} = ${n * c}$ min.\n**Étape 2 :** ${D(x)} $= 60 + ${x - 60} = ${x}$ min.\n**Étape 3 :** $${n * c} + ${x} = ${tot}$ min.\nDurée totale : **${tot} minutes** (soit ${D(tot)}).`,
      _v: { k: '6M4.seances', n, c, x }
    }, 'Calculer');
  });
  G._6X_add('6M4', 2, function () {
    const mois = this.randChoice(['janvier', 'mars', 'mai', 'octobre', 'décembre']);
    const d1 = this.randInt(1, 15), d2 = this.randInt(d1 + 3, 31);
    return this._6mQ('6M4', 2, {
      title: 'Compter des jours sur un calendrier',
      statement: `Une exposition ouvre le **${d1 === 1 ? '1er' : d1} ${mois}** au matin et ferme le **${d2} ${mois}** au matin.\n**Combien de jours s'écoulent entre l'ouverture et la fermeture ?**`,
      type: 'exact', answer: String(d2 - d1), placeholder: 'Ex : 12',
      hint1: 'Imagine un compteur qui avance d\'un jour chaque matin : combien de fois avance-t-il ?',
      hint2: 'D\'un même moment d\'un jour au même moment du lendemain, il s\'écoule un jour : la durée est la différence des dates.',
      solution: `Du ${d1 === 1 ? "1er" : d1} au ${d2} ${mois}, au même moment de la journée, il s'écoule $${d2} - ${d1} = ${d2 - d1}$ jours.\n*(Attention : on ne compte pas « les cases » du calendrier, ce qui donnerait ${d2 - d1 + 1}.)*\nRéponse : **${d2 - d1} jours**.`,
      _v: { k: '6M4.calendrier', d1, d2 }
    }, 'Raisonner');
  });

  G._6X_origWeight('6M4', 3, 3);
  G._6X_add('6M4', 3, function () {
    const stops = this.shuffle(['Gare', 'Mairie', 'Collège', 'Piscine', 'Marché', 'Hôpital', 'Stade', 'Musée']).slice(0, 5);
    let times;
    do {
      times = [this.randInt(7 * 60 + 30, 17 * 60 + 40)];
      for (let i = 1; i < 5; i++) times.push(times[i - 1] + this.randInt(4, 19));
    } while (Math.floor(times[0] / 60) === Math.floor(times[4] / 60));
    let i, j;
    do { i = this.randInt(0, 3); j = this.randInt(i + 1, 4); } while (Math.floor(times[i] / 60) === Math.floor(times[j] / 60) || j - i < 2);
    const rows = stops.map((st, k) => `\\text{${st}} & ${Math.floor(times[k] / 60)}\\text{ h }${String(times[k] % 60).padStart(2, '0')}`).join(' \\\\ \\hline ');
    const table = `$$\\begin{array}{|l|c|}\\hline \\text{Arrêt} & \\text{Horaire} \\\\ \\hline ${rows} \\\\ \\hline \\end{array}$$`;
    const hr = Math.ceil(times[i] / 60) * 60;
    return this._6mQ('6M4', 3, {
      title: "Lire une fiche d'horaires de bus",
      statement: `Voici les horaires de passage d'un bus :\n${table}\n**Combien de minutes dure le trajet entre l'arrêt « ${stops[i]} » et l'arrêt « ${stops[j]} » ?**`,
      type: 'exact', answer: String(times[j] - times[i]), placeholder: 'Ex : 23',
      hint1: 'Repère les deux horaires dans le tableau, puis compte les minutes en passant par l\'heure ronde.',
      hint2: 'Durée = horaire d\'arrivée − horaire de départ. Méthode du « saut » : on complète jusqu\'à l\'heure ronde, puis on ajoute les minutes restantes.',
      solution: `Départ de « ${stops[i]} » à ${Hr(times[i])}, arrivée à « ${stops[j]} » à ${Hr(times[j])}.\n` +
        `**Étape 1 :** de ${Hr(times[i])} à ${Hr(hr)} : ${hr - times[i]} min.\n**Étape 2 :** de ${Hr(hr)} à ${Hr(times[j])} : ${times[j] - hr} min.\n` +
        `Total : $${hr - times[i]} + ${times[j] - hr} = ${times[j] - times[i]}$. Le trajet dure **${times[j] - times[i]} minutes**.`,
      _v: { k: '6M4.bus', ti: times[i], tj: times[j] }
    }, 'Calculer');
  });
  G._6X_add('6M4', 3, function () {
    const n = this.randInt(3, 4), c = this.randChoice([45, 50, 55]), r = this.randChoice([10, 15, 20]);
    const s = 8 * 60 + this.randChoice([0, 5, 10, 15, 30]);
    const e = s + n * c + r;
    return this._6mQ('6M4', 3, {
      title: "Problème d'emploi du temps",
      statement: `Le matin, les cours commencent à **${Hr(s)}** et se terminent à **${Hr(e)}**. Il y a ${n} cours de même durée et une seule récréation de **${r} min**, sans autre pause.\n**Combien de minutes dure un cours ?**`,
      type: 'exact', answer: String(c), placeholder: 'Ex : 55',
      hint1: 'Calcule la durée totale de la matinée en minutes, retire la récréation, puis partage entre les cours.',
      hint2: '1 h = 60 min. Durée = horaire de fin − horaire de début.',
      solution: `**Étape 1 :** de ${Hr(s)} à ${Hr(e)}, il s'écoule ${D(e - s)}, soit $${e - s}$ min.\n**Étape 2 :** sans la récréation : $${e - s} - ${r} = ${n * c}$ min.\n**Étape 3 :** $${n * c} \\div ${n} = ${c}$.\nUn cours dure **${c} minutes**.`,
      _v: { k: '6M4.edt', s, e, r, n }
    }, 'Modéliser');
  });
  G._6X_add('6M4', 3, function () {
    const st = this.randInt(9 * 3600, 11 * 3600);
    const d = this.randInt(300, 1700);
    const et = st + d;
    const nom = this.randChoice(PRENOMS);
    return this._6mQ('6M4', 3, {
      title: 'Durée en secondes (chronométrage)',
      statement: `Lors d'une course, ${nom} part à **${hms(st)}** et franchit la ligne d'arrivée à **${hms(et)}**.\n**Quelle est la durée de sa course, en secondes ?**`,
      type: 'exact', answer: String(d), placeholder: 'Ex : 754',
      hint1: 'Calcule l\'écart en minutes et secondes (en « empruntant » 60 s si besoin), puis convertis en secondes.',
      hint2: '1 min = 60 s et 1 h = 60 min = 3 600 s.',
      solution: `Écart entre les deux horaires : ${Math.floor(d / 60)} min ${d % 60} s.\n$$${Math.floor(d / 60)} \\times 60 + ${d % 60} = ${Math.floor(d / 60) * 60} + ${d % 60} = ${this._6tex(d)}\\text{ s}$$\nLa course a duré **${d} secondes**.`,
      _v: { k: '6M4.chrono', st, et }
    }, 'Calculer');
  });

  G._6X_origWeight('6M4', 4, 4);
  G._6X_add('6M4', 4, function () {
    const s = this.randInt(20 * 12, 23 * 12 + 9) * 5;
    const a = 1440 + this.randInt(4 * 12, 9 * 12) * 5;
    const esc = this.randInt(4, 18) * 5;
    const vol = a - s - esc;
    const ville = this.randChoice(['Montréal', 'Dakar', 'Tokyo', 'Lima', 'Nairobi']);
    return this._6mQ('6M4', 4, {
      title: 'Voyage avec escale',
      statement: `Un avion pour ${ville} décolle à **${Hr(s)}** et arrive à destination le lendemain à **${Hr(a)}** (horaires de Paris). Pendant le voyage, il fait une escale de **${D(esc)}** au sol.\n**Combien de minutes l'avion a-t-il passées en vol ?**`,
      type: 'exact', answer: String(vol), placeholder: 'Ex : 425',
      hint1: 'Calcule d\'abord la durée totale du voyage en passant par minuit, puis retire l\'escale.',
      hint2: 'Une journée compte 24 h ; à minuit, on repasse à 0 h 00. 1 h = 60 min.',
      solution: `**Étape 1 :** de ${Hr(s)} à minuit : ${1440 - s} min ; de minuit à ${Hr(a)} : ${a - 1440} min.\nDurée totale : $${1440 - s} + ${a - 1440} = ${a - s}$ min.\n**Étape 2 :** on retire l'escale : $${a - s} - ${esc} = ${vol}$.\nL'avion a volé **${vol} minutes** (soit ${D(vol)}).`,
      _v: { k: '6M4.escale', s, a, esc }
    }, 'Modéliser');
  });
  G._6X_add('6M4', 4, function () {
    const F = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [1, 6], [5, 6], [1, 10], [1, 12]];
    let f1, f2;
    do { f1 = this.randChoice(F); f2 = this.randChoice(F); } while (f1 === f2);
    const m1 = 60 * f1[0] / f1[1], m2 = 60 * f2[0] / f2[1];
    const fr = f => `\\frac{${f[0]}}{${f[1]}}`;
    return this._6mQ('6M4', 4, {
      title: "Fractions d'heure",
      statement: `Un randonneur marche pendant $${fr(f1)}$ d'heure, fait une pause, puis marche encore pendant $${fr(f2)}$ d'heure.\n**Combien de minutes a-t-il marché en tout ?**`,
      type: 'exact', answer: String(m1 + m2), placeholder: 'Ex : 50',
      hint1: 'Convertis chaque fraction d\'heure en minutes, puis additionne.',
      hint2: 'Une heure compte soixante minutes : prendre $\\frac{a}{b}$ d\'heure, c\'est diviser ce nombre de minutes par $b$, puis multiplier par $a$.',
      solution: `**Étape 1 :** $${fr(f1)}$ h $= 60 \\div ${f1[1]} \\times ${f1[0]} = ${m1}$ min.\n**Étape 2 :** $${fr(f2)}$ h $= 60 \\div ${f2[1]} \\times ${f2[0]} = ${m2}$ min.\n**Étape 3 :** $${m1} + ${m2} = ${m1 + m2}$.\nIl a marché **${m1 + m2} minutes**.`,
      _v: { k: '6M4.frach', f1, f2 }
    }, 'Calculer');
  });

  // =====================================================================
  // 6G1 — Droites, segments, distances, milieu, cercle, quadrilatères
  // =====================================================================
  G._6X_origWeight('6G1', 1, 3);
  G._6X_add('6G1', 1, function () {
    const [A, B, C, Dp] = this._6E_pts(4);
    const kinds = [
      { d: 'a quatre angles droits et ses côtés consécutifs n\'ont pas la même longueur', c: 'un rectangle (non carré)', why: 'Un quadrilatère qui a quatre angles droits est un **rectangle**.' },
      { d: 'a quatre côtés de même longueur mais aucun angle droit', c: 'un losange (non carré)', why: 'Un quadrilatère qui a quatre côtés de même longueur est un **losange**.' },
      { d: 'a quatre angles droits et quatre côtés de même longueur', c: 'un carré', why: 'Un **carré** a quatre angles droits (c\'est un rectangle) et quatre côtés de même longueur (c\'est un losange).' }
    ];
    const kind = this.randInt(0, 2);
    const opts = kinds.map(k => k.c).concat(['un triangle rectangle']);
    return this._6E_mcq('6G1', 1, {
      title: 'Reconnaître un quadrilatère particulier',
      statement: `Le quadrilatère $${A}${B}${C}${Dp}$ ${kinds[kind].d}.\n**Quelle est sa nature ?**`,
      hint1: 'Regarde séparément les angles (droits ou non) et les longueurs des côtés.',
      hint2: 'Rectangle : quatre angles droits. Losange : quatre côtés de même longueur. Carré : les deux à la fois.',
      solution: `${kinds[kind].why}\n$${A}${B}${C}${Dp}$ est donc **${kinds[kind].c}**.`,
      skill: 'Communiquer',
      _v: { k: '6G1.quadri', kind }
    }, kinds[kind].c, opts.filter(o => o !== kinds[kind].c));
  });

  G._6X_origWeight('6G1', 2, 4);
  G._6X_add('6G1', 2, function () {
    // Noms des trois droites : (d_1), (d_2), (d_3) ; (d), (d'), (d'') ; ou (AB), (CD), (EF)
    const naming = this.randInt(0, 2);
    let D;
    if (naming === 0) D = ['(d_1)', '(d_2)', '(d_3)'];
    else if (naming === 1) D = this.shuffle(['(d)', "(d')", "(d'')"]);
    else { const P = this._6E_pts(6); D = [`(${P[0]}${P[1]})`, `(${P[2]}${P[3]})`, `(${P[4]}${P[5]})`]; }
    const [d1, d2, d3] = D;
    const facts = [
      [`$${d1} \\perp ${d3}$`, `$${d2} \\perp ${d3}$`],
      [`$${d1} \\parallel ${d2}$`, `$${d3} \\perp ${d1}$`],
      [`$${d1} \\parallel ${d3}$`, `$${d2} \\parallel ${d3}$`]
    ];
    const cases = [
      { ask: `$${d1}$ et $${d2}$`, c: 'parallèles', p: 'Si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles.' },
      { ask: `$${d3}$ et $${d2}$`, c: 'perpendiculaires', p: 'Si deux droites sont parallèles, toute droite perpendiculaire à l\'une est perpendiculaire à l\'autre.' },
      { ask: `$${d1}$ et $${d2}$`, c: 'parallèles', p: 'Si deux droites sont parallèles à une même troisième droite, alors elles sont parallèles entre elles.' }
    ];
    const kind = this.randInt(0, 2);
    const cs = cases[kind];
    const f = this.shuffle(facts[kind].slice());
    const ctx = this.randChoice([
      `Trois droites distinctes $${d1}$, $${d2}$ et $${d3}$ vérifient : ${f[0]} et ${f[1]}.`,
      `On sait que ${f[0]} et que ${f[1]}, les trois droites étant distinctes.`,
      `Sur un plan, trois rues rectilignes distinctes sont représentées par les droites $${d1}$, $${d2}$ et $${d3}$. On sait que ${f[0]} et ${f[1]}.`,
      `${this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam'])} trace trois droites distinctes $${d1}$, $${d2}$ et $${d3}$ telles que ${f[0]} et ${f[1]}.`
    ]);
    const opts = ['parallèles', 'perpendiculaires', 'sécantes mais pas perpendiculaires', 'on ne peut pas savoir'];
    return this._6E_mcq('6G1', 2, {
      title: 'Droites parallèles et perpendiculaires',
      statement: `${ctx}\n**${this.randChoice(['Que peut-on dire des droites', 'Que peut-on affirmer pour les droites'])} ${cs.ask} ?**`,
      hint1: 'Fais un schéma à main levée en respectant les informations de l\'énoncé.',
      hint2: 'Rappel des symboles : $\\perp$ indique deux droites qui se coupent en formant un angle droit ; $\\parallel$ indique deux droites qui ne se coupent pas (ou sont confondues).',
      solution: `**Propriété :** ${cs.p}\nDonc les droites ${cs.ask} sont **${cs.c}**.`,
      _v: { k: '6G1.droites', kind }
    }, cs.c, opts.filter(o => o !== cs.c));
  });

  G._6X_origWeight('6G1', 3, 3);
  G._6X_add('6G1', 3, function () {
    const [A, B, C, Dp, O] = this._6E_pts(5);
    const x = Math.random() < 0.6 ? 2 * this.randInt(3, 20) : this.randInt(30, 150) / 5;
    const mode = this.randChoice(['half', 'other', 'fromhalf']);
    const W = v => this._6tex(this._6r(v));
    let stmt, ans, sol;
    if (mode === 'half') {
      stmt = `On sait que $${A}${C} = ${W(x)}$ cm. **Calcule $${O}${B}$, en cm.**`;
      ans = x / 2;
      sol = `**Étape 1 :** les diagonales d'un rectangle ont la même longueur : $${B}${Dp} = ${A}${C} = ${W(x)}$ cm.\n**Étape 2 :** elles se coupent en leur milieu $${O}$ : $${O}${B} = ${B}${Dp} \\div 2 = ${W(x / 2)}$ cm.`;
    } else if (mode === 'other') {
      stmt = `On sait que $${A}${C} = ${W(x)}$ cm. **Calcule $${B}${Dp}$, en cm.**`;
      ans = x;
      sol = `Les diagonales d'un rectangle ont **la même longueur** : $${B}${Dp} = ${A}${C} = ${W(x)}$ cm.`;
    } else {
      stmt = `On sait que $${O}${A} = ${W(x / 2)}$ cm. **Calcule $${B}${Dp}$, en cm.**`;
      ans = x;
      sol = `**Étape 1 :** $${O}$ est le milieu de $[${A}${C}]$ : $${A}${C} = 2 \\times ${W(x / 2)} = ${W(x)}$ cm.\n**Étape 2 :** les diagonales d'un rectangle ont la même longueur : $${B}${Dp} = ${A}${C} = ${W(x)}$ cm.`;
    }
    return this._6E_q('6G1', 3, {
      title: "Diagonales d'un rectangle",
      statement: `$${A}${B}${C}${Dp}$ est un rectangle ; ses diagonales $[${A}${C}]$ et $[${B}${Dp}]$ se coupent en $${O}$.\n${stmt}`,
      type: 'exact', answer: this._6ans(ans),
      hint1: 'Fais une figure à main levée et code les longueurs égales.',
      hint2: 'Les diagonales d\'un rectangle ont la même longueur et le même milieu.',
      solution: sol + `\nRéponse : **$${W(ans)}$ cm**.`,
      _v: { k: '6G1.diagrect', x, mode }
    });
  });

  G._6X_origWeight('6G1', 4, 3);
  G._6X_add('6G1', 4, function () {
    const [A, B, C, I, J] = this._6E_pts(5);
    const a = 2 * this.randInt(2, 12), b = 2 * this.randInt(2, 12);
    const y = (a + b) / 2;
    const ask = this.randChoice(['BC', 'AC']);
    const ans = ask === 'BC' ? b : a + b;
    return this._6E_q('6G1', 4, {
      title: 'Milieux de deux segments consécutifs',
      statement: `Les points $${A}$, $${B}$ et $${C}$ sont alignés dans cet ordre. $${I}$ est le milieu de $[${A}${B}]$ et $${J}$ est le milieu de $[${B}${C}]$.\nOn sait que ${ask === 'BC' ? `$${A}${B} = ${a}$ cm et ` : ''}$${I}${J} = ${y}$ cm. **Calcule $${ask === 'BC' ? `${B}${C}` : `${A}${C}`}$, en cm.**`,
      type: 'exact', answer: String(ans),
      hint1: `Décompose $${I}${J}$ en deux morceaux de part et d'autre de $${B}$.`,
      hint2: 'Le milieu d\'un segment le partage en deux segments de même longueur, égale à la moitié du segment.',
      solution: `$${I}${J} = ${I}${B} + ${B}${J}$, avec $${I}${B} = \\frac{${A}${B}}{2}$ et $${B}${J} = \\frac{${B}${C}}{2}$.\nDonc $${I}${J} = \\frac{${A}${B} + ${B}${C}}{2} = \\frac{${A}${C}}{2}$, c'est-à-dire $${A}${C} = 2 \\times ${I}${J} = ${a + b}$ cm.\n` +
        (ask === 'BC' ? `Enfin $${B}${C} = ${A}${C} - ${A}${B} = ${a + b} - ${a} = ${b}$ cm.\nRéponse : **${b} cm**.` : `Réponse : **${a + b} cm**.`),
      _v: { k: '6G1.milieux2', a, y, ask }
    });
  });
  G._6X_add('6G1', 4, function () {
    const [O, H] = this._6E_pts(2);
    const r = this.randInt(3, 9);
    const n = this.randChoice([0, 1, 2, 2]);
    const h = n === 2 ? this.randInt(1, r - 1) : n === 1 ? r : this.randInt(r + 1, r + 5);
    return this._6E_q('6G1', 4, {
      title: 'Cercle et droite : combien de points communs ?',
      statement: `Le point $${H}$ est le pied de la perpendiculaire à la droite $(d)$ passant par $${O}$, et $${O}${H} = ${h}$ cm : c'est la distance du point $${O}$ à la droite $(d)$.\n**Combien de points de la droite $(d)$ sont situés à $${r}$ cm de $${O}$ ?** *(Répondre par un nombre.)*`,
      type: 'exact', answer: String(n), placeholder: 'Ex : 1',
      hint1: `Les points situés à $${r}$ cm de $${O}$ forment un cercle : cherche combien de fois ce cercle coupe $(d)$.`,
      hint2: `La distance d'un point à une droite est la plus courte distance entre ce point et un point de la droite : tout point de $(d)$ autre que $${H}$ est plus loin de $${O}$ que $${H}$.`,
      solution: `On cherche les points communs à $(d)$ et au cercle de centre $${O}$ et de rayon $${r}$ cm. Le point de $(d)$ le plus proche de $${O}$ est $${H}$, à $${h}$ cm.\n` +
        (n === 2 ? `Comme $${h} < ${r}$, $${H}$ est à l'intérieur du disque : la droite traverse le cercle en **2 points**.` :
          n === 1 ? `Comme $${O}${H} = ${r}$ cm, seul $${H}$ convient (la droite « touche » le cercle) : **1 point**.` :
            `Comme $${h} > ${r}$, tous les points de $(d)$ sont à plus de $${r}$ cm de $${O}$ : **0 point**.`),
      _v: { k: '6G1.cercledroite', r, h }
    });
  });
})();

// ----- Extensions 6ème, groupe D (audit 2026-10-31) -----
// ---------------------------------------------------------------------
// Extensions 6G2 à 6G5 (audit 2026-10-31) : nouvelles familles de questions
// ---------------------------------------------------------------------
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenerators._6X_add) return;
  const G = window.MathsGenerators;
  const INK = 'var(--text-main, #334155)';
  const GRID = 'var(--border-color, #cbd5e1)';
  const ang = (P, O, Q) => `\\widehat{${P}${O}${Q}}`;
  const sum = a => a.reduce((s, v) => s + v, 0);

  // Quadrillage nx × ny (cases de c px) ; renvoie { inner, X, Y } (X(i), Y(j) : coordonnées des nœuds).
  const gridBase = (nx, ny, c, ox, oy) => {
    let inner = '';
    for (let i = 0; i <= nx; i++) inner += `<line x1="${ox + i * c}" y1="${oy}" x2="${ox + i * c}" y2="${oy + ny * c}" stroke="${GRID}" stroke-width="1"/>`;
    for (let j = 0; j <= ny; j++) inner += `<line x1="${ox}" y1="${oy + j * c}" x2="${ox + nx * c}" y2="${oy + j * c}" stroke="${GRID}" stroke-width="1"/>`;
    return { inner, X: i => ox + i * c, Y: j => oy + j * c };
  };

  // Rapporteur simplifié : demi-cercle gradué de 10 en 10 (petits traits de 5 en 5).
  // double = true : graduation intérieure (de 0 à gauche) en plus de l'extérieure (de 0 à droite).
  // rays : angles (degrés, repère « extérieur ») des deux côtés de l'angle, sommet au centre.
  const protractor = (rays, double, labels) => {
    const cx = 160, cy = 160, R = 130;
    const pt = (deg, r) => [Math.round((cx + r * Math.cos(deg * Math.PI / 180)) * 10) / 10, Math.round((cy - r * Math.sin(deg * Math.PI / 180)) * 10) / 10];
    let inner = `<path d="M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy} Z" fill="#fef9c3" fill-opacity="0.55" stroke="#a16207" stroke-width="1.5"/>`;
    for (let d = 0; d <= 180; d += 5) {
      const big = d % 10 === 0;
      const [x1, y1] = pt(d, R), [x2, y2] = pt(d, R - (big ? 10 : 5));
      inner += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#a16207" stroke-width="${big ? 1.3 : 0.8}"/>`;
      if (d % 20 === 0) {
        const [tx, ty] = pt(d, R - 20);
        inner += G._6svgText(tx, ty + 4, String(d), { size: 9, fill: '#a16207', weight: '700' });
        if (double) {
          const [ux, uy] = pt(d, R - 36);
          inner += G._6svgText(ux, uy + 4, String(180 - d), { size: 8, fill: '#2563eb', weight: '600' });
        }
      }
    }
    rays.forEach((d, i) => {
      const [x, y] = pt(d, R + 22);
      inner += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#dc2626" stroke-width="2.4"/>`;
      const [lx, ly] = pt(d, R + 34);
      inner += G._6svgText(lx, ly + 4, labels[i + 1], { size: 13, weight: '800', fill: '#dc2626' });
    });
    inner += `<circle cx="${cx}" cy="${cy}" r="3" fill="${INK}"/>` + G._6svgText(cx, cy + 18, labels[0], { size: 13, weight: '800' });
    return G._6svg(320, 190, inner, 320);
  };

  // Patrons de cube : 6 cases [colonne, ligne].
  const NETS_OK = [
    [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]], [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [3, 2]],
    [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2]], [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [2, 2]],
    [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]], [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]],
    [[0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1]], [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [1, 2]],
    [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [2, 2]]
  ];
  const NETS_KO = [
    [[0, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]], [[0, 0], [1, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 1]], [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
    [[1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [3, 1]], [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 2]],
    [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [4, 1]], [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [3, 0]]
  ];
  // Transformation aléatoire (rotation d'un quart de tour / symétrie) puis recalage en (0,0).
  const transformNet = (cells, rot, flip) => {
    let c = cells.map(([x, y]) => (flip ? [-x, y] : [x, y]));
    for (let k = 0; k < rot; k++) c = c.map(([x, y]) => [-y, x]);
    const mx = Math.min(...c.map(p => p[0])), my = Math.min(...c.map(p => p[1]));
    return c.map(([x, y]) => [x - mx, y - my]);
  };
  const netsSvg = (nets, texts) => {
    const s = 17, bw = 112, bh = 112;
    let inner = '';
    nets.forEach((cells, n) => {
      const ox = (n % 2) * (bw + 16) + 8, oy = Math.floor(n / 2) * (bh + 10) + 6;
      const w = Math.max(...cells.map(p => p[0])) + 1, h = Math.max(...cells.map(p => p[1])) + 1;
      const dx = ox + (bw - w * s) / 2, dy = oy + 18 + (bh - 18 - h * s) / 2;
      inner += G._6svgText(ox + bw / 2, oy + 11, `Figure ${n + 1}`, { size: 11, weight: '800' });
      cells.forEach(([x, y], i) => {
        inner += `<rect x="${dx + x * s}" y="${dy + y * s}" width="${s}" height="${s}" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="1.2"/>`;
        if (texts && texts[n] && texts[n][i] !== undefined) inner += G._6svgText(dx + x * s + s / 2, dy + y * s + s / 2 + 4, texts[n][i], { size: 11, weight: '800', fill: texts[n][i] === '?' ? '#dc2626' : '#1e3a8a' });
      });
    });
    const rows = Math.ceil(nets.length / 2);
    return G._6svg(2 * bw + 32, rows * (bh + 10) + 6, inner, 270);
  };
  // Vue en « colonnes de carrés » (hauteurs de gauche à droite).
  const viewSvg = (heights, title, s = 18) => {
    const hmax = Math.max(...heights), w = heights.length;
    let inner = G._6svgText(8 + w * s / 2, 12, title, { size: 11, weight: '800' });
    heights.forEach((hgt, i) => {
      for (let k = 0; k < hgt; k++) inner += `<rect x="${8 + i * s}" y="${20 + (hmax - 1 - k) * s}" width="${s}" height="${s}" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.2"/>`;
    });
    inner += `<line x1="2" y1="${20 + hmax * s}" x2="${14 + w * s}" y2="${20 + hmax * s}" stroke="${INK}" stroke-width="1.6"/>`;
    return { inner, w: 16 + w * s, h: 26 + hmax * s };
  };

  // =====================================================================
  // 6G2 — Médiatrice et symétrie axiale
  // =====================================================================
  const LETTERS_AXE = 'ABCDEHIKMOTUVWXY';
  const LETTERS_NO = 'FGJLNPQRSZ';
  G._6X_origWeight('6G2', 1, 4);
  G._6X_add('6G2', 1, function () {
    const nYes = this.randInt(1, 4), nNo = 5 - nYes;
    const yes = this.shuffle(LETTERS_AXE.split('')).slice(0, nYes);
    const no = this.shuffle(LETTERS_NO.split('')).slice(0, nNo);
    const list = this.shuffle(yes.concat(no));
    return this._6E_q('6G2', 1, {
      title: 'Lettres et axes de symétrie',
      statement: `On considère les lettres majuscules d'imprimerie (sans empattements) :\n$$${list.map(l => `\\mathsf{${l}}`).join(' \\quad ')}$$\n**Combien de ces lettres possèdent au moins un axe de symétrie ?**`,
      type: 'exact', answer: String(nYes), placeholder: 'Ex : 3',
      hint1: 'Pour chaque lettre, imagine un pliage vertical, puis un pliage horizontal : les deux moitiés se superposent-elles ?',
      hint2: 'Une figure possède un axe de symétrie si, en la pliant le long de cette droite, les deux parties se superposent exactement.',
      solution: `**Étape 1 :** on teste chaque lettre.\n• Lettres avec au moins un axe : ${yes.map(l => `$\\mathsf{${l}}$`).join(', ')}.\n• Lettres sans axe (elles ont parfois un centre de symétrie, mais pas d'axe) : ${no.map(l => `$\\mathsf{${l}}$`).join(', ')}.\n**Conclusion :** **${nYes}** lettre${nYes > 1 ? 's possèdent' : ' possède'} au moins un axe de symétrie.`,
      skill: 'Chercher',
      _v: { k: '6G2.lettres', list }
    });
  });

  G._6X_origWeight('6G2', 2, 3);
  G._6X_add('6G2', 2, function () {
    const [P] = this._6E_pts(1);
    const x = this.randChoice([this.randInt(2, 20), this.randInt(11, 99) / 10 * 2]);
    const xr = Math.round(x * 10) / 10;
    return this._6E_q('6G2', 2, {
      title: 'Distance d’un point à l’axe de symétrie',
      statement: `Le point $${P}'$ est le symétrique du point $${P}$ par rapport à la droite $(d)$, et $${P}${P}' = ${this._6tex(xr)}$ cm. **À quelle distance de la droite $(d)$ se trouve le point $${P}$, en cm ?**`,
      type: 'exact', answer: this._6ans(xr / 2), placeholder: 'Ex : 3,5',
      hint1: `Fais un schéma : où la droite $(d)$ coupe-t-elle le segment $[${P}${P}']$ ?`,
      hint2: `Définition : $${P}'$ est le symétrique de $${P}$ par rapport à $(d)$ lorsque $(d)$ est la médiatrice de $[${P}${P}']$ (perpendiculaire à $[${P}${P}']$ en son milieu).`,
      solution: `**Étape 1 :** $(d)$ est la médiatrice de $[${P}${P}']$ : elle coupe ce segment perpendiculairement en son milieu $I$.\n**Étape 2 :** la distance de $${P}$ à $(d)$ est donc $${P}I = ${this._6tex(xr)} \\div 2 = ${this._6tex(xr / 2)}$ cm.\n**Conclusion :** le point $${P}$ est à **$${this._6tex(xr / 2)}$ cm** de $(d)$.`,
      skill: 'Raisonner',
      _v: { k: '6G2.distaxe', x: xr }
    });
  });
  G._6X_add('6G2', 2, function () {
    // Figure de n carreaux à gauche d'un axe vertical ; on compte la figure complétée par symétrie.
    const nx = 10, ny = 6, axis = 5;
    const n = this.randInt(3, 7);
    const cells = new Set();
    let c = [this.randInt(1, 4), this.randInt(1, 4)];
    cells.add(c.join(','));
    let guard = 0;
    while (cells.size < n && guard++ < 200) {
      const [dx, dy] = this.randChoice([[1, 0], [-1, 0], [0, 1], [0, -1]]);
      const nc = [c[0] + dx, c[1] + dy];
      if (nc[0] < 0 || nc[0] > axis - 1 || nc[1] < 0 || nc[1] > ny - 1) continue;
      c = nc; cells.add(c.join(','));
    }
    const list = [...cells].map(s => s.split(',').map(Number));
    const g = gridBase(nx, ny, 22, 12, 12);
    let inner = g.inner;
    for (const [i, j] of list) inner += `<rect x="${g.X(i)}" y="${g.Y(j)}" width="22" height="22" fill="#f59e0b" fill-opacity="0.75" stroke="#b45309"/>`;
    inner += `<line x1="${g.X(axis)}" y1="6" x2="${g.X(axis)}" y2="${g.Y(ny) + 6}" stroke="#2563eb" stroke-width="3"/>` + G._6svgText(g.X(axis) + 14, g.Y(ny) + 2, '(d)', { size: 12, fill: '#2563eb', weight: '800' });
    const fig = this._6svg(nx * 22 + 24, ny * 22 + 24, inner, 260);
    const m = list.length;
    return this._6E_q('6G2', 2, {
      title: 'Compléter une figure par symétrie',
      statement: `On complète la figure coloriée par son symétrique par rapport à la droite $(d)$.\n${fig}\n**Combien de carreaux la figure complète (figure de départ et son symétrique) couvre-t-elle ?**`,
      type: 'exact', answer: String(2 * m), placeholder: 'Ex : 10',
      hint1: 'Compte les carreaux de la figure de départ, puis demande-toi combien de carreaux possède son symétrique.',
      hint2: 'La symétrie axiale conserve les longueurs et les aires : le symétrique d’une figure lui est superposable.',
      solution: `**Étape 1 :** la figure de départ compte $${m}$ carreaux, tous situés à gauche de $(d)$.\n**Étape 2 :** son symétrique a la même aire, donc $${m}$ carreaux, situés à droite de $(d)$ (ils ne se chevauchent pas).\n**Conclusion :** $${m} + ${m} = ${2 * m}$ carreaux.`,
      skill: 'Représenter',
      _v: { k: '6G2.carreaux', cells: list }
    });
  });

  G._6X_origWeight('6G2', 3, 3);
  G._6X_add('6G2', 3, function () {
    const nx = 12, ny = 5;
    const a = this.randInt(3, 9);
    const dmax = Math.min(a, nx - a);
    const d = this.randInt(1, dmax) * this.randChoice([-1, 1]);
    const x = a + d, y = this.randInt(1, ny - 1);
    const g = gridBase(nx, ny, 22, 14, 10);
    let inner = g.inner;
    for (let i = 0; i <= nx; i++) inner += G._6svgText(g.X(i), g.Y(ny) + 16, String(i), { size: 10, weight: '600' });
    inner += `<line x1="${g.X(a)}" y1="4" x2="${g.X(a)}" y2="${g.Y(ny) + 4}" stroke="#2563eb" stroke-width="3"/>` + G._6svgText(g.X(a) + 14, 16, '(d)', { size: 12, fill: '#2563eb', weight: '800' });
    inner += `<circle cx="${g.X(x)}" cy="${g.Y(y)}" r="4" fill="#dc2626"/>` + G._6svgText(g.X(x) + 9, g.Y(y) - 7, 'M', { size: 13, fill: '#dc2626', weight: '800' });
    const fig = this._6svg(nx * 22 + 28, ny * 22 + 32, inner, 300);
    const ans = 2 * a - x;
    return this._6E_q('6G2', 3, {
      title: 'Symétrique sur un quadrillage repéré',
      statement: `Les lignes verticales du quadrillage sont numérotées de $0$ à $${nx}$. L'axe $(d)$ est la ligne numéro $${a}$.\n${fig}\n**Sur quelle ligne verticale (donner son numéro) se trouve le point $M'$, symétrique de $M$ par rapport à $(d)$ ?**`,
      type: 'exact', answer: String(ans), placeholder: 'Ex : 7',
      hint1: `Compte de combien de carreaux $M$ est éloigné de l'axe, et de quel côté.`,
      hint2: 'Un point et son symétrique sont de part et d’autre de l’axe, à la même distance de l’axe, sur une même perpendiculaire à l’axe.',
      solution: `**Étape 1 :** $M$ est sur la ligne $${x}$, donc à $${Math.abs(d)}$ carreau${Math.abs(d) > 1 ? 'x' : ''} ${d > 0 ? 'à droite' : 'à gauche'} de l'axe (ligne $${a}$).\n**Étape 2 :** $M'$ est à la même distance, de l'autre côté : ${d > 0 ? `$${a} - ${Math.abs(d)} = ${ans}$` : `$${a} + ${Math.abs(d)} = ${ans}$`}.\n**Conclusion :** $M'$ est sur la ligne verticale numéro **${ans}** (même ligne horizontale que $M$).`,
      skill: 'Représenter',
      _v: { k: '6G2.repere', a, x }
    });
  });
  G._6X_add('6G2', 3, function () {
    const [P, Q, R] = this._6E_pts(3);
    let a, b;
    do { a = this.randInt(25, 110); b = this.randInt(25, 110); } while (a + b > 160);
    return this._6E_q('6G2', 3, {
      title: 'Symétrie axiale et angles d’un triangle',
      statement: `Le triangle $${P}'${Q}'${R}'$ est le symétrique du triangle $${P}${Q}${R}$ par rapport à une droite $(d)$. On sait que $${ang(Q, P, R)} = ${a}^\\circ$ et $${ang(P, Q, R)} = ${b}^\\circ$. **Combien mesure l'angle $${ang(P + "'", R + "'", Q + "'")}$, en degrés ?**`,
      type: 'exact', answer: String(180 - a - b), placeholder: 'Ex : 50',
      hint1: `Cherche d'abord l'angle $${ang(P, R, Q)}$ dans le triangle de départ, puis utilise la symétrie.`,
      hint2: 'La symétrie axiale conserve les mesures d’angles ; dans un triangle, la somme des mesures des trois angles vaut $180^\\circ$.',
      solution: `**Étape 1 :** dans le triangle $${P}${Q}${R}$ : $${ang(P, R, Q)} = 180^\\circ - ${a}^\\circ - ${b}^\\circ = ${180 - a - b}^\\circ$.\n**Étape 2 :** la symétrie axiale conserve les angles, donc $${ang(P + "'", R + "'", Q + "'")} = ${ang(P, R, Q)}$.\n**Conclusion :** $${ang(P + "'", R + "'", Q + "'")} = ${180 - a - b}^\\circ$.`,
      skill: 'Raisonner',
      _v: { k: '6G2.angtri', a, b }
    });
  });

  G._6X_origWeight('6G2', 4, 3);
  G._6X_add('6G2', 4, function () {
    const e = this.randInt(2, 9), x = this.randInt(1, 6);
    const [A] = this._6E_pts(1);
    return this._6E_q('6G2', 4, {
      title: 'Deux symétries successives',
      statement: `Les droites $(d_1)$ et $(d_2)$ sont parallèles et distantes de $${e}$ cm. Le point $${A}$ est à $${x}$ cm de $(d_1)$, du côté opposé à $(d_2)$. On construit $${A}'$, symétrique de $${A}$ par rapport à $(d_1)$, puis $${A}''$, symétrique de $${A}'$ par rapport à $(d_2)$. **Calcule la distance $${A}${A}''$, en cm.**`,
      type: 'exact', answer: String(2 * e), placeholder: 'Ex : 12',
      hint1: `Trace une perpendiculaire commune aux deux droites passant par $${A}$ et repère les positions comme sur une règle graduée (par exemple $(d_1)$ en $0$ et $(d_2)$ en $${e}$).`,
      hint2: 'Le symétrique d’un point est sur la perpendiculaire à l’axe passant par ce point, de l’autre côté, à la même distance de l’axe.',
      solution: `On repère les points sur une perpendiculaire commune : $(d_1)$ en $0$, $(d_2)$ en $${e}$.\n**Étape 1 :** $${A}$ est en $-${x}$ ; son symétrique par rapport à $(d_1)$ est en $${x}$.\n**Étape 2 :** $${A}'$ est à $|${e} - ${x}| = ${Math.abs(e - x)}$ cm de $(d_2)$ ; son symétrique $${A}''$ est en $2 \\times ${e} - ${x} = ${2 * e - x}$.\n**Étape 3 :** $${A}${A}'' = ${2 * e - x} - (-${x}) = ${2 * e}$ cm.\n**Conclusion :** $${A}${A}'' = ${2 * e}$ cm, le double de la distance entre les axes (quelle que soit la position de $${A}$ !).`,
      skill: 'Chercher',
      _v: { k: '6G2.deuxsym', e, x }
    });
  });
  G._6X_add('6G2', 4, function () {
    const n = this.randInt(5, 12);
    const names = { 5: 'pentagone', 6: 'hexagone', 7: 'heptagone', 8: 'octogone', 9: 'ennéagone', 10: 'décagone', 11: 'hendécagone', 12: 'dodécagone' };
    return this._6E_q('6G2', 4, {
      title: 'Axes de symétrie d’un polygone régulier',
      statement: `Un polygone régulier a tous ses côtés de même longueur et tous ses angles de même mesure. **Combien d'axes de symétrie possède un ${names[n]} régulier ($${n}$ côtés) ?**`,
      type: 'exact', answer: String(n), placeholder: 'Ex : 4',
      hint1: 'Commence par des cas connus : combien d’axes pour le triangle équilatéral ? pour le carré ? Cherche une régularité.',
      hint2: 'Dans un polygone régulier, la médiatrice de chaque côté et la droite joignant chaque sommet au centre sont des axes de symétrie.',
      solution: `**Étape 1 :** cas connus : triangle équilatéral, $3$ axes ; carré, $4$ axes ; hexagone régulier, $6$ axes.\n**Étape 2 :** un polygone régulier à $n$ côtés possède $n$ axes : ${n % 2 === 0 ? `pour $n = ${n}$ pair, $${n / 2}$ axes passent par deux sommets opposés et $${n / 2}$ axes sont des médiatrices de deux côtés opposés` : `pour $n = ${n}$ impair, chaque axe passe par un sommet et le milieu du côté opposé`}.\n**Conclusion :** le ${names[n]} régulier possède **${n}** axes de symétrie.`,
      skill: 'Raisonner',
      _v: { k: '6G2.polyreg', n }
    });
  });

  // =====================================================================
  // 6G3 — Angles
  // =====================================================================
  G._6X_origWeight('6G3', 1, 3);
  G._6X_add('6G3', 1, function () {
    const x = 5 * this.randInt(2, 34);
    const [O, P, Q] = this._6E_pts(3);
    const fig = protractor([0, x], false, [O, P, Q]);
    return this._6E_q('6G3', 1, {
      title: 'Lire la mesure d’un angle au rapporteur',
      statement: `Le centre du rapporteur est placé sur le sommet $${O}$ et le côté $[${O}${P})$ passe par le $0$.\n${fig}\n**Quelle est la mesure de l'angle $${ang(P, O, Q)}$, en degrés ?**`,
      type: 'exact', answer: String(x), placeholder: 'Ex : 40',
      hint1: `Pars du $0$ situé sur le côté $[${O}${P})$ et suis la graduation jusqu'au côté $[${O}${Q})$ ; les petits traits valent $5^\\circ$.`,
      hint2: 'Pour mesurer un angle : centre du rapporteur sur le sommet, un côté sur le zéro, puis lecture sur la graduation qui part de ce zéro.',
      solution: `**Étape 1 :** le côté $[${O}${P})$ passe par la graduation $0$.\n**Étape 2 :** le côté $[${O}${Q})$ passe par la graduation $${x}$ (${x % 10 === 0 ? 'grand trait' : 'petit trait entre deux grands traits'}).\n**Conclusion :** $${ang(P, O, Q)} = ${x}^\\circ$ ; c'est un angle ${x < 90 ? 'aigu' : x === 90 ? 'droit' : 'obtus'}.`,
      skill: 'Représenter',
      _v: { k: '6G3.rapp', x, inner: false }
    });
  });
  G._6X_add('6G3', 1, function () {
    const kind = this.randChoice(['aigus', 'obtus']);
    const n = 6;
    let list;
    do {
      list = [];
      for (let i = 0; i < n; i++) list.push(this.randChoice([this.randInt(5, 89), this.randInt(91, 179), 90, 180, this.randInt(80, 100)]));
    } while (new Set(list).size < 5 || !list.some(x => (kind === 'aigus' ? x < 90 : x > 90 && x < 180)));
    const cnt = list.filter(x => (kind === 'aigus' ? x < 90 : x > 90 && x < 180)).length;
    return this._6E_q('6G3', 1, {
      title: `Compter les angles ${kind}`,
      statement: `Voici les mesures de six angles :\n$$${list.map(x => `${x}^\\circ`).join(' \\; ; \\; ')}$$\n**Combien de ces angles sont ${kind} ?**`,
      type: 'exact', answer: String(cnt), placeholder: 'Ex : 2',
      hint1: 'Compare chaque mesure à $90^\\circ$ (et à $180^\\circ$), une par une, en cochant celles qui conviennent.',
      hint2: 'Angle aigu : mesure strictement comprise entre $0^\\circ$ et $90^\\circ$. Angle droit : $90^\\circ$. Angle obtus : mesure strictement comprise entre $90^\\circ$ et $180^\\circ$. Angle plat : $180^\\circ$.',
      solution: `On classe chaque angle :\n${list.map(x => `• $${x}^\\circ$ : ${x < 90 ? 'aigu' : x === 90 ? 'droit' : x < 180 ? 'obtus' : 'plat'}`).join('\n')}\n**Conclusion :** il y a **${cnt}** angle${cnt > 1 ? 's' : ''} ${kind}${kind === 'obtus' ? '' : ''}.`,
      skill: 'Chercher',
      _v: { k: '6G3.compte', list, kind }
    });
  });

  G._6X_origWeight('6G3', 2, 4);
  G._6X_add('6G3', 2, function () {
    const phi = 5 * this.randInt(2, 34);
    const [O, P, Q] = this._6E_pts(3);
    const fig = protractor([180, phi], true, [O, P, Q]);
    const x = 180 - phi;
    return this._6E_q('6G3', 2, {
      title: 'Lire un angle sur la double graduation',
      statement: `Le centre du rapporteur est sur le sommet $${O}$ ; le côté $[${O}${P})$ est à **gauche**, sur le zéro de la graduation intérieure (en bleu).\n${fig}\n**Quelle est la mesure de l'angle $${ang(P, O, Q)}$, en degrés ?**`,
      type: 'exact', answer: String(x), placeholder: 'Ex : 40',
      hint1: `Repère la graduation dont le $0$ est sur le côté $[${O}${P})$ : c'est celle qu'il faut lire, pas l'autre !`,
      hint2: 'Un rapporteur porte deux graduations en sens contraires ; on lit toujours celle qui part de $0$ sur le premier côté de l’angle. Vérifie ensuite : l’angle est-il aigu ou obtus ?',
      solution: `**Étape 1 :** le côté $[${O}${P})$ passe par le $0$ de la graduation intérieure.\n**Étape 2 :** sur cette graduation, le côté $[${O}${Q})$ indique $${x}$ (la graduation extérieure indique $${phi}$, c'est le piège).\n**Étape 3 (contrôle) :** l'angle est visiblement ${x < 90 ? 'aigu' : x === 90 ? 'droit' : 'obtus'}, ce qui est cohérent.\n**Conclusion :** $${ang(P, O, Q)} = ${x}^\\circ$.`,
      skill: 'Représenter',
      _v: { k: '6G3.rapp', x, inner: true }
    });
  });
  G._6X_add('6G3', 2, function () {
    const x = this.randInt(12, 78);
    const [O, P, Q, R] = this._6E_pts(4);
    const fig = this._6E_rays(O, [{ deg: 0, label: P }, { deg: 90, label: Q }, { deg: x, label: R }], [{ from: 0, to: x, text: `${x}°` }, { from: x, to: 90, text: '?', color: '#dc2626' }]);
    return this._6E_q('6G3', 2, {
      title: 'Angle droit partagé en deux',
      statement: `L'angle $${ang(P, O, Q)}$ est droit et la demi-droite $[${O}${R})$ est à l'intérieur de cet angle, avec $${ang(P, O, R)} = ${x}^\\circ$.\n${fig}\n**Calcule la mesure de l'angle $${ang(R, O, Q)}$, en degrés.**`,
      type: 'exact', answer: String(90 - x), placeholder: 'Ex : 35',
      hint1: `Les angles $${ang(P, O, R)}$ et $${ang(R, O, Q)}$ sont adjacents : ensemble, ils forment l'angle $${ang(P, O, Q)}$.`,
      hint2: 'Un angle droit mesure $90^\\circ$ ; la mesure d’un angle formé de deux angles adjacents est la somme de leurs mesures.',
      solution: `**Étape 1 :** $${ang(P, O, R)} + ${ang(R, O, Q)} = ${ang(P, O, Q)} = 90^\\circ$ (angles adjacents).\n**Étape 2 :** $${ang(R, O, Q)} = 90^\\circ - ${x}^\\circ = ${90 - x}^\\circ$.\n**Conclusion :** $${ang(R, O, Q)} = ${90 - x}^\\circ$.`,
      skill: 'Calculer',
      _v: { k: '6G3.droit', x }
    });
  });

  G._6X_origWeight('6G3', 3, 3);
  G._6X_add('6G3', 3, function () {
    let a, b;
    do { a = this.randInt(20, 100); b = 2 * this.randInt(15, 60); } while (a + b > 170);
    const [O, P, Q, R, M] = this._6E_pts(5);
    const fig = this._6E_rays(O, [{ deg: 0, label: P }, { deg: a, label: Q }, { deg: a + b, label: R }, { deg: a + b / 2, label: M }], [{ from: 0, to: a, text: `${a}°` }, { from: a, to: a + b, text: `${b}°`, color: '#059669' }]);
    return this._6E_q('6G3', 3, {
      title: 'Bissectrice et angles adjacents',
      statement: `Les angles $${ang(P, O, Q)}$ et $${ang(Q, O, R)}$ sont adjacents, avec $${ang(P, O, Q)} = ${a}^\\circ$ et $${ang(Q, O, R)} = ${b}^\\circ$. La demi-droite $[${O}${M})$ est la bissectrice de l'angle $${ang(Q, O, R)}$.\n${fig}\n**Calcule la mesure de l'angle $${ang(P, O, M)}$, en degrés.**`,
      type: 'exact', answer: String(a + b / 2), placeholder: 'Ex : 75',
      hint1: `Décompose : $${ang(P, O, M)}$ est formé de $${ang(P, O, Q)}$ et de $${ang(Q, O, M)}$. Calcule d'abord $${ang(Q, O, M)}$.`,
      hint2: 'La bissectrice d’un angle le partage en deux angles adjacents de même mesure (chacun vaut la moitié de l’angle).',
      solution: `**Étape 1 :** $[${O}${M})$ est la bissectrice de $${ang(Q, O, R)}$, donc $${ang(Q, O, M)} = ${b}^\\circ \\div 2 = ${b / 2}^\\circ$.\n**Étape 2 :** $${ang(P, O, Q)}$ et $${ang(Q, O, M)}$ sont adjacents : $${ang(P, O, M)} = ${a}^\\circ + ${b / 2}^\\circ = ${a + b / 2}^\\circ$.\n**Conclusion :** $${ang(P, O, M)} = ${a + b / 2}^\\circ$.`,
      skill: 'Raisonner',
      _v: { k: '6G3.bissadj', a, b }
    });
  });
  G._6X_add('6G3', 3, function () {
    let a, b;
    do { a = this.randInt(25, 100); b = this.randInt(20, 100); } while (a + b > 160);
    const [O, P, Q, R, S] = this._6E_pts(5);
    const fig = this._6E_rays(O, [{ deg: 0, label: Q }, { deg: 180, label: P }, { deg: 180 - a, label: R }, { deg: 180 - a - b, label: S }], [{ from: 180 - a, to: 180, text: `${a}°` }, { from: 180 - a - b, to: 180 - a, text: `${b}°`, color: '#059669' }, { from: 0, to: 180 - a - b, text: '?', color: '#dc2626' }]);
    return this._6E_q('6G3', 3, {
      title: 'Angle plat partagé en trois',
      statement: `Les points $${P}$, $${O}$ et $${Q}$ sont alignés. On a $${ang(P, O, R)} = ${a}^\\circ$ et $${ang(R, O, S)} = ${b}^\\circ$.\n${fig}\n**Calcule la mesure de l'angle $${ang(S, O, Q)}$, en degrés.**`,
      type: 'exact', answer: String(180 - a - b), placeholder: 'Ex : 50',
      hint1: `Les trois angles $${ang(P, O, R)}$, $${ang(R, O, S)}$ et $${ang(S, O, Q)}$ sont adjacents et remplissent l'angle $${ang(P, O, Q)}$.`,
      hint2: 'Trois points alignés forment un angle plat, qui mesure $180^\\circ$.',
      solution: `**Étape 1 :** $${P}$, $${O}$, $${Q}$ alignés, donc $${ang(P, O, Q)} = 180^\\circ$.\n**Étape 2 :** $${ang(P, O, R)} + ${ang(R, O, S)} = ${a}^\\circ + ${b}^\\circ = ${a + b}^\\circ$.\n**Étape 3 :** $${ang(S, O, Q)} = 180^\\circ - ${a + b}^\\circ = ${180 - a - b}^\\circ$.\n**Conclusion :** $${ang(S, O, Q)} = ${180 - a - b}^\\circ$.`,
      skill: 'Calculer',
      _v: { k: '6G3.plat3', a, b }
    });
  });

  G._6X_origWeight('6G3', 4, 3);
  G._6X_add('6G3', 4, function () {
    let a, b;
    do { a = 2 * this.randInt(10, 60); b = 2 * this.randInt(10, 60); } while (a + b > 180 || a === b);
    const [O, P, Q, R, M, N] = this._6E_pts(6);
    return this._6E_q('6G3', 4, {
      title: 'Angle formé par deux bissectrices',
      statement: `Les angles $${ang(P, O, Q)} = ${a}^\\circ$ et $${ang(Q, O, R)} = ${b}^\\circ$ sont adjacents. On trace $[${O}${M})$, bissectrice de $${ang(P, O, Q)}$, et $[${O}${N})$, bissectrice de $${ang(Q, O, R)}$. **Calcule la mesure de l'angle $${ang(M, O, N)}$, en degrés.**`,
      type: 'exact', answer: String((a + b) / 2), placeholder: 'Ex : 65',
      hint1: `Fais une figure à main levée. L'angle $${ang(M, O, N)}$ est formé de deux morceaux de part et d'autre de $[${O}${Q})$.`,
      hint2: 'La bissectrice d’un angle le partage en deux angles adjacents de même mesure.',
      solution: `**Étape 1 :** $${ang(M, O, Q)} = ${a}^\\circ \\div 2 = ${a / 2}^\\circ$ (bissectrice de $${ang(P, O, Q)}$).\n**Étape 2 :** $${ang(Q, O, N)} = ${b}^\\circ \\div 2 = ${b / 2}^\\circ$ (bissectrice de $${ang(Q, O, R)}$).\n**Étape 3 :** ces deux angles sont adjacents : $${ang(M, O, N)} = ${a / 2}^\\circ + ${b / 2}^\\circ = ${(a + b) / 2}^\\circ$.\n**Conclusion :** $${ang(M, O, N)} = ${(a + b) / 2}^\\circ$, la moitié de $${ang(P, O, R)} = ${a + b}^\\circ$.`,
      skill: 'Raisonner',
      _v: { k: '6G3.deuxbiss', a, b }
    });
  });
  G._6X_add('6G3', 4, function () {
    const n = this.randChoice([5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 36]);
    const k = this.randInt(2, Math.floor(n / 2));
    const ctx = this.randChoice(['Une roue de vélo possède', 'Un parapluie ouvert possède', 'Une grande roue de fête foraine possède']);
    return this._6E_q('6G3', 4, {
      title: 'Partager un tour en angles égaux',
      statement: `${ctx} $${n}$ rayons régulièrement espacés autour du centre $O$ (deux rayons voisins forment toujours le même angle). **Quelle est la mesure, en degrés, de l'angle formé par deux rayons séparés par $${k}$ intervalles ?**`,
      type: 'exact', answer: this._6ans(360 * k / n), placeholder: 'Ex : 72',
      hint1: 'Calcule d’abord l’angle entre deux rayons voisins, puis multiplie par le nombre d’intervalles.',
      hint2: 'Un tour complet autour d’un point mesure $360^\\circ$.',
      solution: `**Étape 1 :** les $${n}$ rayons partagent le tour complet en $${n}$ angles égaux : $360^\\circ \\div ${n} = ${this._6tex(360 / n)}^\\circ$.\n**Étape 2 :** pour $${k}$ intervalles : $${k} \\times ${this._6tex(360 / n)}^\\circ = ${this._6tex(360 * k / n)}^\\circ$.\n**Conclusion :** l'angle mesure $${this._6tex(360 * k / n)}^\\circ$.`,
      skill: 'Modéliser',
      _v: { k: '6G3.tour', n, m: k }
    });
  });

  // =====================================================================
  // 6G4 — Triangles
  // =====================================================================
  G._6X_origWeight('6G4', 1, 4);
  G._6X_add('6G4', 1, function () {
    const [P, Q, R] = this._6E_pts(3);
    const x = this.randInt(3, 15);
    let b; do { b = this.randInt(2, 2 * x - 1); } while (b === x);
    return this._6E_q('6G4', 1, {
      title: 'Périmètre d’un triangle isocèle',
      statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$, avec $${P}${Q} = ${x}$ cm et $${Q}${R} = ${b}$ cm. **Calcule son périmètre, en cm.**`,
      type: 'exact', answer: String(2 * x + b), placeholder: 'Ex : 17',
      hint1: `Cherche d'abord la longueur du troisième côté $[${P}${R}]$.`,
      hint2: `Un triangle isocèle en $${P}$ a deux côtés de même longueur : ceux qui partent du sommet principal $${P}$. Le périmètre est la somme des longueurs des côtés.`,
      solution: `**Étape 1 :** isocèle en $${P}$ : $${P}${R} = ${P}${Q} = ${x}$ cm.\n**Étape 2 :** périmètre $= ${x} + ${x} + ${b} = ${2 * x + b}$ cm.\n**Conclusion :** le périmètre de $${P}${Q}${R}$ est $${2 * x + b}$ cm.`,
      skill: 'Calculer',
      _v: { k: '6G4.isoper', x, b }
    });
  });

  G._6X_origWeight('6G4', 2, 3);
  G._6X_add('6G4', 2, function () {
    const [P, Q, R] = this._6E_pts(3);
    const c = Math.random() < 0.6 ? this.randInt(2, 30) : this.randInt(11, 99) / 10;
    const per = Math.round(3 * c * 10) / 10;
    return this._6E_q('6G4', 2, {
      title: 'Triangle équilatéral : côté à partir du périmètre',
      statement: `Le triangle $${P}${Q}${R}$ est équilatéral et son périmètre mesure $${this._6tex(per)}$ cm. **Quelle est la longueur d'un côté, en cm ?**`,
      type: 'exact', answer: this._6ans(c), placeholder: 'Ex : 4,5',
      hint1: 'Le périmètre est partagé en parts égales : combien de côtés a le triangle ?',
      hint2: 'Un triangle équilatéral a ses trois côtés de même longueur.',
      solution: `**Étape 1 :** les trois côtés ont la même longueur $c$, donc $3 \\times c = ${this._6tex(per)}$.\n**Étape 2 :** $c = ${this._6tex(per)} \\div 3 = ${this._6tex(c)}$.\n**Conclusion :** chaque côté mesure $${this._6tex(c)}$ cm.`,
      skill: 'Calculer',
      _v: { k: '6G4.equicote', per }
    });
  });
  G._6X_add('6G4', 2, function () {
    const [P, Q, R] = this._6E_pts(3);
    let s;
    do { s = [this.randInt(3, 9), this.randInt(3, 9), this.randInt(3, 9)]; } while (new Set(s).size < 3 || Math.max(...s) >= sum(s) - Math.max(...s));
    const [ab, ac, bc] = s; // PQ, PR, QR
    const arc = (c, r) => `un arc de cercle de centre $${c}$ et de rayon $${r}$ cm`;
    const correct = arc(P, ac);
    return this._6E_mcq('6G4', 2, {
      title: 'Construire un triangle connaissant ses trois côtés',
      statement: `On veut construire le triangle $${P}${Q}${R}$ tel que $${P}${Q} = ${ab}$ cm, $${P}${R} = ${ac}$ cm et $${Q}${R} = ${bc}$ cm. On a déjà tracé le segment $[${P}${Q}]$. Pour placer le point $${R}$, on trace deux arcs de cercle au compas. **Lequel des arcs suivants faut-il tracer ?**`,
      hint1: `Le point $${R}$ doit être à $${ac}$ cm de $${P}$ et à $${bc}$ cm de $${Q}$.`,
      hint2: 'Les points situés à une distance $r$ d’un point $O$ sont sur le cercle de centre $O$ et de rayon $r$.',
      solution: `**Étape 1 :** $${P}${R} = ${ac}$ cm : $${R}$ est sur le cercle de centre $${P}$ et de rayon $${ac}$ cm.\n**Étape 2 :** $${Q}${R} = ${bc}$ cm : $${R}$ est aussi sur le cercle de centre $${Q}$ et de rayon $${bc}$ cm.\n**Conclusion :** parmi les propositions, il faut tracer **${correct}** ; $${R}$ est un point d'intersection des deux arcs.`,
      skill: 'Représenter',
      _v: { k: '6G4.compas', P, Q, ab, ac, bc }
    }, correct, [arc(P, bc), arc(Q, ac), arc(P, ab)]);
  });

  G._6X_origWeight('6G4', 3, 3);
  G._6X_add('6G4', 3, function () {
    const [P, Q, R] = this._6E_pts(3);
    const k = this.randChoice([2, 3, 4]);
    let x; do { x = this.randInt(10, 40); } while ((k + 1) * x >= 170);
    const c = 180 - (k + 1) * x;
    return this._6E_q('6G4', 3, {
      title: 'Angles liés par une relation',
      statement: `Dans le triangle $${P}${Q}${R}$, $\\widehat{${P}} = ${x}^\\circ$ et l'angle $\\widehat{${Q}}$ mesure ${['', '', 'le double', 'le triple', 'le quadruple'][k]} de l'angle $\\widehat{${P}}$. **Calcule la mesure de l'angle $\\widehat{${R}}$, en degrés.**`,
      type: 'exact', answer: String(c), placeholder: 'Ex : 70',
      hint1: `Calcule d'abord $\\widehat{${Q}}$, puis utilise les trois angles du triangle.`,
      hint2: 'Dans un triangle, la somme des mesures des trois angles est égale à $180^\\circ$.',
      solution: `**Étape 1 :** $\\widehat{${Q}} = ${k} \\times ${x}^\\circ = ${k * x}^\\circ$.\n**Étape 2 :** $\\widehat{${P}} + \\widehat{${Q}} = ${x}^\\circ + ${k * x}^\\circ = ${(k + 1) * x}^\\circ$.\n**Étape 3 :** $\\widehat{${R}} = 180^\\circ - ${(k + 1) * x}^\\circ = ${c}^\\circ$.\n**Conclusion :** $\\widehat{${R}} = ${c}^\\circ$.`,
      skill: 'Calculer',
      _v: { k: '6G4.relation', x, m: k }
    });
  });
  G._6X_add('6G4', 3, function () {
    const [P, Q, R] = this._6E_pts(3);
    let a, b;
    do { a = this.randInt(3, 12); b = this.randInt(2, 12); } while (a === b || Math.abs(a - b) < 2);
    const lo = Math.abs(a - b), hi = a + b;
    const good = this.randInt(lo + 1, hi - 1);
    const bads = this.shuffle([hi, hi + this.randInt(1, 4), lo, Math.max(1, lo - 1)].filter((v, i, arr) => arr.indexOf(v) === i && (v <= lo || v >= hi)));
    const f = v => `$${v}$ cm`;
    return this._6E_mcq('6G4', 3, {
      title: 'Inégalité triangulaire : longueur possible',
      statement: `On veut construire un triangle $${P}${Q}${R}$ (non aplati) avec $${P}${Q} = ${a}$ cm et $${Q}${R} = ${b}$ cm. **Parmi ces longueurs, laquelle peut être celle de $[${P}${R}]$ ?**`,
      hint1: 'Pour chaque proposition, compare la plus grande des trois longueurs à la somme des deux autres.',
      hint2: 'Un triangle (non aplati) est constructible lorsque la plus grande longueur est strictement inférieure à la somme des deux autres.',
      solution: `On teste chaque proposition :\n${[good].concat(bads.slice(0, 3)).sort((u, v) => u - v).map(v => { const m = Math.max(a, b, v), r = a + b + v - m; return `• $${v}$ cm : plus grande longueur $${m}$, somme des deux autres $${r}$ : ${m < r ? `$${m} < ${r}$, **constructible**` : `$${m} \\geq ${r}$, impossible`}.`; }).join('\n')}\n**Conclusion :** $${P}${R}$ peut mesurer $${good}$ cm.`,
      skill: 'Raisonner',
      _v: { k: '6G4.ineg', a, b, good }
    }, f(good), bads.map(f));
  });

  G._6X_origWeight('6G4', 4, 3);
  G._6X_add('6G4', 4, function () {
    const [P, Q, R] = this._6E_pts(3);
    const k = this.randChoice([1, 2, 3, 4, 7, 8, 10, 13]);
    const base = 180 / (k + 2);
    return this._6E_q('6G4', 4, {
      title: 'Triangle isocèle : angle au sommet et angles à la base',
      statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$. L'angle au sommet principal $\\widehat{${P}}$ mesure ${k === 1 ? 'autant que' : `$${k}$ fois`} un angle à la base. **Calcule la mesure de l'angle $\\widehat{${Q}}$, en degrés.**`,
      type: 'exact', answer: String(base), placeholder: 'Ex : 36',
      hint1: `Appelle $x$ la mesure d'un angle à la base et exprime les trois angles du triangle à l'aide de $x$.`,
      hint2: 'Dans un triangle isocèle, les deux angles à la base ont la même mesure ; la somme des trois angles d’un triangle vaut $180^\\circ$.',
      solution: `**Étape 1 :** isocèle en $${P}$ : $\\widehat{${Q}} = \\widehat{${R}} = x$ et $\\widehat{${P}} = ${k === 1 ? 'x' : `${k}x`}$.\n**Étape 2 :** somme des angles : $x + x + ${k === 1 ? 'x' : `${k}x`} = 180^\\circ$, soit $${k + 2}x = 180^\\circ$.\n**Étape 3 :** $x = 180^\\circ \\div ${k + 2} = ${base}^\\circ$.\n**Conclusion :** $\\widehat{${Q}} = ${base}^\\circ$ (et $\\widehat{${P}} = ${k * base}^\\circ$ ; vérification : $${base} + ${base} + ${k * base} = 180$).`,
      skill: 'Chercher',
      _v: { k: '6G4.isorel', m: k }
    });
  });
  G._6X_add('6G4', 4, function () {
    const [P, Q, R] = this._6E_pts(3);
    let a, b; do { a = this.randInt(3, 15); b = this.randInt(2, 12); } while (a === b);
    const ask = this.randChoice(['max', 'min', 'count']);
    const lo = Math.abs(a - b) + 1, hi = a + b - 1;
    const ans = ask === 'max' ? hi : ask === 'min' ? lo : hi - lo + 1;
    const qtxt = ask === 'max' ? 'Quelle est la plus grande valeur possible de $' + P + R + '$, en cm ?' : ask === 'min' ? 'Quelle est la plus petite valeur possible de $' + P + R + '$, en cm ?' : 'Combien de valeurs entières sont possibles pour $' + P + R + '$ ?';
    return this._6E_q('6G4', 4, {
      title: 'Longueurs entières possibles d’un côté',
      statement: `On veut construire un triangle $${P}${Q}${R}$ non aplati tel que $${P}${Q} = ${a}$ cm, $${Q}${R} = ${b}$ cm et dont le côté $[${P}${R}]$ mesure un **nombre entier** de centimètres. **${qtxt}**`,
      type: 'exact', answer: String(ans), placeholder: 'Ex : 9',
      hint1: `Teste des valeurs de $${P}${R}$ : il faut qu'aucune longueur ne soit trop grande par rapport aux deux autres.`,
      hint2: 'Un triangle non aplati existe lorsque chaque longueur est strictement inférieure à la somme des deux autres.',
      solution: `**Étape 1 :** $${P}${R} < ${a} + ${b} = ${a + b}$, donc $${P}${R} \\leq ${hi}$ (entier).\n**Étape 2 :** la plus grande des deux longueurs connues doit aussi être inférieure à la somme des deux autres : $${Math.max(a, b)} < ${Math.min(a, b)} + ${P}${R}$, donc $${P}${R} > ${Math.abs(a - b)}$, soit $${P}${R} \\geq ${lo}$.\n**Étape 3 :** les valeurs possibles vont de $${lo}$ à $${hi}$${ask === 'count' ? ` : il y en a $${hi} - ${lo} + 1 = ${hi - lo + 1}$` : ''}.\n**Conclusion :** ${ask === 'max' ? `la plus grande valeur est **${hi}** cm` : ask === 'min' ? `la plus petite valeur est **${lo}** cm` : `il y a **${hi - lo + 1}** valeurs possibles`}.`,
      skill: 'Raisonner',
      _v: { k: '6G4.entiers', a, b, ask }
    });
  });

  // =====================================================================
  // 6G5 — Vision dans l'espace
  // =====================================================================
  const SOLIDES = [
    ['six faces, toutes des carrés de même taille', 'un cube'],
    ['six faces rectangulaires, qui ne sont pas toutes des carrés', 'un pavé droit'],
    ['deux bases en forme de disque reliées par une surface courbe', 'un cylindre'],
    ['une base polygonale et des faces triangulaires qui se rejoignent en un même sommet', 'une pyramide'],
    ['une base en forme de disque et un sommet, reliés par une surface courbe', 'un cône'],
    ['une seule surface courbe, dont tous les points sont à la même distance du centre', 'une boule'],
    ['deux bases polygonales identiques et parallèles reliées par des faces rectangulaires', 'un prisme droit']
  ];
  G._6X_origWeight('6G5', 1, 3);
  // Autres descriptions (même ordre que SOLIDES) et solides les plus souvent confondus
  const SOLIDES_BIS = [
    ['12 arêtes de même longueur et 6 faces carrées', '8 sommets et 6 faces qui sont toutes des carrés superposables'],
    ['6 faces, 12 arêtes et 8 sommets, avec des faces rectangulaires qui ne sont pas toutes des carrés', 'la forme d\'une boîte à chaussures'],
    ['deux faces planes en forme de disque, superposables, et une face courbe', 'la forme d\'une boîte de conserve'],
    ['un seul sommet principal, d\'où partent des faces triangulaires, et une base qui est un polygone', 'une base carrée et quatre faces triangulaires qui se rejoignent en un même point'],
    ['une seule face plane, en forme de disque, et une face courbe qui se termine en pointe', 'la forme d\'un cornet de glace (sans la glace)'],
    ['aucune face plane, aucune arête et aucun sommet', 'la forme d\'une bille'],
    ['deux bases triangulaires superposables et parallèles, reliées par trois faces rectangulaires', 'deux bases hexagonales superposables et parallèles, reliées par six faces rectangulaires']
  ];
  // Un cube est aussi un pavé droit et un prisme droit, un pavé droit est un prisme droit : jamais proposés comme faux
  const SOLIDES_PIEGE = [[3, 2], [0, 3], [6, 4], [4, 6], [3, 2], [2, 4], [2, 3]];
  const SOLIDES_EXCLUS = [[1, 6], [6], [], [], [], [], []];
  G._6X_add('6G5', 1, function () {
    const i = this.randInt(0, SOLIDES.length - 1);
    const correct = SOLIDES[i][1];
    const others = SOLIDES_PIEGE[i].map(j => SOLIDES[j][1]).concat(this.shuffle(SOLIDES.filter((_, j) => j !== i && !SOLIDES_EXCLUS[i].includes(j)).map(s => s[1])));
    const desc = this.randChoice([SOLIDES[i][0], ...SOLIDES_BIS[i]]);
    const avoir = /^la forme/.test(desc) ? 'a' : 'possède';
    const stmt = this.randChoice([
      `Un solide ${avoir} ${desc}. **De quel solide s'agit-il ?**`,
      `Je suis un solide et j'ai ${desc}. **Qui suis-je ?**`,
      `${this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam'])} décrit un solide : « il ${avoir} ${desc} ». **De quel solide s'agit-il ?**`
    ]);
    return this._6E_mcq('6G5', 1, {
      title: 'Reconnaître un solide d’après sa description',
      statement: stmt,
      hint1: 'Demande-toi si le solide a des faces planes, une surface courbe, un sommet où tout se rejoint…',
      hint2: 'Cube : 6 faces carrées. Pavé droit : 6 faces rectangulaires. Prisme droit : 2 bases polygonales et des faces rectangulaires. Pyramide : une base et des faces triangulaires. Cylindre, cône, boule : surfaces courbes.',
      solution: `**Indice décisif :** ${desc}.${desc === SOLIDES[i][0] ? '' : `\nAutrement dit, le solide possède ${SOLIDES[i][0]}.`}\n**Conclusion :** c'est **${correct}**.`,
      skill: 'Communiquer',
      _v: { k: '6G5.solide', i }
    }, correct, others);
  });
  G._6X_add('6G5', 1, function () {
    const a = Math.random() < 0.6 ? this.randInt(2, 15) : this.randInt(11, 59) / 10;
    return this._6E_q('6G5', 1, {
      title: 'Longueur totale des arêtes d’un cube',
      statement: `On fabrique le squelette d'un cube d'arête $${this._6tex(a)}$ cm avec des baguettes. **Quelle longueur totale de baguettes faut-il, en cm ?**`,
      type: 'exact', answer: this._6ans(12 * a), placeholder: 'Ex : 36',
      hint1: 'Compte les arêtes du cube (dessus, dessous, et verticales) : elles ont toutes la même longueur.',
      hint2: 'Un cube a 6 faces carrées, 12 arêtes de même longueur et 8 sommets.',
      solution: `**Étape 1 :** un cube possède $12$ arêtes, toutes de longueur $${this._6tex(a)}$ cm.\n**Étape 2 :** $12 \\times ${this._6tex(a)} = ${this._6tex(12 * a)}$.\n**Conclusion :** il faut $${this._6tex(12 * a)}$ cm de baguettes.`,
      skill: 'Calculer',
      _v: { k: '6G5.aretescube', a }
    });
  });

  G._6X_origWeight('6G5', 2, 3);
  G._6X_add('6G5', 2, function () {
    const ok = transformNet(this.randChoice(NETS_OK), this.randInt(0, 3), Math.random() < 0.5);
    const kos = this.shuffle(NETS_KO.slice()).slice(0, 3).map(n => transformNet(n, this.randInt(0, 3), Math.random() < 0.5));
    const pos = this.randInt(0, 3);
    const nets = kos.slice(); nets.splice(pos, 0, ok);
    const fig = netsSvg(nets);
    const correct = `la figure ${pos + 1}`;
    return this._6E_mcq('6G5', 2, {
      title: 'Reconnaître un patron de cube',
      statement: `Chacune des figures ci-dessous est formée de six carrés identiques.\n${fig}\n**Laquelle est un patron de cube ?**`,
      hint1: 'Imagine le pliage : choisis un carré comme base et rabats les autres autour. Deux carrés ne doivent jamais arriver sur la même face.',
      hint2: 'Un patron de cube est formé de 6 carrés qui, après pliage, recouvrent chacun une face différente. Une figure contenant 2 × 2 carrés en bloc ou 5 carrés alignés n’est jamais un patron de cube.',
      solution: `**Étape 1 :** on élimine les figures où deux carrés se superposent au pliage (bloc de $2 \\times 2$ carrés, $5$ carrés alignés, deux carrés repliés du même côté d'une bande de $4$…).\n**Étape 2 :** dans ${correct}, en pliant autour d'un carré de base, les six carrés couvrent les six faces du cube.\n**Conclusion :** le patron de cube est **${correct}**.`,
      skill: 'Représenter',
      _v: { k: '6G5.patron', nets }
    }, correct, [0, 1, 2, 3].filter(i => i !== pos).map(i => `la figure ${i + 1}`));
  });
  G._6X_add('6G5', 2, function () {
    let a, b, c;
    do { a = this.randInt(1, 4); b = this.randInt(1, 4); c = this.randInt(1, 4); } while (a === b && b === c);
    const h = [];
    for (let i = 0; i < a; i++) h.push(Array(b).fill(c));
    const m = Math.max(a, b, c);
    return this._6E_q('6G5', 2, {
      title: 'Transformer un pavé en cube',
      statement: `Ce pavé droit plein est formé de cubes identiques.\n${this._6E_iso(h)}\n**Combien de cubes faut-il ajouter, au minimum, pour obtenir un cube plein ?**`,
      type: 'exact', answer: String(m * m * m - a * b * c), placeholder: 'Ex : 19',
      hint1: 'Compte les cubes du pavé (longueur, largeur, hauteur), puis cherche le plus petit grand cube qui peut le contenir.',
      hint2: 'Un pavé droit de $L$ sur $\\ell$ sur $h$ cubes contient $L \\times \\ell \\times h$ cubes ; un cube a ses trois dimensions égales.',
      solution: `**Étape 1 :** le pavé mesure $${a}$ sur $${b}$ sur $${c}$ cubes : il contient $${a} \\times ${b} \\times ${c} = ${a * b * c}$ cubes.\n**Étape 2 :** le plus petit cube qui le contient a pour arête la plus grande dimension, $${m}$ cubes : il contient $${m} \\times ${m} \\times ${m} = ${m * m * m}$ cubes.\n**Étape 3 :** $${m * m * m} - ${a * b * c} = ${m * m * m - a * b * c}$.\n**Conclusion :** il faut ajouter $${m * m * m - a * b * c}$ cubes.`,
      skill: 'Chercher',
      _v: { k: '6G5.verscube', a, b, c }
    });
  });

  G._6X_origWeight('6G5', 3, 3);
  G._6X_add('6G5', 3, function () {
    // Patron 1-4-1 numéroté comme un dé (faces opposées : somme 7).
    const flapsTop = this.randInt(0, 3), flapsBot = this.randInt(0, 3);
    const cells = [[0, 1], [1, 1], [2, 1], [3, 1], [flapsTop, 0], [flapsBot, 2]];
    // opposés : bande 0-2, 1-3 ; rabats haut-bas
    const pairs = [[0, 2], [1, 3], [4, 5]];
    const vals = this.shuffle([[1, 6], [2, 5], [3, 4]]);
    const num = Array(6);
    pairs.forEach(([u, v], i) => { const sw = Math.random() < 0.5; num[u] = vals[i][sw ? 1 : 0]; num[v] = vals[i][sw ? 0 : 1]; });
    const hole = this.randInt(0, 5);
    const texts = num.map((v, i) => (i === hole ? '?' : String(v)));
    const fig = netsSvg([cells], [texts]).replace('Figure 1', 'Patron');
    const opp = pairs.find(p => p.includes(hole)).find(i => i !== hole);
    return this._6E_q('6G5', 3, {
      title: 'Patron d’un dé : face opposée',
      statement: `Sur un dé à six faces, la somme des nombres de deux faces opposées est toujours égale à $7$. Voici un patron de ce dé, où une face n'est pas encore numérotée.\n${fig}\n**Quel nombre faut-il écrire à la place du point d'interrogation ?**`,
      type: 'exact', answer: String(7 - num[opp]), placeholder: 'Ex : 3',
      hint1: 'Plie le patron dans ta tête : dans une bande de quatre carrés, deux carrés séparés par un autre carré deviennent des faces opposées. Les deux carrés hors de la bande sont opposés entre eux.',
      hint2: 'Sur un cube, chaque face a une seule face opposée (parallèle) : les deux ne se touchent pas.',
      solution: `**Étape 1 :** on repère la face opposée à la face « ? » : ${hole >= 4 ? 'les deux carrés situés hors de la bande se replient l\'un en face de l\'autre' : 'dans la bande de quatre carrés, les faces séparées par un carré sont opposées'} ; la face opposée porte le nombre $${num[opp]}$.\n**Étape 2 :** deux faces opposées ont pour somme $7$ : $7 - ${num[opp]} = ${7 - num[opp]}$.\n**Conclusion :** il faut écrire **${7 - num[opp]}**.`,
      skill: 'Représenter',
      _v: { k: '6G5.de', cells, texts }
    });
  });
  G._6X_add('6G5', 3, function () {
    const nr = this.randInt(2, 3), nc = this.randInt(2, 4);
    const h = [];
    for (let r = 0; r < nr; r++) { h.push([]); for (let c = 0; c < nc; c++) h[r].push(this.randInt(1, 4)); }
    const ask = this.randChoice(['total', 'face']);
    const s = 30, ox = 30, oy = 22;
    const g = gridBase(nc, nr, s, ox, oy);
    let inner = '';
    for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) {
      inner += `<rect x="${g.X(c)}" y="${g.Y(r)}" width="${s}" height="${s}" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>`;
      inner += G._6svgText(g.X(c) + s / 2, g.Y(r) + s / 2 + 5, String(h[r][c]), { size: 14, weight: '800', fill: '#1e3a8a' });
    }
    inner += G._6svgText(ox + nc * s / 2, oy + nr * s + 22, 'FACE ↑ (on regarde depuis ce côté)', { size: 10, fill: '#dc2626', weight: '800' });
    const fig = this._6svg(nc * s + 2 * ox + 40, nr * s + oy + 34, inner, 260);
    const tot = sum(h.flat());
    const face = [...Array(nc).keys()].map(c => Math.max(...h.map(r => r[c])));
    return this._6E_q('6G5', 3, {
      title: ask === 'total' ? 'Vue de dessus codée : compter les cubes' : 'Vue de dessus codée : vue de face',
      statement: `Voici la vue de dessus d'un assemblage de cubes identiques posé sur une table. Le nombre écrit dans chaque case indique combien de cubes sont empilés à cet endroit.\n${fig}\n**${ask === 'total' ? 'Combien de cubes compte cet assemblage ?' : 'Combien de carrés voit-on sur la vue de face (côté marqué FACE) ?'}**`,
      type: 'exact', answer: String(ask === 'total' ? tot : sum(face)), placeholder: 'Ex : 12',
      hint1: ask === 'total' ? 'Chaque nombre est la hauteur d’une pile : il faut tenir compte de toutes les piles.' : 'Sur la vue de face, chaque colonne de la grille (de gauche à droite) devient une colonne de carrés : seule la pile la plus haute de cette colonne compte.',
      hint2: ask === 'total' ? 'Le nombre de cubes d’un assemblage est la somme des hauteurs de toutes ses piles.' : 'Une vue de face ne montre pas la profondeur : les piles situées les unes derrière les autres se cachent.',
      solution: ask === 'total'
        ? `**Étape 1 :** on additionne les hauteurs ligne par ligne : ${h.map(r => `$${r.join(' + ')} = ${sum(r)}$`).join(' ; ')}.\n**Étape 2 :** $${h.map(r => sum(r)).join(' + ')} = ${tot}$.\n**Conclusion :** l'assemblage compte $${tot}$ cubes.`
        : `**Étape 1 :** pour chaque colonne (de gauche à droite), on garde la plus grande hauteur : $${face.join('$, $')}$.\n**Étape 2 :** $${face.join(' + ')} = ${sum(face)}$.\n**Conclusion :** on voit $${sum(face)}$ carrés sur la vue de face.`,
      skill: 'Représenter',
      _v: { k: '6G5.cotee', h, ask }
    });
  });

  G._6X_origWeight('6G5', 4, 1);
  G._6X_add('6G5', 4, function () {
    // Vue de face (colonnes) et vue de droite (rangées) ; vue de dessus rectangulaire pleine.
    let f, s;
    do {
      f = Array.from({ length: this.randInt(2, 4) }, () => this.randInt(1, 4));
      s = Array.from({ length: this.randInt(2, 3) }, () => this.randInt(1, 4));
    } while (Math.max(...f) !== Math.max(...s) || Math.max(...f) < 2);
    const vf = viewSvg(f, 'Vue de face'), vs = viewSvg(s, 'Vue de droite');
    const inner = vf.inner + `<g transform="translate(${vf.w + 24},0)">${vs.inner}</g>`;
    const W = vf.w + 24 + vs.w, H = Math.max(vf.h, vs.h);
    const fig = this._6svg(W, H + 6, inner, 300);
    let max = 0;
    for (const a of f) for (const b of s) max += Math.min(a, b);
    return this._6E_q('6G5', 4, {
      title: 'Nombre maximal de cubes d’après deux vues',
      statement: `Un assemblage de cubes identiques est posé sur une table. Sa vue de dessus est un rectangle plein de $${f.length}$ carrés de large et $${s.length}$ carrés de profondeur (chaque emplacement porte au moins un cube). Voici sa vue de face et sa vue de droite.\n${fig}\n**Quel est le nombre maximal de cubes que peut contenir cet assemblage ?**`,
      type: 'exact', answer: String(max), placeholder: 'Ex : 15',
      hint1: 'Chaque emplacement de la vue de dessus est à la croisée d’une colonne de la vue de face et d’une colonne de la vue de droite : sa pile ne peut dépasser aucune des deux hauteurs.',
      hint2: 'Une vue de face (ou de droite) montre, pour chaque colonne, la hauteur de la pile la plus haute de cette rangée.',
      solution: `**Étape 1 :** pour l'emplacement situé dans la colonne de hauteur $a$ (vue de face) et la rangée de hauteur $b$ (vue de droite), la pile mesure au plus le plus petit des deux nombres.\n**Étape 2 :** on additionne ces maximums :\n${s.map(b => `• rangée de hauteur $${b}$ : $${f.map(a => Math.min(a, b)).join(' + ')} = ${sum(f.map(a => Math.min(a, b)))}$`).join('\n')}\n**Étape 3 :** total $= ${s.map(b => sum(f.map(a => Math.min(a, b)))).join(' + ')} = ${max}$ (et cet assemblage a bien les deux vues demandées).\n**Conclusion :** au maximum $${max}$ cubes.`,
      skill: 'Chercher',
      _v: { k: '6G5.maxvues', f, s }
    });
  });
  G._6X_add('6G5', 4, function () {
    const L = this.randInt(2, 15), l = this.randInt(2, 12), hh = this.randInt(2, 10);
    const A = 2 * (L * l + l * hh + L * hh);
    return this._6E_q('6G5', 4, {
      title: 'Aire du patron d’un pavé droit',
      statement: `On découpe dans du carton le patron d'un pavé droit de $${L}$ cm de long, $${l}$ cm de large et $${hh}$ cm de haut (sans languettes de collage). **Quelle est l'aire du patron, en cm² ?**`,
      type: 'exact', answer: String(A), placeholder: 'Ex : 148',
      hint1: 'Le patron est formé des 6 faces du pavé : repère les faces identiques deux à deux et calcule l’aire de chaque sorte de face.',
      hint2: 'Un pavé droit a 6 faces rectangulaires, opposées deux à deux et superposables ; l’aire d’un rectangle est longueur × largeur.',
      solution: `**Étape 1 :** deux faces de $${L}$ cm sur $${l}$ cm : $2 \\times ${L * l} = ${2 * L * l}$ cm².\n**Étape 2 :** deux faces de $${l}$ cm sur $${hh}$ cm : $2 \\times ${l * hh} = ${2 * l * hh}$ cm².\n**Étape 3 :** deux faces de $${L}$ cm sur $${hh}$ cm : $2 \\times ${L * hh} = ${2 * L * hh}$ cm².\n**Conclusion :** aire du patron $= ${2 * L * l} + ${2 * l * hh} + ${2 * L * hh} = ${A}$ cm².`,
      skill: 'Modéliser',
      _v: { k: '6G5.airepatron', L, l, h: hh }
    });
  });
  G._6X_add('6G5', 4, function () {
    const n = this.randInt(3, 12);
    const kind = this.randChoice(['pile', 'rangee']);
    const ans = kind === 'pile' ? 4 * n + 1 : 3 * n + 2;
    const h = kind === 'pile' ? [[n]] : Array.from({ length: Math.min(n, 6) }, () => [1]);
    return this._6E_q('6G5', 4, {
      title: kind === 'pile' ? 'Faces visibles d’une tour de cubes' : 'Faces visibles d’une rangée de cubes',
      statement: kind === 'pile'
        ? `On empile $${n}$ cubes identiques les uns sur les autres pour former une tour posée sur une table. On peut tourner autour de la tour. **Combien de faces de petits cubes sont visibles ?** (Les faces collées entre deux cubes et la face posée sur la table ne sont pas visibles.)`
        : `On aligne $${n}$ cubes identiques, côte à côte, sur une table pour former une rangée. On peut tourner autour de la rangée. **Combien de faces de petits cubes sont visibles ?** (Les faces collées entre deux cubes et les faces posées sur la table ne sont pas visibles.)${n <= 6 ? `\n${this._6E_iso(h)}` : ''}`,
      type: 'exact', answer: String(ans), placeholder: 'Ex : 13',
      hint1: 'Commence par de petits cas (1 cube, 2 cubes, 3 cubes) et cherche la régularité, ou compte direction par direction (dessus, devant, derrière, côtés).',
      hint2: 'Un cube a 6 faces. Quand deux cubes sont collés, deux faces (une de chaque cube) deviennent invisibles.',
      solution: kind === 'pile'
        ? `**Étape 1 :** chaque cube montre ses $4$ faces latérales (devant, derrière, gauche, droite) : $4 \\times ${n} = ${4 * n}$ faces.\n**Étape 2 :** on voit en plus la face du dessus du cube le plus haut : $1$ face.\n**Conclusion :** $${4 * n} + 1 = ${ans}$ faces visibles.`
        : `**Étape 1 :** chaque cube montre sa face du dessus, sa face avant et sa face arrière : $3 \\times ${n} = ${3 * n}$ faces.\n**Étape 2 :** on voit aussi les deux faces des extrémités de la rangée : $2$ faces.\n**Conclusion :** $${3 * n} + 2 = ${ans}$ faces visibles.`,
      skill: 'Chercher',
      _v: { k: '6G5.visibles', n, kind }
    });
  });
})();

// ----- Extensions 6ème, groupe A (audit 2026-10-31) -----
// ---------------------------------------------------------------------
// Extensions 6N1 à 6N5 (audit 2026-10-31) : nouvelles familles
// ---------------------------------------------------------------------
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenerators._6X_add) return;
  const G = window.MathsGenerators;
  const PH_DEC = 'Ex : 12,5';
  const PH_INT = 'Ex : 24';
  const PRENOMS = ['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam', 'Chloé', 'Rayan', 'Lina', 'Tom', 'Zoé', 'Malo', 'Sacha', 'Nina', 'Yanis', 'Emma'];

  // --- Écriture en lettres (rectifications de 1990 : traits d'union entre tous les numéraux) ---
  const UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
  const TENS = { 2: 'vingt', 3: 'trente', 4: 'quarante', 5: 'cinquante', 6: 'soixante' };
  const w99 = (n, fin) => {
    if (n < 17) return UNITS[n];
    if (n < 20) return 'dix-' + UNITS[n - 10];
    if (n < 70) {
      const d = Math.floor(n / 10), u = n % 10;
      return u === 0 ? TENS[d] : u === 1 ? `${TENS[d]}-et-un` : `${TENS[d]}-${UNITS[u]}`;
    }
    if (n < 80) return n === 71 ? 'soixante-et-onze' : 'soixante-' + w99(n - 60, true);
    if (n === 80) return fin ? 'quatre-vingts' : 'quatre-vingt';
    return 'quatre-vingt-' + w99(n - 80, true);
  };
  const w999 = (n, fin) => {
    const h = Math.floor(n / 100), r = n % 100;
    let s = '';
    if (h === 1) s = 'cent';
    else if (h > 1) s = UNITS[h] + '-cent' + (r === 0 && fin ? 's' : '');
    if (r) s += (s ? '-' : '') + w99(r, fin);
    return s;
  };
  const enLettres = (n) => {
    const M = Math.floor(n / 1e6), K = Math.floor(n / 1000) % 1000, U = n % 1000;
    const parts = [];
    if (M) parts.push(M === 1 ? 'un million' : `${w999(M, true)} millions`);
    const low = [];
    if (K) low.push(K === 1 ? 'mille' : `${w999(K, false)}-mille`);
    if (U) low.push(w999(U, true));
    if (low.length) parts.push(low.join('-'));
    return parts.join(' ');
  };

  // =====================================================================
  // 6N1
  // =====================================================================
  G._6X_add('6N1', 1, function () {
    // Valeur d'un chiffre (et non « chiffre des … »)
    const RANKS = [[3, 'milliers', 1000], [2, 'centaines', 100], [1, 'dizaines', 10], [0, 'unités', 1], [-1, 'dixièmes', 0.1], [-2, 'centièmes', 0.01], [-3, 'millièmes', 0.001]];
    let digits, p, d;
    do {
      digits = [this.randInt(1, 9)];
      for (let i = 0; i < 6; i++) digits.push(this.randInt(0, 9));
      p = this.randChoice(RANKS);
      d = digits[3 - p[0]];
    } while (d < 2 || digits.filter(x => x === d).length > 1);
    const m = parseInt(digits.join(''), 10);
    const val = this._6r(d * p[2]);
    return this._6A_q('6N1', 1, 'Chercher', {
      title: 'Valeur d\'un chiffre dans un nombre',
      statement: `Dans le nombre $${this._6tex(m / 1000)}$, **quelle valeur représente le chiffre $${d}$ ?**\n*(Exemple : dans $352$, le chiffre $5$ représente $50$.)*`,
      type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
      hint1: `Repère d'abord le rang du chiffre $${d}$ (unités, dizaines, dixièmes…).`,
      hint2: 'Un chiffre au rang des dizaines vaut ce chiffre × 10 ; au rang des dixièmes, ce chiffre × 0,1 ; au rang des centièmes, ce chiffre × 0,01, etc.',
      solution: `**Étape 1 :** dans $${this._6tex(m / 1000)}$, le chiffre $${d}$ est au rang des **${p[1]}**.\n**Étape 2 :** il représente donc $${d}$ ${p[1]}, c'est-à-dire $${d} \\times ${this._6tex(p[2])} = ${this._6tex(val)}$.`,
      _v: { k: '6N1.valeur', m, d }
    });
  });
  G._6X_add('6N1', 1, function () {
    let n;
    const r = Math.random();
    if (r < 0.35) n = this.randInt(1001, 99999);
    else if (r < 0.75) n = this.randInt(100001, 999999);
    else n = this.randInt(1, 9) * 1e6 + this.randInt(0, 999) * 1000 + this.randInt(0, 999);
    if (Math.random() < 0.4) n = n - (n % 1000) + this.randChoice([0, 7, 80, 71, 91, 200]);
    const words = enLettres(n);
    return this._6A_q('6N1', 1, 'Chercher', {
      title: 'Écrire en chiffres un nombre donné en lettres',
      statement: `Écrire en chiffres le nombre :\n**${words}**\n*(Saisir le nombre sans espace.)*`,
      type: 'exact', answer: String(n), placeholder: 'Ex : 205030',
      hint1: 'Découpe l\'écriture en lettres autour des mots « million » et « mille » : chaque morceau remplit une classe de trois chiffres.',
      hint2: 'Classes de trois chiffres : millions | milliers | unités. Une classe vide ou incomplète se complète avec des zéros.',
      solution: `On remplit les classes de trois chiffres de gauche à droite (millions | milliers | unités), en complétant par des zéros :\n$$${this._6tex(n)}$$\nRéponse : **${n}**.`,
      _v: { k: '6N1.lettres', words }
    });
  });
  G._6X_origWeight('6N1', 1, 3);

  G._6X_add('6N1', 2, function () {
    // Écrire en lettres : QCM (erreurs typiques d'accord de « mille », « cent », « vingt » et de classe)
    const k = this.randInt(2, 9), u = this.randChoice([80, 200, 300, 280, 500, 180, 700, 380, 81, 205, 480, 900]);
    const n = k * 1000 + u;
    const ok = enLettres(n);
    const agree = /cents/.test(ok) ? ok.replace('cents', 'cent') : /vingts/.test(ok) ? ok.replace('vingts', 'vingt') : /-cent-/.test(ok) ? ok.replace('-cent-', '-cents-') : ok.replace('quatre-vingt-', 'quatre-vingts-');
    const wrongs = [ok.replace('-mille', '-milles'), agree, enLettres(k * 1e6 + u)];
    const q = this._6A_q('6N1', 2, 'Chercher', {
      title: 'Écrire un nombre en lettres',
      statement: `Quelle est l'écriture en lettres correcte du nombre $${this._6tex(n)}$ ?`,
      hint1: 'Lis le nombre classe par classe : d\'abord la classe des milliers, puis celle des unités simples.',
      hint2: '« Mille » est invariable ; « cent » et « vingt » prennent un s quand ils sont multipliés et terminent le nombre ; on relie les mots-nombres par des traits d\'union.',
      solution: `$${this._6tex(n)}$ = ${k} milliers et ${u} unités. On écrit : **${ok}**.\n« Mille » ne prend jamais de s ; « cent » et « vingt » ne prennent un s que s'ils sont multipliés et terminent le nombre.`,
      _v: { k: '6N1.enlettres', n }
    });
    return this._6mcq(q, ok, wrongs);
  });
  G._6X_origWeight('6N1', 2, 4);

  G._6X_add('6N1', 4, function () {
    // Plus grand / plus petit décimal avec des chiffres imposés
    const ds = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 4);
    const fmt = this.randChoice([[2, 2], [1, 3], [3, 1]]);
    const ask = this.randChoice(['grand', 'petit']);
    const sorted = ds.slice().sort((x, y) => (ask === 'grand' ? y - x : x - y));
    const str = sorted.join('');
    const val = parseInt(str, 10) / Math.pow(10, fmt[1]);
    return this._6A_q('6N1', 4, 'Raisonner', {
      title: 'Former le plus grand ou le plus petit décimal',
      statement: `Avec les chiffres $${ds.join('$ ; $')}$, utilisés **chacun une seule fois**, on écrit un nombre ayant ${fmt[0]} chiffre${fmt[0] > 1 ? 's' : ''} avant la virgule et ${fmt[1]} chiffre${fmt[1] > 1 ? 's' : ''} après la virgule.\n**Quel est le plus ${ask} nombre que l'on peut écrire ?**`,
      type: 'exact', answer: this._6ans(val), placeholder: PH_DEC,
      hint1: `Le chiffre placé le plus à gauche a le plus de poids : choisis-le en premier, puis le suivant, etc.`,
      hint2: 'Pour comparer deux décimaux, on compare les chiffres de même rang en partant de la gauche.',
      solution: `Pour obtenir le plus ${ask} nombre, on place les chiffres du plus ${ask} au plus ${ask === 'grand' ? 'petit' : 'grand'}, du rang le plus fort au rang le plus faible : ${sorted.join(', ')}.\nOn place la virgule après ${fmt[0]} chiffre${fmt[0] > 1 ? 's' : ''} : **$${this._6tex(val)}$**.`,
      _v: { k: '6N1.chiffres', ds, ent: fmt[0], dec: fmt[1], ask }
    });
  });
  G._6X_origWeight('6N1', 4, 4);

  // =====================================================================
  // 6N2
  // =====================================================================
  G._6X_add('6N2', 1, function () {
    // Placer : quel point a pour abscisse x ?
    const s = this.randInt(0, 30);
    let j;
    do { j = this.randInt(1, 9); } while (j === 5);
    const cand = [j, 10 - j, j + 10, j + 1].filter((v, i, a) => a.indexOf(v) === i && v > 0 && v < 20);
    while (cand.length < 4) { const v = this.randInt(1, 19); if (!cand.includes(v) && v !== 10) cand.push(v); }
    const labels = ['A', 'B', 'C', 'D'];
    const sorted = cand.slice().sort((a, b) => a - b);
    const pts = sorted.map((v, i) => [labels[i], v]);
    const x = this._6r(s + j / 10);
    const fig = this._6numberLine({ start: s, step: 1, nTicks: 2, sub: 10, points: pts.map(([l, v]) => ({ label: l, value: this._6r(s + v / 10) })), shown: [s, s + 1, s + 2] });
    const correct = pts.find(p => p[1] === j)[0];
    const q = this._6A_q('6N2', 1, 'Représenter', {
      title: 'Repérer un point d\'abscisse donnée',
      statement: `Sur cette demi-droite graduée, chaque unité est partagée en 10 parts égales.\n${fig}\n**Quel point a pour abscisse $${this._6tex(x)}$ ?**`,
      hint1: 'Repère d\'abord la bonne graduation entière, puis compte les petites graduations vers la droite.',
      hint2: 'Une unité partagée en 10 parts égales : chaque petite graduation vaut un dixième.',
      solution: `Chaque petite graduation vaut $0{,}1$. $${this._6tex(x)} = ${s} + ${this._6tex(j / 10)}$ : on part de $${s}$ et on avance de ${j} petites graduations.\nC'est le point **${correct}**.`,
      _v: { k: '6N2.placer', s, j, pts }
    });
    return this._6mcq(q, correct, labels.filter(l => l !== correct));
  });
  G._6X_add('6N2', 1, function () {
    // Intercaler un décimal à un chiffre après la virgule (réponse unique)
    let t10;
    do { t10 = this.randInt(11, 499); } while (t10 % 10 === 0);
    const lo = t10 * 10 - this.randInt(1, 9), hi = t10 * 10 + this.randInt(1, 9);
    return this._6A_q('6N2', 1, 'Chercher', {
      title: 'Intercaler un nombre à un chiffre après la virgule',
      statement: `Donner le nombre décimal qui s'écrit avec **un seul chiffre après la virgule** (non nul) et qui est compris entre $${this._6tex(lo / 100)}$ et $${this._6tex(hi / 100)}$.`,
      type: 'exact', answer: this._6ans(t10 / 10), placeholder: PH_DEC,
      hint1: 'Écris les deux bornes avec deux chiffres après la virgule et cherche un dixième « rond » entre elles.',
      hint2: 'Pour comparer deux décimaux, on compare d\'abord les parties entières, puis les dixièmes, puis les centièmes.',
      solution: `On encadre les bornes au dixième : $${this._6tex((t10 - 1) / 10)} < ${this._6tex(lo / 100)}$ et $${this._6tex(hi / 100)} < ${this._6tex((t10 + 1) / 10)}$.\nLe seul nombre à un chiffre après la virgule situé entre les deux bornes est donc $${this._6tex(t10 / 10)}$ : $${this._6tex(lo / 100)} < ${this._6tex(t10 / 10)} < ${this._6tex(hi / 100)}$.\nRéponse : **$${this._6tex(t10 / 10)}$**.`,
      _v: { k: '6N2.intercale1', lo, hi }
    });
  });
  G._6X_origWeight('6N2', 1, 3);

  G._6X_add('6N2', 4, function () {
    // Compter les nombres à deux décimales strictement entre deux bornes
    const a = this.randInt(10, 900);
    const w = this.randInt(2, 14);
    const b = a + w;
    const ans = w * 10 - 1;
    return this._6A_q('6N2', 4, 'Raisonner', {
      title: 'Combien de nombres au centième entre deux décimaux ?',
      statement: `On s'intéresse aux nombres qui s'écrivent avec au plus deux chiffres après la virgule (comme $${this._6tex((a * 10 + 3) / 100)}$ ou $${this._6tex((a + 1) / 10)}$).\n**Combien de ces nombres sont strictement compris entre $${this._6tex(a / 10)}$ et $${this._6tex(b / 10)}$ ?**`,
      type: 'exact', answer: String(ans), placeholder: PH_INT,
      hint1: 'Écris les deux bornes en centièmes : combien de centièmes séparent-elles ?',
      hint2: 'Entre deux nombres entiers distants de n, il y a n − 1 entiers strictement compris entre eux.',
      solution: `**Étape 1 :** en centièmes, $${this._6tex(a / 10)} = \\frac{${a * 10}}{100}$ et $${this._6tex(b / 10)} = \\frac{${b * 10}}{100}$.\n**Étape 2 :** les nombres cherchés correspondent aux entiers strictement compris entre $${a * 10}$ et $${b * 10}$ : il y en a $${b * 10} - ${a * 10} - 1 = ${ans}$.\nRéponse : **${ans}** nombres.`,
      _v: { k: '6N2.nbentre', a, b }
    });
  });
  G._6X_origWeight('6N2', 4, 4);

  // =====================================================================
  // 6N3
  // =====================================================================
  G._6X_add('6N3', 1, function () {
    // Calcul mental : ajouter/retrancher 1 ; 0,1 ; 0,01 (avec passages de rang)
    const d = this.randChoice([1, 10, 100]); // en centièmes
    const op = this.randChoice(['+', '-']);
    let a = this.randInt(101, 9999);
    if (Math.random() < 0.6) {
      // forcer un passage : chiffre 9 (pour +) ou 0 (pour −) au rang concerné
      const rank = d === 1 ? 1 : d === 10 ? 10 : 100;
      const digit = Math.floor(a / rank) % 10;
      a += ((op === '+' ? 9 : 0) - digit) * rank;
      if (op === '-' && a < 200) a += 1000;
    }
    const res = op === '+' ? a + d : a - d;
    const tx = v => this._6tex(v);
    const nomD = { 1: 'un centième', 10: 'un dixième', 100: 'une unité' }[d];
    return this._6A_q('6N3', 1, 'Calculer', {
      title: 'Calcul mental : ajouter ou retrancher 1 ; 0,1 ; 0,01',
      statement: `Calculer mentalement :\n$$${tx(a / 100)} ${op} ${tx(d / 100)}$$`,
      type: 'exact', answer: this._6ans(res / 100), placeholder: PH_DEC,
      hint1: `Repère le rang concerné par $${tx(d / 100)}$, puis ${op === '+' ? 'ajoute' : 'retire'} une unité à ce rang.`,
      hint2: 'Si le chiffre de ce rang dépasse neuf (ou passe sous zéro), il faut une retenue : dix unités d\'un rang font une unité du rang de gauche.',
      solution: `${op === '+' ? 'Ajouter' : 'Retrancher'} $${tx(d / 100)}$, c'est ${op === '+' ? 'ajouter' : 'retirer'} ${nomD} au nombre.\n$$${tx(a / 100)} ${op} ${tx(d / 100)} = ${tx(res / 100)}$$`,
      _v: { k: '6N3.mental', a, d, op }
    });
  });
  G._6X_origWeight('6N3', 1, 3);

  G._6X_add('6N3', 2, function () {
    // Choisir le bon résultat grâce à un ordre de grandeur (erreurs typiques)
    let a, b, A, B, correct, opts;
    do {
      a = this.randInt(201, 999); b = this.randInt(101, 999);
      A = a / 10; B = b / 100;
      correct = this._6r(A + B);
      opts = [correct, this._6r((a + b) / 100), this._6r(correct * 10), this._6r(correct / 10)];
    } while (new Set(opts).size < 4);
    const fmt = v => `$${this._6tex(v)}$`;
    const q = this._6A_q('6N3', 2, 'Calculer', {
      title: 'Contrôler un résultat par un ordre de grandeur',
      statement: `Sans poser l'opération, choisir le résultat exact de :\n$$${this._6tex(A)} + ${this._6tex(B)}$$`,
      hint1: 'Arrondis chaque terme à l\'unité et calcule mentalement un ordre de grandeur.',
      hint2: 'Un ordre de grandeur s\'obtient en remplaçant chaque nombre par une valeur proche, simple à calculer.',
      solution: `**Ordre de grandeur :** $${this._6tex(A)} \\approx ${Math.round(A)}$ et $${this._6tex(B)} \\approx ${Math.round(B)}$, donc la somme est proche de $${Math.round(A) + Math.round(B)}$.\nLe seul résultat proposé de cet ordre de grandeur est **${fmt(correct)}**.\n(Le résultat $${this._6tex(opts[1])}$ vient d'une erreur classique : chiffres alignés à droite au lieu d'aligner les virgules.)`,
      _v: { k: '6N3.bonresultat', a, b }
    });
    return this._6mcq(q, fmt(correct), opts.slice(1).map(fmt));
  });
  G._6X_add('6N3', 2, function () {
    // Calcul astucieux : + 9,9 ; − 0,99 ; + 19,9 ; − 4,9
    const V = this.randChoice([[99, 'dix', 100, -1], [199, 'vingt', 200, -1], [49, 'cinq', 50, -1], [99, 'un', 100, -1, 100]]);
    const den = V[4] || 10; // 9,9 / 19,9 / 4,9 (dixièmes) ou 0,99 (centièmes)
    const v = V[0];
    const op = this.randChoice(['+', '-']);
    let x = this.randInt(110, 999) * (den === 100 ? 10 : 1); // en 1/den
    if (op === '-' && x <= v + 10) x += v + 100;
    const res = op === '+' ? x + v : x - v;
    const tx = n => this._6tex(n);
    const round = V[2] / den;
    const eps = this._6r((V[2] - v) / den);
    return this._6A_q('6N3', 2, 'Calculer', {
      title: 'Calcul mental astucieux',
      statement: `Calculer mentalement :\n$$${tx(x / den)} ${op} ${tx(v / den)}$$`,
      type: 'exact', answer: this._6ans(res / den), placeholder: PH_DEC,
      hint1: `$${tx(v / den)}$ est très proche d'un nombre « rond » : ${op === '+' ? 'ajoute' : 'retire'} ce nombre rond, puis corrige.`,
      hint2: `Remplacer $${tx(v / den)}$ par un nombre rond oblige à corriger : si on ${op === '+' ? 'ajoute trop, on retire ensuite l\'excédent' : 'retire trop, on rajoute ensuite l\'excédent'}.`,
      solution: `$${tx(v / den)} = ${tx(round)} - ${tx(eps)}$.\n${op === '+' ? `On ajoute $${tx(round)}$ puis on retire $${tx(eps)}$` : `On retire $${tx(round)}$ puis on rajoute $${tx(eps)}$`} :\n$$${tx(x / den)} ${op} ${tx(round)} ${op === '+' ? '-' : '+'} ${tx(eps)} = ${tx(this._6r(op === '+' ? x / den + round : x / den - round))} ${op === '+' ? '-' : '+'} ${tx(eps)} = ${tx(res / den)}$$`,
      _v: { k: '6N3.astuce', x, v, den, op }
    });
  });
  G._6X_origWeight('6N3', 2, 3);

  G._6X_add('6N3', 3, function () {
    // Ticket de caisse : prix effacé
    const items = this.shuffle([['un cahier', 'cahier'], ['un classeur', 'classeur'], ['une trousse', 'trousse'], ['un compas', 'compas'], ['une gomme', 'gomme'], ['un feutre', 'feutre']]).slice(0, 3);
    const p = [this.randInt(95, 899), this.randInt(95, 899), this.randInt(95, 899)];
    const miss = this.randInt(0, 2);
    const total = p[0] + p[1] + p[2];
    const nom = this.randChoice(PRENOMS);
    const lignes = items.map((it, i) => `• ${it[1]} : ${i === miss ? '**…** €' : this._6A_money(p[i]) + ' €'}`).join('\n');
    const known = p.filter((_, i) => i !== miss);
    return this._6A_q('6N3', 3, 'Modéliser', {
      title: 'Problème : ticket de caisse incomplet',
      statement: `Le ticket de caisse de ${nom} est taché :\n${lignes}\n• **Total : ${this._6A_money(total)} €**\n**Quel est le prix effacé (${items[miss][1]}) ?** (en euros)`,
      type: 'exact', answer: this._6ans(p[miss] / 100), placeholder: PH_DEC,
      hint1: 'Calcule d\'abord le prix des articles connus.',
      hint2: 'Le prix manquant est la différence entre le total et la somme des prix connus.',
      solution: `**Étape 1 :** articles connus : $${this._6tex(known[0] / 100)} + ${this._6tex(known[1] / 100)} = ${this._6tex((known[0] + known[1]) / 100)}$ €.\n**Étape 2 :** prix effacé : $${this._6tex(total / 100)} - ${this._6tex((known[0] + known[1]) / 100)} = ${this._6tex(p[miss] / 100)}$ €.\nLe prix effacé est **${this._6A_money(p[miss])} €**.`,
      _v: { k: '6N3.ticket', p, miss }
    });
  });
  G._6X_add('6N3', 3, function () {
    // Analyse d'erreur (justification)
    const OPTS = {
      droite: 'Les derniers chiffres ont été alignés au lieu des virgules.',
      retenue: 'Une retenue a été oubliée.',
      virgule: 'La virgule du résultat est mal placée.',
      juste: 'Aucune : le résultat est juste.'
    };
    const noCarry = (x, y) => { // somme chiffre à chiffre sans retenue (entiers)
      let r = 0, m = 1;
      while (x > 0 || y > 0) { r += ((x % 10 + y % 10) % 10) * m; x = Math.floor(x / 10); y = Math.floor(y / 10); m *= 10; }
      return r;
    };
    let a, b, vals;
    do {
      a = this.randInt(1001, 9999); b = this.randInt(11, 999); // A = a/100, B = b/10
      const c = a + 10 * b; // centièmes
      vals = { juste: c / 100, droite: (a + b) / 100, virgule: c / 1000, retenue: noCarry(a, 10 * b) / 100 };
    } while (new Set(Object.values(vals)).size < 4);
    const kind = this.randChoice(['droite', 'retenue', 'virgule', 'juste']);
    const shown = this._6r(vals[kind]);
    const nom = this.randChoice(PRENOMS);
    const tx = v => this._6tex(v);
    const q = this._6A_q('6N3', 3, 'Raisonner', {
      title: 'Analyser une erreur de calcul',
      statement: `${nom} a calculé $${tx(a / 100)} + ${tx(b / 10)}$ et a trouvé $${tx(shown)}$.\n**Quelle erreur a été commise ?**`,
      hint1: 'Calcule toi-même la somme en alignant les virgules, puis compare avec son résultat.',
      hint2: 'Pour additionner des décimaux, on aligne les virgules (unités sous unités, dixièmes sous dixièmes) et on reporte les retenues.',
      solution: `Le résultat exact est $${tx(a / 100)} + ${tx(b / 10)} = ${tx(vals.juste)}$.\n${kind === 'juste' ? `Le résultat trouvé est identique : **${OPTS.juste}**` : kind === 'droite' ? `En alignant les derniers chiffres, on calcule en fait $${tx(a / 100)} + ${tx(b / 100)} = ${tx(vals.droite)}$ : **${OPTS.droite}**` : kind === 'virgule' ? `Les chiffres sont les bons mais le résultat est 10 fois trop petit : **${OPTS.virgule}**` : `Les chiffres diffèrent du résultat exact à cause d'une retenue non reportée : **${OPTS.retenue}**`}`,
      _v: { k: '6N3.erreur', a, b, shown100: Math.round(shown * 1000) }
    });
    return this._6mcq(q, OPTS[kind], Object.values(OPTS).filter(o => o !== OPTS[kind]));
  });
  G._6X_origWeight('6N3', 3, 3);

  // Pyramide de nombres (SVG)
  const pyramidSvg = (vals) => {
    // vals = [[b0,b1,b2],[m0,m1],[t]] (chaînes)
    const W = 50, H = 28;
    let inner = '';
    const brick = (x, y, txt) => {
      inner += `<rect x="${x}" y="${y}" width="${W * 2}" height="${H}" rx="3" fill="var(--bg-card, #fff7ed)" stroke="#b45309" stroke-width="1.6"/>`;
      inner += G._6svgText(x + W, y + H / 2 + 5, txt, { size: 13 });
    };
    vals[0].forEach((v, i) => brick(10 + i * W * 2, 10 + 2 * H, v));
    vals[1].forEach((v, i) => brick(10 + W + i * W * 2, 10 + H, v));
    brick(10 + 2 * W, 10, vals[2][0]);
    return G._6svg(W * 6 + 20, 3 * H + 20, inner, 320);
  };

  G._6X_add('6N3', 4, function () {
    // Pyramide : retrouver la brique du milieu de la base
    const a = this.randInt(11, 99), b = this.randInt(11, 99), c = this.randInt(11, 99); // dixièmes
    const top = a + 2 * b + c;
    const tx = v => this._6tex(v);
    const fig = pyramidSvg([[tx(a / 10), '?', tx(c / 10)], ['', ''], [tx(top / 10)]]);
    return this._6A_q('6N3', 4, 'Chercher', {
      title: 'Pyramide de nombres décimaux',
      statement: `Dans cette pyramide, chaque brique contient la **somme des deux briques situées juste en dessous**.\n${fig}\n**Quel nombre faut-il écrire à la place de « ? » ?**`,
      type: 'exact', answer: this._6ans(b / 10), placeholder: PH_DEC,
      hint1: 'Exprime les deux briques du milieu à l\'aide de la brique inconnue, puis la brique du sommet.',
      hint2: 'La brique inconnue intervient dans les deux briques du milieu : elle compte deux fois dans le sommet.',
      solution: `Notons $?$ la brique inconnue. Milieu : $${tx(a / 10)} + ?$ et $? + ${tx(c / 10)}$. Sommet : $${tx(a / 10)} + ? + ? + ${tx(c / 10)} = ${tx(top / 10)}$.\n**Étape 1 :** $? + ? = ${tx(top / 10)} - ${tx(a / 10)} - ${tx(c / 10)} = ${tx(2 * b / 10)}$.\n**Étape 2 :** $? = ${tx(2 * b / 10)} \\div 2 = ${tx(b / 10)}$.\nVérification : $${tx((a + b) / 10)} + ${tx((b + c) / 10)} = ${tx(top / 10)}$.`,
      _v: { k: '6N3.pyramide', a, c, top }
    });
  });
  G._6X_add('6N3', 4, function () {
    // Carré magique décimal
    let c, x, y, M;
    do {
      c = this.randInt(30, 90); x = this.randInt(1, 12); y = this.randInt(1, 12);
      M = [[c + x, c - x - y, c + y], [c - x + y, c, c + x - y], [c - y, c + x + y, c - x]];
    } while (x === y || new Set(M.flat()).size < 9 || Math.min(...M.flat()) < 5);
    // case demandée et case masquée (dans une autre ligne)
    const r = this.randInt(0, 2), col = this.randInt(0, 2);
    let r2, c2;
    do { r2 = this.randInt(0, 2); c2 = this.randInt(0, 2); } while (r2 === r || c2 === col);
    const tx = v => this._6tex(v / 10);
    const cell = (i, j) => (i === r && j === col ? '?' : i === r2 && j === c2 ? '…' : tx(M[i][j]));
    let inner = '';
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      inner += `<rect x="${10 + j * 60}" y="${10 + i * 40}" width="60" height="40" fill="none" stroke="var(--text-main, #334155)" stroke-width="1.6"/>`;
      inner += this._6svgText(40 + j * 60, 35 + i * 40, cell(i, j), { size: 14, fill: cell(i, j) === '?' ? '#dc2626' : undefined });
    }
    const fig = this._6svg(200, 140, inner, 220);
    const full = [0, 1, 2].find(i => i !== r && i !== r2);
    return this._6A_q('6N3', 4, 'Chercher', {
      title: 'Carré magique décimal',
      statement: `Dans ce carré magique, la somme des trois nombres de chaque ligne, de chaque colonne et de chaque diagonale est la même.\n${fig}\n**Quel nombre faut-il écrire à la place de « ? » ?**`,
      type: 'exact', answer: this._6ans(M[r][col] / 10), placeholder: PH_DEC,
      hint1: 'Commence par une ligne complète pour trouver la somme magique.',
      hint2: 'Dans la ligne (ou la colonne) qui contient « ? », le nombre manquant = somme magique − somme des deux autres nombres.',
      solution: `**Étape 1 :** la ligne ${full + 1} est complète : $${M[full].map(tx).join(' + ')} = ${tx(3 * c)}$ ; la somme magique est $${tx(3 * c)}$.\n**Étape 2 :** dans la ligne ${r + 1}, les deux autres nombres sont $${M[r].filter((_, j) => j !== col).map(tx).join('$ et $')}$.\n$$${tx(3 * c)} - ${M[r].filter((_, j) => j !== col).map(tx).join(' - ')} = ${tx(M[r][col])}$$`,
      _v: { k: '6N3.magique', M, r, col }
    });
  });
  G._6X_origWeight('6N3', 4, 3);

  // =====================================================================
  // 6N4
  // =====================================================================
  G._6X_add('6N4', 1, function () {
    // Multiplier par 0,5 (moitié) ou 0,25 (quart)
    const f = this.randChoice([[5, 2, 'la moitié', '0,5'], [5, 2, 'la moitié', '0,5'], [25, 4, 'le quart', '0,25']]);
    const k = f[1];
    let n = this.randInt(3, 60) * k;
    if (Math.random() < 0.4 && k === 2) n = this.randInt(11, 199) * 2 / 10; // décimal
    const res = this._6r(n / k);
    const tx = v => this._6tex(v);
    return this._6A_q('6N4', 1, 'Calculer', {
      title: `Multiplier par ${f[3]}`,
      statement: `Calculer mentalement :\n$$${tx(n)} \\times ${tx(f[0] / (k === 2 ? 10 : 100))}$$`,
      type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
      hint1: `Écris $${tx(f[0] / (k === 2 ? 10 : 100))}$ sous la forme d'une fraction simple.`,
      hint2: `Multiplier par $${tx(f[0] / (k === 2 ? 10 : 100))}$, c'est prendre ${f[2]} du nombre.`,
      solution: `$${tx(f[0] / (k === 2 ? 10 : 100))} = \\frac{1}{${k}}$ : multiplier par $${tx(f[0] / (k === 2 ? 10 : 100))}$, c'est prendre ${f[2]}, donc diviser par ${k}.\n$$${tx(n)} \\times ${tx(f[0] / (k === 2 ? 10 : 100))} = ${tx(n)} \\div ${k} = ${tx(res)}$$`,
      _v: { k: '6N4.moitie', n100: Math.round(n * 100), div: k }
    });
  });
  G._6X_origWeight('6N4', 1, 3);

  G._6X_add('6N4', 2, function () {
    // Aire d'un rectangle à dimensions décimales (contexte)
    const L = this.randInt(21, 99), l = this.randInt(11, Math.min(39, L - 1)); // dixièmes de m
    const ctx = this.randChoice(['un potager', 'une terrasse', 'une chambre', 'un tapis']);
    const A = this._6r(L * l / 100);
    const tx = v => this._6tex(v);
    return this._6A_q('6N4', 2, 'Modéliser', {
      title: 'Aire d\'un rectangle aux dimensions décimales',
      statement: `${ctx.charAt(0).toUpperCase() + ctx.slice(1)} rectangulaire mesure $${tx(L / 10)}$ m de long et $${tx(l / 10)}$ m de large.\n**Quelle est son aire, en m² ?**`,
      type: 'exact', answer: this._6ans(A), placeholder: PH_DEC,
      hint1: 'Calcule le produit sans les virgules, puis place la virgule.',
      hint2: 'Aire d\'un rectangle = longueur × largeur (dans la même unité).',
      solution: `**Étape 1 :** $\\mathcal{A} = L \\times \\ell = ${tx(L / 10)} \\times ${tx(l / 10)}$.\n**Étape 2 :** $${L} \\times ${l} = ${L * l}$ ; les facteurs ont $1 + 1 = 2$ chiffres après la virgule.\n$$${tx(L / 10)} \\times ${tx(l / 10)} = ${tx(A)}$$\nL'aire est **${this._6txt(A)} m²**.`,
      _v: { k: '6N4.aire', L, l }
    });
  });
  G._6X_add('6N4', 2, function () {
    // Diviser par 10, 100, 1 000 en contexte
    const m = this.randChoice([10, 100, 1000]);
    const ctx = this.randChoice([
      ['Un paquet de', 'feuilles pèse', 'g', 'Quelle est la masse d\'une feuille, en g ?'],
      ['Un lot de', 'clous coûte', '€', 'Quel est le prix d\'un clou, en euros ?'],
      ['Une pile de', 'pièces identiques mesure', 'mm de haut', 'Quelle est l\'épaisseur d\'une pièce, en mm ?']
    ]);
    let tot, res;
    do { tot = this.randInt(11, 9999) / (Math.random() < 0.5 ? 10 : 1); res = this._6r(tot / m); } while (res === Math.round(res) && res <= 10);
    const tx = v => this._6tex(v);
    return this._6A_q('6N4', 2, 'Modéliser', {
      title: 'Diviser par 10, 100 ou 1 000 dans un problème',
      statement: `${ctx[0]} $${tx(m)}$ ${ctx[1]} $${tx(tot)}$ ${ctx[2]}.\n**${ctx[3]}**`,
      type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
      hint1: 'Pour passer de tout le lot à un seul objet, quelle opération faut-il faire ?',
      hint2: 'Diviser par 10, 100 ou 1 000 décale les chiffres d\'un, deux ou trois rangs vers la droite.',
      solution: `Un objet représente une part sur $${tx(m)}$ : on divise par $${tx(m)}$, les chiffres se décalent de ${String(m).length - 1} rang(s) vers la droite.\n$$${tx(tot)} \\div ${tx(m)} = ${tx(res)}$$`,
      _v: { k: '6N4.div10', tot10: Math.round(tot * 10), m }
    });
  });
  G._6X_origWeight('6N4', 2, 3);

  G._6X_add('6N4', 3, function () {
    // Calcul astucieux : × 99, × 101, × 9, × 11
    const K = this.randChoice([[99, 100, -1], [101, 100, 1], [9, 10, -1], [11, 10, 1], [999, 1000, -1]]);
    const x = this.randInt(11, 99) / 10;
    const tx = v => this._6tex(v);
    const big = this._6r(x * K[1]);
    const res = this._6r(x * K[0]);
    return this._6A_q('6N4', 3, 'Calculer', {
      title: 'Produit astucieux (distributivité)',
      statement: `Calculer astucieusement, sans poser l'opération :\n$$${tx(x)} \\times ${K[0]}$$`,
      type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
      hint1: `Écris $${K[0]}$ comme un nombre rond ${K[2] < 0 ? 'moins' : 'plus'} 1.`,
      hint2: 'Multiplier un nombre par une somme (ou une différence), c\'est multiplier par chaque terme puis additionner (ou soustraire) les produits.',
      solution: `$${K[0]} = ${tx(K[1])} ${K[2] < 0 ? '-' : '+'} 1$, donc :\n$$${tx(x)} \\times ${K[0]} = ${tx(x)} \\times ${tx(K[1])} ${K[2] < 0 ? '-' : '+'} ${tx(x)} = ${tx(big)} ${K[2] < 0 ? '-' : '+'} ${tx(x)} = ${tx(res)}$$`,
      _v: { k: '6N4.distrib', x10: Math.round(x * 10), m: K[0] }
    });
  });
  G._6X_add('6N4', 3, function () {
    // Problème à plusieurs étapes : courses et rendu de monnaie
    const pk = this.randInt(13, 69) * 10; // prix au kg en centimes (multiple de 10)
    const mk = this.randInt(12, 39); // masse en dixièmes de kg
    const n = this.randInt(2, 6), pu = this.randInt(45, 299); // n articles à pu centimes
    const fruit = this.randChoice(['pommes', 'poires', 'tomates', 'clémentines', 'pêches']);
    const art = this.randChoice(['bouteilles de jus', 'paquets de gâteaux', 'yaourts à boire', 'baguettes']);
    const c1 = pk * mk / 10; // centimes (entier car pk multiple de 10)
    const tot = c1 + n * pu;
    const billet = [10, 20, 50].find(bb => bb * 100 > tot);
    const rendu = billet * 100 - tot;
    const nom = this.randChoice(PRENOMS);
    const tx = v => this._6tex(v);
    return this._6A_q('6N4', 3, 'Modéliser', {
      title: 'Problème : courses et rendu de monnaie',
      statement: `${nom} achète $${tx(mk / 10)}$ kg de ${fruit} à ${this._6A_money(pk)} € le kilogramme et ${n} ${art} à ${this._6A_money(pu)} € l'unité. Il paie avec un billet de ${billet} €.\n**Combien d'euros lui rend-on ?**`,
      type: 'exact', answer: this._6ans(rendu / 100), placeholder: PH_DEC,
      hint1: 'Calcule séparément le prix des fruits et celui des autres articles, puis le total.',
      hint2: 'Prix = prix unitaire × quantité ; monnaie rendue = somme donnée − prix total.',
      solution: `**Étape 1 :** fruits : $${tx(pk / 100)} \\times ${tx(mk / 10)} = ${tx(c1 / 100)}$ €.\n**Étape 2 :** articles : $${n} \\times ${tx(pu / 100)} = ${tx(n * pu / 100)}$ €.\n**Étape 3 :** total : $${tx(c1 / 100)} + ${tx(n * pu / 100)} = ${tx(tot / 100)}$ €.\n**Étape 4 :** rendu : $${billet} - ${tx(tot / 100)} = ${tx(rendu / 100)}$ €.\nOn lui rend **${this._6A_money(rendu)} €**.`,
      _v: { k: '6N4.courses', pk, mk, n, pu, billet }
    });
  });
  G._6X_origWeight('6N4', 3, 3);

  G._6X_add('6N4', 4, function () {
    // Retrouver un décimal dont le carré est donné
    const r = this.randChoice([[2, 9], [11, 19], [21, 30]]);
    let a;
    do { a = this.randInt(r[0], r[1]); } while (a % 10 === 0);
    const s = this.randChoice([10, 100]); // x = a / s
    const sq = a * a; // carré = sq / s²
    const tx = v => this._6tex(v);
    return this._6A_q('6N4', 4, 'Chercher', {
      title: 'Le nombre caché',
      statement: `Je suis un nombre décimal positif. Quand on me multiplie par moi-même, on obtient $${tx(sq / (s * s))}$.\n**Qui suis-je ?**`,
      type: 'exact', answer: this._6ans(a / s), placeholder: PH_DEC,
      hint1: 'Oublie d\'abord la virgule : quel entier, multiplié par lui-même, donne ce nombre sans virgule ?',
      hint2: 'Le produit d\'un nombre par lui-même a deux fois plus de chiffres après la virgule que ce nombre.',
      solution: `**Étape 1 :** sans la virgule, $${a} \\times ${a} = ${sq}$.\n**Étape 2 :** $${tx(sq / (s * s))}$ a ${2 * String(s).length - 2} chiffres après la virgule (en comptant les zéros), donc le nombre cherché en a ${String(s).length - 1}.\n$$${tx(a / s)} \\times ${tx(a / s)} = ${tx(sq / (s * s))}$$`,
      _v: { k: '6N4.carre', a, s }
    });
  });
  G._6X_add('6N4', 4, function () {
    // Sans calculer : le plus grand / le plus petit produit
    const N = this.randInt(12, 95);
    // En centièmes ; 90/15, 50/5, 120/102 : pièges « plus de chiffres = plus grand »
    const F = this.shuffle([9, 99, 101, 11, 5, 15, 102, 98, 90, 50, 120, 150]).slice(0, 4);
    const ask = this.randChoice(['grand', 'petit']);
    const best = ask === 'grand' ? Math.max(...F) : Math.min(...F);
    const fmt = f => `$${N} \\times ${this._6tex(f / 100)}$`;
    const q = this._6A_q('6N4', 4, 'Raisonner', {
      title: 'Comparer des produits sans les calculer',
      statement: this.randChoice([
        `Sans effectuer les calculs, quel est le **plus ${ask}** de ces produits ?`,
        `Les quatre produits proposés ont le même premier facteur, $${N}$. Sans les calculer, quel est le **plus ${ask}** ?`,
        `Un article coûte $${N}$ €. On multiplie son prix par l'un des nombres $${this.shuffle(F.slice()).map(f => this._6tex(f / 100)).join('$ ; $')}$. Sans calculer, quel produit donne le prix le **plus ${ask === 'grand' ? 'élevé' : 'bas'}** ?`,
        `${this.randChoice(['Léa', 'Hugo', 'Inès', 'Noah', 'Jade', 'Adam'])} affirme qu'on peut trouver le **plus ${ask}** de ces produits sans poser aucune multiplication. Lequel est-ce ?`
      ]),
      hint1: 'Tous les produits ont le même premier facteur : compare seulement les seconds facteurs.',
      hint2: 'Multiplier par un nombre inférieur à 1 donne un résultat inférieur au nombre de départ ; par un nombre supérieur à 1, un résultat supérieur.',
      solution: `Le premier facteur $${N}$ est le même partout : le produit le plus ${ask} est celui dont le second facteur est le plus ${ask}.\nSeconds facteurs rangés : $${F.slice().sort((x, y) => x - y).map(f => this._6tex(f / 100)).join(' < ')}$.\nRéponse : **${fmt(best)}**.`,
      _v: { k: '6N4.cmpprod', N, F, ask }
    });
    return this._6mcq(q, fmt(best), F.filter(f => f !== best).map(fmt));
  });
  G._6X_origWeight('6N4', 4, 2);
  G._6X_drop('6N4', 4, ['6N4.compare']);

  // =====================================================================
  // 6N5
  // =====================================================================
  G._6X_add('6N5', 1, function () {
    // Quotient exact à l'aide des tables / facteur manquant
    const d = this.randInt(2, 9), q0 = this.randInt(2, 12);
    const n = d * q0;
    const form = this.randChoice(['div', 'trou']);
    return this._6A_q('6N5', 1, 'Calculer', {
      title: form === 'div' ? 'Quotient exact (tables de multiplication)' : 'Facteur manquant',
      statement: form === 'div' ? `Calculer mentalement :\n$$${n} \\div ${d}$$` : `Compléter :\n$$${d} \\times \\dots = ${n}$$`,
      type: 'exact', answer: String(q0), placeholder: PH_INT,
      hint1: `Cherche dans la table de ${d} le nombre qui donne $${n}$.`,
      hint2: `Diviser $${n}$ par $${d}$, c'est chercher le nombre qui, multiplié par $${d}$, donne $${n}$.`,
      solution: `Dans la table de ${d} : $${d} \\times ${q0} = ${n}$.\n${form === 'div' ? `Donc $${n} \\div ${d} = ${q0}$.` : `Le facteur manquant est **${q0}**.`}`,
      _v: { k: '6N5.tables', n, d }
    });
  });
  G._6X_origWeight('6N5', 1, 3);

  G._6X_add('6N5', 2, function () {
    // Combien de multiples de d entre 1 et N
    const d = this.randInt(3, 15), N = this.randInt(40, 300);
    const ans = Math.floor(N / d);
    return this._6A_q('6N5', 2, 'Raisonner', {
      title: 'Compter des multiples',
      statement: `Combien y a-t-il de multiples de $${d}$ compris entre $1$ et $${N}$ (inclus) ?`,
      type: 'exact', answer: String(ans), placeholder: PH_INT,
      hint1: `Écris les multiples de $${d}$ dans l'ordre : jusqu'à quel facteur peut-on aller sans dépasser $${N}$ ?`,
      hint2: 'Dans une division euclidienne, le quotient indique combien de fois le diviseur « rentre » dans le dividende.',
      solution: `Division euclidienne : $${N} = ${d} \\times ${ans} + ${N % d}$ avec $${N % d} < ${d}$.\nLes multiples cherchés sont $${d} \\times 1$, …, $${d} \\times ${ans} = ${d * ans}$ : il y en a **${ans}**.`,
      _v: { k: '6N5.nbmult', d, N }
    });
  });
  G._6X_add('6N5', 2, function () {
    // Par combien des nombres 2, 3, 5, 9, 10 le nombre est-il divisible ?
    const D = [2, 3, 5, 9, 10];
    let n, ok;
    do { n = this.randInt(100, 9999); ok = D.filter(d => n % d === 0); } while (!ok.length);
    const sumD = String(n).split('').reduce((s, c) => s + +c, 0);
    return this._6A_q('6N5', 2, 'Raisonner', {
      title: 'Critères de divisibilité',
      statement: `Parmi les nombres $2$ ; $3$ ; $5$ ; $9$ et $10$, **combien sont des diviseurs de $${this._6tex(n)}$ ?**`,
      type: 'exact', answer: String(ok.length), placeholder: PH_INT,
      hint1: 'Utilise les critères de divisibilité : regarde le chiffre des unités, puis la somme des chiffres.',
      hint2: 'Divisible par 2 : unités paires ; par 5 : unités 0 ou 5 ; par 10 : unités 0 ; par 3 (ou 9) : somme des chiffres divisible par 3 (ou 9).',
      solution: `Chiffre des unités : $${n % 10}$ ; somme des chiffres : $${String(n).split('').join(' + ')} = ${sumD}$.\n${D.map(d => `• ${d} : ${n % d === 0 ? 'oui' : 'non'}`).join('\n')}\n$${this._6tex(n)}$ est divisible par **${ok.length}** de ces nombres${ok.length ? ` (${ok.join(', ')})` : ''}.`,
      _v: { k: '6N5.criteres', n }
    });
  });
  G._6X_origWeight('6N5', 2, 3);

  G._6X_add('6N5', 3, function () {
    // Quotient approché
    let n, d;
    do { n = this.randInt(10, 400); d = this.randChoice([3, 6, 7, 9, 11, 12]); } while ((n * 1000) % d === 0);
    const prec = this.randChoice([['au dixième', 10], ['au centième', 100]]);
    const ans = Math.round(n / d * prec[1]) / prec[1];
    const tr = Math.floor(n / d * prec[1] * 10) / (prec[1] * 10);
    return this._6A_q('6N5', 3, 'Calculer', {
      title: 'Valeur approchée d\'un quotient',
      statement: `Donner l'arrondi ${prec[0]} du quotient :\n$$${n} \\div ${d}$$`,
      type: 'exact', answer: this._6ans(ans), placeholder: PH_DEC,
      hint1: `Pose la division et calcule un chiffre de plus que la précision demandée.`,
      hint2: `Pour arrondir ${prec[0]}, on regarde le chiffre suivant : de 0 à 4 on garde, de 5 à 9 on augmente d'un.`,
      solution: `**Étape 1 :** la division ne s'arrête pas ; on calcule $${n} \\div ${d} \\approx ${this._6tex(tr)}\\dots$\n**Étape 2 :** on regarde le chiffre ${prec[1] === 10 ? 'des centièmes' : 'des millièmes'} pour arrondir ${prec[0]}.\nL'arrondi ${prec[0]} est **$${this._6tex(ans)}$**.`,
      _v: { k: '6N5.approche', n, d, p: prec[1] }
    });
  });
  G._6X_origWeight('6N5', 3, 4);

  G._6X_add('6N5', 4, function () {
    // Énigme des restes
    const pairs = [[3, 4], [4, 5], [3, 5], [5, 6], [4, 7], [3, 7], [5, 7], [2, 9]];
    const [a, b] = this.randChoice(pairs);
    const L = a * b;
    const lo = this.randInt(2, 8) * 10;
    let n;
    do { n = this.randInt(lo, lo + L - 1); } while (n % a === 0 || n % b === 0);
    const ra = n % a, rb = n % b;
    const obj = this.randChoice(['billes', 'cartes', 'perles', 'timbres']);
    return this._6A_q('6N5', 4, 'Chercher', {
      title: 'Énigme des restes',
      statement: `Une collection compte entre $${lo}$ et $${lo + L - 1}$ ${obj}.\n• Si on les range par paquets de $${a}$, il en reste $${ra}$.\n• Si on les range par paquets de $${b}$, il en reste $${rb}$.\n**Combien y a-t-il de ${obj} ?**`,
      type: 'exact', answer: String(n), placeholder: PH_INT,
      hint1: `Écris les nombres de l'intervalle dont le reste dans la division par $${b}$ est $${rb}$, puis teste-les avec $${a}$.`,
      hint2: 'Dans une division euclidienne : dividende = diviseur × quotient + reste, avec reste < diviseur.',
      solution: `**Étape 1 :** nombres entre $${lo}$ et $${lo + L - 1}$ de la forme $${b} \\times q + ${rb}$ : ${(() => { const l = []; for (let m = lo; m < lo + L; m++) if (m % b === rb) l.push(m); return l.join(' ; '); })()}.\n**Étape 2 :** parmi eux, seul $${n}$ a pour reste $${ra}$ dans la division par $${a}$ : $${n} = ${a} \\times ${Math.floor(n / a)} + ${ra}$.\nIl y a **${n}** ${obj}.`,
      _v: { k: '6N5.restes', a, b, lo, ra, rb }
    });
  });
  G._6X_origWeight('6N5', 4, 4);
})();
