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
require(path.join(__dirname, '../js/data/data_capes.js'));
require(path.join(__dirname, '../js/data/data_proofs.js'));
console.log(`Total chapters registered: ${window.MATHS_CHAPTERS.length}`);

// Load geometryFigures & scratchRenderer
require(path.join(__dirname, '../js/geometryFigures.js'));
require(path.join(__dirname, '../js/scratchRenderer.js'));

// Load proofEngine & mathVisualizer
require(path.join(__dirname, '../js/proofEngine.js'));
require(path.join(__dirname, '../js/mathVisualizer.js'));

// Load advancedGenerators & lyceeGenerators
require(path.join(__dirname, '../js/lyceeGenerators.js'));
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
  // Lycée (40 chapitres)
  '2N1', '2N2', '2N3', '2N4', '2A1', '2A2', '2A3', '2G1', '2G2', '2G3', '2S1', '2S2', '2S3',
  '1A1', '1A2', '1A3', '1A4', '1A5', '1A6', '1G1', '1G2', '1G3', '1S1', '1S2',
  'TA1', 'TA2', 'TA3', 'TA4', 'TA5', 'TA6', 'TA7', 'TG1', 'TG2', 'TS1', 'TS2', 'TX1', 'TX2', 'TX3', 'TX4', 'TX5'
];

for (const ch of advChapters) {
  for (let tier = 1; tier <= 4; tier++) {
    for (let run = 0; run < 10; run++) {
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

// 2. Audit MathsGenerators.generateForChapter across all chapters
console.log('\n--- 2. Testing MathsGenerators.generateForChapter across all chapters ---');
for (const ch of window.MATHS_CHAPTERS) {
  for (let tier = 1; tier <= 4; tier++) {
    for (let run = 0; run < 5; run++) {
      try {
        const q = window.MathsGenerators.generateForChapter(ch.id, tier);
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
        // Log if unexpected exception
        console.error(`[EXCEPTION] MathsGenerators ${ch.id} Tier ${tier}: ${e.message}`);
        totalErrors++;
      }
    }
  }
}

// 3. Load all static data files
console.log('\n--- 3. Testing Static Data Files in js/data/ ---');
const dataFiles = [
  'data_5eme.js', 'data_4eme.js', 'data_2nde.js', 'data_1ere.js', 'data_terminale.js',
  'data_l1.js', 'data_l2.js', 'data_l3.js', 'data_capes.js', 'data_proofs.js',
  'exercises.js', 'courses.js', 'worksheets.js'
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

// Check window.CAPES_LESSONS
if (window.CAPES_LESSONS) {
  console.log('\nChecking window.CAPES_LESSONS...');
  window.CAPES_LESSONS.forEach((lesson, idx) => {
    if (lesson.keyTheorem) {
      if (lesson.keyTheorem.statement) {
        const errs = checkMath(lesson.keyTheorem.statement, `CAPES.${lesson.id}.keyTheorem.statement`);
        for (const e of errs) {
          console.error(`[ERROR] CAPES ${lesson.id} statement: ${e}`);
          totalErrors++;
        }
      }
      if (lesson.keyTheorem.proof) {
        const errs = checkMath(lesson.keyTheorem.proof, `CAPES.${lesson.id}.keyTheorem.proof`);
        for (const e of errs) {
          console.error(`[ERROR] CAPES ${lesson.id} proof: ${e}`);
          totalErrors++;
        }
      }
    }
    if (Array.isArray(lesson.plan)) {
      lesson.plan.forEach((p, pIdx) => {
        const errs = checkMath(p.content, `CAPES.${lesson.id}.plan[${pIdx}]`);
        for (const e of errs) {
          console.error(`[ERROR] CAPES ${lesson.id} plan ${pIdx}: ${e}`);
          totalErrors++;
        }
      });
    }
    if (Array.isArray(lesson.developments)) {
      lesson.developments.forEach((d, dIdx) => {
        const errs = checkMath(d, `CAPES.${lesson.id}.developments[${dIdx}]`);
        for (const e of errs) {
          console.error(`[ERROR] CAPES ${lesson.id} dev ${dIdx}: ${e}`);
          totalErrors++;
        }
      });
    }
  });
}

// Check window.ProofEngine
if (window.ProofEngine) {
  console.log('\nChecking window.ProofEngine Theorems...');
  const thList = window.ProofEngine.getTheorems();
  thList.forEach((th) => {
    if (th.statement) {
      const errs = checkMath(th.statement, `ProofEngine.${th.id}.statement`);
      for (const e of errs) {
        console.error(`[ERROR] Proof ${th.id} statement: ${e}`);
        totalErrors++;
      }
    }
    if (Array.isArray(th.steps)) {
      th.steps.forEach((s, sIdx) => {
        const errsText = checkMath(s.text, `ProofEngine.${th.id}.step[${sIdx}].text`);
        for (const e of errsText) {
          console.error(`[ERROR] Proof ${th.id} step ${sIdx} text: ${e}`);
          totalErrors++;
        }
        const errsWhy = checkMath(s.why, `ProofEngine.${th.id}.step[${sIdx}].why`);
        for (const e of errsWhy) {
          console.error(`[ERROR] Proof ${th.id} step ${sIdx} why: ${e}`);
          totalErrors++;
        }
      });
    }
    if (th.fallacy) {
      if (th.fallacy.fakeStep) {
        const errs = checkMath(th.fallacy.fakeStep, `ProofEngine.${th.id}.fallacy.fakeStep`);
        for (const e of errs) {
          console.error(`[ERROR] Proof ${th.id} fakeStep: ${e}`);
          totalErrors++;
        }
      }
      if (th.fallacy.whyFalse) {
        const errs = checkMath(th.fallacy.whyFalse, `ProofEngine.${th.id}.fallacy.whyFalse`);
        for (const e of errs) {
          console.error(`[ERROR] Proof ${th.id} whyFalse: ${e}`);
          totalErrors++;
        }
      }
    }
  });
}

console.log(`\n=== AUDIT COMPLETE: ${totalErrors} errors found ===`);
process.exit(totalErrors > 0 ? 1 : 0);
