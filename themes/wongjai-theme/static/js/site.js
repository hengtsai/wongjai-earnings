/* Wongjai Earnings 前端（2026-11-28 改版）。全部是漸進增強：沒有 JavaScript 時內容照樣讀得到。
   - 深淺色切換（初始值在 baseof.html <head> 的 inline script 設定，避免換頁閃白）
   - 語言選單：點外面或按 Esc 關閉
   - 文章：表格對齊與手機凍結首欄（table-align.js）、KPI 超過 4 張手機收合、章節導覽
   - 列表／首頁：市場、產業、搜尋、只看已翻譯；首頁手機分頁 */
(function () {
  'use strict';
  var doc = document, html = doc.documentElement;
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  function track(name, params) { try { if (window.gtag) window.gtag('event', name, params || {}); } catch (e) {} }

  /* ---------- 深淺色 ---------- */
  var tbtn = $('.theme-toggle');
  if (tbtn) tbtn.addEventListener('click', function () {
    var next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    try { localStorage.setItem('wj-theme', next); } catch (e) {}
  });
  // 沒有手動選過時，跟著系統設定變
  try {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onMq = function (e) { var s = null; try { s = localStorage.getItem('wj-theme'); } catch (x) {} if (s !== 'light' && s !== 'dark') html.dataset.theme = e.matches ? 'dark' : 'light'; };
    if (mq.addEventListener) mq.addEventListener('change', onMq);
  } catch (e) {}

  /* ---------- 語言選單 ---------- */
  var ls = $('details.lang-switch');
  if (ls) {
    doc.addEventListener('click', function (e) { if (ls.open && !ls.contains(e.target)) ls.open = false; });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ls.open) { ls.open = false; var s = $('summary', ls); if (s) s.focus(); } });
  }

  /* ---------- 文章內文 ---------- */
  var content = $('.article-content');
  if (content) {
    // 表格：補外框、對齊、可鍵盤捲動、右側還有內容時的提示
    $$('table', content).forEach(function (t) {
      var wrap = t.parentNode;
      if (!wrap.classList || !(wrap.classList.contains('sw') || wrap.classList.contains('table-wrapper'))) {
        var w = doc.createElement('div'); w.className = 'table-wrapper';
        wrap.insertBefore(w, t); w.appendChild(t); wrap = w;
      }
      if (window.WJTable) { try { window.WJTable.apply(t); } catch (e) {} }
      wrap.tabIndex = 0;
      wrap.setAttribute('role', 'region');
      var h = wrap.previousElementSibling;
      if (h && /^H[2-4]$/.test(h.tagName)) wrap.setAttribute('aria-label', h.textContent.trim());
      var upd = function () { wrap.classList.toggle('more-right', wrap.scrollWidth - wrap.clientWidth - wrap.scrollLeft > 4); };
      wrap.addEventListener('scroll', upd, { passive: true });
      window.addEventListener('resize', upd);
      upd();
    });

    // KPI：第一組超過 4 張時，手機先顯示 4 張（CSS 只在 ≤640px 收合）
    var grid = $('.kpi-grid', content);
    if (grid) {
      var n = $$('.kpi-card', grid).length;
      if (n > 4) {
        grid.classList.add('kpi-collapsible');
        var btn = doc.createElement('button');
        btn.type = 'button'; btn.className = 'kpi-more';
        var more = (content.dataset.kpiMore || 'Show %d more').replace('%d', n - 4), less = content.dataset.kpiLess || 'Show less';
        btn.textContent = more + ' ▾'; btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', function () {
          var open = grid.classList.toggle('expanded');
          btn.textContent = open ? less + ' ▴' : more + ' ▾';
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        grid.parentNode.insertBefore(btn, grid.nextSibling);
      }
    }

    // 章節導覽（桌機側欄）：抓 h2，拿掉裝飾用的 Emoji
    var tocBox = $('#tocBox'), tocList = $('#tocList');
    var heads = $$('h2', content);
    if (tocBox && tocList && heads.length >= 2) {
      var links = [];
      heads.forEach(function (h, i) {
        if (!h.id) h.id = 'sec-' + (i + 1);
        var label = h.textContent.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}️‍]/gu, '').replace(/\s+/g, ' ').trim();
        var li = doc.createElement('li'), a = doc.createElement('a');
        a.href = '#' + h.id; a.textContent = label; li.appendChild(a); tocList.appendChild(li); links.push(a);
      });
      tocBox.hidden = false;
      if ('IntersectionObserver' in window) {
        var cur = -1;
        var setActive = function (i) { if (i === cur) return; cur = i; links.forEach(function (a, k) { a.classList.toggle('active', k === i); }); };
        var onScroll = function () {
          var y = window.scrollY + 120, idx = 0;
          for (var i = 0; i < heads.length; i++) if (heads[i].getBoundingClientRect().top + window.scrollY <= y) idx = i;
          setActive(idx);
        };
        window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
      }
    }
  }

  /* ---------- 首頁手機分頁、顯示更多 ---------- */
  var home = $('.home');
  if (home) {
    $$('.home-tabs button', home).forEach(function (b) {
      b.addEventListener('click', function () {
        home.dataset.tab = b.dataset.tab;
        $$('.home-tabs button', home).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        track('home_tab', { tab: b.dataset.tab });
      });
    });
    var mb = $('.home-latest .more-btn', home), lg = $('.home-latest .earnings-grid', home);
    if (mb && lg) mb.addEventListener('click', function () { lg.classList.add('expanded'); });
    home.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a') : null; if (!a) return;
      if (a.classList.contains('earning-card')) track('latest_card_click', { ticker: a.dataset.ticker || '' });
      else if (a.classList.contains('company-card')) track('company_card_click', { ticker: a.dataset.ticker || '' });
    });
  }

  /* ---------- 篩選：市場、產業、搜尋、只看已翻譯 ---------- */
  $$('[data-filter-scope]').forEach(function (scope) {
    var state = { market: '', industry: '', q: '', translated: false };
    var items = $$('[data-item]', scope);
    var empty = $('.no-results', scope);
    var groups = $$('.month-group', scope);
    var timer = null;
    function applyFilter() {
      var q = state.q.trim().toLowerCase(), shown = 0;
      items.forEach(function (el) {
        var ok = (!state.market || el.dataset.market === state.market)
          && (!state.industry || el.dataset.industry === state.industry)
          && (!state.translated || el.dataset.fallback !== '1')
          && (!q || (el.dataset.search || '').indexOf(q) !== -1);
        el.hidden = !ok; if (ok) shown++;
      });
      groups.forEach(function (g) { g.hidden = !$$('[data-item]', g).some(function (el) { return !el.hidden; }); });
      if (empty) empty.hidden = shown > 0;
    }
    $$('[data-filter]', scope).forEach(function (b) {
      b.addEventListener('click', function () {
        var key = b.dataset.filter, val = b.dataset.value || '';
        if (key === 'translated') state.translated = val === '1'; else state[key] = val;
        $$('[data-filter="' + key + '"]', scope).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        applyFilter();
      });
    });
    var input = $('.search-input', scope);
    if (input) input.addEventListener('input', function () {
      state.q = input.value; applyFilter();
      clearTimeout(timer); timer = setTimeout(function () { if (state.q.trim()) track('site_search', { search_term: state.q.trim().slice(0, 40) }); }, 1200);
    });
  });
})();
