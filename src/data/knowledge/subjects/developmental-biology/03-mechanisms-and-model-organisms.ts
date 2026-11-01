/**
 * Knowledge Universe — Developmental Biology — Chapter 03: Mechanisms & Model Organisms
 * 3 lessons · ~4,025 words (includes the 2026-11-01 salvage increment)
 * field: Developmental Biology
 * legacy sources: x47-bio-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Developmental Mechanisms]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-dev-model-organisms — Model Organisms: Flies, Worms, Fish and the Standard Laboratory Bodies
 *   03.2 bio-dev-morphogenesis — Morphogenesis: The Cell Behaviors That Fold, Tube and Sculpt the Embryo
 *   03.3 devbio-turing-reaction-diffusion — Turing Patterns: How Chemistry Paints Stripes and Spots (~1,434w, salvaged)
 */
import type { KnowledgeTopic } from '../../types'

export const developmentalBiologyCh03: KnowledgeTopic[] = [
  {
    id: 'bio-dev-model-organisms',
    title: 'Model Organisms: Flies, Worms, Fish and the Standard Laboratory Bodies',
    domain: 'Life Sciences',
    field: 'Developmental Biology',
    branch: 'Developmental Mechanisms',
    tier: 'core',
    concepts: [
      'Why biologists concentrate on a few species',
      'Conservation of developmental genes across animals',
      'Drosophila: mutagenesis screens and the 1995 Nobel Prize',
      'C. elegans: the 959-cell lineage and programmed cell death',
      'Zebrafish: transparent embryos and chemical screening',
      'Arabidopsis: the fruit-fly of the plant world',
      'The mouse: knockouts and clinical relevance',
      'Choosing a model: speed, cost, ethics and relevance',
    ],
    words: 1365,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Developmental biology could, in principle, be studied in any of the millions of animal species on Earth. In practice more than half of what we know comes from a short list of about six: the fruit fly, a roundworm, a small fish, a weed, a frog and the mouse. This is not laziness — it is a deliberate scientific strategy. The deep logic of development turned out to be shared, so a gene discovered in a fly has recognizable counterparts in humans, and the fastest-breeding, cheapest, most transparent creatures became the field’s standard instruments.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The reasoning behind model organisms — trade-offs between relevance and practicality, and the surprise of genetic conservation — is itself one of the big ideas of modern biology, and the species in this lesson appear again and again as the “where was this discovered?” answer in every genetics and development course.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Logic of Model Systems' },
      {
        kind: 'para',
        text: 'A good model organism offers some combination of quick generation time, large offspring numbers, small size, cheap food, and — the property that made developmental genetics possible — genetics you can actually do: visible chromosomes, easy crosses, and the ability to keep mutant lines alive. None of them offers everything. The fly breeds in ten days but is an insect, distant from humans; the mouse is close to us but slow and expensive; the worm is transparent and numerically simple but lacks the organ systems doctors care about. Choosing a model is choosing which disadvantages you can afford for the question at hand — the same engineering trade-off as choosing a material for a bridge.',
      },
      {
        kind: 'para',
        text: 'The wager that justified the whole enterprise paid off spectacularly in the 1980s and 1990s, when gene cloning showed that the genes controlling the fly’s body plan had cousins — the same homeobox sequences, the same signaling pathways — in worms, fish, mice and humans. Depth of understanding in one species kept transferring to the others. That is why a roundworm can legitimately teach a medical student.',
      },
      { kind: 'heading', text: 'The Cast' },
      {
        kind: 'para',
        text: 'Drosophila melanogaster, the fruit fly, has been the workhorse of genetics since Morgan’s room at Columbia a century ago. For development, its decisive contribution was the saturation mutagenesis screen: mutate flies at random with chemicals, then sort through tens of thousands of dead embryos for those whose body plan is organized wrongly, and map the genes responsible. The Heidelberg screens of Nüsslein-Volhard and Wieschaus found the segmentation genes this way — one gene at a time, with no prior knowledge of what to look for — and shared the 1995 Nobel Prize. The approach itself, “ask the organism which genes matter,” is as important as any gene it found.',
      },
      {
        kind: 'para',
        text: 'Caenorhabditis elegans, a one-millimetre roundworm, was chosen by Sydney Brenner precisely for its numerical simplicity: the adult hermaphrodite has exactly 959 somatic cells, and John Sulston traced the complete family tree of every one of them, from fertilized egg to adult, under the microscope. That lineage told developmental biology two things no other system could: which cells are cousins of which, and that 131 cells die on schedule during normal development — programmed cell death, whose machinery was worked out in the worm by Horvitz and shared the 2002 Nobel Prize. Two further worm virtues: it is transparent (every cell visible live) and it can be frozen like a seed bank.',
      },
      {
        kind: 'para',
        text: 'Danio rerio, the zebrafish, joined the cast in the 1990s because its embryos develop outside the mother and are optically clear for their first days — a vertebrate you can watch building its spine, beating its heart, one cell division at a time. Large clutches (hundreds of embryos per mating) plus chemical mutagenesis produced thousands of developmental mutants, and because embryos absorb compounds from the water, the fish became the standard vertebrate for small-molecule screening: test a drug library on a live vertebrate embryo in a microtiter plate.',
      },
      {
        kind: 'para',
        text: 'Arabidopsis thaliana, a small mustard weed with no agricultural value, became the plant model by the same logic — small genome (the first plant genome sequenced), tiny size, six-week generation, huge seed counts, and easy transformation. Nearly everything modern plant biology knows about flowering, hormone signaling and pattern formation traces through it. Xenopus frogs supply eggs in bulk for biochemical work on the cell cycle, and the mouse, slow and costly as it is, remains the standing proxy for human medicine: it is where knockout genes are made and where a developmental finding earns clinical attention.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Choosing a Model',
        steps: [
          'Question: which genes control the earliest decision between head and tail in an insect embryo, and are they shared with vertebrates?',
          'Match requirements: need random-mutagenesis genetics over many generations, visible embryonic pattern defects, and sequenced relatives — Drosophila.',
          'Run the logic: chemically mutagenize flies, screen dead embryos for head-to-tail patterning defects, clone the affected genes — this is literally how bicoid-class genes were found.',
          'Test conservation: search human and zebrafish genome databases for similar sequences; test function by knockdown in zebrafish embryos.',
          'Interpret: a conserved counterpart found in fish supports the shared-logic claim; absence would suggest the specific gene is fly-specific even if the pathway is conserved.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Medicine: the apoptosis genes found in C. elegans are the same machinery that fails in cancers and is deliberately triggered in radiation therapy.',
          'Toxicology and drug discovery: zebrafish embryos are a whole-animal first filter for compound safety before mammalian tests.',
          'Agriculture: Arabidopsis findings on flowering time and disease resistance transfer directly to crop breeding programs.',
          'Genome editing: the technical toolkits (transgenics, CRISPR strains) are mature in exactly these species, which is a self-reinforcing reason they stay central.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: '“Model organism” does not mean “representative organism” — every model is a creature of compromises, and findings about worm aging or fly learning must always be checked, not assumed, in humans. A second slip is treating the 959-cell count as a general truth about worms: it is the somatic count of the adult hermaphrodite, one species, one sex.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'saturation mutagenesis screen', def: 'Mutagenizing randomly and screening exhaustively so that, ideally, every gene whose disruption produces the studied phenotype has been found.' },
          { term: 'cell lineage', def: 'The complete ancestry tree of a cell — all divisions from the fertilized egg; fully known for C. elegans.' },
          { term: 'programmed cell death (apoptosis)', def: 'Genetically scheduled cell suicide; discovered as a normal part of worm development.' },
          { term: 'forward versus reverse genetics', def: 'Forward: start from a phenotype and find the gene. Reverse: start from a gene (often knocked out) and find the phenotype.' },
          { term: 'genetic conservation', def: 'Descendant copies of an ancestral gene retaining recognizable sequence and function across species.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What made the Heidelberg Drosophila screens decisive for developmental biology?',
            options: [
              'They sequenced the fly genome',
              'They required no prior knowledge of which genes matter, letting the organism reveal them through patterning defects',
              'They proved flies and humans have identical genes',
              'They showed development is purely chemical',
            ],
            answer: 1,
            explain: 'Random mutagenesis plus systematic screening asked the organism which genes are necessary — an unbiased strategy that found the segmentation and axis-patterning genes.',
          },
          {
            q: 'A researcher must trace the exact ancestry of every cell in a living embryo. Best organism?',
            options: ['Mouse', 'C. elegans', 'Frog', 'Fruit fly'],
            answer: 1,
            explain: 'The worm is transparent, has a small fixed cell number, and its complete somatic lineage (959 cells) has already been mapped.',
          },
          {
            q: 'The main practical advantage of zebrafish over mice for screening chemical compounds is:',
            options: [
              'Fish are more closely related to humans',
              'Transparent external embryos absorb compounds from the water, enabling whole-vertebrate screening at scale',
              'Fish have fewer genes',
              'Fish do not need ethics approval',
            ],
            answer: 1,
            explain: 'Hundreds of clear embryos per mating, developing in treated water, make the zebrafish a scalable vertebrate screen — a role mice cannot fill.',
          },
          {
            q: 'Programmed cell death was first recognized as a normal developmental program in:',
            options: ['Humans, via cancer research', 'C. elegans, through its cell lineage', 'Drosophila embryos', 'Arabidopsis leaves'],
            answer: 1,
            explain: 'The worm lineage shows 131 cells reliably dying on schedule; the genes Horvitz identified proved death is an active genetic program, not decay.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the embryonic-stages lesson: this one assumes you know what gastrulation and organogenesis are, and tells you in which species those stages were decoded. The morphogenesis lesson next covers the cell behaviors these organisms revealed.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'bio-dev-morphogenesis',
    title: 'Morphogenesis: The Cell Behaviors That Fold, Tube and Sculpt the Embryo',
    domain: 'Life Sciences',
    field: 'Developmental Biology',
    branch: 'Developmental Mechanisms',
    tier: 'intermediate',
    concepts: [
      'Morphogenesis: shape from collective cell behavior',
      'Cadherins and selective cell adhesion',
      'Differential adhesion and cell sorting',
      'Epithelial–mesenchymal transition (EMT)',
      'Apical constriction: bending epithelial sheets',
      'Convergent extension: elongating the axis',
      'Branching and tube formation',
      'The extracellular matrix as scaffold and signal',
    ],
    words: 1226,
    readMins: 6,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Telling an embryo what to build is one problem; actually building it is another. A fertilized egg divides into a ball of cells that must fold into a gut, hollow into neural tubes, stretch into an axis, and branch into lungs and glands — all without any supervisor holding a blueprint. Morphogenesis is the name for this shaping, and its unit is not the gene but the cell: genes make molecules, molecules give cells adhesive and motor properties, and those properties, multiplied over thousands of cells obeying physics, produce anatomy. The embryo is less a sculpture than a self-assembling material.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Failures of morphogenesis account for a large share of early miscarriages and congenital defects — neural-tube defects alone affect roughly one in a thousand pregnancies — and the same cell behaviors reappear, dangerously reactivated, when tumors invade tissue.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first fact of embryonic construction is that cells stick to each other selectively. Cadherins — calcium-dependent adhesion molecules — span the membrane and link like molecules on neighboring cells to the actin cytoskeleton within. Because different cadherin types bind their own kind most strongly, an embryo becomes a system of cell populations that prefer their own company. Malcolm Steinberg formalized this in the differential adhesion hypothesis: like oil and water demixing, cell populations sort so that the more strongly adhesive population moves to the center, the less adhesive one surrounds it. Reaggregated embryonic cells genuinely do this — sorting themselves into concentric tissues like a liquid mixture finding its equilibrium.',
      },
      {
        kind: 'para',
        text: 'Most of the early embryo is organized as epithelia — sheets of cells polarized into apical (outer) and basal (inner) faces, sealed to their neighbors and sitting on a basement membrane. The fundamental move of morphogenesis is to remodel these sheets, and the toolkit is small. Apical constriction narrows the top face of selected cells; since the basal side stays wide, the sheet has no choice but to bend inward. This single trick, driven by a purse-string of actin and myosin, makes the neural plate fold into a tube and is the repeated motor of invagination everywhere in embryology.',
      },
      {
        kind: 'para',
        text: 'Convergent extension does the opposite of folding: it stretches a sheet. Cells intercalate — wedge themselves between their neighbors — so the tissue narrows in one direction and lengthens in the perpendicular one, like a crowd pulling itself into a longer, thinner column. The vertebrate body axis lengthens head-to-tail primarily this way, and the same behavior extends the notochord that induces the nervous system.',
      },
      {
        kind: 'para',
        text: 'Sometimes the way to build is to stop being a sheet at all. In the epithelial–mesenchymal transition (EMT), cells lose their cadherin contacts and polarity, become individual movers, and crawl on the extracellular matrix as loose mesenchyme. The neural crest — the vertebrate structure that scatters into pigment cells, craniofacial bone and peripheral nerves — is born by EMT and migrates through the embryo before re-epithelializing elsewhere. In the adult, pathological EMT is a step in cancer metastasis: the developmental program reawakened in the wrong context.',
      },
      {
        kind: 'para',
        text: 'Tubes and branches build on the same behaviors. A tube can form by wrapping a sheet (neural tube), by hollowing a rod of cells (many glands), or by cell chains fusing into a lumen; branching morphogenesis — the lung’s airway tree, the kidney’s collecting ducts, mammary glands — repeats a cycle of bud outgrowth, tip splitting, and matrix remodeling, with the epithelium and the surrounding mesenchyme instructing each other through reciprocal signals. The extracellular matrix is not passive packaging here: its fibers are the roads migrating cells travel, its stiffness instructs differentiation, and its molecules carry stored signals that are released when enzymes remodel it. Mechanics and chemistry are not separable in an embryo.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Assembling a Neural Tube',
        steps: [
          'Start: the neural plate is a flat epithelial sheet induced along the embryo’s back.',
          'Hinge points form: rows of cells at the midline and sides undergo apical constriction, each becoming wedge-shaped.',
          'The sheet folds: the wedges’ geometry forces the plate into a U; the folds rise and meet at the top.',
          'Fusion and EMT: the paired folds zip together; at the seam, neural crest cells undergo EMT and emigrate before the tube closes.',
          'Predict the defect map: failure at the head end yields anencephaly; at the tail end, spina bifida — which is why folate in early pregnancy, which supports these closure events, is a public-health recommendation.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cancer: EMT and matrix-remodeling programs drive invasion and metastasis — developmental biology became cancer biology’s most useful neighbor.',
          'Birth-defect prevention: folate supplementation before and during early pregnancy measurably reduces neural-tube defects.',
          'Tissue engineering: growing replacement organs requires exactly this knowledge — self-assembly depends on adhesion, polarity and matrix cues.',
          'Regenerative medicine: blastema-based limb regeneration in salamanders re-runs morphogenetic programs in an adult.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not read morphogenesis as cells following a blueprint: the shapes emerge from local rules, not a global plan — which is exactly why local failures (one hinge point) produce discrete, repeatable defects. And cadherins are not glue in the static sense: their bonds form and break dynamically, and cells tune adhesion constantly during movement.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'cadherin', def: 'Calcium-dependent adhesion protein linking like molecules across neighboring cells to the actin cytoskeleton; different types bind their own kind most strongly.' },
          { term: 'differential adhesion hypothesis', def: 'Steinberg’s model that cell populations sort by adhesion strength as immiscible liquids do, the more adhesive phase moving inward.' },
          { term: 'apical constriction', def: 'Actin–myosin purse-string narrowing of a cell’s outer face, bending an epithelial sheet inward.' },
          { term: 'convergent extension', def: 'Cell intercalation that narrows and lengthens a tissue — the main engine of body-axis elongation.' },
          { term: 'epithelial–mesenchymal transition (EMT)', def: 'Loss of adhesion and polarity that turns a sheet cell into an individual migrant; normal in the neural crest, pathological in metastasis.' },
          { term: 'extracellular matrix (ECM)', def: 'The non-cell scaffold of fibers and signal-bearing molecules that guides migration, stiffness and differentiation.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Two embryonic cell types with different cadherin levels are mixed. According to the differential adhesion hypothesis, what happens?',
            options: [
              'They stay randomly mixed',
              'The more adhesive population sorts to the inside, surrounded by the less adhesive one',
              'The less adhesive population sorts to the inside',
              'Both populations die',
            ],
            answer: 1,
            explain: 'Like a demixing liquid pair, the system minimizes the less-adhesive contacts on the surface; the strongly adhesive cells cohere into the interior.',
          },
          {
            q: 'The direct motor force of neural-plate folding is:',
            options: ['Cell division pushing the sheet', 'Apical constriction wedging hinge-point cells', 'Gravity', 'The extracellular matrix pulling from below'],
            answer: 1,
            explain: 'Actin–myosin contraction narrows the apical face of hinge cells; the resulting wedge geometry bends the whole sheet upward.',
          },
          {
            q: 'A tumor cell gains motility and invades surrounding tissue by reactivating which developmental program?',
            options: ['Convergent extension', 'Apical constriction', 'Epithelial–mesenchymal transition', 'Differential adhesion sorting'],
            answer: 2,
            explain: 'EMT dissolves epithelial adhesion and polarity, producing a migratory phenotype — exactly what a metastasizing cell exploits.',
          },
          {
            q: 'Convergent extension lengthens the body axis mainly by:',
            options: [
              'Adding new cells at the tip',
              'Cells swelling with water',
              'Cells intercalating between their neighbors, narrowing and lengthening the tissue',
              'Apical constriction at the midline',
            ],
            answer: 2,
            explain: 'Lateral intercalation trades width for length: the same tissue area rearranged into a longer, narrower shape.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Best read after the embryo-stages lesson (which names the events) and the model-organisms lesson (which names where each was worked out). The gradient-and-Hox story of positional identity from those lessons is the “what to build” half; this lesson is the “how it gets built” half.',
        tone: 'path',
      },
    ],
  },
  // Salvaged 2026-11-01 from the diverged local line (pass x60-lifescience-deepening-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'devbio-turing-reaction-diffusion',
    title: 'Turing Patterns: How Chemistry Paints Stripes and Spots',
    domain: 'Life Sciences',
    field: 'Developmental Biology',
    branch: 'Developmental Mechanisms',
    tier: 'advanced',
    concepts: [
      'Two ways to make a pattern: instructed versus self-organized',
      'Local activation with long-range inhibition',
      'The reaction–diffusion equations and their parts',
      'Wavelength selection: why patterns have a size',
      'Stripes, spots and labyrinths as one dial',
      'Growth resets the pattern: the growing-lizard experiment',
      'Where Turing machinery runs in real animals',
    ],
    words: 1434,
    readMins: 7,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'The developmental-biology lesson taught you the instructed way to build a body: a mother plant’s bicoid messenger RNA at one end makes a gradient, cells read thresholds off it, and Hox genes lock in identity — a blueprint handed down from outside. This lesson owns the other half of patterning, the half no one instructs: self-organization. Some of the most regular patterns in biology — the even spacing of hair follicles, the stripes of an angelfish, the alternating fingers of a growing feather — arise from chemistry that organizes itself. The idea was proposed in 1952 by Alan Turing, the same mind that defined the computer, in a single paper on “the chemical basis of morphogenesis”; it took biology fifty years to catch up.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Turing’s mechanism is the general explanation for periodic patterns — repeated stripes, spots, scales — that no gradient lays out one by one. It also matters beyond skin: the same activator–inhibitor logic patterns the branching of lungs, the somites that become your vertebrae, and even the spatial organization of ecological predator–prey systems.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'heading',
        text: 'The trick: two molecules, two very different wanderings',
      },
      {
        kind: 'para',
        text: 'Turing’s recipe needs exactly two ingredients with asymmetric jobs and asymmetric wanderings. An activator promotes its own production (feedback) and also promotes an inhibitor; the inhibitor suppresses the activator. The asymmetry is in diffusion: the activator diffuses slowly — it stays near where it is made — while the inhibitor diffuses fast, spreading far ahead of its source. Start from a nearly uniform field with a tiny random ripple of activator. Where activator is slightly higher, it amplifies itself and drags inhibitor up with it; the inhibitor spreads outward, faster and farther, and crushes activator everywhere except its own immediate neighborhood. Each activator peak thus becomes surrounded by a moat of inhibition, and the field settles into a periodic pattern of peaks whose spacing is set by the diffusion rates and reaction strengths — not by any pre-existing ruler.',
      },
      {
        kind: 'formula',
        name: 'Reaction–diffusion system (activator–inhibitor)',
        latex: '\\frac{\\partial u}{\\partial t} = f(u, v) + D_u \\nabla^2 u, \\qquad \\frac{\\partial v}{\\partial t} = g(u, v) + D_v \\nabla^2 v, \\qquad D_u \\ll D_v',
        meaning: 'Two concentrations u (activator) and v (inhibitor), each changed by local reactions plus diffusion; the diffusion ratio Du ≪ Dv is the design condition for instability.',
      },
      {
        kind: 'para',
        text: 'The phrase for what happens next is diffusion-driven instability — the strangest phrase in development, because diffusion is supposed to smooth things out, not sharpen them. For most parameter values it does. But Turing found the narrow regime where the coupling reverses the intuition: the uniform state is stable without diffusion (add diffusion terms, but with equal rates, nothing grows), yet unstable with unequal diffusion — the smallest random ripple grows into a standing pattern. The wavelength that grows fastest — the one that wins — is selected by the parameters, and its size sets the spacing between stripes, spots or follicles.',
      },
      {
        kind: 'example',
        title: 'Why the inhibitor must travel farther (a two-point thought experiment)',
        steps: [
          'Imagine a one-dimensional field with two candidate activator peaks, 1 and 2, and tune only the inhibitor’s diffusion constant.',
          'Inhibitor diffuses poorly: the moat around peak 1 stays local; peak 2, far away, feels nothing and grows too. Result: dense, closely packed pattern — small wavelength.',
          'Inhibitor diffuses freely: the moat around peak 1 spreads across the whole field; peak 2, at moderate distance, is suppressed. Result: sparse pattern — large wavelength.',
          'Push further: a single peak’s inhibition can reach everywhere, and no second peak forms at all — the field is a lone spot, the “polarized” limit.',
          'Moral: one parameter — the ratio of diffusion ranges — dials the pattern from tight stripes to loose spots to a single point. No new molecules, no new instructions.',
        ],
      },
      { kind: 'heading', text: 'One mechanism, many coats' },
      {
        kind: 'para',
        text: 'The same two-molecule machinery produces what look like unrelated patterns, and which one you get depends on the regime. In the classic activator–inhibitor regime of Gierer and Meinhardt, moderate parameters give spots; tilting the balance (inhibitor acting over longer range relative to activator, or slower activator kinetics) stretches spots into stripes; adding a second inhibitory coupling can stripe any region of parameter space. The Gray–Scott alternative — an activator fed by a slowly depleted substrate — produces labyrinthine, slow-crawling patterns like fingerprints. The visual lesson is that nature’s coat catalog (leopard spots, zebra stripes, giraffe networks, the polygonal scales of the ocellated lizard) is a tour of one system’s phase diagram.',
      },
      {
        kind: 'para',
        text: 'The evidence that living animals actually run this machinery is now strong in three theatres. Angelfish stripes: pigment cells observed over weeks rearrange exactly as a Turing system predicts — including the telling insertion of a new stripe when a growing region becomes too wide for the old count. Hair follicles: spacing across the skin is set by WNT (activator) and its antagonist DKK (inhibitor) with the right diffusion asymmetry, and Turing simulations of the pair reproduce follicle maps, including the disorderly spacing in diseases where the inhibitor is deficient. The ridges of the palate (palatal rugae) and the polygonal scales of the ocellated lizard both switch pattern as tissue grows, matching wavelength selection territory by territory. Note what this list does not include: the segmented stripes of the early fly embryo are laid down by the instructed gradient-plus-gene-network logic the developmental-biology lesson owns, not by Turing chemistry — biology uses both patterning engines, and exam answers must not conflate them.',
      },
      { kind: 'heading', text: 'Growth: the pattern that renews itself' },
      {
        kind: 'para',
        text: 'A pattern fixed at birth would tear as the animal grows. Turing systems instead maintain themselves against growth: when the tissue between two stripes stretches until local activator peaks fall too far apart, the inhibition between them weakens, and a new peak nucleates in the gap — stripe insertion, observed directly in growing angelfish and in the lizard’s scale polygons flipping their geometry as the animal enlarges. In organ after organ — feather buds, tastebud renewal, the villi of the gut — growth and Turing dynamics form a loop that keeps spacing near the selected wavelength for a lifetime.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Turing system', def: 'A reaction–diffusion pair — slow-diffusing self-amplifying activator, fast-diffusing inhibitor — whose uniform state destabilizes into a periodic pattern.' },
          { term: 'Local activation, long-range inhibition', def: 'The design principle: each peak reinforces itself nearby while suppressing peaks at a distance; spacing is set by the ranges.' },
          { term: 'Diffusion-driven instability', def: 'The counterintuitive regime where unequal diffusion destabilizes a state that equal diffusion would keep uniform.' },
          { term: 'Wavelength selection', def: 'Parameters choose one fastest-growing wavelength; that spacing becomes the pattern period — spots or stripes at a characteristic size.' },
          { term: 'Gierer–Meinhardt model', def: 'The classic activator–inhibitor formulation; regime changes turn its spots into stripes without changing parts.' },
          { term: 'Gray–Scott model', def: 'Activator-plus-depletable-substrate scheme producing labyrinthine patterns; the fingerprint-look branch of the same idea.' },
          { term: 'Stripe insertion', def: 'Growth-driven pattern renewal: stretched gaps weaken inhibition, new peaks nucleate, keeping spacing near the selected wavelength.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a Turing pair, the inhibitor must diffuse faster than the activator so that:',
            options: [
              'the pattern moves faster',
              'each activator peak suppresses others at a distance while keeping its own neighborhood — local activation with long-range inhibition',
              'the inhibitor can leave the tissue',
              'the activator can catch up',
            ],
            answer: 1,
            explain: 'The diffusion asymmetry is the engine: self-reinforcement stays local, inhibition travels — and the two ranges set the spacing.',
          },
          {
            q: 'An angelfish grows, and a new pigment stripe appears in the middle of a widening gap. In Turing terms this is:',
            options: [
              'a mutation in pigment genes',
              'stripe insertion: stretched tissue weakens inhibition until a new activator peak nucleates',
              'apoptosis of old stripes',
              'a gradient being re-read',
            ],
            answer: 1,
            explain: 'Growth dilutes the inhibitor between peaks; once inhibition fails, the fastest-growing wavelength nucleates a new peak — the pattern maintains its spacing as the animal enlarges.',
          },
          {
            q: 'Which pattern is NOT produced by Turing self-organization, but by the instructed gradient machinery of the early fly embryo?',
            options: [
              'Evenly spaced hair follicles',
              'Angelfish stripes',
              'The segmental stripes of the Drosophila embryo',
              'Lizard scale polygons',
            ],
            answer: 2,
            explain: 'The fly embryo’s segments are laid down by bicoid/Hox-style instructed gene networks — the gradient engine — not reaction–diffusion; conflating the two engines is the classic exam trap.',
          },
          {
            q: 'Turning one dial — the inhibitor’s diffusion range — from short to very long would morph the pattern:',
            options: [
              'from spots to stripes to nothing at all',
              'from stripes to spots to a single polarized peak, as distant peaks get suppressed',
              'from periodic to random and back',
              'not at all',
            ],
            answer: 1,
            explain: 'Short-range inhibition permits many peaks (dense pattern); long-range inhibition suppresses everything but the strongest, ending at a lone maximum.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the developmental-biology lesson, which owns the instructed patterning engine (bicoid gradients, French-flag thresholds, Hox colinearity) that this lesson deliberately does not re-teach, and after morphogenesis, which owns the cell behaviors that execute whatever pattern is sketched. The evo-devo lesson next shows how the two engines together explain evolutionary change.',
        tone: 'path',
      },
    ],
  },

]
