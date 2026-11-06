/**
 * L'Établi des Maths — Onglet Fiches & DS : fiches imprimables et devoirs surveillés générés.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 *
 * Pour chaque chapitre, l'onglet propose :
 *  - les fiches rédigées (window.MATHS_WORKSHEETS, énoncé + corrigé séparés) ;
 *  - une fiche d'entraînement générée (4 paliers, corrigé détaillé), renouvelable ;
 *  - un DS type généré (4 exercices progressifs, barème total sur 20), renouvelable.
 * Le corrigé est replié à l'écran ; l'impression propose « sujet seul » ou « sujet + corrigé »
 * (le corrigé commence alors sur une nouvelle page). Styles : css/sheets.css.
 */
Object.assign(window.MathsApp, {
  // Libellés des fiches rédigées selon leur type
  SHEET_KIND_LABELS: {
    brevet_entrainement: 'Entraînement',
    seconde_approfondissement: 'Approfondissement',
    automatismes: 'Automatismes',
    brevet_croise: 'Sujet croisé',
    cours: 'Mémo de cours',
    devoir_entrainement: 'Fiche d’exercices',
    td: 'Feuille de TD',
    entrainement_genere: 'Entraînement',
    ds_type: 'DS'
  },

  // Plan du DS selon le cycle : [palier, nombre de questions, points par question] (total 20)
  DS_PLANS: {
    college: [[1, 4, 1], [2, 3, 2], [3, 2, 2], [4, 2, 3]],
    lycee: [[1, 4, 1], [2, 2, 3], [3, 2, 2], [4, 2, 3]],
    superieur: [[1, 2, 2], [2, 2, 3], [3, 1, 4], [4, 1, 6]]
  },

  // Fiche d'entraînement : nombre de questions par palier
  PRACTICE_PLANS: {
    college: [3, 3, 2, 2],
    lycee: [2, 2, 2, 2],
    superieur: [2, 2, 2, 2]
  },

  getSheetCycle(level = this.currentLevel) {
    if (['6eme', '5eme', '4eme', '3eme'].includes(level)) return 'college';
    if (['2nde', '1ere', 'tale'].includes(level)) return 'lycee';
    return 'superieur';
  },

  getDsDuration(level = this.currentLevel) {
    const cycle = this.getSheetCycle(level);
    if (cycle === 'college') return '55 min';
    if (cycle === 'lycee') return '1 h';
    if (level === 'crpe') return '1 h 30';
    if (level === 'sante') return '1 h';
    if (level === 'pass') return '1 h 30';
    if (level === 'veto') return '2 h';
    return level === 'capes' ? '2 h' : '1 h 30';
  },

  getSheetOptions() {
    if (!this._sheetOptions) {
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem('etabli_sheet_options') || '{}') || {}; } catch (e) {}
      this._sheetOptions = Object.assign({ calculator: 'autorisée' }, saved);
    }
    return this._sheetOptions;
  },

  setSheetOption(key, value) {
    this.getSheetOptions()[key] = value;
    try { localStorage.setItem('etabli_sheet_options', JSON.stringify(this._sheetOptions)); } catch (e) {}
    this.renderSheetsView();
  },

  escapeSheetText(text) {
    return String(text == null ? '' : text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  formatPoints(pts) {
    const n = Math.round(pts * 100) / 100;
    const str = String(n).replace('.', ',');
    return `${str} pt${n > 1 ? 's' : ''}`;
  },

  getChapterMeta(chapterId) {
    return (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId) || null;
  },

  /**
   * Liste des fiches du chapitre : fiches rédigées, puis fiche d'entraînement et DS générés.
   */
  getChapterSheets(chapterId) {
    if (!this.generatedPracticeByChapter) this.generatedPracticeByChapter = {};
    const sheets = ((window.MATHS_WORKSHEETS || {})[chapterId] || []).map((s, i) => this.normalizeStaticSheet(s, chapterId, i));

    let practice = this.generatedPracticeByChapter[chapterId];
    if (!practice) {
      practice = this.createPracticeSheet(chapterId);
      if (practice) this.generatedPracticeByChapter[chapterId] = practice;
    }
    if (practice) sheets.push(practice);

    if (!sheets.some(s => s.type === 'ds_type')) {
      let ds = this.generatedDsByChapter[chapterId];
      if (!ds) {
        ds = this.createDsTypeSheet(chapterId);
        if (ds) this.generatedDsByChapter[chapterId] = ds;
      }
      if (ds) sheets.push(ds);
    }
    return sheets;
  },

  /**
   * Fiche rédigée : type et libellé par défaut ; un corrigé resté dans l'énoncé est séparé.
   */
  normalizeStaticSheet(sheet, chapterId, index) {
    let statement = sheet.statement || '';
    let solution = sheet.solution || '';
    if (!solution.trim()) {
      const m = statement.match(/\n-{3,}\s*\n(#{1,3}\s*Corrig[ée][^\n]*\n[\s\S]*)$/);
      if (m) {
        solution = m[1];
        statement = statement.slice(0, m.index);
      }
    }
    const type = sheet.type || (/^L\d|^capes/.test(chapterId) ? 'td' : 'devoir_entrainement');
    return {
      id: sheet.id || `${chapterId}-fiche-${index}`,
      chapterId,
      type,
      origin: 'static',
      kind: this.SHEET_KIND_LABELS[type] || 'Fiche',
      title: String(sheet.title || `Fiche ${index + 1}`).replace(/^[^\p{L}\p{N}]+/u, '').trim(),
      statement,
      solution
    };
  },

  getPedagogicalStage(tier) {
    const stages = {
      1: { label: 'Automatismes', prompt: 'Réactiver une règle ou une procédure connue.' },
      2: { label: 'Application guidée', prompt: 'Repérer les données, choisir la méthode, puis l’appliquer.' },
      3: { label: 'Raisonnement', prompt: 'Justifier la propriété utilisée et organiser les étapes du calcul.' },
      4: { label: 'Problème et défi', prompt: 'Modéliser la situation, résoudre, puis vérifier et interpréter le résultat.' }
    };
    return stages[parseInt(tier, 10)] || stages[1];
  },

  getExerciseCompetency(exercise, chapterId) {
    if (exercise && exercise.skill) return exercise.skill;
    if (exercise && exercise.title) return exercise.title;
    const chapter = this.getChapterMeta(chapterId);
    return chapter ? (chapter.shortTitle || chapter.title) : chapterId;
  },

  getMethodChecklist(tier, chapterId = '') {
    const chapterMethods = {
      G0: ['Repérer le triangle rectangle et son hypoténuse.', 'Écrire l’égalité de Pythagore, remplacer par les longueurs connues et calculer.', 'Conclure avec la longueur cherchée et son unité.'],
      '4G1': ['Repérer le triangle rectangle et son hypoténuse.', 'Écrire l’égalité de Pythagore, remplacer par les longueurs connues et calculer.', 'Conclure avec la longueur cherchée et son unité.'],
      G1: ['Vérifier les alignements et le parallélisme dans la configuration.', 'Écrire les rapports de Thalès dans le même ordre.', 'Calculer la longueur demandée et conclure avec son unité.'],
      N4: ['Définir l’inconnue et traduire la situation en équation si nécessaire.', 'Résoudre en effectuant la même opération des deux côtés.', 'Vérifier la solution dans l’équation de départ et conclure.'],
      '4N5': ['Définir l’inconnue et traduire la situation en équation si nécessaire.', 'Résoudre en effectuant la même opération des deux côtés.', 'Vérifier la solution dans l’équation de départ et conclure.'],
      Org2: ['Organiser les valeurs ou le tableau d’effectifs.', 'Choisir l’indicateur demandé et effectuer le calcul ou lire le rang utile.', 'Interpréter le résultat dans le contexte.'],
      '4D1': ['Organiser les valeurs ou le tableau d’effectifs.', 'Choisir l’indicateur demandé et effectuer le calcul ou lire le rang utile.', 'Interpréter le résultat dans le contexte.'],
      Org4: ['Définir l’événement étudié et repérer les issues possibles.', 'Utiliser le dénombrement ou l’arbre adapté : multiplier sur un chemin, additionner les chemins concernés.', 'Simplifier la probabilité et vérifier qu’elle est comprise entre 0 et 1.'],
      '4D2': ['Définir l’événement étudié et repérer les issues possibles.', 'Utiliser le dénombrement ou l’arbre adapté : multiplier sur un chemin, additionner les chemins concernés.', 'Simplifier la probabilité et vérifier qu’elle est comprise entre 0 et 1.'],
      '5D2': ['Définir l’événement étudié et repérer les issues possibles.', 'Dénombrer les issues favorables et les issues possibles.', 'Simplifier la probabilité et vérifier qu’elle est comprise entre 0 et 1.']
    };
    if (chapterMethods[chapterId]) return chapterMethods[chapterId];

    const checklists = {
      1: ['Identifier la règle ou l’opération à utiliser.', 'Effectuer le calcul en respectant les priorités.', 'Vérifier rapidement le résultat.'],
      2: ['Relever les données utiles et ce qui est demandé.', 'Choisir la propriété ou la méthode adaptée.', 'Appliquer la méthode et rédiger la réponse.'],
      3: ['Annoncer la propriété ou le raisonnement utilisé.', 'Présenter les calculs dans un ordre lisible.', 'Conclure en répondant précisément à la question.'],
      4: ['Traduire la situation en calcul, schéma ou modèle.', 'Résoudre en justifiant les étapes importantes.', 'Vérifier la cohérence et interpréter le résultat dans son contexte.']
    };
    return checklists[parseInt(tier, 10)] || checklists[1];
  },

  /**
   * Tire `count` questions distinctes d'un palier (générateurs du chapitre, sinon banque statique).
   */
  drawSheetQuestions(chapterId, tier, count, used, openOnly = false) {
    const gen = window.MathsGenerators;
    const isOpen = q => q && q.type !== 'mcq' && !(Array.isArray(q.options) && q.options.length) && !(Array.isArray(q.choices) && q.choices.length);
    const staticPool = ((window.MATHS_EXERCISES || {})[chapterId] || []).filter(q => q && q.statement && (!openOnly || isOpen(q)));
    const tierPool = staticPool.filter(q => (q.tier || 1) === tier);
    const out = [];
    for (let k = 0; k < count; k++) {
      let picked = null;
      for (let attempt = 0; attempt < (openOnly ? 25 : 10) && !picked; attempt++) {
        let ex = null;
        try { ex = gen && gen.generateForChapter(chapterId, tier); } catch (e) { ex = null; }
        if (openOnly && !isOpen(ex)) ex = null;
        if (!ex || !ex.statement) {
          const pool = tierPool.length ? tierPool : staticPool;
          ex = pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
        }
        if (!ex || !ex.statement) break;
        if (!used.has(ex.statement)) picked = ex;
      }
      if (!picked) break;
      used.add(picked.statement);
      out.push(Object.assign({}, picked, { tier: picked.tier || tier }));
    }
    return out;
  },

  resetRecentStatements(chapterId) {
    const cache = window.MathsGenerators && window.MathsGenerators._recentGeneratedStatements;
    if (!cache) return;
    for (let t = 1; t <= 4; t++) delete cache[`${chapterId}:${t}`];
  },

  /**
   * Fiche d'entraînement générée : 4 paliers progressifs, sans barème, avec corrigé détaillé.
   */
  createPracticeSheet(chapterId) {
    const plan = this.PRACTICE_PLANS[this.getSheetCycle()] || this.PRACTICE_PLANS.college;
    const used = new Set();
    this.resetRecentStatements(chapterId);
    const parts = plan.map((count, i) => {
      const tier = i + 1;
      return { tier, stage: this.getPedagogicalStage(tier), questions: this.drawSheetQuestions(chapterId, tier, count, used).map(ex => ({ ex })) };
    }).filter(p => p.questions.length);
    if (!parts.length) return null;
    const n = parts.reduce((s, p) => s + p.questions.length, 0);
    return {
      id: `${chapterId}-fiche-generee`,
      chapterId,
      type: 'entrainement_genere',
      origin: 'generated',
      kind: 'Entraînement',
      title: `Fiche d’entraînement (${n} exercices, 4 paliers)`,
      parts,
      signature: parts.map(p => p.questions.map(q => q.ex.statement).join('|')).join('#')
    };
  },

  /**
   * DS type : 4 exercices progressifs (paliers 1 à 4), barème total ramené à 20 points.
   */
  createDsTypeSheet(chapterId) {
    // Un DS ne contient que des questions ouvertes (comme aux épreuves officielles) : on
    // utilise d'abord la banque d'exercices de DS rédigés, sinon les questions générées ouvertes.
    const bank = (window.MATHS_DS_BANK || {})[chapterId];
    if (Array.isArray(bank) && bank.length >= 3) return this.createBankDsSheet(chapterId, bank);
    const plan = this.DS_PLANS[this.getSheetCycle()] || this.DS_PLANS.college;
    const used = new Set();
    this.resetRecentStatements(chapterId);
    let parts = plan.map(([tier, count, pts]) => {
      const questions = this.drawSheetQuestions(chapterId, tier, count, used, true);
      return { tier, stage: this.getPedagogicalStage(tier), weight: count * pts, questions: questions.map(ex => ({ ex, pts })) };
    }).filter(p => p.questions.length);
    if (!parts.length) return null;

    // Banque incomplète : on répartit les 20 points sur les questions effectivement tirées.
    const target = 20;
    const totalWeight = parts.reduce((s, p) => s + p.weight, 0);
    parts.forEach(p => {
      const share = p.weight * target / totalWeight;
      p.questions.forEach(q => { q.pts = Math.round(share / p.questions.length * 2) / 2; });
    });
    const sum = parts.reduce((s, p) => s + p.questions.reduce((t, q) => t + q.pts, 0), 0);
    if (sum !== target) {
      const last = parts[parts.length - 1].questions;
      last[last.length - 1].pts += target - sum;
    }
    parts.forEach(p => { p.pts = p.questions.reduce((t, q) => t + q.pts, 0); });

    const ch = this.getChapterMeta(chapterId);
    return {
      id: `${chapterId}-ds_type_sommatif`,
      chapterId,
      type: 'ds_type',
      origin: 'generated',
      kind: 'DS',
      title: `DS type sur 20 points`,
      chapterTitle: ch ? ch.title : chapterId,
      total: target,
      duration: this.getDsDuration(),
      parts,
      signature: parts.map(p => p.questions.map(q => q.ex.statement).join('|')).join('#')
    };
  },

  /**
   * DS construit à partir de la banque d'exercices rédigés (MATHS_DS_BANK) : un exercice par
   * niveau de difficulté croissant, en évitant ceux du DS précédent ; barème ramené à 20.
   */
  createBankDsSheet(chapterId, bank) {
    const cycle = this.getSheetCycle();
    const plan = cycle === 'superieur' ? [[1, 2], [3], [4, 3]] : [[1], [2], [3], [4, 3]];
    if (!this.lastBankDs) this.lastBankDs = {};
    const previous = new Set(this.lastBankDs[chapterId] || []);
    const chosen = [];
    const pick = difficulties => {
      const fits = bank.filter(ex => difficulties.includes(ex.difficulty) && !chosen.includes(ex));
      const fresh = fits.filter(ex => !previous.has(ex.id));
      const pool = fresh.length ? fresh : fits;
      return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
    };
    plan.forEach(diffs => {
      const ex = pick(diffs);
      if (ex) chosen.push(ex);
    });
    while (chosen.length < Math.min(3, bank.length)) {
      const rest = bank.filter(ex => !chosen.includes(ex));
      chosen.push(rest[Math.floor(Math.random() * rest.length)]);
    }
    chosen.sort((a, b) => (a.difficulty || 1) - (b.difficulty || 1));
    this.lastBankDs[chapterId] = chosen.map(ex => ex.id);

    const target = 20;
    const raw = chosen.reduce((sum, ex) => sum + (ex.points || 5), 0);
    const parts = chosen.map(ex => ({
      tier: ex.difficulty || 1,
      stage: this.getPedagogicalStage(ex.difficulty || 1),
      pts: Math.max(1, Math.round((ex.points || 5) * target / raw * 2) / 2),
      bankEx: ex,
      questions: []
    }));
    const sum = parts.reduce((t, p) => t + p.pts, 0);
    parts[parts.length - 1].pts += target - sum;

    const ch = this.getChapterMeta(chapterId);
    return {
      id: `${chapterId}-ds_type_sommatif`,
      chapterId,
      type: 'ds_type',
      origin: 'generated',
      kind: 'DS',
      title: `DS type sur 20 points`,
      chapterTitle: ch ? ch.title : chapterId,
      total: target,
      duration: this.getDsDuration(),
      parts,
      fromBank: true,
      bankSize: bank.length,
      signature: chosen.map(ex => ex.id).join('|')
    };
  },

  // --- Rendu HTML -----------------------------------------------------------------------

  md(text) {
    // Protège les « * » des formules (ex. $e_1^*$) que le Markdown prendrait pour de l'italique.
    const safe = String(text || '').replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, m => m.replace(/\*/g, '\\ast '));
    return window.MathsRenderer.markdownToHtml(safe);
  },

  getChoices(ex) {
    const list = (ex && (ex.options || ex.choices)) || [];
    return Array.isArray(list) ? list.filter(o => o != null && String(o).trim()) : [];
  },

  renderQuestionStatement(ex, opts = {}) {
    let html = `<div class="ws-q-text">${this.md(ex.statement)}</div>`;
    const choices = this.getChoices(ex);
    if (choices.length > 1) {
      const instr = (ex.tier || 1) >= 3 || opts.justify ? 'Choisir la bonne réponse et justifier.' : 'Entourer la bonne réponse.';
      html += `<p class="ws-choices-instr">${instr}</p><ol class="ws-choices">${choices.map((c, i) => `<li><span class="ws-choice-letter">${String.fromCharCode(65 + i)}.</span> ${this.md(String(c))}</li>`).join('')}</ol>`;
    }
    return html;
  },

  renderQuestionSolution(ex) {
    const choices = this.getChoices(ex);
    let answerLine = '';
    if (choices.length > 1) {
      let idx = choices.indexOf(ex.answer);
      if (idx < 0 && Number.isInteger(ex.correctIndex)) idx = ex.correctIndex;
      if (idx >= 0 && idx < choices.length) answerLine = `<p class="ws-answer"><strong>Réponse ${String.fromCharCode(65 + idx)}</strong> : ${this.escapeSheetText(choices[idx])}</p>`;
    }
    let raw = ex.solution || (ex.answer ? `Réponse attendue : **${ex.answer}**` : 'Voir le cours pour les étapes détaillées.');
    if (window.MathsAdaptiveEngine && typeof window.MathsAdaptiveEngine.formatSolutionWithInitialExpr === 'function') {
      try { raw = window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(ex.statement, raw); } catch (e) {}
    }
    if (!answerLine && ex.answer && !String(raw).includes(String(ex.answer))) {
      answerLine = `<p class="ws-answer"><strong>Réponse</strong> : ${this.escapeSheetText(ex.answer)}</p>`;
    }
    return answerLine + `<div class="ws-sol-text">${this.md(raw)}</div>`;
  },

  renderGeneratedStatement(sheet) {
    const isDs = sheet.type === 'ds_type';
    let qNum = 0;
    const intro = isDs
      ? `<p class="ws-instructions">Le sujet comporte ${sheet.parts.length} exercices indépendants, du plus simple au plus exigeant. Toute réponse doit être justifiée : la clarté de la rédaction et la précision des calculs sont prises en compte.</p>`
      : `<p class="ws-instructions">Les exercices sont rangés par palier, du plus simple au plus exigeant. Rédiger les calculs sur une feuille, puis comparer avec le corrigé.</p>`;
    const body = sheet.parts.map((part, i) => {
      if (part.bankEx) {
        const scale = window.MathsExamTools ? window.MathsExamTools.scaleHtml(part.bankEx.statement, part.pts, 'ws-scale') : '';
        return `<section class="ws-exercise"><h3 class="ws-ex-title">Exercice ${i + 1} — ${this.escapeSheetText(part.bankEx.title)} <span class="ws-pts">${this.formatPoints(part.pts)}</span></h3>${scale}<div class="ws-q-text ws-bank-text">${this.md(part.bankEx.statement)}</div></section>`;
      }
      const skills = [...new Set(part.questions.map(q => this.getExerciseCompetency(q.ex, sheet.chapterId)))];
      const head = isDs
        ? `<h3 class="ws-ex-title">Exercice ${i + 1} — ${part.stage.label} <span class="ws-pts">${this.formatPoints(part.pts)}</span></h3>`
        : `<h3 class="ws-ex-title">Palier ${part.tier} — ${part.stage.label}</h3>`;
      const items = part.questions.map(q => {
        qNum++;
        const num = isDs ? `${part.questions.indexOf(q) + 1}.` : `${qNum}.`;
        return `<li class="ws-q"><div class="ws-q-head"><span class="ws-q-num">${num}</span>${q.ex.title ? `<span class="ws-q-topic">${this.escapeSheetText(q.ex.title)}</span>` : ''}${isDs ? `<span class="ws-pts">${this.formatPoints(q.pts)}</span>` : ''}</div>${this.renderQuestionStatement(q.ex)}</li>`;
      }).join('');
      return `<section class="ws-exercise">${head}<p class="ws-skills"><em>${part.stage.prompt}</em> Compétences : ${skills.map(s => this.escapeSheetText(s)).join(' ; ')}.</p><ol class="ws-questions">${items}</ol></section>`;
    }).join('');
    const bankParts = isDs ? sheet.parts.filter(p => p.bankEx) : [];
    const grid = bankParts.length && this.getSheetCycle() !== 'superieur' && window.MathsExamTools
      ? window.MathsExamTools.competencyGridHtml(sheet.parts.map((p, i) => p.bankEx && { label: `Ex. ${i + 1}`, statement: p.bankEx.statement, tier: p.tier }).filter(Boolean))
      : '';
    return intro + body + grid;
  },

  renderGeneratedSolution(sheet) {
    const isDs = sheet.type === 'ds_type';
    let qNum = 0;
    return sheet.parts.map((part, i) => {
      if (part.bankEx) {
        return `<section class="ws-exercise"><h3 class="ws-ex-title">Exercice ${i + 1} — ${this.escapeSheetText(part.bankEx.title)} <span class="ws-pts">${this.formatPoints(part.pts)}</span></h3><div class="ws-sol-text ws-bank-text">${this.md(part.bankEx.solution)}</div></section>`;
      }
      const head = isDs
        ? `<h3 class="ws-ex-title">Exercice ${i + 1} — ${part.stage.label} <span class="ws-pts">${this.formatPoints(part.pts)}</span></h3>`
        : `<h3 class="ws-ex-title">Palier ${part.tier} — ${part.stage.label}</h3>`;
      const method = `<div class="ws-method"><strong>Méthode attendue :</strong><ul>${this.getMethodChecklist(part.tier, sheet.chapterId).map(s => `<li>${s}</li>`).join('')}</ul></div>`;
      const items = part.questions.map((q, j) => {
        qNum++;
        const num = isDs ? `${j + 1}.` : `${qNum}.`;
        return `<li class="ws-q"><div class="ws-q-head"><span class="ws-q-num">${num}</span>${isDs ? `<span class="ws-pts">${this.formatPoints(q.pts)}</span>` : ''}</div>${this.renderQuestionSolution(q.ex)}</li>`;
      }).join('');
      return `<section class="ws-exercise">${head}${method}<ol class="ws-questions">${items}</ol></section>`;
    }).join('');
  },

  renderSheetHeader(sheet, isSolution = false) {
    const ch = this.getChapterMeta(sheet.chapterId);
    const lvl = this.getLevelName(this.currentLevel);
    const chTitle = ch ? ch.title : sheet.chapterId;
    const isDs = sheet.type === 'ds_type';
    const opts = this.getSheetOptions();
    const kicker = `L’Établi des Maths · ${this.escapeSheetText(lvl)} · ${this.escapeSheetText(ch && ch.num ? `${ch.num} — ` : '')}${this.escapeSheetText(chTitle)}`;
    const title = isSolution ? `Corrigé — ${this.escapeSheetText(sheet.title)}` : this.escapeSheetText(sheet.title);
    const infos = [];
    if (isDs) {
      infos.push(`Durée : ${sheet.duration}`);
      infos.push(`Calculatrice : ${opts.calculator}`);
      infos.push(`Barème : ${sheet.total} points`);
    }
    const staticPts = !isDs && sheet.origin === 'static' ? this.sumStaticPoints(sheet.statement) : 0;
    if (staticPts) infos.push(`Barème indicatif : ${staticPts} points`);
    return `
      <header class="ws-header">
        <div class="ws-header-main">
          <p class="ws-kicker">${kicker}</p>
          <h2 class="ws-title">${title}</h2>
          ${infos.length ? `<p class="ws-infos">${infos.map(s => `<span>${s}</span>`).join('')}</p>` : ''}
        </div>
        ${isDs && !isSolution ? `<div class="ws-grade">Note<br><span>…… / ${sheet.total}</span></div>` : ''}
      </header>
      ${isSolution ? '' : `<div class="ws-student print-only"><span>Nom : ……………………………</span><span>Prénom : ……………………………</span><span>Classe : …………</span><span>Date : …………</span></div>
      <p class="ws-qr print-only"><img src="assets/qr/${encodeURIComponent(sheet.chapterId)}.svg" alt="" width="56" height="56" data-fallback-src="assets/qr/site.svg" /><span>S’entraîner sur ce chapitre, gratuitement : <strong>etabli-des-maths.fr</strong> (scanner le QR code)</span></p>`}`;
  },

  sumStaticPoints(md) {
    // Somme des barèmes des exercices (titres « Exercice … (n points) » ou « Partie … (n points) » de même niveau)
    const lines = String(md || '').split('\n').filter(l => /^#{2,4}\s/.test(l) && /\((\d+(?:[.,]\d+)?)\s*points?\)/.test(l));
    if (!lines.length) return 0;
    const depth = Math.min(...lines.map(l => l.match(/^#+/)[0].length));
    const total = lines.filter(l => l.match(/^#+/)[0].length === depth)
      .reduce((s, l) => s + parseFloat(l.match(/\((\d+(?:[.,]\d+)?)\s*points?\)/)[1].replace(',', '.')), 0);
    return Math.round(total * 100) / 100;
  },

  getSelectedSheetIndex(chapterId, sheets) {
    if (!this.sheetSelection) this.sheetSelection = {};
    const wanted = this.sheetSelection[chapterId];
    const idx = wanted ? sheets.findIndex(s => s.id === wanted) : -1;
    return idx >= 0 ? idx : 0;
  },

  // =========================================================================
  // ESPACE FICHES & DS (ÉCRAN + IMPRESSION)
  // =========================================================================
  renderSheetsView() {
    const container = document.getElementById('sheets-content-container');
    if (!container) return;
    const chapterId = this.currentChapterId;
    const sheets = this.getChapterSheets(chapterId);

    if (!sheets.length) {
      container.innerHTML = `<div class="ws-empty"><p>Aucune fiche n’est encore disponible pour ce chapitre. Entraînez-vous dans l’onglet <strong>S’entraîner</strong>.</p></div>`;
      return;
    }

    const idx = this.getSelectedSheetIndex(chapterId, sheets);
    this.selectedSheetIndex = idx;
    const sheet = sheets[idx];
    const isGenerated = sheet.origin === 'generated';
    const opts = this.getSheetOptions();

    const statementHtml = isGenerated ? this.renderGeneratedStatement(sheet) : this.md(sheet.statement);
    const solutionHtml = isGenerated ? this.renderGeneratedSolution(sheet) : (sheet.solution ? this.md(sheet.solution) : '');
    const notice = this.sheetNotice && this.sheetNotice.chapterId === chapterId && this.sheetNotice.sheetId === sheet.id ? this.sheetNotice.text : '';

    const chips = sheets.map((s, i) => `
      <button type="button" class="ws-chip${i === idx ? ' active' : ''}" aria-pressed="${i === idx}" data-click="MathsApp.selectSheet" data-args='[${i}]'>
        <span class="ws-chip-kind ws-kind-${s.origin === 'generated' ? (s.type === 'ds_type' ? 'ds' : 'gen') : 'static'}">${this.escapeSheetText(s.kind)}</span>
        <span class="ws-chip-title">${this.escapeSheetText(s.title)}</span>
      </button>`).join('');

    container.innerHTML = `
      <div class="ws-toolbar no-print">
        <div class="ws-chips" role="group" aria-label="Fiches du chapitre">${chips}</div>
        <div class="ws-actions">
          ${isGenerated ? `<button type="button" class="btn-secondary ws-btn" data-action="regenerate" data-click="MathsApp.regenerateSheet" title="Tirer de nouveaux exercices et le corrigé correspondant">🔀 Nouvelle version</button>` : ''}
          ${sheet.type === 'ds_type' ? `<label class="ws-option">Calculatrice
            <select data-change="MathsApp.setSheetOption" data-args='["calculator", "$value"]'>
              ${['autorisée', 'interdite', 'en mode examen'].map(v => `<option value="${v}"${opts.calculator === v ? ' selected' : ''}>${v}</option>`).join('')}
            </select></label>` : ''}
          <button type="button" class="btn-primary ws-btn print-btn" data-print="subject" data-click="MathsApp.printSheet" data-args='[false]'>🖨️ Imprimer le sujet</button>
          <button type="button" class="btn-secondary ws-btn" data-print="solution" data-click="MathsApp.printSheet" data-args='[true]' ${solutionHtml ? '' : 'disabled'}>🖨️ Sujet + corrigé</button>
          <button type="button" class="btn-secondary ws-btn" data-click="MathsApp.openSheetQuizModal" title="Composer un devoir blanc sur un ou plusieurs chapitres (format brevet ou bac possible)">📝 Devoir blanc multi-chapitres</button>
        </div>
      </div>
      ${notice ? `<p class="ws-notice no-print" role="status">${notice}</p>` : ''}
      <article class="ws-sheet ws-type-${sheet.type}">
        <div class="ws-page ws-subject">
          ${this.renderSheetHeader(sheet)}
          <div class="ws-body sheet-statement-content">${statementHtml}</div>
        </div>
        ${solutionHtml ? `
          <details class="ws-solution" id="sheet-solution-details">
            <summary class="no-print">Afficher le corrigé détaillé</summary>
            <div class="ws-page ws-solution-page">
              ${this.renderSheetHeader(sheet, true)}
              <div class="ws-body sheet-solution" id="sheet-solution-wrapper">${solutionHtml}</div>
            </div>
          </details>` : `<p class="ws-no-solution no-print">Pas de corrigé rédigé pour cette fiche.</p>`}
      </article>`;
    window.MathsRenderer.renderElement(container);
  },

  selectSheet(idx) {
    const sheets = this.getChapterSheets(this.currentChapterId);
    if (!sheets[idx]) return;
    if (!this.sheetSelection) this.sheetSelection = {};
    this.sheetSelection[this.currentChapterId] = sheets[idx].id;
    this.sheetNotice = null;
    this.renderSheetsView();
  },

  /** Régénère la fiche générée affichée (fiche d'entraînement ou DS). */
  regenerateSheet() {
    const chapterId = this.currentChapterId;
    const sheets = this.getChapterSheets(chapterId);
    const current = sheets[this.getSelectedSheetIndex(chapterId, sheets)];
    if (!current || current.origin !== 'generated') return;
    if (current.type === 'ds_type') this.regenerateDs();
    else this.generatePracticeSheet();
  },

  generatePracticeSheet() {
    const chapterId = this.currentChapterId;
    if (!this.generatedPracticeByChapter) this.generatedPracticeByChapter = {};
    const before = this.generatedPracticeByChapter[chapterId];
    const fresh = this.createPracticeSheet(chapterId);
    if (fresh) this.generatedPracticeByChapter[chapterId] = fresh;
    this.focusGeneratedSheet(chapterId, 'entrainement_genere', before, fresh);
    if (window.MathsBadges) { window.MathsBadges.recordEvent('paper'); window.MathsBadges.check(); }
  },

  regenerateDs() {
    const chapterId = this.currentChapterId;
    const before = this.generatedDsByChapter[chapterId];
    const fresh = this.createDsTypeSheet(chapterId);
    if (fresh) this.generatedDsByChapter[chapterId] = fresh;
    this.focusGeneratedSheet(chapterId, 'ds_type', before, fresh);
    if (window.MathsBadges) { window.MathsBadges.recordEvent('paper'); window.MathsBadges.check(); }
  },

  focusGeneratedSheet(chapterId, type, before, fresh) {
    const sheets = this.getChapterSheets(chapterId);
    const sheet = sheets.find(s => s.type === type && s.origin === 'generated');
    if (!this.sheetSelection) this.sheetSelection = {};
    if (sheet) this.sheetSelection[chapterId] = sheet.id;
    let text = 'Nouvelle version générée : énoncés et corrigé ont été renouvelés.';
    if (before && fresh && fresh.fromBank) {
      // DS tiré de la banque : dire précisément combien d'exercices changent
      const old = new Set(String(before.signature || '').split('|'));
      const ids = String(fresh.signature || '').split('|');
      const changed = ids.filter(id => !old.has(id)).length;
      text = changed === 0
        ? 'La banque d’exercices de ce chapitre est encore limitée : cette nouvelle version reprend les mêmes exercices.'
        : changed === ids.length
          ? `Nouveau sujet : les ${ids.length} exercices ont changé (banque de ${fresh.bankSize} exercices pour ce chapitre).`
          : `Nouveau sujet : ${changed} exercice${changed > 1 ? 's' : ''} sur ${ids.length} ${changed > 1 ? 'ont' : 'a'} changé (banque de ${fresh.bankSize} exercices pour ce chapitre).`;
    } else if (before && fresh && before.signature === fresh.signature) {
      text = 'La banque d’exercices de ce chapitre est encore limitée : cette nouvelle version reprend les mêmes énoncés.';
    }
    this.sheetNotice = sheet ? { chapterId, sheetId: sheet.id, text } : null;
    this.renderSheetsView();
  },

  /** Devoir blanc multi-chapitres, pré-rempli avec le chapitre courant. */
  openSheetQuizModal() {
    window.MathsQuizGenerator.openModal(this.currentChapterId);
  },

  /** Impression : sujet seul, ou sujet + corrigé (le corrigé commence sur une nouvelle page). */
  printSheet(withSolution = false) {
    const body = document.body;
    const details = document.getElementById('sheet-solution-details');
    const wasOpen = details ? details.open : false;
    body.classList.add('sheets-printing');
    body.classList.toggle('sheets-print-solution', !!withSolution);
    if (details && withSolution) details.open = true;
    const cleanup = () => {
      body.classList.remove('sheets-printing', 'sheets-print-solution');
      if (details) details.open = wasOpen;
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    if (window.MathsBadges) { window.MathsBadges.recordEvent('paper'); window.MathsBadges.check(); }
    window.print();
  },

  toggleSheetSolution() {
    const details = document.getElementById('sheet-solution-details');
    if (details) details.open = !details.open;
  },
});
