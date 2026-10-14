/**
 * Prettify TeX by converting inline slash fractions (a/b) into stacked
 * \frac{a}{b} so that `7/3` renders with 7 above 3 instead of `7/3`.
 *
 * Applied centrally in the <TeX> component, so every lesson, formula sheet,
 * exam, flashcard and interactive lab benefits without editing content data.
 *
 * Safety:
 * - Never touches content inside \text{...}, \mathrm{...}, \mbox{...} (units
 *   like \text{m/s} stay as-is, which is the correct convention for units).
 * - Never touches `\/` (italic correction) or escaped slashes.
 * - Skips slashes without a valid numerator/denominator on both sides.
 * - Respects balanced (), [], {} so `f(v\pm v_D)/(v\mp v_S)` and
 *   `K = T_L/(T_H - T_L)` convert correctly.
 * - Strips one redundant outer paren layer: `1/(n\cdot t)` -> \frac{1}{n\cdot t}
 */

const BREAK_COMMANDS = new Set([
  'quad',
  'qquad',
  'hspace',
  'vspace',
  'pm',
  'mp',
  'le',
  'ge',
  'leq',
  'geq',
  'll',
  'gg',
  'approx',
  'approxeq',
  'equiv',
  'sim',
  'simeq',
  'cong',
  'ne',
  'neq',
  'in',
  'notin',
  'ni',
  'subset',
  'supset',
  'to',
  'rightarrow',
  'leftarrow',
  'longrightarrow',
  'longleftarrow',
  'Rightarrow',
  'Leftarrow',
  'Longrightarrow',
  'implies',
  'iff',
  'lfloor',
  'rfloor',
  'lceil',
  'rceil',
  'langle',
  'rangle',
  'lvert',
  'rvert',
  // big operators stay OUTSIDE the fraction: `\sum 1/C` is a sum of fractions,
  // not `(sum 1)/C`. Same for integrals/limits.
  'sum',
  'prod',
  'coprod',
  'int',
  'iint',
  'iiint',
  'oint',
  'oiint',
  'oiiint',
  'idotsint',
  'lim',
  'liminf',
  'limsup',
  'sup',
  'inf',
  'max',
  'min',
  // text-mode wrappers are boundaries (protected ranges already skip them,
  // this is a fallback so a missed protection never leaks text into a frac)
  'text',
  'mathrm',
  'mbox',
  'textit',
  'textbf',
  'textnormal',
  'lVert',
  'rVert',
  'left',
  'right',
  'big',
  'Big',
  'bigg',
  'Bigg',
  'bigl',
  'bigr',
  'Bigl',
  'Bigr',
  'biggl',
  'biggr',
  'Biggl',
  'Biggr',
])

function isEscaped(s: string, pos: number): boolean {
  let n = 0
  let i = pos - 1
  while (i >= 0 && s[i] === '\\') {
    n++
    i--
  }
  return n % 2 === 1
}

function findMatchingForward(s: string, openPos: number): number {
  const open = s[openPos]
  const close = open === '{' ? '}' : open === '(' ? ')' : open === '[' ? ']' : null
  if (!close) return -1
  let depth = 0
  for (let i = openPos; i < s.length; i++) {
    const c = s[i]
    if (c === '\\') {
      i++ // skip escaped char
      continue
    }
    if (c === open) depth++
    else if (c === close) {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function findMatchingBackward(s: string, closePos: number): number {
  const close = s[closePos]
  const open = close === '}' ? '{' : close === ')' ? '(' : close === ']' ? '[' : null
  if (!open) return -1
  let depth = 0
  for (let i = closePos; i >= 0; i--) {
    if (isEscaped(s, i)) continue
    const c = s[i]
    if (c === close) depth++
    else if (c === open) {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function getProtectedRanges(s: string): Array<[number, number]> {
  const ranges: Array<[number, number]> = []
  const re = /\\(text|mathrm|mbox|textit|textbf|textnormal)(?![A-Za-z])/g
  let m: RegExpExecArray | null
  while ((m = re.exec(s)) !== null) {
    let i = m.index + m[0].length
    while (i < s.length && /\s/.test(s[i])) i++
    if (s[i] !== '{') continue
    const j = findMatchingForward(s, i)
    if (j < 0) continue
    ranges.push([m.index, j + 1])
  }
  return ranges
}

function inProtected(pos: number, ranges: Array<[number, number]>): boolean {
  for (const [a, b] of ranges) {
    if (pos >= a && pos < b) return true
  }
  return false
}

function isAlphaNum(c: string): boolean {
  return /[A-Za-z0-9]/.test(c)
}

function readCommandForward(s: string, backslashPos: number): { name: string; end: number } {
  // s[backslashPos] === '\\'
  const n = s[backslashPos + 1]
  if (n === undefined) return { name: '', end: backslashPos + 1 }
  if (/[A-Za-z]/.test(n)) {
    let k = backslashPos + 1
    while (k < s.length && /[A-Za-z]/.test(s[k])) k++
    if (s[k] === '*') k++
    return { name: s.slice(backslashPos + 1, k), end: k }
  }
  return { name: n, end: backslashPos + 2 }
}

/** Find numerator start for the slash at slashPos. Returns null when invalid. */
function findNumeratorStart(
  s: string,
  slashPos: number,
  protectedRanges: Array<[number, number]>
): number | null {
  let i = slashPos - 1
  while (i >= 0 && (s[i] === ' ' || s[i] === '\t' || s[i] === '\n')) i--
  if (i < 0) return null
  if (inProtected(i, protectedRanges)) return null

  const endCheck = i
  // immediate break -> no numerator
  const c0 = s[endCheck]
  if (c0 === '/' || c0 === '=' || c0 === ',' || c0 === ';' || c0 === ':' || c0 === '<' || c0 === '>' || c0 === '+' || c0 === '-' || c0 === '(' || c0 === '[' || c0 === '{' || c0 === '&' || c0 === '$') {
    return null
  }
  // lone '.' or '\' right before the slash is not a numerator
  if (c0 === '.' || c0 === '\\') return null

  while (true) {
    while (i >= 0 && (s[i] === ' ' || s[i] === '\t' || s[i] === '\n')) i--
    if (i < 0) return 0
    if (inProtected(i, protectedRanges)) return trimStart(s, i + 1, slashPos)

    const c = s[i]
    // row break `\\` (two backslashes) is a hard boundary — check BEFORE escape logic
    if (c === '\\' && i - 1 >= 0 && s[i - 1] === '\\' && !isEscaped(s, i - 1)) {
      return trimStart(s, i + 1, slashPos)
    }
    if (isEscaped(s, i)) {
      // escaped char like \} \_ \% \, \; — treat backslash+char as one atom
      i -= 2
      continue
    }
    if (c === '}' || c === ')' || c === ']') {
      const j = findMatchingBackward(s, i)
      if (j < 0) return i + 1
      i = j - 1
      continue
    }
    if (c === '.') {
      // decimal point only when glued between digits (e.g. 1.22); otherwise
      // it's sentence punctuation and ends the numerator.
      const leftIsDigit = i - 1 >= 0 && /[0-9]/.test(s[i - 1])
      const rightIsDigit = i + 1 < slashPos && /[0-9]/.test(s[i + 1])
      if (leftIsDigit && rightIsDigit) {
        i--
        continue
      }
      return trimStart(s, i + 1, slashPos)
    }
    if (isAlphaNum(c) || c === '|' || c === '!' || c === '?' || c === "'") {
      let j = i
      // consume digits with decimals, or letters, backwards
      if (/[0-9]/.test(c)) {
        while (j >= 0 && /[0-9]/.test(s[j])) j--
        if (j >= 0 && s[j] === '.' && j - 1 >= 0 && /[0-9]/.test(s[j - 1])) {
          j-- // include '.'
          while (j >= 0 && /[0-9]/.test(s[j])) j--
        }
      } else {
        while (j >= 0 && (isAlphaNum(s[j]) || s[j] === '|' || s[j] === '!' || s[j] === '?' || s[j] === "'")) {
          // stop letter-run before an embedded decimal number boundary
          if (s[j] === '.' ) break
          j--
        }
      }
      // word is (j+1 .. i); check for leading backslash (a TeX command)
      if (j >= 0 && s[j] === '\\' && !isEscaped(s, j)) {
        const cmd = s.slice(j + 1, i + 1)
        if (BREAK_COMMANDS.has(cmd)) {
          return trimStart(s, i + 1, slashPos)
        }
        i = j - 1
        continue
      }
      i = j
      continue
    }
    if (c === '\\') {
      // lone backslash + non-letter that wasn't caught as escaped (e.g. `\ `
      // after space-skipping). Treat `\\` as boundary, other spacing as glue.
      const nxt = s[i + 1]
      if (nxt === '\\') {
        return trimStart(s, i + 2, slashPos)
      }
      i--
      continue
    }
    if (c === '^' || c === '_' ) {
      i--
      continue
    }
    if (c === '=' || c === ',' || c === ';' || c === ':' || c === '<' || c === '>' || c === '+' || c === '-' || c === '&' || c === '/' || c === '$') {
      return trimStart(s, i + 1, slashPos)
    }
    if (c === '(' || c === '[' || c === '{') {
      return trimStart(s, i + 1, slashPos)
    }
    // anything else (e.g. '#', '*', '"') — be conservative, stop here
    return trimStart(s, i + 1, slashPos)
  }
}

function trimStart(s: string, start: number, slashPos: number): number | null {
  let k = start
  while (k < slashPos && (s[k] === ' ' || s[k] === '\t' || s[k] === '\n')) k++
  if (k >= slashPos) return null
  return k
}

/** Find denominator end (exclusive) for slash at slashPos. Null when invalid. */
function findDenominatorEnd(
  s: string,
  slashPos: number,
  protectedRanges: Array<[number, number]>
): number | null {
  let i = slashPos + 1
  while (i < s.length && (s[i] === ' ' || s[i] === '\t' || s[i] === '\n')) i++
  if (i >= s.length) return null
  if (inProtected(i, protectedRanges)) return null
  const d0 = s[i]
  if (d0 === '/' || d0 === '=' || d0 === ',' || d0 === ';' || d0 === ':' || d0 === '<' || d0 === '>' || d0 === '+' || d0 === '-' || d0 === ')' || d0 === ']' || d0 === '}' || d0 === '&' || d0 === '$' || d0 === '.') {
    return null
  }
  if (d0 === '\\' && (s[i + 1] === '\\' || s[i + 1] === undefined)) return null

  while (true) {
    while (i < s.length && (s[i] === ' ' || s[i] === '\t' || s[i] === '\n')) {
      // peek: spaces are glue only if more denominator follows; trailing spaces end it
      let k = i
      while (k < s.length && (s[k] === ' ' || s[k] === '\t' || s[k] === '\n')) k++
      if (k >= s.length) return i
      // if next is a break/close, denominator ends before spaces
      const nc = s[k]
      if (
        nc === '=' || nc === ',' || nc === ';' || nc === ':' || nc === '<' || nc === '>' ||
        nc === '+' || nc === '-' || nc === ')' || nc === ']' || nc === '}' || nc === '&' ||
        nc === '$' || nc === '/' || nc === '.'
      ) {
        return i
      }
      if (nc === '\\') {
        const { name } = readCommandForward(s, k)
        if (BREAK_COMMANDS.has(name) || name === '\\' || name === '') return i
      }
      if (inProtected(k, protectedRanges)) return i
      i = k
    }
    if (i >= s.length) return i
    if (inProtected(i, protectedRanges)) return i
    const c = s[i]
    if (c === '{' || c === '(' || c === '[') {
      if (isEscaped(s, i)) return i
      const j = findMatchingForward(s, i)
      if (j < 0) return i
      i = j + 1
      continue
    }
    if (c === '\\') {
      const { name, end } = readCommandForward(s, i)
      if (name === '\\' || name === '') return i
      if (BREAK_COMMANDS.has(name)) return i
      // TeX spacing glue (`\ ` `\,` `\;` `\:` `\!` `~`) is only part of the
      // denominator when more denominator follows — otherwise it belongs to
      // the surrounding text (e.g. `\epsilon_0\ \text{...}` keeps its `\ `).
      if (name === ' ' || name === ',' || name === ';' || name === ':' || name === '!' || name === '~') {
        let k = end
        while (k < s.length && (s[k] === ' ' || s[k] === '\t' || s[k] === '\n')) k++
        if (k >= s.length) return i
        if (inProtected(k, protectedRanges)) return i
        const nk = s[k]
        if (
          nk === '=' || nk === ',' || nk === ';' || nk === ':' || nk === '<' || nk === '>' ||
          nk === '+' || nk === '-' || nk === ')' || nk === ']' || nk === '}' || nk === '&' ||
          nk === '$' || nk === '/' || nk === '.'
        ) {
          return i
        }
        if (nk === '\\') {
          const nxt = readCommandForward(s, k)
          if (BREAK_COMMANDS.has(nxt.name) || nxt.name === '\\' || nxt.name === '') return i
        }
      }
      i = end
      continue
    }
    if (/[0-9]/.test(c)) {
      let k = i
      while (k < s.length && /[0-9]/.test(s[k])) k++
      if (s[k] === '.' && /[0-9]/.test(s[k + 1] ?? '')) {
        k++
        while (k < s.length && /[0-9]/.test(s[k])) k++
      }
      i = k
      continue
    }
    if (/[A-Za-z]/.test(c)) {
      let k = i
      while (k < s.length && /[A-Za-z]/.test(s[k])) k++
      i = k
      continue
    }
    if (c === '|' || c === '!' || c === '?' || c === "'") {
      i++
      continue
    }
    if (c === '^' || c === '_') {
      i++
      while (i < s.length && (s[i] === ' ' || s[i] === '\t' || s[i] === '\n')) i++
      if (i >= s.length) return i
      if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
        if (isEscaped(s, i)) return i
        const j = findMatchingForward(s, i)
        if (j < 0) return i
        i = j + 1
        continue
      }
      if (s[i] === '\\') {
        const { end } = readCommandForward(s, i)
        i = end
        continue
      }
      // single token (letter, digit, |, etc.)
      if (i < s.length && s[i] !== ' ' && s[i] !== '\t' && s[i] !== '\n') i++
      continue
    }
    // break / closing / punctuation ends denominator
    return i
  }
}

/** Trim whitespace plus TeX spacing glue (`\,` `\;` `\:` `\!` `\ ` `~`) from both ends. */
function trimTex(str: string): string {
  let t = str.trim()
  let changed = true
  while (changed && t.length > 0) {
    changed = false
    // trailing lone backslash is the remnant of a trimmed `\ ` (backslash-space)
    if (t.endsWith('\\') && !t.endsWith('\\\\')) {
      t = t.slice(0, -1).trimEnd()
      changed = true
      continue
    }
    for (const glue of ['\\,', '\\;', '\\:', '\\!', '~', '\\ ']) {
      if (t.endsWith(glue)) {
        t = t.slice(0, -glue.length).trimEnd()
        changed = true
        break
      }
      if (t.startsWith(glue)) {
        t = t.slice(glue.length).trimStart()
        changed = true
        break
      }
    }
  }
  return t.trim()
}

function stripOuterParens(str: string): string {
  let t = trimTex(str)
  for (let iter = 0; iter < 2; iter++) {
    if (t.startsWith('\\left(') && t.endsWith('\\right)')) {
      const inner = t.slice('\\left('.length, t.length - '\\right)'.length)
      // verify balance: inner parens balanced
      let d = 0
      let ok = true
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === '\\') { i++; continue }
        if (inner[i] === '(') d++
        if (inner[i] === ')') { d--; if (d < 0) { ok = false; break } }
      }
      if (ok && d === 0) { t = inner.trim(); continue }
      return t
    }
    if (
      (t.startsWith('(') && t.endsWith(')')) ||
      (t.startsWith('[') && t.endsWith(']'))
    ) {
      const j = findMatchingForward(t, 0)
      if (j === t.length - 1) {
        t = t.slice(1, -1).trim()
        continue
      }
    }
    return t
  }
  return t
}

/**
 * Convert every `a/b` in a TeX string into `\frac{a}{b}`.
 * Idempotent: running twice changes nothing (no `/` remains in converted parts).
 */
export function prettifyTex(tex: string): string {
  if (!tex || !tex.includes('/')) return tex
  let s = tex
  // safety cap: one pass per slash, max 50 conversions per string
  for (let iter = 0; iter < 50; iter++) {
    const protectedRanges = getProtectedRanges(s)
    let slash = -1
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '/') continue
      if (i > 0 && s[i - 1] === '\\') continue // `\/` italic correction
      if (inProtected(i, protectedRanges)) continue
      slash = i
      break
    }
    if (slash < 0) break
    const numStart = findNumeratorStart(s, slash, protectedRanges)
    const denomEnd = findDenominatorEnd(s, slash, protectedRanges)
    if (numStart === null || denomEnd === null) {
      // unconvertible slash (e.g. `//`, `/2`, `a/`, inside text) — protect it
      // by skipping past it: mark as done by continuing search after it.
      // To avoid an infinite loop, replace nothing and look for the NEXT slash.
      // Simplest: temporarily blank this slash and keep searching.
      // We do that by recursing on the remainder instead.
      const restStart = slash + 1
      const head = s.slice(0, restStart)
      const tail = prettifyTex(s.slice(restStart))
      return head + tail
    }
    let num = trimTex(s.slice(numStart, slash))
    let denom = trimTex(s.slice(slash + 1, denomEnd))
    if (!num || !denom) {
      const head = s.slice(0, slash + 1)
      return head + prettifyTex(s.slice(slash + 1))
    }
    num = stripOuterParens(num)
    denom = stripOuterParens(denom)
    if (!num || !denom) {
      const head = s.slice(0, slash + 1)
      return head + prettifyTex(s.slice(slash + 1))
    }
    s = `${s.slice(0, numStart)}\\frac{${num}}{${denom}}${s.slice(denomEnd)}`
  }
  return s
}
