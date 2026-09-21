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
   * Initialise ou reprend une session pour un chapitre donné
   */
  startChapterSession(chapterId, forceTier = null) {
    const progress = window.MathsStorage.getChapterProgress(chapterId);
    this.state.chapterId = chapterId;
    this.state.currentTier = forceTier || progress.currentTier || 1;
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
    const progress = window.MathsStorage.getChapterProgress(this.state.chapterId);
    const mastery = progress.mastery || 0;

    // Si l'élève n'a pas sélectionné manuellement un palier fixe, la difficulté s'adapte continuellement au pourcentage
    if (!this.state.manualTierSelected) {
      this.state.currentTier = this.getDynamicTier(mastery);
    }

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
    }

    this.state.currentExercise = candidate;
    this.state.mistakesOnCurrent = 0;
    this.state.usedHintsCount = 0;

    return candidate;
  },

  /**
   * Forcer manuellement un palier (permet à l'élève de choisir son défi)
   */
  setTier(tier) {
    if (tier >= 1 && tier <= 4) {
      this.state.currentTier = tier;
      this.state.manualTierSelected = true;
      this.state.consecutiveSuccesses = 0;
      window.MathsStorage.updateChapterProgress(this.state.chapterId, p => {
        p.currentTier = tier;
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

        masteryPercent = Math.min(100, curMastery + gain);
        p.mastery = masteryPercent;

        // Évolution continue de la difficulté proportionnellement au pourcentage
        const prevTier = this.state.currentTier;
        if (!this.state.manualTierSelected) {
          const newTier = this.getDynamicTier(masteryPercent);
          p.currentTier = newTier;
          if (newTier > prevTier) {
            leveledUp = true;
            this.state.currentTier = newTier;
            levelUpMessage = `🚀 Bravo ! Grâce à tes ${masteryPercent}% de maîtrise, tu franchis une nouvelle étape et passes au ${this.getTierDisplayName(newTier)} !`;
          }
        }

        return p;
      });

      // Vérification des Badges
      this.checkBadges(xpResult, masteryPercent);

      return {
        isCorrect: true,
        leveledUp,
        levelUpMessage,
        newTier: this.state.currentTier,
        xpEarned,
        totalXp: xpResult.xp,
        userLevel: xpResult.level,
        leveledUpProfile: xpResult.leveledUp,
        mastery: masteryPercent,
        solution: exercise.solution,
        feedback: "Bravo ! Réponse correcte."
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

        // Ajustement proportionnel de la difficulté si besoin
        if (!this.state.manualTierSelected) {
          p.currentTier = this.getDynamicTier(currentMastery);
          this.state.currentTier = p.currentTier;
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
          solution: exercise.solution,
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
    if (hintNumber === 1) return exercise.hint1;
    if (hintNumber === 2) return exercise.hint2;
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

  /**
   * Vérifie et débloque les badges de réussite
   */
  checkBadges(xpResult, masteryPercent = 0) {
    // Badge 1 : Premier pas
    window.MathsStorage.unlockBadge('first_step', 'Premier Pas', 'Avoir complété son premier exercice avec succès.', 'compass');

    // Badge 2 : Niveau 3
    if (xpResult && xpResult.level >= 3) {
      window.MathsStorage.unlockBadge('level_3', 'Apprenti Géomètre', 'Atteindre le niveau 3 (200 XP).', 'award');
    }

    // Badge 3 : Niveau 5
    if (xpResult && xpResult.level >= 5) {
      window.MathsStorage.unlockBadge('level_5', 'Maître du Calcul', 'Atteindre le niveau 5 (400 XP).', 'zap');
    }

    // Badge 4 : Palier Défi maximal atteint
    if (this.state.currentTier === 4) {
      const lvl = this.getCurrentLevel();
      if (lvl === '5eme') {
        window.MathsStorage.unlockBadge('tier_4_unlocked', 'Cap vers la 4ème', 'Avoir débloqué le palier 4 (Défi 4ème).', 'rocket');
      } else if (lvl === '4eme') {
        window.MathsStorage.unlockBadge('tier_4_unlocked', 'Cap vers la 3ème', 'Avoir débloqué le palier 4 (Défi 3ème).', 'rocket');
      } else {
        window.MathsStorage.unlockBadge('tier_4_unlocked', 'Cap vers la Seconde', 'Avoir débloqué le palier 4 (Défi Seconde).', 'rocket');
      }
    }

    // Badge 5 : Maîtrise complète
    if (masteryPercent >= 100) {
      window.MathsStorage.unlockBadge('chapter_mastery_100', 'Maître du Chapitre', 'Atteindre 100% de maîtrise sur un chapitre.', 'award');
    }
  }
};
