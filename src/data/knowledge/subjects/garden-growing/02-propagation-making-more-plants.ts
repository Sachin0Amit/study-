/**
 * Knowledge Universe — Garden & Growing — Chapter 02: Propagation: Making More Plants
 * 1 lesson · ~1,502 words
 * field: Garden & Growing
 * legacy sources: x48-all-subjects-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Propagation]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 grow-plant-propagation — Plant Propagation: Seeds, Cuttings, Grafts and Clones
 */
import type { KnowledgeTopic } from '../../types'

export const gardenGrowingCh02: KnowledgeTopic[] = [
  {
    id: 'grow-plant-propagation',
    title: 'Plant Propagation: Seeds, Cuttings, Grafts and Clones',
    domain: 'Everyday Knowledge',
    field: 'Garden & Growing',
    branch: 'Propagation',
    tier: 'core',
    concepts: [
      'Sexual vs asexual propagation and why gardeners choose between them',
      'Seed germination: water, oxygen, temperature and light',
      'Dormancy and how to break it: scarification and stratification',
      'Cuttings: hardwood, softwood and root cuttings; auxin rooting hormones',
      'Layering and division: multiplying what already grows',
      'Grafting: scion and rootstock, whip-and-tongue and bud grafting',
      'Micropropagation: tissue culture at commercial scale',
    ],
    words: 1502,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every plant in a garden is either a child or a clone. Grown from seed, it is a sexual individual — a new shuffle of its parents\' genes, similar to but never identical with either. Grown from a cutting, a layer, a division or a graft, it is a piece of one parent made into a whole new plant, genetically identical to the original. The entire craft of propagation is choosing between these two routes: seeds for diversity, vigor and cheapness; vegetative methods for exactness, because a Granny Smith seed will not grow a Granny Smith tree — only a graft of Granny Smith wood will.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Propagation is the difference between buying plants and making them. One healthy mother plant can populate a whole hedge by cuttings; one mature clump of daylilies becomes ten by division; a single favored tomato can be carried into next season. It is also how the world\'s fruit varieties have stayed true for centuries — every named apple, grape and rose you can buy is a clone maintained by human hands.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Seeds: The Sexual Route' },
      {
        kind: 'para',
        text: 'A seed is an embryo packaged with a food store and a protective coat, waiting for three signals that spring has come: water, oxygen and the right temperature. Imbibed water swells the embryo and releases enzymes that digest the stored food; oxygen fuels respiration for growth; most temperate seeds germinate best between roughly 15 and 25 degrees Celsius. Some seeds — lettuce, many herbs — also want light and should be surface-sown; others insist on darkness. The practical craft is matching each seed\'s needs: sowing depth about twice the seed\'s diameter, moisture steady but never waterlogged, because a drowned seed dies of oxygen starvation faster than a dry one retreats into waiting.',
      },
      {
        kind: 'para',
        text: 'Many seeds refuse to sprout even in perfect conditions, because dormancy — a delay built by evolution to keep the seed asleep until a real spring, or until its coat has been weathered, or its embryo chilled — has not been broken. Two classic treatments undo it. Scarification physically breaks or thins a hard coat (nicking a sweet-pea seed with a knife, or rubbing it on sandpaper) so water can enter. Stratification chills a moist seed for weeks in a refrigerator, mimicking winter; many trees, perennials and spring ephemerals will not germinate without it. The rule of thumb: hard coat, scarify; hardy species that overwinter, stratify.',
      },
      { kind: 'heading', text: 'Cuttings and Layering: Cloning with Pruners' },
      {
        kind: 'para',
        text: 'A stem cutting is a severed piece of shoot persuaded to grow roots, and the whole trick is polarity and patience: cuttings are inserted base-down, kept humid to stop wilting, and shaded while roots form. Timing decides the method. Softwood cuttings — new spring growth that snaps when bent — root fastest but wilt easiest. Semi-hardwood cuttings from midsummer wood and hardwood cuttings from dormant winter stems root slowly but survive neglect; a pencil-thick hardwood cutting of willow, currant or grape can be pushed straight into winter soil. Rooting is sped by auxin rooting hormones — indole-3-butyric acid, sold as dipping powders or gels — which concentrate at the cut end and trigger root initiation. Some plants root from a leaf (African violets, snake plants), others from root pieces (horseradish, raspberries\' suckering roots), and a few, like begonias, from a single slashed leaf laid on soil.',
      },
      {
        kind: 'para',
        text: 'Layering is a cutting that is not cut loose until it has rooted: a stem still attached to the mother plant is bent to the ground, wounded or bent at a joint, buried a few centimeters deep, and kept moist. Roots form at the wound within a season, and the new plant is then severed. Air layering does the same in the sky for woody plants that will not root from cuttings — a wound on the branch is packed with moist moss and wrapped — and is the classic way to multiply difficult figs, magnolias and rubber plants. Division is simpler still: clump-forming perennials — daylilies, hostas, ornamental grasses — are lifted, split into sections each carrying roots and shoots, and replanted; it is the only propagation that thins the parent while multiplying it.',
      },
      { kind: 'heading', text: 'Grafting: Two Plants Made One' },
      {
        kind: 'para',
        text: 'Grafting joins a scion — a piece of the variety you want — to a rootstock — a plant with the roots you want — so their cambia, the thin growth layers just under the bark, knit into one continuous vascular system. The craft demands three things: sharp tools for clean cuts, matching cambium layers on at least one side, and wax or tape excluding air from the join until it heals. The whip-and-tongue graft, with interlocking sloped cuts, is the standard for matching-size winter wood; bud grafting (T-budding) slips a single bud under a T-shaped flap of bark in summer and is how nurseries produce fruit trees by the million. Chip budding is its late-summer variant for tight-barked species.',
      },
      {
        kind: 'para',
        text: 'Why graft rather than root a cutting? Because many prize varieties are poor rooters, and because the rootstock is half the point: it can dwarf the tree (the basis of modern high-density orchards), resist soil pests and diseases — the classic solution to phylloxera in wine grapes — or tolerate wet, dry or alkaline soils the variety itself would hate. The clone you eat is a marriage of two genotypes, chosen separately for top and bottom.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Four slips. Planting cuttings upside-down — a stem always knows its top, and polarity is not negotiable. Expecting seed from a named fruit to reproduce it — apples in particular are extreme heterozygotes, and every seedling is a new variety. Overwatering seedlings: damping-off fungi thrive in soggy, crowded trays; ventilation and sparse watering are the cure. And letting a graft dry out: an unwaxed join is a dead join.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Tissue Culture: Propagation at Industrial Scale' },
      {
        kind: 'para',
        text: 'The laboratory version of a cutting is micropropagation: a few millimeters of shoot tip, surface-sterilized, sealed in a jar of gel with sugars, vitamins and the right balance of the plant hormones cytokinin and auxin, and multiplied into dozens of plantlets that are then rooted and hardened off. The technique produces virus-free stock (meristem tips often outgrow infections), clones plants that refuse conventional rooting — orchids, bananas, many houseplants — and ships sterile cultures across borders. Almost every commercial banana you have eaten is a tissue-culture Meristem clone, and the technique underpins the conservation of rare species in gene banks.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Choosing a Method',
        steps: [
          'Set up: you want twelve more plants of a favorite double-flowered rose, an old variety no longer sold.',
          'Rule out seed: doubled flowers are often sterile, and seedlings would not come true anyway — seed is wrong for exactness.',
          'Try cuttings first: rose hardwood cuttings root at reasonable rates in a cold frame over winter — cheap enough for twelve tries.',
          'If cuttings fail, graft: bud the variety onto hardy rootstock in summer, the nursery method for exactly this case.',
          'Note the parallel choice in the vegetable patch: for a new variety trial, buy seed (diversity, cheapness); to preserve an heirloom exactly, take cuttings or save true-to-type seed only if the variety is open-pollinated.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'sexual vs asexual propagation', def: 'Seeds recombine genes and vary; vegetative methods clone the parent exactly.' },
          { term: 'scarification', def: 'Breaking or thinning a hard seed coat so water can enter and germination begin.' },
          { term: 'stratification', def: 'Chilling moist seed to mimic winter and break embryo dormancy.' },
          { term: 'auxin (IBA)', def: 'Rooting hormone applied to cuttings to trigger root initiation at the wound.' },
          { term: 'scion and rootstock', def: 'The grafted top (variety) and bottom (roots) of one composite plant.' },
          { term: 'micropropagation', def: 'Cloning plants from sterile explants in nutrient gel under controlled hormones.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why won\'t a seed from a supermarket apple grow the same fruit?',
            options: [
              'Seeds are always sterile',
              'Apples are extreme heterozygotes; every seedling is a new genetic combination',
              'Commercial apples are GMOs',
              'Seed needs scarification first',
            ],
            answer: 1,
            explain: 'Named apple varieties are clones; sexual reproduction reshuffles their highly heterozygous genomes, so the seedling is a brand-new variety — which is why grafting exists.',
          },
          {
            q: 'A hard-coated sweet-pea seed that refuses to sprout needs:',
            options: ['Stratification', 'Scarification', 'Darkness', 'Gibberellic acid always'],
            answer: 1,
            explain: 'Physical dormancy from an impermeable coat is broken by nicking or abrasion — scarification — letting water in.',
          },
          {
            q: 'Dwarfing rootstock in an orchard is chosen to:',
            options: [
              'change the fruit\'s flavor genes',
              'control tree size for high-density planting',
              'make the scion seed-bearing',
              'replace pollination',
            ],
            answer: 1,
            explain: 'The rootstock governs vigor and size while the scion keeps the variety; dwarfed trees permit productive, pickable orchard densities.',
          },
          {
            q: 'In micropropagation, the balance of cytokinin to auxin in the medium controls:',
            options: [
              'sterility only',
              'whether explants form shoots or roots',
              'the plant\'s flower color',
              'cold hardiness',
            ],
            answer: 1,
            explain: 'High cytokinin pushes shoot multiplication; high auxin pushes rooting — the hormone dial tissue culturists turn at each stage.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the composting lesson for the soil your new plants will grow in, and the Botany subject\'s plant-physiology lessons for the hormones and vascular anatomy used here. Follow with the crop-science lessons for how propagation scales to agriculture: seed certification, hybrids and cloning in staple crops.',
        tone: 'path',
      },
    ],
  },
]
