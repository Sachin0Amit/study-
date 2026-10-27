/**
 * Shared type contract for the StudyVerse Living Library grower service.
 *
 * The taxonomy files under ./taxonomy/ contain hand-written "seed" data for
 * every field of knowledge. The engine expands each seed into a full study
 * topic (hundreds of words of structured content) and writes it permanently
 * to disk as a typed JSON record — a self-growing hard-coded library.
 *
 * ALL taxonomy files must conform EXACTLY to these interfaces.
 */

export type Tier = 'core' | 'intermediate' | 'advanced'

export interface SeedFormula {
  /** short name, e.g. "Newton's Second Law" */
  name: string
  /** valid KaTeX latex, e.g. "F = m\\,a" (single backslashes in TS source) */
  latex: string
  /** one-sentence plain-English meaning */
  meaning: string
}

export interface SeedQuestion {
  /** question stem, self-contained */
  q: string
  /** the correct answer, short (a few words) */
  a: string
  /** exactly 3 plausible-but-wrong distractors */
  wrong: [string, string, string] | string[]
}

export interface SeedTerm {
  term: string
  /** one crisp sentence definition */
  def: string
}

export interface TopicSeed {
  /** specific topic title, e.g. "Angular Momentum and Rotational Dynamics" */
  title: string
  /** sub-field / branch name, e.g. "Classical Mechanics" */
  branch: string
  tier: Tier
  /** 5-7 key concept phrases (2-8 words each) */
  concepts: string[]
  /** 0-3 formulas, only where natural */
  formulas?: SeedFormula[]
  /** 3-5 real-world applications */
  applications: string[]
  /** 3-4 practice questions */
  questions: SeedQuestion[]
  /** 5-7 glossary terms */
  terms: SeedTerm[]
}

export interface FieldSeeds {
  /** field name, e.g. "Physics" */
  field: string
  topics: TopicSeed[]
}

export interface DomainSeeds {
  /** domain name, e.g. "Physical Sciences" */
  domain: string
  /** one-sentence description of the domain */
  blurb: string
  fields: FieldSeeds[]
}

/* ------------------------------------------------------------------ */
/* Written topic records (what the engine persists to disk)            */
/* ------------------------------------------------------------------ */

export type AutoBlock =
  | { kind: 'para'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'callout'; title: string; text: string; tone: 'insight' | 'warn' | 'path' }
  | { kind: 'formula'; name: string; latex: string; meaning: string }
  | { kind: 'example'; title: string; steps: string[] }
  | { kind: 'terms'; items: { term: string; def: string }[] }
  | { kind: 'quiz'; items: { q: string; options: string[]; answer: number; explain: string }[] }
  | { kind: 'list'; items: string[]; ordered?: boolean }

export interface WrittenTopic {
  id: string
  title: string
  domain: string
  field: string
  branch: string
  tier: Tier
  /** variation cycle — 1 = first pass over the seed, later cycles rewrite in a new voice */
  cycle: number
  /** template voice used by the synthesizer */
  voice: string
  /** true when the LLM enrichment pass added deep-dive content */
  enriched: boolean
  /** true for cross-domain fusion topics (seedA × seedB) */
  fusion?: boolean
  parents?: [string, string]
  words: number
  readMins: number
  ts: number
  blocks: AutoBlock[]
}

export interface ManifestTimelineEntry {
  id: string
  title: string
  domain: string
  field: string
  tier: Tier
  words: number
  ts: number
  enriched: boolean
  fusion: boolean
}

export interface Manifest {
  version: 1
  startedAt: number
  lastTick: number
  nextTickAt: number
  tickCount: number
  topicsWritten: number
  wordsWritten: number
  enrichedCount: number
  fusionCount: number
  cycle: number
  /** capped rolling log of the most recent writes */
  timeline: ManifestTimelineEntry[]
}
