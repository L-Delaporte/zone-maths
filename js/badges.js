/**
 * L'Établi des Maths — Badges à niveaux (Bronze → Argent → Or → Diamant → Légende).
 *
 * Chaque badge mesure une grandeur (nombre de bonnes réponses, de rituels, de jours…) et monte
 * d'un niveau à chaque seuil franchi. Un niveau atteint ne se perd jamais (data.badgeLevels).
 * Les compteurs propres aux badges sont dans data.stats (rempli par recordAnswer, recordEvent).
 * Badges de thème et de niveau scolaire : on prend le chapitre le MOINS avancé du thème
 * (1 = palier 1 validé … 4 = 100 %, 5 = trophée Grand Maître dans tous les chapitres).
 * Tout reste sur l'appareil de l'élève (site sans compte).
 */
(function () {
  const TIER_NAMES = ['', 'Bronze', 'Argent', 'Or', 'Diamant', 'Légende'];
  const DAY_MS = 24 * 3600 * 1000;

  const dayKey = (d = new Date()) => {
    const p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  };
  const parseDay = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  const isoWeek = d => {
    const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const day = t.getUTCDay() || 7;
    t.setUTCDate(t.getUTCDate() + 4 - day);
    const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    return `${t.getUTCFullYear()}-${Math.ceil(((t - y0) / DAY_MS + 1) / 7)}`;
  };
  const plural = (n, s, p) => `${n} ${n > 1 ? (p || s + 's') : s}`;

  const DOMAIN_BADGES = {
    nombres: { title: 'Explorateur des Nombres', icon: '🔢' },
    geometrie: { title: 'Bâtisseur de Figures', icon: '📐' },
    fonctions: { title: 'Navigateur des Fonctions', icon: '📈', title6: 'Analyste des Données', icon6: '📊' },
    algo: { title: 'Architecte des Algorithmes', icon: '💻' }
  };
  const RANK_DESC = [
    '',
    'Palier 1 validé dans chaque chapitre',
    'Palier 2 validé dans chaque chapitre',
    'Palier 3 validé dans chaque chapitre',
    '100 % dans chaque chapitre',
    'Grand Maître (sans erreur ni indice) dans chaque chapitre'
  ];

  const MathsBadges = {
    TIER_NAMES,
    dayKey,

    FAMILIES: [
      { id: 'niveau', title: '🎓 Niveau et thèmes', intro: 'Ces badges suivent le chapitre le moins avancé : pour monter, il faut faire progresser tous les chapitres.' },
      { id: 'autonomie', title: '🧭 Autonomie', intro: 'Réussir seul, du premier coup et sans indice.' },
      { id: 'perseverance', title: '💪 Persévérance', intro: 'L\'effort compte autant que la réussite.' },
      { id: 'modes', title: '🧰 Tous les modes', intro: 'Rituels, flashcards, défis, fiches et devoirs.' },
      { id: 'habitudes', title: '📅 Habitudes', intro: 'Un peu chaque jour, c\'est ainsi qu\'on progresse.' },
      { id: 'jalons', title: '🏁 Jalons', intro: 'Les grandes étapes de ton parcours.' },
      { id: 'secrets', title: '🔮 Badges secrets', intro: 'Ils se dévoilent quand tu les débloques…' }
    ],

    // ------------------------------------------------------------------ données
    getStats(data) {
      const s = (data.stats && typeof data.stats === 'object') ? data.stats : {};
      const num = k => (Number.isFinite(s[k]) ? s[k] : 0);
      const arr = k => (Array.isArray(s[k]) ? s[k] : []);
      const today = (s.today && s.today.date === dayKey()) ? s.today : { date: dayKey(), validated: 0, correct: 0, domains: [] };
      return {
        tenacity: num('tenacity'), relecture: num('relecture'), comebacks: num('comebacks'),
        firstTryNoHint: num('firstTryNoHint'), perfectRun: num('perfectRun'), perfectRunBest: num('perfectRunBest'),
        impeccable: num('impeccable'), rituels: num('rituels'), paper: num('paper'), firstTryFails: num('firstTryFails'),
        days: arr('days'), earlyDays: arr('earlyDays'),
        lastCourse: s.lastCourse || null,
        today: Object.assign({ validated: 0, correct: 0, domains: [] }, today),
        secrets: (s.secrets && typeof s.secrets === 'object') ? s.secrets : {}
      };
    },

    _update(fn) {
      const S = window.MathsStorage;
      if (!S) return;
      const data = S.load();
      const st = this.getStats(data);
      fn(st, data);
      st.days = st.days.slice(-800);
      st.earlyDays = st.earlyDays.slice(-400);
      data.stats = st;
      S.save(data);
    },

    _markDay(st, now) {
      const k = dayKey(now);
      if (!st.days.includes(k)) st.days.push(k);
      if (now.getHours() < 8 && !st.earlyDays.includes(k)) st.earlyDays.push(k);
    },

    /**
     * Appelé par le moteur d'entraînement à chaque soumission.
     * e = { chapterId, domain, isCorrect, firstSubmission, mistakesBefore, hintsUsed,
     *       prevPracticedAt, newlyValidated: [{ tier, marks }] }
     */
    recordAnswer(e) {
      const now = new Date();
      this._update(st => {
        this._markDay(st, now);
        if (e.domain && !st.today.domains.includes(e.domain)) st.today.domains.push(e.domain);
        if (e.firstSubmission) {
          if (e.isCorrect) {
            if (st.firstTryFails >= 3) st.secrets.rebond = st.secrets.rebond || now.toISOString();
            st.firstTryFails = 0;
            if (e.hintsUsed === 0) {
              st.firstTryNoHint++;
              st.perfectRun++;
              st.perfectRunBest = Math.max(st.perfectRunBest, st.perfectRun);
            } else {
              st.perfectRun = 0;
            }
            if (e.prevPracticedAt && now - e.prevPracticedAt >= 14 * DAY_MS) st.comebacks++;
            if (st.lastCourse && st.lastCourse.id === e.chapterId && now - st.lastCourse.at <= 30 * 60 * 1000) {
              st.relecture++;
              st.lastCourse = null;
            }
          } else {
            st.perfectRun = 0;
            st.firstTryFails++;
          }
        } else if (e.isCorrect && e.mistakesBefore >= 2) {
          st.tenacity++;
        }
        if (e.isCorrect) {
          st.today.correct++;
          if (st.today.correct >= 50) st.secrets.marathon = st.secrets.marathon || now.toISOString();
        }
        (e.newlyValidated || []).forEach(v => {
          st.today.validated++;
          const w = (v.marks || []).slice(-8);
          if (w.length >= 8 && w.every(m => m === 'g')) st.impeccable++;
        });
        if (st.today.validated >= 3) st.secrets.triple = st.secrets.triple || now.toISOString();
        if (st.today.domains.length >= 3) st.secrets.polyvalent = st.secrets.polyvalent || now.toISOString();
        if (now.getMonth() === 2 && now.getDate() === 14) st.secrets.piday = st.secrets.piday || now.toISOString();
      });
    },

    /** Événements hors entraînement : 'rituel', 'paper' (fiche/devoir), 'course' (ouverture d'un cours), 'activity'. */
    recordEvent(type, info = {}) {
      const now = new Date();
      this._update(st => {
        if (type === 'rituel') { st.rituels++; this._markDay(st, now); }
        if (type === 'paper') st.paper++;
        if (type === 'course' && info.chapterId) st.lastCourse = { id: info.chapterId, at: now.getTime() };
        if (type === 'activity') this._markDay(st, now);
      });
    },

    // ------------------------------------------------------------------ mesures
    chapterRank(data, c) {
      const p = (data.chapters || {})[c.id];
      const hasBadge = id => (data.badges || []).some(b => b.id === id);
      if (hasBadge(`${c.id}_perfect`)) return 5;
      if (!p) return 0;
      const v = p.validatedTiers || [];
      let n = 0;
      while (n < 4 && v.includes(n + 1)) n++;
      if ((p.mastery || 0) >= 100) n = 4;
      return n;
    },

    countFlashcards() {
      let box5 = 0, reviews = 0;
      try {
        const raw = JSON.parse(localStorage.getItem('maths_flashcards_leitner_v1') || '{}');
        Object.values(raw || {}).forEach(c => {
          if (!c || typeof c !== 'object') return;
          if (c.box >= 5) box5++;
          reviews += Number(c.reviewsCount) || 0;
        });
      } catch (e) { /* stockage indisponible */ }
      return { box5, reviews };
    },

    levelName(level) {
      const app = window.MathsApp;
      if (app && typeof app.getLevelName === 'function') return app.getLevelName(level);
      return level;
    },

    /** Catalogue complet, calculé à partir des données (les badges de niveau/thème dépendent des chapitres). */
    getDefinitions(data) {
      const st = this.getStats(data);
      const chapters = (window.MATHS_CHAPTERS || []).filter(c => c && c.id);
      const chaptersData = data.chapters || {};
      const totalCorrect = Object.values(chaptersData).reduce((s, p) => s + (p.successes || 0), 0);
      const conquered = chapters.filter(c => this.chapterRank(data, c) >= 3).length;
      const fc = this.countFlashcards();
      const defis = window.MathsStorage && typeof window.MathsStorage.countSolvedDefis === 'function'
        ? window.MathsStorage.countSolvedDefis() : 0;
      const weekend = st.days.filter(k => [0, 6].includes(parseDay(k).getDay())).length;
      const weeks = {};
      st.days.forEach(k => { const w = isoWeek(parseDay(k)); weeks[w] = (weeks[w] || 0) + 1; });
      const fullWeeks = Object.values(weeks).filter(n => n >= 5).length;
      const hasGrandMaitre = (data.badges || []).some(b => /_perfect$/.test(b.id));

      const defs = [];
      const add = d => defs.push(d);

      // --- Niveau scolaire et thèmes (le chapitre le moins avancé compte) ---
      const byLevel = {};
      chapters.forEach(c => { const l = c.level || '3eme'; (byLevel[l] = byLevel[l] || []).push(c); });
      Object.keys(byLevel).forEach(level => {
        if (level === 'capes' || /capes/i.test(level)) return;
        const list = byLevel[level];
        const minRank = arr => arr.reduce((m, c) => Math.min(m, this.chapterRank(data, c)), 5);
        const lname = this.levelName(level);
        add({
          id: `level_${level}`, family: 'niveau', schoolLevel: level, icon: '🎓', title: `Diplômé de ${lname}`,
          thresholds: [1, 2, 3, 4, 5], value: minRank(list), unit: 'rank',
          desc: n => `${RANK_DESC[n]} de ${lname} (${list.length} chapitres)`
        });
        Object.keys(DOMAIN_BADGES).forEach(dom => {
          const dl = list.filter(c => c.domain === dom);
          if (!dl.length) return;
          const meta = DOMAIN_BADGES[dom];
          const six = level === '6eme' && meta.title6;
          add({
            id: `theme_${level}_${dom}`, family: 'niveau', schoolLevel: level, icon: six ? meta.icon6 : meta.icon,
            title: six ? meta.title6 : meta.title,
            thresholds: [1, 2, 3, 4, 5], value: minRank(dl), unit: 'rank',
            desc: n => `${RANK_DESC[n]} du thème ${dl[0].domainName || dom} (${plural(dl.length, 'chapitre')})`
          });
        });
      });

      // --- Autonomie ---
      add({ id: 'sans_filet', family: 'autonomie', icon: '🎯', title: 'Sans filet', thresholds: [25, 100, 300, 750, 2000], value: st.firstTryNoHint,
        desc: n => `${n} bonnes réponses du premier coup, sans indice` });
      add({ id: 'serie_parfaite', family: 'autonomie', icon: '🟢', title: 'Série parfaite', thresholds: [8, 15, 30, 50, 100], value: st.perfectRunBest,
        desc: n => `${n} pastilles vertes d'affilée (premier coup, sans indice)` });
      add({ id: 'palier_impeccable', family: 'autonomie', icon: '✨', title: 'Palier impeccable', thresholds: [1, 5, 15, 40, 100], value: st.impeccable,
        desc: n => `Valider ${plural(n, 'palier')} avec 8 pastilles vertes sur 8` });

      // --- Persévérance ---
      add({ id: 'tenacite', family: 'perseverance', icon: '🧗', title: 'Ténacité', thresholds: [5, 20, 60, 150, 400], value: st.tenacity,
        desc: n => `Trouver ${plural(n, 'réponse')} après au moins 2 erreurs, sans abandonner` });
      add({ id: 'relecture', family: 'perseverance', icon: '📖', title: 'Je relis le cours', thresholds: [1, 5, 15, 40, 100], value: st.relecture,
        desc: n => `${plural(n, 'fois', 'fois')} : relire le cours puis réussir la question suivante du premier coup` });
      add({ id: 'retour_gagnant', family: 'perseverance', icon: '🔁', title: 'Retour gagnant', thresholds: [1, 3, 8, 15, 30], value: st.comebacks,
        desc: n => `${plural(n, 'fois', 'fois')} : reprendre un chapitre délaissé depuis 2 semaines et réussir du premier coup` });

      // --- Tous les modes ---
      add({ id: 'rituels', family: 'modes', icon: '⏱️', title: 'Rituel Flash', thresholds: [1, 10, 25, 50, 100], value: st.rituels,
        desc: n => `Terminer ${plural(n, 'rituel')}` });
      add({ id: 'flash_memoire', family: 'modes', icon: '🗂️', title: 'Mémoire d\'éléphant', thresholds: [10, 50, 150, 300, 500], value: fc.box5,
        desc: n => `${plural(n, 'flashcard')} en boîte 5 (mémoire à long terme)` });
      add({ id: 'flash_revisions', family: 'modes', icon: '🔄', title: 'Révisions Leitner', thresholds: [50, 250, 1000, 2500, 5000], value: fc.reviews,
        desc: n => `${n} révisions de flashcards` });
      add({ id: 'defis', family: 'modes', icon: '🏆', title: 'Défi de la semaine', thresholds: [1, 5, 10, 20, 36], value: defis,
        desc: n => `Relever ${plural(n, 'défi')} de la semaine` });
      add({ id: 'papier', family: 'modes', icon: '📝', title: 'Sur papier', thresholds: [1, 5, 15, 30, 60], value: st.paper,
        desc: n => `Préparer ${plural(n, 'fiche')} ou devoirs blancs (génération ou impression)` });

      // --- Habitudes ---
      add({ id: 'leve_tot', family: 'habitudes', icon: '🌅', title: 'Lève-tôt', thresholds: [1, 5, 15, 40, 80], value: st.earlyDays.length,
        desc: n => `S'entraîner avant 8 h, ${plural(n, 'jour')} différents` });
      add({ id: 'week_end', family: 'habitudes', icon: '🛋️', title: 'Week-end studieux', thresholds: [1, 5, 15, 40, 80], value: weekend,
        desc: n => `S'entraîner ${plural(n, 'jour')} de week-end` });
      add({ id: 'semaine_complete', family: 'habitudes', icon: '🗓️', title: 'Semaine complète', thresholds: [1, 4, 12, 26, 40], value: fullWeeks,
        desc: n => `${plural(n, 'semaine')} avec au moins 5 jours d'entraînement` });

      // --- Jalons ---
      add({ id: 'bonnes_reponses', family: 'jalons', icon: '✅', title: 'Premier pas… et bien d\'autres', thresholds: [1, 50, 250, 1000, 3000], value: totalCorrect,
        desc: n => `${plural(n, 'bonne réponse')} au total` });
      add({ id: 'experience', family: 'jalons', icon: '⚡', title: 'Expérience', thresholds: [3, 5, 10, 20, 35], value: (data.user && data.user.level) || 1,
        desc: n => `Atteindre le niveau ${n} d'expérience` });
      add({ id: 'chevalier', family: 'jalons', icon: '🚀', title: 'Cap vers les défis', thresholds: [1, 5, 15, 30, 60], value: conquered,
        desc: n => `Débloquer le palier 4 dans ${plural(n, 'chapitre')}` });

      // --- Secrets (un seul niveau, cachés tant qu'ils ne sont pas obtenus) ---
      // desc : condition exacte, montrée une fois le badge obtenu ; riddle : devinette affichée tant qu'il est caché
      const secret = (id, icon, title, how, riddle, ok) => add({ id: `secret_${id}`, family: 'secrets', secret: true, icon, title,
        thresholds: [1], value: ok ? 1 : 0, desc: () => how, riddle });
      secret('triple', '🎰', 'Coup triple', 'Valider 3 paliers le même jour', 'Certains jours, tout s\'enchaîne…', !!st.secrets.triple);
      secret('piday', '🥧', 'Jour de π', 'S\'entraîner un 14 mars (3/14)', 'Une date qui plaît aux amateurs de cercles.', !!st.secrets.piday);
      secret('polyvalent', '🧩', 'Touche-à-tout', 'S\'entraîner dans 3 thèmes différents le même jour', 'La curiosité n\'a pas de frontières.', !!st.secrets.polyvalent);
      secret('rebond', '🦘', 'Rebond', 'Réussir du premier coup juste après 3 questions ratées d\'affilée', 'Après la pluie vient le beau temps.', !!st.secrets.rebond);
      secret('marathon', '🏃', 'Marathonien', '50 bonnes réponses dans la même journée', 'Certains jours, on ne s\'arrête plus !', !!st.secrets.marathon);
      secret('grand_maitre', '🌟', 'Légende vivante', 'Décrocher un trophée Grand Maître', 'Vise la perfection, du premier au dernier exercice.', hasGrandMaitre);

      return defs.map(d => {
        let lvl = 0;
        while (lvl < d.thresholds.length && d.value >= d.thresholds[lvl]) lvl++;
        return Object.assign(d, { computedLevel: lvl, maxLevel: d.thresholds.length });
      });
    },

    /** Classe d'animation selon le niveau : les badges à moins de 5 niveaux finissent quand même en Légende. */
    tierClass(def, level) {
      if (level <= 0) return 0;
      if (def.secret) return 4;
      if (def.maxLevel >= 5) return level;
      return level === def.maxLevel ? 5 : level;
    },

    tierLabel(def, level) {
      if (def.secret) return level ? 'Secret dévoilé' : '???';
      return TIER_NAMES[this.tierClass(def, level)] || '';
    },

    /**
     * Met à jour les niveaux atteints (jamais en baisse) et renvoie les montées de niveau.
     * silent : enregistre sans rien signaler (premier passage pour une progression existante).
     */
    evaluate(opts = {}) {
      const S = window.MathsStorage;
      if (!S) return [];
      const data = S.load();
      const defs = this.getDefinitions(data);
      const stored = (data.badgeLevels && typeof data.badgeLevels === 'object') ? data.badgeLevels : {};
      const firstRun = !data.badgeLevels;
      const ups = [];
      defs.forEach(d => {
        const before = stored[d.id] || 0;
        if (d.computedLevel > before) {
          stored[d.id] = d.computedLevel;
          ups.push({ def: d, level: d.computedLevel });
        }
      });
      if (ups.length || firstRun) {
        const fresh = S.load();
        fresh.badgeLevels = stored;
        S.save(fresh);
      }
      return (opts.silent || firstRun) ? [] : ups;
    },

    /** Niveaux enregistrés (jamais en baisse) fusionnés avec le catalogue. */
    getShowcase(data) {
      const stored = (data.badgeLevels && typeof data.badgeLevels === 'object') ? data.badgeLevels : {};
      return this.getDefinitions(data).map(d => Object.assign(d, { level: Math.max(stored[d.id] || 0, d.computedLevel) }));
    },

    describeUpgrade(u) {
      const d = u.def;
      return {
        icon: d.icon,
        title: d.title,
        tier: this.tierLabel(d, u.level),
        tierClass: this.tierClass(d, u.level),
        desc: d.desc(d.thresholds[u.level - 1])
      };
    },

    /** Évalue et affiche un message pour chaque nouveau niveau (hors entraînement). */
    check() {
      const ups = this.evaluate();
      const app = window.MathsApp;
      if (!ups.length || !app) return ups;
      if (typeof app.celebrateBadgeUpgrades === 'function') app.celebrateBadgeUpgrades(ups);
      return ups;
    }
  };

  window.MathsBadges = MathsBadges;
})();
