---
title: "Microsoft (MSFT) FY26 Q2 财报分析：云端破 500 亿、RPO 6,250 亿近半来自 OpenAI，隔日跌 10%"
date: 2026-01-29T00:00:00+08:00
ticker: "MSFT"
quarter: "FY2026 Q2"
logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
color: "#00a4ef"
translationKey: "msft-q2-fy2026"
summary: "Q2 营收 813 亿美元（+17%），Azure 同比增长 39%、Microsoft Cloud 首破 500 亿，排除 OpenAI 的 EPS 4.14 美元（+24%）。但资本支出 375 亿、自由现金流只剩 59 亿，RPO 有 45% 来自 OpenAI，股价隔日跌 10%。"
tags: ["云计算", "AI", "Microsoft", "MSFT", "Azure", "Copilot", "OpenAI"]
author: "Wongjai ⚡"
draft: false
---

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q2 营收</div><div class="value">US$813亿</div><div class="change up">▲17% YoY</div></div>
<div class="kpi-card"><div class="label">Azure 增长</div><div class="value">+39%</div><div class="change up">固定汇率 38%</div></div>
<div class="kpi-card"><div class="label">Microsoft Cloud</div><div class="value">US$515亿</div><div class="change up">▲26%｜首破 500 亿</div></div>
<div class="kpi-card"><div class="label">EPS（剔除 OpenAI）</div><div class="value">US$4.14</div><div class="change up">▲24% YoY</div></div>
<div class="kpi-card"><div class="label">商业 RPO</div><div class="value">US$6,250亿</div><div class="change wn">45% 来自 OpenAI</div></div>
<div class="kpi-card"><div class="label">资本开支（含租赁）</div><div class="value">US$375亿</div><div class="change wn">三分之二买芯片</div></div>
<div class="kpi-card"><div class="label">自由现金流</div><div class="value">US$59亿</div><div class="change dn">▼9% YoY</div></div>
<div class="kpi-card"><div class="label">M365 Copilot</div><div class="value">1,500万席</div><div class="change up">付费席位</div></div>
</div>

> 📌 **口径说明**：本文于 2026/11 依官方文件重新整理（v3.0 格式），财务数据取自 Microsoft 2026/01/28 提交之 SEC Form 8-K 新闻稿（美国 GAAP，单位百万美元），分部采当时的三大部门。原版摘要把 Azure 成长写成 30%，正确为 39%，已更正。财报电话会引言取自 Microsoft 投资者关系网站公布之逐字稿。股价取自 Yahoo Finance。

## 1. 📈 核心数据速览

### FY26 Q2 利润表摘要（US$ 百万）

<div class="sw"><table>
<thead><tr><th>指标</th><th>Q2 FY26</th><th>Q1 FY26</th><th>Q2 FY25</th><th>YoY</th><th>点评</th></tr></thead>
<tbody>
<tr><td><b>营收</b></td><td><b>81,273</b></td><td>77,673</td><td>69,632</td><td class="good">+16.7%</td><td class="good">🟢 优于指引</td></tr>
<tr><td>　生产力与商业流程</td><td>34,116</td><td>33,020</td><td>29,437</td><td class="good">+15.9%</td><td>M365 商业云 +17%</td></tr>
<tr><td>　智能云</td><td>32,907</td><td>30,897</td><td>25,544</td><td class="good">+28.8%</td><td class="good">🟢 Azure +39%</td></tr>
<tr><td>　更多个人计算</td><td>14,250</td><td>13,756</td><td>14,651</td><td class="bad">-2.7%</td><td>Xbox -5%</td></tr>
<tr><td><b>毛利率</b></td><td><b>68.0%</b></td><td>69.0%</td><td>68.7%</td><td class="warn">-0.7pp</td><td class="warn">🟡 AI 投资拉低</td></tr>
<tr><td><b>营业利润</b></td><td><b>38,275</b></td><td>37,961</td><td>31,653</td><td class="good">+20.9%</td><td class="good">🟢 利润率 47%</td></tr>
<tr><td><b>营业外收支</b></td><td><b>9,971</b></td><td>-3,660</td><td>-2,288</td><td>转正</td><td class="warn">🟡 OpenAI 利得</td></tr>
<tr><td><b>净利润（GAAP）</b></td><td><b>38,458</b></td><td>27,747</td><td>24,108</td><td class="good">+59.5%</td><td>含 OpenAI 76 亿</td></tr>
<tr><td><b>稀释 EPS（GAAP）</b></td><td><b>$5.16</b></td><td>$3.72</td><td>$3.23</td><td class="good">+60%</td><td>OpenAI +1.02</td></tr>
<tr><td><b>稀释 EPS（剔除 OpenAI）</b></td><td><b>$4.14</b></td><td>$4.13</td><td>$3.35</td><td class="good">+24%</td><td class="good">🟢 优于指引</td></tr>
</tbody></table></div>

> 📌 **上半年累计（1H FY26）**：营收 1,589 亿（+17.5%）、营业利润 762 亿（+22.6%）、净利润 662 亿。营业费用同比增长 5%，含游戏业务减值。Q2 确认 OpenAI 相关净利得 75.8 亿（税后），去年同期为损失 9.4 亿。

---

### 资产负债与现金流摘要（US$ 百万）

<div class="sw"><table>
<thead><tr><th>指标</th><th>2025/12/31</th><th>2025/06/30</th><th>点评</th></tr></thead>
<tbody>
<tr><td><b>现金及短期投资</b></td><td><b>89,462</b></td><td>94,565</td><td>半年 -51 亿</td></tr>
<tr><td><b>应收账款</b></td><td><b>56,535</b></td><td>69,905</td><td>年度账单季节性</td></tr>
<tr><td><b>不动产及设备净额</b></td><td><b>261,126</b></td><td>204,966</td><td class="warn">🟡 半年 +562 亿</td></tr>
<tr><td><b>短期递延收入</b></td><td><b>51,376</b></td><td>64,555</td><td>季节性下降</td></tr>
<tr><td><b>总债务</b></td><td><b>40,262</b></td><td>43,151</td><td class="good">🟢 还债 30 亿</td></tr>
<tr><td><b>股东权益</b></td><td><b>390,875</b></td><td>343,479</td><td class="good">🟢 半年 +14%</td></tr>
<tr><td><b>Q2 经营现金流</b></td><td><b>35,758</b></td><td>去年 22,291</td><td class="good">🟢 同比增 60%</td></tr>
<tr><td><b>Q2 现金资本支出</b></td><td><b>29,876</b></td><td>去年 15,804</td><td class="bad">🔴 同比增长 89%</td></tr>
<tr><td><b>Q2 自由现金流</b></td><td><b>5,882</b></td><td>去年 6,487</td><td class="bad">🔴 同比下降 9%</td></tr>
</tbody></table></div>

> 📌 **财务质量**：资本支出 375 亿（公司口径，含融资租赁），约三分之二是 GPU、CPU 等短年限资产。本季融资租赁比重较低，现金资本支出 299 亿，所以自由现金流环比下降到 59 亿。折旧摊销 92 亿、同比增长 62%。Q2 回馈股东 127 亿（公司口径，同比增长 32%）；现金流量表上的股利支付 67.6 亿、回购 74.2 亿。

---

## 2. 🔍 五大核心洞察与业绩会要点

<div class="sb">
<h3>🎯 洞察一：Azure 39% 小幅高于公司预估，但产能仍不够</h3>
<p>Azure 与其他云端服务同比增长 39%（固定汇率 38%），财务长 Amy Hood 表示小幅高于公司预估，靠的是效率提升让部分产能转给 Azure。她也表示<b>“需求持续超过可用供给”</b>。Q3 Azure 指引 37–38%，比本季略低，且要和第一方应用、研发分配产能。市场原本期待更高的 Azure 成长，股价隔日跌 10%。</p>
</div>

<div class="sb">
<h3>🎯 洞察二：资本支出 375 亿，产能要在 Azure 与自家 AI 之间分配</h3>
<p>Hood 说明，有限的新产能必须<b>“在让新供给更能满足 Azure 需求，与扩大 M365 Copilot、GitHub Copilot 等第一方 AI 使用之间取得平衡”</b>，还要分给研发团队并汰换老旧服务器。换句话说，Azure 成长率不只看需求，也看微软把多少 GPU 留给自家使用。Q3 资本支出预计环比下降，主因是云端建置与融资租赁交付时点，短年限资产比重维持。</p>
</div>

<div class="sb">
<h3>🎯 洞察三：RPO 6,250 亿，其中 45% 来自 OpenAI</h3>
<p>商业剩余履约义务（RPO）同比增长 110% 至 6,250 亿，加权期间约 2.5 年，约 25% 在 12 个月内确认。商业新签约金额同比增长 230%，来自 OpenAI 的大型 Azure 承诺与 11 月宣布的 Anthropic 承诺。Hood 表示<b>“我们的商业 RPO 约 45% 来自 OpenAI”</b>，其余部分同比增长 28%。订单规模惊人，但集中度也高。</p>
</div>

<div class="sb">
<h3>🎯 洞察四：OpenAI 改制后的会计利得，让 GAAP EPS 跳升 60%</h3>
<p>Hood 说明，微软仍以权益法核算 OpenAI 投资；OpenAI 改制后，<b>“我们改以其资产负债表净资产变动的持股比例确认损益”</b>，不再依其运营损益。结果营业外收支达 100 亿，GAAP EPS 5.16 美元、同比增长 60%；排除 OpenAI 影响后是 4.14 美元、同比增长 24%。看主业要用排除后的数字。</p>
</div>

<div class="sb">
<h3>🎯 洞察五：AI 业务已超过部分老牌产品，Copilot 付费 1,500 万席</h3>
<p>执行长 Satya Nadella 表示：<b>“即使在早期阶段，我们打造的 AI 业务已大于一些花了几十年才建立的最大产品线”</b>。M365 Copilot 付费席位 1,500 万、环比加速，付费 M365 商业席位逾 4.5 亿、同比增长 6%。本季新增近 1 GW 总产能，自研 Maia 200 的总持有成本比现有最新硬件改善逾 30%。</p>
</div>

---

## 3. 🛡️ 护城河与 Q3 指引展望

<div class="sb">
<h3>🏰 核心护城河：同时卖云端算力与 AI 应用</h3>
<p>微软同时拥有 Azure 基础设施、Foundry 模型平台与 Copilot 应用，Foundry 上已有逾 1,500 家客户同时使用 Anthropic 与 OpenAI 模型。Nadella 提醒投资者看资本支出时，<b>“不只要想到 Azure，也要想到 M365 Copilot 与 GitHub Copilot”</b>，因为每一层都有自己的毛利与客户终身价值。</p>
</div>

### FY26 Q3 官方指引

<div class="sw"><table>
<thead><tr><th>指标</th><th>Q3 FY26 指引</th><th>Q2 FY26 实际</th><th>点评</th></tr></thead>
<tbody>
<tr><td><b>总营收</b></td><td><b>$80.65–81.75B</b></td><td>$81.3B</td><td class="good">🟢 同比增 15–17%</td></tr>
<tr><td><b>营业成本</b></td><td><b>$26.65–26.85B</b></td><td>$26.0B</td><td class="warn">🟡 同比增长 22–23%</td></tr>
<tr><td><b>营业费用</b></td><td><b>$17.8–17.9B</b></td><td>$17.0B</td><td class="warn">🟡 同比增长 10–11%</td></tr>
<tr><td><b>Azure（固定汇率）</b></td><td><b>+37–38%</b></td><td>+38%</td><td class="warn">🟡 略为放缓</td></tr>
<tr><td><b>资本开支</b></td><td><b>环比下降</b></td><td>$37.5B</td><td>租赁交付时点</td></tr>
<tr><td><b>营业利润率</b></td><td><b>同比微降</b></td><td>47.1%</td><td class="warn">🟡 AI 投资</td></tr>
<tr><td><b>Q3 营业利润（推算）</b></td><td><b>~$35.9–37.3B</b></td><td>$38.3B</td><td>本文推算</td></tr>
</tbody></table></div>

> 📌 Q3 营业利润为本文以营收减营业成本与营业费用的指引区间推算，非公司指引。

---

## 4. ⚠️ 风险提示

<h3 class="risk-red">🔴 高风险（High Risk）</h3>
<div class="sb rh"><ul>
<li><b>OpenAI 集中度</b>：RPO 有 45% 来自 OpenAI，对方若放慢建置或财务吃紧，未来营收可见度会明显下降。</li>
<li><b>自由现金流被压缩</b>：资本支出 375 亿、同比增长近九成，Q2 自由现金流只剩 59 亿。</li>
</ul></div>

<h3 class="risk-gold">🟡 中风险（Medium Risk）</h3>
<div class="sb rm"><ul>
<li><b>产能分配</b>：GPU 优先给 Copilot 与研发时，Azure 成长会受限，Q3 指引已略为放缓。</li>
<li><b>折旧上升</b>：短年限资产占资本支出三分之二，折旧摊销同比增长 62%，压低毛利率。</li>
<li><b>GAAP 盈余波动</b>：OpenAI 改以净资产变动确认，未来可能出现大额利得或损失。</li>
</ul></div>

<h3 class="risk-green">🟢 低风险／潜在机会（Low Risk / Opportunity）</h3>
<div class="sb rl"><ul>
<li><b>非 OpenAI 订单</b>：RPO 中 OpenAI 以外的部分仍同比增长 28%，需求分散。</li>
<li><b>Copilot 变现</b>：付费 1,500 万席且加速，ARPU 由 E5 与 Copilot 带动。</li>
</ul></div>

---

## 5. 📊 估值观察

### 估值指标（以 2026/01/29 收盘价计）

<div class="sw"><table>
<thead><tr><th>指标</th><th>数值</th><th>点评</th></tr></thead>
<tbody>
<tr><td><b>收盘价</b></td><td>US$433.50</td><td class="bad">🔴 财报后首日 -10.0%</td></tr>
<tr><td><b>市值（估算）</b></td><td>~US$3.22 万亿</td><td>流通股 74.29 亿</td></tr>
<tr><td><b>企业价值 EV（估算）</b></td><td>~US$3.17 万亿</td><td>净现金 492 亿</td></tr>
<tr><td><b>市盈率（TTM GAAP）</b></td><td>~27.1 倍</td><td>TTM EPS 约 15.99</td></tr>
<tr><td><b>市盈率（Q2 年化）</b></td><td>~26.2 倍</td><td>以 4.14×4 计</td></tr>
<tr><td><b>EV / TTM 营业利润</b></td><td>~22.2 倍</td><td>TTM 1,426 亿</td></tr>
<tr><td><b>市销率（TTM）</b></td><td>~10.5 倍</td><td>TTM 营收 3,055 亿</td></tr>
<tr><td><b>股息率</b></td><td>~0.84%</td><td>以 Q2 实付年化</td></tr>
</tbody></table></div>

> 📌 市值以 12/31 流通股 74.29 亿股估算；EV = 市值 − 现金与短期投资 894.6 亿 ＋ 债务 402.6 亿。TTM 为 FY25 Q3 至 FY26 Q2，GAAP 净利润 1,192.6 亿含 OpenAI 利得。股价 1/28 收 $481.63（财报盘后公布）、1/29 收 $433.50。

### 多空观点对照

<div class="sw"><table>
<thead><tr><th>议题</th><th>多方观点</th><th>空方观点</th><th>本季证据</th></tr></thead>
<tbody>
<tr><td><b>云计算</b></td><td>Azure 39% 高于公司预估</td><td>Q3 指引放缓</td><td class="warn">🟡 37–38%</td></tr>
<tr><td><b>订单</b></td><td>RPO 6,250 亿</td><td>45% 来自 OpenAI</td><td class="bad">🔴 集中度高</td></tr>
<tr><td><b>盈利</b></td><td>营业利润率 47%</td><td>GAAP 含 OpenAI 利得</td><td class="good">🟢 主业 EPS +24%</td></tr>
<tr><td><b>现金流</b></td><td>经营现金流 +60%</td><td>FCF 仅 59 亿</td><td class="bad">🔴 资本支出 +89%</td></tr>
<tr><td><b>Copilot</b></td><td>1,500 万付费席</td><td>占 4.5 亿席比例低</td><td class="good">🟢 环比加速</td></tr>
<tr><td><b>估值</b></td><td>跌后市盈率 26 倍</td><td>资本密集度升高</td><td class="warn">🟡 隔日跌 10%</td></tr>
</tbody></table></div>

> 📅 **事后回顾（2026/11 补记）**：本文正文只用 2026/1/29 当时已公开的信息。后来的发展：FY26 Q3 营收 828.9 亿、高于本季给的指引上缘，FY26 全年营收 3,318 亿、净利润 1,337 亿；9 月公司把分部改为“Agents and Infra”与“Devices and Consumer”；FY27 Q1 Azure 加速到 48%、RPO 6,770 亿（见 [FY27 Q1 分析](/earnings/msft-q1-fy2027/)）。股价到 2026/11/11 收 521.13 美元，较 1/29 上涨约 20%。

---

## 6. 📋 关键观察

- **云端里程碑**：Microsoft Cloud 营收 515 亿、首破 500 亿，Azure 同比增长 39%。
- **主业稳健**：营收 813 亿（+17%）、营业利润率 47%，排除 OpenAI 的 EPS 4.14 美元（+24%）。
- **OpenAI 双面刃**：贡献 45% 的 RPO 与 76 亿会计利得，也带来集中度与盈余波动。
- **现金流被资本支出吃掉**：资本支出 375 亿，自由现金流只剩 59 亿。
- **市场不买单**：Q3 Azure 指引略降到 37–38%，股价隔日跌 10%。

> 💡 **一句话总结**：微软这季的主业与订单都很强，但 Azure 成长受产能限制、订单又高度集中在 OpenAI；市场用 10% 的跌幅表达了对资本支出回报的疑虑。

<div class="disc">
<b>免责声明（Disclaimer）</b>：本报告仅为客观的财务数据整理与产业战略分析，不构成任何证券的买入、卖出或持有建议，也不提供目标价预测。投资者应独立判断并自负投资风险。<br><br>
<b>数据来源（Sources）</b>：Microsoft FY2026 Q2 Form 8-K 新闻稿（2026-01-28）；SEC XBRL 历史季度数据（FY25 Q3 至 FY26 Q4）；Microsoft 投资者关系网站 FY26 Q2 财报电话会逐字稿（Satya Nadella、Amy Hood 发言，中译为本文翻译）；Yahoo Finance 股价（截至 2026-11-11）。
</div>
