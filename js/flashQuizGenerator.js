/**
 * Générateur de devoirs blancs d'entraînement (+ corrigé détaillé)
 * Permet aux élèves de s'entraîner en conditions réelles d'examen
 * avec régénération infinie de nouveaux sujets et auto-évaluation.
 * Multi-niveaux : Collège (5e, 4e, 3e), Lycée (2nde, 1ère, Tale), Licence (L1, L2, L3)
 */

/**
 * Outils communs aux sujets imprimables (devoirs blancs et DS de chapitre) :
 * barème indicatif par question, grille des six compétences, automatismes sans calculatrice.
 */
window.MathsExamTools = {
  fmtPts(p) {
    const s = String(Math.round(p * 100) / 100).replace('.', ',');
    return `${s} pt${p > 1 ? 's' : ''}`;
  },

  /**
   * Version papier d'un énoncé écrit pour la saisie en ligne : retire ce qui ne concerne que
   * le clavier (exemples de saisie, touches, format de frappe) et remplace « saisir » par « donner ».
   */
  paperStatement(statement) {
    const sample = '(?:\\((?:[^()]|\\([^()]*\\))*\\)|`[^`]*`|\\$[^$]*\\$|-?[\\d√π][\\d√π/]*(?:,\\d+)?)';
    const example = new RegExp(` ?\\(par exemple ${sample}(?: ou ${sample})?\\)|,? par exemple ${sample}(?: ou ${sample})?`, 'g');
    const cleanHint = hint => {
      const out = hint
        .replace(/ ?\(touche [^()]*\)/g, '')
        .replace(example, '')
        .replace(/, ou (?:saisir|directement|seulement|le couple)\b[^*]*?(?=\.\*)/, '')
        .replace(/ ; on peut aussi saisir\b[^.*]*/, '')
        .replace(/ \(virgule décimale\)|, avec la virgule décimale|,? sans le symbole %| \(nombre seul\)|, fractions?(?: irréductibles?)? acceptées?| \(fraction acceptée\)|, entre parenthèses et séparées par « ; » s'il y en a plusieurs/g, '')
        .replace(/Saisir le nombre seul, en /, 'Donner le résultat en ')
        .replace(/Saisir une (fraction(?: irréductible)?)\./, 'Donner le résultat sous forme de $1.');
      return /^\*Saisir (?:un nombre(?: entier| décimal| \(entier ou décimal\)| \(avec son signe\))?|le nombre seul)\.\*$/.test(out) ? '' : out;
    };
    return String(statement || '')
      .replace(/\*\(Saisir (?:par exemple `[^`]*`|le nombre sans espace)\.\)\*/g, '')
      .replace(/ ; saisir par exemple `[^`]*`/g, '')
      .replace(/\*[^*\n]*\bsaisir\b[^*\n]*\*|\((?:[^()\n]|\([^()\n]*\))*\bsaisir\b(?:[^()\n]|\([^()\n]*\))*\)/gi, cleanHint)
      .replace(/\bSaisir\b/g, 'Donner')
      .replace(/\bsaisir\b/g, 'donner')
      .replace(/[ \t]+$/gm, '')
      .trimEnd();
  },

  /**
   * Repère les questions numérotées d'un énoncé (« 1. », « 2) », sous-questions « a) »,
   * parties « Partie A ») et répartit `total` points entre elles, par demi-points,
   * au prorata du nombre de sous-questions. Retourne null s'il y a moins de deux questions.
   */
  splitPoints(statement, total) {
    const lines = String(statement || '').split('\n');
    const items = [];
    let part = '';
    lines.forEach(line => {
      const p = line.match(/^\s*(?:#+\s*)?\**\s*Partie\s+([A-Z])\b/i);
      if (p) { part = p[1].toUpperCase(); return; }
      const q = line.match(/^\s*\**\s*(\d{1,2})\s*[.)]\**\s/);
      if (q) { items.push({ label: (part ? `${part}.` : '') + q[1], weight: 0 }); return; }
      if (items.length && /^\s*\**\s*[a-h]\s*\)\**\s/.test(line)) items[items.length - 1].weight++;
    });
    if (items.length < 2 || !(total > 0)) return null;
    const weights = items.map(it => Math.max(1, it.weight));
    const W = weights.reduce((a, b) => a + b, 0);
    if (total < items.length * 0.5) return null;
    const pts = weights.map(w => Math.max(0.5, Math.round(total * w / W * 2) / 2));
    let diff = Math.round((total - pts.reduce((a, b) => a + b, 0)) * 2) / 2;
    while (Math.abs(diff) >= 0.5) {
      const step = diff > 0 ? 0.5 : -0.5;
      // Ajuste la question la plus lourde (ou, en retrait, la plus lourde encore au-dessus de 0,5)
      let k = 0;
      pts.forEach((p, i) => { if ((step > 0 ? weights[i] >= weights[k] : p > pts[k]) ) k = i; });
      if (step < 0 && pts[k] <= 0.5) break;
      pts[k] += step;
      diff -= step;
    }
    return items.map((it, i) => ({ label: it.label, pts: pts[i] }));
  },

  scaleHtml(statement, total, cls = 'quiz-scale') {
    const split = this.splitPoints(statement, total);
    if (!split) return '';
    return `<p class="${cls}"><strong>Barème indicatif :</strong> ${split.map(s => `${s.label}. ${this.fmtPts(s.pts)}`).join(' · ')}</p>`;
  },

  COMPETENCIES: [
    { key: 'chercher', label: 'Chercher', re: /\b(conjectur|explorer|tester|essayer|chercher|quel(le)?s? (est|sont|valeur)|existe-t-il|peut-on|est-il possible)/i },
    { key: 'modeliser', label: 'Modéliser', re: /(modélis|traduire|mettre en équation|exprimer .* en fonction|on note \$?x|soit \$?x|on appelle|programme de calcul|situation)/i },
    { key: 'representer', label: 'Représenter', re: /(tracer|représent|construire|graphique|figure|schéma|arbre|tableau|repère|courbe|diagramme|placer)/i },
    { key: 'raisonner', label: 'Raisonner', re: /(justifier|démontrer|montrer que|prouver|en déduire|expliquer|vrai ou faux|vérifier que|conclure)/i },
    { key: 'calculer', label: 'Calculer', re: /(calculer|déterminer|résoudre|simplifier|développer|factoriser|donner la valeur|exprimer|effectuer)/i },
    { key: 'communiquer', label: 'Communiquer', re: /(rédiger|phrase|expliquer|argumenter|interpréter|commenter|répondre au problème)/i }
  ],

  /** Compétences sollicitées par un énoncé (repérage par mots-clés, indicatif). */
  competenciesOf(statement, tier = 1) {
    const text = String(statement || '');
    const found = this.COMPETENCIES.filter(c => c.re.test(text)).map(c => c.key);
    if (tier >= 3 && !found.includes('chercher')) found.push('chercher');
    if (!found.includes('communiquer')) found.push('communiquer'); // rédaction toujours évaluée
    return found;
  },

  /**
   * Grille d'évaluation par compétences : une ligne par compétence, les exercices qui la sollicitent,
   * et quatre niveaux de maîtrise à cocher par l'enseignant.
   */
  competencyGridHtml(exercises) {
    if (!exercises || !exercises.length) return '';
    const rows = this.COMPETENCIES.map(c => {
      const nums = exercises.filter(e => this.competenciesOf(e.statement, e.tier).includes(c.key)).map(e => e.label);
      return `<tr><th scope="row">${c.label}</th><td>${nums.length ? nums.join(', ') : '—'}</td><td></td><td></td><td></td><td></td></tr>`;
    }).join('');
    return `<section class="exam-competency-grid">
      <h4>Évaluation par compétences</h4>
      <table>
        <thead><tr><th scope="col">Compétence</th><th scope="col">Exercices</th><th scope="col">Insuffisante</th><th scope="col">Fragile</th><th scope="col">Satisfaisante</th><th scope="col">Très bonne</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="exam-competency-note">Repérage indicatif des exercices qui mobilisent chaque compétence ; l'enseignant coche le niveau de maîtrise.</p>
    </section>`;
  },

  /** Une question générée exige-t-elle une calculatrice (arrondi, valeur approchée, fonction réciproque…) ? */
  needsCalculator(q) {
    const text = `${q.statement || ''}\n${q.solution || ''}\n${q.hint1 || ''}`;
    return /calculatrice|arrondi|valeur approch|\\approx|≈|Arc(cos|sin|tan)/i.test(text);
  },

  isMcq(q) {
    return !!(q && Array.isArray(q.options) && q.options.length > 1);
  },

  mcqCorrectIndex(q) {
    let idx = q.options.indexOf(q.answer);
    if (idx < 0 && Number.isInteger(q.correctIndex)) idx = q.correctIndex;
    return idx;
  },

  /**
   * Tire `count` automatismes sans calculatrice (palier 1) dans les chapitres donnés,
   * dont environ `mcqShare` de QCM (options affichées) et le reste à réponse courte.
   */
  buildAutomatismes(chapterIds, count, mcqShare) {
    const gen = window.MathsGenerators;
    if (!gen || !chapterIds.length) return [];
    const wantMcq = Math.round(count * mcqShare);
    const mcqs = [], opens = [];
    const seen = new Set();
    const usedMcqCh = new Map(), usedOpenCh = new Map();
    // Tirage sans enregistrement dans l'historique : seules les questions finalement retenues y entrent
    const cidOf = new Map();
    const draw = (cid) => {
      const prev = gen._noRecentSave;
      gen._noRecentSave = true;
      let q = null;
      try { q = gen.generateForChapter(cid, 1); } catch (e) { q = null; } finally { gen._noRecentSave = prev; }
      if (q) cidOf.set(q, cid);
      return q;
    };
    for (let round = 0; round < 12 && (mcqs.length < wantMcq || opens.length < count - wantMcq); round++) {
      const order = gen.shuffle(chapterIds);
      for (const cid of order) {
        const q = draw(cid);
        if (!q || !q.statement || q.statement.length > 260 || seen.has(q.statement)) continue;
        if (/<svg|<img|```/.test(q.statement) || this.needsCalculator(q)) continue;
        const mcq = this.isMcq(q);
        if (mcq && this.mcqCorrectIndex(q) < 0) continue;
        // Au plus deux questions d'un même chapitre, et d'abord un chapitre différent par question
        const used = mcq ? usedMcqCh : usedOpenCh;
        const totalFromCh = (usedMcqCh.get(cid) || 0) + (usedOpenCh.get(cid) || 0);
        if (totalFromCh >= (round < 2 ? 1 : 2)) continue;
        if (mcq && mcqs.length < wantMcq) { mcqs.push(q); used.set(cid, (used.get(cid) || 0) + 1); seen.add(q.statement); }
        else if (!mcq && opens.length < count - wantMcq) { opens.push(q); used.set(cid, (used.get(cid) || 0) + 1); seen.add(q.statement); }
      }
    }
    // Complète avec l'autre type si l'un manque
    let all = mcqs.concat(opens);
    if (all.length < count) {
      for (let tries = 0; all.length < count && tries < count * 20; tries++) {
        const cid = chapterIds[Math.floor(Math.random() * chapterIds.length)];
        const q = draw(cid);
        if (!q || !q.statement || q.statement.length > 260 || seen.has(q.statement)) continue;
        if (/<svg|<img|```/.test(q.statement) || this.needsCalculator(q)) continue;
        if (this.isMcq(q) && this.mcqCorrectIndex(q) < 0) continue;
        seen.add(q.statement);
        all.push(q);
      }
    }
    all = gen.shuffle(all).slice(0, count);
    if (!gen._noRecentSave && typeof gen._saveRecentStatement === 'function') {
      all.forEach(q => gen._saveRecentStatement(cidOf.get(q) || q.chapterId, q.statement));
    }
    return all.map(q => {
      if (!this.isMcq(q)) return q;
      const letters = q.options.map((_, i) => String.fromCharCode(65 + i));
      const idx = this.mcqCorrectIndex(q);
      q.choicesMd = q.options.map((o, i) => `**${letters[i]}.** ${o}`).join('\n\n');
      q.mcqAnswerLine = `**Réponse ${letters[idx]}** : ${q.options[idx]}`;
      return q;
    });
  }
};

window.MathsQuizGenerator = {
  lastChapters: [],
  lastCount: 10,
  showSolutions: false,

  /**
   * Coche ou décoche l'ensemble des chapitres du niveau actif
   */
  selectAllChapters(checked = true) {
    const boxes = document.querySelectorAll('input[name="quiz-chap"]');
    boxes.forEach(cb => { cb.checked = checked; });
    this.syncExamNote();
  },

  /**
   * Ouvre la modale de configuration du devoir blanc
   */
  openModal(preselectedChapterId = null) {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    document.body.classList.add('quiz-modal-open');

    // Remplir la sélection des chapitres selon le niveau actif
    const container = document.getElementById('quiz-chapters-checkboxes');
    if (container) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => window.MathsChapterLevels.has(c, currentLevel));
      const isSingleSelection = !!preselectedChapterId;
      const defaultId = preselectedChapterId || (chapters[0] ? chapters[0].id : 'N1');

      const actionsHtml = `
        <div class="quiz-select-actions no-print" style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
          <button type="button" class="btn-secondary btn-sm" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;" data-click="MathsQuizGenerator.selectAllChapters" data-args='[true]'>✅ Tout sélectionner</button>
          <button type="button" class="btn-secondary btn-sm" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;" data-click="MathsQuizGenerator.selectAllChapters" data-args='[false]'>❌ Tout désélectionner</button>
        </div>
      `;

      const chipsHtml = chapters.map(c => {
        // Si aucun chapitre spécifique n'est pré-sélectionné (ex: clic depuis la barre globale),
        // on coche l'ensemble des chapitres pour un devoir blanc d'examen complet.
        const isChecked = isSingleSelection ? (c.id === defaultId) : true;
        return `
          <label class="diapo-chip">
            <input type="checkbox" name="quiz-chap" value="${c.id}" ${isChecked ? 'checked' : ''} data-change="MathsQuizGenerator.syncExamNote" />
            <span>${c.num} : ${c.shortTitle || c.title}</span>
          </label>
        `;
      }).join('');

      const examNoteHtml = `<p id="quiz-exam-note" role="status" style="display: none; flex-basis: 100%; width: 100%; margin: 0 0 0.85rem; font-size: 0.9rem; color: var(--text-muted);">ℹ️ Ce format d'examen porte sur tout le programme : les chapitres cochés ne sont pas pris en compte. Pour cibler des chapitres, choisir une interrogation, un devoir surveillé ou un devoir long.</p>`;

      const coverageNoteHtml = `<p id="quiz-coverage-note" role="status" style="display: none; flex-basis: 100%; width: 100%; margin: 0 0 0.85rem; font-size: 0.9rem; color: var(--text-muted);"></p>`;

      container.innerHTML = examNoteHtml + coverageNoteHtml + actionsHtml + chipsHtml;
    }

    const countSelect = document.getElementById('quiz-count-select');
    if (countSelect) {
      // Formats d'examen réservés à leur niveau : brevet en 3e, épreuve anticipée en 1re, bac en terminale
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const exam = this.EXAM_FORMATS[currentLevel];
      const hasBank = this.levelHasBank(currentLevel);
      const variants = this.EXAM_VARIANTS[currentLevel] || [];
      countSelect.innerHTML = (exam ? [exam].concat(variants).map(f => `<option value="${f[0]}">${f[1]}</option>`).join('') : '')
        + this.FREE_FORMATS.map(f => `<option value="${f[0]}">${f[1]} — ${hasBank ? f[2] : `${f[0]} questions`} — ${f[3]}</option>`).join('');
      countSelect.value = exam ? exam[0] : '10';
      countSelect.setAttribute('data-change', 'MathsQuizGenerator.syncExamNote');
      this.syncExamNote();
    }

    document.getElementById('quiz-config-screen').style.display = 'block';
    document.getElementById('quiz-preview-screen').style.display = 'none';
  },

  /** Affiche l'avertissement quand le format choisi ignore les chapitres cochés. */
  syncExamNote() {
    const note = document.getElementById('quiz-exam-note');
    const select = document.getElementById('quiz-count-select');
    if (!note || !select) return;
    const isExam = Object.values(this.EXAM_FORMATS).concat(...Object.values(this.EXAM_VARIANTS)).some(f => f[0] === select.value);
    note.style.display = isExam ? 'block' : 'none';
    // Devoir libre : prévenir que tous les chapitres cochés ne peuvent pas figurer dans un même sujet
    const coverage = document.getElementById('quiz-coverage-note');
    if (!coverage) return;
    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const nbEx = this.freeExerciseCount(select.value);
    const checked = Array.from(document.querySelectorAll('input[name="quiz-chap"]:checked')).length;
    const show = !isExam && this.levelHasBank(currentLevel) && checked > nbEx;
    coverage.style.display = show ? 'block' : 'none';
    coverage.textContent = show
      ? `ℹ️ Ce format compte ${nbEx} exercices : chaque sujet porte sur ${nbEx} des ${checked} chapitres cochés, tirés au sort. Les chapitres absents d'un sujet passent en priorité au suivant (bouton « Régénérer »). Pour les réunir tous dans un même sujet, cocher au plus ${nbEx} chapitres${nbEx < 4 ? ' ou choisir un format plus long' : ''}.`
      : '';
  },

  /** Nombre d'exercices rédigés d'un devoir libre selon le format (5, 10 ou 15). */
  freeExerciseCount(format) {
    const count = parseInt(format, 10) || 10;
    return count <= 5 ? 2 : (count <= 10 ? 3 : 4);
  },

  // Profil de difficulté du devoir libre, du plus simple au plus exigeant : difficultés admises pour chaque exercice
  FREE_PROFILES: {
    2: [[1, 2], [3, 4]],
    3: [[1, 2], [2, 3], [3, 4]],
    4: [[1, 2], [2, 3], [2, 3], [3, 4]]
  },

  // Plafond de questions numérotées d'un devoir libre, selon le nombre d'exercices (environ cinq par exercice)
  FREE_MAX_QUESTIONS: { 2: 10, 3: 15, 4: 20 },

  /** Nombre de questions numérotées en début de ligne d'un énoncé (au moins 1). */
  countQuestions(statement) {
    return Math.max(1, (String(statement || '').match(/^[ \t]*(?:\*\*)?\d+[.)]/gm) || []).length);
  },

  /**
   * Sélection des exercices d'un devoir libre dans les banques de DS : un exercice par chapitre
   * (les chapitres de `priority` d'abord), un profil de difficulté imposé (un exercice simple,
   * un exigeant, et des intermédiaires) et un plafond de questions. Renvoie les exercices
   * triés du plus simple au plus exigeant et les chapitres cochés qui ne figurent pas au sujet.
   */
  pickFreeExercises(chapters, nbEx, bank, priority = []) {
    const rand = n => Math.floor(Math.random() * n);
    const shuffle = arr => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
      return a;
    };
    const withEx = chapters.filter(cid => (bank[cid] || []).length);
    const noBank = chapters.filter(cid => !(bank[cid] || []).length);
    if (!withEx.length) return { picked: [], missing: [], noBank };
    const profile = this.FREE_PROFILES[nbEx] || Array.from({ length: nbEx }, () => [1, 4]);
    const maxQ = this.FREE_MAX_QUESTIONS[nbEx] || nbEx * 5;
    const order = shuffle(withEx.filter(c => priority.includes(c))).concat(shuffle(withEx.filter(c => !priority.includes(c))));
    const cids = Array.from({ length: nbEx }, (_, k) => order[k % order.length]);
    const diff = ex => ex.difficulty || 1;
    const draw = () => {
      const bands = shuffle(profile.map((b, rank) => ({ b, rank })));
      const picked = [];
      cids.forEach((cid, k) => {
        const { b, rank } = bands[k];
        const free = bank[cid].filter(ex => !picked.some(p => p.ex === ex));
        const inBand = free.filter(ex => diff(ex) >= b[0] && diff(ex) <= b[1]);
        const pool = inBand.length ? inBand : free;
        if (pool.length) picked.push({ cid, ex: pool[rand(pool.length)], rank });
      });
      return picked.sort((a, b) => diff(a.ex) - diff(b.ex) || a.rank - b.rank);
    };
    const size = picked => picked.reduce((t, p) => t + this.countQuestions(p.ex.statement), 0);
    let best = null;
    for (let attempt = 0; attempt < 40; attempt++) {
      const picked = draw();
      if (!best || size(picked) < size(best)) best = picked;
      if (size(best) <= maxQ) break;
    }
    const used = new Set(best.map(p => p.cid));
    return { picked: best.map(({ cid, ex }) => ({ cid, ex })), missing: withEx.filter(c => !used.has(c)), noBank };
  },

  /**
   * Mention de la calculatrice d'un devoir libre, d'après les exercices retenus : non autorisée quand
   * un exercice l'exclut et qu'aucun ne la demande ; sinon autorisée, en signalant les exercices qui l'excluent.
   */
  freeCalculatorRule(questions, cardNoun = 'Exercice') {
    // Formulations d'exclusion rencontrées dans les banques (« Sans calculatrice », « Calculatrice interdite »…)
    const EXCL = /sans (?:utiliser )?(?:la )?calculatrice|calculatrice interdite|n'utilisera pas (?:la|de) calculatrice|calculatrice (?:non autorisée|n'est pas autorisée)/gi;
    const excludes = q => q.calculator === false || new RegExp(EXCL.source, 'i').test(q.statement || '');
    const strip = s => String(s || '').replace(EXCL, '');
    // Un exercice qui exclut la calculatrice ne la demande que si son énoncé l'exige ailleurs (arrondi, calculatrice
    // autorisée pour une question…) ; les valeurs approchées de son corrigé (≈) ne comptent pas.
    const needs = q => q.calculator === true || window.MathsExamTools.needsCalculator(excludes(q)
      ? { statement: strip(q.statement) }
      : { statement: strip(q.statement), solution: strip(q.solution), hint1: q.hint1 });
    const nums = questions.map((q, i) => (excludes(q) ? i + 1 : 0)).filter(Boolean);
    if (!nums.length) return 'calculatrice autorisée';
    if (!questions.some(needs)) return 'calculatrice non autorisée';
    const noun = cardNoun.toLowerCase();
    const list = nums.length > 1 ? `${nums.slice(0, -1).join(', ')} et ${nums[nums.length - 1]}` : String(nums[0]);
    return `calculatrice autorisée, sauf là où l'énoncé l'exclut (${noun}${nums.length > 1 ? 's' : ''} ${list})`;
  },

  EXAM_FORMATS: {
    '3eme': ['dnb-20', '🎓 Brevet blanc — format 2026 : automatismes + problèmes — 2 h — sur 20 points'],
    '1ere': ['ea-20', '🎓 Épreuve anticipée de 1re (spécialité) — automatismes + 3 exercices — 2 h, sans calculatrice — sur 20 points'],
    // Voies sans spécialité : le sujet blanc de l'épreuve anticipée propre à chaque voie
    '1tc': ['ea-20-sans-spe', '🎓 Épreuve anticipée de 1re (tronc commun, sans spécialité) — automatismes + 3 exercices — 2 h, sans calculatrice — sur 20 points'],
    '1techno': ['ea-20-techno', '🎓 Épreuve anticipée de 1re (voie technologique) — automatismes + 3 exercices — 2 h, sans calculatrice — sur 20 points'],
    'tale': ['bac-20', '🎓 Bac blanc de spécialité — 4 exercices de 5 points — 4 h, calculatrice autorisée — sur 20 points']
  },

  // Autres parcours d'un même examen, proposés après le format principal du niveau
  EXAM_VARIANTS: {
    '1ere': [
      ['ea-20-sans-spe', '🎓 Épreuve anticipée de 1re (tronc commun, sans spécialité) — automatismes + 3 exercices — 2 h, sans calculatrice — sur 20 points'],
      ['ea-20-techno', '🎓 Épreuve anticipée de 1re (voie technologique) — automatismes + 3 exercices — 2 h, sans calculatrice — sur 20 points']
    ]
  },

  // Épreuve anticipée : réglages propres à chaque parcours
  EA_PARCOURS: {
    'ea-20': { key: 'spe', titre: '1re SPÉCIALITÉ', programme: 'programme de spécialité de 1re', badge: 'Programme de spécialité de 1re — calculatrice interdite' },
    'ea-20-sans-spe': { key: 'sans-spe', niveau: '1re générale, tronc commun', titre: '1re GÉNÉRALE, TRONC COMMUN', programme: 'programme de mathématiques intégré à l\'enseignement scientifique', badge: 'Tronc commun de 1re générale (sans spécialité) — calculatrice interdite' },
    'ea-20-techno': { key: 'techno', niveau: '1re technologique', titre: '1re TECHNOLOGIQUE', programme: 'programme de 1re technologique', badge: 'Voie technologique (1re) — calculatrice interdite' }
  },

  // [valeur, type de devoir, nombre d'exercices (avec banque de DS), durée et barème]
  FREE_FORMATS: [
    ['5', 'Interrogation', '2 exercices', '30 min — sur 10 points'],
    ['10', 'Devoir surveillé', '3 exercices', '1 h — sur 20 points'],
    ['15', 'Devoir long', '4 exercices', '2 h — sur 20 points']
  ],

  /** Les exercices rédigés viennent des banques de DS ; sans banque pour le niveau, le devoir compte 5, 10 ou 15 questions. */
  levelHasBank(level) {
    const bank = window.MATHS_DS_BANK || {};
    return (window.MATHS_CHAPTERS || []).some(c => window.MathsChapterLevels.has(c, level) && (bank[c.id] || []).length > 0);
  },

  /** Impression : sujet seul (par défaut), ou sujet puis corrigé sur une nouvelle page. */
  print(withSolution = false) {
    const body = document.body;
    body.classList.toggle('quiz-print-solution', !!withSolution);
    const cleanup = () => {
      body.classList.remove('quiz-print-solution');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
  },

  closeModal() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
    document.body.classList.remove('quiz-modal-open');
  },

  /**
   * Bascule l'affichage du corrigé détaillé
   */
  toggleSolution() {
    const block = document.getElementById('quiz-solutions-block');
    const btn = document.getElementById('btn-toggle-quiz-solution');
    if (!block) return;

    this.showSolutions = !this.showSolutions;
    block.style.display = this.showSolutions ? 'block' : 'none';
    block.classList.toggle('quiz-solutions-hidden', !this.showSolutions);
    if (btn) {
      btn.textContent = this.showSolutions ? '👁️ Masquer le Corrigé' : '👁️ Afficher le Corrigé';
    }
  },

  BREVET_THEME_LABELS: {
    'géométrie': 'Géométrie',
    'fonctions': 'Fonctions',
    'statistiques-probabilités': 'Statistiques et probabilités',
    'algorithmique': 'Algorithmique et programmation',
    'grandeurs-mesures': 'Grandeurs et mesures',
    'nombres-calculs': 'Nombres et calculs'
  },

  /**
   * Tire 3 problèmes de MATHS_BREVET_PROBLEMS de thèmes différents totalisant 12 points.
   * Retourne null si la banque n'est pas chargée (repli sur les questions générées).
   */
  pickBrevetProblems() {
    const bank = Array.isArray(window.MATHS_BREVET_PROBLEMS) ? window.MATHS_BREVET_PROBLEMS : [];
    const triples = [];
    for (let i = 0; i < bank.length; i++) {
      for (let j = i + 1; j < bank.length; j++) {
        if (bank[i].theme === bank[j].theme) continue;
        for (let k = j + 1; k < bank.length; k++) {
          if (bank[k].theme === bank[i].theme || bank[k].theme === bank[j].theme) continue;
          if (Math.abs(bank[i].points + bank[j].points + bank[k].points - 12) < 1e-9) triples.push([i, j, k]);
        }
      }
    }
    if (!triples.length) return null;
    const picked = triples[Math.floor(Math.random() * triples.length)].map(idx => bank[idx]);
    return window.MathsGenerators.shuffle(picked);
  },

  /**
   * Remplace les blocs ```scratch (une instruction par ligne, imbrication par 4 espaces)
   * par des blocs Scratch colorés (classes CSS scratch-*), sur une seule ligne HTML.
   */
  renderScratchFences(md) {
    if (!md || md.indexOf('```scratch') === -1) return md;
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const flag = '<span style="display:inline-block; vertical-align:middle; width:15px; height:15px; background:#00b84c; border-radius:3px; clip-path: polygon(0 0, 100% 30%, 0 65%);"></span>';
    const fmt = (text) => {
      // Les groupes (…) de premier niveau et les […] deviennent des emplacements blancs
      let out = '', depth = 0, buf = '';
      for (const ch of text) {
        if (ch === '(') { if (depth === 0) { out += esc(buf); buf = ''; } else buf += ch; depth++; continue; }
        if (ch === ')' && depth > 0) { depth--; if (depth === 0) { out += `<span class="scratch-slot-str">${esc(buf)}</span>`; buf = ''; } else buf += ch; continue; }
        buf += ch;
      }
      out += esc(buf);
      out = out.replace(/\[([^\]]*)\]/g, '<span class="scratch-slot-str">$1</span>');
      return out.replace(/drapeau( vert)?/i, flag);
    };
    const kind = (t) => {
      if (/^quand\b/i.test(t)) return ['scratch-hat', ''];
      if (/^définir\b/i.test(t)) return ['scratch-hat', 'background:#ff6680; border-color:#e64d6a; color:#fff;'];
      if (/^(envoyer à tous|diffuser)\b/i.test(t)) return ['scratch-control', 'background:#ffbf00; border-color:#d99b00; color:#4d3800;'];
      if (/^(stylo|relever le stylo|effacer tout|mettre la couleur du stylo|mettre la taille du stylo)/i.test(t)) return ['scratch-motion', 'background:#0fbd8c; border-color:#0b9a72; color:#fff;'];
      if (/^(avancer|tourner|aller à|s'orienter|glisser|ajouter .* à x|ajouter .* à y|donner la valeur .* à (x|y))/i.test(t)) return ['scratch-motion', ''];
      if (/^demander\b/i.test(t)) return ['scratch-sensing', ''];
      if (/^(dire|penser)\b/i.test(t)) return ['scratch-looks', ''];
      if (/^(mettre|ajouter|changer)\b/i.test(t)) return ['scratch-variables', ''];
      if (/^(répéter|si\b|sinon|attendre|stop)/i.test(t)) return ['scratch-control', ''];
      return ['scratch-control', 'background:#ff6680; border-color:#e64d6a; color:#fff;'];
    };
    const blockHtml = (t) => {
      const [cls, style] = kind(t);
      return `<div class="scratch-block ${cls}" style="white-space:normal; flex-wrap:wrap; max-width:100%;${style ? ' ' + style : ''}">${fmt(t)}</div>`;
    };
    const renderLines = (lines) => {
      const walk = (i, ind) => {
        let out = '';
        while (i < lines.length && lines[i].ind >= ind) {
          const t = lines[i].text;
          if (lines[i].ind > ind || /^sinon$/i.test(t)) { out += blockHtml(t); i++; continue; }
          if (/^(répéter|si\b)/i.test(t)) {
            const [body, j] = walk(i + 1, ind + 1);
            let html = `<div class="scratch-c-wrap">${blockHtml(t)}<div class="scratch-c-body">${body || '&nbsp;'}</div>`;
            i = j;
            if (i < lines.length && lines[i].ind === ind && /^sinon$/i.test(lines[i].text)) {
              const [body2, k] = walk(i + 1, ind + 1);
              html += `${blockHtml('sinon')}<div class="scratch-c-body">${body2 || '&nbsp;'}</div>`;
              i = k;
            }
            out += html + '<div class="scratch-c-bottom"></div></div>';
          } else {
            out += blockHtml(t);
            i++;
          }
        }
        return [out, i];
      };
      return walk(0, 0)[0];
    };
    return md.replace(/```scratch\n([\s\S]*?)```/g, (m, code) => {
      const lines = code.split('\n').filter(l => l.trim()).map(l => {
        const sp = l.replace(/\t/g, '    ').match(/^ */)[0].length;
        return { ind: Math.floor(sp / 4), text: l.trim() };
      });
      return `<div class="scratch-stage-wrapper" style="max-width:100%;"><div class="scratch-script" style="text-align:left; max-width:100%;">${renderLines(lines)}</div></div>`;
    });
  },

  /**
   * Construit les « questions » de la partie 2 du brevet blanc à partir de la banque.
   */
  buildBrevetPart2(offset) {
    const picked = this.pickBrevetProblems();
    if (!picked) return null;
    const items = picked.map((p, idx) => ({
      id: p.id,
      isBrevetProblem: true,
      tier: 4,
      skill: this.BREVET_THEME_LABELS[p.theme] || p.theme,
      statement: this.renderScratchFences(p.statement),
      solution: this.renderScratchFences(p.solution),
      examTitle: `Exercice ${idx + 1} — ${p.title}`,
      examPoints: p.points,
      seriesIndex: offset + idx + 1,
      sectionTitle: idx === 0 ? 'Partie 2 — Raisonnement et résolution de problèmes — 14 points — 1 h 40' : undefined,
      sectionNote: idx === 0 ? `Calculatrice autorisée. Toutes les réponses doivent être justifiées, sauf indication contraire. Exercices : ${picked.map(q => String(q.points).replace('.', ',')).join(' + ')} = 12 points ; la clarté et la précision des raisonnements ainsi que la rédaction sont évaluées sur 2 points. Si le travail n'est pas terminé, laisser une trace de la recherche : elle sera prise en compte.` : undefined
    }));
    items.push({
      id: 'BR-redaction',
      isBrevetProblem: true,
      solutionOnly: true,
      tier: 4,
      skill: 'Communiquer, raisonner',
      statement: '',
      solution: 'Évaluée sur l\'ensemble de la partie 2 :\n- raisonnements clairs, organisés et justifiés (propriétés citées, calculs posés) ;\n- phrases de conclusion répondant à la question posée, avec les unités ;\n- vocabulaire et notations mathématiques corrects ; copie soignée et lisible.',
      examTitle: 'Clarté et rédaction',
      examPoints: 2,
      seriesIndex: offset + items.length + 1
    });
    return items;
  },

  /**
   * Partie 2 de l'épreuve anticipée : trois exercices de la banque de DS de 1re, sans calculatrice,
   * de chapitres différents (au moins un d'analyse ou d'algèbre et un de géométrie ou de probabilités),
   * barème ramené à 14 points.
   */
  buildEaPart2(offset, parcours = 'spe') {
    if (parcours !== 'spe') {
      const list = window.MathsEaGenerators ? window.MathsEaGenerators.part2(parcours) : [];
      return list.map((ex, idx) => this.eaExercise(ex, ex.chapterId, ex.points, idx, offset));
    }
    const bank = window.MATHS_DS_BANK || {};
    const ids = Object.keys(bank).filter(id => /^1[AGS]\d/.test(id));
    // Un énoncé qui demande un arrondi suppose une calculatrice, même sans le drapeau de la banque.
    // Sont aussi écartés la parabole et son sommet, retirés du programme de spécialité entré en vigueur en 2026.
    const retired = /parabole[\s\S]*sommet|sommet[\s\S]*parabole/i;
    // Un exercice signalé « Pour aller plus loin » dépasse le programme : il ne peut pas sortir au sujet blanc.
    const beyond = /pour aller plus loin/i;
    const usable = id => (bank[id] || []).filter(ex => ex.calculator !== true && ex.difficulty >= 2 && ex.difficulty <= 3 && !/arrondi/i.test(ex.statement) && !retired.test(ex.statement) && !beyond.test(ex.statement));
    const pickFrom = (pool, used) => {
      const cands = pool.filter(id => !used.includes(id) && usable(id).length);
      if (!cands.length) return null;
      const cid = cands[Math.floor(Math.random() * cands.length)];
      const list = usable(cid);
      return { cid, ex: list[Math.floor(Math.random() * list.length)] };
    };
    const used = [];
    const picks = [];
    const plan = [ids.filter(id => id.startsWith('1A')), ids.filter(id => /^1(G|S[12])/.test(id)), ids];
    plan.forEach(pool => {
      const p = pickFrom(pool, used) || pickFrom(ids, used);
      if (p) { picks.push(p); used.push(p.cid); }
    });
    if (!picks.length) return [];
    const raw = picks.reduce((t, p) => t + (p.ex.points || 5), 0);
    let assigned = 0;
    return picks.map((p, idx) => {
      const pts = idx === picks.length - 1 ? 14 - assigned : Math.max(3, Math.round((p.ex.points || 5) * 14 / raw * 2) / 2);
      assigned += pts;
      return this.eaExercise(p.ex, p.cid, pts, idx, offset);
    });
  },

  /** Mise en forme commune d'un exercice de la partie 2 de l'épreuve anticipée. */
  eaExercise(ex, chapterId, pts, idx, offset) {
    return {
      id: ex.id,
      chapterId,
      isBrevetProblem: true,
      fromBank: true,
      tier: ex.difficulty || ex.tier,
      skill: ex.title,
      statement: ex.statement,
      solution: ex.solution,
      examTitle: `Exercice ${idx + 1} — ${ex.title}`,
      examPoints: pts,
      seriesIndex: offset + idx + 1,
      sectionTitle: idx === 0 ? 'Partie 2 — Exercices — 14 points' : undefined,
      sectionNote: idx === 0 ? 'Calculatrice interdite. Les exercices sont indépendants et peuvent être traités dans l\'ordre de son choix. Toutes les réponses doivent être justifiées. La qualité de la rédaction est prise en compte : à l\'épreuve, la maîtrise de la langue compte pour 2 points sur 20, que le barème de ce sujet blanc ne détaille pas.' : undefined
    };
  },

  /**
   * Génère un nouveau sujet blanc complet avec corrigé détaillé
   */
  generate() {
    if (window.MathsBadges) { window.MathsBadges.recordEvent('paper'); setTimeout(() => window.MathsBadges.check(), 400); }
    const previewScreen = document.getElementById('quiz-preview-screen');
    const isRegenerating = previewScreen && previewScreen.style.display === 'block';

    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const validLevelChapters = (window.MATHS_CHAPTERS || []).filter(c => window.MathsChapterLevels.has(c, currentLevel)).map(c => c.id);

    const checkedBoxes = Array.from(document.querySelectorAll('input[name="quiz-chap"]:checked')).map(cb => cb.value);
    let chapters = checkedBoxes.filter(id => validLevelChapters.includes(id));
    if (!chapters.length) {
      chapters = (this.lastChapters || []).filter(id => validLevelChapters.includes(id));
    }
    if (!chapters.length) {
      const activeId = window.MathsApp && window.MathsApp.currentChapterId;
      if (activeId && validLevelChapters.includes(activeId)) {
        chapters = [activeId];
      } else if (validLevelChapters.length) {
        chapters = [validLevelChapters[0]];
      } else {
        chapters = ['N1'];
      }
    }
    this.lastChapters = chapters;

    // Réinitialiser le cache des énoncés récents pour ces chapitres afin de garantir un renouvellement complet
    if (window.MathsGenerators && window.MathsGenerators._recentGeneratedStatements) {
      chapters.forEach(cid => {
        for (let t = 1; t <= 4; t++) {
          delete window.MathsGenerators._recentGeneratedStatements[`${cid}:${t}`];
        }
      });
    }

    const countSelect = document.getElementById('quiz-count-select');
    const selectedFormat = countSelect ? countSelect.value : (this.lastCount || '10');
    this.lastCount = selectedFormat;

    const isExamDNB = selectedFormat === 'dnb-20' || selectedFormat === 'dnb-100';
    const isExamBac = selectedFormat === 'bac-20';
    const eaParcours = this.EA_PARCOURS[selectedFormat];
    const isExamEA = !!eaParcours;

    // Les sujets du tronc commun et de la voie technologique ne sont pas des sujets de spécialité
    const levelLabel = (eaParcours && eaParcours.niveau) ? eaParcours.niveau
      : (window.MathsApp && typeof window.MathsApp.getLevelName === 'function')
      ? window.MathsApp.getLevelName(currentLevel)
      : (currentLevel === '6eme' ? '6ème' : currentLevel === '5eme' ? '5ème' : (currentLevel === '4eme' ? '4ème' : (currentLevel === '3eme' ? '3ème' : currentLevel)));

    let totalPoints = 20;
    let cardNoun = 'Exercice';
    let questions = [];
    let examMainTitle = `📝 L'ÉTABLI DES MATHS (${levelLabel}) — DEVOIRS BLANCS D'ENTRAÎNEMENT`;
    let examSubNotice = `💡 <strong>Sujet Blanc d'Entraînement (${levelLabel}) :</strong> Ce sujet a été généré aléatoirement pour t'entraîner en conditions réelles d'examen. Prends une feuille, rédige soigneusement tes calculs et tes justifications, puis compare avec le <strong>corrigé détaillé</strong> ci-dessous. Tu peux cliquer sur <strong>« 🔄 Régénérer un nouveau devoir »</strong> à tout moment pour en faire d'autres !`;
    let examSolutionTitle = `L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS`;
    // Consigne imprimée en tête du sujet (devoir libre) et chapitres réellement présents dans le sujet
    let examConsigne = '';
    let coverageNotice = '';
    let subjectChapters = chapters;

    if (isExamDNB) {
      // Format de l'épreuve depuis la session 2026 : 2 h, 20 points.
      // Partie 1 — automatismes : 6 points, 20 min, calculatrice interdite, sans justification.
      // Partie 2 — raisonnement et résolution de problèmes : 14 points dont 2 pour la rédaction, 1 h 40.
      totalPoints = 20;
      examMainTitle = `🎓 BREVET DES COLLÈGES (DNB) — SUJET BLANC DE MATHÉMATIQUES SUR 20 POINTS`;
      examSubNotice = `🎓 <strong>Sujet blanc au format du brevet (depuis 2026) :</strong> 2 h, sur 20 points. <strong>Partie 1 — Automatismes</strong> (6 points, 20 min, calculatrice interdite, aucune justification demandée), puis <strong>Partie 2 — Raisonnement et résolution de problèmes</strong> (14 points, 1 h 40, calculatrice autorisée, dont 2 points pour la clarté et la rédaction). Les deux parties s'enchaînent sans pause et se rendent sur deux copies distinctes : la copie de la partie 1 est ramassée au bout des 20 minutes. Sujet généré aléatoirement : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 BREVET (DNB) — CORRIGÉ DU SUJET BLANC SUR 20 POINTS`;

      const chapters3e = (window.MATHS_CHAPTERS || []).filter(c => c.level === '3eme').map(c => c.id);
      // Automatismes sans calculatrice : environ 4 QCM (choix affichés) et 5 questions à réponse courte
      const automatismes = window.MathsExamTools.buildAutomatismes(chapters3e, 9, 0.4);
      automatismes.forEach((q, i) => {
        q.seriesIndex = i + 1;
        q.examTitle = `Question ${i + 1}`;
        q.hidePoints = true;
        if (i === 0) {
          q.sectionTitle = 'Partie 1 — Automatismes — 6 points — 20 minutes';
          q.sectionNote = 'Calculatrice interdite. Les deux parties se traitent sur deux copies distinctes : la copie de la partie 1 est ramassée au bout des 20 minutes. Pour chaque question, recopier son numéro et la réponse. Aucune justification n\'est demandée. Pour les questions à choix multiple, une seule réponse est exacte : recopier sa lettre.';
        }
      });

      // Partie 2 : 3 problèmes de la banque type brevet (thèmes différents, 12 points) + 2 points de rédaction.
      const bankProblems = this.buildBrevetPart2(automatismes.length);
      if (bankProblems) {
        questions = automatismes.concat(bankProblems);
      } else {
      const problemStructure = [
        { title: "Exercice 1 — Géométrie", points: 4, pool: ['G0', 'G1', 'G2', 'G2bis', 'G7'] },
        { title: "Exercice 2 — Calcul littéral, équations et fonctions", points: 3.5, pool: ['N2', 'N4', 'Org1', 'Org3'] },
        { title: "Exercice 3 — Statistiques, probabilités ou algorithmique", points: 4.5, pool: ['Org2', 'Org4', 'Algo'] }
      ];
      const problems = problemStructure.map((def, idx) => {
        const pool = def.pool.filter(id => chapters3e.includes(id));
        const cid = pool[Math.floor(Math.random() * pool.length)];
        const q = cid ? window.MathsGenerators.generateForChapter(cid, 3) : null;
        if (q) {
          q.examTitle = def.title;
          q.examPoints = def.points;
          q.seriesIndex = automatismes.length + idx + 1;
          if (idx === 0) {
            q.sectionTitle = 'Partie 2 — Raisonnement et résolution de problèmes — 14 points — 1 h 40';
            q.sectionNote = 'Calculatrice autorisée. Toutes les réponses doivent être justifiées. La clarté et la précision des raisonnements ainsi que la rédaction sont évaluées sur 2 points.';
          }
        }
        return q;
      }).filter(Boolean);
      questions = automatismes.concat(problems);
      }

    } else if (isExamEA) {
      // Épreuve anticipée de mathématiques (fin de 1re), au format fixé pour l'épreuve de juin 2027 (session 2028 du baccalauréat) : 2 h, calculatrice interdite.
      // Partie 1 — automatismes à réponse courte, sans QCM : 6 points ; partie 2 — exercices indépendants : 14 points.
      totalPoints = 20;
      examMainTitle = `🎓 ÉPREUVE ANTICIPÉE DE MATHÉMATIQUES (${eaParcours.titre}) — SUJET BLANC SUR 20 POINTS`;
      examSubNotice = `🎓 <strong>Sujet blanc au format de l'épreuve anticipée de mathématiques (fin de 1re) :</strong> 2 h, sur 20 points, <strong>calculatrice interdite</strong>. <strong>Partie 1 — Automatismes</strong> (6 points : questions à réponse courte, sans QCM), puis <strong>Partie 2 — Exercices</strong> (14 points : trois exercices indépendants sur le ${eaParcours.programme}). Sujet généré aléatoirement à partir des contenus du site : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 ÉPREUVE ANTICIPÉE (${eaParcours.titre}) — CORRIGÉ DU SUJET BLANC SUR 20 POINTS`;

      const automatismes = window.MathsEaGenerators.automatismes();
      automatismes.forEach((q, i) => {
        q.seriesIndex = i + 1;
        q.examTitle = `Question ${i + 1}`;
        q.hidePoints = true;
        q.isEaAutomatism = true;
        if (i === 0) {
          q.sectionTitle = 'Partie 1 — Automatismes — 6 points';
          q.sectionNote = `${automatismes.length} questions à réponse courte, ${String(6 / automatismes.length).replace('.', ',')} point chacune (ce nombre de questions est propre à ce sujet blanc). Calculatrice interdite. Aucune justification n'est demandée.`;
        }
      });
      questions = automatismes.concat(this.buildEaPart2(automatismes.length, eaParcours.key));

    } else if (isExamBac) {
      totalPoints = 20;
      examMainTitle = `🎓 BACCALAURÉAT GÉNÉRAL — ÉPREUVE DE SPÉCIALITÉ MATHÉMATIQUES (20 POINTS)`;
      examSubNotice = `🎓 <strong>Sujet Blanc Baccalauréat Spécialité Maths sur 20 points :</strong> 4 exercices sur le modèle de l'épreuve de spécialité (Probabilités & dénombrement, Géométrie dans l'espace, Suites & Analyse, Analyse approfondie). Durée conseillée : 4h00. Calculatrice mode examen autorisée. Sujet généré aléatoirement : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 BACCALAURÉAT GÉNÉRAL — CORRIGÉ DU SUJET BLANC DE SPÉCIALITÉ (SUR 20 POINTS)`;

      const bacStructure = [
        { title: "Exercice 1 — Probabilités, dénombrement & loi binomiale", pool: ['TS1', 'TS2', 'TS3'], tier: 3 },
        { title: "Exercice 2 — Géométrie dans l'espace & Produit scalaire", pool: ['TG1', 'TG2'], tier: 3 },
        { title: "Exercice 3 — Analyse, Suites récurrentes & Continuité", pool: ['TA1', 'TA2', 'TA3', 'TA5'], tier: 3 },
        { title: "Exercice 4 — Analyse approfondie : dérivation, trigonométrie, convexité ou intégration", pool: ['TA4', 'TA6', 'TA7', 'TA8', 'TA9'], tier: 3 }
      ];

      // Questions ouvertes uniquement : exercices rédigés de la banque de DS de Terminale
      // (difficulté 3-4, type bac), sinon repli sur les générateurs.
      const bank = window.MATHS_DS_BANK || {};
      questions = bacStructure.map((def, idx) => {
        const candidates = def.pool.flatMap(cid => (bank[cid] || []).filter(ex => ex.difficulty >= 3).map(ex => ({ cid, ex })));
        if (candidates.length) {
          const { cid, ex } = candidates[Math.floor(Math.random() * candidates.length)];
          return {
            id: ex.id,
            chapterId: cid,
            isBrevetProblem: true,
            fromBank: true,
            tier: ex.difficulty,
            skill: ex.title,
            statement: ex.statement,
            solution: ex.solution,
            examTitle: `${def.title} — ${ex.title}`,
            examPoints: 5,
            seriesIndex: idx + 1
          };
        }
        const cid = def.pool[Math.floor(Math.random() * def.pool.length)];
        const q = window.MathsGenerators.generateForChapter(cid, def.tier);
        if (q) {
          q.examTitle = def.title;
          q.examPoints = 5;
          q.seriesIndex = idx + 1;
        }
        return q;
      }).filter(Boolean);

    } else {
      const count = parseInt(selectedFormat, 10) || 10;
      // 5 : interrogation (2 exercices, 30 min, /10) ; 10 : devoir (3 exercices, 1 h, /20) ; 15 : devoir long (4 exercices, 2 h, /20)
      totalPoints = count === 5 ? 10 : 20;
      const freeFormat = { 5: ['Interrogation', '30 min'], 10: ['Devoir surveillé', '1 h'], 15: ['Devoir long', '2 h'] }[count] || ['Devoir surveillé', '1 h'];
      // Pas de QCM dans un devoir : exercices rédigés des banques de DS quand elles existent,
      // sinon questions générées ouvertes uniquement, au nombre annoncé par le format.
      const bank = window.MATHS_DS_BANK || {};
      const bankItems = chapters.flatMap(cid => (bank[cid] || []).map(ex => ({ cid, ex })));
      const isOpen = q => q && q.type !== 'mcq' && !(Array.isArray(q.options) && q.options.length);
      const useBank = bankItems.length >= 2;
      const levelHasBank = this.levelHasBank(currentLevel);
      const nbEx = this.freeExerciseCount(count);
      if (!levelHasBank) cardNoun = 'Question';
      examMainTitle = `📝 L'ÉTABLI DES MATHS (${levelLabel}) — ${freeFormat[0].toUpperCase()} — ${freeFormat[1].toUpperCase()} — SUR ${totalPoints} POINTS`;
      if (useBank) {
        // Rotation : d'un sujet à l'autre, les chapitres cochés pas encore tirés passent en priorité
        const rotationKey = `${currentLevel}|${chapters.join(',')}`;
        if (!this.freeRotation || this.freeRotation.key !== rotationKey) this.freeRotation = { key: rotationKey, seen: [] };
        let priority = chapters.filter(cid => (bank[cid] || []).length && !this.freeRotation.seen.includes(cid));
        if (!priority.length) { this.freeRotation.seen = []; priority = chapters.slice(); }
        const selection = this.pickFreeExercises(chapters, nbEx, bank, priority);
        selection.picked.forEach(it => { if (!this.freeRotation.seen.includes(it.cid)) this.freeRotation.seen.push(it.cid); });
        const picked = selection.picked;
        const chapterName = cid => {
          const c = (window.MATHS_CHAPTERS || []).find(ch => ch.id === cid);
          return c ? `${c.num} (${c.shortTitle || c.title})` : cid;
        };
        subjectChapters = chapters.filter(cid => picked.some(it => it.cid === cid));
        if (selection.missing.length) {
          coverageNotice += ` <br>⚠️ <strong>${selection.missing.length} chapitre${selection.missing.length > 1 ? 's' : ''} coché${selection.missing.length > 1 ? 's' : ''} sur ${chapters.length} ne figure${selection.missing.length > 1 ? 'nt' : ''} pas dans ce sujet</strong> (${nbEx} exercices, un par chapitre)${selection.missing.length <= 6 ? ` : ${selection.missing.map(chapterName).join(', ')}` : ''}. « 🔄 Régénérer » les fait passer en priorité ; pour tout réunir, cocher au plus ${nbEx} chapitres${nbEx < 4 ? ' ou choisir un format plus long' : ''}.`;
        }
        if (selection.noBank.length) {
          coverageNotice += ` <br>ℹ️ Pas encore d'exercice rédigé pour : ${selection.noBank.map(chapterName).join(', ')}.`;
        }
        const raw = picked.reduce((t, it) => t + (it.ex.points || 5), 0);
        let assigned = 0;
        questions = picked.map((it, idx) => {
          const pts = idx === picked.length - 1 ? totalPoints - assigned : Math.max(1, Math.round((it.ex.points || 5) * totalPoints / raw * 2) / 2);
          assigned += pts;
          return {
            id: it.ex.id,
            chapterId: it.cid,
            isBrevetProblem: true,
            fromBank: true,
            tier: it.ex.difficulty,
            skill: it.ex.title,
            statement: it.ex.statement,
            solution: it.ex.solution,
            examTitle: `Exercice ${idx + 1} — ${it.ex.title}`,
            examPoints: pts,
            seriesIndex: idx + 1
          };
        });
      } else {
        const nbQ = levelHasBank ? nbEx : count;
        questions = window.MathsGenerators.generateSeries(chapters, nbQ * 3).filter(isOpen).slice(0, nbQ);
        if (!questions.length) questions = window.MathsGenerators.generateSeries(chapters, nbQ);
        // Barème par demi-points, de total exact (15 questions sur 20 : des questions à 1 point et à 1,5 point)
        const base = Math.floor(totalPoints / questions.length * 2) / 2;
        const extra = Math.round((totalPoints - base * questions.length) * 2);
        questions.forEach((q, i) => { q.examPoints = base + (i >= questions.length - extra ? 0.5 : 0); });
      }
      // Calculatrice : d'après les exercices effectivement retenus (certains l'excluent)
      const calcRule = this.freeCalculatorRule(questions, useBank ? 'Exercice' : cardNoun);
      examConsigne = `${calcRule.charAt(0).toUpperCase()}${calcRule.slice(1)}.${levelHasBank ? ' Toutes les réponses doivent être justifiées, sauf indication contraire.' : ''}`;
      examSubNotice = `💡 <strong>${freeFormat[0]} (${levelLabel}) — ${freeFormat[1]}, sur ${totalPoints} points, ${calcRule} :</strong> ${useBank ? 'exercices rédigés tirés au sort dans les chapitres choisis, du plus simple au plus exigeant' : 'questions ouvertes tirées au sort dans les chapitres choisis'}. Rédige tes calculs et tes justifications sur une copie, puis compare avec le corrigé (bouton « Afficher le corrigé »). « 🔄 Régénérer » tire un nouveau sujet.${coverageNotice}`;
      examSolutionTitle = `L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS`;
    }

    const previewContainer = document.getElementById('quiz-preview-content');
    if (!previewContainer) return;

    const pointsLabel = q => (q.hidePoints || !q.examPoints) ? '' : `${String(q.examPoints).replace('.', ',')} point${q.examPoints >= 2 ? 's' : ''}`;

    // Grille des six compétences (collège et lycée) pour les sujets à exercices rédigés
    const bankQs = questions.filter(q => q.isBrevetProblem && !q.solutionOnly);
    const gridHtml = ['6eme', '5eme', '4eme', '3eme', '2nde', '1ere', '1tc', '1techno', 'tale'].includes(currentLevel) && bankQs.length
      ? window.MathsExamTools.competencyGridHtml(bankQs.map((q, i) => ({ label: `Ex. ${i + 1}`, statement: q.statement, tier: q.tier || 3 })))
      : '';

    const chapterTitles = isExamDNB ? 'Programme de 3e — format du brevet 2026'
      : isExamEA ? eaParcours.badge
      : (isExamBac ? 'Programme de spécialité mathématiques (Terminale)'
      : subjectChapters.map(cid => {
          const c = (window.MATHS_CHAPTERS || []).find(ch => ch.id === cid);
          return c ? `${c.num} (${c.shortTitle || c.title})` : cid;
        }).join(', '));

    let html = `
      <div class="printable-quiz-sheet">
        
        <!-- SUJET BLANC -->
        <div class="quiz-single-subject">
          
          <div class="quiz-banner-notice no-print" id="quiz-status-banner">
            ${examSubNotice}
          </div>

          <div class="quiz-header-box">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>${examMainTitle}</h3>
                <span class="quiz-badge-theme">${chapterTitles}</span>
              </div>
              <div class="quiz-header-right">
                <div class="quiz-grade-box">Note : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${totalPoints}</div>
                <img src="assets/logo-192.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
              </div>
            </div>
            <div class="quiz-author-line">
              <span>Créé par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
            </div>
            <div class="quiz-student-meta">
              <span>Nom : ...................................</span>
              <span>Prénom : ...................................</span>
              <span>Classe : ${levelLabel} ......</span>
              <span>Date : ....................</span>
            </div>
          </div>

          <div class="quiz-questions-grid">
            ${examConsigne ? `<div class="quiz-exam-section"><p>${examConsigne}</p></div>` : ''}
            ${questions.filter(q => !q.solutionOnly).map((q, idx) => {
              const stage = (window.MathsApp && typeof window.MathsApp.getPedagogicalStage === 'function')
                ? window.MathsApp.getPedagogicalStage(q.tier)
                : { label: `Palier ${q.tier || 1}` };
              const comp = (window.MathsApp && typeof window.MathsApp.getExerciseCompetency === 'function')
                ? window.MathsApp.getExerciseCompetency(q, q.chapterId)
                : (q.skill || q.title || q.chapterId);
              const cardTitle = q.examTitle || `${cardNoun} ${idx + 1}`;
              const pointsDisplay = pointsLabel(q);
              const section = q.sectionTitle ? `
                <div class="quiz-exam-section">
                  <h4>${q.sectionTitle}</h4>
                  ${q.sectionNote ? `<p>${q.sectionNote}</p>` : ''}
                </div>` : '';
              return `${section}
                <div class="quiz-q-card">
                  <div class="quiz-q-header">
                    <span class="quiz-q-badge">${cardTitle}</span>
                    ${pointsDisplay ? `<span class="quiz-q-pts">(${pointsDisplay})</span>` : ''}
                    ${q.title && !q.examTitle ? `<span class="quiz-q-topic">${q.title}</span>` : ''}
                  </div>
                  <div class="quiz-learning-meta no-print">
                    <span class="quiz-stage-pill">${stage.label}</span>
                    <span>Palier ${q.tier || 1}</span>
                    <span>Compétence / notion : ${comp}</span>
                  </div>
                  ${q.fromBank && q.examPoints ? window.MathsExamTools.scaleHtml(q.statement, q.examPoints) : ''}
                  <div class="quiz-q-text">
                    ${window.MathsRenderer.markdownToHtml(window.MathsExamTools.paperStatement(q.statement))}
                    ${q.choicesMd ? `<div class="quiz-mcq-choices">${window.MathsRenderer.markdownToHtml(q.choicesMd)}</div>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          ${gridHtml}

          <div class="quiz-footer-credit print-only">
            <span>L'Établi des Maths • ${examMainTitle} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
            <span class="print-qr"><img src="assets/qr/site.svg" alt="" width="64" height="64" /> Entraîne-toi gratuitement : etabli-des-maths.fr</span>
          </div>
        </div>

        <!-- CORRIGÉ DÉTAILLÉ -->
        <div id="quiz-solutions-block" class="quiz-solutions-teacher">
          <div class="quiz-header-box teacher-header">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>${examSolutionTitle}</h3>
                <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-muted, #555);">
                  Thème(s) évalué(s) : ${chapterTitles} — Auto-évaluation & remédiation
                </p>
              </div>
              <div class="quiz-header-right">
                <img src="assets/logo-192.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
              </div>
            </div>
            <div class="quiz-author-line">
              <span>Créé par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
            </div>
          </div>
          <div class="quiz-solutions-grid">
            ${questions.map((q, idx) => {
              const stage = (window.MathsApp && typeof window.MathsApp.getPedagogicalStage === 'function')
                ? window.MathsApp.getPedagogicalStage(q.tier)
                : { label: `Palier ${q.tier || 1}` };
              const comp = (window.MathsApp && typeof window.MathsApp.getExerciseCompetency === 'function')
                ? window.MathsApp.getExerciseCompetency(q, q.chapterId)
                : (q.skill || q.title || q.chapterId);
              const cardTitle = q.examTitle || `${cardNoun} ${idx + 1}`;
              const pointsDisplay = pointsLabel(q);
              let rawSol = q.solution || (q.answer ? `Réponse attendue : **${q.answer}**` : "Voir le cours pour les étapes détaillées.");
              if (q.mcqAnswerLine) rawSol = `${q.mcqAnswerLine}\n\n${rawSol}`;
              const solFormatted = (!q.isBrevetProblem && !q.isEaAutomatism && window.MathsAdaptiveEngine && q.statement && rawSol)
                ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(q.statement, rawSol)
                : rawSol;
              const section = q.sectionTitle ? `<div class="quiz-exam-section"><h4>${q.sectionTitle}</h4></div>` : '';
              return `${section}
                <div class="quiz-sol-card">
                  <div class="quiz-sol-header">
                    <strong>${cardTitle}</strong> ${pointsDisplay ? `<span class="quiz-q-pts">(${pointsDisplay})</span>` : ''}
                    ${q.title && !q.examTitle ? `<span class="quiz-sol-topic">${q.title}</span>` : ''}
                  </div>
                  <div class="quiz-learning-meta correction-learning-meta no-print">
                    <span class="quiz-stage-pill">${stage.label}</span>
                    <span>Compétence / notion : ${comp}</span>
                  </div>
                  <div class="quiz-sol-body">
                    ${window.MathsRenderer.markdownToHtml(solFormatted)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="quiz-footer-credit print-only">
            <span>L'Établi des Maths • Corrigé d'auto-évaluation ${levelLabel} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
          </div>
        </div>

      </div>
    `;

    previewContainer.innerHTML = html;
    window.MathsRenderer.renderElement(previewContainer);

    // Sujet seul par défaut (à l'écran comme à l'impression) : le corrigé s'affiche à la demande
    this.showSolutions = false;
    const solBlock = document.getElementById('quiz-solutions-block');
    if (solBlock) { solBlock.style.display = 'none'; solBlock.classList.add('quiz-solutions-hidden'); }
    const btn = document.getElementById('btn-toggle-quiz-solution');
    if (btn) btn.textContent = '👁️ Afficher le Corrigé';

    document.getElementById('quiz-config-screen').style.display = 'none';
    document.getElementById('quiz-preview-screen').style.display = 'block';

    // Défiler vers le haut de la prévisualisation
    previewContainer.scrollTop = 0;

    // Feedback visuel lorsque l'utilisateur a cliqué sur Régénérer
    if (isRegenerating) {
      const cards = previewContainer.querySelectorAll('.quiz-q-card, .quiz-sol-card');
      cards.forEach((c, idx) => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(6px)';
        c.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        setTimeout(() => {
          c.style.opacity = '1';
          c.style.transform = 'translateY(0)';
        }, Math.min(240, 25 * (idx % 10)));
      });

      const banner = document.getElementById('quiz-status-banner');
      if (banner) {
        banner.style.transition = 'all 0.3s ease';
        banner.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.45)';
        banner.style.borderColor = 'var(--primary, #2563eb)';
        banner.innerHTML = `✨ <strong>Nouveau sujet généré avec succès (${levelLabel}) !</strong> De nouvelles valeurs et questions ont été tirées au sort. Bon entraînement !${coverageNotice}`;
        setTimeout(() => {
          if (banner) {
            banner.style.boxShadow = 'none';
          }
        }, 2500);
      }
    }
  }
};
