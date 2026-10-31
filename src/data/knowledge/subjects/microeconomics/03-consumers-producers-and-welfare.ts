/**
 * Knowledge Universe — Microeconomics — Chapter 03: Consumers, Producers & Welfare
 * 2 lessons · ~3,540 words
 * field: Microeconomics
 * legacy sources: x20-foundations-pass.ts, x32-ugc-net-paper2-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Consumer and Producer Theory, Welfare Economics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 com-demand-consumer-production-theory — Consumer Behaviour and Production: The Theory Behind the Curves
 *   03.2 econ-market-efficiency-surplus — Competitive Markets: Efficiency, Surplus and Welfare
 */
import type { KnowledgeTopic } from '../../types'

export const microeconomicsCh03: KnowledgeTopic[] = [
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
    id: 'econ-market-efficiency-surplus',
    title: 'Competitive Markets: Efficiency, Surplus and Welfare',
    domain: 'Business & Economics',
    field: 'Microeconomics',
    branch: 'Welfare Economics',
    tier: 'core',
    concepts: [
      'Consumer surplus as the area under demand, above price',
      'Producer surplus as the area above supply, below price',
      'Community surplus and the maximum-welfare claim',
      'Allocative efficiency: price equals marginal cost',
      'Productive efficiency at minimum average cost',
      'Elasticity and the incidence of a tax',
      'Deadweight loss as the measuring rod',
    ],
    words: 1440,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Prices coordinate without anyone planning to, but coordination alone is a weak defence of markets. The stronger claim is about welfare: under the right conditions, a competitive equilibrium delivers the largest possible total gain to buyers and sellers combined. This lesson builds that claim from two areas on a diagram. Consumer surplus is what buyers value above what they pay; producer surplus is what sellers receive above what they would have accepted. Where supply meets demand, the sum of the two — community surplus — is maximised, and the marginal buyer values the good exactly at the marginal cost of making it. Every interference with that equilibrium redistributes surplus and usually destroys some of it, and the geometry says precisely how much.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Surplus analysis is the welfare toolkit that later topics assume. Market failure is defined as a shortfall from the community-surplus maximum; tax incidence questions are surplus-division questions; the deadweight triangles drawn around tariffs and monopoly are the same triangle computed here. Learn it once as arithmetic on a diagram and the rest of microeconomics reads as applications.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Willingness to pay', def: 'The maximum a buyer will give up for a unit — the height of the demand curve at that quantity. It encodes marginal benefit: the curve is not just a price-quantity relation but a ladder of valuations, tallest for the buyer who wants the good most.' },
          { term: 'Consumer surplus', def: 'The gap between willingness to pay and the price actually paid, summed over all units bought. On the diagram it is the area between the demand curve and the price line. A price fall raises it twice over: buyers pay less on units they already bought, and new buyers enter the market.' },
          { term: 'Marginal cost as the supply curve', def: 'Under competition each seller offers units up to the point where price equals marginal cost, so the supply curve is the ladder of marginal costs. Producer surplus — price minus marginal cost, summed — is the area between the price line and the supply curve.' },
          { term: 'Community surplus', def: 'Consumer surplus plus producer surplus. At competitive equilibrium this total is as large as it can be: every unit for which someone\'s willingness to pay exceeds the marginal cost of production gets produced, and no unit beyond that point is made.' },
          { term: 'Allocative efficiency', def: 'The condition that the last unit produced is worth exactly what it costs society to make: price equals marginal cost. Price measures the marginal buyer\'s benefit, marginal cost measures the resources absorbed; equality means the mix of goods cannot be improved by making more of one and less of another.' },
          { term: 'Deadweight loss', def: 'The community surplus destroyed when price departs from marginal cost — the triangle between demand and supply cut off by the interfering price or tax. It is not a transfer: nobody receives it. It is the value of trades that would have benefited both sides but never happen.' },
        ],
      },
      {
        kind: 'para',
        text: 'Elasticity decides who captures and who loses surplus when price moves. If demand is inelastic, buyers cannot escape a price rise, so they surrender a large slice of their surplus — the classic result that cigarette taxes land on smokers, not sellers. If demand is elastic, buyers defect and sellers absorb the blow. The same logic governs a tax: the side of the market that is relatively less elastic bears the larger share of the burden, whatever the law says about who writes the cheque. Statutory incidence and economic incidence are different animals, and elasticity is the beast that carries the burden between them.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Surplus arithmetic on a linear market',
        steps: [
          'Demand: P = 100 − Q. Supply: P = 20 + Q. Equilibrium: 100 − Q = 20 + Q, so Q = 40 and P = 60.',
          'Consumer surplus is the triangle under demand above the price: base 40, height (100 − 60) = 40, area = ½ × 40 × 40 = 800.',
          'Producer surplus is the triangle above supply below the price: base 40, height (60 − 20) = 40, area = 800. Community surplus = 1,600.',
          'Now a 20-per-unit tax is imposed and, with symmetric elasticities here, splits evenly: buyers pay 70, sellers net 50, quantity falls to 30.',
          'New surpluses: consumers ½ × 30 × 30 = 450; producers ½ × 30 × 30 = 450; government revenue 20 × 30 = 600. Total = 1,500.',
          'Deadweight loss = 1,600 − 1,500 = 100 — the triangle on the 10 units (30 to 40) whose willingness to pay exceeded marginal cost but which the tax now prices out. Revenue is a transfer; the 100 is the destruction.',
        ],
      },
      {
        kind: 'para',
        text: 'The efficiency conditions deserve their own statement, because competitive markets deliver both. Productive efficiency: in the long run, entry and exit drive price to the minimum of average total cost, so output is produced at the lowest possible resource cost per unit — waste is competed away. Allocative efficiency: price equals marginal cost, so the value of the last unit to consumers just covers what society gives up to make it. Both conditions together say the market neither wastes resources nor misdirects them — the two trophies the perfect-competition lesson derives from the firm\'s decision, restated here from society\'s ledger.',
      },
      {
        kind: 'para',
        text: 'The claim has conditions, and the conditions are where the honest caveats live. Surplus is maximised only if prices carry all costs and benefits — an externality breaks the link between private and social marginal cost. It assumes no market power — a price setter holds price above marginal cost and parks a triangle for itself. It says nothing about the distribution of the surplus: a market can maximise community surplus while the consumer half goes hungry, which is why efficiency and equity are separate questions requiring separate instruments. The measuring rod is exact; what counts as a good reading is not the rod\'s job.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A buyer would pay 90 for a good priced at 60. What is her consumer surplus on that unit?',
            options: ['30', '90', '60', '150'],
            answer: 0,
            explain: 'Consumer surplus is willingness to pay minus price: 90 − 60 = 30. Summing such gaps over all buyers gives the triangular area on the diagram.',
          },
          {
            q: 'A tax is placed on a good with highly inelastic demand. Who bears most of the burden, and why?',
            options: [
              'Sellers, because supply curves are always more elastic',
              'Buyers, because they cannot easily reduce quantity when price rises',
              'The government, because it collects the revenue',
              'It is shared exactly equally regardless of elasticities',
            ],
            answer: 1,
            explain: 'With inelastic demand, quantity barely falls when the tax raises the price, so buyers keep buying and absorb most of the burden. Elasticity, not the legal assignment of the tax, determines economic incidence.',
          },
          {
            q: 'Deadweight loss from a tax is best described as:',
            options: [
              'revenue the government wastes on administration',
              'a transfer from consumers to producers',
              'the value of mutually beneficial trades prevented by the tax',
              'the difference between consumer and producer surplus',
            ],
            answer: 2,
            explain: 'The triangle counts units for which willingness to pay exceeded marginal cost but which are no longer traded. Government revenue is a transfer, not a loss; the DWL is the genuinely destroyed part.',
          },
          {
            q: 'Allocative efficiency requires which condition?',
            options: [
              'Price equals average total cost',
              'Price equals marginal cost',
              'Marginal revenue equals average revenue',
              'Consumer surplus equals producer surplus',
            ],
            answer: 1,
            explain: 'P = MC aligns the marginal buyer\'s valuation with the marginal resource cost of production — the social optimum. Price equal to average cost is the break-even condition, a different test.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Students routinely read the surplus triangles off the wrong curves: consumer surplus runs between demand and price, producer surplus between price and supply — never between the two curves directly. A second trap is treating tax revenue as part of the loss; it is a transfer with its own uses. The third is assuming the side that legally pays a tax bears it — incidence follows elasticity, not the statute, and the exam question is almost always built on that inversion.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Supply, Demand and Elasticity — the curves and responsiveness measures used here as tools.',
          'Next: When Markets Fail — what happens to community surplus when prices stop telling the truth.',
          'Then: the tariff lesson, which runs this exact welfare accounting across borders.',
          'Revision cue: redraw the taxed-market diagram from memory and label all four areas plus the triangle.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Demand and supply curves are ladders of marginal benefit and marginal cost.',
          'Consumer plus producer surplus is maximised at competitive equilibrium.',
          'P = MC is allocative efficiency; minimum ATC is productive efficiency.',
          'Elasticity assigns the burden of any price intervention — the inelastic side pays.',
          'Deadweight loss is destroyed surplus, not transferred surplus; it is the cost of the interference.',
        ],
      },
    ],
  },
]
