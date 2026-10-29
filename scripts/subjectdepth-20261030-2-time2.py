#!/usr/bin/env python3
"""SUBJECTDEPTH-20261030-2 pass 2: remaining time-management patches (derivation, terms, quiz)."""
import sys

X52 = '/home/z/my-project/src/data/knowledge/fields/x52-crossverify-pass.ts'

def die(msg):
    print('ABORT:', msg); sys.exit(1)

def patch(old, new, tag):
    src = open(X52, encoding='utf-8').read()
    n = src.count(old)
    if n != 1:
        die(f'{tag}: count={n}')
    open(X52, 'w', encoding='utf-8').write(src.replace(old, new))
    print(f'{tag}: ok')

# --- derivation after worked example (anchor uses literal \' escape) ---
patch("""correct the next task\\'s estimate.',
          ],
        },""",
      """correct the next task\\'s estimate.',
          ],
        },
        {
          kind: 'derivation',
          title: 'Why plans break: the buffer arithmetic',
          statement:
            'The 70\u201380% rule is not a style tip \u2014 it falls out of the planning-fallacy multiplier. A page of algebra shows how much of a week can honestly be scheduled.',
          prerequisites: ['Percentages and ratios', 'Buehler\u2019s thesis study: predicted 33.9 days, actual 55.5'],
          steps: [
            {
              label: 'Step 1: Name the optimism multiplier',
              formula: '$$m = \\\\frac{\\\\text{actual}}{\\\\text{estimated}} = \\\\frac{55.5}{33.9} \\\\approx 1.64$$',
              explanation:
                'For the untracked thesis tasks, reality took about 1.64 times the best-guess estimate. Every untracked task in the plan carries a version of this multiplier.',
            },
            {
              label: 'Step 2: Apply it to a scheduled week',
              formula: '$$\\\\text{required} = m \\\\times f \\\\times A \\\\le A \\\\quad\\\\Rightarrow\\\\quad f \\\\le \\\\frac{1}{m} \\\\approx 0.61$$',
              explanation:
                'A week of available hours A, scheduled at fraction f, overruns the moment the multiplied requirement exceeds A. Filled entirely with 1.64-times tasks, the survivable schedule is f \u2264 0.61 \u2014 scheduling 100% guarantees failure.',
            },
            {
              label: 'Step 3: Tracking shrinks the multiplier',
              formula: '$$m_{\\\\text{tracked}} \\\\approx 1.1$$',
              explanation:
                'Tasks repeated weekly with recorded actuals converge toward their estimate: the scenario error was the unknown, and the record removed it.',
            },
            {
              label: 'Step 4: Blend and schedule',
              formula: '$$\\\\bar{m} \\\\approx 1.3 \\\\quad\\\\Rightarrow\\\\quad f^{*} = \\\\frac{1}{\\\\bar{m}} \\\\approx 0.75$$',
              explanation:
                'A realistic week mixes tracked (m \u2248 1.1) and untracked (m \u2248 1.6) work. At a blended m \u2248 1.3 the survivable schedule is about 0.75 \u2014 the lesson\u2019s 70\u201380% band, now with its derivation.',
            },
          ],
          result:
            'Schedule every hour and a 1.3-average multiplier breaks the plan by midweek; schedule 70\u201380% and the buffer absorbs the error. Slack is not softness \u2014 it is the expected value of your estimation error, paid forward.',
        },""",
      'T-derivation')

# --- terms 6 -> 9 ---
patch("""            { term: 'Weekly review', def: 'A fixed weekly session checking plan against actual, recalibrating estimates and updating the term map.' },
          ],""",
      """            { term: 'Weekly review', def: 'A fixed weekly session checking plan against actual, recalibrating estimates and updating the term map.' },
            { term: 'Timeboxing', def: 'Assigning every block of the week a named job in advance; broken blocks are re-cut, not abandoned.' },
            { term: 'Outside view', def: 'Estimating from the record of similar tasks \u2014 your tracked actuals \u2014 instead of the story of this one.' },
            { term: 'Perceived control of time', def: 'The felt sense that your hours are yours to direct; Macan\u2019s 1990 finding tied it to grades and lower stress.' },
          ],""",
      'T-terms')

# --- quiz 4 -> 8 ---
patch("""              explain: 'Procrastination is emotion regulation; shrinking the start past the aversion threshold gets you into the task, where motivation follows progress.',
            },
          ],
        },""",
      """              explain: 'Procrastination is emotion regulation; shrinking the start past the aversion threshold gets you into the task, where motivation follows progress.',
            },
            {
              q: 'In Buehler, Griffin and Ross\u2019s thesis study, best-guess estimates averaged 33.9 days and worst-case guesses 48.6. The actual average completion was:',
              options: ['30.1 days \u2014 better than predicted', '33.9 days \u2014 right on the best guess', '48.6 days \u2014 exactly the worst case', '55.5 days \u2014 worse than their own worst-case estimates'],
              answer: 3,
              explain: 'Reality beat the worst case: 55.5 days, with only 29.7 percent finishing by their best-guess date. A plan describes things going right \u2014 so plan from tracked actuals, not scenarios.',
            },
            {
              q: 'Macan and colleagues (1990) found the time-management factor that best predicted student outcomes was:',
              options: ['Total hours spent studying', 'Perceived control of time', 'Number of planning apps used', 'Earliest waking hour'],
              answer: 1,
              explain: 'Perceived control of time \u2014 not raw hours \u2014 tracked grades and lower stress, which is why the weekly plan and its review matter more than marathon sessions.',
            },
            {
              q: 'Your week holds 20 study hours, all scheduled with untracked tasks running a 1.64\u00d7 optimism multiplier. The arithmetic says:',
              options: ['The plan survives if you concentrate', 'You finish 12 hours in and coast', 'Required hours are 1.64 \u00d7 20 \u2248 33 \u2014 about a third of the plan dies', 'The multiplier only applies to essays'],
              answer: 2,
              explain: 'Required = m \u00d7 f \u00d7 A = 1.64 \u00d7 20 \u2248 33 hours against 20 available. Survivable scheduling for untracked work is f \u2264 1/m \u2248 0.61 \u2014 hence the 70\u201380% band for blended weeks.',
            },
            {
              q: 'In the weekly timeboxing system, when reality breaks a planned block the correct move is:',
              options: ['Abandon the plan for the week', 'Re-cut the remaining blocks \u2014 the break is estimation data, not a verdict', 'Double tomorrow\u2019s load as punishment', 'Switch to cramming'],
              answer: 1,
              explain: 'Newport\u2019s rule: every minute is a block and broken blocks are re-drawn; the weekly review then feeds the corrected estimates forward.',
            },
          ],
        },""",
      'T-quiz')

print('time-management pass-2 done')
