/**
 * Knowledge Universe — Advanced Accounting & Auditing — Chapter 01: Partnership Accounts
 * 2 lessons · ~4,778 words
 * field: Accounting
 * legacy sources: x15-accounting.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Partnership Accounts]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 acct-partnership-fundamentals — Partnership Accounts I: Formation, Profit Sharing and Capital
 *   01.2 acct-partnership-changes — Partnership Accounts II: Admission, Retirement and Dissolution
 */
import type { KnowledgeTopic } from '../../types'

export const advancedAccountingAuditingCh01: KnowledgeTopic[] = [
  {
    id: 'acct-partnership-fundamentals',
    title: 'Partnership Accounts I: Formation, Profit Sharing and Capital',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Partnership Accounts',
    tier: 'intermediate',
    concepts: [
      'Statutory defaults when the deed is silent',
      'Partnership deed essentials',
      'Fixed versus fluctuating capital accounts',
      'The profit and loss appropriation account',
      'Interest on capital, salary and commission to partners',
      'Product method and average period for interest on drawings',
      'Drawings against profits versus against capital',
      'Guarantee of profit to a partner',
    ],
    words: 2381,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Two friends start a firm. One contributes ₹600,000 of savings; the other contributes clients, working days and a talent for selling. Within a year the firm earns ₹220,000 — and who owns what share of that is answered not by fairness or hours logged but by a document most partners never read closely until money appears: the partnership deed. Partnership accounting is double-entry bookkeeping with a human layer on top — the owners are also managers, so profit is not merely measured but divided, and the rules of division must be recorded as carefully as any sale. This lesson covers the statutory defaults that operate when the deed says nothing, fixed and fluctuating capital accounts, the profit and loss appropriation account that stages the division, interest on capital, salaries and drawings — including the product method — and the guarantee of profit that protects a nervous newcomer.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Partnership is among the most common forms of business on earth, and partnership disputes are among the most expensive. Almost every such dispute traces to a silent deed: no interest rate fixed, no salary agreed, no ratio recorded. The accountant\'s job is to make the division of profit mechanical, transparent and defensible — so that when the profitable year arrives, the ledger answers questions instead of starting arguments.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'When the deed is silent, legislation supplies a set of defaults — worth memorising because they surprise people. Absent any agreement to the contrary, profits and losses are shared equally, no matter how unequal the capital contributed. No partner receives interest on capital, and no partner receives salary or other remuneration, however many hours they work. No interest is charged on drawings. But a partner who has lent money to the firm beyond their capital — a loan, not an equity stake — receives interest at 6 per cent per annum, a charge against profit payable even in a loss year. These defaults are the accounting baseline only; the statute that houses them belongs to business-law study.',
      },
      {
        kind: 'list',
        items: [
          'Deed silent on ratio — profits and losses shared equally, irrespective of capital.',
          'Deed silent on interest on capital — none is payable.',
          'Deed silent on salary — no remuneration to any partner for working.',
          'Deed silent on drawings — no interest is charged on them.',
          'Partner\'s loan to the firm — interest at 6 per cent per annum by default, charged before profit is struck.',
        ],
      },
      {
        kind: 'para',
        text: 'The partnership deed is the agreement that overrides every default above, and a well-drafted one is specific where the statute is silent. Its accounting-relevant clauses: the capital each partner will contribute and whether those capitals are fixed; the profit-sharing ratio; the rates of interest on capital and on drawings; any salaries, commissions or bonuses to working partners; limits on drawings; and — critically for the second partnership lesson — how goodwill will be valued and how a retiring or deceased partner will be paid out. Where the deed is genuinely silent, the statutory default fills the gap; where the deed speaks, the deed wins.',
      },
      { kind: 'heading', text: 'Fixed and Fluctuating Capital Accounts' },
      {
        kind: 'para',
        text: 'Partners\' capital can be kept one of two ways. Under the fluctuating capital method — the default when the deed says nothing — each partner has a single account that breathes with the business: capital introduced, interest on capital, salary, commission and the share of profit are credited; drawings and interest on drawings are debited; and the closing balance is whatever remains. Under the fixed capital method, the capital account is pinned at the agreed figure and moves only for permanent changes — deliberate fresh capital or a permanent withdrawal. Every recurring item runs instead through a separate Current account: interest, salary and profit share credited there, drawings and their interest debited there. A credit current-account balance is a liability of the firm; a debit balance is an asset, in substance a temporary loan from a partner who drew more than they earned.',
      },
      {
        kind: 'list',
        items: [
          'Fluctuating — one account per partner; every appropriation and every drawing passes through it; balance moves every year.',
          'Fluctuating — simpler to maintain; the usual method for small firms without a stated preference.',
          'Fixed — capital account frozen at the agreed amount; only fresh injections or agreed permanent withdrawals move it.',
          'Fixed — interest on capital, salary, commission, profit share, drawings and interest on drawings all flow through the Current account.',
          'Fixed — a credit current-account balance is a liability; a debit balance is an asset (a running advance from the partner).',
          'Either way — the total of closing capitals and current balances appears on the liabilities side of the balance sheet (debit balances on the assets side).',
        ],
      },
      { kind: 'heading', text: 'The Profit and Loss Appropriation Account' },
      {
        kind: 'para',
        text: 'The profit and loss account measures how well the business performed; the appropriation account divides what it earned. The distinction matters because interest on capital, partner salaries and commissions are not expenses of running the business — they are distributions of its result, and charging them above the profit line would understate performance to outsiders. The sequence is fixed by logic: net profit is transferred in; interest on drawings is added (it claws back a benefit partners already enjoyed); interest on capital, salaries and commissions are deducted; and the residue — the divisible profit — is shared in the agreed ratio. If the residue is negative, the appropriations are adjusted per the deed, which is why deeds specify whether interest on capital is payable only out of profits.',
      },
      {
        kind: 'formula',
        name: 'Interest on drawings: product method and average period',
        latex: 'I = \\frac{\\sum (\\text{amount} \\times \\text{months outstanding}) \\times r}{12} \\qquad \\text{or} \\qquad I = \\text{Total drawings} \\times r \\times \\frac{\\text{average period}}{12}',
        meaning: 'Each drawing earns interest from its date to the year end (the product of amount and months outstanding); the sum of products times the monthly rate gives the charge. For equal monthly drawings the shortcut applies: average period is 6.5 months when drawings fall at the beginning of each month and 5.5 months at the end, because the first drawing is outstanding 12 or 11 months and the last one or zero.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Full Appropriation with Journal Entries',
        steps: [
          'A and B share profits 3:2 with fixed capitals of ₹600,000 and ₹400,000. The year\'s net profit before appropriations is ₹220,000. Deed terms: interest on capital 8 per cent per annum; salary to B ₹40,000; interest on drawings 6 per cent per annum. A drew ₹50,000 in one lump on 1 April; B drew ₹2,000 at the end of every month.',
          'Interest on capital — A: 8 per cent of 600,000 = ₹48,000; B: 8 per cent of 400,000 = ₹32,000. Entry: Interest on Capital A/c Dr ₹80,000; To A\'s Current A/c ₹48,000; To B\'s Current A/c ₹32,000.',
          'Salary — Entry: Partner B\'s Salary A/c Dr ₹40,000; To B\'s Current A/c ₹40,000.',
          'Interest on drawings — A: 50,000 at 6 per cent for a full year = ₹3,000. B: total drawings 24,000; product method gives 2,000 × (11 + 10 + ... + 1 + 0) = 2,000 × 66 = 132,000; interest = 132,000 × 6 per cent ÷ 12 = ₹660 (the average-period shortcut agrees: 24,000 × 6 per cent × 5.5/12 = 660). Entry: A\'s Current A/c Dr ₹3,000; B\'s Current A/c Dr ₹660; To Interest on Drawings A/c ₹3,660.',
          'Divisible profit — 220,000 + 3,660 - 80,000 - 40,000 = ₹103,660, shared 3:2 as ₹62,196 to A and ₹41,464 to B. Entry: Profit and Loss Appropriation A/c Dr ₹103,660; To A\'s Current A/c ₹62,196; To B\'s Current A/c ₹41,464.',
          'The interest, salary and interest-on-drawings accounts are closed into the Appropriation account, which balances at ₹223,660 on each side.',
        ],
      },
      {
        kind: 'list',
        items: [
          'Appropriation account, credit side — Net profit transferred in ₹220,000; Interest on drawings ₹3,660; total ₹223,660.',
          'Appropriation account, debit side — Interest on capital ₹80,000; Partner B\'s salary ₹40,000; A\'s share of profit ₹62,196; B\'s share ₹41,464; total ₹223,660.',
          'A\'s Current account — credits 48,000 + 62,196 = ₹110,196; debits 50,000 + 3,000 = ₹53,000; closing credit balance ₹57,196.',
          'B\'s Current account — credits 32,000 + 40,000 + 41,464 = ₹113,464; debits 24,000 + 660 = ₹24,660; closing credit balance ₹88,804.',
        ],
      },
      {
        kind: 'para',
        text: 'Drawings come in two flavours and the difference is not cosmetic. Drawings against profits — the ordinary kind — are anticipatory slices of the year\'s expected result: debited to the drawings or current account during the year, transferred at its close, and charged interest under the deed. Drawings against capital are permanent withdrawals of the capital itself: debited straight to the capital account, and they attract no interest on drawings, because they are not an advance of profit but a reduction of stake.',
      },
      {
        kind: 'para',
        text: 'A guarantee of profit is a promise that a partner will receive at least a stated minimum, whatever the arithmetic of the ratio produces. The guarantee does not create profit; it re-routes it. Compute the divisible profit normally and give the guaranteed partner their share; if the share falls short of the minimum, the shortfall is borne by the guaranteeing partner or partners in their agreed ratio (in the old ratio, if the deed is silent on that too). In the worked example, had A guaranteed B a minimum of ₹50,000, B\'s ₹41,464 would be topped up by ₹8,536 taken entirely from A, leaving A ₹53,660 and the firm\'s total distribution unchanged at ₹103,660.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, do not debit interest on capital or partner salaries to the profit and loss account — they are appropriations, and routing them above the line misstates business performance. Second, interest on drawings is credited to the appropriation account, added to the divisible pot, not deducted as an expense. Third, a deed silent on an item means the statutory default applies — equal shares and no remuneration — however unfair that feels in hindsight. Fourth, under fixed capitals never let recurring items touch the capital account; the moment drawings reduce the capital figure, the method has collapsed into fluctuating by accident.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Partnership deed', def: 'The written agreement fixing capital, ratio, interest rates, salaries and exit terms; it overrides every statutory default it addresses.' },
          { term: 'Fluctuating capital', def: 'One account per partner absorbing capital, appropriations and drawings alike, so the balance moves each year.' },
          { term: 'Fixed capital', def: 'A capital account pinned at the agreed amount, with recurring items routed through a separate current account.' },
          { term: 'Current account (partner)', def: 'Under fixed capitals, the running account of interest, salary, profit shares, drawings and their interest; a credit balance is a liability, a debit balance an asset.' },
          { term: 'Profit and loss appropriation account', def: 'The account that divides net profit among partners after adding interest on drawings and deducting interest on capital, salaries and commissions.' },
          { term: 'Interest on drawings', def: 'The charge a deed levies on partners\' withdrawals, computed by the product method or the average-period shortcut.' },
          { term: 'Average period', def: 'The mean time drawings remain outstanding: 6.5 months for equal monthly drawings at each month\'s start, 5.5 at each month\'s end.' },
          { term: 'Guarantee of profit', def: 'A promised minimum share for a partner, with any shortfall made good by the guaranteeing partners in their agreed ratio.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A deed fixes capitals of ₹500,000 and ₹100,000 but is silent on the profit-sharing ratio. Profits are shared:',
            options: ['5:1 in proportion to capital', 'Equally', 'As the working partners agree orally', 'After providing 6 per cent interest on capital'],
            answer: 1,
            explain: 'Silence on the ratio triggers the statutory default of equal sharing, regardless of how unequal the capitals are.',
          },
          {
            q: 'Under the fixed capital method, a partner\'s salary is credited to:',
            options: ['The partner\'s capital account', 'The partner\'s current account', 'The profit and loss account', 'A suspense account'],
            answer: 1,
            explain: 'Fixed capitals move only for permanent injections or withdrawals; salaries, interest and profit shares belong to the current account.',
          },
          {
            q: 'B draws ₹2,000 at the end of each month for a year. At 6 per cent per annum, interest on drawings is:',
            options: ['₹1,200', '₹660', '₹1,430', '₹720'],
            answer: 1,
            explain: 'Total drawings ₹24,000; average period 5.5 months; 24,000 × 6 per cent × 5.5/12 = ₹660.',
          },
          {
            q: 'Interest on drawings, when the deed provides for it, appears in the profit and loss appropriation account as:',
            options: ['A debit, treated as an expense of the business', 'A credit, added to the amount available for division', 'A direct debit to the partners\' capital accounts only', 'An item of the balance sheet'],
            answer: 1,
            explain: 'It is added on the credit side, increasing the divisible profit — it recovers from partners a benefit already enjoyed.',
          },
          {
            q: 'C is guaranteed a minimum profit of ₹50,000 and the ratio gives C ₹41,464. The shortfall of ₹8,536 is borne by:',
            options: ['All partners including C in the new ratio', 'The guaranteeing partners in their agreed (default: old) ratio', 'The firm as a business expense', 'No one — C simply receives the lower figure'],
            answer: 1,
            explain: 'A guarantee re-routes profit, it does not create it: the guarantors sacrifice in their agreed ratio, defaulting to the old ratio if the deed is silent.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'This lesson builds directly on the journal fluency of Double-Entry Bookkeeping: The Logic Behind Every Ledger and the statement shapes introduced in Reading Financial Statements, since the appropriation account is an extension of the profit and loss account. It is the required foundation for Partnership Accounts II, which adds admission, retirement and dissolution. The law of partnership itself — formation, mutual rights, dissolution by court — is business-law territory and is deliberately not re-taught here.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'When the deed is silent: equal shares, no interest on capital, no salary, no interest on drawings — but 6 per cent per annum on a partner\'s loan to the firm.',
          'The deed overrides every default; its clauses on ratio, interest, salaries and exits are the accountant\'s instruction set.',
          'Fluctuating capitals put everything in one account per partner; fixed capitals pin the capital and route recurring items through a current account.',
          'The appropriation account divides profit: net profit plus interest on drawings, less interest on capital, salaries and commissions, equals the divisible profit.',
          'Interest on drawings comes from the product method (sum of amount × months outstanding, times monthly rate) or the average-period shortcut (6.5 or 5.5 months).',
          'The worked division: ₹220,000 profit, ₹80,000 interest on capital, ₹40,000 salary, ₹3,660 interest on drawings — ₹103,660 divisible 3:2.',
          'Drawings against profits attract interest and close through the current account; drawings against capital reduce the capital itself and attract none.',
          'A guaranteed minimum tops up the partner\'s share from the guaranteeing partners\' shares, leaving total profit untouched.',
        ],
      },
    ],
  },
  {
    id: 'acct-partnership-changes',
    title: 'Partnership Accounts II: Admission, Retirement and Dissolution',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Partnership Accounts',
    tier: 'advanced',
    concepts: [
      'Sacrificing ratio on admission',
      'Goodwill: premium method and capital adjustment',
      'Revaluation of assets and liabilities',
      'Distribution of accumulated reserves',
      'Gaining ratio on retirement or death',
      'The deceased partner and the executor account',
      'Realisation account on dissolution',
      'Insolvency and piecemeal distribution',
    ],
    words: 2433,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A partnership is a contract among living, changing people, so the firm\'s accounts must survive three traumas: a new partner walking in, an old partner walking out, and the whole edifice being taken apart. Each event forces the same question — what is the firm worth at this moment, and who has a claim on that worth? A newcomer must not harvest reserves and reputation earned by others; a leaver must be paid every rupee of goodwill they helped build; a dissolving firm must convert everything to cash and settle everyone in order. Partnership Accounts I built the engine; this lesson drives it through admission, retirement, death and dissolution, with full journal entries for goodwill, revaluation and the realisation account.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Changes in composition are when partnerships fight and dissolve badly. The revaluation and realisation machinery replaces sentiment with arithmetic: assets marked to current worth, goodwill priced, gains and losses assigned to exactly those who earned them. Firms that skip these steps hand the incoming partner a claim on profits the old partners already made — and the outgoing partner a stake they no longer hold.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Admission of a Partner' },
      {
        kind: 'para',
        text: 'On admission the old firm legally ends and a new one begins, so the books must be squared before the newcomer touches them. Three adjustments do the squaring: goodwill compensates old partners for sharing the reputation they built; revaluation marks assets and liabilities to their worth on the admission date, so later changes are not misattributed to the new team; and accumulated reserves are credited to the old partners alone, being earned before the new partner existed. Only after this scrubbing does the new capital enter the books.',
      },
      {
        kind: 'para',
        text: 'Two ratios govern every admission. The new profit-sharing ratio divides future profits among all partners; the sacrificing ratio measures what the old partners gave up and is the ratio in which goodwill compensation flows. Suppose A and B share 3:2 and C is admitted, the new ratio being 5:3:2. A\'s share falls from 6/10 to 5/10 — a sacrifice of 1/10; B\'s falls from 4/10 to 3/10 — also 1/10. The sacrificing ratio is 1:1, and any premium C pays is split equally between A and B, not in the old 3:2. That asymmetry is the most common admission error, and it is pure arithmetic: sacrifice equals old share minus new share.',
      },
      {
        kind: 'formula',
        name: 'Sacrificing and gaining ratios',
        latex: '\\text{Sacrifice} = \\text{old share} - \\text{new share} \\qquad \\text{Gain} = \\text{new share} - \\text{old share}',
        meaning: 'On admission, old partners\' sacrifices form the ratio for sharing goodwill brought in. On retirement or death, the continuing partners\' gains form the ratio for compensating the outgoing partner — the same subtraction, run backwards.',
      },
      {
        kind: 'para',
        text: 'Goodwill treatment depends on whether the newcomer pays for it. Under the premium method, C brings their share of goodwill in cash, credited to the sacrificing partners in the sacrificing ratio and withdrawable or retainable as firm capital. When C brings no premium, the adjustment runs through capital: C\'s current account is debited and the sacrificing partners\' capitals credited, again in the sacrificing ratio. A standards note applies: internally generated goodwill is never recognised — it enters the books only when consideration has changed hands, which is what the premium and adjustment entries record. Valuing the goodwill figure itself (average profit, super profit, capitalisation) is valuation theory, noted here only as an input.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Goodwill on Admission, Both Routes',
        steps: [
          'A and B share 3:2. C is admitted; the new ratio is 5:3:2 and goodwill is valued at ₹240,000. C\'s profit share is 2/10, so C\'s share of goodwill is 2/10 × 240,000 = ₹48,000, owed to A and B in their sacrificing ratio of 1:1 — ₹24,000 each.',
          'Premium method — C brings the amount in cash: Bank A/c Dr ₹48,000; To A\'s Capital A/c ₹24,000; To B\'s Capital A/c ₹24,000. If the deed lets them withdraw it: A\'s Capital A/c Dr ₹24,000; B\'s Capital A/c Dr ₹24,000; To Bank A/c ₹48,000.',
          'Adjustment via capitals — C pays nothing now: C\'s Current A/c Dr ₹48,000; To A\'s Capital A/c ₹24,000; To B\'s Capital A/c ₹24,000. The debt stays on C\'s current account until the deed says otherwise.',
          'Either route, the sacrificing ratio of 1:1 governs the split — not 3:2, not 5:3:2.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example: The Revaluation Account',
        steps: [
          'On C\'s admission the books show machinery ₹200,000, stock ₹80,000 and debtors ₹60,000. Current values: machinery ₹240,000 (up ₹40,000), stock ₹68,000 (down ₹12,000); a 5 per cent provision on debtors is needed (₹3,000); and an outstanding repairs liability of ₹2,000 surfaces.',
          'Appreciation: Machinery A/c Dr ₹40,000; To Revaluation A/c ₹40,000.',
          'Depreciation of stock: Revaluation A/c Dr ₹12,000; To Stock A/c ₹12,000.',
          'Provision: Revaluation A/c Dr ₹3,000; To Provision for Doubtful Debts A/c ₹3,000.',
          'Liability: Revaluation A/c Dr ₹2,000; To Outstanding Repairs A/c ₹2,000.',
          'Close: the net profit of ₹23,000 (40,000 minus 17,000) goes to the old partners in the old ratio — Revaluation A/c Dr ₹23,000; To A\'s Capital A/c ₹13,800; To B\'s Capital A/c ₹9,200.',
          'Rationale: left at ₹200,000, a later sale of the machinery would have produced a profit in which C unfairly shared; revaluation loads it onto A and B now.',
        ],
      },
      {
        kind: 'para',
        text: 'Accumulated profits and reserves are treated the same way — credited to the old partners in the old ratio before the new capital is recorded. For a General Reserve of ₹40,000: General Reserve A/c Dr ₹40,000; To A\'s Capital A/c ₹24,000; To B\'s Capital A/c ₹16,000. The logic is identical to revaluation: the past is not for sale to the newcomer.',
      },
      { kind: 'heading', text: 'Retirement and Death' },
      {
        kind: 'para',
        text: 'Retirement and death run the admission machinery backwards. Assets are revalued, reserves distributed, and the outgoing partner\'s dues assembled: capital, current balance, goodwill share, revaluation share and profits to the date of exit. Goodwill compensation now falls on the continuing partners in the gaining ratio — new share minus old share. If A, B and C share 5:3:2 and B retires, leaving A and C at 3:2, then A gains 1/10 (5/10 to 6/10) and C gains 2/10 (2/10 to 4/10), a gaining ratio of 1:2. When goodwill of ₹200,000 is raised for B\'s share of ₹60,000, the charging entry is: A\'s Capital A/c Dr ₹20,000; C\'s Capital A/c Dr ₹40,000; To B\'s Capital A/c ₹60,000 — C pays two-thirds, having gained twice as much.',
      },
      {
        kind: 'para',
        text: 'Death adds one wrinkle: the exit date rarely coincides with the year end, so the deceased\'s share of profit is computed to the date of death — from the last balance sheet, by sales, by time, or as the deed prescribes — and interest runs on the balance due. Firms commonly hold a joint life policy covering all partners: the proceeds on death provide instant liquidity, and the treatment of premiums and sum assured follows the deed. The total due is transferred to an Executor\'s Account — Deceased Partner\'s Capital A/c Dr; To Deceased Partner\'s Executors\' A/c — then paid per the deed, often in instalments with interest at around 6 per cent per annum.',
      },
      { kind: 'heading', text: 'Dissolution and the Realisation Account' },
      {
        kind: 'para',
        text: 'Dissolution ends the firm: assets are sold, liabilities paid, remaining cash divided. The realisation account is the temporary staging ground — every asset except cash (fictitious assets go straight to the partners) is transferred to it at book value; every liability except partners\' loans is transferred to it; proceeds, payments to outsiders and expenses flow through it; and the closing balance, profit or loss on realisation, is divided in the profit-sharing ratio. The mirror logic is the whole story: the difference between what the books said the assets were worth and what the world paid belongs to the partners in their agreed ratio.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Complete Dissolution',
        steps: [
          'A, B and C share 5:3:2. The balance sheet shows creditors ₹60,000, bills payable ₹20,000, and capitals A ₹120,000, B ₹90,000, C ₹70,000 — total ₹360,000 — against cash ₹12,000, debtors ₹80,000, stock ₹88,000, machinery ₹120,000 and building ₹60,000.',
          'Transfer the assets at book value: Realisation A/c Dr ₹348,000; To Debtors ₹80,000; To Stock ₹88,000; To Machinery ₹120,000; To Building ₹60,000.',
          'Transfer the liabilities: Creditors A/c Dr ₹60,000; Bills Payable A/c Dr ₹20,000; To Realisation A/c ₹80,000.',
          'Sell what sells: debtors fetch ₹72,000, stock ₹80,000, machinery ₹100,000 — Cash A/c Dr ₹252,000; To Realisation A/c ₹252,000.',
          'Pay the outsiders: creditors settle for ₹58,000, bills ₹20,000, expenses ₹3,000 — Realisation A/c Dr ₹81,000; To Cash A/c ₹81,000.',
          'A takes over the building at an agreed ₹66,000: A\'s Capital A/c Dr ₹66,000; To Realisation A/c ₹66,000 — his claim is reduced, not his cash.',
          'Close the account: debits ₹429,000 against credits ₹398,000, so a loss of ₹31,000 — A\'s Capital A/c Dr ₹15,500; B\'s Capital A/c Dr ₹9,300; C\'s Capital A/c Dr ₹6,200; To Realisation A/c ₹31,000, in the 5:3:2 ratio.',
          'Pay the partners: A ₹38,500; B ₹80,700; C ₹63,800 — Capitals Dr ₹183,000; To Cash ₹183,000. Cash proves it: 12,000 + 252,000 - 81,000 = ₹183,000, to the rupee.',
        ],
      },
      {
        kind: 'list',
        items: [
          'Realisation account, debit side — assets at book value ₹348,000; creditors paid ₹58,000; bills paid ₹20,000; expenses ₹3,000; total ₹429,000.',
          'Realisation account, credit side — cash from debtors, stock, machinery ₹252,000; creditors transferred ₹60,000; bills transferred ₹20,000; building taken by A ₹66,000; total ₹398,000.',
          'Balancing figure — loss on realisation ₹31,000, shared 5:3:2 as ₹15,500, ₹9,300 and ₹6,200.',
          'Cash account flow — opening ₹12,000 + realisations ₹252,000 - outside payments ₹81,000 = ₹183,000 distributed to the partners.',
        ],
      },
      {
        kind: 'para',
        text: 'Insolvency bends the neat ratio arithmetic. If a partner\'s capital cannot absorb their share of the loss, the deficiency is borne by the solvent partners — not in the profit-sharing ratio but in the ratio of their capitals, the rule carried in the English case Garner v Murray. The working technique is the surplus capital method: compute the notional total loss on the assumption everyone pays, find each solvent partner\'s surplus capital over their share of that notional loss, and require them to bring in that much cash to fund the insolvent partner\'s deficiency. When dissolution stretches over time — assets sold piecemeal, creditors pressing — piecemeal distribution applies instead: cash is released so that no partner is paid ahead of the point where all capitals would be equal, commonly via the maximum-loss method, which treats each distribution as the last.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, goodwill compensation flows in the sacrificing ratio (admission) or gaining ratio (exit) — never the profit-sharing ratio by default. Second, revaluation profit and accumulated reserves belong to old partners only. Third, partners\' loans are outside the realisation account, paid per the deed and the law\'s priority rules. Fourth, cash and fictitious assets never pass through realisation. And remember the case name the right way round: Garner v Murray, capital ratio, deficiency of the insolvent partner.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'New profit-sharing ratio', def: 'The ratio among all partners, including the incoming one, from the date of change.' },
          { term: 'Sacrificing ratio', def: 'Old share minus new share for each continuing partner; the channel for goodwill compensation on admission.' },
          { term: 'Gaining ratio', def: 'New share minus old share for each continuing partner; the channel for compensating a retiring or deceased partner.' },
          { term: 'Premium method', def: 'The incoming partner pays their share of goodwill in cash, credited to sacrificing partners in the sacrificing ratio.' },
          { term: 'Revaluation account', def: 'Marks assets and liabilities to current values on a change in composition; its profit or loss goes to the old partners.' },
          { term: 'Realisation account', def: 'The dissolution staging account: assets and liabilities in, proceeds and payments through, the balance shared in the profit-sharing ratio.' },
          { term: 'Garner v Murray', def: 'An insolvent partner\'s capital deficiency is borne by solvent partners in the ratio of their capitals.' },
          { term: 'Executor\'s account', def: 'Sums due to a deceased partner\'s estate, usually settled in instalments with interest.' },
          { term: 'Piecemeal distribution', def: 'Spreading dissolution proceeds over time so no partner is overpaid before all would be equal, via the maximum-loss method.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A and B share 3:2; C is admitted and the new ratio is 5:3:2. The sacrificing ratio is:',
            options: ['3:2', '5:3', '1:1', '2:1'],
            answer: 2,
            explain: 'A sacrifices 6/10 - 5/10 = 1/10 and B 4/10 - 3/10 = 1/10 — any goodwill premium is shared equally.',
          },
          {
            q: 'A revaluation profit on a partner\'s admission is shared by:',
            options: ['All partners in the new ratio', 'The old partners in the old ratio', 'The old partners in the new ratio', 'The incoming partner alone'],
            answer: 1,
            explain: 'Revaluation prices changes that occurred before the newcomer joined — the gain belongs to those who owned the firm then.',
          },
          {
            q: 'A, B and C share 5:3:2. B retires and goodwill of ₹200,000 is to be adjusted, B\'s share being 3/10. A and C, who now share 3:2, will bear the debit in the ratio:',
            options: ['5:3:2', '3:2', '1:2', 'Equally'],
            answer: 2,
            explain: 'A gains 1/10 while C gains 2/10, so the gaining ratio 1:2 splits B\'s ₹60,000 as ₹20,000 and ₹40,000.',
          },
          {
            q: 'In dissolution, which item is NOT transferred to the realisation account?',
            options: ['Sundry debtors', 'Creditors', 'Cash in hand', 'Stock'],
            answer: 2,
            explain: 'Cash never enters realisation — it is the medium of the whole exercise.',
          },
          {
            q: 'Under the rule in Garner v Murray, the capital deficiency of an insolvent partner is borne by the solvent partners in the ratio of:',
            options: ['Their profit-sharing ratio', 'Their capitals', 'Their sacrifices on admission', 'Equal shares'],
            answer: 1,
            explain: 'The case settled capital ratio as the measure — each solvent partner loses in proportion to the stake left.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'This lesson assumes Partnership Accounts I: Formation, Profit Sharing and Capital for capitals, current accounts and appropriations, plus the journal fluency of Double-Entry Bookkeeping: The Logic Behind Every Ledger. Depreciation, Provisions and Reserves supplies the revaluation instincts, and Reading Financial Statements shows where revaluation and goodwill balances surface. The statutory side of dissolution — court orders, priorities, insolvency law — belongs to business-law study.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Every change of composition re-prices the firm first: goodwill, revaluation, reserve distribution.',
          'Sacrificing ratio = old share minus new share; it routes goodwill compensation on admission (worked case: 3:2 to 5:3:2 gives 1:1).',
          'Goodwill enters the books only when consideration moves: premium in cash, or an adjustment against the newcomer\'s current account.',
          'Revaluation marks assets and liabilities to current worth; its profit or loss goes to the old partners in the old ratio (worked profit ₹23,000).',
          'Accumulated reserves are credited to old partners before the incoming capital is booked.',
          'On retirement or death, continuing partners compensate the leaver in the gaining ratio (worked case: 5:3:2 losing B gives 1:2).',
          'The deceased\'s total due — capital, goodwill, revaluation, profits to date — moves to an executor\'s account with interest.',
          'Dissolution runs everything through the realisation account; its closing loss (worked: ₹31,000 in 5:3:2) is shared in the profit-sharing ratio.',
          'Garner v Murray: an insolvent partner\'s deficiency is borne by solvent partners in capital ratio; slow wind-ups use piecemeal distribution.',
        ],
      },
    ],
  },
]
