---
title: "Microsoft (MSFT) FY26 Q2 財報分析：雲端破 500 億、RPO 6,250 億近半來自 OpenAI，隔日跌 10%"
date: 2026-01-29T00:00:00+08:00
ticker: "MSFT"
quarter: "FY2026 Q2"
logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
color: "#00a4ef"
summary: "Q2 營收 813 億美元（+17%），Azure 年增 39%、Microsoft Cloud 首破 500 億，排除 OpenAI 的 EPS 4.14 美元（+24%）。但資本支出 375 億、自由現金流只剩 59 億，RPO 有 45% 來自 OpenAI，股價隔日跌 10%。"
tags: ["雲端", "AI", "Microsoft", "MSFT", "Azure", "Copilot", "OpenAI"]
author: "Wongjai ⚡"
draft: false
---

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q2 營收</div><div class="value">US$813億</div><div class="change up">▲17% YoY</div></div>
<div class="kpi-card"><div class="label">Azure 成長</div><div class="value">+39%</div><div class="change up">固定匯率 38%</div></div>
<div class="kpi-card"><div class="label">Microsoft Cloud</div><div class="value">US$515億</div><div class="change up">▲26%｜首破 500 億</div></div>
<div class="kpi-card"><div class="label">EPS（排除 OpenAI）</div><div class="value">US$4.14</div><div class="change up">▲24% YoY</div></div>
<div class="kpi-card"><div class="label">商業 RPO</div><div class="value">US$6,250億</div><div class="change wn">45% 來自 OpenAI</div></div>
<div class="kpi-card"><div class="label">資本支出（含租賃）</div><div class="value">US$375億</div><div class="change wn">三分之二買晶片</div></div>
<div class="kpi-card"><div class="label">自由現金流</div><div class="value">US$59億</div><div class="change dn">▼9% YoY</div></div>
<div class="kpi-card"><div class="label">M365 Copilot</div><div class="value">1,500萬席</div><div class="change up">付費席位</div></div>
</div>

> 📌 **口徑說明**：本文於 2026/11 依官方文件重新整理（v3.0 格式），財務數據取自 Microsoft 2026/01/28 提交之 SEC Form 8-K 新聞稿（美國 GAAP，單位百萬美元），分部採當時的三大部門。原版摘要把 Azure 成長寫成 30%，正確為 39%，已更正。法說會引言取自 Microsoft 投資人關係網站公布之逐字稿。股價取自 Yahoo Finance。

## 1. 📈 核心數據速覽

### FY26 Q2 損益表精要（US$ 百萬）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q2 FY26</th><th>Q1 FY26</th><th>Q2 FY25</th><th>YoY</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>營收</b></td><td><b>81,273</b></td><td>77,673</td><td>69,632</td><td class="good">+16.7%</td><td class="good">🟢 優於財測</td></tr>
<tr><td>　生產力與商業流程</td><td>34,116</td><td>33,020</td><td>29,437</td><td class="good">+15.9%</td><td>M365 商業雲 +17%</td></tr>
<tr><td>　智慧雲</td><td>32,907</td><td>30,897</td><td>25,544</td><td class="good">+28.8%</td><td class="good">🟢 Azure +39%</td></tr>
<tr><td>　個人運算</td><td>14,250</td><td>13,756</td><td>14,651</td><td class="bad">-2.7%</td><td>Xbox -5%</td></tr>
<tr><td><b>毛利率</b></td><td><b>68.0%</b></td><td>69.0%</td><td>68.7%</td><td class="warn">-0.7pp</td><td class="warn">🟡 AI 投資拉低</td></tr>
<tr><td><b>營業利益</b></td><td><b>38,275</b></td><td>37,961</td><td>31,653</td><td class="good">+20.9%</td><td class="good">🟢 利益率 47%</td></tr>
<tr><td><b>業外收支</b></td><td><b>9,971</b></td><td>-3,660</td><td>-2,288</td><td>轉正</td><td class="warn">🟡 OpenAI 利得</td></tr>
<tr><td><b>淨利（GAAP）</b></td><td><b>38,458</b></td><td>27,747</td><td>24,108</td><td class="good">+59.5%</td><td>含 OpenAI 76 億</td></tr>
<tr><td><b>稀釋 EPS（GAAP）</b></td><td><b>$5.16</b></td><td>$3.72</td><td>$3.23</td><td class="good">+60%</td><td>OpenAI +1.02</td></tr>
<tr><td><b>稀釋 EPS（排除 OpenAI）</b></td><td><b>$4.14</b></td><td>$4.13</td><td>$3.35</td><td class="good">+24%</td><td class="good">🟢 優於財測</td></tr>
</tbody></table></div>

> 📌 **上半年累計（1H FY26）**：營收 1,589 億（+17.5%）、營業利益 762 億（+22.6%）、淨利 662 億。營業費用年增 5%，含遊戲業務減損。Q2 認列 OpenAI 相關淨利得 75.8 億（稅後），去年同期為損失 9.4 億。

---

### 資產負債與現金流精要（US$ 百萬）

<div class="sw"><table>
<thead><tr><th>指標</th><th>2025/12/31</th><th>2025/06/30</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>現金與短期投資</b></td><td><b>89,462</b></td><td>94,565</td><td>半年 -51 億</td></tr>
<tr><td><b>應收帳款</b></td><td><b>56,535</b></td><td>69,905</td><td>年度帳單季節性</td></tr>
<tr><td><b>不動產與設備淨額</b></td><td><b>261,126</b></td><td>204,966</td><td class="warn">🟡 半年 +562 億</td></tr>
<tr><td><b>短期遞延收入</b></td><td><b>51,376</b></td><td>64,555</td><td>季節性下降</td></tr>
<tr><td><b>總債務</b></td><td><b>40,262</b></td><td>43,151</td><td class="good">🟢 還債 30 億</td></tr>
<tr><td><b>股東權益</b></td><td><b>390,875</b></td><td>343,479</td><td class="good">🟢 半年 +14%</td></tr>
<tr><td><b>Q2 營業現金流</b></td><td><b>35,758</b></td><td>去年 22,291</td><td class="good">🟢 年增 60%</td></tr>
<tr><td><b>Q2 現金資本支出</b></td><td><b>29,876</b></td><td>去年 15,804</td><td class="bad">🔴 年增 89%</td></tr>
<tr><td><b>Q2 自由現金流</b></td><td><b>5,882</b></td><td>去年 6,487</td><td class="bad">🔴 年減 9%</td></tr>
</tbody></table></div>

> 📌 **財務品質**：資本支出 375 億（公司口徑，含融資租賃），約三分之二是 GPU、CPU 等短年限資產。本季融資租賃比重較低，現金資本支出 299 億，所以自由現金流季減到 59 億。折舊攤銷 92 億、年增 62%。Q2 回饋股東 127 億（公司口徑，年增 32%）；現金流量表上的股利支付 67.6 億、買回 74.2 億。

---

## 2. 🔍 五大核心洞察與法說會直擊

<div class="sb">
<h3>🎯 洞察一：Azure 39% 小幅優於預期，但產能仍不夠</h3>
<p>Azure 與其他雲端服務年增 39%（固定匯率 38%），財務長 Amy Hood 說小幅優於預期，靠的是效率提升讓部分產能轉給 Azure。她也說<b>「需求持續超過可用供給」</b>。Q3 Azure 財測 37–38%，比本季略低，且要和第一方應用、研發分配產能。市場原本期待更高的 Azure 成長，股價隔日跌 10%。</p>
</div>

<div class="sb">
<h3>🎯 洞察二：資本支出 375 億，產能要在 Azure 與自家 AI 之間分配</h3>
<p>Hood 說明，有限的新產能必須<b>「在讓新供給更能滿足 Azure 需求，與擴大 M365 Copilot、GitHub Copilot 等第一方 AI 使用之間取得平衡」</b>，還要分給研發團隊並汰換老舊伺服器。換句話說，Azure 成長率不只看需求，也看微軟把多少 GPU 留給自己。Q3 資本支出預計季減，主因是雲端建置與融資租賃交付時點，短年限資產比重維持。</p>
</div>

<div class="sb">
<h3>🎯 洞察三：RPO 6,250 億，其中 45% 來自 OpenAI</h3>
<p>商業剩餘履約義務（RPO）年增 110% 至 6,250 億，加權期間約 2.5 年，約 25% 在 12 個月內認列。商業新簽約金額年增 230%，來自 OpenAI 的大型 Azure 承諾與 11 月宣布的 Anthropic 承諾。Hood 說<b>「我們的商業 RPO 約 45% 來自 OpenAI」</b>，其餘部分年增 28%。訂單規模驚人，但集中度也高。</p>
</div>

<div class="sb">
<h3>🎯 洞察四：OpenAI 改制後的會計利得，讓 GAAP EPS 跳升 60%</h3>
<p>Hood 說明，微軟仍以權益法認列 OpenAI 投資；OpenAI 改制後，<b>「我們改以其資產負債表淨資產變動的持股比例認列損益」</b>，不再依其營運損益。結果業外收支達 100 億，GAAP EPS 5.16 美元、年增 60%；排除 OpenAI 影響後是 4.14 美元、年增 24%。看本業要用排除後的數字。</p>
</div>

<div class="sb">
<h3>🎯 洞察五：AI 業務已超過部分老牌產品，Copilot 付費 1,500 萬席</h3>
<p>執行長 Satya Nadella 說：<b>「即使在早期階段，我們打造的 AI 業務已大於一些花了數十年才建立的最大產品線」</b>。M365 Copilot 付費席位 1,500 萬、季增加速，付費 M365 商業席位逾 4.5 億、年增 6%。本季新增近 1 GW 總產能，自研 Maia 200 的總持有成本比現有最新硬體改善逾 30%。</p>
</div>

---

## 3. 🛡️ 護城河與 Q3 財測展望

<div class="sb">
<h3>🏰 核心護城河：同時賣雲端算力與 AI 應用</h3>
<p>微軟同時擁有 Azure 基礎設施、Foundry 模型平台與 Copilot 應用，Foundry 上已有逾 1,500 家客戶同時使用 Anthropic 與 OpenAI 模型。Nadella 提醒投資人看資本支出時，<b>「不只要想到 Azure，也要想到 M365 Copilot 與 GitHub Copilot」</b>，因為每一層都有自己的毛利與客戶終身價值。</p>
</div>

### FY26 Q3 官方財測

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q3 FY26 財測</th><th>Q2 FY26 實際</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>總營收</b></td><td><b>$80.65–81.75B</b></td><td>$81.3B</td><td class="good">🟢 年增 15–17%</td></tr>
<tr><td><b>營業成本</b></td><td><b>$26.65–26.85B</b></td><td>$26.0B</td><td class="warn">🟡 年增 22–23%</td></tr>
<tr><td><b>營業費用</b></td><td><b>$17.8–17.9B</b></td><td>$17.0B</td><td class="warn">🟡 年增 10–11%</td></tr>
<tr><td><b>Azure（固定匯率）</b></td><td><b>+37–38%</b></td><td>+38%</td><td class="warn">🟡 略為放緩</td></tr>
<tr><td><b>資本支出</b></td><td><b>季減</b></td><td>$37.5B</td><td>租賃交付時點</td></tr>
<tr><td><b>營業利益率</b></td><td><b>年減少許</b></td><td>47.1%</td><td class="warn">🟡 AI 投資</td></tr>
<tr><td><b>Q3 營業利益（推算）</b></td><td><b>~$35.9–37.3B</b></td><td>$38.3B</td><td>本文推算</td></tr>
</tbody></table></div>

> 📌 Q3 營業利益為本文以營收減營業成本與營業費用的財測區間推算，非公司指引。

---

## 4. ⚠️ 風險提示

<h3 class="risk-red">🔴 高風險（High Risk）</h3>
<div class="sb rh"><ul>
<li><b>OpenAI 集中度</b>：RPO 有 45% 來自 OpenAI，對方若放慢建置或財務吃緊，未來營收可見度會明顯下降。</li>
<li><b>自由現金流被壓縮</b>：資本支出 375 億、年增近九成，Q2 自由現金流只剩 59 億。</li>
</ul></div>

<h3 class="risk-gold">🟡 中風險（Medium Risk）</h3>
<div class="sb rm"><ul>
<li><b>產能分配</b>：GPU 優先給 Copilot 與研發時，Azure 成長會受限，Q3 財測已略為放緩。</li>
<li><b>折舊上升</b>：短年限資產佔資本支出三分之二，折舊攤銷年增 62%，壓低毛利率。</li>
<li><b>GAAP 盈餘波動</b>：OpenAI 改以淨資產變動認列，未來可能出現大額利得或損失。</li>
</ul></div>

<h3 class="risk-green">🟢 低風險／潛在機會（Low Risk / Opportunity）</h3>
<div class="sb rl"><ul>
<li><b>非 OpenAI 訂單</b>：RPO 中 OpenAI 以外的部分仍年增 28%，需求分散。</li>
<li><b>Copilot 變現</b>：付費 1,500 萬席且加速，ARPU 由 E5 與 Copilot 帶動。</li>
</ul></div>

---

## 5. 📊 估值觀察

### 估值指標（以 2026/01/29 收盤價計）

<div class="sw"><table>
<thead><tr><th>指標</th><th>數值</th><th>點評</th></tr></thead>
<tbody>
<tr><td><b>收盤價</b></td><td>US$433.50</td><td class="bad">🔴 財報後首日 -10.0%</td></tr>
<tr><td><b>市值（估算）</b></td><td>~US$3.22 兆</td><td>流通股 74.29 億</td></tr>
<tr><td><b>企業價值 EV（估算）</b></td><td>~US$3.17 兆</td><td>淨現金 492 億</td></tr>
<tr><td><b>本益比（TTM GAAP）</b></td><td>~27.1 倍</td><td>TTM EPS 約 15.99</td></tr>
<tr><td><b>本益比（Q2 年化）</b></td><td>~26.2 倍</td><td>以 4.14×4 計</td></tr>
<tr><td><b>EV / TTM 營業利益</b></td><td>~22.2 倍</td><td>TTM 1,426 億</td></tr>
<tr><td><b>股價營收比（TTM）</b></td><td>~10.5 倍</td><td>TTM 營收 3,055 億</td></tr>
<tr><td><b>股利殖利率</b></td><td>~0.84%</td><td>以 Q2 實付年化</td></tr>
</tbody></table></div>

> 📌 市值以 12/31 流通股 74.29 億股估算；EV = 市值 − 現金與短期投資 894.6 億 ＋ 債務 402.6 億。TTM 為 FY25 Q3 至 FY26 Q2，GAAP 淨利 1,192.6 億含 OpenAI 利得。股價 1/28 收 $481.63（財報盤後公布）、1/29 收 $433.50。

### 多空論點對照

<div class="sw"><table>
<thead><tr><th>議題</th><th>多方看法</th><th>空方看法</th><th>本季證據</th></tr></thead>
<tbody>
<tr><td><b>雲端</b></td><td>Azure 39% 優於預期</td><td>Q3 財測放緩</td><td class="warn">🟡 37–38%</td></tr>
<tr><td><b>訂單</b></td><td>RPO 6,250 億</td><td>45% 來自 OpenAI</td><td class="bad">🔴 集中度高</td></tr>
<tr><td><b>獲利</b></td><td>營益率 47%</td><td>GAAP 含 OpenAI 利得</td><td class="good">🟢 本業 EPS +24%</td></tr>
<tr><td><b>現金流</b></td><td>營業現金流 +60%</td><td>FCF 僅 59 億</td><td class="bad">🔴 資本支出 +89%</td></tr>
<tr><td><b>Copilot</b></td><td>1,500 萬付費席</td><td>佔 4.5 億席比例低</td><td class="good">🟢 季增加速</td></tr>
<tr><td><b>估值</b></td><td>跌後本益比 26 倍</td><td>資本密集度升高</td><td class="warn">🟡 隔日跌 10%</td></tr>
</tbody></table></div>

> 📅 **事後回顧（2026/11 補記）**：本文正文只用 2026/1/29 當時已公開的資訊。後來的發展：FY26 Q3 營收 828.9 億、高於本季給的財測上緣，FY26 全年營收 3,318 億、淨利 1,337 億；9 月公司把分部改為「Agents and Infra」與「Devices and Consumer」；FY27 Q1 Azure 加速到 48%、RPO 6,770 億（見 [FY27 Q1 分析](/earnings/msft-q1-fy2027/)）。股價到 2026/11/11 收 521.13 美元，較 1/29 上漲約 20%。

---

## 6. 📋 關鍵觀察

- **雲端里程碑**：Microsoft Cloud 營收 515 億、首破 500 億，Azure 年增 39%。
- **本業穩健**：營收 813 億（+17%）、營益率 47%，排除 OpenAI 的 EPS 4.14 美元（+24%）。
- **OpenAI 雙面刃**：貢獻 45% 的 RPO 與 76 億會計利得，也帶來集中度與盈餘波動。
- **現金流被資本支出吃掉**：資本支出 375 億，自由現金流只剩 59 億。
- **市場不買單**：Q3 Azure 財測略降到 37–38%，股價隔日跌 10%。

> 💡 **一句話總結**：微軟這季的本業與訂單都很強，但 Azure 成長受產能限制、訂單又高度集中在 OpenAI；市場用 10% 的跌幅表達了對資本支出回報的疑慮。

<div class="disc">
<b>免責聲明（Disclaimer）</b>：本報告僅為客觀財務數據整理與產業戰略分析，不構成任何證券之買入、賣出或持有建議，亦不提供目標價預測。投資人應獨立判斷並自負投資風險。<br><br>
<b>資料來源（Sources）</b>：Microsoft FY2026 Q2 Form 8-K 新聞稿（2026-01-28）；SEC XBRL 歷史季度數據（FY25 Q3 至 FY26 Q4）；Microsoft 投資人關係網站 FY26 Q2 法說會逐字稿（Satya Nadella、Amy Hood 發言，中譯為本文翻譯）；Yahoo Finance 股價（截至 2026-11-11）。
</div>
