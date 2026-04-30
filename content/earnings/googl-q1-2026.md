---
title: "GOOG (Alphabet) Q1 2026 財報深度分析"
date: 2026-04-30
ticker: "GOOG"
quarter: "2026 Q1"
logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128"
color: "#4285f4"
summary: "Q1 營收 $1,099 億超預期，Cloud +63% 噴發，EPS $5.11 大爆擊！但 CapEx $357 億翻倍吞噬 FCF — Google 正用現金換 AI 霸主地位。"
tags: ["AI", "Alphabet", "Google Cloud", "Gemini", "搜尋廣告"]
author: "Wongjai ⚡"
draft: false
---

<style>
.kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:24px}
.kpi-card{background:#1a1d27;border:1px solid #2a2d3a;border-radius:8px;padding:14px;text-align:center}
.kpi-card .label{font-size:12px;color:#8b8fa3;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
.kpi-card .value{font-size:24px;font-weight:700;color:#fff}
.kpi-card .change{font-size:13px;margin-top:2px}
.up{color:#28a745}.dn{color:#dc3545}.wn{color:#e67e00}
table{width:100%;border-collapse:collapse;margin:12px 0;font-size:13px}
thead th{background:#4285f4;color:#fff;padding:7px 10px;text-align:left;font-weight:600;white-space:nowrap}
tbody td{padding:7px 10px;border-bottom:1px solid #2a2d3a}
tbody tr:hover{background:rgba(66,133,244,.05)}
.good{color:#28a745;font-weight:600}.warn{color:#e67e00;font-weight:600}.bad{color:#dc3545;font-weight:600}
.sb{background:#1a1d27;border-left:4px solid #4285f4;padding:10px 16px;margin:8px 0;border-radius:0 6px 6px 0}
.sb h3{margin:0 0 6px;font-size:14px}.sb p{margin:4px 0;font-size:13px;line-height:1.5}.sb ul{margin:4px 0;padding-left:18px}.sb li{margin-bottom:3px;font-size:13px}
.rh{border-left-color:#dc3545}.rm{border-left-color:#e67e00}.rl{border-left-color:#28a745}
.sw{overflow-x:auto;-webkit-overflow-scrolling:touch}
.disc{background:#1a1d27;border:1px solid #2a2d3a;border-radius:8px;padding:16px;margin-top:24px;font-size:12px;color:#8b8fa3;line-height:1.6}
.risk-red{color:#dc3545}.risk-gold{color:#e67e00}.risk-green{color:#28a745}
@media(max-width:600px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-card .value{font-size:18px}table{font-size:11px}td,th{padding:4px 5px}}
</style>

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q1 營收</div><div class="value">$1,099億</div><div class="change up">▲ 22% YoY</div></div>
<div class="kpi-card"><div class="label">毛利率</div><div class="value">~60%</div><div class="change up">▲ 2pp YoY</div></div>
<div class="kpi-card"><div class="label">Q1 EPS</div><div class="value">$5.11</div><div class="change up">▲ 82% YoY</div></div>
<div class="kpi-card"><div class="label">Google Cloud</div><div class="value">$200億</div><div class="change up">▲ 63% YoY 🚀</div></div>
<div class="kpi-card"><div class="label">淨利</div><div class="value">$626億</div><div class="change up">▲ 81% YoY</div></div>
<div class="kpi-card"><div class="label">營運現金流</div><div class="value">$458億</div><div class="change up">▲ 27% YoY</div></div>
<div class="kpi-card"><div class="label">CapEx</div><div class="value">$357億</div><div class="change dn">▲ 100% YoY 🔴</div></div>
<div class="kpi-card"><div class="label">現金+短投</div><div class="value">~$1,200億+</div><div class="change up">🟢 堡壘級</div></div>
</div>

## 1. 📈 核心數據速覽

### Q1 2026 損益表（US$億，除每股數據外）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q1 '26</th><th>Q4 '25</th><th>QoQ</th><th>Q1 '25</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td>1,099</td><td>1,138.3</td><td class="warn">-3.5%</td><td>902.3</td><td class="good">+22%</td><td class="good">🟢 Q1 季節性淡季仍強勁，超預期 $106.6B</td></tr>
<tr><td><b>毛利率</b></td><td>~60%</td><td>59.8%</td><td class="good">+0.2pp</td><td>~58%</td><td class="good">+2pp</td><td class="good">🟢 搜尋印鈔機持續改善</td></tr>
<tr><td><b>營業利益率</b></td><td>32%</td><td>31.6%</td><td class="good">+0.4pp</td><td>31%</td><td class="good">+1pp</td><td class="good">🟢 營運槓桿可見</td></tr>
<tr><td><b>淨利率</b></td><td>57%</td><td>30.3%</td><td class="good">+26.7pp</td><td>30%</td><td class="good">+27pp</td><td class="good">🟢 含業外其他收入貢獻</td></tr>
<tr><td><b>EPS (Diluted)</b></td><td><b>$5.11</b></td><td>$2.81</td><td class="good">+82%</td><td>$2.81</td><td class="good">+82%</td><td class="good">🟢 大超預期 $2.63</td></tr>
<tr><td><b>淨利</b></td><td>62,600M</td><td>34,455M</td><td class="good">+82%</td><td>34,500M</td><td class="good">+81%</td><td class="good">🟢 歷史新高</td></tr>
<tr><td><b>R&D</b></td><td>~18,000M</td><td>18,572M</td><td class="good">-3%</td><td>14,500M</td><td class="warn">+24%</td><td class="warn">🟡 AI 投入仍大</td></tr>
<tr><td><b>SBC</b></td><td>~7,000M</td><td>7,071M</td><td class="good">-1%</td><td>5,800M</td><td class="warn">+21%</td><td class="warn">🟡 人才成本持續</td></tr>
</tbody></table></div>

### 分部門營收

<div class="sw"><table>
<thead><tr><th>部門</th><th>Q1 '26</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Google Search & Other</b></td><td>$59.65B</td><td class="good">+13%</td><td class="good">🟢 搜尋廣告韌性強，沒被 AI 搜尋取代</td></tr>
<tr><td><b>YouTube Ads</b></td><td>$9.88B</td><td class="good">+11%</td><td class="good">🟢 短影音貨幣化持續</td></tr>
<tr><td><b>Google Cloud</b></td><td><b>$20.03B</b></td><td class="good"><b>+63% 🚀</b></td><td class="good">🟢 AI 需求驅動，增速 > AWS (19%) & Azure (33%)</td></tr>
<tr><td><b>訂閱/平台/裝置</b></td><td>$15.5B</td><td class="good">+19%</td><td class="good">🟢 YouTube Premium、Pixel 持續成長</td></tr>
<tr><td><b>網路廣告</b></td><td>$7.95B</td><td class="good">+12%</td><td class="good">🟢 穩定貢獻</td></tr>
</tbody></table></div>

<div class="sb rl">
<p><b>關鍵轉折</b>：Google Cloud 營業利益率從 Q4 2025 的 <b>20%</b> 飆升至 Q1 2026 的 <b>27%</b>（+7pp 單季）🟢 — 從「成長故事」正式轉為「利潤機器」。</p>
</div>

### 資產負債表（Q1 '26 估 vs Q4 '25）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q1 '26 (估)</th><th>Q4 '25</th><th>變化</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>現金+短投</b></td><td>~$1,200B+</td><td>$1,268.4B</td><td class="warn">-5%</td><td class="warn">🟡 CapEx 消耗</td></tr>
<tr><td><b>應收帳款</b></td><td>~$650B</td><td>$628.9B</td><td class="good">+3%</td><td class="good">🟢 與營收增速匹配</td></tr>
<tr><td><b>PP&E</b></td><td>~$2,800B+</td><td>$2,618.2B</td><td class="warn">+7%</td><td class="warn">🟡 AI 資料中心擴建</td></tr>
<tr><td><b>長期負債</b></td><td>~$500B</td><td>$465.5B</td><td class="warn">+7%</td><td class="warn">🟡 發債籌資 AI 基建</td></tr>
<tr><td><b>股東權益</b></td><td>~$4,200B</td><td>$4,152.7B</td><td class="good">+1%</td><td class="good">🟢 穩定增長</td></tr>
<tr><td><b>流動比率</b></td><td>~2.0x</td><td>2.01x</td><td class="good">持平</td><td class="good">🟢 安全水位</td></tr>
</tbody></table></div>

### 現金流量

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q1 '26</th><th>Q1 '25</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營運現金流</b></td><td>$45.8B</td><td>$36.1B</td><td class="good">+27%</td><td class="good">🟢 現金創造力強</td></tr>
<tr><td><b>資本支出</b></td><td><b>$35.7B</b></td><td>$17.8B</td><td class="bad"><b>+100% 🔴</b></td><td class="bad">🔴 AI 軍備競賽翻倍</td></tr>
<tr><td><b>自由現金流</b></td><td><b>$10.1B</b></td><td>$18.3B</td><td class="bad"><b>-45% 🔴</b></td><td class="bad">🔴 CapEx 吞噬</td></tr>
<tr><td><b>TTM FCF</b></td><td>$64.4B</td><td>—</td><td class="bad">-14% 🔴</td><td class="bad">🔴 趨勢向下</td></tr>
</tbody></table></div>

---

## 2. 🔍 隱藏的魔鬼細節

<div class="sb">
<h3>🎯 洞察一：EPS $5.11 vs $2.63 的謎題 — 其他收入大爆發</h3>
<p>Q1 2026 EPS $5.11 遠超預期 $2.63，也遠超 Q4 2025 的 $2.81。主要驅動力不是營運改善（即使 Cloud 有貢獻），而是<b>「其他收入」</b>大幅增加。這可能來自：</p>
<ul>
<li>① 權益法投資收益（如 Stripe、Anthropic 等未上市持股市值上升）</li>
<li>② 利率環境下的利息收入增加</li>
<li>③ 一次性收益</li>
</ul>
<p><b>需看 10-Q 細項確認</b> — 若為經常性收益，則 EPS 估值模型需大幅上調；若為一次性項目，則 Q2 可能回歸正常。</p>
</div>

<div class="sb">
<h3>🎯 洞察二：CapEx $35.7B 單季 — 比 NVDA 的季度營收還高</h3>
<p>Q1 CapEx $35.7B，較 Q1 2025 的 $17.8B 翻倍。全年化 CapEx 約 <b>$143B</b>。對比競爭對手：</p>
<ul>
<li>Microsoft：$80B+ 年化</li>
<li>Amazon：$75B+ 年化</li>
<li>Meta：$35-40B 年化</li>
<li><b>Google：$143B 年化 → 超過所有非 NVDA 公司</b></li>
</ul>
<p>這代表 Google 在 AI 基礎設施投資上已經進入了「不惜一切代價」的模式。</p>
</div>

<div class="sb">
<h3>🎯 洞察三：Google Cloud 從「成長」到「利潤機器」的質變</h3>
<p>Cloud 營收 $20.03B (+63%)，營業利益率從 20% → 27%（<b>+7pp 單季</b>）。這代表 Cloud 營業利益約 <b>$5.4B</b>（$20.03B × 27%）。</p>
<ul>
<li>相較 Q1 2025 的 Cloud 虧損或極低利潤，這是一個質的飛躍</li>
<li><b>GCP 增速 (+63%) > AWS (19%) > Azure (33%)</b> — 市佔正在提升</li>
<li>若全年 Cloud 營收 ~$800B+，營業利益率達 30%→ $240B+ 營業利益</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察四：FCF 被 CapEx 吞噬 — 用現金換明天</h3>
<p>OCF $45.8B 非常強勁，但 CapEx $35.7B 吃掉 <b>78%</b> 的 OCF。FCF 從 $18.3B 腰斬至 $10.1B。TTM FCF 從 $73.3B 降至 $64.4B（-14%）。</p>
<ul>
<li>這是 Google 史上 FCF 壓力最大的時期</li>
<li>管理層的選擇：今天的現金流 → 明天的 AI 基礎設施護城河</li>
<li>關鍵變數：2027 年 CapEx 是否開始回落，屆時 FCF 將爆發</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察五：搜尋廣告 +13% — 沒被 AI 搜尋取代</h3>
<p>市場擔心 AI 搜尋（ChatGPT Search、Perplexity、Gemini）會侵蝕 Google Search 的廣告業務，但數據顯示搜尋廣告持續 +13% YoY。</p>
<ul>
<li>AI Overview（AI 摘要）已覆蓋 <b>10 億+</b> 用戶</li>
<li>反而增加了搜尋的使用頻率和廣告曝光</li>
<li>搜尋廣告營收 $59.65B — 單季接近 $600 億，現金流引擎穩如泰山</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察六：長期負債持續增加 — 發債籌資 AI 基建</h3>
<p>長期負債從 Q4 2025 的 $465.5B 進一步增加。Google 過去幾乎不發債，但在 AI 軍備競賽中被迫舉債。</p>
<ul>
<li>不過 <b>$1,200B+</b> 的現金短投仍是堡壘級緩衝</li>
<li>淨現金仍達 ~$700B，財務風險極低</li>
<li>這是「用最便宜的資金（低利率發債）為最高回報的投資（AI 基建）融資」的理性選擇</li>
</ul>
</div>

---

## 3. 🛡️ 護城河與未來展望

### 護城河分析（4.5/5 ⭐）

<div class="sw"><table>
<thead><tr><th>類型</th><th>說明</th></tr></thead>
<tbody>
<tr><td><b>網路效應</b></td><td>Search 90%+ 全球市佔，使用者越多 → 數據越多 → 搜尋越好</td></tr>
<tr><td><b>規模經濟</b></td><td>YouTube 20億+ MAU，Android 30億+ 設備，Gmail 18億+ 用戶</td></tr>
<tr><td><b>品牌</b></td><td>"Google it" = 搜尋代名詞</td></tr>
<tr><td><b>AI 技術</b></td><td>Gemini、TPU v6、DeepMind — 研發實力全球頂尖</td></tr>
<tr><td><b>數據護城河</b></td><td>20 年搜尋數據 + YouTube + Maps = 無法複製的訓練資料</td></tr>
</tbody></table></div>

### 管理層指引

<div class="sw"><table>
<thead><tr><th>項目</th><th>指引</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>2026 CapEx</b></td><td>~$750億+</td><td class="bad">🔴 持續軍備競賽，全年化 ~$143B</td></tr>
<tr><td><b>Cloud 成長</b></td><td>+35-40% YoY</td><td class="good">🟢 高速增長，市佔持續提升</td></tr>
<tr><td><b>Gemini 商用</b></td><td>成長迅速</td><td class="good">🟢 API token +400% YoY</td></tr>
<tr><td><b>AI 供給約束</b></td><td>全年受限</td><td class="warn">🟡 需求 > 供給，利好 Cloud 定價</td></tr>
</tbody></table></div>

---

## 4. ⚠️ 風險提示

<h3 class="risk-red">🔴 高風險</h3>
<div class="sb rh">
<ul>
<li><b>CapEx 吞噬 FCF</b>：單季 CapEx $35.7B，FCF 腰斬至 $10.1B。若 AI 報酬率不如預期，ROIC 將大幅下降</li>
<li><b>反壟斷訴訟</b>：DOJ 對 Search 獨佔案持續，可能分拆 Chrome 或改變搜尋預設協議</li>
<li><b>長期負債增加</b>：發債速度加快，槓桿率從極低水位上升中</li>
</ul>
</div>

<h3 class="risk-gold">🟡 中風險</h3>
<div class="sb rm">
<ul>
<li><b>AI 搜尋轉型不確定性</b>：AI Overview 雖提升用戶體驗，但可能降低廣告點擊率</li>
<li><b>R&D 成本剛性</b>：若營收增速放緩至 10% 以下，費用剛性將壓縮利潤率</li>
<li><b>Cloud 競爭</b>：AWS 市佔 31% vs Google 12%，差距仍大</li>
</ul>
</div>

<h3 class="risk-green">🟢 機會</h3>
<div class="sb rl">
<ul>
<li><b>Cloud 利潤率持續擴張</b>：27% → 目標 30%+，利潤引擎加速</li>
<li><b>Gemini API 商用爆炸性成長</b>：API token +400%，企業客戶快速增長</li>
<li><b>Waymo 自駕商業化加速</b>：營運城市持續擴張</li>
<li><b>估值相對便宜</b>：Forward PE ~17-18x 在 Mag 7 中最低之一</li>
</ul>
</div>

---

## 5. 📊 估值觀察（非投資建議）

<div class="sw"><table>
<thead><tr><th>估值指標</th><th>數值</th><th>說明</th></tr></thead>
<tbody>
<tr><td><b>股價</b></td><td>$349.94</td><td>2026/04/29 收盤</td></tr>
<tr><td><b>市值</b></td><td>~$3.8T</td><td>全球第二大公司</td></tr>
<tr><td><b>EPS (TTM)</b></td><td>$10.81 (FY2025) + Q1 $5.11</td><td class="good">🟢 TTM EPS ~$15.92</td></tr>
<tr><td><b>Forward PE</b></td><td>~17-18x</td><td class="good">🟢 Mag 7 中最便宜之一</td></tr>
<tr><td><b>P/S</b></td><td>~3.5x (TTM)</td><td class="good">🟢 合理偏低</td></tr>
<tr><td><b>FCF Yield</b></td><td>~1.7%</td><td class="warn">🟡 CapEx 壓縮，低於歷史</td></tr>
<tr><td><b>EV/EBITDA</b></td><td>~15-16x</td><td class="good">🟢 低於歷史中位數</td></tr>
</tbody></table></div>

<div class="sb">
<p><b>估值解讀</b>：Forward PE ~17-18x 在 Mag 7 中僅高於 Meta，遠低於微軟 (~30x)、蘋果 (~32x)、NVIDIA (~25x)。市場尚未充分定價 Cloud + Gemini 的獲利潛力。若 2026 全年 EPS ~$20（Q1 $5.11 × 4 保守估計），Forward PE 僅 <b>~17.5x</b>。</p>
</div>

---

## 6. 📋 總結

<div class="sb rl">
<h3>GOOG Q1 2026 總結</h3>
<ul>
<li>✅ Q1 營收 $1,099 億（+22% YoY）超預期 $106.6B</li>
<li>✅ EPS $5.11（+82% YoY）大超預期 $2.63</li>
<li>✅ Google Cloud $200 億（+63%），營業利益率 27%（+7pp QoQ）— 利潤引擎正式啟動</li>
<li>✅ 搜尋廣告 +13%，AI Overview 並未侵蝕搜尋印鈔機</li>
<li>⚠️ CapEx $35.7B 翻倍，FCF 腰斬至 $10.1B — 史上最大投資周期</li>
<li>⚠️ 長期負債持續增加，反壟斷訴訟懸而未決</li>
</ul>
</div>

<div class="sb rl">
<p><b>一句話</b>：FCF 腰斬、CapEx 翻倍、Cloud 63% — Google 正用今天的現金流換取 AI 時代的霸主地位。EPS $5.11 大爆擊證明策略正在奏效，但 $35.7B 單季 CapEx 的豪賭能否回收，2027 年見分曉。</p>
</div>

<div class="disc">
<h3 style="color:#8b8fa3;margin:0 0 8px">⚠️ 免責聲明</h3>
<p>本報告僅為客觀戰略分析，不構成任何買入或賣出建議。所有數據來自公開資訊，請自行查證。</p>
<p style="margin-top:8px"><b>資料來源</b>：Alphabet Q1 2026 Earnings Release (2026/04/29) | MarketBeat | Seeking Alpha | The Motley Fool | 9to5Google | Stock Titan</p>
</div>
