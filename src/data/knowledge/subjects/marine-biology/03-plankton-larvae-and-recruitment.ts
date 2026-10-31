/**
 * Knowledge Universe — Marine Biology — Chapter 03: Plankton, Larvae & Recruitment
 * 1 lesson · ~1,293 words
 * field: Marine Biology
 * legacy sources: x47-bio-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Plankton & Larval Ecology]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-marine-plankton-larvae — Plankton and Larvae: The Drifting Majority of Ocean Life
 */
import type { KnowledgeTopic } from '../../types'

export const marineBiologyCh03: KnowledgeTopic[] = [
  {
    id: 'bio-marine-plankton-larvae',
    title: 'Plankton and Larvae: The Drifting Majority of Ocean Life',
    domain: 'Life Sciences',
    field: 'Marine Biology',
    branch: 'Plankton & Larval Ecology',
    tier: 'core',
    concepts: [
      'Plankton defined by drift, not by size',
      'Phytoplankton functional groups: diatoms, dinoflagellates, coccolithophores',
      'Zooplankton: copepods and krill as the grazers',
      'Spring blooms and nutrient limitation',
      'Diel vertical migration: the nightly commute',
      'Meroplankton: larvae of benthic adults',
      'Dispersal, connectivity and settlement cues',
      'Harmful algal blooms',
    ],
    words: 1293,
    readMins: 6,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Ask most people to picture ocean life and they imagine fish, whales, coral reefs. By numbers, by biomass and by planetary importance, however, the ocean is mostly plankton — organisms whose lives are spent at the mercy of currents because they cannot swim against them. The word means “wanderer,” and it is a way of life, not a family tree: plankton include bacteria, archaea, single-celled algae, animals from jellyfish to fish larvae, and everything in between. The drifting majority runs the planet’s carbon pump, feeds nearly every fishery, and reproduces the sea floor itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Marine phytoplankton fix roughly half of Earth’s photosynthesis, and every commercially important fish population passes through a planktonic larval stage — so the fate of plankton is the fate of both the global carbon cycle and the seafood on your plate. Fisheries science, climate models and conservation all lean on this lesson’s material.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The plankton is divided first by nutrition. Phytoplankton are the photosynthesizers, the grass of the sea, and the three dominant groups can be told apart by their engineering. Diatoms build glass shells of silica — two halves that fit like a petri dish — and dominate where silicon and other nutrients are freshly supplied, blooming explosively each spring. Dinoflagellates swim with two whirling flagella, often armored with cellulose plates; many are photosynthetic, some hunt, some glow, and a minority make the toxins behind red tides. Coccolithophores sheath themselves in plates of calcium carbonate, and their enormous chalky blooms are visible from space; when they die and sink, they become limestone.',
      },
      {
        kind: 'para',
        text: 'Grazing on this pasture is the zooplankton, and two groups matter disproportionately. Copepods — rice-grain crustaceans that may be the most abundant multicellular animals on Earth — are the dominant grazers of most seas, filter-feeding with limbs that flail a small current of water past their mouths. Krill, larger shrimplike crustaceans, swarm in the Southern Ocean in aggregations weighing millions of tonnes, converting phytoplankton into the body mass of whales, seals and penguins. Between them, the plant-to-animal link of the entire marine food web is carried by animals you could hold in a teaspoon.',
      },
      {
        kind: 'para',
        text: 'Where and when plankton grows is decided by a seesaw: light from above, nutrients from below. In temperate and polar seas, winter storms mix the water column and reload the surface with nutrients; spring light then ignites the accumulated fertilizer into the spring bloom, a burst of growth that strips the surface bare within weeks and sinks carbon to the deep sea as diatoms die. Afterward, growth is nutrient-limited — which is why the clear tropical ocean is a blue desert and the murky, nutrient-rich upwelling coasts are the productive ones. The ocean’s biggest pulse of biological productivity is this seasonal seesaw, not a steady hum.',
      },
      {
        kind: 'para',
        text: 'Vertical structure extends to behavior. The largest migration on Earth happens every night, vertically: zooplankton and their predators rise hundreds of metres toward the surface to feed under cover of darkness and sink again before dawn — the diel vertical migration, billions of tonnes deep, driven by the trade-off between eating in rich surface water and being eaten in the light. So regular is this commute that sonar operators in the Second World War misread the returning echo of the migrating layer as a false sea floor.',
      },
      {
        kind: 'para',
        text: 'The second half of the story is that most sea-floor animals — corals, crabs, starfish, clams, most fish — do not begin life on the sea floor at all. Their larvae are plankton: the meroplankton, “partial plankton,” spending days to months drifting before settling and metamorphosing. Larval types are a bestiary in themselves — the trochophore of worms, the veliger of snails and clams, the nauplius of barnacles and crabs, the fish leptocephalus. Adrift in currents, larvae are the ocean’s dispersal stage: they connect populations of bottom-dwellers across distances no adult could travel, which is why fragmented reefs and banks function as one network. Larvae do not land at random: they taste the water for settlement cues — the smell of adult habitat, bacterial films, specific algae — and many choose their address with startling specificity.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reading a Bloom',
        steps: [
          'Observe: satellite imagery shows a pale turquoise patch hundreds of kilometres wide off a temperate coast in April; chlorophyll is high, silicate is being drawn down fastest of all nutrients.',
          'Identify the players: a spring bloom is underway; rapid silicate depletion points to diatoms as the dominant phytoplankton (their shells are silica).',
          'Follow the fate: grazers (copepods) lag behind the bloom; diatoms that escape grazing sink, exporting carbon and silica to the deep.',
          'Predict: the surface will go nutrient-limited within weeks; the summer community will shift to smaller cells recycled in place.',
          'Interpret for fisheries: a strong spring bloom with good larval timing means strong recruitment — the fisheries lesson’s stock models ultimately cash in on plankton ecology.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Climate: plankton draw down carbon; models of the ocean’s biological pump — and geoengineering schemes to fertilize it — are debates about plankton.',
          'Fisheries: recruitment — how many young fish join a stock — is set largely by larval survival, linking every quota decision back to plankton.',
          'Public health: harmful algal blooms close shellfish fisheries when dinoflagellate toxins concentrate in filter feeders; monitoring plankton is monitoring your dinner.',
          'Conservation: marine reserves are designed around larval connectivity — protecting sources whose drifting offspring restock distant fishing grounds.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Plankton does not mean small — jellyfish are plankton; the correct division is plankton (drifters) versus nekton (swimmers) versus benthos (bottom-dwellers). Second, the clear tropical sea is not the fertile one: beauty and productivity are opposites in the ocean, with nutrients, not light, usually limiting. Third, “most ocean species have planktonic larvae” does not mean larvae drift randomly — most settle within a surprisingly small radius of their parents.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'phytoplankton / zooplankton', def: 'Photosynthetic plankton (the sea’s grass) versus animal plankton (its grazers and predators).' },
          { term: 'diatom', def: 'Silica-shelled alga; dominant in nutrient-rich water and the usual engine of spring blooms.' },
          { term: 'spring bloom', def: 'Seasonal explosion of phytoplankton when winter-reloaded nutrients meet spring light; the ocean’s annual productivity pulse.' },
          { term: 'diel vertical migration', def: 'The nightly upward and dawn-downward commute of zooplankton balancing feeding and predation risk.' },
          { term: 'meroplankton', def: 'Organisms planktonic only as larvae — the dispersal stage of most benthic animals and fish.' },
          { term: 'settlement cue', def: 'Environmental signal (habitat odor, biofilm, algae) that triggers larval settlement and metamorphosis.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A spring bloom is drawing down silicate faster than any other nutrient. The dominant phytoplankton is most likely:',
            options: ['Coccolithophores', 'Dinoflagellates', 'Diatoms', 'Cyanobacteria'],
            answer: 2,
            explain: 'Diatoms build frustules of silica, so their blooms selectively strip silicate from surface water.',
          },
          {
            q: 'Why do zooplankton migrate to deep water at dawn?',
            options: [
              'To follow their algal food down',
              'To avoid visual predators in lit surface water',
              'Because the surface freezes',
              'To reproduce',
            ],
            answer: 1,
            explain: 'The migration balances feeding in productive surface water against being seen and eaten there — darkness is the plankton’s cover.',
          },
          {
            q: 'Most bottom-dwelling animals spend their larval life as plankton. The key ecological consequence is:',
            options: [
              'Adults must guard their eggs',
              'Currents connect separated adult populations through larval dispersal',
              'Larvae compete with adults',
              'Populations never exchange genes',
            ],
            answer: 1,
            explain: 'Drifting larvae are the dispersal stage — connectivity that makes fragmented habitats function as networks and shapes reserve design.',
          },
          {
            q: 'The clearest tropical ocean water is usually also the least productive because:',
            options: [
              'It is too warm for enzymes',
              'Nutrients, not light, limit growth, and stratification keeps nutrients deep',
              'There are no phytoplankton in the tropics',
              'Coral reefs eat the plankton',
            ],
            answer: 1,
            explain: 'Strong stratification prevents nutrient return to the sunlit zone — hence “blue desert”: abundant light, starving fertility.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the ocean-zones lesson, which sets the physical stage, and before the fisheries lesson, whose stock models are the human end of this same food web.',
        tone: 'path',
      },
    ],
  },
]
