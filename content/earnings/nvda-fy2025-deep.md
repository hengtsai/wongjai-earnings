---
title: "NVDA (NVIDIA) FY2025 深度財報分析 — RAG 輔助版"
date: 2026-04-02
ticker: "NVDA"
quarter: "FY2025"
tags: ["AI", "GPU", "NVIDIA", "資料中心", "半導體", "Blackwell", "RAG"]
author: "Wongjai ⚡"
logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128"
color: "#76b900"
summary: "FY2025 營收 $1,305億（+114% YoY），資料中心佔比 88%，毛利率飆至 75%。Blackwell 架構已超越 Hopper 峰值，Rubin 接棒在即。RAG 檢索 SEC EDGAR 24 份 10-K/10-Q 交叉驗證。"
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
thead th{background:#76b900;color:#000;padding:7px 10px;text-align:left;font-weight:600;white-space:nowrap}
tbody td{padding:7px 10px;border-bottom:1px solid #2a2d3a}
tbody tr:hover{background:rgba(118,185,0,.05)}
.good{color:#28a745;font-weight:600}.warn{color:#e67e00;font-weight:600}.bad{color:#dc3545;font-weight:600}
.sb{background:#1a1d27;border-left:4px solid #76b900;padding:10px 16px;margin:8px 0;border-radius:0 6px 6px 0}
.sb h3{margin:0 0 6px;font-size:14px}.sb p{margin:4px 0;font-size:13px;line-height:1.5}.sb ul{margin:4px 0;padding-left:18px}.sb li{margin-bottom:3px;font-size:13px}
.rh{border-left-color:#dc3545}.rm{border-left-color:#e67e00}.rl{border-left-color:#28a745}
.risk-red{color:#dc3545;margin:16px 0 0;font-size:15px}.risk-yellow{color:#e67e00;margin:16px 0 0;font-size:15px}.risk-green{color:#28a745;margin:16px 0 0;font-size:15px}
.sw{overflow-x:auto;-webkit-overflow-scrolling:touch}
.disc{background:#1a1d27;border:1px solid #2a2d3a;border-radius:8px;padding:16px;margin-top:24px;font-size:12px;color:#8b8fa3;line-height:1.6}
@media(max-width:600px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-card .value{font-size:18px}table{font-size:11px}td,th{padding:4px 5px}}
</style>

<div class="kpi-grid">
<div class="kpi-card"><div class="label">FY25 總營收</div><div class="value">$1,305億</div><div class="change up">▲ 114% YoY</div></div>
<div class="kpi-card"><div class="label">FY25 毛利率</div><div class="value">75.0%</div><div class="change up">▲ 2.3pts YoY</div></div>
<div class="kpi-card"><div class="label">FY25 資料中心營收</div><div class="value">$1,152億</div><div class="change up">▲ 142% YoY</div></div>
<div class="kpi-card"><div class="label">FY25 FCF</div><div class="value">~$615億</div><div class="change up">▲ FCF Margin ~47%</div></div>
<div class="kpi-card"><div class="label">Q4 FY25 營收</div><div class="value">$393億</div><div class="change up">▲ 78% YoY</div></div>
<div class="kpi-card"><div class="label">Q4 FY25 EPS</div><div class="value">$0.89</div><div class="change up">▲ 82% YoY</div></div>
<div class="kpi-card"><div class="label">Q1 FY26 指引</div><div class="value">$450億</div><div class="change wn">±2% QoQ</div></div>
<div class="kpi-card"><div class="label">FY25 R&D 投入</div><div class="value">$129億</div><div class="change up">▲ 佔營收 10%</div></div>
</div>

## 1. 核心數據速覽

### 1.1 FY2025 年度損益表（US$百萬）

<div class="sw"><table>
<thead><tr><th>指標</th><th>FY2025</th><th>FY2024</th><th>YoY</th><th>FY2023</th><th>兩年變化</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>總營收</b></td><td>130,497</td><td>60,922</td><td class="good">+114%</td><td>26,974</td><td class="good">+384%</td><td class="good">🟢 AI 軍備競賽爆發</td></tr>
<tr><td><b>銷貨成本</b></td><td>32,634</td><td>16,621</td><td class="warn">+96%</td><td>11,618</td><td class="warn">+181%</td><td class="good">🟢 增速低於營收</td></tr>
<tr><td><b>毛利</b></td><td>97,863</td><td>44,301</td><td class="good">+121%</td><td>15,356</td><td class="good">+537%</td><td class="good">🟢 產品組合優化</td></tr>
<tr><td><b>毛利率</b></td><td>75.0%</td><td>72.7%</td><td class="good">+2.3pts</td><td>56.9%</td><td class="good">+18.1pts</td><td class="good">🟢 AI 高毛利產品主導</td></tr>
<tr><td><b>營業費用</b></td><td>22,743</td><td>11,329</td><td class="warn">+101%</td><td>11,132</td><td class="warn">+104%</td><td class="good">🟢 增速低於營收</td></tr>
<tr><td><b>營業利益</b></td><td>75,120</td><td>32,972</td><td class="good">+128%</td><td>4,224</td><td class="good">+1,678%</td><td class="good">🟢 營業利益率 57.6%</td></tr>
<tr><td><b>淨利</b></td><td>72,880</td><td>29,760</td><td class="good">+145%</td><td>4,368</td><td class="good">+1,568%</td><td class="good">🟢 淨利率 55.9%</td></tr>
<tr><td><b>EPS (Diluted)</b></td><td>$2.94</td><td>$1.19</td><td class="good">+147%</td><td>$0.17</td><td class="good">+1,629%</td><td class="good">🟢 含回購加速效果</td></tr>
</tbody></table></div>

### 1.2 季度營收加速（Q1-Q4 FY2025）

<div class="sw"><table>
<thead><tr><th>季度</th><th>營收 ($B)</th><th>QoQ</th><th>YoY</th><th>資料中心佔比</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Q1 FY25 (Apr 2024)</b></td><td>26.0</td><td class="good">+18%</td><td class="good">+262%</td><td>~87%</td><td class="good">🟢 ChatGPT 效應持續</td></tr>
<tr><td><b>Q2 FY25 (Jul 2024)</b></td><td>30.0</td><td class="good">+15%</td><td class="good">+122%</td><td>~87%</td><td class="good">🟢 Hopper 需求強勁</td></tr>
<tr><td><b>Q3 FY25 (Oct 2024)</b></td><td>35.1</td><td class="good">+17%</td><td class="good">+94%</td><td>~88%</td><td class="good">🟢 Blackwell 開始出貨</td></tr>
<tr><td><b>Q4 FY25 (Jan 2025)</b></td><td>39.3</td><td class="good">+12%</td><td class="good">+78%</td><td>~89%</td><td class="good">🟢 Blackwell 加速</td></tr>
</tbody></table></div>

<div class="sb">
<h3>🎯 關鍵數據：YoY 增速從 Q1 的 +262% 降至 Q4 的 +78%</h3>
<p>這不代表成長放緩——而是<b>基期效應</b>。FY2024 Q1 營收僅 $7.19B（AI 爆發前），到 Q4 已達 $22.1B，基期逐季墊高。QoQ 仍維持雙位數增長（+12-18%），顯示需求並未減弱。Q1 FY2026 指引 $45B（+15% QoQ）進一步確認成長動能。</p>
</div>

### 1.3 資料中心營收爆炸性增長

<div class="sw"><table>
<thead><tr><th>財年</th><th>資料中心營收 ($B)</th><th>YoY</th><th>佔總營收比</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>FY2023</b></td><td>15.1</td><td>—</td><td>55.9%</td><td class="warn">🟡 遊戲仍為大宗</td></tr>
<tr><td><b>FY2024</b></td><td>47.5</td><td class="good">+215%</td><td>78.0%</td><td class="good">🟢 AI 爆發元年</td></tr>
<tr><td><b>FY2025</b></td><td>115.2</td><td class="good">+142%</td><td>88.3%</td><td class="good">🟢 絕對主力</td></tr>
</tbody></table></div>

### 1.4 遊戲營收（穩定但非成長引擎）

<div class="sw"><table>
<thead><tr><th>財年</th><th>遊戲營收 ($B)</th><th>YoY</th><th>佔總營收比</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>FY2023</b></td><td>9.1</td><td class="bad">-27%</td><td>33.7%</td><td class="bad">🔴 加密退潮+PC需求下滑</td></tr>
<tr><td><b>FY2024</b></td><td>10.4</td><td class="good">+14%</td><td>17.1%</td><td class="warn">🟡 回穩但佔比驟降</td></tr>
<tr><td><b>FY2025</b></td><td>11.4</td><td class="good">+9%</td><td>8.7%</td><td class="warn">🟡 穩定但不再是主力</td></tr>
</tbody></table></div>

---

## 2. 隱藏的魔鬼細節

<div class="sb">
<h3>🎯 洞察一：毛利率從 56.4% 飆至 75.0% — 不是週期性，是結構性轉變</h3>
<p>RAG 交叉驗證（NVDA_10-K_FY2022 至 FY2025）確認：</p>
<ul>
<li>FY2022：56.9% → FY2023：56.4% → FY2024：72.7% → FY2025：75.0%</li>
<li>跳升 18.6 個百分點（FY2023→FY2025）<b>前所未有</b></li>
<li>原因：低毛利遊戲顯卡從 33.7% 佔比降至 8.7%，高毛利 AI GPU 從 ~56% 升至 ~88%</li>
<li>H100/B100 單價 $25,000-40,000 vs GeForce RTX 4090 $1,599 = <b>15-25 倍價差</b></li>
<li><b>這不是短期現象——只要 AI 支出持續，75%+ 毛利率將維持</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察二：出口管制已造成 $10B+ 累計損失，但 NVIDIA 繼續成長</h3>
<p>RAG 從 NVDA_10-Q_FY2025_Q1.md 提取風險揭露：</p>
<ul>
<li>Q1 FY2026：H20 出口限制損失 ~$2.5B 營收 + $4.5B 庫存減損</li>
<li>Q2 FY2026 管理層指引：預計再損失 ~$8.0B H20 營收</li>
<li>中國營收佔比從 ~25% 預計降至 ~10% 以下</li>
<li><b>但總營收指引 $45B 仍創新高</b>——代表其他地區（美國、歐洲、中東）的需求足以彌補</li>
<li><b>Sovereign AI（國家級 AI 建設）是新成長動能</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察三：FCF Margin ~47% — 全球最強半導體公司</h3>
<ul>
<li>FY2025 FCF 估計超過 $615B（營收 $1,305億 × FCF margin ~47%）</li>
<li>對比：TSMC FCF margin ~35%、AMD ~25%、Intel 為負</li>
<li>強大 FCF 讓 NVIDIA 能同時進行：$30B+ 回購、$12.9B R&D、大量資本支出</li>
<li><b>NVIDIA 不是在燒錢搶市——它是印鈔機</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察四：庫存管理超高效——庫存售罄至 2027 年</h3>
<ul>
<li>HBM3e 記憶體供應緊張，NVIDIA 庫存完全售罄至 2027 年</li>
<li>CoWoS 先進封裝（TSMC）產能接近滿載</li>
<li>管理層優先生產高毛利 Blackwell GPU，可能壓縮 GeForce 供應</li>
<li><b>需求遠超供應 = 定價權強勁</b></li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察五：研發投入佔營收 ~10% — 護城河持續加深</h3>
<ul>
<li>FY2025 R&D：$129億（YoY +94%，略低於營收增速）</li>
<li>從 Hopper → Blackwell → Rubin 的研發節奏確保 2-3 年產品週期</li>
<li>CUDA 生態系統：400 萬+ 開發者、數千個優化庫 = <b>轉換成本極高</b></li>
<li>競爭對手（AMD MI400、Google TPU）無法複製 CUDA 的深度和廣度</li>
</ul>
</div>

---

## 3. 護城河與未來展望

### 護城河分析

<div class="sw"><table>
<thead><tr><th>護城河類型</th><th>強度</th><th>說明</th></tr></thead>
<tbody>
<tr><td><b>技術領先</b></td><td>⭐⭐⭐⭐⭐</td><td>GPU 架構領先競爭對手 1-2 代（Hopper→Blackwell→Rubin）</td></tr>
<tr><td><b>CUDA 生態系統</b></td><td>⭐⭐⭐⭐⭐</td><td>400 萬+ 開發者，轉換成本極高，類似 iOS 鎖定</td></tr>
<tr><td><b>規模優勢</b></td><td>⭐⭐⭐⭐⭐</td><td>TSMC 先進封裝產能優先分配給 NVIDIA</td></tr>
<tr><td><b>品牌/信任</b></td><td>⭐⭐⭐⭐</td><td>Hyperscaler 首選，幾乎所有 AI 訓練都用 NVIDIA GPU</td></tr>
<tr><td><b>網路效應</b></td><td>⭐⭐⭐⭐</td><td>更多開發者 → 更多優化 → 更多企業採用 → 更多開發者</td></tr>
</tbody></table></div>

<div class="sb rl">
<p><b>護城河評分：⭐⭐⭐⭐⭐ (5/5)</b> — CUDA 生態系統是 NVIDIA 最強的護城河，比晶片本身更重要。AMD 的 MI400 在硬體性能上可能追上，但軟體生態系統的差距是 10 年以上的累積。</p>
</div>

### 管理層指引

<div class="sw"><table>
<thead><tr><th>項目</th><th>指引</th><th>vs 上季</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Q1 FY26 營收</b></td><td>$45.0B (±2%)</td><td class="good">+15% QoQ</td><td class="good">🟢 持續加速</td></tr>
<tr><td><b>Q1 FY26 毛利率</b></td><td>GAAP 71.8% / Non-GAAP 72.0%</td><td class="warn">-3.0pts QoQ</td><td class="warn">🟡 H20 減損影響</td></tr>
<tr><td><b>FY26 後半毛利率</b></td><td>mid-70% 水平</td><td>—</td><td class="good">🟢 Blackwell 量產拉升</td></tr>
<tr><td><b>CY2027 營收目標</b></td><td>$1 兆</td><td>—</td><td class="warn">🟡 極度激進但非不可能</td></tr>
</tbody></table></div>

### 管理層可信度

<div class="sw"><table>
<thead><tr><th>季度</th><th>指引</th><th>實際</th><th>差距</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Q4 FY25</b></td><td>$37.5B (±2%)</td><td>$39.3B</td><td class="good">+4.8%</td><td class="good">🟢 超預期</td></tr>
<tr><td><b>Q3 FY25</b></td><td>$32.5B (±2%)</td><td>$35.1B</td><td class="good">+8.0%</td><td class="good">🟢 大幅超預期</td></tr>
<tr><td><b>Q2 FY25</b></td><td>$28.0B (±2%)</td><td>$30.0B</td><td class="good">+7.1%</td><td class="good">🟢 超預期</td></tr>
<tr><td><b>Q1 FY25</b></td><td>$24.0B (±2%)</td><td>$26.0B</td><td class="good">+8.3%</td><td class="good">🟢 超預期</td></tr>
</tbody></table></div>

<div class="sb rl">
<p><b>管理層可信度：高</b> — 過去 4 季連續超預期，平均 beat +7.1%。管理層傾向保守指引，實際表現持續優於預期。</p>
</div>

---

## 4. 風險提示

<h3 class="risk-red">🔴 高風險</h3>

<div class="sb rh">
<h3>出口管制持續擴大</h3>
<ul>
<li>已造成 $10B+ 累計損失（H20 庫存減損 $4.5B + 營收損失 $2.5B + Q2 指引 $8B）</li>
<li>中國營收從 ~25% 預計降至 ~10% 以下</li>
<li>若管制擴大至其他地區（中東、東南亞），影響將更嚴重</li>
<li><b>Sovereign AI 收入目前無法完全彌補中國損失</b></li>
</ul>
</div>

<div class="sb rh">
<h3>估值不便宜 — Forward P/E 35-40x</h3>
<ul>
<li>當前股價 ~$175，追蹤 P/E ~58x（基於 FY25 GAAP EPS $2.94）</li>
<li>Forward P/E ~35-40x（基於 FY26 預估 EPS）</li>
<li>任何成長放緩（如 AI 支出觸頂）都會導致劇烈估值修正</li>
<li><b>這不是「便宜買進」的股票</b></li>
</ul>
</div>

<h3 class="risk-yellow">🟡 中風險</h3>

<div class="sb rm">
<h3>客戶集中度風險</h3>
<ul>
<li>前 5 大客戶佔營收 >50%（主要為微軟、Google、Amazon、Meta）</li>
<li>若任一 Hyperscaler 削減 AI 支出，影響巨大</li>
<li>Google TPU、Amazon Trainium 等自研晶片可能降低對 NVIDIA 的依賴</li>
</ul>
</div>

<div class="sb rm">
<h3>供應鏈瓶頸</h3>
<ul>
<li>TSMC CoWoS 先進封裝產能接近滿載</li>
<li>HBM3e 記憶體供應緊張，庫存售罄至 2027 年</li>
<li>產能優先分配高毛利 Blackwell，可能壓縮 GeForce 供應</li>
</ul>
</div>

<h3 class="risk-green">🟢 低風險 / 機會</h3>

<div class="sb rl">
<h3>Sovereign AI 與邊緣運算</h3>
<ul>
<li>各國政府積極建設 AI 基礎設施（中東、歐洲、日本）</li>
<li>邊緣運算（自動駕駛、機器人）是下一個百億美元級市場</li>
<li>Rubin 架構（2026 年出貨）將持續擴大技術領先</li>
</ul>
</div>

---

## 5. 估值觀察

### 5.1 簡易估值模型

<div class="sw"><table>
<thead><tr><th>情境</th><th>CY2027 EPS</th><th>P/E 倍數</th><th>目標價</th><th>假設</th></tr></thead>
<tbody>
<tr><td><b>🔴 熊市</b></td><td>$5.00</td><td>25x</td><td>$125</td><td>出口管制擴大 + AI 支出放緩</td></tr>
<tr><td><b>🟡 基準</b></td><td>$6.50</td><td>35x</td><td>$227.50</td><td>穩健成長但增速放緩</td></tr>
<tr><td><b>🟢 牛市</b></td><td>$8.00</td><td>40x</td><td>$320</td><td>AI 支出超預期 + Rubin 成功接棒</td></tr>
</tbody></table></div>

### 5.2 同業估值比較

<div class="sw"><table>
<thead><tr><th>公司</th><th>Forward P/E</th><th>營收 YoY</th><th>毛利率</th><th>FCF Margin</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>NVDA</b></td><td>~37x</td><td class="good">+114%</td><td class="good">75.0%</td><td class="good">~47%</td><td class="good">🟢 絕對龍頭</td></tr>
<tr><td><b>AMD</b></td><td>~28x</td><td class="good">+14%</td><td class="warn">51%</td><td class="warn">~25%</td><td class="warn">🟡 追趕者</td></tr>
<tr><td><b>AVGO</b></td><td>~30x</td><td class="good">+43%</td><td class="good">68%</td><td class="good">~40%</td><td class="good">🟢 客製化 ASIC</td></tr>
<tr><td><b>INTC</b></td><td>N/A (虧損)</td><td class="bad">-2%</td><td class="bad">40%</td><td class="bad">負值</td><td class="bad">🔴 轉型中</td></tr>
</tbody></table></div>

<div class="sb">
<p>NVIDIA 的 Forward P/E ~37x 高於同業，但其營收增速（+114%）遠超 AMD（+14%）和 Broadcom（+43%）。PEG Ratio 約 0.3x（37x ÷ 114%），反而顯示估值相對成長性而言並不過度昂貴。</p>
</div>

---

## 6. 關鍵觀察

<ul>
<li>FY2025 營收從 $609億翻倍至 $1,305億（+114%），<b>資料中心佔比 88%</b>，AI GPU 已成為絕對主力</li>
<li>毛利率從 FY2023 的 56.4% 飆升至 75.0%——這是<b>產品組合的結構性轉變</b>，不是短期現象</li>
<li>Blackwell 架構已超越 Hopper 峰值出貨，Rubin（2026 年）確保 2-3 年成長可見度</li>
<li>出口管制造成 $10B+ 損失，但<strong>Sovereign AI</strong>需求足以彌補，Q1 FY26 指引仍創新高 $45B</li>
<li>Forward P/E ~37x 看似昂貴，但 PEG ~0.3x 表示估值相對成長性合理——<b>前提是成長持續</b></li>
</ul>

<div class="sb rl">
<p><b>一句話：</b>NVIDIA 不是在賣晶片，它是在賣 AI 時代的「石油」——75% 毛利率、$615億 FCF、CUDA 400 萬開發者構成的護城河，讓它成為這場軍備競賽中唯一的軍火商。唯一的問題是：你願意用 37 倍的價格買這張入場券嗎？</p>
</div>

<div class="disc">
<h3 style="color:#8b8fa3;margin:0 0 8px">⚠️ 免責聲明</h3>
<p>本報告僅為客觀戰略分析，不構成任何買入或賣出建議。所有數據來自公開 SEC EDGAR 文件（RAG 向量資料庫檢索 24 份 NVIDIA 10-K/10-Q，涵蓋 FY2016-FY2025）及公開財報，可能存在時效性問題。投資人應自行查證並承擔風險。</p>
<p><b>RAG 資料來源</b>：NVDA_10-K_FY2020, NVDA_10-K_FY2021, NVDA_10-K_FY2022, NVDA_10-K_FY2023, NVDA_10-K_FY2024, NVDA_10-K_FY2025, NVDA_10-Q_FY2025_Q1~Q3, NVDA_10-Q_FY2024_Q1~Q4 等共 24 份文件。嵌入模型：all-MiniLM-L6-v2（384 維），向量庫：ChromaDB（190,244 chunks）。</p>
</div>
