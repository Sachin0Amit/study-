#!/usr/bin/env python3
"""Trim pass 3 for study-focused-diffuse-modes (LESSONBOOK 20261030). Idempotent-ish: reports each replacement."""
import sys

F = '/home/z/my-project/src/data/knowledge/fields/x53-crossverify-pass.ts'
src = open(F, encoding='utf-8').read()

REPL = [
    # derivation labels
    ("label: 'Step 1: Decide what \"solving\" reduces to',",
     "label: 'Step 1: reduce solving to escape',"),
    ("label: 'Step 2: Model grinding as correlated retries',",
     "label: 'Step 2: grinding is correlated retries',"),
    ("label: 'Step 3: Model the load-then-switch cycle',",
     "label: 'Step 3: the load-then-switch cycle',"),
    ("label: 'Step 4: Expectation of a geometric wait',",
     "label: 'Step 4: the geometric wait',"),
    ("label: 'Step 5: Compare, then caveat honestly',",
     "label: 'Step 5: compare, then caveat',"),
    # explanations
    ("'Execution time — writing out the solution once a fresh approach exists — is identical under both strategies, so the comparison lives entirely in the time-to-escape. Mode strategy matters most exactly where you are stuck.'",
     "'Writing out the solution once a fresh approach exists takes the same time either way, so the comparison lives entirely in the time-to-escape.'"),
    ("'If each focused hour independently offered probability q of surfacing a new approach, the expectation would be 1/q — ten hours at q = 0.1. Einstellung makes even that optimistic: successive hours re-run the same groove, so retries are correlated and effective q keeps falling. Grinding re-samples one bad idea.'",
     "'If each focused hour independently offered probability q of surfacing a new approach, the expectation would be 1/q — ten hours at q = 0.1. Einstellung makes even that optimistic: hours re-run the same groove, so retries correlate and effective q keeps falling.'"),
    ("'One cycle: 25 minutes of honest focused loading, then a 15-minute genuinely low-demand break — walk, nap — exactly the conditions under which incubation pays out. Each cycle is an independent trial with p = 0.5, and independence is the structural difference: the diffuse mode does not inherit the groove.'",
     "'One cycle: 25 minutes of honest focused loading, then a 15-minute genuinely low-demand break — walk, nap. Each cycle is an independent trial with p = 0.5, and that independence is the structural difference: the diffuse mode does not inherit the groove.'"),
    ("'A geometric random variable with success probability p has expected wait 1/p trials — two cycles, eighty minutes of wall-clock time, to escape.'",
     "'Success probability p gives expected wait 1/p trials — two cycles, eighty minutes of wall-clock time.'"),
    ("'Even against the generous independent-retry version of grinding, switching wins several times over; a pessimistic p = 0.1 gives E = 400 minutes, still under ten grinding hours while banking focused time elsewhere. The constants are illustrative dials, not measurements — what transfers is the structure: switches decorrelate attempts.'",
     "'Even against generous independent-retry grinding, switching wins several times over; a pessimistic p = 0.1 gives E = 400 minutes, still under ten grinding hours. The constants are illustrative dials, not measurements — what transfers is the structure: switches decorrelate attempts.'"),
    ("'Load-then-switch beats open-ended grinding by roughly an order of magnitude in expected time-to-escape: each switch is an independent draw from a fresh distribution, each grinding hour a re-sample of the same Einstellung groove. When stuck: load honestly, switch deliberately, let the geometry work.'",
     "'Load-then-switch beats grinding by roughly an order of magnitude in expected time-to-escape: each switch draws independently from a fresh distribution, each grinding hour re-samples the same Einstellung groove. When stuck: load honestly, switch deliberately, let the geometry work.'"),
    # quiz
    ("'Breaks buy the most when they are genuinely low-demand and the problem was loaded by prior focused effort'",
     "'Breaks pay off most when genuinely low-demand and the problem was loaded by focused effort'"),
    ("'Breaks help only for physical, non-mental tasks'",
     "'Breaks help only for physical tasks'"),
    ("Per Gloria Mark\\'s interruption research, the realistic cost is:",
     "Per Gloria Mark\\'s research, the realistic cost is:"),
    ("'About thirty seconds — the length of the check itself'",
     "'About thirty seconds'"),
    ("'Roughly the rest of the block — refocusing after an interruption averaged about 23 minutes'",
     "'Roughly the rest of the block — refocusing averaged about 23 minutes'"),
    ("'Nothing, as long as the check was study-related'",
     "'Nothing if it was study-related'"),
    ("q: 'A stuck problem gets cycles of 25 minutes of focused loading plus a 15-minute walk, and each cycle independently offers p = 0.5 of the diffuse mode returning a fresh approach. The expected number of cycles to escape — and the expected minutes — are:',",
     "q: 'A stuck problem gets cycles of 25 focused minutes plus a 15-minute walk, each cycle independently offering p = 0.5 of a fresh approach. Expected cycles to escape — and expected minutes?',"),
    # pomodoro extension
    ("shadowed workers with stopwatches and found refocusing after an interruption took an average of 23 minutes and 15 seconds — while people under interruption pressure worked faster and reported more stress. So the mid-block quick check does not cost its thirty seconds; it costs roughly a whole Pomodoro, because the attentional octopus loses every tentacle at once.",
     "shadowed workers with stopwatches and found refocusing after an interruption took an average of 23 minutes and 15 seconds. So the mid-block quick check does not cost its thirty seconds; it costs roughly a whole Pomodoro: the attentional octopus loses every tentacle at once."),
    # terms
    ("'Regions more active during quiet rest than outward concentration (Raichle, 2001); the diffuse mode\\'s closest hardware cousin.'",
     "'Regions more active at quiet rest than during outward concentration (Raichle, 2001); the diffuse mode\\'s hardware cousin.'"),
    ("'The price of an interruption — about 23 minutes on average to return to the original task (Mark et al., UC Irvine).'",
     "'The price of an interruption — about 23 minutes on average to return to the task (Mark et al., UC Irvine).'"),
]

missing = []
for old, new in REPL:
    if old in src:
        src = src.replace(old, new, 1)
        print('OK  ', old[:60].replace('\n', ' '))
    else:
        missing.append(old)
        print('MISS', old[:60].replace('\n', ' '))

open(F, 'w', encoding='utf-8').write(src)
print('---')
print('missing:', len(missing))
sys.exit(1 if missing else 0)
