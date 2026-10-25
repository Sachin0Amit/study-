/* CONTENT-20261025-5: honest word-count verification for pass X44.
 * Calibrates the tokenizer against pass X43 (whose declared counts were
 * verified declared==actual by the orchestrator), then recounts X44.
 * Run: bun scripts/count-x44-words.ts
 */
import { x43ArtsArchitecturePassTopics } from '../src/data/knowledge/fields/x43-arts-architecture-pass'
import { x44HealthMindPassTopics } from '../src/data/knowledge/fields/x44-health-mind-pass'

type B = { kind: string; text?: string; title?: string; steps?: string[]; items?: unknown[]; [k: string]: unknown }

function proseStrings(t: { concepts?: string[]; blocks: B[] }): string[] {
  const out: string[] = []
  if (t.concepts) out.push(...t.concepts)
  for (const b of t.blocks) {
    if (b.kind === 'para' || b.kind === 'heading') out.push(String(b.text ?? ''))
    else if (b.kind === 'callout') { out.push(String(b.title ?? '')); out.push(String((b as { text?: string }).text ?? '')) }
    else if (b.kind === 'example') { out.push(String(b.title ?? '')); out.push(...(b.steps ?? [])) }
    else if (b.kind === 'terms') {
      for (const it of (b as { items: { term: string; def: string }[] }).items) { out.push(it.term); out.push(it.def) }
    } else if (b.kind === 'quiz') {
      for (const it of (b as { items: { q: string; options: string[]; explain: string }[] }).items) {
        out.push(it.q); out.push(...it.options); out.push(it.explain)
      }
    } else if (b.kind === 'list') out.push(...(b as { items: string[] }).items)
  }
  return out
}

function count(strs: string[], mode: 'all' | 'alnum'): number {
  let n = 0
  for (const s of strs) {
    const toks = s.split(/\s+/).filter(Boolean)
    for (const tok of toks) {
      if (mode === 'all') n++
      else if (/[A-Za-z0-9\u00C0-\u024F]/.test(tok)) n++
    }
  }
  return n
}

function report(label: string, topics: { id: string; words: number; readMins: number }[], includeConcepts: boolean) {
  console.log(`\n=== ${label} (concepts ${includeConcepts ? 'INCLUDED' : 'excluded'}) ===`)
  for (const t of topics) {
    const tt = t as unknown as { concepts?: string[]; blocks: B[] }
    const strs = proseStrings(tt)
    if (!includeConcepts) {
      // strip the concept strings we pushed first
      // recompute without concepts
      strs.length = 0
      for (const b of tt.blocks) {
        if (b.kind === 'para' || b.kind === 'heading') strs.push(String(b.text ?? ''))
        else if (b.kind === 'callout') { strs.push(String(b.title ?? '')); strs.push(String((b as { text?: string }).text ?? '')) }
        else if (b.kind === 'example') { strs.push(String(b.title ?? '')); strs.push(...(b.steps ?? [])) }
        else if (b.kind === 'terms') {
          for (const it of (b as { items: { term: string; def: string }[] }).items) { strs.push(it.term); strs.push(it.def) }
        } else if (b.kind === 'quiz') {
          for (const it of (b as { items: { q: string; options: string[]; explain: string }[] }).items) {
            strs.push(it.q); strs.push(...it.options); strs.push(it.explain)
          }
        } else if (b.kind === 'list') strs.push(...(b as { items: string[] }).items)
      }
    }
    const a = count(strs, 'all')
    const b = count(strs, 'alnum')
    console.log(`${t.id}: declared=${t.words} | all=${a} (d=${a - t.words}) | alnum=${b} (d=${b - t.words})`)
  }
}

report('X43 calibration', x43ArtsArchitecturePassTopics as unknown as { id: string; words: number }[], false)
report('X43 calibration', x43ArtsArchitecturePassTopics as unknown as { id: string; words: number }[], true)
report('X44 verification', x44HealthMindPassTopics as unknown as { id: string; words: number }[], false)
report('X44 verification', x44HealthMindPassTopics as unknown as { id: string; words: number }[], true)
