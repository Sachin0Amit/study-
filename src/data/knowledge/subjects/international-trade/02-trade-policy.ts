/**
 * Knowledge Universe — International Trade — Chapter 02: Trade Policy
 * 1 lesson · ~1,651 words
 * field: International Trade
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Trade Policy]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bus-trade-policy-tariffs — Trade Policy: Tariffs, Quotas and Trade Wars
 */
import type { KnowledgeTopic } from '../../types'

export const internationalTradeCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  // Source-grounded 2026-10-20: OpenStax Principles of Economics
  // ("Globalization and Protectionism" chapter treatment) — tariff and
  // quota welfare analysis with consumer/producer surplus and deadweight
  // loss, nontariff barriers, the WTO, and the standard arguments for
  // restricting imports (national defense, infant industry, anti-dumping,
  // jobs) with the text's evaluation of each. Continues the
  // bus-comparative-advantage lesson's theory into the policy layer.
  {
    id: 'bus-trade-policy-tariffs',
    title: 'Trade Policy: Tariffs, Quotas and Trade Wars',
    domain: 'Business & Economics',
    field: 'International Trade',
    branch: 'Trade Policy',
    tier: 'intermediate',
    concepts: [
      'The instrument set: tariffs, quotas, subsidies, nontariff barriers',
      'Tariff welfare accounting: who gains, who loses',
      'The two deadweight triangles',
      'Quota rents and the tariff–quota equivalence',
      'Concentrated gains versus diffuse losses',
      'The standard arguments for protectionism, evaluated',
      'The WTO, agreements and retaliation',
    ],
    words: 1651,
    readMins: 8,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'The comparative-advantage lesson proved that both countries gain from exchange at the right terms. Politics then asks the follow-up question: everyone gains in aggregate, but who gains here, and can the losers organize? Trade policy — tariffs, quotas, and their quieter cousins — is the answer societies give, and it is a story about redistribution disguised as arithmetic. This topic builds the welfare accounting of a tariff piece by piece, shows why the losses always exceed the gains, and then evaluates the standard arguments for protectionism the way an economics text does: seriously, and mostly against.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Tariffs are back: the large tariff rounds of recent years touched everything from washing machines to semiconductors, and studies of their effects consistently find the cost landing mostly on domestic buyers of the taxed goods. Reading a tariff headline without the welfare toolkit means accepting whichever distributional claim is loudest.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The instrument set is wider than the headlines. A tariff is a tax levied on imported goods as they cross the border — specific (dollars per unit) or ad valorem (a percentage of value). A quota caps the physical quantity that may be imported. Subsidies prop up exporters or import-competing producers from the budget. Nontariff barriers do the same work with paperwork: product standards, licensing regimes, customs delays, local-content rules. The economics treats tariffs and quotas as near-twins — both raise the domestic price above the world price — with one sharp difference in who collects the markup: a tariff sends revenue to the government, while a quota hands the difference between the world and domestic price to whoever holds the import licenses. Those license profits are called quota rents, and governments that want to hand out favors prefer quotas precisely because the rents are assignable.',
      },
      {
        kind: 'para',
        text: 'Now the accounting, for a small country that takes the world price as given. Impose a tariff: the domestic price rises to the world price plus the tariff. Consumers respond by buying less — their lost surplus is the largest rectangle-and-triangle on the diagram. Domestic producers respond by making more at higher cost — they gain surplus, but part of that gain is real resources diverted into more expensive domestic production rather than value created. The government collects the tariff on the surviving imports. Consumer loss minus producer gain minus government revenue is the net national loss: two triangles, one on the production side and one on the consumption side. The country has paid real resources to shrink its own trade.',
      },
      {
        kind: 'para',
        text: 'Why do the losses persist politically? Because of the shape of the coalitions, not the size of the stakes. Protection concentrates its gains on a few identifiable firms and their workers — an industry can measure the tariff\u2019s benefit per member in thousands — while the cost is smeared across millions of consumers as a few dollars each, buried inside the price. Lobbying economics therefore favors the protection seekers systematically: a rational industry spends heavily to win what a rational public will not spend anything to oppose. This is the public-choice engine behind the observation that trade barriers are common even though their aggregate effect is negative.',
      },
      {
        kind: 'para',
        text: 'The textbook\u2019s standard arguments for restricting imports deserve their list. National defense: some industries are strategic, but the honest tool is targeted procurement or subsidies, not tariffs that tax every consumer purchase. Infant industry: young industries may need shelter to reach scale — but the argument fails in practice when the infant never grows up, because the protection itself builds the lobby that outlives the justification. Anti-dumping: below-cost foreign sales can be predatory, but dumping cases are frequently filed by domestic producers as ordinary protection in disguise. Jobs: tariffs do preserve specific jobs, while destroying less visible jobs elsewhere — in export industries hit by retaliation and in every household\u2019s budget — and the per-job cost to consumers is routinely many times the wage saved.',
      },
      {
        kind: 'para',
        text: 'At the system level, the General Agreement on Tariffs and Trade and its successor, the World Trade Organization, turn trade policy from bilateral feuding into rules: bound tariff schedules, most-favored-nation treatment, and a dispute-settlement process that converts grievances into cases rather than reprisals. The system works because each country calculates that measured retaliation under rules beats unpredictable trade war — but the constraint is political, and the pressure valves (national-security exceptions, anti-dumping) are exactly where modern disputes collect. When a large country does raise tariffs, the textbook\u2019s terms-of-trade logic and the target\u2019s retaliation both operate, which is why big-country trade wars have no diagram where the initiator visibly wins.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Net national loss from a tariff',
        latex: 'DWL = \\tfrac{1}{2}\\, t \\cdot (Q_{d0} - Q_{d1}) + \\tfrac{1}{2}\\, t \\cdot (Q_{s1} - Q_{s0})',
        meaning: 'With tariff t per unit, the two deadweight triangles: the value of consumption squeezed out plus the extra resource cost of inefficient domestic production.',
      },
      {
        kind: 'formula',
        name: 'Consumer surplus lost to the tariff',
        latex: '\\Delta CS = t \\cdot \\frac{Q_{d0} + Q_{d1}}{2}',
        meaning: 'The full area between the two prices under the demand curve — the pool from which producer gains, government revenue and deadweight losses are all paid.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Set the market: world price 500 per unit, domestic demand 200 and domestic supply 100 at that price, so imports are 100. The country now imposes a tariff of 100 per unit.',
          'New domestic price: 600. Demand falls to 170; domestic supply rises to 120; imports shrink to 50.',
          'Consumer surplus lost: 100 × (200 + 170) ÷ 2 = 18,500. Producer surplus gained: 100 × (100 + 120) ÷ 2 = 11,000. Government revenue: 100 × 50 = 5,000.',
          'Net national loss: 18,500 − 11,000 − 5,000 = 2,500 — exactly the two triangles (production distortion ½ × 100 × 20 = 1,000; consumption distortion ½ × 100 × 30 = 1,500). Domestic producers gained more than the nation, and the tariff\u2019s political support is explained by that 11,000 concentrated on them.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Smoot–Hawley (1930) raised US tariffs on thousands of goods; partner countries retaliated and world trade collapsed by roughly two-thirds in value during the Depression — the canonical demonstration of the retaliation spiral.',
          'The US "chicken tax" — a 25% tariff on imported light trucks imposed in 1964 over European retaliation on chicken — still shapes the vehicle market six decades later: protection outlives its grievance.',
          'Sugar quotas keep the US domestic price at roughly double the world price, a textbook quota rent transferred to license holders and protected growers, costing consumers far more than producers gain.',
          'The tariff rounds of 2018 onward (washing machines, steel, aluminum, and the wider US–China exchange) produced measured consumer-price increases on the taxed goods and symmetric retaliation on agricultural exports — the small-country diagram made large and empirical.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three errors repeat across centuries. "Tariffs make the exporter pay" — no: the incidence lands overwhelmingly on domestic buyers, since the tariff is collected at the domestic border and world suppliers re-price only partially. "A tariff and a quota are the same thing" — equivalent in price effects, but a quota also surrenders the revenue as assignable rents and, under growing demand, caps quantity while a tariff caps price. "Cheap foreign labor makes trade unfair" — wages reflect productivity; a country can pay high wages and still export because its workers produce more per hour, which is precisely Ricardo\u2019s logic re-read.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Tariff', def: 'A tax on imported goods, specific (per unit) or ad valorem (percentage of value).' },
          { term: 'Quota', def: 'A quantitative cap on imports, allocated through licenses; the price gap becomes quota rent.' },
          { term: 'Quota rent', def: 'The profit earned by whoever holds the right to import at the domestic-minus-world price gap.' },
          { term: 'Deadweight loss', def: 'The net national loss from a tariff or quota: consumption plus production distortions not captured by anyone.' },
          { term: 'Nontariff barrier', def: 'Standards, licensing, customs procedures or local-content rules that restrict imports without a border tax.' },
          { term: 'WTO', def: 'The World Trade Organization, successor to GATT: bound schedules, most-favored-nation treatment, and dispute settlement.' },
          { term: 'Retaliation', def: 'Trading partners\u2019 counter-tariffs; the mechanism by which a tariff on one product becomes a trade war.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the small-country tariff diagram, the two deadweight triangles measure:',
            options: ['Government revenue plus quota rents', 'Lost consumption value plus inefficient extra domestic production', 'Consumer surplus transferred to producers', 'Export losses abroad'],
            answer: 1,
            explain: 'Consumers who exit the market and resources wasted making high-cost units are real losses to no one\u2019s gain — the definition of deadweight.',
          },
          {
            q: 'A quota differs from an equivalent tariff chiefly because:',
            options: ['It raises the domestic price more', 'The markup becomes assignable license rent instead of government revenue', 'It cannot be repealed', 'It affects only exports'],
            answer: 1,
            explain: 'Price effects are near-identical; the difference is who collects the gap — license holders under a quota, the treasury under a tariff.',
          },
          {
            q: 'Why do protectionist policies survive despite negative aggregate effects?',
            options: ['Consumers enjoy paying them', 'Gains are concentrated on organized producers while costs are diffuse across consumers', 'Economists cannot measure them', 'They always raise employment'],
            answer: 1,
            explain: 'Public-choice arithmetic: a small lobby\u2019s per-member stakes dwarf each consumer\u2019s few dollars, so lobbying effort is systematically lopsided.',
          },
          {
            q: 'The infant-industry argument is weakest because:',
            options: ['No industry ever matured behind a tariff', 'Protection, once granted, builds a lobby that outlives the infant stage', 'Foreign firms refuse to compete', 'It requires a trade agreement'],
            answer: 1,
            explain: 'The theory is coherent; the practice fails at exit — removing protection means revoking rents from the very interests the policy created.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisite: the comparative-advantage lesson — this topic is its political sequel. Continue with the monetary-policy lesson for how exchange rates re-price trade overnight, the public-policy subject for rent-seeking and regulatory capture, and the economic-history angle for Smoot–Hawley\u2019s full anatomy.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Tariffs tax imports and raise domestic prices; quotas cap quantity and hand the gap to license holders.',
          'The tariff ledger: consumer losses exceed producer gains plus revenue — the difference is two deadweight triangles.',
          'Protection persists because gains are concentrated and losses are diffuse.',
          'The standard arguments (defense, infant industry, anti-dumping, jobs) each carry a sharper, better-targeted alternative.',
          'GATT/WTO turn feuds into rules; retaliation is why trade wars have no winning diagram.',
        ],
      },
    ],
  },
]
