#!/usr/bin/env python3
"""LIBRARY-ORG structure audit: join books -> chapters -> sections, check minimums."""
import json
from collections import defaultdict

meta = json.load(open('/home/z/my-project/src/data/library-parts/knowledge-meta.json'))
ch_by_book = defaultdict(list)
sec_by_ch = defaultdict(list)
for c in meta['chapters']:
    ch_by_book[c['bookId']].append(c)
for s in meta['sections']:
    sec_by_ch[s['chapterId']].append(s)

print(f"books={len(meta['books'])} chapters={len(meta['chapters'])} sections={len(meta['sections'])}")

# Focus books from backlog
FOCUS = ['naval', 'nano', 'quantum', 'german', 'mandarin', 'computational-science']
violations = []
for b in meta['books']:
    chs = sorted(ch_by_book[b['id']], key=lambda c: c['number'])
    nch = len(chs)
    nls = sum(len(sec_by_ch[c['id']]) for c in chs)
    title_low = b['title'].lower()
    is_focus = any(f in b['id'] or f in title_low for f in FOCUS)
    flag = ''
    if nch < 2 or nls < 3:
        flag = ' << MIN VIOLATION'
        violations.append((b['id'], b['title'], nch, nls))
    if is_focus or flag:
        print(f"\n== {b['id']} | {b['title']} | {nch}ch / {nls}ls{flag}")
        for c in chs:
            secs = sorted(sec_by_ch[c['id']], key=lambda s: s['number'])
            sl = ', '.join(f"{s['number']} {s['title']}" for s in secs)
            print(f"   Ch{c['number']} {c['title']}: [{sl}]")

print(f"\n--- TOTAL MIN VIOLATIONS: {len(violations)}")
for v in violations:
    print(f"   {v[0]} | {v[1]} | {v[2]}ch/{v[3]}ls")
