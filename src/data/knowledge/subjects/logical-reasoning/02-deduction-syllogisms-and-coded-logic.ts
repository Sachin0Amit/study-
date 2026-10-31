/**
 * Knowledge Universe — Logical Reasoning — Chapter 02: Deduction: Syllogisms & Coded Logic
 * 1 lesson · ~1,944 words
 * field: Logical Reasoning
 * legacy sources: x25-tournament-reasoning-civics-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Syllogisms, Coded Inequalities]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 reason-coded-inequalities — Coded Inequalities: Decoding Order Statements into Valid Conclusions
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh02: KnowledgeTopic[] = [
  {
    id: 'reason-coded-inequalities',
    title: 'Coded Inequalities: Decoding Order Statements into Valid Conclusions',
    domain: 'Foundation Learning',
    field: 'Logical Reasoning',
    branch: 'Coded Inequalities',
    tier: 'core',
    concepts: [
      'Decoding a symbol-to-meaning map first',
      'Order relations: transitivity and direction',
      'Combining statements into one chain',
      'The direction-reversal breaking point',
      'How ≥ and ≤ change what is definite',
      'Either-or conclusions and complementary pairs',
      'Conclusion validation against the chain',
    ],
    words: 1944,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Coded inequality questions hide a tiny logic engine inside a substitution puzzle: symbols such as @, #, % or & stand in for “greater than”, “less than”, “equal to” and their compound forms, and the task is to decide which conclusions about the underlying order must follow. Nothing in the topic needs speed-reading tricks or lucky guesses — it is the mathematics of order relations dressed in costume. Decode the symbols, lay the statements into a single chain, and test each conclusion against what the chain guarantees. Done in that order, the questions are among the fastest, most reliable marks in any reasoning section; done out of order — reading coded conclusions against coded statements — they become guesswork.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The entire method reduces to one geometric picture: a number line with the elements placed left-to-right, and arrows that must all point the same way for information to travel. Transitivity — if A > B and B > C then A > C — is the property that lets a chain carry a conclusion from end to end; the direction-reversal rule (A > B but C < B) is the property that stops it. Every classification of a conclusion — definitely true, definitely false, cannot say, either-or — falls out of whether the chain connects the two elements with an unbroken same-direction path and whether the connectors are strict (>, <) or generous (≥, ≤). Master the picture once and every question, coded or plain, becomes the same three-step routine.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Decode map', def: 'The legend converting each code symbol to its real meaning (for example @ → >, # → <, $ → =, % → ≥, & → ≤). Always rewrite the statements in standard symbols before thinking; never reason on the codes.' },
          { term: 'Order relation', def: 'A comparison relation between elements. The chains used here are transitive — A > B and B > C force A > C — which is the property that makes chains informative. In formal terms the relations studied are (partial or total) orderings: reflexive or irreflexive variants aside, antisymmetry and transitivity are what give an order its shape.' },
          { term: 'Chain', def: 'The combined picture after decoding: statements joined through shared elements, written as one line such as A > B ≥ C = D < E. A conclusion between two elements is legitimate exactly when a same-direction path joins them.' },
          { term: 'Breaking point', def: 'A position where the direction reverses, as in A > B < C. Information cannot cross it: nothing definite follows between A and C — each of A > C, A < C and A = C remains possible, so any definite claim is wrong.' },
          { term: 'Strict versus generous connectors', def: 'Strict connectors (>, <) pin an order; generous ones (≥, ≤) leave a choice. Chaining through ≥ yields a definite ≥ and nothing sharper: A ≥ B ≥ C guarantees A ≥ C but neither A > C nor A = C alone.' },
          { term: 'Complementary pair (either-or)', def: 'Two conclusions that are individually unprovable but jointly exhaustive — for example “A > B” and “A = B” when the chain guarantees only A ≥ B. Exactly one of them must hold, so the answer is “either I or II follows”. They require the same two elements, and neither may be provable alone.' },
        ],
      },
      {
        kind: 'para',
        text: 'Decode before you think — the rule has no exceptions. Read the legend once and write the meaning of every symbol in the margin; then rewrite all statements in standard notation, checking the direction of each as you go, because coded legends deliberately reverse intuitions (“@ means greater than” on one paper may mean less than on the next). A code for “not equal to” deserves special respect: ≠ gives no direction at all, so a statement P ≠ Q contributes order nothing — it may decorate a conclusion’s options but can never help build a chain. After decoding, the conclusions must be decoded too: a conclusion written in codes is read against the chain only after conversion to standard symbols. Every one of the classic errors — “treating ≥ as >”, “assuming transitivity across disconnected statements”, “reading coded conclusions directly” — is at bottom a decode-order error.',
      },
      {
        kind: 'para',
        text: 'Build the chain next. List the statements, find the shared elements and splice them into one line — P > Q, Q = R, R > S becomes P > Q = R > S. Two kinds of combination are safe. Same-direction transitivity: every strict step compounds, so P > Q > R gives P > R, and any run of ≥ steps gives a definite ≥ across the run. Equality substitution: an = merges its two elements into interchangeable labels, so P > Q = R is exactly P > R with a spare name. One combination is never safe: opposite-facing connectors around a shared element — P > Q alongside R < Q, or P ≥ Q alongside Q < R — leave the outer pair unordered, because concrete numbers make all three outcomes possible (take P = 10, R = 5; P = 5, R = 10; P = R = 7 with suitable Q). The chain line makes the breaking point visible; trust it over any feeling.',
      },
      {
        kind: 'para',
        text: 'Generous connectors demand accounting. Read A ≥ B as a fork: either A > B or A = B, with neither branch guaranteed. Chaining through a fork can only promise the fork’s own generosity: A ≥ B ≥ C guarantees A ≥ C, but the sharper claims A > C and A = C are each merely possible — a case exists for both. A strict step anywhere in the run sharpens everything after it: A > B ≥ C forces A > C (the strictness propagates forward), and A ≥ B > C does too. So the one-line rule: a run of connectors is as strong as its weakest strict member — if any link in the run from X to Y is strict, the conclusion is strict; if all are generous, the conclusion is generous; if a link is equality, elements merge. This single sentence resolves every “definitely” question about ≥ chains without a table.',
      },
      {
        kind: 'para',
        text: 'Conclusions then classify into four verdicts. Definitely true: the chain carries an unbroken same-direction path with the right strength (P > R from P > Q = R > S; P ≥ R from P ≥ Q ≥ R). Definitely false: the chain carries the opposite path — “P < R” is false when P > R is guaranteed. Cannot say: no path joins the pair, or every path crosses a breaking point (P > Q, Q < R leaves P–R open). Either-or: the pair of conclusions uses the same two elements, neither is individually definite, and together they exhaust the guaranteed relation — the canonical case is “P > R” and “P = R” when the chain proves only P ≥ R; the mirror case is “P ≤ R” with “P = R” when only P ≤ R is proved. Mark either-or only when both conditions hold; a conclusion that is outright false cannot join the pair.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One Full Coded Question, Start to Finish',
        steps: [
          'Legend: @ → >, % → ≥, $ → =, # → <. Statements: A % B, B @ C, C $ D, D # E. Conclusions: I. A @ D; II. A @ E; III. C % E.',
          'Decode statements: A ≥ B, B > C, C = D, D < E. Rewrite the chain: A ≥ B > C = D < E.',
          'Mark the breaking point: between D and E the direction flips (< after the descending run) — no definite statement can cross it.',
          'Test I (A > D): path A ≥ B > C = D carries one strict link (B > C), so strictness propagates: A > D. TRUE.',
          'Test II (A > E): every A–E path crosses the D–E breaking point. CANNOT SAY.',
          'Test III (C ≥ E): the only path is C = D < E, which actually proves C < E — the opposite. FALSE. Verdict: only I follows.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Statements: M > N, N > O. Conclusions: I. M > O; II. O < M. Which follows?',
          options: ['Only I', 'Only II', 'Both I and II', 'Neither'],
          answer: 2,
          explain: 'The chain M > N > O proves M > O; conclusion II restates the same fact in reverse wording (O < M ≡ M > O). Both follow.',
        },
        {
          q: 'Statements: P ≥ Q, Q = R. Which single conclusion is definitely true?',
          options: ['P > R', 'P = R', 'P ≥ R', 'P < R'],
          answer: 2,
          explain: 'A ≥ run through an equality keeps only the generous strength: P ≥ R holds in both branches (P > R or P = R), but neither sharper claim is guaranteed.',
        },
        {
          q: 'Statements: X > Y, Z < Y. What can be concluded about X and Z?',
          options: ['X > Z', 'X < Z', 'X = Z', 'No definite relation'],
          answer: 3,
          explain: 'Both statements face Y from opposite directions — a breaking point at Y. X > Z, X < Z and X = Z are all consistent with the data, so nothing definite follows.',
        },
        {
          q: 'Statements: A > B ≥ C. Conclusion: A > C. This conclusion is…',
          options: ['false', 'true, because one strict link sharpens the run', 'cannot say', 'true only if B = C'],
          answer: 1,
          explain: 'A > B is strict and the strictness propagates through the generous B ≥ C, so A > C is definite. Had both links been ≥, only A ≥ C would follow.',
        },
        {
          q: 'A chain guarantees exactly A ≥ B. Conclusions: I. A > B; II. A = B. The correct verdict is…',
          options: ['only I', 'only II', 'either I or II follows', 'both I and II'],
          answer: 2,
          explain: 'Neither branch of the fork is provable alone, but one must hold — same two elements, jointly exhaustive. That is the complementary-pair (either-or) case.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading coded conclusions against coded statements — decode everything first, including the conclusions. Crossing a breaking point: A > B < C licenses nothing about A and C, however tempting. Promoting ≥ to >: a generous chain proves only a generous conclusion, and the sharper claim is always a coin-flip case. Reversing a decoded symbol — A > B is B < A, not B > A. Assuming transitivity across statements that share no element, or across a “not equal” code, which carries no direction at all. And awarding either-or when one conclusion is outright false or the two conclusions mention different element pairs — complementarity needs same elements, individual unprovability and joint exhaustiveness, all three.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — the order-relations core is built from scratch here. Follow with the critical-reasoning lesson for conclusion-testing habits in verbal arguments, and the order-and-ranking style puzzles that extend chains with positions. Primary reading: SATHEE, IIT Kanpur (Ministry of Education initiative), “Inequality (Coded Inequalities) — Theory & Concepts”, sathee.iitk.ac.in — the decode-then-chain method, combination rules and either-or conditions; H. Kwong, A Spiral Workbook for Discrete Mathematics, section 7.4 “Partial and Total Ordering”, math.libretexts.org (CC BY-NC-SA) — the reflexive/antisymmetric/transitive properties behind order relations.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Decode first: rewrite statements and conclusions in standard symbols; a “not equal” code contributes no direction.',
        'Splice statements into one chain; the chain is the single source of truth for every verdict.',
        'Same-direction runs compound by transitivity; opposite-facing connectors create a breaking point that nothing definite crosses.',
        'Strictness propagates: one strict link sharpens the whole run; a run of ≥ proves only ≥.',
        'Four verdicts: definitely true, definitely false, cannot say, either-or (complementary pairs on the same two elements).',
        'The routine — decode, chain, test, classify — turns the whole topic into repeatable 60-second questions.',
      ] },
    ],
  },
]
