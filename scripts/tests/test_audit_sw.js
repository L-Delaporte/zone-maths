#!/usr/bin/env node
/**
 * Service worker et PWA : exécute sw.js dans un environnement simulé (caches, réseau) et vérifie
 *   - l'installation : ressource critique manquante = refus, aucune activation automatique ;
 *   - le hors-ligne : page déjà vue servie, page jamais vue = message (jamais l'accueil) ;
 *   - la mise à jour : pages et données de niveau conservées, une seule version par fichier ;
 *   - le plafond du cache des pages ;
 * puis, sans exécution, le manifeste et les polices déclarées par KaTeX.
 *
 * Usage : node scripts/tests/test_audit_sw.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const ORIGIN = 'https://exemple.test';
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

let errors = 0;
let checks = 0;
function check(label, ok) {
  checks++;
  if (!ok) { errors++; console.error('✖ ' + label); }
}

const abs = (r) => new URL(typeof r === 'string' ? r : r.url, `${ORIGIN}/sw.js`).href;
const noSearch = (u) => u.split('?')[0];

class FakeCache {
  constructor() { this.entries = new Map(); }
  find(req, opts = {}) {
    const url = abs(req);
    return [...this.entries.keys()].filter((k) => (opts.ignoreSearch ? noSearch(k) === noSearch(url) : k === url));
  }
  async match(req, opts) { const [k] = this.find(req, opts); return k ? this.entries.get(k).clone() : undefined; }
  async put(req, res) { const url = abs(req); this.entries.delete(url); this.entries.set(url, res.clone()); }
  async keys(req, opts) { return (req ? this.find(req, opts) : [...this.entries.keys()]).map((url) => ({ url })); }
  async delete(req) { return this.entries.delete(abs(req)); }
}

function loadWorker(stores = new Map(), cacheName = 'etabli-des-maths-test') {
  const net = { online: true, missing: new Set(), bodies: new Map(), calls: [] };
  const caches = {
    open: async (n) => { if (!stores.has(n)) stores.set(n, new FakeCache()); return stores.get(n); },
    keys: async () => [...stores.keys()],
    delete: async (n) => stores.delete(n),
    match: async (req, opts = {}) => {
      for (const [n, c] of stores) {
        if (opts.cacheName && n !== opts.cacheName) continue;
        const hit = await c.match(req, opts);
        if (hit) return hit;
      }
      return undefined;
    },
  };
  const fetch = async (req) => {
    const url = abs(req);
    net.calls.push(url);
    if (!net.online) throw new TypeError('Failed to fetch');
    const html = !/\.(js|css|png|svg|json|woff2)(\?|$)/.test(url);
    const missing = net.missing.has(noSearch(url));
    const res = new Response(missing ? 'absent' : (net.bodies.get(url) || `<title>${url}</title>`), {
      status: missing ? 404 : 200,
      headers: { 'Content-Type': html ? 'text/html' : 'text/plain' },
    });
    Object.defineProperty(res, 'type', { value: 'basic' });
    return res;
  };
  const listeners = {};
  const worker = { skipped: 0 };
  const self = {
    location: new URL(`${ORIGIN}/sw.js`),
    registration: { scope: `${ORIGIN}/` },
    addEventListener: (t, f) => { listeners[t] = f; },
    skipWaiting: () => { worker.skipped++; },
    clients: { claim: async () => {} },
  };
  const source = read('sw.js').replace(/const CACHE_NAME = '[^']*'/, `const CACHE_NAME = '${cacheName}'`);
  vm.runInNewContext(source, { self, caches, fetch, URL, Response, console: { warn() {}, log() {} } });

  async function lifecycle(type) {
    const pending = [];
    listeners[type]({ waitUntil: (p) => pending.push(p) });
    await Promise.all(pending);
  }
  async function request(url, mode = 'no-cors') {
    let response;
    const pending = [];
    listeners.fetch({ request: { url: abs(url), method: 'GET', mode }, respondWith: (p) => { response = p; }, waitUntil: (p) => pending.push(p) });
    const res = await response;
    await Promise.all(pending);
    return res;
  }
  const message = (data, ports = []) => listeners.message({ data, ports });
  return Object.assign(worker, { stores, net, caches, lifecycle, request, message, navigate: (u) => request(u, 'navigate') });
}

const urlsOf = async (cache) => (await cache.keys()).map((k) => k.url.replace(ORIGIN, ''));
const isOfflineNotice = async (res) => res.status === 503 && (await res.clone().text()).includes("n'est pas disponible hors connexion");
const PAGES = 'etabli-des-maths-pages';
const RESOURCES = 'etabli-des-maths-ressources';
const BUNDLE = '/js/randomGenerators.js';

async function run() {
  // Installation
  let w = loadWorker();
  await w.lifecycle('install');
  check("l'installation n'active pas la nouvelle version d'elle-même", w.skipped === 0);
  w.message({ type: 'activate' });
  check('le message « activate » active la nouvelle version', w.skipped === 1);

  w = loadWorker();
  w.net.missing.add(`${ORIGIN}/js/app.js`);
  check('installation refusée sans fichier critique', await w.lifecycle('install').then(() => false, () => true));

  w = loadWorker();
  w.net.missing.add(`${ORIGIN}/js/analytics.js`);
  check('installation acceptée sans analytics.js (bloqueurs de publicité)', await w.lifecycle('install').then(() => true, () => false));

  // Migration depuis un cache unique
  w = loadWorker();
  const legacy = await w.caches.open('etabli-des-maths-ancien');
  const html = (t) => new Response(`<title>${t}</title>`, { headers: { 'Content-Type': 'text/html' } });
  await legacy.put('/cours/6e/vu.html?x=1', html('Cours vu'));
  await legacy.put('/?chapitre=6N1', html('Accueil'));
  await legacy.put(`${BUNDLE}?v=ancien`, new Response('données', { headers: { 'Content-Type': 'text/plain' } }));
  await w.lifecycle('install');
  await w.lifecycle('activate');
  check('ancien cache supprimé', !w.stores.has('etabli-des-maths-ancien'));
  check('page conservée sans paramètre', (await urlsOf(w.stores.get(PAGES))).join() === '/cours/6e/vu.html');
  check('données de niveau conservées', (await urlsOf(w.stores.get(RESOURCES))).join() === `${BUNDLE}?v=ancien`);

  // Migration : plusieurs versions d'un même fichier accumulées dans le cache unique
  {
    const m = loadWorker();
    const accumulated = await m.caches.open('etabli-des-maths-ancien');
    const text = (t) => new Response(t, { headers: { 'Content-Type': 'text/plain' } });
    await accumulated.put(`${BUNDLE}?v=vieux`, text('vieux'));
    await accumulated.put(`${BUNDLE}?v=recent`, text('récent'));
    await accumulated.put('/cours/6e/index.html', html('Sommaire 6e'));
    await m.lifecycle('install');
    await m.lifecycle('activate');
    check('migration : la version la plus récente reste', (await urlsOf(m.stores.get(RESOURCES))).join() === `${BUNDLE}?v=recent`);
    m.net.online = false;
    check('migration : index.html retrouvé par son dossier', !(await isOfflineNotice(await m.navigate('/cours/6e/'))));
  }

  // cours/5e/ et cours/5e/index.html désignent la même page, quels que soient le lien suivi et l'ordre
  {
    const f = loadWorker();
    await f.lifecycle('install');
    await f.lifecycle('activate');
    await f.navigate('/cours/5e/');
    await f.navigate('/cours/4e/index.html');
    check('dossier et index.html : une seule forme stockée', (await urlsOf(f.stores.get(PAGES))).join() === '/cours/5e/,/cours/4e/');
    f.net.online = false;
    check('hors ligne : dossier visité, lien vers index.html', (await f.navigate('/cours/5e/index.html')).status === 200);
    check('hors ligne : index.html visité, lien vers le dossier', (await f.navigate('/cours/4e/')).status === 200);
    check('hors ligne : autre dossier = message', await isOfflineNotice(await f.navigate('/cours/3e/index.html')));
  }

  // Navigation
  await w.navigate('/cours/6e/lu.html?a=1');
  await w.navigate('/cours/6e/lu.html?a=2');
  check('une page = une entrée, sans paramètres', (await urlsOf(w.stores.get(PAGES))).filter((u) => u.includes('lu.html')).join() === '/cours/6e/lu.html');
  check("l'accueil n'est pas stocké avec les pages", !(await urlsOf(w.stores.get(PAGES))).some((u) => u === '/' || u.startsWith('/?')));

  w.net.online = false;
  check('hors ligne : page déjà vue servie', (await w.navigate('/cours/6e/lu.html?b=2')).status === 200);
  const app = await w.navigate('/?chapitre=6N1');
  check("hors ligne : application servie pour l'accueil", app.status === 200 && !(await isOfflineNotice(app)));
  const unknown = await w.navigate('/cours/6e/jamais-vu.html');
  check('hors ligne : page jamais vue = message', await isOfflineNotice(unknown));
  const body = await unknown.text();
  check('hors ligne : le message liste les pages disponibles', body.includes('/cours/6e/lu.html'));
  check('hors ligne : le message propose de réessayer', body.includes(`href="${ORIGIN}/cours/6e/jamais-vu.html"`));
  check('hors ligne : racine inconnue = message', await isOfflineNotice(await w.navigate('/brevet.html')));

  // Données de niveau
  check('hors ligne : empreinte inconnue = version antérieure', (await w.request(`${BUNDLE}?v=nouveau`)).status === 200);
  w.net.online = true;
  await w.request(`${BUNDLE}?v=nouveau`);
  check('une seule version par fichier', (await urlsOf(w.stores.get(RESOURCES))).join() === `${BUNDLE}?v=nouveau`);

  // Une version suivante garde pages et données, et ne retélécharge pas le noyau inchangé
  const pagesBefore = await urlsOf(w.stores.get(PAGES));
  const next = loadWorker(w.stores, 'etabli-des-maths-test-2');
  await next.lifecycle('install');
  const refetched = next.net.calls.filter((u) => u.includes('?v='));
  await next.lifecycle('activate');
  check('mise à jour : noyau inchangé non retéléchargé', refetched.length === 0);
  check('mise à jour : ancien noyau retiré', !w.stores.has('etabli-des-maths-test'));
  check('mise à jour : pages conservées', (await urlsOf(w.stores.get(PAGES))).join() === pagesBefore.join());
  check('mise à jour : données conservées', (await urlsOf(w.stores.get(RESOURCES))).join() === `${BUNDLE}?v=nouveau`);

  // Plafond
  const maxPages = Number(/const MAX_PAGES = (\d+)/.exec(read('sw.js'))[1]);
  const pages = w.stores.get(PAGES);
  for (let i = 0; i < maxPages + 20; i++) await pages.put(`/cours/p${i}.html`, html(`p${i}`));
  await w.navigate('/cours/6e/derniere.html');
  const kept = await urlsOf(pages);
  check('cache des pages plafonné', kept.length === maxPages);
  check('les pages les plus anciennes partent en premier', !kept.includes('/cours/p0.html') && kept[kept.length - 1] === '/cours/6e/derniere.html');

  // Annonce des mises à jour : installation commencée avant que la page n'écoute
  {
    const silent = () => {};
    const sandbox = {
      window: { addEventListener: silent, matchMedia: () => ({ matches: false }) },
      document: { readyState: 'loading', addEventListener: silent },
      navigator: { serviceWorker: Object.assign(new EventTarget(), { controller: {} }) },
    };
    vm.runInNewContext(read('js/pwaManager.js'), sandbox);
    const pwa = sandbox.window.MathsPwa;
    const offered = [];
    pwa.offerUpdate = (worker) => offered.push(worker);
    const installing = Object.assign(new EventTarget(), { state: 'installing' });
    const reg = Object.assign(new EventTarget(), { installing, waiting: null });
    pwa.watchUpdates(reg);
    reg.dispatchEvent(new Event('updatefound'));
    installing.state = 'installed';
    installing.dispatchEvent(new Event('statechange'));
    check('installation déjà commencée : suivie, et annoncée une seule fois', offered.length === 1 && offered[0] === installing);
  }

  // Manifeste
  const manifest = JSON.parse(read('manifest.json'));
  check('manifeste : id présent', manifest.id === '/');
  const factors = (manifest.screenshots || []).map((s) => s.form_factor);
  check('manifeste : captures narrow et wide', factors.includes('narrow') && factors.includes('wide'));
  for (const item of [...manifest.icons, ...manifest.screenshots]) {
    const file = path.join(ROOT, item.src);
    if (!fs.existsSync(file)) { check(`manifeste : ${item.src} absent`, false); continue; }
    const png = fs.readFileSync(file);
    check(`manifeste : dimensions de ${item.src}`, `${png.readUInt32BE(16)}x${png.readUInt32BE(20)}` === item.sizes);
  }

  // Polices de KaTeX : aucune déclaration vers un fichier absent
  const css = read('vendor/katex/katex.min.css');
  const fontFiles = [...css.matchAll(/url\(([^)]+)\)/g)].map((m) => m[1].replace(/["']/g, ''));
  check('KaTeX : des polices sont déclarées', fontFiles.length > 0);
  for (const f of fontFiles) check(`KaTeX : ${f} présent`, fs.existsSync(path.join(ROOT, 'vendor/katex', f)));
  check('KaTeX : woff2 uniquement', fontFiles.every((f) => f.endsWith('.woff2')));
}

run().then(() => {
  if (errors) { console.error(`\n${errors} échec(s) sur ${checks} vérifications`); process.exit(1); }
  console.log(`✔ Service worker et PWA : ${checks} vérifications`);
}).catch((e) => { console.error(e); process.exit(1); });
