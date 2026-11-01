/**
 * Knowledge Universe — Developmental Biology — Chapter 05: Evo-Devo: How Development Evolves
 * 2 lessons · ~3,028 words (includes the 2026-11-01 salvage increment)
 * field: Developmental Biology
 * legacy sources: x69-library-org-convergence.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Evo-Devo]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 bio-dev-evo-devo — Evo-Devo: How Development Evolves
 *   05.2 devbio-evo-devo-toolkit — Evo-Devo: Same Toolkit, Different Animals (~1,430w, salvaged)
 */
import type { KnowledgeTopic } from '../../types'

export const developmentalBiologyCh05: KnowledgeTopic[] = [
  {
    id: 'bio-dev-evo-devo',
    title: 'Evo-Devo: How Development Evolves',
    domain: 'Life Sciences',
    field: 'Developmental Biology',
    branch: 'Evo-Devo',
    tier: 'advanced',
    concepts: [
      'the conserved genetic toolkit and deep homology',
      'Pax6 and Distal-less: one gene, many structures',
      'from one Hox cluster to four: whole-genome duplication',
      'regulation beats protein change: the stickleback Pitx1 enhancer',
      'heterochrony and paedomorphosis: the axolotl',
      'novelty by co-option: butterfly eyespots',
      'gene duplication as raw material',
    ],
    words: 1598,
    readMins: 8,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The previous lessons of this book explained how a single body gets built: gradients read, germ layers folded, segments given identity. This chapter asks the question one rung higher — how the process of building bodies itself evolves. The puzzle is genuine. Animal phyla diverged more than 500 million years ago, most of the major body plans appearing within a geologically sudden window around the Cambrian, and yet the genes doing the patterning turned out to be strikingly similar across that entire span. A fly, a sea urchin, a mouse and a human share families of developmental genes whose protein products are recognizably the same molecules. Evolution has clearly not been inventing new hardware; it has been rerouting the wiring — changing where and when the same genes are switched on.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Evo-devo answers the question Darwin left open: where does novel form come from? It explains why eyes evolved independently dozens of times yet always use Pax6-family genes, why an enhancer tweak can delete a fish\u2019s pelvis, and why human and chimpanzee proteins are nearly identical while the animals are visibly not. It also reframed the nature-versus-nurture debate: form is an executable program, and evolution edits the program\u2019s expression, mostly by touch on its control switches.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The central discovery is the genetic toolkit: a shared set of developmental regulator genes reused across all animals. Deep homology names the pattern — structures that are clearly not homologous as organs are nonetheless built by homologous genes. The classic case is Pax6. Swapping experiments showed that a mouse Pax6 gene can trigger eye development in fruit-fly tissues, and Pax6-family genes are required for eye formation from flies to squid to mice — animals whose compound, camera-with-lens and camera eyes arose independently. The gene did not travel between lineages; the common ancestor already used it, and descent with modification preserved it. Similarly, Distal-less marks the outgrowing tip of nearly every animal appendage — fly legs and antennae, fish fins, beetle horns, the developing limb bud — a positional code redeployed wherever a body part must push outward.',
      },
      {
        kind: 'para',
        text: 'The Hox genes, introduced in the first lesson as the embryo\u2019s address system, also tell an evolutionary story. The ancestral condition, preserved today in amphioxus (the chordate most like our invertebrate ancestor), is a single Hox cluster — about fifteen genes ordered on one chromosome in the same sequence as the body regions they specify. The vertebrate lineage then underwent two rounds of whole-genome duplication (the 2R hypothesis, argued most influentially by Susumu Ohno), splitting one cluster into four — Hoxa through Hoxd — followed by selective gene loss and specialization. The clusters are also strikingly clean: vertebrate Hox regions are nearly devoid of transposable elements, as if the address system tolerates no clutter. Colinearity, the odd property that gene order on the chromosome mirrors gene order of expression along the body, has been maintained through all of this — a constraint evolution has respected for half a billion years.',
      },
      {
        kind: 'para',
        text: 'If proteins are so conserved, what changes? Mostly regulation. Each toolkit gene is controlled by multiple independent enhancers — separate DNA modules each driving expression in a particular tissue at a particular time. Evolution can edit one module without touching the others, which is why a gene used everywhere can still tolerate radical change in one context. The textbook demonstration is the threespine stickleback. Marine sticklebacks wear a bony pelvic girdle with defensive spines; freshwater populations around the world independently lost it after colonizing lakes free of gape-limited predators. The change tracks a deletion in a single enhancer that drives Pitx1 expression in the pelvic region — the gene itself is intact and still doing its other jobs. Breeding a spined marine form with a spineless lake form yields all-spined F1s and roughly a three-to-one complete-to-reduced ratio in the F2: one recessive regulatory loss, evolved repeatedly, at the same locus, on different continents.',
      },
      {
        kind: 'para',
        text: 'Change in timing is the other great lever. Heterochrony — a shift in the relative timing of developmental events — produces some of evolution\u2019s most dramatic remodelings with no new parts at all. Paedomorphosis is its most vivid form: the adult retains juvenile features because development is slowed or truncated. The axolotl, a salamander that breeds while still wearing its feathery larval gills, simply never completes metamorphosis under natural conditions; treat it with thyroid hormone and it will finish the job, revealing that the downstream program is intact and only the trigger timing changed. Human brain development, conversely, is extended relative to chimpanzees — neurons in our cortex keep maturing for years longer, a heterochronic stretch with outsized consequences for learning.',
      },
      {
        kind: 'para',
        text: 'Novelty, then, is usually recombination of old modules in new places — co-option. Butterfly eyespots are the showcase: wing markings that develop through a patterning network borrowed wholesale from earlier jobs, with Distal-less again painting the center of each spot, plus signaling genes redeployed to organize rings around it. The spots evolved recently (some within the last few million years among related species), vary seasonally within individuals, and are tweakable by selection — evolution iterating on an existing circuit, not waiting for a new gene to invent. Gene duplication complements co-option: when a gene is copied, one copy keeps the day job while the other is free to diverge — the ancestry of hemoglobin and myoglobin, and the raw material behind the Hox cluster expansion itself.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: from a cross between a marine stickleback (intact pelvic enhancer, call it E+) and a lake stickleback with the enhancer deletion (E\u2212), predict the F2 and what it implies about the genetic architecture.',
          'Set up the cross: the F1 are E+/E\u2212 heterozygotes and all develop complete pelvises, so the intact allele is dominant and the deletion is loss-of-function — a single recessive change.',
          'Apply Mendel to the F1 self-cross: E+/E+ : E+/E\u2212 : E\u2212/E\u2212 in a 1:2:1 genotype ratio, with only the E\u2212/E\u2212 quarter showing reduced pelvises — a 3:1 phenotype ratio.',
          'Interpret: observing approximately 3:1 in real F2 families confirmed that a large anatomical difference between populations maps to one regulatory region — evidence that evolution of form can proceed by single-module edits that leave the pleiotropic gene intact.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Crop and livestock breeding programs now sequence the enhancers of toolkit genes, not just the coding regions, because regulatory edits carry most of the variation breeders select',
          'Cancer genetics borrows the enhancer logic — many oncogenes are hijacked by mutations in their control regions rather than their proteins',
          'Evolutionary-developmental reasoning guides conservation: populations with unique regulatory variants (as in locally adapted fishes) are irreplaceable',
          'Synthetic biology designs gene circuits with modular enhancers, an engineering lesson learned directly from evo-devo',
          'Palaeontology uses heterochrony to interpret fossils — paedomorphic traits in extinct species signal developmental timing shifts, not new organs',
          'Regenerative-medicine researchers compare limb-development and limb-regeneration gene networks, asking why salamanders re-run an embryonic program that mammals shut off',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not read "conserved gene" as "conserved function in every context": a toolkit gene\u2019s job depends on which enhancer fires, so the same molecule can pattern an eye here and a limb there. Do not treat "Pax6 builds eyes" as evidence that all eyes descend from one ancestral eye — deep homology is about genes, not organs. And beware the "dumb evolution" trope: enhancer edits are not random sabotage; most visible change concentrates precisely where change is tolerable.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Genetic toolkit', def: 'The shared repertoire of developmental regulator genes deployed across all animals to build diverse bodies.' },
          { term: 'Deep homology', def: 'Non-homologous structures built using homologous genes inherited from a common ancestor.' },
          { term: 'Enhancer module', def: 'A discrete regulatory DNA element driving expression in one tissue or time window, editable independently of the gene\u2019s other jobs.' },
          { term: '2R hypothesis', def: 'Two rounds of whole-genome duplication near the origin of vertebrates, expanding one Hox cluster into four.' },
          { term: 'Heterochrony', def: 'Evolutionary change in the timing or rate of developmental events relative to ancestors.' },
          { term: 'Paedomorphosis', def: 'Retention of juvenile ancestral features in the adult, as in the metamorphosis-deferring axolotl.' },
          { term: 'Co-option', def: 'Recruitment of an existing gene network to a new developmental role, as in butterfly eyespot patterning.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A mouse Pax6 gene can induce fly eye development. What does this demonstrate?',
            options: [
              'all eyes descend from a single ancestral eye organ',
              'deep homology — the common ancestor\u2019s eye-development gene was conserved even as eyes evolved independently',
              'mice and flies are closely related',
              'eye development needs no other genes',
            ],
            answer: 1,
            explain: 'The organs are non-homologous but the underlying regulatory gene persisted — genes can be homologous when structures are not.',
          },
          {
            q: 'Vertebrates carry four Hox clusters while amphioxus carries one. The standard explanation is:',
            options: [
              'vertebrates invented extra Hox genes from scratch',
              'two rounds of whole-genome duplication followed by gene loss and specialization',
              'amphioxus lost three clusters by mutation',
              'Hox clusters are unrelated between the two groups',
            ],
            answer: 1,
            explain: 'The 2R hypothesis (after Ohno) explains both the cluster count and the presence of many duplicate gene families in vertebrates.',
          },
          {
            q: 'In the stickleback pelvic-reduction story, the key mutation deletes:',
            options: [
              'the Pitx1 protein-coding sequence',
              'a tissue-specific enhancer controlling Pitx1 in the pelvis',
              'the entire chromosome carrying Pitx1',
              'all Hox genes',
            ],
            answer: 1,
            explain: 'The gene survives because other enhancers still drive it; only the pelvic module was lost — the modularity that makes regulatory evolution safe.',
          },
          {
            q: 'An axolotl treated with thyroid hormone completes metamorphosis. This shows its neoteny is:',
            options: [
              'a permanent loss of metamorphic genes',
              'a heterochronic shift in trigger timing, with the program intact',
              'caused by a Hox mutation',
              'evidence it is not a salamander',
            ],
            answer: 1,
            explain: 'The downstream program works when the hormone is supplied — paedomorphosis is a timing change, not a missing organ plan.',
          },
        ],
      },
    ],
  },
  // Salvaged 2026-11-01 from the diverged local line (pass x60-lifescience-deepening-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'devbio-evo-devo-toolkit',
    title: 'Evo-Devo: Same Toolkit, Different Animals',
    domain: 'Life Sciences',
    field: 'Developmental Biology',
    branch: 'Evo-Devo',
    tier: 'advanced',
    concepts: [
      'The paradox: wildly different bodies, nearly identical genes',
      'Deep homology: eyes and appendages built from shared circuitry',
      'Heterochrony: evolution by changing the timing',
      'Paedomorphosis and peramorphosis: the axolotl and beyond',
      'Regulatory mutations: editing switches, not proteins',
      'The stickleback pelvis: a textbook enhancer deletion',
      'Modularity, constraint and pleiotropy as evolutionary forces',
    ],
    words: 1430,
    readMins: 7,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Compare a fruit fly, a mouse and a human and you are comparing three nearly interchangeable gene lists: the fly shares with us well over half of its protein-coding genes, including every developmental regulator that matters. Yet the bodies differ absurdly. Evolutionary developmental biology — evo-devo — was born from resolving this paradox: the animals differ not mainly in their parts but in how the parts are deployed. Development is run by a conserved toolkit of transcription factors and signals, and evolution mostly edits the switches that control when and where each tool is used. The developmental-biology lesson owns the toolkit’s core — Hox colinearity, the Pax6 master eye gene, the beetle that lost its hind wings. This lesson owns the evolutionary logic: what happens to that toolkit as lineages diverge, and why the results look the way they do.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Evo-devo reframed the question “how does new form evolve?” — the answer is largely “by rewiring regulation, not by inventing new proteins.” That reframing explains rapid morphological change, the return of lost traits, and why some designs never appear no matter how useful they would be.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'heading',
        text: 'Deep homology: the same circuit, the opposite anatomy',
      },
      {
        kind: 'para',
        text: 'The field’s founding shock was that structures with no common anatomical origin are built by the same genes. The compound eye of an insect and the camera eye of a vertebrate evolved independently — yet both are specified by Pax6: the developmental-biology lesson showed a fly growing an extra eye on a leg when and where Pax6 was misexpressed. The Distal-less gene builds the outgrowth machinery of appendages as unrelated as insect legs, vertebrate limbs, and the tube feet of sea urchins; the same hedgehog-signaling logic patterns the limb bud’s asymmetry, the feather’s barb identity and the neural tube’s ventral domains. Deep homology is the name for this pattern: the regulatory circuit is older than the organ, having been inherited from a common ancestor and deployed by each descendant on whatever structure its lineage was building. The consequence for evolution is profound — new organs do not require new genes; they require a new address for an old one.',
      },
      { kind: 'heading', text: 'Heterochrony: evolution of the timetable' },
      {
        kind: 'para',
        text: 'The cleanest way to redeploy a toolkit is to change when it runs. Heterochrony is evolutionary change in the timing of developmental events, and it comes in two great families. Paedomorphosis is the retention of juvenile features in the adult — the adult stops developing early. Its most famous case is the axolotl: a salamander that breeds with its larval aquatic form, gills and all, having lost the metamorphosis its cousins still perform; thyroid hormone can force it to complete the change, proving the adult program survives, merely untriggered. Peramorphosis is the opposite — development runs longer or faster, exaggerating adult traits past the ancestral endpoint; the enormous antlers of large deer lineages, hyper-extended by scaling the growth period, are the textbook case. Timing shifts are cheap mutations with outsized effects, which is why heterochrony recurs whenever lineages invade new habitats with different adult demands.',
      },
      { kind: 'heading', text: 'Regulatory evolution: editing the switches' },
      {
        kind: 'para',
        text: 'The molecular heart of evo-devo is where mutations with morphological consequences actually land. A coding mutation changes a protein everywhere it works — and since toolkit proteins are pleiotropic, working in dozens of organs, the mutation damages all of them at once; evolution resists this. A mutation in a gene’s regulatory switches — the hundreds of enhancers that each control one time-and-place of expression — changes one deployment and nothing else. Selection therefore edits switches preferentially, and morphological evolution is overwhelmingly regulatory evolution. The stickleback fish is the canonical demonstration: ocean sticklebacks carry a robust pelvic skeleton (the spiny armor), while countless lake populations evolved armor loss in parallel — and the mutation is a deletion of a specific enhancer of the Pitx1 gene, a switch that drives expression in the developing pelvis. The Pitx1 protein is untouched and still does its other jobs; the pelvis alone vanished. Better still, the parallel armor losses in separate lakes map to this same regulatory region while the coding sequence stays intact — precisely the switch-editing prediction.',
      },
      {
        kind: 'example',
        title: 'Reading the stickleback pelvis result',
        steps: [
          'The phenotype: freshwater lake sticklebacks repeatedly lose the pelvic spines their ocean ancestors carried — dozens of independent lakes, same loss.',
          'The mapping: the trait tracks to Pitx1, a gene whose protein is expressed in mouth, pituitary and pelvis — outright loss of the gene would be lethal or multi-defect.',
          'The comparison: lake fish have normal Pitx1 protein sequence and normal expression in mouth and pituitary — but pelvis-expression is gone.',
          'The lesion: a deletion of the pelvis-specific enhancer (the switch), leaving every other deployment intact — pleiotropy dodged by editing one line of the address book.',
          'The evolutionary lesson: parallel armor loss in many lakes used the same switch, because with hundreds of switches and one coding sequence to break, regulatory paths are where selectable variation lives.',
        ],
      },
      { kind: 'heading', text: 'Modularity and constraint: why some things never evolve' },
      {
        kind: 'para',
        text: 'Two closing principles discipline the story. Modularity: development is built of semi-independent modules — limb, jaw, pigment stripe — each with its own switch set, so modules evolve separately and get co-opted whole into new roles (a jaw module becomes ear bones; a limb module becomes a wing). Modularity is why evolution is tinkering, not redesign. Constraint: the toolkit’s entanglement limits what selection can reach. A gene deployed in many modules cannot change its protein freely (pleiotropic constraint); lineage history locks in body plans — no vertebrate will re-evolve the insect’s exoskeleton molting program, because every downstream module now assumes the vertebrate plan. Deep homology explains why evolution keeps reusing the same circuits; constraint explains why it reuses them in the same characteristic ways. Together they turn evo-devo from a catalog of curiosities into a predictive framework: where variation is abundant (switches), what is reachable (module recombination), and what will never appear (whatever would require breaking pleiotropy).',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Deep homology', def: 'Shared regulatory ancestry of structures that evolved independently — insect and vertebrate eyes under Pax6; limbs, legs and tube feet under Distal-less.' },
          { term: 'Heterochrony', def: 'Evolutionary change in developmental timing; the cheapest route to large morphological change.' },
          { term: 'Paedomorphosis', def: 'Adult retention of juvenile features via earlier stopping — the breeding larva of the axolotl, metamorphosis untriggered.' },
          { term: 'Peramorphosis', def: 'Development extended or accelerated past the ancestral endpoint — exaggerated adult traits like lineage-scaled antler growth.' },
          { term: 'Regulatory evolution', def: 'Morphological change from mutations in enhancers/switches rather than protein sequence — dodging pleiotropy by editing one deployment.' },
          { term: 'Pitx1 enhancer', def: 'The stickleback pelvis switch whose deletion removes pelvic spines while leaving the gene’s other duties intact; the switch-editing exemplar.' },
          { term: 'Modularity', def: 'Semi-independent development of parts, each with its own regulation — the property that lets evolution recombine and co-opt without breaking the whole.' },
          { term: 'Pleiotropic constraint', def: 'One protein serving many modules resists coding change — the reason toolkits stay conserved while forms diverge.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Deep homology means that the insect compound eye and the vertebrate camera eye:',
            options: [
              'evolved from a single common eye',
              'arose independently but are both specified by homologous regulatory machinery such as Pax6',
              'use completely unrelated genes',
              'are identical in structure',
            ],
            answer: 1,
            explain: 'The structures are anatomically independent inventions; the circuit that says “build an eye here” is shared ancestry — the regulator predates the organ.',
          },
          {
            q: 'The axolotl breeds as a swimming, gilled larva. This is classic:',
            options: ['peramorphosis', 'paedomorphosis', 'heterotopy', 'homeosis'],
            answer: 1,
            explain: 'Development stops early and the juvenile form becomes the reproductive adult — thyroid hormone can still force the ancestral metamorphosis, proving the program is untriggered, not lost.',
          },
          {
            q: 'Loss of pelvic spines in lake sticklebacks traces to:',
            options: [
              'a frameshift in the Pitx1 coding sequence',
              'deletion of the pelvis-specific enhancer of Pitx1, leaving the protein and its other roles intact',
              'a whole-chromosome loss',
              'increased thyroid hormone',
            ],
            answer: 1,
            explain: 'The switch for pelvis expression is deleted; every other deployment of Pitx1 still works — the textbook case of regulatory evolution dodging pleiotropy.',
          },
          {
            q: 'Why does natural selection preferentially edit regulatory switches rather than toolkit proteins?',
            options: [
              'Switches mutate more often',
              'Switch changes alter one time-and-place of deployment, while protein changes damage every module the gene serves',
              'Proteins cannot change at all',
              'Switches are dominant alleles',
            ],
            answer: 1,
            explain: 'Pleiotropy: a toolkit protein works in many organs, so coding mutations pile on correlated damage; enhancer edits confine the effect — selectable variation concentrates there.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'This lesson builds directly on the developmental-biology lesson (owner of Hox colinearity, Pax6 and the beetle-wing example cited here) and the Turing-pattern lesson (the second patterning engine whose redeployment heterochrony re-times). The genetics lesson owns the Mendelian machinery; evolution lessons own selection — this lesson is the bridge where genes, development and selection meet.',
        tone: 'path',
      },
    ],
  },

]
