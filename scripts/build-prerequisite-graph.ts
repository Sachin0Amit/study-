// ============ Prerequisite Graph Builder (master spec PART 2.3) ==============
//
// Dependency-aware teaching: builds the topic-level prerequisite graph for the
// Knowledge University, resolves declared prerequisites into cross-topic and
// cross-universe edges, and validates ordering.
//
// Edge kinds:
//   sequence      — teaching order within each subject (chapters in subject-
//                   index import order × lessons in array order). Ordering
//                   FACT, not a dependency — excluded from cycle logic.
//   declared      — derivation-block `prerequisites` phrases resolved to:
//                     · another ku topic (title/concept match), or
//                     · a masters-library section (cross-universe foundation)
//   Lesson-internal setup phrases are classified honestly, never edged.
//   Unresolved phrases are listed for future authoring (spec: a missing
//   prerequisite must be created or connected — the list IS the work queue).
//
// Validation (spec: detect cycles, invalid dependencies, incorrect ordering):
//   · cycles over declared ku↔ku edges only (a back-reference to an earlier
//     lesson in the same subject is CORRECT — the sequence satisfies it)
//   · forward-reference violations — a declared prerequisite that points to a
//     LATER lesson in the same subject's teaching order
//   · dangling references
//
// Writes docs/project/registries/PREREQUISITE_GRAPH.json.
// Run: bun scripts/build-prerequisite-graph.ts

import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { KNOWLEDGE_TOPICS } from '../src/data/knowledge'
import { LIBRARY_SECTIONS } from '../src/data/library'

const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'docs/project/registries/PREREQUISITE_GRAPH.json')
const BUILT_ON = new Date().toISOString().slice(0, 10)
const RESOLVE_THRESHOLD = 0.7
const INTERNAL_THRESHOLD = 0.5

/**
 * Human-verified prerequisite aliases (top precedence — the repo's proven
 * TOPIC_ALIASES pattern). Each entry was checked against the target's actual
 * content on 2026-11-02 before inclusion; automated matchers may never
 * override these. Key = normalized phrase, value = target id.
 */
const CURATED_PREREQ_ALIASES: Record<string, { to: string; target: 'ku-topic' | 'masters-section'; note: string }> = {
  'natural logarithms': { to: 'calc-ch11-s19', target: 'masters-section', note: 'Logarithms · Sequences, Series & Logarithms · Mathematics Master Library — verified 2026-11-02' },
  'logarithms exponents': { to: 'calc-ch11-s19', target: 'masters-section', note: 'same verified logarithms section' },
  'fractions percentages': { to: 'math-sk3-s2', target: 'masters-section', note: 'Percentages · Ratios, Percentages & Statistics · Mathematics Master Library — verified 2026-11-02' },
  'percentages ratios': { to: 'math-sk3-s2', target: 'masters-section', note: 'same verified ratios/percentages chapter' },
  'constructive interference requires path difference whole wavelength': { to: 'hall-ch17-s3', target: 'masters-section', note: 'Interference · Waves-II · Physics Master Library — verified 2026-11-02' },
  'uniform circular motion inward acceleration': { to: 'hall-ch4-s5', target: 'masters-section', note: 'Uniform Circular Motion · Physics Master Library — verified 2026-11-02 (2D-motion chapter, not the 1D acceleration section)' },
  'elementary algebra': { to: 'math-algebra-notation-manipulation', target: 'ku-topic', note: 'Algebraic Notation and Manipulation — the in-universe algebra foundations lesson; verified 2026-11-02' },
  'expected value': { to: 'every-probability-everyday-decisions', target: 'ku-topic', note: 'concept "Expected value: the long-run average" — the in-universe EV lesson; verified 2026-11-02' },
  'expected value probability weighted sum': { to: 'every-probability-everyday-decisions', target: 'ku-topic', note: 'same verified EV lesson — long-run average IS the probability-weighted sum' },
  'place value': { to: 'qa-number-families-place-value', target: 'ku-topic', note: 'the §1.1 place-value lesson of the Quantitative Aptitude book; verified 2026-11-02' },
}

const STOPWORDS = new Set([
  'the', 'a', 'an', 'of', 'and', 'or', 'to', 'in', 'for', 'as', 'is', 'are', 'be', 'with', 'on',
  'at', 'by', 'from', 'that', 'this', 'these', 'those', 'their', 'its', 'into', 'vs', 'between',
  'one', 'two', 'basic', 'introduction', 'part', 'lesson',
])

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[()''""—–-]/g, ' ')
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t))
}

function norm(s: string): string {
  return tokens(s).join(' ')
}

function overlap(phraseTokens: string[], target: string): number {
  const tt = new Set(tokens(target))
  const shared = phraseTokens.filter((x) => tt.has(x)).length
  return phraseTokens.length ? shared / phraseTokens.length : 0
}

interface Node {
  id: string
  title: string
  subject: string
  chapter: string
  orderInSubject: number
  tier: string
}

function main() {
  // ---------- group topics by subject, preserving flat-array order ----------
  const bySubject = new Map<string, typeof KNOWLEDGE_TOPICS>()
  for (const t of KNOWLEDGE_TOPICS) {
    const arr = bySubject.get(t.field) ?? []
    arr.push(t)
    bySubject.set(t.field, arr)
  }

  const nodes: Node[] = []
  const nodeById = new Map<string, Node>()
  const sequenceEdges: { from: string; to: string; via: string }[] = []
  const tierLadder: Record<string, { core: number; intermediate: number; advanced: number }> = {}

  for (const [subject, topics] of bySubject) {
    topics.forEach((t, i) => {
      const n: Node = { id: t.id, title: t.title, subject, chapter: t.branch, orderInSubject: i, tier: t.tier }
      nodes.push(n)
      nodeById.set(t.id, n)
      const lad = (tierLadder[subject] ??= { core: 0, intermediate: 0, advanced: 0 })
      lad[t.tier as 'core' | 'intermediate' | 'advanced']++
      if (i > 0) {
        sequenceEdges.push({ from: topics[i - 1].id, to: t.id, via: `sequence: ${subject} lesson ${i} → ${i + 1}` })
      }
    })
  }

  // ---------- resolve derivation-level declared prerequisites ---------------
  const titleIndex = new Map<string, { id: string; field: string }>()
  const conceptIndex = new Map<string, { id: string; field: string }>()
  for (const t of KNOWLEDGE_TOPICS) {
    const tn = norm(t.title)
    if (!titleIndex.has(tn)) titleIndex.set(tn, { id: t.id, field: t.field })
    for (const c of t.concepts) {
      const cn = norm(c)
      if (!conceptIndex.has(cn)) conceptIndex.set(cn, { id: t.id, field: t.field })
    }
  }
  const mastersSections = LIBRARY_SECTIONS.map((s) => ({ id: s.id, title: s.title }))

  // containment helper: normalized containment either way, contained side ≥1 token
  const contains = (a: string, b: string) => {
    const na = norm(a)
    const nb = norm(b)
    if (!na || !nb || na === nb) return false
    return na.includes(` ${nb} `) || nb.includes(` ${na} `) || na.startsWith(`${nb} `) || nb.startsWith(`${na} `) || na.endsWith(` ${nb}`) || nb.endsWith(` ${na}`)
  }

  const declaredEdges: { from: string; phrase: string; to: string; target: 'ku-topic' | 'masters-section'; targetTitle: string; subject: string; matchedBy: 'title' | 'concept' | 'title-containment' | 'concept-containment' | 'section-title' | 'curated-alias'; score: number }[] = []
  const lessonInternal: { from: string; phrase: string }[] = []
  const unresolved: { from: string; phrase: string }[] = []

  for (const t of KNOWLEDGE_TOPICS) {
    for (const b of t.blocks) {
      if (b.kind !== 'derivation' || !b.prerequisites) continue
      for (const raw of b.prerequisites) {
        const phrase = raw.trim()
        const nPhrase = norm(phrase)
        if (!nPhrase) continue
        const pt = tokens(phrase)
        if (!pt.length) continue

        // 1) CURATED ALIAS FIRST — a human-verified mapping outranks every
        //    automated check (the repo's alias-first precedence lesson: fuzzy
        //    guesses must never block or shadow verified targets)
        const alias = CURATED_PREREQ_ALIASES[nPhrase]
        if (alias) {
          declaredEdges.push({ from: t.id, phrase, to: alias.to, target: alias.target, targetTitle: alias.note, subject: alias.target === 'ku-topic' ? (nodeById.get(alias.to)?.subject ?? 'ku') : 'Masters Library', matchedBy: 'curated-alias', score: 1 })
          continue
        }

        // 2) lesson-internal: the phrase restates THIS lesson's own material —
        //    either its concepts/title, or its own prose (a derivation whose
        //    prerequisite the lesson itself introduces earlier in the text)
        const sharedWith = (target: string) => tokens(target).filter((x) => pt.includes(x)).length
        const prose = t.blocks
          .filter((b) => b.kind === 'para' || b.kind === 'heading' || b.kind === 'callout')
          .map((b) => ('text' in b ? b.text : ''))
          .join(' ')
          .toLowerCase()
        const proseTokens = new Set(tokens(prose))
        const proseShared = pt.filter((x) => proseTokens.has(x)).length
        const internalHit =
          norm(t.title) === nPhrase ||
          t.concepts.some((c) => sharedWith(c) >= 2 && overlap(pt, c) >= INTERNAL_THRESHOLD) ||
          (sharedWith(t.title) >= 2 && overlap(pt, t.title) >= INTERNAL_THRESHOLD) ||
          (proseShared >= 2 && proseShared / pt.length >= INTERNAL_THRESHOLD)
        if (internalHit) {
          lessonInternal.push({ from: t.id, phrase })
          continue
        }

        // 3) exact normalized phrase match to another ku topic (title, concept)
        const titleHit = titleIndex.get(nPhrase)
        if (titleHit && titleHit.id !== t.id) {
          declaredEdges.push({ from: t.id, phrase, to: titleHit.id, target: 'ku-topic', targetTitle: titleHit.id, subject: titleHit.field, matchedBy: 'title', score: 1 })
          continue
        }
        const conceptHit = conceptIndex.get(nPhrase)
        if (conceptHit && conceptHit.id !== t.id) {
          declaredEdges.push({ from: t.id, phrase, to: conceptHit.id, target: 'ku-topic', targetTitle: conceptHit.id, subject: conceptHit.field, matchedBy: 'concept', score: 1 })
          continue
        }

        // 3) precise containment matching (no fuzzy guessing):
        //    a) another ku topic TITLE contained in the phrase or vice versa
        //       ("Elementary algebra" ⊃ topic "Algebra"; "Natural logarithms" ⊃ "Logarithms")
        //    b) another ku topic's SHORT concept (≤4 tokens — a defined name,
        //       not a sentence) contained in the phrase ("Expected value" ⊆
        //       phrase "Expected value as a probability-weighted sum")
        let contained: { id: string; field: string; title: string; by: 'title-containment' | 'concept-containment' } | null = null
        for (const cand of KNOWLEDGE_TOPICS) {
          if (cand.id === t.id || contained) continue
          if (contains(cand.title, phrase)) {
            contained = { id: cand.id, field: cand.field, title: cand.title, by: 'title-containment' }
            break
          }
          for (const c of cand.concepts) {
            if (tokens(c).length <= 4 && contains(c, phrase)) {
              contained = { id: cand.id, field: cand.field, title: cand.title, by: 'concept-containment' }
              break
            }
          }
        }
        if (contained) {
          declaredEdges.push({ from: t.id, phrase, to: contained.id, target: 'ku-topic', targetTitle: contained.title, subject: contained.field, matchedBy: contained.by, score: 1 })
          continue
        }

        // 4) best token-overlap match against other ku topics (title + concepts)
        let best: { id: string; field: string; by: 'title' | 'concept'; score: number } | null = null
        for (const cand of KNOWLEDGE_TOPICS) {
          if (cand.id === t.id) continue
          const sTitle = overlap(pt, cand.title)
          if (sTitle >= RESOLVE_THRESHOLD && sTitle > (best?.score ?? 0)) {
            best = { id: cand.id, field: cand.field, by: 'title', score: sTitle }
          }
          for (const c of cand.concepts) {
            const sC = overlap(pt, c)
            if (sC >= RESOLVE_THRESHOLD && sC > (best?.score ?? 0)) {
              best = { id: cand.id, field: cand.field, by: 'concept', score: sC }
            }
          }
        }
        if (best) {
          declaredEdges.push({ from: t.id, phrase, to: best.id, target: 'ku-topic', targetTitle: best.id, subject: best.field, matchedBy: best.by, score: Math.round(best.score * 100) / 100 })
          continue
        }

        // 5) cross-universe: masters-library section (foundational
        //    school/undergrad material). Containment requires the section title
        //    to have ≥2 content tokens ALL inside the phrase — single generic
        //    titles ("Memory", "Power", "Numbers") match false positives across
        //    unrelated domains and are rejected by design.
        let bestSec: { id: string; title: string; score: number } | null = null
        for (const sec of mastersSections) {
          const st = tokens(sec.title)
          if (st.length >= 2 && st.every((x) => pt.includes(x))) {
            if (!bestSec) bestSec = { id: sec.id, title: sec.title, score: 1 }
          } else {
            const s = overlap(pt, sec.title)
            if (s >= RESOLVE_THRESHOLD && s > (bestSec?.score ?? 0)) bestSec = { id: sec.id, title: sec.title, score: s }
          }
        }
        if (bestSec) {
          declaredEdges.push({ from: t.id, phrase, to: bestSec.id, target: 'masters-section', targetTitle: bestSec.title, subject: 'Masters Library', matchedBy: 'section-title', score: Math.round(bestSec.score * 100) / 100 })
          continue
        }

        // 6) honest gap — candidate missing-prerequisite work queue
        unresolved.push({ from: t.id, phrase })
      }
    }
  }

  // ---------- validation ------------------------------------------------------
  // dangling: every edge endpoint that is a ku node must exist (masters targets
  // are checked against LIBRARY_SECTIONS ids by construction)
  const sectionIds = new Set(mastersSections.map((s) => s.id))
  const dangling = [
    ...new Set(
      declaredEdges
        .filter((e) => (e.target === 'ku-topic' ? !nodeById.has(e.to) : !sectionIds.has(e.to)))
        .flatMap((e) => [`${e.from}→${e.to}`])
    ),
  ]

  // cycles over declared ku↔ku dependency edges only
  const dep = new Map<string, string[]>()
  for (const e of declaredEdges) {
    if (e.target !== 'ku-topic') continue
    const a = dep.get(e.from) ?? []
    a.push(e.to)
    dep.set(e.from, a)
  }
  const WHITE = 0
  const GRAY = 1
  const BLACK = 2
  const color = new Map<string, number>()
  const cycles: string[][] = []
  const stack: string[] = []
  const dfs = (u: string) => {
    color.set(u, GRAY)
    stack.push(u)
    for (const v of dep.get(u) ?? []) {
      const c = color.get(v) ?? WHITE
      if (c === GRAY) {
        const at = stack.indexOf(v)
        if (at > -1) cycles.push([...stack.slice(at), v])
      } else if (c === WHITE) dfs(v)
    }
    stack.pop()
    color.set(u, BLACK)
  }
  for (const n of nodes) if ((color.get(n.id) ?? WHITE) === WHITE) dfs(n.id)

  // forward-reference violations: declared ku prerequisite that appears LATER
  // in the same subject's teaching order than the depending lesson
  const forwardRefs: { from: string; to: string; subject: string; note: string }[] = []
  for (const e of declaredEdges) {
    if (e.target !== 'ku-topic') continue
    const from = nodeById.get(e.from)
    const to = nodeById.get(e.to)
    if (from && to && from.subject === to.subject && to.orderInSubject > from.orderInSubject) {
      forwardRefs.push({
        from: e.from,
        to: e.to,
        subject: from.subject,
        note: `prerequisite "${e.phrase}" is taught AFTER the lesson that needs it (order ${from.orderInSubject + 1} → ${to.orderInSubject + 1})`,
      })
    }
  }

  // ---------- write ------------------------------------------------------------
  mkdirSync(join(ROOT, 'docs/project/registries'), { recursive: true })
  const graph = {
    $comment:
      'Topic-level prerequisite graph (spec PART 2.3: Topic → Prerequisite Topics → Learning Sequence). sequence = teaching order per subject (ordering facts, not dependencies). declared = derivation prerequisite phrases resolved to ku topics (title/concept, exact or ≥0.7 token overlap) or masters-library sections (cross-universe foundations). Lesson-internal phrases are classified, unresolved phrases are the honest missing-prerequisite work queue (spec: create or connect). Validation: dependency cycles (declared ku edges only), forward-reference violations, dangling refs. Regenerate: bun scripts/build-prerequisite-graph.ts',
    builtOn: BUILT_ON,
    nodeCount: nodes.length,
    nodes,
    edges: { sequence: sequenceEdges, declared: declaredEdges },
    declaredResolution: {
      phrasesTotal: declaredEdges.length + lessonInternal.length + unresolved.length,
      resolvedToKuTopic: declaredEdges.filter((e) => e.target === 'ku-topic').length,
      resolvedToMastersSection: declaredEdges.filter((e) => e.target === 'masters-section').length,
      lessonInternal: lessonInternal.length,
      unresolved: unresolved.length,
      unresolvedList: unresolved,
      lessonInternalList: lessonInternal,
    },
    tierLadder,
    validation: {
      dependencyCycles: cycles.length,
      cycles: cycles.slice(0, 10),
      forwardReferenceViolations: forwardRefs,
      danglingReferences: dangling,
      status: cycles.length === 0 && forwardRefs.length === 0 && dangling.length === 0 ? 'PASS' : 'FINDINGS',
    },
  }
  writeFileSync(OUT, JSON.stringify(graph, null, 2) + '\n')

  console.log('PREREQUISITE GRAPH → docs/project/registries/PREREQUISITE_GRAPH.json')
  console.log(`  nodes: ${nodes.length} (subjects: ${bySubject.size}) · sequence edges: ${sequenceEdges.length}`)
  console.log(
    `  declared phrases: ${graph.declaredResolution.phrasesTotal} → ku ${graph.declaredResolution.resolvedToKuTopic} · masters ${graph.declaredResolution.resolvedToMastersSection} · internal ${lessonInternal.length} · unresolved ${unresolved.length}`
  )
  console.log(
    `  validation: cycles ${cycles.length} · forward-refs ${forwardRefs.length} · dangling ${dangling.length} → ${graph.validation.status}`
  )
  if (forwardRefs.length) for (const f of forwardRefs) console.log(`    FORWARD-REF: ${f.note}`)
}

main()
