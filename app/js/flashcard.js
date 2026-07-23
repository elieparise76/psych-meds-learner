/* flashcard.js — the two SRS-facing study surfaces.
 *
 * REVIEW (mode 'review'): active-recall QUESTION SET. Each due med is broken into one recall
 * question per populated NON-IDENTITY fact (mechanism, PK, indications, dosing, safety,
 * monitoring, interactions, populations, pearls — never brands / DINs / formulations / controlled
 * status). You recall, reveal the sourced answer, and self-rate Got it / Missed; the per-med score
 * aggregates into a single SM-2 quality (PML.srs.review). This replaced the old "flip the whole
 * card + rate once" review — same SRS footprint (srs + XP), finer-grained recall.
 *
 * LEARN (mode 'learn'): the plain flip card (front prompt → reveal all facts → "Learn this"). Only
 * reached as a fallback when a med has no authored lesson (lesson.js). */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // ============================================================================
  //  REVIEW — question-based active recall over everything but identity
  // ============================================================================

  var SKIP_GROUP = 'identity';           // brands / formulations / DIN / controlled status — not tested
  // Clinical priority for breadth-first sampling: safety-critical groups surface first, then a
  // second pass fills breadth so one med's review spans several groups rather than draining one.
  var GROUP_PRIORITY = ['safety', 'dosing', 'monitoring', 'indications', 'interactions', 'mechanism', 'pk', 'populations', 'pedagogical'];
  var MAX_Q = 7;                         // cap per med so a due queue stays quick

  // Field-specific question phrasing. Anything not listed falls back to a group-aware generic.
  var QMAP = {
    moa: function (g) { return 'What is the mechanism of action of ' + g + '?'; },
    receptorProfile: function (g) { return 'Describe the receptor profile of ' + g + '.'; },
    onsetOfEffect: function (g) { return 'How quickly does ' + g + ' take effect?'; },
    halfLife: function (g) { return 'What is the half-life of ' + g + '?'; },
    timeToSteadyState: function (g) { return 'How long until ' + g + ' reaches steady state?'; },
    metabolism: function (g) { return 'How is ' + g + ' metabolized (CYP pathways)?'; },
    activeMetabolites: function (g) { return 'Does ' + g + ' have active metabolites — which?'; },
    proteinBinding: function (g) { return 'What is the protein binding of ' + g + '?'; },
    elimination: function (g) { return 'How is ' + g + ' eliminated?'; },
    foodEffect: function (g) { return 'How does food affect ' + g + '?'; },
    therapeuticLevel: function (g) { return 'What is the therapeutic drug level for ' + g + '?'; },
    approvedCanada: function (g) { return 'What are the Health Canada–approved indications for ' + g + '?'; },
    offLabel: function (g) { return 'What are common off-label uses of ' + g + '?'; },
    canmatLineOfTherapy: function (g) { return 'Where does ' + g + ' sit in CANMAT lines of therapy?'; },
    approvedPopulations: function (g) { return 'Which populations is ' + g + ' approved for?'; },
    startingDose: function (g) { return 'What is the usual starting dose of ' + g + '?'; },
    titration: function (g) { return 'How do you titrate ' + g + '?'; },
    therapeuticRange: function (g) { return 'What is the usual therapeutic dose range for ' + g + '?'; },
    maxDose: function (g) { return 'What is the maximum dose of ' + g + '?'; },
    frequencyTiming: function (g) { return 'How is ' + g + ' dosed (frequency and timing)?'; },
    renalHepaticAdjustment: function (g) { return 'How is ' + g + ' adjusted for renal or hepatic impairment?'; },
    startStopCrossTaper: function (g) { return 'How do you start, stop, or cross-taper ' + g + '?'; },
    administrationNotes: function (g) { return 'Any special administration notes for ' + g + '?'; },
    boxedWarning: function (g) { return 'What is the boxed / serious warning for ' + g + '?'; },
    contraindications: function (g) { return 'What are the contraindications to ' + g + '?'; },
    commonSE: function (g) { return 'What are the common side effects of ' + g + '?'; },
    seriousAE: function (g) { return 'What serious adverse effects can ' + g + ' cause?'; },
    syndromes: function (g) { return 'What key syndrome(s) is ' + g + ' associated with?'; },
    overdoseLethality: function (g) { return 'How dangerous is ' + g + ' in overdose?'; },
    discontinuationSyndrome: function (g) { return 'What is the discontinuation / taper profile of ' + g + '?'; },
    baselineWorkup: function (g) { return 'What baseline workup is needed before starting ' + g + '?'; },
    ongoingMonitoring: function (g) { return 'What do you monitor while a patient is on ' + g + '?'; },
    majorDDI: function (g) { return 'What are the major drug interactions of ' + g + '?'; },
    contraindicatedCombos: function (g) { return 'Which combinations are contraindicated with ' + g + '?'; },
    maoiWashout: function (g) { return 'What MAOI washout applies to ' + g + '?'; },
    foodInteractions: function (g) { return 'What food interactions matter for ' + g + '?'; },
    substances: function (g) { return 'How does ' + g + ' interact with substances of use?'; },
    pregnancy: function (g) { return 'What are the pregnancy considerations for ' + g + '?'; },
    lactation: function (g) { return 'What are the lactation considerations for ' + g + '?'; },
    pediatric: function (g) { return 'What are the pediatric considerations for ' + g + '?'; },
    geriatric: function (g) { return 'What are the geriatric considerations for ' + g + '?'; },
    renalHepatic: function (g) { return 'What are the renal / hepatic considerations for ' + g + '?'; },
    cardiac: function (g) { return 'What are the cardiac (QT) considerations for ' + g + '?'; },
    pearls: function (g) { return 'Recall a key clinical pearl about ' + g + '.'; },
    mnemonics: function (g) { return 'What mnemonic helps you remember ' + g + '?'; },
    confusables: function (g) { return 'What is ' + g + ' confused with, and how do you tell them apart?'; },
    classDifferentiators: function (g) { return 'What differentiates ' + g + ' within its class?'; },
    examHooks: function (g) { return 'What is a classic exam hook for ' + g + '?'; },
    counsellingPoints: function (g) { return 'What are key counselling points for ' + g + '?'; },
  };

  function questionText(med, gkey, fkey, flabel) {
    var g = med.generic;
    if (QMAP[fkey]) return QMAP[fkey](g);
    if (gkey === 'populations') return 'What are the ' + flabel.toLowerCase() + ' considerations for ' + g + '?';
    return 'What is the ' + flabel.toLowerCase() + ' of ' + g + '?';
  }

  // Build the recall questions for one med: one per populated non-identity field, sampled
  // breadth-first across groups by clinical priority, capped at MAX_Q.
  function buildQuestions(med) {
    var groups = {};
    PML.render.GROUPS.forEach(function (grp) {
      if (grp[0] === SKIP_GROUP) return;
      var fields = grp[2].filter(function (f) { return !PML.render.isEmpty(med[f[0]]); });
      if (fields.length) groups[grp[0]] = { label: grp[1], fields: U.sample(fields, fields.length) };
    });
    var order = GROUP_PRIORITY.filter(function (k) { return groups[k]; });
    Object.keys(groups).forEach(function (k) { if (order.indexOf(k) < 0) order.push(k); }); // any not prioritised
    var cursor = {}; order.forEach(function (k) { cursor[k] = 0; });
    var out = [], progressed = true;
    while (out.length < MAX_Q && progressed) {
      progressed = false;
      for (var i = 0; i < order.length && out.length < MAX_Q; i++) {
        var gk = order[i], grp = groups[gk];
        if (cursor[gk] < grp.fields.length) {
          var f = grp.fields[cursor[gk]++];
          out.push({ medId: med.id, gkey: gk, glabel: grp.label, fkey: f[0], flabel: f[1], question: questionText(med, gk, f[0], f[1]) });
          progressed = true;
        }
      }
    }
    return out;
  }

  var NONID_GROUPS = null;
  function nonIdentityGroups() {
    if (!NONID_GROUPS) NONID_GROUPS = PML.render.GROUPS.map(function (g) { return g[0]; }).filter(function (k) { return k !== SKIP_GROUP; });
    return NONID_GROUPS;
  }

  function reviewSession(container, opts) {
    opts = opts || {};
    var ids = opts.ids || [];

    // one entry per due med, each carrying its recall questions and a running "got" tally
    var meds = ids.map(function (id) {
      var med = PML.deck.get(id);
      if (!med) return null;
      var qs = buildQuestions(med);
      if (!qs.length) qs = [{ medId: id, gkey: null, glabel: 'Recall', fkey: null, flabel: 'key facts', whole: true, question: 'Recall the key clinical facts for ' + med.generic + '.' }];
      return { id: id, med: med, questions: qs, got: 0 };
    }).filter(Boolean);

    var totalMeds = meds.length;
    var mi = 0, qi = 0, reviewed = 0;

    function finalizeMed(m) {
      var total = m.questions.length;
      var frac = total ? m.got / total : 1;
      var q = frac >= 1 ? 5 : frac >= 0.8 ? 4 : frac >= 0.5 ? 3 : 2;   // Easy / Good / Hard / Again
      PML.srs.review(m.id, q);
      var xpEv = PML.game.addXp(q >= 4 ? 8 : q === 3 ? 6 : 3);
      reviewed++;
      if (xpEv.leveled) PML.ui.celebrate({ xp: xpEv, leveled: true, level: xpEv.to }, { anchor: container });
      PML.ui.refreshHud();
    }

    function done() {
      container._active = null;
      U.clear(container);
      var totalQ = 0, totalGot = 0;
      meds.forEach(function (m) { totalQ += m.questions.length; totalGot += m.got; });
      var acc = totalQ ? Math.round(totalGot / totalQ * 100) : 0;
      var summaryCard = ce('div', { class: 'card pad center view stack' }, [
        ce('div', { style: { fontSize: '3rem' } }, ['✅']),
        ce('h2', {}, ['Reviews cleared']),
        ce('p', { class: 'muted' }, [reviewed + ' card' + (reviewed === 1 ? '' : 's') + ' reviewed · you recalled ' + totalGot + ' / ' + totalQ + ' facts (' + acc + '%).']),
        ce('button', { class: 'btn primary lg', onclick: function () { opts.onComplete && opts.onComplete({ reviewed: reviewed }); } }, ['Continue']),
      ]);
      container.appendChild(summaryCard);
      var g = PML.daily.markReviewsCleared(); if (g && g.justMet) PML.ui.celebrate({ goal: g }, { anchor: summaryCard });
      PML.ui && PML.ui.refreshHud && PML.ui.refreshHud();
    }

    function render() {
      if (mi >= totalMeds) return done();
      var m = meds[mi], med = m.med, q = m.questions[qi];
      U.clear(container);
      var revealed = false;

      var head = ce('div', { class: 'row spread', style: { marginBottom: '6px' } }, [
        ce('span', { class: 'q-type-label' }, ['Review · ' + q.glabel]),
        ce('span', { class: 'muted', text: 'Card ' + (mi + 1) + ' / ' + totalMeds }),
      ]);
      var chips = ce('div', { class: 'row wrap', style: { gap: '6px', marginBottom: 'var(--sp-3)' } }, [PML.render.classChip(med)]);
      var stem = ce('div', { class: 'q-stem' }, [q.question]);
      var qcount = ce('div', { class: 'muted', style: { fontSize: '.78rem', marginTop: '-8px', marginBottom: 'var(--sp-3)' } }, ['Question ' + (qi + 1) + ' / ' + m.questions.length + ' · recall it, then reveal.']);

      var answerSlot = ce('div');
      var revealBtn = ce('button', { class: 'btn primary block lg', onclick: doReveal }, ['Reveal answer']);

      function doReveal() {
        if (revealed) return; revealed = true;
        if (PML.sfxOn && PML.sfxOn()) PML.sfx.flip();
        revealBtn.remove();
        var ans = ce('div', { class: 'feedback ok', style: { marginTop: 'var(--sp-3)', textAlign: 'left' } });
        ans.appendChild(ce('div', { class: 'q-type-label', style: { marginBottom: '6px' } }, ['Answer · ' + q.flabel]));
        if (q.whole) {
          PML.render.factGroups(med, { only: nonIdentityGroups() }).forEach(function (grp) { ans.appendChild(grp); });
        } else {
          ans.appendChild(PML.render.valueBlock(med, q.fkey) || ce('div', { class: 'muted' }, ['—']));
        }
        answerSlot.appendChild(ans);
        answerSlot.appendChild(ce('div', { class: 'muted center', style: { fontSize: '.82rem', margin: '12px 0 6px' } }, ['Did you recall it?']));
        answerSlot.appendChild(rateRow());
      }

      function rateRow() {
        var wrap = ce('div', { class: 'rate', style: { gridTemplateColumns: '1fr 1fr' } });
        wrap.appendChild(ce('button', { class: 'good', onclick: function () { grade(true); } }, [ce('span', { text: '✓ Got it' }), ce('small', { text: 'press 1' })]));
        wrap.appendChild(ce('button', { class: 'again', onclick: function () { grade(false); } }, [ce('span', { text: '✗ Missed' }), ce('small', { text: 'press 2' })]));
        return wrap;
      }

      function grade(good) {
        if (!revealed) return;
        if (good) m.got++;
        if (PML.sfxOn && PML.sfxOn()) { good ? PML.sfx.correct() : PML.sfx.wrong(); }
        qi++;
        if (qi >= m.questions.length) { finalizeMed(m); mi++; qi = 0; }
        render();
        window.scrollTo({ top: 0, behavior: 'auto' });
      }

      container._active = { review: true, isRevealed: function () { return revealed; }, reveal: doReveal, rate: grade };
      container.appendChild(ce('div', { class: 'flash-wrap view' }, [head, chips, stem, qcount, revealBtn, answerSlot]));
    }

    if (!totalMeds) return done();
    render();
  }

  // ============================================================================
  //  LEARN — plain flip card (fallback when a med has no authored lesson)
  // ============================================================================

  function frontFace(med) {
    return ce('div', { class: 'face front' }, [
      ce('div', { class: 'row wrap', style: { gap: '6px' } }, [PML.render.classChip(med)].concat(PML.render.statusChips(med))),
      ce('div', { class: 'flash-front-prompt' }, [
        ce('div', { class: 'generic' }, [med.generic]),
        med.pronunciation ? ce('div', { class: 'pron' }, ['/ ' + med.pronunciation + ' /']) : null,
        PML.deck.primaryBrand(med) ? ce('div', { class: 'muted', style: { marginTop: '8px', fontSize: '.85rem' } }, ['Canadian brand: ' + PML.deck.primaryBrand(med)]) : null,
      ]),
      ce('div', { class: 'center muted', style: { fontSize: '.8rem' } }, ['Tap or press Space to reveal']),
    ]);
  }

  function backFace(med) {
    var back = ce('div', { class: 'face back' });
    back.appendChild(ce('div', { class: 'row spread wrap' }, [
      ce('h2', { style: { margin: 0 } }, [med.generic]),
      ce('span', { class: 'muted', text: med.subclass || med.class }),
    ]));
    PML.render.factGroups(med).forEach(function (g) { back.appendChild(g); });
    return back;
  }

  function learnSession(container, opts) {
    opts = opts || {};
    var ids = opts.ids || [];
    var i = 0;
    var revealed = false;
    var reviewed = 0;

    function done() {
      U.clear(container);
      var summaryCard = ce('div', { class: 'card pad center view' }, [
        ce('div', { style: { fontSize: '3rem' } }, ['🎉']),
        ce('h2', {}, ['Learned!']),
        ce('p', { class: 'muted' }, [reviewed + ' card' + (reviewed === 1 ? '' : 's') + ' added to your review schedule.']),
        ce('button', { class: 'btn primary lg', onclick: function () { opts.onComplete && opts.onComplete({ reviewed: reviewed }); } }, ['Continue']),
      ]);
      container.appendChild(summaryCard);
      PML.ui && PML.ui.refreshHud && PML.ui.refreshHud();
    }

    function render() {
      if (i >= ids.length) return done();
      revealed = false;
      var med = PML.deck.get(ids[i]);
      U.clear(container);

      var progress = ce('div', { class: 'row spread', style: { marginBottom: 'var(--sp-4)' } }, [
        ce('span', { class: 'q-type-label' }, ['New medication']),
        ce('span', { class: 'muted', text: (i + 1) + ' / ' + ids.length }),
      ]);

      var flip = ce('div', { class: 'flip', tabindex: '0', role: 'button', 'aria-label': 'Reveal facts for ' + med.generic });
      var inner = ce('div', { class: 'flip-inner' }, [frontFace(med), backFace(med)]);
      flip.appendChild(inner);
      flip.addEventListener('click', function () { if (!revealed) reveal(); });
      flip.addEventListener('keydown', function (e) { if (!revealed && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); reveal(); } });

      var actions = ce('div', { class: 'stack', style: { marginTop: 'var(--sp-4)' } });

      function reveal() {
        if (revealed) return;
        revealed = true;
        flip.classList.add('flipped');
        if (PML.sfxOn && PML.sfxOn()) PML.sfx.flip();
        U.clear(actions);
        actions.appendChild(ce('button', { class: 'btn primary block lg', onclick: learnIt }, ['✓ Learn this — add to my reviews']));
      }
      function learnIt() {
        var ev = PML.daily.learnNew(med.id);
        reviewed++;
        PML.ui.celebrate(ev, { anchor: flip });
        i++; render();
      }

      flip._reveal = reveal; flip._mode = 'learn';
      container._active = flip;
      container.appendChild(ce('div', { class: 'flash-wrap view' }, [progress, flip, actions]));
    }

    render();
  }

  // ---------------------------------------------------------------------------
  function session(container, opts) {
    opts = opts || {};
    if ((opts.mode || 'review') === 'learn') return learnSession(container, opts);
    return reviewSession(container, opts);
  }

  // keyboard handler (registered once by ui, only when a flash surface is current)
  function key(e) {
    var host = PML.ui.currentFlash && PML.ui.currentFlash();
    if (!host || !host._active) return;
    var a = host._active;
    if (a.review) {                                   // question-based review
      if (!a.isRevealed()) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); a.reveal(); } return; }
      if (e.key === '1') { e.preventDefault(); a.rate(true); }
      else if (e.key === '2') { e.preventDefault(); a.rate(false); }
      return;
    }
    // learn flip (element with _reveal)
    if (a.classList && (e.key === ' ' || e.key === 'Enter') && !a.classList.contains('flipped')) { e.preventDefault(); a._reveal(); }
  }

  PML.flashcard = { session: session, key: key };
})();
