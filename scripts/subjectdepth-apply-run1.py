#!/usr/bin/env python3
# SUBJECTDEPTH run 1 — additive enrichment of fnd-deliberate-practice +
# study-exam-strategy in foundation-learning.ts. Every insertion anchored on a
# substring verified to appear EXACTLY ONCE; aborts without writing otherwise.
# Raw strings keep every backslash exactly as the target TS source needs it.
import sys

FILE = 'src/data/knowledge/fields/foundation-learning.ts'
with open(FILE, encoding='utf-8') as f:
    src = f.read()

edits = []

# ---------- A. Berlin study para ----------
edits.append((
    'A: Berlin violin study para',
    "Improvement requires working where the automatic solution fails, which is by definition uncomfortable and unwelcome to the resting brain.',\n        },",
    "\n        {\n          kind: 'para',\n          text: 'The founding evidence is the 1993 Berlin violin study. Ericsson, Krampe and Tesch-Römer interviewed students at the Berlin University of the Arts, divided them by their professors into future international soloists, merely good players, and future music teachers, then reconstructed every hour of practice from age eight onward. The biographies separated cleanly: by age eighteen the best violinists had banked an average of about 7,410 hours of solitary practice, the good players about 5,301, and the future teachers about 3,420 — and the gap was carried almost entirely by effortful practice alone in the practice room, not by lessons, ensemble hours or performances. Two details complete the picture. The best players structured the work in sessions of at most eighty to ninety minutes with real breaks, capping deliberate practice near three and a half hours a day. And they slept more — about 8.6 hours a night including naps, roughly an hour more than the weaker groups — treating recovery as part of the training. Practice history predicted the groups better than any early-talent rating; nobody had reached the top on thin hours.',\n        },",
))

# ---------- B. SF digit-span / LTWM para ----------
edits.append((
    'B: SF digit-span / LTWM para',
    "The representations then guide the next round of practice, a compounding loop.',\n        },",
    "\n        {\n          kind: 'para',\n          text: 'The laboratory version of this story is extreme. In the classic Chase and Ericsson digit-span experiments, a college student identified only as SF — a keen long-distance runner — trained his digit span session after session, chunking runs of digits into race times he knew cold (3,492 became \"3 minutes 49 point 2, near world-record mile pace\") and building retrieval links between chunks. After months of this single-minded drilling he could repeat back 82 digits in order — against a normal span of seven — yet his letter span stayed ordinary, because what he had built was not a bigger memory but a domain-specific system of chunks and cues. Ericsson and Kintsch later named the general mechanism long-term working memory: experts use familiar structures to park and re-address information in long-term storage almost as if it were held in mind. That is what a mental representation buys, and it only grows under practice that keeps outrunning the current structure.',\n        },",
))

# ---------- C. Gladwell/Macnamara + ten-year paras ----------
edits.append((
    'C: Gladwell/Macnamara + ten-year paras',
    "the composition of the hours matters more than their count.',\n        },",
    "\n        {\n          kind: 'para',\n          text: 'That round number had a famous career. Malcolm Gladwell\\'s Outliers (2008) distilled the Berlin numbers into a \"10,000-hour rule\" — and Ericsson spent years politely correcting the translation: 10,000 was the average accumulated by the best violinists around age twenty, not a threshold anyone crosses, and dropping the word \"deliberate\" turned a finding about designed, effortful, feedback-rich practice into a folk theorem about mere seat time. The correction matters because the wider evidence says composition dominates volume. Macnamara, Hambrick and Oswald\\'s 2014 meta-analysis of 88 studies measured how much performance variance deliberate practice actually explains: about 26 per cent in games, 21 per cent in music, 18 per cent in sports — but only 4 per cent in education and under 1 per cent in established professions. Deliberate practice is the most controllable lever anyone has found, not the only variable: starting age, coaching quality, and how predictable the domain is all pull their own weight. The honest reading is liberating rather than deflating — hours you can design and audit are worth more than hours you can merely count.',\n        },\n        {\n          kind: 'para',\n          text: 'Where does the ten-year figure come from? Arithmetic, mostly. Herbert Simon and William Chase\\'s 1973 chess work found no player reaching international master strength with less than about a decade of intense involvement — the origin of the \"ten-year rule\" — and the Berlin math reproduces it: three deliberate hours a day, roughly 350 serious days a year, sustained for ten years, accumulates about 10,500 hours. The number is what falls out of a sustainable daily dose held for the time it takes the representations to deepen; it is a by-product of the recipe, never a substitute for it.',\n        },",
))

# ---------- E. deliberate-practice quiz +4 items ----------
edits.append((
    'E: deliberate-practice quiz 4->8',
    "explain: 'Early hours buy steep gains; later improvement requires designed, deliberate training.',\n            },\n          ],\n        },",
    "\n            {\n              q: 'In the 1993 Berlin violin study, what best separated the future soloists from the future music teachers by age 18?',\n              options: ['Hours of lessons and ensemble playing', 'Accumulated solitary deliberate practice (about 7,410 h vs about 3,420 h)', 'Teachers\\' early ratings of talent', 'Faster sight-reading at admission'],\n              answer: 1,\n              explain: 'The biographies separated on banked solitary practice — its structure (60-90 minute sessions, more sleep) carrying the gap, not lessons or talent ratings.',\n            },\n            {\n              q: 'Using the power law with b = 0.3, roughly how much MORE accumulated practice does the NEXT halving of trial time require?',\n              options: ['Twice the current total', 'About ten times the current total', 'A constant 100 extra hours regardless of level', 'Half the current total'],\n              answer: 1,\n              explain: 'P₂/P₁ = 2^(1/0.3) ≈ 2^3.33 ≈ 10 — each halving costs ten times everything already banked, the arithmetic behind the plateau.',\n            },\n            {\n              q: 'The Macnamara, Hambrick and Oswald (2014) meta-analysis found deliberate practice explains about 26% of performance variance in games but under 1% in professions. The honest conclusion is:',\n              options: ['Deliberate practice is a myth outside games', 'It is the most controllable lever but not the only variable — starting age, coaching and domain predictability also matter', 'Professionals should stop training', 'The meta-analysis disproved the Berlin study'],\n              answer: 1,\n              explain: 'A powerful, designable lever — never the whole story; that is why the recipe audits the composition of hours, not just their count.',\n            },\n            {\n              q: 'Why do elite performers cap deliberate practice at about three to five focused hours a day?',\n              options: ['They run out of material', 'Edge-difficulty work is exhausting and needs consolidation — beyond the cap, quality decays into comfortable volume', 'Coaches forbid longer sessions', 'Muscle growth stops after two hours'],\n              answer: 1,\n              explain: 'The Berlin violinists stopped near 3.5 hours a day and slept MORE than the weaker groups — rest is part of the training, and strain defines the dose.',\n            },\n          ],\n        },",
))

# ---------- F. penalty EV para (exam-strategy) ----------
edits.append((
    'F: penalty EV + answer-changing para',
    "method marks are paid for visible reasoning, not for lucky answers.',\n        },",
    "\n        {\n          kind: 'para',\n          text: 'Punished wrong answers change the arithmetic, so run it honestly. Under the common fractional penalty (+1 for correct, −¼ for wrong, four options), a blind guess has expected value 0.25 × 1 − 0.75 × 0.25 = +0.0625 — still positive, and eliminating even one option pushes it to 0.5 × 1 − 0.5 × 0.25 = +0.375. Even a five-option paper with −¼ penalties lands a blind guess at exactly zero, so any elimination tips the balance toward answering. Only a full penalty (−1 for a wrong answer, four options) makes the blank rational — expected value exactly zero with no information. The rule of thumb that survives every regime: never leave a blank you could narrow, and never answer purely at random under a full penalty. The evidence on revisiting answers is just as settled: Benjamin, Cavell and Shallenberger\\'s 1984 review of thirty-three answer-changing studies found that changes go wrong-to-right roughly twice as often as right-to-wrong — the \"always keep your first instinct\" folklore is simply false. What separates the good changer from the bad is the reason: a specific correction (misread question, recalled a fact, spotted a units error) pays; naked second-guessing does not.',\n        },",
))

# ---------- G. Beilock para (exam-strategy) ----------
edits.append((
    'G: Beilock choking para',
    "You trained retrieval all term — the exam is just retrieval with a stopwatch.',\n        },",
    "\n        {\n          kind: 'para',\n          text: 'The modern choking literature explains exactly why the freeze happens. Sian Beilock\\'s experiments — golf putters under video cameras, students doing arithmetic for money — showed that pressure hurts skilled performers when attention turns inward: experts run on compiled procedures, and consciously monitoring the mechanics (\"keep the elbow in, watch the clubface\") re-inserts the step-by-step control the skill has outgrown. Among students, it was the HIGH working-memory ones who fell furthest under pressure — the very resource pressure floods is the one their strategies lean on. The practical defences follow from the mechanism: practise under mild, staged pressure so the exam feels familiar rather than novel; use pre-performance routines to park attention on one controllable cue; and reappraise the symptoms as readiness, because a body mobilised for action is only mislabelled as disaster.',\n        },",
))

# ---------- H. exam-strategy quiz +4 items ----------
edits.append((
    'H: exam-strategy quiz 4->8',
    "explain: 'Moderate arousal is optimal, and reappraisal plus slow exhales steer toward it — the racing heart is fuel if labelled correctly.',\n          },\n        ] },",
    "\n            {\n              q: 'A paper scores +1 for a correct multiple choice and −0.25 for a wrong one (4 options). You can eliminate two options. The expected value of guessing is:',\n              options: ['negative — leave it blank', 'exactly zero — it makes no difference', 'positive: 0.5 × 1 − 0.5 × 0.25 = +0.375, so answer', 'impossible to compute without knowing the topic'],\n              answer: 2,\n              explain: 'With two options eliminated the guess is a coin flip that pays 1 against 0.25 — expected value +0.375. Under fractional penalties, narrowing always beats blanking.',\n            },\n            {\n              q: 'The Benjamin, Cavell and Shallenberger (1984) review of answer-changing found that:',\n              options: ['changes go wrong-to-right about twice as often as right-to-wrong — the first-instinct folklore is false', 'first answers are almost always best — never change', 'changes make no difference on average', 'only top students benefit from changing answers'],\n              answer: 0,\n              explain: 'Across 33 studies, changes improved scores about two-to-one — provided the change is made for a specific reason (misread, recalled, units error).',\n            },\n            {\n              q: 'Beilock\\'s choking experiments showed pressure hurts skilled performers mainly because:',\n              options: ['adrenaline damages muscle memory', 'attention turns inward to step-by-step mechanics the skill has outgrown', 'working memory expands and overwhelms the checker', 'the brain runs out of glucose'],\n              answer: 1,\n              explain: 'Experts run on compiled procedures; consciously monitoring mechanics re-inserts novice-level control — which is why practising under mild pressure and parking attention on one cue defends the skill.',\n            },\n            {\n              q: 'A 90-point paper allows 180 minutes and you reserve 20 minutes for checking. The per-point budget is about:',\n              options: ['1 minute per point', '1.8 minutes per point', '2.5 minutes per point', '3 minutes per point'],\n              answer: 1,\n              explain: '(180 − 20) / 90 ≈ 1.78 — reserve the buffer first, then divide what remains by the marks; every question gets a ceiling in the same currency.',\n            },\n        ] },",
))

# ---------- D. figure + derivation (loaded from snippet file to keep this script readable) ----------
with open('scripts/subjectdepth-run1-figure.txt', encoding='utf-8') as f:
    FIGURE_DERIVATION = f.read()
edits.append((
    'D: figure + derivation',
    "'Time per trial T falls with accumulated practice P: gains are steep early and progressively more expensive — why volume alone plateaus and design must take over.',\n        },",
    '\n' + FIGURE_DERIVATION,
))

# ---------- verify + apply ----------
ok = True
for name, anchor, suffix in edits:
    n = src.count(anchor)
    if n != 1:
        print(f'ANCHOR FAIL [{name}]: found {n} occurrences (need exactly 1)')
        ok = False
if not ok:
    print('ABORTED — file NOT modified')
    sys.exit(1)
for name, anchor, suffix in edits:
    src = src.replace(anchor, anchor + suffix, 1)
    print(f'applied [{name}]')
with open(FILE, 'w', encoding='utf-8') as f:
    f.write(src)
print(f'DONE — all {len(edits)} insertions applied to {FILE}')
