/**
 * Knowledge Universe — Power Systems — Chapter 01: Power Systems
 * 1 lesson · ~1,006 words
 * field: Electrical & Electronics Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Electrical & Electronics Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-three-phase-power — Three-Phase Power and Why the Grid Loves It
 */
import type { KnowledgeTopic } from '../../types'

export const powerUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'eng-three-phase-power',
    title: 'Three-Phase Power and Why the Grid Loves It',
    domain: 'Engineering',
    field: 'Electrical & Electronics Engineering',
    branch: 'Power Systems',
    tier: 'intermediate',
    concepts: [
      'three phases 120 degrees apart',
      'constant instantaneous power transfer',
      'line-to-line versus line-to-neutral voltage',
      'star and delta connections',
      'rotating magnetic field in motors',
      'power factor and apparent power',
      'balanced versus unbalanced loads',
    ],
    words: 1006,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Turn on a kettle and you see single-phase power at work; look at the transmission towers on the horizon and you are seeing three-phase. By carrying power on three conductors whose voltages are offset by 120 degrees, the grid moves more power with less wire, keeps the delivered power constant rather than pulsing, and gets a rotating magnetic field for free — which is why nearly every industrial motor is three-phase.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Three-phase is the invisible standard behind every factory, data center and transmission line. Reading its voltages, connections and power formulas correctly is day-one literacy for power engineering.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Three sine waves, equal in amplitude and shifted by 120 degrees, ride on the three lines. At every instant their sum is zero, so a balanced three-phase system with a shared return needs no neutral current — the conductors take turns sourcing and sinking in a rotating dance.',
      },
      {
        kind: 'para',
        text: 'Single-phase power pulses from zero to a peak and back at twice the line frequency, twice per cycle delivering nothing. Three-phase power never pulses: when one phase slackens, the others pick it up, so the instantaneous sum stays flat. Motors run smoother and rectifiers draw steadier current for exactly this reason.',
      },
      {
        kind: 'para',
        text: 'Two voltages come with every three-phase system: line-to-neutral (phase voltage) and line-to-line, which is the phase voltage times the square root of three. Confusing them is the classic measurement mistake — a "400 V" system is 230 V phase-to-neutral in the same breath.',
      },
      {
        kind: 'para',
        text: 'Sources and loads connect in star (wye) or delta. Star exposes a neutral point and suits distribution; delta closes the loop with no neutral and appears inside motor windings and transformers. Voltages and currents transform between the two connections by that same factor of √3, plus a 30-degree phase shift.',
      },
      {
        kind: 'para',
        text: 'Three currents in the stator, properly phased, create a magnetic field that rotates at synchronous speed — no moving parts, just geometry. This rotating field is what drags the rotor around, and it exists only because there are three spatially offset windings fed by three time-offset currents.',
      },
      {
        kind: 'para',
        text: 'Real loads draw current out of phase with voltage, and only the in-phase component does real work. Power factor — real over apparent power — penalizes everything from cable sizing to utility bills, which is why factories install capacitor banks to bring their phase angle back toward zero.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Line-to-line voltage',
        latex: 'V_{LL} = \\sqrt{3}\\,V_{LN}',
        meaning: 'Line-to-line voltage exceeds line-to-neutral by the square root of three in a balanced system.',
      },
      {
        kind: 'formula',
        name: 'Three-phase real power',
        latex: 'P = \\sqrt{3}\\,V_{LL}\\,I_L\\cos\\phi',
        meaning: 'Real power delivered to a balanced three-phase load, with cos φ the power factor.',
      },
      {
        kind: 'formula',
        name: 'Synchronous speed',
        latex: 'n_s = \\frac{120\\,f}{p}',
        meaning: 'Rotating field speed in rpm from line frequency f and pole count p.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a balanced 400 V (line-to-line) motor draws 10 A per line at power factor 0.85 — how much real power does it consume?',
          'Recall the governing idea: three-phase real power is √3 × line-to-line voltage × line current × power factor.',
          'Apply it to the specifics: P = 1.732 × 400 × 10 × 0.85 ≈ 5.9 kW of real power, while the apparent power is √3 × 400 × 10 ≈ 6.9 kVA.',
          'State the result: about 5.9 kW does work; the extra 1.0 kVA is reactive sloshing that heats cables but produces nothing — the number a power-factor correction bank would shrink.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Transmission and distribution — more power per conductor and no pulsing torque in the path',
          'Industrial induction motors — self-starting rotating field with constant torque',
          'Data centers — three-phase feeds split across single-phase server racks for balance',
          'Wind turbines — generators and grid-side converters synchronized to the three-phase grid',
          'Electric railways — often two of three phases borrowed with careful phase-balancing',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not plug line-to-line voltage into the single-phase power formula and then wonder why your motor seems three times too strong — the √3 belongs to three-phase formulas only. Do not ignore unbalanced loads: they force neutral currents, heat transformers and trip protection even when each phase looks fine on its own.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Phase sequence', def: 'The order (A-B-C or A-C-B) in which the three voltages peak; reversed sequence reverses motor rotation.' },
          { term: 'Balanced system', def: 'Equal impedances on all three phases, giving zero neutral current.' },
          { term: 'Star (wye) connection', def: 'Windings tied at a common neutral point; exposes line-to-neutral voltage.' },
          { term: 'Delta connection', def: 'Windings closed in a loop; full line-to-line voltage across each element.' },
          { term: 'Power factor', def: 'Real power divided by apparent power; cos φ for sinusoidal waveforms.' },
          { term: 'Synchronous speed', def: 'Speed of the stator\'s rotating field: 120f/p rpm.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a balanced star-connected system, the line-to-line voltage is:',
            options: [
              'Equal to the phase voltage',
              '√3 times the phase voltage',
              '3 times the phase voltage',
              'Half the phase voltage',
            ],
            answer: 1,
            explain: 'The 120-degree offset between phases makes the line-to-line magnitude √3 ≈ 1.732 times the line-to-neutral magnitude.',
          },
          {
            q: 'The main reason three-phase power transfer is smoother is:',
            options: [
              'Higher frequency',
              'Instantaneous power is constant across the cycle',
              'Larger conductors',
              'Lower voltage',
            ],
            answer: 1,
            explain: 'When one phase\'s contribution dips, the others compensate, so the summed instantaneous power never pulses through zero.',
          },
          {
            q: 'A three-phase motor runs backwards. The likely fix is:',
            options: [
              'Increase the voltage',
              'Swap any two supply lines',
              'Reverse the neutral',
              'Lower the frequency',
            ],
            answer: 1,
            explain: 'Swapping two phases reverses the phase sequence, which reverses the direction of the rotating magnetic field.',
          },
          {
            q: 'Poor power factor means:',
            options: [
              'Real power exceeds apparent power',
              'Current and voltage are far out of phase',
              'The system is unbalanced',
              'The frequency drifts',
            ],
            answer: 1,
            explain: 'A large phase angle gives small cos φ: lots of current and apparent power for little real power delivered.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Start from single-phase AC and phasors, then meet the star–delta transformations here. Next: per-unit system and symmetrical components, then synchronous machines and grid stability — the vocabulary of the whole power grid.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Three sines, 120 degrees apart, sum to zero at every instant.',
          'Constant instantaneous power means smooth motors and happy rectifiers.',
          'Line-to-line = √3 × line-to-neutral — never confuse the two.',
          'Star exposes the neutral; delta closes the loop.',
          'P = √3 V·I·cos φ is the number you will compute most often.',
        ],
      },
    ],
  },
]
