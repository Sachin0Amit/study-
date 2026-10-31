/**
 * Knowledge Universe — Developmental Biology — Chapter 05: Evo-Devo: How Development Evolves
 * 1 lesson · ~1,598 words
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
]
