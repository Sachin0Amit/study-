/**
 * Knowledge Universe — Private Law: Contracts, Torts & Family — Chapter 01: Contract Law
 * 3 lessons · ~5,407 words
 * fields: Contract Law, Private Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Contract Law, Indian Contract Act 1872, Consent & Validity]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 law-contract-basics — Contracts: The Anatomy of a Promise the Law Enforces
 *   01.2 law-indian-contract-act — The Indian Contract Act: Formation, Breach and Remedies
 *   01.3 law-consent-defects-void-voidable — When Consent Fails: Void and Voidable Agreements
 */
import type { KnowledgeTopic } from '../../types'

export const privateLawCh01: KnowledgeTopic[] = [
  {
    id: 'law-contract-basics',
    title: 'Contracts: The Anatomy of a Promise the Law Enforces',
    domain: 'Law & Governance',
    field: 'Private Law',
    branch: 'Contract Law',
    tier: 'core',
    concepts: [
      'Offer and acceptance',
      'Consideration: the price of a promise',
      'Intention to create legal relations',
      'Capacity and genuine consent',
      'Express, implied and standard-form terms',
      'Breach and the menu of remedies',
      'The limits of enforcement',
    ],
    words: 1443,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Most promises are morally binding; only some are legally binding. Contract law draws the line, and its anatomy has barely changed in centuries: one party offers on definite terms, the other accepts, and each gives the other something of value — the exchange the law will enforce. From a phone app’s terms of service to a shipping charter worth millions, the same skeleton carries the weight. Learn the anatomy once and every agreement you will ever sign becomes readable.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'You already contract dozens of times a day: every tap of “I agree” accepts terms you have never read. Contract law decides what you actually promised, who bears the risk when performance fails, and what money can mend. It is private law’s engine room, and its default rules quietly allocate billions between parties who never negotiated them.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'An offer is a definite proposal, communicated on specified terms, made with intent to be bound the moment it is accepted. An invitation to treat is not an offer — goods in a shop window or prices in a catalogue merely invite the customer to offer, which the seller may decline. Acceptance must mirror the offer exactly: a reply that varies terms is a counter-offer, and it kills the original. Business “battles of the forms”, where purchase orders and confirmations cross with clashing small print, are resolved by working out whose terms fired last.',
      },
      {
        kind: 'para',
        text: 'Common-law systems demand consideration: each promise must be bought with something of value — money, goods, a return promise, even forbearance from a right. A gratuitous promise to give a nephew 5,000 may be admirable, but unless he gives anything back it is unenforceable, however solemnly made. Civil-law systems generally ask instead for a cause, or simply for agreement, which is why the consideration requirement marks the great divide between the legal families. Note the boundary: consideration must be sufficient, not adequate — courts do not police bad bargains, only empty ones.',
      },
      {
        kind: 'para',
        text: 'Domestic and social arrangements are presumed not to be contracts — the promise to cook Tuesday’s dinner — while commercial dealings are presumed to be. Either presumption flips with evidence: a written agreement between estranged spouses, or the words “binding in honour only” between firms. The test is objective: not what the parties secretly intended, but what a reasonable person would understand them to have intended from what they said and did.',
      },
      {
        kind: 'para',
        text: 'A contract requires parties who can consent, and consent that is genuine. Minors, the intoxicated and those lacking mental capacity may avoid most agreements. Consent is hollow if it was bought with a material misrepresentation, extracted under duress or undue influence, or founded on a mistake so fundamental it hollows out the deal — the classic case of the cow sold as barren that turned out, to both parties’ surprise, to be pregnant. The law asks whether a meeting of minds actually occurred, not merely whether pens touched paper.',
      },
      {
        kind: 'para',
        text: 'Express terms are spoken or written; implied terms are supplied by statute (goods of merchantable quality), by the custom of the trade, or by the obvious unspoken intent of the parties. Standard-form contracts — insurance policies, software licences, tenancies — move the battlefield from negotiation to interpretation, and courts respond: ambiguity is construed against the drafter, unfair terms can be struck under consumer-protection doctrine, and particularly lopsided clauses may simply be refused. The signature on page forty is consent of a kind; the law decides how much weight it can bear.',
      },
      {
        kind: 'para',
        text: 'Breach triggers a menu, not a punishment. Expectation damages put the innocent party where full performance would have; reliance damages restore what they spent in reliance on the promise. Specific performance orders the breaching party to do what they promised, but it is reserved for unique subject matter — land, a rare painting — since ordinary goods can simply be bought elsewhere. Termination plus damages covers most real disputes, and liquidated damages clauses pre-compute the loss, provided they are a genuine estimate rather than a penalty in costume.',
      },
      {
        kind: 'para',
        text: 'Some promises the law will not touch at all. Agreements to commit crimes or torts are void; contracts that unreasonably restrain trade or exploit one party unconscionably invite refusal or trimming; wagers are unenforceable in many jurisdictions. No court will order specific performance of a personal-services contract, because forcing a reluctant singer to sing is unworkable and inhuman alike. And enforcement fades with time: limitation periods extinguish even good claims, on the logic that stale evidence makes stale justice.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Expectation damages', latex: 'D = V_{\\text{promised}} - V_{\\text{received}}', meaning: 'Damages equal the value of the performance promised minus the value actually received, restoring the innocent party to the position full performance would have produced.' },
      { kind: 'formula', name: 'Cover measure', latex: 'D = P_{\\text{cover}} - P_{\\text{contract}}', meaning: 'Where the buyer obtains a substitute after breach, damages are typically the cover price minus the contract price — the cheapest route to the same expectation result.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a buyer contracts to buy a specialised machine for 15,000, the machine being worth 20,000 to the buyer; the seller breaches and the buyer buys an identical machine elsewhere for 17,000 — what damages restore the buyer?',
        'Recall the governing idea: expectation damages must place the innocent party in the position full performance would have achieved — here, a surplus of 20,000 minus 15,000, that is 5,000.',
        'Apply: after covering at 17,000 the buyer’s surplus is 20,000 minus 17,000, only 3,000; the shortfall equals the cover price minus the contract price — 17,000 minus 15,000 — which is 2,000.',
        'State the result: damages of 2,000 restore the full promised surplus, since 3,000 plus 2,000 equals 5,000 — and the buyer ends with a working machine rather than a lawsuit about one.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Commercial drafting: risk allocation through indemnities, force majeure and liquidated damages clauses happens before disputes, not after.',
        'Consumer protection: unfair-terms doctrine polices the standard forms that dominate mass-market contracting.',
        'Construction and services: substantial-performance and variation rules keep large projects from collapsing over partial default.',
        'Everyday life: employment offers, tenancies, subscriptions and clickwrap all run on offer, acceptance and consideration.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The first-year error is treating every agreement as a contract: consideration, capacity and genuine consent must each be present, and social promises are presumed outside the law’s reach. Do not confuse remedies with revenge — damages compensate, they do not punish, which is why “penalty” clauses get cut down to genuine pre-estimates of loss. And mind the mirror-image rule: a purported acceptance that tweaks the terms is a counter-offer that destroys the original — a lesson relearned in every battle of the forms.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'offer', def: 'A definite proposal on stated terms, intended to bind once accepted.' },
        { term: 'consideration', def: 'Something of value given by each side; the common-law price of enforceability.' },
        { term: 'counter-offer', def: 'A response varying the terms, which rejects and destroys the original offer.' },
        { term: 'expectation damages', def: 'Money restoring the position full performance would have produced.' },
        { term: 'specific performance', def: 'A court order compelling performance, reserved mainly for unique subject matter.' },
        { term: 'liquidated damages', def: 'A genuine pre-estimate of loss agreed in advance; enforceable where a penalty is not.' },
        { term: 'invitation to treat', def: 'A display or advertisement inviting offers rather than making one.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A shop misprices a television in its window. Legally, the display is most likely…',
          options: ['an offer anyone can accept', 'an invitation to treat', 'a binding contract', 'a liquidated damages clause'],
          answer: 1,
          explain: 'Displays invite offers; the contract forms only when the seller accepts the customer’s offer at the till.',
        },
        {
          q: 'A grandmother promises in writing to give her grandson 5,000 next year, and he gives nothing in return. In a common-law system the promise is…',
          options: ['fully enforceable', 'unenforceable for want of consideration', 'a counter-offer', 'specific performance'],
          answer: 1,
          explain: 'A gratuitous promise lacks consideration, however formal the writing; the grandson gave nothing to buy it.',
        },
        {
          q: 'Expectation damages aim to put the innocent party…',
          options: ['back in the position before the contract', 'in the position full performance would have produced', 'in the breaching party’s position', 'in a punitive position'],
          answer: 1,
          explain: 'The goal is the promised position — the surplus the innocent party would have enjoyed had the deal been kept.',
        },
        {
          q: 'A clause fixing damages at 100,000 for a one-day delay is most likely to be…',
          options: ['enforced exactly as written', 'struck down as a penalty', 'converted into specific performance', 'treated as consideration'],
          answer: 1,
          explain: 'Clauses that punish rather than genuinely pre-estimate loss are penalties, and penalties are unenforceable.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is core-tier private law and runs on plain reasoning. Follow with tort law, the other great source of civil obligations, then remedies in depth and commercial drafting. One close reading of a real contract you have signed — a tenancy, an insurance policy, a terms-of-service page — teaches more than a chapter of theory.',
      },
    ],
  },
  {
    id: 'law-indian-contract-act',
    title: 'The Indian Contract Act: Formation, Breach and Remedies',
    domain: 'Law & Governance',
    field: 'Contract Law',
    branch: 'Indian Contract Act 1872',
    tier: 'intermediate',
    concepts: [
      'Agreement versus contract (s.10)',
      'Proposal and acceptance (ss.2-9)',
      'Consideration and the s.25 exceptions',
      'Capacity and Mohori Bibee',
      'Free consent: coercion to mistake',
      'Void, voidable and illegal agreements',
      'Discharge and s.73 damages',
      'Quasi-contracts (ss.68-72)',
    ],
    words: 2447,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'The Indian Contract Act, 1872 — Act 9 of 1872, in force from 1 September 1872 — is the statute that governs every agreement enforced in India. Its chapters I and II, sections 1 to 75, contain the general law of contract; its original chapters on sale of goods and partnership were hived off into the Sale of Goods Act 1930 and the Indian Partnership Act 1932, which this lesson outlines at the end. The Act codified the English common law of simple contracts, so the conceptual anatomy — offer, acceptance, consideration, intention, capacity, consent — is shared with the Library\'s general contracts lesson. What this lesson adds is the statute\'s own machinery: the section numbers examiners quote, the Indian case law that interprets them, and the remedies the Act and its satellite statutes provide. Mulla\'s commentary on the Act is the practitioner\'s standard.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Contract Act questions are the backbone of CLAT legal reasoning, CA Foundation Business Laws and every LL.B. contract paper: expect a fact pattern, a section number and a list of plausible-but-wrong doctrines. The Act also runs daily life — employment letters, electricity connections, app terms, suretyships — and its drafting choices diverge from English law at precise points (consideration from a third party, minors, agency) that make reliable exam traps.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Act builds its definitions in section 2. A proposal (s.2(a)) is made when one person signifies to another his willingness to do or abstain from doing anything, with a view to obtaining the other\'s assent; acceptance (s.2(b)) turns a proposal, when accepted, into a promise; a promise for a promise is an agreement (s.2(e)); and an agreement becomes a contract (s.2(h)) when it is enforceable by law. Section 10 supplies the test: an agreement becomes a contract if made by parties competent to contract (s.11), with free consent (ss.13-22), for a lawful consideration (s.2(d), s.23) and lawful object, and not expressly declared void (ss.20-30, 56). An agreement failing a s.10 essential is void — void ab initio (s.2(g)) — while an agreement made by free consent\'s absence is voidable at the option of the aggrieved party (s.2(i)): the distinction between void and voidable is the most-tested line in the Act.',
      },
      {
        kind: 'para',
        text: 'Formation has its own machinery of communication. Section 4 fixes when communication is complete: a proposal is complete when it comes to the knowledge of the person to whom it is made; acceptance is complete against the proposer when it is put in course of transmission to him (the letter posted), and against the acceptor when it comes to the proposer\'s knowledge. The classic illustration is Lalman Shukla v. Gauri Dutt (1913): a servant sent to trace a missing boy could not claim the reward later announced, because he never knew of the offer when he found him — no knowledge, no acceptance. Revocation runs by s.5: a proposal may be revoked any time before communication of acceptance is complete against the proposer; an acceptance before it is complete against the acceptor. Section 7 requires acceptance to be absolute and unqualified and made in the prescribed or usual manner — a conditional acceptance is a counter-offer that kills the original, the mirror-image rule the general contracts lesson explains.',
      },
      {
        kind: 'para',
        text: 'Consideration is defined by s.2(d): something done, abstained from, or promised, at the desire of the promisor — and the Act permits past consideration and, unlike England, consideration furnished by a third party: Chinnaya v. Ramayya (1882) enforced a promise to pay a third sister, holding Indian courts unbound by Tweddle v. Atkinson. Section 25 makes agreements without consideration void, with four exceptions every exam quotes: natural love and affection between near relatives, in writing and registered; compensation for past voluntary services; promise in writing to pay a time-barred debt; and completed gifts (with agency under s.185 needing no consideration, a fifth in practice). No consideration is needed where it has already passed, and inadequacy of consideration does not void a contract the parties freely made — the Act does not police bargains, only empty ones.',
      },
      {
        kind: 'para',
        text: 'Capacity is s.11: every person is competent who is of the age of majority, of sound mind, and not disqualified by law. A minor\'s agreement is void from the start — the Privy Council\'s Mohori Bibee v. Dharmodas Ghose (1903) is the leading authority: a moneylender\'s mortgage from a minor was void ab initio, and since ss.64 and 65 (restoration on rescission) presuppose competent parties, the lender could not recover even the money actually advanced; the policy is protection of minors, not restitution. Soundness of mind (s.12) means able to understand and rationally evaluate consequences at the time of contracting — intoxication and lunacy are tested against that moment. Free consent (ss.13-14) is consent by consensus ad idem, not vitiated by coercion (s.15 — physical force, or threats, including detention of property), undue influence (s.16 — a relationship of domination abused, presumed where one party is in a position to dominate the will of another and the transaction appears unconscionable), fraud (s.17 — false statement made knowingly, active concealment, deceptive promises), misrepresentation (s.18 — innocent falsehood) or mistake. Bilateral mistake of fact essential to the agreement voids it (s.20); unilateral mistake generally leaves the contract voidable or valid (s.22). Consent so obtained makes the contract voidable, not void — the defrauded party may rescind and claim restitution under ss.64-65.',
      },
      {
        kind: 'para',
        text: 'The Act polices object and form. Section 23 voids agreements whose consideration or object is unlawful — forbidden by law, defeating policy, fraudulent, injurious to person or property, immoral, or opposed to public policy (trading with enemy, stifling prosecution, maintenance and champerty). Section 27 continues the restraint-of-trade doctrine with exceptions (sale of goodwill, partnership covenants); s.28 voids ousters of jurisdiction save as saved for arbitration; s.29 voids uncertain agreements; s.30 voids wagers; and s.56 states the doctrine of impossibility — agreements to do impossible acts are void ab initio, and supervening impossibility after contract dissolves it: the leading case is Satyabrata Ghose v. Mugneeram Bangur (1954), where the Supreme Court treated frustration as a rule of construction, reading the contract against the background of war-time de-requisition. Discharge otherwise comes by performance (s.37, with time of essence under s.55), by agreement — novation, rescission, alteration, remission (ss.62-63) — or by breach.',
      },
      {
        kind: 'para',
        text: 'Breach triggers the remedies. Anticipatory breach (s.39): a party\'s refusal disables the contract, and the aggrieved party may sue at once or wait for the performance date. Damages are governed by s.73, which codifies Hadley v. Baxendale (1854): compensation for loss which the parties knew, when they made the contract, to be the likely result of breach — loss arising naturally in the usual course of things, or from the special circumstances communicated; remote and indirect loss is excluded. The Explanation to s.73 adds the duty to take reasonable steps to mitigate. Ordinary damages are the market-rule measure; special damages require the special knowledge; nominal damages recognise a technical breach; punitive damages are not a contract remedy. The statutory menu continues outside s.73: specific performance and injunctions under the Specific Relief Act 1963 (as amended 2018 — discretionary orders, in effect the rule now for ready-and-willing parties, never for personal services), quantum meruit — payment for work actually done where a contract ends prematurely — and suit for the agreed price. Sections 68-72 supply the quasi-contracts: necessaries supplied to a person incapable of contracting (s.68), payment by an interested person of another\'s dues (s.69 — the classic: paying a landlord\'s arrears to save your own lease), benefit enjoyed from a lawful non-gratuitous act (s.70), finder of goods (s.71), and money or goods delivered by mistake or coercion (s.72) — the Indian text of unjust enrichment.',
      },
      {
        kind: 'para',
        text: 'Two satellite statutes complete the syllabus. The Sale of Goods Act 1930 governs transfers of goods: contract of sale (s.4), conditions and warranties (ss.12-16 — breach of a condition entitles repudiation, of a warranty only damages; the rule of caveat emptor and its exceptions, buyer examining goods, merchantable quality under implied conditions, sale by description), transfer of property and risk by the ss.19-24 rules (intention is the touchstone), and nemo dat quod non habet with its exceptions (s.27) — sale by a mercantile agent, sale by an unpaid seller, buyer in possession, estoppel, and voidable-title sales. The Indian Partnership Act 1932 defines partnership (s.4) as the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all — mutual agency (s.18) is the decisive test, distinguishing partners from co-owners and joint Hindu families; registration is optional (s.69 lists the disabilities of non-registration); and unlimited liability makes the LLP Act 2008 the modern alternative. Both statutes began life inside the Contract Act, which is why their vocabulary rhymes.',
      },
      { kind: 'example', title: 'Worked Example — Applying Section 73 to a Delivery Delay', steps: [
        'Identify what is asked: a buyer contracts a printing firm to deliver 5,000 catalogues for 2,00,000 rupees before a trade fair; the firm delivers a month late, and the buyer loses a commission of 1,50,000 rupees from a distributor who walked — plus 20,000 in storage costs. What is recoverable?',
        'Recall s.73\'s two limbs: loss arising naturally in the usual course of things, and loss within the parties\' contemplation because the special circumstances were communicated at contracting.',
        'Classify the heads: the storage costs of holding the venue slot flow naturally from late delivery — limb one, recoverable. The lost distributor commission is special loss: recoverable only if the buyer told the printer about the fair, the deadline\'s purpose and the distributor\'s deal when ordering — the Hadley v. Baxendale knowledge requirement, codified.',
        'Apply mitigation (the s.73 Explanation): the buyer could not have obtained substitute printing in time at a similar price, and acted reasonably throughout — no reduction; had a substitute been available at 15,000 extra, failing to use it would have cut the claim.',
        'State the result: 20,000 under limb one; 1,50,000 only on proof of communicated special circumstances; remote consequences (the distributor\'s own lost customers) excluded. The structure — classify, communicate, mitigate — is the marking scheme.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exam practice: CLAT and CA Foundation fact patterns almost always turn on one s.10 essential or the void-voidable line — identify it first.',
        'Commercial drafting: force majeure, liquidated damages and arbitration clauses are s.56, s.74 and s.28 choices made in advance.',
        'Everyday contracting: minors\' purchases, reward offers and app terms all run on ss.11, 4 and 25 — knowing which is which explains what you can enforce.',
        'Consumer law interface: defective-goods claims pair the Sale of Goods Act\'s implied conditions with the Consumer Protection Act 2019.',
        'Business structuring: the partnership-versus-LLP choice turns on s.4 mutual agency and unlimited liability.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not write "all agreements are contracts": only s.10-compliant agreements are, and the void-voidable distinction decides dozens of fact patterns — coercion makes a contract voidable, bilateral mistake makes it void. A minor\'s agreement is void ab initio, not voidable, and Mohori Bibee refused even restitution to the lender. Consideration in India may move from a stranger (Chinnaya) — do not import Tweddle v. Atkinson. "No consideration, no contract" has its s.25 exceptions — love and affection in a registered writing, past voluntary service, time-barred debt. Damages compensate, never punish, and special losses must have been communicated. And specific performance is not part of the Contract Act at all — it lives in the Specific Relief Act 1963.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'void versus voidable', def: 'Void agreements (s.2(g)) are null from the start; voidable ones (s.2(i)) stand until the aggrieved party rescinds.' },
        { term: 'consideration (s.2(d))', def: 'The act, abstinence or promise at the promisor\'s desire; may be past or from a third party in India.' },
        { term: 'Mohori Bibee rule', def: 'A minor\'s agreement is void ab initio and no restitution lies against the adult counterparty (1903).' },
        { term: 'free consent', def: 'Consensus ad idem unaffected by coercion, undue influence, fraud, misrepresentation or mistake (ss.13-22).' },
        { term: 'section 56', def: 'Impossibility doctrine: impossible promises void ab initio; supervening frustration dissolves the contract.' },
        { term: 'section 73 damages', def: 'Compensation for natural or communicated-contemplated loss, excluding the remote — the Hadley rule codified, with a mitigation duty.' },
        { term: 'quantum meruit', def: 'Reasonable payment for work actually performed when a contract ends before completion.' },
        { term: 'quasi-contract (ss.68-72)', def: 'Statutory obligations resembling contracts — necessaries, interested-person payments, non-gratuitous benefits, finds, money paid by mistake — enforcing unjust-enrichment restitution.' },
        { term: 'caveat emptor', def: 'The Sale of Goods Act buyer-beware rule, with exceptions for description, sample, merchantable quality and fitness for purpose.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'In Mohori Bibee v. Dharmodas Ghose, the Privy Council held that a minor\'s mortgage is…',
          options: ['voidable at the minor\'s option', 'void ab initio, with no restitution of the money advanced', 'valid if the minor ratified it on majority', 'an enforceable quasi-contract'],
          answer: 1,
          explain: 'The agreement was null from the start, and ss.64-65 could not be used to make the moneylender recover — protection of minors overrides restitution.',
        },
        {
          q: 'Under s.25, an agreement without consideration is NOT void when…',
          options: ['both parties are adults', 'it is in writing and registered, made from natural love and affection between near relations', 'it is oral but witnessed', 'the promisee is a company'],
          answer: 1,
          explain: 'That is the first s.25 exception; the others are past voluntary service and the written time-barred-debt promise.',
        },
        {
          q: 'Acceptance by post is complete against the proposer when…',
          options: ['the letter is written', 'it is put in course of transmission — posted', 'it reaches the proposer', 'the proposer reads it'],
          answer: 1,
          explain: 'Section 4 fixes the posting moment against the proposer; against the acceptor, only on the proposer\'s knowledge — and s.5 allows revocation before those points.',
        },
        {
          q: 'A factory fire makes performance of an existing contract genuinely impossible. The Indian doctrine applying is…',
          options: ['s.27 restraint of trade', 's.56 supervening impossibility — the contract becomes void, as construed in Satyabrata Ghose', 's.73 damages', 's.68 necessaries'],
          answer: 1,
          explain: 'Section 56 dissolves contracts whose performance becomes impossible after formation; the 1954 Supreme Court case made frustration a rule of construction.',
        },
      ] },
      {
        kind: 'para',
        text: 'The Indian Contract Act endures because it is architecture, not archaeology: sections drafted in 1872 still decide app-terms disputes, and its deliberate departures from English law — third-party consideration, absolute protection of minors, statutory quasi-contracts — show a code thinking for itself. Master the s.10 checklist, the communication rules, the consent vitiators and s.73\'s two limbs, and the satellite statutes read as footnotes rather than new mountains. Every commercial dispute you will meet is one of these sections wearing modern clothes.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the general contracts lesson for the conceptual anatomy this statute implements. Follow with the tort lesson (parallel civil obligations), the courts and evidence lessons for enforcement machinery, and the consumer-law dimensions of the Sale of Goods Act. Reading the bare Act — sections 1-75 run sixty pages — alongside Mulla\'s commentary is the classic exam method.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'law-consent-defects-void-voidable',
    title: 'When Consent Fails: Void and Voidable Agreements',
    domain: 'Law & Governance',
    field: 'Contract Law',
    branch: 'Consent & Validity',
    tier: 'intermediate',
    concepts: [
      'Consent versus free consent',
      'Coercion and undue influence',
      'Fraud versus innocent misrepresentation',
      'Bilateral and unilateral mistake',
      'Void, voidable and illegal — three degrees of invalidity',
      'Rescission with restitution',
      'The duty to speak and when silence deceives',
    ],
    words: 1515,
    readMins: 7,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The contract-formation lesson covered how agreements are born — offer, acceptance, consideration. This lesson covers the quality-control layer that follows: an agreement can be formally perfect and still unenforceable because the consent behind it was bent, bought or mistaken. The framework, stated most crisply in the Indian Contract Act’s categories that the formation lesson already introduced, divides defective consent into named vices — coercion, undue influence, fraud, misrepresentation, mistake — and sorts the resulting agreements into three degrees of invalidity. The same taxonomy underlies contract law teaching everywhere the common law tradition runs.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every mis-sold loan, every signature extracted by pressure, every deal struck on a false claim is a consent-defect case in miniature. Knowing the categories tells you what remedy exists: rescind the deal, sue for damages, or neither — and that judgment call is standard material in law-entrance reasoning and commercial-law practice alike.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Act separates two thresholds. Consent is the meeting of two minds on the same thing in the same sense — a genuine offer-and-acceptance match. Free consent is that agreement obtained clean: without coercion, undue influence, fraud, misrepresentation, or (bilateral) mistake. Consent that exists but is not free makes the agreement voidable at the innocent party’s option — valid until they choose to cancel it. Where even bare consent fails — the parties agree to different things in the same transaction — the agreement is void from the start. The distinction drives everything downstream: voidable leaves you standing in a contract you may leave; void means you never stood in one at all.',
      },
      {
        kind: 'para',
        text: 'Coercion is the crude vice: committing or threatening an act forbidden by the criminal law, or unlawful detaining of property, to force agreement — a signature at knifepoint is the archetype, and the law also recognises threats aimed at people the victim cares about. The agreement is voidable, and the coercing party must restore any benefit extracted. Undue influence is coercion’s refined cousin: one party dominates the other’s will through a relationship of trust, authority or dependence — doctor and patient, spiritual adviser and follower, guardian and ward, caregiver holding a power of attorney. Because domination is invisible, the law bends procedure: once a position of dominance and an unfair transaction are shown, the burden shifts to the dominant party to prove the transaction was fair. Again the remedy is avoidance — rescission plus restitution.',
      },
      {
        kind: 'para',
        text: 'Deception splits by intent. Fraud is a false statement made knowingly, without belief in its truth, or recklessly, with intent to deceive — the remedy is voidability plus damages, because the law also wants deterrence. Misrepresentation is an innocent false statement — wrong, but honestly believed; the innocent party may rescind (and must restore what was received), but no damages follow, because fault was absent. Silence is generally not fraud: a seller need not volunteer every defect. But silence becomes actionable where there is a duty to speak — fiduciary relationships, contracts of the utmost good faith such as insurance, or where a half-truth is left standing to deceive — and where a statement once true becomes false before the deal closes, the speaker must correct it.',
      },
      {
        kind: 'para',
        text: 'Mistake is the vice that attacks consent itself. Bilateral mistake — both parties operating on the same fundamental error of fact essential to the agreement (goods already perished on a ship neither knows has sunk, the classic) — destroys the agreement: void. Unilateral mistake — only one party is wrong, as when a buyer snaps up a knowingly under-priced item — generally leaves the contract standing, because the law protects reliance, though equity may relieve where the error was known or obvious. Mistake of law abroad is treated as mistake of fact; mistake of one’s own domestic law is no excuse — everyone is presumed to know it.',
      },
      {
        kind: 'para',
        text: 'The three degrees of invalidity sort the wreckage. Voidable agreements — the products of coercion, undue influence, fraud, misrepresentation — bind until the aggrieved party rescinds, and rescission carries restitution: both sides give back what they took, unwinding the exchange. Void agreements — those lacking even consent, or struck down as a class — have no legal effect from inception: agreements in restraint of marriage, in restraint of trade (beyond reasonable limits), in restraint of legal proceedings, and wagers are void as a category, regardless of how willing the parties were. Illegal agreements sit a notch below void: not merely unenforceable but tainted, so collateral agreements connected to the unlawful object fall with them — a brokerage arrangement to rig bids cannot be salvaged by severing the illegal part. Capacity completes the filter: parties must be of age, sound mind, and not disqualified; an agreement by a minor is void outright under the classic rule.',
      },
      {
        kind: 'formula',
        name: 'Free consent',
        latex: '\\text{free consent} = \\text{consent} - (\\text{coercion} \\cup \\text{undue influence} \\cup \\text{fraud} \\cup \\text{misrepresentation} \\cup \\text{bilateral mistake})',
        meaning: 'Consent is free only when none of the five vices contaminates it; each vice maps to a remedy — voidability (with or without damages) or outright voidness.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: an elderly landowner transfers property at a fraction of market value to a live-in caregiver who managed her affairs and held her power of attorney. Analyse the transaction.',
          'Recall the framework: the caregiver stands in a relationship of confidence and authority — the undue-influence template — and the transaction is facially unfair.',
          'Apply: the presumption machinery engages — the caregiver must prove the transaction was the landowner’s informed, independent choice; failing that, consent was not free.',
          'State the result: the transfer is voidable at the landowner’s (or her estate’s) option: rescind and order mutual restitution — property back to the estate, any consideration returned — with no need to prove deliberate wrongdoing, which is exactly why undue influence, not fraud, is the charge of choice here.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Consumer-finance mis-selling: loans and policies obtained on half-truths face the misrepresentation/fraud line in disputes.',
        'Insurance contracts, where the duty of disclosure makes silence actionable — the duty-to-speak doctrine at work.',
        'Elder-law and family settlements, where undue-influence presumptions police transfers from dependent relatives.',
        'M&A and commercial due diligence, where discovered misstatements trigger rescission or damages claims.',
        'Law-entrance and commercial-law examinations, which drill the five vices and the void/voidable sorting constantly.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Conflating fraud with misrepresentation — intent is the whole difference, and with it the availability of damages. Treating all silence as deception — silence lies only where a duty to speak exists. Swapping void and voidable — void needs no rescission because there was never a contract; voidable binds until rescinded. Reading coercion and undue influence as the same — one is unlawful pressure applied from outside, the other domination through a trusted relationship with a shifted burden of proof. And forgetting restitution: rescission unwinds, it does not just cancel.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'free consent', def: 'Consent untainted by coercion, undue influence, fraud, misrepresentation or bilateral mistake.' },
        { term: 'coercion', def: 'Agreement obtained by criminal threats or unlawful detention of property; renders the agreement voidable.' },
        { term: 'undue influence', def: 'Consent extracted through a relationship of dominance and dependence; burden shifts to the dominant party.' },
        { term: 'fraud', def: 'Dishonest false statement (or actionable concealment) made to deceive; voidable plus damages.' },
        { term: 'misrepresentation', def: 'Innocent false statement honestly believed; voidable, no damages.' },
        { term: 'bilateral mistake', def: 'Shared fundamental error of fact essential to the agreement; renders it void.' },
        { term: 'void agreement', def: 'No legal effect from inception — including statutory classes like wagering and restraints on marriage or trade.' },
        { term: 'rescission', def: 'Cancellation of a voidable agreement with mutual restitution of benefits.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'A seller honestly believes his car has a reconditioned engine, but it has not. The sale is…',
          options: ['fraud — the statement was false', 'misrepresentation — voidable, no damages', 'void for bilateral mistake', 'fully enforceable — honesty is irrelevant'],
          answer: 1,
          explain: 'The statement was false but honestly believed: innocent misrepresentation — rescission lies, damages do not.',
        },
        {
          q: 'Both parties contract for a cargo that had already sunk, unknown to anyone. The agreement is…',
          options: ['voidable at the buyer’s option', 'void — bilateral mistake of essential fact', 'enforceable — risk passes to the buyer', 'illegal'],
          answer: 1,
          explain: 'A shared fundamental error of fact essential to the bargain destroys consent itself: void from inception.',
        },
        {
          q: 'The procedural signature of undue influence is…',
          options: ['the criminal standard of proof', 'a burden shift onto the dominant party to prove fairness', 'automatic criminal liability', 'a requirement of written evidence'],
          answer: 1,
          explain: 'Once dominance and unfairness appear, the influencer must prove informed, independent consent — the presumption is the doctrine’s teeth.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the contract-formation lesson, whose statute framework this lesson extends. Follow with the tort lesson for the damages logic fraud borrows, the courts-and-evidence lesson for how burdens of proof move, and the consumer-protection dimensions of sale law. Exercise: take one reported undue-influence case (courts publish them free) and identify where the burden shifted — the judgment will name the moment.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Consent is meeting minds; free consent is consent minus the five vices.',
        'Coercion pressures from outside; undue influence dominates through trust — with a shifted burden of proof.',
        'Fraud intends to deceive (voidable + damages); misrepresentation is honest error (voidable only).',
        'Bilateral mistake of essential fact is void; unilateral mistake usually stands.',
        'Voidable binds until rescinded with restitution; void never bound; illegal taints its collateral deals.',
      ] },
    ],
  },
]
