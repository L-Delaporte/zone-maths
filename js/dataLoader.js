/**
 * Chargement à la demande des données de chaque niveau — L'Établi des Maths
 *
 * Les cours, exercices, fiches et générateurs d'un niveau ne sont téléchargés qu'à
 * l'ouverture de ce niveau (au lieu de ~4 Mo pour tout le monde au démarrage).
 * La liste des fichiers par niveau est déclarée dans index.html (<script id="level-bundles">),
 * où scripts/build_versions.js tient à jour les empreintes `?v=`.
 */
window.MathsDataLoader = {
  _scripts: {},
  _levels: {},
  _bundles: null,

  bundles() {
    if (!this._bundles) {
      const el = document.getElementById('level-bundles');
      try {
        this._bundles = el ? JSON.parse(el.textContent) : {};
      } catch (e) {
        console.error('[Chargement] Déclaration des niveaux illisible :', e);
        this._bundles = {};
      }
    }
    return this._bundles;
  },

  loadScript(url) {
    if (!this._scripts[url]) {
      this._scripts[url] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.async = false;
        s.onload = () => resolve(url);
        s.onerror = () => {
          delete this._scripts[url]; // nouvelle tentative possible (retour du réseau)
          reject(new Error(`Échec du chargement de ${url}`));
        };
        document.head.appendChild(s);
      });
    }
    return this._scripts[url];
  },

  isLevelLoaded(level) {
    return this._levels[level] === true || !(this.bundles()[level] || []).length;
  },

  /** Charge (une seule fois) les fichiers d'un niveau, dans l'ordre déclaré. */
  ensureLevel(level) {
    if (this.isLevelLoaded(level)) return Promise.resolve();
    if (!this._levels[level]) {
      const urls = this.bundles()[level] || [];
      const alreadyRequested = new Set(urls.filter(u => this._scripts[u]));
      // Tous insérés d'un coup : téléchargement parallèle, exécution dans l'ordre (async = false)
      this._levels[level] = Promise.allSettled(urls.map(u => this.loadScript(u)))
        .then(results => {
          const failed = results.findIndex(r => r.status === 'rejected');
          if (failed >= 0) {
            // Les suivants se sont exécutés sans lui : on les oublie pour les rejouer dans l'ordre à la relance
            urls.slice(failed + 1).forEach(u => { if (!alreadyRequested.has(u)) delete this._scripts[u]; });
            throw results[failed].reason;
          }
          this._levels[level] = true;
          // Les flashcards complémentaires s'ajoutent aux cours fraîchement chargés
          if (window.MathsFlashcards && typeof window.MathsFlashcards.enrichCoursesWithExtras === 'function') {
            window.MathsFlashcards.enrichCoursesWithExtras();
          }
        })
        .catch(err => {
          delete this._levels[level];
          throw err;
        });
    }
    return this._levels[level];
  }
};
