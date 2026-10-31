/**
 * Knowledge Universe — Zoology — Chapter 01: Animal Diversity & Form
 * 2 lessons · ~2,545 words
 * fields: Animal Biology, Zoology
 * legacy sources: life-sciences.ts, x29-orphan-closure-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Animal Diversity, Histology]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-animal-tissue-types — Animal Tissue Types: Four Families, One Body Plan
 *   01.2 bio-zoology-body-plans — The Animal Kingdom: A Tour of Body Plans and Phyla
 */
import type { KnowledgeTopic } from '../../types'

export const zoologyCh01: KnowledgeTopic[] = [
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
  // ------------------------------------------------------------------
  {
    id: 'bio-zoology-body-plans',
    title: 'The Animal Kingdom: A Tour of Body Plans and Phyla',
    domain: 'Life Sciences',
    field: 'Zoology',
    branch: 'Animal Diversity',
    tier: 'core',
    concepts: [
      'What makes an animal an animal',
      'Symmetry and the rise of a head end',
      'Germ layers and body cavities',
      'The phylum tour: sponges to chordates',
      'Protostomes, deuterostomes, and your kin',
    ],
    words: 895,
    readMins: 4,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Animals are multicellular consumers — they eat other organisms, lack the rigid walls and chloroplasts of plants, and bind their cells together with the protein collagen. From that single shared decision, evolution has assembled over thirty phyla: sponges that pump, jellyfish that sting, worms that burrow, squid that solve problems, and everything with a backbone. This tour walks the major body plans — symmetry, layers, cavities — and the phyla built from them.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Arthropods alone — insects, spiders, crustaceans — account for more than 80 percent of all described animal species. Chordates, the phylum containing every fish, bird, and mammal, are a rounding error by headcount. Familiarity is not importance, and reading the tree corrects the eye.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Animals are heterotrophs: they obtain energy and carbon by eating, not by photosynthesis. Their cells lack walls, letting them squeeze, change shape, and form muscles and nerves; collagen glues the tissues together. Almost all animals develop from a blastula embryo and move under their own power at some stage of life — the sponges, permanently anchored, mark the base of the tree.',
      },
      {
        kind: 'para',
        text: 'Sponges are asymmetrical. Cnidarians — jellyfish, anemones, corals — are radial, built like wheels with many identical spokes and no front or back. The decisive invention is bilateral symmetry: a head-to-tail axis with mirrored sides, which pairs muscles for directed crawling and concentrates sense organs at the front that travels first — cephalization. From flatworms to falcons, that is the layout.',
      },
      {
        kind: 'para',
        text: 'Embryos build from germ layers. Cnidarians are diploblastic — two tissue layers; all bilaterians are triploblastic, adding a middle mesoderm that becomes muscle, bone, heart, and kidney. Many also excavate a coelom, a fluid-filled cavity between gut and body wall that cushions organs and gives muscles a hydrostatic scaffold to push against — the trick behind an earthworm\'s crawl.',
      },
      {
        kind: 'para',
        text: 'The tour, briefly. Sponges (Porifera) filter-feed without nerves or muscles; cnidarians sting with explosive harpoon cells; flatworms (Platyhelminthes) are thin enough to need no cavity; roundworms (Nematoda) molt and occur in staggering numbers; mollusks (Mollusca) run from snails to octopuses, the most intelligent invertebrates; annelids (Annelida) add segmented bodies; arthropods dominate on jointed legs and chitin armor; echinoderms like starfish run on hydraulic water-vascular systems; and chordates get a notochord, a hollow dorsal nerve cord, and a post-anal tail at some stage.',
      },
      {
        kind: 'para',
        text: 'Bilaterians split deep by one embryological detail: which opening of the early gut becomes the mouth. In protostomes — arthropods, mollusks, annelids — the first opening becomes the mouth. In deuterostomes — echinoderms and chordates — it becomes the anus, and the mouth opens second. The startling consequence: by development, you are more closely related to a starfish than to a lobster, resemblance notwithstanding.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how animal species are distributed across phyla.',
          'Recall the governing idea: diversity is wildly uneven across body plans.',
          'Apply: of roughly 1.5 million described animal species, arthropods account for over a million; mollusks about 85,000; chordates about 70,000 — and mammals, for all their prominence, only some 6,500.',
          'State the result: a randomly chosen animal is almost certainly an arthropod, most likely an insect — the familiar vertebrate cast is a statistical fringe.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Coral reefs — cnidarian skeletons — shelter perhaps a quarter of marine species on under one percent of the ocean floor.',
          'Soil-transmitted worm infections affect well over a billion people, driving tropical-medicine programs.',
          'Octopus cognition research has rewritten ideas about invertebrate intelligence — and cephalopod welfare rules.',
          'Tunicate and lancelet genomes illuminate how the vertebrate body was assembled.',
          'Insect monitoring programs track ecosystem health, since arthropods respond fastest to change.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Evolution is not a ladder from sponge to human: phyla are separate, contemporaneous strategies, and the sponge lineage is as "evolved" as you are — just aimed elsewhere. "Worm" describes a shape, not a lineage: flatworms, roundworms, and annelids are about as distantly related as three animals can be while still being worms. And vertebrates are a subphylum of chordates — a branch of a branch, not a peer of the phyla.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Phylum', def: 'A major branch of the animal family tree, ranked below kingdom.' },
          { term: 'Radial symmetry', def: 'A body organized around an axis with many identical parts, as in jellyfish.' },
          { term: 'Bilateral symmetry', def: 'A head-to-tail axis with mirrored sides, enabling directed movement.' },
          { term: 'Cephalization', def: 'The concentration of sense organs and neurons at the leading end.' },
          { term: 'Coelom', def: 'A fluid-filled body cavity cushioning organs and enabling hydrostatic movement.' },
          { term: 'Protostome', def: 'A bilaterian whose embryonic first gut opening becomes the mouth.' },
          { term: 'Notochord', def: 'The stiffening rod along the back of chordates, ancestral to the spine.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Animals differ from plants and fungi fundamentally in that they:',
            options: ['are multicellular', 'eat other organisms and lack cell walls', 'have DNA', 'reproduce'],
            answer: 1,
            explain: 'Heterotrophy plus wall-less, collagen-bound cells — the traits behind muscles and nerves.',
          },
          {
            q: 'Cephalization is:',
            options: ['the concentration of sense organs at a head end', 'the formation of a body cavity', 'the stinging cells of cnidarians', 'molting in arthropods'],
            answer: 0,
            explain: 'Bilateral bodies travel head-first, so sensors and neurons gather at the front.',
          },
          {
            q: 'In deuterostomes, the embryo\'s first opening becomes:',
            options: ['the mouth', 'the coelom', 'the nerve cord', 'the anus, with the mouth forming second'],
            answer: 3,
            explain: 'Mouth-second development groups echinoderms with chordates — starfish are your kin, lobsters are not.',
          },
          {
            q: 'Insects, spiders, and crabs belong to the phylum:',
            options: ['Mollusca', 'Arthropoda', 'Annelida', 'Echinodermata'],
            answer: 1,
            explain: 'Jointed appendages plus a chitin exoskeleton define Arthropoda, the most speciose phylum.',
          },
        ],
      },
    ],
  },
]
