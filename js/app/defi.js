/**
 * L'Établi des Maths — Encart « Défi de la semaine » de l'accueil.
 * Un problème par cycle (collège, lycée, supérieur), identique pour tous pendant une semaine ISO
 * (banque et tirage : js/data/defis.js). Sans compte : l'état (tentatives, corrigé consulté,
 * défi relevé) est mémorisé dans la progression locale (MathsStorage, clé « defis »).
 * Lien partageable : https://etabli-des-maths.fr/?defi=2026-S44&cycle=lycee&src=defi
 */
Object.assign(window.MathsApp, {
  DEFI_SHARE_BASE: 'https://etabli-des-maths.fr/',
  DEFI_XP: 10,

  /** Semaine et cycle affichés. Un lien ?defi=AAAA-Sww n'ouvre jamais une semaine future. */
  getDefiContext() {
    const U = window.MATHS_DEFIS_UTILS;
    if (!this._defiCtx) {
      const now = U.isoWeek(new Date());
      const ctx = { year: now.year, week: now.week, fromLink: false, cycle: null };
      try {
        const params = new URLSearchParams(location.search);
        const linked = U.parseWeekKey(params.get('defi'));
        if (linked && (linked.year * 100 + linked.week) <= (now.year * 100 + now.week)) {
          Object.assign(ctx, linked, { fromLink: true });
        }
        const cycle = (params.get('cycle') || '').toLowerCase();
        if (U.CYCLES.includes(cycle)) ctx.cycle = cycle;
        if (params.has('defi')) this._defiScrollPending = true;
      } catch (e) {}
      if (!ctx.cycle) {
        const appCycle = window.MathsStorage.getCurrentCycle();
        ctx.cycle = appCycle === 'licence' ? 'superieur' : (U.CYCLES.includes(appCycle) ? appCycle : 'college');
      }
      ctx.current = ctx.year === now.year && ctx.week === now.week;
      this._defiCtx = ctx;
    }
    return this._defiCtx;
  },

  /** Mise en forme minimale d'un texte de défi : paragraphes, listes « - », gras « ** ». */
  formatDefiText(text) {
    const esc = s => this.escapeHtml(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    const out = [];
    let list = [];
    const flush = () => {
      if (list.length) out.push(`<ul>${list.map(li => `<li>${esc(li)}</li>`).join('')}</ul>`);
      list = [];
    };
    String(text || '').split('\n').forEach(line => {
      if (/^- /.test(line)) list.push(line.slice(2));
      else { flush(); if (line.trim()) out.push(`<p>${esc(line)}</p>`); }
    });
    flush();
    return out.join('');
  },

  renderDefiCard() {
    const root = document.getElementById('home-defi');
    const U = window.MATHS_DEFIS_UTILS;
    if (!root) return;
    if (!U || !window.MATHS_DEFIS) { root.hidden = true; return; }
    const ctx = this.getDefiContext();
    const defi = U.pick(ctx.cycle, ctx.year, ctx.week);
    if (!defi) { root.hidden = true; return; }
    const key = `${U.weekKey(ctx.year, ctx.week)}-${ctx.cycle}`;
    const st = window.MathsStorage.getDefiProgress(key);
    const solvedCount = window.MathsStorage.countSolvedDefis();
    const esc = s => this.escapeHtml(s);
    const done = st.solved || st.revealed;

    const cycleBtns = U.CYCLES.map(c => `<button type="button" class="home-defi-cycle-btn" data-defi-cycle="${c}" aria-pressed="${c === ctx.cycle}">${U.CYCLE_LABELS[c]}</button>`).join('');
    const weekLabel = `Semaine ${ctx.week}`;
    const notice = ctx.current ? '' : `<p class="home-defi-notice">Défi de la semaine ${ctx.week} de ${ctx.year}, reçu par un lien. <button type="button" class="home-defi-link-btn" data-defi-action="current">Voir le défi de cette semaine</button></p>`;
    const formatHelp = defi.format === 'fraction' ? ' <span class="home-defi-help">(fraction irréductible, par exemple 3/4)</span>' : '';

    let feedback = '';
    if (st.solved) feedback = `<strong>✅ Défi relevé !</strong> ${st.tries > 1 ? `Réussi en ${st.tries} essais.` : 'Du premier coup, bravo !'}`;
    else if (st.revealed) feedback = '📖 Corrigé consulté : retente ta chance avec le défi de la semaine prochaine !';
    else if (st.tries) feedback = `❌ Ce n'est pas la bonne réponse (${st.tries} essai${st.tries > 1 ? 's' : ''}). Réessaie, ou consulte le corrigé.`;

    root.hidden = false;
    root.innerHTML = `
      <div class="home-defi-head">
        <div class="home-defi-heading">
          <p class="home-defi-tag"><span aria-hidden="true">🏆</span> Défi de la semaine · ${esc(weekLabel)}</p>
          <h3 class="home-defi-title" id="home-defi-title">${esc(defi.title)}</h3>
          <p class="home-defi-meta">${esc(defi.level)} · ${esc(defi.theme)}</p>
        </div>
        <div class="home-defi-cycles" role="group" aria-label="Choisir le cycle du défi">${cycleBtns}</div>
      </div>
      ${notice}
      <div class="home-defi-statement">${this.formatDefiText(defi.statement)}</div>
      ${done ? '' : `
      <form class="home-defi-form" novalidate>
        <label for="home-defi-input" class="home-defi-label">Ta réponse${formatHelp}</label>
        <div class="home-defi-row">
          <input id="home-defi-input" class="math-text-input home-defi-input" type="text" autocomplete="off" spellcheck="false" aria-describedby="home-defi-feedback" />
          ${defi.unit ? `<span class="home-defi-unit">${esc(defi.unit)}</span>` : ''}
          <button type="submit" class="btn-primary home-defi-submit">Valider</button>
        </div>
      </form>
      <details class="home-defi-hint">
        <summary>💡 Besoin d'un indice ?</summary>
        <div>${this.formatDefiText(defi.hint)}</div>
      </details>`}
      <p id="home-defi-feedback" class="home-defi-feedback${st.solved ? ' is-ok' : (st.tries && !done ? ' is-ko' : '')}" role="status" aria-live="polite">${feedback}</p>
      ${done ? `
      <div class="home-defi-solution" id="home-defi-solution" tabindex="-1">
        <p class="home-defi-solution-title">Corrigé — réponse : <strong>${esc(defi.answer)}${defi.unit ? ' ' + esc(defi.unit) : ''}</strong></p>
        ${this.formatDefiText(defi.solution)}
      </div>` : ''}
      <div class="home-defi-actions">
        ${!done && st.tries ? '<button type="button" class="btn-secondary" data-defi-action="reveal">📖 Voir le corrigé</button>' : ''}
        <button type="button" class="btn-secondary" data-defi-action="share">🔗 Partager ce défi</button>
        <span class="home-defi-count">🏅 ${solvedCount} défi${solvedCount > 1 ? 's' : ''} relevé${solvedCount > 1 ? 's' : ''}</span>
      </div>
      <p class="home-defi-footnote">Un nouveau défi chaque lundi, le même pour toute la classe. Sans compte : ta progression reste sur cet appareil.</p>`;

    root.querySelectorAll('[data-defi-cycle]').forEach(btn => btn.addEventListener('click', () => {
      this.getDefiContext().cycle = btn.getAttribute('data-defi-cycle');
      this.renderDefiCard();
      const again = document.querySelector(`#home-defi [data-defi-cycle="${btn.getAttribute('data-defi-cycle')}"]`);
      if (again) again.focus();
    }));
    const form = root.querySelector('.home-defi-form');
    if (form) form.addEventListener('submit', e => { e.preventDefault(); this.submitDefi(defi, key); });
    root.querySelectorAll('[data-defi-action]').forEach(btn => btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-defi-action');
      if (action === 'reveal') this.revealDefi(key);
      else if (action === 'share') this.shareDefi(defi, ctx);
      else if (action === 'current') {
        const now = U.isoWeek(new Date());
        Object.assign(ctx, { year: now.year, week: now.week, current: true, fromLink: false });
        this.renderDefiCard();
        const title = document.getElementById('home-defi-title');
        if (title) { title.setAttribute('tabindex', '-1'); title.focus(); }
      }
    }));
    if (window.MathsRenderer) window.MathsRenderer.renderElement(root);

    if (this._defiScrollPending) {
      this._defiScrollPending = false;
      setTimeout(() => {
        root.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const title = document.getElementById('home-defi-title');
        if (title) { title.setAttribute('tabindex', '-1'); title.focus({ preventScroll: true }); }
      }, 350);
    }
  },

  submitDefi(defi, key) {
    const input = document.getElementById('home-defi-input');
    const U = window.MATHS_DEFIS_UTILS;
    if (!input) return;
    const raw = input.value;
    if (!raw.trim()) {
      const fb = document.getElementById('home-defi-feedback');
      if (fb) { fb.className = 'home-defi-feedback is-ko'; fb.textContent = 'Écris ta réponse avant de valider.'; }
      input.focus();
      return;
    }
    if (!Number.isFinite(U.parseAnswer(raw))) {
      const fb = document.getElementById('home-defi-feedback');
      if (fb) {
        fb.className = 'home-defi-feedback is-ko';
        fb.textContent = defi.format === 'fraction' ? 'Réponse attendue : un nombre ou une fraction, par exemple 3/4.' : 'Réponse attendue : un nombre (virgule décimale acceptée).';
      }
      input.focus();
      return;
    }
    const correct = U.isCorrect(raw, defi);
    const st = window.MathsStorage.updateDefiProgress(key, p => {
      p.tries = (p.tries || 0) + 1;
      if (correct && !p.revealed) { p.solved = true; p.solvedAt = new Date().toISOString(); }
    });
    if (correct && st.solved) {
      if (window.MathsAudio) window.MathsAudio.playCorrect();
      if (window.MathsConfetti) window.MathsConfetti.launch(1800);
      window.MathsStorage.addXp(this.DEFI_XP);
      if (typeof this.updateHeaderProfile === 'function') this.updateHeaderProfile();
      this.showToast(`🏆 <strong>Défi relevé !</strong> +${this.DEFI_XP} XP`);
    } else if (window.MathsAudio) {
      window.MathsAudio.playIncorrect();
    }
    this.renderDefiCard();
    const focusTarget = correct ? document.getElementById('home-defi-solution') : document.getElementById('home-defi-input');
    if (focusTarget) focusTarget.focus();
  },

  revealDefi(key) {
    window.MathsStorage.updateDefiProgress(key, p => { p.revealed = true; });
    this.renderDefiCard();
    const sol = document.getElementById('home-defi-solution');
    if (sol) sol.focus();
  },

  shareDefi(defi, ctx) {
    const U = window.MATHS_DEFIS_UTILS;
    const url = `${this.DEFI_SHARE_BASE}?defi=${U.weekKey(ctx.year, ctx.week)}&cycle=${ctx.cycle}&src=defi`;
    const text = `Défi de maths de la semaine (${U.CYCLE_LABELS[ctx.cycle]}) : « ${defi.title} ». Sauras-tu le relever ? ${url}`;
    const fallback = () => this.showToast(`🔗 Lien du défi : <strong>${this.escapeHtml(url)}</strong>`, 8000);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => this.showToast('📋 <strong>Lien du défi copié</strong> : colle-le dans un message ou dans l\'ENT.'))
        .catch(fallback);
    } else {
      fallback();
    }
  }
});
