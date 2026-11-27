# ⚡ Wongjai AI Earning Calls

> AI 驅動的機構級財報分析與法說會摘要存檔平台

## 技術架構

- **Static Site Generator**: Hugo
- **Hosting**: Netlify
- **Version Control**: GitHub
- **Theme**: Custom "wongjai-theme"（深色金融儀表板風格）

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
