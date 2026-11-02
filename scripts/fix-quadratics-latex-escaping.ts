/**
 * Repair pass for the escape-mangled LaTeX written into §71.2
 * (math-quadratics-completing-square) on 2026-11-02: LaTeX was authored with
 * SINGLE backslashes inside quoted TS strings, so at parse time \t became TAB,
 * \r CR, \f FF, and invalid escapes (\l, \s, \p, \D, \R, …) dropped their
 * backslash — KaTeX received "left(x - <TAB>rac{1}{2}<CR>ight)^2".
 *
 * This script doubles every intended LaTeX backslash (single-pass, longest-
 * command-first, with (?<!\\) lookbehind so already-correct \\tfrac sequences
 * in the derivation steps are untouched). Intentional \n newlines and the
 * \u2019 unicode apostrophes are excluded from the alternation and stay as-is.
 *
 * Idempotent: a second run finds no (?<!\\)\\<cmd> matches outside correct
 * doubles (their first backslash is followed by a backslash, the second is
 * blocked by the lookbehind) — verify with scripts/scan-latex-mangle.ts.
 * Run: bun scripts/fix-quadratics-latex-escaping.ts
 */
import { readFileSync, writeFileSync } from 'fs'

const FILE = 'src/data/knowledge/subjects/mathematics-unified/02-algebra.ts'

const COMMANDS = [
  'Longrightarrow', 'checkmark', 'Rightarrow', 'approx', 'qquad', 'Delta',
  'tfrac', 'times', 'text', 'sqrt', 'left', 'quad', 'frac', 'right',
  'pm', 'big', 'cdot', 'ldots', 'ne', 'ge', 'le',
].sort((a, b) => b.length - a.length)

const re = new RegExp(`(?<!\\\\)\\\\(${COMMANDS.join('|')}|;| )`, 'g')

const before = readFileSync(FILE, 'utf8')
const matches = before.match(new RegExp(re.source, 'g')) ?? []
const after = before.replace(re, (m, cmd) => '\\\\' + cmd)
writeFileSync(FILE, after)

console.log(`doubled ${matches.length} LaTeX backslashes:`)
const tally: Record<string, number> = {}
for (const m of matches) tally[m] = (tally[m] ?? 0) + 1
for (const [cmd, n] of Object.entries(tally).sort((a, b) => b[1] - a[1]))
  console.log(`  ${JSON.stringify(cmd)} × ${n}`)
