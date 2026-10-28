#!/usr/bin/env python3
"""LIBRARY-ORG structure audit: join books -> chapters -> sections by id.

Reports:
  1. per-book chapter/lesson counts, minimum violations (<2 ch or <3 ls)
  2. the thinnest books ranked (for deepening passes)
  3. totals for the worklog Stage Summary
"""
import json
from collections import defaultdict

M = json.load(open("src/data/library-parts/knowledge-meta.json"))
books = M["books"]
chapters = M["chapters"]
sections = M["sections"]

ch_by_book = defaultdict(list)
for ch in chapters:
    ch_by_book[ch["bookId"]].append(ch)

sec_by_ch = defaultdict(list)
for s in sections:
    sec_by_ch[s["chapterId"]].append(s)

total_min_violations = []
thin_rank = []

for b in books:
    chs = ch_by_book.get(b["id"], [])
    ls_count = sum(len(sec_by_ch.get(c["id"], [])) for c in chs)
    thin_rank.append((ls_count, chs, b["id"], b["title"]))
    if len(chs) < 2 or ls_count < 3:
        total_min_violations.append(
            f"VIOLATION: {b['id']} ({b['title']}) — {len(chs)} chapters / {ls_count} lessons"
        )

thin_rank.sort(key=lambda t: t[0])

print("=" * 70)
print(f"TOTALS: {len(books)} books / {len(chapters)} chapters / {len(sections)} sections")
print("=" * 70)

if total_min_violations:
    print("\n-- MINIMUM VIOLATIONS (<2ch or <3ls) --")
    for v in total_min_violations:
        print(v)
else:
    print("\nNO minimum violations: every book >=2 chapters and >=3 lessons")

print("\n-- THINNEST 20 BOOKS (by lesson count) --")
for ls_count, chs, bid, title in thin_rank[:20]:
    ch_titles = [c["title"] for c in chs]
    print(f"{ls_count:3d} ls / {len(chs)} ch | {bid} | {title}")
    for t in ch_titles:
        print(f"        - {t}")
