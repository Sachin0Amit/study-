#!/usr/bin/env python3
"""LESSONBOOK-20261030-3 trims pass 2: 3014 -> ~2994. Only this run's additions touched."""
import sys

F = '/home/z/my-project/src/data/knowledge/fields/foundation-learning.ts'
src = open(F, encoding='utf-8').read()

edits = [
    (
        "coining the term desirable difficulties in a 1994 chapter titled",
        "coining desirable difficulties in a 1994 chapter titled",
    ),
    (
        "a successful retrieval made while the answer feels furthest away builds the most storage strength",
        "a retrieval made while the answer feels furthest away builds the most storage strength",
    ),
    (
        "collects another set of retrieval routes, so the skill becomes callable from more angles.",
        "collects another set of retrieval routes, so the skill is callable from more angles.",
    ),
    (
        "Discriminative contrast holds instead that interleaving parks confusable neighbours side by side in time",
        "Discriminative contrast holds that interleaving parks confusable neighbours side by side in time",
    ),
    # sketch caption tighten
    (
        "\\u2014 Wednesday\\u2019s first square circled \\u201cfrom last week,\\u201d and a margin tally reading A\\u00d76 \\u00b7 B\\u00d76 \\u00b7 C\\u00d76.",
        "\\u2014 one square circled \\u201cfrom last week,\\u201d margin tally A\\u00d76 \\u00b7 B\\u00d76 \\u00b7 C\\u00d76.",
    ),
    # figure caption tighten
    (
        "cycling the same three confusable categories twice. Wednesday carries material from last week, which is itself spacing, and the running tally",
        "cycling the same three categories twice. Wednesday carries material from last week — which is itself spacing — and the running tally",
    ),
    # quiz q9 explain tighten
    (
        "The 1979 motor-skill experiments demonstrated the effect and gave it the name; their results supported Battig\\u2019s earlier conceptualization.",
        "The 1979 motor-skill experiments demonstrated and named the effect; their results supported Battig\\u2019s earlier conceptualization.",
    ),
    # quiz q11 stem tighten
    (
        "In the cluster randomized trial spanning four months and 54 seventh-grade classes, the unannounced test one month after review ended:",
        "In the four-month cluster randomized trial with 54 seventh-grade classes, the unannounced test one month after review ended:",
    ),
]

applied, missed = 0, []
for i, (old, new) in enumerate(edits, 1):
    if old in src:
        src = src.replace(old, new, 1)
        applied += 1
        print(f"OK   {i}")
    elif new in src:
        print(f"SKIP {i} (already applied)")
    else:
        missed.append(i)
        print(f"MISS {i}: {old[:80]}...")

open(F, 'w', encoding='utf-8').write(src)
print(f"applied={applied} missed={missed}")
sys.exit(0 if not missed else 1)
