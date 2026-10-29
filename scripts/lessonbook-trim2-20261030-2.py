#!/usr/bin/env python3
"""LESSONBOOK-20261030-2 pass 2: final -34w trim on NEW additions only."""
import sys

PATH = '/home/z/my-project/src/data/knowledge/fields/foundation-learning.ts'
src = open(PATH, encoding='utf-8').read()
RSQ = '\\u2019'   # literal escape in file
END = '\\u2013'   # literal en-dash escape in file

reps = [
    # history: savings-method clause
    ("the savings method asks how much faster material is learned a second time, and the savings he recorded were the shadow of retrieval at work.",
     "the savings method asks how much faster material relearns, and his savings were the shadow of retrieval at work."),
    # history: drop dissertation phrase
    ("then Arthur Gates ran the first large classroom experiment, his 1917 Columbia dissertation:",
     "then Arthur Gates ran the first large classroom experiment in 1917:"),
    # history: shorten caution
    ("One honest caution: recitation alone has not consistently helped adult learners in replications, hence the modern form adds feedback.",
     "One honest caution: recitation alone has not consistently helped adult learners, hence the modern form adds feedback."),
    # strategy: tighten close
    ("The gap is the fluency illusion at work: reward for feeling smooth today, billed at exam week.",
     "The gap is the fluency illusion at work: smooth today, billed at exam week."),
    # classroom: tighten opening
    ("material that had appeared on brief in-class multiple-choice quizzes was answered better on the real chapter exams and end-of-semester exams",
     "material quizzed on brief in-class quizzes was answered better on the real chapter exams and end-of-semester exams"),
    # classroom: .91 shorthand
    ("(.91 versus a lower average)", "(.91 versus lower)"),
    # classroom: drop redundant And
    ("And the objection that testing must mean more stress failed its own test:",
     "The objection that testing must mean more stress failed its own test:"),
    # quiz Q9 explain
    ("explain: 'Reading time ranged from 100% down to 20%; recall peaked at 60" + END + "80% recitation — and pushing further backfired. Recitation alone also has not consistently replicated with adult learners, hence the modern form adds feedback.',",
     "explain: 'Reading time ranged from 100% down to 20%; recall peaked at 60" + END + "80% recitation — and pushing further backfired. Recitation" + RSQ + "s adult-replication record is mixed, hence the modern form adds feedback.',"),
    # quiz Q10 stem
    ("q: 'When Karpicke, Butler and Roediger (2009) surveyed 177 college students, the shares naming rereading versus practicing retrieval as their #1 strategy were:',",
     "q: 'Karpicke, Butler and Roediger (2009) surveyed 177 college students: the shares naming rereading versus practicing retrieval as their #1 strategy were:',"),
]

fail = 0
for i, (old, new) in enumerate(reps, 1):
    n = src.count(old)
    if n != 1:
        print(f"REP {i}: count={n} — ABORT"); print("  head:", old[:90]); fail = 1
    else:
        src = src.replace(old, new); print(f"REP {i}: ok")

if fail:
    sys.exit(1)
open(PATH, 'w', encoding='utf-8').write(src)
print("Pass-2 trims applied.")
