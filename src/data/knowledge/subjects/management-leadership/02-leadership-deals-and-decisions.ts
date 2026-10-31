/**
 * Knowledge Universe — Management & Leadership — Chapter 02: Leadership, Deals & Decisions
 * 2 lessons · ~3,110 words
 * field: Management & Leadership
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Management & Leadership]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 mgt-negotiation-batna — Negotiation: Interests, BATNA and the Zone of Agreement
 *   02.2 mgt-leadership-team-dynamics — Leadership and Team Dynamics
 */
import type { KnowledgeTopic } from '../../types'

export const managementLeadershipCh02: KnowledgeTopic[] = [
  {
    id: "mgt-negotiation-batna",
    title: "Negotiation: Interests, BATNA and the Zone of Agreement",
    domain: "Business & Economics",
    field: "Management & Leadership",
    branch: "Deals & Decisions",
    tier: "core",
    concepts: [
      "Positions versus interests",
      "BATNA: the power to walk away",
      "Reservation prices and the ZOPA",
      "Creating versus claiming value",
      "Anchors and first offers",
      "Principled negotiation and ethics",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Two identical houses sell on the same street; one fetches fifteen per cent more than the other, and the difference is not the houses. Negotiation — over salaries, cars, mergers, treaties and bedtimes — is where preparation quietly converts into money, and it is a craft with an actual theory. The Harvard Negotiation Project, crystallised in Fisher and Ury's 1981 classic Getting to Yes, replaced the folklore of bluffs and bravado with a small set of load-bearing ideas: interests, alternatives, and the zone of agreement between them. Learn those three and most negotiations stop being contests of nerve.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "A single negotiated raise early in a career compounds through every subsequent salary, exactly as the compound-interest lesson in this domain predicts — thousands of salary-dollars ride on one conversation. The same toolkit prices mergers, settles lawsuits (the procedure lesson in Law & Governance shows how) and settles family schedules. Nothing else in business pays so reliably per hour of preparation.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The founding distinction is positions versus interests. A position is what someone says they want — the orange, the 85,000 salary, the Monday deadline. An interest is why they want it. The parable: two sisters each claim the last orange; they compromise and split it, whereupon one squeezes her half for juice and the other grates her half's peel for a cake. Both could have had whole fruit. Behind most opposed positions lie shared interests and compatible differences; the negotiator's first job is to ask why until the interests surface.",
      },
      {
        kind: "para",
        text: "Your BATNA — best alternative to a negotiated agreement — is your power source. It is not your dream outcome or your budget; it is the concrete course you will take if this deal dies: the other job offer, the other buyer, the courtroom, the status quo. A negotiator with a strong BATNA can walk, and everyone senses it; one who needs this deal pays for the need. Hence the discipline: never negotiate to improve your BATNA — improve your BATNA to negotiate. Get the competing offer, line up the second supplier, before you sit down.",
      },
      {
        kind: "para",
        text: "From the BATNA comes the reservation price — the worst terms you will accept before walking — and from two reservation prices comes the ZOPA, the zone of possible agreement between them. If the seller's floor is 9,000 and the buyer's ceiling is 11,500, any price in that band beats both parties' alternatives. If the buyer's ceiling is 8,500, the ZOPA is negative and the correct outcome is no deal — a good walk-away is a success, not a failure. Most bad agreements come from never discovering the zone was empty, or from agreeing inside your own reservation price out of fatigue or need.",
      },
      {
        kind: "para",
        text: "Value is created, then claimed. Distributive negotiation divides a fixed pie — one price, one number, my gain your loss. Integrative negotiation grows the pie first: logrolling trades issues the parties value differently (you care about start date, they care about title); contingency agreements bet differences of forecast instead of fighting them (payment scales with performance); and multiple equivalent offers let the other side reveal preferences by choosing. The masters sequence these: create value across many issues, then claim it on the one that matters most. Single-issue negotiations — price only — are where both sides lose the most.",
      },
      {
        kind: "para",
        text: "Anchoring is the psychology that prices the room: the first number spoken pulls the final settlement toward it, as the behavioural-economics lesson in this domain documents. When you know the market, make the first offer and make it ambitious-but-defensible; when you are poorly informed, let them anchor, then re-anchor explicitly (“that number is miles from the market — let's start from the data”). A range can soften an anchor's arrogance; a rationale strengthens it. The anchor is not a trick — it is a statement of where you believe the ZOPA sits.",
      },
      {
        kind: "para",
        text: "Getting to Yes compresses the ethics into four rules: separate the people from the problem (be soft on persons, hard on issues); focus on interests, not positions; generate options for mutual gain before judging; insist on objective criteria — market comparables, appraisals, precedent — so the standard, not the will, decides. Hardball tactics (good cop/bad cop, the nibble, artificial deadlines) mostly fail against a prepared counterpart who names the tactic and returns to interests. And the legal boundary is real: puffery is ancient, but lying about material facts — the car's accident history, the company's accounts — is fraud, not tactics.",
      },
      { kind: "heading", text: "Key Formulas" },
      { kind: "formula", name: "The ZOPA", latex: "\\text{ZOPA} = [\\,R_{\\text{seller}},\\; R_{\\text{buyer}}\\,] \\quad \\text{nonempty iff} \\; R_{\\text{buyer}} \\ge R_{\\text{seller}}", meaning: "The set of terms better than both parties' reservation prices; a negative zone means walking away is the correct outcome." },
      { kind: "formula", name: "Midpoint under equal power", latex: "P^{*} = \\frac{R_{\\text{buyer}} + R_{\\text{seller}}}{2}", meaning: "With equal bargaining power and information, surplus tends to split at the midpoint of the zone — which is why anchoring (moving the perceived zone) works." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a candidate receives an 80,000 offer. Her best alternative is a competing offer at 76,000 with a slower promotion track — she values that drawback at about 2,000, so her reservation price is 78,000. The employer's budget tops out at 90,000; recruiter fees and a three-month vacancy make it willing to go that high. What should happen?",
        "Map the ZOPA: 78,000 to 90,000 — a wide zone, which predicts a deal and rewards ambition. The naive acceptance at 80,000 leaves 10,000 a year on the table.",
        "Prepare integrative issues: the candidate cares about year-one cash (relocation) and title; the employer cares about the start date and internal pay equity — base salary sets precedents.",
        "Negotiate: she anchors with research at 89,000; the employer counters 84,000. They logroll — a 5,000 signing bonus (cash without touching salary bands) and a start date two weeks earlier — and settle at 85,000 base plus the bonus.",
        "State the result: year-one cash of 90,000 against a reservation of 78,000 — she captured 12,000 of value at the top of the zone while the employer stayed inside its 90,000 envelope and protected its salary structure. Both sides measure themselves against alternatives, not against each other.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Salary and job offers: competing offers are BATNA-building, the single highest-leverage move in a career.",
        "M&A and procurement: due diligence exists to locate the other side's reservation price before anchoring.",
        "Diplomacy: treaties — see the international-law lesson — are integrative negotiation between states with public BATNAs.",
        "House purchases: comparables are the objective criteria; the inspection and financing contingencies are the option value.",
        "Family and shared houses: splitting chores by logrolling preferences is the orange parable with laundry.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "Negotiating without a known BATNA is flying blind — you cannot judge an offer you cannot compare. Fixating on one issue (price, salary) forfeits every logroll. Neediness is expensive: the party that must close pays for the urgency. Reflexively splitting the difference rewards whoever anchored most outrageously. Revealing your reservation price invites the deal to land exactly on it. And the agreement bias — accepting anything to be done — quietly signs people up for terms worse than walking away, the one unforced error the whole framework exists to prevent.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "BATNA", def: "Best alternative to a negotiated agreement — the walk-away option that defines negotiating power." },
        { term: "reservation price", def: "The least favourable terms a party will accept before choosing its BATNA." },
        { term: "ZOPA", def: "Zone of possible agreement: the range between the two reservation prices, when one exists." },
        { term: "integrative negotiation", def: "Expanding value across multiple issues so both parties gain, before dividing it." },
        { term: "logrolling", def: "Trading issues the parties value differently — the engine of value creation." },
        { term: "anchoring", def: "The first number's gravitational pull on the final outcome." },
        { term: "principled negotiation", def: "Fisher and Ury's method: people apart from problems, interests over positions, options before judgement, objective criteria." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Your BATNA is…",
          options: ["your opening offer", "your best course of action if this deal is not reached", "the other side's reservation price", "the midpoint of the ZOPA"],
          answer: 1,
          explain: "The alternative, not the aspiration: walk-away power is what a BATNA measures and what preparation strengthens.",
        },
        {
          q: "A seller will not accept below 200,000; the buyer will not pay above 190,000. The parties should…",
          options: ["split the difference at 195,000", "recognise the negative ZOPA and walk away", "anchor at 200,000 to be safe", "keep talking until one side tires"],
          answer: 1,
          explain: "No terms beat both alternatives; a good walk-away is the theory working, not failing.",
        },
        {
          q: "Logrolling refers to…",
          options: ["conceding nothing", "trading issues the parties value differently so both come out ahead", "making the first offer", "inflating your reservation price"],
          answer: 1,
          explain: "Differences in valuation are the raw material of value creation — the orange's peel and juice.",
        },
        {
          q: "The most reliable source of negotiating power is usually…",
          options: ["speaking loudly and slowly", "a genuinely good alternative to this deal", "knowing the counterpart's hometown", "scheduling the meeting late"],
          answer: 1,
          explain: "Preparation that strengthens your BATNA beats every in-room tactic combined.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none. Follow with the game-theory lesson in the Strategy field for the mathematics underneath commitment and credibility, the behavioral-economics lesson for anchoring and loss aversion in the flesh, and the court-procedure lesson in Law & Governance for negotiation's litigation shadow. Exercise: before your next significant negotiation, write down your BATNA, your reservation price, and three questions that will surface the other side's interests.",
      },
    ],
  },
  {
    id: "mgt-leadership-team-dynamics",
    title: "Leadership and Team Dynamics",
    domain: "Business & Economics",
    field: "Management & Leadership",
    branch: "Managing People",
    tier: "core",
    concepts: [
      "Leadership versus management",
      "Styles and situational fit",
      "Psychological safety",
      "Intrinsic motivation and self-determination",
      "Expectancy theory",
      "Team stages and social loafing",
    ],
    words: 1100,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 2012 Google did what only Google would think to do: it put its best statisticians on its own teams. Project Aristotle studied 180 teams over two years hunting for the composition of greatness — the right mix of geniuses, tenure and degrees. It found nothing of the sort. Who was on a team barely predicted how it performed; how they treated each other predicted almost everything, and the strongest single factor was psychological safety — the shared belief that you can speak up, admit error and ask naive questions without being punished. The finding rewired how serious companies think about management, and it is one pillar of a field — leadership — that most people experience daily and almost nobody studies systematically.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Hierarchies decide almost nothing on purpose: plans are proposed in meetings, errors are caught — or hidden — by people deciding whether it is safe to speak, and effort is volunteered or withheld based on motivations no spreadsheet sees. The research on safety and motivation explains why identical teams with identical resources produce wildly different results. For anyone who will ever run a project, a ward round or a study group, this is the highest-return invisible skill there is.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Leadership and management are not rival virtues but different jobs. John Kotter's classic distinction: management copes with complexity — planning, budgeting, organising, controlling; leadership copes with change — setting direction, aligning people, inspiring them to move. A function with only management ossifies; one with only leadership thrashes. The recurring failure of organisations is promoting brilliant managers into leadership roles on the assumption that the skills transfer, which is roughly like promoting a great violinist to conductor because the podium is near the stage.",
      },
      {
        kind: "para",
        text: "Style theory's honest conclusion is that there is no best style — there is fit. The Blake-Mouton grid (1964) plots concern for people against concern for production and shames the corner that has neither; Hersey and Blanchard's situational model prescribes directing, coaching, supporting or delegating depending on the follower's competence and commitment — telling a novice what to do is kindness, telling an expert what to do is insult. James MacGregor Burns' transformational-versus-transactional distinction separates leaders who elevate followers' goals from those who simply trade rewards for compliance. The durable lesson is diagnostic: read the situation, then choose.",
      },
      {
        kind: "para",
        text: "Psychological safety, defined by Amy Edmondson in her 1999 study of hospital teams, is a shared belief that the team is safe for interpersonal risk-taking. Her most misunderstood finding: better teams reported more errors, not fewer — because safer climates make reporting honest, while unsafe ones keep the same mistakes in the dark. Google's finding elevated the factor to prime cause: teams where members spoke roughly equally (conversational turn-taking) and were sensitive to each other's cues outperformed teams stacked with individual stars. Safety is built by leaders who model fallibility (“here is what I got wrong”), respond to bad news with curiosity rather than blame, and frame hard work as learning rather than execution.",
      },
      {
        kind: "para",
        text: "Motivation research's central divide is intrinsic versus extrinsic. Self-determination theory, by Deci and Ryan, holds that intrinsic motivation — doing something for its own satisfaction — feeds on three nutrients: autonomy (self-direction), competence (visible progress) and relatedness (connection to others). Edward Deci's experiments and later meta-analyses found that contingent external rewards can crowd intrinsic motivation out: pay people to solve puzzles they loved, and when the pay stops, they stop too. The managerial translation is not that money does not matter — unfair pay destroys motivation instantly — but that after pay is fair, the marginal lever is the design of the work itself.",
      },
      {
        kind: "para",
        text: "Expectancy theory, Victor Vroom's 1964 account, is the diagnostic toolkit for stalled effort. Motivation is the product of three links: expectancy (effort will achieve performance), instrumentality (performance will be rewarded) and valence (the reward is wanted). A product of three probabilities is brutal: zero anywhere zeroes everything. The unmotivated employee is not a mystery but a triage — unclear goals kill expectancy, a broken appraisal system kills instrumentality, a reward nobody values kills valence. Herzberg's two-factor view adds the asymmetry: hygiene factors like salary and conditions prevent dissatisfaction but do not create satisfaction; only motivators — achievement, growth, recognition — do.",
      },
      {
        kind: "para",
        text: "Groups develop, and they loaf. Bruce Tuckman's 1965 stages — forming, storming, norming, performing (adjourning added in 1977) — normalise the conflict phase as the route to norms, not the sign of a broken team. The darker statistical regularity is social loafing: Max Ringelmann's rope-pulling experiments in the 1910s found groups of eight pulling at less than four times one person's force, and later work confirmed effort fades when contributions become anonymous. The cures are structural: make individual contributions visible, keep teams small enough that shirking shows, and make the task matter — people do not loaf on work they find meaningful.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a nine-person product team ships late every quarter; stand-ups are silent except for three voices, and defects surface only in final testing. Diagnose and intervene.",
        "Diagnose with the frameworks: observe one week of meetings and count airtime — three members produce most of it (no turn-taking), and nobody names a problem until it detonates (low safety). Work is assigned to “the team,” not owners (classic loafing conditions); goals are handed down as fixed specs (no autonomy, low valence).",
        "Intervene on the strongest constraint first: the lead opens each week by naming her own mistake from the last one, and replaces open stand-ups with a brief written round-robin so every voice arrives before the loudest three set the temperature.",
        "Restructure: split the team into three trios with named owners per feature — individual contributions become visible; each trio chooses its solution path within the spec (autonomy restored); demos every fortnight make progress visible (competence).",
        "Measure after a quarter: the same number of defects are found, but two-thirds of them now surface in the first half of the cycle instead of the last — the signature of early reporting rather than more error — and delivery lands on time twice running. The intervention targeted the speaking climate and the visibility of effort, exactly where the diagnosis pointed.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Hospital safety rounds and aviation checklists: industries where a silent junior must be able to stop a senior's mistake.",
        "Software teams: blameless postmortems institutionalise safety so failure reports drive learning, not shame.",
        "Schools and universities: project groups fail or succeed on loafing conditions — visibility, size, meaning — before any skill matters.",
        "Boards and committees: the same three voices dominating every discussion is a governance risk, not a personality quirk — the corporate-law lesson shows what it costs.",
        "Military crews: crew resource management was aviation's answer to the cockpit hierarchy that silenced copilots.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The worst misreading of psychological safety is comfort: safety without standards is a country club, and Edmondson's research is emphatic — the goal is candour plus high expectations, not niceness plus lowered bars. Style-training fails when it teaches one style as personality rather than diagnosis. The intrinsic-versus-extrinsic debate gets caricatured: pay unfairness destroys intrinsic drive faster than any spreadsheet can model. Tuckman's stages are weather, not schedule — teams re-storm when membership changes. And social loafing is not a character flaw; it is a design failure that anonymity guarantees.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "psychological safety", def: "Shared belief that a team is safe for interpersonal risk-taking — speaking up, admitting error." },
        { term: "transformational leadership", def: "Elevating followers' goals and commitment, in Burns' sense, beyond transactional reward-trading." },
        { term: "situational leadership", def: "Matching direction, coaching, support or delegation to the follower's competence and commitment." },
        { term: "self-determination theory", def: "Intrinsic motivation grows from autonomy, competence and relatedness." },
        { term: "expectancy theory", def: "Vroom: motivation equals expectancy times instrumentality times valence — zero anywhere zeroes it." },
        { term: "hygiene factors", def: "Herzberg's conditions that prevent dissatisfaction without creating satisfaction." },
        { term: "social loafing", def: "Effort falling as individual contributions become invisible in a group." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Google's Project Aristotle found the strongest predictor of team effectiveness was…",
          options: ["the members' individual test scores", "psychological safety — how members treated risk-taking and each other", "working in the same office", "years of shared tenure"],
          answer: 1,
          explain: "Composition variables barely predicted anything; conversational turn-taking and safety did.",
        },
        {
          q: "In Edmondson's hospital study, better teams reported more errors because…",
          options: ["they actually made more mistakes", "safer climates made reporting honest — hidden errors stay hidden elsewhere", "they had older equipment", "they worked longer shifts"],
          answer: 1,
          explain: "The reporting rate measured the climate, not the error rate — the study's famous counterintuitive result.",
        },
        {
          q: "Self-determination theory says intrinsic motivation feeds on…",
          options: ["bonuses, titles and praise", "autonomy, competence and relatedness", "clear hierarchy and close supervision", "annual performance reviews"],
          answer: 1,
          explain: "Deci and Ryan's three nutrients — the design of the work, not the decoration around it.",
        },
        {
          q: "Under expectancy theory, motivation collapses to zero when…",
          options: ["any one of the effort-to-performance, performance-to-reward or value links is zero", "effort exceeds ability", "rewards are delayed by a week", "the manager is too popular"],
          answer: 0,
          explain: "Vroom's model is multiplicative — a single broken link zeroes the product, which is what makes it a diagnostic.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none. Follow with the negotiation lesson in this subject for the other half of managing relationships, the employment-law lesson in Law & Governance for what may lawfully be asked of the people being led, and the project-management lesson for the structure teams operate inside. Exercise: at your next group meeting, silently count who speaks and who does not — then try one question addressed to the quietest person, phrased as a genuine request for their read.",
      },
    ],
  },
]
