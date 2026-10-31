/**
 * Knowledge Universe — Finance & Banking — Chapter 04: Corporate Finance
 * 1 lesson · ~1,896 words
 * field: Finance & Investment
 * legacy sources: x32-ugc-net-paper2-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Corporate Finance]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 com-corporate-finance-decisions — Corporate Finance Decisions: Investing, Financing and Paying Out
 */
import type { KnowledgeTopic } from '../../types'

export const financeBankingCh04: KnowledgeTopic[] = [
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
]
