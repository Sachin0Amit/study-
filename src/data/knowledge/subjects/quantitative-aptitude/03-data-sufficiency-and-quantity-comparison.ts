/**
 * Knowledge Universe — Quantitative Aptitude — Chapter 03: Data Sufficiency & Quantity Comparison
 * 1 lesson · ~2,390 words
 * field: Quantitative Aptitude
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Data Sufficiency]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 qa-quantity-comparison — Quantity A versus Quantity B: The Comparison Decision Ladder
 */
import type { KnowledgeTopic } from '../../types'

export const quantitativeAptitudeCh03: KnowledgeTopic[] = [
  // ================================================================
  // QUANTITATIVE APTITUDE — Ch13 Data Sufficiency & Quantity Comparison
  // §13.1 — the compare-quantities format and its decision ladder.
  // Carve: no existing knowledge topic owns quantity comparison or
  // sufficiency decisions (greps: 'quantity a', 'data sufficiency',
  // 'sufficient' — zero knowledge hits; the algebra lesson owns
  // equation SOLVING, a different act than deciding whether a solve
  // is possible). This lesson OWNS: the four-option contract, the
  // decision ladder, the plug battery, and sufficiency proofs.
  // ================================================================
  {
    id: 'qa-quantity-comparison',
    title: 'Quantity A versus Quantity B: The Comparison Decision Ladder',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Data Sufficiency',
    tier: 'core',
    concepts: [
      'the four-option contract: A greater, B greater, equal, cannot be determined',
      'the decision ladder: simplify, compare, plug, edge-case',
      'the plug battery: 0, 1, −1, fractions and large numbers',
      'sufficiency as proof: “cannot be determined” must be earned with two outcomes',
      'algebraic comparison: move everything to one side and factor',
      'the obvious-answer traps: too-easy equal, centered unknowns, figure comparisons',
      'geometry and quantity formats: comparing without computing',
    ],
    words: 2390,
    readMins: 12,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Some of the world\u2019s most-taken graduate-admission and placement papers replace part of their standard multiple choice with a quieter, stranger format: two quantities labelled A and B, and four fixed answer choices — A is greater; B is greater; the two are equal; the relationship cannot be determined from the information given. The format rewards a completely different skill from calculation: comparison judgement. You are not asked for a value; you are asked for a verdict, and often the verdict arrives faster than any value ever could. This lesson builds the decision ladder that turns the format from a novelty into a scoring machine.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Comparison questions are typically the fastest marks on a quantitative section once the ladder is automatic — many fall to plugging two numbers. They are also the most format-sensitive: candidates who treat them as ordinary solve-then-choose questions burn minutes computing values the verdict never needed, and candidates who trust a single test case lose marks to the “cannot be determined” option. The ladder fixes both failure modes at once.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The four-option contract is fixed and must be memorized cold before test day, because reading four novel choices per question is a tax you stop paying: (A) Quantity A is greater; (B) Quantity B is greater; (C) the two quantities are equal; (D) the relationship cannot be determined from the information given. Every comparison question on Earth\u2019s aptitude papers uses some permutation of exactly this contract. Two structural facts follow. First, there is no “both are zero” or “negative both” special case — those are simply C or A/B as the arithmetic dictates. Second, option D is a legitimate verdict, not a confession of failure: some questions are DESIGNED so that the given information supports two different outcomes, and recognizing that is the point of the question, not a dodge.',
      },
      {
        kind: 'para',
        text: 'The decision ladder has four rungs, tried in order. Rung one: simplify both quantities legally — combine like terms, reduce fractions, evaluate what is definite (a lone √16 is 4, whatever x is). Rung two: compare directly — if the simplification exposes the relationship, answer and move; this resolves perhaps a third of items in under fifteen seconds. Rung three: plug — when an unknown sits in the comparison, substitute the plug battery (next concept) and watch for the verdict to wobble. Rung four: edge-case hunt — deliberately extreme values chosen to flip the relationship. The ladder\u2019s power is that you never decide WHICH tool to use; you always fall through the same four rungs, and the question ends you at the right one.',
      },
      {
        kind: 'figure',
        caption: 'The comparison decision ladder: simplify first, compare what simplification exposes, plug the battery when an unknown remains, and hunt edge cases — the verdict changes rung by rung until one rung proves it.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-rung decision ladder for quantity comparison">
  <style>.r{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.d{font-family:Georgia,serif;font-size:13px;fill:#52525b}.o{font-family:Georgia,serif;font-size:13px;fill:#e11d48}.rail{stroke:#8a8a93;stroke-width:2.4;fill:none}</style>
  <line class="rail" x1="150" y1="40" x2="150" y2="290"/>
  <rect x="170" y="34" width="590" height="48" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
  <text class="r" x="190" y="54">RUNG 1 · SIMPLIFY</text>
  <text class="d" x="190" y="72">Combine like terms; evaluate all definite parts; reduce fractions. Legal moves only.</text>
  <rect x="170" y="98" width="590" height="48" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
  <text class="r" x="190" y="118">RUNG 2 · COMPARE</text>
  <text class="d" x="190" y="136">Relationship exposed? Answer A / B / C now — a third of items end here.</text>
  <rect x="170" y="162" width="590" height="48" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text class="r" x="190" y="182">RUNG 3 · PLUG THE BATTERY</text>
  <text class="d" x="190" y="200">0, 1, −1, ½, a large number. Verdict wobbles across plugs → D is alive.</text>
  <rect x="170" y="226" width="590" height="48" rx="8" fill="#fee2e2" stroke="#e11d48" stroke-width="1.8"/>
  <text class="r" x="190" y="246">RUNG 4 · EDGE-CASE HUNT</text>
  <text class="d" x="190" y="264">Extremes chosen to flip: x = 0, x negative, x between the roots… Two outcomes found → D proven.</text>
  <text class="o" x="150" y="315">Rule: fall through the rungs in order — never skip to plugging what simplification would have finished.</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The plug battery is a fixed set of test numbers, always the same, in decreasing order of diagnostic power: 0, 1, −1, ½ (or 2), and one large number like 100. Why these: zero annihilates products and exposes constants (x² versus x: at 0 the first is 0 and the second is 0 — equal; at 2 they are 4 and 2 — first greater; verdict D in two plugs). One and minus one expose parity and sign structure — x² versus x³ are equal at 0 and at 1, but at −1 the square is +1 while the cube is −1, so one plug at minus one destroys a premature “equal” verdict. One-half exposes the between-zero-and-one region where powers SHRINK as they grow — the single most productive plug in the entire format, because x³ < x² < x < 1 there, reversing every “bigger power is bigger” intuition. A large number exposes growth rates and crossovers: compare x² with 900x — at x = ½ the linear side dominates (0.25 versus 450), but at x = 1,000 the square wins (10,00,000 versus 9,00,000); the relationship flips as growth overtakes, and only a big plug reveals it. Run the battery top to bottom; each plug either confirms the standing verdict or flips it — and one flip, together with one confirmation, IS the proof of D.',
      },
      {
        kind: 'para',
        text: 'Sufficiency as proof deserves its own respect, because option D (“cannot be determined”) is the only answer in all of aptitude testing that you must PROVE, not just select. The standard of proof: exhibit two legal instantiations of the given information that produce two different verdicts. A feeling that “there is not enough information” is worth nothing — half the time that feeling is just fatigue. The proof pattern: plug once, get verdict V; then deliberately hunt a plug that flips it; when you find one, you have certificate-in-hand that the information underdetermines the comparison, and D is yours with confidence. Conversely, when the battery plus edge cases all agree, D is eliminated and the verdict you observed is the answer — the ladder rung four exists to make this elimination honest rather than assumed.',
      },
      {
        kind: 'para',
        text: 'Algebraic comparison replaces plugging when the structure is polynomial: move everything to one side and study the SIGN of the difference, because a sign is easier to pin than a value. Compare x² − 2x + 3 against 1: bring all terms left, x² − 2x + 2, and complete the square: (x − 1)² + 1 — strictly positive for every real x, so Quantity A exceeds Quantity B, always, no plugging needed. The same move resolves the classic power comparison without logarithms: 2^30 = (2³)^10 = 8^10 and 3^20 = (3²)^10 = 9^10, and since 9 > 8 with the common exponent, B is greater — the difference-of-powers factoring IS the comparison. Factoring, completing the square, and comparing powers through a common exponent are the three algebraic moves that resolve comparisons without ever finding a single value.',
      },
      {
        kind: 'para',
        text: 'The trap catalogue for this format is stable across papers, and every trap has a named antidote. The too-easy-C trap: quantities that LOOK identical (both “the area of the shaded region”) in figures that are not necessarily drawn to scale — figures in this format carry the disclaimer “not drawn to scale”, and the correct answer is frequently D precisely because the figure could be drawn two ways; never compare lengths or areas by eye. The centered-unknown trap: “x is between 3 and 5” tempts you to plug 4 and conclude — but the interval is the information, and endpoints 3 and 5 are the edge cases that decide. The positive-assumption trap: unless stated, x may be negative, zero or fractional — the battery exists because papers know you grew up plugging 2. And the computed-value mirage: after a long computation yields A = 17.98 and B = 17.99, re-read which quantity was which — the format\u2019s A/B symmetry is where tired eyes swap verdicts in the final minute.',
      },
      {
        kind: 'para',
        text: 'Geometry and quantity formats pair naturally, and the craft is comparing WITHOUT computing. Compare the perimeter of a square of side 4 with the circumference of a circle of diameter 4: square = 16; circle = 4π ≈ 12.57 — but the speed version notes π < 4 immediately, so 4π < 16 without any decimal work. Compare diagonal measures, inscribed figures, shaded remainders: the universal moves are bounding (this length is less than that full side, so the areas compare already), symmetry (two regions congruent by construction — equal, answer C, ten seconds), and extreme-drawing (mentally redraw the figure at the extreme allowed by the given information; if the verdict flips between drawings, it is D — the drawn-figure trap run in reverse, as a tool).',
      },
      {
        kind: 'example',
        title: 'Worked example — the full ladder on one item',
        steps: [
          'The item: Quantity A = x² + 1; Quantity B = 2x; given only that x is a real number. Verdict?',
          'Rung 1 (simplify): nothing definite to evaluate — an unknown sits in both quantities. No legal simplification resolves it.',
          'Rung 2 (compare directly): not exposed — the relationship depends on x.',
          'Rung 3 (plug the battery): x = 0 → A = 1, B = 0, A greater. x = 1 → A = 2, B = 2, EQUAL. The verdict wobbled in two plugs — D is alive.',
          'Rung 4 (edge-case proof): the wobble must be exhibited as two legal instantiations: at x = 0 the verdict is “A greater”; at x = 1 the verdict is “equal”. Two outcomes from legal values — the information underdetermines the comparison. Answer: D.',
          'The algebraic cross-check (and the deeper lesson): A − B = x² − 2x + 1 = (x − 1)², which is ≥ 0 always — so A ≥ B for every x, with equality exactly at x = 1. The relationship “greater OR equal depending on x” is precisely what option D exists to name. Note how the algebra CONFIRMS the plug finding rather than replacing it.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Never compare from an unscaled figure — that path is designed to end in a wrong C or a wrong A. Never answer D from fatigue — D is proven with two exhibited outcomes or it is a guess. Never skip rung one: a surprising share of “hard” comparisons are two legal simplifications away from a ten-second C. And in the last minutes of a section, double-check WHICH letter the verdict points to — the format\u2019s symmetry eats tired candidates.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Four-option contract', def: 'The fixed answer set of comparison items: A greater, B greater, equal, cannot be determined.' },
          { term: 'Decision ladder', def: 'The ordered rungs simplify → compare → plug → edge-case, fallen through on every item.' },
          { term: 'Plug battery', def: 'The fixed test set 0, 1, −1, ½, 100 — each plug confirms or flips the standing verdict.' },
          { term: 'Sufficiency proof', def: 'Option D earned by exhibiting two legal instantiations with two different verdicts.' },
          { term: 'Sign-of-difference method', def: 'Moving all terms to one side and determining the sign — a verdict without a value.' },
          { term: 'Centered unknown', def: 'An unknown given only as a range; the endpoints, not the midpoint, decide the verdict.' },
          { term: 'Extreme-drawing', def: 'Mentally redrawing a figure at the bounds of the given information to test whether the verdict survives.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Quantity A = x²; Quantity B = x; no further information. The battery is run. The verdict is:',
            options: ['A is greater', 'B is greater', 'Equal', 'Cannot be determined'],
            answer: 3,
            explain: 'x = 0 → equal; x = 2 → A greater; x = −1 → A greater (1 vs −1) but x = ½ → A = ¼ < ½, B greater. Multiple verdicts from legal values — D, and note the ½ plug is the one that flips it.',
          },
          {
            q: 'Quantity A = (x − 1)²; Quantity B = 0; x is any real number. The verdict is:',
            options: ['A is greater', 'B is greater', 'Equal', 'Cannot be determined'],
            answer: 3,
            explain: 'The tempting read is “a square is never negative, so A wins” — but squares DO hit zero: at x = 1, (x − 1)² = 0 and the quantities are EQUAL, while at x = 2, A = 1 is greater. Two legal values, two verdicts → the relationship cannot be determined from the information given. The too-easy-A instinct is exactly what this item is built to catch.',
          },
          {
            q: 'Quantity A = 2^30; Quantity B = 3^20. The fastest comparison is:',
            options: ['Compute both fully', 'Common exponent: 8^10 vs 9^10', 'Plug x = ½', 'Answer D by default'],
            answer: 1,
            explain: 'Rewrite with a common power: 2^30 = (2³)^10 = 8^10 and 3^20 = (3²)^10 = 9^10; since 9 > 8, B is greater. Difference-of-powers factoring is one of the three algebraic moves that ends comparisons without values.',
          },
          {
            q: 'A figure shows two triangles that appear congruent; the figure is noted “not drawn to scale”. The side lengths are not given. The verdict on their areas is:',
            options: ['Equal — they look congruent', 'A is greater', 'B is greater', 'Cannot be determined'],
            answer: 3,
            explain: 'Unscaled figures prove nothing: the given information permits drawings where either area exceeds the other. D here is not a dodge — it is the demonstrated fact that the information underdetermines the comparison.',
          },
          {
            q: 'Given 3 < x < 5. Quantity A = x; Quantity B = 4. The disciplined verdict uses which values?',
            options: ['Only x = 4, the midpoint', 'The endpoints x = 3 and x = 5', 'x = 0 and x = 100', 'No value — answer C'],
            answer: 1,
            explain: 'Centered unknowns are decided at the endpoints: near 3 the verdict is B greater; at 4 equal; near 5 A greater. The interval itself is the information, and it permits multiple verdicts → D.',
          },
          {
            q: 'Quantity A = the perimeter of a square with side 4; Quantity B = the circumference of a circle with diameter 4. The comparison without computing is:',
            options: ['A greater, since π < 4', 'B greater, since circles are round', 'Equal, since both use 4', 'Cannot be determined'],
            answer: 0,
            explain: 'Square perimeter = 4 × 4; circumference = π × 4; the common factor 4 leaves 4 versus π, and π < 4 — A greater with no decimal work. Bounding and common-factor extraction are the geometry craft.',
          },
          {
            q: 'After plugging 0, 1 and −1, all three give “A greater”. The correct next act is:',
            options: ['Answer A immediately', 'Try ½ and a large number, then decide', 'Answer D — three plugs are enough', 'Re-read only the question stem'],
            answer: 1,
            explain: 'Three agreeing plugs raise confidence but prove nothing — the between-0-and-1 region and large values remain untested, and they are exactly where verdicts flip. Complete the battery (and edge cases) before locking A; D requires exhibited flips, and A requires the flips to have failed.',
          },
          {
            q: 'The single most productive plug in the entire comparison format is:',
            options: ['x = 2', 'x = ½', 'x = 10', 'x = −10'],
            answer: 1,
            explain: 'Between 0 and 1, powers shrink as they grow (x³ < x² < x) and reciprocals exceed their bases — every “bigger is bigger” intuition reverses. A huge share of designed D answers are visible only from the ½ rung.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This format is the natural sibling of Tables and Caselets — both reward judgement over computation — and both sit on the Commercial Arithmetic chapters\u2019 percentage-and-ratio machinery. For the formal logic underneath “insufficient information” (quantifiers, counterexamples, proof by exhibit), the Philosophy subject\u2019s logic lessons are the deep home; for equation solving itself, the Algebra for Tests chapter ahead in this book. Next in this subject: the Calculation Mastery and Test Strategy chapter, where the ladder joins the wider test-taking system.',
        tone: 'path',
      },
    ],
  },
]
