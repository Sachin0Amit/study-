/**
 * Knowledge Universe — field file 06: Environment & Sustainability
 *
 * How Earth's climate, soils and life-support systems actually work — and how human choices stress or restore them.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Environmental Policy & Circularity (5), Ecology & Conservation (4), Earth & Climate Science (5), Environmental Health & Food Systems (4), Energy & Sustainability (4), Urban Studies (2)
 */
import type { KnowledgeDomainFile } from '../types'
import { environmentalPolicyCircularityTopics } from '../subjects/environmental-policy-circularity'
import { ecologyConservationTopics } from '../subjects/ecology-conservation'
import { earthClimateScienceTopics } from '../subjects/earth-climate-science'
import { environmentalHealthFoodTopics } from '../subjects/environmental-health-food'
import { energyTopics } from '../subjects/energy'
import { urbanStudiesTopics } from '../subjects/urban-studies'

export const environmentDomain: KnowledgeDomainFile = {
  domain: 'Environment & Sustainability',
  blurb: 'How Earth\'s climate, soils and life-support systems actually work — and how human choices stress or restore them.',
  topics: [
  // Environmental Policy & Circularity — 5 topics in this field
  ...environmentalPolicyCircularityTopics.filter((t) => t.domain === 'Environment & Sustainability'),
  // Ecology & Conservation — 4 topics in this field
  ...ecologyConservationTopics.filter((t) => t.domain === 'Environment & Sustainability'),
  // Earth & Climate Science — 5 topics in this field
  ...earthClimateScienceTopics.filter((t) => t.domain === 'Environment & Sustainability'),
  // Environmental Health & Food Systems — 4 topics in this field
  ...environmentalHealthFoodTopics.filter((t) => t.domain === 'Environment & Sustainability'),
  // Energy & Sustainability — 4 topics in this field
  ...energyTopics.filter((t) => t.domain === 'Environment & Sustainability'),
  // Urban Studies — 2 topics in this field
  ...urbanStudiesTopics.filter((t) => t.domain === 'Environment & Sustainability'),
  ],
}
