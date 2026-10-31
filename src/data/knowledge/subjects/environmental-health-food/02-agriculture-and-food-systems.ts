/**
 * Knowledge Universe — Environmental Health & Food Systems — Chapter 02: Agriculture & Food Systems
 * 2 lessons · ~1,934 words
 * field: Agriculture & Food Systems
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Agriculture & Food Systems]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 env-soil-health-regenerative-agriculture — Soil Health and Regenerative Agriculture
 *   02.2 env-crop-science-breeding — Crop Science: From Domestication to Disease Resistance
 */
import type { KnowledgeTopic } from '../../types'

export const environmentalHealthFoodCh02: KnowledgeTopic[] = [
  {
    id: 'env-soil-health-regenerative-agriculture',
    title: 'Soil Health and Regenerative Agriculture',
    domain: 'Environment & Sustainability',
    field: 'Agriculture & Food Systems',
    branch: 'Soil Science',
    tier: 'core',
    concepts: [
      'Soil organic matter',
      'Aggregate structure and tilth',
      'The soil food web',
      'Cover cropping',
      'Minimal tillage',
      'Carbon sequestration and its limits',
    ],
    words: 899,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: "A healthy soil is not dirt but a living ecosystem — minerals, organic matter, roots, fungi, bacteria and animals — that cycles nutrients, stores water and resists erosion. Soil health names that capacity; regenerative agriculture is the toolkit that rebuilds it after decades of organic-matter mining: cover crops, minimal tillage, diverse rotations, compost and managed grazing. Since roughly 95 percent of food calories trace back to soil, the subject underpins sustainable food systems, and its central currency is soil organic matter.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Degraded soils erode faster than they form, threatening yields within a generation, while regenerating them improves drought tolerance and water quality. Practices that build soil carbon also pull CO2 out of the atmosphere.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Organic matter — living roots and microbes, dead residues, humus — is only 2 to 5 percent of soil by weight yet drives most function: holding water, feeding microbes and releasing nutrients slowly.",
      },
      {
        kind: 'para',
        text: "Mineral particles cling into crumbs around roots and fungal threads, creating pores that admit air and water. Good tilth lets roots push easily and rain soak in; compaction from heavy machinery collapses the network and starves it of oxygen.",
      },
      {
        kind: 'para',
        text: 'Bacteria, fungi, protozoa, nematodes and earthworms form a food web that mineralises nutrients from organic matter. Mycorrhizal fungi trade phosphorus and water to plant roots for sugars — a partnership some crops cannot grow well without.',
      },
      {
        kind: 'para',
        text: 'Keeping living roots in the ground year-round protects aggregates from rain impact, captures leftover nitrogen and pumps fresh carbon underground. The cover crop is terminated before the cash crop, returning biomass as mulch and food for the web.',
      },
      {
        kind: 'para',
        text: 'Ploughing flushes oxygen into the profile, letting microbes burn stored carbon while the mixing destroys fungal networks and aggregates. No-till drills seed through residue instead, trading immediate weed control for long-term structure.',
      },
      {
        kind: 'para',
        text: 'Building soil carbon is slow — tenths of a tonne per hectare per year — and each soil has a saturation ceiling set by texture and climate. Gains reverse when practices stop, so permanence matters as much as totals.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Organic matter from organic carbon',
        latex: '\\text{SOM} \\approx 1.72 \\times \\text{SOC}',
        meaning: 'The Van Bemmelen factor: organic matter is roughly 58 percent carbon, so multiply carbon by 1.72.',
      },
      {
        kind: 'formula',
        name: 'Soil carbon stock',
        latex: 'C_{\\text{stock}} = \\rho_b \\cdot d \\cdot f_{OC}',
        meaning: 'Carbon per square metre: bulk density times sampling depth times the organic-carbon fraction; multiply by 10,000 for tonnes per hectare.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: the organic matter and carbon stock of a 30 cm soil with bulk density 1.3 t/m3 and 1.6 percent organic carbon.',
          'Recall the governing ideas: SOM ≈ 1.72 × SOC, and stock = bulk density × depth × carbon fraction.',
          'Apply them: SOM ≈ 1.72 × 1.6 ≈ 2.75 percent; stock = 1.3 × 0.3 × 0.016 = 0.00624 t C per m2, or 62.4 tonnes per hectare.',
          'State the result: raising carbon by 0.5 percentage points would store about 19.5 tonnes per hectare — a decade-scale project, not a season of work.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Carbon-farming programmes that pay for verified soil carbon gains',
          'Drought planning, since each extra point of organic matter lifts water holding',
          'Nutrient-pollution control, as cover crops capture leftover fertiliser before it leaches',
          'Erosion control on slopes, where structure and surface cover keep soil in place',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "No practice regenerates every soil: no-till in cold, wet clay can depress yields, and cover crops need water that drylands cannot always spare. Soil carbon saturates and reverses, so permanence beats headline rates. And 'regenerative' is not a certification — without measurement it slides into marketing.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Soil organic matter', def: 'The living, dead and decayed biological fraction of soil; roughly 58 percent carbon.' },
          { term: 'Tilth', def: 'The physical condition of soil as roots experience it: structure, porosity, workability.' },
          { term: 'Cation exchange capacity', def: 'The soil’s ability to hold and trade positively charged nutrients on clay and organic surfaces.' },
          { term: 'Mycorrhiza', def: 'A fungal symbiosis on plant roots that trades phosphorus and water for sugars.' },
          { term: 'Cover crop', def: 'A non-cash crop grown to protect and feed the soil between main crops.' },
          { term: 'Bulk density', def: 'Dry soil mass per unit volume; high values mean compaction.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A lab reports 2 percent soil organic carbon. Total organic matter is approximately:',
            options: ['1.2 percent', '3.4 percent', '2.0 percent', '5.8 percent'],
            answer: 1,
            explain: 'Multiply carbon by the Van Bemmelen factor: 2 × 1.72 ≈ 3.4 percent organic matter.',
          },
          {
            q: 'Ploughing depletes soil organic matter mainly because:',
            options: [
              'it removes nutrients directly from the field',
              'the flush of oxygen lets microbes rapidly oxidise stored carbon',
              'it raises bulk density above 2 t/m3',
              'it kills earthworms and nothing else',
            ],
            answer: 1,
            explain: 'Tillage aerates the profile, and the microbial bloom burns stored carbon while breaking aggregates.',
          },
          {
            q: 'Mycorrhizal fungi help crops mainly by:',
            options: [
              'fixing nitrogen from the air',
              'trading phosphorus and water to roots for sugars',
              'digesting sand into clay particles',
              'repelling nematodes with spores',
            ],
            answer: 1,
            explain: 'The fungus extends the root’s reach for immobile phosphorus in exchange for plant carbon.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Start here with basic biology and chemistry — photosynthesis and nutrient cycles are the only prerequisites. Next: composting systems, integrated nutrient management, water in soils, then agroecology at landscape scale.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Organic matter is the currency: 2–5 percent of weight drives water, nutrients and biology.',
          'Aggregates built by roots and fungi create the pores that roots and rain depend on.',
          'Cover crops keep the food web fed year-round; tillage burns its capital.',
          'SOM ≈ 1.72 × SOC; carbon stock = bulk density × depth × carbon fraction.',
          'Sequestration is slow, saturating and reversible — permanence defines its value.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'env-crop-science-breeding',
    title: 'Crop Science: From Domestication to Disease Resistance',
    domain: 'Environment & Sustainability',
    field: 'Agriculture & Food Systems',
    branch: 'Crop Science',
    tier: 'core',
    concepts: [
      'Domestication: the first genetic engineering',
      'Breeding by selection',
      'Hybrid vigor and yearly seed buying',
      'The Green Revolution',
      'GM crops: what they are, what is debated',
      'Yield gaps and closing them',
    ],
    words: 1035,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Every crop you have ever eaten is a human invention. Wheat, rice, maize and potatoes all descend from wild plants remade by ten thousand years of selection by farmers who mostly had no idea what genes were. Modern crop science does the same job with far more precision: crossing, selecting, and since the 1990s directly adding or editing DNA. This core lesson traces the arc from domestication through Mendelian breeding, hybrid seed and the Green Revolution to today\'s GM debate — and shows how agronomists measure whether any of it is working, in tonnes per hectare.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Agriculture must roughly double food production by 2050 on little extra land, under shifting climates and evolving pests. Which breeding tools we use — and who controls seed — shapes food prices, farm livelihoods and wild-land conversion.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Domestication began independently in a dozen-odd centers, from the Fertile Crescent\'s wheat and barley to Mexico\'s maize — a scrawny wild grass called teosinte transformed into full ears of corn. The domestication syndrome repeated everywhere: seeds stopped shattering from the stalk, dormancy and bitterness fell away, and harvestable parts swelled. A few regulatory gene changes did much of the work.',
      },
      {
        kind: 'para',
        text: 'Selection is breeding\'s engine. Early farmers simply kept seed from the best plants; modern breeders do it deliberately — cross two parents, then walk the fields choosing offspring generation after generation, guided now by DNA markers linked to disease resistance or drought tolerance rather than by eye alone. Local landraces, shaped by centuries of farmer selection, remain a reservoir of adaptive genes.',
      },
      {
        kind: 'para',
        text: 'Cross two genetically different inbred lines and the first generation can outgrow both parents — heterosis, or hybrid vigor, typically worth 10 to 30 percent in maize. The boost does not persist: the second generation reshuffles genes and yields crash, which is why farmers replant fresh F1 seed each season. The biology created the seed industry\'s business model.',
      },
      {
        kind: 'para',
        text: 'The Green Revolution bundled genetics with agronomy. Norman Borlaug\'s semi-dwarf, rust-resistant wheats, bred at CIMMYT in Mexico, went to India and Pakistan in the mid-1960s and — with fertilizer and irrigation — turned looming famines into grain surpluses; Borlaug won the 1970 Nobel Peace Prize. IR8, the 1966 "miracle rice," did the same across Asia.',
      },
      {
        kind: 'para',
        text: 'GM crops add genes rather than selecting existing ones. Bt corn and cotton carry a bacterial protein toxic to specific insects, cutting insecticide spraying; herbicide-tolerant varieties simplified weed control. The debate is real on both sides: pests have evolved Bt resistance where refuge plantings were skipped, weeds have followed glyphosate into resistance, and seed ownership concentrates in a few companies — while decades of evidence show no special danger from the technique itself. Newer gene-edited crops, built with the CRISPR tools explained in our genetics lesson, mostly tweak a plant\'s own genes and face lighter regulation.',
      },
      {
        kind: 'para',
        text: 'Progress is measured in yield: tonnes per hectare. U.S. maize averages about 11 t/ha with contest plots above 16, while Sub-Saharan African maize averages under 2. The yield gap — actual minus attainable yield — closes as much through agronomy, seed access and soil care as through new genetics.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the yield gap for a region whose farmers average 3.0 tonnes of maize per hectare where attainable yield with best local practice is 6.5.',
          'Recall: yield gap = attainable − actual; farmers\' realized share = actual / attainable.',
          'Apply: gap = 6.5 − 3.0 = 3.5 t/ha; realized share = 3.0 / 6.5 ≈ 0.46, so about 46 percent of attainable yield is captured.',
          'State the result: over half the potential is unrealized — usually a seed, water, pest or soil-fertility problem to diagnose field by field before any new variety is even discussed.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Seed companies run hundreds of trial plots a year to pick next season\'s hybrids',
          'Gene banks such as CIMMYT\'s wheat collection preserve wild relatives for future breeding',
          'Plant pathologists race new stem rust strains like Ug99, breeding resistance before it spreads',
          'Seed certification laws guarantee that the hybrid in the bag matches its label',
          'Extension services demo trial yields to close local yield gaps farmer by farmer',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Hybrid is not GMO: hybrid vigor comes from crossing inbred lines, a technique organic farmers happily use, while GM inserts or edits specific genes. Yield growth also stalled in several regions after the Green Revolution — genetics alone cannot outrun degraded soils and hotter summers. And a record yield in a contest plot says nothing about what average farmers can afford.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Domestication syndrome', def: 'The recurring changes — no shattering, less bitterness, bigger seeds — that mark a domesticated plant.' },
          { term: 'Landrace', def: 'A locally adapted crop population improved by generations of farmer selection.' },
          { term: 'Heterosis', def: 'Hybrid vigor — the F1 outperforming both inbred parents.' },
          { term: 'F1 hybrid', def: 'First-generation cross of two inbred lines; uniform and vigorous, but its seed cannot be saved profitably.' },
          { term: 'Green Revolution', def: 'The 1960s-70s yield leap from semi-dwarf varieties plus fertilizer and irrigation.' },
          { term: 'Bt crop', def: 'A plant engineered to produce a bacterial protein toxic to specific insect pests.' },
          { term: 'Yield gap', def: 'The difference between actual farm yield and the attainable yield with best local practice.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Farmers buy new hybrid seed every year because:',
            options: ['Seed cannot be stored', 'The F2 generation loses vigor as genes reshuffle', 'Law forbids saving seed everywhere', 'Hybrids are sterile'],
            answer: 1,
            explain: 'Segregation in the second generation breaks up the combination that made the F1 outperform — yields crash.',
          },
          {
            q: 'The Green Revolution depended primarily on:',
            options: ['Organic methods alone', 'Semi-dwarf disease-resistant varieties plus fertilizer and irrigation', 'Clearing new land', 'Greenhouses'],
            answer: 1,
            explain: 'Borlaug\'s wheats and IR8 rice only paid off as a package with nutrients and controlled water.',
          },
          {
            q: 'Bt corn reduces insecticide spraying because:',
            options: ['It grows faster', 'It produces a bacterial protein toxic to its target pests', 'It smells bad to insects', 'It is planted further apart'],
            answer: 1,
            explain: 'The engineered Cry protein kills chewing caterpillars like corn borers — the plant is its own pesticide.',
          },
          {
            q: 'A region yields 3.0 t/ha against an attainable 6.5. The yield gap and realized share are:',
            options: ['3.5 t/ha and 46 percent', '9.5 t/ha and 46 percent', '3.5 t/ha and 54 percent', '6.5 t/ha and 30 percent'],
            answer: 0,
            explain: 'Gap = 6.5 − 3.0 = 3.5 t/ha; realized share = 3.0/6.5 ≈ 46 percent.',
          },
        ],
      },
    ],
  },
]
