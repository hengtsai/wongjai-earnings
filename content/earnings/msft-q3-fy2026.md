---
title: "MSFT (Microsoft) Q3 FY2026 財報深度分析"
date: 2026-04-30
ticker: "MSFT"
quarter: "2026 Q3 (FY)"
logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
color: "#00a4ef"
summary: "Azure +40% 超越自身指引、AI ARR 破 $370 億、Copilot 席位突破！但 Cal 2026 CapEx 指引 $1,900 億讓市場倒抽一口氣。MSFT 是被錯殺還是真成長放緩？本報告完整解析。"
tags: ["雲端", "AI", "Microsoft", "Azure", "Copilot", "SaaS", "企業軟體", "OpenAI"]
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
thead th{background:#00a4ef;color:#fff;padding:7px 10px;text-align:left;font-weight:600;white-space:nowrap}
tbody td{padding:7px 10px;border-bottom:1px solid #2a2d3a}
tbody tr:hover{background:rgba(0,164,239,.05)}
.good{color:#28a745;font-weight:600}.warn{color:#e67e00;font-weight:600}.bad{color:#dc3545;font-weight:600}
.sb{background:#1a1d27;border-left:4px solid #00a4ef;padding:10px 16px;margin:8px 0;border-radius:0 6px 6px 0}
.sb h3{margin:0 0 6px;font-size:14px}.sb p{margin:4px 0;font-size:13px;line-height:1.5}.sb ul{margin:4px 0;padding-left:18px}.sb li{margin-bottom:3px;font-size:13px}
.rh{border-left-color:#dc3545}.rm{border-left-color:#e67e00}.rl{border-left-color:#28a745}
.sw{overflow-x:auto;-webkit-overflow-scrolling:touch}
.disc{background:#1a1d27;border:1px solid #2a2d3a;border-radius:8px;padding:16px;margin-top:24px;font-size:12px;color:#8b8fa3;line-height:1.6}
.risk-red{color:#dc3545}.risk-gold{color:#e67e00}.risk-green{color:#28a745}
@media(max-width:600px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-card .value{font-size:18px}table{font-size:11px}td,th{padding:4px 5px}}
</style>

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q3 營收</div><div class="value">$829億</div><div class="change up">▲ 18% YoY ✅</div></div>
<div class="kpi-card"><div class="label">稀釋 EPS</div><div class="value">$4.27</div><div class="change up">▲ 21% YoY ✅</div></div>
<div class="kpi-card"><div class="label">Azure 成長</div><div class="value">+40%</div><div class="change up">▲ 超指引 37-38% 🔥</div></div>
<div class="kpi-card"><div class="label">AI ARR</div><div class="value">$370億</div><div class="change up">▲ 123% YoY 🚀</div></div>
<div class="kpi-card"><div class="label">營業利益率</div><div class="value">46.3%</div><div class="change up">▲ 0.8pp YoY</div></div>
<div class="kpi-card"><div class="label">Gross Margin</div><div class="value">67.6%</div><div class="change dn">▼ 1.8pp YoY ⚠️</div></div>
<div class="kpi-card"><div class="label">FCF</div><div class="value">$158億</div><div class="change dn">▼ 11% YoY ⚠️</div></div>
<div class="kpi-card"><div class="label">Cal 2026 CapEx</div><div class="value">$1,900億</div><div class="change dn">▲ 194% vs FY2025 🔴</div></div>
</div>

## 1. 📈 核心數據速覽

### Q3 FY2026 損益表（US$百萬）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q3 FY26</th><th>Q2 FY26</th><th>QoQ</th><th>Q3 FY25</th><th>YoY</th><th>共識預期</th><th>結果</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td>82,890</td><td>69,635</td><td class="good">+19.0%</td><td>70,202</td><td class="good">+18.1%</td><td>$81,460M</td><td class="good">🟢 Beat +$1.4B</td></tr>
<tr><td><b>Gross Profit</b></td><td>56,058</td><td>46,928</td><td class="good">+19.5%</td><td>48,147</td><td class="good">+16.4%</td><td>—</td><td class="good">🟢</td></tr>
<tr><td><b>Gross Margin %</b></td><td>67.6%</td><td>67.4%</td><td class="good">+0.2pp</td><td>~69.4%</td><td class="warn">-1.8pp</td><td>~67.5%</td><td class="good">🟢 符合預期</td></tr>
<tr><td><b>OpIncome</b></td><td>38,400</td><td>32,700</td><td class="good">+17.4%</td><td>32,005</td><td class="good">+20.0%</td><td>~$37B</td><td class="good">🟢 Beat</td></tr>
<tr><td><b>Op Margin %</b></td><td>46.3%</td><td>47.0%</td><td class="warn">-0.7pp</td><td>45.6%</td><td class="good">+0.7pp</td><td>~45.5%</td><td class="good">🟢 超標</td></tr>
<tr><td><b>Net Income</b></td><td>31,778</td><td>24,913</td><td class="good">+27.6%</td><td>25,824</td><td class="good">+23.0%</td><td>~$30B</td><td class="good">🟢 Beat</td></tr>
<tr><td><b>稀釋 EPS</b></td><td><b>$4.27</b></td><td>$3.32</td><td class="good">+28.6%</td><td>$3.52</td><td class="good">+21.3%</td><td>$4.05</td><td class="good">🟢 Beat +5.4%</td></tr>
<tr><td><b>R&D</b></td><td>8,915</td><td>7,847</td><td class="warn">+13.6%</td><td>7,942</td><td class="warn">+12.3%</td><td>—</td><td class="warn">🟡 AI 研發</td></tr>
<tr><td><b>FCF</b></td><td>15,800</td><td>19,900</td><td class="bad">-20.6%</td><td>~17,700</td><td class="warn">-10.7%</td><td>—</td><td class="warn">🟡 CapEx 吃掉 FCF</td></tr>
</tbody></table></div>

> ⚠️ **Gross Margin 警訊**：67.6% 是 2022 年以來最低，主因是 AI 資料中心折舊大增至 $25B（CFO Hood 明確說明）。但營業利益率仍創 46.3% 歷史新高，顯示費用紀律執行紀律良好。

### 分部門營收（US$百萬）

<div class="sw"><table>
<thead><tr><th>部門</th><th>Q3 FY26</th><th>Q2 FY26</th><th>QoQ</th><th>Q3 FY25</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Intelligent Cloud</b></td><td>34,680</td><td>28,620</td><td class="good">+21.2%</td><td>26,700</td><td class="good">+29.9%</td><td class="good">🟢 Azure +40% 核心引擎</td></tr>
<tr><td><b>Productivity & Business</b></td><td>35,010</td><td>29,720</td><td class="good">+17.8%</td><td>29,940</td><td class="good">+16.9%</td><td class="good">🟢 M365+LinkedIn 穩健</td></tr>
<tr><td><b>More Personal Computing</b></td><td>13,200</td><td>11,295</td><td class="good">+16.9%</td><td>13,562</td><td class="warn">-2.7%</td><td class="warn">🟡 PC 放緩 + Xbox 硬體跌</td></tr>
<tr><td><b>合計</b></td><td>82,890</td><td>69,635</td><td class="good">+19.0%</td><td>70,202</td><td class="good">+18.1%</td><td></td></tr>
</tbody></table></div>

### FY2026 前三季度（H1+H2）累積進展

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q1 FY26</th><th>Q2 FY26</th><th>Q3 FY26</th><th>前三季合計</th><th>全年預測（FY26）</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td>$65.6B</td><td>$69.6B</td><td>$82.9B</td><td>$218.1B</td><td>~$305B（指引中位數）</td></tr>
<tr><td><b>YoY 增速</b></td><td>+13.5%</td><td>+11.7%</td><td>+18.1%</td><td>+14.5%</td><td>加速中</td></tr>
<tr><td><b>Azure 成長</b></td><td>+33%</td><td>+36%</td><td>+40%</td><td>—</td><td>Q4 指引 39-40%</td></tr>
</tbody></table></div>

---

## 2. 🔍 隱藏的魔鬼細節

<div class="sb">
<h3>🎯 洞察一：Azure +40% 超越自身指引 37-38%，但 Q4 指引「只有」39-40% 是利多？</h3>
<p>Azure Q3 實際 +40%（+39% CC），超越公司自己的 37-38% 指引中位數。但 Q4 指引 39-40% CC，華爾街共識是 36.8%，所以 Microsoft 的指引仍領先市場 2-3pp。</p>
<ul>
<li><b>為何不是加速至 45%+？</b>：Azure 現已是 $120B+ 年化營收的巨型業務（Q3 推算 ~$36.6B 年化），基數效應下 +40% = 新增約 $10B 營收/年的增量</li>
<li>CFO Amy Hood 明確表示：Azure consumption growth continuing to accelerate（消費量成長持續加速）</li>
<li>關鍵：Azure 不是純量的成長，而是**AI 推動的高價值工作負載**，CPM 更高</li>
<li>➡️ <b>Microsoft 的 AI 變現模式是「消耗量變現」而非「訂閱固定費率」，這讓 Azure 的單位經濟模型更健康但也更有波動性</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察二：AI ARR $370 億 × 123% 年增 — Copilot 是下一個 M365 嗎？</h3>
<p>Microsoft 首次揭露 AI 業務年化營收運行率：<b>$370 億，+123% YoY</b>。這個數字的定義是「與 AI 服務直接相關的營收」，包括：</p>
<ul>
<li>Azure OpenAI Service（GPT-4o、o1、o3 等模型）</li>
<li>GitHub Copilot（個人版 $10/月 + 企業版 $19/人/月）</li>
<li>Microsoft 365 Copilot（$30/人/月，已有明確付費席位數）</li>
<li>Security Copilot、Dynamics AI 等企業 Copilot</li>
<li>Copilot Studio（企業客製化 AI Agent 平台）</li>
</ul>
<p>重要對比：M365 Commercial 年化營收約 $120B（Q3 M365 Cloud 營收每季約 $30B × 4），Copilot $37B ARR 已是 M365 規模的 30%。若保持 123% 增速，12 個月後 Copilot ARR 將突破 $80B，相當於再造一個 M365。</p>
<p>➡️ <b>Microsoft 的護城河不只是 Azure，而是「軟體 + AI 訂閱」的組合拳：M365 Copilot 每增加 $30/人/月都是純增量，毛利率接近 80%</b></p>
</div>

<div class="sb">
<h3>🎯 洞察三：Gross Margin 67.6%（2022 年來最低）— AI 基礎建設的代價</h3>
<p>Gross Margin 從 FY2024 年的 ~70%+ 下降至 67.6%，主因：CFO Amy Hood 說明 AI 基礎建設折舊增加（depreciation from new data center infrastructure）。</p>
<ul>
<li><b>拆解</b>：Gross Margin = Revenue - COGS。COGS 包含：(1) 資料中心電力、(2) GPU 伺服器折舊、(3) 網路頻寬成本</li>
<li>GPU 伺服器（NVIDIA H100/H200）通常 3-5 年折舊，每年折舊 ~$25B（FY2026 CapEx $190B 的攤提效應會在往後幾年陸續顯現）</li>
<li>好消息：Operating Margin 46.3% 創歷史新高，顯示 Microsoft 在 Gross Margin 壓力下透過費用紀律（OpEx growth < Revenue growth）維持營利能力</li>
<li>➡️ <b>這是「先投資後收穫」的模式：現在犧牲 GM 以後換取更高營收。關鍵問題：折舊高峰在何時？</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察四：Commercial RPO $6,270 億 × 99% 成長 — 史上最大未履行合約積壓</h3>
<p>Commercial Remaining Performance Obligations（商業未履行合約積壓）<b>$627B，+99% YoY</b>，加權平均合約期限 2.5 年：</p>
<ul>
<li>$627B 相當於 Microsoft 2 年多的營收積壓在手</li>
<li>99% 年增代表企業正在簽署「多年期大額合約」鎖定 Microsoft 的雲端和 AI 服務</li>
<li>這解釋了 Azure 為何能見度如此高：企業的 CapEx 預算正在轉化為 Microsoft 的雲端 OpEx 合約</li>
<li>對比：Microsoft FY2025 全年營收約 $262B，$627B RPO 是年營收的 2.4 倍</li>
<li>➡️ <b>$627B 的合約積壓意味著即使 Azure 新增客戶歸零，現有合約也能支撐 2-3 年的營收成長</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察五：CapEx $309 億季增，但真正的震撼彈是 Cal 2026 全年 $1,900 億指引</h3>
<p>Q3 CapEx = $30.9B（含 finance leases $31.9B），分析師預期 $35.2B，所以**實際勝過悲觀預期但仍是歷史高點**。但市場真正擔心的是：</p>
<ul>
<li>Microsoft 明確給出 Cal 2026 全年 CapEx 指引：<b>$1,900 億</b></li>
<li>對比：FY2025 全年 CapEx = $64.6B（歷史新高）；Cal 2026 = $190B → <b>年增 194%，接近 3 倍</b></li>
<li>這個數字包含：AI GPU 叢集（Stargate 計畫 10萬張 GB200）、自研 MAST 晶片、資料中心建設</li>
<li>CFO Hood 補充：其中 $25B 來自元件價格上漲（記憶體、電源、管理費用）而非純量增加</li>
<li>➡️ <b>$190B = Google 的 2.5x = Meta 的 1.4x = AWS 規模。這是史上最大的單一企業 AI 基礎建設投資承諾</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察六：PC 市場+MPC 下滑 — Xbox 硬體 -33% 是結構性問題</h3>
<p>More Personal Computing（Windows + Xbox + Surface + Bing）營收 $13.2B，-2.7% YoY，是三大部門中唯一負成長的：</p>
<ul>
<li>Xbox 硬體營收 -33%（主機 cycle 進入末期，PS5 Pro 競爭）</li>
<li>Windows OEM 持平至小幅下滑（PC 市場復甦低於預期）</li>
<li>Surface 小幅下滑</li>
<li>Offset by：Bing 搜尋廣告 + LinkedIn 廣告 雙雙增長</li>
<li>重要背景：這部門涵蓋 Activision Blizzard（遊戲訂閱 + 內容），Activision 收購於 2023 年 10 月完成，比較基期已含 Activision</li>
<li>➡️ <b>MPC 的弱點被 Intelligent Cloud 的強勁完全掩蓋。Microsoft 早已不是 PC 公司，是雲端+AI 平台</b></li>
</ul>
</div>

---

## 3. 🛡️ 護城河與展望

### 護城河評估：⭐⭐⭐⭐⭐ (5/5)

<div class="sw"><table>
<thead><tr><th>護城河類型</th><th>說明</th></tr></thead>
<tbody>
<tr><td><b>轉換成本</b></td><td>M365 + Azure + Copilot 三位一體，企業遷移成本極高；$627B RPO 為證</td></tr>
<tr><td><b>規模經濟</b></td><td>Azure 全球最大規模之一，GPU 採購議價能力碾壓競爭對手</td></tr>
<tr><td><b>網路效應</b></td><td>GitHub（1億+開發者）、LinkedIn（9.5億+用戶）形成雙邊網路</td></tr>
<tr><td><b>專利/資料</b></td><td>與 OpenAI 獨家合作（GPT-4o、o1、o3）+ 自身 MAST AI 晶片</td></tr>
<tr><td><b>政府國防合約</b></td><td>DoD、FedRAMP 高安全性認證，競爭對手難以切入</td></tr>
</tbody></table></div>

### Q4 FY2026 指引 vs 共識

<div class="sw"><table>
<thead><tr><th>項目</th><th>Microsoft 指引</th><th>市場共識</th><th>差異</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Q4 總營收</b></td><td>$86.7-87.8B（中位 $87.25B）</td><td>~$87.3B</td><td>符合</td><td class="good">🟢</td></tr>
<tr><td><b>Q4 Azure CC 成長</b></td><td>39-40%</td><td>36.8%</td><td class="good">+2-3pp 領先</td><td class="good">🟢 超預期</td></tr>
<tr><td><b>Cal 2026 CapEx</b></td><td class="bad">~$190B</td><td>~$130B</td><td class="bad">+$60B 超標</td><td class="bad">🔴 重大利空</td></tr>
<tr><td><b>OpEx（Q4）</b></td><td>$19.3-19.4B growth</td><td>—</td><td>—</td><td class="good">🟢 費用紀律良好</td></tr>
</tbody></table></div>

### 管理層可信度評估：高 (5/5)

<div class="sw"><table>
<thead><tr><th>指標</th><th>實際</th><th>指引</th><th>達成率</th><th>點評</th></tr></thead>
<tbody>
<tr><td>Q2 FY26 Azure（實際 +36%）</td><td>+36%</td><td>35-38% CC</td><td class="good">🟢 達標區間</td><td></td></tr>
<tr><td>Q3 FY26 Azure（實際 +40%）</td><td>+40%</td><td>37-38% CC</td><td class="good">🟢 超標</td><td></td></tr>
<tr><td>Q3 FY26 CapEx</td><td>$30.9B</td><td>—</td><td>—</td><td>分析師預期 $35.2B，勝過悲觀</td></tr>
<tr><td>Q3 FY26 營收</td><td>$82.9B</td><td>~$81.5B</td><td class="good">🟢 超標 +$1.4B</td><td></td></tr>
<tr><td>Q3 FY26 EPS</td><td>$4.27</td><td>$4.05</td><td class="good">🟢 超標 +5.4%</td><td></td></tr>
</tbody></table></div>

---

## 4. ⚠️ 風險提示

<h3 class="risk-red">🔴 高風險</h3>
<div class="sb rh">
<ul>
<li><b>Cal 2026 CapEx $190 億：接近 Fed 政府全年 Discretionary Spending 的 40%</b>。若 AI 變現速度不如預期，巨額 CapEx 將嚴重侵蝕 ROIC 和自由現金流</li>
<li><b>Gross Margin 持續下滑</b>：AI 資料中心折舊還沒到高峰（FY2026 CapEx $190B 的折舊效應在 FY2027-2029 才會顯現），毛利率可能進一步壓縮至 65%</li>
<li><b>利率敏感性</b>：$190B CapEx 需要大量借款融資，利率每上升 100bp 利息支出約增加 $1-2B/年</li>
</ul>
</div>

<h3 class="risk-gold">🟡 中風險</h3>
<div class="sb rm">
<ul>
<li><b>AI 支出 vs 營收增速出現剪刀差</b>：CapEx +194% 但 Revenue +18%，市場遲早會問「錢燒完了呢？」</li>
<li><b>Azure 增速接近天花板</b>：$120B+ 年化營收仍維持 40% 增速不符合機率（基數效應），Q4 指引 39-40% 隱含即將放緩</li>
<li><b>PC/遊戲硬體循環低谷</b>：Xbox Series X|S 進入第 5 年，PlayStation 5 Pro 競爭，春節後中國 PC 需求放緩</li>
<li><b>監管風險</b>：FTC 和歐盟對 Microsoft 365 Copilot 與 Azure 綑綁銷售的反壟斷調查</li>
</ul>
</div>

<h3 class="risk-green">🟢 機會</h3>
<div class="sb rl">
<ul>
<li><b>AI Copilot 訂閱貨幣化</b>：M365 Copilot $30/人/月，滲透率估計仍低於 5%，每提升 1% 滲透率 = +$3-4B/年營收</li>
<li><b>Azure OpenAI 企業採用</b>：$370 億 AI ARR 中 Azure OpenAI 佔比估計 40-50%，每增加一個企業客戶都是高價值長約</li>
<li><b>LinkedIn 加速貨幣化</b>：LinkedIn 營收年增 20%+，Premium 訂閱和 recruitment solutions 仍有巨大貨幣化空間</li>
<li><b>MAST 自研 AI 晶片</b>：若成功將降低對 NVIDIA 的依賴，長期毛利率有改善空間</li>
</ul>
</div>

---

## 5. 📊 估值觀察（非投資建議）

<div class="sw"><table>
<thead><tr><th>指標</th><th>數值（2026/04/29）</th><th>評價</th></tr></thead>
<tbody>
<tr><td><b>收盤價</b></td><td>$424.67</td><td>接近 52 週低點（低點 $374，距離 -12%）</td></tr>
<tr><td><b>市值</b></td><td>~$3.15T</td><td class="good">🟢 全球第 2 大</td></tr>
<tr><td><b>Trailing P/E</b></td><td>~26.5x</td><td class="warn">🟡 10年平均 32.8x，低於均值 19%</td></tr>
<tr><td><b>Forward P/E</b></td><td>~22.4x</td><td class="good">🟢 GuruFocus：低估 20%</td></tr>
<tr><td><b>GF Value</b></td><td>$543（當前 $424）</td><td class="good">🟢 潛在漲幅 +28%</td></tr>
<tr><td><b>EV/EBITDA</b></td><td>~18x</td><td class="warn">🟡 合理</td></tr>
<tr><td><b>P/S</b></td><td>~10x</td><td class="warn">🟡 Mega Cap 中偏高</td></tr>
<tr><td><b>FCF Yield</b></td><td>~5.3%</td><td class="good">🟢 健康</td></tr>
<tr><td><b>Dividend Yield</b></td><td>~0.8%</td><td>每股 $3.32/年</td></tr>
</tbody></table></div>

### 同業估值比較（2026/04/29）

<div class="sw"><table>
<thead><tr><th>公司</th><th>Forward PE</th><th>Forward P/E vs 5年平均</th><th>P/S</th><th>營收增速</th><th>營業利益率</th></tr></thead>
<tbody>
<tr><td><b>MSFT</b></td><td class="good">22.4x</td><td class="good">低於均值 20%</td><td class="warn">~10x</td><td class="good">+18%</td><td class="good">46.3%</td></tr>
<tr><td>GOOG</td><td class="good">~17x</td><td>合理</td><td class="good">~6x</td><td>+22%</td><td>32%</td></tr>
<tr><td>META</td><td class="warn">~25x</td><td>合理</td><td class="bad">~9.5x</td><td class="good">+33%</td><td class="good">41%</td></tr>
<tr><td>AMZN</td><td class="good">~25x</td><td>合理</td><td class="good">~3x</td><td>+17%</td><td class="warn">13%</td></tr>
<tr><td>NVDA</td><td class="bad">~35x</td><td>歷史高點</td><td class="bad">~25x</td><td class="good">+60%</td><td>~55%</td></tr>
</tbody></table></div>

<div class="sb">
<h3>估值解讀</h3>
<p>MSFT 是目前 Mega Cap 中估值最合理的之一：Forward P/E 22.4x，低於 5 年平均 20%，同時營收增速 18% 和營業利益率 46.3% 都是頂級水準。GuruFocus GF Value $543 vs 現價 $424，隱含 28% 潛在上漲空間。</p>
<p>但估值便宜的背後是市場對 CapEx 的焦慮。$190B CapEx = 自由現金流的巨大消耗：Q3 FCF $15.8B，但全年 CapEx 估計 $130B（FY26）+ $60B（H1 FY27），遠超 FCF 生成能力。</p>
<p>關鍵問題：Microsoft 的「AI ROI 償債時間表」是什麼？CEO Nadella 的說法是「CapEx 在 2027-2028 年開始轉化為顯著營收成長」。若這個時間表屬實，則 $190B CapEx 是佈局未來的必要之惡；若不屬實，則是史上最大的資本浪費之一。</p>
</div>

---

## 6. 📋 總結

<div class="sb rl">
<h3>MSFT Q3 FY2026 — 「成長無虞，資金饑渴」</h3>
<ul>
<li>✅ 營收 $82.9B (+18%) 超預期，Azure +40% 超越自身指引，AI ARR $370B (+123%)</li>
<li>✅ EPS $4.27 超預期 5.4%，Op Margin 46.3% 創歷史新高</li>
<li>✅ Commercial RPO $627B (+99%)，可見度史上最高</li>
<li>✅ Copilot 貨幣化加速：M365 Copilot 席位持續增加，GitHub Copilot 企業版採用率提升</li>
<li>✅ Q4 指引符合預期，Azure 39-40% 成長領先市場共識 2-3pp</li>
<li>✅ 股價 $424，Forward PE 22.4x，低於 10 年平均 20%，估值吸引力浮現</li>
<li>⚠️ Gross Margin 67.6%（2022 年來最低），AI 折舊尚未到頂</li>
<li>⚠️ Cal 2026 CapEx 指引 $190B，幾乎是 FY2025 的 3 倍</li>
<li>⚠️ FCF $15.8B（-11% YoY），CapEx 吃掉大量現金</li>
<li>⚠️ MPC 部門下滑（Xbox -33%），PC 市場未如預期復甦</li>
</ul>
</div>

<div class="sb rl">
<p><b>一句話</b>：Microsoft 是目前 AI 時代「最確定」的投資 — Azure 護城河深、AI ARR 增速驚人、Copilot 訂閱模式健康。但 $190B CapEx 是一張「超級支票」，能不能兌現，決定 Microsoft 是下一個 AWS 還是下一個 Cisco。</p>
</div>

<div class="disc">
<p><b>⚠️ 免責聲明</b>：本報告僅為客觀戰略分析，不構成任何買入或賣出建議。所有數據來自公開資訊，請自行查證。</p>
<p><b>資料來源</b>：Microsoft FY26 Q3 Earnings Release (2026/04/29) | Microsoft IR | CNBC | Seeking Alpha | Barrons | GuruFocus | Quartz | The Verge | GeekWire | MarketWatch | Yahoo Finance | FinanceCharts | Bloomberg</p>
</div>
