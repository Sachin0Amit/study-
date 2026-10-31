/**
 * Knowledge Universe — Mathematics — Chapter 01: Sets, Logic & Mathematical Foundations
 * 2 lessons · ~3,300 words
 * fields: Foundations, Set Theory & Logic
 * legacy sources: mathematics.ts, x28-gaokao-skills-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Foundations, Set Theory & Logic]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 math-sets-logic-foundations — Sets and Logical Terms: The Grammar of Precise Mathematics
 *   01.2 math-infinity-countability — Infinity and Different Sizes of Forever
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'math-sets-logic-foundations',
    title: 'Sets and Logical Terms: The Grammar of Precise Mathematics',
    domain: 'Mathematics',
    field: 'Foundations',
    branch: 'Sets and Logic',
    tier: 'core',
    concepts: [
      'Roster and set-builder forms',
      'Membership, subsets and set equality',
      'Venn diagrams and two-set regions',
      'Union, intersection and complement',
      'Counting with the inclusion-exclusion formula',
      'Statements, negation and quantifiers',
      'And, or, not: compound statements',
      'Conditionals: converse, inverse, contrapositive',
      'Necessary and sufficient conditions',
      "De Morgan's laws in logic and in sets",
    ],
    words: 2051,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Sets are the containers of mathematics and logic is its grammar; both supply the precise vocabulary every later subject borrows — functions map between sets, probability measures them, proofs argue in logical forms. Yet the vocabulary itself is often assumed rather than taught, which is why phrases like \u201cif and only if\u201d or \u201cat least one\u201d trip otherwise strong students. This lesson fixes the vocabulary in place: what a set is and how to draw one, what the five connectives mean, how conditionals split into converse, inverse and contrapositive, and how the two languages — sets and statements — mirror each other through De Morgan\u2019s laws.',
      },
      {
        kind: 'para',
        text: 'The treatment follows the open textbook Contemporary Mathematics (OpenStax), whose first two chapters give exactly this ground floor: Chapter 1 runs from basic set concepts through subsets and Venn diagrams to set operations with two and three sets; Chapter 2 runs from statements and quantifiers through compound statements and truth tables to equivalent statements, De Morgan\u2019s laws and logical arguments. Everything below is that material in exam-ready form, with the notation compressed to what assessments actually use.',
      },
      { kind: 'heading', text: 'Sets: notation and membership' },
      {
        kind: 'para',
        text: 'A set is a well-defined collection of distinct objects — well-defined meaning membership is decidable: either 3 belongs to the set of odd numbers or it does not, with no arguing. Two notations define sets. Roster form lists elements between braces: A = {1, 2, 3, 4}. Set-builder form states the membership condition: A = {x | x is a natural number less than 5}. Membership uses \u2208 (3 \u2208 A) and non-membership \u2209 (7 \u2209 A). The empty set \u2205 has no elements; the cardinality n(A) counts them, so n(A) = 4 and n(\u2205) = 0. One caution the assessments love: order and repetition do not matter in roster form — {1, 2, 2, 3} is just {1, 2, 3} — and the empty set is not the same as the set containing zero.',
      },
      {
        kind: 'para',
        text: 'A is a subset of B, written A \u2286 B, when every element of A is also an element of B; it is a proper subset, A \u2282 B, when B additionally has elements A lacks. Every set is a subset of itself, and the empty set is a subset of every set — two conventions worth memorizing because true/false questions target them directly. Equality of sets is mutual containment: A = B exactly when A \u2286 B and B \u2286 A. Fixing a universal set U — the universe of discourse for the problem, say all students in a school — lets you define the complement A\u2032: everything in U outside A. n(A\u2032) = n(U) \u2212 n(A), the single most-used counting fact in this topic.',
      },
      { kind: 'heading', text: 'Venn diagrams and set operations' },
      {
        kind: 'para',
        text: 'The union A \u222a B is everything in A or B (or both); the intersection A \u2229 B is everything in both; two sets are disjoint when A \u2229 B = \u2205. Venn diagrams turn these definitions into pictures: two overlapping circles inside the universal-set rectangle carve the plane into four regions — A only, B only, both, neither — and every counting problem is a matter of filling those regions from the inside out: intersection first, then the \u201conly\u201d regions by subtraction. The inclusion-exclusion formula compresses the picture: n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B); the subtraction corrects the double-count of the overlap. With three sets the diagram has eight regions and the principle is unchanged — fill the innermost overlap first — though the full formula adds and subtracts three more terms.',
      },
      {
        kind: 'para',
        text: 'The set operations mirror the logical connectives, which is no accident: \u201cin A \u222a B\u201d means \u201cin A or in B\u201d, and \u201cin A \u2229 B\u201d means \u201cin A and in B\u201d. Keep that dictionary in your pocket — every logic law below has a set twin, and exam questions exploit the translation in both directions, most often through the complement laws (A \u222a A\u2032 = U, A \u2229 A\u2032 = \u2205) and through De Morgan\u2019s set form.',
      },
      { kind: 'heading', text: 'Statements and quantifiers' },
      {
        kind: 'para',
        text: 'A logical statement is a declarative sentence that is definitively true or false — questions (\u201cis it raining?\u201d), commands (\u201cclose the door\u201d) and opinions without a truth condition do not qualify. Negation flips the truth value: the negation of \u201cthe door is open\u201d is \u201cthe door is not open\u201d, and negation of a negation restores the original. Quantified statements bring generality: \u201call A are B\u201d, \u201cno A are B\u201d, \u201csome A are B\u201d (where \u201csome\u201d means at least one). Their negations are the exam\u2019s favourite trap, so memorize the pair: the negation of \u201call are\u201d is \u201csome are not\u201d — NOT \u201cnone are\u201d; the negation of \u201csome are\u201d is \u201cnone are\u201d; the negation of \u201cno A are B\u201d is \u201csome A are B\u201d. One bird that is not a raven kills \u201call birds are ravens\u201d, but does not touch \u201cno birds are ravens\u201d — it proves that one false.',
      },
      {
        kind: 'para',
        text: 'Compound statements join simpler ones with \u201cand\u201d (\u2227, the conjunction — true only when both parts are true), \u201cor\u201d (\u2228, the disjunction — true when at least one part is true, the inclusive reading that formal logic always takes), and \u201cnot\u201d (\u00ac). Truth tables list every case, and their four-line tables for two statements are the ground truth from which every equivalence below is verified. The conditional \u201cif p then q\u201d (p \u2192 q) gets its own table: it is false only when p is true and q is false — the one case where the promise was broken. When the hypothesis is false the conditional is vacuously true, a convention that feels strange and is tested constantly.',
      },
      { kind: 'heading', text: 'Converse, inverse, contrapositive — and the two conditions' },
      {
        kind: 'para',
        text: 'From a conditional p \u2192 q, three variants are formed by juggling p and q with negation: the converse q \u2192 p (conditions swapped), the inverse \u00acp \u2192 \u00acq (both negated), and the contrapositive \u00acq \u2192 \u00acp (swapped and negated). Exactly one variant is logically equivalent to the original: the contrapositive. \u201cIf it is a swan then it is a bird\u201d is the same claim as \u201cIf it is not a bird then it is not a swan\u201d — but NOT the same as \u201cIf it is a bird then it is a swan\u201d (the converse), the single most common logic error in student writing and in option lists. To disprove a conditional, exhibit a case with p true and q false; to prove it, assume p and derive q — the contrapositive route counts as a proof because of the equivalence.',
      },
      {
        kind: 'para',
        text: 'The same conditional carries the language of conditions: p is a sufficient condition for q when p \u2192 q (p alone guarantees q), and q is a necessary condition for p under the same arrow (q must hold for p to have any chance). So \u201cbeing in A \u2229 B is sufficient for being in A\u201d, while \u201cbeing in A is necessary for being in A \u2229 B\u201d. The biconditional p \u2194 q — \u201cp if and only if q\u201d — holds when both arrows hold, making each condition both necessary and sufficient; set-wise it is equality, A = B.',
      },
      {
        kind: 'para',
        text: 'De Morgan\u2019s laws close the mirror between the two languages: \u00ac(p \u2227 q) \u2261 \u00acp \u2228 \u00acq and \u00ac(p \u2228 q) \u2261 \u00acp \u2227 \u00acq — negation flips and with ors and ors with ands. The set twins: (A \u2229 B)\u2032 = A\u2032 \u222a B\u2032 and (A \u222a B)\u2032 = A\u2032 \u2229 B\u2032. Finally, an argument is a chain of conditionals, and validity means the conclusion follows from the premises by form alone. The two workhorse forms: modus ponens (p \u2192 q, p, therefore q) and modus tollens (p \u2192 q, \u00acq, therefore \u00acp — contrapositive reasoning in action). The classic invalid look-alike, affirming the consequent (p \u2192 q, q, therefore p) is just the converse error wearing a suit.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A survey counted by regions, a claim tested by contrapositive',
        steps: [
          'Survey: in a class of 40, n(Maths) = 22, n(Physics) = 18, and 8 students take both. How many take neither?',
          'Fill the Venn regions from the inside: both = 8; Maths only = 22 \u2212 8 = 14; Physics only = 18 \u2212 8 = 10.',
          'Union: n(Maths \u222a Physics) = 14 + 8 + 10 = 32 — check against the formula: 22 + 18 \u2212 8 = 32.',
          'Neither = complement of the union: 40 \u2212 32 = 8 students. Every survey question is this recipe with different costumes.',
          'Logic check: the claim \u201cif a student takes Maths then she takes Physics\u201d is false — the 14 Maths-only students are counterexamples. Its contrapositive \u201cif she does not take Physics then she does not take Maths\u201d is equally false; its converse is a different (also false) claim. Same diagram, two languages.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which statement about subsets is true by convention?',
            options: [
              'the empty set is a subset of no set',
              'every set is a proper subset of itself',
              'the empty set is a subset of every set',
              '{1, 2, 2, 3} has four elements',
            ],
            answer: 2,
            explain: 'Vacuously, \u2205 has no element outside any set, so \u2205 \u2286 B for every B. Repetition never increases cardinality: {1, 2, 2, 3} = {1, 2, 3}, n = 3.',
          },
          {
            q: 'In a group, n(A) = 15, n(B) = 12 and n(A \u2229 B) = 5. How many are in at least one of A, B?',
            options: ['27', '22', '32', '17'],
            answer: 1,
            explain: 'Inclusion-exclusion: n(A \u222a B) = 15 + 12 \u2212 5 = 22. Forgetting the subtraction — answer 27 — double-counts the five in both.',
          },
          {
            q: 'What is the negation of \u201call smartphone cameras have wide lenses\u201d?',
            options: [
              'no smartphone cameras have wide lenses',
              'all smartphone cameras lack wide lenses',
              'some smartphone cameras do not have wide lenses',
              'some smartphone cameras have wide lenses',
            ],
            answer: 2,
            explain: '\u201cAll are\u201d dies on a single counterexample, so its negation is \u201csome are not\u201d. Answer 3 states something the original already implies — the classic decoy.',
          },
          {
            q: 'The statement \u201cif a number is divisible by 6, then it is divisible by 3\u201d is true. Which variant is guaranteed true as well?',
            options: [
              'if divisible by 3, then divisible by 6 (converse)',
              'if not divisible by 6, then not divisible by 3 (inverse)',
              'if not divisible by 3, then not divisible by 6 (contrapositive)',
              'none of them',
            ],
            answer: 2,
            explain: 'Only the contrapositive is logically equivalent to the original. The converse is false (6 does not divide 3), and the inverse is its equivalent — equally false here.',
          },
          {
            q: 'In the sentence \u201cpassing the practical exam is necessary for certification\u201d, which logical form is stated?',
            options: [
              'certification \u2192 passing the practical',
              'passing the practical \u2192 certification',
              'passing the practical \u2194 certification',
              'no conditional is present',
            ],
            answer: 0,
            explain: '\u201cq is necessary for p\u201d writes as p \u2192 q — no certificate can exist unless the practical is passed. \u201cPassing implies certification\u201d would additionally make it sufficient — that stronger reading is the biconditional error.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Forgetting the subtraction in inclusion-exclusion — the overlap gets counted twice. Reading \u201csome\u201d as \u201cnot all\u201d in formal logic; it means at least one, possibly all. Swapping in the converse when the contrapositive is called for. Misnegating quantified statements: \u201cnot all\u201d is \u201csome are not\u201d, never \u201cnone are\u201d. Treating a false-hypothesis conditional as false — it is vacuously true, the only false row being p true with q false. Filling Venn diagrams from the outside in, which garbles the \u201conly\u201d regions; always start from the innermost overlap.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is a foundations lesson. Follow with the probability topics (events are sets, and \u201cor\u201d/\u201cand\u201d become union/intersection with rules attached) and the critical-reasoning lesson for arguments in natural language. Primary reading: OpenStax, Contemporary Mathematics, ch.1 \u201cSets\u201d and ch.2 \u201cLogic\u201d (openstax.org, CC BY-NC-SA) — sections 1.1-1.5 and 2.1-2.7 cover everything here with fuller truth tables.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Sets: roster or set-builder; \u2208 membership; n(A) counts; \u2205 is a subset of everything.',
        'Venn regions fill from the overlap out; n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B).',
        '\u201cAnd\u201d is true only jointly; \u201cor\u201d is inclusive; \u2192 fails only when p true, q false.',
        'Negate \u201call are\u201d as \u201csome are not\u201d; negate \u201csome are\u201d as \u201cnone are\u201d.',
        'Only the contrapositive is equivalent; the converse is the classic decoy.',
        'Sufficient writes p \u2192 q; necessary is q under the same arrow; both = biconditional.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'math-infinity-countability',
    title: 'Infinity and Different Sizes of Forever',
    domain: 'Mathematics',
    field: 'Set Theory & Logic',
    branch: 'Foundations',
    tier: 'advanced',
    concepts: [
      'Same size means one-to-one correspondence',
      'Countable infinity and Hilbert\u2019s hotel',
      'Cantor\u2019s diagonal argument',
      'Power sets and Cantor\u2019s theorem',
      'The continuum hypothesis',
      'Diagonalization beyond set theory',
    ],
    words: 1249,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Galileo noticed that perfect squares are at once scarcer than whole numbers — thinning toward nothing as you climb — and exactly as numerous, since every whole number owns its own square. The paradox dissolved only when Georg Cantor, in the 1870s, made infinity an object that proofs could measure. This topic climbs his ladder of ever-larger infinities: from the countable sprawl of the rationals, past the unlistable continuum of the reals, to the theorem guaranteeing that the ladder never ends.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every unsolvability result in computer science — the halting problem, undecidability, Gödel\u2019s incompleteness theorems — is a diagonal argument in different clothes. Knowing that some infinities, and some problems, are provably bigger than others is the foundation on which the modern theories of computation and mathematical truth stand.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two sets are equinumerous — the same size — when their elements can be paired off with nothing left over: a bijection. For finite sets this is ordinary counting; Cantor\u2019s audacity was applying the same criterion to infinite sets, where a part can match the whole: the even numbers pair perfectly with all naturals through n ↔ 2n. For infinite sets, size means pairability, not containment.',
      },
      {
        kind: 'para',
        text: 'A set is countable when it can be listed — enumerated so that every element appears at some finite position. The integers qualify (0, 1, −1, 2, −2, …), and, astonishingly, so do the rationals: sweep the numerator–denominator grid along diagonals and every fraction eventually appears. Hilbert\u2019s hotel — fully occupied yet always able to seat one more guest by shifting everyone a room along — dramatizes how differently countable infinity behaves from mere largeness.',
      },
      {
        kind: 'para',
        text: 'The real numbers between 0 and 1 cannot be listed. Given any purported enumeration, Cantor builds a number whose first decimal digit differs from that of the first entry, whose second digit differs from that of the second entry, and so on down the diagonal. The constructed number disagrees with every listed entry in at least one digit, so it was never on the list — no enumeration is complete, and the reals are uncountable.',
      },
      {
        kind: 'para',
        text: 'The power set P(A) — the collection of all subsets of A — is always strictly bigger than A itself. The proof is diagonalization in its purest form: for any function f pairing elements of A with subsets of A, the set D of elements that do not belong to their own image is missed by every pairing. There is therefore no largest infinity; every cardinality spawns a bigger one, an endless tower of sizes.',
      },
      {
        kind: 'para',
        text: 'How big is the continuum? Cantor proved the reals have the same cardinality as the power set of the naturals, written 2^ℵ₀, and conjectured that no size lies strictly between that and ℵ₀ — the continuum hypothesis. Gödel in 1940 and Cohen in 1963 eventually showed the hypothesis can be neither proved nor refuted from the standard axioms of set theory: a natural, genuinely undecidable question.',
      },
      {
        kind: 'para',
        text: 'The move that defeats any list of reals also defeats any list of programs. Turing\u2019s halting problem assumes a program that predicts which programs halt, feeds it a self-referential diagonal adversary, and derives a contradiction. Gödel\u2019s incompleteness theorems run the same pattern against enumerations of proofs. One counting idea — step outside any proposed complete inventory — fences in computation, proof, and truth.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Countable cardinality',
        latex: '\\aleph_0 = |\\mathbb{N}| = |\\mathbb{Z}| = |\\mathbb{Q}|',
        meaning: 'The naturals, integers, and rationals share one cardinality: ℵ₀, listable infinity.',
      },
      {
        kind: 'formula',
        name: 'Cantor\u2019s theorem',
        latex: '|A| < \\left|\\mathcal{P}(A)\\right|, \\qquad 2^{\\aleph_0} = |\\mathbb{R}|',
        meaning: 'Every set is strictly smaller than its power set; the reals match the subsets of the naturals.',
      },
      {
        kind: 'formula',
        name: 'Cardinal arithmetic',
        latex: '\\aleph_0 + 1 = \\aleph_0, \\qquad \\aleph_0 + \\aleph_0 = \\aleph_0',
        meaning: 'Countable infinity absorbs finite — and even countable — additions: Hilbert\u2019s hotel in symbols.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: show that no infinite list can contain every real number between 0 and 1.',
          'Recall the governing idea: Cantor\u2019s diagonal argument — from any proposed list, construct a number whose nth decimal digit differs from the nth digit of the nth entry.',
          'Apply: suppose the list opens 0.5000…, 0.3333…, 0.1414…; read off the diagonal digits 5, 3, 1 and replace each with a different digit between 1 and 8 — say 6, 4, 2 — beginning the number 0.642…, which also sidesteps the 0.999… = 1 ambiguity.',
          'State the result: 0.642… differs from the first, second, and third entries, and continuing down the diagonal it differs from every entry — the list was incomplete, so the interval is uncountable.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Computability: Turing\u2019s diagonalization proves no program can decide the halting problem.',
          'Measure theory: countable sets have length zero, so even the dense rationals fill none of the number line.',
          'Probability on continuous spaces: single outcomes carry probability zero; only ranges of outcomes have weight.',
          'Foundations of mathematics: the cardinality ladder organizes set theory and motivates the axioms still debated today.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The seductive error is treating infinity as a number you can subtract: ∞ − ∞ is undefined, and cardinal subtraction genuinely fails. Do not equate dense with uncountable — the rationals are dense yet countable. And Cantor\u2019s theorem does not say the reals are the very next size after the naturals; that claim is exactly the independent continuum hypothesis, not a theorem.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Bijection', def: 'A one-to-one pairing between two sets that exhausts both sides.' },
          { term: 'Cardinality', def: 'The size of a set, decided by which sets it can biject with.' },
          { term: 'Countable', def: 'Listable by the natural numbers — finite, or of size ℵ₀.' },
          { term: 'Aleph-null', def: 'The cardinality ℵ₀ of the natural numbers, the smallest infinite size.' },
          { term: 'Diagonal argument', def: 'Cantor\u2019s construction of an object differing from the nth listed object at position n, defeating any enumeration.' },
          { term: 'Power set', def: 'The set of all subsets of a given set — always strictly larger, by Cantor\u2019s theorem.' },
          { term: 'Continuum hypothesis', def: 'The claim that no cardinality lies strictly between ℵ₀ and the reals; independent of standard set theory.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The integers and the natural numbers have:',
            options: ['Different sizes, since the integers include the negatives', 'The same size, witnessed by an explicit bijection', 'Incomparable sizes', 'Sizes differing by exactly one'],
            answer: 1,
            explain: 'Pair 0 with 0, 1 with 1, −1 with 2, 2 with 3, −2 with 4, and so on — a bijection proves equinumerosity.',
          },
          {
            q: 'Cantor\u2019s diagonal argument establishes that:',
            options: ['The rationals cannot be listed', 'Every infinite set bijects with the naturals', 'The real numbers cannot be enumerated in a list', 'Countable unions of countable sets are uncountable'],
            answer: 2,
            explain: 'Any list of reals in an interval misses a number built to differ along the diagonal — so no enumeration is complete.',
          },
          {
            q: 'Cantor\u2019s theorem states that:',
            options: ['Every set is strictly smaller than its power set', 'The power set of a set always bijects with the set itself', 'The reals are countable', 'All infinite sets share one size'],
            answer: 0,
            explain: 'No function from a set onto its power set exists; the diagonal subset of elements not in their own image is missed by every candidate.',
          },
          {
            q: 'Hilbert\u2019s fully occupied hotel can always take one more guest because:',
            options: ['Infinite sets contain a largest element', 'Some rooms are secretly vacant', 'The guests can double up in rooms', 'Shifting each guest one room along frees room 1, since ℵ₀ + 1 = ℵ₀'],
            answer: 3,
            explain: 'The relocation n → n + 1 moves everyone and empties room 1: adding one element does not change countable cardinality.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: set notation, functions, and proof by contradiction. Follow with ordinal numbers — a finer notion of infinite size that tracks order rather than quantity — then the axiom of choice, Gödel\u2019s incompleteness theorems, and computability theory, where diagonalization finds its most consequential work.',
        tone: 'path',
      },
    ],
  },
]
