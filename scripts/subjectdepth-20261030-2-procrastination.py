#!/usr/bin/env python3
"""SUBJECTDEPTH-20261030-2: max-depth enrichment of study-procrastination-zombies (x53)
and study-time-management (x52). In-place additions only; never changes ids; never deletes prose."""
import sys

X53 = '/home/z/my-project/src/data/knowledge/fields/x53-crossverify-pass.ts'
X52 = '/home/z/my-project/src/data/knowledge/fields/x52-crossverify-pass.ts'

RSQ = '\u2019'   # real right single quote for new text
LDQ = '\u201c'
RDQ = '\u201d'

def die(msg):
    print('ABORT:', msg); sys.exit(1)

def patch(path, old, new, tag):
    src = open(path, encoding='utf-8').read()
    n = src.count(old)
    if n != 1:
        die(f'{tag}: count={n}')
    open(path, 'w', encoding='utf-8').write(src.replace(old, new))
    print(f'{tag}: ok')

# ================= PROCRASTINATION (x53) =================

# --- concepts 8 -> 10 ---
patch(X53,
    """        'Willpower economics',""",
    """        'The evidence: 691 correlations',
        'Willpower economics',""",
    'P-concepts-a')
patch(X53,
    """        'Process, not product',""",
    """        'Deadlines as precommitment',
        'Process, not product',""",
    'P-concepts-b')

# --- NP1 evidence para after mechanism para ---
patch(X53,
    """Some students even convert it into identity or pride ("I crammed it in one night"), which is the loop wearing a costume.',
        },""",
    """Some students even convert it into identity or pride ("I crammed it in one night"), which is the loop wearing a costume.',
        },
        {
          kind: 'para',
          text: 'The numbers back the diagnosis. Piers Steel""" + RSQ + """s 2007 meta-analysis in Psychological Bulletin swept 691 correlations and found the strongest predictors of procrastination are exactly this anatomy: task aversiveness (the ouch), impulsiveness (the escape), low self-efficacy, and the self-control and organization facets of conscientiousness — while popular suspects such as neuroticism and sensation-seeking turned out weak. Prevalence follows: about one adult in five identifies as a chronic procrastinator (Harriott and Ferrari, 1996), and university rates run far higher. The costs are not symmetric in time, either. Tice and Baumeister (1997) tracked students across a semester: procrastinators reported less stress and illness early on — the short-term relief is real — but by term""" + RSQ + """s end they reported more stress and more illness, the bill arriving exactly when the deadlines did. Procrastination is a loan with a schedule.',
        },""",
    'P-NP1')

# --- NP2 deadlines para + FIGURE after anatomy para ---
patch(X53,
    """Belief is fed by community (classmates who run the same system) and by evidence (a wall calendar of finished blocks).',
        },""",
    """Belief is fed by community (classmates who run the same system) and by evidence (a wall calendar of finished blocks).',
        },
        {
          kind: 'para',
          text: 'The fix has numbers too. Dan Ariely and Klaus Wertenbroch (2002) let a class set its own paper deadlines: students who precommitted to evenly spaced due dates beat those who left everything to the end — though the best grades of all belonged to students given externally spaced deadlines, and a late penalty shrank the lateness that remained. Self-control helps; structure helps more. The if-then plans owned by the habits lesson passed a procrastination-specific test as well: Owens and colleagues (2008) found that students who formed implementation intentions were nearly eight times more likely to show up for the appointment they were avoiding, and in Gollwitzer and Brandst\u00e4tter\u2019s studies difficult goals were roughly three times likelier to be completed once furnished with if-then plans. Precommitment is not a personality trait; it is machinery you can bolt on tonight.',
        },
        {
          kind: 'figure',
          caption:
            'The zombie loop and its rewrite. Clockwise: a cue launches the loop, the anticipatory discomfort flashes, the routine escapes it, the reward pays relief — and the belief that the loop works deepens the track. The rewrite spends willpower at exactly one point: the routine is shrunk to one Pomodoro, committed to process (25 minutes), not product (finish the assignment), and the loop begins paying work instead of escape.',
          sketchImage: '/diagrams/procrastination-zombie-loop-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: hand-drawn circular habit-loop diagram — cue at the top, pain marked anticipatory discomfort, routine: escape, reward: relief, belief arc closing the circle, and a kitchen-timer Pomodoro breaking the loop with a margin note: """ + LDQ + """process, not product.""" + RDQ + """',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Circular habit loop: cue launches the loop, anticipatory discomfort flashes, routine escapes, reward pays relief, belief closes the circle; a Pomodoro wedge breaks the loop by committing to process, not product.">
  <!-- wobbly loop circle -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round" opacity="0.8">
    <path d="M300 84 Q120 130 106 240 Q96 350 300 398 Q506 350 496 240 Q486 132 300 84"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.45" stroke-linecap="round">
    <path d="M302 78 Q116 126 100 240 Q90 356 300 404 Q512 354 502 240 Q492 128 302 78"/>
  </g>
  <!-- clockwise arrows -->
  <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M180 118 l-12 10 M180 118 l2 15"/>
    <path d="M102 300 l-2 15 M102 300 l12 8"/>
    <path d="M420 366 l12 -9 M420 366 l-3 -15"/>
    <path d="M497 180 l3 -15 M497 180 l-13 -7"/>
  </g>
  <!-- nodes -->
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="300" y="66" font-size="16" fill="currentColor" font-weight="bold">cue</text>
    <text x="300" y="84" font-size="12" fill="#8a8a93">the phone buzzes, the book opens</text>
    <text x="594" y="196" font-size="15" fill="#e11d48">anticipatory discomfort</text>
    <text x="594" y="214" font-size="12" fill="#8a8a93">a subtle ouch — then it fades</text>
    <text x="594" y="292" font-size="15" fill="currentColor" font-weight="bold">routine: escape</text>
    <text x="594" y="310" font-size="12" fill="#8a8a93">laptop, feed, another shelf of notes</text>
    <text x="300" y="432" font-size="15" fill="#059669" font-weight="bold">reward: relief</text>
    <text x="300" y="450" font-size="12" fill="#8a8a93">a small dollop of pleasure, twice</text>
    <text x="30" y="240" font-size="15" fill="currentColor" text-anchor="start" transform="rotate(-90 30 240)">belief: the loop works</text>
  </g>
  <text x="300" y="248" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#8a8a93">the zombie loop</text>
  <!-- the rewrite wedge -->
  <path d="M212 300 Q300 250 392 300" fill="none" stroke="#d97706" stroke-width="2.4" stroke-dasharray="8 7" stroke-linecap="round"/>
  <path d="M392 300 l-12 -1 M392 300 l-6 -11" fill="none" stroke="#d97706" stroke-width="2.4" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="300" y="288" font-size="14" fill="#d97706" font-weight="bold">the rewrite: one Pomodoro</text>
    <text x="300" y="305" font-size="12.5" fill="#d97706">process, not product — 25 minutes, then a real reward</text>
  </g>
  <!-- willpower note -->
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="676" y="98" font-size="13.5" fill="currentColor">willpower is spent once:</text>
    <text x="676" y="116" font-size="13.5" fill="currentColor">at the reaction to the cue</text>
    <path d="M672 130 Q640 168 596 186" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-dasharray="4 6" stroke-linecap="round"/>
  </g>
  <text x="452" y="466" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">cue → discomfort → escape → relief → belief — rewritten at the only point effort is cheap</text>
</svg>`,
        },""",
    'P-NP2+figure')

# --- derivation after worked example ---
patch(X53,
    """          'State the result: the zombie is not fought head-on — its cue (couch + open laptop + morning boredom) is removed, its routine replaced at the single point willpower was needed, and the new loop pays its own reward while the calendar and the partner hold the belief.',
        ] },""",
    """          'State the result: the zombie is not fought head-on — its cue (couch + open laptop + morning boredom) is removed, its routine replaced at the single point willpower was needed, and the new loop pays its own reward while the calendar and the partner hold the belief.',
        ] },
        {
          kind: 'derivation',
          title: 'The arithmetic of delay: temporal motivation theory',
          statement:
            'Steel and K\u00f6nig (2006) compress the 691-correlation evidence into one equation — motivation as a function of expectancy, value, impulsiveness and delay. Two homework tasks show why delay is toxic and what the Pomodoro actually buys.',
          prerequisites: ['Percentages and ratios', 'The four-part habit anatomy'],
          steps: [
            {
              label: 'Step 1: The equation',
              formula: '$$M = \\\\frac{E \\\\times V}{1 + I \\\\times D}$$',
              explanation:
                'Motivation M rises with expectancy E (can I succeed?) and value V (does it matter?), and falls with impulsiveness I (how fast do I discount?) and delay D (how far away is the payoff?).',
            },
            {
              label: 'Step 2: A task feeding an exam tomorrow',
              formula: '$$M_{\\\\text{tomorrow}} = \\\\frac{0.9 \\\\times 10}{1 + 0.5 \\\\times 1} = 6.0$$',
              explanation:
                'Take E = 0.9, V = 10, I = 0.5, D = 1 day. Motivation is high: 6.0 on this dial. The work feels almost self-starting.',
            },
            {
              label: 'Step 3: The same task, four weeks out',
              formula: '$$M_{\\\\text{month\\\\ out}} = \\\\frac{0.9 \\\\times 10}{1 + 0.5 \\\\times 30} \\\\approx 0.56$$',
              explanation:
                'Identical task, D = 30 days: motivation collapses to 0.56 — roughly eleven times lower. Nothing about the task changed; only the delay did.',
            },
            {
              label: 'Step 4: What impulsiveness does',
              formula: '$$M_{I=2} = \\\\frac{9}{1 + 2 \\\\times 30} \\\\approx 0.15$$',
              explanation:
                'For an impulsive student (I = 2) the distant task scores 0.15 — the payoff is discounted so steeply that no version of it competes with the phone.',
            },
            {
              label: 'Step 5: The two levers',
              formula: '$$D_{\\\\text{stage}} \\\\ll D_{\\\\text{exam}} \\\\;\\\\Rightarrow\\\\; M \\\\uparrow$$',
              explanation:
                'Shrink the delay: a stage due tomorrow (backward planning) or a 25-minute Pomodoro puts D at its floor, where the 1+ term is nearly 1 and motivation survives. That is the equation behind process, not product.',
            },
          ],
          result:
            'Temporal motivation theory explains the Saturday-morning paralysis arithmetically: at I = 0.5 the same mathematics task scores 6.0 with a one-day delay and 0.56 with a month one. The exam date cannot move — but backward planning and Pomodoros move D, and D is the denominator.',
        },""",
    'P-derivation')

# --- terms 9 -> 12 ---
patch(X53,
    """          { term: 'Mental contrasting', def: 'Deliberately contrasting a vivid picture of the target with the current reality to fuel effort.' },
        ] },""",
    """          { term: 'Mental contrasting', def: 'Deliberately contrasting a vivid picture of the target with the current reality to fuel effort.' },
          { term: 'Temporal motivation theory', def: 'Steel and K\u00f6nig\u2019s equation M = (E \u00d7 V) / (1 + I \u00d7 D): motivation rises with expectancy and value, falls with impulsiveness and delay.' },
          { term: 'Precommitment', def: 'Locking a future choice in advance — self-imposed deadlines, if-then plans — so the escape is not on the menu.' },
          { term: 'Hyperbolic discounting', def: 'The steep, impulse-driven devaluation of delayed payoffs that the delay term of the equation models.' },
        ] },""",
    'P-terms')

# --- quiz 4 -> 8 ---
patch(X53,
    """            explain: 'The contrast — target picture against present situation — is the fuel; the image alone is daydreaming, and the gap is the point.',
          },
        ] },""",
    """            explain: 'The contrast — target picture against present situation — is the fuel; the image alone is daydreaming, and the gap is the point.',
          },
          {
            q: 'In Steel\u2019s 2007 meta-analysis of 691 correlations, the strongest predictors of procrastination included:',
            options: ['Neuroticism and sensation seeking', 'Task aversiveness, impulsiveness, low self-efficacy and disorganization', 'Intelligence and class attendance', 'Age and gender'],
            answer: 1,
            explain: 'Task aversiveness, task delay, self-efficacy, impulsiveness and the conscientiousness facets (self-control, distractibility, organization) were strong; neuroticism, rebelliousness and sensation-seeking were weak.',
          },
          {
            q: 'Tice and Baumeister\u2019s semester-long study (1997) found procrastinators reported:',
            options: ['Uniformly higher stress all term', 'Less stress and illness early but more of both late in the term', 'No difference at any point', 'More illness early and less late'],
            answer: 1,
            explain: 'The short-term relief is real — and so is the bill: by term\u2019s end procrastinators carried more stress and more illness, exactly when the deadlines landed.',
          },
          {
            q: 'In Ariely and Wertenbroch\u2019s deadline study, the best paper grades went to:',
            options: ['Students with no deadlines at all', 'Students who self-imposed evenly spaced deadlines', 'Students given externally spaced deadlines', 'All groups did equally well'],
            answer: 2,
            explain: 'Self-imposed spacing helped students beat their own procrastination, but externally imposed spacing produced the best performance — structure beats willpower, and a late penalty shrank the remaining lateness.',
          },
          {
            q: 'Two tasks both have E = 0.9 and V = 10, with I = 0.5. Task A pays off in 1 day, Task B in 30 days. Under M = EV/(1 + ID):',
            options: ['Both have equal motivation', 'A \u2248 6.0 and B \u2248 0.56 — over ten times more motivation for the near task', 'A \u2248 0.56 and B \u2248 6.0', 'B wins because delay builds anticipation'],
            answer: 1,
            explain: 'A: 9/(1 + 0.5) = 6.0; B: 9/(1 + 15) = 0.56. The delay sits in the denominator — exactly why backward planning and Pomodoros shrink D.',
          },
        ] },""",
    'P-quiz')

print('procrastination edits done')
