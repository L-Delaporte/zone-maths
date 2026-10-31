/**
 * Service Worker — L'Établi des Maths
 * Cache hors-ligne (PWA) pour les élèves et les enseignants.
 *
 * - Ressources versionnées (`?v=empreinte`, générées par scripts/build_versions.js) :
 *   immuables, servies depuis le cache en priorité.
 * - Pages HTML et ressources non versionnées : réseau d'abord, cache en secours hors-ligne.
 * - Les données de chaque niveau sont mises en cache au fur et à mesure de leur utilisation.
 *
 * NE PAS éditer à la main la liste ci-dessous ni CACHE_NAME : lancer `node scripts/build_versions.js`.
 */

const CACHE_NAME = 'etabli-des-maths-276c9f63be';

// @precache-start
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo.svg',
  './assets/favicon-32x32.png',
  './assets/favicon-144x144.png',
  './js/eventDelegation.js?v=89e87b61a8',
  './vendor/katex/katex.min.css?v=000b7545e1',
  './css/style.css?v=a16f3fb3d8',
  './css/sheets.css?v=cbc3ab2e84',
  './vendor/katex/katex.min.js?v=9616b6e2a7',
  './vendor/katex/auto-render.min.js?v=491616b8c9',
  './js/data/chapters.js?v=c4d084203e',
  './js/data/chapters_lycee.js?v=9c8659021a',
  './js/data/chapters_licence.js?v=862554015c',
  './js/data/data_capes.js?v=2dd5913786',
  './js/data/defis.js?v=3bb2c75031',
  './js/storage.js?v=6cfd159b0b',
  './js/audioEffects.js?v=b65413daaf',
  './js/confetti.js?v=b2b29d56a8',
  './js/mathRenderer.js?v=b18b8ba377',
  './js/geometryFigures.js?v=656295f7c5',
  './js/scratchRenderer.js?v=ed1e43916b',
  './js/adaptiveEngine.js?v=69b2bd08fc',
  './js/generatorsCore.js?v=facc7f5c20',
  './js/proofEngine.js?v=f99d384bfd',
  './js/mathVisualizer.js?v=c374ad43df',
  './js/diaporamaEngine.js?v=1833780366',
  './js/flashQuizGenerator.js?v=2f903b49ac',
  './js/flashcardsEngine.js?v=80deafaac0',
  './js/dataLoader.js?v=828f7fa67d',
  './js/app.js?v=116d3dd408',
  './js/app/home.js?v=75ad05503c',
  './js/app/tools.js?v=4b710dcdc8',
  './js/app/training.js?v=d936f1135e',
  './js/app/course.js?v=5c3060eab4',
  './js/app/sheets.js?v=711106cf8f',
  './js/app/defi.js?v=2eb0e40fa1',
  './js/app/stats.js?v=2c229a7173',
  './js/pwaManager.js?v=0a3ce1177d'
];
// @precache-end

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function putInCache(event, req, res) {
  if (res && res.status === 200 && res.type === 'basic') {
    const copy = res.clone();
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)));
  }
  return res;
}

function networkFirst(event, req, fallbackUrl) {
  return fetch(req)
    .then((res) => putInCache(event, req, res))
    .catch(() => caches.match(req, { ignoreSearch: true })
      .then((cached) => cached || (fallbackUrl ? caches.match(fallbackUrl) : undefined))
      .then((res) => res || Response.error()));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Ressources externes (statistiques d'audience…) : non interceptées
  if (url.origin !== self.location.origin) return;

  // Pages de navigation : réseau d'abord (contenu toujours à jour), cache hors-ligne
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(event, req, './index.html'));
    return;
  }

  // Ressources versionnées : immuables → cache d'abord
  if (url.searchParams.has('v')) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => putInCache(event, req, res)))
    );
    return;
  }

  event.respondWith(networkFirst(event, req));
});
