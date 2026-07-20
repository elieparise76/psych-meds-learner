/* deck.js — read-only accessor over window.MEDS. The app NEVER mutates the deck. */
(function () {
  'use strict';
  var PML = window.PML;

  var meds = [];
  var byId = {};
  var classList = [];

  // canonical class order + short keys for accent hues
  var CLASS_ORDER = ['Antidepressant', 'Antipsychotic', 'Mood stabilizer', 'Anxiolytic / hypnotic', 'ADHD', 'Substance use', 'Dementia', 'Adjunct'];
  function classKey(cls) {
    if (!cls) return 'Adjunct';
    if (cls.indexOf('Antidepress') === 0) return 'Antidepressant';
    if (cls.indexOf('Antipsych') === 0) return 'Antipsychotic';
    if (cls.indexOf('Mood') === 0) return 'Mood';
    if (cls.indexOf('Anxiolytic') === 0) return 'Anxiolytic';
    if (cls.indexOf('ADHD') === 0) return 'ADHD';
    if (cls.indexOf('Substance') === 0) return 'Substance';
    if (cls.indexOf('Dementia') === 0) return 'Dementia';
    return 'Adjunct';
  }

  function init() {
    meds = (window.MEDS || []).slice();
    byId = {};
    var seen = {};
    meds.forEach(function (m) { byId[m.id] = m; seen[m.class] = 1; });
    classList = CLASS_ORDER.filter(function (c) { return seen[c]; });
    // add any unexpected classes
    Object.keys(seen).forEach(function (c) { if (classList.indexOf(c) < 0) classList.push(c); });
    return meds;
  }

  function all() { return meds; }
  function get(id) { return byId[id]; }
  function classes() { return classList; }
  function byClass(cls) { return meds.filter(function (m) { return m.class === cls; }); }
  function count() { return meds.length; }

  function search(q) {
    q = (q || '').toLowerCase().trim();
    if (!q) return meds;
    return meds.filter(function (m) {
      if (m.generic && m.generic.toLowerCase().indexOf(q) >= 0) return true;
      if (m.id.indexOf(q) >= 0) return true;
      if (m.subclass && m.subclass.toLowerCase().indexOf(q) >= 0) return true;
      if (m.class && m.class.toLowerCase().indexOf(q) >= 0) return true;
      if ((m.brandsCanada || []).some(function (b) { return b.toLowerCase().indexOf(q) >= 0; })) return true;
      return false;
    });
  }

  // best-recognized (innovator) Canadian brand: skip generic-manufacturer prefixes
  var GENERIC_MAKER = /^(apo-|teva|sandoz|pms-|mylan|riva-|jamp|auro-|dom-|pro-|gen-|nu-|phl-|ran-|mint-|act |ava-|bio-|nra-|taro|sivem|m-|van-|ag-|natco)/i;
  function primaryBrand(med) {
    var b = med.brandsCanada || [];
    if (!b.length) return null;
    var innovator = b.filter(function (x) { return !GENERIC_MAKER.test(x); });
    // prefer a short single-word innovator name (e.g. "Paxil", "Zoloft")
    innovator.sort(function (a, c) { return a.length - c.length; });
    return (innovator[0] || b[0]);
  }

  PML.deck = { init: init, all: all, get: get, classes: classes, byClass: byClass, count: count, search: search, classKey: classKey, primaryBrand: primaryBrand, CLASS_ORDER: CLASS_ORDER };
})();
