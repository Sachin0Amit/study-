#!/usr/bin/env python3
"""LESSONBOOK-20261030-3 trims: bring fnd-interleaving from 3049 -> <=3000 words.
Only trims text added THIS run (never pre-existing prose). Reports each replacement."""
import sys

F = '/home/z/my-project/src/data/knowledge/fields/foundation-learning.ts'
src = open(F, encoding='utf-8').read()

# (old, new) pairs -- \\u2014 etc. are literal escape text in the TS file, kept as-is
edits = [
    # NewParaA trim 1 (drop the aside, tighten the study sentence)
    (
        "arguing that random presentation \\u2014 the arrangement every coach and textbook avoided \\u2014 would cost performance yet pay in retention and transfer; Shea and Morgan\\u2019s 1979 experiments confirmed his conceptualization, timing 72 college students learning three motor tasks in blocked or random order and finding the random groups ahead on delayed retention and on the most demanding transfer.",
        "arguing that random presentation would cost performance yet pay in retention and transfer; Shea and Morgan\\u2019s 1979 experiments confirmed his conceptualization: 72 college students learned three motor tasks in blocked or random order, and the random groups led on delayed retention and the most demanding transfer.",
    ),
    # NewParaA trim 2 (closing line)
    (
        "The paradox running through this topic is therefore not a quirk of mathematics practice but a named, general law.",
        "The paradox running through this topic is therefore a named, general law.",
    ),
    # NewParaB trims
    (
        "Two theories compete for the credit, and both leave the prescription unchanged.",
        "Two theories compete for the credit; both leave the prescription unchanged.",
    ),
    (
        "making their differences \\u2014 the exact features that decide which technique applies \\u2014 impossible to ignore",
        "making their differences \\u2014 the features that decide which technique applies \\u2014 impossible to ignore",
    ),
    (
        "interleaved viewers improved at induction, inferring the style of painters they had never seen, which suggests the mix teaches the category itself, not only its members.",
        "interleaved viewers improved at induction, inferring the style of painters they had never seen, suggesting the mix teaches the category itself.",
    ),
    # P9 extension trim
    (
        "periodic interleaved or blocked assignments across four months, both groups finishing on the same interleaved review assignment \\u2014 and on an unannounced test one month later the interleaved group scored 61% against 38% (d = 0.83). Teachers ran the intervention without special training and, surveyed before the results were known, said they would keep it.",
        "periodic interleaved or blocked assignments across four months, both groups finishing on the same interleaved review; one month later, on an unannounced test, the interleaved group scored 61% against 38% (d = 0.83). Teachers ran it without special training and, surveyed before the results were known, said they would keep it.",
    ),
    # Figure 2 caption trim
    (
        "Inside each session the mix trains discrimination; across the week the widening gaps turn every return into a spaced retrieval",
        "Inside each session the mix trains discrimination; across the week, widening gaps make every return a spaced retrieval",
    ),
    # Quiz Q9 option trim
    (
        "Shea and Morgan (1979), whose random-practice groups stumbled in practice but led on retention and transfer",
        "Shea and Morgan (1979), whose random-practice groups stumbled in practice yet led on the delayed test",
    ),
    # Quiz Q11 explain trim
    (
        "Rohrer, Dedrick, Hartwig and Cheung\\u2019s large naturalistic trial put the interleaved group 23 points ahead; teachers implemented it without training and supported it in a survey taken before the results were known.",
        "The four-month trial with 54 classes put the interleaved group 23 points ahead; teachers ran it without training and supported it in a survey taken before results were known.",
    ),
]

applied, skipped = 0, 0
for i, (old, new) in enumerate(edits, 1):
    if old in src:
        src = src.replace(old, new, 1)
        applied += 1
        print(f"OK   {i}")
    elif new in src:
        skipped += 1
        print(f"SKIP {i} (already applied)")
    else:
        skipped += 1
        print(f"MISS {i}: {old[:90]}...")

open(F, 'w', encoding='utf-8').write(src)
print(f"applied={applied} skipped/missed={skipped}")
sys.exit(0 if skipped == 0 else 1)
