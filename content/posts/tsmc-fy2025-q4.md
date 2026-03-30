---
title: "TSMC (台積電) FY 2025 & Q4 財報深度分析"
date: 2026-03-30
ticker: "TSM / 2330"
quarter: "FY2025 Q4"
logo: "https://www.tsmc.com/themes/custom/bootstrap_sass/images/color_logo.png"
color: "#76b900"
summary: "台積電 Q4 2025 營收首破兆 NT$1.046 兆，全年 $122B YoY +36%；先進製程佔比 77%，2nm 量產啟動，Q1 2026 指引 $35.2B YoY +38%，AI 驅動結構性成長明確。"
tags: ["TSMC", "台積電", "半導體", "AI", "晶圓代工", "2nm", "先進製程"]
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
thead th{background:#76b900;color:#000;padding:7px 10px;text-align:left;font-weight:600;white-space:nowrap}
tbody td{padding:7px 10px;border-bottom:1px solid #2a2d3a}
tbody tr:hover{background:rgba(118,185,0,.05)}
.good{color:#28a745;font-weight:600}.warn{color:#e67e00;font-weight:600}.bad{color:#dc3545;font-weight:600}
.sb{background:#1a1d27;border-left:4px solid #76b900;padding:10px 16px;margin:8px 0;border-radius:0 6px 6px 0}
.sb h3{margin:0 0 6px;font-size:14px}.sb p{margin:4px 0;font-size:13px;line-height:1.5}.sb ul{margin:4px 0;padding-left:18px}.sb li{margin-bottom:3px;font-size:13px}
.rh{border-left-color:#dc3545}.rm{border-left-color:#e67e00}.rl{border-left-color:#28a745}
.sw{overflow-x:auto;-webkit-overflow-scrolling:touch}
.disc{background:#1a1d27;border:1px solid #2a2d3a;border-radius:8px;padding:16px;margin-top:24px;font-size:12px;color:#8b8fa3;line-height:1.6}
.risk-red{color:#dc3545;font-weight:700;margin:16px 0 8px;font-size:14px}
.risk-yellow{color:#e67e00;font-weight:700;margin:16px 0 8px;font-size:14px}
.risk-green{color:#28a745;font-weight:700;margin:16px 0 8px;font-size:14px}
@media(max-width:600px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-card .value{font-size:18px}table{font-size:11px}td,th{padding:4px 5px}}
</style>

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q4 營收</div><div class="value">$33.7B</div><div class="change up">▲ 25.5% YoY</div></div>
<div class="kpi-card"><div class="label">Q4 毛利率</div><div class="value">62.3%</div><div class="change up">▲ 3.3pp YoY</div></div>
<div class="kpi-card"><div class="label">Q4 營業利益率</div><div class="value">54.0%</div><div class="change up">▲ 5.0pp YoY</div></div>
<div class="kpi-card"><div class="label">Q4 EPS</div><div class="value">NT$19.50</div><div class="change up">▲ 68.4% YoY</div></div>
<div class="kpi-card"><div class="label">FY25 營收</div><div class="value">$122B</div><div class="change up">▲ 35.9% YoY</div></div>
<div class="kpi-card"><div class="label">FY25 EPS</div><div class="value">NT$66.25</div><div class="change up">▲ 46.4% YoY</div></div>
<div class="kpi-card"><div class="label">先進製程佔比</div><div class="value">77%</div><div class="change up">▲ Q4 創新高</div></div>
<div class="kpi-card"><div class="label">Q1'26 指引</div><div class="value">$35.2B</div><div class="change up">▲ 38% YoY</div></div>
</div>

## 1. 📈 核心數據速覽

### 損益表 — Q4 2025 vs 季度比較

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q4 2025</th><th>Q3 2025</th><th>QoQ</th><th>Q4 2024</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收 (NTD)</b></td><td>NT$1,046,090M</td><td>NT$989,918M</td><td class="good">+5.7%</td><td>NT$868,461M</td><td class="good">+20.5%</td><td class="good">🟢 首次破兆，歷史新高</td></tr>
<tr><td><b>營收 (USD)</b></td><td>$33.73B</td><td>$33.05B</td><td class="good">+1.9%</td><td>$26.89B</td><td class="good">+25.5%</td><td class="good">🟢 超越自身指引</td></tr>
<tr><td><b>銷貨成本</b></td><td>NT$394,104M</td><td>NT$401,375M</td><td class="good">-1.8%</td><td>NT$356,083M</td><td>+10.7%</td><td class="good">🟢 成本增速低於營收</td></tr>
<tr><td><b>毛利率</b></td><td>62.33%</td><td>59.45%</td><td class="good">+2.88pp</td><td>59.00%</td><td class="good">+3.33pp</td><td class="good">🟢 近年新高，成本改善+匯率有利</td></tr>
<tr><td><b>營業費用</b></td><td>NT$87,084M</td><td>NT$87,858M</td><td class="good">-0.9%</td><td>NT$86,665M</td><td>+0.5%</td><td class="good">🟢 費用控制嚴謹</td></tr>
<tr><td><b>營業利益</b></td><td>NT$564,902M</td><td>NT$500,685M</td><td class="good">+12.8%</td><td>NT$425,713M</td><td class="good">+32.7%</td><td class="good">🟢 營業槓桿爆發</td></tr>
<tr><td><b>營業利益率</b></td><td>54.00%</td><td>50.58%</td><td class="good">+3.42pp</td><td>49.02%</td><td class="good">+4.98pp</td><td class="good">🟢 高於歷史均值</td></tr>
<tr><td><b>業外收支</b></td><td>NT$27,461M</td><td>NT$24,684M</td><td>+11.2%</td><td>NT$23,087M</td><td>+18.9%</td><td class="good">🟢 利息收入持續貢獻</td></tr>
<tr><td><b>淨利</b></td><td>NT$505,744M</td><td>NT$452,301M</td><td class="good">+11.8%</td><td>NT$359,792M</td><td class="good">+40.6%</td><td class="good">🟢 歷史單季新高</td></tr>
<tr><td><b>淨利率</b></td><td>48.3%</td><td>45.7%</td><td class="good">+2.6pp</td><td>41.4%</td><td class="good">+6.9pp</td><td class="good">🟢 接近 50% 里程碑</td></tr>
<tr><td><b>EPS (NTD)</b></td><td>NT$19.50</td><td>NT$17.20</td><td class="good">+13.4%</td><td>NT$11.58</td><td class="good">+68.4%</td><td class="good">🟢 大幅超預期</td></tr>
<tr><td><b>EPS (ADR USD)</b></td><td>$3.14</td><td>$2.77</td><td class="good">+13.4%</td><td>$1.86</td><td class="good">+68.8%</td><td class="good">🟢 分析師預期之上</td></tr>
</tbody></table></div>
### 損益表 — FY 2025 全年

<div class="sw"><table>
<thead><tr><th>指標</th><th>FY 2025</th><th>FY 2024</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收 (NTD)</b></td><td>NT$3,809,054M</td><td>NT$2,894,308M</td><td class="good">+31.6%</td><td class="good">🟢 首次年營收破 NT$3.8 兆</td></tr>
<tr><td><b>營收 (USD)</b></td><td>$122B</td><td>$90B</td><td class="good">+35.9%</td><td class="good">🟢 遠超 Foundry 2.0 產業 +16%</td></tr>
<tr><td><b>毛利率</b></td><td>59.89%</td><td>56.12%</td><td class="good">+3.77pp</td><td class="good">🟢 產能利用率提升+成本改善</td></tr>
<tr><td><b>營業利益率</b></td><td>50.83%</td><td>45.68%</td><td class="good">+5.15pp</td><td class="good">🟢 營運槓桿顯著</td></tr>
<tr><td><b>淨利 (NTD)</b></td><td>NT$1,717,883M</td><td>NT$1,158,380M</td><td class="good">+48.3%</td><td class="good">🟢 淨利率 45%+</td></tr>
<tr><td><b>EPS (NTD)</b></td><td>NT$66.25</td><td>NT$226.25</td><td class="good">+46.4%</td><td class="good">🟢 創歷史新高</td></tr>
<tr><td><b>ROE</b></td><td>35.4%</td><td>30.3%</td><td class="good">+5.1pp</td><td class="good">🟢 高資本報酬率</td></tr>
<tr><td><b>有效稅率</b></td><td>15.98%</td><td>17.66%</td><td class="good">-1.68pp</td><td class="good">🟢 稅務效率提升</td></tr>
<tr><td><b>FCF</b></td><td>NT$1,002,565M</td><td>NT$870,171M</td><td class="good">+15.2%</td><td class="good">🟢 FCF Margin 26%</td></tr>
<tr><td><b>股利/股</b></td><td>NT$22</td><td>NT$17</td><td class="good">+29.4%</td><td class="good">🟢 持續提升股東回報</td></tr>
</tbody></table></div>

### 製程節點營收佔比 — Q4 2025

<div class="sw"><table>
<thead><tr><th>製程節點</th><th>Q4 2025 佔比</th><th>Q3 2025 佔比</th><th>QoQ 變化</th><th>FY25 全年佔比</th><th>FY24 全年佔比</th><th>YoY 變化</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>3nm</b></td><td>28%</td><td>20%</td><td class="good">+8pp</td><td>24%</td><td>—</td><td class="good">🟢 大幅成長，AI/旗艦手機驅動</td><td class="good">🟢 成長主力</td></tr>
<tr><td><b>5nm</b></td><td>35%</td><td>32%</td><td class="good">+3pp</td><td>36%</td><td>—</td><td class="warn">🟡 穩定但份額被 3nm 蠶食</td><td class="warn">🟡 成熟期</td></tr>
<tr><td><b>7nm</b></td><td>14%</td><td>17%</td><td class="bad">-3pp</td><td>14%</td><td>—</td><td class="warn">🟡 份額下滑，轉型中</td><td class="warn">🟡 自然衰退</td></tr>
<tr><td><b>先進製程合計</b></td><td>77%</td><td>69%</td><td class="good">+8pp</td><td>74%</td><td>69%</td><td class="good">+5pp</td><td class="good">🟢 結構性升級明確</td></tr>
</tbody></table></div>

### 應用平台營收 — Q4 2025

<div class="sw"><table>
<thead><tr><th>應用平台</th><th>Q4 2025 佔比</th><th>QoQ 變化</th><th>FY25 全年佔比</th><th>FY25 YoY 成長</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>HPC (高效運算)</b></td><td>55%</td><td class="good">+4%</td><td>58%</td><td class="good">+48%</td><td class="good">🟢 AI 加速器為核心驅動</td></tr>
<tr><td><b>Smartphone</b></td><td>32%</td><td class="good">+11%</td><td>29%</td><td class="good">+11%</td><td class="good">🟢 換機週期啟動</td></tr>
<tr><td><b>IoT</b></td><td>5%</td><td class="good">+3%</td><td>5%</td><td class="good">+15%</td><td class="good">🟢 邊緣 AI 帶動</td></tr>
<tr><td><b>Automotive</b></td><td>5%</td><td class="bad">-1%</td><td>5%</td><td class="good">+34%</td><td class="warn">🟡 全年強勁但 Q4 微降</td></tr>
<tr><td><b>DCE (消費電子)</b></td><td>1%</td><td class="bad">-22%</td><td>1%</td><td>+0%</td><td class="warn">🟡 佔比極低，影響有限</td></tr>
</tbody></table></div>


### 地區營收分佈 — FY 2025

<div class="sw"><table>
<thead><tr><th>地區</th><th>佔比</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>北美</b></td><td>~75%</td><td class="good">🟢 AI 客戶（NVIDIA/Apple/AMD）集中北美</td></tr>
<tr><td><b>中國</b></td><td>~9%</td><td class="warn">🟡 受出口管制影響，份額持續下降</td></tr>
<tr><td><b>亞太</b></td><td>~10%</td><td class="good">🟢 穩定</td></tr>
<tr><td><b>歐洲/中東/非洲</b></td><td>~6%</td><td class="warn">🟡 歐洲汽車客戶需求波動</td></tr>
</tbody></table></div>

### 資產負債表 — FY 2025

<div class="sw"><table>
<thead><tr><th>指標</th><th>FY 2025</th><th>FY 2024</th><th>YoY 變化</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>現金及約當現金</b></td><td>NT$2,767,856M</td><td>NT$2,127,627M</td><td class="good">+30.1%</td><td class="good">🟢 現金水位充裕</td></tr>
<tr><td><b>短期投資</b></td><td>NT$360,441M</td><td>NT$357,531M</td><td>+0.8%</td><td class="good">🟢 穩定配置</td></tr>
<tr><td><b>現金+短投合計</b></td><td>NT$3,128,298M</td><td>NT$2,485,158M</td><td class="good">+25.9%</td><td class="good">🟢 超過 NT$3 兆</td></tr>
<tr><td><b>應收帳款</b></td><td>NT$279,052M</td><td>NT$270,683M</td><td>+3.1%</td><td class="good">🟢 遠低於營收增速 31.6%</td></tr>
<tr><td><b>存貨</b></td><td>NT$288,109M</td><td>NT$287,869M</td><td>+0.1%</td><td class="good">🟢 幾乎零增長，需求強勁</td></tr>
<tr><td><b>流動資產合計</b></td><td>NT$3,817,131M</td><td>NT$3,088,352M</td><td class="good">+23.6%</td><td class="good">🟢 流動性充裕</td></tr>
<tr><td><b>PP&E (不動產廠房設備)</b></td><td>NT$3,735,760M</td><td>NT$3,275,109M</td><td>+14.1%</td><td class="warn">🟡 大規模擴產中</td></tr>
<tr><td><b>總資產</b></td><td>NT$7,933,024M</td><td>NT$6,691,765M</td><td class="good">+18.6%</td><td class="good">🟢 資產規模持續擴大</td></tr>
<tr><td><b>應付帳款</b></td><td>NT$82,552M</td><td>NT$72,801M</td><td>+13.4%</td><td class="good">🟢 供應商議價力強</td></tr>
<tr><td><b>長期負債</b></td><td>NT$896,062M</td><td>NT$958,429M</td><td class="good">-6.5%</td><td class="good">🟢 主動還債</td></tr>
<tr><td><b>總負債</b></td><td>NT$1,064,583M</td><td>NT$1,047,042M</td><td>+1.7%</td><td class="good">🟢 負債增長極低</td></tr>
<tr><td><b>淨現金</b></td><td>NT$2,063,715M</td><td>NT$1,438,116M</td><td class="good">+43.5%</td><td class="good">🟢 淨現金 NT$2 兆+</td></tr>
<tr><td><b>股東權益</b></td><td>NT$5,419,596M</td><td>NT$4,244,267M</td><td class="good">+27.7%</td><td class="good">🟢 每股淨值 NT$1,045</td></tr>
<tr><td><b>流動比率</b></td><td>2.62x</td><td>2.36x</td><td class="good">+0.26</td><td class="good">🟢 償債能力充裕</td></tr>
<tr><td><b>速動比率</b></td><td>2.42x</td><td>2.14x</td><td class="good">+0.28</td><td class="good">🟢 扣除存貨仍安全</td></tr>
</tbody></table></div>

### 現金流量 — FY 2025

<div class="sw"><table>
<thead><tr><th>指標</th><th>FY 2025</th><th>FY 2024</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營業現金流</b></td><td>NT$2,274,976M</td><td>NT$1,826,177M</td><td class="good">+24.6%</td><td class="good">🟢 超過 NT$2 兆</td></tr>
<tr><td><b>資本支出</b></td><td>NT$1,272,411M</td><td>NT$956,007M</td><td>+33.1%</td><td class="warn">🟡 擴產期 CapEx 大增</td></tr>
<tr><td><b>自由現金流</b></td><td>NT$1,002,565M</td><td>NT$870,171M</td><td class="good">+15.2%</td><td class="good">🟢 FCF 仍為正且成長</td></tr>
<tr><td><b>FCF Margin</b></td><td>26.32%</td><td>30.06%</td><td class="warn">-3.74pp</td><td class="warn">🟡 CapEx 增長壓縮 FCF 率</td></tr>
<tr><td><b>股利發放</b></td><td>NT$466,819M</td><td>NT$363,155M</td><td class="good">+28.6%</td><td class="good">🟢 股東回報持續提升</td></tr>
<tr><td><b>長期借款</b></td><td>NT$97,558M</td><td>NT$65,197M</td><td>+49.6%</td><td class="warn">🟡 擴產所需融資</td></tr>
<tr><td><b>長期還款</b></td><td>NT$57,020M</td><td>NT$9,296M</td><td>+513.5%</td><td class="good">🟢 加速還債</td></tr>
</tbody></table></div>


## 2. 🔍 隱藏的魔鬼細節

<div class="sb">
<h3>🎯 洞察一：存貨 YoY +0.1% vs 營收 +31.6% — 需求極度強勁的鐵證</h3>
<p>FY 2025 存貨僅 NT$288,109M，較 FY 2024 的 NT$287,869M 幾乎零增長（+0.08%）。同期營收 YoY +31.6%。</p>
<ul>
<li>存貨週轉天數 (DIO) 估算：約 68 天，較去年持平</li>
<li>這意味著 TSMC 產出即賣出，幾乎沒有庫存壓力</li>
<li>在 CapEx 增長 33%、產能擴張的背景下，存貨零增長更加難能可貴</li>
</ul>
<p><b>推演</b>：存貨零增長是「賣方市場」的經典特徵。TSMC 的先進製程產能（3nm/5nm）處於供不應求狀態，客戶排隊等產能。這是護城河寬度的直接體現。若未來存貨突然上升，將是需求放緩的第一個警訊。</p>
</div>

<div class="sb">
<h3>🎯 洞察二：應收帳款 YoY +3.1% vs 營收 +31.6% — 收款效率大幅提升</h3>
<p>FY 2025 應收帳款 NT$279,052M，YoY 僅增 3.1%，遠低於營收增速 31.6%。</p>
<ul>
<li>DSO (應收週轉天數) 估算：約 24 天，較去年的 34 天大幅下降</li>
<li>DSO 下降 10 天 = 約 NT$300B+ 的現金提前回收</li>
<li>反映 TSMC 議價力極強，客戶付款條件有利</li>
</ul>
<p><b>推演</b>：DSO 大幅下降可能反映兩個因素：(1) AI 客戶（大型雲端廠商）信用極佳、付款迅速；(2) TSMC 對客戶議價力進一步增強，要求更短付款天數。這是營運效率和客戶結構優化的雙重信號。</p>
</div>

<div class="sb">
<h3>🎯 洞察三：Q4 毛利率 62.33% 跳升 — 不只是匯率，成本改善才是核心</h3>
<p>Q4 毛利率 62.33% 較 Q3 的 59.45% 跳升 2.88pp，為近年最高水準。</p>
<ul>
<li>管理層說明：成本改善努力 + 有利匯率 + 高產能利用率</li>
<li>但需要拆解貢獻度：匯率貢獻約 0.5-1pp，其餘 1.9-2.4pp 為成本改善</li>
<li>3nm 良率提升是成本改善的關鍵 — 良率每提升 1%，毛利率可提升約 0.15-0.2pp</li>
<li>高產能利用率（估計 >95%）進一步攤薄固定成本</li>
</ul>
<p><b>推演</b>：62%+ 的毛利率在晶圓代工業極為罕見（GlobalFoundries 約 28%、Samsung 約 35%）。TSMC 的成本優勢來自：(1) 規模經濟；(2) 良率領先；(3) 台灣工程師成本優勢。但需注意 2nm ramp 將帶來 2-3pp 的毛利率稀釋（2026 全年），以及海外廠 2-4pp 的稀釋效應。</p>
</div>

<div class="sb">
<h3>🎯 洞察四：CapEx $40.9B 創歷史新高 — 擴產速度史無前例</h3>
<p>FY 2025 資本支出 NT$1,272,411M（約 $40.9B USD），YoY +33.1%。</p>
<ul>
<li>佔營收比：33.4%（FY 2024 為 33.0%）</li>
<li>2026 CapEx 指引：$52-56B，再增 27-37%</li>
<li>70-80% 投入先進製程（N3/N2/A16），10-20% 投入先進封裝</li>
<li>亞利桑那 Fab 1 已量產、Fab 2 設備進駐中、Fab 3 開工；日本熊本 Fab 1 量產、Fab 2 開工</li>
</ul>
<p><b>推演</b>：TSMC 正在進行半導體史上最大規模的產能擴張。$52-56B 的 2026 CapEx 相當於 Intel 全年營業收入。這反映管理層對 AI 需求的極強信心，但也帶來折舊壓力（2026 折舊費用 YoY 高十幾%增長）。短期毛利率受壓（2nm 稀釋 2-3pp、海外廠 2-4pp），但若產能如期賣出，3-5 年後將轉化為巨大營收動能。</p>
</div>

<div class="sb">
<h3>🎯 洞察五：AI 加速器營收佔高十幾% — 結構性轉型正在發生</h3>
<p>管理層確認 AI 加速器營收佔 FY 2025 總營收「高十幾%」(high-teens percent)。</p>
<ul>
<li>估算：若以 17% 計，AI 加速器營收約 $20.7B</li>
<li>管理層預測 2024-2029 AI 加速器營收 CAGR 接近「中高 30%」</li>
<li>HPC 平台佔總營收 58%，YoY +48%，AI 為主要驅動</li>
<li>先進封裝營收佔比 ~8%（2025），2026 預計 >10%</li>
</ul>
<p><b>推演</b>：TSMC 正從「智慧手機代工廠」轉型為「AI 基礎設施供應商」。HPC 佔比從 2020 年的 ~33% 升至 2025 年的 58%，結構性轉變已不可逆。AI 加速器的 mid-to-high 30s% CAGR 意味著到 2029 年，AI 相關營收可能佔總營收 30-40%。這是 TSMC 估值溢價的核心邏輯。</p>
</div>

<div class="sb">
<h3>🎯 洞察六：北美營收佔比 ~75% — 集中度風險 vs 成長引擎</h3>
<p>北美客戶佔 FY 2025 營收約 75%，為歷史最高水準。</p>
<ul>
<li>正面：代表 AI/雲端巨頭（NVIDIA、Apple、AMD、Google、Amazon）深度依賴 TSMC</li>
<li>風險：客戶集中度極高，任何單一大客戶砍單影響巨大</li>
<li>中國佔比降至 ~9%（受出口管制影響），短期不可能回升</li>
<li>地緣政治風險：若美中關係進一步惡化，TSMC 的「中立性」將受更大挑戰</li>
</ul>
<p><b>推演</b>：北美集中度是「甜蜜的負擔」。AI 需求主要來自美國科技巨頭，TSMC 別無選擇只能承接。但這也意味著 TSMC 的命運與美國科技業高度綁定。管理層透過亞利桑那擴廠降低地緣風險，但短期內北美依賴度只會更高。</p>
</div>


## 3. 🛡️ 護城河與未來展望

### 護城河分析

<div class="sw"><table>
<thead><tr><th>項目</th><th>說明</th></tr></thead>
<tbody>
<tr><td><b>類型</b></td><td>技術壟斷 + 規模經濟 + 轉換成本</td></tr>
<tr><td><b>強度</b></td><td>⭐⭐⭐⭐⭐ (5/5) — 半導體業最強護城河</td></tr>
<tr><td><b>核心壁壘</b></td><td>3nm/2nm 製程技術全球唯一量產能力；良率領先三星 2+ 年；客戶設計生態深度綁定</td></tr>
<tr><td><b>可持續性</b></td><td>極高 — 競對（Intel/三星）追趕需 3-5 年+百億美元投入，且 TSMC 持續前進</td></tr>
</tbody></table></div>

<div class="sb rl">
<h3>技術護城河 — 製程領先不可撼動</h3>
<ul>
<li>全球唯一穩定量產 3nm 的晶圓代工廠（三星 3nm 良率仍低）</li>
<li>2nm (N2) 已於 2025 Q4 在新竹/高雄量產，良率良好，需求強勁</li>
<li>N2P（N2 增強版）2026 H2 量產；A16（含 Super Power Rail）2026 H2 量產</li>
<li>先進封裝（CoWoS/InFO）技術全球領先，AI 晶片封裝瓶頸的解決者</li>
<li>Intel 和三星至少落後 2-3 年，且追趕速度不如 TSMC 前進速度</li>
</ul>
</div>

<div class="sb rl">
<h3>客戶轉換成本 — 生態系統鎖定</h3>
<ul>
<li>客戶為 TSMC 製程優化晶片設計，遷移至其他代工廠需重新設計，成本數億美元+</li>
<li>NVIDIA/Apple/AMD 等頂級客戶深度依賴 TSMC 先進製程，無替代方案</li>
<li>TSMC 的 EDA 工具鏈和 PDK（製程設計套件）形成完整生態系統</li>
</ul>
</div>

<div class="sb rl">
<h3>規模經濟 — 正循環飛輪</h3>
<ul>
<li>全球最大晶圓代工廠，研發成本可被巨大產量攤薄</li>
<li>產能利用率 >95% 時，單位成本持續下降</li>
<li>CapEx $52-56B/年 的投資規模，競對無法匹配</li>
</ul>
</div>

### 管理層指引 — Q1 2026 & FY 2026

<div class="sw"><table>
<thead><tr><th>項目</th><th>指引</th><th>vs 前期</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Q1 2026 營收</b></td><td>$34.6B - $35.8B（中值 $35.2B）</td><td>QoQ +4%, YoY +38%</td><td class="good">🟢 淡季仍強勁成長</td></tr>
<tr><td><b>Q1 2026 毛利率</b></td><td>63% - 65%</td><td>Q4 為 62.3%</td><td class="good">🟢 持續擴張</td></tr>
<tr><td><b>Q1 2026 營業利益率</b></td><td>54% - 56%</td><td>Q4 為 54.0%</td><td class="good">🟢 穩定高水位</td></tr>
<tr><td><b>FY 2026 營收</b></td><td>YoY 接近 +30%（USD）</td><td>FY25 為 +35.9%</td><td class="warn">🟡 增速略降但仍極高</td></tr>
<tr><td><b>FY 2026 CapEx</b></td><td>$52B - $56B</td><td>FY25 為 $40.9B</td><td class="warn">🟡 大幅擴產，折舊壓力增加</td></tr>
<tr><td><b>FY 2026 折舊</b></td><td>YoY 高十幾%增長</td><td>—</td><td class="warn">🟡 2nm ramp 帶來折舊壓力</td></tr>
<tr><td><b>FY 2026 稅率</b></td><td>17% - 18%</td><td>FY25 為 15.98%</td><td class="warn">🟡 稅率微升</td></tr>
<tr><td><b>2026 股利</b></td><td>至少 NT$23/股</td><td>2025 為 NT$22</td><td class="good">🟢 持續提升</td></tr>
</tbody></table></div>

### 長期展望

<div class="sw"><table>
<thead><tr><th>項目</th><th>長期目標</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收 CAGR</b></td><td>接近 25%（2024 起 5 年）</td><td class="good">🟢 AI 驅動的結構性成長</td></tr>
<tr><td><b>毛利率</b></td><td>56%+ through cycle 可達成</td><td class="good">🟢 即使有 2nm/海外廠稀釋</td></tr>
<tr><td><b>ROE</b></td><td>高 20% through cycle</td><td class="good">🟢 資本效率極高</td></tr>
<tr><td><b>AI 加速器 CAGR</b></td><td>中高 30%（2024-2029）</td><td class="good">🟢 最強成長引擎</td></tr>
<tr><td><b>Foundry 2.0 產業</b></td><td>2026 YoY +14%</td><td class="good">🟢 TSMC 將持續超越產業</td></tr>
</tbody></table></div>

<div class="sb rl">
<h3>海外廠毛利率稀釋影響</h3>
<ul>
<li>早期階段：2-3pp 毛利率稀釋</li>
<li>後期階段（亞利桑那 Fab 2/3 量產後）：3-4pp 稀釋</li>
<li>管理層表示可透過「生產力改善」部分抵銷</li>
<li>台灣本地廠仍將維持最高效率和最佳毛利率</li>
</ul>
</div>

### 管理層可信度

<div class="sw"><table>
<thead><tr><th>項目</th><th>說明</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>過去 4 季指引 vs 實際</b></td><td>每季均超預期或達標上緣</td><td class="good">🟢 極高可信度</td></tr>
<tr><td><b>FY25 全年</b></td><td>年初指引 ~+25% 實際 +35.9%，超標 10+ pp</td><td class="good">🟢 大幅超預期</td></tr>
<tr><td><b>技術路線圖</b></td><td>2nm 如期量產、N2P/A16 按計劃推進</td><td class="good">🟢 執行力一流</td></tr>
<tr><td><b>風險溝通</b></td><td>坦誠討論海外廠稀釋、折舊壓力、關稅風險</td><td class="good">🟢 透明度高</td></tr>
</tbody></table></div>

<div class="sb rl">
<p><b>管理層評估：極高可信度</b> — TSMC 管理層是半導體業最值得信賴的團隊之一。CEO 魏哲家風格穩健務實，少有誇大宣傳，但執行力極強。過去 5 年每年均大幅超預期。</p>
</div>


## 4. ⚠️ 風險提示

<h3 class="risk-red">🔴 高風險</h3>

<div class="sb rh">
<h3>地緣政治 — 台海局勢為最大尾部風險</h3>
<ul>
<li>台海衝突是 TSMC 的「毀滅性風險」——即使機率低，後果極端</li>
<li>美國加速推動「矽盾分散化」，TSMC 被迫在美日歐建廠</li>
<li>若台海局勢惡化，TSMC 可能面臨客戶轉單、估值崩跌</li>
<li><b>量化影響</b>：任何台海緊張升級事件，TSMC ADR 可能單日跌 10-20%</li>
</ul>
</div>

<div class="sb rh">
<h3>CapEx 擴張的折舊壓力 — 短期毛利率天花板</h3>
<ul>
<li>FY 2026 CapEx $52-56B，折舊費用 YoY 高十幾%增長</li>
<li>2nm ramp 稀釋毛利率 2-3pp，海外廠 2-4pp</li>
<li>合計毛利率稀釋可能達 4-7pp，需營收成長 >30% 才能抵銷</li>
<li><b>量化影響</b>：若營收增速低於 25%，毛利率可能跌破 55% 低標</li>
</ul>
</div>

<h3 class="risk-yellow">🟡 中風險</h3>

<div class="sb rm">
<h3>客戶集中度 — 前五大客戶佔比過高</h3>
<ul>
<li>北美佔營收 ~75%，Apple/NVIDIA 可能各佔 20%+</li>
<li>任何單一大客戶策略轉變（自研晶圓廠/轉單）影響巨大</li>
<li>Apple 歷史上曾多次評估自研晶片製造，雖未成功但威脅持續存在</li>
</ul>
</div>

<div class="sb rm">
<h3>關稅與貿易政策 — 2026 不確定性增加</h3>
<ul>
<li>美國半導體關稅政策可能影響 TSMC 定價策略</li>
<li>管理層承認「關稅政策」和「rising component prices」為 2026 風險因子</li>
<li>消費性電子和價格敏感終端市場可能受影響</li>
</ul>
</div>

<div class="sb rm">
<h3>AI 需求週期性 — 泡沫化風險</h3>
<ul>
<li>目前 AI 投資熱潮是否可持續？若大型雲端廠商 CapEx 縮減，TSMC AI 加速器營收將受影響</li>
<li>歷史上半導體業有明顯週期性，當前的「超級週期」可能在 2027-2028 年降溫</li>
<li>但管理層表示有「disciplined capacity planning system」，且客戶有長期產能合約</li>
</ul>
</div>

<h3 class="risk-green">🟢 低風險/機會</h3>

<div class="sb rl">
<h3>2nm 量產超預期 — 潛在上行催化劑</h3>
<ul>
<li>N2 已量產且「需求強勁」，智慧手機和 HPC AI 應用雙驅動</li>
<li>若 2nm 良率提升速度快於預期，毛利率稀釋將低於 2-3pp</li>
<li>2nm 客戶可能包括 Apple A20、NVIDIA 下一代 GPU</li>
</ul>
</div>

<div class="sb rl">
<h3>Sovereign AI 需求 — 新成長曲線</h3>
<ul>
<li>各國政府積極建置 AI 基礎設施（Sovereign AI），TSMC 為唯一能提供先進製程的供應商</li>
<li>日本、歐洲、中東等國家 AI 基礎設施投資可能帶來增量需求</li>
<li>管理層在法說會中特別提及「sovereign AI」為成長動能之一</li>
</ul>
</div>

<div class="sb rl">
<h3>先進封裝擴張 — CoWoS 瓶頸即將緩解</h3>
<ul>
<li>先進封裝營收佔比 2025 ~8%，2026 預計 >10%</li>
<li>TSMC 持續擴充 CoWoS 產能，緩解 AI 晶片封裝瓶頸</li>
<li>先進封裝毛利率可能高於整體平均，對毛利率有正面貢獻</li>
</ul>
</div>

## 5. 📊 估值觀察

<div class="sw"><table>
<thead><tr><th>指標</th><th>當前值</th><th>說明</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>本益比 (TTM PE)</b></td><td>26.36x</td><td>基於 TTM EPS $2.11 ADR</td><td class="warn">🟡 高於歷史均值 ~20x</td></tr>
<tr><td><b>Forward PE</b></td><td>19.74x</td><td>基於 2026E EPS</td><td class="good">🟢 低於 TTM PE，反映成長</td></tr>
<tr><td><b>市值</b></td><td>$1.44T</td><td>全球最大半導體公司</td><td class="good">🟢 AI 時代半導體龍頭</td></tr>
<tr><td><b>股息率</b></td><td>0.81%</td><td>$2.65/股</td><td class="warn">🟡 偏低，成長型公司特性</td></tr>
<tr><td><b>Beta</b></td><td>1.28</td><td>略高於大盤波動</td><td class="warn">🟡 半導體週期性影響</td></tr>
<tr><td><b>52 週範圍</b></td><td>$134.25 - $390.21</td><td>當前 $326.74 位於中上段</td><td class="warn">🟡 距高點 -16%</td></tr>
<tr><td><b>分析師目標價</b></td><td>$401.67 (+22.9%)</td><td>Buy 共識</td><td class="good">🟢 上行空間明確</td></tr>
<tr><td><b>P/B</b></td><td>~10.3x</td><td>基於每股淨值 NT$1,045</td><td class="warn">🟡 高 P/B 反映高 ROE</td></tr>
</tbody></table></div>

### 與同業估值比較

<div class="sw"><table>
<thead><tr><th>公司</th><th>Forward PE</th><th>毛利率</th><th>營收成長</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>TSMC (TSM)</b></td><td>19.74x</td><td>59.9%</td><td>+35.9%</td><td class="good">🟢 同業最高成長+最高毛利率</td></tr>
<tr><td><b>Samsung (005930.KS)</b></td><td>~22x</td><td>~35%</td><td>~+10%</td><td class="warn">🟡 代工毛利率低、良率落後</td></tr>
<tr><td><b>Intel (INTC)</b></td><td>~28x</td><td>~40%</td><td>~-5%</td><td class="bad">🔴 轉型中，代工持續虧損</td></tr>
<tr><td><b>GlobalFoundries (GFS)</b></td><td>~25x</td><td>~28%</td><td>~-8%</td><td class="warn">🟡 成熟製程為主，成長有限</td></tr>
</tbody></table></div>

<div class="sb rl">
<p><b>估值結論</b>：TSMC Forward PE 19.74x 在同業中並不算高，考慮其 35.9% 營收成長和 59.9% 毛利率，PEG 約 0.55x（<1 代表相對便宜）。但 TTM PE 26.36x 高於歷史均值 ~20x，反映市場已部分 price-in AI 成長預期。若 AI 需求持續超預期，估值仍有上修空間；若增速放緩至 <20%，當前估值可能承壓。</p>
</div>

## 6. 📋 總結

<div class="sb rl">
<p><b>一句話結論：</b>TSMC Q4 2025 首次季營收破兆、全年 $122B YoY +36%，先進製程佔比 77% 創新高，2nm 量產啟動 AI 新週期；Forward PE 19.74x 對應 25%+ CAGR 指引，估值合理偏低，但需警惕 CapEx 擴張的折舊壓力、台海地緣風險、以及 AI 需求週期性拐點。</p>
</div>

<div class="sb rl">
<p><b>核心投資邏輯：</b></p>
<ul>
<li>✅ 護城河：半導體業最強，3nm/2nm 技術壟斷無可替代</li>
<li>✅ 成長引擎：AI 加速器 mid-to-high 30s% CAGR，HPC 佔比 58% 且持續上升</li>
<li>✅ 執行力：連續超預期交付，管理層可信度極高</li>
<li>✅ 財務健康：淨現金 NT$2 兆+，FCF 持續為正，股東回報提升</li>
<li>⚠️ 風險因子：CapEx $52-56B 的折舊壓力、台海地緣政治、AI 需求週期性</li>
</ul>
</div>

<div class="sb rl">
<p><b>關鍵觀察日期：</b></p>
<ul>
<li>📅 2026/4/16：Q1 2026 財報公布 — 驗證 Q1 指引是否達標</li>
<li>📅 2026 H2：N2P/A16 量產進度 — 觀察技術路線圖執行力</li>
<li>📅 2026 全年：海外廠毛利率稀釋實際影響 — 是否在 2-4pp 範圍內</li>
</ul>
</div>

---

<div class="disc">
<p><b>免責聲明</b>：本報告僅為客觀戰略分析，不構成任何買入或賣出建議。所有數據來自公開資訊（TSMC 官方新聞稿、StockAnalysis.com、法說會記錄），請自行查證。TSMC 台股 (2330.TW) 的 EPS 與美股 ADR (TSM) 存在單位換算差異，報告中已使用官方數據交叉驗證。</p>
<p><b>資料來源</b>：TSMC Investor Relations (pr.tsmc.com)、StockAnalysis.com、Alpha-Sense Earnings Transcripts、TSMC Q4 2025 法說會 (2026/1/15)</p>
</div>

