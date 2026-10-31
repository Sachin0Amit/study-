/**
 * Knowledge Universe — Business Economics — Chapter 03: Public Finance
 * 1 lesson · ~2,766 words
 * field: Business Economics
 * legacy sources: x15-business-law.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Public Finance]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bus-taxation-basics — Taxation: Principles, Systems and India’s Structure
 */
import type { KnowledgeTopic } from '../../types'

export const businessEconomicsCh03: KnowledgeTopic[] = [
  {
    id: 'bus-taxation-basics',
    title: 'Taxation: Principles, Systems and India’s Structure',
    domain: 'Business & Economics',
    field: 'Business Economics',
    branch: 'Public Finance',
    tier: 'intermediate',
    concepts: [
      'Why governments tax: revenue, redistribution, behaviour',
      'Canons: Smith’s four plus modern additions',
      'Direct versus indirect; progressive, proportional, regressive',
      'Income-tax slabs and the two regimes',
      'GST architecture: CGST, SGST, IGST and input credit',
      'Evasion, avoidance and planning',
      'Laffer curve and deadweight loss',
    ],
    words: 0,
    readMins: 0,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A tax is a compulsory payment to a government, for which no specific good or service is received in return — and on that paradox everything rests. Governments need the power to tax because markets cannot sell defence, courts or street lighting unit by unit; they use it to redistribute income and to steer behaviour, discouraging what they price as sin and encouraging what they subsidise. As Justice Oliver Wendell Holmes put it, taxes are what we pay for civilised society. This lesson builds the conceptual toolkit — the canons, the classifications, the efficiency costs — and then walks through India’s actual structure — income-tax slabs, the goods and services tax, customs and corporate tax — closing with the line every taxpayer wants to know: the legal difference between evasion, avoidance and planning.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Tax is the largest single recurring claim on every income, purchase and business decision — in India, the goods and services tax alone touches most daily transactions, and income tax every salaried household above the threshold. Reading a payslip, pricing a product across states, choosing a business form, or judging a budget all require the vocabulary this lesson assembles: what is being taxed, at what effective rate, collected how, and with what side-effects on behaviour.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Good taxes obey rules older than economics as a discipline. Adam Smith’s four canons, from The Wealth of Nations (1776), still anchor the subject: equality — citizens should pay in proportion to their ability, and to the benefits they receive from the state; certainty — the time of payment, the manner and the amount should be clear to everyone, not arbitrary; convenience — payment should fall when and how it is easiest for the payer (tax deducted from wages as they are earned, not a lump sum demanded later); and economy — collection should cost little relative to what it raises. Modern public finance adds canons Smith lacked the machinery for: productivity (the tax should yield reliably, not dry up), flexibility (it should respond to changing income and needs without fresh legislation), simplicity (comprehensible to the payer without an adviser), diversity (spread across bases so no single tax is pushed past its Laffer peak), and neutrality (leaving private choices undistorted wherever possible).',
      },
      {
        kind: 'para',
        text: 'Classification begins with incidence — who finally bears the burden. A direct tax is one whose burden stays where the law places it: income tax and corporate tax fall on the earner and the company, who cannot pass the charge to someone else in any direct way. An indirect tax is collected by one person and shifted to another: the manufacturer or trader pays the goods and services tax to the government but recovers it in the price, so the final consumer bears it — which is why indirect taxes are regressive. The second classification is by rate structure, and it is best expressed through the average tax rate — total tax divided by total income.',
      },
      {
        kind: 'formula',
        name: 'Average tax rate',
        latex: '\\bar{t} = \\frac{\\text{total tax liability}}{\\text{total income}}',
        meaning: 'The share of income actually paid in tax. A progressive tax has a rising average rate with income, a proportional tax a constant one, a regressive tax a falling one.',
      },
      {
        kind: 'para',
        text: 'What bases can be taxed? Three stocks and flows cover everything: income, a flow of earnings during a period; consumption, the flow of spending; and wealth, a stock of holdings at a date. Each has its logic — income taxes ability to pay most directly, consumption taxes what people take out of the economy and is harder to avoid, wealth taxes accumulated advantage but is easy to move and hard to value. India once levied a wealth tax and abolished it in 2015 on collection-cost grounds — an economy-canon verdict. Beyond rates and bases, the deepest question in Indian tax history has been the choice between taxing goods at each stage without credit — the old cascading regime — and taxing value added with credit, which is where the modern structure arrives.',
      },
      { kind: 'heading', text: 'India’s Tax Structure' },
      {
        kind: 'para',
        text: 'Personal income tax arrived with the Income-tax Act 1961, which still governs it. Its central device is the slab: income is sliced into bands, each taxed at its own rate, so the marginal rate rises as income crosses each threshold. The classic misunderstanding deserves a callout of its own: a higher slab rate applies only to the income inside that band, never to the whole income — crossing a threshold by one rupee raises the bill by a fraction of a rupee. Within the income tax now sit two parallel regimes: the old regime, with higher rates but generous deductions and exemptions, and the new regime, with lower rates and most deductions stripped away, now the default into which a taxpayer falls unless she actively chooses the old arithmetic.',
      },
      {
        kind: 'callout',
        title: 'Common pitfall: the slab error',
        text: 'A taxpayer earning just above a slab boundary sometimes fears that the extra rupee will drag the whole income into the higher rate. It will not: only the slices are taxed at their own rates, which is exactly what makes the income tax progressive. The rate printed for the top band is a marginal rate — the tax on the next rupee — while the effective burden is the average rate, always lower.',
        tone: 'warn',
      },
      {
        kind: 'para',
        text: 'The goods and services tax, introduced by the Constitution’s hundred and first amendment in 2016, replaced a zoo of indirect taxes — excise, service tax, state value added taxes, octroi and more — with one architecture. A tax on any supply within a state splits into the central share (CGST) and the state share (SGST); supplies between states carry the integrated tax (IGST), which is collected by the centre and passed to the destination state — the principle that the tax belongs to where the good is consumed, not where it is produced. Rates are banded, with essentials at nil or the lowest rates, a standard band in the middle, demerit and luxury goods at the top rate plus cesses; the GST Council, a federal body of centre and state finance ministers under Article 279A, sets rates and thresholds. The engine of the whole design is the input tax credit.',
      },
      {
        kind: 'formula',
        name: 'GST remittance with input credit',
        latex: '\\text{GST payable} = \\text{output tax collected} - \\text{input tax credit}',
        meaning: 'A firm remits only the tax on the value it added: tax charged on its sales minus the tax it already paid on its inputs. Tax cascades only if credit is denied; the credit mechanism is what makes a value added tax.',
      },
      {
        kind: 'para',
        text: 'To see what the credit fixed, run the old system alongside the new. Before the unified tax, a manufacturer paid excise on the finished good with credit only for inputs within manufacturing; a trader paid state value added tax on the full sale price with credit for earlier goods-stage tax; and services sat in a separate silo. Tax on tax accumulated inside every price. Under the unified architecture, a maker buys inputs worth ₹1,00,000 plus 18 percent tax of ₹18,000; sells output worth ₹2,00,000 plus 18 percent of ₹36,000; and remits ₹36,000 − ₹18,000 = ₹18,000 — exactly 18 percent of her value added of ₹1,00,000. The consumer pays ₹36,000 in total, every rupee of it once, and the chain of credits makes each intermediate firm an unpaid collector with a self-interested incentive to demand invoices — a compliance feature no inspector could replicate. Customs completes the border side: imported goods bear basic customs duty computed on their landed value, plus the integrated tax on imports and applicable cesses, and tariffs do double duty as revenue and as protection for domestic producers — the trade-policy lesson covers the economics of that protection. On companies: domestic companies pay the base rate on their income, with concessional lower rates — including a still lower one for new manufacturing companies — available to those that forgo incentives; and the minimum alternate tax exists for companies that compute taxable profit below their book profits, flooring their liability at a fraction of book profit. One line of history explains the design: the unified tax’s predecessor, the state value added tax, had already de-cascaded goods within each state and given traders credit for the manufacturing-stage taxes embedded in their purchases — the 2016 reform extended the same credit logic across goods, services and state lines.',
      },
      {
        kind: 'para',
        text: 'A legal system that taxes must also distinguish the taxpayer’s games. Tax evasion is crime: concealing income, inflating deductions, keeping two sets of books — prosecuted, fined, imprisoned. Tax avoidance is the harder case: arranging real affairs so that the letter of the law yields a lower bill, even where the spirit objects. Tax planning is the respectable third: choosing among genuine alternatives — the form of a business, the timing of an investment — in a way the law itself invites. The boundary was drawn in India’s most quoted tax case: in Union of India v. Azadi Bachao Andolan (2003), investors routed funds through Mauritius to claim treaty shelter from capital gains, and the Supreme Court held that tax planning within the four corners of the statute and a valid treaty is legitimate — there is nothing wrong in arranging affairs to attract the lower of two tax rates. The line is patrolled ever since by statutory anti-avoidance rules, which let authorities disregard colourable steps whose only purpose is a tax advantage — the difference between using a treaty and wearing it as a mask.',
      },
      {
        kind: 'example',
        title: 'Worked Case: Three Taxes, Three Incomes',
        steps: [
          'Set the stage: three households — Amala earning ₹3,00,000 a year, Beena ₹8,00,000, and Chhaya ₹20,00,000 — face three tax systems: a stylised slab income tax (nil to ₹3,00,000; 10 percent to ₹8,00,000; 20 percent above), a flat 15 percent income tax, and an 18 percent consumption tax.',
          'Slab income tax: Amala pays nil — average rate 0 percent; Beena pays 10 percent of ₹5,00,000 = ₹50,000, average 6.25 percent; Chhaya pays ₹50,000 plus 20 percent of ₹12,00,000 = ₹2,90,000, average 14.5 percent. The average rate climbs — progressive.',
          'Flat income tax: Amala ₹45,000, Beena ₹1,20,000, Chhaya ₹3,00,000 — 15 percent for each, whatever the income. The average rate is flat — proportional.',
          'Consumption tax: assume Amala spends 90 percent of income on taxed purchases, Beena 75 percent, Chhaya 40 percent (the rest saved). Tax: ₹48,600 on ₹2,70,000 of spending; ₹1,08,000 on ₹6,00,000; ₹1,44,000 on ₹8,00,000. Average rates: 16.2, 13.5, 7.2 percent — falling as income rises, because the rich save more of it. Regressive.',
          'The design lesson: the same yield can be raised progressively, proportionally or regressively — which is why most systems lean on slab income tax for progressivity and soften consumption taxes by zero-rating essentials.',
        ],
      },
      {
        kind: 'formula',
        name: 'The Laffer curve',
        latex: 'R = t \cdot B(t), \qquad R = 0 \text{ at } t = 0 \text{ and } t = 1',
        meaning: 'Revenue is the rate times the base, and the base itself shrinks as the rate rises — through less work, less saving, evasion and migration — so revenue is zero at a zero rate and at a hundred percent, and peaks at some rate in between.',
      },
      {
        kind: 'para',
        text: 'That last formula is the Laffer curve, sketched famously on a napkin in 1974: raise the rate and revenue first rises, then falls, as the shrinking base overwhelms the higher rate. Its policy content is modest — everyone agrees the curve exists and that no one knows where the peak sits — but its warning is eternal: a rate past the peak collects less, not more, which is why tax bases broaden when rates fall and narrow when they rise. The final cost concept is deadweight loss. A tax on a good drives a wedge between what buyers pay and what sellers keep; the quantity traded falls below its untaxed level, and the mutually beneficial trades that no longer happen are lost to everyone — the buyer keeps money she would rather have spent, the seller keeps goods she would rather have sold, and the government collects nothing on trades that never occur. The elasticities lesson in the economics chapters supplies the diagram and the rule: the more elastic demand or supply is, the larger the wedge’s deadweight loss — and the stronger the case for taxing inelastic bases instead.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Canon of taxation', def: 'A rule a good tax should follow — Smith’s equality, certainty, convenience and economy, plus modern productivity, flexibility, simplicity, diversity and neutrality.' },
          { term: 'Direct tax', def: 'A tax whose burden stays where the law puts it — income tax, corporate tax.' },
          { term: 'Indirect tax', def: 'A tax collected by an intermediary and shifted to the final consumer — the goods and services tax, customs.' },
          { term: 'Progressive tax', def: 'A tax whose average rate rises with income, as slab-based income taxes are.' },
          { term: 'Regressive tax', def: 'A tax whose average rate falls as income rises, as uniform consumption taxes tend to be.' },
          { term: 'Input tax credit', def: 'Credit for the tax already paid on purchases, so a firm remits tax only on its value added.' },
          { term: 'IGST', def: 'The integrated tax on inter-state supplies, allocated to the destination state.' },
          { term: 'Tax avoidance', def: 'Arranging affairs within the letter of the law to reduce tax — legitimate at the line, fraudulent across it.' },
          { term: 'Deadweight loss', def: 'The value of mutually beneficial trades a tax prevents — the wedge’s cost beyond the revenue raised.' },
          { term: 'Laffer curve', def: 'The revenue-rate relationship: revenue is zero at rates of zero and one hundred percent, and peaks somewhere between.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A slab income tax in which higher bands pay higher rates is progressive because:',
            options: [
              'everyone pays the same amount',
              'the average tax rate rises with income, since each band is taxed at its own rate',
              'it is collected from firms, not individuals',
              'the marginal rate is always below the average rate',
            ],
            answer: 1,
            explain: 'Progressivity is about the average rate: with slabs, only the slices inside each band attract that band’s rate, so the average climbs with income.',
          },
          {
            q: 'A trader in Mumbai sells to a buyer in Pune (both in Maharashtra) at an 18 percent rate. The tax on the invoice will appear as:',
            options: [
              'IGST of 18 percent to the centre',
              'CGST 9 percent plus SGST 9 percent',
              'SGST 18 percent only',
              'customs duty 18 percent',
            ],
            answer: 1,
            explain: 'Intra-state supplies split the rate into the central and state components; the integrated tax applies to inter-state supplies and imports.',
          },
          {
            q: 'A manufacturer pays ₹18,000 input tax on purchases and charges ₹36,000 output tax on sales. She remits:',
            options: [
              '₹54,000',
              '₹36,000',
              '₹18,000',
              'nothing, since a manufacturer is exempt',
            ],
            answer: 2,
            explain: 'The input tax credit wipes out the tax embedded in purchases, so only the tax on her value added — ₹18,000 — is remitted.',
          },
          {
            q: 'Using a double-taxation treaty route that strictly follows the letter of the law to cut tax, without concealment, is:',
            options: [
              'tax evasion, and criminal',
              'tax planning or avoidance — lawful at the line, as the Supreme Court held in the treaty case law on tax planning',
              'irrelevant to tax law',
              'the same as filing false accounts',
            ],
            answer: 1,
            explain: 'Evasion hides income and falsifies records; planning arranges real affairs within the statute and treaties. The classic Indian authority upholding legitimate treaty-based planning is the Azadi Bachao Andolan decision (2003).',
          },
          {
            q: 'Beyond the revenue it raises, a tax on a good typically creates:',
            options: [
              'a surplus for both buyers and sellers',
              'deadweight loss — some mutually beneficial trades no longer happen because the tax drives a wedge between what buyers pay and sellers receive',
              'an increase in the quantity traded',
              'no effect on prices',
            ],
            answer: 1,
            explain: 'The wedge shrinks the quantity below its untaxed level; the trades priced out of existence are the deadweight loss, and the more elastic demand or supply is, the larger it is.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the fiscal policy lesson in the macro chapters, which explains why governments need the revenue this lesson explains how they raise; pair it with Supply, Demand and Elasticity for the diagram behind deadweight loss, and with the trade-policy lesson for the economics of tariffs. Follow-ons: the companies lesson in this chapter supplies the corporate forms behind corporate tax, and the accounting chapters’ lessons show tax provisioning in the financial statements.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Taxes fund public goods, redistribute income and steer behaviour — compulsory payments with no direct quid pro quo.',
          'Smith’s canons — equality, certainty, convenience, economy — plus modern productivity, flexibility, simplicity, diversity and neutrality.',
          'Direct taxes stay where placed; indirect taxes shift to consumers; average-rate behaviour separates progressive, proportional and regressive.',
          'Slab taxation taxes each band at its own rate: marginal rates rise, average rates follow, and no threshold is a cliff.',
          'The unified goods and services tax splits intra-state supplies between centre and state, uses the integrated tax for inter-state, and lives on the input credit.',
          'Evasion conceals; avoidance arranges within the law; the Supreme Court’s treaty ruling drew the line and later anti-avoidance rules patrol it.',
          'Every tax beyond its revenue creates deadweight loss by pricing out trades — and the Laffer curve warns that rates past the peak collect less, not more.',
        ],
      },
    ],
  },
]
