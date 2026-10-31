/**
 * Knowledge Universe — Study Skills & Learning Science — Chapter 03: Practice, Performance & Expertise
 * 2 lessons · ~5,516 words
 * fields: Skill Acquisition, Study Skills & Memory
 * legacy sources: foundation-learning.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Skill Acquisition] or branches [Performing]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 fnd-deliberate-practice — Deliberate Practice: The Anatomy of Getting Good
 *   03.2 study-exam-strategy — Exam-Day Strategy: How Tests Are Actually Won
 */
import type { KnowledgeTopic } from '../../types'

export const studySkillsCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'fnd-deliberate-practice',
    title: 'Deliberate Practice: The Anatomy of Getting Good',
    domain: 'Foundation Learning',
    field: 'Skill Acquisition',
    branch: 'Expertise Science',
    tier: 'intermediate',
    concepts: [
      'Not all hours count: mere repetition plateaus',
      'Well-defined, sub-skill-sized goals',
      'Operating at the edge: full concentration',
      'Immediate feedback and error correction',
      'Mental representations: the expert\'s advantage',
      'The ten-year rule and the 10,000-hour folklore',
      'Designing your own deliberate practice',
    ],
    words: 2516,
    readMins: 13,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Twenty years of driving does not make a race driver, and ten thousand casual rounds of golf does not make a champion. Expertise science, built on psychologist Anders Ericsson\'s studies of violinists, chess masters, and memory athletes, calls the difference deliberate practice: effortful, targeted work at the edge of current ability with immediate feedback. This Foundation Learning topic dissects what makes practice improve performance — and why the hours nearly everyone logs are maintenance, not improvement.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The deliberate-practice finding reframes talent: across domains, elite performers accumulated vastly more solitary, corrective, uncomfortable practice — not just more total time. The recipe is learnable by anyone, which makes improvement less about being chosen and more about designing the training.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Skill rises quickly with any repetition, then flatlines: after a few years, a driver, teacher, or typist is coasting on automaticity. Ericsson\'s key insight is that experience and expertise are different variables — once a skill runs without conscious attention, repetition merely maintains it. Improvement requires working where the automatic solution fails, which is by definition uncomfortable and unwelcome to the resting brain.',
      },
      {
        kind: 'para',
        text: 'The founding evidence is the 1993 Berlin violin study. Ericsson, Krampe and Tesch-Römer interviewed students at the Berlin University of the Arts, divided them by their professors into future international soloists, merely good players, and future music teachers, then reconstructed every hour of practice from age eight onward. The biographies separated cleanly: by age eighteen the best violinists had banked an average of about 7,410 hours of solitary practice, the good players about 5,301, and the future teachers about 3,420 — and the gap was carried almost entirely by effortful practice alone in the practice room, not by lessons, ensemble hours or performances. Two details complete the picture. The best players structured the work in sessions of at most eighty to ninety minutes with real breaks, capping deliberate practice near three and a half hours a day. And they slept more — about 8.6 hours a night including naps, roughly an hour more than the weaker groups — treating recovery as part of the training. Practice history predicted the groups better than any early-talent rating; nobody had reached the top on thin hours.',
      },
      {
        kind: 'para',
        text: 'Deliberate sessions pursue targets a notch below "get better at violin": land the shift cleanly in bar twelve, hold the opening line of the difficult conversation. A well-defined goal names the sub-skill, makes success observable, and shrinks the feedback loop to minutes. "Practice more" produces hours; "fix the third-bridge shift" produces change.',
      },
      {
        kind: 'para',
        text: 'The defining sensation of deliberate practice is strain — it runs at the boundary of current ability, where failure is frequent and attention is total. That boundary also caps the dose: even elite performers rarely sustain more than three to five focused hours a day, and they schedule rest like training. Flow differs precisely here: flow feels effortless, while deliberate practice feels like work.',
      },
      {
        kind: 'para',
        text: 'Without feedback, practice stabilizes errors as confidently as it stabilizes skills. Coaches, recordings, and measurable outcomes close the loop by making each attempt informative: what happened, against what was intended, and what to adjust. Self-monitored experts build the loop internally — comparing each attempt to a detailed mental model of the ideal — which is why feedback quality separates good training from mere activity.',
      },
      {
        kind: 'para',
        text: 'What grows with expertise is not speed but structure: chess masters perceive boards as meaningful patterns, firefighters read smoke as scenarios, radiologists see lesions that novices sketch straight past. Ericsson calls these mental representations, and deliberate practice is best understood as building them — training perception and anticipation, not just motion. The representations then guide the next round of practice, a compounding loop.',
      },
      {
        kind: 'para',
        text: 'The laboratory version of this story is extreme. In the classic Chase and Ericsson digit-span experiments, a college student identified only as SF — a keen long-distance runner — trained his digit span session after session, chunking runs of digits into race times he knew cold (3,492 became "3 minutes 49 point 2, near world-record mile pace") and building retrieval links between chunks. After months of this single-minded drilling he could repeat back 82 digits in order — against a normal span of seven — yet his letter span stayed ordinary, because what he had built was not a bigger memory but a domain-specific system of chunks and cues. Ericsson and Kintsch later named the general mechanism long-term working memory: experts use familiar structures to park and re-address information in long-term storage almost as if it were held in mind. That is what a mental representation buys, and it only grows under practice that keeps outrunning the current structure.',
      },
      {
        kind: 'para',
        text: 'The famous round number came from averaging top performers\' accumulated practice — and it is a center, not a threshold. Some experts reach world class in far less time by training efficiently; others accumulate many more hours without improving at all. The rule\'s surviving core: expertise takes years of deliberate work rather than exposure, and the composition of the hours matters more than their count.',
      },
      {
        kind: 'para',
        text: 'That round number had a famous career. Malcolm Gladwell\'s Outliers (2008) distilled the Berlin numbers into a "10,000-hour rule" — and Ericsson spent years politely correcting the translation: 10,000 was the average accumulated by the best violinists around age twenty, not a threshold anyone crosses, and dropping the word "deliberate" turned a finding about designed, effortful, feedback-rich practice into a folk theorem about mere seat time. The correction matters because the wider evidence says composition dominates volume. Macnamara, Hambrick and Oswald\'s 2014 meta-analysis of 88 studies measured how much performance variance deliberate practice actually explains: about 26 per cent in games, 21 per cent in music, 18 per cent in sports — but only 4 per cent in education and under 1 per cent in established professions. Deliberate practice is the most controllable lever anyone has found, not the only variable: starting age, coaching quality, and how predictable the domain is all pull their own weight. The honest reading is liberating rather than deflating — hours you can design and audit are worth more than hours you can merely count.',
      },
      {
        kind: 'para',
        text: 'Where does the ten-year figure come from? Arithmetic, mostly. Herbert Simon and William Chase\'s 1973 chess work found no player reaching international master strength with less than about a decade of intense involvement — the origin of the "ten-year rule" — and the Berlin math reproduces it: three deliberate hours a day, roughly 350 serious days a year, sustained for ten years, accumulates about 10,500 hours. The number is what falls out of a sustainable daily dose held for the time it takes the representations to deepen; it is a by-product of the recipe, never a substitute for it.',
      },
      {
        kind: 'para',
        text: 'The recipe assembles from everything above. Diagnose: find the specific failure — record yourself, get critiqued, measure. Isolate: reduce it to a repeatable drill with an observable outcome. Repeat at the edge with fast feedback, then reintegrate into full performance. Cycle weekly, and log the work — the training diary is how amateurs start practicing like professionals.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Power law of practice',
        latex: 'T = a\\,P^{-b}',
        meaning: 'Time per trial T falls with accumulated practice P: gains are steep early and progressively more expensive — why volume alone plateaus and design must take over.',
      },
      {
        kind: 'figure',
        caption:
          'The power law of practice. Time per trial $T = a\\,P^{-b}$ falls steeply over the first hours of practice, then flattens into the plateau of automaticity — repetition maintains but no longer improves. When deliberate practice begins (edge-difficulty drills with a feedback loop), the curve re-steepens as mental representations grow. Inset: the Berlin violin study (Ericsson, Krampe & Tesch-Römer, 1993) — by age 18 the best violinists had banked ≈ 7,410 hours of solitary practice against ≈ 3,420 for the future music teachers.',
        sketchImage: '/diagrams/deliberate-practice-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: practice curve with time per trial on the vertical axis and accumulated practice hours on the horizontal; the power law T = aP^-b dropping steeply then flattening into a labelled plateau of automaticity; a dashed vertical line marked "deliberate practice begins: edge-difficulty + feedback" where the curve bends downward again; corner box listing Berlin 1993 hours — best ≈ 7,410, good ≈ 5,301, teachers ≈ 3,420 by age 18.',
        afterConcept: 1,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Power law of practice: time per trial falls with accumulated practice, plateaus under automaticity, and drops again when deliberate practice re-steepens the curve">
  <!-- hand-drawn axes (double-stroked, gently wobbly) -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M84 52 Q82 220 86 392"/>
    <path d="M80 388 Q300 392 540 387 Q700 391 836 386"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M89 55 Q87 220 91 390"/>
    <path d="M77 393 Q300 397 540 392 Q700 396 833 391"/>
  </g>
  <!-- axis titles + ticks -->
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="30" y="224" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 30 224)">Time per trial T</text>
    <text x="836" y="448" font-size="15" font-style="italic" text-anchor="end">Accumulated practice P (hours)</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="end">
      <text x="76" y="64">100</text><text x="76" y="146">75</text><text x="76" y="228">50</text><text x="76" y="310">25</text><text x="76" y="392">0</text>
    </g>
    <g font-size="11.5" fill="#8a8a93" text-anchor="middle">
      <text x="84" y="380">0</text><text x="209" y="380">500</text><text x="335" y="380">1,000</text><text x="460" y="380">1,500</text><text x="585" y="380">2,000</text><text x="710" y="380">2,500</text><text x="836" y="380">3,000</text>
    </g>
  </g>
  <!-- maintenance curve: power law flattening into plateau (rose) -->
  <path d="M84 60 C 100 130 118 178 140 214 C 170 258 205 288 245 308 C 300 332 360 344 430 350 C 520 356 620 358 836 359" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" opacity="0.95"/>
  <text x="620" y="334" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#e11d48">plateau — automaticity: repetition maintains</text>
  <!-- deliberate-practice intervention -->
  <line x1="470" y1="84" x2="470" y2="352" stroke="#d97706" stroke-width="2" stroke-dasharray="7 6" opacity="0.9"/>
  <path d="M470 82 L464 94 L476 94 Z" fill="#d97706"/>
  <text x="482" y="100" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">deliberate practice begins: edge-difficulty drills + feedback loop</text>
  <!-- re-steepened curve (emerald) -->
  <path d="M470 352 C 500 340 530 300 560 262 C 600 214 660 176 730 158 C 770 148 806 144 836 141" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97"/>
  <text x="592" y="132" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#059669">re-steepened: mental representations grow</text>
  <!-- formula annotation -->
  <text x="140" y="92" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-style="italic" fill="currentColor">power law of practice: T = aP<tspan dy="-7" font-size="11">−b</tspan></text>
  <!-- Berlin study box -->
  <g>
    <path d="M560 52 Q560 46 566 46 L712 46 Q718 46 718 52 L718 110 Q718 116 712 116 L566 116 Q560 116 560 110 Z" fill="none" stroke="#8a8a93" stroke-width="1.4" opacity="0.6"/>
    <text x="639" y="66" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="currentColor">Berlin violin study (1993):</text>
    <text x="639" y="84" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="currentColor">best ≈ 7,410 h · good ≈ 5,301 h</text>
    <text x="639" y="102" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="currentColor">future teachers ≈ 3,420 h by age 18</text>
  </g>
</svg>`,
      },
      {
        kind: 'derivation',
        title: 'How expensive is the next halving? The power-law arithmetic',
        statement:
          'Derivation from the power law of practice $T = a\\,P^{-b}$ — why each halving of trial time costs a constant multiple of ALL previous practice, and why deliberate practice must change the curve rather than move along it.',
        prerequisites: ['The power law of practice', 'Logarithms and exponents'],
        steps: [
          {
            label: 'Step 1: State the law',
            formula: '$$T = a\\,P^{-b}$$',
            explanation:
              'Time per trial T decays as a power of accumulated practice P: the constant a sets the starting level, the exponent b the steepness of improvement.',
          },
          {
            label: 'Step 2: Linearise on log-log axes',
            formula: '$$\\ln T = \\ln a - b\\,\\ln P$$',
            explanation:
              "Taking logarithms turns the curve into a straight line of slope −b — exactly how practice curves are fitted empirically, and why b is the natural summary of a domain's rate of improvement.",
          },
          {
            label: 'Step 3: Price a halving of trial time',
            formula: '$$\\frac{T_2}{T_1} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\frac{P_2}{P_1} = 2^{1/b}$$',
            explanation:
              'Because T depends on P through the power −b, making the skill twice as fast requires multiplying accumulated practice by 2^(1/b) — regardless of where you start.',
          },
          {
            label: 'Step 4: Insert the empirical exponent',
            formula: '$$b \\approx 0.3 \\;\\Rightarrow\\; 2^{1/b} \\approx 10$$',
            explanation:
              'For cognitive skills b typically sits between 0.2 and 0.4; at b = 0.3 every halving of trial time demands roughly TEN times the practice already banked — the mathematical form of the plateau.',
          },
          {
            label: 'Step 5: The escape route changes the constants',
            formula: "$$a \\to a' < a, \\quad b \\to b' > b$$",
            explanation:
              'Moving along the curve buys geometrically less each time. Deliberate practice works by shifting the curve itself — a smaller a (better method, better coaching) and a steeper b (edge-difficulty drills with feedback) — which is why redesign, not volume, is what ends plateaus.',
          },
        ],
        result:
          "Volume alone obeys brutal arithmetic: at b ≈ 0.3, the next halving of trial time costs ten times all the practice already banked. Deliberate practice is the design intervention that changes the constants themselves — the only mathematically honest way off the plateau, and the reason the Berlin violinists' hours were solitary, targeted and feedback-rich rather than merely many.",
      },

      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a club tennis player whose backhand keeps losing points wants a week of practice that actually fixes it, not another friendly hour.',
          'Recall the governing idea: improvement requires a diagnosed sub-skill, edge-difficulty drills with immediate feedback, and reintegration into full play.',
          'Apply: video three matches to locate the specific fault — late preparation on high balls; drill 40 fed high backhands daily against a coach or wall, resetting immediately whenever the preparation is late; play two sets where opponents deliberately target the drill ball.',
          'State the result: roughly 200 targeted repetitions with feedback inside a week — the steep early region of the practice curve for this sub-skill — and a measurable outcome: high-backhand points won in the following weekend\'s match.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Music conservatories structure lessons as diagnosis, drill, and reintegration.',
          'Surgeons train on simulators with recorded metrics for rare, high-stakes procedures.',
          'Sales and speaking practice uses recorded role-play reviewed against rubrics.',
          'Chess and language learners drill known weaknesses rather than replaying comfort zones.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The seductive trap is accumulating comfortable hours — playing the rounds, teaching the familiar class — and calling it practice; experience without edge-difficulty is maintenance. Challenging practice without feedback is worse, because errors get grooved. And the famous 10,000-hour number became folklore precisely because it drops the adjective "deliberate" — the count is nothing without the composition.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Deliberate practice', def: 'Effortful, targeted practice at the edge of ability with immediate feedback.' },
          { term: 'Automaticity', def: 'Performance that runs without conscious attention — and stops improving.' },
          { term: 'Mental representation', def: 'The organized knowledge structure that lets experts perceive meaningful patterns.' },
          { term: 'Feedback loop', def: 'The comparison of attempt against intention that makes practice informative.' },
          { term: 'Power law of practice', def: 'The empirical curve in which gains per hour shrink as skill rises.' },
          { term: 'Plateau', def: 'The flat region where repetition maintains but no longer improves skill.' },
          { term: 'Training diary', def: 'A log of drills, outcomes, and adjustments that professionalizes practice.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why does ordinary experience stop producing improvement?',
            options: ['The brain loses plasticity in adulthood', 'Automaticity lets performance run without correction or attention', 'Skills are capped by talent', 'Repetition erodes memory'],
            answer: 1,
            explain: 'Once a skill is automatic, repetition maintains it; improvement demands edge-difficulty work.',
          },
          {
            q: 'A deliberate-practice goal is best described as:',
            options: ['"Practice two hours daily"', '"Win more matches this season"', '"Fix the late preparation on high backhands"', '"Stay motivated"'],
            answer: 2,
            explain: 'Sub-skill-sized, observable, and feedback-ready — the unit of real improvement.',
          },
          {
            q: 'Mental representations explain expertise mainly by:',
            options: ['Speeding up muscle contractions', 'Letting experts perceive meaningful patterns and anticipate', 'Reducing the need for sleep', 'Improving eyesight'],
            answer: 1,
            explain: 'Chess masters see positions and firefighters see scenarios — structure, not just speed.',
          },
          {
            q: 'The power law of practice implies that:',
            options: ['Every additional hour yields equal gains', 'Gains per hour shrink as skill accumulates', 'Practice becomes easier over time', 'Feedback matters only for beginners'],
            answer: 1,
            explain: 'Early hours buy steep gains; later improvement requires designed, deliberate training.',
          },
          {
            q: 'In the 1993 Berlin violin study, what best separated the future soloists from the future music teachers by age 18?',
            options: ['Hours of lessons and ensemble playing', 'Accumulated solitary deliberate practice (about 7,410 h vs about 3,420 h)', 'Teachers\' early ratings of talent', 'Faster sight-reading at admission'],
            answer: 1,
            explain: 'The biographies separated on banked solitary practice — its structure (60-90 minute sessions, more sleep) carrying the gap, not lessons or talent ratings.',
          },
          {
            q: 'Using the power law with b = 0.3, roughly how much MORE accumulated practice does the NEXT halving of trial time require?',
            options: ['Twice the current total', 'About ten times the current total', 'A constant 100 extra hours regardless of level', 'Half the current total'],
            answer: 1,
            explain: 'P₂/P₁ = 2^(1/0.3) ≈ 2^3.33 ≈ 10 — each halving costs ten times everything already banked, the arithmetic behind the plateau.',
          },
          {
            q: 'The Macnamara, Hambrick and Oswald (2014) meta-analysis found deliberate practice explains about 26% of performance variance in games but under 1% in professions. The honest conclusion is:',
            options: ['Deliberate practice is a myth outside games', 'It is the most controllable lever but not the only variable — starting age, coaching and domain predictability also matter', 'Professionals should stop training', 'The meta-analysis disproved the Berlin study'],
            answer: 1,
            explain: 'A powerful, designable lever — never the whole story; that is why the recipe audits the composition of hours, not just their count.',
          },
          {
            q: 'Why do elite performers cap deliberate practice at about three to five focused hours a day?',
            options: ['They run out of material', 'Edge-difficulty work is exhausting and needs consolidation — beyond the cap, quality decays into comfortable volume', 'Coaches forbid longer sessions', 'Muscle growth stops after two hours'],
            answer: 1,
            explain: 'The Berlin violinists stopped near 3.5 hours a day and slept MORE than the weaker groups — rest is part of the training, and strain defines the dose.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Combine with active recall and interleaving for the cognitive side of the same idea. Natural next steps: feedback and coaching science, motor-learning research, and the expertise literature\'s ongoing debate about talent.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'study-exam-strategy',
    title: 'Exam-Day Strategy: How Tests Are Actually Won',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Performing',
    tier: 'core',
    concepts: [
      'Sleep is study time',
      'The all-nighter, priced',
      'The retrieval warm-up',
      'Reading the paper before answering it',
      'Point arithmetic: budgeting minutes',
      'The guessing arithmetic',
      'Error triage: three passes',
      'Hard-start, jump-to-easy',
      'Anxiety as fuel, not fog',
      'Choking: why experts freeze',
      'Writing the worries away',
    ],
    words: 3000,
    readMins: 15,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Two students with identical knowledge can sit the same paper and score thirty points apart, because exams are performances, and performance has a technique. The technique is not mysterious: sleep so the retrieval machinery works, warm it up before the doors open, read the whole paper before committing ink, budget minutes against marks, triage errors in passes, and manage arousal like an athlete manages a start line. None of it replaces study — all of it stops study from being wasted.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Exams are the highest-stakes retrieval events most people ever face, and they are winnable on process alone more often than anyone admits: students routinely lose ten to twenty per cent of available marks to time mismanagement, unanswered easy questions and panic — not to ignorance. That margin is the difference between grades, offers and licences. Treat this topic as the game-day playbook your studying has earned.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Sleep is when memory consolidates — the filing-and-stabilising stage the spaced repetition lesson describes. An all-nighter trades a night of consolidation for a few extra hours of shallow exposure, and the arithmetic is terrible: sleep-deprived test-takers recall less of what they studied and solve problems more slowly. The right final evening is boring: a light pass over a one-page summary sheet, materials packed, alarm set, normal bedtime. The exam is partly won the night before, in bed.',
      },
      {
        kind: 'para',
        text: 'The all-nighter\'s arithmetic has been measured directly. Dawson and Reid\'s 1997 Nature study walked volunteers through a night of sustained wakefulness, testing psychomotor performance against blood-alcohol curves: after seventeen hours awake, performance matched 0.05 per cent blood alcohol — most jurisdictions\' drink-drive limit — and after twenty-four hours it matched 0.10 per cent, beyond every limit in the developed world. A candidate who swaps the last night of sleep for extra pages of exposure is not adding preparation but sitting the exam intoxicated. Sleep, not the eleventh hour, is the last revision session.',
      },
      {
        kind: 'para',
        text: 'Retrieval is a state, not just a store: memory performs better when it has recently been used. A pre-exam warm-up — five easy practice questions solved on scrap paper, key formulas written from memory — primes the exact machinery the paper will demand. What does not work: comparing answers with panicking classmates in the corridor, which raises anxiety and teaches nothing, and cramming new material, which is too late to consolidate and remarkably effective at undermining confidence.',
      },
      {
        kind: 'para',
        text: 'If the format permits, spend the first five to ten minutes reading the entire paper before writing. You are pricing the market: where the marks are concentrated, which questions are cheap for you, which will be expensive, and what the essay actually asks. Note the command words — define, compare, evaluate — because answering the question asked is the cheapest source of marks on any paper. Then start with your best-value question, not the first one printed.',
      },
      {
        kind: 'para',
        text: 'Budget minutes in proportion to marks: a 100-point paper in 120 minutes pays roughly one minute per point, leaving a twenty-minute buffer for checking and emergencies. The hard rule: when a question exhausts its budget, mark it and move — every minute over budget on a hard question is a minute stolen from an easier one elsewhere. For multi-step problems, show the setup even if the arithmetic dies: method marks are paid for visible reasoning, not for lucky answers.',
      },
      {
        kind: 'para',
        text: 'Punished wrong answers change the arithmetic, so run it honestly. Under the common fractional penalty (+1 for correct, −¼ for wrong, four options), a blind guess has expected value 0.25 × 1 − 0.75 × 0.25 = +0.0625 — still positive, and eliminating even one option pushes it to 0.5 × 1 − 0.5 × 0.25 = +0.375. Even a five-option paper with −¼ penalties lands a blind guess at exactly zero, so any elimination tips the balance toward answering. Only a full penalty (−1 for a wrong answer, four options) makes the blank rational — expected value exactly zero with no information. The rule of thumb that survives every regime: never leave a blank you could narrow, and never answer purely at random under a full penalty. The evidence on revisiting answers is just as settled: Benjamin, Cavell and Shallenberger\'s 1984 review of thirty-three answer-changing studies found that changes go wrong-to-right roughly twice as often as right-to-wrong — the "always keep your first instinct" folklore is simply false. What separates the good changer from the bad is the reason: a specific correction (misread question, recalled a fact, spotted a units error) pays; naked second-guessing does not.',
      },
      {
        kind: 'para',
        text: 'Work in passes. Pass one: every question you can answer cleanly and fast — banking marks and building momentum. Pass two: the mediums, which get their full budgets. Pass three: the hard and uncertain, attacked with the remaining time and the confidence of a mostly-finished paper. Multiple choice: never leave blanks — eliminate and choose, unless wrong answers are penalised. Essays: outline before writing, because a two-minute skeleton earns more than a page of early drift. Final pass: signs, units, skipped sub-parts, your name.',
      },
      {
        kind: 'para',
        text: 'The three-pass order has one principled rival worth knowing. Barbara Oakley\'s hard-start, jump-to-easy technique — from A Mind for Numbers, and backed by the same reasoning as Sian Beilock\'s choking research — says that when the format allows free movement between questions, begin with the hardest one, and the instant you feel stuck, jump to easy ones and bank marks. While your focused mode works the easy questions, the diffuse mode keeps incubating the hard one in the background, so a fresh approach is often waiting when you return. The deeper logic: the standard order stacks your maximum stress with your maximum difficulty in the final minutes — exactly the collision that produces paralysis by analysis. If you run the hard start, commit to jumping early rather than sinking five minutes into one stuck problem; if you know your triage discipline is shaky, the bank-marks-first order remains the safer default.',
      },
      {
        kind: 'para',
        text: 'Arousal is not the enemy; misread arousal is. The Yerkes-Dodson law puts performance highest at moderate arousal, and the racing heart that feels like fear is physiologically near-identical to excitement — relabel it. Control what can be controlled: long, slow exhales calm the nervous system, a first easy question gets ink flowing, and a deliberate pause resets a frozen moment. If panic rises, skip and return; working memory comes back when the alarm stops owning it. You trained retrieval all term — the exam is just retrieval with a stopwatch.',
      },
      {
        kind: 'para',
        text: 'The modern choking literature explains exactly why the freeze happens. Sian Beilock\'s experiments — golf putters under video cameras, students doing arithmetic for money — showed that pressure hurts skilled performers when attention turns inward: experts run on compiled procedures, and consciously monitoring the mechanics ("keep the elbow in, watch the clubface") re-inserts the step-by-step control the skill has outgrown. Among students, it was the HIGH working-memory ones who fell furthest under pressure — the very resource pressure floods is the one their strategies lean on. The practical defences follow from the mechanism: practise under mild, staged pressure so the exam feels familiar rather than novel; use pre-performance routines to park attention on one controllable cue; and reappraise the symptoms as readiness, because a body mobilised for action is only mislabelled as disaster.',
      },
      {
        kind: 'para',
        text: 'The choking research also points to an intervention cheap enough for any exam hall. Ramirez and Beilock\'s 2011 Science experiments — four studies, two randomized field experiments in real schools — gave students ten minutes before a high-stakes test to write about their worries, and the expressive-writing assignment significantly improved exam scores, most of all for students habitually anxious about test-taking. The mechanism is the one Beilock\'s choking work predicts: worries are working-memory borrowers, and committing them to paper evicts them before the exam needs the space. The corridor version — muttering "I\'m going to fail" — spends the same memory without clearing it.',
      },
      {
        kind: 'figure',
        caption:
          'The exam-day budget, from the worked example below. Panel A: a 100-point paper in 120 minutes — multiple choice 20′, short answers 36′, essay 40′ (8 outline, 32 prose), 24′ buffer. Panel B: error triage in three passes — sure things to bank marks, mediums at full budgets, hard and uncertain with the remainder — then a final sweep for signs, units, skipped sub-parts, your name.',
        sketchImage: '/diagrams/exam-strategy-budget-passes-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: a stacked time-budget bar for a 120-minute exam — multiple choice, short answers, essay (outline + prose), buffer — above a hand-drawn three-pass chain ending in a final sweep.',
        afterConcept: 7,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Panel A: the 120-minute point budget for a 100-point paper; Panel B: the three-pass triage chain with a final sweep">
  <!-- Panel A title -->
  <text x="90" y="44" font-family="Georgia, 'Times New Roman', serif" font-size="14.5" font-style="italic" fill="currentColor">the point budget — a 100-point paper in 120 minutes</text>
  <!-- wobbly bar frame -->
  <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M91 66 Q430 63 769 67 Q772 90 769 113 Q430 116 91 112 Q88 89 91 66 Z"/>
  </g>
  <!-- segments -->
  <rect x="92" y="68" width="111" height="43" fill="#e11d48" opacity="0.82"/>
  <rect x="205" y="68" width="203" height="43" fill="#059669" opacity="0.82"/>
  <rect x="410" y="68" width="225" height="43" fill="#d97706" opacity="0.82"/>
  <rect x="637" y="68" width="131" height="43" fill="#8a8a93" opacity="0.45"/>
  <!-- outline/prose dashed divider inside essay -->
  <line x1="457" y1="70" x2="456" y2="110" stroke="#fff" stroke-width="1.6" stroke-dasharray="4 4" opacity="0.85"/>
  <!-- in-bar minute numbers -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12" fill="#ffffff" text-anchor="middle">
    <text x="147" y="94">20′</text>
    <text x="306" y="94">36′</text>
    <text x="433" y="94">8′</text>
    <text x="522" y="94">32′</text>
    <text x="702" y="94">24′</text>
  </g>
  <!-- segment labels above -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="11.5" fill="currentColor" text-anchor="middle">
    <text x="147" y="130">multiple choice</text>
    <text x="306" y="130">short answers</text>
    <text x="522" y="130">essay: outline + prose</text>
    <text x="702" y="130">buffer</text>
  </g>
  <!-- ticks -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="10.5" fill="#8a8a93" text-anchor="middle">
    <text x="90" y="148">0</text><text x="203" y="148">20</text><text x="317" y="148">40</text><text x="430" y="148">60</text><text x="543" y="148">80</text><text x="657" y="148">100</text><text x="768" y="148">120</text>
  </g>
  <text x="800" y="148" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-style="italic" fill="#8a8a93">minutes</text>
  <!-- hard rule -->
  <text x="430" y="172" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#e11d48" text-anchor="middle">hard rule: when a question exhausts its budget, mark it and move</text>
  <!-- Panel B title -->
  <text x="90" y="208" font-family="Georgia, 'Times New Roman', serif" font-size="14.5" font-style="italic" fill="currentColor">error triage: three passes, then a final sweep</text>
  <!-- pass boxes (wobbly) -->
  <g fill="none" stroke-width="2.2" stroke-linecap="round">
    <path d="M92 222 Q437 219 782 223 Q785 240 781 254 Q437 258 93 253 Q89 238 92 222 Z" stroke="#059669"/>
    <path d="M92 272 Q437 269 782 273 Q785 290 781 304 Q437 308 93 303 Q89 288 92 272 Z" stroke="#d97706"/>
    <path d="M92 322 Q437 319 782 323 Q785 340 781 354 Q437 358 93 353 Q89 338 92 322 Z" stroke="#e11d48"/>
    <path d="M92 372 Q437 369 782 373 Q785 390 781 404 Q437 408 93 403 Q89 388 92 372 Z" stroke="#8a8a93"/>
  </g>
  <!-- arrows between passes -->
  <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M436 256 Q438 262 437 269"/>
    <path d="M436 306 Q438 312 437 319"/>
    <path d="M436 356 Q438 362 437 369"/>
  </g>
  <g fill="#8a8a93">
    <path d="M437 271 L433 263 L441 263 Z"/>
    <path d="M437 321 L433 313 L441 313 Z"/>
    <path d="M437 371 L433 363 L441 363 Z"/>
  </g>
  <!-- pass labels -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="currentColor">
    <text x="112" y="243">Pass one — sure things: answer cleanly and fast, bank the marks</text>
    <text x="112" y="293">Pass two — mediums: give each its full budget</text>
    <text x="112" y="343">Pass three — hard and uncertain: the remaining time, a mostly-finished paper</text>
    <text x="112" y="393">Final pass — signs, units, skipped sub-parts, your name</text>
  </g>
</svg>`,
      },
      {
        kind: 'figure',
        caption:
          'The Yerkes-Dodson law as the exam-day arousal map: performance peaks at moderate arousal, collapsing into panic as working memory floods. The same racing heart sits on both slopes — fuel if reappraised, paralysis if misread.',
        sketchImage: '/diagrams/exam-strategy-yerkes-dodson-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: an inverted-U curve, performance against arousal, peak labelled moderate arousal, tails too calm and panic, curved arrow "reappraise: fuel, not fog" toward the peak.',
        afterConcept: 9,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 430" role="img" aria-label="The Yerkes-Dodson inverted U: performance peaks at moderate arousal, falling on both sides; reappraisal moves a performer from panic toward the peak">
  <!-- hand-drawn axes (double-stroked, gently wobbly) -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M104 46 Q100 200 104 356"/>
    <path d="M100 352 Q455 356 812 350"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M109 49 Q105 200 109 354"/>
    <path d="M96 357 Q455 361 809 355"/>
  </g>
  <!-- axis labels -->
  <text x="34" y="204" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 34 204)" fill="currentColor">Performance</text>
  <text x="806" y="386" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-style="italic" text-anchor="end" fill="currentColor">Arousal</text>
  <!-- corner note -->
  <text x="122" y="64" font-family="Georgia, 'Times New Roman', serif" font-size="12" fill="#8a8a93">Yerkes-Dodson law (Yerkes &amp; Dodson, 1908)</text>
  <!-- the inverted U -->
  <path d="M116 316 C 200 190 300 100 424 92 C 548 100 648 208 794 328" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" opacity="0.95"/>
  <!-- peak marker -->
  <line x1="424" y1="92" x2="424" y2="348" stroke="#d97706" stroke-width="2" stroke-dasharray="7 6" opacity="0.9"/>
  <text x="424" y="72" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706" text-anchor="middle">moderate arousal — the peak</text>
  <!-- zone labels -->
  <text x="168" y="336" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#8a8a93">too calm — under-aroused</text>
  <text x="668" y="316" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#e11d48" text-anchor="middle">panic: working memory flooded</text>
  <!-- reappraisal arrow -->
  <path d="M696 236 C 640 170 560 128 486 112" fill="none" stroke="#059669" stroke-width="2.2" stroke-dasharray="6 5" stroke-linecap="round"/>
  <path d="M480 110 L494 106 L490 120 Z" fill="#059669"/>
  <text x="652" y="196" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669">reappraise the racing heart —</text>
  <text x="652" y="214" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669">fuel, not fog</text>
</svg>`,
      },
      { kind: 'heading', text: 'The Mathematics of Guessing' },
      {
        kind: 'formula',
        name: 'Expected value of a guess',
        latex: 'EV = \\tfrac{1}{n}R - \\tfrac{n-1}{n}W',
        meaning: 'A blind guess among n live options: chance-weighted reward R minus penalty W. Guess when EV is positive — or narrow until it is.',
      },
      {
        kind: 'derivation',
        title: 'The guessing arithmetic: when a blank beats a guess',
        statement:
          'Derivation of the guessing rule used above: when a blind guess pays, why every elimination multiplies the edge, and the one regime where the blank is rational.',
        prerequisites: ['Expected value', 'The scoring regime (reward R, penalty W, n live options)'],
        steps: [
          {
            label: 'Step 1: Model the blind guess',
            formula: '$$EV = \\frac{1}{n}\\,R - \\frac{n-1}{n}\\,W$$',
            explanation:
              'Exactly one of n live options is correct: the guess succeeds with probability 1/n collecting R, fails otherwise paying W. Expected value weighs both branches.',
          },
          {
            label: 'Step 2: The common fractional regime (n = 4, R = +1, W = −¼)',
            formula: '$$EV = \\tfrac{1}{4}(1) - \\tfrac{3}{4}\\!\\left(\\tfrac{1}{4}\\right) = \\tfrac{1}{4} - \\tfrac{3}{16} = +0.0625$$',
            explanation:
              'The standard four-option paper: even a blind guess clears zero, and one elimination lifts it six-fold — the +0.375 coin-flip edge.',
          },
          {
            label: 'Step 3: The break-even penalty',
            formula: '$$EV = 0 \\;\\Leftrightarrow\\; W^{*} = \\frac{R}{n-1} \\;\\xrightarrow{\\;n=4\\;}\\; W^{*} = \\tfrac{1}{3}$$',
            explanation:
              'Set EV to zero: guessing pays whenever the penalty is lighter than R/(n−1) — the standard −¼ beats −⅓; five options at −¼ sit exactly at EV = ⅕ − ⅘·¼ = 0, and any elimination tips it positive.',
          },
          {
            label: 'Step 4: The full-penalty regime',
            formula: '$$W = -R \\;\\Rightarrow\\; EV = \\tfrac{1}{4}R - \\tfrac{3}{4}R = -\\tfrac{1}{2}R < 0$$',
            explanation:
              'Only when a wrong answer forfeits the full reward does the sign flip — an expected loss of half a mark against the blank\'s zero: the one regime where the blank is rational.',
          },
          {
            label: 'Step 5: The rule that survives every regime',
            formula: '$$\\text{answer} \\iff EV > 0 \\quad\\Longleftrightarrow\\quad p\\,R > (1-p)\\,W$$',
            explanation:
              'Answer exactly when your belief-weighted reward beats your belief-weighted penalty: narrowing raises p, fractional penalties lower the W to beat. Never leave a blank you could narrow, and never answer at random under a full penalty.',
          },
        ],
        result:
          'Guess whenever EV > 0. Under the standard fractional penalty a blind guess already clears zero (+0.0625), every elimination multiplies the edge, and the break-even penalty is W* = R/(n−1) = −⅓ for four options — the standard −¼ sits inside it. Only a full forfeiture flips the sign: the blank wins.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a 120-minute, 100-point paper — twenty multiple-choice questions worth 1 point each, three short answers worth 10 each, one essay worth 30. Build the plan.',
        'Recall the governing ideas: budget minutes in proportion to points, hold a buffer, triage in passes, outline the essay before writing it.',
        'Apply: multiple choice gets 20 minutes (one per point), short answers 36 minutes (12 each), the essay 40 minutes — eight for the outline, thirty-two for prose — leaving 24 minutes of buffer. Order: bank the multiple choice first, outline the essay before writing it, keep the hardest short answer for last.',
        'State the result: every section has a budget and every hard question a ceiling; the buffer absorbs shocks, and you finish with time to check instead of expiring mid-essay.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'University finals: past papers plus point arithmetic turn a three-hour paper into a series of budgeted sprints.',
        'Standardised tests (SAT, GRE, MCAT): section timings are published in advance, so budgets and triage rules can be rehearsed to the minute.',
        'Professional exams (bar essays, medical boards): partial-credit strategy — visible reasoning, outlined answers — is worth more than extra facts.',
        'Technical interviews: thinking aloud converts whiteboard panic into a demonstration of method, and pausing to structure is expected.',
        'Any timed performance: the same arousal-control toolkit serves auditions, thesis defences and driving tests.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic losses: the all-nighter that trades consolidation for exposure; the sunk-cost question that eats forty minutes of a five-point item; blanks left unfilled; essays written without outlines. Two subtler ones: changing answers for no reason is neutral at best, but changing them with a specific reason improves scores — know the difference. And do not let the corridor crowd set your arousal level; arrive warmed up, not wound up.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'consolidation', def: 'The sleep-dependent stabilisation of memory after study.' },
        { term: 'retrieval warm-up', def: 'Brief practice questions before an exam that prime the memory system about to be used.' },
        { term: 'point budget', def: 'Allocating exam minutes in proportion to the marks each question offers.' },
        { term: 'error triage', def: 'Answering in passes — sure things, then mediums, then hard items — rather than in paper order.' },
        { term: 'partial credit', def: 'Marks awarded for visible method and setup, even when the final answer is wrong.' },
        { term: 'Yerkes-Dodson law', def: 'The finding that performance peaks at moderate arousal and falls when arousal is too low or too high.' },
        { term: 'reappraisal', def: 'Relabelling a racing heart as excitement rather than fear, exploiting their physiological similarity.' },
        { term: 'hard-start, jump-to-easy', def: 'Attempting the hardest question first when the format allows, then switching to easier ones so the diffuse mode keeps incubating it.' },
        { term: 'expected value', def: 'The chance-weighted average outcome of a guess — positive means answer, negative means the blank wins.' },
        { term: 'expressive writing', def: 'A brief pre-exam writing assignment about one\'s worries that evicts them from working memory and lifts scores, especially for test-anxious students.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The best final evening before a morning exam is…',
          options: ['an all-nighter covering weak topics', 'a light summary-sheet review, materials packed, normal bedtime', 'a fresh practice exam at midnight', 'group quizzing until two in the morning'],
          answer: 1,
          explain: 'Sleep consolidates; all-nighters trade it for shallow exposure and slower recall the next day.',
        },
        {
          q: 'On a 100-point, 120-minute paper, a 10-point short answer deserves about…',
          options: ['five minutes', 'twelve minutes, inside a buffered budget', 'thirty minutes, because short answers are dense', 'as long as it takes'],
          answer: 1,
          explain: 'Minutes follow marks — one minute per point here — with the global buffer absorbing overruns and checking.',
        },
        {
          q: 'The three-pass triage order is…',
          options: ['hardest first, while you are fresh', 'paper order, no exceptions', 'sure things, then mediums, then hard items', 'essays last, always'],
          answer: 2,
          explain: 'Bank the cheap marks first, spend full budgets on mediums, then attack the hard items with what remains.',
        },
        {
          q: 'Following the Yerkes-Dodson logic, exam anxiety is best handled by…',
          options: ['suppressing all arousal', 'relabelling and regulating it toward moderate levels', 'caffeine, to convert it into focus', 'answering the hardest question first to burn it off'],
          answer: 1,
          explain: 'Moderate arousal is optimal, and reappraisal plus slow exhales steer toward it — the racing heart is fuel if labelled correctly.',
        },
          {
            q: 'A paper scores +1 for a correct multiple choice and −0.25 for a wrong one (4 options). You can eliminate two options. The expected value of guessing is:',
            options: ['negative — leave it blank', 'exactly zero — it makes no difference', 'positive: 0.5 × 1 − 0.5 × 0.25 = +0.375, so answer', 'impossible to compute without knowing the topic'],
            answer: 2,
            explain: 'With two options eliminated the guess is a coin flip that pays 1 against 0.25 — expected value +0.375. Under fractional penalties, narrowing always beats blanking.',
          },
          {
            q: 'The Benjamin, Cavell and Shallenberger (1984) review of answer-changing found that:',
            options: ['changes go wrong-to-right about twice as often as right-to-wrong — the first-instinct folklore is false', 'first answers are almost always best — never change', 'changes make no difference on average', 'only top students benefit from changing answers'],
            answer: 0,
            explain: 'Across 33 studies, changes improved scores about two-to-one — provided the change is made for a specific reason (misread, recalled, units error).',
          },
          {
            q: 'Beilock\'s choking experiments showed pressure hurts skilled performers mainly because:',
            options: ['adrenaline damages muscle memory', 'attention turns inward to step-by-step mechanics the skill has outgrown', 'working memory expands and overwhelms the checker', 'the brain runs out of glucose'],
            answer: 1,
            explain: 'Experts run on compiled procedures; consciously monitoring mechanics re-inserts novice-level control — which is why practising under mild pressure and parking attention on one cue defends the skill.',
          },
          {
            q: 'A 90-point paper allows 180 minutes and you reserve 20 minutes for checking. The per-point budget is about:',
            options: ['1 minute per point', '1.8 minutes per point', '2.5 minutes per point', '3 minutes per point'],
            answer: 1,
            explain: '(180 − 20) / 90 ≈ 1.78 — reserve the buffer first, then divide what remains by the marks; every question gets a ceiling in the same currency.',
          },
          {
            q: 'In Ramirez and Beilock\'s 2011 Science experiments, ten minutes of expressive writing before an important exam helped most:',
            options: ['students who had not studied', 'students habitually anxious about test-taking — writing the worries down freed working memory', 'top students, who used the time to plan', 'nobody — writing made no difference'],
            answer: 1,
            explain: 'The assignment significantly improved scores, especially for test-anxious students: worries consume the working memory the exam needs, and papering them out evicts them.',
          },
          {
            q: 'A five-option question scores +1 correct and −¼ wrong. The expected value of a blind guess is:',
            options: ['+0.0625, the same as a four-option paper', 'exactly zero — but eliminating one option turns it positive', '−0.20, so always leave it blank', 'impossible to compute without the topic'],
            answer: 1,
            explain: 'EV = ⅕(1) − ⅘(¼) = 0 exactly; one elimination lifts it to ¼(1) − ¾(¼) = +0.0625 — the break-even line the derivation solves for.',
          },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: having studied — this playbook amplifies preparation, it does not replace it. Read the spaced repetition and active recall lessons for the months before, and note-taking systems for building the assets this topic assumes. Follow with deliberate practice for skill-based assessments, from labs to language orals.',
      },
    ],
  },
]
