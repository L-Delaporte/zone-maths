/**
 * Cœur des générateurs procéduraux — L'Établi des Maths
 *
 * Chargé au démarrage pour TOUS les niveaux (index.html) : il définit window.MathsGenerators
 * avec l'aiguillage (generate, generateForChapter, generateSeries), le mélange des QCM
 * (shuffleMcq), l'anti-répétition des énoncés et les utilitaires communs (randInt, fractions,
 * filet typographique _polishQuestion, renderScratch…).
 *
 * Les générateurs proprement dits sont chargés à la demande avec les données du niveau
 * (<script id="level-bundles"> + js/dataLoader.js) et s'ajoutent à cet objet :
 *  - js/randomGenerators.js : collège 5e, 4e, 3e ;
 *  - js/generators6e.js     : 6e ;
 *  - js/advancedGenerators.js + js/lyceeGenerators.js : lycée, Licence, CAPES
 *    (window.MathsAdvancedGenerators, appelé par le repli de generateForChapter).
 */

window.MathsGenerators = {
  _recentGeneratedStatements: {},
  _recentStorageKey: 'maths_recent_rituel_statements_v2',

  _getRecentHistory(chapterId) {
    if (!this._recentGeneratedStatements) this._recentGeneratedStatements = {};
    if (!this._recentGeneratedStatements[chapterId]) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const raw = window.localStorage.getItem(this._recentStorageKey);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
              this._recentGeneratedStatements = parsed;
            }
          }
        }
      } catch (e) {}
      if (!this._recentGeneratedStatements[chapterId]) {
        this._recentGeneratedStatements[chapterId] = [];
      }
    }
    return this._recentGeneratedStatements[chapterId] || [];
  },

  _saveRecentStatement(chapterId, statement) {
    if (!statement) return;
    const list = this._getRecentHistory(chapterId);
    if (!list.includes(statement)) {
      list.push(statement);
      if (list.length > 50) list.shift();
      this._recentGeneratedStatements[chapterId] = list;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(this._recentStorageKey, JSON.stringify(this._recentGeneratedStatements));
        }
      } catch (e) {}
    }
  },

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
    // Permet d'appeler avec un tableau : formatPoly([a, b]) pour ax + b, formatPoly([a, b, c]) pour ax^2 + bx + c,
    // ou avec n'importe quel degré formatPoly([c_n, ..., c_0]), ou encore formatPoly(a, b) / formatPoly(a, b, c).
    let coeffs;
    if (Array.isArray(a)) {
      coeffs = a;
    } else if (c === undefined && b !== undefined) {
      coeffs = [a, b];
    } else {
      coeffs = [a || 0, b || 0, c || 0];
    }

    const n = coeffs.length;
    const parts = [];

    for (let i = 0; i < n; i++) {
      const coeff = coeffs[i];
      if (coeff === 0) continue;
      const power = n - 1 - i;

      let varStr = '';
      if (power === 1) varStr = 'x';
      else if (power > 1) varStr = `x^${power}`;

      if (parts.length === 0) {
        if (power === 0) {
          parts.push(String(coeff));
        } else if (coeff === 1) {
          parts.push(varStr);
        } else if (coeff === -1) {
          parts.push(`-${varStr}`);
        } else {
          parts.push(`${coeff}${varStr}`);
        }
      } else {
        const sign = coeff > 0 ? '+ ' : '- ';
        const absVal = Math.abs(coeff);
        if (power === 0) {
          parts.push(`${sign}${absVal}`);
        } else if (absVal === 1) {
          parts.push(`${sign}${varStr}`);
        } else {
          parts.push(`${sign}${absVal}${varStr}`);
        }
      }
    }

    return parts.length ? parts.join(' ') : '0';
  },

  /**
   * Coefficient devant une lettre en tête d'expression : 1 → "", -1 → "-", 3 → "3".
   * (formatCoef(1) + 'x' = "x", formatCoef(-1) + 'x' = "-x")
   */
  formatCoef(a) {
    if (a === 1) return '';
    if (a === -1) return '-';
    return this.formatDecimal(a);
  },

  /**
   * Arrondit un flottant pour supprimer le bruit binaire (0.1 + 0.2 → 0.3).
   */
  roundNum(x, digits = 10) {
    if (!Number.isFinite(x)) return x;
    return +(+x).toFixed(digits);
  },

  /**
   * Écriture décimale française : virgule en LaTeX (`{,}`) ou en texte (`,`).
   * formatDecimal(2.5) → "2{,}5" ; formatDecimal(2.5, { text: true }) → "2,5" ;
   * maxDecimals arrondit (sans zéros inutiles).
   */
  formatDecimal(x, opts = {}) {
    const { text = false, maxDecimals = 10 } = opts;
    if (typeof x === 'string') x = parseFloat(x.replace(',', '.'));
    if (!Number.isFinite(x)) return String(x);
    const v = +x.toFixed(maxDecimals);
    const s = String(Object.is(v, -0) ? 0 : v);
    if (/e/i.test(s)) return s;
    return s.replace('.', text ? ',' : '{,}');
  },

  /**
   * Résultat d'une division pour un calcul affiché : "= 2{,}5" si le quotient est décimal exact
   * (au plus `dec` décimales), sinon "\\approx 2{,}33" (arrondi au centième par défaut).
   */
  eqOrApprox(num, den, dec = 2) {
    const v = num / den;
    const r = this.roundNum(v, dec);
    return Math.abs(r - v) < 1e-9 ? `= ${this.formatDecimal(r)}` : `\\approx ${this.formatDecimal(r)}`;
  },

  /**
   * Entier avec séparateur de milliers LaTeX : 40000 → "40\\,000".
   */
  formatThousands(n) {
    const sign = n < 0 ? '-' : '';
    return sign + String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  },

  /**
   * Réponse attendue (saisie élève) pour une fraction : forme irréductible "n/d" ou entier "n".
   */
  fracAnswer(num, den) {
    const [n, d] = this.simplifyFraction(num, den);
    return d === 1 ? `${n}` : `${n}/${d}`;
  },

  /**
   * Filet de sécurité typographique appliqué à toutes les questions générées :
   *  - dans les formules ($…$) : "+ -3" → "- 3", "- -3" → "+ 3", "1x" → "x", "x^1" → "x", "2.5" → "2{,}5" ;
   *  - dans le texte : "2.5" → "2,5" (les balises HTML/SVG ne sont pas modifiées).
   * Le champ `answer` des questions à saisie n'est pas converti en virgule (le validateur accepte les deux).
   */
  _polishMath(tex) {
    let s = tex;
    // Signes consécutifs (hors flèches "-->")
    s = s.replace(/\+\s*-\s*(?!>)/g, '- ').replace(/-\s*-\s*(?!>)/g, '+ ').replace(/\+\s*\+\s*/g, '+ ').replace(/-\s*\+\s*/g, '- ');
    // Coefficient 1 devant une variable
    s = s.replace(/(^|[\s(\[=+\-])1([xyn])(?![a-zA-Z])/g, '$1$2');
    // Exposant 1 sur une lettre
    s = s.replace(/([a-zA-Z])\^\{1\}(?![\d])/g, '$1').replace(/([a-zA-Z])\^1(?![\d{])/g, '$1');
    // Point décimal → virgule française
    s = s.replace(/(\d)\.(\d)/g, '$1{,}$2');
    return s;
  },

  _polishText(str) {
    if (typeof str !== 'string' || !str) return str;
    const re = /(<svg[\s\S]*?<\/svg>)|(<[^>]*>|```[\s\S]*?```|`[^`\n]*`)|(\$\$[\s\S]*?\$\$)|(\$[^$]*?\$)/g;
    let out = '';
    let last = 0;
    let m;
    const fixText = (t) => t.replace(/(\d)\.(\d)/g, '$1,$2');
    while ((m = re.exec(str))) {
      out += fixText(str.slice(last, m.index));
      if (m[1]) {
        // SVG : on ne corrige que les nœuds texte
        out += m[1].replace(/>([^<]*)</g, (mm, txt) => '>' + fixText(txt) + '<');
      } else if (m[2]) {
        // balise HTML ou bloc de code (Python…) : inchangé
        out += m[2];
      } else if (m[3]) {
        out += '$$' + this._polishMath(m[3].slice(2, -2)) + '$$';
      } else {
        out += '$' + this._polishMath(m[4].slice(1, -1)) + '$';
      }
      last = m.index + m[0].length;
    }
    out += fixText(str.slice(last));
    return out;
  },

  _polishQuestion(q) {
    if (!q || typeof q !== 'object') return q;
    for (const f of ['statement', 'solution', 'hint1', 'hint2', 'hint3', 'title']) {
      if (typeof q[f] === 'string') q[f] = this._polishText(q[f]);
    }
    if (Array.isArray(q.hints)) q.hints = q.hints.map(h => this._polishText(h));
    if (Array.isArray(q.explanations)) q.explanations = q.explanations.map(e => this._polishText(e));
    if (Array.isArray(q.options)) {
      const ans = q.answer;
      const ci = (q.correctIndex !== undefined) ? q.correctIndex : q.options.indexOf(ans);
      q.options = q.options.map(o => this._polishText(o));
      if (q.choices) q.choices = q.options;
      if (q.type === 'mcq' && ci >= 0 && ans !== undefined) q.answer = q.options[ci];
    } else if (typeof q.answer === 'string' && q.answer.includes('$')) {
      q.answer = this._polishText(q.answer);
    }
    return q;
  },

  resolveTier(tier) {
    const t = parseInt(tier, 10);
    return (t >= 1 && t <= 4) ? t : 1;
  },

  renderScratch(lines) {
    const sr = (typeof window !== 'undefined' && window.ScratchRenderer) || (typeof ScratchRenderer !== 'undefined' ? ScratchRenderer : null);
    if (sr && typeof sr.renderScript === 'function') {
      return sr.renderScript(lines);
    }
    return `\`\`\`text\n${lines.join('\n')}\n\`\`\``;
  },

  /**
   * Chapitres du collège servis par js/randomGenerators.js (generate<id>), dans l'ordre de l'ancien aiguillage.
   */
  COLLEGE_CHAPTERS: [
    '5N1', '5N2', '5N3', '5N4', '5N5', '5G1', '5G2', '5G3', '5G4', '5G5', '5G6', '5D1', '5D2', '5P1', '5P2', '5A1',
    '4N1', '4N2', '4N3', '4N4', '4N5', '4G1', '4G2', '4G3', '4G4', '4D1', '4D2', '4P1', '4P2', '4A1',
    'N1', 'N2', 'N2bis', 'N3', 'N4', 'N5', 'G0', 'G1', 'G2', 'G2bis', 'G3', 'G4', 'G5', 'G6', 'G7', 'Org1', 'Org2', 'Org3', 'Org4', 'Algo'
  ],

  /**
   * Point d'entrée principal pour générer un exercice adapté
   * @param {string} chapterId - Identifiant du chapitre (ex: 'N1', 'G0', '4N1', '5N1', etc.)
   * @param {number|null} tier - Palier de difficulté forcé (1 à 4) ou null pour auto-détection
   * @param {number|null} mastery - Taux de maîtrise (0-100%) si disponible
   */
  /**
   * Alias utilisé par js/diaporamaEngine.js (mode différencié) : MathsGenerators.generate(chapitre, palier).
   */
  generate(chapterId, tier = null) {
    return this.generateForChapter(chapterId, tier);
  },

  generateForChapter(chapterId, tier = null, mastery = null, _variationAttempt = 0) {
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
    // Chapitres du collège (5e, 4e, 3e) : générateurs de js/randomGenerators.js, chargé à la demande
    // avec ces niveaux et déjà passés par le filet _polishQuestion lors de leur enregistrement.
    const collegeGen = this.COLLEGE_CHAPTERS.includes(chapterId) ? this['generate' + chapterId] : null;
    switch (typeof collegeGen === 'function' ? 'college' : 'other') {
      case 'college': q = collegeGen.call(this, resolvedTier, mastery); break;

      default: {
        // 0. Repli générique : générateur nommé generate<chapterId> (ex. generate6N1 ajouté par js/generators6e.js
        //    via Object.assign(window.MathsGenerators, {...})).
        const dynName = 'generate' + chapterId;
        if (chapterId && chapterId !== 'ForChapter' && chapterId !== 'Series' && typeof this[dynName] === 'function') {
          const dyn = this._polishQuestion(this[dynName](resolvedTier, mastery));
          if (dyn) {
            q = dyn;
            break;
          }
        }

        // 1. Tenter d'abord la génération procédurale avancée (Licence / Lycée)
        if (typeof window !== 'undefined' && window.MathsAdvancedGenerators && typeof window.MathsAdvancedGenerators.generate === 'function') {
          const adv = window.MathsAdvancedGenerators.generate(chapterId, resolvedTier);
          if (adv) {
            q = adv;
            break;
          }
        }

        // 2. Sinon, puiser dans la banque d'exercices avec mutation dynamique des paramètres
        const capesExos = (typeof window !== 'undefined' && window.CAPES_EXERCISES && window.CAPES_EXERCISES[chapterId]) ? window.CAPES_EXERCISES[chapterId] : null;
        const proofExos = (typeof window !== 'undefined' && window.PROOF_EXERCISES && window.PROOF_EXERCISES[chapterId]) ? window.PROOF_EXERCISES[chapterId] : null;
        const exos = ((typeof window !== 'undefined' && window.MATHS_EXERCISES && window.MATHS_EXERCISES[chapterId]) ? window.MATHS_EXERCISES[chapterId] : null) || capesExos || proofExos || [];
        if (exos.length) {
          const matchingTierExos = exos.filter(e => e.tier === resolvedTier);
          const pool = matchingTierExos.length > 0 ? matchingTierExos : exos;
          const base = this.randChoice(pool);
          if (typeof window !== 'undefined' && window.MathsAdvancedGenerators && typeof window.MathsAdvancedGenerators.mutateExercise === 'function') {
            q = window.MathsAdvancedGenerators.mutateExercise(base, resolvedTier);
          } else {
            q = JSON.parse(JSON.stringify(base));
            q.id = `${base.id}-dyn-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
          }
        } else {
          // Si c'est un chapitre de CAPES, de Preuves ou d'études supérieures, ne JAMAIS tomber dans generateN1 (calculs de 5e) !
          if (chapterId.startsWith('capes-') || chapterId.includes('-PRF') || chapterId.startsWith('L1-') || chapterId.startsWith('L2-') || chapterId.startsWith('L3-')) {
            const prefix = chapterId.split('-')[0];
            const allExosObj = Object.assign({}, (typeof window !== 'undefined' && window.MATHS_EXERCISES) || {}, (typeof window !== 'undefined' && window.CAPES_EXERCISES) || {}, (typeof window !== 'undefined' && window.PROOF_EXERCISES) || {});
            const fallbackKey = Object.keys(allExosObj).find(k => k.startsWith(prefix) && allExosObj[k].length > 0);
            if (fallbackKey && allExosObj[fallbackKey].length > 0) {
              const base = this.randChoice(allExosObj[fallbackKey]);
              q = JSON.parse(JSON.stringify(base));
              q.id = `${chapterId}-fallback-${Date.now()}`;
              q.chapterId = chapterId;
            } else {
              // Si aucun exercice n'est trouvé, tirer dans capes-01 ou L1-PRF mais JAMAIS N1 !
              const capesPool = (typeof window !== 'undefined' && window.CAPES_EXERCISES && window.CAPES_EXERCISES['capes-01']) ? window.CAPES_EXERCISES['capes-01'] : [];
              if (capesPool.length > 0) {
                const base = this.randChoice(capesPool);
                q = JSON.parse(JSON.stringify(base));
                q.id = `${chapterId}-capesfallback-${Date.now()}`;
                q.chapterId = chapterId;
              } else {
                q = null;
              }
            }
          } else {
            q = typeof this.generateN1 === 'function' ? this.generateN1(resolvedTier, mastery) : null;
          }
        }
        break;
      }
    }

    if (q && q.statement) {
      const recent = this._getRecentHistory(chapterId);
      if (recent.includes(q.statement) && _variationAttempt < 15) {
        return this.generateForChapter(chapterId, resolvedTier, mastery, _variationAttempt + 1);
      }
      this._saveRecentStatement(chapterId, q.statement);
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

    // Déduplication défensive des options
    const uniqueOptions = [];
    const uniqueExplanations = [];
    let newCorrectIdx = 0;
    exo.options.forEach((opt, idx) => {
      const existingIdx = uniqueOptions.indexOf(opt);
      if (existingIdx === -1) {
        if (idx === correctIdx) newCorrectIdx = uniqueOptions.length;
        uniqueOptions.push(opt);
        if (exo.explanations) uniqueExplanations.push(exo.explanations[idx]);
      } else if (idx === correctIdx) {
        newCorrectIdx = existingIdx;
      }
    });

    const items = uniqueOptions.map((opt, i) => ({
      opt,
      exp: uniqueExplanations[i] !== undefined ? uniqueExplanations[i] : null,
      isCorrect: i === newCorrectIdx
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
   * et renouvellement garanti à chaque tirage.
   */
  generateSeries(chapterIds = ['N1'], count = 5) {
    const series = [];
    const usedStatementsInSeries = new Set();
    const validChaps = (chapterIds && chapterIds.length) ? chapterIds : ['N1'];

    // Répartition équilibrée et aléatoire des chapitres sélectionnés
    let chapterPlan = [];
    while (chapterPlan.length < count) {
      const batch = [...validChaps].sort(() => Math.random() - 0.5);
      chapterPlan = chapterPlan.concat(batch);
    }
    chapterPlan = chapterPlan.slice(0, count);

    for (let i = 0; i < count; i++) {
      const cid = chapterPlan[i];

      // Progression naturelle sur la série :
      // Premier quart : Palier 1 (Socle)
      // Deuxième quart : Palier 2 (Guidé)
      // Troisième quart : Palier 3 (Brevet / Bac / Concours)
      // Fin de série : Palier 4 (Défi / Approfondissement)
      let tier = 1;
      const progress = i / Math.max(1, count - 1);
      if (progress >= 0.8) tier = 4;
      else if (progress >= 0.5) tier = 3;
      else if (progress >= 0.25) tier = 2;
      else tier = 1;

      // Jitter pédagogique : 35% de chance de varier d'un palier pour renouveler les types de questions
      if (Math.random() < 0.35) {
        const delta = Math.random() < 0.5 ? -1 : 1;
        tier = Math.max(1, Math.min(4, tier + delta));
      }

      let q = this.generateForChapter(cid, tier);
      let attempts = 0;
      while (q && q.statement && usedStatementsInSeries.has(q.statement) && attempts < 16) {
        // En cas de doublon, tenter soit une nouvelle génération sur ce palier, soit un palier alternatif
        const altTier = attempts < 5 ? tier : ((attempts % 4) + 1);
        q = this.generateForChapter(cid, altTier);
        attempts++;
      }

      if (q && q.statement) {
        usedStatementsInSeries.add(q.statement);
        this._saveRecentStatement(cid, q.statement);
      }
      if (q) {
        q.seriesIndex = i + 1;
        series.push(q);
      }
    }
    return series;
  }
};
