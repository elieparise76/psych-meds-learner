/* tree.js — the learning PATH engine (PML.tree). PURE DERIVATION over window.CURRICULUM +
 * per-card `learned` state. Holds no state of its own except boss completion (progress.bosses).
 *
 * Unlock model (see curriculum.js): a branch's tier 0 ("the basics") is open from the start;
 * tier i opens once `gate` (default 50%, min 1) of tier i-1 is learned. `specialist` branches
 * stay locked until `specialistAtLearned` meds are learned anywhere. A branch's boss unlocks at
 * `bossAt` of the branch learned. Because unlock is derived from `learned`, a returning user's
 * meds light up automatically — no migration, no reset — while frontier() always points at the
 * shallowest unlearned node so everyone re-enters the path at the beginning. */
(function () {
  'use strict';
  var PML = window.PML;

  function C() { return window.CURRICULUM || { branches: [], keystones: {} }; }
  function cards() { return PML.store.get().cards; }
  function isLearned(id) { var c = cards()[id]; return !!(c && c.learned); }

  function branches() { return C().branches || []; }

  // id -> { b, ti, tier } index, built lazily (curriculum is static)
  var _index = null;
  function index() {
    if (_index) return _index;
    _index = {};
    branches().forEach(function (b) {
      b.tiers.forEach(function (tier, ti) {
        tier.nodes.forEach(function (id) { _index[id] = { b: b, ti: ti, tier: tier }; });
      });
    });
    return _index;
  }
  function locate(id) { return index()[id] || null; }
  function branchById(id) { for (var i = 0; i < branches().length; i++) if (branches()[i].id === id) return branches()[i]; return null; }
  function branchByClass(cls) { for (var i = 0; i < branches().length; i++) if (branches()[i].class === cls) return branches()[i]; return null; }

  function learnedIn(nodes) { var n = 0; nodes.forEach(function (id) { if (isLearned(id)) n++; }); return n; }
  function totalLearned() { var cs = cards(); return Object.keys(cs).filter(function (k) { return cs[k].learned; }).length; }

  // ---- gating ----
  function gateCount(tier) { return Math.max(1, Math.ceil(tier.nodes.length * (C().gate || 0.5))); }

  function branchUnlocked(b) {
    if (!b) return false;
    if (!b.specialist) return true;
    return totalLearned() >= (C().specialistAtLearned || 5);
  }
  function branchUnlockReason(b) {
    var need = (C().specialistAtLearned || 5) - totalLearned();
    return need > 0 ? 'Learn ' + need + ' more med' + (need === 1 ? '' : 's') + ' to unlock ' + b.title + '.' : '';
  }

  function tierUnlocked(b, i) {
    if (!branchUnlocked(b)) return false;
    if (i <= 0) return true;
    var prev = b.tiers[i - 1];
    return learnedIn(prev.nodes) >= gateCount(prev);
  }
  function tierLockReason(b, i) {
    if (!branchUnlocked(b)) return branchUnlockReason(b);
    if (i <= 0) return '';
    var prev = b.tiers[i - 1];
    var need = gateCount(prev) - learnedIn(prev.nodes);
    if (need <= 0) return '';
    return 'Learn ' + need + ' more in “' + prev.title + '” to unlock.';
  }

  // ---- node state ----
  // 'learned' | 'available' | 'locked'  (frontier/current + due are separate flags for the UI)
  function nodeState(id) {
    var loc = locate(id);
    if (!loc) return isLearned(id) ? 'learned' : 'locked';
    if (isLearned(id)) return 'learned';
    return (branchUnlocked(loc.b) && tierUnlocked(loc.b, loc.ti)) ? 'available' : 'locked';
  }
  function isDue(id) { return !!(PML.srs && PML.srs.isDue && PML.srs.isDue(id)); }
  function keystone(id) { return C().keystones ? (C().keystones[id] || 0) : 0; }

  // ---- frontier: the single recommended next node (shallowest unlearned, basics-first) ----
  function frontier() {
    var maxT = 0;
    branches().forEach(function (b) { maxT = Math.max(maxT, b.tiers.length); });
    for (var ti = 0; ti < maxT; ti++) {
      for (var bi = 0; bi < branches().length; bi++) {
        var b = branches()[bi];
        if (!branchUnlocked(b) || ti >= b.tiers.length || !tierUnlocked(b, ti)) continue;
        var nodes = b.tiers[ti].nodes;
        for (var k = 0; k < nodes.length; k++) if (!isLearned(nodes[k])) return nodes[k];
      }
    }
    return null;
  }

  // shallowest unlearned available node within one branch (for "learn from this class")
  function nextInBranch(bid) {
    var b = typeof bid === 'string' ? branchById(bid) : bid;
    if (!b || !branchUnlocked(b)) return null;
    for (var ti = 0; ti < b.tiers.length; ti++) {
      if (!tierUnlocked(b, ti)) return null; // deeper tiers gated; nothing available below a closed gate
      var nodes = b.tiers[ti].nodes;
      for (var k = 0; k < nodes.length; k++) if (!isLearned(nodes[k])) return nodes[k];
    }
    return null;
  }
  function nextInClass(cls) { return nextInBranch(branchByClass(cls)); }

  // ---- branch progress ----
  function branchNodes(b) { var out = []; b.tiers.forEach(function (t) { out = out.concat(t.nodes); }); return out; }
  function branchProgress(b) {
    var nodes = branchNodes(b);
    var learned = learnedIn(nodes);
    return { learned: learned, total: nodes.length, pct: nodes.length ? learned / nodes.length : 0 };
  }

  // ---- boss ----
  function bossStore() {
    var p = PML.store.get().progress;
    if (!p.bosses) p.bosses = {};
    return p.bosses;
  }
  function bossCleared(b) { return !!bossStore()[b.id]; }
  function bossState(b) {
    if (bossCleared(b)) return 'cleared';
    return branchProgress(b).pct >= (C().bossAt || 0.6) ? 'available' : 'locked';
  }
  function bossLockReason(b) {
    var pr = branchProgress(b);
    var needFrac = (C().bossAt || 0.6);
    var need = Math.ceil(pr.total * needFrac) - pr.learned;
    return need > 0 ? 'Learn ' + need + ' more in this branch to face the boss.' : '';
  }
  function markBossCleared(bid) {
    bossStore()[bid] = new Date().toISOString();
    PML.store.save();
  }

  function stats() { return { learned: totalLearned(), total: PML.deck.count() }; }

  PML.tree = {
    branches: branches, branchById: branchById, branchByClass: branchByClass, locate: locate,
    nodeState: nodeState, isDue: isDue, keystone: keystone,
    branchUnlocked: branchUnlocked, branchUnlockReason: branchUnlockReason,
    tierUnlocked: tierUnlocked, tierLockReason: tierLockReason, gateCount: gateCount,
    frontier: frontier, nextInBranch: nextInBranch, nextInClass: nextInClass,
    branchProgress: branchProgress, branchNodes: branchNodes,
    bossState: bossState, bossCleared: bossCleared, bossLockReason: bossLockReason, markBossCleared: markBossCleared,
    stats: stats,
  };
})();
