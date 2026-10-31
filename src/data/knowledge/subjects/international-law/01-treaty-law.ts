/**
 * Knowledge Universe — International Law — Chapter 01: Treaty Law
 * 1 lesson · ~1,199 words
 * field: International Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Treaty Law]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 law-international-treaties — How International Treaties Actually Work
 */
import type { KnowledgeTopic } from '../../types'

export const internationalLawCh01: KnowledgeTopic[] = [
  {
    id: 'law-international-treaties',
    title: 'How International Treaties Actually Work',
    domain: 'Law & Governance',
    field: 'International Law',
    branch: 'Treaty Law',
    tier: 'intermediate',
    concepts: [
      'The VCLT: a treaty about treaties',
      'Pacta sunt servanda',
      'Signature versus ratification',
      'Reservations',
      'Interpretation under Articles 31–32',
      'Breach, termination and changed circumstances',
      'Enforcement without a world police',
    ],
    words: 1199,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Treaties are the primary instruments of international law — written agreements between states, governed by international law, running from bilateral border accords to near-universal conventions. Their regime was codified in the Vienna Convention on the Law of Treaties of 1969, itself a treaty about treaties, drafted by the International Law Commission and adopted at the Vienna conference. Its lifecycle logic — negotiate, sign, ratify, enter into force, interpret, and only narrowly terminate — and its enforcement reality, built on reciprocity, reputation and consent to adjudication rather than a world police, are what this topic unpacks.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'From climate accords to trade law to human rights conventions, most global cooperation is treaty-shaped. Understanding the lifecycle explains real events — why a signature does not bind, why ratification votes matter domestically, and why treaty exit is legally easier than treaty enforcement.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Vienna Convention defines what counts as a treaty, then regulates its making, interpretation, invalidity and termination. It entered into force in 1980, and even states not party — the United States signed in 1970 but has not ratified — accept much of it as codified customary law. For practical purposes, the VCLT is the grammar book of treaty relations.',
      },
      {
        kind: 'para',
        text: 'Article 26 states the regime’s foundation, pacta sunt servanda: every treaty in force binds its parties and must be performed by them in good faith. Article 27 then closes the classic escape: a party cannot invoke internal law — a recalcitrant parliament, a referendum, a change of government — to justify non-performance. International obligation survives domestic politics.',
      },
      {
        kind: 'para',
        text: 'Signature authenticates the text and, under Article 18, creates an interim duty not to defeat the treaty’s object and purpose before ratification — but full consent to be bound comes with ratification, an instrument typically preceded by domestic approval, whether senate assent, a parliamentary vote or a referendum depending on the state. Signature alone usually leaves a state free to walk away, at diplomatic cost.',
      },
      {
        kind: 'para',
        text: 'Article 2 defines a reservation: a unilateral statement, however phrased, excluding or modifying the legal effect of specified provisions for the reserving state. Reservations are allowed unless the treaty forbids them or the reservation is incompatible with its object and purpose, as Article 19 provides; other parties may accept or object, with consequences that vary with their responses.',
      },
      {
        kind: 'para',
        text: 'Article 31 commands interpretation in good faith according to the ordinary meaning of the terms, in their context and in light of the treaty’s object and purpose — the integrated approach that displaced free intent-hunting. Supplementary means, chiefly the negotiating record (travaux préparatoires) and the circumstances of conclusion, enter only under Article 32, to confirm meaning or resolve ambiguity.',
      },
      {
        kind: 'para',
        text: 'A material breach, defined in Article 60, lets injured parties invoke it to suspend or terminate the treaty, in whole or in part. Denunciation is possible only where the treaty provides for it. Article 62’s fundamental change of circumstances — the old rebus sic stantibus idea — is deliberately narrow: it excludes boundary situations and requires a change that was unforeseen and transforms the nature of the obligations.',
      },
      {
        kind: 'para',
        text: 'Compliance runs on reciprocity and reputation, on countermeasures — proportionate, non-forcible responses to breach — on monitoring bodies and reporting, and on consent-based adjudication before the International Court of Justice or treaty-specific systems such as trade panels. The system’s paradox is that binding law depends on voluntary submission and disciplined self-help.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a state signs a climate agreement, and its legislature then refuses the implementing legislation — what are its obligations, exactly?',
        'Recall the governing ideas: signature creates an Article 18 duty not to defeat the treaty’s object and purpose; ratification is the act that consents to be bound; internal law never excuses breach once bound.',
        'Apply it: if the state has signed but not ratified, it must refrain from acts that defeat the treaty’s core aims, yet is not fully bound — withdrawal remains legally open, though diplomatically expensive. If it has ratified, the domestic deadlock is irrelevant internationally.',
        'State the result: the answer turns entirely on the lifecycle stage — which is why ratification votes, not signing ceremonies, are where treaty politics actually bite.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Climate law: the architecture of national pledges, ratification thresholds and transparency frameworks.',
        'Trade: binding panel processes in trade agreements, with retaliation authorised at the end of the ladder.',
        'Human rights conventions: state reporting to treaty bodies, and individual complaint mechanisms where accepted.',
        'Arms control: verification regimes that convert paper commitments into monitored ones.',
        'Legal practice: registration under Article 102 of the UN Charter and the use of treaty databases as working tools.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The leading error is assuming a signature binds — it rarely does before ratification, though the object-and-purpose duty constrains sabotage in between. Second, not every reservation is permissible: the object-and-purpose test and the objections of other parties bite. Third, overstating enforcement: there is no global sheriff, and much compliance is managed through dialogue and reporting rather than adjudication. Finally, monist and dualist states bring treaties home differently — forgetting that trips up domestic analysis.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'pacta sunt servanda', def: 'Agreements must be kept in good faith; the baseline norm of treaty law.' },
        { term: 'ratification', def: 'The international act confirming consent to be bound, usually after domestic approval.' },
        { term: 'reservation', def: 'A unilateral modification of a treaty’s effect for the reserving state, subject to object and purpose.' },
        { term: 'material breach', def: 'A serious violation permitting suspension or termination by injured parties.' },
        { term: 'travaux préparatoires', def: 'The negotiating record, a supplementary interpretive aid under Article 32.' },
        { term: 'countermeasure', def: 'A proportionate, non-forcible response to an internationally wrongful act.' },
        { term: 'monism versus dualism', def: 'Whether treaties apply domestically automatically or require implementing legislation.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Under Article 27 of the VCLT, a state that has ratified a treaty…',
          options: ['may rely on domestic law to excuse non-performance', 'cannot invoke internal law to justify breach', 'may withdraw freely at any time', 'is bound only if its courts agree'],
          answer: 1,
          explain: 'Internal law is no defence to breach; the international obligation stands regardless of domestic approval difficulties.',
        },
        {
          q: 'A reservation to a human rights treaty is impermissible if it…',
          options: ['is longer than one page', 'is incompatible with the treaty’s object and purpose', 'is not translated into every language', 'another state simply dislikes it'],
          answer: 1,
          explain: 'Article 19’s object-and-purpose test, plus objections by other parties, polices the reservation system.',
        },
        {
          q: 'Under Article 31, interpretation of a treaty begins with…',
          options: ['the personal intent of the drafters', 'the negotiating record', 'good faith, ordinary meaning in context, and object and purpose', 'whatever the strongest party asserts'],
          answer: 2,
          explain: 'Travaux préparatoires are supplementary under Article 32; the Article 31 starting point is text, context and purpose in good faith.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: a basic sense of what international law is and who its subjects are. Follow with state responsibility, the International Court of Justice, and the formation of customary international law. At the intermediate tier the VCLT itself is unusually readable treaty text.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The VCLT 1969 governs how treaties are made, read and ended.',
        'Pacta sunt servanda: treaties bind in good faith, and domestic law is no excuse.',
        'Signature is interim; ratification is the binding act.',
        'Reservations must respect object and purpose; interpretation starts with text, context and purpose.',
        'Enforcement is decentralised: reciprocity, reputation, countermeasures, consented adjudication.',
      ] },
    ],
  },
]
