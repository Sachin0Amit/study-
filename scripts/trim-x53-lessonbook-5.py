#!/usr/bin/env python3
"""Trim pass 5 (final shave to <=3000)."""
F = '/home/z/my-project/src/data/knowledge/fields/x53-crossverify-pass.ts'
src = open(F, encoding='utf-8').read()

REPL = [
    ("described a default mode of brain function: regions — midline frontal and parietal areas among them — that burn MORE oxygen at quiet rest than during outward concentration.",
     "described a default mode of brain function: regions — midline frontal and parietal among them — burning MORE oxygen at rest than during outward concentration."),
    ("The lab confirms the folklore. A 2009 meta-analysis in Psychological Bulletin — Uschi Sio and Thomas Ormerod sweeping the usable incubation experiments published between 1964 and 2007 — found the effect real but conditional: breaks pay out when they are genuinely low-demand and the problem needs a new idea, not more grind; a demanding break buys almost nothing.",
     "The lab confirms the folklore: a 2009 Psychological Bulletin meta-analysis — Uschi Sio and Thomas Ormerod sweeping the usable incubation experiments from 1964 to 2007 — found the effect real but conditional. Breaks pay out when genuinely low-demand and the problem needs a new idea, not more grind; a demanding break buys almost nothing."),
    ("q: 'Ten minutes into a 25-minute Pomodoro you take one quick phone check.",
     "q: 'Ten minutes into a Pomodoro you take one quick phone check."),
    ("q: 'What does the Sio and Ormerod (2009) meta-analysis of incubation experiments say about breaks?'",
     "q: 'What does the Sio and Ormerod (2009) incubation meta-analysis say about breaks?'"),
    ("then a 15-minute genuinely low-demand break — walk, nap. Each cycle is an independent trial with p = 0.5, and that independence is the structural difference",
     "then a 15-minute low-demand break — walk, nap. Each cycle is an independent trial with p = 0.5; that independence is the structural difference"),
    ("The kill-the-notifications step has hard numbers behind it:",
     "The kill-the-notifications step has numbers behind it:"),
    ("each cycle independently offering p = 0.5 of a fresh approach",
     "each independently offering p = 0.5 of a fresh approach"),
]

missing = []
for old, new in REPL:
    if old in src:
        src = src.replace(old, new, 1); print('OK  ', old[:56])
    else:
        missing.append(old); print('MISS', old[:56])
open(F, 'w', encoding='utf-8').write(src)
print('---'); print('missing:', len(missing))
