/**
 * Knowledge Universe — field file 09: Technology & Applied Science
 *
 * The applied engines of modern life — batteries, positioning systems, chip fabrication and the machines they power.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Medical Technology (4), Manufacturing & Industrial Systems (1), Computer & Digital Literacy (1), Energy & Sustainability (2), Communication Systems (1), Nanotechnology (1), Physics (1), Aerospace & Aviation (2), Construction, Geomatics & Underground Engineering (1), Water & Environmental Engineering (2), Home Repair & Everyday Machines (2)
 */
import type { KnowledgeDomainFile } from '../types'
import { medicalTechnologyTopics } from '../subjects/medical-technology'
import { manufacturingUnifiedTopics } from '../subjects/manufacturing-unified'
import { computerLiteracyTopics } from '../subjects/computer-literacy'
import { energyTopics } from '../subjects/energy'
import { communicationUnifiedTopics } from '../subjects/communication-unified'
import { nanotechnologyTopics } from '../subjects/nanotechnology'
import { physicsUnifiedTopics } from '../subjects/physics-unified'
import { aerospaceAviationTopics } from '../subjects/aerospace-aviation'
import { constructionGeomaticsTopics } from '../subjects/construction-geomatics'
import { waterEnvironmentalEngineeringTopics } from '../subjects/water-environmental-engineering'
import { homeRepairMachinesTopics } from '../subjects/home-repair-machines'

export const technologyApplied: KnowledgeDomainFile = {
  domain: 'Technology & Applied Science',
  blurb: 'The applied engines of modern life — batteries, positioning systems, chip fabrication and the machines they power.',
  topics: [
  // Medical Technology — 4 topics in this field
  ...medicalTechnologyTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Manufacturing & Industrial Systems — 1 topic in this field
  ...manufacturingUnifiedTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Computer & Digital Literacy — 1 topic in this field
  ...computerLiteracyTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Energy & Sustainability — 2 topics in this field
  ...energyTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Communication Systems — 1 topic in this field
  ...communicationUnifiedTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Nanotechnology — 1 topic in this field
  ...nanotechnologyTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Physics — 1 topic in this field
  ...physicsUnifiedTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Aerospace & Aviation — 2 topics in this field
  ...aerospaceAviationTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Construction, Geomatics & Underground Engineering — 1 topic in this field
  ...constructionGeomaticsTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Water & Environmental Engineering — 2 topics in this field
  ...waterEnvironmentalEngineeringTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  // Home Repair & Everyday Machines — 2 topics in this field
  ...homeRepairMachinesTopics.filter((t) => t.domain === 'Technology & Applied Science'),
  ],
}
