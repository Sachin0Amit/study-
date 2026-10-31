/**
 * Knowledge Universe — Energy & Sustainability — Chapter 05: Energy Systems & Grids
 * 1 lesson · ~1,009 words
 * field: Energy Systems
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Energy Systems]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 tech-lithium-ion-charging-chemistry — Lithium-Ion Batteries and the Chemistry of Charging
 */
import type { KnowledgeTopic } from '../../types'

export const energyCh05: KnowledgeTopic[] = [
  {
    id: 'tech-lithium-ion-charging-chemistry',
    title: 'Lithium-Ion Batteries and the Chemistry of Charging',
    domain: 'Technology & Applied Science',
    field: 'Energy Systems',
    branch: 'Electrochemical Storage',
    tier: 'intermediate',
    concepts: [
      'intercalation hosts and the rocking-chair cell',
      'the four cell voltages and state of charge',
      'constant-current then constant-voltage charging',
      'solid-electrolyte interphase (SEI)',
      'lithium plating and fast-charge limits',
      'thermal runaway chain reactions',
      'degradation: cycle aging and calendar aging',
    ],
    words: 1009,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A lithium-ion cell is a rocking chair for ions: lithium shuttles between a layered oxide cathode and a graphite anode, inserting itself into each host without destroying the crystal structure. That reversibility — charge and discharge merely push the ions back and forth — is why the chemistry has conquered phones, cars and grids in a single generation. Understanding what happens during charging explains every charging rule you have ever been told.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Battery behavior — why fast charging hurts, why heat kills, why 80% is a magic number — follows directly from the electrochemistry. This topic turns charging folklore into mechanism.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Charging and discharging move lithium ions between intercalation hosts: on discharge they flow from graphite to the metal-oxide cathode through the electrolyte; on charge they are pushed back. Both hosts swell slightly as ions enter, so a cell literally breathes with its state of charge.',
      },
      {
        kind: 'para',
        text: 'Cell voltage tracks lithium concentration in the electrodes, which makes voltage a usable proxy for state of charge — but a nonlinear one. The flat middle of the discharge curve is why a phone seems to sit at 50% for hours, then dive; chemistry, not conspiracy.',
      },
      {
        kind: 'para',
        text: 'Charging runs in two phases: constant current pushes amps in while voltage climbs, then constant voltage holds the peak while current tapers. CC-CV is the universal lithium charging protocol; forcing constant current all the way to full would drive the anode potential negative and start plating metal.',
      },
      {
        kind: 'para',
        text: 'The first few charges form the solid-electrolyte interphase — a passivation film on the graphite that lets lithium ions through but blocks electrons. The SEI consumes a little lithium permanently, which is one reason a new device gains its fullest capacity only after formation and never quite after deep abuse.',
      },
      {
        kind: 'para',
        text: 'Lithium plating is the fast-charging bogeyman: push current faster than the graphite can intercalate and metallic lithium deposits on the surface instead, losing capacity and growing dendrites that can eventually pierce the separator. Temperature, state of charge and current all set how fast is too fast.',
      },
      {
        kind: 'para',
        text: 'Thermal runaway is the failure mode behind every battery fire headline: overheating triggers cathode decomposition, which releases oxygen, which feeds further reactions in an accelerating chain. Chemistries trade energy density against trigger temperature — which is why grid cells and phone cells are not the same formula.',
      },
      {
        kind: 'para',
        text: 'Aging comes in two clocks. Cycle aging counts charge-throughput wear, worst at high depth of discharge and high current. Calendar aging ticks with time and temperature, worst at high storage voltage — the chemistry behind the advice to store devices half-charged and cool.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Cell energy',
        latex: 'E = V_{\\mathrm{nom}} \\times Q',
        meaning: 'Nominal voltage times charge capacity (Ah) gives watt-hours of stored energy.',
      },
      {
        kind: 'formula',
        name: 'C-rate',
        latex: '\\text{C-rate} = \\frac{I}{Q}',
        meaning: 'Current normalized to capacity: 1C charges in about an hour, 2C in half.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a 3,000 mAh phone supports 30 W charging at 3.85 V nominal — what C-rate is that, and why does it taper?',
          'Recall the governing idea: C-rate is charging current divided by capacity; CC-CV protocol forces current to taper as voltage approaches its ceiling to avoid plating.',
          'Apply it to the specifics: 30 W ÷ 3.85 V ≈ 7.8 A, and 7.8 A ÷ 3 Ah ≈ 2.6C. The cell can accept that only at low state-of-charge; past roughly 60–70%, the constant-voltage phase progressively starves the current.',
          'State the result: the "30 W" claim is a peak at low charge; the average over a full charge is far lower — not marketing failure but CC-CV chemistry doing its protective job.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Electric vehicles — battery packs with liquid thermal control and plating-aware fast-charge maps',
          'Phones and laptops — 80% charge limits and optimized overnight trickle, straight from aging physics',
          'Grid storage — cooler-running chemistries (like lithium iron phosphate) traded for cycle life',
          'Battery management systems — per-cell voltage monitoring and balancing across the pack',
          'Aviation and satellites — carefully derated cells where replacement is not an option',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not equate watts with speed: a high-watt charger only helps while the cell can accept the current. Do not store cells at 100% or run them to zero routinely — both extremes accelerate calendar and cycle aging; the happy band is roughly 20–80%.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Intercalation', def: 'Reversible insertion of guest ions into a layered host structure.' },
          { term: 'CC-CV charging', def: 'Constant current until a voltage ceiling, then constant voltage with tapering current.' },
          { term: 'SEI', def: 'Solid-electrolyte interphase: the passivation film on the anode that conducts ions but not electrons.' },
          { term: 'Lithium plating', def: 'Metallic lithium deposition when charging outruns intercalation; capacity loss and dendrite risk.' },
          { term: 'Thermal runaway', def: 'Self-accelerating exothermic decomposition cascading through a cell.' },
          { term: 'Cycle versus calendar aging', def: 'Wear from charge throughput versus wear from time, temperature and storage voltage.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'During constant-voltage charging, the current:',
            options: ['Rises', 'Tapers off', 'Stays fixed', 'Reverses'],
            answer: 1,
            explain: 'With voltage pinned at the ceiling, the cell\'s acceptance falls as it fills, so current decays exponentially toward zero.',
          },
          {
            q: 'Fast charging at low temperature is risky mainly because of:',
            options: ['Cathode cracking', 'Lithium plating on the anode', 'Electrolyte evaporation', 'Separator melting'],
            answer: 1,
            explain: 'Cold graphite intercalates slowly, so aggressive current deposits metallic lithium instead of inserting ions.',
          },
          {
            q: 'The SEI layer matters because it:',
            options: [
              'Stores extra lithium',
              'Passes ions but blocks electrons, stabilizing the anode',
              'Cools the cell',
              'Balances the pack',
            ],
            answer: 1,
            explain: 'It selectively conducts lithium ions while insulating electrons, preventing further electrolyte decomposition at the anode.',
          },
          {
            q: 'For longest calendar life, a cell should be stored:',
            options: [
              'Fully charged and warm',
              'Fully discharged',
              'Around half charge, cool',
              'Frozen solid',
            ],
            answer: 2,
            explain: 'High voltage and heat accelerate parasitic side reactions; moderate charge plus refrigeration slows the clock dramatically.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'A grasp of oxidation-reduction and electrode potentials covers the chemistry. Next: electrode materials and solid-state electrolytes, then battery management systems and pack engineering.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Lithium rocks between intercalation hosts — the cell is rechargeable because nothing rebuilds.',
          'Voltage maps to state of charge, nonlinearly.',
          'CC-CV is universal: current until the ceiling, then taper.',
          'Plating and SEI growth are the two chemistry taxes on fast charging.',
          'Heat plus high voltage is the aging combo; 20–80% and cool is the longevity recipe.',
        ],
      },
    ],
  },
]
