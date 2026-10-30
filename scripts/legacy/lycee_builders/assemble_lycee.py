# ARCHIVE : ne plus relancer, js/lyceeGenerators.js est la source de vérité
# -*- coding: utf-8 -*-
"""
Assemblage final de Site/js/lyceeGenerators.js
Combine le squelette central et les 3 modules de niveau (2nde, 1ere, Tale).
"""

import os
import sys

from build_2nde import get_2nde_code
from build_1ere import get_1ere_code
from build_tale import get_tale_code

OUT_FILE = os.path.join(os.path.dirname(__file__), "../../js/lyceeGenerators.js")

HEADER = '''/**
 * lyceeGenerators.js
 * Moteur procédural complet pour le Lycée : Seconde, Première Spé, Terminale Spé & Expertes.
 * 40 chapitres x 4 paliers ZPD = 160 générateurs avec variables aléatoires & corrections pas à pas.
 */

window.MathsLyceeGenerators = {
  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randChoice(arr) {
    if (!arr || !arr.length) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  },

  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  },

  simplifyFrac(num, den) {
    if (den < 0) { num = -num; den = -den; }
    if (num === 0) return "0";
    const g = this.gcd(num, den);
    num /= g;
    den /= g;
    if (den === 1) return "" + num;
    return `\\\\frac{${num}}{${den}}`;
  },

  formatSign(val, withSpace = true) {
    if (val >= 0) return withSpace ? `+ ${val}` : `+${val}`;
    return withSpace ? `- ${Math.abs(val)}` : `-${Math.abs(val)}`;
  },

  makeMcq(chapterId, tier, title, skill, statement, correctAnswer, distractors, hint1, hint2, solution) {
    let uniqueDistractors = [...new Set(distractors.filter(d => d && d !== correctAnswer))];
    let fallbackOffset = 1;
    while (uniqueDistractors.length < 3) {
      let synthetic = null;
      const numMatch = correctAnswer.match(/-?\\\\d+(?:[.,]\\\\d+)?/);
      if (numMatch) {
        const val = parseFloat(numMatch[0].replace(',', '.'));
        const offset = fallbackOffset % 2 === 1 ? fallbackOffset : -fallbackOffset;
        const newVal = val + offset;
        synthetic = correctAnswer.replace(numMatch[0], String(newVal));
      }
      if (!synthetic || synthetic === correctAnswer || uniqueDistractors.includes(synthetic)) {
        synthetic = `$${fallbackOffset}$`;
      }
      if (!uniqueDistractors.includes(synthetic) && synthetic !== correctAnswer) {
        uniqueDistractors.push(synthetic);
      }
      fallbackOffset++;
      if (fallbackOffset > 10) break;
    }
    const pickedDistractors = this.shuffleArray(uniqueDistractors).slice(0, 3);
    const allOptions = this.shuffleArray([correctAnswer, ...pickedDistractors]);
    const correctIndex = allOptions.indexOf(correctAnswer);

    return {
      id: `${chapterId}-gen-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
      chapterId,
      tier,
      type: "mcq",
      title,
      skill,
      statement,
      options: allOptions,
      choices: allOptions,
      correctIndex,
      answer: correctAnswer,
      hint1,
      hint2,
      solution
    };
  },

  makeExact(chapterId, tier, title, skill, statement, answer, hint1, hint2, solution) {
    return {
      id: `${chapterId}-exact-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
      chapterId,
      tier,
      type: "exact",
      title,
      skill,
      statement,
      answer,
      hint1,
      hint2,
      solution
    };
  },

  generate(chapterId, tier = 1) {
    const t = (tier >= 1 && tier <= 4) ? parseInt(tier, 10) : 1;
    if (chapterId.startsWith('2N') || chapterId.startsWith('2A') || chapterId.startsWith('2G') || chapterId.startsWith('2S')) {
      return this.generate2nde(chapterId, t);
    }
    if (chapterId.startsWith('1A') || chapterId.startsWith('1G') || chapterId.startsWith('1S')) {
      return this.generate1ere(chapterId, t);
    }
    if (chapterId.startsWith('TA') || chapterId.startsWith('TG') || chapterId.startsWith('TS') || chapterId.startsWith('TX')) {
      return this.generateTale(chapterId, t);
    }
    return null;
  },
'''

FOOTER = '''
  generateDefaultLycee(chapterId, tier) {
    const a = this.randInt(2, 6);
    const b = this.randInt(-5, 5);
    return this.makeMcq(chapterId, tier, "Question d'entraînement Lycée",
      "Résolution d'équations et calcul algébrique",
      `Soit la fonction affine $f(x) = ${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$. Quelle est la racine de $f$ (valeur où $f(x) = 0$) ?`,
      `$x = ${this.simplifyFrac(-b, a)}$`,
      [`$x = ${this.simplifyFrac(b, a)}$`, `$x = ${a}$`, `$x = ${b}$`],
      "Résous l'équation du premier degré : ax + b = 0.",
      `$${a}x = ${-b} \\\\implies x = ${this.simplifyFrac(-b, a)}$.`,
      `$${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = 0 \\\\iff ${a}x = ${-b} \\\\iff x = ${this.simplifyFrac(-b, a)}$.`
    );
  }
};

// Branchement automatique sur MathsAdvancedGenerators
if (typeof window !== 'undefined' && window.MathsAdvancedGenerators) {
  window.MathsAdvancedGenerators.generateLycee2nde = function(ch, t) {
    return window.MathsLyceeGenerators.generate(ch, t);
  };
  window.MathsAdvancedGenerators.generateLycee1ere = function(ch, t) {
    return window.MathsLyceeGenerators.generate(ch, t);
  };
  window.MathsAdvancedGenerators.generateLyceeTale = function(ch, t) {
    return window.MathsLyceeGenerators.generate(ch, t);
  };
}
'''

def main():
    print("Assemblage de lyceeGenerators.js en cours...")
    with open(OUT_FILE, "w", encoding="utf-8") as out:
        out.write(HEADER)
        out.write(get_2nde_code())
        out.write(get_1ere_code())
        out.write(get_tale_code())
        out.write(FOOTER)
    size_kb = os.path.getsize(OUT_FILE) / 1024
    print(f"lyceeGenerators.js généré avec succès ! ({size_kb:.1f} Ko)")

if __name__ == "__main__":
    main()
