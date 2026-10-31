/**
 * Générateur de devoirs blancs d'entraînement (+ corrigé détaillé)
 * Permet aux élèves de s'entraîner en conditions réelles d'examen
 * avec régénération infinie de nouveaux sujets et auto-évaluation.
 * Multi-niveaux : Collège (5e, 4e, 3e), Lycée (2nde, 1ère, Tale), Licence (L1, L2, L3)
 */

window.MathsQuizGenerator = {
  lastChapters: [],
  lastCount: 10,
  showSolutions: true,

  /**
   * Coche ou décoche l'ensemble des chapitres du niveau actif
   */
  selectAllChapters(checked = true) {
    const boxes = document.querySelectorAll('input[name="quiz-chap"]');
    boxes.forEach(cb => { cb.checked = checked; });
  },

  /**
   * Ouvre la modale de configuration du devoir blanc
   */
  openModal(preselectedChapterId = null) {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    document.body.classList.add('quiz-modal-open');

    // Remplir la sélection des chapitres selon le niveau actif
    const container = document.getElementById('quiz-chapters-checkboxes');
    if (container) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => (c.level || '3eme') === currentLevel);
      const isSingleSelection = !!preselectedChapterId;
      const defaultId = preselectedChapterId || (chapters[0] ? chapters[0].id : 'N1');

      const actionsHtml = `
        <div class="quiz-select-actions no-print" style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
          <button type="button" class="btn-secondary btn-sm" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;" onclick="window.MathsQuizGenerator.selectAllChapters(true)">✅ Tout sélectionner</button>
          <button type="button" class="btn-secondary btn-sm" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;" onclick="window.MathsQuizGenerator.selectAllChapters(false)">❌ Tout désélectionner</button>
        </div>
      `;

      const chipsHtml = chapters.map(c => {
        // Si aucun chapitre spécifique n'est pré-sélectionné (ex: clic depuis la barre globale),
        // on coche l'ensemble des chapitres pour un devoir blanc d'examen complet.
        const isChecked = isSingleSelection ? (c.id === defaultId) : true;
        return `
          <label class="diapo-chip">
            <input type="checkbox" name="quiz-chap" value="${c.id}" ${isChecked ? 'checked' : ''} />
            <span>${c.num} : ${c.shortTitle || c.title}</span>
          </label>
        `;
      }).join('');

      container.innerHTML = actionsHtml + chipsHtml;
    }

    const countSelect = document.getElementById('quiz-count-select');
    if (countSelect) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      if (currentLevel === '3eme') {
        countSelect.value = 'dnb-20';
      } else if (currentLevel === 'tale' || currentLevel === '1ere') {
        countSelect.value = 'bac-20';
      } else {
        countSelect.value = '10';
      }
    }

    document.getElementById('quiz-config-screen').style.display = 'block';
    document.getElementById('quiz-preview-screen').style.display = 'none';
  },

  closeModal() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
    document.body.classList.remove('quiz-modal-open');
  },

  /**
   * Bascule l'affichage du corrigé détaillé
   */
  toggleSolution() {
    const block = document.getElementById('quiz-solutions-block');
    const btn = document.getElementById('btn-toggle-quiz-solution');
    if (!block) return;

    this.showSolutions = !this.showSolutions;
    block.style.display = this.showSolutions ? 'block' : 'none';
    block.classList.toggle('quiz-solutions-hidden', !this.showSolutions);
    if (btn) {
      btn.textContent = this.showSolutions ? '👁️ Masquer le Corrigé' : '👁️ Afficher le Corrigé';
    }
  },

  BREVET_THEME_LABELS: {
    'géométrie': 'Géométrie',
    'fonctions': 'Fonctions',
    'statistiques-probabilités': 'Statistiques et probabilités',
    'algorithmique': 'Algorithmique et programmation',
    'grandeurs-mesures': 'Grandeurs et mesures',
    'nombres-calculs': 'Nombres et calculs'
  },

  /**
   * Tire 3 problèmes de MATHS_BREVET_PROBLEMS de thèmes différents totalisant 12 points.
   * Retourne null si la banque n'est pas chargée (repli sur les questions générées).
   */
  pickBrevetProblems() {
    const bank = Array.isArray(window.MATHS_BREVET_PROBLEMS) ? window.MATHS_BREVET_PROBLEMS : [];
    const triples = [];
    for (let i = 0; i < bank.length; i++) {
      for (let j = i + 1; j < bank.length; j++) {
        if (bank[i].theme === bank[j].theme) continue;
        for (let k = j + 1; k < bank.length; k++) {
          if (bank[k].theme === bank[i].theme || bank[k].theme === bank[j].theme) continue;
          if (Math.abs(bank[i].points + bank[j].points + bank[k].points - 12) < 1e-9) triples.push([i, j, k]);
        }
      }
    }
    if (!triples.length) return null;
    const picked = triples[Math.floor(Math.random() * triples.length)].map(idx => bank[idx]);
    return picked.sort(() => Math.random() - 0.5);
  },

  /**
   * Remplace les blocs ```scratch (une instruction par ligne, imbrication par 4 espaces)
   * par des blocs Scratch colorés (classes CSS scratch-*), sur une seule ligne HTML.
   */
  renderScratchFences(md) {
    if (!md || md.indexOf('```scratch') === -1) return md;
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const flag = '<span style="display:inline-block; vertical-align:middle; width:15px; height:15px; background:#00b84c; border-radius:3px; clip-path: polygon(0 0, 100% 30%, 0 65%);"></span>';
    const fmt = (text) => {
      // Les groupes (…) de premier niveau et les […] deviennent des emplacements blancs
      let out = '', depth = 0, buf = '';
      for (const ch of text) {
        if (ch === '(') { if (depth === 0) { out += esc(buf); buf = ''; } else buf += ch; depth++; continue; }
        if (ch === ')' && depth > 0) { depth--; if (depth === 0) { out += `<span class="scratch-slot-str">${esc(buf)}</span>`; buf = ''; } else buf += ch; continue; }
        buf += ch;
      }
      out += esc(buf);
      out = out.replace(/\[([^\]]*)\]/g, '<span class="scratch-slot-str">$1</span>');
      return out.replace(/drapeau( vert)?/i, flag);
    };
    const kind = (t) => {
      if (/^quand\b/i.test(t)) return ['scratch-hat', ''];
      if (/^définir\b/i.test(t)) return ['scratch-hat', 'background:#ff6680; border-color:#e64d6a; color:#fff;'];
      if (/^(stylo|relever le stylo|effacer tout|mettre la couleur du stylo|mettre la taille du stylo)/i.test(t)) return ['scratch-motion', 'background:#0fbd8c; border-color:#0b9a72; color:#fff;'];
      if (/^(avancer|tourner|aller à|s'orienter|glisser|ajouter .* à x|ajouter .* à y|donner la valeur .* à (x|y))/i.test(t)) return ['scratch-motion', ''];
      if (/^demander\b/i.test(t)) return ['scratch-sensing', ''];
      if (/^(dire|penser)\b/i.test(t)) return ['scratch-looks', ''];
      if (/^(mettre|ajouter|changer)\b/i.test(t)) return ['scratch-variables', ''];
      if (/^(répéter|si\b|sinon|attendre|stop)/i.test(t)) return ['scratch-control', ''];
      return ['scratch-control', 'background:#ff6680; border-color:#e64d6a; color:#fff;'];
    };
    const blockHtml = (t) => {
      const [cls, style] = kind(t);
      return `<div class="scratch-block ${cls}" style="white-space:normal; flex-wrap:wrap; max-width:100%;${style ? ' ' + style : ''}">${fmt(t)}</div>`;
    };
    const renderLines = (lines) => {
      const walk = (i, ind) => {
        let out = '';
        while (i < lines.length && lines[i].ind >= ind) {
          const t = lines[i].text;
          if (lines[i].ind > ind || /^sinon$/i.test(t)) { out += blockHtml(t); i++; continue; }
          if (/^(répéter|si\b)/i.test(t)) {
            const [body, j] = walk(i + 1, ind + 1);
            let html = `<div class="scratch-c-wrap">${blockHtml(t)}<div class="scratch-c-body">${body || '&nbsp;'}</div>`;
            i = j;
            if (i < lines.length && lines[i].ind === ind && /^sinon$/i.test(lines[i].text)) {
              const [body2, k] = walk(i + 1, ind + 1);
              html += `${blockHtml('sinon')}<div class="scratch-c-body">${body2 || '&nbsp;'}</div>`;
              i = k;
            }
            out += html + '<div class="scratch-c-bottom"></div></div>';
          } else {
            out += blockHtml(t);
            i++;
          }
        }
        return [out, i];
      };
      return walk(0, 0)[0];
    };
    return md.replace(/```scratch\n([\s\S]*?)```/g, (m, code) => {
      const lines = code.split('\n').filter(l => l.trim()).map(l => {
        const sp = l.replace(/\t/g, '    ').match(/^ */)[0].length;
        return { ind: Math.floor(sp / 4), text: l.trim() };
      });
      return `<div class="scratch-stage-wrapper" style="max-width:100%;"><div class="scratch-script" style="text-align:left; max-width:100%;">${renderLines(lines)}</div></div>`;
    });
  },

  /**
   * Construit les « questions » de la partie 2 du brevet blanc à partir de la banque.
   */
  buildBrevetPart2(offset) {
    const picked = this.pickBrevetProblems();
    if (!picked) return null;
    const items = picked.map((p, idx) => ({
      id: p.id,
      isBrevetProblem: true,
      tier: 4,
      skill: this.BREVET_THEME_LABELS[p.theme] || p.theme,
      statement: this.renderScratchFences(p.statement),
      solution: this.renderScratchFences(p.solution),
      examTitle: `Exercice ${idx + 1} — ${p.title}`,
      examPoints: p.points,
      seriesIndex: offset + idx + 1,
      sectionTitle: idx === 0 ? 'Partie 2 — Raisonnement et résolution de problèmes — 14 points — 1 h 40' : undefined,
      sectionNote: idx === 0 ? `Calculatrice autorisée. Toutes les réponses doivent être justifiées, sauf indication contraire. Exercices : ${picked.map(q => String(q.points).replace('.', ',')).join(' + ')} = 12 points ; la clarté et la précision des raisonnements ainsi que la rédaction sont évaluées sur 2 points. Si le travail n'est pas terminé, laisser une trace de la recherche : elle sera prise en compte.` : undefined
    }));
    items.push({
      id: 'BR-redaction',
      isBrevetProblem: true,
      solutionOnly: true,
      tier: 4,
      skill: 'Communiquer, raisonner',
      statement: '',
      solution: 'Évaluée sur l\'ensemble de la partie 2 :\n- raisonnements clairs, organisés et justifiés (propriétés citées, calculs posés) ;\n- phrases de conclusion répondant à la question posée, avec les unités ;\n- vocabulaire et notations mathématiques corrects ; copie soignée et lisible.',
      examTitle: 'Clarté et rédaction',
      examPoints: 2,
      seriesIndex: offset + items.length + 1
    });
    return items;
  },

  /**
   * Génère un nouveau sujet blanc complet avec corrigé détaillé
   */
  generate() {
    const previewScreen = document.getElementById('quiz-preview-screen');
    const isRegenerating = previewScreen && previewScreen.style.display === 'block';

    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const validLevelChapters = (window.MATHS_CHAPTERS || []).filter(c => (c.level || '3eme') === currentLevel).map(c => c.id);

    const checkedBoxes = Array.from(document.querySelectorAll('input[name="quiz-chap"]:checked')).map(cb => cb.value);
    let chapters = checkedBoxes.filter(id => validLevelChapters.includes(id));
    if (!chapters.length) {
      chapters = (this.lastChapters || []).filter(id => validLevelChapters.includes(id));
    }
    if (!chapters.length) {
      const activeId = window.MathsApp && window.MathsApp.currentChapterId;
      if (activeId && validLevelChapters.includes(activeId)) {
        chapters = [activeId];
      } else if (validLevelChapters.length) {
        chapters = [validLevelChapters[0]];
      } else {
        chapters = ['N1'];
      }
    }
    this.lastChapters = chapters;

    // Réinitialiser le cache des énoncés récents pour ces chapitres afin de garantir un renouvellement complet
    if (window.MathsGenerators && window.MathsGenerators._recentGeneratedStatements) {
      chapters.forEach(cid => {
        for (let t = 1; t <= 4; t++) {
          delete window.MathsGenerators._recentGeneratedStatements[`${cid}:${t}`];
        }
      });
    }

    const countSelect = document.getElementById('quiz-count-select');
    const selectedFormat = countSelect ? countSelect.value : (this.lastCount || '10');
    this.lastCount = selectedFormat;

    const isExamDNB = selectedFormat === 'dnb-20' || selectedFormat === 'dnb-100';
    const isExamBac = selectedFormat === 'bac-20';

    const levelLabel = (window.MathsApp && typeof window.MathsApp.getLevelName === 'function')
      ? window.MathsApp.getLevelName(currentLevel)
      : (currentLevel === '6eme' ? '6ème' : currentLevel === '5eme' ? '5ème' : (currentLevel === '4eme' ? '4ème' : (currentLevel === '3eme' ? '3ème' : currentLevel)));

    let totalPoints = 20;
    let ptsPerQ = 2;
    let questions = [];
    let examMainTitle = `📝 L'ÉTABLI DES MATHS (${levelLabel}) — DEVOIRS BLANCS D'ENTRAÎNEMENT`;
    let examSubNotice = `💡 <strong>Sujet Blanc d'Entraînement (${levelLabel}) :</strong> Ce sujet a été généré aléatoirement pour vous entraîner en conditions réelles d'examen. Prenez une feuille, rédigez soigneusement vos calculs et vos justifications, puis comparez avec le <strong>corrigé détaillé</strong> ci-dessous. Vous pouvez cliquer sur <strong>« 🔄 Régénérer un nouveau devoir »</strong> à tout moment pour en faire d'autres !`;
    let examSolutionTitle = `L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS`;

    if (isExamDNB) {
      // Format de l'épreuve depuis la session 2026 : 2 h, 20 points.
      // Partie 1 — automatismes : 6 points, 20 min, calculatrice interdite, sans justification.
      // Partie 2 — raisonnement et résolution de problèmes : 14 points dont 2 pour la rédaction, 1 h 40.
      totalPoints = 20;
      examMainTitle = `🎓 BREVET DES COLLÈGES (DNB) — SUJET BLANC DE MATHÉMATIQUES SUR 20 POINTS`;
      examSubNotice = `🎓 <strong>Sujet blanc au format du brevet (depuis 2026) :</strong> 2 h, sur 20 points. <strong>Partie 1 — Automatismes</strong> (6 points, 20 min, calculatrice interdite, aucune justification demandée), puis <strong>Partie 2 — Raisonnement et résolution de problèmes</strong> (14 points, 1 h 40, calculatrice autorisée, dont 2 points pour la clarté et la rédaction). Sujet généré aléatoirement : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 BREVET (DNB) — CORRIGÉ DU SUJET BLANC SUR 20 POINTS`;

      const chapters3e = (window.MATHS_CHAPTERS || []).filter(c => c.level === '3eme').map(c => c.id);
      const shuffled = chapters3e.slice().sort(() => Math.random() - 0.5);
      const automatismes = [];
      for (const cid of shuffled) {
        if (automatismes.length >= 9) break;
        const q = window.MathsGenerators.generateForChapter(cid, 1);
        if (!q || !q.statement || q.statement.length > 260) continue;
        q.seriesIndex = automatismes.length + 1;
        q.examTitle = `Question ${automatismes.length + 1}`;
        q.hidePoints = true;
        if (automatismes.length === 0) {
          q.sectionTitle = 'Partie 1 — Automatismes — 6 points — 20 minutes';
          q.sectionNote = 'Calculatrice interdite. Pour chaque question, recopier son numéro et la réponse. Aucune justification n\'est demandée. Pour les questions à choix multiple, une seule réponse est exacte.';
        }
        automatismes.push(q);
      }

      // Partie 2 : 3 problèmes de la banque type brevet (thèmes différents, 12 points) + 2 points de rédaction.
      const bankProblems = this.buildBrevetPart2(automatismes.length);
      if (bankProblems) {
        questions = automatismes.concat(bankProblems);
      } else {
      const problemStructure = [
        { title: "Exercice 1 — Géométrie (4 points)", points: 4, pool: ['G0', 'G1', 'G2', 'G7'] },
        { title: "Exercice 2 — Calcul littéral, équations et fonctions (3,5 points)", points: 3.5, pool: ['N2', 'N4', 'Org1', 'Org3'] },
        { title: "Exercice 3 — Statistiques, probabilités ou algorithmique (4,5 points)", points: 4.5, pool: ['Org2', 'Org4', 'Algo'] }
      ];
      const problems = problemStructure.map((def, idx) => {
        const pool = def.pool.filter(id => chapters3e.includes(id));
        const cid = pool[Math.floor(Math.random() * pool.length)];
        const q = cid ? window.MathsGenerators.generateForChapter(cid, 3) : null;
        if (q) {
          q.examTitle = def.title;
          q.examPoints = def.points;
          q.seriesIndex = automatismes.length + idx + 1;
          if (idx === 0) {
            q.sectionTitle = 'Partie 2 — Raisonnement et résolution de problèmes — 14 points — 1 h 40';
            q.sectionNote = 'Calculatrice autorisée. Toutes les réponses doivent être justifiées. La clarté et la précision des raisonnements ainsi que la rédaction sont évaluées sur 2 points.';
          }
        }
        return q;
      }).filter(Boolean);
      questions = automatismes.concat(problems);
      }

    } else if (isExamBac) {
      totalPoints = 20;
      ptsPerQ = 5;
      examMainTitle = `🎓 BACCALAURÉAT GÉNÉRAL — ÉPREUVE DE SPÉCIALITÉ MATHÉMATIQUES (20 POINTS)`;
      examSubNotice = `🎓 <strong>Sujet Blanc Baccalauréat Spécialité Maths sur 20 points :</strong> 4 exercices sur le modèle de l'épreuve de spécialité (Probabilités & dénombrement, Géométrie dans l'espace, Suites & Analyse, Analyse approfondie). Durée conseillée : 4h00. Calculatrice mode examen autorisée. Sujet généré aléatoirement : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 BACCALAURÉAT GÉNÉRAL — CORRIGÉ DU SUJET BLANC DE SPÉCIALITÉ (SUR 20 POINTS)`;

      const bacStructure = [
        { title: "Exercice 1 — Probabilités, dénombrement & loi binomiale (5 points)", pool: ['TS1', 'TS2', 'TS3'], tier: 3 },
        { title: "Exercice 2 — Géométrie dans l'espace & Produit scalaire (5 points)", pool: ['TG1', 'TG2'], tier: 3 },
        { title: "Exercice 3 — Analyse, Suites récurrentes & Continuité (5 points)", pool: ['TA1', 'TA2', 'TA3', 'TA5'], tier: 3 },
        { title: "Exercice 4 — Analyse approfondie : dérivation, trigonométrie, convexité ou intégration (5 points)", pool: ['TA4', 'TA6', 'TA7', 'TA8', 'TA9'], tier: 3 }
      ];

      // Questions ouvertes uniquement : exercices rédigés de la banque de DS de Terminale
      // (difficulté 3-4, type bac), sinon repli sur les générateurs.
      const bank = window.MATHS_DS_BANK || {};
      questions = bacStructure.map((def, idx) => {
        const candidates = def.pool.flatMap(cid => (bank[cid] || []).filter(ex => ex.difficulty >= 3).map(ex => ({ cid, ex })));
        if (candidates.length) {
          const { cid, ex } = candidates[Math.floor(Math.random() * candidates.length)];
          return {
            id: ex.id,
            chapterId: cid,
            isBrevetProblem: true,
            tier: ex.difficulty,
            skill: ex.title,
            statement: ex.statement,
            solution: ex.solution,
            examTitle: `${def.title.replace(/ \(5 points\)$/, '')} — ${ex.title}`,
            examPoints: 5,
            seriesIndex: idx + 1
          };
        }
        const cid = def.pool[Math.floor(Math.random() * def.pool.length)];
        const q = window.MathsGenerators.generateForChapter(cid, def.tier);
        if (q) {
          q.examTitle = def.title;
          q.examPoints = 5;
          q.seriesIndex = idx + 1;
        }
        return q;
      }).filter(Boolean);

    } else {
      const count = parseInt(selectedFormat, 10) || 10;
      totalPoints = count === 5 ? 10 : (count === 10 ? 20 : 30);
      ptsPerQ = Math.round((totalPoints / count) * 10) / 10;
      // Pas de QCM dans un devoir : exercices rédigés des banques de DS quand elles existent
      // (lycée, licence, CAPES), sinon questions générées ouvertes uniquement.
      const bank = window.MATHS_DS_BANK || {};
      const bankItems = chapters.flatMap(cid => (bank[cid] || []).map(ex => ({ cid, ex })));
      const isOpen = q => q && q.type !== 'mcq' && !(Array.isArray(q.options) && q.options.length);
      if (bankItems.length >= 2) {
        const nbEx = count <= 5 ? 2 : (count <= 10 ? 3 : 4);
        const picked = [];
        const byChapter = {};
        bankItems.forEach(it => { (byChapter[it.cid] = byChapter[it.cid] || []).push(it); });
        const order = Object.keys(byChapter).sort(() => Math.random() - 0.5);
        for (let k = 0; picked.length < nbEx && k < nbEx * 4; k++) {
          const list = byChapter[order[k % order.length]].filter(it => !picked.includes(it));
          if (list.length) picked.push(list[Math.floor(Math.random() * list.length)]);
        }
        picked.sort((a, b) => (a.ex.difficulty || 1) - (b.ex.difficulty || 1));
        const raw = picked.reduce((t, it) => t + (it.ex.points || 5), 0);
        let assigned = 0;
        questions = picked.map((it, idx) => {
          const pts = idx === picked.length - 1 ? totalPoints - assigned : Math.max(1, Math.round((it.ex.points || 5) * totalPoints / raw * 2) / 2);
          assigned += pts;
          return {
            id: it.ex.id,
            chapterId: it.cid,
            isBrevetProblem: true,
            tier: it.ex.difficulty,
            skill: it.ex.title,
            statement: it.ex.statement,
            solution: it.ex.solution,
            examTitle: `Exercice ${idx + 1} — ${it.ex.title}`,
            examPoints: pts,
            seriesIndex: idx + 1
          };
        });
      } else {
        questions = window.MathsGenerators.generateSeries(chapters, count * 3).filter(isOpen).slice(0, count);
        if (!questions.length) questions = window.MathsGenerators.generateSeries(chapters, count);
      }
      examSolutionTitle = `L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS`;
    }

    const previewContainer = document.getElementById('quiz-preview-content');
    if (!previewContainer) return;

    const chapterTitles = isExamDNB ? 'Programme de 3e — format du brevet 2026'
      : (isExamBac ? 'Programme de spécialité mathématiques (Terminale)'
      : chapters.map(cid => {
          const c = (window.MATHS_CHAPTERS || []).find(ch => ch.id === cid);
          return c ? `${c.num} (${c.shortTitle || c.title})` : cid;
        }).join(', '));

    let html = `
      <div class="printable-quiz-sheet">
        
        <!-- SUJET BLANC -->
        <div class="quiz-single-subject">
          
          <div class="quiz-banner-notice no-print" id="quiz-status-banner">
            ${examSubNotice}
          </div>

          <div class="quiz-header-box">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>${examMainTitle}</h3>
                <span class="quiz-badge-theme">${chapterTitles}</span>
              </div>
              <div class="quiz-header-right">
                <div class="quiz-grade-box">Note : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${totalPoints}</div>
                <img src="assets/logo-192.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
              </div>
            </div>
            <div class="quiz-author-line">
              <span>Créé par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
            </div>
            <div class="quiz-student-meta">
              <span>Nom : ...................................</span>
              <span>Prénom : ...................................</span>
              <span>Classe : ${levelLabel} ......</span>
              <span>Date : ....................</span>
            </div>
          </div>

          <div class="quiz-questions-grid">
            ${questions.filter(q => !q.solutionOnly).map((q, idx) => {
              const stage = (window.MathsApp && typeof window.MathsApp.getPedagogicalStage === 'function')
                ? window.MathsApp.getPedagogicalStage(q.tier)
                : { label: `Palier ${q.tier || 1}` };
              const comp = (window.MathsApp && typeof window.MathsApp.getExerciseCompetency === 'function')
                ? window.MathsApp.getExerciseCompetency(q, q.chapterId)
                : (q.skill || q.title || q.chapterId);
              const cardTitle = q.examTitle || `Exercice ${idx + 1}`;
              const pointsDisplay = q.hidePoints ? '' : (q.examPoints ? `${String(q.examPoints).replace('.', ',')} points` : `${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''}`);
              const section = q.sectionTitle ? `
                <div class="quiz-exam-section">
                  <h4>${q.sectionTitle}</h4>
                  ${q.sectionNote ? `<p>${q.sectionNote}</p>` : ''}
                </div>` : '';
              return `${section}
                <div class="quiz-q-card">
                  <div class="quiz-q-header">
                    <span class="quiz-q-badge">${cardTitle}</span>
                    ${pointsDisplay ? `<span class="quiz-q-pts">(${pointsDisplay})</span>` : ''}
                    ${q.title && !q.examTitle ? `<span class="quiz-q-topic">${q.title}</span>` : ''}
                  </div>
                  <div class="quiz-learning-meta">
                    <span class="quiz-stage-pill">${stage.label}</span>
                    <span>Palier ${q.tier || 1}</span>
                    <span>Compétence / notion : ${comp}</span>
                  </div>
                  <div class="quiz-q-text">
                    ${window.MathsRenderer.markdownToHtml(q.statement)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="quiz-footer-credit print-only">
            <span>L'Établi des Maths • ${examMainTitle} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
            <span class="print-qr"><img src="assets/qr/site.svg" alt="" width="64" height="64" /> Entraîne-toi gratuitement : etabli-des-maths.fr</span>
          </div>
        </div>

        <!-- CORRIGÉ DÉTAILLÉ -->
        <div id="quiz-solutions-block" class="quiz-solutions-teacher">
          <div class="quiz-header-box teacher-header">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>${examSolutionTitle}</h3>
                <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-muted, #555);">
                  Thème(s) évalué(s) : ${chapterTitles} — Auto-évaluation & remédiation
                </p>
              </div>
              <div class="quiz-header-right">
                <img src="assets/logo-192.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
              </div>
            </div>
            <div class="quiz-author-line">
              <span>Créé par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
            </div>
          </div>
          <div class="quiz-solutions-grid">
            ${questions.map((q, idx) => {
              const stage = (window.MathsApp && typeof window.MathsApp.getPedagogicalStage === 'function')
                ? window.MathsApp.getPedagogicalStage(q.tier)
                : { label: `Palier ${q.tier || 1}` };
              const comp = (window.MathsApp && typeof window.MathsApp.getExerciseCompetency === 'function')
                ? window.MathsApp.getExerciseCompetency(q, q.chapterId)
                : (q.skill || q.title || q.chapterId);
              const cardTitle = q.examTitle || `Exercice ${idx + 1}`;
              const pointsDisplay = q.hidePoints ? '' : (q.examPoints ? `${String(q.examPoints).replace('.', ',')} points` : `${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''}`);
              const rawSol = q.solution || (q.answer ? `Réponse attendue : **${q.answer}**` : "Voir le cours pour les étapes détaillées.");
              const solFormatted = (!q.isBrevetProblem && window.MathsAdaptiveEngine && q.statement && rawSol)
                ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(q.statement, rawSol)
                : rawSol;
              const section = q.sectionTitle ? `<div class="quiz-exam-section"><h4>${q.sectionTitle}</h4></div>` : '';
              return `${section}
                <div class="quiz-sol-card">
                  <div class="quiz-sol-header">
                    <strong>${cardTitle}</strong> ${pointsDisplay ? `<span class="quiz-q-pts">(${pointsDisplay})</span>` : ''}
                    ${q.title && !q.examTitle ? `<span class="quiz-sol-topic">${q.title}</span>` : ''}
                  </div>
                  <div class="quiz-learning-meta correction-learning-meta">
                    <span class="quiz-stage-pill">${stage.label}</span>
                    <span>Compétence / notion : ${comp}</span>
                  </div>
                  <div class="quiz-sol-body">
                    ${window.MathsRenderer.markdownToHtml(solFormatted)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="quiz-footer-credit print-only">
            <span>L'Établi des Maths • Corrigé d'auto-évaluation ${levelLabel} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
          </div>
        </div>

      </div>
    `;

    previewContainer.innerHTML = html;
    window.MathsRenderer.renderElement(previewContainer);

    this.showSolutions = true;
    const btn = document.getElementById('btn-toggle-quiz-solution');
    if (btn) btn.textContent = '👁️ Masquer le Corrigé';

    document.getElementById('quiz-config-screen').style.display = 'none';
    document.getElementById('quiz-preview-screen').style.display = 'block';

    // Défiler vers le haut de la prévisualisation
    previewContainer.scrollTop = 0;

    // Feedback visuel lorsque l'utilisateur a cliqué sur Régénérer
    if (isRegenerating) {
      const cards = previewContainer.querySelectorAll('.quiz-q-card, .quiz-sol-card');
      cards.forEach((c, idx) => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(6px)';
        c.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        setTimeout(() => {
          c.style.opacity = '1';
          c.style.transform = 'translateY(0)';
        }, Math.min(240, 25 * (idx % 10)));
      });

      const banner = document.getElementById('quiz-status-banner');
      if (banner) {
        banner.style.transition = 'all 0.3s ease';
        banner.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.45)';
        banner.style.borderColor = 'var(--primary, #2563eb)';
        banner.innerHTML = `✨ <strong>Nouveau sujet généré avec succès (${levelLabel}) !</strong> De nouvelles valeurs et questions ont été tirées au sort. Bon entraînement !`;
        setTimeout(() => {
          if (banner) {
            banner.style.boxShadow = 'none';
          }
        }, 2500);
      }
    }
  }
};
