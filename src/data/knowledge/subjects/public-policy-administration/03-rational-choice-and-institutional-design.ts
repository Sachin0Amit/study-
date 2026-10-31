/**
 * Knowledge Universe — Public Policy & Administration — Chapter 03: Rational Choice & Institutional Design
 * 3 lessons · ~3,848 words
 * field: Political Science
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Rational Choice Theory, Public Choice, Institutional Design]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 soc-prisoners-dilemma — Game Theory of Cooperation: The Prisoner’s Dilemma
 *   03.2 soc-collective-action — Collective Action and the Tragedy of the Commons
 *   03.3 soc-comparative-politics-institutions — Comparative Politics: Electoral Systems and Institutions
 */
import type { KnowledgeTopic } from '../../types'

export const publicPolicyAdministrationCh03: KnowledgeTopic[] = [
  {
    id: 'soc-prisoners-dilemma',
    title: 'Game Theory of Cooperation: The Prisoner’s Dilemma',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'Rational Choice Theory',
    tier: 'core',
    concepts: [
      'The payoff structure T > R > P > S',
      'Dominant strategies',
      'A stable equilibrium that is collectively worse',
      'Iteration and the shadow of the future',
      'Tit-for-tat and its four virtues',
      'Escaping the dilemma by design',
    ],
    words: 1241,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Two suspects are held separately; each can stay silent or betray the other. Whatever the partner does, betrayal pays better — yet mutual betrayal leaves both worse off than mutual silence. This tiny structure, named by mathematician Albert Tucker after an experiment by Merrill Flood and Melvin Dresher at RAND in 1950, is the prisoner’s dilemma, the workhorse of rational choice theory in political science. Arms races, tariff wars, overfishing and cartel cheating all compress into the same two-by-two box.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The dilemma isolates the exact conditions under which individually rational behaviour produces collectively disastrous results. Once you can recognise its payoff structure, cooperation stops looking like naivety and starts looking like an engineering problem — change the future, the reputation or the enforcement, and rational players can sustain it.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The defining ordering is T > R > P > S: the temptation to defect alone beats the reward of mutual cooperation, which beats mutual punishment, which beats being the sucker. Add the condition that 2R > T + S, and alternating exploitation cannot beat steady cooperation on average. Any strategic situation with this shape — from doping in sport to price wars — is a prisoner’s dilemma regardless of its costume.',
      },
      {
        kind: 'para',
        text: 'A strategy is dominant when it is best no matter what the other player chooses. In the one-shot dilemma, defecting dominates: if the partner cooperates you take the temptation payoff, and if they defect you at least avoid the sucker’s payoff. Because both players reason identically, the dominance logic drags them to mutual defection even while both would prefer mutual cooperation.',
      },
      {
        kind: 'para',
        text: 'Mutual defection is the unique Nash equilibrium — no player gains by unilaterally changing strategy — and simultaneously worse for both than the cooperative outcome neither reaches. This pairing, stable and inefficient at once, is the theoretical scandal of the game. It kills the comforting assumption that whatever rational actors converge on must somehow be for the best.',
      },
      {
        kind: 'para',
        text: 'Repeat the game indefinitely and the calculus changes, because today’s defection now has a price tomorrow. Robert Axelrod’s computer tournaments around 1980 showed that in such settings nice strategies — those that never defect first — systematically outperformed aggressive ones. The shadow of the future is what makes cooperation rational; when the relationship has no tomorrow, the one-shot logic returns.',
      },
      {
        kind: 'para',
        text: 'The tournament winner, submitted by psychologist Anatol Rapoport, was tit-for-tat: cooperate first, then copy whatever the partner did last round. Axelrod distilled its success into four properties — nice, retaliatory, forgiving and clear. It never exploits anyone, never lets exploitation pass unanswered, returns to cooperation after a single punishment, and is easy for any strategy to model and to trust.',
      },
      {
        kind: 'para',
        text: 'Beyond iteration, cooperation escapes through reputation systems, binding contracts with external enforcement, small-group monitoring, and communication that converts the game into a coordination problem. Institutional design — trade courts, verification regimes, environmental treaties with monitoring — is largely the craft of taking prisoner’s-dilemma payoffs and re-engineering them into games where cooperation is safe.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      { kind: 'formula', name: 'Payoff ordering', latex: 'T > R > P > S', meaning: 'A dilemma exists when the temptation payoff T (defecting against a cooperator) beats the mutual reward R, which beats mutual punishment P, with the sucker’s payoff S last; if 2R > T + S, mutual cooperation also beats taking turns exploiting each other.' },
      { kind: 'formula', name: 'Shadow of the future threshold', latex: 'w \\geq \\frac{T - R}{T - P}', meaning: 'With strategies that punish defection, cooperation can be sustained when the weight w of future interaction is at least this ratio: the short-term gain from exploiting, T − R, must be outweighed by the discounted long-run cost of landing in punishment, T − P. Make the future matter enough, and cooperation is self-interest.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: two rival drink shops each choose Advertise or Stay quiet; advertising costs money but steals customers, so each earns more by advertising whatever the other does — a disguised prisoner’s dilemma.',
        'Recall the governing idea: with defection (here, Advertise) dominant for both players, the unique Nash equilibrium is mutual defection, even though both shops earn more when both stay quiet.',
        'Apply it: each shop compares payoffs pair by pair — if the rival advertises, advertising limits the damage; if it stays quiet, advertising grabs the market — so both advertise.',
        'State the result: the shops settle into a low-profit advertising war, the commercial twin of mutual defection; regulation or a self-enforcing agreement is needed to reach the quiet equilibrium both secretly prefer.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Climate policy: emission pledges are dilemma-shaped, which is why treaties add measurement, reporting and verification to lengthen the shadow of the future.',
        'Trade: tariff spirals and their institutional cures, from dispute-settlement panels to bound commitments.',
        'Arms control: verification regimes exist precisely to make the cooperative outcome observable and the temptation payoff risky.',
        'Antitrust economics: cartel members face a standing temptation to shave prices, so collusion requires monitoring and punishment strategies.',
        'Biology: reciprocal altruism in grooming primates and vampire-bat blood sharing as naturally selected tit-for-tat.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The commonest confusion is reading the dilemma as a claim that humans are selfish; it is a claim about payoff structure, not psychology, and real people often cooperate even where theory predicts defection. The second is mixing one-shot and repeated play: almost everything interesting — reputation, retaliation, forgiveness — exists only when the game has a future. Third, not every conflict is a dilemma: chicken and the stag hunt have different orderings and different cures.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'dominant strategy', def: 'A move that is best regardless of what the other player chooses.' },
        { term: 'Nash equilibrium', def: 'A pair of strategies from which neither player gains by switching alone.' },
        { term: 'Pareto inferior', def: 'An outcome that leaves everyone at least as badly off as some alternative.' },
        { term: 'payoff matrix', def: 'The table listing every player’s payoff for every combination of moves.' },
        { term: 'shadow of the future', def: 'The weight of future rounds in current decisions; what repetition adds to a game.' },
        { term: 'tit-for-tat', def: 'Open with cooperation, then mirror the partner’s previous move.' },
        { term: 'collective action problem', def: 'Any setting where individually rational choices aggregate into a worse collective result.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'In a one-shot prisoner’s dilemma, what is the unique Nash equilibrium?',
          options: ['Mutual cooperation', 'Mutual defection', 'Alternating defection', 'The sucker’s payoff'],
          answer: 1,
          explain: 'Defection dominates for both players, so mutual defection is the only stable outcome — even though both would prefer cooperation.',
        },
        {
          q: 'Tit-for-tat won Axelrod’s tournaments largely because it…',
          options: ['exploited every partner it met', 'never defected first, retaliated once, then forgave', 'defected randomly to stay unpredictable', 'cooperated no matter what happened'],
          answer: 1,
          explain: 'Its four properties — nice, retaliatory, forgiving and clear — let it harvest cooperation from cooperators without being exploitable.',
        },
        {
          q: 'Cooperation becomes sustainable in the repeated dilemma mainly when…',
          options: ['players become altruistic', 'the future matters enough relative to immediate gains', 'communication is forbidden', 'payoffs are kept secret'],
          answer: 1,
          explain: 'A sufficient weight on future interaction makes the long-run cost of punished defection exceed the short-run temptation gain.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'No prerequisites beyond comfort with a two-by-two table — this is core-tier rational choice theory. Follow with Nash equilibrium in general, then the stag hunt and chicken for contrasting structures, then collective action theory. Axelrod’s The Evolution of Cooperation is the classic bridge to biology and political science.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Payoffs ordered T > R > P > S make unilateral defection tempting and mutual punishment stable.',
        'The one-shot equilibrium is mutual defection: individually rational, collectively poor.',
        'Repetition casts a shadow of the future that can make cooperation self-enforcing.',
        'Tit-for-tat: be nice, retaliatory, forgiving and clear.',
        'Institutions — reputation, contracts, verification — are payoff engineering.',
      ] },
    ],
  },
  {
    id: 'soc-collective-action',
    title: 'Collective Action and the Tragedy of the Commons',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'Public Choice',
    tier: 'intermediate',
    concepts: [
      'Public goods and the free-rider problem',
      'Olson’s logic of collective action',
      'Hardin’s tragedy of the commons',
      'Common-pool resources and subtractability',
      'Ostrom’s design principles',
      'The spectrum of governance solutions',
    ],
    words: 1361,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'One person’s recycling does not cool the planet, and one herder’s restraint does not save the pasture. Groups face problems whose solution benefits everyone but whose cost falls on whoever moves first — a structure that makes inaction individually rational even when it dooms the group. Mancur Olson and Garrett Hardin turned this ancient dilemma into modern social science, and Elinor Ostrom, by studying the communities that beat it, rewrote the ending.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Climate change, overfished oceans, groundwater depletion, congested roads and antibiotic resistance are all commons problems wearing different clothes. The vocabulary of collective action tells you why voluntary appeals underperform, when prices and quotas work, and why some communities govern shared resources without either — the difference between a policy fight and a solved problem.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A public good is defined by two traits: non-excludability — you cannot keep anyone from benefiting once it exists — and non-rivalry — one person’s use does not diminish another’s. National defence, clean air and lighthouses are the classics. The combination is toxic for supply: each person enjoys the good whether or not they paid, so rational individuals withhold contributions and wait for others. The free-rider problem is why public radio stations beg and armies are funded by taxes.',
      },
      {
        kind: 'para',
        text: 'In The Logic of Collective Action (1965), Olson argued that large groups cannot achieve their common interests by voluntary action alone: the larger the group, the smaller each member’s stake in the outcome and the easier it is to ride free. Organisation survives on selective incentives — union insurance, professional credentials, member discounts — private rewards bundled with the public good. His sharpest theorem, the exploitation of the great by the small, notes that big players carry alliances while small ones quietly underpay.',
      },
      {
        kind: 'para',
        text: 'Hardin’s 1968 essay told of a pasture open to all. Each herder gains the full benefit of one more animal, while the cost of overgrazing is divided among every herder, so each rationally adds animals “in a society that believes in the freedom of the commons.” The pasture dies not from villainy but from impeccable individual arithmetic. Hardin’s prescription — “mutual coercion mutually agreed upon” — made the essay one of the most cited, and most contested, in twentieth-century social science.',
      },
      {
        kind: 'para',
        text: 'A common-pool resource is rival but hard to exclude people from — the diagonal opposite of a public good. Groundwater, fisheries, forests and the atmosphere are subtractable: what one user takes, the others cannot. That single distinction organises all of resource policy. Public goods such as weather forecasts need subsidy; private goods need only markets; common-pool resources need institutions, because open access plus subtraction equals the tragedy.',
      },
      {
        kind: 'para',
        text: 'Elinor Ostrom’s Governing the Commons (1990) examined Swiss alpine pastures, Spanish irrigation communities, Japanese mountain forests and coastal fisheries that had thrived for centuries under rules the users themselves made. Her design principles — clear boundaries, rules fitted to local conditions, participation in rule-making, monitoring by accountable users, graduated sanctions, cheap conflict resolution and rights to organise recognised from above — predict success closely: miss several, and the commons tends to fail. The 2009 Nobel Prize crowned the finding: self-governance is a genuine third way.',
      },
      {
        kind: 'para',
        text: 'Between market and state lies a menu. Privatisation gives each user a stake — dividing rangeland into fenced plots, or issuing individual transferable quotas in fisheries. Regulation caps use directly — seasons, licences, emissions standards. Prices work where meters exist — road charges, carbon taxes. And communal governance succeeds where boundaries are visible and users depend on the resource long-term. The craft is matching the instrument to the good’s biology and the group’s capacity; every option fails somewhere.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Private versus social payoff of one more animal',
        latex: 'u = B - \\frac{C}{n} \\;(\\text{herder}), \\qquad U = B - C \\;(\\text{society})',
        meaning: 'Adding one animal returns its full benefit B to a single herder while the overgrazing cost C is spread across all n users, so each individual adds animals well past the social optimum.',
      },
      {
        kind: 'formula',
        name: 'Sustaining cooperation under repetition',
        latex: '\\delta \\geq \\frac{T - R}{T - P}',
        meaning: 'When users meet repeatedly, restraint is self-enforcing if the discount factor δ — how much tomorrow matters — exceeds the ratio of the temptation to defect to the total loss from mutual defection.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: in a fishery of 20 identical boats, an extra day of fishing earns a skipper €3,000 but depletes the stock at a future cost of €4,000 to the fleet. Will an individually rational skipper fish the extra day?',
        'Recall the governing idea: the private cost of the extra day is the social cost divided by the number of users, C/n, while the gain lands undivided on one boat.',
        'Apply: the skipper’s cost is €4,000 ÷ 20 = €200 against a €3,000 gain — a private net of +€2,800. Society’s ledger reads €3,000 − €4,000 = −€1,000 per extra day.',
        'State the result: every skipper adds the day, and the fishery slides toward collapse; only boundaries, quotas or fleet-level governance reattach the full €4,000 to the decision.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Climate policy: carbon pricing and cap-and-trade convert the atmosphere’s invisible cost into a private one, while treaties grapple with free riding among nations.',
        'Fisheries management: individual transferable quotas, as in New Zealand and Iceland, have turned collapse-prone fleets into rights-holding stewards.',
        'Antibiotic stewardship: resistance is a pooled resource spent with every prescription — hence hospital guidelines and limits on agricultural use.',
        'Groundwater and irrigation: from Spanish huertas to Californian adjudications, courts and user associations write the rules that pumps cannot.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First error: reading Hardin as the last word. He himself refined the essay into “the tragedy of the unmanaged commons”, and Ostrom documented hundreds of durable exceptions. Second, confusing public goods with commons — rivalry is the difference, and it changes the remedy. Third, romanticising self-governance: communal regimes fail too, usually where boundaries blur or monitoring lapses. And the tragedy is not a population parable — it is about incentives, not headcount.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'public good', def: 'A good that is non-excludable and non-rival, and therefore chronically undersupplied by voluntary payment.' },
        { term: 'free rider', def: 'Someone who benefits from a collective effort while avoiding its costs.' },
        { term: 'selective incentive', def: 'A private reward or penalty tied to participation that makes contributing individually rational.' },
        { term: 'common-pool resource', def: 'A rival good from which exclusion is costly, such as a fishery or aquifer.' },
        { term: 'subtractability', def: 'The property that each unit taken by one user is unavailable to the others.' },
        { term: 'design principles', def: 'Ostrom’s empirical regularities in the rules of long-enduring commons institutions.' },
        { term: 'discount factor', def: 'The weight a decision-maker places on future payoffs relative to present ones.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'According to Olson, large groups most reliably achieve collective goals when they…',
          options: ['rely on shared ideals alone', 'offer selective incentives that make membership privately worthwhile', 'grow as large as possible', 'forbid exit from the group'],
          answer: 1,
          explain: 'In large groups each member’s contribution is negligible and invisible, so organisation needs private-side rewards such as insurance or credentials.',
        },
        {
          q: 'Why does each herder keep adding animals to the open pasture?',
          options: ['The herder miscalculates the numbers', 'The full benefit of an extra animal is private while its grazing cost is shared by all', 'Herd sizes are fixed by tradition', 'Animals multiply faster than pastures can recover'],
          answer: 1,
          explain: 'The asymmetry between private benefit and socialised cost makes overgrazing individually rational — the tragedy’s engine.',
        },
        {
          q: 'Which of Ostrom’s design principles most directly targets free riding?',
          options: ['Clear boundaries defining who may use the resource', 'Nested enterprises for large systems', 'Monitoring and graduated sanctions enforced by accountable users', 'A written constitution'],
          answer: 2,
          explain: 'Monitoring and graduated sanctions make violations detected and punished at proportionate cost — the institutional antidote to free riding.',
        },
        {
          q: 'A common-pool resource differs from a public good because it is…',
          options: ['excludable but not rival', 'non-excludable and non-rival', 'rival in consumption though often hard to exclude from', 'produced only by governments'],
          answer: 2,
          explain: 'Subtractability — what one user takes, the others lose — is the defining difference, and the reason commons need institutions.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'This topic builds on the prisoner’s dilemma in this subject — read that first if you have not. Then follow with Elinor Ostrom’s Governing the Commons, the single most rewarding book on the theme, and Hardin’s 1968 essay as a brisk counterpoint. Mechanism design and public-choice theory are the natural next tiers for the mathematically inclined.',
      },
    ],
  },
  {
    id: "soc-comparative-politics-institutions",
    title: "Comparative Politics: Electoral Systems and Institutions",
    domain: "Social Sciences",
    field: "Political Science",
    branch: "Institutional Design",
    tier: "intermediate",
    concepts: [
      "First past the post and Duverger's law",
      "Proportional representation and thresholds",
      "District magnitude as the key dial",
      "Ranked choice and mixed systems",
      "Parliamentary versus presidential",
      "Federal versus unitary",
      "Party systems and constitutional courts",
    ],
    words: 1246,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "Constitutions are engineering with incentives. Electoral rules decide how votes become seats, how executives are chosen and stopped, and who arbitrates collisions — each choice rewards some behaviors and punishes others. Comparative politics treats the world's democracies as a laboratory running hundreds of variations. Where regimes sit on the democracy-autocracy spectrum is another lesson; this one is design." },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "Electoral rules are not neutral plumbing: they quietly decide how many parties survive, whether votes for small groups are wasted, and whether losers accept defeat. Institutional design encodes a society's power-sharing choices into rules that outlast their authors." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "The simplest rule, first past the post, divides a country into single-member districts; the candidate with the most votes — rarely a majority — wins the seat and everyone else gets nothing. Maurice Duverger observed in the 1950s that such systems gravitate toward two parties, through two effects: the mechanical — small parties spread thin win few seats — and the psychological — voters, anticipating this, desert them to avoid wasting votes. Douglas Rae's systematic comparisons and Gary Cox's Making Votes Count (1997) refined the claim. The pattern holds broadly in Britain and the United States, but Canada's regional parties and India's dominant-party decades show it is a tendency, not a law." },
      { kind: "formula", name: "Effective number of parties", latex: "N = \\frac{1}{\\sum_i s_i^2}", meaning: "Laakso and Taagepera's index: one over the sum of squared seat shares. Two equal parties give 2.0; a 90-10 split gives 1.22 — barely distinguishable from one-party dominance." },
      { kind: "para", text: "Proportional representation instead fills multi-member districts, allocating seats to match vote shares via D'Hondt or Sainte-Laguë divisors, so a party with a fifth of the vote wins roughly a fifth of the seats. The key dial is district magnitude — how many members per district. Magnitude one is first past the post; magnitude 150, the Netherlands' single national district, is near-perfect proportionality. Most PR systems add thresholds, like Germany's five per cent bar, to keep tiny parties out and cabinets stable. The price and the prize: multiparty coalitions, plus consistently higher representation for women and minorities through list quotas." },
      { kind: "para", text: "Ranked-choice voting, used in Australia and now in Alaska and Maine, asks voters to order candidates; last-place candidates are eliminated and their ballots transfer until someone passes fifty per cent. It kills the spoiler problem and rewards broad appeal, but remains majoritarian — a majority still shuts out the rest. Germany's mixed member system blends both worlds: constituency seats plus regional list seats that top up proportionality. New Zealand switched to a mixed system by 1993 referendum after decades of lopsided majorities won on pluralities." },
      { kind: "para", text: "Executives come in two designs. Parliamentary systems fuse cabinet and legislature: the government rules only while it holds majority confidence and can fall between elections — Britain, Japan, Germany. Presidential systems separately elect a fixed-term executive with independent legitimacy — the United States, Brazil. Juan Linz's 1990 essay “The Perils of Presidentialism” argued the second design is more crisis-prone: dual legitimacy produces gridlock, fixed terms prevent removing a failing president, and winner-take-all raises the stakes of every election. Defenders reply that disciplined parties and strong courts can stabilize presidencies — Chile and the United States have endured." },
      { kind: "para", text: "Federalism divides authority constitutionally between national and subnational governments, each with protected powers — the United States, Germany, India, Brazil. Unitary states concentrate authority at the center, though they may devolve administratively — France, Japan. Arend Lijphart's Patterns of Democracy arrays democracies from majoritarian to consensus: winner-take-all systems concentrate power, consensus systems share it through PR, coalitions, bicameralism and federalism. Federations suit large or divided societies, but the divisions can harden — and equal representation of unequal states, like the American Senate, malapportions deliberately." },
      { kind: "para", text: "Party systems come in types: one-party, dominant-party, two-party and multiparty — which Giovanni Sartori split into moderate and polarized, the latter with anti-system parties at the edges. Stein Rokkan argued these structures were “frozen” by the 1920s out of the cleavages of nation-building: center against periphery, church against state, land against industry. Constitutional courts complete the design: judicial review, from Marbury v. Madison (1803) to Germany's Federal Constitutional Court, makes appointment rules as consequential as elections." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a new democracy with party vote shares of 46, 32, 12 and 10 per cent must choose between single-member districts and national PR — predict each path.",
        "Apply FPTP logic: the 46 per cent party wins plurality in most districts and far more than 46 per cent of seats; small parties spread thin win nearly nothing. Geography, not vote share, decides.",
        "Apply Duverger's psychological effect: anticipating wasted votes, supporters defect from the 10 per cent party; two blocs consolidate around the leaders by the next election.",
        "Compute fragmentation: 1/(0.46² + 0.32² + 0.12² + 0.10²) = 1/0.338 ≈ 2.96 effective parties. After the squeeze, say 52/44/4: 1/(0.2704 + 0.1936 + 0.0016) ≈ 2.15.",
        "Apply PR logic: with a five per cent threshold, the 12 and 10 per cent parties enter parliament and typically hold the balance; coalitions and compromise replace single-party majorities.",
        "State the trade-off: districts deliver decisiveness and clear accountability at the cost of wasted votes; PR delivers inclusion at the cost of coalition bargaining. The choice depends on what the society most needs to protect.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Constitution-writing in new democracies, from South Africa's inclusive PR to post-2003 Iraq's design debates.",
        "Electoral reform battles, from New Zealand's 1993 referendum to Britain's 2011 alternative-vote vote.",
        "Gender quotas on party lists — a PR design lever for representation.",
        "Devolution and federal design in Belgium, Spain and the United Kingdom.",
        "Court-reform debates over appointment rules and the reach of judicial review.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "Institutions constrain; they do not determine — culture, cleavages and crises regularly overpower rules on paper. Duverger's law has documented exceptions, so treat it as a tendency with conditions. PR is not automatically fairer: it trades mandate clarity for inclusion and can crown perpetual kingmakers. Copying a foreign constitution wholesale has failed repeatedly. And the effective-number index measures fragmentation, not democratic quality — a two-party system can be cartelized, a fragmented one vibrant." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "first past the post", def: "Single-member districts won by plurality — the most votes, not necessarily a majority." },
        { term: "Duverger's law", def: "Plurality systems tend toward two parties via mechanical and psychological effects." },
        { term: "district magnitude", def: "The number of seats filled per electoral district; the main dial of proportionality." },
        { term: "proportional representation", def: "Seats allocated to match vote shares, usually in multi-member districts." },
        { term: "effective number of parties", def: "Laakso-Taagepera index of parliamentary fragmentation from squared seat shares." },
        { term: "parliamentarism", def: "Executive drawn from and dependent on the legislature's confidence." },
        { term: "judicial review", def: "Courts' power to strike down legislation that violates the constitution." },
      ] },
      { kind: "quiz", items: [
        {
          q: "Duverger's law links plurality voting to…",
          options: ["multiparty fragmentation", "two-party competition via mechanical and psychological effects", "higher turnout", "proportional seat allocation"],
          answer: 1,
          explain: "Small parties lose on seat allocation, then lose voters who fear wasting ballots — both effects push toward two blocs.",
        },
        {
          q: "Raising district magnitude in a PR system…",
          options: ["reduces proportionality", "increases proportionality and typically the number of parties", "abolishes legal thresholds", "produces single-party majorities"],
          answer: 1,
          explain: "More seats per district means smaller vote shares still win representation, so more parties clear the bar.",
        },
        {
          q: "Linz's “perils of presidentialism” center on…",
          options: ["weak courts", "dual legitimacy and fixed terms", "excessive referendums", "federal overreach"],
          answer: 1,
          explain: "Two independently mandated powers can deadlock, and a failing president cannot be removed between elections.",
        },
        {
          q: "A 90-10 seat split yields an effective number of parties of about…",
          options: ["2.0", "1.22", "3.08", "1.00"],
          answer: 1,
          explain: "1/(0.81 + 0.01) ≈ 1.22 — closer to one-party dominance than to real competition.",
        },
      ] },
    ],
  },
]
