/**
 * Knowledge Universe — Business Economics — Chapter 01: Costs & Production
 * 1 lesson · ~2,272 words
 * field: Business Economics
 * legacy sources: x15-business-law.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Costs & Production]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bus-cost-concepts — Cost Concepts for Business Decisions
 */
import type { KnowledgeTopic } from '../../types'

export const businessEconomicsCh01: KnowledgeTopic[] = [
  {
    id: 'bus-cost-concepts',
    title: 'Cost Concepts for Business Decisions',
    domain: 'Business & Economics',
    field: 'Business Economics',
    branch: 'Costs & Production',
    tier: 'core',
    concepts: [
      'Microeconomics: the firm-level lens on choice',
      'Explicit and implicit costs; economic versus accounting profit',
      'Fixed, variable and semi-variable costs',
      'Total, average and marginal cost arithmetic',
      'Diminishing returns and the U-shaped cost curve',
      'Economies and diseconomies of scale',
      'Sunk and opportunity costs as decision filters',
      'Break-even and margin of safety',
    ],
    words: 0,
    readMins: 0,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Economics studies scarcity from two heights. Macroeconomics looks down on the whole economy — national income, aggregate demand, inflation — territory covered by the measuring-the-economy and inflation lessons in the economics chapters. Microeconomics stands at eye level with the decision-makers: a household allocating a salary, a firm choosing an output level, a manager deciding whether to shut a product line. Business decisions are micro decisions almost by definition, and the firm-side half of microeconomics is really the study of one thing — cost. What does the next unit cost? What would we give up by choosing this instead of that? Which numbers in the accounts should change a decision, and which are noise? This lesson assembles the cost concepts every such decision runs on.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Pricing, outsourcing, product-line closures, capacity expansion, accepting or rejecting a special order — every one of these decisions is a cost question wearing a business suit. Firms that reason with the wrong cost concept (forgetting implicit costs, honouring sunk ones, allocating head-office rent to products that never caused it) systematically take bad decisions with confident arithmetic. The concepts here are the immune system against that.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Start with what a cost actually is. Explicit costs are payments that cross the counter: wages, raw materials, rent, interest, power bills. Implicit costs are the opportunity costs of resources the firm already owns — the owner’s own time, the family building housing the workshop, the savings invested without interest. Accountants, who must verify transactions, deduct only explicit costs; their result is accounting profit. Economists deduct explicit plus implicit costs; their result is economic profit. A shop that clears ₹6 lakh after paying all bills, while the owner could have earned ₹5 lakh in a salaried job and ₹1.2 lakh renting out the premises, is making an accounting profit of ₹6 lakh — and an economic loss of ₹0.2 lakh: the business destroys value relative to the owner’s next best alternative. Related is normal profit: the minimum return just sufficient to keep the entrepreneur’s resources in this business rather than the next best use. Zero economic profit is not failure — it means the firm is doing exactly as well as the best alternative, covering every implicit cost including normal profit.',
      },
      {
        kind: 'formula',
        name: 'Economic profit',
        latex: '\\pi_e = R - (C_{explicit} + C_{implicit})',
        meaning: 'Revenue minus explicit costs minus implicit costs; positive means the firm beats all alternatives, zero means it just matches them.',
      },
      {
        kind: 'para',
        text: 'For output decisions, costs sort by how they respond to production. Fixed costs do not move with output in the short run — rent, salaries of permanent staff, insurance, depreciation of machinery — and are incurred even at zero output. Variable costs rise and fall with volume: materials, power, piece-rate wages, freight. Semi-variable costs are hybrids — a telephone bill with a fixed rental plus usage charges, electricity with a demand charge plus a per-unit rate. The distinction defines the short run itself: the period over which at least one input is fixed. In the long run every input can be varied — no cost is truly fixed; the firm can renegotiate leases, resize the plant, exit the industry. Adding the categories, total cost is fixed cost plus variable cost, and dividing by output converts the totals into averages.',
      },
      {
        kind: 'formula',
        name: 'Average cost and marginal cost',
        latex: 'AC = \\frac{TC}{Q} = \\frac{FC}{Q} + \\frac{VC}{Q}, \\qquad MC = \\frac{\\Delta TC}{\\Delta Q}',
        meaning: 'Average cost is total cost per unit of output; marginal cost is the addition to total cost from producing one more unit. Since fixed cost does not change with output, the marginal cost of a unit is driven entirely by its variable cost.',
      },
      {
        kind: 'para',
        text: 'The arithmetic is worth doing once by hand. Suppose fixed cost is ₹60,000 and variable cost rises with output as in the table below. Reading across each row: total cost is fixed plus variable; average cost is total cost divided by quantity; marginal cost is the step up in total cost from the previous unit.',
      },
      {
        kind: 'list',
        items: [
          'Output 0 — fixed 60,000, variable 0, total 60,000; average cost undefined at zero output.',
          'Output 1 — variable 20,000, total 80,000, average 80,000, marginal 20,000.',
          'Output 2 — variable 36,000, total 96,000, average 48,000, marginal 16,000.',
          'Output 3 — variable 48,000, total 108,000, average 36,000, marginal 12,000.',
          'Output 4 — variable 60,000, total 120,000, average 30,000, marginal 12,000.',
          'Output 5 — variable 78,000, total 138,000, average 27,600, marginal 18,000.',
          'Output 6 — variable 102,000, total 162,000, average 27,000, marginal 24,000.',
        ],
      },
      {
        kind: 'para',
        text: 'The average-marginal rule explains the shape of the numbers. When marginal cost is below average cost, producing another unit drags the average down; when marginal cost is above average cost, it pulls the average up; marginal cost therefore crosses average cost exactly at average cost’s minimum — output 6 is heading that way in the table. Why does marginal cost fall at first and rise later? The law of diminishing marginal returns. In the short run the firm keeps some factor fixed — the machine, the shop floor — and adds units of a variable factor to it. Early additions specialise and cooperate, so each extra worker adds more output than the last, and the marginal cost of each unit falls. Past a point, the fixed factor becomes crowded: the tenth worker queues for the same machine, each extra worker adds less output than the last, and the marginal cost of each unit rises. The U-shape of short-run average cost is diminishing returns written in rupees. It is a short-run phenomenon: it is caused by a fixed factor, not by the firm being large.',
      },
      {
        kind: 'para',
        text: 'Scale is the long-run story, and its logic is different. Moving along the long-run average cost curve, the firm varies every input together. Economies of scale push long-run average cost down as output expands: indivisible machinery used closer to capacity, bulk-purchase discounts, deeper specialisation of management and labour, cheaper finance for larger firms. Beyond some size, diseconomies take over: layers of management thicken, communication slows, coordination costs grow faster than output, and long-run average cost turns upward. The lowest point reachable on the long-run curve defines the minimum efficient scale — the smallest output at which the firm achieves minimum long-run average cost, and a clue to how many firms an industry can support. The classic error here is worth a warning: diminishing returns (short run, one fixed factor) and diseconomies of scale (long run, firm size) are different mechanisms that happen to both bend a cost curve upward.',
      },
      {
        kind: 'callout',
        title: 'Common pitfalls',
        text: 'First, dividing fixed cost by a planned volume and calling the result “the cost of one unit” mixes average and marginal reasoning — pricing that number treats fixed cost as if it varied. Second, sunk costs are not fixed costs: a fixed cost recurs and can be avoided by shutting down; a sunk cost is already spent and unrecoverable, and no decision can change it. Third, “zero economic profit” is not a loss — it includes normal profit, the entrepreneur’s own opportunity cost, fully paid.',
        tone: 'warn',
      },
      {
        kind: 'para',
        text: 'That leads to the two great decision filters. A sunk cost — money already spent on a machine, an advertising campaign, a half-built project — is irrelevant to every forward-looking choice precisely because no future action can recover it; only incremental, avoidable costs count. An opportunity cost is the value of the best alternative forgone: occupying the family warehouse for production means forgoing its rent, and that forgone rent is a real cost of production even though no invoice records it. The working distinction is between relevant costs, which differ between the alternatives being compared, and irrelevant costs, which do not — whether that is a sunk cost, an allocated share of common fixed costs, or a cost already committed either way.',
      },
      {
        kind: 'example',
        title: 'Worked Case: Keep or Close the Product Line',
        steps: [
          'The situation: a firm’s mugs line shows a “loss” of ₹40,000 after the accounts allocate it ₹1,50,000 of head-office rent and depreciation on machinery bought two years ago. Mugs revenue is ₹8,00,000; their avoidable costs (materials, labour, power, dedicated supervisor) are ₹7,50,000.',
          'Filter the sunk and allocated: the rent is paid for the whole building whether or not mugs are made — irrelevant; the machine’s purchase price is spent — sunk and irrelevant. Both exist on one side of each alternative.',
          'Compare the alternatives: keep mugs and the firm nets ₹8,00,000 − ₹7,50,000 = ₹50,000; close mugs and it nets zero from the line, while the rent and depreciation continue unchanged.',
          'Add the opportunity cost check: if the vacated space could be sublet for ₹80,000 a year, closing would yield ₹80,000 — better than ₹50,000 — and closing becomes the right call.',
          'State the principle: only costs that differ between alternatives (the ₹7,50,000 avoidable set, the ₹80,000 sublet) drive the decision; the allocated ₹1,50,000 was noise that made a profitable line look sick.',
        ],
      },
      {
        kind: 'para',
        text: 'Break-even analysis packages the fixed-variable split into planning arithmetic. Each unit sold at price P contributes its price minus its average variable cost toward covering fixed cost; break-even is reached exactly when total contribution equals fixed cost.',
      },
      {
        kind: 'formula',
        name: 'Break-even quantity and margin of safety',
        latex: 'Q^* = \\frac{FC}{P - AVC}, \\qquad MoS = \\frac{Q_{actual} - Q^*}{Q_{actual}}',
        meaning: 'Units needed to cover fixed cost: fixed cost divided by contribution per unit. Margin of safety is the fraction by which sales can fall before losses begin.',
      },
      {
        kind: 'example',
        title: 'Worked Case: Break-even for a Garment Unit',
        steps: [
          'Inputs: fixed costs ₹6,00,000 a year; each shirt sells for ₹1,500 with variable cost ₹900 — materials, trimmings, piece-rate stitching, packaging.',
          'Contribution per unit: 1,500 − 900 = ₹600, the amount each shirt throws off toward fixed cost.',
          'Break-even: 6,00,000 ÷ 600 = 1,000 shirts — below that the firm loses money, above it each shirt adds ₹600 of profit.',
          'Margin of safety: at planned sales of 1,500 shirts, MoS = (1,500 − 1,000) ÷ 1,500 = 33 percent — sales can drop by a third before the unit slips into loss.',
          'Profit target: to earn ₹1,80,000, required units = (6,00,000 + 1,80,000) ÷ 600 = 1,300 shirts.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Explicit cost', def: 'An actual payment for a resource — wages, rent, materials — recorded in the books.' },
          { term: 'Implicit cost', def: 'The opportunity cost of self-owned, self-employed resources; no invoice, but a real cost.' },
          { term: 'Economic profit', def: 'Revenue minus explicit and implicit costs; zero means matching the best alternative.' },
          { term: 'Semi-variable cost', def: 'A cost with a fixed component and a usage component, like a telephone bill.' },
          { term: 'Marginal cost', def: 'The addition to total cost from one more unit of output; driven entirely by variable cost.' },
          { term: 'Minimum efficient scale', def: 'The smallest output at which long-run average cost reaches its minimum.' },
          { term: 'Sunk cost', def: 'A past, unrecoverable outlay — irrelevant to rational forward decisions.' },
          { term: 'Opportunity cost', def: 'The value of the best alternative forgone when a choice is made.' },
          { term: 'Margin of safety', def: 'The proportional cushion between actual sales and the break-even level.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A firm earns ₹2 lakh accounting profit; the owner forgoes a ₹2.4 lakh salary and ₹0.3 lakh interest on invested savings. Economic profit is:',
            options: [
              '₹2 lakh',
              '−₹0.7 lakh',
              '₹4.7 lakh',
              'zero, because normal profit is included',
            ],
            answer: 1,
            explain: 'Economic profit deducts implicit costs too: 2.0 − 2.4 − 0.3 = −0.7 lakh; the firm underperforms the owner’s alternatives.',
          },
          {
            q: 'Average cost is falling when:',
            options: [
              'marginal cost is above average cost',
              'marginal cost is below average cost',
              'fixed cost is rising',
              'output is beyond the minimum efficient scale',
            ],
            answer: 1,
            explain: 'The average-marginal rule: below-average marginals drag the average down; marginal crosses average at its minimum.',
          },
          {
            q: 'A factory paid ₹9 lakh for a machine that now has no resale value. In deciding whether to accept a low-price order that covers materials and labour but nothing more:',
            options: [
              'the order must also cover a share of the ₹9 lakh',
              'the ₹9 lakh is sunk and irrelevant; only incremental costs and forgone alternatives matter',
              'the order must be rejected since fixed costs exist',
              'the decision depends on the depreciation charge',
            ],
            answer: 1,
            explain: 'A past, unrecoverable outlay cannot be affected by any present choice; only costs that differ between accepting and rejecting count.',
          },
          {
            q: 'Fixed cost ₹4,80,000; price ₹400; average variable cost ₹280. The break-even quantity is:',
            options: [
              '1,200 units',
              '4,000 units',
              '1,714 units',
              '2,400 units',
            ],
            answer: 1,
            explain: 'Contribution per unit = 400 − 280 = ₹120; 4,80,000 ÷ 120 = 4,000 units to cover fixed cost.',
          },
          {
            q: 'The U-shape of the SHORT-RUN average cost curve is caused by:',
            options: [
              'economies and diseconomies of scale',
              'the law of diminishing marginal returns to the variable factor',
              'rising input prices as the industry expands',
              'the fall in fixed cost per unit',
            ],
            answer: 1,
            explain: 'Short-run U-shape is diminishing returns on a fixed factor; scale economies and diseconomies shape the LONG-run curve.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the lesson on supply, demand and elasticity in the economics chapters, which shows how marginal cost shapes the firm’s supply behaviour — the two lessons meet at the profit-maximising output. Follow-ons: the business-cycles lesson in this chapter shows what fixed costs do to profits when demand swings; the lesson on financial statements in the accounting chapters shows where these costs live in the books; and the macro lessons take the economy-wide view this one deliberately brackets.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Microeconomics is the firm-and-household lens; business decisions are micro decisions, and cost is their common currency.',
          'Economic profit deducts implicit costs alongside explicit ones; zero economic profit means matching the best alternative, normal profit included.',
          'Costs split by behaviour: fixed (unmoved by output), variable (move with it), semi-variable (both).',
          'MC = ΔTC/ΔQ and AC = TC/Q; marginal crosses average at average’s minimum — the U-shape is diminishing returns in rupees.',
          'In the long run all inputs vary: economies of scale then diseconomies set the shape, and minimum efficient scale sizes the efficient plant.',
          'Sunk costs are irrelevant to decisions; opportunity costs are the value of the forgone alternative; only relevant costs — those that differ between alternatives — matter.',
          'Break-even: units = fixed cost ÷ (price − average variable cost); margin of safety measures the cushion above it.',
        ],
      },
    ],
  },
]
