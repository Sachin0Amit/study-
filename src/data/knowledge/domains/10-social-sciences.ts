/**
 * Knowledge Universe — field file 10: Social Sciences
 *
 * How humans behave, bond, decide and govern together — psychology, sociology and political science at their meeting points.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Education (4), Research Methods (3), Psychology (12), Media & Communication (6), International Relations & Security (4), Public Policy & Administration (5), Logical Reasoning (1), Political Theory (4), Geography (5), Sociology (10), Comparative Politics & Indian Polity (4), Urban Studies (4), Anthropology (4)
 */
import type { KnowledgeDomainFile } from '../types'
import { educationTopics } from '../subjects/education'
import { researchMethodsTopics } from '../subjects/research-methods'
import { psychologyTopics } from '../subjects/psychology'
import { mediaCommunicationTopics } from '../subjects/media-communication'
import { internationalRelationsTopics } from '../subjects/international-relations'
import { publicPolicyAdministrationTopics } from '../subjects/public-policy-administration'
import { logicalReasoningTopics } from '../subjects/logical-reasoning'
import { politicalTheoryTopics } from '../subjects/political-theory'
import { geographyTopics } from '../subjects/geography'
import { sociologyTopics } from '../subjects/sociology'
import { comparativeIndianPoliticsTopics } from '../subjects/comparative-indian-politics'
import { urbanStudiesTopics } from '../subjects/urban-studies'
import { anthropologyTopics } from '../subjects/anthropology'

export const socialSciences: KnowledgeDomainFile = {
  domain: 'Social Sciences',
  blurb: 'How humans behave, bond, decide and govern together — psychology, sociology and political science at their meeting points.',
  topics: [
  // Education — 4 topics in this field
  ...educationTopics.filter((t) => t.domain === 'Social Sciences'),
  // Research Methods — 3 topics in this field
  ...researchMethodsTopics.filter((t) => t.domain === 'Social Sciences'),
  // Psychology — 12 topics in this field
  ...psychologyTopics.filter((t) => t.domain === 'Social Sciences'),
  // Media & Communication — 6 topics in this field
  ...mediaCommunicationTopics.filter((t) => t.domain === 'Social Sciences'),
  // International Relations & Security — 4 topics in this field
  ...internationalRelationsTopics.filter((t) => t.domain === 'Social Sciences'),
  // Public Policy & Administration — 5 topics in this field
  ...publicPolicyAdministrationTopics.filter((t) => t.domain === 'Social Sciences'),
  // Logical Reasoning — 1 topic in this field
  ...logicalReasoningTopics.filter((t) => t.domain === 'Social Sciences'),
  // Political Theory — 4 topics in this field
  ...politicalTheoryTopics.filter((t) => t.domain === 'Social Sciences'),
  // Geography — 5 topics in this field
  ...geographyTopics.filter((t) => t.domain === 'Social Sciences'),
  // Sociology — 10 topics in this field
  ...sociologyTopics.filter((t) => t.domain === 'Social Sciences'),
  // Comparative Politics & Indian Polity — 4 topics in this field
  ...comparativeIndianPoliticsTopics.filter((t) => t.domain === 'Social Sciences'),
  // Urban Studies — 4 topics in this field
  ...urbanStudiesTopics.filter((t) => t.domain === 'Social Sciences'),
  // Anthropology — 4 topics in this field
  ...anthropologyTopics.filter((t) => t.domain === 'Social Sciences'),
  ],
}
