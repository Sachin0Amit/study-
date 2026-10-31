/**
 * Knowledge Universe — subject book: Environmental Policy & Circularity (environmental-policy-circularity)
 * group: Natural Sciences · 2 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Environmental Policy & Governance — 2 lessons
 *   02 Waste, Materials & the Circular Economy — 3 lessons
 */
import type { KnowledgeTopic } from '../../types'
import { environmentalPolicyCircularityCh01 } from './01-environmental-policy-and-governance'
import { environmentalPolicyCircularityCh02 } from './02-waste-materials-and-the-circular-economy'

export const environmentalPolicyCircularityTopics: KnowledgeTopic[] = [
  ...environmentalPolicyCircularityCh01,
  ...environmentalPolicyCircularityCh02,
]
