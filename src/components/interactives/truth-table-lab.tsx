'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, CircleAlert, Lightbulb, Rows3, Trash2, TriangleAlert, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/* ------------------------------------------------------------------ */
/*  Expression engine — recursive descent parser                       */
/* ------------------------------------------------------------------ */

type BinOp = 'and' | 'or' | 'xor' | 'imp' | 'bic'
interface VarNode { kind: 'var'; name: string }
interface NotNode { kind: 'not'; child: Node }
interface BinNode { kind: 'bin'; op: BinOp; left: Node; right: Node }
type Node = VarNode | NotNode | BinNode

class ParseError extends Error {}

const BIN_SYM: Record<BinOp, string> = { and: '∧', or: '∨', xor: '⊕', imp: '→', bic: '↔' }

function precOf(n: Node): number {
  if (n.kind === 'bin') return ({ and: 4, or: 3, xor: 2, imp: 1, bic: 0 })[n.op]
  if (n.kind === 'not') return 5
  return 6
}

/** Pretty-print with minimal parentheses. */
function pretty(n: Node): string {
  if (n.kind === 'var') return n.name
  if (n.kind === 'not') {
    const c = pretty(n.child)
    return '¬' + (precOf(n.child) < precOf(n) ? `(${c})` : c)
  }
  const p = precOf(n)
  const l = pretty(n.left)
  const r = pretty(n.right)
  const lp = precOf(n.left) < p ? `(${l})` : l
  const rp = precOf(n.right) <= p ? `(${r})` : r
  return `${lp} ${BIN_SYM[n.op]} ${rp}`
}

function evaluate(n: Node, env: Record<string, boolean>): boolean {
  if (n.kind === 'var') return env[n.name]
  if (n.kind === 'not') return !evaluate(n.child, env)
  const l = evaluate(n.left, env)
  const r = evaluate(n.right, env)
  switch (n.op) {
    case 'and': return l && r
    case 'or': return l || r
    case 'xor': return l !== r
    case 'imp': return !l || r
    case 'bic': return l === r
  }
}

/* ---------------------------- tokenizer ---------------------------- */

type Tok =
  | { t: 'var'; v: string }
  | { t: 'not' | 'and' | 'or' | 'xor' | 'imp' | 'bic' | 'lparen' | 'rparen' }

function describeTok(tk: Tok): string {
  switch (tk.t) {
    case 'var': return tk.v
    case 'not': return '¬'
    case 'and': return '∧'
    case 'or': return '∨'
    case 'xor': return '⊕'
    case 'imp': return '→'
    case 'bic': return '↔'
    case 'lparen': return '('
    case 'rparen': return ')'
  }
}

function tokenize(src: string): Tok[] {
  const s = src
    .replace(/¬/g, '~')
    .replace(/∧/g, '&')
    .replace(/·/g, '&')
    .replace(/∨/g, '|')
    .replace(/⊕/g, '^')
    .replace(/→/g, '->')
    .replace(/↔/g, '<->')
  const toks: Tok[] = []
  let i = 0
  while (i < s.length) {
    const c = s[i]
    if (/\s/.test(c)) { i++; continue }
    if (c === '~' || c === '!') { toks.push({ t: 'not' }); i++; continue }
    if (c === '&' || c === '.') {
      toks.push({ t: 'and' })
      i += (s[i + 1] === '&') ? 2 : 1
      continue
    }
    if (c === '|' || c === '+') {
      toks.push({ t: 'or' })
      i += (s[i + 1] === '|') ? 2 : 1
      continue
    }
    if (c === '^') { toks.push({ t: 'xor' }); i++; continue }
    if (c === '-') {
      if (s[i + 1] === '>') { toks.push({ t: 'imp' }); i += 2; continue }
      throw new ParseError(`Unexpected character '-' — did you mean '->' for implication?`)
    }
    if (c === '=') {
      if (s[i + 1] === '>') { toks.push({ t: 'imp' }); i += 2; continue }
      if (s[i + 1] === '=') { toks.push({ t: 'bic' }); i += 2; continue }
      throw new ParseError(`Unexpected character '=' — use '==' for the biconditional`)
    }
    if (c === '<') {
      if (s.slice(i, i + 3) === '<->') { toks.push({ t: 'bic' }); i += 3; continue }
      if (s.slice(i, i + 3) === '<=>') { toks.push({ t: 'bic' }); i += 3; continue }
      throw new ParseError(`Unexpected character '<' — write '<->' or '<=>' for the biconditional`)
    }
    if (c === '(') { toks.push({ t: 'lparen' }); i++; continue }
    if (c === ')') { toks.push({ t: 'rparen' }); i++; continue }
    if (/[pqrPQR]/.test(c)) { toks.push({ t: 'var', v: c.toLowerCase() }); i++; continue }
    if (/[a-zA-Z]/.test(c)) throw new ParseError(`Unknown variable '${c}' — only p, q and r are supported`)
    throw new ParseError(`Unexpected character '${c}'`)
  }
  return toks
}

/* ------------------------------ parser ----------------------------- */
/*  precedence:  ¬  >  ∧  >  ∨  >  ⊕  >  →  >  ↔                       */

function parse(toks: Tok[]): Node {
  let pos = 0
  const peek = (): Tok | undefined => toks[pos]

  function parsePrimary(): Node {
    const tk = peek()
    if (!tk) throw new ParseError('Unexpected end of expression — an operand is missing')
    if (tk.t === 'var') { pos++; return { kind: 'var', name: tk.v } }
    if (tk.t === 'lparen') {
      pos++
      const inner = parseBic()
      const close = peek()
      if (!close || close.t !== 'rparen') throw new ParseError('Unbalanced parenthesis — a closing ")" is missing')
      pos++
      return inner
    }
    if (tk.t === 'rparen') throw new ParseError('Unexpected ")" — nothing to close here')
    throw new ParseError(`Unexpected token '${describeTok(tk)}' — expected a variable, ¬ or "("`)
  }

  function parseUnary(): Node {
    if (peek()?.t === 'not') { pos++; return { kind: 'not', child: parseUnary() } }
    return parsePrimary()
  }

  function parseAnd(): Node {
    let left = parseUnary()
    while (peek()?.t === 'and') { pos++; left = { kind: 'bin', op: 'and', left, right: parseUnary() } }
    return left
  }

  function parseOr(): Node {
    let left = parseAnd()
    while (peek()?.t === 'or') { pos++; left = { kind: 'bin', op: 'or', left, right: parseAnd() } }
    return left
  }

  function parseXor(): Node {
    let left = parseOr()
    while (peek()?.t === 'xor') { pos++; left = { kind: 'bin', op: 'xor', left, right: parseOr() } }
    return left
  }

  function parseImp(): Node {
    let left = parseXor()
    while (peek()?.t === 'imp') { pos++; left = { kind: 'bin', op: 'imp', left, right: parseXor() } }
    return left
  }

  function parseBic(): Node {
    let left = parseImp()
    while (peek()?.t === 'bic') { pos++; left = { kind: 'bin', op: 'bic', left, right: parseImp() } }
    return left
  }

  const root = parseBic()
  if (pos < toks.length) {
    throw new ParseError(`Unexpected token '${describeTok(toks[pos])}' — check your connectives`)
  }
  return root
}

/* --------------------------- table builder -------------------------- */

interface SubFormula { node: Node; s: string }

function collectVars(n: Node, set: Set<string>): void {
  if (n.kind === 'var') set.add(n.name)
  else if (n.kind === 'not') collectVars(n.child, set)
  else { collectVars(n.left, set); collectVars(n.right, set) }
}

function collectSubs(n: Node, acc: SubFormula[]): void {
  if (n.kind === 'var') return
  if (n.kind === 'not') collectSubs(n.child, acc)
  else { collectSubs(n.left, acc); collectSubs(n.right, acc) }
  const s = pretty(n)
  if (!acc.some((x) => x.s === s)) acc.push({ node: n, s })
}

function treeLines(n: Node): string[] {
  const label = (x: Node): string => (x.kind === 'var' ? x.name : x.kind === 'not' ? '¬' : BIN_SYM[x.op])
  const lines: string[] = [label(n)]
  const walk = (node: Node, prefix: string): void => {
    const kids: Node[] = node.kind === 'var' ? [] : node.kind === 'not' ? [node.child] : [node.left, node.right]
    kids.forEach((k, idx) => {
      const last = idx === kids.length - 1
      lines.push(prefix + (last ? '└─ ' : '├─ ') + label(k))
      walk(k, prefix + (last ? '   ' : '│  '))
    })
  }
  walk(n, '')
  return lines
}

type Verdict = 'tautology' | 'contradiction' | 'contingency'

interface ParsedOk {
  ok: true
  root: Node
  vars: string[]
  subs: SubFormula[]
  rows: boolean[][]
  finalCol: number
  verdict: Verdict
  tree: string[]
}

function buildTable(root: Node): ParsedOk {
  const used = new Set<string>()
  collectVars(root, used)
  const vars = ['p', 'q', 'r'].filter((v) => used.has(v))
  const subs: SubFormula[] = []
  collectSubs(root, subs)

  const rows: boolean[][] = []
  for (let i = 0; i < 1 << vars.length; i++) {
    const env: Record<string, boolean> = {}
    vars.forEach((v, j) => { env[v] = ((i >> (vars.length - 1 - j)) & 1) === 0 })
    rows.push([...vars.map((v) => env[v]), ...subs.map((sb) => evaluate(sb.node, env))])
  }

  const finalCol = root.kind === 'var' ? vars.indexOf(root.name) : vars.length + subs.length - 1
  const finalVals = rows.map((r) => r[finalCol])
  const verdict: Verdict = finalVals.every(Boolean)
    ? 'tautology'
    : finalVals.every((v) => !v)
      ? 'contradiction'
      : 'contingency'

  return { ok: true, root, vars, subs, rows, finalCol, verdict, tree: treeLines(root) }
}

/* ------------------------------------------------------------------ */
/*  UI                                                                 */
/* ------------------------------------------------------------------ */

const EXAMPLES = [
  { label: '(p ∧ q) → p', expr: '(p ∧ q) → p' },
  { label: '(p ∨ q) ∧ ¬p', expr: '(p ∨ q) ∧ ¬p' },
  { label: 'p ⊕ q ⊕ r', expr: 'p ⊕ q ⊕ r' },
  { label: '(p → q) ↔ (¬p ∨ q)', expr: '(p → q) ↔ (¬p ∨ q)' },
]

const SYNTAX: Array<[string, string, string]> = [
  ['¬', 'NOT', '~  !'],
  ['∧', 'AND', '&  &&  .'],
  ['∨', 'OR', '|  ||  +'],
  ['⊕', 'XOR', '^'],
  ['→', 'IMPLIES', '->  =>'],
  ['↔', 'IFF', '<->  <=>  =='],
]

const VERDICT_STYLE: Record<Verdict, { chip: string; icon: typeof Check; sentence: (k: number) => string }> = {
  tautology: {
    chip: 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300',
    icon: Check,
    sentence: (k) => `All ${k} valuations make this true — the formula is logically valid.`,
  },
  contradiction: {
    chip: 'border-rose-500/50 bg-rose-500/15 text-rose-300',
    icon: X,
    sentence: (k) => `None of the ${k} valuations makes this true — it can never be satisfied.`,
  },
  contingency: {
    chip: 'border-amber-500/50 bg-amber-500/15 text-amber-300',
    icon: CircleAlert,
    sentence: (k) => `Some of the ${k} valuations make it true, others false — satisfiable but not valid.`,
  },
}

export default function TruthTableLab() {
  const [expr, setExpr] = useState('(p ∨ q) ∧ ¬p')
  const [applied, setApplied] = useState('(p ∨ q) ∧ ¬p')

  // debounce so the table does not re-animate on every keystroke
  useEffect(() => {
    const t = setTimeout(() => setApplied(expr), 350)
    return () => clearTimeout(t)
  }, [expr])

  const result = useMemo<{ ok: true; data: ParsedOk } | { ok: false; error: string } | { ok: 'empty' }>(() => {
    const trimmed = applied.trim()
    if (!trimmed) return { ok: 'empty' }
    try {
      return { ok: true, data: buildTable(parse(tokenize(trimmed))) }
    } catch (e) {
      return { ok: false, error: e instanceof ParseError ? e.message : 'Could not parse expression' }
    }
  }, [applied])

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* heading */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
          <Rows3 className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Truth Table Lab</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Type any propositional formula over <span className="font-mono">p, q, r</span> and watch its full truth
            table — with every sub-formula — build itself row by row.
          </p>
        </div>
      </div>

      {/* input */}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Input
          value={expr}
          onChange={(e) => setExpr(e.target.value.slice(0, 120))}
          placeholder="e.g. (p ∧ q) → r"
          className="h-10 flex-1 border-border bg-background font-mono text-sm"
          aria-label="Logic expression"
          spellCheck={false}
        />
        <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" onClick={() => setExpr('')} aria-label="Clear input">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* examples + legend */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-xs font-medium text-muted-foreground">Examples:</span>
        {EXAMPLES.map((ex) => (
          <button
            key={ex.expr}
            onClick={() => setExpr(ex.expr)}
            className="rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-foreground/90 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 rounded-lg border border-border/70 bg-muted/20 px-3 py-2">
        {SYNTAX.map(([sym, name, ascii]) => (
          <span key={name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="font-mono text-sm text-emerald-400">{sym}</span>
            <span className="font-medium">{name}</span>
            <span className="font-mono text-[10px] text-muted-foreground/70">{ascii}</span>
          </span>
        ))}
      </div>

      {/* table / error */}
      <div className="mt-4">
        <AnimatePresence mode="wait">
          {result.ok === 'empty' && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border/70 text-sm text-muted-foreground"
            >
              Type an expression above — or tap an example — to build its truth table.
            </motion.div>
          )}

          {result.ok === false && (
            <motion.div
              key={`err-${result.error}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2.5 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3"
            >
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-medium text-rose-300">Parse error</p>
                <p className="mt-0.5 font-mono text-xs text-rose-300/80">{result.error}</p>
              </div>
            </motion.div>
          )}

          {result.ok === true && (
            <motion.div key={`tbl-${applied}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <TableBlock data={result.data} exprKey={applied} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* hint */}
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span>
          <span className="font-semibold text-emerald-400">Try this: </span>
          enter <span className="font-mono text-foreground">(p → q) ↔ (¬p ∨ q)</span> and watch the verdict flip to
          TAUTOLOGY — then delete the <span className="font-mono text-foreground">¬</span> and see what changes.
        </span>
      </div>
    </div>
  )
}

function TableBlock({ data, exprKey }: { data: ParsedOk; exprKey: string }) {
  const v = VERDICT_STYLE[data.verdict]
  const VerdictIcon = v.icon
  const headers = [...data.vars, ...data.subs.map((s) => s.s)]
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="rounded-lg border border-border bg-muted/40 px-2.5 py-1 font-mono text-sm text-foreground">
            {pretty(data.root)}
          </span>
          <span className="rounded-md border border-border/60 bg-muted/20 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {data.vars.length === 0 ? 'no variables — constant' : `2${['⁰', '¹', '²', '³'][data.vars.length]} = ${1 << data.vars.length} valuations`}
          </span>
        </div>
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold tracking-wide uppercase ${v.chip}`}>
          <VerdictIcon className="h-3.5 w-3.5" />
          {data.verdict}
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-background/40">
        <table className="w-full min-w-[320px] border-collapse text-center font-mono text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              {headers.map((h, ci) => (
                <th
                  key={`${h}-${ci}`}
                  className={`whitespace-nowrap px-3 py-2 font-medium ${
                    ci === data.finalCol ? 'text-emerald-300' : 'text-muted-foreground'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody key={exprKey}>
            {data.rows.map((row, ri) => (
              <motion.tr
                key={ri}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * ri, duration: 0.28, ease: 'easeOut' }}
                className="border-b border-border/40 transition-colors last:border-0 hover:bg-muted/20"
              >
                {row.map((val, ci) => (
                  <td
                    key={ci}
                    className={`px-3 py-1.5 ${
                      ci === data.finalCol
                        ? val
                          ? 'bg-emerald-500/10 font-bold text-emerald-300'
                          : 'bg-rose-500/10 font-bold text-rose-300'
                        : val
                          ? 'font-semibold text-foreground'
                          : 'text-muted-foreground'
                    }`}
                  >
                    {val ? 'T' : 'F'}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{v.sentence(1 << Math.max(0, data.vars.length))}</p>

      {data.vars.length <= 3 && (
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Parse tree</p>
          <pre className="mt-2 overflow-x-auto font-mono text-xs leading-relaxed text-foreground/90">
            {data.tree.join('\n')}
          </pre>
        </div>
      )}
    </div>
  )
}
