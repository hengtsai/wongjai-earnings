---
title: "エヌビディア（NVDA）FY26 Q4 決算分析：売上高681億ドルで前年比73%増、通期は2,159億ドル突破、在庫は1年で倍増"
date: 2026-02-26T00:00:00+08:00
ticker: "NVDA"
quarter: "FY2026 Q4"
logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128"
color: "#76b900"
translationKey: "nvda-fy2026-q4"
summary: "Q4売上高は681億ドル（+73%）で粗利率は75%に回復、FY26通期の売上高は2,159億（+65%）、フリーキャッシュフローは966億。Q1ガイダンスの780億は中国を含まない。在庫は1年で倍増し、供給関連のコミットメントは952億、Groqのライセンス取得に130億を支払った。"
tags: ["半導体", "AI", "NVIDIA", "NVDA", "GPU", "データセンター", "Blackwell", "Vera Rubin", "Groq"]
author: "Wongjai ⚡"
draft: false
---

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q4 売上高</div><div class="value">US$681億</div><div class="change up">▲73% YoY</div></div>
<div class="kpi-card"><div class="label">データセンター売上高</div><div class="value">US$623億</div><div class="change up">▲75% YoY</div></div>
<div class="kpi-card"><div class="label">粗利益率</div><div class="value">75.0%</div><div class="change up">▲2.0pp YoY</div></div>
<div class="kpi-card"><div class="label">GAAP EPS</div><div class="value">US$1.76</div><div class="change up">▲98% YoY</div></div>
<div class="kpi-card"><div class="label">FY26通期売上高</div><div class="value">US$2,159億</div><div class="change up">▲65% YoY</div></div>
<div class="kpi-card"><div class="label">FY26 フリーキャッシュフロー</div><div class="value">US$966億</div><div class="change up">▲59% YoY</div></div>
<div class="kpi-card"><div class="label">棚卸資産</div><div class="value">US$214億</div><div class="change wn">▲112% YoY</div></div>
<div class="kpi-card"><div class="label">Q1 売上高ガイダンス</div><div class="value">US$780億</div><div class="change up">±2%｜+77% YoY</div></div>
</div>

> 📌 **数値の基準**：本記事は2026/11にv3.0形式へ刷新した旧記事で、数値はエヌビディアが2026/02/25に提出したSEC Form 8-KのプレスリリースとCFO Commentary（米国GAAP、単位：百万ドル）で項目ごとに確認した。旧版のキャッシュ・コンバージョン・サイクル、ROE、出典のない中国売上の逸失額推計は削除した。今期のNon-GAAPは引き続き株式報酬を除く（FY27から含める方式に変更）。決算説明会の書き起こしは入手しておらず、引用はプレスリリースとCFO Commentaryによる。株価はYahoo Financeによる。

## 1. 📈 主要数値の概要

### FY26 Q4 損益計算書の要点（百万ドル）

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q4 FY26</th><th>Q3 FY26</th><th>Q4 FY25</th><th>YoY</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>売上高</b></td><td><b>68,127</b></td><td>57,006</td><td>39,331</td><td class="good">+73%</td><td class="good">🟢 前期比20%増</td></tr>
<tr><td><b>データセンター</b></td><td><b>62,314</b></td><td>51,215</td><td>35,580</td><td class="good">+75%</td><td>売上高の91%</td></tr>
<tr><td>　コンピュート</td><td>51,334</td><td>43,028</td><td>32,556</td><td class="good">+58%</td><td>前期比19%増</td></tr>
<tr><td>　ネットワーキング</td><td>10,980</td><td>8,187</td><td>3,024</td><td class="good">+263%</td><td class="good">🟢 NVLinkがけん引</td></tr>
<tr><td><b>ゲーム</b></td><td><b>3,727</b></td><td>4,265</td><td>2,544</td><td>+47%</td><td class="warn">🟡 前期比13%減</td></tr>
<tr><td><b>粗利益率</b></td><td><b>75.0%</b></td><td>73.4%</td><td>73.0%</td><td class="good">+2.0pp</td><td>Blackwellのコスト改善</td></tr>
<tr><td><b>営業利益</b></td><td><b>44,299</b></td><td>36,010</td><td>24,034</td><td class="good">+84%</td><td class="good">🟢 利益率65.0%</td></tr>
<tr><td><b>純利益（GAAP）</b></td><td><b>42,960</b></td><td>31,910</td><td>22,091</td><td class="good">+94%</td><td class="warn">🟡 投資利益を含む</td></tr>
<tr><td><b>希薄化後EPS（GAAP）</b></td><td><b>$1.76</b></td><td>$1.30</td><td>$0.89</td><td class="good">+98%</td><td>Non-GAAP $1.62</td></tr>
</tbody></table></div>

> 📌 **FY26通期**：売上高2,159.4億（+65%）、データセンター1,937.4億（+68%）、営業利益1,303.9億（+60%）、純利益1,200.7億（+65%）、EPS 4.90ドル（+67%）。通期の粗利率は71.1%でFY25より3.9pp低く、主因はQ1に計上したH20の在庫と購入コミットメントに関する費用45億。Q4の株式投資利益は54.9億（Intel株を含む）、GAAP実効税率は14.8%。

---

### 貸借対照表とキャッシュフローの要点（US$ 百万）

<div class="sw"><table>
<thead><tr><th>指標</th><th>2026/01/25</th><th>2025/01/26</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>現金および有価証券</b></td><td><b>62,556</b></td><td>43,210</td><td class="good">🟢 +45%</td></tr>
<tr><td><b>売掛金</b></td><td><b>38,466</b></td><td>23,065</td><td>DSO 51日</td></tr>
<tr><td><b>棚卸資産</b></td><td><b>21,403</b></td><td>10,080</td><td class="warn">🟡 1年で倍増</td></tr>
<tr><td><b>非上場株式投資</b></td><td><b>22,251</b></td><td>3,387</td><td class="warn">🟡 1年で6.6倍</td></tr>
<tr><td><b>のれん</b></td><td><b>20,832</b></td><td>5,188</td><td>買収とライセンス取引</td></tr>
<tr><td><b>株主資本</b></td><td><b>157,293</b></td><td>79,327</td><td class="good">🟢 +98%</td></tr>
<tr><td><b>FY26 営業キャッシュフロー</b></td><td><b>102,718</b></td><td>64,089</td><td class="good">🟢 初めて1,000億を突破</td></tr>
<tr><td><b>FY26 フリーキャッシュフロー</b></td><td><b>96,575</b></td><td>60,724</td><td class="good">🟢 利益率44.7%</td></tr>
<tr><td><b>Q4 フリーキャッシュフロー</b></td><td><b>34,902</b></td><td>前年 15,519</td><td class="good">🟢 前年比125%増</td></tr>
</tbody></table></div>

> 📌 **財務の質**：FY26の営業キャッシュフロー1,027億は純利益の86%で、差は主に売掛金の154億増と在庫の113億増による。供給関連のコミットメントは952億、複数年のクラウドサービス契約は270億。FY26は自社株買い401億と配当9.7億で計411億を株主に還元した。債務はわずか84.7億。

---

## 2. 🔍 5つの重要ポイントと経営陣のコメント

<div class="sb">
<h3>🎯 インサイト1：ネットワーキングが前年比263%増、NVLinkでラックの価値が上昇</h3>
<p>データセンターのコンピュート売上高は513億で前年比58%増、ネットワーキングは110億で前年比263%増。CFO Commentaryによると、ネットワーキングの成長は<b>「GB200とGB300システムで導入され拡大が続くNVLinkコンピュート・ファブリック、ならびにイーサネットとInfiniBandプラットフォームの成長」</b>による。ハイパースケーラーは引き続き最大の顧客層でデータセンター売上高の半分をやや上回るが、今期の成長は主にその他の顧客によるものだった。</p>
</div>

<div class="sb">
<h3>🎯 インサイト2：粗利率は75%に回復、H20の打撃はQ1のみ</h3>
<p>通期の粗利率71.1%はQ1のH20費用45億で押し下げられたが、Q4は75.0%に戻り、前期より1.6pp高い。CFOは要因を<b>「Blackwellの拡大継続と、製品構成およびコスト構造の改善」</b>とした。Q1 FY27の粗利率ガイダンス74.9%は株式報酬0.1ppを含んでおり、Blackwell世代の粗利率が7割5分前後で安定しうることを示す。</p>
</div>

<div class="sb">
<h3>🎯 インサイト3：在庫は1年で倍増、会社は意図的な積み増しと説明</h3>
<p>在庫は214億で前年比112%増と売上高の65%増を上回り、Q4の売上原価から推計すると在庫日数は約114日（本記事の推計）。供給関連のコミットメントは952億。会社は<b>「今後数四半期より先の需要に応えるため、在庫と生産能力を戦略的に確保した」</b>と説明した。売掛金回転日数は前期の53日から51日に下がり、回収は悪化していない。</p>
</div>

<div class="sb">
<h3>🎯 インサイト4：現金をエコシステムに投入、Q4に258億を支出</h3>
<p>Q4の投資活動では、Groqに130億（非独占ライセンス契約）を支払い、非上場株式を128億購入した一方、同四半期の自社株買いは38億にとどまった。非上場株式への投資は1年で34億から223億に増え、のれんは156億増加。今期はAnthropicへの出資と技術提携も発表した。Q4の営業外利益54.9億にはIntel株が含まれ、そのためGAAP EPS 1.76ドルはNon-GAAPの1.62ドルを上回った。</p>
</div>

<div class="sb">
<h3>🎯 インサイト5：エージェント型AIの転換点、Vera Rubinが引き継ぐ</h3>
<p>ジェンスン・フアン氏は<b>「コンピューティング需要は指数関数的に伸びており、エージェント型AIの転換点が到来した。NVLinkを組み合わせたGrace Blackwellは現在の推論の王者で、トークン当たりコストは1桁低く、Vera Rubinはその優位をさらに広げる」</b>と述べた。Rubinプラットフォームは6つの新チップで構成され、推論のトークンコストを最大で10分の1にまで下げ、AWS、Google Cloud、Azure、OCIが最初に導入する。Metaも数百万個のBlackwellとRubin GPUを対象とする複数年の提携を結んだ。</p>
</div>

---

## 3. 🛡️ 堀とQ1 FY27ガイダンスの見通し

<div class="sb">
<h3>🏰 コアの堀：GPU＋ネットワーキング＋ソフトウェアのラック一式ソリューション</h3>
<p>エヌビディアが売るのはラック全体で、GPU、Grace CPU、NVLinkとInfiniBand／イーサネット、そしてCUDA-Xソフトウェアだ。通期のネットワーキング売上高は前年の2.4倍で、顧客がチップだけでなく完全なAIファクトリーを買っていることを示す。952億の供給コミットメントで上流の生産能力も先に押さえている。</p>
</div>

### FY27 Q1の会社ガイダンス

<div class="sw"><table>
<thead><tr><th>指標</th><th>Q1 ガイダンス</th><th>比較</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>売上高</b></td><td><b>$78.0B ±2%</b></td><td>Q1 FY26 $44.1B</td><td class="good">🟢 前年比約77%増</td></tr>
<tr><td><b>前期比</b></td><td><b>約 +14.5%</b></td><td>Q4は前期比20%増</td><td>高成長を維持</td></tr>
<tr><td><b>粗利率（GAAP）</b></td><td><b>74.9% ±50bp</b></td><td>Q4 75.0%</td><td>横ばい</td></tr>
<tr><td><b>営業費用（GAAP）</b></td><td><b>約 $7.7B</b></td><td>Q4 $6.8B</td><td class="warn">🟡 前期比13%増</td></tr>
<tr><td><b>株式報酬</b></td><td><b>約 $1.9B</b></td><td>FY27から含める</td><td class="warn">🟡 Non-GAAPが厳格化</td></tr>
<tr><td><b>通期税率</b></td><td><b>17–19%</b></td><td>FY26 15.1%</td><td class="warn">🟡 税率上昇</td></tr>
<tr><td><b>中国向けコンピュート売上</b></td><td><b>織り込まず</b></td><td>輸出規制</td><td class="warn">🟡 上振れ余地</td></tr>
</tbody></table></div>

> 📌 Non-GAAP粗利率ガイダンスは75.0%、営業費用は約75億（株式報酬19億を含む）。前期比の伸び率は本記事がガイダンス中央値で計算。CFOは供給制約がQ1からゲーム事業の逆風になるとも注意を促した。

---

## 4. ⚠️ リスク

<h3 class="risk-red">🔴 高リスク（High Risk）</h3>
<div class="sb rh"><ul>
<li><b>中国向け輸出規制</b>：Q1ガイダンスは中国のデータセンター・コンピュート売上をまったく含まず、規制が他地域に広がれば影響は見積もりにくい。</li>
<li><b>在庫とコミットメント</b>：在庫は1年で倍増の214億、供給コミットメントは952億で、AI設備投資が鈍化すれば評価損に直面する。</li>
</ul></div>

<h3 class="risk-gold">🟡 中リスク（Medium Risk）</h3>
<div class="sb rm"><ul>
<li><b>顧客への投資</b>：非上場株式は34億から223億に増え、投資先の多くはAI顧客で、評価の変動がGAAP利益に影響する。</li>
<li><b>顧客集中</b>：データセンターが売上高の91%を占め、ハイパースケーラーはその半分強で、少数の顧客の設備投資が成長を左右する。</li>
<li><b>ゲームの供給制約</b>：ゲーム売上高は前期比13%減で、会社は供給制約がQ1からゲーム事業の逆風になると見込む。</li>
</ul></div>

<h3 class="risk-green">🟢 低リスク／潜在的な機会（Low Risk / Opportunity）</h3>
<div class="sb rl"><ul>
<li><b>Vera Rubinへの世代交代</b>：推論のトークンコストは最大で10分の1に下がり、4大クラウドが最初に導入し、更新需要が続く。</li>
<li><b>現金創出力</b>：FY26のフリーキャッシュフローは966億、利益率44.7%で、エコシステムへの投資と自社株買いを同時に行える。</li>
</ul></div>

---

## 5. 📊 バリュエーション

### バリュエーション指標（2026/02/26終値ベース）

<div class="sw"><table>
<thead><tr><th>指標</th><th>数値</th><th>コメント</th></tr></thead>
<tbody>
<tr><td><b>終値</b></td><td>US$184.89</td><td class="bad">🔴 決算翌日 -5.5%</td></tr>
<tr><td><b>時価総額（推計）</b></td><td>~US$4.52兆</td><td>244.3億株で計算</td></tr>
<tr><td><b>企業価値 EV（推計）</b></td><td>~US$4.48兆</td><td>ネットキャッシュ約412億</td></tr>
<tr><td><b>PER（FY26 GAAP）</b></td><td>~37.7倍</td><td>EPS 4.90</td></tr>
<tr><td><b>年換算PER（Non-GAAP）</b></td><td>~28.5倍</td><td>Q4 EPS × 4</td></tr>
<tr><td><b>EV / FY26営業利益</b></td><td>~34.3倍</td><td>営業利益1,304億</td></tr>
<tr><td><b>PSR（FY26）</b></td><td>~20.9倍</td><td>売上高2,159億</td></tr>
<tr><td><b>FCF利回り</b></td><td>~2.1%</td><td>FY26 FCF 966億</td></tr>
</tbody></table></div>

> 📌 時価総額はQ4の希薄化後加重平均株式数244.32億株で推計。EV＝時価総額－現金・債券型証券496.7億＋債務84.7億で、上場株式128.9億と非上場株式222.5億は控除していない。株価は2/25終値 $195.56（決算は引け後発表）、2/26終値 $184.89。

### 強気・弱気の論点比較

<div class="sw"><table>
<thead><tr><th>論点</th><th>強気の見方</th><th>弱気の見方</th><th>今四半期の根拠</th></tr></thead>
<tbody>
<tr><td><b>成長</b></td><td>Q1ガイダンス +77%</td><td>中国を含まない</td><td class="good">🟢 前期比20%増</td></tr>
<tr><td><b>粗利益率</b></td><td>75%に回復</td><td>通期71.1%</td><td class="good">🟢 H20は過去のもの</td></tr>
<tr><td><b>棚卸資産</b></td><td>意図的な積み増し</td><td>売上高を上回る伸び</td><td class="warn">🟡 +112%</td></tr>
<tr><td><b>資金の使い道</b></td><td>エコシステムへの投資</td><td>自社株買いが大幅減</td><td class="warn">🟡 Q4の自社株買い38億</td></tr>
<tr><td><b>新製品</b></td><td>Rubinでコストを10分の1に</td><td>世代交代期の出荷リスク</td><td class="good">🟢 4大クラウドが最初に導入</td></tr>
<tr><td><b>バリュエーション</b></td><td>年換算PER 28.5倍</td><td>時価総額4.5兆</td><td class="warn">🟡 決算後 -5.5%</td></tr>
</tbody></table></div>

> 📅 **事後検証（2026/11追記）**：Q1 FY27の実際の売上高は816億で、780億±2%のガイダンス上限を上回った。Q4 FY26のNon-GAAP EPSは新基準（株式報酬を含む）で1.59ドルに修正再表示された。2026/11/11、ジェンスン・フアン氏は社長、CEO、取締役を辞任し、コレット・クレスCFOが暫定CEOを兼任した（SEC 8-K、11/12提出）。株価は11/12終値166.19ドルで、2/26から約10%下落。なお、Q4のNon-GAAP EPSはFY27以降の決算資料で1.59ドルに修正再表示されたが、本記事のバリュエーションは当時公表の1.62ドルを使っている。

---

## 6. 📋 主な注目点

- **またも高成長の四半期**：売上高681億（+73%）、前期比20%増、FY26通期は2,159億（+65%）。
- **ネットワーキングが目玉**：ネットワーキング売上高は110億で前年比263%増、NVLinkラックで顧客当たりの購入額が増えた。
- **粗利率は安定**：Q4粗利率75.0%、通期の71.1%はQ1のH20費用で押し下げられただけ。
- **在庫と投資が拡大**：在庫は倍増、供給コミットメントは952億、Q4にGroqへ130億を支払い、非上場株式を128億購入。
- **Q1ガイダンス780億**：前年比約77%増で中国を含まず、Non-GAAPは株式報酬を含む方式に変更。

> 💡 **ひとことでまとめると**：エヌビディアはFY26でBlackwellが65%の成長と75%の粗利率を同時に実現できることを示した。ただし大量の在庫積み増し、生産能力の予約、顧客への投資を始めており、今後は売上高と貸借対照表の両方を見る必要がある。

<div class="disc">
<b>免責事項（Disclaimer）</b>：本レポートは財務データの客観的な整理と業界戦略の分析にすぎず、いかなる有価証券の購入・売却・保有を推奨するものではなく、目標株価も示さない。投資判断はご自身で行い、投資リスクはご自身で負担してください。<br><br>
<b>出典（Sources）</b>：NVIDIA FY26 Q4 Form 8-KプレスリリースとCFO Commentary（2026-02-25）；事後検証はFY27 Q1 Form 8-Kプレスリリース（2026-05-20）とForm 8-K（2026-11-12、Item 5.02）による；引用はプレスリリースのジェンスン・フアン氏の発言とCFO Commentaryによる（中国語訳は本記事による）；Yahoo Finance株価（2026-11-12まで）。
</div>
