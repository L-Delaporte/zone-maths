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
    if (this.state.chapterId) {
      if (this.state.chapterId.startsWith('5')) return '5eme';
      if (this.state.chapterId.startsWith('4')) return '4eme';
    }
    if (window.MathsApp && window.MathsApp.currentLevel) {
      return window.MathsApp.currentLevel;
    }
    if (window.MathsStorage && window.MathsStorage.getCurrentLevel) {
      return window.MathsStorage.getCurrentLevel() || '3eme';
    }
    return '3eme';
  },

  getTierDisplayName(tier) {
    const lvl = this.getCurrentLevel();
    if (lvl === '5eme') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 4ème"
      };
      return names[tier] || `Palier ${tier}`;
    } else if (lvl === '4eme') {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 3ème"
      };
      return names[tier] || `Palier ${tier}`;
    } else {
      const names = {
        1: "Palier 1 : Socle & Automatismes",
        2: "Palier 2 : Entraînement Guidé",
        3: "Palier 3 : Objectif Brevet",
        4: "Palier 4 : Défi Seconde"
      };
      return names[tier] || `Palier ${tier}`;
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
    const items = exercise.options.map((opt, i) => ({
      opt,
      exp: exercise.explanations ? exercise.explanations[i] : null,
      isCorrect: i === origIndex
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

  /**
   * Calcule le palier de difficulté proportionnel au pourcentage de réussite
   * Fait évoluer la difficulté de façon continue (et non par simples paliers rigides)
   */
  getDynamicTier(mastery) {
    const m = parseFloat(mastery) || 0;

    if (m < 20) {
      return 1;
    } else if (m < 25) {
      // 20% à 24% : transition Socle -> Guidé (35% de chance de palier 2)
      return Math.random() < 0.35 ? 2 : 1;
    } else if (m < 45) {
      return 2;
    } else if (m < 50) {
      // 45% à 49% : transition Guidé -> Brevet (35% de chance de palier 3)
      return Math.random() < 0.35 ? 3 : 2;
    } else if (m < 70) {
      return 3;
    } else if (m < 75) {
      // 70% à 74% : transition Brevet -> Défi Seconde (35% de chance de palier 4)
      return Math.random() < 0.35 ? 4 : 3;
    } else {
      return 4;
    }
  },

  /**
   * Sélectionne le prochain exercice optimal selon le pourcentage de maîtrise et l'historique
   * Mode procédural infini (MathsMentales) : génère de nouvelles valeurs aléatoires à chaque tirage
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
    if (progress) progress.currentTier = targetTier;

    let candidate = null;

    // 1. PRIORITÉ ABSOLUE : Génération procédurale continue (style MathsMentales)
    // Garantit que chaque question a de nouvelles valeurs aléatoires différentes à chaque tirage
    if (window.MathsGenerators && typeof window.MathsGenerators.generateForChapter === 'function') {
      const randExo = window.MathsGenerators.generateForChapter(this.state.chapterId, this.state.currentTier, mastery);
      if (randExo) {
        randExo.tier = this.state.currentTier;
        randExo.id = `${this.state.chapterId}-dyn-t${this.state.currentTier}-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        candidate = randExo;
      }
    }

    // 2. Repli catalogue statique si le générateur procédural n'est pas disponible pour ce chapitre
    if (!candidate) {
      const exercises = window.MATHS_EXERCISES[this.state.chapterId] || [];
      const completedSet = new Set(progress.completed || []);
      let tierExercises = exercises.filter(e => e.tier === this.state.currentTier);
      if (!tierExercises.length) {
        tierExercises = exercises;
      }
      candidate = tierExercises.find(e => !completedSet.has(e.id));
      if (!candidate && tierExercises.length > 0) {
        const candidates = tierExercises.filter(e => !this.state.currentExercise || e.id !== this.state.currentExercise.id);
        candidate = candidates[Math.floor(Math.random() * candidates.length)] || tierExercises[0];
      }
    }

    if (candidate) {
      // Cloner l'exercice pour isoler les options du catalogue
      candidate = JSON.parse(JSON.stringify(candidate));
      // Normaliser choices -> options si nécessaire et mélanger
      if (candidate.type === 'mcq') {
        if (!candidate.options && candidate.choices) candidate.options = candidate.choices;
        this.shuffleMcq(candidate);
      }
      // Renoter systématiquement l'expression de départ au début du calcul dans la solution
      if (candidate.solution && candidate.statement) {
        candidate.solution = this.formatSolutionWithInitialExpr(candidate.statement, candidate.solution);
      }
    }

    this.state.currentExercise = candidate;
    this.state.mistakesOnCurrent = 0;
    this.state.usedHintsCount = 0;

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
      window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
        p.currentTier = t;
        return p;
      });
      return this.nextExercise();
    }
    return null;
  },

  /**
   * Évalue la réponse fournie par l'élève
   */
  validateAnswer(userAnswer, exercise) {
    if (!exercise) return false;

    // Type QCM
    if (exercise.type === 'mcq') {
      const chosenIndex = parseInt(userAnswer, 10);
      return chosenIndex === exercise.correctIndex;
    }

    // Type Saisie Exacte (fraction, nombre ou expression)
    if (exercise.type === 'exact') {
      if (userAnswer === null || userAnswer === undefined) return false;
      const normalizeMath = (str) => {
        return String(str)
          .trim()
          .toLowerCase()
          .replace(/[−–—]/g, '-')
          .replace(/[÷⁄]/g, '/')
          .replace(/\\?frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
          .replace(/,/g, '.')
          .replace(/\s+/g, '');
      };

      let cleanUser = normalizeMath(userAnswer);
      let cleanExpected = normalizeMath(exercise.answer);

      // Correspondance stricte directe
      if (cleanUser === cleanExpected) return true;

      // Normalisation oui/non vs vrai/faux
      const trueSet = ['oui', 'vrai', 'true', 'v'];
      const falseSet = ['non', 'faux', 'false', 'f'];
      if (trueSet.includes(cleanExpected) && trueSet.includes(cleanUser)) return true;
      if (falseSet.includes(cleanExpected) && falseSet.includes(cleanUser)) return true;

      // Tolérance si l'élève préfixe par "x=", "y=", "n=", etc. ou note l'ensemble solution "S={...}"
      let strippedUser = cleanUser.replace(/^s=\s*\{/i, '').replace(/[\{\}]/g, '').replace(/^[a-z]=\s*/i, '');
      let strippedExpected = cleanExpected.replace(/^s=\s*\{/i, '').replace(/[\{\}]/g, '').replace(/^[a-z]=\s*/i, '');
      if (strippedUser === strippedExpected) return true;

      // Tolérance unités usuelles en fin de saisie (ex: "12cm", "45°", "30€", "150L", "90km/h")
      const stripUnits = (s) => s.replace(/(cm2|cm|mm|dm|m2|m|km\/h|km|deg|°|euros?|€|litres?|l)$/i, '');
      const noUnitUser = stripUnits(strippedUser);
      const noUnitExpected = stripUnits(strippedExpected);
      if (noUnitUser === noUnitExpected) return true;

      // Correspondance fractionnaire et puissances de 10
      const parseFractionOrPower = (val) => {
        val = val.replace('**', '^');
        if (/^10\^(-?[0-9]+)$/.test(val)) {
          const exp = parseInt(val.match(/^10\^(-?[0-9]+)$/)[1], 10);
          return Math.pow(10, exp);
        }
        if (val.includes('/')) {
          const parts = val.split('/');
          const num = parseFloat(parts[0]);
          const den = parseFloat(parts[1]);
          return den !== 0 ? num / den : NaN;
        }
        return parseFloat(val);
      };

      const userVal = parseFractionOrPower(noUnitUser);
      const expectedVal = parseFractionOrPower(noUnitExpected);

      if (!isNaN(userVal) && !isNaN(expectedVal)) {
        return Math.abs(userVal - expectedVal) < 0.0001;
      }
    }

    return false;
  },

  /**
   * Vérifie si l'élève a saisi une fraction exacte numériquement mais non irréductible
   */
  checkUnsimplifiedFraction(userAnswer, exercise) {
    if (!exercise || exercise.type !== 'exact' || userAnswer === null || userAnswer === undefined) return null;
    const normalizeMath = (str) => {
      return String(str)
        .trim()
        .toLowerCase()
        .replace(/[−–—]/g, '-')
        .replace(/[÷⁄]/g, '/')
        .replace(/\\?frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
        .replace(/,/g, '.')
        .replace(/\s+/g, '');
    };
    let cleanUser = normalizeMath(userAnswer).replace(/^s=\s*\{/i, '').replace(/[\{\}]/g, '').replace(/^[a-z]=\s*/i, '');
    let cleanExpected = normalizeMath(exercise.answer).replace(/^s=\s*\{/i, '').replace(/[\{\}]/g, '').replace(/^[a-z]=\s*/i, '');
    const stripUnits = (s) => s.replace(/(cm2|cm|mm|dm|m2|m|km\/h|km|deg|°|euros?|€|litres?|l)$/i, '');
    cleanUser = stripUnits(cleanUser);
    cleanExpected = stripUnits(cleanExpected);

    const fracMatch = cleanUser.match(/^(-?[0-9]+)\/([0-9]+)$/);
    if (!fracMatch) return null;

    const num = parseInt(fracMatch[1], 10);
    const den = parseInt(fracMatch[2], 10);
    if (den === 0) return null;

    const parseVal = (val) => {
      val = val.replace('**', '^');
      if (/^10\^(-?[0-9]+)$/.test(val)) {
        const exp = parseInt(val.match(/^10\^(-?[0-9]+)$/)[1], 10);
        return Math.pow(10, exp);
      }
      if (val.includes('/')) {
        const p = val.split('/');
        const n = parseFloat(p[0]);
        const d = parseFloat(p[1]);
        return d !== 0 ? n / d : NaN;
      }
      return parseFloat(val);
    };

    const userVal = num / den;
    const expVal = parseVal(cleanExpected);

    if (!isNaN(userVal) && !isNaN(expVal) && Math.abs(userVal - expVal) < 0.0001) {
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

    const isCorrect = this.validateAnswer(userAnswer, exercise);

    this.state.sessionHistory.push({
      exerciseId: exercise.id,
      isCorrect,
      tier: this.state.currentTier,
      hintsUsed: this.state.usedHintsCount
    });

    if (isCorrect) {
      // --- RÉUSSITE ---
      this.state.consecutiveSuccesses++;

      // Calcul des points d'expérience selon le palier et les indices
      const basePoints = { 1: 10, 2: 15, 3: 25, 4: 40 }[this.state.currentTier] || 10;
      const penalty = this.state.usedHintsCount * 3; // légère retenue si indice utilisé
      const xpEarned = Math.max(5, basePoints - penalty);

      const xpResult = window.MathsStorage.addXp(xpEarned);

      // Mise à jour de la progression du chapitre
      let masteryPercent = 0;
      let leveledUp = false;
      let levelUpMessage = '';
      let newlyValidatedTiers = [];
      let unlockedTier = null;
      let tierCapReached = false;
      let tierCapMessage = '';
      let nextTierToAdvance = null;

      const exoTier = parseInt(exercise.tier || this.state.currentTier || 1, 10);
      const tierCap = { 1: 25, 2: 50, 3: 75, 4: 100 }[exoTier] || 100;

      window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
        if (!p.completed.includes(exercise.id)) {
          p.completed.push(exercise.id);
        }
        p.successes = (p.successes || 0) + 1;
        p.attempts = (p.attempts || 0) + 1;
        p.streak = (p.streak || 0) + 1;
        p.mistakeStreak = 0;

        const curMastery = p.mastery || 0;

        // Gain modéré entre 1% et 5% selon le nombre de bonnes réponses d'affilées :
        // 1ère bonne réponse : +2% (ou +1% si indice utilisé)
        // 2 bonnes réponses d'affilée : +3%
        // 3 bonnes réponses d'affilée : +4%
        // 4+ bonnes réponses d'affilée : +5% (plafonné à +5%)
        const streakBonus = Math.min(4, p.streak);
        const baseGain = 1 + streakBonus; // 2, 3, 4, 5
        const hintPenalty = this.state.usedHintsCount > 0 ? 1 : 0;
        const gain = Math.min(5, Math.max(1, baseGain - hintPenalty));

        // Plafonnement strict selon le palier de la question :
        // - Questions du Palier 1 : ne font pas avancer le pourcentage au-delà de 25%
        // - Questions du Palier 2 : ne font pas avancer le pourcentage au-delà de 50%
        // - Questions du Palier 3 : ne font pas avancer le pourcentage au-delà de 75%
        // - Questions du Palier 4 : jusqu'à 100%
        if (curMastery < tierCap) {
          masteryPercent = Math.min(tierCap, curMastery + gain);
        } else {
          // L'élève est déjà à ou au-delà du plafond pour ce palier : le pourcentage n'augmente plus
          masteryPercent = curMastery;
          tierCapReached = (exoTier < 4);
        }
        p.mastery = masteryPercent;

        // Suivi précis par palier
        p.successesByTier = p.successesByTier || { 1: 0, 2: 0, 3: 0, 4: 0 };
        p.successesByTier[exoTier] = (p.successesByTier[exoTier] || 0) + 1;

        p.validatedTiers = p.validatedTiers || [];
        // Palier 1 validé à 25% (débloque en même temps le Palier 2)
        if (!p.validatedTiers.includes(1) && masteryPercent >= 25) {
          p.validatedTiers.push(1);
          newlyValidatedTiers.push(1);
        }
        // Palier 2 validé à 50% (débloque en même temps le Palier 3)
        if (!p.validatedTiers.includes(2) && masteryPercent >= 50) {
          if (!p.validatedTiers.includes(1)) p.validatedTiers.push(1);
          p.validatedTiers.push(2);
          newlyValidatedTiers.push(2);
        }
        // Palier 3 validé à 75% (débloque en même temps le Palier 4)
        if (!p.validatedTiers.includes(3) && masteryPercent >= 75) {
          if (!p.validatedTiers.includes(1)) p.validatedTiers.push(1);
          if (!p.validatedTiers.includes(2)) p.validatedTiers.push(2);
          p.validatedTiers.push(3);
          newlyValidatedTiers.push(3);
        }
        // Palier 4 validé à 100% (Maîtrise totale)
        if (!p.validatedTiers.includes(4) && masteryPercent >= 100) {
          if (!p.validatedTiers.includes(1)) p.validatedTiers.push(1);
          if (!p.validatedTiers.includes(2)) p.validatedTiers.push(2);
          if (!p.validatedTiers.includes(3)) p.validatedTiers.push(3);
          p.validatedTiers.push(4);
          newlyValidatedTiers.push(4);
        }

        // Évolution continue de la difficulté et déblocage progressif des paliers
        const prevTier = this.state.currentTier;
        // Si un nouveau palier vient d'être validé, débloquer et passer immédiatement au palier supérieur à la question suivante
        if (newlyValidatedTiers.length > 0) {
          const maxValidated = Math.max(...newlyValidatedTiers);
          if (maxValidated < 4) {
            const nextUnlocked = maxValidated + 1;
            leveledUp = true;
            unlockedTier = nextUnlocked;
            this.state.currentTier = nextUnlocked;
            p.currentTier = nextUnlocked;
            this.state.manualTierSelected = true; // Bascule et maintient sur le palier supérieur pour la question suivante
            levelUpMessage = `🚀 Bravo ! Tu as validé le Palier ${maxValidated} et débloqué le ${this.getTierDisplayName(nextUnlocked)} !`;
          } else {
            leveledUp = true;
            levelUpMessage = `👑 Félicitations ! Tu as validé tous les paliers et maîtrisé cette notion à 100% !`;
          }
        } else if (tierCapReached) {
          nextTierToAdvance = exoTier + 1;
          tierCapMessage = `Plafond du Palier ${exoTier} atteint (${tierCap}%). Passe au Palier ${nextTierToAdvance} pour continuer à faire progresser ton pourcentage !`;
        }

        return p;
      });

      // Vérification des Badges et Rangs
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
        solution: this.formatSolutionWithInitialExpr(exercise.statement, exercise.solution),
        feedback: tierCapMessage ? `Bravo ! Réponse correcte (+${xpEarned} XP). ${tierCapMessage}` : "Bravo ! Réponse correcte."
      };
    } else {
      // --- ERREUR / ÉCHAFAUDAGE BIENVEILLANT ---
      this.state.mistakesOnCurrent++;
      this.state.consecutiveSuccesses = 0; // réinitialise la série

      let currentMastery = 0;
      window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
        p.attempts = (p.attempts || 0) + 1;
        p.streak = 0; // Réinitialise la série de succès
        p.mistakeStreak = (p.mistakeStreak || 0) + 1;

        const curMastery = p.mastery || 0;

        // Baisse modérée entre 1% et 5% selon la série d'erreurs :
        // 1ère erreur : -1% ou -2%
        // 2ème erreur d'affilée : -3%
        // 3ème erreur d'affilée : -4%
        // 4+ erreurs d'affilée : -5% (maximum -5%)
        let drop = 2;
        if (this.state.mistakesOnCurrent === 1) {
          drop = Math.min(2, Math.max(1, p.mistakeStreak));
        } else if (this.state.mistakesOnCurrent === 2) {
          drop = Math.min(3, Math.max(2, p.mistakeStreak));
        } else {
          drop = Math.min(5, Math.max(2, 1 + p.mistakeStreak));
        }

        currentMastery = Math.max(0, curMastery - drop);
        p.mastery = currentMastery;

        // Repli sécurisé uniquement si le palier en cours n'est plus débloqué
        if (!this.isTierUnlocked(this.state.chapterId, this.state.currentTier)) {
          this.state.currentTier = this.getHighestUnlockedTier(this.state.chapterId);
          p.currentTier = this.state.currentTier;
          this.state.manualTierSelected = false;
        }

        return p;
      });

      if (this.state.mistakesOnCurrent === 1) {
        // 1ère erreur : Coup de pouce méthodologique
        return {
          isCorrect: false,
          mastery: currentMastery,
          stage: 'hint1',
          hint: exercise.hint1,
          message: "Pas tout à fait ! Voici un coup de pouce méthodologique pour t'aider à réessayer :"
        };
      } else if (this.state.mistakesOnCurrent === 2) {
        // 2ème erreur : Rappel de cours ciblé
        return {
          isCorrect: false,
          mastery: currentMastery,
          stage: 'hint2',
          hint: exercise.hint2,
          message: "Toujours pas ! Voici un rappel essentiel de cours ou de formule pour débloquer la situation :"
        };
      } else {
        // 3ème erreur : Solution complète et adaptation pédagogique
        const canStepDown = this.state.currentTier > 1;
        return {
          isCorrect: false,
          mastery: currentMastery,
          stage: 'solution',
          solution: this.formatSolutionWithInitialExpr(exercise.statement, exercise.solution),
          message: "Voici la correction détaillée étape par étape pour bien comprendre le raisonnement.",
          canStepDown,
          stepDownMessage: canStepDown ? "Si cette notion te paraît difficile, tu peux revenir au palier précédent pour consolider tes bases en douceur." : null
        };
      }
    }
  },

  /**
   * L'élève demande volontairement un indice
   */
  requestHint(hintNumber) {
    const exercise = this.state.currentExercise;
    if (!exercise) return null;
    this.state.usedHintsCount++;
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
      4: 'Maître'
    };
    const rank = ranks[tier] || 'Explorateur';
    if (!chapter) return `${rank} des Maths`;

    const specialNotions = {
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
      if (window.MathsStorage.unlockBadge('level_3', 'Apprenti Géomètre', 'Atteindre le niveau 3 (200 XP).', '📐')) {
        newlyUnlockedBadges.push({ kind: 'general', id: 'level_3', title: 'Apprenti Géomètre', desc: 'Atteindre le niveau 3 (200 XP).', icon: '📐' });
      }
    }

    if (xpResult && xpResult.level >= 5) {
      if (window.MathsStorage.unlockBadge('level_5', 'Maître du Calcul', 'Atteindre le niveau 5 (400 XP).', '⚡')) {
        newlyUnlockedBadges.push({ kind: 'general', id: 'level_5', title: 'Maître du Calcul', desc: 'Atteindre le niveau 5 (400 XP).', icon: '⚡' });
      }
    }

    if (this.state.currentTier === 4) {
      const lvl = this.getCurrentLevel();
      const tier4Title = lvl === '5eme' ? 'Cap vers la 4ème' : (lvl === '4eme' ? 'Cap vers la 3ème' : 'Cap vers la Seconde');
      const tier4Desc = lvl === '5eme' ? 'Avoir débloqué le palier 4 (Défi 4ème).' : (lvl === '4eme' ? 'Avoir débloqué le palier 4 (Défi 3ème).' : 'Avoir débloqué le palier 4 (Défi Seconde).');
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

      if (masteryPercent >= 100 || p.mastery >= 100) {
        const masterUnlocked = window.MathsStorage.unlockBadge(`${chapterId}_master`, `Grand Maître ${chapter.shortTitle || chapter.title}`, 'Maîtrise totale à 100% du chapitre.', '👑');
        if (masterUnlocked) {
          newlyUnlockedBadges.push({
            kind: 'rank',
            tier: 4,
            badgeId: `${chapterId}_master`,
            title: `Grand Maître ${chapter.shortTitle || chapter.title}`,
            desc: 'Maîtrise totale à 100% du chapitre.',
            icon: '👑',
            chapter
          });
        }
      }
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
