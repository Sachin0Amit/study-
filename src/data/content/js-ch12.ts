import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 12: Iterators and Generators (Sections 12.1 – 12.4)
// Master study content.
// ============================================================================

export const jsCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'js-ch12-s1',
    readingTime: 7,
    intro: 'The `for/of` loop looks like a language feature baked in for arrays, but it is really a **protocol**: any object that can produce an iterator can be looped over, spread into an array, or destructured. The protocol is two small ideas — an **iterator** is an object with a `next()` method, and an **iterable** is an object with a `[Symbol.iterator]()` method that produces iterators — and they quietly power half the language surface you use every day.',
    objectives: [
      'State the iterator protocol: next() returns {value, done}',
      'Distinguish an iterator from an iterable and connect them via Symbol.iterator',
      'Trace how for/of consumes an iterable, one next() call at a time',
      'List the built-in iterables and the language features that consume the protocol',
      'Explain why iterators are one-shot cursors while iterables can produce fresh ones'
    ],
    concepts: [
      {
        term: 'The iterator protocol',
        kind: 'definition',
        statement: 'An **iterator** is any object with a `next()` method that takes no arguments and returns `{ value, done }`: `value` is the current item and `done` is `false` while more remain. The final call returns `{ value: undefined, done: true }` — and every later call returns that same exhausted result.',
        detail: 'The returned object is a plain record each time — a fresh `{value, done}` per call. Iterators may also implement optional `return()` and `throw()` methods (Section 12.4), but `next()` is the whole contract.'
      },
      {
        term: 'Iterables and Symbol.iterator',
        kind: 'definition',
        statement: 'An **iterable** is any object with a method named by the **well-known symbol** `Symbol.iterator` that takes no arguments and returns an iterator. The method is how the object *answers the question* “loop over me” — and because it is called fresh for each loop, a well-behaved iterable can be iterated again and again.',
        detail: 'Classes declare it with computed method names: `[Symbol.iterator]() { ... }`. A bare iterator that also has `[Symbol.iterator]() { return this }` is both iterator and iterable — exactly what generator objects do (Section 12.3).'
      },
      {
        term: 'How for/of works',
        kind: 'method',
        statement: 'The engine desugars `for (const x of iterable)` into roughly:\n```js\nconst it = iterable[Symbol.iterator]();\nlet result = it.next();\nwhile (!result.done) {\n  const x = result.value;\n  // loop body\n  result = it.next();\n}\n```\nIf the object has no `Symbol.iterator`, the loop throws `TypeError: <value> is not iterable` **before the body runs even once**.',
        detail: 'The `while` form shows why an iterator’s `done` handling matters: the loop checks `done` *before* using `value`, so the return value carried by the final `{value, done: true}` is skipped by for/of — it is only visible to manual `next()` callers (Section 12.3).'
      },
      {
        term: 'Built-in iterables',
        kind: 'notation',
        statement: 'These types implement `Symbol.iterator` out of the box: **Array** (elements), **String** (code points, not UTF-16 code units), **Map** (entries `[key, value]`), **Set** (values), `arguments`, DOM **NodeList** and friends, and the **typed arrays** of Section 11.2. Note the absent: plain objects are **not** iterable — `for/of` over `{a: 1}` throws.',
        detail: 'String iteration walks code points, so `"héllo"` iterates 5 characters even though one of them occupies two UTF-16 code units — `"héllo".length` is still 5, but emoji-heavy strings can differ between `length` and iteration count.'
      },
      {
        term: 'Everything that consumes iterables',
        kind: 'insight',
        statement: 'It is not just `for/of`: the **spread operator** (`[...set]`), **array destructuring** (`const [first, ...rest] = iterable`), `Array.from(iterable)`, `Promise.all(iterable)`, `Map`/`Set` constructors, `yield*` (Section 12.3) and `for await` (Section 13.4) all obtain their items through `Symbol.iterator`. Implement the protocol once and the whole language starts working with your type.',
        detail: 'Flanagan’s framing: iteration is the mechanism that **decouples** producers of sequences from consumers of sequences — the same way function interfaces decouple callers from implementations.'
      },
      {
        term: 'Iterators are one-shot cursors',
        kind: 'insight',
        statement: 'An iterator is a **cursor with state**: once it reports `done: true` it is exhausted forever, and two loops that share one iterator each get only part of the data. The fix is structural — iterate `Symbol.iterator()` results, never a shared iterator; each call to for/of on an iterable requests a **fresh** iterator.',
        detail: 'This is also the feature: a one-pass iterator can represent a stream that cannot be rewound — lines arriving from a network, rows from a cursor — where “start over” has no meaning.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: a hand-built iterator',
        problem: 'Implement the protocol from scratch — no arrays, no generators — and drive it by hand:\n```js\nfunction makeIterator(items) {\n  let i = 0;\n  return {\n    next() {\n      return i < items.length\n        ? { value: items[i++], done: false }\n        : { value: undefined, done: true };\n    }\n  };\n}\n\nconst it = makeIterator(["a", "b", "c"]);\nit.next();\nit.next();\nit.next();\nit.next();\n```',
        steps: [
          { label: 'Step 1: The closure holds the cursor', text: 'Calling `makeIterator` creates a scope with `i = 0` and returns an object whose `next` closes over both `i` and `items` — the position lives in the closure, not in a field someone could poke.' },
          { label: 'Step 2: First next()', text: 'With `i = 0` and three items, `0 < 3` holds, so the ternary returns `{ value: "a", done: false }` — and the post-increment advances `i` to 1 **as a side effect of producing the value**. Every next() both reports and advances.' },
          { label: 'Step 3: The middle calls', text: 'The second call returns `{ value: "b", done: false }` with `i` now 2; the third returns `{ value: "c", done: false }` with `i` now 3 — the last productive call, though `done` still reads `false` on delivery.' },
          { label: 'Step 4: Exhaustion is permanent', text: 'The fourth call finds `3 < 3` false and returns `{ value: undefined, done: true }` — note `value: undefined` explicitly, because `value` is part of the contract even when empty. Calls five, six, ten: the same exhausted object forever; nothing resets `i`.' },
          { label: 'Step 5: Fresh iterators, fresh cursors', text: '`const it2 = makeIterator(["a", "b", "c"])` starts over at `i = 0` — independent state, same factory. Iterability comes from being able to call the factory; exhaustion comes from calling next too many times on one cursor.' }
        ],
        result: 'Four `next()` calls yield `{value: "a", done: false}`, `{value: "b", done: false}`, `{value: "c", done: false}`, `{value: undefined, done: true}` — the entire protocol in eleven lines.'
      },
      {
        title: 'Making the iterator self-iterable',
        problem: 'A bare iterator from `makeIterator` cannot be used with `for/of` — it has no `Symbol.iterator`. Add the one-line fix and trace what for/of does with it:\n```js\nfunction makeIterableIterator(items) {\n  let i = 0;\n  return {\n    next() {\n      return i < items.length\n        ? { value: items[i++], done: false }\n        : { value: undefined, done: true };\n    },\n    [Symbol.iterator]() {\n      return this;     // I am my own iterator\n    }\n  };\n}\n\nconst it = makeIterableIterator(["x", "y"]);\nfor (const v of it) { console.log(v); }\n```',
        steps: [
          { label: 'Step 1: The trick', text: 'Adding `[Symbol.iterator]() { return this }` makes the iterator its own iterable — the exact design generator objects use. When for/of asks “may I iterate you?”, the object answers “use me directly”.' },
          { label: 'Step 2: for/of calls the protocol', text: 'The loop executes `it[Symbol.iterator]()` (returning `it` itself), then calls `it.next()` — logging `"x"`, then `"y"` as the cursor advances through the loop’s internal while.' },
          { label: 'Step 3: Exhaustion in a loop', text: 'The third `next()` inside the loop’s check returns `done: true`, so the loop exits **after two iterations** — the loop never sees an undefined value, it only checks `done`.' },
          { label: 'Step 4: The one-shot lesson', text: 'A second `for (const v of it)` now runs **zero times**: `Symbol.iterator` returned the same exhausted cursor. Arrays work repeatedly because their `Symbol.iterator` builds a *new* iterator each call — the design decision Section 12.2 formalizes.' }
        ],
        result: 'One added method turns an iterator into a for/of-compatible iterable — at the cost of one-shot semantics, the same trade generators make.'
      }
    ],
    keyTakeaways: [
      'An iterator is an object whose `next()` returns `{value, done}`; exhaustion is permanent and reports `value: undefined`.',
      'An iterable is an object whose `[Symbol.iterator]()` **method** returns an iterator — fresh per call, which is what makes re-iteration possible.',
      'for/of desugars to `Symbol.iterator()` + a `while (!done)` loop of `next()` calls; non-iterables throw TypeError immediately.',
      'Built-in iterables: Array, String (code points), Map (entries), Set, `arguments`, NodeList, typed arrays — but **not** plain objects.',
      'Spread, destructuring, `Array.from`, `Promise.all`, Map/Set constructors and `yield*` all consume the same protocol — implement it once, use it everywhere.',
      'Iterators are stateful one-shot cursors: never share one between two loops; ask the iterable for a fresh one instead.'
    ],
    quiz: [
      {
        q: 'What must a method named `next()` on an iterator return?',
        options: [
          'The next value directly, or null when finished',
          'An object like { value, done } — with done true on the final call',
          'A Promise of the next value',
          'An array of remaining values'
        ],
        answer: 1,
        explanation: 'The protocol is `{value, done}` per call: value carries the item and done reports whether iteration has finished — the pair, not the value alone.'
      },
      {
        q: 'What makes an object *iterable*?',
        options: [
          'Having a next() method',
          'Having a method named [Symbol.iterator] that returns an iterator',
          'Being an array or a string',
          'Implementing a length property'
        ],
        answer: 1,
        explanation: 'Iterability is the presence of the Symbol.iterator method — it is the capability for/of, spread and destructuring test for; next() alone only makes an iterator.'
      },
      {
        q: 'What does `for (const x of {}) { }` do?',
        options: [
          'Loops over the object’s values',
          'Loops over the object’s keys',
          'Throws TypeError: {} is not iterable',
          'Runs zero times, silently'
        ],
        answer: 2,
        explanation: 'Plain objects do not implement Symbol.iterator — object iteration requires Object.keys/values/entries (or a custom protocol), and for/of refuses before the body executes.'
      },
      {
        q: 'After an iterator returns `{value: undefined, done: true}`, what does its next call return?',
        options: [
          'The first value again — iterators restart',
          'The same exhausted result {value: undefined, done: true}',
          'null',
          'It throws a RangeError'
        ],
        answer: 1,
        explanation: 'Exhaustion is permanent by contract: once done is true, the iterator keeps reporting done — rewindable sequences come from re-invoking Symbol.iterator on the iterable, not from the cursor.'
      },
      {
        q: 'Which language feature does NOT consume the iteration protocol?',
        options: [
          'The spread operator `[...set]`',
          'Array destructuring `const [a, b] = pair`',
          'Object destructuring `const { a } = obj`',
          '`for (const x of "hi")`'
        ],
        answer: 2,
        explanation: 'Object destructuring is property access by name — it never asks Symbol.iterator; spread in arrays, destructuring of arrays, and for/of over strings all go through the protocol.'
      }
    ]
  },

  // ---------------------------------------------------------------- 12.2
  {
    sectionId: 'js-ch12-s2',
    readingTime: 7,
    intro: 'Making your own class iterable is one method: `[Symbol.iterator]()` returning an iterator. Do that and `for/of`, spread, destructuring and `Array.from` all accept your objects as first-class citizens. This section builds the canonical example — a `Range` class that iterates `[from, to]` inclusive — and then the detail that separates toy iterators from production ones: the optional `return()` method that runs when a loop quits early.',
    objectives: [
      'Implement [Symbol.iterator]() in a class with a computed method name',
      'Trace iteration over a Range class and prove its re-iterability',
      'Keep cursor state in the iterator, not the iterable, and explain why',
      'Implement return() for cleanup when a loop exits early via break or throw'
    ],
    concepts: [
      {
        term: 'Computed method names',
        kind: 'notation',
        statement: 'A class or object literal defines the protocol method with **bracket syntax**: `[Symbol.iterator]() { ... }`. The brackets are not decoration — they evaluate the expression between them to compute the property name, which is how a symbol becomes a method name.',
        detail: 'Writing `symbolIterator()` would create a normal property named that — the engine would never find it. The brackets are required precisely because `Symbol.iterator` is a value, not an identifier.'
      },
      {
        term: 'The Range class',
        kind: 'method',
        statement: 'Flanagan’s canonical iterable — a numeric range inclusive of both ends:\n```js\nclass Range {\n  constructor(from, to) {\n    this.from = from;\n    this.to = to;\n  }\n\n  [Symbol.iterator]() {\n    let next = this.from;         // cursor state, local to THIS iteration\n    const last = this.to;\n    return {\n      next() {\n        return next <= last\n          ? { value: next++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n}\n```\nEvery loop over a Range gets a brand-new cursor starting at `from`.',
        detail: 'The class may also define ordinary methods (`includes(x)`, `toString()`) — being iterable is a capability it acquires, not the whole identity.'
      },
      {
        term: 'State lives in the iterator',
        kind: 'insight',
        statement: 'The cursor variables (`next`, `last`) are declared **inside** `[Symbol.iterator]()` — so each loop call creates them fresh. If the class instead kept `this.next` as an instance field, the second `for/of` over the same Range would resume at the exhausted position and iterate nothing.',
        detail: 'Design rule: the **iterable** describes what can be traversed; the **iterator** tracks how far one particular traversal has gone. Conflating the two is the classic first bug in custom iteration.'
      },
      {
        term: 'The optional return() method',
        kind: 'definition',
        statement: 'An iterator may implement `return()`, called by the engine when a loop exits **before** exhaustion — via `break`, `return`, `continue` to an outer label, or a thrown exception. Its job is cleanup (closing files, releasing locks); it must return an iterator result, conventionally `{ done: true }`. Without it, early exits simply skip the cleanup.',
        detail: '`return()` is not called when the loop finishes normally — exhaustion is already clean. Generators implement it automatically from their code structure (Section 12.4), which is one more reason to prefer them.'
      },
      {
        term: 'Iterating Maps and entries',
        kind: 'method',
        statement: 'Because a Map’s default iteration yields `[key, value]` entries, the destructuring loop is the idiomatic dictionary walk:\n```js\nfor (const [name, role] of team) {  // team is a Map\n  console.log(name, "->", role);\n}\n```\nAnd `Object.entries(obj)` bridges the non-iterable plain object into the same shape.',
        detail: 'That bridge is worth internalizing: `[...Object.entries(config)]`, `new Map(Object.entries(config))` — plain data flows into iterable structures through the entries view.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: iterating a Range',
        problem: 'For `const r = new Range(1, 4)`, trace two independent traversals and the spread:\n```js\nconst r = new Range(1, 4);\nfor (const n of r) { console.log(n); }\n[...r];\nfor (const n of r) { console.log(n); }\n```',
        steps: [
          { label: 'Step 1: The loop asks for an iterator', text: 'The first for/of evaluates `r[Symbol.iterator]()`. That call runs the method body: `next = this.from` (1) and `last = this.to` (4) become closure variables, and the fresh iterator object is handed to the loop.' },
          { label: 'Step 2: Four productive next() calls', text: 'The internal while calls `next()` four times — values 1, 2, 3, 4 with `done: false` each time, the cursor advancing from 1 to 5. The fifth call finds `5 <= 4` false and returns `{ done: true }`, ending the loop after logging 1, 2, 3, 4.' },
          { label: 'Step 3: Spread asks again', text: '`[...r]` invokes `r[Symbol.iterator]()` **a second time** — a second closure with `next = 1` — and drives it to exhaustion, collecting `[1, 2, 3, 4]`. The spread never reuses the loop’s old cursor; it cannot even see it.' },
          { label: 'Step 4: The second loop, from scratch', text: 'The second for/of likewise gets a third fresh iterator and logs 1, 2, 3, 4 again — **re-iterability**, the payoff of keeping the cursor in the iterator: `r` itself has no position to run down.' },
          { label: 'Step 5: Ranges are values', text: 'Because nothing is consumed, a Range composes like data: `[...new Range(1, 10)].filter(n => n % 3 === 0)` yields `[3, 6, 9]` — the range behaves as a value that can be viewed, not a resource that can be drained.' }
        ],
        result: 'Both loops and the spread each produce 1, 2, 3, 4 — three independent iterators from one iterable, because cursor state is created per iteration, never stored on the Range.'
      },
      {
        title: 'Cleanup with return(): breaking out early',
        problem: 'A log-reading loop must stop at the first "ERROR" line and release its file handle even then. Trace what happens when a for/of exits via `break`:\n```js\nclass LineReader {\n  constructor(lines) {\n    this.lines = lines;\n    this.handle = { name: "app.log", close() { console.log("closed app.log"); } };\n  }\n  [Symbol.iterator]() {\n    let i = 0;\n    const self = this;\n    return {\n      next() {\n        return i < self.lines.length\n          ? { value: self.lines[i++], done: false }\n          : { value: undefined, done: true };\n      },\n      return() {\n        self.handle.close();       // cleanup on early exit\n        return { done: true };\n      }\n    };\n  }\n}\n\nconst reader = new LineReader(["INFO start", "INFO ok", "ERROR crash", "INFO after"]);\nfor (const line of reader) {\n  if (line.startsWith("ERROR")) break;\n  console.log(line);\n}\n```',
        steps: [
          { label: 'Step 1: Iteration proceeds normally', text: 'The loop obtains an iterator and calls `next()` twice, logging `"INFO start"` then `"INFO ok"` — the cursor `i` sits at 2.' },
          { label: 'Step 2: The break fires mid-loop', text: 'The third `next()` delivers `"ERROR crash"`; the body executes `break` — an **abrupt exit** with two items still unconsumed and the file handle still open.' },
          { label: 'Step 3: The engine calls return()', text: 'Because the loop exits before `done: true`, the for/of machinery calls `it.return()` — the iterator’s chance to tidy up. Our implementation closes the handle (`"closed app.log"` prints) and returns `{ done: true }` to acknowledge the shutdown.' },
          { label: 'Step 4: What happens without return()', text: 'A bare iterator with no `return()` method simply gets abandoned — the handle stays open until garbage collection notices it. The optional method exists so iteration can participate in deterministic resource management.' },
          { label: 'Step 5: Normal exhaustion skips it', text: 'Had the loop run to the end (no ERROR line), `done: true` would end it and `return()` would **not** be called — a completed traversal has nothing left to clean. Only abrupt exits — break, return, throw — trigger the callback.' }
        ],
        result: 'The loop logs two INFO lines, breaks on the error, and the `return()` method closes the file on the way out — early exit with cleanup, the contract production iterators honor.'
      }
    ],
    keyTakeaways: [
      'Define `[Symbol.iterator]()` with bracket syntax — computed method names are how symbols become method names.',
      'Keep cursor state in local variables of the iterator: each `Symbol.iterator()` call creates fresh state, making the iterable re-iterable.',
      'The Range class is the canonical teaching example: `[from, to]` inclusive, one fresh cursor per loop, spread and destructuring work immediately.',
      'The optional `return()` method runs on abrupt exits (break, return, throw) for cleanup — never on natural exhaustion.',
      'Map iteration yields `[key, value]` pairs; `Object.entries()` bridges plain objects into the same shape.',
      'A generator function (Section 12.3) writes this whole pattern in two lines — but the manual form is what the generator compiles down to conceptually.'
    ],
    quiz: [
      {
        q: 'Inside a class, the correct way to declare the iteration protocol method is:',
        options: ['`symbolIterator() { ... }`', '`[Symbol.iterator]() { ... }`', '`Symbol.iterator() { ... }`', '`@iterator() { ... }`'],
        answer: 1,
        explanation: 'The bracketed form computes the property name from the Symbol value; the plain identifier forms create ordinary properties the engine will never consult.'
      },
      {
        q: 'A Range class keeps its cursor `next` as an instance field `this.next` instead of a local in [Symbol.iterator](). What breaks?',
        options: [
          'The first for/of loop over a Range fails',
          'The second loop over the same Range instance starts where the last ended — and iterates nothing if exhausted',
          'Spread stops working entirely',
          'Nothing — it is an equivalent design'
        ],
        answer: 1,
        explanation: 'Shared cursor state makes the iterable one-shot: the second traversal resumes at the abandoned position; fresh-local state per Symbol.iterator() call is what restores re-iterability.'
      },
      {
        q: 'When is an iterator’s `return()` method called?',
        options: [
          'After every next() call',
          'When the loop exits early — break, return or a thrown error',
          'When iteration completes normally',
          'When the iterator is garbage collected'
        ],
        answer: 1,
        explanation: 'return() is the abrupt-exit hook: for/of invokes it so the iterator can close files or release locks; natural exhaustion ends cleanly without it.'
      },
      {
        q: 'For `new Range(1, 3)` implemented as in this section, what is `[...range]`?',
        options: ['`[1, 2]` — the end is exclusive', '`[1, 2, 3]` — the range is inclusive of both ends', '`[1]`', 'It throws — Ranges must be iterated with for/of only'],
        answer: 1,
        explanation: 'The condition `next <= last` includes the upper bound: 1, 2, 3 — and spread consumes the same protocol for/of uses, so both produce the inclusive sequence.'
      },
      {
        q: 'Which loop shape is the idiomatic way to walk a `Map` named `team`?',
        options: [
          '`for (const entry of team)` then index `entry[0]` and `entry[1]`',
          '`for (const [name, role] of team)`',
          '`for (const name in team)`',
          '`for (const name of Object.keys(team))`'
        ],
        answer: 1,
        explanation: 'Map iteration yields [key, value] arrays, so destructuring in the loop head names both parts at once — `for...in` is the property-name loop for plain objects and the wrong tool entirely.'
      }
    ]
  },

  // ---------------------------------------------------------------- 12.3
  {
    sectionId: 'js-ch12-s3',
    readingTime: 8,
    intro: 'Writing iterators by hand is ceremony: the object, the closure, the `{value, done}` bookkeeping. **Generators** make it trivial: a function declared with `function*` whose body can **pause itself** at each `yield`. Calling a generator does not run its body — it returns a generator object that runs the body one segment at a time as you call `next()`. The result is iterable, reusable for exactly one pass, and powerful enough to express infinite sequences and recursive traversals in a few lines.',
    objectives: [
      'Define generators with function* and read yield as "pause and produce"',
      'Trace stepped execution: where the body pauses, what next() returns, what resumes',
      'Use the value passed to next(x) as the result of the paused yield expression',
      'Delegate with yield* and explain its return value',
      'Write lazy infinite sequences and consume them safely'
    ],
    concepts: [
      {
        term: 'Generator functions',
        kind: 'definition',
        statement: 'A function declared `function* g() { ... }` (or a method `*g() { ... }` in a class, or an expression) is a **generator function**. Calling it does **not** execute the body — it returns a **generator object**, paused at the very start. Nothing inside runs until the first `next()`.',
        detail: 'The asterisk is part of the function, not the name: `function* gen()` and `function *gen()` are the same, and the convention is `function* gen()`. `typeof` still reports `"function"` for the declaration itself.'
      },
      {
        term: 'yield',
        kind: 'definition',
        statement: '`yield value` **pauses** the generator: the enclosing `next()` call returns `{ value, done: false }` with the yielded operand. The next `next()` **resumes** execution exactly at that yield — local variables, loops and try blocks intact — and runs to the next yield or the end of the body.',
        detail: 'This is cooperative multitasking in miniature: the function chooses where to pause (`yield`) and the consumer chooses when to continue (`next()`). No callback, no closure juggling — the compiler saves your place.'
      },
      {
        term: 'yield is an expression',
        kind: 'insight',
        statement: 'Because execution pauses *at* the yield, the value of the whole `yield x` expression is whatever the **next** `next(v)` call passes as its argument: `const got = yield x;` first produces `x`, then — on resume — `got` becomes `v`. Generators are two-way channels, not one-way taps.',
        detail: 'The first `next()` has nothing to resume, so its argument is ignored — a protocol quirk that generator-based coroutines must account for (Section 12.4 uses it for pumping pipelines).'
      },
      {
        term: 'The return value',
        kind: 'insight',
        statement: 'A `return x` inside a generator body (or falling off the end) produces the **final** result: `{ value: x, done: true }` — visible only to a manual `next()`. `for/of`, spread and `yield*` treat `done: true` as “stop” and **discard that value** — except `yield*`, which evaluates to it.',
        detail: 'After the final result, the generator is exhausted: further `next()` calls return `{ value: undefined, done: true }` forever — the one-shot cursor of Section 12.1.'
      },
      {
        term: 'Generator objects are iterable',
        kind: 'definition',
        statement: 'The object returned by a generator call implements the full iterator protocol — `next()`, `return()`, `throw()` (Section 12.4) — **and** `[Symbol.iterator]() { return this }`. So `for/of`, spread, destructuring and `Array.from` all consume generators directly; destructuring takes items from the front: `const [first] = fibGen()`.',
        detail: 'Being its own iterable is what makes a generator one-shot: two loops over the same generator object share one cursor. To re-iterate, call the generator function again — a fresh paused body each time.'
      },
      {
        term: 'yield* delegation',
        kind: 'definition',
        statement: '`yield* iterable` delegates: it pulls every item from the inner iterable and re-yields each one **as if written inline**, then evaluates to the inner iteration’s **return value** — the `{value, done: true}` value that for/of would have discarded. Recursion plus `yield*` flattens nested structures in two lines.',
        detail: '\n```js\nfunction* flatten(arr) {\n  for (const item of arr) {\n    if (Array.isArray(item)) {\n      yield* flatten(item);   // delegate to the sub-generator\n    } else {\n      yield item;\n    }\n  }\n}\n[...flatten([1, [2, [3, 4]], 5])];   // [1, 2, 3, 4, 5]\n```'
      },
      {
        term: 'Lazy and infinite sequences',
        kind: 'insight',
        statement: 'A generator only computes values **on demand**, so it can define a sequence with no end at all — `fibonacci()` can yield forever. Safety comes from the consumer side: take a bounded number of items, and the remaining mathematics simply never happens.',
        detail: 'This laziness is what pipes unbounded streams through `filter`/`map`-style generator stages (Section 12.4) — each stage processes one item at a time, memory stays flat, and early exit skips the rest of the sequence entirely.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: stepping through a generator',
        problem: 'Trace every call of this generator — including the value flowing back in and the return value:\n```js\nfunction* conversation() {\n  yield "hello";\n  const got = yield "what is your name?";\n  yield "nice to meet you, " + got;\n  return "goodbye";\n}\n\nconst g = conversation();\ng.next();\ng.next();\ng.next("ada");\ng.next();\ng.next();\n```',
        steps: [
          { label: 'Step 1: Calling the function runs nothing', text: '`conversation()` evaluates and returns a generator object — the body has not executed a single statement; it is paused at the top. That is the fundamental difference from ordinary functions.' },
          { label: 'Step 2: First next() runs to the first yield', text: '`g.next()` starts the body, which runs `yield "hello"` — producing `{ value: "hello", done: false }` — and pauses **at** the yield, the first statement only half-executed.' },
          { label: 'Step 3: Second next() — still nothing resumes into a variable', text: 'The second `g.next()` (no argument) resumes: the `yield "hello"` expression evaluates to `undefined` (nothing was passed), the body proceeds to `yield "what is your name?"` and pauses there, returning that value with `done: false`.' },
          { label: 'Step 4: Third next("ada") — the argument becomes the yield’s value', text: 'The call resumes the paused `const got = yield "what is your name?"` — and this time the argument flows in: `got` binds to `"ada"`. The body runs to `yield "nice to meet you, ada"` and pauses, returning it.' },
          { label: 'Step 5: Fourth next() reaches the return', text: 'Resuming, the body executes `return "goodbye"` — the generator finishes and the call returns `{ value: "goodbye", done: true }`. The return value exists **only** here; `for/of` would have stopped one call earlier and never seen it.' },
          { label: 'Step 6: Fifth next() — exhausted', text: 'The body is over; the call returns `{ value: undefined, done: true }`, as will every future call. Re-running the conversation requires a fresh `conversation()` — the body, its variables and its position die with the generator.' }
        ],
        result: 'The five calls return: `{value: "hello"}`, `{value: "what is your name?"}`, `{value: "nice to meet you, ada"}`, `{value: "goodbye", done: true}`, `{value: undefined, done: true}` — pause, resume, channel-in, return, exhaust.'
      },
      {
        title: 'Flattening nested arrays with yield*',
        problem: 'Flatten an arbitrarily nested array of values with a recursive generator, and trace how deep items bubble up:\n```js\nfunction* flatten(arr) {\n  for (const item of arr) {\n    if (Array.isArray(item)) {\n      yield* flatten(item);\n    } else {\n      yield item;\n    }\n  }\n}\n\n[...flatten([1, [2, [3, 4]], 5])];\n```',
        steps: [
          { label: 'Step 1: The outer generator walks the top level', text: 'The spread drives `flatten([1, [2, [3, 4]], 5])`: item 1 is not an array, so `yield 1` produces it directly. Item 2 **is** an array, so the generator hits `yield* flatten([2, [3, 4]])` — creating a second, nested paused body.' },
          { label: 'Step 2: Delegation is re-yielding', text: 'The `yield*` loop is invisible from outside: each item the inner generator yields (first `2`) passes through the outer generator **as if it had been yielded there**. The consumer’s next() pulls through both levels; there is no nested iterator for it to manage.' },
          { label: 'Step 3: Recursion bottoms out', text: 'Inside, item `[3, 4]` triggers `yield* flatten([3, 4])` — a third level — which yields 3, then 4. Each value transits every enclosing `yield*` on its way out: 3 and 4 surface through two delegations.' },
          { label: 'Step 4: The tail completes', text: 'Back at the top, item 5 yields plainly. The spread collects, in order: `1`, `2`, `3`, `4`, `5` — a **depth-first** walk produced by recursion that reads like the data structure it traverses.' },
          { label: 'Step 5: Why this beats the loop version', text: 'An iterative flattener needs an explicit stack and a while loop pushing and popping; the recursive generator lets the **call stack** be the data stack, with `yield*` doing the wiring — the same structure, a third of the code, and lazy: each value is produced only when the consumer asks.' }
        ],
        result: '`[1, 2, 3, 4, 5]` — depth-first flattening where `yield*` transparently forwards every nested yield to the top.'
      },
      {
        title: 'An infinite fibonacci generator',
        problem: 'Define the endless Fibonacci sequence safely, consume a bounded prefix of it, and explain why nothing explodes:\n```js\nfunction* fibonacci() {\n  let [a, b] = [0, 1];\n  for (;;) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nfunction* take(n, seq) {\n  for (const x of seq) {\n    if (n-- <= 0) return;\n    yield x;\n  }\n}\n\n[...take(6, fibonacci())];\n```',
        steps: [
          { label: 'Step 1: A loop with no exit', text: 'The `for (;;)` never ends by design: the generator defines the *entire* sequence 0, 1, 1, 2, 3, 5, 8... without computing any of it. Called alone, `fibonacci()` just returns a paused body — no infinite loop runs yet.' },
          { label: 'Step 2: take() is a bounded lens', text: '`take(6, seq)` loops over the sequence (the protocol of Section 12.1) and re-yields six items, then `return`s on the seventh pull — a generator wrapping a generator, both lazy.' },
          { label: 'Step 3: The pull chain', text: 'The spread pulls from `take`; `take` pulls from `fibonacci`; the fibonacci body executes exactly **seven** segments — six yields producing 0, 1, 1, 2, 3, 5 plus the partial run that hits the `return`. The remaining infinite mathematics never happens.' },
          { label: 'Step 4: The result', text: '`[...take(6, fibonacci())]` is `[0, 1, 1, 2, 3, 5]` — bounded consumption of an unbounded definition, with memory flat: only `a`, `b`, `n` and the current item ever exist.' },
          { label: 'Step 5: Composability', text: 'Because every consumer uses the same protocol, `take` works on **any** iterable — arrays, Ranges, other generators — and new stages (skip, map, filter as generators) compose the same way. This is the pipeline pattern Section 12.4 develops into a full toolkit.' }
        ],
        result: 'Six Fibonacci numbers from an endless generator: laziness means the definition can be infinite because evaluation is finite — demand-driven computation.'
      }
    ],
    keyTakeaways: [
      'A `function*` call does not run the body; it returns a generator object paused at the start.',
      '`yield x` pauses the body and returns `x` from the current `next()`; the next call resumes exactly there with all local state intact.',
      'The value passed to `next(v)` becomes the value of the paused `yield` expression — a two-way channel (the first call’s argument is ignored).',
      'A `return x` in the body produces the final `{value: x, done: true}` — for/of discards it; `yield*` evaluates to it.',
      'Generator objects implement next/return/throw and `[Symbol.iterator]() { return this }` — iterable, but one-shot: re-iterate by calling the function again.',
      '`yield* iterable` re-yields every inner item inline; recursion plus `yield*` flattens or walks nested structures in a few lines.',
      'Generators are lazy: infinite sequences are safe when consumers bound them — the uncomputed tail never runs.'
    ],
    quiz: [
      {
        q: 'What does `const g = gen();` do for `function* gen() { console.log("ran"); yield 1; }`?',
        options: [
          'Runs the body and logs "ran"',
          'Returns a generator object — the body has not started, so nothing logs',
          'Throws, because generators must be invoked with next()',
          'Returns a Promise'
        ],
        answer: 1,
        explanation: 'Calling a generator function never executes its body; it returns a paused generator object — the first line runs only when the first next() is called.'
      },
      {
        q: 'Inside a generator, `const got = yield x;` — what is `got` bound to?',
        options: [
          'The value x',
          'Whatever argument is passed to the NEXT next() call that resumes this yield',
          'The previous value yielded',
          'undefined, always'
        ],
        answer: 1,
        explanation: 'Execution pauses at the yield; when the consumer calls next(v), v becomes the value of the yield expression and thus of got — the mechanism that makes generators two-way.'
      },
      {
        q: 'A generator body ends with `return "end"`. Which consumer can ever see the string "end"?',
        options: [
          '`for (const v of gen())` — it logs "end" last',
          'A spread `[...gen()]`',
          'A manual `next()` call, which receives { value: "end", done: true }',
          'None — the value is discarded by every consumer'
        ],
        answer: 2,
        explanation: 'Return values ride only the final {value, done: true} result, which loop constructs treat purely as "stop" — only a hand-driven next() (or yield*) reads the value.'
      },
      {
        q: 'What does `yield* inner` do inside a generator?',
        options: [
          'Yields the inner generator object itself as one value',
          'Delegates: re-yields every value the inner iterable produces, then evaluates to its return value',
          'Runs the inner generator to completion immediately, discarding values',
          'Creates a default export'
        ],
        answer: 1,
        explanation: 'yield* is delegation — every inner item surfaces as if yielded locally, and the whole expression’s value is the inner iteration’s final return value.'
      },
      {
        q: 'Why is an infinite generator like `function* fibonacci() { for (;;) { yield a; ... } }` safe?',
        options: [
          'The engine stops it after 1000 values',
          'Nothing runs until a consumer pulls values — bounded consumption computes only what is demanded',
          'It is not safe — it will hang the program on call',
          'The for(;;) is special-cased by generators'
        ],
        answer: 1,
        explanation: 'Generators are lazy: calling fibonacci() runs nothing, and each next() executes only to the next yield — the infinite tail beyond the consumer’s interest is never evaluated.'
      },
      // University-pattern: generator protocol — next result objects (original)
      {
        q: "What does this program print?\n```js\nfunction* seq() {\n  yield 1;\n  yield 2;\n}\nlet it = seq();\nconsole.log(it.next());\nconsole.log(it.next());\nconsole.log(it.next());\n```",
        options: ["`{ value: 1, done: false }`, `{ value: 2, done: false }`, then `{ value: undefined, done: true }`", "`1`, `2`, then `undefined`", "`{ value: 1, done: true }` on the first call", "A TypeError, because generators need a `for/of` loop"],
        answer: 0,
        explanation: "Step 1: The code given creates a two-yield generator and pulls it three times. Step 2: The governing rules are that a generator body stays paused until `next()` is called, that each `next()` runs to the following `yield` and returns a `{ value, done }` record, and that running past the last `yield` returns `done: true`. Step 3: Tracing pull by pull, the first call runs to `yield 1` and reports `{ value: 1, done: false }`, the second runs to `yield 2` and reports `{ value: 2, done: false }`, and the third finishes the body reporting `{ value: undefined, done: true }`. Step 4: The distractors fail because `next()` always wraps values in result records, the first call pauses rather than completes, and manual `next()` calls are fully supported. Step 5: Therefore the three result records print in that order."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.4
  {
    sectionId: 'js-ch12-s4',
    readingTime: 9,
    intro: 'The advanced half of generators makes them a general-purpose control-flow tool: `next(x)` pushes values **in**, `throw(e)` injects an exception **at the paused yield**, `return(x)` terminates with `finally` cleanup — and generators that consume other generators become **lazy pipelines**. Then the finale: `async function*` marries generators with `await`, producing asynchronous sequences that `for await...of` drains — the pattern for reading paginated APIs and streaming data (Section 13.4 continues the story).',
    objectives: [
      'Drive generators with next(x), return(x) and throw(e) — and catch injected exceptions inside',
      'Build lazy pipelines by chaining generator functions that consume iterables',
      'Declare async generators with async function* and consume them with for await...of',
      'Trace an async generator walking a paginated HTTP API end to end'
    ],
    concepts: [
      {
        term: 'Pushing values in with next(x)',
        kind: 'method',
        statement: 'The argument of `it.next(x)` becomes the value of the currently paused `yield` expression. A pipeline consumer uses this to pump data **into** a generator mid-flight — each `yield` becomes a request for the next input: `const input = yield output;` produces `output` and, on resume, receives the caller’s next value.',
        detail: 'The asymmetry to remember: the **first** `next()` argument is ignored (nothing is paused yet), so a pump loop usually discards the first result or primes the generator with `next()` before feeding it.'
      },
      {
        term: 'return(): terminating a generator',
        kind: 'definition',
        statement: '`it.return(value)` acts as if a `return` statement were inserted at the paused yield: the generator body unwinds — any `finally` blocks **run** — and the call returns `{ value, done: true }`. Afterwards the generator is exhausted.',
        detail: 'This is the manual form of the for/of early-exit cleanup from Section 12.2: the loop’s break calls `return()`; you can call it yourself to shut a generator down deterministically — closing a pipeline stage you no longer need.'
      },
      {
        term: 'throw(): injecting an exception',
        kind: 'definition',
        statement: '`it.throw(error)` makes the currently paused `yield` **throw** the given error, as if the expression itself raised it. The generator can catch it with a `try/catch` around that yield — turning the generator into a coroutine with external signaling; an uncaught injected error propagates back out of the `throw()` call itself.',
        detail: 'Between `next`, `throw` and `return`, the caller holds all three controls of a paused generator: advance, alarm and abort — the vocabulary of cooperative coroutines.'
      },
      {
        term: 'Generator pipelines',
        kind: 'insight',
        statement: 'A generator function that takes an **iterable** and yields transformed items composes with others: `[...pipeline3(pipeline2(pipeline1(source)))]` — each stage pulls one item at a time from the stage above. Nothing is buffered: map and filter stages stay $O(1)$ in memory, and stages run interleaved per item, not per stage.',
        detail: '\n```js\nfunction* map(iter, f)  { for (const x of iter) yield f(x); }\nfunction* filter(iter, p) { for (const x of iter) if (p(x)) yield x; }\nfunction* take(n, iter)  { for (const x of iter) { if (n-- <= 0) return; yield x; } }\n```'
      },
      {
        term: 'Async generators',
        kind: 'definition',
        statement: '`async function* gen() { ... }` allows `await` inside the body, and each `yield` still pauses — but now `next()` returns a **Promise** of `{value, done}`, resolving when the awaited operation completes and the next item is ready. Async generators are consumed with `for await (const x of gen())`, never with plain `for/of`.',
        detail: 'The rule of thumb: `yield` produces a value to the consumer; `await` consumes a value from a promise. In `const data = yield await fetchJson(url)`, the fetch finishes first, then its result is yielded.'
      },
      {
        term: 'for await...of',
        kind: 'method',
        statement: '`for await (const item of asyncIterable)` awaits each `next()` promise before running the body with the resolved value — sequential asynchronous iteration, one item at a time, in order. It also accepts **sync** iterables (awaiting each yielded value if it is a promise), and it rejects the whole loop if any awaited step rejects.',
        detail: 'Where `Promise.all` (Section 13.2) fetches a **fixed** array of things in parallel, `for await` drains a **sequence of unknown length** — pages, lines, events — the async counterpart of Section 12.1’s one-shot iterators.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: return() and throw() into a guarded generator',
        problem: 'Predict the output of each shutdown style against a generator with `finally` cleanup:\n```js\nfunction* guarded() {\n  try {\n    yield 1;\n    yield 2;\n  } catch (e) {\n    console.log("caught", e);\n    yield "recovered";\n  } finally {\n    console.log("cleanup");\n  }\n}\n\nconst g = guarded();\ng.next();\ng.return("stop");\n\nconst h = guarded();\nh.next();\nh.throw(new Error("inject"));\n```',
        steps: [
          { label: 'Step 1: The try is live across the yields', text: 'Both yields sit inside `try`. While the generator is paused at `yield 1`, that try block is *active* — so both an injected throw and an early return interact with it.' },
          { label: 'Step 2: return() unwinds through finally', text: '`g.next()` yields 1 and pauses. `g.return("stop")` now behaves as if `return "stop"` replaced the paused `yield 1`: the `finally` block runs — `"cleanup"` logs — and the call returns `{ value: "stop", done: true }`. The catch block is skipped (no error), and `g` is finished.' },
          { label: 'Step 3: throw() makes the yield raise', text: 'For `h`: after the first `next()`, `h.throw(new Error("inject"))` turns the paused `yield 1` expression into a throwing expression — control jumps to the `catch`.' },
          { label: 'Step 4: The generator catches and recovers', text: 'Inside, `e` is the injected Error; the catch logs `"caught Error: inject"` and runs `yield "recovered"` — so the `throw()` call itself returns `{ value: "recovered", done: false }`. The generator survived the injection and can continue.' },
          { label: 'Step 5: The control picture', text: 'The caller of a paused generator can advance it (`next`), raise into it (`throw`) or end it (`return`) — and the generator’s own `try/catch/finally` decides what those mean. This is exactly the control surface `for/of` uses invisibly on every `break` and every body exception.' }
        ],
        result: 'Path one logs `"cleanup"` and ends with `{value: "stop", done: true}`; path two logs `"caught Error: inject"` and returns `{value: "recovered", done: false}` — shutdown and injection, both catchable.'
      },
      {
        title: 'A lazy pipeline of generator stages',
        problem: 'Square the numbers 1–10, keep the even squares, and take three of them — as a chain of generator stages rather than array methods:\n```js\nfunction* map(iter, f) { for (const x of iter) yield f(x); }\nfunction* filter(iter, p) { for (const x of iter) if (p(x)) yield x; }\nfunction* take(n, iter) {\n  for (const x of iter) { if (n-- <= 0) return; yield x; }\n}\n\nconst source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n[...take(3, filter(map(source, x => x * x), x => x % 2 === 0))];\n```',
        steps: [
          { label: 'Step 1: Three paused bodies, zero work', text: 'The expression evaluates `map(source, ...)`, wraps it in `filter`, wraps that in `take` — each call returns a fresh, paused generator. The source array is untouched; no squares exist yet.' },
          { label: 'Step 2: The spread pulls item by item', text: 'The spread drives `take.next()`, which pulls `filter.next()`, which pulls `map.next()`, which pulls one item from the array (1), squares it (1) and yields; filter tests `1 % 2 === 0` — false — and pulls again (2 → 4, passes). One value has crossed all three stages.' },
          { label: 'Step 3: Interleaving, not staging', text: 'The stages do NOT run “map everything, then filter everything”: 1 is mapped, tested and rejected *before* 2 is mapped. Work happens per item, across all stages — each stage holds at most one value in flight, so memory stays $O(1)$ regardless of source size.' },
          { label: 'Step 4: take() stops the chain early', text: 'After delivering 4, 16, 36 — three even squares — the next pull finds `n` at 0 and `return`s. The remaining seven items (7 through 10 and their squares) are **never computed**: take’s return unwinds, and the abandoned generators become garbage.' },
          { label: 'Step 5: Compare the array version', text: '`source.map(x => x * x).filter(...).slice(0, 3)` builds two full intermediate arrays of ten squares — and computes all ten — before slicing. The generator chain computes exactly four inputs (1, 2, 4, 6) and produces three outputs. On infinite sources, only the pipeline version terminates at all.' }
        ],
        result: '`[4, 16, 36]` — squares of 2, 4 and 6 — computed lazily, interleaved across stages, with early exit skipping the rest of the source entirely.'
      },
      {
        title: 'Trace the engine: an async generator over a paginated API',
        problem: 'Drain a paginated REST endpoint — each response holds `results` plus a `next` URL — with an async generator and `for await`:\n```js\nasync function* searchPages(firstUrl) {\n  let url = firstUrl;\n  while (url) {\n    const response = await fetch(url);\n    if (!response.ok) throw new Error("HTTP " + response.status);\n    const page = await response.json();\n    yield* page.results;      // emit this page’s items one by one\n    url = page.next;          // follow the cursor\n  }\n}\n\nfor await (const item of searchPages("/api/items?limit=2")) {\n  console.log(item.id);\n}\n```',
        steps: [
          { label: 'Step 1: Nothing runs at call time', text: '`searchPages(...)` returns an async generator object immediately — no fetch has been issued. The `for await` loop then calls `next()` and awaits the returned promise: iteration pauses the *loop*, not the thread (Section 13.3).' },
          { label: 'Step 2: The first page', text: 'The body starts: `await fetch(url)` suspends until the response arrives; `await response.json()` suspends again for the body. Then `yield* page.results` — and here async meets delegation: each item is re-yielded as its own asynchronous step.' },
          { label: 'Step 3: The loop receives items one at a time', text: 'For a page of `[item1, item2]`, the loop body runs twice (logging two ids), each iteration awaiting one more `next()` — which resumes inside `yield*` to produce the next item without refetching.' },
          { label: 'Step 4: The cursor advances', text: 'When the page is exhausted, the delegation ends and `url = page.next` either points at the next page — the `while` loops and a **new** fetch begins — or is `null`, ending the loop with `done: true` after the last item.' },
          { label: 'Step 5: Errors reject the whole loop', text: 'A failed fetch throws inside the body; because `next()` returned a promise, that promise **rejects**; because the loop `await`s it, the rejection surfaces at the `for await` — where an ordinary `try/catch` (Section 13.3) handles it. Meanwhile only two items ever sit in memory: the current one and the page in hand.' }
        ],
        result: 'The loop logs every id across every page — sequential, lazy, constant-memory — with pagination, backpressure and error propagation handled by three keywords: `async`, `yield*`, `await`.'
      }
    ],
    keyTakeaways: [
      '`next(x)` feeds a value into the paused yield — generators are two-way channels; the first call’s argument is ignored.',
      '`return(x)` terminates as if `return` sat at the paused yield — `finally` blocks run; `throw(e)` makes the paused yield raise, catchable inside the body.',
      'Generator stages (map, filter, take over an iterable) compose into lazy pipelines: $O(1)$ memory per stage, work interleaved per item, early exit skips computation.',
      '`async function*` permits `await` inside the body; each `next()` returns a Promise of `{value, done}`.',
      '`for await (const x of asyncIterable)` drains async sequences in order, one item at a time — and rejects the loop if any step rejects.',
      'Async generators fit unknown-length sources: paginated APIs, streams, message queues — where `Promise.all` fits only fixed known arrays.'
    ],
    quiz: [
      {
        q: 'A generator is paused at `yield` inside a try block. What does `it.return(v)` do?',
        options: [
          'Resumes as if the yield returned v as its value',
          'Unwinds the body from the paused yield — running finally blocks — and returns {value: v, done: true}',
          'Throws a TypeError',
          'Skips to the next yield'
        ],
        answer: 1,
        explanation: 'return() behaves like a return statement inserted at the pause point: the finally chain executes, the catch is bypassed (no error occurred), and the generator finishes with the given value.'
      },
      {
        q: 'What happens when `it.throw(new Error("x"))` is called on a generator paused at a yield inside a try/catch?',
        options: [
          'The error propagates out of throw() immediately',
          'The paused yield expression throws; if a surrounding catch exists it runs — otherwise the error escapes the throw() call',
          'The generator restarts from the beginning',
          'The error is silently ignored'
        ],
        answer: 1,
        explanation: 'throw() converts the paused yield into a raising expression: an enclosing catch can recover (and even yield again); without one, the exception propagates back to the throw() caller.'
      },
      {
        q: 'In a pipeline `take(3, filter(map(src, f), p))`, when is the square of the 7th element computed?',
        options: [
          'Immediately — every stage buffers its input',
          'Never — take(3) ends the pipeline after three outputs, so items beyond the needed ones are never mapped',
          'After the loop completes, as cleanup',
          'In parallel on another thread'
        ],
        answer: 1,
        explanation: 'Stages pull one item at a time; once take has yielded three values it returns, and the abandoned upstream generators never advance — the 7th element is never squared.'
      },
      {
        q: 'What does calling `next()` on an **async** generator return?',
        options: [
          '{value, done} directly',
          'A Promise that resolves to {value, done}',
          'An async-iterator object',
          'The next value, or undefined'
        ],
        answer: 1,
        explanation: 'async function* makes every next() asynchronous: it returns a promise that resolves with the usual iterator result once the awaited operations complete — which is why for await is required to consume it.'
      },
      {
        q: 'Which source is the BEST fit for an async generator with for await?',
        options: [
          'A fixed array of five URLs to fetch in parallel',
          'A paginated API whose next URL arrives with each response, and whose total length is unknown',
          'A synchronous sorted array',
          'A single file read into memory'
        ],
        answer: 1,
        explanation: 'for await drains sequential, unknown-length asynchronous sequences — pages, lines, events; a fixed known set of parallel work is the job of Promise.all (Section 13.2).'
      }
    ]
  }
]
