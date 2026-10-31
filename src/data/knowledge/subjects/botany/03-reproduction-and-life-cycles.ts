/**
 * Knowledge Universe — Botany — Chapter 03: Reproduction & Life Cycles
 * 2 lessons · ~3,023 words
 * field: Botany
 * legacy sources: life-sciences.ts, x65-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Plant Reproduction]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-plant-reproduction-flowers-seeds — Plant Reproduction: Flowers, Pollination and Seeds
 *   03.2 bio-plant-seed-structure-germination — Inside the Seed: Grain Anatomy, Dormancy and the Germination Trigger
 */
import type { KnowledgeTopic } from '../../types'

export const botanyCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-plant-reproduction-flowers-seeds',
    title: 'Plant Reproduction: Flowers, Pollination and Seeds',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Plant Reproduction',
    tier: 'core',
    concepts: [
      'Alternation of generations: gametophyte and sporophyte',
      'The four whorls of a flower',
      'Pollen grains and the embryo sac',
      'Pollination syndromes: wind, water, insects, birds, bats',
      'Barriers to self-pollination',
      'Double fertilization: zygote plus endosperm',
      'From ovule to seed, from ovary to fruit',
    ],
    words: 1481,
    readMins: 7,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A flower is not decoration — it is a reproductive machine of packaged gametes, built to trade pollen with the world. Flowering plants dominate land not despite sex but because of how they engineered it: miniature gamete-bearing generations sheltered inside the parent, pollinators recruited as couriers, and a double fertilization that pre-provisions the next generation with food. This core lesson walks the journey from flower to fruit through the machinery that OpenStax Biology lays out in its plant-reproduction chapter.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Nearly every calorie humanity eats passes through a flower: grains are fruits, apples are swollen ovaries, and coffee, chocolate and cotton all begin with pollination. Understanding floral biology is understanding food security — and why pollinator decline is an agricultural emergency.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Plant sexual reproduction runs on alternation of generations: a diploid sporophyte stage alternates with a haploid gametophyte stage. The sporophyte produces spores by meiosis; the spores divide by mitosis into multicellular gametophytes, which make gametes; fusion restores the diploid zygote, which grows into the next sporophyte. In flowering plants the sporophyte is the whole visible plant, and the gametophytes are shrunken to microscopic tenants — the pollen grain (male) and the embryo sac (female), both housed inside the flower. Mosses invert the arrangement (the green leafy carpet is the gametophyte), and ferns keep a free-living gametophyte, but flowering plants carry the reduction to its extreme.',
      },
      {
        kind: 'para',
        text: 'A typical flower is four whorls in concentric rings. Outermost is the calyx of green sepals, protecting the bud; then the corolla of petals, the billboard for pollinators (three or multiples of three in monocots, four or five and their multiples in dicots); then the androecium of stamens, each a filament topped by an anther holding the pollen sacs; and innermost the gynoecium of carpels, each with a sticky stigma, a neck-like style, and an ovary holding the ovules. All four whorls make a complete flower; both sexes in one flower make it perfect. Imperfect flowers are staminate (male only) or carpellate (female only) — corn bears both on one plant (monoecious, as do peas), while papaya separates the sexes onto different plants (dioecious).',
      },
      {
        kind: 'para',
        text: 'Inside the anther’s microsporangia, microspore mother cells divide by meiosis into four microspores, each maturing into a pollen grain with two cells: a large tube cell that will grow the pollen tube, and a generative cell that will divide into two sperm. A nourishing tapetum layer builds the grain’s armor — the tough outer exine impregnated with sporopollenin, one of the most resistant biological polymers known, which is why fossil pollen survives millions of years and why wind-carried grains arrive intact.',
      },
      {
        kind: 'para',
        text: 'The female side is even more selective. Within an ovule, meiosis produces four megaspores and three die; the survivor undergoes mitosis into the eight-nucleate, seven-cell embryo sac: an egg cell flanked by two synergid cells that guide the incoming pollen tube, a central cell holding two fused polar nuclei, and three antipodal cells that commonly degenerate around fertilization — the exact timing varies with species, some degenerating before fertilization and a few proliferating instead. Integuments wrap the ovule, leaving a gap — the micropyle — as the door for the pollen tube; after fertilization the integuments harden into the seed coat.',
      },
      { kind: 'heading', text: 'Pollination, Double Fertilization and the Seed' },
      {
        kind: 'para',
        text: 'Pollination is simply pollen delivery from anther to stigma — but the delivery services reveal deep evolution. Bee flowers are blue or yellow (bees cannot see red), sweet-scented, day-opening, often with nectar guides visible only in ultraviolet; fly flowers smell of carrion and wear dull purple-brown; moth flowers are pale, flat and open at night, as in the yucca–yucca-moth partnership where the moth pollinates and its larvae eat some seeds; bat flowers are large, pale and musky; bird flowers are sturdy, red tubular and scentless. Wind pollination abandons all bribes: grasses, oaks and conifers make small green scentless flowers and spend their budget on staggering pollen quantities released in early spring onto feathery stigmas. A few aquatic weeds let pollen float. Orchids cheat outright — food deception offers scent without nectar, and sexual deception imitates a female wasp’s pheromone so precisely that male wasps attempt to mate with the flower and leave wearing its pollen.',
      },
      {
        kind: 'para',
        text: 'Because cross-pollination buys genetic diversity, plants sabotage self-fertilization: stamens and carpels mature at different times; the primrose grows two flower geometries (heterostyly) that put pollen and stigma at heights only insects can bridge; and self-incompatibility genes in the stigma arrest or reject genetically identical pollen outright. These barriers matter to breeders — inbred lines and hybrids both depend on defeating or exploiting them.',
      },
      {
        kind: 'para',
        text: 'When a compatible pollen grain germinates, the tube cell grows down the style, the generative cell divides into two sperm, and the tube follows chemical cues from the synergids through the micropyle. Then comes the event that defines flowering plants: double fertilization. One sperm fuses with the egg to form the diploid zygote; the other fuses with the two polar nuclei to form the triploid endosperm — the seed’s food supply, built on demand. The zygote divides into a terminal cell that becomes the embryo (heart-shaped in dicots, with two cotyledons) and a basal cell whose suspensor channels nutrition from the mother. The mature ovule is now a seed — coat, stored food, embryo — while the surrounding ovary enlarges into the fruit, and development pauses until germination.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: follow a corn plant from flower type to the kernel on your plate.',
          'Classify the flowers: corn is monoecious — staminate flowers in the tassel at the stem tip shed pollen; carpellate flowers cluster in the immature ears.',
          'Trace pollination: each strand of silk on an ear is an elongated stigma; a wind-borne grain lands on a silk and grows its tube down to a single ovule.',
          'Apply double fertilization: one sperm makes the 2n embryo; the second makes the 3n endosperm that fills the kernel — the starchy bulk of the grain.',
          'State the result: each kernel is a seed (a one-seeded fruit) developed from one fertilization event; a full ear is hundreds of independent fertilizations, which is why poor pollination shows up as missing kernels at the tip.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Hybrid seed production exploits controlled cross-pollination, often using male-sterile lines so every seed is a known cross',
          'Honeybee declines threaten bee-pollinated fruit and vegetable crops, since unpollinated flowers set no seed and no fruit',
          'Crop domestication rewired reproduction — modern corn grew from tiny-seeded teosinte through selection on a handful of genetic changes',
          'Orchard managers rent hives and plant pollinator strips, matching flower color, shape and season to local pollinator syndromes',
          'Allergy seasons track wind-pollinated species, whose enormous lightweight pollen output is designed for air, not animals',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A fruit is any mature ovary, sweet or not — tomatoes, cucumbers and corn kernels are fruits, while strawberries carry their true fruits on the outside. Nectar guides are invisible to humans but loud to bees. Gymnosperms have cones, no flowers, no fruits and no double fertilization — their second sperm simply degenerates. And self-pollination is not a flaw of lazy flowers: it guarantees reproduction where pollinators are scarce, at the cost of diversity.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Alternation of generations', def: 'The life cycle alternating diploid sporophyte and haploid gametophyte stages via meiosis and fertilization.' },
          { term: 'Whorl', def: 'One concentric ring of flower parts: sepals, petals, stamens or carpels.' },
          { term: 'Embryo sac', def: 'The seven-cell, eight-nucleate female gametophyte containing the egg, synergids, central cell and antipodals.' },
          { term: 'Double fertilization', def: 'The angiosperm event in which one sperm forms the diploid zygote and the other forms the triploid endosperm.' },
          { term: 'Endosperm', def: 'The triploid food-storage tissue of the seed, built at fertilization to feed the embryo.' },
          { term: 'Pollination syndrome', def: 'The suite of flower traits — color, scent, shape, timing — matching a particular pollinator such as bees, moths, bats or wind.' },
          { term: 'Self-incompatibility', def: 'Genetic mechanisms by which a flower rejects its own pollen, enforcing cross-pollination.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Double fertilization in angiosperms produces:',
            options: ['Two embryos per ovule', 'A diploid zygote and a triploid endosperm', 'A haploid egg and a diploid pollen grain', 'Twice the normal chromosome number in every cell'],
            answer: 1,
            explain: 'One sperm fertilizes the egg (2n zygote); the other fuses with the two polar nuclei to build the 3n endosperm — unique to flowering plants.',
          },
          {
            q: 'The four whorls of a complete flower, from outside in, are:',
            options: ['Petals, sepals, carpels, stamens', 'Sepals, petals, stamens, carpels', 'Stamens, carpels, sepals, petals', 'Carpels, stamens, petals, sepals'],
            answer: 1,
            explain: 'Calyx (sepals), corolla (petals), androecium (stamens), gynoecium (carpels) — outermost to innermost.',
          },
          {
            q: 'Wind-pollinated flowers typically:',
            options: ['Are large, red and fragrant', 'Produce abundant light pollen with little scent or nectar', 'Open only at night', 'Are pollinated by bats'],
            answer: 1,
            explain: 'Wind is a numbers game: small, scentless, nectarless flowers and massive pollen release onto feathery stigmas.',
          },
          {
            q: 'The seed coat develops from:',
            options: ['The ovary wall', 'The integuments of the ovule', 'The endosperm', 'The tapetum'],
            answer: 1,
            explain: 'The ovule’s integuments harden into the seed coat; the ovary wall instead becomes the fruit around it.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-plant-seed-structure-germination',
    title: 'Inside the Seed: Grain Anatomy, Dormancy and the Germination Trigger',
    domain: 'Life Sciences',
    field: 'Botany',
    branch: 'Plant Reproduction',
    tier: 'core' as const,
    concepts: [
      'What the mature seed holds: axis, cotyledons, storage',
      'The cereal grain as a machine: scutellum, aleurone, fused coat',
      'Dormancy: the ABA:GA ratio as a thermostat',
      'Three environmental keys: chilling, dry storage, light',
      'Imbibition in three phases',
      'The mobilization cascade: GA, aleurone, alpha-amylase',
    ],
    words: 1542,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The reproduction lesson ended where double fertilization ends: a seed with coat, stored food and embryo, development paused. This lesson opens the package. The mature seed is a machine built in two parts — a dormant embryo and its pre-provisioned food supply — and germination is the triggering sequence that converts storage into growth. The cereal grain is the machine\u2019s masterpiece and its best-studied case, which is fitting: grains feed humanity, and every malt house and mill runs on the biochemistry in this lesson.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Seed physiology is agriculture\u2019s control panel. Germination percentage decides stand establishment; dormancy decides whether a variety sprouts in the rain before harvest or waits for spring; the malting industry is the GA–aleurone cascade run as a business. Weed science runs on the same keys — why some seeds wait decades, and why tilling changes which ones wake.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A mature angiosperm seed carries an embryonic axis — radicle (embryonic root), hypocotyl and epicotyl with the shoot apex — plus one or two cotyledons and, in many species, a storage endosperm. Species split by where the food lives: endospermic seeds keep a persistent endosperm (cereals, castor bean), while non-endospermic seeds — the legumes are the classics — move their reserves into swollen cotyledons and discard the endosperm entirely. The embryo is also pre-built for the first day of seedling life: in grasses the shoot\u2019s first leaves are sheathed in a coleoptile and the radicle in a protective coleorhiza, so emergence is armored before it begins.',
      },
      {
        kind: 'para',
        text: 'The cereal grain is a single-seeded fruit — the caryopsis — in which the seed coat (testa) and fruit wall (pericarp) are fused into one husk, which is why a wheat kernel is botanically a fruit. Inside, the embryo sits against the starchy endosperm through a specialized absorptive organ, the scutellum, a modified cotyledon that will both help trigger and then execute the food transfer. Wrapped around the outside of the endosperm sits the aleurone layer, one to a few cell layers of thick-walled, protein-rich cells — historically named for the "aleurone grains" in their vacuoles. That thin layer is the endocrine gland of the grain, and the mobilization cascade below is its job description.',
      },
      {
        kind: 'para',
        text: 'Dormancy is the deliberate delay between maturation and germination — an intrinsic block on completing the process even when water arrives. The thermostat behind it is the ratio of two hormones: abscisic acid maintains dormancy (and enforces it under stress), gibberellin promotes germination, and the ABA:GA balance decides. The ratio\u2019s power shows in the experiment: treating dormant seeds with gibberellin often substitutes for the environmental signal the seed was waiting for — the hormone is not just correlated with germination, delivering it is enough. After maturation the dry seed sits in quiescence — viable, desiccated, waiting — and many dormancies are layered on top of that baseline by coats, chemistry or environment.',
      },
      {
        kind: 'para',
        text: 'Three environmental keys unlock dormancy in different species. Chilling — stratification, named for the old nursery practice of overwintering seeds in layered mounds of moist soil or sand — means weeks at 0–10 °C, the temperate-zone guarantee that spring, not autumn, has arrived; intact apple seeds need about 80 days of it, isolated embryos about 50, the coat and endosperm adding roughly 30 days of resistance. Dry storage — after-ripening — works for others, from a few weeks in barley up to five years in curly dock, with the seed\u2019s water content below 20% the whole time and ABA declining as it proceeds. And light — photoblasty — gates many small seeds through phytochrome: a brief red exposure can suffice for lettuce cultivar \u2018Grand Rapids\u2019, birch demands long days, eastern hemlock short ones; most light-requiring seeds show coat-imposed dormancy, the coat or endosperm physically holding the embryo to the light test.',
      },
      {
        kind: 'para',
        text: 'When a key turns, germination begins with water. Imbibition runs in three phases: Phase I, rapid physical uptake as the dry seed\u2019s matrices soak; Phase II, a plateau in which uptake slows but metabolism reactivates — repair, protein synthesis, organelle reassembly; Phase III, uptake resuming as the radicle breaks through the coat and growth starts. Germination is conventionally scored at radicle emergence, and it is a one-way door: a germinating seed has committed its reserves and cannot re-dry safely — which is why the triggers evolved to be so specific. Nitrate in the soil, signifying a gap in the competition, breaks dormancy in some species; nitric oxide does in others.',
      },
      {
        kind: 'para',
        text: 'The mobilization cascade is the cereal\u2019s startup script, and every step is verified machinery. One: the embryo synthesizes gibberellins and releases them through the scutellum into the starchy endosperm. Two: the GAs diffuse to the aleurone layer. Three: aleurone cells respond by synthesizing and secreting alpha-amylase and other hydrolases into the endosperm. Four: starch and the other macromolecules are broken down — alpha-amylase cleaves starch to maltose, and maltase converts maltose to glucose. Five: the scutellum absorbs the endosperm solutes and transports them to the growing embryo. The aleurone is the digestive gland, the scutellum the courier, the embryo the client — and the malting industry runs the same script deliberately, steeping barley to trigger germination and kilning to arrest it once the enzymes have done their work.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Designing a Germination Test',
        steps: [
          'A seed lot of an unknown temperate shrub fails to germinate at 25 °C in water after four weeks — score the lot dormant, not dead (a tetrazolium viability test can confirm embryos are alive).',
          'Apply the stratification key first: moist-chill a subsample at 4 °C for eight weeks, then return to 25 °C — the temperate-zone spring signal.',
          'Run a parallel after-ripening arm: dry storage at room temperature for three months, then re-test — for species whose dormancy is chemical rather than cold-keyed.',
          'Add a light arm: one subsample gets a brief red exposure, another red followed by far-red — a phytochrome-gated species will germinate after red and be cancelled by far-red.',
          'Score radicle emergence daily: whichever arm opens the valve identifies the dormancy type, and the treatment becomes the propagation protocol.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Malting: steeped barley\u2019s own aleurone enzymes produce the alpha-amylase that brewers and distillers then harness on kilned, non-viable malt.',
        'Seed testing laboratories: stratification, after-ripening and light arms are standard protocol variables for breaking dormancy in germination tests.',
        'Preharvest sprouting: rain on a ripe, low-dormancy cereal crop triggers the mobilization cascade in the ear — a quality disaster breeders fight by tuning the ABA:GA balance.',
        'Restoration ecology: nursery propagation of wild species depends on matching each species\u2019 dormancy key — cold, dry or light.',
        'Weed seed banks: burial depth (light), soil nitrate and seasonal temperature cycles keep weed seeds emerging in flushes that farmers must anticipate.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, calling every unsprouted seed dormant: quiescence (just dry and waiting) and dormancy (an active block) are different states with different cures. Second, reversing the hormones: ABA maintains dormancy, gibberellin breaks it — applying gibberellin can substitute for the environmental signal, which is the cleanest proof of which side each hormone owns. Third, imagining germination as one water event: imbibition has three phases, and the metabolic reactivation in Phase II is where the seed actually wakes. Fourth, forgetting the door is one-way: a germinating seed cannot safely re-dry, which is why the triggers are so specific and why preharvest sprouting is a catastrophe rather than an inconvenience.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Scutellum', def: 'The grass embryo\u2019s modified cotyledon — the absorptive organ that releases gibberellins and later feeds the embryo.' },
        { term: 'Aleurone layer', def: 'The protein-rich peripheral endosperm layer that synthesizes and secretes alpha-amylase and other hydrolases on the GA signal.' },
        { term: 'Caryopsis', def: 'The cereal grain as a one-seeded fruit with testa and pericarp fused.' },
        { term: 'ABA:GA ratio', def: 'The hormonal thermostat — high ABA maintains dormancy, high GA promotes germination.' },
        { term: 'Stratification', def: 'Moist chilling at 0–10 °C that breaks dormancy, named for layered nursery mounds; the temperate spring signal.' },
        { term: 'After-ripening', def: 'Dormancy release by dry storage below 20% water content, from weeks (barley) to years (curly dock).' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the cereal grain, the GA–aleurone cascade begins when…',
          options: ['the aleurone releases gibberellins into the embryo', 'the embryo\u2019s gibberellins reach the aleurone via the scutellum and endosperm', 'starch itself activates alpha-amylase', 'maltase diffuses from the coleorhiza'],
          answer: 1,
          explain: 'Step one is the embryo\u2019s own GAs released through the scutellum; the aleurone is the responder, not the sender.',
        },
        {
          q: 'Apple seeds chilled moist for about 80 days germinate far better than unchilled ones because…',
          options: ['cold kills pathogens in the seed coat', 'stratification satisfies the chilling key of their dormancy', 'water potential rises during freezing', 'ABA synthesis accelerates in the cold'],
          answer: 1,
          explain: 'Moist chilling is stratification — the temperate-zone signal that spring follows; isolated embryos need only ~50 days, showing the coat and endosperm add ~30 days of resistance.',
        },
        {
          q: 'Germination is conventionally scored at…',
          options: ['first water uptake', 'Phase II metabolic activation', 'radicle emergence through the seed coat', 'first photosynthesis'],
          answer: 2,
          explain: 'Radicle emergence is the standard criterion — the irreversible commitment point after which the seedling cannot safely re-dry.',
        },
        {
          q: 'A lettuce seed germinates after a brief red flash but not after red followed by far-red. This proves…',
          options: ['the seed requires vernalization', 'its dormancy is phytochrome-gated (photoblasty)', 'it is an after-ripening species', 'GA is absent'],
          answer: 1,
          explain: 'The red/far-red reversibility is phytochrome\u2019s signature — a coat-imposed light requirement testing whether the canopy has cleared.',
        },
      ] },
    ],
  },
]
