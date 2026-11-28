---
title: "オラクル（ORCL）FY26 Q3 決算分析：OCIが前年比84%増、RPO 5,530億ドル、FY27売上高ガイダンスを900億ドルに引き上げ"
date: 2026-03-11T00:00:00+08:00
ticker: "ORCL"
quarter: "FY2026 Q3"
logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128"
color: "#c74634"
translationKey: "orcl-q3-fy2026"
summary: "FY26 Q3売上高は172億ドル（+22%）で、クラウドは89億（+44%）、クラウドインフラは49億（+84%）。RPOは5,530億で前年比325%増、会社は15年ぶりにオーガニック売上高とNon-GAAP EPSがともに2割超伸びたとした。ただし直近12か月の設備投資は483億、フリーキャッシュフローは-247億で、総債務は1,346億に増えた。"
tags: ["Oracle", "ORCL", "クラウド", "OCI", "AI", "データセンター", "RPO", "設備投資"]
author: "Wongjai ⚡"
draft: false
---

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q3 売上高</div><div class="value">US$171.9億</div><div class="change up">▲22% YoY</div></div>
<div class="kpi-card"><div class="label">クラウド売上高</div><div class="value">US$89.1億</div><div class="change up">▲44% YoY</div></div>
<div class="kpi-card"><div class="label">クラウドインフラ</div><div class="value">US$48.9億</div><div class="change up">▲84% YoY</div></div>
<div class="kpi-card"><div class="label">RPO</div><div class="value">US$5,530億</div><div class="change up">▲325% YoY</div></div>
<div class="kpi-card"><div class="label">Non-GAAP EPS</div><div class="value">US$1.79</div><div class="change up">▲21% YoY</div></div>
<div class="kpi-card"><div class="label">TTMフリーキャッシュフロー</div><div class="value">-US$247億</div><div class="change dn">設備投資483億</div></div>
<div class="kpi-card"><div class="label">総債務</div><div class="value">US$1,346億</div><div class="change wn">9か月で +420億</div></div>
<div class="kpi-card"><div class="label">FY27 売上高ガイダンス</div><div class="value">900億ドル</div><div class="change up">引き上げ</div></div>
</div>

> 📌 **数値の基準**：本記事は2026/11にv3.0形式へ刷新した旧記事で、数値はオラクルが2026/3/10に提出したSEC Form 8-Kのプレスリリース（Exhibit 99.1、米国GAAP、単位：百万ドル）で再確認した。旧版は「AIインフラ収入 +243%」「10GW超の電力を確保」など決算説明会での口頭発言を引用していたが、プレスリリースにはないため削除した。オラクルの会計年度は5月末締めで、FY26 Q3は2026/2/28まで。引用はプレスリリースによる（中国語訳は本記事による）。株価はYahoo Financeによる。

## 1. 📈 主要数値の概要

### FY26 Q3 損益計算書の要点（百万ドル）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q3 FY26</th><th>Q3 FY25</th><th>YoY</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>総売上高</b></td><td><b>17,190</b></td><td>14,130</td><td class="good">+21.7%</td><td class="good">🟢 為替一定 +18%</td></tr>
<tr><td><b>クラウド（IaaS＋SaaS）</b></td><td><b>8,914</b></td><td>6,210</td><td class="good">+43.5%</td><td class="good">🟢 売上高の52%</td></tr>
<tr><td><b>ソフトウェアライセンス・サポート</b></td><td><b>6,119</b></td><td>5,926</td><td class="good">+3.3%</td><td>為替一定 -1%</td></tr>
<tr><td><b>クラウド・ソフトウェア原価</b></td><td><b>4,776</b></td><td>2,882</td><td class="bad">+65.7%</td><td class="warn">🟡 GPUとデータセンター</td></tr>
<tr><td><b>営業利益</b></td><td><b>5,464</b></td><td>4,358</td><td class="good">+25.4%</td><td class="good">🟢 営業利益率31.8%</td></tr>
<tr><td><b>支払利息</b></td><td><b>1,180</b></td><td>892</td><td class="bad">+32.3%</td><td class="warn">🟡 借入拡大</td></tr>
<tr><td><b>純利益</b></td><td><b>3,721</b></td><td>2,936</td><td class="good">+26.7%</td><td>税率15.7%</td></tr>
<tr><td><b>希薄化後EPS（GAAP）</b></td><td><b>$1.27</b></td><td>$1.02</td><td class="good">+24.5%</td><td class="good">🟢 為替一定 +16%</td></tr>
<tr><td><b>希薄化後EPS（Non-GAAP）</b></td><td><b>$1.79</b></td><td>$1.48</td><td class="good">+21%</td><td class="good">🟢 ガイダンス超え</td></tr>
</tbody></table></div>

> 📌 **その他のポイント**：売上高にはほかにハードウェア7.1億（+2%）とサービス14.4億（+12%）があり、4区分の合計は17,190。販売費は前年比3%減、研究開発費は7%増で、費用抑制がクラウドコストの急増を相殺した。会社によると、クラウド売上高はガイダンス上限、総売上高は為替一定ベースのガイダンス上限で米ドルベースのガイダンスを上回り、Non-GAAP EPSもガイダンスを上回った。前年同期のNon-GAAP EPS 1.48ドルは+21%から逆算（本記事の推計）。

---

### クラウド売上高の構成と受注（百万ドル）

<div class="sw"><table>
<thead><tr><th>項目</th><th>Q3 FY26</th><th>Q2 FY26</th><th>Q1 FY26</th><th>Q3 FY25</th><th>YoY</th></tr></thead>
<tbody>
<tr><td><b>クラウドインフラ（IaaS）</b></td><td><b>4,888</b></td><td>4,079</td><td>3,347</td><td>2,652</td><td class="good">+84%</td></tr>
<tr><td><b>クラウドアプリケーション（SaaS）</b></td><td><b>4,026</b></td><td>3,898</td><td>3,839</td><td>3,558</td><td class="good">+13%</td></tr>
<tr><td><b>クラウド合計</b></td><td><b>8,914</b></td><td>7,977</td><td>7,186</td><td>6,210</td><td class="good">+44%</td></tr>
<tr><td><b>Fusion Cloud ERP</b></td><td><b>約1,100</b></td><td>—</td><td>—</td><td>—</td><td class="good">+17%</td></tr>
<tr><td><b>NetSuite Cloud ERP</b></td><td><b>約1,100</b></td><td>—</td><td>—</td><td>—</td><td class="good">+14%</td></tr>
<tr><td><b>マルチクラウドデータベース</b></td><td><b>金額非開示</b></td><td>—</td><td>—</td><td>—</td><td class="good">+531%</td></tr>
<tr><td><b>RPO（億ドル）</b></td><td><b>5,530</b></td><td>5,240</td><td>—</td><td>約1,300</td><td class="good">+325%</td></tr>
</tbody></table></div>

> 📌 SaaSはクラウド合計からIaaSを差し引いた値。Q2のRPO 5,240億は「前期比290億増」から、前年同期の約1,300億は「前年比325%増」から逆算（本記事の推計）。会社によると、RPOの前期比増加は主に大型AI契約によるもので、設備の多くは顧客の前払い金でGPUを購入するか、顧客が自らGPUを購入してオラクルに提供するため、追加の資金調達は不要だという。

---

### 貸借対照表とキャッシュフローの要点（US$ 百万）

<div class="sw"><table>
<thead><tr><th>指標</th><th>2026/02/28</th><th>2025/05/31</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>現金および有価証券</b></td><td><b>39,132</b></td><td>11,203</td><td class="good">🟢 279億増</td></tr>
<tr><td><b>売掛金</b></td><td><b>10,719</b></td><td>8,558</td><td class="warn">🟡 25%増</td></tr>
<tr><td><b>総債務</b></td><td><b>134,605</b></td><td>92,568</td><td class="bad">🔴 420億増</td></tr>
<tr><td><b>オペレーティング・リース負債</b></td><td><b>18,512</b></td><td>11,536</td><td class="warn">🟡 60%増</td></tr>
<tr><td><b>株主資本</b></td><td><b>39,051</b></td><td>20,969</td><td class="good">🟢 優先株による調達を含む</td></tr>
<tr><td><b>TTM営業キャッシュフロー</b></td><td><b>23,514</b></td><td>FY25 20,821</td><td class="good">🟢 前年同期比13%増</td></tr>
<tr><td><b>TTM設備投資</b></td><td><b>48,250</b></td><td>FY25 21,215</td><td class="bad">🔴 前年比127%増</td></tr>
<tr><td><b>TTMフリーキャッシュフロー</b></td><td><b>-24,736</b></td><td>FY25 -394</td><td class="bad">🔴 拡大が続く</td></tr>
<tr><td><b>9か月間の設備投資</b></td><td><b>39,170</b></td><td>前年 12,135</td><td class="bad">🔴 3倍超</td></tr>
</tbody></table></div>

> 📌 **財務の質**：総債務＝流動98.9億＋非流動1,247.2億。9か月間に社債発行で純額445.4億、強制転換優先株の発行で49.5億を調達し、現金及び現金同等物は108億から385億に増えた（有価証券を含めると112億から391億）。TTMフリーキャッシュフロー＝営業キャッシュフロー235.1億－設備投資482.5億。

---

## 2. 🔍 5 つの主要な洞察と経営陣の発言

<div class="sb">
<h3>🎯 インサイト1：15年ぶりに売上高とEPSがともに2割超の伸び</h3>
<p>会社はこれを<b>「15年超ぶりに、オーガニック総売上高とNon-GAAP EPSがともに米ドルベースで20%以上伸びた四半期」</b>とした。売上高は171.9億で前年比22%増、Non-GAAP EPSは1.79ドルで前年比21%増。クラウドは89.1億で前年比44%増と売上高の52%を占め、従来型ソフトウェアは3%増にとどまった。</p>
</div>

<div class="sb">
<h3>🎯 インサイト2：OCIは前年比84%増、四半期ごとに加速</h3>
<p>クラウドインフラ売上高は48.9億で前年比84%増、Q1の33.5億、Q2の40.8億から加速を続けた。オラクルのクラウドデータベースは前年比35%増、他社クラウド上で提供するマルチクラウドデータベースは531%増。会社はAIの学習・推論向けクラウド需要は<b>「供給を上回るペースで伸び続けている」</b>とした。クラウド・ソフトウェアのコストは前年比66%増で、GPUとデータセンターへの投資を反映している。</p>
</div>

<div class="sb">
<h3>🎯 インサイト3：RPO 5,530億、大口顧客が資金を自ら用意</h3>
<p>RPOは5,530億で前年比325%増、前期比290億増。会社によると、増加分は主に大型AI契約で、設備の多くは顧客の前払い金でオラクルがGPUを購入するか、顧客が自らGPUを購入してオラクルに提供するため、<b>「これらの契約のために追加の資金調達は必要ないと見込む」</b>。また、最大級のAIクラウド顧客の一部で最近財務状況が大きく改善したとも述べた。</p>
</div>

<div class="sb">
<h3>🎯 インサイト4：300億を調達、2026年の社債発行はこの枠内に</h3>
<p>オラクルは2月に最大500億の債務・株式による資金調達を発表し、2026暦年にこの枠を超える追加の社債発行は見込まないとした。数日のうちに投資適格債と強制転換優先株で300億を調達し、応募は大幅な超過となった。株式の市場価格での発行（ATM）分はまだ始まっていない。総債務は9か月で420億増え1,346億に、支払利息は前年比32%増えた。</p>
</div>

<div class="sb">
<h3>🎯 インサイト5：AIによるコード生成でチームを縮小、FY27売上高ガイダンスは900億に</h3>
<p>会社によると、AIによるコード生成は十分に効率化され、オラクルは製品開発チームを<b>「より小さく、より機敏で、より生産性の高いグループ」</b>に再編し、より少ない人数でより多くのSaaSを開発している。FY26ガイダンスの売上高670億、設備投資500億は据え置き、FY27売上高ガイダンスは900億に引き上げ、FY27以降の成長予測も<b>「余裕をもって達成し、上回る可能性もある」</b>とした。</p>
</div>

---

## 3. 🛡️ 競争優位とQ4ガイダンスの見通し

<div class="sb">
<h3>🏰 コアの堀：データベースとAIクラウド契約</h3>
<p>オラクルのデータベースは企業の基幹システムの中核で、マルチクラウドデータベースにより他社クラウド上でもデータベースを販売できる。OCIは大型のAI学習・推論契約で急拡大しており、RPO 5,530億が複数年の見通しを与える。FusionとNetSuiteのERPは2桁成長を続け、SaaSとデータベースの乗り換えコストは高い。</p>
</div>

### FY26 Q4と通期の会社ガイダンス

<div class="sw"><table>
<thead><tr><th>指標</th><th>ガイダンス</th><th>Q3 FY26実績</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>Q4総売上高の伸び</b></td><td><b>+19–21%（米ドル）</b></td><td>+22%</td><td class="good">🟢 高成長を維持</td></tr>
<tr><td><b>Q4クラウド売上高の伸び</b></td><td><b>+46–50%（米ドル）</b></td><td>+44%</td><td class="good">🟢 再加速</td></tr>
<tr><td><b>Q4 Non-GAAP EPS</b></td><td><b>$1.96–2.00</b></td><td>$1.79</td><td class="good">🟢 前年比15–17%増</td></tr>
<tr><td><b>FY26 売上高</b></td><td><b>約 $67B</b></td><td>第1～3四半期で約 $48B</td><td>据え置き</td></tr>
<tr><td><b>FY26 設備投資</b></td><td><b>約 $50B</b></td><td>第1～3四半期で $39.2B</td><td class="warn">🟡 Q4は約108億を示唆</td></tr>
<tr><td><b>FY27売上高</b></td><td><b>$90B</b></td><td>—</td><td class="good">🟢 引き上げ</td></tr>
<tr><td><b>四半期配当</b></td><td><b>$0.50</b></td><td>—</td><td>据え置き</td></tr>
</tbody></table></div>

> 📌 第1～3四半期の売上高約480億＝FY26ガイダンス670億の推計の基礎（本記事の推計）。Q4設備投資の示唆値＝500億－第1～3四半期391.7億。為替一定ベースのガイダンス：総売上高 +18–20%、クラウド +44–48%、Non-GAAP EPS 1.92–1.96ドル。EPSの前年比15–17%増はプレスリリースの基準。プレスリリースはFY27売上高ガイダンスを「900億に引き上げ」としか述べておらず、従来の数値は示していない。

---

## 4. ⚠️ リスク

<h3 class="risk-red">🔴 高リスク（High Risk）</h3>
<div class="sb rh"><ul>
<li><b>マイナスのフリーキャッシュフロー</b>：TTM設備投資483億、フリーキャッシュフロー-247億で、借入と株式による資金調達頼みが続く。</li>
<li><b>債務の膨張</b>：総債務1,346億で9か月に420億増、支払利息は前年比32%増。</li>
</ul></div>

<h3 class="risk-gold">🟡 中リスク（Medium Risk）</h3>
<div class="sb rm"><ul>
<li><b>顧客集中</b>：RPOの増加分は主に少数の大型AI契約による。</li>
<li><b>コスト上昇</b>：クラウド・ソフトウェアのコストは前年比66%増で、クラウド売上高の44%を上回る。</li>
<li><b>株式希薄化</b>：強制転換優先株と未開始のATM株式発行が株主価値を希薄化する可能性。</li>
</ul></div>

<h3 class="risk-green">🟢 低リスク／潜在的な機会（Low Risk / Opportunity）</h3>
<div class="sb rl"><ul>
<li><b>受注の見通し</b>：RPO 5,530億、FY27売上高ガイダンス900億。</li>
<li><b>AIによる効率化</b>：AIによるコード生成でSaaS開発の省人化と収益性向上が進む。</li>
</ul></div>

---

## 5. 📊 バリュエーション

### バリュエーション指標（2026/3/11終値ベース）

<div class="sw"><table>
<thead><tr><th>指標</th><th>数値</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>終値</b></td><td>US$163.12</td><td class="good">決算翌日 +9.2%</td></tr>
<tr><td><b>時価総額（推計）</b></td><td>~US$4,750億</td><td>希薄化後29.12億株</td></tr>
<tr><td><b>企業価値 EV（推計）</b></td><td>~US$5,705億</td><td>純負債955億</td></tr>
<tr><td><b>PER（TTM GAAP）</b></td><td>約29.3倍</td><td>TTM EPS 5.57</td></tr>
<tr><td><b>PSR（FY26ガイダンス）</b></td><td>約7.1倍</td><td>売上高約670億</td></tr>
<tr><td><b>PSR（FY27 ガイダンス）</b></td><td>~5.3倍</td><td>売上高 900億ドル</td></tr>
<tr><td><b>PBR</b></td><td>~12.2倍</td><td>純資産391億</td></tr>
<tr><td><b>TTMフリーキャッシュフロー</b></td><td>-US$247億</td><td class="bad">n/m</td></tr>
<tr><td><b>配当利回り</b></td><td>~1.23%</td><td>四半期配当0.50ドル</td></tr>
</tbody></table></div>

> 📌 時価総額はQ3の希薄化後加重平均株式数29.12億株で推計（EPSと同じ基準）。EV＝時価総額－現金・有価証券391.3億＋総債務1,346.1億で、オペレーティング・リース負債185億と優先株は含まない。TTM EPS＝FY25通期4.34－FY25第1～3四半期3.15＋FY26第1～3四半期4.38（XBRL）。株価は3/10終値149.40ドル（決算は引け後発表）、3/11終値163.12ドル。

### 強気・弱気の論点比較

<div class="sw"><table>
<thead><tr><th>論点</th><th>強気の見方</th><th>弱気の見方</th><th>今四半期の根拠</th></tr></thead>
<tbody>
<tr><td><b>成長</b></td><td>売上高とEPSがともに2割増</td><td>従来型ソフトウェアは停滞</td><td class="good">🟢 +22%</td></tr>
<tr><td><b>クラウド</b></td><td>OCI +84%</td><td>コスト66%増</td><td class="good">🟢 四半期ごとに加速</td></tr>
<tr><td><b>受注</b></td><td>RPO 5,530億</td><td>顧客集中</td><td class="good">🟢 +325%</td></tr>
<tr><td><b>資金</b></td><td>顧客がGPUを前払い</td><td>債務1,346億</td><td class="bad">🔴 FCF -247億</td></tr>
<tr><td><b>ガイダンス</b></td><td>FY27は900億に引き上げ</td><td>実行リスク</td><td class="good">🟢 引き上げ</td></tr>
<tr><td><b>バリュエーション</b></td><td>PER約29倍</td><td>レバレッジ上昇</td><td class="warn">🟡 翌日 +9.2%</td></tr>
</tbody></table></div>

> 📅 **事後検証（2026/11追記）**：本記事は2026年11月に刷新したもので、本文は3/11時点で公開済みの情報のみを使っている。FY26 Q4の実際の売上高は192億（+21%）でガイダンス上限に達し、クラウドは99億（+47%）、Non-GAAP EPSは2.11ドルで1.96–2.00ドルのガイダンスを上回った。RPOはさらに850億増えて6,380億に。FY26通期売上高は674億。株価は2026/11/16終値119.09ドルで、2026/3/11から約27.0%下落。

---

## 6. 📋 主な注目点

- **ダブルで2割成長**：売上高172億（+22%）、Non-GAAP EPS 1.79ドル（+21%）で、15年ぶり。
- **OCIが加速**：クラウドインフラは49億で前年比84%増、四半期ごとに加速。
- **受注が急増**：RPO 5,530億で前年比325%増、会社は大口顧客がGPU資金を自ら用意するとしている。
- **多額の借入**：TTM設備投資483億、フリーキャッシュフロー-247億、総債務1,346億。
- **ガイダンス引き上げ**：FY27売上高ガイダンスを前回から900億に引き上げ。

> 💡 **ひとことでまとめると**：オラクルはOCIの84%成長とRPO 5,530億でAIクラウドの受注が本物であることを示したが、-247億のフリーキャッシュフローと1,346億の債務により、この転換は資本市場の支えに大きく依存している。

<div class="disc">
<b>免責事項（Disclaimer）</b>：本レポートは財務データの客観的な整理と業界戦略の分析にすぎず、いかなる有価証券の購入・売却・保有を推奨するものではなく、目標株価も示さない。投資判断はご自身で行い、投資リスクはご自身で負担してください。<br><br>
<b>出典（Sources）</b>：Oracle FY2026 Q3 Form 8-Kプレスリリース（Exhibit 99.1、2026-03-10）；SEC XBRL（FY25と第1～3四半期のEPS）；Oracle FY2026 Q4 Form 8-K（2026-06-10、事後検証のみに使用）；Yahoo Finance株価（2026-11-16まで）。
</div>
