/**
 * Knowledge Universe — field file 13: Law & Governance
 *
 * The rules societies write for power — constitutions, courts, treaties and the machinery that makes them hold.
 *
 * Field-wise routing: this field assembles its topics from the subject
 * books (../subjects/*) — every topic lives in exactly one subject file,
 * and the domain filter below routes it to its field. Subjects feeding
 * this field: International Law (5), Constitutional Law (4), Legal Systems & Method (3), Business & Corporate Law (5), Private Law: Contracts, Torts & Family (5), Criminal Law & Justice (3), Regulatory & Workplace Law (3)
 */
import type { KnowledgeDomainFile } from '../types'
import { internationalLawTopics } from '../subjects/international-law'
import { constitutionalLawTopics } from '../subjects/constitutional-law'
import { legalSystemsMethodTopics } from '../subjects/legal-systems-method'
import { businessCorporateLawTopics } from '../subjects/business-corporate-law'
import { privateLawTopics } from '../subjects/private-law'
import { criminalJusticeTopics } from '../subjects/criminal-justice'
import { regulatoryWorkplaceLawTopics } from '../subjects/regulatory-workplace-law'

export const lawGovernance: KnowledgeDomainFile = {
  domain: 'Law & Governance',
  blurb: 'The rules societies write for power — constitutions, courts, treaties and the machinery that makes them hold.',
  topics: [
  // International Law — 5 topics in this field
  ...internationalLawTopics.filter((t) => t.domain === 'Law & Governance'),
  // Constitutional Law — 4 topics in this field
  ...constitutionalLawTopics.filter((t) => t.domain === 'Law & Governance'),
  // Legal Systems & Method — 3 topics in this field
  ...legalSystemsMethodTopics.filter((t) => t.domain === 'Law & Governance'),
  // Business & Corporate Law — 5 topics in this field
  ...businessCorporateLawTopics.filter((t) => t.domain === 'Law & Governance'),
  // Private Law: Contracts, Torts & Family — 5 topics in this field
  ...privateLawTopics.filter((t) => t.domain === 'Law & Governance'),
  // Criminal Law & Justice — 3 topics in this field
  ...criminalJusticeTopics.filter((t) => t.domain === 'Law & Governance'),
  // Regulatory & Workplace Law — 3 topics in this field
  ...regulatoryWorkplaceLawTopics.filter((t) => t.domain === 'Law & Governance'),
  ],
}
