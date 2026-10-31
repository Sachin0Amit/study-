/**
 * Knowledge Universe — Criminal Law & Justice — Chapter 03: Criminal Litigation
 * 1 lesson · ~1,356 words
 * field: Criminal Justice
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Litigation]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 law-evidence-burden — Evidence and the Burden of Proof
 */
import type { KnowledgeTopic } from '../../types'

export const criminalJusticeCh03: KnowledgeTopic[] = [
  {
    id: 'law-evidence-burden',
    title: 'Evidence and the Burden of Proof',
    domain: 'Law & Governance',
    field: 'Criminal Justice',
    branch: 'Litigation',
    tier: 'intermediate',
    concepts: [
      'Who must prove: the burden of proof',
      'Standards of proof',
      'Direct and circumstantial evidence',
      'Relevance, admissibility and exclusion',
      'Presumptions and inference',
      'Credibility, reliability and corroboration',
      'Why wrongful convictions happen',
    ],
    words: 1356,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'A trial is not a search for perfect truth; it is a structured contest run under rules about who must prove what, and to what degree. In a criminal case the prosecution must convince the fact-finder of guilt beyond reasonable doubt, while the defendant may sit silent and prove nothing at all. Evidence law — what may be heard, how it may be used, and how it is weighed — is the machinery that keeps that asymmetric contest honest.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The burden of proof is where the presumption of innocence actually lives. It decides cases where facts stay murky, shields everyone from having to prove their own innocence, and explains why “not guilty” does not mean innocent — it means not proven. Grasp it, and you grasp why the law sometimes frees the probably guilty rather than convict the possibly innocent.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two burdens hide inside the phrase. The legal, or persuasive, burden is the duty to convince the fact-finder of an assertion, and in criminal cases it rests on the prosecution for every element of the offence. The evidential burden is lighter: the duty to point to some evidence before an issue may even be left to the jury. Some defences — insanity in many systems — shift the evidential burden to the accused once raised, but the prosecution’s core burden never travels.',
      },
      {
        kind: 'para',
        text: 'Criminal guilt must be proved beyond reasonable doubt — not to mathematical certainty, and not beyond any conceivable doubt, but beyond doubts on which a reasonable person would act in their own important affairs. Civil disputes use the balance of probabilities: more likely than not, the scales tipped past fifty per cent. The gap is deliberate. A society that locks people in cages demands more confidence than a society that moves money from one citizen to another.',
      },
      {
        kind: 'para',
        text: 'Direct evidence, if believed, proves a fact outright: the eyewitness who watched the stabbing. Circumstantial evidence proves by inference: fingerprints on the knife, blood on the cuff, a phone pinging towers along the escape route. Circumference is not weakness — a web of circumstantial facts often outperforms a lone eyewitness, whose memory is more editable than juries instinctively believe. DNA, cell-tower data and money trails are all circumstantial, and they convict more reliably than confession ever has.',
      },
      {
        kind: 'para',
        text: 'Relevant evidence makes a material fact more or less probable, but relevance is only a ticket to the door. Admissibility rules then exclude even relevant matter: hearsay — an out-of-court statement offered for its truth — because it cannot be cross-examined; propensity evidence, because “bad person” is not “did it”; and, in some systems, improperly obtained evidence, where courts weigh the justice system’s integrity against the cost of losing the proof. Exclusion protects the trial’s honesty, at the acknowledged price of sometimes blinding it.',
      },
      {
        kind: 'para',
        text: 'A presumption assigns a fact its starting point — innocence, sanity, death after seven years missing — and shifts the evidential burden onto whoever disputes it. Inference reasons from evidence to fact: wet streets imply recent rain. Fact-finders build such chains constantly, and the chains have rules — each link must be reasonable, and speculation dressed as common sense is still speculation. The prosecutor’s fallacy, mistaking “a one-in-a-million random match” for “a one-in-a-million chance of innocence”, is an inference error with wrongful convictions attached.',
      },
      {
        kind: 'para',
        text: 'Weighing testimony is an everyday skill, formalised. Fact-finders audit perception (could the witness actually see?), memory (how much has time edited?), narration (consistent account or coached script?) and sincerity (bias, incentive, fear). Corroboration — independent lines pointing the same way — is the classic safeguard, and some systems require it for notoriously fallible evidence such as accomplice testimony. Demeanour, the cue juries trust most, is the least reliable of the lot; good liars are calm.',
      },
      {
        kind: 'para',
        text: 'Innocence projects have exonerated hundreds, and their case files are evidence law’s failure atlas: mistaken eyewitness identification, false confessions extracted by fatigue and leverage, forensic overstatement, junk science and tunnel-vision investigation — running through them all, confidence mistaken for accuracy. The remedies follow the diagnoses: double-blind identification procedures, recorded interrogations, disclosure duties, post-conviction DNA testing. Every rule in this topic has a face behind it.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Bayes’ rule', latex: 'P(H \\mid E) = \\dfrac{P(E \\mid H)\\,P(H)}{P(E)}', meaning: 'The probability a hypothesis is true given the evidence; combining evidence properly means starting from prior odds, not treating the strength of one item as the final answer.' },
      { kind: 'formula', name: 'Posterior odds', latex: 'O_{\\text{after}} = O_{\\text{before}} \\times \\dfrac{P(E \\mid H)}{P(E \\mid \\neg H)}', meaning: 'Odds after evidence equal odds before multiplied by the likelihood ratio; the prosecutor’s fallacy is jumping from a large likelihood ratio straight to guilt.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a DNA profile matching the defendant occurs at random in 1 person in 100,000, and the other evidence puts prior odds of his being the source at 1 to 1,000 — how strong is the case once the DNA is in?',
        'Recall the governing idea: posterior odds equal prior odds multiplied by the likelihood ratio, so the match multiplies the existing case rather than finishing it.',
        'Apply: the likelihood ratio is 100,000 to 1, so posterior odds are 1/1,000 × 100,000 = 100 to 1 — a probability of about 99 per cent that the defendant is the source.',
        'State the result: the DNA converts weak suspicion into near-proof, but only because the prior was not negligible; treating the 1-in-100,000 match rate as the probability of innocence would be the prosecutor’s fallacy in action.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Courtroom advocacy: closing arguments are built around which side bears which burden on each element.',
        'Forensic science: modern standards require match probabilities and likelihood ratios to be reported, not raw certainties.',
        'Journalism and fact-checking: the same logic separates allegation from finding, and evidence from inference.',
        'Medicine: diagnostic testing is Bayesian inference in a white coat — base rates before test results, always.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The prosecutor’s fallacy leads the list: the rarity of a match is not the probability of innocence. Its mirror image, the defence attorney’s fallacy, dismisses weak-but-real evidence entirely. Remember that acquittal means not proven, not innocent; that circumstantial evidence is not second-class evidence; and that a verdict is an authorised conclusion under a standard of proof — deliberately imperfect machinery for a world in which no one witnesses everything.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'burden of proof', def: 'The duty to persuade the fact-finder; in crime it rests on the prosecution.' },
        { term: 'standard of proof', def: 'The degree of certainty required — beyond reasonable doubt, or balance of probabilities.' },
        { term: 'circumstantial evidence', def: 'Evidence that proves a fact by inference rather than direct perception.' },
        { term: 'hearsay', def: 'An out-of-court statement offered for its truth, generally excluded because it resists challenge.' },
        { term: 'presumption of innocence', def: 'The starting allocation of doubt: the accused is innocent unless guilt is proved.' },
        { term: 'likelihood ratio', def: 'The probability of the evidence if the hypothesis is true, divided by its probability if false.' },
        { term: 'corroboration', def: 'Independent evidence supporting a witness, guarding against single-source error.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In a criminal trial, the legal burden of proving guilt rests…',
          options: ['on the defendant', 'on the prosecution, beyond reasonable doubt', 'on the judge', 'on whoever possesses the documents'],
          answer: 1,
          explain: 'The presumption of innocence allocates the persuasive burden to the state for every element of the offence.',
        },
        {
          q: 'Fingerprints, cell-tower records and blood spatter are all…',
          options: ['direct evidence', 'circumstantial evidence', 'hearsay', 'presumptions'],
          answer: 1,
          explain: 'Each proves by inference; a chain of such facts can be stronger than a single eyewitness.',
        },
        {
          q: 'A one-in-a-million random DNA match rate means…',
          options: ['a one-in-a-million chance the suspect is innocent', 'a one-in-a-million chance of guilt', 'the match is a million times more likely if the suspect is the source than if he is not', 'the defendant must now disprove the match'],
          answer: 2,
          explain: 'It states a likelihood ratio, not a probability of guilt or innocence — the prosecutor’s fallacy conflates the two.',
        },
        {
          q: 'The civil standard, balance of probabilities, requires…',
          options: ['certainty beyond doubt', 'more likely than not — just past fifty per cent', 'two independent witnesses', 'a written confession'],
          answer: 1,
          explain: 'Civil justice tips the scales, and tipping past the midpoint suffices.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the basics of criminal justice and courts. Follow with criminal procedure, the law of testimony and forensic-science literacy, where the Bayesian logic earns its keep. Watching even one real trial — many courts stream proceedings — makes these abstractions vivid within an afternoon.',
      },
    ],
  },
]
