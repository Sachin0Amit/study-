import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 13: Asynchronous JavaScript (Sections 13.1 – 13.4)
// Master study content.
// ============================================================================

export const jsCh13Content: SectionContent[] = [
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: 'js-ch13-s1',
    readingTime: 8,
    intro: 'Network requests, disk reads and timers take milliseconds to seconds — a geological age compared with nanosecond CPU work — so a single-threaded language must never sit and wait. JavaScript’s answer is **asynchronous, event-driven programming**: functions register interest in the future, return immediately, and the **event loop** calls them back when the world has an answer. This section covers the callback style that started it all, the error-first convention that disciplined it, and the “pyramid of doom” that motivated promises.',
    objectives: [
      'Explain why single-threaded JavaScript must use asynchronous I/O',
      'Describe the event loop and the run-to-completion rule that governs callbacks',
      'Read and write event-driven handlers with addEventListener and timers',
      'Apply Node’s error-first callback convention',
      'Recognize callback hell and flatten it with named continuations'
    ],
    concepts: [
      {
        term: 'Why asynchronous at all',
        kind: 'insight',
        statement: 'A JavaScript program has **one call stack** and one thread of execution: any operation that blocks it — waiting on a disk, a network, a user — freezes every click, animation and other tab served by that thread. So long-latency operations are structured as requests plus **callbacks**: the code registers a function and returns; the engine keeps working meanwhile. (Operating System Concepts Chapter 4 gives the kernel-side view — threads and scheduling; JavaScript deliberately avoids shared-memory threads and lets the OS do the waiting. Chapter 12 of that book covers the I/O subsystem — interrupts and DMA — that actually delivers the data while JavaScript looks away.)',
        detail: 'The contrast with threads: a thread-per-request server (the OSC Ch 4 model) interleaves work by preempting stacks; a JavaScript runtime interleaves work by returning to one loop between callbacks — cooperative instead of preemptive, with no locks because nothing is ever mid-statement.'
      },
      {
        term: 'The event loop and run-to-completion',
        kind: 'definition',
        statement: 'The runtime keeps a queue of pending callbacks. The **event loop** takes one, runs it **to the end** — every statement, synchronously — then takes the next. No callback ever starts while another is half-finished: there is no preemption inside JavaScript, so no callback needs a lock to protect shared state.',
        detail: 'This is the run-to-completion rule, and it is why a slow `while` loop freezes the page while ten timers pile up behind it. The microtask refinement — promises jumping the queue — arrives in Section 13.2.'
      },
      {
        term: 'Event-driven programming',
        kind: 'method',
        statement: 'Programs are organized as **registrations**: `element.addEventListener("click", handler)`, `fs.readFile(path, callback)`, `setTimeout(fn, ms)` — each parks a function for the future and returns at once. The program’s shape becomes: set up, return quickly, and exist only inside handlers thereafter.',
        detail: '\n```js\ndocument.getElementById("save").addEventListener("click", (event) => {\n  console.log("clicked at", event.timeStamp);   // runs LATER, on its own stack\n});\nconsole.log("registered");                     // runs NOW, first\n```\nThe log order is "registered", then "clicked at ..." — even if the user had already clicked, the handler waits for its turn on the loop.'
      },
      {
        term: 'Error-first callbacks',
        kind: 'definition',
        statement: 'Node standardized the shape of asynchronous failure: the callback’s **first parameter is reserved for an error** — `null`/`undefined` on success — and results follow it. The first thing a correct handler does is check that parameter: `if (err) { handleIt; return; }`. Throwing from an async operation is useless because no stack is there to catch it.',
        detail: '\n```js\nconst fs = require("node:fs");\nfs.readFile("config.json", "utf8", (err, text) => {\n  if (err) { console.error(err); return; }   // check first, always\n  const config = JSON.parse(text);\n  // ...use config\n});\n```\nThe convention made async failures explicit — and its repetitiveness is half of what promises were designed to fix.'
      },
      {
        term: 'Callback hell — the pyramid of doom',
        kind: 'insight',
        statement: 'When step two needs step one’s result, callbacks nest: each successive operation is indented inside the previous callback, and the code drifts rightward into a **pyramid**. The costs: unreadable flow, duplicated error handling at every level, and **inversion of control** — your continuation lives inside a function you handed to someone else’s API.',
        detail: 'The classic mitigations before promises: named functions instead of anonymous ones (each step calls the next by name, keeping the source flat), and module-level state to carry results across steps. Promises (13.2) and async/await (13.3) solve it structurally instead of stylistically.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: three clocks on one event loop',
        problem: 'Predict the output of this timing puzzle, then trace the loop’s behavior:\n```js\nconsole.log("start");\n\nsetTimeout(() => console.log("0ms timer"), 0);\nsetTimeout(() => console.log("200ms timer"), 200);\n\nconst start = Date.now();\nwhile (Date.now() - start < 100) { /* spin for 100 ms */ }\n\nconsole.log("sync done");\n```',
        steps: [
          { label: 'Step 1: The synchronous prefix', text: 'The script itself is the first unit of run-to-completion work. `"start"` logs; both timers are **scheduled** — their callbacks parked with due times — and the `setTimeout` calls return instantly without waiting.' },
          { label: 'Step 2: The spin occupies the one thread', text: 'The `while` loop burns 100 ms **on the only thread there is**. The 0 ms timer is already due — but “due” only means eligible; a queued callback cannot interrupt running code. It waits.' },
          { label: 'Step 3: The script finishes', text: '`"sync done"` logs and the initial unit of work ends. Only now does the event loop look at the queue: the 0 ms callback is eligible and runs — `"0ms timer"` — a full 100 ms *after* its nominal time.' },
          { label: 'Step 4: The queue drains as things become due', text: 'The loop idles (the host may render, other tabs may run) until the 200 ms timer matures around t = 200 — measured from scheduling, and unaffected by the spin since both started at t ≈ 0 — and `"200ms timer"` logs.' },
          { label: 'Step 5: The lessons', text: 'One: `setTimeout(fn, 0)` means “as soon as the loop is free”, never “immediately” — the minimum-delay caveat of Section 11.6’s timers. Two: a busy loop delays everything behind it, because run-to-completion gives callbacks no way to preempt. The whole model — including the microtask refinement coming in 13.2 — is about *when the loop is free*.' }
        ],
        result: 'Output order: `"start"`, `"sync done"`, `"0ms timer"` (about 100 ms late), `"200ms timer"` — timers fire when the single thread gets around to them.'
      },
      {
        title: 'The pyramid of doom, then the flattened refactor',
        problem: 'Read a config file, use it to find a data file, parse that, then write a summary — first nested, then flattened with named continuations:\n```js\nconst fs = require("node:fs");\n\n// The pyramid\nfs.readFile("config.json", "utf8", (err, configText) => {\n  if (err) return console.error(err);\n  const config = JSON.parse(configText);\n  fs.readFile(config.dataFile, "utf8", (err2, dataText) => {\n    if (err2) return console.error(err2);\n    const rows = dataText.trim().split("\\n");\n    fs.writeFile(config.outFile, String(rows.length), (err3) => {\n      if (err3) console.error(err3);\n      else console.log("done");\n    });\n  });\n});\n```',
        steps: [
          { label: 'Step 1: Read the shape of the pyramid', text: 'Each step’s logic lives **inside** the previous step’s callback, indented one level deeper — three operations, three levels, and the final `"done"` log is indented as far right as the screen allows. Sequential logic has become spatially nested.' },
          { label: 'Step 2: Count the error handling', text: 'Three anonymous callbacks, three `err` checks, three `console.error` calls — and every future step duplicates the same guard. One missed check and an error silently becomes `undefined` data in the next step.' },
          { label: 'Step 3: The inversion of control', text: 'The continuation of each step is now a function owned by `fs.readFile` — if the API calls it twice, or never, or on the wrong turn of the loop, your program simply misbehaves. You have handed over *when and whether your own code runs*.' },
          { label: 'Step 4: Flatten with named continuations', text: '\n```js\nfunction onConfig(err, text) {\n  if (err) return console.error(err);\n  const config = JSON.parse(text);\n  fs.readFile(config.dataFile, "utf8", onData);\n}\nfunction onData(err, text) {\n  if (err) return console.error(err);\n  const config = /* captured earlier */;\n  fs.writeFile(config.outFile, countRows(text), onDone);\n}\nfunction onDone(err) { ... }\nfs.readFile("config.json", "utf8", onConfig);\n```\nEach step is a top-level function; the source reads top-to-bottom again. But the duplication and the inversion remain — only the indentation improved, and plumbing state between steps (`config` must now be passed or shared) got *harder*.' },
          { label: 'Step 5: The real fix is structural', text: 'Promises (Section 13.2) make each step **return** a value instead of accepting a continuation — chaining replaces nesting; async/await (13.3) then restores the original top-to-bottom shape entirely. Know the pyramid to appreciate why both exist.' }
        ],
        result: 'The nested version works but reads inside-out with triplicated error handling; named functions flatten the source yet keep the same hazards — the structural cure is promises.'
      }
    ],
    keyTakeaways: [
      'One thread, one call stack: blocking I/O would freeze everything, so long operations are requests plus callbacks and the code returns immediately.',
      'The event loop runs each queued callback to completion before starting the next — no callback preempts another, so no locks are needed (contrast OSC Ch 4 threads).',
      'The OS does the actual waiting — interrupts and DMA deliver the data (OSC Ch 12); JavaScript just gets a callback on a future loop turn.',
      'Node’s error-first convention — `(err, result) => ...` with the err check first — is the discipline that made async failures explicit.',
      'Sequencing with callbacks nests rightward into the pyramid of doom: duplicated error handling and inversion of control.',
      'Named continuations flatten the pyramid stylistically; promises and async/await fix it structurally.'
    ],
    quiz: [
      {
        q: 'What is the Node.js error-first convention?',
        options: [
          'Async functions throw errors synchronously',
          'The callback’s first parameter is reserved for an error value — null/undefined on success — and results come after it',
          'Errors are passed as the second argument, after the result',
          'Callbacks must be wrapped in try/catch'
        ],
        answer: 1,
        explanation: 'Node reserves the callback’s first parameter for the error so failure is impossible to overlook: every correct handler checks err before touching the results that follow it.'
      },
      {
        q: 'A `while` loop spins for 200 ms, and a timer with a 0 ms delay was scheduled before it started. When does the timer callback run?',
        options: [
          'Immediately, interrupting the loop',
          'After roughly 200 ms — once the current unit of work completes, since callbacks cannot preempt running code',
          'Never — the loop canceled it',
          'On a different thread'
        ],
        answer: 1,
        explanation: 'Run-to-completion: the event loop only picks up eligible callbacks between units of work, so a 0 ms timer fires as soon as the busy loop yields — about 200 ms late.'
      },
      {
        q: 'Why does throwing an exception inside an async operation fail to inform the caller?',
        options: [
          'Exceptions are disabled after the first await',
          'By the time the error occurs, the original call stack has long since returned — there is no catcher left to unwind into',
          'The event loop catches all exceptions silently',
          'throw statements must be awaited'
        ],
        answer: 1,
        explanation: 'The request function already returned; its stack is gone — which is exactly why async APIs deliver errors through the callback (or, later, promise rejections) instead of exceptions.'
      },
      {
        q: 'What is “inversion of control” in callback-based code?',
        options: [
          'Callbacks always run on the main thread',
          'Your continuation is a function you hand to another API, which decides if, when and how many times your code runs',
          'Control flow inverted into a loop',
          'Errors control the flow of the program'
        ],
        answer: 1,
        explanation: 'Passing a callback transfers authority over your program’s next step to the callee — the trust problem promises address with guaranteed, one-time settlement semantics.'
      },
      {
        q: 'Which refactoring flattens the pyramid of doom WITHOUT changing the underlying callback mechanism?',
        options: [
          'Replacing anonymous callbacks with named step functions',
          'Wrapping everything in try/catch',
          'Using setTimeout(0) between steps',
          'Making the callbacks async'
        ],
        answer: 0,
        explanation: 'Named continuations turn nested arrows into a flat sequence of top-level functions — better readability, though duplication and inversion of control persist until promises arrive.'
      }
    ]
  },

  // ---------------------------------------------------------------- 13.2
  {
    sectionId: 'js-ch13-s2',
    readingTime: 12,
    intro: 'A **Promise** is an object that represents the eventual result of an asynchronous operation: a placeholder for a value that is not here yet but whose arrival — or failure — you can plan around. Promises turn callbacks inside out: instead of handing your continuation to the operation, the operation hands **you** a value-like object you can call `.then()` on. Chains replace nesting, errors propagate automatically, and the microtask queue gives promise callbacks a guaranteed — and surprising — place in the event loop order.',
    objectives: [
      'State the three promise states and the semantics of settling',
      'Build chains with then, catch and finally, tracing value and error flow through them',
      'Create promises with executors and with Promise.resolve/reject',
      'Explain and use all, race, allSettled and any',
      'Predict execution order across the script, microtask and timer queues — including the classic interview question'
    ],
    concepts: [
      {
        term: 'Promises and their states',
        kind: 'definition',
        statement: 'A promise is an object in one of three states: **pending** (the operation has not finished), **fulfilled** (it succeeded — carrying a **value**), or **rejected** (it failed — carrying a **reason**, conventionally an Error). Fulfilled and rejected together are **settled**, and settling is **final**: a promise’s state and payload never change again.',
        detail: 'Immutability of settlement is what makes promises composable: any number of `.then()` callbacks can be attached at any time, before or after the result arrives, and they all see the same answer.'
      },
      {
        term: 'then, catch and finally',
        kind: 'method',
        statement: '`p.then(onFulfilled, onRejected)` registers the success path (and optionally the failure path); `p.catch(fn)` is shorthand for `then(null, fn)`; `p.finally(fn)` runs cleanup on **both** paths, passing value or reason through untouched. All three return a **new** promise — the basis of chaining.',
        detail: 'The second then argument is rare in practice — a catch later in the chain reads more naturally and catches the onFulfilled handler’s own errors too.'
      },
      {
        term: 'Chains',
        kind: 'method',
        statement: 'Because each `then` returns a new promise, calls stack left-to-right, not inside-out: a callback’s **return value** fulfills the next link; a **thrown error** rejects it. Rejections skip every success callback until the nearest `catch`, which can recover — its return value resumes the success chain below it.',
        detail: 'This is the inversion of the pyramid: the steps of Section 13.1’s file pipeline become `readConfig().then(readData).then(writeSummary).catch(logError)` — one indentation level, one error handler at the end.'
      },
      {
        term: 'The executor runs synchronously',
        kind: 'insight',
        statement: '`new Promise((resolve, reject) => { ... })` invokes its **executor** function immediately, on the current stack — the async part is not the executor but the **callbacks**: resolve/reject only record the outcome and schedule already-registered handlers on the **microtask queue**. A promise can therefore settle before any `.then()` was ever attached.',
        detail: '\n```js\nconsole.log("before");\nconst p = new Promise((resolve) => {\n  console.log("executor runs NOW");   // synchronous\n  resolve(42);\n});\nconsole.log("after");\np.then(v => console.log(v));          // later, microtask\n// logs: before, executor runs NOW, after, 42\n```'
      },
      {
        term: 'Promise.resolve and Promise.reject',
        kind: 'method',
        statement: '`Promise.resolve(v)` returns a promise fulfilled with `v` — or, if `v` is already a promise, that very promise unchanged (flattening, so chains never nest promises inside promises). `Promise.reject(e)` returns a rejected promise. Both are the idiomatic ways to enter a chain from a plain value.',
        detail: 'A non-promise object with a `.then()` method is a **thenable** — Promise.resolve adopts it, which is how promise-like libraries interoperate with native chains.'
      },
      {
        term: 'Combinators: all, race, allSettled, any',
        kind: 'method',
        statement: 'Static methods run arrays of promises together: **`Promise.all(ps)`** fulfills with an array of all values **in input order** (not completion order) once every promise fulfills — or rejects immediately with the first rejection (fail-fast). **`race(ps)`** settles with the first promise to settle at all — value or reason. **`allSettled(ps)`** never rejects: it fulfills with `{status, value}`/`{status, reason}` records for every input. **`any(ps)`** fulfills with the first fulfillment, rejecting with an `AggregateError` only if they all fail.',
        detail: 'Use all for “need everything, together”; race for timeouts and first-wins; allSettled for batch reports where partial failure is normal; any for mirrors and fallbacks — “the first that works”.'
      },
      {
        term: 'Microtasks: then callbacks jump the queue',
        kind: 'insight',
        statement: 'Promise callbacks run as **microtasks**: when the current unit of work finishes, the engine drains the entire microtask queue — **all** of it — before taking the next timer or I/O event from the macrotask queue. So `p.then(f)` beats `setTimeout(g, 0)` even though both are “later”: script first, then microtasks, then timers.',
        detail: 'This scheduling is where JavaScript meets the scheduler theory of OSC Chapter 4: the event loop is a scheduler with two priority classes, and microtasks are the higher-priority queue — one callback deep, but with a strict, examinable ordering.'
      },
      {
        term: 'promisify',
        kind: 'method',
        statement: 'Node’s `util.promisify(fs.readFile)` wraps an error-first callback function into one returning a promise; the modern `fs/promises` module and `fetch` are promise-native from the start — returning to the file pipeline of 13.1 as `await fsPromises.readFile(...)`.',
        detail: 'This is the migration path from callback-era code: wrap the old API at the boundary, then consume it with modern chains and async/await (13.3).'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: values and errors through a chain',
        problem: 'Predict the logged output of this chain, including which callbacks never run:\n```js\nPromise.resolve(2)\n  .then(x => x * 3)\n  .then(x => { throw new Error("boom"); })\n  .then(x => { console.log("skipped:", x); return x + 1; })\n  .catch(e => { console.log("caught:", e.message); return 99; })\n  .then(x => console.log("final:", x));\n```',
        steps: [
          { label: 'Step 1: The first link passes 2 through arithmetic', text: '`Promise.resolve(2)` enters the chain; the first callback maps it to `6`, and because it returns a plain number, the next link’s promise fulfills with `6`.' },
          { label: 'Step 2: The throw becomes a rejection', text: 'The second callback throws `"boom"` — the throw is caught by the machinery and converted into the **rejection** of the next promise in the chain. No value propagates past a throw.' },
          { label: 'Step 3: Success callbacks are skipped, not crashed', text: 'The third `.then` never executes its callback — its input is rejected, so it passes the rejection along intact. Skipping is the rule: a rejection slides past every onFulfilled until a handler for rejections exists.' },
          { label: 'Step 4: The catch recovers', text: '`.catch` receives the Error — `e.message` is `"boom"`, which logs `"caught: boom"` — and **returns `99`**, a normal value. That return fulfills the next link: recovery means the chain is back on the success track.' },
          { label: 'Step 5: The final link sees the recovered value', text: 'The last `.then` runs with `99` and logs `"final: 99"`. Total picture: one multiplication, one conversion of throw to rejection, one skip, one recovery, one resumed value — the entire state machine of chaining in five links.' }
        ],
        result: 'Exactly two lines log: `"caught: boom"` and `"final: 99"` — the middle success callback is skipped by the rejection, and the catch’s return value restarts the success path.'
      },
      {
        title: 'Trace the engine: all versus race, with a clock',
        problem: 'Three promises settle on a millisecond clock — two succeed, one fails fast. Predict what `Promise.all` and `Promise.race` do with them:\n```js\nconst fast = new Promise(r => setTimeout(() => r("fast"), 100));\nconst slow = new Promise(r => setTimeout(() => r("slow"), 300));\nconst fail = Promise.reject(new Error("no"));\n\nPromise.all([slow, fast]).then(v => console.log("all:", v));\nPromise.race([fast, fail]).then(v => console.log("race:", v)).catch(e => console.log("race err:", e.message));\n```',
        steps: [
          { label: 'Step 1: Read the clock', text: '`fast` fulfills at t = 100 ms, `slow` at t = 300 ms, and `fail` is rejected **at construction** — t = 0, before the race even attaches its handlers.' },
          { label: 'Step 2: Promise.all waits for everyone', text: 'At t = 100, `fast` resolves but `all` stays pending — it needs every input. At t = 300, `slow` resolves and `all` fulfills **now**: it logs `all: ["slow", "fast"]` — the values appear in **input order** (`[slow, fast]`), not completion order (`fast` finished first).' },
          { label: 'Step 3: The fail-fast rule', text: 'Had `fail` been in the `all` array, the aggregate would have rejected at t = 0 with `Error("no")`, discarding `fast` and `slow` entirely — `all` reports the first **rejection** immediately, not the last result. Partial results are not delivered.' },
          { label: 'Step 4: race takes the first settler of any kind', text: 'In `Promise.race([fast, fail])`, `fail` settled first (t = 0), so the race **rejects** with that same error: the catch logs `"race err: no"` at t = 0. `fast` still resolves later at t = 100 — the race has already ended; later settlers are ignored, not errors.' },
          { label: 'Step 5: Choosing the combinator', text: 'all for all-or-nothing parallel work; race when the fastest answer wins — including the timeout pattern `Promise.race([fetchIt, timeoutPromise])`; allSettled when you want a full report including failures; any when any single success is enough and you only fail if every option fails.' }
        ],
        result: '`all: ["slow", "fast"]` at t = 300 (input order preserved); `race err: no` at t = 0 (the early rejection wins the race).'
      },
      {
        title: 'The famous question: 1, 4, 3, 2',
        problem: 'The interview classic. Predict the log order, then justify it with the two queues:\n```js\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n```',
        steps: [
          { label: 'Step 1: The synchronous run', text: 'The script is one unit of work. `console.log(1)` runs; `setTimeout(..., 0)` **schedules** the timer callback on the timer (macrotask) queue and returns; `Promise.resolve().then(...)` schedules the microtask and returns; `console.log(4)` runs. Two logs are printed: **1, 4**.' },
          { label: 'Step 2: The script ends — drain microtasks first', text: 'The unit completes. Before the engine looks at timers or I/O, it drains the **microtask queue completely**: the `.then` callback runs now, printing **3** — even though it was scheduled after the timer and the timer has 0 ms of delay.' },
          { label: 'Step 3: Then the macrotask', text: 'Only when microtasks are empty does the loop fetch the next event: the expired timer runs its callback, printing **2**. The zero delay bought it nothing but a place at the back of the *later* queue.' },
          { label: 'Step 4: The general order', text: 'Final output: **1, 4, 3, 2** — synchronous code first, then every pending microtask, then the first timer callback. Each timer callback itself ends with another microtask drain, so long chains of `.then` calls interleave between timer events but always finish before the next timer fires.' },
          { label: 'Step 5: Why the rule exists', text: 'Microtasks are promise-resolution work: they are kept short and given priority so that chained promises reach their answers without waiting on unrelated I/O. It is a two-class scheduler — exactly the kind of queue-priority design OSC Chapter 4 discusses for CPU scheduling, here applied to a single-threaded event loop (Section 13.1’s run-to-completion model).' }
        ],
        result: 'Logs print in the order 1, 4, 3, 2: sync code, then the microtask (promise callback), then the timer — the single most-asked ordering question in JavaScript interviews, fully explained by queue priority.'
      }
    ],
    keyTakeaways: [
      'A promise is pending until it fulfills with a value or rejects with a reason — settlement is immutable; there is no third callback after done.',
      'then/catch/finally each return a **new** promise: return values fulfill the next link, throws reject it, and rejections skip ahead to the nearest catch, whose return value recovers the chain.',
      'The executor passed to `new Promise` runs **synchronously**; only the handlers are deferred — as microtasks.',
      '`Promise.resolve(v)` flattens promises and thenables; use it to enter chains from plain values.',
      '`all` waits for every value (input order, fail-fast); `race` takes the first settlement of either kind; `allSettled` never rejects; `any` takes the first fulfillment.',
      'Microtask discipline: when the current work ends, ALL pending microtasks run before ANY timer — hence the classic order 1, 4, 3, 2 (script, microtask, timer).',
      'In Node, `util.promisify` and the `fs/promises` module convert error-first callback APIs into promise-returning ones.'
    ],
    quiz: [
      {
        q: 'Once a promise has been fulfilled with a value, what can change its state?',
        options: [
          'A later resolve call with a different value',
          'A catch handler attached afterwards',
          'Nothing — settlement (fulfilled or rejected) is final and the value is fixed',
          'Calling then() twice'
        ],
        answer: 2,
        explanation: 'Settling is immutable: extra resolve calls are ignored and every subsequent then — attached whenever — observes the same one-time outcome.'
      },
      {
        q: 'A `.then()` callback throws an Error. What happens to the next `.then()` in the chain?',
        options: [
          'It runs with undefined as input',
          'Its success callback is skipped; the rejection passes along until a catch (or an unhandled rejection)',
          'The whole chain crashes the program',
          'It retries the failed callback'
        ],
        answer: 1,
        explanation: 'A thrown error rejects the promise that then returned; success callbacks along the way are bypassed until a catch handles the reason and can recover by returning a value.'
      },
      {
        q: 'Two promises: A fulfills in 100 ms, B fulfills in 300 ms. What does `Promise.all([B, A])` resolve to, and when?',
        options: [
          '["A’s value", "B’s value"] at 100 ms',
          '["B’s value", "A’s value"] at 300 ms — the input array’s order, after the slowest settles',
          '["B’s value", "A’s value"] at 100 ms',
          'Whichever promise settles first'
        ],
        answer: 1,
        explanation: 'all waits for every input and delivers values in the order of the input array — B first here — at the time of the slowest promise (300 ms), regardless of completion order.'
      },
      {
        q: 'In `Promise.race([slowFetch, fastReject])`, `fastReject` rejects after 10 ms and `slowFetch` would have fulfilled after 2 s. What does the race do?',
        options: [
          'Waits for slowFetch and fulfills, ignoring the rejection',
          'Rejects after 10 ms with fastReject’s reason — the first settlement of either kind wins',
          'Rejects after 2 seconds',
          'Fulfills with an AggregateError'
        ],
        answer: 1,
        explanation: 'race settles the moment any input settles: a fast rejection wins just as a fast fulfillment would — the property behind the timeout pattern.'
      },
      {
        q: 'What does this print: `console.log("a"); Promise.resolve().then(() => console.log("b")); setTimeout(() => console.log("c"), 0); console.log("d");`?',
        options: ['a, b, c, d', 'a, d, b, c', 'a, c, b, d', 'a, d, c, b'],
        answer: 1,
        explanation: 'Synchronous logs first (a, d), then the microtask queue drains before any timer (b), then the macrotask timer (c) — the 1, 4, 3, 2 pattern in new letters.'
      },
      // Placement-pattern: microtask ordering — promise versus synchronous logs (original)
      {
        q: "In what order do the lines print?\n```js\nconsole.log('first');\nPromise.resolve().then(() => console.log('second'));\nconsole.log('third');\n```",
        options: ["`first`, `second`, `third`", "`second`, `first`, `third`", "`first`, `third`, `second`", "`third`, `first`, `second`"],
        answer: 2,
        explanation: "Step 1: The code given logs synchronously, queues a fulfilled-promise callback, then logs synchronously again. Step 2: The governing rule is the two-queue discipline: synchronous code runs to completion first, promise callbacks wait as microtasks, and microtasks drain before the engine moves to the next macrotask. Step 3: Tracing execution, `first` prints immediately, the `.then` callback waits in the microtask queue, `third` prints synchronously, and only then does the queued callback print `second`. Step 4: The distractors fail because the promise callback can never run before the synchronous lines finish, and it always runs before any timer or I/O macrotask. Step 5: Therefore the order is `first`, `third`, `second`."
      }
    ]
  },

  // ---------------------------------------------------------------- 13.3
  {
    sectionId: 'js-ch13-s3',
    readingTime: 9,
    intro: '**async and await** are promises with the awkward parts removed: an async function writes like synchronous code, `await` marks exactly where it pauses, and `try/catch` handles rejections like ordinary exceptions. Underneath, nothing new exists — `await` compiles to the `then` chains of Section 13.2 — but the translation makes async code readable for the first time. This section is the translation manual, plus the one performance trap everyone hits: awaiting sequentially what should run in parallel.',
    objectives: [
      'Explain why an async function always returns a promise',
      'Translate between await-based code and then-chains mechanically',
      'Handle rejections with try/catch/finally around awaits',
      'Distinguish sequential awaits from parallel Promise.all — with a timed comparison',
      'Recognize the forEach-with-async bug and the correct loop forms'
    ],
    concepts: [
      {
        term: 'async functions always return promises',
        kind: 'definition',
        statement: 'Marking a function `async` changes its return contract: `return 42` comes back as a promise **fulfilled with 42**; `throw e` comes back as a **rejected** promise with reason e. The caller can never see a bare value from an async function — only its eventual result.',
        detail: '\n```js\nasync function f() { return 42; }\nf();                  // Promise { <fulfilled>: 42 }\nf().then(console.log);  // 42\n\nasync function g() { throw new Error("x"); }\ng();                  // Promise { <rejected>: Error: x }\n```\nThis uniformity is what lets every await await anything awaitable — and every caller chain or await the result.'
      },
      {
        term: 'await',
        kind: 'definition',
        statement: '`await expression` suspends the async function until the expression’s promise settles, then evaluates to its **value** — or, if it rejected, **throws** its reason at this exact line. The thread does not block: only this one function pauses, and the event loop (Section 13.1) keeps running everything else.',
        detail: 'Awaiting a non-promise value is legal — `await 5` is `5` on the next microtask — which lets code be promisified opportunistically. In ES2022 modules, top-level `await` is allowed outside any function.'
      },
      {
        term: 'await is then in disguise',
        kind: 'method',
        statement: 'Every async/await function has a mechanical then-chain translation: each `await` splits the function at that line, the code below becomes the next link’s callback, and the value below the await is the callback’s parameter. Reading and writing both forms fluently is the skill.',
        detail: '\n```js\nasync function loadUser(id) {\n  try {\n    const response = await fetch("/api/users/" + id);\n    if (!response.ok) throw new Error(response.status);\n    return await response.json();\n  } catch (e) {\n    return null;      // fall back on any failure\n  }\n}\n```\nbecomes, structurally: `fetch(...).then(r => { if (!r.ok) throw ...; return r.json(); }).then(null, () => null)` — the try/catch maps to the rejection handler, the two awaits to two chain links.'
      },
      {
        term: 'Error handling with try/catch',
        kind: 'method',
        statement: 'A rejection arriving at an `await` throws at that line — so ordinary `try { ... } catch { ... } finally { ... }` covers async failures, with the usual semantics: catch recovers by returning a value, finally runs cleanup on both paths, and an uncaught error rejects the async function’s own promise.',
        detail: 'The rule of placement: wrap exactly the region from which you can meaningfully recover — a try around three sequential awaits that catches and falls back treats any of the three failing the same way; per-step recovery needs per-step try blocks.'
      },
      {
        term: 'Sequential awaits versus parallel execution',
        kind: 'insight',
        statement: 'Two awaits in sequence **serialize**: the second operation does not start until the first settles — total time is the **sum**. Starting both promises first and awaiting them together — `const [a, b] = await Promise.all([f(), g()])` — runs them concurrently: total time is the **maximum**. Await is where the pause happens, and promises start when created, not when awaited.',
        detail: 'This is the single most common async/await performance bug: `const user = await getUser(); const posts = await getPosts();` pays user + posts when the two calls never needed each other’s results. (And it is precisely the latency-hiding idea OSC Chapter 12 develops for I/O: overlapping waits instead of queueing them.)'
      },
      {
        term: 'async and loops',
        kind: 'method',
        statement: 'Inside a plain `for` or `for/of` loop, `await` works as read: each iteration waits for the previous — sequential by design, which is correct when steps depend on each other, and a bug when they do not. But `array.forEach(async ...)` **does not wait at all**: forEach invokes the callbacks, ignores the returned promises, and the loop finishes long before any await resolves.',
        detail: '\n```js\n// BUG: prints "done" first, then the results\nitems.forEach(async (item) => { console.log(await process(item)); });\nconsole.log("done");\n\n// Parallel fix:\nawait Promise.all(items.map(item => process(item)));\n// Sequential fix:\nfor (const item of items) { console.log(await process(item)); }\n```\nThe general shape of the parallel fix — `await Promise.all(array.map(asyncFn))` — is idiomatic enough to memorize outright.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: the then-chain translation',
        problem: 'Translate this async function to its then-chain equivalent and verify they behave identically, including the error path:\n```js\nasync function fetchPrice(symbol) {\n  const response = await fetch("/api/quote/" + symbol);\n  if (!response.ok) {\n    throw new HTTPError(response.status, "quote failed");\n  }\n  const quote = await response.json();\n  return quote.price;\n}\n```',
        steps: [
          { label: 'Step 1: The call starts real work immediately', text: '`fetchPrice("ACME")` runs synchronously up to the first `await` — the fetch is **issued** before any suspension — and returns a pending promise to the caller. The async function’s body is now parked at the first await.' },
          { label: 'Step 2: First await = first chain link', text: 'The translation is: `fetch(...).then(next)`, where `next(response)` is “everything below the await”. When the response arrives, the microtask queue (Section 13.2) runs `next` — if `response.ok` is false, it throws, which rejects the link; otherwise it calls `response.json()` and returns **that promise**, which the chain adopts.' },
          { label: 'Step 3: Second await = second link', text: 'Because `next` returned a promise, the chain flattens it (the promise-resolution rule): `quote` binds to the parsed body when it arrives — `await` of an await, invisible in the chain shape.' },
          { label: 'Step 4: The return fulfills the outer promise', text: '`return quote.price` resolves the promise that `fetchPrice` originally returned — the caller’s `const p = await fetchPrice("ACME")` (or `.then(...)`) now resumes with the number.' },
          { label: 'Step 5: The error path, both dialects', text: 'A rejection at either link — the fetch itself, the thrown HTTPError, or json() failing — skips every success callback and surfaces at the caller as a rejected promise: exactly `p.catch(e => ...)`. In the async dialect, the caller writes `try { await fetchPrice(...) } catch (e) { ... }` — same machinery, different clothes. One dialect, mechanical translation — that is the whole concept.' }
        ],
        result: 'Line-for-line: each await splits the body into the next then callback; the try/catch of the caller is the catch link; the returned value is the final fulfillment — prove it by translating any await code this way.'
      },
      {
        title: 'Sequential versus parallel: a timed comparison',
        problem: 'Load a user (200 ms) and that user’s posts (300 ms) — requests that do not depend on each other’s results. Compare the two shapes with a millisecond clock:\n```js\nasync function loadSequential() {\n  const user = await getUser();      // 200 ms\n  const posts = await getPosts();    // 300 ms — starts only after\n  return { user, posts };            // total ≈ 500 ms\n}\n\nasync function loadParallel() {\n  const [user, posts] = await Promise.all([getUser(), getPosts()]);\n  return { user, posts };            // total ≈ 300 ms\n}\n```',
        steps: [
          { label: 'Step 1: The sequential timeline', text: 't = 0: `getUser()` is called and awaited — the function suspends. t = 200: the user arrives; **only now** is `getPosts()` called. t = 500: the posts arrive. Total: 200 + 300 = **500 ms**, because the second request never overlapped the first.' },
          { label: 'Step 2: The await placement is the pause, not the start', text: 'The bug is thinking `await` “wraps” the operation. Promises begin when the function that creates them is **called** — `await` merely parks the current function at that line. Sequencing two awaits is sequencing two calls.' },
          { label: 'Step 3: The parallel timeline', text: 't = 0: inside the array literal, `getUser()` and `getPosts()` are **both invoked immediately** — two pending promises, two requests in flight. `Promise.all` combines them into one; the single `await` suspends once. t = 200: user arrives (all stays pending). t = 300: posts arrive — all fulfills **now**.' },
          { label: 'Step 4: The arithmetic', text: 'Total: max(200, 300) = **300 ms** — a 40% saving for one line of restructuring. The results land in the destructured `[user, posts]` in input order (the all guarantee from 13.2), so downstream code does not change at all.' },
          { label: 'Step 5: When sequential IS correct', text: 'If the second call needs the first’s result — `const id = (await getUser()).id; const posts = await getPostsFor(id)` — the dependency forces order, and all would be meaningless. The rule: no data dependency → start together and combine; data dependency → await in order.' }
        ],
        result: 'Sequential ≈ 500 ms, parallel ≈ 300 ms — same requests, same results object; only the start times differ. Overlap independent waits, order dependent ones.'
      },
      {
        title: 'The forEach trap and its two correct forms',
        problem: 'Explain why this loop logs `"done"` before any item, and write both fixes:\n```js\nasync function save(items) {\n  items.forEach(async (item) => {\n    await saveItem(item);\n    console.log("saved", item.id);\n  });\n  console.log("done");\n}\n```',
        steps: [
          { label: 'Step 1: What forEach actually does with the callback', text: 'forEach calls the arrow for each item and **discards its return value** — which is a promise, because the arrow is async. forEach has no concept of awaiting anything; it finishes its synchronous loop instantly.' },
          { label: 'Step 2: The observable symptom', text: '`"done"` logs first, then the saves complete in whatever order they resolve — and if `saveItem` rejects, the rejection is unhandled: no catch anywhere is attached to those discarded promises.' },
          { label: 'Step 3: Fix one — parallel', text: '\n```js\nasync function save(items) {\n  await Promise.all(items.map(async (item) => {\n    await saveItem(item);\n    console.log("saved", item.id);\n  }));\n  console.log("done");   // now truly last\n}\n```\n`map` **collects** the promises forEach threw away; all waits for every save; a rejection rejects the await and propagates naturally.' },
          { label: 'Step 4: Fix two — sequential', text: '\n```js\nfor (const item of items) {\n  await saveItem(item);\n  console.log("saved", item.id);\n}\nconsole.log("done");\n```\nThe for/of body is part of the async function itself, so await genuinely suspends each iteration — order guaranteed, `"done"` genuinely last.' },
          { label: 'Step 5: Choosing the fix', text: 'If the items are independent, the parallel form is usually right (total time = slowest save); if order matters — batch writes, dependent records, rate limits — the sequential form is the tool. What is never right is forEach: it cannot wait, by design.' }
        ],
        result: 'The bug: forEach discards the async callbacks’ promises, so it never waits. Fixes: `await Promise.all(items.map(fn))` for parallel, `for...of` with await for sequential — forEach cannot be repaired into waiting.'
      }
    ],
    keyTakeaways: [
      'An async function always returns a promise: `return 42` fulfills it, `throw` rejects it — callers never see a bare value.',
      '`await p` suspends only the current async function until p settles, yielding the value or throwing the reason; the thread keeps running other work.',
      'The translation is mechanical: code below an await is the next then callback; a try/catch around awaits is a catch link.',
      'Sequential awaits serialize independent work (time = sum); `await Promise.all([...])` overlaps it (time = max) — promises start when called, not when awaited.',
      'Wrap awaits in try/catch/finally where recovery is possible; uncaught errors reject the async function’s promise.',
      '`forEach(async ...)` never waits — use `Promise.all(items.map(asyncFn))` for parallel or a for/of with await for sequential iteration.'
    ],
    quiz: [
      {
        q: 'What does `async function f() { return 42; }` give its caller?',
        options: [
          'The number 42 directly',
          'A promise fulfilled with the value 42',
          'A promise that resolves to another promise',
          'A generator object'
        ],
        answer: 1,
        explanation: 'Async functions wrap every return in a promise — 42 arrives via .then or await; the caller can never receive the raw value synchronously.'
      },
      {
        q: 'Requests A (200 ms) and B (300 ms) are independent. What is the approximate total time of `const a = await A(); const b = await B();`?',
        options: ['About 300 ms — they overlap', 'About 500 ms — the second starts only after the first completes', 'About 200 ms', 'It depends on the microtask queue'],
        answer: 1,
        explanation: 'Await serializes: B is not even called until A settles, so the times add — 500 ms. Moving both calls into Promise.all runs them concurrently for ~300 ms.'
      },
      {
        q: 'How does a promise rejection surface inside an async function?',
        options: [
          'The function returns undefined',
          'It throws at the awaiting line — catchable by an ordinary try/catch around the await',
          'It crashes the process immediately',
          'It silently stops the function'
        ],
        answer: 1,
        explanation: 'await converts rejection into a throw at that exact line — which is why standard try/catch/finally handles async errors with no special machinery.'
      },
      {
        q: 'What is wrong with `items.forEach(async (item) => { await save(item); }); console.log("done");`?',
        options: [
          'Nothing — forEach awaits each callback',
          'forEach discards the promises the async callbacks return, so it never waits and "done" logs first',
          'async callbacks cannot take parameters',
          'forEach requires a for/of wrapper'
        ],
        answer: 1,
        explanation: 'forEach has no promise awareness: the async callbacks all start, their promises are dropped, and the loop completes synchronously — replace it with Promise.all + map, or a for/of with await.'
      },
      {
        q: 'Which form runs its per-item async work strictly one item at a time?',
        options: [
          '`await Promise.all(items.map(asyncFn))`',
          '`items.forEach(asyncFn)`',
          '`for (const item of items) { await asyncFn(item); }`',
          '`items.map(asyncFn)`'
        ],
        answer: 2,
        explanation: 'Inside a for/of, each await suspends the function before the next iteration begins — true sequencing; the map/all forms run items concurrently, and forEach runs them detached and unawaited.'
      },
      // University-pattern: async await suspension — execution order (original)
      {
        q: "In what order do the numbers print?\n```js\nasync function work() {\n  console.log(1);\n  await null;\n  console.log(2);\n}\nwork();\nconsole.log(3);\n```",
        options: ["`1`, `2`, `3`", "`2`, `1`, `3`", "`3`, `1`, `2`", "`1`, `3`, `2`"],
        answer: 3,
        explanation: "Step 1: The code given calls an async function that logs, awaits, and logs again, with one more log after the call. Step 2: The governing rules are that an async function body runs synchronously up to its first `await`, that the `await` suspends the function and schedules its remainder as a microtask, and that the caller continues synchronously. Step 3: Tracing stepwise, `work()` starts and prints `1`, suspends at `await null`, the caller prints `3`, and the microtask queue then resumes the function to print `2`. Step 4: The distractors fail because `2` cannot print before the suspension lifts, and `3` cannot precede `1` since the function starts synchronously. Step 5: Therefore the order is `1`, `3`, `2`."
      }
    ]
  },

  // ---------------------------------------------------------------- 13.4
  {
    sectionId: 'js-ch13-s4',
    readingTime: 7,
    intro: 'Some asynchronous things are not “one value later” but “many values, over time”: lines arriving from a log file, pages from an API, messages from a queue. For those, the **asynchronous iteration protocol** combines Section 12.1’s iterators with Section 13.2’s promises: `next()` returns a promise of `{value, done}`, and the `for await...of` loop drains the sequence one awaited item at a time. Node streams implement it natively — making “read a file line by line” read exactly like a plain loop.',
    objectives: [
      'State the async iteration protocol: Symbol.asyncIterator and promise-valued next()',
      'Consume async iterables with for await...of',
      'Read Node streams chunk by chunk, handling records split across chunk boundaries',
      'Convert callback- or event-based sources into async iteration'
    ],
    concepts: [
      {
        term: 'The async iteration protocol',
        kind: 'definition',
        statement: 'An **asynchronous iterable** is an object with a `[Symbol.asyncIterator]()` method returning an iterator whose `next()` returns a **Promise of `{value, done}`** — the ordinary protocol of Section 12.1 with each step wrapped in a promise. A distinct well-known symbol keeps sync and async iteration from ever colliding on the same object.',
        detail: 'The naming is mnemonic: **yield** produces a value (Section 12.3); **await** consumes a promise (Section 13.3); async generators get to do both, and consumers get to `for await` the result.'
      },
      {
        term: 'for await...of',
        kind: 'method',
        statement: '`for await (const item of asyncIterable) { ... }` awaits each `next()` promise before running the body with the resolved value — a loop that pauses per item while the thread stays free (Section 13.3’s await semantics, in loop form). It also accepts ordinary **sync** iterables, awaiting each value; and if any step’s promise rejects, the whole loop throws.',
        detail: 'Where `Promise.all` (13.2) handles a fixed, known set of async results **in parallel**, `for await` handles a **sequential stream of unknown length** — the two tools answer different questions and compose naturally: `for await` a stream whose items are themselves processed in parallel.'
      },
      {
        term: 'Node streams are async iterables',
        kind: 'method',
        statement: 'Modern Node makes its streams implement `Symbol.asyncIterator`, so reading becomes:\n```js\nimport { createReadStream } from "node:fs";\n\nfor await (const chunk of createReadStream("big.log", "utf8")) {\n  // chunk is a string slice of the file, one per read\n}\n```\nEach iteration corresponds to one `read()` completing — the loop advances exactly as fast as the **producer** supplies data and the consumer digests it.',
        detail: 'Chunks arrive in buffer-sized pieces (typically 64 KB), not in logical records — the line-splitting pattern below is the standard remedy. Backpressure is handled by the protocol itself: while the loop body awaits, the stream waits.'
      },
      {
        term: 'Records split across chunk boundaries',
        kind: 'method',
        statement: 'When a file is read in chunks, a logical record (a line) can be split across two chunks. The standard pattern buffers a **leftover** tail: concatenate, split on the separator, pop the final (possibly partial) piece back into the buffer, process only the complete records — and flush the last leftover after EOF.',
        detail: '\n```js\nlet leftover = "";\nfor await (const chunk of stream) {\n  const lines = (leftover + chunk).split("\\n");\n  leftover = lines.pop();        // last piece may be incomplete\n  for (const line of lines) { handle(line); }\n}\nif (leftover) handle(leftover); // final line without trailing newline\n```'
      },
      {
        term: 'async generators produce async iterables',
        kind: 'method',
        statement: 'An `async function*` (Section 12.4) is the shortest path to a custom async iterable — the paginated-API example there is this section’s general pattern: `await` to fetch the next batch, `yield*` to emit its items, loop until exhausted. Any callback-based source can be wrapped the same way.',
        detail: 'The composition rule: **await inside the producer** (fetches), **for await at the consumer** (drains). Between them, the promise-valued `next()` carries each item across the boundary — the same decoupling Section 12.1 gave sync iteration, made asynchronous.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: reading a stream with for await',
        problem: 'Count the bytes of a large file without ever holding it all in memory, and explain what the loop actually waits on:\n```js\nimport { createReadStream } from "node:fs";\n\nlet total = 0;\nfor await (const chunk of createReadStream("video.bin")) {\n  total += chunk.length;\n}\nconsole.log(total);\n```',
        steps: [
          { label: 'Step 1: The stream opens, nothing is read yet', text: '`createReadStream` returns a Readable stream — an async iterable wrapping a file descriptor. The for await calls `[Symbol.asyncIterator]()` once and then `next()` — a promise that resolves when the **first chunk** of data has actually arrived from the OS.' },
          { label: 'Step 2: Each iteration is one completed read', text: 'The body receives a Buffer (`chunk` — a Uint8Array view, Section 11.2) holding up to 64 KB, adds `chunk.length` to `total`, and loops — which calls `next()` again and **awaits the next arrival**. While waiting, the thread is free: the event loop (13.1) runs other work; the kernel delivers the data on its own schedule (OSC Ch 12’s I/O subsystem doing the actual transfer).' },
          { label: 'Step 3: Backpressure for free', text: 'Because the loop does not ask for chunk N+1 until the body of chunk N finished, a slow consumer automatically slows the reading — the file is never read faster than it is processed, and memory holds one chunk at a time, whatever the file’s size.' },
          { label: 'Step 4: EOF ends the loop', text: 'When the final read returns fewer bytes and the next `next()` resolves with `{value: undefined, done: true}` — the async form of Section 12.1’s exhaustion — the loop exits, `total` is the byte count, and the stream is closed by the loop machinery (the early-exit `return()` analog of Section 12.2 exists here too: `break` cleans up).' }
        ],
        result: 'One number, constant memory, natural pacing: `for await` over a Node stream is file reading that reads exactly as fast as it is consumed.'
      },
      {
        title: 'Line splitting across chunk boundaries',
        problem: 'Count the lines of a log file whose chunks arrive as `"INFO a\\nINFO b"`, then `"​c\\nINFO d\\n"` — where the line `"INFO bc"` straddles the boundary. Apply the leftover pattern:\n```js\nasync function countLines(path) {\n  let leftover = "";\n  let count = 0;\n  for await (const chunk of createReadStream(path, "utf8")) {\n    const lines = (leftover + chunk).split("\\n");\n    leftover = lines.pop();     // may be a partial line\n    count += lines.length;\n  }\n  return count + (leftover ? 1 : 0);\n}\n```',
        steps: [
          { label: 'Step 1: Chunk one arrives', text: 'Leftover starts empty; `"INFO a\\nINFO b"` splits into `["INFO a", "INFO b"]`. The **pop** removes `"INFO b"` into `leftover` — it cannot be known complete (the next chunk might continue it). Only `["INFO a"]` is counted: `count` = 1.' },
          { label: 'Step 2: Chunk two stitches the boundary', text: 'The next chunk is `"c\\nINFO d\\n"`. The concatenation `leftover + chunk` is `"INFO bc\\nINFO d\\n"` — the boundary heals invisibly — splitting into `["INFO bc", "INFO d", ""]`. The pop stores `""` (the file ended with a newline), and both complete lines count: `count` = 3.' },
          { label: 'Step 3: EOF flushes any true remainder', text: 'After the loop, a non-empty `leftover` is a final line that lacked a trailing newline — the `+ (leftover ? 1 : 0)` accounts for it. Here `leftover` is empty, so the answer is **3**; had the file ended mid-line, the tail would count once.' },
          { label: 'Step 4: Why pop and not slice', text: 'The invariant: the buffer always holds at most one **possibly-partial** tail; every string before it is a complete record. Without the leftover (say, processing `chunk.split("\\n")` directly), the boundary would emit the fake lines `"INFO b"` and `"c"`, silently corrupting every record that happens to straddle a 64 KB edge — a bug that appears on large files only.' },
          { label: 'Step 5: The general shape', text: 'Replace `"\\n"` with any separator — `\\r\\n`, commas, JSON per line — and the pattern is the standard adapter from **byte streams** to **record streams**: for await provides the chunks; the leftover buffer provides the framing; `TextDecoder`’s `{ stream: true }` mode does the same stitching for multi-byte characters (Section 11.2).' }
        ],
        result: 'Three lines from two chunks — `"INFO a"`, `"INFO bc"`, `"INFO d"` — with the boundary-crossing line reassembled exactly once by the leftover buffer.'
      },
      {
        title: 'Wrapping a countdown: an async generator consumed by for await',
        problem: 'Emit a countdown that pauses 100 ms between numbers, and consume it — showing that each item is its own await:\n```js\nasync function* countdown(from) {\n  for (let i = from; i > 0; i--) {\n    await new Promise(r => setTimeout(r, 100));\n    yield i;\n  }\n}\n\nfor await (const n of countdown(3)) {\n  console.log(n);\n}\nconsole.log("liftoff");\n```',
        steps: [
          { label: 'Step 1: The generator sleeps before each item', text: 'Inside the async generator (Section 12.4), each iteration awaits a 100 ms timer — so `next()` cannot resolve its `{value, done}` promise until the sleep completes. The timer callback resolves the promise; the promise resolution resumes the generator; the yield delivers the value — three layers of later, each doing one job.' },
          { label: 'Step 2: The loop drains, one item at a time', text: 'The for await awaits `next()`, gets `3`, runs the body (logs 3), awaits `next()` again — which starts a fresh 100 ms sleep. Sequential by construction: no item is fetched before the previous body finished.' },
          { label: 'Step 3: Completion flows through the protocol', text: 'When `i` reaches 0, the loop for the generator ends and its `next()` resolves `{value: undefined, done: true}` — the for await exits and `"liftoff"` logs, roughly 300 ms after the start, with the thread free the entire time (the sleeps awaited; nothing blocked).' },
          { label: 'Step 4: The consumer controls pacing implicitly', text: 'Had the body been slow — say each log took 50 ms of work — the generator’s next sleep would simply overlap the consumer’s work: the pattern degrades gracefully in either direction, which is why it also fits pages-from-an-API (Section 12.4) and events-from-a-queue: one item, one await, whenever both sides are ready.' }
        ],
        result: '3, 2, 1 at ~100 ms intervals, then `"liftoff"` — a custom async iterable built with async generator syntax and drained by for await, with the thread never blocked.'
      }
    ],
    keyTakeaways: [
      'Async iterables implement `[Symbol.asyncIterator]()` whose `next()` returns a **Promise of `{value, done}`** — the sync protocol with promised steps.',
      '`for await...of` awaits each step before running the body; it accepts sync iterables too, and any step rejection throws out of the loop.',
      '`Promise.all` is for a **fixed known set** in parallel; `for await` is for an **unknown-length sequence** in order — different questions, both essential.',
      'Node streams are async iterables: `for await (const chunk of createReadStream(p))` reads in ~64 KB chunks with backpressure and constant memory.',
      'Logical records can straddle chunk boundaries: keep a leftover tail, split, pop the partial piece back, and flush after EOF.',
      'Async generators (`async function*`) are the standard adapter from any async source — APIs, queues, timers — into the async iteration protocol.'
    ],
    quiz: [
      {
        q: 'What distinguishes an async iterator from a sync one (Section 12.1)?',
        options: [
          'It uses Symbol.iterator with a different return type',
          'Its next() returns a Promise that resolves to {value, done}',
          'It can only be consumed by while loops',
          'It requires Node.js'
        ],
        answer: 1,
        explanation: 'The async protocol is the same {value, done} contract, one promise deep — each step resolves when the data is ready; Symbol.asyncIterator keeps it separate from sync iteration.'
      },
      {
        q: 'What does each iteration of `for await (const chunk of createReadStream(path))` wait for?',
        options: [
          'The entire file to be read into memory',
          'The next chunk to arrive from the OS — one read completion per iteration',
          'A timer',
          'Nothing — it is synchronous'
        ],
        answer: 1,
        explanation: 'Each next() resolves when a chunk has actually arrived: the loop advances at the pace of the producer, holding one chunk at a time instead of the whole file.'
      },
      {
        q: 'Why does the line-splitting pattern `lines.pop()` the last element of each split?',
        options: [
          'To discard empty lines',
          'Because the final piece may be a partial line whose remainder arrives in the next chunk — it is buffered, not counted',
          'Because pop is faster than slice',
          'To sort the lines'
        ],
        answer: 1,
        explanation: 'Records can straddle chunk boundaries: the popped tail is concatenated with the next chunk, so boundary-crossing lines are reassembled exactly once — counting it early would split one record into two fragments.'
      },
      {
        q: 'Which tool fits “process an unbounded sequence of messages arriving over time, in arrival order”?',
        options: [
          '`Promise.all` over an array of them',
          '`for await...of` over an async iterable that yields each message',
          'A plain `for...of` loop',
          'A single await of the last message'
        ],
        answer: 1,
        explanation: 'Unknown length and sequential arrival define async iteration; Promise.all needs a complete, finite array up front — the wrong shape for a stream.'
      },
      {
        q: 'Inside `async function* g()`, what may the body do that a normal generator’s cannot?',
        options: [
          'Yield multiple values',
          'Delegate with yield*',
          'Await promises between yields',
          'Return a value'
        ],
        answer: 2,
        explanation: 'async generators allow await in the body — each next() becomes a promise that resolves once the awaited operation and the following yield both complete (Section 12.4).'
      }
    ]
  }
]
