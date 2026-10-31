/**
 * Knowledge Universe — Legal Systems & Method — Chapter 01: Legal Reasoning
 * 1 lesson · ~1,333 words
 * field: Legal Method
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Legal Reasoning]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 law-legal-reasoning-facts — Legal Reasoning: Applying Principles to Facts
 */
import type { KnowledgeTopic } from '../../types'

export const legalSystemsMethodCh01: KnowledgeTopic[] = [
  {
    id: 'law-legal-reasoning-facts',
    title: 'Legal Reasoning: Applying Principles to Facts',
    domain: 'Law & Governance',
    field: 'Legal Method',
    branch: 'Legal Reasoning',
    tier: 'core',
    concepts: [
      'Legal principles and rules: the material to reason from',
      'From principle to fact situation: the application syllogism',
      'Scope matching: what the rule actually covers',
      'Defined terms, exceptions and provisos',
      'Choosing between competing principles',
      'Common application traps: outside knowledge and scope creep',
    ],
    words: 1333,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Law schools and law-based aptitude papers test one core move before any doctrine: given a principle and a set of facts, what follows? The skill looks like common sense but has precise mechanics, and it can be drilled. This lesson builds the mechanics — how to read a rule, how to match facts against its scope, how exceptions bind, and which traps catch most first-time solvers. The substantive law lessons in this library (contracts, evidence, torts, constitutional structure) supply the doctrine; here the method is the subject.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every judgement is an application exercise: principle on top, facts underneath, reasoning as the glue. Courts decide cases this way, and reasoning-based aptitude sections — in legal studies syllabi and entrance tests alike — mark candidates on exactly this move. Practising it transfers everywhere: policy memos, contract reviews, even deciding who owes whom an apology.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A legal principle is a general norm stated in words: who must, who may, who must not, and what follows if they do or do not. A fact situation is a short narrative of what particular people did. Legal application joins them in a syllogism: the major premise is the principle, the minor premise is the classified fact — facts sorted into the categories the principle names — and the conclusion is the legal outcome. The craft lives in the middle premise. Facts do not classify themselves; you must decide that a delivery van is a "vehicle", that a 17-year-old is not "an adult", that leaving a gate open "causes" the trespass that follows. Each such decision is where marks, and cases, are won.',
      },
      {
        kind: 'para',
        text: 'The first discipline is scope matching: read the principle as if every word were load-bearing, because it is. Principles name actors ("any employer"), acts ("dismisses without notice"), conditions ("during the notice period") and consequences ("shall pay one month\'s wages"). Each element must be satisfied by the facts before the conclusion follows. If the principle covers "vehicles in the park" and the facts feature a bicycle, the question is whether the definition — if one is given — sweeps bicycles in. Definitions expand or shrink scope, and exam-setters hide the entire question inside them: always read the definition first and apply its exact words, not your intuition of the term.',
      },
      {
        kind: 'para',
        text: 'Exceptions and provisos bind hardest, though they sit last. A rule "no vehicles in the park, except ambulances" decides the fire-engine question differently than the same rule without the exception; a proviso ("provided that nothing in this section applies to emergencies") can swallow the rule. Likewise the modal verbs: "shall" is mandatory, "may" is discretionary, "must not" forbids — and confusing "may" with "shall" is the single most common wrong answer in application questions. Read exceptions before concluding, and circle every shall, may and must not in the principle.',
      },
      {
        kind: 'para',
        text: 'Harder papers offer two principles that both touch the facts. The order of operations: the more specific principle overrides the more general on the same subject; a later-in-time special exception typically trumps an earlier general rule; and where a principle expressly says so, it displaces the other entirely. If neither text resolves the clash, the facts usually hint at legislative purpose — apply the principle whose purpose the facts actually engage, and say why in one line. What you may not do is import your knowledge of what the real law says, or argue that the given principle is unjust: within the exercise, the stated principle is sovereign.',
      },
      {
        kind: 'para',
        text: 'Name the traps and half of them die. Outside knowledge — answering from the actual Indian Penal Code rather than the given principle — is the classic. Scope creep — stretching "vehicle" to a child\'s scooter when the definition says motor-driven — is the second. False analogy — reasoning from a superficially similar case whose decisive facts differ — is the third. Element-dropping — concluding without checking every condition, especially timing ("within thirty days") and place ("in a public place") — is the fourth. A final answer checklist mirrors them: every element ticked, every definition quoted, every exception read, no outside law cited.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Principle', def: 'The stated general norm — actors, acts, conditions and consequences — that the facts must be matched against.' },
          { term: 'Fact situation', def: 'The narrative of what particular people did; raw material to be classified under the principle\'s categories.' },
          { term: 'Application syllogism', def: 'Major premise (principle) + minor premise (classified facts) → conclusion (outcome).' },
          { term: 'Scope', def: 'What a rule actually covers, fixed by its words and any definitions; matching scope is the core application skill.' },
          { term: 'Proviso', def: 'A "provided that" clause that carves exceptions out of the rule — often decisive, always read last and first.' },
          { term: 'Shall versus may', def: 'Mandatory versus discretionary language; confusing the two is the most common application error.' },
        ],
      },
      {
        kind: 'example',
        title: 'A worked application',
        steps: [
          'Principle: "Whoever keeps a dangerous animal shall be liable for any injury it causes, provided the injured person did not provoke it."',
          'Extract elements: (1) keeping a dangerous animal; (2) injury caused by it; (3) no provocation by the injured person.',
          'Classify facts: Rina boards a neighbour\'s fenced dog that bit her while she teased it through the fence.',
          'Match: element 1 — the neighbour keeps the dog; element 2 — the bite is an injury it caused; element 3 — teasing counts as provocation, so the proviso fails.',
          'Conclude: liability does not follow — Rina provoked the animal. Note the method: conclusion reached by matching elements, with no outside law needed.',
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Principle: "A contract made by a minor is void." Fact: Arun, aged 16, buys a bicycle on credit. Outcome?',
            options: ['the contract is voidable at Arun\'s option', 'the contract is void', 'the contract binds the seller only', 'the contract is valid if the bicycle is cheap'],
            answer: 1,
            explain: 'Element match: Arun is a minor (16), the transaction is a contract — the stated rule makes it void. Do not import the real law\'s nuances; the given principle is sovereign.',
          },
          {
            q: 'Principle: "Vehicles must not enter the park; the rule does not apply to emergency vehicles." Fact: an ambulance races through the park to a hospital. Outcome?',
            options: ['liability, because it is a vehicle', 'no liability, because the exception covers it', 'liability, because emergencies need no rules', 'no liability, because ambulances are not vehicles'],
            answer: 1,
            explain: 'The facts satisfy the definition (ambulances are vehicles) but the proviso removes the prohibition for emergency vehicles. Exceptions read last bind first.',
          },
          {
            q: 'In application exercises, using your own knowledge of what the actual statute says about the topic is…',
            options: ['encouraged for accuracy', 'permitted if you are confident', 'exactly the trap to avoid — apply the given principle', 'required to reach the correct answer'],
            answer: 2,
            explain: 'The exercise tests reasoning from stated premises, not memory of real law. Outside knowledge is the classic first trap named in every legal-method guide.',
          },
          {
            q: 'Principle: "An employer may dismiss an employee for misconduct." Fact: an employer dismisses an employee for poor attendance that the parties never treated as misconduct. Strongest analysis?',
            options: ['dismissal valid — attendance is obviously misconduct', 'dismissal invalid — the stated category is never satisfied', 'dismissal valid because the employer may dismiss anyone', 'invalid only if the employee is popular'],
            answer: 1,
            explain: 'Scope matching: the principle permits dismissal only for the defined category. The facts never bring the conduct inside "misconduct", so the condition fails and the permission does not arise.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'The method compresses to four moves: parse the principle into elements; classify the facts into those elements; check definitions, exceptions and modals; conclude — and only conclude. Doctrine makes the premises richer, but the move itself never changes, which is why legal-method practice improves across contracts, torts, crime and constitutional questions alike.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Feed the method real doctrine: the contract-basics and Indian Contract Act lessons supply principles with genuine edge cases, and the evidence lesson shows burden-of-proof rules in application. The applying-principles lesson in Languages & World Literature drills the same syllogism on non-legal rules, and the critical-reasoning lesson covers argument structure. Background reading: the CBSE Class XI Legal Studies text (open ePub via cbse.gov.in) and the standard legal-method chapters of any Indian law-entrance workbook.',
        tone: 'path',
      },
    ],
  },
]
