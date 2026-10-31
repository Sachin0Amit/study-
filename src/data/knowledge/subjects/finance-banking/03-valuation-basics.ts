/**
 * Knowledge Universe — Finance & Banking — Chapter 03: Valuation Basics
 * 1 lesson · ~1,263 words
 * field: Finance & Investment
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Valuation Basics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bus-compound-interest-tvm — Compound Interest and the Time Value of Money
 */
import type { KnowledgeTopic } from '../../types'

export const financeBankingCh03: KnowledgeTopic[] = [
  {
    id: 'bus-compound-interest-tvm',
    title: 'Compound Interest and the Time Value of Money',
    domain: 'Business & Economics',
    field: 'Finance & Investment',
    branch: 'Valuation Basics',
    tier: 'core',
    concepts: [
      'The time value of money',
      'Compounding: earning on earnings',
      'Discounting, the reverse gear',
      'Compounding frequency and effective rates',
      'The rule of 72',
      'Inflation and real returns',
      'Debt as the dark mirror',
    ],
    words: 1263,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A sum today and a promise of the same sum next year are not the same thing — they differ by what the money could earn, by inflation, and by the risk of waiting. Finance calls this the time value of money, and its arithmetic — compounding forward and discounting back — is the foundation of valuation. Compound interest is the mechanism: interest earns interest, and over decades that snowball dwarfs the contributions that started it. The same mathematics, run in reverse, is what lenders charge and what every investment appraisal discounts.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Retirement outcomes are decided less by how much people save than by when they start; loan costs are decided less by the headline rate than by how often it compounds. Whether you are pricing a bond, a mortgage or a business project, the time value of money is the grammar it is written in.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A unit of currency today beats the same unit later for three reasons: it can be invested to earn a return, inflation erodes future purchasing power, and the future payment carries risk. The discount rate bundles all three. Every valuation method — bond pricing, net present value, annuity valuation — is bookkeeping on this one preference.',
      },
      {
        kind: 'para',
        text: 'Simple interest pays only on the original principal; compound interest pays on the accumulated balance, so growth becomes exponential. The exponent in the compound formula is the engine: doubling the number of years does far more than doubling the rate. A deposit of 10,000 at 8 per cent grows to roughly 46,600 in twenty years — but about 100,600 in thirty.',
      },
      {
        kind: 'para',
        text: 'Valuation runs the arithmetic backwards: a future cash flow is divided by one plus the discount rate, raised to the number of periods, to state its present value. This is why a payment far in the future can be nearly worthless at high discount rates — and why the choice of that rate is the most contested number in finance.',
      },
      {
        kind: 'para',
        text: 'A nominal rate of 12 per cent compounded monthly pays 1 per cent twelve times on a growing balance, for an effective annual rate of about 12.68 per cent. Comparisons must always be made on effective rates, because nominal rates quoted at different frequencies are not comparable. In the limit of continuous compounding, the growth factor becomes e raised to the nominal rate.',
      },
      {
        kind: 'para',
        text: 'Doubling time is approximately 72 divided by the annual percentage rate — a mnemonic surprisingly accurate across the 4-to-12 per cent range. Six per cent doubles in about twelve years; nine per cent in about eight. Its teaching value is that it makes exponential growth feel like arithmetic anyone can do at a dinner table.',
      },
      {
        kind: 'para',
        text: 'Nominal returns must be deflated before they mean anything: at 3 per cent inflation, a 5 per cent nominal return is roughly a 2 per cent real one — the Fisher approximation, real about equals nominal minus inflation. Compounding at the nominal rate while prices compound too is the quiet way savers lose ground they thought they were gaining.',
      },
      {
        kind: 'para',
        text: 'The same mathematics runs against the borrower: on revolving credit at 20 per cent or more, minimum payments that barely cover interest leave the balance compounding upward. An amortisation schedule is just the time value formula rearranged into equal payments, and understanding it is the difference between a manageable loan and a thirty-year drift.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      { kind: 'formula', name: 'Future value', latex: 'FV = PV\\,(1 + r)^n', meaning: 'A present value PV grows at rate r per period for n periods to FV; the exponent is where compounding lives.' },
      { kind: 'formula', name: 'Present value', latex: 'PV = \\frac{FV}{(1 + r)^n}', meaning: 'The same relation solved backwards: what a future payment FV is worth today at discount rate r.' },
      { kind: 'formula', name: 'Effective annual rate', latex: 'EAR = \\left(1 + \\tfrac{r}{m}\\right)^{m} - 1', meaning: 'A nominal annual rate r compounded m times a year yields this true annual rate; monthly compounding of 12 per cent gives about 12.68 per cent.' },
      { kind: 'formula', name: 'Rule of 72', latex: 't_{\\text{double}} \\approx \\frac{72}{r_{\\%}}', meaning: 'A quick mental estimate of doubling time in years: divide 72 by the annual percentage rate — 6 per cent doubles in about 12 years.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: two 25-year-olds each invest 10,000 at 8 per cent annually; one starts now for 30 years, the other waits a decade and invests for 20 — how different are the outcomes?',
        'Recall the governing formula: the future value equals the present value times one plus the rate, raised to the number of years.',
        'Apply it: the early starter’s 10,000 grows by a factor of about 10.06 (1.08 to the 30th power) to roughly 100,600; the late starter’s grows by a factor of about 4.66 (1.08 to the 20th) to roughly 46,600.',
        'State the result: ten years of waiting costs about 54,000 — more than the late starter’s entire starting sum — because the final decade’s growth compounds on the largest balance. Timing, not amount, is the dominant variable.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Retirement planning: contribution timing and tax-advantaged compounding dominate end balances.',
        'Bond pricing: a bond is the present value of its coupons plus principal, nothing more.',
        'Capital budgeting: net present value and internal rate of return rank a firm’s projects.',
        'Consumer credit: comparing effective rates across cards, loans and financing offers.',
        'Payout choices: valuing annuity streams — pensions, lottery instalments — as present values.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic slips are comparing nominal rates compounded at different frequencies, and mixing nominal with real — forgetting that inflation compounds too. People underestimate exponential growth intuitively, treating ten years at 8 per cent as “about 80 per cent” when it is about 116 per cent; the famous quip crediting Einstein on compound interest is apocryphal, but the intuition failure it jokes about is real. Finally, fees and taxes quietly reprice the whole calculation.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'time value of money', def: 'The principle that money available now is worth more than the same amount later.' },
        { term: 'compounding', def: 'Earning returns on accumulated returns, producing exponential growth.' },
        { term: 'discounting', def: 'Converting future cash flows to present value at a discount rate.' },
        { term: 'effective annual rate', def: 'The true yearly rate after intra-year compounding.' },
        { term: 'net present value', def: 'Present value of inflows minus outflows — the standard investment decision rule.' },
        { term: 'real versus nominal rate', def: 'Returns with and without inflation; real approximately equals nominal minus inflation.' },
        { term: 'amortisation', def: 'Scheduled repayment blending interest and principal into equal payments.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'At roughly 9 per cent annually, money doubles in about…',
          options: ['5 years', '8 years', '12 years', '20 years'],
          answer: 1,
          explain: 'The rule of 72 gives 72 divided by 9, which is 8 years.',
        },
        {
          q: 'A card charges 12 per cent compounded monthly. The effective annual rate is…',
          options: ['exactly 12 per cent', 'about 12.68 per cent', 'about 24 per cent', 'about 6 per cent'],
          answer: 1,
          explain: 'Twelve monthly rounds of 1 per cent compound to about 12.68 per cent — the number comparisons must use.',
        },
        {
          q: 'A friend says ten years at 8 per cent “gains about 80 per cent”. The truth is…',
          options: ['about 80 per cent', 'about 116 per cent', 'about 800 per cent', 'exactly 100 per cent'],
          answer: 1,
          explain: '1.08 to the tenth power is about 2.16, a 116 per cent gain — the linear intuition systematically understates exponential growth.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: exponents and percentages — this is core-tier finance. Follow with annuities and perpetuities, bond pricing, then net present value and the cost of capital. This topic is the vocabulary for everything that follows in valuation.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Money today beats money tomorrow: opportunity, inflation, risk.',
        'Compounding puts time in the exponent — the strongest lever you have.',
        'Discounting is compounding reversed, and the discount rate is the most contested number.',
        'Compare only effective rates, and deflate for inflation before judging returns.',
        'The rule of 72: doubling years is roughly 72 divided by the percentage rate.',
      ] },
    ],
  },
]
