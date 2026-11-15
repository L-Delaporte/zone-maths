#!/usr/bin/env node
/**
 * Sujets blancs de l'épreuve anticipée (js/eaGenerators.js) : plusieurs milliers de tirages par parcours.
 * Vérifie le rendu KaTeX, les conventions françaises, l'absence de contenu hors programme et de QCM,
 * le barème, et recalcule indépendamment une partie des réponses à partir de l'énoncé affiché.
 * Node seul, sans dépendance ; code de sortie 1 en cas d'échec. Argument facultatif : nombre de tirages.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const DRAWS = Number(process.argv[2]) || 1500;

const seen = new Map();
let errors = 0;
function check(label, ok, detail) {
  if (ok) return;
  const n = (seen.get(label) || 0) + 1;
  seen.set(label, n);
  errors++;
  if (n <= 3) console.error(`✘ ${label}${detail ? ` : ${String(detail).slice(0, 400)}` : ''}`);
}

const kctx = {};
vm.runInNewContext(read('vendor/katex/katex.min.js'), kctx);
const { katex } = kctx;

const sandbox = { document: { getElementById: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem() {} } };
sandbox.window = sandbox;
vm.createContext(sandbox);
for (const f of ['js/flashQuizGenerator.js', 'js/eaGenerators.js', 'js/data/ds_bank_1ere.js']) {
  vm.runInContext(read(f), sandbox, { filename: f });
}
const { MathsQuizGenerator: quiz, MathsExamTools: tools, MathsEaGenerators: ea } = sandbox;

// ---- Contrôles de forme ----------------------------------------------------------------------
const parsed = new Set();
const noSvg = (s) => s.replace(/<svg[\s\S]*?<\/svg>/g, '');
const mathOf = (s) => (noSvg(s).match(/\$[^$]+\$/g) || []).map((m) => m.slice(1, -1));

function checkText(label, text) {
  check(`${label} : valeur invalide`, !/NaN|undefined|\[object|null\b/.test(text) && !/(^|[^\\])Infinity/.test(text), text);
  check(`${label} : dollars appariés`, (noSvg(text).match(/\$/g) || []).length % 2 === 0, text);
  for (const m of mathOf(text)) {
    if (!parsed.has(m)) {
      parsed.add(m);
      try { katex.renderToString(m, { throwOnError: true }); } catch (e) { check(`${label} : KaTeX`, false, `${m} → ${e.message}`); }
    }
    check(`${label} : virgule décimale`, !/\d\.\d/.test(m), m);
    check(`${label} : double signe`, !/\+\s*-|-\s*-|\+\s*\+/.test(m), m);
    check(`${label} : coefficient 1 écrit`, !/(^|[^\d{,])1x/.test(m), m);
    check(`${label} : terme nul écrit`, !/[+-]\s*0x|[+-]\s*0(\s|$)/.test(m) || /\\dfrac/.test(m), m);
  }
  check(`${label} : calculatrice`, !/calculatrice|arrondi|valeur approch|\\approx|≈/i.test(noSvg(text)), text);
}

// ---- Recalcul indépendant --------------------------------------------------------------------
/** Valeur d'une expression polynomiale écrite en TeX, pour x donné */
function evalTex(tex, x) {
  let s = tex.replace(/\{,\}/g, '.').replace(/\s/g, '').replace(/\^(\d)/g, '**$1');
  s = s.replace(/(\d)(x|\()/g, '$1*$2').replace(/\)(x|\(|\d)/g, ')*$1').replace(/x\(/g, 'x*(');
  s = s.replace(/^-/, '0-').replace(/\(-/g, '(0-');
  return Function('x', `return ${s};`)(x);
}
const number = (t) => {
  const f = t.match(/^(-?)\\dfrac\{(\d+)\}\{(\d+)\}$/);
  if (f) return (f[1] ? -1 : 1) * Number(f[2]) / Number(f[3]);
  return Number(t.replace('{,}', '.'));
};
/** Appartenance à une réunion d'intervalles écrite en TeX */
function inSet(S, x) {
  return S.replace(/\\infty/g, 'oo').split('\\cup').some((part) => {
    const m = part.trim().match(/^([\][])(.+?) ; (.+?)([\][])$/);
    if (!m) throw new Error(`intervalle illisible : ${part}`);
    const a = m[2] === '-oo' ? -Infinity : Number(m[2]);
    const b = m[3] === '+oo' ? Infinity : Number(m[3]);
    return (m[1] === '[' ? x >= a : x > a) && (m[4] === ']' ? x <= b : x < b);
  });
}
const CMP = { '<': (a, b) => a < b, '\\leqslant': (a, b) => a <= b, '>': (a, b) => a > b, '\\geqslant': (a, b) => a >= b };
const ans = (q) => (q.answer.match(/\$([^$]+)\$/) || [])[1];
const near = (a, b) => Math.abs(a - b) < 1e-7;
const lastMath = (s) => { const m = mathOf(s); return m[m.length - 1]; };
const pctsOf = (s) => (noSvg(s).match(/\$(\d+(?:\{,\}\d+)?)\\,\\%\$/g) || []).map((m) => number(m.slice(1, -5).trim()));

const RECALC = {
  'Développer une expression': (q) => { const e = lastMath(q.statement); [-2, 0, 1, 3].forEach((x) => check('développer', near(evalTex(e, x), evalTex(ans(q), x)), `${e} / ${q.answer}`)); },
  'Réduire une expression': (q) => { const e = lastMath(q.statement); [-2, 0, 1, 3].forEach((x) => check('réduire', near(evalTex(e, x), evalTex(ans(q), x)), `${e} / ${q.answer}`)); },
  'Factoriser une expression': (q) => {
    const e = lastMath(q.statement);
    [-2, 0, 1, 3].forEach((x) => check('factoriser', near(evalTex(e, x), evalTex(ans(q), x)), `${e} / ${q.answer}`));
    for (const m of ans(q).matchAll(/\((\d+)x [+-] (\d+)\)/g)) {
      const g = (a, b) => (b ? g(b, a % b) : a);
      check('factorisation complète', g(+m[1], +m[2]) === 1, q.answer);
    }
  },
  'Équation produit nul': (q) => {
    const [lhs] = lastMath(q.statement).split('=');
    const vals = ans(q).match(/\\left\\\{ (.+) \\right\\\}/)[1].split(' ; ').map(number);
    check('produit nul : deux solutions', vals.length === 2 && !near(vals[0], vals[1]), q.statement);
    check('produit nul : ordre croissant', vals[0] < vals[1], q.answer);
    vals.forEach((v) => check('produit nul', near(evalTex(lhs, v), 0), `${lhs} en ${v}`));
  },
  'Équation du premier degré': (q) => {
    const [l, r] = lastMath(q.statement).split('=');
    const v = number(ans(q).match(/\\left\\\{ (.+) \\right\\\}/)[1]);
    check('premier degré', near(evalTex(l, v), evalTex(r, v)), q.statement);
  },
  'Signe d\'une expression du premier degré': inequation,
  'Signe d\'une expression factorisée': inequation,
  'Calculer une image': (q) => {
    const f = (mathOf(q.statement).find((m) => m.startsWith('f(x) =')) || '').slice(6);
    const x = Number(lastMath(q.statement).match(/f\((-?\d+)\)/)[1]);
    check('image', near(evalTex(f, x), number(ans(q))), q.statement);
  },
  'Appliquer un taux d\'évolution': (q) => {
    const v = Number(mathOf(q.statement)[0]), t = pctsOf(q.statement)[0];
    const e = /augmente/.test(q.statement) ? v * (1 + t / 100) : v * (1 - t / 100);
    check('valeur finale', near(e, number(ans(q))), q.statement);
  },
  'Retrouver une valeur initiale': (q) => {
    const t = pctsOf(q.statement)[0], f = number(mathOf(q.statement)[1]);
    const c = /hausse/.test(q.statement) ? 1 + t / 100 : 1 - t / 100;
    check('valeur initiale', near(f / c, number(ans(q))), q.statement);
  },
  'Taux équivalent à deux évolutions': (q) => {
    const m = [...noSvg(q.statement).matchAll(/(augmente|baisse) de \$(\d+)\\,\\%\$/g)].map((x) => (x[1] === 'augmente' ? 1 : -1) * Number(x[2]));
    const g = ((1 + m[0] / 100) * (1 + m[1] / 100) - 1) * 100;
    if (near(g, 0)) { check('évolution globale nulle', /aucune/.test(q.answer), q.answer); return; }
    check('sens de l\'évolution globale', q.answer.startsWith(g > 0 ? 'hausse' : 'baisse'), q.answer);
    check('évolution globale', near(Math.abs(g), number(q.answer.match(/\$(.+?)\\,\\%\$/)[1])), `${q.statement} / ${q.answer}`);
  },
  'Taux d\'évolution réciproque': (q) => {
    const t = pctsOf(q.statement)[0] * (/hausse/.test(q.statement) ? 1 : -1);
    const r = (1 / (1 + t / 100) - 1) * 100;
    check('sens du réciproque', /hausse/.test(q.answer) === (r > 0), q.answer);
    check('réciproque', near(Math.abs(r), number(q.answer.match(/\$(.+?)\\,\\%\$/)[1])), `${q.statement} / ${q.answer}`);
  },
  'Coefficient directeur d\'une droite': (q) => {
    const m = noSvg(q.statement).match(/A\((-?\d+) ; (-?\d+)\)\$ et \$B\((-?\d+) ; (-?\d+)\)/);
    check('coefficient directeur', near((m[4] - m[2]) / (m[3] - m[1]), number(ans(q))), q.statement);
  }
};
function inequation(q) {
  const m = lastMath(q.statement).match(/^(.*) (<|>|\\leqslant|\\geqslant) 0$/);
  const S = ans(q).replace('S = ', '');
  for (let x = -12; x <= 12; x += 0.25) {
    check('inéquation', inSet(S, x) === CMP[m[2]](evalTex(m[1], x), 0), `${m[1]} ${m[2]} 0 ; S = ${S} ; x = ${x}`);
  }
}

// ---- Tirages ---------------------------------------------------------------------------------
const THEMES = [/2N5/, /2N[124]/, /2A|2G3/, /2S1/, /2S2|1S1/];
const PLAN = [2, 3, 3, 2, 2];
const NOTIONS = new Map();

for (let i = 0; i < DRAWS * 2; i++) {
  const autos = ea.automatismes();
  check('12 automatismes', autos.length === 12, autos.length);
  check('automatismes tous différents', new Set(autos.map((q) => q.skill + q.statement)).size === 12);
  let k = 0;
  PLAN.forEach((n, t) => { for (let j = 0; j < n; j++, k++) check(`automatismes : thème ${t}`, THEMES[t].test(autos[k].chapterId), autos[k].chapterId); });
  for (const q of autos) {
    NOTIONS.set(q.skill, (NOTIONS.get(q.skill) || 0) + 1);
    check('automatisme sans QCM', !tools.isMcq(q) &&!/\b[A-D]\s*[).]\s/.test(noSvg(q.statement)), q.statement);
    check('automatisme complet', q.statement && q.answer && q.solution);
    checkText(`automatisme ${q.skill}`, `${q.statement}\n${q.answer}\n${q.solution}`);
    check('automatisme sans notion hors du tronc commun', !/discriminant|\\Delta|dérivée|f'\(/i.test(`${q.statement}${q.solution}`), q.statement);
    const fn = RECALC[q.skill];
    if (fn) { try { fn(q); } catch (e) { check(`recalcul ${q.skill}`, false, `${e.message} — ${q.statement}`); } }
  }
}

for (const parcours of ['sans-spe', 'techno']) {
  for (let i = 0; i < DRAWS; i++) {
    const part2 = quiz.buildEaPart2(12, parcours);
    check(`${parcours} : trois exercices`, part2.length === 3, part2.length);
    check(`${parcours} : 14 points`, part2.reduce((t, q) => t + q.examPoints, 0) === 14);
    check(`${parcours} : titre de partie`, /Partie 2/.test(part2[0].sectionTitle));
    part2.forEach((ex, n) => {
      check(`${parcours} : numérotation`, ex.seriesIndex === 13 + n && ex.examTitle.startsWith(`Exercice ${n + 1} — `), ex.examTitle);
      check(`${parcours} : exercice rédigé`, ex.isBrevetProblem && ex.fromBank && ex.statement && ex.solution);
      const split = tools.splitPoints(ex.statement, ex.examPoints);
      check(`${parcours} : barème par question`, split && near(split.reduce((t, s) => t + s.pts, 0), ex.examPoints), ex.statement);
      checkText(`${parcours} ${ex.skill}`, `${ex.statement}\n${ex.solution}`);
      const all = noSvg(`${ex.statement}\n${ex.solution}`);
      check(`${parcours} : pas de discriminant`, !/discriminant|\\Delta/i.test(all), ex.statement);
      check(`${parcours} : pas de formule du sommet`, !/-\s*\\dfrac\{b\}\{2a\}/.test(all), ex.statement);
      check(`${parcours} : langage des probabilités`, !/fréquence conditionnelle|fréquence marginale/i.test(all), ex.statement);
      if (parcours === 'sans-spe') {
        check('sans spécialité : notation u(n)', !/\bu_/.test(all), ex.statement);
        check('sans spécialité : pas de dérivation', !/dérivé|f'\(|tangente/i.test(all), ex.statement);
      } else {
        check('voie technologique : notation indicielle', !/\bu\(\w/.test(all), ex.statement);
        check('voie technologique : pas de tableau croisé', !/Recopier et compléter ce tableau/.test(all), ex.statement);
      }
      recalcExercise(ex, parcours);
    });
  }
}

function recalcExercise(ex, parcours) {
  try {
    if (/Fiabilité d'un test/.test(ex.skill)) {
      const [p, s, f] = pctsOf(ex.statement);
      const tp = p * s, tot = tp + (100 - p) * f;
      const m = ex.solution.match(/= (\\dfrac\{\d+\}\{\d+\}|\d+)\$\.\n\n\*\*5/);
      check('test : probabilité conditionnelle', near(number(m[1]), tp / tot), ex.statement);
      const g = (a, b) => (b ? g(b, a % b) : a);
      const fr = m[1].match(/\{(\d+)\}\{(\d+)\}/);
      if (fr) check('test : fraction irréductible', g(+fr[1], +fr[2]) === 1, m[1]);
    } else if (/accroissements constants/.test(ex.skill)) {
      const notation = parcours === 'sans-spe' ? 'u\\(1\\)' : 'u_\\{1\\}';
      const m = ex.solution.match(new RegExp(`\\$${notation} = (\\d+) ([+-]) (\\d+) =`));
      const a = Number(m[1]), r = Number(m[3]) * (m[2] === '+' ? 1 : -1);
      const S = Number(mathOf(ex.statement.split('\n')[5]).pop());
      let n = 0;
      while (r > 0 ? a + r * n <= S : a + r * n >= S) n++;
      check('suite arithmétique : seuil', new RegExp(`n = ${n}\\$`).test(ex.solution), `${ex.statement} / attendu n = ${n}`);
    } else if (/Bernoulli/.test(ex.skill)) {
      const n = Number(mathOf(ex.statement)[0]), p = number(mathOf(ex.statement)[1]);
      const lines = ex.solution.split('\n\n');
      const res = (i) => number(lastMath(lines[i]).split('=').pop().trim());
      check('Bernoulli : tout réussi', near(res(1), p ** n), ex.statement);
      check('Bernoulli : aucun', near(res(2), (1 - p) ** n), ex.statement);
      check('Bernoulli : au moins un', near(res(3), 1 - (1 - p) ** n), ex.statement);
      check('Bernoulli : exactement un', near(res(4), n * p * (1 - p) ** (n - 1)), ex.statement);
    } else if (/forme factorisée/.test(ex.skill)) {
      const f = mathOf(ex.statement).find((m) => m.startsWith('f(x) =')).slice(6);
      const vals = ex.solution.match(/\\left\\\{ (.+?) \\right\\\}/)[1].split(' ; ').map(Number);
      vals.forEach((v) => check('second degré : racine', near(evalTex(f, v), 0), ex.statement));
      const al = (vals[0] + vals[1]) / 2;
      const be = Number((ex.solution.match(/f\(-?\d+\) = (-?\d+)\$ : le sommet/) || [])[1]);
      check('second degré : sommet', near(evalTex(f, al), be), ex.statement);
    } else if (/Second degré sans formule/.test(ex.skill)) {
      const g = mathOf(ex.statement).find((m) => m.startsWith('g(x) =') && /x\^2/.test(m)).slice(6);
      const fact = mathOf(ex.statement).filter((m) => m.startsWith('g(x) =')).pop().slice(6);
      [-3, -1, 0, 2, 5].forEach((x) => check('second degré : forme factorisée', near(evalTex(g, x), evalTex(fact, x)), ex.statement));
    } else if (/Variable aléatoire/.test(ex.skill)) {
      const [, row] = ex.solution.match(/\| \$P\(X = x_i\)\$ \| (.+) \|/);
      const probs = row.split(' | ').map((c) => number(c.replace(/\$/g, '')));
      check('loi : somme égale à 1', near(probs.reduce((a, b) => a + b, 0), 1), row);
    } else if (/Étude d'une fonction polynôme/.test(ex.skill)) {
      const f = mathOf(ex.statement).find((m) => m.startsWith('f(x) =')).slice(6);
      const fact = mathOf(ex.statement).find((m) => m.startsWith("f'(x) =")).slice(7);
      const h = 1e-5;
      [-2, -1, 0, 1, 3].forEach((x) => check('dérivée : forme factorisée', Math.abs((evalTex(f, x + h) - evalTex(f, x - h)) / (2 * h) - evalTex(fact, x)) < 1e-3, ex.statement));
    }
  } catch (e) {
    check(`recalcul ${ex.skill}`, false, `${e.message} — ${ex.statement}`);
  }
}

// Le parcours de spécialité reste celui de la banque de DS, sans la parabole retirée du programme
for (let i = 0; i < 300; i++) {
  const part2 = quiz.buildEaPart2(12);
  check('spécialité : 14 points', part2.reduce((t, q) => t + q.examPoints, 0) === 14);
  check('spécialité : parabole retirée du programme', part2.every((q) => !/parabole[\s\S]*sommet|sommet[\s\S]*parabole/i.test(q.statement)));
}

check('formats proposés en première', quiz.EXAM_VARIANTS['1ere'].map((f) => f[0]).join() === 'ea-20-sans-spe,ea-20-techno');
check('parcours décrits', ['ea-20', 'ea-20-sans-spe', 'ea-20-techno'].every((k) => quiz.EA_PARCOURS[k]));
check('aucun format annoncé en QCM', !/QCM/.test(JSON.stringify([quiz.EXAM_FORMATS['1ere'], quiz.EXAM_VARIANTS['1ere']])));
check('notions d\'automatismes variées', NOTIONS.size >= 25, NOTIONS.size);

if (errors) {
  for (const [label, n] of seen) if (n > 3) console.error(`… ${label} : ${n} échecs au total`);
  console.error(`test_ea_generators : ${errors} échec(s)`);
  process.exit(1);
}
console.log(`✔ test_ea_generators : ${DRAWS * 2} jeux d'automatismes et ${DRAWS * 2} parties 2 conformes (${parsed.size} formules KaTeX, ${NOTIONS.size} notions)`);
