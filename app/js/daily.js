/* daily.js — the daily engine: which new card today (seeded fixed order), learning a new med,
 * and streak/goal bookkeeping. A manual pick counts as the day's new card. Streak increments
 * when the daily goal is met: >=dailyGoal new learned OR all due reviews cleared. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;

  function order() { return PML.store.get().seededOrder || []; }
  function isLearned(id) { var c = PML.store.get().cards[id]; return c && c.learned; }

  // What to learn next now comes from the PATH (tree.js): the shallowest unlearned node, basics
  // first across classes. seededOrder is kept only as a legacy fallback (import compat / no tree).
  function nextNew() {
    if (PML.tree && PML.tree.frontier) return PML.tree.frontier();
    var o = order();
    for (var i = 0; i < o.length; i++) if (!isLearned(o[i])) return o[i];
    return null;
  }
  function nextNewInClass(cls) {
    if (PML.tree && PML.tree.nextInClass) return PML.tree.nextInClass(cls);
    var o = order();
    for (var i = 0; i < o.length; i++) {
      var m = PML.deck.get(o[i]);
      if (m && m.class === cls && !isLearned(o[i])) return o[i];
    }
    return null;
  }
  function unlearnedCount() { return order().filter(function (id) { return !isLearned(id); }).length; }

  // Learn a med now. counts toward today's new-card goal + streak. Returns events.
  function learnNew(id) {
    var c = PML.store.get().cards[id];
    var events = { alreadyLearned: !!(c && c.learned) };
    if (events.alreadyLearned) return events;
    PML.srs.markLearned(id);
    var p = PML.store.get().progress;
    p.newToday = (p.newToday || 0) + 1;
    if (p.activeDays.indexOf(U.todayKey()) < 0) p.activeDays.push(U.todayKey());
    events.xp = PML.game.addXp(18);
    events.quests = PML.game.noteQuest('learn', 1);
    events.goal = checkGoal();
    events.achievements = PML.game.checkAchievements();
    PML.store.save();
    return events;
  }

  // Call when the due-review queue reaches empty (reviews cleared).
  function markReviewsCleared() {
    var p = PML.store.get().progress;
    if (PML.srs.dueCount() === 0) {
      p.reviewsClearedToday = true;
      PML.game.noteQuest('reviewsCleared', 1);
      var g = checkGoal();
      PML.store.save();
      return g;
    }
    return null;
  }

  // Evaluate the daily goal; if newly met today, advance the streak. Returns {met, justMet, streak}.
  function checkGoal() {
    var p = PML.store.get().progress;
    var goalMet = (p.newToday >= (PML.store.get().settings.dailyGoal || 1)) || p.reviewsClearedToday;
    var justMet = false, prev = p.streak || 0;
    if (goalMet && p.lastGoalDay !== U.todayKey()) {
      // continuity already ensured by store.rollover (freezes/reset). Advance streak.
      p.streak = prev + 1;
      p.longestStreak = Math.max(p.longestStreak || 0, p.streak);
      p.lastGoalDay = U.todayKey();
      justMet = true;
      PML.store.save();
    }
    return { met: goalMet, justMet: justMet, streak: p.streak, prev: prev };
  }

  function todayStatus() {
    var s = PML.store.get();
    var p = s.progress;
    var goal = s.settings.dailyGoal || 1;
    var due = PML.srs.dueCount();
    var goalMet = (p.newToday >= goal) || p.reviewsClearedToday;
    // progress ring: blend of new-learned progress and reviews
    var newFrac = Math.min(1, (p.newToday || 0) / goal);
    return {
      newToday: p.newToday || 0, dailyGoal: goal, reviewsDue: due,
      reviewsCleared: p.reviewsClearedToday, goalMet: goalMet, streak: p.streak || 0,
      progressPct: Math.round((goalMet ? 1 : newFrac) * 100),
      unlearned: unlearnedCount(), learned: PML.deck.count() - unlearnedCount(),
    };
  }

  PML.daily = {
    nextNew: nextNew, nextNewInClass: nextNewInClass, unlearnedCount: unlearnedCount,
    learnNew: learnNew, markReviewsCleared: markReviewsCleared, checkGoal: checkGoal, todayStatus: todayStatus,
  };
})();
