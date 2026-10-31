/**
 * Knowledge Universe — Logical Reasoning — Chapter 05: Arrangements & Puzzles
 * 1 lesson · ~2,460 words
 * field: Logical Reasoning
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Arrangements & Puzzles]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 lr-seating-arrangements — Seating Arrangements: The Clue Ledger for Linear and Circular Puzzles
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh05: KnowledgeTopic[] = [
  // ================================================================
  // LOGICAL REASONING — Ch6 Arrangements & Puzzles
  // §6.1 — linear and circular seating, floor/box/scheduling
  // puzzle families, the clue ledger.
  // Carve: zero existing knowledge topics on seating/puzzles (greps
  // 'seating', 'arrangement', 'puzzle' — only philosophy-of-mind
  // 'puzzles', different sense). This lesson OWNS the symbol
  // notation, the facing rule, and the branching discipline.
  // ================================================================
  {
    id: 'lr-seating-arrangements',
    title: 'Seating Arrangements: The Clue Ledger for Linear and Circular Puzzles',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Arrangements & Puzzles',
    tier: 'core',
    concepts: [
      'the clue ledger: translating prose clues into compact symbols',
      'linear arrangements: the anchor-and-fill method on a drawn row',
      'circular arrangements: clockwise discipline and the reference person',
      'the facing rule: facing centre vs facing outward, and left/right reversal',
      'immediate vs somewhere: the two distance words that change everything',
      'the puzzle families: floors, boxes, scheduling, grouping and matching',
      'when stuck: parity, counting and the one-branch fork',
    ],
    words: 2460,
    readMins: 12,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Eight people around a table; five statements about who sits beside whom; one question. Arrangement puzzles are the heavyweight event of every reasoning section — the item type on which sections are won or lost, because they pay a whole set of marks to one solved diagram, and they punish the undisciplined with ten lost minutes and a wrong diagram. Yet the entire format runs on a small toolkit: a symbol ledger for clues, two drawing templates (row and circle), one rule about facing, and a branching protocol for when information runs out. This lesson installs the toolkit and drills the protocol on the standard families.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A typical puzzle set pays 3–5 marks for 3–4 minutes of correct diagram work — and the diagram, once built, answers every question in the set in seconds. Nothing else on a reasoning paper has this leverage, which is why puzzle sets decide sectionals. The ledger-and-template method here is also the exact discipline used by high-percentile solvers; there is no talent gap, only a procedure gap.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The clue ledger is a translation layer between prose and diagram, and writing it IS the first minute of every puzzle. Read all statements once at speed, then re-read and convert each into ledger symbols: “A sits immediately to the right of B” becomes A→B with a bar meaning adjacency-and-side; “C is somewhere to the left of D” becomes C < D with NO bar (distance unknown); “E is not next to F” becomes E–F crossed; “G sits exactly between H and J” becomes H–G–J as a rigid triple. The ledger\u2019s power is that it separates the statement GRAMMAR from the diagram work: once converted, the prose is never re-read (re-reading prose is where misreads enter), and every clue is visible at a glance as structure. The ledger also flags clue TYPES for sequencing: rigid blocks (adjacency triples) first, then inequalities (somewhere-relations), then negatives (not-next-to) last — negatives can only prune, never build.',
      },
      {
        kind: 'para',
        text: 'Linear arrangements use the row template: slots drawn as boxes, one reference end declared LEFT (when a statement says “facing north” or “facing the audience”, right and left belong to the SITTERS — handle with the facing rule below; when no facing is given, left/right are yours as the drawer). The anchor-and-fill method from the ranking lesson now runs with richer clues: place the rigid blocks first (a triple H–G–J occupies three consecutive slots somewhere — it can often be located by combining with a fixed person: “A is at the extreme left” plus “the triple is adjacent to A” fixes everything), then the somewhere-relations, then use each negative to eliminate candidate placements. The working rule: every clue must be USED, and the strongest clue is the one with the most fixed structure — items are engineered so the rigid clues cascade; if your first placed clue produces nothing, you started with a weak clue.',
      },
      {
        kind: 'para',
        text: 'Circular arrangements need their own template and one convention settled once and verified on your own body. Draw the circle with seats at clock positions; pin ONE person — any person — at the bottom (6 o\u2019clock) seat, because circles have no natural start and rotating everyone together changes nothing. Now the convention: when all face the CENTRE, each sitter\u2019s LEFT points clockwise (viewed from above) and each sitter\u2019s RIGHT points anti-clockwise. Verify it bodily: sit at the 6 o\u2019clock seat facing the centre — you face up the page — so your left hand points to the page\u2019s west side, and your westward neighbour walks 6 → 7 → 8 → 9, exactly the way the clock\u2019s own hand sweeps. Mirror-check from the 3 o\u2019clock seat: facing the centre means facing west, so your left hand points south toward the 6 seat — again the clockwise walk. If someone faces OUTWARD, their arrows flip: left becomes anti-clockwise. The error to avoid is mixing your left (the drawer\u2019s, viewing the diagram from above) with theirs (the sitter\u2019s) — and when a statement says some face inward and some outward, draw each person\u2019s arrows individually, which is the facing rule.',
      },
      {
        kind: 'figure',
        caption: 'The facing rule on a circular template: with everyone facing the centre, each person\u2019s LEFT points clockwise (viewed from above) and RIGHT points anti-clockwise — the reference person is drawn with arrows labelled, and every other left/right is read by consistent rotation; if someone faces outward, their arrows flip.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular seating template with facing arrows">
  <style>.p{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.s{font-family:Georgia,serif;font-size:13px;fill:#52525b}.r{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#e11d48}.g{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#0f766e}.c{stroke:#8a8a93;stroke-width:2.2;fill:none}</style>
  <circle class="c" cx="240" cy="170" r="105"/>
  <text class="p" x="232" y="58" text-anchor="middle">A</text>
  <text class="p" x="322" y="115" text-anchor="middle">B</text>
  <text class="p" x="322" y="235" text-anchor="middle">C</text>
  <text class="p" x="232" y="292" text-anchor="middle">R (ref)</text>
  <text class="p" x="142" y="235" text-anchor="middle">D</text>
  <text class="p" x="142" y="115" text-anchor="middle">E</text>
  <path d="M 250 72 l 34 16" stroke="#e11d48" stroke-width="2.6" fill="none" marker-end="url(#ar)"/>
  <text class="r" x="300" y="54">A\u2019s LEFT — clockwise</text>
  <path d="M 212 278 l -36 -6" stroke="#0f766e" stroke-width="2.6" fill="none" marker-end="url(#ag)"/>
  <text class="g" x="52" y="314">R\u2019s LEFT — clockwise</text>
  <text class="s" x="470" y="120">Facing centre, viewed from above:</text>
  <text class="s" x="470" y="146">each person\u2019s LEFT points clockwise,</text>
  <text class="s" x="470" y="172">each person\u2019s RIGHT points anti-clockwise.</text>
  <text class="s" x="470" y="206">If a person faces OUTWARD, both flip.</text>
  <text class="s" x="470" y="240">Draw the reference arrows once,</text>
  <text class="s" x="470" y="266">read every left/right by rotation.</text>
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e11d48"/></marker><marker id="ag" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#0f766e"/></marker></defs>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Immediate versus somewhere is the pair of distance words on which whole puzzles turn. “Immediately to the right of” fixes a slot (adjacent, side fixed); “to the right of” fixes only a side-of relation (anywhere further along); “second to the left of” fixes a distance of exactly two; “not immediately to the left of” forbids one slot but permits distance. The ledger marks these differently — a solid connector for immediate, an inequality for somewhere — and the commonest catastrophic misread in the entire format is upgrading a somewhere into an immediate. A related distinction: “neighbour of” is side-agnostic (either side), while “to the left of” is side-specific even at unknown distance. When a puzzle seems to have too little information, the first audit is the distance words — half of all “insufficient” panics are a somewhere-clue wrongly drawn as solid.',
      },
      {
        kind: 'para',
        text: 'The puzzle families share the engine and change only the template. Floors: people on floors of a building — the row template turned vertical, with the same block-and-inequality logic (“P lives above Q” is a somewhere-relation; “adjacent floors” is immediate). Boxes and stacks: identical logic with a shelf template. Scheduling: days or time slots as positions, people-or-events as occupants — same ledger, plus the added twist that some clues are conditional (“if on Monday, then not the morning”). Grouping and matching: two dimensions instead of one (which person plays which instrument on which day) — the template becomes a grid, and each clue fills or crosses cells; the grid version is solved by the same anchor-first discipline, one dimension at a time. Recognizing the family tells you which template to draw in the first fifteen seconds, and drawing the right template immediately is worth more than any speed in deduction.',
      },
      {
        kind: 'para',
        text: 'When stuck — the diagram half-built and no clue firing — the protocol is fixed, three moves only. Move one, the count audit: how many people remain unplaced, and how many legal slots remain; often the arithmetic of remaining slots forces the placement (two people, two slots, one negative clue = done). Move two, the parity or position audit: for circular puzzles, if four women must sit together, their block occupies consecutive seats and parity of the remaining seats decides feasibility; for rows, check the extreme ends — clues about “extreme left” or “no one to the right of” are anchors you may have missed. Move three, the one-branch fork: pick the single most constrained unplaced person, assume one of their two possible placements, and work three clues deep; a contradiction unwinds the assumption in under a minute, and the surviving branch is the answer. What the protocol forbids: re-reading the prose from the top (misread laundering), and forking on a weakly-constrained person (branch explosion). One deliberate fork, shallow, on the most constrained entity — that is the entire art of the stuck state.',
      },
      {
        kind: 'example',
        title: 'Worked example — a compact circular set, ledger to verdict',
        steps: [
          'The stem: six friends A–F around a circular table, all facing the centre. Clues: (1) A is immediately to the right of B. (2) C is not adjacent to B. (3) D sits opposite E. (4) F is third to A\u2019s left.',
          'Ledger: A|B rigid pair (immediate, right side); C–B negative; D↔E opposite pair; F at exact distance 3 on A\u2019s left — a distance-fixed clue, nearly as strong as adjacency.',
          'Template: pin B at seat 1 (the 6 o\u2019clock reference), seats numbered 1–6 clockwise. Facing the centre, B\u2019s RIGHT is the anti-clockwise direction, so A — immediately to B\u2019s right — sits at seat 6, the anti-clockwise neighbour. Rigid pair (6, 1) placed.',
          'The negative clue: C not adjacent to B eliminates seats 2 and 6 — and 6 already holds A, so C can only take 3, 4 or 5.',
          'The opposite pair: opposite seat-pairs are (1,4), (2,5) and (3,6). Seats 1 and 6 are taken, so D and E must occupy seats 2 and 5.',
          'The distance clue: F is third to A\u2019s left. A at seat 6; facing the centre, A\u2019s LEFT runs clockwise: one seat clockwise of 6 is seat 1 (B), then seat 2, then seat 3 — so F sits at seat 3.',
          'The count audit closes it: seats 2, 4 and 5 remain for C, D, E, with D and E pinned to {2, 5} — so C takes seat 4, and D, E split seats 2 and 5 in either order. TWO live diagrams (the D↔E swap): questions whose answers are identical in both — “who sits opposite B?” (seat 4: C, always) — are answerable; any question that differs across the swap (“who is second to D\u2019s right?”) is a “cannot be determined” item. The solver\u2019s final act is always this branch audit, and knowing when it is needed IS the skill.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The somewhere→immediate upgrade is the format\u2019s deadliest misread — the ledger\u2019s distinct symbols exist to prevent it. Drawer-versus-sitter lefts destroy circular puzzles: draw the reference arrows, always. Re-reading prose mid-solve launders the original misread into the diagram — the ledger is read-only after translation. And the un-audited fork: a diagram built on an unproven assumption answers questions with misplaced confidence; every fork must end in a contradiction or a branch audit. The marks this format takes are almost never logic marks; they are bookkeeping marks.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Clue ledger', def: 'The symbol translation of every statement — rigid blocks, inequalities, negatives — written once and never re-read from prose.' },
          { term: 'Rigid block', def: 'A set of people with fixed adjacency and order (a “between” triple, an immediate pair) — placed first.' },
          { term: 'Somewhere-relation', def: 'A side-of constraint at unknown distance; drawn as an inequality, never as adjacency.' },
          { term: 'Reference person', def: 'The one circular occupant pinned to a fixed seat to kill rotational freedom.' },
          { term: 'Facing rule', def: 'Facing centre: left = clockwise, right = anti-clockwise (viewed from above); facing outward flips both — arrows drawn per person.' },
          { term: 'Template families', def: 'Row (linear), circle, floors/boxes (vertical rows), schedules, and grids (grouping/matching) — chosen in the first fifteen seconds.' },
          { term: 'One-branch fork', def: 'The stuck-state move: assume a placement for the MOST constrained person, work three clues deep, unwind on contradiction.' },
          { term: 'Branch audit', def: 'Checking whether a question\u2019s answer is identical across all live diagrams; differing answers mean “cannot be determined”.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: '“P sits somewhere to the right of Q” in a linear arrangement is drawn in the ledger as:',
            options: ['A rigid adjacent pair P|Q', 'The inequality Q < P with no bar', 'A negative clue', 'An opposite pair'],
            answer: 1,
            explain: '“Somewhere” fixes only the side, never the distance — an inequality, not adjacency. Upgrading it to a rigid pair is the single deadliest misread of the format; the ledger\u2019s distinct symbols exist precisely to keep the two apart.',
          },
          {
            q: 'Six people face the centre of a circular table. Viewed from above, each person\u2019s LEFT points:',
            options: ['Clockwise', 'Anti-clockwise', 'Toward the centre', 'Depends on the person'],
            answer: 0,
            explain: 'Verify bodily: at the 6 o\u2019clock seat facing the centre you face up the page, your left hand points west, and the westward walk 6 → 7 → 8 follows the clock hand\u2019s own sweep — clockwise. Facing OUTWARD would flip both arrows, which is why arrows are drawn, not remembered.',
          },
          {
            q: 'In a circular puzzle you fix one person at a chosen seat first because:',
            options: ['That person is the most important', 'Rotating everyone together changes nothing — the choice kills rotational freedom', 'The rules require it', 'It makes the circle a row'],
            answer: 1,
            explain: 'A circle has no distinguished seat: any global rotation is the same arrangement. Pinning ONE person at a reference seat removes that freedom and costs nothing — the standard first move of every circular template.',
          },
          {
            q: 'A puzzle stalls: two unplaced people, two free slots, one “not adjacent to” clue. The protocol move is:',
            options: ['Re-read all statements from the top', 'The count audit — remaining people against remaining slots', 'Fork on the least constrained person', 'Abandon the set'],
            answer: 1,
            explain: 'Two people, two slots and one negative is decided by counting alone — the audit takes ten seconds and often ends the puzzle. Re-reading prose launders misreads; forking on weakly constrained people explodes branches.',
          },
          {
            q: 'Two complete diagrams both satisfy every clue of a set. A question asks “who sits opposite B?” — one diagram says D, the other says E. The correct answer is:',
            options: ['D', 'E', 'Cannot be determined', 'Both D and E simultaneously'],
            answer: 2,
            explain: 'When live branches give different answers, the information does not force a unique verdict — that is the branch audit, and “cannot be determined” is the honest result. Setters plant exactly these questions to catch solvers who never audited their fork.',
          },
          {
            q: '“A is immediately to the right of B” and “C is second to the left of B” together fix:',
            options: ['Only A and B', 'A, B and C in a rigid triple', 'Nothing without a drawn circle', 'A and B rigidly; C at distance two on the fixed side'],
            answer: 3,
            explain: 'The immediate pair is rigid; “second to the left of B” is a fixed distance on a fixed side — so C\u2019s seat relative to B is forced too, though C is not adjacent to the pair. Distances of exactly two are as good as adjacency for anchoring.',
          },
          {
            q: 'Floor puzzles, box puzzles and day-scheduling sets are solved with:',
            options: ['Completely different methods per family', 'The same ledger and anchor logic on different templates', 'Guesswork and option elimination only', 'Arithmetic formulas'],
            answer: 1,
            explain: 'Floors are vertical rows, schedules are rows in time, grouping sets are grids — the clue ledger, rigid-blocks-first placement and the stuck-protocol are identical. Choosing the right template in the first fifteen seconds is the family-specific skill.',
          },
          {
            q: 'The most constrained person for a first fork is the one:',
            options: ['With the most statements mentioning them', 'Whose name appears first', 'With the fewest legal placements remaining', 'Seated at the reference seat'],
            answer: 2,
            explain: 'Fork value comes from constraint: the person with the fewest legal placements makes the assumption most likely to hit a fast contradiction. Statement count is a weak proxy; remaining-placement count is the real measure.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The position line and anchor method were built in Ordering and Ranking; this chapter extends them to full templates. Clocks, Calendars and Mathematical Logic adds the cyclic-arithmetic cousins of circular seating, and Data Interpretation in the Quantitative Aptitude subject carries the same grid discipline into numbers. For the formal underpinnings — permutations of circular arrangements (n−1)!, and constraint satisfaction as a discipline — the Mathematics and Computing subjects own the deep theory.',
        tone: 'path',
      },
    ],
  },
]
