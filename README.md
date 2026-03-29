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
