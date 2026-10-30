/**
 * MathVisualizer - Laboratoire Interactif 2D/3D pour l'Enseignement Supérieur (Licence L1-L2-L3)
 * Intègre le Tore 3D paramétré, le Plan de phase d'EDO (Runge-Kutta 4) et la Synthèse de Fourier.
 */

(function () {
  'use strict';

  const MathVisualizer = {
    activeMode: 'torus', // 'torus' | 'phase_plane' | 'fourier'
    canvas: null,
    ctx: null,
    animId: null,

    // État Tore 3D
    torus: {
      R: 120, // grand rayon
      r: 45,  // petit rayon
      rotX: 0.6,
      rotY: 0.8,
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0,
      uSteps: 30,
      vSteps: 18
    },

    // État Plan de phase EDO
    phase: {
      model: 'pendulum', // 'pendulum' | 'lotka'
      damping: 0.05,
      trajectories: [],
      xMin: -6, xMax: 6,
      yMin: -4, yMax: 4
    },

    // État Synthèse de Fourier
    fourier: {
      waveType: 'square', // 'square' | 'sawtooth' | 'triangle'
      harmonics: 5,
      time: 0
    },

    _eventsAttached: false,

    init(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
      if (!this._eventsAttached) {
        this.attachEvents();
        this._eventsAttached = true;
      }
      this.startLoop();
    },

    resizeCanvas() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      this.canvas.width = rect.width * (window.devicePixelRatio || 1);
      this.canvas.height = rect.height * (window.devicePixelRatio || 1);
      this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    },

    setMode(mode) {
      this.switchMode(mode);
    },

    switchMode(mode) {
      if (!mode) mode = 'torus';
      this.activeMode = mode;
      if (mode === 'phase_plane' && this.phase.trajectories.length === 0) {
        this.addTrajectory(1.5, 0.5);
      }

      // Mettre à jour l'état actif des onglets
      if (typeof document !== 'undefined') {
        const tabBtns = document.querySelectorAll('.vis-tab-btn');
        tabBtns.forEach(btn => {
          const onclickAttr = btn.getAttribute('onclick') || '';
          if (onclickAttr.includes(`'${mode}'`) || onclickAttr.includes(`"${mode}"`)) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        this.renderControls();
      }

      if (!this.animId) {
        this.startLoop();
      }
    },

    renderControls() {
      const container = document.getElementById('vis-controls');
      if (!container) return;

      if (this.activeMode === 'torus') {
        container.innerHTML = `
          <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;">
            <label style="color:var(--text-muted);">Grand rayon R :</label>
            <input type="range" min="60" max="180" value="${this.torus.R}" oninput="window.MathVisualizer.torus.R = +this.value; document.getElementById('val-r-grand').textContent = (this.value/10).toFixed(1) + ' cm';" style="cursor:pointer;" />
            <span id="val-r-grand" style="font-weight:700; color:#38bdf8; min-width:48px;">${(this.torus.R/10).toFixed(1)} cm</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;">
            <label style="color:var(--text-muted);">Petit rayon r :</label>
            <input type="range" min="15" max="75" value="${this.torus.r}" oninput="window.MathVisualizer.torus.r = +this.value; document.getElementById('val-r-petit').textContent = (this.value/10).toFixed(1) + ' cm';" style="cursor:pointer;" />
            <span id="val-r-petit" style="font-weight:700; color:#38bdf8; min-width:48px;">${(this.torus.r/10).toFixed(1)} cm</span>
          </div>
        `;
      } else if (this.activeMode === 'phase_plane') {
        container.innerHTML = `
          <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;">
            <label style="color:var(--text-muted);">Modèle EDO :</label>
            <select onchange="window.MathVisualizer.phase.model = this.value; window.MathVisualizer.phase.trajectories = []; window.MathVisualizer.addTrajectory(1.5, 0.5);" style="padding:4px 8px; border-radius:6px; background:var(--bg-surface, #1e293b); color:var(--text-main, #fff); border:1px solid var(--border-color, #475569); cursor:pointer;">
              <option value="pendulum" ${this.phase.model === 'pendulum' ? 'selected' : ''}>Pendule simple amorti (θ'' + μθ' + sin θ = 0)</option>
              <option value="lotka" ${this.phase.model === 'lotka' ? 'selected' : ''}>Lotka-Volterra (Proies/Prédateurs)</option>
            </select>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;">
            <label style="color:var(--text-muted);">Amortissement μ :</label>
            <input type="range" min="0" max="0.25" step="0.01" value="${this.phase.damping}" oninput="window.MathVisualizer.phase.damping = +this.value; document.getElementById('val-mu').textContent = this.value;" style="cursor:pointer;" />
            <span id="val-mu" style="font-weight:700; color:#34d399; min-width:36px;">${this.phase.damping}</span>
          </div>
          <button type="button" class="btn-sm btn-secondary" onclick="window.MathVisualizer.phase.trajectories = [];" style="padding:5px 10px; border-radius:6px; cursor:pointer;">🧹 Effacer les orbites</button>
        `;
      } else if (this.activeMode === 'fourier') {
        container.innerHTML = `
          <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;">
            <label style="color:var(--text-muted);">Forme d'onde :</label>
            <select onchange="window.MathVisualizer.fourier.waveType = this.value;" style="padding:4px 8px; border-radius:6px; background:var(--bg-surface, #1e293b); color:var(--text-main, #fff); border:1px solid var(--border-color, #475569); cursor:pointer;">
              <option value="square" ${this.fourier.waveType === 'square' ? 'selected' : ''}>Signal Créneau</option>
              <option value="sawtooth" ${this.fourier.waveType === 'sawtooth' ? 'selected' : ''}>Dent de scie</option>
              <option value="triangle" ${this.fourier.waveType === 'triangle' ? 'selected' : ''}>Onde triangulaire</option>
            </select>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.04); padding:6px 12px; border-radius:8px;">
            <label style="color:var(--text-muted);">Harmoniques N :</label>
            <input type="range" min="1" max="25" step="1" value="${this.fourier.harmonics}" oninput="window.MathVisualizer.fourier.harmonics = +this.value; document.getElementById('val-harm').textContent = this.value;" style="cursor:pointer;" />
            <span id="val-harm" style="font-weight:700; color:#f43f5e; min-width:24px;">${this.fourier.harmonics}</span>
          </div>
        `;
      }
    },

    attachEvents() {
      if (!this.canvas) return;

      const getPos = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: clientX - rect.left,
          y: clientY - rect.top,
          width: rect.width,
          height: rect.height
        };
      };

      const onStart = (e) => {
        const p = getPos(e);
        if (this.activeMode === 'torus') {
          this.torus.isDragging = true;
          this.torus.lastMouseX = p.x;
          this.torus.lastMouseY = p.y;
        } else if (this.activeMode === 'phase_plane') {
          // Convertir pixel en coordonnées mathématiques (x, y)
          const mathX = this.phase.xMin + (p.x / p.width) * (this.phase.xMax - this.phase.xMin);
          const mathY = this.phase.yMax - (p.y / p.height) * (this.phase.yMax - this.phase.yMin);
          this.addTrajectory(mathX, mathY);
        }
      };

      const onMove = (e) => {
        if (this.activeMode === 'torus' && this.torus.isDragging) {
          const p = getPos(e);
          const dx = p.x - this.torus.lastMouseX;
          const dy = p.y - this.torus.lastMouseY;
          this.torus.rotY += dx * 0.01;
          this.torus.rotX += dy * 0.01;
          this.torus.lastMouseX = p.x;
          this.torus.lastMouseY = p.y;
        }
      };

      const onEnd = () => {
        this.torus.isDragging = false;
      };

      this.canvas.addEventListener('mousedown', onStart);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);

      this.canvas.addEventListener('touchstart', onStart, { passive: true });
      window.addEventListener('touchmove', onMove, { passive: true });
      window.addEventListener('touchend', onEnd);
      window.addEventListener('resize', () => this.resizeCanvas());
    },

    startLoop() {
      const render = () => {
        this.draw();
        this.animId = requestAnimationFrame(render);
      };
      render();
    },

    draw() {
      if (!this.ctx || !this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      this.ctx.clearRect(0, 0, w, h);

      if (this.activeMode === 'torus') {
        this.drawTorus(w, h);
      } else if (this.activeMode === 'phase_plane') {
        this.drawPhasePlane(w, h);
      } else if (this.activeMode === 'fourier') {
        this.drawFourier(w, h);
      }
    },

    // --- 1. Rendu Tore 3D ---
    drawTorus(w, h) {
      const ctx = this.ctx;
      const cx = w / 2;
      const cy = h / 2;
      const R = this.torus.R;
      const r = this.torus.r;
      const uSteps = this.torus.uSteps;
      const vSteps = this.torus.vSteps;

      const cosX = Math.cos(this.torus.rotX);
      const sinX = Math.sin(this.torus.rotX);
      const cosY = Math.cos(this.torus.rotY);
      const sinY = Math.sin(this.torus.rotY);

      // Calcul des sommets 3D tournés
      const grid = [];
      for (let i = 0; i < uSteps; i++) {
        const u = (i / uSteps) * 2 * Math.PI;
        const row = [];
        for (let j = 0; j < vSteps; j++) {
          const v = (j / vSteps) * 2 * Math.PI;
          // Coordonnées canoniques
          const x0 = (R + r * Math.cos(v)) * Math.cos(u);
          const y0 = (R + r * Math.cos(v)) * Math.sin(u);
          const z0 = r * Math.sin(v);

          // Rotation Y
          const x1 = x0 * cosY + z0 * sinY;
          const z1 = -x0 * sinY + z0 * cosY;
          // Rotation X
          const y2 = y0 * cosX - z1 * sinX;
          const z2 = y0 * sinX + z1 * cosX;

          // Projection perspective
          const fov = 450;
          const scale = fov / (fov + z2 + 100);
          row.push({
            px: cx + x1 * scale,
            py: cy + y2 * scale,
            z: z2
          });
        }
        grid.push(row);
      }

      // Tracé des méridiens et parallèles
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let i = 0; i < uSteps; i++) {
        for (let j = 0; j < vSteps; j++) {
          const p = grid[i][j];
          const pNextU = grid[(i + 1) % uSteps][j];
          const pNextV = grid[i][(j + 1) % vSteps];

          ctx.moveTo(p.px, p.py);
          ctx.lineTo(pNextU.px, pNextU.py);

          ctx.moveTo(p.px, p.py);
          ctx.lineTo(pNextV.px, pNextV.py);
        }
      }
      ctx.stroke();

      // Métriques géométriques au bas
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px system-ui, sans-serif';
      const surf = (4 * Math.PI * Math.PI * (R / 10) * (r / 10)).toFixed(1);
      const vol = (2 * Math.PI * Math.PI * (R / 10) * Math.pow(r / 10, 2)).toFixed(1);
      ctx.fillText(`Tore T²: R=${(R/10).toFixed(1)} cm, r=${(r/10).toFixed(1)} cm | Aire: ${surf} cm² | Volume: ${vol} cm³`, 15, h - 15);
    },

    // --- 2. Rendu Plan de Phase EDO ---
    drawPhasePlane(w, h) {
      const ctx = this.ctx;
      const xMin = this.phase.xMin, xMax = this.phase.xMax;
      const yMin = this.phase.yMin, yMax = this.phase.yMax;

      const toPx = (x, y) => ({
        px: ((x - xMin) / (xMax - xMin)) * w,
        py: ((yMax - y) / (yMax - yMin)) * h
      });

      // Axes cartésiens
      const p0 = toPx(0, 0);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, p0.py); ctx.lineTo(w, p0.py);
      ctx.moveTo(p0.px, 0); ctx.lineTo(p0.px, h);
      ctx.stroke();

      // Tracé du champ de vecteurs (grille de flèches)
      const nx = 20, ny = 14;
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      for (let i = 0; i <= nx; i++) {
        const x = xMin + (i / nx) * (xMax - xMin);
        for (let j = 0; j <= ny; j++) {
          const y = yMin + (j / ny) * (yMax - yMin);
          const deriv = this.getDeriv(x, y);
          const norm = Math.sqrt(deriv.dx * deriv.dx + deriv.dy * deriv.dy) || 1;
          const arrowLen = 10;
          const dx = (deriv.dx / norm) * arrowLen;
          const dy = -(deriv.dy / norm) * arrowLen;

          const pt = toPx(x, y);
          ctx.beginPath();
          ctx.moveTo(pt.px, pt.py);
          ctx.lineTo(pt.px + dx, pt.py + dy);
          ctx.stroke();
        }
      }

      // Tracé des trajectoires enregistrées (Runge-Kutta 4)
      ctx.lineWidth = 2.2;
      const colors = ['#38bdf8', '#34d399', '#f43f5e', '#fbbf24', '#a855f7'];
      this.phase.trajectories.forEach((traj, idx) => {
        ctx.strokeStyle = colors[idx % colors.length];
        ctx.beginPath();
        traj.forEach((pt, k) => {
          const p = toPx(pt.x, pt.y);
          if (k === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        });
        ctx.stroke();
      });

      // Label explicatif
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px system-ui, sans-serif';
      const modelName = this.phase.model === 'pendulum' ? 'Pendule Simple : θ\'\' + μθ\' + sin(θ) = 0' : 'Lotka-Volterra (Proies/Prédateurs)';
      ctx.fillText(`${modelName} | Cliquez sur le plan pour lancer une orbite`, 15, 25);
    },

    getDeriv(x, y) {
      if (this.phase.model === 'pendulum') {
        // x = theta, y = omega = theta'
        // dx/dt = y, dy/dt = -sin(x) - damping * y
        return {
          dx: y,
          dy: -Math.sin(x) - this.phase.damping * y
        };
      } else {
        // Lotka-Volterra : x' = x(1.5 - y), y' = -y(1 - 0.8x)
        return {
          dx: x * (1.5 - Math.max(0.01, y)),
          dy: -y * (1.0 - 0.8 * Math.max(0.01, x))
        };
      }
    },

    addTrajectory(x0, y0) {
      const pts = [{ x: x0, y: y0 }];
      let cx = x0, cy = y0;
      const dt = 0.04;
      const maxSteps = 400;

      for (let s = 0; s < maxSteps; s++) {
        // Runge-Kutta 4
        const k1 = this.getDeriv(cx, cy);
        const k2 = this.getDeriv(cx + 0.5 * dt * k1.dx, cy + 0.5 * dt * k1.dy);
        const k3 = this.getDeriv(cx + 0.5 * dt * k2.dx, cy + 0.5 * dt * k2.dy);
        const k4 = this.getDeriv(cx + dt * k3.dx, cy + dt * k3.dy);

        cx += (dt / 6) * (k1.dx + 2 * k2.dx + 2 * k3.dx + k4.dx);
        cy += (dt / 6) * (k1.dy + 2 * k2.dy + 2 * k3.dy + k4.dy);

        if (isNaN(cx) || isNaN(cy) || Math.abs(cx) > 20 || Math.abs(cy) > 20) break;
        pts.push({ x: cx, y: cy });
      }

      this.phase.trajectories.push(pts);
      if (this.phase.trajectories.length > 8) this.phase.trajectories.shift();
    },

    // --- 3. Rendu Synthèse de Fourier ---
    drawFourier(w, h) {
      const ctx = this.ctx;
      const N = this.fourier.harmonics;
      const cy = h / 2;

      // Axes
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(20, cy); ctx.lineTo(w - 20, cy);
      ctx.moveTo(w / 2, 20); ctx.lineTo(w / 2, h - 20);
      ctx.stroke();

      // Tracé de la somme de Fourier
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const scaleX = (w - 60) / (4 * Math.PI);
      const amp = 70;

      for (let px = 20; px <= w - 20; px++) {
        const x = (px - w / 2) / scaleX;
        let sum = 0;

        if (this.fourier.waveType === 'square') {
          // Créneau : (4/pi) * sum sin((2k+1)x)/(2k+1)
          for (let k = 0; k < N; k++) {
            const n = 2 * k + 1;
            sum += (4 / Math.PI) * (Math.sin(n * x) / n);
          }
        } else if (this.fourier.waveType === 'sawtooth') {
          // Dent de scie : (2/pi) * sum (-1)^(k+1) sin(kx)/k
          for (let k = 1; k <= N; k++) {
            sum += (2 / Math.PI) * (Math.pow(-1, k + 1) * Math.sin(k * x) / k);
          }
        } else {
          // Triangle : (8/pi^2) * sum (-1)^k sin((2k+1)x) / (2k+1)^2
          for (let k = 0; k < N; k++) {
            const n = 2 * k + 1;
            sum += (8 / (Math.PI * Math.PI)) * (Math.pow(-1, k) * Math.sin(n * x) / (n * n));
          }
        }

        const py = cy - sum * amp;
        if (px === 20) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Informations
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px system-ui, sans-serif';
      const waveNames = { square: 'Créneau', sawtooth: 'Dent de scie', triangle: 'Onde triangulaire' };
      ctx.fillText(`Signal : ${waveNames[this.fourier.waveType]} | Harmoniques N = ${N} | Phénomène de Gibbs visible aux discontinuités`, 20, 25);
    }
  };

  if (typeof window !== 'undefined') {
    window.MathVisualizer = MathVisualizer;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathVisualizer;
  }
})();
