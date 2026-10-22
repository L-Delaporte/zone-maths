const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Set up browser-like environment for Node
global.window = global;
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

// Charger le véritable KaTeX depuis vendor/
let katex = null;
const katexPath = path.join(__dirname, '../vendor/katex/katex.min.js');
if (fs.existsSync(katexPath)) {
  const kCtx = {};
  vm.runInNewContext(fs.readFileSync(katexPath, 'utf8'), kCtx);
  katex = kCtx.katex;
}

// Check function for KaTeX delimiter integrity and LaTeX syntax
function checkMath(str, context) {
  if (!str || typeof str !== 'string') return [];
  const errors = [];

  let inDisplay = false;
  let inInline = false;
  let mathChunks = [];
  let textChunks = [];
  let currentText = '';
  let currentMath = '';
  
  let i = 0;
  while (i < str.length) {
    if (str[i] === '\\' && i + 1 < str.length && str[i + 1] === '$') {
      if (inDisplay || inInline) currentMath += '\\$';
      else currentText += '\\$';
      i += 2;
      continue;
    }
    if (str.substr(i, 2) === '$$') {
      if (inDisplay) {
        mathChunks.push({ type: 'display', content: currentMath });
        currentMath = '';
        inDisplay = false;
      } else if (inInline) {
        errors.push(`Encountered $$ inside inline math at pos ${i}`);
      } else {
        textChunks.push(currentText);
        currentText = '';
        inDisplay = true;
      }
      i += 2;
      continue;
    }
    if (str[i] === '$') {
      if (inDisplay) {
        currentMath += '$';
      } else if (inInline) {
        mathChunks.push({ type: 'inline', content: currentMath });
        currentMath = '';
        inInline = false;
      } else {
        textChunks.push(currentText);
        currentText = '';
        inInline = true;
      }
      i += 1;
      continue;
    }
    if (inDisplay || inInline) {
      currentMath += str[i];
    } else {
      currentText += str[i];
    }
    i++;
  }
  
  if (inDisplay) {
    errors.push(`Unclosed display math ($$) in: "${str.substring(0, 120)}..."`);
  }
  if (inInline) {
    errors.push(`Unclosed inline math ($) in: "${str.substring(0, 120)}..."`);
  }
  textChunks.push(currentText);

  // LaTeX commands outside math mode (excluding markdown formatting or HTML)
  const suspiciousLatexOutside = /\\(frac|mathbb|mathcal|sqrt|pmod|equiv|pmatrix|forall|exists|in\b|subset|cup|cap|le\b|ge\b|neq|approx|lim|sum|int|partial|nabla|vec|alpha|beta|gamma|lambda|theta|sigma|omega|infty|to\b|implies|iff|overline|underline|det\b|ker\b)/;
  
  for (const text of textChunks) {
    // Strip markdown code spans `...`
    const textNoCode = text.replace(/`[^`]*`/g, '');
    const match = textNoCode.match(suspiciousLatexOutside);
    if (match) {
      errors.push(`LaTeX command '\\${match[1]}' found OUTSIDE math mode in: "...${textNoCode.substring(Math.max(0, match.index - 20), Math.min(textNoCode.length, match.index + 40))}..."`);
    }
  }

  // Validation syntaxique réelle avec KaTeX
  if (katex) {
    for (const chunk of mathChunks) {
      try {
        katex.renderToString(chunk.content, { throwOnError: true, displayMode: chunk.type === 'display' });
      } catch (err) {
        errors.push(`KaTeX syntax error in ${chunk.type} math ("${chunk.content}"): ${err.message}`);
      }
    }
  }

  return errors;
}

function checkExerciseObject(obj, sourceInfo) {
  const fields = ['statement', 'question', 'answer', 'correct', 'solution', 'explanation', 'hint', 'hint1', 'hint2'];
  const allErrors = [];
  
  for (const f of fields) {
    if (obj[f]) {
      const errs = checkMath(obj[f], `${sourceInfo}.${f}`);
      for (const e of errs) {
        allErrors.push({ field: f, error: e, text: obj[f] });
      }
    }
  }
  
  if (Array.isArray(obj.options)) {
    obj.options.forEach((opt, idx) => {
      const errs = checkMath(opt, `${sourceInfo}.options[${idx}]`);
      for (const e of errs) {
        allErrors.push({ field: `options[${idx}]`, error: e, text: opt });
      }
    });
  }
  if (Array.isArray(obj.choices)) {
    obj.choices.forEach((opt, idx) => {
      const errs = checkMath(opt, `${sourceInfo}.choices[${idx}]`);
      for (const e of errs) {
        allErrors.push({ field: `choices[${idx}]`, error: e, text: opt });
      }
    });
  }
  if (Array.isArray(obj.hints)) {
    obj.hints.forEach((h, idx) => {
      const errs = checkMath(h, `${sourceInfo}.hints[${idx}]`);
      for (const e of errs) {
        allErrors.push({ field: `hints[${idx}]`, error: e, text: h });
      }
    });
  }
  return allErrors;
}

console.log('=== STARTING COMPREHENSIVE MATH INTEGRITY AUDIT ===');
let totalErrors = 0;

// Load chapters
require(path.join(__dirname, '../js/data/chapters.js'));
require(path.join(__dirname, '../js/data/chapters_lycee.js'));
require(path.join(__dirname, '../js/data/chapters_licence.js'));
console.log(`Total chapters registered: ${window.MATHS_CHAPTERS.length}`);

// Load advancedGenerators
require(path.join(__dirname, '../js/advancedGenerators.js'));

// Load randomGenerators
require(path.join(__dirname, '../js/randomGenerators.js'));

// 1. Audit AdvancedGenerators directly
console.log('\n--- 1. Testing MathsAdvancedGenerators directly ---');
const advChapters = [
  // L1
  'L1-LOG', 'L1-CMP', 'L1-MAT', 'L1-EV1', 'L1-APP', 'L1-REL', 'L1-SUI', 'L1-CNT', 'L1-TAY', 'L1-INT', 'L1-GEO',
  // L2
  'L2-RED1', 'L2-PRE', 'L2-SER', 'L2-CAL', 'L2-EDO', 'L2-EV2', 'L2-INT', 'L2-PRO', 'L2-TOP', 'L2-NUM', 'L2-GRP', 'L2-BIL', 'L2-AFF', 'L2-ANA', 'L2-ARI',
  // L3
  'L3-TOP', 'L3-MES', 'L3-GAL', 'L3-HOL', 'L3-EDP', 'L3-GEO', 'L3-ANA', 'L3-DIS', 'L3-RED2', 'L3-OPT', 'L3-STA', 'L3-DIF', 'L3-MOD', 'L3-ALG', 'L3-PRC',
  // Lycée
  '2NDE-FONC', '2NDE-VAR', '2NDE-VECT', '2NDE-STAT', '2NDE-DROI', '2NDE-PROB',
  '1ERE-DERI', '1ERE-DEGC', '1ERE-SUIT', '1ERE-TRIG', '1ERE-PROD', '1ERE-PROB',
  'TERM-COMB', 'TERM-SUIT', 'TERM-EXP', 'TERM-TRIG', 'TERM-PRIM', 'TERM-EQD', 'TERM-LOGA', 'TERM-INTG', 'TERM-GEOS', 'TERM-LOIB'
];

for (const ch of advChapters) {
  for (let tier = 1; tier <= 4; tier++) {
    for (let run = 0; run < 20; run++) {
      try {
        const q = window.MathsAdvancedGenerators.generate(ch, tier);
        if (q) {
          const errs = checkExerciseObject(q, `AdvancedGenerators.${ch}.tier${tier}.run${run}`);
          if (errs.length > 0) {
            console.error(`[ERROR] AdvancedGenerators ${ch} Tier ${tier}:`);
            for (const err of errs) {
              console.error(`  - ${err.field}: ${err.error}`);
              console.error(`    Text: "${err.text}"`);
              totalErrors++;
            }
          }
        }
      } catch (e) {
        console.error(`[EXCEPTION] AdvancedGenerators ${ch} Tier ${tier}: ${e.message}`);
        totalErrors++;
      }
    }
  }
}

// 2. Audit MathsGenerators.generateExercise for all chapters
console.log('\n--- 2. Testing MathsGenerators.generateExercise across all chapters ---');
for (const ch of window.MATHS_CHAPTERS) {
  for (let tier = 1; tier <= 4; tier++) {
    for (let run = 0; run < 10; run++) {
      try {
        const q = window.MathsGenerators.generateExercise(ch.id, tier);
        if (q) {
          const errs = checkExerciseObject(q, `MathsGenerators.${ch.id}.tier${tier}.run${run}`);
          if (errs.length > 0) {
            console.error(`[ERROR] MathsGenerators ${ch.id} Tier ${tier}:`);
            for (const err of errs) {
              console.error(`  - ${err.field}: ${err.error}`);
              console.error(`    Text: "${err.text}"`);
              totalErrors++;
            }
          }
        }
      } catch (e) {
        // Not all chapters might be wired
      }
    }
  }
}

// 3. Load all static data files
console.log('\n--- 3. Testing Static Data Files in js/data/ ---');
const dataFiles = [
  'data_5eme.js', 'data_4eme.js', 'data_2nde.js', 'data_1ere.js', 'data_terminale.js',
  'data_l1.js', 'data_l2.js', 'data_l3.js', 'exercises.js', 'courses.js', 'worksheets.js'
];

for (const df of dataFiles) {
  const filePath = path.join(__dirname, '../js/data', df);
  if (!fs.existsSync(filePath)) continue;
  try {
    require(filePath);
    console.log(`Loaded ${df}`);
  } catch (e) {
    console.error(`Error requiring ${df}:`, e.message);
  }
}

// Check window.MATHS_EXERCISES
if (window.MATHS_EXERCISES) {
  console.log('\nChecking window.MATHS_EXERCISES...');
  for (const [chId, exList] of Object.entries(window.MATHS_EXERCISES)) {
    if (Array.isArray(exList)) {
      exList.forEach((ex, idx) => {
        const errs = checkExerciseObject(ex, `MATHS_EXERCISES.${chId}[${idx}]`);
        if (errs.length > 0) {
          console.error(`[ERROR] Static Exercise in ${chId} [${ex.id || idx}]:`);
          for (const err of errs) {
            console.error(`  - ${err.field}: ${err.error}`);
            console.error(`    Text: "${err.text}"`);
            totalErrors++;
          }
        }
      });
    }
  }
}

// Check window.MATHS_COURSES
if (window.MATHS_COURSES) {
  console.log('\nChecking window.MATHS_COURSES...');
  for (const [chId, course] of Object.entries(window.MATHS_COURSES)) {
    if (course.keyPoints && Array.isArray(course.keyPoints)) {
      course.keyPoints.forEach((kp, idx) => {
        if (kp.content) {
          const errs = checkMath(kp.content, `Course.${chId}.keyPoints[${idx}]`);
          for (const e of errs) {
            console.error(`[ERROR] Course ${chId} keyPoint ${idx}: ${e}`);
            totalErrors++;
          }
        }
      });
    }
    if (course.methods && Array.isArray(course.methods)) {
      course.methods.forEach((m, idx) => {
        if (m.example) {
          const errs = checkMath(m.example, `Course.${chId}.methods[${idx}].example`);
          for (const e of errs) {
            console.error(`[ERROR] Course ${chId} method ${idx} example: ${e}`);
            totalErrors++;
          }
        }
        if (Array.isArray(m.steps)) {
          m.steps.forEach((step, sIdx) => {
            const errs = checkMath(step, `Course.${chId}.methods[${idx}].step[${sIdx}]`);
            for (const e of errs) {
              console.error(`[ERROR] Course ${chId} method ${idx} step ${sIdx}: ${e}`);
              totalErrors++;
            }
          });
        }
      });
    }
    if (course.traps && Array.isArray(course.traps)) {
      course.traps.forEach((trap, idx) => {
        const errs = checkMath(trap, `Course.${chId}.traps[${idx}]`);
        for (const e of errs) {
          console.error(`[ERROR] Course ${chId} trap ${idx}: ${e}`);
          totalErrors++;
        }
      });
    }
    if (course.flashcards && Array.isArray(course.flashcards)) {
      course.flashcards.forEach((fc, idx) => {
        const errsQ = checkMath(fc.q, `Course.${chId}.flashcard[${idx}].q`);
        for (const e of errsQ) {
          console.error(`[ERROR] Course ${chId} flashcard ${idx} Q: ${e}`);
          totalErrors++;
        }
        const errsA = checkMath(fc.a, `Course.${chId}.flashcard[${idx}].a`);
        for (const e of errsA) {
          console.error(`[ERROR] Course ${chId} flashcard ${idx} A: ${e}`);
          totalErrors++;
        }
      });
    }
  }
}

// Check window.MATHS_WORKSHEETS
if (window.MATHS_WORKSHEETS) {
  console.log('\nChecking window.MATHS_WORKSHEETS...');
  for (const [chId, wsList] of Object.entries(window.MATHS_WORKSHEETS)) {
    if (Array.isArray(wsList)) {
      wsList.forEach((ws, idx) => {
        if (ws.statement) {
          const errs = checkMath(ws.statement, `Worksheet.${chId}[${idx}].statement`);
          for (const e of errs) {
            console.error(`[ERROR] Worksheet ${chId} [${idx}] statement: ${e}`);
            totalErrors++;
          }
        }
        if (ws.solution) {
          const errs = checkMath(ws.solution, `Worksheet.${chId}[${idx}].solution`);
          for (const e of errs) {
            console.error(`[ERROR] Worksheet ${chId} [${idx}] solution: ${e}`);
            totalErrors++;
          }
        }
      });
    }
  }
}

console.log(`\n=== AUDIT COMPLETE: ${totalErrors} errors found ===`);
process.exit(totalErrors > 0 ? 1 : 0);
