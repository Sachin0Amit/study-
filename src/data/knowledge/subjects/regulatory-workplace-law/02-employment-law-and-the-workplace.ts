/**
 * Knowledge Universe — Regulatory & Workplace Law — Chapter 02: Employment Law & the Workplace
 * 1 lesson · ~1,556 words
 * field: Employment Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Employment Law]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 law-employment-labor — Employment and Labor Law: The Rulebook of Work
 */
import type { KnowledgeTopic } from '../../types'

export const regulatoryWorkplaceLawCh02: KnowledgeTopic[] = [
  {
    id: "law-employment-labor",
    title: "Employment and Labor Law: The Rulebook of Work",
    domain: "Law & Governance",
    field: "Employment Law",
    branch: "The Workplace",
    tier: "core",
    concepts: [
      "Employee versus independent contractor",
      "At-will employment and its limits",
      "Wage and hour law",
      "Discrimination and protected characteristics",
      "Harassment and employer liability",
      "Unions and collective bargaining",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "For most adults, the densest regulation ever navigated is not tax but work: who counts as an employee, what must be paid for which hours, which questions an interviewer may not ask, what a dismissal requires. The field splits in two. Individual employment law sets the floor under the employment contract — wages, hours, safety, anti-discrimination. Labor law governs the collective side: unions, bargaining and the strike. Both exist because the employment relationship is structurally lopsided — the employer holds the payroll — and a century of statutes has been bolted under it, one scandal at a time.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "These statutes price almost every workplace decision a manager makes: the job ad, the interview, the promotion, the dismissal. For workers they are the difference between a grievance and a remedy. Misclassification alone — calling an employee a contractor — shifts billions in unpaid overtime and payroll tax every year, and the wage-computation skills in this lesson are the ones employment lawyers actually use weekly.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The threshold question is status: employee or independent contractor? Agencies look past labels to substance — who controls how the work is done, who supplies tools, whether the relationship is continuous and exclusive, who bears profit-and-loss risk. Employees get the full protective package (minimum wage, overtime, unemployment insurance, anti-discrimination statutes); contractors get contract law and market freedom. Employers save roughly 20 to 30 per cent per worker by misclassifying, which is why gig-economy classification — California's 2019 ABC test and the ballot fights that followed it — is the field's loudest battleground.",
      },
      {
        kind: "para",
        text: "In the United States the default rule is employment at will: either side may end the relationship at any time for any reason — with the crucial qualification, any reason that is not itself unlawful. Most of the world instead requires cause or notice: continental systems and the UK run unfair-dismissal regimes with severance scales. Even in at-will jurisdictions the exceptions swallow chunks of the rule: dismissals based on protected characteristics, retaliation for exercising legal rights (workers' comp claims, wage complaints), public-policy firings, and implied contracts from handbooks and promises. “At-will” never means “above the law.”",
      },
      {
        kind: "para",
        text: "The wage-and-hour floor is the Fair Labor Standards Act of 1938. It sets a federal minimum wage (7.25 dollars since 2009, with many states higher) and requires overtime at one-and-a-half times the regular rate beyond 40 hours a week — for non-exempt workers only. The exemptions are the trap: executive, administrative and professional employees paid on salary above a threshold (in the high hundreds of dollars weekly, periodically revised and litigated) are exempt if their actual duties involve real discretion, supervision or learned profession. A title on a business card confers nothing; duties and salary together do. Hours worked off the clock — prep, cleanup, answering email at night — count.",
      },
      {
        kind: "para",
        text: "Anti-discrimination law begins with Title VII of the Civil Rights Act of 1964: race, colour, religion, sex and national origin — with “sex” extended by the Pregnancy Discrimination Act and, in 2020's Bostock decision, to sexual orientation and gender identity. The Age Discrimination Act (1967), the Americans with Disabilities Act (1990, with its duty of reasonable accommodation) and genetic-information law complete the federal set. Disparate treatment is intentional discrimination; disparate impact, from Griggs v. Duke Power (1971), is a neutral rule that screens out a protected group without business necessity — the doctrine that put written tests and diploma requirements under legal scrutiny.",
      },
      {
        kind: "para",
        text: "Proof runs by burden-shifting, the McDonnell Douglas framework from 1973: the worker shows a prima facie case (membership in the protected class, qualification, adverse action, similarly situated others treated better); the employer articulates a legitimate reason; the worker shows that reason is pretext. Harassment splits into quid pro quo (conditioned benefits) and hostile environment (severe or pervasive conduct); since 1998 employers respond-able have an affirmative defence — a real policy, a complaint channel, and the employee's unreasonable failure to use them — which is why every handbook on earth now contains the same page. Retaliation claims — punishment for complaining — are the most-filed category of all, and the easiest to lose.",
      },
      {
        kind: "para",
        text: "Labor law is the collective half. The Wagner Act (1935) granted private-sector workers the right to organise, chose unions by majority vote as exclusive bargaining representatives, and made refusing to bargain an unfair practice; the Taft-Hartley Act (1947) added union-side duties and let states ban union-security agreements — the “right-to-work” belt. The National Labor Relations Board polices both sides. US private-sector union density has fallen from about a third of workers in the mid-1950s to near 6 per cent today, while public-sector density remains several times higher — a divergence that keeps the field politically incandescent.",
      },
      { kind: "heading", text: "The Arithmetic" },
      { kind: "formula", name: "Overtime pay", latex: "W_{\\text{OT}} = 1.5 \\times r \\times h_{\\text{over 40}}", meaning: "Hours beyond 40 in a workweek are paid at one-and-a-half times the regular hourly rate, for non-exempt employees." },
      { kind: "formula", name: "Regular rate from a salary", latex: "r = \\frac{\\text{weekly salary}}{40}", meaning: "A salaried non-exempt worker's overtime rate is built from the implied hourly rate — misclassification does not erase the premium." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a coffee chain pays a 900-dollar weekly salary to an “assistant manager” who works 50 hours, mostly on register and espresso, hiring no one and setting no schedules. What does the FLSA require?",
        "Test the exemption: salary basis is satisfied, but the executive exemption needs genuine management — directing two or more full-timers and hiring authority. Duties fail; the worker is non-exempt despite the title.",
        "Compute the regular rate: 900 ÷ 40 = 22.50 per hour.",
        "Compute weekly overtime: 10 hours over 40 × (1.5 × 22.50 = 33.75) = 337.50 owed per week.",
        "State the result: over two years, back wages ≈ 337.50 × 104 ≈ 35,100 — and liquidated damages can double it to about 70,200, before the retaliation question even starts if the worker was demoted after asking. The label on the badge was worth nothing; the duties and the arithmetic decided.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Handbooks and complaint channels: the harassment defence lives or dies on a policy people actually know and trust.",
        "Interviews: questions about age, family plans, religion or health convert lawful curiosity into evidence.",
        "Reductions in force: selection criteria documented against performance, not protected characteristics, are the employer's armour.",
        "Gig platforms: classification tests now decide whether drivers are employees in whole legal systems, not single lawsuits.",
        "Union campaigns: bargaining cycles, strike funds and decertification windows are calendar items labour lawyers live by.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The deadly trio: assuming at-will covers any reason (unlawful reasons stay unlawful); assuming a title or salary creates an exemption (duties, not labels); assuming a signed contractor agreement settles status (substance controls, always). Workers err by waiting — retaliation deadlines run short and evidence disappears with the shift roster. Managers err by punishing the complaint instead of the conduct — retaliation claims are frequently stronger than the underlying case that prompted them. And harassment law's standard is severe-or-pervasive, not one off-color joke — though the safe response to the first one is still the cheapest.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "at-will employment", def: "US default: either party may end the relationship any time, for any lawful reason." },
        { term: "exempt / non-exempt", def: "FLSA categories: exempt employees (salary plus qualifying duties) earn no statutory overtime; non-exempt do." },
        { term: "misclassification", def: "Labelling an employee an independent contractor — shifting taxes, overtime and benefits away unlawfully." },
        { term: "disparate impact", def: "A facially neutral rule that disproportionately burdens a protected group without business necessity." },
        { term: "burden-shifting", def: "The McDonnell Douglas sequence: prima facie case, legitimate reason, pretext." },
        { term: "hostile work environment", def: "Harassment severe or pervasive enough to alter conditions of employment." },
        { term: "exclusive representation", def: "The union chosen by majority vote bargains for the whole unit — the Wagner Act's core design." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "A salaried “assistant manager” earning 900 a week works 50 hours doing routine counter work. Under the FLSA they are most likely…",
          options: ["exempt — salary plus title settles it", "non-exempt: the executive exemption requires genuine managerial duties, so overtime is owed", "an independent contractor", "outside the statute entirely"],
          answer: 1,
          explain: "Exemption turns on salary basis plus actual duties; a badge and a salary cannot conjure supervision that does not exist.",
        },
        {
          q: "A neutral hiring test that screens out a protected group without business necessity is…",
          options: ["disparate treatment", "disparate impact under Griggs", "a bona fide occupational qualification", "permissible screening"],
          answer: 1,
          explain: "Griggs v. Duke Power made impact without necessity a violation — intent is not required.",
        },
        {
          q: "At-will employment means an employer may dismiss a worker…",
          options: ["for literally any reason whatsoever", "for any reason that is not itself unlawful — discrimination and retaliation remain barred", "only for documented cause", "only with statutory notice"],
          answer: 1,
          explain: "At-will removes the need for cause, not the overlay of protective statutes.",
        },
        {
          q: "The McDonnell Douglas framework orders proof as…",
          options: ["verdict first, evidence later", "plaintiff's prima facie case, then the employer's legitimate reason, then pretext", "arbitration, then mediation, then trial", "audit, appeal, enforcement"],
          answer: 1,
          explain: "Each side gets a turn carrying the burden — the structure every discrimination case since 1973 has followed.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — the contract lesson in this domain is the natural companion, since all of this bolts onto the employment contract. Follow with the court-procedure lesson for how these claims are actually litigated, the leadership lesson in Business & Economics for the management side of the same problems, and the tax lesson for the payroll withholding that rides on status. Exercise: read any job posting and mark which lines exist for legal rather than business reasons.",
      },
    ],
  },
]
