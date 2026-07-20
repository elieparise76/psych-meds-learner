/* progress.js — the progression surface: class mastery map (skill-tree-style), achievements,
 * mastery-tier breakdown, and lifetime stats. Visualises progress; does not change the
 * seeded daily order. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function tierColor(t) { return { bronze: 'var(--tier-bronze)', silver: 'var(--tier-silver)', gold: 'var(--tier-gold)', burnished: 'var(--tier-burnished)', none: 'var(--surface-3)' }[t] || 'var(--surface-3)'; }

  function view(root) {
    var s = PML.store.get();
    var li = PML.game.levelInfo(s.progress.xp);
    var wrap = ce('div', { class: 'view stack' });

    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [ce('h1', {}, ['Progress']), ce('p', { class: 'muted' }, ['Your mastery map, badges, and stats.'])])]));

    // top stats
    wrap.appendChild(ce('div', { class: 'card pad stack' }, [
      ce('div', { class: 'row spread wrap' }, [ce('h3', { style: { margin: 0 } }, ['Level ' + li.level]), ce('span', { class: 'muted' }, [s.progress.xp + ' XP total'])]),
      ce('div', { class: 'bar xpbar' }, [ce('span', { style: { width: Math.round(li.into / li.need * 100) + '%' } })]),
      ce('div', { class: 'stat-tiles' }, [
        tile('🔥 ' + (s.progress.streak || 0), 'day streak', 'best ' + (s.progress.longestStreak || 0)),
        tile('❄️ ' + (s.progress.streakFreezes || 0), 'streak freezes'),
        tile((s.progress.weekXp || 0) + ' / ' + (s.settings.weeklyXpGoal || 210), 'weekly XP'),
        tile('⚡ ' + (s.stats.bestCombo || 0), 'best combo'),
        tile((s.stats.correct || 0) + '/' + (s.stats.answered || 0), 'answers', s.stats.answered ? Math.round((s.stats.correct / s.stats.answered) * 100) + '% lifetime' : ''),
      ]),
    ]));

    // mastery tier breakdown
    var tiers = { bronze: 0, silver: 0, gold: 0, burnished: 0, none: 0, learned: 0 };
    PML.deck.all().forEach(function (m) { var c = s.cards[m.id]; if (c.learned) tiers.learned++; tiers[c.mastery] = (tiers[c.mastery] || 0) + 1; });
    wrap.appendChild(ce('div', { class: 'card pad stack' }, [
      ce('h3', {}, ['Mastery tiers']),
      ce('div', { class: 'stat-tiles' }, [
        tierTile('Bronze', tiers.bronze, 'var(--tier-bronze)'),
        tierTile('Silver', tiers.silver, 'var(--tier-silver)'),
        tierTile('Gold', tiers.gold, 'var(--tier-gold)'),
        tierTile('Burnished', tiers.burnished, 'var(--tier-burnished)'),
      ]),
      ce('p', { class: 'dim', style: { fontSize: '.76rem' } }, ['Tiers rise with accuracy, reps, and retention. Keep answering correctly to promote a med.']),
    ]));

    // class mastery map
    var mapCard = ce('div', { class: 'card pad stack' }, [ce('h3', {}, ['Class mastery map']), ce('p', { class: 'muted', style: { margin: 0, fontSize: '.85rem' } }, ['Each class fills in as its members reach mastery.'])]);
    var map = ce('div', { class: 'classmap' });
    PML.deck.classes().forEach(function (cls) {
      var m = PML.game.classMastery(cls);
      var key = PML.deck.classKey(cls);
      var node = ce('div', { class: 'class-node', style: { cursor: 'pointer' }, onclick: function () { PML.ui.go('compare'); } });
      node.appendChild(ce('h3', {}, [ce('span', { class: 'dot', style: { background: 'var(--c-' + key + ')' } }), cls]));
      node.appendChild(ce('div', { class: 'row spread', style: { fontSize: '.8rem' } }, [ce('span', { class: 'muted' }, [m.learned + '/' + m.total + ' learned']), ce('span', { class: 'muted' }, [m.gold + ' gold+'])]));
      node.appendChild(ce('div', { class: 'bar node-bar', style: { height: '8px' } }, [ce('span', { style: { width: Math.round(m.progress * 100) + '%', background: 'var(--c-' + key + ')' } })]));
      // member dots
      var dots = ce('div', { class: 'row wrap', style: { gap: '4px', marginTop: '10px' } });
      PML.deck.byClass(cls).forEach(function (mm) {
        var c = s.cards[mm.id];
        dots.appendChild(ce('span', { title: mm.generic + ' · ' + c.mastery, style: { width: '11px', height: '11px', borderRadius: '3px', background: tierColor(c.mastery), opacity: c.learned ? 1 : 0.4, boxShadow: (c.mastery !== 'none' && c.mastery !== undefined && c.learned) ? '0 0 5px ' + tierColor(c.mastery) : 'none' } }));
      });
      node.appendChild(dots);
      map.appendChild(node);
    });
    mapCard.appendChild(map);
    wrap.appendChild(mapCard);

    // achievements
    var achCard = ce('div', { class: 'card pad stack' }, [ce('h3', {}, ['Achievements'])]);
    var grid = ce('div', { class: 'badge-grid' });
    var achs = PML.game.achievements();
    var unlocked = achs.filter(function (a) { return a.unlocked; }).length;
    achCard.querySelector('h3').textContent = 'Achievements (' + unlocked + '/' + achs.length + ')';
    achs.forEach(function (a) {
      grid.appendChild(ce('div', { class: 'badge' + (a.unlocked ? '' : ' locked'), title: a.desc }, [
        ce('div', { class: 'emoji' }, [a.emoji]), ce('div', { class: 't' }, [a.title]), ce('div', { class: 'dim', style: { fontSize: '.68rem' } }, [a.unlocked ? 'unlocked' : a.desc]),
      ]));
    });
    achCard.appendChild(grid);
    wrap.appendChild(achCard);

    root.appendChild(wrap);
  }

  function tile(big, label, sub) { return ce('div', { class: 'tile' }, [ce('b', { text: String(big), style: { fontSize: '1.3rem' } }), ce('span', { text: label }), sub ? ce('div', { class: 'dim', style: { fontSize: '.68rem' } }, [sub]) : null]); }
  function tierTile(label, n, color) { return ce('div', { class: 'tile', style: { borderColor: n ? color : 'var(--border)' } }, [ce('b', { text: String(n), style: { color: color, fontSize: '1.5rem' } }), ce('span', { text: label })]); }

  PML.progress = { view: view };
})();
