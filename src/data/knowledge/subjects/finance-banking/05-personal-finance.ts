/**
 * Knowledge Universe — Finance & Banking — Chapter 05: Personal Finance
 * 3 lessons · ~3,598 words
 * field: Personal Finance
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Personal Finance]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 every-reading-paycheck-net-pay — Reading a Paycheck: Taxes, Deductions and Net Pay
 *   05.2 every-credit-scores — Credit Scores: The Math That Decides Your Loan
 *   05.3 fin-credit-scores-debt — Credit Scores, Loans and the Real Cost of Debt
 */
import type { KnowledgeTopic } from '../../types'

export const financeBankingCh05: KnowledgeTopic[] = [
  {
    id: 'every-reading-paycheck-net-pay',
    title: 'Reading a Paycheck: Taxes, Deductions and Net Pay',
    domain: 'Everyday Knowledge',
    field: 'Personal Finance',
    branch: 'Income Literacy',
    tier: 'core',
    concepts: [
      'Gross pay versus net pay',
      'Progressive brackets: slices, not cliffs',
      'Pre-tax versus post-tax deductions',
      'Payroll taxes for social insurance',
      'Withholding: prepaying your annual bill',
      'Reading the stub — and the employer\'s side',
    ],
    words: 1058,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'The number on your employment contract and the number that lands in your bank account are separated by a pipeline of taxes, payroll contributions, and deductions — and most people were never walked down it. This Personal Finance topic in Everyday Knowledge, from the Income Literacy branch, dissects a payslip line by line: gross versus net pay, how progressive brackets actually work, pre-tax versus post-tax deductions, and why your tax refund is not a bonus. An hour with these mechanics permanently changes how you budget, negotiate, and read offers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Budgeting on net instead of gross is the difference between a plan that works and December surprises. Reading brackets correctly kills the raise-will-cost-me-money myth that keeps people turning down money.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Gross pay is everything earned in the period before any withholding — wages, salary, overtime, bonuses. Net pay is what survives income-tax withholding, payroll taxes, and deductions; the gap, often a quarter or more of gross, is why every real budget is built on net.',
      },
      {
        kind: 'para',
        text: 'Progressive systems tax slices of income, not the whole amount: crossing into a higher bracket applies the higher rate only to dollars above the line, so a raise always increases take-home. Your marginal rate is the rate on the last slice; your effective rate — total tax over income — is always lower.',
      },
      {
        kind: 'para',
        text: 'Traditional retirement contributions, many health premiums, and commuter or childcare accounts come out before income tax is computed, shrinking this year\'s taxable income. Post-tax options like Roth-style contributions pay tax now in exchange for tax-free treatment later — same paycheck, very different long-term arithmetic.',
      },
      {
        kind: 'para',
        text: 'Separate from income tax, most countries levy flat-percentage payroll contributions for pensions and public health — 6.2% toward U.S. Social Security up to a wage cap, plus 1.45% for Medicare, with employers matching both. That match never reaches your net line, but it is part of your true compensation.',
      },
      {
        kind: 'para',
        text: 'Employers estimate your annual income tax and remit a slice each pay period, with a form (the W-4 in the U.S.) setting the dial. Overwithhold and you lend the government money interest-free until the refund; underwithhold and April brings a bill, possibly with penalties. Life changes — marriage, a second job — mean updating the form.',
      },
      {
        kind: 'para',
        text: 'Every payslip shows the pay period, year-to-date totals, gross, each tax, each deduction, employer contributions, and net. Year-to-date figures make auditing easy, and payroll mistakes do happen. Reading the employer\'s side also reveals the full package: match, insurance, stock, and paid leave are money too.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Net pay',
        latex: '\\text{Net} = \\text{Gross} - \\text{taxes} - \\text{deductions}',
        meaning: 'Take-home equals gross minus income-tax withholding, payroll taxes, and any deductions.',
      },
      {
        kind: 'formula',
        name: 'Bracket (slice) taxation',
        latex: 'T = \\sum_i r_i \\cdot s_i',
        meaning: 'Total tax sums over brackets: rate rᵢ applies only to the slice sᵢ of income falling in that bracket.',
      },
      {
        kind: 'formula',
        name: 'Effective tax rate',
        latex: 'r_{eff} = \\frac{T}{\\text{taxable income}}',
        meaning: 'The average rate actually paid — always below your top marginal rate in a progressive system.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a single earner makes $60,000 and contributes 5% pre-tax to retirement; under a simplified schedule — 10% on the first $10,000, 15% up to $40,000, 25% above — what is the income tax and the effective rate?',
          'Recall the governing ideas: pre-tax contributions reduce taxable income, and brackets tax slices, not the whole.',
          'Apply: taxable income = 60,000 − 3,000 = 57,000. Tax = 0.10 × 10,000 + 0.15 × 30,000 + 0.25 × 17,000 = 1,000 + 4,500 + 4,250 = 9,750.',
          'State the result: $9,750 owed, an effective rate of about 17.1% even though the marginal rate is 25% — the raise myth dies right here.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Build budgets on net pay so plans match the bank statement.',
          'Compare job offers using net income plus match and benefits, not headline salary.',
          'Set withholding so April brings neither a big loan to the government nor a bill.',
          'Time pre-tax deductions — retirement, commuter accounts — to cut taxable income.',
          'Audit the year-to-date columns each quarter to catch payroll errors early.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Budgeting on gross pay is the rookie error — plans built on 100% of salary are a quarter fiction. The belief that a raise can leave you with less refuses to die: only the extra slice pays the higher rate. And treating a refund as found money misses that it was your own interest-free loan to the tax office all year.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Gross pay', def: 'Total earnings in a period before any withholding or deduction.' },
          { term: 'Net pay', def: 'The take-home amount after taxes and deductions — the budgetable number.' },
          { term: 'Marginal tax rate', def: 'The rate applied to your last slice of income, i.e. the next dollar earned.' },
          { term: 'Effective tax rate', def: 'Total tax divided by taxable income — the average actually paid.' },
          { term: 'Withholding', def: 'Employer-remitted prepayment of your estimated annual income tax.' },
          { term: 'Pre-tax deduction', def: 'An amount removed before income tax is calculated, lowering taxable income now.' },
          { term: 'Year-to-date (YTD)', def: 'Cumulative totals on a payslip, used to audit the year so far.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'You cross into a higher tax bracket after a raise. What happens?',
            options: ['All your income is taxed at the higher rate', 'Only income above the bracket line is taxed at the higher rate', 'You can end up with less net pay', 'Your payroll taxes double'],
            answer: 1,
            explain: 'Progressive systems tax slices; the raise always increases net pay.',
          },
          {
            q: 'A traditional (pre-tax) retirement contribution does what to this year\'s taxes?',
            options: ['Nothing until retirement', 'Lowers this year\'s taxable income', 'Increases payroll tax', 'Is taxed as a bonus'],
            answer: 1,
            explain: 'Pre-tax dollars come out before income tax is computed, shrinking current taxable income.',
          },
          {
            q: 'A very large tax refund usually means:',
            options: ['The government paid you a bonus', 'You overwithheld — an interest-free loan all year', 'Your employer paid extra payroll tax', 'You are in the wrong bracket'],
            answer: 1,
            explain: 'Refunds return overpaid withholding; better to calibrate the form and keep it monthly.',
          },
          {
            q: 'U.S.-style payroll taxes (Social Security, Medicare) are:',
            options: ['Progressive income taxes', 'Flat-percentage social insurance contributions, partly matched by the employer', 'Optional for large employers', 'Refunded every spring'],
            answer: 1,
            explain: 'They are flat-rate contributions with a wage cap on the pension portion, matched by employers.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisite: none — this is the financial ground floor. Next: building a net-pay budget, then tax-advantaged accounts, then the mathematics of compound saving.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Budget on net pay; gross is fiction for planning.',
          'Brackets tax slices — a raise always nets more.',
          'Pre-tax deductions shrink taxable income now.',
          'Payroll taxes are flat social-insurance contributions, employer-matched.',
          'A refund is your own overwithholding returned.',
        ],
      },
    ],
  },
  {
    id: 'every-credit-scores',
    title: 'Credit Scores: The Math That Decides Your Loan',
    domain: 'Everyday Knowledge',
    field: 'Personal Finance',
    branch: 'Consumer Finance',
    tier: 'core',
    concepts: [
      'What the score predicts: risk of serious delinquency',
      'The five factors and their weights',
      'Payment history: the heavyweight',
      'Utilization: the fast lever',
      'Length of history, new credit, and mix',
      'Credit reports versus credit scores',
      'How lenders use scores: pricing tiers',
    ],
    words: 1184,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'A three-digit number quietly prices your mortgage, your car loan, sometimes your insurance and your rental application. Consumer finance, the branch of Personal Finance behind this Everyday Knowledge topic, unpacks the credit score: what it actually predicts, the five factors and their weights, and the small arithmetic — utilization ratios and payment history — that moves it. The score is not a judgment of character; it is a probability model, and probability models can be worked with once you know their inputs.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The gap between a fair and an excellent score can cost tens of thousands of dollars over one mortgage. Because the biggest factor moves slowly while the second-biggest moves within weeks, knowing the mechanics converts vague anxiety into a plan with a schedule.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A credit score is not a grade for wealth or virtue — it estimates the probability that you will fall seriously behind on payments in the next year or two, and lenders have validated that higher scores really do default less. That single purpose explains everything else, including why a rich person who never borrows can score lower than a modest earner who borrows and repays on schedule. The model prices behavior, not bank balance.',
      },
      {
        kind: 'para',
        text: 'The dominant scoring model in the United States weighs five inputs: payment history 35 percent, amounts owed 30 percent, length of credit history 15 percent, new credit 10 percent, and credit mix 10 percent. The top two carry nearly two-thirds of the weight, which is good news — they are the most controllable. Mix and new credit are seasoning; history is simply patience.',
      },
      {
        kind: 'para',
        text: 'Thirty-five percent of the score asks one question: did you pay as agreed? A single 30-day-late report can shave one hundred points from a strong profile, and delinquencies linger on the file for seven years — though their sting fades steadily as clean months pile up. Nothing repairs history except history, which is why autopay on every account is the highest-return habit in the entire scoring system.',
      },
      {
        kind: 'para',
        text: 'Amounts owed is measured mostly through the utilization ratio: balances as a share of limits. Below about 30 percent reads healthy; below 10 percent reads ideal. Because balances are typically reported at statement close, paying a card down before that date can reshape the ratio within one billing cycle — the fastest meaningful score move that exists, available to anyone with cash and a calendar.',
      },
      {
        kind: 'para',
        text: 'The remaining factors reward patience and restraint. Average account age matters, which argues for keeping old no-fee cards open as credit-line ballast. Each hard inquiry trims a few points for a few months, and opening several accounts at once compounds the signal of risk. Mix — revolving cards alongside an installment loan — rounds out the picture slightly, and time deposits it quietly.',
      },
      {
        kind: 'para',
        text: 'The report is the raw dossier — accounts, balances, limits, and payment records collected by three bureaus — and the score is a model applied to it. Errors land in the report and echo into every score derived from it, and a meaningful fraction of reports contains one, from a mistyped account to outright identity fraud. Pulling your reports regularly is free, and disputing an error is the rare fix that costs nothing but a letter.',
      },
      {
        kind: 'para',
        text: 'Lenders rarely see a simple approve-or-deny; they see tiers. A sixty-point difference can move a mortgage rate enough to change the monthly payment by hundreds, and the interest gap compounds across thirty years. Scores also price auto loans and cards, and they steer deposits and premiums. The goal with real cash value is climbing a tier, not chasing a perfect 850.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Utilization ratio',
        latex: 'U = \\frac{B}{L} \\times 100\\%',
        meaning: 'Balance B as a percentage of the credit limit L, summed across accounts; under 30 percent reads healthy, under 10 percent ideal.',
      },
      {
        kind: 'formula',
        name: 'Debt-to-income ratio',
        latex: 'DTI = \\frac{D_{monthly}}{I_{gross}} \\times 100\\%',
        meaning: 'Monthly debt payments over gross monthly income — the affordability check lenders apply alongside the score, often capped near 43 percent.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a cardholder carrying a $2,400 balance on a $10,000 limit wants the fastest score improvement before applying for a mortgage in six weeks — what should they do?',
          'Recall the governing idea: utilization is reported at statement close and moves the score within a cycle, and below 10 percent reads ideal.',
          'Apply: pay the balance down to $900 before the statement closes — utilization drops from 24 to 9 percent — keep the card open to preserve its limit and age, and freeze new applications to avoid hard inquiries.',
          'State the result: the reported ratio lands under the 10 percent threshold within one billing cycle, typically worth a meaningful bump within weeks, with a further month of clean history before the application.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Mortgage and auto lenders price loans in score tiers, so small improvements compound into thousands saved.',
          'Card issuers extend and raise limits based on reported behavior, which further lowers utilization.',
          'Landlords, insurers, and utility companies use modified scores as screening signals.',
          'Credit-builder loans and secured cards engineer positive payment history for thin files.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic own-goal is closing old cards, which deletes credit limit and history at once — utilization rises while the file shortens. Carrying a balance "to build credit" is a myth; interest buys nothing the on-time paid-in-full payment does not already buy. And chasing a perfect score wastes effort: above roughly 760, real-world pricing gains flatten to almost nothing.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Credit score', def: 'A number estimating the probability of serious delinquency over the next year or two.' },
          { term: 'Utilization ratio', def: 'Balances divided by limits; the fastest-moving major scoring factor.' },
          { term: 'Hard inquiry', def: 'A lender\'s credit check, which can trim points for a few months.' },
          { term: 'Credit report', def: 'The bureau dossier of accounts and payment records a score is computed from.' },
          { term: 'Payment history', def: 'The 35-percent heavyweight asking whether you paid as agreed.' },
          { term: 'Credit mix', def: 'The variety of revolving and installment accounts in a file.' },
          { term: 'Debt-to-income ratio', def: 'Monthly obligations over gross income, an affordability check beside the score.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A credit score primarily estimates:',
            options: ['Your total wealth', 'The probability you will fall seriously delinquent soon', 'Your income level', 'How many accounts you hold'],
            answer: 1,
            explain: 'Scores are probability models of payment risk, which is why wealth alone does not guarantee a high number.',
          },
          {
            q: 'The two heaviest scoring factors together account for about:',
            options: ['25 percent', '45 percent', '65 percent', '90 percent'],
            answer: 2,
            explain: 'Payment history (35) plus amounts owed (30) carry roughly two-thirds of the weight.',
          },
          {
            q: 'A $1,500 balance on a $6,000 limit is a utilization of:',
            options: ['15 percent', '25 percent', '40 percent', '4 percent'],
            answer: 1,
            explain: '1,500 ÷ 6,000 = 0.25 — 25 percent, below the healthy 30-percent line but above the ideal 10.',
          },
          {
            q: 'Why can closing an old card hurt a score?',
            options: ['It erases limit and history, raising utilization while shortening the file', 'It triggers a hard inquiry', 'It damages only the credit mix', 'It has no effect at all'],
            answer: 0,
            explain: 'The closed account\'s limit disappears from the denominator, and its age eventually drops out of average history.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Comfortable percentages are the only prerequisite. Natural next steps: compound interest and loan amortization, then the expected-value topic for deciding which debts to attack first.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'fin-credit-scores-debt',
    title: 'Credit Scores, Loans and the Real Cost of Debt',
    domain: 'Everyday Knowledge',
    field: 'Personal Finance',
    branch: 'Credit and Debt',
    tier: 'core',
    concepts: [
      'What a score actually buys: the rate tier',
      'APR: the true annual price of borrowing',
      'Amortization: why early payments barely dent the balance',
      'Revolving, installment, secured, unsecured',
      'The minimum-payment trap',
      'Snowball versus avalanche: two payoff orders',
    ],
    words: 1356,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'The Consumer Finance lesson covered how the credit score is computed; this one is about what it prices — the loan itself. Borrowing is renting money, and the rent is quoted as an annual percentage rate, or APR. Understanding that one number, and the amortization schedule built on it, is the difference between using debt as a tool and being used by it. The same arithmetic then powers the two proven strategies for getting out: the snowball and the avalanche. A calculator and one evening settle almost any borrowing decision for life.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A score tier decides your mortgage rate, and one interest point across thirty years costs more than most people save in a decade. On the other side, the payoff order you choose on existing debts is worth thousands in interest and — just as important — determines whether you actually finish.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Start from the bridge: the score does not win you the loan, it wins you the price of the loan. Lenders map scores to rate tiers — a mortgage borrower in the top tier versus one a hundred points lower can face rates more than a point apart, which on a $300,000 loan means tens of thousands of dollars over the term. The five factors behind the score are unpacked in the Consumer Finance lesson; the working summary here is: the better the tier, the cheaper every dollar you rent.',
      },
      {
        kind: 'para',
        text: 'APR is the annualized price of borrowing, interest plus most fees rolled into one number — the figure comparisons must use. Ballparks: US credit cards commonly run 18 to 29 per cent (averaging above 20 in recent years), personal loans 7 to 36, auto loans and mortgages far lower because the collateral and term differ. Teaser rates are the trap to read past: a 0-per-cent intro APR that jumps to 26 after twelve months is a 26-per-cent loan wearing a costume. If rates are compounded, the effective cost sits slightly above the quoted APR.',
      },
      {
        kind: 'para',
        text: 'Amortization is the schedule that turns a lump loan into equal monthly payments — and its geometry is what lenders quietly profit from. Each payment is interest on the outstanding balance plus a slice of principal; because the balance is largest at the start, early payments are mostly interest. On a five-year car loan, the first payment barely moves the balance at all. The practical consequence: extra principal payments early in a loan save the most interest, and "how much per month?" is the question that hides "how many months?".',
      },
      {
        kind: 'para',
        text: 'Debt comes in four working flavors. Revolving credit (cards, lines) lets you borrow flexibly at high rates with no end date; installment loans (auto, mortgage, student) fix payments and an end date at lower rates. Secured debt backs your promise with collateral the lender can seize — house, car — so it prices cheaper; unsecured debt rests on your signature alone, so it prices dearer. Payday and title loans, at triple-digit APRs, are the hazard class: they are secured by nothing except your future self.',
      },
      {
        kind: 'para',
        text: 'The minimum-payment trap is amortization weaponized. Card minimums are typically interest plus about 1 per cent of the balance — so a $6,000 balance at 22 per cent APR shrinks by roughly $60 a month while generating about $110 of interest. Pay only the minimum and the interest alone approaches twice the original debt, with the balance creeping down for decades. Minimums are designed to keep you profitable, not to get you free; treat them as the floor, never the plan.',
      },
      {
        kind: 'para',
        text: 'Two payoff orders dominate every honest comparison. The avalanche attacks the highest-APR debt first and mathematically minimizes total interest. The snowball attacks the smallest balance first, sacrificing some interest for a fast, motivating first kill — closed accounts are visible progress, and research on completion rates suggests momentum is worth real money. Both share the real engine: minimums on everything, then every spare dollar onto one target debt. The best plan is the one you finish.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a $20,000 car loan at 7 per cent APR. What do 60 monthly payments cost in total, and what does cutting the term to 36 months save?',
        'Recall: the monthly payment equals principal times monthly rate over one minus (1 + r) to the minus n; total cost is payment times number of payments, and the difference from $20,000 is interest.',
        'Apply: with a monthly rate of about 0.00583, the 60-month payment is roughly $396 — total about $23,760, so interest is about $3,760. At 36 months the payment is roughly $618 — total about $22,230, interest about $2,230.',
        'State the result: the shorter term costs about $222 more per month but saves about $1,530 in interest. And the rate tier matters more than the term: at 11 per cent APR, the same 60-month loan accrues over $6,000 of interest — the score-tier bridge in action.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Mortgage pre-approval: the rate you are quoted is your score tier and debt-to-income made visible.',
          'Refinancing card debt into an installment loan trades a 22-per-cent revolving balance for a fixed end date.',
          'Auto dealerships sell monthly payments because the term hides the interest — always negotiate total cost.',
          'Student-loan strategy: avalanche math versus income-driven plans is a spreadsheet, not a vibe.',
          'Nonprofit credit counselling offers debt-management plans at negotiated rates, a step before settlement scams.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Comparing monthly payments instead of total cost is the dealer-favorite error; a smaller payment over more months is usually a more expensive loan. Do not treat a teaser APR as the loan, or a minimum payment as a plan. Raiding retirement accounts to clear cards usually trades protected, compounding money for a problem with better tools. And the snowball-versus-avalanche argument is settled by one fact: the mathematically optimal plan that you abandon loses to the slightly costlier plan you complete.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'APR', def: 'The annualized cost of a loan, interest plus most fees, in one comparable number.' },
          { term: 'amortization', def: 'The schedule blending interest and principal into equal payments over a fixed term.' },
          { term: 'revolving credit', def: 'Flexible borrowing up to a limit, at high rates, with no fixed end date.' },
          { term: 'installment loan', def: 'A loan with fixed payments and a set payoff date, such as auto or mortgage — often secured by collateral.' },
          { term: 'minimum payment', def: 'The card floor — interest plus about 1 per cent of balance — designed for persistence, not payoff.' },
          { term: 'debt snowball', def: 'Paying smallest balances first for momentum, at some extra interest cost.' },
          { term: 'debt avalanche', def: 'Paying highest-APR debts first, minimizing total interest paid.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'APR is best described as…',
            options: ['the monthly payment amount', 'the annualized cost of borrowing, including most fees', 'the total interest over the whole loan', 'a tax on lenders'],
            answer: 1,
            explain: 'It is the one comparable annual price of renting money — the number offers must be judged by.',
          },
          {
            q: 'Early payments on an amortized loan are mostly interest because…',
            options: ['lenders front-load fees illegally', 'interest is charged on the outstanding balance, which is largest at the start', 'principal grows over time', 'APR rises in early years'],
            answer: 1,
            explain: 'The balance — the base interest is charged on — is biggest before you have repaid anything, so early principal slices are thinnest.',
          },
          {
            q: 'Paying only card minimums on a $6,000 balance at 22 per cent APR tends to end with…',
            options: ['payoff within a year', 'interest approaching twice the original debt over decades', 'the lender forgiving the balance', 'an automatic rate cut'],
            answer: 1,
            explain: 'Minimums barely exceed the monthly interest, so the balance crawls down while interest compounds — the trap by design.',
          },
          {
            q: 'Which payoff order minimizes total interest paid?',
            options: ['Highest balance first', 'Oldest debt first', 'Highest APR first (avalanche)', 'Whichever lender calls most'],
            answer: 2,
            explain: 'Killing the most expensive money first minimizes interest — though the snowball may still win on completion rates.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the credit-score lesson for the tier side, and percentages. Natural next steps: mortgage mathematics in depth, the compound-interest lesson for the machinery lenders use, then insurance as the other half of household risk. Exercise: list every debt you hold with its APR, and run both snowball and avalanche orders — the difference is the price of your motivation.',
        tone: 'path',
      },
    ],
  },
]
