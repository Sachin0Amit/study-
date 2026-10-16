'use client'

/**
 * Compiler Lab — a real toy-language pipeline.
 * Lexer → recursive-descent parser → stack-machine codegen → VM execution,
 * each stage in its own panel. Errors carry line/column; the VM steps with a
 * highlighted instruction pointer, live stack and output console.
 */

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  Braces,
  ChevronRight,
  ListTree,
  Pause,
  Play,
  RotateCcw,
  StepForward,
  Terminal,
} from 'lucide-react'
import { RING } from './types'

/* ------------------------------------------------------------------ */
/*  Lexer                                                              */
/* ------------------------------------------------------------------ */

type TokType = 'let' | 'if' | 'else' | 'print' | 'ident' | 'int' | 'op' | 'eof'

interface Token {
  type: TokType
  value: string
  line: number
  col: number
}

interface SrcError {
  message: string
  line: number
  col: number
}

const KEYWORDS: TokType[] = ['let', 'if', 'else', 'print']
const TWO_CHAR_OPS = ['<=', '>=', '==', '!=']
const ONE_CHAR_OPS = '+-*/%(){};<>='

function lex(src: string): { tokens: Token[]; error: SrcError | null } {
  const tokens: Token[] = []
  let i = 0
  let line = 1
  let col = 1
  const push = (type: TokType, value: string) => tokens.push({ type, value, line, col })
  while (i < src.length) {
    const c = src[i]
    if (c === '\n') {
      i++
      line++
      col = 1
      continue
    }
    if (c === ' ' || c === '\t' || c === '\r') {
      i++
      col++
      continue
    }
    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') {
        i++
        col++
      }
      continue
    }
    const startCol = col
    if (/[0-9]/.test(c)) {
      let v = ''
      while (i < src.length && /[0-9]/.test(src[i])) {
        v += src[i]
        i++
        col++
      }
      if (i < src.length && /[A-Za-z_]/.test(src[i])) {
        return {
          tokens,
          error: { message: `A number cannot be followed by "${src[i]}" — split tokens with a space.`, line, col: startCol },
        }
      }
      push('int', v)
      continue
    }
    if (/[A-Za-z_]/.test(c)) {
      let v = ''
      while (i < src.length && /[A-Za-z0-9_]/.test(src[i])) {
        v += src[i]
        i++
        col++
      }
      push(KEYWORDS.includes(v as TokType) ? (v as TokType) : 'ident', v)
      continue
    }
    const two = src.slice(i, i + 2)
    if (TWO_CHAR_OPS.includes(two)) {
      push('op', two)
      i += 2
      col += 2
      continue
    }
    if (ONE_CHAR_OPS.includes(c)) {
      push('op', c)
      i++
      col++
      continue
    }
    return {
      tokens,
      error: { message: `Unexpected character "${c}".`, line, col: startCol },
    }
  }
  tokens.push({ type: 'eof', value: '<end>', line, col })
  return { tokens, error: null }
}

/* ------------------------------------------------------------------ */
/*  Parser (recursive descent)                                         */
/* ------------------------------------------------------------------ */

type Expr =
  | { kind: 'num'; v: number; line: number }
  | { kind: 'var'; name: string; line: number }
  | { kind: 'bin'; op: string; l: Expr; r: Expr; line: number }
  | { kind: 'neg'; e: Expr; line: number }

type Stmt =
  | { kind: 'let'; name: string; e: Expr; line: number }
  | { kind: 'print'; e: Expr; line: number }
  | { kind: 'if'; cond: Expr; then: Stmt[]; els: Stmt[]; line: number }

class ParseError extends Error {
  line: number
  col: number
  constructor(message: string, line: number, col: number) {
    super(message)
    this.line = line
    this.col = col
  }
}

function parse(tokens: Token[]): Stmt[] {
  let pos = 0
  const peek = () => tokens[pos]
  const next = () => tokens[pos++]
  const err = (msg: string, tok: Token) => new ParseError(msg, tok.line, tok.col)

  function expectOp(op: string) {
    const t = next()
    if (t.type !== 'op' || t.value !== op) {
      throw err(`Expected "${op}" but found "${t.value}".`, t)
    }
    return t
  }

  function expectIdent() {
    const t = next()
    if (t.type !== 'ident') {
      throw err(`Expected a name but found "${t.value}".`, t)
    }
    return t
  }

  function parsePrimary(): Expr {
    const t = next()
    if (t.type === 'int') return { kind: 'num', v: Number(t.value), line: t.line }
    if (t.type === 'ident') return { kind: 'var', name: t.value, line: t.line }
    if (t.type === 'op' && t.value === '(') {
      const e = parseExpr()
      expectOp(')')
      return e
    }
    if (t.type === 'op' && t.value === '-') return { kind: 'neg', e: parsePrimary(), line: t.line }
    throw err(`Expected a number, name or "(" but found "${t.value}".`, t)
  }

  function parseTerm(): Expr {
    let l = parsePrimary()
    while (peek().type === 'op' && ['*', '/', '%'].includes(peek().value)) {
      const op = next()
      const r = parsePrimary()
      l = { kind: 'bin', op: op.value, l, r, line: op.line }
    }
    return l
  }

  function parseAdd(): Expr {
    let l = parseTerm()
    while (peek().type === 'op' && ['+', '-'].includes(peek().value)) {
      const op = next()
      const r = parseTerm()
      l = { kind: 'bin', op: op.value, l, r, line: op.line }
    }
    return l
  }

  function parseExpr(): Expr {
    let l = parseAdd()
    while (peek().type === 'op' && ['<', '>', '<=', '>=', '==', '!='].includes(peek().value)) {
      const op = next()
      const r = parseAdd()
      l = { kind: 'bin', op: op.value, l, r, line: op.line }
    }
    return l
  }

  function parseBlock(): Stmt[] {
    expectOp('{')
    const body: Stmt[] = []
    while (!(peek().type === 'op' && peek().value === '}')) {
      if (peek().type === 'eof') throw err('Missing "}" to close the block.', peek())
      body.push(parseStmt())
    }
    expectOp('}')
    return body
  }

  function parseStmt(): Stmt {
    const t = peek()
    if (t.type === 'let') {
      next()
      const name = expectIdent()
      expectOp('=')
      const e = parseExpr()
      expectOp(';')
      return { kind: 'let', name: name.value, e, line: t.line }
    }
    if (t.type === 'print') {
      next()
      const e = parseExpr()
      expectOp(';')
      return { kind: 'print', e, line: t.line }
    }
    if (t.type === 'if') {
      next()
      const cond = parseExpr()
      const then = parseBlock()
      let els: Stmt[] = []
      if (peek().type === 'else') {
        next()
        els = parseBlock()
      }
      return { kind: 'if', cond, then, els, line: t.line }
    }
    throw err(`Expected let / print / if but found "${t.value}".`, t)
  }

  const program: Stmt[] = []
  while (peek().type !== 'eof') {
    program.push(parseStmt())
  }
  return program
}

/* ------------------------------------------------------------------ */
/*  Codegen (stack machine)                                            */
/* ------------------------------------------------------------------ */

interface Instr {
  op: 'PUSH' | 'LOAD' | 'STORE' | 'ADD' | 'SUB' | 'MUL' | 'DIV' | 'MOD' | 'NEG' | 'GT' | 'LT' | 'GE' | 'LE' | 'EQ' | 'NE' | 'JMPZ' | 'JMP' | 'LABEL' | 'PRINT'
  arg?: number
  name?: string
  label?: string
  line: number
}

function codegen(program: Stmt[]): Instr[] {
  const out: (Instr & { labelTarget?: string })[] = []
  let labelCount = 0
  const newLabel = () => `L${labelCount++}`

  const genExpr = (e: Expr) => {
    switch (e.kind) {
      case 'num':
        out.push({ op: 'PUSH', arg: e.v, line: e.line })
        break
      case 'var':
        out.push({ op: 'LOAD', name: e.name, line: e.line })
        break
      case 'neg':
        genExpr(e.e)
        out.push({ op: 'NEG', line: e.line })
        break
      case 'bin': {
        genExpr(e.l)
        genExpr(e.r)
        const map: Record<string, Instr['op']> = {
          '+': 'ADD',
          '-': 'SUB',
          '*': 'MUL',
          '/': 'DIV',
          '%': 'MOD',
          '>': 'GT',
          '<': 'LT',
          '>=': 'GE',
          '<=': 'LE',
          '==': 'EQ',
          '!=': 'NE',
        }
        out.push({ op: map[e.op], line: e.line })
        break
      }
    }
  }

  const genStmt = (s: Stmt) => {
    switch (s.kind) {
      case 'let':
        genExpr(s.e)
        out.push({ op: 'STORE', name: s.name, line: s.line })
        break
      case 'print':
        genExpr(s.e)
        out.push({ op: 'PRINT', line: s.line })
        break
      case 'if': {
        const elseLabel = newLabel()
        const endLabel = newLabel()
        genExpr(s.cond)
        out.push({ op: 'JMPZ', labelTarget: elseLabel, line: s.line })
        s.then.forEach(genStmt)
        out.push({ op: 'JMP', labelTarget: endLabel, line: s.line })
        out.push({ op: 'LABEL', labelTarget: elseLabel, line: s.line })
        s.els.forEach(genStmt)
        out.push({ op: 'LABEL', labelTarget: endLabel, line: s.line })
        break
      }
    }
  }

  program.forEach(genStmt)

  // resolve labels to instruction indices
  const labelIndex = new Map<string, number>()
  out.forEach((ins, i) => {
    if (ins.op === 'LABEL' && ins.labelTarget) labelIndex.set(ins.labelTarget, i)
  })
  return out.map((ins) => {
    if ((ins.op === 'JMPZ' || ins.op === 'JMP') && ins.labelTarget !== undefined) {
      return { ...ins, arg: labelIndex.get(ins.labelTarget) ?? 0 }
    }
    if (ins.op === 'LABEL' && ins.labelTarget !== undefined) {
      return { ...ins, label: ins.labelTarget }
    }
    return { ...ins }
  })
}

/* ------------------------------------------------------------------ */
/*  VM                                                                 */
/* ------------------------------------------------------------------ */

interface VmState {
  ip: number
  stack: number[]
  vars: Record<string, number>
  out: string[]
  halted: boolean
  error: string | null
}

function vmInit(): VmState {
  return { ip: 0, stack: [], vars: {}, out: [], halted: false, error: null }
}

function vmStep(s: VmState, instrs: Instr[]): VmState {
  if (s.halted || s.error) return s
  if (s.ip < 0 || s.ip >= instrs.length) {
    return { ...s, halted: true }
  }
  const ins = instrs[s.ip]
  const stack = [...s.stack]
  const vars = { ...s.vars }
  let ip = s.ip + 1
  let out = s.out
  let error: string | null = null
  const pop = () => {
    if (stack.length === 0) {
      error = `Stack underflow at instruction ${s.ip} (${ins.op}).`
      return 0
    }
    return stack.pop() as number
  }
  switch (ins.op) {
    case 'PUSH':
      stack.push(ins.arg ?? 0)
      break
    case 'LOAD': {
      const name = ins.name as string
      if (!(name in vars)) {
        error = `Undefined variable "${name}" at instruction ${s.ip}.`
      } else {
        stack.push(vars[name])
      }
      break
    }
    case 'STORE':
      vars[ins.name as string] = pop()
      break
    case 'ADD':
    case 'SUB':
    case 'MUL':
    case 'DIV':
    case 'MOD':
    case 'GT':
    case 'LT':
    case 'GE':
    case 'LE':
    case 'EQ':
    case 'NE': {
      const r = pop()
      const l = pop()
      if (error) break
      if ((ins.op === 'DIV' || ins.op === 'MOD') && r === 0) {
        error = `Division by zero at instruction ${s.ip}.`
        break
      }
      let v = 0
      switch (ins.op) {
        case 'ADD': v = l + r; break
        case 'SUB': v = l - r; break
        case 'MUL': v = l * r; break
        case 'DIV': v = Math.trunc(l / r); break
        case 'MOD': v = l % r; break
        case 'GT': v = l > r ? 1 : 0; break
        case 'LT': v = l < r ? 1 : 0; break
        case 'GE': v = l >= r ? 1 : 0; break
        case 'LE': v = l <= r ? 1 : 0; break
        case 'EQ': v = l === r ? 1 : 0; break
        case 'NE': v = l !== r ? 1 : 0; break
      }
      stack.push(v)
      break
    }
    case 'NEG':
      stack.push(-pop())
      break
    case 'JMPZ':
      if (pop() === 0) ip = ins.arg ?? 0
      break
    case 'JMP':
      ip = ins.arg ?? 0
      break
    case 'LABEL':
      break
    case 'PRINT': {
      const v = pop()
      out = [...out, String(v)]
      break
    }
  }
  if (error) return { ...s, stack, vars, error }
  if (ip >= instrs.length) return { ip: Math.min(ip, instrs.length), stack, vars, out, halted: true, error: null }
  return { ip, stack, vars, out, halted: false, error: null }
}

/* ------------------------------------------------------------------ */
/*  Presets                                                            */
/* ------------------------------------------------------------------ */

const PRESETS: { key: string; label: string; src: string }[] = [
  {
    key: 'basic',
    label: 'Bindings + if',
    src: `let x = 3;\nlet y = x * (2 + 1);\nif y > 5 {\n  print y;\n} else {\n  print 0;\n}`,
  },
  {
    key: 'fib',
    label: 'Fibonacci unrolled',
    src: `// the language has no loops yet — unroll them\nlet a = 0;\nlet b = 1;\nlet c = a + b;\nlet d = b + c;\nlet e = c + d;\nlet f = d + e;\nprint a;\nprint b;\nprint c;\nprint d;\nprint e;\nprint f;`,
  },
  {
    key: 'precedence',
    label: 'Precedence & negatives',
    src: `print 2 + 3 * 4;      // 14\nprint (2 + 3) * 4;    // 20\nprint -5 + 10;        // 5\nlet score = 42;\nif score >= 40 {\n  if score % 2 == 0 {\n    print 1;          // even and passing\n  } else {\n    print 0;\n  }\n}`,
  },
  {
    key: 'broken',
    label: 'Syntax error demo',
    src: `let x = 3\nlet y = x * (2 + ;\nprint y`,
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type Stage = { tokens: Token[]; error: SrcError | null; program: Stmt[] | null; instrs: Instr[] | null }

function ErrorCard({ error, stage }: { error: SrcError; stage: string }) {
  return (
    <div role="alert" className="rounded-2xl border border-rose-400/30 bg-rose-400/[0.07] p-4">
      <div className="flex items-center gap-2 text-sm font-bold text-rose-300">
        <AlertTriangle className="h-4 w-4" aria-hidden="true" /> {stage} error — line {error.line}, column {error.col}
      </div>
      <p className="mt-1.5 font-mono text-xs leading-relaxed text-rose-200/90">{error.message}</p>
    </div>
  )
}

function AstTree({ node, depth = 0 }: { node: Expr | Stmt; depth?: number }) {
  let label = ''
  let detail = ''
  let cls = 'text-foreground'
  const children: (Expr | Stmt)[] = []
  switch (node.kind) {
    case 'num':
      label = 'num'
      detail = String(node.v)
      cls = 'text-teal-300'
      break
    case 'var':
      label = 'var'
      detail = node.name
      cls = 'text-amber-300'
      break
    case 'neg':
      label = 'neg'
      cls = 'text-rose-300'
      children.push(node.e)
      break
    case 'bin':
      label = 'bin'
      detail = node.op
      cls = 'text-emerald-300'
      children.push(node.l, node.r)
      break
    case 'let':
      label = 'let'
      detail = node.name
      cls = 'text-emerald-200'
      children.push(node.e)
      break
    case 'print':
      label = 'print'
      cls = 'text-emerald-200'
      children.push(node.e)
      break
    case 'if':
      label = 'if'
      cls = 'text-emerald-200'
      children.push(node.cond, ...node.then, ...node.els)
      break
  }
  return (
    <div style={{ paddingLeft: depth * 14 }} className={depth > 0 ? 'border-l border-border/50 pl-2' : ''}>
      <div className="font-mono text-[11px] leading-5">
        <span className="text-muted-foreground/50">▸ </span>
        <span className={`font-bold ${cls}`}>{label}</span>
        {detail && <span className="ml-1.5 text-muted-foreground">{detail}</span>}
      </div>
      {children.map((c, i) => (
        <AstTree key={i} node={c} depth={depth + 1} />
      ))}
    </div>
  )
}

export function CompilerLab() {
  const [src, setSrc] = useState(PRESETS[0].src)
  const [vm, setVm] = useState<VmState>(vmInit)
  const [running, setRunning] = useState(false)

  const stage: Stage = useMemo(() => {
    const { tokens, error } = lex(src)
    if (error) return { tokens, error, program: null, instrs: null }
    try {
      const program = parse(tokens)
      const instrs = codegen(program)
      return { tokens, error: null, program, instrs }
    } catch (e) {
      const pe = e as ParseError
      return { tokens, error: { message: pe.message, line: pe.line, col: pe.col }, program: null, instrs: null }
    }
  }, [src])

  // program changes reset the VM (kept out of effects to avoid cascading renders)
  const updateSrc = (next: string) => {
    setSrc(next)
    setVm(vmInit())
    setRunning(false)
  }

  // auto-run — advances one instruction per tick while active
  const autoRunning = running && !vm.halted && !vm.error && !!stage.instrs
  useEffect(() => {
    if (!autoRunning || !stage.instrs) return
    const t = setTimeout(() => {
      const instrs = stage.instrs
      if (instrs) setVm((s) => vmStep(s, instrs))
    }, 260)
    return () => clearTimeout(t)
  }, [autoRunning, vm, stage.instrs])

  const step = () => {
    setRunning(false)
    const instrs = stage.instrs
    if (instrs) setVm((s) => vmStep(s, instrs))
  }
  const reset = () => {
    setRunning(false)
    setVm(vmInit())
  }
  const runAll = () => {
    if (!stage.instrs) return
    setRunning(false)
    let s = vmInit()
    let guard = 0
    while (!s.halted && !s.error && guard++ < 5000) s = vmStep(s, stage.instrs)
    setVm(s)
  }

  const ipc = vm.ip
  const cur = stage.instrs && !vm.halted ? stage.instrs[ipc] : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10">
          <Braces className="h-5 w-5 text-emerald-300" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-tight">Compiler pipeline — toy language</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Integer expressions, <span className="font-mono text-xs">let</span> bindings,{' '}
            <span className="font-mono text-xs">if/else</span> and{' '}
            <span className="font-mono text-xs">print</span> — lexed, parsed by recursive descent,
            compiled to stack-machine code and executed instruction by instruction.
          </p>
        </div>
      </div>

      {/* presets */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Programs
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            onClick={() => updateSrc(p.src)}
            className={`rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200 ${RING}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* source */}
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-sm font-bold">Source</span>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {src.split('\n').length} lines
            </span>
          </div>
          <textarea
            value={src}
            onChange={(e) => updateSrc(e.target.value)}
            spellCheck={false}
            aria-label="Program source code"
            rows={10}
            className="w-full resize-y rounded-xl border border-border bg-background p-3 font-mono text-[13px] leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          />
          {stage.error && <div className="mt-3"><ErrorCard error={stage.error} stage="Syntax" /></div>}
        </div>

        {/* lexer */}
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold">
              <ChevronRight className="h-4 w-4 text-teal-300" aria-hidden="true" /> 1 · Lexer
            </span>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {stage.tokens.length} tokens
            </span>
          </div>
          {stage.tokens.length > 0 ? (
            <div className="flex max-h-48 flex-wrap gap-1.5 overflow-y-auto">
              {stage.tokens.map((t, i) => (
                <span
                  key={i}
                  title={`${t.type} · line ${t.line} col ${t.col}`}
                  className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] ${
                    t.type === 'int'
                      ? 'border-teal-400/30 bg-teal-400/10 text-teal-200'
                      : t.type === 'ident'
                        ? 'border-amber-400/30 bg-amber-400/10 text-amber-200'
                        : KEYWORDS.includes(t.type as TokType)
                          ? 'border-emerald-400/30 bg-emerald-400/10 font-bold text-emerald-200'
                          : 'border-border/70 bg-background/60 text-foreground/80'
                  }`}
                >
                  {t.value}
                </span>
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-dashed border-border/70 bg-background/40 px-3 py-4 text-center text-xs text-muted-foreground">
              Tokens appear here as you type.
            </p>
          )}
        </div>

        {/* AST */}
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="mb-2.5 flex items-center gap-2 text-sm font-bold">
            <ListTree className="h-4 w-4 text-amber-300" aria-hidden="true" /> 2 · Parser (AST)
          </div>
          {stage.program ? (
            <div className="max-h-72 overflow-y-auto">
              {stage.program.map((s, i) => (
                <AstTree key={i} node={s} />
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-dashed border-border/70 bg-background/40 px-3 py-4 text-center text-xs text-muted-foreground">
              Fix the syntax error to see the syntax tree.
            </p>
          )}
        </div>

        {/* codegen + VM */}
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Terminal className="h-4 w-4 text-emerald-300" aria-hidden="true" /> 3 · Codegen → VM
            </span>
            {stage.instrs && (
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                {stage.instrs.length} instrs
              </span>
            )}
          </div>
          {stage.instrs ? (
            <>
              <div className="mb-3 flex flex-wrap items-center gap-1.5">
                <button
                  onClick={step}
                  disabled={vm.halted || !!vm.error}
                  className={`inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/40 bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-200 transition-all hover:bg-emerald-400/25 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
                >
                  <StepForward className="h-3.5 w-3.5" aria-hidden="true" /> Step
                </button>
                <button
                  onClick={() => setRunning((r) => !r)}
                  disabled={vm.halted || !!vm.error}
                  className={`inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
                >
                  {autoRunning ? (
                    <>
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" aria-hidden="true" /> Auto
                    </>
                  )}
                </button>
                <button
                  onClick={runAll}
                  disabled={vm.halted || !!vm.error}
                  className={`rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 ${RING}`}
                >
                  Run all
                </button>
                <button
                  onClick={reset}
                  aria-label="Reset virtual machine"
                  className={`rounded-lg border border-border/80 bg-background/60 p-1.5 text-muted-foreground transition-colors hover:text-foreground ${RING}`}
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground">
                  ip {Math.min(vm.ip, stage.instrs.length)}/{stage.instrs.length}
                  {vm.halted && !vm.error && <span className="ml-1.5 text-emerald-300">halted</span>}
                </span>
              </div>

              {vm.error && (
                <div className="mb-3">
                  <ErrorCard error={{ message: vm.error, line: cur?.line ?? 1, col: 1 }} stage="Runtime" />
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="max-h-64 overflow-y-auto rounded-lg border border-border/70">
                  <table className="w-full text-left">
                    <thead className="sticky top-0 bg-card">
                      <tr className="border-b border-border/70 text-[9px] uppercase tracking-wider text-muted-foreground">
                        <th className="px-2 py-1 font-semibold">ip</th>
                        <th className="px-2 py-1 font-semibold">instruction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stage.instrs.map((ins, i) => (
                        <tr
                          key={i}
                          className={`border-b border-border/30 font-mono text-[11px] last:border-0 ${
                            i === ipc && !vm.halted
                              ? 'bg-emerald-400/15 text-emerald-200'
                              : i < vm.ip
                                ? 'text-muted-foreground/50'
                                : ''
                          }`}
                        >
                          <td className="px-2 py-0.5 tabular-nums">{i}</td>
                          <td className="px-2 py-0.5">
                            {ins.op}
                            {ins.arg !== undefined && <span className="text-amber-300"> {ins.arg}</span>}
                            {ins.name && <span className="text-amber-300"> {ins.name}</span>}
                            {ins.label && <span className="text-teal-300"> {ins.label}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Stack (top →)
                    </div>
                    <div className="flex max-h-24 flex-wrap content-start justify-end gap-1 overflow-y-auto">
                      {vm.stack.length === 0 ? (
                        <span className="text-[11px] text-muted-foreground/50">empty</span>
                      ) : (
                        [...vm.stack].reverse().map((v, i) => (
                          <span
                            key={i}
                            className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] tabular-nums ${
                              i === 0
                                ? 'border-emerald-400/50 bg-emerald-400/15 text-emerald-200'
                                : 'border-border/70 bg-background/60'
                            }`}
                          >
                            {v}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Variables
                    </div>
                    <div className="max-h-20 overflow-y-auto font-mono text-[11px] leading-5">
                      {Object.keys(vm.vars).length === 0 ? (
                        <span className="text-muted-foreground/50">none yet</span>
                      ) : (
                        Object.entries(vm.vars).map(([k, v]) => (
                          <div key={k} className="flex justify-between gap-3 pr-1">
                            <span className="text-amber-300">{k}</span>
                            <span className="tabular-nums">{v}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Output
                    </div>
                    <div className="min-h-[52px] rounded-lg border border-border/70 bg-background/60 p-2 font-mono text-[12px] leading-5 tabular-nums">
                      {vm.out.length === 0 ? (
                        <span className="text-muted-foreground/50">— print something —</span>
                      ) : (
                        vm.out.map((o, i) => <div key={i}>{o}</div>)
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="rounded-lg border border-dashed border-border/70 bg-background/40 px-3 py-4 text-center text-xs text-muted-foreground">
              Codegen needs a syntactically valid program.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CompilerLab
