/**
 * L'Établi des Maths — Contrôleur principal de l'application (6e → Licence)
 * État, niveaux et cycles, initialisation, navigation, URL, clavier, accessibilité,
 * en-tête et notifications. Les vues sont dans js/app/*.js (Object.assign sur MathsApp),
 * chargées après ce fichier ; l'initialisation a lieu au DOMContentLoaded.
 */

window.MathsApp = {
  currentLevel: '3eme',
  currentChapterId: 'N1',
  currentTab: 'train', // 'train', 'course', 'sheets', 'stats'
  currentFilterDomain: 'all',
  searchQuery: '',
  selectedSheetIndex: 0,
  generatedPracticeSheet: null,
  generatedDsByChapter: {},

  CYCLES: {
    college: { id: 'college', name: 'Collège', defaultLevel: '3eme', levels: ['6eme', '5eme', '4eme', '3eme'] },
    lycee: { id: 'lycee', name: 'Lycée', defaultLevel: '2nde', levels: ['2nde', '1ere', '1tc', '1techno', 'tale'] },
    licence: { id: 'licence', name: 'Licence', defaultLevel: 'L1', levels: ['L1', 'L2', 'L3'] },
    // Concours : CAPES, professeur des écoles (CRPE), études de santé (prépa santé, PASS / L.AS) ;
    // le concours vétérinaire pourra s'y ajouter
    concours: { id: 'concours', name: 'Concours', defaultLevel: 'capes', levels: ['capes', 'crpe', 'sante', 'pass', 'veto'] }
  },

  VALID_LEVELS: ['6eme', '5eme', '4eme', '3eme', '2nde', '1ere', '1tc', '1techno', 'tale', 'L1', 'L2', 'L3', 'capes', 'crpe', 'sante', 'pass', 'veto'],

  LEVEL_LABELS: {
    '6eme': '6ème',
    '5eme': '5ème',
    '4eme': '4ème',
    '3eme': '3ème (DNB)',
    '2nde': 'Seconde',
    '1ere': '1ère Spécialité',
    '1tc': '1ère générale (tronc commun)',
    '1techno': '1ère technologique',
    'tale': 'Terminale (Spé/Exp)',
    'L1': 'Licence 1 (L1)',
    'L2': 'Licence 2 (L2)',
    'L3': 'Licence 3 (L3)',
    'capes': 'CAPES',
    'crpe': 'Professeur des écoles (CRPE)',
    'sante': 'Prépa santé (terminale)',
    'pass': 'Médecine : PASS / L.AS',
    'veto': 'Vétérinaire : prépa BCPST'
  },

  // Formes courtes pour le titre de l'onglet du navigateur
  LEVEL_SHORT_LABELS: {
    '6eme': '6e', '5eme': '5e', '4eme': '4e', '3eme': '3e', '2nde': '2de', '1ere': '1re', '1tc': '1re tronc commun', '1techno': '1re techno', 'tale': 'Terminale',
    'L1': 'L1', 'L2': 'L2', 'L3': 'L3', 'capes': 'CAPES', 'crpe': 'CRPE', 'sante': 'Prépa santé', 'pass': 'PASS / L.AS', 'veto': 'Véto'
  },

  TAB_LABELS: { train: 'Entraînement', course: 'Cours', sheets: 'Fiches', stats: 'Bilan' },

  // Onglet dans l'URL (?chapitre=…&onglet=cours) ; pas de paramètre pour l'entraînement, onglet par défaut
  TAB_SLUGS: { course: 'cours', sheets: 'fiches', stats: 'bilan' },

  URL_MODES: ['rituel', 'diaporama', 'quiz', 'devoir', 'flashcards', 'flashcard'],

  // Trois voies en Première : spécialité maths ('1ere'), tronc commun de la voie générale sans
  // spécialité ('1tc') et tronc commun de la voie technologique ('1techno'). Une seule pastille « 1ère »
  // y mène ; la voie choisie est retenue (clé locale distincte de la progression).
  PREMIERE_VOIES: ['1ere', '1tc', '1techno'],
  VOIE_STORAGE_KEY: 'etabli_voie_premiere',

  isPremiereLevel(level) {
    return this.PREMIERE_VOIES.includes(level);
  },

  /** Niveau de la pastille qui représente ce niveau (les trois voies de Première partagent « 1ère »). */
  pillLevelOf(level) {
    return this.isPremiereLevel(level) ? '1ere' : level;
  },

  /** Dernière voie de Première choisie sur cet appareil ('1ere' par défaut, ou stockage indisponible). */
  getPremiereVoie() {
    try {
      const saved = localStorage.getItem(this.VOIE_STORAGE_KEY);
      if (this.PREMIERE_VOIES.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible : voie par défaut */ }
    return '1ere';
  },

  rememberPremiereVoie(level) {
    if (!this.isPremiereLevel(level)) return;
    try { localStorage.setItem(this.VOIE_STORAGE_KEY, level); } catch (e) { /* stockage indisponible : la voie n'est pas retenue */ }
  },

  /** Pastilles « 1ère » : ouvre la Première dans la dernière voie choisie. */
  openPremiere() {
    this.switchLevel(this.getPremiereVoie(), true);
  },

  /** Contrôle segmenté des voies : change de voie (un chapitre partagé reste sélectionné). */
  choosePremiereVoie(voie) {
    if (!this.isPremiereLevel(voie)) return;
    if (voie !== this.currentLevel) this.switchLevel(voie, false);
    const radio = document.querySelector(`#premiere-voie-switch [data-voie="${voie}"]`);
    if (radio && document.activeElement && document.activeElement.closest && document.activeElement.closest('#premiere-voie-switch')) radio.focus();
  },

  /** État du contrôle segmenté : visible en Première seulement, une option cochée, une seule tabulable. */
  syncPremiereVoieSwitch(level) {
    const group = document.getElementById('premiere-voie-switch');
    if (!group) return;
    const on = this.isPremiereLevel(level);
    group.hidden = !on;
    group.querySelectorAll('[role="radio"]').forEach(radio => {
      const checked = radio.getAttribute('data-voie') === level;
      radio.setAttribute('aria-checked', checked ? 'true' : 'false');
      radio.tabIndex = checked ? 0 : -1;
      radio.classList.toggle('active', checked);
    });
  },

  /** Clavier du groupe de boutons radio (flèches, Début, Fin), comme un groupe radio natif. */
  bindPremiereVoieSwitch() {
    const group = document.getElementById('premiere-voie-switch');
    if (!group) return;
    group.addEventListener('keydown', (e) => {
      const radios = Array.from(group.querySelectorAll('[role="radio"]'));
      const idx = radios.indexOf(document.activeElement);
      if (idx < 0) return;
      let next = -1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % radios.length;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + radios.length) % radios.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = radios.length - 1;
      if (next < 0) return;
      e.preventDefault();
      e.stopPropagation();
      radios[next].focus();
      this.choosePremiereVoie(radios[next].getAttribute('data-voie'));
    });
  },

  /** Le chapitre appartient-il au niveau ? (niveau principal ou voie qui le partage : champ levels) */
  chapterInLevel(chapter, level) {
    return window.MathsChapterLevels.has(chapter, level);
  },

  getLevelName(level) {
    return this.LEVEL_LABELS[level] || level || 'Mathématiques';
  },

  init() {
    console.log('Initialisation de L\'Établi des Maths (Collège, Lycée, Licence)...');
    // L'accueil est l'état du HTML statique : il s'affiche sans attendre les données d'un niveau
    this.isHomeView = true;
    this._homeTitle = document.title;
    const footerTitle = document.getElementById('app-footer-title');
    this._homeFooterTitle = footerTitle ? footerTitle.textContent : '';
    this._landingSource = new URLSearchParams(location.search).get('src');
    const sheetsCss = document.getElementById('sheets-css');
    if (sheetsCss) sheetsCss.media = 'all';
    let savedLevel = window.MathsStorage.getCurrentLevel() || '3eme';
    this.currentLevel = savedLevel;
    this.initTheme();
    if (window.MathsAudio) {
      window.MathsAudio.updateToggleButton();
    }
    this.bindGlobalEvents();
    this.bindKeyboardShortcuts();
    this.bindClickableA11y();
    this.bindModalA11y();
    this.bindScrollHints();
    this.bindHistoryNavigation();
    this.bindPremiereVoieSwitch();
    this.renderDomainNav();
    // Badges à niveaux : premier passage silencieux (une progression existante ne déclenche pas de rafale)
    if (window.MathsBadges) window.MathsBadges.evaluate({ silent: true });
    this.updateHeaderProfile();
    // Série commune d'un lien partagé (&seed=) ; sans graine, le moteur n'est pas touché
    if (new URLSearchParams(location.search).has('seed')) this.installSharedSeries();
    // L'URL ne reflète la navigation qu'une fois le lien d'arrivée lu (sinon la sélection
    // du chapitre par défaut écraserait ?chapitre=… avant sa lecture) : _urlSyncReady ensuite.
    const route = this.resolveUrlRoute();
    if (route) {
      // Lien direct : seul le niveau visé est téléchargé
      this.currentLevel = route.level;
      const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => this.chapterInLevel(c, route.level));
      this.currentChapterId = route.chapter ? route.chapter.id : (levelChapters[0] ? levelChapters[0].id : this.currentChapterId);
      this.showLoadingWorkspace();
      this.whenLevelReady(route.level, () => {
        this.setWorkspaceLoading(false);
        this.switchLevel(route.level, false);
        if (!this.checkUrlShareParams()) this.showHomeView();
        this._urlSyncReady = true;
        if (!route.chapter) this.applyParentsLanding(true);
      }, () => {
        this.setWorkspaceLoading(false);
        this.showHomeView();
        this._urlSyncReady = true;
      });
    } else {
      const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => this.chapterInLevel(c, this.currentLevel));
      const lastActive = window.MathsStorage.getLastActiveChapter ? window.MathsStorage.getLastActiveChapter() : null;
      const resumable = lastActive && levelChapters.find(c => c.id === lastActive.chapterId);
      if (resumable) this.currentChapterId = resumable.id;
      else if (levelChapters[0] && !levelChapters.some(c => c.id === this.currentChapterId)) this.currentChapterId = levelChapters[0].id;
      this.showHomeView();
      this._urlSyncReady = true;
      this.preloadResumeLevel();
      this.applyParentsLanding(false);
    }
  },

  /** Niveau et chapitre visés par l'URL d'arrivée, lus avant tout chargement (null : accueil). */
  resolveUrlRoute() {
    const params = new URLSearchParams(location.search);
    const chapParam = params.get('chapitre') || params.get('chapter') || params.get('chap');
    const chapter = chapParam && (window.MATHS_CHAPTERS || []).find(c => c.id.toLowerCase() === chapParam.toLowerCase());
    if (chapter) return { level: chapter.level || '3eme', chapter };
    const levelParam = params.get('level') || params.get('niveau');
    if (this.VALID_LEVELS.includes(levelParam)) return { level: levelParam, chapter: null };
    const mode = (params.get('mode') || params.get('tool') || '').toLowerCase();
    return this.URL_MODES.includes(mode) ? { level: this.currentLevel, chapter: null } : null;
  },

  /** Cadre du chapitre visé par un lien direct, affiché pendant le téléchargement de son niveau. */
  showLoadingWorkspace() {
    document.documentElement.removeAttribute('data-deep-link');
    this.hideHomeView();
    this.renderLevelFrame(this.currentLevel, false);
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
    if (chapter) this.updateChapterHero(chapter);
    this.updateTierButtonsUI();
    this.updateVisualizerButtonUI();
    const statement = document.getElementById('exercise-statement-box');
    if (statement) statement.textContent = 'Chargement de l\'exercice…';
    this.setWorkspaceLoading(true);
    this.updateDocumentTitle();
  },

  /**
   * Pendant le chargement, pas de boutons sans effet à l'écran. Leur place et la hauteur de
   * la zone restent réservées : le pied de page ne remonte pas puis redescend (CLS).
   */
  setWorkspaceLoading(loading) {
    document.querySelectorAll('.adaptive-control-panel, .exercise-workspace-box > :not(#exercise-statement-box)').forEach(el => {
      el.style.visibility = loading ? 'hidden' : '';
    });
    const workspace = document.querySelector('.main-workspace');
    if (workspace) workspace.style.minHeight = loading ? '100vh' : '';
  },

  /**
   * Retour d'un élève qui a déjà travaillé : son niveau est préparé en tâche de fond.
   * Rien pour un nouveau visiteur : les scripts à la demande s'exécutent dans une file unique,
   * précharger la 3e retarderait le niveau qu'il va choisir.
   */
  preloadResumeLevel() {
    if (!this.homeResumeTarget || !window.MathsDataLoader) return;
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === this.homeResumeTarget.chapterId);
    if (!chapter) return;
    const preload = () => window.MathsDataLoader.ensureLevel(chapter.level || '3eme').catch(console.warn);
    if (window.requestIdleCallback) window.requestIdleCallback(preload, { timeout: 4000 });
    else setTimeout(preload, 1500);
  },

  /**
   * Arrivée depuis la page parents (?src=parents) : l'onglet Cours et la liste des chapitres
   * pour une classe donnée, et dans tous les cas un conseil refermable.
   */
  applyParentsLanding(withLevel) {
    if (this._landingSource !== 'parents') return;
    if (withLevel) {
      this.switchTab('course');
      const bar = document.getElementById('mobile-chapter-trigger-bar');
      if (bar && bar.getClientRects().length > 0) this.setMobileChapterDrawer(true);
    }
    const main = document.getElementById('contenu');
    if (!main || document.getElementById('parents-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'parents-banner';
    banner.className = 'no-print';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Conseil aux parents');
    const text = document.createElement('span');
    text.textContent = withLevel
      ? 'Choisissez le chapitre vu en classe, lisez le cours ensemble, puis lancez l\'entraînement.'
      : 'Choisissez la classe de votre enfant, puis le chapitre vu en classe : lisez le cours ensemble et lancez l\'entraînement.';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'btn-secondary btn-sm';
    close.textContent = 'Fermer';
    close.setAttribute('aria-label', 'Fermer ce conseil');
    close.setAttribute('data-click', 'MathsApp.dismissParentsBanner');
    banner.append(text, close);
    main.parentNode.insertBefore(banner, main);
  },

  dismissParentsBanner() {
    const banner = document.getElementById('parents-banner');
    if (banner) banner.remove();
  },

  /**
   * Exécute fn une fois les données du niveau chargées (chargement à la demande,
   * voir js/dataLoader.js). Immédiat si le niveau est déjà disponible.
   * onFail : appelé si le chargement échoue (après le message d'erreur).
   */
  whenLevelReady(level, fn, onFail) {
    const loader = window.MathsDataLoader;
    if (!loader || !level || loader.isLevelLoaded(level)) return fn();
    document.body.classList.add('level-loading');
    const slowTimer = setTimeout(() => this.showToast('⏳ Chargement des contenus…', 2500), 400);
    return loader.ensureLevel(level)
      .then(() => fn())
      .catch(err => {
        console.error(err);
        this.showToast('⚠️ Impossible de charger les contenus de ce niveau. Vérifie ta connexion puis réessaie.', 5000);
        this.syncLevelSelect();
        if (onFail) onFail();
      })
      .finally(() => {
        clearTimeout(slowTimer);
        document.body.classList.remove('level-loading');
      });
  },

  isLevelReady(level) {
    const loader = window.MathsDataLoader;
    return !loader || !level || loader.isLevelLoaded(level);
  },

  switchCycle(cycleId, targetLevel = null) {
    const cycleInfo = this.CYCLES[cycleId];
    if (!cycleInfo) return;

    const nextLevel = (targetLevel && cycleInfo.levels.includes(targetLevel))
      ? targetLevel
      : (cycleInfo.levels.includes(this.currentLevel) ? this.currentLevel : cycleInfo.defaultLevel);
    if (!this.isLevelReady(nextLevel)) return this.whenLevelReady(nextLevel, () => this.switchCycle(cycleId, targetLevel));

    window.MathsStorage.setCurrentCycle(cycleId);
    this.switchLevel(nextLevel, true);
  },

  switchLevel(level, autoSelectFirst = false) {
    if (!this.VALID_LEVELS.includes(level)) return;
    if (!this.isLevelReady(level)) return this.whenLevelReady(level, () => this.switchLevel(level, autoSelectFirst));

    this._workspaceLevel = level;
    this.currentLevel = level;
    this.hideHomeView();
    window.MathsStorage.setCurrentLevel(level);
    this.rememberPremiereVoie(level);
    this.renderLevelFrame(level, autoSelectFirst);
    this.selectChapter(this.currentChapterId);
    this.updateTierButtonsUI();
    this.updateVisualizerButtonUI();

    if (this.currentTab === 'stats') {
      this.renderStatsView();
    }
  },

  /** Badge du niveau dans l'en-tête et pied de page. */
  updateLevelLabels() {
    const cycle = window.MathsStorage.getCycleForLevel(this.currentLevel);
    const label = this.getLevelName(this.currentLevel);
    const tag = document.getElementById('app-level-tag');
    if (tag) {
      tag.className = `brand-level-tag badge-${cycle}`;
      tag.textContent = label;
    }
    const footerTitle = document.getElementById('app-footer-title');
    if (footerTitle) {
      footerTitle.textContent = `L'Établi des Maths (${label} • ${this.CYCLES[cycle] ? this.CYCLES[cycle].name : 'Maths'}) — Outils pour apprendre et pratiquer`;
    }
  },

  /** Titre de l'onglet : le contenu d'abord, le titre du fichier sur l'accueil (celui que retiennent les moteurs). */
  updateDocumentTitle() {
    if (this.isHomeView) {
      document.title = this._homeTitle;
      return;
    }
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
    if (!chapter) return;
    const level = chapter.level || '3eme';
    document.title = `${chapter.shortTitle || chapter.title} (${this.LEVEL_SHORT_LABELS[level] || level}) – ${this.TAB_LABELS[this.currentTab] || 'Entraînement'} | L'Établi des Maths`;
  },

  /** Voie et épreuves visées, affichées sous la mention des concours (#concours-exam-notice) */
  CONCOURS_EXAM_NOTES: {
    sante: 'Repère de novembre 2026 : en 2026-2027, l’accès aux études de santé se fait par le PASS ou par une L.AS, et chaque université fixe ses enseignements et ses épreuves. Le décret n° 2026-988 du 23 octobre 2026 crée une licence portail santé à partir de la rentrée 2027 ; les parcours actuels sont maintenus à titre transitoire jusqu’à la fin de l’année 2028-2029. Ces chapitres revoient les mathématiques de terminale utiles en première année : vérifiez les modalités auprès de l’université visée.',
    pass: 'Repère de novembre 2026 : en 2026-2027, l’accès aux études de santé se fait par le PASS ou par une L.AS, et chaque université fixe ses enseignements et ses épreuves. Le décret n° 2026-988 du 23 octobre 2026 crée une licence portail santé à partir de la rentrée 2027 ; les parcours actuels sont maintenus à titre transitoire jusqu’à la fin de l’année 2028-2029. Ces chapitres couvrent les biostatistiques et la biophysique usuelles de première année, sans suivre le programme d’une université précise : vérifiez les modalités auprès de la vôtre.',
    crpe: 'Voie visée : ces chapitres préparent la partie mathématiques de la première épreuve écrite d’admissibilité du concours bac+3 (épreuve de 4 h en deux parties indépendantes, français et mathématiques, notées chacune sur 10 ; une note inférieure ou égale à 2,5 à l’une des parties est éliminatoire), sur le programme de mathématiques du cycle 4 en vigueur à la rentrée 2026. La première épreuve orale d’admission porte, au choix fait à l’inscription, sur une notion de français ou de mathématiques, à partir de documents fournis par le jury (1 h de préparation, 45 min d’épreuve). Concours bac+5 : écrit de mathématiques de 3 h (note inférieure ou égale à 5 éliminatoire), dont le programme ajoute la partie « Nombres et calculs, algèbre » de seconde, dont les compléments sont signalés « Voie bac+5 » dans les chapitres de nombres et de calcul, ainsi que la didactique.',
    veto: 'Concours vétérinaire, voie BCPST (repères de la notice de la session 2026) : écrit « Méthodes de calcul et raisonnement » (2 h, sans calculatrice), écrit « Modélisation mathématique et informatique » (3 h, calculatrice en mode examen, avec de l’algorithmique de simulation) et oral « Mathématiques pratiques et informatique ». Les DS générés ici suivent le format de la première épreuve écrite.'
  },

  /** Cadre d'un niveau (onglets, titres, liste des chapitres) : n'utilise que MATHS_CHAPTERS, disponible dès le départ. */
  renderLevelFrame(level, autoSelectFirst) {
    const currentCycle = window.MathsStorage.getCycleForLevel(level);

    // Met à jour l'onglet du cycle actif
    document.querySelectorAll('.cycle-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cycle') === currentCycle);
      btn.setAttribute('aria-current', btn.getAttribute('data-cycle') === currentCycle ? 'true' : 'false');
    });

    // Affiche le groupe de niveaux correspondant au cycle
    document.querySelectorAll('.cycle-levels-group').forEach(group => {
      const isCurrent = group.id === `levels-group-${currentCycle}`;
      group.style.display = isCurrent ? 'flex' : 'none';
      group.classList.toggle('active', isCurrent);
    });

    // Met à jour les pilules du sélecteur
    const pillLevel = this.pillLevelOf(level);
    document.querySelectorAll('.level-pill').forEach(btn => {
      const on = btn.getAttribute('data-level') === pillLevel;
      btn.classList.toggle('active', on);
      if (on) btn.setAttribute('aria-current', 'true'); else btn.removeAttribute('aria-current');
    });

    this.syncLevelSelect();
    this.syncPremiereVoieSwitch(level);

    const concoursNotice = document.getElementById('concours-notice');
    if (concoursNotice) concoursNotice.hidden = currentCycle !== 'concours';
    const examNotice = document.getElementById('concours-exam-notice');
    if (examNotice) {
      const note = this.CONCOURS_EXAM_NOTES[level] || '';
      examNotice.textContent = note;
      examNotice.hidden = !note;
    }

    const lvlLabel = this.getLevelName(level);
    this.updateLevelLabels();

    // Titre dynamique dans la barre latérale
    const sidebarTitle = document.querySelector('.sidebar-title-row h2');
    if (sidebarTitle) {
      sidebarTitle.textContent = `Progression ${lvlLabel}`;
    }

    // Filtrer les chapitres de ce niveau
    const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => this.chapterInLevel(c, level));
    const countEl = document.querySelector('.chapters-count');
    if (countEl) {
      countEl.textContent = `${levelChapters.length} chapitres`;
    }

    // Détermine le chapitre à sélectionner
    const currentExists = levelChapters.some(c => c.id === this.currentChapterId);
    if ((!currentExists || autoSelectFirst) && levelChapters.length > 0) {
      this.currentChapterId = levelChapters[0].id;
    }

    this.renderDomainNav();
    this.renderChaptersGrid();
  },

  // --- Gestion du Thème (Clair / Sombre) ---
  initTheme() {
    const saved = window.MathsStorage.load().theme || document.documentElement.getAttribute('data-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeButton(saved);
    // Aucun choix enregistré : le thème suit le système en direct (js/themeInit.js), l'état annoncé du bouton aussi
    if (!window.matchMedia) return;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (systemDark.addEventListener) systemDark.addEventListener('change', e => {
      if (!window.MathsStorage.load().theme) this.updateThemeButton(e.matches ? 'dark' : 'light');
    });
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    const data = window.MathsStorage.load();
    data.theme = next;
    window.MathsStorage.save(data);
    this.updateThemeButton(next);
  },

  updateThemeButton(theme) {
    this.setSettingState('theme-toggle-btn', theme === 'dark');
  },

  // État d'un interrupteur du menu Réglages (role="switch") : coche + texte « activé / désactivé »
  setSettingState(id, on) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.setAttribute('aria-checked', on ? 'true' : 'false');
    const st = btn.querySelector('.settings-state');
    if (st) st.textContent = on ? 'activé' : 'désactivé';
  },

  // --- Affichage simplifié (accessibilité) ---
  toggleSimpleDisplay() {
    const root = document.documentElement;
    const on = !root.hasAttribute('data-simple');
    if (on) root.setAttribute('data-simple', ''); else root.removeAttribute('data-simple');
    try { localStorage.setItem('etabli_affichage_simple', on ? '1' : '0'); } catch (e) { /* stockage indisponible : le réglage n'est pas conservé */ }
    this.updateSimpleButton();
  },

  updateSimpleButton() {
    this.setSettingState('simple-toggle-btn', document.documentElement.hasAttribute('data-simple'));
  },

  // --- Police adaptée à la dyslexie (OpenDyslexic, chargée seulement si le réglage est actif) ---
  toggleDysFont() {
    const root = document.documentElement;
    const on = !root.hasAttribute('data-dys');
    if (on) root.setAttribute('data-dys', ''); else root.removeAttribute('data-dys');
    try { localStorage.setItem('etabli_police_dys', on ? '1' : '0'); } catch (e) { /* stockage indisponible : le réglage n'est pas conservé */ }
    this.updateDysButton();
  },

  updateDysButton() {
    this.setSettingState('dys-toggle-btn', document.documentElement.hasAttribute('data-dys'));
  },

  // --- Raccourcis clavier à une touche (WCAG 2.1.4 : désactivables) ---
  shortcutsEnabled() {
    if (this._shortcutsOn === undefined) {
      try { this._shortcutsOn = localStorage.getItem('etabli_raccourcis') !== '0'; } catch (e) { this._shortcutsOn = true; }
    }
    return this._shortcutsOn;
  },

  toggleShortcuts() {
    this._shortcutsOn = !this.shortcutsEnabled();
    try { localStorage.setItem('etabli_raccourcis', this._shortcutsOn ? '1' : '0'); } catch (e) { /* stockage indisponible : le réglage n'est pas conservé */ }
    this.updateShortcutsButton();
  },

  updateShortcutsButton() {
    this.setSettingState('shortcuts-toggle-btn', this.shortcutsEnabled());
  },

  // Sélecteur de niveau de l'en-tête mobile : « Accueil » sur la page d'accueil, sinon le niveau courant
  syncLevelSelect() {
    const select = document.getElementById('mobile-level-select');
    if (select) select.value = this.isHomeView ? '' : this.pillLevelOf(this.currentLevel);
  },

  // En-tête mobile : le bouton « ⋯ » ouvre le panneau (outils, progression, réglages).
  // Appelé avant bindSettingsMenu : avec Réglages ouvert, Échap ne referme que Réglages.
  bindHeaderMenu() {
    const select = document.getElementById('mobile-level-select');
    const button = document.getElementById('btn-header-menu');
    const panel = document.getElementById('header-tools-panel');
    const header = button && button.closest('.header-inner');
    if (!select || !button || !panel || !header) return;

    select.addEventListener('change', () => {
      if (select.value === '1ere') this.openPremiere();
      else if (select.value) this.switchLevel(select.value);
      else this.showHomeView();
    });

    const isOpen = () => header.classList.contains('is-menu-open');
    const setOpen = (open) => {
      header.classList.toggle('is-menu-open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    const insideMenu = (node) => header.contains(node) || !!(node.closest && node.closest('#settings-panel'));

    button.addEventListener('click', () => setOpen(!isOpen()));
    // Une action choisie referme le panneau ; ouvrir Réglages (summary) le laisse ouvert
    panel.addEventListener('click', (e) => {
      if (e.target.closest('button')) setOpen(false);
    });
    document.addEventListener('click', (e) => {
      if (isOpen() && !insideMenu(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || !isOpen() || document.getElementById('settings-menu')?.open) return;
      setOpen(false);
      button.focus();
    });
    header.addEventListener('focusout', (e) => {
      if (e.relatedTarget && !insideMenu(e.relatedTarget)) setOpen(false);
    });
    window.addEventListener('resize', () => {
      if (isOpen() && window.innerWidth > 768) setOpen(false);
    });
  },

  // Menu Réglages (<details>) : le panneau est déplacé à la fin de <body> pour ne pas être rogné
  // par la rangée d'outils (défilement horizontal + masque en dégradé sur mobile).
  // Fermeture au clic extérieur, avec Échap (focus rendu au bouton), au défilement et au redimensionnement.
  bindSettingsMenu() {
    const menu = document.getElementById('settings-menu');
    const panel = menu && menu.querySelector('.settings-panel');
    const trigger = menu && menu.querySelector('summary');
    if (!menu || !panel || !trigger) return;
    panel.id = 'settings-panel';
    trigger.setAttribute('aria-controls', 'settings-panel');
    document.body.appendChild(panel);
    panel.hidden = true;

    const place = () => {
      const r = trigger.getBoundingClientRect();
      // Téléphone en paysage : le panneau remonte pour rester entier à l'écran
      panel.style.top = Math.max(8, Math.round(Math.min(r.bottom + 6, window.innerHeight - panel.offsetHeight - 8))) + 'px';
      panel.style.right = Math.max(8, Math.round(document.documentElement.clientWidth - r.right)) + 'px';
    };
    menu.addEventListener('toggle', () => {
      trigger.setAttribute('aria-expanded', menu.open ? 'true' : 'false');
      panel.hidden = !menu.open;
      if (menu.open) {
        place();
        const first = panel.querySelector('button');
        if (first) first.focus({ preventScroll: true });
      }
    });
    trigger.setAttribute('aria-expanded', 'false');
    const close = () => { if (menu.open) menu.open = false; };
    document.addEventListener('click', (e) => {
      if (menu.open && !menu.contains(e.target) && !panel.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.open) { close(); trigger.focus(); }
    });
    // Tabulation hors du panneau : on referme
    panel.addEventListener('focusout', (e) => {
      if (e.relatedTarget && !panel.contains(e.relatedTarget) && e.relatedTarget !== trigger) close();
    });
    window.addEventListener('resize', close);
    window.addEventListener('scroll', close, { passive: true });
  },

  // --- Navigation par Domaine & Chapitre ---
  bindGlobalEvents() {
    // Bouton thème
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());
    const simpleBtn = document.getElementById('simple-toggle-btn');
    if (simpleBtn) simpleBtn.addEventListener('click', () => this.toggleSimpleDisplay());
    this.updateSimpleButton();
    const dysBtn = document.getElementById('dys-toggle-btn');
    if (dysBtn) dysBtn.addEventListener('click', () => this.toggleDysFont());
    this.updateDysButton();
    const shortcutsBtn = document.getElementById('shortcuts-toggle-btn');
    if (shortcutsBtn) shortcutsBtn.addEventListener('click', () => this.toggleShortcuts());
    this.updateShortcutsButton();
    this.bindHeaderMenu();
    this.bindSettingsMenu();

    // Déclencheur du tiroir mobile de chapitres
    const mobileChapterBtn = document.getElementById('mobile-chapter-btn');
    const sidebarChapters = document.getElementById('sidebar-chapters');
    if (mobileChapterBtn && sidebarChapters) {
      mobileChapterBtn.addEventListener('click', () => {
        this.setMobileChapterDrawer(!sidebarChapters.classList.contains('mobile-open'));
      });
    }

    // Bouton ouvrir passeport modal
    const passportBtn = document.getElementById('passport-btn');
    if (passportBtn) {
      passportBtn.addEventListener('click', () => {
        // Depuis l'accueil, il faut d'abord quitter la vue d'accueil pour afficher le Bilan
        this.whenLevelReady(this.currentLevel, () => {
          this.hideHomeView();
          this.switchTab('stats');
        });
      });
    }

    // Recherche instantanée de chapitres
    const searchInput = document.getElementById('chapters-search-input');
    const searchClear = document.getElementById('chapters-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (searchClear) {
          searchClear.style.display = this.searchQuery ? 'inline-block' : 'none';
        }
        this.renderChaptersGrid();
      });
    }
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          this.searchQuery = '';
          searchClear.style.display = 'none';
          searchInput.focus();
          this.renderChaptersGrid();
        }
      });
    }

    // Onglets principaux du chapitre
    const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
    tabBtns.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
      // Onglets ARIA : flèches gauche/droite, Début, Fin
      btn.addEventListener('keydown', (e) => {
        const n = tabBtns.length;
        const j = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
        if (j === undefined) return;
        e.preventDefault();
        this.switchTab(tabBtns[j].dataset.tab);
        tabBtns[j].focus();
      });
    });
    // Filtres de domaine : état restitué (aria-pressed)
    document.querySelectorAll('.domain-filter-btn').forEach(b => b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false'));

    // Filtres de domaine
    document.querySelectorAll('.domain-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.domain-filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        e.currentTarget.classList.add('active');
        e.currentTarget.setAttribute('aria-pressed', 'true');
        this.currentFilterDomain = e.currentTarget.dataset.domain;
        this.renderChaptersGrid();
      });
    });

    // Outils de l'en-tête : les données du niveau peuvent ne pas être encore chargées (accueil)
    const openTool = fn => () => this.whenLevelReady(this.currentLevel, fn);

    // Boutons Diaporama
    const openDiaporama = openTool(() => window.MathsDiaporama.openModal(this.currentChapterId));
    const openDiapoBtn = document.getElementById('btn-open-diaporama');
    if (openDiapoBtn) openDiapoBtn.addEventListener('click', openDiaporama);
    const quickDiapoBtn = document.getElementById('btn-launch-diapo-quick');
    if (quickDiapoBtn) quickDiapoBtn.addEventListener('click', openDiaporama);

    // Boutons Devoir Flash
    const openQuiz = openTool(() => window.MathsQuizGenerator.openModal(this.currentChapterId));
    const openQuizBtn = document.getElementById('btn-open-quiz');
    if (openQuizBtn) openQuizBtn.addEventListener('click', openQuiz);
    const quizFromSheetsBtn = document.getElementById('btn-quiz-from-sheets');
    if (quizFromSheetsBtn) quizFromSheetsBtn.addEventListener('click', openQuiz);

    // Bouton Flashcards (Mémorisation active Leitner / Fabien Olicard)
    const openFlashcardsBtn = document.getElementById('btn-open-flashcards');
    if (openFlashcardsBtn) {
      openFlashcardsBtn.addEventListener('click', openTool(() => {
        if (window.MathsFlashcards && typeof window.MathsFlashcards.openModal === 'function') {
          window.MathsFlashcards.openModal(this.currentChapterId);
        }
      }));
    }

    // Bouton Partager le lien d'entraînement
    const shareBtn = document.getElementById('btn-share-training');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this.shareCurrentTraining());
    }

    // Bouton Question Aléatoire Infinie (Générateur procédural)
    const randomExoBtn = document.getElementById('btn-random-exercise');
    if (randomExoBtn) {
      randomExoBtn.addEventListener('click', () => {
        window.MathsAdaptiveEngine.nextExercise();
        this.renderTrainingView();
      });
    }

    // Bouton Réinitialiser TOUS les chapitres à 0%
    const resetAllBtn = document.getElementById('btn-reset-all-mastery');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => this.chapterInLevel(c, this.currentLevel));
        const levelName = this.getLevelName(this.currentLevel);
        if (confirm(`⚠️ Veux-tu vraiment remettre à 0% la maîtrise de TOUS les ${levelChapters.length} chapitres de ${levelName} ?`)) {
          levelChapters.forEach(c => window.MathsStorage.resetChapterProgress(c.id));
          window.MathsAdaptiveEngine.state.manualTierSelected = false;
          window.MathsAdaptiveEngine.startChapterSession(this.currentChapterId);
          this.renderChaptersGrid();
          this.updateChapterMasteryUI(this.currentChapterId);
          this.renderTrainingView();
          if (this.currentTab === 'stats') {
            this.renderStatsView();
          }
        }
      });
    }

    // Bouton Réinitialiser le chapitre actuel à 0%
    const resetChapBtn = document.getElementById('btn-reset-chapter-mastery');
    if (resetChapBtn) {
      resetChapBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const curChap = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
        const chapName = curChap ? `${curChap.num} (${curChap.title})` : this.currentChapterId;
        if (confirm(`Remettre à 0% la maîtrise du chapitre ${chapName} ?`)) {
          window.MathsStorage.resetChapterProgress(this.currentChapterId);
          window.MathsAdaptiveEngine.state.manualTierSelected = false;
          window.MathsAdaptiveEngine.startChapterSession(this.currentChapterId);
          this.renderChaptersGrid();
          this.updateChapterMasteryUI(this.currentChapterId);
          this.renderTrainingView();
          if (this.currentTab === 'stats') {
            this.renderStatsView();
          }
        }
      });
    }

    // Clavier virtuel mathématique
    this.bindVirtualKeyboard();

    // Clic sur la flamme / série quotidienne (Daily Streak)
    const streakPill = document.getElementById('header-streak-pill');
    if (streakPill) {
      streakPill.addEventListener('click', () => this.openStreakModal());
    }

    // Fermeture de la modale streak au clic sur le fond sombre
    const streakModal = document.getElementById('streak-modal');
    if (streakModal) {
      streakModal.addEventListener('click', (e) => {
        if (e.target === streakModal) this.closeStreakModal();
      });
    }

    // Clic sur le niveau / XP pour afficher le popup de progression
    const levelPill = document.getElementById('header-level-pill');
    if (levelPill) {
      levelPill.addEventListener('click', () => this.openLevelModal());
    }
    const xpPill = document.getElementById('header-xp-pill');
    if (xpPill) {
      xpPill.addEventListener('click', () => this.openLevelModal());
    }

    // Fermeture de la modale level au clic sur le fond sombre
    const levelModal = document.getElementById('level-modal');
    if (levelModal) {
      levelModal.addEventListener('click', (e) => {
        if (e.target === levelModal) this.closeLevelModal();
      });
    }
  },

  /**
   * Ouvre / ferme le tiroir des chapitres (téléphone et tablette).
   * Renvoie true si le tiroir était ouvert avant l'appel.
   */
  setMobileChapterDrawer(open) {
    const sidebar = document.getElementById('sidebar-chapters');
    const btn = document.getElementById('mobile-chapter-btn');
    const arrow = document.getElementById('mobile-chapter-arrow');
    if (!sidebar) return false;
    const wasOpen = sidebar.classList.contains('mobile-open');
    sidebar.classList.toggle('mobile-open', !!open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (arrow) arrow.textContent = open ? '▴' : '▾';
    return wasOpen;
  },

  /** Éléments cliquables non natifs (div data-click, cartes) : rendus accessibles au clavier. */
  CLICKABLE_SELECTOR: '[data-click]:not(button):not(a):not(input):not(select):not(textarea):not(label):not(.modal-overlay):not([class*="overlay"]), .chapter-trophy-card',

  enhanceClickableA11y(root = document) {
    const nodes = root.querySelectorAll ? root.querySelectorAll(this.CLICKABLE_SELECTOR) : [];
    nodes.forEach(el => {
      if (el.hasAttribute('data-self')) return; // fermeture de fond de modale
      // Une carte qui contient déjà des contrôles ne devient pas un bouton (contrôles imbriqués) : clic souris seulement
      if (el.querySelector('button, a[href], input, select, textarea')) return;
      if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    });
  },

  bindClickableA11y() {
    this.enhanceClickableA11y();
    new MutationObserver(mutations => {
      mutations.forEach(m => m.addedNodes.forEach(n => {
        if (n.nodeType !== 1) return;
        if (n.matches && n.matches(this.CLICKABLE_SELECTOR)) this.enhanceClickableA11y(n.parentNode || document);
        else this.enhanceClickableA11y(n);
      }));
    }).observe(document.body, { childList: true, subtree: true });
    // Entrée / Espace activent les éléments role="button" non natifs
    document.addEventListener('keydown', e => {
      const el = e.target;
      if (!(e.key === 'Enter' || e.key === ' ') || !el || !el.matches || !el.matches('[role="button"]:not(button)')) return;
      e.preventDefault();
      e.stopPropagation();
      el.click();
    }, true);
  },

  /**
   * Rangées de l'en-tête défilant horizontalement sur mobile (barre de défilement masquée) :
   * un fondu sur le bord signale qu'il reste des boutons à droite / à gauche.
   */
  bindScrollHints() {
    const rows = document.querySelectorAll('.cycle-tabs-row, .cycle-levels-group, .status-pills-row, .header-actions-row');
    const update = el => {
      const max = el.scrollWidth - el.clientWidth;
      el.classList.toggle('scroll-more-right', max > 2 && el.scrollLeft < max - 2);
      el.classList.toggle('scroll-more-left', max > 2 && el.scrollLeft > 2);
    };
    rows.forEach(el => {
      el.addEventListener('scroll', () => update(el), { passive: true });
      // Un élément qui reçoit le focus clavier est ramené dans la zone visible
      el.addEventListener('focusin', e => { if (e.target.scrollIntoView) e.target.scrollIntoView({ block: 'nearest', inline: 'nearest' }); });
    });
    const all = () => rows.forEach(update);
    if (typeof ResizeObserver === 'function') {
      const ro = new ResizeObserver(entries => entries.forEach(en => update(en.target)));
      rows.forEach(el => ro.observe(el));
    } else {
      window.addEventListener('resize', all);
    }
    setTimeout(all, 300);
  },

  isModalOpen(modal) {
    return modal.style.display !== 'none' && modal.getClientRects().length > 0;
  },

  openModals() {
    return Array.from(document.querySelectorAll('.modal-overlay')).filter(m => this.isModalOpen(m));
  },

  /** Ferme la modale du dessus par son bouton de fermeture ; false s'il n'y en a pas. */
  closeTopModal() {
    const modals = this.openModals();
    const top = modals[modals.length - 1];
    if (!top) return false;
    const closeBtn = Array.from(top.querySelectorAll('.modal-close-btn, .reward-modal-close, [aria-label="Fermer"]')).find(el => el.getClientRects().length > 0);
    if (!closeBtn) return false;
    closeBtn.click();
    return true;
  },

  /**
   * Bouton Retour : une modale ouverte occupe une entrée d'historique, que Retour referme sans
   * changer la vue. Fermée autrement (croix, Échap), l'entrée est retirée. Le popup de
   * félicitations, qui se ferme seul, n'en crée pas.
   */
  syncModalHistory() {
    if (!window.history || !history.pushState || this._skipPop) return;
    const open = this.openModals().some(m => m.id !== 'reward-unlock-modal');
    if (open && !this._modalEntry) {
      this._modalEntry = true;
      history.pushState({ ...(history.state || {}), modal: true }, '', location.href);
    } else if (!open && this._modalEntry) {
      this._modalEntry = false;
      this._skipPop = true;
      history.back();
    }
  },

  /**
   * Accessibilité des modales : Échap ferme la modale du dessus, le focus y entre à
   * l'ouverture, reste piégé dedans (Tab) et revient à l'élément d'origine à la fermeture.
   */
  bindModalA11y() {
    const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';
    // offsetParent est null pour les éléments position:fixed (les fonds de modale) : on utilise getClientRects
    const isOpen = modal => this.isModalOpen(modal);
    const visible = el => el.getClientRects().length > 0;
    const returnFocus = new Map();

    new MutationObserver(mutations => {
      let modalChanged = false;
      mutations.forEach(({ target: modal }) => {
        // Seuls les fonds de modale sont concernés (sinon tout changement de style volerait le focus)
        if (!modal.classList || !modal.classList.contains('modal-overlay')) return;
        modalChanged = true;
        const open = modal.style.display !== 'none';
        if (open && !returnFocus.has(modal)) {
          returnFocus.set(modal, document.activeElement);
          setTimeout(() => {
            if (!isOpen(modal) || modal.contains(document.activeElement)) return;
            const first = Array.from(modal.querySelectorAll(FOCUSABLE)).find(visible);
            (first || modal).focus({ preventScroll: true });
          }, 60);
        } else if (!open && returnFocus.has(modal)) {
          const back = returnFocus.get(modal);
          returnFocus.delete(modal);
          if (back && document.contains(back) && back.focus) {
            const hidden = !back.getClientRects().length;
            // Récompense fermée après une bonne réponse : « Valider » a disparu entre-temps, le focus va sur la correction
            const feedback = document.getElementById('exercise-feedback-zone');
            if (hidden && feedback && feedback.getClientRects().length && feedback.parentElement.contains(back)) {
              this.focusFeedback(feedback, { preventScroll: true });
              return;
            }
            // Élément rangé entre-temps dans le panneau de l'en-tête mobile : le focus revient au bouton « ⋯ »
            const menuBtn = document.getElementById('btn-header-menu');
            const target = hidden && menuBtn && menuBtn.getClientRects().length ? menuBtn : back;
            target.focus({ preventScroll: true });
          }
        }
      });
      if (modalChanged) this.syncModalHistory();
    }).observe(document.body, { attributes: true, attributeFilter: ['style'], subtree: true });

    document.addEventListener('keydown', e => {
      const modals = this.openModals();
      if (!modals.length) return;
      const top = modals[modals.length - 1];
      if (e.key === 'Escape') {
        if (this.closeTopModal()) e.preventDefault();
      } else if (e.key === 'Tab') {
        const items = Array.from(top.querySelectorAll(FOCUSABLE)).filter(visible);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (!top.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  },

  /**
   * Reflète la vue courante dans l'URL (?chapitre=ID) : liens partageables et bouton
   * « Retour » du navigateur. Les pages à indexer sont celles de cours/ ; ces URL ont une canonique vers la racine.
   */
  syncUrl(params) {
    if (!this._urlSyncReady || this._restoringFromHistory || !window.history || !history.pushState) return;
    // Un retour d'historique (fermeture de modale) est en route : écrire maintenant viserait la mauvaise entrée
    if (this._skipPop) { this._pendingUrlSync = params; return; }
    const current = new URLSearchParams(location.search);
    // Les paramètres d'outil d'un lien partagé (mode, palier…) restent tant qu'on ne change pas de vue
    const sameView = (params.chapitre || null) === (current.get('chapitre') || current.get('chapter') || current.get('chap'));
    if (sameView && (params.chapitre || !location.search)) return;
    const urlParams = new URLSearchParams(params);
    const tabSlug = params.chapitre && this.TAB_SLUGS[this.currentTab];
    if (tabSlug) urlParams.set('onglet', tabSlug);
    const qs = urlParams.toString();
    if (this._modalEntry) {
      // Changement de vue depuis une modale : sa propre entrée d'historique est réutilisée
      this._modalEntry = false;
      history.replaceState(params, '', qs ? `?${qs}` : location.pathname);
    } else {
      history.pushState(params, '', qs ? `?${qs}` : location.pathname);
    }
    // Statistiques d'audience : une « page vue » par chapitre consulté
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({ path: location.pathname + location.search });
    }
  },

  bindHistoryNavigation() {
    // Rechargement sur l'entrée d'une modale : la modale n'existe plus, l'entrée redevient ordinaire
    if (history.state && history.state.modal) {
      const { modal, ...state } = history.state;
      history.replaceState(state, '', location.href);
    }
    window.addEventListener('popstate', (e) => {
      if (this._skipPop) {
        this._skipPop = false;
        const pendingUrl = this._pendingUrlSync;
        this._pendingUrlSync = null;
        if (pendingUrl) this.syncUrl(pendingUrl);
        this.syncModalHistory();
        return;
      }
      if (this._modalEntry && this.openModals().length) {
        // Retour referme la modale, la vue en dessous ne change pas
        this._modalEntry = false;
        this.closeTopModal();
        this.syncModalHistory();
        return;
      }
      if (e.state && e.state.modal) {
        // Entrée d'une modale déjà refermée (touche Avancer) : on ne s'y arrête pas
        this._skipPop = true;
        history.back();
        return;
      }
      const params = new URLSearchParams(location.search);
      const chapId = params.get('chapitre') || params.get('chapter') || params.get('chap');
      const chapter = chapId && (window.MATHS_CHAPTERS || []).find(c => c.id === chapId);
      const restore = () => {
        this._restoringFromHistory = true;
        try {
          if (chapter) {
            this.selectChapter(chapter.id);
            this.switchTab(this.tabFromSlug(new URLSearchParams(location.search).get('onglet')));
            this.hideHomeView();
          } else {
            this.showHomeView();
          }
        } finally {
          this._restoringFromHistory = false;
        }
      };
      if (chapter) this.whenLevelReady(chapter.level || '3eme', restore);
      else restore();
    });
  },

  tabFromSlug(slug) {
    return Object.keys(this.TAB_SLUGS).find(tab => this.TAB_SLUGS[tab] === slug) || 'train';
  },

  escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl, Alt, Cmd : raccourcis du navigateur et du système (copier, marque-page…)
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const active = document.activeElement;
      const activeTag = active ? active.tagName.toLowerCase() : '';
      const isInputField = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select' || (active && active.isContentEditable);
      const isAnswerField = isInputField && !!active.closest('#exercise-input-zone');

      // Entrée/Espace sur un bouton ou un lien ciblé au clavier : laisser l'activation native
      if ((e.key === 'Enter' || e.code === 'Space') && active && active !== document.body && active.matches('button, a[href], [role="button"], summary')) return;

      // Si une modale est ouverte, ne pas interférer (flashcards, quiz, diaporama…)
      const openModal = Array.from(document.querySelectorAll('.modal-overlay')).some(m => m.style.display !== 'none' && m.getClientRects().length > 0);
      if (openModal) return;

      // Ne pas intercepter la saisie dans un champ autre que la réponse de l'exercice (recherche…)
      if (isInputField && !isAnswerField) return;

      // Un bouton n'a de boîte de rendu que s'il est réellement à l'écran (rien si l'onglet est masqué)
      const isVisible = el => !!el && el.style.display !== 'none' && el.getClientRects().length > 0;
      const nextBtn = document.getElementById('btn-next-exercise');

      // Dans le champ de réponse, seule Entrée agit (question suivante une fois la correction affichée)
      if (isInputField) {
        if (e.key === 'Enter' && isVisible(nextBtn)) {
          e.preventDefault();
          nextBtn.click();
        }
        return;
      }

      // Sur le retour de correction (qui a pris le focus), Entrée passe à la suite comme dans le champ de réponse
      if (e.key === 'Enter' && active && active.id === 'exercise-feedback-zone' && isVisible(nextBtn)) {
        e.preventDefault();
        nextBtn.click();
        return;
      }

      // Raccourcis à une touche : désactivables (Réglages) et limités à l'exercice affiché
      const inExercise = !active || active === document.body || active.id === 'contenu' || !!active.closest('.exercise-workspace-box');
      if (!this.shortcutsEnabled() || this.isHomeView || this.currentTab !== 'train' || !inExercise) return;

      // N, Espace ou Entrée : question suivante
      if (isVisible(nextBtn) && (e.key === 'Enter' || e.code === 'Space' || e.key === 'n' || e.key === 'N')) {
        e.preventDefault();
        nextBtn.click();
        return;
      }

      // Raccourci H : Demander un indice
      if (e.key === 'h' || e.key === 'H') {
        const hintBtn = document.getElementById(window.MathsAdaptiveEngine.state.usedHintsCount === 0 ? 'btn-hint-1' : 'btn-hint-2');
        if (isVisible(hintBtn)) {
          e.preventDefault();
          hintBtn.click();
        }
        return;
      }

      // Raccourcis QCM : 1, 2, 3, 4 ou A, B, C, D
      const mcqButtons = Array.from(document.querySelectorAll('.mcq-opt-btn')).filter(isVisible);
      if (mcqButtons.length > 0) {
        let selectedIdx = -1;
        if (e.key === '1' || e.key === 'a' || e.key === 'A') selectedIdx = 0;
        else if (e.key === '2' || e.key === 'b' || e.key === 'B') selectedIdx = 1;
        else if (e.key === '3' || e.key === 'c' || e.key === 'C') selectedIdx = 2;
        else if (e.key === '4' || e.key === 'd' || e.key === 'D') selectedIdx = 3;

        if (selectedIdx >= 0 && selectedIdx < mcqButtons.length) {
          e.preventDefault();
          mcqButtons[selectedIdx].click();
          return;
        }
      }

      // Touche Entrée hors champ texte : valider si le bouton est visible
      if (e.key === 'Enter') {
        const validateBtn = document.getElementById('btn-validate-answer');
        if (isVisible(validateBtn)) {
          e.preventDefault();
          validateBtn.click();
        }
      }
    });
  },

  /** Crédite de l'XP (flashcards, modes annexes) et rafraîchit l'en-tête. */
  awardXP(points) {
    if (!window.MathsStorage || !points) return null;
    const result = window.MathsStorage.addXp(points);
    this.updateHeaderProfile();
    return result;
  },

  updateHeaderProfile() {
    const data = window.MathsStorage.load();
    const streakInfo = (window.MathsStorage && typeof window.MathsStorage.getDailyStreakInfo === 'function')
      ? window.MathsStorage.getDailyStreakInfo()
      : { streak: (data.user && data.user.streak) || 0, isActiveToday: false };

    const levelEl = document.getElementById('header-user-level');
    const xpEl = document.getElementById('header-user-xp');
    const streakEl = document.getElementById('header-user-streak');

    if (levelEl) {
      // Badge favori (choisi dans la vitrine du Bilan) affiché devant le niveau
      let fav = '';
      if (data.user.favoriteBadge && window.MathsBadges) {
        const d = window.MathsBadges.getShowcase(data).find(b => b.id === data.user.favoriteBadge && b.level > 0);
        if (d) fav = `${d.icon} `;
        levelEl.title = d ? `Badge favori : ${d.title} (${window.MathsBadges.tierLabel(d, d.level)})` : '';
      }
      levelEl.textContent = `${fav}Niveau ${data.user.level}`;
    }
    if (xpEl) xpEl.textContent = `${data.user.xp} XP`;
    if (streakEl) {
      const s = streakInfo.streak || 0;
      streakEl.textContent = `🔥 ${s}`;
      const pill = document.getElementById('header-streak-pill');
      if (pill) pill.setAttribute('aria-label', `Série quotidienne : ${s} jour${s > 1 ? 's' : ''}${streakInfo.isActiveToday ? ', défi du jour validé' : ''}`);
      streakEl.title = streakInfo.isActiveToday
        ? `Série : ${s} jour(s) d'affilée • Défi du jour validé ! (Clique pour voir les détails)`
        : `Série : ${s} jour(s) d'affilée • Entraîne-toi aujourd'hui pour continuer ! (Clique pour voir les détails)`;
    }
  },

  renderDomainNav() {
    const navContainer = document.querySelector('.domain-filters-scroll');
    if (!navContainer) return;

    let filters = [];
    if (this.currentLevel === 'capes') {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'oral1', label: '📐 Oral 1 : Leçons' },
        { domain: 'complements', label: '📚 Compléments disciplinaires' },
        { domain: 'oral2', label: '⚖️ Oral 2 : Entretien' }
      ];
    } else if (this.currentLevel === 'sante') {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'calculs', label: '💊 Calculs & dosages' },
        { domain: 'fonctions', label: '📈 Fonctions & suites' },
        { domain: 'probas', label: '🎲 Probabilités & statistiques' }
      ];
    } else if (this.currentLevel === 'pass') {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'stats', label: '📊 Statistique descriptive' },
        { domain: 'probas', label: '🎲 Probabilités & lois' },
        { domain: 'inference', label: '🔬 Estimation & tests' },
        { domain: 'analyse', label: '📈 Outils d\'analyse' }
      ];
    } else if (this.currentLevel === 'veto') {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'outils', label: '🧰 Outils' },
        { domain: 'analyse', label: '📈 Analyse' },
        { domain: 'algebre', label: '🧮 Algèbre linéaire & géométrie' },
        { domain: 'probas', label: '🎲 Probabilités & statistique' }
      ];
    } else {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'nombres', label: '🔢 Nombres' },
        { domain: 'geometrie', label: this.currentLevel === 'crpe' ? '📐 Géométrie & grandeurs' : '📐 Géométrie' },
        { domain: 'fonctions', label: this.currentLevel === '6eme' ? '📊 Données & proportionnalité' : this.currentLevel === 'crpe' ? '📊 Proportionnalité, fonctions & données' : '📈 Fonctions' },
        { domain: 'algo', label: '💻 Algo' }
      ];
    }

    // S'assurer que le filtre actif est valide pour le niveau actuel
    const validDomains = filters.map(f => f.domain);
    if (!validDomains.includes(this.currentFilterDomain)) {
      this.currentFilterDomain = 'all';
    }

    navContainer.innerHTML = filters.map(f => `
      <button type="button" class="domain-filter-btn ${f.domain === this.currentFilterDomain ? 'active' : ''}" data-domain="${f.domain}" aria-pressed="${f.domain === this.currentFilterDomain ? 'true' : 'false'}">
        ${f.label}
      </button>
    `).join('');

    navContainer.querySelectorAll('.domain-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        navContainer.querySelectorAll('.domain-filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        e.currentTarget.classList.add('active');
        e.currentTarget.setAttribute('aria-pressed', 'true');
        this.currentFilterDomain = e.currentTarget.dataset.domain;
        this.renderChaptersGrid();
      });
    });
  },

  renderChaptersGrid() {
    const container = document.getElementById('chapters-list-container');
    if (!container) return;

    const allChapters = window.MATHS_CHAPTERS || [];
    const levelChapters = allChapters.filter(c => this.chapterInLevel(c, this.currentLevel));
    let filtered = this.currentFilterDomain === 'all'
      ? levelChapters
      : levelChapters.filter(c => {
          if (this.currentLevel === 'capes') {
            if (this.currentFilterDomain === 'oral1') return c.id !== 'capes-oral2' && c.domain !== 'oral2' && !c.complement;
            if (this.currentFilterDomain === 'complements') return !!c.complement;
            if (this.currentFilterDomain === 'oral2') return c.id === 'capes-oral2' || c.domain === 'oral2';
          }
          if (c.domain === this.currentFilterDomain) return true;
          if (this.currentFilterDomain === 'nombres' && (c.domain === 'algebre' || c.domain === 'arithmetique')) return true;
          if (this.currentFilterDomain === 'geometrie' && (c.domain === 'espace' || c.domain === 'vecteurs' || c.domain === 'trigo')) return true;
          if (this.currentFilterDomain === 'fonctions' && (c.domain === 'gestion' || c.domain === 'analyse' || c.domain === 'suites' || c.domain === 'calcul')) return true;
          if (this.currentFilterDomain === 'algo' && (c.domain === 'stats' || c.domain === 'probas' || c.domain === 'numerique' || c.domain === 'python')) return true;
          return false;
        });

    const query = (this.searchQuery || '').trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(c => {
        const idMatch = c.id.toLowerCase().includes(query);
        const numMatch = (c.num || '').toLowerCase().includes(query);
        const titleMatch = (c.title || '').toLowerCase().includes(query);
        const shortTitleMatch = (c.shortTitle || '').toLowerCase().includes(query);
        const domainMatch = (c.domainName || '').toLowerCase().includes(query);
        const descMatch = (c.description || '').toLowerCase().includes(query);
        return idMatch || numMatch || titleMatch || shortTitleMatch || domainMatch || descMatch;
      });
    }

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="padding: 1.5rem 0.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          🔍 Aucun chapitre ne correspond à "<strong>${this.escapeHtml(this.searchQuery)}</strong>".
        </div>
      `;
      return;
    }

    filtered.forEach(chap => {
      const progress = window.MathsStorage.getChapterProgress(chap.id);
      const card = document.createElement('button');
      card.className = `chapter-card ${chap.id === this.currentChapterId ? 'active' : ''}`;
      card.type = 'button';
      card.setAttribute('data-chapter-id', chap.id);
      if (chap.id === this.currentChapterId) card.setAttribute('aria-current', 'true');

      card.innerHTML = `
        <div class="chap-badge-id" style="background-color: ${chap.color}20; color: color-mix(in srgb, ${chap.color} 40%, var(--text-main));">
          ${chap.num}
        </div>
        <div class="chap-info">
          <span class="chap-title">${chap.shortTitle || chap.title}</span>
          <span class="chap-desc">${chap.domainName}</span>
        </div>
        <div class="chap-progress-pill">
          <div class="pill-fill" style="width: ${progress.mastery || 0}%;"></div>
          <span class="pill-text">${progress.mastery || 0}%</span>
        </div>
      `;

      card.querySelector('.chap-title').title = chap.title;

      card.addEventListener('click', () => {
        this.selectChapter(chap.id);
      });

      container.appendChild(card);
    });
  },

  selectChapter(chapterId) {
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    if (!chapter) return;
    const level = chapter.level || '3eme';
    if (!this.isLevelReady(level)) return this.whenLevelReady(level, () => this.selectChapter(chapterId));
    this.currentChapterId = chapterId;
    this.syncUrl({ chapitre: chapterId });

    // Autre niveau, ou espace de travail pas encore construit : switchLevel revient ici
    if (level !== this.currentLevel || this._workspaceLevel !== level) return this.switchLevel(level, false);
    this.hideHomeView();
    if (window.MathsStorage && window.MathsStorage.setLastActiveChapter) {
      window.MathsStorage.setLastActiveChapter(chapter.id, window.MathsAdaptiveEngine ? window.MathsAdaptiveEngine.state.currentTier : 1);
    }
    this.updateTierButtonsUI();

    // Mise à jour de la sélection dans la barre latérale / grille
    document.querySelectorAll('.chapter-card').forEach(c => {
      const on = c.dataset.chapterId === chapterId;
      c.classList.toggle('active', on);
      if (on) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
    });

    this.updateChapterHero(chapter);

    // Fermeture du tiroir mobile de chapitres
    const drawerWasOpen = this.setMobileChapterDrawer(false);
    if (drawerWasOpen) {
      // Choix fait depuis le tiroir mobile : on remonte sur la barre du chapitre
      const bar = document.getElementById('mobile-chapter-trigger-bar');
      if (bar && bar.scrollIntoView) bar.scrollIntoView({ block: 'start', behavior: this.scrollBehavior() });
    }

    // Démarrage de la session adaptative ZPD
    window.MathsAdaptiveEngine.startChapterSession(chapterId);

    // Mise à jour réactive immédiate de la jauge de maîtrise (héro + barre latérale)
    this.updateChapterMasteryUI(chapterId);

    // Mise à jour du bouton contextuel Labo 2D/3D
    this.updateVisualizerButtonUI(chapterId);

    // Rafraîchir l'onglet actif
    this.refreshCurrentTab();
    this.updateDocumentTitle();
  },

  /** En-tête du chapitre et barre mobile de sélection (n'utilise que MATHS_CHAPTERS). */
  updateChapterHero(chapter) {
    const mobileLabel = document.getElementById('mobile-chapter-label');
    if (mobileLabel) {
      mobileLabel.textContent = `${chapter.num || chapter.id} : ${chapter.shortTitle || chapter.title}`;
    }
    const titleEl = document.getElementById('chapter-hero-title');
    const domainEl = document.getElementById('chapter-hero-domain');
    const descEl = document.getElementById('chapter-hero-desc');
    if (titleEl) titleEl.textContent = `${chapter.num} : ${chapter.title}`;
    if (domainEl) {
      domainEl.textContent = chapter.domainName;
      domainEl.style.backgroundColor = `${chapter.color}20`;
      domainEl.style.color = `color-mix(in srgb, ${chapter.color} 40%, var(--text-main))`;
    }
    if (descEl) descEl.textContent = chapter.description || '';
    if (descEl && window.MathsRenderer) window.MathsRenderer.renderElement(descEl);
  },

  updateChapterMasteryUI(chapterId) {
    if (!chapterId) chapterId = this.currentChapterId;
    if (!chapterId) return;

    const progress = window.MathsStorage.getChapterProgress(chapterId);
    const mastery = progress.mastery || 0;

    // 1. Jauge héro dans l'en-tête du chapitre actif
    const masteryEl = document.getElementById('chapter-hero-mastery');
    const masteryFill = document.getElementById('chapter-hero-mastery-fill');
    if (masteryEl) masteryEl.textContent = `${mastery}%`;
    if (masteryFill) masteryFill.style.width = `${mastery}%`;

    // 1b. Pastille de maîtrise sur la barre mobile de sélection
    const mobileMasteryTag = document.getElementById('mobile-chapter-mastery-tag');
    if (mobileMasteryTag) {
      mobileMasteryTag.textContent = `${mastery}%`;
      mobileMasteryTag.className = 'm-chap-mastery-pill' + (mastery >= 80 ? ' high' : (mastery >= 40 ? ' mid' : ''));
    }

    // 2. Pastille de progression sur la carte latérale du chapitre
    const card = document.querySelector(`.chapter-card[data-chapter-id="${chapterId}"]`);
    if (card) {
      const pillFill = card.querySelector('.pill-fill');
      const pillText = card.querySelector('.pill-text');
      if (pillFill) pillFill.style.width = `${mastery}%`;
      if (pillText) pillText.textContent = `${mastery}%`;
    }

    // 3. Rafraîchir l'onglet ou modale de bilan si ouverte
    const modal = document.getElementById('stats-modal');
    if (modal && modal.classList.contains('active')) {
      this.renderStatsModal();
    }
  },

  switchTab(tabName) {
    if (!this.isLevelReady(this.currentLevel)) return this.whenLevelReady(this.currentLevel, () => this.switchTab(tabName));
    this.currentTab = tabName;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const on = btn.dataset.tab === tabName;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
      btn.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-pane-${tabName}`);
    });
    this.refreshCurrentTab();
    this.updateDocumentTitle();
    this.syncTabInUrl();
  },

  /** L'onglet suit le chapitre dans l'URL, sans entrée d'historique propre. */
  syncTabInUrl() {
    if (!this._urlSyncReady || this._restoringFromHistory || this.isHomeView || !window.history || !history.replaceState) return;
    const params = new URLSearchParams(location.search);
    if (!params.has('chapitre')) return;
    const slug = this.TAB_SLUGS[this.currentTab];
    if (slug) params.set('onglet', slug); else params.delete('onglet');
    history.replaceState(history.state, '', `?${params}`);
  },

  refreshCurrentTab() {
    if (this.currentTab === 'train') {
      this.renderTrainingView();
    } else if (this.currentTab === 'course') {
      this.renderCourseView();
    } else if (this.currentTab === 'sheets') {
      this.renderSheetsView();
    } else if (this.currentTab === 'stats') {
      this.renderStatsView();
    }
  },

  /** Annonce un message aux lecteurs d'écran (zone aria-live invisible). */
  announce(msg) {
    const live = document.getElementById('sr-live-region');
    if (!live) return;
    live.textContent = '';
    setTimeout(() => { live.textContent = msg; }, 50);
  },

  /** Annonce le retour de correction : son titre, suivi de l'indice ou du conseil (sauf titleOnly). */
  announceFeedback(container, titleOnly = false) {
    const title = container && container.querySelector('.feedback-header h4');
    if (!title) return;
    const body = titleOnly ? null : container.querySelector('.hint-content, .feedback-solution-body');
    this.announce([title, body].filter(Boolean).map(el => this.spokenContent(el)).join(' '));
  },

  /** Défilement animé, sauf si le système demande de réduire les animations. */
  scrollBehavior() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  },

  showToast(msg, duration = 3500) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'app-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.innerHTML = msg;
    toast.classList.add('visible');
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, duration);
  },

  checkUrlShareParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      const chapParam = params.get('chapitre') || params.get('chapter') || params.get('chap');
      const tierParam = parseInt(params.get('palier') || params.get('tier'), 10);
      const levelParam = params.get('level') || params.get('niveau');
      const modeParam = (params.get('mode') || params.get('tool') || '').toLowerCase();

      const autoGen = params.get('generate') === '1' || (modeParam === 'quiz' || modeParam === 'devoir');
      // Le niveau visé est déjà chargé (voir init et resolveUrlRoute)
      const targetChap = chapParam && (window.MATHS_CHAPTERS || []).find(c => c.id.toLowerCase() === chapParam.toLowerCase());

      let handled = false;

      if (!targetChap && this.VALID_LEVELS.includes(levelParam)) {
        this.switchLevel(levelParam, true);
        this.hideHomeView();
        handled = true;
      }

      if (chapParam) {
        if (targetChap) {
          this.selectChapter(targetChap.id);
          this.switchTab(this.tabFromSlug(params.get('onglet')));
          this.hideHomeView();
          if (tierParam && tierParam >= 1 && tierParam <= 4) {
            setTimeout(() => {
              // Un lien partagé (?palier=N) ne débloque JAMAIS de palier : l'élève est placé sur
              // le palier demandé s'il l'a déjà débloqué, sinon sur son palier le plus élevé.
              const engine = window.MathsAdaptiveEngine;
              const name = targetChap.shortTitle || targetChap.title;
              // Série commune : le palier du lien ne devient pas le palier de reprise de l'élève, la série repart de sa question 1
              const place = t => (this.sharedSeedFor(targetChap.id) ? engine.startChapterSession(targetChap.id, t) : engine.setTier(t));
              if (engine.isTierUnlocked(targetChap.id, tierParam)) {
                place(tierParam);
                this.showToast(`🎯 <strong>Entraînement ciblé :</strong> ${name} (Palier ${tierParam})`, 4000);
              } else {
                const reachable = engine.getHighestUnlockedTier(targetChap.id);
                place(reachable);
                this.showToast(`🔒 <strong>Palier ${tierParam} pas encore débloqué</strong> pour ${name}.<br>Tu commences au palier ${reachable} : progresse pour l'atteindre !`, 5500);
              }
              this.renderTrainingView();
            }, 250);
          }
          handled = true;
        }
      }

      if (modeParam) {
        this.hideHomeView();
        setTimeout(() => {
          if (modeParam === 'rituel' || modeParam === 'diaporama') {
            this.openDiaporamaModal(null, false);
          } else if (modeParam === 'quiz' || modeParam === 'devoir') {
            this.openQuizModal(null, autoGen);
          } else if (modeParam === 'flashcards' || modeParam === 'flashcard') {
            this.openFlashcardsModal(null);
          }
        }, 200);
        handled = true;
      }

      return handled;
    } catch (err) {
      console.warn('Erreur lecture paramètres URL :', err);
    }
    return false;
  },
};

document.addEventListener('DOMContentLoaded', () => window.MathsApp.init());
