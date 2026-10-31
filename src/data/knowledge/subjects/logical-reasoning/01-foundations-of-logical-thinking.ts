/**
 * Knowledge Universe — Logical Reasoning — Chapter 01: Foundations of Logical Thinking
 * 1 lesson · ~2,418 words
 * field: Logic and Reasoning
 * legacy sources: x33-ugc-net-closure-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Logic Foundations, Evaluating Arguments]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 pol-logic-induction-deduction-square — Induction, Deduction and the Square of Opposition
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh01: KnowledgeTopic[] = [
  {
    id: 'pol-logic-induction-deduction-square',
    title: 'Induction, Deduction and the Square of Opposition',
    domain: 'Social Sciences',
    field: 'Logic and Reasoning',
    branch: 'Evaluating Arguments',
    tier: 'intermediate',
    concepts: [
      'Deductive validity and soundness versus inductive strength and cogency',
      'Inductive families: generalisation, analogy, causal inference',
      'The four categorical propositions A, E, I, O',
      'The square: contradiction, contrariety, subcontrariety, subalternation',
      'Existential import and the modern critique',
      'Venn diagrams and validity testing',
    ],
    words: 2418,
    readMins: 12,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The Paper-1 unit asks you to evaluate and distinguish inductive and deductive reasoning — to classify an argument by the kind of support its premises give, and to test what follows immediately from a proposition of a given form. The library\u2019s critical-reasoning lesson owns the informal half of that craft (assumptions, fallacies, inference markers in reading passages) and only mentions formal logic in its reading list; this lesson owns the formal half. Two skills are examinable: the classification (is this argument deductive or inductive, and by what standard is it good?) and the square work (given that a statement of form A, E, I or O is true or false, what immediately follows for the other three forms?). Both are mechanical once the definitions are exact — and the exam rewards exactness.',
      },
      { kind: 'heading', text: 'The support question: two families of argument' },
      {
        kind: 'para',
        text: 'An argument is a set of premises offered in support of a conclusion, and the classification question is: what kind of support is being claimed? A deductive argument claims that the conclusion follows necessarily — that it is impossible for the premises to be true while the conclusion is false. Such an argument is valid when this impossibility holds (a formal, structural property: any argument with the same shape is valid too), and sound when it is valid and its premises are actually true — soundness is the full grade: right structure, true inputs. An inductive argument claims instead that the premises make the conclusion probable: the support admits of degrees, so the corresponding virtues are strength (the conclusion follows with high probability given the premises) and cogency (strong, and the premises true). The definitions come in pairs — validity/soundness for deduction, strength/cogency for induction — and the pairs are not interchangeable: calling a valid argument “sound” because it feels strong, or an inductive argument “valid”, are the two marking-offence classics. Contrast sentences: “All humans are mortal; Socrates is human; therefore Socrates is mortal” is deductive (the conclusion is extracted, nothing new in kind); “every crow observed so far is black; therefore the next crow will be black” is inductive (the conclusion outruns the evidence and could fail without contradicting the premises).',
      },
      { kind: 'heading', text: 'The inductive families and their standard traps' },
      {
        kind: 'para',
        text: 'Induction comes in recognisable types the unit expects you to name. Enumerative generalisation reasons from a sample to a population (“sixty percent of surveyed voters prefer X, therefore about sixty percent of voters prefer X”) — good in proportion to sample size and representativeness, and it fails as hasty generalisation when the sample is small or biased. Argument from analogy reasons that because two things are alike in known respects, they are alike in the respect at issue — the strength depends on the relevance of the shared features and the absence of disanalogy; it is the form of legal reasoning from precedent and of “it worked in the pilot district”. Causal inference reasons from correlation to cause, disciplined by Mill\u2019s method-style questions (do the effect and only the effect track the supposed cause across cases where it is present and absent?) and by the standing warning that correlation is not causation — the omitted third factor is the classic wrong answer. The statistical syllogism reasons from a general proportion to a particular case (“most economists in this cohort publish; Rao is an economist in this cohort; so Rao probably publishes”). Each family has a signature trap: small or biased samples for generalisation, irrelevant resemblance for analogy, post hoc sequencing for causal claims — and the unit\u2019s questions usually present the trap inside a plausible-sounding paraphrase.',
      },
      { kind: 'heading', text: 'Categorical propositions: the four forms' },
      {
        kind: 'para',
        text: 'Deductive logic\u2019s oldest working vocabulary is the categorical proposition: a statement about the relation between two classes, a subject term S and a predicate term P, built from a quantifier and a copula. Four standard forms exhaust the possibilities, and their letter names come from the Latin affirmo and nego. The A form (universal affirmative) says “Every S is P” — all members of S are in P. The E form (universal negative) says “No S is P” — the classes are disjoint. The I form (particular affirmative) says “Some S is P” — where “some” means at least one, possibly all. The O form (particular negative) says “Some S is not P”. Translating ordinary sentences into these forms is the first examinable skill: “All municipal employees are residents” is an A proposition with S = municipal employees and P = residents; “Not every applicant qualified” is the O form in disguise (some applicants did not qualify); watch for sentences whose quantifier (“everyone except the interns”) needs reconstruction before the letters apply.',
      },
      { kind: 'heading', text: 'The traditional square of opposition' },
      {
        kind: 'para',
        text: 'The square of opposition, originating with Aristotle and systematised across the medieval tradition, charts the four forms against each other on four relations. The diagonals carry contradiction: A and O contradict (“Every S is P” vs “Some S is not P”), as do E and I — contradictory pairs can never both be true and never both be false; each is the exact negation of the other, which gives the fastest working rule: O is just ¬A, and I is just ¬E. The top edge carries contrariety: A and E are contraries — they cannot both be true, but can both be false (every swan white, and no swan white, can both fail together in a mixed world). The bottom edge carries subcontrariety: I and O cannot both be false, but can both be true (“some students passed” and “some students failed” coexist happily). The vertical edges carry subalternation: truth flows downward from the universal to its particular — if A is true, I must be true; if E is true, O must be true — and falsehood flows upward — if I is false, A is false; if O is false, E is false. Nothing runs upward for truth (a true particular never guarantees the universal) and nothing runs downward for falsehood: those are the directions students mislearn.',
      },
      {
        kind: 'para',
        text: 'Immediate inferences are the square in use: from one truth you read the others without further premises. From A true: E false (contrary), I true (subaltern), O false (contradictory). From E true: A false, O true, I false. From I false: E true, and then — via E — A false and O true. From O false: A true, and via A — I true and E false. The exam\u2019s standard item hands you one truth value and asks for another; the drill above answers every variant. One vocabulary note: conversion — swapping subject and predicate — is valid for exactly the E and I forms (“No S is P” is equivalent to “No P is S”; “Some S is P” to “Some P is S”) but invalid for A and O (“all dogs are animals” does not give “all animals are dogs”); the A form gets conversion only by limitation (A true yields the converted I proposition, since some S exists and is P).',
      },
      { kind: 'heading', text: 'Existential import and the modern critique' },
      {
        kind: 'para',
        text: 'The traditional square quietly assumes that the subject term is non-empty — that the things S names exist. Under that assumption of existential import the whole lattice holds together. The modern (Boolean) reading drops the assumption: a universal is then vacuously true when S is empty (“all unicorns are horned” is true for want of unicorns), and with it the bottom and side relations break — two universal contraries can both be true over an empty class, and subalternation fails because the particular (“some unicorn is horned”) is false while the universal is true. Only the diagonal contradictions survive in the modern diagram. Which reading applies is a source of trick questions: the syllabus and standard exams work the traditional square, but an item that stresses “there are no S at all” is testing whether you know the modern limit. State the assumption when you answer — it is the difference between reciting the square and understanding it.',
      },
      { kind: 'heading', text: 'Testing validity: syllogisms and Venn diagrams' },
      {
        kind: 'para',
        text: 'A categorical syllogism is a two-premise argument whose three terms (major, minor, middle) are each used twice, the middle term linking the premises so the conclusion can connect the extremes. The visual test is the Venn diagram: draw three overlapping circles (S, P, and the middle term M), shade regions to mark emptiness for each universal premise, place an × to witness existence for each particular premise, and then ask whether the conclusion is already marked in the picture — if the diagram forces the conclusion, the form is valid; if the conclusion needs an extra assumption (an existence claim, say, that no premise licensed), it is invalid. The commonest invalid shape has a name worth knowing: the undistributed middle, where the middle term fails to cover its whole class in either premise and the argument smuggles an analogy through it (“all economists are graduates; all engineers are graduates; therefore all economists are engineers”). For induction-based exam items the parallel discipline is sampling logic: identify the population, the sample and the move between them before judging strength.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Walk the square, then test a syllogism',
        steps: [
          'Given: “All municipal employees are residents” is TRUE. Write it as an A proposition (S = municipal employees, P = residents).',
          'Step 1 (diagonal): its contradictory O — “some municipal employees are not residents” — is FALSE. (Exactly one of A/O is true.)',
          'Step 2 (bottom edge): I — “some municipal employees are residents” — is TRUE by subalternation (truth flows down from A). Its contradictory E — “no municipal employees are residents” — is FALSE.',
          'Step 3 (check the edges): A and E cannot both be true — consistent: A true, E false. I and O cannot both be false — consistent: both readings I-true/O-false satisfy the square. Result: A true, E false, I true, O false.',
          'Step 4 (a syllogism): “All municipal employees are residents; all residents use the library; therefore all municipal employees use the library.” Draw S, P (library-users), M (residents); shade M outside P (all residents use the library), shade S outside M (all employees are residents). The conclusion region — S outside P — is fully shaded: valid, no extra assumption needed.',
          'Contrast: “all economists are graduates; all engineers are graduates; therefore all economists are engineers” shades the wrong regions — graduates outside economists and outside engineers — leaving economists and engineers overlapping freely; the diagram does not force the conclusion. The middle term (graduates) was never distributed: the undistributed-middle fallacy, visible in the picture.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A deductive argument is SOUND when:',
            options: [
              'its conclusion is probable given the premises',
              'it is valid and all its premises are actually true',
              'it persuades most audiences',
              'its premises are interesting',
            ],
            answer: 1,
            explain: 'Validity is the structural property (impossible: true premises, false conclusion); soundness adds actual truth of the premises. The inductive parallels are strength and cogency — the pairs must not be mixed.',
          },
          {
            q: '“Every survey respondent so far has been from an urban area, so all respondents will be from urban areas.” This argument is:',
            options: [
              'deductive and valid',
              'inductive — a generalisation whose strength depends on the sample',
              'deductive and sound',
              'not an argument at all',
            ],
            answer: 1,
            explain: 'The conclusion about all respondents outruns the evidence about those observed — probabilistic support, hence inductive. It would strengthen with sample size and representativeness, and it is not the kind of argument that can be valid in the deductive sense.',
          },
          {
            q: 'In the traditional square, if the A proposition “Every S is P” is TRUE, which set of truth values follows?',
            options: [
              'E true, I false, O true',
              'E false, I true, O false',
              'E false, I false, O true',
              'E true, I true, O false',
            ],
            answer: 1,
            explain: 'From A true: the contrary E is false, the subaltern I is true, the contradictory O is false. Contradiction (diagonal), contrariety (top), subcontrariety (bottom) and subalternation (sides) each supply one step.',
          },
          {
            q: 'The traditional square\u2019s relations assume existential import. In the modern (Boolean) reading with an empty subject term, which relations survive?',
            options: [
              'all four relations survive unchanged',
              'only the diagonal contradictions (A-O, E-I) survive',
              'only subalternation survives',
              'none survive',
            ],
            answer: 1,
            explain: 'With vacuous universals, contraries can both be true and subalternation fails over empty classes; the diagonals — each form being the negation of the other — are the only relations that hold unconditionally.',
          },
          {
            q: '“All poets are dreamers; all accountants are dreamers; therefore all poets are accountants.” The fallacy is:',
            options: [
              'hasty generalisation',
              'undistributed middle',
              'denying the antecedent',
              'post hoc',
            ],
            answer: 1,
            explain: 'The middle term (dreamers) is never distributed — both premises speak only of parts of it — so the diagram never forces the conclusion. It is the categorical syllogism\u2019s classic invalid shape, and a Venn picture exposes it instantly.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Validity is not truth: a valid argument can be unsound, and a sound one must be valid — do not grade structure by content. “Some” in logic means at least one, possibly all, so I does not contradict A. Contrary and contradictory are different relations: contraries cannot both be true but can both be false; contradictories can do neither. Truth never flows upward in subalternation, and falsehood never downward — the two mislearned directions. Conversion is valid only for E and I. And when an exam stresses an empty subject (“all unicorns…”), flag the modern reading: only the diagonals survive.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the sets-and-logic lesson (Venn language) — this lesson reuses the diagrams, not the set algebra. Companion: the critical-reasoning lesson for the informal half (assumptions, fallacies in passages) and the research-methodology lesson for induction at work in science (hypothesis, sampling, inference). Primary reading: Terence Parsons, “The Traditional Square of Opposition”, Stanford Encyclopedia of Philosophy (plato.stanford.edu, open access), read during this pass; Craig DeLancey, A Concise Introduction to Logic (B.C. Open Collection, CC BY-NC-SA) for the fuller formal treatment; the official UGC NET Paper-1 unit “Evaluating and distinguishing inductive and deductive reasoning” (ugcnetonline.in).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Deductive: necessary support — validity (structure), soundness (validity + true premises). Inductive: probabilistic support — strength, cogency.',
        'Inductive families: generalisation (watch the sample), analogy (watch relevance), causal inference (watch the third factor), statistical syllogism.',
        'Four forms: A every-S-is-P, E no-S-is-P, I some-S-is-P, O some-S-is-not-P.',
        'Square: contradictories A-O and E-I (neither both true nor both false); contraries A-E (not both true); subcontraries I-O (not both false); subalternation truth flows down, falsehood up.',
        'Immediate inferences from one value give all four; conversion valid only for E and I.',
        'Existential import underlies the traditional square; the modern reading keeps only the diagonals. Validity testing: Venn — shade universals, × particulars, read whether the conclusion is forced.',
      ] },
    ],
  },
]
