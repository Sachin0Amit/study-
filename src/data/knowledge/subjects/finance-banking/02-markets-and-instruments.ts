/**
 * Knowledge Universe — Finance & Banking — Chapter 02: Markets & Instruments
 * 1 lesson · ~1,920 words
 * field: Finance & Investment
 * legacy sources: x23-japan-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Markets & Instruments]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 fin-financial-markets-money-capital — Financial Markets: How Money and Capital Markets Move Savings to Investment
 */
import type { KnowledgeTopic } from '../../types'

export const financeBankingCh02: KnowledgeTopic[] = [
  {
    id: 'fin-financial-markets-money-capital',
    title: 'Financial Markets: How Money and Capital Markets Move Savings to Investment',
    domain: 'Business & Economics',
    field: 'Finance & Investment',
    branch: 'Markets & Instruments',
    tier: 'intermediate',
    concepts: [
      'Surplus and deficit units: why markets exist',
      'Money market versus capital market',
      'Primary versus secondary markets',
      'Dealers, brokers and intermediaries',
      'Money-market instruments: T-bills to commercial paper',
      'Capital-market instruments: bonds and stocks',
      'Risk-return trade-off and liquidity',
    ],
    words: 1920,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'An economy always has two kinds of units at once: savers with surplus funds and borrowers with deficit funds — households putting money aside, firms and governments needing money to build and spend. Financial markets are the machinery that connects them, and the machinery has a precise taxonomy that every later finance topic assumes: markets split by maturity (money market versus capital market), by newness of the security (primary versus secondary), and by trading method (broker markets versus dealer markets). Instruments split the same way — short-term debt for parking cash, long-term debt and equity for funding growth — and participants split into dealers who trade for their own account, brokers who match others, and intermediaries such as banks and mutual funds who transform securities entirely. This lesson builds the taxonomy once, cleanly, because every pricing question in the field is answered inside one of its boxes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Classification questions are the fastest marks in any finance paper — “is this money or capital market? primary or secondary?” — but the taxonomy earns more than marks: it is the map on which valuation (the bond and stock lessons), monetary policy (the central-banking lesson) and corporate finance all sit. Know exactly which box an instrument sits in and half of every question about who bears what risk, who earns what return, and who regulates whom is already answered.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Money market', def: 'The market for short-term debt instruments — original maturities of one year or less: Treasury bills, commercial paper, negotiable certificates of deposit, federal (interbank) funds. Its economic job is liquidity management: parking cash safely for weeks or months.' },
          { term: 'Capital market', def: 'The market for longer-term funding — bonds with multi-year maturities and stocks with unlimited lives. Its economic job is channelling savings into long-lived investment; its instruments therefore carry interest-rate, credit and market risk that money-market instruments largely avoid.' },
          { term: 'Primary market', def: 'The market for new issues: an initial public offering of stock, a seasoned equity offering, a treasury auction, a corporate bond issue. The issuer receives the funds; every subsequent resale belongs to the secondary market.' },
          { term: 'Secondary market', def: 'Trading of previously issued securities among investors — the “used securities” market. It sets prices continuously and supplies the liquidity that makes investors willing to buy primary issues at all: the two markets are one system.' },
          { term: 'Dealer versus broker', def: 'A dealer trades for its own account, quoting bid and ask prices and earning the spread; a broker executes orders for clients and earns a commission. Dealer markets quote prices continuously (most bonds trade this way); broker (exchange) markets match buyers to sellers in one pool.' },
          { term: 'Financial intermediary', def: 'An institution — commercial bank, insurer, mutual fund — that buys one kind of security (loans, deposits) and issues another (accounts, shares), transforming size, maturity and risk. Intermediaries lower transaction costs and solve information problems that direct lending cannot.' },
        ],
      },
      {
        kind: 'para',
        text: 'The taxonomy’s first cut is time. The money market trades debt with original maturities of a year or less, and its instruments share a profile: high credit quality, low return, deep liquidity — the place where treasurers park cash and where central banks conduct policy. Its workhorse instruments: Treasury bills — short-term government obligations sold at a discount from face value (buy at 9,800, receive 10,000 at maturity; the 200 difference is the interest), exempt from some taxes and effectively default-free; commercial paper — unsecured corporate promissory notes of 1 to 270 days that only highly rated issuers can place, sold at a discount and usually held to maturity; negotiable certificates of deposit — large wholesale deposits in increments of 100,000 and up, with a genuine secondary market; and the federal funds market — overnight lending among banks that the central bank targets as its policy rate, which is why an interbank interest rate is the first domino in every rate decision. The capital market, by contrast, funds the long run: government notes and bonds (2–10 years, 20–30 years) paying coupons, municipal bonds whose interest is often tax-exempt, corporate bonds priced off a credit rating, and stocks — ownership claims with no maturity, whose cash flows are dividends and whose value is therefore harder to pin down than any bond’s (the valuation lessons own that problem).',
      },
      {
        kind: 'para',
        text: 'The second cut is newness. In the primary market the issuer actually receives the money: an IPO takes a company public for the first time, a seasoned equity offering (SEO) issues more shares of an already-public company, a treasury auction issues new bills and bonds, an underwritten bond deal places new corporate debt — and in each case the investment banks arranging the sale (the underwriters) price it, buy it and distribute it. The secondary market is where everything trades afterwards, and its services are what make the primary market possible: continuous price discovery (today’s traded price is tomorrow’s issue price benchmark) and liquidity (the ability to sell without a fire-sale discount). No one would lock savings into a thirty-year bond if it could never be sold before maturity; the secondary market is why they will. The third cut is trading method: broker markets — the classic exchange model, where orders meet in one book and trade at a public price — versus dealer markets, where dealers quote bids and asks from their own inventories and most bond and currency trading happens over the counter. Dealers profit from the bid-ask spread and provide liquidity on demand; brokers profit from commission and provide access. The same security can move between models as markets evolve — but the economic distinction (who bears inventory risk?) never does.',
      },
      {
        kind: 'para',
        text: 'Participants form the third dimension. Direct finance — a saver buying a firm’s bond — is the textbook picture; the real economy runs substantially on intermediated finance: banks take deposits and make loans (transforming small, liquid, short accounts into large, illiquid, long credit), insurers pool premia and hold long bonds against predictable claims, and mutual funds bundle many savers’ money into diversified portfolios none could build alone. Intermediaries exist because they economise on exactly the frictions direct markets suffer: transaction costs (it is cheaper to lend once to a bank than to research a hundred borrowers), information asymmetry (the bank specialises in monitoring borrowers — the main-bank lesson shows this in national form), and denominational mismatch (a 1,000-unit saver cannot fund a 100-million factory). The system-level term for savers and borrowers bypassing intermediaries — moving from deposits into money-market funds, or firms issuing commercial paper instead of borrowing — is disintermediation, and its episodes are instructive: when deposit rate caps pushed savers out of banks in the 1970s–80s, the funding that had financed loans migrated to markets, reshaping banking itself. Over all of it stands the risk-return trade-off: money-market instruments buy safety and liquidity at low return; capital-market instruments pay more for bearing more — and every instrument’s place in the taxonomy is simultaneously an answer to “how much risk, what return, how liquid, who regulates?”',
      },
      {
        kind: 'example',
        title: 'Worked Example — Classify Six Instruments, Two Ways',
        steps: [
          'Treasury bill, 13-week, bought at auction by a money-market fund: money market (maturity under a year); primary market (issued at auction); then the fund’s later sale to another investor is secondary.',
          'Commercial paper, 90-day, issued by a highly rated corporation to cover inventory: money market; primary at issuance (discount from face value); almost always held to maturity, so secondary trading is thin.',
          'Corporate bond, 10-year, underwritten by a syndicate and then traded over the counter: capital market; the syndicate sale is primary; every OTC trade afterwards is secondary — and note it is a dealer market (quotes from inventory), not an exchange.',
          'Newly listed company’s shares in their IPO: capital market (equity has unlimited life); primary (issuer receives the proceeds); the next day’s exchange trading is secondary on a broker-market model.',
          'Mutual-fund shares bought by a household: none of the primary/secondary boxes directly — the household bought fund shares; the fund bought securities. The household has used an intermediary, the third dimension of the taxonomy.',
          'Municipal bond, 20-year, tax-exempt coupon: capital market (long maturity); primary when issued to finance a project; its attraction (tax-free income) shows how instrument features map to the participants who value them.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The economic function that distinguishes the money market from the capital market is…',
          options: ['who regulates it', 'maturity: liquidity management versus long-run funding', 'whether interest is paid', 'the presence of risk'],
          answer: 1,
          explain: 'Maturity is the defining cut: instruments of a year or less manage liquidity; bonds and stocks fund long-lived investment and therefore bear interest-rate, credit and market risk.',
        },
        {
          q: 'A company sells new shares to the public for the first time. That transaction is…',
          options: ['a secondary-market trade on an exchange', 'a primary-market IPO; the issuer receives the funds', 'a money-market operation', 'disintermediation'],
          answer: 1,
          explain: 'New issues are primary by definition; the issuer receives the money. The same shares trading the next day are secondary — different transaction, different market.',
        },
        {
          q: 'A dealer differs from a broker because a dealer…',
          options: ['earns commissions on client orders', 'trades from its own inventory, quoting bid and ask', 'may not hold securities', 'only works on exchanges'],
          answer: 1,
          explain: 'Dealers bear inventory risk and earn the bid-ask spread, supplying liquidity on demand; brokers match clients and earn commissions without taking positions.',
        },
        {
          q: 'Financial intermediaries such as banks exist because they…',
          options: ['eliminate all risk for savers', 'lower transaction costs and solve information problems direct markets cannot', 'guarantee higher returns than markets', 'replace the need for money markets'],
          answer: 1,
          explain: 'Pooling many savers and specialising in borrower monitoring cuts costs and manages asymmetric information — the transformation of size, maturity and risk is their product.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling any stock trade “the stock market issuing money to companies”: only the primary issue transfers funds to the issuer — the overwhelming volume of equity trading is secondary reshuffling of ownership. Confusing the maturity of the instrument with the holding period of the investor: a 30-year bond sold after one month is a secondary capital-market trade, not a money-market one. Assuming dealers and brokers are interchangeable job titles: the difference is inventory risk, and it determines which regulatory regime applies. Treating intermediaries as mere middlemen: their transformation of small liquid deposits into large illiquid loans is the service — and its fragility (maturity mismatch) is why bank runs exist. And forgetting that the secondary market feeds back into the primary one: without continuous price discovery and exit liquidity, no one would buy the new issue in the first place.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the compound-interest lesson for the discounting arithmetic that prices every instrument here. Follow with monetary policy and central banking (what the policy rate does to these markets) and the bond- and stock-valuation chapters of any standard finance text for the pricing layer. Primary reading: OpenStax, Principles of Finance, chapter 1 — sections 1.1 “What Is Finance?”, 1.5 “Markets and Participants” and 1.7 “Financial Instruments” — with chapter 10 on bonds and chapter 11 on stocks (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Markets connect surplus units (savers) to deficit units (borrowers); the taxonomy cuts by maturity, newness and trading method.',
        'Money market: T-bills, commercial paper, negotiable CDs, federal funds — a year or less, high quality, liquidity management.',
        'Capital market: notes, bonds, municipals, corporate debt and stocks — long-run funding, higher risk and return.',
        'Primary market: issuer receives the funds (IPO, SEO, auctions); secondary market: trading among investors — price discovery and liquidity that make primary issues possible.',
        'Dealer markets trade from inventory (bid-ask spread); broker markets match orders (commission); intermediaries transform size, maturity and risk.',
        'Disintermediation = savers bypassing banks for markets; the risk-return trade-off orders the whole taxonomy.',
      ] },
    ],
  },
]
