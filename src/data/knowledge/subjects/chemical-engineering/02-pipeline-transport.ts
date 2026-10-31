/**
 * Knowledge Universe — Chemical Engineering — Chapter 02: Pipeline Transport
 * 1 lesson · ~1,296 words
 * field: Chemical Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Transport Infrastructure]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 eng-pipelines-fluid-transport — Pipelines: Moving Fluids Across Continents
 */
import type { KnowledgeTopic } from '../../types'

export const chemicalEngineeringCh02: KnowledgeTopic[] = [
  {
    id: "eng-pipelines-fluid-transport",
    title: "Pipelines: Moving Fluids Across Continents",
    domain: "Engineering",
    field: "Chemical Engineering",
    branch: "Transport Infrastructure",
    tier: "intermediate",
    concepts: [
      "energy per tonne-kilometre",
      "pump and compressor stations",
      "the hydraulic gradient",
      "hoop stress and wall thickness",
      "cathodic protection against corrosion",
      "smart pigs and SCADA leak detection",
      "linepack and LNG",
    ],
    words: 1296,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Railways move solids over land, ships over oceans — fluids get a third mode of their own. A steel pipeline is a conveyor belt with no moving parts along its length: pumps or compressors push at stations, and one large crude line can deliver in a day what a 30-tonne tanker truck would need one run every ten seconds, around the clock, to match. This lesson covers why pipelines win the energy arithmetic, how stations and gradients move fluids over mountains, how aging steel is kept from leaking, and what changes when the fluid is gas or LNG.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Pipelines are the cheapest, safest way yet found to move enormous volumes of fluid — and among the most consequential when they fail. Both facts come from the same physics: friction in a smooth pipe is tiny, and so is the tolerance for corrosion unwatched.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The energy arithmetic is lopsided. A truck spends most of its fuel deforming rubber and rolling steel at highway speed, and pays it twice — the return leg runs empty. A train cuts rolling losses but adds terminals and shunting. A pipeline has no wheels, no driver and no return trip: fluid friction against smooth steel costs an order of magnitude less per tonne-kilometre than road. The catches are structural: pipelines serve only fluids, along one fixed route, and demand billions before the first barrel moves. They are canals for the continuous.",
      },
      {
        kind: "para",
        text: "Liquid lines run on pump stations. Friction bleeds pressure along every kilometre, so stations spaced 50 to 150 kilometres re-boost the flow; between them the energy line — the hydraulic gradient — falls steadily from discharge to suction. The gradient is the design's ledger: pump high enough to cross the mountain and the same line runs downhill for free on the far side — some mountain systems need no stations at all, gravity alone paying the friction bill. Valves are treated gently: slamming one shut fires a pressure wave up the line — water hammer — fast enough to burst fittings, so operators stroke them over minutes, not seconds.",
      },
      {
        kind: "para",
        text: "Natural gas moves under compression instead. Centrifugal compressors driven by gas turbines or electric motors push the line to 70–100 bar and let expansion carry the gas forward. The pipe itself becomes storage: linepack, the gas held between maximum and minimum line pressures, absorbs each morning's demand ramp. Liquids must balance metre to metre; gas systems breathe, and controllers lean on that breath.",
      },
      {
        kind: "para",
        text: "The pipe is a pressure vessel laid flat. Internal pressure tries to split the steel around its circumference — hoop stress, proportional to pressure times diameter over twice the wall thickness — and the design margin rides on steel grade and wall thickness. Every weld is inspected by X-ray or ultrasound: a cross-country line is tens of thousands of welds.",
      },
      {
        kind: "para",
        text: "Integrity management is the forever job, fighting two enemies. Corrosion — external, from moist soil and stray currents; internal, from water and acid gases in the product — is answered by coatings plus cathodic protection: the pipe is made the cathode of a deliberate electrochemical cell, sacrificial anodes or an impressed current supplying the electrons so the ground eats the anode instead of the steel. Inspection rides inside: smart pigs, instrumented cylinders pushed along by the flow, map wall thickness by magnetic flux leakage and ultrasonics while the product keeps moving. SCADA systems compare flows and pressures station to station, mass-balance software flagging any gap between in and out.",
      },
      {
        kind: "para",
        text: "Failures are case studies in patience ignored. In 2010 an Enbridge line burst near Marshall, Michigan, and roughly 843,000 gallons of crude entered the Kalamazoo River — the costliest inland oil spill in U.S. history, over a billion dollars to clean, from a corrosion crack whose inspection signals had been misread for years. San Bruno, California, the same year: a 30-inch gas line with a seam weld its owner's records did not know existed killed eight people in a suburb. And where pipelines cannot cross oceans, gas travels as LNG — liquefied to one six-hundredth of its volume at -162 °C, shipped in cryogenic tankers, regasified at the destination — the trade that lets Qatar and the United States compete with pipelines for Europe's heating.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Hoop stress",
        latex: "\\sigma_h = \\frac{pD}{2t}",
        meaning: "Circumferential wall stress from internal pressure — the load that sizes the wall.",
      },
      {
        kind: "formula",
        name: "Darcy friction gradient",
        latex: "\\frac{\\Delta p}{L} = f\\,\\frac{\\rho v^2}{2D}",
        meaning: "Pressure lost to friction per metre of pipe — the slope of the hydraulic gradient.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the hoop stress in a 30-inch (0.762-metre) gas line at 7 megapascals with a 9.5-millimetre wall, against X70 steel yielding at 483 MPa.",
          "Recall: hoop stress is pressure times diameter over twice the wall thickness.",
          "Apply: 7,000 kPa x 0.762 ÷ (2 x 0.0095) = 5,334 ÷ 0.019 ≈ 281 MPa.",
          "State the result: about 280 MPa — 58 percent of yield, consistent with the 0.72 design factor codes allow in open country. Corrosion that thins the wall 20 percent pushes stress past the code line — the margin is thinner than it looks.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Trans-Alaska — 1,300 km of insulated line over permafrost, zigzagged to absorb thermal expansion",
          "Colonial Products Line — the gasoline and jet-fuel artery of the US East Coast",
          "Nord Stream and Power of Siberia — gas exports as statecraft",
          "Qatar's LNG chain — wells to liquefaction trains to a cryogenic tanker fleet",
          "Hydrogen-ready conversions — repurposing gas networks for a different molecule",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Excavation damage strikes more pipelines than corrosion does, and instantly — one-call systems exist for a reason. Water hammer from fast-closing valves has broken more fittings than design pressure ever did. Linepack is a buffer, not a warehouse. And inspection data unexamined is the Marshall lesson: the pig found the metal loss; nobody read it as a crisis.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Hydraulic gradient", def: "The falling energy line along the pipe between pump stations." },
          { term: "Compressor station", def: "Facility that re-boosts gas pressure along the route." },
          { term: "Hoop stress", def: "Circumferential wall tension created by internal pressure." },
          { term: "Cathodic protection", def: "Biasing the pipe cathodic so the soil corrodes a sacrificial anode instead." },
          { term: "Smart pig", def: "Instrumented cylinder run through the line to map wall thickness from inside." },
          { term: "Linepack", def: "Gas held in the pipe between pressure limits — the grid's buffer." },
          { term: "LNG", def: "Natural gas liquefied to a six-hundredth of its volume at -162 °C for shipping." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Pipelines beat road tankers on energy per tonne-kilometre mainly because:",
            options: [
              "fluids weigh less than solids",
              "pipe friction is far smaller than rolling resistance, with no return trip and no driver",
              "steel is cheaper than rubber",
              "gas can be compressed",
            ],
            answer: 1,
            explain: "No rubber on asphalt, no empty backhaul, continuous 24/7 flow — the win is friction physics, not the cargo.",
          },
          {
            q: "Cathodic protection stops corrosion by:",
            options: [
              "painting the pipe thicker",
              "supplying electrons so the pipe becomes the cathode and a sacrificial anode corrodes instead",
              "freezing the surrounding soil",
              "lowering the operating pressure",
            ],
            answer: 1,
            explain: "Corrosion is an electrochemical cell; the impressed current or anode biases the pipe cathodic, moving the attack to a replaceable metal.",
          },
          {
            q: "A 0.762-metre line at 7 MPa with a 9.5-mm wall carries hoop stress of about:",
            options: ["28 MPa", "280 MPa", "2.8 MPa", "2,800 MPa"],
            answer: 1,
            explain: "pD/2t = 7,000 x 0.762 / 0.019 ≈ 281 MPa — sizing the wall is the entire structural design.",
          },
          {
            q: "Linepack refers to:",
            options: [
              "crude-oil pigging schedules",
              "gas held in the pipe between pressure limits, buffering demand swings",
              "freight container stacking",
              "the packing glands of valves",
            ],
            answer: 1,
            explain: "The pipe is the storage: raising line pressure stores gas, lowering it releases it — the invisible buffer behind the morning ramp.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The railway and naval-architecture lessons cover the sibling transport modes; three-phase power covers the electric machinery at compressor stations; and the environment domain's renewable-transition lesson covers the hydrogen these networks may one day carry.",
        tone: "path",
      },
    ],
  },
]
