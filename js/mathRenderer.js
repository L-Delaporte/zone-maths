/**
 * Gestionnaire de rendu mathématique (KaTeX + formatage Markdown simplifié)
 */

window.MathsRenderer = {
  /**
   * Vérifie si KaTeX est prêt
   */
  isReady() {
    return typeof window.katex !== 'undefined';
  },

  /**
   * Rend les formules KaTeX dans un élément DOM
   */
  renderElement(domElement) {
    if (!domElement) return;
    if (typeof window.renderMathInElement === 'function') {
      try {
        window.renderMathInElement(domElement, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('Erreur lors du rendu KaTeX:', e);
      }
    }
  },

  /**
   * Alias de compatibilité pour renderElement
   */
  renderAll(domElement) {
    return this.renderElement(domElement);
  },

  /**
   * Convertit un texte markdown contenant du LaTeX en HTML enrichi
   */
  markdownToHtml(text) {
    if (!text) return '';

    let html = text.replace(/\r\n/g, '\n');

    // 1. Blocs de code préformatés ```lang ... ```
    html = html.replace(/```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g, (match, lang, code) => {
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const langAttr = lang ? ` data-lang="${lang}"` : '';
      return `<div class="math-code-container"${langAttr}><pre class="math-code-block"><code>${escaped}</code></pre></div>`;
    });

    // 2. Tableaux Markdown (| col 1 | col 2 | ... \n |:---|:---:|... \n | val 1 | val 2 | ...)
    const tableRegex = /((?:^[ \t]*\|[^\n]+\|[ \t]*(?:\n|$))+)/gm;
    html = html.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length < 2) return match;

      const sepLine = lines[1];
      if (!sepLine.includes('---') && !sepLine.includes('-')) return match;

      const parseCells = (rowStr) => {
        let trimmed = rowStr;
        if (trimmed.startsWith('|')) trimmed = trimmed.slice(1);
        if (trimmed.endsWith('|')) trimmed = trimmed.slice(0, -1);
        return trimmed.split('|').map(c => c.trim());
      };

      const headerCells = parseCells(lines[0]);
      const alignSpecs = parseCells(sepLine).map(spec => {
        const trimmed = spec.replace(/\s+/g, '');
        const leftColon = trimmed.startsWith(':');
        const rightColon = trimmed.endsWith(':');
        if (leftColon && rightColon) return 'center';
        if (rightColon) return 'right';
        return 'left';
      });

      let tableHtml = '<div class="math-table-container"><table class="math-table"><thead><tr>';
      headerCells.forEach((th, idx) => {
        const align = alignSpecs[idx] || 'left';
        tableHtml += `<th style="text-align:${align}">${th}</th>`;
      });
      tableHtml += '</tr></thead><tbody>';

      for (let r = 2; r < lines.length; r++) {
        const rowCells = parseCells(lines[r]);
        if (rowCells.length === 1 && !rowCells[0]) continue;
        tableHtml += '<tr>';
        headerCells.forEach((_, idx) => {
          const cellContent = rowCells[idx] || '';
          const align = alignSpecs[idx] || 'left';
          tableHtml += `<td style="text-align:${align}">${cellContent}</td>`;
        });
        tableHtml += '</tr>';
      }
      tableHtml += '</tbody></table></div>';
      return tableHtml;
    });

    // 3. Headers markdown (de ##### à # pour éviter les conflits de préfixe)
    html = html.replace(/^##### (.*$)/gim, '<h5 class="math-h5">$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4 class="math-h4">$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="math-h3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="math-h2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="math-h1">$1</h1>');

    // 4. Gras **texte**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italique *texte* (en évitant les conflits avec les formules LaTeX)
    html = html.replace(/(?<!\$)\*([^\*\$\n]+)\*(?!\$)/g, '<em>$1</em>');

    // Code en ligne `code`
    html = html.replace(/(?<!`)`([^`\n]+)`(?!`)/g, '<code class="math-inline-code">$1</code>');

    // 5. Séparateurs horizontaux ---
    html = html.replace(/^---$/gim, '<hr class="math-divider" />');

    // 6. Citations / Encadrés >
    html = html.replace(/^>\s?(.*$)/gim, '<blockquote class="math-callout">$1</blockquote>');
    html = html.replace(/(<blockquote class="math-callout">.*?<\/blockquote>\s*)+/gs, (m) => {
      const textOnly = m.replace(/<\/?blockquote[^>]*>/g, ' ').trim();
      return `<blockquote class="math-callout">${textOnly}</blockquote>`;
    });

    // 7. Listes à puces • ou -
    html = html.replace(/^[•\-]\s+(.*$)/gim, '<li class="math-bullet">$1</li>');
    html = html.replace(/(<li class="math-bullet">.*<\/li>\s*)+/g, '<ul class="math-list">$&</ul>');

    // 8. Paragraphes
    const blocks = html.split('\n\n');
    html = blocks.map(b => {
      b = b.trim();
      if (!b) return '';
      if (
        b.startsWith('<h1') || b.startsWith('<h2') || b.startsWith('<h3') ||
        b.startsWith('<h4') || b.startsWith('<h5') ||
        b.startsWith('<ul') || b.startsWith('<ol') ||
        b.startsWith('<hr') || b.startsWith('<blockquote') ||
        b.startsWith('<div') || b.startsWith('<table') || b.startsWith('<pre')
      ) {
        return b;
      }
      return `<p class="math-p">${b.replace(/\n/g, '<br/>')}</p>`;
    }).join('\n');

    return html;
  },

  /**
   * Génère la prévisualisation LaTeX d'une réponse utilisateur (ex: "7/12" -> "\frac{7}{12}")
   */
  formatUserMathPreview(rawInput) {
    if (!rawInput || !rawInput.trim()) return '';
    const clean = rawInput.trim().replace(',', '.');

    // Cas fraction simple : a/b
    const fracMatch = clean.match(/^([+-]?\d+)\/(\d+)$/);
    if (fracMatch) {
      const num = fracMatch[1];
      const den = fracMatch[2];
      return `\\frac{${num}}{${den}}`;
    }

    // Cas puissance : x^2 ou 10^3
    const powMatch = clean.match(/^([a-zA-Z0-9]+)\^([+-]?\d+)$/);
    if (powMatch) {
      return `${powMatch[1]}^{${powMatch[2]}}`;
    }

    // Cas standard
    return clean;
  },

  /**
   * Affiche la prévisualisation LaTeX dans un conteneur
   */
  renderPreview(inputStr, targetContainer) {
    if (!targetContainer) return;
    const latex = this.formatUserMathPreview(inputStr);
    if (!latex) {
      targetContainer.innerHTML = '';
      targetContainer.style.display = 'none';
      return;
    }
    targetContainer.style.display = 'inline-flex';
    if (typeof window.katex !== 'undefined') {
      try {
        window.katex.render(latex, targetContainer, {
          throwOnError: false,
          displayMode: false
        });
        return;
      } catch (e) {
        // fallback
      }
    }
    targetContainer.textContent = inputStr;
  }
};
