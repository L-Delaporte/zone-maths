/**
 * Service Worker — L'Établi des Maths
 * Cache hors-ligne (PWA) pour les élèves et les enseignants.
 *
 * - Ressources versionnées (`?v=empreinte`, générées par scripts/build_versions.js) :
 *   immuables, servies depuis le cache en priorité.
 * - Pages HTML et ressources non versionnées : réseau d'abord, cache en secours hors-ligne.
 * - Hors connexion, une page jamais visitée affiche un message clair (offlineResponse), pas l'accueil.
 *
 * Trois caches :
 * - CACHE_NAME : noyau de l'application (PRECACHE_URLS), renommé à chaque version. Une nouvelle
 *   version ne s'installe que si le noyau est complet, puis attend le feu vert de la page
 *   (js/pwaManager.js) pour remplacer l'ancienne.
 * - RESOURCES_CACHE : fichiers rencontrés à l'usage (données de chaque niveau, feuilles des pages
 *   de cours…), une seule version par fichier, conservés d'une version du site à l'autre.
 * - PAGES_CACHE : pages HTML visitées, sans paramètres d'URL, MAX_PAGES au plus.
 *
 * NE PAS éditer à la main la liste ci-dessous ni CACHE_NAME : lancer `node scripts/build_versions.js`.
 */

const CACHE_NAME = 'etabli-des-maths-0fffc7ae6b';
const RESOURCES_CACHE = 'etabli-des-maths-ressources';
const PAGES_CACHE = 'etabli-des-maths-pages';
const MAX_PAGES = 200;

// @precache-start
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo.svg',
  './assets/favicon-32x32.png',
  './assets/favicon-144x144.png',
  './js/eventDelegation.js?v=324576ed13',
  './vendor/katex/katex.min.css?v=1be2fd298c',
  './css/style.css?v=141db07fda',
  './css/sheets.css?v=1f1346a799',
  './js/themeInit.js?v=58d3835cf3',
  './vendor/katex/katex.min.js?v=6d481709e3',
  './vendor/katex/auto-render.min.js?v=82dca94048',
  './js/data/chapters.js?v=fdfe18abe8',
  './js/data/chapters_lycee.js?v=912f2746ac',
  './js/data/chapters_licence.js?v=d178882706',
  './js/data/chapters_crpe.js?v=14446a775d',
  './js/data/chapters_sante.js?v=ce4408e4c2',
  './js/data/chapters_veto.js?v=8c3a9da22c',
  './js/data/defis.js?v=3bb2c75031',
  './js/badges.js?v=d6d3ff1cb4',
  './js/storage.js?v=1a7f19f24a',
  './js/audioEffects.js?v=6a42222dc7',
  './js/confetti.js?v=2f09c3d81b',
  './js/mathRenderer.js?v=55127cad9f',
  './js/geometryFigures.js?v=d069af3233',
  './js/scratchRenderer.js?v=22c1b769a7',
  './js/adaptiveEngine.js?v=451ea58605',
  './js/generatorsCore.js?v=6d0f090ee9',
  './js/proofEngine.js?v=4b12396949',
  './js/mathVisualizer.js?v=6127e4f45b',
  './js/diaporamaEngine.js?v=df509cc987',
  './js/flashQuizGenerator.js?v=0339c7263f',
  './js/flashcardsEngine.js?v=2acfa040dd',
  './js/dataLoader.js?v=ec353d5898',
  './js/app.js?v=dc78a65b3c',
  './js/app/home.js?v=dde61e7ef0',
  './js/app/tools.js?v=2edaf2a99b',
  './js/app/training.js?v=80b6280ffe',
  './js/app/course.js?v=95bca56211',
  './js/app/sheets.js?v=a5812a4b3d',
  './js/app/defi.js?v=ff8db1d630',
  './js/app/stats.js?v=db8ad89897',
  './js/pwaManager.js?v=563fe7be63',
  './js/analytics.js?v=e7d82b3bd0',
  './vendor/katex/fonts/KaTeX_AMS-Regular.woff2?v=3449474373',
  './vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2?v=5bfa49cac4',
  './vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2?v=9f8077e0b3',
  './vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2?v=f98f89272e',
  './vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2?v=a5764c6e27',
  './vendor/katex/fonts/KaTeX_Main-Bold.woff2?v=31050a1b1b',
  './vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2?v=a4a4905b8b',
  './vendor/katex/fonts/KaTeX_Main-Italic.woff2?v=c9b2b5ffd2',
  './vendor/katex/fonts/KaTeX_Main-Regular.woff2?v=c884086c25',
  './vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2?v=8fcb9d2de6',
  './vendor/katex/fonts/KaTeX_Math-Italic.woff2?v=db4883d0cf',
  './vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2?v=886e61797a',
  './vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2?v=3d5fa3cb30',
  './vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2?v=e45d5f4f4a',
  './vendor/katex/fonts/KaTeX_Script-Regular.woff2?v=63b80959f1',
  './vendor/katex/fonts/KaTeX_Size1-Regular.woff2?v=57fa599974',
  './vendor/katex/fonts/KaTeX_Size2-Regular.woff2?v=ee18713634',
  './vendor/katex/fonts/KaTeX_Size3-Regular.woff2?v=19a7caadfb',
  './vendor/katex/fonts/KaTeX_Size4-Regular.woff2?v=9bed17fb92',
  './vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2?v=7a08883fff'
];
// @precache-end

// Pages servies par l'application elle-même (paramètres ?chapitre=… relus par le JavaScript)
const APP_PATHS = ['./', './index.html'].map((u) => new URL(u, self.location).pathname);

// L'installation réussit sans ces fichiers : icônes, polices… et analytics.js, que les bloqueurs de publicité interceptent
const OPTIONAL_PRECACHE = /\.(png|svg|json|woff2)(\?|$)|analytics\.js/;

async function precacheEntry(cache, url) {
  // Fichier à empreinte déjà présent sur l'appareil : inutile de le retélécharger
  if (url.includes('?v=')) {
    const known = await caches.match(url);
    if (known) return cache.put(url, known);
  }
  const res = await fetch(url, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return cache.put(url, res);
}

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  const results = await Promise.allSettled(PRECACHE_URLS.map((url) => precacheEntry(cache, url)));
  const missing = PRECACHE_URLS.filter((url, i) => results[i].status === 'rejected' && !OPTIONAL_PRECACHE.test(url));
  // Installation refusée : l'ancienne version reste en place et le navigateur réessaiera
  if (missing.length) throw new Error(`Pré-cache incomplet : ${missing.join(', ')}`);
}

// Les liens du site écrivent aussi bien cours/6e/ que cours/6e/index.html : une seule entrée pour les deux
function pageKey(url) {
  return url.origin + url.pathname.replace(/\/index\.html$/, '/');
}

function isHtml(res) {
  return (res.headers.get('Content-Type') || '').includes('text/html');
}

// Avant de supprimer les caches d'une version précédente, garde ce que le nouveau noyau ne remplace pas
async function retireOldCaches() {
  const current = await caches.open(CACHE_NAME);
  const resources = await caches.open(RESOURCES_CACHE);
  const pages = await caches.open(PAGES_CACHE);
  const oldNames = (await caches.keys()).filter((name) => ![CACHE_NAME, RESOURCES_CACHE, PAGES_CACHE].includes(name));

  try {
    for (const name of oldNames) {
      const old = await caches.open(name);
      for (const req of await old.keys()) {
        if (await current.match(req, { ignoreSearch: true })) continue;
        const res = await old.match(req);
        if (isHtml(res)) await pages.put(pageKey(new URL(req.url)), res);
        // Du plus ancien au plus récent : s'il y a plusieurs versions d'un fichier, la dernière reste
        else await putResource(req, res);
      }
    }
    // Un fichier du noyau chargé à l'usage entre deux versions ferait doublon avec le pré-cache
    for (const req of await resources.keys()) {
      if (await current.match(req, { ignoreSearch: true })) await resources.delete(req);
    }
  } catch (e) {
    console.warn('[SW] Contenus hors-ligne non conservés :', e);
  }
  await Promise.all(oldNames.map((name) => caches.delete(name)));
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(retireOldCaches().then(() => self.clients.claim()));
});

// Échanges avec js/pwaManager.js
self.addEventListener('message', (event) => {
  const { type, urls } = event.data || {};
  if (type === 'activate') self.skipWaiting();
  if (type === 'is-current' && event.ports[0]) {
    // Les fichiers de niveau chargés par la page sont hors pré-cache : seul le noyau compte
    const core = PRECACHE_URLS.filter((u) => /\.(js|css)\?v=/.test(u)).map((u) => new URL(u, self.location).href);
    event.ports[0].postMessage(core.every((u) => urls.includes(u)));
  }
});

function canBeStored(res) {
  return res && res.status === 200 && res.type === 'basic';
}

async function putResource(req, res) {
  const cache = await caches.open(RESOURCES_CACHE);
  await cache.put(req, res);
  const sameFile = await cache.keys(req, { ignoreSearch: true });
  await Promise.all(sameFile.filter((k) => k.url !== req.url).map((k) => cache.delete(k)));
}

async function putPage(key, res) {
  const cache = await caches.open(PAGES_CACHE);
  await cache.put(key, res);
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - MAX_PAGES)).map((k) => cache.delete(k)));
}

function storeResource(event, req, res) {
  if (canBeStored(res)) event.waitUntil(putResource(req, res.clone()));
  return res;
}

function anyVersion(req) {
  return caches.match(req, { ignoreSearch: true }).then((res) => res || Response.error());
}

function cacheFirst(event, req, ignoreSearch) {
  return caches.match(req, { ignoreSearch })
    .then((cached) => cached || fetch(req)
      .then((res) => storeResource(event, req, res))
      // Hors connexion juste après une mise à jour : une version antérieure du fichier vaut mieux que rien
      .catch(() => anyVersion(req)));
}

function networkFirst(event, req) {
  return fetch(req)
    .then((res) => storeResource(event, req, res))
    .catch(() => anyVersion(req));
}

function escapeAttr(text) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

async function offlineResponse(requestedUrl) {
  const cache = await caches.open(PAGES_CACHE);
  const available = await Promise.all((await cache.keys()).map(async (req) => {
    const html = await (await cache.match(req)).text();
    return { url: req.url, title: (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || new URL(req.url).pathname };
  }));
  available.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
  const list = available.length
    ? `<h2>Déjà disponible sur cet appareil</h2><ul>${available.map((p) => `<li><a href="${escapeAttr(p.url)}">${p.title}</a></li>`).join('')}</ul>`
    : '';
  const body = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'">
<title>Page indisponible hors connexion — L'Établi des Maths</title>
<style>
  :root { color-scheme: light dark; --text: #1e293b; --muted: #64748b; --bg: #f8fafc; --link: #2563eb; }
  @media (prefers-color-scheme: dark) { :root { --text: #f1f5f9; --muted: #94a3b8; --bg: #0f172a; --link: #60a5fa; } }
  body { margin: 0; padding: 2rem 1rem; background: var(--bg); color: var(--text); font: 1rem/1.5 system-ui, sans-serif; }
  main { max-width: 40rem; margin: 0 auto; }
  h1 { font-size: 1.4rem; line-height: 1.25; }
  h2 { font-size: 1.05rem; margin-top: 2rem; }
  p { color: var(--muted); }
  a { color: var(--link); }
  .actions a { display: inline-block; margin: 0.25rem 1rem 0.25rem 0; font-weight: 600; }
  ul { padding-left: 1.2rem; }
  li { margin: 0.35rem 0; }
</style>
</head>
<body>
<main>
<h1>Cette page n'est pas disponible hors connexion</h1>
<p>Elle n'a pas encore été ouverte sur cet appareil. Reconnecte-toi pour l'afficher, ou continue avec ce qui est déjà enregistré.</p>
<p class="actions"><a href="${escapeAttr(requestedUrl)}">Réessayer</a><a href="${escapeAttr(self.registration.scope)}">Ouvrir l'application</a></p>
${list}
</main>
</body>
</html>`;
  return new Response(body, { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

function navigation(event, req, url) {
  const isApp = APP_PATHS.includes(url.pathname);
  const key = pageKey(url);
  return fetch(req)
    .then((res) => {
      // L'application est dans le pré-cache, cohérente avec les fichiers de sa version
      if (!isApp && canBeStored(res)) event.waitUntil(putPage(key, res.clone()));
      return res;
    })
    .catch(() => caches.match(isApp ? './index.html' : key, { cacheName: isApp ? CACHE_NAME : PAGES_CACHE })
      .then((cached) => cached || offlineResponse(req.url)));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Ressources externes (statistiques d'audience…) : non interceptées
  if (url.origin !== self.location.origin) return;

  // Pages de navigation : réseau d'abord (contenu toujours à jour), cache hors-ligne
  if (req.mode === 'navigate') {
    event.respondWith(navigation(event, req, url));
    return;
  }

  // Ressources versionnées : immuables → cache d'abord. Les polices de KaTeX sont pré-cachées
  // avec empreinte, mais la feuille de style les demande sans ?v=
  const isKatexFont = url.pathname.includes('/vendor/katex/fonts/');
  if (url.searchParams.has('v') || isKatexFont) {
    event.respondWith(cacheFirst(event, req, isKatexFont));
    return;
  }

  event.respondWith(networkFirst(event, req));
});
