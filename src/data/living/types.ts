/**
 * The Living Library — a permanently growing knowledge base.
 *
 * Topics live in ./domains/*.ts (one file per knowledge domain) and are
 * expanded over time: every content-expansion pass appends new topics and
 * never deletes old ones. Growth is driven by explicit expansion requests
 * (the daily master prompt) — not by any autonomous process.
 *
 * All domain files must conform EXACTLY to these interfaces.
 */

export type Tier = 'core' | 'intermediate' | 'advanced'

export type LivingBlock =
  | { kind: 'para'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'callout'; title: string; text: string; tone: 'insight' | 'warn' | 'path' }
  | { kind: 'formula'; name: string; latex: string; meaning: string }
  | { kind: 'example'; title: string; steps: string[] }
  | { kind: 'terms'; items: { term: string; def: string }[] }
  | { kind: 'quiz'; items: { q: string; options: string[]; answer: number; explain: string }[] }
  | { kind: 'list'; items: string[]; ordered?: boolean }

export interface LivingTopic {
  /** kebab-case, globally unique, stable forever: e.g. "phys-angular-momentum" */
  id: string
  title: string
  domain: string
  field: string
  branch: string
  tier: Tier
  /** 5-8 key concept phrases for search + recap */
  concepts: string[]
  /** total prose word count (all blocks) */
  words: number
  readMins: number
  /** date this topic was added, YYYY-MM-DD */
  addedOn: string
  blocks: LivingBlock[]
}

export interface LivingDomainFile {
  domain: string
  blurb: string
  topics: LivingTopic[]
}
