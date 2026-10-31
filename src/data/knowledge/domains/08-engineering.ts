/**
 * Knowledge Universe — field file 08: Engineering
 *
 * The discipline of building systems that must work — bridges, chips, power grids and everything in between.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Structural & Seismic Engineering (6), Naval Architecture & Marine Engineering (7), Chemical Engineering (4), Transportation Engineering (3), Water & Environmental Engineering (3), Construction, Geomatics & Underground Engineering (2), Control & Instrumentation (1), Mechanics of Solids & Materials (1), Power Systems (1), Manufacturing & Industrial Systems (2), Aerospace & Aviation (2)
 */
import type { KnowledgeDomainFile } from '../types'
import { structuralSeismicEngineeringTopics } from '../subjects/structural-seismic-engineering'
import { navalArchitectureTopics } from '../subjects/naval-architecture'
import { chemicalEngineeringTopics } from '../subjects/chemical-engineering'
import { transportationEngineeringTopics } from '../subjects/transportation-engineering'
import { waterEnvironmentalEngineeringTopics } from '../subjects/water-environmental-engineering'
import { constructionGeomaticsTopics } from '../subjects/construction-geomatics'
import { controlUnifiedTopics } from '../subjects/control-unified'
import { solidsUnifiedTopics } from '../subjects/solids-unified'
import { powerUnifiedTopics } from '../subjects/power-unified'
import { manufacturingUnifiedTopics } from '../subjects/manufacturing-unified'
import { aerospaceAviationTopics } from '../subjects/aerospace-aviation'

export const engineeringDomain: KnowledgeDomainFile = {
  domain: 'Engineering',
  blurb: 'The discipline of building systems that must work — bridges, chips, power grids and everything in between.',
  topics: [
  // Structural & Seismic Engineering — 6 topics in this field
  ...structuralSeismicEngineeringTopics.filter((t) => t.domain === 'Engineering'),
  // Naval Architecture & Marine Engineering — 7 topics in this field
  ...navalArchitectureTopics.filter((t) => t.domain === 'Engineering'),
  // Chemical Engineering — 4 topics in this field
  ...chemicalEngineeringTopics.filter((t) => t.domain === 'Engineering'),
  // Transportation Engineering — 3 topics in this field
  ...transportationEngineeringTopics.filter((t) => t.domain === 'Engineering'),
  // Water & Environmental Engineering — 3 topics in this field
  ...waterEnvironmentalEngineeringTopics.filter((t) => t.domain === 'Engineering'),
  // Construction, Geomatics & Underground Engineering — 2 topics in this field
  ...constructionGeomaticsTopics.filter((t) => t.domain === 'Engineering'),
  // Control & Instrumentation — 1 topic in this field
  ...controlUnifiedTopics.filter((t) => t.domain === 'Engineering'),
  // Mechanics of Solids & Materials — 1 topic in this field
  ...solidsUnifiedTopics.filter((t) => t.domain === 'Engineering'),
  // Power Systems — 1 topic in this field
  ...powerUnifiedTopics.filter((t) => t.domain === 'Engineering'),
  // Manufacturing & Industrial Systems — 2 topics in this field
  ...manufacturingUnifiedTopics.filter((t) => t.domain === 'Engineering'),
  // Aerospace & Aviation — 2 topics in this field
  ...aerospaceAviationTopics.filter((t) => t.domain === 'Engineering'),
  ],
}
