#!/usr/bin/env python3
import re

p = "src/data/knowledge/fields/x60-library-org-deepening-pass.ts"
s = open(p).read()

old1 = "made state promises trustworthy — a institutional package historian Peter Dickson called the financial revolution, and one that Nassau William Senior\\u2019s successors traced directly to Britain\\u2019s eighteenth-century fiscal-military dominance."
new1 = "made state promises trustworthy — the institutional package historian Peter Dickson named the financial revolution, and the fiscal foundation of Britain\\u2019s eighteenth-century dominance."
assert old1 in s, "old1 not found"
s = s.replace(old1, new1)

old2 = "Britain, accidentally on de facto gold since Newton\\u2019s 1717 recoinage and formally from 1821, defined the pound in gold;"
new2 = "Britain sat on de facto gold from Newton\\u2019s 1717 recoinage — an accident of undervaluing silver — and defined the pound formally in gold from 1821;"
assert old2 in s, "old2 not found"
s = s.replace(old2, new2)

open(p, "w").write(s)
print("patched OK")
