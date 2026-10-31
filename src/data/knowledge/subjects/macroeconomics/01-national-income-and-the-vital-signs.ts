/**
 * Knowledge Universe — Macroeconomics — Chapter 01: National Income & the Vital Signs
 * 2 lessons · ~3,972 words
 * field: Macroeconomics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [National Income & Output, The Vital Signs]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 econ-gdp-inflation-unemployment — GDP, Inflation and Unemployment: The Vital Signs of an Economy
 *   01.2 econ-macro-ad-as-indian-economy — Measuring the Economy: National Income, AD-AS and India's Reforms
 */
import type { KnowledgeTopic } from '../../types'

export const macroeconomicsCh01: KnowledgeTopic[] = [
  {
    id: 'econ-gdp-inflation-unemployment',
    title: 'GDP, Inflation and Unemployment: The Vital Signs of an Economy',
    domain: 'Business & Economics',
    field: 'Macroeconomics',
    branch: 'The Vital Signs',
    tier: 'core',
    concepts: [
      'GDP: what the headline number counts',
      'What GDP leaves out',
      'Inflation measurement and its blind spots',
      'Unemployment: the survey and its three types',
      'Okun\'s law: the cost of idle workers',
      'The Phillips curve: an intuition, not a dial',
    ],
    words: 1356,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'A physician reads pulse, temperature and blood pressure before diagnosing. Macroeconomics reads three vital signs: output growth, inflation and unemployment. Gross domestic product summarises what an economy produced; the consumer price index tracks what that output costs; the unemployment rate counts who is missing from it. Each number is a construction with known blind spots, and each is best read against the others — a fast-growing economy with rising inflation is overheating; a shrinking one with idle workers is failing. This lesson is the dashboard itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every budget speech, central-bank decision and election campaign is argued over these three numbers. Knowing what each actually measures — and what each quietly ignores — is the difference between following the economy and being misled by it.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Gross domestic product is the market value of all final goods and services produced within a country in a period — final, so that steel sold to a carmaker is not double-counted with the car. Accountants can measure it three equivalent ways; the spending identity is the famous one: consumption plus investment plus government purchases plus net exports. The United States produced roughly 27 trillion dollars of output in 2023, the world about 105 trillion. Real GDP strips out price changes, because growth you can only see in prices is not growth.',
      },
      {
        kind: 'para',
        text: 'Simon Kuznets, who built the US national accounts in the 1930s, warned immediately that national income is not welfare. GDP omits unpaid care and housework, volunteer effort and the informal economy; it measures throughput, not distribution — a rising average can hide a stagnant middle. It prices but does not value: cleanup spending after a disaster adds to GDP while leisure adds nothing, and environmental depletion counts as income until the bill arrives. Treat it as a speedometer, not a destination.',
      },
      {
        kind: 'para',
        text: 'The consumer price index tracks the cost of a fixed basket of goods and services — its mechanics, and the monetary policy built on them, live in the inflation and central banking lesson. Here the interest is the blind spots. The basket updates slowly, so it overweights what got expensive and underweights substitution toward what got cheap; quality improvement is hard to price — is this year\'s phone worth twice the one from five years ago? Core measures strip food and fuel to expose the trend. Your personal inflation rate is your basket, not the average one.',
      },
      {
        kind: 'para',
        text: 'The unemployment rate comes from household surveys, not benefit claims: to count as unemployed you must be without work and have actively searched in the past four weeks. Economists sort it into frictional (between jobs), structural (skills or location mismatch — the jobs exist, elsewhere) and cyclical (demand shortfall). The boundaries matter: discouraged searchers drop out of the labour force and vanish from the headline; part-timers who want full-time work are underemployed. A tidy 4 per cent headline can hide real slack.',
      },
      {
        kind: 'para',
        text: 'Output and unemployment move together, and the ratio is remarkably stable. Okun\'s law: each percentage point of cyclical unemployment corresponds to roughly a 2 per cent shortfall of GDP from potential — workers idle, machines idle, output simply not produced. When US unemployment climbed from about 4 to 10 per cent in 2009, output ran some 10 per cent below potential: on a 15-trillion-dollar economy, more than a trillion dollars of forgone production in a year. That is what a recession costs, before counting the scarring.',
      },
      {
        kind: 'para',
        text: 'The Phillips curve is the dashboard\'s warning light: when unemployment runs below its sustainable rate, wages and then prices tend to accelerate; when it runs high, inflation cools. It is an intuition, not a dial — the relationship shifts with expectations, as the 1970s proved by delivering high inflation and high unemployment at once, and it flattened in the 2010s. Central bankers treat it as one input among many, which is why the expectations machinery of the monetary-policy lesson matters more than the curve itself.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a country surveys 260 million adults: 152 million are employed, 8 million are unemployed and searching, and 6 million have given up looking. What is the headline unemployment rate, the broader rate, and the implied output gap if the natural rate is 4 per cent?',
        'Recall: the unemployment rate divides the unemployed by the labour force; discouraged workers sit outside the labour force; Okun\'s law maps each point of cyclical unemployment to about 2 per cent of potential output.',
        'Apply: the labour force is 152 plus 8, or 160 million, so the headline rate is 8/160 = 5 per cent. Adding the discouraged gives 14 out of 166, about 8.4 per cent. Cyclical unemployment is 5 − 4 = 1 point, implying output roughly 2 per cent below potential.',
        'State the result: the headline hides about 3.4 points of slack; on a 25-trillion-dollar economy the 2 per cent Okun gap is around half a trillion dollars of annual output not produced — the case for stimulative policy in one line of arithmetic.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Central-bank decisions: policy committees weigh core inflation against unemployment gaps at every meeting.',
        'Recession dating: business-cycle committees judge peaks and troughs from output, income and employment together.',
        'Election forecasts: incumbent fortunes track real income growth more reliably than any other single statistic.',
        'Wage bargaining: multi-year contracts are argued over expected inflation and the unemployment rate.',
        'Business planning: firms staff hiring and inventories to the same three numbers the commentators quote.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic slips: treating GDP as welfare (it is a production measure with famous omissions), reading a falling unemployment rate as good news (it falls when discouraged workers quit searching), and confusing the price level with its rate of change. A second family of errors treats the Phillips curve as a menu — choose your inflation by choosing unemployment — when it is a shifting tendency. And early GDP prints are heavily revised; the first estimate is a rumour with decimal points.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'gross domestic product', def: 'The market value of all final goods and services produced within a country in a period.' },
        { term: 'spending identity', def: 'GDP measured as consumption plus investment plus government purchases plus net exports.' },
        { term: 'consumer price index', def: 'The cost of a fixed basket of goods and services, tracked through time.' },
        { term: 'labour force', def: 'The employed plus the unemployed actively searching for work.' },
        { term: 'structural unemployment', def: 'Joblessness from a mismatch between workers\' skills or location and available jobs.' },
        { term: 'Okun\'s law', def: 'The empirical rule linking each point of cyclical unemployment to roughly a 2 per cent output gap.' },
        { term: 'Phillips curve', def: 'The tendency for inflation to rise when unemployment runs below its sustainable rate.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'GDP counts the value of the car but not the steel sold to the carmaker because…',
          options: ['steel is imported', 'only final goods are counted, to avoid double-counting', 'steel is a service', 'cars are always counted twice'],
          answer: 1,
          explain: 'Counting intermediate sales would add the steel into GDP twice — once as steel, once inside the car.',
        },
        {
          q: 'A discouraged worker…',
          options: ['is counted as employed', 'is not in the labour force, so the headline rate understates slack', 'raises the unemployment rate', 'works part-time involuntarily'],
          answer: 1,
          explain: 'Without recent active search they leave the labour force entirely — unemployment can fall purely because people gave up.',
        },
        {
          q: 'Unemployment is 3 points above its natural rate. Okun\'s law suggests output is roughly…',
          options: ['3 per cent below potential', '6 per cent below potential', '1.5 per cent above potential', 'unaffected'],
          answer: 1,
          explain: 'The rule of thumb prices each point of cyclical unemployment at about 2 per cent of output.',
        },
        {
          q: 'The Phillips curve is best described as…',
          options: ['a strict policy menu trading inflation for unemployment', 'a tendency for inflation to accelerate when unemployment is unsustainably low, shifting with expectations', 'a law linking GDP to prices exactly', 'a measure of productivity'],
          answer: 1,
          explain: 'The 1970s broke the simple menu reading; the relationship exists but moves as expectations move.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: percentages and the supply-and-demand lesson. Follow with fiscal policy — what governments do about a negative output gap — and the monetary-policy lesson for the inflation side of the dashboard. Exercise: find your country\'s latest GDP, inflation and unemployment prints and write one sentence on what, together, they say.',
      },
    ],
  },
  {
    id: 'econ-macro-ad-as-indian-economy',
    title: 'Measuring the Economy: National Income, AD-AS and India\'s Reforms',
    domain: 'Business & Economics',
    field: 'Macroeconomics',
    branch: 'National Income & Output',
    tier: 'intermediate',
    concepts: [
      'GDP, GNP and NNP: the income ladder',
      'Factor cost, basic price and market price',
      'Three methods of measurement',
      'Real versus nominal and the deflator',
      'AD-AS equilibrium and shifts',
      'The Keynesian multiplier',
      'Output gaps and unemployment',
      'India 1951-1991: plans, licence and crisis',
      '1991 reforms and current challenges',
    ],
    words: 2616,
    readMins: 13,
    addedOn: '2026-10-20',
    blocks: [
      { kind: 'para', text: 'Every exam in macroeconomics begins with the same two questions: how big is the economy, and what happens when demand meets that size? The GDP vital signs lesson introduced the headline numbers; this one goes a level deeper — the full national income accounting ladder from GDP to national income, the three measurement methods, the real-nominal distinction, and the aggregate demand-aggregate supply model that turns the accounts into a theory of booms and slumps. It then applies the whole toolkit to the exam favourite: India\'s journey from planning (1951) through the 1991 balance-of-payments crisis to liberalisation and the challenges the economy faces now, following NCERT\'s Introductory Macroeconomics and Indian Economic Development.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'National income accounting and the AD-AS model are the opening chapters of every Class 12 economics paper (CBSE, CUET, CA Foundation), while the 1951-1991 policy regime and the 1991 reforms anchor UPSC and B.Com syllabi. Division of labour with the rest of this domain: the GDP-inflation-unemployment lesson owns the vital-signs dashboard and its limitations, the fiscal-policy lesson owns the spending-and-taxing response to output gaps, the monetary-policy lesson owns interest rates, and the microeconomics lesson owns single-market supply and demand — which is a different animal from the AD-AS diagram built here.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'The income ladder starts with gross domestic product — the market value of all final goods and services produced within a country\'s borders in a year, whoever owns the factors. Add net factor income from abroad (income earned by residents abroad minus income earned by foreigners at home, dominated in India\'s case by workers\' remittances) and you get gross national product, now usually called gross national income. Subtract consumption of fixed capital — depreciation, the machines worn out in the year — and gross becomes net: net national product. NNP at factor cost, the sum of all factor incomes (wages, rent, interest and profit) earned by normal residents, is what Indian statistics officially calls national income; dividing by population gives per capita income. India\'s GDP in the mid-2020s runs to roughly 3.5-4 trillion US dollars, fifth largest in the world, while per capita income of roughly 2,500-2,800 dollars keeps it firmly middle-income.' },
      { kind: 'para', text: 'One more distinction earns marks every year: factor cost versus market price. Market price equals factor cost (what the factors actually earn) plus net indirect taxes (indirect taxes minus subsidies). Between them sits the basic price (factor cost plus production taxes minus production subsidies). A headline GDP series must say which it uses: India\'s 2011-12 base-year series moved the headline to market prices and made gross value added at basic prices the published sectoral measure — GDP equals GVA plus product taxes minus product subsidies. The 2015 revision that did this, and the accompanying switch of source data for the corporate sector, also produced the famous back-series controversy over whether earlier growth had been understated — a standing lesson in how measurement choices move history.' },
      { kind: 'para', text: 'Three methods measure the same thing, and their agreement is an accounting identity. The product or value-added method sums each sector\'s gross value added — primary (agriculture), secondary (manufacturing, construction), tertiary (services) — avoiding double counting by counting only value added at each stage. The income method sums the factor incomes plus mixed income (the self-employed farmer-cum-shopkeeper whose earnings cannot be split into wage and profit — large in India). The expenditure method sums final spending: private final consumption + gross domestic capital formation (investment) + government final consumption + net exports — C + I + G + (X − M). Because one agent\'s spending is another\'s income, output = income = expenditure identically; in practice the three estimates are reconciled statistically. India\'s National Statistics Office publishes annual and quarterly estimates, and the informal sector — the overwhelming majority of employment — forces it to use proxies (MCA-21 filings, labour-force indicators), which is why revisions are large and contested.' },
      { kind: 'para', text: 'Nominal versus real is the distinction that keeps growth honest. Nominal GDP uses current prices; real GDP uses constant base-year prices (currently 2011-12), so real growth measures volume, not inflation. The bridge between them is the GDP deflator — the price index that covers everything produced domestically, unlike the consumer price index (a fixed household basket) or the wholesale price index (traded goods at the producer level). If nominal GDP is 300 trillion rupees and real GDP is 200 trillion, the deflator is 150: prices have risen 50 per cent since the base year. A rise in nominal GDP of 11 per cent with 4 per cent inflation is roughly 7 per cent real growth — the arithmetic every exam tests.' },
      { kind: 'para', text: 'The AD-AS model turns the accounts into a theory. Aggregate demand is total planned spending at each price level: C + I + G + NX. It slopes down for three reasons: higher prices shrink real balances (the Pigou effect), raise interest rates and crowd out interest-sensitive spending (the Keynes effect), and make domestic goods dearer for foreigners (the net-export effect). Aggregate supply slopes up in the short run — wages and some prices are sticky, so higher prices raise output — but is vertical in the long run at potential output, the full-employment level an economy can sustain. Where the curves cross sits the equilibrium price level and real GDP; the gap between actual and potential output is the output gap, negative in recession (measured unemployment above its natural rate) and positive in boom. Demand shifts move the economy along the short-run AS curve; supply shocks (an oil spike, a monsoon failure) shift AS itself into stagflation — rising prices with falling output, the hardest case for policy. The classical view assumes flexible prices and self-correction; the Keynesian view assumes sticky prices and demand-driven slumps; the modern synthesis uses each where it works. And note what this diagram is not: it aggregates the whole economy and uses the general price level, not a single market\'s relative price — the micro supply-demand lesson\'s curves answer different questions.' },
      { kind: 'para', text: 'Keynes\'s multiplier is the model\'s dynamic heart: an initial injection of spending becomes income, part of which is spent again, and again. If the marginal propensity to consume is 0.8, each rupee of new income generates 80 paise of spending, so a 100-crore government project ultimately raises income by 500 crore — five times — before leakages into saving, taxes and imports exhaust the rounds. Two implications matter. The multiplier cuts both ways: collapsed confidence shrinks income by a multiple too, which is how a banking crisis becomes a depression. And its size depends on the MPC: poorer households spend more of a marginal rupee, so transfers targeted at them multiply faster than general tax cuts — though leakages (India\'s high import propensity especially) make real-world multipliers far smaller than the textbook arithmetic.' },
      { kind: 'para', text: 'Now the application. Independent India chose planning: the Planning Commission (1950) ran twelve five-year plans from 1951 to 2017. The First Plan (1951-56) prioritised agriculture and Harrod-Domar saving-investment arithmetic; the Second (1956-61), built on P.C. Mahalanobis\'s model, swung to heavy industry and import substitution. The Industrial Policy Resolution of 1956 and the Industries (Development and Regulation) Act of 1951 created the licence-permit raj — capacity expansion, entry and even product mix required state approval — reinforced by the MRTP Act (1969) against large houses and near-complete foreign-investment restrictions. The results were mixed: growth stuck near 3.5 per cent for decades (Raj Krishna\'s "Hindu rate of growth"), yet the Green Revolution — high-yielding wheat and rice varieties from the mid-1960s, led by M.S. Swaminathan with Norman Borlaug\'s material, in Punjab, Haryana and western Uttar Pradesh, supported by guaranteed procurement prices — ended dependence on imported food, and public investment built IITs, dams and a heavy-industry base.' },
      { kind: 'para', text: 'By 1991 the model was broke. The Gulf War spiked oil prices and squeezed remittances; exports could pay for barely a fortnight of imports, reserves fell to about 1.2 billion dollars, and India airlifted 67 tonnes of RBI gold to London as collateral. The Chandra Shekhar government took an IMF loan; the Narasimha Rao government\'s finance minister Manmohan Singh presented the 24 July 1991 budget that dismantled the system in one stroke: the rupee devalued about 19 per cent, industrial licensing abolished for most industries, peak import tariffs of well over 100 per cent begun on a path down, public-sector equity disinvestment started, and foreign investment welcomed. Liberalisation, privatisation and globalisation — LPG — became the new regime. Growth accelerated from the 3.5-per-cent groove toward 6-8 per cent, poverty rates fell steadily, foreign-exchange reserves grew from two weeks of cover to well over 600 billion dollars by the mid-2020s, and services — above all information technology — became the engine. The critiques are part of the syllabus too: employment growth lagged output (jobless growth), agriculture was left behind investment-wise, inequality widened, and the informal sector still employs the large majority of workers.' },
      { kind: 'para', text: 'The current-challenges file for exams, at survey depth: poverty — methodology battles from Lakdawala through Tendulkar (2009, drew the line at about 29 rupees a day in cities) to Rangarajan, with all series showing a large decline in extreme poverty since 1991 but sensitivity to the line chosen; employment — the Periodic Labour Force Survey shows low headline unemployment (single digits) but low female labour-force participation, high informality, and disguised unemployment crowding agriculture; infrastructure — the persistent gap the capex-heavy budgets of the 2020s target, from highways to logistics; and external balance — a current-account deficit financed increasingly by services exports and remittances, with the 2013 taper episode a reminder of vulnerability. None of these is solved by the multiplier alone — the fiscal and monetary lessons take up the policy instruments.' },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'GDP deflator', latex: '\\text{Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100', meaning: 'The price index covering everything domestically produced. Nominal GDP of 300 with real GDP of 200 gives a deflator of 150 — a 50 per cent rise in prices since the base year.' },
      { kind: 'formula', name: 'The Keynesian multiplier', latex: 'k = \\frac{1}{1 - \\text{MPC}} = \\frac{1}{\\text{MPS}}', meaning: 'The factor by which an initial spending injection raises equilibrium income. At MPC 0.8, k = 5: a 100-crore project ultimately adds 500 crore of income before saving leakages exhaust the rounds.' },
      { kind: 'example', title: 'Worked Example — Deflator and Multiplier in One Problem', steps: [
        'Identify what is asked: an economy reports nominal GDP of 291 trillion rupees for the year and real GDP of 210 trillion at 2011-12 prices; separately, the government spends 40,000 crore on infrastructure and households consume 75 per cent of each marginal rupee. Find inflation since the base year and the ultimate income change.',
        'Compute the deflator: 291/210 × 100 ≈ 138.6 — prices are about 38.6 per cent above the base year.',
        'Extract real growth if needed: if last year\'s real GDP was 199 trillion, real growth is 210/199 − 1 ≈ 5.5 per cent — the honest number, unlike the nominal 12-13 per cent that flatters the headline.',
        'Compute the multiplier: k = 1/(1 − 0.75) = 4, so the spending injection of 40,000 crore ultimately raises equilibrium income by 1,60,000 crore.',
        'State the caveats the markers reward: the simple multiplier ignores taxes and imports (India\'s marginal import propensity trims k well below the arithmetic), assumes spare capacity — at potential output the spending turns into prices instead of output — and requires the money to actually reach high-MPC households to bite.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading the budget: every "GDP will grow X per cent" claim needs the real-nominal and base-year questions asked before it means anything.',
        'Policy analysis: output-gap estimates are the quiet numbers behind stimulus decisions — the fiscal lesson takes the spending side from here.',
        'India exams: the plans-to-reforms narrative (1951 → 1966 → 1991 → today) is a stock long-answer in UPSC, CUET and B.Com papers.',
        'Business planning: AD components map to the demand forecasts firms actually build — consumption first, investment most volatile.',
        'Data literacy: knowing why GVA differs from GDP explains why one quarter\'s headlines can disagree with each other.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'Nominal growth is not growth — always ask for the base year. GDP is not welfare: it omits unpaid work and the informal economy\'s measured part, and says nothing about distribution (the vital-signs lesson owns that critique). GNP differs from GDP only by net factor income from abroad, which for India is now positive — remittances outweigh outflows — so do not automatically write GNP < GDP. The AD curve is not a big demand curve: it plots total spending against the general price level, and its slope runs through real balances, interest rates and trade, not substitution. The textbook multiplier is a ceiling, not an estimate — leakages, capacity and price response shrink it. And the 1991 reforms were a response to a crisis, not an ideological conversion: the sequencing (external first, internal gradually) explains both their speed and their unfinished agenda.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'net factor income from abroad', def: 'Residents\' income earned abroad minus foreigners\' income earned domestically; the bridge from GDP to GNP, dominated by remittances in India\'s case.' },
        { term: 'national income', def: 'NNP at factor cost — the sum of factor incomes earned by normal residents in a year.' },
        { term: 'gross value added', def: 'Sector output minus intermediate consumption at basic prices; GDP equals GVA plus product taxes minus subsidies.' },
        { term: 'GDP deflator', def: 'Nominal GDP over real GDP times 100 — the price index covering all domestic production.' },
        { term: 'potential output', def: 'The output an economy can sustain at full employment; actual output below it defines a recessionary gap.' },
        { term: 'aggregate demand', def: 'Total planned spending C + I + G + NX at each price level; slopes down through real-balance, interest-rate and trade effects.' },
        { term: 'multiplier', def: 'The multiple by which an initial spending change raises equilibrium income: 1/(1 − MPC).' },
        { term: 'licence raj', def: 'The 1951-1991 regime of industrial licensing, import substitution and state allocation of investment.' },
        { term: 'LPG reforms', def: 'The 1991 liberalisation-privatisation-globalisation package that followed the balance-of-payments crisis.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'NNP at factor cost (national income) is derived from GNP by…',
          options: ['adding indirect taxes', 'subtracting depreciation', 'subtracting net exports', 'adding remittances'],
          answer: 1,
          explain: 'Gross minus depreciation gives net; the factor-cost valuation then excludes net indirect taxes.',
        },
        {
          q: 'Nominal GDP is 252 trillion rupees and real GDP is 210 trillion. The GDP deflator is…',
          options: ['83', '120', '42', '252'],
          answer: 1,
          explain: '252/210 × 100 = 120 — prices are 20 per cent above the base year.',
        },
        {
          q: 'With MPC = 0.75, a 20,000-crore rise in government spending ultimately raises income by about…',
          options: ['20,000 crore', '40,000 crore', '80,000 crore', '1,60,000 crore'],
          answer: 2,
          explain: 'The multiplier is 1/(1 − 0.75) = 4, so income rises by 4 × 20,000 = 80,000 crore.',
        },
        {
          q: 'The immediate trigger of the 1991 reforms was…',
          options: ['a stock-market crash', 'a balance-of-payments crisis — reserves down to weeks of imports, with gold pledged abroad', 'a World Trade Organization ruling', 'the collapse of the Soviet Union only'],
          answer: 1,
          explain: 'The Gulf War oil spike and remittance slump drained reserves to roughly two weeks of imports; the gold airlift and IMF loan forced the July 1991 budget.',
        },
      ] },
      { kind: 'para', text: 'National income accounting tells you how to measure an economy; AD-AS tells you why it fluctuates; India\'s own seventy-year arc — planning, crisis, reform — shows the stakes of both. The measurement ladder and the multiplier are exam furniture; the deeper skill is knowing which number answers which question, and what each quietly leaves out. From here the domain\'s remaining lessons supply the levers: fiscal policy for the spending side of aggregate demand, monetary policy for the interest-rate side, and the vital-signs dashboard for reading the results.' },
      { kind: 'callout', title: 'Where to go next', tone: 'path', text: 'Prerequisites: the GDP vital-signs lesson for the dashboard and the micro supply-demand lesson for curve literacy. Follow with fiscal policy and monetary policy — the two levers that move aggregate demand — and the Indian polity lesson for the institutions (Planning Commission to NITI Aayog, Finance Commission) that steer them. NCERT\'s Introductory Macroeconomics and Indian Economic Development cover this ground exactly.' },
    ],
  },
]
