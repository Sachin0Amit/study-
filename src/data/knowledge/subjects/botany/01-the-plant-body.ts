/**
 * Knowledge Universe — Botany — Chapter 01: The Plant Body
 * 1 lesson · ~1,793 words
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
]
