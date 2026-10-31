#!/usr/bin/env node
/**
 * Content-Security-Policy : vérifie que chaque page HTML publiée
 *   - porte la balise <meta http-equiv="Content-Security-Policy"> attendue (scripts/csp.js),
 *     placée dans le <head> avant tout script et toute feuille de style ;
 *   - ne contient aucun script inline exécutable (seuls application/ld+json et application/json
 *     sont admis : le navigateur ne les exécute pas) ;
 *   - ne contient aucun attribut on*= ni lien javascript: ;
 *   - ne charge de script externe que depuis une origine autorisée par script-src.
 * Vérifie aussi que la politique ne contient ni 'unsafe-inline' ni 'unsafe-eval' dans script-src
 * et que le JavaScript du site n'utilise ni eval, ni new Function, ni setTimeout/setInterval
 * avec une chaîne, ni gestionnaire on*= dans le HTML qu'il produit.
 *
 * Usage : node scripts/tests/test_csp.js
 */
const fs = require('fs');
const path = require('path');
const { CSP, CSP_META } = require('../csp.js');

const ROOT = path.resolve(__dirname, '..', '..');
const SKIP_DIRS = new Set(['.git', '.claude', 'node_modules', 'scripts', 'vendor', 'outils-audit']);

let errors = 0;
let checks = 0;
const fail = (msg) => { errors++; console.error('✖ ' + msg); };

function walk(dir, ext, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(path.join(dir, e.name), ext, out); }
    else if (e.name.endsWith(ext)) out.push(path.join(dir, e.name));
  }
  return out;
}

// 1. La politique elle-même
const directives = Object.fromEntries(CSP.split(/\s*;\s*/).filter(Boolean).map((d) => {
  const [name, ...values] = d.trim().split(/\s+/);
  return [name, values];
}));
const scriptSrc = directives['script-src'] || [];
if (!scriptSrc.length) fail('CSP : directive script-src absente');
for (const bad of ["'unsafe-inline'", "'unsafe-eval'", '*', 'data:', 'http:', 'https:']) {
  if (scriptSrc.includes(bad)) fail(`CSP : script-src ne doit pas contenir ${bad}`);
}
if (!(directives['object-src'] || []).includes("'none'")) fail("CSP : object-src 'none' attendu");
if (!directives['base-uri']) fail('CSP : base-uri attendu');
if (directives['frame-ancestors']) fail('CSP : frame-ancestors est ignoré dans une balise meta');
const scriptHosts = scriptSrc.filter((s) => /^https:\/\//.test(s));
checks++;

// 2. Les pages HTML publiées
const pages = walk(ROOT, '.html');
for (const file of pages) {
  const rel = path.relative(ROOT, file);
  const html = fs.readFileSync(file, 'utf8');
  checks++;

  const metas = html.match(/<meta\s+http-equiv="Content-Security-Policy"[^>]*>/gi) || [];
  if (metas.length !== 1) { fail(`${rel} : ${metas.length} balise(s) meta CSP (1 attendue)`); continue; }
  if (metas[0] !== CSP_META) fail(`${rel} : politique différente de scripts/csp.js`);
  const metaPos = html.indexOf(metas[0]);
  const headEnd = html.search(/<\/head>/i);
  if (headEnd < 0 || metaPos > headEnd) fail(`${rel} : meta CSP hors du <head>`);
  const firstRes = html.search(/<(script|link|style)\b/i);
  if (firstRes >= 0 && firstRes < metaPos) fail(`${rel} : une ressource précède la meta CSP`);

  // Scripts : inline non exécutables seulement, externes depuis une origine autorisée
  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  let m;
  while ((m = scriptRe.exec(html))) {
    const attrs = m[1];
    const src = (attrs.match(/\ssrc\s*=\s*["']([^"']*)["']/i) || [])[1];
    const type = ((attrs.match(/\stype\s*=\s*["']([^"']*)["']/i) || [])[1] || '').toLowerCase();
    if (src !== undefined) {
      if (m[2].trim()) fail(`${rel} : <script src> avec un contenu inline`);
      if (/^(https?:)?\/\//i.test(src)) {
        if (!/^https:\/\//i.test(src)) fail(`${rel} : script externe sans https explicite (${src})`);
        else if (!scriptHosts.some((h) => src.startsWith(h + '/'))) fail(`${rel} : script externe non autorisé par la CSP (${src})`);
      }
    } else if (type !== 'application/ld+json' && type !== 'application/json') {
      fail(`${rel} : script inline exécutable (« ${m[2].trim().slice(0, 60).replace(/\s+/g, ' ')} »)`);
    }
  }

  // Attributs on*= et liens javascript: (hors commentaires et contenus de <script>)
  const markup = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '');
  const tagRe = /<[a-zA-Z][^>]*>/g;
  while ((m = tagRe.exec(markup))) {
    const tag = m[0].replace(/"[^"]*"|'[^']*'/g, '""');
    const on = tag.match(/\s(on[a-z]+)\s*=/i);
    if (on) fail(`${rel} : attribut ${on[1]}= (${m[0].slice(0, 80)})`);
  }
  if (/\b(href|src|action|formaction)\s*=\s*["']\s*javascript:/i.test(markup)) fail(`${rel} : lien javascript:`);
}

// 3. Le JavaScript du site (HTML produit dynamiquement, évaluation de code)
const jsFiles = [...walk(path.join(ROOT, 'js'), '.js'), path.join(ROOT, 'sw.js')];
const JS_RULES = [
  [/(^|[^.\w$])eval\s*\(/, 'eval('],
  [/new\s+Function\s*\(/, 'new Function('],
  [/\bset(?:Timeout|Interval)\s*\(\s*["'`]/, 'setTimeout/setInterval avec une chaîne'],
  [/javascript:/i, 'URL javascript:'],
  [/<[a-zA-Z][^<>]*\son(?:click|change|input|load|error|submit|keydown|keyup|mouseover|focus|blur)\s*=/i, 'attribut on*= dans du HTML produit'],
];
for (const file of jsFiles) {
  const rel = path.relative(ROOT, file);
  // Commentaires retirés (approximation suffisante : « analyseur sans eval (…) » n'est pas un appel)
  const src = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/.*$/gm, '$1');
  checks++;
  for (const [re, label] of JS_RULES) {
    if (re.test(src)) fail(`${rel} : ${label}`);
  }
}

if (errors) {
  console.error(`\n✖ CSP : ${errors} problème(s) sur ${checks} vérifications.`);
  process.exit(1);
}
console.log(`✔ CSP : ${pages.length} pages HTML et ${jsFiles.length} fichiers JS conformes (${checks} vérifications).`);
