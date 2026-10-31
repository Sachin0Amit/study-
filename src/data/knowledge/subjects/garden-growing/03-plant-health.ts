/**
 * Knowledge Universe — Garden & Growing — Chapter 03: Plant Health
 * 1 lesson · ~1,742 words
 * field: Garden & Growing
 * legacy sources: x67-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Plant Health]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 grow-pests-diseases-ipm — Pests, Diseases and IPM: Protecting the Garden Without Poisoning It
 */
import type { KnowledgeTopic } from '../../types'

export const gardenGrowingCh03: KnowledgeTopic[] = [
  {
    id: 'grow-pests-diseases-ipm',
    title: 'Pests, Diseases and IPM: Protecting the Garden Without Poisoning It',
    domain: 'Everyday Knowledge',
    field: 'Garden & Growing',
    branch: 'Plant Health',
    tier: 'core' as const,
    concepts: [
      'Diagnosis first: signs versus symptoms, biotic versus abiotic',
      'The disease triangle: host, pathogen, environment',
      'Chewing pests versus sucking pests — two damage signatures',
      'The IPM ladder: cultural, physical, biological, chemical last',
      'Biological control: predators, parasitoids and microbial allies',
      'Least-toxic chemistry: soaps, oils and the resistance problem',
    ],
    words: 1742,
    readMins: 9,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'This book has covered growing things and making more of them; this chapter covers keeping them alive. Every garden loses something every season — chewed leaves, mildewed squash, a sap-sucked tomato — and the difference between a thriving garden and a chemical treadmill is rarely access to stronger products. It is diagnosis and sequence: knowing what is actually attacking the plant, and working through the interventions in the order that solves the problem without manufacturing a worse one. The framework gardeners borrow from professional agriculture is Integrated Pest Management (IPM) — developed for cotton and alfalfa in the late 1950s, now the standard from FAO programs to school gardens — and its core discipline is exactly the opposite of the spray-first reflex: scout, identify, decide on a threshold, act with the least-disruptive effective tool, and re-check.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Gardens are the smallest ecosystems most people will ever manage, and they teach the principles that govern farms and forests: broad-spectrum poisons kill the ladybirds as readily as the aphids, and the aphids — faster breeders — return first, now without enemies. That dynamic, pest resurgence, is the recurring lesson of a century of insecticide use. A gardener who learns to work with predators instead of against them is running a miniature of modern agricultural policy in a few square metres.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Diagnosis before treatment. The first skill is telling the suspects apart. Biotic problems are living: insects, mites, fungi, bacteria, viruses — they spread, progress and target specific plants. Abiotic problems are environmental: drought, waterlogging, nutrient deficiency, herbicide drift, frost — they hit uniformly, often across plant species, and show patterns matching their cause (the whole bed near the sprayed verge, the pot against the reflecting wall). Within the living causes, distinguish signs (the pest itself — frass, webbing, the fungus’s spores, the bacterial ooze) from symptoms (the plant’s response — wilting, chlorosis, lesions, distortion). Chewing pests leave holes and missing margins; sucking pests (aphids, whiteflies, scale, spider mites) leave stippled, curled, sticky leaves — the stickiness is honeydew, and its black coating (sooty mould) is a signature. Most failed treatments are misdiagnoses: spraying a fungicide at a nutrient deficiency, or an insecticide at mites that a miticide would have needed.',
      },
      {
        kind: 'para',
        text: 'The disease triangle. Plant disease requires three aligned factors: a susceptible host, a virulent pathogen, and a favourable environment — remove any one and the disease cannot run. This is why cultural controls work. Resistant cultivars attack the host corner; crop rotation attacks the pathogen corner by starving it of its host for seasons long enough to break its cycle (tomato pathogens in the soil, potatoes repeated on the same bed, the classic failures); and the environment corner is where gardeners hold the most power — overhead watering leaves foliage wet overnight and hands powdery mildew its favourite climate, while soil-level watering and spacing for airflow change the microclimate the pathogen needs. Sanitation removes overwintering refuges: infected leaves do not compost back into next year’s epidemic, tools are wiped between plants, and diseased material leaves the garden rather than recycling in place.',
      },
      {
        kind: 'para',
        text: 'Scout and threshold. IPM replaces the calendar spray with a decision: act when the damage or pest count crosses a threshold — the point where the harm outweighs the cost and risk of acting, or where tolerable cosmetic damage becomes real loss. A few aphids on one leaf tip is a ladybird lunch, not an emergency; aphids on every growing point of a seedling are a threat. Scouting is a habit, not an event: walk the garden twice a week, check leaf undersides (where most pests actually live), look at new growth first, and keep notes — the second season of a garden is dramatically easier because the first season’s notes name its recurring problems and their timing.',
      },
      {
        kind: 'para',
        text: 'The ladder. IPM orders its tools from least to most disruptive. Cultural controls come first: rotate, choose resistant varieties, water at soil level, feed appropriately (lush over-fertilized growth is aphid candy), prune for airflow, clean up at season’s end. Physical and mechanical controls next: floating row covers exclude cabbage moths and carrot fly entirely (remove them when pollination is needed); collars stop cutworms; copper tape slows slugs; handpicking works at garden scale for hornworms and potato beetles; yellow sticky cards monitor and thin whiteflies and fungus gnats. Biological control third: the garden’s own predators and purchased allies. Chemical controls last, and at garden scale that means the least-toxic ladder before any synthetic: insecticidal soap (works on soft-bodied insects on contact, not on eggs), horticultural and neem oils (smother scale and mites, deter feeding), Bt spray for caterpillars — the same bacterial toxin the biotechnology lesson covers in its engineered-crop form, used here under the bacterium’s own schedule — and only then, with everything else failed, a targeted product aimed at the specific pest, never a broad-spectrum "all-purpose" spray by default.',
      },
      {
        kind: 'para',
        text: 'The biology that does the work for you. A garden managed with some tolerance becomes self-defending: ladybird beetles eat thousands of aphids across a lifetime; lacewing larvae ("aphid lions") are hungrier still; parasitoid wasps lay eggs in aphids, turning them into brown "mummies" that release the next wasp generation. The gardener’s job is habitat: flowers with open nectar (dill, alyssum, calendula) feed adult predators, a shallow water source helps, and — crucially — not spraying when spray is unnecessary. Microbial allies extend the roster: Bacillus thuringiensis for caterpillars, entomopathogenic nematodes for soil-dwelling grubs, Trichoderma fungi against root rots. The biotechnology lesson explains how Bt’s crystal toxin works and why resistance management (refuges) matters at field scale; at garden scale the rule is simpler — target sprays at the caterpillar that is actually eating, not at the garden in general.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: the courgette leaves show pale stippling, and some leaf undersides have fine webbing. Diagnose and build the plan.',
          'Diagnose: stippling plus webbing on leaf undersides in hot dry weather points to spider mites — sucking pests, not a disease; check with a hand lens or the tap-and-paper test (tap a leaf over white paper; moving specks = mites).',
          'Cultural first: mites flare on drought-stressed plants in dusty, dry air — water consistently and rinse foliage in the morning so leaves dry by evening (mildew discipline, not overhead-overnight).',
          'Physical/biological next: spray water under leaves to knock populations back; release or attract predatory mites and lacewings; hold off on any broad-spectrum insecticide — it kills the predators and the mites rebound harder (resurgence).',
          'Least-toxic chemical if threshold crossed: horticultural oil or insecticidal soap on undersides, repeated per label (they kill on contact, not eggs), rotating modes to avoid resistance.',
          'Re-check in five to seven days and record the episode in the garden journal — the timing and trigger become next season’s early-warning.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Home gardens: the scouting-and-threshold habit plus row covers and predator habitat resolves most vegetable-patch problems without anything beyond soap and oil.',
        'Agriculture: IPM is the global standard — FAO farmer-field-school programs, EU directive requirements and most national extension services train it; the pesticide-reduction targets now written into EU farm policy are IPM targets.',
        'Public health: the same logic runs mosquito control — source reduction (draining containers), biological agents (Bacillus thuringiensis israelensis in water), targeted adulticiding only above thresholds.',
        'Greenhouses: commercial growers release parasitoid wasps and predatory mites on schedules — biological control is a routine purchased service, not an ideal.',
        'Policy literacy: understanding resurgence and resistance explains why agricultural chemicals rotate, why refuges are mandated next to Bt crops, and why "spray more" is never the answer to a failed spray.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating symptoms without diagnosis: "bugs" get blamed for what is underwatering or herbicide drift, and the spray solves nothing. Second, spraying the garden rather than the pest: broad-spectrum insecticides are resurgence machines — they reset the predator community while the fast-breeding pests return first. Third, ignoring the disease triangle: a fungicide-resistant rose in the same damp, crowded corner will need spraying forever; move the watering, open the airflow, and the disease pressure falls with it. Fourth, dosing by mood rather than label: soap and oil are least-toxic, not non-toxic — wrong concentration burns leaves, and spraying in full sun compounds the damage; oils and soaps kill on contact only, so misses survive. Fifth, expecting eradication: IPM manages populations below thresholds — a garden with some aphids and some ladybirds is a working system, not a failing one.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Integrated Pest Management (IPM)', def: 'The decision framework — scout, identify, threshold, least-disruptive tool first — born in 1950s field crops and now the global standard.' },
        { term: 'disease triangle', def: 'Host × pathogen × environment: disease needs all three, so removing any one prevents it.' },
        { term: 'honeydew', def: 'The sticky sugary waste of sucking pests (aphids, scale, whitefly) — its sooty-mould coating is a diagnostic signature.' },
        { term: 'threshold', def: 'The pest level at which action beats tolerance — IPM’s replacement for the calendar spray.' },
        { term: 'resurgence', def: 'The rebound of a pest after broad-spectrum spraying kills its natural enemies — the classic argument for biological control.' },
        { term: 'parasitoid', def: 'An insect whose larvae develop inside a host (aphid mummies are parasitoid work) — the biological control workhorse.' },
        { term: 'Bt spray', def: 'Bacillus thuringiensis applied as an organic caterpillar control — the natural version of the toxin engineered into Bt crops.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Sticky, curled leaves with a black film, but no holes, suggest…',
          options: ['a chewing caterpillar', 'sucking pests such as aphids or scale producing honeydew', 'nitrogen deficiency', 'a viral wilt'],
          answer: 1,
          explain: 'Honeydew and sooty mould are the sucking-pest signature; chewing insects remove tissue and leave holes or margins.',
        },
        {
          q: 'The disease triangle says tomato blight can be prevented by…',
          options: ['spraying weekly regardless of disease', 'any one of resistant varieties, rotation/sanitation, or drier foliage — removing one corner breaks the triangle', 'fertilizing more', 'watering overhead every evening'],
          answer: 1,
          explain: 'Disease needs a susceptible host, a pathogen and a favourable environment — remove one and the cycle cannot run.',
        },
        {
          q: 'Spraying a broad-spectrum insecticide against a small aphid colony often ends with…',
          options: ['permanent aphid elimination', 'resurgence — aphids breed back faster than their newly killed predators', 'more ladybirds', 'an end to all garden pests'],
          answer: 1,
          explain: 'The spray resets the predator community; fast-breeding pests return first without enemies — resurgence is the textbook outcome.',
        },
        {
          q: 'The correct IPM order of tools is…',
          options: ['chemical first for speed', 'cultural → physical → biological → least-toxic chemical last', 'biological only, never anything else', 'all tools at once'],
          answer: 1,
          explain: 'IPM escalates from rotation/variety/watering through exclusion and predators to targeted, least-toxic chemistry — used at threshold, not on schedule.',
        },
      ] },
    ],
  },
]
