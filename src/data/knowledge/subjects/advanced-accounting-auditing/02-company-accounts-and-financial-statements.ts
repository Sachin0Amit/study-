/**
 * Knowledge Universe — Advanced Accounting & Auditing — Chapter 02: Company Accounts & Financial Statements
 * 3 lessons · ~5,572 words
 * field: Accounting
 * legacy sources: business-economics.ts, x15-accounting.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Company Accounts, Reading Statements]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 acct-shares-issue-forfeiture — Company Accounts I: Issue and Forfeiture of Shares
 *   02.2 acct-debentures — Company Accounts II: Debentures and Borrowings
 *   02.3 acct-financial-statements — Reading Financial Statements: Balance Sheet, Income and Cash Flow
 */
import type { KnowledgeTopic } from '../../types'

export const advancedAccountingAuditingCh02: KnowledgeTopic[] = [
  {
    id: 'acct-shares-issue-forfeiture',
    title: 'Company Accounts I: Issue and Forfeiture of Shares',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Company Accounts',
    tier: 'intermediate',
    concepts: [
      'Authorised, issued, subscribed, called-up and paid-up capital',
      'Face value, issue price and securities premium',
      'Application, allotment and calls in sequence',
      'Pro-rata allotment arithmetic',
      'Calls in arrears',
      'Forfeiture of fully and partly called shares',
      'Reissue limits and the capital reserve transfer',
      'Share certificates and warrants',
    ],
    words: 2170,
    readMins: 11,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A company needs ₹120 million for a plant. Rather than beg one banker, it slices the ownership itself into 100,000 pieces of ₹10 each and offers them at ₹12 — and 120,000 people ask for a piece. What follows is a choreography of receipts, promises and contracts that company accountants run every day: money arrives before shares exist, applications exceed allotments, some holders later refuse to pay their calls, and the company must repossess and resell the slices they default on. This lesson walks the whole life of a share issue — the capital hierarchy, premium, the application-allotment-calls sequence with complete journal entries, pro-rata allotment when demand outruns supply, calls in arrears, and the forfeiture and reissue machinery with its capital-reserve payoff.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Share capital is the equity cushion every other claim rests on, and the law polices it hard: capital cannot simply be returned to shareholders, premium has restricted uses, and every stage of an issue has prescribed accounts and disclosures. An accountant who cannot build these entries blindfolded cannot work a company ledger — and mis-stating called-up versus paid-up capital misleads every reader of the balance sheet about the firm\'s real cushion.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Share capital wears five shrinking labels, and the order never changes. Authorised (nominal) capital is the maximum the memorandum permits — say 2,000,000 shares of ₹10, or ₹20,000,000. Issued capital is the portion actually offered to the public, perhaps 500,000 shares. Subscribed capital is what takers have committed to — if applications arrive for 600,000 shares but only 500,000 are allotted, subscribed is 500,000. Called-up capital is the part of the face value the company has actually demanded — if ₹8 of each ₹10 has been called, called-up is ₹4,000,000. Paid-up capital is what shareholders have actually paid — with ₹200,000 of calls in arrears, it is ₹3,800,000. Each label is smaller than (or equal to) the one above, and the balance sheet\'s equity line is built from the last of them.',
      },
      {
        kind: 'list',
        items: [
          'Authorised ₹20,000,000 — 2,000,000 shares of ₹10 permitted by the memorandum.',
          'Issued ₹5,000,000 — 500,000 shares actually offered.',
          'Subscribed ₹5,000,000 — 600,000 applications scaled down to 500,000 allotments.',
          'Called-up ₹4,000,000 — ₹8 of the ₹10 face value demanded by the company.',
          'Paid-up ₹3,800,000 — called-up less ₹200,000 of calls in arrears.',
        ],
      },
      {
        kind: 'para',
        text: 'Face value is the ₹10 written on the share; issue price is what the market pays for it. When the price exceeds face value the excess is securities premium, credited not to Share Capital but to a separate Securities Premium account with legally restricted uses — issuing bonus shares, writing off preliminary expenses or underwriting commissions, providing the premium payable on redemption of debentures or preference shares, and buying back the company\'s own shares. Dividends are not on that list: premium is capital, not income. Issuing shares below face value — at a discount — was once common accounting practice but is now prohibited by company law, surviving only as a cautionary entry in old textbooks.',
      },
      { kind: 'heading', text: 'The Issue Sequence: Application, Allotment, Calls' },
      {
        kind: 'para',
        text: 'A share is born in three stages, each with its own account. Application: the public sends money before any contract exists; it sits in a Share Application account as a debt the company owes to applicants, because there is not yet a shareholder to credit. Allotment: the company accepts (or rejects) applications, and acceptance is the birth of the contract — application money now becomes part of the share\'s paid capital, and any balance due is demanded as allotment money. Calls: the company summons the remainder in one or more instalments; each call is due only when formally made, and money unpaid after the due date becomes a call in arrears. One legal guardrail frames the whole sequence: a minimum subscription must be reached — in common practice the large majority of the issue — failing which nothing may be allotted and every rupee of application money must be returned within the prescribed days.',
      },
      {
        kind: 'formula',
        name: 'Pro-rata allotment',
        latex: '\\text{Shares allotted} = \\text{shares applied} \\times \\frac{\\text{total shares allotted}}{\\text{total shares applied}}',
        meaning: 'When applications exceed the offer, allotment scales every application by the same fraction. In the worked issue, 120,000 applications chase 100,000 shares, so the fraction is 5/6 and an applicant for 24 shares receives 20 — while the excess application money on the 4 unallotted shares is carried forward against that applicant\'s allotment dues.',
      },
      {
        kind: 'example',
        title: 'Worked Example: A Full Issue, Start to Finish',
        steps: [
          'A company offers 100,000 shares of ₹10 each at a premium of ₹2, payable ₹4 on application, ₹6 on allotment (including the premium) and ₹2 on the first and final call. Applications arrive for 120,000 shares; the directors make a pro-rata allotment.',
          'Money in: Bank A/c Dr ₹480,000; To Share Application A/c ₹480,000 (120,000 × 4).',
          'Allotment made — application money becomes capital, and the excess on 20,000 unallotted shares (20,000 × 4 = ₹80,000) is set off against allotment: Share Application A/c Dr ₹480,000; To Share Capital A/c ₹400,000; To Share Allotment A/c ₹80,000.',
          'Allotment due: Share Allotment A/c Dr ₹520,000 (100,000 × 6, less the ₹80,000 already adjusted); To Share Capital A/c ₹400,000; To Securities Premium A/c ₹200,000. Receipt: Bank A/c Dr ₹520,000; To Share Allotment A/c ₹520,000.',
          'Call made: First and Final Call A/c Dr ₹200,000; To Share Capital A/c ₹200,000.',
          'Call received on 96,000 shares; a holder of 4,000 shares defaults: Bank A/c Dr ₹192,000; Calls in Arrears A/c Dr ₹8,000; To First and Final Call A/c ₹200,000.',
          'Proof: Share Capital now totals 400,000 + 400,000 + 200,000 = ₹1,000,000 at face, Securities Premium ₹200,000, and the bank has received 480,000 + 520,000 + 192,000 = ₹1,192,000 — exactly 1,000,000 + 200,000 less the ₹8,000 still owed.',
        ],
      },
      { kind: 'heading', text: 'Forfeiture and Reissue' },
      {
        kind: 'para',
        text: 'When a shareholder fails to pay calls despite notices, the company can forfeit the shares: membership ends, the name vanishes from the register, and every rupee the defaulter paid on those shares is surrendered to the company. The entries follow a fixed shape. Share Capital is debited with the called-up face value of the shares (never the premium); Calls in Arrears is credited with whatever remains unpaid, clearing the debt that triggered the forfeiture; and the Share Forfeiture account is credited with the amount actually received towards capital — the pool from which any later reissue discount must come. The premium already received stays in Securities Premium untouched; if premium itself was unpaid, Securities Premium is debited for it in the forfeiture entry.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Forfeiting Fully and Partly Called Shares',
        steps: [
          'Fully called — the 4,000 defaulting shares above, ₹10 called-up with ₹8 per share received (application ₹4 plus the capital part of allotment ₹4): Share Capital A/c Dr ₹40,000; To Calls in Arrears A/c ₹8,000; To Share Forfeiture A/c ₹32,000. The ₹2-per-share premium received earlier stays in Securities Premium.',
          'Partly called — 1,000 shares of ₹10 on which only ₹7 has been called, the last call of ₹2 being unpaid, so ₹5 per share stands received: Share Capital A/c Dr ₹7,000; To Calls in Arrears A/c ₹2,000; To Share Forfeiture A/c ₹5,000. The capital account is debited only with what was called, not the full face value.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example: Reissue and the Capital Reserve',
        steps: [
          'All 4,000 forfeited shares (₹10 face, ₹32,000 in the forfeiture pool) are reissued at ₹8 per share — a discount of ₹2 per share, ₹8,000 in all.',
          'Entry: Bank A/c Dr ₹32,000; Share Forfeiture A/c Dr ₹8,000; To Share Capital A/c ₹40,000 — the new holder pays ₹8, the old partners\' surrendered money covers ₹2, and the shares re-enter the books fully paid at face value.',
          'The rule enforced here: discount on reissue can never exceed the amount forfeited on the shares being reissued — the company cannot fund a discount out of anyone\'s money but the defaulter\'s own.',
          'Close the pool: Share Forfeiture A/c Dr ₹24,000; To Capital Reserve A/c ₹24,000 — the unspent surplus of one defaulter\'s sacrifice becomes capital, permanently outside the dividend stream.',
          'Variant: had the shares been reissued at ₹11 instead, the entry would read Bank A/c Dr ₹44,000; To Share Capital A/c ₹40,000; To Securities Premium A/c ₹4,000, and the entire ₹32,000 forfeiture balance would transfer to Capital Reserve.',
        ],
      },
      {
        kind: 'para',
        text: 'Title to a share is evidenced in one of two instruments. A share certificate is the ordinary one: registered in the holder\'s name, it proves ownership and moves only by a formal transfer. A share warrant is its negotiable cousin — a bearer instrument transferable by mere delivery, rare today, and held only against fully paid shares. Between the two lies the practical difference between an entry in a register and a piece of paper that can circulate like currency.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, never debit the reissue discount to profit and loss — it is charged against the forfeiture pool, not against earnings. Second, Share Capital is debited at called-up value on forfeiture, not the full face value of a partly called share. Third, capital reserve is not distributable as dividend; treat it as locked capital. Fourth, premium belongs in Securities Premium from the first receipt — routing it through profit and loss overstates income and breaks the law. Fifth, the pro-rata fraction applies to applicants\' money as well as their shares: forgetting the application-money set-off against allotment double-collects from winners and strands the losers\' refunds.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Authorised capital', def: 'The maximum share capital the memorandum permits; every other layer of capital fits inside it.' },
          { term: 'Called-up capital', def: 'The portion of face value the company has actually demanded from shareholders so far.' },
          { term: 'Paid-up capital', def: 'Called-up capital minus calls in arrears; the amount shareholders have actually paid.' },
          { term: 'Securities premium', def: 'The excess of issue price over face value, held in a separate account with legally restricted uses.' },
          { term: 'Pro-rata allotment', def: 'Scaling every application by the same fraction when applications exceed the shares offered.' },
          { term: 'Calls in arrears', def: 'Call money demanded but unpaid by the due date; a debt the shareholder owes the company.' },
          { term: 'Forfeiture', def: 'Terminating a defaulting shareholder\'s membership and absorbing the amounts they paid on the shares.' },
          { term: 'Capital reserve', def: 'The unspent balance of a forfeiture pool after reissue; capital in nature and not distributable as dividend.' },
          { term: 'Share warrant', def: 'A negotiable bearer document of title to fully paid shares, transferable by delivery.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which layer of share capital can never be smaller than any other?',
            options: ['Paid-up capital', 'Called-up capital', 'Issued capital', 'Authorised capital'],
            answer: 3,
            explain: 'The hierarchy only shrinks downward: authorised contains issued, issued contains subscribed, then called-up, then paid-up.',
          },
          {
            q: 'Securities premium may NOT be used for:',
            options: ['Issuing fully paid bonus shares', 'Writing off preliminary expenses', 'Paying an ordinary dividend', 'Providing the premium on redemption of debentures'],
            answer: 2,
            explain: 'Premium is capital, and dividends are paid only from distributable profits — the four statutory uses all preserve its capital character.',
          },
          {
            q: 'In the worked issue, applications for 120,000 shares competed for 100,000. An applicant for 24 shares is allotted:',
            options: ['24 shares', '20 shares', '12 shares', '10 shares'],
            answer: 1,
            explain: 'The pro-rata fraction is 100,000/120,000 = 5/6, and 24 × 5/6 = 20 shares, with the excess application money on 4 shares carried to allotment.',
          },
          {
            q: 'Shares of ₹10 were called-up in full with ₹8 per share received. On forfeiture, the Share Forfeiture account is credited with:',
            options: ['₹10 per share', '₹8 per share', '₹2 per share', '₹12 per share'],
            answer: 1,
            explain: 'Capital is debited at ₹10 called-up, calls in arrears credited ₹2, and the forfeiture pool holds exactly what the defaulter paid — ₹8.',
          },
          {
            q: 'After forfeited shares are reissued at a discount, the remaining balance of the Share Forfeiture account is transferred to:',
            options: ['Profit and loss account', 'General reserve', 'Capital reserve', 'Securities premium'],
            answer: 2,
            explain: 'The unspent surrendered money is capital in nature — it moves to Capital Reserve and can never be paid out as dividend.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'This lesson leans on the ledger fluency of Double-Entry Bookkeeping: The Logic Behind Every Ledger and on Reading Financial Statements for where these capital layers surface in the equity section. Its mirror is Company Accounts II: Debentures and Borrowings — the same company raising money as debt instead of equity. The accounting-cycle lesson\'s treatment of closing entries explains why the application and call accounts always wash out to nil.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Capital hierarchy: authorised ≥ issued ≥ subscribed ≥ called-up ≥ paid-up; the balance sheet reports paid-up.',
          'Issue price above face value creates securities premium — restricted-use capital, never dividend income; issues at a discount are prohibited.',
          'Application money is a debt to applicants until allotment creates the contract of shareholding.',
          'Pro-rata: allotment fraction = shares offered / shares applied; excess application money offsets allotment dues (worked: 5/6, so 24 applications yield 20 shares).',
          'The worked issue: 100,000 shares at ₹12 (₹4 / ₹6 incl. premium / ₹2) raises ₹1,000,000 capital plus ₹200,000 premium, less ₹8,000 arrears.',
          'Forfeiture: Share Capital Dr at called-up value; Calls in Arrears Cr for the unpaid; Share Forfeiture Cr for the capital actually received.',
          'Reissue discount may not exceed the amount forfeited on those shares; Bank plus the discount absorbed equals face value restored.',
          'The leftover forfeiture balance becomes Capital Reserve — locked, non-distributable capital.',
          'Certificates prove registered title; warrants are bearer instruments transferable by delivery.',
        ],
      },
    ],
  },
  {
    id: 'acct-debentures',
    title: 'Company Accounts II: Debentures and Borrowings',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Company Accounts',
    tier: 'intermediate',
    concepts: [
      'Debenture holder as creditor, not owner',
      'Secured, unsecured, redeemable and convertible types',
      'Issue at par, premium and discount',
      'Loss on issue when redemption carries a premium',
      'Debentures as collateral security',
      'Interest as a charge, with tax deducted at source',
      'Redemption by lump sum, instalments or conversion',
    ],
    words: 2237,
    readMins: 11,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'The same company that sliced its ownership into shares can slice its debt instead: 10,000 printed promises to pay ₹100 each, bearing 9 per cent interest and ranking ahead of every shareholder if things go wrong. A debenture is a borrowing under the company\'s seal — an instrument acknowledging a debt — and the debenture holder is a creditor who lent money, not an owner who bought a stake. That single legal fact drives every accounting difference between the two instruments: interest is a charge that must be paid in good years and bad, redemption is a promise with a date on it, and security can be attached to it that no shareholder can demand. This lesson covers the instrument\'s anatomy, the entries for issuing at par, premium and discount, the curious loss that appears when redemption promises a premium, debentures as collateral, interest with tax deducted at source, and the three routes to redemption.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Debt is the cheaper, faster, riskier way to fund growth — cheaper because interest is deductible and fixed, riskier because it must be paid when due regardless of profits. Reading a balance sheet means knowing whether the debenture stack is secured and when it falls due; writing one means knowing that the interest charge lands in profit and loss even in a loss year, which is precisely how over-leveraged firms tip from slow profit into insolvency.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The contrast with shares runs down every line of the two instruments. A shareholder is an owner; a debenture holder is a creditor. A shareholder\'s dividend is an appropriation, paid only if profits and directors permit; a debenture holder\'s interest is a charge, payable whether the year was brilliant or miserable. Shareholders vote and control; debenture holders lend and wait. Share capital is permanent — returnable only through buybacks in narrow legal channels — while debentures carry a redemption date. In liquidation, debenture holders stand with other creditors ahead of every shareholder. And a debenture can be secured against the company\'s assets, a protection no share enjoys.',
      },
      {
        kind: 'list',
        items: [
          'Status — shareholder: owner and member; debenture holder: creditor of the company.',
          'Return — dividend: an appropriation of profit, discretionary; interest: a charge, compulsory and date-fixed.',
          'Security — shares: unsecured; debentures: may carry a fixed or floating charge on assets.',
          'Repayment — capital: permanent until buyback; debentures: redeemable on a stated date or in instalments.',
          'Voting — shareholders vote; debenture holders do not (except to protect their debt).',
          'Priority in liquidation — creditors, including debenture holders, rank before equity holders.',
        ],
      },
      {
        kind: 'para',
        text: 'Debentures sort along three axes. Secured debentures carry a charge on assets — a fixed charge on specific property, or a floating charge over the shifting mass of current assets until crystallised. Unsecured (naked) debentures rest on the company\'s word alone. Redeemable debentures come home on a fixed date or by instalments; irredeemable ones have no fixed date and ride along as near-permanent debt. Convertible debentures — fully or partly — exchange themselves (or part of themselves) for equity at stated terms, which is why lenders accept coupons below market rates: the conversion option is the sweetener. Registered debentures move by transfer entry; bearer debentures circulate by delivery. Any single instrument combines one choice from each axis, and the prospectus says which.',
      },
      { kind: 'heading', text: 'Issue at Par, Premium and Discount' },
      {
        kind: 'formula',
        name: 'The interest charge',
        latex: 'I = F \\times r \\times t',
        meaning: 'Annual interest equals the face (nominal) value of the debentures times the coupon rate — never the issue price. A ₹100 debenture pays ₹9 a year whether the subscriber paid ₹95, ₹100 or ₹110 for it; the coupon is fixed to face, and the issue price only changes what the lender actually earns.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Three Issues, Three Entries',
        steps: [
          'At par — 10,000 debentures of ₹100 each: Bank A/c Dr ₹1,000,000; To 9 per cent Debentures A/c ₹1,000,000. The liability enters the books at face value.',
          'At a premium of 10 per cent — the same face, a pricier promise: Bank A/c Dr ₹1,100,000; To 9 per cent Debentures A/c ₹1,000,000; To Premium on Issue of Debentures A/c ₹100,000. The premium is a capital gain of the borrowing itself, not income.',
          'At a discount of 5 per cent — less cash in for the same promise: Bank A/c Dr ₹950,000; Discount on Issue of Debentures A/c Dr ₹50,000; To 9 per cent Debentures A/c ₹1,000,000. The discount is a capital loss, written off against securities premium, a capital reserve, or profit over the debentures\' life.',
        ],
      },
      {
        kind: 'para',
        text: 'One modern restriction: companies no longer issue debentures at a discount — the entry above survives in practice only where law still permits certain discount structures, and in every textbook written before the prohibition. When a discount is allowed, its accounting is patient: the Discount (or Loss) on Issue account is debited once and then written off systematically, usually in equal annual instalments across the borrowing\'s term, against securities premium first if available and profit and loss thereafter.',
      },
      {
        kind: 'para',
        text: 'Two special situations complete the issue picture. Debentures issued for consideration other than cash — a supplier or a seller of assets paid in paper rather than money — produce the leanest entry imaginable: Assets A/c Dr (or the vendor); To Debentures A/c, at the agreed purchase consideration, with premium or discount recognised the same way as for a cash issue. And debentures issued as collateral security back another borrowing: a bank lends ₹1,000,000 and demands 12,000 debentures of ₹100 as the pledge. No borrowing occurs by that act, so normally no entry is made — the collateral appears as a note to the accounts — though some firms record it with a wash pair (Debentures Suspense A/c Dr; To Debentures A/c) shown as a deduction from the liability, which cancels itself the moment the primary loan is repaid and the debentures return home.',
      },
      {
        kind: 'para',
        text: 'The most mis-booked entry in this chapter is loss on issue of debentures. When debentures are issued at a discount and are redeemable at a premium, the company has promised two losses at once — it received less than face and will repay more than face — and both must be recognised on the day of issue. Suppose the ₹100 debentures above go out at a 5 per cent discount and return at a 10 per cent premium: Bank A/c Dr ₹950,000; Loss on Issue of Debentures A/c Dr ₹150,000; To Debentures A/c ₹1,000,000; To Premium on Redemption of Debentures A/c ₹100,000. The loss account blends the ₹50,000 discount given away and the ₹100,000 redemption premium promised, and is written off over the borrowing\'s life. The Premium on Redemption account sits as a liability until the day it is paid.',
      },
      { kind: 'heading', text: 'Interest on Debentures' },
      {
        kind: 'example',
        title: 'Worked Example: The Interest Charge with Tax Deducted at Source',
        steps: [
          'The 10,000 debentures of ₹100 at 9 per cent accrue ₹90,000 of interest for the year — a charge debited to profit and loss, payable in full year after year regardless of the profit line\'s mood.',
          'Interest becomes due: Interest on Debentures A/c Dr ₹90,000; To Debenture Holders A/c ₹90,000 — the holders are creditors now, exactly like any other payee.',
          'On payment, the company must deduct tax at source where the law requires it (commonly 10 per cent for resident holders): Debenture Holders A/c Dr ₹90,000; To Bank A/c ₹81,000; To Tax Deducted at Source Payable A/c ₹9,000.',
          'The ₹9,000 is not the company\'s money: it is the holders\' tax, collected by the company and deposited with the government — a liability until it is paid over.',
        ],
      },
      { kind: 'heading', text: 'Redemption' },
      {
        kind: 'para',
        text: 'Debentures come home by one of three routes. Lump-sum redemption pays the whole issue on the due date; prudent firms build a Debenture Redemption Reserve from divisible profits across the years before the date (a requirement the rules have relaxed for several classes of issuers, but the discipline remains), so the entries run: surplus profits are appropriated — Surplus in Statement of Profit and Loss A/c Dr; To Debenture Redemption Reserve A/c — then the debt is paid — Debentures A/c Dr; To Bank A/c — and once cleared the reserve is freed into General Reserve. Redemption by instalments (drawings) spreads the payments across years, drawing lots each time so that no holder can predict their exit, with the same payment entry repeated per instalment. Redemption by conversion simply changes the paper: convertible debentures become shares at the agreed ratio — Debentures A/c Dr; To Share Capital A/c (and To Securities Premium A/c if the conversion price exceeds face) — and the creditor of yesterday becomes the shareholder of tomorrow with no cash moving at all. Where redemption carries a premium, the extra is paid from the Premium on Redemption account already set up at issue.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'First, interest is a charge, not an appropriation: it must be provided for even when profits are negative, unlike a dividend. Second, compute interest on face value, not issue price — a ₹110 purchase price does not raise the ₹9 coupon. Third, do not book the discount twice: the discount and the promised redemption premium are two parts of one loss on issue, recognised together on day one. Fourth, collateral debentures are not new borrowing — booking them as a liability double-counts debt. Fifth, tax deducted at source is a payable to the government, never income and never expense.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Debenture', def: 'An instrument under the company\'s seal acknowledging a debt; the holder is a creditor, not an owner.' },
          { term: 'Fixed charge', def: 'A mortgage on specific identified assets securing debenture holders.' },
          { term: 'Floating charge', def: 'A security over the changing pool of current assets, attaching to specific items only when crystallised.' },
          { term: 'Convertible debenture', def: 'A debenture exchangeable for equity shares at stated terms, fully or in part.' },
          { term: 'Loss on issue of debentures', def: 'The combined discount allowed on issue and premium promised on redemption, debited in full at the issue date.' },
          { term: 'Collateral security', def: 'Debentures pledged to a lender to secure another borrowing; usually disclosed rather than entered.' },
          { term: 'Tax deducted at source', def: 'The holder\'s tax withheld by the paying company and deposited with the government; a liability in between.' },
          { term: 'Debenture redemption reserve', def: 'An appropriation of profits built up before redemption to protect the repayment of the debt.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A debenture holder differs from a shareholder primarily because the debenture holder is:',
            options: ['An owner with limited voting rights', 'A creditor of the company', 'A partner in the firm', 'A trustee for the directors'],
            answer: 1,
            explain: 'A debenture acknowledges a loan: the holder lends and is repaid with fixed interest, holding a creditor\'s claim and a creditor\'s priority.',
          },
          {
            q: 'Debentures of ₹1,000,000 face value are issued at a 5 per cent discount and are redeemable at a 10 per cent premium. The Loss on Issue of Debentures account is debited with:',
            options: ['₹50,000', '₹100,000', '₹150,000', '₹950,000'],
            answer: 2,
            explain: 'The loss blends both promises — ₹50,000 given away as discount plus ₹100,000 that will be overpaid at redemption — recognised together on the issue date.',
          },
          {
            q: 'Interest on debentures is best described as:',
            options: ['An appropriation of profit, payable only when profits exist', 'A charge against profit, payable regardless of results', 'A capital expenditure on borrowing', 'A contingent liability until the due date'],
            answer: 1,
            explain: 'Interest is the cost of borrowed money: it is debited to profit and loss every year it accrues, profitable or not.',
          },
          {
            q: 'Debentures issued to a bank purely as collateral security for a loan are normally:',
            options: ['Credited to the Debentures account as a liability', 'Recorded as an asset equal to the loan', 'Disclosed by note, with no ledger entry', 'Treated as convertible debentures'],
            answer: 2,
            explain: 'The collateral creates no new borrowing; the pledge is a disclosure, with an optional contra entry that cancels itself on repayment.',
          },
          {
            q: 'On payment of ₹90,000 debenture interest with 10 per cent tax deducted at source, the company credits:',
            options: ['Bank ₹90,000', 'Bank ₹81,000 and Tax Deducted at Source Payable ₹9,000', 'Bank ₹81,000 and Profit and Loss ₹9,000', 'Tax Deducted at Source Payable ₹90,000'],
            answer: 1,
            explain: 'The holder receives ₹81,000 in cash; the ₹9,000 withheld belongs to the government and sits as a payable until deposited.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'This lesson is the debt-side mirror of Company Accounts I: Issue and Forfeiture of Shares — read them together and the equity-versus-debt contrast becomes mechanical. Double-Entry Bookkeeping: The Logic Behind Every Ledger supplies the ledger fluency, Reading Financial Statements shows where the debenture stack and its interest sit in the reports, and Compound Interest and the Time Value of Money explains why a discount or premium changes the lender\'s true yield without touching the coupon.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A debenture is borrowed money under seal: creditor status, fixed interest, a redemption date, possible security.',
          'Dividends are discretionary appropriations; debenture interest is a compulsory charge, payable even in loss years.',
          'Issue at par, premium or discount changes the cash raised, never the liability recorded at face value or the coupon.',
          'Issue entries — par: Bank 1,000,000 / Debentures 1,000,000; premium: plus a ₹100,000 credit to Premium on Issue; discount: a ₹50,000 debit for Discount on Issue.',
          'Discount plus promised redemption premium = Loss on Issue of Debentures, debited in full on day one (worked: ₹150,000).',
          'Debentures for consideration other than cash credit the Debentures account directly against the asset acquired.',
          'Collateral debentures usually make no entry at all — they are a note to the accounts.',
          'Interest accrues on face value; tax deducted at source splits the payment between the holder\'s bank account and a payable to the government.',
          'Redemption comes as a lump sum (with a redemption reserve), by drawn instalments, or by conversion into shares.',
        ],
      },
    ],
  },
  {
    id: 'acct-financial-statements',
    title: 'Reading Financial Statements: Balance Sheet, Income and Cash Flow',
    domain: 'Business & Economics',
    field: 'Accounting',
    branch: 'Reading Statements',
    tier: 'core',
    concepts: [
      'The balance sheet: a snapshot',
      'The income statement: performance over a period',
      'The cash flow statement: three channels',
      'The interlock: profit flows into equity, cash reconciles',
      'Red flags in the seams',
      'Ratios: reading the statements together',
    ],
    words: 1183,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Every company, from a corner shop to a listed giant, tells its story in three statements. The balance sheet is a photograph: what it owns and owes at a single instant. The income statement is a film: revenue and expense over a period, ending in profit or loss. The cash flow statement is the reality check: where money actually entered and left. Each can flatter or conceal; read together, they check one another — and the seams between them are where analysts look first.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Job offers, pensions and savings all end up inside companies whose health you are asked to trust. The three statements are how that trust is earned — and history\'s great frauds, from Enron onward, were caught not by the profit line but by inconsistencies between statements.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The balance sheet lists assets (current ones such as cash, receivables and inventory; non-current ones such as plant and goodwill), then liabilities (payables, debt), then equity — the owners\' residual. It is a snapshot at a date, built on the accounting equation covered in the double-entry lesson: assets equal liabilities plus equity. Two numbers matter most in practice: working capital (current assets minus current liabilities) and the debt stack relative to equity.',
      },
      {
        kind: 'para',
        text: 'The income statement covers a period, usually a quarter or a year, and cascades: revenue, minus cost of goods sold, gives gross profit; minus operating expenses, gives operating income; minus interest and tax, gives net income. The margin ratios along the way are the company\'s vital signs — gross margin reveals pricing power and production cost, operating margin the cost of running the business, net margin what survives everyone\'s claims.',
      },
      {
        kind: 'para',
        text: 'The cash flow statement splits cash movement into three channels: operating (cash from selling goods — the engine), investing (buying and selling long-term assets) and financing (borrowing, repaying, issuing shares, paying dividends). A growing company typically shows negative investing cash; a healthy mature one shows positive operating cash funding both investment and dividends. The statement exists because accrual profit can diverge from cash for long stretches — and cash, not profit, pays bills.',
      },
      {
        kind: 'para',
        text: 'The three statements interlock mechanically. Net income from the income statement, minus dividends paid, lands in retained earnings inside equity on the balance sheet. The ending cash of the cash flow statement must equal the cash on the balance sheet, to the cent. Depreciation appears as an expense, as a non-cash add-back in operating cash flow, and as a reduction of asset values — one event, three footprints. Follow any of these threads and the statements stop being three documents and become one machine.',
      },
      {
        kind: 'para',
        text: 'The red flags live in the seams. Receivables growing far faster than revenue suggests sales booked that customers are not paying for. Inventory piling up while sales stall suggests goods nobody wants. Net income rising while operating cash flow falls — the accrual gap — is the classic earnings-quality warning: profit that exists only as promises. Serial "one-time" restructuring charges, and borrowing to pay dividends, complete the usual suspect list.',
      },
      {
        kind: 'para',
        text: 'Ratios tie the statements into judgements. Current ratio (current assets over current liabilities) reads short-term safety; debt-to-equity reads leverage; gross margin trend reads competitive position. Return on equity — net income over equity — can be decomposed into margin, asset turnover and leverage, revealing whether returns come from operations or from borrowing. The craft is comparison: against the company\'s own past and against peers in the same industry.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a retailer reports revenue up 20 per cent to 120 million and net income of 6 million, but receivables have jumped from 10 to 19 million. Healthy growth or warning?',
        'Recall: sales become receivables before cash; the accrual gap (net income minus operating cash flow) measures profit that has not yet become cash; the receivables-to-revenue ratio should be roughly stable.',
        'Apply: receivables grew 9 million on 20 million of extra sales — 45 per cent of the new sales uncollected, against an old ratio of about 10 per cent (10 of 100). If operating cash flow is only 1 million against 6 million of income, the accrual gap is 5 million.',
        'State the result: the pattern fits collection trouble or channel stuffing, not healthy growth. Until the cash arrives, the profit is an assertion — and the cash flow statement has already told you so.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Lenders set loan covenants on leverage and interest-cover ratios computed from all three statements.',
        'Investors screen the accrual gap before trusting an earnings beat — high-accrual profits mean-revert.',
        'Managers run working capital — receivables, inventory, payables — precisely in the seams between statements.',
        'Acquisition teams restate targets\' statements to compare true cash generation across accounting policies.',
        'Credit analysts score suppliers from balance-sheet strength, because a bankrupt supplier stops your production.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The granddaddy of errors is treating net income as cash — profitable companies die of illiquidity all the time. Comparing a snapshot (balance sheet) with a period measure (income) without averaging balances distorts every ratio. The notes to the accounts are not decoration: accounting policies live there, and two companies\' "profit" can differ on a single depreciation choice. And a single statement, read alone, can be dressed indefinitely — the machine only reveals itself when you follow the threads between all three.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'balance sheet', def: 'The snapshot of assets, liabilities and equity at a single date.' },
        { term: 'income statement', def: 'Revenue, expenses and profit over a period, cascading to net income.' },
        { term: 'cash flow statement', def: 'Cash movement split into operating, investing and financing channels.' },
        { term: 'retained earnings', def: 'Accumulated profit kept in the business, inside equity.' },
        { term: 'accounts receivable', def: 'Money owed by customers for sales already booked.' },
        { term: 'accrual gap', def: 'Net income minus operating cash flow; wide gaps flag low-quality earnings.' },
        { term: 'working capital', def: 'Current assets minus current liabilities; the short-run cushion.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which statement is a snapshot at a single point in time?',
            options: ['The income statement', 'The balance sheet', 'The cash flow statement', 'The retained earnings schedule'],
            answer: 1,
            explain: 'Balance sheets are dated photographs of what is owned and owed; the other statements measure flows over a period.',
          },
          {
            q: 'Net income, minus dividends paid, ends up where?',
            options: ['In operating cash flow', 'In retained earnings within equity', 'In accounts payable', 'It is deleted'],
            answer: 1,
            explain: 'The income statement plugs into the balance sheet through retained earnings — the key interlock.',
          },
          {
            q: 'A profitable company can still fail because…',
            options: ['profits are illegal', 'profit is not cash, and bills are paid in cash', 'the income statement is optional', 'equity must equal zero'],
            answer: 1,
            explain: 'Accrual profit can run far ahead of collections; illiquidity, not losses, kills companies first.',
          },
          {
            q: 'Receivables growing much faster than revenue most directly suggests…',
            options: ['strong collections', 'sales booked that customers are slow — or unable — to pay', 'falling leverage', 'an accounting error in equity'],
            answer: 1,
            explain: 'The receivables-to-revenue ratio should hold steady; a jump means the earnings-quality thread is fraying.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the double-entry lesson. Follow with ratio analysis and the DuPont decomposition, then earnings-quality and fraud-detection classics. Exercise: pull any listed company\'s three statements and trace net income into equity and ending cash into the balance sheet — the threads are always there.',
      },
    ],
  },
]
