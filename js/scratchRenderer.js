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
      // Variables déclarées (mettre [v] / ajouter … à [v]) : reconnues dans les expressions
      this._vars = new Set();
      lines.forEach(l => {
        const m = String(l).match(/^\s*(?:mettre\s+\[(.*?)\]|ajouter\s+.*?\s+à\s+\[(.*?)\])/i);
        if (m) this._vars.add((m[1] || m[2]).trim());
      });
      // Imbrication par blocs de 4 espaces (ou tabulations)
      const items = lines.filter(l => String(l).trim()).map(l => {
        const sp = String(l).replace(/\t/g, '    ').match(/^ */)[0].length;
        return { ind: Math.floor(sp / 4), text: String(l).trim() };
      });
      const reRepeat = /^r[ée]p[ée]ter\s+(.*?)\s+fois/i;
      const reUntil = /^r[ée]p[ée]ter\s+jusqu['’]\s*(?:à|a)\s+ce\s+que\s+(.*)$/i;
      const reIf = /^si\s+(.*?)\s+alors$/i;
      const walk = (i, ind) => {
        const out = [];
        while (i < items.length && items[i].ind >= ind) {
          const t = items[i].text;
          let header = null;
          if (items[i].ind === ind) {
            if (reUntil.test(t)) {
              header = `
              <div class="scratch-block scratch-control">
                <span>répéter jusqu'à ce que</span>
                ${this.formatValueSlot(t.match(reUntil)[1])}
              </div>`;
            } else if (reRepeat.test(t)) {
              header = `
              <div class="scratch-block scratch-control">
                <span>répéter</span>
                <span class="scratch-slot-num">${t.match(reRepeat)[1]}</span>
                <span>fois</span>
              </div>`;
            } else if (reIf.test(t)) {
              header = `
              <div class="scratch-block scratch-control">
                <span>si</span>
                ${this.formatValueSlot(t.match(reIf)[1])}
                <span>alors</span>
              </div>`;
            }
          }
          if (!header) { out.push(this.renderBlock(t)); i++; continue; }
          const [body, j] = walk(i + 1, ind + 1);
          let html = `
            <div class="scratch-c-wrap">${header}
              <div class="scratch-c-body">${body || '&nbsp;'}</div>`;
          i = j;
          if (reIf.test(t) && i < items.length && items[i].ind === ind && /^sinon$/i.test(items[i].text)) {
            const [body2, k] = walk(i + 1, ind + 1);
            html += `
              <div class="scratch-block scratch-control"><span>sinon</span></div>
              <div class="scratch-c-body">${body2 || '&nbsp;'}</div>`;
            i = k;
          }
          out.push(html + `<div class="scratch-c-bottom"></div></div>`);
        }
        return [out.join('\n'), i];
      };
      const html = walk(0, 0)[0];
      this._vars = null;
      return `
<div class="scratch-stage-wrapper" style="text-align:center; margin:1rem auto;">
  <div class="scratch-script">
    ${html}
  </div>
</div>`.trim();
    },

    /** Un bloc simple (une ligne de script). */
    renderBlock(line) {
      // Chapeau : Quand drapeau cliqué / pressé
      if (/quand (le )?drapeau (vert )?(cliqu|press)/i.test(line)) {
        return `
            <div class="scratch-block scratch-hat">
              <span>quand</span>
              <span style="display:inline-block; vertical-align:middle; width:15px; height:15px; background:#00b84c; border-radius:3px; clip-path: polygon(0 0, 100% 30%, 0 65%);"></span>
              <span>cliqué</span>
            </div>
          `;
      }
      // Demander [texte] et attendre
      if (/^demander\s+\[(.*?)\]\s+et attendre/i.test(line)) {
        const m = line.match(/^demander\s+\[(.*?)\]\s+et attendre/i);
        const promptText = m ? m[1] : "Choisir un nombre";
        return `
            <div class="scratch-block scratch-sensing">
              <span>demander</span>
              <span class="scratch-slot-str">${promptText}</span>
              <span>et attendre</span>
            </div>
          `;
      }
      // Mettre [var] à ...
      if (/^mettre\s+\[(.*?)\]\s+à\s+(.*)/i.test(line)) {
        const m = line.match(/^mettre\s+\[(.*?)\]\s+à\s+(.*)/i);
        return `
            <div class="scratch-block scratch-variables">
              <span>mettre</span>
              <span class="scratch-slot-var">${m[1]}</span>
              <span>à</span>
              ${this.formatValueSlot(m[2])}
            </div>
          `;
      }
      // Ajouter ... à [var]
      if (/^ajouter\s+(.*?)\s+à\s+\[(.*?)\]/i.test(line)) {
        const m = line.match(/^ajouter\s+(.*?)\s+à\s+\[(.*?)\]/i);
        return `
            <div class="scratch-block scratch-variables">
              <span>ajouter</span>
              ${this.formatValueSlot(m[1])}
              <span>à</span>
              <span class="scratch-slot-var">${m[2]}</span>
            </div>
          `;
      }
      // Avancer de N pas
      if (/^avancer de\s+(.*?)( pas)?$/i.test(line)) {
        const m = line.match(/^avancer de\s+(.*?)( pas)?$/i);
        return `
            <div class="scratch-block scratch-motion">
              <span>avancer de</span>
              <span class="scratch-slot-num">${m[1]}</span>
              <span>pas</span>
            </div>
          `;
      }
      // Tourner de N degrés
      if (/^tourner (droite|gauche )?de\s+(.*?)\s*(degr[ée]s)?$/i.test(line)) {
        const m = line.match(/^tourner (droite|gauche )?de\s+(.*?)\s*(degr[ée]s)?$/i);
        const deg = m[2] || m[1];
        return `
            <div class="scratch-block scratch-motion">
              <span>tourner ↻ de</span>
              <span class="scratch-slot-num">${deg}</span>
              <span>degrés</span>
            </div>
          `;
      }
      // Dire ...
      if (/^dire\s+(.*)/i.test(line)) {
        const m = line.match(/^dire\s+(.*)/i);
        return `
            <div class="scratch-block scratch-looks">
              <span>dire</span>
              ${this.formatValueSlot(m[1])}
            </div>
          `;
      }
      // Ligne générique
      return `
            <div class="scratch-block scratch-control">
              <span>${line}</span>
            </div>
          `;
    },

    /** Vrai si les parenthèses extérieures de expr se répondent (« (a + b) », pas « (a) + (b) »). */
    _wrapped(expr) {
      if (!(expr.startsWith('(') && expr.endsWith(')'))) return false;
      let d = 0;
      for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') d++;
        else if (expr[i] === ')') { d--; if (d === 0 && i < expr.length - 1) return false; }
      }
      return true;
    },

    /** Position du dernier opérateur de premier niveau parmi ops (associativité à gauche), ou null. */
    _splitTop(expr, ops) {
      let d = 0, b = 0, found = null;
      for (let i = 0; i < expr.length; i++) {
        const c = expr[i];
        if (c === '(') d++;
        else if (c === ')') d--;
        else if (c === '[') b++;
        else if (c === ']') b--;
        if (d !== 0 || b !== 0) continue;
        for (const op of ops) {
          if (!expr.startsWith(op, i)) continue;
          const left = expr.slice(0, i).trim();
          // « - » unaire (début d'expression ou après un autre opérateur) : pas un opérateur binaire
          if (op === '-' && (!left || /[+\-*/×÷<>=]$|modulo$/.test(left))) continue;
          if (!left || !expr.slice(i + op.length).trim()) continue;
          found = { i, op };
          break;
        }
      }
      return found;
    },

    formatValueSlot(expr) {
      expr = String(expr).trim();
      // Enlever les parenthèses extérieures si elles entourent toute l'expression
      while (this._wrapped(expr)) expr = expr.slice(1, -1).trim();

      // Réponse
      if (/^r[ée]ponse$/i.test(expr)) {
        return `<span class="scratch-slot-str" style="background:#4cbfe6; color:#fff; border:1px solid #3a8cae;">réponse</span>`;
      }
      // Comparaison (bloc booléen) puis opérations (+ −, puis × ÷ modulo)
      const levels = [[' < ', ' > ', ' = ', '<', '>', '='], ['+', '-'], ['*', '/', '×', '÷', ' modulo ']];
      for (let li = 0; li < levels.length; li++) {
        const sp = this._splitTop(expr, levels[li]);
        if (!sp) continue;
        const left = expr.slice(0, sp.i), right = expr.slice(sp.i + sp.op.length);
        const raw = sp.op.trim();
        const op = raw === '*' ? '×' : (raw === '/' ? '÷' : raw);
        const cls = li === 0 ? 'scratch-slot-bool' : 'scratch-slot-op';
        return `
          <span class="${cls}">
            ${this.formatValueSlot(left)}
            <span>${op}</span>
            ${this.formatValueSlot(right)}
          </span>
        `;
      }
      // Variable seule (une lettre, ou nom déclaré dans le script)
      if (/^[a-zA-Z]$/.test(expr) || (this._vars && this._vars.has(expr))) {
        return `<span class="scratch-slot-var">${expr}</span>`;
      }
      // Nombre pur
      if (/^-?\d+([.,]\d+)?$/.test(expr)) {
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
