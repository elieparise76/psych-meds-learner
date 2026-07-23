/* roadmap.js — the ROADMAP page (PML.roadmap). Built from window.CURRICULUM via PML.tree, laid
 * out as CHAPTERS (horizontal priority bands, top→bottom) each holding CLASS ROWS — every med at
 * the same level sits on one horizontal line. Flat, calm nodes (learned / available / current /
 * locked), keystones marked, a boss at the end of each class's last row. Pure view: unlock logic
 * lives in tree.js, learning in lesson.js, XP/mastery in game.js. Also hosts the boss runner. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function hue(cls) { return 'var(--c-' + PML.deck.classKey(cls) + ')'; }
  function med(id) { return PML.deck.get(id); }
  function sfx(name) { if (PML.sfxOn && PML.sfxOn() && PML.sfx && PML.sfx[name]) PML.sfx[name](); }
  function toast(m) { PML.ui.toast(m); }
  function reduce() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  // ---------- the page ----------
  function view(root) {
    var frontierId = PML.tree.frontier();
    root.appendChild(head(frontierId));
    var wrap = ce('div', { class: 'roadmap view' });
    PML.tree.chapters().forEach(function (ch) { wrap.appendChild(chapterEl(ch, frontierId)); });
    root.appendChild(wrap);
    // gently bring the current node into view so "Continue" lands you where you left off
    setTimeout(function () {
      var cur = document.querySelector('.rnode.is-current');
      if (cur) cur.scrollIntoView({ block: 'center', behavior: reduce() ? 'auto' : 'smooth' });
    }, 40);
  }

  function head(frontierId) {
    var st = PML.tree.stats();
    var fmed = frontierId ? med(frontierId) : null;
    var pct = st.total ? Math.round(st.learned / st.total * 100) : 0;
    var cont = ce('button', { class: 'btn primary', onclick: function () { if (frontierId) PML.ui.startLearn([frontierId], 'roadmap'); } },
      [fmed ? '✨ Learn ' + fmed.generic : '✓ All learned']);
    if (!frontierId) cont.disabled = true;
    return ce('div', { class: 'card pad roadmap-head view' }, [
      ce('div', { class: 'row spread wrap', style: { alignItems: 'flex-end', gap: 'var(--sp-3)' } }, [
        ce('div', {}, [
          ce('h1', { style: { margin: 0 } }, ['Your roadmap']),
          ce('p', { class: 'muted', style: { margin: '4px 0 0' } }, [fmed ? 'Up next: ' + fmed.generic + ' — a ' + (fmed.subclass || fmed.class) + '.' : 'You have learned every medication.']),
        ]),
        cont,
      ]),
      ce('div', { class: 'row spread', style: { marginTop: 'var(--sp-4)', fontSize: '.82rem' } }, [
        ce('span', { class: 'muted' }, [st.learned + ' of ' + st.total + ' learned']),
        ce('span', { class: 'muted' }, [pct + '%']),
      ]),
      ce('div', { class: 'bar', style: { marginTop: '6px', height: '8px' } }, [ce('span', { style: { width: pct + '%' } })]),
    ]);
  }

  // ---------- a chapter (priority band) ----------
  function chapterEl(ch, frontierId) {
    var pct = ch.total ? Math.round(ch.learned / ch.total * 100) : 0;
    var card = ce('section', { class: 'chapter card pad view' });
    card.appendChild(ce('div', { class: 'chapter-head' }, [
      ce('div', { class: 'chapter-num' }, [String(ch.index + 1)]),
      ce('div', { style: { flex: 1 } }, [
        ce('div', { class: 'chapter-title' }, [ch.title]),
        ch.subtitle ? ce('div', { class: 'chapter-sub' }, [ch.subtitle]) : null,
      ]),
      ce('div', { class: 'chapter-frac' }, [ch.learned + ' / ' + ch.total]),
    ]));
    card.appendChild(ce('div', { class: 'chapter-bar bar' }, [ce('span', { style: { width: pct + '%' } })]));
    ch.rows.forEach(function (row) { card.appendChild(rowEl(row, frontierId)); });
    return card;
  }

  // ---------- a class row (same-level meds on one line) ----------
  function rowEl(row, frontierId) {
    var wrap = ce('div', { class: 'rrow', style: { '--nhue': hue(row.branch.class) } });
    wrap.appendChild(ce('div', { class: 'rrow-label' }, [
      ce('span', { class: 'rrow-dot' }),
      ce('span', {}, [row.tier.title]),
      row.unlocked ? null : ce('span', { class: 'rrow-lock', title: 'Locked' }, ['🔒']),
    ]));
    var nodes = ce('div', { class: 'rrow-nodes' });
    row.nodes.forEach(function (id) { nodes.appendChild(nodeEl(row.branch, id, frontierId)); });
    if (row.isLastTier) nodes.appendChild(bossEl(row.branch));
    wrap.appendChild(nodes);
    return wrap;
  }

  function nodeEl(b, id, frontierId) {
    var m = med(id);
    var state = PML.tree.nodeState(id);          // learned | available | locked
    var isFront = (id === frontierId);
    var due = state === 'learned' && PML.tree.isDue(id);
    var ks = PML.tree.keystone(id);
    var wrap = ce('div', { class: 'rnode' + (isFront ? ' is-current' : ''), style: { '--nhue': hue(b.class) } });
    var glyph = state === 'learned' ? '✓' : (state === 'locked' ? '🔒' : (isFront ? '▶' : ''));
    var dot = ce('button', {
      class: 'rnode-dot ' + state + (isFront ? ' current' : ''),
      'aria-label': (m ? m.generic : id) + ' — ' + (isFront ? 'up next' : state),
      onclick: function () { onNode(id, state); },
    }, [glyph ? ce('span', { class: 'rnode-glyph' }, [glyph]) : null]);
    if (state === 'learned') {
      var mast = (PML.store.get().cards[id] || {}).mastery;
      if (mast && mast !== 'none' && mast !== 'bronze') dot.classList.add('m-' + mast);
    }
    if (ks) dot.appendChild(ce('span', { class: 'rnode-badge ks' }, [ks === 2 ? '💎' : '⭐']));
    if (due) dot.appendChild(ce('span', { class: 'rnode-badge due' }, ['🔁']));
    wrap.appendChild(dot);
    wrap.appendChild(ce('div', { class: 'rnode-label' + (state === 'locked' ? ' locked' : '') }, [m ? m.generic : id]));
    return wrap;
  }

  function onNode(id, state) {
    if (state === 'available') { PML.ui.startLearn([id], 'roadmap'); return; }
    if (state === 'learned') { PML.ui.openDetail(id); return; }
    var loc = PML.tree.locate(id);
    sfx('wrong');
    toast(loc ? PML.tree.tierLockReason(loc.b, loc.ti) : 'Locked.');
  }

  function bossEl(b) {
    var st = PML.tree.bossState(b);              // locked | available | cleared
    var wrap = ce('div', { class: 'rnode rnode-boss' + (st === 'available' ? ' is-current' : ''), style: { '--nhue': hue(b.class) } });
    var glyph = st === 'cleared' ? '🏆' : (st === 'locked' ? '🔒' : '🎁');
    var dot = ce('button', {
      class: 'rnode-dot boss ' + st, 'aria-label': b.boss.title + ' — ' + st,
      onclick: function () { if (st === 'locked') { sfx('wrong'); toast(PML.tree.bossLockReason(b)); return; } runBoss(b); },
    }, [ce('span', { class: 'rnode-glyph' }, [glyph])]);
    wrap.appendChild(dot);
    wrap.appendChild(ce('div', { class: 'rnode-label' }, ['Boss']));
    return wrap;
  }

  // ---------- boss gauntlet runner ----------
  function bossQuestions(b) {
    var list = (window.BOSSES && window.BOSSES[b.id]) ? window.BOSSES[b.id].slice() : [];
    if (!list.length) {
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
      PML.ui.celebrate(ev);
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
        ce('p', { class: 'muted' }, [won ? b.title + ' mastered — the branch is stamped on your roadmap.' : 'You need ' + pass + ' to defeat this boss. Nothing lost — go again.']),
        ce('div', { class: 'row', style: { gap: '10px', justifyContent: 'center', flexWrap: 'wrap' } }, [
          ce('button', { class: 'btn primary', onclick: function () { runBoss(b); } }, ['↻ ' + (won ? 'Replay' : 'Try again')]),
          ce('button', { class: 'btn', onclick: function () { PML.ui.go('roadmap'); } }, ['← Back to roadmap']),
        ]),
      ]);
      shell([card]);
      if (won) PML.game.checkAchievements();
    }
    question();
  }

  PML.roadmap = { view: view, boss: runBoss };
})();
