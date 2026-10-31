/**
 * Knowledge Universe — field file 14: Business & Economics
 *
 * Markets, money and organisations — the logic of prices, trade, investment and value creation.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: Marketing (4), Financial Accounting (6), Advanced Accounting & Auditing (6), Entrepreneurship & the Business Environment (4), Microeconomics (7), Finance & Banking (6), International Trade (4), Development & Political Economy (3), Management & Leadership (4), Business Economics (3), Macroeconomics (6), Operations, Strategy & Supply Chain (4)
 */
import type { KnowledgeDomainFile } from '../types'
import { marketingTopics } from '../subjects/marketing'
import { financialAccountingTopics } from '../subjects/financial-accounting'
import { advancedAccountingAuditingTopics } from '../subjects/advanced-accounting-auditing'
import { entrepreneurshipBusinessEnvironmentTopics } from '../subjects/entrepreneurship-business-environment'
import { microeconomicsTopics } from '../subjects/microeconomics'
import { financeBankingTopics } from '../subjects/finance-banking'
import { internationalTradeTopics } from '../subjects/international-trade'
import { developmentEconomicsTopics } from '../subjects/development-economics'
import { managementLeadershipTopics } from '../subjects/management-leadership'
import { businessEconomicsTopics } from '../subjects/business-economics'
import { macroeconomicsTopics } from '../subjects/macroeconomics'
import { operationsStrategyTopics } from '../subjects/operations-strategy'

export const businessEconomics: KnowledgeDomainFile = {
  domain: 'Business & Economics',
  blurb: 'Markets, money and organisations — the logic of prices, trade, investment and value creation.',
  topics: [
  // Marketing — 4 topics in this field
  ...marketingTopics.filter((t) => t.domain === 'Business & Economics'),
  // Financial Accounting — 6 topics in this field
  ...financialAccountingTopics.filter((t) => t.domain === 'Business & Economics'),
  // Advanced Accounting & Auditing — 6 topics in this field
  ...advancedAccountingAuditingTopics.filter((t) => t.domain === 'Business & Economics'),
  // Entrepreneurship & the Business Environment — 4 topics in this field
  ...entrepreneurshipBusinessEnvironmentTopics.filter((t) => t.domain === 'Business & Economics'),
  // Microeconomics — 7 topics in this field
  ...microeconomicsTopics.filter((t) => t.domain === 'Business & Economics'),
  // Finance & Banking — 6 topics in this field
  ...financeBankingTopics.filter((t) => t.domain === 'Business & Economics'),
  // International Trade — 4 topics in this field
  ...internationalTradeTopics.filter((t) => t.domain === 'Business & Economics'),
  // Development & Political Economy — 3 topics in this field
  ...developmentEconomicsTopics.filter((t) => t.domain === 'Business & Economics'),
  // Management & Leadership — 4 topics in this field
  ...managementLeadershipTopics.filter((t) => t.domain === 'Business & Economics'),
  // Business Economics — 3 topics in this field
  ...businessEconomicsTopics.filter((t) => t.domain === 'Business & Economics'),
  // Macroeconomics — 6 topics in this field
  ...macroeconomicsTopics.filter((t) => t.domain === 'Business & Economics'),
  // Operations, Strategy & Supply Chain — 4 topics in this field
  ...operationsStrategyTopics.filter((t) => t.domain === 'Business & Economics'),
  ],
}
