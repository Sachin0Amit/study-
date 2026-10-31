/**
 * Knowledge Universe — field file 04: Life Sciences
 *
 * From genes, neurons, and photosynthesis to anatomy, microbes, evolution, and the animal kingdom — how living systems are built, run, and related.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Zoology (5), Ecology & Conservation (8), Biochemistry (8), Developmental Biology (6), Marine Biology (4), Genetics & Heredity (18), Human Anatomy & Physiology (11), Neuroscience (5), Cell & Molecular Biology (11), Botany (8), Evolutionary Biology (9), Microbiology & Immunology (8)
 */
import type { KnowledgeDomainFile } from '../types'
import { zoologyTopics } from '../subjects/zoology'
import { ecologyConservationTopics } from '../subjects/ecology-conservation'
import { biochemistryTopics } from '../subjects/biochemistry'
import { developmentalBiologyTopics } from '../subjects/developmental-biology'
import { marineBiologyTopics } from '../subjects/marine-biology'
import { geneticsHeredityTopics } from '../subjects/genetics-heredity'
import { humanAnatomyPhysiologyTopics } from '../subjects/human-anatomy-physiology'
import { neuroscienceTopics } from '../subjects/neuroscience'
import { cellMolecularBiologyTopics } from '../subjects/cell-molecular-biology'
import { botanyTopics } from '../subjects/botany'
import { evolutionaryBiologyTopics } from '../subjects/evolutionary-biology'
import { microbiologyImmunologyTopics } from '../subjects/microbiology-immunology'

export const lifeSciences: KnowledgeDomainFile = {
  domain: 'Life Sciences',
  blurb: 'From genes, neurons, and photosynthesis to anatomy, microbes, evolution, and the animal kingdom — how living systems are built, run, and related.',
  topics: [
  // Zoology — 5 topics in this field
  ...zoologyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Ecology & Conservation — 8 topics in this field
  ...ecologyConservationTopics.filter((t) => t.domain === 'Life Sciences'),
  // Biochemistry — 8 topics in this field
  ...biochemistryTopics.filter((t) => t.domain === 'Life Sciences'),
  // Developmental Biology — 6 topics in this field
  ...developmentalBiologyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Marine Biology — 4 topics in this field
  ...marineBiologyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Genetics & Heredity — 18 topics in this field
  ...geneticsHeredityTopics.filter((t) => t.domain === 'Life Sciences'),
  // Human Anatomy & Physiology — 11 topics in this field
  ...humanAnatomyPhysiologyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Neuroscience — 5 topics in this field
  ...neuroscienceTopics.filter((t) => t.domain === 'Life Sciences'),
  // Cell & Molecular Biology — 11 topics in this field
  ...cellMolecularBiologyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Botany — 8 topics in this field
  ...botanyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Evolutionary Biology — 9 topics in this field
  ...evolutionaryBiologyTopics.filter((t) => t.domain === 'Life Sciences'),
  // Microbiology & Immunology — 8 topics in this field
  ...microbiologyImmunologyTopics.filter((t) => t.domain === 'Life Sciences'),
  ],
}
