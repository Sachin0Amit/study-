/**
 * Knowledge Universe — Logical Reasoning — Chapter 03: Series, Analogies & Classification
 * 1 lesson · ~2,257 words
 * field: Logical Reasoning
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Series & Patterns]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 lr-analogies-classification — Analogies, Classification and Series: Playing the Relationship Game
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh03: KnowledgeTopic[] = [
  // ================================================================
  // LOGICAL REASONING — Ch3 Series, Analogies & Classification
  // §3.1 — the relationship game: verbal/number/letter analogies,
  // odd-one-out, series completion.
  // Carve: ku-fnd-visual-pattern-rules (Nonverbal Reasoning) owns
  // FIGURAL series/analogy — shape attributes, rotation rules. This
  // lesson OWNS the verbal, number and letter channels. Greps for
  // 'analogy', 'odd one out', 'letter series' in knowledge topics:
  // zero hits outside biology's homology/analogy (different sense).
  // ================================================================
  {
    id: 'lr-analogies-classification',
    title: 'Analogies, Classification and Series: Playing the Relationship Game',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Series & Patterns',
    tier: 'core',
    concepts: [
      'the analogy as a bridge: extract the relation before scanning options',
      'the classic relation families and their signatures',
      'the bridge sentence: forcing the relation into exact words',
      'odd-one-out: the grouping principle and the “most entities” test',
      'number series: first differences, ratios and alternating splits',
      'letter series: position values, skip patterns and mirror pairs',
      'trap anatomy: reversed relations, degree traps and near-synonyms',
    ],
    words: 2257,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '“Ophthalmologist is to eye as cardiologist is to —?” If your hand is already moving toward “heart”, you have felt what this whole question family is: recognition of a RELATIONSHIP, fast. Analogies, classification items and series completions are the opening percussion of nearly every reasoning section on the planet — school-entrance general tests, recruitment screenings, defence-academy ability papers, law-entrance logical sections, teaching-eligibility papers — because they measure pure relational thinking with zero formula load. The three formats are one skill in three costumes: find the rule that binds a pair or a chain, then apply it. This lesson turns that skill from instinct into procedure.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These items are usually the first ten questions of a reasoning section — answered in under thirty seconds each by prepared candidates, and they set the psychological tempo of everything after. More concretely: relational vocabulary is the parsing layer for harder reasoning (syllogisms, arrangements) and for verbal sections everywhere. Time invested here pays across the whole paper.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The analogy as a bridge: every analogy item is a pair (A : B) whose relationship you must name BEFORE looking at options, plus a stem word (C) whose partner you must build. The single most common failure on this format is option-first reading — the options are designed to relate to C somehow, so scanning them before fixing the relation invites the trap. The discipline: cover the options, read A : B, state the relation aloud in words, then uncover and test. “Ophthalmologist : eye” — the relation is “specialist doctor : organ treated”. Then “cardiologist : ?” must complete “specialist doctor : organ treated” — heart. Options like “pulse” or “hospital” will relate to cardiology loosely, which is exactly why the relation gets locked first.',
      },
      {
        kind: 'para',
        text: 'The classic relation families cover most items ever set, and knowing them by name accelerates extraction. Part–whole (wheel : car; chapter : book). Category–member (sparrow : bird). Tool–function (knife : cut; scale : measure). Worker–workplace (teacher : school; judge : court). Worker–instrument (surgeon : scalpel; painter : brush). Cause–effect (rain : flood; neglect : decay). Degree/intensity (breeze : gale; cool : freezing — small to large of one kind). Sequence (dawn : dusk; seed : tree — order in time). Function–thing (shade : tree; illumination : lamp). Synonym and antonym (begin : commence; generous : miserly). Whole–part-of-speech and grammatical pairs (noun : plural; verb : adverb). Number relations (square : root; 8 : 64 — cube relations, prime jumps). When a pair does not immediately name itself, walk the families in order; one will click within seconds.',
      },
      {
        kind: 'figure',
        caption: 'The bridge method: the relation is extracted from the stem pair and forced into an exact sentence; every option must cross the SAME bridge, and options that merely relate to the stem word fail it.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bridge diagram for solving analogies">
  <style>.w{font-family:Georgia,serif;font-size:17px;font-weight:bold;fill:#3f3f46}.s{font-family:Georgia,serif;font-size:14px;fill:#52525b}.b{font-family:Georgia,serif;font-size:14px;font-weight:bold;fill:#0f766e}.x{font-family:Georgia,serif;font-size:13px;fill:#e11d48}.arc{stroke:#0f766e;stroke-width:2.6;fill:none;stroke-linecap:round}</style>
  <text class="w" x="70" y="60">OPHTHALMOLOGIST</text>
  <text class="w" x="470" y="60">EYE</text>
  <path class="arc" d="M 150 74 C 240 120, 400 120, 470 74"/>
  <text class="b" x="255" y="118">“specialist doctor : organ treated”</text>
  <line x1="405" y1="130" x2="405" y2="170" stroke="#8a8a93" stroke-width="2" stroke-dasharray="5 4"/>
  <text class="s" x="418" y="155">same bridge, new stem</text>
  <text class="w" x="70" y="200">CARDIOLOGIST</text>
  <text class="w" x="500" y="200">: ?</text>
  <path class="arc" d="M 150 214 C 260 260, 430 260, 480 214"/>
  <text class="b" x="255" y="258">HEART crosses the bridge</text>
  <text class="x" x="560" y="230">“pulse” — relates to the word, fails the bridge</text>
  <text class="x" x="560" y="252">“stethoscope” — wrong relation family (instrument)</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The bridge sentence is the extraction made testable: force the relation into a sentence so exact that both pairs slot into it grammatically. “A wheel is a PART of a car” accepts “a chapter is a part of a book” and rejects “a driver is a user of a car”. Vague bridges (“they are connected”, “both involve cars”) accept the traps; exact bridges accept only the answer. The craft is in the operator words: part OF, TYPE of, USED to, CAUSES, LARGER than, COMES BEFORE, LACKS, STUDIES, MEASURES. When two options both seem to fit, the bridge is too loose — tighten the operator word and re-test. This one habit, writing micro-sentences with hard operators, is worth more in this format than a thousand practice items attempted without it.',
      },
      {
        kind: 'para',
        text: 'Odd-one-out classification flips the game: you are given four or five words and must find the one that does not share the grouping principle of the others. The governing rule is the “most entities” test: the correct grouping is the one that binds the LARGEST number of options; the odd one is odd precisely against that majority principle. Rose, lily, marigold, oak, tulip — four flowers and one tree, so oak is out; but note that oak is also “a plant”, so a lazy principle (“they are all plants”) hangs the question. Test-writers choose the odd word to share a SECONDARY property with the group (oak is a plant; a shark is an animal even in a fish set) — the defence is asking “what do MOST of these share?” and refusing principles that need explaining away. Classic grouping axes: biological class, function, material, gender/number, geography, abstraction level.',
      },
      {
        kind: 'para',
        text: 'Number series follow a small set of engines, checked in a fixed order. First differences: subtract neighbours; if differences are constant, it is arithmetic (+7, +7, +7); if the differences themselves climb steadily, look at second differences — the squares family (2, 6, 12, 20, 30 → differences 4, 6, 8, 10: n(n+1)) lives here. Ratios: divide neighbours; a constant ratio means geometric (3, 6, 12, 24, 48 ×2; or 8, 12, 18, 27 ×1.5). Alternating splits: two interleaved series (2, 9, 4, 12, 6, 15 — evens climbing +2, the others climbing +3) or alternating operations (+5, ×2, +5, ×2). Squares, cubes and primes as raw material: 4, 9, 25, 49 (primes squared), 1, 8, 27, 64 (cubes), 2, 3, 5, 7, 11 (primes themselves). The fixed check order — differences, then differences-of-differences, then ratios, then splits, then named families — is what makes a series a thirty-second item instead of a two-minute stare.',
      },
      {
        kind: 'para',
        text: 'Letter series run on position values: write the alphabet with positions (A=1 … Z=26) and every letter pattern becomes a number pattern. Skip patterns: A, D, G, J is +3 per step (positions 1, 4, 7, 10). Mixed skips: A, C, F, J, O — differences 2, 3, 4, 5. Mirror pairs: letters equidistant from the alphabet\u2019s ends (A–Z, B–Y, C–X) generate “opposite letter” series much loved by setters. The letter-minus-letter trick converts pair series (AZ, BY, CX …) into arithmetic instantly: each pair sums to 27. And the wrap-around rule — after Z comes A, so a +5 step from Y lands on D — catches the unwary. When facing letters, the mechanical act is writing position numbers under them; letters hide arithmetic that numbers confess.',
      },
      {
        kind: 'para',
        text: 'Trap anatomy for the whole family. The reversed relation: options include the correct pair backwards (heart : cardiologist when the bridge demands cardiologist : heart) — check direction before marking. The degree trap: cool : freezing tempts “cold” as an analogue of breeze : gale, but check whether the intensity jump matches (a gale is a strong breeze; freezing is far beyond cool — the jumps differ in kind, not just size). The near-synonym trap: in classification, the odd one often shares the category loosely (oak among flowers — both plants) — the most-entities test defends. The familiar-word magnet: options containing emotionally loud words (heart, hospital) pull guesses that the bridge never licensed. And in series, the premature lock: confirming a rule on the FIRST gap only — a rule must survive every gap in the series, all the way to the answer blank.',
      },
      {
        kind: 'example',
        title: 'Worked example — one of each format',
        steps: [
          'Analogy: “Benevolent is to kind as miserly is to —?” Options: poor, stingy, greedy, rich. Cover options; extract: benevolent : kind are synonyms of degree — a benevolent person ACTS kindly. For miserly, the matching partner by relation-to-neighbour is stingy (the near-synonym), not greedy (a related but different trait) and not rich (a condition, not a disposition). The bridge “a ___ person is characterised by ___” fits stingy exactly.',
          'Odd-one-out: “Square, rectangle, rhombus, triangle, circle.” Four are quadrilaterals; triangle is out on sides-count — but wait, circle is ALSO out on “has straight sides”. Apply the most-entities test: square, rectangle, rhombus (3 of 5) share “four sides”; triangle shares “straight sides” with them, making 4 of 5 straight-edged — the binding that gathers the most options is straight-edged shapes, so CIRCLE is the odd one. The majority principle decides, not the first one noticed.',
          'Number series: “5, 11, 23, 47, 95, —?” First differences: 6, 12, 24, 48 — a doubling chain. Next difference 96, so next term 95 + 96 = 191. (Shortcut worth noting: each term is 2×previous + 1, visible once differences are written.)',
          'Letter series: “B, E, H, K, —?” Positions 2, 5, 8, 11: +3 per step; next is 14 = N. The rule survives every gap — lock it.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Option-first reading is the root failure of the whole family — the relation is extracted blind, or it is not extracted at all. Secondary killers: ignoring relation direction (reversed-pair distractors), loose bridges accepted under time pressure (“both are about medicine”), and classification by the first noticed principle instead of the majority principle. Every one of these is a discipline failure, not a knowledge failure — which is precisely why setters rely on them.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Bridge method', def: 'Extracting the stem pair\u2019s relation before reading options, then testing options only against that relation.' },
          { term: 'Bridge sentence', def: 'The relation forced into an exact sentence with hard operator words (part of, used to, causes, larger than).' },
          { term: 'Relation families', def: 'The named catalogue — part–whole, tool–function, cause–effect, degree, sequence, synonym/antonym and the rest — walked in order when a pair resists naming.' },
          { term: 'Most-entities test', def: 'Classification rule: the valid grouping principle binds the largest number of options; the odd word fails that majority principle.' },
          { term: 'First differences', def: 'Neighbour subtractions on a number series; constant → arithmetic, climbing → check second differences.' },
          { term: 'Alternating split', def: 'A series that is two interleaved series (or operations) — odd positions and even positions examined separately.' },
          { term: 'Position values', def: 'A=1 … Z=26 numbering that converts every letter series into a number series.' },
          { term: 'Mirror pair', def: 'Letters equidistant from the alphabet\u2019s ends (A–Z, B–Y); pair series whose letters sum to 27.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: '“Author is to novel as composer is to —?” The bridge sentence is:',
            options: ['“A novel is written in a book”', '“An author creates a novel; a composer creates a symphony”', '“Authors and composers are artists”', '“A novel is long, a symphony is long”'],
            answer: 1,
            explain: 'The relation is creator : created work, and the bridge must carry it with a hard operator — “creates”. Options resting on shared categories (“are artists”) or shared properties (“are long”) are the loose-bridge traps the format lives on.',
          },
          {
            q: 'Odd one out: “Rose, lily, marigold, oak, tulip.” The most-entities test selects:',
            options: ['Rose — it has thorns', 'Oak — four are flowers, one is a tree', 'Tulip — it grows from a bulb', 'Marigold — its colour is orange'],
            answer: 1,
            explain: 'Four options share “flower”; oak alone fails that principle. Secondary properties (thorns, bulbs, colour) are exactly the noise the most-entities test is built to ignore — a principle that binds 4 of 5 beats every principle that binds 2.',
          },
          {
            q: 'The relation in “breeze : gale” is best named:',
            options: ['Cause and effect', 'Degree — mild to violent of one kind', 'Part and whole', 'Tool and function'],
            answer: 1,
            explain: 'Both are winds; they differ in intensity — the degree family. Degree relations set up the classic trap: matching “cool : freezing” to them feels right but the jump differs in kind; always compare the SIZE of the jump as well as its direction.',
          },
          {
            q: 'Series: 4, 9, 25, 49, 121, —? The engine is:',
            options: ['Squares of primes: 2², 3², 5², 7², 11², 13²', 'Odd numbers squared', '+5, +16, +24 alternating', 'Geometric ×2 plus one'],
            answer: 0,
            explain: '4, 9, 25, 49, 121 are 2², 3², 5², 7², 11² — the primes squared — so the next is 13² = 169. First differences (5, 16, 24, 72) look lawless, which is the sign to reach for the named families: squares, cubes, primes.',
          },
          {
            q: 'Series: A, C, F, J, O, —? The next letter is:',
            options: ['T', 'U', 'S', 'V'],
            answer: 1,
            explain: 'Positions 1, 3, 6, 10, 15 — the triangular numbers, differences +2, +3, +4, +5. Next difference +6 gives position 21 = U. Writing position numbers under letters converts the item into arithmetic; guessing shapes of letters does not.',
          },
          {
            q: '“Pulmonologist is to lungs as hepatologist is to —?” The option designed as the reversed-relation trap is:',
            options: ['Liver', 'Lungs : pulmonologist', 'Kidneys', 'Doctor'],
            answer: 0,
            explain: 'The bridge is specialist : organ (hepatologist treats the liver), so LIVER is correct — and the trap to watch is any option presenting the correct relation backwards (e.g. “liver : hepatologist”) or borrowing the stem\u2019s organ (lungs). Lock the bridge, then check direction on the chosen option before marking.',
          },
          {
            q: 'Series: 2, 9, 4, 12, 6, 15, —? The engine is:',
            options: ['Alternating split: +2 on odds, +3 on evens', 'Arithmetic +7 throughout', 'Geometric ×2', 'Squares plus one'],
            answer: 0,
            explain: 'Odd positions run 2, 4, 6 (+2 each); even positions run 9, 12, 15 (+3 each); the next (7th) term continues the odd chain: 8. Interleaved series punish the single-rule mindset — when one engine fails, split by position.',
          },
          {
            q: 'In letter pairs AZ, BY, CX, DW the hidden arithmetic is:',
            options: ['Each pair sums to 27 — mirror pairs', 'Each pair differs by 5', 'Vowels alternate', 'The first letters spell a word'],
            answer: 0,
            explain: 'A(1) + Z(26) = 27, B(2) + Y(25) = 27 — mirror pairs, letters equidistant from the alphabet\u2019s ends. Recognizing the constant sum collapses the whole family into one line of arithmetic.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Figural analogies and figure series belong to the Nonverbal Reasoning lesson on shape attributes and rule detection — the same bridge method wearing pictures. Within this subject, the Coding–Decoding and Symbol Operations chapter generalizes the position-value machinery built here, and Ordering and Ranking carries the systematic-placement discipline into bigger puzzles. The verbal side deepens in the English subject\u2019s vocabulary lessons; the formal side (what a relation IS, mathematically) lives in the Mathematics Master Library.',
        tone: 'path',
      },
    ],
  },
]
