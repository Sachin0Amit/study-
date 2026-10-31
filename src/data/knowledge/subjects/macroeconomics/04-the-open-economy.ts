/**
 * Knowledge Universe — Macroeconomics — Chapter 04: The Open Economy
 * 1 lesson · ~1,503 words
 * field: Macroeconomics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Open Economy]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 econ-exchange-rates-bop — Exchange Rates and the Balance of Payments
 */
import type { KnowledgeTopic } from '../../types'

export const macroeconomicsCh04: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'econ-exchange-rates-bop',
    title: 'Exchange Rates and the Balance of Payments',
    domain: 'Business & Economics',
    field: 'Macroeconomics',
    branch: 'Open Economy',
    tier: 'intermediate',
    concepts: [
      'The exchange rate as a price of currencies',
      'Demand and supply shifts in foreign exchange',
      'Purchasing power parity as a long-run anchor',
      'Balance of payments: current and financial accounts',
      'Current-account deficit = net capital inflow',
      'Fixed, floating and soft-peg regimes',
      'The impossible trinity of open-economy policy',
    ],
    words: 1501,
    readMins: 7,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Goods, services and capital cross borders, and every crossing demands a currency swap — so the exchange rate, the price of one money in terms of another, is where an economy meets the world. This lesson completes the closed-economy toolkit of the earlier macro lessons (output and inflation, fiscal and monetary policy) with the open economy: how currency prices are set, how the balance-of-payments ledger records every international transaction, and why the choice of exchange-rate regime trades one kind of stability for another.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Exchange rates decide the price of your holiday, your imported phone, your country’s exports, and the local-currency value of every foreign asset you or your pension fund holds. Peg collapses — the mechanic behind several historic financial crises — begin as quiet mismatches between a chosen rate and economic fundamentals.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'An exchange rate is just a price, and so it yields to supply and demand. Foreigners need the home currency to buy its exports and assets: that demand, met against residents supplying currency to buy imports and foreign assets, settles the market rate. When the price of a currency in another rises the currency appreciates; when it falls it depreciates. Who wins and who loses flips with the direction: a weaker currency cheers exporters (their goods get cheaper abroad) and overseas earners, while squeezing importers and anyone holding foreign-currency debt; a stronger currency does the reverse. “Strong” is therefore not automatically “good” — it redistributes between sectors.',
      },
      {
        kind: 'para',
        text: 'What moves the curves? Interest-rate differentials: capital chases higher real returns, so a domestic rate hike tends to pull money in and appreciate the currency. Inflation differentials: the country that persistently inflates faster watches its currency slide. Growth prospects, risk sentiment and commodity exposure move rates too. Over the long haul, purchasing power parity anchors the level: a basket costing 100 units at home and 6 units abroad implies a parity rate of about 16.7 home-units per foreign unit; market rates drift far from parity for years — productivity, trade barriers and capital flows see to that — but persistent gaps get punished by inflation differentials eventually. The real exchange rate folds prices back in: nominal rate times domestic price level over foreign price level, the number that actually prices exports against imports.',
      },
      {
        kind: 'para',
        text: 'The balance of payments is the country’s international ledger, kept by double entry: every transaction is recorded twice, once as a credit and once as a debit, so the whole account always sums to zero by construction. The informative split is between the current account — trade in goods and services, primary income from foreign assets and labour, and transfers such as remittances — and the capital-and-financial account, which records purchases and sales of assets: direct investment, portfolio flows, and changes in official reserves. The operative identity: a current-account deficit is matched by a net financial inflow. A country importing more than it exports is, by definition, borrowing from or selling assets to the rest of the world — which is financing investment, not necessarily “losing”. The US runs chronic deficits; Japan and Germany run surpluses; both patterns reflect saving-investment gaps, not virtue or vice.',
      },
      {
        kind: 'para',
        text: 'Regimes order the spectrum of intervention. Floating: the market sets the rate daily, and the central bank merely watches. Fixed (pegged): the central bank promises a rate and stands behind it, buying or selling its reserves whenever the market leans — credibility priced in reserve holdings. Between sit the soft and crawling pegs, which drift within bands or step by small announced amounts, and the extremes of a currency board or full dollarisation, which surrender monetary policy almost entirely. Floats absorb shocks flexibly but swing; pegs import the anchor country’s stability but invite speculative attack when fundamentals diverge.',
      },
      {
        kind: 'para',
        text: 'The organising theorem is the impossible trinity: a country can have at most two of a fixed exchange rate, free capital movement and an independent monetary policy. A float gives policy independence plus open capital markets; a hard peg gives exchange stability plus open capital markets at the price of importing interest policy; closing capital accounts can preserve both a peg and independence, at the cost of financial openness. Historic peg collapses follow the same script: defend an overvalued rate with reserves, reserves run out, devaluation arrives with a crisis attached — the “first-generation” attack model, played out repeatedly across decades and continents. Depreciation after a collapse passes through to import prices before exports respond — the J-curve dip before the recovery.',
      },
      {
        kind: 'formula',
        name: 'Purchasing power parity',
        latex: 'E_{\\text{PPP}} = \\frac{P_{\\text{domestic}}}{P_{\\text{foreign}}}, \\quad E_{\\text{real}} = E_{\\text{nominal}} \\times \\frac{P_{\\text{domestic}}}{P_{\\text{foreign}}}',
        meaning: 'Parity sets the nominal rate that equalises a basket’s price across countries; the real exchange rate — nominal rate times the price ratio — is what prices tradables against each other, and its movements move the trade balance.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a basket costs 100 home-units domestically and 6 foreign-units abroad; the market rate is 20 home-units per foreign-unit. How misaligned is the market rate from parity, and in which direction?',
          'Recall the parity rule: the PPP rate is the domestic price level divided by the foreign price level.',
          'Apply: E_PPP = 100 ÷ 6 ≈ 16.7 home-units per foreign-unit. The market rate of 20 means foreigners get more home-currency per foreign-unit than parity implies — the home currency is undervalued by roughly (20 − 16.7) ÷ 20 ≈ 17 percent.',
          'State the result: home goods are about a fifth cheaper than parity predicts — classic conditions for a current-account surplus building over time, exactly the pressure that eventually drags market rates back toward parity.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Remittance corridors: migrant families watch the rate the way farmers watch rain.',
        'Corporate hedging: exporters and importers lock forward rates against exactly the volatility this lesson describes.',
        'Reserve management: central banks accumulate foreign assets as insurance for defence of a peg or smoothing of a float.',
        'Travel budgeting and cross-border e-commerce pricing, where PPP gaps show up as “cheaper in” destinations.',
        'Crisis playbooks: rate hikes, reserve deployment, and conditional international-support programmes after peg defence fails.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'A current-account deficit is not a country “losing money” — it is a saving-investment statement, and sometimes a growth story financed abroad. The balance of payments always sums to zero even when the current account is wildly imbalanced. Depreciation is not always bad news, nor appreciation always good. A fixed rate is a standing policy promise, not a freebie: it costs reserves and, per the trinity, monetary independence. And PPP is a long-run anchor — betting on short-run convergence has bankrupted better traders than any exam candidate.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'exchange rate', def: 'The price of one currency expressed in another; appreciates or depreciates with market forces.' },
        { term: 'purchasing power parity', def: 'The long-run rate at which a basket of goods costs the same everywhere.' },
        { term: 'real exchange rate', def: 'Nominal rate adjusted by the domestic-to-foreign price ratio; prices tradables against each other.' },
        { term: 'current account', def: 'The BOP record of goods, services, primary income and transfers.' },
        { term: 'financial account', def: 'The BOP record of cross-border asset transactions, including reserves.' },
        { term: 'foreign exchange reserves', def: 'Central-bank holdings of foreign assets used to defend a rate or smooth a float.' },
        { term: 'impossible trinity', def: 'Fixed rate, free capital movement and independent monetary policy — pick any two.' },
        { term: 'J-curve', def: 'The post-devaluation path where the trade balance worsens before it improves.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'A country runs a current-account deficit. By BOP identity, it is simultaneously…',
          options: ['running a matching financial-account surplus', 'increasing its official reserves', 'necessarily in a recession', 'printing more of its own currency'],
          answer: 0,
          explain: 'Double-entry guarantees the gap is financed by net asset sales or borrowing — a financial inflow, not a lost ledger line.',
        },
        {
          q: 'Under an open capital account, a country that fixes its exchange rate must…',
          options: ['surrender independent monetary policy', 'surrender fiscal policy', 'abandon its central bank entirely', 'float at least occasionally'],
          answer: 0,
          explain: 'The impossible trinity: fixing the rate with free capital flows means interest policy must serve the peg, not the domestic cycle.',
        },
        {
          q: 'Immediately after a sharp depreciation, the trade balance often…',
          options: ['improves at once', 'worsens before improving — the J-curve', 'stays permanently unchanged', 'turns from surplus to deficit by law of one price'],
          answer: 1,
          explain: 'Import bills repricing beats export response; volumes take months to adjust, so the balance dips first.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the GDP vital-signs lesson for accounting fluency and the monetary-policy lesson for interest-rate logic; the comparative-advantage lesson explains why trade happens at all — this one explains how it is paid for. Follow with the fiscal-policy lesson to see how open-economy leakages weaken multipliers. Grounding texts: OpenStax Principles of Economics 3e, chapters on exchange rates and international capital flows and on open-economy macroeconomic adjustments (2022), and the open-economy unit of any standard macro principles course.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The exchange rate is a price: demand from exports and inflows, supply from imports and outflows.',
        'Interest and inflation differentials move rates; PPP anchors them in the long run.',
        'The BOP always balances; the split between current and financial accounts tells the story.',
        'A current-account deficit equals a net capital inflow — financing, not failure.',
        'The impossible trinity forces a choice among fixed rates, open capital and monetary independence.',
      ] },
    ],
  },
]
