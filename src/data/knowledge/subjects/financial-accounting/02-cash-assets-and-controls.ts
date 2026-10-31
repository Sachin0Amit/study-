/**
 * Knowledge Universe — Financial Accounting — Chapter 02: Cash, Assets & Controls
 * 2 lessons · ~4,692 words
 * field: Accounting
 * legacy sources: x15-accounting.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cash Control, Fixed Assets]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 acct-depreciation-provisions — Depreciation, Provisions and Reserves
 *   02.2 acct-bank-reconciliation — Bank Reconciliation: Explaining Every Difference
 */
import type { KnowledgeTopic } from '../../types'

export const financialAccountingCh02: KnowledgeTopic[] = [
  {
    id: 'acct-depreciation-provisions',
    title: 'Depreciation, Provisions and Reserves',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Fixed Assets',
    tier: 'core',
    concepts: [
      'Depreciation as matching: spreading cost over useful life',
      'Wear and tear, effluxion of time, and obsolescence',
      'Cost, salvage value, and depreciable amount',
      'Straight line versus written down value schedules',
      'Recording via the asset account or a provision account',
      'Change of method applied prospectively',
      'Provisions as charges, reserves as appropriations',
      'Provision for doubtful debts and its year-end adjustment',
    ],
    words: 2425,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'On the first day of a financial year a firm pays ₹100,000 for a packaging machine, and the journal entry takes a moment: debit Machinery, credit Bank. The harder question starts the next morning, when the machine has already begun to die. It will run for perhaps ten years before it is worth little more than scrap. Depreciation is the machinery for recognising that slow death — carving the machine\'s cost into the years that actually consumed it. This lesson builds the concept from the matching principle, works the two classical methods on the same machine, shows the entries for charges and disposal, and then separates provisions (charges against profit) from reserves (appropriations of it).',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'In a capital-heavy business, depreciation is often the largest figure in the profit and loss account after materials and wages. Ignore it and profit is fiction: dividends eat into capital, tax is charged on income that never existed, and replacement day arrives with an empty bank balance. The provision-versus-reserve distinction decides whether a balance-sheet entry is an obligation or a choice — and whether it may lawfully be paid out as dividend.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Depreciation is the systematic allocation of a fixed asset\'s cost over its useful life. The wording is deliberate: this is allocation, not valuation — expensing each period\'s fair share of a cost already incurred, exactly the matching logic of the accounting-cycle lesson, not guessing what the machine would fetch today. Three forces make allocation necessary. Wear and tear is physical: parts abrade, accuracy drifts, output slows. Effluxion of time is calendrical: leases and patents expire by date, used or not. Obsolescence is economic: a healthy machine becomes worthless when a faster one appears. Two consequences follow. Depreciation is a charge, not an option — recorded even in a loss year, because the asset decayed regardless of the firm\'s fortunes. And land, with no finite life, is the standing exception: not depreciated unless it holds a wasting resource such as a quarry.',
      },
      {
        kind: 'para',
        text: 'Three inputs drive every computation. Cost is everything spent to bring the asset to working condition: invoice price minus trade discount, plus freight, duties, installation and wiring. Useful life is the expected span of economic service — always the shorter of physical and commercial life; statutes prescribe minimum lives for common asset classes that departures must justify. Salvage (scrap) value is the amount expected on disposal. Cost minus salvage is the depreciable amount, the total to spread. Life and salvage are estimates revisited each year end; a revision changes the current and future years\' charges only.',
      },
      {
        kind: 'formula',
        name: 'Straight line method (SLM)',
        latex: 'D = \\frac{C - S}{n} \\quad \\text{or} \\quad D = C \\times r',
        meaning: 'Annual depreciation D equals depreciable amount (cost C minus salvage S) divided by useful life n — equivalently, a fixed percentage r of cost. Every year carries an identical charge, so book value falls in a straight line toward salvage.',
      },
      {
        kind: 'formula',
        name: 'Written down value method (WDV)',
        latex: 'D_t = B_{t-1} \\times r, \\qquad B_n = C\\,(1 - r)^n',
        meaning: 'Each year\'s charge is a fixed percentage r of the opening book (written down) value B, not of original cost. The charge starts large and shrinks geometrically; book value approaches zero but never lands, so the last stretch is settled by the sale proceeds.',
      },
      {
        kind: 'para',
        text: 'Choosing between them is a judgement about the pattern of benefit. Straight line suits assets that render uniform service — buildings, furniture, pipelines. Written down value suits assets that work hardest when young — vehicles, computers, machinery whose repairs mount as precision fades — because its falling charge offsets the rising repair bill, keeping the annual burden roughly level. Indian tax practice follows written down value for most blocks of assets, one reason it dominates local bookkeeping.',
      },
      {
        kind: 'example',
        title: 'Worked Example: One Machine, Two Methods',
        steps: [
          'Setup: machinery costing ₹100,000, life 10 years, no salvage. Depreciate at 10 per cent — on cost for straight line, on opening book value for written down value — for the first four years.',
          'Straight line: 10 per cent of ₹100,000 is ₹10,000 every year. After four years the total charged is ₹40,000 and the book value stands at ₹60,000.',
          'Written down value: year one charges ₹10,000 (10 per cent of 100,000), leaving ₹90,000. Year two charges ₹9,000, leaving ₹81,000. Year three charges ₹8,100, leaving ₹72,900. Year four charges ₹7,290, leaving ₹65,610.',
          'Compare: over the same four years SLM has charged ₹40,000 against WDV\'s ₹34,390 — WDV shelters early profit and charges more in the tail years.',
        ],
      },
      {
        kind: 'list',
        items: [
          'Straight line schedule — Year 1: depreciation ₹10,000, closing book value ₹90,000',
          'Straight line schedule — Year 2: depreciation ₹10,000, closing book value ₹80,000',
          'Straight line schedule — Year 3: depreciation ₹10,000, closing book value ₹70,000',
          'Straight line schedule — Year 4: depreciation ₹10,000, closing book value ₹60,000',
          'Written down value schedule — Year 1: depreciation ₹10,000, closing book value ₹90,000',
          'Written down value schedule — Year 2: depreciation ₹9,000, closing book value ₹81,000',
          'Written down value schedule — Year 3: depreciation ₹8,100, closing book value ₹72,900',
          'Written down value schedule — Year 4: depreciation ₹7,290, closing book value ₹65,610',
        ],
      },
      { kind: 'heading', text: 'Recording Depreciation and Disposals' },
      {
        kind: 'para',
        text: 'The charge can be recorded one of two ways. Under the asset (charging-off) method, depreciation is credited directly to the asset account, so Machinery itself shrinks every year to book value. Under the provision method — mandatory for companies — the asset sits permanently at cost and accumulated depreciation lives in a separate Provision for Depreciation account. The year-end entry has the same shape either way: Depreciation is debited and closed to profit and loss; only the credit target differs. The provision route keeps cost and cumulative charge visible on the ledger\'s face — machinery at cost, less accumulated depreciation, equals net block.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Annual Entries Both Ways',
        steps: [
          'Asset method: Depreciation A/c Dr ₹10,000; To Machinery A/c ₹10,000 — the machine account itself drops to ₹90,000. Close it: Profit and Loss A/c Dr ₹10,000; To Depreciation A/c ₹10,000.',
          'Provision method: Depreciation A/c Dr ₹10,000; To Provision for Depreciation A/c ₹10,000 — Machinery stays at ₹100,000 while the provision accumulates each year.',
          'Balance sheet effect: either route presents net book value ₹90,000.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example: Selling a Partly Depreciated Machine',
        steps: [
          'A machine costing ₹50,000 has run three full years under straight line at 10 per cent: the Provision for Depreciation holds ₹15,000, book value is ₹35,000, and it is sold on 31 March for ₹38,000.',
          'Entry: Bank A/c Dr ₹38,000; Provision for Depreciation A/c Dr ₹15,000; To Machinery A/c ₹50,000; To Profit on Sale of Machinery ₹3,000.',
          'Reading: cash plus accumulated provision (₹53,000) retires the ₹50,000 cost, and the ₹3,000 surplus is a gain to profit and loss; a ₹30,000 sale would have produced a loss on sale instead.',
        ],
      },
      {
        kind: 'para',
        text: 'A change in depreciation method is treated prospectively, as a change in accounting estimate rather than policy: switching methods is new information about how the asset is consumed, not a rewrite of history. The book value on the date of change becomes the de facto cost, spread over the remaining useful life under the new method, with no catch-up restating past years. If the ₹100,000 machine above has reached ₹65,610 after four years on WDV and straight line is now judged more faithful for its remaining six years, the annual charge becomes 65,610 divided by six, or ₹10,935, from this year forward.',
      },
      {
        kind: 'para',
        text: 'Depreciation has two siblings named for their assets. Depletion prices wasting natural resources — mines, wells, quarries — per unit extracted: (cost minus restoration and salvage) divided by estimated total units, times the year\'s offtake. Amortisation writes off intangible assets — patents, copyrights, software, leasehold premia — normally straight line over the shorter of legal and useful life, with an impairment test whenever value looks wounded. The idea is identical; only the asset\'s costume changes.',
      },
      { kind: 'heading', text: 'Provisions and Reserves' },
      {
        kind: 'para',
        text: 'A provision is a charge against profit for a known liability or expected loss whose exact amount is uncertain — the obligation exists, but measuring it needs estimation. Provision for doubtful debts anticipates the receivables that will not pay; provision for taxation estimates the year\'s tax charge; a warranty provision prices the repairs the law will demand on goods already sold. Being charges, provisions are debited to profit and loss before net profit is struck — made whether the year was profitable or not, and able to push a marginal year into loss.',
      },
      {
        kind: 'para',
        text: 'A reserve is an appropriation of profit — a slice of an already-computed net profit withheld from distribution. Reserves exist only where there are profits and a decision to withhold them. A general reserve bolsters the balance sheet for unnamed needs; a specific reserve earmarks a purpose such as dividend equalisation; a capital reserve (share premium, profit on revaluation) arises from non-operating events and cannot be distributed as dividend, while revenue reserves can. Reserve creation does not reduce the profit and loss account — it happens below that line.',
      },
      {
        kind: 'list',
        items: [
          'Nature — a provision is a charge against profit; a reserve is an appropriation of profit.',
          'Timing — provisions are debited before net profit is struck; reserves after it.',
          'Compulsion — provisions are made even in a loss year; reserves only from profits.',
          'Distribution — revenue reserves may fund dividends; provisions cannot.',
          'Purpose — a provision absorbs a known liability or expected loss; a reserve strengthens the financial position.',
          'Examples — doubtful debts, taxation, warranty provisions; general, dividend equalisation and capital reserves.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example: Provision for Doubtful Debts Across Two Years',
        steps: [
          'Year 1: during the year, ₹2,000 owed by a customer is written off — Bad Debts A/c Dr ₹2,000; To Debtors A/c ₹2,000 — and closed to profit and loss. Debtors stand at ₹80,000; the firm carries a 5 per cent provision of ₹4,000.',
          'Year 1 creation: Profit and Loss A/c Dr ₹4,000; To Provision for Doubtful Debts A/c ₹4,000. The balance sheet nets the debtors to ₹76,000.',
          'Year 2: debtors stand at ₹60,000, so the required provision is ₹3,000 — the existing ₹4,000 is excessive by ₹1,000.',
          'Year 2 write-back: Provision for Doubtful Debts A/c Dr ₹1,000; To Profit and Loss A/c ₹1,000. Created by debit, released by credit, never left stale.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, do not depreciate land — its life is indefinite. Second, never dress a provision up as a reserve: doubtful-debt provisions are compulsory charges, not prudence piggy banks. Third, secret reserves — deliberately understating assets or overstating liabilities to hide strength — are prohibited for companies because they make accounts untruthful. Fourth, a provision balance is not cash sitting somewhere; it is a deduction or a liability, and no bank account backs it.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Depreciation', def: 'Systematic allocation of a fixed asset\'s cost over its useful life, driven by wear and tear, time or obsolescence.' },
          { term: 'Depreciable amount', def: 'Cost minus expected salvage value; the total to be spread over the years.' },
          { term: 'Straight line method', def: 'Equal annual depreciation — depreciable amount over useful life, or a fixed percentage of cost.' },
          { term: 'Written down value method', def: 'A fixed percentage of each year\'s opening book value, giving a declining charge that never reaches zero.' },
          { term: 'Provision for Depreciation account', def: 'Accumulates depreciation credits while the asset account stays at cost.' },
          { term: 'Obsolescence', def: 'Loss of value from becoming outdated rather than worn out.' },
          { term: 'Provision', def: 'A charge against profit for a known liability or expected loss whose amount must be estimated.' },
          { term: 'Reserve', def: 'An appropriation of net profit withheld from distribution to strengthen the firm or earmark a use.' },
          { term: 'Secret reserve', def: 'Value deliberately hidden by understating assets or overstating liabilities; prohibited for companies.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which of these is NOT a cause of depreciation?',
            options: ['Wear and tear from use', 'Obsolescence by newer technology', 'Effluxion of time', 'Fluctuation in the asset\'s market price'],
            answer: 3,
            explain: 'Depreciation allocates cost over life; market swings never enter it.',
          },
          {
            q: 'An asset costs ₹200,000 and is depreciated at 10 per cent on the written down value basis. The second year\'s depreciation is:',
            options: ['₹20,000', '₹18,000', '₹16,200', '₹19,000'],
            answer: 1,
            explain: 'Year one charges ₹20,000 leaving ₹180,000; year two charges 10 per cent of that — ₹18,000.',
          },
          {
            q: 'Which statement about provisions versus reserves is correct?',
            options: ['Both are created only when the firm earns a profit', 'A provision is a charge against profit while a reserve is an appropriation of profit', 'Reserves must be created even in a loss year, provisions need not be', 'A provision can be distributed as dividend but a reserve cannot'],
            answer: 1,
            explain: 'Provisions are debited before net profit is struck and are compulsory; reserves are carved from profit after it is computed.',
          },
          {
            q: 'A machine costs ₹80,000 with salvage value ₹8,000 and a life of 8 years. Annual straight line depreciation is:',
            options: ['₹10,000', '₹9,000', '₹8,000', '₹11,000'],
            answer: 1,
            explain: 'Depreciable amount is ₹80,000 minus ₹8,000, or ₹72,000, spread over 8 years — ₹9,000 per year.',
          },
          {
            q: 'A firm switches depreciation methods for a partly used asset. Under the prospective treatment, the new annual charge is computed by:',
            options: ['Restating all past years and catching up the cumulative difference', 'Spreading the current book value over the remaining useful life under the new method', 'Applying the new rate to the original cost from year one', 'Ignoring the change until the asset is sold'],
            answer: 1,
            explain: 'The change is a change in estimate: book value on the switch date becomes the new base for the remaining life, with no rewrite of history.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'This lesson assumes the debit-and-credit fluency of Double-Entry Bookkeeping: The Logic Behind Every Ledger and the accrual matching idea from The Accounting Cycle: Accruals, Adjustments and Closing the Books. Where the numbers land on the balance sheet is shown in Reading Financial Statements, and the revaluation of assets in Partnership Accounts II picks these tools up again when a new partner arrives.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Depreciation allocates cost over useful life to match cost with revenue; a compulsory charge, never an optional appropriation.',
          'Depreciable amount = cost minus salvage; life and salvage are estimates revisited each year end.',
          'Straight line charges an equal sum yearly; written down value charges a fixed percentage of a shrinking base — heavy early, light late.',
          'On the ₹100,000 machine at 10 per cent, four years cost ₹40,000 under SLM but only ₹34,390 under WDV.',
          'Record depreciation straight to the asset account or into a Provision for Depreciation account; companies use the provision route.',
          'On disposal, compare proceeds plus accumulated depreciation with cost: the difference is profit or loss on sale.',
          'A method change is prospective: book value becomes the new cost, spread over the remaining life.',
          'Depletion prices extracted resources per unit; amortisation writes off intangibles over the shorter of legal and useful life.',
          'Provisions are compulsory charges for known-but-uncertain liabilities; reserves are discretionary appropriations, and secret reserves are prohibited for companies.',
        ],
      },
    ],
  },
  {
    id: 'acct-bank-reconciliation',
    title: 'Bank Reconciliation: Explaining Every Difference',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Cash Control',
    tier: 'core',
    concepts: [
      'Cash book versus pass book: mirror-image records',
      'Timing differences: cheques in transit in both directions',
      'Bank-initiated entries: charges, direct credits, standing orders',
      'Plus and minus logic from either starting balance',
      'Favourable balance versus overdraft sign flips',
      'Amending the cash book before reconciling',
      'Dishonoured cheques and their double record',
    ],
    words: 2317,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Month end. The cash book\'s bank column says the account holds ₹40,000; the bank statement says ₹33,900. Both figures are right. Nothing has been stolen, no one has blundered, and yet the two records of the same account disagree by ₹6,100 — because they were written by two different people at two different moments, each recording events the other has not yet seen. Bank reconciliation is the discipline of listing, valuing and explaining every one of those differences so that a single question can be answered in minutes: where did the firm\'s money actually go? This lesson classifies the causes, builds the plus-and-minus logic that drives every statement, works a full reconciliation and its mirror-image overdraft case, and shows when the correct response is not a statement at all but a corrected cash book.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Cash is the most liquid asset a firm owns and therefore the most tempting target for fraud and the most common victim of error. A monthly reconciliation is the cheapest audit in existence: it catches forgotten standing orders, bank charges, customer cheques that bounced, deposits credited to the wrong account, and the classic defalcation in which cheques are drawn and the cash book is quietly updated later. Lenders and auditors treat an unreconciled bank account as a red flag on its own.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two books describe one account. The cash book — introduced in the double-entry lesson as the firm\'s journal of cash and bank movements — records transactions when the firm learns of them. The pass book (bank statement) is the bank\'s own ledger, written when the bank processes the item. They are mirror images: money deposited is a debit in the cash book\'s bank column but a credit in the bank\'s books, because the bank owes the depositor that balance; the same inversion applies to every withdrawal. A favourable balance is therefore a debit in the cash book and a credit on the pass book, while an overdraft — the account running negative — is a credit in the cash book and a debit in the statement. Keep the mirror rule in view and half the confusion of reconciliation dissolves on contact.',
      },
      {
        kind: 'para',
        text: 'Differences arise for three broad reasons. First, timing: a cheque the firm issues today crosses the counter, spends days in the postal system and is presented to the bank only next week — the cash book has moved, the bank has not. The same lag applies to deposits: money paid in late on the last day may not be cleared and credited until the next. Second, knowledge: the bank does things the firm learns about only when the statement arrives — deducting its charges and interest, crediting interest earned, collecting a customer\'s direct electronic transfer or an outgoing dividend, paying an insurance premium under a standing order, bouncing a customer\'s cheque marked refer to drawer. The statement knows first; the cash book must catch up. Third, error: either side can mispost, cast wrong, or credit Mr Sharma when it meant Mr Verma — and errors are found precisely because the reconciliation forces a line-by-line comparison.',
      },
      {
        kind: 'list',
        items: [
          'Cheques issued but not yet presented for payment — cash book already credited, bank not yet debited.',
          'Cheques deposited but not yet collected or cleared — cash book already debited, bank not yet credited.',
          'Bank charges, interest and fees debited in the pass book only.',
          'Direct credits — interest allowed, dividends and direct deposits from customers — credited in the pass book only.',
          'Cheques received from customers and dishonoured — debited in the pass book, unknown to the cash book until reported.',
          'Standing orders and direct debits — rent, insurance, loan instalments — paid by the bank under prior instruction.',
          'Errors of omission or commission by either the firm or the bank.',
        ],
      },
      {
        kind: 'formula',
        name: 'The reconciliation identity',
        latex: '\\text{Pass book balance} = \\text{Cash book balance} + \\text{items the bank recorded first as credits} - \\text{items the bank recorded first as debits} \\;\\pm\\; \\text{timing adjustments}',
        meaning: 'Starting from the cash book\'s favourable (debit) balance, add everything that increases the bank\'s version of the account and deduct everything that decreases it — items in transit and bank-only entries alike — to arrive at the balance the statement must show. Start from the pass book instead and every sign flips.',
      },
      {
        kind: 'para',
        text: 'The plus-and-minus table is the working heart of the exercise, and it is worth memorising rather than re-deriving under pressure. Starting from a favourable balance as per the cash book, add: cheques issued but not presented (the bank will reduce the balance later, so the true balance is higher than the cash book shows); amounts directly credited by the bank such as interest, dividends and customers\' direct transfers; and any bank error that wrongly debited the firm. Deduct: cheques deposited but not yet collected; bank charges and interest debited; payments made under standing orders; dishonoured cheques of customers; and any bank error that wrongly credited the firm. Starting from the pass book balance, every one of these directions reverses — presented-but-unrecorded cheques get deducted, uncollected deposits get added, and so on.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Full Statement from the Cash Book Side',
        steps: [
          'On 31 March the cash book (bank column) shows a debit balance of ₹40,000. The statement is awaited, and these differences are identified.',
          'Cheques issued to suppliers totalling ₹12,000 have not been presented — add.',
          'Cheques deposited totalling ₹18,000 have not been collected — deduct.',
          'Bank charges of ₹300 appear only in the statement — deduct.',
          'Interest of ₹900 credited by the bank appears only in the statement — add.',
          'A customer paid ₹5,000 directly into the firm\'s account by electronic transfer; the firm learns of it from the statement — add.',
          'An insurance premium of ₹2,200 was paid by the bank under a standing order; the firm had not recorded it — deduct.',
          'A customer\'s cheque for ₹3,500 was returned dishonoured and debited by the bank — deduct.',
          'Statement: 40,000 + 12,000 - 18,000 - 300 + 900 + 5,000 - 2,200 - 3,500 = ₹33,900, the credit balance the pass book must show on 31 March.',
        ],
      },
      {
        kind: 'para',
        text: 'Overdrafts flip the arithmetic because the starting balance is negative. When the cash book shows a credit balance — an overdraft — its figure is stated as a negative number, so items that would normally be added now make the overdraft smaller and items normally deducted make it larger. Suppose the cash book shows an overdraft of ₹10,000, cheques of ₹4,000 have been issued but not presented, and deposits of ₹2,500 are uncollected: the pass book overdraft is 10,000 minus 4,000 plus 2,500, or ₹8,500. A practical guard: write the opening balance with its sign, treat every adjustment as a signed number, and let the arithmetic produce the answer — never memorise a second table for overdrafts.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The Overdraft Case',
        steps: [
          'Cash book shows an overdraft (credit balance) of ₹10,000 on 31 March.',
          'Cheques of ₹4,000 issued but not presented will reduce the overdraft when honoured — treat as plus 4,000.',
          'Cheques of ₹2,500 deposited but not collected will increase the overdraft when processed — treat as minus 2,500.',
          'Pass book overdraft = -10,000 + 4,000 - 2,500 = ₹8,500 overdrawn (a debit balance of ₹8,500 on the statement).',
        ],
      },
      { kind: 'heading', text: 'The Amended Cash Book Method' },
      {
        kind: 'para',
        text: 'A reconciliation statement is the right tool for pure timing differences, but bank-initiated entries are not timing items at all — they are transactions the firm has genuinely failed to record, and the cash book is simply wrong until it records them. The disciplined two-step method handles this. Step one: amend the cash book for every item the statement reveals that the firm should have booked — bank charges, direct credits, standing orders, dishonoured cheques, correcting the firm\'s own errors — arriving at an adjusted balance. Step two: prepare a reconciliation statement that deals only with the genuine timing items, cheques in transit in both directions. The result must equal the pass book balance exactly, and a mismatch means something was mis-sorted between the two steps.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Same Data, Amended Cash Book Route',
        steps: [
          'Amend the ₹40,000 cash book balance for the statement-only items: deduct bank charges ₹300; add interest ₹900; add the customer\'s direct transfer ₹5,000; deduct the standing order ₹2,200; deduct the dishonoured cheque ₹3,500 — the cash book restates the balance at 40,000 - 300 + 900 + 5,000 - 2,200 - 3,500 = ₹39,900.',
          'Note the entry the dishonour requires in the books: Customer A/c Dr ₹3,500; To Bank A/c ₹3,500 — the debt springs back to life, and the bank column absorbs the reversal.',
          'Reconcile the amended balance for timing items only: 39,900 + 12,000 (issued, not presented) - 18,000 (deposited, not collected) = ₹33,900.',
          'Cross-check: both routes end at the identical ₹33,900 — the statement method in one line, the amended-book method in two, and the agreement of the two is itself the proof of the work.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, never record timing items in the cash book — a cheque in transit is not an unrecorded transaction, and booking it double-counts the money when it clears. Second, know your starting point: adjustments added from the cash-book side are deducted from the pass-book side, and vice versa. Third, a dishonoured customer cheque is not merely a bank matter — the receivable must be restored by debiting the customer. Fourth, with overdrafts, signs invert; a surprising number of errors trace to adding where the opening balance was negative. Finally, an unreconciled difference that will not resolve is not rounding — chase it to an error or a missing item before signing anything.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Cash book (bank column)', def: 'The firm\'s own record of its bank account, written from the firm\'s knowledge of transactions.' },
          { term: 'Pass book / bank statement', def: 'The bank\'s record of the same account, a mirror image in which deposits are credits and withdrawals are debits.' },
          { term: 'Cheque in transit', def: 'A cheque issued or deposited that the counterparty bank has not yet processed; the classic timing difference.' },
          { term: 'Standing order', def: 'An instruction empowering the bank to pay a recurring sum automatically; known to the statement before the cash book.' },
          { term: 'Direct credit', def: 'Money the bank credits on the firm\'s behalf — interest, dividends, a customer\'s electronic transfer — before the firm records it.' },
          { term: 'Dishonour of a cheque', def: 'The bank\'s refusal to pay a deposited cheque, debiting the account back and reviving the customer\'s debt.' },
          { term: 'Favourable balance', def: 'A positive bank balance: debit in the cash book, credit in the pass book.' },
          { term: 'Bank overdraft', def: 'A negative balance: credit in the cash book, debit on the statement — the case where every reconciliation sign inverts.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Starting from a favourable cash book balance, cheques issued but not yet presented are:',
            options: ['Deducted, because the bank has already paid them', 'Added, because the true bank balance is higher than the cash book shows', 'Ignored, because the cash book is authoritative', 'Deducted, because they are the firm\'s payments'],
            answer: 1,
            explain: 'The cash book has already credited these cheques; until the bank pays them, the actual account holds more than the cash book records — so they raise the cash book figure toward the statement figure.',
          },
          {
            q: 'A customer\'s cheque for ₹3,500 is returned dishonoured and appears in the statement only. In the firm\'s books this requires:',
            options: ['No entry until the customer pays again', 'Debit Bank, credit Customer', 'Debit Customer, credit Bank', 'Debit Customer, credit Bad Debts'],
            answer: 2,
            explain: 'The bank reversal must be taken out of the bank column, and the receivable comes back on the books: debit the customer, credit bank.',
          },
          {
            q: 'Which item belongs in the AMENDED cash book rather than in the reconciliation statement?',
            options: ['Cheques deposited but not collected', 'Cheques issued but not presented', 'Bank charges debited by the bank', 'A cheque posted by the bank to another customer\'s account in error'],
            answer: 2,
            explain: 'Bank charges are a real transaction the firm failed to record — the cash book itself must be corrected. The others are timing differences or the bank\'s error to reverse.',
          },
          {
            q: 'The cash book shows an overdraft of ₹10,000. Cheques of ₹4,000 are unpresented and deposits of ₹2,500 are uncollected. The pass book overdraft is:',
            options: ['₹16,500', '₹8,500', '₹11,500', '₹12,500'],
            answer: 1,
            explain: 'Unpresented cheques shrink the overdraft (add 4,000); uncollected deposits deepen it (subtract 2,500): -10,000 + 4,000 - 2,500 = -8,500.',
          },
          {
            q: 'In the pass book, a customer\'s direct deposit into the firm\'s account appears as a:',
            options: ['Debit, because it reduces what the bank owes', 'Credit, because the bank\'s debt to the depositor has grown', 'Debit, because cash has physically entered the bank', 'Memorandum entry only'],
            answer: 1,
            explain: 'The pass book is the bank\'s ledger: money the bank now owes the firm is a credit — the mirror image of the debit the firm will place in its cash book.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'You need the cash book mechanics and the debit-credit mirror from Double-Entry Bookkeeping: The Logic Behind Every Ledger before this lesson, and the adjusting-entry mindset of The Accounting Cycle: Accruals, Adjustments and Closing the Books for the amended cash book step. The provision concept met here resurfaces in Depreciation, Provisions and Reserves, and the reconciled balance flows into the statements covered in Reading Financial Statements.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Cash book and pass book record the same account as mirror images: deposits are debits in one and credits in the other.',
          'Differences come from timing (cheques in transit both ways), knowledge (bank-only entries), and outright error.',
          'From a favourable cash book balance: add unpresented cheques and direct credits; deduct uncollected deposits, charges, standing orders and dishonoured cheques.',
          'From the pass book side, every adjustment direction reverses.',
          'Overdrafts are negative balances — work with signs rather than memorising a second table.',
          'Bank-only items are not timing items: amend the cash book for charges, direct credits, standing orders and dishonours, then reconcile the rest.',
          'A dishonoured customer cheque revives the receivable: debit Customer, credit Bank.',
          'The worked case: ₹40,000 cash book balance reconciles to a ₹33,900 pass book credit, or to an amended book of ₹39,900 plus timing items of +12,000 and -18,000.',
        ],
      },
    ],
  },
]
