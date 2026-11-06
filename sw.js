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

const CACHE_NAME = 'etabli-des-maths-986640d48d';

// @precache-start
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo.svg',
  './assets/favicon-32x32.png',
  './assets/favicon-144x144.png',
  './js/themeInit.js?v=b22b407710',
  './js/eventDelegation.js?v=89e87b61a8',
  './vendor/katex/katex.min.css?v=000b7545e1',
  './css/style.css?v=a4e7161be9',
  './css/sheets.css?v=1f1346a799',
  './vendor/katex/katex.min.js?v=9616b6e2a7',
  './vendor/katex/auto-render.min.js?v=491616b8c9',
  './js/data/chapters.js?v=46326557ac',
  './js/data/chapters_lycee.js?v=9c8659021a',
  './js/data/chapters_licence.js?v=862554015c',
  './js/data/chapters_crpe.js?v=10b36172f9',
  './js/data/chapters_sante.js?v=76fbde9961',
  './js/data/data_capes.js?v=472498f26b',
  './js/data/defis.js?v=3bb2c75031',
  './js/badges.js?v=c54d3c0441',
  './js/storage.js?v=ddb7249f87',
  './js/audioEffects.js?v=c9749a11c5',
  './js/confetti.js?v=2f09c3d81b',
  './js/mathRenderer.js?v=f11fac766a',
  './js/geometryFigures.js?v=656295f7c5',
  './js/scratchRenderer.js?v=5f9033f40a',
  './js/adaptiveEngine.js?v=d4eca5dc3b',
  './js/generatorsCore.js?v=5a2f64b52a',
  './js/proofEngine.js?v=f99d384bfd',
  './js/mathVisualizer.js?v=c374ad43df',
  './js/diaporamaEngine.js?v=ebc328db91',
  './js/flashQuizGenerator.js?v=c9a8fd5230',
  './js/flashcardsEngine.js?v=9621e5c78a',
  './js/dataLoader.js?v=828f7fa67d',
  './js/app.js?v=ae564471c9',
  './js/app/home.js?v=c25700373c',
  './js/app/tools.js?v=4b710dcdc8',
  './js/app/training.js?v=908a2452e4',
  './js/app/course.js?v=1ad34b342a',
  './js/app/sheets.js?v=85cb2a564f',
  './js/app/defi.js?v=1e8bbcd86e',
  './js/app/stats.js?v=fd7ce9df6d',
  './js/pwaManager.js?v=325a61601c',
  './js/analytics.js?v=e2a0e91aab'
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
