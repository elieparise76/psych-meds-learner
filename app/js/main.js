/* main.js — boot. Loaded last. Hydrates deck + state, then mounts the UI. */
(function () {
  'use strict';
  function boot() {
    var PML = window.PML;
    if (!window.MEDS || !window.MEDS.length) {
      document.body.innerHTML = '<div style="max-width:560px;margin:80px auto;font-family:system-ui;padding:24px;text-align:center">' +
        '<h1>Deck not loaded</h1><p>data/deck.js did not define <code>window.MEDS</code>. Regenerate it with <code>cd pipeline &amp;&amp; node run.js</code>, then reopen index.html.</p></div>';
      return;
    }
    // glue vendored globals onto the PML namespace
    PML.sfx = window.PMLSfx || { enabled: false };
    PML.confetti = window.PMLConfetti || null;
    PML.deck.init();
    if (PML.wiki && PML.wiki.initIndex) PML.wiki.initIndex();
    PML.store.load();
    PML.store.initDeck(PML.deck.all());
    PML.store.rollover();
    PML.ui.init();
    if (PML.glossary && PML.glossary.init) PML.glossary.init();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
