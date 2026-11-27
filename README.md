# ⚡ Wongjai AI Earning Calls

> AI 驅動的機構級財報分析與法說會摘要存檔平台

## 技術架構

- **Static Site Generator**: Hugo
- **Hosting**: Netlify
- **Version Control**: GitHub
- **Theme**: Custom "wongjai-theme"（淺色／深色雙模式，2026-11-28 改版）

## 快速啟動

```bash
# 本地預覽
hugo server -D

# 建構生產版本
hugo --gc --minify
```

## 部署流程

1. 推送到 GitHub main 分支
2. Netlify 自動觸發建構
3. Hugo 生成靜態檔案
4. 自動部署到 CDN

## 團隊

| 成員 | 角色 | 職責 |
|------|------|------|
| ⚡ Wongjai | AI 中樞 | 任務分配、進度追蹤 |
| 💰 Warren | 量化分析師 | 財報分析、數據處理 |
| 🔧 Mano | 技術工程師 | 爬蟲、自動化、部署 |
| 📋 Abby | 創意總監 | 文案、視覺設計 |

## 多語版本（2026-11-27 起）

- 語言：繁體中文（預設，網址不加前綴）、简体中文 `/zh-cn/`、English `/en/`、日本語 `/ja/`、한국어 `/ko/`。
- 文章：同一資料夾用檔名後綴，例如 `content/earnings/panw-q1-fy2027.md`（繁中）、`panw-q1-fy2027.zh-cn.md`、`.en.md`、`.ja.md`、`.ko.md`。
  title、summary、tags 翻譯；ticker、quarter、date、logo、color、author、draft 與繁中一致；可加 `translationKey`（＝檔名主幹）。內文 HTML 與表格結構不變。
- 介面文字在 `i18n/<語言>.toml`；某篇沒有某語言版本時的說明在 `data/untranslated.yaml`。
- 沒有譯本時：各語言的列表照樣列出這篇的繁中原文（標「繁中／Chinese…」），語言切換連到繁中原文並帶 `?from=<語言>`，原文頁上方用那個語言說明，不會 404。
- 各語言版本互標 `hreflang`（x-default＝繁中），各語言有自己的 RSS（`/en/index.xml` 等）。

### ⚠️ 翻譯規則（使用者指定）
**所有翻譯（文章與介面文字）都必須用 LLM 翻譯。不可使用 Google 翻譯、DeepL 等機器翻譯 API、外掛，也不可依賴瀏覽器自動翻譯。** 文章翻譯由 Munger 負責；介面文字由 Altman 以 LLM 翻譯。

## 2026-11-28 改版（Phase 1＋2，Buffet 實作）

定案規格：`/Users/wongjai/OpenBot/Shared/earnings-redesign-2026-11-27/FINAL-PROPOSAL.md`（Steve 設計、Challenger 審查、使用者核准）。

- **樣式**：淺色／深色雙模式（預設跟隨系統，手動選擇記在 `localStorage['wj-theme']`；`baseof.html` 的 inline script 在畫面出現前決定，換頁不閃白）。
  品牌色是藍色；財報好壞色只用在 KPI 膠囊與表格的點評格：好＝偏藍青綠、差＝紅、留意＝琥珀。**表格的數字格一律中性字色**。
- **字體**：英數用自帶的 `Inter`（`themes/wongjai-theme/static/fonts/`，不再連 Google Fonts），中日韓用各系統內建字體，依 `<html lang>` 切換。
- **文章內文完全不用改**：舊的 class（`.kpi-grid .kpi-card .sb .rh .rm .rl .sw .disc .good .warn .bad .up .dn .down .wn h3.risk-*`）都保留。
  不再顯示 front matter 的 `logo`（外部抓的圖示會糊、會破圖），改用代號徽章。
- **表格對齊**：`themes/wongjai-theme/static/js/table-align.js`。先展開 rowspan／colspan 算真正的欄位，第 1 欄靠左並在手機凍結，
  其餘欄位整欄多數決（數值過半就整欄靠右）；表頭是點評、說明、看法…的欄一律靠左；數字欄裡的整句文字或含 🟢🟡🔴 的格改回靠左。
  規則寫在該檔開頭。不要在 CSS 用 `:first-child`／`:nth-child` 對表格欄位下樣式。
- **手機**：導覽列最多 2 個主連結（財報、公司），分析、關於在頁尾；KPI 超過 4 張先顯示 4 張；表格可橫向捲動、首欄凍結。
- **公司頁**：`data/companies.yaml` 是唯一的公司資料表（代號、市場、產業、五語名稱、搜尋別名、會計年度結束月份）。
  `content/companies/_content.gotmpl` 在建置時替每家公司、每種語言各產生一頁（`/companies/2330/`、`/en/companies/nvda/`）。
  **新增追蹤公司：在 `companies.yaml` 的 `list` 加一筆即可**，文章的 front matter 只要有 `ticker` 與 `quarter`。
  `/companies/tsm`、`/companies/googl` 轉到正式代號（`netlify.toml`）。
- **首頁**：最新 9 篇＋35 家公司速查（手機用切換鈕）。**財報列表**：市場、產業、搜尋（含別名）、外語頁可只看已翻譯，依發布年月分段。
- **SEO**：每頁有 `canonical`（不帶 `?from=`）、Open Graph 與通用分享圖 `og-default.png`；各語言 `hreflang` 照舊。
- **介面文字**：`i18n/*.toml`（五語，只能用 LLM 翻譯）。

### 改完要跑的檢查
```bash
hugo --gc --minify -d /tmp/new-public          # 新版
python3 -I tools/check_site.py /tmp/new-public [/tmp/old-public]   # 站內連結 0 壞；給舊版時比對舊網址都在、文章內文一字不差
hugo -d /tmp/check-public                      # 不要 --minify
node tools/check_tables.js /tmp/check-public [文章代稱…]            # 每張表的欄位對齊統計與可疑欄位
```
