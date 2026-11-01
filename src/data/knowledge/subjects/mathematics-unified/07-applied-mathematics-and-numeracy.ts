/**
 * Knowledge Universe — Mathematics — Chapter 07: Applied Mathematics & Numeracy
 * 3 lessons · ~6,336 words (07.1 rewritten 2026-11-02 to textbook standard: 883 → 2,811 words, figure plate + derivation added)
 * fields: Applied & Finite Mathematics, Everyday Math & Numeracy
 * legacy sources: foundation-learning.ts, x25-tournament-reasoning-civics-pass.ts, x30-orphan-final-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Applied & Finite Mathematics, Everyday Math & Numeracy]
 *
 * Lessons (snapshot at reorganization):
 *   07.1 fnd-percentage-ratio-mental-math — Percentage, Ratio and Mental Math Shortcuts
 *   07.2 math-graphical-linear-programming — Linear Programming by Graph: Feasible Regions and Corner Points
 *   07.3 math-formulating-real-life-problems — From Words to Equations: Formulating Real-Life Problems
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh07: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'fnd-percentage-ratio-mental-math',
    title: 'Percentage, Ratio and Mental Math Shortcuts',
    domain: 'Foundation Learning',
    field: 'Everyday Math & Numeracy',
    branch: 'Practical Arithmetic',
    tier: 'core',
    concepts: [
      'Percent as parts per hundred',
      'The swap trick: x percent of y equals y percent of x',
      'The 10 percent anchor for tips and discounts',
      'Percentage change is always measured against the original',
      'Successive changes combine multiplicatively',
      'Percentage points versus relative percent',
      'Ratios and the unitary method',
      'Double-and-halve, distribution, and estimation brackets',
    ],
    words: 2811,
    readMins: 14,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A shop window advertises “50% OFF — take an extra 20% off the reduced price”. Shoppers who add the two numbers stay outside, satisfied that everything is 70% off. It is not. The second 20% is taken off the already-halved price, so a 100 rupee item falls to 50, then to 40 — a total reduction of 60%, not 70%. The difference between reading that sign correctly and misreading it is exactly the difference between numerical fluency and numerical helplessness, and this lesson builds the fluency: what a percent truly is, how changes stack, how ratios scale, and the small toolkit of mental reorderings that let you recompute a bill, a tip or a headline faster than the person quoting it.',
      },
      { kind: 'heading', text: 'What a percent actually is' },
      {
        kind: 'para',
        text: 'A percent is a fraction whose denominator has been fixed at one hundred: 8 percent means 8/100, written as the decimal 0.08. The word is Latin — per centum, “by the hundred” — and the symbol % grew out of the Italian merchants’ shorthand for per cento in their ledgers. Those merchants had good reason for the convention: when Leonardo of Pisa published the Liber Abaci in 1202, introducing Hindu-Arabic numerals to European commerce, interest rates, taxes and profit shares were all negotiated in parts per hundred, and a common denominator made every comparison instant. It still does. In percent arithmetic the word of means multiply: 8 percent of 250 is 250 × 8/100 = 2000/100 = 20. Reading percentages as fractions unlocks the whole family of familiar equivalences — 50% is a half, 25% a quarter, 20% a fifth, 10% a tenth, 12.5% an eighth, and 33⅓% a third — and fluency among percent, fraction and decimal is the gateway skill this chapter assumes everywhere else.',
      },
      {
        kind: 'para',
        text: 'Because multiplication commutes, x percent of y always equals y percent of x — a fact that sounds like a trivia question and behaves like a superpower. Four percent of 75 is an awkward thought; 75 percent of 4 — three quarters of four — is instantly 3. Eight percent of 25 rewrites itself as 25 percent of 8, and a quarter of eight is 2. The rule costs nothing to verify: x/100 × y = y/100 × x. The habit it buys is worth more: before computing any percentage, glance at both numbers and ask which arrangement is friendly. If one of them is 25, 50, 75 or a small whole number, the swap turns a pencil-and-paper problem into a one-step mental one.',
      },
      {
        kind: 'para',
        text: 'The second workhorse is the 10 percent anchor. Ten percent of any number is that number divided by ten — slide the decimal point one place left: 10% of 64 is 6.40, 10% of 846 is 84.6. Every other useful percentage is then a short walk from the anchor: halve it for 5 percent, add the two for 15 percent, double for 20 percent, take a quarter for 2.5 percent. A 15 percent tip on a 64 rupee bill is 6.40 plus 3.20, which is 9.60 — computed in the time it takes to say it. The figure below gathers the two ideas into one picture: the percent triangle showing which number is the base, and the ladder that builds every percentage from the single anchor you can always find in your head.',
      },
      {
        kind: 'figure',
        caption:
          'The mental percentage machine. LEFT — the percent triangle: amount = base × rate/100, and each quantity is found by multiplying or dividing the other two; locating the base (the number after “of”) is the step that prevents most errors. RIGHT — the 10 percent anchor ladder: divide by ten once for 10%, halve that for 5%, and build 15, 20, 25 or 17.5 percent by adding short walks along the ladder.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 880 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A percent triangle relating base, rate and amount, beside a ladder building five, ten, fifteen, twenty and twenty-five percent from the ten percent anchor">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.rose{fill:#e11d48}.vio{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.mid{font-family:Georgia,serif;font-size:13.5px;font-weight:bold;fill:#3f3f46;text-anchor:middle}</style>
  <rect x="24" y="52" width="404" height="352" rx="12" class="box"/>
  <text class="lbl big" x="40" y="78">The percent triangle</text>
  <text class="sm" x="40" y="96">amount = base × rate ÷ 100</text>
  <path d="M150 300 L110 150 L250 150 Z" fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linejoin="round"/>
  <rect x="96" y="118" width="168" height="30" rx="8" fill="#fafafa" stroke="#e11d48" stroke-width="2"/>
  <text class="mid" x="180" y="138">RATE  8%</text>
  <rect x="36" y="284" width="150" height="30" rx="8" fill="#fafafa" stroke="#7c3aed" stroke-width="2"/>
  <text class="mid" x="111" y="304">BASE  250</text>
  <rect x="216" y="284" width="150" height="30" rx="8" fill="#fafafa" stroke="#8a8a93" stroke-width="2"/>
  <text class="mid" x="291" y="304">AMOUNT  20</text>
  <text class="sm" x="60" y="220">× rate ÷ 100 →</text>
  <text class="sm" x="222" y="220">← ÷ rate × 100</text>
  <text class="sm" x="150" y="348">the base is the number after “of” — 8% of 250</text>
  <text class="sm" x="150" y="366">÷ 100 × base ↔ amount for any corner</text>
  <rect x="452" y="52" width="404" height="352" rx="12" class="box"/>
  <text class="lbl big" x="468" y="78">The 10 percent anchor ladder</text>
  <text class="sm" x="468" y="96">build every percentage from ÷10 — bill 84.60</text>
  <text class="mid" x="500" y="130">20%</text><rect x="540" y="118" width="180" height="24" rx="6" fill="#f4f4f5" stroke="#c8c8d0"/><text class="sm" x="630" y="135" text-anchor="middle">16.92 = double the anchor</text>
  <text class="mid" x="500" y="170">15%</text><rect x="540" y="158" width="180" height="24" rx="6" fill="#faf5ff" stroke="#c4b5fd"/><text class="sm" x="630" y="175" text-anchor="middle">12.69 = 10% + 5%</text>
  <text class="mid" x="500" y="210">10%</text><rect x="540" y="198" width="180" height="26" rx="6" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/><text class="sm" x="630" y="216" text-anchor="middle">8.46 = 84.60 ÷ 10 (anchor)</text>
  <text class="mid" x="500" y="250">5%</text><rect x="540" y="238" width="180" height="24" rx="6" fill="#faf5ff" stroke="#c4b5fd"/><text class="sm" x="630" y="255" text-anchor="middle">4.23 = half the anchor</text>
  <text class="mid" x="500" y="290">2.5%</text><rect x="540" y="278" width="180" height="24" rx="6" fill="#f4f4f5" stroke="#c8c8d0"/><text class="sm" x="630" y="295" text-anchor="middle">2.115 = half of 5%</text>
  <line x1="500" y1="120" x2="500" y2="290" stroke="#e11d48" stroke-width="3"/>
  <text class="sm" x="468" y="348">17.5% tip = 10% + 5% + 2.5% = 8.46 + 4.23 + 2.115</text>
  <text class="sm" x="468" y="366">= 14.805 ≈ 14.81 — no pencil, no phone</text>
</svg>`,
      },
      { kind: 'heading', text: 'Percentage change: always ask “of what?”' },
      {
        kind: 'para',
        text: 'A percentage change is a comparison, and every comparison needs a reference. The convention is that change is measured against the original — where you started, not where you arrived. Rising from 40 to 50 is a change of 10 on a base of 40, hence 10/40 = 25 percent; falling from 50 back to 40 is a change of 10 on a base of 50, hence only 20 percent. Same distance, different base, different percentage — which is why “up 25% then down 20%” is a round trip, and why every percentage-change question should trigger the same reflex: find the original first. In a sentence like “the price of 80 rose to 100”, the original is 80, the change is 20, and the answer is 20/80 = 25 percent.',
      },
      {
        kind: 'formula',
        name: 'Percentage change',
        latex: '\\%\\,\\Delta = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100',
        meaning: 'Change is measured against the original value, which is why up and down by the same percent are asymmetric.',
      },
      {
        kind: 'para',
        text: 'Successive changes do not add — they multiply, because each one acts on whatever the previous one left behind. A 20 percent rise followed by a 20 percent fall is not zero: the multiplier 1.20 followed by 0.80 gives 1.20 × 0.80 = 0.96, a net loss of 4 percent. The derivation below turns that observation into a formula worth memorizing, and the worked examples that follow run it on prices, taxes and salaries.',
      },
      {
        kind: 'derivation',
        title: 'The successive-changes formula, derived',
        statement:
          'Two successive changes of a percent and then b percent combine into a single net change of a + b + ab/100 percent. The proof is one line of algebra on the multipliers.',
        prerequisites: ['A change of p percent multiplies the value by (1 + p/100)', 'Expanding a product of two binomials'],
        steps: [
          {
            label: 'Write both multipliers',
            formula: '$\\left(1 + \\frac{a}{100}\\right)\\left(1 + \\frac{b}{100}\\right)$',
            explanation: 'A rise of a percent multiplies by 1 + a/100; a fall of b percent is just b negative, multiplying by 1 − b/100 — the same formula with b < 0.',
          },
          {
            label: 'Expand',
            formula: '$1 + \\frac{a}{100} + \\frac{b}{100} + \\frac{ab}{10000}$',
            explanation: 'Ordinary binomial expansion: each term meets each term. The cross-term ab/10000 is the interaction the naive sum forgets.',
          },
          {
            label: 'Read off the net change',
            formula: '$\\text{net} = a + b + \\frac{ab}{100}$',
            explanation: 'The total multiplier exceeds 1 by (a + b)/100 + ab/10000, so the net percentage change is a + b + ab/100. Check: +20 then −20 gives 20 − 20 − 400/100 = −4 percent, matching 1.20 × 0.80 = 0.96.',
          },
        ],
        result:
          'Net percent = a + b + ab/100. The cross-term is usually small but never zero: +10 then +8 nets 18.8 percent, not 18; +50 then −50 nets −25 percent, not 0. Multiplication, not addition, is how changes stack.',
      },
      {
        kind: 'formula',
        name: 'Successive percentage changes',
        latex: '\\text{net}\\% = a + b + \\frac{ab}{100}',
        meaning: 'Two successive changes of a and b percent net a + b + ab/100 percent — the cross-term is the whole difference between stacking and adding.',
      },
      { kind: 'heading', text: 'Percentage points versus relative percent' },
      {
        kind: 'para',
        text: 'When a news report says an interest rate rose from 4 percent to 7 percent, two true sentences describe it: the rate rose by 3 percentage points, and it rose by 75 percent. Both are correct because they answer different questions. Percentage points are the plain difference — 7 minus 4 — the way you would subtract any two numbers. The relative change is measured, as always, against the original: 3 points on a base of 4 percent is 3/4 = 75 percent. Headlines exploit the gap between the two readings relentlessly: “a 30 percent rise in the failure rate” may describe a move from 10 percent to 13 percent — three points — and your sense of alarm should depend on which reading matters for the decision at hand. The discipline is simple: when you hear a percent about a percent, stop and ask which of the two is being quoted.',
      },
      { kind: 'heading', text: 'Ratios and the unitary method' },
      {
        kind: 'para',
        text: 'A ratio compares two quantities by division: mixing paint in the ratio 3:2 means three parts one colour for every two parts the other — five parts in each round of the recipe. To share 240 rupees in the ratio 3:2, count the parts (5), find one part (240 ÷ 5 = 48), and hand out multiples: 3 × 48 = 144 and 2 × 48 = 96, which sum back to 240 as a check. The same move, dressed differently, is the unitary method: find the value of one unit first, then scale to the units you want. Seven notebooks cost 42, so one notebook costs 42 ÷ 7 = 6, so twelve notebooks cost 12 × 6 = 72. A recipe for four that must feed six scales by 6 ÷ 4 = 1.5: multiply every quantity by one and a half. Proportion problems — prices, speeds, recipes, conversion — nearly all yield to this single habit, no algebra required.',
      },
      { kind: 'heading', text: 'The mental multiplication toolkit' },
      {
        kind: 'para',
        text: 'Three reorderings do most of the work of mental arithmetic. Double-and-halve: since 2 × ½ = 1, doubling one factor and halving the other leaves the product unchanged — 15 × 22 becomes 30 × 11, which is 330; 25 × 16 becomes 50 × 8, or 100 × 4, landing on 400. Distribution: split an unfriendly factor into round pieces — 7 × 98 is 7 × (100 − 2) = 700 − 14 = 686; 6 × 23 is 6 × 20 + 6 × 3 = 120 + 18 = 138. Friendly factors: 25 is a quarter of a hundred, so multiplying by 25 is quartering then appending two zeros — the 25 × 16 example again, seen from the other side. Each trick is a tiny application of the commutative, associative and distributive laws — the same laws algebra will formalize later — and together they turn a page of column arithmetic into a few seconds of rehearsal.',
      },
      {
        kind: 'para',
        text: 'The last habit is the estimation bracket: before computing anything exactly, cage the answer between two easy values. A 17.5 percent tip on 84.60 must exceed the 15 percent figure (12.69) and stay below the 20 percent figure (16.92); the anchor ladder narrows it to 8.46 + 4.23 + 2.115 = 14.805, so about 14.81. Estimation does not replace exact arithmetic — it guards it. An answer outside the bracket is visibly wrong before anyone else notices, whether it came from a slip of the pencil or a spreadsheet formula referencing the wrong cell.',
      },
      { kind: 'heading', text: 'Three worked examples' },
      {
        kind: 'example',
        title: 'The shop-window sign, settled',
        steps: [
          'Identify what is asked: the final price of a jacket marked 120 with a 30 percent discount, then 8 percent tax added — and the honest overall change.',
          'Apply the discount: 30 percent of 120 is 36, so the sale price is 120 − 36 = 84.',
          'Apply the tax to the new base: 8 percent of 84 is 6.72, so the till asks for 84 × 1.08 = 90.72.',
          'Combine honestly with the formula: net = −30 + 8 + (−30)(8)/100 = −22 − 2.4 = −24.4 percent.',
          'State the result: the jacket costs 90.72, which is 75.6 percent of the marked price — an overall reduction of 24.4 percent, not the 22 percent a naive subtraction would suggest, because the tax acted on the smaller post-discount base.',
        ],
      },
      {
        kind: 'example',
        title: 'Two raises in a row',
        steps: [
          'Identify what is asked: a salary of 50,000 rises by 10 percent one year and 8 percent the next — what is the total rise?',
          'First raise: 10 percent of 50,000 is 5,000, giving 55,000.',
          'Second raise: 8 percent of the new 55,000 is 4,400, giving 59,400.',
          'Check with the formula: net = 10 + 8 + 80/100 = 18.8 percent, and 50,000 × 1.188 = 59,400.',
          'State the result: the salary rose 18.8 percent over two years — the cross-term 0.8 is exactly the 400 the naive 18 percent reading would miss.',
        ],
      },
      {
        kind: 'example',
        title: 'Sharing in a ratio',
        steps: [
          'Identify what is asked: divide 720 rupees among three people in the ratio 2:3:4.',
          'Count the parts: 2 + 3 + 4 = 9 parts make up the whole 720.',
          'Find one part: 720 ÷ 9 = 80.',
          'Scale each share: 2 × 80 = 160, 3 × 80 = 240, 4 × 80 = 320.',
          'State the result: the shares are 160, 240 and 320 — and they sum back to 720, which is the check that costs nothing and catches everything.',
        ],
      },
      {
        kind: 'callout',
        title: 'Where the fluency pays',
        text: 'Tips and bills: the anchor ladder prices a 15 or 17.5 percent tip in seconds. Loans: a “1 percent per month” offer compounds to 1.01 to the twelfth = 1.1268, about 12.68 percent a year — noticeably more than the advertised 12. News: three points on a ten percent base is a 30 percent relative rise, and knowing which reading a headline uses changes how alarmed to be. Cooking: ratios stretch any four-person recipe to six by scaling 1.5, or to two by halving. None of these waits for a pencil.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'Common pitfalls',
        text: 'The classic error is adding percentages that live on different bases — 30 percent off plus 8 percent tax is not 22 percent off, because the tax is charged on the reduced price. The second is percent-versus-points confusion, which quietly triples or halves reported statistics. The third is losing the base in “of what”: 8 percent of 25 and 25 percent of 8 agree, but 8 percent of 250 is ten times either. And watch decimal slips when converting: 0.5 percent is half of one percent, not five.',
        tone: 'warn',
      },
      {
        kind: 'callout',
        title: 'Study path',
        text: 'Prerequisites: multiplication tables and basic fractions — the fraction equivalences of 50, 25 and 20 percent should eventually be as automatic as the tables themselves. Next in this book: algebraic proportions and formula manipulation, simple and compound interest (where the successive-changes formula becomes a full year-by-year machine), and the estimation habits that underpin statistical literacy.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Key terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Percent', def: 'A fraction with denominator 100; the word of between them means multiply.' },
          { term: 'Base', def: 'The number a percentage is taken of — the reference that change and share are measured against.' },
          { term: 'Percentage point', def: 'The plain difference between two percentages, distinct from relative change.' },
          { term: 'Ratio', def: 'A comparison of quantities by division, written 3:2 — three parts to two.' },
          { term: 'Unitary method', def: 'Find the value of one unit, then scale to the units required.' },
          { term: 'Anchor', def: 'Ten percent of the base — divide by ten — from which other percentages are built.' },
          { term: 'Double-and-halve', def: 'Doubling one factor and halving the other leaves the product unchanged.' },
          { term: 'Estimation bracket', def: 'Caging an answer between two easily computed bounds before calculating.' },
        ],
      },
      { kind: 'heading', text: 'Check your understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What is 8 percent of 25, using the swap trick?',
            options: ['2', '1.5', '2.5', '0.2'],
            answer: 0,
            explain: '8 percent of 25 equals 25 percent of 8, and a quarter of 8 is 2.',
          },
          {
            q: 'A price rises from 80 to 100. What is the percentage increase?',
            options: ['20 percent', '25 percent', '80 percent', 'It depends on the currency'],
            answer: 1,
            explain: 'The change is 20, measured against the original 80: 20/80 = 25 percent — always divide by where you started.',
          },
          {
            q: 'An interest rate rises from 4 percent to 7 percent. Which statement is correct?',
            options: ['A 3 percent increase', 'A 3 percentage point rise — a 75 percent relative increase', 'A 7 percent rise', 'A 43 percent point rise'],
            answer: 1,
            explain: 'The difference is 3 points; measured against the original 4 percent that is 3/4 = 75 percent.',
          },
          {
            q: 'After a 20 percent rise and then a 20 percent fall, a price is:',
            options: ['Back where it started', '4 percent lower', '4 percent higher', '20 percent lower'],
            answer: 1,
            explain: 'The multipliers give 1.20 × 0.80 = 0.96, a net 4 percent decrease — the formula gives 20 − 20 − 400/100 = −4.',
          },
          {
            q: 'A 15 percent tip on a 64 rupee bill is:',
            options: ['9.60', '6.40', '12.80', '4.80'],
            answer: 0,
            explain: 'The anchor 10 percent is 6.40; half of it, 5 percent, is 3.20; the sum is 9.60.',
          },
          {
            q: 'A jacket marked 120 takes a 30 percent discount, then 8 percent tax. The final price is:',
            options: ['90.72', '93.60', '86.40', '98.40'],
            answer: 0,
            explain: '120 − 36 = 84 after the discount; tax on the new base: 84 × 1.08 = 90.72. Adding the percents (−22 percent) would wrongly give 93.60.',
          },
          {
            q: 'Divide 240 rupees in the ratio 3:2. The larger share is:',
            options: ['144', '120', '160', '96'],
            answer: 0,
            explain: 'Five parts make 240, so one part is 48; the larger share is 3 × 48 = 144 (and 2 × 48 = 96 makes the total check out).',
          },
          {
            q: 'Using distribution, 7 × 98 equals:',
            options: ['686', '694', '672', '700'],
            answer: 0,
            explain: '7 × (100 − 2) = 700 − 14 = 686 — split the unfriendly factor into round pieces.',
          },
        ],
      },
      { kind: 'heading', text: 'Five-minute recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Percent means per hundred and of means multiply; 8 percent of 250 is 20.',
          'Swap when it helps: x percent of y equals y percent of x — 4 percent of 75 is 75 percent of 4.',
          'Build from the 10 percent anchor: halve for 5, add for 15, double for 20.',
          'Percentage change divides by the original; up 25 then down 20 is a round trip.',
          'Successive changes multiply: net percent is a + b + ab/100, so +10 then +8 is 18.8, not 18.',
          'Percentage points are plain differences; relative change divides by the original rate.',
          'Ratios: count parts, price one part, scale — and check the sum.',
          'Double-and-halve, distribute, and bracket every answer with an estimate.',
        ],
      },
    ],
  },
  {
    id: 'math-graphical-linear-programming',
    title: 'Linear Programming by Graph: Feasible Regions and Corner Points',
    domain: 'Mathematics',
    field: 'Applied & Finite Mathematics',
    branch: 'Linear Programming',
    tier: 'intermediate',
    concepts: [
      'Objective function and decision variables',
      'Constraints, including non-negativity',
      'Half-planes and their intersection',
      'The feasible region',
      'Corner points and the Fundamental Theorem of Linear Programming',
      'Vertex evaluation versus the iso-profit line',
      'Infeasible and unbounded outcomes',
      'Modelling word problems as LPs',
    ],
    words: 1624,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Business, logistics and economics constantly ask the same shaped question: given limited resources, what choice maximizes profit or minimizes cost? A factory with machine-hours and labour hours must decide how many units of each product to run; a diet planner must meet nutrient floors at minimum cost. Linear programming (LP) is the standard machine for such decisions when both the goal and the restrictions are linear, and the graphical method — the subject of this lesson — makes the whole machinery visible in two dimensions. Exam questions reward exactly two skills: translating a story into an objective function plus constraints, and walking the graphical procedure to the optimal corner.',
      },
      {
        kind: 'para',
        text: 'The deep surprise of the subject is how little searching the optimum requires. A feasible region has infinitely many points, yet the best one always sits at a corner. That fact — the Fundamental Theorem of Linear Programming — converts an infinite search into a four-corner table, and it is the reason the method generalizes, far beyond what any picture can show, to the simplex algorithm running on thousands of variables. Understand the picture honestly and the algebra of industrial optimization becomes an obvious extension.',
      },
      { kind: 'heading', text: 'The anatomy of a linear programme' },
      {
        kind: 'para',
        text: 'Every LP problem has three parts. First, decision variables: the quantities you control, named explicitly — let x be the hours assigned to job one, let y the hours for job two. Second, an objective function: a linear expression to maximize or minimize, such as income I = 40x + 30y. Third, constraints: linear inequalities bounding the variables, always including the non-negativity pair x \u2265 0, y \u2265 0, since no real job takes negative hours. A standard maximization problem writes every constraint as ax + by \u2264 c with c non-negative.',
      },
      {
        kind: 'para',
        text: 'Translation from words is where marks are lost, so be mechanical. Each stated limit becomes one inequality; each per-unit contribution becomes a coefficient in the objective. Keep a small ledger while reading the story: what is limited (hours, money, material), what earns or costs (per-unit values), what is asked (maximize or minimize). The ledger fills the three parts without guesswork, and the non-negativity pair — so easy to forget — is what keeps the region in the first quadrant where the story actually lives.',
      },
      { kind: 'heading', text: 'Half-planes and the feasible region' },
      {
        kind: 'para',
        text: 'A linear inequality such as x + y \u2264 12 cuts the plane in two: the boundary line x + y = 12 and one of the two half-planes either side of it. Graph the boundary by its intercepts (set x = 0, then y = 0), draw it solid when the inequality is \u2264 or \u2265 and dashed when it is strict, then test one easy point — the origin unless the line passes through it — to learn which side satisfies the inequality. Each constraint contributes one shaded half-plane.',
      },
      {
        kind: 'para',
        text: 'The feasible region is the intersection of all the half-planes at once: the set of points satisfying every constraint simultaneously. Geometrically it is a convex polygon (possibly unbounded, possibly empty), and every point inside it is a feasible solution — a legal schedule of the decision variables. Convexity matters: the region never has dents, because the intersection of half-planes cannot create one. When you shade the region you are drawing the complete list of choices the world allows, before any talk of what is best.',
      },
      { kind: 'heading', text: 'The corner point theorem' },
      {
        kind: 'para',
        text: 'The Fundamental Theorem of Linear Programming states that the maximum or minimum value of the objective function, if it exists, occurs at a vertex — a corner point — of the feasible region. Corners are where boundary lines cross, so they are found by solving small pairs of simultaneous equations: intersect each boundary with each other and with the axes, and keep the crossing points that satisfy all constraints. A bounded region with five sides has at most five candidates.',
      },
      {
        kind: 'para',
        text: 'Why should the optimum be a corner? Picture the objective as a family of parallel lines, one for each fixed value of I; increasing I slides the line across the plane. The largest value the region can reach is reached where the sliding line is about to leave the region entirely — and for a convex polygon that last touch is at a vertex. The theorem turns optimization into bookkeeping: list the corners, evaluate the objective at each, circle the winner. Two honest exceptions complete the theory: if the constraints contradict, the region is empty and the problem is infeasible; if the region is unbounded in the improving direction, no maximum exists and the problem is unbounded.',
      },
      { kind: 'heading', text: 'Two equivalent readings of the optimum' },
      {
        kind: 'para',
        text: 'The evaluation method and the sliding-line method answer the same question and checking one against the other catches slips. In the evaluation method you compute the objective at every corner and compare. In the iso-profit (sliding-line) method you draw the objective line for some convenient value, then move it parallel to itself — up and to the right for maximization — until it last touches the region; the corner where it leaves is the optimum. The sliding line is also the fastest visual answer to "which constraint is binding": the optimal corner is the intersection of the two boundary lines that the objective line meets last, and those constraints are the ones the solution exhausts.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Niki\u2019s two jobs (LibreTexts, Math 101 §7.2.1)',
        steps: [
          'Story: Niki works two part-time jobs. She wants at most 12 total hours a week; job I needs 2 hours of preparation per working hour and job II needs 1, with at most 16 preparation hours available; job I pays $40 per hour and job II $30. Maximize income.',
          'Variables and objective: let x = hours at job I, y = hours at job II; maximize I = 40x + 30y.',
          'Constraints: x + y \u2264 12 (total hours); 2x + y \u2264 16 (preparation); x \u2265 0, y \u2265 0 (non-negativity).',
          'Feasible region: graph both boundary lines and keep the first-quadrant side of each; the region is a quadrilateral with corner points (0, 0), (0, 12), (4, 8) and (8, 0). The corner (4, 8) is the crossing of the two boundary lines, found by solving x + y = 12 and 2x + y = 16 simultaneously.',
          'Evaluate the objective at every corner: I(0,0) = $0; I(0,12) = $360; I(4,8) = 40(4) + 30(8) = $400; I(8,0) = $320. The maximum is $400 at (4, 8): work 4 hours at job I and 8 at job II.',
          'Cross-check by sliding line: the line 40x + 30y = k, moved parallel outward, last touches the region at (4, 8) — both binding constraints meet there, so the schedule uses all 12 work hours and all 16 preparation hours.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Where does the Fundamental Theorem of Linear Programming place the optimal value?',
            options: [
              'at the centre of the feasible region',
              'at a corner point (vertex) of the feasible region',
              'anywhere on the boundary line of the first constraint',
              'at the origin always',
            ],
            answer: 1,
            explain: 'The optimum, if it exists, always occurs at a vertex of the feasibility region — the fact that makes the vertex table a complete search.',
          },
          {
            q: 'In the Niki example, which point maximizes I = 40x + 30y?',
            options: ['(0, 12)', '(8, 0)', '(4, 8)', '(0, 0)'],
            answer: 2,
            explain: 'I(4,8) = $400 beats $360, $320 and $0; the job-I-heavy corners lose because preparation time binds.',
          },
          {
            q: 'A feasible region for a maximization problem extends infinitely upward and the objective grows in that direction. The problem is:',
            options: ['infeasible', 'unbounded — no maximum exists', 'degenerate but solvable', 'still solved at (0, 0)'],
            answer: 1,
            explain: 'When the region is unbounded in the improving direction the objective can grow forever; the theorem\u2019s guarantee applies only when a bounded optimum exists.',
          },
          {
            q: 'Why are the non-negativity constraints x \u2265 0, y \u2265 0 included in word problems?',
            options: [
              'to make the region convex',
              'because decision variables cannot take negative values in the story',
              'because examiners deduct marks otherwise',
              'to guarantee the region has corners',
            ],
            answer: 1,
            explain: 'Hours produced, shipped or worked cannot be negative; the pair also anchors the region in the first quadrant where the graph is read.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Translating carelessly — every stated limit is one inequality, and a missed limit shifts the whole region. Forgetting the non-negativity pair and shading into negative quadrants. Treating a dashed-boundary strict inequality as inclusive at the exam\u2019s cost. Reading corners off the picture instead of solving the two-line systems algebraically — an eyeballed (4.2, 7.8) earns nothing. Evaluating the objective at interior points "near" the best corner: the theorem needs corners only. Declaring "maximum" for a region unbounded in the improving direction, or "minimum" for one unbounded downward. And checking feasibility of a corner after evaluating it — test every candidate against all constraints first; a crossing of two boundaries can still violate a third.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: graphing linear equations and solving two-line systems (the linear-algebra volumes). This lesson is the geometric ground floor of operations research: the simplex algorithm runs the same vertex logic in n dimensions, and the transport, assignment and diet problems are standard LP formulations. Primary reading: LibreTexts, Math 101 Finite Mathematics (University of St. Thomas) §7.2 "Maximization Applications" (math.libretexts.org, CC BY-NC-SA) — the Fundamental Theorem, the six-step procedure and the Niki example used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'An LP has three parts: decision variables, a linear objective, linear constraints including x \u2265 0, y \u2265 0.',
        'Each inequality is a half-plane; the feasible region is the intersection — a convex polygon.',
        'Fundamental Theorem: the optimum, if it exists, sits at a corner point.',
        'Procedure: graph constraints, shade the region, list corners, evaluate the objective at each.',
        'The iso-profit line gives the same corner by sliding; binding constraints meet there.',
        'Empty region = infeasible; unbounded in the improving direction = no maximum.',
      ] },
    ],
  },
  {
    id: 'math-formulating-real-life-problems',
    title: 'From Words to Equations: Formulating Real-Life Problems',
    domain: 'Mathematics',
    field: 'Everyday Math & Numeracy',
    branch: 'Problem Formulation',
    tier: 'core',
    concepts: [
      'The read–identify–name–translate–solve–check strategy',
      'Choosing and defining the variable',
      'Translation vocabulary: totals, comparisons, consecutive',
      'Age, money and ticket problem setups',
      'Mixture and concentration formulations',
      'Systems from two conditions',
      'Formulating inequalities and quadratics',
    ],
    words: 1901,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'A word problem is a story with a locked door; formulation is the act of finding the lock. Most students lose marks not while solving an equation but before one exists — because the sentence “the sum of two consecutive integers is 47” never became n + (n + 1) = 47 on the page. This lesson drills that first move as a skill of its own: reading a situation, naming the unknown, and translating English into algebra with a small, reliable vocabulary of turns of phrase. The solving techniques themselves live in the algebra chapters; here the equation is the finish line, and checking that the finished model honestly encodes the story is part of the job.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Standard tests increasingly frame questions as scenarios — prices, ages, mixtures, schedules — precisely because formulation separates understanding from pattern-matching. The good news is that the skill is finite: a handful of classic families (age, money, mixture, rate, geometry, two-condition systems) covers nearly every phrasing, and each family has a fixed setup sentence. Learn to write the setup sentence — “let n be the first integer, so the next is n + 1” — and the translation almost writes itself. The five-step strategy below is the open-textbook version of that discipline, and it works identically for linear, quadratic and inequality models; only the translating sentence changes.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'The strategy', def: 'Read the problem until the words and ideas are clear; identify what is being asked; name the unknown with a variable (and a sentence defining it); translate the English sentence into an equation; solve; check the answer against the original story; answer in a complete sentence.' },
          { term: 'Variable definition sentence', def: 'The sentence that gives the variable meaning: “let x be the number of adult tickets, so 2x + 3 is the number of child tickets.” Writing it forces every quantity in the story to be expressed through one unknown — the step that prevents the classic three-variables-one-equation muddle.' },
          { term: 'Translation vocabulary', def: 'The recurring phrase-to-symbol conversions: “is” → =; “total/sum” → addition; “more/greater than” → +; “less/fewer than” → −; “times/of” (after a quantity) → ×; “per” → ÷; “consecutive integers” → n and n + 1 (consecutive even or odd: n and n + 2); “at least” → ≥; “at most/no more than” → ≤.' },
          { term: 'Value = count × denomination', def: 'The money-problem setup: the value of a group of identical items is the count of items times the value of one. Coin, note, ticket and stamp problems all reduce to one linear equation once counts are expressed through a single variable.' },
          { term: 'Mixture setup', def: 'The amount of pure substance equals concentration times volume. Mixing two solutions gives (c\u2081·v\u2081) + (c\u2082·v\u2082) = c_f·(v\u2081 + v\u2082) — one equation built from four parameters and one chosen variable.' },
          { term: 'Two-condition systems', def: 'When a story gives two independent facts about two unknowns (a total and a difference, a price and a quantity), define both variables and translate each fact into one equation — a 2×2 linear system, solved by elimination or substitution.' },
        ],
      },
      {
        kind: 'para',
        text: 'The strategy earns its keep in the first three steps. Read twice: once for the story, once for the numbers and their units. Identify the question — not the quantity mentioned first, but the quantity actually asked for, which word problems regularly separate. Then name: choose the variable to be the smallest quantity every other quantity can be built from. In consecutive-integer problems the smallest integer earns the name (n, n + 1); in ticket problems the count that drives the other counts does (“she bought twice as many child tickets as adult” names adult tickets). The textbook example shows the whole arc: the sum of two consecutive integers is 47 becomes n + (n + 1) = 47, so 2n + 1 = 47, n = 23, the numbers are 23 and 24 — and the check runs the story, not the algebra: 23 + 24 = 47.',
      },
      {
        kind: 'para',
        text: 'Translation is a fixed vocabulary, and most errors are vocabulary errors. “Five more than a number” is n + 5, not 5 − n; “five less than a number” is n − 5; “three times as many X as Y” makes X = 3Y, not Y = 3X. Two habits catch every reversal. First, translate from the noun phrase after the “than”: that item is the reference and sits alone on one side. Second, sanity-test the equation with an easy number: if the club has 12 members, does “three times as many seniors as juniors” produce seniors = 3·juniors or juniors = 3·seniors? One test equation saves the whole model. The same discipline extends to comparison phrases in geometry (“the length is 4 cm more than twice the width” → L = 2W + 4) and to rates (“per” words — km per hour, rupees per kilogram — always announce a division).',
      },
      {
        kind: 'para',
        text: 'The classic families each carry one setup sentence. Age problems: every age shifts by the same amount, so “in 8 years” adds 8 to both sides’ ages, and “was” subtracts — build both ages from the younger person’s variable. Money problems: value = count × denomination, summed to the total (“0.05n + 0.10(2n) = 3.50” for a nickel-and-dime pocket). Mixture problems: concentration × volume of each ingredient sums to the final concentration × final volume, with the volumes themselves often linked (“twice as much of A as B” names v for B). Work-rate problems: one job = rate × time, so combined one-hour rates add — 1/a + 1/b = 1/t. Geometry problems: one perimeter or area equation plus one comparison sentence. Two-condition problems: two facts, two variables, two equations. Every family ends the same way — one equation in one or two unknowns that the solving chapters already know how to finish.',
      },
      {
        kind: 'para',
        text: 'Some stories refuse linear models, and recognising the refusal is the formulation skill. “At least 15”, “cannot exceed”, “no fewer than” — any such phrase formulates as an inequality, and the answer is a range, not a number; solve exactly as an equation, then flip the symbol only if you multiplied or divided by a negative quantity. “The product of two consecutive integers is 306” — a product of two expressions in one variable formulates as a quadratic, n(n + 1) = 306, and the negative root is discarded by feasibility, not by algebra. “One number exceeds another by 4 and their squares sum to 136” formulates as x² + (x + 4)² = 136. The modeler’s test is structural: count the conditions (one equation? two?), count the unknowns (one variable? two?), and match the operations the story names (sum → linear, product → quadratic, bound → inequality).',
      },
      {
        kind: 'example',
        title: 'Worked Example — Formulate, Then Finish: The Ticket Stand',
        steps: [
          'Story: a stall sold 120 tickets; adult tickets cost ₹60, child tickets ₹25; receipts totalled ₹4,875. Asked: how many of each were sold?',
          'Identify: two counts are asked, but one drives the other — name adult tickets.',
          'Name: let a = number of adult tickets; then (120 − a) = child tickets. Write the definition sentence down.',
          'Translate: value equation 60a + 25(120 − a) = 4,875 — adult value plus child value equals total value.',
          'Solve: 60a + 3,000 − 25a = 4,875 → 35a = 1,875 → a ≈ 53.6. Not an integer — so the receipts figure cannot arise from 120 tickets at these prices; the formulation is sound, the story’s numbers are inconsistent.',
          'Check and answer: the check step caught a false premise — with a = 55, receipts would be ₹4,900; no whole-number answer exists. Formulation includes the right to conclude “no solution as stated”.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: '“Five less than twice a number is 27” translates as…',
          options: ['5 − 2n = 27', '2n − 5 = 27', '2(n − 5) = 27', 'n/2 − 5 = 27'],
          answer: 1,
          explain: '“Twice a number” is 2n; “five less than” that is 2n − 5. The phrase after “than” is the base expression.',
        },
        {
          q: 'Ravi is 4 years older than Meena. In 6 years, twice Ravi’s age will equal three times Meena’s. The correct formulation is…',
          options: ['2(x+4) = 3x', '2(x + 4 + 6) = 3(x + 6)', '2(x + 4) + 6 = 3x + 6', '2x + 4 = 3x'],
          answer: 1,
          explain: 'Let Meena be x now. In 6 years both ages shift: Ravi is x + 4 + 6, Meena is x + 6, and the condition compares those future ages.',
        },
        {
          q: 'A 400 ml solution of 20% acid is mixed with v ml of 50% acid to make a 30% mixture. The correct equation is…',
          options: ['0.20(400) + 0.50v = 0.30(400 + v)', '0.20(400) − 0.50v = 0.30·400', '0.50v = 0.30(400)', '20 + 50 = 30(400 + v)'],
          answer: 0,
          explain: 'Pure acid in = pure acid in the mix: 0.20·400 + 0.50·v = 0.30·(400 + v). Always multiply concentration by total final volume on the right.',
        },
        {
          q: '“A hall can seat at most 250 people” formulates as the inequality…',
          options: ['n > 250', 'n ≥ 250', 'n ≤ 250', 'n < 250'],
          answer: 2,
          explain: '“At most” bounds from above and permits equality: n ≤ 250. “At least” is the mirror case n ≥ bound.',
        },
        {
          q: 'The product of two consecutive positive integers is 306. The correct formulation — and feasibility filter — is…',
          options: ['n + (n + 1) = 306, take any root', 'n(n + 1) = 306, keep the positive root only', 'n² = 306, n = 17.5', '2n + 1 = 306'],
          answer: 1,
          explain: '“Product” signals multiplication: n(n + 1) = 306. Solving gives n = 17 (17·18 = 306); the negative root −18 fails the “positive integers” condition.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Naming the wrong quantity as the variable — name the one that builds the rest, and write the definition sentence. Reversing “less than” (5 − n instead of n − 5) and “times as many” (3x for the smaller quantity instead of the larger). Forgetting that time shifts move every age in an age problem — adding years to one side only is the classic error. Building mixtures with percentages added as numbers instead of concentration × volume. Treating “at least” as an equation and reporting one number where a range is asked. Skipping the check against the story: a negative length, a fractional person or non-integer ticket count is not an algebra failure — it is the model correctly reporting that the story is impossible as told.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: linear-equation solving and basic quadratics from the algebra chapters. Follow with the systems-of-equations material for two-variable formulations, and the tournament-arithmetic lesson to see formulation applied to fixture questions. Primary reading: OpenStax, Elementary Algebra 2e, section 3.1 “Use a Problem-Solving Strategy” (the full strategy and worked integer/ticket examples), section 3.3 “Solve Mixture Applications” (concentration × volume setups) — openstax.org, CC BY; the percent and geometry applications in sections 3.2 and 3.4 extend the same five-step frame.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Strategy: read, identify, name, translate, solve, check, answer — the equation is finished only when the story checks.',
        'Name the smallest quantity that builds the rest, and write the definition sentence.',
        'Translation vocabulary: “is” =, totals +, comparisons after “than”, “per” ÷, “at least” ≥, “at most” ≤.',
        'Family setups: ages shift together; money value = count × denomination; mixtures preserve concentration × volume; work rates add.',
        'Two facts about two unknowns → a 2×2 system; a product → quadratic; a bound → inequality.',
        'Feasibility is part of formulation: reject negative lengths and fractional people — or conclude the story is inconsistent.',
      ] },
    ],
  },
]
