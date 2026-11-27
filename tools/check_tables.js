#!/usr/bin/env node
/* 表格對齊檢查（2026-11-28 改版）。用法：
     hugo -d /tmp/check-public            （不要 --minify，結束標籤才完整）
     node tools/check_tables.js /tmp/check-public [要列出細節的文章代稱…]
   用和瀏覽器同一份規則（themes/wongjai-theme/static/js/table-align.js）跑每篇文章的每張表，
   統計靠右／靠左的欄位，並列出可疑的欄位讓人複核。只讀檔案。 */
const fs = require('fs'), path = require('path');
const W = require('../themes/wongjai-theme/static/js/table-align.js');
const root = process.argv[2], detail = new Set(process.argv.slice(3));
const strip = s => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
function parseTable(html) {
  const rows = [], headEnd = html.search(/<\/thead>/i);
  const re = /<tr[^>]*>([\s\S]*?)<\/tr>/gi; let m;
  while ((m = re.exec(html))) {
    const cells = [], cre = /<(t[dh])([^>]*)>([\s\S]*?)<\/\1>/gi; let c;
    while ((c = cre.exec(m[1]))) {
      const rs = /rowspan=["']?(\d+)/i.exec(c[2]), cs = /colspan=["']?(\d+)/i.exec(c[2]);
      cells.push({ text: strip(c[3]), rowspan: rs ? +rs[1] : 1, colspan: cs ? +cs[1] : 1, th: c[1].toLowerCase() === 'th' });
    }
    let head = headEnd >= 0 && m.index < headEnd;
    if (!head && headEnd < 0 && rows.length === 0 && cells.length && cells.every(x => x.th)) head = true;
    rows.push({ head, cells });
  }
  return rows;
}
const dir = path.join(root, 'earnings');
const tot = { pages: 0, tables: 0, cols: 0, right: 0, left: 0, c0: 0, spanTables: 0, spanPages: new Set(), txtCells: 0, cells: 0 };
const suspicious = [], forced = [];
for (const slug of fs.readdirSync(dir).sort()) {
  const f = path.join(dir, slug, 'index.html'); if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, 'utf8'); const a = html.indexOf('class="article-content"'); if (a < 0) continue;
  tot.pages++;
  const body = html.slice(a); const tre = /<table[^>]*>([\s\S]*?)<\/table>/gi; let t, ti = 0;
  while ((t = tre.exec(body))) {
    ti++; tot.tables++;
    const rows = parseTable(t[1]); const res = W.classify(rows);
    const hasSpan = rows.some(r => r.cells.some(c => c.rowspan > 1 || c.colspan > 1));
    if (hasSpan) { tot.spanTables++; tot.spanPages.add(slug); }
    res.cols.forEach((c, i) => {
      tot.cols++; if (i === 0) { tot.c0++; return; }
      if (c.align === 'right') tot.right++; else tot.left++;
      const hdr = c.header.trim();
      if (c.align === 'right' && c.total >= 3 && c.text / c.total > 0.34) suspicious.push(`${slug} 表${ti} 欄${i}「${hdr}」靠右但文字格 ${c.text}/${c.total}`);
      if (c.align === 'left' && c.why === 'header' && c.total >= 3 && c.num === c.total) forced.push(`${slug} 表${ti} 欄${i}「${hdr}」表頭判文字欄，但 ${c.num} 格都是數值`);
      if (c.align === 'left' && c.why === 'vote' && c.total >= 3 && c.num / c.total >= 0.5) forced.push(`${slug} 表${ti} 欄${i}「${hdr}」表頭含對照／指引類字眼，數值 ${c.num}/${c.total} 未達八成 → 靠左`);
    });
    res.cells.forEach((r, ri) => r.forEach(c => { if (!rows[ri].head) { tot.cells++; if (c.cls.includes('txt')) tot.txtCells++; } }));
    if (detail.has(slug) && (hasSpan || detail.has('all'))) {
      console.log(`\n== ${slug} 表${ti}（${hasSpan ? '有合併儲存格' : '一般'}）`);
      console.log('   欄位：' + res.cols.map((c, i) => `${i}:${i === 0 ? 'c0' : c.align === 'right' ? '右' : '左'}「${c.header.trim().slice(0, 10)}」`).join(' '));
      rows.forEach((r, ri) => { if (r.cells.some(c => c.rowspan > 1 || c.colspan > 1) || (ri > 0 && rows[ri - 1].cells.some(c => c.rowspan > 1)))
        console.log('   列' + ri + '：' + r.cells.map((c, ci) => `[欄${res.cells[ri][ci].col}${c.rowspan > 1 ? ' rs' + c.rowspan : ''}${c.colspan > 1 ? ' cs' + c.colspan : ''} ${res.cells[ri][ci].cls.join('.') || '-'}] ${c.text.slice(0, 16)}`).join(' | ')); });
    }
  }
}
console.log(`\n文章 ${tot.pages} 篇、表格 ${tot.tables} 張、欄位 ${tot.cols} 個：第 1 欄 ${tot.c0}、靠右 ${tot.right}、靠左 ${tot.left}`);
console.log(`有合併儲存格的表 ${tot.spanTables} 張，在 ${tot.spanPages.size} 篇：${[...tot.spanPages].join('、')}`);
console.log(`資料格 ${tot.cells} 個，其中「數字欄裡的文字格」（改成靠左可換行）${tot.txtCells} 個`);
console.log(`\n可疑（靠右但文字格超過 1/3）：${suspicious.length} 欄`); suspicious.slice(0, 40).forEach(s => console.log('  ? ' + s));
console.log(`\n被表頭規則留在靠左的數值欄：${forced.length} 欄`); forced.slice(0, 25).forEach(s => console.log('  · ' + s));
