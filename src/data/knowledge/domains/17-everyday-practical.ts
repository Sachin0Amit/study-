/**
 * Knowledge Universe — field file 17: Everyday Knowledge
 *
 * Kitchen chemistry, paycheck literacy, and the probability behind everyday bets — knowledge that pays for itself.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Cooking & Food Science (4), Garden & Growing (4), Finance & Banking (3), Logical Reasoning (1), Cars, Navigation & the Outdoors (3), Home Repair & Everyday Machines (4), Practical Skills & Readiness (4), Career & Communication (4)
 */
import type { KnowledgeDomainFile } from '../types'
import { cookingFoodScienceTopics } from '../subjects/cooking-food-science'
import { gardenGrowingTopics } from '../subjects/garden-growing'
import { financeBankingTopics } from '../subjects/finance-banking'
import { logicalReasoningTopics } from '../subjects/logical-reasoning'
import { carsNavigationOutdoorsTopics } from '../subjects/cars-navigation-outdoors'
import { homeRepairMachinesTopics } from '../subjects/home-repair-machines'
import { practicalSkillsReadinessTopics } from '../subjects/practical-skills-readiness'
import { careerCommunicationTopics } from '../subjects/career-communication'

export const everydayPractical: KnowledgeDomainFile = {
  domain: 'Everyday Knowledge',
  blurb: 'Kitchen chemistry, paycheck literacy, and the probability behind everyday bets — knowledge that pays for itself.',
  topics: [
  // Cooking & Food Science — 4 topics in this field
  ...cookingFoodScienceTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Garden & Growing — 4 topics in this field
  ...gardenGrowingTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Finance & Banking — 3 topics in this field
  ...financeBankingTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Logical Reasoning — 1 topic in this field
  ...logicalReasoningTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Cars, Navigation & the Outdoors — 3 topics in this field
  ...carsNavigationOutdoorsTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Home Repair & Everyday Machines — 4 topics in this field
  ...homeRepairMachinesTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Practical Skills & Readiness — 4 topics in this field
  ...practicalSkillsReadinessTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  // Career & Communication — 4 topics in this field
  ...careerCommunicationTopics.filter((t) => t.domain === 'Everyday Knowledge'),
  ],
}
