/**
 * Knowledge Universe — Financial Accounting — Chapter 01: The Accounting Cycle & the Ledger
 * 2 lessons · ~2,679 words
 * field: Accounting
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Accounting Cycle, The Ledger]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 acct-double-entry — Double-Entry Bookkeeping: The Logic Behind Every Ledger
 *   01.2 acct-accounting-cycle-accruals — The Accounting Cycle: Accruals, Adjustments and Closing the Books
 */
import type { KnowledgeTopic } from '../../types'

export const financialAccountingCh01: KnowledgeTopic[] = [
  {
    id: 'acct-double-entry',
    title: 'Double-Entry Bookkeeping: The Logic Behind Every Ledger',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'The Ledger',
    tier: 'core',
    concepts: [
      'The equation: assets equal liabilities plus equity',
      'Debits and credits: direction, not virtue',
      'Journal, ledger, trial balance: the cycle',
      'The five account families',
      'Accrual accounting: earning versus paying',
      'A 500-year-old error check',
    ],
    words: 1225,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'In 1494 the Venetian friar Luca Pacioli published a chapter of mathematics that changed commerce more than any equation since: a systematic description of how Venetian merchants kept their books. Every transaction is recorded twice — once as a debit, once as a credit — and the two sides must always be equal. That symmetry is a checksum: if the books do not balance, an error exists and can be found. Double entry is arguably the oldest algorithm still running in production, humming inside every accounting package on earth.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Partnership, investment and auditing all became possible because strangers could verify a merchant\'s affairs through balanced books. Five centuries later, "posting a journal entry" still means exactly what Pacioli described — and understanding it is the difference between reading and guessing at any set of accounts.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The foundation is one equation: assets equal liabilities plus equity. What the business owns and is owed (assets) is financed either by outsiders (liabilities) or by owners (equity). The equation can never break: buy a machine with cash and one asset swaps for another; borrow to buy it and an asset rises with a liability. Every transaction a business can make is a reshuffling that preserves the identity — which is why the books can balance at all.',
      },
      {
        kind: 'para',
        text: 'A debit is simply an entry on the left of an account; a credit is an entry on the right — directions, never moral judgements. The rules follow from the equation: debits increase assets and expenses; credits increase liabilities, equity and revenue. Any transaction that debits one account must credit another by the same amount. That is the whole grammar; everything else in bookkeeping is vocabulary and drill.',
      },
      {
        kind: 'para',
        text: 'The cycle runs journal to ledger to trial balance. Transactions are first recorded chronologically in the journal — the day-book of the business. Each entry is then posted to the ledger, where every account accumulates its own story: cash, equipment, sales, wages. At period end, each account is summed and listed with its net debit or credit balance in the trial balance. If total debits do not equal total credits, somewhere a posting went wrong — and the hunt has a defined finish.',
      },
      {
        kind: 'para',
        text: 'Accounts come in five families. Three are permanent, living on the balance sheet: assets, liabilities and equity. Two are temporary, living on the income statement and reset to zero each year: revenues and expenses. At closing, the year\'s revenue and expense balances are swept into equity as profit or loss — which is how the income statement plugs into the balance sheet and why the five-family system tells one continuous story.',
      },
      {
        kind: 'para',
        text: 'Accrual accounting records economic events when they are earned or incurred, not when cash moves. A sale on credit is revenue today and a receivable until collected; a year of insurance paid upfront is an asset consumed month by month. Matching expenses to the revenue they generate is what makes profit a measure of performance rather than of timing — and it is the reason a profitable company can temporarily run short of cash.',
      },
      {
        kind: 'para',
        text: 'The balancing property is a 500-year-old error check, and it is stronger than it looks. It catches transcription and posting mistakes automatically, and it made something new possible: an outsider — a partner, an investor, an auditor — could verify accounts they did not keep. Frauds that balance (fake revenue with fake receivables) defeat the checksum, which is why audits exist; but honest error, the far more common case, has nowhere to hide.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: open a bakery and post its first month: the owner deposits 10,000; a 3,000 oven is bought on credit; 1,200 of bread is sold for cash; 400 of wages is paid; 1,000 is paid to the oven supplier. Post the entries and prove the books balance.',
        'Recall: every transaction needs equal debits and credits; assets and expenses grow with debits, while liabilities, equity and revenue grow with credits.',
        'Apply: debit cash 10,000, credit owner\'s equity 10,000; debit equipment 3,000, credit accounts payable 3,000; debit cash 1,200, credit sales revenue 1,200; debit wages expense 400, credit cash 400; debit accounts payable 1,000, credit cash 1,000.',
        'State the result: cash ends at 9,800, equipment 3,000 and wages 400 — total debits 13,200 — against equity 10,000, revenue 1,200 and remaining payables 2,000 — total credits 13,200. The trial balance balances, and the month\'s profit is 1,200 − 400 = 800.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Accounting software: every "journal entry" screen is double entry, even when a bank feed posts the other side automatically.',
        'Auditors rely on the balancing property to trace sampled transactions through an entire system of accounts.',
        'Forensic accountants treat unbalanced suspense accounts and single-entry side books as classic red flags.',
        'Small businesses: owners who post entries themselves catch payroll and supplier errors months earlier.',
        'Household finance: listing what you own and owe is a balance sheet; net worth is equity, computed the same way.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The reflexive error is reading debit as good and credit as bad — they are directions, and a debit to cash is welcome while a debit to wages is an expense. Students also confuse the journal (chronological record) with the ledger (accounts) and expect the trial balance to prove the books are right — it only proves they are arithmetically consistent. And remember that a balanced entry can still record a fiction; balancing catches slips, not lies.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'accounting equation', def: 'Assets equal liabilities plus equity; the identity every transaction preserves.' },
        { term: 'debit', def: 'An entry on the left of an account; increases assets and expenses.' },
        { term: 'credit', def: 'An entry on the right of an account; increases liabilities, equity and revenue.' },
        { term: 'journal', def: 'The chronological day-book where transactions are first recorded.' },
        { term: 'ledger', def: 'The set of accounts into which journal entries are posted and accumulated.' },
        { term: 'trial balance', def: 'A period-end list of account balances proving total debits equal total credits.' },
        { term: 'accrual accounting', def: 'Recording revenue when earned and expenses when incurred, regardless of cash timing.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The accounting equation states that…',
          options: ['assets equal revenues minus expenses', 'assets equal liabilities plus equity', 'debits equal profits', 'cash equals profit'],
          answer: 1,
          explain: 'Everything the business holds is financed by creditors or owners — the identity double entry preserves.',
        },
        {
          q: 'A debit increases which of the following?',
          options: ['Liabilities and equity', 'Assets and expenses', 'Revenue only', 'Nothing — debits always decrease accounts'],
          answer: 1,
          explain: 'Debits are the left-side direction: they grow assets and expenses, while credits grow liabilities, equity and revenue.',
        },
        {
          q: 'The purpose of a trial balance is to…',
          options: ['prove the business is profitable', 'prove total debits equal total credits', 'calculate taxes owed', 'list customers who owe money'],
          answer: 1,
          explain: 'It is an arithmetic checksum that catches posting errors — not a guarantee of correctness or truth.',
        },
        {
          q: 'Under accrual accounting, a sale made on credit in March and collected in May is recorded as revenue…',
          options: ['in May, when cash arrives', 'in March, when it is earned', 'split across both months', 'never, if the customer pays late'],
          answer: 1,
          explain: 'Earning, not payment, triggers recording — the receivable bridges the timing gap.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'No prerequisites — this is the ground floor of accounting. Follow with the financial-statements lesson to see how the ledger\'s accounts become the three statements investors read, then depreciation and inventory costing. Exercise: post one week of your own spending as journal entries and run a trial balance on yourself.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'acct-accounting-cycle-accruals',
    title: 'The Accounting Cycle: Accruals, Adjustments and Closing the Books',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Accounting Cycle',
    tier: 'intermediate',
    concepts: [
      'Nine steps from transaction to statements',
      'Accrual basis versus cash basis',
      'Matching: expenses follow the revenue they earn',
      'Four classes of adjusting entries',
      'Depreciation as allocation, not valuation',
      'Closing entries and temporary accounts',
      'Post-closing trial balance',
    ],
    words: 1452,
    readMins: 7,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The double-entry lesson explained the logic of the ledger; the financial-statements lesson explained how to read the outputs. This lesson walks the clockwork between them — the accounting cycle, the fixed sequence that turns a shoebox of transactions into trustworthy statements every period. Its centre of gravity is the accrual idea: revenue is recorded when earned and expenses when incurred, not when cash moves. That one decision is why adjusting and closing entries exist, and mastering them is the rite of passage of every accounting course worldwide.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The cycle is not bookkeeping trivia: valuation models read accrual numbers, so anyone who reads statements is downstream of these adjustments. Recognising an accrued liability or an unearned revenue in a filing is the difference between seeing a business and seeing its cash timing.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The cycle runs nine steps per period: analyse source documents, journalise the transactions, post to the general ledger, prepare an unadjusted trial balance, journalise and post adjusting entries, prepare an adjusted trial balance, build the financial statements, journalise and post closing entries, and finish with a post-closing trial balance. Steps one to four are mechanical bookkeeping; steps five and eight are where judgement lives; the trial balances are the checkpoints that prove debits still equal credits after each layer of entries. The sequence is identical for a corner shop and a listed company — only volume differs.',
      },
      {
        kind: 'para',
        text: 'Accrual accounting answers a timing question: when does the ledger record reality? The revenue-recognition principle says when the earning process is substantially complete, not when the customer pays; the matching principle says expenses attach to the period of the revenue they helped generate, not when they are paid for. Cash-basis accounting — recording only money in and money out — is fine for a lemonade stand and useless for a business that buys inventory in one period and sells it in the next: cash basis would show famine in the buying month and feast in the selling month, misstating both. Accrual smooths the distortion by timing entries to the economic event, at the price of estimates — and estimates are exactly what the adjusting entries carry.',
      },
      {
        kind: 'para',
        text: 'Adjusting entries come in four classic classes. Deferred expenses: cash paid before the benefit is consumed — prepaid insurance recorded as an asset, then expensed month by month as coverage elapses. Deferred revenues: cash received before the obligation is discharged — a year of rent collected up front sits in unearned revenue (a liability) and migrates to revenue as the months deliver. Accrued expenses: cost incurred but not yet paid — the last week of employees’ work in December is December’s wage expense even if payday is January. Accrued revenues: value delivered but not yet billed — the service rendered before month-end that the invoice will chase next week. Each adjustment touches one income-statement account and one balance-sheet account; that symmetry is the diagnostic.',
      },
      {
        kind: 'para',
        text: 'Depreciation is the best-known recurring adjustment and the most misunderstood. It does not value the machine; it allocates its historical cost over the periods that use it, so that matching holds — an estimate of consumption, not a market appraisal. The straight-line method divides cost less salvage value by useful life; accelerated methods front-load the expense for assets that lose productivity early. Depreciation also explains why an income statement is an opinion about timing, not a cash report: a company can be profitable (revenues exceed matched expenses) while cash burns, or cash-rich while reporting losses — the reconciliation lives in the cash-flow statement the statements lesson covers.',
      },
      {
        kind: 'para',
        text: 'Closing entries end the period the way a stage crew resets between shows. Temporary accounts — revenues, expenses, and the owner’s draws or dividends — exist to measure one period; left open, they would blur every year into every other. Closing zeroes them: revenues and expenses are transferred to an income summary (or straight to retained earnings or capital), which then deposits the net result into equity, leaving revenue and expense accounts at zero for the new period. Permanent accounts — assets, liabilities, equity — are never closed; they roll forward, which is why the post-closing trial balance shows only them. Reversing entries are an optional final flourish that unbook accrued items so routine postings do not double-count them — a convenience, not a principle.',
      },
      {
        kind: 'formula',
        name: 'Straight-line depreciation',
        latex: '\\text{annual depreciation} = \\frac{\\text{cost} - \\text{salvage value}}{\\text{useful life}}',
        meaning: 'The asset’s depreciable base spreads evenly over its service years — the default allocation when consumption is roughly uniform.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a business pays 2,400 for twelve months of insurance on 1 December. Year-end is 31 December. What adjusting entry closes the year?',
          'Recall the class: cash left before the benefit was consumed — deferred expense, sitting in the asset account prepaid insurance.',
          'Apply: one month of the twelve has been consumed — 2,400 ÷ 12 = 200 of insurance expense; the remaining 2,200 stays an asset. Entry: debit insurance expense 200, credit prepaid insurance 200.',
          'State the result: the income statement carries one month’s cost by matching; the balance sheet carries eleven months of unexpired benefit; net income, assets and equity each move by exactly 200 — the adjustment’s symmetry is the proof.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Month-end close in every finance department: the same nine steps compressed into a checklist and a deadline.',
        'Audit fieldwork, which tests exactly the adjusting entries — cutoffs, accruals, depreciation estimates.',
        'Reading filings: unearned-revenue balances expose subscription businesses’ backlog; accrued wages expose payroll timing.',
        'Course and certification exams, which drill the four adjustment classes and the closing sequence relentlessly.',
        'Small-business hygiene: knowing why a profitable firm can still run out of cash, and when to distrust a cash-basis spreadsheet.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating depreciation as a valuation or a cash reserve — it is an allocation of past cost, and the cash left the building when the asset was bought. Adjusting when cash moves — the whole point is that these entries exist precisely because cash did NOT move (or moved earlier/later than the event). Closing permanent accounts — assets and liabilities never close. And forgetting that every adjustment must pair an income-statement account with a balance-sheet account; an adjustment touching two of the same kind is usually an error.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'accounting cycle', def: 'The period-by-period sequence from transaction analysis through closing and the post-closing trial balance.' },
        { term: 'accrual basis', def: 'Recording revenue when earned and expenses when incurred, regardless of cash timing.' },
        { term: 'adjusting entry', def: 'A period-end entry in one of four classes — deferred expense, deferred revenue, accrued expense, accrued revenue (with depreciation the recurring case).' },
        { term: 'deferred revenue', def: 'Cash collected before delivery, carried as a liability until earned.' },
        { term: 'accrued expense', def: 'Cost incurred but unpaid at period end — recorded now, paid later.' },
        { term: 'depreciation', def: 'Systematic allocation of an asset’s cost over its useful life; an estimate, not a valuation.' },
        { term: 'closing entries', def: 'Entries that zero the temporary accounts into equity for the new period.' },
        { term: 'temporary vs permanent accounts', def: 'Income-statement accounts reset each period; balance-sheet accounts roll forward.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'A company receives 12,000 on 1 January for a year of services. At 31 January, the adjusting entry is…',
          options: ['debit cash 12,000, credit revenue 12,000', 'debit unearned revenue 1,000, credit service revenue 1,000', 'debit service revenue 1,000, credit unearned revenue 1,000', 'no entry until the year ends'],
          answer: 1,
          explain: 'Cash arrived first (deferred revenue, a liability); one month has been earned, so 1,000 migrates from liability to revenue.',
        },
        {
          q: 'December’s wages paid on 5 January are…',
          options: ['January expense — pay date decides', 'December expense — matching decides', 'split evenly across both months', 'an asset until paid'],
          answer: 1,
          explain: 'Accrued expense: the work was December’s, so the expense is December’s and a liability records the unpaid amount.',
        },
        {
          q: 'After closing entries, which accounts appear on the post-closing trial balance?',
          options: ['revenues, expenses and equity', 'assets, liabilities and equity', 'only assets', 'all ledger accounts'],
          answer: 1,
          explain: 'Temporary accounts are zeroed; only permanent accounts — assets, liabilities, equity — survive to the post-closing trial balance.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the double-entry lesson for debit/credit logic and the financial-statements lesson for the outputs being assembled. Follow with the finance lessons to see how accrual numbers feed valuation, and the entrepreneurship lessons for how founders live the cash-versus-accrual gap. Grounding texts: OpenStax Principles of Financial Accounting, chapters on the accounting cycle and completing the cycle (adjusting and closing entries), mirrored on the LibreTexts accounting shelves.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Nine steps run each period; adjusting entries (step 5) and closing entries (step 8) carry the judgement.',
        'Accrual basis times entries to economic events: revenue when earned, expenses when incurred, matching as the glue.',
        'Four adjustment classes: deferred expenses, deferred revenues, accrued expenses, accrued revenues.',
        'Depreciation allocates cost — (cost − salvage) ÷ life — it neither values assets nor saves cash.',
        'Closing zeroes temporary accounts into equity; the post-closing trial balance holds only permanents.',
      ] },
    ],
  },
]
