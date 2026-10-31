/**
 * Knowledge Universe — Financial Accounting — Chapter 03: Special Transactions & Computerized Systems
 * 2 lessons · ~4,148 words
 * field: Accounting
 * legacy sources: x15-accounting.ts, x45-exam-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Special Transactions, Computerized Accounting]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 acct-computerized-accounting-systems — Computerized Accounting: From Voucher to Report
 *   03.2 acct-special-transactions — Bills of Exchange, Consignment and Special Transactions
 */
import type { KnowledgeTopic } from '../../types'

export const financialAccountingCh03: KnowledgeTopic[] = [
  {
    id: 'acct-computerized-accounting-systems',
    title: 'Computerized Accounting: From Voucher to Report',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Computerized Accounting',
    tier: 'core',
    concepts: [
      'Five components: data, people, procedures, hardware, software',
      'The chart of accounts and account grouping',
      'Vouchers as the carriers of every transaction',
      'One entry updates ledgers, trial balance and reports',
      'Spreadsheets versus dedicated accounting software',
      'The audit trail and system controls',
    ],
    words: 1723,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A manual accounting system lives in books: a journal for day-to-day entries, ledgers to sort them, and a steady hand to add everything up at the end of the period. A computerized accounting system keeps the same logic but moves the labor to machines — the accountant describes a transaction once, and the system classifies it, posts it to every affected ledger, and keeps the totals current for the moment someone asks. That single change, describing a transaction once instead of writing it three times, is the whole difference in spirit between the two systems; everything else is machinery.',
      },
      {
        kind: 'para',
        text: 'This lesson walks the machinery end to end. It names the five components every computerized accounting system needs, explains how the chart of accounts organizes everything the system knows, follows a transaction from its voucher through the ledgers to the final reports, and closes with the controls that keep a system trustworthy. The manual bookkeeping cycle itself — debits and credits, day books, ledger posting by hand — is taught in the earlier lessons of this book; here we assume those mechanics and study the system that automates them.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Almost every organization you will ever work for, audit or invest in runs its books on software, and the examinable skill is knowing what such a system must contain to be correct: which components, which documents, which reports, and which controls. The same knowledge explains the news — when a company restates results or an auditor resigns, the failure is usually in the components and controls this lesson teaches.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Five Components of the System' },
      {
        kind: 'para',
        text: 'A computerized accounting system is not just a program. The standard description lists five components that must work together. Data is the raw material: the transactions, each with its date, parties, amounts and descriptions, waiting to be classified. People are the operators, accountants, managers and auditors who enter, approve and use the data — the component most often forgotten, and the one that decides whether the rest works honestly. Procedures are the instructions, both the automated steps the software performs and the manual routines the organization follows around it: who may enter what, who approves, who reconciles. Hardware is the physical layer of machines, storage and networks. Software is the accounting package itself, the layer that actually classifies and posts.',
      },
      {
        kind: 'para',
        text: 'Some treatments add a sixth component — connectivity or communications — recognizing that modern systems run across networks, sync branch data to a head office and expose dashboards in the browser. The five-component list is the core answer; connectivity is the honest extension. What matters conceptually is that no single component can carry the system: perfect software with untrained people and no procedures produces wrong books as reliably as bad code does. Garbage in, garbage out is a systems proverb, not a software one.',
      },
      { kind: 'heading', text: 'The Chart of Accounts: Teaching the System Your Language' },
      {
        kind: 'para',
        text: 'Before any transaction flows, the system must be told what kinds of things exist to be tracked. The chart of accounts is that master list: every account the organization uses, grouped under the accounting classifications — assets, liabilities, capital, revenues and expenses — and usually arranged hierarchically. A retail business might group all sales under one revenue heading with separate child accounts for counter sales, online sales and wholesale, so a manager can see either the total or the split without maintaining two systems.',
      },
      {
        kind: 'para',
        text: 'Two design rules carry most of the quality. First, grouping must follow the reporting the organization actually needs: the trial balance and financial statements are assembled from these groups, so a badly designed chart means a badly shaped report no matter how carefully transactions are entered. Second, the structure must be stable — accounts are added deliberately, not improvised, because every historical entry points at an account that must continue to exist and mean the same thing. Creating accounts is therefore a configuration task with lasting consequences, which is why good systems gate it behind administrator rights.',
      },
      { kind: 'heading', text: 'Vouchers: How a Transaction Enters the System' },
      {
        kind: 'para',
        text: 'Data entry in a computerized accounting system runs through vouchers. A voucher is a documented statement of one transaction — the evidence bundle and the entry form in one — and each type carries a specific pair of effects. A payment voucher records money going out: cash paid to a supplier, a bill settled, wages paid. A receipt voucher records money coming in. A contra voucher records transfers between two accounts of the same kind, most commonly cash to bank and back. A journal voucher records everything else: corrections, accruals, depreciation-style adjustments — the non-cash internal entries. Sales and purchase vouchers record the credit transactions that create receivables and payables.',
      },
      {
        kind: 'para',
        text: 'Entering a voucher is a guided classification exercise. The operator names the parties, the amount and the date; the system presents the relevant ledger accounts; and the debit-credit balance of the entry is enforced before the voucher can be saved. Once saved, the posting is automatic and instant: the affected ledger accounts update, the running cash or bank balance moves, and the trial balance — the list of every ledger balance — is already correct before anyone opens a report. This is the deepest difference from the manual system: there is no posting step left to forget, because classification and posting are the same act.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Start with a transaction: on March 4 a shop buys goods worth 40,000 from a supplier on credit, terms thirty days.',
          'Classify it: goods purchased on credit is a purchase voucher — no cash moves yet, but a payable is born.',
          'Enter the voucher: debit the Purchases account 40,000; credit the supplier\u2019s personal account (a liability) 40,000; attach the supplier\u2019s bill as the supporting document the voucher references.',
          'Watch the automatic effects: the Purchases ledger rises by 40,000, the supplier account shows a credit balance of 40,000, and the trial balance still balances — the two sides were entered together.',
          'Generate a report: the creditor (payables) list, produced on demand, now shows this supplier among the amounts owed, with the due date ageing from March 4.',
          'Close the loop when money moves: on April 3 a payment voucher debits the supplier account and credits the bank — the payable falls to zero, and the same audit trail shows both vouchers and the bill that started it all.',
        ],
      },
      { kind: 'heading', text: 'Reports on Demand, and What They Cost' },
      {
        kind: 'para',
        text: 'Because every voucher has already been classified and posted, the classic period-end reports become queries rather than projects. The trial balance exists continuously. The income statement and balance sheet for any date range assemble from the account groups in the chart of accounts. Day books — the sales, purchases, cash and journal registers — are just filtered views of the voucher stream. Accuracy improves for a second reason: arithmetic errors, the manual system\u2019s chronic disease, vanish from the totals, though not from the inputs — a wrong amount typed correctly still posts wrong.',
      },
      {
        kind: 'para',
        text: 'The honest accounting of costs: software and hardware carry real money, staff need training before speed arrives, and a poorly designed chart of accounts or a sloppy voucher discipline can make the system faster at producing the wrong picture. Security replaces the locked bookroom: access rights, passwords, backups and validation rules are the new internal controls. The audit trail is the system\u2019s gift to trust — every entry carries its author, timestamp and source document, so an auditor can walk any figure backward to its voucher. That walk, done by hand in the manual era, is now a query; but only if the organization kept the discipline this lesson described.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'computerized accounting system', def: 'The complete arrangement — data, people, procedures, hardware and software — that records, classifies, posts and reports transactions electronically.' },
          { term: 'chart of accounts', def: 'The master list of every account, grouped under assets, liabilities, capital, revenues and expenses, that defines what the system can track.' },
          { term: 'voucher', def: 'The documented entry form for one transaction — payment, receipt, contra, journal, sales or purchase — carrying its evidence and its debit-credit classification.' },
          { term: 'trial balance', def: 'The running list of all ledger balances; in a computerized system it is continuously current rather than period-end work.' },
          { term: 'audit trail', def: 'The chain from every reported figure back through its ledger and voucher to its source document, complete with author and timestamp.' },
          { term: 'data validation', def: 'The software checks that reject impossible entries — unbalanced vouchers, invalid accounts, impossible dates — before they enter the books.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which list correctly names the components of a computerized accounting system?',
            options: ['Data, report, ledger, hardware, software', 'Data, people, procedures, hardware, software', 'Journal, ledger, trial balance, people, software', 'Input, output, memory, people, procedures'],
            answer: 1,
            explain: 'The five components are data, people, procedures, hardware and software; "report" and "ledger" are outputs the system produces, not components.',
          },
          {
            q: 'A shop pays its electricity bill from the cash box. Which voucher type records it?',
            options: ['A receipt voucher', 'A contra voucher', 'A payment voucher', 'A journal voucher'],
            answer: 2,
            explain: 'Money going out is a payment voucher; receipt records inflows, contra moves money between accounts of the same kind, and journal carries non-cash adjustments.',
          },
          {
            q: 'What happens to the trial balance the moment a valid voucher is saved?',
            options: ['It updates immediately, because classification and posting are one act', 'It waits for the accountant to post the entry to the ledgers', 'It refreshes only at the financial year end', 'It must be re-added manually from the day books'],
            answer: 0,
            explain: 'Saving a balanced voucher posts it to every affected ledger automatically, so the trial balance is current continuously — there is no separate posting step to forget.',
          },
          {
            q: 'An auditor wants to verify one figure in the balance sheet. What does the system let them do that the manual system made painfully slow?',
            options: ['Change the figure to match the invoice', 'Walk the figure back through ledger and voucher to the source document', 'Re-enter the whole year\u2019s vouchers', 'Ask the software to recompute the tax'],
            answer: 1,
            explain: 'The audit trail links every figure to its voucher and source document; walking it backward is the verification path, and computerization turns a day\u2019s paper-chase into a query.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read The Accounting Cycle lessons for the manual mechanics this system automates, then Bank Reconciliation for the classic control exercise, and Reading Financial Statements to see the reports a system produces assembled into a story. The auditing lessons show what happens when the trail this lesson described is broken on purpose.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'acct-special-transactions',
    title: 'Bills of Exchange, Consignment and Special Transactions',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Special Transactions',
    tier: 'advanced',
    concepts: [
      'Bill of exchange: drawer, drawee and payee',
      'Discounting, endorsement and days of grace',
      'Dishonour, noting charges and renewal',
      'Retirement of a bill and rebate',
      'Consignor and consignee: agency, not sale',
      'Account sales, del credere and commissions',
      'Valuing closing stock and abnormal loss on consignment',
      'Sale on approval and goods in transit',
    ],
    words: 2446,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Some transactions refuse to behave like ordinary sales. A trader who accepts a three-month bill has been paid and not paid at once; a manufacturer whose goods sit in an agent\'s distant warehouse has sold nothing yet owns inventory worth measuring; a firm that ships machinery on approval has recognised no revenue even though the goods have left the building. Each breaks the naive equation goods-out-equals-sale. This lesson assembles the toolkit: the full life of a bill of exchange — drawing, acceptance, discounting, endorsement, dishonour, renewal and retirement, each with its journal entry — then consignment accounting with del credere commission and unsold-stock valuation, closing with sale on approval and ownership in transit.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Trade credit still travels largely as negotiable paper. Firms have been financed — and bankrupted — on bills: discount one and you borrow against a customer\'s promise; let one dishonour and a chain of endorsement unwinds in reverse. Consignment is how manufacturers reach markets they cannot staff — and booking a dispatch as a sale instead of a consignment turns an inventory loan into fictitious revenue.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Bills of Exchange' },
      {
        kind: 'para',
        text: 'A bill of exchange is an unconditional written order: the drawer tells the drawee to pay a certain sum to a payee, on a fixed date or after a stated period. Sold goods on credit, A draws on B; B signifies acceptance by signing across the bill, becoming the acceptor and primarily liable; the bill is now a bills receivable in A\'s books and a bills payable in B\'s. Its cousin, the promissory note, has two parties: the maker unconditionally promises to pay the payee — no acceptance step, because the debtor wrote the instrument itself. A usance bill matures at its due date plus three days of grace — a three-month bill dated 1 April falls due on 4 July — while bills payable on demand take no grace.',
      },
      {
        kind: 'para',
        text: 'Between acceptance and maturity the holder has three choices. Retain the bill and present it at maturity. Discount it with a bank, which pays face value minus a discount charge for the unexpired period and becomes the holder — the drawer has borrowed against the bill, and if it dishonours the bank reclaims the full amount. Or endorse it — transfer it by signature to a creditor in settlement of a debt, the endorser remaining liable if the bill is dishonoured. Whichever route, the entries live in two sets of books at once: every bills receivable is someone\'s bills payable.',
      },
      {
        kind: 'formula',
        name: 'Bank discount on a bill',
        latex: '\\text{Discount} = F \\times r \\times \\frac{\\text{unexpired months}}{12}',
        meaning: 'The bank\'s charge equals face value times the discount rate times the fraction of a year still to run. On a ₹30,000 three-month bill discounted immediately at 12 per cent per annum: 30,000 × 12 per cent × 3/12 = ₹900, so the drawer receives ₹29,100 today for a promise worth ₹30,000 in three months.',
      },
      {
        kind: 'example',
        title: 'Worked Chain: Draw, Discount, Dishonour — and the Fallout',
        steps: [
          '1 April: A sells goods to B and draws a three-month bill for ₹30,000, which B accepts. A\'s books: Bills Receivable A/c Dr ₹30,000; To B ₹30,000. (B\'s books mirror: A A/c Dr ₹30,000; To Bills Payable A/c ₹30,000.)',
          'Same day: A discounts the bill at its bank at 12 per cent per annum. Bank A/c Dr ₹29,100; Discount A/c Dr ₹900; To Bills Receivable A/c ₹30,000 — the discount is an expense of A.',
          '4 July (due date): the bill is dishonoured — B cannot pay. The bank, now the holder, reclaims the full amount plus ₹150 of noting charges paid to have the dishonour certified: B A/c Dr ₹31,150; To Bank A/c ₹31,150. The entire debt revives, larger by the noting charges recoverable from the acceptor.',
          'Noting charges exist because proof matters: a notary\'s certificate of dishonour protects every party\'s recourse rights.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Chain Continued: Renewal and Retirement',
        steps: [
          'B, unable to pay on 4 July, negotiates a renewal: part payment now, a new two-month bill for ₹20,000, and interest at 12 per cent per annum on the rescheduled portion.',
          'B pays ₹11,150 cash (₹10,000 of the debt plus ₹150 noting) and interest of ₹400 (20,000 × 12 per cent × 2/12): Bank A/c Dr ₹11,550; To B ₹11,550.',
          'The new bill is drawn and accepted: Bills Receivable A/c Dr ₹20,000; To B A/c ₹20,000 — due two months later, plus three days of grace.',
          'One month early, B retires the bill — pays ahead of maturity — earning a rebate, in substance interest for the unexpired month: 20,000 × 12 per cent × 1/12 = ₹200. A\'s books: Bank A/c Dr ₹19,800; Rebate on Bills A/c Dr ₹200; To Bills Receivable A/c ₹20,000. The rebate is an expense for holder A, income for acceptor B (mirror: Bills Payable Dr ₹20,000; To Bank ₹19,800; To Rebate Received ₹200).',
        ],
      },
      {
        kind: 'example',
        title: 'The Endorsement Route',
        steps: [
          'Had A, instead of discounting, endorsed the ₹30,000 bill to its creditor C in settlement of a debt: C A/c Dr ₹30,000; To Bills Receivable A/c ₹30,000.',
          'On dishonour, liability reverses to the endorser with noting charges: B A/c Dr ₹30,150; To C A/c ₹30,150 — A owes C the amount plus charges, now.',
          'The moral: the drawer\'s exposure survives until honour — a discounted or endorsed bill is financing obtained, not risk retired.',
        ],
      },
      { kind: 'heading', text: 'Consignment' },
      {
        kind: 'para',
        text: 'Consignment is agency dressed as trade. The consignor ships goods to a consignee who sells them on the consignor\'s behalf and account: ownership never leaves the consignor until the consignee sells, revenue is recognised only on that sale, and the consignee earns commission — never a trading margin. The paperwork mirrors this: a proforma invoice accompanies the goods (invoice in form, advice in substance — quantity and a nominal price, no sale having happened), and at period ends the consignee sends an account sales — sales, prices, expenses, commission due and the balance to remit. Advances to the consignee are set off before remittance.',
      },
      {
        kind: 'para',
        text: 'Commission comes in flavours that shift risk. Ordinary commission is a percentage of sales. Del credere commission is extra pay for a consignee who guarantees collection: once agreed, bad debts on the credit sales the consignee made become the consignee\'s loss — the consignor has bought credit insurance from its own agent. Over-riding commission rewards agents supervising other agents in a territory. Normal loss — the evaporation, leakage and handling shrinkage inherent in the trade — is not recorded separately: the same total cost simply spreads over fewer surviving units, so unit cost rises. Abnormal loss — fire, theft, abnormal breakage — is a separate misfortune: valued like unsold stock (proportionate cost to the point of loss), set off against any insurance claim, the residue to profit and loss.',
      },
      {
        kind: 'formula',
        name: 'Closing stock on consignment',
        latex: '\\text{Stock value} = (\\text{cost to consignor} + \\text{non-recurring expenses}) \\times \\frac{\\text{unsold units}}{\\text{units consigned}}',
        meaning: 'Unsold goods carry their proportionate share of everything spent to make them sale-ready at the consignee\'s warehouse: consignor\'s cost plus freight and insurance, plus the consignee\'s unloading and cartage (non-recurring). Recurring costs after arrival — godown rent, selling expenses — are excluded; where normal loss exists, the denominator shrinks to the good units.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Consignment Round Trip',
        steps: [
          'A consigns 100 machines costing ₹500 each (₹50,000) to B, paying ₹4,000 freight. B pays ₹2,000 unloading (non-recurring) and ₹3,000 of godown rent and selling costs (recurring). B sells 75 machines at ₹800 (₹60,000); 5 are destroyed by fire; 20 are unsold. Commission: 5 per cent on sales plus 2 per cent del credere.',
          'Valuations — sale-ready cost: 50,000 + 4,000 + 2,000 = ₹56,000. Abnormal loss: 56,000 × 5/100 = ₹2,800. Closing stock: 56,000 × 20/100 = ₹11,200. Commission: 60,000 × 7 per cent = ₹4,200.',
          'Consignor\'s entries — Consignment A/c Dr ₹50,000; To Goods Sent on Consignment A/c ₹50,000. Consignment A/c Dr ₹4,000; To Bank A/c (freight). Consignee A/c Dr ₹60,000; To Consignment A/c (sales). Consignment A/c Dr ₹9,200; To Consignee A/c (₹5,000 expenses plus ₹4,200 commission).',
          'Abnormal loss: Abnormal Loss A/c Dr ₹2,800; To Consignment A/c ₹2,800; and with the insurer admitting ₹2,500: Insurance Company A/c Dr ₹2,500; Profit and Loss A/c Dr ₹300; To Abnormal Loss A/c ₹2,800.',
          'Closing stock: Consignment Stock A/c Dr ₹11,200; To Consignment A/c ₹11,200. Profit on consignment: Consignment A/c Dr ₹10,800; To Profit and Loss A/c ₹10,800.',
          'Remittance: B sends 60,000 less 5,000 less 4,200 = ₹50,800 — Bank A/c Dr ₹50,800; To Consignee A/c ₹50,800.',
        ],
      },
      {
        kind: 'list',
        items: [
          'Consignment account, debit side — goods consigned ₹50,000; freight ₹4,000; consignee\'s expenses ₹5,000; commission ₹4,200; total ₹63,200.',
          'Consignment account, credit side — sales ₹60,000; abnormal loss ₹2,800; closing stock ₹11,200; total ₹74,000.',
          'Balancing figure — profit on consignment ₹10,800, carried to profit and loss.',
          'Consignee\'s account — debits ₹60,000 (sales); credits ₹9,200 (expenses and commission) and ₹50,800 (remittance); closes to nil.',
        ],
      },
      { kind: 'heading', text: 'Sale on Approval and Goods in Transit' },
      {
        kind: 'para',
        text: 'Goods sent on approval (on sale or return) sit in the same ambiguous territory: physically with the customer, legally still the seller\'s. No revenue is recognised when the goods ship; ownership and recognition pass only on approval, or when the approval period expires without rejection. Until then the goods remain the seller\'s inventory — at cost or lower net realisable value, even in someone else\'s showroom — and dispatch entries are at most memorandum. At each period end, bring the unapproved goods back into closing stock at cost.',
      },
      {
        kind: 'para',
        text: 'Goods in transit raise the same question at shipment: whose stock is on the truck? The answer is in the delivery terms. Free on board (FOB) at the shipping point transfers ownership and risk to the buyer when the goods are loaded — the goods in transit are the buyer\'s inventory and purchases. FOB destination, and cost-insurance-freight (CIF) contracts in their usual form, keep ownership with the seller until arrival. The accounting simply follows the contract: find the moment risk changed hands, and book the purchase, the sale and the inventory on the correct side of it.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, discounting a bill is not realising it — the drawer\'s contingent liability survives until maturity. Second, noting charges on dishonour are recoverable from the acceptor: debit the acceptor with them, never park them as the holder\'s expense. Third, a consignment dispatch is never a sale; booking it as one converts inventory into fictitious revenue. Fourth, remember which consignee expenses enter stock valuation — non-recurring yes, recurring no — and shrink the denominator for normal loss. Fifth, on approval goods, possession is not ownership: keep unapproved stock in the seller\'s inventory at cost.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Bill of exchange', def: 'An unconditional written order by the drawer to the drawee to pay the payee on a fixed date; acceptance creates the acceptor\'s liability.' },
          { term: 'Promissory note', def: 'A two-party instrument: the maker promises to pay the payee; no acceptance step exists.' },
          { term: 'Days of grace', def: 'The three extra days added to a usance bill\'s nominal period to fix its due date.' },
          { term: 'Noting charges', def: 'The notary\'s fee for certifying dishonour; recoverable from the acceptor.' },
          { term: 'Retirement of a bill', def: 'Payment before maturity; the holder allows a rebate equal to interest for the unexpired time.' },
          { term: 'Proforma invoice', def: 'Advice of dispatch accompanying consigned goods — invoice in form, not in law.' },
          { term: 'Account sales', def: 'The consignee\'s periodic statement of sales, expenses, commission due and balance remitted.' },
          { term: 'Del credere commission', def: 'Extra commission under which the consignee guarantees collection and absorbs bad debts.' },
          { term: 'Sale on approval', def: 'Goods delivered for inspection; ownership and revenue pass only on approval or expiry of the return period.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A bill dated 1 April is drawn payable three months after date. It legally falls due on:',
            options: ['1 July', '4 July', '3 July', '30 June'],
            answer: 1,
            explain: 'Three months after date runs to 1 July, plus three days of grace: 4 July.',
          },
          {
            q: 'When a discounted bill is dishonoured with ₹150 of noting charges, the drawer debits the acceptor with:',
            options: ['₹30,000 only', '₹30,150', '₹29,100', '₹150 only'],
            answer: 1,
            explain: 'The full face revives plus noting charges recoverable from the acceptor — the bank collects both from the drawer, who reclaims both from the acceptor.',
          },
          {
            q: 'In the consignment worked example, the value of the 20 unsold machines includes:',
            options: ['Cost plus freight and unloading only', 'Cost plus freight, unloading, godown rent and selling costs', 'Selling price minus commission', 'Cost plus the consignee\'s recurring expenses only'],
            answer: 0,
            explain: 'Stock carries proportionate cost to sale-ready state — cost, freight, non-recurring unloading (56,000 × 20/100 = ₹11,200); recurring costs are period selling effort, not stock.',
          },
          {
            q: 'A consignee earning del credere commission will, on a customer\'s bad debt from a credit sale made under the consignment:',
            options: ['Reimburse the consignor in full, absorbing the loss', 'Share the loss with the consignor equally', 'Pass the loss entirely to the consignor', 'Recover it from the customer\'s next purchase only'],
            answer: 0,
            explain: 'Del credere pay buys a guarantee: credit-sale collection risk sits with the consignee, which is why the commission is higher.',
          },
          {
            q: 'Goods sent to a customer on approval, still within the return period at year end, appear in the seller\'s closing inventory at:',
            options: ['Selling price', 'Cost or lower net realisable value', 'Nil — they have left the premises', 'Cost plus delivery charges and a normal margin'],
            answer: 1,
            explain: 'No sale has occurred, so the goods remain the seller\'s stock — carried at cost or NRV, whichever is lower.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Everything here runs on the journal discipline of Double-Entry Bookkeeping: The Logic Behind Every Ledger, and the revenue-recognition instincts come from The Accounting Cycle: Accruals, Adjustments and Closing the Books — the timing question those lessons pose is exactly what bills and consignments stress-test. Cash discipline for remittances belongs to Bank Reconciliation: Explaining Every Difference; Reading Financial Statements shows where consignment stock and bills receivable surface as current assets.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A bill of exchange is a three-party order — drawer, drawee-acceptor, payee; a promissory note is a two-party promise.',
          'Usance bills mature at nominal period plus three days of grace; a three-month bill dated 1 April falls due 4 July.',
          'The holder may retain, discount (bank pays face minus discount) or endorse a bill; the drawer\'s exposure survives all three.',
          'Dishonour revives the debt plus noting charges: debit the acceptor with face plus charges.',
          'Renewal settles part of the debt, charges interest on the rest and issues a new bill; retirement pays early and grants a rebate.',
          'Consignment is agency: ownership and revenue stay with the consignor until the consignee sells — the proforma invoice out, the account sales back.',
          'Del credere commission shifts bad-debt risk to the consignee; normal loss raises unit cost, abnormal loss is valued, insured and written off.',
          'Closing stock on consignment carries proportionate cost plus non-recurring expenses only — ₹11,200 in the worked case, inside a ₹10,800 profit.',
          'On-approval goods stay the seller\'s inventory until approval or expiry; goods in transit belong to whoever bore the risk at shipment.',
        ],
      },
    ],
  },
]
