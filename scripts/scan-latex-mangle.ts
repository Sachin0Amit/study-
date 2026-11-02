/**
 * Scan every knowledge topic's parsed strings for escape-mangling artifacts:
 * TAB (\t), carriage-return (\r), form-feed (\f), backspace (\b) characters
 * that a TS string literal produced where a LaTeX backslash was intended —
 * plus the missing-backslash tokens (\left→left, \sqrt→qrt, \pm→pm).
 * Prints topic id, block kind, and the offending fragment.
 * Run: bun scripts/scan-latex-mangle.ts
 */
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const ROOT = 'src/data/knowledge/subjects'

function* walkFiles(dir: string): Generator<string> {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    const st = statSync(p)
    if (st.isDirectory()) yield* walkFiles(p)
    else if (e.endsWith('.ts')) yield p
  }
}

const subjects = readdirSync(ROOT)
let totalBad = 0

for (const subj of subjects) {
  const subjDir = join(ROOT, subj)
  for (const file of walkFiles(subjDir)) {
    let mod: any
    try {
      mod = await import('../' + file.replace(/\.ts$/, ''))
    } catch (e) {
      console.log('IMPORT FAILED:', file)
      continue
    }
    for (const key of Object.keys(mod)) {
      const arr = mod[key]
      if (!Array.isArray(arr)) continue
      for (const topic of arr) {
        if (!topic || typeof topic !== 'object' || !Array.isArray(topic.blocks)) continue
        const check = (label: string, s: unknown) => {
          if (typeof s !== 'string') return
          const bad: string[] = []
          // control chars anywhere are always mangling artifacts
          if (/[\t\r\f\b\v]/.test(s)) bad.push('control-char')
          // lost-backslash tokens only matter INSIDE math delimiters ($...$ / $$...$$);
          // plain-text "sqrt(x)" prose in non-math strings is legitimate notation
          const mathSpans = s.match(/\$\$[^$]+\$\$|\$[^$]+\$/g) ?? []
          const mathText = mathSpans.join(' ')
          if (mathText) {
            if (/(?<![\\a-zA-Z])left\(/.test(mathText) || /(?<![\\a-zA-Z])frac\{/.test(mathText) || /(?<![\\a-zA-Z])sqrt/.test(mathText) || /(?<![\\a-zA-Z])pm\b/.test(mathText) || /(?<![\\a-zA-Z])begin\{/.test(mathText) || /(?<![\\a-zA-Z])(Delta|Rightarrow|Longrightarrow|checkmark|approx|qquad|quad|cdot|tag|times)\b/.test(mathText) || /(?<![\\a-zA-Z])ne(?![a-zA-Z])/.test(mathText)) bad.push('lost-backslash-in-math')
            if (/[\t\r\f\b\v]/.test(mathText)) bad.push('control-char-in-math')
          }
          if (bad.length) {
            totalBad++
            const probe = /[\t\r\f\b\v]|left\(|frac\{|sqrt|egin\{/.exec(mathText || s)
            const at = probe ? Math.max(0, (probe.index ?? 0) - 30) : 0
            const frag = (mathText || s).replace(/\n/g, '⏎').slice(at, at + 75)
            console.log(`${subj}/${file.split('/').pop()} · ${topic.id} · ${label} · ${bad.join('+')} · …${frag}…`)
          }
        }
        for (const b of topic.blocks as any[]) {
          check(`${b.kind}.text`, b.text)
          if (b.kind === 'equation') { check('equation.latex', b.latex); check('equation.note', b.note) }
          if (b.kind === 'formula') check('formula.latex', b.latex)
          if (b.kind === 'figure') check('figure.caption', b.caption)
          if (b.kind === 'derivation') {
            check('deriv.statement', b.statement)
            check('deriv.result', b.result)
            for (const st of b.steps ?? []) { check('deriv.step.formula', st.formula); check('deriv.step.expl', st.explanation) }
          }
          if (b.kind === 'example') for (const st of b.steps ?? []) check('example.step', st)
          if (b.kind === 'quiz') for (const it of b.items ?? []) { check('quiz.q', it.q); check('quiz.explain', it.explain) }
          if (b.kind === 'callout') check('callout.text', b.text)
          if (b.kind === 'terms') for (const it of b.items ?? []) check('term.def', it.def)
          if (b.kind === 'list') for (const it of b.items ?? []) check('list.item', it)
        }
      }
    }
  }
}
console.log(totalBad === 0 ? 'CLEAN — no mangling found' : `TOTAL offending fragments: ${totalBad}`)
