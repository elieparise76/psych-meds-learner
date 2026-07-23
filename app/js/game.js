/* game.js — progression engine: XP/levels, session combo, per-med mastery tiers, achievements,
 * and daily quests. Holds the RULES; state lives in PML.store. UI (header, celebrations) reads
 * events returned from here. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;

  // ---------- XP & levels ----------
  function xpForLevelUp(level) { return 80 + (level - 1) * 45; }      // xp needed to go from `level` to level+1
  function levelInfo(xp) {
    var level = 1, need = xpForLevelUp(1), acc = 0;
    while (xp >= acc + need) { acc += need; level++; need = xpForLevelUp(level); }
    return { level: level, into: xp - acc, need: need, floor: acc };
  }

  var EX_XP = { mcq: 8, type: 12, matching: 10, build: 11, reverse: 9, cloze: 9, confusable: 8, vignette: 16, flash: 0 };
  function exerciseXp(type, correct) {
    if (!correct) return 2;                       // non-punishing consolation
    return EX_XP[type] != null ? EX_XP[type] : 8;
  }

  // ---------- session combo ----------
  var combo = { count: 0, best: 0 };
  function comboMult() { return 1 + Math.min(combo.count, 10) * 0.1; }  // up to 2x
  function resetCombo() { combo.count = 0; }
  function comboState() { return combo; }

  // ---------- add XP ----------
  function addXp(amount) {
    var p = PML.store.get().progress;
    var before = levelInfo(p.xp).level;
    p.xp += amount; p.weekXp += amount; p.xpToday += amount;
    var after = levelInfo(p.xp).level;
    PML.store.save();
    return { xp: amount, leveled: after > before, from: before, to: after };
  }

  // ---------- mastery tiers ----------
  var TIERS = ['none', 'bronze', 'silver', 'gold', 'burnished'];
  function computeMastery(c) {
    if (!c.learned) return 'none';
    var acc = c.seen ? c.correct / c.seen : 0;
    if (c.seen >= 20 && acc >= 0.92 && c.srs.interval >= 21) return 'burnished';
    if (c.seen >= 12 && acc >= 0.85 && c.srs.reps >= 3) return 'gold';
    if (c.seen >= 6 && acc >= 0.7) return 'silver';
    return 'bronze';
  }
  function tierRank(t) { return TIERS.indexOf(t); }

  // ---------- record a Practice/Flashcard answer ----------
  function recordAnswer(id, exType, correct, tags) {
    var c = PML.store.card(id);
    var st = PML.store.get().stats;
    st.answered = (st.answered || 0) + 1;
    c.seen++;
    if (correct) { c.correct++; c.streakCorrect++; st.correct = (st.correct || 0) + 1; combo.count++; }
    else { c.wrong++; c.streakCorrect = 0; combo.count = 0; markLapseWeek(); }
    combo.best = Math.max(combo.best, combo.count);
    st.bestCombo = Math.max(st.bestCombo || 0, combo.best);

    if (exType) {
      if (!c.ex[exType]) c.ex[exType] = { seen: 0, correct: 0 };
      c.ex[exType].seen++; if (correct) c.ex[exType].correct++;
    }
    // difficulty prior decays toward measured accuracy as evidence accrues
    var measured = c.seen ? c.correct / c.seen : 0.5;
    var w = Math.min(c.seen, 10) / 12;
    c.difficulty = (1 - w) * c.difficulty + w * (1 - measured);

    // tag counters (e.g., serotonin syndrome) for themed achievements
    if (correct && tags && tags.length) {
      st.tags = st.tags || {};
      tags.forEach(function (t) { st.tags[t] = (st.tags[t] || 0) + 1; });
    }
    if (correct && exType === 'vignette') st.vignetteAces = (st.vignetteAces || 0) + 1;

    var beforeTier = c.mastery;
    c.mastery = computeMastery(c);
    var masteryUp = tierRank(c.mastery) > tierRank(beforeTier) ? c.mastery : null;

    var xpEv = addXp(Math.round(exerciseXp(exType, correct) * comboMult()));
    var newAch = checkAchievements();
    PML.store.save();
    return { correct: correct, xp: xpEv.xp, leveled: xpEv.leveled, level: xpEv.to, combo: combo.count, masteryUp: masteryUp, achievements: newAch };
  }

  function markLapseWeek() {
    var p = PML.store.get().progress;
    p.lapseWeekKey = U.weekKey();
    p.lapsesThisWeek = (p.lapseWeekKey === p._lapseWk ? (p.lapsesThisWeek || 0) : 0) + 1;
    p._lapseWk = p.lapseWeekKey;
  }

  // ---------- class mastery aggregate ----------
  function classMastery(cls) {
    var cards = PML.store.get().cards;
    var members = PML.deck.byClass(cls);
    var learned = 0, gold = 0, sumTier = 0;
    members.forEach(function (m) {
      var c = cards[m.id]; if (!c) return;
      if (c.learned) learned++;
      if (tierRank(c.mastery) >= 3) gold++;
      sumTier += tierRank(c.mastery);
    });
    var maxTier = members.length * 4;
    return { total: members.length, learned: learned, gold: gold, progress: maxTier ? sumTier / maxTier : 0 };
  }

  // ---------- achievements ----------
  var ACH = [
    { id: 'first_step', emoji: '🌱', title: 'First Dose', desc: 'Learn your first medication.', test: function (x) { return x.learned >= 1; } },
    { id: 'ten_learned', emoji: '📚', title: 'Ward Rounds', desc: 'Learn 10 medications.', test: function (x) { return x.learned >= 10; } },
    { id: 'quarter_deck', emoji: '🧠', title: 'Building the Formulary', desc: 'Learn 30 medications.', test: function (x) { return x.learned >= 30; } },
    { id: 'half_deck', emoji: '⚗️', title: 'Half-Life', desc: 'Learn half the deck.', test: function (x) { return x.learned >= x.total / 2; } },
    { id: 'full_deck', emoji: '🏆', title: 'Pharmacopoeia', desc: 'Learn every medication.', test: function (x) { return x.total > 0 && x.learned >= x.total; } },
    { id: 'all_ssris', emoji: '💊', title: 'SSRI Sweep', desc: 'Learn every SSRI.', test: function (x) { return x.subclassAll('SSRI'); } },
    { id: 'all_benzos', emoji: '😴', title: 'GABA Guru', desc: 'Learn every benzodiazepine.', test: function (x) { return x.subclassAllMatch('Benzodiazepine'); } },
    { id: 'streak_3', emoji: '🔥', title: 'Warming Up', desc: '3-day streak.', test: function (x) { return x.streak >= 3; } },
    { id: 'streak_7', emoji: '🔥', title: 'Week on Call', desc: '7-day streak.', test: function (x) { return x.streak >= 7; } },
    { id: 'streak_30', emoji: '🌋', title: 'Attending Stamina', desc: '30-day streak.', test: function (x) { return x.streak >= 30; } },
    { id: 'combo_10', emoji: '⚡', title: 'On a Roll', desc: '10-answer combo in one session.', test: function (x) { return x.bestCombo >= 10; } },
    { id: 'vignette_10', emoji: '🩺', title: 'Board Ready', desc: 'Ace 10 vignettes.', test: function (x) { return x.vignetteAces >= 10; } },
    { id: 'serotonin_sensei', emoji: '🧪', title: 'Serotonin-Syndrome Sensei', desc: 'Ace 8 serotonin-syndrome items.', test: function (x) { return (x.tags.serotonin || 0) >= 8; } },
    { id: 'first_gold', emoji: '🥇', title: 'Gold Standard', desc: 'Take a med to Gold mastery.', test: function (x) { return x.anyTier(3); } },
    { id: 'burnished', emoji: '💎', title: 'Burnished', desc: 'Reach the top mastery tier on a med.', test: function (x) { return x.anyTier(4); } },
    { id: 'level_5', emoji: '⭐', title: 'Level 5', desc: 'Reach level 5.', test: function (x) { return x.level >= 5; } },
    { id: 'level_10', emoji: '🌟', title: 'Level 10', desc: 'Reach level 10.', test: function (x) { return x.level >= 10; } },
    { id: 'no_lapse_week', emoji: '🎯', title: 'Clean Week', desc: 'Answer 25+ in a week with no lapses.', test: function (x) { return x.weekAnswered >= 25 && (x.lapsesThisWeek || 0) === 0; } },
    { id: 'cram_run', emoji: '🏁', title: 'Crammer', desc: 'Finish a cram run.', test: function (x) { return (x.cramRuns || 0) >= 1; } },
    // roadmap achievements
    { id: 'first_review', emoji: '📝', title: 'Checked', desc: 'Pass your first row review.', test: function (x) { return x.reviewsPassed >= 1; } },
    { id: 'ten_reviews', emoji: '🧾', title: 'Consolidator', desc: 'Pass 10 row reviews.', test: function (x) { return x.reviewsPassed >= 10; } },
    { id: 'all_reviews', emoji: '🎓', title: 'Fully Reviewed', desc: 'Pass every row review on the roadmap.', test: function (x) { return x.reviewsTotal > 0 && x.reviewsPassed >= x.reviewsTotal; } },
    { id: 'first_chapter', emoji: '🧱', title: 'Foundations', desc: 'Complete a whole chapter of the roadmap.', test: function (x) { return x.chaptersComplete >= 1; } },
    { id: 'all_chapters', emoji: '🗺️', title: 'Cartographer', desc: 'Complete every chapter of the roadmap.', test: function (x) { return x.chaptersTotal > 0 && x.chaptersComplete >= x.chaptersTotal; } },
    { id: 'first_class', emoji: '🏵️', title: 'Class Act', desc: 'Learn every medication in a drug class.', test: function (x) { return x.classesComplete >= 1; } },
    { id: 'keystone_gold', emoji: '💠', title: 'Keystone', desc: 'Take a keystone medication to Gold mastery.', test: function (x) { return !!x.keystoneGold; } },
  ];

  function achContext() {
    var s = PML.store.get();
    var cards = s.cards;
    var ids = Object.keys(cards);
    var learned = ids.filter(function (i) { return cards[i].learned; }).length;
    var tiers = ids.map(function (i) { return tierRank(cards[i].mastery); });
    // roadmap metrics (chapters/classes complete, reviews passed, keystones at gold)
    var chaptersTotal = 0, chaptersComplete = 0, classesComplete = 0, reviewsTotal = 0, keystoneGold = false;
    if (PML.tree && PML.tree.chapters) {
      var chs = PML.tree.chapters(); chaptersTotal = chs.length;
      chs.forEach(function (ch) { if (ch.total && ch.learned === ch.total) chaptersComplete++; });
      PML.tree.branches().forEach(function (b) {
        reviewsTotal += b.tiers.length;
        var pr = PML.tree.branchProgress(b); if (pr.total && pr.learned === pr.total) classesComplete++;
      });
    }
    var reviewsPassed = Object.keys(s.progress.reviews || {}).length;
    var ksMap = (window.CURRICULUM && window.CURRICULUM.keystones) || {};
    Object.keys(ksMap).forEach(function (id) { if (cards[id] && tierRank(cards[id].mastery) >= 3) keystoneGold = true; });
    return {
      learned: learned, total: PML.deck.count(),
      streak: s.progress.streak, level: levelInfo(s.progress.xp).level,
      bestCombo: (s.stats.bestCombo || 0), vignetteAces: (s.stats.vignetteAces || 0),
      tags: s.stats.tags || {}, cramRuns: s.stats.cramRuns || 0,
      weekAnswered: s.stats.weekAnswered || 0, lapsesThisWeek: s.progress.lapsesThisWeek || 0,
      chaptersTotal: chaptersTotal, chaptersComplete: chaptersComplete, classesComplete: classesComplete,
      reviewsPassed: reviewsPassed, reviewsTotal: reviewsTotal, keystoneGold: keystoneGold,
      anyTier: function (r) { return tiers.some(function (t) { return t >= r; }); },
      subclassAll: function (sub) {
        var ms = PML.deck.all().filter(function (m) { return (m.subclass || '') === sub || (m.subclass || '').indexOf(sub) === 0; });
        return ms.length > 0 && ms.every(function (m) { return cards[m.id] && cards[m.id].learned; });
      },
      subclassAllMatch: function (frag) {
        var ms = PML.deck.all().filter(function (m) { return (m.subclass || '').indexOf(frag) >= 0; });
        return ms.length > 0 && ms.every(function (m) { return cards[m.id] && cards[m.id].learned; });
      },
    };
  }

  function checkAchievements() {
    var s = PML.store.get();
    var ctx = achContext();
    var newly = [];
    ACH.forEach(function (a) {
      if (!s.achievements[a.id] && a.test(ctx)) { s.achievements[a.id] = new Date().toISOString(); newly.push(a); }
    });
    if (newly.length) PML.store.save();
    return newly;
  }

  function achievements() {
    var s = PML.store.get();
    return ACH.map(function (a) { return { id: a.id, emoji: a.emoji, title: a.title, desc: a.desc, unlocked: !!s.achievements[a.id], at: s.achievements[a.id] || null }; });
  }

  // ---------- daily quests ----------
  var QUEST_POOL = [
    { id: 'learn1', ico: '✨', text: 'Learn 1 new medication', goal: 1, type: 'learn' },
    { id: 'vignette2', ico: '🩺', text: 'Answer 2 vignettes', goal: 2, type: 'vignette' },
    { id: 'reviews', ico: '🔁', text: 'Clear all due reviews', goal: 1, type: 'reviewsCleared' },
    { id: 'practice10', ico: '🎯', text: 'Answer 10 practice questions', goal: 10, type: 'answer' },
    { id: 'combo5', ico: '⚡', text: 'Hit a 5-answer combo', goal: 5, type: 'combo' },
    { id: 'antipsy5', ico: '🧠', text: 'Review 5 antipsychotics', goal: 5, type: 'classAnswer', cls: 'Antipsychotic' },
  ];
  function refreshQuests() {
    var s = PML.store.get();
    var dk = U.todayKey();
    if (s.quests.dayKey === dk && s.quests.list.length) return s.quests;
    var seed = 0; for (var i = 0; i < dk.length; i++) seed = (seed * 31 + dk.charCodeAt(i)) >>> 0;
    var chosen = U.shuffleSeeded(QUEST_POOL, seed).slice(0, 3);
    s.quests = { dayKey: dk, list: chosen.map(function (q) { return { id: q.id, ico: q.ico, text: q.text, goal: q.goal, type: q.type, cls: q.cls || null, progress: 0, done: false, reward: 20 }; }) };
    PML.store.save();
    return s.quests;
  }
  function noteQuest(type, amount, meta) {
    var s = PML.store.get();
    refreshQuests();
    var changed = [];
    s.quests.list.forEach(function (q) {
      if (q.done) return;
      var hit = false;
      if (q.type === type) {
        if (q.type === 'classAnswer') { if (meta && meta.cls === q.cls) hit = true; }
        else if (q.type === 'combo') { q.progress = Math.max(q.progress, amount || 0); if (q.progress >= q.goal) hit = true; }
        else hit = true;
      }
      if (hit && q.type !== 'combo') q.progress += (amount || 1);
      if (!q.done && q.progress >= q.goal) { q.done = true; changed.push(q); addXp(q.reward); }
    });
    if (changed.length) PML.store.save();
    return changed;
  }

  PML.game = {
    levelInfo: levelInfo, xpForLevelUp: xpForLevelUp, addXp: addXp, exerciseXp: exerciseXp,
    comboMult: comboMult, resetCombo: resetCombo, comboState: comboState,
    recordAnswer: recordAnswer, computeMastery: computeMastery, tierRank: tierRank, TIERS: TIERS,
    classMastery: classMastery, checkAchievements: checkAchievements, achievements: achievements,
    refreshQuests: refreshQuests, noteQuest: noteQuest,
  };
})();
