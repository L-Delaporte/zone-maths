/**
 * confetti.js - Animation de célébration Confetti en HTML5 Canvas
 * 100% autonome, zéro dépendance, zéro surcharge mémoire.
 */
(function() {
  'use strict';

  window.MathsConfetti = {
    launch: function(durationMs = 2800) {
      // Éviter de lancer plusieurs toiles superflues en même temps
      const existingCanvas = document.getElementById('maths-confetti-canvas');
      if (existingCanvas) {
        existingCanvas.remove();
      }

      const canvas = document.createElement('canvas');
      canvas.id = 'maths-confetti-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '99999';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const colors = [
        '#6366f1', '#4f46e5', '#10b981', '#059669',
        '#f59e0b', '#d97706', '#ec4899', '#06b6d4',
        '#8b5cf6', '#e11d48', '#fbbf24'
      ];

      const particles = [];
      const particleCount = Math.min(80, Math.floor(width / 15));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: width * 0.5 + (Math.random() - 0.5) * width * 0.4,
          y: height * 0.2 + (Math.random() - 0.5) * height * 0.1,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 12,
          vy: Math.random() * -10 - 4,
          gravity: 0.35 + Math.random() * 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1,
          decay: 0.008 + Math.random() * 0.006,
          shape: Math.random() > 0.3 ? 'rect' : 'circle'
        });
      }

      let animationFrame = null;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        ctx.clearRect(0, 0, width, height);

        let activeCount = 0;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.vy += p.gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;
          p.vx *= 0.98;

          if (elapsed > durationMs * 0.6) {
            p.opacity -= p.decay * 1.8;
          }

          if (p.opacity > 0 && p.y < height + 30) {
            activeCount++;
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;

            if (p.shape === 'rect') {
              ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            } else {
              ctx.beginPath();
              ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
              ctx.fill();
            }

            ctx.restore();
          }
        }

        if (activeCount > 0 && elapsed < durationMs) {
          animationFrame = requestAnimationFrame(update);
        } else {
          if (canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        }
      }

      animationFrame = requestAnimationFrame(update);

      const resizeHandler = () => {
        if (!canvas.parentNode) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', resizeHandler, { once: true });
    }
  };
})();
