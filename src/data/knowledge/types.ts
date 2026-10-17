/**
 * The Knowledge Universe — a permanently growing knowledge base that lives
 * inside the Library as ordinary subjects, exactly like Mathematics or
 * Physics.
 *
 * Topics live in ./fields/*.ts (one file per knowledge domain) and are
 * expanded over time: every content-expansion pass appends new topics and
 * never deletes old ones. Growth is driven by explicit expansion requests
 * (the daily master prompt) — not by any autonomous process.
 *
 * NOTE: these modules are consumed ONLY by scripts/serialize-content.ts;
 * the app reads the pre-serialized knowledge-meta.json + content.json.
 * After editing any field file, run: bun run scripts/serialize-content.ts
 *
 * All domain files must conform EXACTLY to these interfaces.
 */

export type Tier = 'core' | 'intermediate' | 'advanced'

export type KnowledgeBlock =
  | { kind: 'para'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'callout'; title: string; text: string; tone: 'insight' | 'warn' | 'path' }
  | { kind: 'formula'; name: string; latex: string; meaning: string }
  | { kind: 'example'; title: string; steps: string[] }
  | { kind: 'terms'; items: { term: string; def: string }[] }
  | { kind: 'quiz'; items: { q: string; options: string[]; answer: number; explain: string }[] }
  | { kind: 'list'; items: string[]; ordered?: boolean }

export interface KnowledgeTopic {
  /** kebab-case, globally unique, stable forever: e.g. "bio-crispr-gene-editing" */
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
  blocks: KnowledgeBlock[]
}

export interface KnowledgeDomainFile {
  domain: string
  blurb: string
  topics: KnowledgeTopic[]
}
