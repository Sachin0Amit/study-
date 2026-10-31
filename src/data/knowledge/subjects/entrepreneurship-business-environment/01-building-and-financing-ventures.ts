/**
 * Knowledge Universe — Entrepreneurship & the Business Environment — Chapter 01: Building & Financing Ventures
 * 2 lessons · ~3,015 words
 * field: Entrepreneurship
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Entrepreneurship]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 ent-lean-startup — From Idea to Business: Lean Startups and Business Models
 *   01.2 ent-startup-finance-equity — Startup Finance: Bootstrapping, Equity and Dilution
 */
import type { KnowledgeTopic } from '../../types'

export const entrepreneurshipBusinessEnvironmentCh01: KnowledgeTopic[] = [
  {
    id: 'ent-lean-startup',
    title: 'From Idea to Business: Lean Startups and Business Models',
    domain: 'Business & Economics',
    field: 'Entrepreneurship',
    branch: 'Building a Venture',
    tier: 'core',
    concepts: [
      'Startups are experiments, not small big companies',
      'Build-measure-learn: the core loop',
      'The MVP: minimum viable, not minimum quality',
      'Pivot or persevere: validated learning',
      'The business model canvas: nine blocks',
      'Unit economics: CAC, LTV and payback',
    ],
    words: 1309,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Most new ventures do not fail because the product was built badly; they fail because it was the wrong product, built for an audience that never materialised. Eric Ries\'s lean startup method, published in 2011, treats a new venture as a search problem: an experiment machine for discovering a business model that works, run as cheaply and fast as possible. Around it sits the discipline of describing the model itself — how the venture creates, delivers and captures value — and the arithmetic that says whether it can compound.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The method is not just for garage founders: corporate innovation teams, scientists commercialising research and nonprofits testing programmes all run the same loop. The unit-economics arithmetic at the end decides whether a growing venture is compounding toward profit or merely setting money on fire faster.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The founding distinction: a startup is not a smaller version of a big company. A company executes a business model it already knows — repeatable processes, forecasts, managers. A startup searches for one: customer unknown, price unknown, channel unknown. Running execution discipline in a search context produces beautifully built products nobody wants, the number-one cause of startup death. The lean response is to manage the search like science: state hypotheses, test them, let evidence decide.',
      },
      {
        kind: 'para',
        text: 'The engine is the build-measure-learn loop. Turn the riskiest assumption into the smallest thing you can put in front of a real customer; measure how they actually behave (not what they say they would do); learn whether the assumption survived; then loop. The goal is to maximise learning per dollar and per week, because runway is the budget for experiments. Speed matters more than polish — the team that completes ten honest loops outlearns the team that perfects one.',
      },
      {
        kind: 'para',
        text: 'The minimum viable product is the smallest experiment that generates the learning you need — and the most misunderstood phrase in the method. MVP does not mean shoddy; it means viable for the purpose of learning. Dropbox tested demand with a three-minute demo video and a waitlist that jumped from 5,000 to 75,000 overnight — no product shipped. Zappos\' founder photographed shoes in local stores, posted them online, and bought pairs at retail when orders came in. Both learned the crucial fact — demand exists — at near-zero build cost.',
      },
      {
        kind: 'para',
        text: 'Each loop ends in a decision: persevere or pivot. A pivot changes one core hypothesis — the customer, the problem, the channel, the pricing — while keeping everything the venture has learned. The corporate lineage is striking: Slack began as an internal chat tool inside a failing games company; Instagram was a check-in app called Burbn before its founders deleted everything but the photo feature; YouTube started life as a video dating site. What separates a pivot from flailing is the ledger of validated learning carried across the turn.',
      },
      {
        kind: 'para',
        text: 'The business model canvas, by Osterwalder and Pigneur, fits a venture on one page in nine linked blocks: customer segments, value proposition, channels, customer relationships, revenue streams, key resources, key activities, key partnerships and cost structure. Its power is as a hypothesis board: each block is a guess to be tested, and a pivot is visible as one or two blocks changing while the rest hold. Pitch decks, investor updates and strategy reviews are all, at heart, arguments about which blocks are validated.',
      },
      {
        kind: 'para',
        text: 'Unit economics decide whether growth is worth having. Customer acquisition cost (CAC) is everything spent to win a customer divided by customers won. Lifetime value (LTV) is the total contribution a customer generates; for a subscription, roughly monthly contribution margin divided by churn. The working rules: LTV at least three times CAC, and a payback period — months of margin needed to recover CAC — short enough that growth funds itself. The time-value machinery for discounting those future streams lives in the finance lesson; the venture test is simpler: do the units make money before the runway ends?',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: an app spends 24,000 on advertising in a month and signs up 600 subscribers paying 8 per month; variable costs run 2 per subscriber monthly and churn is 5 per cent a month. Are the unit economics viable?',
        'Recall: CAC equals acquisition spend divided by new customers; a subscription\'s lifetime value is roughly monthly contribution margin divided by churn; health wants LTV at least three times CAC and a short payback.',
        'Apply: CAC = 24,000 ÷ 600 = 40. Monthly contribution = 8 − 2 = 6, expected lifetime = 1 ÷ 0.05 = 20 months, so LTV ≈ 6 × 20 = 120. The ratio LTV/CAC = 3, and payback = 40 ÷ 6 ≈ 6.7 months.',
        'State the result: borderline healthy — exactly at the 3× rule of thumb. Halving churn to 2.5 per cent extends lifetime to 40 months and lifts LTV to 240, doubling the ratio to 6 without one extra advertising dollar: retention, not acquisition, is the lever.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Accelerators: cohorts of teams run the loop toward demo day, where evidence of learning is the judged product.',
        'Corporate innovation labs use MVPs and pivot decisions to test new businesses without betting divisions.',
        'Subscription businesses are run from CAC-payback dashboards, with churn reviewed like a vital sign.',
        'Crowdfunding campaigns act as pre-sale MVPs, validating demand before a factory is tooled.',
        'Scientific commercialisation spins out ventures whose first job is customer discovery, not product polish.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The gravest misread is MVP as an excuse to ship garbage — it must be viable enough to generate trustworthy learning. Vanity metrics compound the error: total signups, downloads and likes rise even as a business dies; retention, revenue per user and payback tell the truth. A pivot without learning is just thrashing, and scaling before unit economics work — "blitzscaling" a broken model — buys a bigger funeral. Growth is a strategy only when the units already make money.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'lean startup', def: 'A method treating new ventures as experiments searching for a workable business model.' },
        { term: 'minimum viable product', def: 'The smallest build that generates validated learning about a riskiest assumption.' },
        { term: 'pivot', def: 'A structured change of one core hypothesis, carrying accumulated learning across.' },
        { term: 'validated learning', def: 'Evidence from real customer behaviour, as opposed to opinions and projections.' },
        { term: 'business model canvas', def: 'A one-page, nine-block map of how a venture creates, delivers and captures value.' },
        { term: 'customer acquisition cost', def: 'Total sales and marketing spend divided by customers won.' },
        { term: 'lifetime value', def: 'The total contribution a customer generates; for subscriptions, margin divided by churn.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A startup differs from an established company because it…',
          options: ['is smaller', 'is searching for a business model rather than executing a known one', 'cannot borrow money', 'has no customers'],
          answer: 1,
          explain: 'Execution discipline in a search context produces well-built products nobody wants — the core lean-startup diagnosis.',
        },
        {
          q: 'Dropbox\'s three-minute demo video and waitlist was an MVP because it…',
          options: ['was a finished product', 'tested real demand at near-zero build cost', 'raised venture capital', 'taught file-sync technology'],
          answer: 1,
          explain: 'The waitlist jumping 5,000 to 75,000 validated demand — the riskiest assumption — before engineering scaled up.',
        },
        {
          q: 'Monthly contribution is 6 and churn is 3 per cent. A subscriber\'s lifetime value is roughly…',
          options: ['18', '60', '200', '6'],
          answer: 2,
          explain: 'Expected lifetime is 1 ÷ 0.03 ≈ 33 months, so LTV ≈ 6 × 33 ≈ 200.',
        },
        {
          q: 'A pivot, properly understood, is…',
          options: ['admitting total failure and restarting', 'changing one core hypothesis while keeping the learning', 'rebranding the product', 'lowering the price'],
          answer: 1,
          explain: 'Slack, Instagram and YouTube all pivoted — new hypothesis, accumulated learning intact.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'No prerequisites, though the finance lesson\'s time-value machinery deepens the LTV arithmetic. Follow with the network-effects lesson for winner-take-all markets, the marketing lesson for acquisition, and startup finance: cap tables, dilution and staged fundraising. Exercise: sketch your favourite app on a nine-block canvas and mark which blocks you think are validated — and how you would test the rest.',
      },
    ],
  },
  // ------------------------------------------------------------------
  // Source-grounded 2026-10-20: OpenStax Entrepreneurship (Laverty &
  // Littel, OpenStax 2020), Chapter 9 "Entrepreneurial Finance and
  // Accounting" — sections 9.1 Overview of Entrepreneurial Finance and
  // Accounting Strategies, 9.2 Special Funding Strategies (read in
  // full), 9.3 Accounting Basics for Entrepreneurs, 9.4 Developing
  // Startup Financial Statements and Projections; book TOC read via the
  // Open Textbook Library (open.umn.edu/opentextbooks/textbooks/entrepreneurship).
  {
    id: 'ent-startup-finance-equity',
    title: 'Startup Finance: Bootstrapping, Equity and Dilution',
    domain: 'Business & Economics',
    field: 'Entrepreneurship',
    branch: 'Financing the Venture',
    tier: 'core',
    concepts: [
      'Finance and accounting: two halves of one discipline',
      'The funding ladder from bootstrapping to venture capital',
      'No-loan strategies: crowdfunding, pre-orders, competitions',
      'The equity trade: cash today for ownership forever',
      'Pre-money, post-money and the cap table',
      'Dilution math across rounds',
      'Convertible notes and SAFEs',
      'Runway: the number that governs survival',
    ],
    words: 1706,
    readMins: 9,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Every venture has two financial conversations running at once: raising money (finance) and proving you are a responsible steward of it (accounting). OpenStax\u2019s Entrepreneurship textbook pairs them deliberately in one chapter, because founders who can raise money but not account for it lose investors\u2019 trust just as surely as careful accountants with no funding plan lose the company. This topic walks the whole arc: where a startup\u2019s money actually comes from, what giving up equity really costs, and how the three financial statements answer the three questions every backer asks.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Money is the clock of a startup: the company lives or dies on whether it reaches its next milestone before the bank account empties. The companion lesson on lean startups covers unit economics — CAC, LTV, payback — which tells you whether growth is worth buying; this lesson covers where the money to buy it comes from and what that money quietly costs in ownership and control.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Start at the cheap end. Bootstrapping means self-funding: personal savings, revenue reinvested, and aggressive minimization of cash outflows — home offices, independent contractors instead of hires, negotiated vendor terms, and moonlighting to keep a salary flowing while the venture builds. OpenStax emphasizes the structural advantage: no ownership is given up, and no owner is owed an answer. The costs are equally structural — growth is capped by whatever cash the founders can generate, and one bad month can end the company.',
      },
      {
        kind: 'para',
        text: 'Between bootstrapping and institutional money sits a family of no-loan strategies. Crowdfunding collects small sums from many backers on platforms like Kickstarter and Indiegogo; the textbook\u2019s playbook is specific — set attainable goals, make a compelling video pitch, design rewards you can actually fulfill, and budget for fulfillment before you celebrate the raise. Pre-orders sell the product before it exists; business-plan competitions pay prize money; bartering trades services instead of cash. Social enterprises can layer in donations and grants, though charitable structures carry their own rules about tax-exempt status and program services.',
      },
      {
        kind: 'para',
        text: 'Equity funding is a different species. Angel investors and venture capital funds hand over cash in exchange for ownership shares — permanently. OpenStax names the trade plainly: outside investors take a share of future profits and, in meaningful sizes, a share of control. That is rational, not sinister: a fifth of a company that reaches scale beats the whole of one that dies broke. Rounds — pre-seed, seed, Series A, B, C and beyond — are milestone machines: each buys eighteen to twenty-four months of runway to hit the proof that unlocks the next round at a higher price.',
      },
      {
        kind: 'para',
        text: 'The arithmetic of a round lives on three numbers. Pre-money valuation is what the company is judged to be worth before the new cash; add the investment and you get post-money valuation. Ownership is simply the investment divided by the post-money valuation, and the price per share times the total share count reconstructs the same figure on the cap table — the ledger of who owns how many shares. A company is worth four million pre-money and raises one million: the new investor owns one million of the five-million post-money, or twenty percent, and the founders have been diluted to eighty.',
      },
      {
        kind: 'para',
        text: 'Dilution compounds. Each subsequent round issues new shares, raising the denominator and shrinking every existing holder\u2019s percentage by the same factor. This is the single most misunderstood mechanic in startup life: founders panic at watching their line item fall, and employees misread their option percentages as promises. The honest framing is per-share value — a smaller slice of a much larger pie. Dilution is a cost only when the milestone it funded fails to raise the valuation.',
      },
      {
        kind: 'para',
        text: 'Early-stage rounds often refuse to set a valuation at all. A convertible note is a loan that converts into shares at the next priced round; a SAFE (simple agreement for future equity) is the same idea without the debt mechanics. Both carry a valuation cap and sometimes a discount, rewarding today\u2019s risk-taking investors with tomorrow\u2019s shares at yesterday\u2019s prices. They trade certainty of ownership today for speed of closing — which, when a competitor is fundraising or the market is turning, is often the better trade.',
      },
      {
        kind: 'para',
        text: 'Accounting closes the loop. Three statements, in OpenStax\u2019s ordering for startups, answer three distinct questions. The income statement asks: are we profitable — revenues minus expenses over a period. The balance sheet asks: what do we own and owe — assets, liabilities and the owners\u2019 equity that ties them. The cash-flow statement asks the survival question: will we live — because a profitable company on accrual paper can still die of unpaid invoices. Divide cash on hand by monthly net burn and you get runway in months, the number boards and investors quote more than any other.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Post-money valuation',
        latex: 'V_{\\text{post}} = V_{\\text{pre}} + I',
        meaning: 'The company\u2019s agreed worth after the investment I lands — the denominator of the ownership calculation.',
      },
      {
        kind: 'formula',
        name: 'Investor ownership',
        latex: '\\text{Ownership} = \\frac{I}{V_{\\text{post}}}',
        meaning: 'A one-million investment into a five-million post-money company buys twenty percent, regardless of how the pitch felt.',
      },
      {
        kind: 'formula',
        name: 'Runway',
        latex: 'T_{\\text{runway}} = \\frac{\\text{Cash}}{\\text{Monthly net burn}}',
        meaning: 'Months until the account hits zero at the current burn rate; hiring and pricing decisions are runway decisions.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Set the scene: founders hold 8,000,000 shares — one hundred percent of the cap table. A seed fund agrees to invest at a price of one dollar per share for 2,000,000 new shares.',
          'Compute round one: total shares rise to 10,000,000. The fund holds 2,000,000 ÷ 10,000,000 = 20%; the founders are diluted from 100% to 80%. The one-dollar price implies a 10,000,000-share company worth ten million post-money, so the fund\u2019s two million bought a fifth of a ten-million company — consistent.',
          'Add round two: a Series A investor buys 2,500,000 new shares at four dollars. Total shares become 12,500,000. The new investor holds 20%; the seed fund is diluted to 2,000,000 ÷ 12,500,000 = 16%; the founders fall to 8,000,000 ÷ 12,500,000 = 64%.',
          'Read the result honestly: the founders\u2019 percentage fell thirty-six points across two rounds, but their 64% now sits on a company valued at fifty million (12,500,000 shares × $4) instead of ten million. Percentage is vanity, value per share is sanity — and the check that matters is whether each round\u2019s milestone actually moved the valuation.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Crowdfunding platforms enforce the discipline OpenStax preaches: Kickstarter campaigns that budget nothing for reward fulfillment are the canonical way to raise money and still die — the iBackPack raised over $700,000 on Indiegogo and Kickstarter, delivered nothing, and drew an FTC investigation.',
          'Y Combinator standardized the SAFE in 2013; it is now the default instrument for pre-seed rounds precisely because it defers the valuation argument both sides would rather not have yet.',
          'TOMS Shoes\u2019 One-for-One model — a pair donated for every pair sold — is the textbook\u2019s flagship case of social entrepreneurship, where the funding strategy is baked into the revenue model itself.',
          'Accelerators institutionalize the ladder: a fixed seed check on a SAFE, three months of milestones, and a demo day engineered to compress the next round\u2019s diligence into a single afternoon.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three confusions do the damage. First, revenue is not cash: an accrual income statement can show profit while the company cannot make payroll — read the cash-flow statement for survival. Second, valuation is not money in the bank: a paper valuation of fifty million is an opinion about the future, and preference stacks mean exiting at that number pays investors before founders. Third, dilution is not automatically a defeat — but raising at flat or falling valuations converts dilution from the price of growth into the arithmetic of failure.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Bootstrapping', def: 'Self-funding a venture from savings and revenue while minimizing cash outflows, giving up no ownership.' },
          { term: 'Angel investor', def: 'A wealthy individual investing personal money in early-stage ventures, typically between friends-and-family and institutional rounds.' },
          { term: 'Venture capital round', def: 'An institutional investment round — pre-seed, seed, Series A, B, C — priced against the milestone the capital is meant to reach.' },
          { term: 'Pre-money valuation', def: 'The company\u2019s agreed worth before new cash; post-money adds the investment.' },
          { term: 'Dilution', def: 'The shrinkage of an existing holder\u2019s ownership percentage when new shares are issued.' },
          { term: 'SAFE', def: 'Simple agreement for future equity: money now, shares at the next priced round, at a cap or discount.' },
          { term: 'Runway', def: 'Months of survival remaining, computed as cash on hand divided by monthly net burn.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A company has a pre-money valuation of four million and raises one million. What does the new investor own?',
            options: ['10%', '20%', '25%', '80%'],
            answer: 1,
            explain: 'One million divided by the five-million post-money valuation is twenty percent — the investment, not the pre-money, is the numerator.',
          },
          {
            q: 'According to OpenStax, the structural advantage bootstrapping has over equity funding is:',
            options: ['It grows the company faster', 'No ownership is given up', 'It requires no accounting', 'Investors guarantee the loans'],
            answer: 1,
            explain: 'Bootstrapping keeps every share with the founders — the costs are slower growth and full personal exposure to cash shortfalls.',
          },
          {
            q: 'Which financial statement best answers the question "can this startup survive the next six months?"',
            options: ['The income statement', 'The balance sheet', 'The cash-flow statement', 'The pitch deck'],
            answer: 2,
            explain: 'Profitable-on-paper companies die of cash gaps daily; runway comes from cash on hand versus monthly net burn.',
          },
          {
            q: 'A SAFE defers valuation by:',
            options: ['Fixing the share price forever', 'Converting into shares at the next priced round, at a cap or discount', 'Repaying investors in products instead of shares', 'Indexing ownership to revenue'],
            answer: 1,
            explain: 'The SAFE buys today\u2019s cash with tomorrow\u2019s equity at a guaranteed discount to whatever valuation the next round sets.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisite: the lean-startup lesson — unit economics tell you whether the growth you are financing is worth buying. Continue with accounting depth for the three statements in full, the marketing lesson for the CAC side of the runway equation, and the behavioral-economics lesson for how valuation negotiations actually get decided.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Finance raises the money; accounting proves stewardship — investors demand both.',
          'The ladder: bootstrap and no-loan strategies first, angels next, priced venture rounds as milestones unlock them.',
          'Ownership = investment ÷ post-money valuation; the cap table records it in shares.',
          'Dilution compounds each round — judge it by value per share, not percentage.',
          'Runway = cash ÷ monthly burn; the cash-flow statement, not the income statement, is the survival document.',
        ],
      },
    ],
  },
]
