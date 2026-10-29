#!/usr/bin/env python3
"""Trim pass 4 (final) for study-focused-diffuse-modes."""
F = '/home/z/my-project/src/data/knowledge/fields/x53-crossverify-pass.ts'
src = open(F, encoding='utf-8').read()

REPL = [
    ("The mapping is an analogy, not a one-to-one wiring diagram, but the direction is solid: releasing attention is a measurable brain state with a job to do, not the absence of work.",
     "The mapping is an analogy, not a wiring diagram, but the direction is solid: releasing attention is a measurable brain state with a job to do."),
    ("Mid-2000s imaging led by Michael Fox and colleagues showed the two families behave like a seesaw: task-positive networks up means the default-mode family down, and vice versa — anticorrelated signatures, and the seesaw tipping is the mode switch itself.",
     "Mid-2000s imaging led by Michael Fox and colleagues showed the two families behave like a seesaw — anticorrelated signatures: task-positive up means default-mode down, and the seesaw tipping is the mode switch itself."),
    ("And quality beats intensity: Marily Oppezzo and Daniel Schwartz at Stanford (2014) measured creative output rising about 60 percent on average while walking — even on a treadmill facing a blank wall, which rules out fitness and scenery. Free-ranging attention does the work: a walk without a phone is not a break from the problem, it is the second half of working on it.",
     "And quality beats intensity: Marily Oppezzo and Daniel Schwartz at Stanford (2014) measured creative output rising about 60 percent while walking — even on a treadmill facing a blank wall, which rules out fitness and scenery. A walk without a phone is not a break from the problem; it is the second half of working on it."),
    ("You sit at exactly one machine at a time.',",
     "One machine at a time.',"),
    ("'Student Laboratory Notebook: two hand-drawn pinball tables — FOCUSED MODE with bumpers packed close and a tight familiar lane, DIFFUSE MODE with bumpers far apart and long arcs between distant ideas; margin note: one gear at a time.'",
     "'Student Laboratory Notebook: two hand-drawn pinball tables — FOCUSED MODE with bumpers packed close, DIFFUSE MODE with bumpers far apart and long arcs between distant ideas; margin note: one gear at a time.'"),
    ("explain: 'Sweeping the experiments published from 1964 to 2007, the effect came out real but conditional: low-demand breaks on problems that focused work had loaded gained the most; a demanding break bought almost nothing.'",
     "explain: 'Sweeping the 1964-2007 experiments, the effect came out real but conditional: low-demand breaks on loaded problems gained the most; a demanding break bought almost nothing.'"),
    ("So the mid-block quick check does not cost its thirty seconds; it costs roughly a whole Pomodoro: the attentional octopus loses every tentacle at once.",
     "So one mid-block quick check costs not thirty seconds but roughly a whole Pomodoro: the attentional octopus loses every tentacle at once."),
    ("the derivation\\'s core comparison against correlated grinding.",
     "the core comparison against correlated grinding."),
]

missing = []
for old, new in REPL:
    if old in src:
        src = src.replace(old, new, 1)
        print('OK  ', old[:58].replace('\n', ' '))
    else:
        missing.append(old)
        print('MISS', old[:58].replace('\n', ' '))

open(F, 'w', encoding='utf-8').write(src)
print('---'); print('missing:', len(missing))
