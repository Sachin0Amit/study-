/**
 * Knowledge Universe — Criminal Law & Justice — Chapter 02: The Legal Machine
 * 1 lesson · ~1,742 words
 * field: Criminal Justice
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Legal Machine]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 law-court-procedure — Court Procedure: From Pleadings to Appeal
 */
import type { KnowledgeTopic } from '../../types'

export const criminalJusticeCh02: KnowledgeTopic[] = [
  {
    id: "law-court-procedure",
    title: "Court Procedure: From Pleadings to Appeal",
    domain: "Law & Governance",
    field: "Criminal Justice",
    branch: "The Legal Machine",
    tier: "core",
    concepts: [
      "Jurisdiction, venue and standing",
      "Pleadings: framing the dispute",
      "Discovery: the evidence engine",
      "Motions and summary judgment",
      "Trial: judge, jury, verdict",
      "Appeal: reviewing error, not facts",
      "Why so few cases are tried",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A lawsuit is not an argument with a verdict at the end; it is a procedural machine built to make a private quarrel fit for public decision. In the United States, well under five per cent of federal civil cases ever reach trial — the rest settle, are dismissed, or die on summary judgment — and knowing the pipeline explains why: the stages exist to force information out of each side and prices into the room, so that by the time anyone could pick a jury, both sides can compute exactly what a trial is worth and usually prefer its price to its uncertainty. The evidence lesson in this domain covers what proof means at trial; this one covers the road a case travels to get there.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Procedure decides most cases without a jury ever being sworn. It tells you why lawsuits take years, why discovery costs more than trials, why the party with the documents has leverage, and where — exactly where — a dispute can be won early or priced into settlement. For anyone who will ever sue, be sued, or watch a trial on television and wonder why it is nothing like this, procedure is the operating system underneath.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Three gates open every case. Subject-matter jurisdiction: which court system has authority — state or federal, and within federal law, the limited categories Congress has assigned. Personal jurisdiction: the court's power over this defendant, which the US Supreme Court grounded in “minimum contacts” in International Shoe (1945) — you cannot be sued in Alaska for a contract signed and performed in Maine. Standing: the plaintiff must have a concrete, personal stake — injury, traceable to the defendant, fixable by the remedy. Get one gate wrong and the merits never come up; the machine returns “wrong door” before it ever reaches “right or wrong”.",
      },
      {
        kind: "para",
        text: "Pleadings frame the dispute. The complaint states the claims in short and plain form — and since the Supreme Court's Twombly (2007) and Iqbal (2009) decisions, must nudge them from conceivable to plausible. The defendant is served and must answer within weeks, raising affirmative defenses — most importantly the statute of limitations, which if applicable ends the case whatever its merits — and may bring counterclaims. Silence has a price: fail to respond and default judgment enters, the rough civil equivalent of forfeiting. The criminal mirror runs from charging (indictment or information) through arraignment and plea — over ninety per cent of federal convictions arrive by guilty plea, the parallel settlement machine.",
      },
      {
        kind: "para",
        text: "Discovery is the machine's heart and its cost centre. Each side may demand documents (including electronically stored email, chats and logs — modern litigation lives here), written interrogatories, admissions, and depositions: sworn, transcribed examinations that lock stories in place months before trial. The scope is anything relevant and proportional; fights over it (motions to compel, protective orders, sanctions including adverse inferences) are their own micro-litigation. Privilege — attorney-client and work-product — is the boundary. Discovery is where cases are won: the surprise witness of courtroom fiction barely exists in a system whose whole design is to eliminate surprise.",
      },
      {
        kind: "para",
        text: "Dispositive motions clear the field. A motion to dismiss says the complaint fails legally even if true. The great filter is summary judgment: where the undisputed facts entitle one side to judgment as a matter of law, the judge should enter it without a jury — and because the documents produced in discovery usually leave little genuinely disputed, this is where most civil cases that do not settle actually end. Expert evidence faces its own gatekeeping under Daubert (1993), the point where procedure shakes hands with the evidence lesson's standards of proof.",
      },
      {
        kind: "para",
        text: "Trial, when it comes, is a rarity priced accordingly. Jury selection (voir dire) and peremptory strikes — themselves limited by Batson's bar on strikes by race — precede openings, witnesses, cross and the standards the evidence lesson covers: preponderance in ordinary civil cases, beyond reasonable doubt in criminal. A verdict is followed by post-trial motions and judgment as a matter of law, and then the cost rules bite: the American rule has each side pay its own way, with statutory exceptions; the English rule makes losers pay, which pushes settlement even harder. Appeals are the final tier — and the most misunderstood: no new evidence, no new witnesses, just the record below, argued as preserved legal error under standards of review (questions of law reviewed fresh, findings of fact only for clear error, discretionary rulings for abuse). Win, and the case usually returns — a remand — to do some part of it again.",
      },
      {
        kind: "para",
        text: "Underneath the whole machine runs the economics that explains its shape. Litigation is a costly lottery: expected trial value is probability times judgment minus remaining costs, and both sides can usually compute it once discovery has narrowed the facts. The settlement band — the range of amounts both sides prefer to trial — is created by the shared costs and risks; discovery works by moving the parties' probability estimates toward each other until the band becomes obvious. Class actions (Rule 23: numerosity, commonality, typicality, adequacy) exist because a million tiny claims would otherwise never clear the machine's fixed costs — the procedure is the remedy's scale.",
      },
      { kind: "heading", text: "The Economics" },
      { kind: "formula", name: "Expected trial value", latex: "EV = p \\times D - C", meaning: "Probability of winning times the judgment, minus remaining litigation costs — the plaintiff's walk-away floor." },
      { kind: "formula", name: "The settlement band", latex: "S \\in [\\,pD - C_{p},\\;\\; pD + C_{d}\\,]", meaning: "Any settlement above the plaintiff's net trial value and below the defendant's expected total cost beats trial for both — which is why shared costs make deals, and why discovery narrows p until the band is visible." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a supplier sues a manufacturer for 480,000 of unpaid invoices; the manufacturer counterclaims 150,000 for defective components. Both estimate the supplier's net win probability at 55 per cent, and each faces 120,000 of remaining costs to trial. What happens?",
        "Compute the plaintiff's net trial value: 0.55 × 480,000 − 120,000 = 264,000 − 120,000 = 144,000 — anything above this is better than trial for the supplier.",
        "Compute the defendant's expected cost: 0.55 × 480,000 + 120,000 = 384,000 — anything below this beats trial for the manufacturer. The settlement band is 144,000 to 384,000: enormous, which predicts a deal but not its price.",
        "Let discovery work: the manufacturer deposes the supplier's quality manager and the emails show the defect complaints predated the disputed invoices — the win probability estimate moves to 75 per cent. The band tightens to (0.75 × 480,000 − 120,000) = 240,000 up to (0.75 × 480,000 + 120,000) = 480,000.",
        "State the result: with both sides' numbers now clustered, they settle at 300,000 with a mutual release — roughly the updated expected value, plus insurance for both sides' remaining risk. No jury, no trial, the machine's whole design: not to decide cases, but to make them decidable.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Demand letters and pre-suit strategy: most claims are priced and resolved before any complaint is drafted.",
        "Employment litigation: e-discovery of chats and calendars decides cases — the employment lesson's documentation runs into this machine.",
        "Insurance-backed defense: the insurer usually controls settlement within policy limits, a triangular negotiation the insurance lesson prices.",
        "Class actions: aggregation machinery for consumers, shareholders and data-breach victims who could never sue alone.",
        "Criminal plea bargaining: the same expected-value logic with liberty at stake — why over ninety per cent of convictions are pleas.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The television model is the enemy: no surprise witnesses, no courtroom oratory deciding document cases, and trials that run for weeks on schedules, not drama. Litigants err by ignoring deadlines — limitations and filing windows are kill shots no merit survives — and by treating “I'll see you in court” as strategy rather than a lottery ticket. Lawyers err by litigating to punish: discovery sanctions and fee awards follow scorched-earth. And appeals are not second trials: raise an argument for the first time on appeal and it is, with rare exceptions, gone — preservation is the price of review.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "personal jurisdiction", def: "The court's power over the defendant, grounded in minimum contacts with the forum." },
        { term: "pleadings", def: "The complaint and answer that frame the claims, defenses and counterclaims." },
        { term: "deposition", def: "Sworn pre-trial testimony, transcribed and locked, used to test and freeze stories." },
        { term: "summary judgment", def: "Judgment without trial where no genuine dispute of material fact remains — the civil machine's main filter." },
        { term: "statute of limitations", def: "The filing deadline for a claim; an affirmative defense that ends even valid cases." },
        { term: "standard of review", def: "The deference an appellate court owes each kind of ruling below — fresh for law, deferential for facts." },
        { term: "settlement band", def: "The range of outcomes both parties prefer to trial once expected value and costs are counted." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Summary judgment is properly granted when…",
          options: ["the jury cannot reach a verdict", "there is no genuine dispute of material fact and the movant is entitled to judgment as a matter of law", "the plaintiff misses a filing deadline", "an appeal is pending"],
          answer: 1,
          explain: "The court tries the record, not witnesses: undisputed facts plus law decide, which is why most non-settled civil cases end here.",
        },
        {
          q: "The central purpose of discovery is to…",
          options: ["delay trial dates", "compel disclosure of evidence and narrow the issues in advance of trial", "select jurors early", "preserve errors for appeal"],
          answer: 1,
          explain: "No surprise witnesses: the system trades secrecy for settlement precision.",
        },
        {
          q: "On appeal, the appellate court generally…",
          options: ["rehears the facts with new witnesses", "reviews the written record for preserved legal error under deferential standards", "retries damages from scratch", "substitutes its own verdict for the jury's"],
          answer: 1,
          explain: "Law is reviewed fresh, findings only for clear error, discretion for abuse — and arguments not raised below are usually forfeited.",
        },
        {
          q: "A plaintiff with a 55 per cent chance of a 480,000 verdict and 120,000 of remaining costs should rationally accept any settlement above…",
          options: ["600,000", "144,000", "480,000", "264,000"],
          answer: 1,
          explain: "Net trial value = 0.55 × 480,000 − 120,000 = 144,000 — the walk-away floor in the settlement-band arithmetic.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — the tort and contract lessons supply the substance this machinery moves, and the evidence lesson covers the trial's standards of proof. Follow with the tax lesson's administrative appeals for a parallel dispute track, and the constitutional lesson for where these courts' authority to say what the law is comes from. Exercise: find one recent appellate decision (any jurisdiction publishes them free) and identify the standard of review it applied — then find the one sentence where the outcome turned.",
      },
    ],
  },
]
