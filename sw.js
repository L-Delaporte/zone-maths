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

const CACHE_NAME = 'etabli-des-maths-0ff08adf1b';

// @precache-start
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo.svg',
  './assets/favicon-32x32.png',
  './assets/favicon-144x144.png',
  './vendor/katex/katex.min.css?v=000b7545e1',
  './css/style.css?v=903100fef1',
  './css/sheets.css?v=c8cd74024b',
  './vendor/katex/katex.min.js?v=9616b6e2a7',
  './vendor/katex/auto-render.min.js?v=491616b8c9',
  './js/data/chapters.js?v=c4d084203e',
  './js/data/chapters_lycee.js?v=9c8659021a',
  './js/data/chapters_licence.js?v=862554015c',
  './js/data/data_capes.js?v=2dd5913786',
  './js/storage.js?v=974eea8078',
  './js/audioEffects.js?v=b65413daaf',
  './js/confetti.js?v=b2b29d56a8',
  './js/mathRenderer.js?v=7e4ab0facd',
  './js/geometryFigures.js?v=656295f7c5',
  './js/scratchRenderer.js?v=ed1e43916b',
  './js/adaptiveEngine.js?v=17db397367',
  './js/randomGenerators.js?v=10f9caed22',
  './js/proofEngine.js?v=f99d384bfd',
  './js/mathVisualizer.js?v=dae9a74a57',
  './js/diaporamaEngine.js?v=1833780366',
  './js/flashQuizGenerator.js?v=9be69438d7',
  './js/flashcardsEngine.js?v=1d33aefd7b',
  './js/dataLoader.js?v=828f7fa67d',
  './js/app.js?v=56ca597042',
  './js/app/home.js?v=72cdb60c9e',
  './js/app/tools.js?v=0cec4ea7db',
  './js/app/training.js?v=ca6db9b84c',
  './js/app/course.js?v=e8977e54eb',
  './js/app/sheets.js?v=8e252b07d1',
  './js/app/stats.js?v=2693dadcef',
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
