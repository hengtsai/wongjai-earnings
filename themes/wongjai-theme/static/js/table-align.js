/* 表格欄位對齊（2026-11-28 改版）。同一份規則給瀏覽器（site.js 呼叫 WJTable.apply）與
   Node 檢查腳本（tools/check_tables.js 呼叫 WJTable.classify）共用，避免兩套規則不一致。

   規則（定案 FINAL-PROPOSAL.md 三之 1）：
   1. 先展開 rowspan／colspan 算出每一格「真正的欄位座標」，不用 :first-child／:nth-child。
   2. 第 0 欄永遠靠左（指標名稱），標 c0（手機凍結用）。
   3. 表頭是文字欄（點評、說明…）→ 整欄靠左。
   4. 其餘欄位整欄多數決：不是破折號的格裡有一半以上是數值 → 整欄靠右（num）。
      表頭含「對照、基準、驗證、結論、指引、可行性、動能、目標」的欄要八成以上是數值才靠右。
   5. 就算在數字欄裡，含 🟢🟡🔴 或是一句話（連續 6 個以上、或合計 8 個以上中日韓文字）的格一律當文字格
      （txt：靠左、可換行）。6 個字以內、沒有數字的短狀態詞（n/m、持平、轉盈、虧損擴大）不參加多數決、跟著整欄。
   6. 跨欄的格（colspan > 1）不參加多數決；表頭跨欄的置中（span）。 */
(function (root) {
  'use strict';

  var TEXT_HEADER = /點評|点评|評論|评论|說明|说明|備註|备注|證據|证据|論點|论点|看法|驅動|驱动|觀察|观察|意義|意义|催化|解讀|解读|原因|影響|影响|重點|重点|狀態|状态|摘要|內容|内容|描述|策略|說法|说法|進度|进度|進展|进展|現況|现况|階段|阶段|時程|时程|時點|时点|來源|来源|comment|note|takeaway|evidence|driver|bull|bear|view|rationale|description|summary|detail|備考|解説|ポイント|コメント|概要|비고|해설|코멘트|요약|평가/i;
  var SOFT_TEXT_HEADER = /對照|对照|基準|基准|驗證|验证|結論|结论|指引|可行性|動能|动能|目標|目标/;
  var CJK_RUN = /[぀-ヿ㐀-鿿가-힯]{6,}/;      // 連續 6 個以上中日韓文字＝一句話
  var CJK_CHAR = /[぀-ヿ㐀-鿿가-힯]/g;
  var STATUS_EMOJI = /[\u{1F7E0}-\u{1F7EB}\u{1F534}\u{1F535}⚪⚫]/u;   // 🟢🟡🔴🟠🔵⚪⚫
  // 單位、比較詞：判斷前先拿掉（長的在前）
  var UNIT_LONG = /新台幣|人民幣|人民币|去年同期|年初至今|美元|台幣|歐元|欧元|日圓|日元|港幣|韓元|百萬|百万|十億|十亿|去年|前季|上季|同期|年初|季增|季減|季减|年增|年減|年减|以上|以下|超過|超过|低於|低于|高於|高于|累計|累计|合計|合计/g;
  var UNIT_SHORT = /[約约近逾億亿萬万兆元円원倍股張张天日週周月季年座台片人家個个名件次點点]/g;
  var ASCII_UNITS = /\b(?:QoQ|YoY|YTD|TTM|LTM|CAGR|GAAP|Non-GAAP|FY\d{0,4}[EA]?|CY\d{0,4}[EA]?|[1-4]?Q[1-4]?|[1-4]?H[12]?|vs\.?|USD|NTD|TWD|NT|US|HK|RMB|CNY|EUR|JPY|KRW|GBP|bps|bp|ppt|pp|pts?|GWh|MWh|kWh|GW|MW|kW|nm|bn|mn|mm|EPS|ADS|ADR)\b/gi;

  function kindOf(text) {
    var t = String(text == null ? '' : text).replace(/\s+/g, ' ').trim();
    if (!t) return 'empty';
    if (/^(?:[—–\-−~～・·\/／]+|n\/?a|n\.a\.|tbd|無|无|未提供|未揭露|未披露|不適用|不适用)$/i.test(t)) return 'dash';
    if (STATUS_EMOJI.test(t)) return 'text!';
    var s = t.replace(/[（(][^（）()]*[）)]/g, ' ');           // 括號附註
    s = s.replace(UNIT_LONG, ' ');
    if (CJK_RUN.test(s) || (s.match(CJK_CHAR) || []).length >= 8) return 'text!';   // 一句話（先拿掉「去年同期」這類比較詞）
    s = s.replace(UNIT_SHORT, ' ').replace(ASCII_UNITS, ' ');
    s = s.replace(/(\d)\s*(?:[MBKTxXEA]|bn|mn)(?![A-Za-z])/g, '$1'); // 40.6B、19.8x、FY26E 的尾碼
    var digits = (s.match(/[0-9０-９]/g) || []).length;
    if (!digits) return t.length <= 6 ? 'short' : 'text';       // 短狀態詞（n/m、持平、轉盈、虧損擴大…）：不參加多數決，跟著整欄
    var rest = s.replace(/[0-9０-９.,，、\s+\-−–—~～≈±$¥€£%％‰\/／:：→➔➜▲▼△▽↑↓<>≤≥×*＋＝=]/g, '');
    return (rest.length <= 2 || rest.length <= digits * 0.6) ? 'num' : 'text';
  }

  /* rows: [{head: bool, cells: [{text, rowspan, colspan, th}]}]
     回傳 {cols: [{align, num, total, header}], cells: [[{col, cls: []}]]}（cells 和 rows 同形狀） */
  function classify(rows) {
    var grid = [], place = [], ncol = 0, r, i, j, c;
    for (r = 0; r < rows.length; r++) { grid[r] = grid[r] || []; }
    for (r = 0; r < rows.length; r++) {
      place[r] = []; c = 0;
      for (i = 0; i < rows[r].cells.length; i++) {
        var cell = rows[r].cells[i];
        var rs = Math.max(1, parseInt(cell.rowspan, 10) || 1), cs = Math.max(1, parseInt(cell.colspan, 10) || 1);
        while (grid[r][c]) c++;
        for (var a = 0; a < rs && r + a < rows.length; a++) for (var b = 0; b < cs; b++) grid[r + a][c + b] = true;
        place[r][i] = { col: c, rs: rs, cs: cs };
        c += cs; if (c > ncol) ncol = c;
      }
    }
    var cols = [];
    for (c = 0; c < ncol; c++) cols[c] = { align: 'left', num: 0, text: 0, dash: 0, total: 0, header: '' };
    for (r = 0; r < rows.length; r++) for (i = 0; i < rows[r].cells.length; i++) {
      var p = place[r][i], cl = rows[r].cells[i];
      if (p.cs > 1) continue;
      if (rows[r].head) { cols[p.col].header += ' ' + (cl.text || ''); continue; }
      var k = kindOf(cl.text); p.kind = k;
      if (k === 'num') cols[p.col].num++;
      else if (k === 'text' || k === 'text!') cols[p.col].text++;
      else if (k === 'dash') cols[p.col].dash++;
    }
    for (c = 1; c < ncol; c++) {
      var col = cols[c]; col.total = col.num + col.text;
      if (TEXT_HEADER.test(col.header)) { col.align = 'left'; col.why = 'header'; continue; }
      if (!col.total) { col.align = col.dash ? 'right' : 'left'; col.why = 'empty'; continue; }
      var need = SOFT_TEXT_HEADER.test(col.header) ? 0.8 : 0.5;
      col.align = (col.num / col.total >= need) ? 'right' : 'left'; col.why = 'vote';
    }
    if (ncol) { cols[0].why = 'c0'; }
    var out = [];
    for (r = 0; r < rows.length; r++) {
      out[r] = [];
      for (i = 0; i < rows[r].cells.length; i++) {
        var q = place[r][i], cls = [];
        if (q.col === 0) cls.push('c0');
        else if (q.cs > 1) { if (rows[r].head) cls.push('span'); }
        else if (cols[q.col].align === 'right') cls.push((!rows[r].head && q.kind === 'text!') ? 'txt' : 'num');
        else if (!rows[r].head) cls.push('txt-col');
        out[r][i] = { col: q.col, cls: cls, kind: q.kind };
      }
    }
    return { cols: cols, cells: out };
  }

  /* 瀏覽器：把結果寫回 <table> */
  function apply(table) {
    var rows = [], trs = table.rows, r, i;
    for (r = 0; r < trs.length; r++) {
      var tr = trs[r], cells = [];
      var head = tr.parentNode && tr.parentNode.tagName === 'THEAD';
      for (i = 0; i < tr.cells.length; i++) {
        var td = tr.cells[i];
        cells.push({ text: td.textContent, rowspan: td.rowSpan, colspan: td.colSpan, th: td.tagName === 'TH' });
      }
      if (!head && cells.length && cells.every(function (x) { return x.th; }) && r === 0) head = true;
      rows.push({ head: head, cells: cells });
    }
    var res = classify(rows);
    for (r = 0; r < trs.length; r++) for (i = 0; i < trs[r].cells.length; i++) {
      var cls = res.cells[r][i].cls;
      for (var k = 0; k < cls.length; k++) trs[r].cells[i].classList.add(cls[k]);
    }
    return res;
  }

  var api = { kindOf: kindOf, classify: classify, apply: apply };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.WJTable = api;
})(typeof window !== 'undefined' ? window : this);
