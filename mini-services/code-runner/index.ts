/**
 * StudyVerse code-runner — real compile-and-run service.
 *
 * Powers the language-aware code playgrounds in the StudyVerse library:
 *   C (gcc) · C++ (g++) · Java (OpenJDK 21 single-file) · TypeScript (bun)
 *   Python (CPython 3.13) · SQL (bun:sqlite, in-memory, pre-seeded demo schema)
 *
 * POST /run   { lang: 'c'|'cpp'|'java'|'ts'|'python'|'sql', code: string }
 * GET  /health
 *
 * Every run happens in its own temp directory which is removed afterwards.
 * Wall-clock timeouts and output caps keep runaway programs from hanging the box.
 */

import { existsSync } from 'node:fs'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Database } from 'bun:sqlite'

const PORT = 3020

/* ------------------------------------------------------------------ */
/*  Limits                                                             */
/* ------------------------------------------------------------------ */

const MAX_CODE_BYTES = 128 * 1024 // 128 KB of source
const MAX_OUT_CHARS = 64 * 1024 // per stream
const COMPILE_TIMEOUT_MS = 12_000
const RUN_TIMEOUT_MS = 8_000
const JAVA_TIMEOUT_MS = 30_000 // javac-ish launch + JVM start + run
const SQL_MAX_ROWS = 50

/* ------------------------------------------------------------------ */
/*  Toolchain resolution                                               */
/* ------------------------------------------------------------------ */

const PY_CANDIDATES = ['/usr/bin/python3', '/home/z/.venv/bin/python3', 'python3']
const PYTHON_BIN = PY_CANDIDATES.find((p) => p === 'python3' || existsSync(p)) ?? 'python3'

const RUNNER_LABEL: Record<string, string> = {
  c: 'gcc (Debian 14.2)',
  cpp: 'g++ (Debian 14.2)',
  java: 'OpenJDK 21 — single-file launch',
  ts: 'bun (TypeScript, native)',
  python: `CPython 3.13 (${PYTHON_BIN})`,
  sql: 'SQLite via bun:sqlite (in-memory)',
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function cap(s: string): string {
  if (s.length <= MAX_OUT_CHARS) return s
  return s.slice(0, MAX_OUT_CHARS) + '\n… [output truncated]'
}

interface SpawnResult {
  stdout: string
  stderr: string
  exitCode: number | null
  signalCode: string | number | null
  timedOut: boolean
}

async function spawnStep(cmd: string[], cwd: string, timeoutMs: number): Promise<SpawnResult> {
  const proc = Bun.spawn({
    cmd,
    cwd,
    stdin: 'ignore',
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: timeoutMs,
    killSignal: 'SIGKILL',
  })
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ])
  const exitCode = await proc.exited
  return {
    stdout,
    stderr,
    exitCode,
    signalCode: proc.signalCode,
    timedOut: exitCode === null || proc.signalCode === 'SIGKILL' || proc.signalCode === 'SIGTERM',
  }
}

/* ------------------------------------------------------------------ */
/*  SQL — seeded demo schema + statement runner                        */
/* ------------------------------------------------------------------ */

const SEED_SQL = `
CREATE TABLE departments (
  dept_id  INTEGER PRIMARY KEY,
  name     TEXT NOT NULL,
  building TEXT
);
CREATE TABLE employees (
  emp_id   INTEGER PRIMARY KEY,
  name     TEXT NOT NULL,
  dept_id  INTEGER REFERENCES departments(dept_id),
  job      TEXT,
  salary   REAL,
  hired    TEXT
);
CREATE TABLE projects (
  proj_id  INTEGER PRIMARY KEY,
  title    TEXT NOT NULL,
  dept_id  INTEGER REFERENCES departments(dept_id),
  budget   REAL,
  status   TEXT
);
INSERT INTO departments (dept_id, name, building) VALUES
  (1, 'Engineering',   'Turing Hall'),
  (2, 'Research',      'Curie Wing'),
  (3, 'Design',        'Bauhaus Annex'),
  (4, 'Operations',    'Dock 4'),
  (5, 'People',        'North Court');
INSERT INTO employees (emp_id, name, dept_id, job, salary, hired) VALUES
  (1,  'Ada Lovelace',   1, 'Principal Engineer', 148000, '2019-03-11'),
  (2,  'Grace Hopper',   1, 'Staff Engineer',      132000, '2020-07-01'),
  (3,  'Alan Turing',    2, 'Research Lead',       141000, '2018-01-22'),
  (4,  'Katherine J.',   2, 'Data Scientist',      118500, '2021-09-14'),
  (5,  'Edsger Dijkstra',1, 'Systems Engineer',    126000, '2020-11-30'),
  (6,  'Barbara Liskov', 1, 'Architect',           139000, '2017-05-08'),
  (7,  'Annie Easley',   4, 'Ops Engineer',         98700, '2022-02-17'),
  (8,  'Miep Bosscha',   3, 'Product Designer',    102400, '2021-06-03'),
  (9,  'Chieko Asakawa', 3, 'UX Researcher',        96300, '2022-08-29'),
  (10, 'Radia Perlman',  1, 'Network Engineer',    127800, '2019-10-21'),
  (11, 'Mary Jackson',   5, 'HR Partner',           84900, '2023-01-09'),
  (12, 'Vikram Sarabhai',2, 'Research Engineer',   111200, '2020-04-02');
INSERT INTO projects (proj_id, title, dept_id, budget, status) VALUES
  (101, 'Compiler Toolkit',   1, 480000.0, 'active'),
  (102, 'Orbit Simulator',    2, 650000.0, 'active'),
  (103, 'Design System 2.0',  3, 210000.0, 'planning'),
  (104, 'Data Lake Refresh',  2, 305000.0, 'active'),
  (105, 'Campus Navigation',  1, 150000.0, 'paused'),
  (106, 'Hiring Portal',      5,  85000.0, 'planning');
`

/** Split a SQL script into statements, respecting quotes and comments. */
function splitSql(script: string): string[] {
  const stmts: string[] = []
  let cur = ''
  let i = 0
  const n = script.length
  let inSingle = false
  let inDouble = false
  let inLine = false
  let inBlock = false
  while (i < n) {
    const ch = script[i]
    const next = script[i + 1] ?? ''
    if (inLine) {
      cur += ch
      if (ch === '\n') inLine = false
    } else if (inBlock) {
      cur += ch
      if (ch === '*' && next === '/') {
        cur += next
        i += 2
        inBlock = false
        continue
      }
    } else if (inSingle) {
      cur += ch
      if (ch === "'" && next === "'") {
        cur += next
        i += 2
        continue
      }
      if (ch === "'") inSingle = false
    } else if (inDouble) {
      cur += ch
      if (ch === '"') inDouble = false
    } else {
      if (ch === '-' && next === '-') {
        inLine = true
        cur += ch
      } else if (ch === '/' && next === '*') {
        inBlock = true
        cur += ch
      } else if (ch === "'") {
        inSingle = true
        cur += ch
      } else if (ch === '"') {
        inDouble = true
        cur += ch
      } else if (ch === ';') {
        stmts.push(cur)
        cur = ''
      } else {
        cur += ch
      }
    }
    i += 1
  }
  if (cur.trim()) stmts.push(cur)
  return stmts.map((s) => s.trim()).filter(Boolean)
}

/** Strip leading whitespace and comments so statement type detection works. */
function stripLeadingComments(stmt: string): string {
  let s = stmt
  let changed = true
  while (changed) {
    changed = false
    s = s.replace(/^\s+/, '')
    const line = /^--.*(\n|$)/.exec(s)
    if (line) {
      s = s.slice(line[0].length)
      changed = true
    }
    const block = /^\/\*[\s\S]*?\*\//.exec(s)
    if (block) {
      s = s.slice(block[0].length)
      changed = true
    }
  }
  return s
}

function formatCell(v: unknown, width: number): string {
  let s: string
  if (v === null || v === undefined) s = 'NULL'
  else if (typeof v === 'number') s = Number.isInteger(v) ? String(v) : String(Number(v.toFixed(6)))
  else s = String(v)
  if (s.length > 24) s = s.slice(0, 23) + '…'
  const isNum = v !== null && v !== undefined && (typeof v === 'number' || /^-?[\d.,]+$/.test(s))
  return isNum ? s.padStart(width) : s.padEnd(width)
}

function formatTable(columns: string[], rows: Record<string, unknown>[]): string {
  if (!columns.length) return ''
  const widths = columns.map((c) => {
    const dataW = Math.min(
      24,
      Math.max(...rows.map((r) => String(r[c] ?? 'NULL').length), 3),
    )
    return Math.max(c.length, dataW)
  })
  const head = columns.map((c, i) => (isNaN(+c) ? c.padEnd(widths[i]) : c.padStart(widths[i]))).join(' │ ')
  const bar = widths.map((w) => '─'.repeat(w)).join('─┼─')
  const shown = rows.slice(0, SQL_MAX_ROWS)
  const body = shown
    .map((r) => columns.map((c, i) => formatCell(r[c], widths[i])).join(' │ '))
    .join('\n')
  const more =
    rows.length > SQL_MAX_ROWS ? `\n… ${rows.length - SQL_MAX_ROWS} more rows (showing first ${SQL_MAX_ROWS})` : ''
  return `${head}\n${bar}\n${body}${more}`
}

interface SqlRun {
  stdout: string
  stderr: string
}

function runSql(code: string): SqlRun {
  const db = new Database(':memory:')
  const out: string[] = []
  const err: string[] = []
  try {
    db.exec(SEED_SQL)
    const stmts = splitSql(code)
    if (!stmts.length) {
      out.push('-- nothing to run: write a SQL statement and press Run.')
    }
    for (const raw of stmts) {
      const stmt = stripLeadingComments(raw)
      if (!stmt) continue
      const isQuery = /^(select|with|values|pragma|explain)\b/i.test(stmt)
      try {
        if (isQuery) {
          const rows = db.query(stmt).all() as Record<string, unknown>[]
          const columns = rows.length ? Object.keys(rows[0]) : []
          out.push(columns.length ? formatTable(columns, rows) : '-- ok: 0 rows')
        } else {
          const res = db.run(stmt)
          const what = /^create\b/i.test(stmt)
            ? 'created'
            : /^insert\b/i.test(stmt)
              ? `${res.changes} row(s) inserted`
              : /^update\b/i.test(stmt)
                ? `${res.changes} row(s) updated`
                : /^delete\b/i.test(stmt)
                  ? `${res.changes} row(s) deleted`
                  : 'ok'
          out.push(`-- ${what}`)
        }
      } catch (e) {
        err.push(`sqlite: ${(e as Error).message}\n  in: ${stmt.slice(0, 120)}`)
      }
    }
  } finally {
    db.close()
  }
  return { stdout: out.join('\n'), stderr: err.join('\n') }
}

/* ------------------------------------------------------------------ */
/*  Per-language execution                                             */
/* ------------------------------------------------------------------ */

interface RunOutcome {
  ok: boolean
  stage: 'compile' | 'run' | 'sql' | 'rejected'
  exitCode: number | null
  stdout: string
  stderr: string
  compileStderr: string
  timedOut: boolean
  durationMs: number
  runner: string
}

async function runCompiled(
  lang: 'c' | 'cpp',
  code: string,
): Promise<RunOutcome> {
  const dir = mkdtempSync(join(tmpdir(), 'sv-runner-'))
  const t0 = performance.now()
  try {
    const file = lang === 'c' ? 'main.c' : 'main.cpp'
    writeFileSync(join(dir, file), code)
    const compiler = lang === 'c' ? 'gcc' : 'g++'
    const std = lang === 'c' ? '-std=c17' : '-std=c++20'
    const compiled = await spawnStep([compiler, file, '-o', 'prog', std, '-O1'], dir, COMPILE_TIMEOUT_MS)
    if (compiled.exitCode !== 0) {
      return {
        ok: false,
        stage: 'compile',
        exitCode: compiled.exitCode,
        stdout: '',
        stderr: '',
        compileStderr: cap(compiled.stderr || compiled.stdout || `${compiler} failed`),
        timedOut: compiled.timedOut,
        durationMs: performance.now() - t0,
        runner: RUNNER_LABEL[lang],
      }
    }
    const ran = await spawnStep(['./prog'], dir, RUN_TIMEOUT_MS)
    return {
      ok: ran.exitCode === 0,
      stage: 'run',
      exitCode: ran.exitCode,
      stdout: cap(ran.stdout),
      stderr: cap(ran.stderr),
      compileStderr: '',
      timedOut: ran.timedOut,
      durationMs: performance.now() - t0,
      runner: RUNNER_LABEL[lang],
    }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

async function runJava(code: string): Promise<RunOutcome> {
  const dir = mkdtempSync(join(tmpdir(), 'sv-runner-'))
  const t0 = performance.now()
  try {
    writeFileSync(join(dir, 'Main.java'), code)
    // JDK 11+ single-file source launch: compiles in memory, then runs
    // the first top-level class. stderr carries compile diagnostics.
    const ran = await spawnStep(['java', 'Main.java'], dir, JAVA_TIMEOUT_MS)
    const compileFailed = /error:|warning:|\bexpected\b|illegal|cannot find symbol|class .* is public/i.test(ran.stderr)
        && ran.exitCode !== 0
        && ran.stdout === ''
    return {
      ok: ran.exitCode === 0,
      stage: compileFailed ? 'compile' : 'run',
      exitCode: ran.exitCode,
      stdout: cap(ran.stdout),
      stderr: cap(ran.stderr),
      compileStderr: compileFailed ? cap(ran.stderr) : '',
      timedOut: ran.timedOut,
      durationMs: performance.now() - t0,
      runner: RUNNER_LABEL.java,
    }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

async function runTs(code: string): Promise<RunOutcome> {
  const dir = mkdtempSync(join(tmpdir(), 'sv-runner-'))
  const t0 = performance.now()
  try {
    writeFileSync(join(dir, 'main.ts'), code)
    const ran = await spawnStep([process.execPath, 'main.ts'], dir, RUN_TIMEOUT_MS)
    return {
      ok: ran.exitCode === 0,
      stage: 'run',
      exitCode: ran.exitCode,
      stdout: cap(ran.stdout),
      stderr: cap(ran.stderr),
      compileStderr: '',
      timedOut: ran.timedOut,
      durationMs: performance.now() - t0,
      runner: RUNNER_LABEL.ts,
    }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

async function runPython(code: string): Promise<RunOutcome> {
  const dir = mkdtempSync(join(tmpdir(), 'sv-runner-'))
  const t0 = performance.now()
  try {
    writeFileSync(join(dir, 'main.py'), code)
    const ran = await spawnStep([PYTHON_BIN, '-I', 'main.py'], dir, RUN_TIMEOUT_MS)
    return {
      ok: ran.exitCode === 0,
      stage: 'run',
      exitCode: ran.exitCode,
      stdout: cap(ran.stdout),
      stderr: cap(ran.stderr),
      compileStderr: '',
      timedOut: ran.timedOut,
      durationMs: performance.now() - t0,
      runner: RUNNER_LABEL.python,
    }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

function sqlOutcome(code: string): RunOutcome {
  const t0 = performance.now()
  const { stdout, stderr } = runSql(code)
  return {
    ok: stderr === '',
    stage: 'sql',
    exitCode: stderr === '' ? 0 : 1,
    stdout,
    stderr,
    compileStderr: '',
    timedOut: false,
    durationMs: performance.now() - t0,
    runner: RUNNER_LABEL.sql,
  }
}

/* ------------------------------------------------------------------ */
/*  Concurrency guard — compiled runs can be memory-hungry (JVM), and   */
/*  the box also hosts the Next.js dev server. Max 2 in flight.        */
/* ------------------------------------------------------------------ */

let inFlight = 0
const waiters: (() => void)[] = []
const MAX_CONCURRENT = 2

async function withSlot<T>(fn: () => Promise<T>): Promise<T> {
  while (inFlight >= MAX_CONCURRENT) {
    await new Promise<void>((resolve) => waiters.push(resolve))
  }
  inFlight++
  try {
    return await fn()
  } finally {
    inFlight--
    waiters.shift()?.()
  }
}

/* ------------------------------------------------------------------ */
/*  HTTP server                                                        */
/* ------------------------------------------------------------------ */

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors },
  })
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)

    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })

    if (url.pathname === '/health') {
      return json({ ok: true, service: 'code-runner', port: PORT, langs: Object.keys(RUNNER_LABEL) })
    }

    if (url.pathname === '/' && req.method === 'GET') {
      return json({
        service: 'StudyVerse code-runner',
        hint: 'POST /run with { lang, code } — langs: c, cpp, java, ts, python, sql',
      })
    }

    if (url.pathname === '/run' && req.method === 'POST') {
      let body: { lang?: string; code?: string }
      try {
        body = await req.json()
      } catch {
        return json({ error: 'invalid JSON body' }, 400)
      }
      const lang = body.lang ?? ''
      const code = body.code ?? ''
      if (!(lang in RUNNER_LABEL)) {
        return json({ error: `unsupported lang '${lang}'` }, 400)
      }
      if (Buffer.byteLength(code, 'utf8') > MAX_CODE_BYTES) {
        return json({ error: `source too large (>${MAX_CODE_BYTES} bytes)` }, 413)
      }
      try {
        const outcome = await withSlot(async () => {
          if (lang === 'c' || lang === 'cpp') return await runCompiled(lang, code)
          if (lang === 'java') return await runJava(code)
          if (lang === 'ts') return await runTs(code)
          if (lang === 'python') return await runPython(code)
          return sqlOutcome(code)
        })
        return json(outcome)
      } catch (e) {
        return json({ error: `runner crashed: ${(e as Error).message}` }, 500)
      }
    }

    return json({ error: 'not found' }, 404)
  },
})

console.log(`[code-runner] listening on :${server.port} — gcc · g++ · java · bun · python · sqlite`)
