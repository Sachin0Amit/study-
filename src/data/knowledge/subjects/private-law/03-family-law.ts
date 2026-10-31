/**
 * Knowledge Universe — Private Law: Contracts, Torts & Family — Chapter 03: Family Law
 * 1 lesson · ~1,668 words
 * field: Private Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Family Law]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 law-family — Family Law: Marriage, Divorce and Custody
 */
import type { KnowledgeTopic } from '../../types'

export const privateLawCh03: KnowledgeTopic[] = [
  {
    id: "law-family",
    title: "Family Law: Marriage, Divorce and Custody",
    domain: "Law & Governance",
    field: "Private Law",
    branch: "Family Law",
    tier: "core",
    concepts: [
      "Marriage as a legal status",
      "Separate versus marital property",
      "No-fault divorce",
      "Custody and the best-interests standard",
      "Child support guidelines",
      "Prenuptial agreements and protective orders",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A wedding looks like a ceremony; legally it is a merger. Marriage rewrites property ownership, inheritance rights, hospital decision-making, spousal support duties and even testimony privileges — mostly without either party reading the terms. Divorce is the unwinding of that partnership, typically with the worst-written contract either side has ever signed and the highest emotional stakes in private law. Family law is where the discipline's cool machinery — classification, formulas, standards of review — runs on the hottest material it ever touches, and why its doctrine is the story of the law slowly accepting that households dissolve and re-form, and designing honest rules for it.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Most adults will touch this machinery directly — a marriage, a break-up, a custody schedule, a protective order — and the amounts at stake (a house, a pension, eighteen years of support) are life-changing in either direction. The law's default rules apply whether or not you know them, and the people who learn them before the crisis keep houses and pensions; the people who learn them during it pay for the tuition with the same assets.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Marriage is a legal status conferred by the state, with entry requirements: capacity (age, no existing marriage), consent, a licence or ceremony depending on the system. The law's history here is a history of dismantled exclusions — interracial bans fell with Loving v. Virginia in 1967, and same-sex couples won the right to marry across the United States with Obergefell in 2015. Cohabitation, by contrast, confers almost none of it: unmarried partners typically leave a long relationship with far less than either expected, which is the gap cohabitation agreements exist to fill. A handful of US jurisdictions still recognise common-law marriage from behaviour and intent — nowhere is there a seven-year rule; that is folklore.",
      },
      {
        kind: "para",
        text: "On divorce, everything turns on classifying property. Separate property — owned before the marriage, plus gifts and inheritances received during it and kept separate — leaves with its owner. Marital property — acquired during the marriage, regardless of whose name is on the title — gets divided. The division regimes differ: the nine US community-property states treat marital assets as owned half-and-half from acquisition, while equitable-distribution jurisdictions divide them fairly in light of the marriage's length, each spouse's contribution and earning capacity — fair, not necessarily equal. Commingling is the classic trap: deposit an inheritance into a joint account used for household bills, and separate property quietly transmutes into marital.",
      },
      {
        kind: "para",
        text: "The procedure itself was revolutionised by no-fault divorce. California adopted it in 1969; the last US state followed in 2010. A petitioner files, temporary orders settle who lives where pending the case, both sides exchange financial disclosures (the hiding of assets being the field's oldest sin), and the overwhelming majority settle through negotiation or mediation rather than trial — the court-procedure lesson explains why. Fault survives in vestigial form: it can still colour alimony in some systems and pre-nuptial enforcement in others. The bargaining that matters most is over the two things money cannot price directly: children and the calendar.",
      },
      {
        kind: "para",
        text: "Custody comes in two separable halves: legal custody (who decides schooling, medical care, religion) and physical custody (where overnights happen), each potentially sole or joint. The governing standard everywhere is the best interests of the child — a deliberately multi-factor inquiry: stability, each parent's caregiving history, the child's own wishes at sufficient maturity, safety. The standard displaced two predecessors that history discredited: the tender-years presumption (mothers, automatically) and, before it, the common-law rule that fathers, automatically. Gender neutrality is now explicit; outcomes still track caregiving patterns, which is evidence, not preference. Relocation disputes — a custodial parent wanting to move away — are the field's hardest cases, and jurisdiction runs on the child's home state under uniform acts.",
      },
      {
        kind: "para",
        text: "Support is the most formulaic corner. Child support is not a favour to the custodial parent but the child's right, enforced by payroll garnishment and contempt. Most US systems use income-shares guidelines: combine both parents' incomes, look up the basic support a child of that income level needs, and split it pro rata to income, with add-ons for childcare and health insurance. Alimony (spousal maintenance) is the discretionary remainder: rehabilitative awards dominate — time-limited support to re-skill a spouse who sacrificed earning power during the marriage — with amount and duration driven by marriage length, need, and the standard of living built.",
      },
      {
        kind: "para",
        text: "Two instruments frame everything. A prenuptial agreement — signed in advance of the wedding, with full financial disclosure and the chance for independent counsel — can fix property division and alimony in advance, but cannot pre-determine child support or custody, which remain the court's to set by best interests at the time. And protective orders address family violence: an emergency ex parte order on one side's testimony, followed within days by a hearing with both parties present; violation is contempt or crime. They are family law's intersection with the state's police power, and its most consequential paperwork.",
      },
      { kind: "heading", text: "The Arithmetic" },
      { kind: "formula", name: "Income-shares child support", latex: "CS = G(Y_{1} + Y_{2}) \\times \\frac{Y_{\\text{obligor}}}{Y_{1} + Y_{2}}", meaning: "Guideline support G for the combined income, multiplied by the obligor parent's income share — plus pro-rata add-ons." },
      { kind: "formula", name: "Community-property exit", latex: "W_{i} = S_{i} + \\tfrac{1}{2} M", meaning: "Each spouse leaves with their separate property plus half the marital pool in a community-property regime." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: after a 12-year marriage with one child, the couple owns house equity of 240,000, a joint retirement account of 110,000, her pre-marital savings of 60,000 kept in her own account, and his 90,000 inheritance kept in a separate brokerage account. Mother has physical custody; father earns 7,500 a month, mother 3,500. Divide property and set support.",
        "Classify: marital property = 240,000 + 110,000 = 350,000 (bought and accrued during marriage); separate property = her 60,000 and his 90,000 (pre-marital and inheritance, never commingled) — those leave with their owners.",
        "Divide the marital pool: 350,000 ÷ 2 = 175,000 each — the equity-versus-pension split is negotiable (the formula says value, not which asset), typically traded against liquidity needs.",
        "Compute child support: combined income 11,000; guideline basic support for one child at that level ≈ 1,650; father's share = 7,500 ÷ 11,000 ≈ 68 per cent → 1,122, plus pro-rata childcare of 400 × 68% ≈ 272 → about 1,394 monthly.",
        "State the result: with a 12-year marriage in which she paused her career, the court adds rehabilitative alimony — here illustratively 1,200 monthly for four years — and the estate division reflects contribution, not blame: no-fault means the arithmetic, not the grievances, sets the exit terms.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Prenups: negotiated when both parties like each other, which is why they hold up better than the myths claim — disclosure and counsel are the requirements.",
        "Inheritance protection: keeping gifted or inherited funds in separately titled accounts is the single cheapest asset-protection move in the field.",
        "Mediation: a mediated divorce costs thousands where a litigated one costs tens of thousands — the procedure lesson's settlement logic, priced.",
        "Cohabitation agreements: the opt-in contract for the growing share of couples outside marriage's defaults.",
        "Protective-order practice: emergency hearings within days, with strict evidence thresholds balancing safety against error.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The folklore is thick here. Common-law marriage after seven years exists nowhere. “Whose name it's in” does not decide property — when it was acquired does, and commingling can transmute separate into marital. Children do not get to choose at a fixed age; their wishes are one factor that gains weight with maturity. Mothers do not win custody by operation of law — caregiving history wins. Paying child support buys no visitation, and withholding it erases none. And a prenup drafted without disclosure or independent counsel is a prenup the weaker party can later void — the requirements are the point, not the signature.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "marital property", def: "Assets acquired during the marriage, divided at divorce regardless of title." },
        { term: "separate property", def: "Pre-marital assets and gifts or inheritances kept separate; they leave with the owner unless commingled." },
        { term: "community property", def: "The nine-state regime treating marital acquisitions as owned half-and-half from the start." },
        { term: "no-fault divorce", def: "Dissolution on irreconcilable differences alone, without proof of wrongdoing." },
        { term: "legal versus physical custody", def: "Decision-making authority versus residential time — each independently sole or joint." },
        { term: "best-interests standard", def: "The multi-factor test governing custody, centred on the child rather than either parent." },
        { term: "rehabilitative alimony", def: "Time-limited spousal support designed to restore earning capacity sacrificed in the marriage." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "An inheritance received during the marriage and kept in a separately titled account is generally…",
          options: ["marital property", "separate property — unless commingled into joint accounts", "divided 90/10 by statute", "held in trust for the children"],
          answer: 1,
          explain: "Gifts and inheritances stay separate; commingling with marital funds is what transmutes them.",
        },
        {
          q: "Under an income-shares guideline with incomes of 7,500 and 3,500, the higher earner's share of guideline support is about…",
          options: ["one half", "68 per cent", "100 per cent", "whatever the custodial parent requests"],
          answer: 1,
          explain: "7,500 of the 11,000 combined income is about 68 per cent — the pro-rata logic of the guidelines.",
        },
        {
          q: "A prenuptial agreement is most vulnerable when…",
          options: ["it was signed months before the wedding", "there was no financial disclosure or independent counsel, or it is unconscionable", "it covers property division only", "the marriage lasted over ten years"],
          answer: 1,
          explain: "Disclosure, counsel and conscionability are the enforcement tests; timing in advance is expected, not a defect.",
        },
        {
          q: "Legal custody, as distinct from physical custody, refers to…",
          options: ["overnights and school enrollment", "major decision-making: schooling, medical care, religion", "the right to relocate", "the duty of support"],
          answer: 1,
          explain: "The two can be split differently — a parent can share decisions while the child lives primarily elsewhere.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — the contract lesson in this domain is the companion, since marriage and prenups are contracts with status effects. Follow with the court-procedure lesson for how contested cases actually run, the tort lesson for the civil side of family violence, and the sociology of family institutions in Social Sciences for why the defaults keep moving. Exercise: list which assets in a household you could classify as separate versus marital today, and what evidence would prove it.",
      },
    ],
  },
]
