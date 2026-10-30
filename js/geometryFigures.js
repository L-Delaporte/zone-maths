/**
 * GeometryFigures - Générateur dynamique de figures géométriques vectorielles SVG (Cycle 4 Collège)
 * Conçu pour L'Établi des Maths (Pythagore, Thalès, Trigonométrie, Cercles).
 * Rendus responsives avec thèmes clair et sombre, codages d'angles droits et labels anti-collision.
 */

(function () {
  'use strict';

  const GeometryFigures = {
    /**
     * Génère un triangle rectangle avec angle droit codé, sommets et longueurs
     * @param {Object} opts
     *   vertices: [string, string, string] ex: ['A', 'B', 'C']
     *   rightVertex: string ex: 'A'
     *   lengths: { 'AB': '4 cm', 'AC': '3 cm', 'BC': '?' }
     *   highlightUnknown: string ex: 'BC'
     */
    drawRightTriangle(opts = {}) {
      const vertices = opts.vertices || ['A', 'B', 'C'];
      const rightVertex = opts.rightVertex || vertices[0];
      const otherVertices = vertices.filter(v => v !== rightVertex);
      const vRight = rightVertex;
      const vBase = otherVertices[0] || 'B';
      const vTop = otherVertices[1] || 'C';

      const lengths = opts.lengths || {};
      const unknown = opts.highlightUnknown || '';

      // Coordonnées du triangle rectangle
      // vRight au coin angle droit (55, 135)
      // vBase à droite (225, 135)
      // vTop en haut (55, 35)
      const pRight = { x: 55, y: 135 };
      const pBase = { x: 225, y: 135 };
      const pTop = { x: 55, y: 35 };

      // Helper pour trouver le label d'un segment quel que soit l'ordre des lettres
      const getSideLabel = (u, v) => {
        const k1 = `${u}${v}`;
        const k2 = `${v}${u}`;
        if (lengths[k1] !== undefined) return lengths[k1];
        if (lengths[k2] !== undefined) return lengths[k2];
        if (unknown === k1 || unknown === k2) return '?';
        return '';
      };

      const lblBase = getSideLabel(vRight, vBase);
      const lblHeight = getSideLabel(vRight, vTop);
      const lblHypo = getSideLabel(vBase, vTop);

      const isHypoUnknown = (unknown === `${vBase}${vTop}` || unknown === `${vTop}${vBase}`);

      return `
<div class="geo-figure-wrapper" style="text-align:center; margin:0.85rem auto; max-width:300px;">
  <svg class="geo-svg-figure" viewBox="0 0 280 170" width="280" height="170" style="width:100%; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Fond & Périmètre du Triangle -->
    <polygon points="${pRight.x},${pRight.y} ${pBase.x},${pBase.y} ${pTop.x},${pTop.y}"
             fill="rgba(59, 130, 246, 0.08)"
             stroke="var(--text-main, #334155)"
             stroke-width="2.2"
             stroke-linejoin="round" />

    <!-- Codage officiel de l'angle droit en pRight -->
    <path d="M ${pRight.x} ${pRight.y - 15} L ${pRight.x + 15} ${pRight.y - 15} L ${pRight.x + 15} ${pRight.y}"
          fill="rgba(37, 99, 235, 0.2)"
          stroke="var(--primary, #2563eb)"
          stroke-width="1.8" />

    <!-- Sommets -->
    <text x="${pRight.x - 16}" y="${pRight.y + 16}" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--text-main, #0f172a)">${vRight}</text>
    <text x="${pBase.x + 10}" y="${pBase.y + 16}" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--text-main, #0f172a)">${vBase}</text>
    <text x="${pTop.x - 16}" y="${pTop.y - 8}" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--text-main, #0f172a)">${vTop}</text>

    <!-- Labels des côtés -->
    ${lblBase ? `<text x="${(pRight.x + pBase.x) / 2}" y="${pRight.y + 20}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${lblBase === '?' ? '#ef4444' : 'var(--text-muted, #475569)'}">${lblBase === '?' ? '? cm' : lblBase}</text>` : ''}
    ${lblHeight ? `<text x="${pRight.x - 12}" y="${(pRight.y + pTop.y) / 2}" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${lblHeight === '?' ? '#ef4444' : 'var(--text-muted, #475569)'}">${lblHeight === '?' ? '? cm' : lblHeight}</text>` : ''}
    ${lblHypo ? `<text x="${(pBase.x + pTop.x) / 2 + 12}" y="${(pBase.y + pTop.y) / 2 - 8}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${isHypoUnknown ? '#ef4444' : 'var(--primary, #2563eb)'}">${lblHypo === '?' ? '? cm' : lblHypo}</text>` : ''}
  </svg>
</div>`.trim();
    },

    /**
     * Génère une figure du Théorème de Thalès (Configuration imbriquée ou papillon)
     * @param {Object} opts
     *   config: 'triangle' | 'butterfly'
     *   letters: ['A', 'B', 'C', 'M', 'N'] avec (MN) // (BC)
     *   lengths: { 'AM': '3', 'AB': '6', 'AN': '4', 'AC': '?' }
     */
    drawThalesFigure(opts = {}) {
      const config = opts.config || 'triangle';
      const L = opts.letters || ['A', 'B', 'C', 'M', 'N'];
      const lengths = opts.lengths || {};
      const unknown = opts.highlightUnknown || '';

      const getLabel = (u, v) => {
        const k1 = `${u}${v}`;
        const k2 = `${v}${u}`;
        if (lengths[k1] !== undefined) return lengths[k1];
        if (lengths[k2] !== undefined) return lengths[k2];
        if (unknown === k1 || unknown === k2) return '?';
        return '';
      };

      if (config === 'butterfly') {
        // Configuration Papillon (Sablier)
        // Sommet commun A au centre (140, 95)
        // Triangle du haut : B(70, 35), C(210, 35)
        // Triangle du bas : N(50, 155), M(230, 155) -> (BC) // (MN)
        const pA = { x: 140, y: 95 };
        const pB = { x: 75, y: 35 };
        const pC = { x: 205, y: 35 };
        const pN = { x: 55, y: 155 };
        const pM = { x: 225, y: 155 };

        return `
<div class="geo-figure-wrapper" style="text-align:center; margin:0.85rem auto; max-width:320px;">
  <svg class="geo-svg-figure" viewBox="0 0 280 185" width="280" height="185" style="width:100%; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Droites sécantes en A (lignes fines de construction) -->
    <line x1="${pB.x - 15}" y1="${pB.y - 12}" x2="${pM.x + 15}" y2="${pM.y + 12}" stroke="var(--border-color, #94a3b8)" stroke-width="1.2" stroke-dasharray="3,3" />
    <line x1="${pC.x + 15}" y1="${pC.y - 12}" x2="${pN.x - 15}" y2="${pN.y + 12}" stroke="var(--border-color, #94a3b8)" stroke-width="1.2" stroke-dasharray="3,3" />

    <!-- Triangles du sablier -->
    <polygon points="${pA.x},${pA.y} ${pB.x},${pB.y} ${pC.x},${pC.y}" fill="rgba(59, 130, 246, 0.08)" stroke="var(--text-main, #334155)" stroke-width="2" stroke-linejoin="round" />
    <polygon points="${pA.x},${pA.y} ${pN.x},${pN.y} ${pM.x},${pM.y}" fill="rgba(16, 185, 129, 0.08)" stroke="var(--text-main, #334155)" stroke-width="2" stroke-linejoin="round" />

    <!-- Droites parallèles en couleur -->
    <line x1="${pB.x}" y1="${pB.y}" x2="${pC.x}" y2="${pC.y}" stroke="#2563eb" stroke-width="2.5" />
    <line x1="${pN.x}" y1="${pN.y}" x2="${pM.x}" y2="${pM.y}" stroke="#059669" stroke-width="2.5" />

    <!-- Sommets -->
    <text x="${pA.x + 10}" y="${pA.y + 4}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[0]}</text>
    <text x="${pB.x - 16}" y="${pB.y - 5}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[1]}</text>
    <text x="${pC.x + 8}" y="${pC.y - 5}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[2]}</text>
    <text x="${pM.x + 8}" y="${pM.y + 16}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[3]}</text>
    <text x="${pN.x - 16}" y="${pN.y + 16}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[4]}</text>

    <!-- Mention parallèles -->
    <text x="140" y="15" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="var(--text-muted, #64748b)">(${L[1]}${L[2]}) // (${L[3]}${L[4]})</text>
  </svg>
</div>`.trim();
      }

      // Configuration Triangles imbriqués
      const pA = { x: 140, y: 25 };
      const pB = { x: 45, y: 155 };
      const pC = { x: 235, y: 155 };
      // M sur [AB], N sur [AC] à 55% de la hauteur
      const tRatio = 0.55;
      const pM = { x: pA.x + tRatio * (pB.x - pA.x), y: pA.y + tRatio * (pB.y - pA.y) };
      const pN = { x: pA.x + tRatio * (pC.x - pA.x), y: pA.y + tRatio * (pC.y - pA.y) };

      return `
<div class="geo-figure-wrapper" style="text-align:center; margin:0.85rem auto; max-width:320px;">
  <svg class="geo-svg-figure" viewBox="0 0 280 185" width="280" height="185" style="width:100%; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Grand triangle ABC -->
    <polygon points="${pA.x},${pA.y} ${pB.x},${pB.y} ${pC.x},${pC.y}" fill="rgba(59, 130, 246, 0.05)" stroke="var(--text-main, #334155)" stroke-width="2" stroke-linejoin="round" />

    <!-- Petit triangle AMN -->
    <polygon points="${pA.x},${pA.y} ${pM.x},${pM.y} ${pN.x},${pN.y}" fill="rgba(37, 99, 235, 0.12)" stroke="var(--primary, #2563eb)" stroke-width="1.8" stroke-linejoin="round" />

    <!-- Segments parallèles en surbrillance -->
    <line x1="${pB.x}" y1="${pB.y}" x2="${pC.x}" y2="${pC.y}" stroke="#059669" stroke-width="2.5" />
    <line x1="${pM.x}" y1="${pM.y}" x2="${pN.x}" y2="${pN.y}" stroke="#2563eb" stroke-width="2.5" />

    <!-- Sommets -->
    <text x="${pA.x}" y="${pA.y - 8}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[0]}</text>
    <text x="${pB.x - 16}" y="${pB.y + 14}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[1]}</text>
    <text x="${pC.x + 8}" y="${pC.y + 14}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--text-main, #0f172a)">${L[2]}</text>
    <text x="${pM.x - 18}" y="${pM.y - 4}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--primary, #2563eb)">${L[3]}</text>
    <text x="${pN.x + 10}" y="${pN.y - 4}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--primary, #2563eb)">${L[4]}</text>

    <!-- Mention parallèles -->
    <text x="140" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="var(--text-muted, #64748b)">(${L[3]}${L[4]}) // (${L[1]}${L[2]})</text>
  </svg>
</div>`.trim();
    },

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
    ${lblAdj ? `<text x="${(pRight.x + pAngle.x) / 2}" y="${pRight.y + 20}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${lblAdj === '?' ? '#ef4444' : 'var(--text-muted, #475569)'}">${lblAdj === '?' ? '? cm' : lblAdj}</text>` : ''}
    ${lblOpp ? `<text x="${pRight.x - 12}" y="${(pRight.y + pTop.y) / 2}" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${lblOpp === '?' ? '#ef4444' : 'var(--text-muted, #475569)'}">${lblOpp === '?' ? '? cm' : lblOpp}</text>` : ''}
    ${lblHyp ? `<text x="${(pAngle.x + pTop.x) / 2 + 12}" y="${(pAngle.y + pTop.y) / 2 - 8}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${lblHyp === '?' ? '#ef4444' : '#2563eb'}">${lblHyp === '?' ? '? cm' : lblHyp}</text>` : ''}
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
