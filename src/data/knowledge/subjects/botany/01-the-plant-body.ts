/**
 * Knowledge Universe — Botany — Chapter 01: The Plant Body
 * 2 lessons · ~3,551 words (includes the 2026-11-01 salvage increment)
 * field: Botany
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Plant Morphology & Anatomy]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-flowering-plant-body — The Flowering Plant Body: Morphology and Anatomy
 *   01.2 bio-plant-vascular-ultrastructure — Xylem and Phloem Under the Microscope: The Cells That Carry (~1,758w, salvaged)
 */
import type { KnowledgeTopic } from '../../types'

export const botanyCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-flowering-plant-body',
    title: 'The Flowering Plant Body: Morphology and Anatomy',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Plant Morphology & Anatomy',
    tier: 'core',
    concepts: [
      'Root and shoot systems',
      'Modified roots, stems and leaves',
      'Venation and phyllotaxy',
      'Racemose versus cymose inflorescence',
      'Fruits and seeds as flower outcomes',
      'Meristematic and permanent tissues',
      'Monocot versus dicot anatomy',
      'Secondary growth and annual rings',
    ],
    words: 1793,
    readMins: 8,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A flowering plant looks simple — roots below, shoot above, leaves in between — but every exam board expects you to read this body like an engineer: which root stores food, which stem climbs, why maize stems cannot thicken, and what a transverse section reveals under the microscope. This lesson covers NCERT Class 11 chapters 5 and 6 — the morphology of the flowering plant and the anatomy of its tissues — from modified organs to monocot–dicot fingerprints and the beginnings of wood.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Morphology and anatomy anchor some of the most mechanical, most repeatable questions in plant biology: match-the-modification, identify-the-section and monocot-versus-dicot. They are also practical horticulture — grafting, propagation from stems and reading annual rings all manipulate the anatomy covered here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Two Systems' },
      {
        kind: 'para',
        text: 'The root system and the shoot system divide the labor of anchoring and harvesting. Dicots grow a primary tap root with branches; monocots replace the embryonic root with a fibrous tuft of adventitious roots. Along a root from tip back: the protective root cap, the actively dividing meristematic zone, the rapidly elongating zone, and the zone of maturation whose epidermal cells push out root hairs — the plant’s absorbent surface, a few millimeters of glory per root.',
      },
      { kind: 'heading', text: 'Modified Roots and Stems' },
      {
        kind: 'para',
        text: 'Organs re-invent themselves when the job changes. Storage roots swell: the conical carrot, fusiform radish and napiform turnip are swollen tap roots, while the sweet potato is a swollen adventitious root — no nodes or buds, the giveaway separating it from the potato. Support roots: the banyan drops prop roots from branches that pillar into soil; maize and sugarcane brace with stilt roots from the stem base. Mangroves (Rhizophora in NCERT) push pneumatophores up through anaerobic mud — upward-growing roots that breathe through lenticels.',
      },
      {
        kind: 'para',
        text: 'Stem modifications split the same way. Underground: the ginger rhizome creeps horizontally with nodes and scale leaves; the potato tuber is a stem tip swollen at the end of a buried stolon, its “eyes” the buds at nodes — proof it is stem, not root; the onion bulb is a dwarf stem wrapped in fleshy leaf bases; the Colocasia corm is a solid vertical stem. Aerial: the cucumber and watermelon climb on leaf-stem tendrils; Citrus and Bougainvillea arm themselves with thorns; Opuntia flattens into a photosynthetic pad; water hyacinth (Eichhornia) spreads by offsets — the “Terror of Bengal” — and grass runs out horizontal stems.',
      },
      { kind: 'heading', text: 'Leaves: Venation, Arrangement, Modification' },
      {
        kind: 'para',
        text: 'A leaf is base (with stipules), petiole and lamina. Venation — the vein embroidery — is reticulate (net-like) in dicots and parallel in monocots, one of the fastest identification keys in the field. Phyllotaxy — leaf arrangement on the stem — comes alternate (one per node, as in China rose and mustard), opposite (pairs flanking the node, Calotropis and guava) and whorled (three or more per node, Alstonia), each an anti-shading strategy packing maximum leaf into minimum self-shadow.',
      },
      {
        kind: 'formula',
        name: 'Phyllotaxy fraction',
        latex: '\\text{phyllotaxy} = \\frac{\\text{turns of the genetic spiral}}{\\text{leaves passed}}',
        meaning: 'Spiral arrangements compress to a fraction — 2/5 for cherry and plum, 3/8 for poplar and pear — and the series 1/2, 1/3, 2/5, 3/8, 5/13 climbs the Fibonacci numbers, the packing that keeps successive leaves out of each other’s shadow.',
      },
      {
        kind: 'para',
        text: 'Modified leaves: the pea’s terminal leaflets become tendrils; cactus leaves shrink to spines — protection plus transpiration control, the stem taking over photosynthesis; in Australian Acacia the vertically flattened petiole, a phyllode, replaces the drought-shed blade; Nepenthes pitchers drown insects to mine nitrogen. Each modification trades a standard function, photosynthesis, for a scarce resource: support, water or nutrients.',
      },
      { kind: 'heading', text: 'Inflorescences, Fruits and Seeds' },
      {
        kind: 'para',
        text: 'Flowers are deployed on inflorescences of two architectures. In racemose (indefinite) types the main axis keeps elongating and flowers open acropetally, youngest at the top — the mustard and radish spikes and racemes. In cymose (definite) types the axis ends in a flower and opening runs basipetally, as in Solanum and Datura. The fig’s hypanthodium urn and Euphorbia’s cyathium are special condensed types — and the fig’s is a wasp farm in disguise.',
      },
      {
        kind: 'para',
        text: 'The flower anchors what follows, though its own machinery belongs to this library’s plant-reproduction lesson. After fertilization the ovary wall becomes the pericarp (epicarp, mesocarp, endocarp) and the ovules become seeds: the true fruit. Apples are false fruits — the thalamus swells along with the ovary; bananas are parthenocarps — fruit without fertilization, hence seedless. Berry (tomato), drupe (mango; the coconut a dry drupe whose “milk” is liquid endosperm), legume (the pea pod) and caryopsis (the maize grain, seed coat fused to the fruit wall) cover the exam’s commonest forms.',
      },
      { kind: 'heading', text: 'Tissues: Builders, Supporters, Pipelines' },
      {
        kind: 'para',
        text: 'Growth is confined to meristems: apical at tips (length), intercalary at nodes (grass regrowth), lateral as cambium (girth). Their mature products are permanent tissues. Parenchyma — thin-walled, isodiametric, living — stores food and fills the cortex, and its air-spaced form (aerenchyma) floats water hyacinth. Collenchyma — living, elongated, thickened at the corners — is the flexible skeleton of herbaceous stems, sitting as the hypodermis. Sclerenchyma — dead at maturity, walls impregnated with lignin — supplies fibers (jute, flax, hemp) and stone-cell sclereids (the grit in pear flesh).',
      },
      {
        kind: 'para',
        text: 'The pipelines are complex tissues. Xylem moves water and minerals upward through dead, lignified tracheids and vessels (plate-perforated, efficient, mostly angiosperm), plus fibers and living parenchyma; phloem moves sugar both ways through living sieve-tube elements — nuclei lost, maintained by their nucleated companion cells — plus phloem parenchyma and fibers. In dicot stems and roots the fascicular cambium between the pipes joins interfascicular cambium into a ring whose divisions lay down secondary xylem (inward) and secondary phloem (outward): spring wood with wide vessels and autumn wood with narrow, dense vessels alternate as annual rings — a temperate tree’s age in cross-section. The outer cork cambium lays waterproof periderm (the bark), punctuated by lenticels for gas exchange; inner secondary xylem ages into heartwood — dead, resin-filled, durable — while the outer sapwood still conducts.',
      },
      { kind: 'heading', text: 'Monocot versus Dicot: The Anatomical Fingerprint' },
      {
        kind: 'para',
        text: 'Both root types share a plan — epidermis with root hairs, thin cortex, the endodermis with its waxy Casparian strip forcing everything to cross a membrane, pericycle, and xylem and phloem in alternating radial arms with protoxylem facing outward (exarch). A dicot root shows two-to-six xylem arms around a small pith and later grows secondary wood; a monocot root shows many arms (polyarch) around a large pith and never thickens.',
      },
      {
        kind: 'para',
        text: 'A dicot stem in section: epidermis bearing trichomes and stomata, collenchymatous hypodermis, cortex, the starch-sheath endodermis, pericycle, and vascular bundles in one ring — conjoint, collateral, open (cambium present, secondary growth possible), xylem endarch — with medullary rays between and a broad pith. A monocot stem scatters its bundles through uniform ground tissue with no cortex–pith boundary: bundles conjoint, collateral and closed (no cambium, no secondary growth), each armored in a sclerenchymatous bundle sheath beneath a sclerenchymatous hypodermis.',
      },
      {
        kind: 'para',
        text: 'Leaves mirror the class split. A dorsiventral dicot leaf stacks palisade tissue on the upper surface, spongy mesophyll below, and confines most stomata to the underside. An isobilateral monocot leaf opens stomata on both faces and embeds bulliform cells in the upper epidermis — in grasses these balloon with water to unroll the blade and collapse in drought to roll it shut, slashing transpiration.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Diagnose a Transverse Section',
        steps: [
          'Identify what is asked: a slide shows scattered vascular bundles each wrapped in a thick sheath, a sclerenchymatous hypodermis and uniform ground tissue — name the organ and the group.',
          'Probe bundle arrangement: scattered bundles rule out the dicot stem (a single ring) and any root (radial arms); scattered means monocot stem.',
          'Confirm with bundle type: closed bundles (no cambium) plus a sclerenchymatous bundle sheath — a monocot stem, not a monocot root.',
          'Cross-check the ground plan: no cortex, no pith boundary, hypodermis of sclerenchyma — maize or sugarcane anatomy.',
          'State the result: a monocot stem, with the prediction that this plant cannot make wood and thickens by primary growth alone.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Grafting works only when cambia of stock and scion align to weld the pipelines — the fruit-tree industry stands on that anatomical detail.',
          'Potato tubers and ginger rhizomes propagate vegetatively because they are stems with buds; sweet potatoes, being roots, need different propagation — slips.',
          'Heartwood — dead, extractive-filled — makes durable furniture and railway sleepers; sapwood must be treated.',
          'Bulliform-cell rolling and phyllodes are drought-design lessons for crop scientists breeding water-smart cereals.',
          'Dendrochronology dates timbers, fires and climates from annual rings — anatomy as a stopwatch.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The two eternal traps: the potato is a stem (eyes are buds) and the sweet potato is a root (no buds); the onion is mostly leaf bases on a dwarf stem. “Open” and “closed” describe the cambium in a bundle, not traffic through it — closed bundles mean no secondary growth, which is why palms stay slender. And the Casparian strip is not decoration: it is why roots control, rather than merely permit, what enters the vascular cylinder.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Adventitious root', def: 'A root arising from any non-root organ — fibrous systems, sweet-potato storage, stilt and prop roots.' },
          { term: 'Pneumatophore', def: 'An upward-growing mangrove root breathing through lenticels.' },
          { term: 'Phyllotaxy', def: 'The arrangement of leaves on the stem — alternate, opposite or whorled.' },
          { term: 'Phyllode', def: 'A flattened petiole replacing the leaf blade, as in Australian Acacia.' },
          { term: 'Racemose inflorescence', def: 'An open arrangement whose axis keeps growing, flowers opening acropetally.' },
          { term: 'Sclerenchyma', def: 'Dead, lignified supporting tissue — fibers and sclereids.' },
          { term: 'Casparian strip', def: 'The waxy endodermal band forcing selective membrane crossing into the root’s vascular cylinder.' },
          { term: 'Bulliform cell', def: 'Large empty monocot epidermal cells whose turgor rolls grass leaves in drought.' },
          { term: 'Annual ring', def: 'One year’s spring plus autumn secondary xylem, visible as a growth ring.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The “eyes” of a potato tuber are:',
            options: ['root hairs', 'buds at nodes — proof it is a stem', 'stomata', 'adventitious roots'],
            answer: 1,
            explain: 'Eyes are nodes with buds; roots bear no buds, which is exactly how potato differs from sweet potato.',
          },
          {
            q: 'Pneumatophores of mangroves function in:',
            options: ['storage of food', 'vegetative propagation', 'respiration in oxygen-poor mud', 'photosynthesis'],
            answer: 2,
            explain: 'These upward roots exchange gases through lenticels where the mud below is anaerobic.',
          },
          {
            q: 'A closed vascular bundle:',
            options: ['lacks cambium and cannot grow in girth', 'has no xylem', 'transports nothing', 'occurs only in roots'],
            answer: 0,
            explain: 'Closed means no cambium — the monocot condition, and the reason palms stay slender.',
          },
          {
            q: 'Bulliform cells of grass leaves:',
            options: ['store starch', 'roll the leaf in drought to cut water loss', 'anchor the plant', 'form the bundle sheath'],
            answer: 1,
            explain: 'When they lose turgor the blade rolls shut, hiding stomata from dry air.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'Morphology tells you what a plant is doing; anatomy tells you how it is built to do it. Once the tissue cast (parenchyma, collenchyma, sclerenchyma, xylem, phloem) and the two anatomical fingerprints (ringed-open versus scattered-closed) are secure, the whole chapter compresses into a handful of structural decisions — and every identify-the-section question becomes a checklist rather than a memory test.',
      },
    ],
  },
  // Salvaged 2026-11-01 from the diverged local line (pass x61-botany-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-plant-vascular-ultrastructure',
    title: 'Xylem and Phloem Under the Microscope: The Cells That Carry',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Plant Morphology & Anatomy',
    tier: 'intermediate',
    concepts: [
      'Two pipelines, two philosophies: dead pipes versus living conduits',
      'Tracheids: the safe, universal design',
      'Vessel elements: perforation plates and open plumbing',
      'Pits and the torus-margo valve',
      'Protoxylem to metaxylem: the wall-thickening ladder',
      'Sieve-tube elements: living conduits without nuclei',
      'Companion cells: the metabolic support crew',
      'Wound sealing: P-protein and callose',
    ],
    words: 1758,
    readMins: 9,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'The flowering-plant-body lesson walked the organs and their tissue systems: dermal wrapping, ground filling, and the two vascular pipelines threading through every root, stem and leaf. This lesson opens those pipelines at cellular resolution, because their cells are among the strangest in biology. The water line is built of dead cells — emptied, wall-thickened corpses optimized into plumbing. The sugar line is built of living cells that deliberately destroy their own nuclei and much of their cytoplasm to open the flow path, then keep themselves alive with a support crew. Every design choice follows from one physics fact: water moves through dead empty space, but sugar solution needs pressure, and pressure needs an intact membrane.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Wood is xylem — the timber industry, tree-ring climate records and a tree’s drought survival are all cell-biology questions here. Phloem is where aphids feed and where viruses travel: plant disease control runs on this lesson’s anatomy.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'heading',
        text: 'The four-power law that built two designs',
      },
      {
        kind: 'para',
        text: 'Flow through a tube follows Poiseuille’s law, and its brutal economics explain everything that follows: conductance rises with the fourth power of the radius. Doubling a conduit’s diameter multiplies its flow sixteenfold. A 100-micrometer vessel therefore carries ten thousand times the water of a 10-micrometer one at the same pressure gradient. Wide is everything — and wide is dangerous, because under transpiration’s tension a wide empty tube is exactly where air bubbles nucleate and block flow. The whole evolutionary story of xylem is the negotiation between that four-power reward and the embolism penalty, played out in cell architecture.',
      },
      {
        kind: 'formula',
        name: 'Poiseuille conductance of a conduit',
        latex: 'K = \\frac{\\pi r^{4}}{8 \\eta L}',
        meaning: 'Hydraulic conductance K of one conduit scales with the fourth power of its radius r (η = sap viscosity, L = length); the reason vessels beat tracheids and why one wide vessel can equal thousands of narrow ones.',
      },
      { kind: 'heading', text: 'Xylem: the dead pipeline, cell by cell' },
      {
        kind: 'para',
        text: 'The tracheid is the universal design — every vascular plant, from ferns to conifers, builds them. A tracheid is a single elongated cell, dead at maturity, its ends closed and tapered, its lignified secondary wall strong enough to resist collapse under tension. Water leaves one tracheid for the next only through pits — thin, unlignified spots in the overlap walls — so the flow path is safe but resistive: every meter of ascent passes thousands of pit membranes. Conifer wood is tracheid wood, and those forests accept the resistance in exchange for safety, which is why spruce tracheids measure a few tens of micrometers wide but several millimeters long.',
      },
      {
        kind: 'para',
        text: 'The vessel element is the flowering plants’ upgrade: a cell that opens its end walls entirely. Where two elements stack, their shared end wall is partly or wholly dissolved as a perforation plate — ladder-like scalariform plates in lineages such as birch, a single open simple plate in the more derived condition — so a stack of elements becomes one continuous tube, a vessel, which in oaks runs meters long. Conductance soars, because the four-power law rewards the wide lumen and the open ends removes the pit tax. The price: one embolism can shut an entire vessel rather than one cell. Woods split accordingly — ring-porous trees such as oak and ash lay a crown of very wide earlywood vessels each spring (and functionally depend on that year’s ring), while diffuse-porous trees such as maple build uniform vessels year-round and lean on safety.',
      },
      {
        kind: 'para',
        text: 'The pits themselves are engineering. In conifers each bordered pit carries a torus-margo valve: a thickened central disc (the torus) suspended on a porous cellulose mesh (the margo). Water flows freely through the margo, but if pressure differs across the pit — the signature of an air seed trying to spread — the torus is dragged against the pit border and seals the opening like a diaphragm check valve. Angiosperms use simpler pit membranes, uniform sieves with pores in the tens of nanometers: more resistive, less valve-like, still an air-seed filter. Either way, the pit membrane is the component whose failure defines a species’ drought tolerance.',
      },
      {
        kind: 'para',
        text: 'Wall thickening records the cell’s growth history. Protoxylem — the first xylem formed while the organ still elongates — lays annular rings and spiral bands of lignin, patterns that let the wall stretch as the cell extends. Metaxylem, formed after elongation stops, is reticulate and pitted: rigid, permanent, optimized against collapse. Read a wall pattern and you know when its cell died relative to the organ’s growth. The flowering-plant-body lesson owns the anatomical consequences (exarch arms in roots, endarch bundles in stems); the wall ladder is the cellular signature behind them.',
      },
      {
        kind: 'formula',
        name: 'Wall-collapse resistance of a conduit',
        latex: 'P_{collapse} = \\sigma_{wall} \\cdot \\frac{t}{r}',
        meaning: 'The tension a conduit survives before buckling equals wall stress capacity σ (lignified wood ≈ 40–60 MPa) times wall thickness t over lumen radius r — the reason wide vessels must carry proportionally thick walls.',
      },
      {
        kind: 'example',
        title: 'Why a wide oak vessel needs its thick walls',
        steps: [
          'The conduit: an oak earlywood vessel of lumen radius r = 100 μm, wall thickness t = 3 μm, lignified wall strength σ = 45 MPa.',
          'Collapse tension: P = 45 × 3/100 = 1.35 MPa.',
          'The demand: a transpiring oak canopy runs xylem tensions near −1.5 MPa at midday.',
          'The comparison: 1.35 < 1.5 — a 3 μm wall would buckle in the summer heat.',
          'The fix, as measured in real wood: wall thickness scales with lumen radius; thickening to t ≈ 4.5 μm raises collapse resistance to ≈ 2 MPa, a safety margin above the working tension. This is why the widest vessels in any wood are also the thickest-walled.',
        ],
      },
      { kind: 'heading', text: 'Phloem: the living pipeline, cell by cell' },
      {
        kind: 'para',
        text: 'Sieve-tube elements are alive but barely. As each element matures it dismantles its own nucleus and most of its ribosomes, and its central vacuole membrane breaks down — deliberately hollowing itself to keep the lumen open for flow, while retaining the plasma membrane (turgor depends on it), a thin layer of cytoplasm, mitochondria and smooth endoplasmic reticulum. What were vacuolar connections between stacked elements open into sieve pores, clusters of 0.5–1.5 μm holes in the sieve plate that join elements into a sieve tube. Phloem sap then flows cell to cell with almost no membrane in the way — a conduit engineered from a cell that un-built itself.',
      },
      {
        kind: 'para',
        text: 'Who runs the enucleate cell? Its sister. Each sieve-tube element and its companion cell arise from the same mother cell by an unequal division, and the companion cell keeps the nucleus, dense cytoplasm and ranks of mitochondria, feeding the sieve element proteins and ATP through dense fields of plasmodesmata. The partnership is obligatory — a sieve element without its companion cell dies. In gymnosperms the homologous pair is the sieve cell (with sieve areas on slanted walls rather than true plates) and the albuminous, or Strasburger, cell. Wound response is built in as well: when a stylet or cut breaches a tube, P-protein plugs the orifice and callose, a β-glucan, is deposited around the pores, sealing the line within minutes — the response that makes girdling a tree (removing a bark ring, severing phloem) lethal above the cut even though the xylem below is untouched.',
      },
      {
        kind: 'para',
        text: 'Support and storage round out both tissues. Xylem fibers and phloem fibers are sclerenchyma — thick secondary walls, dead at maturity — carrying mechanical load; xylem and phloem parenchyma stay living for radial transport and storage. In cross-section a vascular bundle reads: outer phloem (sieve elements with their companion cells, fibers at the cap), a thin cambium in open bundles, inner xylem (protoxylem toward the organ surface in stems, the reverse in roots), all wrapped in the bundle sheath. Kranz-sheath chemistry around bundles belongs to the photosynthesis lesson; here the sheath is structural — a barrier defining the bundle’s apoplast boundary.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Tracheid', def: 'Closed-end, pit-connected dead water cell; safe but resistive — the only tracheary cell in conifer and fern wood.' },
          { term: 'Vessel element', def: 'Open-ended xylem cell joined by perforation plates into long tubes; angiosperm innovation trading safety for four-power-law conductance.' },
          { term: 'Torus-margo pit', def: 'Conifer pit valve: a thickened torus disc on a porous margo mesh that seals against air-seeding pressure differences.' },
          { term: 'Protoxylem / metaxylem', def: 'First-formed extensible xylem (annular, spiral walls) versus later rigid xylem (reticulate, pitted) — the wall-thickening ladder.' },
          { term: 'Sieve-tube element', def: 'Enucleate living phloem conduit cell joined by sieve plates; turgor-driven sugar sap flows through its pores.' },
          { term: 'Companion cell', def: 'Nucleated sister cell sharing a mother with the sieve element; supplies proteins and ATP through plasmodesmata.' },
          { term: 'Callose', def: 'β-1,3-glucan deposited around sieve pores within minutes of wounding, sealing the breached tube.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'One 100 μm vessel conducts how much more water than a 10 μm tracheid at the same gradient?',
            options: ['10×', '100×', '1,000×', '10,000×'],
            answer: 3,
            explain: 'Poiseuille conductance scales with r⁴: (100/10)⁴ = 10⁴ — the four-power law is why wide vessels dominated angiosperm wood.',
          },
          {
            q: 'A conifer torus-margo pit acts as a valve because:',
            options: [
              'the torus dissolves when pressure rises',
              'a pressure difference drags the torus against the pit border, sealing the aperture against air-seeding',
              'the margo thickens under tension',
              'callose plugs it within minutes',
            ],
            answer: 1,
            explain: 'The suspended torus disc is pulled against the border by any asymmetry, isolating the embolized side — a mechanical check valve built from cellulose.',
          },
          {
            q: 'An oak vessel (r = 100 μm) with σ = 45 MPa walls must not buckle at −1.5 MPa tension. The minimum wall thickness is about:',
            options: ['1 μm', '3 μm', '4.5 μm', '9 μm'],
            answer: 2,
            explain: 'P = σ·t/r → t = P·r/σ = 1.5 × 100/45 ≈ 3.3 μm just to break even; a working safety margin puts real oak walls near 4.5 μm (P ≈ 2 MPa).',
          },
          {
            q: 'Sieve-tube elements lose their nuclei at maturity because:',
            options: [
              'nuclei would block the sieve pores',
              'hollowing the cell opens the flow path while the companion cell supplies essential molecules',
              'the cell is dead and nuclear breakdown is incidental',
              'nuclei would attract viruses',
            ],
            answer: 1,
            explain: 'The enucleation is programmed and purposeful: membrane, mitochondria and cytoplasm remain; the nucleus — and metabolic control — move to the companion cell.',
          },
          {
            q: 'Girdling a tree kills it above the ring mainly because:',
            options: [
              'xylem is severed and the crown dehydrates',
              'the phloem is severed, so sugars cannot reach the roots',
              'the cambium is exposed to air',
              'the bark can no longer expand',
            ],
            answer: 1,
            explain: 'The xylem inside the wood still carries water, but the phloem in the removed bark carried the downward sugar flow — root starvation follows.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'The flowering-plant-body lesson owns the organs and the tissue-system survey this lesson assumes; the plant-physiology lesson owns the transport flows these cells execute. The water-ledger lesson next computes the pressures those walls were built to withstand; the photosynthesis lesson owns bundle-sheath biochemistry (C4).',
        tone: 'path',
      },
    ],
  },

]
