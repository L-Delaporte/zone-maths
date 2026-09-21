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

    let html = text;

    // Remplacement des sauts de ligne Windows
    html = html.replace(/\r\n/g, '\n');

    // Headers markdown ###
    html = html.replace(/^### (.*$)/gim, '<h3 class="math-h3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="math-h2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="math-h1">$1</h1>');

    // Gras **texte**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italique *texte* (en évitant les conflits avec LaTeX)
    html = html.replace(/(?<!\$)\*([^\*\$\n]+)\*(?!\$)/g, '<em>$1</em>');

    // Séparateurs horizontaux ---
    html = html.replace(/^---$/gim, '<hr class="math-divider" />');

    // Citations / Encadrés >
    html = html.replace(/^>\s?(.*$)/gim, '<blockquote class="math-callout">$1</blockquote>');

    // Listes à puces • ou -
    html = html.replace(/^[•\-]\s+(.*$)/gim, '<li class="math-bullet">$1</li>');
    html = html.replace(/(<li class="math-bullet">.*<\/li>(\n|$))+/g, '<ul class="math-list">$&</ul>');

    // Paragraphes
    const blocks = html.split('\n\n');
    html = blocks.map(b => {
      b = b.trim();
      if (!b) return '';
      if (b.startsWith('<h') || b.startsWith('<ul') || b.startsWith('<hr') || b.startsWith('<blockquote') || b.startsWith('<div')) {
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
