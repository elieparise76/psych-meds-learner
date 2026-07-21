/* ui.js — app shell: topbar + HUD, nav router, home dashboard, celebrations, toasts, modal,
 * settings. View modules (practice, catalog, compare, cram, progress) register render fns and
 * are mounted here. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce, qs = U.qs;

  var main, hudEl, navEl, toastHost;
  var current = { view: 'home', flash: null };

  var NAV = [
    ['home', 'Home', '🏠'], ['practice', 'Practice', '🎮'], ['review', 'Review', '🔁'],
    ['wiki', 'Wiki', '📖'], ['compare', 'Compare', '⚖️'], ['cram', 'Cram', '⏱️'],
    ['progress', 'Progress', '🏅'],
  ];

  function sfxOn() { return !!PML.store.get().settings.sound; }
  function playSfx(name) { if (sfxOn() && PML.sfx[name]) PML.sfx[name](); }

  // ---------- theme ----------
  // Titrate is light-only by design; tokens.css defines the single Regal-Violet theme on :root.
  // We clear any legacy data-theme (e.g. an old "dark" saved by a returning user) so it can't
  // shadow the light tokens, and normalise the stored setting.
  function applyTheme() {
    document.documentElement.removeAttribute('data-theme');
    var s = PML.store.get().settings;
    if (s.theme !== 'light') { s.theme = 'light'; PML.store.save(); }
  }

  // ---------- HUD ----------
  function refreshHud() {
    if (!hudEl) return;
    var s = PML.store.get();
    var li = PML.game.levelInfo(s.progress.xp);
    U.clear(hudEl);
    hudEl.appendChild(ce('div', { class: 'hud-item hud-streak', title: 'Daily streak' }, [ce('span', { class: 'ico flame-anim' }, ['🔥']), ce('span', { text: String(s.progress.streak || 0) })]));
    hudEl.appendChild(ce('div', { class: 'hud-item hud-xp', title: 'Level ' + li.level + ' · ' + s.progress.xp + ' XP' }, [ce('span', { class: 'ico' }, ['⭐']), ce('span', { text: 'Lv ' + li.level })]));
    if (s.profile) hudEl.appendChild(profileChip(s.profile));
  }

  function profileChip(p) {
    return ce('button', { class: 'hud-item profile-chip', title: p.name + ' — profile & settings', 'aria-label': 'Profile: ' + p.name, onclick: settings }, [PML.profile.avatarEl(p.avatar, 22), ce('span', { class: 'pname' }, [p.name])]);
  }

  // ---------- router ----------
  function setActiveNav(view) {
    U.qsa('button', navEl).forEach(function (b) { var on = b.dataset.view === view; b.classList.toggle('active', on); if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  }
  function go(view, params) {
    if (view !== current.view) playSfx('nav');
    current.view = view; current.flash = null;
    setActiveNav(view);
    U.clear(main);
    var fn = VIEWS[view];
    if (fn) fn(main, params || {});
    else placeholder(main, view);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  function placeholder(root, view) {
    root.appendChild(ce('div', { class: 'card pad center view' }, [ce('h2', {}, [view]), ce('p', { class: 'muted' }, ['Coming soon.'])]));
  }

  // ---------- celebrations ----------
  // Two weights: a full-screen BLOCK "moment" (streak/level milestones — dim backdrop, count-up,
  // Continue button, queued) and a lightweight non-blocking FLASH (mid-practice level-ups).
  function celebrate(ev, opts) {
    opts = opts || {};
    if (!ev) return;
    refreshHud();
    if (ev.correct === false) return;
    var milestone = !!(opts.big || (ev.goal && ev.goal.justMet));

    // smaller wins → toasts (mastery, achievements, quests)
    if (ev.masteryUp) { toast('🏅 ' + cap(ev.masteryUp) + ' mastery!', 'win'); playSfx('badge'); }
    (ev.achievements || []).forEach(function (a) { toast(a.emoji + ' ' + a.title, 'win'); playSfx('badge'); window.PMLConfetti && PMLConfetti.burst({ count: 60 }); });
    (ev.quests || []).forEach(function (q) { toast('✅ Quest: ' + q.text + ' (+' + q.reward + ' XP)', 'win'); playSfx('quest'); });

    // big center-screen moments
    if (ev.goal && ev.goal.justMet) {
      var to = ev.goal.streak;
      var from = ev.goal.prev != null ? ev.goal.prev : Math.max(0, to - 1);
      enqueueMoment({ kind: 'streak', from: from, to: to });
    }
    if (ev.leveled) {
      var lvl = ev.level || (ev.xp && ev.xp.to);
      if (milestone) enqueueMoment({ kind: 'level', level: lvl });
      else flashMoment({ kind: 'level', level: lvl });
    } else if (opts.big && !(ev.goal && ev.goal.justMet)) {
      // finished a lesson, but the daily streak already advanced earlier and no level-up:
      // still give a little pop so completing always feels rewarded.
      window.PMLConfetti && (opts.anchor ? PMLConfetti.fromElement(opts.anchor) : PMLConfetti.burst());
      playSfx('goal');
    }
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // ---------- big-moment engine ----------
  var celebQ = [], celebBusy = false;
  function celebActive() { return !!document.querySelector('.celeb-overlay.block'); }
  function reduceMotion() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  function enqueueMoment(cfg) { celebQ.push(cfg); if (!celebBusy) runNextMoment(); }
  function runNextMoment() {
    if (!celebQ.length) { celebBusy = false; return; }
    celebBusy = true;
    showBlockMoment(celebQ.shift(), runNextMoment);
  }

  function celebSpec(cfg) {
    if (cfg.kind === 'streak') {
      var to = cfg.to, from = cfg.from != null ? cfg.from : Math.max(0, to - 1);
      return {
        glyph: '🔥', glyphClass: 'flame', glow: 'flame', numFrom: from, numTo: to,
        title: to <= 1 ? 'Streak started!' : to + '-day streak!',
        sub: to <= 1 ? 'You learned today — come back tomorrow to keep the flame alive.' : 'That’s ' + to + ' days in a row. Don’t break the chain!',
        sound: 'streakup',
      };
    }
    if (cfg.kind === 'level') {
      return { glyph: '⭐', glyphClass: 'star', glow: '', numFrom: cfg.level, numTo: cfg.level, title: 'Level ' + cfg.level + '!', sub: 'You levelled up — new mastery within reach.', sound: 'levelup' };
    }
    return { glyph: cfg.glyph || '🎉', title: cfg.title || 'Nice!', sub: cfg.sub || '', sound: cfg.sound || 'goal', numFrom: cfg.num, numTo: cfg.num };
  }

  function buildCelebCard(cfg, flash) {
    var spec = celebSpec(cfg);
    var glyphWrap = ce('div', { class: 'celeb-glyphwrap' });
    if (!flash) glyphWrap.appendChild(ce('div', { class: 'celeb-rays' }));
    glyphWrap.appendChild(ce('div', { class: 'celeb-glow ' + (spec.glow || '') }));
    glyphWrap.appendChild(ce('div', { class: 'celeb-glyph ' + (spec.glyphClass || '') }, [spec.glyph]));
    var kids = [glyphWrap];
    var numEl = null;
    if (spec.numTo != null) { numEl = ce('div', { class: 'celeb-num' }, [String(spec.numFrom != null ? spec.numFrom : spec.numTo)]); kids.push(numEl); }
    kids.push(ce('div', { class: 'celeb-title' }, [spec.title]));
    if (!flash && spec.sub) kids.push(ce('div', { class: 'celeb-sub' }, [spec.sub]));
    return { card: ce('div', { class: 'celeb-card' }, kids), numEl: numEl, spec: spec };
  }

  function animateCount(el, from, to) {
    from = from || 0; to = to || 0;
    if (reduceMotion() || from === to) { el.textContent = String(to); if (from !== to) tickPop(el); return; }
    var dur = Math.min(1100, 340 + Math.abs(to - from) * 170);
    var t0 = null, last = from;
    el.textContent = String(from);
    function frame(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(from + (to - from) * eased);
      if (val !== last) { last = val; el.textContent = String(val); tickPop(el); if (sfxOn() && PML.sfx.poptick) PML.sfx.poptick(); }
      if (p < 1) requestAnimationFrame(frame); else el.textContent = String(to);
    }
    requestAnimationFrame(frame);
  }
  function tickPop(el) { el.classList.remove('tickpop'); void el.offsetWidth; el.classList.add('tickpop'); }

  function showBlockMoment(cfg, done) {
    var built = buildCelebCard(cfg, false);
    var overlay = ce('div', { class: 'celeb-overlay block', role: 'dialog', 'aria-modal': 'true', 'aria-label': built.spec.title });
    var cta = ce('button', { class: 'btn primary lg celeb-cta', onclick: function () { close(); } }, ['Continue']);
    built.card.appendChild(cta);
    overlay.appendChild(built.card);
    document.body.appendChild(overlay);
    playSfx(built.spec.sound);
    window.PMLConfetti && PMLConfetti.burst({ count: 150 });
    if (built.numEl && built.spec.numTo != null) setTimeout(function () { animateCount(built.numEl, built.spec.numFrom, built.spec.numTo); }, 380);
    var closed = false, timer = setTimeout(function () { close(); }, 4600);
    setTimeout(function () { cta.focus(); }, 30);
    function onKey(e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); } }
    document.addEventListener('keydown', onKey, true);
    function close() {
      if (closed) return; closed = true;
      clearTimeout(timer); document.removeEventListener('keydown', onKey, true);
      overlay.style.transition = 'opacity .28s var(--ease)'; overlay.style.opacity = '0';
      setTimeout(function () { overlay.remove(); if (done) done(); }, 280);
    }
  }

  function flashMoment(cfg) {
    var built = buildCelebCard(cfg, true);
    var overlay = ce('div', { class: 'celeb-overlay flash' }, [built.card]);
    document.body.appendChild(overlay);
    playSfx(built.spec.sound);
    window.PMLConfetti && PMLConfetti.burst({ count: 70 });
    if (built.numEl && built.spec.numTo != null) setTimeout(function () { animateCount(built.numEl, built.spec.numFrom, built.spec.numTo); }, 180);
    setTimeout(function () { overlay.remove(); }, 1650);
  }

  // ---------- toast ----------
  function toast(msg, type) {
    if (!toastHost) return;
    var t = ce('div', { class: 'toast ' + (type || '') }, [msg]);
    toastHost.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; setTimeout(function () { t.remove(); }, 300); }, 2600);
  }

  // ---------- modal ----------
  function modal(node, opts) {
    opts = opts || {};
    playSfx('open');
    var prevFocus = document.activeElement;
    var back = ce('div', { class: 'modal-back', onclick: function (e) { if (e.target === back) close(); } });
    var box = ce('div', { class: 'modal pop', role: 'dialog', 'aria-modal': 'true', 'aria-label': opts.label || 'Dialog', tabindex: '-1' });
    var closeBtn = ce('button', { class: 'modal-close', 'aria-label': 'Close', onclick: close }, ['✕']);
    box.appendChild(closeBtn);
    box.appendChild(node);
    back.appendChild(box);
    document.body.appendChild(back);
    box.focus();
    function close() { back.remove(); document.removeEventListener('keydown', esc); if (prevFocus && prevFocus.focus) prevFocus.focus(); }
    function esc(e) { if (e.key === 'Escape') { e.preventDefault(); close(); } }
    document.addEventListener('keydown', esc);
    return { close: close, el: back };
  }

  // ---------- HOME ----------
  function home(root) {
    PML.store.rollover();
    var st = PML.daily.todayStatus();
    var s = PML.store.get();
    var li = PML.game.levelInfo(s.progress.xp);
    var nextId = PML.daily.nextNew();
    var nextMed = nextId ? PML.deck.get(nextId) : null;

    // ring
    var ring = ce('div', { class: 'ring' }, [ce('div', { class: 'inner' }, [ce('b', { text: st.progressPct + '%' }), ce('span', { class: 'dim', style: { fontSize: '.62rem' } }, ['daily goal'])])]);
    ring.style.setProperty('--p', st.progressPct);

    var learnBtn = ce('button', { class: 'btn primary lg', onclick: function () { if (nextId) startLearn([nextId]); } }, [nextMed ? '✨ Learn: ' + nextMed.generic : '✓ Deck complete']);
    if (!nextId) learnBtn.disabled = true;
    var reviewBtn = ce('button', { class: 'btn lg', onclick: function () { go('review'); } }, ['🔁 Review (' + st.reviewsDue + ' due)']);
    if (st.reviewsDue === 0) reviewBtn.classList.add('ghost');

    var hero = ce('div', { class: 'hero view' }, [
      ce('div', { class: 'card pad hero-card stack' }, [
        ce('div', { class: 'row spread wrap' }, [
          ce('div', {}, [
            ce('h1', {}, ['Good ' + partOfDay() + '.']),
            ce('p', { class: 'muted', style: { margin: 0 } }, [st.goalMet ? 'Daily goal complete — keep the streak alive.' : (nextMed ? 'One new med a day. Today: a ' + (nextMed.subclass || nextMed.class) + '.' : 'You have learned the whole deck. Keep reviewing to reach mastery.')]),
          ]),
          ring,
        ]),
        ce('div', { class: 'daily-actions' }, [learnBtn, reviewBtn]),
        ce('div', { class: 'row', style: { gap: '8px', flexWrap: 'wrap' } }, [
          ce('button', { class: 'btn sm ghost', onclick: pickFromClass }, ['🎯 Choose from a class']),
          ce('button', { class: 'btn sm ghost', onclick: function () { go('practice'); } }, ['🎮 Practice session']),
          ce('button', { class: 'btn sm ghost', onclick: searchPick }, ['🔍 Pick a specific med']),
        ]),
      ]),
      ce('div', { class: 'card pad stack' }, [
        ce('h3', {}, ['Level ' + li.level]),
        ce('div', { class: 'bar xpbar' }, [ce('span', { style: { width: Math.round(li.into / li.need * 100) + '%' } })]),
        ce('div', { class: 'row spread', style: { fontSize: '.8rem' } }, [ce('span', { class: 'muted' }, [li.into + ' / ' + li.need + ' XP']), ce('span', { class: 'muted' }, [s.progress.xp + ' total'])]),
        ce('div', { class: 'stat-tiles' }, [
          tile(st.learned, 'learned', 'of ' + PML.deck.count()),
          tile(s.progress.streak || 0, 'day streak'),
          tile(s.progress.weekXp || 0, 'XP this week', 'goal ' + (s.settings.weeklyXpGoal || 210)),
        ]),
      ]),
    ]);
    root.appendChild(hero);

    // quests
    var q = PML.game.refreshQuests();
    var questCard = ce('div', { class: 'card pad stack view', style: { marginTop: 'var(--sp-5)' } }, [ce('h3', {}, ['Today’s quests'])]);
    q.list.forEach(function (item) {
      questCard.appendChild(ce('div', { class: 'quest' + (item.done ? ' done' : '') }, [
        ce('span', { class: 'q-ico' }, [item.done ? '✅' : item.ico]),
        ce('div', { style: { flex: 1 } }, [ce('div', { style: { fontWeight: 600 } }, [item.text]), ce('div', { class: 'bar', style: { marginTop: '6px', height: '7px' } }, [ce('span', { style: { width: Math.min(100, item.progress / item.goal * 100) + '%' } })])]),
        ce('span', { class: 'chip' }, ['+' + item.reward + ' XP']),
      ]));
    });
    root.appendChild(questCard);

    // class mastery mini
    var cmCard = ce('div', { class: 'card pad stack view', style: { marginTop: 'var(--sp-5)' } }, [ce('div', { class: 'row spread' }, [ce('h3', { style: { margin: 0 } }, ['Class mastery']), ce('button', { class: 'btn sm ghost', onclick: function () { go('progress'); } }, ['See map →'])])]);
    var cm = ce('div', { class: 'stat-tiles' });
    PML.deck.classes().forEach(function (cls) {
      var m = PML.game.classMastery(cls);
      var key = PML.deck.classKey(cls);
      cm.appendChild(ce('div', { class: 'tile' }, [
        ce('div', { class: 'row', style: { gap: '6px' } }, [ce('span', { style: { width: '10px', height: '10px', borderRadius: '50%', background: 'var(--c-' + key + ')', display: 'inline-block' } }), ce('b', { style: { fontSize: '1rem' } }, [m.learned + '/' + m.total])]),
        ce('span', { text: cls }),
        ce('div', { class: 'bar', style: { marginTop: '6px', height: '6px' } }, [ce('span', { style: { width: Math.round(m.progress * 100) + '%', background: 'var(--c-' + key + ')' } })]),
      ]));
    });
    cmCard.appendChild(cm);
    root.appendChild(cmCard);

    root.appendChild(safetyBanner());
  }

  function tile(big, label, sub) {
    return ce('div', { class: 'tile' }, [ce('b', { text: String(big) }), ce('span', { text: label }), sub ? ce('div', { class: 'dim', style: { fontSize: '.7rem' } }, [sub]) : null]);
  }
  function partOfDay() { var h = new Date().getHours(); return h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening'; }

  function safetyBanner() {
    return ce('div', { class: 'safety-banner view' }, [ce('b', {}, ['Learning aid — not a prescribing reference.']), ' Verify against the current Health Canada product monograph before clinical use.']);
  }

  // ---------- learn / review flows ----------
  function startLearn(ids) {
    U.clear(main); setActiveNav('home');
    current.flash = null;
    var id = Array.isArray(ids) ? ids[0] : ids;
    PML.lesson.start(main, { id: id, onComplete: function () { go('home'); } });
  }
  function review(root) {
    var due = PML.srs.dueList();
    if (!due.length) {
      root.appendChild(ce('div', { class: 'card pad center view' }, [ce('div', { style: { fontSize: '3rem' } }, ['🌙']), ce('h2', {}, ['No reviews due']), ce('p', { class: 'muted' }, ['Your spaced-repetition queue is clear. Learn a new med or practice to keep sharp.']), ce('button', { class: 'btn primary', onclick: function () { go('home'); } }, ['Back home'])]));
      return;
    }
    current.flash = root;
    PML.flashcard.session(root, { ids: due, mode: 'review', onComplete: function () { go('home'); } });
  }

  function pickFromClass() {
    var list = ce('div', { class: 'stack' }, [ce('h2', {}, ['Learn a new one from…'])]);
    PML.deck.classes().forEach(function (cls) {
      var next = PML.daily.nextNewInClass(cls);
      var m = PML.game.classMastery(cls);
      var btn = ce('button', { class: 'btn block', style: { justifyContent: 'space-between' }, onclick: function () { if (next) { dlg.close(); startLearn([next]); } } }, [
        ce('span', {}, [cls]), ce('span', { class: 'muted' }, [next ? PML.deck.get(next).generic : 'all learned ✓']),
      ]);
      if (!next) btn.disabled = true;
      list.appendChild(btn);
    });
    var dlg = modal(list);
  }
  function searchPick() {
    var input = ce('input', { class: 'text-answer', placeholder: 'Search a medication…', oninput: run });
    var results = ce('div', { class: 'dex-grid', style: { marginTop: 'var(--sp-4)' } });
    var wrap = ce('div', { class: 'stack' }, [ce('h2', {}, ['Pick a medication to learn']), input, results]);
    var dlg = modal(wrap);
    input.focus();
    function run() {
      U.clear(results);
      PML.deck.search(input.value).slice(0, 24).forEach(function (m) {
        var c = PML.store.get().cards[m.id];
        results.appendChild(ce('div', { class: 'dex-card' + (c && c.learned ? '' : ''), style: { '--dexhue': 'var(--c-' + PML.deck.classKey(m.class) + ')' }, onclick: function () { dlg.close(); if (c && c.learned) { openDetail(m.id); } else { startLearn([m.id]); } } }, [
          ce('div', { class: 'gen' }, [m.generic]), ce('div', { class: 'sub' }, [m.subclass || m.class]),
          c && c.learned ? ce('span', { class: 'chip', style: { marginTop: '6px' } }, ['learned']) : ce('span', { class: 'chip', style: { marginTop: '6px', color: 'var(--honey)' } }, ['learn →']),
        ]));
      });
    }
    run();
  }

  function openDetail(id) { if (PML.wiki && PML.wiki.medPage) PML.wiki.medPage(id); else if (PML.catalog && PML.catalog.detail) PML.catalog.detail(id); }

  // ---------- settings ----------
  function settings() {
    var s = PML.store.get();
    var box = ce('div', { class: 'stack' }, [ce('h2', {}, ['Settings'])]);
    // profile
    if (s.profile) {
      box.appendChild(ce('div', { class: 'row spread', style: { alignItems: 'center' } }, [
        ce('div', { class: 'row', style: { gap: '10px' } }, [PML.profile.avatarEl(s.profile.avatar, 40), ce('div', {}, [ce('div', { style: { fontWeight: 700 } }, [s.profile.name]), ce('div', { class: 'dim', style: { fontSize: '.72rem' } }, ['Level ' + PML.game.levelInfo(s.progress.xp).level])])]),
        ce('button', { class: 'btn sm', onclick: function () { var m = box.closest && box.closest('.modal-back'); PML.profile.setup(function () { refreshHud(); if (m) m.remove(); settings(); }, s.profile); } }, ['Edit profile']),
      ]));
      box.appendChild(ce('hr', { style: { border: 0, borderTop: '1px solid var(--border)' } }));
    }
    box.appendChild(row('Sound effects', toggleEl(s.settings.sound, function (v) { s.settings.sound = v; PML.sfx.enabled = v; if (v) PML.sfx.correct(); PML.store.save(); })));
    box.appendChild(row('Tutorial narration (voice)', toggleEl(s.settings.voice !== false, function (v) { s.settings.voice = v; PML.store.save(); })));
    box.appendChild(ce('div', { class: 'row spread' }, [ce('span', {}, ['Guided tour']), ce('button', { class: 'btn sm', onclick: function () { U.qsa('.modal-back').forEach(function (x) { x.remove(); }); if (PML.tutorial) PML.tutorial.replay(); } }, ['▶ Replay tour'])]));
    box.appendChild(row('Daily goal (new/day)', selectEl(['1', '2', '3', '5'], String(s.settings.dailyGoal), function (v) { s.settings.dailyGoal = +v; PML.store.save(); })));
    box.appendChild(row('Weekly XP goal', selectEl(['140', '210', '350', '500'], String(s.settings.weeklyXpGoal), function (v) { s.settings.weeklyXpGoal = +v; PML.store.save(); })));
    box.appendChild(ce('hr', { style: { border: 0, borderTop: '1px solid var(--border)' } }));
    // backup
    box.appendChild(ce('h3', {}, ['Backup & transfer']));
    box.appendChild(ce('div', { class: 'row wrap' }, [
      ce('button', { class: 'btn', onclick: exportData }, ['⬇ Export backup (JSON)']),
      ce('button', { class: 'btn', onclick: importData }, ['⬆ Import backup']),
    ]));
    box.appendChild(ce('p', { class: 'dim', style: { fontSize: '.78rem' } }, ['Your progress is stored only in this browser. Export a backup before switching devices or clearing site data.']));
    box.appendChild(ce('hr', { style: { border: 0, borderTop: '1px solid var(--border)' } }));
    box.appendChild(ce('button', { class: 'btn ghost', style: { color: 'var(--coral)' }, onclick: resetData }, ['Reset all progress']));
    box.appendChild(ce('p', { class: 'dim', style: { fontSize: '.72rem' } }, ['Deck v' + (window.MEDS_META ? window.MEDS_META.generated : '?') + ' · ' + PML.deck.count() + ' medications. This is a study aid, not a prescribing reference.']));
    modal(box);
  }
  function row(label, control) { return ce('div', { class: 'row spread' }, [ce('span', { text: label }), control]); }
  function selectEl(opts, val, on) { var s = ce('select', { onchange: function () { on(s.value); } }); opts.forEach(function (o) { s.appendChild(ce('option', { value: o, text: o, selected: o === val ? 'selected' : null })); }); return s; }
  function toggleEl(val, on) { var b = ce('button', { class: 'btn sm', onclick: function () { val = !val; b.textContent = val ? 'On' : 'Off'; b.classList.toggle('primary', val); on(val); } }, [val ? 'On' : 'Off']); if (val) b.classList.add('primary'); return b; }

  function exportData() {
    var blob = new Blob([PML.store.exportJSON()], { type: 'application/json' });
    var a = ce('a', { href: URL.createObjectURL(blob), download: 'titrate-backup-' + U.todayKey() + '.json' });
    document.body.appendChild(a); a.click(); a.remove();
    toast('Backup downloaded', 'win');
  }
  function importData() {
    var inp = ce('input', { type: 'file', accept: 'application/json', style: { display: 'none' } });
    inp.addEventListener('change', function () {
      var f = inp.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () { try { PML.store.importJSON(r.result); PML.deck.init(); PML.store.initDeck(PML.deck.all()); refreshHud(); go('home'); toast('Backup restored', 'win'); } catch (e) { alert('Import failed: ' + e.message); } };
      r.readAsText(f);
    });
    document.body.appendChild(inp); inp.click(); inp.remove();
  }
  function resetData() {
    if (!confirm('Reset ALL progress (profile, streak, XP, learned meds)? This cannot be undone. Consider exporting a backup first.')) return;
    PML.store.reset(); PML.deck.init(); PML.store.initDeck(PML.deck.all());
    U.qsa('.modal-back').forEach(function (m) { m.remove(); });
    refreshHud(); go('home');
    PML.profile.setup(function () { refreshHud(); go('home'); });  // re-run first-run profile setup
  }

  // ---------- view registry ----------
  var VIEWS = {
    home: home,
    review: review,
    practice: function (root, p) { PML.practice ? PML.practice.view(root, p) : placeholder(root, 'practice'); },
    wiki: function (root, p) { PML.wiki ? PML.wiki.view(root, p) : placeholder(root, 'wiki'); },
    catalog: function (root, p) { PML.wiki ? PML.wiki.view(root, p) : (PML.catalog ? PML.catalog.view(root, p) : placeholder(root, 'catalog')); },
    compare: function (root, p) { PML.compare ? PML.compare.view(root, p) : placeholder(root, 'compare'); },
    cram: function (root, p) { PML.cram ? PML.cram.view(root, p) : placeholder(root, 'cram'); },
    progress: function (root, p) { PML.progress ? PML.progress.view(root, p) : placeholder(root, 'progress'); },
  };

  // ---------- init ----------
  function init() {
    applyTheme();
    if (!PML.sfx) PML.sfx = window.PMLSfx || { enabled: false };
    PML.sfx.enabled = !!PML.store.get().settings.sound;

    var topbar = ce('header', { class: 'topbar' }, [
      ce('div', { class: 'topbar-inner' }, [
        ce('button', { class: 'brand', onclick: function () { go('home'); } }, [
          ce('span', { class: 'logo' }, ['ψ']),
          ce('span', {}, ['Titrate']),
        ]),
        hudEl = ce('div', { class: 'hud' }),
        ce('button', { class: 'btn sm ghost', 'aria-label': 'Replay tutorial', title: 'Replay the tour', onclick: function () { if (PML.tutorial) PML.tutorial.replay(); } }, ['?']),
        ce('button', { class: 'btn sm ghost', 'aria-label': 'Settings', onclick: settings }, ['⚙']),
      ]),
    ]);
    navEl = ce('nav', { class: 'nav' });
    NAV.forEach(function (n) { navEl.appendChild(ce('button', { 'data-view': n[0], onclick: function () { go(n[0]); } }, [n[2] + ' ' + n[1]])); });

    var app = ce('div', { class: 'app' }, [navEl, main = ce('main', { id: 'main', tabindex: '-1' })]);
    toastHost = ce('div', { class: 'toast-host' });
    var skip = ce('a', { href: '#main', class: 'skip-link', onclick: function (e) { e.preventDefault(); main.focus(); main.scrollIntoView(); } }, ['Skip to content']);
    document.body.appendChild(skip);
    document.body.appendChild(topbar);
    document.body.appendChild(app);
    document.body.appendChild(toastHost);

    document.addEventListener('keydown', function (e) {
      if (PML.flashcard && current.flash) PML.flashcard.key(e);
      if (PML.practice && PML.practice.key) PML.practice.key(e);
    });
    // tactile tap sound on interactive elements (answer buttons + nav have their own sounds)
    document.addEventListener('click', function (e) {
      if (!sfxOn() || !e.target.closest) return;
      var t = e.target.closest('.btn, .dex-card, .chip.wikilink, .avatar-choice, .match-item, .word-tile, .modal-close, .quest');
      if (t && !t.classList.contains('opt')) PML.sfx.tap();
    }, true);

    refreshHud();
    go('home');

    // First run: no profile yet → profile setup → offer the tour. Returning users who haven't
    // seen the tour get offered it once too.
    if (!PML.store.get().profile && PML.profile) {
      PML.profile.setup(function () { refreshHud(); go('home'); if (PML.tutorial) PML.tutorial.offerFirstRun(); });
    } else if (PML.tutorial && !PML.store.get().settings.tutorialSeen) {
      PML.tutorial.offerFirstRun();
    }
  }

  PML.ui = {
    init: init, go: go, refreshHud: refreshHud, celebrate: celebrate, toast: toast, modal: modal,
    currentFlash: function () { return current.flash; }, openDetail: openDetail, startLearn: startLearn,
    moment: enqueueMoment, celebActive: celebActive,
  };
  PML.sfxOn = sfxOn;
})();
