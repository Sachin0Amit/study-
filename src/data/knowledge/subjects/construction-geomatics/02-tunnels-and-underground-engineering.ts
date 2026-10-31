/**
 * Knowledge Universe — Construction, Geomatics & Underground Engineering — Chapter 02: Tunnels & Underground Engineering
 * 1 lesson · ~1,290 words
 * field: Civil & Structural Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Underground Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 eng-tunnels-underground-engineering — Tunnels: The Engineering of Going Underground
 */
import type { KnowledgeTopic } from '../../types'

export const constructionGeomaticsCh02: KnowledgeTopic[] = [
  {
    id: "eng-tunnels-underground-engineering",
    title: "Tunnels: The Engineering of Going Underground",
    domain: "Engineering",
    field: "Civil & Structural Engineering",
    branch: "Underground Engineering",
    tier: "intermediate",
    concepts: [
      "geology dictates the method",
      "drill-and-blast versus tunnel boring machines",
      "ground support and final lining",
      "groundwater control and dewatering",
      "ventilation, fire safety and escape routes",
      "trenchless utility installation",
    ],
    words: 1290,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Every tunnel is a negotiation with rock and water the engineer cannot see. A bridge builder inspects the gap before designing; a tunnel builder drills into the unknown and adapts. Going underground is how cities gain metro lines without demolishing themselves, how railroads cross mountains, and how power and data slip beneath rivers. This lesson covers the geology that dictates method, the machines, the war on groundwater, and the safety systems behind the Channel and Gotthard tunnels.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Tunneling is construction under maximum uncertainty: a single fault zone can erase months of schedule. The central skill is matching method to ground — and changing it when the ground disagrees.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The ground is not only a load on the tunnel — it is part of the structure. Competent rock arches over an opening and carries its own weight; saturated soil runs in like sugar. Engineers speak of stand-up time: how long a freshly cut face holds before it needs support, ranging from years in good granite to minutes in running sand. Method, support and pacing all follow from where the ground sits on that spectrum.",
      },
      {
        kind: "para",
        text: "Hard rock is mined by drill-and-blast: drilling jumbos bore a fan of holes into the face, everyone retreats, the blast advances the heading three to five metres, machines haul the rubble out, and the cycle repeats. It is flexible, cheap to mobilize and tolerant of odd geometry. Softer ground and long drives favor the tunnel boring machine — a rotating cutterhead pushing a shield forward while erecting a ring of precast concrete segments in its wake, a factory a city block long that cuts around the clock.",
      },
      {
        kind: "para",
        text: "The TBM's cleverest trick is balancing the face. Under a water table an open face invites inflow and settlement, so earth-pressure-balance and slurry machines pressurize the face — with the excavated soil itself or a bentonite slurry — exactly countering the earth and water pressure pushing in. Shallow city tunnels often skip machines for cut-and-cover: dig a trench, build the box, backfill. Between the extremes sits sequential excavation: small headings, supported as you go.",
      },
      {
        kind: "para",
        text: "Support comes in two layers. Initial support — rock bolts stitching the ground into a self-supporting arch, sprayed shotcrete sealing the surface, steel sets in weak zones — goes in fast, inside the stand-up window. The final lining, usually cast-in-place concrete, gives the long-term surface, drainage and fire protection. Convergence pins measure the walls creeping inward, and those readings set the next section's bolt density. In good rock the ground does most of the work; in bad ground the lining does, and the cost gap is a factor of ten.",
      },
      {
        kind: "para",
        text: "Water is the tunnel engineer's oldest enemy: it destroys stand-up time, floods headings and, under rivers, can drown a crew. The defenses escalate — drainage and pumps, dewatering wells ahead of the drive, grouting that seals rock joints with cement or chemicals, and ground freezing that turns water-bearing soil into temporary ice. The pressurized shield was invented for exactly this duty, from Marc Brunel's Thames Tunnel to today's machines.",
      },
      {
        kind: "para",
        text: "Scale multiplies everything. The Channel Tunnel is three parallel tubes bored 50.5 kilometres through chalk marl, drives from both shores meeting within centimetres of plan. The Gotthard Base Tunnel is longer still — 57 kilometres — and its adversary was depth: sections run beneath 2,300 metres of mountain, where rock approaches 45 °C and the stress bursts walls without warning. Crews worked behind cooling plants; 28 million tonnes of excavated rock became concrete aggregate. Distance was never the real difficulty; heat, stress and the poorest geology were.",
      },
      {
        kind: "para",
        text: "Operating a tunnel is a safety problem of air and fire. Train pistons push air ahead; road tunnels need jet fans; the killer scenario is a truck fire. Mont Blanc in 1999 killed thirty-nine people and rewrote European rules: cross-passages every few hundred metres, fire-protected escape routes, smoke extraction at the seat of the fire. The same ideas, shrunk, run the utility world — trenchless technology. Horizontal directional drilling steers a small bore under a river for fiber or power; pipe jacking and microtunneling push utility casings where a trench would close a street.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Vertical in-situ stress",
        latex: "\\sigma_v = \\gamma H",
        meaning: "Weight of the ground above, per unit area — the squeeze a deep tunnel feels.",
      },
      {
        kind: "formula",
        name: "TBM daily advance",
        latex: "A = 24\\times p_r \\times U",
        meaning: "Daily advance equals hours times boring rate times utilization — the fraction of time actually cutting rock.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the vertical stress 2,300 metres down in rock weighing about 27 kilonewtons per cubic metre — and what a TBM boring 3 metres per hour at 30 percent utilization achieves daily.",
          "Recall: sigma-v equals gamma times H; daily advance equals 24 times boring rate times utilization.",
          "Apply: 27 x 2,300 = 62,100 kPa, roughly 62 MPa — against only about 0.5 MPa above a 25-metre-deep metro. The TBM: 24 x 3 x 0.3 = 22 metres a day.",
          "State the result: the deep tunnel carries over a hundred times a metro's squeeze — enough to spall rock from the walls; at the Gotthard, stress and heat, not distance, were the enemies.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "The Channel Tunnel — three bored tubes linking Britain to the continent's rail network",
          "The Gotthard Base Tunnel — 57 km under the Alps, flattening the Zurich–Milan rail crossing",
          "London's Elizabeth line — 42 kilometres of new tunnels threaded beneath a living city",
          "The Lærdal Tunnel — 24.5 km, the world's longest road tunnel",
          "Directional drilling — river crossings for power, fiber and water without touching the bed",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Never trust averages: mean rock class sets the price, but the worst hundred metres set the schedule. Unexpected water is the classic claim. A TBM is not automatically right — machines only pay off on long, fairly uniform drives, and a stuck one is a disaster with no reverse gear. And ventilation bolted on after the geometry is frozen is designed too late.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Stand-up time", def: "How long freshly excavated ground holds itself before support is needed." },
          { term: "TBM", def: "Tunnel boring machine; a self-advancing shield that cuts ground and erects lining behind it." },
          { term: "Earth-pressure balance", def: "Technique that pressurizes excavated soil to support the tunnel face." },
          { term: "Shotcrete", def: "Concrete sprayed directly onto the excavated surface as fast initial support." },
          { term: "Rock bolt", def: "Steel bar anchored into the ground to knit fractured rock into an arch." },
          { term: "Cross-passage", def: "Linking tunnel between parallel tubes, for escape and maintenance." },
          { term: "Trenchless", def: "Family of methods that install pipes and cables without opening a trench." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Drill-and-blast usually beats a TBM when:",
            options: [
              "the drive is long and the geology uniform",
              "the heading is short, hard or irregular",
              "the ground is soft clay under a harbour",
              "the tunnel must be perfectly circular",
            ],
            answer: 1,
            explain: "TBMs amortize their enormous cost over long, uniform drives; short or irregular headings are cheaper to blast.",
          },
          {
            q: "Earth-pressure-balance and slurry shields exist to:",
            options: [
              "cool the cutterhead bearings",
              "pressurize the face so soft, wet ground neither flows in nor sinks",
              "steer the machine around obstacles",
              "install rock bolts automatically",
            ],
            answer: 1,
            explain: "Balanced pressure prevents inflow at the face and settlement above it — the two killers in soft ground.",
          },
          {
            q: "At 2,000 metres depth in rock of 27 kN/m³, the vertical stress is about:",
            options: ["0.54 MPa", "5.4 MPa", "54 MPa", "540 MPa"],
            answer: 2,
            explain: "27 x 2,000 = 54,000 kPa ≈ 54 MPa — the squeeze that bursts deep tunnel walls.",
          },
          {
            q: "The Mont Blanc fire of 1999 changed tunnel engineering chiefly by:",
            options: [
              "banning heavy goods vehicles",
              "making escape cross-passages, smoke control and fire-protected egress first-class requirements",
              "requiring electric haulage",
              "capping tunnel lengths",
            ],
            answer: 1,
            explain: "Thirty-nine deaths in one fire turned life-safety systems into core design drivers.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Why bridges stand covers the surface counterpart; the earthquake lesson covers what moving ground does to both; the railway lesson shows the networks tunnels serve.",
        tone: "path",
      },
    ],
  },
]
