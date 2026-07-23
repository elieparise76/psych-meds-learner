/* path.js — the LEARNING PATH view (PML.path): a Duolingo-style winding trail built from
 * window.CURRICULUM via PML.tree. Class branches stack as colourful "unit" sections; each is a
 * serpentine of big pressable node bubbles (locked / available / current / learned) ending in a
 * boss. A branch rail up top jumps between branches (parallel, choose-your-path). Pure view —
 * unlock logic lives in tree.js, learning in lesson.js, XP/mastery in game.js. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function hue(cls) { return 'var(--c-' + PML.deck.classKey(cls) + ')'; }
  function med(id) { return PML.deck.get(id); }
  function sfx(name) { if (PML.sfxOn && PML.sfxOn() && PML.sfx && PML.sfx[name]) PML.sfx[name](); }
  function toast(m) { PML.ui.toast(m); }

  // ---------- the whole path surface ----------
  function render(root) {
    var frontierId = PML.tree.frontier();
    root.appendChild(header(frontierId));
    root.appendChild(rail());
    var wrap = ce('div', { class: 'path view' });
    PML.tree.branches().forEach(function (b) { wrap.appendChild(branchSection(b, frontierId)); });
    root.appendChild(wrap);
  }

  // ---------- top "today" strip ----------
  function header(frontierId) {
    var st = PML.daily.todayStatus();
    var fmed = frontierId ? med(frontierId) : null;
    var ring = ce('div', { class: 'ring' }, [ce('div', { class: 'inner' }, [ce('b', { text: st.progressPct + '%' }), ce('span', { class: 'dim', style: { fontSize: '.62rem' } }, ['daily goal'])])]);
    ring.style.setProperty('--p', st.progressPct);

    var cont = ce('button', { class: 'btn primary lg', onclick: function () { if (frontierId) PML.ui.startLearn([frontierId]); } },
      [fmed ? '✨ Continue: ' + fmed.generic : '✓ Whole deck learned']);
    if (!frontierId) cont.disabled = true;
    var rev = ce('button', { class: 'btn lg' + (st.reviewsDue === 0 ? ' ghost' : ''), onclick: function () { PML.ui.go('review'); } }, ['🔁 Review (' + st.reviewsDue + ')']);

    return ce('div', { class: 'card pad hero-card stack view path-today' }, [
      ce('div', { class: 'row spread wrap' }, [
        ce('div', {}, [
          ce('h1', {}, ['Good ' + partOfDay() + '.']),
          ce('p', { class: 'muted', style: { margin: 0 } }, [
            fmed ? 'Next on your path: ' + fmed.generic + ' — a ' + (fmed.subclass || fmed.class) + '.' :
              (st.reviewsDue ? 'Nothing new to learn — clear your reviews to keep the streak.' : 'You have learned the whole deck. Keep reviewing to reach mastery.'),
          ]),
        ]),
        ring,
      ]),
      ce('div', { class: 'daily-actions' }, [cont, rev]),
    ]);
  }
  function partOfDay() { var h = new Date().getHours(); return h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening'; }

  // ---------- branch rail (parallel navigation) ----------
  function rail() {
    var wrap = ce('div', { class: 'branch-rail view', 'aria-label': 'Jump to a class' });
    PML.tree.branches().forEach(function (b) {
      var pr = PML.tree.branchProgress(b);
      var open = PML.tree.branchUnlocked(b);
      var chip = ce('button', {
        class: 'rail-chip' + (open ? '' : ' locked'),
        title: b.title + ' — ' + pr.learned + '/' + pr.total + (open ? '' : ' (locked)'),
        'aria-label': b.title + ', ' + pr.learned + ' of ' + pr.total + ' learned',
        onclick: function () { var el = document.getElementById('branch-' + b.id); if (el) el.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth', block: 'start' }); },
      }, [
        ce('span', { class: 'rail-ico', style: { '--nhue': hue(b.class) } }, [open ? b.icon : '🔒']),
        ce('span', { class: 'rail-frac' }, [pr.learned + '/' + pr.total]),
      ]);
      wrap.appendChild(chip);
    });
    return wrap;
  }
  function reduce() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  // ---------- one branch = a unit banner + a winding trail + a boss ----------
  function branchSection(b, frontierId) {
    var pr = PML.tree.branchProgress(b);
    var open = PML.tree.branchUnlocked(b);
    var sec = ce('section', { class: 'path-branch' + (open ? '' : ' branch-locked'), id: 'branch-' + b.id });

    // unit banner
    var banner = ce('div', { class: 'branch-banner', style: { '--nhue': hue(b.class) } }, [
      ce('div', { class: 'branch-banner-main' }, [
        ce('div', { class: 'branch-ico' }, [open ? b.icon : '🔒']),
        ce('div', {}, [
          ce('div', { class: 'branch-title' }, [b.title]),
          ce('div', { class: 'branch-blurb' }, [open ? b.blurb : (PML.tree.branchUnlockReason(b) || b.blurb)]),
        ]),
      ]),
      ce('div', { class: 'branch-frac' }, [pr.learned + ' / ' + pr.total]),
    ]);
    var barFill = ce('span', { style: { width: Math.round(pr.pct * 100) + '%', background: hue(b.class) } });
    banner.appendChild(ce('div', { class: 'branch-bar bar' }, [barFill]));
    sec.appendChild(banner);

    // the trail
    var trail = ce('div', { class: 'branch-trail' });
    var gi = 0;  // running node index (across tiers) drives the serpentine offset
    b.tiers.forEach(function (tier, ti) {
      trail.appendChild(ce('div', { class: 'tier-label' }, [ce('span', {}, [tier.title])]));
      tier.nodes.forEach(function (id) {
        trail.appendChild(nodeEl(b, id, gi, frontierId));
        gi++;
      });
    });
    trail.appendChild(bossEl(b, gi));
    sec.appendChild(trail);
    return sec;
  }

  function offset(gi) { return Math.round(Math.sin(gi * 0.7) * 58); }  // px serpentine sway

  function nodeEl(b, id, gi, frontierId) {
    var m = med(id);
    var state = PML.tree.nodeState(id);          // learned | available | locked
    var isFront = (id === frontierId);
    var due = state === 'learned' && PML.tree.isDue(id);
    var ks = PML.tree.keystone(id);

    var wrap = ce('div', { class: 'pnode' + (isFront ? ' is-current' : ''), style: { transform: 'translateX(' + offset(gi) + 'px)', '--nhue': hue(b.class) } });
    if (isFront) wrap.appendChild(ce('div', { class: 'pnode-flag' }, ['START']));

    var cwrap = ce('div', { class: 'pnode-cwrap' });
    var glyph = state === 'learned' ? '✓' : (state === 'locked' ? '🔒' : (isFront ? '★' : b.icon));
    var circle = ce('button', {
      class: 'pnode-circle ' + state + (isFront ? ' current' : ''),
      style: { '--nhue': hue(b.class) },
      'aria-label': (m ? m.generic : id) + ' — ' + state,
      onclick: function () { onNode(b, id, state); },
    }, [ce('span', { class: 'pnode-glyph' }, [glyph])]);
    if (state === 'learned') {
      var mast = (PML.store.get().cards[id] || {}).mastery;
      if (mast && mast !== 'none' && mast !== 'bronze') circle.classList.add('m-' + mast);
    }
    cwrap.appendChild(circle);
    if (ks) cwrap.appendChild(ce('span', { class: 'pnode-badge ks', title: ks === 2 ? 'Major keystone' : 'Keystone' }, [ks === 2 ? '💎' : '⭐']));
    if (due) cwrap.appendChild(ce('span', { class: 'pnode-badge due', title: 'Review due' }, ['🔁']));
    wrap.appendChild(cwrap);
    wrap.appendChild(ce('div', { class: 'pnode-label' + (state === 'locked' ? ' locked' : '') }, [m ? m.generic : id]));
    return wrap;
  }

  function onNode(b, id, state) {
    if (state === 'available') { PML.ui.startLearn([id]); return; }
    if (state === 'learned') { PML.ui.openDetail(id); return; }
    // locked
    var loc = PML.tree.locate(id);
    sfx('wrong');
    toast(loc ? PML.tree.tierLockReason(loc.b, loc.ti) : 'Locked.');
  }

  function bossEl(b, gi) {
    var st = PML.tree.bossState(b);              // locked | available | cleared
    var wrap = ce('div', { class: 'pnode pnode-boss' + (st === 'available' ? ' is-current' : ''), style: { transform: 'translateX(' + offset(gi) + 'px)', '--nhue': hue(b.class) } });
    if (st === 'available') wrap.appendChild(ce('div', { class: 'pnode-flag boss' }, ['BOSS']));
    var glyph = st === 'cleared' ? '🏆' : (st === 'locked' ? '🔒' : '🎁');
    var circle = ce('button', {
      class: 'pnode-circle boss ' + st, style: { '--nhue': hue(b.class) },
      'aria-label': b.boss.title + ' — ' + st,
      onclick: function () {
        if (st === 'locked') { sfx('wrong'); toast(PML.tree.bossLockReason(b)); return; }
        runBoss(b);
      },
    }, [ce('span', { class: 'pnode-glyph' }, [glyph])]);
    wrap.appendChild(ce('div', { class: 'pnode-cwrap' }, [circle]));
    wrap.appendChild(ce('div', { class: 'pnode-label boss-label' }, [b.boss.title]));
    return wrap;
  }

  // ---------- boss gauntlet runner ----------
  function bossQuestions(b) {
    var list = (window.BOSSES && window.BOSSES[b.id]) ? window.BOSSES[b.id].slice() : [];
    if (!list.length) {   // fallback: scoped cross-med vignettes touching this branch
      var inBranch = {}; PML.tree.branchNodes(b).forEach(function (id) { inBranch[id] = 1; });
      list = (window.VIGNETTES || []).filter(function (v) { return (v.meds || []).some(function (m) { return inBranch[m]; }); }).slice(0, 5);
    }
    return list.slice(0, 5);
  }

  function runBoss(b) {
    var qs = bossQuestions(b);
    var main = document.getElementById('main');
    if (!qs.length) { toast('This boss has no questions yet.'); return; }
    PML.game.resetCombo();
    var idx = 0, score = 0;
    var pass = Math.max(1, Math.ceil(qs.length * 0.6));

    function shell(children) { U.clear(main); main.appendChild(ce('div', { class: 'boss-wrap view' }, children)); window.scrollTo({ top: 0, behavior: 'auto' }); }

    function dots() {
      var d = ce('div', { class: 'boss-dots' });
      qs.forEach(function (q, i) { d.appendChild(ce('i', { class: (i < idx ? 'done' : (i === idx ? 'cur' : '')) })); });
      return d;
    }

    function question() {
      var v = qs[idx];
      var card = ce('div', { class: 'card pad stack boss-card', style: { '--nhue': hue(b.class) } });
      card.appendChild(ce('div', { class: 'boss-head' }, [
        ce('span', { class: 'boss-badge' }, ['🎁 Boss · ' + b.title]),
        ce('span', { class: 'dim', style: { fontSize: '.8rem' } }, ['Q' + (idx + 1) + ' / ' + qs.length]),
      ]));
      card.appendChild(dots());
      card.appendChild(ce('div', { class: 'q-stem' }, [v.stem]));
      var list = ce('div', { class: 'opt-list' });
      var fb = ce('div');
      v.options.forEach(function (opt, i) {
        var btn = ce('button', { class: 'opt', 'data-opt': opt }, [ce('span', { class: 'key' }, [String(i + 1)]), ce('span', { text: opt })]);
        btn.addEventListener('click', function () { commit(opt, btn, v, list, fb); });
        list.appendChild(btn);
      });
      card.appendChild(list);
      card.appendChild(fb);
      shell([card]);
    }

    function commit(opt, btn, v, list, fb) {
      var correct = opt === v.answer;
      if (correct) score++;
      U.qsa('.opt', list).forEach(function (x) { x.disabled = true; if (x.dataset.opt === v.answer) x.classList.add('correct'); });
      if (!correct) btn.classList.add('wrong');
      var ev = PML.game.recordAnswer(v.answerId || (v.meds && v.meds[0]), 'vignette', correct, v.tags || ['comparison']);
      PML.game.noteQuest('vignette', 1);
      PML.ui.refreshHud();
      if (correct) sfx('correct'); else sfx('wrong');
      PML.ui.celebrate(ev);   // fires mid-run level-up flashes / mastery toasts
      U.clear(fb);
      var box = ce('div', { class: 'feedback ' + (correct ? 'ok' : 'no'), style: { marginTop: 'var(--sp-3)' } }, [
        ce('h4', { style: { margin: 0 } }, [correct ? '✓ Correct' : '✗ ' + v.answer]),
        v.explanation ? ce('p', { class: 'muted', style: { margin: '6px 0 0', fontSize: '.92rem', lineHeight: 1.5 } }, [v.explanation]) : null,
        v.focus ? ce('div', { class: 'chip', style: { marginTop: '8px' } }, ['🔑 ' + v.focus]) : null,
      ]);
      var cont = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' }, onclick: nextQ }, [idx + 1 >= qs.length ? 'See result →' : 'Next →']);
      box.appendChild(cont); fb.appendChild(box); cont.focus();
    }

    function nextQ() { idx++; if (idx >= qs.length) return results(); question(); }

    function results() {
      var won = score >= pass;
      if (won && !PML.tree.bossCleared(b)) PML.tree.markBossCleared(b.id);
      if (won) { sfx('fanfare'); window.PMLConfetti && PMLConfetti.burst({ count: 160 }); }
      var card = ce('div', { class: 'card pad stack center boss-card', style: { '--nhue': hue(b.class) } }, [
        ce('div', { class: 'boss-result-glyph' }, [won ? '🏆' : '💪']),
        ce('h2', { style: { margin: 0 } }, [won ? 'Boss defeated!' : 'So close!']),
        ce('div', { class: 'boss-score' }, [score + ' / ' + qs.length]),
        ce('p', { class: 'muted' }, [won ? b.title + ' mastered — the branch is stamped on your path.' : 'You need ' + pass + ' to defeat this boss. Nothing lost — go again.']),
        ce('div', { class: 'row', style: { gap: '10px', justifyContent: 'center', flexWrap: 'wrap' } }, [
          ce('button', { class: 'btn primary', onclick: function () { runBoss(b); } }, ['↻ ' + (won ? 'Replay' : 'Try again')]),
          ce('button', { class: 'btn', onclick: function () { PML.ui.go('home'); } }, ['← Back to path']),
        ]),
      ]);
      shell([card]);
      if (won) PML.game.checkAchievements();
    }

    question();
  }

  PML.path = { render: render, boss: runBoss };
})();
