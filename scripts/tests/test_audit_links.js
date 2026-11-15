#!/usr/bin/env node
/**
 * Liens internes des pages publiées (racine, cours/, hubs) : tout href ou src vers le site doit
 * mener à un fichier existant, ou à un dossier qui a un index.html.
 * Les liens construits en JavaScript ne sont pas suivis. Node seul ; code de sortie 1 en cas d'échec.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SITE = 'https://etabli-des-maths.fr';
const NOT_PUBLISHED = new Set(['.git', '.github', '.claude', 'node_modules', 'scripts']);

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return NOT_PUBLISHED.has(e.name) ? [] : htmlFiles(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

function targetExists(file) {
  if (!fs.existsSync(file)) return false;
  return !fs.statSync(file).isDirectory() || fs.existsSync(path.join(file, 'index.html'));
}

/** Chemin local visé par un lien, ou null si le lien sort du site ou reste dans la page. */
function resolveLink(link, page) {
  let url = link.trim();
  if (url.startsWith(`${SITE}/`) || url === SITE) url = url.slice(SITE.length) || '/';
  if (!url || url.startsWith('#') || url.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(url)) return null;
  const clean = decodeURI(url.split(/[?#]/)[0]);
  if (!clean) return null;
  return clean.startsWith('/') ? path.join(ROOT, clean) : path.resolve(path.dirname(page), clean);
}

const pages = htmlFiles(ROOT);
const broken = [];
let links = 0;
for (const page of pages) {
  // Les commentaires et le code des scripts en ligne peuvent contenir des exemples de liens.
  const html = fs.readFileSync(page, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/g, '$1');
  for (const m of html.matchAll(/\s(?:href|src)=(["'])(.*?)\1/g)) {
    const target = resolveLink(m[2], page);
    if (target === null) continue;
    links++;
    if (!targetExists(target)) broken.push(`${path.relative(ROOT, page)} → ${m[2]}`);
  }
}

if (broken.length) {
  console.error(broken.slice(0, 50).map((b) => `✖ ${b}`).join('\n'));
  console.error(`\n✖ test_audit_links : ${broken.length} lien(s) cassé(s) sur ${links}`);
  process.exit(1);
}
console.log(`✔ test_audit_links : ${links} liens internes valides sur ${pages.length} pages`);
