#!/usr/bin/env node
/**
 * Lance toute la batterie de tests — À EXÉCUTER AVANT CHAQUE MISE EN LIGNE :
 *     node scripts/tests/run.js
 *
 * Code de sortie 0 si tout est vert, 1 sinon.
 */
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..', '..');
const steps = [
  ['Syntaxe JavaScript', null],
  ['Versions des ressources (cache)', ['scripts/build_versions.js', '--check']],
  ['Cœur applicatif', ['scripts/tests/test_core.js']],
  ['Contenus (cours, exercices, fiches)', ['scripts/tests/test_data_content.js']],
  ['Banques de DS et problèmes de brevet', ['scripts/tests/test_ds_banks.js']],
  ['Générateurs collège', ['scripts/tests/test_college_generators.js']],
  ['Générateurs 6e', ['scripts/tests/test_6eme.js']],
  ['Générateurs lycée et licence', ['scripts/tests/test_lycee_licence_generators.js']],
  ['Intégrité KaTeX historique', ['scripts/test_math_integrity.js']]
];

function jsFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === 'vendor' || e.name === 'node_modules' ? [] : jsFiles(p);
    return e.name.endsWith('.js') ? [p] : [];
  });
}

let failed = [];
for (const [label, args] of steps) {
  process.stdout.write(`\n━━ ${label} ━━\n`);
  let ok;
  if (!args) {
    const files = [...jsFiles(path.join(ROOT, 'js')), path.join(ROOT, 'sw.js')];
    ok = files.every(f => {
      const r = spawnSync(process.execPath, ['--check', f], { encoding: 'utf8' });
      if (r.status !== 0) console.error(r.stderr);
      return r.status === 0;
    });
    if (ok) console.log(`✔ ${files.length} fichiers`);
  } else {
    if (!fs.existsSync(path.join(ROOT, args[0]))) {
      console.log(`(absent : ${args[0]})`);
      continue;
    }
    ok = spawnSync(process.execPath, args, { cwd: ROOT, stdio: 'inherit' }).status === 0;
  }
  if (!ok) failed.push(label);
}

console.log('\n' + '═'.repeat(60));
if (failed.length) {
  console.error(`✖ ÉCHEC : ${failed.join(' · ')}`);
  process.exit(1);
}
console.log('✔ Tous les tests sont verts.');
