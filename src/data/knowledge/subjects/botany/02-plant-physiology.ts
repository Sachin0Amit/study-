/**
 * Knowledge Universe — Botany — Chapter 02: Plant Physiology
 * 6 lessons · ~8,726 words (includes the 2026-11-01 salvage increment)
 * field: Botany
 * legacy sources: life-sciences.ts, x65-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Plant Biochemistry, Beyond Photosynthesis]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bio-photosynthesis — Photosynthesis: Light and Dark Reactions
 *   02.2 bio-plant-physiology-transport — Plant Physiology: How Plants Actually Work
 *   02.3 bio-plant-xylem-hydraulics — The Xylem Pipeline: Soil Water, Root Pressure and Cavitation
 *   02.4 bio-plant-phloem-loading-partitioning — Phloem Mechanics: Loading, Pressure Flow and Allocation
 *   02.5 bio-plant-stomatal-blue-light — Stomata: Blue-Light Valves and the Water–Carbon Bargain
 *   02.6 bio-plant-water-ledger — The Water Ledger: Water-Potential Arithmetic from Soil to Air (~1,774w, salvaged)
 */
import type { KnowledgeTopic } from '../../types'

export const botanyCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-photosynthesis',
    title: 'Photosynthesis: Light and Dark Reactions',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Plant Biochemistry',
    tier: 'core',
    concepts: [
      'The overall equation',
      'Light reactions in the thylakoid',
      'Photosystems II and I',
      'Photophosphorylation by chemiosmosis',
      'The Calvin cycle',
      'RuBisCO and photorespiration',
      'C4 and CAM adaptations',
    ],
    words: 1028,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Photosynthesis converts light energy into chemical energy and feeds nearly every food web on Earth. Plant Biochemistry splits the process into two stages: the light reactions in the thylakoid membranes, which make ATP and NADPH while splitting water to release oxygen, and the Calvin cycle in the stroma, which spends that energy fixing carbon dioxide into sugar. This topic follows electrons through both stages and meets the evolutionary patches plants use to handle a clumsy enzyme.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every breath you take and nearly every calorie you eat traces back to this reaction, and land plants draw down well over one hundred gigatonnes of carbon each year. Agriculture, biofuels, and climate models all stand on its biochemistry.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The summary equation — six carbon dioxide plus six water, powered by light, yielding one glucose and six oxygen — hides a crucial detail: water is the electron donor, so the released oxygen comes from water, not from carbon dioxide. Isotope-labeling experiments settled this surprising fact.',
      },
      {
        kind: 'para',
        text: 'Chlorophyll embedded in the thylakoid membranes absorbs red and blue light and reflects green, which is why leaves look the color they do. Absorbed photons excite electrons that enter a transport chain threading two photosystems.',
      },
      {
        kind: 'para',
        text: 'Photosystem II first strips electrons from water — releasing oxygen and protons into the lumen — and boosts them partway; after the cytochrome complex, photosystem I re-energizes them and passes them to NADP⁺ to form NADPH. Two light hits per electron make the energetics work.',
      },
      {
        kind: 'para',
        text: 'As electrons flow, protons pile up inside the thylakoid lumen, and the gradient drives ATP synthase — chemiosmosis, the same coupling mitochondria use. Cyclic electron flow around photosystem I manufactures extra ATP whenever the Calvin cycle runs short.',
      },
      {
        kind: 'para',
        text: 'In the stroma, the enzyme RuBisCO attaches carbon dioxide to the five-carbon sugar RuBP; the six-carbon intermediate splits into two three-carbon molecules that ATP and NADPH reduce into G3P. One G3P exits per three turns of the cycle, while the rest regenerates RuBP to keep it running.',
      },
      {
        kind: 'para',
        text: 'RuBisCO sometimes grabs oxygen instead of carbon dioxide, and the salvage pathway that follows, photorespiration, burns energy and releases carbon dioxide. On hot, dry days stomata close, internal carbon dioxide falls, and this wasteful reaction intensifies.',
      },
      {
        kind: 'para',
        text: 'Two independent evolutionary fixes exist: C4 plants such as maize first fix carbon into four-carbon acids in mesophyll cells and ship them inward to concentrate carbon dioxide at RuBisCO — the anatomy that makes this possible is Kranz anatomy, a tight wreath of bundle-sheath cells around each vein where the Calvin cycle then runs — while CAM plants such as cacti open stomata at night and store acids until daylight returns.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Overall photosynthesis',
        latex: '6\\,CO_2 + 6\\,H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6\\,O_2',
        meaning: 'Six carbon dioxide and six water molecules become one glucose and six oxygen, powered by absorbed light.',
      },
      {
        kind: 'formula',
        name: 'Energy cost per glucose',
        latex: '\\text{Calvin cycle per glucose: } 18\\,ATP + 12\\,NADPH',
        meaning: 'Building one glucose costs the light reactions 18 ATP and 12 NADPH — the bill chemiosmosis must pay.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: follow one pair of electrons from its origin to NADPH, naming each stage it passes through.',
          'Recall the governing idea: the Z-scheme — water donates electrons, light re-energizes them twice, and NADP⁺ finally receives them.',
          'Apply: water is split at photosystem II with oxygen released; light absorbed at 680 nm boosts the pair through plastoquinone and the cytochrome complex, pumping protons; light absorbed at 700 nm in photosystem I re-energizes them for ferredoxin and NADP⁺ reductase.',
          'State the result: the pair ends in NADPH, having driven proton-gradient ATP synthesis along the way — light energy converted into the chemical currency the Calvin cycle spends.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Crop yields track photosynthetic efficiency, and transferring C4 machinery into rice is a long-running engineering goal.',
          'Satellite measurements of plant fluorescence feed global carbon-cycle and climate models.',
          'Algal biorefineries tune light spectra and carbon dioxide supply to raise fuel and feed output.',
          'Greenhouse growers enrich carbon dioxide and adjust lighting to push the Calvin cycle harder.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most stubborn error is thinking plants photosynthesize instead of respiring — plants respire day and night; photosynthesis merely feeds it. Another is placing the Calvin cycle in darkness: the reactions are light-independent, not nocturnal, and they stop without the ATP and NADPH light provides.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Thylakoid', def: 'Membrane sac inside chloroplasts housing the light reactions.' },
          { term: 'Stroma', def: 'The fluid surrounding thylakoids where the Calvin cycle runs.' },
          { term: 'Photosystem', def: 'A light-harvesting complex whose reaction center ejects energized electrons.' },
          { term: 'Chemiosmosis', def: 'ATP synthesis driven by a proton gradient across a membrane.' },
          { term: 'RuBisCO', def: 'The carboxylase fixing CO₂ onto RuBP — the most abundant enzyme on Earth.' },
          { term: 'Photorespiration', def: 'The wasteful oxygen-fixing side reaction of RuBisCO that releases CO₂.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The oxygen released during photosynthesis comes from:',
            options: ['Carbon dioxide', 'Water', 'Glucose', 'ATP'],
            answer: 1,
            explain: 'Photosystem II splits water to obtain electrons, and the oxygen atoms of water are what leave as O₂.',
          },
          {
            q: 'The Calvin cycle takes place in the:',
            options: ['Thylakoid lumen', 'Stroma', 'Mitochondrial matrix', 'Nucleus'],
            answer: 1,
            explain: 'Carbon fixation happens in the fluid stroma surrounding the thylakoids, using ATP and NADPH from the light reactions.',
          },
          {
            q: 'ATP and NADPH produced in the light reactions are used to:',
            options: ['Split water', 'Reduce three-carbon intermediates to sugar in the Calvin cycle', 'Absorb photons', 'Open stomata'],
            answer: 1,
            explain: 'They supply the energy and reducing power that turn fixed carbon into G3P, the building block of glucose.',
          },
          {
            q: 'C4 and CAM plants evolved their special anatomy and timing mainly to reduce:',
            options: ['Water uptake', 'Photorespiration by raising CO₂ concentration at RuBisCO', 'Chlorophyll synthesis', 'NADPH export from the chloroplast'],
            answer: 1,
            explain: 'Both strategies concentrate carbon dioxide (in space for C4, in time for CAM) so RuBisCO grabs CO₂ rather than oxygen.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: basic cell structure and cellular respiration at core level. Next come plant anatomy and transport, ecosystem energy flow, and — for the chemistry-minded — the photophysics of light absorption. Pair with the respiration topic to see how the two pathways mirror each other.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Light reactions (thylakoids): split water, release O₂, produce ATP and NADPH.',
          'Calvin cycle (stroma): RuBisCO fixes CO₂, and ATP plus NADPH build sugar.',
          'The released oxygen comes from water — proven by isotope labeling.',
          'Proton gradients power ATP by chemiosmosis, exactly as in mitochondria.',
          'C4 and CAM are two independent fixes for the oxygen mistake of RuBisCO.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: "bio-plant-physiology-transport",
    title: "Plant Physiology: How Plants Actually Work",
    domain: "Life Sciences",
    field: "Botany",
    branch: "Beyond Photosynthesis",
    tier: "intermediate",
    concepts: [
      "Xylem: the transpiration stream",
      "Cohesion-tension without a pump",
      "Phloem: pressure-flow from source to sink",
      "Five hormones, one vocabulary",
      "Tropisms: light, gravity, touch",
      "Guard cells and the stomatal bargain",
      "Photoperiodism and florigen",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Photosynthesis gets the glory, but a plant's real engineering problem is plumbing. A large oak moves hundreds of liters of water a day from roots to leaves with no pump, no heart, and no moving parts, while sugar made in sunlit leaves must reach roots, fruits, and shoots that never see light. Plant physiology explains how: evaporation pulls water up dead tubes, pressure pushes sap through living ones, hormones direct growth and ripening, and guard cells manage the trade of carbon dioxide in for water out. Photosynthesis is covered elsewhere in Botany; this is everything else that keeps a plant alive.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Agriculture takes roughly 70 percent of humanity's fresh water, and nearly all of it passes through stomata on its way through crops. Understanding the plumbing is understanding why drought is the oldest enemy of farming.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Vascular plants run two pipelines. Xylem is the up-line: rows of dead, hollow cells with stiffened walls forming continuous tubes from root to leaf, carrying water and dissolved minerals in one direction only. Phloem is the flexible line: living sieve tubes carrying sugar-rich sap whichever way demand requires, from leaf sources to root, fruit, or bud sinks.",
      },
      {
        kind: "para",
        text: "The up-line runs on cohesion-tension. Water evaporating from the walls of leaf cells leaves behind curved menisci whose surface tension pulls on the water column beneath; because hydrogen bonds make water cohesive, that pull transmits whole-length down the tree like tension on a rope, while adhesion to the walls steadies the column. The plant spends no energy — the sun does the pumping. The valves are the stomata: guard cells swell open when potassium ions stream in and water follows, and close when the drought hormone abscisic acid tells them to let the ions out.",
      },
      {
        kind: "para",
        text: "The sugar line runs on pressure. At a source, such as a mature leaf, companion cells load sucrose into sieve tubes; the concentrated sap draws water in from surrounding xylem by osmosis, raising the pressure inside. At a sink — a growing root or a filling fruit — sucrose is unloaded and water exits, lowering the pressure there. Sap flows from high to low pressure, source to sink. The proof is the aphid: a punctured stylet left in a sieve tube exudes sap for hours.",
      },
      {
        kind: "para",
        text: "Growth and timing are coordinated by five classic hormones, effective in tiny doses and always in combination. Auxin, made at shoot tips, stretches cells, suppresses the buds below it — apical dominance — and piles up on a stem's shaded side, bending it back toward light. Gibberellins drive stem elongation and seed germination. Cytokinins promote cell division and keep leaves young. Ethylene, a gas, ripens fruit — hence one bad apple spoiling the bunch. Abscisic acid closes stomata and enforces seed dormancy under stress.",
      },
      {
        kind: "para",
        text: "Plants also orient themselves. Phototropism, the bend toward light, begins with auxin shifting to the shaded flank; the Darwins showed in 1880 that grass seedlings track light by their tips alone; foil over the tip blinds the rest. Gravitropism uses statoliths, dense starch grains that sink within cells, telling roots to grow down and shoots up. Touch has its own response: vines curl around supports by differential growth, while the mimosa's fast fold is a turgor snap, movement without growth.",
      },
      {
        kind: "para",
        text: "Finally, the calendar. Flowering is timed by photoperiodism, and despite the labels, plants measure night, not day: a short-day plant flowers only when darkness stays long and unbroken, and a brief red-light flash at midnight can cancel it. The light sensor is phytochrome, a pigment that flips between forms in red and far-red light. Some plants also require vernalization, weeks of winter chill, before they will flower at all. The flowering signal, long hunted as florigen, is the FT protein, made in leaves and shipped through the phloem to shoot tips.",
      },
      {
        kind: "formula",
        name: "Water potential",
        latex: "\\Psi = \\Psi_s + \\Psi_p",
        meaning: "Total water potential combines a solute term that lowers it and a pressure term that raises it; water always flows toward the more negative total. This bookkeeping rules root uptake, wilting, and phloem loading alike.",
      },
      {
        kind: "formula",
        name: "Transpiration ratio",
        latex: "\\text{WUE} = \\frac{\\text{CO}_2\\ \\text{fixed}}{\\text{H}_2\\text{O}\\ \\text{lost}}",
        meaning: "A typical C3 crop loses 400 to 600 water molecules for every carbon atom fixed — the price of open stomata on a warm day.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: whether water enters a root cell from soil at a total water potential of -0.3 megapascals, when the cell's solute potential is -0.8 and its turgor pressure is +0.2 megapascals.",
          "Recall the rule: total potential is the sum of solute and pressure terms, and water flows from the less negative potential to the more negative one.",
          "Apply: the root cell totals -0.8 + 0.2 = -0.6 megapascals, compared with the soil at -0.3.",
          "Compare: soil (-0.3) is higher than root (-0.6), so water flows inward.",
          "State the result: if the soil dried to -0.7 megapascals the gradient reverses and the root loses water — wilting begins, which abscisic acid fights by closing stomata. The same arithmetic runs the phloem: sucrose loading pulls water in until pressure builds and pushes sap to the sink.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Rooting powders are auxin; in tissue culture, the ratio of cytokinin to auxin decides whether a culture makes shoots or roots.",
          "Controlled-atmosphere storage plus ethylene blockers keeps apples crisp for most of a year.",
          "Green Revolution wheat carries dwarfing genes that blunt the gibberellin response — shorter stems, less lodging, heavier grain.",
          "The herbicide 2,4-D is an auxin mimic that drives broadleaf weeds into lethal, warped overgrowth while grasses tolerate it.",
          "Drought breeding selects deeper roots and better water-use efficiency, trading a little carbon for a lot less water lost.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Plants do not pump their xylem — evaporation pulls, sunlight pays, and a cut stem still draws water. Fertilizer is not plant food: plants bake their own sugars from light and air, and minerals are nutrients, not fuel. Long-day and short-day are misnomers, because the clock times the uninterrupted dark. And stomata are not simple losses: they trade carbon for water, and desert plants keep night hours at the counter.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Xylem", def: "Dead-celled tubes carrying water and minerals upward from roots to leaves." },
          { term: "Phloem", def: "Living sieve tubes carrying sugars from sources to sinks." },
          { term: "Cohesion-tension theory", def: "Evaporation at leaves pulls a cohesive water column up the xylem." },
          { term: "Pressure-flow hypothesis", def: "Sugar loading at sources raises osmotic pressure, pushing sap toward sinks." },
          { term: "Auxin", def: "Tip-made hormone that elongates cells, bends stems toward light, and suppresses side buds." },
          { term: "Guard cells", def: "Paired cells flanking a stoma, swelling open when ions and water enter." },
          { term: "Photoperiodism", def: "Timing of flowering by night length, sensed through phytochrome." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "What mainly lifts water to the top of a tall tree?",
            options: ["root pressure pumping upward", "evaporation pulling a cohesive column from the leaves", "the heart-like xylem vessels", "capillary action alone"],
            answer: 1,
            explain: "Transpiration's negative pressure, transmitted down a hydrogen-bonded rope of water, does the work.",
          },
          {
            q: "Phloem sap generally moves:",
            options: ["only upward", "from sugar sources toward sugar sinks", "only downward", "wherever wind pushes it"],
            answer: 1,
            explain: "Loading at sources builds pressure; unloading at sinks relieves it, so sap flows source to sink.",
          },
          {
            q: "Cutting off a shoot tip releases side buds from dormancy because it removes:",
            options: ["ethylene gas", "cytokinin", "auxin and its apical dominance", "gibberellin"],
            answer: 2,
            explain: "Tip-made auxin suppresses lateral buds; remove the tip and the sides grow out.",
          },
          {
            q: "A so-called short-day plant actually flowers in response to:",
            options: ["short nights", "long, uninterrupted nights", "short stems", "cold winters"],
            answer: 1,
            explain: "The clock measures darkness; a midnight flash of red light can break the night and block flowering.",
          },
        ],
      },
    ],
  },
  {
    id: 'bio-plant-xylem-hydraulics',
    title: 'The Xylem Pipeline: Soil Water, Root Pressure and Cavitation',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Beyond Photosynthesis',
    tier: 'core' as const,
    concepts: [
      'Soil water: three potential components and the capillarity equation',
      'The conduits: tracheids, vessel elements and pit pairs',
      'Root pressure and guttation: the plant as a night-time pump',
      'The metastable column: why water can hang under tension',
      'Cavitation and embolism: snapping the water rope',
      'Living with breakage: defense, refilling and vulnerability curves',
    ],
    words: 1691,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'Plant Physiology introduced the two pipelines and the pull of evaporation; this lesson goes to the physics underneath. Water moving from soil to leaf is a chain of potential drops, and each link — soil particle, root membrane, xylem conduit, cell wall — adds resistance. The chain only works because it is continuous: a single air-filled link stops the flow. So the story of the xylem is also the story of its failure mode, cavitation, and of the layered defenses plants have evolved against it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Hydraulic failure is how drought kills plants. Every drought-mortality paper, every irrigation schedule and every forest-dieback model runs on this chapter of plant physiology: how much tension the water column can hold, when bubbles form, and which species snap first. Irrigators use the same numbers from the other side — a soil allowed to dry past its available-water window forces the plant to pull harder until columns break.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Soil water has its own water potential, dissected into three components: osmotic, pressure and gravitational. The osmotic term is usually negligible because soil solution is dilute — a typical value is about −0.02 megapascals, though saline soils can push it to −0.2 or lower. The pressure term is where the action is. In wet soil it sits near zero; as soil dries, water recedes into the shrinking channels between particles and curved air–water menisci form, each curvature generating a negative pressure given by the capillarity equation Ψp = −2T/r, where T is the surface tension of water (7.28 × 10⁻⁸ MPa·m) and r the radius of the air–water interface. Small pores, tight curvatures, strongly negative pressures: a clay soil can hold water at tensions a sand cannot even generate, which is why clay stays wet longer but resists extraction, and sand drains fast and withholds little.',
      },
      {
        kind: 'para',
        text: 'The conducting cells come in two architectures. Tracheids — elongated, spindle-shaped dead cells with lignified secondary walls — are the universal design, present in angiosperms, gymnosperms and ferns alike. Vessel elements, found in angiosperms, the small gymnosperm order Gnetales and a few ferns, are wider and stack end-on-end into open pipes. Both mature by dying: the cytoplasm is lost and what remains is a hollow, rigid tube. The safety valve is in the walls. Pits — microscopic regions lacking the secondary wall — sit opposite one another in adjacent cells, forming pit pairs whose thin pit membrane is the low-resistance path water takes between conduits. In conifer tracheids the membrane carries a central thickening, the torus, that can seal over the pore like a valve when pressure differences rise. This plumbing detail becomes a life-or-death feature later: those same membrane pores are what stop air from spreading between conduits.',
      },
      {
        kind: 'para',
        text: 'Roots can push. When soil water is plentiful and transpiration is slow — a humid night — ion uptake keeps loading the xylem while water follows osmotically, and the multicellular root acts as an osmotic membrane building positive hydrostatic pressure in the xylem. The pressure is modest, typically below 0.1 megapascals, and disappears as soon as transpiration accelerates; it is far too weak to lift water up a tall tree. But it explains two vivid phenomena. Guttation is the exudation of xylem sap through hydathodes, specialized pores at leaf margins associated with vein endings — the "dewdrops" on grass-leaf tips in the morning are guttation, not dew, and they appear when transpiration is suppressed and humidity high. Aquaporins, the membrane water channels, fine-tune the same system by changing the permeability of root membranes, which is also why flooding can wilt a plant: flooded roots lose their ion-pumping capacity and the internal osmotic pump fails.',
      },
      {
        kind: 'para',
        text: 'The main line runs on tension, and tension is physically precarious. Water under negative pressure is in a metastable state — liquid despite a lower-energy vapor phase available — held there by the enormous cohesion of hydrogen-bonded water and by xylem structure that minimizes nucleation sites. Estimates for a 100-metre tree put the required gradient near 2 megapascals, so the water at the top sits far below vacuum pressure. When a gas bubble grows past a critical size — surface tension can no longer hold it in — it expands catastrophically to fill the conduit: cavitation, with the gas-filled void called an embolism. The column snaps like a rope under load, and the event is audible: rapid bubble expansion launches pressure shock waves that detecting equipment registers as clicks. Drought is not the only trigger — freezing excludes dissolved gases into bubbles as ice forms, so winter is a cavitation season too.',
      },
      {
        kind: 'para',
        text: 'Plants live with breakage because the plumbing is compartmentalized. An expanding gas bubble cannot pass the submicroscopic pores of pit membranes, so embolism is quarantined inside one conduit; water detours through neighboring water-filled conduits, paying extra resistance but keeping the column alive. Plants actively repair as well: positive root pressures shrink bubbles and redissolve their gases, and there is evidence that some embolisms refill even while the xylem remains under tension — the mechanism is still an open research question. Annual secondary growth builds fresh xylem every year, replacing lost capacity by construction. Engineers measured the same physics in miniature: a microfluidic "synthetic tree" device sustained stable flow at pressures below −7 megapascals, confirming that metastable water can be made to work — the plant just has to keep the bubbles out.',
      },
      {
        kind: 'para',
        text: 'Species differ enormously in how much tension their columns tolerate, and vulnerability curves quantify it: plot hydraulic conductivity against imposed tension and watch conductivity collapse as embolisms accumulate. A riparian cottonwood loses conductivity at tensions where a Wyoming sagebrush is still flowing — the desert shrub built a safer, costlier system, the cottonwood a cheaper, riskier one. The anatomical correlates are visible: species facing high tensions build dense wood, the extra wall thickness and lignification being the mechanical price of resisting collapse and nucleation. The remaining route of loss is small — the waxy cuticle leaks only about 5% of leaf water loss, stomata carry essentially all of it — but the leaves themselves are a bottleneck, contributing on average about 30% of the whole plant\u2019s hydraulic resistance, and their resistance climbs as water potential falls or conduits embolize.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Reading a Soil Drying Curve',
        steps: [
          'A greenhouse potting mix holds water in pores of radius about 10 micrometres (10⁻⁵ m). Apply the capillarity equation Ψp = −2T/r with T = 7.28 × 10⁻⁸ MPa·m.',
          'Ψp ≈ −2 × (7.28 × 10⁻⁸) / (10⁻⁵) ≈ −0.0146 MPa — essentially free water; the plant extracts it easily. This is why a freshly watered pot drains and flows.',
          'The same mix dried so that the remaining menisci sit in pores of radius 0.1 micrometre (10⁻⁷ m): Ψp ≈ −2 × (7.28 × 10⁻⁸)/(10⁻⁷) ≈ −1.46 MPa.',
          'Compare with a root cell totalling about −0.6 MPa (solute −0.8, turgor +0.2): soil now below root water potential means the gradient has reversed — extraction stops, wilting begins, and the plant\u2019s only remaining lever is closing stomata.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Irrigation scheduling: tensiometers and soil-moisture probes track the same potential the root feels, stopping irrigation long before columns break.',
        'Drought-tolerant breeding: vulnerability curves are now a breeding metric — varieties are screened for the tension at which 50% of conductivity is lost.',
        'Forestry and climate models: dieback predictions combine species vulnerability curves with projected vapor-pressure deficits.',
        'Horticultural night management: guttation droplets are a diagnostic of overwatering and low transpiration — greenhouse scouts read morning droplets as a watering signal.',
        'Wood science: dense-wood species’ resistance to collapse is why high-tension timbers earn their strength grades.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, crediting root pressure with tree-top water: root pressure is a night-time, wet-soil phenomenon under 0.1 MPa, hopeless against the ~2 MPa a tall tree needs — evaporation pays the bill. Second, calling morning droplets dew: dew condenses on the leaf surface; guttation is exuded from hydathodes at the margins. Third, treating embolism as instantly fatal: pit membranes quarantine bubbles conduit by conduit, and detours plus refilling plus new annual xylem keep the plant alive — the failure is cumulative, which is exactly what vulnerability curves measure. Fourth, forgetting that freezing cavitates: winter embolism, not just drought, breaks columns.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Soil water potential', def: 'The sum of osmotic, pressure and gravitational components governing water\u2019s movement into roots.' },
        { term: 'Pit pair', def: 'Opposing secondary-wall gaps in adjacent conduits whose thin membranes pass water but hold back expanding air bubbles.' },
        { term: 'Root pressure', def: 'Positive xylem pressure built osmotically by ion uptake under wet soil and low transpiration; typically below 0.1 MPa.' },
        { term: 'Guttation', def: 'Exudation of xylem sap through hydathodes at leaf margins when root pressure meets a closed stomatal night.' },
        { term: 'Cavitation and embolism', def: 'Critical expansion of a gas bubble under xylem tension, snapping the water column and filling the conduit with vapor.' },
        { term: 'Vulnerability curve', def: 'A plot of hydraulic conductivity against xylem tension quantifying a species\u2019 embolism risk.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'As soil dries, the pressure potential falls because…',
          options: ['solutes concentrate at the root surface', 'water recedes into smaller pores, tightening air–water menisci', 'gravity drains the soil column', 'root cells stop pumping ions'],
          answer: 1,
          explain: 'Capillarity Ψp = −2T/r: shrinking pore radius means tighter meniscus curvature and more negative pressure — the physics behind soil water retention.',
        },
        {
          q: 'The "dewdrops" on grass tips at dawn are actually…',
          options: ['condensed atmospheric dew', 'guttation sap exuded through hydathodes', 'phloem sap leaking from aphid stylets', 'rain residue in the whorl'],
          answer: 1,
          explain: 'Root pressure under wet soil and low night transpiration pushes xylem sap out of margin hydathodes — guttation, not condensation.',
        },
        {
          q: 'An embolism usually stops at the edge of the conduit where it formed because…',
          options: ['xylem sap is antiseptic', 'pit-membrane pores are too small for the expanding bubble to pass', 'vessel elements are re-sealed by the torus', 'surface tension inverts at the pit'],
          answer: 1,
          explain: 'Gas bubbles cannot squeeze through the submicroscopic pores of pit membranes, so each cavitation event is quarantined in its conduit while water detours around it.',
        },
        {
          q: 'A vulnerability curve plots…',
          options: ['water potential against light intensity', 'hydraulic conductivity against xylem tension', 'stomatal conductance against time of day', 'root pressure against soil depth'],
          answer: 1,
          explain: 'It measures how much transport capacity a species loses as tension rises — the quantitative profile of its embolism risk.',
        },
      ] },
    ],
  },
  {
    id: 'bio-plant-phloem-loading-partitioning',
    title: 'Phloem Mechanics: Loading, Pressure Flow and Allocation',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Beyond Photosynthesis',
    tier: 'core' as const,
    concepts: [
      'The conducting units: sieve elements and their companion cells',
      'The pressure-flow model, by name: Münch 1930',
      'How fast sap really moves — and why diffusion never could',
      'Three loading strategies: apoplastic, polymer trapping, passive',
      'What rides the stream: hormones, RNAs and signals',
      'From sink to source: the leaf\u2019s career change',
    ],
    words: 1535,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The Plant Physiology lesson sketched phloem as the living second pipeline — sugar flowing source to sink under pressure, proven by aphid stylets. This lesson opens the machinery. Phloem translocation is one of the great quantitative stories in plant physiology: a mechanism proposed in 1930 still stands, velocities are measured in meters per hour, and the loading strategies that build the pressure divide into exactly three documented designs. It is also the story of a tissue that walks a tightrope — it must move cargo under pressure through cells that had to sacrifice their nuclei to become pipes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every calorie a grain crop stores, every apple a orchard sells, travels the phloem. Yield is literally source-capacity times partitioning efficiency — which is why breeders measure stem carbohydrate reserves, why aphid-resistant varieties protect more than leaves, and why sink strength (the pull of the filling grain or fruit) is a breeding target in its own right.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The conducting cell of angiosperm phloem is the sieve tube element — living, enucleate at maturity, joined end to end through sieve plates whose pores open the stream. Maintenance falls to the companion cell beside it, connected by numerous plasmodesmata: companion cells keep both cells alive and do the metabolic work, and they come in functional flavors. Ordinary companion cells serve general maintenance; transfer cells, with wall ingrowths that multiply membrane surface, serve intensive apoplastic exchange; intermediary cells, dense with plasmodesmata, serve the symplastic loading route described below. Gymnosperms run the same service with Strasburger cells instead of companion cells — a parallel solution, and a clue that the pressure-flow design is ancient.',
      },
      {
        kind: 'para',
        text: 'The mechanism has a name and a date: the pressure-flow model, first proposed by Ernst Münch in 1930. Loading sugars at the source drops the sieve-element water potential; water flows in from the adjacent xylem by osmosis and pressure builds. Unloading at the sink reverses the osmotic logic and pressure falls. The result is bulk flow of solution down the pressure gradient — no pumps along the path, just osmotic engines at the two ends. The model explains phloem translocation as a passive mechanism, and it survives every quantitative test: measured pressure gradients match the model\u2019s predictions, and velocities are exactly what bulk flow through sieve-pore resistances allows.',
      },
      {
        kind: 'para',
        text: 'Those velocities are surprisingly high. Classical measurements in the 1940s and 1950s put phloem speeds at 0.3 to 1.5 metres per hour — 0.08 to 0.42 millimetres per second — and modern NMR flow imaging in castor bean averaged 0.25 millimetres per second, in close agreement with the old numbers. Diffusion over the same distances would take years; a sugar molecule diffusing one metre would need on the order of a decade. Any mechanism claiming to explain translocation must beat diffusion by those many orders of magnitude, and pressure-driven bulk flow is the only candidate that does.',
      },
      {
        kind: 'para',
        text: 'Loading is where the pressure gradient is manufactured, and plants do it three ways. Apoplastic loading uses active membrane transport: sucrose from the mesophyll crosses into the apoplast and is carried into the sieve element–companion cell complex against its concentration gradient by a sucrose–H+ symporter, riding the proton motive force that the companion cell\u2019s ATPases maintain. Symplastic loading with polymer trapping takes the opposite road: sugars pass into intermediary cells through plasmodesmata and are chemically converted into larger oligosaccharides of the raffinose family — too big to diffuse back — so concentration builds without a membrane pump, at the cost of an energy-investing chemistry. Passive symplastic loading, documented in some trees, simply lets sucrose diffuse down a maintained concentration gradient, running the line at lower pressure but zero energetic overhead. Three strategies, one pressure-flow consequence.',
      },
      {
        kind: 'para',
        text: 'The cargo is more than sugar. Sucrose is the major transport form in most species, but the sieve-tube stream carries almost all the endogenous plant hormones — auxin, gibberellins, cytokinins, abscisic acid have all been found in sieve elements — plus small regulatory RNAs, and, less welcome, pathogenic RNAs and viruses that exploit the same pipeline. Phloem is also the plant\u2019s signaling highway: the FT protein that times flowering travels it, and the systemic acquired-resistance signals that warn distant leaves of infection ride the same stream. The aphid evidence extends here too: sap collected from cut aphid stylets — the insect anesthetized with carbon dioxide, the stylet severed with a laser — is the cleanest phloem-sap sample available, a natural syringe into a single sieve element.',
      },
      {
        kind: 'para',
        text: 'Sinks are made, not born. A leaf begins life importing sugar — a sink — and switches to exporting once it reaches a fraction of full expansion: the sink-to-source transition. The switch is mechanical as well as metabolic: plasmodesmata between the maturing leaf and the parent stem close off import pathways while the loading machinery comes online, and the change is gradual, with a maturing leaf importing and exporting simultaneously through different veins for a while. Downstream, the vocabulary matters: allocation is what a given sink does with its imported sugar — storage in a tuber, metabolism in a growing meristem, wall-building in an expanding stem — while partitioning is how the whole plant distributes photosynthate among competing sinks. Vascular interconnections set the corridors, but sink strength — capacity to accumulate or metabolize — sets the flow, and breeders manipulate both when they chase harvest index.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Choosing a Loading Strategy',
        steps: [
          'Consider three species: a fast-growing annual herb (sugar beet), a cucurbit vine (squash) and a shade-grown canopy tree.',
          'The annual runs apoplastic loading: sucrose–H+ symport builds the highest sieve-tube concentrations, fine for maximizing export to filling storage roots in one season.',
          'The cucurbit runs symplastic polymer trapping: raffinose-family oligosaccharides assembled in intermediary cells cannot leak back through the abundant plasmodesmata — tolerant of the vine\u2019s often lower-light carbon budget.',
          'The canopy tree, with modest apoplastic infrastructure and long-lived leaves, tends toward passive symplastic loading: low pressure, low energy cost, sustainable over decades.',
          'Check the consequence: all three feed the same pressure-flow mechanism — the strategies differ only in how the source-side water potential is created.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Aphid control: systemic insecticides ride the phloem exactly as the pests\u2019 target crops do — the transport system is the delivery route.',
        'Virus biology: phloem-limited viruses are phloem-engineered by evolution to hitch the bulk flow; blocking loading can block systemic infection.',
        'Harvest index breeding: partitioning to the harvestable sink versus straw is the arithmetic behind dwarf cereals\u2019 yield gains.',
        'Potato and sugar-beet storage: sink allocation (starch or sucrose storage) is the agronomic end of the partitioning story.',
        'Girdling experiments: removing a bark ring interrupts the phloem and swells tissues above the cut — the classical demonstration that the sugar road runs under the bark.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, imagining pumps along the pipe: the pressure-flow model is passive between source and sink — the energetic engines sit at the ends, in loading and unloading. Second, confusing the aphid with the theory: stylet exudation demonstrates that sieve tubes are under positive pressure, it does not replace the osmotic logic that explains the pressure. Third, equating phloem with downward flow: the stream runs wherever sinks demand, upward as readily as down — young leaves and shoot tips are sinks above any source leaf. Fourth, treating companion cells as plumbing: they are the power stations; the enucleate sieve element is the pipe they keep alive.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Sieve tube element', def: 'The enucleate, living conducting cell of angiosperm phloem, joined through sieve-plate pores.' },
        { term: 'Companion cell', def: 'The metabolically active partner cell that maintains the sieve element and drives loading.' },
        { term: 'Pressure-flow model', def: 'Münch\u2019s 1930 mechanism: osmotically generated pressure gradient drives bulk flow from source to sink.' },
        { term: 'Polymer trapping', def: 'Symplastic loading strategy converting sugars to raffinose-family oligosaccharides too large to diffuse back.' },
        { term: 'Sink-to-source transition', def: 'A maturing leaf\u2019s switch from importing sugar to exporting it, sealed by plasmodesmatal closure.' },
        { term: 'Allocation vs partitioning', def: 'What one sink does with imported sugar, versus how the whole plant divides photosynthate among sinks.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the pressure-flow model, what directly drives the sap from source to sink?',
          options: ['osmotically generated pressure gradient', 'peristaltic pumping by companion cells', 'transpiration pull transmitted from leaves', 'capillarity in sieve pores'],
          answer: 0,
          explain: 'Loading and unloading set up a pressure difference; bulk flow between them is passive — the pumps live at the ends, not along the path.',
        },
        {
          q: 'Polymer trapping builds sink-side concentration because…',
          options: ['raffinose-family oligosaccharides are too large to diffuse back through plasmodesmata', 'sucrose is actively pumped against its gradient', 'companion cells burn ATP to heat the stream', 'sieve plates filter out small sugars'],
          answer: 0,
          explain: 'Converting incoming sugars into bigger molecules in intermediary cells traps them symplastically — concentration builds without membrane transport.',
        },
        {
          q: 'Phloem velocities of roughly 0.3–1.5 m/h are significant because…',
          options: ['they exceed diffusion over those distances by many orders of magnitude', 'they match transpiration rates exactly', 'they are too slow for any physical mechanism', 'they equal the speed of cytoplasmic streaming'],
          answer: 0,
          explain: 'Sugar diffusing a metre would take years; bulk flow covers it in hours — the velocity constraint eliminates every diffusion-based mechanism.',
        },
        {
          q: 'A young leaf that has just stopped importing sugar has undergone…',
          options: ['senescence', 'the sink-to-source transition', 'secondary growth', 'apoplastic unloading'],
          answer: 1,
          explain: 'Import stops and export begins as plasmodesmatal import routes close and the loading machinery activates — the leaf joins the supply side.',
        },
      ] },
    ],
  },
  {
    id: 'bio-plant-stomatal-blue-light',
    title: 'Stomata: Blue-Light Valves and the Water–Carbon Bargain',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Beyond Photosynthesis',
    tier: 'core' as const,
    concepts: [
      'A turgor valve with a 1856 patent: von Mohl\u2019s proposal',
      'Two guard-cell shapes: kidney and dumbbell',
      'Blue light opens: phototropins and the zeaxanthin hypothesis',
      'The osmotic chemistry: potassium, chloride and malate',
      'Where stomata live: distribution patterns',
      'Measuring the bargain: stomatal resistance',
    ],
    words: 1460,
    readMins: 7,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'Plant Physiology gave stomata their role in the water–carbon bargain: guard cells swell open when potassium streams in, and close under the drought hormone. This lesson opens the valve itself — the anatomy of the two guard-cell designs, the blue-light sensory system that starts the morning, the osmotic chemistry that moves water on command, and the anatomical patterns that show evolution tuning the bargain for every habitat from pond to desert.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Stomata mediate the single largest water flow on the planet — transpiration carries essentially all the water a terrestrial plant loses, and agricultural water use is stomatal use at scale. They are also the target of the field\u2019s boldest engineering proposals: designers of drought-proof crops would tune guard-cell sensitivity itself, buying carbon at a lower water price.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The mechanism was proposed in 1856: Hugo von Mohl argued that turgor changes in the guard cells provide the mechanical force for stomatal apertures, and every experiment since has confirmed him. Guard cells are continuously swelling and shrinking, and their deforming walls open or close the pore between them. In many species the pair stands alone; in others they are flanked by subsidiary cells — specialized neighbors that separate them from ordinary epidermis and assist their movements. The driving logic is unforgiving: the leaf\u2019s cuticle blocks water loss beautifully, but it also blocks carbon dioxide, so every CO2 molecule must enter through a pore that can also bleed water vapor out. Stomata are the temporal solution — open when light favors photosynthesis, closed in the dark and when water runs short.',
      },
      {
        kind: 'para',
        text: 'Two guard-cell architectures solve the mechanics differently. Elliptical (kidney-shaped) guard cells, the default in most species, have cell-wall cellulose microfibrils arranged so the cell bulges rather than stretches when turgid — swelling bows the two cells apart and the pore between them gapes. Grasses and other cereals run a different design: dumbbell-shaped guard cells with bulbous ends and a narrow waist, always flanked by subsidiary cells. Turgor inflates the bulbous ends, which lever the waist apart with mechanical advantage — faster opening and closing, which suits the rapid, responsive water management grasslands demand.',
      },
      {
        kind: 'para',
        text: 'The opening signal under temperate conditions is blue light — the dominant stimulus, perceived by phototropin receptors in the guard-cell membrane, and it works fast: ion pumping begins very quickly after a light-on signal. Blue light drives the H+-ATPases that hyperpolarize the membrane, which gates the potassium channels that let K+ flood in. The receptor question has a second candidate: the zeaxanthin hypothesis holds that the xanthophyll-cycle pigment zeaxanthin acts as the blue-light sensor, and the genetic evidence keeps the debate honest — the zeaxanthin-deficient mutant npq1 retains blue-light stomatal responses, and so do phototropin-deficient double mutants, yet zeaxanthin is still required for some wild-type responses. The consensus view is that phototropins are the primary receptors, with zeaxanthin modulating — a reminder that plant signaling rarely has exactly one wire.',
      },
      {
        kind: 'para',
        text: 'The osmotic chemistry balances charge and supply. Potassium ions entering the guard cell must be countered: chloride ions are taken up as counterions, and where chloride runs short the cell synthesizes malate²⁻ internally — formed from the hydrolysis of stored starch — so the osmotic budget closes with K+ paired against Cl– and malate. Water follows osmotically, turgor rises, and the pore opens. Closing reverses everything: ions exit, malate is catabolized or exported, turgor falls. The drought hormone abscisic acid triggers the closing cascade when roots sense dry soil, and a second trigger needs no hormone at all — high internal CO2 concentration closes stomata on its own, which is how the leaf knows photosynthesis is outrunning demand even in full light.',
      },
      {
        kind: 'para',
        text: 'Distribution tells the ecological story. Submerged aquatic leaves have no stomata — there is no gas to gate. Floating leaves carry them on the upper surface alone, the face that meets air. Most herbaceous species bear them on both leaf surfaces, usually more abundant below; many tree species carry them only on the lower surface, hiding the valve from direct sun and rain. Stomatal density itself is tunable within a plant\u2019s lifetime: leaves developing under higher light or drier air build denser stomata, an anatomical bet on the conditions ahead.',
      },
      {
        kind: 'para',
        text: 'The engineering view measures the bargain as resistances. Water vapor leaving the leaf crosses two main resistances in series — the stomatal resistance of the pores and the boundary-layer resistance of the still-air film clinging to the surface — and carbon dioxide pays the same toll in reverse. Big smooth leaves in still air have thick boundary layers, so wind cools transpiration by thinning the film; narrow or dissected leaves shrink it inherently. CAM plants run the boldest inversion: stomata open at night, when the vapor-pressure difference is small, and stay shut through the day while stored acids feed the Calvin cycle — the same valve, scheduled for the desert. Water-use efficiency is simply the ratio of the two fluxes, carbon gained per water lost, and every item in this lesson — blue-light perception, ion chemistry, density control — is a term in that ratio.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Diagnosing a Stomatal Response',
        steps: [
          'A detached Vicia faba epidermis floats on buffer in the dark: stomata are closed. Transfer it to bright light: pores begin opening within minutes.',
          'Blue light is the trigger — phototropins activate the guard-cell H+-ATPases, the membrane hyperpolarizes, and gated K+ channels open.',
          'Charge balance: K+ influx is countered by Cl– uptake plus newly synthesized malate from starch hydrolysis; the osmotic pool grows.',
          'Water follows osmotically, turgor rises, and the elliptical guard cells bow apart — the pore gapes.',
          'Add abscisic acid instead, in the dark: ion efflux and malate loss drop the turgor and the pore shuts — the same valve run backwards.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Irrigation science: canopy-temperature and porometer readings are stomatal conductance read through physics — the valve\u2019s state, measured in the field.',
        'Breeding for water-use efficiency: carbon-isotope discrimination in C3 crops indexes stomatal behavior over a season, and breeders select on it.',
        'Greenhouse management: humidity and light recipes are designed to keep stomata open without pushing transpiration past supply.',
        'Pollution history: stomatal density in fossil and herbarium leaves tracks atmospheric CO2, the plant\u2019s own long-term record of the gas it trades for.',
        'Frost and drought protection: antitranspirant sprays work by plugging or signaling stomata — the valve is the target of the chemistry.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, blaming sunlight as such: the opening trigger is blue light through phototropins, not photosynthesis itself — red light that feeds the Calvin cycle opens stomata far less effectively than blue. Second, forgetting the counterions: potassium alone is not osmotically sufficient; Cl– and malate complete the charge and the pool. Third, assuming all guard cells are kidney-shaped: the grass dumbbell with subsidiary cells is a distinct, mechanically superior design, not a variant drawing error. Fourth, calling CAM stomata \u201cbackwards\u201d: they run the identical turgor valve on a nocturnal schedule — the machinery is the same, only the timetable differs.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Guard cell', def: 'One of the paired turgor-operated cells surrounding a stomatal pore; swelling opens, loss of turgor closes.' },
        { term: 'Subsidiary cell', def: 'A specialized neighbor cell that flanks and assists guard-cell movement, universal in the grass dumbbell design.' },
        { term: 'Phototropin', def: 'The blue-light receptor kinase whose activation by light triggers guard-cell ion pumping and opening.' },
        { term: 'Zeaxanthin hypothesis', def: 'The proposal that the xanthophyll-cycle pigment zeaxanthin is the blue-light sensor; mutant evidence keeps it as a modulator.' },
        { term: 'Malate', def: 'The dicarboxylate anion synthesized from starch hydrolysis to balance K+ charge and enlarge the guard-cell osmotic pool.' },
        { term: 'Stomatal resistance', def: 'The diffusion resistance of the stomatal pore itself — one of the two series resistances governing water and CO2 exchange.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Under temperate conditions, the dominant stimulus for stomatal opening is…',
          options: ['red light driving photosynthesis', 'blue light perceived by phototropins', 'rising humidity', 'falling soil water potential'],
          answer: 1,
          explain: 'Blue light activates guard-cell phototropins and the H+-ATPases that open K+ channels — light quality matters, not just brightness.',
        },
        {
          q: 'Charge balance for K+ entering guard cells is maintained by…',
          options: ['proton efflux alone', 'Cl– uptake plus malate synthesized from starch', 'calcium influx', 'sucrose export'],
          answer: 1,
          explain: 'Chloride comes in as counterion and malate²⁻ is built from starch hydrolysis — together they pair the K+ and grow the osmotic pool.',
        },
        {
          q: 'Grass guard cells are described as dumbbell-shaped, which means…',
          options: ['they lack chloroplasts entirely', 'bulbous ends leverage the waist apart for rapid opening', 'two cells share one pore', 'they close only at night'],
          answer: 1,
          explain: 'Turgor inflates the bulbous ends, levering the narrow waist — a mechanically fast design always flanked by subsidiary cells.',
        },
        {
          q: 'A floating aquatic leaf carries its stomata…',
          options: ['on both surfaces', 'on the lower surface only', 'on the upper surface only', 'nowhere — it has none'],
          answer: 2,
          explain: 'Only the adaxial face touches air, so only it bears stomata; submerged leaves have none at all.',
        },
      ] },
    ],
  },
  // Salvaged 2026-11-01 from the diverged local line (pass x61-botany-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-plant-water-ledger',
    title: 'The Water Ledger: Water-Potential Arithmetic from Soil to Air',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Beyond Photosynthesis',
    tier: 'intermediate',
    concepts: [
      'Pressure units: the megapascal ladder',
      'Computing ψ with ψs = −iCRT',
      'The soil–plant–air continuum in real numbers',
      'Measuring tension: the Scholander pressure chamber',
      'Root pressure and guttation: the push that cannot climb',
      'Cavitation: when the column snaps',
      'Vapour-pressure deficit and the transpiration equation',
      'Phloem sap in numbers: concentration, turgor, velocity',
    ],
    words: 1774,
    readMins: 9,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'The plant-physiology lesson told the transport story: a cohesive water column pulled up the xylem by evaporation, sugar pushed through phloem by osmotic pressure. This lesson puts numbers on every arrow of that story, because plant water relations is one of the most quantitative corners of biology — irrigation schedules, drought-tolerance breeding and tree-height limits are all settled in megapascals. One warning before the arithmetic: the ψ = ψs + ψp bookkeeping formula is owned by the physiology lesson; here we compute with it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every irrigation controller, drought-resistance trial and eco-hydrology model runs on these numbers. A farmer who knows field capacity is −0.03 MPa and wilting point is −1.5 MPa knows exactly how much water the soil is holding between those two lines — and plants feel the same gradient this lesson computes.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'heading',
        text: 'The units: feeling a megapascal',
      },
      {
        kind: 'para',
        text: 'Plant water potential is measured in megapascals: 1 MPa = 10 bar ≈ 9.87 atmospheres ≈ 10.2 meters of water head. A car tire holds about 0.2 MPa; a properly watered soil sits near −0.03 MPa; a transpiring leaf on a hot afternoon runs −1 to −2 MPa; and dry air, the end of the line, holds a water potential around −100 MPa. The sign matters as much as the size: negative values are tensions — the water is under pull, not push — and water always moves toward the more negative number. Read any transport question by lining the numbers up from wet to dry.',
      },
      {
        kind: 'formula',
        name: 'Solute (osmotic) potential of a solution',
        latex: '\\Psi_s = -iCRT',
        meaning: 'van’t Hoff’s relation: ψs in bars (convert ÷10 to MPa) with i the dissociation count (1 for sucrose), C molar concentration, R = 0.0831 L·bar mol⁻¹ K⁻¹, T in kelvin; the solute term that pulls water in.',
      },
      {
        kind: 'example',
        title: 'Water potential of one mesophyll cell',
        steps: [
          'The cell: a leaf mesophyll cell at 25 °C (298 K) with a total solute concentration equivalent to 0.4 M sucrose, and a turgor pressure of +0.5 MPa.',
          'Solute term: ψs = −(1)(0.0831)(298)(0.4) = −9.9 bar ≈ −0.99 MPa.',
          'Pressure term: ψp = +0.5 MPa.',
          'Total: ψ = −0.99 + 0.5 = −0.49 MPa.',
          'Read it back: this cell is more negative than a wet root (≈ −0.3 MPa), so it draws water up — and less negative than the dry air outside the stomata (≈ −95 MPa), so it keeps losing vapor. The cell sits between two pulls, and the arithmetic says which way everything moves.',
        ],
      },
      { kind: 'heading', text: 'The continuum, in real numbers' },
      {
        kind: 'para',
        text: 'Line up a transpiring plant on a clear day: soil at field capacity −0.03 MPa; the root xylem −0.5; the leaf mesophyll −1.5; the air inside the stomatal cavity saturated (≈ 0 relative), but the outside air at 50% humidity a crushing −95 MPa. Between every pair of neighbors there is a downhill gradient — and the final step, leaf to air, is by far the steepest. That ladder is the whole engine: the air’s dryness pulls vapor out of the leaf, the leaf’s low potential pulls the xylem column up, the column pulls from the root, the root pulls from the soil. Transpiration is not a cost the plant grudgingly pays; it is the pump, and the CO2 intake stomata must open to run it.',
      },
      {
        kind: 'para',
        text: 'How are these numbers measured? The classic instrument is the Scholander pressure chamber: cut a leafy twig, seal it cut-end outward in a chamber, and squeeze the shoot with gas pressure until xylem sap just appears at the cut surface. The balancing pressure is exactly the negative of the twig’s xylem tension — turn the pull into a push and read it on a gauge. Thermocouple psychrometers measure whole-tissue water potential by vapor equilibration, and porometers measure stomatal conductance by the rate a chamber’s air is humidified.',
      },
      { kind: 'heading', text: 'Root pressure and guttation: the push that cannot climb' },
      {
        kind: 'para',
        text: 'Transpiration pull is not the only engine. On humid nights when the stomata close and evaporation nearly stops, roots keep pumping ions into the xylem; the stele’s sap turns hypertonic, water osmoses in through the endodermis (the Casparian strip — owned by the anatomy lesson — forcing that route through membranes), and a positive root pressure of up to roughly 0.1–0.2 MPa develops. The visible signatures: guttation, droplets of xylem sap exuded overnight from hydathodes — special pores at the toothed margins of grass, strawberry and garden nasturtium leaves — and the bleeding of sap from a cut stump. The arithmetic caps the ambition: even 0.2 MPa lifts water about two meters of head, so root pressure can refill small conduits and wet short herbs, but it can never serve a tall tree. That job belongs to the tension engine, which generates hundreds of times more force.',
      },
      { kind: 'heading', text: 'Cavitation: when the column snaps' },
      {
        kind: 'para',
        text: 'The tension engine has a failure mode. A water column under −2 MPa is metastable: if air is pulled through a pit membrane — or dissolved gas comes out of solution during a freeze–thaw cycle — a vapor pocket nucleates and the column snaps, embolizing the conduit. An embolized vessel or tracheid conducts nothing until refilled, and refilling is expensive and imperfect: some species use night root pressure, others simply write off last year’s ring-porous vessels and grow new ones. Species sit on a safety–efficiency edge: desert and Mediterranean plants run narrower, more pit-reinforced conduits that embolize only beyond −4 MPa, while fast-growing riparian trees run wide conduits that cavitate earlier. The anatomy lesson’s wall-collapse arithmetic and this air-seed threshold together define a conduit’s two independent breaking points — buckling and snapping — and a drought-tolerant xylem must clear both.',
      },
      {
        kind: 'formula',
        name: 'Transpiration as conductance times vapour-pressure deficit',
        latex: 'E \\approx g_{s} \\times VPD, \\qquad VPD = e_{sat}(T)\\,(1 - RH/100)',
        meaning: 'Transpiration rate E rises with stomatal conductance gs and the vapour-pressure deficit: e_sat is saturation vapor pressure (2.34 kPa at 20 °C, 3.17 at 25 °C, 4.24 at 30 °C) scaled down by relative humidity.',
      },
      {
        kind: 'example',
        title: 'Computing the atmospheric pull on a leaf',
        steps: [
          'The day: air at 25 °C and 40% relative humidity over a transpiring canopy.',
          'Saturation pressure at 25 °C: e_sat = 3.17 kPa.',
          'The deficit: VPD = 3.17 × (1 − 0.40) = 1.90 kPa — the atmosphere is pulling with nearly 2 kPa of dryness.',
          'The flow: with stomatal conductance gs at a typical crop value, E scales directly — halving gs (stomatal closure at midday) halves transpiration but also halves CO2 entry, the bargain the physiology lesson described.',
          'State the result: same leaf, same temperature, 80% humidity → VPD = 0.63 kPa, a third of the pull — the reason humid greenhouses are forgiving and desert afternoons are brutal.',
        ],
      },
      { kind: 'heading', text: 'Phloem in numbers' },
      {
        kind: 'para',
        text: 'The pressure-flow story gets its arithmetic too. Sieve-tube sap is 10–30% sucrose by mass — roughly 0.3 to 0.9 molar — so by ψs = −iCRT a 0.5 M sap holds an osmotic potential near −12.4 bar ≈ −1.2 MPa, and companion-cell loading at a source raises sieve-tube turgor to around +0.8 MPa against a sink’s +0.3 MPa. That ~0.5 MPa difference drives sap along the tube at measured velocities of roughly 0.5–1.5 meters per hour — far faster than diffusion could ever move sugar. The classic proof is an aphid’s stylet: the insect taps a single sieve element, and when the stylet is severed the sap keeps exuding for hours at turgor pressure — the plant’s own plumbing demonstrates that the line is pressurized, exactly as the ledger says.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Megapascal ladder', def: '1 MPa ≈ 10 bar ≈ 10.2 m of water head; field capacity −0.03 MPa, wilting point −1.5 MPa, dry air ≈ −95 MPa.' },
          { term: 'ψs = −iCRT', def: 'van’t Hoff solute potential; the arithmetic core of every water-potential calculation.' },
          { term: 'Soil–plant–atmosphere continuum', def: 'One connected water path whose potentials fall steeply from soil to air; the gradient, not a pump, drives the stream.' },
          { term: 'Scholander pressure chamber', def: 'Instrument that measures xylem tension by balancing gas pressure against the pull until sap reappears at a cut.' },
          { term: 'Guttation', def: 'Overnight exudation of xylem sap from hydathodes at leaf margins under root pressure — not dew, and not transpiration.' },
          { term: 'Cavitation', def: 'Nucleation of a vapor bubble under excessive tension, embolizing a conduit; the failure mode tension transport must budget against.' },
          { term: 'Vapour-pressure deficit (VPD)', def: 'The gap between actual and saturation vapor pressure; the atmosphere-side term of the transpiration equation.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A cell at 25 °C holds 0.3 M sucrose with turgor +0.4 MPa. Its total ψ is about:',
            options: ['−0.74 MPa', '−0.34 MPa', '+0.06 MPa', '−0.10 MPa'],
            answer: 1,
            explain: 'ψs = −(0.0831)(298)(0.3) = −7.4 bar ≈ −0.74 MPa; adding +0.4 MPa turgor gives ψ ≈ −0.34 MPa.',
          },
          {
            q: 'Water flows from soil into root xylem on a normal day because:',
            options: [
              'root pressure pushes it',
              'the root xylem (−0.5 MPa) is more negative than the wet soil (−0.03 MPa)',
              'capillarity in the cell walls sucks it in',
              'the endodermis pumps it actively',
            ],
            answer: 1,
            explain: 'Uptake is the ledger’s first step: water moves toward the more negative potential, and even a moderately transpiring root sits well below wet soil.',
          },
          {
            q: 'Guttation droplets on a grass blade at dawn are best explained as:',
            options: [
              'condensation from humid air (dew)',
              'xylem sap forced out of hydathodes by root pressure',
              'phloem sap leaking from severed sieve tubes',
              'glandular secretion like nectar',
            ],
            answer: 1,
            explain: 'Overnight root pressure, built on ion pumping into a non-transpiring stele, pushes sap out at the margins — the composition (xylem sap) and position (hydathodes) distinguish it from dew.',
          },
          {
            q: 'Why can root pressure never water a 100 m tree?',
            options: [
              'Roots cannot pump at night',
              '0.2 MPa lifts water only ~2 m — far short of the required head',
              'Guttation wastes all the water',
              'Casparian strips block upward flow',
            ],
            answer: 1,
            explain: 'Even the strongest root pressures (~0.1–0.2 MPa) raise water a couple of meters; a 100 m column needs ~1 MPa of lifting plus friction losses — tension transport supplies it.',
          },
          {
            q: 'At 30 °C (e_sat = 4.24 kPa) and 60% humidity, the VPD is:',
            options: ['1.06 kPa', '1.70 kPa', '2.54 kPa', '4.24 kPa'],
            answer: 1,
            explain: 'VPD = 4.24 × (1 − 0.60) = 1.70 kPa — hotter air holds exponentially more vapor, which is why the same humidity fraction pulls harder on a warm day.',
          },
          {
            q: 'Severed aphid stylets keep exuding sieve-tube sap for hours, demonstrating that:',
            options: [
              'phloem flow is driven by transpiration',
              'sieve tubes are under positive turgor pressure',
              'aphids inject pumping enzymes',
              'sieve plates act as one-way valves',
            ],
            answer: 1,
            explain: 'Continuous exudation at the wound shows the tube is pressurized from the source side — the direct measurement behind the pressure-flow ledger.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'The plant-physiology lesson owns the mechanism stories this lesson computes — read it first, then keep this lesson’s numbers beside it. The vascular-ultrastructure lesson explains the cell walls that survive the tensions computed here; the flowering-plant-body lesson owns the Casparian route that makes root pressure possible; the photosynthesis lesson owns the carbon side of the stomatal bargain.',
        tone: 'path',
      },
    ],
  },

]
