/**
 * Knowledge Universe — Logical Reasoning — Chapter 04: Relations, Directions & Ordering
 * 1 lesson · ~2,054 words
 * field: Logical Reasoning
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Relations & Ordering]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 lr-ordering-ranking — Ordering and Ranking: Positions as Constraints
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh04: KnowledgeTopic[] = [
  // ================================================================
  // LOGICAL REASONING — Ch5 Relations, Directions & Ordering
  // §5.3 — ordering and ranking puzzles (rank positions, totals,
  // between-counts, comparison chains).
  // Carve: no existing topic owns rank arithmetic (greps 'ranking',
  // 'rank from' — zero reasoning hits). ku-math cumulative frequency
  // owns statistical quartiles, a different sense of position.
  // ================================================================
  {
    id: 'lr-ordering-ranking',
    title: 'Ordering and Ranking: Positions as Constraints',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Relations & Ordering',
    tier: 'core',
    concepts: [
      'rank vocabulary: rank from top, rank from bottom, and the total-count identity',
      'the position line: draw before deducing',
      'combining two partial rankings about the same person',
      'between-counts: persons strictly between two positions',
      'interchange problems: when two people swap places',
      'comparison chains: ordering by transitive “greater-than” links',
      'the anchor-and-float method: fix what is known, let the rest move',
    ],
    words: 2055,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '“In a row of students, Ravi is 7th from the left and 12th from the right — how many students are in the row?” This is the gateway item of the ordering-and-ranking family, and the family is everywhere: management-admission data-and-reasoning sets, bank recruitment papers, school-entrance general tests, defence-academy ability sections. The items look numerical, but they are really constraint bookkeeping — a handful of positional identities, applied with the discipline of writing the line down before touching it. Master five identities and one drawing habit, and the entire family collapses to routine.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Ordering items are compact — usually 30 to 45 seconds each for the prepared, and they appear in clusters of three to five sharing one stem. The drawing habit also transfers directly to the bigger puzzle formats (seating, floors, scheduling), where candidates who never learned to externalize positions drown. This lesson is the smallest subject with the largest transfer value in the reasoning syllabus.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The rank vocabulary first. A rank from the top (or left, or front) counts position 1 at that reference end; a rank from the bottom counts position 1 at the other. The same person can carry both counts, and the total-count identity binds them: Total = (rank from top) + (rank from bottom) − 1. Why minus one: the person themselves is counted by BOTH ranks, so the raw sum double-counts them once. Ravi at 7th from left and 12th from right: 7 + 12 − 1 = 18 students. The identity has a twin for overlapping ranks of two people: Total ≥ (rank₁ from left) + (rank₂ from right) − 1, with equality only when the two people are the SAME distance apart as the counts imply — the inequality versions are where the harder items live.',
      },
      {
        kind: 'para',
        text: 'The position line is the drawing habit that runs the whole family: before deducing anything, draw the line of positions and mark what the statement gives. For 18 positions, write slots 1 … 18; mark R at 7 from the left and (equivalently) 12 from the right — the two marks must LAND on the same slot, and that consistency check is itself the solution of the basic item. Every harder item — overlaps, interchanges, between-counts — is solved ON the drawn line, never in the head. The failures of this family are overwhelmingly failures to draw: candidates try to hold two reference directions mentally, and setters design items specifically to overload that mental buffer.',
      },
      {
        kind: 'figure',
        caption: 'The position line for the identity Total = left-rank + right-rank − 1: Ravi occupies slot 7 from the left and slot 12 from the right simultaneously, and the double-count of his own slot is the −1.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Position line with a person counted from both ends">
  <style>.n{font-family:Georgia,serif;font-size:13px;fill:#52525b}.big{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.r{font-family:Georgia,serif;font-size:14px;font-weight:bold;fill:#e11d48}.g{font-family:Georgia,serif;font-size:13px;fill:#0f766e}.slot{fill:#fafafa;stroke:#8a8a93;stroke-width:1.4}</style>
  ${Array.from({length: 18}, (_, i) => `<rect class="slot" x="${30 + i * 43}" y="70" width="38" height="46"/>`).join('')}
  ${Array.from({length: 18}, (_, i) => `<text class="n" x="${40 + i * 43}" y="134" text-anchor="middle">${i + 1}</text>`).join('')}
  <rect x="${30 + 6 * 43}" y="70" width="38" height="46" fill="#fee2e2" stroke="#e11d48" stroke-width="2.2"/>
  <text class="r" x="${49 + 6 * 43}" y="100" text-anchor="middle">R</text>
  <path d="M ${49} 50 C 150 20, 280 20, ${49 + 6 * 43} 66" stroke="#e11d48" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
  <text class="r" x="140" y="30">7th from the left</text>
  <path d="M ${49 + 6 * 43} 66 C 500 30, 640 30, ${30 + 17 * 43 + 19} 50" stroke="#0f766e" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
  <text class="g" x="600" y="30">12th from the right</text>
  <text class="big" x="30" y="190">Total = 7 + 12 − 1 = 18 slots</text>
  <text class="n" x="30" y="214">Ravi\u2019s own slot is counted by both ranks — the −1 removes the double count.</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Combining two partial rankings about the same person is the first extension: the statement gives one rank from one end and an interval to a friend, or ranks of two people from opposite ends. The between-count identity: persons strictly between A and B = Total − (rank of A) − (rank of B), when A and B are counted from opposite ends with no overlap trouble. Its same-end version: between-count = |rank difference| − 1, because the positions strictly between slot 7 and slot 12 are 8 through 11 — four people, which is 12 − 7 − 1. The −1 appears in both identities for the same structural reason: the endpoints of an interval are not inside it. When an item asks “how many BETWEEN”, underline the word between; when it says “from Ravi to Mohan inclusive”, the answer gains the endpoints back — setters alternate these phrasings precisely on the boundary words.',
      },
      {
        kind: 'para',
        text: 'Interchange problems add one move: two people swap positions, and one new rank is given. The discipline is to track what a swap preserves. If A (rank 9 from left) and B (rank 15 from left) swap, then AFTER the swap A sits at 15 and B at 9 — the slots themselves do not move, only the occupants. The classic item: “A is 9th from the left; B is 15th from the left. They interchange positions, and after the interchange A is 12th from the right — how many are in the row?” After the swap A occupies slot 15, and 12th from the right means Total = 15 + 12 − 1 = 26. Trap versions leave the row length to be found through the OTHER person\u2019s new rank instead — and both computations must agree in a consistent item; that agreement is the built-in check.',
      },
      {
        kind: 'para',
        text: 'Comparison chains order people by a quality rather than a position: “A is taller than B; C is shorter than B; D is taller than A.” The craft is symbol discipline — convert each statement directly into an inequality as written (A > B; B > C; D > A), then merge the fragments into one chain: D > A > B > C. Note how the third statement attaches at the TOP of the chain, not the bottom — always splice where the statement says, never where it would be convenient. Questions then ask for extremes (tallest, shortest), medians, or counts (“how many are definitely taller than C?”). The trap vocabulary: “at least” and “at most” — if only three comparisons link five people, the number DEFINITELY taller than someone may be smaller than the number POSSIBLY taller. Draw the chain, read off what is forced, and treat “definitely” as a request for the forced part of the partial order only.',
      },
      {
        kind: 'para',
        text: 'The anchor-and-float method is the family\u2019s general engine: anchor everything the statements force (fixed slots, fixed neighbours, quality extremes), and let the floats (unplaced people) orbit the anchors. An item mixing constraints — “Ravi is 7th from the left; Sam is 4th to the right of Ravi; exactly two people stand between Sam and the right end” — is solved by cascading the anchors: R at 7 forces Sam to 11 (7 + 4); “exactly two between Sam and the end” means slots 12 and 13 exist and the row ends at 13, so the total is 13. Each anchor\u2019s consequence is computed, written, and only then is the next statement read. Items fail when all statements are read at once and no line is drawn.',
      },
      {
        kind: 'example',
        title: 'Worked example — a two-layer ranking item',
        steps: [
          'The stem: “In a class queue, Meena is 11th from the front. Rita is 16th from the back. There are 4 students between them. How many students are in the queue at minimum?”',
          'Draw the line with anchors: Meena is FIXED at 11 from the front. Rita\u2019s position is known only relative to Meena plus the between-count.',
          'Case 1 — Rita behind Meena: 4 students between means Rita is at 11 + 4 + 1 = 16 from the front. Then her back-rank 16 gives Total = 16 + 16 − 1 = 31.',
          'Case 2 — Rita ahead of Meena: Rita at 11 − 4 − 1 = 6 from the front. Then 6 (front-rank) + 16 (back-rank) − 1 = 21.',
          'The minimum over legal cases: 21. The item\u2019s phrase “at minimum” is precisely the signal that both orderings are legal and the smaller total is wanted.',
          'Note the structure to reuse: whenever two people are located only relative to each other, enumerate both orders — the two cases give two totals, and the question\u2019s phrasing (minimum / maximum / cannot be determined) selects among them.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Forgetting the −1 is the family\u2019s signature error — it appears in the total identity and the between-count for the same structural reason, and every option set includes the no-minus-one answer. Second: reading “between” as inclusive. Third: solving interchange items without drawing (the old and new positions blur within seconds). Fourth: answering “definitely” questions with “possibly” logic on comparison chains. Draw the line, mark the anchors, and the traps have nowhere to land.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Total-count identity', def: 'Total = rank from top + rank from bottom − 1; the −1 removes the shared person\u2019s double count.' },
          { term: 'Position line', def: 'The drawn slot diagram on which all ordering deductions are performed before answering.' },
          { term: 'Between-count (opposite ends)', def: 'Persons strictly between A and B = Total − rank(A) − rank(B), for ranks from opposite ends.' },
          { term: 'Between-count (same end)', def: 'Persons strictly between = |higher rank − lower rank| − 1; endpoints are not inside the interval.' },
          { term: 'Interchange tracking', def: 'Swapping occupants, not slots — after a swap each person carries the other\u2019s old position.' },
          { term: 'Comparison chain', def: 'A merged order from transitive statements (A > B, B > C ⇒ A > B > C); “definitely” questions read only the forced links.' },
          { term: 'Anchor-and-float', def: 'Fixing all forced positions first and letting unplaced people occupy the remaining legal slots.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Ravi is 7th from the left and 12th from the right. The row has:',
            options: ['18 students', '19 students', '17 students', '20 students'],
            answer: 0,
            explain: '7 + 12 − 1 = 18: the −1 because Ravi\u2019s own slot is included in both counts. 19 is the no-minus-one distractor that appears in every option set of this family.',
          },
          {
            q: 'In a row of 40, A is 13th from the left and B is 9th from the right. Students strictly between A and B number:',
            options: ['19', '18', '20', '17'],
            answer: 1,
            explain: 'Between-count from opposite ends: 40 − 13 − 9 = 18. If instead both ranks had been given from the same end, the same-end version |difference| − 1 would apply — the option 19 waits for that confusion.',
          },
          {
            q: 'Positions 7 and 12 in a queue. People strictly between them:',
            options: ['5', '4', '6', '3'],
            answer: 1,
            explain: 'Slots 8, 9, 10, 11 — four people: 12 − 7 − 1. The −1 exists because the endpoints of an interval are not inside it; option 5 is the inclusive misread.',
          },
          {
            q: 'A is 9th from the left; B is 15th from the left. They swap. After the swap, A is 12th from the right. The row length is:',
            options: ['26', '25', '24', '27'],
            answer: 0,
            explain: 'After the swap A occupies slot 15 (slots do not move, occupants do). Total = A\u2019s left-rank + right-rank − 1 = 15 + 12 − 1 = 26. B\u2019s new right-rank (26 − 9 + 1 = 18... check: B at slot 9, so from the right 26 − 9 + 1 = 18) must agree — it always does in a consistent item.',
          },
          {
            q: '“A is taller than B; C is shorter than B; D is taller than A.” Who is definitely the shortest?',
            options: ['C', 'B', 'A', 'Cannot be determined'],
            answer: 0,
            explain: 'The merged chain: D > A > B > C. C sits at the bottom of the forced order — definitely shortest. The chain must be WRITTEN; holding three inequalities mentally is how “cannot be determined” gets chosen on items that are fully determined.',
          },
          {
            q: 'Meena is 11th from the front; Rita is 16th from the back; exactly 4 students stand between them. The queue\u2019s minimum size is:',
            options: ['31', '21', '26', '25'],
            answer: 1,
            explain: 'Two legal orderings: Rita behind Meena → front-rank 16, total 16 + 16 − 1 = 31; Rita ahead → front-rank 6, total 6 + 16 − 1 = 21. “Minimum” selects 21. Whenever two people are located only relative to each other, enumerate both orders.',
          },
          {
            q: 'Only statement: “Five friends sat in a row; P is somewhere to the left of Q.” How many arrangements are possible?',
            options: ['120', '60', '24', '10'],
            answer: 1,
            explain: 'Five people arrange in 5! = 120 ways; “P left of Q” holds in exactly half of them by symmetry — 60. The somewhere-left family (no distance given) is a symmetry argument, not a counting slog.',
          },
          {
            q: 'A scores more than B; B scores more than C; D scores more than A. Students DEFINITELY scoring more than C:',
            options: ['A, B and D', 'Only B', 'Only D', 'Cannot be determined'],
            answer: 0,
            explain: 'Chain: D > A > B > C — all three of D, A, B are forced above C. The forced part of a comparison chain answers “definitely”; anything beyond it is “possibly”, a different question word.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The position line graduates into full seating diagrams in Arrangements and Puzzles, and the comparison-chain discipline returns in Blood Relations and scheduling sets. The counting machinery behind “half of the arrangements” belongs to the Permutations & Combinations chapter of this book, and the formal theory of partial orders lives in the Mathematics Master Library\u2019s relations chapter — here you own the drawn-line speed layer.',
        tone: 'path',
      },
    ],
  },
]
