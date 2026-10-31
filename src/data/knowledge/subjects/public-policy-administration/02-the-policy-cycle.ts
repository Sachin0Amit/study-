/**
 * Knowledge Universe — Public Policy & Administration — Chapter 02: The Policy Cycle
 * 1 lesson · ~1,246 words
 * field: Public Policy
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Policy Machine]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 soc-public-policy-cycle — Public Policy: How Decisions Get Made
 */
import type { KnowledgeTopic } from '../../types'

export const publicPolicyAdministrationCh02: KnowledgeTopic[] = [
  {
    id: "soc-public-policy-cycle",
    title: "Public Policy: How Decisions Get Made",
    domain: "Social Sciences",
    field: "Public Policy",
    branch: "The Policy Machine",
    tier: "core",
    concepts: [
      "Kingdon's three streams and windows",
      "Carrots, sticks and sermons",
      "Street-level bureaucracy",
      "Randomized evaluation in government",
      "Cost-benefit analysis and discounting",
      "Goodhart and other failure modes",
    ],
    words: 1246,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "A law is not a policy. Between a legislature's vote and a changed life stand years of agenda fights, instrument choices, delivery chains and evaluations most citizens never see. Public policy studies that machinery: how problems get noticed, how governments choose among carrots, sticks and sermons, who actually delivers, and how anyone knows whether it worked. The policy cycle is a simplification — reality loops and skips — but it maps the machine." },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "Most policy failures are failures at a specific link — the instrument that mismatched the behavior, the street-level office with no resources, the evaluation nobody ran — not failures of intent. Knowing the stages tells you which link is being argued about and which is quietly broken." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "Why do some problems reach the agenda while others wait decades? John Kingdon's Agendas, Alternatives and Public Policies (1984) described three streams flowing independently: a problem stream of indicators and focusing events — a crash, a scandal, a disaster; a policy stream of solutions already circulating in what he called the “primeval soup”; and a politics stream of elections, administrations and national mood. Windows open briefly when streams align, and policy entrepreneurs — advocates with ready proposals — couple them into action. Seat-belt mandates moved this way; thousands of real problems still await their window." },
      { kind: "para", text: "Governments have three basic levers, catalogued as carrots, sticks and sermons by Bemelmans-Videc, Rist and Vedung. Sticks are regulation — mandates, standards, bans. Carrots are money — subsidies, taxes, transfers; a carbon tax and a solar credit are the same lever pointing opposite ways. Sermons are information — campaigns, labels, disclosure, on the theory that informed behavior changes. Christopher Hood's The Tools of Government adds the underlying resources: authority, treasure, organization, information. Modern design also borrows from behavioral science: defaults and choice architecture, per Thaler and Sunstein — small changes that quietly outperform both stick and pulpit." },
      { kind: "para", text: "Between legislation and outcome sits implementation. Pressman and Wildavsky's Implementation (1973) followed a federal job program through Oakland and found a chain of clearances so long that small per-step failure rates compounded into near-total non-delivery. Michael Lipsky's street-level bureaucracy (1980) named the other truth: teachers, police officers, caseworkers and clerks, working under chronic overload and impossible mandates, effectively remake policy through discretionary routines, rationing and triage. The policy that exists is the one the street enforces — serious reform invests in the front line, not only the statute." },
      { kind: "para", text: "Did it work? The strongest answer is randomization — the logic of clinical trials, brought into government by development economists Banerjee, Duflo and Kremer, now standard in what-works clearinghouses. When randomization is impossible — you cannot randomize a province — evaluators reach for natural experiments: difference-in-differences comparisons that subtract a comparison group's trend, or cutoff-based regression discontinuity designs. The research-methods lesson covers that machinery; the policy lesson is the culture shift — programs must show evidence before scaling, sunset clauses force re-authorization." },
      { kind: "para", text: "Policy choices compare unlike things — lives, time, clean air, money — and cost-benefit analysis forces the comparison into one currency. Transport departments price a statistical life; environmental rules monetize health gains; everything is discounted, so future benefits shrink by the discount rate — one quietly decisive parameter. The Stern-Nordhaus climate debate was at bottom an argument over one number: Stern's low rate implied aggressive immediate action, Nordhaus's higher rate gradualism." },
      { kind: "formula", name: "Net present value", latex: "\\text{NPV} = \\sum_{t=0}^{T} \\frac{B_t - C_t}{(1+r)^t}", meaning: "Benefits minus costs, each year discounted at rate r; a policy with positive NPV is in principle worth doing. The discount rate r quietly decides long-horizon cases like climate policy." },
      { kind: "para", text: "Failure modes recur so often they deserve names. Goodhart's law: when a measure becomes a target, it stops measuring — test-based accountability narrowed curricula. The cobra effect: rewards for killing cobras bred cobra farms. Layering: new instruments pile atop old ones without repeal, so the policy stack contradicts itself. Pilot decay: pilots succeed with extra staff and attention, then fail at scale. And the horizon problem: politicians' terms are short, evaluation timelines long, so credit rarely accrues to whoever earned it." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a job-training program ran in District A, open to all; District B is similar but untreated. No randomization was possible — did the program raise employment?",
        "Collect the four numbers: treatment district employment 40 to 55 per cent; comparison district 42 to 46 per cent, before and after.",
        "Reject the naive comparison: 55 versus 46 after the fact is wrong — District A started lower and the whole economy improved.",
        "Apply difference-in-differences: (55 − 40) − (46 − 42) = 15 − 4 = 11 points, the program's estimated effect net of the common trend.",
        "Check the key assumption: parallel trends — did the districts track each other in earlier years? If District A was already climbing faster before the program, part of the 11 points is drift, not treatment.",
        "Report with humility: an 11-point effect, credible under the assumption, plus cost per additional worker — the cost-benefit side decides whether to scale.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "What-works clearinghouses and evidence grants that fund programs contingent on trial results.",
        "Regulatory impact analysis required before major rules are finalized.",
        "Congestion pricing design, where sticks, prices and salience meet traffic engineering.",
        "Performance management systems — and their Goodhart failure modes — in schools and hospitals.",
        "Crisis response: focusing events route budgets through Kingdon's windows at speed.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "The cycle is a map, not a machine — policies skip stages, loop, or arrive fully formed by crisis. A successful pilot proves little about scale: extra staff, attention and hand-picked sites inflate early results. Averages hide distribution: a positive NPV can still mean concentrated losers, and who bears the cost is a question arithmetic cannot settle. The discount rate is a value judgment dressed as a technicality. And evaluation is political — inconvenient findings get shelved, so ask who funded the study." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "policy window", def: "A brief alignment of Kingdon's problem, policy and politics streams that permits action." },
        { term: "policy instruments", def: "The tools of intervention: regulation (sticks), money (carrots), information (sermons)." },
        { term: "street-level bureaucracy", def: "Lipsky's front-line workers whose discretion effectively remakes policy in practice." },
        { term: "difference-in-differences", def: "Evaluation design subtracting a comparison group's before-after trend from the treatment group's." },
        { term: "cost-benefit analysis", def: "Monetizing a policy's effects, discounted to present value, to test whether it is worth doing." },
        { term: "discount rate", def: "The rate at which future benefits and costs shrink in present-value calculations." },
        { term: "Goodhart's law", def: "When a measure becomes a target, it ceases to be a good measure." },
      ] },
      { kind: "quiz", items: [
        {
          q: "In Kingdon's multiple-streams model, a policy window opens when…",
          options: ["a bill reaches committee", "problem, policy and politics streams align", "the budget is passed", "courts strike down the old rule"],
          answer: 1,
          explain: "Windows are brief alignments; entrepreneurs with ready proposals couple the streams into action before the window closes.",
        },
        {
          q: "Lipsky's street-level bureaucrats matter because they…",
          options: ["write the statutes", "use discretion to remake policy in daily routines", "audit the agencies", "set the discount rate"],
          answer: 1,
          explain: "Under overload and broad mandates, front-line routines and triage decide what policy actually delivers.",
        },
        {
          q: "With treatment rising from 40 to 55 and comparison from 42 to 46, the difference-in-differences estimate is…",
          options: ["15 points", "11 points", "9 points", "4 points"],
          answer: 1,
          explain: "(55 − 40) − (46 − 42) = 15 − 4 = 11 points: the treatment group's gain minus the common trend.",
        },
        {
          q: "A higher discount rate in cost-benefit analysis…",
          options: ["favors future generations", "shrinks distant benefits, favoring delayed action", "has no effect on climate policy", "raises measured costs"],
          answer: 1,
          explain: "The Stern-Nordhaus dispute was precisely this: the rate quietly decides long-horizon questions.",
        },
      ] },
    ],
  },
]
