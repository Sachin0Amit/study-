/**
 * Knowledge Universe — Finance & Banking — Chapter 01: Money, Banking, Risk & Insurance
 * 3 lessons · ~5,360 words
 * fields: Banking & Finance, Finance & Investment
 * legacy sources: business-economics.ts, x26-banking-management-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Banking & Finance] or branches [Money & Markets, Risk & Insurance]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 econ-indian-banking-financial-system — Indian Banking and the Financial System: Structure, Regulators and Payment Rails
 *   01.2 fin-insurance-risk-pooling — Insurance: Pooling Risk and Pricing It
 *   01.3 fin-banks-create-money — How Banks Create Money
 */
import type { KnowledgeTopic } from '../../types'

export const financeBankingCh01: KnowledgeTopic[] = [
  {
    id: 'econ-indian-banking-financial-system',
    title: 'Indian Banking and the Financial System: Structure, Regulators and Payment Rails',
    domain: 'Business & Economics',
    field: 'Banking & Finance',
    branch: 'Indian Financial System',
    tier: 'core',
    concepts: [
      'The RBI: established 1935, nationalised 1949',
      'Scheduled commercial banks: public, private, foreign',
      'Payments banks and small finance banks',
      'NBFCs and dual-regulated cooperative banks',
      'The regulator map: RBI, SEBI, IRDAI, PFRDA',
      'Payment rails: UPI, NEFT, RTGS, IMPS',
      'Deposit insurance: the DICGC five-lakh cover',
      'The 2020 public-sector-bank mega-merger',
    ],
    words: 2050,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Indian banking questions are usually questions about a map, not a theory. Which institution can accept your deposits and lend? Which can accept deposits but never lend? Who regulates each one, what happens to your money if a bank fails, and which rail moves a payment from one account to another in seconds? This lesson draws that institutional map: the Reserve Bank of India at the centre, the categories of banks and near-banks around it, the sibling regulators for securities, insurance and pensions, and the payment systems that tie them together. The companion lesson on monetary policy and central banking owns the instruments — repo rates, open-market operations, liquidity adjustment — so those are only referenced here where they explain an institution\'s job.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Banking-awareness questions rarely ask for opinions; they ask you to classify an institution, name its regulator, recall a limit or date, or predict what a category can and cannot legally do. Those are exactly the facts this lesson fixes: the RBI\'s founding date and act, the difference between a payments bank and a small finance bank, the five-lakh deposit-insurance cover, the twelve public-sector banks that survived the 2020 merger, and the four regulators who divide the financial system between them. Learn the map once and every current-affairs headline — a new licence, a merger, a regulatory action — lands in the right slot.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Reserve Bank of India (RBI)', def: 'The central bank, established 1 April 1935 under the RBI Act 1934 and nationalised in 1949. Its stated functions: monetary authority, regulator and supervisor of the financial system, manager of foreign exchange under FEMA 1999, issuer of currency, regulator of payment and settlement systems under the 2007 Act, banker to governments and to banks, and a developmental role. It is governed by a Central Board led by the Governor and up to four Deputy Governors.' },
          { term: 'Scheduled commercial banks', def: 'Banks included in the Second Schedule of the RBI Act — the category that splits into public-sector banks (majority government-owned, 12 after the 2020 merger), private-sector banks (HDFC Bank, ICICI, Axis and peers) and foreign banks. They take deposits, lend, and operate under the Banking Regulation Act 1949.' },
          { term: 'Payments bank', def: 'A differentiated bank licensed since 2015 that accepts deposits (capped at two lakh rupees per customer since April 2021) and distributes remittances, but cannot lend or issue credit cards, and must invest deposits in government securities. Examples: India Post Payments Bank, Paytm Payments Bank lineage, Airtel Payments Bank.' },
          { term: 'Small finance bank (SFB)', def: 'A differentiated bank licensed since 2015 to do the full banking job — deposits and loans — but with a mandate to serve small businesses, micro industries and unbanked sections, with most of its lending in priority-sector-sized tickets. Examples: AU Small Finance Bank, Equitas, Ujjivan.' },
          { term: 'NBFC', def: 'A non-banking financial company — engaged in lending and investment without holding a banking licence. NBFCs cannot accept demand deposits (no chequable accounts), and deposit-taking NBFCs face tighter RBI norms. They range from vehicle-finance and gold-loan companies to infrastructure financiers.' },
          { term: 'DICGC', def: 'The Deposit Insurance and Credit Guarantee Corporation, a wholly owned RBI subsidiary under the DICGC Act 1961. It insures bank deposits up to five lakh rupees per depositor per bank (cover raised from one lakh in February 2020), including principal and interest, across savings, current, fixed and recurring accounts.' },
        ],
      },
      {
        kind: 'para',
        text: 'The Reserve Bank sits at the centre of the map, and its seven official functions explain nearly every other box. As monetary authority it runs policy through the framework the monetary-policy lesson details. As regulator and supervisor of the financial system it prescribes the operating parameters that keep depositors safe — licensing, capital and prudential norms — through its Department of Supervision and the Board for Financial Supervision constituted in November 1994. As exchange manager it administers FEMA 1999; as currency issuer it issues and exchanges notes and circulates coins minted by the Government; as payments regulator it supervises settlement systems under the Payment and Settlement Systems Act 2007; and as banker to governments and to banks it keeps the accounts of the state and of every scheduled bank. The developmental role — financial inclusion, priority-sector lending, institution-building — rounds out the list, and a Central Board of Directors appointed by the Government oversees it all.',
      },
      {
        kind: 'para',
        text: 'Commercial banking in India is a story of three ownership streams. Public-sector banks trace to the State Bank of India (created 1955 from the Imperial Bank) and the nationalisations of 1969 (fourteen banks) and 1980 (six more); consolidation then ran in reverse — from twenty-seven banks in 2017 to twelve after the mega-merger effective 1 April 2020, which folded ten banks into four anchors: Punjab National Bank absorbing Oriental Bank of Commerce and United Bank, Canara Bank absorbing Syndicate Bank, Union Bank absorbing Andhra Bank and Corporation Bank, and Indian Bank absorbing Allahabad Bank. Private banks grew alongside — HDFC Bank, ICICI Bank and Axis Bank are the household names — with the 2023 merger of HDFC Ltd into HDFC Bank creating one of the world\'s largest banks by market value. Foreign banks operate as branches of overseas parents. Regional rural banks, created in 1975 with a 50:35:15 central-government, sponsor-bank and state-government shareholding, carry banking into rural credit at the cooperative end of the spectrum, where urban and rural cooperative banks live under a famously awkward dual regulation — banking functions by the RBI, management and registration by state registrars or the centre, a seam the 2020 Banking Regulation amendments tightened.',
      },
      {
        kind: 'para',
        text: 'The 2015 differentiated-banking experiment added two new species. Payments banks exist to deposit, remit and distribute — a transaction layer, not a lender: deposits are capped per customer, must sit mostly in government securities, and the bank cannot extend loans or issue credit cards. Small finance banks are full banks with a directed heart: they take any deposits they can attract, but must push most of their lending to small borrowers. Non-banking financial companies (NBFCs) sit outside the deposit franchise altogether — they lend from borrowings and equity, cannot offer chequable demand deposits, and are regulated by the RBI with a lighter touch than banks, which is precisely why the RBI has spent recent years tightening NBFC norms after a sequence of sector stress episodes. Insurance companies answer to IRDAI, mutual funds and market intermediaries to SEBI, and pension funds to PFRDA — three sibling regulators created by their own acts, completing the map.',
      },
      {
        kind: 'para',
        text: 'Two safety nets close the structure. Deposit insurance means a depositor\'s balances — principal plus interest, across all account types combined — are insured to five lakh rupees per person per bank by the DICGC; if a bank is cancelled or wound up, claimants receive up to that amount, which is why deposit-splitting across banks is a real strategy above the limit. And the payment rails are themselves regulated infrastructure: RTGS settles large-value transfers in real time and gross (minimum two lakh rupees, available around the clock since December 2020), NEFT batches smaller transfers (also 24×7 since December 2019), IMPS moves instant mobile payments, and UPI — launched in 2016 by the National Payments Corporation of India (NPCI), an umbrella organisation set up with RBI and Indian Banks\' Association backing — rides on top of the account system to move money between any two banks with a virtual address. Financial-inclusion programmes such as the Pradhan Mantri Jan Dhan Yojana (2014) pushed the last mile by pairing zero-balance accounts with RuPay cards and direct benefit transfer.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Classify Five Institutions and Their Regulators',
        steps: [
          'Institution A: government-majority bank offering savings accounts, loans and treasury services, one of twelve after the 2020 consolidation → public-sector (scheduled commercial) bank; regulated by the RBI under the Banking Regulation Act 1949.',
          'Institution B: accepts deposits only up to two lakh per customer, invests them in government securities, offers remittances, cannot lend → payments bank; RBI-regulated, deposit cap since April 2021.',
          'Institution C: vehicle-finance company raising money from bonds and banks, no chequable accounts → NBFC; RBI-regulated, but outside the deposit-insurance comfort of scheduled banks unless it takes (restricted) deposits.',
          'Institution D: sells term life cover and annuities → insurer; regulated by IRDAI under the Insurance Act framework, not the RBI.',
          'Institution E: manages a pension scheme with NPS subscriptions → pension fund; regulated by PFRDA.',
          'Deposit check: a customer holding 4.6 lakh rupees in a failed scheduled bank recovers the full amount under DICGC cover (5 lakh); a customer holding 7 lakh recovers 5 lakh and queues as an unsecured creditor for the rest.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Reserve Bank of India was established in 1935 under which act, and in which year was it nationalised?',
          options: ['RBI Act 1934; nationalised 1949', 'Banking Regulation Act 1949; nationalised 1935', 'RBI Act 1935; nationalised 1969', 'FEMA 1999; nationalised 1949'],
          answer: 0,
          explain: 'The RBI was set up on 1 April 1935 under the Reserve Bank of India Act 1934 and nationalised in 1949, moving from private to full government ownership.',
        },
        {
          q: 'A payments bank in India may do all of the following EXCEPT…',
          options: ['accept deposits up to two lakh per customer', 'distribute remittances', 'issue credit cards and lend', 'invest deposits in government securities'],
          answer: 2,
          explain: 'Payments banks are transaction institutions: deposits capped at two lakh (since April 2021) and invested in government securities, but no lending and no credit cards — that is the dividing line from small finance banks.',
        },
        {
          q: 'After the mega-merger effective 1 April 2020, how many public-sector banks remain?',
          options: ['27', '21', '12', '8'],
          answer: 2,
          explain: 'Consolidation from 27 (2017) through the 2020 merger — ten banks folded into four anchors — left twelve public-sector banks.',
        },
        {
          q: 'Your combined deposits (principal plus interest) in one scheduled bank that fails are insured by DICGC up to…',
          options: ['1 lakh rupees', '2 lakh rupees', '5 lakh rupees', '10 lakh rupees'],
          answer: 2,
          explain: 'The DICGC cover, raised from one lakh in February 2020, is five lakh rupees per depositor per bank, counting principal and interest across all account types combined.',
        },
        {
          q: 'Which regulator oversees UPI\'s umbrella organisation, the NPCI?',
          options: ['SEBI', 'IRDAI', 'PFRDA', 'RBI'],
          answer: 3,
          explain: 'The NPCI operates payment and settlement systems, which are regulated by the RBI under the Payment and Settlement Systems Act 2007 — SEBI, IRDAI and PFRDA mind securities, insurance and pensions respectively.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating payments banks and small finance banks as the same differentiated species — one may not lend, the other must lend small. Saying the RBI "prints money" while forgetting it also regulates payments, manages FEMA and acts as banker to both governments and banks — awareness questions favour the full seven-function list. Mixing the 1969 nationalisation (fourteen banks) with the 2020 merger (twelve survivors). Assuming NBFCs can accept demand deposits — they cannot offer chequable accounts. Citing the old one-lakh DICGC cover, or applying the five-lakh limit per account rather than per depositor per bank. And crediting UPI to the RBI itself — the RBI regulates; the NPCI builds and operates the rail.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this lesson is the institutional map. Follow with the monetary-policy and central-banking lesson for the instruments (policy rates, liquidity operations, inflation targeting), the financial-markets lesson for money and capital market mechanics, and the business-correspondence lesson for the banking-desk writing formats. Primary reading: Reserve Bank of India, "About Us — Functions and Structure" (rbi.org.in, read directly: establishment 1935 under the RBI Act 1934, nationalisation 1949, the seven functions, Board composition, BFS 1994, DICGC/BRBNMPL subsidiaries); RBI consumer pages on payments banks (two-lakh cap) and DICGC (five-lakh cover, February 2020); NCERT Class XII Macroeconomics, unit "Money and Banking" for the money-supply frame the institutions serve.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'RBI: est. 1 April 1935 (RBI Act 1934), nationalised 1949; seven functions — monetary authority, bank regulator, FEMA/forex manager, currency issuer, payments regulator (PSS Act 2007), banker to government and banks, developmental role.',
        'Scheduled commercial banks: public-sector (12 after the 1 April 2020 mega-merger), private (HDFC, ICICI, Axis), foreign; RRBs (1975, 50:35:15) and dual-regulated cooperatives at the edges.',
        'Differentiated banks: payments banks (deposit cap two lakh, no lending) vs small finance banks (full banking, small-borrower mandate).',
        'NBFCs lend without banking licences — no demand deposits; RBI-regulated with tighter post-stress norms.',
        'Regulator map: RBI (banks, NBFCs, payments), SEBI (securities), IRDAI (insurance), PFRDA (pensions); NABARD and SIDBI as development financiers.',
        'Safety and speed: DICGC insures five lakh per depositor per bank (Feb 2020); rails are RTGS (real-time, ≥2 lakh), NEFT, IMPS and UPI (NPCI, 2016); Jan Dhan (2014) drove inclusion.',
      ] },
    ],
  },
  {
    id: "fin-insurance-risk-pooling",
    title: "Insurance: Pooling Risk and Pricing It",
    domain: "Business & Economics",
    field: "Finance & Investment",
    branch: "Risk & Insurance",
    tier: "intermediate",
    concepts: [
      "Risk pooling and the law of large numbers",
      "Expected loss and premium loading",
      "Float and the combined ratio",
      "Adverse selection: the lemons problem",
      "Moral hazard after coverage",
      "Reinsurance and correlated risk",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Insurance began in a London coffee house. From 1688, merchants and sea captains at Edward Lloyd's establishment slipped paper among the tables: each scribbled his name under a listed voyage, agreeing to bear a slice of the loss if the ship never came home. “Under-writing” is still the word. The modern industry those slips became — premiums measured in the trillions of dollars annually — does something quietly remarkable: it converts individual catastrophe into a predictable annual cost. The everyday probability lesson in this library covered why buying insurance can be rational despite its negative expected value; this lesson opens the insurer's side of the machine — how a pool prices risk, and the two diseases, adverse selection and moral hazard, that make markets for risk fail.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Insurance quietly decides the price of houses, cars, doctors and coastal cities — premiums are the shadow price of risk across the whole economy, and uninsurability is the leading indicator of a risk gone systemic (as flood zones and, in 2020, pandemic business interruption discovered). The pool's arithmetic also explains pension solvency, reinsurance towers and why an insurer can lose money on claims for decades and still thrive.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The engine is pooling under the law of large numbers. No insurer can say whether your house burns this year; with ten thousand similar houses, the fraction that burns is nearly the expected one, because independent risks partially cancel. The standard deviation of the average loss per policy shrinks with the square root of the pool's size — a hundredfold bigger pool, a tenfold tamer average — which is why insurers grow and why small mutuals buy reinsurance. This is diversification's statistical core, the same logic the inventory lesson exploits when it consolidates warehouses.",
      },
      {
        kind: "para",
        text: "Pricing starts from expected loss — probability times severity — but the premium is not the expected loss. Loading covers acquisition commissions, administration, taxes and the cost of holding capital against bad years; a fair premium becomes a loaded one. Then comes the second, less obvious profit engine: float. Premiums arrive years before claims are paid, and the insurer invests the interval — Warren Buffett built much of Berkshire Hathaway's returns on exactly this. The industry's own scoreboard is the combined ratio: claims plus expenses over premiums. A ratio below 100 means underwriting profit; many sound insurers run above 100 and live on float income, which is why judging an insurer without reading both numbers is malpractice.",
      },
      {
        kind: "para",
        text: "Adverse selection is the market failure that arrives before the policy does. The insured knows their risk better than the insurer — the asymmetric information of the market-failures lesson, for which George Akerlof's 1970 “lemons” paper is the founding text. If a pool charges one price for mixed risks, the low-risk customers are overcharged; they leave; the average risk worsens; the price must rise; more leave — Rothschild and Stiglitz modelled the resulting death spiral in 1976. The countermeasures are structural: underwriting and risk classification (charging by risk class), mandates that keep the healthy inside the pool (the logic behind the individual mandate in health reform), employer group coverage, and risk-adjustment transfers that pay insurers who enrol sicker members.",
      },
      {
        kind: "para",
        text: "Moral hazard is the failure that arrives after the policy does: coverage changes behaviour. The insured lock doors less diligently; the generously reimbursed patient consumes more care; the protected bank takes more risk. Contract architecture is the cure: deductibles put the policyholder's own money at stake in every claim, copays and coinsurance keep marginal consumption costly, exclusions and caps carve out what cannot be priced, and experience rating ties next year's premium to this year's claims. There is even an insurable-interest requirement inherited from history: you may not insure your neighbour's house, because eighteenth-century London discovered that people who could profit from a fire had an alarming tendency to arrange one.",
      },
      {
        kind: "para",
        text: "Two boundary conditions discipline the whole machine. First, correlation breaks pooling: the square-root law works only for independent risks, so earthquakes, hurricanes and pandemics — where everyone claims at once — require reinsurance, catastrophe bonds and government backstops, priced by a different and cruder logic. Reinsurance is insurance for insurers: the Munich Res and Swiss Res of the world, and the Lloyd's syndicates that still follow the 1688 model, take slices of primary insurers' books so that a single Florida hurricane does not erase a century of premiums. Second, regulation polices solvency — an insurer's promise is only as good as its capital — which is why supervisors mandate capital buffers and investment limits.",
      },
      { kind: "heading", text: "The Mathematics" },
      { kind: "formula", name: "Expected loss", latex: "E[L] = p \\times L", meaning: "Probability of the loss times its severity — the actuarially fair premium before any loading." },
      { kind: "formula", name: "Pooling", latex: "\\sigma_{\\bar{L}} = \\frac{\\sigma}{\\sqrt{n}}", meaning: "The standard deviation of the average loss per policy falls with the square root of pool size — the statistical heart of insurance." },
      { kind: "formula", name: "Loaded premium", latex: "P = E[L] \\times (1 + \\lambda)", meaning: "Expected loss grossed up by a loading factor for expenses, profit and capital cost." },
      { kind: "formula", name: "Combined ratio", latex: "CR = \\frac{\\text{claims} + \\text{expenses}}{\\text{premiums}}", meaning: "Below 100 is an underwriting profit; above 100 the insurer is betting on float income to carry the year." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: an insurer pools 10,000 houses, each with a 2 per cent annual chance of a 200,000 fire. What premium covers the pool with 95 per cent confidence, and what should be charged?",
        "Expected loss per house: E[L] = 0.02 × 200,000 = 4,000 — the fair premium.",
        "Volatility: per-house standard deviation = sqrt(0.02 × 0.98) × 200,000 ≈ 0.14 × 200,000 ≈ 28,000. For the pool's average, divide by sqrt(10,000) = 100 → 280 per house.",
        "Confidence: the average claim per house is 4,000 ± (1.96 × 280) ≈ 4,000 ± 549 — a 95 per cent band of roughly ±14 per cent. The law of large numbers has done its work: a pool-level gamble has become a bookkeeping entry.",
        "Price: with a 20 per cent loading for expenses and capital, charge P = 4,000 × 1.2 = 4,800. A 2,500 deductible then fights moral hazard — the homeowner's own money is at stake in the first slice of any loss — and buying reinsurance for the tail beyond, say, three standard deviations caps the pool's worst year.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Health-system design: mandates, risk adjustment and open enrolment windows are all adverse-selection engineering.",
        "Auto telematics: pricing by measured driving is classification sharpened to the individual — and privacy's newest battleground.",
        "Crop insurance: government-backed pools for weather risk too correlated for private balance sheets alone.",
        "Cyber insurance: a young market re-learning old lessons about correlated risk every time one vulnerability hits thousands of firms at once.",
        "Climate and coastal property: repricing and retreat from flood zones is insurance acting as the economy's early-warning system.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The classic confusions: reading expected loss as the worst case (the tail is the story — that is why reinsurance exists); assuming the premium is the price of risk rather than risk plus loadings plus profit; blaming adverse selection on insurers when it is information asymmetry, cured only by classification or mandates; solving moral hazard with deductibles so large that the poor are effectively uninsured — reintroducing by the back door the variance insurance existed to remove. And whole-life products that mix insurance with investment should be evaluated as two purchases bundled, because that is what they are.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "law of large numbers", def: "Averaging many independent risks makes the pool's loss fraction converge on its expectation." },
        { term: "premium loading", def: "The gross-up over expected loss covering expenses, profit and the cost of capital." },
        { term: "float", def: "Premiums held between collection and claim payment; investable, and often the main profit engine." },
        { term: "combined ratio", def: "Claims plus expenses as a share of premiums; below 100 signals underwriting profit." },
        { term: "adverse selection", def: "High-risk buyers self-selecting into coverage at prices set for average risks — the lemons problem." },
        { term: "moral hazard", def: "Behaviour change after coverage, controlled by deductibles, copays and experience rating." },
        { term: "reinsurance", def: "Insurance bought by insurers to cap losses from large or correlated events." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "An insurer quadruples the size of an independent-risk pool. The standard deviation of the average loss per policy…",
          options: ["quadruples", "halves", "is unchanged", "doubles"],
          answer: 1,
          explain: "It falls with one over the square root of n: four times the policies means dividing by two.",
        },
        {
          q: "A death spiral in an insurance market typically begins when…",
          options: ["insurers invest the float badly", "low-risk customers exit a pooled price, worsening the average risk and forcing prices up", "claims exceed reinsurance limits", "regulators cap premiums"],
          answer: 1,
          explain: "Adverse selection in motion — the pool's composition deteriorates exactly as its price rises.",
        },
        {
          q: "A deductible primarily combats…",
          options: ["adverse selection", "moral hazard, by putting the policyholder's own money at stake", "the insurer's expense ratio", "correlated catastrophes"],
          answer: 1,
          explain: "Selection happens before the policy is sold; the deductible reshapes behaviour after it.",
        },
        {
          q: "An insurer pays 74 in claims and 26 in expenses per 100 of premium, and earns 8 of investment income on float. Its combined ratio and year are…",
          options: ["combined ratio 100 — break-even year", "combined ratio 100 — an 8 per cent profit carried by float", "combined ratio 108 — a loss", "combined ratio 74 — a large profit"],
          answer: 1,
          explain: "Claims plus expenses equal premiums (ratio 100), so underwriting breaks even and the float income is the profit.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: percentages and basic probability — the everyday probability lesson is the warm-up. Follow with the market-failures lesson for the asymmetric-information theory, the banking lesson in this subject for the other great risk-transmuting institution, and the court-procedure lesson in Law & Governance for how coverage disputes are fought. Exercise: pull any insurance policy you hold and find the deductible, the coinsurance clause and one exclusion — then ask of each which failure it was designed against.",
      },
    ],
  },
  {
    id: "fin-banks-create-money",
    title: "How Banks Create Money",
    domain: "Business & Economics",
    field: "Finance & Investment",
    branch: "Money & Markets",
    tier: "core",
    concepts: [
      "Loans create deposits, not the reverse",
      "The balance-sheet mechanic",
      "Reserves and interbank settlement",
      "The money multiplier and its limits",
      "Capital as the modern binding constraint",
      "Bank runs and deposit insurance",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Ask most people where money comes from and the folk model appears: somewhere there is a pile of cash, savers deposit it, and banks lend that pile out to borrowers. The mechanics are exactly backwards. When a bank approves your mortgage, no pile is opened; the bank types a loan into existence as an asset and a matching deposit into your seller's account as a liability. New money — broad money, the deposits the whole economy actually spends — is born on bank balance sheets, and it dies there too, extinguished when loans are repaid. The Bank of England said this plainly in a 2014 bulletin; textbooks took years to catch up. The inflation lesson in this domain covers what central banks do with this fact; this lesson is the plumbing underneath.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "If loans create deposits, then credit booms are money booms and credit crunches are money contractions — the 2008 crisis was, at bottom, the money supply shrinking because banks stopped lending. It also explains the modern policy puzzle of the 2010s: central banks created trillions in reserves and inflation still slept, because reserves are not the fuel of lending. Understanding balance-sheet money is understanding why the economy can be awash in one kind of money and starved of another.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Run the transaction. A bank lends 900,000 for a house: its assets gain a 900,000 loan (the borrower owes it); its liabilities gain a 900,000 deposit (owed to whoever sold the house). No cash moved; both sides of the balance sheet grew. Since bank deposits are what households and firms spend with, the economy's money supply just rose by 900,000. Repayment runs the film in reverse — the deposit is extinguished, the loan disappears, money is destroyed. Money is not a thing that moves around the economy; it is a pair of entries that comes into and out of existence.",
      },
      {
        kind: "para",
        text: "Where does cash enter? Reserves are the settlement layer: central-bank money that banks hold to settle with each other. When the house seller banks elsewhere, Bank A transfers reserves to Bank B to settle the deposit it created. Reserves do not constrain lending the way the folk model imagines — banks first lend, then acquire the reserves they need (from other banks, or from the central bank, which supplies them to hit its policy rate). The rate at which reserves trade between banks is the lever the central bank actually holds, which is where the inflation lesson picks up.",
      },
      {
        kind: "para",
        text: "The textbook compression of all this is the money multiplier. With a 10 per cent reserve requirement, a 1,000 deposit supports 900 of lending, which becomes a new deposit supporting 810, then 729 — a geometric series converging on 1,000 ÷ 0.10 = 10,000 of deposits from 1,000 of reserves. Every money and banking course teaches it, and the modern literature is blunt: as a description of causality it is a museum piece. Post-2008, jurisdictions flooded with reserves (some abolished reserve requirements outright, as the United States did in 2020) and lending did not explode — because reserves were never the binding constraint.",
      },
      {
        kind: "para",
        text: "What actually limits money creation? Capital: the Basel framework requires equity of several per cent of risk-weighted assets, plus buffers, and equity is expensive to raise — a bank with 8 per cent total capital can support roughly 12.5 dollars of lending per dollar of equity. Liquidity regulation: post-crisis rules require liquid asset buffers against deposit flight. Profitability: a loan must clear funding costs, expected losses and administration. And demand: no creditworthy borrower, no loan — money creation needs someone to want to borrow. Modern central banking works on price (the interest rate that clears this demand), not on rationing reserves.",
      },
      {
        kind: "para",
        text: "The fragility is the mirror of the magic. Douglas Diamond and Philip Dybvig formalised it in 1983 (work that shared the 2022 Nobel memorial prize): banks fund long, illiquid loans with short, liquid deposits — maturity transformation, valuable to everyone — but that structure has a second equilibrium, the self-fulfilling run. Northern Rock queued around the block in September 2007, Britain's first retail run since 1866. Silicon Valley Bank in March 2023 is the modern textbook: rate rises had driven unrealised losses on its long bonds, and with over 90 per cent of deposits uninsured, depositors coordinated on a phone screen — 42 billion dollars left in one day, roughly 100 billion queued for the next. The fixes are a century old and still load-bearing: deposit insurance (the FDIC dates to 1933, with the standard US cover at 250,000 dollars) to remove the run motive, and the lender of last resort lending freely against good collateral, per Walter Bagehot's 1873 dictum.",
      },
      {
        kind: "para",
        text: "One more distinction keeps the whole picture honest. Reserves are central-bank money — the banking system's settlement asset, which the public never touches directly. Deposits are commercial-bank money — promises to pay, whose money-ness depends on each bank staying solvent. “Quantitative easing” creates the first kind by the trillion and only moves the second if banks lend and customers borrow. The decade in which central banks tripled their balance sheets while inflation slept is, in one line, the empirical refutation of the multiplier.",
      },
      { kind: "heading", text: "The Mathematics" },
      { kind: "formula", name: "Money multiplier (simple model)", latex: "\\Delta M = \\frac{\\Delta R}{rr} = \\frac{1}{rr} \\times \\Delta R", meaning: "With reserve ratio rr, each dollar of reserves supports 1/rr of deposits in the textbook model — an upper bound, not a causal dial." },
      { kind: "formula", name: "Balance-sheet identity", latex: "\\text{Assets} = \\text{Liabilities} + \\text{Equity}", meaning: "Every loan created adds equally to assets (the loan) and liabilities (the deposit); the identity never breaks." },
      { kind: "formula", name: "Capital constraint on lending", latex: "\\text{Capital ratio} = \\frac{\\text{Equity}}{\\text{Risk-weighted assets}} \\ge r^{*} \\;\\Rightarrow\\; \\text{Max loans} = \\frac{\\text{Equity}}{r^{*}}", meaning: "At an 8 per cent requirement, each dollar of equity supports at most about 12.50 of lending — the modern binding limit." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: trace 1,000 of new reserves through a banking system with a 10 per cent reserve requirement, and then ask what limits the same system today.",
        "Round 1: Bank A receives the 1,000 deposit, holds 100 in reserve, lends 900 — created as a new deposit at Bank B.",
        "Round 2 and onward: B holds 90, lends 810 to C; C lends 729; and so on down the geometric series.",
        "Sum: total deposits = 1,000 × (1 + 0.9 + 0.81 + …) = 1,000 ÷ 0.10 = 10,000, of which 9,000 is loans created from nothing and 1,000 remains as reserves. Money expanded tenfold; reserves never moved once.",
        "Update to the modern balance sheet: with reserves abolished as a binding constraint, suppose the system holds 800 of equity and the capital requirement is 8 per cent. Maximum risk-weighted lending = 800 ÷ 0.08 = 10,000 — the same lending ceiling, now set by capital and by borrower demand, which is why a decade of trillion-dollar reserves coexisted with modest credit growth.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Mortgage cycles: house-price booms are jointly money booms — each loan is new purchasing power chasing the same stock of homes.",
        "Credit crunches: 2008-09 was a monetary contraction by another name, as banks shrank balance sheets and deposits vanished with the loans.",
        "Quantitative easing: creating reserves to buy bonds swaps one asset for another; the deposit money the public spends only appears if banks then lend.",
        "Bank regulation: stress tests and capital buffers are, functionally, limits on how fast the money supply can grow.",
        "Digital wallets and narrow banks: fintech proposals that hold only reserves are debates about who may create the public's money.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "Three errors dominate dinner-table economics. “Banks lend out deposits” — no; deposits are created by lending, and this is the single most consequential correction in the field. “The multiplier is a machine” — it is a symptom, describing an equilibrium that capital, liquidity, profitability and loan demand actually set. And “banks create money, therefore they are unconstrained” — the constraints moved, they did not vanish: capital, regulation and creditworthy borrowers bind harder than reserve arithmetic ever did. The corollary matters too: loan repayment destroys money, so an economy deleveraging is an economy whose money supply is quietly shrinking.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "broad money", def: "The public's spendable money — mostly bank deposits — created when banks lend." },
        { term: "reserves", def: "Central-bank money banks hold to settle with one another; not lendable cash, and not the public's money." },
        { term: "money multiplier", def: "The textbook ratio 1/rr linking reserves to deposits — descriptive ceiling, not causal dial." },
        { term: "capital ratio", def: "Equity over risk-weighted assets; the modern binding constraint on bank lending." },
        { term: "maturity transformation", def: "Funding long-term loans with demandable deposits — banking's service and its fragility." },
        { term: "bank run", def: "Coordinated deposit withdrawal that destroys even a solvent bank; Diamond-Dybvig's bad equilibrium." },
        { term: "lender of last resort", def: "The central bank lending freely against good collateral in a panic — Bagehot's rule, since 1873." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "A bank approves a 10,000 car loan. The immediate effect on broad money is…",
          options: ["none, until reserves move", "it rises by 10,000 — the new deposit created alongside the loan", "it falls by 10,000", "only the borrower's debt rises"],
          answer: 1,
          explain: "The loan is an asset and the new deposit a liability; deposits are broad money, so it expands on signing.",
        },
        {
          q: "With a 10 per cent reserve requirement, the textbook deposit multiplier is…",
          options: ["2×", "10×", "100×", "1.1×"],
          answer: 1,
          explain: "1 ÷ 0.10 = 10 — a geometric series, and in the modern view an upper bound rather than a cause.",
        },
        {
          q: "Repaying a bank loan…",
          options: ["creates new deposits", "destroys the money the loan originally created", "increases system reserves", "raises the bank's capital"],
          answer: 1,
          explain: "Loan and deposit are extinguished together — why economy-wide deleveraging shrinks the money supply.",
        },
        {
          q: "Silicon Valley Bank's 2023 failure illustrated that runs strike hardest when…",
          options: ["branches are physically crowded", "deposits are largely uninsured and the balance sheet carries unrealised losses", "reserve requirements are high", "interest rates are at zero"],
          answer: 1,
          explain: "Over 90 per cent uninsured plus paper losses on long bonds — a Diamond-Dybvig run executed at smartphone speed.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — the double-entry idea is gently introduced by the accounting lessons in this domain. Follow with the inflation and monetary-policy lesson for what central banks do with the policy rate, the insurance lesson for the risk machinery next door, and the fiscal-policy lesson for the government's side of the money system. Exercise: find your own bank's capital ratio in its latest annual report, divide equity by it, and ask what multiple of loans one dollar of your deposits ultimately supports.",
      },
    ],
  },
]
