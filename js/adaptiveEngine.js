/**
 * Moteur algorithmique de la Zone Optimale d'Apprentissage (ZPD / Flow)
 * Gère la montée en difficulté adaptative, l'étayage bienveillant par paliers
 * et le calcul de l'état cognitif en temps réel.
 */

window.MathsAdaptiveEngine = {
  // État de la session en cours
  state: {
    chapterId: null,
    currentTier: 1, // 1: Socle, 2: Guidé, 3: Brevet, 4: Défi Seconde
    consecutiveSuccesses: 0,
    currentExercise: null,
    mistakesOnCurrent: 0,
    usedHintsCount: 0,
    sessionHistory: [] // [{ exerciseId, isCorrect, tier, hintsUsed }]
  },

  getCurrentLevel() {
    const targetCid = this.state.chapterId || (window.MathsApp && window.MathsApp.currentChapterId);
    if (targetCid) {
      const ch = (window.MATHS_CHAPTERS || []).find(c => c.id === targetCid);
      if (ch && ch.level) return ch.level;
      if (targetCid.startsWith('6')) return '6eme';
      if (targetCid.startsWith('5')) return '5eme';
      if (targetCid.startsWith('4')) return '4eme';
      if (targetCid.startsWith('3')) return '3eme';
      if (targetCid.startsWith('2')) return '2nde';
      if (targetCid.startsWith('1')) return '1ere';
      if (targetCid.startsWith('T')) return 'tale';
      if (targetCid.startsWith('L1')) return 'L1';
      if (targetCid.startsWith('L2')) return 'L2';
      if (targetCid.startsWith('L3')) return 'L3';
    }
    if (window.MathsApp && window.MathsApp.currentLevel) {
      return window.MathsApp.currentLevel;
    }
    if (window.MathsStorage && window.MathsStorage.getCurrentLevel) {
      return window.MathsStorage.getCurrentLevel() || '3eme';
    }
    return '3eme';
  },

  getTierDisplayName(tier, level = null) {
    const lvl = level || this.getCurrentLevel();
    const t = parseInt(tier, 10);
    if (lvl === '6eme') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 5ème"
      };
      return names[t] || `Palier ${t}`;
    } else if (lvl === '5eme') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 4ème"
      };
      return names[t] || `Palier ${t}`;
    } else if (lvl === '4eme') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 3ème"
      };
      return names[t] || `Palier ${t}`;
    } else if (lvl === '2nde') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 1ère Spé"
      };
      return names[t] || `Palier ${t}`;
    } else if (lvl === '1ere' || lvl === 'tale' || lvl === 'lycee') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Objectif Bac",
        4: "Palier 4 : Défi & Approfondissement"
      };
      return names[t] || `Palier ${t}`;
    } else if (['L1', 'L2', 'L3', 'licence'].includes(lvl)) {
      const names = {
        1: "Palier 1 : Socle & Définitions",
        2: "Palier 2 : Entraînement & Méthodes",
        3: "Palier 3 : Niveau Examen",
        4: "Palier 4 : Démonstrations & Rigueur"
      };
      return names[t] || `Palier ${t}`;
    } else {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Objectif Brevet",
        4: "Palier 4 : Défi Seconde"
      };
      return names[t] || `Palier ${t}`;
    }
  },

  /**
   * Vérifie si un palier est débloqué pour un chapitre donné.
   * Règle d'or : pour débloquer un palier, il faut d'abord avoir validé/terminé le précédent.
   * Palier 1 toujours débloqué d'office.
   */
  isTierUnlocked(chapterId, tier) {
    const t = parseInt(tier, 10) || 1;
    if (t <= 1) return true; // Palier 1 toujours accessible
    if (!chapterId) return false;

    const progress = window.MathsStorage.getChapterProgress(chapterId);
    const valTiers = progress.validatedTiers || [];
    const successes = progress.successesByTier || {};
    const mastery = progress.mastery || 0;

    // Palier 2 : débloqué si Palier 1 validé (maîtrise >= 25%)
    if (t === 2) {
      return valTiers.includes(1) || mastery >= 25;
    }
    // Palier 3 : débloqué si Palier 2 validé (maîtrise >= 50%)
    if (t === 3) {
      return valTiers.includes(2) || (this.isTierUnlocked(chapterId, 2) && mastery >= 50);
    }
    // Palier 4 : débloqué si Palier 3 validé (maîtrise >= 75%)
    if (t === 4) {
      return valTiers.includes(3) || (this.isTierUnlocked(chapterId, 3) && mastery >= 75);
    }
    return false;
  },

  /**
   * Retourne le palier débloqué le plus élevé pour un chapitre
   */
  getHighestUnlockedTier(chapterId) {
    for (let t = 4; t >= 1; t--) {
      if (this.isTierUnlocked(chapterId, t)) return t;
    }
    return 1;
  },

  // =========================================================================
  // MODÈLE DE PROGRESSION (v2) : validation d'un palier sur fenêtre glissante
  // =========================================================================
  /**
   * Chaque question traitée au palier « frontière » (premier palier non validé) laisse une trace :
   *   1     : juste du premier coup, sans indice
   *   0,75  : juste du premier coup avec un indice demandé (0,5 avec les deux indices)
   *   0,5   : juste au 2e essai (saisie) ; 0,25 au 3e essai
   *   0     : fausse (saisie)
   *   −1/(k−1) : QCM à k choix faux du premier coup, même s'il est ensuite trouvé par élimination
   *           (correction du hasard : un élève qui répond au hasard a une espérance nulle).
   * Chaque question a aussi une pastille (tierMarks) : g = juste du premier coup, h = juste du premier coup
   * avec indice, o = juste après une erreur, r = plusieurs erreurs ou non trouvée.
   * Un palier est validé quand les WINDOW dernières pastilles comptent au moins TARGET bonnes réponses
   * du premier coup (g ou h), ou TARGET + 1 si un indice a été utilisé dans la fenêtre (choix du professeur),
   * avec au moins MIN_ANSWERS questions. Les traces numériques servent aux messages d'aide. L'objectif ne s'abaisse jamais, même après de nombreuses questions
   * (choix du professeur : les paliers montent déjà vite).
   * Un palier validé ne se perd jamais ; la maîtrise affichée vaut 25 % par palier validé
   * plus l'avancement vers l'objectif du palier en cours.
   */
  PROGRESSION: {
    MODEL_VERSION: 2,
    WINDOW: 8,
    TARGET: 6,
    MIN_ANSWERS: 6,
    REVIEW_EVERY: 5, // une question de rappel d'un palier validé toutes les 5 questions
    REVIEW_AFTER_MS: 20 * 3600 * 1000 // rappel d'échauffement si le chapitre n'a pas été travaillé depuis 20 h
  },

  /** Nombre de paliers validés consécutivement depuis le palier 1. */
  countValidatedTiers(p) {
    const v = (p && p.validatedTiers) || [];
    let n = 0;
    while (n < 4 && v.includes(n + 1)) n++;
    return n;
  },

  /**
   * Migration douce d'une progression enregistrée avec l'ancien modèle (gains cumulés plafonnés) :
   * les paliers déjà atteints restent validés et l'avancement dans le palier en cours est conservé
   * sous forme de réussites déjà acquises. Idempotent ; modifie et renvoie `p`.
   */
  ensureProgressModel(p) {
    if (!p) return p;
    const cfg = this.PROGRESSION;
    if (p.tierModel === cfg.MODEL_VERSION && p.tierWindows) return p;
    const mastery = Number.isFinite(p.mastery) ? p.mastery : 0;
    const validated = new Set((p.validatedTiers || []).map(Number).filter(t => t >= 1 && t <= 4));
    [25, 50, 75, 100].forEach((thr, i) => { if (mastery >= thr) validated.add(i + 1); });
    const maxV = validated.size ? Math.max(...validated) : 0;
    for (let t = 1; t <= maxV; t++) validated.add(t);
    p.validatedTiers = [...validated].sort((a, b) => a - b);
    p.tierWindows = { 1: [], 2: [], 3: [], 4: [] };
    p.tierAnswered = { 1: 0, 2: 0, 3: 0, 4: 0 };
    p.tierLastAt = p.tierLastAt || {};
    const vc = this.countValidatedTiers(p);
    if (vc < 4) {
      const inTier = Math.max(0, mastery - 25 * vc);
      const seed = Math.min(cfg.TARGET - 1, Math.ceil((inTier / 25) * cfg.TARGET));
      for (let i = 0; i < seed; i++) p.tierWindows[vc + 1].push(1);
      p.tierAnswered[vc + 1] = seed;
    }
    p.tierModel = cfg.MODEL_VERSION;
    p.mastery = this.computeMastery(p);
    return p;
  },

  /** Pastilles du palier (g, h, o, r), alignées sur les traces ; déduites des traces pour les anciennes données. */
  tierMarksOf(p, tier) {
    const win = (p && p.tierWindows && p.tierWindows[tier]) || [];
    const m = p && p.tierMarks && p.tierMarks[tier];
    return (Array.isArray(m) && m.length === win.length) ? m : win.map(c => this.markFromCredit(c));
  },

  /** Objectif : TARGET bonnes réponses sur les WINDOW dernières, une de plus si un indice a servi dans la fenêtre. */
  getTierTarget(p, tier) {
    const recent = this.tierMarksOf(p, tier).slice(-this.PROGRESSION.WINDOW);
    return this.PROGRESSION.TARGET + (recent.includes('h') ? 1 : 0);
  },

  /** Nombre de bonnes réponses du premier coup (pastilles vertes, claires comprises) dans la fenêtre. */
  windowGood(p, tier) {
    return this.tierMarksOf(p, tier).slice(-this.PROGRESSION.WINDOW).filter(m => m === 'g' || m === 'h').length;
  },

  isTierObjectiveMet(p, tier) {
    const answered = (p.tierAnswered && p.tierAnswered[tier]) || 0;
    return answered >= this.PROGRESSION.MIN_ANSWERS
      && this.windowGood(p, tier) >= this.getTierTarget(p, tier);
  },

  /** Maîtrise affichée (0-100) : 25 % par palier validé + avancement vers l'objectif du palier en cours. */
  computeMastery(p) {
    const vc = this.countValidatedTiers(p);
    if (vc >= 4) return 100;
    const t = vc + 1;
    const frac = Math.max(0, Math.min(1, this.windowGood(p, t) / this.getTierTarget(p, t)));
    return 25 * vc + Math.min(24, Math.floor(25 * frac));
  },

  /** Nombre minimal de bonnes réponses (du premier coup, sans indice) encore nécessaires pour valider `tier`. */
  remainingCorrectFor(p, tier) {
    const win = ((p.tierWindows && p.tierWindows[tier]) || []).slice();
    const marks = this.tierMarksOf(p, tier).slice();
    let answered = (p.tierAnswered && p.tierAnswered[tier]) || 0;
    const sim = { tierWindows: { [tier]: win }, tierMarks: { [tier]: marks }, tierAnswered: { [tier]: answered } };
    for (let k = 0; k <= this.PROGRESSION.WINDOW + this.PROGRESSION.MIN_ANSWERS; k++) {
      if (this.isTierObjectiveMet(sim, tier)) return k;
      win.push(1);
      marks.push('g');
      sim.tierAnswered[tier] = ++answered;
    }
    return this.PROGRESSION.WINDOW;
  },

  /**
   * État lisible de la progression d'un chapitre (pour l'affichage et les messages).
   */
  getTierProgressStatus(chapterId, progressObj = null) {
    const raw = progressObj || window.MathsStorage.getChapterProgress(chapterId);
    const p = this.ensureProgressModel(JSON.parse(JSON.stringify(raw || {})));
    const vc = this.countValidatedTiers(p);
    if (vc >= 4) {
      return { complete: true, validatedCount: 4, tier: 4, mastery: 100, window: [], target: 0, remaining: 0,
        message: 'Tous les paliers sont validés : continue à t\'entraîner librement pour entretenir tes acquis.' };
    }
    const tier = vc + 1;
    const cfg = this.PROGRESSION;
    const fullWin = p.tierWindows[tier] || [];
    const recent = fullWin.slice(-cfg.WINDOW);
    const marks = this.tierMarksOf(p, tier).slice(-cfg.WINDOW);
    const target = this.getTierTarget(p, tier);
    const remaining = this.remainingCorrectFor(p, tier);
    const answered = p.tierAnswered[tier] || 0;
    const goal = tier < 4 ? `débloquer le Palier ${tier + 1}` : 'valider tout le chapitre';
    let message = remaining <= 1
      ? `Encore 1 bonne réponse pour ${goal} !`
      : `Encore ${remaining} bonnes réponses pour ${goal}.`;
    return {
      complete: false, validatedCount: vc, tier, window: recent, marks, target, remaining, answered,
      mastery: this.computeMastery(p),
      objective: `Objectif du Palier ${tier} : ${target} bonnes réponses du premier coup sur les ${cfg.WINDOW} dernières questions${target > cfg.TARGET ? ' (une de plus, car un indice a été utilisé)' : ''}`,
      message
    };
  },

  /**
   * Couleur de la pastille d'une question : g = juste du premier coup, h = juste du premier coup avec indice,
   * o = juste après une erreur, r = juste après plusieurs erreurs, ou pas (encore) trouvée.
   */
  answerMark(isCorrect, mistakesBefore, hintsUsed) {
    if (!isCorrect) return 'r';
    if (mistakesBefore === 0) return hintsUsed > 0 ? 'h' : 'g';
    return mistakesBefore === 1 ? 'o' : 'r';
  },

  /** Pastille déduite d'une trace (anciennes données sans pastilles enregistrées). */
  markFromCredit(c) {
    return c >= 1 ? 'g' : c >= 0.75 ? 'h' : c >= 0.5 ? 'o' : 'r';
  },

  /** Crédit d'une question selon le déroulé (essais, indices, type QCM). */
  answerCredit(exercise, isCorrect, mistakesBefore, hintsUsed) {
    const k = (exercise && exercise.type === 'mcq' && Array.isArray(exercise.options)) ? exercise.options.length : 0;
    const isMcq = k >= 2;
    if (!isCorrect) return isMcq ? -1 / (k - 1) : 0;
    if (mistakesBefore === 0) return hintsUsed >= 2 ? 0.5 : (hintsUsed === 1 ? 0.75 : 1);
    // QCM réussi après une erreur : simple élimination, la trace négative est conservée
    if (isMcq) return -1 / (k - 1);
    return mistakesBefore === 1 ? 0.5 : 0.25;
  },

  /** Palier validé le moins récemment travaillé (révision espacée), parmi les paliers < maxTier. */
  pickReviewTier(p, maxTier) {
    const vc = this.countValidatedTiers(p);
    const candidates = [];
    for (let t = 1; t < maxTier && t <= vc; t++) candidates.push(t);
    if (!candidates.length) return null;
    const last = p.tierLastAt || {};
    candidates.sort((a, b) => (last[a] || 0) - (last[b] || 0));
    return candidates[0];
  },

  /**
   * Initialise ou reprend une session pour un chapitre donné
   */
  startChapterSession(chapterId, forceTier = null) {
    const progress = window.MathsStorage.getChapterProgress(chapterId);
    this.state.chapterId = chapterId;

    let targetTier = forceTier || progress.currentTier || 1;
    if (!this.isTierUnlocked(chapterId, targetTier)) {
      targetTier = this.getHighestUnlockedTier(chapterId);
    }

    this.state.currentTier = targetTier;
    this.state.manualTierSelected = (forceTier && this.isTierUnlocked(chapterId, forceTier)) ? true : false;
    this.state.consecutiveSuccesses = 0;
    this.state.mistakesOnCurrent = 0;
    this.state.usedHintsCount = 0;
    this.state.sessionHistory = [];
    this.state.sessionQuestionCount = 0;

    return this.nextExercise();
  },

  /**
   * Mélange aléatoirement les options d'un QCM pour garantir
   * que la bonne réponse ne soit JAMAIS prévisible ou toujours en 1ère position
   */
  shuffleMcq(exercise) {
    if (!exercise || exercise.type !== 'mcq') {
      return exercise;
    }
    if (!exercise.options && exercise.choices) {
      exercise.options = exercise.choices;
    }
    if (!exercise.options || exercise.options.length <= 1) {
      return exercise;
    }
    let origIndex = exercise.correctIndex;
    if (origIndex === undefined && exercise.answer) {
      origIndex = exercise.options.indexOf(exercise.answer);
      if (origIndex === -1) origIndex = 0;
    } else if (origIndex === undefined) {
      origIndex = 0;
    }

    // Déduplication défensive des options
    const uniqueOptions = [];
    const uniqueExplanations = [];
    let newCorrectIdx = 0;
    exercise.options.forEach((opt, idx) => {
      const existingIdx = uniqueOptions.indexOf(opt);
      if (existingIdx === -1) {
        if (idx === origIndex) newCorrectIdx = uniqueOptions.length;
        uniqueOptions.push(opt);
        if (exercise.explanations) uniqueExplanations.push(exercise.explanations[idx]);
      } else if (idx === origIndex) {
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

    exercise.options = items.map(it => it.opt);
    if (exercise.explanations) {
      exercise.explanations = items.map(it => it.exp);
    }
    exercise.correctIndex = items.findIndex(it => it.isCorrect);
    exercise._mcqShuffled = true;
    return exercise;
  },

  /** Part des exercices tirés dans la banque statique même quand le générateur répond. */
  STATIC_MIX_RATE: 0.15,
  /** Nombre d'énoncés récents mémorisés par chapitre pour éviter les répétitions. */
  RECENT_STATEMENTS_MAX: 12,

  getRecentStatements(chapterId) {
    if (!this._recentStatements) this._recentStatements = {};
    return this._recentStatements[chapterId] || [];
  },

  rememberStatement(chapterId, statement) {
    const list = this.getRecentStatements(chapterId).filter(s => s !== statement);
    list.push(statement);
    this._recentStatements[chapterId] = list.slice(-this.RECENT_STATEMENTS_MAX);
  },

  /**
   * Tire un exercice de la banque statique du chapitre (de préférence du palier courant),
   * en évitant les énoncés récents puis les exercices déjà réussis.
   */
  pickStaticExercise(chapterId, tier, progress, recentStatements = [], freshOnly = false) {
    const capesExos = window.CAPES_EXERCISES && window.CAPES_EXERCISES[chapterId];
    const proofExos = window.PROOF_EXERCISES && window.PROOF_EXERCISES[chapterId];
    const exercises = (window.MATHS_EXERCISES && window.MATHS_EXERCISES[chapterId]) || capesExos || proofExos || [];
    if (!exercises.length) return null;
    let pool = exercises.filter(e => e.tier === tier);
    if (!pool.length) pool = exercises;
    const fresh = pool.filter(e => !recentStatements.includes(e.statement));
    if (fresh.length) pool = fresh;
    // En complément du générateur : ne jamais resservir un énoncé vu récemment (banques d'un seul exercice par palier)
    else if (freshOnly) return null;
    const completedSet = new Set((progress && progress.completed) || []);
    const notDone = pool.filter(e => !completedSet.has(e.id));
    if (notDone.length) pool = notDone;
    return pool[Math.floor(Math.random() * pool.length)];
  },

  /**
   * Sélectionne le prochain exercice optimal selon le pourcentage de maîtrise et l'historique
   * Mode procédural infini : génère de nouvelles valeurs aléatoires à chaque tirage
   */
  nextExercise() {
    if (!this.state.chapterId && window.MathsApp && window.MathsApp.currentChapterId) {
      this.state.chapterId = window.MathsApp.currentChapterId;
    }
    const progress = window.MathsStorage.getChapterProgress(this.state.chapterId);
    const mastery = (progress && progress.mastery !== undefined) ? progress.mastery : 0;
    // Détermination du palier actif pour cet exercice :
    // S'assurer que le palier en cours (state.currentTier ou progress.currentTier) est débloqué
    const maxUnlocked = this.getHighestUnlockedTier(this.state.chapterId);
    let targetTier = this.state.currentTier || (progress ? progress.currentTier : 1) || 1;

    // Si le palier demandé n'est pas/plus débloqué, repli sur le palier max débloqué
    if (!this.isTierUnlocked(this.state.chapterId, targetTier)) {
      targetTier = maxUnlocked;
      this.state.manualTierSelected = false;
    }

    this.state.currentTier = targetTier;

    // Révision espacée : une question de rappel d'un palier déjà validé toutes les REVIEW_EVERY questions,
    // et en échauffement quand le chapitre n'a pas été travaillé depuis longtemps.
    // La question de rappel n'entre pas dans l'objectif du palier en cours (pas de pénalité).
    const cfg = this.PROGRESSION;
    const qIndex = this.state.sessionQuestionCount || 0;
    this.state.sessionQuestionCount = qIndex + 1;
    let genTier = this.state.currentTier;
    let isReview = false;
    if (progress && this.state.currentTier >= 2 && !this.state.skipReviewOnce) {
      const modelP = this.ensureProgressModel(JSON.parse(JSON.stringify(progress)));
      const longBreak = qIndex === 0 && progress.lastPracticedAt && (Date.now() - progress.lastPracticedAt) > cfg.REVIEW_AFTER_MS;
      const periodic = qIndex > 0 && (qIndex % cfg.REVIEW_EVERY) === cfg.REVIEW_EVERY - 1;
      if (longBreak || periodic) {
        const rt = this.pickReviewTier(modelP, this.state.currentTier);
        if (rt) { genTier = rt; isReview = true; }
      }
    }
    this.state.skipReviewOnce = false;

    let candidate = null;
    const chapterId = this.state.chapterId;
    const recent = this.getRecentStatements(chapterId);
    const staticPick = (freshOnly = false) => this.pickStaticExercise(chapterId, genTier, progress, recent, freshOnly);

    // 1. Génération procédurale (nouvelles valeurs à chaque tirage), avec anti-répétition
    //    sur l'historique récent du chapitre et non plus seulement sur la question précédente.
    if (window.MathsGenerators && typeof window.MathsGenerators.generateForChapter === 'function') {
      let randExo = null;
      let isRepeat = false;
      for (let attempt = 0; attempt < 8; attempt++) {
        const candidateExo = window.MathsGenerators.generateForChapter(chapterId, genTier, mastery);
        if (!candidateExo) break;
        randExo = candidateExo;
        isRepeat = recent.includes(candidateExo.statement);
        if (!isRepeat) break;
      }
      if (randExo) {
        randExo.tier = genTier;
        randExo.id = `${chapterId}-dyn-t${genTier}-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        candidate = randExo;
      }
      // Générateur à court d'énoncés nouveaux (ou mélange occasionnel) : puiser dans la banque statique
      if (candidate && (isRepeat || Math.random() < this.STATIC_MIX_RATE)) {
        candidate = staticPick(true) || candidate;
      }
    }

    // 2. Repli catalogue statique si le générateur procédural n'est pas disponible pour ce chapitre
    if (!candidate) {
      candidate = staticPick();
    }

    if (candidate && candidate.statement) {
      this.rememberStatement(chapterId, candidate.statement);
    }

    if (candidate) {
      // Cloner l'exercice pour isoler les options du catalogue
      candidate = JSON.parse(JSON.stringify(candidate));
      // Normaliser choices -> options si nécessaire et mélanger
      if (candidate.type === 'mcq' || (!candidate.type && (candidate.options || candidate.choices))) {
        if (!candidate.type) candidate.type = 'mcq';
        if (!candidate.options && candidate.choices) candidate.options = candidate.choices;
        if (!candidate.choices && candidate.options) candidate.choices = candidate.options;
        if (candidate.correctIndex === undefined && candidate.answer && candidate.options) {
          candidate.correctIndex = candidate.options.indexOf(candidate.answer);
          if (candidate.correctIndex === -1) candidate.correctIndex = 0;
        }
        this.shuffleMcq(candidate);
        if (candidate.correctIndex !== undefined && candidate.options && candidate.options[candidate.correctIndex]) {
          candidate.answer = candidate.options[candidate.correctIndex];
        }
      }
      if (!candidate.hint1 && candidate.hint) {
        candidate.hint1 = candidate.hint;
      }
      if (!candidate.hint2 && candidate.hint1) {
        candidate.hint2 = candidate.hint1;
      }
      if (!candidate.solution && candidate.explanation) {
        candidate.solution = candidate.explanation;
      }
      // Renoter systématiquement l'expression de départ au début du calcul dans la solution
      if (candidate.solution && candidate.statement) {
        candidate.solution = this.formatSolutionWithInitialExpr(candidate.statement, candidate.solution);
      }
    }

    if (candidate) {
      // Les exercices de la banque statique gardent leur palier d'origine ; seul le palier du tirage fait foi
      if (!candidate.tier) candidate.tier = genTier;
      candidate.isReview = isReview && parseInt(candidate.tier, 10) < this.state.currentTier;
    }

    this.state.currentExercise = candidate;
    this.state.mistakesOnCurrent = 0;
    this.state.usedHintsCount = 0;
    this.state.answerEntry = null;

    return candidate;
  },

  /**
   * Forcer manuellement un palier (permet à l'élève de choisir son défi parmi les paliers débloqués)
   */
  setTier(tier) {
    const t = parseInt(tier, 10);
    if (t >= 1 && t <= 4) {
      if (!this.isTierUnlocked(this.state.chapterId, t)) {
        return false; // Palier verrouillé !
      }
      this.state.currentTier = t;
      this.state.manualTierSelected = true;
      this.state.consecutiveSuccesses = 0;
      this.state.skipReviewOnce = true; // la première question après un changement de palier est bien de ce palier
      window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
        p.currentTier = t;
        return p;
      });
      return this.nextExercise();
    }
    return null;
  },

  /**
   * Évalue la réponse fournie par l'élève (true / false).
   * Saisie exacte : voir analyzeAnswer (règles de correction détaillées).
   */
  validateAnswer(userAnswer, exercise) {
    if (!exercise) return false;

    // Type QCM
    if (exercise.type === 'mcq' || exercise.options || exercise.choices) {
      const chosenIndex = parseInt(userAnswer, 10);
      if (!isNaN(chosenIndex) && exercise.correctIndex !== undefined) {
        return chosenIndex === exercise.correctIndex;
      }
      if (userAnswer !== undefined && userAnswer !== null && exercise.options && exercise.correctIndex !== undefined) {
        return String(userAnswer).trim() === String(exercise.options[exercise.correctIndex]).trim();
      }
      if (userAnswer !== undefined && userAnswer !== null && exercise.answer) {
        return String(userAnswer).trim() === String(exercise.answer).trim();
      }
      return false;
    }

    if (exercise.type === 'exact') return this.analyzeAnswer(userAnswer, exercise).correct;
    return false;
  },

  /*
   * ======================================================================================
   * CORRECTION DES SAISIES EXACTES
   * ======================================================================================
   * La réponse attendue (exercise.answer, texte brut) fixe à la fois la VALEUR et la FORME attendues.
   * exercise.acceptedAnswers (facultatif) : autres réponses attendues, jugées avec les mêmes règles.
   *
   * 1. Mots (« oui », « aucune », « isocèle »…) : comparaison sans casse, accents, ponctuation, articles
   *    (le, la, les, l', un, une, des, du, de, d') ni pluriel simple (s final), plus des groupes de
   *    synonymes : oui = vrai ; non = faux ; aucune = ∅ = { } = ensemble vide = pas de solution ;
   *    impossible = n'existe pas ; +∞ = infini…
   * 2. n-uplets « (a;b) » : composante par composante, avec les règles ci-dessous ; « ; » sépare
   *    toujours, « , » seulement entre parenthèses quand l'élève n'a mis aucun « ; ».
   * 3. Nombres et expressions : analyseur sans eval (entiers, décimaux à virgule ou point, fractions,
   *    signes, parenthèses, puissances, √n, √(…), sqrt, racine, π, pi, produits implicites 2π, 3√2).
   *    Égalité des valeurs à 1e-9 près en relatif (erreurs d'arrondi machine seulement) :
   *      - réponse attendue décimale (« 0,06 ») : la valeur arrondie demandée, exactement ;
   *        « 0,0609 » est refusé (un message invite à arrondir, sans compter d'erreur) ;
   *      - réponse attendue exacte (fraction, √, π) : un décimal approché est refusé (message
   *        « valeur exacte attendue »), même avec beaucoup de décimales.
   *    Puis contrôle de la FORME :
   *      - réponse attendue « nombre simple » (entier, décimal, fraction, écriture scientifique,
   *        puissance de 10) : la saisie doit aussi être un nombre simple ; un calcul (« 2*3 »), une
   *        racine (« √4 ») ou une puissance (« 2^3 ») de même valeur est refusé ;
   *      - réponse attendue avec √, π ou une puissance (autre que de 10) : la saisie doit employer
   *        les mêmes symboles, pas plus souvent (« π+π » refusé pour « 2π »), avec une racine
   *        simplifiée (√12 → 2√3), sans racine au dénominateur et des fractions irréductibles,
   *        sauf si la réponse attendue elle-même ne respecte pas l'une de ces règles.
   *    Les écritures équivalentes simplifiées sont acceptées : 2√3/3 = (2/3)√3 = 2*√3/3 ;
   *    3π/4 = 3/4π (lecture de gauche à droite) ; (1+√5)/2 = 1/2 + √5/2.
   */

  /** Égalité numérique « exacte » (1e-9 en relatif : erreurs d'arrondi machine seulement) */
  _closeEnough(u, e) {
    return Math.abs(u - e) <= 1e-9 * Math.abs(e) + 1e-15;
  },

  /** Normalisation commune des chaînes (comparaison textuelle) */
  _normalizeMath(str) {
    let s = String(str);
    let guard = 0;
    // LaTeX imbriqué (\frac{2\sqrt{3}}{3}) : de l'intérieur vers l'extérieur, avant tout retrait d'accolades
    while (/\\sqrt\{[^{}]*\}|\\[dt]?frac\{[^{}]*\}\{[^{}]*\}/.test(s) && guard++ < 20) {
      s = s.replace(/\\sqrt\{([^{}]*)\}/g, '√($1)')
        .replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/, '(($1)/($2))');
    }
    return s
      .trim()
      .toLowerCase()
      .replace(/[−–—]/g, '-')
      .replace(/[÷⁄∕]/g, '/')
      .replace(/\\?frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
      .replace(/,/g, '.')
      .replace(/\s+/g, '')
      .replace(/(\d)[*×·](?=[a-z])/g, '$1'); // 10*x -> 10x
  },

  /** Retire « x = », « S = { … } », accolades et unités usuelles en fin de saisie */
  _stripDecorations(clean) {
    return clean
      .replace(/^s=\s*\{/i, '').replace(/[{}]/g, '')
      .replace(/^[a-zα-ω]=\s*/i, '')
      .replace(/(cm2|cm|mm|dm|m2|m|km\/h|km|deg|°|rad|euros?|€|litres?|l)$/i, '');
  },

  /**
   * Mots : forme canonique (minuscules, sans accents, ponctuation, articles ni pluriel simple),
   * remplacée par le représentant de son groupe de synonymes.
   */
  _canonWords(str) {
    let s = String(str).trim().toLowerCase().replace(/[’`]/g, "'");
    s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    s = s.replace(/\\(emptyset|varnothing)|\{\s*\}|ø/g, '∅').replace(/\\infty/g, '∞');
    s = s.replace(/^s\s*=\s*/, '');
    s = s.replace(/[.!?:«»"()]/g, ' ').replace(/([a-z])-(?=[a-z])/g, '$1 ');
    s = s.replace(/\b(l|d|n|qu|c)'/g, '$1 ');
    const ARTICLES = new Set(['le', 'la', 'les', 'l', 'un', 'une', 'des', 'du', 'de', 'd']);
    const INVARIABLE = new Set(['plus', 'moins', 'sans', 'dans', 'sous', 'vers', 'tres', 'alors', 'jamais', 'toujours', 'fois', 'mais', 'donc', 'pas']);
    const words = s.split(/\s+/).filter((w) => w && !ARTICLES.has(w))
      .map((w) => (w.length > 3 && /s$/.test(w) && !INVARIABLE.has(w) ? w.slice(0, -1) : w));
    s = words.join(' ').replace(/^(reponse |c est |ca |cela |ce )+/, '');
    const GROUPS = {
      oui: ['oui', 'vrai', 'v', 'true', 'yes'],
      non: ['non', 'faux', 'f', 'false', 'no'],
      '∅': ['∅', 'aucune', 'aucun', 'aucune solution', 'aucun solution', 'pas solution', 'sans solution', 'ensemble vide',
        'vide', 'rien', 'il n y a pas solution', 'n y a pas solution', 'y a pas solution', 'zero solution', '0 solution'],
      impossible: ['impossible', 'pas possible', 'c est impossible', 'n existe pas', 'existe pas', 'inexistant', 'inexistante'],
      '+∞': ['+∞', '∞', '+ ∞', '+inf', 'inf', '+infini', 'infini', 'plus infini', '+ infini'],
      '-∞': ['-∞', '- ∞', '-inf', '-infini', 'moins infini', '- infini']
    };
    for (const [rep, list] of Object.entries(GROUPS)) if (list.includes(s)) return rep;
    return s;
  },

  /** La réponse attendue est-elle un mot (ou une expression verbale) ? */
  _isWordAnswer(expected) {
    const c = this._canonWords(expected);
    if (['oui', 'non', '∅', 'impossible', '+∞', '-∞'].includes(c)) return true;
    return /^[a-z' ]+$/.test(c) && c.replace(/[^a-z]/g, '').length >= 2;
  },

  /**
   * Découpe un n-uplet « (a;b) », « A(a ; b) », « {a;b} », « a;b » en composantes (chaînes), ou null.
   * allowComma : « (a, b) » accepté s'il n'y a aucun « ; » (la virgule est sinon décimale).
   */
  _splitTuple(str, allowComma) {
    let s = String(str).trim().replace(/[−–—]/g, '-');
    s = s.replace(/^(s\s*=\s*)?[a-zA-Z]?['’]?\s*[:=]?\s*(?=[([{])/, '');
    s = s.replace(/^[a-zA-Z]['’]?\s*[:=]\s*/, '').trim();
    // parenthèses extérieures appariées : « (1+√5)/2 ; 3 » n'en a pas
    let hasParens = /^[([{].*[)\]}]$/.test(s);
    if (hasParens) {
      let depth = 0;
      for (let k = 0; k < s.length - 1; k++) {
        if ('([{'.includes(s[k])) depth++;
        else if (')]}'.includes(s[k])) depth--;
        if (depth === 0) { hasParens = false; break; }
      }
    }
    if (hasParens) s = s.slice(1, -1).trim();
    const split = (sep) => {
      const parts = [];
      let depth = 0;
      let cur = '';
      for (const ch of s) {
        if ('([{'.includes(ch)) depth++;
        else if (')]}'.includes(ch)) depth--;
        if (ch === sep && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
      }
      parts.push(cur);
      return parts.map((p) => p.trim());
    };
    let parts = split(';');
    if (parts.length === 1) {
      if (!(hasParens && allowComma && s.includes(','))) return null;
      parts = split(',');
    }
    if (parts.length < 2 || parts.length > 4 || parts.some((p) => !p)) return null;
    return parts;
  },

  /** Prépare une saisie pour l'analyseur d'expressions (symboles unifiés), ou null si trop longue */
  _prepMathExpr(input) {
    let s = String(input).trim();
    if (!s || s.length > 120) return null;
    s = s.replace(/[−–—]/g, '-').replace(/[÷⁄∕]/g, '/')
      .replace(/\\left|\\right|\\[,;!: ]/g, ' ')
      .replace(/\\(times|cdot)|[×·∙⋅]/g, '*').replace(/\\div/g, '/')
      .replace(/\\pi/g, 'π');
    let guard = 0;
    // \sqrt{…} puis \frac{…}{…} de l'intérieur vers l'extérieur (imbrications : \frac{2\sqrt{3}}{3})
    while (/\\sqrt\{[^{}]*\}|\\[dt]?frac\{[^{}]*\}\{[^{}]*\}/.test(s) && guard++ < 20) {
      s = s.replace(/\\sqrt\{([^{}]*)\}/g, '√($1)')
        .replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/, '(($1)/($2))');
    }
    s = s.replace(/\\sqrt/g, '√');
    s = s.toLowerCase()
      .replace(/racines?\s*carr[ée]es?(\s*de)?|racines?(\s*de)?|sqrt|rac/g, '√')
      .replace(/pi|π/g, 'π');
    const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' };
    s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g, (m) => '^(' + [...m].map((c) => SUP[c]).join('') + ')');
    s = s.replace(/\*\*/g, '^').replace(/,/g, '.').replace(/[{[]/g, '(').replace(/[}\]]/g, ')').replace(/\s+/g, '');
    return s;
  },

  /**
   * Analyse une expression numérique simple SANS eval. Renvoie null si la saisie n'en est pas une, sinon
   * { value, plain, decimals, sqrt, pi, pow, badRadical, sqrtInDen, unreduced } :
   *   plain : nombre simple (entier, décimal, fraction a/b, écriture scientifique, puissance de 10) ;
   *   decimals : nombre de décimales écrites si plain est un décimal, sinon null ;
   *   sqrt, pi, pow : nombre de racines, de π, de puissances (hors puissances de 10) ;
   *   badRadical : radicande non entier, carré parfait ou divisible par un carré > 1 ;
   *   sqrtInDen : racine au dénominateur ; unreduced : fraction (entière) non irréductible.
   */
  parseMathExpression(input) {
    const s = this._prepMathExpr(input);
    if (!s) return null;
    const toks = [];
    for (let i = 0; i < s.length;) {
      const m = s.slice(i).match(/^(\d+(?:\.\d+)?|\.\d+)/);
      if (m) {
        const raw = m[1];
        toks.push({ t: 'num', v: Number(raw), dec: raw.includes('.') ? raw.split('.')[1].length : 0 });
        i += raw.length;
      } else if ('+-*/^()√π'.includes(s[i])) {
        toks.push({ t: 'op', v: s[i] });
        i++;
      } else {
        return null;
      }
    }
    if (!toks.length) return null;
    let i = 0;
    let depth = 0;
    const peek = () => toks[i];
    const isOp = (t, v) => t && t.t === 'op' && t.v === v;
    const startsAtom = (t) => t && (t.t === 'num' || isOp(t, 'π') || isOp(t, '√') || isOp(t, '('));
    const fail = () => { throw new Error('syntaxe'); };
    const expr = () => {
      if (++depth > 40) fail();
      let n = term();
      while (isOp(peek(), '+') || isOp(peek(), '-')) {
        const op = toks[i++].v;
        n = { t: op === '+' ? 'add' : 'sub', a: n, b: term() };
      }
      depth--;
      return n;
    };
    const term = () => {
      let n = unary();
      for (;;) {
        const t = peek();
        if (isOp(t, '*') || isOp(t, '/')) { i++; n = { t: t.v === '*' ? 'mul' : 'div', a: n, b: unary() }; } else if (startsAtom(t)) n = { t: 'mul', a: n, b: power(), implicit: true };
        else break;
      }
      return n;
    };
    const unary = () => {
      if (isOp(peek(), '-')) { i++; return { t: 'neg', a: unary() }; }
      if (isOp(peek(), '+')) { i++; return unary(); }
      return power();
    };
    const power = () => {
      const base = atom();
      if (isOp(peek(), '^')) { i++; return { t: 'pow', a: base, b: unary() }; }
      return base;
    };
    const atom = () => {
      const t = toks[i++];
      if (!t) fail();
      if (t.t === 'num') return { t: 'num', v: t.v, dec: t.dec };
      if (t.v === 'π') return { t: 'pi' };
      if (t.v === '(') {
        const e = expr();
        if (!isOp(toks[i++], ')')) fail();
        return { t: 'paren', a: e };
      }
      if (t.v === '√') {
        if (isOp(peek(), '-')) fail();
        return { t: 'sqrt', a: atom() };
      }
      return fail();
    };
    let ast;
    try {
      ast = expr();
      if (i !== toks.length) return null;
    } catch (e) {
      return null;
    }

    const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
    const info = { sqrt: 0, pi: 0, pow: 0, badRadical: false, sqrtInDen: false, unreduced: false };
    const strip = (n) => { while (n.t === 'paren') n = n.a; return n; };
    const isInt = (x) => Number.isFinite(x) && Math.abs(x - Math.round(x)) < 1e-9;
    const hasSqrt = (n) => n.t === 'sqrt' || (n.a && hasSqrt(n.a)) || (n.b && hasSqrt(n.b));
    // Contenu entier (pgcd des coefficients entiers) d'un numérateur ; null si inconnu
    const content = (n) => {
      n = strip(n);
      if (n.t === 'num') return n.dec === 0 ? Math.abs(n.v) : null;
      if (n.t === 'neg') return content(n.a);
      if (n.t === 'pi' || n.t === 'sqrt') return 1;
      if (n.t === 'mul') { const a = content(n.a); const b = content(n.b); return a === null || b === null ? null : a * b; }
      if (n.t === 'add' || n.t === 'sub') { const a = content(n.a); const b = content(n.b); return a === null || b === null ? null : gcd(a, b); }
      return null;
    };
    const ev = (n) => {
      switch (n.t) {
        case 'num': return n.v;
        case 'pi': info.pi++; return Math.PI;
        case 'paren': return ev(n.a);
        case 'neg': return -ev(n.a);
        case 'add': return ev(n.a) + ev(n.b);
        case 'sub': return ev(n.a) - ev(n.b);
        case 'mul': return ev(n.a) * ev(n.b);
        case 'div': {
          const d = strip(n.b);
          if (hasSqrt(n.b)) info.sqrtInDen = true;
          if (d.t === 'num' && d.dec === 0) {
            const c = content(n.a);
            if (d.v === 1 || (c !== null && c !== 0 && gcd(c, d.v) > 1)) info.unreduced = true;
          }
          const den = ev(n.b);
          return den === 0 ? NaN : ev(n.a) / den;
        }
        case 'pow': {
          const b = strip(n.a);
          if (!(b.t === 'num' && b.v === 10)) info.pow++;
          const e = ev(n.b);
          if (!Number.isFinite(e) || Math.abs(e) > 400) return NaN;
          return Math.pow(ev(n.a), e);
        }
        case 'sqrt': {
          info.sqrt++;
          const r = ev(n.a);
          if (!(r >= 0)) return NaN;
          if (!isInt(r) || r < 2) info.badRadical = true;
          else {
            const k = Math.round(r);
            for (let f = 2; f * f <= k; f++) if (k % (f * f) === 0) { info.badRadical = true; break; }
          }
          return Math.sqrt(r);
        }
        default: return NaN;
      }
    };
    const value = ev(ast);
    if (!Number.isFinite(value)) return null;

    // Nombre simple : n, -n, a/b, m*10^k, 10^k (parenthèses tolérées)
    const plainNum = (n) => { n = strip(n); return n.t === 'num' || (n.t === 'neg' && plainNum(n.a)); };
    const pow10 = (n) => { n = strip(n); return n.t === 'pow' && strip(n.a).t === 'num' && strip(n.a).v === 10 && plainNum(n.b) && isInt(ev(n.b)); };
    const plain = (n) => {
      n = strip(n);
      if (n.t === 'num' || pow10(n)) return true;
      if (n.t === 'neg') return plain(n.a);
      if (n.t === 'div') return plainNum(n.a) && strip(n.b).t === 'num';
      if (n.t === 'mul' && !n.implicit) return plainNum(n.a) && pow10(n.b);
      return false;
    };
    const isPlain = plain(ast);
    let decimals = null;
    if (isPlain) {
      let n = strip(ast);
      while (n.t === 'neg') n = strip(n.a);
      if (n.t === 'num') decimals = n.dec;
    }
    return Object.assign({ value, plain: isPlain, decimals }, info);
  },

  /**
   * Compare une saisie (nombre ou expression) à la réponse attendue.
   * Renvoie { correct, advice } ; advice (facultatif) : bonne valeur ou valeur proche mais forme à revoir
   * ('radical', 'denominator', 'fraction', 'form', 'rounding', 'approx', 'exact').
   */
  _compareExpressions(userStr, expectedStr, exercise) {
    const E = this.parseMathExpression(expectedStr);
    if (!E) return { correct: false };
    const U = this.parseMathExpression(userStr);
    if (!U) return { correct: false };
    if (this._closeEnough(U.value, E.value)) {
      if (E.plain) return { correct: U.plain };
      if ((U.sqrt > 0) !== (E.sqrt > 0) || (U.pi > 0) !== (E.pi > 0) || (U.pow > 0) !== (E.pow > 0)) {
        return { correct: false, advice: U.plain && U.decimals ? 'exact' : null };
      }
      if (U.sqrt > E.sqrt || U.pi > E.pi || U.pow > E.pow) return { correct: false, advice: 'form' };
      if (U.badRadical && !E.badRadical) return { correct: false, advice: 'radical' };
      if (U.sqrtInDen && !E.sqrtInDen) return { correct: false, advice: 'denominator' };
      if (U.unreduced && !E.unreduced) return { correct: false, advice: 'fraction' };
      return { correct: true };
    }
    // Valeur différente : saisie correcte mais non arrondie, ou approchée au lieu d'exacte ?
    const statement = String((exercise && exercise.statement) || '');
    if (E.plain && E.decimals !== null && (E.decimals > 0 || /arrondi|près|approch|décimale/i.test(statement))) {
      const p = Math.pow(10, E.decimals);
      if (this._closeEnough(Math.round(U.value * p) / p, E.value)) return { correct: false, advice: U.plain ? 'rounding' : 'approx' };
    }
    const terminating = (x) => Number.isFinite(x) && Math.abs(x * 1e6 - Math.round(x * 1e6)) < 1e-6;
    if (U.plain && U.decimals > 0 && (!E.plain || !terminating(E.value)) && Math.abs(U.value - E.value) <= Math.pow(10, -U.decimals)) {
      return { correct: false, advice: 'exact' };
    }
    return { correct: false };
  },

  /** Compare une saisie à UNE réponse attendue (voir les règles plus haut) */
  _matchExpected(userAnswer, expected, exercise) {
    const cleanUser = this._normalizeMath(userAnswer);
    const cleanExpected = this._normalizeMath(expected);
    if (!cleanUser) return { correct: false };
    if (cleanUser === cleanExpected) return { correct: true };

    // Mots et synonymes
    if (this._isWordAnswer(expected)) return { correct: this._canonWords(userAnswer) === this._canonWords(expected) };

    // n-uplets (coordonnées, solutions ordonnées…)
    const expTuple = this._splitTuple(expected, false);
    if (expTuple) {
      const userTuple = this._splitTuple(userAnswer, true);
      if (!userTuple || userTuple.length !== expTuple.length) return { correct: false };
      let advice = null;
      for (let k = 0; k < expTuple.length; k++) {
        const r = this._compareComponent(userTuple[k], expTuple[k], exercise);
        if (!r.correct && !r.advice) return { correct: false };
        if (!r.correct) advice = advice || r.advice;
      }
      return advice ? { correct: false, advice } : { correct: true };
    }
    return this._compareComponent(userAnswer, expected, exercise);
  },

  _compareComponent(user, expected, exercise) {
    const u = this._stripDecorations(this._normalizeMath(user));
    const e = this._stripDecorations(this._normalizeMath(expected));
    if (u === e && u !== '') return { correct: true };
    return this._compareExpressions(u, e, exercise);
  },

  /**
   * Analyse complète d'une saisie exacte : { correct, advice }.
   * advice n'est renseigné que si la réponse est refusée mais mérite un conseil sans pénalité.
   */
  analyzeAnswer(userAnswer, exercise) {
    if (!exercise || userAnswer === null || userAnswer === undefined || exercise.answer === undefined || exercise.answer === null) return { correct: false };
    const expectedList = [exercise.answer].concat(Array.isArray(exercise.acceptedAnswers) ? exercise.acceptedAnswers : []);
    let advice = null;
    for (const expected of expectedList) {
      const r = this._matchExpected(userAnswer, String(expected), exercise);
      if (r.correct) return { correct: true };
      advice = advice || r.advice || null;
    }
    return { correct: false, advice };
  },

  /** Messages des conseils sans pénalité (bonne valeur, forme à revoir) */
  ADVICE_MESSAGES: {
    radical: ['C\'est la bonne valeur, mais la racine carrée n\'est pas simplifiée !',
      'Extrais les carrés parfaits de la racine : par exemple $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$.'],
    denominator: ['C\'est la bonne valeur, mais il reste une racine au dénominateur !',
      'Rends le dénominateur rationnel : par exemple $\\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$.'],
    fraction: ['C\'est la bonne valeur, mais la fraction n\'est pas simplifiée !',
      'Simplifie la fraction : divise numérateur et dénominateur par leur plus grand diviseur commun.'],
    form: ['C\'est la bonne valeur, mais l\'expression n\'est pas réduite !',
      'Regroupe les termes semblables : par exemple $\\pi + \\pi = 2\\pi$ et $\\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$.'],
    rounding: ['Ta valeur est juste, mais elle n\'est pas arrondie comme demandé !',
      'Relis la précision demandée dans l\'énoncé et arrondis ton résultat (même nombre de décimales).'],
    approx: ['On attend ici une valeur approchée !',
      'Donne l\'écriture décimale arrondie comme demandé dans l\'énoncé (avec la calculatrice si besoin).'],
    exact: ['Ta réponse est une valeur approchée : on attend la valeur exacte !',
      'Garde une écriture exacte : fraction (ex. 1/3), racine carrée (ex. 2√3 ou 2sqrt(3)) ou π (ex. 3π/4 ou 3pi/4).']
  },

  /**
   * Ancien analyseur strict (nombres simples), conservé pour compatibilité.
   * Préférer parseMathExpression.
   */
  parseStrictNumber(val) {
    const NUM = '-?\\d+(?:\\.\\d+)?';
    val = String(val).replace(/\*\*/g, '^').replace(/\\times|×|\\cdot|·/g, '*').replace(/[{}()]/g, '');
    let m;
    if (new RegExp(`^${NUM}$`).test(val)) return Number(val);
    if ((m = val.match(new RegExp(`^(${NUM})/(${NUM})$`)))) {
      const den = Number(m[2]);
      return den !== 0 ? Number(m[1]) / den : NaN;
    }
    if ((m = val.match(/^10\^(-?\d+)$/))) return Math.pow(10, Number(m[1]));
    if ((m = val.match(new RegExp(`^(${NUM})\\*10\\^(-?\\d+)$`)))) {
      return Number(m[1]) * Math.pow(10, Number(m[2]));
    }
    return NaN;
  },

  /**
   * Vérifie si l'élève a saisi une fraction exacte numériquement mais non irréductible
   */
  checkUnsimplifiedFraction(userAnswer, exercise) {
    if (!exercise || exercise.type !== 'exact' || userAnswer === null || userAnswer === undefined) return null;
    const cleanUser = this._stripDecorations(this._normalizeMath(userAnswer));
    const cleanExpected = this._stripDecorations(this._normalizeMath(exercise.answer));

    const fracMatch = cleanUser.match(/^(-?[0-9]+)\/([0-9]+)$/);
    if (!fracMatch) return null;

    const num = parseInt(fracMatch[1], 10);
    const den = parseInt(fracMatch[2], 10);
    if (den === 0) return null;

    const userVal = num / den;
    const parsedExpected = this.parseMathExpression(cleanExpected);
    const expVal = parsedExpected && parsedExpected.plain ? parsedExpected.value : NaN;

    if (!isNaN(userVal) && !isNaN(expVal) && this._closeEnough(userVal, expVal)) {
      const gcd = (a, b) => {
        a = Math.abs(Math.round(a));
        b = Math.abs(Math.round(b));
        while (b) { const t = b; b = a % b; a = t; }
        return a;
      };
      const g = gcd(num, den);
      // Non irréductible si gcd > 1 ou si dénominateur simplifiable en entier (ex: 4/2 = 2, 6/1 = 6)
      if (g > 1 || (den !== 1 && num % den === 0)) {
        const simpNum = num / g;
        const simpDen = den / g;
        return {
          isUnsimplified: true,
          userFraction: `${num}/${den}`,
          simplifiedFraction: simpDen === 1 ? `${simpNum}` : `${simpNum}/${simpDen}`
        };
      }
    }
    return null;
  },

  /**
   * Traite la soumission et met en œuvre l'algorithme ZPD
   */
  submitAnswer(userAnswer) {
    const exercise = this.state.currentExercise;
    if (!exercise) return null;

    if (!exercise.id) {
      exercise.id = `${this.state.chapterId}-q-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    if (!exercise.tier) {
      exercise.tier = this.state.currentTier || 1;
    }

    // Détection bienveillante : fraction juste mais non simplifiée au maximum
    const unsimplifiedInfo = this.checkUnsimplifiedFraction(userAnswer, exercise);
    if (unsimplifiedInfo) {
      return {
        isCorrect: false,
        needsSimplification: true,
        feedback: "C'est la bonne fraction, mais il faut la simplifier !",
        userFraction: unsimplifiedInfo.userFraction
      };
    }

    // Détection bienveillante : bonne valeur sous une forme à revoir (racine non simplifiée, valeur
    // approchée au lieu d'exacte, arrondi non fait…) : conseil sans compter d'erreur
    if (exercise.type === 'exact') {
      const analysis = this.analyzeAnswer(userAnswer, exercise);
      const msg = analysis.advice && this.ADVICE_MESSAGES[analysis.advice];
      if (!analysis.correct && msg) {
        return {
          isCorrect: false,
          needsSimplification: true,
          adviceKind: analysis.advice,
          feedback: msg[0],
          adviceText: msg[1]
        };
      }
    }

    const isCorrect = this.validateAnswer(userAnswer, exercise);

    this.state.sessionHistory.push({
      exerciseId: exercise.id,
      isCorrect,
      tier: this.state.currentTier,
      hintsUsed: this.state.usedHintsCount
    });

    // --- Trace de la question dans le modèle de progression (fenêtre glissante par palier) ---
    // La trace est créée dès la première soumission (passer à la question suivante après une erreur
    // ne l'efface donc pas), puis améliorée si l'élève corrige sa réponse.
    const mistakesBefore = this.state.mistakesOnCurrent;
    const hintsUsed = this.state.usedHintsCount;
    const credit = this.answerCredit(exercise, isCorrect, mistakesBefore, hintsUsed);
    const entryTier = exercise.isReview
      ? (parseInt(exercise.tier, 10) || 1)
      : (parseInt(this.state.currentTier, 10) || 1);
    const isReview = !!exercise.isReview;
    const prevValidated = new Set(window.MathsStorage.getChapterProgress(this.state.chapterId).validatedTiers || []);
    let newlyValidatedTiers = [];
    let masteryPercent = 0;
    let frontierBefore = 1;
    let supportMessage = '';

    const firstSubmission = !this.state.answerEntry;
    let prevPracticedAt = null;
    const progressAfter = window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
      this.ensureProgressModel(p);
      prevPracticedAt = p.lastPracticedAt || null;
      frontierBefore = this.countValidatedTiers(p) + 1;
      // Sans-faute : possible seulement pour un chapitre commencé à 0 %, perdu à la première erreur
      // ou au premier indice (choix du professeur : ni erreur ni indice)
      if (typeof p.flawless !== 'boolean') {
        p.flawless = !(p.attempts > 0) && !(p.mastery > 0) && !(p.validatedTiers || []).length;
      }
      if (!isCorrect || hintsUsed > 0) p.flawless = false;
      p.attempts = (p.attempts || 0) + 1;
      p.lastPracticedAt = Date.now();
      p.tierLastAt = p.tierLastAt || {};
      p.tierLastAt[entryTier] = Date.now();
      const win = p.tierWindows[entryTier] || (p.tierWindows[entryTier] = []);
      // Pastilles (couleur de chaque question), alignées sur la fenêtre des traces
      p.tierMarks = p.tierMarks || {};
      let marks = p.tierMarks[entryTier];
      if (!Array.isArray(marks) || marks.length !== win.length) marks = p.tierMarks[entryTier] = win.map(c => this.markFromCredit(c));
      const mark = this.answerMark(isCorrect, mistakesBefore, hintsUsed);
      if (!this.state.answerEntry) {
        win.push(Math.round(credit * 100) / 100);
        marks.push(mark);
        p.tierAnswered[entryTier] = (p.tierAnswered[entryTier] || 0) + 1;
        this.state.answerEntry = { tier: entryTier };
      } else if (isCorrect && win.length) {
        win[win.length - 1] = Math.max(win[win.length - 1], Math.round(credit * 100) / 100);
        const rank = { r: 0, o: 1, h: 2, g: 3 };
        if (rank[mark] > rank[marks[marks.length - 1]]) marks[marks.length - 1] = mark;
      }
      // On garde un peu d'historique au-delà de la fenêtre (affichage / analyse), sans croissance infinie
      if (win.length > 2 * this.PROGRESSION.WINDOW) {
        const cut = win.length - 2 * this.PROGRESSION.WINDOW;
        win.splice(0, cut);
        marks.splice(0, cut);
      }

      if (isCorrect) {
        if (!/-dyn-|-gen-|fallback/.test(exercise.id) && !p.completed.includes(exercise.id)) {
          p.completed.push(exercise.id);
        }
        p.successes = (p.successes || 0) + 1;
        p.streak = (p.streak || 0) + 1;
        p.mistakeStreak = 0;
        p.successesByTier = p.successesByTier || { 1: 0, 2: 0, 3: 0, 4: 0 };
        p.successesByTier[entryTier] = (p.successesByTier[entryTier] || 0) + 1;
      } else {
        p.streak = 0;
        p.mistakeStreak = (p.mistakeStreak || 0) + 1;
      }

      // Validation du palier frontière : sur une bonne réponse, un seul palier à la fois,
      // jamais de rétrogradation
      const frontier = this.countValidatedTiers(p) + 1;
      if (isCorrect && frontier <= 4 && entryTier === frontier && this.isTierObjectiveMet(p, frontier)) {
        p.validatedTiers = [...new Set([...(p.validatedTiers || []), frontier])].sort((a, b) => a - b);
      }
      p.validatedTiers.forEach(t => { if (!prevValidated.has(t)) newlyValidatedTiers.push(t); });
      p.mastery = this.computeMastery(p);
      masteryPercent = p.mastery;

      // Séquence difficile sur le palier en cours : on propose de l'aide, sans rien retirer
      const recent = (p.tierWindows[frontier] || []).slice(-5);
      if (!isCorrect && entryTier === frontier && recent.length >= 5 && recent.reduce((s, c) => s + Math.max(0, c), 0) <= 1) {
        supportMessage = frontier > 1
          ? 'Ce palier résiste un peu : relis le cours ou consolide le palier précédent. Tu ne perds aucun palier déjà validé.'
          : 'Ce palier résiste un peu : relis le cours et utilise les indices, c\'est ainsi qu\'on progresse. Chaque réussite compte.';
      }
      return p;
    });

    // Compteurs des badges à niveaux (js/badges.js)
    if (window.MathsBadges) {
      const chap = (window.MATHS_CHAPTERS || []).find(c => c.id === this.state.chapterId);
      window.MathsBadges.recordAnswer({
        chapterId: this.state.chapterId,
        domain: chap ? chap.domain : null,
        isCorrect, firstSubmission, mistakesBefore, hintsUsed, prevPracticedAt,
        newlyValidated: newlyValidatedTiers.map(t => ({ tier: t, marks: (progressAfter.tierMarks || {})[t] || [] }))
      });
    }

    const status = this.getTierProgressStatus(this.state.chapterId, progressAfter);
    const progressMessage = isReview
      ? `Question de rappel du Palier ${entryTier} : elle entretient tes acquis sans modifier l'objectif du palier en cours. ${status.message}`
      : status.message;

    if (isCorrect) {
      // --- RÉUSSITE ---
      this.state.consecutiveSuccesses++;

      // Points d'expérience selon le palier ; légère retenue par indice ou essai supplémentaire
      const basePoints = { 1: 10, 2: 15, 3: 25, 4: 40 }[entryTier] || 10;
      const penalty = (hintsUsed + mistakesBefore) * 3;
      const xpEarned = Math.max(5, basePoints - penalty);
      const xpResult = window.MathsStorage.addXp(xpEarned);

      let leveledUp = false;
      let levelUpMessage = '';
      let unlockedTier = null;
      let tierCapReached = false;
      let tierCapMessage = '';
      let nextTierToAdvance = null;

      if (newlyValidatedTiers.length > 0) {
        const maxValidated = Math.max(...newlyValidatedTiers);
        leveledUp = true;
        if (maxValidated < 4) {
          const nextUnlocked = maxValidated + 1;
          unlockedTier = nextUnlocked;
          this.state.currentTier = nextUnlocked;
          this.state.manualTierSelected = true; // Bascule sur le palier supérieur pour la question suivante
          window.MathsStorage.updateChapterProgress(this.state.chapterId, p => { p.currentTier = nextUnlocked; return p; });
          levelUpMessage = `🚀 Bravo ! Tu as validé le Palier ${maxValidated} et débloqué le ${this.getTierDisplayName(nextUnlocked)} !`;
        } else {
          levelUpMessage = `👑 Félicitations ! Tu as validé tous les paliers et maîtrisé cette notion à 100% !`;
        }
      } else if (!isReview && entryTier < frontierBefore && frontierBefore <= 4) {
        // Entraînement volontaire sur un palier déjà validé
        tierCapReached = true;
        nextTierToAdvance = frontierBefore;
        tierCapMessage = `Palier ${entryTier} déjà validé : c'est une bonne révision ! Pour faire progresser ta maîtrise, passe au Palier ${frontierBefore}.`;
      }

      const newlyUnlockedBadges = this.checkBadges(xpResult, masteryPercent);

      return {
        isCorrect: true,
        leveledUp,
        levelUpMessage,
        newTier: this.state.currentTier,
        unlockedTier,
        newlyValidatedTiers,
        newlyUnlockedBadges,
        tierCapReached,
        tierCapMessage,
        nextTierToAdvance,
        xpEarned,
        totalXp: xpResult.xp,
        userLevel: xpResult.level,
        leveledUpProfile: xpResult.leveledUp,
        mastery: masteryPercent,
        credit,
        isReview,
        progress: status,
        progressMessage: leveledUp ? (status.complete ? '' : status.objective + '.') : progressMessage,
        solution: this.formatSolutionWithInitialExpr(exercise.statement, exercise.solution),
        feedback: ({
          g: "Bravo ! Réponse correcte.",
          h: "Réponse correcte ! (avec un indice : il faut alors 7 bonnes réponses sur 8 pour valider le palier)",
          o: "Réponse correcte ! (trouvée après une erreur : elle ne compte pas pour valider le palier)",
          r: "Réponse correcte ! (trouvée après plusieurs erreurs : elle ne compte pas pour valider le palier)"
        })[this.answerMark(true, mistakesBefore, hintsUsed)]
      };
    }

    // --- ERREUR / ÉCHAFAUDAGE BIENVEILLANT ---
    this.state.mistakesOnCurrent++;
    this.state.consecutiveSuccesses = 0;
    const common = {
      isCorrect: false,
      mastery: masteryPercent,
      credit,
      isReview,
      progress: status,
      progressMessage,
      supportMessage
    };

    if (this.state.mistakesOnCurrent === 1) {
      return Object.assign(common, {
        stage: 'hint1',
        hint: exercise.hint1,
        message: "Pas tout à fait ! Voici un coup de pouce méthodologique pour t'aider à réessayer :"
      });
    }
    if (this.state.mistakesOnCurrent === 2) {
      return Object.assign(common, {
        stage: 'hint2',
        hint: exercise.hint2,
        message: "Toujours pas ! Voici un rappel essentiel de cours ou de formule pour débloquer la situation :"
      });
    }
    const canStepDown = this.state.currentTier > 1;
    return Object.assign(common, {
      stage: 'solution',
      solution: this.formatSolutionWithInitialExpr(exercise.statement, exercise.solution),
      message: "Voici la correction détaillée étape par étape pour bien comprendre le raisonnement.",
      canStepDown,
      stepDownMessage: canStepDown ? "Si cette notion te paraît difficile, tu peux revenir au palier précédent pour consolider tes bases en douceur." : null
    });
  },

  /**
   * L'élève demande volontairement un indice
   */
  requestHint(hintNumber) {
    const exercise = this.state.currentExercise;
    if (!exercise) return null;
    this.state.usedHintsCount++;
    // Un indice fait perdre le trophée Grand Maître (sans erreur ni indice), même si la question est ensuite passée
    if (this.state.chapterId && window.MathsStorage) {
      window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
        if (typeof p.flawless !== 'boolean') p.flawless = !(p.attempts > 0) && !(p.mastery > 0) && !(p.validatedTiers || []).length;
        p.flawless = false;
        return p;
      });
    }
    if (hintNumber === 1) {
      if (exercise.hint1 && exercise.hint1.trim()) return exercise.hint1;
      return "Observe bien les données de l'énoncé, repère les mots-clés et commence par appliquer les règles opératoires prioritaires.";
    }
    if (hintNumber === 2) {
      if (exercise.hint2 && exercise.hint2.trim()) return exercise.hint2;
      // Fallback 1: Si le cours du chapitre existe dans window.MATHS_COURSES
      const course = (window.MATHS_COURSES || {})[this.state.chapterId];
      if (course) {
        if (course.traps && course.traps.length > 0) {
          const trap = course.traps[0];
          const kp = (course.keyPoints && course.keyPoints[0]) ? `\n\n**Règle clé :**\n${course.keyPoints[0].content}` : '';
          return `**Conseil du cours (${course.title || this.state.chapterId}) :**\n${trap}${kp}`;
        }
        if (course.keyPoints && course.keyPoints.length > 0) {
          return `**Propriété essentielle (${course.title || this.state.chapterId}) :**\n${course.keyPoints[0].content}`;
        }
      }
      // Fallback 2: Si l'exercice a une explication ou un indice 1
      if (exercise.explanation) {
        return `**Rappel méthodologique :**\n${exercise.explanation}`;
      }
      return `**Rappel de cours :**\nPense à appliquer les définitions et propriétés fondamentales du chapitre. Tu peux également consulter l'onglet **📖 Cours** pour retrouver toutes les formules complètes !`;
    }
    return exercise.hint1;
  },

  /**
   * Calcule l'indicateur d'état cognitif ZPD en temps réel
   */
  getZpdStatus() {
    const history = this.state.sessionHistory.slice(-5); // 5 derniers exercices
    if (history.length < 2) {
      return {
        zone: 'flow',
        label: "Zone Optimale d'Apprentissage",
        description: "Exercices adaptés à ton niveau en cours d'évaluation.",
        badgeClass: "badge-flow"
      };
    }

    const successes = history.filter(h => h.isCorrect).length;
    const rate = successes / history.length;

    if (rate >= 0.8 && this.state.consecutiveSuccesses >= 2) {
      return {
        zone: 'comfort',
        label: "Zone de Confort (Très facile)",
        description: "Tu réussis sans hésiter. Monte de palier pour un défi plus stimulant !",
        badgeClass: "badge-comfort"
      };
    } else if (rate <= 0.4 && this.state.mistakesOnCurrent >= 2) {
      return {
        zone: 'frustration',
        label: "Zone de Consolidation",
        description: "Les difficultés s'accumulent. Utilise les rappels de cours ou reviens au palier socle.",
        badgeClass: "badge-frustration"
      };
    } else {
      return {
        zone: 'flow',
        label: "Zone Optimale (Flow)",
        description: "Défi équilibré : tu apprends efficacement et avec stimulation !",
        badgeClass: "badge-flow"
      };
    }
  },

  getChapterRankTitle(chapter, tier) {
    const ranks = {
      1: 'Novice',
      2: 'Apprenti',
      3: 'Chevalier',
      4: 'Maître',
      5: 'Grand Maître'
    };
    const rank = ranks[tier] || 'Explorateur';
    if (!chapter) return `${rank} des Maths`;

    const specialNotions = {
      // 6ème
      '6N1': 'des Décimaux',
      '6N2': 'des Encadrements',
      '6N3': 'des Additions',
      '6N4': 'des Multiplications',
      '6N5': 'des Divisions',
      '6N6': 'des Fractions',
      '6N7': 'du Calcul Fractionnaire',
      '6N8': 'de l\'Algèbre',
      '6P1': 'de la Proportionnalité',
      '6M1': 'des Périmètres',
      '6M2': 'des Aires',
      '6M3': 'des Volumes',
      '6M4': 'des Durées',
      '6G1': 'des Droites',
      '6G2': 'de la Symétrie',
      '6G3': 'des Angles',
      '6G4': 'des Triangles',
      '6G5': 'de l\'Espace',
      '6D1': 'des Données',
      '6D2': 'des Probabilités',
      '6A1': 'Codeur Scratch',

      // 3ème
      'N1': 'des Fractions',
      'N2': 'du Calcul Littéral',
      'N3': 'des Puissances',
      'N4': 'des Équations',
      'N5': 'Arithméticien',
      'G0': 'Pythagoricien',
      '3G0': 'Pythagoricien',
      'G1': 'Thalésien',
      'G2': 'Trigonomètre',
      'G3': 'des Homothéties',
      'G4': 'de la Sphère',
      'G5': 'de la Géométrie 3D',
      'G6': 'des Rotations',
      'G7': 'des Triangles',
      'Org1': 'des Fonctions',
      'Org2': 'Statisticien',
      'Org3': 'des Fonctions Affines',
      'Org4': 'des Probabilités',
      'Algo': 'Codeur Scratch',

      // 4ème
      '4N1': 'des Relatifs',
      '4N2': 'des Fractions',
      '4N3': 'des Puissances',
      '4N4': 'des Racines Carrées',
      '4N5': 'du Calcul Littéral',
      '4G1': 'Pythagoricien',
      '4G2': 'du Cercle Circonscrit',
      '4G3': 'des Translations',
      '4G4': 'des Pyramides',
      '4D1': 'Statisticien',
      '4D2': 'des Probabilités',
      '4P1': 'des Pourcentages',
      '4P2': 'des Fonctions',
      '4A1': 'Codeur Scratch',

      // 5ème
      '5N1': 'des Priorités',
      '5N2': 'des Relatifs',
      '5N3': 'des Fractions',
      '5N4': 'des Puissances',
      '5N5': 'du Calcul Littéral',
      '5G1': 'du Repérage',
      '5G2': 'des Symétries',
      '5G3': 'des Angles',
      '5G4': 'des Triangles',
      '5G5': 'des Parallélogrammes',
      '5G6': 'des Solides & Volumes',
      '5D1': 'Statisticien',
      '5D2': 'des Probabilités',
      '5P1': 'de la Proportionnalité',
      '5P2': 'des Tableaux',
      '5A1': 'Codeur Scratch'
    };

    let notion = specialNotions[chapter.id];
    if (!notion) {
      if (chapter.shortTitle) {
        if (/^[aeiouyéèê]/i.test(chapter.shortTitle)) {
          notion = `de l'${chapter.shortTitle}`;
        } else {
          notion = `des ${chapter.shortTitle}`;
        }
      } else {
        notion = chapter.badge || 'des Mathématiques';
      }
    }

    return `${rank} ${notion}`;
  },

  /**
   * Vérifie et débloque les badges de réussite et trophées par palier
   */
  checkBadges(xpResult, masteryPercent = 0) {
    const chapterId = this.state.chapterId;
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    const newlyUnlockedBadges = [];

    // 1. Badges d'étape globale
    if (window.MathsStorage.unlockBadge('first_step', 'Premier Pas', 'Avoir complété son premier exercice avec succès.', '🎯')) {
      newlyUnlockedBadges.push({ kind: 'general', id: 'first_step', title: 'Premier Pas', desc: 'Avoir complété son premier exercice avec succès.', icon: '🎯' });
    }

    if (xpResult && xpResult.level >= 3) {
      if (window.MathsStorage.unlockBadge('level_3', 'Apprenti Géomètre', "Atteindre le Niveau 3 d'expérience.", '📐')) {
        newlyUnlockedBadges.push({ kind: 'general', id: 'level_3', title: 'Apprenti Géomètre', desc: "Atteindre le Niveau 3 d'expérience.", icon: '📐' });
      }
    }

    if (xpResult && xpResult.level >= 5) {
      if (window.MathsStorage.unlockBadge('level_5', 'Maître du Calcul', "Atteindre le Niveau 5 d'expérience.", '⚡')) {
        newlyUnlockedBadges.push({ kind: 'general', id: 'level_5', title: 'Maître du Calcul', desc: "Atteindre le Niveau 5 d'expérience.", icon: '⚡' });
      }
    }

    if (this.state.currentTier === 4) {
      const lvl = this.getCurrentLevel();
      let tier4Title = 'Cap vers la Seconde';
      let tier4Desc = 'Avoir débloqué le palier 4 (Défi Seconde).';
      if (lvl === '6eme') {
        tier4Title = 'Cap vers la 5ème';
        tier4Desc = 'Avoir débloqué le palier 4 (Défi 5ème).';
      } else if (lvl === '5eme') {
        tier4Title = 'Cap vers la 4ème';
        tier4Desc = 'Avoir débloqué le palier 4 (Défi 4ème).';
      } else if (lvl === '4eme') {
        tier4Title = 'Cap vers la 3ème';
        tier4Desc = 'Avoir débloqué le palier 4 (Défi 3ème).';
      } else if (lvl === '2nde') {
        tier4Title = 'Cap vers la 1ère Spé';
        tier4Desc = 'Avoir débloqué le palier 4 (Défi 1ère Spé).';
      } else if (lvl === '1ere' || lvl === 'tale' || lvl === 'lycee') {
        tier4Title = 'Excellence Baccalauréat';
        tier4Desc = 'Avoir débloqué le palier 4 (Défi & Approfondissement).';
      } else if (['L1', 'L2', 'L3', 'licence'].includes(lvl)) {
        tier4Title = 'Rigueur Universitaire';
        tier4Desc = 'Avoir débloqué le palier 4 (Démonstrations & Rigueur).';
      }
      if (window.MathsStorage.unlockBadge('tier_4_unlocked', tier4Title, tier4Desc, '🚀')) {
        newlyUnlockedBadges.push({ kind: 'tier', tier: 4, id: 'tier_4_unlocked', title: tier4Title, desc: tier4Desc, icon: '🚀', chapter });
      }
    }

    // 2. Trophées et Rangs honorifiques par Palier (Novice, Apprenti, Chevalier, Maître)
    if (chapter) {
      const p = window.MathsStorage.getChapterProgress(chapterId);
      const valTiers = p.validatedTiers || [];

      // Déblocage strict demandé :
      // - Si tout le palier 1 est validé -> débloque Novice
      // - Si tout le palier 2 est validé -> débloque Apprenti
      // - Si tout le palier 3 est validé -> débloque Chevalier
      // - Pour Maître -> il faut 100% de la notion
      const tiersToUnlock = [];
      if (valTiers.includes(1) || masteryPercent >= 25 || p.mastery >= 25) tiersToUnlock.push(1);
      if (valTiers.includes(2) || masteryPercent >= 50 || p.mastery >= 50) tiersToUnlock.push(2);
      if (valTiers.includes(3) || masteryPercent >= 75 || p.mastery >= 75) tiersToUnlock.push(3);
      if (masteryPercent >= 100 || p.mastery >= 100) tiersToUnlock.push(4);

      tiersToUnlock.forEach(t => {
        const badgeId = `${chapterId}_tier_${t}`;
        const title = this.getChapterRankTitle(chapter, t);
        const icon = { 1: '🥉', 2: '🥈', 3: '🥇', 4: '💎' }[t];
        const desc = t === 4 
          ? `100% de maîtrise atteint sur ${chapter.shortTitle || chapter.title}`
          : `Validation du Palier ${t} (${chapter.shortTitle || chapter.title})`;

        const newlyUnlocked = window.MathsStorage.unlockBadge(badgeId, title, desc, icon);
        if (newlyUnlocked) {
          newlyUnlockedBadges.push({
            kind: 'rank',
            tier: t,
            badgeId,
            title,
            desc,
            icon,
            chapter
          });
        }
      });

      // (L'ancien badge « Grand Maître » à 100 % est remplacé par le trophée sans faute ci-dessous ;
      //  100 % reste récompensé par le rang 💎 Maître.)

      // Trophée supérieur « Grand Maître » : chapitre mené de 0 % à 100 % sans aucune erreur
      if ((masteryPercent >= 100 || p.mastery >= 100) && p.flawless === true) {
        const perfectId = `${chapterId}_perfect`;
        const perfectTitle = this.getChapterRankTitle(chapter, 5);
        const perfectDesc = `Chapitre ${chapter.shortTitle || chapter.title} réussi de 0 % à 100 % sans aucune erreur ni indice.`;
        if (window.MathsStorage.unlockBadge(perfectId, perfectTitle, perfectDesc, '🌟')) {
          newlyUnlockedBadges.push({ kind: 'rank', tier: 5, badgeId: perfectId, title: perfectTitle, desc: perfectDesc, icon: '🌟', chapter });
        }
      }
    }

    // 2 bis. Badges à niveaux (Bronze → Légende), évalués après les trophées
    if (window.MathsBadges) {
      window.MathsBadges.evaluate().forEach(u => newlyUnlockedBadges.push({ kind: 'badge', id: u.def.id, upgrade: u }));
    }

    // 3. Badges de régularité quotidienne (Daily Streak)
    if (xpResult && xpResult.newlyUnlockedStreakBadges && xpResult.newlyUnlockedStreakBadges.length > 0) {
      newlyUnlockedBadges.push(...xpResult.newlyUnlockedStreakBadges);
    }

    return newlyUnlockedBadges;
  },

  /**
   * Garantit que l'explication / solution détaillée renote systématiquement l'expression de départ
   * au tout début de la chaîne de calculs (ex: E = 2 \times 5/7 = (2*5)/7 = 10/7)
   * et élimine les doublons stricts en fin d'égalités.
   */
  formatSolutionWithInitialExpr(statement, solution) {
    if (!statement || !solution || typeof solution !== 'string') return solution;

    // 1. Nettoyer les doublons stricts en chaîne d'égalités (ex: "= \frac{10}{7} = \frac{10}{7}" ou "= 5 = 5")
    let cleanedSol = solution;
    let prev;
    do {
      prev = cleanedSol;
      cleanedSol = cleanedSol.replace(/=\s*(\\frac\{[^{}]+\}\{[^{}]+\}|-?\d+)\s*=\s*\1(?=[\s$])/g, "= $1");
    } while (cleanedSol !== prev);

    // Fonction d'échappement pour regex
    const escapeRegex = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    // 2. Expression nommée dans l'énoncé : $$E = ...$$ ou $A = ...$ ou $$f(x) = ...$$
    const namedMatch = statement.match(/(?:\$\$|\$)\s*([A-Za-z](?:\([a-z]\))?|[A-Za-z]{1,3})\s*=\s*([^$\n=]+?)\s*(?:\$\$|\$)/);
    if (namedMatch) {
      const varName = namedMatch[1].trim();
      const initialRHS = namedMatch[2].trim();

      // Pour une valeur numérique d'expression littérale, l'expression avec x
      // n'est pas égale à son calcul après remplacement de x. On rappelle donc
      // l'expression de départ séparément, puis on garde la chaîne de calcul substituée.
      const substitutionMatch = statement.match(/\bpour\s+\$?([a-z])\$?\s*=\s*\$?(-?\d+)/i);
      if (substitutionMatch && new RegExp(`\\b${escapeRegex(substitutionMatch[1])}\\b`).test(initialRHS)) {
        const startLabel = `**Expression de départ :** $${varName} = ${initialRHS}$.`;
        return cleanedSol.includes('**Expression de départ :**')
          ? cleanedSol
          : `${startLabel}\n\n${cleanedSol}`;
      }

      if (initialRHS.length >= 1) {
        // Trouver la première occurrence de $$varName = ou $varName = dans la solution
        const solRegex = new RegExp("((?:\\$\\$|\\$)\\s*" + escapeRegex(varName) + "\\s*=\\s*)([^$=]+?)(?=\\s*=|\\s*(?:\\$\\$|\\$))", "");
        const match = cleanedSol.match(solRegex);
        if (match) {
          const fullMatch = match[0];
          const prefix = match[1];
          const firstTerm = match[2].trim();
          const normInitial = initialRHS.replace(/\s+/g, '');
          const normFirst = firstTerm.replace(/\s+/g, '');

          // Si le premier terme de la solution ne commence pas déjà par l'expression initiale
          if (!normFirst.startsWith(normInitial) && !normInitial.startsWith(normFirst)) {
            cleanedSol = cleanedSol.replace(fullMatch, () => {
              const delim = prefix.startsWith('$$') ? '$$' : '$';
              return `${delim}${varName} = ${initialRHS} = ${firstTerm}`;
            });
          }
        }
      }
      return cleanedSol;
    }

    // 3. Expression anonyme dans l'énoncé (sans nom de variable) : ex: "Calculer : $$2 + 3 \times 4$$"
    const anonMatch = statement.match(/\$\$\s*([^$\n=]+?)\s*\$\$/);
    if (anonMatch) {
      const initialExpr = anonMatch[1].trim();
      if (/[\+\-\*\/\\^]/.test(initialExpr) && initialExpr.length > 2) {
        const solAnonRegex = /^(\s*\$\$\s*)([^$=]+?)(?=\s*=)/;
        const m = cleanedSol.match(solAnonRegex);
        if (m) {
          const firstTerm = m[2].trim();
          const normInitial = initialExpr.replace(/\s+/g, '');
          const normFirst = firstTerm.replace(/\s+/g, '');
          if (!normFirst.startsWith(normInitial) && !normInitial.startsWith(normFirst)) {
            cleanedSol = cleanedSol.replace(solAnonRegex, () => `$$${initialExpr} = ${firstTerm}`);
          }
        }
      }
    }

    return cleanedSol;
  }
};
