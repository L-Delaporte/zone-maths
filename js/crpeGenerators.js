/**
 * Exercices aléatoires du niveau « Professeur des écoles (CRPE) ».
 *
 * Chargé à la demande avec le niveau crpe (index.html, level-bundles), APRÈS js/randomGenerators.js et
 * js/generators6e.js : chaque chapitre crpe-XX puise dans les générateurs du collège qui couvrent ses notions
 * (programme du cycle 4, complété des fondamentaux du cycle 3 : décimaux, angles, symétries, quadrilatères, diagrammes). Le palier demandé au collège est relevé d'un
 * cran une fois sur deux, pour un public adulte.
 *
 * Une part des tirages (croissante avec le palier) renvoie null : MathsGenerators.generateForChapter puise alors
 * dans la banque statique type concours de js/data/exercises_crpe.js (problèmes, justifications, erreurs d'élèves).
 */
(function () {
  if (typeof window === 'undefined' || !window.MathsGenerators) return;

  const SOURCES = {
    'crpe-01': ['6N5', 'N5', '6N1'],
    'crpe-02': ['6N2', '6N6', '6N7', '5N3', '4N2', 'N1'],
    'crpe-03': ['5N1', '5N2', '4N1', '4N3', '4N4', 'N3'],
    'crpe-04': ['5N5', '4N5', 'N2', 'N2bis', 'N4'],
    'crpe-05': ['6P1', '5P1', '4P1'],
    'crpe-06': ['5P2', '4P2', 'Org1', 'Org3'],
    'crpe-07': ['6D1', '5D1', '4D1', 'Org2', '5D2', '4D2', 'Org4'],
    'crpe-08': ['6M1', '6M2', '6M3', '6M4', '5G6', '4G4'],
    'crpe-09': ['6G3', '6G4', '5G3', '4G2', 'G0', 'G1', 'G2', 'G2bis', 'G7', '4G1'],
    'crpe-10': ['6G2', '5G2', '5G5', '6G5', '4G3', 'G3', 'G6', 'G4', 'G5'],
    'crpe-11': ['6A1', '5A1', '4A1', 'Algo']
  };

  /** Probabilité de servir un exercice de la banque type concours, par palier */
  const STATIC_SHARE = { 1: 0.1, 2: 0.15, 3: 0.4, 4: 0.55 };

  const api = {
    CRPE_SOURCES: SOURCES,

    /** Exercice d'un chapitre CRPE tiré d'un générateur du collège (null : repli sur la banque statique) */
    _crpeFromCollege(chapterId, tier, mastery) {
      const t = Math.min(4, Math.max(1, parseInt(tier, 10) || 1));
      if (Math.random() < (STATIC_SHARE[t] || 0)) return null;
      const sources = (SOURCES[chapterId] || []).filter(s => typeof this['generate' + s] === 'function');
      if (!sources.length) return null;
      const src = sources[Math.floor(Math.random() * sources.length)];
      const srcTier = t < 4 && Math.random() < 0.5 ? t + 1 : t;
      let q = null;
      try {
        q = this['generate' + src](srcTier, mastery);
      } catch (e) {
        q = null;
      }
      if (!q || !q.statement) return null;
      q.chapterId = chapterId;
      q.tier = t;
      q.id = `${chapterId}-${src}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      return q;
    }
  };

  Object.keys(SOURCES).forEach(id => {
    api['generate' + id] = function (tier, mastery) {
      return this._crpeFromCollege(id, tier, mastery);
    };
  });

  Object.assign(window.MathsGenerators, api);
})();
