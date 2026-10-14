import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 16: Server-Side JavaScript with Node (Sections 16.1 – 16.7)
// Master study content.
// ============================================================================

export const jsCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'js-ch16-s1',
    readingTime: 8,
    intro: 'The same V8 engine that runs in your browser also runs in data centers: **Node.js** wraps V8 in a host environment built for programs rather than pages — files, processes, sockets and HTTP instead of documents, windows and events. Everything in this chapter rests on Chapter 13: Node keeps JavaScript **single-threaded and event-driven**, but makes the whole operating system reachable through **non-blocking APIs**. This is JavaScript meeting the machine of Operating System Concepts Chapters 4 and 5 — except that where a kernel preempts threads, Node schedules callbacks cooperatively, one run-to-completion unit at a time.',
    objectives: [
      'Describe Node’s architecture — V8, libuv and the standard library — and how the host differs from a browser',
      'Run code interactively in the REPL and as scripts, and manage projects with node, npm and npx',
      'Read command-line arguments from process.argv and configuration from process.env',
      'Write a robust command-line argument parser from scratch',
      'Consume standard input line by line with the readline module'
    ],
    concepts: [
      {
        term: 'Node’s architecture: V8 plus a host',
        kind: 'definition',
        statement: 'Node is **V8** (the JavaScript compiler and runtime) plus a **host environment**: a standard library of server-oriented APIs, and **libuv**, the C library that provides the event loop, non-blocking file and socket I/O, and a small pool of OS threads. Node runs scripts from files instead of web pages, and has no DOM, no window and no browser sandbox.',
        detail: 'The JavaScript side of Node is **one thread** with one call stack — the run-to-completion rule of Section 13.1 holds unchanged. The waiting is done elsewhere: when JavaScript asks for a file, libuv hands the blocking system call to a pool thread or the OS kernel, and the completion becomes a queued callback. In Operating System Concepts terms (Chapters 4 and 5), the event loop is a scheduler — but a cooperative one: JavaScript code is never preempted mid-statement, which is why Node code needs no locks (and why one slow callback stalls everything).'
      },
      {
        term: 'REPL, scripts and one-liners',
        kind: 'method',
        statement: 'Typing `node` with no arguments starts an interactive **REPL** — a read-eval-print loop where each expression is evaluated and its value printed; typing `node script.js` runs a file; `node -e "code"` runs a string. The REPL supports multi-line functions, tab completion, and dot-commands like `.exit` and `.help`.',
        detail: '\n```js\n// node with no arguments starts the REPL:\n// > 2 ** 10\n// 1024\n// > [1, 2, 3].map(x => x * x)\n// [ 1, 4, 9 ]\n// > .exit\n//\n// a file:\n// node hello.js\n```'
      },
      {
        term: 'Modules: CommonJS and ES6',
        kind: 'method',
        statement: 'Node speaks both module dialects of Chapter 10: the original **CommonJS** (`const fs = require("node:fs")`, `module.exports = value`) and, when `package.json` declares `"type": "module"` (or the file ends in `.mjs`), the **ES6** form (`import fs from "node:fs"`, `export default value`). The `node:` prefix marks a built-in module and resolves slightly faster.',
        detail: 'Rule of thumb for new code: use ES6 `import`/`export` (Section 10.3) — it is the standard, it is statically analyzable (which is what makes bundler tree-shaking possible, Section 17.3), and top-level `await` works in ES modules. Section 16.5 and this chapter’s examples use whichever dialect reads best for the point being made.'
      },
      {
        term: 'The process object',
        kind: 'definition',
        statement: '`process` is a global that **is the running program**: `process.argv` is the command-line arguments array, `process.env` the environment variables object, `process.cwd()` the current working directory, `process.exit(code)` ends the program immediately, and `process.stdin`/`stdout`/`stderr` are its standard streams.',
        detail: '\n```js\nprocess.argv\n// ["/usr/local/bin/node", "/app/greet.js", "--name", "Ada"]\nprocess.env.HOME        // environment variables: all strings\nprocess.env.NODE_ENV    // conventions like "production"\nprocess.exit(1)         // stop NOW with exit code 1\nprocess.stdout.write("no automatic newline\\n")\n```\nArguments are always **strings** — parse numbers yourself (`Number(arg)`).'
      },
      {
        term: 'Exit codes: talking to the shell',
        kind: 'insight',
        statement: 'A Node program is usually one command in a larger shell pipeline, and shells communicate success through **exit codes**: 0 means success, anything else means failure. `console.log` writes to stdout (data); `console.error` writes to stderr (diagnostics) — keeping them separate lets `node tool.js > out.txt` capture output while errors still reach the terminal.',
        detail: 'Prefer setting `process.exitCode = 1` and letting the program end naturally: `process.exit()` kills the event loop instantly, and `console.error` output still sitting in a buffer can be lost. A thrown, uncaught exception already exits with code 1 — the idiomatic way for a CLI to fail.'
      },
      {
        term: 'Standard input is a stream',
        kind: 'method',
        statement: '`process.stdin` is a **Readable stream** (Section 16.3), so a Node script can join shell pipelines: `node count.js < notes.txt`. The `readline` module wraps the byte stream and emits **lines**, applying exactly the record-splitting pattern of Section 13.4 internally.',
        detail: '\n```js\nconst readline = require("node:readline/promises");\n\nconst rl = readline.createInterface({ input: process.stdin });\nfor await (const line of rl) {\n  console.log(line.length);\n}\n```\nEOF — Ctrl-D in a terminal, the end of a pipe, or `null` from `push()` — ends the loop and the interface closes itself.'
      }
    ],
    examples: [
      {
        title: 'A command-line argument parser, from process.argv up',
        problem: 'Write `greet.js` so that `node greet.js --name Ada --times 3` greets three times, with a default for missing flags and clear errors for malformed ones — reading nothing but `process.argv`.\n```js\nfunction parseArgs(argv) {\n  const args = { name: "world", times: 1 };\n  for (let i = 2; i < argv.length; i++) {\n    const arg = argv[i];\n    if (!arg.startsWith("--")) {\n      throw new Error(`unexpected argument: ${arg}`);\n    }\n    const key = arg.slice(2);\n    const value = argv[i + 1];\n    if (value === undefined || value.startsWith("--")) {\n      throw new Error(`missing value for ${arg}`);\n    }\n    args[key] = value;\n    i++;                      // consume the value we just used\n  }\n  return args;\n}\n\nconst args = parseArgs(process.argv);\nfor (let i = 0; i < Number(args.times); i++) {\n  console.log(`Hello, ${args.name}!`);\n}\n```',
        steps: [
          { label: 'Step 1: Inspect the raw argv', text: 'For `node greet.js --name Ada --times 3`, `process.argv` is `["…/bin/node", "…/greet.js", "--name", "Ada", "--times", "3"]`. Element 0 is the Node executable and element 1 the script path — **real arguments start at index 2**, which is why the loop begins there.' },
          { label: 'Step 2: Pair flags with values', text: 'Each iteration expects a `--key` at `argv[i]` and its value at `argv[i + 1]`. Copying the value and then doing `i++` moves the index past the pair, so the loop always lands on the next flag — `--name Ada --times 3` takes two iterations, not four.' },
          { label: 'Step 3: Fail loudly on malformed input', text: 'A bare word (`greet.js hello`) hits the `!startsWith("--")` branch; `--name` at the end of the line finds `undefined`, and `--name --times` finds another flag — both throw with a message naming the offender. Because nothing catches the error, the uncaught exception prints a stack trace and exits with code 1: the shell sees failure (exit codes, above).' },
          { label: 'Step 4: Defaults make the tool forgiving', text: 'The seed object `{ name: "world", times: 1 }` means `node greet.js` with no arguments still does something sensible — arguments override, absence inherits. Values are stored as **strings** (`"3"`), so `Number(args.times)` converts at the point of use, and a non-numeric value becomes `NaN` — zero loops, a visible symptom rather than a crash.' },
          { label: 'Step 5: Run it', text: '```js\n// node greet.js --name Ada --times 3\n// Hello, Ada!\n// Hello, Ada!\n// Hello, Ada!\n```\nThis flag/value loop is the essence of every option parser (Node’s own `util.parseArgs`, Commander, yargs) — they add type coercions, `--flag` booleans without values, `--key=value` syntax and `--help` text, but the walk over `argv` with an index you nudge past each value is the same one.' }
        ],
        result: '`node greet.js --name Ada --times 3` prints three greetings; `node greet.js` prints one `Hello, world!`; `node greet.js --name` exits with a missing-value error and code 1.'
      },
      {
        title: 'A word-count filter over stdin',
        problem: 'Write a `wc`-style filter that reads whatever the shell pipes in and reports line, word and character counts — proving that a Node script is a Unix citizen.\n```js\nconst readline = require("node:readline/promises");\n\nasync function main() {\n  const rl = readline.createInterface({ input: process.stdin });\n  let lines = 0, words = 0, chars = 0;\n  for await (const line of rl) {\n    lines++;\n    words += line.split(/\\s+/).filter(Boolean).length;\n    chars += line.length;\n  }\n  console.log(`${lines} ${words} ${chars}`);\n}\n\nmain().catch((err) => { console.error(err); process.exitCode = 1; });\n```',
        steps: [
          { label: 'Step 1: The pipeline provides the input', text: 'Run as `node count.js < notes.txt` or `cat report.md | node count.js`. The shell wires the file (or upstream command) to the script’s `process.stdin`; Node opens nothing itself. This composition — small programs joined by pipes — is why CLIs read stdin instead of filenames by default.' },
          { label: 'Step 2: readline converts bytes to lines', text: '`process.stdin` delivers raw **Buffers** in arbitrary chunks (Section 16.3). The readline interface does the Section 13.4 job underneath: it decodes UTF-8 across chunk boundaries, splits on newlines, and holds back any partial final line until EOF confirms it is complete. The `for await` loop (Section 13.4) suspends until each next line is ready — the thread stays free between lines.' },
          { label: 'Step 3: Count per line', text: '`line.split(/\\s+/).filter(Boolean)` splits on runs of whitespace and drops the empty strings that leading/trailing whitespace would produce. `chars` counts the string’s `.length` — code units, not UTF-8 bytes (`Buffer.byteLength(line)` would give bytes; see the encoding example in Section 16.3).' },
          { label: 'Step 4: EOF ends the loop, the report prints once', text: 'When the input ends, the last `next()` resolves `{done: true}`, the loop exits, and the single summary line goes to stdout — where redirection like `node count.js < a.txt > stats.txt` captures it. Errors (a closed pipe, for example) reject the iteration, land in `main().catch`, and set `process.exitCode` so the shell can detect failure without losing buffered stderr.' }
        ],
        result: 'For a 3-line, 12-word, 74-character input, `node count.js < notes.txt` prints `3 12 74` — a program that combines with any Unix pipeline, never blocking the thread while it waits for data.'
      }
    ],
    keyTakeaways: [
      'Node = V8 + libuv + a server API library: one JavaScript thread with an event loop, plus OS-level waiters — the cooperative counterpart of the preemptive schedulers in OSC Chapters 4 and 5.',
      'Run code three ways: `node` (REPL), `node script.js` (files), `node -e` (one-liners); `.exit` leaves the REPL.',
      '`process.argv` holds node, script path and arguments — real arguments start at index 2, and every one of them is a string.',
      'Exit codes are the CLI contract: 0 success, non-zero failure; `process.exitCode` is safer than `process.exit()`, which kills pending output.',
      'stdout is data, stderr is diagnostics; keeping them separate is what makes shell redirection work.',
      'process.stdin is a Readable stream — readline turns it into lines, making Node scripts full citizens of shell pipelines.'
    ],
    quiz: [
      {
        q: 'For `node greet.js --name Ada`, what are `process.argv[0]` and `process.argv[1]`?',
        options: [
          'The first flag and its value',
          'The Node executable path and the script path — arguments begin at index 2',
          'The script path and the first argument',
          'Undefined — argv only holds the arguments'
        ],
        answer: 1,
        explanation: 'argv[0] is the interpreter and argv[1] the script being run; user arguments occupy index 2 onward, which is why argument loops start at `i = 2`.'
      },
      {
        q: 'Which statement about Node’s threading model is TRUE?',
        options: [
          'Node runs one OS thread per pending I/O operation',
          'JavaScript callbacks can preempt each other mid-statement',
          'There is one JavaScript thread; blocking system calls are performed off-thread by libuv’s pool or the OS kernel',
          'V8 compiles every callback onto its own thread'
        ],
        answer: 2,
        explanation: 'The JavaScript side is single-threaded with run-to-completion (Section 13.1); the actual waiting happens in the OS or libuv’s small thread pool, whose completions become queued callbacks.'
      },
      {
        q: 'Why is `process.exitCode = 1` generally preferred over `process.exit(1)`?',
        options: [
          'It is faster',
          'It allows the event loop to drain naturally, so buffered stdout/stderr writes are not lost',
          'It sets the code for the parent shell instead of the current process',
          'process.exit(1) only works in the REPL'
        ],
        answer: 1,
        explanation: 'process.exit() kills the loop immediately — writes still sitting in kernel buffers can vanish. Setting exitCode and returning lets pending output flush before the natural exit.'
      },
      {
        q: 'In the stdin loop `for await (const line of rl)`, what does each iteration wait for?',
        options: [
          'The whole file to be read into memory first',
          'A timer tick',
          'The next complete line, after readline has stitched chunks and split on newlines',
          'Nothing — the loop is synchronous'
        ],
        answer: 2,
        explanation: 'readline applies the record-splitting pattern of Section 13.4 under the hood, so each iteration receives one full line the moment it is assembled — constant memory, whatever the input size.'
      },
      {
        q: 'What does an uncaught exception do to a Node command-line program?',
        options: [
          'Prints a stack trace and exits with code 1 — the idiomatic CLI failure path',
          'It is ignored; the program continues with the next statement',
          'The process hangs until killed',
          'It restarts the script from the top'
        ],
        answer: 0,
        explanation: 'No catcher means Node prints the error and exits non-zero — exactly what a shell pipeline expects from a failed stage, no explicit exit call needed.'
      }
    ]
  },

  // ---------------------------------------------------------------- 16.2
  {
    sectionId: 'js-ch16-s2',
    readingTime: 8,
    intro: 'In the browser, synchronous I/O was an accident you could have; in Node it is a design decision you almost always decline. **Every Node I/O API is asynchronous by default** — a request returns immediately, the single thread keeps running, and the result arrives later as a callback or a settled promise. Node exposes the same operations in **two dialects**: the error-first callback style of Section 13.1, and the promise style of Section 13.2 that `await` was built for. This section reads both fluently and translates between them.',
    objectives: [
      'Explain why Node made async the default and what the single thread does while I/O is in flight',
      'Recognize the two dialects of every Node API: error-first callbacks and promise-returning modules',
      'Translate nested callback code into flat async/await with fs/promises',
      'Choose deliberately between sequential and parallel I/O with await and Promise.all'
    ],
    concepts: [
      {
        term: 'Asynchronous by default',
        kind: 'insight',
        statement: 'There is no synchronous XMLHttpRequest-style divide in Node: the primary file, socket, DNS and crypto APIs **never block the JavaScript thread**, and synchronous variants (`fs.readFileSync`, `crypto.pbkdf2Sync`) exist only for one-off startup work. A blocked thread is a stalled server — run-to-completion means nothing else runs until the block ends.',
        detail: 'The scale gap is the reason: a disk read is milliseconds, a network hop tens to hundreds — millions of instructions of JavaScript could run meanwhile. Node’s bet is that one thread that never waits, plus an event loop dispatching completions, serves more concurrent clients than a thread per connection — and it removes shared-memory races entirely (contrast OSC Chapter 4 thread-per-request servers).'
      },
      {
        term: 'Two dialects, one library',
        kind: 'method',
        statement: 'Node’s history spans both halves of Chapter 13, so most APIs ship in **two forms**: `fs.readFile(path, (err, data) => ...)` takes an error-first callback (Section 13.1), while the `node:fs/promises` module returns promises (Section 13.2): `fsPromises.readFile(path)` — `await`able, chainable, and it **throws** on failure inside an async function.',
        detail: '\n```js\nconst fs = require("node:fs");            // callback dialect\nconst fsp = require("node:fs/promises");  // promise dialect\n\nfs.readFile("a.txt", "utf8", (err, text) => { /* error-first */ });\nconst text = await fsp.readFile("a.txt", "utf8");  // throws on error\n```\nThe promise dialect is the modern default for application code — `util.promisify` (Section 13.2) wraps any remaining error-first function when you need it.'
      },
      {
        term: 'What the thread does while you await',
        kind: 'insight',
        statement: 'While `await fsp.readFile(...)` is pending, the JavaScript thread is **not blocked** — it is back in the event loop, running other callbacks, timers and requests. The OS or a libuv pool thread performs the actual read; its completion is queued and the awaiting function resumes as a microtask-adjacent continuation.',
        detail: 'This is the OSC Chapter 5 picture redrawn cooperatively: the event loop is a scheduler with a ready queue, and I/O completions are the interrupt-driven arrivals (OSC Chapter 12’s I/O subsystem does the transfer). The practical consequence: a Node server overlaps thousands of in-flight operations on one thread, and the only way to ruin it is a long synchronous computation — Section 16.7 shows the worker-thread escape hatch.'
      },
      {
        term: 'Sequential is the default again',
        kind: 'method',
        statement: 'With `await`, operations run **in order, one after the next** — the reading order of the source is the execution order. Parallelism is the thing you now opt into: start several promises together, then `await Promise.all([p1, p2])` (Section 13.2) for all of them at once.',
        detail: '\n```js\n// sequential — ~sum of the two latencies\nconst a = await fsp.readFile("a.txt", "utf8");\nconst b = await fsp.readFile("b.txt", "utf8");\n\n// parallel — ~max of the two latencies\nconst [a2, b2] = await Promise.all([\n  fsp.readFile("a.txt", "utf8"),\n  fsp.readFile("b.txt", "utf8"),\n]);\n```\nThe parallel version works because calling `fsp.readFile` starts the read **immediately**; only the `await` waits. Forgetting the array-and-all form is a classic silent slowdown.'
      },
      {
        term: 'Errors: three checks versus one catch',
        kind: 'insight',
        statement: 'The callback dialect forces an error check at **every step** (`if (err) return ...` — Section 13.1), because that is the only place failure can be seen. The promise dialect centralizes it: any rejection in the whole sequence propagates to a **single** `try/catch` (or `.catch`) around the awaited calls — the failure model of exceptions restored on top of async I/O.',
        detail: 'Centralized handling is not just less typing: it is more reliable. Every hand-written `if (err)` is a chance to forget one; the single catch covers the steps you add next month, too.'
      }
    ],
    examples: [
      {
        title: 'The same three-step pipeline, in both dialects',
        problem: 'Read a config JSON, use it to find a data file, and write a one-line report — first with error-first callbacks, then with `fs/promises` and `await`. Compare structure, error handling and readability.\n```js\n// ---------- callback dialect ----------\nconst fs = require("node:fs");\n\nfs.readFile("config.json", "utf8", (err, text) => {\n  if (err) return console.error(err);\n  const config = JSON.parse(text);\n  fs.readFile(config.dataFile, "utf8", (err2, data) => {\n    if (err2) return console.error(err2);\n    const report = `rows: ${data.split("\\n").length}`;\n    fs.writeFile("out.txt", report, (err3) => {\n      if (err3) console.error(err3);\n      else console.log("done");\n    });\n  });\n});\n\n// ---------- promise dialect ----------\nconst fsp = require("node:fs/promises");\n\nasync function main() {\n  const config = JSON.parse(await fsp.readFile("config.json", "utf8"));\n  const data = await fsp.readFile(config.dataFile, "utf8");\n  const report = `rows: ${data.split("\\n").length}`;\n  await fsp.writeFile("out.txt", report);\n  console.log("done");\n}\nmain().catch(console.error);\n```',
        steps: [
          { label: 'Step 1: The same three operations', text: 'Both versions do exactly the same I/O in the same order: read config, read data, write report. The bytes read and written are identical, and so is the wall-clock behavior — nothing blocks in either version.' },
          { label: 'Step 2: Shape — nesting versus reading order', text: 'The callback version indents one level per step because **step N’s logic lives inside step N−1’s callback** — Section 13.1’s pyramid of doom. The await version reads top-to-bottom in source order; the mental compiler work (“which runs first?”) is gone.' },
          { label: 'Step 3: Error handling — three gates versus one net', text: 'The callback version checks `err`/`err2`/`err3` separately, each with an early return — and a forgotten check feeds `undefined` into the next step. The await version has **one** `.catch` at the boundary: a missing config.json, a missing data file or a failed write all land there as rejections (Section 13.2’s propagation), each skipping the remaining steps.' },
          { label: 'Step 4: Values flow through variables again', text: 'In the callback version, `config` is in scope for the inner callbacks by closure — adding a step between the reads means threading it deeper. In the await version, `config` and `data` are ordinary `const` locals in one function scope: refactoring, logging and type-checking all get easier.' },
          { label: 'Step 5: `main().catch(...)` — the boundary idiom', text: 'Top-level `await` is only legal in ES modules; the CommonJS idiom is an async `main()` with one `.catch` attached — the single place the program reports an unhandled failure and (via `process.exitCode = 1`) tells the shell. Note what did not change: JSON.parse still throws synchronously on bad JSON, and its throw is caught by the same catch — sync and async errors meet in one handler.' }
        ],
        result: 'Both versions write the identical report and log `"done"`; the await version is four lines shorter, has one error path instead of three, and reads in execution order — the same reason Section 13.3 exists.'
      },
      {
        title: 'Sequential versus parallel — a timing trace',
        problem: 'Three independent reads of files that each take about 100 ms of disk latency: predict the total time of the loop version versus the `Promise.all` version, then explain the rule.\n```js\nconst fsp = require("node:fs/promises");\nconst files = ["a.json", "b.json", "c.json"];\n\nasync function main() {\n  // version 1: sequential\n  let t0 = Date.now();\n  const seq = [];\n  for (const f of files) {\n    seq.push(await fsp.readFile(f, "utf8"));\n  }\n  console.log(`sequential: ${Date.now() - t0} ms`);\n\n  // version 2: parallel\n  t0 = Date.now();\n  const par = await Promise.all(\n    files.map((f) => fsp.readFile(f, "utf8"))\n  );\n  console.log(`parallel:   ${Date.now() - t0} ms`);\n}\nmain().catch(console.error);\n```',
        steps: [
          { label: 'Step 1: The loop serializes by construction', text: 'Each iteration awaits before the next `readFile` call is even made, so the reads cannot overlap: 100 + 100 + 100 ≈ **300 ms**. The order is guaranteed — useful when step N needs step N−1’s result, wasteful when they are independent.' },
          { label: 'Step 2: `map` starts all three at once', text: '`files.map(f => fsp.readFile(...))` calls `readFile` three times synchronously, before any await — three requests in flight together, one promise each. The thread then waits at the `Promise.all`, free to do anything else in between.' },
          { label: 'Step 3: all waits for the slowest, not the sum', text: 'The reads overlap, so the total is roughly **100 ms** — the max, not the sum. `Promise.all` still fulfills with results **in input order** (Section 13.2), so `par[0]` is `a.json` even if `c.json` finished first.' },
          { label: 'Step 4: The decision rule', text: 'Sequential `await` when each step **consumes** the previous result (config → data → report). `Promise.all` when steps are **independent** (fetch 3 files, then aggregate). Mixing them up costs either latency (unneeded order) or correctness (unawaited dependencies) — and `Promise.all` still fails fast if any read rejects.' }
        ],
        result: 'Sequential ≈ 300 ms, parallel ≈ 100 ms on 100 ms-per-file disks — overlap bought with one `map` and a `Promise.all`, no threads touched.'
      }
    ],
    keyTakeaways: [
      'Node I/O APIs are async by default: requests return immediately and the single thread keeps the event loop turning — blocking variants are for startup only.',
      'Every API has two dialects: error-first callbacks (Section 13.1) and the promise-returning `node:fs/promises` style that `await` (Section 13.3) consumes.',
      'While you await, the thread serves other work — the OS or libuv’s pool does the waiting (OSC Chapters 4–5 scheduling, cooperatively redrawn).',
      'Await is sequential by default; `Promise.all` over an array of started promises is the opt-in to parallel — max latency, not the sum.',
      'The promise dialect restores exception-style error flow: one catch covers every step, versus one `if (err)` per callback.',
      'The CommonJS idiom: `async function main() { ... }` plus `main().catch(...)` — a single failure boundary for the whole pipeline.'
    ],
    quiz: [
      {
        q: 'What does the JavaScript thread do while `await fsp.readFile(...)` is pending?',
        options: [
          'Sleeps until the data arrives',
          'Blocks in a read() system call',
          'Returns to the event loop and runs other queued callbacks — the OS/libuv does the waiting',
          'Spawns a worker thread for the read'
        ],
        answer: 2,
        explanation: 'The await suspends only the current async function; the thread goes back to the loop and serves other events, which is how one thread overlaps thousands of operations.'
      },
      {
        q: 'Three independent file reads each take ~100 ms. Roughly how long does `await Promise.all(files.map(f => fsp.readFile(f)))` take?',
        options: [
          'About 100 ms — the reads overlap, so the total is the slowest, not the sum',
          'About 300 ms — they are still executed one at a time',
          'About 33 ms — the work is split across cores',
          'It depends on how many callbacks are queued'
        ],
        answer: 0,
        explanation: 'map calls readFile for all files immediately, putting every request in flight together; Promise.all then waits for the last completion — max latency ≈ 100 ms.'
      },
      {
        q: 'Which is the error-first signature for reading a file with the callback dialect?',
        options: [
          'fs.readFile(path, (data, err) => ...)',
          'fs.readFile(path, (err, data) => ...)',
          'const data = fs.readFile(path)',
          'fs.readFile(path).then(data => ...)'
        ],
        answer: 1,
        explanation: 'Node reserves the callback’s first parameter for the error and passes results after it (Section 13.1) — check `err` before touching `data`.'
      },
      {
        q: 'In the async rewrite of the config → data → report pipeline, where does a missing config.json surface?',
        options: [
          'As an err parameter checked in each nested callback',
          'As a rejection that propagates to the single .catch around the sequence',
          'It crashes the process with no chance to log',
          'It is silently ignored and data becomes undefined'
        ],
        answer: 1,
        explanation: 'The first readFile rejects, the await throws, remaining steps are skipped, and the one catch sees the error — centralized failure handling across the whole pipeline.'
      }
    ]
  },

  // ---------------------------------------------------------------- 16.3
  {
    sectionId: 'js-ch16-s3',
    readingTime: 12,
    intro: 'Files, sockets and pipes move **bytes**, not strings — and real data can be terabytes that no single string should hold. Node’s answer is a trio of abstractions: **Buffer** (a fixed-length byte container), **EventEmitter** (the observer pattern that decouples producers from consumers), and **streams** (processing pipelines that hold one chunk at a time). The three compose: streams emit Buffers through events, `pipe()` wires them into pipelines, and transforms let you rewrite data as it flows.',
    objectives: [
      'Create and inspect Buffers; convert text through utf8, hex and base64 encodings',
      'Explain Buffer length versus string length for multi-byte characters',
      'Decouple producers from consumers with EventEmitter: on, once, emit, removeListener',
      'Read, write and transform streams, and chain them with pipe() and pipeline()',
      'Explain backpressure and why pipeline() is preferred over pipe()'
    ],
    concepts: [
      {
        term: 'Buffer: bytes, not characters',
        kind: 'definition',
        statement: 'A **Buffer** is a fixed-length array of bytes (0–255) — a subclass of `Uint8Array` (Section 11.2) — and the currency of all Node I/O. `Buffer.from(string, encoding)` encodes text into bytes; `buf.toString(encoding)` decodes back. `Buffer.alloc(n)` creates zero-filled storage; `Buffer.allocUnsafe(n)` skips the zeroing for speed.',
        detail: '\n```js\nconst buf = Buffer.from("Node", "utf8");\nbuf.length      // 4\nbuf[0]          // 78 — a byte, not "N"\nbuf.toString("utf8")    // "Node"\n```\nUse `Buffer.from`/`Buffer.alloc` — the old `new Buffer()` constructor is deprecated because it could leak uninitialized memory.'
      },
      {
        term: 'Encodings: utf8, hex, base64',
        kind: 'notation',
        statement: 'An **encoding** names the bytes-to-text mapping at a conversion boundary: `utf8` is the default (variable width — 1 to 4 bytes per character); `hex` maps each byte to two characters (`6e6f6465`); `base64` packs 3 bytes into 4 characters for safe text transport (data URLs, email); `latin1`/`binary` is one byte per character.',
        detail: '\n```js\nconst raw = Buffer.from("café", "utf8");\nraw.length                    // 5 — é is TWO bytes (0xc3 0xa9)\nraw.toString("hex")           // "636166c3a9"\nraw.toString("base64")        // "Y2Fmw6k="\nBuffer.from("636166c3a9", "hex").toString("utf8")  // "café" — round trip\n```\n`Buffer.byteLength("café")` gives 5 while `"café".length` gives 4 — the byte/string distinction that Content-Length headers depend on.'
      },
      {
        term: 'Slicing is a view, not a copy',
        kind: 'insight',
        statement: '`buf.subarray(start, end)` returns a **new Buffer that shares the same memory** — a window on the original bytes. Mutating the slice mutates the parent, and vice versa. Use `Buffer.concat([a, b])` to copy pieces into fresh storage, or `buf.copy(target, ...)` for explicit copies.',
        detail: '\n```js\nconst req = Buffer.from("GET /index.html HTTP/1.1");\nconst method = req.subarray(0, 3);   // "GET" — zero-copy view\nmethod[0] = 0x50;                    // also changes req[0] — "PET /index.html"\n```\nA cheap view is exactly what protocol parsing wants (find the header boundary, look at pieces) — just remember you are looking **into**, not **at a copy of**, the bytes.'
      },
      {
        term: 'EventEmitter: the observer pattern',
        kind: 'definition',
        statement: '**EventEmitter** is Node’s built-in pub/sub class: `emitter.on(event, listener)` subscribes, `emitter.emit(event, ...args)` invokes every listener **synchronously, in registration order**, and `emitter.once`/`emitter.off` (alias `removeListener`) manage membership. `emit` returns true if any listener ran. Streams, servers and sockets are all EventEmitters.',
        detail: 'Because emit runs listeners immediately on the same thread (Section 13.1’s run-to-completion), listeners need no locks — but a slow listener delays everything after it. A same-named event with more than 10 listeners logs a warning (a leak detector — raise it with `emitter.setMaxListeners(n)` if the count is intentional, as in a room of sockets).'
      },
      {
        term: 'Four kinds of stream',
        kind: 'definition',
        statement: 'A **stream** is an EventEmitter that moves data incrementally: a **Readable** produces chunks (`fs.createReadStream`), a **Writable** consumes them (`fs.createWriteStream`, `process.stdout`, HTTP responses), a **Duplex** does both (a TCP socket), and a **Transform** reads chunks and writes transformed ones (compression, encryption — the example below). Chunks are Buffers, typically ≤ 64 KB (`highWaterMark`).',
        detail: 'Two consumption styles for Readables: the event style (`on("data")`, `on("end")` — push mode) and — usually better — the async-iteration style `for await (const chunk of stream)` (Section 13.4), which applies backpressure automatically by requesting the next chunk only after the body finishes with the current one.'
      },
      {
        term: 'pipe() and pipeline()',
        kind: 'method',
        statement: '`readable.pipe(writable)` pumps data across streams as it arrives and returns the destination (so `.pipe().pipe()` chains). `stream.pipeline(src, ...streams, callback)` (or `stream/promises`’ promise-returning `pipeline`) does the same **and** propagates errors and destroys every stream in the chain when any one fails — which bare `pipe()` does not.',
        detail: '\n```js\nconst { pipeline } = require("node:stream/promises");\n\nawait pipeline(\n  createReadStream("in.txt"),      // Readable\n  upperCaser,                       // Transform\n  createWriteStream("out.txt")       // Writable\n);\n```\nThe `pipe()` error gap: if the readable errors mid-copy, `pipe()` neither destroys the destination nor calls anyone — file descriptors leak and the program hangs. `pipeline()` is the production form.'
      },
      {
        term: 'Backpressure: the flow control of streams',
        kind: 'insight',
        statement: 'When a Writable cannot keep up, its `write()` returns **false** — the signal for the Readable to **pause** reading until `"drain"` fires. This is **backpressure**: memory stays bounded (a few chunks in flight) no matter how big the file or how slow the consumer. `pipe()`/`pipeline()` and `for await` honor it automatically.',
        detail: 'Without backpressure, reading a 10 GB file into a slow socket would buffer all 10 GB in RAM — the Node version of an unbounded queue (compare OSC Chapter 3’s bounded buffer). The readable-vs-writable handshake is Node’s application-level copy of TCP’s own window flow control: the consumer signals capacity, the producer respects it.'
      }
    ],
    examples: [
      {
        title: 'Hex and base64 round trips — and the multi-byte trap',
        problem: 'Encode `"café"`, inspect the bytes, round-trip through hex and base64, then show why slicing by string position corrupts text.\n```js\nconst s = "café";\n\n// encode: text -> bytes\nconst buf = Buffer.from(s, "utf8");\nconsole.log(buf.length);              // 5\nconsole.log(buf.toString("hex"));     // 636166c3a9\nconsole.log(buf.toString("base64"));  // Y2Fmw6k=\n\n// decode: bytes -> text\nconst back = Buffer.from("636166c3a9", "hex").toString("utf8");\nconsole.log(back === s);              // true\n\n// the trap: cut in the middle of é\nconst cut = buf.subarray(0, 4).toString("utf8");\nconsole.log(JSON.stringify(cut));     // "caf\\ufffd"\n```',
        steps: [
          { label: 'Step 1: Encode, and count bytes not characters', text: 'UTF-8 encodes ASCII as one byte — `c` = `0x63`, `a` = `0x61`, `f` = `0x66` — but `é` (U+00E9) needs **two**: `0xc3 0xa9`. So `buf.length` is 5 while `s.length` is 4: `Buffer.byteLength(s)` is the number that belongs in a `Content-Length` header.' },
          { label: 'Step 2: hex and base64 are byte-to-text alphabets', text: '`toString("hex")` prints each byte as two hex digits — `636166c3a9` — a lossless, human-readable rendering. `toString("base64")` packs the 5 bytes into `Y2Fmw6k=`: 4 output characters per 3 input bytes, padded with `=` — the transport-safe alphabet of data URLs and MIME.' },
          { label: 'Step 3: Round trips are exact', text: '`Buffer.from(hexString, "hex").toString("utf8")` rebuilds the same 5 bytes, and decoding yields `"café"` — encode/decode through any single encoding is lossless. This is the standard trick for hex dumps, checksums and tests that must show binary data in text.' },
          { label: 'Step 4: Cutting between the bytes of one character', text: '`subarray(0, 4)` keeps `63 61 66 c3` — ending **inside** é’s two-byte sequence. Decoding finds a dangling `0xc3`, replaces what it cannot decode with U+FFFD (the replacement character `\\ufffd`), and `"caf\\ufffd"` is the silent corruption: no exception, just wrong data. This is exactly why Section 13.4’s line-splitting and `TextDecoder`’s streaming mode exist — always cut on **record or code-point** boundaries, never blindly by byte.' }
        ],
        result: '5 bytes; hex `636166c3a9`; base64 `Y2Fmw6k=`; the hex round trip reproduces `"café"` exactly — and slicing at byte 4 corrupts the final character into a replacement character.'
      },
      {
        title: 'A publish/subscribe temperature monitor with EventEmitter',
        problem: 'A sensor produces readings; a logger prints every one; an alarm fires on spikes above 30 °C and then retires itself; a shutdown note runs exactly once. Build it with `EventEmitter` so the sensor knows nothing about its consumers.\n```js\nconst EventEmitter = require("node:events");\n\nclass Thermo extends EventEmitter {}\nconst thermo = new Thermo();\nlet temp = 20;\n\n// subscriber 1 — a pure observer\nthermo.on("reading", (c) => console.log(`logger: ${c.toFixed(1)} C`));\n\n// subscriber 2 — the alarm, which retires after it fires\nfunction alarm(c) {\n  if (c > 30) {\n    console.log(`ALARM: ${c.toFixed(1)} C`);\n    thermo.removeListener("reading", alarm);\n  }\n}\nthermo.on("reading", alarm);\n\n// one-shot: cleanup that must run exactly once\nthermo.once("shutdown", () => console.log("monitor stopped"));\n\n// the publisher — no knowledge of consumers\nsetInterval(() => {\n  temp += (Math.random() - 0.45) * 2;\n  thermo.emit("reading", temp);\n}, 250);\n```',
        steps: [
          { label: 'Step 1: emit is a synchronous fan-out', text: 'Each tick, `thermo.emit("reading", temp)` calls every listener immediately, in the order they registered — logger first, alarm second — and only then returns. Same thread, run-to-completion (Section 13.1): no queue, no microtasks, no interleaving. The event name plus the argument list is the whole contract.' },
          { label: 'Step 2: Subscribers are independent', text: 'The logger does pure observation; the alarm holds state (its threshold) and decides for itself when its job is done. Neither knows the other exists — adding a third consumer (a CSV writer, an MQTT forwarder) is one more `on("reading", fn)` with zero changes to the sensor.' },
          { label: 'Step 3: removeListener changes the future, not the present', text: 'When the alarm removes itself, the **current** emit has already captured the listener list — it still finishes its own run — but the next `emit` finds only the logger. The alarm retires exactly once, however many further spikes occur. (Symmetrically: `removeAllListeners("reading")` would unsubscribe everyone.)' },
          { label: 'Step 4: once for lifecycle events', text: '`once("shutdown", ...)` registers a listener that un-registers itself the first time it runs — the idiom for “on the way down, do this one time,” immune to double-shutdown calls. It is exactly `on` plus automatic `removeListener` after the first invocation.' },
          { label: 'Step 5: Why pub/sub here', text: 'The sensor source is a `setInterval` now; later it is a hardware device or an HTTP feed — the publisher and the consumers are coupled only by the `"reading"` contract. That decoupling is the EventEmitter’s whole point, and it is the pattern every long-lived Node object reuses: streams emit `"data"`/`"end"`, servers emit `"request"`, sockets emit `"connect"` (next sections).' }
        ],
        result: 'Log lines every 250 ms; when the random walk first crosses 30 °C, one `ALARM:` line prints and the alarm never fires again — the logger keeps logging, and a `shutdown` emit would print its message exactly once.'
      },
      {
        title: 'An uppercase Transform, and copying a file with backpressure',
        problem: 'Copy a file to uppercase letter-by-letter-as-it-flows — never holding the whole file — using a Transform stream and `pipeline`, and explain what backpressure contributes.\n```js\nconst { createReadStream, createWriteStream } = require("node:fs");\nconst { Transform } = require("node:stream");\nconst { pipeline } = require("node:stream/promises");\n\nconst upperCaser = new Transform({\n  transform(chunk, _encoding, callback) {\n    // chunk is a Buffer of at most ~64 KB\n    callback(null, chunk.toString("utf8").toUpperCase());\n  },\n});\n\nasync function main() {\n  await pipeline(\n    createReadStream("in.txt"),\n    upperCaser,\n    createWriteStream("out.txt")\n  );\n  console.log("done");\n}\nmain().catch(console.error);\n```',
        steps: [
          { label: 'Step 1: Three stages, one flowing pipeline', text: 'The Readable pulls chunks of at most ~64 KB from the disk; the **Transform** sits between the two ends — it implements both the read side and the write side, converting each chunk it receives; the Writable pushes them to the output file. At any instant the whole pipeline holds a handful of chunks, whether `in.txt` is 6 KB or 6 GB.' },
          { label: 'Step 2: The transform contract', text: 'For every incoming `chunk`, `transform(chunk, encoding, callback)` runs: do the work (here — decode as UTF-8, uppercase, pass the string along), then call `callback(null, output)` to push the result downstream. Calling `callback(err)` instead rejects the pipeline; passing nothing (`callback()` with no second argument) drops the chunk — that is how a filter stream works.' },
          { label: 'Step 3: pipeline, not pipe, for production', text: '`await pipeline(read, transform, write)` resolves when every stream has ended cleanly — and if **any** stage errors (disk full, permissions), it destroys all three and rejects the promise. The bare `pipe()` equivalent would leak the open file descriptors and hang forever on a mid-copy error (the reason the promise-returning `pipeline` exists).' },
          { label: 'Step 4: Backpressure keeps memory flat', text: 'If the disk writing `out.txt` falls behind, the Writable’s `write()` returns false, the Transform pauses, and the Readable stops pulling from the source until the `"drain"` event — the consumer’s pace throttles the producer automatically. Without this handshake, a fast SSD feeding a slow network sink would buffer the entire file in memory; with it, the copy runs at exactly the sink’s speed in constant memory.' },
          { label: 'Step 5: A caveat worth knowing', text: '`chunk.toString("utf8")` assumes no character straddles a chunk boundary — true for pure ASCII (the uppercase example), not for arbitrary text: a 2-byte `é` split across chunks would corrupt exactly like the hex example above. The general fix is the leftover-tail pattern of Section 13.4 (or `new StringDecoder`); in real code, `zlib.createGzip()`-style binary Transforms are safe by construction because they never decode to text.' }
        ],
        result: 'A copy whose output is the input uppercased, executed in ~64 KB chunks with constant memory, correct cleanup on failure, and automatic throttling by the slowest stage.'
      }
    ],
    keyTakeaways: [
      'Buffer is Node’s byte container — a Uint8Array (Section 11.2) — created with `Buffer.from(...)`/`Buffer.alloc(n)`, never the deprecated `new Buffer()`.',
      'UTF-8 is variable width: `Buffer.byteLength("café")` is 5, `"café".length` is 4 — byte counts and character counts are different numbers (Content-Length wants bytes).',
      '`subarray` shares memory — a view, not a copy; `Buffer.concat` is the copying combine; slicing mid-code-point corrupts text silently.',
      'EventEmitter is built-in pub/sub: synchronous, in-order listener invocation via `emit`; `once` self-removes; `removeListener` affects future emits only; >10 listeners warns.',
      'Four stream kinds — Readable, Writable, Duplex, Transform — and two consumption styles: events (`on("data")`) or `for await` (Section 13.4), which backpressures for you.',
      '`pipeline()` over `pipe()`: it propagates errors and destroys every stream in the chain; bare pipe leaks on mid-stream failure.',
      'Backpressure (write() → false, pause until drain) bounds memory to a few chunks whatever the file size — the consumer throttles the producer.'
    ],
    quiz: [
      {
        q: 'What is `Buffer.byteLength("café")` and why does it differ from `"café".length`?',
        options: [
          '4, because the string has four characters',
          '5 — é takes two UTF-8 bytes, and byteLength counts bytes, not characters',
          '5, because Buffer adds a null terminator',
          'It throws — café contains a non-ASCII character'
        ],
        answer: 1,
        explanation: 'Strings count UTF-16 code units; Buffers count bytes. UTF-8 encodes é as 0xc3 0xa9, so the byte count is 5 while the string length is 4 — the number a Content-Length header needs.'
      },
      {
        q: 'After `const b = buf.subarray(1, 3); b[0] = 0xff;` — what is in `buf`?',
        options: [
          'Unchanged — subarray copied the bytes',
          'buf[1] is now 0xff — the slice is a view sharing the parent’s memory',
          'buf is now length 2',
          'An error: Buffers are immutable'
        ],
        answer: 1,
        explanation: 'subarray is a zero-copy window: writes through the slice are writes into the parent — handy for protocol parsing, surprising if you expected a copy (use Buffer.concat or copy for that).'
      },
      {
        q: 'When does `emitter.emit("x", arg)` invoke the listeners registered with `on("x", ...)`?',
        options: [
          'On the next turn of the event loop, as microtasks',
          'In a separate thread',
          'Synchronously, immediately, in registration order — before emit returns',
          'Only once, then they are removed'
        ],
        answer: 2,
        explanation: 'emit is a synchronous fan-out on the caller’s stack: listeners run in the order registered and finish before emit returns — run-to-completion (Section 13.1), no locks needed.'
      },
      {
        q: 'A Transform stream is best described as…',
        options: [
          'A Readable that is also an EventEmitter',
          'A stream that both reads and writes, converting input chunks to output chunks',
          'A buffer that grows without limit',
          'A writable stream that never ends'
        ],
        answer: 1,
        explanation: 'Transform implements both ends: each incoming chunk goes through transform(chunk, encoding, callback), and what you pass to callback flows downstream — compression and the uppercase example both work this way.'
      },
      {
        q: 'Why is `pipeline()` preferred over `pipe()` in production code?',
        options: [
          'It is faster because it skips the event loop',
          'It propagates errors and destroys every stream in the chain when one fails; pipe leaks descriptors and hangs',
          'It reads the whole file into memory first',
          'It disables backpressure for more throughput'
        ],
        answer: 1,
        explanation: 'pipe wires flows but is silent on failure — an error mid-copy leaves the destination open and the program hanging; pipeline cleans up all stages and reports the error through a callback or a rejected promise.'
      },
      {
        q: 'A Writable’s write() has returned false. What should the Readable feeding it do?',
        options: [
          'Keep reading — the data will buffer somewhere safe',
          'Pause producing until the Writable emits "drain"',
          'Destroy the stream immediately',
          'Double the chunk size to catch up'
        ],
        answer: 1,
        explanation: 'false means the sink is full: stop, let it flush, resume on drain. That handshake is backpressure — the reason a pipeline of streams runs in constant memory.'
      }
    ]
  },

  // ---------------------------------------------------------------- 16.4
  {
    sectionId: 'js-ch16-s4',
    readingTime: 7,
    intro: 'Between its APIs, Node lets a program look at **itself and its machine**: which directory it runs in, how much CPU and memory the host has, what the load average says, and precisely how long a piece of code took. These are the `process` details and the `os` module — small APIs, but they are how CLIs find their context, how dashboards report health, and how benchmarks avoid the classic wall-clock trap.',
    objectives: [
      'Query the working directory, process identity and environment with process',
      'Measure elapsed time correctly with process.hrtime.bigint() — and explain why Date.now() is the wrong clock for durations',
      'Read process.memoryUsage() and the os module (cpus, totalmem, loadavg) to report host health',
      'Handle SIGINT/SIGTERM to shut servers down gracefully'
    ],
    concepts: [
      {
        term: 'Where am I: cwd, pid, argv-adjacent facts',
        kind: 'method',
        statement: '`process.cwd()` returns the current working directory (where the shell started you — not where your script lives) and `process.chdir(dir)` changes it; `process.pid` is the process id; `__dirname`/`import.meta.url` (Chapter 10) locate your own module instead.',
        detail: '\n```js\nprocess.cwd()    // "/home/ada/project" — from the shell\nprocess.chdir("/tmp");\nprocess.pid       // 4711\n```\nThe cwd/pid pair is process identity in the OSC Chapter 3 sense: your program is one address space among many, and these are its coordinates.'
      },
      {
        term: 'hrtime: a stopwatch, not a clock',
        kind: 'method',
        statement: '`process.hrtime.bigint()` returns a **monotonic** nanosecond count as a BigInt — it never goes backwards and is immune to NTP adjustments, leap seconds or manual clock changes. Take it twice and subtract: the difference is elapsed time. `Date.now()` is a **wall clock** — fine for timestamps, wrong for durations.',
        detail: '\n```js\nconst t0 = process.hrtime.bigint();\ndoWork();\nconst t1 = process.hrtime.bigint();\nconst ms = Number(t1 - t0) / 1e6;   // BigInt subtract, convert once\n```\nA wall-clock duration can even be **negative** if the clock steps backward mid-measurement — the monotonic stopwatch cannot.'
      },
      {
        term: 'memoryUsage: heap, rss and external',
        kind: 'method',
        statement: '`process.memoryUsage()` reports four numbers in bytes: **heapUsed** (JavaScript objects currently live), **heapTotal** (the V8 heap including free space), **rss** (resident set size — all OS pages, including the interpreter and code), and **external** (memory outside the V8 heap, notably Buffers).',
        detail: 'rss is what `ps` and container limits see; heapUsed is what GC pressure is about. A server holding many large Buffers can be near its rss limit with a modest heapUsed — the split tells you which side to tune. Numbers move with garbage collection timing, so treat them as a snapshot, not an accounting ledger (compare OSC Chapter 9’s view of what a process’s memory actually is).'
      },
      {
        term: 'The os module: the machine’s dashboard',
        kind: 'method',
        statement: '`os.cpus()` lists cores (and per-core load), `os.totalmem()`/`os.freemem()` report RAM, `os.loadavg()` the 1/5/15-minute load averages, `os.uptime()` the machine’s, `os.hostname()`, `os.platform()`, `os.arch()`, and `os.EOL` the platform newline.',
        detail: '\n```js\nconst os = require("node:os");\nos.cpus().length      // 8 — also the default libuv thread-pool size\nos.loadavg()         // [1.24, 0.98, 0.87] — Linux/macOS; [0,0,0] on Windows\nos.totalmem()        // 17179869184\n```\nLoad average is OSC Chapter 5 in one number — the run-queue length smoothed over time; sustained values above `cpus().length` mean more runnable work than cores.'
      },
      {
        term: 'Signals and graceful shutdown',
        kind: 'insight',
        statement: 'The OS can send a process **signals**: SIGINT (Ctrl-C) and SIGTERM (the default kill) both terminate Node by default, but `process.on("SIGINT", handler)` intercepts them — the hook for closing servers, flushing logs and disconnecting cleanly before exiting.',
        detail: '\n```js\nprocess.on("SIGTERM", () => {\n  server.close(() => process.exit(0));  // stop accepting, finish in-flight\n});\n```\nSIGKILL cannot be caught — the one to accept as unpreventable (OSC Chapter 3’s wait/exit machinery delivering the final word).'
      }
    ],
    examples: [
      {
        title: 'Timing a function the right way',
        problem: 'Measure how long it takes to sort 300,000 random numbers, using `hrtime.bigint()` — and see why `Date.now()` gives untrustworthy answers for durations.\n```js\nfunction work() {\n  const xs = [];\n  for (let i = 0; i < 300_000; i++) xs.push(Math.random());\n  xs.sort((a, b) => a - b);\n  return xs;\n}\n\nconst t0 = process.hrtime.bigint();   // monotonic, nanoseconds\nconst result = work();\nconst t1 = process.hrtime.bigint();\n\nconst ms = Number(t1 - t0) / 1e6;\nconsole.log(`sorted ${result.length} numbers in ${ms.toFixed(1)} ms`);\nconsole.log(`heap now ${Math.round(process.memoryUsage().heapUsed / 1e6)} MB`);\n```',
        steps: [
          { label: 'Step 1: Two BigInt snapshots, one subtraction', text: '`hrtime.bigint()` returns an opaque BigInt count of nanoseconds since an arbitrary origin. Subtracting the two snapshots is **exact** integer arithmetic — no floating-point rounding over long spans — and `Number(...)` converts only the (small) difference, once, to milliseconds.' },
          { label: 'Step 2: Why not Date.now()', text: '`Date.now()` reads the wall clock, which the OS or an NTP daemon may step **backward or forward** between the two calls — durations come out wrong or even negative. The monotonic stopwatch ticks only forward, tied to no calendar at all. (For the same reason, monotonic clocks are what kernels use for scheduling decisions — OSC Chapter 5.)' },
          { label: 'Step 3: What the measurement includes', text: 'Because JavaScript runs to completion (Section 13.1), nothing interleaves with `work()` — the stopwatch covers the whole sort, not fragments of it. What it cannot cover is the first-run effect: V8 compiles and optimizes as it warms up, so a second measurement is typically faster. Report the **minimum of several runs** for stable numbers.' },
          { label: 'Step 4: Pair timing with memory', text: 'The second line snapshots `heapUsed` after the sort — 300k boxed doubles plus the array is on the order of a few MB, visible in the delta. Seeing time **and** memory together is the profiling habit: an O(n log n) sort and an accidental O(n²) both run; the heap is often what distinguishes them.' }
        ],
        result: 'A trustworthy line like `sorted 300000 numbers in 48.3 ms` plus a heap reading — measured on a clock that cannot lie about direction, exact to the nanosecond.'
      },
      {
        title: 'A one-screen host status command',
        problem: 'Combine `os` and `process.memoryUsage()` into a status command that prints what an operator or dashboard wants at a glance.\n```js\nconst os = require("node:os");\nconst m = process.memoryUsage();\n\nconsole.log(`host      : ${os.hostname()} (${os.platform()} ${os.arch()})`);\nconsole.log(`cores     : ${os.cpus().length}`);\nconsole.log(`uptime    : ${Math.round(os.uptime() / 3600)} h`);\nconsole.log(`load 1m   : ${os.loadavg()[0].toFixed(2)}`);\nconsole.log(`memory    : ${(os.freemem() / 1e9).toFixed(1)} GB free of ${(os.totalmem() / 1e9).toFixed(1)} GB`);\nconsole.log(`process   : pid ${process.pid}, heap ${Math.round(m.heapUsed / 1e6)} MB, rss ${Math.round(m.rss / 1e6)} MB`);\n```',
        steps: [
          { label: 'Step 1: Identity and capacity', text: 'Hostname, platform and architecture identify the box; `cpus().length` is how much parallelism exists — and, usefully, also the **default size of libuv’s thread pool**, so it gates how many simultaneous blocking file/crypto operations one process can have in flight.' },
          { label: 'Step 2: Read the load with the scheduler in mind', text: 'Load average counts runnable + uninterruptible tasks averaged over 1, 5 and 15 minutes. Dividing by cores gives utilization-per-core: a load of 6.4 on 8 cores is busy-but-healthy; on 2 cores it means a run queue (OSC Chapter 5) four deep — requests are waiting. On Windows it is always `[0, 0, 0]`; use `cpus()` times there instead.' },
          { label: 'Step 3: Separate free memory from process memory', text: '`os.freemem()/totalmem()` describe the **machine** — is swapping near? `memoryUsage()` describes **this process** — is our heap the problem? A leak shows up as heapUsed and rss climbing together across restarts; a big external means Buffers, not objects. One number answers where; the other answers who.' },
          { label: 'Step 4: Where such a command lives', text: 'This is the body of every `/health` endpoint, `docker inspect`-style probe and ops dashboard tile: run it in-process (a periodic report or an HTTP route) rather than a shell alias, and the same calls stream into monitoring — the concepts transfer directly to Kubernetes readiness probes (OSC Chapter 3’s services view).' }
        ],
        result: 'Eight readable lines — machine identity, cores, load, free memory, and the process’s own pid/heap/rss — the minimum viable health report, with no dependency beyond Node built-ins.'
      }
    ],
    keyTakeaways: [
      '`process.cwd()` is where the shell started you (chdir changes it); `process.pid` is your process id; `import.meta.url`/`__dirname` locate your module file.',
      'Use `hrtime.bigint()` for durations — monotonic and nanosecond-exact; `Date.now()` is a wall clock that can step, making durations wrong or negative.',
      'Measure the difference of two BigInts, convert to ms once; report the min of several runs — V8 warms up.',
      '`memoryUsage()`: heapUsed = live JS objects, rss = total OS pages, external = Buffers off-heap — rss is what container limits enforce.',
      'The os module gives the host: `cpus().length` (also libuv’s default pool size), totalmem/freemem, loadavg (run-queue depth — OSC Ch 5), platform, EOL.',
      'SIGINT/SIGTERM are catchable with `process.on(...)` — the graceful-shutdown hook; SIGKILL is not.'
    ],
    quiz: [
      {
        q: 'Why is Date.now() the wrong tool for measuring how long an operation took?',
        options: [
          'It only has second resolution',
          'It reads the wall clock, which can be stepped forward or back by the OS — durations can be wrong or negative',
          'It returns a string',
          'It is disabled inside async functions'
        ],
        answer: 1,
        explanation: 'Durations need a monotonic source: process.hrtime.bigint() only ever moves forward, making the subtraction trustworthy — the same property kernels rely on for scheduling (OSC Ch 5).'
      },
      {
        q: 'A dashboard shows heapUsed holding steady but rss climbing steadily. What is a likely cause?',
        options: [
          'A leak of JavaScript objects',
          'Growing off-heap memory — e.g. Buffers — counted in rss and external, not the V8 heap',
          'The process is swapping in its own code pages',
          'heapUsed is always smaller than rss, so nothing is wrong'
        ],
        answer: 1,
        explanation: 'rss includes everything the OS maps for the process; external (Buffers, typed arrays) growing shows exactly this signature — steady heap, climbing rss — and points the fix away from GC.'
      },
      {
        q: 'On an 8-core machine, which 1-minute load average most suggests a run queue is forming?',
        options: [
          '0.75',
          '2.00',
          '9.50',
          '0.00'
        ],
        answer: 2,
        explanation: 'Load above the core count means more runnable work than processors — roughly 1.5 tasks waiting per core at 9.50, the classic queueing delay of OSC Chapter 5 (and why CPU scheduling exists).'
      },
      {
        q: 'What does `process.on("SIGTERM", handler)` enable?',
        options: [
          'Sending signals to child processes',
          'Intercepting the termination signal to close servers and flush state before exiting',
          'Making the process unkillable',
          'Reordering the event loop'
        ],
        answer: 1,
        explanation: 'SIGTERM (and Ctrl-C’s SIGINT) are catchable: the handler runs, so the process can finish in-flight work and exit cleanly — SIGKILL, by contrast, cannot be caught.'
      }
    ]
  },

  // ---------------------------------------------------------------- 16.5
  {
    sectionId: 'js-ch16-s5',
    readingTime: 9,
    intro: 'The `fs` module is Node’s workhorse: it reads, writes, appends, stats, creates, removes and **walks** files and directories — in all three dialects of Section 16.2 (sync, callback, promise). Its APIs are a perfect laboratory for everything this chapter has built: streams for large files, Buffers for bytes, and `await` for readable sequencing. This section works the daily driver operations and finishes with the recursive directory walk that ties them together.',
    objectives: [
      'Choose among the three fs dialects — sync, callback, promise — and know when each is appropriate',
      'Inspect files with stat: size, mtime, file-type predicates',
      'Create, write and append files, understanding overwrite semantics and recursive mkdir',
      'Build a recursive directory walk with readdir and Dirent',
      'Watch files for changes with fs.watch'
    ],
    concepts: [
      {
        term: 'Three dialects of every fs operation',
        kind: 'method',
        statement: 'Each file operation exists in three spellings: `fs.readFileSync(path)` (blocks the event loop until done), `fs.readFile(path, cb)` (error-first callback), and `fsPromises.readFile(path)` (awaitable promise). All three read the same bytes — the choice is about **when** and **how failure arrives**.',
        detail: '\n```js\nconst fs = require("node:fs");\nconst fsp = require("node:fs/promises");\n\nconst a = fs.readFileSync("cfg.json", "utf8");            // startup only\nfs.readFile("cfg.json", "utf8", (err, t) => { /* ... */ }); // legacy\nconst c = await fsp.readFile("cfg.json", "utf8");          // modern default\n```\nThe sync form is acceptable exactly where blocking is harmless: loading config once at boot, or a one-shot build script. In a server, it stalls every other request (Section 16.1’s scheduler, starved).'
      },
      {
        term: 'stat: ask before you act',
        kind: 'method',
        statement: '`fsPromises.stat(path)` returns a **Stats** object describing the filesystem entry: `size` in bytes, `mtime` (modification time), and type predicates `isFile()`, `isDirectory()`, `isSymbolicLink()`. It reads **metadata**, not content — no bytes of the file are read.',
        detail: '\n```js\nconst st = await fsp.stat("report.pdf");\nconsole.log(st.size);                 // 2841103 — bytes\nconsole.log(st.mtime.toISOString());   // "2025-10-09T12:00:42.000Z"\nconsole.log(st.isFile());              // true\n```\nstat ENOENTs (throws) for missing paths — the idiom for existence checks (never “open and look for an error” unless you are about to use the file anyway: TOCTOU — time-of-check-to-time-of-use — says just open it).'
      },
      {
        term: 'readFile versus createReadStream',
        kind: 'insight',
        statement: '`readFile` waits for and returns the **entire file** as one Buffer (or string with an encoding) — fine for configs and templates, wrong for gigabytes. `createReadStream` returns a **Readable stream** (Section 16.3) that delivers ~64 KB chunks with backpressure — the way to copy, hash or upload any file regardless of size.',
        detail: 'The rule of thumb from Section 16.3: if you would not want the whole thing in a string in memory, it is a stream. `for await (const chunk of createReadStream(p))` (Section 13.4) is the readable consumption form; `pipeline()` is the copy form.'
      },
      {
        term: 'writeFile, appendFile and friends',
        kind: 'method',
        statement: '`writeFile(path, data)` **creates or truncates** — it replaces the file’s entire content, so a stray write can erase it. `appendFile(path, data)` only ever adds to the end (creating if absent). `mkdir(path, { recursive: true })` creates intermediate directories like `mkdir -p`; `rm(path, { recursive: true, force: true })` removes files or whole trees.',
        detail: '\n```js\nawait fsp.writeFile("app.log", "session start\\n");   // overwrite!\nawait fsp.appendFile("app.log", `tick ${Date.now()}\\n`);\nawait fsp.mkdir("data/2025/10", { recursive: true }); // all levels as needed\nawait fsp.rm("data/2024", { recursive: true, force: true });\n```\nAll accept string **or** Buffer data — a Buffer writes exactly those bytes with no encoding surprises (Section 16.3).'
      },
      {
        term: 'readdir and Dirent: listing without stat-ing',
        kind: 'method',
        statement: '`fsPromises.readdir(dir)` returns names as strings; `readdir(dir, { withFileTypes: true })` returns **Dirent** objects that already know their type — `entry.isDirectory()`, `entry.isFile()` — from the single directory read, avoiding one extra `stat` system call per entry.',
        detail: '\n```js\nfor (const e of await fsp.readdir("src", { withFileTypes: true })) {\n  if (e.isDirectory()) { /* recurse */ }\n  else if (e.isFile()) { /* collect */ }\n}\n```\nDirent is the enabler of the walk example below: type information arrives with the listing itself — one syscall per directory, not two per entry.'
      },
      {
        term: 'watch: react to the filesystem',
        kind: 'method',
        statement: '`fs.watch(dir)` returns an EventEmitter that fires `"change"` events when files in the directory change (`eventType` of `"change"` or `"rename"`, plus the filename). Under the hood it uses the OS’s own notification — inotify on Linux, FSEvents on macOS, ReadDirectoryChangesW on Windows.',
        detail: 'Events can coalesce or arrive slightly out of order, and editors firing several events per save — so watchers usually debounce before reacting. This is exactly the mechanism under dev-server hot reload (Section 17.3’s HMR): save a file, watch fires, the server recompiles just that module.'
      }
    ],
    examples: [
      {
        title: 'An append-only log with a stat report',
        problem: 'Create a log file, append timestamped lines to it, then report its size and modification time using `stat` — without ever reading the content.\n```js\nconst fsp = require("node:fs/promises");\nconst path = require("node:path");\n\nasync function main() {\n  const log = path.join(process.cwd(), "app.log");\n\n  await fsp.writeFile(log, "session start\\n");          // create (or reset)\n  await fsp.appendFile(log, `tick ${Date.now()}\\n`);\n  await fsp.appendFile(log, `tock ${Date.now()}\\n`);\n\n  const st = await fsp.stat(log);\n  console.log(`${log}: ${st.size} bytes, modified ${st.mtime.toISOString()}`);\n  console.log(await fsp.readFile(log, "utf8"));\n}\nmain().catch(console.error);\n```',
        steps: [
          { label: 'Step 1: writeFile truncates — say it out loud', text: 'Because `writeFile` replaces the whole file, `"session start\\n"` here is a deliberate reset: if `app.log` existed with history, this line erases it. Writing a log line you **must keep** is `appendFile` — that is the next call. The pair is the difference between “make the file contain X” and “add X to the file”.' },
          { label: 'Step 2: appendFile creates-if-absent', text: 'Each append opens, seeks to the end, writes and closes — so the two `tick`/`tock` lines land after `"session start"`. Template-literal timestamps make the content self-describing (and they are the values you would correlate with the mtime in step 3).' },
          { label: 'Step 3: stat reads the label, not the contents', text: '`stat` returns metadata the filesystem already keeps: `st.size` is 53 bytes here (count the characters, newlines included), `st.mtime` updates on the last write. No file content crosses into memory — the right tool when a dashboard needs “how big, how stale”, and the only tool that answers for a file too big to read.' },
          { label: 'Step 4: Confirm, then generalize', text: 'The final `readFile` (with `"utf8"`, so a string not a Buffer) is proof the file holds what we intended. The operational shape — append on events, stat on reports, read only when the content itself is needed — scales to real logging; for high-volume logging, wrap the destination in `createWriteStream` with `{ flags: "a" }` so the descriptor stays open instead of reopening per line.' }
        ],
        result: 'Three lines in `app.log`, then: `…/app.log: 53 bytes, modified 2025-10-09T12:00:42.011Z` — and the content echoes back, appended in order, timestamps intact.'
      },
      {
        title: 'A recursive directory walk',
        problem: 'List every file under a directory tree, in sorted order, using `readdir` with Dirents and recursion — the engine inside every “find stale files”, “migrate all modules” and “count lines of code” tool.\n```js\nconst fsp = require("node:fs/promises");\nconst path = require("node:path");\n\nasync function walk(dir) {\n  const out = [];\n  for (const entry of await fsp.readdir(dir, { withFileTypes: true })) {\n    const full = path.join(dir, entry.name);\n    if (entry.isDirectory()) {\n      out.push(...(await walk(full)));       // descend\n    } else if (entry.isFile()) {\n      out.push(full);\n    }                                        // sockets, FIFOs: ignored\n  }\n  return out.sort();\n}\n\nwalk(process.argv[2] || ".")\n  .then((files) => {\n    console.log(files.join("\\n"));\n    console.log(`${files.length} files`);\n  }, console.error);\n```',
        steps: [
          { label: 'Step 1: One readdir per directory, type included', text: 'Each call reads one directory’s entries and their types in a single syscall — `{ withFileTypes: true }` is what makes the walk cheap. Without it, deciding whether `full` is a directory costs an extra `stat` **per entry**, doubling system calls for big trees.' },
          { label: 'Step 2: path.join, never string concatenation', text: '`path.join("src", "lib", "util.js")` inserts the right separator for the platform (`\\` on Windows) and normalizes `.`/`..` segments. Hand-built `dir + "/" + name` produces mixed-separator paths that break on Windows and defeat deduplication — the bug class `path` exists to erase.' },
          { label: 'Step 3: Recursion is depth-first', text: 'A subdirectory is fully walked (awaited!) before the next sibling is listed — so directory bookkeeping happens in stack order. The `await` inside the loop keeps one directory read in flight at a time; for wide trees, `Promise.all(entries.filter(isDir).map(walk))` walks subdirectories concurrently — the same sequential-versus-parallel choice as Section 16.2, applied to syscalls.' },
          { label: 'Step 4: Filter deliberately', text: 'The walk collects only `isFile()` and recurses only `isDirectory()` — symlinks, sockets and devices are neither, so they are skipped (a symlinked cycle cannot loop the walk). Real tools add filters: skip `node_modules`, match extensions, respect `.gitignore` — each is one predicate on `entry.name` or `full`.' },
          { label: 'Step 5: Sort last, at the top', text: 'Sorting inside recursion would sort each directory’s fragment; sorting the final array gives the whole tree in one lexicographic order — deterministic output, which is what tests and diffs want. The `.then(files => ..., console.error)` shape is the CLI boundary idiom from Section 16.1: errors (permission denied on a subdirectory) print and the process exits non-zero.' }
        ],
        result: 'For a `src` containing `main.js`, `lib/a.js`, `lib/b.js`, `lib/util/c.js`: four sorted paths and `4 files` — the skeleton of every file-processing tool, ~15 lines with no dependencies.'
      }
    ],
    keyTakeaways: [
      'fs operations come in three dialects — sync (startup only), callback (legacy), `fs/promises` (modern default) — reading the same bytes differently.',
      '`stat` gives metadata without content: size in bytes, mtime, and isFile()/isDirectory() predicates; a missing path throws ENOENT.',
      '`readFile` is whole-file; `createReadStream` is chunks — if you would not hold it in a string, stream it (Section 16.3).',
      '`writeFile` truncates — “make the file contain X”; `appendFile` only adds — “add X to the file”; mkdir recursive is `mkdir -p`; rm recursive+force is `rm -rf`.',
      'readdir with `{ withFileTypes: true }` returns Dirents — type arrives with the listing, one syscall per directory instead of two per entry.',
      'path.join builds platform-correct paths; never concatenate separators by hand.',
      'fs.watch rides the OS’s change notification — the mechanism beneath dev-server hot reload (Section 17.3).'
    ],
    quiz: [
      {
        q: 'What does `await fsp.writeFile("data.txt", "hello")` do if data.txt already exists with 2 MB of content?',
        options: [
          'Appends "hello" to the end',
          'Fails with EEXIST',
          'Truncates the file to exactly "hello" — the previous content is gone',
          'Creates data.txt.bak and then writes'
        ],
        answer: 2,
        explanation: 'writeFile is create-or-truncate: the file afterwards contains exactly the bytes written. Preserving history is appendFile’s job — knowing which one you are calling is the whole game.'
      },
      {
        q: 'Why pass `{ withFileTypes: true }` to readdir when walking a tree?',
        options: [
          'It sorts the entries',
          'The returned Dirents carry isDirectory()/isFile() from the listing itself — avoiding an extra stat syscall per entry',
          'It makes readdir recursive',
          'It returns file contents as well as names'
        ],
        answer: 1,
        explanation: 'Plain readdir returns names only, and classifying each would cost one stat per entry; Dirents arrive with the type embedded, halving the system calls a walk makes.'
      },
      {
        q: 'Which mkdir call creates data/2025/10 in one step, even if data does not exist yet?',
        options: [
          'await fsp.mkdir("data/2025/10")',
          'await fsp.mkdir("data/2025/10", { recursive: true })',
          'await fsp.mkdirp("data/2025/10")',
          'await fsp.createDir("data/2025/10", true)'
        ],
        answer: 1,
        explanation: 'recursive: true creates every missing level — the mkdir -p semantics; the plain form ENOENTs as soon as any parent is missing.'
      },
      {
        q: 'You need to know a 4 GB file’s size and last-modified time. What is the right call?',
        options: [
          'await fsp.readFile(path) and check the result’s .length',
          'await fsp.stat(path) — metadata only, no content read',
          'fs.watch(path)',
          'await fsp.appendFile(path, "")'
        ],
        answer: 1,
        explanation: 'stat answers from the directory entry: size and mtime without moving a byte of the file — reading 4 GB to learn two numbers is the anti-pattern the API split exists to prevent.'
      },
      // Placement-pattern: Node non-blocking I/O — sync versus callback reads (original)
      {
        q: "A Node server must read a large log file without stalling its other connections. Two readings are proposed:\n```js\n// P: const data = fs.readFileSync('app.log', 'utf8');\n// Q: fs.readFile('app.log', 'utf8', (err, data) => { /* use data */ });\n```\nWhich approach matches the platform design?",
        options: ["P, because synchronous reads use less memory", "Both behave identically, because V8 compiles them the same way", "Q, because it returns to the event loop while the system reads, while P blocks the only thread until the whole file arrives", "P, because callbacks cannot report read errors"],
        answer: 2,
        explanation: "Step 1: The data given is one blocking file read and one callback-driven file read on a single-threaded server. Step 2: The governing rule is the event-driven design: JavaScript runs on one thread, blocking calls freeze every connection until they return, and non-blocking calls delegate waiting to the system while the loop serves other events. Step 3: Tracing both paths, P holds the thread from call to full delivery so no request handler runs meanwhile, while Q registers interest, yields the thread immediately, and resumes only through its callback with `err` reporting failures. Step 4: The distractors fail because memory use is not the issue, the two forms schedule entirely differently, and the callback's first parameter exists exactly to report errors. Step 5: Therefore the callback form is the matching choice for a live server."
      }
    ]
  },

  // ---------------------------------------------------------------- 16.6
  {
    sectionId: 'js-ch16-s6',
    readingTime: 10,
    intro: 'The `http` module turns Node into a web server with one function call: **every request is an event**, and the request and response objects are **streams** — so everything from Chapter 13 and Section 16.3 composes directly. On the client side, Node ships the same global `fetch` the browser has (Section 15.10), promise-native and awaitable. This section builds a complete, framework-free JSON server — routing, body reading, status codes — and then the client that talks to it.',
    objectives: [
      'Write an HTTP server with http.createServer and route on method and pathname',
      'Read request bodies by treating req as a readable stream',
      'Send correct status codes, headers and JSON bodies',
      'Use global fetch as a client: res.ok, res.json(), POST with headers and bodies',
      'Add timeouts and aborts to client requests'
    ],
    concepts: [
      {
        term: 'createServer: requests as events',
        kind: 'method',
        statement: '`http.createServer(handler)` returns a server that emits the handler for every incoming request; the handler receives `(req, res)`. `req` (an IncomingMessage) is a **Readable stream** already parsed into `req.method`, `req.url` and `req.headers`; `res` (a ServerResponse) is a **Writable stream** with `writeHead`, `setHeader`, `write` and `end`. `server.listen(port)` starts accepting.',
        detail: '\n```js\nconst http = require("node:http");\n\nhttp.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("hello");\n}).listen(3000);\n```\nBecause each request is one event-loop unit, run-to-completion applies: a handler that computes for a second stalls every other request — the thread model of Section 16.1, now with HTTP stakes.'
      },
      {
        term: 'Routing: a table keyed by method and path',
        kind: 'method',
        statement: 'A router is a dispatch on `(req.method, pathname)` — parse `req.url` with `new URL(req.url, "http://x")` to separate `pathname` from `search` (query string), then match. Full frameworks (Express, Fastify) are this table plus middleware and path patterns — nothing more magical.',
        detail: '\n```js\nconst { pathname, searchParams } = new URL(req.url, "http://x");\nif (req.method === "GET" && pathname === "/api/time") { /* ... */ }\n```\nMethod + pathname is the pair; URL parsing gives query parameters for free (`searchParams.get("q")` — Section 11.6’s URL API).'
      },
      {
        term: 'Reading a request body: req is a stream',
        kind: 'method',
        statement: 'A POST body arrives as **chunks on the req stream** — never assume one chunk, never assume a size. Collect them into a Buffer with the data/end events (or `for await`), then parse. The Section 13.4 leftovers matter if you parse incrementally; for whole-body JSON, collect **then** parse once.',
        detail: '\n```js\nfunction readBody(req) {\n  return new Promise((resolve, reject) => {\n    const chunks = [];\n    req.on("data", (c) => chunks.push(c));   // c is a Buffer (Section 16.3)\n    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));\n    req.on("error", reject);\n  });\n}\nconst text = await readBody(req);\n```\nWrapping events in a promise is Section 13.2’s promisify pattern — it lets the handler below stay a flat async function. Add a size cap before concat: an unbounded body is an unbounded Buffer (memory as a denial-of-service).'
      },
      {
        term: 'Writing responses: status, headers, end',
        kind: 'method',
        statement: '`res.writeHead(status, headersObject)` sets status and headers **once, before any write**; `res.end(body)` sends the final chunk and finishes the response. `res.statusCode = 404` plus `res.setHeader(...)` are the incremental alternative. Setting `Content-Type: application/json` before sending `JSON.stringify(...)` is the whole JSON contract.',
        detail: 'Because `res` is a Writable, it accepts streams directly — `pipeline(createReadStream(file), res)` serves a file in chunks with backpressure (Section 16.3), which is how a static file server fits in five lines. Common statuses: 200 OK, 201 Created, 400 bad input, 404 no route, 500 you failed.'
      },
      {
        term: 'fetch: the same client as the browser',
        kind: 'method',
        statement: 'Node 18+ exposes the WHATWG `fetch` (Section 15.10) as a global: `const res = await fetch(url, init)` sends the request; `res.ok` is true for 2xx, `res.status` the code; `await res.json()` (or `.text()`, `.arrayBuffer()`) returns a promise because **the body streams in separately** from the headers.',
        detail: '\n```js\nconst res = await fetch("https://api.example.com/users/7");\nif (!res.ok) throw new Error(`HTTP ${res.status}`);\nconst user = await res.json();   // second await — body, not headers\n```\nPOSTing JSON: `fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })` — exactly the browser spelling, so client code is portable between hosts.'
      },
      {
        term: 'Timeouts: race the request against a clock',
        kind: 'insight',
        statement: 'A hung server must not hang your client: create an `AbortController`, wire its `signal` into `fetch`, and a `setTimeout` that calls `controller.abort()` — fetch then rejects with an AbortError. This is Section 13.2’s **race** pattern, installed as a safety net under every network call.',
        detail: '\n```js\nconst ac = new AbortController();\nconst timer = setTimeout(() => ac.abort(), 5000);\ntry {\n  const res = await fetch(url, { signal: ac.signal });\n  return await res.json();\n} finally {\n  clearTimeout(timer);\n}\n```\nFive seconds of silence, and the promise rejects instead of the caller waiting forever — timeouts belong to the caller’s policy, not the network’s mood.'
      }
    ],
    examples: [
      {
        title: 'A complete tiny JSON server',
        problem: 'Build a framework-free JSON API server: `GET /api/time` returns the current time; `POST /api/echo` reads the JSON request body and echoes it back with a byte count; anything else gets a 404 — all with correct headers and async/await throughout.\n```js\nconst http = require("node:http");\n\n// req is a Readable stream — collect its body (Section 16.3 + 13.2)\nfunction readBody(req) {\n  return new Promise((resolve, reject) => {\n    const chunks = [];\n    req.on("data", (c) => chunks.push(c));\n    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));\n    req.on("error", reject);\n  });\n}\n\nconst server = http.createServer(async (req, res) => {\n  const { pathname } = new URL(req.url, "http://localhost");\n\n  if (req.method === "GET" && pathname === "/api/time") {\n    const body = JSON.stringify({ iso: new Date().toISOString() });\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(body);\n    return;\n  }\n\n  if (req.method === "POST" && pathname === "/api/echo") {\n    const text = await readBody(req);\n    let json = null;\n    try { json = JSON.parse(text); } catch { /* fall through to 400 */ }\n    if (json === null) {\n      res.writeHead(400, { "Content-Type": "application/json" });\n      res.end(JSON.stringify({ error: "body is not valid JSON" }));\n      return;\n    }\n    const body = JSON.stringify({ youSent: json, bytes: Buffer.byteLength(text) });\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(body);\n    return;\n  }\n\n  res.writeHead(404, { "Content-Type": "application/json" });\n  res.end(JSON.stringify({ error: `no route: ${req.method} ${pathname}` }));\n});\n\nserver.listen(3000, () => console.log("JSON API on http://localhost:3000"));\n```',
        steps: [
          { label: 'Step 1: One handler, two stream objects', text: 'Each request invokes the async handler with the two streams: read facts off `req` (`method`, `url` — already parsed by Node, no socket work), write the answer through `res`. Because the handler is `async`, awaits inside it suspend **only this request** — the event loop keeps serving others (Section 16.2’s model at HTTP scale).' },
          { label: 'Step 2: Routing is method + pathname', text: 'Each route is a guard on the `(method, pathname)` pair, with `return` after each response so exactly one branch ever writes. `new URL(req.url, "http://localhost")` splits the URL — the second argument is a base for a relative request-target, and buys query access (`searchParams`) for free. Unmatched pairs fall to the 404 tail — the default case of the routing table.' },
          { label: 'Step 3: Read the body before parsing it', text: 'A POST body is not an argument — it is **a stream of chunks** arriving after the headers. `readBody` wraps the data/end/error events into a promise (Chapter 13.2’s pattern), concatenates the Buffer chunks, and decodes once. Then, and only then, `JSON.parse` — parsing per-chunk would split records across boundaries (Section 13.4’s lesson, binary edition).' },
          { label: 'Step 4: Respond with intent', text: 'Success is 200 with `Content-Type: application/json` and a `JSON.stringify`ed body; malformed input is a 400 with a JSON error — **machine-readable failure**, the contract that makes APIs debuggable. Note `Buffer.byteLength(text)` for the byte count: the byte/string distinction of Section 16.3, exactly where a Content-Length would need it. `writeHead` comes before any body write — headers lead, always.' },
          { label: 'Step 5: Exercise it with curl', text: '\n```js\n// node server.js\n//   JSON API on http://localhost:3000\n\n// curl http://localhost:3000/api/time\n//   {"iso":"2025-10-09T12:00:42.011Z"}\n\n// curl -X POST -H "Content-Type: application/json" -d \\"{ \\"a\\": 1, \\"b\\": [2, 3] }\\" http://localhost:3000/api/echo\n//   {"youSent":{"a":1,"b":[2,3]},"bytes":22}\n\n// curl -X POST -d "not json" http://localhost:3000/api/echo\n//   {"error":"body is not valid JSON"}\n\n// curl http://localhost:3000/nope\n//   {"error":"no route: GET /nope"}\n```\nFour curls cover every branch: the GET route, a valid echo, an invalid body (400), and the 404 — this is what a smoke test script for the API does.' },
        ],
        result: 'A ~45-line server serving correct JSON with proper statuses: time on GET, echo + byte count on POST, 400 for bad JSON, 404 for unknown routes — and curl transcripts prove every branch.'
      },
      {
        title: 'The client side: a fetch wrapper with errors and a timeout',
        problem: 'Write the client half of the conversation: a `getUser` wrapper for `fetch` that treats non-2xx as an error, and a POST helper — with a 5-second abort under both.\n```js\nasync function getUser(id) {\n  const ac = new AbortController();\n  const timer = setTimeout(() => ac.abort(), 5000);\n  try {\n    const res = await fetch(`https://api.example.com/users/${id}`, {\n      signal: ac.signal,\n    });\n    if (!res.ok) {\n      throw new Error(`users/${id}: HTTP ${res.status}`);\n    }\n    return await res.json();          // second await: the body\n  } finally {\n    clearTimeout(timer);\n  }\n}\n\nasync function postScore(id, score) {\n  const res = await fetch("https://api.example.com/scores", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ id, score }),\n  });\n  if (!res.ok) throw new Error(`postScore: HTTP ${res.status}`);\n  return res.json();                  // returning the promise is fine\n}\n\ngetUser(7).then((u) => console.log(u.name));\n```',
        steps: [
          { label: 'Step 1: fetch resolves on headers, not on the body', text: 'The first `await` completes when **status and headers** have arrived — the body is still streaming. That is why `res.json()` is itself a promise, and why reading `res.status` is safe before it: checking `res.ok` right after the first await is the pattern that gives clients real error semantics (404 is not an exception to fetch — it is a successful HTTP conversation reporting a failure).' },
          { label: 'Step 2: Turn statuses into exceptions at the wrapper boundary', text: 'Raw `fetch` resolves happily for 404 and 500 — a deliberate API decision. A project wrapper is the place to convert: `if (!res.ok) throw` — so every caller downstream can `try/catch` or `await`-throw uniformly instead of re-checking statuses everywhere. One boundary, one policy (the same centralize-errors lesson as Section 16.2).' },
          { label: 'Step 3: POST is options plus a stringified body', text: 'The `init` object carries the method, the header that says what the bytes are, and the body — which is a **string**: `JSON.stringify` is the serialization step, the Content-Type the promise of what those bytes mean. The server from the previous example reads exactly this shape off its req stream — the two examples are one conversation.' },
          { label: 'Step 4: The abort races the network', text: 'Section 13.2’s race, embodied: the timer fires at 5 s and aborts, fetch rejects with an AbortError, the `finally` clears the timer on every path. Without it, a wedged server wedges your program — client-side timeouts are not pessimism, they are the difference between a degraded feature and a hung one.' },
          { label: 'Step 5: await or return — both are correct', text: '`return res.json()` returns the promise directly (no extra await needed — the caller awaits the same settlement), while `getUser` awaits to finish its error mapping first. Both styles are idiomatic inside async functions; the rule is just: never **ignore** the promise.' }
        ],
        result: '`getUser(7)` resolves to the parsed user or throws with a status-bearing message; `postScore` POSTs JSON; both survive a dead server for at most 5 seconds — a wrapper that behaves like a library function rather than a raw socket.'
      }
    ],
    keyTakeaways: [
      '`http.createServer(handler)`: each request is an event; req is a Readable stream with parsed method/url/headers, res is a Writable stream with writeHead/setHeader/end.',
      'Routing is a dispatch on (method, pathname) — parse req.url with `new URL(...)` and let an unguarded tail return the 404.',
      'Request bodies arrive as Buffer chunks: collect with data/end events (wrap in a promise) or `for await`, then parse once — and cap the size you are willing to buffer.',
      'Headers lead: writeHead before any body write; `Content-Type: application/json` plus JSON.stringify is the whole JSON contract; 400 for bad input, 404 for no route.',
      'Global fetch (Node 18+, Section 15.10) is promise-based: first await = headers/status, `res.json()` = the streaming body — and `res.ok` is where non-2xx becomes a throw.',
      'Wrap fetch at a project boundary: status-to-exception mapping plus an AbortController timeout — Section 13.2’s race as a safety net.'
    ],
    quiz: [
      {
        q: 'Inside `http.createServer(async (req, res) => ...)`, what are req and res?',
        options: [
          'Two plain objects with strings only',
          'req is a Readable stream (with parsed method/url/headers); res is a Writable stream (with writeHead/end)',
          'req is a Writable stream; res is a Readable stream',
          'Both are EventEmitters with no stream methods'
        ],
        answer: 1,
        explanation: 'The handler receives the two halves of the conversation as streams: you read the request body off req chunk by chunk, and write the response into res — every Section 16.3 tool applies.'
      },
      {
        q: 'Why must the POST body be collected before JSON.parse, rather than parsing chunk by chunk?',
        options: [
          'JSON.parse requires a Buffer',
          'A JSON document can straddle chunk boundaries — only the concatenated whole is parseable',
          'Chunks arrive in random order',
          'It is faster to parse once per chunk'
        ],
        answer: 1,
        explanation: 'Chunk boundaries are byte-accidents of transport, not record boundaries (Section 13.4): the end of one chunk may cut a JSON value in half — collect, concat, then parse once.'
      },
      {
        q: 'Right after `const res = await fetch(url)`, what has actually arrived?',
        options: [
          'The complete response body',
          'Nothing — fetch has only sent the request',
          'Status and headers; the body is still streaming and res.json() returns a promise for it',
          'A parsed JavaScript object'
        ],
        answer: 2,
        explanation: 'fetch settles on headers (so status/ok are readable immediately) and exposes the body as a separate streamed promise — the two-await rhythm of fetch clients.'
      },
      {
        q: 'Why does a robust client check `res.ok` rather than waiting for fetch to throw on a 404?',
        options: [
          'It does not — fetch rejects on 404',
          'Because fetch resolves for any received HTTP response — non-2xx is a successful transport reporting an application failure, so the wrapper converts it',
          'Because res.ok retries automatically',
          'Because exceptions are disabled in async functions'
        ],
        answer: 1,
        explanation: 'fetch models HTTP faithfully: the request succeeded at the protocol level, so the response object resolves — mapping 4xx/5xx into thrown Errors is the client wrapper’s policy (and Section 17.2 will mock exactly this shape).'
      }
    ]
  },

  // ---------------------------------------------------------------- 16.7
  {
    sectionId: 'js-ch16-s7',
    readingTime: 11,
    intro: 'When JavaScript alone is not enough — when you need a raw TCP service, a program from another process, or more CPU than one thread can give — Node reaches outside itself with three escalating tools: the **net** module (TCP servers, socket as duplex stream), **child processes** (`exec`, `spawn`, `fork` — new OS processes, with an IPC channel for fork), and **worker threads** (real threads in the same process, for CPU-bound work). Each has a clear job, and each maps onto an Operating System Concepts counterpart: Chapters 3 and 4 made concrete from JavaScript.',
    objectives: [
      'Build a TCP echo server with the net module, treating sockets as duplex streams',
      'Choose among exec, spawn and fork for child processes — buffering, streaming and IPC',
      'Exchange structured messages with a forked child over the built-in IPC channel',
      'Offload CPU-bound work to worker threads with postMessage and stay responsive',
      'Use Atomics on a SharedArrayBuffer for race-free shared counters'
    ],
    concepts: [
      {
        term: 'net: raw TCP servers',
        kind: 'method',
        statement: '`net.createServer(conn => ...)` listens on a port and hands you each connection as a **Duplex stream** (Section 16.3): read incoming bytes with `on("data")` or `for await`, write the reply with `conn.write(...)`. HTTP is a protocol on top of exactly this — `net` is the layer under it, and also the layer for databases, Redis clients and anything that speaks TCP.',
        detail: '\n```js\nconst net = require("node:net");\nnet.createServer((conn) => {\n  conn.on("data", (chunk) => conn.write(chunk));  // echo\n  conn.on("end", () => console.log("client left"));\n}).listen(5900);\n```\n`conn` also carries `remoteAddress`/`remotePort`, and errors arrive as events — destroy on error, or the socket leaks.'
      },
      {
        term: 'exec: shell commands, buffered',
        kind: 'method',
        statement: '`child_process.exec(command, callback)` runs a command **through a shell**, buffers all its stdout and stderr (default cap 1 MB), and delivers both to the callback along with the exit status. Convenient for one-shot commands with small output — and unsafe with user input, because every shell metacharacter is live.',
        detail: '\n```js\nconst { exec } = require("node:child_process");\nexec("ls -1 src", (err, stdout, stderr) => {\n  if (err) return console.error(err);\n  console.log(stdout.split("\\n").filter(Boolean).length);\n});\n```\nShell injection in one line: `exec("echo " + userInput)` — userInput `"; rm -rf /"` is a command. With untrusted input, use spawn with an argument array (no shell, no metacharacters).'
      },
      {
        term: 'spawn: streams, no shell',
        kind: 'method',
        statement: '`child_process.spawn(file, args)` starts a process **without a shell**, so arguments are passed verbatim (injection-safe), and its stdout/stderr are **Readable streams** you consume as the child produces them — the right tool for long-running or large-output commands. `execFile` is spawn-with-buffering.',
        detail: '\n```js\nconst { spawn } = require("node:child_process");\nconst child = spawn("grep", ["-c", "TODO", "big.txt"]);  // args verbatim\nlet n = "";\nchild.stdout.on("data", (c) => (n += c));\nchild.on("close", (code) => console.log(`grep exited ${code}: ${n.trim()} hits`));\n```\nLive output, unbounded size, and `child.stdin` writable for feeding the child — streaming both ways where exec would have buffered it all.'
      },
      {
        term: 'fork: spawn + an IPC channel',
        kind: 'method',
        statement: '`child_process.fork(script)` spawns **a new Node process** running `script` and opens a **built-in message channel**: `child.send(value)` and `child.on("message", ...)` in both directions, values passing via structured clone (serializable data only). fork is how Node multiplies itself — worker farms, the cluster module, and crash isolation for risky work.',
        detail: 'Messages, not shared memory: a forked child is a separate process (OSC Chapter 3) with its own V8 heap and its own event loop — the isolation that makes a crash in child.js survivable. Compare POSIX `fork()`, which duplicates the address space: Node’s fork never shares; it communicates. `child.kill()` sends SIGTERM; `child.on("exit")` reports the code.'
      },
      {
        term: 'Worker threads: real threads for real CPU work',
        kind: 'definition',
        statement: '`new Worker(filename, { workerData })` (from `node:worker_threads`) starts a **real OS thread** in the same process, with its own V8 isolate and its own event loop. The main thread and the worker exchange messages via `postMessage`/`on("message")` — **copies**, like fork — or share memory through a `SharedArrayBuffer`. Same API shape as the browser’s Web Workers (Section 15.12).',
        detail: 'The use case is **CPU-bound work**: while I/O already overlaps on one thread (Section 16.2), a three-second computation blocks it outright — run-to-completion has no preemption (Section 13.1). Workers exist for compression, image processing, parsing and crypto at scale: OSC Chapter 4’s parallelism, finally available, minus the data races — unless you opt into shared memory.'
      },
      {
        term: 'Atomics: indivisible operations on shared memory',
        kind: 'method',
        statement: '`Atomics.add(typedArray, index, value)` performs a read-modify-write on a typed-array cell backed by a `SharedArrayBuffer` as **one indivisible step** — no other thread can interleave between its read and its write. `Atomics.load/store` are the matching non-tearing reads and writes; `Atomics.compareExchange` is compare-and-swap.',
        detail: '\n```js\n// the race-free increment:\nconst cell = new Int32Array(new SharedArrayBuffer(4));\nAtomics.add(cell, 0, 1);   // like cell[0]++ — but never interleaved\n```\n`cell[0]++` is three steps — load, add, store — and two threads doing it concurrently can both read the old value and lose an increment: the exact race OSC Chapter 6 opens with. Atomics is that chapter’s hardware instructions (test-and-set, compare-and-swap) surfaced in JavaScript — reach for message passing first, and Atomics when a shared counter is genuinely the design.'
      }
    ],
    examples: [
      {
        title: 'A TCP echo server (and how to talk to it)',
        problem: 'Write a server that echoes whatever a client sends, then verify it with a shell — seeing a raw duplex socket in action beneath HTTP.\n```js\nconst net = require("node:net");\n\nconst server = net.createServer((conn) => {\n  console.log(`client ${conn.remoteAddress}:${conn.remotePort}`);\n  conn.on("data", (chunk) => {\n    conn.write(chunk);                 // echo: write back what arrived\n  });\n  conn.on("end", () => console.log("client left"));\n  conn.on("error", () => { /* socket died; clean up */ });\n});\n\nserver.listen(5900, () => console.log("echo server on port 5900"));\n```',
        steps: [
          { label: 'Step 1: Each connection is one duplex stream', text: 'For every client that connects, the callback receives `conn` — readable and writable on the same object: the incoming bytes are the read side, `conn.write(...)` the write side (Section 16.3’s Duplex). One socket, two directions, no request/response grammar unless you invent one — that is what “raw TCP” means.' },
          { label: 'Step 2: data events are byte accidents', text: 'A client sending `"hello"` may deliver it as one 5-byte chunk or as `"he"` + `"llo"` — chunks are transport artifacts, not messages (Section 13.4’s framing lesson at the byte level). For an echo server it does not matter; a line protocol would need the leftover-buffer pattern, and a length-prefixed protocol would need a header parser.' },
          { label: 'Step 3: The echo is one line', text: 'The handler writes the same bytes back — `conn.write(chunk)` returns immediately (it is async underneath, backpressure and all). The order of bytes is preserved by TCP, so the client reads back exactly what it sent, eventually.' },
          { label: 'Step 4: Conversation end and errors are events', text: '`end` fires when the client half-closes; `error` fires on abrupt failure (a reset). Neither handler is required, but sockets are resources — a real server tracks its connections (a Set), removes them on end/error, and closes the server itself on SIGTERM (Section 16.4) so in-flight writes finish.' },
          { label: 'Step 5: Test from the shell', text: '```js\n// nc localhost 5900\n//   (type anything; it comes back)\n//   hello\n//   hello\n//   ^C\n```\n`nc` (netcat) attaches a terminal to the socket — anything typed is sent, anything echoed is printed. `node server.js` in one window, `nc localhost 5900` in another: the smallest possible network service, three lines of logic.' }
        ],
        result: 'Everything a client sends comes back verbatim: a complete TCP service in ~10 lines, with chunk-boundary and error handling understood rather than assumed.'
      },
      {
        title: 'fork with IPC: parent and child exchanging messages',
        problem: 'Split a computation across two Node processes: the parent forks a child, sends it work as a message, and receives the answer on the built-in IPC channel — the crash-isolated alternative to running the work in-process.\n```js\n// ---------- parent.js ----------\nconst { fork } = require("node:child_process");\n\nconst child = fork("child.js");\nconsole.log("child pid:", child.pid);\n\nchild.send({ type: "sum", numbers: [1, 2, 3, 4, 5] });\n\nchild.on("message", (m) => {\n  if (m.type === "result") {\n    console.log("sum =", m.value);\n    child.kill();                     // SIGTERM, then "exit" fires\n  }\n});\nchild.on("exit", (code) => console.log("child exited", code));\n\n// ---------- child.js ----------\nprocess.on("message", (m) => {\n  if (m.type === "sum") {\n    process.send({\n      type: "result",\n      value: m.numbers.reduce((a, b) => a + b, 0),\n    });\n  }\n});\n```',
        steps: [
          { label: 'Step 1: fork = a Node process plus a pipe', text: 'Internally fork is `spawn(process.execPath, [script])` with an extra message channel wired to the child’s stdin/stdout — so the two Node processes exchange JavaScript values without inventing a wire format. `child.pid` is a real OS process id (Section 16.4): check it with `ps` while the example runs.' },
          { label: 'Step 2: Messages are cloned, not shared', text: 'Each `send` serializes the value (structured clone) and each side receives its own copy — strings, numbers, arrays, plain objects travel; functions, sockets and live handles do not. After the child mutates `m.numbers`, the parent’s array is unaffected: message passing buys **isolation by construction**, the opposite of shared memory.' },
          { label: 'Step 3: The protocol is yours', text: 'Node transports the messages; the `{type: "sum"}` / `{type: "result"}` grammar is a convention this pair of files agrees on — the same discriminated-message pattern a protocol or a reducer uses. Scale it by routing on `type` in both files: `"sum"`, `"avg"`, `"shutdown"`…' },
          { label: 'Step 4: Lifecycle: kill, exit, exit codes', text: '`child.kill()` sends SIGTERM; the child (no handler) terminates, and its `"exit"` event delivers the code — 0 or otherwise — to the parent, which can decide to restart it. That supervision loop (fork, watch, restart on crash) is process management in the OSC Chapter 3 sense, implemented in a dozen lines — and it is why risky work goes in a fork: a segfault in the child is a restart, not an outage.' },
          { label: 'Step 5: When fork is the wrong tool', text: 'If the goal is CPU parallelism (not isolation), workers are cheaper: same-process threads instead of a whole new V8 heap — the next example. And if the goal is just running `ls`, exec/spawn never needed a second Node at all. fork earns its keep when the child must **stay alive**, hold its own state, and survive independently.' }
        ],
        result: 'The parent logs the child’s pid, receives `sum = 15` over IPC, terminates the child and reports its exit — two cooperating Node processes, no shared memory, one agreed message protocol.'
      },
      {
        title: 'Worker threads: keep serving while the CPU grinds',
        problem: 'A deliberately expensive `fib(40)` would freeze a single-threaded server for seconds. Move it to a worker thread and prove the main thread stays responsive — then make the shared-counter increment race-free with `Atomics`.\n```js\n// ---------- main.js ----------\nconst { Worker } = require("node:worker_threads");\n\nconst worker = new Worker("./heavy.js", { workerData: { n: 40 } });\n\nworker.on("message", (result) => {\n  clearInterval(heartbeat);\n  console.log(`fib(40) = ${result}`);\n});\nworker.on("error", (err) => { clearInterval(heartbeat); console.error(err); });\n\n// proof of responsiveness: this keeps firing while fib grinds\nconst heartbeat = setInterval(() => {\n  const mb = Math.round(process.memoryUsage().heapUsed / 1e6);\n  console.log(`main thread alive (heap ${mb} MB)`);\n}, 500);\n\n// ---------- heavy.js ----------\nconst { parentPort, workerData } = require("node:worker_threads");\n\nfunction fib(n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }\n\nparentPort.postMessage(fib(workerData.n));\n\n// ---------- the Atomics one-liner (either file) ----------\nconst shared = new Int32Array(new SharedArrayBuffer(4));\nAtomics.add(shared, 0, 1);   // increment that can never interleave\n```',
        steps: [
          { label: 'Step 1: Why this needs a thread at all', text: 'fib(40) is ~1.5 billion recursive calls — seconds of pure CPU. On the main thread that is seconds of **every** request stalled (run-to-completion, Section 13.1) — I/O async does not help because this work is not I/O. A Worker is a real OS thread (OSC Chapter 4): it computes on another core while the main loop keeps turning.' },
          { label: 'Step 2: workerData in, postMessage out', text: 'The `{ n: 40 }` option is **copied** to the worker before it starts (its `workerData`), and `parentPort.postMessage(result)` copies the answer back — the same message-passing discipline as fork, but between threads of one process: no serialization to a pipe, no second interpreter startup, cheaper by an order of magnitude. Errors in the worker surface on `worker.on("error")` instead of crashing the process.' },
          { label: 'Step 3: The heartbeat proves the concurrency', text: 'Every 500 ms the main thread logs that it is alive — and during the whole computation those lines keep printing at a steady rhythm, because the worker owns the busy stack, not the loop. In a server, the same property reads as “health checks keep answering during heavy work.” Stop the interval when the result arrives (a leftover timer keeps the process alive — Section 16.1’s exit rule).' },
          { label: 'Step 4: postMessage copies — until you share deliberately', text: 'The default is no shared state: races are impossible because there is nothing to race on. The escape hatch is `SharedArrayBuffer`: pass one to the worker, wrap it in a typed array on both sides, and now the same bytes have two writers — which is exactly when `Atomics` becomes mandatory.' },
          { label: 'Step 5: The Atomics one-liner', text: '`Atomics.add(shared, 0, 1)` looks like `shared[0]++`, but the ++ is three instructions — load, add, store — and two threads can interleave them so both increments read the same old value and one is lost: the lost-update race that opens OSC Chapter 6. `Atomics.add` performs the read-modify-write **indivisibly** (the software meaning of the hardware test-and-set/compare-and-swap instructions that chapter teaches). One line, one guarantee — and message passing remains the first choice when a counter is not genuinely shared.' }
        ],
        result: '“main thread alive” lines print at an even 500 ms cadence while fib(40) computes on another core, then `fib(40) = 102334155` — and the shared counter, if used, increments without a lost update in sight.'
      }
    ],
    keyTakeaways: [
      'net.createServer hands you each TCP connection as a Duplex stream: `on("data")` reads, `conn.write` writes — HTTP is a protocol layered on exactly this.',
      'exec runs a shell command and buffers output (1 MB cap; shell-injection risk with user input); spawn streams stdout live with verbatim args (safe); execFile is spawn+buffering.',
      'fork = spawn of a Node script + a built-in IPC channel: `send`/`on("message")` both directions, structured-clone values only — messages, never shared memory.',
      'A forked child is a separate process with its own event loop: crash isolation and supervision (kill/exit codes) — OSC Chapter 3 from JavaScript.',
      'Worker threads are real threads in one process with their own V8 isolate and loop — the fix for CPU-bound work that would starve the event loop; same shape as browser Web Workers (Section 15.12).',
      'postMessage copies (races impossible by construction); SharedArrayBuffer shares (races possible) — and then Atomics.add/load/store/compareExchange are the indivisible operations (OSC Chapter 6).',
      'Decision order: I/O → stay single-threaded (async); CPU-bound → Worker; risky/isolated long-lived work → fork; quick command → exec/spawn.'
    ],
    quiz: [
      {
        q: 'What is the key difference between exec and spawn?',
        options: [
          'exec is faster because it skips the filesystem',
          'exec runs the command through a shell and buffers all output; spawn takes an argument array (no shell) and streams stdout/stderr live',
          'spawn only works on Windows',
          'exec returns a promise; spawn uses callbacks'
        ],
        answer: 1,
        explanation: 'exec = convenience + shell metacharacters (injection risk with user input) + a 1 MB buffer; spawn = verbatim args (safe) + Readable-stream output (unbounded) — pick per output size and input trust.'
      },
      {
        q: 'Why choose fork() rather than spawn() to run another Node script?',
        options: [
          'fork is the only one that can start Node',
          'fork additionally opens a built-in IPC channel — send/on("message") — and targets the same Node executable automatically',
          'fork shares memory with the parent',
          'fork does not create a new process'
        ],
        answer: 1,
        explanation: 'fork = spawn(process.execPath, [script]) plus the message pipe: structured-clone messages both directions with zero wire-format work — spawn would leave you hand-rolling stdin/stdout framing.'
      },
      {
        q: 'A worker thread and the main thread want a shared hit counter. Why `Atomics.add(cell, 0, 1)` instead of `cell[0]++`?',
        options: [
          'Atomics.add is faster',
          '++ is load-add-store and two threads can interleave, losing increments; Atomics.add does the read-modify-write as one indivisible step',
          'cell[0]++ does not work on Int32Array',
          'Atomics.add also logs the value'
        ],
        answer: 1,
        explanation: 'The lost-update race of OSC Chapter 6: non-atomic ++ can have both threads read the same old value; Atomics makes the update indivisible — the JavaScript face of test-and-set/compare-and-swap.'
      },
      {
        q: 'Your HTTP server must run a 4-second image conversion on every upload. What is the right tool?',
        options: [
          'Make the handler async — await makes it concurrent',
          'A worker thread — CPU-bound work off the event loop, leaving the main thread serving requests',
          'child_process.exec, buffering the output',
          'Nothing: Node handles CPU work automatically in parallel'
        ],
        answer: 1,
        explanation: 'await only helps I/O (Section 16.2); CPU work blocks the one thread (run-to-completion). A Worker computes on another core while the loop keeps answering requests.'
      },
      {
        q: 'In the net echo server, why can a `"data"` chunk not be treated as one client message?',
        options: [
          'TCP reorders packets, so chunks arrive scrambled',
          'Chunk boundaries reflect transport buffering, not message boundaries — one logical message may straddle several chunks',
          'data events fire only once per connection',
          'Buffers cannot hold a full message'
        ],
        answer: 1,
        explanation: 'TCP preserves byte order but not framing: the 64 KB-ish chunk is an accident of buffering (Section 13.4 at byte level), so protocols add framing — newlines, length prefixes, or JSON per line.'
      }
    ]
  }
]
