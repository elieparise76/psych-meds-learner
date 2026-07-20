/* srs.js — SM-2 lite spaced repetition (see ARCHITECTURE.md).
 * Quality map: Again=2, Hard=3, Good=4, Easy=5. Lapse (q<3) resets reps and interval=1.
 * A newly learned card becomes due the day after it is first learned. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;

  var Q = { again: 2, hard: 3, good: 4, easy: 5 };

  function review(id, q) {
    var c = PML.store.card(id);
    var s = c.srs;
    if (q < 3) {
      s.reps = 0;
      s.interval = 1;
    } else {
      if (s.reps === 0) s.interval = 1;
      else if (s.reps === 1) s.interval = 6;
      else s.interval = Math.round(s.interval * s.ef);
      s.reps += 1;
    }
    s.ef = s.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (s.ef < 1.3) s.ef = 1.3;
    s.due = U.addDaysKey(U.todayKey(), s.interval);
    c.lastReviewed = U.todayKey();
    PML.store.save();
    return s;
  }

  // Mark a med as learned for the first time; it enters review tomorrow.
  function markLearned(id) {
    var c = PML.store.card(id);
    if (c.learned) return c;
    c.learned = true;
    c.learnedAt = U.todayKey();
    c.srs.reps = 0;
    c.srs.interval = 0;
    c.srs.due = U.addDaysKey(U.todayKey(), 1);
    PML.store.get().stats.learnedCount = Object.keys(PML.store.get().cards).filter(function (k) { return PML.store.get().cards[k].learned; }).length;
    PML.store.save();
    return c;
  }

  function isDue(id) {
    var c = PML.store.get().cards[id];
    if (!c || !c.learned || !c.srs.due) return false;
    return U.daysBetween(c.srs.due, U.todayKey()) >= 0; // due today or overdue
  }

  function dueList() {
    var cards = PML.store.get().cards;
    return Object.keys(cards).filter(isDue).sort(function (a, b) {
      return U.daysBetween(cards[b].srs.due, U.todayKey()) - U.daysBetween(cards[a].srs.due, U.todayKey());
    });
  }

  function dueCount() { return dueList().length; }

  // human-friendly "next review" label
  function nextLabel(id) {
    var c = PML.store.get().cards[id];
    if (!c || !c.learned || !c.srs.due) return '—';
    var d = U.daysBetween(U.todayKey(), c.srs.due);
    if (d <= 0) return 'due now';
    if (d === 1) return 'tomorrow';
    return 'in ' + d + ' days';
  }

  PML.srs = { review: review, markLearned: markLearned, isDue: isDue, dueList: dueList, dueCount: dueCount, nextLabel: nextLabel, Q: Q };
})();
