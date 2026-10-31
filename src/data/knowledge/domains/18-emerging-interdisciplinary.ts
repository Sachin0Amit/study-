/**
 * Knowledge Universe — field file 18: Emerging & Interdisciplinary
 *
 * Where disciplines collide: genomes as code, feedback loops as universal grammar, and qubits stripped of the hype.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Nanotechnology (7), Quantum Information (8), Computational Science & Simulation (5), Bioinformatics & Genomics (4), Synthetic Biology (5), Physics (1), AI, Machine Learning & Data Science (2), Visual Computing (1)
 */
import type { KnowledgeDomainFile } from '../types'
import { nanotechnologyTopics } from '../subjects/nanotechnology'
import { quantumInformationTopics } from '../subjects/quantum-information'
import { computationalScienceTopics } from '../subjects/computational-science'
import { bioinformaticsGenomicsTopics } from '../subjects/bioinformatics-genomics'
import { syntheticBiologyTopics } from '../subjects/synthetic-biology'
import { physicsUnifiedTopics } from '../subjects/physics-unified'
import { aiUnifiedTopics } from '../subjects/ai-unified'
import { visualUnifiedTopics } from '../subjects/visual-unified'

export const emergingInterdisciplinary: KnowledgeDomainFile = {
  domain: 'Emerging & Interdisciplinary',
  blurb: 'Where disciplines collide: genomes as code, feedback loops as universal grammar, and qubits stripped of the hype.',
  topics: [
  // Nanotechnology — 7 topics in this field
  ...nanotechnologyTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // Quantum Information — 8 topics in this field
  ...quantumInformationTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // Computational Science & Simulation — 5 topics in this field
  ...computationalScienceTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // Bioinformatics & Genomics — 4 topics in this field
  ...bioinformaticsGenomicsTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // Synthetic Biology — 5 topics in this field
  ...syntheticBiologyTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // Physics — 1 topic in this field
  ...physicsUnifiedTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // AI, Machine Learning & Data Science — 2 topics in this field
  ...aiUnifiedTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  // Visual Computing — 1 topic in this field
  ...visualUnifiedTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
  ],
}
