/**
 * Knowledge Universe — Water & Environmental Engineering — Chapter 03: Environmental Engineering
 * 1 lesson · ~1,718 words
 * field: Civil Engineering
 * legacy sources: x19-civil-core.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Environmental Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 civ-water-wastewater-municipal — Environmental Engineering: Water Supply, Wastewater and Municipal Solid Wastes
 */
import type { KnowledgeTopic } from '../../types'

export const waterEnvironmentalEngineeringCh03: KnowledgeTopic[] = [
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
]
