import type { KnowledgeTopic } from '../types'

/** Expansion pass X19 (2026-10-21): the GATE Civil Engineering core cluster —
 *  the eight Core CE syllabus topics the audit showed fully unmapped
 *  (concrete structures, hydrology, irrigation, water and waste water,
 *  municipal solid wastes, highway planning and alignment, traverse
 *  surveying/leveling/curves, GIS and GNSS). Zero overlap by construction:
 *  the Library's engineering lessons own feedback control, materials
 *  failure, three-phase power, bridge statics, manufacturing tolerances and
 *  aerodynamics — no structural-concrete design, water-resources,
 *  environmental-sanitary, transportation or geomatics lesson existed, and
 *  eng-structures-bridges covers bridge load paths, not RCC design or the
 *  design philosophies taught here.
 *  Sources: GATE 2026 CE official syllabus (gate.iitkgp.ac.in), IS 456:2000
 *  plain and reinforced concrete code, IRC standards for highways, and the
 *  standard undergraduate texts these exams examine from (Pillai & Menon,
 *  K. Subramanya, S.K. Garg, Khanna & Justo, B.C. Punmia). */

export const x19CivilCoreTopics: KnowledgeTopic[] = [
  {
    id: 'civ-concrete-structures',
    title: 'Concrete Structures: Materials, Beams and Limit-State Design',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Structural Engineering',
    tier: 'intermediate',
    concepts: [
      'Concrete technology: water-cement ratio, grades and workability',
      'Shrinkage, creep and characteristic strength',
      'Working stress versus limit state design philosophies',
      'Flexural design of singly reinforced beams',
      'Shear design, bond and stirrups',
      'Slabs, columns and footings',
      'Basics of prestressed concrete',
    ],
    words: 1832,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Reinforced concrete is the most-used engineered material on earth, and its design is a study in managed imperfection: concrete strong in compression and weak in tension, steel the reverse, combined so each does what it does best. This lesson follows the material from its chemistry to its code-based design — how the water-cement ratio fixes strength, why the working stress method and the limit state method answer different questions, how a beam is designed to bend, shear and crack safely, and what prestressing buys. The bridge lesson in this Library covers load paths and trusses; here the subject is the material and the section, the daily work of the structural designer.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Concrete structures is the single largest Core CE topic in the GATE civil paper, and its vocabulary — characteristic strength, limit state, xu/d, superelevation\'s cousin nowhere in sight — repeats across every other structural question. The examiners test whether you can compute a design moment, check shear, and reason about why under-reinforced sections fail ductile rather than brittle.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Water-cement ratio', def: 'The mass ratio of water to cement in a mix — the dominant control on strength via Abrams\' law: lower w/c means higher strength, because excess water leaves capillary pores as it evaporates. Structural mixes run roughly 0.40 to 0.60.' },
          { term: 'Characteristic strength', def: 'The strength below which not more than 5% of test results fall — a statistical floor, not an average. Grade M20 concrete has a characteristic 28-day cube strength of 20 MPa; Fe415 steel yields at 415 MPa.' },
          { term: 'Limit state', def: 'A condition beyond which a structure fails its purpose. Collapse (ultimate) limit states cover flexure, shear and instability; serviceability limit states cover deflection and cracking. The limit state method applies partial safety factors to both loads and material strengths.' },
          { term: 'Neutral axis depth (xu)', def: 'The depth of the zero-stress fibre in a flexural section at failure. Its ratio to the effective depth d distinguishes balanced (xu = xu,max), under-reinforced (xu < xu,max — steel yields first, ductile) and over-reinforced (brittle) sections.' },
          { term: 'Creep', def: 'The slow additional strain of concrete under sustained load, growing for years and increasing deflections; it also relaxes some of the stress in prestressing steel and redistributes moments.' },
          { term: 'Prestressing', def: 'Intentionally compressing concrete with tensioned high-strength steel so applied loads work against an existing compression — pre-tensioned before casting or post-tensioned through ducts afterwards — controlling cracks and enabling long spans.' },
        ],
      },
      {
        kind: 'para',
        text: 'Concrete\'s strength is decided before it sets. Cement hydrates with water to form calcium-silicate-hydrate gel — the glue of the matrix — but only about 0.25 by weight of water is chemically needed; anything more exists for workability and eventually evaporates, leaving capillary pores. Hence Abrams\' law: for fully compacted concrete of given age, strength is inversely related to the water-cement ratio. The mix is specified by grade — M20, M25, M30 — where the number is the characteristic 28-day cube strength in MPa, measured on 150 mm cubes; cylinder strengths run about 0.8 of cube. Workability is measured by slump or compaction factor, and it trades against strength: more water flows better but weakens, so admixtures — plasticisers and superplasticisers — exist to separate the two. Hardened concrete also moves: drying shrinkage (roughly 0.0003 strain, more with finer cements and poorer curing), thermal expansion, and creep under sustained load, which roughly doubles the immediate elastic deflection over years. Curing — keeping moisture and temperature favourable for at least 7 to 14 days — is not a formality; most site strength problems trace to it.',
      },
      {
        kind: 'para',
        text: 'Two design philosophies share the syllabus. The working stress method, the older one, keeps computed service-load stresses within permissible values using elastic theory: steel and concrete are assumed linear-elastic, bonded, and related by the modular ratio, and the safety margin hides entirely inside conservative permissible stresses. It is simple and still used for some serviceability checks, but it cannot describe failure, because a section near collapse is far from elastic. The limit state method — the Indian code IS 456\'s current basis — instead multiplies loads by partial safety factors (1.5 for dead plus live load combinations) and divides material strengths by theirs (1.5 for concrete, 1.15 for steel), then checks separate limit states: the structure must not collapse under factored loads and must not deflect, crack or vibrate unacceptably under service loads. The philosophy\'s insight is that uncertainties differ — loads vary more than steel strength, concrete more than steel — so factors should attach where the uncertainty lives, with statistics behind each number.',
      },
      {
        kind: 'formula',
        name: 'Limiting moment of resistance (singly reinforced, Fe415)',
        latex: 'M_{u,lim} = 0.138\\, f_{ck}\\, b\\, d^{2}',
        meaning: 'The maximum factored moment a balanced under-reinforced section can carry: 0.36 fck b xu,max (d − 0.42 xu,max) with xu,max/d = 0.48 for Fe415 (0.53 for Fe250, 0.46 for Fe500). Beyond this the section needs compression steel or a larger depth.',
      },
      {
        kind: 'para',
        text: 'Flexural design then becomes a controlled choice. A singly reinforced beam carries the factored moment with tension steel alone: pick the section, compute the required steel from force equilibrium between the concrete compression block (0.36 fck b xu) and steel tension (0.87 fy Ast), and deliberately keep xu below xu,max so the steel yields before the concrete crushes — the under-reinforced, ductile condition that telegraphs failure by large deflections and wide cracks instead of dropping without warning. Shear is the second check: diagonal tension near supports, quantified as nominal shear stress Vu/bd against code limits, resisted by vertical or inclined stirrups working in a truss analogy — concrete struts diagonally, steel ties across. Minimum shear reinforcement is mandatory regardless of calculation, because concrete\'s shear story is unreliable. Bond and anchorage complete the force path: the development length embeds the bar far enough that its yield force transfers to the concrete before the bar pulls out, and details like laps and hooks exist for this reason, not decoration.',
      },
      {
        kind: 'para',
        text: 'The member families specialise the same mechanics. Slabs span in one direction when the longer side exceeds twice the shorter (load mostly to the long supports) and in two-way bending otherwise, with minimum reinforcement for temperature and shrinkage; flat slabs drop the beams and add punching-shear checks at columns. Columns carry compression with nominal eccentricity requirements, classified short or slender because slenderness invites buckling amplification, and confined by lateral ties that delay buckling of the main bars and hold the core — the reason confined columns survive earthquakes better. Footings spread column loads to soil as isolated pads, combined strips or rafts, designed both for bending and for punching shear at the column face. Prestressing reorganises all of it: tensioned strands — pre-tensioned on a bed before casting, bonded by curing; post-tensioned through ducts and locked by anchorages — put the whole section in compression so the live load must first erase it. Cracks close, spans lengthen, and the high steel strengths that would crack ordinary RC become usable. The price is the loss list: elastic shortening, creep and shrinkage of concrete, relaxation of steel, anchorage slip, and friction in post-tensioned ducts — every exam asks at least one.',
      },
      {
        kind: 'para',
        text: 'Two further blocks complete the designer\'s checklist. Durability is now designed, not hoped for: exposure classifications (mild to severe, IS 456\'s tables) set minimum grades, covers and cement contents, because the real killers of RC structures are chemical — chloride ingress depassivating reinforcement and triggering corrosion that expands to crack the cover, sulfate attack disrupting the paste, alkali-silica reaction swelling with certain aggregates. Water-cement ratio, cover and compaction are the defence trio; the 50-year design life of a bridge is bought at the detailing stage, not in repairs. Testing closes the loop: cube (or cylinder) compression tests at 7 and 28 days are the acceptance standard, workability is sampled at the truck, and hardened structures are assessed non-destructively by rebound (Schmidt) hammer for surface strength correlations, ultrasonic pulse velocity for homogeneity and cracking, and core extraction when disputes need the truth. What links durability and testing is the lesson\'s recurring theme: concrete is a statistical material made on site, and every safety factor in the code is an honest acknowledgment of that variance — the same statistical humility the limit-state philosophy formalised.',
      },
      {
        kind: 'example',
        title: 'Sizing a beam in three moves',
        steps: [
          'Factored load gives design moment Mu = 180 kN·m on a 230 mm × 450 mm (effective) Fe415/fck 20 section. Capacity check: 0.138 × 20 × 230 × 450² in N·mm ≈ 128.8 kN·m < 180 — singly reinforced is insufficient at this size.',
          'Either deepen (d = 550 mm gives 0.138 × 20 × 230 × 550² ≈ 192 kN·m ≥ 180 — feasible) or add compression steel; the designer weighs headroom against steel.',
          'With d = 550, xu < xu,max is arranged by computing Ast from equilibrium with the intended neutral axis, then checking shear: Vu/(bd) against code limits fixes stirrup diameter and spacing, and the development length fixes anchorage past the support.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: 'Grade M25 means the concrete has a characteristic 28-day cube strength of…', options: ['25 kN average', '25 MPa below which not more than 5% of results fall', '25 MPa mean strength', '25 MPa cylinder strength'], answer: 1, explain: 'Characteristic strength is the 5% fractile on 150 mm cubes — a statistical floor, not the mean.' },
          { q: 'In limit state design, the partial safety factor for steel is smaller than for concrete (1.15 vs 1.5) mainly because…', options: ['steel is cheaper', 'steel strength is less variable and better controlled', 'steel carries less load', 'concrete cracks'], answer: 1, explain: 'Partial factors attach to uncertainty; factory-controlled steel is statistically tighter than site-cast concrete.' },
          { q: 'An under-reinforced beam section is preferred because it…', options: ['uses less concrete', 'fails ductile after steel yields, warning before collapse', 'never cracks', 'is always cheaper'], answer: 1, explain: 'Yielding steel gives large deflections and cracking before the brittle concrete crushing — ductility is a design goal, not an accident.' },
          { q: 'xu,max/d for Fe415 is…', options: ['0.46', '0.48', '0.53', '0.62'], answer: 1, explain: 'IS 456 gives 0.53 for Fe250, 0.48 for Fe415 and 0.46 for Fe500 — it falls as steel strength rises.' },
          { q: 'Pre-tensioning differs from post-tensioning chiefly in that pre-tensioning…', options: ['uses no steel', 'tensions strands before casting and relies on bond', 'requires anchorages and ducts', 'cannot be done in factories'], answer: 1, explain: 'Pre-tensioned strands are jacked against a bed before casting and gain bond as the concrete cures; post-tensioning needs ducts and anchorages.' },
        ] },
      {
        kind: 'para',
        text: 'Read the code the way examiners quote it: IS 456 for everything ordinary, the IRC codes where roads meet structures, and the detailing rules that turn calculations into drawings — cover, spacing, laps, anchorage. The material science half of this lesson connects to the materials-failure lesson for the metals side; the design half connects to the bridge lesson for systems thinking about loads; the hydrology lesson that follows is the water-resources half of the same professional exam.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the bridge-structures lesson for load paths and statics, and the materials-failure lesson for stress and strain vocabulary. Follow with the highway lesson for another IRC-governed design domain, and the surveying lesson for how positions on site are actually fixed. Standard readings: IS 456:2000, Pillai & Menon\'s Reinforced Concrete Design, Krishna Raju on prestressing, and the GATE CE syllabus sections on concrete structures.',
      },
    ],
  },
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
    id: 'civ-water-wastewater-municipal',
    title: 'Environmental Engineering: Water Supply, Wastewater and Municipal Solid Wastes',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Environmental Engineering',
    tier: 'intermediate',
    concepts: [
      'Water demand, variations and fire demand',
      'Water quality standards and sampling',
      'Treatment train: coagulation, sedimentation, filtration, disinfection',
      'Wastewater characteristics: BOD and COD',
      'Primary and secondary wastewater treatment',
      'Sewerage systems and sewage disposal',
      'Municipal solid wastes: generation, collection and processing',
      'Sanitary landfills: liners, leachate and gas',
    ],
    words: 1718,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Public health engineering is the quietest triumph of civil engineering: cities where cholera was once seasonal now lose almost no one to the water supply. The discipline runs in two mirrors — bring clean water in, take dirty water out, and manage the solids both processes and a million kitchens produce. This lesson follows one municipal system end to end: demand estimation and quality standards, the classical treatment train, the BOD logic that sizes wastewater plants, sewerage and disposal, and the solid-waste hierarchy from collection bin to lined landfill. It is the most standards-driven branch of the profession, and the exam questions reward exactly that procedural fluency.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Water and waste water plus municipal solid wastes form the environmental block of the GATE CE paper, and the same material serves public-health questions in UPSC and state service exams. The recurring calculations — demand with peak factors, jar-test doses, BOD decay, landfill gas — are all short and formulaic, making this the highest marks-per-hour region of the syllabus.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Per capita demand', def: 'The design volume of water per person per day — Indian practice designs domestic-plus-civic supply around 135 litres per capita per day (lpcd), rising to 200+ with full flushing and non-domestic uses, before peak factors multiply the average.' },
          { term: 'Break-point chlorination', def: 'Adding chlorine past the point where it has oxidised all ammonia and organics, so a free residual chlorine remains to disinfect — the chemical guarantee behind the 0.2 mg/L residual standard at the consumer\'s tap.' },
          { term: 'BOD', def: 'Biochemical oxygen demand — the oxygen micro-organisms consume decomposing organic matter, measured as BOD5 at 20 °C (about 68% of the ultimate demand). The load number that sizes every secondary treatment unit; COD, the chemically oxidisable demand, is always larger.' },
          { term: 'Activated sludge process', def: 'The dominant secondary treatment: aerate settled sewage with a recycled microbial suspension, let the floc oxidise dissolved organics, settle it, and return the sludge. Controlled by the food-to-microorganism ratio and monitored by sludge volume index.' },
          { term: 'Sanitary landfill', def: 'An engineered disposal cell where waste is compacted and covered daily on a lined base with leachate collection and gas extraction — designed to isolate decomposing waste from soil, water and air, not merely to bury it.' },
          { term: '3R hierarchy', def: 'Reduce, reuse, recycle before disposal — the policy logic of the Solid Waste Management Rules 2016, which formalised source segregation, processing targets and the informal sector\'s role in Indian municipal practice.' },
        ],
      },
      {
        kind: 'para',
        text: 'Design starts with arithmetic on people. Per capita demand (Indian standards: 135 lpcd as the planning base for domestic and civic uses, more where flushing, industry and fire reserves add on) is multiplied by population forecasts — arithmetic, geometric or decremental growth, matched to a city\'s maturity — and by the variations that dominate pipe sizing: the maximum daily draw runs about 1.8 times the average, and the peak hour nearly 2.7, so the maximum-hour demand governs distribution mains while sources and treatment are sized nearer the maximum daily figure. Fire demand is layered on by empirical formulas (Kuichling\'s, Freeman\'s, the National Board formula) that scale with population. Quality standards then decide what "clean" means: BIS 10500 and WHO guidelines bound turbidity, pH (6.5–8.5), hardness, fluoride (desirable near 1 mg/L; excess causes fluorosis; deficiency, dental caries), nitrate (methaemoglobinaemia in infants), arsenic and — biologically — coliform bacteria, the indicator organism whose absence certifies faecal safety. Sampling is designed around these limits, not collected at random.',
      },
      {
        kind: 'para',
        text: 'The treatment train assembles unit processes in the order nature demands. Screening removes the large; aeration adds oxygen and strips tastes and gases. Coagulation doses alum or other coagulants — the jar test finds the optimum dose — to destabilise colloidal clay that would never settle on its own; rapid mixing disperses the dose, flocculation gently grows the flocs. Sedimentation tanks remove the settleable fraction at a designed overflow rate, and rapid sand filters polish the rest: water passes down through a bed characterised by effective size and uniformity coefficient, head loss builds as the bed clogs, and backwashing reverses the flow to lift and clean the media. Disinfection closes the train — chlorination is standard, with contact time, residual (0.2 mg/L free chlorine at the tap) and break-point chemistry ensuring the dose kills pathogens rather than merely feeding ammonia; alternatives (ozone, UV) disinfect without residual protection. Distribution then moves the water through branched or looped networks, the loops preferred for reliability, with storage reservoirs flattening the peak against the plant\'s steady output.',
      },
      {
        kind: 'formula',
        name: 'BOD decay and the five-day standard',
        latex: 'BOD_t = L\\left(1 - 10^{-k_1 t}\\right),\\quad BOD_5 \\approx 0.68\\,L',
        meaning: 'Oxygen demand accumulates toward the ultimate carbonaceous demand L as first-order decay with base-10 constant k1 (≈0.1/day at 20 °C): the five-day BOD is about 68% of ultimate — the standardised index plants are designed on.',
      },
      {
        kind: 'para',
        text: 'Two specialised water-treatment problems round out the block because exams return to them yearly. Hardness — calcium and magnesium salts — is removed by lime-soda softening (precipitating carbonates and non-carbonates in a reaction train whose dose arithmetic follows stoichiometry) or by ion-exchange zeolites (regenerated with brine, exchanging sodium for the hardness ions), and the distinction between temporary (carbonate) and permanent hardness decides which process fits. Iron and manganese, the staining metals of groundwater, are lifted by aeration-oxidation-precipitation-filtration sequences; fluoride excess — the endemic fluorosis problem across parts of India — is handled by activated alumina or Nalgonda technique (alum plus lime bleaching powder), and defluoridation questions are a small industry in public-health engineering papers. Disinfection by-products close the modern chapter: chlorine reacting with natural organics forms trihalomethanes, so source protection and precursor removal (moving coagulation ahead of chlorination) are design answers, not afterthoughts — a reminder that every unit process trades one risk against another and the train is judged as a system.',
      },
      {
        kind: 'para',
        text: 'Wastewater engineering runs the same train backwards through a dirtier stream. Characterisation first: solids (settleable and suspended), organic strength by BOD and COD, nutrients (nitrogen, phosphorus — the eutrophication budget), and the pathogens the effluent standards govern. Preliminary treatment screens and de-grits; primary sedimentation removes roughly 60% of suspended solids and a third of BOD cheaply. Secondary treatment is biological and is where the BOD arithmetic pays: the activated sludge process aerates mixed liquor under a controlled food-to-microorganism ratio, settles the floc in a secondary clarifier and recycles the biomass, achieving 85–95% BOD removal, while the trickling filter — a fixed-film alternative on stone or plastic media with a rotary distributor — achieves similar ends with simpler operation and higher nitrification. Oxidation ponds and constructed wetlands serve warm, land-rich contexts. Sludge, the inevitable by-product, is thickened, digested anaerobically (two-stage digestion stabilises it and yields biogas), dried on beds and disposed or reused. Sewerage collection separates into combined, separate and partially-separate systems — separate sewers the modern default for treatment efficiency — designed by Manning\'s equation to hold self-cleansing velocity (≈0.6 m/s) without scouring, and disposal ends in dilution, land treatment or standards-bound discharge.',
      },
      {
        kind: 'para',
        text: 'Municipal solid waste is the third system and the newest. Indian urban waste is roughly half organic by composition, with generation rates climbing with income; the Solid Waste Management Rules 2016 mandate source segregation into wet, dry and domestic-hazardous streams, which is the precondition for everything downstream. Collection systems balance hauled versus stationary-container logistics; processing matches stream to technology — composting and vermicomposting for the wet fraction (carbon-nitrogen ratio near 25–30 for aerobic composting), incineration or refuse-derived fuel where calorific value suffices, pyrolysis and biomethanation as the advanced options. What remains goes to the sanitary landfill: a cell built on an engineered liner (compacted clay plus HDPE geomembrane), with leachate collected and treated, landfill gas — about half methane — extracted for flaring or energy, daily soil cover, and decades of post-closure monitoring. The landfill is designed to be forgotten safely, which is exactly why its liners, drains and gas wells dominate the exam questions.',
      },
      {
        kind: 'example',
        title: 'Sizing a city\'s water and its BOD load',
        steps: [
          'A city of 400,000 at 135 lpcd: average demand = 400,000 × 135 = 5.4 × 10⁷ L/day = 54 MLD. Maximum daily at 1.8× ≈ 97 MLD — the treatment and source figure; peak hour at 2.7× ≈ 146 MLD sizes the distribution mains.',
          'Fire demand by Kuichling for 400k population adds a few MLD for a few hours — negligible against the max-day total but decisive for hydrant storage.',
          'The same city at 200 g/capita/day of sewage with BOD5 of 250 mg/L discharges 80 MLD carrying 20,000 kg of BOD daily — the number secondary treatment must knock down by ~90% to meet effluent standards.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: 'BOD5 at 20 °C is roughly what fraction of the ultimate carbonaceous demand?', options: ['20%', '68%', '100%', '150%'], answer: 1, explain: 'With k1 ≈ 0.1/day (base 10), five days consumes about 68% of L — the standardisation behind the BOD5 index.' },
          { q: 'The purpose of break-point chlorination is to…', options: ['lower pH', 'oxidise ammonia and organics so a free residual remains', 'add fluoride', 'remove hardness'], answer: 1, explain: 'Past the breakpoint, chlorine demand is satisfied and free residual chlorine persists — the disinfection guarantee.' },
          { q: 'COD is always larger than BOD because…', options: ['COD measures chemically oxidisable matter including the non-biodegradable', 'COD uses a smaller sample', 'BOD decays', 'COD is measured longer'], answer: 0, explain: 'Dichromate oxidises what microbes cannot; the BOD/COD ratio itself indicates biodegradability.' },
          { q: 'The activated sludge process removes BOD by…', options: ['filtration through sand', 'aerated microbial oxidation with recycled biomass', 'chlorination', 'sedimentation alone'], answer: 1, explain: 'Aeration sustains a floc of bacteria that oxidise dissolved organics; the clarifier separates and the recycle keeps the culture dense.' },
          { q: 'A sanitary landfill\'s liner system exists chiefly to…', options: ['support heavy machinery', 'prevent leachate from reaching groundwater', 'speed decomposition', 'collect methane only'], answer: 1, explain: 'Clay-plus-geomembrane liners isolate the leachate stream, which the collection system then removes for treatment.' },
        ] },
      {
        kind: 'para',
        text: 'The thread back through the Library is the water itself: the hydrology lesson supplies the raw resource this train purifies and the storm drains this city empties into, and the geomatics lesson provides the mapping layer on which networks, catchments and landfill siting are actually planned. The chemistry of coagulation and chlorination is the applied edge of the general-chemistry lessons on solutions and equilibrium.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the hydrology lesson for where the water comes from, and basic chemistry for the coagulation and chlorination reactions. Follow with the surveying-geomatics lesson for network mapping, and the policy side of sanitation in the governance lessons. Standard readings: S.K. Garg\'s Water Supply Engineering and Sewage Disposal, Metcalf & Eddy\'s Wastewater Engineering, and the GATE CE environmental syllabus.',
      },
    ],
  },
  {
    id: 'civ-highway-geometric-design',
    title: 'Highway Engineering: Alignment, Geometric Design and Pavements',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Transportation Engineering',
    tier: 'intermediate',
    concepts: [
      'Highway planning, classification and alignment',
      'Cross-section elements and camber',
      'Sight distance: stopping, overtaking and PIEV',
      'Horizontal curves: superelevation, extra widening, transition curves',
      'Gradients and vertical curves',
      'Flexible and rigid pavement design',
    ],
    words: 1709,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'A road is a machine for converting terrain into travel, and its design is written in three currencies: safety (sight distances and friction), speed (curves, gradients and their compensation), and structure (the pavement that turns axle loads into stresses soil can bear). This lesson runs the full design sequence — how roads are classified and aligned, how camber and cross-section shed water, how stopping and overtaking sight distances are computed, how superelevation and transition curves let vehicles corner at design speed, and how flexible bituminous pavements differ structurally from rigid concrete slabs. It is the most formula-regular block of the transportation syllabus, and the formulas all trace back to one diagram: a vehicle negotiating a curve on a grade.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Highway geometric design is a guaranteed-marks region of the GATE CE paper: the SSD formula, the superelevation relation e + f = V²/127R, and grade compensation appear nearly every year. Each is short, each has a defined code context (IRC), and each is asked as a one-step or two-step numerical.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Design speed', def: 'The speed the geometry is built to accommodate safely — the parameter from which sight distances, curve radii and superelevation are computed. Classifications (national highway down to village road) differ chiefly in this number.' },
          { term: 'Stopping sight distance', def: 'The distance needed to see, react and brake to a stop: perception-reaction travel (0.278 V t, with t = 2.5 s on the PIEV model) plus braking distance V²/(254f). The non-negotiable minimum of geometric design.' },
          { term: 'Superelevation', def: 'The outward-to-inward cross-slope banked into a curve so centripetal resistance is shared between banking and tyre friction — e + f = V²/127R, with IRC capping e at 7% and using friction f = 0.15 for design.' },
          { term: 'Transition curve', def: 'The spiral (or cubic parabola) inserted between tangent and circular arc so centrifugal force grows gradually rather than jumping — steering, superelevation and extra widening all introduced along it.' },
          { term: 'Grade compensation', def: 'On sharp rising curves the grade is relaxed — by (30 + R)/R percent, capped at 75/R — because curve resistance already taxes the vehicle; the ruling grade is reserved for open country.' },
          { term: 'Modulus of subgrade reaction', def: 'k — the pressure per unit deflection of the soil subgrade under a plate load, the soil parameter of rigid-pavement design (Westergaard\'s slab analysis), just as CBR anchors flexible design.' },
        ],
      },
      {
        kind: 'para',
        text: 'Planning fixes what the design must achieve. Roads are classified by function and traffic — national and state highways as arteries, major district roads as collectors, village roads as distributaries — and historic plans (Nagpur\'s star-and-grid, the later twenty-year road plans) set density targets the modern Golden Quadrilateral and corridor programmes still echo. Alignment between terminals is chosen for shortness, ease, safety and economy, constrained by obligatory points (river crossings, towns, unstable ground), and refined into the horizontal and vertical geometry that follows. The cross-section then allocates the strip: carriageway width by lanes, shoulders for recovery and emergency stopping, right-of-way for future widening. Camber — the crown slope of 1.7 to 4% depending on surface — drains rainwater to the edges; steep enough to shed water, gentle enough not to tip slow vehicles, and always the first number checked in cross-section questions.',
      },
      {
        kind: 'para',
        text: 'Sight distance is the safety arithmetic. Stopping sight distance (SSD) sums reaction and braking: 0.278 V t with a 2.5-second perception-intellection-emotion-volition (PIEV) time, plus V² over 254f with the longitudinal friction coefficient f ≈ 0.35–0.40 — computed for the design speed, graded upward on upgrades (gravity helps; downgrades the opposite, and the formula splits by grade sign). Overtaking sight distance (OSD) is longer and more conditional: the distance to complete a passing manoeuvre with a gap — reaction time 2.5 seconds times the overtaking speed, then the passing distance during the manoeuvre with minimum spacing, then a safety margin — and where full OSD is impossible, intermediate sight distance (1.5 × SSD) or headlight sight distance on valley curves stands in. Every crest must be checked: the parabolic summit curve is set so the line of sight clears the brow at the required SSD or OSD, which is why crest curve length is a sight-distance problem, not a comfort one.',
      },
      {
        kind: 'formula',
        name: 'Superelevation design relation',
        latex: 'e + f = \\frac{V^{2}}{127 R}',
        meaning: 'Banking e plus side friction f balances the speed-squared over radius term (V in km/h, R in metres, the 127 hiding the gravity and unit conversions). IRC designs e for 75% of speed with f = 0.15 — e = V²/(225R) — capped at 7%, with friction absorbing the rest.',
      },
      {
        kind: 'para',
        text: 'Horizontal curves convert the superelevation relation into geometry. For design speed and terrain, the relation fixes the minimum radius — or, radius given, the required banking. Extra widening widens the carriageway on curves twice over: mechanically, because a vehicle\'s rear wheels track inside the fronts (nl²/2R for n lanes of wheelbase l), and psychologically, because drivers swing wide at speed (V/(9.5√R) per lane). Transition spirals of length L introduce superelevation and curvature at a rate comfortable to passengers, and shift the circular curve inward by s = L²/24R. On grades, the ruling grade (the design-enabling maximum) is compensated on sharp curves by (30 + R)/R percent — capped at 75/R — because curve resistance and grade resistance both draw on the same engine. Valley curves, unlike crests, are comfort and headlight problems: night driving must light the road ahead, and the parabolic valley curve is set for that headlight sight distance with a sag that does not bounce the suspension.',
      },
      {
        kind: 'para',
        text: 'Intersections are where the geometry meets conflict, and their vocabulary is examinable with the cross-section block. At-grade crossings are treated by channelisation — islands that separate conflicting streams and discipline turning movements — or, where volumes justify it, by rotary intersections: a circular carriageway around a central island on which weaving, not signal control, resolves conflicts, designed with weaving width and length proportional to the traffic that must weave across, and run at reduced speeds (the IRC design speed for rotaries being roughly 0.5 of the approach speed). Rotaries suit moderate, balanced volumes; they fail under heavy unbalanced flows and pedestrian pressure, which is where signalisation takes over. The traffic inputs behind all choices are measured, not assumed: volume studies counted in passenger car units (a heavy vehicle is several cars of capacity), spot-speed studies setting the 85th-percentile design speed, and origin-destination and parking surveys completing the picture. The capacity-versus-speed trade at the heart of every intersection question is the same engineering compromise the curves already taught — geometry buys safety and comfort out of a fixed budget of land and delay.',
      },
      {
        kind: 'para',
        text: 'Pavement design is the structural half. Flexible pavements — bituminous surfaces over granular bases and sub-bases — distribute wheel load through grain-to-grain contact in decreasing intensity with depth; they fail by rutting and fatigue cracking, are designed by layer thicknesses against the subgrade\'s California Bearing Ratio (IRC 37\'s mechanistic charts), and their traffic input is the cumulative standard axle load, where the fourth-power law makes one 8.2-tonne axle worth roughly ten 4-tonne axles. Rigid pavements — concrete slabs — behave as plates: the slab\'s flexural stiffness spans weak spots, stresses follow Westergaard\'s analysis on the modulus of subgrade reaction k, and the design problem becomes joints — expansion and contraction joints with load-transfer dowels, longitudinal warping joints with tie bars — because temperature curls the slab and corners are its weakest points. The choice between them is life-cycle economics over subgrade and traffic; the exam asks the structural contrasts and the occasional Westergaard corner-load calculation.',
      },
      {
        kind: 'example',
        title: 'Designing a curve for 80 km/h',
        steps: [
          'Design speed V = 80 km/h; assume fully-banked check first: R for e = 7% and f = 0 — R = V²/(127e) = 6400/8.89 ≈ 720 m. This is the no-friction safety floor.',
          'IRC design: e = V²/(225R). For R = 450 m: e = 6400/(225 × 450) ≈ 0.063 — within the 7% cap, so friction need not be invoked; if the cap were exceeded, reduce R or speed instead.',
          'Extra widening for 2 lanes (l = 6 m): We = 2 × 36/(2 × 450) + 80/(9.5√450) ≈ 0.08 + 0.37 ≈ 0.45 m — applied to the inside, with the transition length setting how it tapers in.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: 'The two components of stopping sight distance are…', options: ['reaction distance and braking distance', 'camber and gradient', 'superelevation and friction', 'grade and curve resistance'], answer: 0, explain: '0.278Vt covers perception-reaction; V²/(254f) covers braking — both scale with design speed.' },
          { q: 'In IRC superelevation design, friction is taken as 0.15 because…', options: ['tyres are smooth', 'the fraction of centripetal force friction may be asked to carry is limited for comfort and wet-weather safety', '0.15 is the skid coefficient', 'IRC caps speed'], answer: 1, explain: 'Design friction is not the ultimate available grip but the comfortable, wet-safe share — hence banking carries most of the load.' },
          { q: 'Extra widening on a horizontal curve is needed because…', options: ['vehicles skid outward', 'rear wheels track inside front wheels and drivers swing wide at speed', 'superelevation reduces width', 'pavement thickens'], answer: 1, explain: 'Mechanical off-tracking (nl²/2R) plus psychological widening (V/9.5√R) both eat into the nominal lane width.' },
          { q: 'Grade compensation on a sharp rising curve exists because…', options: ['rain drains better', 'curve resistance already taxes the vehicle, so effective grade can be relaxed', 'braking needs it', 'IRC standardises gradients'], answer: 1, explain: 'Both resistances draw on tractive effort; compensating by (30+R)/R % keeps the total demand within design.' },
          { q: 'A rigid pavement differs from a flexible one chiefly in that it…', options: ['is thinner', 'distributes load by slab flexure with joints as the design focus', 'uses CBR directly', 'cannot carry heavy loads'], answer: 1, explain: 'The concrete slab bridges and spreads load; temperature curling and corner stresses make joints and dowels the design problem.' },
        ] },
      {
        kind: 'para',
        text: 'Transport engineering continues from here into traffic studies and intersections, but the geometric core is complete. The surveying lesson supplies the field methods that stake these curves out on the ground; the concrete lesson supplies the slab material that rigid pavements are cast from; and the water-management habit of the hydrology lesson is the same one that keeps camber, shoulders and side drains moving rainwater off the pavement.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic mechanics (friction, circular motion) from the physics lessons. Follow with the surveying-geomatics lesson for curve setting-out and the concrete-structures lesson for rigid pavement materials. Standard readings: Khanna & Justo\'s Highway Engineering, IRC codes (IRC 73, IRC 37, IRC 58), and the GATE CE transportation syllabus.',
      },
    ],
  },
  {
    id: 'civ-surveying-geomatics',
    title: 'Surveying and Geomatics: Traverses, Leveling, Curves, GIS and GNSS',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Geomatics Engineering',
    tier: 'intermediate',
    concepts: [
      'Survey principles: whole to part, control and detail',
      'Bearings, theodolites and total stations',
      'Leveling: reduced levels, HI and rise-fall methods',
      'Traverse computation: latitudes, departures, Bowditch rule',
      'Simple, transition and vertical curves',
      'Geographic Information Systems: raster and vector data',
      'Global Navigation Satellite Systems and DGPS',
    ],
    words: 1890,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Every structure begins as coordinates. Surveying is the discipline that produces them — measuring angles and distances on a curved earth, adjusting their small contradictions honestly, and fixing positions precise enough that a bridge\'s two halves meet mid-span. Geomatics is its modern extension: satellite positioning, digital mapping and geographic information systems that store not just points but the attributes and topologies a whole city\'s engineering runs on. This lesson covers the classical core — bearings and leveling, traverse computation, curve setting-out — and the modern layer, from raster-versus-vector data models to the satellite geometry behind GNSS accuracy. It is the most error-analysis-driven block of the civil syllabus: most exam questions ask not where a point is, but how much you should distrust where you think it is.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Surveying questions in GATE CE are short and mechanical — a Bowditch correction, a rise-fall table check, a tangent length — and the GIS/GNSS block is almost pure vocabulary. Together they are among the cheapest marks in the paper, and the concepts (error of closure, least squares intuition) reappear in every measurement discipline.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Whole to part', def: 'The governing principle of survey practice: establish a framework of high-precision control points first, then fill in detail within it — so errors stay local and detected, never accumulated across a project.' },
          { term: 'Reduced level (RL)', def: 'A point\'s height above datum (mean sea level). Leveling computes RLs either by the height-of-instrument method or the rise-and-fall method; the rise-fall table\'s two arithmetic checks (ΣBS − ΣFS = Σrise − Σfall = last RL − first RL) make it the exam\'s favourite.' },
          { term: 'Latitude and departure', def: 'The projection of a traverse line onto the north-south axis (L cos θ) and the east-west axis (L sin θ). In a closed traverse both must sum to zero; their residuals define the error of closure that adjustment distributes.' },
          { term: 'Bowditch rule', def: 'The compass-rule adjustment for a closed traverse: correct each latitude or departure in proportion to that line\'s share of the total perimeter — the standard correction when angles and distances are equally trusted.' },
          { term: 'Vector and raster', def: 'The two GIS data models: vector stores discrete geometry (points, lines, polygons) with attribute tables and topology; raster tiles space into grid cells — imagery and continuous surfaces. Overlays, buffers and network analyses combine them.' },
          { term: 'DGPS', def: 'Differential GNSS: a fixed base station at a known position broadcasts corrections for the satellite errors it observes, cutting metre-level positioning to centimetres — and real-time kinematic (RTK) does it instantly for stakeout and machine control.' },
        ],
      },
      {
        kind: 'para',
        text: 'Classical surveying rests on two ideas: control and redundancy. The framework is laid by triangulation or traverse — a chain of stations whose angles (by theodolite or total station) and distances (by EDM) fix relative position — and all detail survey hangs within it. Compass work introduces the bearing system: whole-circle bearings from north, reduced to quadrantal, corrected for magnetic declination and for local attraction (the magnetism of nearby iron that corrupts individual stations — detected when fore and back bearings disagree by more than the declination). Leveling then supplies the vertical dimension: the level\'s horizontal line of sight reads staffs on bench marks and new points, and reduced levels accumulate by height of instrument or rise and fall. Curvature and refraction bend the geometry slightly — a combined correction of 0.0673 d² metres for distance d in kilometres — negligible across a building site, decisive across a reservoir. Reciprocal leveling across a river cancels the collimation error by observing from both banks; tacheometry (the stadia hairs, d = ks + c) captures distances and elevations without taping, and the modern total station fuses theodolite, EDM and computer into an instrument that reports coordinates directly.',
      },
      {
        kind: 'para',
        text: 'The traverse is the exam\'s computational centrepiece. A closed traverse returns to its start, and its mathematics is a bookkeeping of contradiction: each line\'s length and bearing project into a latitude (L cos θ) and a departure (L sin θ), and since the figure closes, both must sum to zero. They never quite do — angular misclosure is first distributed among the measured angles, then the linear error of closure (√(ΣL² + ΣD²)) is spread over the lines by the Bowditch rule in proportion to length, or by the transit rule when angles are the trusted observations. Corrected coordinates follow, and area comes from the coordinate method — the cross-multiplication sum halved — or the DMD method. Every step is checkable, which is precisely why examiners love it: a rise-fall table that fails its two consistency checks or a traverse whose closure does not match the stated adjustments is a wrong answer you can detect before submitting.',
      },
      {
        kind: 'formula',
        name: 'Circular curve geometry',
        latex: 'T = R\\tan\\!\\left(\\tfrac{\\Delta}{2}\\right),\\quad L = R\\,\\Delta_{\\text{rad}}',
        meaning: 'Tangent length T and curve length L of a simple circular curve of radius R and deflection angle Δ — the numbers the setting-out process needs first, followed by Rankine\'s deflection angles pegged from the tangent point.',
      },
      {
        kind: 'para',
        text: 'Curves carry the alignment\'s geometry onto the ground. A simple circular curve joins two tangents at radius R: tangent length R tan(Δ/2) from the intersection point, curve length RΔ in radians, chainages of the tangent points from the through-chainage — and setting-out by Rankine\'s deflection-angle method swings the theodolite by cumulated deflections at chord intervals (the two-theodolite method as the obstruction fallback). The transition curve — a spiral whose radius falls from infinity to R — is inserted at each end so centripetal acceleration grows with the vehicle rather than jumping; its length follows from rate of change of centrifugal acceleration or superelevation rotation, and its shift s = L²/24R tells the circular arc how far to move inward. Vertical curves are parabolic, not circular: crest curves lengthened for sight distance, valley curves for headlight sight distance and passenger comfort, both from the same parabola-through-gradient-change algebra. Together with the highway lesson\'s superelevation design, this is the complete toolkit for turning a paper alignment into pegs in the ground.',
      },
      {
        kind: 'para',
        text: 'Geomatics re-imagines all of this digitally. A Geographic Information System stores the world in two complementary models — vector geometry (points, lines, polygons) carrying attribute tables and topology, and rasters gridding space into cells for imagery and continuous surfaces — and analyses them by overlay (combine land use with soil and slope), buffering (distances from a river, service areas of a hospital), network analysis, and digital elevation models whose contours, slopes and viewsheds automate what contour surveys did by hand. Projections matter because the earth is curved and screens are flat: UTM zones and datum choice are the coordinate-system plumbing beneath every map. GNSS then makes positions flow from space: a constellation (GPS\'s 24-plus, and India\'s regional NavIC of seven) broadcasts precisely timed signals; a receiver\'s pseudo-ranges to four or more satellites solve simultaneously for position and clock error. The error budget — ionosphere and troposphere delays, ephemeris and clock errors, multipath reflections, and the satellite-geometry dilution GDOP — limits single receivers to metres; differential corrections from a base station over known coordinates cut it to centimetres, and RTK delivers them in real time. Land surveying, machine-guided earthwork, cadastral mapping and disaster response now all run on this chain: satellites, corrections, GIS — the survey principles of 1800 executed by the technology of 2020.',
      },
      {
        kind: 'para',
        text: 'Error theory is what makes all measurement defensible, and it deserves its own statement. Gross errors are blunders — a staff read on the wrong mark — and are eliminated by checks, never adjusted; systematic errors follow a law (curvature and refraction, tape temperature, collimation) and are corrected by model; random errors are the irreducible residue, equally likely either side of truth, and they obey the normal distribution that least-squares adjustment exploits — weighting observations by the inverse of their variance and distributing residuals by the most-probable values. Precision is not accuracy: a survey can be consistently precise and still sit on a wrong datum, which is why independent checks (fore and back bearings, rise-fall sums, closure of figures) are the discipline\'s real method. Remote sensing completes the geomatics picture from above: satellites record reflected or emitted radiance in spectral bands, resolution arriving in four guises — spatial (pixel size), spectral (band width), radiometric (bit depth), temporal (revisit) — and the data feed land-use classification, crop and water assessment, and change detection, with indices like NDVI (near-infrared minus red, over their sum) turning raw radiance into vegetation vigour. Photogrammetry from aerial or drone imagery adds controllable scale and three-dimensional measurement through stereopairs. Between GNSS positioning, remote-sensing rasters and GIS vector analysis, the modern survey office assembles the map from three independent streams — and reconciles them with the same error-theory habits the theodolite demanded.',
      },
      {
        kind: 'example',
        title: 'Checking a three-line traverse before adjusting it',
        steps: [
          'Lines AB (200 m, 30°), BC (150 m, 110°), CA (250 m, 250°): latitudes 173.2 − 51.3 − 85.5 ≈ 36.4... compute carefully: cos 30° = 0.866 → 173.2; cos 110° = −0.342 → −51.3; cos 250° = −0.342 → −85.5; sum ≈ 36.4 — not zero.',
          'Departures: 100.0, 141.0 (sin 110°), −234.9 (sin 250° = −0.940) → sum ≈ 6.1. Both sums should be zero for a closed figure — the misclosure (e) = √(36.4² + 6.1²) ≈ 36.9 m on 600 m of traverse is huge — a signal that the data (not the adjustment) is at fault.',
          'Lesson: adjustment rules (Bowditch) distribute small residuals; a closure this large indicates an angular or blunder error — find it first. The habit of computing e before adjusting is the examinable one.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: '"Work from whole to part" exists to…', options: ['finish faster', 'prevent accumulation of errors across the survey by fixing control first', 'reduce instrument cost', 'satisfy legal rules'], answer: 1, explain: 'High-precision control frameworks localise errors; working part-to-whole lets them accumulate unbounded.' },
          { q: 'In a closed traverse, latitudes and departures must sum to…', options: ['the perimeter', 'zero', 'the area', '360°'], answer: 1, explain: 'Closure means the figure returns to its start — the north-south and east-west projections must each cancel.' },
          { q: 'The Bowditch (compass) rule distributes linear misclosure in proportion to each line\'s…', options: ['bearing', 'length', 'latitude only', 'order of measurement'], answer: 1, explain: 'Corrections scale with length — the assumption that all measurements are comparably reliable.' },
          { q: 'A GIS overlay analysis typically combines…', options: ['two attribute tables only', 'spatial layers such as land use, soil and slope to find intersections', 'satellite orbits', 'contour intervals'], answer: 1, explain: 'Overlay is the core vector operation: intersect layers to answer multi-criteria questions.' },
          { q: 'DGPS improves on standalone GNSS by…', options: ['adding satellites', 'broadcasting corrections from a base station at a known position', 'using radar', 'shortening wavelengths'], answer: 1, explain: 'The base station observes the same satellite errors from a surveyed point and transmits corrections — metres become centimetres.' },
        ] },
      {
        kind: 'para',
        text: 'Position, height and the maps that hold them are the substrate every other civil lesson stands on: the highway lesson\'s curves are staked out by Rankine\'s method here; the concrete and water lessons\' structures are located by traverse and GNSS; and the GIS layer is where catchments, command areas and land parcels — the domains of the hydrology and water-supply lessons — live as analysable data. Error analysis, this block\'s deepest habit, is the same honesty the flood-frequency and limit-state lessons apply in their own currencies.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: trigonometry and the basic mechanics of angles from the mathematics lessons. Follow with the highway lesson for the curves these methods stake out, and the hydrology lesson for the catchments GIS now maps. Standard readings: B.C. Punmia\'s Surveying volumes, Kang-Tsung Chang\'s Introduction to Geographic Information Systems, and the GATE CE geomatics syllabus.',
      },
    ],
  },
]
