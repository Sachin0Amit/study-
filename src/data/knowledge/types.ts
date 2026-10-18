/**
 * Knowledge domains — a permanently growing knowledge base that renders
 * inside the Library as ordinary sections and subjects, exactly like
 * Foundations or Electronics & Communication.
 *
 * Topics live in ./fields/*.ts (one file per knowledge domain) and are
 * expanded over time: every content-expansion pass appends new topics and
 * never deletes old ones. Growth is driven by explicit expansion requests
 * (the daily master prompt) — not by any autonomous process.
 *
 * DEDUP RULE: before authoring a topic, cross-verify it against
 * coverage/COVERAGE.md and ../dedup.ts. If it is already explained
 * elsewhere in the Library, do NOT include it.
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
