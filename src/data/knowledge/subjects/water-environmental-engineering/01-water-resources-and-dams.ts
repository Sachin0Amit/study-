/**
 * Knowledge Universe — Water & Environmental Engineering — Chapter 01: Water Resources & Dams
 * 2 lessons · ~3,002 words
 * fields: Civil & Structural Engineering, Civil Engineering
 * legacy sources: engineering.ts, x19-civil-core.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Water Resources Engineering, Water Infrastructure]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 civ-hydrology-irrigation — Hydrology and Irrigation: The Engineering of Water
 *   01.2 eng-dams-hydropower-engineering — Dams: Storing Water, Making Power, Living With Risk
 */
import type { KnowledgeTopic } from '../../types'

export const waterEnvironmentalEngineeringCh01: KnowledgeTopic[] = [
  {
    id: 'civ-hydrology-irrigation',
    title: 'Hydrology and Irrigation: The Engineering of Water',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Water Resources Engineering',
    tier: 'intermediate',
    concepts: [
      'Hydrologic cycle and precipitation measurement',
      'Evaporation, evapotranspiration and infiltration',
      'Runoff, hydrographs and the unit hydrograph',
      'Flood estimation and frequency analysis',
      'Water requirement of crops: duty and delta',
      'Design of lined and unlined canals',
      'Diversion headworks and cross-drainage works',
      'Waterlogging and drainage',
    ],
    words: 1707,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Civil engineers spend much of their professional lives moving water — keeping it out of structures, bringing it to cities, persuading it onto fields, and guessing what floods it will commit next decade. Hydrology is the forecasting half of that work: measuring rain, abstracting evaporation and infiltration, and converting storms into runoff predictions. Irrigation is the applying half: computing what crops need, designing canals that carry water without silting or breaching, and fighting the salinity that over-irrigation leaves behind. This lesson builds both halves from the same water balance, which is why the exam papers always mix them in one question.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Hydrology and irrigation together form the largest water-resources block of the GATE CE paper, and their questions are formula-driven in a way concrete design is not: the unit hydrograph, the rational formula, Gumbel\'s distribution, and duty-delta arithmetic reward memorised procedure executed carefully.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Water balance', def: 'The accounting identity of hydrology: precipitation = runoff + evapotranspiration + change in storage, applied over any catchment and period. Every measurement and every model in this lesson is a term in this equation.' },
          { term: 'Unit hydrograph', def: 'The direct-runoff hydrograph resulting from 1 mm (or 1 cm) of effective rainfall falling uniformly over a catchment in a given duration D. Its power is linearity: storms of any size are scaled versions, and long storms are sums of shifted unit responses.' },
          { term: 'Return period', def: 'The average interval between events equalled or exceeded — a 100-year flood has a 1% chance in any single year, and therefore a substantial cumulative chance over a structure\'s design life.' },
          { term: 'Duty', def: 'The area (hectares) a continuous supply of 1 cubic metre per second can irrigate for the base period of a crop — higher duty means more efficient use. Delta is its mirror: the total depth of water a crop needs over its season.' },
          { term: 'Lining', def: 'The impervious facing of a canal (concrete, brick, masonry) that cuts seepage losses, prevents weed growth, permits higher velocities and smaller sections, and protects against waterlogging downstream.' },
          { term: 'Cross-drainage works', def: 'Structures where a canal and a drainage line cross: aqueducts (canal over drain), siphon aqueducts (drain passes under pressure), super passages (drain over canal) and level crossings — the vocabulary of every canal-design question.' },
        ],
      },
      {
        kind: 'para',
        text: 'The hydrologic cycle is the closed loop that makes water engineering possible: ocean evaporation, vapour transport, precipitation, and the return journeys of surface runoff, infiltration and evapotranspiration. Measurement starts with the rain gauge — non-recording Symons-type gauges read daily depth; recording gauges (tipping-bucket, weighing) resolve intensity, which matters because a 50 mm storm in an hour floods what 50 mm in a day does not. Point depths become catchment averages by the arithmetic mean for uniform gauge networks, Thiessen polygons for weighting by area, or the isohyetal method for real topography; the double-mass curve detects a gauge that has quietly changed its exposure. Abstractions come next: open-pan evaporation with coefficients to convert to lake losses; potential evapotranspiration (the demand when water is unlimited, estimated by Penman\'s energy balance) against actual; and infiltration, which Horton\'s decay equation describes as capacity falling from an initial f0 toward a final fc as the soil saturates. Storm analysis uses the φ-index — the uniform loss rate that separates rainfall excess, the part that becomes direct runoff, from the rest.',
      },
      {
        kind: 'para',
        text: 'Runoff is where measurement becomes prediction. A storm hydrograph shows a rising limb, a crest and a recession; base flow (groundwater contribution) is separated to isolate direct runoff. The unit hydrograph converts a catchment\'s rainfall history into that direct-runoff shape, obeying proportionality (10 mm of excess gives ten times the 1 mm response) and superposition (successive rainfall blocks add their shifted responses); the S-curve trick changes the duration D of a unit hydrograph, and synthetic methods extend the idea to ungauged basins. Small urban catchments justify the simplest tool, the rational formula: peak discharge equals runoff coefficient C times intensity i times area A — a design storm of chosen return period supplies the intensity from depth-duration-frequency curves. Large catchments and large structures need frequency analysis instead: an annual maximum flood series, plotted by the Weibull position (rank m over n+1), fitted with Gumbel\'s extreme-value distribution, read off as design floods for return periods matched to consequence — and always remembering that a T-year flood has probability 1/T each year, so over n years the risk compounds as 1 − (1 − 1/T)^n.',
      },
      {
        kind: 'formula',
        name: 'Duty–delta relation',
        latex: '\\Delta = \\frac{8.64\\, B}{D}',
        meaning: 'Delta Δ (metres of depth) equals 8.64 times base period B (days) divided by duty D (hectares per cumec). It is unit arithmetic: one cumec over duty hectares for B days must equal the depth over the same area.',
      },
      {
        kind: 'para',
        text: 'Irrigation engineering begins with the crop\'s ledger. Delta is the total depth of water required over the crop period — roughly 120 cm for rice, 40 cm for wheat, varying with climate and soil — and duty is the area one cumec serves; the two are the same information flipped, and the relation Δ = 8.64B/D is the most-asked formula of the topic. Consumptive use splits into transpiration and soil evaporation, raised above potential by the crop factor; irrigation efficiency tracks how much of what leaves the canal actually reaches the root zone, which is why method matters — border, basin and furrow flooding waste by gravity, sprinklers and drip systems pay for themselves where water is scarce. Canals are designed as regime channels: Kennedy\'s and Lacey\'s silt theories seek the velocity that neither silts nor scours an alluvial bed, Manning\'s equation sizes the section, and lining (concrete, brick or masonry) buys lower losses and higher velocities at capital cost. Distribution works — head regulators, cross regulators, outlets — deliver the water field by field, and diversion headworks across a river (weir or barrage with undersluices, divide wall, fish ladder, marginal bunds) raise the level to feed the canal while passing floods and silt.',
      },
      {
        kind: 'para',
        text: 'Beneath the surface runoff lies the groundwater half of the syllabus. An aquifer stores and transmits water: its storage properties are porosity, specific yield (the fraction that drains freely to a well) and specific retention, and its transmission property is hydraulic conductivity, linked to discharge by Darcy\'s law — velocity proportional to hydraulic gradient. Pumping a well lowers the water table into a cone of depression whose radial flow the Thiem equations describe in steady state, and the safe yield of a basin is the withdrawal rate that does not mine storage beyond recharge — the arithmetic behind every groundwater-regulation dispute. Wells are classified by what they tap (water table versus confined, the latter flowing under artesian pressure when its potentiometric surface rises above ground), and recharge structures — percolation tanks, check dams, injection wells — are the engineered answer when extraction outruns nature. The examinable core is small and stable: Darcy\'s proportionality, the steady radial-flow equation, and the storage-coefficient vocabulary that connects the two.',
      },
      {
        kind: 'para',
        text: 'The failure mode of all this success is waterlogging: when seepage from unlined canals and over-irrigation raises the water table into the root zone, soil aeration collapses, salts rise with the capillary water and evaporate at the surface, and once-productive land turns alkaline white. The remedies are hydraulic discipline — lining, field drainage, cropping patterns that balance the water budget, and subsurface or surface drains to evacuate what the soil cannot hold. The same arithmetic serves the reverse problem of drainage design, and both close the loop with the water balance the lesson began with: what enters a system must leave, and the engineer\'s choice is only whether it leaves by design or by damage.',
      },
      {
        kind: 'example',
        title: 'Delta from duty, and what a canal must carry',
        steps: [
          'Wheat with base period B = 120 days has duty D = 1728 ha/cumec. Delta: Δ = 8.64 × 120 / 1728 = 0.60 m of water for the season.',
          'Check by units: 1 cumec over 1728 ha for 120 days supplies 1 × 86,400 × 120 ≈ 1.04 × 10⁷ m³; spread over 1728 ha = 1.728 × 10⁷ m², depth = 0.60 m. Same answer — always sanity-check this way.',
          'If the commanded area is 43,200 ha, the canal must run at 43,200 / 1728 = 25 cumecs at the head — before adding channel losses and capacity factor.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: 'The unit hydrograph of duration D represents direct runoff from…', options: ['1 mm of rainfall in any duration', '1 mm of effective rainfall uniformly over the catchment in duration D', '1 cumec for one hour', 'the largest flood on record'], answer: 1, explain: 'It is defined for unit effective rainfall in a fixed duration; proportionality and superposition then build any storm.' },
          { q: 'A 50-year flood has, in any given year, a probability of occurrence of…', options: ['2%', '50%', '0.02', '1/50 of the annual rainfall'], answer: 0, explain: 'Return period T means exceedance probability 1/T per year — 2% for T = 50; the name misleads people about real risk.' },
          { q: 'Higher duty for a crop means…', options: ['more water needed', 'more area irrigated per cumec — more efficient use', 'deeper water table', 'higher delta'], answer: 1, explain: 'Duty is area per cumec; higher duty stretches the same flow over more land, and duty and delta are inversely related.' },
          { q: 'The φ-index is…', options: ['the infiltration capacity at saturation', 'the uniform loss rate separating rainfall into runoff and abstraction', 'a gauge density measure', 'the pan coefficient'], answer: 1, explain: 'Rainfall above the φ-index becomes direct runoff; below it, losses — it is fitted so the excess volume matches the observed hydrograph.' },
          { q: 'Canal lining primarily reduces…', options: ['evaporation only', 'seepage losses and waterlogging risk', 'silt carrying', 'duty'], answer: 1, explain: 'Lining cuts seepage (the source of waterlogging), permits higher velocity and smaller sections; silt control is secondary.' },
        ] },
      {
        kind: 'para',
        text: 'Hydrology\'s models connect to the environmental-engineering lesson, whose treatment trains purify the same water these canals deliver; the flood-frequency statistics rest on the probability vocabulary of any first statistics course; and the GIS lesson at the end of this sequence is now the standard tool for mapping catchments, canal commands and waterlogged fields — the geometry half of water-resources practice.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: comfort with hydrographs needs only the water-balance idea introduced here; flood statistics benefits from a basic probability course. Follow with the water-supply and wastewater lesson for the urban side of the same water, and the surveying-geomatics lesson for the mapping tools. Standard readings: K. Subramanya\'s Engineering Hydrology, S.K. Garg\'s Irrigation Engineering, and the GATE CE water-resources syllabus.',
      },
    ],
  },
  {
    id: "eng-dams-hydropower-engineering",
    title: "Dams: Storing Water, Making Power, Living With Risk",
    domain: "Engineering",
    field: "Civil & Structural Engineering",
    branch: "Water Infrastructure",
    tier: "intermediate",
    concepts: [
      "water pressure grows with depth",
      "gravity, arch and embankment load logic",
      "spillways: passing the flood safely",
      "head and flow set turbine choice",
      "Pelton, Francis and Kaplan machines",
      "reservoir sedimentation",
      "fish passage and dam removal",
    ],
    words: 1295,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A dam does two jobs at once: storing water — for drinking, irrigation, flood control — and converting that stored water into electricity as it is released. Both jobs come from the same physics: pressure grows with depth, so the push is hardest at the bottom, and every metre between reservoir and turbine is energy waiting to be harvested. This lesson covers the three dam types and their load logic, the spillway question, the machinery of hydropower, and the sediment, fish and risk questions every dam eventually answers.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Hydropower is the largest renewable source of electricity on Earth, and a dam is the only civil structure whose failure can erase a town within the hour. Living with that bargain is the discipline.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The load is triangular. Water pressure grows linearly with depth, so the push is zero at the surface and maximum at the base, the resultant acting a third of the way up. Everything a dam is follows from that triangle: thickest where the water pushes hardest, routing the thrust somewhere the valley can absorb — its own mass, the canyon walls, or a broad base.",
      },
      {
        kind: "para",
        text: "The three dam types are three answers. A gravity dam is a concrete wall so massive its own weight resists sliding and overturning — brute force answering a triangle with a bigger triangle. An arch dam curves upstream, so water pushing on the face wedges the arch tighter into the canyon walls, carrying the whole load in compression to rock abutments; the most elegant answer, demanding near-perfect foundations. An embankment dam builds the wall from earth and rock — taming seepage not with stiffness but with geometry: a base so wide the water's path through the fill grows too long to matter, sealed by a clay core.",
      },
      {
        kind: "para",
        text: "Every dam must answer a fatal question: how does it pass a flood it was never sized for? The spillway is the answer; skimping on it is how dams die. Overtopping is the classic killer of embankments — earth does not survive being a waterfall — so designs carry a gated service spillway plus an ungated emergency one that works when operators and power fail. Oroville in California met record storms in 2017 with both spillways failing — the chute crumbling, the emergency route eroding toward catastrophe — forcing 188,000 people to evacuate.",
      },
      {
        kind: "para",
        text: "Turning release into power is a matching problem between head and flow: power goes as flow times head times efficiency, so a mountain reservoir with modest flow and a great river with tiny fall both yield megawatts — with different machines. The Pelton wheel is the high-head answer, an impulse machine fired by jets striking a bucketed rim. The Francis turbine, the installed workhorse, is a reaction machine owning the wide middle of the head range, pressurized flow giving up energy through its runner. The Kaplan is an adjustable-blade propeller for low head and huge flow. Pumped storage adds a reversible machine — pumping uphill with cheap midnight power, generating at the evening peak — at roughly 80 percent round trip.",
      },
      {
        kind: "para",
        text: "Reservoirs are sediment traps: water slows, the river's load drops out, and storage gives way to mud. Global estimates put the loss near half a percent of capacity a year, and some dams were strangled within decades — China's Sanmenxia on the Yellow River lost most of its function almost immediately and was rebuilt around pass-through. The countermeasures cost water: low-level sluicing, timed flushing, venting the density currents that creep along the bed.",
      },
      {
        kind: "para",
        text: "To everything that moves in a river, a dam is a wall. Salmon and sturgeon need ladders, lifts and bypasses, and their mixed record powers the removal movement: the Elwha's two dams came down in 2011–2014, and the Klamath's four — the largest removal in history — finished in 2024, reopening hundreds of kilometres of spawning habitat. The other side of the ledger is aging inventory: instruments watch piezometers and seepage flows for early trouble, and emergency action plans map the flood wave a failure would send downstream. Living with a dam means deciding, explicitly, which risks downstream towns hold.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Hydrostatic thrust on a dam face",
        latex: "F = \\tfrac{1}{2}\\,\\rho g\\,H^2",
        meaning: "Water push per metre of dam length — depth squared, acting a third of the height above the base.",
      },
      {
        kind: "formula",
        name: "Hydropower output",
        latex: "P = \\eta\\,\\rho g\\,Q H",
        meaning: "Efficiency times density, gravity, flow and head — the two dials every site offers.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the output of a plant passing 200 cubic metres per second through 150 metres of head at 90 percent efficiency — and the thrust on one metre of a 100-metre dam face.",
          "Recall: P = eta rho g Q H, and F = one half rho g H squared.",
          "Apply: P = 0.9 x 1,000 x 9.81 x 200 x 150 ≈ 265 MW. Thrust: F = 0.5 x 9,810 x 100² ≈ 49 meganewtons per metre, acting 33 metres above the base.",
          "State the result: a plant powering a quarter-million homes, held by a wall resisting a warship's weight on every metre — aimed a third of the way up the base.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Three Gorges — the world's largest power station at 22.5 GW, with civilizational-scale resettlement",
          "Itaipu — 14 GW shared by Brazil and Paraguay, supplying most of Paraguay's power",
          "Hoover Dam — a 221-metre concrete arch-gravity that tamed the Colorado and built the Southwest",
          "Oroville — the tallest US dam, whose 2017 spillway failures reordered dam-safety practice",
          "Pumped storage like Bath County — gigawatt-scale batteries masquerading as hydro plants",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Dams rarely fail at the middle of the concrete. They fail at the edges: spillways under-designed for the flood that eventually arrives, seepage piping silently hollowing an embankment — the Teton mechanism — and abutments no one inspected. The gravest pitfall is believing the design flood is a fact rather than a forecast.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Head", def: "Vertical drop from reservoir surface to turbine — energy per unit weight of water." },
          { term: "Spillway", def: "Structure that passes flood flow safely past or over the dam." },
          { term: "Piping", def: "Internal erosion hollowing an embankment along a seepage path." },
          { term: "Pelton wheel", def: "Impulse turbine for high head and modest flow, driven by water jets." },
          { term: "Francis turbine", def: "Reaction turbine owning the middle of the head range; the world's workhorse." },
          { term: "Pumped storage", def: "Reversible hydro plant storing energy by pumping water uphill off-peak." },
          { term: "Dead storage", def: "Volume below the lowest outlet — unreachable water, sediment's destination." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "An arch dam curves upstream so that:",
            options: [
              "water slides smoothly over the face",
              "water pressure wedges the arch into the abutments, carrying the load in compression",
              "the dam can be built from earth",
              "waves reflect away from the wall",
            ],
            answer: 1,
            explain: "The curved face converts horizontal thrust into compression carried to the canyon walls — concrete's favorite stress state.",
          },
          {
            q: "Among embankment dams that fail without overtopping, the leading mechanism is:",
            options: [
              "freeze-thaw of the crest",
              "piping — internal erosion along a seepage path",
              "thermal cracking of concrete",
              "wind-driven wave erosion",
            ],
            answer: 1,
            explain: "Teton 1976: water enlarges a path through the fill, hollowing the dam until collapse — which is why seepage is monitored obsessively.",
          },
          {
            q: "A plant with Q = 200 m³/s, H = 150 m and efficiency 0.9 generates about:",
            options: ["26.5 MW", "265 MW", "2.65 GW", "9.8 MW"],
            answer: 1,
            explain: "0.9 x 1,000 x 9.81 x 200 x 150 ≈ 265 MW — head times flow is nearly everything.",
          },
          {
            q: "Pumped-storage hydropower exists to:",
            options: [
              "irrigate hill farms",
              "store cheap off-peak electricity as elevated water, returning it at peak",
              "cool thermal power stations",
              "pass flood flows",
            ],
            answer: 1,
            explain: "The grid's largest storage technology — energy arbitrage at gigawatt scale, roughly 80 percent round trip.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The environment domain's solar, wind and renewable-transition lessons cover where hydropower sits in the grid mix; water pollution covers what rivers carry; why bridges stand holds the statics underneath.",
        tone: "path",
      },
    ],
  },
]
