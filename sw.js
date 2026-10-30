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

const CACHE_NAME = 'etabli-des-maths-d30d640b55';

// @precache-start
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo.svg',
  './assets/favicon-32x32.png',
  './assets/favicon-144x144.png',
  './vendor/katex/katex.min.css?v=000b7545e1',
  './css/style.css?v=c6778a5add',
  './vendor/katex/katex.min.js?v=9616b6e2a7',
  './vendor/katex/auto-render.min.js?v=491616b8c9',
  './js/data/chapters.js?v=c4d084203e',
  './js/data/chapters_lycee.js?v=5087bbeebd',
  './js/data/chapters_licence.js?v=862554015c',
  './js/data/data_capes.js?v=5ce35bd63a',
  './js/storage.js?v=974eea8078',
  './js/audioEffects.js?v=61af5bd9de',
  './js/confetti.js?v=a25de2b7fe',
  './js/mathRenderer.js?v=a79ff2ff2a',
  './js/geometryFigures.js?v=656295f7c5',
  './js/scratchRenderer.js?v=ed1e43916b',
  './js/adaptiveEngine.js?v=793550908c',
  './js/randomGenerators.js?v=9178902e23',
  './js/proofEngine.js?v=f99d384bfd',
  './js/mathVisualizer.js?v=96becc2c77',
  './js/diaporamaEngine.js?v=eba71f5370',
  './js/flashQuizGenerator.js?v=694557b7d8',
  './js/flashcardsEngine.js?v=3bcc67a07f',
  './js/dataLoader.js?v=828f7fa67d',
  './js/app.js?v=0619858111',
  './js/app/home.js?v=aac8128ec1',
  './js/app/tools.js?v=a0dd55c70d',
  './js/app/training.js?v=a4976f4bd5',
  './js/app/course.js?v=417bf8b735',
  './js/app/sheets.js?v=7b1137695a',
  './js/app/stats.js?v=3165940613',
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
