/**
 * Knowledge Universe — Development & Political Economy — Chapter 01: Poverty, Labour & Development
 * 1 lesson · ~1,928 words
 * field: Development Economics
 * legacy sources: x26-banking-management-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Poverty & Labour]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 econ-poverty-inequality-employment-india — Poverty, Inequality and Employment in India: Lines, Measures and the Jobs Ledger
 */
import type { KnowledgeTopic } from '../../types'

export const developmentEconomicsCh01: KnowledgeTopic[] = [
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
]
