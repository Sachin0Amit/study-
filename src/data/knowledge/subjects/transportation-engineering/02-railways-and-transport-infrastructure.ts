/**
 * Knowledge Universe — Transportation Engineering — Chapter 02: Railways & Transport Infrastructure
 * 1 lesson · ~1,248 words
 * field: Railway Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Railway Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 eng-railway-engineering — Railway Engineering: The Steel Network
 */
import type { KnowledgeTopic } from '../../types'

export const transportationEngineeringCh02: KnowledgeTopic[] = [
  {
    id: "eng-railway-engineering",
    title: "Railway Engineering: The Steel Network",
    domain: "Engineering",
    field: "Railway Engineering",
    branch: "Transport Infrastructure",
    tier: "intermediate",
    concepts: [
      "steel-on-steel rolling efficiency",
      "coned wheels and self-steering gauge",
      "cant on curves",
      "turnouts: blades, frogs, check rails",
      "block signaling and ERTMS",
      "track geometry degradation",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Watch a freight train roll past and you are seeing the most efficient way humanity moves heavy things over land: one locomotive hauling thousands of tonnes on a fraction of a truck fleet's fuel. The secret is absurdly simple — a steel wheel rolling on a steel rail — yet everything else in railway engineering manages the consequences: low friction cuts both ways, rigid steel demands gentle curves, and vehicles that cannot steer need a system that keeps them apart. This intermediate lesson covers the track, the wheel-rail contact, curves, switches and signaling that together make a railway work.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Railways are a systems discipline: vehicle, track and signaling form one machine designed by different people across two centuries. Change any part and every other part feels it — which is why railway engineering is as much about compatibility as invention.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The contact patch where a wheel meets a rail is roughly the size of a small coin, and that is the whole magic. Steel on steel has a rolling resistance around ten times lower than rubber on asphalt, so a train needs a tenth of the tractive energy per tonne-kilometre. The same low friction limits braking and traction: an emergency stop from speed takes well over a kilometre — which is why signaling, not the driver's reflexes, keeps trains apart.",
      },
      {
        kind: "para",
        text: "Curiously, a railway wheelset steers itself. Wheels are machined with a slight cone and pressed rigidly onto a shared axle, so if the pair drifts toward one rail, the outer wheel runs on a larger radius, rolls faster, and pulls the axle back toward center — a self-centering wobble instead of a derailment. Gauge, the distance between rails, is 1,435 millimetres over most of the world; broader gauges buy stability, narrower ones cheap mountain construction, and breaks of gauge still force freight to swap bogies at borders.",
      },
      {
        kind: "para",
        text: "A curve presents a conflict: the vehicle wants to go straight, the track insists otherwise. Engineers tilt the track — cant, or superelevation — so that a share of gravity supplies the inward force, with the equilibrium set for the design speed. Slower or faster traffic leaves an unbalanced cant felt as sideways acceleration, so mixed passenger-and-freight lines must compromise. Transition spirals ease the change from level to canted track, and high-speed lines simply use radii measured in kilometres to stay gentle at 300 km/h.",
      },
      {
        kind: "para",
        text: "Moving a train between tracks is geometry with moving parts. A turnout swings tapered blades so wheel flanges are steered onto the chosen route; at the crossing, a V-shaped frog lets each flange pass through a gap in the rail while check rails hold the opposite wheel on line. Clearances are tiny and loads enormous, so switch maintenance is a specialty of its own — and worn points remain a classic derailment cause.",
      },
      {
        kind: "para",
        text: "Railways were the first networks needing a safety system faster than the human eye. The answer was the block: divide the line into sections, one train per block, each guarded by signals. Track circuits detect trains automatically — wheelsets short an electrical path through the rails — so even a broken rail protects itself. The modern layer, ERTMS in Europe, replaces lineside signals with radio-based cab signaling that supervises the driver continuously and shrinks blocks toward braking distance as trains report position.",
      },
      {
        kind: "para",
        text: "Railway economics fork into two families. High-speed rail runs light axle loads on superbly maintained, often slab-track alignments at 250-350 km/h, selling time saved; heavy-haul freight runs 25-30-tonne axle loads on ore lines, one train moving 40,000 tonnes and wearing the track aggressively. Both fight the same enemy: geometry degradation, as ballast settles, rails roll and corrugate, and every passing wheel pounds the fault deeper. Tamping machines, grinders and measurement trains absorb a large share of every railway's budget, and sharing fast passengers with heavy freight forces hard compromises in cant, scheduling and maintenance.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Equilibrium cant",
        latex: "e = \\frac{G\\,v^{2}}{g\\,R}",
        meaning: "Cant e — the outer rail raised above the inner — balances a curve of radius R at speed v, with G the gauge and g gravity.",
      },
      {
        kind: "formula",
        name: "Speed with cant deficiency",
        latex: "v_{\\max} = \\sqrt{\\frac{(e + d)\\,g\\,R}{G}}",
        meaning: "Allowing an unbalanced cant d raises the speed limit above the equilibrium value — the compromise every mixed-traffic railway makes.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the equilibrium cant for a standard-gauge (1.435 m) curve of radius 2,000 m taken at 160 km/h, and whether it fits the usual 150 mm practical limit.",
          "Recall: e = G v²/(g R), with speed converted to metres per second.",
          "Apply: v = 160/3.6 = 44.4 m/s, so v² ≈ 1,975. Then e = (1.435 x 1,975)/(9.81 x 2,000) = 2,834/19,620 ≈ 0.144 m, or 144 mm.",
          "State the result: 144 mm sits just inside the 150 mm maximum — the edge of what pure equilibrium cant allows; faster traffic needs cant deficiency, tilting trains or a larger radius.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "High-speed networks in Japan, France, Spain and China running service above 300 km/h",
          "Pilbara and North American heavy-haul lines moving 40,000-tonne ore trains",
          "Metro signaling upgrades — communications-based train control raising capacity on city lines",
          "Maintenance fleets — tamping, grinding and geometry-measurement trains holding tolerances to millimetres",
          "Level-crossing elimination and electrification converting legacy diesel corridors",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The classic mistakes are systemic. Setting cant for passenger speed then running slow freight wears the low rail. Assuming capacity means new track, when signaling upgrades often buy more trains. Neglecting geometry maintenance: degradation feeds itself, each bad wheel pass worsening the fault. And the low friction that makes trains efficient makes them hard to stop — never judge rail safety by road intuition.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Rail gauge", def: "Distance between the inner faces of the two rails — 1,435 mm on the standard-gauge majority." },
          { term: "Cant", def: "Intentional tilt of track on a curve, letting gravity supply part of the turning force." },
          { term: "Cant deficiency", def: "Unbalanced lateral acceleration tolerated above the equilibrium cant to raise speed limits." },
          { term: "Block section", def: "A track division occupied by at most one train, enforced by signals or cab signaling." },
          { term: "Track circuit", def: "Electrical train detection — wheelsets short the rails, making occupancy fail-safe." },
          { term: "Turnout", def: "Switch assembly of blades, frog and check rails routing trains between tracks." },
          { term: "Ballast", def: "The crushed-stone bed supporting sleepers, draining water and holding geometry until it settles." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "Steel wheel on steel rail beats rubber on asphalt mainly because:",
            options: [
              "steel is stronger than rubber",
              "rolling resistance is roughly ten times lower",
              "trains are heavier than trucks",
              "rails are smoother than roads",
            ],
            answer: 1,
            explain: "The coin-sized contact patch deforms very little, so almost no rolling energy is lost — the root of rail efficiency.",
          },
          {
            q: "A coned wheelset that drifts toward one rail returns to center because:",
            options: [
              "the flange physically pushes it back",
              "the wheel on the larger rolling radius rolls faster and steers the axle back",
              "gravity pulls the car body level",
              "the driver corrects it",
            ],
            answer: 1,
            explain: "Tapered treads mean the offset wheel travels farther per revolution, generating a self-centering steering action.",
          },
          {
            q: "The purpose of cant on a curve is to:",
            options: [
              "drain rainwater off the track",
              "let gravity supply part of the inward force at design speed",
              "lean the train so passengers see the view",
              "reduce construction cost",
            ],
            answer: 1,
            explain: "Tilting the track aims a component of weight inward, cutting the lateral force that rails and passengers must otherwise carry.",
          },
          {
            q: "Block signaling keeps trains apart primarily by:",
            options: [
              "radar between trains",
              "allowing only one train per track section, with occupancy detected automatically",
              "drivers watching far ahead",
              "strict speed limits",
            ],
            answer: 1,
            explain: "Protected sections with track-circuit detection guarantee empty track ahead regardless of visibility or human error.",
          },
        ],
      },
    ],
  },
]
