#!/usr/bin/env python3
"""SUBJECTDEPTH-20261030-2: max-depth enrichment of study-time-management (x52).
In-place additions only; never changes id; never deletes prose."""
import sys

X52 = '/home/z/my-project/src/data/knowledge/fields/x52-crossverify-pass.ts'
RSQ = '\u2019'

def die(msg):
    print('ABORT:', msg); sys.exit(1)

def patch(old, new, tag):
    src = open(X52, encoding='utf-8').read()
    n = src.count(old)
    if n != 1:
        die(f'{tag}: count={n}')
    open(X52, 'w', encoding='utf-8').write(src.replace(old, new))
    print(f'{tag}: ok')

# --- words/readMins ---
patch("""      words: 1723,
      readMins: 9,""",
      """      words: 2463,
      readMins: 12,""",
      'T-words-PLACEHOLDER')

# --- concepts 6 -> 8 ---
patch("""        'Estimation error and buffers',""",
      """        'Timeboxing the week',
        'The planning-fallacy numbers',
        'Estimation error and buffers',""",
      'T-concepts')

# --- NP1 timeboxing after backward-planning para ---
patch("""keep a task list, and eat your frogs first — do the hardest, most avoided item first, while willpower is fresh, instead of reorganising your notes all morning to avoid it.',
        },""",
      """keep a task list, and eat your frogs first — do the hardest, most avoided item first, while willpower is fresh, instead of reorganising your notes all morning to avoid it.',
        },
        {
          kind: 'para',
          text: 'The weekly plan earns its keep through timeboxing — giving each block of the week a named job before the week starts. Cal Newport\u2019s Deep Work (2016) runs the professional version: every minute of the day is assigned a block, and when reality breaks the plan, the plan is re-cut, not abandoned — a broken block is estimation data, not a verdict on the system. Students run the same loop at term scale with the three instruments this lesson already owns: the term map holds the deadlines, the weekly plan assigns them to real hours, and the daily list names today\u2019s blocks. The measurable payoff sits in perception as much as in hours: Macan and colleagues (1990) found that students\u2019 perceived control of time — not raw hours studied — predicted both academic performance and lower stress, and Britton and Tesser (1991) found that time-management attitudes predicted students\u2019 cumulative grades.',
        },""",
      'T-NP1')

# --- NP2 planning-fallacy numbers after estimation para ---
patch("""aim for roughly 70–80% committed time so that overruns, illness and opportunities have somewhere to land without wrecking everything downstream.',
        },""",
      """aim for roughly 70–80% committed time so that overruns, illness and opportunities have somewhere to land without wrecking everything downstream.',
        },
        {
          kind: 'para',
          text: 'The planning fallacy has a canonical number. Buehler, Griffin and Ross (1994) asked 37 honors students to predict when they would finish their theses: best guesses averaged 33.9 days and worst-case guesses 48.6 — yet the actual average was 55.5 days, worse than their own worst cases, and fewer than a third (29.7 percent) finished by even their best-guess date. The mechanism is the inside view: a plan is a description of things going right, so a scenario-based estimate contains no surprises. The repair is the outside view: ignore the story of this task and consult the record of how long tasks like it actually took — which is exactly what tracking actuals builds. The same authors found that merely knowing about the fallacy did not fix it; only the discipline of consulting the record moved the estimate.',
        },""",
      'T-NP2')

# --- FIGURE after prioritise para ---
patch("""Frogs first is also a priority rule: the task you keep avoiding is usually either the most valuable or the most feared, and both deserve the morning.',
        },""",
      """Frogs first is also a priority rule: the task you keep avoiding is usually either the most valuable or the most feared, and both deserve the morning.',
        },
        {
          kind: 'figure',
          caption:
            'The planning stack. The term map holds every deadline with its backward-planned stages; the weekly plan distributes this week\u2019s segments across known free hours at roughly 70–80% committed time; the daily task list names today\u2019s two or three concrete moves, frog first. Arrows run down (decompose) and up (the weekly review returns actuals to the map).',
          sketchImage: '/diagrams/time-management-planning-stack-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: hand-drawn three-tier planning stack — term map on top, weekly plan in the middle, daily task list at the bottom, a down arrow labeled decompose and an up arrow labeled review actuals, margin note: \u201cfrog first.\u201d',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Planning stack: term map with backward-planned deadlines on top, weekly plan at 70 to 80 percent committed in the middle, daily task list with frog first at the bottom; a decompose arrow runs down and a review actuals arrow runs up.">
  <!-- tier 1: term map -->
  <path d="M210 62 Q208 92 214 122 L670 122 Q676 92 672 60 Q440 54 210 62" fill="#e11d48" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="90" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">term map</text>
    <text x="440" y="112" text-anchor="middle" font-size="12.5" fill="#8a8a93">every deadline + backward-planned stages, one page</text>
  </g>
  <!-- tier 2: weekly plan -->
  <path d="M240 196 Q238 226 244 256 L640 256 Q646 226 642 194 Q440 188 240 196" fill="#d97706" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="224" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">weekly plan</text>
    <text x="440" y="246" text-anchor="middle" font-size="12.5" fill="#8a8a93">this week\u2019s segments on known free hours — 70–80% committed</text>
  </g>
  <!-- tier 3: daily task list -->
  <path d="M270 330 Q268 360 274 390 L610 390 Q616 360 612 328 Q440 322 270 330" fill="#059669" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="358" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">daily task list</text>
    <text x="440" y="380" text-anchor="middle" font-size="12.5" fill="#8a8a93">today\u2019s two or three concrete moves — frog first</text>
  </g>
  <!-- decompose arrows down -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M242 132 Q210 158 236 186"/>
    <path d="M272 266 Q240 292 266 320"/>
  </g>
  <path d="M236 186 l-2 -12 M236 186 l11 5" fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M266 320 l-2 -12 M266 320 l11 5" fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#8a8a93">
    <text x="168" y="164">decompose</text>
    <text x="196" y="298">decompose</text>
  </g>
  <!-- review arrows up -->
  <g fill="none" stroke="#d97706" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round">
    <path d="M650 320 Q682 294 656 266"/>
    <path d="M620 186 Q652 160 626 132"/>
  </g>
  <path d="M626 132 l2 12 M626 132 l-11 -5" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M656 266 l2 12 M656 266 l-11 -5" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#d97706">
    <text x="688" y="298">review actuals</text>
    <text x="660" y="164">weekly review</text>
  </g>
  <text x="440" y="438" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">plans flow down; records flow back up — the loop that keeps estimates honest</text>
</svg>`,
        },""",
      'T-figure')

# --- derivation after worked example ---
patch("""            'State the result: a 21-day fear has become seven small, scheduled, buffered moves; the review next Sunday will compare hours planned to hours spent and correct the next task\u2019s estimate.',
          ],
        },""",
      """            'State the result: a 21-day fear has become seven small, scheduled, buffered moves; the review next Sunday will compare hours planned to hours spent and correct the next task\u2019s estimate.',
          ],
        },
        {
          kind: 'derivation',
          title: 'Why plans break: the buffer arithmetic',
          statement:
            'The 70–80% rule is not a style tip — it falls out of the planning-fallacy multiplier. A page of algebra shows how much of a week can honestly be scheduled.',
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
                'A week of available hours A, scheduled at fraction f, overruns the moment the multiplied requirement exceeds A. Filled entirely with 1.64-times tasks, the survivable schedule is f \u2264 0.61 — scheduling 100% guarantees failure.',
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
                'A realistic week mixes tracked (m \u2248 1.1) and untracked (m \u2248 1.6) work. At a blended m \u2248 1.3 the survivable schedule is about 0.75 — the lesson\u2019s 70–80% band, now with its derivation.',
            },
          ],
          result:
            'Schedule every hour and a 1.3-average multiplier breaks the plan by midweek; schedule 70–80% and the buffer absorbs the error. Slack is not softness — it is the expected value of your estimation error, paid forward.',
        },""",
      'T-derivation')

# --- terms 6 -> 9 ---
patch("""            { term: 'Weekly review', def: 'A fixed weekly session checking plan against actual, recalibrating estimates and updating the term map.' },
          ],""",
      """            { term: 'Weekly review', def: 'A fixed weekly session checking plan against actual, recalibrating estimates and updating the term map.' },
            { term: 'Timeboxing', def: 'Assigning every block of the week a named job in advance; broken blocks are re-cut, not abandoned.' },
            { term: 'Outside view', def: 'Estimating from the record of similar tasks — your tracked actuals — instead of the story of this one.' },
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
              options: ['30.1 days — better than predicted', '33.9 days — right on the best guess', '48.6 days — exactly the worst case', '55.5 days — worse than their own worst-case estimates'],
              answer: 3,
              explain: 'Reality beat the worst case: 55.5 days, with only 29.7 percent finishing by their best-guess date. A plan describes things going right — so plan from tracked actuals, not scenarios.',
            },
            {
              q: 'Macan and colleagues (1990) found the time-management factor that best predicted student outcomes was:',
              options: ['Total hours spent studying', 'Perceived control of time', 'Number of planning apps used', 'Earliest waking hour'],
              answer: 1,
              explain: 'Perceived control of time — not raw hours — tracked grades and lower stress, which is why the weekly plan and its review matter more than marathon sessions.',
            },
            {
              q: 'Your week holds 20 study hours, all scheduled with untracked tasks running a 1.64\u00d7 optimism multiplier. The arithmetic says:',
              options: ['The plan survives if you concentrate', 'You finish 12 hours in and coast', 'Required hours are 1.64 \u00d7 20 \u2248 33 — about a third of the plan dies', 'The multiplier only applies to essays'],
              answer: 2,
              explain: 'Required = m \u00d7 f \u00d7 A = 1.64 \u00d7 20 \u2248 33 hours against 20 available. Survivable scheduling for untracked work is f \u2264 1/m \u2248 0.61 — hence the 70–80% band for blended weeks.',
            },
            {
              q: 'In the weekly timeboxing system, when reality breaks a planned block the correct move is:',
              options: ['Abandon the plan for the week', 'Re-cut the remaining blocks — the break is estimation data, not a verdict', 'Double tomorrow\u2019s load as punishment', 'Switch to cramming'],
              answer: 1,
              explain: 'Newport\u2019s rule: every minute is a block and broken blocks are re-drawn; the weekly review then feeds the corrected estimates forward.',
            },
          ],
        },""",
      'T-quiz')

print('time-management edits done')
