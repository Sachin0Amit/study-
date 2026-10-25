import type { KnowledgeTopic } from '../types'

/** Expansion pass X32 (2026-10-24): the UGC NET Paper II commerce-and-thought
 *  sweep. After X31 curated the UGC NET exam (Paper 1 + Commerce + Political
 *  Science), the audit still reported 15 unmapped syllabus topics clustered on
 *  the Paper II Commerce units (8) and Paper II Political Science (4), plus 3
 *  General-Paper units. This pass closes the largest cluster with 6 lessons
 *  (5 commerce, 1 political thought), each cross-checked against
 *  coverage/coverage.json and the dedup ledger before authoring:
 *  1. com-business-environment-elements — internal vs external environment,
 *     the seven external sectors, PESTEL scanning. Zero overlap: the existing
 *     bus-* lessons own supply/demand, trade policy and interest rates, not
 *     the environment taxonomy itself (verified grep — no 'PESTEL' hit).
 *  2. com-demand-consumer-production-theory — indifference curves, MRS,
 *     consumer equilibrium, income/substitution effects, the law of variable
 *     proportions, returns to scale, cost curves. Zero overlap: the existing
 *     bus-supply-demand-elasticity lesson owns the market diagram and
 *     elasticity arithmetic; this lesson owns the consumer-side and
 *     producer-side theory behind those curves (verified grep — no
 *     'indifference' or 'variable proportions' hits anywhere).
 *  3. com-corporate-finance-decisions — the three finance decision areas,
 *     capital budgeting (NPV/IRR/payback), WACC, capital structure, working
 *     capital, dividend policy. Zero overlap: bus-compound-interest-tvm owns
 *     discounting mechanics; this lesson owns the corporate decision frame
 *     around them (verified grep — no 'WACC' or 'capital budget' hits).
 *  4. com-international-business-fdi-integration — FDI forms and entry modes,
 *     the regional-integration ladder, WTO/IMF/World Bank. Zero overlap:
 *     bus-comparative-advantage and bus-trade-policy-tariffs own trade theory
 *     and tariffs; no existing lesson teaches FDI or the integration ladder
 *     (verified grep — no 'greenfield', 'customs union' hits).
 *  5. com-marketing-mix-distribution-trends — pricing methods, skimming vs
 *     penetration, channel design and intensity, the promotion mix, and the
 *     digital-trend unit. Zero overlap: no existing marketing lesson in the
 *     library (verified grep — no 'marketing mix', '4Ps' hits).
 *  6. pol-western-political-thought-canon — Plato to Marx. Zero overlap:
 *     pol-regimes-spectrum owns regime classification, pol-ir-theory owns
 *     IR theory, law-separation-powers owns the institutional device; no
 *     existing lesson walks the canon (verified grep — no 'philosopher-king'
 *     or 'general will' hits).
 *  Sources read while writing (legally open):
 *  - OpenStax, Introduction to Business (openstax.org, CC BY) — §1.2
 *    'Understanding the Business Environment' (the seven external
 *    sub-environments — economic, political and legal, demographic, social,
 *    competitive, global, technological — with the BP/Deepwater Horizon
 *    example of uncontrollable external forces and the lobbying example of
 *    influencing the environment) and §1.8 'Trends in the Business
 *    Environment and Competition'.
 *  - OpenStax, Principles of Economics 3e (CC BY) — ch.6 'Consumer Choices'
 *    (utility-maximizing rule, income and substitution effects, and the
 *    indifference-curve appendix) and ch.7 'Production, Costs, and Industry
 *    Structure' (production function, fixed/variable costs, marginal cost,
 *    economies of scale, LRAC).
 *  - OpenStax, Principles of Finance (CC BY-NC-SA) — §1.1 'What Is Finance?'
 *    (the three corporate-finance decision areas), ch.16 'How Companies Think
 *    about Investing' (capital budgeting), ch.17 'How Firms Raise Capital'
 *    (17.1 capital structure, 17.2 costs of debt and equity via YTM/CAPM,
 *    17.3 the WACC formula, 17.4 capital structure choices — unlevered vs
 *    levered, the interest tax shield with the $40k/$52k T-shirt example,
 *    17.5 optimal structure and trade-off theory, 17.6 alternative sources),
 *    and ch.19 'The Importance of Trade Credit and Working Capital in
 *    Planning'.
 *  - LibreTexts, International Business (the lardbucket open edition, CC
 *    BY-NC-SA) — ch.2 'International Trade and Foreign Direct Investment'
 *    (§2.4 FDI: definition, flows, forms) and ch.5 'Regional Economic
 *    Integration' (the integration levels and their institutions).
 *  - Open Text WSU, Core Principles of International Marketing (pressbooks,
 *    CC BY-NC) — §2.4 'Regional Economic Integration', §2.7 'Foreign Direct
 *    Investment', ch.7 'Global Market Entry Modes' (exporting, licensing,
 *    franchising, contract manufacturing, joint ventures), ch.10 'Global
 *    Channels and Supply Chains', ch.11 'Global Promotions'.
 *  - OpenStax, Principles of Marketing (2023, CC BY-NC-SA) — ch.1 'Marketing
 *    and Customer Value' (the 4Ps and the environment domains) and Unit 3
 *    'Product, Promotion, Price, and Place' (pricing strategies, distribution
 *    channels, the promotion mix).
 *  - Stanford Encyclopedia of Philosophy (plato.stanford.edu, open access) —
 *    entries 'Plato's Ethics and Politics in The Republic', 'Aristotle's
 *    Political Theory', 'Niccolò Machiavelli', 'Hobbes's Moral and Political
 *    Philosophy', 'Locke's Political Philosophy', 'Jean-Jacques Rousseau',
 *    'Mill's Moral and Political Philosophy', 'Karl Marx'.
 */

export const x32UgcNetPaper2PassTopics: KnowledgeTopic[] = [
  {
    id: 'com-business-environment-elements',
    title: 'The Business Environment: Reading the Forces Around the Firm',
    domain: 'Business & Economics',
    field: 'Business Environment',
    branch: 'Environment, Scanning and Adaptation',
    tier: 'core',
    concepts: [
      'Internal versus external environment',
      'The seven external sectors of the business environment',
      'Micro (task) environment versus macro environment',
      'Environmental scanning with SWOT and PESTEL',
      'Liberalisation, privatisation and globalisation (LPG)',
      'Managers as adapters, not agents, of external change',
    ],
    words: 2041,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'No firm is a closed system. Every decision a manager makes — what to produce, what price to charge, whom to hire, where to expand — is taken inside a web of forces the firm did not choose and cannot fully control. The business environment is the name for that web, and the syllabus treats it as a diagnostic skill: given a business situation, identify which environmental sectors are at work, separate what the firm controls from what it does not, and read the signals that tell a firm when to adapt. The distinction that organises everything else is internal versus external. The internal environment — employees, management structure, company culture, physical assets, the firm\u2019s own resources and capabilities — lies substantially within management\u2019s control. The external environment lies mostly outside it, and that is where the diagnostic work concentrates.',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s Introduction to Business (§1.2) puts the point sharply: businesses operate in a dynamic external environment composed of numerous outside organisations and forces, grouped into seven key sub-environments — economic, political and legal, demographic, social, competitive, global and technological. Each sector creates its own set of challenges and opportunities. The text\u2019s memorable framing is that no single business is large or powerful enough to create major changes in the external environment; managers are primarily adapters to, rather than agents of, change. Yet adaptation is not passivity: the same section notes that large firms can sometimes nudge the environment — pharmaceutical companies lobbying the FDA to speed drug approval, or the largest technology firms spending tens of millions on lobbying to shape policy toward an open internet. The skill this lesson builds is telling the two situations apart: knowing when a force must simply be absorbed, and when it can actually be influenced.',
      },
      { kind: 'heading', text: 'The seven external sectors, and how they bite' },
      {
        kind: 'para',
        text: 'The economic sector is often the most visible: fluctuations in economic activity create business cycles that move unemployment, income levels, inflation and interest rates together. When the economy grows, unemployment falls and incomes rise, expanding markets; when it contracts, the same levers move against the firm. Through policies such as taxation and interest-rate levels, government attempts to stimulate or curb the level of economic activity, and the forces of supply and demand determine how prices and quantities behave in the market. A firm that reads the cycle early can time its investment and inventory decisions; one that reads it late buys capacity at the peak and idles it in the trough.',
      },
      {
        kind: 'para',
        text: 'The political and legal sector supplies the rules of the game: tax codes, labour law, environmental regulation, licensing regimes, and the stability of the institutions that enforce them. The demographic sector describes the people a firm sells to and hires from — population size, age structure, urbanisation, income distribution; an ageing society shifts demand toward healthcare and away from children\u2019s products almost mechanically. The social sector captures attitudes, lifestyles and cultural values, which drift more slowly than prices but no less decisively — the long-term shifts toward environmental awareness or convenience-oriented consumption redraw whole industries. The competitive sector is the set of rivals and the intensity of rivalry among them; the global sector covers exchange rates, foreign competition, trade agreements and cross-border supply chains; and the technological sector covers the production technologies and innovations that can make existing products and processes obsolete. OpenStax\u2019s account of the Deepwater Horizon disaster illustrates how external forces can also arrive as shocks: an explosion that killed eleven workers and released millions of barrels of oil severely affected environment, businesses and livelihoods along the Gulf Coast, and the responsible firm spent more than sixty billion dollars in response and cleanup — a reminder that risk assessment is part of environmental reading, not a separate subject.',
      },
      { kind: 'heading', text: 'Micro and macro: two distances of looking' },
      {
        kind: 'para',
        text: 'The syllabus also draws the environment at two distances. The micro or task environment is the near ring: customers, suppliers, competitors, distributors, regulators and creditors — the actors the firm transacts with directly and whose behaviour it can study transaction by transaction. Porter\u2019s five-forces analysis (rivalry, new entrants, substitutes, buyer power, supplier power) is the classic tool here. The macro environment is the far ring: the economy-wide and society-wide forces — growth, inflation, law, culture, technology waves — that condition every task relationship at once. PESTEL is the standard macro checklist, splitting the far ring into Political, Economic, Social, Technological, Environmental (ecological) and Legal factors. The WSU open marketing text (§6.2) uses exactly this PESTEL frame for assessing country markets, and the same checklist works for a single firm: each letter is a prompt to name one force, judge its direction (improving or deteriorating for this firm), and its speed (gradual or sudden).',
      },
      {
        kind: 'para',
        text: 'Scanning then feeds the oldest diagnostic in the toolkit: SWOT. Strengths and Weaknesses are the internal audit — what the firm controls and can fix or exploit; Opportunities and Threats are the external read — what the environment offers or menaces. The pairing is the whole point: an opportunity is only real if some internal strength can reach it, and a threat is only fatal if an internal weakness leaves the door open. A firm with strong cash reserves (strength) facing rising interest rates (economic threat) can lend its reserves at better returns; a firm with the same reserves but heavy short-term debt (weakness) faces refinancing risk from the very same force. Environment reading, done properly, always ends in this two-column judgement.',
      },
      { kind: 'heading', text: 'The Indian framing: liberalisation, privatisation, globalisation' },
      {
        kind: 'para',
        text: 'The commerce syllabus adds a specifically Indian layer to the framework: the LPG reforms of 1991. Before that year, the environment Indian firms faced was dominated by the licence raj — industrial licensing that rationed the right to expand capacity, high tariff walls, and a public sector reserved for heavy industry. The 1991 crisis (a balance-of-payments squeeze that left reserves covering barely weeks of imports) triggered liberalisation (dismantling industrial licensing for most industries), privatisation (disinvestment of public-sector undertakings and opening reserved sectors to private entry) and globalisation (tariff reduction, convertibility for trade, and admission of foreign investment). The lesson for environmental analysis is that the political-legal sector can change the whole shape of every other sector in one stroke: after 1991, the competitive sector intensified as foreign entrants arrived, the technological sector accelerated as imported know-how flowed in, and the demographic-social sectors began to matter to exporters as markets rather than only as labour. Firms that read the 1991 turn early adapted; firms that treated the old environment as permanent did not survive the transition.',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s §1.8 closes the picture with the trends now reshaping every sector at once: the shift of employment toward services and knowledge work, the growth of the global marketplace and its competitive pressures, the spread of e-commerce and digital distribution, and the rising weight of environmental sustainability in both regulation and consumer preference. For the examiner, the testable skill is classification under time pressure: given a one-line scenario — a currency depreciation, a new data-protection statute, an ageing population, a rival\u2019s merger — name the sector, say whether it is micro or macro, and state one adaptive response available to the firm. That three-step answer pattern covers the large majority of questions asked on this unit.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Classify the forces, then build the response',
        steps: [
          'Step 1: a mid-sized apparel exporter faces a 6% currency appreciation at home, a new data-protection statute covering customer records, a rival\u2019s acquisition of its largest retail client, and an ageing workforce in its stitching plants.',
          'Step 2: classify each force. The appreciation is economic and global (macro — exchange-rate driven, firm cannot set it). The statute is political-legal (macro in origin, but it binds as a compliance obligation in the task environment). The client\u2019s acquisition is competitive and micro (a task-environment consolidation that concentrates buyer power). The workforce ageing is demographic and social (macro, slow-moving).',
          'Step 3: separate control levels. None of the four is fully controllable; the statute and the client consolidation are influenceable (lobbying, contract renegotiation), the exchange rate and demography are absorb-only.',
          'Step 4: build the adaptive portfolio: hedge or price in forward contracts for the currency; appoint a compliance owner and audit customer-data flows for the statute; diversify the client base before renewal season for the buyer-power threat; plan automation and phased hiring for the workforce.',
          'Contrast: a response like "cut prices to win new clients" addresses the threat but ignores that the same currency appreciation has just made the firm\u2019s exports dearer abroad — environmental reading must be joined-up, not piecemeal.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which of the following belongs to a firm\u2019s INTERNAL environment?',
            options: [
              'the rate of inflation in the economy',
              'the firm\u2019s employees, culture and physical assets',
              'a new environmental-protection statute',
              'the entry of a foreign competitor',
            ],
            answer: 1,
            explain: 'The internal environment covers day-to-day choices and resources management largely controls — people, structure, culture, assets. Inflation, statutes and foreign entrants are external sectors: economic, political-legal and competitive respectively.',
          },
          {
            q: 'OpenStax names seven external sub-environments. Which list is complete and correct?',
            options: [
              'economic, political and legal, demographic, social, competitive, global, technological',
              'economic, legal, marketing, financial, cultural, global, technical',
              'micro, macro, task, general, industry, market, firm',
              'demand, supply, cost, revenue, profit, price, output',
            ],
            answer: 0,
            explain: 'Introduction to Business §1.2 groups the external environment into seven: economic; political and legal; demographic; social; competitive; global; technological. Each creates its own challenges and opportunities.',
          },
          {
            q: 'PESTEL is best described as a checklist for which ring of the environment?',
            options: [
              'the micro (task) environment of immediate counterparties',
              'the macro environment of economy-wide forces',
              'the internal environment of controllable resources',
              'the balance-sheet accounts of the firm',
            ],
            answer: 1,
            explain: 'PESTEL scans Political, Economic, Social, Technological, Environmental and Legal factors — the far, macro ring. The near, task ring (customers, suppliers, rivals, regulators) is better served by five-forces analysis.',
          },
          {
            q: 'In a SWOT analysis, opportunities and threats differ from strengths and weaknesses because they are:',
            options: [
              'always larger in monetary terms',
              'external conditions, while strengths and weaknesses are internal',
              'only relevant to public-sector firms',
              'unmeasurable, while the others are measurable',
            ],
            answer: 1,
            explain: 'The O and T columns read the external environment; the S and W columns audit the internal one. The diagnostic power comes from pairing them: an internal strength must exist to reach an external opportunity.',
          },
          {
            q: 'The 1991 Indian reforms are summarised as LPG — liberalisation, privatisation, globalisation. What did liberalisation chiefly remove?',
            options: [
              'the requirement of industrial licensing for capacity expansion in most industries',
              'the corporate income tax',
              'the reserve-bank monopoly on currency issue',
              'consumer-protection regulation',
            ],
            answer: 0,
            explain: 'Liberalisation dismantled the licence-raj apparatus that rationed expansion; privatisation moved public-sector capacity toward private ownership; globalisation cut tariffs and admitted foreign investment. The political-legal sector redrawn in one stroke reshaped every other sector.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Placing customers and suppliers in the macro environment — they are the micro (task) ring; the macro ring is economy-wide forces like inflation and demography. Treating the seven sectors as independent silos: a currency move (economic) can trigger a statute (political-legal) that changes competition (competitive) — the sectors interact, and scenario questions reward answers that trace the interaction. Confusing "managers are adapters" with "managers are passive": OpenStax\u2019s own examples show lobbying can move parts of the environment; the skill is knowing which parts. And in LPG questions, do not credit 1991 with abolishing all public-sector industry — the reservation was narrowed, not erased.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is a foundation lesson. Follow with the marketing-mix lesson (the task environment in action: customers, channels and competitors) and the FDI-and-integration lesson (the global sector in depth). Primary reading: OpenStax, Introduction to Business (openstax.org, CC BY), §1.2 "Understanding the Business Environment" and §1.8 "Trends in the Business Environment and Competition"; Open Text WSU, Core Principles of International Marketing (pressbooks, CC BY-NC), §6.2 for the PESTEL checklist applied to market assessment.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Internal environment = controllable (people, structure, culture, assets); external = the seven sectors.',
        'The seven external sectors: economic, political-legal, demographic, social, competitive, global, technological.',
        'Micro (task) ring = customers, suppliers, rivals, regulators; macro ring = economy-wide forces (PESTEL).',
        'SWOT pairs the internal audit (S, W) with the external read (O, T); an opportunity needs a strength to reach it.',
        'Managers are primarily adapters to external change — but lobbying shows parts of it can be influenced.',
        'India\u2019s 1991 LPG reforms: liberalisation ended licensing, privatisation moved PSU capacity, globalisation opened trade and investment.',
      ] },
    ],
  },
  {
    id: 'com-demand-consumer-production-theory',
    title: 'Consumer Behaviour and Production: The Theory Behind the Curves',
    domain: 'Business & Economics',
    field: 'Microeconomics',
    branch: 'Consumer and Producer Theory',
    tier: 'intermediate',
    concepts: [
      'Diminishing marginal utility and consumer equilibrium',
      'Indifference curves, budget lines and the MRS condition',
      'Income and substitution effects of a price change',
      'Production function and the law of variable proportions',
      'Returns to scale versus returns to a factor',
      'Short-run cost curves and economies of scale',
    ],
    words: 2100,
    readMins: 11,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The market diagram — demand sloping down, supply sloping up — is where most economics lessons start, but the syllabus unit behind this lesson asks for the machinery underneath: where does the demand curve come from, and where does the supply curve come from? The answer has two halves. The demand side is consumer behaviour: how a buyer with limited income and stable preferences allocates spending so that no rearrangement could make them better off. The supply side is production theory: how a firm combines inputs under technological constraints, and how the resulting costs behave as output expands. The existing library lesson on supply, demand and elasticity teaches you to read and shift the market diagram; this lesson teaches you to derive it — the level of understanding the commerce paper tests when it asks about indifference curves, the law of variable proportions, or the shape of the marginal-cost curve.',
      },
      {
        kind: 'para',
        text: 'Both halves share one architecture. A chooser (consumer or firm) maximises an objective (satisfaction or profit) subject to a constraint (budget line or production function). Equilibrium sits where the chooser has exhausted all gain from reallocation — where the benefit per rupee of the last unit is equalised across uses. Nearly every result in this unit is a restatement of that single equalisation principle, so it is worth keeping visible as you work through the specifics.',
      },
      { kind: 'heading', text: 'The demand side: utility, then indifference' },
      {
        kind: 'para',
        text: 'The cardinal approach begins with total and marginal utility. Marginal utility is the extra satisfaction from one more unit of a good, and the law of diminishing marginal utility says it falls as consumption of that good rises — the first cup of tea on a cold morning is worth more than the fourth. The consumer maximises total utility by allocating income so that the marginal utility per rupee is equal across goods: MU(A)/P(A) = MU(B)/P(B). If the ratio were higher for A, shifting a rupee from B to A would raise total utility; equilibrium is precisely where no such shift helps. This equalisation rule is the cardinal answer to "how much of each good?", and it already contains the seed of the downward-sloping demand curve: if the price of A falls, the ratio for A rises above B\u2019s, so the consumer buys more A until the ratios equalise again.',
      },
      {
        kind: 'para',
        text: 'The ordinal approach drops the implausible requirement that satisfaction be measured in numbers and keeps only ranking. An indifference curve joins all bundles the consumer ranks equally — more of one good compensating less of the other. Its slope is the marginal rate of substitution (MRS): the amount of good B the consumer would give up for one more unit of good A with satisfaction unchanged. Diminishing MRS — the curve flattening as A increases — gives indifference curves their convex shape. The budget line joins the bundles exactly exhausting income; its slope is the price ratio P(A)/P(B). Consumer equilibrium sits at the tangency: MRS = P(A)/P(B). OpenStax\u2019s Principles of Economics (ch.6, with its indifference-curve appendix) develops exactly this apparatus and uses it to read responses to price and income changes. Two effects hide inside any price change: the substitution effect (the good is now relatively cheaper, so the consumer substitutes toward it along a fixed indifference curve) and the income effect (the price cut raises real purchasing power, which shifts consumption of all normal goods upward). For normal goods the two effects reinforce, which is the deep reason demand curves slope down; for a Giffen good the income effect overpowers substitution and the curve bends the wrong way — the standard exception question.',
      },
      { kind: 'heading', text: 'The supply side: production in the short and long run' },
      {
        kind: 'para',
        text: 'Production theory mirrors the consumer story. A production function maps input quantities to the maximum output they can yield: Q = f(L, K) for labour and capital. The short run is defined as the period in which at least one input (usually capital) is fixed; the long run is long enough for all inputs to vary. In the short run, the law of variable proportions governs what happens as the variable input (labour) is added to the fixed factor. Output first rises at an increasing rate (specialisation among workers), then rises at a decreasing rate (the fixed capital is spread thinner), and finally can fall outright (congestion). The three stages are read off the marginal product of labour: stage I while MP rises, stage II where MP falls but stays positive, stage III where MP is negative. Rational production never enters stage III, and the syllabus\u2019s standard claim is that rational firms operate in stage II — where diminishing returns hold but adding workers still adds output.',
      },
      {
        kind: 'para',
        text: 'Do not confuse returns to a factor with returns to scale. Variable proportions concern the short run, one input varying against a fixed one. Returns to scale concern the long run, all inputs scaled together: if doubling labour and capital more than doubles output, scale economies are increasing; if output exactly doubles, constant; if less, decreasing. The geometrical object for the long run is the isoquant — the set of input mixes yielding the same output — whose slope is the marginal rate of technical substitution, and the producer\u2019s equilibrium (least-cost combination) is the tangency of the isoquant with an isocost line: MRTS = wage/rental. The consumer-tangency and producer-tangency pictures are the same mathematics applied to different choosers, which is why examiners love asking for the analogy explicitly.',
      },
      { kind: 'heading', text: 'Costs: the bridge from production to supply' },
      {
        kind: 'para',
        text: 'Costs translate the production function into the supply curve. In the short run, total cost splits into fixed cost (independent of output — rent, insurance, the capital charge) and variable cost (rising with output — materials, hours worked). Average fixed cost falls continuously as output spreads the fixed total over more units; average variable cost is typically U-shaped; marginal cost — the cost of one more unit — cuts both average curves at their minima. That intersection rule is the single most-tested cost fact: when MC is below an average, the average is falling; when above, rising; so it passes through the minimum. OpenStax\u2019s ch.7 builds these curves step by step from a production table and then aggregates firm-level supply: a competitive firm\u2019s short-run supply curve is its MC curve above minimum average variable cost.',
      },
      {
        kind: 'para',
        text: 'In the long run all costs are variable, and the long-run average cost (LRAC) curve is the envelope of short-run average cost curves. Its downward portion reflects economies of scale — technical (larger machines more efficient), managerial (specialised managers), marketing (advertising spread over more units) and financial (larger firms borrow cheaper); its upward portion reflects diseconomies, chiefly coordination and bureaucratic losses as hierarchy thickens. The minimum efficient scale — the smallest output at which LRAC bottoms out — determines whether an industry can support many small firms or tends toward a few large ones, connecting this unit back to market structure. For the exam, the drill is mechanical but mandatory: from a cost table, compute MC and the averages; find the shut-down point (price below minimum AVC) and the break-even point (price at minimum ATC); and on a diagram, place the MC-through-minima intersections correctly.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Consumer equilibrium, then the cost table',
        steps: [
          'Step 1: a consumer with 100 rupees faces goods A (10 rupees) and B (20 rupees). MU from successive units of A: 60, 50, 40, 30, 20; of B: 150, 120, 90, 60, 30.',
          'Step 2: equalise MU per rupee. A at 4 units: 30/10 = 3; B at 3 units: 90/20 = 4.5 — not yet equal. A at 5: 20/10 = 2; B at 4: 60/20 = 3. The affordable combination (4A, 3B) costs 40+60 = 100 and gives ratios 3 and 4.5; test (2A, 4B): 50/10 = 5 and 60/20 = 3 — 20+80 = 100, ratios 5 and 3. Equilibrium is where the budget exactly exhausts with the nearest equal ratios: (2A, 4B) has MU/P of 5 vs 3; (4A, 3B) has 3 vs 4.5 — compare total MU instead: (4A,3B) gives 60+50+40+30+150+120+90 = 540; (2A,4B) gives 60+50+150+120+90+60 = 530. Equilibrium: 4A and 3B, total utility 540.',
          'Step 3: a production table shows 2 workers produce 50 units, 3 workers 75, 4 workers 90, 5 workers 100, 6 workers 96. Marginal products: 25, 15, 10, −4.',
          'Step 4: read the stages. MP rising never appears after worker 2, so stage I ends early; MP positive but falling covers workers 3-5 (stage II); the 6th worker reduces output — MP negative, stage III. Rational output lies in stage II: 3 to 5 workers.',
          'Contrast: adding capital so that ALL inputs double and output rises from 100 to 230 is a returns-to-scale statement (increasing), not a variable-proportions statement — the two dimensions must never be mixed in one answer.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The law of diminishing marginal utility states that, as consumption of a good rises,',
            options: [
              'total utility falls',
              'the extra satisfaction from each additional unit falls',
              'the price of the good falls',
              'the consumer\u2019s income rises',
            ],
            answer: 1,
            explain: 'Marginal utility — the increment to satisfaction from one more unit — declines; total utility can keep rising, just more slowly, until saturation. This law underlies the downward-sloping demand curve.',
          },
          {
            q: 'At consumer equilibrium on an indifference-curve diagram, which condition holds?',
            options: [
              'MRS equals the ratio of the prices of the two goods',
              'MRS equals zero everywhere',
              'the budget line lies entirely inside the indifference curve',
              'the indifference curve is a straight line',
            ],
            answer: 0,
            explain: 'Equilibrium is the tangency of budget line and indifference curve: the willingness to trade (MRS) exactly equals the market\u2019s terms of trade (price ratio). Any inequality means a beneficial swap remains available.',
          },
          {
            q: 'Under the law of variable proportions, rational firms operate in:',
            options: [
              'stage I, where marginal product rises',
              'stage II, where marginal product falls but remains positive',
              'stage III, where marginal product is negative',
              'any stage, since output rises in all of them',
            ],
            answer: 1,
            explain: 'Stage III destroys output (negative MP — never rational); stage I under-uses the fixed factor. Stage II is where each extra worker still adds output even though the additions shrink — the only sensible operating region.',
          },
          {
            q: 'Doubling ALL inputs raises output by 150%. This statement concerns:',
            options: [
              'the law of variable proportions',
              'increasing returns to scale',
              'diminishing marginal utility',
              'economies of scope',
            ],
            answer: 1,
            explain: 'All inputs varied together in the same proportion is the long-run scale question; more-than-proportional output growth is increasing returns to scale. Variable proportions vary ONE input against a fixed factor.',
          },
          {
            q: 'The marginal-cost curve intersects the average-total-cost curve:',
            options: [
              'at its maximum',
              'at its minimum',
              'nowhere in particular',
              'only when fixed costs are zero',
            ],
            answer: 1,
            explain: 'When MC is below ATC, an extra unit pulls the average down; when above, it pushes it up. The crossing must therefore sit at ATC\u2019s minimum — the break-even benchmark against which price is compared.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Mixing the two "returns": variable proportions vary one input against a fixed factor (short run); returns to scale vary all inputs together (long run) — examiners set traps quoting one definition while testing the other. Reading stage III as "output falls, so it is the most efficient" — negative marginal product is congestion, never efficiency. Forgetting that MC cuts the AVERAGES at their minima, not at the quantity where MC itself bottoms out. On the consumer side, confusing diminishing MRS (a property of the indifference curve) with the tangency condition (MRS equals the price ratio): the first is always assumed, the second holds only at equilibrium. And for Giffen goods, remember the exception needs a strongly inferior good dominating the budget — quoting it for any upward-sloping-demand example overreaches.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the supply-demand-elasticity lesson for the market diagram this theory underlies. Follow with the corporate-finance lesson (what firms do with the profits this theory analyses) and the marketing lesson (how firms manage the demand side deliberately). Primary reading: OpenStax, Principles of Economics 3e (openstax.org, CC BY), ch.6 "Consumer Choices" including the indifference-curve appendix, and ch.7 "Production, Costs, and Industry Structure" for the cost-curve build-up.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Cardinal equilibrium: equalise MU per rupee across goods; a price fall makes the consumer buy more until ratios re-equalise.',
        'Ordinal equilibrium: MRS = P(A)/P(B) at the tangency of budget line and indifference curve.',
        'Every price change splits into a substitution effect along a curve plus an income effect through purchasing power.',
        'Law of variable proportions: MP rises (stage I), falls positive (stage II — the operating region), goes negative (stage III).',
        'Returns to scale vary ALL inputs together; isoquant-isocost tangency gives the least-cost mix (MRTS = w/r).',
        'MC cuts AVC and ATC at their minima; shut-down at price below min AVC, break-even at min ATC; LRAC shows economies and diseconomies of scale.',
      ] },
    ],
  },
  {
    id: 'com-corporate-finance-decisions',
    title: 'Corporate Finance Decisions: Investing, Financing and Paying Out',
    domain: 'Business & Economics',
    field: 'Finance & Investment',
    branch: 'Corporate Finance',
    tier: 'intermediate',
    concepts: [
      'The three corporate-finance decision areas',
      'Capital budgeting: payback, NPV, IRR and the profitability index',
      'WACC and the interest tax shield',
      'Capital structure and trade-off theory',
      'Working capital and the cash conversion cycle',
      'Dividend policy: stability versus residual payout',
    ],
    words: 1896,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Every firm, however humble, faces the same three financial questions, and OpenStax\u2019s Principles of Finance (§1.1) names them precisely. First, working-capital management: how to run the short-term side — set credit terms for customers, decide when to stretch suppliers, keep enough cash to meet payroll without idling surplus balances. Second, capital budgeting: which long-term assets to acquire, the decisions the same text calls the greatest value-adders a finance function makes. Third, capital structure: the long-run mix of debt and equity used to fund the balance sheet, worked out with lenders, underwriters and investment bankers. The syllabus unit is organised exactly this way — investment decision, financing decision, dividend decision — with working capital running alongside as the liquidity discipline that keeps the firm alive while the long-run bets mature. The existing library lesson on compound interest and time value owns the discounting arithmetic; this lesson owns the decision frame that uses it.',
      },
      {
        kind: 'para',
        text: 'A useful mental model stacks the three decisions on the balance sheet itself, as OpenStax\u2019s Figure 1.3 does: working-capital management governs the short-term assets and liabilities at the top, capital budgeting governs the long-term asset side, and capital structure governs the long-term liability-and-equity side. When the paper asks which decision a scenario illustrates, map the item to its balance-sheet region first — that single move resolves most classification questions.',
      },
      { kind: 'heading', text: 'The investment decision: capital budgeting' },
      {
        kind: 'para',
        text: 'Capital budgeting asks whether a project\u2019s future cash flows justify today\u2019s outlay. The simplest screen is the payback period — how many years until cumulative cash inflows repay the initial outlay. It is intuitive and favours liquidity, but it ignores everything after payback and does not discount: a project that pays back slowly but hugely can look worse than a small fast one. The discounted methods fix this. Net present value (NPV) discounts all project cash flows at a required rate and subtracts the outlay; accept if NPV is positive, because a positive NPV means the project returns more than the capital it consumes. The internal rate of return (IRR) is the discount rate at which NPV hits exactly zero — the project\u2019s implied yield; accept when IRR exceeds the hurdle rate. The profitability index (present value of inflows per rupee of outlay) ranks projects when capital is rationed. Of the three, NPV is theoretically king: IRR can mislead when cash flows change sign more than once or when two projects of different scale compete (IRR ignores how many rupees are actually working).',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s ch.16 builds these rules and its ch.17 T-shirt example shows the discounting muscle in miniature: a project needing 40,000 up front and returning 52,000 after one year, discounted at 14 percent, is worth 52,000/1.14 − 40,000 ≈ 5,614 in present-value terms — positive, so the project should be taken. The same number reappears below in the financing discussion, because the value created belongs to whoever supplies the capital; investment and financing are two views of one cash-flow stream.',
      },
      { kind: 'heading', text: 'The financing decision: cost of capital and structure' },
      {
        kind: 'para',
        text: 'Raising money has a price. The cost of debt is observable as the yield to maturity on the firm\u2019s bonds — and because interest is tax-deductible, the effective cost to the firm is that yield multiplied by (1 − T). The cost of equity is not observed and must be estimated, most commonly by the capital asset pricing model (CAPM): the risk-free rate plus a beta-scaled equity risk premium — or by a dividend-growth model for stable payers. The weighted average cost of capital (WACC) then blends the costs by their market-value weights: WACC = (D% × r_d × (1−T)) + (P% × r_pfd) + (E% × r_e). WACC is the hurdle rate for average-risk projects and the number that makes "value" concrete: a project earns economic profit exactly when its return exceeds the WACC of the capital it uses.',
      },
      {
        kind: 'para',
        text: 'Capital structure asks how the debt-equity mix should be chosen. OpenStax\u2019s ch.17.4 stages the classic argument: in perfect financial markets, the value of a firm is the same whether it is unlevered (all-equity) or levered — the famous irrelevance result. Real markets are not perfect, and the decisive imperfection is tax: interest is deductible, so debt creates an interest tax shield whose value rises with leverage. But ch.17.5 completes the trade-off: as debt rises, the probability of financial distress — missed payments, forced restructuring, lost customers and suppliers — also rises, and both lenders and shareholders demand higher returns to bear that risk. Trade-off theory therefore values the levered firm as the unlevered value plus the tax shield minus expected distress costs, and the optimal structure sits where the marginal shield gain equals the marginal distress cost. The syllabus\u2019s pecking-order observation adds the behavioural layer: firms prefer internal funds first, then debt, and issue new equity last — retained earnings avoid flotation costs and signalling problems, which is why ch.17.6 calls new share issues the most expensive source of financing.',
      },
      { kind: 'heading', text: 'Working capital and the dividend decision' },
      {
        kind: 'para',
        text: 'Working capital is the short-run mirror of the whole framework. The cash conversion cycle measures the days a rupee stays locked between paying suppliers and collecting from customers: inventory days plus receivable days minus payable days. Shorten it and the firm finances itself; lengthen it and the firm must borrow to breathe. OpenStax\u2019s ch.19 frames trade credit — the credit suppliers extend — as a planning tool whose terms (say "2/10 net 30": a 2 percent discount if paid within ten days, otherwise net thirty) carry an implicit annual interest cost that is often enormous relative to bank lending; the standard exam calculation converts the forgone discount into an annualised rate to decide whether early payment is worth it. The dividend decision closes the loop between financing and payout: if the firm keeps earnings, equity grows without new issues; if it pays them out, shareholders get cash but the firm must look outside for growth capital. Stable-dividend policies smooth payments to signal reliability; residual policies pay only what remains after funding all positive-NPV projects, treating dividends as the leftover of good investing. Neither is universally right; the testable point is that payout policy interacts with the structure decision — both are ways of returning or retaining the cash the investment decision has created.',
      },
      {
        kind: 'example',
        title: 'Worked Example — NPV, then the discount decision',
        steps: [
          'Step 1: a machine costs 500,000 and yields 200,000 a year for three years. The WACC, from market-value weights of 40% debt at 9% pre-tax and 60% equity at 14%, with a 25% tax rate: r_d(1−T) = 0.09 × 0.75 = 0.0675; WACC = 0.4 × 0.0675 + 0.6 × 0.14 = 0.027 + 0.084 = 0.111, about 11.1%.',
          'Step 2: discount the inflows: 200,000/1.111 = 180,018; 200,000/1.111² = 162,075; 200,000/1.111³ = 145,901. Sum ≈ 487,994. NPV = 487,994 − 500,000 = −12,006 — negative, reject.',
          'Step 3: read the IRR intuition: the project\u2019s internal return sits just below 11.1% (since NPV is slightly negative at that rate), so it fails the hurdle — consistent with the NPV verdict. Payback (2.5 years) may look attractive, which is exactly why payback-only screening misleads.',
          'Step 4: the financing lens: the same machine financed entirely with debt at 9% would gain the tax shield on interest, but the correct comparison discounts at the WACC-weighted cost of ALL capital used — not just the last rupee borrowed.',
          'Contrast: a supplier offers 2/10 net 30. Forgoing the discount costs 2% to use 20 extra days of credit — annualising (365/20) × 2% ≈ 36.5%, far above any borrowing rate. Take the discount and borrow if needed.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'OpenStax names three broad areas of business finance. Which triple is correct?',
            options: [
              'auditing, taxation, assurance',
              'working-capital management, capital budgeting, capital structure',
              'marketing, operations, human resources',
              'demand, supply, elasticity',
            ],
            answer: 1,
            explain: '§1.1 divides business finance into working-capital management (short-term assets/liabilities), capital budgeting (long-term asset acquisition) and capital structure (the long-term debt-equity mix) — the frame the whole unit hangs on.',
          },
          {
            q: 'A project\u2019s NPV at the firm\u2019s required rate is positive. The correct action is to:',
            options: [
              'reject it, because discounted values are always uncertain',
              'accept it, because it returns more than the capital it consumes',
              'accept only if its payback is under two years',
              'reject it if its IRR is above the required rate',
            ],
            answer: 1,
            explain: 'Positive NPV means the discounted inflows exceed the outlay — the project adds value over and above the cost of the capital employed. IRR above the hurdle corroborates; payback is a liquidity screen, not a value test.',
          },
          {
            q: 'Why does debt lower the effective cost of capital through the tax channel?',
            options: [
              'lenders charge less than shareholders by law',
              'interest is tax-deductible, so the after-tax cost of debt is below its stated yield',
              'debt never needs to be repaid',
              'tax authorities subsidise equity dividends',
            ],
            answer: 1,
            explain: 'Interest reduces taxable income, so a rupee of interest costs the firm (1 − T) rupees after tax. The interest tax shield rises with leverage — the benefit side of trade-off theory, before distress costs bite.',
          },
          {
            q: 'Under trade-off theory, the optimal capital structure balances:',
            options: [
              'the interest tax shield against rising financial-distress costs',
              'cash dividends against stock splits',
              'fixed costs against variable costs',
              'advertising against distribution',
            ],
            answer: 0,
            explain: 'Leverage adds shield value but raises the probability and cost of distress; both lenders and shareholders demand more return as risk grows. Value is maximised where the marginal gain of the shield equals the marginal distress cost.',
          },
          {
            q: 'The cash conversion cycle equals:',
            options: [
              'inventory days + receivable days − payable days',
              'inventory days − receivable days + payable days',
              'cash sales − credit sales',
              'current assets − current liabilities',
            ],
            answer: 0,
            explain: 'The cycle measures how long cash is locked between paying suppliers and collecting from customers: days inventory outstanding plus days sales outstanding minus days payables outstanding. Shortening it releases working capital.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Using the stated cost of debt instead of the after-tax cost in WACC — the deduction is the whole point of the (1 − T) factor. Comparing two projects by IRR alone when their scales differ: IRR is a percentage, NPV is rupees of value, and small-big beats large-percentage when capital is available. Reading payback as a value measure — it ignores both time value and post-payback flows. In structure questions, quoting the perfect-markets irrelevance result as "debt never matters" — the result is a baseline whose imperfections (taxes, distress) create the trade-off. And in working-capital problems, forgetting that the current ratio and the conversion cycle answer different questions: one is a stock of cover, the other is a speed of cash.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the compound-interest lesson for discounting mechanics. Follow with the demand-and-production lesson (where the cash flows come from) and the FDI lesson (how capital moves across borders when domestic structure is exhausted). Primary reading: OpenStax, Principles of Finance (openstax.org, CC BY-NC-SA), §1.1, ch.16 (capital budgeting), ch.17 (cost of capital and structure, especially 17.3-17.5) and ch.19 (trade credit and working capital).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three decision areas: working capital (short-term), capital budgeting (long-term assets), capital structure (debt-equity mix).',
        'Capital budgeting: payback screens liquidity; NPV is the value rule; IRR is the implied yield; PI ranks under rationing.',
        'WACC blends after-tax debt and estimated equity costs by market-value weights.',
        'Trade-off theory: levered value = unlevered value + tax shield − distress costs; optimum where margins balance.',
        'Cash conversion cycle = inventory + receivable days − payable days; trade-credit discounts are often the cheapest financing available.',
        'Dividend policy (stable vs residual) is the payout mirror of the financing decision.',
      ] },
    ],
  },
  {
    id: 'com-international-business-fdi-integration',
    title: 'FDI, Regional Integration and the Institutions of World Trade',
    domain: 'Business & Economics',
    field: 'International Trade',
    branch: 'FDI and Economic Integration',
    tier: 'intermediate',
    concepts: [
      'FDI defined: controlling stake across borders',
      'Greenfield versus brownfield; horizontal versus vertical FDI',
      'The entry-modes ladder from export to wholly-owned subsidiary',
      'The regional-integration ladder from PTA to economic union',
      'Trade creation versus trade diversion',
      'WTO, IMF, World Bank and UNCTAD: who does what',
    ],
    words: 1870,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Trade theory explains why countries exchange goods; this unit explains what happens when firms stop exporting the good and instead produce inside the foreign market itself. Foreign direct investment (FDI) exists when a firm acquires a lasting, controlling interest in an enterprise located in another country — the standard threshold being ten percent or more of voting equity, the definition the LibreTexts International Business text (§2.4) uses when it distinguishes FDI from the passive portfolio flows that buy securities without seeking control. The controlling stake is what makes the investment "direct": the investor exercises managerial voice, transfers technology and processes, and bears operational risk, not just price risk. The syllabus asks for three competencies: the taxonomy of FDI forms, the choice of entry mode, and the institutional environment — the regional agreements and multilateral bodies that govern how capital and goods cross borders.',
      },
      {
        kind: 'para',
        text: 'The two taxonomies every exam question draws on are easy to keep straight if you anchor them to verbs. By MODE of establishment: greenfield FDI builds new facilities from the ground up (new plant, new jobs, new capacity), while brownfield FDI buys or merges with an existing local firm (instant market share, existing workforce, integration risk). By DIRECTION of relationship: horizontal FDI replicates the same activity abroad (a carmaker builds the same cars in another country), vertical FDI relocates a stage of the production chain (a chipmaker opens an assembly plant where labour is cheaper — upstream toward raw materials, downstream toward distribution), and conglomerate FDI enters an unrelated business altogether. Motives follow the taxonomy: market-seeking firms go horizontal to jump tariffs or serve customers locally; efficiency-seeking firms go vertical to shave unit costs; resource- and knowledge-seeking FDI chases minerals, oil, or local know-how respectively.',
      },
      { kind: 'heading', text: 'Choosing the entry mode: the ladder of commitment' },
      {
        kind: 'para',
        text: 'Entry modes form a ladder of rising control and rising risk. Exporting through agents or distributors requires the least commitment — the firm sells across the border and keeps production at home; tariff walls, transport costs and distance from the customer are its limits. Licensing and franchising rent the firm\u2019s brand, technology or business format to a local operator for royalties — low capital exposure but weak control and the permanent risk of minting a future competitor. Contract manufacturing places production with a local firm while the investor keeps design and marketing. Joint ventures share ownership with a local partner — pooling capital, local knowledge and relationships, at the price of shared control and possible conflict over strategy. Wholly-owned subsidiaries — via greenfield build or brownfield acquisition — sit at the top: full control and full profit retention, against the largest capital commitment and the full exposure of FDI risk. The WSU open marketing text (ch.7) walks this ladder with exactly these rungs, and the standard exam question presents a scenario (heavy tariffs, strict IP, partner-lawyer availability) and asks which rung fits; the logic is always the same trade — control against commitment.',
      },
      {
        kind: 'para',
        text: 'A second standard question asks why firms internalise operations at all instead of contracting through markets. The intuition is that contracts leak: technology can be appropriated, quality is hard to specify, and negotiation across legal systems is costly. When the cost of writing enforceable contracts exceeds the cost of managing the activity inside the firm, the firm crosses the border and owns the operation — FDI rather than licensing. That internalisation logic explains why FDI clusters where intangible assets (brands, processes, know-how) are the firm\u2019s main advantage and where host-country contracts are hard to enforce.',
      },
      { kind: 'heading', text: 'Regional integration: the five-rung ladder' },
      {
        kind: 'para',
        text: 'Regional economic integration asks participating countries to remove barriers among themselves in stages, and the syllabus expects the ladder recited precisely. A preferential trade agreement lowers tariffs for members on selected goods. A free trade area abolishes internal tariffs and quotas among members while each keeps its own external tariffs — the arrangement with the famous customs-office headache of rules-of-origin checks (goods entering through the lowest-external-tariff member would otherwise funnel to all); the WSU text\u2019s §2.4 uses exactly this example. A customs union adds a common external tariff, ending the origin problem (the Southern African Customs Union is the textbook case). A common market goes further, freeing movement of the factors of production — labour and capital alongside goods and services. An economic union harmonises economic policy itself — monetary union with a single currency being its deepest form (the euro area), plus coordinated fiscal and regulatory frameworks. The European Union is the deepest real-world integration project; USMCA (the successor to NAFTA) is a deep free-trade area; ASEAN\u2019s AFTA is a developing free-trade area; RCEP is the largest trade agreement by population, spanning East and Southeast Asia and Oceania.',
      },
      {
        kind: 'para',
        text: 'Integration is not automatically welfare-improving for members, and the syllabus\u2019s favourite nuance is trade creation versus trade diversion. Integration is trade-creating when a member\u2019s efficient producer displaces a costlier domestic or partner source — real efficiency gains. It is trade-diverting when a member\u2019s producer displaces a NON-member supplier that was actually cheaper, but for the external tariff wall: production shifts to a higher-cost source behind the preferential wall, a loss for world efficiency (and often for the importing country\u2019s consumers). Whether a bloc creates or diverts net trade depends on the cost gaps and the height of the common external tariff — the honest answer to "are trade blocs good?" is: it depends, and here is the mechanism that decides.',
      },
      { kind: 'heading', text: 'The institutions: who does what' },
      {
        kind: 'para',
        text: 'Four institutions cover most exam items. The World Trade Organization (WTO, est. 1995, successor to the GATT of 1947) administers the rules of goods, services and intellectual-property trade; its two signature principles are most-favoured-nation treatment (any concession to one member extends to all) and national treatment (foreign goods, once inside, are treated like domestic ones); its dispute-settlement mechanism is compulsory, and its ministerial rounds — most famously the Doha Development Agenda launched 2001 — negotiate further liberalisation, with agriculture the standing sticking point. The International Monetary Fund (IMF, Bretton Woods 1944) guards monetary stability: it lends to countries in balance-of-payments crisis, typically with policy conditionality, and monitors exchange-rate arrangements. The World Bank (also Bretton Woods) funds long-term development — infrastructure, education, health — through the IBRD and its concessional-window affiliates, not crisis lending. UNCTAD, the UN trade-and-development body, researches FDI flows and publishes the World Investment Report — the source of the FDI statistics the syllabus quotes. The one-line sorting rule: WTO makes trade rules, IMF guards short-run monetary stability, World Bank funds long-run development, UNCTAD measures and advocates for developing countries in trade and investment.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Entry mode, then integration logic',
        steps: [
          'Step 1: a software firm wants to serve a large overseas market that imposes no tariffs on software but has weak copyright enforcement and abundant low-cost engineering talent.',
          'Step 2: apply the internalisation logic. Licensing a local distributor would rent the product while copyright enforcement is weak — high appropriation risk. Exporting avoids risk but leaves service and customisation in local hands anyway.',
          'Step 3: the fitting mode is a wholly-owned subsidiary (greenfield development centre): full control over the intellectual property, direct employment of the local talent, and no tariff obstacle since none exists.',
          'Step 4: contrast — a clothing exporter facing a 25% external tariff and strict rules of origin might instead choose contract manufacturing INSIDE the bloc to jump the wall: market-seeking horizontal FDI at the light end of the ladder.',
          'Integration check: if that clothing firm\u2019s new host country joins a customs union whose external tariff pushes sourcing from the cheapest non-member fabric supplier to a dearer member supplier, the shift is trade diversion — efficiency loss despite integration.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'FDI is distinguished from portfolio investment because FDI involves:',
            options: [
              'a controlling stake, commonly ten percent or more of voting equity',
              'only purchases of government bonds abroad',
              'any transfer of money across a border',
              'exclusively greenfield construction',
            ],
            answer: 0,
            explain: 'The defining feature is lasting managerial control — the conventional ten-percent voting-equity threshold. Portfolio flows buy securities without seeking control; FDI directs operations.',
          },
          {
            q: 'A carmaker builds a plant abroad to produce the same cars it makes at home. This is:',
            options: [
              'vertical FDI',
              'horizontal FDI',
              'brownfield FDI by definition',
              'portfolio investment',
            ],
            answer: 1,
            explain: 'Horizontal FDI replicates the same activity in another country — market-seeking. Vertical FDI relocates a production stage; greenfield/brownfield describes build-versus-buy, a separate dimension.',
          },
          {
            q: 'The defining feature distinguishing a customs union from a free trade area is:',
            options: [
              'a common external tariff',
              'abolition of internal tariffs',
              'free movement of labour',
              'a common currency',
            ],
            answer: 0,
            explain: 'Both abolish internal barriers; the customs union adds one external tariff administered jointly, which removes the rules-of-origin problem a free trade area suffers. Factor mobility is the common-market rung; common currency belongs to (monetary) economic union.',
          },
          {
            q: 'A member country switches imports of a good from a cheaper non-member to a dearer member because of the bloc\u2019s external tariff. This is:',
            options: [
              'trade creation',
              'trade diversion',
              'dumping',
              'most-favoured-nation treatment',
            ],
            answer: 1,
            explain: 'Diversion shifts sourcing from the genuinely cheapest producer to a costlier one inside the preferential wall — a world-efficiency loss. Creation is the reverse: an efficient member displacing costlier domestic or partner sources.',
          },
          {
            q: 'Which institution is the correct home for balance-of-payments crisis lending with policy conditionality?',
            options: [
              'the World Trade Organization',
              'the International Monetary Fund',
              'the World Bank',
              'UNCTAD',
            ],
            answer: 1,
            explain: 'The IMF lends to countries in payments crisis, conditions on policy adjustment, and monitors exchange arrangements. The World Bank funds long-run development; the WTO adjudicates trade rules; UNCTAD researches trade and investment for development.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Mixing the two FDI taxonomies: horizontal/vertical/conglomerate describe the RELATIONSHIP to home operations; greenfield/brownfield describe the MODE of establishment — a plant can be horizontal greenfield or horizontal brownfield at once. Placing a free trade area and a customs union on the same rung: the common external tariff is exactly the difference. Calling every regional agreement "like the EU" — the EU alone combines common market with (partial) economic and monetary union; USMCA and AFTA sit far lower on the ladder. In institution questions, swapping the IMF and World Bank roles: crisis lending with conditionality is IMF territory; long-run development finance is the Bank\u2019s. And do not credit the WTO with "free trade everywhere" — it administers agreed rules and hosts negotiation; protection remains lawful within limits.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the comparative-advantage and trade-policy lessons for why trade happens and how tariffs bite. Follow with the business-environment lesson (the global sector in scanning terms) and the corporate-finance lesson (how cross-border projects are discounted and financed). Primary reading: LibreTexts, International Business (the lardbucket open edition, CC BY-NC-SA), ch.2 §2.4 "Foreign Direct Investment" and ch.5 "Regional Economic Integration"; Open Text WSU, Core Principles of International Marketing (CC BY-NC), §2.4, §2.7 and ch.7 "Global Market Entry Modes".',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'FDI = lasting controlling stake (≥10% voting equity); portfolio flows stop short of control.',
        'Horizontal/vertical/conglomerate classify direction; greenfield/brownfield classify build-vs-buy.',
        'Entry-mode ladder: export → licensing/franchising → contract manufacturing → joint venture → wholly owned; control rises with commitment.',
        'Integration ladder: PTA → FTA → customs union → common market → economic union; each rung adds one freedom.',
        'Integration creates trade when efficient members displace costlier sources; diverts trade when the tariff wall relocates sourcing to dearer members.',
        'WTO rules trade; IMF guards payments stability; World Bank funds development; UNCTAD measures FDI for development.',
      ] },
    ],
  },
  {
    id: 'com-marketing-mix-distribution-trends',
    title: 'Pricing, Distribution and Promotion: The Marketing Mix and Its Digital Turn',
    domain: 'Business & Economics',
    field: 'Marketing',
    branch: 'Pricing, Channels and Promotion',
    tier: 'core',
    concepts: [
      'Pricing objectives and the cost, value and competition anchors',
      'Skimming versus penetration pricing',
      'Channel design, intermediaries and distribution intensity',
      'The promotion mix and integrated marketing communication',
      'Digital and social-media marketing trends',
      'Relationship marketing, CRM and sustainable marketing',
    ],
    words: 1854,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The marketing mix — the famous 4Ps of product, price, place and promotion — is the manager\u2019s control panel: the four levers a firm can actually set, in a world where customers, competitors and costs are largely given. OpenStax\u2019s Principles of Marketing (ch.1) defines the discipline as creating, communicating, delivering and exchanging offerings of value, and organises the whole field around these levers; its ch.1 knowledge-check answers make the assignments crisp — price is what consumers pay, place (distribution) decides how and where the product reaches the buyer, promotion spans advertising, direct mail, social media, trade shows, events, coupons and media choices. This lesson takes the three levers the syllabus unit names — pricing, promotion and distribution — and then extends into the trends unit: how digital channels, social platforms and data-driven relationship marketing have reshaped the levers without replacing them. The library owns no other marketing lesson, so this one carries the entire unit: learn the levers, then learn how the levers are being re-tooled.',
      },
      { kind: 'heading', text: 'Pricing: three anchors and two launch strategies' },
      {
        kind: 'para',
        text: 'Every price sits somewhere among three anchors. Cost-based pricing starts from the unit cost and adds a markup — simple and defensible, but blind to what customers will pay; break-even analysis is its workhorse, finding the quantity where contribution (price minus variable cost) covers fixed costs. Value-based pricing starts from the customer\u2019s perceived benefit and prices to capture part of it — harder to measure, but the only anchor that explains why branded goods command multiples of functionally identical generics. Competition-based pricing takes rivals\u2019 prices as the reference — matching, undercutting, or positioning above — and dominates commodity markets where products are near-identical. A competent pricing answer names all three and says which dominates in the scenario given.',
      },
      {
        kind: 'para',
        text: 'Two launch strategies matter separately. Price skimming launches high and walks the price down the demand curve, harvesting early buyers\u2019 willingness to pay and recouping R&D fast — rational when the product is genuinely novel, early adopters are price-insensitive, and entry by rivals is slow (classic technology launches). Penetration pricing launches low to buy market share quickly, betting on scale economies and repeat purchase to recover the margin later — rational when demand is price-elastic, volume drives unit costs down, and a large installed base creates switching costs. The exam\u2019s standard traps: applying skimming to an elastic mass market (the low price is the whole point) and calling penetration "dumping" — penetration is a domestic strategy of temporary margin sacrifice, dumping is selling abroad below fair value, a trade-law concept the FDI lesson\u2019s institution section touches. Beyond launch, the toolkit includes psychological pricing (charm prices ending in 9), price discrimination across segments (student concessions, peak versus off-peak), bundling, and loss-leader pricing that prices one item below cost to pull traffic into profitable baskets.',
      },
      { kind: 'heading', text: 'Place: channels, intermediaries and intensity' },
      {
        kind: 'para',
        text: 'Distribution (place) is the question of how the product physically and contractually reaches the buyer. A direct channel sells producer-to-consumer (factory outlet, company website, D2C brands); an indirect channel inserts intermediaries — wholesalers who buy and resell in bulk, retailers who sell to end users, agents and brokers who facilitate without taking title. Intermediaries exist because they genuinely reduce work: they break bulk, hold inventory, assort products from many producers into convenient one-stop ranges, and carry transaction costs the producer would otherwise bear — the standard exam point is that a channel is chosen for the work it removes, not for fashion. Channel design then decides length (how many levels) and intensity at each level: intensive distribution spreads through every willing outlet (convenience goods like snacks), selective distribution restricts to chosen outlets (shopping goods like appliances), exclusive distribution grants one outlet a territory (specialty goods, luxury) — each intensity matching the buyer\u2019s search behaviour for that product class. Modern additions include vertical marketing systems, where producer and intermediaries act under single ownership, contract or one dominant member\u2019s leadership, and the omnichannel ideal — online and offline shelves managed as one inventory with one price and one brand voice.',
      },
      { kind: 'heading', text: 'Promotion: the mix, and the digital turn' },
      {
        kind: 'para',
        text: 'Promotion communicates value, and the promotion mix names its instruments: advertising (paid, non-personal, mass reach), personal selling (direct, two-way, relationship-intensive — the dominant instrument in business-to-business markets), sales promotion (short-term incentives — coupons, discounts, contests — that spike purchases), public relations and publicity (earned credibility through media and events), and direct and digital marketing (addressed mail, email, search and social advertising that target individuals). Integrated marketing communication (IMC) is the discipline of making all five instruments say the same thing in the same voice — one brand message coordinated across every touchpoint, so that a campaign\u2019s TV spot, retailer display and social post reinforce rather than contradict each other. The push-versus-pull frame completes the picture: push strategies aim promotion at channel members to stock and recommend the product (typical of personal selling and trade promotions); pull strategies aim at end consumers, whose demand then drags the product through the channel (typical of mass advertising).',
      },
      {
        kind: 'para',
        text: 'The trends unit asks how the levers have been re-tooled. Digital and social-media marketing shift spend toward search and social platforms where intent and identity are observable; content marketing and influencer marketing replace interruption with attraction — useful material or trusted voices drawing audiences in rather than ads pushing out. Data-driven relationship marketing uses customer-relationship-management systems to segment, personalise and retain — the discipline\u2019s centre of gravity moving from the single transaction to customer lifetime value, loyalty programmes and churn management. Direct-to-consumer brands collapse the channel by selling online past intermediaries, using the data they harvest to iterate product faster; martech and AI-driven personalisation industrialise this at scale, adjusting offers and prices per segment in near real time. And sustainability has become a marketing variable: ethical sourcing, honest environmental claims and the societal-marketing idea — meeting present needs while preserving future generations\u2019 ability to meet theirs, as OpenStax ch.1.4 puts it — now shape both brand trust and regulatory scrutiny. The exam\u2019s trend questions reward naming the technology AND the lever it modifies: influencer marketing is promotion; D2C is place; dynamic pricing is price; personalisation is the product experience itself.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Launch a product across the three levers',
        steps: [
          'Step 1: a firm launches a mid-priced wireless earbud with noise cancellation in a market where two established rivals sell at both premium and budget ends.',
          'Step 2: pricing anchor — the premium rival prices at double and the budget rival at half; the product targets quality-conscious young professionals, so value-based pricing slightly under the premium tier fits. Launch with penetration-lite: an introductory price 10% below the planned level to seed reviews, reverting after ninety days.',
          'Step 3: place — shoppers of this class research online and buy in electronics chains; selective distribution through the top electronics retailers plus the firm\u2019s own site (an omnichannel stock pool) matches the search behaviour; intensive vending-machine spread would dilute the brand at no gain.',
          'Step 4: promotion — pull-heavy IMC: search ads capture existing intent (buyers searching "noise cancelling under X"), tech reviewers and creators supply credible evaluation content, and in-store demos at the selected chains convert; a modest trade-promotion margin secures shelf placement (the push complement).',
          'Check the levers are consistent: value price supports the brand claim; selective outlets preserve the price floor; the pull message and the retail demo say the same thing — IMC holds.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A new pharmaceutical-style product with patents and price-insensitive early adopters is launching. The fitting strategy is:',
            options: [
              'penetration pricing',
              'price skimming',
              'loss-leader pricing',
              'psychological pricing',
            ],
            answer: 1,
            explain: 'Skimming harvests high early willingness to pay and walks down later — rational for genuinely novel products with slow-rival entry and inelastic early demand. Penetration suits elastic mass markets where scale matters.',
          },
          {
            q: 'The economic reason intermediaries persist in channels is that they:',
            options: [
              'raise prices for consumers',
              'reduce total transaction work by breaking bulk and holding inventory',
              'are required by law in most countries',
              'eliminate the need for promotion',
            ],
            answer: 1,
            explain: 'Wholesalers and retailers convert bulk production into convenient assortments, store inventory, and consolidate transactions — work the producer would otherwise perform. Channels are chosen for the costs they remove.',
          },
          {
            q: 'Exclusive distribution of a luxury watch brand matches which buyer-behaviour logic?',
            options: [
              'convenience goods are bought often and cheaply, so spread everywhere',
              'specialty goods involve search for the right brand, so a single authorised outlet protects image and service',
              'shopping goods need the lowest possible price at every corner',
              'distribution intensity is irrelevant to brand value',
            ],
            answer: 1,
            explain: 'Intensity should match search behaviour: intensive for convenience goods, selective for shopping goods, exclusive for specialty goods where scarcity and service justify the restricted reach.',
          },
          {
            q: 'Integrated marketing communication (IMC) means:',
            options: [
              'using only digital channels',
              'coordinating all promotion instruments to deliver one consistent brand message',
              'replacing salespeople with advertising',
              'merging marketing and accounting departments',
            ],
            answer: 1,
            explain: 'IMC is consistency engineering: advertising, selling, sales promotion, PR and direct/digital marketing planned to speak with one voice across touchpoints, so each reinforces the others.',
          },
          {
            q: 'A direct-to-consumer brand selling online past retailers primarily modifies which mix lever?',
            options: [
              'price — by always undercutting rivals',
              'place — by shortening the channel and owning customer data',
              'product — by changing what the product does',
              'promotion — by banning advertising',
            ],
            answer: 1,
            explain: 'D2C is a place (distribution) innovation: the producer takes over retail, capturing margin, direct feedback and data. Price and promotion then adapt to the new channel, but the lever changed is place.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling penetration pricing "dumping" — dumping is a cross-border pricing-below-fair-value concept under trade law; penetration is a launch strategy inside a market. Choosing distribution intensity by fashion instead of buyer behaviour — the convenience/shopping/specialty mapping is the tested logic. Treating IMC as "more advertising" — it is consistency across ALL instruments, including the ones that are not ads. Confusing push with pull: push targets the channel (trade margins, salesforce), pull targets the end buyer whose demand drags product through the channel; most real campaigns blend both. And in trend questions, naming the technology without naming the lever it modifies — always finish with "this is a price/place/promotion/product innovation".',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — foundation level. Follow with the business-environment lesson (the social and technological sectors behind the digital turn) and the demand-and-production lesson (the consumer theory under the demand curve pricing tries to read). Primary reading: OpenStax, Principles of Marketing (2023, openstax.org, CC BY-NC-SA), ch.1 "Marketing and Customer Value" and Unit 3 "Product, Promotion, Price, and Place"; OpenStax, Introduction to Business (CC BY), ch.11 "Creating Products and Pricing Strategies" and ch.12 "Distributing and Promoting Products and Services"; Open Text WSU, Core Principles of International Marketing (CC BY-NC), ch.10-11 for channels and global promotion.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The mix: product, price, place, promotion — the levers management actually sets.',
        'Pricing anchors: cost-plus (break-even), value-based (perceived benefit), competition-based (rival reference).',
        'Skim for novel products with inelastic early demand; penetrate for elastic markets where scale wins.',
        'Channels: direct or via wholesalers/retailers/agents; intensity follows buyer search — intensive, selective, exclusive.',
        'Promotion mix: advertising, personal selling, sales promotion, PR, direct/digital — coordinated by IMC; push moves the channel, pull moves the consumer.',
        'Trends: search/social spend, content and influencer attraction, CRM and lifetime value, D2C channel collapse, dynamic personalisation, sustainability as a brand variable.',
      ] },
    ],
  },
  {
    id: 'pol-western-political-thought-canon',
    title: 'Western Political Thought: Plato to Marx in Eight Thinkers',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'History of Political Thought',
    tier: 'intermediate',
    concepts: [
      'Plato: justice, the philosopher-king and the ideal state',
      'Aristotle: the polis, citizenship and the mixed constitution',
      'Machiavelli: virtù, fortuna and the autonomy of politics',
      'Hobbes: the state of nature and the absolute sovereign',
      'Locke: natural rights, consent and limited government',
      'Rousseau, Mill and Marx: general will, liberty, historical materialism',
    ],
    words: 2253,
    readMins: 11,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The western canon is the spine of political science: nearly every concept the discipline uses — sovereignty, consent, rights, liberty, representation — was forged in a specific argument by a specific thinker confronting a specific crisis. The syllabus treats the canon as a sequence of dialogues: each thinker answers the problem their predecessor left unresolved, which is why the exam asks not merely what Hobbes said but what Hobbes answered. This lesson walks the line in eight stations — Plato, Aristotle, Machiavelli, Hobbes, Locke, Rousseau, Mill and Marx — and flags at each step the one question each thinker is the canonical authority on. The library\u2019s existing lessons own the institutional devices (separation of powers, regimes spectrum, international theory); this lesson owns the intellectual history underneath them.',
      },
      { kind: 'heading', text: 'The ancients: Plato and Aristotle' },
      {
        kind: 'para',
        text: 'Plato\u2019s Republic (as the Stanford Encyclopedia\u2019s entry on Plato\u2019s ethics and politics presents it) asks what justice is, first in the soul and then in the city — the analogy between them is the book\u2019s engine. In the soul, justice is each part (reason, spirit, appetite) doing its own work under reason\u2019s rule; in the city, justice is each class (rulers, guardians, producers) doing its own work under the rule of the wisest. That argument produces the philosopher-kings: only those who know the Form of the Good — who have climbed from opinion to knowledge — are fit to rule, and rule is their burden rather than their privilege. Plato\u2019s ideal state is thus an epistemic aristocracy: government by knowledge, with the community of guardians dissolving the private family among the protector class so that no private interest competes with the common good. The critique the syllabus expects: Karl Popper\u2019s charge of totalitarianism versus the defenders\u2019 reading of the Republic as a psychological allegory — and either way, Plato sets the enduring question of whether political authority is a form of expertise.',
      },
      {
        kind: 'para',
        text: 'Aristotle\u2019s Politics answers with a biologist\u2019s sobriety. The polis exists by nature: humans are political animals whose capacities complete themselves only in a self-governing community, and the city is prior to the individual in the sense that the whole precedes the part. Aristotle classifies constitutions by who rules and in whose interest: rule by one, few or many yields kingship, aristocracy or polity when the common interest governs, and tyranny, oligarchy or democracy when the rulers\u2019 own interest governs. His preferred practical regime is the polity — the mixed constitution blending oligarchic and democratic elements, stabilised by a large middle class, and his distributive-justice maxim allocates offices by relevant merit rather than equally to all. Citizenship is defined not by residence but by the shared capacity to rule and be ruled in turn — the ancestor of the republican idea of the citizen as co-governor. Where Plato seeks the ideal city against the grain of existing ones, Aristotle surveys 158 constitutions to find the best attainable — political science as comparative observation.',
      },
      { kind: 'heading', text: 'The renaissance and the social contract: Machiavelli, Hobbes, Locke' },
      {
        kind: 'para',
        text: 'Machiavelli\u2019s The Prince (1513) breaks the classical-Christian frame in which politics is a branch of ethics. His question is empirical: how does one acquire and keep power in a world as it is, not as it ought to be? The answer separates virtù — the ruler\u2019s skill, boldness and adaptability — from fortuna, the fortune that governs half of events and leaves the other half to preparation. The notorious lesson is that a prince must learn "how not to be good" and use that knowledge according to necessity: cruelty well-used can consolidate order where misplaced mercy breeds disorder, and being feared rather than loved is safer, provided the prince avoids hatred. The SEP\u2019s entry stresses the deeper reading too: Machiavelli\u2019s Discourses admire republics, so the consistent core is not tyranny but the autonomy of politics — the claim that political success has its own standards, distinct from private morality, and that a founder\u2019s law-giving may require extraordinary means to establish ordinary freedom.',
      },
      {
        kind: 'para',
        text: 'Hobbes\u2019s Leviathan (1651), written in the shadow of the English civil war, begins from the state of nature — the thought-experiment of humans without common authority. With rough natural equality, scarcity, and diffidence, life becomes "solitary, poor, nasty, brutish, and short": a war of every man against every man in which there is no industry, no property, no justice, because there is no common power. The escape is the social contract: each subject covenants with every other to authorise a sovereign whose judgments end all disputes. Because the covenant is among subjects (not between subjects and sovereign), the sovereign cannot breach it and cannot justly be resisted — sovereign power must be absolute and undivided, whether held by one, few or many, because divided sovereignty is what produced the civil war. Hobbes is therefore the canonical authority on the problem the social contract exists to solve: why any authority at all, rather than anarchy.',
      },
      {
        kind: 'para',
        text: 'Locke\u2019s Second Treatise (1689, justifying the Glorious Revolution) rebuilds the contract with a different state of nature and a different sovereign. The natural state is governed by natural law knowable by reason: individuals are free and equal, and hold pre-political rights to life, liberty and property — property created by mixing one\u2019s labour with nature, bounded by the proviso of leaving "enough and as good" for others. Government exists by consent to protect those rights, holding only fiduciary, legislative-supreme-but-limited power. When rulers violate the trust — acting by arbitrary will rather than established law — the people may dissolve the government and reconstitute it: the right of rebellion. Locke\u2019s machinery — consent, limited government, the rule of law, and tolerance argued in the contemporaneous Letter Concerning Toleration — is the direct ancestor of constitutional liberalism, and the syllabus\u2019s standard contrast is exact: Hobbes trades liberty for order, Locke limits government to secure liberty, and both use contract language for opposite conclusions.',
      },
      { kind: 'heading', text: 'The moderns: Rousseau, Mill, Marx' },
      {
        kind: 'para',
        text: 'Rousseau\u2019s Social Contract (1762) asks how political association can be legitimate — how people, born free, can bind themselves without losing freedom. His answer recasts the contract: each associate gives themselves to the whole community, so no one is subject to any private will, and sovereignty belongs to the general will — the collective will aimed at the common good, distinct from the will of all, which is merely the sum of private interests. Obedience to law the citizen has (as part of the sovereign people) prescribed to oneself is freedom, not its loss; whoever refuses may be "forced to be free" — the phrase the syllabus always quotes as the tension between popular sovereignty and individual dissent. Rousseau\u2019s Discourse on Inequality supplies the critical backdrop: property and inequality corrupt natural liberty, and civil society entrenches them — the argument that made Rousseau the intellectual father of radical democracy and, later, of revolution.',
      },
      {
        kind: 'para',
        text: 'Mill\u2019s On Liberty (1859) draws the line between collective and individual life. The harm principle holds that the only justification for coercing an adult against their will is preventing harm to others — never their own good, physical or moral. Against the tyranny of the majority (both law and social pressure), Mill defends near-absolute freedom of thought and discussion — truth benefits from contest even when the dissenting view is false — and freedom of the "experiments in living" by which individuals develop their capacities. His Utilitarianism reconciles the doctrine with these rights by quality as well as quantity of pleasure, and Considerations on Representative Government adds the institutional layer: representative institutions educate citizens and guard against the despotism of custom. Mill is the canonical authority on the scope of individual liberty in a democratic age. Marx closes the sequence by rejecting the liberal frame itself: historical materialism holds that the legal and political order is a superstructure resting on the economic base, that history moves through class struggle — slave, feudal, bourgeois, and finally the proletariat against the bourgeoisie — and that liberal rights in the capitalist era are formal freedoms whose real content depends on one\u2019s class position. The Communist Manifesto (1848) and Capital together predict the system\u2019s crisis tendencies and the expropriation of the expropriators — the canonical authority on politics as the expression of economic structure.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Place four claims with their thinkers',
        steps: [
          'Claim 1: "The sovereign cannot injure the subjects, because the subjects authorised the sovereign among themselves; rebellion is therefore unjustifiable." — Hobbes (Leviathan): the covenant is between subjects, so absolute sovereignty is the price of escaping the state of nature.',
          'Claim 2: "When the legislature acts against the trust placed in it, the people have a right to constitute a new legislative." — Locke (Second Treatise): government is fiduciary; violated trust dissolves it — the right of rebellion.',
          'Claim 3: "The only purpose for which power can rightfully be exercised over any member of a civilised community, against his will, is to prevent harm to others." — Mill (On Liberty): the harm principle as the boundary of coercion.',
          'Claim 4: "It is much safer to be feared than loved, if one must choose; but the prince must avoid hatred." — Machiavelli (The Prince): the autonomy of political prudence from private morality.',
          'Check the method: identify the PROBLEM each thinker answers (anarchy, betrayed trust, majority tyranny, acquiring a state) — matching claim to problem is the reliable exam strategy, and misattributions usually pair one thinker\u2019s claim with another\u2019s problem.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In Plato\u2019s Republic, the philosopher-kings are fit to rule because they:',
            options: [
              'own the largest property in the city',
              'have knowledge of the Form of the Good, rising from opinion to knowledge',
              'are elected by the producing class',
              'have the strongest military command',
            ],
            answer: 1,
            explain: 'Plato grounds authority in epistemic superiority: those who know the Good govern as the soul\u2019s reason governs appetites. Rule is expertise, and its exercise is a duty for those qualified.',
          },
          {
            q: 'Aristotle\u2019s preferred practical regime, which he calls polity, is best described as:',
            options: [
              'the unbounded rule of the poor majority',
              'a mixed constitution blending oligarchic and democratic elements, stabilised by a large middle class',
              'the absolute kingship of the wisest one',
              'the rule of the wealthiest citizens only',
            ],
            answer: 1,
            explain: 'The polity mixes democratic and oligarchic devices under the common interest; the middle class is its stabiliser because it is large enough to outweigh both extremes and temper enough to rule by law.',
          },
          {
            q: 'For Hobbes, the social covenant that founds the sovereign is made:',
            options: [
              'between the sovereign and each subject separately',
              'among the subjects, who each authorise the sovereign with every other subject',
              'between the sovereign and foreign powers',
              'only after the sovereign proves just conduct',
            ],
            answer: 1,
            explain: 'Because the covenant runs among subjects, no subject can claim the sovereign breached it — hence the sovereign\u2019s absolute and undivided authority, and the thesis that rebellion is unjustifiable.',
          },
          {
            q: 'Locke\u2019s property right arises, in the first instance, when a person:',
            options: [
              'is granted land by the sovereign',
              'mixes labour with the resources of nature, within the "enough and as good" proviso',
              'wins it in a just war',
              'inherits it through the eldest line',
            ],
            answer: 1,
            explain: 'The labour theory of property: ownership begins in working nature, bounded by leaving as much and as good for others. Government exists by consent to protect such pre-political rights — and loses legitimacy when it violates the trust.',
          },
          {
            q: 'Rousseau\u2019s "general will" differs from the "will of all" because it:',
            options: [
              'is the sum of every private interest',
              'aims at the common good rather than aggregating private interests',
              'is decided by the elected assembly only',
              'belongs exclusively to the monarch',
            ],
            answer: 1,
            explain: 'The will of all is an arithmetic sum of private wills; the general will is what remains when citizens ask as members of the community what is good for the whole. That distinction grounds legitimate law — and the notorious difficulty of knowing it in practice.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading Machiavelli as merely a teacher of tyranny — the Discourses\u2019 republicanism shows the consistent core is political autonomy, not cruelty for its own sake. Attributing separation of powers to Hobbes — Hobbes demands UNDIVIDED sovereignty; the division is Locke\u2019s (legislative supreme but limited) and later Montesquieu\u2019s. Equating Rousseau\u2019s general will with majority voting — the majority may be wrong about the general will, and "forced to be free" marks exactly that tension. Forgetting that Marx\u2019s claim is about structure, not conspiracy: classes, not individuals, are the actors, and rights themselves carry class content in his critique. And in attribution questions, match the problem to the thinker first — most errors pair a correct claim with the wrong crisis.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the regimes-spectrum lesson (how the classification tradition runs on to modern typologies) and the Indian-political-thought traditions when the syllabus\u2019s companion unit is authored. Primary reading: the Stanford Encyclopedia of Philosophy (plato.stanford.edu, open access) — "Plato\u2019s Ethics and Politics in The Republic", "Aristotle\u2019s Political Theory", "Niccolò Machiavelli", "Hobbes\u2019s Moral and Political Philosophy", "Locke\u2019s Political Philosophy", "Jean-Jacques Rousseau", "Mill\u2019s Moral and Political Philosophy", and "Karl Marx".',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Plato: justice as each part doing its work; philosopher-kings rule by knowledge of the Good.',
        'Aristotle: the polis is natural; classify constitutions by ruler and interest; prefer the mixed polity with a strong middle class.',
        'Machiavelli: virtù meets fortuna; politics has its own standards — the Prince teaches necessity, the Discourses admire republics.',
        'Hobbes: escape the war of all against all by authorising an absolute, undivided sovereign; rebellion unjustifiable.',
        'Locke: natural rights to life, liberty, property; government by consent, limited and fiduciary; violated trust justifies reconstitution.',
        'Rousseau: legitimacy lives in the general will; Mill: the harm principle bounds coercion; Marx: politics is the superstructure of class struggle.',
      ] },
    ],
  },
]
