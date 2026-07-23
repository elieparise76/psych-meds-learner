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
  var _curReviewKey = null;   // the review that "Continue" points at (for the pulse), if any
  function view(root) {
    var frontierId = PML.tree.frontier();
    var act = PML.tree.nextAction();
    _curReviewKey = (act && act.type === 'review') ? (act.branch.id + ':' + act.tierIndex) : null;
    root.appendChild(head(act, frontierId));
    var wrap = ce('div', { class: 'roadmap view' });
    PML.tree.chapters().forEach(function (ch) { wrap.appendChild(chapterEl(ch, frontierId)); });
    root.appendChild(wrap);
    // gently bring the current node/review into view so "Continue" lands you where you left off
    setTimeout(function () {
      var cur = document.querySelector('.rnode.is-current');
      if (cur) cur.scrollIntoView({ block: 'center', behavior: reduce() ? 'auto' : 'smooth' });
    }, 40);
  }

  function head(act, frontierId) {
    var st = PML.tree.stats();
    var pct = st.total ? Math.round(st.learned / st.total * 100) : 0;
    var cont, upnext;
    if (!act) {
      cont = ce('button', { class: 'btn primary', disabled: 'disabled' }, ['✓ All done']);
      upnext = 'You have learned every medication.';
    } else if (act.type === 'learn') {
      var m = med(act.id);
      cont = ce('button', { class: 'btn primary', onclick: function () { PML.ui.startLearn([act.id], 'roadmap'); } }, ['✨ Learn ' + m.generic]);
      upnext = 'Up next: ' + m.generic + ' — a ' + (m.subclass || m.class) + '.';
    } else {
      cont = ce('button', { class: 'btn primary', onclick: function () { runReview(act.branch, act.tierIndex); } }, ['📝 Review: ' + act.branch.tiers[act.tierIndex].title]);
      upnext = 'Up next: the “' + act.branch.tiers[act.tierIndex].title + '” review — you have learned the whole row.';
    }
    return ce('div', { class: 'card pad roadmap-head view' }, [
      ce('div', { class: 'row spread wrap', style: { alignItems: 'flex-end', gap: 'var(--sp-3)' } }, [
        ce('div', {}, [
          ce('h1', { style: { margin: 0 } }, ['Your roadmap']),
          ce('p', { class: 'muted', style: { margin: '4px 0 0' } }, [upnext]),
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

  // ---------- a class row (same-level meds on one line, ending in a Review) ----------
  function rowEl(row, frontierId) {
    var wrap = ce('div', { class: 'rrow', style: { '--nhue': hue(row.branch.class) } });
    wrap.appendChild(ce('div', { class: 'rrow-label' }, [
      ce('span', { class: 'rrow-dot' }),
      ce('span', { class: 'rrow-name' }, [row.tier.title]),
      row.unlocked ? null : ce('span', { class: 'rrow-lock', title: 'Locked' }, ['🔒']),
    ]));
    var nodes = ce('div', { class: 'rrow-nodes' });
    row.nodes.forEach(function (id) { nodes.appendChild(nodeEl(row.branch, id, frontierId)); });
    nodes.appendChild(reviewEl(row.branch, row.tierIndex));
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

  function reviewEl(b, tierIndex) {
    var st = PML.tree.reviewState(b, tierIndex);   // locked | available | cleared
    var key = b.id + ':' + tierIndex;
    var isCur = (st === 'available' && key === _curReviewKey);
    var wrap = ce('div', { class: 'rnode rnode-review' + (isCur ? ' is-current' : ''), style: { '--nhue': hue(b.class) } });
    var glyph = st === 'cleared' ? '🏅' : (st === 'locked' ? '🔒' : '📝');
    var dot = ce('button', {
      class: 'rnode-dot review ' + st + (isCur ? ' current' : ''), 'aria-label': b.tiers[tierIndex].title + ' review — ' + st,
      onclick: function () { if (st === 'locked') { sfx('wrong'); toast(PML.tree.reviewLockReason(b, tierIndex)); return; } runReview(b, tierIndex); },
    }, [ce('span', { class: 'rnode-glyph' }, [glyph])]);
    wrap.appendChild(dot);
    wrap.appendChild(ce('div', { class: 'rnode-label' }, ['Review']));
    return wrap;
  }

  // ---------- review runner ----------
  function reviewQuestions(b, tierIndex) {
    var key = b.id + ':' + tierIndex;
    return (window.REVIEWS && window.REVIEWS[key]) ? window.REVIEWS[key].slice() : [];
  }

  function runReview(b, tierIndex) {
    var qs = reviewQuestions(b, tierIndex);
    var rowTitle = b.tiers[tierIndex].title;
    var main = document.getElementById('main');
    if (!qs.length) { toast('This review isn’t ready yet.'); return; }
    PML.game.resetCombo();
    var idx = 0, score = 0;
    var pass = Math.max(1, Math.round(qs.length * 0.7));

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
        ce('span', { class: 'boss-badge' }, ['📝 Review · ' + b.title + ' · ' + rowTitle]),
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
      var ev = PML.game.recordAnswer(v.answerId || (v.meds && v.meds[0]), 'vignette', correct, v.tags || ['review']);
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
      if (won && !PML.tree.reviewCleared(b, tierIndex)) PML.tree.markReviewCleared(b, tierIndex);
      if (won) { sfx('fanfare'); window.PMLConfetti && PMLConfetti.burst({ count: 150 }); }
      var card = ce('div', { class: 'card pad stack center boss-card', style: { '--nhue': hue(b.class) } }, [
        ce('div', { class: 'boss-result-glyph' }, [won ? '🏅' : '💪']),
        ce('h2', { style: { margin: 0 } }, [won ? 'Review passed!' : 'Not quite']),
        ce('div', { class: 'boss-score' }, [score + ' / ' + qs.length]),
        ce('p', { class: 'muted' }, [won ? ('“' + rowTitle + '” is locked in — the next row is open.') : ('You need ' + pass + ' to pass. Nothing lost — brush up on the row and try again.')]),
        ce('div', { class: 'row', style: { gap: '10px', justifyContent: 'center', flexWrap: 'wrap' } }, [
          ce('button', { class: 'btn primary', onclick: function () { runReview(b, tierIndex); } }, ['↻ ' + (won ? 'Retake' : 'Try again')]),
          ce('button', { class: 'btn', onclick: function () { PML.ui.go('roadmap'); } }, ['← Back to roadmap']),
        ]),
      ]);
      shell([card]);
      if (won) PML.game.checkAchievements();
    }
    question();
  }

  PML.roadmap = { view: view, review: runReview };
})();
