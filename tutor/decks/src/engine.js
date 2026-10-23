/* ===========================================================
   SAT Math — slide engine
   Shared by every lesson deck. The deck's content is a DECK
   object defined before this script runs.
   =========================================================== */
(function () {
  "use strict";

  var stage = document.getElementById('stage');
  var railFill = document.getElementById('railFill');
  var counter = document.getElementById('counter');
  var deckName = document.getElementById('deckName');
  var overview = document.getElementById('overview');
  var ovGrid = document.getElementById('ovGrid');
  var notesEl = document.getElementById('notes');

  var i = 0, built = [], notesOn = false, reveal = 0;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  deckName.textContent = DECK.title;
  document.getElementById('deckSession').textContent = DECK.session || '';

  /* ---------- maths ---------- */
  var mathReady = false, mathFailed = false;
  function typeset(el) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      mathReady = true;
      window.MathJax.typesetPromise([el]).catch(function () { plain(el); });
    } else if (mathFailed) { plain(el); }
  }
  setTimeout(function () {
    if (window.MathJax && window.MathJax.typesetPromise) return;
    mathFailed = true; plain(stage);
  }, 3000);
  function plain(el) {
    if (!el) return;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n, hits = [];
    while ((n = w.nextNode())) { if (n.nodeValue.indexOf('$') > -1) hits.push(n); }
    hits.forEach(function (t) {
      t.nodeValue = t.nodeValue.replace(/\$\$?([^$]*)\$\$?/g, function (m, s) { return tidy(s); });
    });
  }
  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶',
    '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻', 'n': 'ⁿ', 'x': 'ˣ', 't': 'ᵗ', '/': 'ᐟ' };
  function sup(s) {
    var o = '', ok = true;
    for (var i = 0; i < s.length; i++) { if (SUP[s[i]]) o += SUP[s[i]]; else { ok = false; break; } }
    return ok ? o : '^(' + s + ')';
  }
  function tidy(t) {
    var s = String(t)
      .replace(/\{\s*,\s*\}/g, ',')                       // 64{,}000
      .replace(/\\(?:text|mathrm|mbox)\{([^{}]*)\}/g, '$1')
      .replace(/\\left|\\right/g, '')
      .replace(/\\([%&#_$])/g, '$1');                     // \% \$ \&
    for (var k = 0; k < 4; k++) {                         // innermost first, a few passes
      s = s.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)')
           .replace(/\\sqrt\s*\[\s*([^\]]*)\s*\]\s*\{([^{}]*)\}/g, '$1√($2)')
           .replace(/\\sqrt\s*\{([^{}]*)\}/g, '√($1)');
    }
    return s
      .replace(/\^\{([^{}]*)\}/g, function (m, e) { return sup(e); })
      .replace(/\^(-?\w)/g, function (m, e) { return sup(e); })
      .replace(/\\ge\b/g, '≥').replace(/\\le\b/g, '≤')
      .replace(/\\cdot/g, '·').replace(/\\neq/g, '≠').replace(/\\approx/g, '≈')
      .replace(/\\ldots|\\dots/g, '…').replace(/\\square/g, '□')
      .replace(/\\pi\b/g, 'π').replace(/\\theta\b/g, 'θ').replace(/\\ell\b/g, 'ℓ')
      .replace(/\\circ\b/g, '°').replace(/\\infty/g, '∞')
      .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\pm/g, '±')
      .replace(/\\[;,:! ]/g, ' ').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '')
      .replace(/\((\w+)\)\/\((\w+)\)/g, '$1/$2')          // (3)/(4) -> 3/4
      .replace(/\s+/g, ' ').trim();
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- slide builders ---------- */
  var B = {
    title: function (d) {
      return '<div class="sl sl-title">' +
        '<div class="eyebrow r">' + esc(d.eyebrow || DECK.session || '') + '</div>' +
        '<h1 class="r">' + esc(d.title) + '</h1>' +
        (d.sub ? '<p class="lede r">' + esc(d.sub) + '</p>' : '') +
        (d.meta ? '<div class="tmeta r">' + d.meta.map(function (m) {
          return '<span><b>' + esc(m.v) + '</b>' + esc(m.k) + '</span>'; }).join('') + '</div>' : '') +
        '</div>';
    },
    section: function (d) {
      return '<div class="sl sl-section">' +
        (d.kicker ? '<div class="eyebrow r">' + esc(d.kicker) + '</div>' : '') +
        '<h2 class="r">' + esc(d.title) + '</h2>' +
        (d.sub ? '<p class="lede r">' + esc(d.sub) + '</p>' : '') + '</div>';
    },
    idea: function (d) {
      return '<div class="sl">' + head(d) +
        (d.lead ? '<p class="lead r">' + esc(d.lead) + '</p>' : '') +
        (d.points ? '<ul class="pts">' + d.points.map(function (p) {
          return '<li class="r"><span class="dot"></span><span>' + esc(p) + '</span></li>'; }).join('') + '</ul>' : '') +
        (d.callout ? '<div class="callout r">' + esc(d.callout) + '</div>' : '') +
        '</div>';
    },
    table: function (d) {
      return '<div class="sl">' + head(d) +
        (d.lead ? '<p class="lead r">' + esc(d.lead) + '</p>' : '') +
        '<div class="tw r"><table><thead><tr>' +
        d.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        d.rows.map(function (row) {
          return '<tr class="' + (row.flag || '') + '">' + row.cells.map(function (c, j) {
            return '<td' + (j === 0 ? ' class="k"' : '') + '>' + esc(c) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>' +
        (d.callout ? '<div class="callout r">' + esc(d.callout) + '</div>' : '') + '</div>';
    },
    steps: function (d) {
      return '<div class="sl">' + head(d) +
        (d.lead ? '<p class="lead r">' + esc(d.lead) + '</p>' : '') +
        '<ol class="steps">' + d.steps.map(function (s, n) {
          return '<li class="r step"><i>' + (n + 1) + '</i><div><b>' + esc(s.label) + '</b>' +
            (s.body ? '<span>' + esc(s.body) + '</span>' : '') + '</div></li>';
        }).join('') + '</ol>' +
        (d.callout ? '<div class="callout r">' + esc(d.callout) + '</div>' : '') + '</div>';
    },
    compare: function (d) {
      return '<div class="sl">' + head(d) +
        (d.lead ? '<p class="lead r">' + esc(d.lead) + '</p>' : '') +
        '<div class="cmp">' +
        '<div class="card bad r"><div class="ctag">' + esc(d.left.label) + '</div><div class="cbody">' +
        esc(d.left.body).replace(/\n/g, '<br>') + '</div></div>' +
        '<div class="card good r"><div class="ctag">' + esc(d.right.label) + '</div><div class="cbody">' +
        esc(d.right.body).replace(/\n/g, '<br>') + '</div></div></div>' +
        (d.callout ? '<div class="callout r">' + esc(d.callout) + '</div>' : '') + '</div>';
    },
    worked: function (d) {
      return '<div class="sl sl-worked">' + head(d) +
        '<div class="qbox r"><div class="qtag">Question</div><div class="qstem">' + esc(d.question) + '</div></div>' +
        (d.thinking ? '<div class="think r"><b>First, notice</b>' + esc(d.thinking) + '</div>' : '') +
        '<ol class="wsteps">' + d.steps.map(function (s, n) {
          return '<li class="r"><i>' + (n + 1) + '</i><div>' + esc(s) + '</div></li>';
        }).join('') + '</ol>' +
        '<div class="ans r"><span>Answer</span><b>' + esc(d.answer) + '</b></div></div>';
    },
    practice: function (d, idx) {
      return '<div class="sl sl-practice">' + head(d) +
        (d.lead ? '<p class="lead r">' + esc(d.lead) + '</p>' : '') +
        '<div class="qgrid n' + d.questions.length + '">' +
        d.questions.map(function (q, j) { return qCard(q, idx + '-' + j); }).join('') +
        '</div>' +
        '<button class="revealAll r" data-all>Show every answer</button></div>';
    },
    recap: function (d) {
      return '<div class="sl">' + head(d) +
        '<ul class="recap">' + d.points.map(function (p, n) {
          return '<li class="r"><i>' + (n + 1) + '</i><span>' + esc(p) + '</span></li>'; }).join('') + '</ul>' +
        (d.callout ? '<div class="callout r">' + esc(d.callout) + '</div>' : '') + '</div>';
    },
    close: function (d) {
      return '<div class="sl sl-section sl-close">' +
        (d.small ? '<div class="eyebrow r">' + esc(d.small) + '</div>' : '') +
        '<h2 class="r">' + esc(d.big) + '</h2>' +
        (d.foot ? '<p class="lede r">' + esc(d.foot) + '</p>' : '') + '</div>';
    }
  };

  function head(d) {
    return (d.kicker ? '<div class="eyebrow r">' + esc(d.kicker) + '</div>' : '') +
      '<h2 class="r sh">' + esc(d.title) + '</h2>';
  }

  function qCard(q, key) {
    var mc = !!(q.choices && q.choices.length);
    var h = '<div class="q" data-q="' + key + '">' +
      '<div class="qhead">' + (q.tag ? '<span class="chip">' + esc(q.tag) + '</span>' : '') +
      (mc ? '' : '<span class="chip w">write your answer</span>') + '</div>' +
      '<div class="qs">' + esc(q.stem) + '</div>';
    if (mc) {
      h += '<ul class="opts">' + q.choices.map(function (c, j) {
        return '<li data-l="' + 'ABCD'[j] + '"><kbd>' + 'ABCD'[j] + '</kbd><span>' + esc(c) + '</span></li>';
      }).join('') + '</ul>';
    }
    h += '<button class="show">Show answer</button>' +
      '<div class="sol" hidden><div class="solA">' +
      (mc ? esc(q.answer) + ')&nbsp; ' + esc(q.choices['ABCD'.indexOf(q.answer)]) : esc(q.answer)) +
      '</div><div class="solT">' + esc(q.solution) + '</div>' +
      (q.trap ? '<div class="solW"><b>The usual slip</b> ' + esc(q.trap) + '</div>' : '') +
      '</div></div>';
    return h;
  }

  /* ---------- build ---------- */
  DECK.slides.forEach(function (d, n) {
    var el = document.createElement('section');
    el.className = 'slide';
    el.innerHTML = (B[d.type] || B.idea)(d, n);
    el.hidden = true;
    stage.appendChild(el);
    built.push({ el: el, data: d });
  });

  // overview
  ovGrid.innerHTML = DECK.slides.map(function (d, n) {
    return '<button class="ovc" data-go="' + n + '"><i>' + (n + 1) + '</i><span>' +
      esc(d.title || d.big || DECK.title) + '</span></button>';
  }).join('');
  ovGrid.addEventListener('click', function (e) {
    var b = e.target.closest('[data-go]'); if (!b) return;
    go(parseInt(b.dataset.go, 10)); closeOverview();
  });

  /* ---------- navigation ---------- */
  function revealables(el) { return [].slice.call(el.querySelectorAll('.r')); }

  function paint(dir) {
    var cur = built[i];
    built.forEach(function (b, n) { if (n !== i) { b.el.hidden = true; b.el.className = 'slide'; } });
    cur.el.hidden = false;
    cur.el.className = 'slide in' + (reduce ? ' nomo' : (dir < 0 ? ' back' : ''));
    var rs = revealables(cur.el);
    rs.forEach(function (r, n) {
      r.classList.remove('on');
      r.style.setProperty('--d', (reduce ? 0 : n * 55) + 'ms');
    });
    // first paint shows everything except stepped lists
    reveal = 0;
    rs.forEach(function (r) { r.classList.add('on'); });
    railFill.style.width = ((i + 1) / built.length * 100) + '%';
    counter.textContent = (i + 1) + ' / ' + built.length;
    notesEl.textContent = cur.data.notes || 'No note for this slide.';
    typeset(cur.el);
    if (mathFailed) plain(cur.el);
  }

  function go(n, dir) {
    if (n < 0 || n >= built.length) return;
    var d = dir !== undefined ? dir : (n > i ? 1 : -1);
    i = n; paint(d);
    try { location.hash = 's' + (i + 1); } catch (e) { }
    try { localStorage.setItem('satdeck.' + DECK.id, String(i)); } catch (e) { }
  }
  function next() { if (i < built.length - 1) go(i + 1, 1); }
  function prev() { if (i > 0) go(i - 1, -1); }

  document.getElementById('next').addEventListener('click', next);
  document.getElementById('prev').addEventListener('click', prev);

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); prev(); }
    else if (k === 'Home') { e.preventDefault(); go(0); }
    else if (k === 'End') { e.preventDefault(); go(built.length - 1); }
    else if (k === 'o' || k === 'O') { e.preventDefault(); toggleOverview(); }
    else if (k === 'Escape') { closeOverview(); }
    else if (k === 'n' || k === 'N') { notesOn = !notesOn; notesEl.hidden = !notesOn; }
    else if (k === 'f' || k === 'F') { toggleFull(); }
  });

  // swipe
  var tx = 0, ty = 0;
  stage.addEventListener('touchstart', function (e) {
    tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY;
  }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) { dx < 0 ? next() : prev(); }
  }, { passive: true });

  // answers
  stage.addEventListener('click', function (e) {
    var all = e.target.closest('[data-all]');
    if (all) {
      all.closest('.sl').querySelectorAll('.q').forEach(function (q) { openQ(q); });
      all.textContent = 'All answers shown'; all.disabled = true; return;
    }
    var btn = e.target.closest('.show');
    if (btn) { openQ(btn.closest('.q')); return; }
    var opt = e.target.closest('.opts li');
    if (opt) {
      var box = opt.closest('.q');
      if (box.classList.contains('open')) return;
      box.querySelectorAll('.opts li').forEach(function (o) { o.classList.remove('pick'); });
      opt.classList.add('pick');
    }
  });
  function openQ(box) {
    if (!box || box.classList.contains('open')) return;
    box.classList.add('open');
    var sol = box.querySelector('.sol'); sol.hidden = false;
    var a = sol.querySelector('.solA').textContent.trim().charAt(0);
    box.querySelectorAll('.opts li').forEach(function (o) {
      if (o.dataset.l === a) o.classList.add('right');
      else if (o.classList.contains('pick')) o.classList.add('wrong');
    });
    typeset(sol); if (mathFailed) plain(sol);
  }

  /* ---------- overview, fullscreen ---------- */
  function toggleOverview() { overview.hidden ? openOverview() : closeOverview(); }
  function openOverview() { overview.hidden = false; requestAnimationFrame(function () { overview.classList.add('on'); }); }
  function closeOverview() { overview.classList.remove('on'); setTimeout(function () { overview.hidden = true; }, 220); }
  document.getElementById('ovBtn').addEventListener('click', toggleOverview);
  overview.addEventListener('click', function (e) { if (e.target === overview) closeOverview(); });

  function toggleFull() {
    var r = document.documentElement;
    if (!document.fullscreenElement && r.requestFullscreen) r.requestFullscreen().catch(function () { });
    else if (document.exitFullscreen) document.exitFullscreen().catch(function () { });
  }
  document.getElementById('fsBtn').addEventListener('click', toggleFull);

  document.getElementById('notesBtn').addEventListener('click', function () {
    notesOn = !notesOn; notesEl.hidden = !notesOn;
  });

  /* ---------- start ---------- */
  var start = 0;
  var m = (location.hash || '').match(/^#s(\d+)$/);
  if (m) start = Math.min(built.length - 1, Math.max(0, parseInt(m[1], 10) - 1));
  else { try { var v = localStorage.getItem('satdeck.' + DECK.id); if (v !== null) start = Math.min(built.length - 1, parseInt(v, 10) || 0); } catch (e) { } }
  i = start; paint(1);

  // MathJax loads async — typeset once it lands.
  var waited = 0, poll = setInterval(function () {
    waited += 120;
    if (window.MathJax && window.MathJax.typesetPromise) {
      clearInterval(poll); mathReady = true; typeset(built[i].el);
    } else if (waited > 3000) { clearInterval(poll); }
  }, 120);
})();
