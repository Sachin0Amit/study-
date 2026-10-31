/**
 * Knowledge Universe — Energy & Sustainability — Chapter 01: The Energy Transition
 * 1 lesson · ~1,128 words
 * field: Energy & Sustainability
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Energy Policy]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 env-renewable-transition — The Renewable Energy Transition
 */
import type { KnowledgeTopic } from '../../types'

export const energyCh01: KnowledgeTopic[] = [
  {
    id: 'env-renewable-transition',
    title: 'The Renewable Energy Transition',
    domain: 'Environment & Sustainability',
    field: 'Energy & Sustainability',
    branch: 'Energy Policy',
    tier: 'intermediate',
    concepts: [
      'Primary energy, final energy and electricity',
      'Variable generation from sun and wind',
      'Capacity factor',
      'Storage, grids and flexibility',
      'Learning curves and cost declines',
      'System integration and stranded assets',
    ],
    words: 1128,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: "The renewable energy transition is the attempt to move the world's energy system — still more than 80 percent fossil-fuelled — onto sunlight, wind, water, biomass and the Earth's internal heat. Solar and wind are now the cheapest new electricity in most of the world, so the hard questions have moved to grids, storage, heavy industry and sheer speed: electricity is only about one-fifth of final energy, and the rest — steel, cement, shipping, heating, flying — must be electrified or reinvented.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Three-quarters of greenhouse-gas emissions come from energy. How fast coal retires, how fast heat pumps and electric vehicles scale, and how well grids absorb variable wind and sun largely decide how much the planet warms.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Energy statistics separate primary energy — the raw fuel pulled from nature — from final energy delivered to consumers. A coal plant converts about 38 percent of its fuel into power and discards the rest as waste heat, while a solar array delivers its output directly. That asymmetry makes 'renewable share of electricity' and 'renewable share of energy' very different numbers, and mixing them up exaggerates progress.",
      },
      {
        kind: 'para',
        text: "Solar and wind are called variable because weather, not demand, sets their output. Their fuel is free, so every kilowatt-hour they generate displaces the most expensive fossil plant running — solar now routinely pushes midday wholesale prices toward zero, the 'duck curve' etched into California's grid. But the energy arrives on nature's schedule, and a calm, overcast winter week is the stress test a power system must survive.",
      },
      {
        kind: 'para',
        text: "A plant's capacity factor is its average output divided by its nameplate rating. Utility solar runs 15-25 percent, onshore wind 25-45 percent, offshore wind 50 percent or more, while nuclear sustains about 90 and gas near 50. Capacity factor is not efficiency — it records how often and how hard a plant runs. Comparing megawatts without capacity factors is the fastest way to misjudge an energy plan.",
      },
      {
        kind: 'para',
        text: "Matching variable supply to demand takes flexibility. Lithium-ion batteries smooth hours-long swings, yet pumped hydro still stores most of the world's grid electricity. Long-distance transmission lets windy plains serve distant cities, demand response shifts consumption into sunny hours, and surplus output can be curtailed — deliberately spilled. The unsolved frontier is seasons: banking summer's solar for a windless week in February, likely through hydrogen.",
      },
      {
        kind: 'para',
        text: "Each doubling of cumulative solar-panel production has cut module cost by roughly 20 percent — Wright's law, now repeating in wind turbines, batteries and electrolyisers. Module prices fell from over 100 dollars per watt in the mid-1970s to well under 30 cents today, which is why deployment, not invention, became the main lever: every gigawatt built makes the next one cheaper.",
      },
      {
        kind: 'para',
        text: 'The last quarter of a decarbonised grid is far harder than the first half. Firm low-carbon sources — nuclear, hydro, geothermal — plus long-duration storage must cover extended lulls, and grids must supply the inertia that spinning turbines once provided free. Meanwhile utilities and oil regions face stranded assets: infrastructure worth billions that climate policy may render unprofitable before the end of its paying life.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Capacity factor',
        latex: 'CF = \\frac{E_{\\text{actual}}}{P_{\\text{rated}} \\times 8760}',
        meaning: 'Actual annual energy divided by what the nameplate rating would produce running flat-out all 8,760 hours of a year.',
      },
      {
        kind: 'formula',
        name: "Wright's law",
        latex: 'C_n = C_0 \\left( \\frac{n}{n_0} \\right)^{-b}',
        meaning: 'Cost falls by a constant fraction per doubling of cumulative production n; a 20 percent learning rate means b ≈ 0.32.',
      },
      {
        kind: 'formula',
        name: 'Levelised cost of electricity',
        latex: 'LCOE = \\frac{\\sum_{t=0}^{T} \\frac{I_t + M_t}{(1+r)^t}}{\\sum_{t=0}^{T} \\frac{E_t}{(1+r)^t}}',
        meaning: 'Discounted lifetime costs divided by discounted lifetime generation — the price per megawatt-hour a plant must earn to break even.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the solar capacity, running at a 20 percent capacity factor, that delivers the annual energy of a 1,000 MW nuclear plant at 90 percent.',
          'Recall the governing idea: annual energy equals nameplate capacity times capacity factor times 8,760 hours.',
          'Apply: the reactor generates 1,000 × 0.90 × 8,760 ≈ 7,880 GWh a year; matching that with solar requires 7,880 ÷ (8,760 × 0.20) = 4,500 MW of panels.',
          'State the result: about 4.5 GW of solar matches 1 GW of nuclear in yearly energy — but it arrives only in daylight, so firm capacity, storage or overbuild must cover the nights.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'National decarbonisation pathways that phase out coal while keeping the lights on',
          'Corporate power-purchase agreements funding new wind and solar farms at fixed prices',
          'Grid-operator planning for resource adequacy, storage tenders and transmission',
          'Off-grid solar-and-battery systems delivering first-time electricity to remote villages',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Nameplate capacity is not energy: a gigawatt of solar is roughly a quarter-gigawatt of average power. LCOE hides the integration costs — storage, transmission, curtailment — that climb with renewable share. And clean electricity is only the beginning: steel, cement, aviation and shipping will not decarbonise by plugging into a socket.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Primary energy', def: 'Energy in raw fuels before conversion; fossil plants waste most of it as heat.' },
          { term: 'Capacity factor', def: 'Average output divided by nameplate capacity; how hard a plant runs.' },
          { term: 'Intermittency', def: 'The weather-driven variability of solar and wind output, unrelated to demand.' },
          { term: 'Levelised cost of electricity', def: 'Discounted lifetime cost over lifetime generation; the break-even price per megawatt-hour.' },
          { term: 'Learning curve', def: 'The fall in unit cost as cumulative production doubles; about 20 percent per doubling for solar.' },
          { term: 'Curtailment', def: 'Deliberately spilling available renewable output the grid cannot absorb.' },
          { term: 'Stranded asset', def: 'Fossil infrastructure whose value collapses before the end of its life.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A 300 MW wind farm runs at a 35 percent capacity factor. Its annual generation is closest to:',
            options: ['0.26 TWh', '0.92 TWh', '2.6 TWh', '26 TWh'],
            answer: 1,
            explain: 'E = 300 × 0.35 × 8,760 ≈ 920,000 MWh, about 0.92 TWh.',
          },
          {
            q: 'Under a 20 percent learning rate, each doubling of cumulative production makes the cost:',
            options: [
              'fall to 80 percent of its previous level',
              'fall to 20 percent of its previous level',
              'rise because factories must retool',
              'stay constant in real terms',
            ],
            answer: 0,
            explain: 'The learning rate is the cost drop per doubling: 20 percent cheaper, leaving 80 percent.',
          },
          {
            q: 'The central challenge solar and wind pose to grid operators is that:',
            options: [
              'their fuel is expensive and volatile in price',
              'they cannot be connected to transmission networks',
              'their output follows weather rather than demand',
              'they generate only alternating current',
            ],
            answer: 2,
            explain: 'Variability, not cost: supply and demand must balance every second.',
          },
          {
            q: "Renewables supply 30 percent of a country's electricity, itself about 20 percent of final energy. The renewable share of total energy is roughly:",
            options: ['30 percent', '20 percent', '6 percent', '50 percent'],
            answer: 2,
            explain: '0.30 × 0.20 = 0.06, about six percent — electrifying heat and transport matters as much as cleaning the grid.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Within this domain, pair with carbon sinks and the global carbon budget to see how fast the transition must run, and with nuclear fission technology for firm low-carbon power. Learning-curve economics links onward to manufacturing and industrial policy.',
        tone: 'path',
      },
    ],
  },
]
