/**
 * ScratchRenderer - Moteur de rendu graphique des blocs Scratch 3.0 officiels
 * Reproduit les blocs colorés conformes aux sujets officiels du Brevet des collèges.
 */

(function () {
  'use strict';

  const ScratchRenderer = {
    /**
     * Convertit une liste de lignes textuelles en blocs graphiques Scratch 3.0
     * @param {Array<string>} lines
     * @returns {string} HTML du script Scratch
     */
    renderScript(lines = []) {
      const htmlParts = [];
      let inRepeat = false;

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;

        // Détection de la fin d'une boucle si on rencontre une ligne désindentée
        if (inRepeat && !lines[i].startsWith('    ') && !lines[i].startsWith('\t')) {
          htmlParts.push(`  </div><div class="scratch-c-bottom"></div></div>`);
          inRepeat = false;
        }

        // Chapeau : Quand drapeau cliqué / pressé
        if (/quand (le )?drapeau (vert )?(cliqu|press)/i.test(line)) {
          htmlParts.push(`
            <div class="scratch-block scratch-hat">
              <span>quand</span>
              <span style="display:inline-block; vertical-align:middle; width:15px; height:15px; background:#00b84c; border-radius:3px; clip-path: polygon(0 0, 100% 30%, 0 65%);"></span>
              <span>cliqué</span>
            </div>
          `);
        }
        // Demander [texte] et attendre
        else if (/^demander\s+\[(.*?)\]\s+et attendre/i.test(line)) {
          const m = line.match(/^demander\s+\[(.*?)\]\s+et attendre/i);
          const promptText = m ? m[1] : "Choisir un nombre";
          htmlParts.push(`
            <div class="scratch-block scratch-sensing">
              <span>demander</span>
              <span class="scratch-slot-str">${promptText}</span>
              <span>et attendre</span>
            </div>
          `);
        }
        // Mettre [var] à ...
        else if (/^mettre\s+\[(.*?)\]\s+à\s+(.*)/i.test(line)) {
          const m = line.match(/^mettre\s+\[(.*?)\]\s+à\s+(.*)/i);
          const varName = m[1];
          const valExpr = m[2];
          htmlParts.push(`
            <div class="scratch-block scratch-variables">
              <span>mettre</span>
              <span class="scratch-slot-var">${varName}</span>
              <span>à</span>
              ${this.formatValueSlot(valExpr)}
            </div>
          `);
        }
        // Ajouter ... à [var]
        else if (/^ajouter\s+(.*?)\s+à\s+\[(.*?)\]/i.test(line)) {
          const m = line.match(/^ajouter\s+(.*?)\s+à\s+\[(.*?)\]/i);
          const valExpr = m[1];
          const varName = m[2];
          htmlParts.push(`
            <div class="scratch-block scratch-variables">
              <span>ajouter</span>
              ${this.formatValueSlot(valExpr)}
              <span>à</span>
              <span class="scratch-slot-var">${varName}</span>
            </div>
          `);
        }
        // Répéter N fois : (C-block)
        else if (/^r[ée]p[ée]ter\s+(.*?)\s+fois/i.test(line)) {
          const m = line.match(/^r[ée]p[ée]ter\s+(.*?)\s+fois/i);
          const count = m[1];
          htmlParts.push(`
            <div class="scratch-c-wrap">
              <div class="scratch-block scratch-control">
                <span>répéter</span>
                <span class="scratch-slot-num">${count}</span>
                <span>fois</span>
              </div>
              <div class="scratch-c-body">
          `);
          inRepeat = true;
        }
        // Avancer de N pas
        else if (/^avancer de\s+(.*?)( pas)?$/i.test(line)) {
          const m = line.match(/^avancer de\s+(.*?)( pas)?$/i);
          const dist = m[1];
          htmlParts.push(`
            <div class="scratch-block scratch-motion">
              <span>avancer de</span>
              <span class="scratch-slot-num">${dist}</span>
              <span>pas</span>
            </div>
          `);
        }
        // Tourner de N degrés
        else if (/^tourner (droite|gauche )?de\s+(.*?)\s*(degr[ée]s)?$/i.test(line)) {
          const m = line.match(/^tourner (droite|gauche )?de\s+(.*?)\s*(degr[ée]s)?$/i);
          const deg = m[2] || m[1];
          htmlParts.push(`
            <div class="scratch-block scratch-motion">
              <span>tourner ↻ de</span>
              <span class="scratch-slot-num">${deg}</span>
              <span>degrés</span>
            </div>
          `);
        }
        // Dire ...
        else if (/^dire\s+(.*)/i.test(line)) {
          const m = line.match(/^dire\s+(.*)/i);
          const valExpr = m[1];
          htmlParts.push(`
            <div class="scratch-block scratch-looks">
              <span>dire</span>
              ${this.formatValueSlot(valExpr)}
            </div>
          `);
        }
        // Ligne générique
        else {
          htmlParts.push(`
            <div class="scratch-block scratch-control">
              <span>${line}</span>
            </div>
          `);
        }
      }

      if (inRepeat) {
        htmlParts.push(`  </div><div class="scratch-c-bottom"></div></div>`);
      }

      return `
<div class="scratch-stage-wrapper" style="text-align:center; margin:1rem auto;">
  <div class="scratch-script">
    ${htmlParts.join('\n')}
  </div>
</div>`.trim();
    },

    formatValueSlot(expr) {
      expr = expr.trim();
      // Enlever parenthèses extérieures si présentes
      if (expr.startsWith('(') && expr.endsWith(')')) {
        expr = expr.slice(1, -1).trim();
      }

      // Réponse
      if (/^r[ée]ponse$/i.test(expr)) {
        return `<span class="scratch-slot-str" style="background:#4cbfe6; color:#fff; border:1px solid #3a8cae;">réponse</span>`;
      }
      // Opération binaire ex: x * 3 ou N + 5
      const opMatch = expr.match(/^([a-zA-Z0-9_\(\)]+)\s*([\+\-\*\/])\s*([a-zA-Z0-9_\(\)]+)$/);
      if (opMatch) {
        const left = opMatch[1];
        const op = opMatch[2] === '*' ? '×' : (opMatch[2] === '/' ? '÷' : opMatch[2]);
        const right = opMatch[3];
        return `
          <span class="scratch-slot-op">
            ${this.formatValueSlot(left)}
            <span>${op}</span>
            ${this.formatValueSlot(right)}
          </span>
        `;
      }
      // Variable seule (lettre ou mot)
      if (/^[a-zA-Z]$/.test(expr)) {
        return `<span class="scratch-slot-var">${expr}</span>`;
      }
      // Nombre pur
      if (/^-?\d+(\.\d+)?$/.test(expr)) {
        return `<span class="scratch-slot-num">${expr}</span>`;
      }
      // Texte entre crochets
      if (expr.startsWith('[') && expr.endsWith(']')) {
        return `<span class="scratch-slot-str">${expr.slice(1, -1)}</span>`;
      }
      // Par défaut
      return `<span class="scratch-slot-str">${expr}</span>`;
    }
  };

  if (typeof window !== 'undefined') {
    window.ScratchRenderer = ScratchRenderer;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScratchRenderer;
  }
})();
