/**
 * Knowledge Universe — Macroeconomics — Chapter 03: Fiscal Policy
 * 1 lesson · ~1,327 words
 * field: Macroeconomics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Fiscal Policy]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 econ-fiscal-policy — Fiscal Policy: How Governments Spend and Tax Their Way Through Crises
 */
import type { KnowledgeTopic } from '../../types'

export const macroeconomicsCh03: KnowledgeTopic[] = [
  {
    id: 'econ-fiscal-policy',
    title: 'Fiscal Policy: How Governments Spend and Tax Their Way Through Crises',
    domain: 'Business & Economics',
    field: 'Macroeconomics',
    branch: 'Fiscal Policy',
    tier: 'intermediate',
    concepts: [
      'Two levers: spending and taxation',
      'Automatic stabilizers and discretionary stimulus',
      'The multiplier and what sets its size',
      'Crowding out: the stimulus that displaces',
      'Austerity and the stimulus debate',
      'Debt dynamics: the race between r and g',
    ],
    words: 1327,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'When the pandemic froze the world economy in 2020, central banks cut rates — and governments sent cheques, topped up wages and guaranteed loans at a scale unseen since the Second World War. That is fiscal policy: the government using its own budget, spending and taxes, to stabilise output and employment. It is the older and blunter of the two levers, and the more political, because every billion spent or taxed has a named constituency. This lesson covers the machinery, the multipliers and the debt arithmetic beneath the headlines.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Whether stimulus is worth it, whether austerity works, and how much debt is too much decided the depth of the 1930s Depression, the length of the eurozone crisis and the speed of the pandemic recovery. The multiplier is the number underneath the argument.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Fiscal policy runs through the government budget: spend more or less, tax more or less. Its partner lever — interest rates and the central bank — is covered in the monetary lesson, and the two interact constantly: stimulus is strongest when rates are stuck at zero and weakest when the central bank leans against it. Spending changes tend to bite faster than tax changes, and transfers to liquidity-constrained households — the unemployed, the poor — get spent rather than saved, dollar for dollar.',
      },
      {
        kind: 'para',
        text: 'Much of fiscal policy happens automatically, with no vote taken. In a downturn, tax receipts fall with incomes and unemployment benefits rise: the deficit widens on its own, cushioning perhaps a third of a typical income shock. Discretionary policy is different — legislated packages such as the roughly 800-billion-dollar US stimulus of 2009 or the multi-trillion pandemic programmes of 2020-21. Stabilizers are fast and self-reversing; discretionary packages are slow to legislate, hard to time and politically sticky in both directions.',
      },
      {
        kind: 'para',
        text: 'The multiplier asks how much total output a dollar of stimulus buys. The simple Keynesian answer is one over one minus the marginal propensity to consume: with an MPC of 0.8, five dollars — but that model omits taxes, imports and price responses, which leak spending out of each round. Real-world estimates cluster nearer 0.5 to 1.5: larger in deep slumps with idle capacity and low rates, smaller near full employment. The same package can be worth 1.5 dollars of output in a recession and almost nothing in a boom.',
      },
      {
        kind: 'para',
        text: 'In an economy already at capacity, stimulus mostly reshuffles who buys: government borrowing pushes up interest rates, private investment and net exports retreat, and the net gain shrinks — the crowding-out critique. At the zero lower bound with idle resources the mechanism largely vanishes, which is why multipliers are state-dependent. A subtler objection, Ricardian equivalence, argues that households save stimulus cheques in anticipation of future taxes; empirically the offset is partial at best — but real enough to matter at the margin.',
      },
      {
        kind: 'para',
        text: 'The 2010s turned the question around: could cutting deficits speed recovery by restoring confidence? The eurozone tried, and the results reshaped the field — the IMF conceded in 2012 that multipliers in a slump had been closer to 1.5 than the assumed 0.5, so austerity shrank GDP faster than it shrank deficits. Greece lost about a quarter of its output while its debt ratio rose. Timing is the lesson: consolidation in a boom, stimulus in a slump — and political systems rarely deliver the pairing.',
      },
      {
        kind: 'para',
        text: 'Debt sustainability is an arithmetic race. The debt-to-GDP ratio drifts with the primary balance and with the gap between the average interest rate on debt (r) and the growth rate (g). With debt at 100 per cent of GDP and r one point above g, holding the ratio flat needs about a 1 per cent primary surplus; with g above r, the ratio falls gently even at balance. The 2010s ran g above r and ratios eased; the 2022 rate rises flipped the sign, and the arithmetic tightened overnight.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a government debates a 300-billion-dollar stimulus in a slump where credible estimates put the multiplier at 1.5; GDP and debt both stand at 20 trillion. What happens to output and the debt ratio — and how would it differ in an overheated economy where the multiplier is near zero?',
        'Recall: the total output effect equals the stimulus times the multiplier; the debt ratio moves with the new borrowing and the change in GDP, and r minus g governs the drift thereafter.',
        'Apply: output rises by 300 × 1.5 = 450 billion, about 2.3 per cent. Debt becomes 20,300 against GDP of 20,450 — roughly 99.3 per cent, down from 100. In the overheated case, debt rises to 20,300 on unchanged GDP of 20,000 — about 101.5 per cent, up for nothing.',
        'State the result: a well-timed stimulus partly pays for itself in ratio terms — the denominator grows with the numerator — while the identical package at the wrong moment simply borrows from the future. Multiplier state, not headline cost, decides.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Pandemic rescue: wage subsidies, direct payments and business credit deployed discretionary fiscal power at record scale in 2020-21.',
        'Infrastructure programmes: long-horizon public investment judged on returns, not on stimulus timing.',
        'Eurozone crisis management: austerity packages and the multiplier estimates later revised against them.',
        'Fiscal rules: debt ceilings, balanced-budget amendments and stability pacts that bind politicians procedurally.',
        'State and local budgets: balanced-budget requirements that force procyclical spending cuts in recessions.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The household analogy — a country must tighten its belt like a family — fails for a government that taxes, borrows in its own currency and spans generations; r versus g does work a household never enjoys. Do not treat multipliers as constants (they are state-dependent), deficits as debt (one is a flow, one a stock), or austerity as prudence regardless of the cycle. And note the political economy: programmes announced as temporary have a way of outliving their output gaps.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'fiscal policy', def: 'Government use of spending and taxation to influence output and employment.' },
        { term: 'automatic stabilizer', def: 'Budget items that cushion the cycle without legislation, such as falling taxes and rising benefits.' },
        { term: 'multiplier', def: 'The total change in output per unit of fiscal impulse; larger with slack, smaller at capacity.' },
        { term: 'crowding out', def: 'Government borrowing displacing private spending through higher interest rates.' },
        { term: 'Ricardian equivalence', def: 'The hypothesis that households save stimulus in anticipation of future taxes.' },
        { term: 'austerity', def: 'Fiscal consolidation — spending cuts or tax rises — aimed at reducing deficits.' },
        { term: 'r minus g', def: 'The gap between the interest rate on debt and the growth rate, which sets debt-ratio drift.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'With a marginal propensity to consume of 0.8 and no leakages, the simple multiplier is…',
          options: ['0.8', '1.8', '5', '8'],
          answer: 2,
          explain: 'One over one minus 0.8 equals 5 — the textbook ceiling before taxes, imports and prices leak spending away.',
        },
        {
          q: 'Which of these is an automatic stabilizer?',
          options: ['A legislated stimulus cheque', 'Unemployment benefits rising as layoffs increase', 'A central-bank rate cut', 'A new infrastructure bill'],
          answer: 1,
          explain: 'No vote is needed — the cyclical movement of benefits (and tax receipts) happens by formula.',
        },
        {
          q: 'Crowding out is weakest when…',
          options: ['the economy is at full capacity', 'rates are at the zero lower bound with idle resources', 'the multiplier is below one', 'debt exceeds 150 per cent of GDP'],
          answer: 1,
          explain: 'With idle resources and rates pinned low, government borrowing does not bid away private spending.',
        },
        {
          q: 'Debt is 100 per cent of GDP, r is 3 per cent and g is 4 per cent. With a balanced primary budget, the debt ratio will…',
          options: ['rise steadily', 'fall gently, by roughly a point a year', 'stay exactly flat', 'double within a decade'],
          answer: 1,
          explain: 'With g above r the denominator outgrows the interest bill — the favourable arithmetic of the 2010s.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the GDP lesson and comfort with percentages. Follow with public debt in depth, tax incidence from the elasticity lesson, and the political economy of budgeting. Exercise: find your country\'s debt ratio, its average interest cost and its nominal growth rate, and compute the r-minus-g drift yourself.',
      },
    ],
  },
]
