/**
 * Knowledge Universe — Private Law: Contracts, Torts & Family — Chapter 02: Tort Law
 * 1 lesson · ~1,400 words
 * field: Private Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Tort Law]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 law-tort-liability — Tort Law: When Harm Has a Price
 */
import type { KnowledgeTopic } from '../../types'

export const privateLawCh02: KnowledgeTopic[] = [
  {
    id: 'law-tort-liability',
    title: 'Tort Law: When Harm Has a Price',
    domain: 'Law & Governance',
    field: 'Private Law',
    branch: 'Tort Law',
    tier: 'core',
    concepts: [
      'Tort versus crime and contract',
      'Duty of care: the neighbour principle',
      'Breach and the reasonable person',
      'Causation: but-for and foreseeability',
      'Strict liability without fault',
      'Damages and what tort law is for',
    ],
    words: 1400,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Injure someone and two legal systems wake up. Crime asks whether the state should punish you; tort asks whether you must pay the person you harmed. Tort law is the civil law of wrongs — accidents, injuries, defective products, ruined reputations — and its central question is deceptively simple: when does one private person owe another compensation for harm? Most of the answer is one word, negligence, whose anatomy — duty, breach, causation, damages — is the backbone of this topic and the busiest docket in private law.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Tort law decides who pays for every car crash, workplace injury, defective hip implant and libellous headline, and it quietly prices risk for the whole economy: insurance premiums, safety engineering and warning labels are all negotiated against tort outcomes. It is also the citizen\'s most-used body of law — you may never prosecute a crime, but you have been a potential claimant dozens of times. Understanding negligence is understanding how society allocates the cost of harm.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Three sources of obligation divide the field. Contract duties come from promises you made; tort duties come from the law and bind everyone; crimes are wrongs against the state, prosecuted in its name. The same act can be more than one at once: O. J. Simpson was acquitted of murder in 1995 yet found liable for wrongful death in 1997 — legitimately, because the criminal standard of proof beyond reasonable doubt is far higher than the civil balance of probabilities (the evidence lesson in this section covers those standards).',
      },
      {
        kind: 'para',
        text: 'The modern anchor is Donoghue v Stevenson (1932): a woman drank ginger beer from a bottle containing a decomposed snail and sued the manufacturer, who owed her no contract. Lord Atkin framed the neighbour principle — you owe a duty of care to persons so closely and directly affected by your acts that you ought reasonably to have them in contemplation. Duty is the gatekeeper: it asks whether this defendant owes this claimant care at all — drivers to other road users, doctors to patients, manufacturers to consumers.',
      },
      {
        kind: 'para',
        text: 'Breach asks whether the defendant fell below the standard of the reasonable person — the ordinary prudent individual in those circumstances, not the perfect one; professionals are measured against their profession\'s standard. The economic lens compresses the question into the Hand formula from United States v. Carroll Towing (1947): there is negligence when the burden of precautions (B) is less than the probability of harm multiplied by its severity (P × L). Leave a barge untethered for the cost of a rope while risking a sinking ship, and the arithmetic convicts you.',
      },
      {
        kind: 'para',
        text: 'Causation runs two tests. Factual: but for the defendant\'s act, would the harm have occurred? No but-for, no liability. Legal: was the harm of a foreseeable kind within the risk created? Chains can break — a genuinely new, independent intervening act, a novus actus interveniens, cuts the link. Two classic doctrines then shape outcomes: the eggshell-skull rule (you take your victim as you find them, so a pre-existing fragility is no defence) and remoteness limits, which keep wildly speculative downstream losses out of court.',
      },
      {
        kind: 'para',
        text: 'Sometimes fault is not required at all. Strict liability attaches to abnormally dangerous activities — blasting, keeping wild animals, and dangerous escapes from land in the Rylands v Fletcher tradition — and product liability in many systems makes sellers answer for defective products without proof of negligence. The logic is allocation, not blame: the enterprise that profits from the risk, and can insure and spread it, carries the loss more cheaply than a random victim could. Workers\' compensation is the purest case — workplace injuries pay out regardless of fault.',
      },
      {
        kind: 'para',
        text: 'Relief is usually money. Compensatory damages aim to restore: special damages (medical bills, lost earnings — calculable) and general damages (pain, loss of amenity — assessed). Punitive damages punish outrageous conduct. The theory behind the whole system is debated — compensation for victims, deterrence that makes safety rational, and loss-spreading through insurance all operate at once — and each justifies reform proposals, from damages caps to no-fault schemes, that keep tort among the most political corners of private law.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a texting driver hits a cyclist who was not wearing a helmet, and the head injury is worse because of it. Run the negligence analysis.',
        'Recall the anatomy: duty, breach, causation, damages — with the claimant\'s own conduct as a possible reduction.',
        'Apply: duty — road users owe each other care, no dispute. Breach — texting while driving falls well below the reasonable person standard, and the burden of putting the phone down is trivially less than the risk. Causation — but for the texting, no collision, and a head injury from a collision is exactly the foreseeable kind. Damages — medical costs and lost earnings, but the missing helmet is contributory negligence, reducing the award by the percentage of the claimant\'s own fault in many systems.',
        'State the result: liability stands, damages are discounted — each element gated the claim, and the claimant\'s conduct moved the number, not the liability.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Road-traffic claims: the highest-volume tort docket anywhere, running on the same four elements in every jurisdiction.',
        'Product liability and recalls: design, manufacture and warning defects decide whether the maker pays without anyone proving carelessness.',
        'Medical malpractice: professional-standard breach plus expert causation evidence — the most expensive mistakes in private law.',
        'Workplace safety: employer duties and no-fault compensation schemes price industrial risk in advance.',
        'Media and publishing: defamation is a tort — reputation protected by damages, not prison.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Tort is not “minor crime”: different parties, different standards, different aims. Intent is not required — negligence is carelessness, and strict liability is neither. But-for causation is not liability: the harm must also be foreseeable, and intervening acts can break the chain. A sympathetic claimant does not create a claim — no duty, no tort, however badly injured. And note what the Simpson case actually shows: the same evidence failing criminally and succeeding civilly is legitimacy, not contradiction.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'tort', def: 'A civil wrong causing harm to a person, property or reputation, remedied by damages.' },
        { term: 'duty of care', def: 'The legal obligation to take reasonable care toward those foreseeably affected by one\'s acts.' },
        { term: 'reasonable person', def: 'The hypothetical ordinary prudent individual whose conduct defines the standard of care.' },
        { term: 'but-for causation', def: 'The factual test: the harm would not have occurred but for the defendant\'s act.' },
        { term: 'novus actus interveniens', def: 'A new, independent intervening act that breaks the chain of causation.' },
        { term: 'strict liability', def: 'Liability imposed without proof of fault, for abnormally dangerous activities and defective products.' },
        { term: 'damages', def: 'The monetary remedy in tort — compensatory for loss, punitive for outrageous conduct.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The neighbour principle in Donoghue v Stevenson established…',
          options: ['criminal liability for unsafe food', 'a general duty of care to those foreseeably affected by one\'s acts', 'strict liability for all manufacturers', 'that a contract is required before suing'],
          answer: 1,
          explain: 'Lord Atkin\'s principle opened duty beyond contract: care is owed to those closely and directly affected by your acts.',
        },
        {
          q: 'Under the Hand formula, conduct is negligent when…',
          options: ['B is greater than P × L', 'B is less than P × L — precautions cost less than expected harm', 'P equals zero', 'the loss is unquantifiable'],
          answer: 1,
          explain: 'If the burden of taking care is smaller than probability times severity, failing to take it is negligence.',
        },
        {
          q: 'A claimant\'s unusually fragile skull makes injuries worse. Under the eggshell-skull rule, the defendant…',
          options: ['is liable only for a normal person\'s injuries', 'takes the victim as found and answers for the full harm', 'is excused entirely', 'faces criminal charges instead'],
          answer: 1,
          explain: 'Pre-existing vulnerability does not break causation or excuse the tort — the full consequences follow.',
        },
        {
          q: 'Strict liability is best explained as…',
          options: ['punishment for intent', 'liability without fault, allocating risk to the enterprise best able to bear and insure it', 'a criminal standard in disguise', 'liability reserved for governments'],
          answer: 1,
          explain: 'No proof of carelessness is needed; the point is who can cheapest avoid, insure and spread the loss.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — plain reasoning suffices, and the contracts lesson in this section is the natural companion, since contract and tort are private law\'s two engines. Follow with remedies in depth, corporate liability and, for the trial side, the evidence and burden-of-proof lesson. Read one reported negligence case start to finish — Donoghue is short — and the anatomy becomes permanent.',
      },
    ],
  },
]
