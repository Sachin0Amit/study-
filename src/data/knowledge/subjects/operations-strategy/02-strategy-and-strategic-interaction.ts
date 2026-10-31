/**
 * Knowledge Universe — Operations, Strategy & Supply Chain — Chapter 02: Strategy & Strategic Interaction
 * 2 lessons · ~3,156 words
 * field: Strategy
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Strategy]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bus-network-effects — Network Effects: Why Winner-Take-All Markets Exist
 *   02.2 econ-game-theory-toolkit — Game Theory Beyond the Prisoner’s Dilemma
 */
import type { KnowledgeTopic } from '../../types'

export const operationsStrategyCh02: KnowledgeTopic[] = [
  {
    id: 'bus-network-effects',
    title: 'Network Effects: Why Winner-Take-All Markets Exist',
    domain: 'Business & Economics',
    field: 'Strategy',
    branch: 'Technology Economics',
    tier: 'intermediate',
    concepts: [
      'Direct network effects',
      'Indirect, two-sided effects',
      'Metcalfe’s law: the arithmetic of n',
      'Critical mass and tipping',
      'Switching costs and lock-in',
      'Winner-take-all dynamics — and their limits',
      'Strategy and the antitrust question',
    ],
    words: 1289,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Why does one messaging app own an entire country while three well-funded rivals starve? Usually because of a network effect: a product that becomes more valuable to each user as others join. Markets with this property do not behave like markets for soap or steel — they concentrate, they tip, and they crown near-monopolies defended not by contracts but by arithmetic. Understanding network effects is understanding why technology markets so often produce one giant and a graveyard.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Network effects decide where capital, careers and regulation concentrate in the digital economy. Founders chase them because they promise compounding advantage; regulators study them because they can foreclose competition; users live inside their consequences daily — the group chat that will not move, the marketplace that has everything, the phone with all the apps. This is the single most strategy-relevant idea in technology economics.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A direct network effect exists when users value a product more because other users have it: telephones (the first telephone was an expensive paperweight), messaging apps, social networks, multiplayer games. Value scales with reachable peers, so each joining user improves the product for everyone already inside — an externality the seller does not have to pay for. That is the engine: adoption improves the good itself, which recruits more adoption, which improves it again.',
      },
      {
        kind: 'para',
        text: 'Indirect effects run across the sides of a platform: riders attract drivers and drivers attract riders; gamers attract developers and developers attract gamers; readers attract advertisers and advertisers fund the journalism readers want. The pricing logic inverts — one side is often subsidised, because its participation is what the paying side is really buying. Free search, free dating apps and subsidised game consoles are not generosity; they are procurement of the supply side.',
      },
      {
        kind: 'para',
        text: 'The arithmetic of interconnection is brutal. Among n users the number of possible connections is n(n−1)/2: a thousand users can form half a million pairs; two thousand, two million. Doubling membership roughly quadruples potential connection value — Metcalfe’s law, value scaling with the square of users. Not every potential connection is worth having, and real social utility saturates, but the super-linear scaling explains why growth compounds in networked markets and why careful, late entry so rarely wins them.',
      },
      {
        kind: 'para',
        text: 'Below critical mass, a networked product is a chore: your friends are not there, so why are you? Above it, growth funds itself — each new user recruits others, and expectations coordinate on the leader. Markets tip suddenly: a platform can go from half the market to nearly all of it within a couple of years, as more than one first-generation social network and phone maker learned. During the tipping window, share matters more than margin, which is why rational strategy temporarily looks irrational.',
      },
      {
        kind: 'para',
        text: 'Even a superior challenger faces lock-in. Switching costs pile up from data (history, library, followers), learning (workflow and muscle memory), coordination (the whole firm, the whole friend group) and contracts. Network effects stack on top: leaving alone means leaving everyone behind. So challengers buy their way in — acquiring a networked upstart — or interoperate, importing your contacts, your number, your library, rather than asking users to arrive empty-handed.',
      },
      {
        kind: 'para',
        text: 'When effects are strong, demand-side economies of scale meet supply-side ones — software is costly to build and nearly free to copy — and the equilibrium is concentration: a dominant player, sometimes a viable number two, and a long tail of niches. But note the boundary conditions: effects fade where tastes fragment (fashion, restaurants, bespoke business tools) or where open standards neutralise them — email is one protocol with countless providers, which is why nobody owns it. The analytical error is assuming every digital market tips.',
      },
      {
        kind: 'para',
        text: 'For incumbents the playbook is defensive: seed both sides of the platform, price for share rather than margin, stay open while small and strategic about openness once large. For challengers: find a wedge network — an underserved cluster dense enough to sustain itself — and expand outward. For regulators, the question is whether dominance reflects a better product or a self-referencing spiral; modern remedies favour interoperability and data portability, cutting switching costs rather than breaking firms apart.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Metcalfe’s law', latex: 'C = \\dfrac{n\\,(n - 1)}{2}, \\quad V \\propto n^{2}', meaning: 'The number of unique connections among n users grows roughly with the square of network size, so potential value scales super-linearly with adoption.' },
      { kind: 'formula', name: 'Adoption condition', latex: 'V(n) = \\theta\\, n - p', meaning: 'A user with taste θ gets value proportional to the n members already present, minus price or hassle p; joining happens only when θn exceeds p — why small networks stay small until they cross a threshold.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a professional network grows from 1,000 to 2,000 members — by roughly what factor does its potential connection value rise, on Metcalfe arithmetic?',
        'Recall the governing idea: possible unique connections equal n(n−1)/2, so potential value scales with roughly the square of membership.',
        'Apply: at 1,000 members there are 1,000 × 999 / 2 = 499,500 possible pairs; at 2,000 there are 2,000 × 1,999 / 2 = 1,999,000; the ratio is 1,999,000 / 499,500 ≈ 4.0.',
        'State the result: doubling the membership quadruples the potential connections — the compounding arithmetic that makes networked markets reward early, fast growth and punish late, careful entry.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Platform strategy: subsidise the scarce side, monetise the side that pays, and grow past critical mass before worrying about revenue elegance.',
        'Startup evaluation: investors price the network, not the feature — retention that recruits is the real metric.',
        'Standards battles: formats and protocols fight by the same logic, and the winner inherits the ecosystem.',
        'Competition policy: interoperability and data-portability mandates lower switching costs without banning scale itself.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The first error is seeing network effects everywhere: users talking about a product is not a network effect — the product must improve mechanically with adoption. Second, ignore boundary conditions and you will predict tipping that never comes (fragmented tastes, open protocols). Third, confusing critical mass with inevitability: networks do collapse when a new interconnecting layer arrives and drains their value. And remember Metcalfe’s law is a ceiling, not a forecast — potential connections are not valuable connections.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'network effect', def: 'A product growing more valuable to each user as total users grow.' },
        { term: 'direct network effect', def: 'Value from other users of the same kind — telephones, messaging.' },
        { term: 'two-sided market', def: 'A platform whose sides attract each other, enabling cross-side subsidies.' },
        { term: 'critical mass', def: 'The adoption level at which growth becomes self-sustaining.' },
        { term: 'tipping', def: 'Rapid coordination of expectations onto one platform, collapsing rivals’ shares.' },
        { term: 'switching costs', def: 'Data, learning, coordination and contractual costs of leaving an incumbent.' },
        { term: 'lock-in', def: 'Durable dominance created by network effects stacked on switching costs.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The telephone network is the classic case of a…',
          options: ['direct network effect', 'indirect network effect', 'switching cost', 'two-sided subsidy'],
          answer: 0,
          explain: 'Each subscriber made every existing telephone more valuable — value from same-side users.',
        },
        {
          q: 'A rideshare platform keeps rider fares low because…',
          options: ['riders are the profitable side', 'rider participation is what attracts drivers — a cross-side subsidy', 'its costs are zero', 'regulators require it'],
          answer: 1,
          explain: 'One side is procured at a loss because its presence is the product sold to the other side.',
        },
        {
          q: 'On Metcalfe arithmetic, tripling a network’s users multiplies potential connections by about…',
          options: ['3', '6', '9', '27'],
          answer: 2,
          explain: 'Connections scale with the square of size, and three squared is nine.',
        },
        {
          q: 'Which market is least likely to tip to a single winner?',
          options: ['instant messaging apps', 'mobile operating systems', 'fine-dining restaurants', 'payment card networks'],
          answer: 2,
          explain: 'Local, taste-driven and fragmented, restaurants enjoy no mechanism that concentrates them.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: supply and demand, and comfort with basic algebra. Follow with two-sided pricing, platform competition, and the economics of standards. Then read any big-tech acquisition announcement and ask the only question that matters: were they buying a product, or buying a network?',
      },
    ],
  },
  {
    id: "econ-game-theory-toolkit",
    title: "Game Theory Beyond the Prisoner’s Dilemma",
    domain: "Business & Economics",
    field: "Strategy",
    branch: "Strategic Interaction",
    tier: "intermediate",
    concepts: [
      "Sequential games and backward induction",
      "Credible commitments",
      "Mixed strategies and indifference",
      "Repetition and reputation",
      "Auctions and the winner’s curse",
      "Designing the game",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The prisoner’s dilemma — covered in depth in the Social Sciences domain — is game theory’s most famous exhibit, but it is one cell of a much larger map, and by its nature a strange one: both players move at once, in ignorance, once. Real strategic life is mostly not like that. Rivals observe each other, threaten and promise, commit resources before the fight, bid against estimates rather than values, and meet again tomorrow. The wider toolkit — trees instead of matrices, randomisation instead of purity, auction design instead of analysis — is what this lesson adds, and it is the analytical spine of pricing wars, entry battles, M&A bidding and spectrum auctions alike.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Business strategy is the management of interdependent decisions: your best move depends on their move, which depends on yours. Backward induction tells you what a threat is worth before you believe it; the winner’s curse tells you why the winning bid in a hot auction is usually a loss; commitment analysis explains why companies pay for capacity they never use. These are not metaphors — they are calculable, and the people bidding against you have done the calculation.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Sequential games replace the matrix with a tree. Players move in turn, later movers observe earlier moves, and the solution concept is backward induction — Zermelo used it on chess in 1913: reason from the last decision node backward, choosing each earlier move as if you had already solved everything after it. The equilibrium this produces has a name and a discipline: subgame-perfect equilibrium, a plan that stays optimal at every node — no empty threats. Reinhard Selten's chain-store paradox (1978) is the classic sting: an incumbent who “will fight every entrant” is bluffing, because when the moment comes, accommodating is cheaper — the threat fails the credibility test that backward induction administers.",
      },
      {
        kind: "para",
        text: "The repair for incredible threats is commitment, and Thomas Schelling — whose 1960 The Strategy of Conflict earned a Nobel prize — made it the field's centre of gravity: the power to constrain yourself is often worth more than the freedom you give up. Burning your bridges, sinking capital into capacity, signing long-term supply contracts you cannot exit, publishing a public promise — each visibly changes your own future payoffs so that the response you prefer becomes the one you would actually choose. A threat that is expensive to withdraw is believed; a threat that is merely stated is not. Schelling called it the power to bind; strategy texts call it commitment; boards call it capital expenditure with deterrence value.",
      },
      {
        kind: "para",
        text: "Some games have no pure equilibrium at all, and randomisation is not evasion but the answer. In matching pennies — penalty kicks are its highest-paid cousin — if you always go the same way, the opponent exploits you, so the equilibrium is a mixed strategy. The principle is counterintuitive and beautiful: you randomise not to confuse yourself but to make the opponent indifferent — you mix until they cannot profit from predicting you. Ignacio Palacios-Huerta's study of thousands of penalty kicks found professional kickers and goalkeepers mixing close to the theoretical frequencies, exactly as the indifference condition predicts. Random audits, drug tests in sport, and unpredictable patrols are mixed strategies deployed as policy — the tax lesson in Law & Governance is, at bottom, a randomisation device tuned to make evasion not pay on average.",
      },
      {
        kind: "para",
        text: "Repetition changes everything the dilemma teaches: the Social Sciences lesson covers how repeated play lets cooperation emerge from self-interest, and reputation is the accounting of that repetition — a brand, a strike history, a payment record all capitalise past conduct into future treatment. The subtlety is the endgame: cooperation in repeated games depends on there being a tomorrow, so finite games unravel from the back (backward induction again) while open-ended relationships sustain it. Businesses spend real money to appear open-ended — flagship stores, durable warranties — because appearing to be a repeat player is worth something only to those planning to stay.",
      },
      {
        kind: "para",
        text: "Auctions are game theory with money as the scoreboard. Four formats matter: English ascending (reveal others' prices), Dutch descending, first-price sealed, and second-price sealed — the Vickrey auction, where bidding your true value is dominant because you pay the second-highest bid, not your own. The deeper split is values: in private-value auctions you know what the object is worth to you; in common-value auctions — oil tracts, spectrum, companies — the thing has one true value nobody knows, and everyone estimates it. Then the winner’s curse bites: winning reveals your estimate was the highest, so the expected value of the thing conditional on winning is below your estimate — E. C. Capen's 1971 study of oil-lease bidding showed winners systematically overpaying. The rational bidder shades below their estimate, accepting a lower win probability for a positive expected profit.",
      },
      {
        kind: "para",
        text: "The final move is designing the game rather than playing it — mechanism design, the engineering side of the theory (a 2007 Nobel for Hurwicz, Maskin and Myerson; a 2020 one for Milgrom and Wilson's auction work). The US spectrum auctions from 1994 onward are the showcase: a simultaneous ascending format let bidders learn from each other's bids across interdependent licences, raising billions where earlier lottery and beauty-contest methods had misallocated and underpriced. The lesson generalises: when the rules channel self-interest toward the outcome you want, strategy stops being a fight and becomes a design problem — the same spirit as the market-failures lesson's fixes, run in reverse.",
      },
      { kind: "heading", text: "The Mathematics" },
      { kind: "formula", name: "Nash equilibrium", latex: "u_i(s_i^{*}, s_{-i}^{*}) \\;\\ge\\; u_i(s_i, s_{-i}^{*}) \\;\\; \\forall s_i", meaning: "A strategy profile where no single player gains by deviating alone — the baseline test every plan must pass." },
      { kind: "formula", name: "Mixed-strategy indifference", latex: "p\\,u_A(L) + (1-p)\\,u_A(R) \\;=\\; p\\,u_A(L') + (1-p)\\,u_A(R')", meaning: "Your mixing probability p is chosen so the opponent is indifferent between their options — randomisation to make prediction worthless." },
      { kind: "formula", name: "Winner’s-curse shading", latex: "b^{*} < \\hat{V} \\quad \\text{because} \\quad E[V \\mid \\text{winning}] < E[V]", meaning: "In a common-value auction, the value conditional on having the highest estimate is below your estimate — shade the bid or pay for the privilege of losing." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a monopolist earns 10 if no rival enters. An entrant can enter at no cost; if it enters, the incumbent chooses to fight a price war (entrant −2, incumbent 4) or accommodate and share the market (entrant 3, incumbent 6). What happens, and can the incumbent do better?",
        "Draw the tree and solve backward: at the fight-or-accommodate node, the incumbent compares 4 with 6 and accommodates. The entrant, anticipating this, compares staying out (0) with entering (3) and enters. Outcome: (3, 6).",
        "Test the threat: “we will fight” fails credibility — when the moment arrives, fighting is the incumbent's own worst option. A seasoned entrant ignores the press release.",
        "Add commitment: the incumbent can build excess capacity costing 1, which changes the future payoffs to fight 8, accommodate 4 — the capacity makes fighting genuinely cheaper than sharing.",
        "Solve the new game: with capacity in place the incumbent now prefers fighting (8 > 4), so the entrant's entry yields −2 and it stays out (0 > −2). The incumbent nets 8 − 1 = 7, beating the 6 of accommodation — one unit of profit sacrificed to buy a threat that never has to be carried out. The entrant's counter, in turn, is its own commitment: a long-term customer contract that makes its entry cost sunk whatever the price war.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Entry deterrence: airlines' slot holdings, retailers' flagship leases and excess capacity are commitments priced for deterrence, not throughput.",
        "M&A bidding: competing for a company whose value depends on synergies nobody can verify is the winner’s curse with a memo attached.",
        "Spectrum and bond auctions: governments now engineer billions in revenue and allocation quality through format design.",
        "Deterrence and brinkmanship: Schelling's own application — the Cuban missile crisis as controlled, credible risk, a mixed strategy in policy form.",
        "Anti-doping and tax enforcement: audit probability times penalty must beat the gain from cheating — randomisation is the weapon, indifference the target.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "First, treating equilibrium as an instant: behavioural evidence — the ultimatum game's rejected “unfair” splits — shows real people punish, and good strategy anticipates it (the behavioural-economics lesson has the details). Second, backward induction is only as honest as the payoffs entered: model the rival's payoffs from their books, not your own. Third, mixed strategies are not coin flips at random intervals — the mix is calibrated to the opponent's indifference, and 50/50 only when symmetric. Fourth, the winner’s curse is not bad luck but selection: the auction does not find who values it most, it finds whose estimate was highest — the most optimistic bidder's signature on a loss. And commitments are not free: the capacity in the example cost 1 even though it never fired.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "game tree", def: "The extensive-form picture of a sequential game: nodes as decision points, branches as moves." },
        { term: "backward induction", def: "Solving from the final nodes backward to the start; the engine of subgame-perfect play." },
        { term: "subgame-perfect equilibrium", def: "A plan that remains optimal at every node — threats included must be credible." },
        { term: "commitment device", def: "A costly, visible constraint on your own future options that makes your preferred response believable." },
        { term: "mixed strategy", def: "Randomising across actions at calibrated probabilities so the opponent cannot profitably predict you." },
        { term: "winner’s curse", def: "In common-value auctions, the systematic overpayment by the most optimistic — and therefore winning — estimate." },
        { term: "Vickrey auction", def: "Second-price sealed-bid format in which truthful bidding is the dominant strategy." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Backward induction solves a sequential game by…",
          options: ["playing boldly from the first move", "reasoning from the final decision nodes backward to the start", "randomising over all strategies", "iterating until both players tire"],
          answer: 1,
          explain: "Solve what happens last, take that as given for the move before it, and repeat to the root — Zermelo's chess logic.",
        },
        {
          q: "In a second-price sealed-bid auction with private values, your dominant strategy is to…",
          options: ["bid slightly below your value", "bid your true value, since you pay the second-highest price anyway", "bid above your value to be sure", "wait for the English round"],
          answer: 1,
          explain: "Vickrey's insight: shading gains nothing when the price is set by others, and overbidding risks paying above value.",
        },
        {
          q: "The winner’s curse arises in common-value auctions because…",
          options: ["winners are systematically unlucky", "winning reveals your estimate was among the highest, so value conditional on winning is below your estimate", "auctioneers favour certain bidders", "collusion suppresses prices"],
          answer: 1,
          explain: "Selection, not chance: the auction finds the most optimistic estimate — the oil-lease lesson from 1971.",
        },
        {
          q: "An incumbent builds costly spare capacity it never uses, purely so an entrant expects a price war. This is…",
          options: ["waste that markets punish", "a commitment device that changes the rival's best response", "price discrimination", "a mixed strategy"],
          answer: 1,
          explain: "Schelling's point: constraining yourself credibly can be worth more than the constraint costs — deterrence priced as capital expenditure.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: the prisoner’s-dilemma lesson in Social Sciences is the natural warm-up. Follow with the network-effects lesson in this field for markets where strategy compounds, the negotiation lesson for the practical craft of commitment at the table, and the market-failures lesson for the design view from the public side. Exercise: find one recent hostile takeover or price war in the news, draw its game tree with your best estimate of the payoffs, and mark the move where someone paid for credibility.",
      },
    ],
  },
]
