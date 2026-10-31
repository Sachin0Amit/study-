/**
 * Knowledge Universe — Sociology — Chapter 05: Social Control
 * 1 lesson · ~1,241 words
 * field: Sociology
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Social Control]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 soc-crime-deviance-sociology — Deviance and Crime: The Sociology of Rule-Breaking
 */
import type { KnowledgeTopic } from '../../types'

export const sociologyCh05: KnowledgeTopic[] = [
  {
    id: "soc-crime-deviance-sociology",
    title: "Deviance and Crime: The Sociology of Rule-Breaking",
    domain: "Social Sciences",
    field: "Sociology",
    branch: "Social Control",
    tier: "intermediate",
    concepts: [
      "Durkheim: deviance is normal and functional",
      "Merton's strain and five adaptations",
      "Labeling and secondary deviance",
      "Social disorganization and collective efficacy",
      "Certainty beats severity",
      "The mass incarceration experiment",
      "Desistance and what reduces reoffending",
    ],
    words: 1241,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "What counts as a crime is a social decision: alcohol was a felony during Prohibition, and much of what your grandparents' society punished is legal now. Deviance — rule-breaking against a group's norms — is not a fixed category of acts but a moving boundary, and sociology's founding insight was to study the boundary, the rule-makers and the reactions rather than only the rule-breakers. (How courts process cases is the law library's territory; this is the social machinery around them.)" },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "The United States ran history's largest incarceration experiment: the imprisonment rate roughly quintupled after 1970, making it the world's leading jailer — while about two-thirds of released prisoners are rearrested within three years. Whether punishment reduces crime, and what does instead, is a trillion-dollar question with actual evidence, some of it surprising." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "Émile Durkheim argued the scandalous: crime is normal — every known society has it, and a sudden disappearance would signal something broken, not perfected. It is even functional: punishing it performs the norms publicly, a community rallied around a verdict is watching its rules draw themselves, and yesterday's deviance is often tomorrow's law — labor organizing, civil disobedience. The Durkheim lesson owns the theory of social facts; the point here is its application, that moral outrage around crime is itself a social fact with consequences." },
      { kind: "para", text: "Robert Merton's 1938 strain theory located crime in a mismatch: the culture commands success goals for everyone, while the structure blocks legitimate means for some. He catalogued five adaptations — conformity; innovation, accepting goals while rejecting means, the thief; ritualism, abandoning goals while keeping means; retreatism, rejecting both; rebellion, replacing both. Crime concentrates where the goal is loudest and the ladder is shortest — a structural reading that still organizes what is known about neighborhoods and opportunity." },
      { kind: "para", text: "Howard Becker's Outsiders (1963) moved deviance from the act to the audience: nothing is inherently deviant until someone with the power to define says so — moral entrepreneurs like temperance crusaders manufacture rules. Labeling does real work after the fact. The kid processed through juvenile court now carries a record, a stigma and a changed self-concept, sliding from primary deviance, the act, into secondary deviance, the career. The policy implication — that formal processing can make young offenders worse, and diversion can beat court — has support in randomized evaluations." },
      { kind: "para", text: "The Chicago School mapped delinquency by neighborhood and found rates stayed high in the same districts across generations of entirely different residents. Shaw and McKay's explanation was social disorganization: poverty, turnover and heterogeneity weaken the informal social control — eyes on the street, neighbors who intervene — that keeps order without police. Robert Sampson's modern update, collective efficacy, explains why some poor neighborhoods are safe and some comfortable ones are not: shared trust plus willingness to intervene for the common good. The broken-windows era translated this into order-maintenance policing, with mixed evidence and real costs." },
      { kind: "para", text: "Deterrence's own evidence is awkward for the tough-on-crime instinct. Certainty of punishment deters; severity barely does — after Cesare Beccaria's eighteenth-century hunch was finally tested, long sentences proved weak brakes while the probability of being caught moves behavior. Clearance rates tell the story: with roughly one in eight burglaries solved, decade-long sentences are discounted to near-irrelevance. What reduces recidivism looks boring — cognitive-behavioral programs with 20-odd percent reductions, prison education, employment bridges, and age itself: most offenders simply desist by their forties." },
      { kind: "para", text: "The American experiment: imprisonment rose roughly fivefold from the early 1970s to the 2000s — two million people — driven by the drug war, mandatory minimums and parole restriction, with Black Americans imprisoned at roughly five times the white rate. It bought some crime reduction in the 1990s, though how much is contested — the decline had many claimants, lead exposure among them — and the marginal returns turned negative as more low-risk offenders were cycled through. Since 2009 the rate has fallen by roughly a quarter, and the reform debate — sentencing changes, collateral consequences, focused deterrence — is now mainstream rather than fringe." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a burglar in a neighborhood with a 12 percent clearance rate faces five-year mandatory sentences — will severity deter him, and what would?",
        "Recall the governing idea: expected punishment is probability times severity, and evidence says certainty carries the deterrent weight.",
        "Apply: five years discounted by 0.12 is about seven months of expected time — and burglars, like everyone, respond to the odds, not the abstract maximum. Doubling clearance toward 25 percent doubles expected punishment without touching the statute book; collective efficacy and hot-spots patrols are how that happens without a police state.",
        "State the result: the deterrent lever is investigation and visibility — and the neighborhood with shared trust is the one where a burglar is seen at all.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Hot-spots policing concentrates patrol where a small fraction of addresses produces most calls.",
        "Focused-deterrence programs, like Boston's Operation Ceasefire, pair offers of help with credible group-level sanctions.",
        "Restorative-justice conferences modestly cut reoffending and raise victim satisfaction.",
        "Risk-need-responsivity rules match supervision intensity and programming to assessed risk.",
        "Ban-the-box and record-sealing laws attack the collateral consequences that block desistance.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "The recurring errors: reasoning from rare, horrifying cases to policy (moral panic's signature); equating severity with deterrence (certainty does the work); explaining crime entirely by individual character while neighborhoods keep their rates across generations of residents; crediting any single policy with the 1990s crime drop (its causes are contested and plural); and the symmetrical fatalisms — that nothing works, and that prisons are hotels. Both survive contact with the evidence badly." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "deviance", def: "Behavior that violates a group's norms — a property of the boundary, not the act." },
        { term: "strain theory", def: "Merton's mismatch between culturally commanded goals and structurally available means." },
        { term: "labeling theory", def: "Becker's insight that audiences with power define deviance — and definitions shape careers." },
        { term: "secondary deviance", def: "Rule-breaking organized around a stigmatized identity, downstream of the label." },
        { term: "collective efficacy", def: "Sampson's trust plus willingness to intervene — the variable that orders neighborhoods." },
        { term: "deterrence", def: "Discouragement by threat; effectiveness runs through certainty far more than severity." },
        { term: "desistance", def: "The ordinary aging-out of crime that most offenders eventually do." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "Merton's 'innovation' adaptation means:",
          options: ["inventing new technology", "accepting success goals while using illegitimate means", "rejecting both goals and means", "going through the motions without believing"],
          answer: 1,
          explain: "The innovator wants the culturally mandated success and, blocked from legitimate means, takes the shortcut.",
        },
        {
          q: "Labeling theory's core claim is that deviance lies in:",
          options: ["the act's inherent harm", "the reaction of audiences with power to define", "genetics", "poverty alone"],
          answer: 1,
          explain: "Becker: nothing is deviant until rule-makers with the power to define treat it so — and the label then reshapes the person.",
        },
        {
          q: "The best-supported deterrent variable is:",
          options: ["sentence length", "prison harshness", "certainty of punishment", "public shaming"],
          answer: 2,
          explain: "Beccaria's hunch, confirmed: the odds of being caught move behavior; the length of the sentence barely does.",
        },
        {
          q: "Collective efficacy predicts neighborhood safety because it captures:",
          options: ["police budgets", "informal social control — trust plus willingness to intervene", "surveillance camera counts", "median income"],
          answer: 1,
          explain: "It is the modern refinement of Shaw and McKay: some poor districts are safe because neighbors act, and some rich ones are not.",
        },
      ] },
      { kind: "callout", title: "Where to go next", tone: "path", text: "Pairs with the Durkheim lesson for the underlying theory and the law-and-governance library for courts and evidence rules. Follow the collective-action lesson for threshold logic in riots and protest waves. Next: procedural justice and legitimacy, drug policy history, and comparative penology — Norway's rehabilitative model." },
    ],
  },
]
