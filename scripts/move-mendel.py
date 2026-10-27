#!/usr/bin/env python3
"""CROSSVERIFY-20261026-6: fix Genetics & Heredity Ch1 section order.

USER RULE 5 (foundations-first): Mendel's Laws must render as section 1.1
of Classical & Transmission Genetics, before Meiosis & Linkage (which
lists Mendel's Laws as its prerequisite). The x14-heredity-biotech spread
sits earlier in life-sciences.ts than the main-array Mendel object, so the
rendered order was meiosis, beyond-mendel, mendel. This script moves ONLY
the bio-genetics-mendel topic object (field 'Genetics & Heredity', branch
'Classical Genetics' — it can affect no other book) to just before the
x14 spread comments. No ids change; section numbers re-sequence only.
"""
import re, sys

PATH = 'src/data/knowledge/fields/life-sciences.ts'
text = open(PATH, encoding='utf-8').read()

# 1) locate the mendel topic object: from the comment line immediately
#    above `id: 'bio-genetics-mendel'` back to its opening brace, forward
#    to the matching `    },` at object depth.
lines = text.split('\n')
id_idx = next(i for i, l in enumerate(lines) if "id: 'bio-genetics-mendel'" in l)
start = id_idx - 1  # the `{` line
assert lines[start].strip() == '{', f'unexpected opener at {start}: {lines[start]!r}'
# walk back over the separator comment
sep = start - 1
assert lines[sep].startswith('    // ---'), f'unexpected line above opener: {lines[sep]!r}'
start = sep
# the object's own closer is the first line indented exactly `    },`
# (nested closers sit deeper: 6 or 8 spaces)
end = None
for i in range(start + 2, len(lines)):
    if lines[i] == '    },':
        end = i
        break
assert end is not None, 'mendel object end not found'
block = lines[start:end + 1]
# sanity: block = [comment, '{', id-line, ..., closer]
assert lines[start + 1].strip() == '{' and "id: 'bio-genetics-mendel'" in block[2], block[2]
assert len(block) == 126, f'unexpected block length {len(block)}; inspect manually'

# 2) remove the block (leaving the comment that precedes the next topic)
del lines[start:end + 1]

# 3) insert before the x14 spread comment
anchor = next(i for i, l in enumerate(lines) if '// X14 exam-syllabus pass' in l)
ins = block + ['    // ------------------------------------------------------------------']
lines[anchor:anchor] = ins

open(PATH, 'w', encoding='utf-8').write('\n'.join(lines))
print(f'moved bio-genetics-mendel ({len(block)} lines) to before x14 spread (anchor line {anchor})')
