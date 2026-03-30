---
title: "NVDA (NVIDIA) Q4 FY2026 財報深度分析"
date: 2026-02-26
ticker: "NVDA"
quarter: "FY2026 Q4"
logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128"
color: "#76b900"
summary: "NVIDIA 正從「AI 泡沫受益者」轉型為「AI 基礎設施壟斷者」，$780億的 Q1 指引更顯示需求曲線尚未見頂。"
tags: ["AI", "NVIDIA", "GPU", "Data Center", "Blackwell", "半導體"]
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
@media(max-width:600px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-card .value{font-size:18px}table{font-size:11px}td,th{padding:4px 5px}}
</style>

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q4 營收</div><div class="value">$681億</div><div class="change up">▲ 73% YoY</div></div>
<div class="kpi-card"><div class="label">毛利率</div><div class="value">75.0%</div><div class="change up">▲ 2.0pts YoY</div></div>
<div class="kpi-card"><div class="label">營業利益率</div><div class="value">65.0%</div><div class="change up">▲ 3.9pts YoY</div></div>
<div class="kpi-card"><div class="label">Q4 EPS (GAAP)</div><div class="value">$1.76</div><div class="change up">▲ 98% YoY</div></div>
<div class="kpi-card"><div class="label">全年營收</div><div class="value">$2,159億</div><div class="change up">▲ 65% YoY</div></div>
<div class="kpi-card"><div class="label">全年 FCF</div><div class="value">$967億</div><div class="change up">▲ 59% YoY</div></div>
<div class="kpi-card"><div class="label">現金+短投</div><div class="value">$626億</div><div class="change up">▲ 45% YoY</div></div>
<div class="kpi-card"><div class="label">Q1 FY27 指引</div><div class="value">$780億</div><div class="change up">▲ 44%+ YoY</div></div>
</div>

## 核心數據速覽

### Q4 FY2026 季度損益表（US$億）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q4 FY26</th><th>Q3 FY26</th><th>QoQ</th><th>Q4 FY25</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td>681.27</td><td>570.06</td><td class="good">+20%</td><td>393.31</td><td class="good">+73%</td><td class="good">🟢 大幅超預期</td></tr>
<tr><td><b>毛利率 (GAAP)</b></td><td>75.0%</td><td>73.4%</td><td class="good">+1.6pts</td><td>73.0%</td><td class="good">+2.0pts</td><td class="good">🟢 H20 衝擊消化殆盡</td></tr>
<tr><td><b>營業利益率</b></td><td>65.0%</td><td>63.2%</td><td class="good">+1.8pts</td><td>61.1%</td><td class="good">+3.9pts</td><td class="good">🟢 歷史新高</td></tr>
<tr><td><b>淨利率 (GAAP)</b></td><td>63.1%</td><td>56.0%</td><td class="good">+7.1pts</td><td>56.2%</td><td class="good">+6.9pts</td><td class="good">🟢 業外收入助攻</td></tr>
<tr><td><b>EPS (GAAP)</b></td><td>$1.76</td><td>$1.30</td><td class="good">+35%</td><td>$0.89</td><td class="good">+98%</td><td class="good">🟢 年化 EPS ~$7</td></tr>
<tr><td><b>EPS (Non-GAAP)</b></td><td>$1.62</td><td>$1.30</td><td class="good">+25%</td><td>$0.89</td><td class="good">+82%</td><td class="good">🟢 扣除業外仍強勁</td></tr>
<tr><td><b>淨利</b></td><td>429.60</td><td>319.10</td><td class="good">+35%</td><td>220.91</td><td class="good">+94%</td><td class="good">🟢 單季淨利首破 $400億</td></tr>
<tr><td><b>R&D</b></td><td>55.12</td><td>47.05</td><td class="warn">+17%</td><td>37.14</td><td class="warn">+48%</td><td class="warn">🟡 Rubin 架構研發加速</td></tr>
</tbody></table></div>

### FY2026 全年損益表

<div class="sw"><table>
<thead><tr><th>指標</th><th>FY2026</th><th>FY2025</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td>2,159.38</td><td>1,304.97</td><td class="good">+65%</td><td class="good">🟢 首破 $2,000億</td></tr>
<tr><td><b>毛利率 (GAAP)</b></td><td>71.1%</td><td>75.0%</td><td class="warn">-3.9pts</td><td class="warn">🟡 H20 減記拖累全年</td></tr>
<tr><td><b>營業利益</b></td><td>1,303.87</td><td>814.53</td><td class="good">+60%</td><td class="good">🟢 營業利益率 60.4%</td></tr>
<tr><td><b>淨利</b></td><td>1,200.67</td><td>728.80</td><td class="good">+65%</td><td class="good">🟢 年淨利突破 $1,200億</td></tr>
<tr><td><b>EPS (GAAP)</b></td><td>$4.90</td><td>$2.94</td><td class="good">+67%</td><td class="good">🟢 YoY +67%</td></tr>
<tr><td><b>EPS (Non-GAAP)</b></td><td>$4.77</td><td>$2.99</td><td class="good">+60%</td><td class="good">🟢 穩健成長</td></tr>
</tbody></table></div>

### Q4 各事業部門營收

<div class="sw"><table>
<thead><tr><th>部門</th><th>Q4 FY26</th><th>QoQ</th><th>YoY</th><th>FY26 全年</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Data Center</b></td><td>623</td><td class="good">+22%</td><td class="good">+75%</td><td>1,937</td><td class="good">🟢 營收佔比 90.7%，AI 獨角獸</td></tr>
<tr><td><b>Gaming</b></td><td>37</td><td class="warn">-13%</td><td class="good">+47%</td><td>160</td><td class="warn">🟡 季節性回調但全年 +41%</td></tr>
<tr><td><b>Pro Visualization</b></td><td>13</td><td class="good">+74%</td><td class="good">+159%</td><td>32</td><td class="good">🟢 Blackwell 帶動爆發</td></tr>
<tr><td><b>Automotive</b></td><td>6.04</td><td class="warn">+2%</td><td class="warn">+6%</td><td>23</td><td class="warn">🟡 穩定成長</td></tr>
</tbody></table></div>

---

## 隱藏的魔鬼細節

<div class="sb">
<h3>🎯 洞察一：存貨暴增是最大紅旗 🚩</h3>
<p>FY26 全年存貨從 $100.80億增至 $214.03億，增幅 <b>+112%</b>，遠超營收增幅的 +65%。同時反映：</p>
<ul>
<li>Blackwell 架構的前置備料（Rubin 即將量產）</li>
<li>H20 庫存衝擊的殘餘影響</li>
<li>Q4 存貨仍季增 $16.2億，需追蹤 Q1 FY27 是否回落</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察二：全年毛利率下滑 3.9 個百分點的成因</h3>
<p>FY26 全年毛利率 71.1% vs FY25 的 75.0%，核心原因：Q1 FY26 的 <b>$45億 H20 庫存減記</b>（衝擊約 2.1pts）。好消息是 Q4 已回升至 75.0%，Q1 FY27 指引 74.9%，毛利率已全面恢復。</p>
</div>

<div class="sb">
<h3>🎯 洞察三：現金轉換週期 (CCC) 延長 26 天</h3>
<p>CCC = DIO(125天) + DSO(65天) - DPO(57天) = <b>133 天</b> vs FY25 的 107 天。主要因存貨週轉天數延長及應付週轉天數縮短。NVIDIA 51% FCF Margin 完全能吸收。</p>
</div>

<div class="sb">
<h3>🎯 洞察四：應收帳款增幅 ≈ 營收增幅 → 塞貨疑慮低</h3>
<p>FY26 應收帳款 +67% vs 營收 +65%，比率一致。未出現為衝營收放寬信用條件的「假成長」。</p>
</div>

<div class="sb">
<h3>🎯 洞察五：Q4 Non-GAAP EPS 為何低於 GAAP？</h3>
<p>GAAP EPS $1.76 vs Non-GAAP $1.62，GAAP 反而更高！原因是業外收入 $60.98億（含非上市股權投資收益 $56.04億）拉高 GAAP 淨利，Non-GAAP 剔除了這類波動性收益。</p>
</div>

<div class="sb">
<h3>🎯 洞察六：自由現金流的真實質量</h3>
<ul>
<li>FY26 FCF $966.76億 vs 淨利 $1,200.67億 = FCF/淨利比 = 80.5%</li>
<li>營業現金流 $1,027.18億 已超越淨利</li>
<li>FCF Margin 44.8%，印證商業模式的現金創造力</li>
</ul>
</div>

---

## 資產負債表分析

### 關鍵指標（US$億）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q4 FY26</th><th>Q4 FY25</th><th>變化</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>現金+短期投資</b></td><td>625.56</td><td>432.10</td><td class="good">+45%</td><td class="good">🟢 充沛至極</td></tr>
<tr><td><b>應收帳款</b></td><td>384.66</td><td>230.65</td><td class="good">+67%</td><td class="good">🟢 與營收增幅同步</td></tr>
<tr><td><b>存貨</b></td><td>214.03</td><td>100.80</td><td class="bad">+112%</td><td class="bad">🔴 遠超營收增速，紅旗</td></tr>
<tr><td><b>總資產</b></td><td>2,068.03</td><td>1,116.01</td><td class="good">+85%</td><td class="good">🟢</td></tr>
<tr><td><b>淨現金</b></td><td>515.16</td><td>332.28</td><td class="good">+55%</td><td class="good">🟢 零債務壓力</td></tr>
<tr><td><b>長期負債</b></td><td>74.69</td><td>84.63</td><td class="good">-12%</td><td class="good">🟢 持續去槓桿</td></tr>
<tr><td><b>股東權益</b></td><td>1,572.93</td><td>793.27</td><td class="good">+98%</td><td class="good">🟢 每股淨值 $6.42</td></tr>
<tr><td><b>流動比率</b></td><td>3.90x</td><td>4.44x</td><td>-</td><td class="good">🟢 優異</td></tr>
</tbody></table></div>

### 杜邦分析

<div class="sw"><table>
<thead><tr><th>因子</th><th>數值</th><th>解讀</th></tr></thead>
<tbody>
<tr><td><b>淨利率</b></td><td>55.6%</td><td>⭐ 核心驅動力，AI 晶片壟斷溢價</td></tr>
<tr><td><b>資產週轉率</b></td><td>~1.04</td><td>輕資產 + 高 ASP 模式</td></tr>
<tr><td><b>權益乘數</b></td><td>~1.31</td><td>極度保守</td></tr>
<tr><td><b>ROE</b></td><td><b>~76%</b></td><td>驚人 — AI 時代最高 ROE 之一</td></tr>
</tbody></table></div>

---

## 現金流量分析

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q4 FY26</th><th>Q4 FY25</th><th>YoY</th><th>FY26</th><th>FY25</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營業現金流</b></td><td>361.88</td><td>166.29</td><td class="good">+118%</td><td>1,027.18</td><td>640.89</td><td class="good">🟢 突破 $1,000億</td></tr>
<tr><td><b>資本支出</b></td><td>12.84</td><td>10.77</td><td class="warn">+19%</td><td>60.42</td><td>32.36</td><td class="good">🟢 輕資產模式</td></tr>
<tr><td><b>自由現金流</b></td><td>349.04</td><td>155.52</td><td class="good">+124%</td><td>966.76</td><td>608.53</td><td class="good">🟢 FCF 增速 > 營收增速</td></tr>
<tr><td><b>FCF Margin</b></td><td>51.2%</td><td>39.5%</td><td class="good">+11.7pts</td><td>44.8%</td><td>46.6%</td><td class="good">🟢 超過 40% 的 FCF 機器</td></tr>
<tr><td><b>股票回購</b></td><td>38.15</td><td>78.11</td><td>—</td><td>400.86</td><td>337.06</td><td class="good">🟢 全年回購 $400億</td></tr>
</tbody></table></div>

---

## 護城河與未來展望

### 護城河評估：⭐⭐⭐⭐⭐ (5/5)

<div class="sw"><table>
<thead><tr><th>護城河類型</th><th>說明</th></tr></thead>
<tbody>
<tr><td><b>CUDA 生態</b></td><td>500萬+ 開發者，轉換成本極高</td></tr>
<tr><td><b>NVLink 互連</b></td><td>Blackwell NVL72 推論效能領先一個數量級</td></tr>
<tr><td><b>全棧整合</b></td><td>GPU → DGX → DGX Cloud → NIM → AI Blueprints</td></tr>
<tr><td><b>客戶綁定</b></td><td>與 AWS、Azure、GCP、OCI、Meta 建立多年世代合作</td></tr>
<tr><td><b>R&D 護城河</b></td><td>FY26 R&D $185億，約 AMD 全年營收的 60%</td></tr>
</tbody></table></div>

### 管理層指引 — Q1 FY2027

<div class="sw"><table>
<thead><tr><th>項目</th><th>指引</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td><b>$780億 ± 2%</b></td><td class="good">🟢 年化 ~$3,120億，YoY +44%+</td></tr>
<tr><td><b>毛利率 (GAAP)</b></td><td>74.9% ± 50bps</td><td class="good">🟢 回穩至 mid-70s</td></tr>
<tr><td><b>毛利率 (Non-GAAP)</b></td><td>75.0% ± 50bps</td><td class="good">🟢 含 SBC 0.1%</td></tr>
<tr><td><b>全年有效稅率</b></td><td>17~19%</td><td class="warn">🟡</td></tr>
</tbody></table></div>

**重大變革**：從 Q1 FY27 開始，NVIDIA 將把 SBC 納入 Non-GAAP 計算 — 提升透明度。

**Q1 FY27 指引中不假設中國 Data Center 計算收入** — 出口管制影響持續。

### 管理層可信度 — 過去四季指引 vs 實際

<div class="sw"><table>
<thead><tr><th>季度</th><th>指引</th><th>實際</th><th>超越幅度</th><th>點評</th></tr></thead>
<tbody>
<tr><td>Q1 FY26</td><td>$430億 ± 2%</td><td>$440.6億</td><td class="good">+2.5%</td><td class="good">🟢</td></tr>
<tr><td>Q2 FY26</td><td>$450億 ± 2%</td><td>$467.4億</td><td class="good">+3.9%</td><td class="good">🟢</td></tr>
<tr><td>Q3 FY26</td><td>—</td><td>$570.1億</td><td>—</td><td class="good">🟢</td></tr>
<tr><td>Q4 FY26</td><td>—</td><td>$681.3億</td><td>—</td><td class="good">🟢</td></tr>
</tbody></table></div>

**評估：極高（5/5）** — 歷史性地穩定超預期，超幅持續擴大。

---

## 風險提示

<div class="sb rh">
<h3>🔴 高風險</h3>
<ul>
<li><b>中國出口管制</b>：Q1 FY26 已產生 $45億 H20 庫存減記，Q2 預估損失 $80億收入，Q4 指引明確不假設中國收入</li>
<li><b>存貨週轉延長至 125 天</b>：$214億存貨若 AI 支出放緩可能面臨減值風險</li>
<li><b>估值壓力</b>：Forward PE ~17-19x，若成長放緩至 30% 以下估值面臨重評</li>
</ul>
</div>

<div class="sb rm">
<h3>🟡 中風險</h3>
<ul>
<li><b>客戶集中度</b>：Data Center 佔總營收 90.7%，任何一家超大規模雲端 CapEx 削減都可能衝擊</li>
<li><b>全年毛利率回落至 71.1%</b>：Q4 已恢復 75%，但 Rubin 量產爬坡可能再次產生壓力</li>
<li><b>營業費用增速 +41%</b>：若營收放緩可能壓縮利潤率</li>
</ul>
</div>

<div class="sb rl">
<h3>🟢 機會</h3>
<ul>
<li><b>Vera Rubin 架構</b>：推論成本降低 10x，已獲四大雲首批部署承諾</li>
<li><b>Agentic AI 浪潮</b>：推論 token 生成量一年暴增 10 倍</li>
<li><b>地理多元化</b>：沙烏地 HUMAIN、Stargate UAE、日本量子超算</li>
<li><b>Gaming 回春</b>：FY26 Gaming $160億創紀錄（+41%），Switch 2 長期穩定收入</li>
</ul>
</div>

---

## 估值觀察（非投資建議）

<div class="sw"><table>
<thead><tr><th>指標</th><th>數值</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>FY26 GAAP EPS</b></td><td>$4.90</td><td class="good">🟢</td></tr>
<tr><td><b>Forward PE (EPS ~$6.5-7.0)</b></td><td>~17-19x</td><td class="good">🟢 低於歷史均值 ~30x</td></tr>
<tr><td><b>PEG Ratio (成長 65%)</b></td><td>~0.37</td><td class="good">🟢 極度便宜（若成長持續）</td></tr>
<tr><td><b>FCF Yield</b></td><td>~3.3%</td><td class="good">🟢 合理</td></tr>
<tr><td><b>EV/EBITDA</b></td><td>~21-22x</td><td class="warn">🟡 接近歷史中位數</td></tr>
<tr><td><b>歷史估值</b></td><td>遠低於 2024 年高峰 ~70x PE</td><td class="good">🟢 從「夢想溢價」轉為「成長兌現」</td></tr>
</tbody></table></div>

---

## 總結

<div class="sb">
<p>NVIDIA Q4 FY2026 是一份教科書級的財報：</p>
<ul>
<li>✅ 營收 $681億，季增 20%、年增 73%，大幅超越預期</li>
<li>✅ 毛利率重回 75%，H20 衝擊已消化殆盡</li>
<li>✅ Q1 FY27 指引 $780億，年化營收將突破 $3,000億</li>
<li>✅ 自由現金流全年 $967億，FCF Margin 44.8%</li>
<li>✅ Vera Rubin 架構為下一波成長週期奠定基礎</li>
</ul>
<p>⚠️ 需關注：存貨增速（+112%）遠超營收增速（+65%）、中國市場歸零、Rubin 量產毛利率壓力</p>
<p><b>一句話</b>：NVIDIA 正從「AI 泡沫受益者」轉型為「AI 基礎設施壟斷者」，$780億的 Q1 指引更顯示需求曲線尚未見頂。</p>
</div>

<div class="disc">
<h3 style="color:#8b8fa3;margin:0 0 8px">⚠️ 免責聲明</h3>
<p>本報告僅為客觀戰略分析，不構成任何買入或賣出建議。所有數據來自公開資訊，請自行查證。</p>
<p style="margin-top:8px"><b>資料來源</b>：NVIDIA 官方 Q4/FY2026 新聞稿 | NVIDIA Q1/Q4 FY2025 新聞稿 | StockAnalysis.com</p>
</div>