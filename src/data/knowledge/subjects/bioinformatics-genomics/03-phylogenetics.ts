/**
 * Knowledge Universe — Bioinformatics & Genomics — Chapter 03: Phylogenetics
 * 1 lesson · ~1,213 words
 * field: Bioinformatics
 * legacy sources: emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Phylogenetics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 emer-phylogenetics-tree-of-life — Phylogenetics: Reconstructing the Tree of Life
 */
import type { KnowledgeTopic } from '../../types'

export const bioinformaticsGenomicsCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'emer-phylogenetics-tree-of-life',
    title: 'Phylogenetics: Reconstructing the Tree of Life',
    domain: 'Emerging & Interdisciplinary',
    field: 'Bioinformatics',
    branch: 'Phylogenetics',
    tier: 'intermediate',
    concepts: [
      'Trees as hypotheses of evolutionary history',
      'Clades and monophyletic groups',
      'Shared ancestral vs shared derived characters',
      'Maximum parsimony',
      'Homology versus analogy (homoplasy)',
      'Molecular systematics and DNA comparisons',
      'Phylogenomics in outbreaks and conservation',
    ],
    words: 1213,
    readMins: 6,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Every species carries a written record of its ancestry, and phylogenetics is the discipline that reads it. By sorting organisms into clades — groups descended from a single common ancestor — scientists reconstruct the branching tree of life from morphology and, increasingly, from DNA. This intermediate lesson explains how trees are built, what shared derived characters are, why simplicity wins by default, and how molecular data turned the tree into a daily research tool.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Phylogenies decide which wild relative holds a disease-resistance gene worth breeding into crops, which viral variant is spreading, and which species conservation money should save first. Reading the tree correctly is reading biology correctly.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A phylogenetic tree is a hypothesis about evolutionary relationships, not a fact etched in stone. Branch points (nodes) represent common ancestors; tips are living species; and a clade — a monophyletic group — must contain an ancestor and all of its descendants, no more and no fewer. Lizards, rabbits and humans, for example, all descend from a common ancestor that had amniotic eggs, so together they form the clade Amniota. A diagram that leaves out one descendant group is not a clade: picking and choosing descendants creates groupings that look tidy but misrepresent history.',
      },
      {
        kind: 'para',
        text: 'Cladistics builds trees from shared derived characters — traits that evolved in an ancestor and were passed to some, but not all, of its descendants. The amniotic egg is shared and ancestral for the whole vertebrate tree (every organism on it inherits it), so it tells us little about relationships within the tree; but among amniotes it is a shared derived character that separates lizards, rabbits and humans from fish. The crucial distinction: a trait inherited unchanged from a distant ancestor is evidence of old history, while a trait that first appeared closer to the present marks the newer branches.',
      },
      {
        kind: 'para',
        text: 'Not every resemblance is family resemblance. Structures that overlap in both form and developmental origin — the bone architecture shared by a bat wing, a whale flipper and a human arm — are homologous, inherited from a common ancestor. But insect wings and bird wings merely solve the same problem: similar because of environmental constraints, not ancestry. Such look-alikes are analogies, or homoplasies, and they are the great false friends of tree-building — count them as shared characters and the tree will swear that butterflies and birds are close kin.',
      },
      { kind: 'heading', text: 'Building Trees: Parsimony and Molecules' },
      {
        kind: 'para',
        text: 'Given a table of characters, many trees are possible, so systematists default to maximum parsimony: the best tree is the one requiring the fewest evolutionary events — the fewest independent gains and losses — that fits the evidence. The reasoning is the hiker heuristic from the OpenStax text: most people entering a forest preserve follow established trails rather than forge new ones. Parsimony is a working preference, not a law of nature — convergent evolution happens — but it is the right first guess and the baseline every fancier method must beat.',
      },
      {
        kind: 'para',
        text: 'DNA sequencing gave systematics a second, vast character set: molecular systematics uses DNA and protein sequences as the traits. The approach has limits — two unrelated lineages can randomly share high percentages of bases at the same positions, and a mutation can shift a coding sequence so that very close relatives look distant — so modern practice couples molecular and morphological evidence. Computers do the heavy lifting, comparing thousands of homologous positions and scoring trees; the payoff is resolution in cases where bones and petals stay silent, such as microbes, fungi, and plants whose medicinal chemistry runs in families.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: build the most parsimonious tree for a fish, a lizard and a bird from three characters — vertebrae, amniotic egg, feathers.',
          'Score the characters: vertebrae are present in all three (shared ancestral — uninformative here); the amniotic egg is present in lizard and bird only; feathers only in the bird.',
          'Apply parsimony: one change for the amniotic egg on the branch ancestral to lizard + bird, and one change for feathers on the bird lineage — two events total.',
          'Check the alternative: any tree in which the lizard and fish form an exclusive group, or the bird splits first while lizard and fish share the egg, needs at least one extra gain or loss.',
          'State the result: the fish branches first (it lacks the derived characters), then lizard and bird join as amniotes, with feathers diagnosing the bird — the fewest-events tree.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Epidemiology sequences viral genomes weekly and reads the phylogeny to trace which variant is spreading where and from whom',
          'Conservation programs prioritize evolutionarily distinct and endangered lineages, since losing one clade loses more history than losing a close cousin',
          'Crop breeders screen wild relatives of wheat, rice and the legume family for disease-resistance genes, guided by phylogenetic proximity',
          'Microbiome studies classify millions of environmental DNA reads by placing them on reference trees of known organisms',
          'Tumor biology builds cell-lineage trees from somatic mutations to reconstruct how a cancer progressed and spread',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Trees show relatedness, not advancement — no living species is "higher" or "more evolved" than another, and humans are not the goal of the tree. Nodes are ancestors, but branch length does not automatically mean time unless the tree is explicitly dated. And a tidy resemblance is not evidence by itself: wings, eyes and carnivorous chemistry have each evolved many times independently.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Clade', def: 'A group consisting of an ancestor and all of its descendants; also called a monophyletic group.' },
          { term: 'Shared derived character', def: 'A trait that originated in the common ancestor of a subgroup and marks exactly that subgroup (synapomorphy).' },
          { term: 'Shared ancestral character', def: 'A trait inherited from a distant ancestor and present in all members of the wider tree, so it carries no information about the tighter grouping.' },
          { term: 'Maximum parsimony', def: 'The rule of preferring the evolutionary tree that requires the fewest character changes.' },
          { term: 'Homoplasy', def: 'Similarity caused by convergent evolution or reversal rather than common ancestry — the tree-builder’s false friend.' },
          { term: 'Molecular systematics', def: 'The use of DNA and protein sequence data to infer evolutionary relationships.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A clade (monophyletic group) must include:',
            options: ['Only the organisms that look most similar', 'An ancestor and all of its descendants, nothing extra', 'The largest organisms in the group', 'Any organisms sharing one trait'],
            answer: 1,
            explain: 'Monophyly is defined by complete descent: one branch point, every descendant, no outsiders.',
          },
          {
            q: 'The amniotic egg is informative for separating lizards, rabbits and humans from fish because within vertebrates it is:',
            options: ['A shared ancestral character', 'A shared derived character', 'An analogy', 'A random molecular match'],
            answer: 1,
            explain: 'It arose in the ancestor of amniotes only, so its presence diagnoses the amniote subgroup; for the whole vertebrate tree it would be shared and ancestral.',
          },
          {
            q: 'Insect wings and bird wings are examples of:',
            options: ['Homologous structures', 'Analogous structures (homoplasy)', 'Shared derived characters of one clade', 'Molecular systematics'],
            answer: 1,
            explain: 'They solve the same problem — flight — but differ completely in structure and embryonic origin, so the similarity is convergent, not ancestral.',
          },
          {
            q: 'Maximum parsimony says the best tree is the one that:',
            options: ['Has the longest branches', 'Matches the largest organisms', 'Requires the fewest evolutionary events to fit the data', 'Puts humans at the top'],
            answer: 2,
            explain: 'Like hikers preferring established trails, evolution is assumed — as a working default — to follow the fewest-changes path.',
          },
        ],
      },
    ],
  },
]
