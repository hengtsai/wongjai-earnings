---
title: "Alphabet / Google (GOOG) 2026 Q3 財報深度分析：年化營收首破 5,000 億美元、Cloud 暴增 103% 與 5,608 億積壓訂單，解析 514 億 CapEx 豪賭與 SpaceX 評價震盪"
date: 2026-11-05T00:00:00+08:00
ticker: "GOOG"
quarter: "2026 Q3"
logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128"
color: "#4285f4"
summary: "Alphabet 2026 Q3 合併營收達 US$127.58B（+24.7% YoY），年化營收正式突破 5,000 億美元里程碑；營業利益 US$40.58B（+29.9% YoY，營益率 31.8%）。Google Cloud 營收翻倍暴增 102.6% 至 US$30.71B、營業利益率飆至 36.2%，雲端積壓訂單（Backlog）高達 US$560.8B（全公司 US$567.7B）。受 SpaceX 股價回檔導致業外未實現股權投資評價損失 -US$8.66B 拖累，GAAP 稀釋 EPS 為 US$2.12（排除股權投資損失之調整後 EPS 為 US$2.67）。單季 CapEx 狂飆至 US$51.36B（+114.4% YoY），單季自由現金流轉負為 -US$9.07B，總資產首度突破 1 兆美元大關。"
tags: ["AI", "Alphabet", "Google", "GOOG", "GOOGL", "Google Cloud", "Gemini 4", "TPU", "Wiz", "SpaceX"]
author: "Wongjai ⚡"
draft: false
---

> **📌 股權結構、稀釋股數與 GAAP / Non-GAAP 獲利調節說明**：Alphabet Inc. 採三類普通股架構（NASDAQ: **GOOGL** 為具表決權之 Class A 普通股、無公開交易之 Class B 超級表決權股、以及 **GOOG** 無表決權之 Class C 資本股），並於 2026 年 6 月新發行 6.25% 強制可轉換特別股（Series A 與 Series B Mandatory Convertible Preferred Stock，帳面價值 US$18,023 百萬）。本報告所有財務數據均採用 Alphabet 官方公布之 SEC Form 10-Q 與 Q3 2026 財報新聞稿（US$ 百萬，截至 2026 年 9 月 30 日）。
>
> - **Q3 2026 GAAP 稀釋 EPS**：**US$2.12**（官方財報數據，歸屬普通股股東稅後純益 US$26,170 百萬，YoY -26.1%）
> - **Q3 2026 調整後 EPS（Ex-Equity Losses / Non-GAAP）**：**US$2.67**（排除本季業外股權證券未實現評價淨損 US$8,664 百萬、稅後淨影響 -US$6,700 百萬或每股 **-US$0.55** 後之核心每股盈餘）
> - **流通股數自洽驗證**：Q3 歸屬普通股股東稅後純益 US$26,170 百萬 ÷ GAAP 稀釋 EPS US$2.12 = **12,344.3 百萬股（約 123.44 億股稀釋流通股數）**；基本 EPS US$2.14 對應加權平均基本流通股數約 **12,229.0 百萬股**。加計 Q3 新執行之 ATM（At-the-Market）普通股增資計畫（發行 1,200 萬股 Class A 與 2,400 萬股 Class C，合計 3,600 萬股、淨募資 US$12,371 百萬）及限制型股票（RSU）歸屬後，股本結構與資產負債表完全自洽。

<div class="kpi-grid">
<div class="kpi-card"><div class="label">Q3 合併營收</div><div class="value">$1,275.8億</div><div class="change up">▲ 24.7% YoY｜年化破5千億</div></div>
<div class="kpi-card"><div class="label">Q3 營業利益</div><div class="value">$405.8億</div><div class="change up">▲ 29.9% YoY｜營益率 31.8%</div></div>
<div class="kpi-card"><div class="label">GAAP / 調整後 EPS</div><div class="value">$2.12 / $2.67</div><div class="change wn">業外股權評價 -$0.55/股</div></div>
<div class="kpi-card"><div class="label">Google Cloud 營收</div><div class="value">$307.1億</div><div class="change up">▲ 102.6% YoY｜翻倍爆發</div></div>
<div class="kpi-card"><div class="label">Cloud 營業利益率</div><div class="value">36.2%</div><div class="change up">▲ 12.5pp YoY｜營益 $111.2億</div></div>
<div class="kpi-card"><div class="label">Cloud 積壓訂單</div><div class="value">$5,608億</div><div class="change up">▲ $469億 QoQ｜全公司 $5,677億</div></div>
<div class="kpi-card"><div class="label">Q3 資本支出 (CapEx)</div><div class="value">$513.6億</div><div class="change dn">▲ 114.4% YoY｜全年 $195-205B</div></div>
<div class="kpi-card"><div class="label">單季自由現金流</div><div class="value">-$90.7億</div><div class="change dn">連兩季轉負｜TTM $197.5億</div></div>
</div>

## 1. 📈 核心數據速覽

### Q3 2026 合併損益表深度拆解（US$ 百萬，官方 Form 10-Q 未經審計數據）

Alphabet 於 2026 年 10 月 28 日公布 2026 年第三季（截至 2026 年 9 月 30 日）財務報告。受惠於 Google Cloud 企業級 AI 基礎設施、Gemini 4 前沿模型解決方案及首度大規模對外銷售 TPU 算力系統的強勁推升，第三季合併營收達到 **US$127,577 百萬（約 1,275.8 億美元）**，年增 **24.7%**（固定匯率下年增 25%），正式帶領 Alphabet 跨越**年化營收 5,000 億美元（Half-Trillion Dollar Run Rate）**的歷史性里程碑。本業營業利益同步攀升至 **US$40,576 百萬（+29.9% YoY）**，營業利益率擴大 1.3 個百分點至 **31.8%**。然而，受到已於 2026 年 6 月上市之 SpaceX（NASDAQ: SPCX）第三季股價回檔約 11% 影響，Alphabet 帳上認列高達 **-US$8,664 百萬**的股權證券評價淨損失，導致業外淨收支（OI&E）出現 **-US$8,221 百萬**虧損，使表面 GAAP 稅後淨利與稀釋 EPS（US$2.12）出現「本業創高、業外失真」的劇烈背離。

<div class="sw"><table>
<thead><tr><th>損益表核心指標 (US$M)</th><th>Q3 '26</th><th>Q2 '26</th><th>QoQ 變化</th><th>Q3 '25</th><th>YoY 變化</th><th>官方數據 / 市場預期對比與分析師點評</th></tr></thead>
<tbody>
<tr><td><b>合併總營收 (Revenues)</b></td><td>127,577</td><td>119,796</td><td class="good">+6.5%</td><td>102,346</td><td class="good">+24.7%</td><td class="good">🟢 單季歷史新高，年化破 $5,000 億（微幅低於市場極高共識 $127.97B–$128.22B 約 0.3%–0.5%）</td></tr>
<tr><td><b>營收成本 (Cost of Revenues)</b></td><td>51,419</td><td>45,943</td><td class="warn">+11.9%</td><td>41,369</td><td class="warn">+24.3%</td><td class="warn">🟡 含流量獲取成本 TAC $16,366M，以及資料中心折舊（$8,369M）與外部 TPU 系統硬體銷貨成本</td></tr>
<tr><td><b>其中：流量獲取成本 (TAC)</b></td><td>16,366</td><td>16,179</td><td class="good">+1.2%</td><td>14,876</td><td class="warn">+10.0%</td><td class="good">🟢 TAC 佔廣告營收比由去年同期 20.1% 降至 19.96%，自有生態系導流效率持續改善</td></tr>
<tr><td><b>營業毛利 (Gross Profit)</b></td><td>76,158</td><td>73,853</td><td class="good">+3.1%</td><td>60,977</td><td class="good">+24.9%</td><td class="good">🟢 單季毛利突破 761 億美元，完整吸收龐大 AI 伺服器折舊壓力</td></tr>
<tr><td><b>毛利率 (Gross Margin)</b></td><td>59.7%</td><td>61.6%</td><td class="warn">-1.9pp</td><td>59.6%</td><td class="good">+0.1pp</td><td class="warn">🟡 較 Q2 回落主因外部 TPU 硬體系統銷售放量與 Q3 末開始租用第三方算力</td></tr>
<tr><td><b>研發費用 (R&D)</b></td><td>20,640</td><td>18,219</td><td class="warn">+13.3%</td><td>15,151</td><td class="warn">+36.2%</td><td class="warn">🟡 佔營收 16.2%，全力投入 Gemini 4 (Argon/Carbon) 與第 8 代 TPU (8T/8I) 研發</td></tr>
<tr><td><b>行銷及銷售費用 (S&M)</b></td><td>8,804</td><td>8,403</td><td class="warn">+4.8%</td><td>7,205</td><td class="warn">+22.2%</td><td class="good">🟢 佔營收 6.9%（低於去年同期 7.0%），支援 Cloud 企業銷售團隊與 Pixel 推廣</td></tr>
<tr><td><b>總務及行政費用 (G&A)</b></td><td>6,138</td><td>6,461</td><td class="good">-5.0%</td><td>7,393</td><td class="good">-17.0%</td><td class="good">🟢 佔營收僅 4.8%（YoY 大降 2.4pp），展現極強的後勤行政費用控管紀律</td></tr>
<tr><td><b>總營業成本與費用合計</b></td><td>87,001</td><td>79,026</td><td class="warn">+10.1%</td><td>71,118</td><td class="warn">+22.3%</td><td class="good">🟢 總成本與費用增速（+22.3% YoY）低於營收增速（+24.7% YoY），創造正向營運槓桿</td></tr>
<tr><td><b>營業利益 (Operating Income)</b></td><td>40,576</td><td>40,770</td><td class="warn">-0.5%</td><td>31,228</td><td class="good">+29.9%</td><td class="good">🟢 本業獲利年增近 30%，連續兩季站穩 400 億美元以上</td></tr>
<tr><td><b>營業利益率 (Op Margin)</b></td><td>31.8%</td><td>34.0%</td><td class="warn">-2.2pp</td><td>30.5%</td><td class="good">+1.3pp</td><td class="good">🟢 較去年同期顯著擴張 1.3pp；QoQ 回落係反映 Wiz 併購整合、SBC 與折舊增加</td></tr>
<tr><td><b>業外淨收支 (OI&E, Net)</b></td><td>(8,221)</td><td>97,983</td><td class="bad">轉虧</td><td>12,759</td><td class="bad">轉虧</td><td class="bad">🔴 認列股權證券淨損 -$8,664M（主因 SpaceX Q3 股價回檔 11% 產生 -$12,436M 未實現損失）</td></tr>
<tr><td><b>稅前淨利 (Income before Taxes)</b></td><td>32,355</td><td>138,753</td><td class="bad">-76.7%</td><td>43,987</td><td class="bad">-26.4%</td><td class="warn">🟡 較去年同期減少 $11,632M，但與業外波動金額（-$20,980M）對照，本業稅前實質大增</td></tr>
<tr><td><b>所得稅費用 (Tax Provision)</b></td><td>5,887</td><td>26,560</td><td class="good">-77.8%</td><td>9,008</td><td class="good">-34.6%</td><td class="good">🟢 有效稅率 18.2%（較去年同期 20.5% 下降 2.3pp，含股權投資損失之 $1.9B 遞延所得稅利益）</td></tr>
<tr><td><b>合併稅後淨利 (Net Income)</b></td><td>26,468</td><td>112,193</td><td class="bad">-76.4%</td><td>34,979</td><td class="bad">-24.3%</td><td class="warn">🟡 未扣除特別股股利前之 GAAP 合併總純益</td></tr>
<tr><td><b>特別股股利 (Preferred Div.)</b></td><td>298</td><td>86</td><td class="warn">+246.5%</td><td>0</td><td class="warn">新增</td><td class="warn">🟡 2026 年 6 月發行之 Series A/B 強制可轉換特別股（年息 6.25%）首個完整季度計息</td></tr>
<tr><td><b>歸屬普通股股東純益</b></td><td><b>26,170</b></td><td><b>112,107</b></td><td class="bad"><b>-76.7%</b></td><td><b>34,979</b></td><td class="bad"><b>-25.2%</b></td><td class="warn">🟡 計算普通股基本與稀釋 EPS 之分子基準（受業外稅後 -$6.7B 股權評價損失直接壓抑）</td></tr>
<tr><td><b>稅後淨利率 (Net Margin)</b></td><td>20.5%</td><td>93.6%</td><td class="bad">-73.1pp</td><td>34.2%</td><td class="bad">-13.7pp</td><td class="warn">🟡 表面淨利率受業外干擾；若還原稅後股權損失 $6.7B，調整後淨利率為 25.8%</td></tr>
<tr><td><b>GAAP 基本 EPS (Basic)</b></td><td>$2.14</td><td>$9.20</td><td class="bad">-76.7%</td><td>$2.89</td><td class="bad">-26.0%</td><td class="warn">🟡 對應加權平均基本流通股數約 12,229M 股</td></tr>
<tr><td><b>GAAP 稀釋 EPS (Diluted)</b></td><td><b>$2.12</b></td><td><b>$9.11</b></td><td class="bad"><b>-76.7%</b></td><td><b>$2.87</b></td><td class="bad"><b>-26.1%</b></td><td class="bad">🔴 含每股 -$0.55 股權評價損失；對應加權平均稀釋股數約 12,344M 股</td></tr>
<tr><td><b>調整後稀釋 EPS (Ex-Equity Loss)</b></td><td><b>$2.67</b></td><td><b>$2.85</b></td><td class="warn"><b>-6.3%</b></td><td><b>~$2.18</b></td><td class="good"><b>+22.5%</b></td><td class="warn">🟡 還原每股 -$0.55 股權評價損失後為 $2.67（仍低於華爾街共識 $2.96–$3.02，主因未預期之第三方算力成本與匯損）</td></tr>
</tbody></table></div>

> **📌 前三季累計表現（9M 2026，截至 2026 年 9 月 30 日）**：2026 年前三季 Alphabet 累計合併營收達 **US$357,269 百萬（約 3,572.7 億美元，YoY +23.6%）**；累計營業利益達 **US$121,042 百萬（約 1,210.4 億美元，YoY +30.0%，累計營益率 33.9%）**。受惠於上半年 SpaceX 首次公開募股（IPO）帶動之巨額按市值計價（Mark-to-Market）未實現收益，前三季累計業外淨收益高達 **US$127,478 百萬**，推升前三季累計歸屬普通股股東純益達 **US$200,855 百萬（YoY +105.6%）**，**前三季累計 GAAP 稀釋 EPS 高達 US$16.33**（去年同期為 US$7.99）。

---

### 分部門營收與營業利益深度拆解：Cloud 翻倍暴增 103%、營益率飆上 36.2%

#### （1）各事業部門營收表現（Segment Revenues，US$ 百萬）

<div class="sw"><table>
<thead><tr><th>事業部門與細項 (US$M)</th><th>Q3 '26</th><th>Q2 '26</th><th>QoQ 變化</th><th>Q3 '25</th><th>YoY 變化</th><th>營收佔比</th><th>核心業務動能與貨幣化解析</th></tr></thead>
<tbody>
<tr><td><b>Google Search & other</b></td><td>63,350</td><td>63,271</td><td class="good">+0.1%</td><td>56,567</td><td class="good">+12.0%</td><td>49.7%</td><td class="good">🟢 搜尋查詢量（Query Growth）創近 5 年最高增速！零售與金融垂直領域領漲，惟受匯率與 AI Mode 初期變現率較低影響，增速由 Q2 的 16.8% 放緩至 12.0%</td></tr>
<tr><td><b>YouTube ads</b></td><td>11,207</td><td>11,055</td><td class="good">+1.4%</td><td>10,261</td><td class="good">+9.2%</td><td>8.8%</td><td class="good">🟢 品牌廣告與客廳連網電視（Living Room/CTV）觀看時數強勁成長；YouTube Music & Premium 全球付費訂閱數突破 1.5 億人</td></tr>
<tr><td><b>Google Network</b></td><td>7,455</td><td>7,303</td><td class="good">+2.1%</td><td>7,354</td><td class="good">+1.4%</td><td>5.8%</td><td class="warn">🟡 擺脫連季衰退重回正成長（+1.4% YoY），AdMob 與 AdSense 表現回穩</td></tr>
<tr><td><i>— 廣告業務合計 (Total Ads)</i></td><td><i>82,012</i></td><td><i>81,629</i></td><td class="good"><i>+0.5%</i></td><td><i>74,182</i></td><td class="good"><i>+10.6%</i></td><td><i>64.3%</i></td><td class="good">🟢 廣告印鈔機單季穩定貢獻逾 820 億美元營收</td></tr>
<tr><td><b>Subscriptions, platforms & devices</b></td><td>14,290</td><td>12,911</td><td class="good">+10.7%</td><td>12,870</td><td class="good">+11.0%</td><td>11.2%</td><td class="good">🟢 YouTube TV、NFL Sunday Ticket、YouTube Premium 及 Google One AI 訂閱方案強勁增長</td></tr>
<tr><td><b>Google Services 總計</b></td><td><b>96,302</b></td><td><b>94,540</b></td><td class="good"><b>+1.9%</b></td><td><b>87,052</b></td><td class="good"><b>+10.6%</b></td><td><b>75.5%</b></td><td class="good">🟢 核心服務年化營收近 3,850 億美元，提供最穩固的現金流基石</td></tr>
<tr><td><b>Google Cloud</b></td><td><b>30,709</b></td><td><b>24,768</b></td><td class="good"><b>+24.0%</b></td><td><b>15,157</b></td><td class="good"><b>+102.6%</b></td><td><b>24.1%</b></td><td class="good">🟢 <b>史詩級爆發！年增 102.6% 翻倍成長</b>，佔全公司營收比重由去年 14.8% 躍升至 24.1%，年化 Run Rate 突破 $1,228 億</td></tr>
<tr><td><b>Other Bets (創新事業)</b></td><td>372</td><td>382</td><td class="warn">-2.6%</td><td>344</td><td class="good">+8.1%</td><td>0.3%</td><td class="good">🟢 Waymo 全無人自駕計程車擴展至全美 15 座主要城市，每週付費載客量突破 50 萬趟</td></tr>
<tr><td><b>避險損益 (Hedging gains/losses)</b></td><td>194</td><td>106</td><td class="good">+83.0%</td><td>(207)</td><td class="good">轉正</td><td>0.1%</td><td class="good">🟢 外匯避險合約產生 $194M 正向貢獻</td></tr>
<tr><td><b>合併總營收合計</b></td><td><b>127,577</b></td><td><b>119,796</b></td><td class="good"><b>+6.5%</b></td><td><b>102,346</b></td><td class="good"><b>+24.7%</b></td><td><b>100.0%</b></td><td class="good">🟢 Cloud 單季新增營收（+$15.55B YoY）已超過 Google Services 新增營收（+$9.25B YoY），正式成為第一成長引擎</td></tr>
</tbody></table></div>

#### （2）各事業部門營業利益與利潤率拆解（Segment Operating Income，US$ 百萬）

<div class="sw"><table>
<thead><tr><th>部門別營業利益 (US$M)</th><th>Q3 '26</th><th>Q2 '26</th><th>QoQ 變化</th><th>Q3 '25</th><th>YoY 變化</th><th>Q3 '26 部門營益率</th><th>Q3 '25 部門營益率</th><th>獲利結構與營運槓桿解析</th></tr></thead>
<tbody>
<tr><td><b>Google Services</b></td><td>39,157</td><td>39,544</td><td class="warn">-1.0%</td><td>33,527</td><td class="good">+16.8%</td><td><b>40.7%</b></td><td>38.5%</td><td class="good">🟢 營益率年增 2.2pp 站穩 40% 以上，搜尋與 YouTube 規模優勢極致發揮</td></tr>
<tr><td><b>Google Cloud</b></td><td><b>11,121</b></td><td><b>8,814</b></td><td class="good"><b>+26.2%</b></td><td><b>3,594</b></td><td class="good"><b>+209.4%</b></td><td><b>36.2%</b></td><td>23.7%</td><td class="good">🟢 <b>單季營業利益首破 111 億美元（YoY 翻 3.1 倍）</b>，營益率狂飆 12.5pp 至 36.2%（已逼近 AWS 水準），並完成併入 Wiz 雲端資安業務</td></tr>
<tr><td><b>Other Bets</b></td><td>(2,047)</td><td>(1,799)</td><td class="warn">虧損擴大</td><td>(1,426)</td><td class="warn">+43.5%</td><td>-550.3%</td><td>-414.5%</td><td class="warn">🟡 反映 Waymo 擴大 15 城車隊部署與基礎設施投入</td></tr>
<tr><td><b>Alphabet 總部與共用 AI 研發</b></td><td>(7,655)</td><td>(5,789)</td><td class="warn">+32.2%</td><td>(4,467)</td><td class="warn">+71.4%</td><td>—</td><td>—</td><td class="warn">🟡 集中認列 Google DeepMind 前沿模型研發與企業級共用成本</td></tr>
<tr><td><b>合併營業利益總計</b></td><td><b>40,576</b></td><td><b>40,770</b></td><td class="warn"><b>-0.5%</b></td><td><b>31,228</b></td><td class="good"><b>+29.9%</b></td><td><b>31.8%</b></td><td><b>30.5%</b></td><td class="good">🟢 Cloud 營業利益佔全公司營業利益比重已由去年 11.5% 暴增至 <b>27.4%</b></td></tr>
</tbody></table></div>

#### （3）客戶地區別營收結構與匯率影響（Geographic Mix，US$ 百萬）

<div class="sw"><table>
<thead><tr><th>地區別</th><th>Q3 '26 (US$M)</th><th>Q3 '26 佔比</th><th>Q3 '25 (US$M)</th><th>Q3 '25 佔比</th><th>帳面 YoY</th><th>固定匯率 YoY</th><th>區域成長動能與匯率影響解析</th></tr></thead>
<tbody>
<tr><td><b>美國 (United States)</b></td><td>67,681</td><td>53%</td><td>48,758</td><td>48%</td><td class="good">+38.8% (~39%)</td><td class="good">+39%</td><td class="good">🟢 佔比突破過半達 53%（YoY +5pp），反映北美 AI 實驗室、大型企業對 Cloud 及外部 TPU 系統的爆發性採購</td></tr>
<tr><td><b>歐洲、中東及非洲 (EMEA)</b></td><td>32,695</td><td>26%</td><td>29,911</td><td>29%</td><td class="good">+9.3% (~9%)</td><td class="good">+10%</td><td class="warn">🟡 匯率逆風侵蝕 -$336M；歐盟取消小額包裹免稅（de minimis）影響亞太跨境電商在歐廣告投放</td></tr>
<tr><td><b>亞太地區 (APAC)</b></td><td>19,906</td><td>16%</td><td>17,819</td><td>17%</td><td class="good">+11.7% (~12%)</td><td class="good">+15%</td><td class="warn">🟡 匯率逆風高達 -$517M（帳面 +12% vs 固定匯率 +15%），為本季搜尋廣告承受最大匯損之區域</td></tr>
<tr><td><b>其他美洲 (Other Americas)</b></td><td>7,101</td><td>5%</td><td>6,065</td><td>6%</td><td class="good">+17.1% (~17%)</td><td class="good">+15%</td><td class="good">🟢 加拿大與拉丁美洲雲端與廣告業務穩健成長（匯率順風 +$151M）</td></tr>
<tr><td><b>避險損益 (Hedging)</b></td><td>194</td><td>0%</td><td>(207)</td><td>0%</td><td>—</td><td>—</td><td>🟢 外匯避險部分抵銷海外營收匯損（全公司總匯率逆風為 -$702M）</td></tr>
</tbody></table></div>

---

### 資產負債表深度拆解：總資產首度突破 1 兆美元大關（US$ 百萬，截至 2026 年 9 月 30 日）

2026 年第三季末，Alphabet 的資產負債表迎來歷史性轉變：**總資產正式突破 1 兆美元大關，達到 US$1,003,312 百萬（約 1.0033 兆美元，較 2025 年底暴增 68.5%）**。這項擴張由三大核心資產驅動：① **不動產、廠房及設備淨額（PP&E）躍升至 US$372,827 百萬**（較 2025 年底大增 51.2%）；② **現金及有價證券合計高達 US$265,098 百萬**（含 SpaceX 上市後轉列公開交易之有價證券部位）加上非上市股權投資（Non-marketable securities，含 Anthropic 等）**US$135,230 百萬**，合計金融投資與現金儲備突破 4,000 億美元；③ **商譽（Goodwill）增至 US$58,117 百萬**（主要反映 2026 年 3 月以 295 億美元完成收購雲端資安龍頭 **Wiz** 及以 59 億美元收購潔淨能源開發商 **Intersect**）。

<div class="sw"><table>
<thead><tr><th>資產負債表核心項目 (US$M)</th><th>Q3 '26 (9/30)</th><th>Q2 '26 (6/30)</th><th>QoQ 變化</th><th>FY25 末 (12/31)</th><th>YTD 變化</th><th>財務健康度、併購與資本結構解析</th></tr></thead>
<tbody>
<tr><td><b>現金及約當現金</b></td><td>56,334</td><td>55,911</td><td class="good">+0.8%</td><td>30,708</td><td class="good">+83.5%</td><td class="good">🟢 帳上純現金維持在 563 億美元高水位，確保日常營運與資本支出調度無虞</td></tr>
<tr><td><b>有價證券投資 (Marketable Sec.)</b></td><td>208,764</td><td>186,563</td><td class="good">+11.9%</td><td>96,135</td><td class="good">+117.2%</td><td class="good">🟢 含短期債券與已上市股權（如 2026/06 IPO 之 SpaceX 持股轉列流動有價證券）</td></tr>
<tr><td><b>現金及有價證券合計</b></td><td><b>265,098</b></td><td><b>242,474</b></td><td class="good"><b>+9.3%</b></td><td><b>126,843</b></td><td class="good"><b>+109.0%</b></td><td class="good">🟢 <b>高達 2,651 億美元</b>，為全球科技業最龐大的廣義流動性資產池之一</td></tr>
<tr><td><b>應收帳款淨額 (AR, Net)</b></td><td>72,784</td><td>69,175</td><td class="good">+5.2%</td><td>62,886</td><td class="warn">+15.7%</td><td class="good">🟢 QoQ 增速（+5.2%）低於營收增速（+6.5%），DSO 維持約 51 天健康水準</td></tr>
<tr><td><b>存貨 (Inventory)</b></td><td><b>13,308</b></td><td><b>9,991</b></td><td class="warn"><b>+33.2%</b></td><td><b>2,439</b></td><td class="bad"><b>+445.6%</b></td><td class="warn">🟡 <b>較去年底暴增 4.5 倍！</b>CFO 證實係為履行外部客戶已簽約之 TPU 算力系統訂單而提前採購備料</td></tr>
<tr><td><b>流動資產合計 (Total CA)</b></td><td>374,665</td><td>343,524</td><td class="good">+9.1%</td><td>206,038</td><td class="good">+81.8%</td><td class="good">🟢 流動資產達 3,747 億美元，淨營運資金（Working Capital）高達 $240,164M</td></tr>
<tr><td><b>非上市股權證券 (Non-marketable)</b></td><td>135,230</td><td>131,461</td><td class="good">+2.9%</td><td>68,687</td><td class="good">+96.9%</td><td class="good">🟢 含 Anthropic 等未上市 AI 獨角獸股權投資，Q3 貢獻 +$3,027M 未實現評價利益</td></tr>
<tr><td><b>不動產、廠房及設備淨額 (PP&E)</b></td><td><b>372,827</b></td><td><b>321,212</b></td><td class="warn"><b>+16.1%</b></td><td><b>246,597</b></td><td class="warn"><b>+51.2%</b></td><td class="warn">🟡 單季淨增逾 516 億美元！反映全球 AI 資料中心、TPU 叢集與網路基建極速擴張</td></tr>
<tr><td><b>商譽與無形資產淨額</b></td><td>66,934</td><td>66,933</td><td>0.0%</td><td>34,663</td><td class="warn">+93.1%</td><td class="good">🟢 商譽 $58,117M + 無形資產 $8,817M（主要來自 2026/03 完成收購 Wiz $29.5B 與 Intersect $5.9B）</td></tr>
<tr><td><b>總資產 (Total Assets)</b></td><td><b>1,003,312</b></td><td><b>921,983</b></td><td class="good"><b>+8.8%</b></td><td><b>595,281</b></td><td class="good"><b>+68.5%</b></td><td class="good">🟢 <b>歷史里程碑：總資產正式突破 1 兆美元大關（US$1.0033 Trillion）</b></td></tr>
<tr><td><b>應付帳款 (Accounts Payable)</b></td><td>21,975</td><td>20,258</td><td class="warn">+8.5%</td><td>12,200</td><td class="warn">+80.1%</td><td class="warn">🟡 隨伺服器硬體、TPU 零組件與資料中心設備採購規模擴大而同步攀升</td></tr>
<tr><td><b>應計費用及其他流動負債</b></td><td>74,317</td><td>73,014</td><td class="warn">+1.8%</td><td>55,557</td><td class="warn">+33.8%</td><td class="warn">🟡 含歐盟與美國法規撥備及未付資本支出工程款</td></tr>
<tr><td><b>遞延收入 (Deferred Revenue, ST)</b></td><td>9,429</td><td>7,154</td><td class="good">+31.8%</td><td>6,578</td><td class="good">+43.3%</td><td class="good">🟢 短期遞延收入單季暴增 31.8%，印證 Google Cloud 企業預付合約強勁湧入</td></tr>
<tr><td><b>流動負債合計 (Total CL)</b></td><td>134,501</td><td>126,111</td><td class="warn">+6.7%</td><td>102,745</td><td class="warn">+30.9%</td><td class="good">🟢 流動比率高達 2.79x、速動比率達 2.51x，短期償債能力極度優異</td></tr>
<tr><td><b>長期負債 (Long-Term Debt)</b></td><td><b>125,102</b></td><td><b>98,165</b></td><td class="bad"><b>+27.4%</b></td><td><b>46,547</b></td><td class="bad"><b>+168.8%</b></td><td class="bad">🔴 <b>9 個月內長債暴增 1.69 倍（+$78.6B）！</b>Q3 單季再淨發債逾 $25B 以支應 AI 基建與併購</td></tr>
<tr><td><b>遞延所得稅負債 (非流動)</b></td><td>27,833</td><td>22,819</td><td class="warn">+22.0%</td><td>919</td><td class="bad">+2928.6%</td><td class="warn">🟡 主要來自股權投資（SpaceX/Anthropic 等）龐大未實現評價利益所提列之遞延稅負</td></tr>
<tr><td><b>總負債 (Total Liabilities)</b></td><td>325,763</td><td>281,503</td><td class="warn">+15.7%</td><td>180,016</td><td class="warn">+81.0%</td><td class="warn">🟡 總負債率由去年底 30.2% 微升至 32.5%，長期有息負債佔總資產比為 12.5%</td></tr>
<tr><td><b>強制可轉換特別股 (Preferred Stock)</b></td><td>18,023</td><td>18,023</td><td>0.0%</td><td>0</td><td class="warn">新增</td><td class="warn">🟡 2026 年 6 月發行之 6.25% Series A/B 強制可轉換特別股（扣除買權成本後淨額）</td></tr>
<tr><td><b>股東權益合計 (Total Equity)</b></td><td><b>677,549</b></td><td><b>640,480</b></td><td class="good"><b>+5.8%</b></td><td><b>415,265</b></td><td class="good"><b>+63.2%</b></td><td class="good">🟢 扣除特別股後普通股股東權益為 $659,526M，<b>每股淨值（BVPS）達 US$53.43</b></td></tr>
</tbody></table></div>

---

### 現金流量與資本配置深度拆解：CapEx 破 513 億、停止庫藏股並啟動外部籌資（US$ 百萬）

第三季現金流量表揭示了 Alphabet 為搶佔全球 AI 算力霸權所做出的極端資本配置轉向：儘管單季營業活動現金流（OCF）高達 **US$42,290 百萬**，但單季資本支出（CapEx）狂飆至史無前例的 **US$51,355 百萬（YoY +114.4%）**，導致單季自由現金流（FCF）連續第二季轉為負值，達 **-US$9,065 百萬**（Q2 2026 為 -US$5,855 百萬），過去四季累計（TTM）FCF 由去年同期的 US$73,552 百萬銳減 73.2% 至 **US$19,747 百萬**。為保留現金全力投入 AI 基建並完成 Wiz 與 Intersect 併購，Alphabet 在 2026 年前三季將**股票回購（Share Repurchases）降至 US$0（完全暫停買回庫藏股）**，並透過發債（9M 淨舉債 US$76,343 百萬）、ATM 普通股增資（9M 募資 US$42,870 百萬）及發行強制可轉換特別股（募資 US$19,063 百萬）大舉充實銀彈。

<div class="sw"><table>
<thead><tr><th>現金流量與資本配置指標 (US$M)</th><th>Q3 '26</th><th>Q2 '26</th><th>QoQ 變化</th><th>Q3 '25</th><th>YoY 變化</th><th>9M '26 累計</th><th>9M '25 累計</th><th>現金流品質與融資戰略解析</th></tr></thead>
<tbody>
<tr><td><b>營業活動現金流 (OCF)</b></td><td><b>42,290</b></td><td><b>39,069</b></td><td class="good"><b>+8.2%</b></td><td><b>48,414</b></td><td class="warn"><b>-12.6%</b></td><td><b>127,149</b></td><td><b>112,311</b></td><td class="warn">🟡 9M OCF 年增 13.2%；Q3 OCF 較去年同期下滑主因提前備貨外部 TPU 系統存貨（-$3,220M）與預付其他資產（-$7,807M）佔用營運資金</td></tr>
<tr><td><b>其中：不動產及設備折舊 (D&A)</b></td><td>8,369</td><td>7,215</td><td class="warn">+16.0%</td><td>5,611</td><td class="warn">+49.2%</td><td>21,955</td><td>15,096</td><td class="warn">🟡 AI 伺服器與資料中心折舊進入陡峭上升期（YoY +49.2%），年化折舊已逾 $335 億</td></tr>
<tr><td><b>其中：員工股權獎勵費用 (SBC)</b></td><td>8,630</td><td>7,637</td><td class="warn">+13.0%</td><td>6,368</td><td class="warn">+35.5%</td><td>23,338</td><td>17,882</td><td class="warn">🟡 佔 Q3 營收 6.8%，反映頂級 AI 研究員爭奪戰與併入 Wiz 團隊之股權激勵成本</td></tr>
<tr><td><b>其中：存貨變動現金流出</b></td><td>(3,220)</td><td>(4,512)</td><td class="good">流出收斂</td><td>(526)</td><td class="bad">+512.2%</td><td>(10,959)</td><td>(1,154)</td><td class="warn">🟡 前三季因採購外部銷售用 TPU 系統組件，累計消耗高達 $109.6 億營運資金</td></tr>
<tr><td><b>資本支出 (CapEx)</b></td><td><b>(51,355)</b></td><td><b>(44,924)</b></td><td class="bad"><b>+14.3%</b></td><td><b>(23,953)</b></td><td class="bad"><b>+114.4%</b></td><td><b>(131,953)</b></td><td><b>(63,596)</b></td><td class="bad">🔴 <b>單季突破 513.6 億美元（年化逾 2,050 億）！</b>約 2/3 投向伺服器與網路設備，1/3 投向資料中心廠房</td></tr>
<tr><td><b>自由現金流 (Non-GAAP FCF)</b></td><td><b>(9,065)</b></td><td><b>(5,855)</b></td><td class="bad"><b>赤字擴大</b></td><td><b>24,461</b></td><td class="bad"><b>轉負</b></td><td><b>(4,804)</b></td><td><b>48,715</b></td><td class="bad">🔴 <b>連續第二季單季 FCF 為負（-$9.07B）</b>，前三季累計 FCF 亦轉為 -$4.80B</td></tr>
<tr><td><b>TTM 自由現金流 (過去四季合計)</b></td><td><b>19,747</b></td><td><b>53,273</b></td><td class="bad"><b>-62.9%</b></td><td><b>73,552</b></td><td class="bad"><b>-73.2%</b></td><td>—</td><td>—</td><td class="bad">🔴 TTM OCF 高達 $179.55B，但被 TTM CapEx $159.80B 吞噬近 89%（Q4'25 $24.55B + Q1'26 $10.12B - Q2'26 $5.86B - Q3'26 $9.07B）</td></tr>
<tr><td><b>股票回購支出 (Share Repurchases)</b></td><td><b>0</b></td><td><b>0</b></td><td><b>持平</b></td><td><b>(11,504)</b></td><td class="bad"><b>-100.0%</b></td><td><b>0</b></td><td><b>(39,810)</b></td><td class="warn">🟡 2026 前三季全面暫停庫藏股買回，將每一分現金優先配置於高 ROIC 之 AI 算力基建</td></tr>
<tr><td><b>普通股與特別股現金股利支付</b></td><td>(2,936)</td><td>(2,615)</td><td class="warn">+12.3%</td><td>(2,537)</td><td class="warn">+15.7%</td><td>(8,167)</td><td>(7,513)</td><td class="good">🟢 普通股維持每季配息 $0.22/股，外加支付 Series A/B 特別股股利 $234M</td></tr>
<tr><td><b>發行長期債務淨流入 (Net Debt Iss.)</b></td><td>25,370</td><td>43,250</td><td class="warn">-41.3%</td><td>(1,072)</td><td class="good">轉淨流入</td><td>76,343</td><td>11,908</td><td class="warn">🟡 Q3 發債募資 $28,996M、償還 $3,626M；9M 累計淨發債高達 $763.4 億美元</td></tr>
<tr><td><b>ATM 普通股與特別股發行淨流入</b></td><td>12,371</td><td>31,500</td><td class="warn">-60.7%</td><td>0</td><td class="warn">新增</td><td>61,933</td><td>0</td><td class="warn">🟡 Q3 透過 ATM 增發 3,600 萬股普通股募得 $123.7 億；9M 股權融資合計達 $619.3 億</td></tr>
</tbody></table></div>

---

## 2. 🔍 隱藏的魔鬼細節與 12 項財務交叉驗證

### Layer 2：12 項強制財務交叉驗證（Cross-Validation Matrix）

我們依據機構級財報審計標準，對 Alphabet Q3 2026 財報進行 12 項嚴格的跨報表邏輯與品質查核：

1. **營收 vs. 應收帳款（Rev vs. AR — 是否存在塞貨？）**：Q3 合併營收季增 **+6.5%**（YoY +24.7%），而應收帳款淨額僅季增 **+5.2%**（由 US$69,175M 升至 US$72,784M），YTD 增幅亦僅 **+15.7%**，遠低於營收增速。應收帳款週轉天數（DSO）穩定維持在 **51.3 天**（與 Q2 的 51.9 天及去年同期的 50.8 天一致），且短期遞延收入（客戶預付款）單季逆勢暴增 **+31.8%** 至 US$9,429M，證明客戶付款極為強勁，完全無塞貨或放寬信用條件之虞。
2. **營收 vs. 存貨（Rev vs. Inv — 存貨暴增 446% 是需求放緩還是戰略備料？）**：表面上看，帳上存貨由 2025 年底的 US$2,439M 暴增 **+445.6%** 至 Q3 末的 **US$13,308M**（單季再增 +33.2%），極易引發硬體滯銷誤判。但交叉比對法說會 CFO Anat Ashkenazi 與 Cloud 執行長 Thomas Kurian 的說明可證實：**Alphabet 自 2026 年起首度向外部大型企業與 AI 實驗室直接銷售完整「TPU 算力系統（TPU Systems）」**；公司僅在客戶簽署具法律約束力之確定採購合約（先計入 Cloud Backlog）後，才啟動上游晶片、光通訊與記憶體零組件採購並建立存貨。因此，這 US$133 億存貨是 **100% 有已簽約積壓訂單背書的高毛利 AI 算力系統在製品與待交付設備**，將在 Q4 與 2027 年轉化為龐大營收與現金流入。
3. **毛利率 vs. 產品組合（GM vs. Product Mix）**：Q3 毛利率為 **59.7%**（毛利 US$76,158M ÷ 營收 US$127,577M = 59.696%），較去年同期（59.6%）微升 0.1pp，但較 Q2（61.6%）回落 1.9pp。交叉查核顯示，毛利率季減並非核心廣告或雲端定價惡化，而是三大結構性因素所致：① 單季折舊費用攀升至 **US$8,369M**（YoY +49.2%）；② 外部 TPU 硬體系統銷售佔比提升（硬體系統毛利率自然低於純搜尋軟體廣告）；③ 為滿足爆發的客戶需求，Alphabet 自 Q3 末開始租用**第三方算力容量（Third-party compute capacity）**，初期利用率爬坡帶來短期毛利逆風。
4. **營業利益率 vs. 費用控制（Op Margin vs. OpEx）**：Q3 營業利益率達 **31.8%**（YoY +1.3pp）。儘管研發費用（R&D）年增 36.2% 至 US$20,640M，但總務及行政費用（G&A）逆勢年減 **-17.0%** 至 US$6,138M（佔營收比由 7.2% 大降至 4.8%），且 Google Cloud 部門營益率由 23.7% 狂飆至 **36.2%**，完美對沖了 Gemini 4 研發與總部共用 AI 費用的擴張。
5. **稅後純益 vs. 營業現金流（Net Income vs. OCF — 盈餘含金量）**：Q3 營業現金流（OCF）為 **US$42,290M**，為 GAAP 合併稅後淨利（US$26,468M）的 **1.598 倍（159.8%）**！即便還原業外稅後股權評價損失 US$6,700M（調整後核心淨利約 US$33,168M），OCF / 調整後淨利比仍高達 **127.5%**。在單季墊付逾 32 億美元 TPU 存貨與 39 億美元應收帳款的情況下，本業現金創造力依然極度強悍。
6. **自由現金流 vs. 資本支出（FCF vs. CapEx — 燒錢是否合理？）**：Q3 CapEx 高達 **US$51,355M**，超過單季 OCF（US$42,290M），使單季 FCF 為 **-US$9,065M**。這項現金消耗是否合理？關鍵在於對照 **Google Cloud 積壓訂單（Backlog）單季再增 US$469 億至 US$5,608 億美元（其中逾 55% 將於未來 24 個月內認列為營收，相當於未來兩年已鎖定逾 US$3,084 億確定雲端營收）**。換言之，Alphabet 的 CapEx 並非盲目擴產，而是針對已簽約在手的 5,608 億美元訂單進行履約交付基建。
7. **GAAP EPS vs. Non-GAAP / SBC 與股權增發稀釋**：Q3 員工股權獎勵（SBC）為 **US$8,630M**（佔營收 6.8%，YoY +35.5%）。值得注意的是，Alphabet 在 2026 年暫停股票回購，並透過 ATM 計畫於 Q3 增發 3,600 萬股普通股（募資 US$12.37B），使加權平均稀釋股數由去年同期的約 12,188M 股微增 **+1.3%** 至 **12,344M 股**。管理層選擇在股價處於歷史高檔區間時進行小幅股權增資（僅稀釋約 1.3%），換取逾 619 億美元（含特別股）的低成本長期資本以支應百億級併購與千億級 CapEx，屬於極為精明的資本運作。
8. **管理層言論 vs. 硬數據（Rhetoric vs. Hard Numbers）**：Sundar Pichai 宣稱「Google Cloud 與 TPU 系統需求極度強勁、搜尋查詢量創 5 年新高」，硬數據上 Cloud 營收年增 **+102.6%** 至 US$30.71B、Cloud 營益率達 **36.2%**、Cloud Backlog 衝上 **US$560.8B**、Gemini API 每分鐘處理 Token 數季增 **+40%（年增逾 4 倍）至 320 億個**，硬數據完全支撐管理層論述。
9. **財測指引 vs. 實際表現（Guidance vs. Actual）**：Alphabet 傳統上不提供單季營收或 EPS 定量區間指引，但針對全年 CapEx 指引維持在 **US$1,950 億至 US$2,050 億美元**（前三季實際已執行 US$1,319.5 億，意味 Q4 CapEx 將達 US$630 億–US$730 億）。對比華爾街共識，Q3 營收 US$127.58B 與共識（US$127.97B–$128.22B）大致持平（差幅 <0.5%），Cloud 營收（$30.71B）大幅擊敗市場預期，惟搜尋成長率（+12% YoY）因匯率與高基期較 Q2（+16.8%）放緩，加上業外 SpaceX 評價損失導致 EPS 低於表面共識，引發財報後股價短線回檔修正。
10. **YoY vs. QoQ 成長動能（基期效應或真實加速？）**：合併營收 YoY 增速由 2025 全年的 +15.1%、Q1'26 的 +22.0%、Q2'26 的 +24.2%，進一步加速至 **Q3'26 的 +24.7%**！其中 Google Cloud 的 YoY 增速軌跡更呈現恐怖的指數級跳升：**Q4'25 (+48%) → Q1'26 (+63%) → Q2'26 (+81.8%) → Q3'26 (+102.6%)**。在年化突破千億美元的龐大基期上實現翻倍成長，證明 AI 算力與企業雲端遷移正處於真實的結構性加速期。
11. **市值排名當下查證**：截至 2026 年 11 月 4–5 日，依 Yahoo Finance 與 CompaniesMarketCap 最新數據，Alphabet（GOOGL 收盤 US$288.93 / GOOG 收盤 US$287.42）總市值約 **US$3.53 兆至 US$3.54 兆美元**，穩居**全球第 4 大上市公司**，僅次於 Apple（第 1 大，~$5.08T）、NVIDIA（第 2 大，~$4.83T）與 Microsoft（第 3 大，~$4.13T），並領先第 5 大的 Amazon（~$2.88T）。
12. **稀釋股數與估值倍數自洽驗證**：以過去四季（Q4'25 US$2.81 + Q1'26 US$5.11 + Q2'26 US$9.11 + Q3'26 US$2.12）計算，Alphabet 的 **GAAP TTM EPS 高達 US$19.15**（對應股價 US$287.42 之表面 TTM PE 僅 **15.0x**）。但我們必須嚴謹指出：上半年 GAAP EPS 含有 SpaceX IPO 帶來的巨額一次性按市值計價未實現收益（僅 Q2 業外收益即高達 US$97.98B 或每股約 +US$6.26）。若完全剔除業外股權評價波動，2026 全年常態化核心營業 EPS（Normalized Core EPS）約為 **US$10.80–$11.00**，而 **2027 年華爾街共識 EPS 為 US$14.80–$15.19**（代表核心營業獲利 YoY 實質成長逾 35%），以此計算之 **2027E Forward PE 約為 18.9x–19.4x**，邏輯完全自洽。

---

### 五大非共識深度洞察（Non-Obvious Insights）

<div class="sb">
<h3>🎯 洞察一：破解「EPS 暴跌 26%」的會計幻覺 — SpaceX 股價波動掩蓋了本業獲利 +30% 的極致爆發</h3>
<p>財報公布當晚，部分量化交易程式與媒體標題因「Q3 GAAP EPS US$2.12 年減 26%、低於市場預期 US$3.02」而觸發拋售。然而，深入拆解 Form 10-Q 附註即可發現，這完全是美國 GAAP 會計準則（ASU 2016-01）要求將股權投資未實現損益直接計入當期損益表所造成的「表面失真」：</p>
<ul>
<li><b>SpaceX 與 Anthropic 的評價對沖</b>：Alphabet 自 2015 年起持有 SpaceX 約 5.5 億股股份。隨著 SpaceX（NASDAQ: SPCX）於 2026 年 6 月正式掛牌上市，Alphabet 在 Q2 2026 認列了高達 <b>+US$979.8 億</b>的業外淨收益（推升 Q2 單季 EPS 衝上 US$9.11）。進入 Q3，受 SpaceX 股價單季回檔約 11% 影響，Alphabet 在「上市股權證券（Marketable equity securities）」項目認列了 <b>-US$12,436 百萬（-124.4 億美元）</b>的未實現評價損失；雖有未上市股權（Non-marketable securities，主要為 Anthropic 等估值上調）貢獻 <b>+US$3,027 百萬</b>未實現利益及 <b>+US$745 百萬</b>已實現利益部分抵銷，Q3 股權證券投資仍產生 <b>-US$8,664 百萬（稅後 -US$6,700 百萬，折合每股 -US$0.55）</b>的淨損失。</li>
<li><b>真實本業獲利能力</b>：反觀去年同期（Q3 2025），Alphabet 業外認列了 +US$10,855 百萬的股權投資收益（使業外淨收益達 +US$12,759M）。在一正一負高達 <b>209.8 億美元的業外基期擺盪</b>下，表觀稅前淨利自然下滑 26.4%。但若聚焦於不受業外干擾的<b>本業營業利益（Operating Income），Q3 實質年增高達 +29.9% 至 US$405.8 億美元</b>，證明核心印鈔機比以往任何時候都更強大。</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察二：Google Cloud 的歷史性轉折 — 首度外售「TPU 算力系統」+ 攜手 Oracle 與 Blackstone (Crux AI) 顛覆算力分銷模式</h3>
<p>Google Cloud 在 Q3 交出了震驚華爾街的成績單：<b>單季營收翻倍暴增 102.6% 至 US$307.1 億美元（年化突破 1,228 億美元），營業利益翻 3.1 倍至 US$111.2 億美元，部門營業利益率從去年的 23.7% 暴衝至 36.2%</b>。更關鍵的非共識洞察在於，Google 已不再只是單純出租雲端虛擬機的 CSP，而是正式轉型為<b>直接與 NVIDIA 競爭的「AI 算力系統供應商」</b>：</p>
<ul>
<li><b>從「自用晶片」走向「外部系統銷售（External TPU System Sales）」</b>：過去 Google 自研的 TPU（目前已推進至專攻訓練的 <b>8T</b> 與專攻推論的 <b>8I</b>）僅限於 Google 自家資料中心內部提供客戶透過 GCP 調用。但在 Q3，Alphabet 首度大規模向外部大型客戶（如頂級 AI 實驗室、主權基金與大型金融機構，目前已有<b>超過 100 家大型企業客戶</b>深度採用 TPU）直接出售整合了運算晶片、儲存、高速網路與軟體堆疊（支援 PyTorch 無縫移植）的完整 <b>TPU Systems</b>。</li>
<li><b>輕資產算力擴張（Oracle 合作案 + Blackstone Crux AI 合資案）</b>：Cloud 執行長 Thomas Kurian 揭露，透過將 TPU 系統直接部署至客戶自有資料中心或第三方夥伴機房——包括與 <b>Oracle（甲骨文）</b>的深度合作，以及與私募巨頭 <b>Blackstone（黑石集團）合資成立的「Crux AI」</b>——Google 不僅能打入因資料合規而無法上雲的本地端（On-premise）市場，更能<b>在不需由 Alphabet 自己出資興建水泥廠房與變電站的前提下，直接透過銷售 TPU 系統變現自研晶片優勢</b>，大幅降低長期資料中心廠房的資本密集度。</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察三：5,608 億美元 Cloud 積壓訂單 vs. 1.076 兆美元表外基建承諾 — 看懂 AI 時代最龐大的資產負債表對賭</h3>
<p>市場空頭緊盯 Alphabet 單季高達 US$513.6 億的 CapEx 與轉負的自由現金流（-US$90.7 億），卻忽略了資產負債表與表外附註中隱藏的「訂單鎖定率」：</p>
<ul>
<li><b>5,608 億美元的確定性收入護城河</b>：截至 2026 年 9 月 30 日，Google Cloud 的剩餘履約義務（RPO / Backlog）由 Q2 的 US$5,139 億再狂增 US$469 億，達到驚人的 <b>US$5,608 億美元</b>（全公司 Backlog 達 US$5,677 億）。CFO 明確指出，其中<b>超過 55%（即逾 US$3,084 億美元）將在未來 24 個月內直接認列為營收</b>。這意味著 Google Cloud 未來兩年平均每年已有超過 1,540 億美元的保底營收在手。</li>
<li><b>1.076 兆美元的算力基建鎖定</b>：為了消化這筆龐大積壓訂單，Form 10-Q 揭露 Alphabet 簽署了高達 <b>US$9,240 億美元的未來採購承諾（Future Purchase Commitments，主要為伺服器、TPU 晶圓代工與 HBM 供應）</b>，外加 <b>US$1,520 億美元尚未起算的資料中心租賃與電力義務（Pre-commencement leases）</b>，合計表外承諾突破 <b>1.076 兆美元</b>，並於 2026 年 3 月以 59 億美元直接買下綠能開發商 Intersect 以確保美國資料中心電力供應。這是一場「以已簽約客戶長約為後盾、提前鎖定全球晶片與電力產能」的巨型規模戰，中小型雲端業者已徹底喪失參賽資格。</li>
</ul>
</div>

<div class="sb">
<h3>🎯 洞察四：搜尋查詢量創 5 年新高，為何搜尋營收增速卻從 16.8% 放緩至 12.0%？拆解 AI Mode 的「J 曲線」變現陣痛</h3>
<p>本季法說會上，摩根大通與摩根士丹利分析師高度聚焦一個矛盾現象：既然 Sundar Pichai 宣布「搜尋查詢量（Search Query Volume）年增率創下過去 5 年來最高紀錄」，為何 Google Search & other 營收 YoY 增速卻從 Q2 的 +16.8% 放緩至 Q3 的 +12.0%（US$633.5 億）？商務長 Philipp Schindler 與 CFO Anat Ashkenazi 給出了極為誠實的三層拆解：</p>
<ol>
<li><b>高基期與匯率逆風（約 3pp–4pp 拖累）</b>：Q3 開始面對 2025 下半年搜尋廣告加速成長的高基期（造成約 3 個百分點的 YoY 逆風，預計 Q4 仍有約 2 個百分點基期逆風），加上亞太與歐洲匯率逆風（全公司匯損達 -US$7.02 億）成為單一最大拖累因素。</li>
<li><b>跨境電商免稅額取消之垂直產業衝擊</b>：歐盟終止小額包裹免稅（de minimis exemption）政策，導致部分亞太區跨境零售電商（如 Temu、Shein 等 APAC 廣告主）在歐洲市場縮減廣告投放預算。</li>
<li><b>AI Mode 初期變現率較低的「J 曲線效應」</b>：隨著使用者大量湧入支援多步驟複雜推理的 <b>AI Mode</b> 與 <b>AI Overviews</b>，查詢總量暴增，但新形態 AI 互動介面的初期廣告載入率（Ad Load）與變現率低於傳統關鍵字搜尋。就像當年搜尋從桌面端轉向行動端（Mobile Transition）以及 YouTube 推出 Shorts 短影音初期一樣，Google 採取「先擴大用戶規模與查詢頻率、再逐步拉升商業化」的標準策略，目前正全球加速在 AI Overviews 與 AI Mode 中導入高品質原生購物與商業廣告。</li>
</ol>
</div>

<div class="sb">
<h3>🎯 洞察五：Gemini 4 (Argon & Carbon) 引爆內部工程效率革命 — 2027 將迎來「生產力黃金時代（Golden Age of Productivity）」</h3>
<p>在 Q3 期間，Alphabet 正式推出第四代前沿模型家族 <b>Gemini 4 系列（包含 Argon 與 Carbon 兩大主力模型）</b>，同時 Gemini App 全球月活躍用戶正式突破 <b>10 億人大關</b>（成為 Google 史上最快達成 10 億用戶的產品），第一方模型 API 每分鐘處理高達 <b>320 億個 Tokens（QoQ +40%、YoY >400%）</b>，財富 100 強企業（Fortune 100）中已有高達 <b>90% 採用 Gemini Enterprise</b>，售出超過 1 億個知識工作者席位（Seats）。</p>
<p>更值得長線投資人關注的是內部營運槓桿：Sundar Pichai 在法說會上預告 <b>2027 年將是 Google 的「生產力黃金時代」</b>。他指出，內部軟體工程效率與程式碼品質在導入 3.8 Flash 時已出現初步提升，而在全面部署 <b>Gemini 4 Argon</b> 後更迎來「結構性拐點（Major Inflection Point）」，同時 <b>Carbon</b> 模型在網路資安防禦（結合新收購之 Wiz 平台）與長週期複雜代理任務（Long-horizon Agentic Tasks）已達全球最頂尖水準，正由美國政府與資安機構測試中。這意味著 Alphabet 未來無需大幅擴編人力，即可支撐更大規模的產品開發，為 2027–2028 年的營業費用率收斂埋下強大伏筆。</p>
</div>

---

## 3. 🛡️ 護城河、資本支出展望與法說會 Q&A 精華

### 護城河評級與定價權軌跡

<div class="sb">
<h3>🏰 護城河評級：全棧式 AI 垂直整合 + 雙邊網路效應 + 規模經濟（9.5 / 10 分）</h3>
<p>Alphabet 是全球唯一在 AI 四大核心層級（晶片層、雲端基建層、基礎模型層、十億級終端應用層）全部擁有第一方頂級資產的科技巨頭：</p>
<ul>
<li><b>自研矽晶片與算力成本護城河（TPU 8T / 8I）</b>：相較於競爭對手高度依賴外部高價 GPU，Google 歷經十餘年迭代的第 8 代 TPU（8T 訓練晶片與 8I 推論晶片）不僅賦予自身搜尋與 Gemini 最低的單位 Token 推論成本，更在 Q3 轉化為直接對外銷售的高利潤硬體系統，吸引逾 100 家大型企業客戶簽署長約。</li>
<li><b>雲端與企業資安生態系轉換成本（Cloud + Wiz）</b>：Google Cloud 擁有 18 條年營收破 10 億美元的產品線，並在 2026 年 3 月以 295 億美元完成收購多重雲端資安霸主 <b>Wiz</b>（貢獻約 227 億美元商譽），搭配 Gemini 4 Carbon 的資安防禦能力，使企業客戶一旦將資料與 AI 工作負載綁定於 GCP，轉換成本極高（體現為 US$5,608 億積壓訂單）。</li>
<li><b>十億級入口與數據飛輪</b>：Google Search、YouTube（付費訂閱破 1.5 億人）、Android、Chrome、Maps 與剛突破 10 億用戶的 Gemini App 構成無可複製的即時真實世界資料庫。唯一的 0.5 分扣分項在於代理式 AI（Agentic AI）轉型期的搜尋廣告貨幣化節奏調整，以及美國司法部（DOJ）反壟斷訴訟的潛在監管不確定性。</li>
</ul>
</div>

---

### 2026 Q4 與 2027 營運展望及管理層指引（整理自 Q3 法說會官方定調）

Alphabet 不提供單季營收與 EPS 的具體數值區間，但管理層於法說會中針對資本支出、部門利潤率、基期效應與商業化節奏給出了極為明確的定量與定性指引：

<div class="sw"><table>
<thead><tr><th>指引與展望維度</th><th>官方定調與量化數據</th><th>Q3 '26 實際基準</th><th>趨勢方向與財務影響解析</th></tr></thead>
<tbody>
<tr><td><b>2026 全年資本支出 (CapEx)</b></td><td><b>維持 US$195B – $205B</b>（中位數 $200B）</td><td>9M 累計已支出 $131.95B（Q3 為 $51.36B）</td><td class="bad">🔴 隱含 <b>Q4 單季 CapEx 將高達 US$63.0B – $73.0B</b>（QoQ 再增 23%–42%），約 2/3 用於伺服器與網路設備，1/3 用於資料中心</td></tr>
<tr><td><b>2027 全年資本支出展望</b></td><td><b>預計將「再度顯著增加」</b>（Increase substantially again in FY27）</td><td>FY26E 約 $200B</td><td class="bad">🔴 反映消化 $5,608B Cloud 積壓訂單與 $9,240B 採購承諾所需之持續基建投入，折舊費用將於 2027 進一步攀升</td></tr>
<tr><td><b>Google Cloud 營收與產能展望</b></td><td><b>需求持續大於供給</b>；Q4 擴大使用第三方算力，<b>2027 年外部 TPU 系統銷售將大幅放量</b></td><td>Q3 營收 $30.71B (+102.6% YoY)，Backlog $560.8B</td><td class="good">🟢 積壓訂單逾 55%（>$3,084B）將於 24 個月內認列為營收，2027 隨自有新機房與 TPU 系統大規模交付，營收動能極強</td></tr>
<tr><td><b>Google Cloud Q4 利潤率指引</b></td><td><b>預期短期將面臨利潤率逆風</b>（Near-term margin headwinds in Q4）</td><td>Q3 營益率 36.2%（歷史新高）</td><td class="warn">🟡 兩大短期逆風：① 外部 TPU 硬體系統銷售佔比提升；② Q3 末開始租用並於 Q4 擴大使用成本較高之第三方算力容量</td></tr>
<tr><td><b>Google Search Q4 基期與匯率</b></td><td><b>Q4 面臨約 2pp 高基期逆風 + 略微擴大的匯率逆風</b>；全力擴展 AI Mode 廣告變現</td><td>Q3 營收 $63.35B (+12.0% YoY，含 ~3pp 基期逆風)</td><td class="warn">🟡 2025 下半年搜尋加速墊高比較基期；管理層正全球放量 AI Overviews 與 AI Mode 內的商業廣告以縮小查詢量與營收增速落差</td></tr>
<tr><td><b>2027 內部營運效率展望</b></td><td><b>迎來「2027 生產力黃金時代」</b>（Golden Age of Productivity）</td><td>9M 營業利益率 33.9%</td><td class="good">🟢 內部全面部署 Gemini 4 Argon 大幅提升軟體工程效率，嚴控人員擴編速度，對沖折舊上升壓力</td></tr>
</tbody></table></div>

---

### 2026 Q3 法說會核心 Q&A 實錄（整理自公開法說會逐字稿重點）

<div class="sb">
<h3>🎙️ 法說會關鍵問答實錄（Sundar Pichai、Anat Ashkenazi、Thomas Kurian、Philipp Schindler）</h3>
<ul>
<li><b>Q1（JPMorgan — Doug Anmuth）：Sundar 提到 2027 年將是 Google 的「生產力黃金時代」，能否具體說明？另外請教 Philipp，本季搜尋查詢量創下 5 年新高，為何搜尋營收年增率卻放緩至 12%？</b><br>
<b>Sundar Pichai 回應</b>：我們在內部導入 Gemini 3.8 Flash 時，軟體工程效率與品質就已經出現顯著躍升；而在內部全面部署最新的 <b>Gemini 4 系列（Argon 與 Carbon）</b>後，更迎來了真正的轉折點。Argon 是我們目前最具影響力的內部生產力槓桿之一，這將在 2027 年為全公司帶來可觀的生產力紅利。<br>
<b>Philipp Schindler 回應</b>：搜尋營收增速季減主要有三個原因：第一，<b>匯率逆風（FX headwinds）是單一最大因素</b>；第二，特定垂直產業動態，例如歐盟取消小額免稅額（de minimis exemption）衝擊了亞太區（APAC）零售廣告主的投放，以及媒體娛樂產業面臨世界盃檔期基期效應；第三，快速成長的 <b>AI Mode 查詢目前處於初期階段，初始變現率較低</b>。但我們正積極在全球將高品質廣告擴展至 AI Overviews 與 AI Mode 中。</li>

<li><b>Q2（Goldman Sachs — Eric Sheridan）：在算力持續受限的情況下，管理層如何決定內部各業務間的算力分配？又如何平衡「把 TPU 留給自家雲端客戶使用」與「直接把 TPU 系統賣給外部客戶」？</b><br>
<b>Sundar Pichai 回應</b>：我們的算力分配由長期戰略規劃與嚴格的投入資本回報率（ROIC）框架主導，且底層基礎 AI 模型是同時服務 Alphabet 旗下所有產品線的。<br>
<b>Thomas Kurian（Cloud 執行長）回應</b>：Google Cloud 服務多元客戶群，目前已有<b>超過 100 家重要客戶採用我們的 TPU</b>。我們的 TPU 戰略分為三部分：① 打造具備極佳性價比的專用晶片（如專攻訓練的 <b>8T</b> 與專攻推論的 <b>8I</b>）；② 強化軟體層，包括對 PyTorch 的高度可攜性；③ 拓寬分銷管道——我們不僅在 GCP 內部提供，更將 TPU 系統擴展部署至客戶自有資料中心與第三方合作夥伴機房，例如我們與 <b>Oracle</b> 的合作，以及與 <b>Blackstone 合資成立的 Crux AI</b>。</li>

<li><b>Q3（Barclays — Ross Sandler）：請教 Anat 關於對外銷售 TPU 系統（市場估計每 GW 系統價值約 350 億美元）的營收認列與利潤率特性？協助 Anthropic 等 AI 實驗室透過購買 TPU 系統建立自有第一方算力，是否能降低 Alphabet 自身的資料中心 CapEx 密集度？</b><br>
<b>Anat Ashkenazi（CFO）回應</b>：我們不單獨揭露單一產品線財務細節，但請注意，我們銷售的「TPU 系統（TPU System）」是一套整合了運算、儲存、網路與軟體的完整特化系統，而不僅僅是一顆晶片。在會計與現金流機制上：<b>當我們與客戶簽署銷售 TPU 系統的合約時，它會先進入我們的 Cloud 積壓訂單（Backlog）；接著我們開始採購零組件並建立存貨（Inventory）</b>——這會在營收認列前先產生營運現金流出與資產負債表上的存貨增加（這與傳統計入 PP&E 的 CapEx 不同）。一旦系統交付並開立帳單，現金就會流入。我們在 Q3 已經認列了一部分系統銷售，但<b>預計 2027 年將迎來規模大得多的放量（A much larger ramp in 2027）</b>。<br>
<b>Thomas Kurian 補充</b>：我們只有在取得客戶具約束力的簽約承諾後才會採購 TPU 系統存貨，這意味著<b>帳上所有 TPU 存貨背後都有已簽署的訂單支撐</b>；且將系統部署至客戶或第三方機房，確實減少了我們自己預先興建資料中心廠房以容納這些系統的需求。</li>

<li><b>Q4（Morgan Stanley — Brian Nowak）：將代理式 AI（Agentic AI，如 Spark）推向數十億消費者面臨哪些技術挑戰？Q4 搜尋業務的基期壓力如何？</b><br>
<b>Sundar Pichai 回應</b>：向數十億用戶全面部署 Agentic AI，不僅需要前沿模型能力，還需要更高效的推論管線、安全的執行環境（Secure runtime environment）、完善的工具生態系與底層 GCP 支援。我們正開發更高效率版本的 <b>Carbon 模型</b>以擴展至數十億消費者，這將隨企業端部署逐步推進。<br>
<b>Anat Ashkenazi 回應</b>：關於搜尋基期，Q3 已經開始面對 2025 年底加速成長的高基期（造成約 3 個百分點的年增率逆風），<b>Q4 將繼續面臨高基期挑戰（約 2 個百分點的逆風）以及略微擴大的匯率逆風</b>。</li>

<li><b>Q5（AllianceBernstein — Mark Shmulik & MoffettNathanson — Michael Nathanson）：消費者在 Gemini 使用代理式 AI 的早期行為有何發現？為何願意將 TPU 或雲端算力賣給模型或雲端競爭對手？</b><br>
<b>Sundar Pichai 回應</b>：我們在 Gemini App 新增了「Task（任務）」分頁讓用戶輸入多步驟代理查詢。我們發現用戶標準極高——就像寫程式一樣，如果 Agent 只有 70% 正確率，採用率就會停滯；但一旦跨過可靠性門檻、能在長週期任務中交付端到端結果，重複使用率就會瞬間起飛。至於與競爭對手合作，支援更廣泛的生態系能強化 Google 的平台規模與 ROIC；而在消費端 Agentic AI 上，<b>安全性、隱私與信任（Safety, privacy, and trust）</b>將是決定勝負的最大差異化護城河。</li>
</ul>
</div>

---

## 4. ⚠️ 風險提示

<h3 class="risk-red">🔴 高風險（High Risk）</h3>
<div class="sb rh">
<ul>
<li><b>超級資本支出週期導致自由現金流轉負與折舊陡升</b>：Q3 單季 CapEx 飆至 US$51.36B（全年指引 US$195B–$205B，意味 Q4 單季需支出高達 US$63B–$73B），且管理層預告 2027 年 CapEx 將「再度顯著增加」，外加高達 US$1.076 兆的表外採購與租賃承諾。單季 FCF 已連續兩季為負（Q2 -$5.86B、Q3 -$9.07B），單季設備折舊年增 49.2% 至 US$8.37B。若未來全球企業 AI 支出放緩，龐大的剛性折舊將嚴重壓縮毛利率與 ROIC。</li>
<li><b>資產負債表槓桿率快速攀升與股權稀釋</b>：為支應巨額 CapEx 與 354 億美元併購（Wiz + Intersect），Alphabet 在 2026 年前三季全面停止股票回購（Repurchases $0），長期負債由去年底的 US$46.55B 暴增 168.8% 至 <b>US$125.10B</b>，並發行 US$18.02B 強制可轉換特別股（年息 6.25%）及透過 ATM 計畫增發普通股募資 US$42.87B。雖然流動性依然充沛，但已告別過去「零淨負債 + 大額回購註銷股本」的防禦型資本結構。</li>
<li><b>美國司法部（DOJ）與歐盟反壟斷監管尾部風險</b>：美國 DOJ 針對 Google Search 壟斷案與廣告科技（AdTech）業務的救濟措施審理持續進行，歐盟《數位市場法》（DMA）亦持續施壓。若最終裁決強制要求結構性分拆（如 Chrome 或 Android）或禁止預設搜尋引擎分潤協議（TAC），將動搖搜尋廣告印鈔機根基。</li>
</ul>
</div>

<h3 class="risk-yellow">🟡 中風險（Medium Risk）</h3>
<div class="sb rm">
<ul>
<li><b>Q4 Google Cloud 短期利潤率逆風與搜尋變現落差</b>：CFO 已明確預警，由於 Q3 末開始租用並將於 Q4 擴大使用成本較高的第三方算力容量，加上硬體屬性之外部 TPU 系統銷售佔比提升，Google Cloud 營業利益率（Q3 達 36.2%）在 Q4 將面臨短期逆風；同時 Search 業務在 Q4 仍面臨約 2 個百分點的高基期逆風與 AI Mode 初期較低的廣告變現率。</li>
<li><b>SpaceX 等上市股權投資帶來的 GAAP EPS 劇烈波動</b>：自 SpaceX 於 2026 年 6 月上市後，Alphabet 持有的約 5.5 億股 SpaceX 股票每季皆須按公允市值計價（Mark-to-Market）並直接計入業外損益（Q2 大賺 +$98B、Q3 轉虧 -$8.66B）。這使 Alphabet 的表面 GAAP EPS 高度受制於 SpaceX 股價波動，容易引發市場情緒誤判。</li>
</ul>
</div>

<h3 class="risk-green">🟢 低風險／潛在機會（Low Risk / Opportunity）</h3>
<div class="sb rl">
<ul>
<li><b>5,608 億美元 Cloud 積壓訂單與 2027 外部 TPU 系統大放量</b>：Google Cloud 積壓訂單高達 US$5,608 億（逾 55% 於 24 個月內認列），且透過與 Oracle 及 Blackstone（Crux AI）合作向超過 100 家大型客戶外售 TPU 8T/8I 系統，管理層預告 2027 年 TPU 系統銷售將迎來更大規模爆發，開闢高成長新財源。</li>
<li><b>Gemini 4 (Argon / Carbon) 與 Wiz 資安協同效應</b>：Gemini App 突破 10 億用戶、API Token 處理量年增逾 4 倍至每分鐘 320 億個；結合新併入的雲端資安霸主 Wiz 與具備頂尖網路防禦能力的 Gemini 4 Carbon 模型，加上 Argon 帶動的 2027 年內部軟體工程「生產力黃金時代」，長期營運槓桿潛力極大。</li>
</ul>
</div>

---

## 5. 📊 估值觀察

### Alphabet (GOOG / GOOGL) 估值指標與核心獲利拆解（截至 2026 年 11 月 5 日）

依據 Yahoo Finance 與 CompaniesMarketCap 截至 2026 年 11 月 4–5 日之最新市場數據，Alphabet Class C（NASDAQ: **GOOG**）收盤價為 **US$287.42**，Class A（NASDAQ: **GOOGL**）收盤價為 **US$288.93**（10 月 28 日財報公布後因 CapEx 暴增與表面 EPS 遜於預期，股價自 10 月中旬高點 ~$349 回檔修正約 17%）。當下總市值約 **US$3.53 兆至 US$3.54 兆美元**，穩居**全球第 4 大市值上市公司**。

在評估 Alphabet 估值時，分析師必須嚴格區分**「含 SpaceX 評價收益之表面 GAAP 數據」**與**「剔除業外股權波動之常態化核心營業數據（Normalized Core EPS）」**：

<div class="sw"><table>
<thead><tr><th>估值與財務指標</th><th>當前數值 (GOOG / GOOGL)</th><th>計算邏輯驗證、會計調整說明與歷史區間對照</th></tr></thead>
<tbody>
<tr><td><b>最新股價 (2026-11-04/05)</b></td><td><b>GOOG: $287.42｜GOOGL: $288.93</b></td><td>52 週區間：GOOG $271.41–$404.47｜GOOGL $270.70–$408.61</td></tr>
<tr><td><b>總市值 (Market Cap)</b></td><td><b>~US$3.53T – $3.54T</b></td><td class="good">🟢 <b>全球第 4 大上市公司</b>（約 12,344M 稀釋股數 × ~$287.42）</td></tr>
<tr><td><b>企業價值 (Enterprise Value, EV)</b></td><td><b>~US$3.41T</b></td><td>市值 $3.535T + 長期負債 $125.1B + 租賃負債 $16.8B - 現金及有價證券 $265.1B</td></tr>
<tr><td><b>GAAP TTM EPS (過去四季累計)</b></td><td><b>US$19.15</b></td><td>Q4'25 ($2.81) + Q1'26 ($5.11) + Q2'26 ($9.11) + Q3'26 ($2.12) = <b>$19.15</b></td></tr>
<tr><td><b>表面 GAAP TTM PE</b></td><td><b>15.0x (GOOG) / 15.1x (GOOGL)</b></td><td class="warn">🟡 <b>注意會計失真</b>：分母含 Q1/Q2 SpaceX IPO 巨額未實現評價利益，不可直接作為常態本益比</td></tr>
<tr><td><b>2026E 表面 GAAP 共識 EPS</b></td><td><b>~US$19.70 – $20.45</b></td><td>含 H1 巨額業外股權收益 + Q4 共識預估 EPS ~$3.24（對應表面 PE 僅 ~14.1x–14.6x）</td></tr>
<tr><td><b>2026E 常態化核心 EPS (Core EPS)</b></td><td><b>~US$10.80 – $11.00</b></td><td>完全剔除業外股權投資未實現損益後之純本業獲利（對應 2026 核心本業 PE 約 <b>26.1x–26.6x</b>）</td></tr>
<tr><td><b>2027E 共識 EPS (Forward EPS)</b></td><td><b>US$14.80 – $15.19</b>（中位 $15.00）</td><td class="good">🟢 假設 2027 業外股權評價歸零，純靠 Cloud + Search 本業成長，<b>較 2026 核心 EPS 實質年增逾 +36%</b></td></tr>
<tr><td><b>2027E Forward PE (核心指標)</b></td><td><b>~18.9x – 19.4x</b></td><td class="good">🟢 以股價 $287.42 ÷ 2027E 共識 EPS $14.80–$15.19 計算，<b>低於過去 5 年歷史中樞（~22x–24x）</b></td></tr>
<tr><td><b>Core PEG Ratio (本益成長比)</b></td><td><b>~0.53x – 0.55x</b></td><td class="good">🟢 以 2027E Forward PE (~19.1x) ÷ 核心營業 EPS 成長率 (~35%–36%) 計算，極具成長性價比</td></tr>
<tr><td><b>EV / TTM EBITDA (調整後本業)</b></td><td><b>~18.1x</b></td><td class="good">🟢 Q3 年化本業 EBITDA（營業利益 $40.58B + 折舊 $8.37B = 單季 $48.95B，年化 ~$195.8B）</td></tr>
<tr><td><b>P/B Ratio (股價淨值比)</b></td><td><b>5.38x</b></td><td>依 Q3 普通股每股淨值 US$53.43 計算，在美股科技七巨頭（Mag 7）中處於最低水位</td></tr>
<tr><td><b>TTM FCF Yield (自由現金流殖利率)</b></td><td><b>0.56%</b>（TTM FCF $19.75B）</td><td class="bad">🔴 受 $159.8B TTM CapEx 嚴重壓縮；待 2027–2028 CapEx 增速放緩後 FCF 將迎來均值回歸</td></tr>
</tbody></table></div>

---

### 全球科技巨頭（Mag 7 同業）橫向估值與營運對比（截至 2026 年 11 月初 / 2026 Q3 財季）

<div class="sw"><table>
<thead><tr><th>公司名稱 (代號)</th><th>市值 (US$)</th><th>全球市值排名</th><th>2026 Q3 營收 YoY</th><th>雲端業務 YoY</th><th>2026 Q3 營業利益率</th><th>單季 FCF (Q3 '26)</th><th>TTM PE</th><th>Forward PE (FY27E)</th></tr></thead>
<tbody>
<tr><td><b>Alphabet (GOOG / GOOGL)</b></td><td><b>$3.53T</b></td><td><b>全球第 4 大</b></td><td class="good"><b>+24.7% ($127.6B)</b></td><td class="good"><b>+102.6% ($30.7B)</b></td><td><b>31.8% (Cloud 36.2%)</b></td><td class="bad"><b>-$9.07B</b> (CapEx $51.4B)</td><td><b>15.0x (GAAP)</b></td><td class="good"><b>~19.1x</b></td></tr>
<tr><td><b>Apple (AAPL)</b></td><td>$5.08T</td><td>全球第 1 大</td><td>+11.7% ($114.5B)</td><td>— (服務業務穩健)</td><td>31.1% (GM 47.9%)</td><td class="good">~$27.0B+ (輕資本)</td><td>~39.4x</td><td>~35.0x</td></tr>
<tr><td><b>NVIDIA (NVDA)</b></td><td>$4.83T</td><td>全球第 2 大</td><td class="good">+70% ~ +80%</td><td>— (AI 算力軍火商)</td><td class="good">~63.0% (GM ~75%)</td><td class="good">~$20.0B+</td><td>~42.0x</td><td>~30.0x</td></tr>
<tr><td><b>Microsoft (MSFT)</b></td><td>$4.13T</td><td>全球第 3 大</td><td class="good">+18.8% ($92.3B)</td><td class="good">+48.0% (Azure)</td><td class="good">49.8% (GM 67.8%)</td><td class="good">+$18.6B</td><td>~28.0x</td><td>~25.5x</td></tr>
<tr><td><b>Amazon (AMZN)</b></td><td>$2.88T</td><td>全球第 5 大</td><td>+12.0% ($201.9B)</td><td class="good">+39.3% (AWS $46B)</td><td>13.9% (AWS 38.7%)</td><td class="bad">TTM -$42.4B</td><td>~19.4x</td><td>~22.3x</td></tr>
<tr><td><b>Meta Platforms (META)</b></td><td>$1.70T</td><td>全球第 7 大</td><td class="good">+26.0% ($64.6B)</td><td>— (純廣告+AI)</td><td>20.1% (調整後 35.4%)</td><td class="bad">-$2.12B (CapEx $34.9B)</td><td>~21.8x</td><td>~20.5x</td></tr>
</tbody></table></div>

> **📌 同業橫向對比核心結論**：在四大雲端與 AI 超級巨頭（Alphabet、Microsoft、Amazon、Meta）中，**Google Cloud 在 2026 Q3 的營收年增率（+102.6%）遠超 Microsoft Azure（+48.0%）與 Amazon AWS（+39.3%）達兩倍以上**，且部門營業利益率（36.2%）已迅速逼近 AWS（38.7%）。同時，在 2026 Q3 期間，Alphabet（FCF -$9.07B）、Meta（FCF -$2.12B）與 Amazon（TTM FCF -$42.4B）三大巨頭的自由現金流同步因百億級 AI 資本支出而轉負，顯示這是全產業爭奪下一代通用人工智慧（AGI）與企業雲端基建的共同結構性現象。而在估值端，Alphabet 的 **2027E Forward PE（~19.1x）為美股科技七巨頭（Mag 7）中最低**，市場因短期負自由現金流與搜尋增速放緩而給予其顯著的估值折價。

---

## 6. 📋 關鍵觀察

<div class="sb rl">
<ul>
<li><b>年化營收首破 5,000 億美元，本業營業利益大增 30%</b>：Q3 合併營收達 US$127.58B（+24.7% YoY）、營業利益達 US$40.58B（+29.9% YoY，營益率 31.8%）。表面 GAAP EPS US$2.12（-26.1% YoY）完全是受已上市之 SpaceX 第三季股價回檔 11%、產生 -US$8.66B（每股 -US$0.55）未實現股權評價損失所致；還原後之調整後 EPS 為 US$2.67，核心本業獲利動能依然強勁。</li>
<li><b>Google Cloud 翻倍暴增 102.6% + 首度外售 TPU 算力系統</b>：Cloud 單季營收衝上 US$30.71B（年化逾 1,228 億美元），營業利益翻 3.1 倍至 US$11.12B，營益率狂飆 12.5pp 至 36.2%。更關鍵的是，Google 首度向逾 100 家大型客戶直接銷售完整 TPU 算力系統（8T/8I），並攜手 Oracle 與 Blackstone（Crux AI）將 TPU 部署至外部機房，推動 Cloud 積壓訂單（Backlog）飆升至 US$5,608 億美元（全公司 US$5,677 億，逾 55% 將於 24 個月內認列為營收）。</li>
<li><b>總資產首破 1 兆美元，但單季 CapEx $514 億使 FCF 連兩季轉負</b>：Q3 末總資產達 US$1.0033 兆美元（現金及有價證券 US$265.1B + 非上市股權 US$135.2B）。單季 CapEx 狂飆 114.4% 至 US$51.36B（全年維持 US$195B–$205B 指引，隱含 Q4 CapEx 高達 US$63B–$73B），加上為外部 TPU 系統訂單提前備貨使存貨暴增至 US$13.31B，導致單季 FCF 為 -US$9.07B。公司前三季全面暫停庫藏股回購（$0），並透過淨發債 US$76.3B 與股權增資 US$61.9B 全力支應 AI 軍備競賽與 Wiz（$29.5B）併購。</li>
<li><b>搜尋查詢量創 5 年新高，Gemini 4 引領 2027「生產力黃金時代」</b>：Search 營收達 US$63.35B（+12.0% YoY），增速較 Q2 放緩主因匯率逆風、高基期及 AI Mode 初期變現率較低，但底層搜尋查詢量創近 5 年最高增速。Gemini App 突破 10 億用戶，第一方 API 每分鐘處理 320 億個 Tokens（YoY >4x），最新發布的 Gemini 4（Argon 與 Carbon）正全面重塑內部軟體工程效率與企業資安防禦。</li>
<li><b>2027E Forward PE 僅約 19.1x 居 Mag 7 最低，後續緊盯三大指標</b>：在股價回檔至 ~US$287 後，Alphabet 對應 2027 年共識 EPS（~US$15.00，核心獲利 YoY +36%）之 Forward PE 僅約 19.1x。未來一至兩季的核心觀察指標為：① Q4 租用第三方算力對 Cloud 利潤率的實際壓縮幅度；② AI Overviews 與 AI Mode 廣告變現率提升能否帶動 Search 營收增速回升；③ 2027 年外部 TPU 系統大規模交付後，自由現金流何時重回正軌。</li>
</ul>
</div>

<div class="sb rl">
<p><b>一句話總結：雲端翻倍與五千六百億積壓訂單鑄就兆元資產帝國，Google 正以五百億單季資本支出豪賭全棧 AI 霸權。</b></p>
</div>

<div class="disc">
<b>免責聲明（Disclaimer）</b>：本報告僅為客觀財務數據整理與產業戰略分析，不構成任何證券之買入、賣出或持有建議，亦不提供任何目標價預測。投資人應獨立判斷並自負投資風險。<br><br>
<b>資料來源（Sources）</b>：Alphabet Inc. 2026 年第三季官方財務報告（SEC Form 10-Q，截至 2026-09-30）、Q3 2026 Earnings Release (Form 8-K，2026-10-28)、Q3 2026 法人說明會公開問答逐字稿紀要（Sundar Pichai、Anat Ashkenazi、Thomas Kurian、Philipp Schindler 發言）、Q2 2026 Form 10-Q、Yahoo Finance、CompaniesMarketCap（市值與股價數據截至 2026-11-05）。所有美元財務數據均以官方 US GAAP 合併報表（US$ 百萬）為準。
</div>
