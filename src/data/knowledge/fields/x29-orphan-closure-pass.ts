import type { KnowledgeTopic } from '../types'

/** Expansion pass X29 (2026-10-24): the orphan-closure sweep. After X28 the
 *  audit stood at 2412/2427 with 15 unmapped topics in single-topic clusters;
 *  the three largest honest clusters were the mcat gaps exposed when X28's
 *  Foundations-field lesson evicted physics from the subject-candidate lists
 *  (Tissue Types; Biological Bases of Behavior; Interpersonal Behavior —
 *  previously junk-mapped to unrelated masters chapters), the two gcse-maths
 *  algebra gaps, and the ib-chemistry atomic-structure gap. Each candidate
 *  below was cross-checked against the dedup ledger, coverage.json and greps
 *  of all field files before authoring:
 *  1. bio-animal-tissue-types — the four primary tissue families (epithelial,
 *     connective, muscle, nervous) with subtype taxonomies and structure-
 *     function reasoning. Zero overlap: grep for 'epithelial|connective
 *     tissue|muscle tissue' across fields shows only a passing Bt-toxin
 *     mention in x14 — no histology lesson exists.
 *  2. neuro-biological-bases-behavior — neuron anatomy, glia, CNS/PNS
 *     divisions, autonomic splits, brain divisions and lobes, language areas,
 *     endocrine interaction, imaging/lesion evidence. Carved against the two
 *     existing neuro lessons: bio-action-potentials owns the electrical event
 *     (resting potential, threshold, refractory, saltatory conduction) and
 *     neuro-synapse-neurotransmitters owns synaptic chemistry (vesicles,
 *     receptor classes, reuptake, drugs) — this lesson is the systems survey
 *     those lessons name as prerequisites, teaching structure and organization
 *     plus the behavioral evidence neither covers.
 *  3. soc-interpersonal-behavior — attraction (proximity, mere exposure,
 *     similarity, reciprocity), aggression (hostile vs instrumental,
 *     frustration-aggression, bullying and cyberbullying), prosocial behavior
 *     (bystander effect, diffusion of responsibility, altruism). Zero
 *     overlap: grep 'attraction|aggression|altruism' in social-sciences and
 *     business-economics shows nothing; bus-management-organisational-
 *     behaviour owns workplace management/OB theory, and the conformity
 *     lesson owns situational influence — both distinct territories.
 *  4. math-algebra-notation-manipulation — the grammar of algebra: terms,
 *     coefficients, degrees; collecting like terms; expanding via the
 *     distributive law; factorising (common factor, difference of squares,
 *     quadratic patterns); rearranging formulae; identities versus equations.
 *     Zero overlap: grep 'factorising|rearranging formulae|expanding brackets'
 *     across fields returns nothing.
 *  5. math-quadratics-completing-square — standard form, the four solving
 *     methods (factorising, square-root property, completing the square,
 *     formula), the discriminant trichotomy, method choice, vertex form and
 *     applications. Zero overlap: grep 'quadratic formula|completing the
 *     square' across fields returns nothing; the masters algebra volumes own
 *     their own chapters and this is the exam-scoped KU lesson.
 *  6. chem-isotopes-nuclear-notation — subatomic particles, atomic and mass
 *     numbers, the AZX nuclear symbol, isotope families (hydrogen, carbon),
 *     average atomic mass from abundances. Zero overlap: grep 'isotope'
 *     shows only passing mentions (photosynthesis labeling, half-life def,
 *     medical isotopes); chem-periodic-trends owns trends, not atomic
 *     structure; chem-ions-aqueous-solution owns solution chemistry.
 *  Sources read while writing (legally open):
 *  - OpenStax, Biology 2e §33.2 'Animal Primary Tissues' (openstax.org,
 *    CC BY-NC-SA) — the epithelial shape/layer taxonomy (squamous, cuboidal,
 *    columnar, transitional; simple, stratified, pseudostratified; goblet
 *    cells and cilia), the connective-tissue cells-plus-matrix model (loose,
 *    fibrous regular/irregular, cartilage hyaline/elastic/fibro, compact
 *    bone osteons, adipose, blood), the muscle comparison table (striations,
 *    nuclei, voluntary/involuntary, intercalated discs), nervous tissue
 *    (neurons, astrocytes, oligodendrocytes).
 *  - OpenStax, Psychology 2e ch.3 'Biopsychology' (CC BY-NC-SA) — sections
 *    3.2 Cells of the Nervous System, 3.3 Parts of the Nervous System, 3.4
 *    The Brain and Spinal Cord, 3.5 The Endocrine System; imaging techniques
 *    (PET, CT, fMRI).
 *  - OpenStax, Psychology 2e §12.6 'Aggression' and §12.7 'Prosocial
 *    Behavior' — hostile vs instrumental aggression, frustration-aggression
 *    hypothesis, bullying (direct physical vs indirect social, power
 *    imbalance), cyberbullying prevalence, bystander effect and diffusion of
 *    responsibility.
 *  - LibreTexts, Principles of Social Psychology ch.8 'Liking and Loving',
 *    §8.1 'Initial Attraction' — proximity and mere exposure, similarity,
 *    reciprocity, physical attractiveness.
 *  - OpenStax, Intermediate Algebra 2e ch.9 (CC BY-NC-SA) — §9.2 Solve
 *    Quadratic Equations by Completing the Square, §9.3 Solve Quadratic
 *    Equations Using the Quadratic Formula (the four-step procedure, worked
 *    Example 9.21/9.22), the discriminant trichotomy, the method-choice
 *    strategy, §9.5 applications (projectile motion); ch.1 for the language
 *    of algebra (expressions, coefficients, like terms).
 *  - OpenStax, Chemistry 2e §2.3 'Atomic Structure and Symbolism' — the
 *    subatomic-particle table, atomic number Z, mass number A, atomic
 *    charge, the AZX nuclear symbol with charge shown as a right superscript,
 *    hydrogen isotopes (protium 99.989%, deuterium, tritium), carbon-12/13/14
 *    abundances, average atomic mass = Σ(fractional abundance × isotopic
 *    mass) with the boron example (10.81 amu).
 */

export const x29OrphanClosurePassTopics: KnowledgeTopic[] = [
  {
    id: 'bio-animal-tissue-types',
    title: 'Animal Tissue Types: Four Families, One Body Plan',
    domain: 'Life Sciences',
    field: 'Animal Biology',
    branch: 'Histology',
    tier: 'core',
    concepts: [
      'Epithelial tissue: shape and layer classification',
      'Simple versus stratified versus pseudostratified',
      'Goblet cells, cilia and transitional epithelium',
      'Connective tissue: cells plus matrix',
      'Cartilage, bone, adipose and blood as connective tissues',
      'Muscle: skeletal, smooth and cardiac compared',
      'Intercalated discs and involuntary control',
      'Nervous tissue: neurons and glia',
      'Structure-function reasoning across all four families',
    ],
    words: 1650,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Organs look like improvisations, but histology reveals the trick: only four tissue families do all the work. Every organ is an assembly of epithelial sheets, connective frameworks, muscle motors and nervous wiring, combined in proportions that explain what the organ does. Exam questions in anatomy-driven papers rarely ask for obscure trivia — they ask you to identify a tissue from a description, name its family, and reason from structure to function: why is lung lining one cell thick, why does the bladder change shape, why do heart cells pass signals edge to edge? Master the four families and their logic and those questions answer themselves.',
      },
      {
        kind: 'para',
        text: 'The classification system rewards precision. Epithelial tissues are named by cell shape and layer count; connective tissues by the cells they carry and the matrix they secrete; muscle by striations, nuclei and voluntary control; nervous tissue by its two cell kinds. Each name encodes a function claim. This lesson walks the four families with that encoding made explicit, then closes with the reasoning habits that transfer a tissue table into marks.',
      },
      { kind: 'heading', text: 'Epithelial tissue: the covering family' },
      {
        kind: 'para',
        text: 'Epithelia cover organs, line cavities and face the world — skin, gut lining, airways, gland ducts. Classification uses two axes: cell shape (squamous — flat tiles; cuboidal — cubes with central nuclei; columnar — tall bricks with basal nuclei; transitional — rounded cells that flatten) and layering (simple — one layer; stratified — many; pseudostratified — a single layer whose nuclei sit at different heights, tricking the eye into seeing strata). The shape-layer pair predicts the job: simple squamous, one thin layer of flat cells, is built for diffusion and filtration — lung alveoli and capillary walls; stratified squamous, many layers deep, is built for abrasion — skin, mouth, vagina; simple columnar absorbs and secretes along the digestive tract.',
      },
      {
        kind: 'para',
        text: 'Two specializations earn their own names. Pseudostratified ciliated columnar lines the respiratory tract: cilia sweep the mucus film upward, and goblet cells embedded in the epithelium secrete that mucus, trapping dust the way flypaper traps flies — the two structures together are the lungs\u2019 janitorial service. Transitional epithelium lines the urinary bladder and ureter: its rounded cells slide over one another, so the sheet thickens when the bladder empties and thins as it fills — an epithelium with a stretch budget. Notice the recurring exam move: given a location, predict the tissue; given a tissue, predict the location and the function.',
      },
      { kind: 'heading', text: 'Connective tissue: cells plus matrix' },
      {
        kind: 'para',
        text: 'Connective tissues invert the epithelial plan: scattered cells suspended in a nonliving matrix they themselves secrete — ground substance plus fibers. The matrix does the work, so classifying connective tissue means asking what the matrix is like. Loose (areolar) connective tissue carries fibroblasts, macrophages and a sparse mix of collagen and elastic fibers; it wraps vessels and anchors epithelia — tough yet flexible. Fibrous connective tissue is collagen-dense: irregular form resists tearing in the skin\u2019s dermis, and regular form packs into parallel cables — tendons joining muscle to bone and ligaments joining bone to bone.',
      },
      {
        kind: 'para',
        text: 'The specialized members of the family repay individual attention. Cartilage comes in three grades: hyaline (few fibers — joint surfaces, fetal skeleton, the shark\u2019s entire skeleton), elastic (ears, larynx) and fibrocartilage (collagen-packed — intervertebral discs); its cells, chondrocytes, sit in pockets called lacunae. Bone\u2019s matrix mixes organic collagen with inorganic calcium salts — flexible protein reinforced with mineral — and compact bone organizes into osteons: concentric lamellae around a central canal, with osteocytes in lacunae connected by canaliculi; osteoblasts build bone, osteoclasts resorb it, and the balance between them is the whole story of bone remodeling. Adipose tissue stores triglyceride in fat-swollen adipocytes — energy, insulation, cushioning. Blood counts as connective tissue because it fits the definition: cells (erythrocytes, leukocytes) suspended in a fluid matrix (plasma), with transport as its specialty — the definition is the point examiners love.',
      },
      { kind: 'heading', text: 'Muscle: three motors compared' },
      {
        kind: 'para',
        text: 'Muscle tissue converts chemical energy into contraction, and the three types separate cleanly along three axes: striated or not, one nucleus or many, voluntary or involuntary. Skeletal muscle is striated, multinucleate (nuclei pushed to the periphery) and voluntary — it pulls on bones and obeys orders. Smooth muscle is unstriated, single-nucleate and involuntary — it lines visceral organs and blood vessels, squeezing the digestive tube and adjusting vessel diameter without instruction. Cardiac muscle is striated, single-nucleate, involuntary and found only in the heart, where its signature structure — intercalated discs joining cell to cell — lets electrical impulses spread so the muscle contracts as one coordinated sheet.',
      },
      {
        kind: 'para',
        text: 'The comparison is a gift to examiners because it can be asked in any direction: which muscle type has intercalated discs (cardiac); which is voluntary (skeletal); which propels food through the gut (smooth). A table with three rows and three columns answers all nine combinations — build it once from memory and the family is yours. And the structure-function reasoning holds here too: many nuclei suit a long forceful fiber; intercalated discs suit a pump that must beat in unison; no striations suit sustained, slow, wave-like squeeze.',
      },
      { kind: 'heading', text: 'Nervous tissue: the signaling family' },
      {
        kind: 'para',
        text: 'Nervous tissue specializes in rapid communication, and it has exactly two cell kinds. Neurons carry electrical impulses: a cell body holding the nucleus, dendrites receiving signals, and a long axon transmitting them onward. Glial cells support the enterprise — astrocytes regulate the chemical environment around neurons, and oligodendrocytes wrap axons in insulating sheaths that speed conduction (the same insulating role Schwann cells play in the peripheral nervous system). Nerves, anatomically, are cables of neurons plus glia bundled together.',
      },
      {
        kind: 'para',
        text: 'Keep the histology level separate from the physiology level: this lesson names the cells and their roles, while the electrical event — resting potential, threshold, the all-or-none spike — belongs to the nerve-signaling lesson, and the chemistry of the crossing between cells belongs to the synapse lesson. Exam questions on tissue types stay at the histology level: identify neurons versus glia, name the insulating cells, state what astrocytes do. When a question drifts into voltages or transmitter molecules, that is your cue that it belongs to the other two lessons.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Identify the tissue from the description',
        steps: [
          'Description A: \u201ca single layer of flat cells lining air sacs, specialized for gas exchange.\u201d Shape flat = squamous; single layer = simple; function diffusion = confirms it. Answer: simple squamous epithelium.',
          'Description B: \u201ccells in lacunae embedded in a rubbery matrix; tissue also found in fetal skeletons.\u201d Lacunae + matrix = connective; rubbery = cartilage; fetal skeleton = the hyaline grade.',
          'Description C: \u201cstriated, branched cells joined edge to edge, contracting without voluntary instruction.\u201d Striated + involuntary + intercellular junctions = cardiac muscle; the junctions are intercalated discs.',
          'Description D: \u201ccells suspended in a fluid matrix, one cell kind carries oxygen.\u201d Cells + nonliving matrix = connective; fluid matrix = plasma; oxygen carrier = erythrocytes. Answer: blood.',
          'The general recipe: decide the family first (covering? matrix? contraction? signaling?), then use the distinctive clue — layering, matrix grade, striations or cell kind — to name the subtype. Two decisions, never more.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which epithelium lines the urinary bladder and changes thickness as it fills?',
            options: [
              'simple squamous',
              'stratified squamous',
              'transitional',
              'pseudostratified ciliated columnar',
            ],
            answer: 2,
            explain: 'Transitional epithelium\u2019s rounded cells slide over one another, letting the sheet thin as the bladder distends — a stretch-specialized covering.',
          },
          {
            q: 'Tendons and ligaments are composed of which connective tissue grade?',
            options: ['loose (areolar)', 'fibrous regular', 'hyaline cartilage', 'adipose'],
            answer: 1,
            explain: 'Regular fibrous connective tissue packs collagen fibers in parallel — the cable architecture a tendon needs to transmit muscle pull to bone.',
          },
          {
            q: 'Which muscle type is striated, single-nucleated and involuntary?',
            options: ['skeletal', 'smooth', 'cardiac', 'none — no type matches all three'],
            answer: 2,
            explain: 'Cardiac muscle alone carries all three traits; its intercalated discs spread the impulse so the heart contracts as a unit.',
          },
          {
            q: 'Why is blood classified as a connective tissue?',
            options: [
              'because it connects organs physically',
              'because it consists of cells suspended in a nonliving matrix (plasma)',
              'because it contains collagen fibers',
              'because it is voluntary',
            ],
            answer: 1,
            explain: 'The connective-tissue definition is cells plus secreted matrix; blood satisfies it with a fluid matrix. Fiber presence is not required — blood has none.',
          },
          {
            q: 'Which glial cell regulates the chemical environment around neurons, and which insulates axons?',
            options: [
              'astrocytes regulate; oligodendrocytes insulate',
              'oligodendrocytes regulate; astrocytes insulate',
              'both do both jobs',
              'neurons do both jobs themselves',
            ],
            answer: 0,
            explain: 'Astrocytes maintain the extracellular milieu; oligodendrocytes lay down the insulating sheath in the central nervous system. Two support roles, two cell types.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling pseudostratified epithelium truly layered — it is one layer with staggered nuclei, and the name is the correction. Putting cartilage in the wrong family: it is connective tissue (cells in matrix), not a covering. Swapping osteoblasts and osteoclasts — builders build, cleaners clean, and remodeling needs both. Assigning voluntary control to cardiac muscle because the heart \u201ckeeps rhythm\u201d — it beats without instruction. Forgetting blood and adipose are connective tissues — the definition catches both. And answering physiology questions (voltages, transmitters) with histology facts — match the level of the question to the level of the answer.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the action-potentials lesson for how neurons fire and the biological-bases-of-behavior lesson for how the nervous system is organized into a behaving whole; the skin and digestion topics in the health domain show epithelia and connective tissues at work. Primary reading: OpenStax, Biology 2e \u00a733.2 \u201cAnimal Primary Tissues\u201d (openstax.org, CC BY-NC-SA) — the source of the four-family taxonomy used here, including the muscle comparison table.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Four families do everything: covering (epithelial), matrix (connective), contraction (muscle), signaling (nervous).',
        'Epithelia are named shape \u00d7 layers; the pair predicts function — thin for exchange, thick for armor.',
        'Connective = cells + matrix; cartilage, bone, adipose and blood all fit the definition.',
        'Muscle table: skeletal striated/voluntary/many nuclei; smooth plain/involuntary; cardiac striated/intercalated discs.',
        'Nervous tissue = neurons (impulses) plus glia (astrocytes feed, oligodendrocytes insulate).',
        'Exam recipe: family first from function, then subtype from the distinctive clue.',
      ] },
    ],
  },
  {
    id: 'neuro-biological-bases-behavior',
    title: 'From Neurons to Brain Areas: The Nervous System at Work',
    domain: 'Life Sciences',
    field: 'Neuroscience',
    branch: 'Systems Neuroscience',
    tier: 'core',
    concepts: [
      'Neuron anatomy: dendrites, soma, axon, myelin',
      'Glia: astrocytes, oligodendrocytes, Schwann cells',
      'Central versus peripheral nervous system',
      'Somatic and autonomic divisions',
      'Sympathetic versus parasympathetic action',
      'Hindbrain, midbrain, forebrain',
      'Cortical lobes and their functions',
      'Language areas: Broca and Wernicke',
      'The endocrine system as a second messenger service',
      'Lesion and imaging evidence',
    ],
    words: 1578,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Every thought, mood and movement is a biological event: behavior is what nervous tissue does. The survey question of this topic is architectural — what are the parts, how are they connected, and how does damage to each part predictably change what a person can do? Its twin exam skill is localization: given a symptom (loss of speech production, tremor, racing heart in fright), name the structure; given a structure (amygdala, Broca\u2019s area, sympathetic chain), name the behavior it biases. Structure and behavior are two readings of the same map, and this lesson draws the whole map.',
      },
      {
        kind: 'para',
        text: 'One boundary first. The electrical impulse inside a neuron and the chemical crossing between neurons are deep topics with lessons of their own — the nerve-signaling lesson owns the action potential, and the synapse lesson owns transmitter chemistry. This lesson takes the wider view those lessons presuppose: the anatomy of the cells, the divisions of the system, the geography of the brain, and the evidence that ties places to behaviors. Learn the map here; the other lessons run the electricity along it.',
      },
      { kind: 'heading', text: 'The cells: neurons and their assistants' },
      {
        kind: 'para',
        text: 'A neuron is built for one job — carrying information — and its anatomy shows it. Dendrites branch like a root system to receive signals from other cells; the soma (cell body) houses the nucleus and integrates what arrives; the axon carries the integrated message away, sometimes for a meter or more without interruption. Many axons wear insulation: myelin sheaths laid down by glial cells, which speed conduction dramatically and give white matter its color (gray matter, by contrast, is rich in cell bodies). The functional logic is reception, integration, transmission — in that order, along the cell.',
      },
      {
        kind: 'para',
        text: 'Glia outnumber neurons and do far more than glue. Astrocytes regulate the chemical environment around neurons, mopping and buffering so signaling stays reliable. Oligodendrocytes (in the central nervous system) and Schwann cells (in the periphery) lay down the insulating myelin — and the difference matters clinically: oligodendrocyte sheathing fails in multiple sclerosis, a central disease. Microglia act as the resident immune cleanup. Exam questions test exactly these pairings — which cell insulates where, which cell maintains the milieu — so learn them as bonded pairs, not a list.',
      },
      { kind: 'heading', text: 'The divisions: central and peripheral' },
      {
        kind: 'para',
        text: 'The nervous system splits first by geography. The central nervous system (CNS) is the brain and spinal cord — the processing core and the trunk line. The peripheral nervous system (PNS) is everything outside: nerves carrying messages to and from the body. The PNS then splits by function. The somatic division handles voluntary movement and external sensation — reaching for a cup, feeling its coolness. The autonomic division runs the internal organs without instruction, and it splits again into two opponents working as a team: the sympathetic division mobilizes for action (accelerates heart, dilates pupils, redirects blood to muscle — the fight-or-flight ensemble) and the parasympathetic division conserves and restores (slows heart, promotes digestion — rest-and-digest).',
      },
      {
        kind: 'para',
        text: 'The autonomic pair is the exam\u2019s favorite contrast because it is a clean either/or in any scenario. A near-miss on the highway: pupils wide, pulse pounding, mouth dry — sympathetic. The after-dinner lull: digestion humming, heart rate settled — parasympathetic. Most organs receive both inputs, and the organ\u2019s state is the balance — a push-pull design that lets the body sprint or settle within seconds. When a question names an organ response, trace it to its division first and the rest of the answer follows.',
      },
      { kind: 'heading', text: 'The brain: geography of behavior' },
      {
        kind: 'para',
        text: 'Working from bottom to top: the hindbrain manages the non-negotiables — the medulla runs breathing and heart rate, the pons relays and helps regulate sleep, the cerebellum coordinates movement and balance. The midbrain relays sensory and motor traffic and drives basic orienting. The forebrain carries the crown: the thalamus acts as a sensory relay, the hypothalamus (a pea-sized structure) regulates hunger, thirst, temperature and hormones, the hippocampus consolidates new memories, the amygdala tags emotional salience — fear especially — and the cerebral cortex, the wrinkled sheet on top, performs the highest functions.',
      },
      {
        kind: 'para',
        text: 'The cortex divides into four lobes with one-line functions: frontal — planning, decision, movement initiation and inhibition; parietal — body sensation and spatial sense; temporal — hearing and language comprehension; occipital — vision. Two language areas anchor the localization story: Broca\u2019s area (frontal lobe) produces speech, and damage there yields halting, effortful speech with comprehension largely intact; Wernicke\u2019s area (temporal lobe) comprehends language, and damage there yields fluent but empty speech with poor comprehension. The contrast — production versus comprehension, frontal versus temporal — is among the most-tested pairs in all of biopsychology.',
      },
      { kind: 'heading', text: 'Chemicals, methods and the behavior link' },
      {
        kind: 'para',
        text: 'The endocrine system is the body\u2019s second messaging service: glands release hormones into the blood for slow, widespread, long-lasting effects, while neurons deliver fast, targeted ones. The hypothalamus runs the bridge, directing the pituitary — the master gland — which in turn steers the others: adrenal glands release adrenaline for the sympathetic surge and cortisol for sustained stress (the stress lesson picks this story up). Behavior thus has two chemical channels, neural and hormonal, and exam questions often ask which channel explains a timescale: instant startle is neural; days-long mood shift is endocrine.',
      },
      {
        kind: 'para',
        text: 'How do we know any of this? Two evidence families. Lesion studies read nature\u2019s accidents: damage to Broca\u2019s area breaks speech production while comprehension survives — a double dissociation that localizes function. Imaging reads living brains: CT and MRI show structure; fMRI tracks blood flow as a proxy for activity; PET shows metabolic activity with radioactive tracers. Each method has a signature strength — lesions give causation, imaging gives location-with-correlation — and strong answers name the method that fits the claim. The habit that earns marks: structure, function, evidence — three columns, one line per brain region.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Symptom to structure, structure to symptom',
        steps: [
          'Symptom: \u201ca patient speaks in strained two-word bursts, understands questions fully, knows exactly what she wants to say.\u201d Fluent comprehension + broken production = Broca\u2019s area (frontal lobe), the classic expressive aphasia.',
          'Reverse: \u201ca patient speaks fluently and endlessly, but the words carry little meaning and he fails to follow commands.\u201d Production intact + comprehension broken = Wernicke\u2019s area (temporal lobe), receptive aphasia.',
          'Autonomic read: \u201cbefore a stage entrance — pounding heart, cold sweat, dry mouth.\u201d Mobilization ensemble = sympathetic division; the parasympathetic brake comes on as the speech ends.',
          'Structure call: \u201ca patient cannot consolidate new autobiographical memories after an infection.\u201d Memory consolidation = hippocampus (the famous surgical case behind this localization).',
          'The recipe is the same in both directions: name the behavior, find its column, read across to the structure — or name the structure and read across to the behavior. Three-column fluency is the whole skill.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'You sprint for a departing train. Heart racing, pupils dilated, digestion paused. Which division dominates?',
            options: ['parasympathetic', 'sympathetic', 'somatic', 'central'],
            answer: 1,
            explain: 'Mobilization for action — accelerated heart, dilated pupils, redirected blood flow — is the sympathetic division\u2019s fight-or-flight ensemble.',
          },
          {
            q: 'Which glial cells myelinate axons in the central nervous system?',
            options: ['Schwann cells', 'astrocytes', 'oligodendrocytes', 'microglia'],
            answer: 2,
            explain: 'Oligodendrocytes sheath CNS axons; Schwann cells do the equivalent job in the periphery. The pair is a standard exam contrast.',
          },
          {
            q: 'Damage leaves a patient with fluent but meaningless speech and poor comprehension. Which area and lobe?',
            options: [
              'Broca\u2019s area, frontal lobe',
              'Wernicke\u2019s area, temporal lobe',
              'cerebellum, hindbrain',
              'occipital cortex',
            ],
            answer: 1,
            explain: 'Fluent-but-empty output with broken comprehension is receptive aphasia — Wernicke\u2019s area in the temporal lobe. Broca\u2019s damage gives the opposite profile.',
          },
          {
            q: 'The hypothalamus influences behavior largely through which partner structure?',
            options: [
              'the cerebellum',
              'the pituitary gland',
              'the hippocampus',
              'the spinal cord',
            ],
            answer: 1,
            explain: 'The hypothalamus directs the pituitary — the master gland — whose hormones steer the other endocrine glands; it is the neural-to-hormonal bridge.',
          },
          {
            q: 'A researcher wants to SEE which brain regions become more active during a memory task, in a living volunteer. Best tool?',
            options: ['lesion analysis', 'fMRI', 'microglial staining', 'reflex hammer'],
            answer: 1,
            explain: 'fMRI tracks blood-oxygen changes as a proxy for neural activity — activity location in a living brain. Lesions give causation but only post-damage.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping the two aphasias: Broca breaks production with comprehension spared, Wernicke the reverse — the pair falls apart if memorized as one blob. Confusing oligodendrocytes with Schwann cells; the CNS/PNS split decides which. Reading \u201cnesia\u201d clues as hippocampal when they are cortical sensory losses — the hippocampus consolidates NEW memories. Calling the parasympathetic division \u201cinactive\u201d — it is always working; it dominates during rest and digestion. Treating hormones and neurotransmitters as interchangeable — glands broadcast slowly through blood, neurons fire fast across synapses. And claiming imaging shows causation — only lesions and experiments approach it; fMRI shows correlated activity.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none, though this map makes the deeper lessons land better. Follow with the action-potentials lesson (how the signal runs), the synapse lesson (how it crosses), and the stress lesson (the endocrine channel in action). Primary reading: OpenStax, Psychology 2e, ch.3 \u201cBiopsychology\u201d — \u00a73.2 Cells of the Nervous System, \u00a73.3 Parts of the Nervous System, \u00a73.4 The Brain and Spinal Cord, \u00a73.5 The Endocrine System (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Neuron anatomy: dendrites receive, soma integrates, axon transmits; myelin insulates.',
        'Astrocytes keep the milieu; oligodendrocytes (CNS) and Schwann cells (PNS) myelinate.',
        'CNS = brain + spinal cord; PNS splits somatic (voluntary) and autonomic (organs).',
        'Sympathetic mobilizes, parasympathetic restores — organs ride the push-pull.',
        'Hindbrain keeps you alive, forebrain makes you you; four lobes, one line each.',
        'Broca produces (frontal), Wernicke comprehends (temporal); lesions localize, imaging locates.',
      ] },
    ],
  },
  {
    id: 'soc-interpersonal-behavior',
    title: 'Interpersonal Behavior: Attraction, Aggression and Helping',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Interpersonal Relations',
    tier: 'core',
    concepts: [
      'Proximity and the mere-exposure effect',
      'Similarity, reciprocity and physical attractiveness',
      'Hostile versus instrumental aggression',
      'The frustration-aggression hypothesis',
      'Bullying and cyberbullying dynamics',
      'Prosocial behavior and the altruism debate',
      'The bystander effect',
      'Diffusion of responsibility',
      'Designing situations that increase helping',
    ],
    words: 1427,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Between the person and the crowd lies the pair: how two people come to like each other, why they sometimes hurt each other, and when they help each other. Social psychology treats these three behaviors with the same toolkit — situations shape behavior more than character does — and the results are among the most useful findings in the discipline. They explain who becomes friends, why tempers flare, and why a crowd watched while someone needed help. Exam questions in this territory are scenario questions: given a situation, name the effect and the mechanism behind it.',
      },
      {
        kind: 'para',
        text: 'Scope note: the situational-influence territory of conformity, obedience and deindividuation belongs to the conformity lesson, and workplace applications (motivation, leadership) belong to the management lessons. This lesson owns the pairwise behaviors — forming relationships, harming, helping — where the classic effects have clean names and cleaner experiments.',
      },
      { kind: 'heading', text: 'Attraction: who ends up liking whom' },
      {
        kind: 'para',
        text: 'The strongest predictor of who becomes close to whom is embarrassingly mundane: proximity. Friendships and romances form among people who are physically near each other — neighbours, classmates, colleagues — because nearness supplies the opportunity for interaction. Its cognitive engine is the mere-exposure effect: repeated encounter with a stimulus by itself increases liking for it. Familiarity breeds contentment, not contempt — up to a point, and the experiments manipulating exposure frequency showed the curve cleanly.',
      },
      {
        kind: 'para',
        text: 'Three more factors complete the standard set. Similarity: we like people who share our attitudes, values and backgrounds — validation of our own views and fewer friction points; the classic studies found attitude similarity predicted liking far better than complementarity. Reciprocity: we like people who like us — knowing someone approves of us is one of the strongest rewards social life offers. Physical attractiveness: appearance strongly shapes first impressions and early liking — with the near-universal halo of assuming attractive people also possess other virtues. The exam framing: four factors, each with a one-line mechanism — opportunity, validation, reward, halo — and scenario questions that ask which is operating.',
      },
      { kind: 'heading', text: 'Aggression: hurting on purpose' },
      {
        kind: 'para',
        text: 'Aggression is behavior intended to harm another person, and the intention is what splits its two types. Hostile aggression springs from anger and aims at pain — the barroom brawl, the vengeful outburst. Instrumental aggression causes harm as a means to an end — the contract killer, the calculated intimidation — without anger as the engine. The distinction decides both diagnosis and remedy: hostile aggression needs the anger cooled; instrumental aggression needs the payoff removed.',
      },
      {
        kind: 'para',
        text: 'Why does it happen? The classic hypothesis is frustration-aggression: being blocked from an important goal produces frustration, which can discharge as aggression — a traffic jam, a queue, a blocked ambition. Evolutionary accounts add function: aggression defends status, mates and resources, with males on average more physically aggressive across cultures. Modern extensions note the biology of threat systems and the environment\u2019s role — heat, crowding and provocation all raise the floor. None of these is a full theory; each names a lever, and questions usually ask which lever a scenario is pulling.',
      },
      {
        kind: 'para',
        text: 'The systematic, repeated form gets its own names. Bullying is repeated negative treatment over time with a power imbalance — boys more often direct physical aggression, girls more often indirect social aggression (exclusion, rumor); victims carry elevated risks of depression, academic decline and worse. Cyberbullying imports the same structure online, where covert and anonymous channels let harm scale — roughly a third of middle and high schoolers report experiencing it, with rumor-spreading more common among girls and direct threats among boys. The defining features to name in answers: repetition, intention, power imbalance.',
      },
      { kind: 'heading', text: 'Helping: prosocial behavior and the bystander' },
      {
        kind: 'para',
        text: 'Prosocial behavior is any act that helps others, and its hardest case is altruism — helping with no expected benefit to the helper. Whether pure altruism exists is the field\u2019s standing debate: helping can be egoistic (escaping distress, earning approval, reciprocity) or genuinely other-focused (empathic concern), and experiments that separate the two motives are how the question is pursued. For exams, the vocabulary matters: prosocial is the umbrella; altruism is the contested pure end of it.',
      },
      {
        kind: 'para',
        text: 'The headline finding is the bystander effect: the more witnesses to an emergency, the less likely any one of them helps. Its mechanism is diffusion of responsibility — with many present, each person\u2019s share of the obligation shrinks, and each assumes someone else will act; pluralistic ignorance compounds it (everyone reads everyone else\u2019s calm as evidence nothing is wrong). The antidote is design, not hope: make one person responsible by name, make the need explicit, and reduce ambiguity — the intervention questions write themselves once the mechanism is clear. Note the crossover with aggression\u2019s bullying section: an audience can inhibit action as easily as it can film it.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Scenario to effect to mechanism',
        steps: [
          'Scenario: \u201cMei joined a gym and, after three weeks of seeing the same faces at the same hour, finds two of them quite likeable.\u201d Effect: mere exposure via proximity — repeated encounter raised liking with no information exchanged.',
          'Scenario: \u201cA new colleague shares your exact stance on the project dispute; you warm to him within days.\u201d Effect: similarity — agreement validates your view; reciprocity would require his liking you first.',
          'Scenario: \u201cAfter failing her driving test for the third time, Lena slams the door and shouts at her brother.\u201d Effect: hostile aggression riding the frustration-aggression bridge — blocked goal, anger, misdirected harm.',
          'Scenario: \u201cA shopper collapses in a busy mall; eleven people watch; no one moves.\u201d Effect: bystander effect via diffusion of responsibility — each onlooker\u2019s share of duty shrank as the crowd grew.',
          'Design twist: \u201cthe mall guard points at one bystander: \u2018You in the green jacket — call emergency services now.\u2019\u201d The fix targets the mechanism — one named person, explicit need, responsibility no longer divisible.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Repeatedly encountering a stimulus by itself increases liking for it. This is',
            options: ['reciprocity', 'the mere-exposure effect', 'the halo effect', 'instrumental liking'],
            answer: 1,
            explain: 'Mere exposure is the cognitive engine behind proximity\u2019s power: familiarity alone raises liking — which is why seat neighbours become friends.',
          },
          {
            q: 'A hired thief poisons a business rival to collect a payment. Which type of aggression?',
            options: ['hostile — anger-driven', 'instrumental — a means to an end', 'frustration-aggression', 'prosocial harm'],
            answer: 1,
            explain: 'The harm serves an external goal without anger as the engine — instrumental aggression. Hostile aggression aims at pain for its own emotional sake.',
          },
          {
            q: 'Which three features define bullying?',
            options: [
              'anger, revenge, secrecy',
              'repetition, intention to harm, power imbalance',
              'proximity, similarity, reciprocity',
              'frustration, anonymity, audience',
            ],
            answer: 1,
            explain: 'Bullying is repeated negative treatment over time with an imbalance of power — the trio distinguishes it from one-off conflict.',
          },
          {
            q: 'In an emergency with many onlookers, each person helps less because',
            options: [
              'strangers cannot communicate',
              'responsibility is diffused across the crowd',
              'people enjoy watching emergencies',
              'helping is always altruistic',
            ],
            answer: 1,
            explain: 'Diffusion of responsibility: the obligation splits among witnesses, each share shrinking as numbers grow — the engine of the bystander effect.',
          },
          {
            q: 'Which intervention most directly counteracts the bystander effect?',
            options: [
              'asking the crowd in general to help',
              'selecting one person by name and giving one explicit task',
              'waiting for someone to volunteer naturally',
              'increasing the number of witnesses',
            ],
            answer: 1,
            explain: 'Named assignment makes responsibility non-divisible and removes ambiguity — it reverses the exact mechanism that suppressed helping.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading \u201cfamiliarity breeds contempt\u201d as psychology\u2019s verdict — the data say the opposite: exposure raises liking. Calling all harm \u201cviolence\u201d and skipping the intention test that separates hostile from instrumental. Treating frustration-aggression as automatic — frustration raises the probability of aggression, it does not guarantee it. Confusing prosocial behavior with altruism: altruism is the contested no-benefit end of a broad umbrella. Explaining the bystander effect with \u201cindifference\u201d — the mechanism is responsibility diffusion and ambiguity, not coldness. And forgetting the design implication in scenario questions: examiners ask for the fix, not just the label.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the conformity-and-obedience lesson for the crowd-level sibling of these pairwise effects, the stress lesson for how conflict feeds the endocrine channel, and the management lessons for these findings at work. Primary reading: OpenStax, Psychology 2e \u00a712.6 \u201cAggression\u201d and \u00a712.7 \u201cProsocial Behavior\u201d (openstax.org, CC BY-NC-SA); LibreTexts, Principles of Social Psychology ch.8 \u201cLiking and Loving\u201d, \u00a78.1 \u201cInitial Attraction\u201d (CC licensed).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Attraction\u2019s four levers: proximity (opportunity), similarity (validation), reciprocity (reward), attractiveness (halo).',
        'Mere exposure: repetition alone raises liking — the engine inside proximity.',
        'Aggression splits by intention: hostile burns with anger, instrumental serves a goal.',
        'Frustration-aggression: blocked goals raise aggression\u2019s probability.',
        'Bullying = repetition + intention + power imbalance; cyberbullying scales it.',
        'Bystander effect rides diffusion of responsibility; named assignment is the fix.',
      ] },
    ],
  },
  {
    id: 'math-algebra-notation-manipulation',
    title: 'Algebraic Notation and Manipulation: The Grammar of Expressions',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Elementary Algebra',
    tier: 'core',
    concepts: [
      'Terms, coefficients, variables, degrees',
      'Collecting like terms',
      'Expanding brackets with the distributive law',
      'Factorising: common factor first',
      'Difference of squares and quadratic factor patterns',
      'Rearranging formulae: inverse operations in order',
      'Identities versus equations',
      'Substitution and evaluation',
    ],
    words: 1409,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Algebra is a written language for computation, and manipulation is its grammar: simplify, expand, factorise, rearrange. Every later technique — solving quadratics, differentiating, computing with matrices — assumes these moves are automatic. The vocabulary matters as much as the moves, because questions are phrased in it: \u201csimplify\u201d means make shorter without changing value; \u201cexpand\u201d means multiply out; \u201cfactorise\u201d means reverse that; \u201crearrange\u201d means solve for a named letter. Mixing up the commands is the most common way strong arithmetic students lose algebra marks.',
      },
      {
        kind: 'para',
        text: 'This lesson drills the grammar to fluency: reading expressions through their anatomy (terms, coefficients, degrees), the three core moves (collect, expand, factorise) and the fourth (rearranging formulae), with the identity/equation distinction drawn sharply. The quadratics lesson then puts the machinery to work solving equations.',
      },
      { kind: 'heading', text: 'The anatomy of an expression' },
      {
        kind: 'para',
        text: 'An expression like 3x\u00b2 \u2212 5x + 7 is built from terms — the pieces separated by plus and minus signs (here: 3x\u00b2, \u22125x, 7). Each term has a coefficient (the number multiplying the letters: 3, \u22125, and 7 as a constant term) and a degree (the total exponent of its variables: x\u00b2 has degree 2, x has degree 1, a constant has degree 0); the degree of the whole expression is its highest term degree. Like terms share exactly the same letters raised to exactly the same powers — 5x and \u22122x are like; 5x and 5x\u00b2 are not. This vocabulary is what exam questions test directly: \u201cstate the coefficient of x in \u2026\u201d, \u201cwhat is the degree of \u2026\u201d — one-word answers that cost marks if the language is fuzzy.',
      },
      { kind: 'heading', text: 'The core moves' },
      {
        kind: 'para',
        text: 'Collecting like terms: add or subtract the coefficients of like terms and keep the shared letter part. 7a + 3b \u2212 2a + b = 5a + 4b. The sign belongs to the term that follows it — the classic error is dropping a minus during collection, so underline terms with their signs before combining. Expanding brackets uses the distributive law: multiply the outside by everything inside. 3(2x \u2212 5) = 6x \u2212 15; double brackets produce four products: (x + 2)(x + 3) = x\u00b2 + 3x + 2x + 6 = x\u00b2 + 5x + 6 — the middle coefficient is the sum of the inner numbers, the end product their product. Two signs in a row obey minus-times-minus: (x \u2212 4)(x \u2212 3) = x\u00b2 \u2212 7x + 12.',
      },
      {
        kind: 'para',
        text: 'Factorising reverses expansion, and the order of attempts is fixed. First, take out the highest common factor: 6x\u00b2 + 9x = 3x(2x + 3) — always check for one before anything fancier. Second, recognize named patterns: the difference of squares a\u00b2 \u2212 b\u00b2 = (a \u2212 b)(a + b) — x\u00b2 \u2212 49 = (x \u2212 7)(x + 7) — and the perfect square a\u00b2 \u00b1 2ab + b\u00b2 = (a \u00b1 b)\u00b2. Third, for quadratics like x\u00b2 + bx + c, hunt a factor pair of c that sums to b: x\u00b2 \u2212 x \u2212 12 = (x \u2212 4)(x + 3) because (\u22124)(+3) = \u221212 and \u22124 + 3 = \u22121. Every factorisation can be checked instantly by expanding back — an exam habit that costs ten seconds and saves whole marks.',
      },
      { kind: 'heading', text: 'Rearranging formulae, and identities versus equations' },
      {
        kind: 'para',
        text: 'Rearranging a formula is solving with a letter as the target: undo the operations in reverse order, doing to both sides whatever you do. From A = 2\u03c0r, divide both sides by 2\u03c0: r = A/(2\u03c0). From v = u + at: subtract u, then divide by a — t = (v \u2212 u)/a. Two discipline points: keep the operations symmetric (whatever happens left happens right), and when the target letter appears in more than one term, collect those terms first and factor the letter out — from ax \u2212 bx = c, factor x(a \u2212 b) = c, then x = c/(a \u2212 b). That last maneuver — factorise to isolate — is the one examiners build \u201chard\u201d rearrangement questions from.',
      },
      {
        kind: 'para',
        text: 'Finally, keep identities and equations apart. An equation is true for particular values: 2x = 10 holds only at x = 5. An identity is true for every value: 2(x + 3) \u2261 2x + 6, and (a \u00b2 \u2212 b\u00b2) \u2261 (a \u2212 b)(a + b) — identities are marked with \u2261 and are the expansion and factorisation patterns stated as facts. The practical test: an equation you solve; an identity you verify or use. Questions of the form \u201cshow that \u2026\u201d are identity questions — expand or factorise one side into the other, no solving allowed, and saying \u201cx = 5\u201d there is a category error that costs the mark.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One expression, all four commands',
        steps: [
          'Start: 3x(2x \u2212 5) \u2212 2x(x \u2212 4) + 7x.',
          'Expand: 6x\u00b2 \u2212 15x \u2212 2x\u00b2 + 8x + 7x — each bracket product keeps its sign.',
          'Collect like terms: (6 \u2212 2)x\u00b2 + (\u221215 + 8 + 7)x = 4x\u00b2 + 0x = 4x\u00b2.',
          'Factorise the result: 4x\u00b2 = 4x \u00b7 x, so 4x\u00b2 = (2x)\u00b2 \u2212 0\u00b2 — a difference of squares with b = 0; more usefully, its highest common factor form is 4x\u00b2 = 4x(x).',
          'Rearrange practice with the same shapes: from 4x\u00b2 \u2212 k = y, add k and square-root: x = \u00b1\u221a((y + k)/4) — reverse order, symmetric operations, both roots.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the expression 5x\u00b3 \u2212 2x + 8, what is the coefficient of x and the degree of the expression?',
            options: [
              'coefficient \u22122; degree 3',
              'coefficient 2; degree 3',
              'coefficient \u22122; degree 8',
              'coefficient 5; degree 3',
            ],
            answer: 0,
            explain: 'The x-term is \u22122x, so its coefficient is \u22122 (sign included); the highest term degree is 3, which is the expression\u2019s degree.',
          },
          {
            q: 'Expand and simplify (x \u2212 3)(x + 5).',
            options: [
              'x\u00b2 + 2x \u2212 15',
              'x\u00b2 \u2212 2x \u2212 15',
              'x\u00b2 + 8x \u2212 15',
              'x\u00b2 \u2212 15',
            ],
            answer: 0,
            explain: 'Four products: x\u00b2 + 5x \u2212 3x \u2212 15 = x\u00b2 + 2x \u2212 15. Middle coefficient = 5 + (\u22123) = 2; constant = 5 \u00d7 (\u22123) = \u221215.',
          },
          {
            q: 'Factorise 4x\u00b2 \u2212 25.',
            options: [
              '(2x \u2212 5)(2x + 5)',
              '(4x \u2212 5)(x + 5)',
              '(2x \u2212 5)\u00b2',
              'cannot be factorised',
            ],
            answer: 0,
            explain: 'Difference of squares: 4x\u00b2 = (2x)\u00b2 and 25 = 5\u00b2, so a\u00b2 \u2212 b\u00b2 = (a \u2212 b)(a + b) with a = 2x, b = 5.',
          },
          {
            q: 'Rearrange p = 2(a + b) to make b the subject.',
            options: [
              'b = p \u2212 2a',
              'b = (p \u2212 2a)/2',
              'b = p/(2a)',
              'b = 2(p \u2212 a)',
            ],
            answer: 1,
            explain: 'Divide both sides by 2 first (a + b = p/2), then subtract a: b = p/2 \u2212 a, which equals (p \u2212 2a)/2. Reverse order, symmetric operations.',
          },
          {
            q: 'Which statement is an identity rather than an equation?',
            options: [
              '3x + 1 = 10',
              'x\u00b2 = 16',
              '(x + 1)\u00b2 \u2261 x\u00b2 + 2x + 1',
              '2x \u2212 4 = 0',
            ],
            answer: 2,
            explain: 'It holds for every x — an expansion pattern stated as a fact, marked with \u2261. The others hold only for specific values and are solved.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Dropping a minus while collecting or expanding — carry signs attached to their terms. Multiplying only the first inside term by the outside bracket — the distributive law hits everything inside. Forgetting the highest common factor check before fancy factorising. Announcing (a + b)\u00b2 = a\u00b2 + b\u00b2 — the middle term 2ab is the most-exploited error in algebra. Rearranging by moving symbols across without operating on both sides. Solving when the question says \u201cshow that\u201d — identity verification needs expansion or factorisation, not a solution. And treating x\u00b2 + 5x + 6 as (x + 6)(x + 1): the product 6 pairs with sum 5 via 2 and 3, not 6 and 1.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: arithmetic fluency with negatives and fractions. Follow immediately with the quadratics lesson — this lesson\u2019s factorising is that lesson\u2019s first solving method — and then with simultaneous equations and graph-sketching topics. Primary reading: OpenStax, Intermediate Algebra 2e, ch.1 \u201cThe Language of Algebra\u201d for the vocabulary and ch.9\u2019s factoring review for the patterns (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Anatomy: terms, coefficients (sign included), degrees (highest wins).',
        'Collect like terms — identical letter parts only, signs carried.',
        'Expand with the distributive law; double brackets give four products.',
        'Factorise in order: common factor, named patterns, factor pair of c summing to b.',
        'Rearrange: reverse order, symmetric operations, factor the target out when it repeats.',
        'Equations are solved; identities (\u2261) are shown — different commands entirely.',
      ] },
    ],
  },
  {
    id: 'math-quadratics-completing-square',
    title: 'Quadratics: Four Ways to Solve, One Formula to Rule Them',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Quadratic Equations',
    tier: 'core',
    concepts: [
      'Standard form ax\u00b2 + bx + c = 0',
      'Solving by factorising',
      'The square-root property',
      'Completing the square: the recipe and why it works',
      'The quadratic formula and its four-step use',
      'The discriminant and the number of solutions',
      'Choosing the fastest method',
      'Vertex form and applications',
    ],
    words: 1471,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Quadratic equations are the boundary between school arithmetic and real algebra: the first equation type whose solutions are not obvious, and the template for every higher-degree technique that follows. Projectile heights, areas, revenue curves — when one quantity is the square of another plus a linear term, a quadratic models it. The examinable skill set is compact and fixed: put the equation in standard form, choose among four solving methods, read the discriminant to know how many solutions exist, and switch to vertex form when the question asks for a maximum or minimum. This lesson covers all four moves and the decision rule between them.',
      },
      { kind: 'heading', text: 'Standard form and the first two methods' },
      {
        kind: 'para',
        text: 'Standard form is ax\u00b2 + bx + c = 0 with a \u2260 0 — everything moved to one side, zero on the other. Every method begins here, and most lost marks on quadratics are lost before any solving: a sign dropped while moving terms poisons everything downstream. Rearrange first, identify a, b and c, then solve.',
      },
      {
        kind: 'para',
        text: 'Method one, factorising, uses the algebra lesson\u2019s machinery: x\u00b2 \u2212 x \u2212 12 = 0 factorises to (x \u2212 4)(x + 3) = 0, and a product is zero only when a factor is zero — so x = 4 or x = \u22123. Fast and clean when the factor pair is friendly. Method two, the square-root property, handles the missing-middle-term shape: x\u00b2 = k gives x = \u00b1\u221ak (both roots!), and a(x \u2212 h)\u00b2 = k gives x = h \u00b1 \u221a(k/a). The habit to keep: a square root always carries a plus-or-minus — forgetting the negative root is the single most common answer-killing slip on this method.',
      },
      { kind: 'heading', text: 'Completing the square: the recipe and the reason' },
      {
        kind: 'para',
        text: 'Completing the square rewrites any quadratic so the x appears exactly once, squared: x\u00b2 + bx + c = (x + b/2)\u00b2 + (c \u2212 b\u00b2/4). The recipe, when the leading coefficient is 1: take half of b, square it, add and subtract that square, then regroup. For x\u00b2 + 6x + 2 = 0: half of 6 is 3, squared is 9, so x\u00b2 + 6x + 2 = (x + 3)\u00b2 \u2212 9 + 2 = (x + 3)\u00b2 \u2212 7; setting this to zero gives (x + 3)\u00b2 = 7 and x = \u22123 \u00b1 \u221a7. When the leading coefficient is not 1, divide the whole equation by a first — OpenStax\u2019s Intermediate Algebra makes the same point: completing the square requires a = 1, so make it so.',
      },
      {
        kind: 'para',
        text: 'Why the maneuver works: (x + b/2)\u00b2 expands to x\u00b2 + bx + b\u00b2/4 — the square of half of b is exactly the constant that completes x\u00b2 + bx into a perfect square. Adding and subtracting b\u00b2/4 changes nothing while creating that square. Beyond solving, the form pays twice: (x \u2212 h)\u00b2 + k is the vertex form of the parabola, handing over the turning point (h, k) directly, and it is the launchpad from which the quadratic formula is derived.',
      },
      { kind: 'heading', text: 'The quadratic formula and the discriminant' },
      {
        kind: 'para',
        text: 'Method four works on every quadratic: x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/(2a). OpenStax drills a four-step procedure: write the equation in standard form and identify a, b, c; write the formula; substitute; simplify — and then CHECK the solutions by substitution. Worked example from the same text: 2x\u00b2 + 9x \u2212 5 = 0 has a = 2, b = 9, c = \u22125, giving x = (\u22129 \u00b1 \u221a(81 + 40))/4 = (\u22129 \u00b1 11)/4, so x = 1/2 or x = \u22125. The formula is an equation — start every line with x =, and keep the whole numerator over the whole denominator.',
      },
      {
        kind: 'para',
        text: 'The discriminant b\u00b2 \u2212 4ac counts the solutions before any arithmetic: positive — two distinct real roots; zero — exactly one (a repeated root; the parabola touches the axis); negative — no real roots (two complex ones). So b\u00b2 \u2212 4ac = 9 \u2212 4(1)(\u22124) style questions are answered by inspection after computing one number. The method-choice strategy rounds out the toolkit, in OpenStax\u2019s order: try factorising first if the factors are easy; use the square-root property if the shape fits; otherwise the quadratic formula — and completing the square is the method you fall back on when you must SHOW the vertex or the derivation. Applications tie it together: projectile height h = \u221216t\u00b2 + v\u2080t questions ask \u201cwhen is h = 0?\u201d (solve) or \u201cwhat is the maximum height?\u201d (vertex form, or \u2212b/2a for the time).',
      },
      {
        kind: 'example',
        title: 'Worked Example — One equation, method decision live',
        steps: [
          'Solve 2x\u00b2 \u2212 4x \u2212 3 = 0. Standard form already; a = 2, b = \u22124, c = \u22123.',
          'Method check: factorising — factors of 2 \u00d7 (\u22123) summing to \u22124? \u22126 and 2 give \u22124, but 2x\u00b2 + 2x \u2212 6x \u2212 3 resists clean grouping (2x(x+1) \u2212 3(2x+1)) — not friendly. Square-root property: no isolated square. So: quadratic formula.',
          'Formula: x = (4 \u00b1 \u221a(16 + 24))/4 = (4 \u00b1 \u221a40)/4 = (4 \u00b1 2\u221a10)/4 = (2 \u00b1 \u221a10)/2.',
          'Discriminant read: b\u00b2 \u2212 4ac = 16 + 24 = 40 > 0 — two distinct real roots, as found. (If it had been 0, the equation would collapse to one root; negative, none.)',
          'Vertex bonus: x = \u2212b/2a = 4/4 = 1; f(1) = 2 \u2212 4 \u2212 3 = \u22125. Vertex (1, \u22125) — the minimum, since a > 0. The same numbers, read two ways.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Solve x\u00b2 = 49.',
            options: ['x = 7', 'x = \u00b17', 'x = \u00b124.5', 'x = 7 or x = 0'],
            answer: 1,
            explain: 'Square-root property: x = \u00b1\u221a49 = \u00b17. Every square root in solving carries both signs — the negative root is the classic dropped solution.',
          },
          {
            q: 'What number completes the square for x\u00b2 + 10x + 3?',
            options: [
              'add and subtract 100',
              'add and subtract 25',
              'add and subtract 10',
              'add and subtract 5',
            ],
            answer: 1,
            explain: 'Half of b = 5; squared = 25. x\u00b2 + 10x + 25 = (x + 5)\u00b2, so the expression becomes (x + 5)\u00b2 \u2212 22.',
          },
          {
            q: 'For 3x\u00b2 + 2x + 5 = 0, the discriminant is',
            options: ['4 \u2212 60 = \u221256: no real solutions', '4 + 60 = 64: two solutions', '9 \u2212 20 = \u221211: no real solutions', '0: one solution'],
            answer: 0,
            explain: 'b\u00b2 \u2212 4ac = 2\u00b2 \u2212 4(3)(5) = 4 \u2212 60 = \u221256. Negative discriminant means the parabola never meets the x-axis — no real roots.',
          },
          {
            q: 'According to the standard method-choice strategy, which equation is best solved by the square-root property?',
            options: [
              'x\u00b2 + 5x + 6 = 0',
              '(x \u2212 3)\u00b2 = 12',
              '2x\u00b2 + 9x \u2212 5 = 0',
              'x\u00b4 \u2212 5x\u00b2 + 6 = 0',
            ],
            answer: 1,
            explain: 'The shape (x \u2212 h)\u00b2 = k is the square-root property\u2019s home turf: x \u2212 3 = \u00b1\u221a12 directly. The others suit factorising or the formula.',
          },
          {
            q: 'A ball\u2019s height is h = \u221216t\u00b2 + 40t. What is its maximum height?',
            options: [
              'solve \u221216t\u00b2 + 40t = 0',
              'vertex: t = \u221240/(2\u00d7(\u221216)) = 1.25, h(1.25) = 25',
              'discriminant: 1600, so height 40',
              'factorise: 8t(5 \u2212 2t), maximum 5',
            ],
            answer: 1,
            explain: 'Maxima need the vertex, not the roots: t = \u2212b/2a = 1.25 s, h(1.25) = \u221216(1.5625) + 50 = 25. Solving h = 0 finds landing time, not peak.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Solving before reaching standard form — always gather to ax\u00b2 + bx + c = 0 first. Dropping the \u00b1 on square roots, in the square-root property and the formula alike. Halving b twice or forgetting to divide by a before completing the square when a \u2260 1. Writing the formula with only part of the numerator over 2a — the whole of \u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac) sits over 2a. Announcing one solution when the discriminant is negative and \u201cno real solutions\u201d was meant — complex roots still exist. Answering maximum-height questions with roots instead of the vertex. And skipping the check — substitution catches sign slips the algebra hid.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the algebraic-notation-and-manipulation lesson — factorising and rearranging are this lesson\u2019s first and third methods. Follow with function-graphing topics (the parabola as a function\u2019s picture) and, later, the derivative lesson, whose critical points generalize the vertex. Primary reading: OpenStax, Intermediate Algebra 2e \u00a79.2 \u201cSolve Quadratic Equations by Completing the Square\u201d and \u00a79.3 \u201cSolve Quadratic Equations Using the Quadratic Formula\u201d, with \u00a79.5\u2019s projectile applications (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Standard form first: ax\u00b2 + bx + c = 0, a \u2260 0; identify a, b, c.',
        'Factorise when friendly; square-root property when a square stands alone — both roots.',
        'Complete the square: half of b, squared, added and subtracted; divide by a first if needed.',
        'Formula: x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/2a — four steps, then check.',
        'Discriminant trichotomy: positive two, zero one, negative none.',
        'Vertex from \u2212b/2a: maxima and minima live there, not at the roots.',
      ] },
    ],
  },
  {
    id: 'chem-isotopes-nuclear-notation',
    title: 'Isotopes and Nuclear Notation: Reading an Atom\u2019s ID Card',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Atomic Structure',
    tier: 'core',
    concepts: [
      'Protons, neutrons, electrons: charge, mass, location',
      'Atomic number Z and mass number A',
      'The AZX nuclear symbol convention',
      'Atomic charge and ion notation',
      'Isotopes: same element, different neutron count',
      'Hydrogen and carbon isotope families',
      'Average atomic mass from abundances',
      'Element identity is proton count only',
    ],
    words: 1324,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Every atom carries an ID card, and nuclear notation is how chemistry writes it: the element, its proton count, its mass count and its charge, compressed into one symbol like \u00b2\u2074\u2081\u2082Mg\u00b2\u207a. Reading and writing this notation fluently is the entry ticket to nuclear chemistry, radioactivity and half-life questions, and to the periodic table\u2019s decimal masses — which are averages, and the averaging arithmetic is examinable in itself. This lesson builds the card from its three particles, then teaches the isotope logic that explains why one element can wear several mass numbers at once.',
      },
      { kind: 'heading', text: 'Three particles, two numbers' },
      {
        kind: 'para',
        text: 'The atom\u2019s inventory is three particles. Protons sit in the nucleus with charge 1+ and mass about 1 amu (1.00727). Neutrons also sit in the nucleus with no charge and essentially the same mass (1.00866). Electrons orbit far outside the nucleus with charge 1\u2212 and negligible mass (about 0.00055 amu — roughly 1/1836 of a proton). Two counts pin down an atom\u2019s identity and bulk: the atomic number Z — the proton count — which names the element (6 protons means carbon, always), and the mass number A — protons plus neutrons — which sets the isotope. Because electrons weigh almost nothing, the mass number measures the nucleus alone.',
      },
      {
        kind: 'para',
        text: 'Charge closes the accounting: atomic charge equals protons minus electrons. A neutral atom has equal counts; strip electrons and the atom becomes a positive ion (Mg losing two electrons: charge 2+); add them and it goes negative. So each of the three counts is derivable from the other two plus the charge — and conversion drills (\u201chow many neutrons in \u2074\u2070\u2081\u2089K?\u201d — A \u2212 Z = 40 \u2212 19 = 21) are pure notation fluency.',
      },
      { kind: 'heading', text: 'The AZX symbol and the isotope families' },
      {
        kind: 'para',
        text: 'The nuclear symbol stacks the two numbers on the element\u2019s letter: mass number A as a left superscript, atomic number Z as a left subscript, X the element symbol — \u00b2\u00b3\u2081\u2081Na. The charge, when present, rides as a right superscript: \u00b2\u2074\u2081\u2082Mg\u00b2\u207a is magnesium-24 that has lost two electrons (12 protons, 12 neutrons, 10 electrons). Z is technically redundant — the letter already fixes it — which is why chemists often write carbon-14 or C-14 and omit the subscript. Reading conventions is the exam skill: given any partial card, reconstruct the rest.',
      },
      {
        kind: 'para',
        text: 'Isotopes are atoms of the same element — same Z, same chemistry — wearing different neutron counts and hence different A. Hydrogen\u2019s three make the family vivid: protium (\u00b9H, one proton, no neutron — 99.989 per cent of natural hydrogen), deuterium (\u00b2H, one neutron — the heavy hydrogen of \u201cheavy water\u201d), tritium (\u00b3H, two neutrons — trace, radioactive). Carbon\u2019s family underpins dating and bookkeeping in biology: carbon-12 (six protons, six neutrons — 98.89 per cent), carbon-13 (seven neutrons — 1.11 per cent), carbon-14 (eight neutrons — trace, radioactive). Chemistry barely notices which isotope is present — same electrons, same reactions — which is exactly why isotope labels work as tracers.',
      },
      { kind: 'heading', text: 'Average atomic mass: the weighted average' },
      {
        kind: 'para',
        text: 'The periodic table\u2019s atomic masses are averages over nature\u2019s isotope mix, weighted by abundance: average mass = \u03a3(fractional abundance \u00d7 isotopic mass). OpenStax\u2019s worked example: boron is 19.9 per cent boron-10 (mass 10.0129 amu) and 80.1 per cent boron-11 (mass 11.0093 amu), so the average is (0.199 \u00d7 10.0129) + (0.801 \u00d7 11.0093) = 10.81 amu — which is the 10.81 printed on the table. The reverse direction is the exam favourite: given the average and both isotope masses, find the abundances — set x as the fraction of one isotope, write the weighted equation, solve; the abundances always sum to one.',
      },
      {
        kind: 'para',
        text: 'Three reading habits finish the topic. First, the average always sits closest to the more abundant isotope\u2019s mass — chlorine\u2019s 35.45 says chlorine-35 dominates over chlorine-37, no calculation needed. Second, mass numbers are always whole (they count particles); atomic masses on the table are not (they are weighted averages). Third, radioactivity questions ride on the neutron excess — carbon-14 decays, carbon-12 does not — which is the doorway the half-life lessons walk through. Identity, bulk, charge, abundance: four facts, one card.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One symbol, every question it answers',
        steps: [
          'Given \u00b2\u00b3Na (sodium-23): Z = 11 for sodium, so protons = 11, neutrons = 23 \u2212 11 = 12, and neutral atoms carry 11 electrons.',
          'Ionized form \u00b2\u00b3Na\u207a: same nucleus (11 p, 12 n), but charge 1+ means electrons = 10 — one lost. Identity never changed: proton count fixed it throughout.',
          'Average-mass drill: chlorine is 75.8 per cent chlorine-35 and 24.2 per cent chlorine-37 \u2014 average = (0.758 \u00d7 34.97) + (0.242 \u00d7 36.97) \u2248 35.45 amu, matching the table.',
          'Reverse drill: an element\u2019s two isotopes have masses 10 and 11 and the average is 10.8. Fractions: x(10) + (1 \u2212 x)(11) = 10.8, so x = 0.2 \u2014 twenty per cent of the lighter isotope.',
          'Family check: which particles differ among \u00b9H, \u00b2H, \u00b3H? Neutrons only — protons (1) and electrons (1, when neutral) are fixed by element identity. Same chemistry, different bulk.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'How many neutrons does \u2074\u2070\u2081\u2089K contain?',
            options: ['19', '21', '40', '59'],
            answer: 1,
            explain: 'Neutrons = A \u2212 Z = 40 \u2212 19 = 21. The mass number counts protons plus neutrons; the subscript counts protons alone.',
          },
          {
            q: 'An ion is written \u00b2\u2074\u2081\u2082Mg\u00b2\u207a. How many electrons does it carry?',
            options: ['12', '14', '10', '24'],
            answer: 2,
            explain: 'Neutral magnesium has 12 electrons; charge 2+ means two were removed, leaving 10. Protons (12) and neutrons (12) are unchanged.',
          },
          {
            q: 'Protium, deuterium and tritium are all hydrogen because they share',
            options: ['the same mass number', 'the same neutron count', 'the same proton count', 'the same charge'],
            answer: 2,
            explain: 'Element identity is proton count (Z = 1) — nothing else. The three isotopes differ only in neutrons (0, 1, 2).',
          },
          {
            q: 'Boron\u2019s average atomic mass is 10.81 amu, between the masses of boron-10 and boron-11. What does that imply?',
            options: [
              'boron-11 is more abundant',
              'boron-10 is more abundant',
              'the isotopes are equally abundant',
              'boron-12 must exist',
            ],
            answer: 0,
            explain: 'A weighted average sits closest to the dominant isotope: 10.81 is nearer 11 than 10, so boron-11 carries the larger fraction (about 80 per cent).',
          },
          {
            q: 'Why do chemists write carbon\u2019s mass on the periodic table as 12.011 rather than a whole number?',
            options: [
              'electrons add fractional mass',
              'it is the abundance-weighted average of carbon\u2019s isotopes',
              'carbon-13 is radioactive and unstable',
              'rounding errors in measurement',
            ],
            answer: 1,
            explain: 'The table averages the natural isotope mix — mostly carbon-12 with 1.11 per cent carbon-13 (and trace carbon-14) — producing a non-integer.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping the two stacked numbers — mass number A is the left superscript, atomic number Z the left subscript; the bigger number rides on top. Computing neutrons as A minus electrons, or subtracting the wrong pair: neutrons = A \u2212 Z, always. Forgetting the charge when counting electrons: 2+ means two fewer than Z. Treating isotopes as different elements — identity is proton count; isotopes share chemistry and differ in bulk and (sometimes) stability. Ignoring abundances in average-mass problems — a plain mean of isotope masses is wrong unless the mix is fifty-fifty. And assuming a mass number appears on the periodic table: the table prints averages; only nuclear symbols carry mass numbers.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the periodic-trends lesson (Z drives every trend the table shows), the ions-and-aqueous-solutions lesson (charge notation in reactions), and the radioactive-decay topics, where unstable isotope ratios become clocks. Primary reading: OpenStax, Chemistry 2e \u00a72.3 \u201cAtomic Structure and Symbolism\u201d (openstax.org, CC BY-NC-SA) — the subatomic-particle table, the AZX convention and the boron average-mass example used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three particles: protons (1+, nucleus), neutrons (neutral, nucleus), electrons (1\u2212, far out, nearly massless).',
        'Z = protons = element identity; A = protons + neutrons; charge = protons \u2212 electrons.',
        'Nuclear symbol: A top-left, Z bottom-left, charge top-right; neutrons = A \u2212 Z.',
        'Isotopes: same Z, different neutron counts — protium/deuterium/tritium; carbon-12/13/14.',
        'Average atomic mass = \u03a3(abundance \u00d7 mass); it hugs the dominant isotope.',
        'Mass numbers are whole; table masses are averages — never confuse the two.',
      ] },
    ],
  },
]
