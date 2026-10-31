/**
 * Knowledge Universe — Regulatory & Workplace Law — Chapter 01: Tax & Administrative Law
 * 1 lesson · ~1,634 words
 * field: Tax & Administrative Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Tax & Administrative Law]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 law-tax-fundamentals — Tax Law: Brackets, Deductions and Audits
 */
import type { KnowledgeTopic } from '../../types'

export const regulatoryWorkplaceLawCh01: KnowledgeTopic[] = [
  {
    id: "law-tax-fundamentals",
    title: "Tax Law: Brackets, Deductions and Audits",
    domain: "Law & Governance",
    field: "Tax & Administrative Law",
    branch: "Everyday Law",
    tier: "core",
    concepts: [
      "What makes a tax a tax",
      "Progressive brackets and marginal rates",
      "From gross income to taxable income",
      "Deductions versus credits",
      "Audits, appeals and burden of proof",
      "Avoidance versus evasion",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "“In this world nothing can be said to be certain, except death and taxes,” wrote Benjamin Franklin in 1789, and tax has only grown since: income taxes, payroll taxes, value-added taxes, property taxes, capital gains, estates. Tax law is the most administered law most people ever touch — millions of filings a year, processed by an agency with matching documents, scoring models and its own court system. It is also administrative law running at full throttle: parliament writes the statute, but a revenue authority fills it with rules, forms and enforcement. This lesson is the machinery every filer navigates, from the first line of gross income to the audit letter nobody expects.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Most taxpayers misunderstand brackets — refusing a raise “because it would push me into a higher bracket” is a category error that costs real money — and fear audits far out of proportion to their frequency, which for individuals runs well under one per cent a year. Knowing how the pipeline fits together converts April from folklore into procedure, and it is the doorway to administrative law: the same agency-plus-appeals structure runs environmental, securities and immigration review.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A tax is a compulsory, unrequited payment to government — you owe it whether or not you use the service, which distinguishes it from a fee or a fine. Every tax system balances three goals in tension. Equity: horizontal (equals treated equally) and vertical (higher capacity pays more) fairness, judged by ability to pay. Efficiency: taxes change behaviour — the elasticity lesson in Business & Economics shows who actually bears a tax and the deadweight loss it creates. Simplicity: every line of complexity is an invitation to avoid, an enforcement headache, or both. Adam Smith's 1776 canons — equity, certainty, convenience, economy — said it first and shorter.",
      },
      {
        kind: "para",
        text: "An income tax runs on a pipeline. Start with gross income — wages, salaries, interest, dividends, business profit, generally worldwide for US persons. Subtract above-the-line adjustments (retirement contributions in some systems, student-loan interest in others). Then subtract the larger of the standard deduction or itemised deductions (mortgage interest, charitable gifts, state taxes up to caps) to reach taxable income. Apply the rate brackets to that, then subtract credits. What remains is the balance due — or the refund, if withholding and prepayments exceeded it. The everyday lesson on reading a paycheck covers the withholding side of this machine.",
      },
      {
        kind: "para",
        text: "Brackets confuse because they are marginal, not average. A progressive schedule taxes your first dollars at a low rate and only the dollars above each threshold at the next rate; crossing into a higher bracket raises tax on the marginal dollars alone — never on the income below the line. The average (effective) rate is total tax divided by income, and it is always below your top marginal rate. Flat-rate systems apply one rate; regressive structures — payroll taxes capped at an earnings ceiling, or sales taxes that consume a bigger share of small budgets — take proportionally more from lower incomes.",
      },
      {
        kind: "para",
        text: "Deductions and credits sound alike and work completely differently. A deduction shrinks taxable income, so its value is the amount times your marginal rate: a 1,000 deduction saves 220 for a taxpayer in the 22 per cent bracket, and nothing for someone with no tax liability. A credit shrinks the tax itself, dollar for dollar — the same 1,000 credit saves 1,000 for anyone with at least that much tax, and refundable credits pay out even beyond it. That asymmetry is why credits are the sharper anti-poverty instrument and why legislators fight over them.",
      },
      {
        kind: "para",
        text: "Administration is a machine of matching and scoring. Employers, banks and brokers file information returns (W-2s and 1099s in the United States) that the authority cross-checks against your filing — most “audits” are computer letters flagging a mismatch. Selection models score returns for anomaly; a tiny fraction become field audits. Disputes run through layers: examination, an independent administrative appeal, then litigation — in the United States before the Tax Court, where you may contest without first paying, or a refund court after paying. Civil disputes turn on the balance of probabilities; criminal evasion requires proof beyond reasonable doubt, the standard the evidence lesson in this domain unpacks. Penalties escalate accordingly: accuracy penalties, substantial-understatement penalties, fraud penalties — and, as Al Capone learned in 1931, prison.",
      },
      {
        kind: "para",
        text: "Avoidance versus evasion is the field's bright line. Avoidance is legal arrangement of affairs to minimise tax — timing income, choosing entities, using enacted deductions; Judge Learned Hand put it in 1934: anyone may so arrange his affairs that his taxes shall be as low as possible. Evasion is wilful misstatement — concealing income, fake deductions, offshore secrecy. Between them lies contested ground: transactions with no economic substance beyond the tax label, which courts and doctrines like the US economic-substance rule and the OECD's international project on base erosion attack, with varying success. The line moves; the principle — legality turns on disclosure and substance, not cleverness — does not.",
      },
      { kind: "heading", text: "The Arithmetic" },
      { kind: "formula", name: "Tax from brackets", latex: "T = \\sum_{i} r_i \\, \\times \\text{(income falling in bracket } i)", meaning: "Each rate applies only to the slice of taxable income inside its band — the source of the marginal-versus-average distinction." },
      { kind: "formula", name: "Effective (average) rate", latex: "t_{\\text{eff}} = \\frac{T}{\\text{gross income}}", meaning: "Total tax over total income; always below the top marginal rate in a progressive system." },
      { kind: "formula", name: "Value of a deduction", latex: "V = d \\times r_{\\text{marginal}}", meaning: "A deduction of amount d is worth d times your marginal rate — a credit of the same size is worth d." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: using rounded figures from a recent US tax year, compute the tax for a single filer with 70,000 of wages, the 14,600 standard deduction, and a 1,500 education credit. Brackets: 10 per cent on the first 11,600; 12 per cent up to 47,150; 22 per cent above that.",
        "Reach taxable income: 70,000 − 14,600 = 55,400.",
        "Walk the brackets: 10 per cent × 11,600 = 1,160; 12 per cent × (47,150 − 11,600) = 12 per cent × 35,550 = 4,266; 22 per cent × (55,400 − 47,150) = 22 per cent × 8,250 = 1,815.",
        "Sum and apply the credit: 1,160 + 4,266 + 1,815 = 7,241; minus the 1,500 credit = 5,741 of tax.",
        "State the result: effective rate on gross income = 5,741 ÷ 70,000 ≈ 8.2 per cent, marginal rate 22 per cent — a 1,000 raise adds only 220 of tax, and a 1,000 deduction would save exactly that 220, while the 1,500 credit saved the full 1,500.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Filing strategy: bunching two years of charitable gifts into one year to clear the standard-deduction hurdle makes itemising actually pay.",
        "Entity choice: the corporate-law lesson in this domain shows how pass-through versus corporate taxation shapes how founders organise.",
        "Investment timing: tax-loss harvesting and holding periods are avoidance in its plainest, most legal form.",
        "Payroll compliance: small businesses live inside information-return matching — most disputes begin as paperwork mismatches.",
        "Cross-border work: residency tests and treaties (covered in the treaty lesson) decide which country taxes a mobile professional.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The bracket myth is the costliest: only marginal dollars are taxed at the new rate, so a raise never reduces take-home pay. Deduction ≠ credit — worth marginal rate versus dollar-for-dollar. Audit folklore (“home-office deductions trigger audits”) outruns the evidence; matching errors and round-number inventories draw the letters. A large refund is not a windfall — it was an interest-free loan to the treasury. And treating all tax-minimising talk as shady confuses legal avoidance, which every filer practises, with evasion, which is criminal — while forgetting that aggressive schemes sit on a contested border where penalties live.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "marginal rate", def: "The tax rate applied to the next unit of income — the bracket your top dollars occupy." },
        { term: "effective rate", def: "Total tax divided by total income; the average across brackets." },
        { term: "taxable income", def: "Gross income minus adjustments and deductions; the base the brackets apply to." },
        { term: "standard deduction", def: "A flat no-questions subtraction taken by most filers instead of itemising." },
        { term: "tax credit", def: "A dollar-for-dollar reduction of tax itself; refundable credits can pay beyond liability." },
        { term: "information return", def: "A third-party report (W-2, 1099) the authority matches against filings — the audit machine's raw input." },
        { term: "tax evasion", def: "Wilful misstatement or concealment; a crime, unlike legal avoidance." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "A raise pushes a filer's top dollars into a higher bracket. The filer's take-home pay…",
          options: ["can fall below its old level", "still rises — only the dollars above the threshold are taxed at the higher rate", "is unchanged by law", "is taxed entirely at the new rate"],
          answer: 1,
          explain: "Brackets are marginal: the raise is taxed at the higher rate only above the threshold, so net pay always increases.",
        },
        {
          q: "At a 22 per cent marginal rate, a 1,000 deduction saves ___, while a 1,000 credit saves ___.",
          options: ["220 and 1,000", "1,000 and 220", "220 and 220", "780 and 1,000"],
          answer: 0,
          explain: "Deductions shrink the base by their value times the marginal rate; credits shrink the tax dollar for dollar.",
        },
        {
          q: "Avoidance versus evasion is correctly stated as…",
          options: ["both are crimes of differing severity", "avoidance is legal structuring within the rules; evasion is wilful misstatement or concealment", "avoidance applies only to corporations", "the terms are synonyms since 1931"],
          answer: 1,
          explain: "Learned Hand's line: arranging affairs for the lowest lawful tax is avoidance; hiding income is criminal evasion.",
        },
        {
          q: "Most taxpayer disputes with the revenue authority are resolved by…",
          options: ["jury trials", "document matching, correspondence audits and administrative appeals", "grand juries", "presidential pardon"],
          answer: 1,
          explain: "Information-return matching flags most mismatches; letters and appeals — not courtrooms — close the overwhelming majority.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — the arithmetic is percentages. Follow with the separation-of-powers lesson for the administrative state's legitimacy, the corporate-law lesson for entity taxation, and the treaty lesson for double-taxation agreements. Exercise: read the first page of a real income-tax return and identify each pipeline stage — gross income, adjustments, deductions, brackets, credits — on the form itself.",
      },
    ],
  },
]
