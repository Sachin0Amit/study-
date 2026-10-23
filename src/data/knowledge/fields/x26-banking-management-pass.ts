import type { KnowledgeTopic } from '../types'

/** Expansion pass X26 (2026-10-23): the banking, management and measurement
 *  sweep. After the X17–X25 passes drove the exam-coverage audit to 98%
 *  (2387/2427), the weakest clusters were rbi-grade-b (80%, five unmapped
 *  topics), gaokao (84%) and gcse-maths (84%). Each candidate below was
 *  cross-checked against coverage/coverage.json (4,455 sections across 201
 *  subjects), the dedup ledger and the knowledge index before authoring:
 *  1. econ-indian-banking-financial-system — the institutional architecture
 *     of Indian banking: bank categories, the regulator map, payment rails,
 *     deposit insurance. Zero overlap: coverage.json's only banking-adjacent
 *     sections are 'Monetary Policy and Central Banking' (owned by the
 *     econ-monetary-policy-central-banking lesson — policy instruments, not
 *     institutional structure) and 'Seating Arrangements, Puzzles &
 *     Order–Ranking'; no section teaches bank categories, DICGC, payments
 *     banks or NBFCs (verified grep). This lesson owns structure; the
 *     monetary-policy lesson keeps instruments; fin-financial-markets-money-
 *     capital keeps market mechanics.
 *  2. econ-poverty-inequality-employment-india — India-specific poverty
 *     measurement (lines, committees, MPI), inequality measures and the
 *     employment ledger (PLFS, unemployment types, schemes, labour codes).
 *     Zero overlap: no 'poverty' section exists anywhere in coverage.json
 *     (verified grep); econ-india-development-challenges owns human-capital
 *     and comparative development, not measurement committees or PLFS
 *     definitions; soc-stratification owns sociological stratification.
 *  3. bus-management-organisational-behaviour — the management canon:
 *     functions, Taylor, Fayol, Maslow, Herzberg, McGregor, leadership
 *     styles. Zero overlap: no 'management'/'organisational' section exists
 *     in coverage.json (verified grep — 'Resource Management' hits are OS
 *     memory/storage, 'Package Management' is bundlers).
 *  4. bus-communication-governance-ethics — the communication process and
 *     barriers, corporate governance, business ethics and CSR, conflict,
 *     stress and HR basics. Zero overlap verified.
 *  5. eng-business-correspondence — formal letters, memos, email registers
 *     and the précis as written instruments. Zero overlap: no
 *     'correspondence' section exists (the only grep hit is Post's
 *     Correspondence Problem, formal language theory); the writing lessons
 *     own essay argument, cohesion and punctuation — not letter/memo/email
 *     formats or précis discipline.
 *  6. math-measurement-areas-volumes — applied mensuration: perimeter,
 *     area, surface area, volume, sectors, compound solids and unit
 *     conversion. The masters volumes own one combined 'Algebra, Geometry,
 *     Mensuration & Trigonometry Basics' section; this lesson owns the
 *     applied measurement arithmetic built on it (verified: no dedicated
 *     mensuration/area/volume section).
 *  Sources read while writing (legally open):
 *  - Reserve Bank of India, "About Us" (Functions and Structure),
 *    rbi.org.in/Scripts/AboutUsDisplay.aspx — establishment 1 April 1935
 *    under the RBI Act 1934, nationalisation 1949, the seven named
 *    functions, Central Board composition, Board for Financial Supervision
 *    (1994), DICGC and BRBNMPL subsidiaries.
 *  - NITI Aayog, "National Multidimensional Poverty Index: A Progress
 *    Review 2023" (baseline report 2021 + July 2023 discussion paper,
 *    niti.gov.in) — three dimensions, twelve indicators, 55.34% (2005-06)
 *    → 24.85% (2015-16) → 14.96% (2019-21), and the 2013-14 to 2022-23
 *    trend with 24.82 crore escaping multidimensional poverty.
 *  - NCERT, Indian Economic Development, Class XI (Units 4 'Poverty' and
 *    7 'Employment', ncert.nic.in, CC-licensed NCERT textbooks) — the
 *    committee sequence, calorie norms, LFPR/WPR/unemployment-rate
 *    definitions, formal–informal divide.
 *  - OpenStax, Principles of Management (openstax.org, CC BY) — chapter
 *    map confirmed by reading the book page: ch.1 'Managing and
 *    Performing', ch.3 'The History of Management' (Taylor, Fayol),
 *    ch.13 'Leadership', ch.14 'Work Motivation for Performance' (Maslow,
 *    Herzberg, McGregor), ch.15 'Managing Teams', ch.17 'Organizational
 *    Planning and Controlling'.
 *  - OpenStax, Business Ethics (openstax.org, CC BY) — stakeholder theory,
 *    corporate governance and the CSR layers.
 *  - Business Communication for Success (open textbook, Open Textbook
 *    Library / LibreTexts mirror) — communication process, channel choice,
 *    professional letter and memo conventions.
 *  - RBI consumer-information pages (payments banks' two-lakh deposit cap,
 *    DICGC's five-lakh cover raised February 2020) and the RBI Integrated
 *    Ombudsman Scheme 2021 (cms.rbi.org.in) for the complaint-escalation
 *    route in the correspondence lesson. */

export const x26BankingManagementPassTopics: KnowledgeTopic[] = [
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
    id: 'econ-poverty-inequality-employment-india',
    title: 'Poverty, Inequality and Employment in India: Lines, Measures and the Jobs Ledger',
    domain: 'Business & Economics',
    field: 'Development Economics',
    branch: 'Poverty & Labour',
    tier: 'core',
    concepts: [
      'Poverty lines: from Naoroji to Tendulkar and Rangarajan',
      'The NITI Aayog National Multidimensional Poverty Index',
      'Inequality: Lorenz curve and the Gini coefficient',
      'Unemployment types: structural, frictional, disguised',
      'LFPR, WPR and the unemployment rate of the PLFS',
      'MGNREGA and the employment-scheme toolkit',
      'The formal–informal divide and the four labour codes',
    ],
    words: 1928,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Three linked ledgers define the social side of India\'s development story: who counts as poor, how evenly growth is shared, and who has work. Each ledger has its own machinery — committees that fix poverty lines, indices that count deprivations rather than rupees, survey ratios that turn a labour market into numbers — and each has its own famous controversies. This lesson builds the machinery: the line-based and multidimensional measurements of poverty, the Lorenz-curve toolkit for inequality, the vocabulary of employment and unemployment that surveys use, and the scheme architecture — from the national rural employment guarantee to the consolidated labour codes — that policy hangs on it. The human-capital and comparative-development lesson owns the growth-and-capability frame; here the subject is measurement and the jobs ledger itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Questions on this territory rarely ask for opinions — they ask which committee set which line, what a headcount ratio fell from and to, what the twelve indicators of the National MPI measure, which unemployment type a farmer\'s lean season illustrates, or what MGNREGA legally guarantees. The numbers are memorable because they are ranges with anchors: the Tendulkar line\'s 21.9 percent in 2011-12, the MPI\'s fall from 55.34 percent in 2005-06 to 14.96 percent in 2019-21, the hundred days of guaranteed wage employment. Fix the anchors and the committees\' logic — why calorie norms gave way to consumption baskets and why deprivations were added to income — becomes a story you can retell, not a list you must memorise.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Poverty line', def: 'A cutoff consumption (or income) level below which a person is counted poor. India\'s official lines evolved through committees: Y.K. Alagh (1979) anchored lines to calorie norms of 2,400 kcal rural and 2,100 kcal urban per person per day; the Tendulkar committee (2009) moved to a uniform consumption basket with price adjustments, giving 21.9 percent poor in 2011-12; the Rangarajan committee (2014) set higher lines but was not adopted.' },
          { term: 'Headcount ratio', def: 'The percentage of population below the poverty line — the headline poverty rate. On Tendulkar methodology it fell from 45.3 percent in 1993-94 to 37.2 percent in 2004-05 and 21.9 percent in 2011-12; faster after 2005 than before.' },
          { term: 'National MPI', def: 'NITI Aayog\'s Multidimensional Poverty Index, aligned to the global MPI of OPHI and UNDP: three dimensions (health, education, standard of living) and twelve indicators — nutrition, child and adolescent mortality, antenatal care, schooling years, school attendance, cooking fuel, sanitation, drinking water, electricity, housing, assets and bank account. A household is MPI-poor when its weighted deprivation score crosses one-third.' },
          { term: 'Gini coefficient', def: 'A measure of inequality read off the Lorenz curve — the area between the equality diagonal and the curve, divided by the whole triangle. Zero means perfect equality, one perfect concentration. India\'s consumption Gini sits well below its income Gini, a standard exam contrast.' },
          { term: 'LFPR, WPR and unemployment rate', def: 'Survey vocabulary of the Periodic Labour Force Survey (PLFS, running since 2017-18): the labour-force participation rate is the labour force (working or seeking work) as a share of population; the worker-population ratio counts the actually working; the unemployment rate is seekers as a share of the labour force.' },
          { term: 'MGNREGA', def: 'The Mahatma Gandhi National Rural Employment Guarantee Act (2005): a legal guarantee of up to one hundred days of unskilled wage employment per rural household per year on demand, with unemployment allowance when the state fails to provide work — the world\'s largest public-works safety net.' },
        ],
      },
      {
        kind: 'para',
        text: 'The poverty line began as a subsistence calculation and matured into a statistical institution. Pre-independence, Dadabhai Naoroji\'s estimates of bare subsistence living opened the ledger; post-independence planners inherited the calorie-anchored approach, and the Alagh committee\'s 1979 formulation made 2,400 and 2,100 kilocalories per person per day the rural and urban anchors. The Tendulkar committee\'s 2009 overhaul is the one to know precisely: it abandoned pure calorie anchoring for a consumption basket that priced in what poor households actually bought, adjusted for urban–rural price differences, and produced the modern series — 45.3 percent poor in 1993-94, 37.2 percent in 2004-05, 21.9 percent in 2011-12, at lines of roughly 816 and 1,000 rupees per person per month in 2011-12 prices. The Rangarajan committee (2014) proposed higher lines and a higher headcount, but its recommendations were not adopted as the official series — a classic exam discrimination.',
      },
      {
        kind: 'para',
        text: 'Multidimensional measurement answered the objection that a person just above a rupee line can still lack sanitation, schooling or electricity. The global MPI developed by OPHI and UNDP (2010) counts deprivations across health, education and living standards; India adopted the method nationally when NITI Aayog published its baseline National MPI in 2021, reporting the headcount falling from 55.34 percent in 2005-06 to 24.85 percent in 2015-16 and 14.96 percent in 2019-21, and its 2023 progress review extended the trend — 29.17 percent in 2013-14 to 11.28 percent in 2022-23, with about 24.82 crore people moving out of multidimensional poverty over the nine years. The mechanics matter as much as the trend: twelve indicators, weighted across the three dimensions, each household scored by the share of weighted deprivations it suffers, and a one-third cutoff marking it poor. A family deprived in nutrition, cooking fuel, sanitation and housing — four standard-of-living and health indicators — lands near or beyond the threshold even if its consumption sits above the rupee line.',
      },
      {
        kind: 'para',
        text: 'Inequality is measured on the same consumption data the poverty line uses, but asks a different question: not how many are below a line, but how the whole distribution tilts. The Lorenz curve plots cumulative population share against cumulative income (or consumption) share; the Gini coefficient compresses the gap between curve and diagonal into a single number. Two contrasts recur in questions: consumption inequality in India (the historically surveyed variable) is markedly lower than income inequality (measured by tax and survey data, with the top one percent\'s income share around a fifth of national income by recent estimates), and rural–urban gaps persist within both. Policy answers have leaned on redistribution through targeted subsidies and transfers, progressive taxation, and — the point examiners love — inclusive-growth schemes that raise the floor: rural employment guarantee, food security, and financial inclusion, each of which moves the Lorenz curve less dramatically than it moves the poverty headcount.',
      },
      {
        kind: 'para',
        text: 'The employment ledger starts with definitions. The labour force is everyone working or seeking work; the workforce is everyone actually working; the unemployment rate is seekers as a share of the labour force, and the participation rate is the labour force as a share of population — a low LFPR (notably among women) can coexist with a low unemployment rate simply because discouraged workers stopped seeking. Unemployment comes in typed flavours: structural, when skills and jobs mismatch the economy\'s shape; frictional, the between-jobs search gap; seasonal, the harvest-calendar idleness of agriculture; cyclical, the demand-side slack of downturns; and disguised — the surplus hands on family farms whose marginal product is near zero, the classic Indian formulation. The formal–informal divide runs through all of it: roughly nine of every ten Indian workers are informal, without written contracts or social security, which is why the PLFS (since 2017-18) tracks formal/informal and self-employed/regular/casual splits, and why the four labour codes consolidating twenty-nine central laws — on wages, industrial relations, social security and occupational safety — were framed as the big structural reform of the employment ledger.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reading a PLFS-Style Labour Market Table',
        steps: [
          'A district of 10 million people (working age) reports: employed 4.2 million, unemployed and seeking 0.3 million, not seeking 5.5 million.',
          'Labour force = employed + seekers = 4.2 + 0.3 = 4.5 million.',
          'Unemployment rate = seekers ÷ labour force = 0.3/4.5 = 6.7 percent.',
          'LFPR = labour force ÷ working-age population = 4.5/10 = 45 percent; WPR = 4.2/10 = 42 percent.',
          'Sanity check: unemployment looks modest, but the 55 percent outside the labour force — disproportionately women — is where the participation story lives; a scheme like MGNREGA moves workers from "not seeking" into guaranteed work, raising WPR without changing the unemployment rate at all.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which committee\'s methodology produced India\'s official poverty count of 21.9 percent in 2011-12?',
          options: ['Alagh (1979)', 'Lakdawala', 'Tendulkar (2009)', 'Rangarajan (2014)'],
          answer: 2,
          explain: 'The Tendulkar committee\'s consumption-basket method gave the official series — 45.3 (1993-94), 37.2 (2004-05), 21.9 (2011-12) percent. Rangarajan\'s higher lines were never adopted as official.',
        },
        {
          q: 'The Alagh committee anchored the poverty line to calorie norms of…',
          options: ['2,100 kcal rural and 2,400 kcal urban', '2,400 kcal rural and 2,100 kcal urban', '2,200 kcal for both areas', '2,000 kcal rural and 2,500 kcal urban'],
          answer: 1,
          explain: 'The 1979 Alagh formulation set 2,400 kilocalories per person per day for rural areas and 2,100 for urban — rural work being more physically demanding.',
        },
        {
          q: 'NITI Aayog\'s National MPI uses which dimensions and how many indicators?',
          options: ['3 dimensions and 10 indicators', '3 dimensions and 12 indicators', '2 dimensions and 12 indicators', '4 dimensions and 14 indicators'],
          answer: 1,
          explain: 'Health, education and standard of living — three dimensions carrying twelve indicators (including maternal health and bank account, additions over the global ten).',
        },
        {
          q: 'A graduate moving between cities after quitting one job and searching for the next illustrates…',
          options: ['structural unemployment', 'frictional unemployment', 'disguised unemployment', 'seasonal unemployment'],
          answer: 1,
          explain: 'Frictional unemployment is the between-jobs search gap; structural is a skills-shape mismatch, disguised is zero-marginal-product farm labour, seasonal follows the crop calendar.',
        },
        {
          q: 'Under MGNREGA, a rural household is legally entitled to how many days of guaranteed wage employment per year?',
          options: ['100 days', '150 days', '60 days', '365 days'],
          answer: 0,
          explain: 'The 2005 act guarantees up to one hundred days of unskilled wage employment per rural household per year on demand, with an unemployment allowance if the state cannot provide work.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Attributing the official line to Rangarajan — his 2014 lines were higher and never adopted; Tendulkar owns the official series. Flipping the calorie norms — 2,400 rural, 2,100 urban. Counting ten indicators for the national MPI — the global MPI has ten; India\'s twelve add maternal health and bank account. Dividing seekers by the workforce to get the unemployment rate — the denominator is the labour force. Confusing a low unemployment rate with a healthy market: a falling LFPR can hide it. And describing MGNREGA as a scheme "providing" a hundred days of work — the guarantee is on demand, with an allowance attached to state failure, which is what makes it a right rather than a quota.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: comfort with percentages. Follow with the human-capital and comparative-development lesson (education and health as investments; India–China–Pakistan paths) and the banking-system lesson (financial inclusion as an anti-poverty instrument). Primary reading: NCERT, Indian Economic Development Class XI, Unit 4 "Poverty" and Unit 7 "Employment" (ncert.nic.in — committee sequence, calorie norms, LFPR/WPR definitions, formal–informal divide); NITI Aayog, "National Multidimensional Poverty Index — Baseline Report" (2021) and "A Progress Review 2023" (niti.gov.in — 55.34 → 24.85 → 14.96 percent for 2005-06/2015-16/2019-21; 29.17 (2013-14) → 11.28 (2022-23) with 24.82 crore escaping); MGNREGA framework at the Ministry of Rural Development site.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Lines: Naoroji\'s subsistence → Alagh 1979 (2,400/2,100 kcal) → Tendulkar 2009 (official: 21.9% in 2011-12) → Rangarajan 2014 (higher, not adopted).',
        'Headcount series (Tendulkar): 45.3% (1993-94) → 37.2% (2004-05) → 21.9% (2011-12).',
        'National MPI: 3 dimensions, 12 indicators, one-third cutoff; 55.34% (2005-06) → 24.85% (2015-16) → 14.96% (2019-21); 29.17% (2013-14) → 11.28% (2022-23), ~24.82 crore out.',
        'Inequality: Lorenz curve → Gini; consumption Gini below income Gini; top-1% income share near a fifth.',
        'Labour vocabulary: LFPR, WPR, unemployment rate (seekers ÷ labour force); unemployment types — structural, frictional, seasonal, cyclical, disguised; ~90% informal.',
        'Policy toolkit: MGNREGA (100 days, demand-driven, 2005), skill and start-up programmes, four labour codes consolidating twenty-nine laws.',
      ] },
    ],
  },
  {
    id: 'bus-management-organisational-behaviour',
    title: 'Management and Organisational Behaviour: Functions, Motivation and Leadership',
    domain: 'Business & Economics',
    field: 'Management',
    branch: 'Organisational Behaviour',
    tier: 'core',
    concepts: [
      'Management functions: planning, organising, staffing, directing, controlling',
      'Taylor\'s scientific management and the one best way',
      'Fayol\'s fourteen principles of administration',
      'Maslow\'s hierarchy and Herzberg\'s two factors',
      'McGregor\'s Theory X and Theory Y',
      'Leadership styles: autocratic, democratic, laissez-faire',
    ],
    words: 1971,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Management is the craft of getting things done through people, and organisational behaviour is the study of those people — what moves them, how they group, why leaders work or fail. Exam syllabi organise the field into a stable canon: the definition and functions of management, the two founding giants (Taylor on the shop floor, Fayol in the administrative office), the motivation theories that dominate multiple-choice sections (Maslow, Herzberg, McGregor, with a nod to modern expectancy thinking), and the leadership-style taxonomy. This lesson walks the canon in order, because each layer builds on the last: functions describe what managers do, the founding principles describe how they first systematised it, motivation theories explain the people they direct, and leadership styles describe the doing of direction itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Management questions are classification questions in disguise. A scenario names a manager doing four things — which function is the fifth? A firm starts paying bonuses for output and restructuring jobs — Taylor, Fayol or Herzberg? A supervisor assumes workers avoid responsibility — which Theory? The examiner hands you behaviour and asks for the label. That is good news: the canon is small, the labels are few, and the distinctions between them (Fayol\'s universal principles versus Taylor\'s scientific methods; hygiene factors that prevent dissatisfaction versus motivators that create satisfaction) are sharp enough to test. Learn the distinctions and the questions answer themselves.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Functions of management', def: 'The standard decomposition of managerial work: planning (deciding goals and actions in advance), organising (assigning tasks, grouping, authority), staffing (filling and keeping the roles), directing/leading (guiding, motivating, communicating, supervising) and controlling (measuring performance against standards and correcting). Management is pervasive — it happens at every level and in every organisation.' },
          { term: 'Scientific management (Taylor)', def: 'F.W. Taylor\'s programme (The Principles of Scientific Management, 1911) for the shop floor: replace rule-of-thumb with the scientifically derived "one best way" via time and motion studies, scientifically select and train workers, standardise tools and methods, and tie pay to output (differential piece rates). Cooperation between "scientifically selected" workers and managers replaces conflict over effort.' },
          { term: 'Administrative principles (Fayol)', def: 'Henri Fayol\'s fourteen principles of general administration — division of work; authority and responsibility; discipline; unity of command; unity of direction; subordination of individual interest; remuneration; centralisation; scalar chain (with the gang plank for lateral shortcuts); order; equity; stability of tenure; initiative; esprit de corps — plus the claim that managing is a universal, teachable activity: to forecast and plan, to organise, to command, to coordinate and to control.' },
          { term: 'Maslow\'s hierarchy of needs', def: 'Abraham Maslow\'s five-level ladder — physiological, safety, social/belonging, esteem, self-actualisation — where lower, prepotent needs dominate behaviour until reasonably satisfied, after which the next level motivates. Managerial translation: match incentives to the level the employee currently occupies.' },
          { term: 'Herzberg\'s two-factor theory', def: 'Frederick Herzberg\'s finding that the factors preventing dissatisfaction (hygiene: pay, policy, conditions, supervision, job security) are different from the factors creating satisfaction (motivators: achievement, recognition, the work itself, responsibility, growth). Removing hygiene complaints buys calm, not motivation; motivators are what energise.' },
          { term: 'Theory X and Theory Y', def: 'Douglas McGregor\'s pair of managerial assumption sets: X assumes the average person dislikes work, avoids responsibility and must be coerced and closely supervised; Y assumes work is natural, people exercise self-direction toward commitments, and seek responsibility — so participation, delegation and job enrichment outperform command and control.' },
        ],
      },
      {
        kind: 'para',
        text: 'The functions give management its grammar. Planning decides in advance what is to be done, how and by when — and because the future is uncertain, planning is called the primary function from which the others flow. Organising then converts the plan into a structure: departments, reporting lines, authority matching responsibility. Staffing fills the structure — recruitment, selection, placement, training — and directing puts the structure into motion through leadership, communication, motivation and supervision. Controlling closes the loop by comparing performance with standards and feeding corrections back into the next plan. Levels sit on top of the grammar: top management sets objectives and policy, middle management interprets policy into departmental plans, and supervisory (operational) management runs day-to-day execution — the same five functions, different horizons. Whether management is a science (systematic knowledge, principles), an art (personal skill applied to situations) or a profession (a growing — but not yet fully licensed — body of knowledge) is the standing debate question; the accepted answer is "all three, to degrees".',
      },
      {
        kind: 'para',
        text: 'The founders systematised different rooms of the same house. Taylor worked at the bench: his scientific management attacked soldiering — deliberate slow work — with time and motion studies that found the one best way, standardised tools, scientifically selected and trained workers, and paid differential piece rates so that above-standard output earned above-standard pay. Its legacy is work study, industrial engineering and the incentive scheme; its criticism is the treatment of the worker as a machine attachment. Fayol managed from the office: a mining-company CEO, he claimed administration was a universal, teachable skill and stated fourteen principles — including the two examiners love: unity of command (one subordinate, one boss) and the scalar chain with its gang plank, the sanctioned lateral bridge between two managers who would otherwise route a message up one chain and down the other. The neat contrast: Taylor asked how work should be done at the worker–machine interface; Fayol asked how the whole undertaking should be administered.',
      },
      {
        kind: 'para',
        text: 'Motivation theory is where organisational behaviour earns its separate name. Maslow arranged human needs in a prepotent ladder — a hungry worker (physiological) is not yet reachable by esteem incentives — and managers draw the practical lesson: diagnose the occupied level and aim the incentive there. Herzberg then split the toolbox: his interviews found that the things that made people miserable (pay, policy, supervision, conditions) were not the mirror image of the things that made work satisfying (achievement, recognition, growth, the work itself) — hygiene and motivation are different axes, which is why a pay rise can end a complaint without creating engagement, and why job enrichment (adding responsibility and growth) is the motivator-side move. McGregor reframed both as consequences of managerial assumptions: the Theory X supervisor who assumes laziness builds coercion, gets compliance, and never tests the alternative; the Theory Y manager builds conditions for self-direction and is at least not wrong about the people Maslow and Herzberg describe. Modern additions — McClelland\'s needs for achievement, affiliation and power, and Vroom\'s expectancy view (motivation = expectancy × instrumentality × valence) — sharpen the picture for higher-level questions without displacing the classic trio.',
      },
      {
        kind: 'para',
        text: 'Leadership is the directing function made personal. The style taxonomy is the exam staple: autocratic leadership centralises decisions and issues instructions (fast, useful in crisis, corrosive to initiative), democratic leadership decides with the group (slower, stronger commitment and better decisions when knowledge is distributed), and laissez-faire leadership delegates and intervenes minimally (works with expert, self-directed teams, drifts otherwise). Beyond styles sit three lenses worth naming: trait theory (leaders are born with qualities — discredited as sufficient, but not silent), behavioural theory (what leaders do — task orientation versus people orientation, the Blake–Mouton grid\'s two axes), and situational theory (the style must fit maturity and context — Fiedler, Hersey–Blanchard). Teams complete the picture: high-performing teams trade individual glory for shared goals, clear norms and mutual accountability, and a manager\'s job — in the OpenStax formulation that runs the modern course — is to plan the work, organise the structure, lead the people and control the results, all four verbs at once.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Diagnose a Motivation Failure with the Right Theory',
        steps: [
          'Scenario: a support team is paid well, has a modern office and friendly supervisors — yet performs flatly, with high "satisfied enough" attendance and zero initiative.',
          'Screen hygiene first (Herzberg): pay, policy, conditions, supervision — all fine; complaints are low. Hygiene explains the absence of dissatisfaction, not the absence of drive.',
          'Check the motivator side: the work is repetitive, recognition is rare, responsibility is fixed, growth is invisible. The motivator axis is empty — engagement cannot come from better hygiene.',
          'Prescribe: enrich jobs (own the customer end-to-end), add recognition tied to achievement, create visible growth paths — motivator-side moves.',
          'Cross-check with McGregor: the current regime assumes employees need only comfort (a soft-X drift). A Y-style redesign invites self-direction; Maslow would read the same case as employees parked on satisfied lower levels, unmoved because esteem and self-actualisation paths are closed.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Comparing performance against standards and correcting deviations is which management function?',
          options: ['Planning', 'Organising', 'Directing', 'Controlling'],
          answer: 3,
          explain: 'Controlling closes the management loop: set standards, measure, compare, correct — feeding the corrections into the next cycle of planning.',
        },
        {
          q: 'The "gang plank" that permits two managers at the same level to communicate directly, bypassing the scalar chain, belongs to…',
          options: ['Taylor\'s scientific management', 'Fayol\'s administrative principles', 'Maslow\'s hierarchy', 'Herzberg\'s two-factor theory'],
          answer: 1,
          explain: 'Fayol\'s scalar-chain principle comes with the gang plank — the sanctioned lateral bridge that preserves hierarchy while avoiding the slow up-and-down route.',
        },
        {
          q: 'A firm improves pay, lighting and supervision, and complaints stop — but output stays flat. Herzberg would say…',
          options: ['motivators were added', 'hygiene factors improved; motivators untouched', 'Theory X assumptions were validated', 'Maslow\'s safety needs were activated'],
          answer: 1,
          explain: 'Hygiene improvements end dissatisfaction but do not create satisfaction; engagement needs the motivator axis — achievement, recognition, responsibility, growth.',
        },
        {
          q: 'A manager who believes employees naturally avoid work and must be coerced holds which assumption set?',
          options: ['Theory Y', 'Theory X', 'Theory Z', 'Expectancy theory'],
          answer: 1,
          explain: 'Theory X assumes dislike of work and avoidance of responsibility, justifying coercion and close supervision; Theory Y assumes self-direction toward accepted goals.',
        },
        {
          q: 'Which pairing correctly matches founder to arena?',
          options: ['Taylor: administrative principles; Fayol: shop-floor efficiency', 'Taylor: shop-floor scientific methods; Fayol: universal administrative principles', 'Both worked on motivation ladders', 'Fayol founded time and motion studies'],
          answer: 1,
          explain: 'Taylor systematised the worker–machine interface (time studies, one best way, differential piece rates); Fayol systematised general administration (fourteen principles, unity of command, scalar chain).',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Merging Taylor and Fayol — one is scientific management of the shop floor, the other administrative principles of the whole enterprise; unity of command and the gang plank are Fayol\'s, differential piece rates are Taylor\'s. Reading Maslow as a strict staircase that everyone climbs identically — the levels are prepotent tendencies, not universal schedules, and the theory was never meant as a pay-design tool. Calling a pay rise a motivator — in Herzberg\'s language pay is hygiene; it buys the absence of dissatisfaction. Swapping Theory labels — X is the coercive assumption set, Y the self-direction one. And naming laissez-faire as "no leadership" — it is delegated leadership, which succeeds only with expert, self-directed teams and fails by drift otherwise.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the communication-governance-ethics lesson (the directing function\'s information layer and the institutional frame) and the cost-concepts and business-cycles lessons for the quantitative side of running firms. Primary reading: OpenStax, Principles of Management (openstax.org, CC BY — book page read: ch.1 "Managing and Performing" for the leading/planning/organizing/controlling approach, ch.3 "The History of Management" for Taylor and Fayol, ch.13 "Leadership", ch.14 "Work Motivation for Performance" for Maslow, Herzberg and McGregor, ch.15 "Managing Teams", ch.17 "Organizational Planning and Controlling"); NCERT Business Studies Class XII, chapters "Nature and Significance of Management" and "Directing" for the Indian-curriculum phrasing of the same canon.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Five functions: planning → organising → staffing → directing → controlling; pervasive across levels; science + art + proto-profession.',
        'Taylor (1911): one best way, time and motion studies, scientific selection, differential piece rates — the shop floor.',
        'Fayol: fourteen principles — unity of command, scalar chain with gang plank, equity, esprit de corps — the whole administration.',
        'Maslow: physiological → safety → social → esteem → self-actualisation; aim incentives at the occupied level.',
        'Herzberg: hygiene (pay, policy, conditions) prevents dissatisfaction; motivators (achievement, recognition, growth) create it. McGregor: X assumes coercion works, Y assumes self-direction works.',
        'Leadership styles: autocratic (fast, crisis), democratic (commitment, distributed knowledge), laissez-faire (expert teams); situational fit beats trait folklore.',
      ] },
    ],
  },
  {
    id: 'bus-communication-governance-ethics',
    title: 'Business Communication, Corporate Governance and Ethics: The Institutional Layer',
    domain: 'Business & Economics',
    field: 'Management',
    branch: 'Communication, Governance & Ethics',
    tier: 'core',
    concepts: [
      'The communication process: sender, encoding, channel, decoding, feedback',
      'Barriers: semantic, psychological, organisational',
      'Corporate governance and the board of directors',
      'Business ethics and corporate social responsibility',
      'Conflict management and workplace stress',
      'HR basics: recruitment, appraisal and training',
    ],
    words: 1909,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Institutions run on three invisible systems: the information system that moves meaning between people, the governance system that keeps power accountable, and the ethical system that decides what the organisation will and will not do. This lesson covers all three plus the people machinery that staffs them. It completes the management picture begun in the functions-and-motivation lesson: there the subject was what managers do and why employees act; here it is how organisations talk, who watches the watchers, and how the HR pipeline fills every role in between. The syllabus packages these as "communication, governance and ethics", and the exam emphasis falls on process vocabulary, barrier classification, governance mechanisms and the taxonomy of social responsibility.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'This territory rewards precise vocabulary. The communication process has named parts — encoding, channel, decoding, feedback, noise — and barriers come in three labelled families (semantic, psychological, organisational); governance has named mechanisms (board, audit committee, independent directors); responsibility has named layers (economic, legal, ethical, discretionary). Questions hand you a scenario — a rumour warping as it travels, a board approving related-party deals, a company funding a school — and ask for the label. Knowing that communication is complete only when feedback confirms decoding, that governance exists because ownership and control are separated, and that CSR in India has a statutory quota shape turns soft-sounding topics into answerable ones.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Communication process', def: 'Sender → encoding (ideas into symbols) → message → channel (formal or informal; vertical, horizontal or diagonal) → decoding (symbols back into meaning) → receiver → feedback, with noise distorting at every stage. Communication succeeds only when feedback confirms that the decoded meaning matches the intended one.' },
          { term: 'Communication barriers', def: 'Three families: semantic (wrong words, technical jargon, language differences, ambiguous symbols), psychological (premature evaluation, lack of attention, loss by transmission and poor retention, distrust) and organisational (rigid rules, status and hierarchical distance, complex structure, information overload). Remedies match the family: clarity and feedback against semantics, active listening and empathy against psychology, flatter channels and clear policy against organisational.' },
          { term: 'Corporate governance', def: 'The system by which companies are directed and controlled — the board of directors elected by shareholders, its committees (audit, nomination, remuneration), independent directors who bring outside judgement, disclosure norms and auditor oversight. The driver is the separation of ownership from control: shareholders own, professional managers run, governance aligns the two.' },
          { term: 'Business ethics', def: 'The moral principles — honesty, fairness, integrity, law-abidingness, concern for stakeholders — that govern business conduct, sourced from law (the minimum), organisational values, personal conscience and social norms. An ethical dilemma arises when two legitimate values conflict: profit versus disclosure, loyalty versus transparency.' },
          { term: 'Corporate social responsibility (CSR)', def: 'Responsibility beyond profit and law toward employees, consumers, community and environment — classically layered as economic, legal, ethical and discretionary (Carroll). In India it has a statutory form: Section 135 of the Companies Act 2013 requires qualifying companies to spend two percent of average net profit on scheduled activities.' },
          { term: 'HR cycle', def: 'Recruitment (internal promotion and transfers versus external advertising, campus and agencies), selection (tests, interviews, reference checks), placement and orientation, training (on-the-job: apprenticeship, internship, job rotation; off-the-job: classroom, vestibule, simulations) and appraisal (traditional top-down ratings versus modern 360-degree feedback), feeding compensation and promotion.' },
        ],
      },
      {
        kind: 'para',
        text: 'The communication process is worth rehearsing slowly because every barrier question hangs on it. A sender has an idea, encodes it into words or symbols, transmits the message through a channel — a letter, a meeting, a dashboard, the grapevine — the receiver decodes, and feedback travels back to close the loop. Meaning lives in people, not in the message: the same "ASAP" decodes as urgency to one reader and as routine to another. Formal channels run vertical (upward and downward), horizontal (between peers) and diagonal (across functions); informal channels — the grapevine — move faster than any memo and carry morale as much as information, which is why good managers feed rather than fight them. Digital workplace tools change the speed, not the anatomy: a mis-threaded email is still a message that skipped feedback.',
      },
      {
        kind: 'para',
        text: 'Barriers explain why loops fail, and the three-family taxonomy organises the fixes. Semantic barriers are problems of language itself — jargon that excludes, badly chosen words, translated ambiguity — cured by plain language, defined terms and confirming feedback. Psychological barriers live inside the participants: premature evaluation (judging before decoding), inattention, distrust between levels, and the mechanical losses of transmission and retention — cured by active listening, empathy and a culture where bad news can travel upward. Organisational barriers are structural: rigid rules about who may tell whom, long chains that shrink the signal, status distance that filters bad news, and overload when everyone copies everyone — cured by deliberate channel design, flatter access, and information discipline. Examiners present a vignette; your first task is always to place it in one family before reaching for the remedy.',
      },
      {
        kind: 'para',
        text: 'Governance exists because of a structural fact: in the modern company, owners and managers are different people. Shareholders elect a board of directors to hire, supervise and (when needed) dismiss the executives who run the firm day to day. The board\'s toolkit — audit committees that own financial integrity, independent directors with no management ties, remuneration and nomination committees, external auditors, and disclosure regimes — is designed to make managers accountable between annual meetings. India\'s institutional story runs from the CII code (1996-98) through the Kumar Mangalam Birla committee (1999-2000), which made audit committees and a minimum share of independent directors compulsory for listed companies, to SEBI\'s Listing Obligations and Disclosure Requirements regulations (2015) and the Companies Act 2013, which codified directors\' duties. Governance failures — inflated accounts, related-party favours, auditors asleep — are the standard current-affairs hooks; the mechanism vocabulary above is how you analyse them.',
      },
      {
        kind: 'para',
        text: 'Ethics and social responsibility are the normative layer over all of it. Business ethics names the principles — integrity, fairness, transparency, law-abidingness — and their sources: law sets the floor, organisational and professional codes shape judgement, personal conscience decides the hard cases. Carroll\'s four layers arrange responsibility: economic (be profitable), legal (obey the law), ethical (do what is right beyond the law) and discretionary/philanthropic (voluntary contribution). India converts the discretionary into the statutory: Section 135 of the Companies Act 2013 obliges companies above thresholds — net worth, turnover or profit — to spend two percent of average three-year net profit on CSR activities listed in Schedule VII: education, health, environment, rural development and more. Alongside sit the people systems: conflict (task conflict can sharpen decisions; relationship conflict corrodes teams; resolution runs through negotiation, mediation and clear procedures), stress (job demands versus control and support; managed by redesign, Employee Assistance Programmes and workload honesty), and the HR cycle that recruits, selects, trains and appraises the people who inherit all these systems — with 360-degree appraisal as the modern answer to one-boss bias.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Three Vignettes, Three Labels',
        steps: [
          'Vignette 1: a finance head\'s email of dense jargon is misread by new joins; two weeks of errors follow before anyone asks. Family: semantic — jargon and no feedback loop. Fix: plain-language templates plus read-back confirmation.',
          'Vignette 2: a listed company books sales that never happened; the auditor signs off; the audit committee never meets. Label: governance failure — the control layer (audit committee, independent directors, auditor scepticism) did not operate. Fix under LODR norms: independent audit committee with real meetings and whistleblower access.',
          'Vignette 3: a profitable manufacturer funds a district school and a skill centre and reports the spend. Label: CSR — in India, Section 135 / Schedule VII territory; classify the layer as ethical-to-philanthropic, note the statutory two-percent rule.',
          'Cross-check: same company, a manager suppressing a safety complaint to hit targets — that is an ethical dilemma (profit versus duty of care), not a governance mechanism failure; it is cured by codes, protection for whistleblowers and tone at the top.',
          'Lesson: place the vignette first (communication barrier, governance mechanism, ethical dilemma, CSR), then apply the family\'s remedy — labels before fixes.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Communication is complete only when…',
          options: ['the message is transmitted', 'the receiver decodes it', 'feedback confirms the intended meaning', 'the channel is formal'],
          answer: 2,
          explain: 'Transmission and decoding are necessary but not sufficient; feedback that confirms the decoded meaning matches the intended one is what completes the process.',
        },
        {
          q: 'An employee filters bad news because the boss dislikes it. Which barrier family?',
          options: ['Semantic', 'Psychological', 'Organisational', 'Mechanical'],
          answer: 1,
          explain: 'Fear, distrust and premature evaluation are psychological barriers; organisational barriers are structural (rules, status, chain length) and semantic ones are about language itself.',
        },
        {
          q: 'The core problem corporate governance exists to solve is…',
          options: ['the separation of ownership from control', 'the shortage of skilled managers', 'excessive government regulation', 'the high cost of capital'],
          answer: 0,
          explain: 'Shareholders own; professional managers control. Boards, committees, independent directors, auditors and disclosure align the two — that alignment problem is governance.',
        },
        {
          q: 'Under Section 135 of the Companies Act 2013, qualifying Indian companies must spend on CSR…',
          options: ['1% of average net profit', '2% of average net profit', '5% of annual turnover', 'a voluntary amount set by the board'],
          answer: 1,
          explain: 'The Act requires two percent of average net profit (three preceding years) on Schedule VII activities for companies above the net-worth, turnover or profit thresholds.',
        },
        {
          q: 'Appraisal that collects feedback from supervisors, peers, subordinates and customers is called…',
          options: ['traditional rating', '360-degree appraisal', 'vestibule training', 'management by objectives'],
          answer: 1,
          explain: '360-degree appraisal triangulates multiple rater perspectives, correcting the one-boss bias of traditional top-down ratings.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling communication complete at transmission — without confirming feedback it is only broadcasting. Misfiling barriers: jargon is semantic, fear is psychological, status distance is organisational — the remedies differ, so misfiling costs the fix marks too. Treating ethics and law as the same floor — legality is the minimum, ethics runs beyond it; a legal action can still be unethical. Reciting CSR as pure philanthropy — in India it is partly statutory (Section 135), which changes both the motive and the accounting. Confusing governance with management — boards direct and oversee, managers run; mixing them erases the accountability chain the whole apparatus exists to enforce. And reading the grapevine as enemy radio — it is a formal system\'s shadow that carries morale; feed it true information rather than banning it.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the management-functions lesson for where directing and staffing sit. Follow with the business-correspondence lesson to convert communication theory into writing formats, and the companies-act lesson in law for the statutory side of boards. Primary reading: OpenStax, Business Ethics (openstax.org, CC BY — stakeholder theory, corporate governance and the CSR layers); Business Communication for Success (Open Textbook Library / LibreTexts — communication process, channel choice, professional conventions); NCERT Business Studies Class XII, "Directing" (communication process and barriers) and "Staffing" (recruitment, training, appraisal); Companies Act 2013 Section 135 with Schedule VII and SEBI LODR 2015 for the governance mechanism list.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Process: sender → encode → channel → decode → receiver → feedback; noise at every stage; feedback completes it.',
        'Barriers in three families — semantic (language), psychological (fear, inattention, premature evaluation), organisational (rules, status, overload) — each with its own remedy.',
        'Governance: ownership separated from control; board + audit committee + independent directors + auditors + disclosure (India: Birla committee 1999-2000 → LODR 2015, Companies Act 2013).',
        'Ethics: law is the floor, not the ceiling; Carroll layers — economic, legal, ethical, discretionary.',
        'CSR in India: Section 135 — two percent of average net profit for qualifying companies, Schedule VII activities.',
        'People systems: conflict and stress management; HR cycle — recruit (internal/external), select, train (on/off the job), appraise (360-degree).',
      ] },
    ],
  },
  {
    id: 'eng-business-correspondence',
    title: 'Business Correspondence: Formal Letters, Memos, Email and the Précis',
    domain: 'Languages & World Literature',
    field: 'Professional Writing',
    branch: 'Correspondence & Précis',
    tier: 'core',
    concepts: [
      'Formal letter anatomy: block layout, salutation, close',
      'Register: formal, courteous, concrete',
      'Complaint, enquiry and application letters',
      'Memos, circulars and notices',
      'Email etiquette for institutional contexts',
      'The précis: one-third rule, own words, title',
    ],
    words: 1970,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Correspondence is writing that has to work without you in the room. A letter to a bank, a memo to a department, an email to a customer, a précis for a briefing file — each must carry facts, tone and a requested action to a reader who will skim it, act on it or file it. Examiners test this genre twice: as formats (layout, salutation, close, subject line) and as judgement (register, structure, escalation). This lesson covers the four instruments and the register that governs them all, with banking-desk examples throughout — the single most common institutional setting these papers use. The essay-writing and cohesion lessons own argument and flow; here the unit of work is the one-page document that must produce a response.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Correspondence marks are the most mechanical marks on any writing paper — and the most commonly thrown away. The layout of a formal letter, the "Yours faithfully versus Yours sincerely" rule, the one-subject memo discipline and the one-third précis ratio are all checkable in seconds, yet scripts lose marks every year on exactly these. The same conventions rule professional life: a complaint letter that states facts, evidence and remedy gets resolved; one that vents gets filed. Learn the formats once and both the exam and the actual correspondence desk pay you back.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Formal letter anatomy', def: 'Sender\'s address, date, receiver\'s name/address, subject line, salutation, body, complimentary close, signature block. The body runs purpose → particulars → action requested: what you want, the facts that justify it, and exactly what the reader should do, with dates and account or reference numbers concrete.' },
          { term: 'Faithfully vs sincerely', def: 'Address the reader by name ("Dear Ms Rao") and close "Yours sincerely"; address the office ("Dear Sir or Madam") and close "Yours faithfully". The close mirrors the salutation — the single most-tested convention in letter formats.' },
          { term: 'Register', def: 'The formality level of vocabulary and grammar. Formal register: no contractions, no slang or idioms, no emotive language, measured modals ("I would be grateful if you could…"), complete sentences, concrete nouns. Courtesy is strategic: firmness about the remedy, politeness about the person.' },
          { term: 'Memo and circular', def: 'Internal one-page instruments. A memo has a header block — To, From, Date, Subject — no salutation, one topic, and an explicit action line with a deadline. A circular broadcasts one announcement to many readers; a notice posts an event with time, place and authority. All three prize brevity and scannability.' },
          { term: 'Email etiquette', def: 'A subject line that names the topic, a greeting and sign-off even in short notes, one topic per email, paragraphs that survive a two-second skim, attachments named and mentioned in the text, cc reserved for people who need to know, reply-all restraint, and no typing in capitals — the written equivalent of shouting.' },
          { term: 'Précis', def: 'A faithful condensation of a passage to roughly one-third of its length, in the précis-writer\'s own words, keeping the argument and dropping examples, repetition and digression, written in the third person, with a title. The test is whether a reader of the précis alone would leave with the passage\'s claims and none of its padding.' },
        ],
      },
      {
        kind: 'para',
        text: 'The formal letter is the genre\'s backbone, and its layout is a convention you simply own. Top left: the sender\'s address (no name above your own address in the block style), then the date; below, the receiver\'s name, designation and address; then a subject line that names the business in a phrase — "Request for stop-payment on cheque no. 441207" — because the subject line is how the letter gets routed and retrieved. The salutation mirrors your knowledge of the reader: "Dear Sir or Madam" when unknown (closing "Yours faithfully"), "Dear Ms Rao" when named (closing "Yours sincerely"). The first paragraph states the purpose in one sentence; the middle paragraphs carry the particulars — dates, amounts, reference numbers, what happened, what you have already tried; the final paragraph states the action sought and a courteous deadline. Sign, then print your name below. Every part exists because someone downstream files, routes or acts on it.',
      },
      {
        kind: 'para',
        text: 'Three letter types cover most exam and desk situations. The enquiry letter asks: it frames the question precisely, states what you already know, and closes with the specific information requested and the response channel. The complaint letter escalates politely: facts first (date, time, place, transaction reference), then the problem\'s effect, then the remedy sought — refund, correction, replacement — then a deadline and the escalation path if it passes ("I shall refer the matter to the Banking Ombudsman under the RBI Integrated Ombudsman Scheme if unresolved within thirty days"). Never insult; the reader is rarely the person who caused the problem. The application letter sells: the position and its source in the first line, the fit in the second paragraph (two or three proof-points drawn from the advertisement\'s own language), availability, and a request for interview. All three share the register rules: formal, concrete, courteous — and all three end with an unmistakable ask.',
      },
      {
        kind: 'para',
        text: 'Internal instruments trade ceremony for speed. The memo strips to a header — To, From, Date, Subject — and a body that does one job: announce, explain, request. Its discipline is the one-topic rule and the action line ("Please send the Q2 figures to me by Thursday, 5 p.m."); anything that needs discussion is a meeting, not a memo. Circulars broadcast one announcement to many — an office holiday, a policy change — written once for simultaneous reading, with dates and authority named. Notices post events for a public board: heading, date, body with the five Ws, signature of the authority. Email then carries all of it at internet speed, which is precisely why its conventions matter more, not less: the subject line is the envelope, the greeting and sign-off are the clothes, the two-second-skim paragraph structure is the body language, and reply-all restraint is the office citizenship test. An email that says what its attachment is, asks exactly one question, and names its deadline replaces three phone calls.',
      },
      {
        kind: 'para',
        text: 'The précis is the odd instrument of the family — an act of reading as much as writing — and it has its own discipline. Read the passage thrice: once for sense, once to mark the argument\'s skeleton (thesis, moves, conclusion), once to choose your own words. Compress to about one-third — the ratio is tested — by deleting examples, illustrations, repetition, rhetorical questions and digressions, and by folding lists into categories. Keep the third person and your own words: lifted phrases read as failure to understand. Preserve proportion (the passage spends most words on its main claim; so should you) and add a title — a phrase that names the argument. The mark scheme in banking and administrative papers scores content (all main points, nothing invented), organisation (logical, linked), language (accurate, own words) and the one-third discipline; a précis that is merely a copy with words crossed out scores none of them.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Complaint Letter That Gets a Refund',
        steps: [
          'Collect the facts before writing: ATM ID, branch, date and time (14 October 2026, 11:42 a.m.), amount debited (2,000) without cash dispensed, transaction reference number from the slip or alert, account number.',
          'Lay out the letter: sender address, date, the Branch Manager\'s designation and branch address, subject line "Complaint regarding ATM debit without cash dispensation — A/c no. 0123…".',
          'Open with purpose: "I wish to report a failed ATM transaction in which my account was debited but no cash was dispensed."',
          'Paragraph of particulars: the machine, the time, the amount, the reference number, the fact that the card was returned and no alert credit followed — the evidence trail.',
          'State the remedy and the clock: "I request reversal of the erroneous debit within the prescribed timeline; failing which I shall escalate to the Banking Ombudsman under the Reserve Bank\'s Integrated Ombudsman Scheme, 2021." Close "Yours faithfully" — the salutation was "Dear Sir or Madam".',
          'Précis check on any draft: facts kept, adjectives deleted, third person if summarising the episode for a file, title "Failed ATM Transaction and Refund Request" — one-third length.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Your letter begins "Dear Sir or Madam". The correct complimentary close is…',
          options: ['Yours sincerely', 'Yours faithfully', 'Best regards', 'Thanking you'],
          answer: 1,
          explain: 'Unnamed recipient ("Dear Sir or Madam") pairs with "Yours faithfully"; a named recipient ("Dear Ms Rao") pairs with "Yours sincerely".',
        },
        {
          q: 'What does the subject line of a business letter most directly enable?',
          options: ['polite tone', 'routing and retrieval of the letter', 'proof of posting', 'the writer\'s credibility'],
          answer: 1,
          explain: 'The subject line names the business in a phrase so that the letter can be routed to the right desk and retrieved later — which is why it should carry reference numbers.',
        },
        {
          q: 'The correct one-topic discipline for a memo requires all of the following EXCEPT…',
          options: ['a To/From/Date/Subject header', 'a salutation like "Dear Sir"', 'an explicit action line with a deadline', 'a single subject'],
          answer: 1,
          explain: 'Memos drop the salutation — the header block replaces it; they keep one topic and end in a clear action line.',
        },
        {
          q: 'A précis of a 300-word passage should be roughly…',
          options: ['150 words with a title', '100 words, in the writer\'s own words, with a title', '75 words, in the original\'s best phrases', 'the full argument re-copied with examples removed'],
          answer: 1,
          explain: 'The tested ratio is one-third — 100 words for 300 — in the writer\'s own words and in the third person, with a title, keeping claims and dropping examples and digressions.',
        },
        {
          q: 'In a complaint letter about a failed ATM transaction, the escalation line citing the RBI Integrated Ombudsman Scheme serves to…',
          options: ['insult the branch into acting', 'state the consequence of missing the remedy deadline', 'prove the writer\'s legal training', 'replace the need for evidence'],
          answer: 1,
          explain: 'Escalation is stated as a consequence — polite, factual, dated — not as a threat; the evidence trail (reference numbers, dates) still does the real work.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Pairing "Dear Sir or Madam" with "Yours sincerely" — the close mirrors the salutation, and this is the most-tested convention on the paper. Writing complaints in anger: emotive language converts a fixable error into a defensive reader; facts, references and a deadline do the work. Letting memos grow salutations and second topics — the header replaces the salutation and the one-topic rule is the point. Treating email as casual by default — institutional email keeps greeting, sign-off, subject discipline and reply-all restraint. Breaking the précis ratio (a "summary" of 250 words from 300), lifting the original\'s phrases, inventing claims the passage never made, or forgetting the title — each is a named mark-scheme deduction. And burying the ask: every letter, memo and email must end with an unmistakable action for a named reader by a stated time.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — though the punctuation-mechanics lesson polishes the surface of everything written here. Follow with the argument-essay lesson for the long-form descriptive paper and the cohesion lesson for paragraph-level flow. Primary reading: Business Communication for Success (Open Textbook Library / LibreTexts — the communication process, channel choice, and professional letter/memo conventions read directly); RBI Integrated Ombudsman Scheme 2021 complaint-route pages (cms.rbi.org.in) for the banking escalation path used in the worked example; NCERT/CBSE functional-writing conventions for the block-layout letter and précis mark schemes used in Indian descriptive papers.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Letter anatomy: sender address, date, receiver, subject line (routes the letter), salutation, purpose → particulars → action, close, signature.',
        'Close mirrors salutation: named reader → "Yours sincerely"; office → "Yours faithfully".',
        'Register: no contractions, no slang, no emotives; concrete nouns and reference numbers; firm on remedy, courteous on people.',
        'Three letters: enquiry (asks precisely), complaint (facts → effect → remedy → deadline → escalation), application (position-source → fit → availability).',
        'Internal instruments: memo (To/From/Date/Subject, one topic, action line), circular (one announcement to many), notice (five Ws, authority).',
        'Email: subject names the topic, greeting/sign-off always, one question, attachment named, reply-all restraint. Précis: one-third, own words, third person, titled, proportion kept.',
      ] },
    ],
  },
  {
    id: 'math-measurement-areas-volumes',
    title: 'Mensuration and Calculation: Perimeter, Area, Surface Area and Volume',
    domain: 'Mathematics',
    field: 'Geometry & Measurement',
    branch: 'Mensuration',
    tier: 'core',
    concepts: [
      'Perimeter and area of rectilinear figures',
      'Circles: circumference, area, arcs and sectors',
      'Prisms, cylinders, pyramids, cones and spheres',
      'Surface area versus volume: units give the game away',
      'Compound shapes: the add-and-subtract strategy',
      'Unit conversion: one square metre is 10,000 square centimetres',
    ],
    words: 2012,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Mensuration is the arithmetic of measuring the world: how much fence a field needs (perimeter), how much seed (area), how much water a tank holds (volume), how much paint its walls take (surface area). Exam questions test three skills at once: choosing the right formula for the shape, combining formulas for compound figures, and keeping units honest through the calculation. This lesson builds all three on the same principle — every formula is a picture you can re-derive — and works through the shapes that dominate question banks: rectilinear figures, circles with their arcs and sectors, and the standard solids from prisms to spheres. The masters volumes own the axioms of geometry; here the subject is measurement arithmetic done fast and done right.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Mensuration marks are lost in three predictable ways, and each is fixable with a habit rather than more memory. First, wrong formula for the shape — usually cone versus pyramid, or slant height versus height. Second, compound-shape panic — cured by the add-and-subtract strategy, where every composite figure is simple shapes joined or with holes punched in. Third, unit slips — converting centimetres to metres by dividing by 100 even when the quantity is an area or a volume, where the conversion is 10,000 or 1,000,000. The unit of the answer (cm, cm², cm³) tells you which quantity you are computing; examiners deliberately plant the trap, and the habit of checking units against the question turns the trap into a free mark.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Rectilinear figures', def: 'Perimeter is the walk around the boundary; area is the coverage. Rectangle: P = 2(l + w), A = lw. Triangle: A = ½ × base × height (any side as base, height perpendicular to it); Heron\'s formula A = √(s(s−a)(s−b)(s−c)) with s the semi-perimeter, when only the three sides are known. Parallelogram A = bh; trapezium A = ½(a + b)h with a and b the parallel sides.' },
          { term: 'Circle quantities', def: 'Circumference C = 2πr, area A = πr². An arc is a fraction of the circumference and a sector a fraction of the area, both proportional to the central angle θ: arc = (θ/360) × 2πr, sector area = (θ/360) × πr². The chord\'s perpendicular bisector passes through the centre — the fact behind most "find the radius from a chord" questions.' },
          { term: 'Prisms and cylinders', def: 'A prism has the same cross-section all the way through: volume V = (area of cross-section) × length; surface area = 2 × (cross-section area) + (perimeter of cross-section) × length. A cylinder is the circular prism: V = πr²h, total surface area = 2πr² + 2πrh (two discs plus the rolled rectangle).' },
          { term: 'Pyramids, cones and spheres', def: 'Pyramid: V = ⅓ × (base area) × height. Cone: V = ⅓πr²h, curved surface = πrl where l is the slant height with l² = r² + h², total surface = πrl + πr². Sphere: V = (4/3)πr³, surface area = 4πr². Hemisphere: half of each, plus a disc πr² if closed.' },
          { term: 'Compound figures', def: 'Break composites into named shapes and add; for shapes with holes or cut-outs, subtract. For composite solids (a cylinder topped by a hemisphere), volume adds, but surface area needs care — the surfaces where solids join disappear from the outside.' },
          { term: 'Unit conversion', def: 'Lengths scale by 100 per metre-to-centimetre step, areas by 100² = 10,000, volumes by 100³ = 1,000,000. One cubic metre is 1,000 litres; one litre is 1,000 cm³. The final unit declared in the question — cm² versus cm³ — tells you whether you owe an area or a volume.' },
        ],
      },
      {
        kind: 'para',
        text: 'Rectilinear figures reward one idea above all: the perpendicular height. A triangle\'s area is half the base times the height — not "a side times a side" — and the height is the perpendicular drop onto that base, outside the triangle for obtuse shapes just as legally as inside. Heron\'s formula handles the case with three sides given: compute the semi-perimeter s = (a + b + c)/2 and take the square root of s(s−a)(s−b)(s−c) — clunky but bulletproof, and worth checking against the ½ × base × height answer when both are available. Parallelograms shear rectangles (base times perpendicular height), and trapezia average the parallel sides before multiplying by the height: ½(a + b)h. A useful sanity reflex on any area answer: rough the figure against a grid of its own side lengths, and reject answers that could not hold, say, four copies of an obvious inscribed rectangle.',
      },
      {
        kind: 'para',
        text: 'Circles introduce proportionality to the toolkit. Circumference and area both scale with the radius — linearly for circumference, quadratically for area, which is why doubling the radius quadruples the area (a favourite ratio question: two circles with radii in ratio 2:3 have areas in ratio 4:9). Arcs and sectors are proportional slices of the circle, cut by the central angle: a 60-degree arc is one-sixth of the circumference, and its sector is one-sixth of the area — the same fraction, because the fraction depends only on the angle. Reverse questions are equally common: given an arc length and radius, recover the angle by dividing; given a sector\'s area, walk back to the angle. Chord problems lean on one fact: the perpendicular from the centre to a chord bisects it, which converts "find the radius" into a right-triangle exercise — half the chord and the perpendicular distance are two legs, the radius the hypotenuse.',
      },
      {
        kind: 'para',
        text: 'Solids are the prism idea plus exceptions. The prism formula — volume is cross-section area times length — explains cylinders (circular cross-section: πr²h) and every extruded shape; its surface area is the two end faces plus the "label" around the middle (perimeter of the cross-section times the length: for the cylinder, the rolled rectangle 2πrh). Pyramids and cones carry the one-third: each is exactly a third of the prism or cylinder standing on the same base with the same height — a fact you can verify by pouring sand, and a formula you should never confuse with the prism\'s. The cone\'s curved surface unrolls into a sector of radius equal to the slant height l, giving πrl; keep l and h strictly separate (l² = r² + h²), because question banks bait the swap. The sphere closes the set with the only formulas worth a dedicated slot: V = (4/3)πr³ and S = 4πr² — surface area exactly four great circles, a fact that doubles as a check. For composites, add volumes freely, but subtract the hidden faces from surface area: a hemisphere sitting on a cylinder hides both the cylinder\'s top disc and the hemisphere\'s flat one.',
      },
      {
        kind: 'para',
        text: 'Units are the last mile, and they are where careful students still slip. Conversion factors chain by the power of the quantity: 1 metre = 100 centimetres, so 1 m² = 10⁴ cm² and 1 m³ = 10⁶ cm³ — a square metre is not a hundred square centimetres, and a tank "2 m by 1 m by 50 cm" must be converted to common units before multiplying. Capacity rides on volume: 1 m³ = 1,000 litres and 1 litre = 1,000 cm³, so a 20 cm cube holds 8,000 cm³ = 8 litres. Rates link the systems: mass = volume × density (a water tank\'s weight from its litre count), cost = area × rate per square metre (painting, tiling, turfing), and flow = volume ÷ time (filling a pool). The professional habit is dimensional bookkeeping — write the unit beside every factor as you substitute, cancel what cancels, and let the surviving unit tell you whether the question is answered or a conversion is still owed.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Composite Water Tank, From Volume to Paint',
        steps: [
          'Shape: a closed cylindrical tank of radius 1 m and height 2 m, topped by a hemispherical lid of the same radius. Question: capacity in litres, and metal area for a one-coat paint estimate.',
          'Volume: cylinder πr²h = π × 1² × 2 = 2π ≈ 6.283 m³; hemisphere (2/3)πr³ = (2/3)π ≈ 2.094 m³; total ≈ 8.377 m³.',
          'Convert to capacity: 8.377 m³ × 1,000 = 8,377 litres — the litres conversion is part of the answer, not decoration.',
          'Surface area (outside only): cylinder\'s curved wall 2πrh = 4π; hemisphere\'s curve 2πr² = 2π; the base disc πr² = π. The cylinder\'s top disc and the hemisphere\'s flat face are hidden — subtracted by construction.',
          'Total surface ≈ 4π + 2π + π = 7π ≈ 21.99 m²; paint for one coat at 10 m² per litre ≈ 2.2 litres.',
          'Unit audit: volume answer in m³ → litres (×1,000); area answer in m² (no conversion owed); both declared before boxing — the habit that survives examiner traps.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Two circles have radii in the ratio 2 : 3. The ratio of their areas is…',
          options: ['2 : 3', '4 : 9', '8 : 27', '3 : 2'],
          answer: 1,
          explain: 'Area scales with the square of the radius, so the ratio 2 : 3 squares to 4 : 9 — the classic proportional-slice question.',
        },
        {
          q: 'A sector of a circle of radius 6 cm has central angle 60°. Its area is…',
          options: ['π cm²', '2π cm²', '6π cm²', '12π cm²'],
          answer: 2,
          explain: 'The sector is 60/360 = one-sixth of the circle; full area is π × 6² = 36π, so the sector is 6π cm².',
        },
        {
          q: 'A cone has radius 3 cm and height 4 cm. Its slant height is…',
          options: ['5 cm', '7 cm', '4 cm', '√7 cm'],
          answer: 0,
          explain: 'l² = r² + h² = 9 + 16 = 25, so l = 5 cm — the 3-4-5 right triangle hiding inside every such cone question.',
        },
        {
          q: 'A 20 cm cube holds how much water?',
          options: ['8 litres', '80 litres', '800 litres', '8,000 litres'],
          answer: 0,
          explain: 'Volume 20³ = 8,000 cm³; one litre is 1,000 cm³, so the cube holds 8 litres — capacity conversion as a named step.',
        },
        {
          q: 'A hemisphere sits exactly on a cylinder\'s top. The composite\'s surface area excludes…',
          options: ['the cylinder\'s curved wall', 'the cylinder\'s base', 'the hemisphere\'s curved top', 'the cylinder\'s top disc and the hemisphere\'s flat face'],
          answer: 3,
          explain: 'Joined surfaces disappear from the outside: the two circular faces in contact are hidden, while the curved wall, base and dome all remain.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Using the vertical height where the slant height is owed — the cone\'s curved surface needs l with l² = r² + h², never h. Halving the wrong quantity in a trapezium — ½(a + b)h averages the parallel sides, it does not halve the height. Treating 1 m² as 100 cm² — the conversion squares: 10,000; and 1 m³ is 1,000,000 cm³. Doubling a radius and expecting the area to double — areas scale with r². Adding surface areas across a joint without subtracting the hidden faces. Dropping the one-third from pyramids and cones, the most mechanical formula loss in the topic. And answering in the unit the question never asked for — a capacity answer in cubic metres, a paint answer in square centimetres; declare the unit, convert deliberately, then box.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: confident arithmetic with squares and roots. Follow with the percentage-ratio mental-math lesson for the rate questions (cost per m², fill rates) and the data-chart reading lesson for measurement questions wearing table clothes. Primary reading: OpenStax, Contemporary Mathematics and Prealgebra 2e geometry and measurement chapters (openstax.org, CC BY — perimeter, area, surface area, volume and unit-conversion sections); the masters volume\'s combined "Algebra, Geometry, Mensuration & Trigonometry Basics" section for the underlying axioms this lesson applies.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Rectilinear: rectangle 2(l+w)/lw; triangle ½bh or Heron; trapezium ½(a+b)h — perpendicular height everywhere.',
        'Circle: C = 2πr, A = πr²; arc and sector are angle-fractions (θ/360) of each; the perpendicular from centre to chord bisects it.',
        'Prism/cylinder: V = cross-section × length; SA = 2 ends + perimeter × length (cylinder: 2πr² + 2πrh).',
        'Pyramid/cone: one-third of the matching prism/cylinder (cone V = ⅓πr²h, curved SA = πrl, l² = r² + h²). Sphere: (4/3)πr³ and 4πr².',
        'Composites: volumes add; surface areas add minus hidden faces.',
        'Units: ×100 per length step, ×10⁴ per area step, ×10⁶ per volume step; 1 m³ = 1,000 litres = 10⁶ cm³; declare the unit before boxing.',
      ] },
    ],
  },
]
