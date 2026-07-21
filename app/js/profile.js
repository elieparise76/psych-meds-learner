/* profile.js — first-run profile setup (name + one of 8 silly SVG animal avatars) and the
 * avatar renderer. Avatars are inline SVG (offline, crisp at any size, consistent across OSes). */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // Each avatar: id, name, bg colour, and inner SVG markup on a 100x100 canvas.
  var AVATARS = [
    { id: 'fox', name: 'Fox', bg: '#ff9d3c', svg:
      '<circle cx="50" cy="56" r="30" fill="#ff9d3c"/>' +
      '<path d="M22 44 L18 20 L40 34 Z" fill="#ff9d3c"/><path d="M78 44 L82 20 L60 34 Z" fill="#ff9d3c"/>' +
      '<path d="M25 42 L22 26 L36 35 Z" fill="#ffd9b0"/><path d="M75 42 L78 26 L64 35 Z" fill="#ffd9b0"/>' +
      '<path d="M50 60 q-20 4 -22 -6 q10 12 22 6 q12 6 22 -6 q-2 10 -22 6Z" fill="#fff"/>' +
      '<circle cx="40" cy="52" r="4.5" fill="#2a1a10"/><circle cx="60" cy="52" r="4.5" fill="#2a1a10"/>' +
      '<circle cx="50" cy="64" r="4" fill="#2a1a10"/>' },
    { id: 'owl', name: 'Owl', bg: '#49b6ff', svg:
      '<path d="M28 26 L36 40 L20 42 Z" fill="#2f80c0"/><path d="M72 26 L64 40 L80 42 Z" fill="#2f80c0"/>' +
      '<ellipse cx="50" cy="56" rx="30" ry="32" fill="#49b6ff"/>' +
      '<circle cx="39" cy="50" r="12" fill="#fff"/><circle cx="61" cy="50" r="12" fill="#fff"/>' +
      '<circle cx="39" cy="51" r="5.5" fill="#1a2a3a"/><circle cx="61" cy="51" r="5.5" fill="#1a2a3a"/>' +
      '<path d="M45 60 L55 60 L50 70 Z" fill="#ffb020"/>' +
      '<path d="M30 74 q20 10 40 0" stroke="#2f80c0" stroke-width="4" fill="none" stroke-linecap="round"/>' },
    { id: 'panda', name: 'Panda', bg: '#e9e6f0', svg:
      '<circle cx="30" cy="30" r="12" fill="#2a2436"/><circle cx="70" cy="30" r="12" fill="#2a2436"/>' +
      '<circle cx="50" cy="56" r="30" fill="#f6f4fb"/>' +
      '<ellipse cx="39" cy="52" rx="8" ry="10" fill="#2a2436"/><ellipse cx="61" cy="52" rx="8" ry="10" fill="#2a2436"/>' +
      '<circle cx="39" cy="53" r="3.5" fill="#fff"/><circle cx="61" cy="53" r="3.5" fill="#fff"/>' +
      '<circle cx="50" cy="64" r="4" fill="#2a2436"/><path d="M44 70 q6 6 12 0" stroke="#2a2436" stroke-width="2.5" fill="none"/>' },
    { id: 'frog', name: 'Frog', bg: '#37d9a0', svg:
      '<circle cx="34" cy="34" r="13" fill="#37d9a0"/><circle cx="66" cy="34" r="13" fill="#37d9a0"/>' +
      '<circle cx="34" cy="32" r="7" fill="#fff"/><circle cx="66" cy="32" r="7" fill="#fff"/>' +
      '<circle cx="34" cy="33" r="3.5" fill="#12331f"/><circle cx="66" cy="33" r="3.5" fill="#12331f"/>' +
      '<path d="M22 52 a28 24 0 0 0 56 0 Z" fill="#37d9a0"/>' +
      '<path d="M30 62 q20 14 40 0" stroke="#12331f" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="34" cy="60" r="2.5" fill="#12331f"/><circle cx="66" cy="60" r="2.5" fill="#12331f"/>' },
    { id: 'axolotl', name: 'Axolotl', bg: '#ff7ac0', svg:
      '<path d="M22 40 q-12 -6 -14 6 q10 -2 14 4Z" fill="#ff9ed0"/><path d="M22 52 q-14 0 -16 12 q12 -6 16 0Z" fill="#ff9ed0"/>' +
      '<path d="M78 40 q12 -6 14 6 q-10 -2 -14 4Z" fill="#ff9ed0"/><path d="M78 52 q14 0 16 12 q-12 -6 -16 0Z" fill="#ff9ed0"/>' +
      '<circle cx="50" cy="54" r="30" fill="#ff7ac0"/>' +
      '<circle cx="40" cy="50" r="3.6" fill="#3a1526"/><circle cx="60" cy="50" r="3.6" fill="#3a1526"/>' +
      '<path d="M40 64 q10 8 20 0" stroke="#c74e93" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="34" cy="60" r="3.5" fill="#ff9ed0"/><circle cx="66" cy="60" r="3.5" fill="#ff9ed0"/>' },
    { id: 'penguin', name: 'Penguin', bg: '#3a4a63', svg:
      '<ellipse cx="50" cy="55" rx="30" ry="33" fill="#2a3446"/>' +
      '<ellipse cx="50" cy="60" rx="20" ry="26" fill="#f6f4fb"/>' +
      '<circle cx="41" cy="46" r="4.5" fill="#1a2130"/><circle cx="59" cy="46" r="4.5" fill="#1a2130"/>' +
      '<path d="M44 54 L56 54 L50 63 Z" fill="#ffb020"/>' +
      '<path d="M30 84 q8 6 14 2" stroke="#ffb020" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M70 84 q-8 6 -14 2" stroke="#ffb020" stroke-width="5" fill="none" stroke-linecap="round"/>' },
    { id: 'cat', name: 'Cat', bg: '#9b6dff', svg:
      '<path d="M26 40 L22 18 L44 34 Z" fill="#9b6dff"/><path d="M74 40 L78 18 L56 34 Z" fill="#9b6dff"/>' +
      '<circle cx="50" cy="56" r="30" fill="#9b6dff"/>' +
      '<circle cx="40" cy="52" r="4.5" fill="#231436"/><circle cx="60" cy="52" r="4.5" fill="#231436"/>' +
      '<path d="M50 60 L46 64 L54 64 Z" fill="#ff9ed0"/>' +
      '<path d="M44 66 q6 5 12 0" stroke="#231436" stroke-width="2.5" fill="none"/>' +
      '<path d="M20 58 H34 M20 64 H34 M66 58 H80 M66 64 H80" stroke="#e6ddff" stroke-width="2" stroke-linecap="round"/>' },
    { id: 'bunny', name: 'Bunny', bg: '#ffd27f', svg:
      '<ellipse cx="38" cy="24" rx="8" ry="22" fill="#ffd27f"/><ellipse cx="62" cy="24" rx="8" ry="22" fill="#ffd27f"/>' +
      '<ellipse cx="38" cy="24" rx="4" ry="15" fill="#ff9ed0"/><ellipse cx="62" cy="24" rx="4" ry="15" fill="#ff9ed0"/>' +
      '<circle cx="50" cy="58" r="28" fill="#ffd27f"/>' +
      '<circle cx="41" cy="54" r="4" fill="#3a2a10"/><circle cx="59" cy="54" r="4" fill="#3a2a10"/>' +
      '<path d="M50 62 L46 66 L54 66 Z" fill="#ff9ed0"/>' +
      '<path d="M50 66 v4 M50 70 q-5 3 -9 1 M50 70 q5 3 9 1" stroke="#3a2a10" stroke-width="2" fill="none" stroke-linecap="round"/>' },
  ];

  function svgEl(av, size) {
    var wrap = ce('span', { class: 'avatar', style: { width: size + 'px', height: size + 'px', background: av.bg } });
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 100 100'); s.setAttribute('width', size); s.setAttribute('height', size);
    s.innerHTML = av.svg;
    wrap.appendChild(s);
    return wrap;
  }
  function byId(id) { for (var i = 0; i < AVATARS.length; i++) if (AVATARS[i].id === id) return AVATARS[i]; return AVATARS[0]; }
  function avatarEl(id, size) { return svgEl(byId(id), size || 40); }

  // First-run (or "edit profile") screen. onDone(profile).
  function setup(onDone, existing) {
    var chosen = existing ? existing.avatar : null;
    var overlay = ce('div', { class: 'profile-setup' });
    var card = ce('div', { class: 'card pad stack pop', style: { maxWidth: '560px', width: '100%' } });

    card.appendChild(ce('div', { class: 'center stack' }, [
      ce('div', { class: 'brand-mark', style: { fontSize: '2.4rem' } }, ['ψ']),
      ce('h1', { style: { margin: 0 } }, [existing ? 'Edit your profile' : 'Welcome to Titrate']),
      ce('p', { class: 'muted', style: { margin: 0 } }, ['One psych med a day. Pick a name and an avatar to begin.']),
    ]));

    var nameInput = ce('input', { class: 'text-answer', placeholder: 'Your name (or a nickname)', maxlength: '24', value: existing ? existing.name : '' });
    card.appendChild(ce('div', { class: 'stack' }, [ce('label', { class: 'q-type-label' }, ['Name']), nameInput]));

    card.appendChild(ce('label', { class: 'q-type-label' }, ['Choose your avatar']));
    var grid = ce('div', { class: 'avatar-grid' });
    AVATARS.forEach(function (av) {
      var btn = ce('button', { class: 'avatar-choice', 'aria-label': av.name, title: av.name, onclick: function () {
        chosen = av.id; U.qsa('.avatar-choice', grid).forEach(function (b) { b.classList.remove('sel'); }); btn.classList.add('sel'); update();
      } });
      if (existing && existing.avatar === av.id) btn.classList.add('sel');
      btn.appendChild(svgEl(av, 56));
      btn.appendChild(ce('span', { class: 'avatar-name' }, [av.name]));
      grid.appendChild(btn);
    });
    card.appendChild(grid);

    var go = ce('button', { class: 'btn primary lg block', onclick: finish }, [existing ? 'Save' : 'Start learning →']);
    card.appendChild(go);
    function update() { go.disabled = !(nameInput.value.trim() && chosen); }
    nameInput.addEventListener('input', update);
    update();

    function finish() {
      if (!nameInput.value.trim() || !chosen) return;
      var profile = { name: nameInput.value.trim().slice(0, 24), avatar: chosen };
      PML.store.get().profile = profile;
      PML.store.save(true);
      overlay.remove();
      if (window.PMLConfetti) PMLConfetti.burst({ count: 90 });
      onDone && onDone(profile);
    }

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    nameInput.focus();
    return overlay;
  }

  PML.profile = { AVATARS: AVATARS, avatarEl: avatarEl, setup: setup, byId: byId };
})();
