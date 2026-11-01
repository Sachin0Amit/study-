/**
 * Knowledge Universe — Zoology — Chapter 05: Animal Reproduction & Life Cycles
 * 2 lessons · ~3,316 words (salvaged increment)
 * fields: Animal Behavior, Zoology
 * legacy sources: x62-zoology-pass.ts
 *
 * Salvaged 2026-11-01 from the diverged local line (branch
 * backup-loop-20261101, pass X62). Carved against the Human A&P
 * reproduction chapter (human reproductive physiology stays there) and
 * the zoology behavior chapter (courtship/signaling stays there) — this
 * chapter is the cross-phylum reproductive-modes and life-cycle view.
 *
 * Taxonomy match: branches [Reproductive Strategies, Life Cycles & Development]
 *
 * Lessons:
 *   05.1 bio-zoology-reproduction-modes — Reproductive Modes: From Binary Fission to Viviparity
 *   05.2 bio-zoology-life-cycles — Life Cycles: Metamorphosis, Diapause, Semelparity
 */
import type { KnowledgeTopic } from '../../types'

/**
 * Knowledge Universe — Zoology — Chapter 05: Animal Reproduction & Life Cycles
 * 2 lessons · ~3,316 words (salvaged increment)
 * fields: Animal Behavior, Zoology
 * legacy sources: x62-zoology-pass.ts
 *
 * Salvaged 2026-11-01 from the diverged local line (branch
 * backup-loop-20261101, pass X62). Carved against the Human A&P
 * reproduction chapter (human reproductive physiology stays there) and
 * the zoology behavior chapter (courtship/signaling stays there) — this
 * chapter is the cross-phylum reproductive-modes and life-cycle view.
 *
 * Taxonomy match: branches [Reproductive Strategies, Life Cycles & Development]
 *
 * Lessons:
 *   05.1 bio-zoology-reproduction-modes — Reproductive Modes: From Binary Fission to Viviparity
 *   05.2 bio-zoology-life-cycles — Life Cycles: Metamorphosis, Diapause, Semelparity
 */
export const zoologyCh05: KnowledgeTopic[] = [
  // Salvaged 2026-11-01 from the diverged local line (pass x62-zoology-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-zoology-reproduction-modes',
    title: 'Strategies for the Next Generation: Reproductive Modes in Animals',
    domain: 'Life Sciences',
    field: 'Animal Behavior',
    branch: 'Reproductive Strategies',
    tier: 'intermediate',
    concepts: [
      'Asexual reproduction: budding, fragmentation, fission, parthenogenesis',
      'Sexual reproduction: the cost and the payoff',
      'External versus internal fertilisation',
      'Oviparity, ovoviviparity and viviparity',
      'Hermaphroditism: simultaneous and sequential',
      'Sex determination: XY, ZW, haplodiploidy, temperature',
      'Reproductive effort: numbers versus investment',
    ],
    words: 1507,
    readMins: 8,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Reproduction is the one function every lineage alive has been doing continuously for four billion years — drop the ball once, and everything your ancestors managed is void. Animals have therefore explored its design space exhaustively: cloning themselves, splitting in half, changing sex mid-life, packaging young in shells, brooding them in pouches, or growing placentas. Human reproduction, with its nine months of gestation and decades of dependency (the anatomy book\u2019s territory), is one extreme of a spectrum whose full width this lesson owns.',
      },
      { kind: 'heading', text: 'The asexual option' },
      {
        kind: 'para',
        text: 'Budding grows a miniature adult off a parent\u2019s body wall — hydra\u2019s usual mode, coral colonies\u2019 empire-building one. Fragmentation lets a broken piece regrow the whole (planarians, sea stars — the regeneration lesson\u2019s neighbours). Binary fission is the protozoan default, still running in multicellular form in some anemones. Parthenogenesis — development of an unfertilised egg — is the subtlest: bdelloid rotifers have gone without males for tens of millions of years; aphids clone themselves all summer and switch to sex only as winter approaches; Komodo dragons and turkeys have produced fatherless offspring; and in honeybees, males ALWAYS hatch from unfertilised eggs while females hatch from fertilised ones. Asexual reproduction is fast, needs no partner, and preserves successful genotypes exactly — its Achilles heel being a whole population\u2019s identical vulnerability to the first disease that cracks one defence.',
      },
      {
        kind: 'callout',
        title: 'The cost of sex',
        text: 'A clonal female passes on 100% of her genes per offspring; a sexual female passes 50%. In pure gene-accounting, sex should lose every time — its persistence is evolution\u2019s best-studied puzzle, with parasite arms-races (the Red Queen hypothesis) the leading explanation: shuffle genes fast enough that pathogens never quite catch up.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Where fertilisation happens' },
      {
        kind: 'para',
        text: 'External fertilisation — spawning — is the ancestral aquatic default: release gametes by the million into the water and let chemistry do the meeting. It demands synchrony (hence mass spawning events timed by tides or moonlight), proximity (hence the frog\u2019s amplexus, the male clamping the female so eggs and sperm leave side by side) and tolerance of enormous wastage. Internal fertilisation came ashore with the vertebrates and stayed: sperm delivered by copulation or spermatophore, gametes safe from drying and dilution, numbers dropping from millions of eggs to dozens or singles — and the arms race of mate choice, sperm competition and parental care opening in exchange.',
      },
      { kind: 'heading', text: 'The three ways to bear young' },
      {
        kind: 'para',
        text: 'Oviparous animals lay eggs — embryos provisioned with yolk and left to develop outside, in nests, burrows, or open water; most fish, amphibians, reptiles and birds, plus the egg-laying mammals. Viviparous animals retain embryos inside the mother until they can live free, nourished directly by her — mammals\u2019 signature, but independently evolved in sharks, lizards, snakes and scorpions among others. Ovoviviparity sits between: eggs are retained and hatch inside, but the yolk — not the mother — is the pantry (many sharks and vipers). The spectrum is really a continuum of maternal investment, and it tracks predictably: high juvenile mortality selects for protection-in-place; stable resource-rich environments can afford the r-strategy of many small cheap eggs.',
      },
      { kind: 'heading', text: 'Hermaphroditism: both sets of plumbing' },
      {
        kind: 'para',
        text: 'Simultaneous hermaphrodites — most snails and earthworms, sea bass, hamlets — carry both systems at once and typically trade gametes reciprocally when they meet, so ANY encounter between two adults is a mating opportunity: a huge win for slow-moving or sparse populations. Sequential hermaphrodites change sex with size or circumstance: many reef fish are protogynous (female first, then male — because a big male monopolises spawning, but a small male wins nothing), while some others run protandry (male first, then female — because egg output grows with size while sperm output barely does). The model-organism lesson\u2019s C. elegans does something subtler still: hermaphrodite first (sperm limited, self-fertilising), males occasionally — a reproductive system built for the laboratory\u2019s favourite worm.',
      },
      { kind: 'heading', text: 'Why two sexes, why unequal gametes' },
      {
        kind: 'para',
        text: 'The deepest reproductive engineering question is why gametes come in two sizes at all. The answer runs through anisogamy: when one lineage competes by making gametes numerous and mobile (sperm) and another by making gametes large and provisioned (eggs), the strategies reinforce themselves — any intermediate gets outcompeted from both directions, and the size split is evolutionarily stable. From the moment gametes diverge, the interests of the two sexes diverge with them: sperm are cheap, eggs are expensive, and everything downstream — competition, choosiness, parental care patterns — is built on that asymmetry. (How the resulting conflicts play out in behaviour — courtship, displays, guarding — is the animal-behaviour lesson\u2019s territory, and the mating-system taxonomy lives there too.)',
      },
      { kind: 'heading', text: 'Who becomes which sex' },
      {
        kind: 'para',
        text: 'Mammals run XY chromosomal determination (and the bird/reptile line largely runs ZW, the reverse assignment: females are the heterogametic sex). Haplodiploidy — males from unfertilised haploid eggs, females from fertilised diploid ones — is the hymenopteran invention, and its genetics make sisters more related to each other than to their own offspring, the quirk on which eusocial ants, bees and wasps built their colonies. Many reptiles ignore chromosomes altogether and let incubation temperature assign sex: alligator eggs become all female below about 30 °C and all male above 34 °C — a system now doubling as a climate-change stress test, since a warming nest can skew a population single-sex.',
      },
      { kind: 'heading', text: 'Storage, synchrony and delay' },
      {
        kind: 'para',
        text: 'Mating and fertilisation need not happen in the same hour — or even the same season. Many females store sperm in dedicated receptacles: a queen bee’s spermatheca holds a lifetime’s supply from one mating flight; hens fertilise eggs for weeks after one copulation; some turtles and bats store sperm through winter so that spring ovulation meets autumn’s semen. Others store the FERTILISED egg in developmental arrest: the marsupial\u2019s embryonic diapause holds a blastocyst in suspended animation while an older joey occupies the pouch, and mink implantation waits out the season. Synchrony is the third lever — mass corals spawn on one reef-wide night cued by lunar phase, bamboo forests flower and seed on decade clocks that starve their predators by their very rarity, and periodical cicadas (the life-cycle lesson\u2019s champion) emerge in overwhelming broods. Between storage, arrest and synchrony, animals decouple the calendar of mating from the calendar of birth at will.',
      },
      {
        kind: 'formula',
        name: 'Investment trade-off (r/K shorthand)',
        latex: '\\text{many young, little care each} \\;\\longleftrightarrow\\; \\text{few young, heavy care each}',
        meaning: 'Reproductive effort budgets split between quantity and quality; the whole egg-viviparity-parental-care spectrum is this one slider, set by juvenile survival conditions.',
      },
      {
        kind: 'example',
        title: 'Design an animal: read the life history from the reproductive mode',
        steps: [
          'Millions of eggs, external fertilisation, no care → almost certainly aquatic broadcast spawner, high wastage, no pair bonds (cod, coral).',
          'Few large yolked eggs in a tough shell, guarded nest → some parental care, limited clutch, terrestrial or nesting (turtle, bird).',
          'Single offspring, long gestation, placenta, lactation → maximal investment per offspring, low fecundity, long dependency (whale, elephant, human).',
          'Live-born litters season after season, mother-only care, rapid maturation → mid-slider investment with a fast population clock (mouse, rabbit).',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Parthenogenesis', def: 'Development of an unfertilised egg into an adult — bdelloid rotifers\u2019 permanent mode, aphids\u2019 summer strategy.' },
          { term: 'Amplexus', def: 'The frog\u2019s mating clasp, positioning cloacas together so sperm meets eggs at the instant of laying.' },
          { term: 'Ovoviviparity', def: 'Retention of yolk-nourished eggs inside the mother until hatching — no placenta, but internal protection.' },
          { term: 'Sequential hermaphroditism', def: 'Sex change with age or size — protogynous (female→male) or protandrous (male→female).' },
          { term: 'Haplodiploidy', def: 'Sex determination where males are haploid (unfertilised) and females diploid — the genetic engine of hymenopteran eusociality.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In haplodiploid hymenopterans, a worker bee is more related to her sisters than to her own daughters because:',
            options: ['sisters share both paternal and maternal genes, and all sisters get identical paternal DNA', 'daughters receive only maternal genes', 'workers are haploid', 'queens clone their daughters'],
            answer: 0,
            explain: 'A queen mates (usually) once, so every daughter gets the SAME paternal genome; sisters share all paternal genes plus half the maternal ones — relatedness ¾ versus ½ to her own offspring. That asymmetry is the engine of worker sacrifice.',
          },
          {
            q: 'Protogyny (female-first sex change) is favoured when:',
            options: ['large males monopolise matings but small males are useless, while female fecundity is size-independent enough early', 'small males are fitter', 'females must be larger to lay eggs', 'populations are all-female'],
            answer: 0,
            explain: 'If reproductive success rises with size much faster for males than females, the life-history optimum is: start female (functional at small size), switch to male once big enough to hold a territory or harem.',
          },
          {
            q: 'Which is the KEY distinction between ovoviviparity and viviparity?',
            options: ['internal vs external fertilisation', 'yolk nourishes the embryo vs maternal nourishment (e.g. placenta)', 'eggs vs sperm', 'nesting vs free swimming'],
            answer: 1,
            explain: 'Both retain young inside the mother until birth. In ovoviviparity the stocked yolk feeds the embryo; in true viviparity the mother supplies nutrients directly across a structure like a placenta.',
          },
          {
            q: 'The "twofold cost of sex" refers to:',
            options: ['the energy cost of courtship displays', 'an asexual female transmits twice the genetic representation per offspring compared to a sexual female', 'the doubling of chromosome numbers', 'the cost of producing two gamete types'],
            answer: 1,
            explain: 'A clone passes all her genes to each offspring; a sexual mother halves that representation — the accounting handicap that any explanation of sex\u2019s persistence (Red Queen arms-races, parasite escape) must overcome.',
          },
        ],
      },
    ],
  },

  // Salvaged 2026-11-01 from the diverged local line (pass x62-zoology-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-zoology-life-cycles',
    title: 'Metamorphosis and Life Histories: From Egg to Adult in Stages',
    domain: 'Life Sciences',
    field: 'Zoology',
    branch: 'Life Cycles & Development',
    tier: 'intermediate',
    concepts: [
      'Direct versus indirect development',
      'Complete metamorphosis: the holometabolous four-stage life',
      'Incomplete metamorphosis: hemimetabolous nymphs',
      'The hormonal switches: ecdysone, juvenile hormone, thyroid',
      'Diapause: pressing pause on development',
      'Complex life cycles and the dispersal gambit',
      'Semelparity versus iteroparity: breeding once or many times',
    ],
    words: 1809,
    readMins: 9,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'A newborn horse is a small horse; a caterpillar is a eating machine that must be demolished before a butterfly can be assembled from its parts. Between those two designs lies the whole subject of life histories — whether an animal grows by simple enlargement or passes through stages so different they look like different species, and how it times, pauses and budgets those stages to survive the year. The embryo\u2019s construction belongs to developmental biology and marine larval ecology to the plankton lesson; this lesson owns the life-history strategies — the schedules, the switches and the gambles.',
      },
      { kind: 'heading', text: 'Direct and indirect development' },
      {
        kind: 'para',
        text: 'Direct development is enlargement: hatch out as a miniature adult (guinea pig, chick, crab in many groups, most reptiles) and grow. Indirect development inserts larval stages — ecologically different bodies between egg and adult, each specialised for a different job. The division tracks the environment\u2019s patchiness: where adult and offspring compete for the same resource in the same place, a miniature adult is fine; where the young must exploit a DIFFERENT niche or disperse to new habitat, a larva is the instrument. Marine invertebrates are the champions: barnacle larvae are planktonic swimmers while adults are cemented rocks; sea urchins feed as plankton for weeks before settling and transforming; parasitic barnacles and trematodes stack stages even more aggressively (the plankton lesson owns that dispersal ecology in the sea).',
      },
      { kind: 'heading', text: 'Two insect designs' },
      {
        kind: 'para',
        text: 'Hemimetabolous insects — grasshoppers, cockroaches, true bugs — hatch as nymphs: wingless small adults that moult through instars, each a little closer to final form, wings budding outward at every shed. Holometabolous insects — the big four orders, beetles, flies, moths, wasps, plus their kin — run the four-stage program: egg, larva, pupa, adult. Inside the pupa the larva\u2019s body is substantially dismantled and rebuilt from clusters of imaginal discs — leg discs, wing discs, eye discs — held dormant through the larval instars and triggered to differentiate at metamorphosis. The payoff is complete ecological separation: caterpillar eats leaves, butterfly drinks nectar; maggot digests carrion, fly ranges kilometres. Roughly two-thirds of ALL animal species on Earth are holometabolous insects — the four-stage life is the most successful single body plan animals have found.',
      },
      {
        kind: 'para',
        text: 'A few lineages stack a second transformation on top: hypermetamorphosis, in which the FIRST larval instar is a different creature from the later ones. Blister beetle triungulin larvae are long-legged, clawed camp hunters that ride bees back to the nest; once inside the pollen store they moult into sedentary grubs and stay grubs. Strepsipteran parasites and mantid lacewings run the same trick, deploying a dispersal morph first and a feeding morph after. It is metamorphosis used twice in one life history — further proof, if any were needed, that a larva is not a young adult but a purpose-built machine whose purpose can itself change.',
      },
      {
        kind: 'formula',
        name: 'The moulting-metamorphosis switch',
        latex: '\\text{ecdysone} \\uparrow + \\text{juvenile hormone} \\downarrow \\;\\Rightarrow\\; \\text{metamorphosis}',
        meaning: 'Each moult needs ecdysone; WHAT FORM emerges is set by juvenile hormone — high JH repeats the larval stage, falling JH permits the pupa, near-zero JH releases the adult. Inhibition held, then lifted, is the entire logic of the four-stage life.',
      },
      {
        kind: 'para',
        text: 'The insect endocrine relay is a textbook circuit: brain neurosecretory cells release prothoracicotropic hormone → the prothoracic glands make ecdysone → each surge drives a moult → the corpora allata\u2019s juvenile hormone titre decides whether the outcome is larva, pupa or adult. Amphibian metamorphosis runs the vertebrate version: thyroid hormone rises through tadpole life and triggers tail resorption, limb outgrowth and the gill-to-lung switch (the evo-devo lesson owns the thyroid system\u2019s deep evolutionary story; this lesson owns its life-cycle function).',
      },
      { kind: 'heading', text: 'Diapause: the pause button' },
      {
        kind: 'para',
        text: 'When the coming season is fatal, development can be suspended on purpose. Diapause is not mere slowing — it is a physiologically distinct, hormonally gated arrest entered BEFORE conditions worsen and exited on cues (chill duration, day length) rather than on an immediate improvement. Silkworm embryos overwinter in diapause triggered by the mother\u2019s own day-length reading before the eggs were even laid; mosquito eggs of floodplain species wait YEARS in cracked mud for the next inundation; the pupae of many temperate insects require a minimal cold spell before they CAN develop — a safety interlock against a February thaw. In the water-flea Daphnia, the switch to sexual, resting-egg production is cued by crowding and shortening days — a whole reproductive mode change serving one pause.',
      },
      { kind: 'heading', text: 'When larvae never grow up' },
      {
        kind: 'para',
        text: 'Sometimes the larval body is so successful that the lineage settles into it permanently. The axolotl breeds as a fully aquatic, gilled juvenile — metamorphosis switched off, the adult stage simply deleted — a condition called neoteny; it can still be forced to transform with thyroid hormone, proving the machinery survives un-used. (The deeper evolutionary mechanics — how changing the TIMING of development remodels body plans, heterochrony and its relatives — belong to the developmental-biology book\u2019s toolkit lesson; here it counts as a life-history move: keep the stage that works, drop the one that does not.) Related escapes run in the opposite direction: progenesis matures the gonads early in a juvenile body, and paedogenesis — reproduction by larvae themselves — flashes through some salamanders and gall-midges, where the mother\u2019s body is literally digested to feed the young growing inside her.',
      },
      { kind: 'heading', text: 'Counting generations: voltinism and cohorts' },
      {
        kind: 'para',
        text: 'How many generations fit in a year is itself an adapted trait, with its own vocabulary: univoltine species run one generation per year (most temperate butterflies, synchronised by a winter diapause), bivoltine two, multivoltine many — and aphids and mosquitoes in a long summer can push a dozen, each generation a few days of cloning. Voltinism tracks season length and temperature sum: degree-day models predict how many generations a pest will manage in a given climate, which is why warming summers have added generations to agricultural pests worldwide. At the slow extreme, the seventeen-year cicada spends one generation per seventeen years — univoltine on a clock of its own — and mayflies compress the adult life to hours within a single-day emergence, the cohort so synchronised that radar operators see the swarms as rain.',
      },
      { kind: 'heading', text: 'Born ready, or born helpless' },
      {
        kind: 'para',
        text: 'Among animals that give parental care, the newborn arrives at either end of a competence spectrum. Precocial young — ducklings, wildebeest calves, megapode chicks that dig out of the mound alone — hatch or are born furred, feathered, sighted and mobile within hours: the strategy of species whose young must follow the herd or feed themselves, funded by long gestation and energy-dense eggs. Altricial young — passerine nestlings, kittens, marsupial joeys (the extreme: a bean-sized newborn climbing to a pouch) — hatch blind, naked and helpless, cheap to produce but expensive to raise: the strategy where a nest or den makes helplessness survivable and where brain growth can continue AFTER birth, provisioned by parents. Birds sort cleanly by lifestyle: ground-nesters in open country are precocial (a nidifugous chick walks within hours), tree-nesters altricial — one decision, two whole styles of childhood.',
      },
      {
        kind: 'callout',
        title: 'One schedule, many clocks',
        text: 'Add up this lesson and a single animal\u2019s life is a composed schedule: when to hatch (diapause), how many bodies to use (metamorphosis), how many generations per year (voltinism), how ready to be born (altricial/precocial), and whether to spend everything once (semelparity) or bank on years (iteroparity). Every species is a different setting of the same five dials.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Breed once or breed often' },
      {
        kind: 'para',
        text: 'Semelparous animals put everything into a single terminal breeding event and die: annual plants, Pacific salmon (the ocean\u2019s nutrients dragged uphill to fertilise whole watersheds as they decay), mayflies (no functional gut, one dusk of mating), periodical cicadas (13- or 17-year underground nymphhood, then weeks of song and death — the prime-numbered schedules that outpace predator cycles), octopuses (the mother starves guarding her eggs to the last). Iteroparous animals breed repeatedly across a lifespan — most birds, mammals, reptiles. The trade is survival probability against breeding opportunity: when each breeding attempt is extraordinarily costly, or adult survival between seasons is poor, evolution pushes toward cashing everything in at once. The cicada is the extreme case: a predator that would track a 12- or 14-year cycle cannot lock onto 13 or 17.',
      },
      {
        kind: 'callout',
        title: 'Complex cycles as adaptations',
        text: 'Every awkward-looking life cycle is a solved problem: the larva is the dispersal stage, the adult is the breeding stage, the diapause is the over-wintering stage, and metamorphosis is the price of running several bodies for several jobs.',
        tone: 'insight',
      },
      {
        kind: 'example',
        title: 'Map the strategy onto three animals',
        steps: [
          'Grasshopper: hemimetabolous nymph eats what the adult eats — no pupa, growth by instars, eggs in soil survive winter in diapause.',
          'Monarch butterfly: holometabolous, caterpillar monopolises milkweed, pupa rebuilds the body, adult migrates thousands of kilometres — three bodies, three jobs, one genome.',
          'Periodical cicada: 17 years as a xylem-feeding nymph underground, one synchronized emergence, dense chorusing, mate, lay, die — semelparity with a prime-number clock.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Holometabolous', def: 'Complete metamorphosis — egg, larva, pupa, adult — with imaginal-disc rebuilding in the pupa.' },
          { term: 'Instar', def: 'The growth stage between two moults; nymphs climb an instar ladder toward adulthood.' },
          { term: 'Diapause', def: 'Hormonally gated developmental arrest, entered predictively and exited by token cues like chill accumulation.' },
          { term: 'Semelparity', def: 'One fatal breeding effort — salmon, mayflies, cicadas — when the attempt is too costly to repeat.' },
          { term: 'Imaginal discs', def: 'Dormant primordia carried inside the larva that unfold into adult structures during pupal metamorphosis.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The immediate endocrine trigger of insect moulting is:',
            options: ['juvenile hormone directly', 'ecdysone from the prothoracic glands, under brain PTTH signalling', 'thyroxine', 'insulin'],
            answer: 1,
            explain: 'PTTH from the brain → ecdysone from prothoracic glands → moult. Juvenile hormone does not trigger the moult; its falling titre decides what the moult will PRODUCE — larva, pupa or adult.',
          },
          {
            q: 'Periodical cicadas\u2019 13- and 17-year cycles are thought to be prime-numbered because:',
            options: ['predators cannot synchronise population booms onto non-repeating prime intervals', 'prime numbers reduce the number of moults', '13 and 17 chromosomes are needed', 'fungi cannot grow on prime-year broods'],
            answer: 0,
            explain: 'A predator with a 2–5-year cycle rarely lines up multiplier-wise with a 13- or 17-year schedule, so predator populations cannot evolve a standing boom timed to the emergence — the cicada\u2019s clock is a predator-decoupling device.',
          },
          {
            q: 'A nymph differs from a larva in that:',
            options: ['nymphs never eat', 'a nymph already lives the adult lifestyle (habitat and diet), lacking only wings and maturity', 'nymphs are always aquatic', 'larvae moult but nymphs do not'],
            answer: 1,
            explain: 'Hemimetabolous nymphs are scaled-down ecological versions of the adult; holometabolous larvae are a DIFFERENT body for a different niche, requiring a pupal rebuild before adult life.',
          },
          {
            q: 'Diapause differs from simple cold-induced slowing because it:',
            options: ['occurs only in insects', 'is entered in advance of bad conditions and exited by specific token cues, not by immediate conditions', 'halts feeding but not development', 'requires constant torpor'],
            answer: 1,
            explain: 'Diapause is programmed and predictive — entered on photoperiod or maternal signals before the crash, held through it, and released by cumulative cues like winter chill. That is why a mid-winter warm spell does not hatch everything.',
          },
        ],
      },
    ],
  },

]
