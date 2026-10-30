/**
 * L'Établi des Maths — Générateurs aléatoires de la classe de 6ème
 * Programme de mathématiques du cycle 3 (arrêté du 10 avril 2025, BO n° 16 du 17 avril 2025),
 * applicable en 6e depuis la rentrée 2025.
 *
 * Chargé APRÈS js/randomGenerators.js : les fonctions generate6XX(tier, mastery) sont
 * ajoutées à l'objet global window.MathsGenerators (helpers réutilisés : randInt, randChoice,
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
          solution: `$$\\frac{${this._6tex(n)}}{${this._6tex(d)}} = ${this._6tex(val)}$$`,
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
          const p = this.randInt(1, 199);
          if (Math.random() < 0.5) {
            return this._6A_q(id, t, sk, {
              title: 'Pourcentage et écriture décimale',
              statement: `Écrire $${p}\\,\\%$ sous la forme d'un nombre décimal.`,
              type: 'exact', answer: this._6ans(p / 100), placeholder: PH_DEC,
              hint1: `$${p}\\,\\%$ signifie « ${p} pour 100 », c'est-à-dire $\\frac{${p}}{100}$.`,
              hint2: 'Diviser par 100 : le chiffre des unités passe au rang des centièmes.',
              solution: `$$${p}\\,\\% = \\frac{${p}}{100} = ${this._6tex(p / 100)}$$`,
              _v: { k: '6N1.pct', p, dir: 'to_dec' }
            });
          }
          return this._6A_q(id, t, sk, {
            title: 'Écriture décimale et pourcentage',
            statement: `Écrire $${this._6tex(p / 100)}$ sous la forme d'un pourcentage.\n*(Donner seulement le nombre placé devant le symbole %.)*`,
            type: 'exact', answer: String(p), placeholder: PH_INT,
            hint1: 'Écris le nombre sous la forme d\'une fraction de dénominateur 100.',
            hint2: `$${this._6tex(p / 100)} = \\frac{\\dots}{100}$.`,
            solution: `$$${this._6tex(p / 100)} = \\frac{${p}}{100} = ${p}\\,\\%$$`,
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
            hint2: `$${e} = \\frac{${e * b}}{${b}}$.`,
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
            hint2: `$${n} = ${b} \\times ${e} + ${r}$.`,
            solution: `$${n} = ${b} \\times ${e} + ${r}$, donc $\\frac{${n}}{${b}} = ${e} + \\frac{${r}}{${b}}$. Ainsi ${ask === 'e' ? `$e = ${e}$` : `$r = ${r}$`}.`,
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
            hint2: `$${this._6tex(val)} = ${u} + ${this._6tex(d1 / 10)} + ${this._6tex(d2 / 100)}$.`,
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
            hint2: `Multiplie le numérateur et le dénominateur par $${100 / b}$.`,
            solution: `$$\\frac{${a}}{${b}} = \\frac{${a} \\times ${100 / b}}{${b} \\times ${100 / b}} = \\frac{${p}}{100} = ${p}\\,\\%$$`,
            _v: { k: '6N1.pctfrac', a, b }
          });
        }
        const x = this.randInt(11, 999) / (Math.random() < 0.5 ? 10 : 100);
        const u = this.randChoice([{ nom: 'dizaines', un: 'Une dizaine', m: 10 }, { nom: 'centaines', un: 'Une centaine', m: 100 }, { nom: 'milliers', un: 'Un millier', m: 1000 }]);
        const ans = this._6r(x * u.m);
        return this._6A_q(id, t, sk, {
          title: 'Changer d\'unité de numération',
          statement: `Combien d'unités représentent $${this._6tex(x)}$ ${u.nom} ?`,
          type: 'exact', answer: this._6ans(ans), placeholder: PH_INT,
          hint1: `${u.un} vaut $${this._6tex(u.m)}$ unités.`,
          hint2: `Calcule $${this._6tex(x)} \\times ${this._6tex(u.m)}$.`,
          solution: `$$${this._6tex(x)} \\times ${this._6tex(u.m)} = ${this._6tex(ans)} \\text{ unités}$$`,
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
          hint2: `$\\frac{${a}}{10} = ${this._6tex(a / 10)}$, $\\frac{${b}}{100} = ${this._6tex(b / 100)}$ et $\\frac{${c}}{1\\,000} = ${this._6tex(c / 1000)}$.`,
          solution: `$$${this._6tex(a / 10)} + ${this._6tex(b / 100)} + ${this._6tex(c / 1000)} = ${this._6tex(val)}$$`,
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
          hint1: `Une unité vaut $${this._6tex(tgt.m)}$ ${tgt.nom} et un dixième vaut $${tgt.m / 10}$ ${tgt.nom}.`,
          hint2: `$${a}$ unités et $${b}$ dixièmes, c'est le nombre $${this._6tex(a + b / 10)}$.`,
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
        dec = this.randInt(300, 950);
        n = this.randInt(300, 999);
        vals = [1000 * fr[0] / fr[1], 10 * p, dec, n];
      } while (new Set(vals).size < 4);
      const sDec = `$${this._6tex(dec / 1000)}$`, sPct = `$${p}\\,\\%$`, sFr = `$\\frac{${fr[0]}}{${fr[1]}}$`, sN = `$\\frac{${n}}{1\\,000}$`;
      const strs = [sFr, sPct, sDec, sN];
      const imax = vals.indexOf(Math.max(...vals));
      const q = this._6A_q(id, t, 'Raisonner', {
        title: 'Comparer des écritures différentes',
        statement: 'Parmi ces nombres, lequel est **le plus grand** ?',
        hint1: 'Convertis chaque nombre en écriture décimale.',
        hint2: `$${p}\\,\\% = ${this._6tex(p / 100)}$ et $\\frac{${fr[0]}}{${fr[1]}} = ${this._6tex(fr[0] / fr[1])}$.`,
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
            hint2: `Compte les petites graduations à partir de $${s}$.`,
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
          hint2: 'Regarde le chiffre des dixièmes : s\'il vaut 5 ou plus, on arrondit à l\'entier supérieur.',
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
            hint2: `Regarde le chiffre ${prec === 1 ? 'des centièmes' : 'des millièmes'} : 5 ou plus → on arrondit au-dessus.`,
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
            hint1: `Entre $${tx(s)}$ et $${tx(this._6r(s + 0.1))}$, l'écart est $0{,}1$, partagé en 10 : chaque petite graduation vaut $0{,}01$.`,
            hint2: `Compte les petites graduations à partir de $${tx(s)}$.`,
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
        const q = this._6A_q(id, t, 'Comparer', {
          title: mode === 'max' ? 'Trouver le plus grand décimal' : 'Trouver le plus petit décimal',
          statement: `Parmi ces nombres, lequel est **le plus ${mode === 'max' ? 'grand' : 'petit'}** ?`,
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
            hint1: `L'écart entre les deux graduations est $${B} - ${A} = ${B - A}$.`,
            hint2: `On partage cet écart en $${n}$ : calcule $${B - A} \\div ${n}$.`,
            solution: `$$(${B} - ${A}) \\div ${n} = ${B - A} \\div ${n} = ${tx(step)}$$`,
            _v: { k: '6N2.pas', A, B, n }
          });
        }
        const prec = this.randChoice([10, 100]);
        let x = this.randInt(1000, 99999);
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
          hint2: `Teste $\\square = ${d}$ : compare alors les chiffres des centièmes ${t1} et ${t2}.`,
          solution: `Avec $\\square = ${d}$ : $${a}{,}${d}${t1}$ ${(t1 < t2) === (mode === 'max') ? 'convient' : 'ne convient pas'}.\nLe ${mode === 'max' ? 'plus grand' : 'plus petit'} chiffre possible est donc **${ans}** ($${a}{,}${ans}${t1} ${rel} ${a}{,}${d}${t2}$).`,
          _v: { k: '6N2.manquant', d, t1, t2, mode }
        });
      }
      if (sub === 'abscisse_fine') {
        const s100 = this.randInt(0, 999);
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
        const c = tt * 10 + this.randInt(-4, 4);
        const correct = `$${tx(c / 100)}$`;
        const q = this._6A_q(id, t, sk, {
          title: 'Retrouver un nombre à partir de son arrondi',
          statement: `L'arrondi au dixième d'un nombre est $${tx(tt / 10)}$.\n**Lequel de ces nombres peut-il être ?**`,
          hint1: `Les nombres dont l'arrondi au dixième est $${tx(tt / 10)}$ sont plus proches de $${tx(tt / 10)}$ que des dixièmes voisins.`,
          hint2: `Ils sont compris entre $${tx((tt * 10 - 5) / 100)}$ (inclus) et $${tx((tt * 10 + 5) / 100)}$ (exclu).`,
          solution: `Il faut $${tx((tt * 10 - 5) / 100)} \\le x < ${tx((tt * 10 + 5) / 100)}$. Seul ${correct} convient.`,
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
            solution: `$$${tx(a / 10)} + ${tx(b / 10)} = ${tx(s)}$$`,
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
            solution: `$$${tx(a / 10)} - ${tx(b / 10)} = ${tx((a - b) / 10)}$$`,
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
          solution: `$$${target} - ${tx(x)} = ${tx(ans)} \\quad \\text{donc} \\quad ${tx(x)} + ${tx(ans)} = ${target}$$`,
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
              solution: `$$${this._6A_fix2(b * 10)} - ${tx(A)} = ${tx(this._6r(B - A))}$$`,
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
            solution: `$$${tx(A)} ${op} ${this._6A_fix2(b * 10)} = ${tx(res)}$$`,
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
            solution: `$$${n}{,}00 - ${tx(x / 100)} = ${tx(res)}$$`,
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
            hint2: `$${tx(a / 10)} \\approx ${ra}$ et $${tx(b / 10)} \\approx ${rb}$.`,
            solution: `$${tx(a / 10)} \\approx ${ra}$ et $${tx(b / 10)} \\approx ${rb}$, donc l'ordre de grandeur est $${ra} ${op} ${rb} = ${og}$.`,
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
            solution: `$$${tx(a / 100)} + ${tx(b / 10)} + ${c} = ${tx(s)}$$`,
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
            solution: `$$${tx(b / 100)} - ${tx(a / 100)} = ${tx((b - a) / 100)}$$`,
            _v: { k: '6N3.lin', terms: [[1, b, 100], [-1, a, 100]] }
          });
        }
        return this._6A_q(id, t, sk, {
          title: 'Nombre de départ manquant',
          statement: `Compléter :\n$$\\dots - ${tx(a / 100)} = ${tx(d / 10)}$$`,
          type: 'exact', answer: this._6ans(this._6r(a / 100 + d / 10)), placeholder: PH_DEC,
          hint1: 'Pour retrouver le nombre de départ d\'une soustraction, on fait l\'addition inverse.',
          hint2: `Calcule $${tx(d / 10)} + ${tx(a / 100)}$.`,
          solution: `$$${tx(d / 10)} + ${tx(a / 100)} = ${tx(this._6r(a / 100 + d / 10))}$$`,
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
          hint2: `Commence par $${tx(a / 100)} - ${tx(b / 100)} = ${tx((a - b) / 100)}$.`,
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
        hint2: `$${tx(x / 10)} + ${tx((k1 * 100 - x) / 10)} = ${k1 * 10}$.`,
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
            solution: `$$${tx(x)} \\${op} ${tx(m)} = ${tx(res)}$$`,
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
            solution: `$$${tx(x)} \\times ${tx(1 / m)} = ${tx(x)} \\div ${tx(m)} = ${tx(res)}$$`,
            _v: { k: '6N4.prod', f: [[Math.round(x * 100), 100], [1, m]] }
          });
        }
        const n = this.randInt(2, 9), a = this.randInt(11, 99);
        const res = this._6r(n * a / 10);
        return this._6A_q(id, t, sk, {
          title: 'Multiplier un décimal par un entier',
          statement: `Calculer :\n$$${n} \\times ${tx(a / 10)}$$`,
          type: 'exact', answer: this._6ans(res), placeholder: PH_DEC,
          hint1: `Calcule d'abord $${n} \\times ${a}$ sans la virgule.`,
          hint2: 'Le facteur décimal a un chiffre après la virgule : le produit aussi.',
          solution: `$${n} \\times ${a} = ${n * a}$, donc $${n} \\times ${tx(a / 10)} = ${tx(res)}$.`,
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
            hint1: `Calcule $${a} \\times ${b}$ sans tenir compte des virgules.`,
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
            hint2: `Il y en a ${s1 + s2} : le produit aura ${s1 + s2} chiffre(s) après la virgule.`,
            solution: `${s1 + s2} chiffre(s) après la virgule au total, donc $${tx(A)} \\times ${tx(B)} = ${tx(res)}$.`,
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
          solution: `$$${n} \\times ${tx(p / 100)} = ${tx(res)} \\text{ €}$$`,
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
            hint2: `$${tx(a / 10)} \\approx ${ra}$ et $${tx(b / 10)} \\approx ${rb}$.`,
            solution: `$${ra} \\times ${rb} = ${tx(og)}$ : l'ordre de grandeur est $${tx(og)}$.`,
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
            hint1: `Calcule $${a} \\times ${b}$ sans les virgules.`,
            hint2: 'Il y a 2 + 1 = 3 chiffres après la virgule dans les facteurs.',
            solution: `$${a} \\times ${b} = ${tx(a * b)}$ ; avec 3 chiffres après la virgule : $${tx(res)}$.`,
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
          solution: `$$${tx(p / 100)} \\times ${tx(m / 10)} = ${tx(res)} \\text{ €}$$`,
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
          hint2: 'Un décalage vers la gauche correspond à 10, 100, 1 000 ; vers la droite à 0,1 ; 0,01 ; 0,001.',
          solution: `$$${tx(x)} \\times ${tx(m)} = ${tx(y)}$$`,
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
          hint2: `Commence par $${tx(a / den)} \\times ${c} = ${tx(this._6r(a / den * c))}$.`,
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
        hint2: 'Multiplier par un nombre plus petit que 1 « rapetisse » ; multiplier par un nombre plus grand que 1 « agrandit ».',
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
        while (nums.length < 4) {
          const c = this.randInt(100, 9999);
          if (c % k !== 0 && !nums.includes(c)) nums.push(c);
        }
        const crit = { 2: 'son chiffre des unités est 0, 2, 4, 6 ou 8', 3: 'la somme de ses chiffres est divisible par 3', 5: 'son chiffre des unités est 0 ou 5', 9: 'la somme de ses chiffres est divisible par 9', 10: 'son chiffre des unités est 0' }[k];
        const q = this._6A_q(id, t, 'Raisonner', {
          title: `Critère de divisibilité par ${k}`,
          statement: `Parmi ces nombres, lequel est divisible par $${k}$ ?`,
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
            solution: `$$${b} \\times ${q0} + ${r} = ${b * q0} + ${r} = ${tx(b * q0 + r)}$$`,
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
            hint2: `Teste 1, 2, 3, 4… jusqu'à ce que les paires se répètent.`,
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
            solution: `$$${n} \\div ${d} = ${tx(n / d)} \\quad \\text{car} \\quad ${d} \\times ${tx(n / d)} = ${n}$$`,
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
          solution: `$$${tx(total / 100)} \\div ${d} = ${tx(part / 100)} \\text{ €}$$`,
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
          hint1: `Un nombre divisible à la fois par ${a} et par ${b} est ici un multiple de $${a} \\times ${b} = ${l}$.`,
          hint2: `Cherche le premier multiple de ${l} après ${N}.`,
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
            hint2: `Ce nombre s'écrit $${F(a, b)}$.`,
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
            hint1: `Une graduation représente $${F(1, d)}$ d'unité.`,
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
            hint2: `$${F(a, b)} = ${F(a * k, b * k)}$. Compare ensuite les numérateurs.`,
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
            hint2: `$${n} = ${d} \\times ${e} + ${r}$.`,
            solution: `$${n} = ${d} \\times ${e} + ${r}$ donc $${F(n, d)} = ${e} + ${F(r, d)}$.`,
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
          hint2: `$${d} \\times ${Math.floor(n / d)} = ${d * Math.floor(n / d)}$ et $${d} \\times ${Math.floor(n / d) + 1} = ${d * (Math.floor(n / d) + 1)}$.`,
          solution: `$${F(d * Math.floor(n / d), d)} < ${F(n, d)} < ${F(d * (Math.floor(n / d) + 1), d)}$, donc $${Math.floor(n / d)} < ${F(n, d)} < ${Math.floor(n / d) + 1}$.`,
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
          hint2: `$${F(a, b)} = ${F(2 * a, 2 * b)}$ et $${F(a + 1, b)} = ${F(2 * a + 2, 2 * b)}$.`,
          solution: `$${F(2 * a, 2 * b)} < ${F('n', 2 * b)} < ${F(2 * a + 2, 2 * b)}$ donc $n = ${2 * a + 1}$.`,
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
          hint2: `$${e} = ${F(e * d, d)}$.`,
          solution: `$$${e} + ${F(r, d)} = ${F(e * d, d)} + ${F(r, d)} = ${F(e * d + r, d)}$$`,
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
        hint2: `Multiplie numérateur et dénominateur par $${100 / b}$.`,
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
            hint2: `$${a} ${op} ${b} = ${n}$. Pense à simplifier si possible.`,
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
            hint2: `$${N} \\div ${b} = ${N / b}$.`,
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
          hint2: `$${k} \\times ${a} = ${k * a}$.`,
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
            hint2: `$${F(a, b)} = ${F(a * k, b * k)}$.`,
            solution: `$$${F(a, b)} ${op} ${F(c, b * k)} = ${F(a * k, b * k)} ${op} ${F(c, b * k)} = ${F(n, b * k)}${simpStep(n, b * k)}$$`,
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
            hint2: `Commence par $${N} \\div ${b} = ${N / b}$.`,
            solution: `$$${F(a, b)} \\times ${N} = (${N} \\div ${b}) \\times ${a} = ${N / b * a}$$\nLa réponse est $${N / b * a}$.`,
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
          hint2: `$${n} = ${F(n * b, b)}$.`,
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
            hint2: `$${F(a, b)} = ${F(a * k, D)}$, puis calcule de gauche à droite.`,
            solution: `$$${F(a * k, D)} + ${F(c, D)} - ${F(e, D)} = ${F(n, D)}${simpStep(n, D)}$$`,
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
            hint2: `Calcule d'abord la fraction utilisée : $${F(a, b)} + ${F(c, D)} = ${F(a * k + c, D)}$.`,
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
            hint2: `$${F(a, b)} = ${F(a * k, D)}$ : que faut-il ajouter à $${a * k}$ pour obtenir $${a * k + x}$ ?`,
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
          hint2: `Une part vaut $${a * u} \\div ${a} = ${u}$.`,
          solution: `Une part vaut $${a * u} \\div ${a} = ${u}$, donc le nombre vaut $${b} \\times ${u} = ${b * u}$.`,
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
          hint2: `Voyage : $${N / b * a}$ € ; matériel : $${N / D * c}$ €.`,
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
          hint2: `$${k} \\times ${F(a, d)} = ${F(k * a, d)}$.`,
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
          hint2: `$${F(a, b)} + ${F(c, D)} = ${F(a * k + c, D)}$.`,
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
        hint2: `$${F(a, d1)} = ${F(4 * a, d3)}$ et $${F(c, d2)} = ${F(2 * c, d3)}$.`,
        solution: `$$${F(4 * a, d3)} + ${F(2 * c, d3)} + ${F(e, d3)} = ${F(n, d3)}${simpStep(n, d3)}$$`,
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
          hint2: 'Vérifie ta réponse en la remplaçant dans l\'égalité.',
          solution: `$$${sol}$$\nVérification : l'égalité est vraie avec $${ans}$.`,
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
            hint2: order ? `$${x} \\times ${a} = ${a * x}$.` : `$${x} + ${b} = ${x + b}$.`,
            solution: order ? `$${x} \\times ${a} = ${a * x}$ puis $${a * x} + ${b} = ${r}$.` : `$${x} + ${b} = ${x + b}$ puis $${x + b} \\times ${a} = ${r}$.`,
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
            hint2: `Calcule $${this._6tex(b)} - ${this._6tex(a)}$.`,
            solution: `$$${S} = ${this._6tex(b)} - ${this._6tex(a)} = ${this._6tex(ans)}$$`,
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
            hint2: `$${a} + ${n - 1} \\times ${d}$.`,
            solution: `$$${a} + ${n - 1} \\times ${d} = ${a} + ${(n - 1) * d} = ${a + (n - 1) * d}$$`,
            _v: { k: '6N8.pattern', a, d, n }
          });
        }
        const a = this.randInt(2, 9), b = this.randInt(1, 30), x = this.randInt(2, 20);
        return mk({
          title: 'Je pense à un nombre',
          statement: `Je pense à un nombre. Je le multiplie par $${a}$ puis j'ajoute $${b}$. J'obtiens $${a * x + b}$.\n**À quel nombre ai-je pensé ?**`,
          type: 'exact', answer: String(x),
          hint1: 'Remonte le programme à l\'envers en utilisant les opérations inverses.',
          hint2: `Enlève d'abord $${b}$ : $${a * x + b} - ${b} = ${a * x}$.`,
          solution: `$${a * x + b} - ${b} = ${a * x}$ puis $${a * x} \\div ${a} = ${x}$. J'ai pensé à $${x}$.`,
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
            hint2: `$${r} \\div ${a} = ${x + b}$.`,
            solution: `$${r} \\div ${a} = ${x + b}$ puis $${x + b} - ${b} = ${x}$. Le nombre choisi est $${x}$.`,
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
            hint2: `En tout, il y a $${k + 1}$ barres identiques.`,
            solution: `$${k + 1}$ barres valent $${u * (k + 1)}$, donc une barre vaut $${u * (k + 1)} \\div ${k + 1} = ${u}$.`,
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
            hint1: `Schéma en barres : la cousine a 1 barre, ${name} en a $${k}$. L'écart correspond à $${k - 1}$ barre(s).`,
            hint2: `Une barre vaut $${u * (k - 1)} \\div ${k - 1}$.`,
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
          hint2: `À l'étape $${n}$, on a ajouté $${d}$ ${thing} $${n - 1}$ fois.`,
          solution: `$$${a} + (${n} - 1) \\times ${d} = ${a} + ${(n - 1) * d} = ${a + (n - 1) * d}$$`,
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
          hint2: `$${N} - ${a} = ${N - a}$ jetons ajoutés, soit $${N - a} \\div ${d}$ ajouts.`,
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
          hint2: `Retire $${a}$ g de chaque côté : $${k} \\times ${S} = ${k * x}$.`,
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
        hint2: `Retire l'écart : $${this._6eurTexB(s)} - ${this._6eurTexB(dd)} = ${this._6eurTexB(s - dd)}$, ce qui correspond à deux fois le prix cherché.`,
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
          hint2: half ? 'Il y a deux fois moins de personnes.' : `Il y a $${f}$ fois plus de personnes.`,
          solution: half ? `$${qty} \\div 2 = ${qty / 2}$ ${ing[1]}.` : `$${qty} \\times ${f} = ${qty * f}$ ${ing[1]}.`,
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
            hint2: `$${this._6eurTexB(P)} \\div ${n} = ${this._6eurTexB(u)}$ €.`,
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
            hint1: `Prendre $${p} \\, \\%$ d'un nombre, c'est le multiplier par $\\frac{${p}}{100}$.`,
            hint2: p === 50 ? 'C\'est la moitié.' : (p === 25 ? 'C\'est le quart.' : (p === 10 ? 'On divise par 10.' : `Calcule d'abord $1 \\, \\%$ ou $10 \\, \\%$ de $${N}$.`)),
            solution: `$$\\frac{${p}}{100} \\times ${N} = ${this._6tex(N * p / 100)}$$`,
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
            hint2: `$${d} \\times ${this._6tex(E)} = ${this._6tex(d * E)}$ cm, puis convertis en mètres.`,
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
            hint2: `$${this._6tex(real_m)}$ m $= ${this._6tex(real_m * 100)}$ cm ; divise ensuite par $${this._6tex(E)}$.`,
            solution: `$${this._6tex(real_m * 100)} \\div ${this._6tex(E)} = ${d}$ : la distance sur la carte est $${d}$ cm.`,
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
            hint2: `$${x1 * u} \\div ${x1} = ${u}$.`,
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
          hint2: `Réduction : $${this._6tex(N * p / 100)}$ €.`,
          solution: `Réduction : $\\frac{${p}}{100} \\times ${N} = ${this._6tex(N * p / 100)}$ €.\nNouveau prix : $${N} - ${this._6tex(N * p / 100)} = ${this._6tex(final)}$ €.`,
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
          hint2: `$${this._6tex(real_m)}$ m $= ${this._6tex(real_cm)}$ cm.`,
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
          `La masse de $${c}$ sacs de riz identiques et le nombre de sacs.`
        ];
        const nonProps = [
          `La taille d'un enfant et son âge.`,
          `L'aire d'un carré et la longueur de son côté.`,
          `Le prix d'un taxi avec une prise en charge de $${a}$ € puis $${this._6tex(c / 10 + 1)}$ € par km, et la distance parcourue.`,
          `La température extérieure et l'heure de la journée.`,
          `Le nombre de buts marqués par une équipe et le nombre de matchs joués.`
        ];
        const correct = this.randChoice(props);
        const q = mk({
          title: 'Défi 5ème : reconnaître la proportionnalité',
          statement: 'Parmi ces situations, laquelle relève de la **proportionnalité** ?',
          hint1: 'Deux grandeurs sont proportionnelles si l\'on passe de l\'une à l\'autre en multipliant toujours par le même nombre.',
          hint2: 'Si l\'on double l\'une, l\'autre doit doubler aussi.',
          solution: `La situation proportionnelle est : ${correct}\nDans les autres situations, doubler une grandeur ne double pas l'autre.`,
          skill: 'Raisonner',
          _v: { k: '6P1.which', correct }
        });
        return this._6mcq(q, correct, this.shuffle(nonProps).slice(0, 3));
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
          hint2: `Offre A : $${this._6eurTexB(P1)} \\div ${n1}$ ; offre B : $${this._6eurTexB(P2)} \\div ${n2}$.`,
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
        hint2: `$${this._6tex(qty)} \\div ${p} = ${this._6tex(per)}$ g par personne.`,
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
      const convHint2 = "Dans le tableau de conversion, chaque unité vaut 10 fois l'unité située juste à sa droite : on décale la virgule d'un rang par colonne.";

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
          hint2: `Le périmètre est égal à $${sh.n} \\times ${c}$.`,
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
            hint2: `$${T(Lm)}\\text{ m} = ${T(this._6r(Lm * 100))}\\text{ cm}$.`,
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
            hint1: 'Le périmètre d\'un carré est égal à 4 fois la longueur de son côté.',
            hint2: `On cherche le nombre qui, multiplié par 4, donne ${X(P)}.`,
            solution: `$P = 4 \\times c$ donc $c = ${T(P)} \\div 4 = ${T(c)}\\text{ cm}$.`,
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
          hint2: `$${P} \\div 2 = ${P / 2}$, puis on retire la longueur.`,
          solution: `Demi-périmètre : $${P} \\div 2 = ${P / 2}\\text{ m}$.\nLargeur : $${P / 2} - ${L} = ${l}\\text{ m}$.`,
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
            hint2: isR ? `Le diamètre est le double du rayon : $D = 2 \\times ${r} = ${d}\\text{ cm}$.` : `Calcule $3{,}14 \\times ${d}$.`,
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
            hint2: isR ? `Le diamètre vaut $2 \\times ${r} = ${2 * r}${this._6mU(u)}$.` : `Ici $D = ${2 * r}${this._6mU(u)}$.`,
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
            hint2: `Le petit segment horizontal mesure $${W} - ${W - a} = ${a}\\text{ cm}$ et le côté droit $${H} - ${b} = ${H - b}\\text{ cm}$.`,
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
          hint2: `Effectue la division $${T(L)} \\div 3{,}14$.`,
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
          hint2: `Longueur $= 2 \\times ${L} + 3{,}14 \\times ${d}$.`,
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
          hint2: `Longueur du demi-cercle : $3{,}14 \\times ${c} \\div 2$.`,
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
          hint2: `Longueur de grillage : $2 \\times (${L} + ${l}) - ${g} = ${len}\\text{ m}$.`,
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
        hint2: `Un tour : $3{,}14 \\times ${d} = ${T(this._6r(3.14 * d))}\\text{ cm}$.`,
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
          hint2: `On ${to > from ? 'multiplie' : 'divise'} par $${T(Math.pow(100, k))}$ (${k} rang${k > 1 ? 's' : ''} de 100).`,
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
            hint2: `Calcule $${L} \\times ${l}$.`,
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
          hint2: `Calcule $${c} \\times ${c}$.`,
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
            hint2: `Calcule $${T(L)} \\times ${l}$.`,
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
            hint2: `Effectue la division $${Ar} \\div ${L}$.`,
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
          hint2: what === 'aire' ? `Aire : $${L} \\times ${l}$.` : `Périmètre : $2 \\times (${L} + ${l})$.`,
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
            hint2: `Aire $= ${W} \\times ${H} - ${a} \\times ${b}$.`,
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
            hint2: `$${W} \\times ${H} - ${w} \\times ${h}$.`,
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
          hint2: `$${T(Lm)}\\text{ m} = ${T(this._6r(Lm * 100))}\\text{ cm}$.`,
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
          hint2: `Aire $= ${a} \\times ${b} \\div 2$.`,
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
          hint2: `Aire à peindre : $${W * H} - ${T(this._6r(w * h))} = ${T(area)}\\text{ m}^2$. On ne peut acheter qu'un nombre entier de pots.`,
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
          hint2: `Périmètre : $2 \\times (${L} + ${l}) = ${2 * (L + l)}\\text{ cm}$ ; côté du carré : $${2 * (L + l)} \\div 4$.`,
          solution: `Périmètre commun : $${2 * (L + l)}\\text{ cm}$. Côté du carré : $${2 * (L + l)} \\div 4 = ${c}\\text{ cm}$.\n$$\\mathcal{A} = ${c} \\times ${c} = ${c * c}\\text{ cm}^2$$ (le rectangle n'a que $${L * l}\\text{ cm}^2$ !)`,
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
        hint1: `Combien de carreaux de ${c} cm peut-on aligner sur 1 m = 100 cm ?`,
        hint2: `Sur la longueur : $${L * 100} \\div ${c} = ${L * perM}$ carreaux ; sur la largeur : $${l * 100} \\div ${c} = ${l * perM}$ carreaux.`,
        solution: `Longueur : $${L * 100} \\div ${c} = ${L * perM}$ carreaux. Largeur : $${l * 100} \\div ${c} = ${l * perM}$ carreaux.\n$$${L * perM} \\times ${l * perM} = ${n}\\text{ carreaux}$$`,
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
          if (dec <= 3 && res < 1e7) break;
        }
        return mk({
          title: decimal ? 'Volumes et contenances (décimaux)' : 'Volumes et contenances',
          statement: `Compléter :\n$$${T(val)}${tex(from)} = \\dots${tex(to)}$$\n*(Rappel : $1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$ et $1\\text{ mL} = 1\\text{ cm}^3$.)*`,
          type: 'exact', answer: A(res),
          hint1: 'Utilise les égalités : 1 L = 1 dm³ = 1 000 cm³ = 1 000 mL ; 1 L = 100 cL ; 1 m³ = 1 000 L.',
          hint2: `Exprime d'abord ${X(val)} ${from} en cm³ : cela fait ${X(this._6r(val * V[from]))} cm³.`,
          solution: `$${T(val)}${tex(from)} = ${T(this._6r(val * V[from]))}\\text{ cm}^3 = ${T(res)}${tex(to)}$`,
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
          hint2: `Calcule $${c} \\times ${c} \\times ${c}$.`,
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
            hint2: `Calcule $${L} \\times ${l} \\times ${h}$.`,
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
          hint1: `L'aire de la base est $${L} \\times ${l} = ${L * l}\\text{ cm}^2$.`,
          hint2: `On cherche le nombre qui, multiplié par ${L * l}, donne ${Vol}.`,
          solution: `Base : $${L} \\times ${l} = ${L * l}\\text{ cm}^2$. Hauteur : $${Vol} \\div ${L * l} = ${h}\\text{ cm}$.`,
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
            hint2: `$${L} \\times ${l} \\times ${h} = ${T(L * l * h)}\\text{ cm}^3$.`,
            solution: `$$\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${T(L * l * h)}\\text{ cm}^3 = ${T(res)}\\text{ L}$$`,
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
            hint2: `Calcule d'abord $${l} \\times ${h} = ${l * h}$, puis multiplie par $${T(L)}$.`,
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
          hint2: `Pavé complet : $${a} \\times ${b} \\times ${c} = ${a * b * c}$ cubes.`,
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
          hint1: 'Calcule le volume en dm³ : 1 dm³ = 1 L.',
          hint2: `Volume : $${L} \\times ${l} \\times ${h} = ${Vol}\\text{ dm}^3 = ${Vol}\\text{ L}$.`,
          solution: `$\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${Vol}\\text{ dm}^3 = ${Vol}\\text{ L}$.\n$$${Vol} \\div ${d} = ${Vol / d}\\text{ min}$$`,
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
          hint2: `$${L} \\div ${s} = ${p}$, $${l} \\div ${s} = ${q2}$ et $${h} \\div ${s} = ${r}$.`,
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
        hint2: `$${T(Vl)}\\text{ L} = ${T(L * l * hh)}\\text{ cm}^3$ et l'aire du fond vaut $${T(L * l)}\\text{ cm}^2$.`,
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
            hint1: '1 h = 60 min.',
            hint2: `$${h} \\times 60 = ${h * 60}$ min, puis ajoute les minutes restantes.`,
            solution: `$$${h} \\times 60 + ${m} = ${h * 60} + ${m} = ${h * 60 + m}\\text{ min}$$`,
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
          hint1: '1 min = 60 s.',
          hint2: `$${m} \\times 60 = ${m * 60}$ s.`,
          solution: `$$${m} \\times 60 + ${s} = ${m * 60 + s}\\text{ s}$$`,
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
            hint2: `De ${Hr(s)} à ${Hr(Math.ceil(s / 60) * 60)}, il y a ${Math.ceil(s / 60) * 60 - s} min.`,
            solution: `Durée : ${Hr(s + d)} − ${Hr(s)} = ${D(d)}, soit **${d} min**.`,
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
            solution: `${Hr(s)} + ${D(d)} = **${correct}**.`,
            _v: { k: '6M4.end', s, d }
          }, 'Calculer');
          return this._6mcq(q, correct, [Hr(s + d + 40), Hr(s + d - 60), Hr(s + d + 60), Hr(s + d - 40)]);
        }
        const j = this.randInt(1, 6), h = this.randInt(1, 23);
        return mk({
          title: 'Jours et heures',
          statement: `Convertir **${j} jour${j > 1 ? 's' : ''} et ${h} h** en heures.`,
          type: 'exact', answer: String(24 * j + h), placeholder: 'Ex : 50',
          hint1: '1 jour = 24 h.',
          hint2: `$${j} \\times 24 = ${24 * j}$ h.`,
          solution: `$$${j} \\times 24 + ${h} = ${24 * j + h}\\text{ h}$$`,
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
            hint2: `De ${Hr(s)} à ${Hr(Math.ceil(s / 60) * 60)} : ${Math.ceil(s / 60) * 60 - s} min.`,
            solution: `De ${Hr(s)} à ${Hr(s + d)}, il s'écoule ${d} min, soit **${correct}**.`,
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
            solution: `${Hr(e)} − ${D(d)} = **${correct}**.`,
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
          hint2: '60 min = 1 h : convertis si le total des minutes dépasse 59.',
          solution: `${D(a)} + ${D(b)} = ${a + b} min = **${correct}**.`,
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
          hint1: '1 h = 3 600 s et 1 min = 60 s.',
          hint2: `$${h} \\times 3\\,600 = ${T(h * 3600)}$ et $${m} \\times 60 = ${m * 60}$.`,
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
          hint1: 'Après 23 h 59, on repasse à 0 h 00 : c\'est le lendemain.',
          hint2: `De ${Hr(s)} à minuit, il y a ${1440 - s} min.`,
          solution: `${Hr(s)} + ${D(d)} : l'arrivée est à **${correct}**.`,
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
          hint2: `$${T(frac)}\\text{ h} = ${T(frac)} \\times 60\\text{ min} = ${T(this._6r(frac * 60))}\\text{ min}$.`,
          solution: `$$${T(val)} \\times 60 = ${T(res)}\\text{ min}$$`,
          _v: { k: '6M4.dech', val }
        }, 'Convertir');
      }
      const h = this.randInt(0, 5), m = this.randChoice([6, 12, 15, 18, 24, 30, 36, 42, 45, 48, 54]);
      const res = this._6r(h + m / 60);
      return mk({
        title: 'Écrire une durée en heures décimales',
        statement: `Écrire la durée **${h === 0 ? '' : `${h} h `}${m} min** en heures, sous forme d'un nombre décimal.`,
        type: 'exact', answer: A(res), placeholder: 'Ex : 1,5',
        hint1: `${m} min représente $\\frac{${m}}{60}$ d'heure.`,
        hint2: `$${m} \\div 60 = ${T(this._6r(m / 60))}$.`,
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
            hint2: `Divise le diamètre par 2 : $${W(d)} \\div 2$.`,
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
            hint1: 'Le diamètre est le double du rayon.',
            hint2: `Calcule $2 \\times ${W(r)}$.`,
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
          hint1: 'Le milieu partage le segment en deux segments de même longueur.',
          hint2: `$${P}${I} = ${P}${Q} \\div 2$.`,
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
            hint1: `$${M}$ est le milieu : $${M}${F} = ${E}${M}$.`,
            hint2: `$${E}${F} = ${E}${M} + ${M}${F}$.`,
            solution: `$${E}${F} = 2 \\times ${E}${M} = 2 \\times ${W(a)} = ${W(2 * a)}$ cm.`,
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
            hint2: `Calcule $${W(a)} + ${W(b)}$.`,
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
            hint2: `Calcule $${W(c)} - ${W(a)}$.`,
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
          hint1: `Commence par $${P}${Q} = ${c} \\div 2 = ${c / 2}$ cm.`,
          hint2: `Puis $${P}${I} = ${I}${Q} = ${c / 2} \\div 2 = ${c / 4}$ cm.`,
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
          hint1: `Repère chaque point par sa distance à $${Pa}$ : $${Pa}${Pm} = ${L / 2}$ cm.`,
          hint2: `$${Pa}${Pn} = ${L / 2} + ${L / 4} = ${3 * L / 4}$ cm et $${Pa}${Pp} = ${3 * L / 4} \\div 2 = ${3 * L / 8}$ cm.`,
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
          hint2: `Calcule $${W(d)} - ${W(r1)}$.`,
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
            hint1: 'Tout point de la médiatrice d’un segment est à égale distance des extrémités du segment.',
            hint2: `$${M}${Q} = ${M}${P}$.`,
            solution: `$${M}$ est sur la médiatrice de $[${P}${Q}]$ donc $${M}${Q} = ${M}${P} = ${W(x)}$ cm.`,
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
            hint1: 'La symétrie axiale est un « pliage » : la figure et son image se superposent.',
            hint2: 'Elle conserve les longueurs, les angles et les aires.',
            solution: `${txt.w} sont ${kind === 1 ? 'conservés' : 'conservées'} par symétrie axiale : la mesure cherchée est $${W(x)}$.`,
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
        const pool = ['aucun', '1', '2', '3', '4', '6', 'une infinité'].filter(o => o !== correct);
        return this._6E_mcq(ch, t, {
          title: 'Axes de symétrie des figures usuelles',
          statement: `**Combien d'axes de symétrie possède ${figs[idx][0]} ?**`,
          hint1: 'Un axe de symétrie est une droite de pliage pour laquelle les deux parties se superposent exactement.',
          hint2: 'Pense aux diagonales et aux médiatrices des côtés.',
          solution: `${figs[idx][0].charAt(0).toUpperCase() + figs[idx][0].slice(1)} possède **${correct}** axe${correct === '1' ? '' : 's'} de symétrie.`,
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
        const [P] = this._6E_pts(1);
        const kind = this.randInt(0, 1);
        if (kind === 0) {
          const correct = `le point $${P}$ lui-même`;
          return this._6E_mcq(ch, t, {
            title: 'Point situé sur l’axe',
            statement: `Le point $${P}$ appartient à l'axe de symétrie $(d)$. **Quel est le symétrique de $${P}$ par rapport à $(d)$ ?**`,
            hint1: 'Quand on plie le long de l’axe, que devient un point situé sur la ligne de pliage ?',
            hint2: 'Un point de l’axe ne bouge pas.',
            solution: `Un point de l'axe est son propre symétrique : c'est **${correct}**.`,
            _v: { k: '6G2.axe', kind, P }
          }, correct, ['il n’a pas de symétrique', `un point de $(d)$ différent de $${P}$`, `un point situé à $1$ cm de $${P}$`]);
        }
        const correct = `la médiatrice du segment $[${P}${P}']$`;
        return this._6E_mcq(ch, t, {
          title: 'Axe de symétrie et médiatrice',
          statement: `Le point $${P}'$ est le symétrique du point $${P}$ par rapport à la droite $(d)$, et $${P}$ n'est pas sur $(d)$. **Que représente la droite $(d)$ pour le segment $[${P}${P}']$ ?**`,
          hint1: `$(d)$ coupe $[${P}${P}']$ perpendiculairement…`,
          hint2: '… et en son milieu.',
          solution: `Par définition du symétrique, $(d)$ est **${correct}**.`,
          _v: { k: '6G2.axe', kind, P }
        }, correct, [`une droite parallèle à $(${P}${P}')$`, `la droite $(${P}${P}')$ elle-même`, `une droite passant par $${P}$`]);
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
            hint1: 'Aigu : entre 0° et 90°. Droit : 90°. Obtus : entre 90° et 180°. Plat : 180°.',
            hint2: `Compare $${x}^\\circ$ à $90^\\circ$ et à $180^\\circ$.`,
            solution: `Un angle de $${x}^\\circ$ est **${correct}**.`,
            skill: 'Communiquer',
            _v: { k: '6G3.nature', x }
          }, correct, opts.filter(o => o !== correct));
        }
        const [P, O, Q, Z] = this._6E_pts(4);
        if (sub === 'sommet') {
          return this._6E_mcq(ch, t, {
            title: 'Sommet d’un angle',
            statement: `**Quel est le sommet de l'angle $${ang(P, O, Q)}$ ?**`,
            hint1: 'Dans la notation d’un angle, le sommet est la lettre du milieu, sous le chapeau.',
            hint2: `Lis les trois lettres : $${P}$, $${O}$, $${Q}$.`,
            solution: `Le sommet est la lettre du milieu : **le point $${O}$**. Les côtés sont $[${O}${P})$ et $[${O}${Q})$.`,
            skill: 'Représenter',
            _v: { k: '6G3.sommet', O }
          }, `le point $${O}$`, [`le point $${P}$`, `le point $${Q}$`, `le point $${Z}$`]);
        }
        return this._6E_mcq(ch, t, {
          title: 'Côtés d’un angle',
          statement: `**Quels sont les côtés de l'angle $${ang(P, O, Q)}$ ?**`,
          hint1: 'Les côtés d’un angle sont deux demi-droites de même origine : le sommet.',
          hint2: `Le sommet est $${O}$.`,
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
            hint1: 'Deux angles supplémentaires ont une somme de 180°.',
            hint2: `Calcule $180 - ${x}$.`,
            solution: `$180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$.`,
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
            hint1: `$${ang(P, O, Q)}$ est un angle plat : il mesure 180°.`,
            hint2: `$${ang(P, O, R)}$ et $${ang(R, O, Q)}$ sont adjacents et supplémentaires.`,
            solution: `$${ang(R, O, Q)} = 180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$.`,
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
            hint1: 'Deux angles adjacents ont le même sommet, un côté commun et sont situés de part et d’autre de ce côté.',
            hint2: `$${ang(P, O, R)} = ${ang(P, O, Q)} + ${ang(Q, O, R)}$.`,
            solution: `$${ang(P, O, R)} = ${a}^\\circ + ${b}^\\circ = ${a + b}^\\circ$.`,
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
          solution: `Les angles $${ang(P, O, R)}$ et $${ang(Q, O, S)}$ sont opposés par le sommet, donc $${ang(Q, O, S)} = ${x}^\\circ$.`,
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
            hint1: 'La bissectrice partage un angle en deux angles adjacents de même mesure.',
            hint2: `Calcule $${x} \\div 2$.`,
            solution: `$${ang(P, O, M)} = ${x}^\\circ \\div 2 = ${W(x / 2)}^\\circ$.`,
            _v: { k: '6G3.half', x }
          });
        }
        if (sub === 'biss_inv') {
          const y = this.randInt(10, 89);
          return this._6E_q(ch, t, {
            title: 'Retrouver un angle à partir de sa bissectrice',
            statement: `La demi-droite $[${O}${M})$ est la bissectrice de l'angle $${ang(P, O, Q)}$ et $${ang(M, O, Q)} = ${y}^\\circ$. **Combien mesure l'angle $${ang(P, O, Q)}$, en degrés ?**`,
            type: 'exact', answer: A(2 * y),
            hint1: `$${ang(P, O, M)} = ${ang(M, O, Q)}$.`,
            hint2: `$${ang(P, O, Q)} = 2 \\times ${ang(M, O, Q)}$.`,
            solution: `$${ang(P, O, Q)} = 2 \\times ${y}^\\circ = ${2 * y}^\\circ$.`,
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
          hint1: 'Un tour complet (angle plein) mesure 360°.',
          hint2: `Calcule $360 - ${a} - ${b}$.`,
          solution: `$${ang(R, O, P)} = 360^\\circ - ${a}^\\circ - ${b}^\\circ = ${360 - a - b}^\\circ$.`,
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
        hint1: 'Entre deux nombres consécutifs du cadran, il y a $360^\\circ \\div 12 = 30^\\circ$.',
        hint2: half ? "En 30 minutes, la petite aiguille parcourt la moitié de l'écart entre deux nombres, soit 15°." : "La grande aiguille est sur le 12.",
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
            hint1: 'Dans un triangle, la somme des trois angles est égale à 180°.',
            hint2: `$${hat(R)} = 180^\\circ - ${a}^\\circ - ${b}^\\circ$.`,
            solution: `$${hat(R)} = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = 180^\\circ - ${a + b}^\\circ = ${180 - a - b}^\\circ$.`,
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
          hint1: 'Un triangle équilatéral a ses trois côtés de même longueur.',
          hint2: `Périmètre $= 3 \\times ${W(c)}$.`,
          solution: `Périmètre $= 3 \\times ${W(c)} = ${W(this._6r(3 * c))}$ cm.`,
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
            hint1: `L'angle droit $${hat(P)}$ mesure $90^\\circ$.`,
            hint2: `$${hat(R)} = 180^\\circ - 90^\\circ - ${x}^\\circ$.`,
            solution: `$${hat(R)} = 180^\\circ - 90^\\circ - ${x}^\\circ = ${90 - x}^\\circ$.`,
            _v: { k: '6G4.sub', tot: 180, parts: [90, x] }
          });
        }
        if (sub === 'iso_base') {
          const x = 2 * this.randInt(10, 80);
          return this._6E_q(ch, t, {
            title: 'Triangle isocèle : angles à la base',
            statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$ et $${hat(P)} = ${x}^\\circ$. **Calcule la mesure de l'angle $${hat(Q)}$, en degrés.**`,
            type: 'exact', answer: A((180 - x) / 2),
            hint1: 'Dans un triangle isocèle, les deux angles à la base ont la même mesure.',
            hint2: `$${hat(Q)} = ${hat(R)} = (180^\\circ - ${x}^\\circ) \\div 2$.`,
            solution: `$${hat(Q)} + ${hat(R)} = 180^\\circ - ${x}^\\circ = ${180 - x}^\\circ$ et ces deux angles sont égaux : $${hat(Q)} = ${180 - x}^\\circ \\div 2 = ${(180 - x) / 2}^\\circ$.`,
            _v: { k: '6G4.isobase', x }
          });
        }
        const x = this.randInt(20, 85);
        return this._6E_q(ch, t, {
          title: 'Triangle isocèle : angle au sommet principal',
          statement: `Le triangle $${P}${Q}${R}$ est isocèle en $${P}$ et $${hat(Q)} = ${x}^\\circ$. **Calcule la mesure de l'angle $${hat(P)}$, en degrés.**`,
          type: 'exact', answer: A(180 - 2 * x),
          hint1: `Isocèle en $${P}$ : $${hat(R)} = ${hat(Q)}$.`,
          hint2: `$${hat(P)} = 180^\\circ - 2 \\times ${x}^\\circ$.`,
          solution: `$${hat(R)} = ${hat(Q)} = ${x}^\\circ$, donc $${hat(P)} = 180^\\circ - ${2 * x}^\\circ = ${180 - 2 * x}^\\circ$.`,
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
            hint1: `Isocèle en $${P}$ : $${P}${R} = ${P}${Q} = ${x}$ cm.`,
            hint2: `$${Q}${R} = ${per} - 2 \\times ${x}$.`,
            solution: `$${P}${R} = ${P}${Q} = ${x}$ cm, donc $${Q}${R} = ${per} - ${x} - ${x} = ${b}$ cm.`,
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
            hint1: 'Compte les cubes d’une couche, puis le nombre de couches.',
            hint2: `Une couche contient $${a} \\times ${b}$ cubes.`,
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
          hint1: 'Un cube et un pavé droit ont le même nombre de faces, d’arêtes et de sommets.',
          hint2: '6 faces rectangulaires, 12 arêtes, 8 sommets.',
          solution: `Un ${o[1]} possède 6 faces, 12 arêtes et 8 sommets : la réponse est **${val}**.`,
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
          hint1: `Une arête contient $${n}$ petits cubes.`,
          hint2: ask === 0 ? `Une couche contient $${n} \\times ${n}$ cubes, et il y a $${n}$ couches.` : `Une face est un carré de $${n}$ sur $${n}$.`,
          solution: ask === 0 ? `$${n} \\times ${n} \\times ${n} = ${n * n * n}$ petits cubes.` : `$${n} \\times ${n} = ${n * n}$ petits cubes sur une face.`,
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
          hint1: 'Un pavé droit a 12 arêtes, réparties en 3 groupes de 4 arêtes de même longueur.',
          hint2: `Longueur totale $= 4 \\times ${L} + 4 \\times ${l} + 4 \\times ${hh}$.`,
          solution: `$4 \\times (${L} + ${l} + ${hh}) = 4 \\times ${L + l + hh} = ${4 * (L + l + hh)}$ cm.`,
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
        hint1: kind === 0 ? 'Les cubes sans peinture forment un pavé intérieur : on retire une couche de chaque côté.' : kind === 1 ? 'Les cubes avec une seule face peinte sont au centre des faces (hors bords).' : 'Les cubes avec deux faces peintes sont sur les arêtes, sans compter les coins.',
        hint2: kind === 0 ? `Le pavé intérieur mesure $${a} - 2$ sur $${b} - 2$ sur $${c} - 2$.` : kind === 1 ? 'Chaque face donne un rectangle intérieur ; il y a 6 faces, deux à deux identiques.' : 'Une arête de longueur $n$ cubes contient $n - 2$ cubes hors coins ; il y a 4 arêtes de chaque longueur.',
        solution: kind === 0 ? `Pavé intérieur : $${a - 2} \\times ${b - 2} \\times ${c - 2} = ${val}$ cubes.`
          : kind === 1 ? `$2 \\times (${a - 2} \\times ${b - 2} + ${b - 2} \\times ${c - 2} + ${a - 2} \\times ${c - 2}) = ${val}$ cubes.`
            : `$4 \\times (${a - 2} + ${b - 2} + ${c - 2}) = ${val}$ cubes.`,
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
            solution: `Dans la colonne « ${cats[i]} », on lit l'effectif $${vals[i]}$.`,
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
          solution: `$$${vals.join(' + ')} = ${tot}$$\nL'effectif total est $${tot}$.`,
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
            hint2: `L'axe vertical est gradué de $${step}$ en $${step}$.`,
            solution: `Le haut de la barre « ${cats[i]} » est au niveau de la graduation $${vals[i]}$ : l'effectif est $${vals[i]}$.`,
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
            hint2: `Calcule $${vals[a]} - ${vals[b]}$.`,
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
          hint1: "Moyenne = (somme des valeurs) ÷ (nombre de valeurs).",
          hint2: `La somme vaut $${sum}$ et il y a $${k}$ valeurs.`,
          solution: `$$\\text{Moyenne} = \\frac{${vals.join(' + ')}}{${k}} = \\frac{${sum}}{${k}} = ${this._6tex(mean)}$$`,
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
          hint2: `$${tot} \\times ${100 / tot} = 100$.`,
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
            hint2: "Impossible : aucune boule ne convient. Certain : toutes les boules conviennent.",
            solution: fav === 0 ? "Aucune boule de l'urne ne convient : l'événement est **impossible**." : fav === tot ? "Toutes les boules de l'urne conviennent : l'événement est **certain**." : `$${fav}$ boules sur $${tot}$ conviennent : l'événement est **possible** sans être certain.`,
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
          const q = base("Une probabilité est comprise entre 0 et 1", {
            statement: "Parmi les nombres suivants, **lequel peut être la probabilité d'un événement ?**",
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
            hint1: "Probabilité = (nombre d'issues favorables) ÷ (nombre total d'issues).",
            hint2: `Il y a $${tot}$ boules en tout, dont $${k}$ de la bonne couleur.`,
            solution: `$$P = \\frac{${k}}{${tot}}${this.gcd(k, tot) > 1 ? ` = ${this.formatFraction(k, tot)}` : ''}$$`,
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
            hint2: `Il y a $${tot}$ boules en tout.`,
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
          hint1: `Il y a autant de cartons que de lettres dans le mot : $${w.length}$.`,
          hint2: "Compte les cartons favorables, en n'oubliant pas les lettres répétées.",
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
          hint1: "Fréquence = effectif observé ÷ nombre total de lancers.",
          hint2: `Calcule $${c} \\div ${N}$.`,
          solution: `$$f = \\frac{${c}}{${N}} = ${this._6tex(f)}$$`,
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
          hint1: `La probabilité de tirer une bleue doit alors être $\\frac{${qd - p}}{${qd}}$.`,
          hint2: `Les ${b} boules bleues doivent représenter $${qd - p}$ part${qd - p > 1 ? 's' : ''} sur $${qd}$ : une part vaut $${m}$ boule${m > 1 ? 's' : ''}.`,
          solution: `Il faut $${p} \\times ${m} = ${r + x}$ boules rouges pour $${b}$ bleues (total $${r + x + b}$, et $\\frac{${r + x}}{${r + x + b}} = \\frac{${p}}{${qd}}$).\nOn doit ajouter $${r + x} - ${r} = ${x}$ boules rouges.`,
          _v: { k: '6D2.ajout', r, b, p, q: qd }
        });
      }
      // freqProba : quel résultat de simulation est le plus cohérent avec la probabilité ?
      const N = this.randChoice([60, 120, 300, 600]);
      const n = this.randChoice([2, 3, 4, 6]);
      const exp = N / n;
      const good = exp + this.randInt(-Math.floor(exp * 0.06), Math.floor(exp * 0.06));
      const bad = this.shuffle([Math.round(exp * 0.4), Math.round(exp * 1.8), Math.round(exp * 2.6), Math.round(exp * 0.15) + 1]).slice(0, 3);
      const objTxt = { 2: 'une pièce équilibrée (Pile ou Face) et on compte les « Pile »', 3: 'une roue équilibrée à 3 secteurs identiques (rouge, vert, bleu) et on compte les « rouge »', 4: 'un dé équilibré à 4 faces et on compte les « 4 »', 6: 'un dé équilibré à 6 faces et on compte les « 6 »' }[n];
      const opts = bad.map(String);
      const q = base("Fréquence observée et probabilité", {
        statement: `On lance ${N} fois ${objTxt}.\n**Lequel de ces nombres de succès est le plus vraisemblable ?**`,
        hint1: `La probabilité d'un succès est $\\frac{1}{${n}}$.`,
        hint2: `Sur un grand nombre d'essais, la fréquence observée se rapproche de la probabilité : on attend environ $${N} \\div ${n} = ${exp}$ succès.`,
        solution: `On attend environ $\\frac{1}{${n}} \\times ${N} = ${exp}$ succès. Le nombre le plus proche est $${good}$.`,
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
            hint2: `Calcule $${xx} ${sym} ${a}$.`,
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
            hint2: `Calcule $${P[0]} \\times ${d}$.`,
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
          hint2: `Calcule $${s0} + ${k} \\times ${a}$.`,
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
            hint2: `Première étape : ${steps[0]}.`,
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
        return base("Instruction conditionnelle", {
          statement: `Voici un algorithme :\n\n- Choisir un nombre N.\n- **Si** N est strictement ${mode === 'sup' ? 'supérieur' : 'inférieur'} à ${s}, **alors** multiplier N par ${b} ;\n- **sinon**, ajouter ${a} à N.\n- Afficher N.\n\n**Quel nombre est affiché si l'on choisit N = $${x}$ ?**`,
          type: 'exact', answer: String(res), placeholder: 'Ex : 24',
          hint1: `Teste d'abord la condition : $${x}$ est-il strictement ${mode === 'sup' ? 'supérieur' : 'inférieur'} à $${s}$ ?`,
          hint2: "Une seule des deux branches (alors / sinon) est exécutée.",
          solution: cond
            ? `La condition est vraie, donc N devient $${x} \\times ${b} = ${res}$.`
            : `La condition est fausse, donc N devient $${x} + ${a} = ${res}$.`,
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
          solution: `$$360^\\circ \\div ${P[0]} = ${360 / P[0]}^\\circ$$`,
          _v: { k: '6A1.angle', n: P[0] }
        });
      }
      if (sub === 'imbrique') {
        const k1 = this.randInt(2, 5), k2 = this.randInt(2, 4), d = this.randChoice([5, 10, 15, 20, 25]), e = this.randInt(0, 1) ? this.randChoice([10, 20, 30]) : 0;
        const total = k1 * (k2 * d + e);
        return base("Boucles imbriquées", {
          statement: `Un lutin exécute l'algorithme suivant :\n\n- **Répéter ${k1} fois :**\n  - **Répéter ${k2} fois :** avancer de ${d} pas ;\n  ${e ? `- avancer de ${e} pas ;\n  ` : ''}- tourner de 90 degrés.\n\n**Combien de pas le lutin a-t-il parcourus au total ?**`,
          type: 'exact', answer: String(total), placeholder: 'Ex : 120',
          hint1: `Calcule d'abord la distance parcourue pendant UNE répétition de la grande boucle.`,
          hint2: `Une répétition : $${k2} \\times ${d}${e ? ` + ${e}` : ''} = ${k2 * d + e}$ pas.`,
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
