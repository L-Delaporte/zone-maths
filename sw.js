/**
 * Service Worker — L'Établi des Maths
 * Cache hors-ligne complet (PWA) pour les élèves et les enseignants.
 * Permet un fonctionnement autonome sans connexion Internet.
 */

const CACHE_NAME = 'etabli-des-maths-v20261030e';

const PRECACHE_URLS = [
  './',
  './index.html',
  './brevet.html',
  './bac.html',
  './rituels.html',
  './manifest.json',
  './css/style.css',
  './assets/logo.png',
  './assets/favicon.png',
  './assets/favicon-32x32.png',
  './assets/favicon-48x48.png',
  './assets/favicon-96x96.png',
  './assets/favicon-144x144.png',
  './vendor/katex/katex.min.js',
  './vendor/katex/katex.min.css',
  './vendor/katex/auto-render.min.js',
  './js/storage.js',
  './js/audioEffects.js',
  './js/confetti.js',
  './js/mathRenderer.js',
  './js/adaptiveEngine.js',
  './js/advancedGenerators.js',
  './js/lyceeGenerators.js',
  './js/randomGenerators.js',
  './js/diaporamaEngine.js',
  './js/flashQuizGenerator.js',
  './js/flashcardsEngine.js',
  './js/app.js',
  './js/pwaManager.js',
  './js/data/chapters.js',
  './js/data/chapters_lycee.js',
  './js/data/chapters_licence.js',
  './js/data/courses.js',
  './js/data/worksheets.js',
  './js/data/exercises.js',
  './js/data/data_5eme.js',
  './js/data/data_4eme.js',
  './js/data/data_2nde.js',
  './js/data/data_1ere.js',
  './js/data/data_terminale.js',
  './js/data/data_l1.js',
  './js/data/data_l2.js',
  './js/data/data_l3.js',
  './js/data/data_capes.js',
  './js/data/data_proofs.js',
  './js/geometryFigures.js',
  './js/scratchRenderer.js',
  './js/proofEngine.js',
  './js/mathVisualizer.js'
];

// Installation : mise en cache du noyau applicatif
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pré-mise en cache tolérante aux requêtes individuelles
      return Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Pré-cache avertissement pour :', url, err.message);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activation : suppression des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Nettoyage ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie d'interception réseau
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignorer les requêtes d'analyse d'audience externe (ex: GoatCounter)
  if (url.origin !== self.location.origin) {
    // Si c'est un CDN KaTeX ou Police externe, tenter le cache
    if (url.hostname.includes('jsdelivr') || url.hostname.includes('cloudflare') || url.hostname.includes('gstatic')) {
      event.respondWith(
        caches.match(req).then((cached) => {
          return cached || fetch(req).then((res) => {
            if (res.status === 200) {
              const resClone = res.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
            }
            return res;
          }).catch(() => cached);
        })
      );
    }
    return;
  }

  // Pour les pages HTML de navigation : Stale-While-Revalidate
  if (req.mode === 'navigate' || (req.headers.get('accept') && req.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(req).then((networkRes) => {
        if (networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return networkRes;
      }).catch(() => {
        return caches.match(req).then((cached) => {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }

  // Pour les ressources statiques (CSS, JS, images, fonts) : Cache First avec mise à jour en arrière-plan
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      if (cachedRes) {
        // En arrière-plan, rafraîchir le cache pour la prochaine session
        fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkRes));
          }
        }).catch(() => {});
        return cachedRes;
      }

      // Si pas en cache, chercher sur le réseau
      return fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return networkRes;
      });
    })
  );
});
