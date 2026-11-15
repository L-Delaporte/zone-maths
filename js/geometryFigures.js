/**
 * GeometryFigures - Générateur dynamique de figures géométriques vectorielles SVG (Cycle 4 Collège)
 * Conçu pour L'Établi des Maths (Pythagore, Thalès, Trigonométrie, Cercles).
 * Rendus responsives avec thèmes clair et sombre, codages d'angles droits et labels anti-collision.
 */

(function () {
  'use strict';

  const GeometryFigures = {
    /**
     * Génère un triangle de trigonométrie avec angle marqué et identification des côtés
     * @param {Object} opts
     *   vertices: ['A', 'B', 'C'] avec A angle droit
     *   angleVertex: 'B'
     *   angleVal: '35°'
     *   lengths: { 'BC': '8 cm', 'AB': '?' }
     */
    drawTrigTriangle(opts = {}) {
      const vertices = opts.vertices || ['A', 'B', 'C'];
      const rightV = opts.rightVertex || vertices[0];
      const angleV = opts.angleVertex || vertices[1];
      const topV = vertices.find(v => v !== rightV && v !== angleV) || vertices[2];
      const angleVal = opts.angleVal || '';
      const lengths = opts.lengths || {};
      const unknown = opts.highlightUnknown || '';

      const pRight = { x: 55, y: 135 };
      const pAngle = { x: 225, y: 135 };
      const pTop = { x: 55, y: 40 };

      const getLabel = (u, v) => {
        const k1 = `${u}${v}`;
        const k2 = `${v}${u}`;
        if (lengths[k1] !== undefined) return lengths[k1];
        if (lengths[k2] !== undefined) return lengths[k2];
        if (unknown === k1 || unknown === k2) return '?';
        return '';
      };

      const lblAdj = getLabel(rightV, angleV);
      const lblOpp = getLabel(rightV, topV);
      const lblHyp = getLabel(angleV, topV);

      // Arc d'angle en pAngle (225, 135) orienté vers la gauche
      // Rayon d'arc = 32px
      const arcR = 32;

      return `
<div class="geo-figure-wrapper" style="text-align:center; margin:0.85rem auto; max-width:300px;">
  <svg class="geo-svg-figure" viewBox="0 0 280 170" width="280" height="170" style="width:100%; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle -->
    <polygon points="${pRight.x},${pRight.y} ${pAngle.x},${pAngle.y} ${pTop.x},${pTop.y}" fill="rgba(244, 63, 94, 0.05)" stroke="var(--text-main, #334155)" stroke-width="2.2" stroke-linejoin="round" />

    <!-- Angle droit en pRight -->
    <path d="M ${pRight.x} ${pRight.y - 15} L ${pRight.x + 15} ${pRight.y - 15} L ${pRight.x + 15} ${pRight.y}" fill="rgba(37, 99, 235, 0.15)" stroke="var(--primary, #2563eb)" stroke-width="1.8" />

    <!-- Arc d'angle en pAngle -->
    <path d="M ${pAngle.x - arcR} ${pAngle.y} A ${arcR} ${arcR} 0 0 0 ${pAngle.x - arcR * 0.87} ${pAngle.y - arcR * 0.48}" fill="rgba(225, 29, 72, 0.2)" stroke="#e11d48" stroke-width="2" />
    ${angleVal ? `<text x="${pAngle.x - arcR - 4}" y="${pAngle.y - 8}" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#e11d48">${angleVal}</text>` : ''}

    <!-- Sommets -->
    <text x="${pRight.x - 16}" y="${pRight.y + 16}" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--text-main, #0f172a)">${rightV}</text>
    <text x="${pAngle.x + 10}" y="${pAngle.y + 16}" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--text-main, #0f172a)">${angleV}</text>
    <text x="${pTop.x - 16}" y="${pTop.y - 8}" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--text-main, #0f172a)">${topV}</text>

    <!-- Côtés -->
    ${lblAdj ? `<text x="${(pRight.x + pAngle.x) / 2}" y="${pRight.y + 20}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${String(lblAdj).startsWith('?') ? '#ef4444' : 'var(--text-muted, #475569)'}">${lblAdj === '?' ? '? cm' : lblAdj}</text>` : ''}
    ${lblOpp ? `<text x="${pRight.x - 12}" y="${(pRight.y + pTop.y) / 2}" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${String(lblOpp).startsWith('?') ? '#ef4444' : 'var(--text-muted, #475569)'}">${lblOpp === '?' ? '? cm' : lblOpp}</text>` : ''}
    ${lblHyp ? `<text x="${(pAngle.x + pTop.x) / 2 + 12}" y="${(pAngle.y + pTop.y) / 2 - 8}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${String(lblHyp).startsWith('?') ? '#ef4444' : '#2563eb'}">${lblHyp === '?' ? '? cm' : lblHyp}</text>` : ''}
  </svg>
</div>`.trim();
    }
  };

  // Exposition globale dans le navigateur et pour Node
  if (typeof window !== 'undefined') {
    window.GeometryFigures = GeometryFigures;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GeometryFigures;
  }
})();
