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

const CACHE_NAME = 'etabli-des-maths-dev';

// @precache-start
const PRECACHE_URLS = [];
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
