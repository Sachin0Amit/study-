/**
 * Knowledge Universe — Microeconomics — Chapter 02: How Markets Work
 * 2 lessons · ~3,479 words
 * field: Microeconomics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Price Theory, Market Structure]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bus-supply-demand-elasticity — Supply, Demand and Elasticity
 *   02.2 econ-market-structures — Market Structures: From Perfect Competition to Monopoly
 */
import type { KnowledgeTopic } from '../../types'

export const microeconomicsCh02: KnowledgeTopic[] = [
  {
    id: 'bus-supply-demand-elasticity',
    title: 'Supply, Demand and Elasticity',
    domain: 'Business & Economics',
    field: 'Microeconomics',
    branch: 'Price Theory',
    tier: 'core',
    concepts: [
      'The law of demand',
      'The law of supply',
      'Equilibrium and price signals',
      'Shifts versus movements',
      'Price elasticity and its determinants',
      'The total revenue test',
      'Cross-price and income elasticity',
    ],
    words: 1233,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Price theory begins with two curves: demand, which slopes down — people buy more as price falls — and supply, which slopes up — producers offer more as price rises. Where they cross, quantity demanded equals quantity supplied and the market clears. Elasticity then asks the crucial second question: how much? The responsiveness of buyers and sellers, not the direction of change, determines who bears a tax, whether a price rise earns or loses revenue, and why a bumper harvest can bankrupt farmers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every pricing decision, every tax, every subsidy and every shortage headline is secretly a question about elasticity. A manager who can estimate responsiveness can price; a voter who understands it can see who actually pays a tax; a policymaker who ignores it designs price controls that misfire.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'As price falls, quantity demanded rises, holding all else equal. Two forces drive it: substitution toward the now-cheaper good, and the effective income gain of a lower price. Diminishing marginal benefit — each extra unit worth slightly less to the buyer — is what the curvature encodes; a demand curve is marginal benefit read downward.',
      },
      {
        kind: 'para',
        text: 'As price rises, quantity supplied rises. Higher prices make it profitable to bring costlier capacity into use, because marginal cost tends to rise as producers stretch their resources. A supply curve is marginal cost read upward — and in competitive markets that link is close to a physical law.',
      },
      {
        kind: 'para',
        text: 'At the market-clearing price, buyers’ plans and sellers’ plans coincide. Above it, surplus accumulates and sellers cut price; below it, shortage and competition bid price up. The price is doing double duty — informing both sides and coordinating them — which is Adam Smith’s invisible hand made mechanical.',
      },
      {
        kind: 'para',
        text: 'A price change moves you along a curve; anything else shifts the whole curve. On the demand side the shifters are income, tastes, the prices of related goods, expectations and the number of buyers; on the supply side, input costs, technology, expectations and the number of sellers. “Demand rose” and “quantity demanded rose” are different sentences, and the fastest way to fail an analysis is to mix them.',
      },
      {
        kind: 'para',
        text: 'Responsiveness depends on the availability of substitutes (close substitutes make demand elastic), the budget share (big-ticket items are more elastic), the time horizon (long-run demand is more elastic) and necessity (a life-saving medicine is inelastic; one brand of soda is not). These four forces, not the price level itself, set the number.',
      },
      {
        kind: 'para',
        text: 'When demand is elastic, price and total revenue move in opposite directions — a cut sells so many more units that revenue rises. When demand is inelastic, they move together. Farming is the classic casualty: harvests swell supply, food demand is inelastic, and prices fall so far that farm revenue falls in a good year.',
      },
      {
        kind: 'para',
        text: 'Cross-price elasticity is positive for substitutes, like tea and coffee, and negative for complements, like printers and cartridges. Income elasticity is positive for normal goods and negative for inferior goods — the marker of what consumers abandon as they grow richer. These related elasticities let economists read market structure straight from data.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      { kind: 'formula', name: 'Price elasticity of demand', latex: 'E_d = \\frac{\\%\\,\\Delta Q_d}{\\%\\,\\Delta P}', meaning: 'The percentage change in quantity demanded divided by the percentage change in price; by convention an absolute value above 1 is elastic, below 1 inelastic.' },
      { kind: 'formula', name: 'Midpoint (arc) elasticity', latex: 'E_d = \\frac{\\dfrac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\\dfrac{P_2 - P_1}{(P_1 + P_2)/2}}', meaning: 'The same ratio computed with midpoint percentages, so the answer is identical whichever direction you move along the curve between the two points.' },
      { kind: 'formula', name: 'Total revenue test', latex: 'TR = P \\times Q', meaning: 'If demand is elastic, a price cut raises total revenue; if inelastic, a price cut lowers it — the quickest diagnostic a seller has.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a city transit authority raises fares by 10 per cent and wants to know what happens to ticket revenue.',
        'Recall the governing ideas: total revenue is price times quantity, and the direction of the revenue change is governed by whether demand is elastic or inelastic.',
        'Apply it: short-run commuting demand is inelastic — a commonly estimated elasticity near 0.3 means a 10 per cent fare rise costs only about 3 per cent of ridership — so revenue rises. Over years, remote work and car switching make demand more elastic and the gain shrinks.',
        'State the result: short-run revenue rises, long-run it may not, and the fuller analysis must weigh the ridership lost to lower-income commuters against the budget gain — an elasticity fact with an equity dimension.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Tax incidence: statutory liability and economic burden differ, with the more inelastic side of the market bearing more of any tax.',
        'Pricing strategy: airlines, streaming services and ride-hailing platforms all estimate elasticity before moving price.',
        'Agricultural policy: price supports exist partly because inelastic food demand makes bumper harvests commercially ruinous.',
        'Public utilities and transit: rate setting that balances revenue, usage and access goals.',
        'Labour markets: debates over minimum-wage effects turn on the elasticity of labour demand, estimated market by market.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The most common slips are treating “change in demand” and “change in quantity demanded” as synonyms, and assuming a linear demand curve has a single elasticity — it runs from elastic at the top to inelastic at the bottom, with unit elasticity at the midpoint. Beware the steepness illusion too: slope depends on axis scale, elasticity on percentage changes. And forgetting the all-else-equal assumption turns every real-world price move into a false natural experiment.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'law of demand', def: 'Quantity demanded rises as price falls, other things equal.' },
        { term: 'equilibrium price', def: 'The price at which quantity supplied equals quantity demanded.' },
        { term: 'price elasticity of demand', def: 'The percentage response of quantity demanded to a one per cent price change.' },
        { term: 'substitutes', def: 'Goods usable in place of one another; their cross-price elasticity is positive.' },
        { term: 'tax incidence', def: 'Who actually bears a tax’s economic burden, set by relative elasticities.' },
        { term: 'total revenue test', def: 'Using the price–revenue relationship to classify demand as elastic or inelastic.' },
        { term: 'income elasticity', def: 'The percentage response of demand to a one per cent income change.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'A 10 per cent fare rise increases ticket revenue. Demand is most likely…',
          options: ['elastic', 'inelastic', 'unit elastic', 'perfectly elastic'],
          answer: 1,
          explain: 'Price and revenue move together only when quantity responds less than proportionately — inelastic demand.',
        },
        {
          q: 'Which event shifts the demand curve for tea to the right?',
          options: ['A fall in the price of tea', 'A rise in the price of coffee', 'A fall in the price of coffee', 'Better tea-harvesting technology'],
          answer: 1,
          explain: 'Coffee is a substitute; its higher price pushes consumers toward tea at every tea price. A tea price change moves along the curve, and technology shifts supply.',
        },
        {
          q: 'Along a straight-line demand curve, price elasticity…',
          options: ['is constant everywhere', 'falls from elastic to inelastic as price falls', 'rises as price falls', 'is zero at the midpoint'],
          answer: 1,
          explain: 'Percentage responses change along the line: elastic in the upper range, unit at the midpoint, inelastic below it.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: comfort with percentages and a pair of axes — this is core-tier microeconomics and the base of everything that follows. Next topics: consumer choice, production costs and market structures, then the welfare analysis of taxes and price controls.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Demand slopes down, supply slopes up, and equilibrium clears the market.',
        'Shifts move whole curves; price changes move along them.',
        'Elasticity is percentage responsiveness, set by substitutes, budget share, time and necessity.',
        'Elastic demand: price cuts raise revenue; inelastic demand: they lower it.',
        'The burden of a tax falls on whichever side of the market is less elastic.',
      ] },
    ],
  },
  {
    id: 'econ-market-structures',
    title: 'Market Structures: From Perfect Competition to Monopoly',
    domain: 'Business & Economics',
    field: 'Microeconomics',
    branch: 'Market Structure',
    tier: 'intermediate',
    concepts: [
      'The four structures compared',
      'Price takers and price makers',
      'Profit maximization: MR = MC',
      'Shutdown and exit decisions',
      'Barriers to entry and monopoly',
      'Differentiation and monopolistic competition',
      'Oligopoly: collusion versus competition',
      'Efficiency and deadweight loss',
    ],
    words: 2246,
    readMins: 11,
    addedOn: '2026-10-19',
    blocks: [
      { kind: 'para', text: 'A corn farmer checks the radio for today\'s price and decides only how many bushels to sell; a pharmaceutical company holding the only patent on a drug decides what the price will be. Same profit motive, opposite powers — and the difference is not the firms\' cleverness but the structure of the markets they sit in. Microeconomics names the structures, ranks them from perfect competition through monopolistic competition and oligopoly to monopoly, and shows how structure dictates pricing power, profit durability, efficiency and the case for antitrust. This lesson tours all four, with the marginal arithmetic every firm runs — produce while the next unit adds more to revenue than to cost — as the engine of the tour.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'Whether a market tips toward one giant or a thousand price takers decides what consumers pay, how fast innovation runs, and what regulators must police. Antitrust cases, utility regulation, merger review and startup strategy are all arguments about which structure a market is in — this lesson is the vocabulary for those arguments. The market-failures lesson in this domain covers where markets go wrong; this one covers how their anatomy differs in the first place.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'Perfect competition is a hypothetical extreme — and the measuring stick for every real market. Four conditions define it: many firms selling identical products, many buyers and sellers, full information on both sides, and free entry and exit. Meeting them makes a firm a price taker facing a perfectly elastic demand curve at the market price, because charging a penny more loses every customer and charging less earns nothing extra. Corn is the canonical case: one farmer\'s output moves the market not at all, so the market price is discovered on the radio, not set at the kitchen table. The single decision left to such a firm is quantity.' },
      { kind: 'para', text: 'The output decision follows one rule: produce where marginal revenue equals marginal cost. Under perfect competition, marginal revenue equals the market price, so the rule collapses to P = MC, and the firm\'s supply curve is simply its marginal cost curve above minimum average variable cost. Whether the chosen quantity earns money depends on price against average total cost — above it, profit; at it, break-even; below it, loss. Loss triggers a two-stage test. Short run: fixed costs are already sunk — the signed lease, the installed machines — so operate whenever price covers average variable cost and chips away at the fixed bill. Long run: nothing is locked in, so exit whenever price cannot cover average total cost. Entry runs the film in reverse: positive profits attract entrants, market supply shifts right, price falls — and keeps falling until economic profit is zero, with every firm producing at the minimum of average cost. That long-run equilibrium is the source of competitive markets\' twin trophies: productive efficiency — producing at the lowest possible average cost — and allocative efficiency — price equal to marginal cost, society\'s marginal benefit matching its marginal cost.' },
      { kind: 'para', text: 'A monopoly is a single seller of a product without close substitutes — a definition smuggling in a hard question: the market. DuPont had 75 percent of cellophane but under 20 percent of "flexible packaging materials", and the Supreme Court dismissed the case in 1956. Monopolies exist because something blocks entry. Natural monopoly: economies of scale so large relative to demand that one firm serves the whole market cheaper than two — the water utility\'s pipes, the electric grid, the local cement plant. Resource control: ALCOA\'s grip on bauxite, DeBeers on rough diamonds. Legal monopoly: the Postal Service on first-class mail, plus patents (twenty years) and copyrights (life plus seventy), which deliberately grant temporary monopoly to reward invention. Intimidation: predatory pricing and advertising walls — the brand budget required to fight Coca-Cola is itself the barrier. Whatever the wall, the monopolist faces the market\'s downward-sloping demand curve, and that changes the arithmetic: to sell one more unit it must cut the price on all units, so its marginal revenue lies below price. It still produces where MR = MC — then charges the demand curve\'s price at that quantity, which sits above marginal cost. The result: less output, higher price, and gains from trade that never happen — the deadweight loss the market-failures lesson measures. Hicks\'s quip that "the best of all monopoly profits is a quiet life" adds the dynamic worry: after AT&T\'s 1982 breakup, the telephone went from any-color-as-long-as-it\'s-black to call waiting, caller ID and mobile handsets within a decade.' },
      { kind: 'para', text: 'Most consumer-facing markets are monopolistic competition: many firms, differentiated products. Differentiation runs four routes — physical attributes, location, intangibles such as guarantees and reputation, and pure perception, which is what advertising manufactures; the golf-ball industry, with thousands of regulation-conforming balls from a hundred-odd makers, is the exhibit for how thin the real differences can be. Each firm holds a mini-monopoly on its own variant and a downward-sloping but elastic demand curve: raise the price and you lose some customers to near-substitutes, not all of them. Price and quantity follow the monopoly recipe — MR = MC, then price from the demand curve — but the ending differs, because entry is free. Short-run profits attract imitators; each entrant shifts every incumbent\'s demand curve left until it just touches the average cost curve and profit hits zero. The tangency is the tell: long-run equilibrium sits on the downward-sloping part of average cost, not at its minimum, so monopolistic competition runs with excess capacity and a small gap between price and marginal cost — a mild version of monopoly\'s inefficiency. What the structure buys is variety — the thing a world of identical blue jeans cannot deliver; whether society gets the optimal amount, given an advertising arms race whose rival ads may simply neutralize each other, as Pigou noted a century ago, remains genuinely open.' },
      { kind: 'para', text: 'Oligopoly is a few large firms with most of the sales — autos, cable, air travel — and its defining condition is mutual interdependence: each firm\'s best move depends on what the others do. The textbook calls them cats in a bag: they can scratch each other to pieces or cuddle up. Compete hard, and the outcome approximates perfect competition with zero profits; collude, and the group acts as a shared monopoly. Collusion — agreeing to hold down output and keep prices up — is illegal in the United States, policed by the Justice Department and the Federal Trade Commission, so formal cartels are rare and tacit coordination is the norm; the lysine cartel of the 1990s, exposed by FBI wiretaps, doubled the price of an animal-feed additive and cost Archer Daniels Midland a 100-million-dollar fine plus prison terms for executives. The economics of the temptation is the prisoner\'s dilemma, treated at length in the Social Sciences and game-theory lessons: holding output down pays each duopolist 1,000, but expanding is a dominant strategy, and both expanding leaves each with 400. Cartels fight the logic with monitoring, matching-price threats (the kinked demand curve: rivals match cuts, ignore increases, freezing the price in place) and, internationally, agreements no court will enforce — OPEC members cannot sue each other.' },
      { kind: 'para', text: 'The four structures compress into one comparison. Number of firms: astronomical, many, few, one. Product: identical, differentiated, either, unique. Entry: free, free, blocked, blocked. Price control: none (price taker), slight, considerable, maximal (price maker). Efficiency: perfect competition delivers both productive and allocative efficiency; monopolistic competition trades a little of each for variety; oligopoly and monopoly hold price above marginal cost with durable profits — the deadweight triangle — unless the barrier is a patent, in which case the monopoly is the prize that paid for the invention. Public policy runs the whole map: antitrust against cartels and structure-tipping mergers, price regulation of natural monopolies, and patent law tuning innovation\'s deliberate monopoly.' },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Profit maximization', latex: 'MR = MC \\quad (\\text{perfect competition: } P = MR = MC)', meaning: 'Produce every unit that adds more to revenue than to cost, and stop where they are equal. Only under perfect competition does price equal marginal revenue — a monopolist\'s MR lies below its demand curve because it must cut price on all units to sell one more.' },
      { kind: 'formula', name: 'Shutdown and exit rules', latex: '\\text{Operate if } P \\geq \\min AVC; \\qquad \\text{Exit if } P < \\min ATC', meaning: 'In the short run fixed costs are sunk, so cover variable costs and limp ahead; in the long run nothing is sunk, so leave unless price covers full average cost.' },
      { kind: 'example', title: 'Worked Example — Shut Down Now or Limp Ahead?', steps: [
        'Identify what is asked: a yoga studio has signed a 10,000-dollar monthly lease (fixed) and must pay teachers 15,000 (variable) if it opens. Projected revenues run 0, 10,000 or 20,000 for the month. What should it do in each case?',
        'Recall the governing idea: short-run fixed costs are sunk — the studio pays the lease whether or not it opens — so the test is whether revenue covers the 15,000 of variable cost.',
        'Apply: at zero revenue, opening adds a 15,000 loss to the sunk 10,000 — stay shut and lose 10,000. At 10,000 revenue, opening loses 15,000 (10,000 revenue minus 25,000 total cost) versus 10,000 shut — still stay shut. At 20,000 revenue, opening loses 5,000 (20,000 minus 25,000) versus 10,000 shut — open, because the 20,000 covers all variable cost plus 5,000 of the lease.',
        'State the result: operate whenever revenue covers variable costs — price at or above minimum average variable cost — and exit the business when the lease expires unless losses have turned to profits.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Merger review: competition authorities screen deals by whether they move an industry up the structure spectrum — from many to few, or few to one.',
        'Utility regulation: natural monopolies get regulated prices instead of competitors, because duplicating the water grid wastes the economies of scale.',
        'Patent strategy: the twenty-year monopoly is a deliberate entry barrier — the reward that finances R&D, expiring into generic competition.',
        'Startup moats: founders engineer barriers — brands, network effects, scale — precisely to slow the entry that would compete their profits to zero (the network-effects lesson in this domain).',
        'Competitive strategy: knowing whether you are a price taker (commodity) or a price maker (differentiated) decides whether you fight on cost or on identity.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'Zero economic profit is not zero accounting profit — it means owners earn exactly their opportunity cost, which is why competitive firms persist at "no profit". A large firm is not automatically a monopoly: define the market too narrowly and everything is one, too broadly and nothing is — the DuPont cellophane lesson. Monopoly is not unambiguously evil — natural monopoly is efficient and patents trade short-run deadweight loss for long-run invention (the market-failures lesson weighs the deal). And perfect competition is a benchmark, not a description: it assumes away externalities, information gaps and the income distribution behind willingness to pay.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'price taker', def: 'A firm that must accept the market price — the fate of firms in perfect competition.' },
        { term: 'barrier to entry', def: 'Any legal, technological or market force that blocks new competitors from entering a market.' },
        { term: 'natural monopoly', def: 'Economies of scale so large relative to demand that one firm serves the market cheapest.' },
        { term: 'monopolistic competition', def: 'Many firms selling differentiated products — mini-monopolies in open-entry markets.' },
        { term: 'oligopoly', def: 'A few interdependent firms dominating an industry, torn between collusion and competition.' },
        { term: 'cartel', def: 'A formal agreement among firms to hold down output and charge the monopoly price.' },
        { term: 'shutdown point', def: 'The price at minimum average variable cost, below which operating loses more than closing.' },
        { term: 'product differentiation', def: 'Making one firm\'s offering distinct — physically, by location, by intangibles or by perception.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Which is NOT a condition of perfect competition?',
          options: ['identical products', 'many buyers and sellers', 'free entry and exit', 'a single large producer'],
          answer: 3,
          explain: 'A single producer is the definition of the opposite end of the spectrum — monopoly.',
        },
        {
          q: 'A monopolist\'s marginal revenue lies below its price because…',
          options: ['regulation forces it', 'selling one more unit requires cutting the price on all units sold', 'its costs are rising', 'its demand curve is flat'],
          answer: 1,
          explain: 'The demand curve is conditional, not sequential — one price applies to every unit, so the extra unit arrives with a discount attached to all the others.',
        },
        {
          q: 'A water utility is the classic natural monopoly because…',
          options: ['water is scarce', 'the pipe network\'s scale economies make a single provider the cheapest way to serve everyone', 'governments prefer monopolies', 'water has no substitutes'],
          answer: 1,
          explain: 'Once the mains are laid, serving another house costs little — and duplicating the network wastes the economies of scale.',
        },
        {
          q: 'In long-run equilibrium, a monopolistically competitive firm earns zero economic profit with price…',
          options: ['below marginal cost', 'above marginal cost and above minimum average cost', 'exactly equal to marginal cost', 'at minimum average cost'],
          answer: 1,
          explain: 'Entry shifts each firm\'s demand left until it just touches average cost — but on the downward-sloping part, leaving excess capacity and a small price-cost gap.',
        },
        {
          q: 'Two duopolists could each earn 1,000 by holding output down, but both expand and earn 400 each. This is…',
          options: ['price discrimination', 'the prisoner\'s dilemma — expansion is each firm\'s dominant strategy', 'the shutdown rule', 'predatory pricing'],
          answer: 1,
          explain: 'Whatever the other firm does, expanding pays more — so both expand, and the group outcome is worse than cooperation. The game-theory lesson develops the escapes.',
        },
        {
          q: 'A firm should shut down in the short run when…',
          options: ['price is below average total cost', 'price is below minimum average variable cost', 'profits are exactly zero', 'marginal cost is rising'],
          answer: 1,
          explain: 'Below minimum AVC, every unit sold adds more to cost than to revenue; fixed costs are sunk either way, so closing loses least.',
        },
      ] },
    ],
  },
]
