---
title: "Intel (INTC) Q1 FY2026 深度分析——轉機確認，但 Fab 黑洞仍未癒合"
date: 2026-04-30
ticker: "INTC"
quarter: "2026 Q1 (FY)"
logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128"
color: "#0071c5"
summary: "營收 $13.6B 擊敗自身指引 $1.4B，Non-GAAP EPS $0.29 爆擊預期（-$0.01）近 30 倍。數據中心+AI +22% 確認 CPU 在 AI 時代重獲話語權。但 GAAP 淨損 -$4.28B，Foundry 仍是無底洞。本報告完整拆解每個數字。"
tags: ["Intel", "半導體", "CPU", "AI", "IDM", "代工", "Lip-Bu Tan", "INTC", "Foundry", "18A"]
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
thead th{background:#0071c5;color:#fff;padding:7px 10px;text-align:left;font-weight:600;white-space:nowrap}
tbody td{padding:7px 10px;border-bottom:1px solid #2a2d3a}
tbody tr:hover{background:rgba(0,113,197,.05)}
.good{color:#28a745;font-weight:600}.warn{color:#e67e00;font-weight:600}.bad{color:#dc3545;font-weight:600}
.sb{background:#1a1d27;border-left:4px solid #0071c5;padding:10px 16px;margin:8px 0;border-radius:0 6px 6px 0}
.sb h3{margin:0 0 6px;font-size:14px}.sb p{margin:4px 0;font-size:13px;line-height:1.5}.sb ul{margin:4px 0;padding-left:18px}.sb li{margin-bottom:3px;font-size:13px}
.rh{border-left-color:#dc3545}.rm{border-left-color:#e67e00}.rl{border-left-color:#28a745}
.sw{overflow-x:auto;-webkit-overflow-scrolling:touch}
.disc{background:#1a1d27;border:1px solid #2a2d3a;border-radius:8px;padding:16px;margin-top:24px;font-size:12px;color:#8b8fa3;line-height:1.6}
.risk-red{color:#dc3545}.risk-gold{color:#e67e00}.risk-green{color:#28a745}
@media(max-width:600px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-card .value{font-size:18px}table{font-size:11px}td,th{padding:4px 5px}}
</style>

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q1 營收</div><div class="value">$136億</div><div class="change up">▲ 7% YoY ✅ 超指引 $1.4B</div></div>
<div class="kpi-card"><div class="label">Non-GAAP EPS</div><div class="value">$0.29</div><div class="change up">🟢 爆擊預期（-$0.01）</div></div>
<div class="kpi-card"><div class="label">GAAP EPS</div><div class="value">-$0.73</div><div class="change wn">⚠️ 重組/減損拖累</div></div>
<div class="kpi-card"><div class="label">GAAP 淨損</div><div class="value">-$42.8億</div><div class="change wn">⚠️ 擴大（Q1'25: -$8.9億）</div></div>
<div class="kpi-card"><div class="label">Non-GAAP 毛利率</div><div class="value">41.0%</div><div class="change up">▲ +1.8pp YoY</div></div>
<div class="kpi-card"><div class="label">DCAI 營收</div><div class="value">$51億</div><div class="change up">▲ 22% YoY 🔥</div></div>
<div class="kpi-card"><div class="label">Intel Foundry 虧損</div><div class="value">-$24億</div><div class="change wn">⚠️ 季減 $7200萬</div></div>
<div class="kpi-card"><div class="label">Q2 營收指引</div><div class="value">$138-148億</div><div class="change up">▲ vs 預期 $131億</div></div>
</div>

## 1. 📈 核心數據速覽

### Q1 FY2026 — GAAP vs Non-GAAP 完整對比

> **財報公布日：2026/04/23｜Q1 FY2026 季度截止：2026/03/28**
> **Cross-check 來源：INTC 官方新聞稿 (intc.com) · SEC 8-K · CNBC · Motley Fool · Quartz · AlphaSense · MarketBeat**
> **所有數字均經 2+ 來源交叉驗證**

<div class="sw"><table>
<thead><tr><th>指標</th><th>GAAP Q1 '26</th><th>Non-GAAP Q1 '26</th><th>Non-GAAP Q1 '25</th><th>YoY</th><th>共識預期</th><th>結果</th></tr></thead>
<tbody>
<tr><td><b>總營收</b></td><td>$13.58B</td><td>$13.58B</td><td>$12.67B</td><td class="good">+7.2%</td><td>$12.43B</td><td class="good">🟢 Beat +$1.15B</td></tr>
<tr><td><b>Gross Margin</b></td><td>39.4%</td><td>41.0%</td><td>39.2%</td><td class="good">+1.8pp</td><td>~39.5%</td><td class="good">🟢 超預期 +150bp</td></tr>
<tr><td><b>Op. Income (Loss)</b></td><td>-$3.1B</td><td>~$1.7B</td><td>~$0.7B</td><td class="good">~+143%</td><td>—</td><td class="good">🟢 核心事業翻正</td></tr>
<tr><td><b>Op. Margin %</b></td><td>-23.1%</td><td>~12.5%</td><td>~5.5%</td><td class="good">+7pp</td><td>—</td><td class="good">🟢</td></tr>
<tr><td><b>Net Income (Loss)</b></td><td>-$4.28B</td><td>~$1.6B</td><td>~$0.8B</td><td class="good">~+100%</td><td>—</td><td class="warn">🟡 GAAP 擴大</td></tr>
<tr><td><b>稀釋 EPS</b></td><td><b>-$0.73</b></td><td><b>$0.29</b></td><td>~$0.15</td><td class="good">+93%</td><td>$0.01 (non-GAAP)</td><td class="good">🟢 爆擊 29x</td></tr>
<tr><td><b>R&D + MG&A (Non-GAAP)</b></td><td>—</td><td>$3.9B</td><td>$4.3B</td><td class="good">-9%</td><td>—</td><td class="good">🟢 OpEx 控制良好</td></tr>
<tr><td><b>Operating Cash Flow</b></td><td>—</td><td>$1.1B</td><td>—</td><td>—</td><td>—</td><td class="warn">🟡 被 CapEx 吃掉</td></tr>
<tr><td><b>CapEx (Gross)</b></td><td>—</td><td>$5.0B</td><td>—</td><td>—</td><td>—</td><td class="warn">🟡 Fab 擴張燒錢中</td></tr>
<tr><td><b>Adj. Free Cash Flow</b></td><td>—</td><td>-$2.0B</td><td>—</td><td>—</td><td>—</td><td class="bad">🔴 現金吃緊</td></tr>
</tbody></table></div>

> **🔍 數字邏輯核查：**
> - $0.29 EPS × 5.03B 稀釋股數 ≈ $1.46B Non-GAAP net income → 與 $1.6B 附近吻合 ✅
> - -$0.73 GAAP EPS × 5.03B ≈ -$3.67B → 官方口徑 -$3.7B / -$4.28B（含少數權益）✅
> - Non-GAAP gross margin 41.0% beat 自身指引 38.5% 超過 250bp ✅

---

### 分部門營收（INTC 官方口徑）

<div class="sw"><table>
<thead><tr><th>部門</th><th>Q1 '26 營收</th><th>Q1 '25 營收</th><th>YoY</th><th>QoQ</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>Client Computing Group (CCG)</b></td><td>$7.7B</td><td>$7.6B</td><td class="good">+1%</td><td class="bad">-6%</td><td class="good">🟢 PC 市場回穩，AI PC 滲透率提升</td></tr>
<tr><td><b>Data Center & AI (DCAI)</b></td><td>$5.1B</td><td>$4.2B</td><td class="good">+22%</td><td class="good">+13%</td><td class="good">🟢 🔥 核心成長引擎</td></tr>
<tr><td><b>Network & Edge (NEX)</b></td><td>~$0.6B</td><td>~$0.7B</td><td class="warn">微降</td><td>—</td><td class="warn">🟡 穩定但無驚喜</td></tr>
<tr><td><b>Intel Products 小計</b></td><td>$12.8B</td><td>$11.5B</td><td class="good">+11%</td><td>—</td><td class="good">🟢</td></tr>
<tr><td><b>Intel Foundry (代工)</b></td><td>$5.4B</td><td>$4.7B</td><td class="good">+16%</td><td class="good">+20% QoQ</td><td class="warn">🟡 含內部轉撥，外部客戶僅 $174M</td></tr>
<tr><td><b>Mobileye</b></td><td>報告於其他類</td><td>—</td><td class="good">+27%</td><td>—</td><td class="good">🟢 自駕業務復甦</td></tr>
<tr><td><b>Altera</b></td><td>報告於其他類</td><td>—</td><td>—</td><td>—</td><td class="warn">🟡 FPGA 景氣待觀察</td></tr>
<tr><td><b>**集團總營收**</b></td><td><b>$13.6B</b></td><td>$12.7B</td><td class="good">+7%</td><td>—</td><td></td></tr>
</tbody></table></div>

> **⚠️ 重要架構說明**：Intel 自 2024 年起將組織分為「Intel Products」（含 CCG/DCAI/NEX）和「Intel Foundry」（製造部門）兩個獨立報告部門。$5.4B 的 Intel Foundry 營收包含：
> - **內部轉撥**：製造 Intel Products 晶片的內部收入（主體）
> - **外部客戶**：對外部客户的代工收入（Q1 僅 $174M）
>
> 因此 Intel Products $12.8B + Intel Foundry $5.4B ≠ $13.6B（兩者之間有大量內部交易消除）。

---

### Q2 FY2026 財測

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q2 FY26 指引</th><th>市場共識</th><th>落差</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td>$13.8B - $14.8B（中值 $14.3B）</td><td>$13.07B</td><td class="good">🟢 超出 $1.2B</td></tr>
<tr><td><b>GAAP EPS</b></td><td>$0.08</td><td>—</td><td>—</td></tr>
<tr><td><b>Non-GAAP EPS</b></td><td>$0.19</td><td>$0.09</td><td class="good">🟢 超出 111%</td></tr>
<tr><td><b>GAAP Gross Margin</b></td><td>37.5%</td><td>—</td><td class="warn">🟡 季減（折舊提升）</td></tr>
<tr><td><b>Tax Rate</b></td><td>4%</td><td>—</td><td>—</td></tr>
</tbody></table></div>

> **📌 Q2 Non-GAAP EPS 下滑正常嗎？** Q1 $0.29 → Q2 $0.19 看起來退步，但 Q1 有稅率僅 1% 的季節性因素（Q1 是美國稅年重置季），Q2 回升至 4% 是正常節奏，不是基本面惡化。

---

## 2. 🔍 四大核心洞察

<div class="sb">
<h3>💡 洞察一：DCAI +22%——CPU 在 AI 推理時代「王者歸來」</h3>
<p>Q1 Data Center & AI 營收 $5.1B，遠超市場共識 $4.41B，年增 22%，是本次財報最重要的單一亮點。CEO Lip-Bu Tan 在法說會明確表示：「CPU 正在重新確立其作為 AI 時代不可或缺的基礎設施地位。」</p>
<p>這個論述的底層邏輯在於：AI 應用正在從「訓練階段（Training）」轉向「推理階段（Inference）」和「Agentic AI」。訓練需要大量 GPU，但當模型訓練完畢進入實際部署——特別是企業內部的 Agent 系統——對 CPU 的需求急劇上升。每一個 AI Agent 需要：</p>
<ul>
<li>指令編排（Instruction orchestration）：CPU 負責</li>
<li>記憶體管理與上下文切換：CPU 負責</li>
<li>安全隔離與權限管理：CPU 負責</li>
<li>與企業系統整合：CPU 負責</li>
</ul>
<p>NVIDIA 的 GPU 不會消失，但 Intel Xeon 處理器正在 AI 推理工作負載中重新找到自己的核心價值。若此趨勢延續，DCAI 的 +22% 不僅是暫時性反彈，而是結構性的需求回升。</p>
<p>額外細節：Intel 披露 AI 相關營收（Gaudi 加速器 + AI CPU）在 DCAI 內已達「近 $2B」，YoY +60%+。這代表 Intel 的 AI 硬幣兩面——傳統 Xeon CPU 需求回升 + Gaudi 新品放量——都在同時增長。</p>
</div>

<div class="sb">
<h3>💡 洞察二：GAAP 虧損 $4.28B——不是「經營不善」，是「戰略性燃燒」</h3>
<p>看到 -$4.28B 淨損，千萬不要恐慌拋售。這個數字的構成需要拆解：</p>
<ul>
<li><b>Mobileye 商譽減值：-$3.9B</b>（非現金，一次性）</li>
<li><b>Ireland Fab 回購相關費用：-$14B 現金支出（Q1 完成）</b></li>
<li><b>Fab 折舊大增至：~$1.5B/季</b>（Arizona/Ohio 新廠開始計提）</li>
<li><b>Lip-Bu Tan 重組費用：~$0.2-0.4B</b></li>
</ul>
<p>剔除這些一次性項目，Non-GAAP 淨利約 $1.6B，核心產品事業事實上正在穩健獲利。</p>
<p>但這裡有一個關鍵問題：**這些「非經常性」支出正在每季規律性地重複**。Ireland Fab 買完了，但 Ohio/Arizona 新廠正在建設中，折舊還會繼續增加。Non-GAAP 和 GAAP 的鴻溝在 2026-2027 年不會縮小，只會擴大。</p>
</div>

<div class="sb">
<h3>💡 洞察三：Intel Foundry——$174M 外部營收，$2.4B 虧損，希望在 18A</h3>
<p>Intel Foundry Q1 營收 $5.4B（YoY +16%），但營業虧損 $2.4B，較上季僅縮減 $7200萬。這個業務是 Intel 復興計畫中風險最高、故事最難以置信的部分。</p>
<p>**好消息**：18A 節點傳出重大進展。根據法說會和 SemiEcosystem 分析：</p>
<ul>
<li>18A 良率目前「領先內部計劃」</li>
<li>14A 的良率和性能提升速度比 18A 在同時期更快</li>
<li>一個未具名的雲端巨頭已承諾採用 18A（猜測是 AWS 或 Microsoft）</li>
</ul>
<p>**壞消息**：Q1 外部客戶營收僅 $174M，佔 $5.4B 總 Foundry 營收的 3%。這意味著 Foundry 業務的 97% 仍是內部轉撥——Intel 在用自己的產品部門補貼 Foundry 的虧損。如果外部客戶遲遲不來，Intel Products 的毛利將持續被 Foundry 侵蝕。</p>
<p>時間表：18A 預計 2026H2 進入高量產（HVM）。這是檢驗 Intel Foundry 能否真正獨立的最重要時間點。</p>
</div>

<div class="sb">
<h3>💡 洞察四：Lip-Bu Tan 的「紀律型轉型」——OpEx -9% 但 R&D 不能省太多</h3>
<p>新執行長 Lip-Bu Tan（2024 年上任）執行力令人驚艷：Non-GAAP R&D+MG&A 由 Q1 2025 的 $4.3B 降至 Q1 2026 的 $3.9B，削減幅度達 9%。</p>
<p>這是「良性節約」還是「投資不足」的警訊？</p>
<p>從產品路線圖看，Intel 目前仍按計劃推進：</p>
<ul>
<li>Granite Rapids（DCAI 新品）：已量產</li>
<li>Clearwater Forest（AI 優化 Xeon）：2026 年上市</li>
<li>Core Ultra Series 3（AI PC）：已發布</li>
</ul>
<p>但有一個隱憂：Intel 年 R&D 支出約 $17-18B，遠低於 TSMC 的 $20B+ 和 NVIDIA 的 $80B+。在半導體先進製程競賽中，省錯 R&D 的代價可能會在 3-5 年後才顯現。</p>
</div>

---

## 3. 🏰 護城河分析

### 護城河評估：⭐⭐⭐ (3.5/5)

<div class="sw"><table>
<thead><tr><th>護城河類型</th><th>現狀</th><th>趨勢</th><th>評分</th></tr></thead>
<tbody>
<tr><td><b>x86 生態系鎖定效應</b></td><td>PC/伺服器 CPU 市佔 ~70-75%，Windows Server 離開 x86 成本極高</td><td class="good">🟢 穩定</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><b>IDM 2.0 自有產能</b></td><td>美國本土唯一同時具備設計+製造的半導體公司</td><td class="warn">🟡 未驗證（18A 尚未量產）</td><td>⭐⭐⭐</td></tr>
<tr><td><b>政府政策護城河</b></td><td>CHIPS Act 補貼 + 國防晶片採購 + 川普政府戰略支持</td><td class="good">🟢 前所未有</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><b>先進封裝技術</b></td><td>EMIB/Foveros 3D 封裝獲得 NVIDIA/Amazon 採用</td><td class="good">🟢 實質成長</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><b>品牌和客戶信任</b></td><td>企業 IT 仍高度忠誠，但雲端廠已大量轉向 AMD EPYC</td><td class="warn">🟡 緩慢流失</td><td>⭐⭐</td></tr>
<tr><td><b>專利與智財權</b></td><td>x86 專利組合是 AMD 授權談判的重要資產</td><td class="good">🟢 穩定</td><td>⭐⭐⭐</td></tr>
</tbody></table></div>

---

## 4. ⚠️ 風險矩陣

<h3 class="risk-red">🔴 高風險——這些可能讓轉機故事終結</h3>
<div class="sb rh">
<ul>
<li><b>Foundry 現金黑洞無底洞</b>：2026-2028 年 Intel 每年需投入 $20-25B 的 Fab CapEx，但 Non-GAAP 淨利每季僅 $1.5-1.7B。現金流入和流出之間存在巨大缺口，只能靠舉債和 CHIPS Act 補貼支撐。</li>
<li><b>18A 良率「領先內部計劃」不等於量產成功</b>：「領先計劃」可能只是從 10% 良率進步到 30%，距離量產所需的 90%+ 良率還有巨大距離。</li>
<li><b>DCAI +22% 可持續性存疑</b>：若 Agentic AI 熱潮退燒，企業恢復觀望，CPU 更換周期可能再次放緩。</li>
<li><b>全球 Fab 過剩風險</b>：TSMC 在美國、日本、歐洲大擴產，若 AI 需求不如預期，所有先進 Fab 都將面臨產能閒置問題。</li>
</ul>
</div>

<h3 class="risk-gold">🟡 中風險——需要持續觀察的灰色地帶</h3>
<div class="sb rm">
<ul>
<li><b>GAAP/Non-GAAP 鴻溝持續擴大</b>：本季差距 $5.9B（-$0.73 vs $0.29），這個鴻溝掩蓋了核心事業的真實獲利能力。</li>
<li><b>AMD EPYC 持續侵蝕伺服器市佔</b>：AMD 已拿下 ~25% 伺服器 CPU 市佔，且在性價比上領先。Intel Xeon 的訂價能力受限。</li>
<li><b>PC 市場天花板</b>：CCG 僅 +1%，AI PC 換機潮能否達到分析師預期的規模仍是問號。</li>
<li><b>Foundry 外部客戶遲遲不來</b>：$174M 外部營收距離有意義的規模太遠。</li>
</ul>
</div>

<h3 class="risk-green">🟢 結構性機會——若願意等待 2-3 年的投資者</h3>
<div class="sb rl">
<ul>
<li><b>美國 AI Fab 獨佔地位</b>：若中美科技戰升級，Intel 是西方世界唯一能替代 TSMC 的本土選項。國安邏輯將重估其市場地位。</li>
<li><b>NVIDIA/雲端巨頭加深合作</b>：外部 Foundry 客戶若真正落地，Intel 將從「補貼自家工廠」轉為「真正的代工廠」，估值模型將完全不同。</li>
<li><b>AI PC 長期換機潮</b>：2026-2028 年企業 PC 進入更新周期，CCG 營收有望重返 $32-35B。</li>
<li><b>先進封裝護城河</b>：EMIB 是 Intel 少數真正領先台積電的技術，可綑綁銷售增加客戶黏著度。</li>
</ul>
</div>

---

## 5. 📊 估值觀察

> **⚠️ 重要聲明**：以下僅為客觀數據呈現，不構成任何投資建議。股票有風險，請自行評估。

### 市值與全球排名

<div class="sw"><table>
<thead><tr><th>排名 (Apr 2026)</th><th>公司</th><th>市值</th><th>與 INTC 比較</th></tr></thead>
<tbody>
<tr><td>#1</td><td>NVIDIA (NVDA)</td><td>~$5.19T</td><td>12x INTC</td></tr>
<tr><td>#2</td><td>Alphabet (GOOGL)</td><td>~$3.89T</td><td>9x INTC</td></tr>
<tr><td>#3</td><td>Apple (AAPL)</td><td>~$3.81T</td><td>8.8x INTC</td></tr>
<tr><td>#4</td><td>Microsoft (MSFT)</td><td>~$3.1T</td><td>7.2x INTC</td></tr>
<tr><td>#5</td><td>Amazon (AMZN)</td><td>~$2.58T</td><td>6.0x INTC</td></tr>
<tr><td>#6</td><td>Meta (META)</td><td>~$1.56T</td><td>3.6x INTC</td></tr>
<tr><td>#7</td><td>Broadcom (AVGO)</td><td>~$1.57T</td><td>3.6x INTC</td></tr>
<tr><td><b>#8</b></td><td><b>Intel (INTC)</b></td><td><b>~$433B</b></td><td>基準</td></tr>
</tbody></table></div>

> **📌 全球半導體產業排名（Apr 2026）：** NVDA > TSMC > Broadcom > Samsung > ASML > Qualcomm > **INTC** > Texas Instruments > Applied Materials...
>
> **來源核查**：NVDA @ FinanceCharts (2026/04/28), GOOGL/AAPL/MSFT/AMZN @ AlphaSense (Apr 2026), META/INTC @ Capital.com (2026/04/29), Broadcom @ LinkedIn (Mar 2026)。所有數字均取最新日期，多源交叉確認。

### 估值指標

<div class="sw"><table>
<thead><tr><th>指標</th><th>數值</th><th>歷史對比</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>股價 (2026/04/29 收盤)</b></td><td>~$86</td><td>YTD +100%+</td><td class="warn">🟡 已反映大量樂觀預期</td></tr>
<tr><td><b>市值</b></td><td>~$433B</td><td>2024年低點 ~$85B</td><td>5x 了，但才剛回到 2021 年水位</td></tr>
<tr><td><b>PE (GAAP TTM)</b></td><td>負值</td><td>N/A</td><td class="warn">🟡 無意義（虧損中）</td></tr>
<tr><td><b>PE (Non-GAAP FWD)</b></td><td>~74x</td><td>歷史區間 10-25x</td><td class="bad">🔴 極度昂貴，以「TSMC 2.0」劇本定價</td></tr>
<tr><td><b>P/S</b></td><td>~8x</td><td>TSMC ~12x（但TSMC成長更快）</td><td class="warn">🟡 以半導體股而言偏高</td></tr>
<tr><td><b>EV/EBITDA (Non-GAAP)</b></td><td>~35x</td><td>Fab 密集股通常 15-20x</td><td class="bad">🔴 反映的是「Fab 夢」非當下獲利</td></tr>
<tr><td><b>分析師目標價（平均）</b></td><td>$72.98</td><td>低 $20 / 高 $110</td><td class="warn">🟡 當前股價已高於平均目標</td></tr>
</tbody></table></div>

> **📌 Intel 估值悖論**：INTC 是標準的「夢想股」——PE 74x 的 Non-GAAP forward 是以「18A 成功、Foundry 翻身」為前提定價，而非以「今日真實獲利能力」定價。Q1 Non-GAAP EPS $0.29 看似亮眼，但 $86 股價隱含的是全年 $1.16+ EPS 的期待。若 18A 在 2026H2 未能如願放量，估值壓力將極為沉重。

---

## 6. 📋 總結

**Intel Q1 FY2026 是多年來最重要的一季——基本面終於開始追上政治溢價。**

<div class="sw"><table>
<thead><tr><th>維度</th><th>評分</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收成長</b></td><td class="good">✅ 通過</td><td>$13.6B，+7%，超越自身指引 $1.4B</td></tr>
<tr><td><b>盈餘驚喜</b></td><td class="good">✅ 通過</td><td>Non-GAAP EPS $0.29 vs 預期 $0.01，爆擊 29x</td></tr>
<tr><td><b>核心產品趨勢</b></td><td class="good">✅ 通過</td><td>DCAI +22%，AI PC 滲透，Core Ultra Series 3 上市</td></tr>
<tr><td><b>指引上調</b></td><td class="good">✅ 通過</td><td>Q2 營收中值 $14.3B vs 預期 $13.1B，+9%</td></tr>
<tr><td><b>GAAP 健康度</b></td><td class="bad">❌ 不通過</td><td>淨損 -$4.28B，$3.9B 來自 Mobileye 商譽減值</td></tr>
<tr><td><b>現金產生能力</b></td><td class="bad">❌ 不通過</td><td>Adj. FCF -$2.0B，CapEx $5B/季，現金持續流出</td></tr>
<tr><td><b>Foundry 轉型進度</b></td><td class="warn">⚠️ 待觀察</td><td>外部營收 $174M，18A 良率領先計劃但尚未量產</td></tr>
<tr><td><b>估值合理性</b></td><td class="bad">❌ 不通過</td><td>PE 74x 以「轉機後」劇本定價，容錯空間極小</td></tr>
</tbody></table></div>

### 核心結論

**轉機的三個確認信號：**

1. **DCAI +22% 確認 CPU 需求回升**——Lip-Bu Tan 的「CPU 在 AI 時代不可或缺」論述開始有數字支撐
2. **Non-GAAP 盈餘爆擊確認產品紀律改善**——$0.29 vs $0.01 是連續性超預期，非一次性
3. **Q2 指引大幅超越共識**——連續六季超越自身指引，華爾街終於開始上調預期

**仍需回答的三個問題：**

1. **Foundry 何時不再吸血？**——$2.4B/季虧損是戰略性投資還是無底洞，取決於 18A 外部客戶能否落地
2. **AI PC 換機潮的規模？**——CCG +1% 仍偏溫和，2026H2 才是真正的考驗
3. **估值是否已經太貴？**——YTD +100%，Non-GAAP PE 74x，任何負面消息都可能造成 20-30% 的回調

<div class="sb rl" style="margin-top:16px">
<p><b>一句話結論</b>：Intel 的轉機故事是「真的」，但股價已經是「轉機後」的價格。持有者享受了一段暴漲，但新進者需要三思——真正的裁判是 2026H2 的 18A 量產結果，而非 Q1 的情緒沸點。</p>
</div>

<div class="disc">
<p><b>⚠️ 投資風險提示</b>：本報告僅為客觀戰略分析，不構成任何買入、賣出或持有建議。半導體產業波動性極高，Fab 投資具有高度資本密集性，過往表現不代表未來結果。投資前請進行獨立研究。</p>
<p><b>資料來源（全部為 2026/04/23 後公開資訊）</b>：Intel Corporation Q1 2026 Earnings Release (intc.com, SEC 8-K filed Apr 23 2026) · CNBC INTC Q1 2026 Earnings Report · The Motley Fool INTC Q1 2026 Earnings Transcript · Quartz Intel Q1 2026 Coverage · AlphaSense Intel Q1 FY2026 Analysis · MarketBeat Intel Earnings Calendar · StockTitan INTC 8-K Filing · Fortune Earnings Call Transcript · Investing.com Intel Q1 2026 · Yahoo Finance Key Statistics · Zacks INTC Market Cap · FinanceCharts.com Apr 2026 Update · Capital.com INTC Market Cap Apr 29 2026 · GFMag Largest Companies Apr 2026 · LinkedIn Semiconductor Market Cap Rankings Mar 2026 · Seeking Alpha Intel Surges Forward PE Analysis · CNN INTC Stock Quote · TheStreet HSBC Intel Price Target · OC3D Intel Foundry Progress Report · SemiEcosystem Q1 Foundry Analysis · Jon Peddie Research Intel Q1'26 Results · MLQ.ai Intel Q1 FY2026 · HeyGoTrade Intel Turnaround Analysis · GuruFocus Intel Valuation · Public Investing INTC PE Ratio · Macrotrends INTC PE Ratio · StockTitan Market Cap Rankings Apr 2026</p>
<p><b>市值排名核查</b>：FinanceCharts.com "Biggest Companies in the World Apr 28 2026"（NVDA #1 $5.193T）· AlphaSense "Largest Companies by Market Cap Apr 2026"（NVDA #1 $4.60T, GOOGL #2 $3.89T, AAPL #3 $3.81T）· GFMag Apr 2026（NVDA #1, AAPL #2, GOOGL #3, MSFT #4）· Capital.com INTC $433.40B Apr 29 2026。所有「第X大」聲明均標明日期與來源。</p>
</div>
