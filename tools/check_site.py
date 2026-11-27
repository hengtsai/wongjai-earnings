#!/usr/bin/env python3
"""改版驗證（2026-11-28）。用法：python3 -I tools/check_site.py <新版 public> [<舊版 public>]
1. 站內連結：新版每個 HTML 裡以 / 開頭的 href、src 都要有對應的檔案（去掉 ?query 與 #hash）。
2. 給了舊版 public 時：舊版每個網址在新版都還在；每篇文章的內文（<div class=article-content> 裡面）一字不差。
只讀檔案，不改任何東西。"""
import os, re, sys, html
from urllib.parse import unquote

def pages(root):
    for d, _, fs in os.walk(root):
        for f in fs:
            if f.endswith('.html'):
                yield os.path.join(d, f)

def exists(root, url):
    p = unquote(url.split('#')[0].split('?')[0])
    if not p.startswith('/'): return True
    fp = os.path.join(root, p.lstrip('/'))
    return os.path.isfile(fp) or os.path.isfile(os.path.join(fp, 'index.html'))

def content(path):
    s = open(path, encoding='utf-8').read()
    m = re.search(r'<div class="?article-content"?[^>]*>(.*)</div>\s*</article>', s, re.S)
    return m.group(1).strip() if m else None

def main():
    new = sys.argv[1].rstrip('/'); old = sys.argv[2].rstrip('/') if len(sys.argv) > 2 else None
    bad, n_links, n_pages = [], 0, 0
    for p in pages(new):
        n_pages += 1
        s = open(p, encoding='utf-8').read()
        for u in set(re.findall(r'(?:href|src)=["\']?([^"\'\s>]+)', s)):
            u = html.unescape(u)
            if u.startswith('//') or not u.startswith('/'): continue
            n_links += 1
            if not exists(new, u): bad.append((os.path.relpath(p, new), u))
    print(f'站內連結：{n_pages} 頁、{n_links} 個連結（每頁去重複）、壞掉 {len(bad)} 個')
    for b in bad[:20]: print('  ✗', b)
    rc = 1 if bad else 0
    if old:
        missing, diff, same, nocontent = [], [], 0, 0
        for p in pages(old):
            rel = os.path.relpath(p, old)
            q = os.path.join(new, rel)
            if not os.path.isfile(q): missing.append(rel); continue
            a = content(p)
            if a is None: continue
            b = content(q)
            if b is None: nocontent += 1; diff.append(rel + '（新版找不到內文）'); continue
            if a == b: same += 1
            else: diff.append(rel)
        print(f'舊網址：新版缺少 {len(missing)} 個')
        for m in missing[:20]: print('  ✗', m)
        print(f'文章內文：相同 {same} 篇、不同 {len(diff)} 篇')
        for d in diff[:20]: print('  ≠', d)
        if missing: rc = 1
    return rc

if __name__ == '__main__':
    sys.exit(main())
