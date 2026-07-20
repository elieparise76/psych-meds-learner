/* store.js — versioned per-user state in localStorage. The app never writes to window.MEDS;
 * all progress lives here, keyed by med id. Provides day/week rollover, streak-freeze,
 * and JSON export/import. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var KEY = 'pml.state.v1';
  var SAVE_DELAY = 400;

  var state = null;
  var saveTimer = null;

  function defaults() {
    return {
      version: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      seed: (Math.floor(Math.random() * 2147483647) >>> 0) || 12345,
      seededOrder: [],
      settings: { theme: 'dark', sound: false, dailyGoal: 1, weeklyXpGoal: 210, motion: 'auto' },
      cards: {},           // id -> card progress
      progress: {
        xp: 0, level: 1, streak: 0, longestStreak: 0,
        lastGoalDay: null, streakFreezes: 2, freezeDays: [], activeDays: [],
        todayKey: null, newToday: 0, reviewsClearedToday: false, xpToday: 0,
        weekKey: null, weekXp: 0,
      },
      achievements: {},    // id -> ISO date
      quests: { dayKey: null, list: [] },
      stats: { answered: 0, correct: 0, bestCombo: 0, sessions: 0, learnedCount: 0 },
    };
  }

  function newCard(id, difficulty) {
    return {
      id: id,
      learned: false, learnedAt: null,
      srs: { ef: 2.5, interval: 0, reps: 0, due: null },
      seen: 0, correct: 0, wrong: 0, streakCorrect: 0,
      lastReviewed: null, mastery: 'none',
      difficulty: difficulty != null ? difficulty : 0.5,   // decays toward measured accuracy
      ex: {},   // exerciseType -> { seen, correct }
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      state = raw ? JSON.parse(raw) : defaults();
    } catch (e) { state = defaults(); }
    // shallow-merge any newly added default keys
    var d = defaults();
    Object.keys(d).forEach(function (k) { if (state[k] == null) state[k] = d[k]; });
    Object.keys(d.progress).forEach(function (k) { if (state.progress[k] == null) state.progress[k] = d.progress[k]; });
    Object.keys(d.settings).forEach(function (k) { if (state.settings[k] == null) state.settings[k] = d.settings[k]; });
    return state;
  }

  function save(now) {
    if (!state) return;
    state.updatedAt = new Date().toISOString();
    clearTimeout(saveTimer);
    if (now) { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} return; }
    saveTimer = setTimeout(function () {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    }, SAVE_DELAY);
  }

  function get() { return state; }

  // Build the fixed seeded order + per-card records for the whole deck.
  function initDeck(meds) {
    var ids = meds.map(function (m) { return m.id; });
    if (!state.seededOrder || state.seededOrder.length === 0) {
      state.seededOrder = U.shuffleSeeded(ids, state.seed);
    } else {
      // append any newly added meds (deck regenerated) to the end of the order
      var known = {}; state.seededOrder.forEach(function (i) { known[i] = 1; });
      var extra = U.shuffleSeeded(ids.filter(function (i) { return !known[i]; }), state.seed + 7);
      state.seededOrder = state.seededOrder.filter(function (i) { return ids.indexOf(i) >= 0; }).concat(extra);
    }
    meds.forEach(function (m) {
      if (!state.cards[m.id]) state.cards[m.id] = newCard(m.id, (m._meta && m._meta.difficultyPrior));
    });
    save(true);
  }

  function card(id) {
    if (!state.cards[id]) state.cards[id] = newCard(id, 0.5);
    return state.cards[id];
  }

  // ---- day / week rollover, streak + streak-freeze ----
  function rollover() {
    var p = state.progress;
    var tk = U.todayKey();
    if (p.todayKey === tk) return;

    // Weekly XP reset
    var wk = U.weekKey();
    if (p.weekKey !== wk) { p.weekKey = wk; p.weekXp = 0; }

    if (p.todayKey) {
      // gap handling: if the last goal day was 2+ days ago, consume freezes for missed days
      var lastGoal = p.lastGoalDay;
      if (lastGoal) {
        var gap = U.daysBetween(lastGoal, tk);
        if (gap >= 2) {
          var missed = gap - 1;
          for (var i = 0; i < missed; i++) {
            if (p.streakFreezes > 0) { p.streakFreezes--; p.freezeDays.push(U.addDaysKey(lastGoal, i + 1)); }
            else { p.streak = 0; break; }
          }
        }
      }
    }
    p.todayKey = tk;
    p.newToday = 0;
    p.reviewsClearedToday = false;
    p.xpToday = 0;
    save(true);
    if (PML.game && PML.game.refreshQuests) PML.game.refreshQuests();
  }

  // ---- export / import ----
  function exportJSON() {
    return JSON.stringify(state, null, 2);
  }
  function importJSON(text) {
    var obj = JSON.parse(text);
    if (!obj || typeof obj !== 'object' || !obj.progress || !obj.cards) throw new Error('Not a valid backup file.');
    state = obj;
    // merge in any newly added default keys without clobbering imported data
    var d = defaults();
    Object.keys(d).forEach(function (k) { if (state[k] == null) state[k] = d[k]; });
    Object.keys(d.progress).forEach(function (k) { if (state.progress[k] == null) state.progress[k] = d.progress[k]; });
    Object.keys(d.settings).forEach(function (k) { if (state.settings[k] == null) state.settings[k] = d.settings[k]; });
    save(true);
    return state;
  }
  function reset() { state = defaults(); save(true); return state; }

  PML.store = {
    load: load, save: save, get: get, initDeck: initDeck, card: card,
    rollover: rollover, exportJSON: exportJSON, importJSON: importJSON, reset: reset,
    newCard: newCard, KEY: KEY,
  };
})();
