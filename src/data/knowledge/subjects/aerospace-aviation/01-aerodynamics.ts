/**
 * Knowledge Universe — Aerospace & Aviation — Chapter 01: Aerodynamics
 * 1 lesson · ~1,204 words
 * field: Aerospace Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Aerodynamics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-aerodynamics-flight — How Wings Really Lift: Aerodynamics Without Magic
 */
import type { KnowledgeTopic } from '../../types'

export const aerospaceAviationCh01: KnowledgeTopic[] = [
  {
    id: 'eng-aerodynamics-flight',
    title: 'How Wings Really Lift: Aerodynamics Without Magic',
    domain: 'Engineering',
    field: 'Aerospace Engineering',
    branch: 'Aerodynamics',
    tier: 'intermediate',
    concepts: [
      'Lift from turning the flow',
      'Pressure differences and streamlines',
      'Angle of attack and stall',
      'Parasite and induced drag',
      'The lift equation',
      'Aspect ratio and high-lift devices',
    ],
    words: 1204,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Ask a room why planes fly and someone will explain that air must travel farther over the curved top of the wing and therefore faster — the equal-transit-time story, which is wrong, and demonstrably so: aircraft fly upside down, and stunt planes fly on perfectly symmetrical wings. The real account is better. A wing is a machine for deflecting air downward, and by Newton\u2019s laws the air must push back up. Pressure differences, momentum, circulation — three views of one physics, none of it magic.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Lift and drag equations govern everything that flies — the fuel burn of an airliner, the range of a drone, the runway an aircraft needs. The same mathematics explains why gliders have long wings, why fighters have short ones, and why takeoff speed is a safety number rather than a preference.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A wing meets the air at a small angle and its shape guides the flow to leave the trailing edge deflected downward — downwash. Turning a stream of air requires a force on it, and by Newton\u2019s third law the air replies with an equal and opposite force on the wing: lift. Flight is momentum exchange, performed continuously across every square metre of wing, with tonnes of air pushed down each second.',
      },
      {
        kind: 'para',
        text: "Above the wing, streamlines squeeze together and the flow speeds up; by Bernoulli's principle the faster flow carries lower pressure, and the pressure difference between the two surfaces integrates into exactly the lift already described — suction on top doing most of the work. Notice what this story does not need: the equal-transit-time tale is false, and in reality the air over the top simply reaches the trailing edge first.",
      },
      {
        kind: 'para',
        text: 'Rotate the wing into the flow and lift climbs almost linearly with angle of attack — until roughly fifteen degrees, where the boundary layer separates from the upper surface, downwash collapses and lift falls away steeply: the stall. Stall is about angle, not speed, though every aircraft has a stall speed because level flight demands more angle as speed drops. Recovery is universal: unload the wing and let it fly again.',
      },
      {
        kind: 'para',
        text: 'Drag splits by cause. Parasite drag — skin friction and pressure losses — grows with the square of speed. Induced drag is the tax on making lift: high-pressure air spills around the wingtips into the low pressure above, and the vortices\u2019 energy is paid by the engines. Induced drag falls as speed rises, so total drag is U-shaped: too slow is expensive, too fast is expensive, and airliners cruise near the bottom of the U.',
      },
      {
        kind: 'para',
        text: 'Lift equals half the air density, times speed squared, times wing area, times the lift coefficient — a dimensionless number folding in angle of attack and wing shape. The squared speed is the punch: double the speed and the wing needs only a quarter of the coefficient or area. Pilots and designers read the same equation from opposite ends — one asks how fast to fly today, the other how big to build.',
      },
      {
        kind: 'para',
        text: 'Long, slender wings bleed less energy into tip vortices, which is why gliders and high-altitude airliners have high aspect ratio while fighters, built for roll rate and strength, do not. At takeoff and landing, when speed is scarce, slats and flaps fold out of the wing\u2019s edges, enlarging and cambering it to roughly double the maximum lift coefficient — the difference between a runway and a football field.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'The lift equation',
        latex: 'L = \\tfrac{1}{2}\\,\\rho\\,v^{2}\\,S\\,C_L',
        meaning: 'Lift from air density, true airspeed, wing area and the lift coefficient — angle of attack lives inside C_L.',
      },
      {
        kind: 'formula',
        name: 'Induced drag',
        latex: 'C_{D,i} = \\frac{C_L^{2}}{\\pi\\,e\\,AR}',
        meaning: 'The drag of making lift, falling with aspect ratio AR and Oswald efficiency e — the tax paid at wingtips.',
      },
      {
        kind: 'formula',
        name: 'Stall speed',
        latex: 'v_{stall} = \\sqrt{\\frac{2W}{\\rho\\,S\\,C_{L,max}}}',
        meaning: 'Minimum level-flight speed, where the wing must run at maximum lift coefficient to hold weight W.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the stall speed of a 1000 kg light aircraft with 16 m² of wing, C_Lmax of 1.5, at sea-level density 1.225 kg/m³.',
          'Recall the governing idea: at the stall, lift must equal weight with the wing at maximum lift coefficient, so v_stall = √(2W/(ρ·S·C_Lmax)).',
          'Apply: W = 1000 × 9.81 = 9810 N, so 2W = 19,620. The denominator is 1.225 × 16 × 1.5 = 29.4, giving v_stall = √(19620/29.4) = √667 ≈ 25.8 m/s — about 93 km/h.',
          'State the result: below roughly 26 m/s this aircraft cannot fly level. Flaps raising C_Lmax to 3.0 would cut stall speed by √2 to about 18 m/s (66 km/h) — the reason high-lift devices exist.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Airliner wing design — area, span and sweep chosen at the drag minimum for cruise Mach',
          'Takeoff and landing performance, where slats and flaps trade drag for lift coefficient',
          'Drones and eVTOL aircraft, where wing sizing and disc loading set hover and cruise budgets',
          'Wind-turbine blades, which are rotating wings extracting energy instead of spending it',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The equal-transit-time explanation is false — nothing requires air above and below the wing to arrive together, and it does not. Stall is angle-driven: an aircraft can stall at any speed, including level flight near its ceiling. And more flap is not free — every increase in lift coefficient raises induced drag, which is why cruise wings fly clean and sleek.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Angle of attack', def: 'Angle between the wing\u2019s chord line and the oncoming flow.' },
          { term: 'Chord', def: 'The straight line from a wing\u2019s leading edge to its trailing edge.' },
          { term: 'Stall', def: 'Boundary-layer separation past the critical angle of attack; lift collapses.' },
          { term: 'Lift coefficient', def: 'Dimensionless lift per unit of dynamic pressure — the wing\u2019s working setting.' },
          { term: 'Induced drag', def: 'Drag created as a by-product of lift and its wingtip vortices.' },
          { term: 'Parasite drag', def: 'Friction and pressure drag unrelated to making lift.' },
          { term: 'Aspect ratio', def: 'Wingspan squared divided by wing area — the slenderness of the wing.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The equal-transit-time explanation of lift fails because:',
            options: [
              'air is compressible at all speeds',
              'the upper-surface flow actually reaches the trailing edge first',
              'wings cannot generate lift at zero angle of attack',
              'Bernoulli\u2019s principle was disproven',
            ],
            answer: 1,
            explain: 'Nothing pairs the two flows; the upper stream simply arrives early, and lift follows from turning the flow, not from matched travel times.',
          },
          {
            q: 'A wing stalls when:',
            options: [
              'speed drops below a fixed universal number',
              'the critical angle of attack is exceeded',
              'the engine fails',
              'density altitude falls',
            ],
            answer: 1,
            explain: 'Separation and lift collapse follow angle, not speed — every speed simply maps to the angle needed to hold level flight.',
          },
          {
            q: 'Induced drag decreases as airspeed increases because:',
            options: [
              'skin friction falls with speed',
              'the wing needs a smaller lift coefficient at higher speed',
              'wingtip vortices reverse direction',
              'air density drops at altitude',
            ],
            answer: 1,
            explain: 'Same lift from more dynamic pressure means less C_L, and induced drag grows with the square of C_L.',
          },
          {
            q: 'Doubling true airspeed while holding C_L constant:',
            options: ['doubles lift', 'halves lift', 'quadruples lift', 'leaves lift unchanged'],
            answer: 2,
            explain: 'Speed enters the lift equation squared — the single most consequential exponent in aeronautics.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: "Newton's laws and comfort with vectors carry you through this topic. Follow with compressibility and the sound barrier, where density stops behaving, then propulsion — the thrust that must pay the drag bill computed here — and stability and control, which decide whether an aircraft is flyable.",
        tone: 'path',
      },
    ],
  },
]
