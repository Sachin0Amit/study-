#!/usr/bin/env python3
"""Splice the rewritten math-algebra-notation-manipulation topic into 02-algebra.ts,
replacing lines 21..167 (the old topic object) with the snippet content."""
import sys

TARGET = 'src/data/knowledge/subjects/mathematics-unified/02-algebra.ts'
SNIPPET = 'scripts/.tmp-unit2-snippet.ts'

with open(TARGET, 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open(SNIPPET, 'r', encoding='utf-8') as f:
    snippet = f.read().rstrip('\n')

# sanity: boundaries
assert lines[20].rstrip() == '  {', f"line 21 unexpected: {lines[20]!r}"
assert lines[166].rstrip() == '  },', f"line 167 unexpected: {lines[166]!r}"
assert lines[167].rstrip() == '  {', f"line 168 unexpected: {lines[167]!r}"

new = lines[:20] + [snippet + '\n'] + lines[167:]
with open(TARGET, 'w', encoding='utf-8') as f:
    f.writelines(new)
print(f"spliced: replaced lines 21-167 with {len(snippet.splitlines())} lines; new file has {len(new)} lines")
