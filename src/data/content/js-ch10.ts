import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 10: Modules (Sections 10.1 – 10.3)
// Master study content.
// ============================================================================

export const jsCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'js-ch10-s1',
    readingTime: 8,
    intro: 'A module is a self-contained unit of code that hides its implementation behind a public API. Before ES6 the language had no module system at all — no `import` and no `export` — so JavaScript programmers built modules out of the tools they had: **objects**, **classes** and **closures**. This section is the prehistory of modules, and it still explains exactly what every later module system is trying to achieve: private state behind a narrow public interface, and no name collisions in the global namespace.',
    objectives: [
      'Explain the two problems modules solve: managing the global namespace and enabling code reuse',
      'Use objects and classes with static methods as namespaces for related functions',
      'Implement the closure-based module pattern with an immediately invoked function expression (IIFE)',
      'Trace how private variables survive the return of the IIFE and remain reachable only through the exported API',
      'Distinguish module-level (shared) state from per-instance state'
    ],
    concepts: [
      {
        term: 'The module problem',
        kind: 'insight',
        statement: 'In a classic script, every top-level `const`, `function` and `class` declaration becomes a property of the global object (`globalThis`), so unrelated scripts can silently overwrite one another’s functions and variables. Flanagan frames modules with two goals: keep details that are not part of the API **private**, and ensure that code does not **leak names** into the global namespace.',
        detail: 'A third practical benefit drives the entire npm ecosystem: a module written once can be reused by many programs. Everything in Sections 10.2 and 10.3 is machinery for these same goals — only the mechanism (closures, `require()`, `export`/`import`) changes.'
      },
      {
        term: 'Objects and classes as namespaces',
        kind: 'method',
        statement: 'Wrap related functions as properties of a single object — or as `static` methods of a class — so a program gains **one** global name instead of dozens. `Stats.mean(...)` cannot collide with another file’s `mean`.',
        detail: 'In ES6 a class body is itself a namespace: only the class binding is global; its static methods live behind it:\n```js\nconst Stats = {\n  mean(nums) { return nums.reduce((a, b) => a + b, 0) / nums.length; },\n  stddev(nums) { /* ... */ }\n};\n\nStats.mean([2, 4, 6]);   // 4\n\nclass Convert {\n  static toCelsius(f) { return (f - 32) * 5 / 9; }\n}\n\nConvert.toCelsius(212);  // 100\n```\nThis hides nothing — the functions are still reachable — but it organizes the global namespace, which is half the battle.'
      },
      {
        term: 'The module pattern: an IIFE',
        kind: 'method',
        statement: 'Define an anonymous function and **invoke it immediately** — `(function () { ... })();` — assigning its return value (the public API) to a global constant. The function body becomes the module’s **private scope**: implementation details declared there are invisible from outside, while the returned object or class is the documented surface.',
        detail: 'The trailing pair of parentheses performs the invocation; the wrapping parentheses are a convention that tells the parser this `function` keyword starts an expression, not a declaration. The same idea works with arrow syntax: `(() => { ... })()`. The return value may be an object literal of functions (a singleton service) or a class definition (a factory of instances).'
      },
      {
        term: 'Closure-based privacy',
        kind: 'insight',
        statement: 'When the IIFE returns, its local variables do **not** die: every inner function that referenced them keeps them alive in a **closure** (Chapter 8). Those variables are reachable *only* through the exported functions — no `for/in` loop, no property lookup and no reflection can touch them.',
        detail: 'This is privacy enforced by lexical scope rather than by naming convention or permission flags. It is the same closure mechanism that Chapter 9 used to keep per-instance state private in constructor functions.'
      },
      {
        term: 'Private implementation, public API',
        kind: 'definition',
        statement: 'A module separates **implementation** (private constants, helper functions, mutable state) from **API** (the returned value — the functions and classes consumers are meant to call). Anything not exported simply does not exist from the consumer’s point of view.',
        detail: 'Flanagan’s `BitSet` example returns a whole class from the IIFE, with helper functions like `isValid()` and constants like `BYTES` and `MASK` defined privately above the `return` statement. Consumers get a clean `BitSet` class; the scaffolding stays hidden.'
      },
      {
        term: 'Module state is shared',
        kind: 'insight',
        statement: 'The module pattern creates a **singleton**: the IIFE body runs exactly once, so any variable declared inside it is shared by every caller of the API. If per-instance privacy is needed, use closures created per object (Chapter 9) or a `WeakMap` keyed by the instance (Section 11.1).',
        detail: 'Singleton state is a feature (one configuration object, one connection pool) or a hazard (accidental hidden global) depending on intent — decide deliberately, and document it.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: a closure-based counter module',
        problem: 'Predict exactly what happens at load time and at call time for this classic module pattern:\n```js\nconst counter = (function () {\n  let count = 0;                 // private state\n\n  function increment(by = 1) {\n    if (!Number.isInteger(by) || by < 1) {\n      throw new Error("increment needs a positive integer");\n    }\n    count += by;\n  }\n\n  function value() {\n    return count;\n  }\n\n  return { increment, value };   // the public API\n})();\n\ncounter.increment();\ncounter.increment(5);\ncounter.value();\ncounter.count;\n```',
        steps: [
          { label: 'Step 1: The IIFE runs immediately', text: 'The initializer is not the function — it is the function’s **return value**. The moment this `const` line executes, the anonymous function is invoked: its body creates `count` in a fresh function scope and defines the two inner functions.' },
          { label: 'Step 2: The API is returned', text: 'The `return { increment, value }` statement builds an object holding references to the two inner functions, and that object becomes the value of `counter`. The IIFE’s call frame is then popped from the stack.' },
          { label: 'Step 3: The closure keeps count alive', text: 'Because `increment` and `value` both reference `count`, the variable survives the return of the function that declared it. It is now reachable only through those two closures — there is no other route to it.' },
          { label: 'Step 4: First call — count 0 becomes 1', text: '`counter.increment()` validates that 1 is a positive integer, then executes `count += by`, taking the closure variable from 0 to 1.' },
          { label: 'Step 5: Second call — count 1 becomes 6', text: '`counter.increment(5)` passes the validation (`5` is a positive integer) and takes `count` from 1 to 6, so `counter.value()` returns `6`.' },
          { label: 'Step 6: Privacy by omission', text: '`counter.count` evaluates to `undefined` — not an error, because property access on missing keys simply returns `undefined`. `count` never was a property of the API object: it lives in the closure, not on the returned object.' }
        ],
        result: '`counter.value()` returns `6`; `counter.count` returns `undefined`. The count can only ever be changed through the validated `increment` API — this is encapsulation without classes.'
      },
      {
        title: 'From global soup to a namespace',
        problem: 'Two classic scripts each define a global `mean()` function. Show the collision, then repair it by gathering the statistics functions into one namespace object.',
        steps: [
          { label: 'Step 1: The collision', text: 'In classic scripts, `function mean(nums) { ... }` at top level creates `globalThis.mean`. Whichever script loads **last** silently wins; the first script’s `mean` is gone, with no error at overwrite time and no clue at call time.' },
          { label: 'Step 2: One global instead of many', text: 'Wrap the functions in a single `const`:\n```js\nconst Stats = {\n  mean(nums) { return nums.reduce((a, b) => a + b, 0) / nums.length; },\n  stddev(nums) { /* ... */ }\n};\n```\nThe global namespace grows by exactly one name: `Stats`.' },
          { label: 'Step 3: Use and verify', text: '`Stats.mean([2, 4, 6])` returns `4`, and a probe `typeof mean` now returns `"undefined"` — no leak. A second script defining its own `mean` is now harmless, because both files work through their own namespace objects.' },
          { label: 'Step 4: The class variant', text: 'A class does the same job when the functions conceptually belong to a type: `class Stats { static mean(nums) { ... } }` is called as `Stats.mean([2, 4, 6])`. Either way the pattern is identical: one global binding holding many properties.' }
        ],
        result: 'The repaired program exposes one global (`Stats`) instead of two (`mean`, `stddev`), and future scripts cannot collide with them.'
      },
      {
        title: 'Hiding a class implementation (Flanagan’s BitSet pattern)',
        problem: 'Design a module whose public API is a class, but whose helper functions and constants are invisible outside the module.',
        steps: [
          { label: 'Step 1: The skeleton', text: '\n```js\nconst BitSet = (function () {   // assign the IIFE’s return value\n  // Private implementation details\n  const BYTES = 8, MASK = BYTES - 1;\n  function isValid(set) { /* ... */ }\n  function has(set, byte, bit) { /* ... */ }\n\n  // The public API of the module is a class definition\n  return class BitSet {\n    constructor() { this.bytes = new Uint8Array(8); }\n    add(i) { if (isValid(this)) { /* ... */ } }\n  };\n}());\n```' },
          { label: 'Step 2: What runs at load time', text: 'The IIFE executes once: `BYTES`, `MASK`, `isValid` and `has` come into existence, and the class expression is evaluated. The module-level name `BitSet` is bound to that class — nothing else escapes.' },
          { label: 'Step 3: The class closes over its helpers', text: 'The methods of the returned class run inside the closure, so `add()` can call the private `isValid()` and read `BYTES`. Instances call them through the closure, not through any property you could discover.' },
          { label: 'Step 4: What stays private — and what does not', text: 'Only **module-level** helpers are hidden. Instance properties such as `this.bytes` remain visible and writable from outside; per-instance privacy would require the WeakMap technique of Section 11.1 or closure state in the constructor (Chapter 9).' }
        ],
        result: 'A consumer gets a clean `BitSet` class and cannot call `isValid` directly — the module exports a type while keeping its implementation vocabulary to itself.'
      }
    ],
    keyTakeaways: [
      'Modules solve namespacing and reuse: one global name per module instead of dozens of colliding globals.',
      'Objects — and classes with static methods — are the lightest namespace tool; they organize but do not hide.',
      'The module pattern is an IIFE plus closures: the function body is private scope, the return value is the public API.',
      'Private state survives the IIFE’s return because the exported functions close over it; nothing else can reach it.',
      'The IIFE runs once, so module-level state is a process-wide singleton — share it deliberately or move it per-instance.',
      'ES6 modules (Section 10.3) automate this same pattern with real language syntax instead of convention.'
    ],
    quiz: [
      {
        q: 'In a classic (non-module) script, what happens to a top-level `function mean()` declaration?',
        options: [
          'It becomes a property of the global object and can collide with another script’s `mean`',
          'It is private to the file until explicitly exported',
          'It is scoped to the HTML element that loaded the script',
          'It is hoisted into a per-page module registry'
        ],
        answer: 0,
        explanation: 'Classic scripts share one global scope: top-level function declarations become properties of `globalThis`, so the last script to load silently wins any name collision.'
      },
      {
        q: 'For `const counter = (function () { let count = 0; return { increment() { count++; } }; })();` — why does `counter.count` evaluate to `undefined`?',
        options: [
          'Because `count` is garbage collected as soon as the IIFE returns',
          'Because `count` lives in the closure of the exported method and was never made a property of the returned object',
          'Because `count` is a reserved word in object literals',
          'Because the IIFE returns a deep copy with private fields stripped'
        ],
        answer: 1,
        explanation: '`count` is a closure variable, not a property; the returned object simply has no such key, and accessing a missing property yields `undefined` while the closure silently keeps the value alive.'
      },
      {
        q: 'When is the body of an IIFE-based module executed?',
        options: [
          'Immediately when the statement runs — exactly once per script load',
          'Lazily, on the first call to any exported function',
          'Once per call to an exported function',
          'Twice: once to define and once to return the API'
        ],
        answer: 0,
        explanation: 'The trailing `()` invokes the function on the spot; its body runs once, synchronously, when that line of the script executes.'
      },
      {
        q: 'Which of the following can the pre-ES6 object/closure module pattern NOT provide by itself?',
        options: [
          'Private state hidden in a closure',
          'A namespaced public API',
          'Automatic loading of dependencies between files',
          'Shared singleton state across all callers'
        ],
        answer: 2,
        explanation: 'Before ES6, the language had no file-loading mechanism — script order in the HTML and, later, Node’s `require()` and ES6 `import` had to solve dependency loading.'
      },
      {
        q: 'Flanagan’s `BitSet` module returns a class from inside an IIFE. What remains private?',
        options: [
          'The class itself',
          'The helper functions and constants such as `BYTES` and `isValid` declared inside the IIFE',
          'Each instance’s properties such as `this.bytes`',
          'The constructor arguments'
        ],
        answer: 1,
        explanation: 'Module-level helpers and constants are trapped in the closure; the class and everything reachable through instances (`this.bytes`) is public.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'js-ch10-s2',
    readingTime: 7,
    intro: 'Node.js was born before ES6 and had to solve modularity on its own: its `require()` function and `module.exports` object — the **CommonJS** design — became the dominant module system on the server and still power the older half of npm. The model is disarmingly simple: a module file runs inside a wrapper function that hands it a fresh `module.exports` object to fill in, and `require()` returns that object, **cached forever** after the first load.',
    objectives: [
      'Load a module with `require()` and export values by assigning `module.exports`',
      'Explain the `exports` shortcut and why reassigning it silently exports nothing',
      'Trace Node’s module cache and the singleton state it creates for every module',
      'Describe how Node resolves relative paths, core modules and bare package names'
    ],
    concepts: [
      {
        term: 'require()',
        kind: 'definition',
        statement: 'A function available in every Node module that takes a **module specifier** and returns the exports of that module. `require("./stats.js")` — any path beginning with `./` or `../` — loads a file relative to the requiring module; a bare name like `require("fs")` names a core module or an installed package.',
        detail: 'Unlike an ES6 `import`, `require()` is an ordinary function call: it can appear inside functions, inside `if` statements, and its result can be stored in any variable. That dynamism is both its convenience and (for static analysis tools) its curse.'
      },
      {
        term: 'module.exports',
        kind: 'definition',
        statement: 'Each module file runs inside a wrapper function that provides a fresh `module` object whose `exports` property is initialized to `{}`. Whatever `module.exports` holds when the file finishes running is exactly what `require()` returns to the caller.',
        detail: 'Conceptually Node wraps every file as: `(function (exports, require, module, __filename, __dirname) { /* your file */ });` — which is also why every module gets its own scope without an IIFE.'
      },
      {
        term: 'The exports shortcut and its trap',
        kind: 'insight',
        statement: 'The wrapper also passes `exports` as an **alias** for `module.exports`, so `exports.mean = ...` adds a property to the real export object. But `exports = { ... }` merely rebinds the local alias — `module.exports` is untouched, and the module appears to export an empty object.',
        detail: '\n```js\nexports.mean = meanFn;               // good: adds to module.exports\nexports.stddev = stddevFn;            // good: same object\n\nmodule.exports = class Counter {};    // the ONLY way to export a single value\n// exports = class Counter {};        // WRONG: exports nothing\n```\nWhen a module exports one class or one function, assign `module.exports` directly — the alias can only ever add properties.'
      },
      {
        term: 'Module caching',
        kind: 'insight',
        statement: 'The first `require()` of a resolved path runs the module body and caches the resulting `exports` object; every later `require()` of the same path returns **the same object** without running the body again. Module-level variables are therefore **process-wide singletons**.',
        detail: 'The cache is keyed by the fully resolved filename, so `require("./stats")` and `require("./stats.js")` resolve to one entry. This is why a module can hand out shared services (a database pool, a configuration object) — and why mutable module state is a design decision, not an accident.'
      },
      {
        term: 'Module resolution',
        kind: 'method',
        statement: 'Node resolves a specifier in this order: (1) **core modules** — `fs`, `path`, `http`, `node:` prefixed names — win immediately; (2) **relative paths** starting with `./` or `../`, trying `.js`, `.json` and `.node` extensions and package directories; (3) **bare specifiers** like `require("stats")` walk up the directory tree, looking inside each `node_modules/stats/`, whose `package.json` `main` field (defaulting to `index.js`) names the entry file.',
        detail: 'The walk-up algorithm is why a deeply nested file can `require("lodash")` without knowing where `lodash` physically lives: Node checks `./node_modules`, then `../node_modules`, and so on to the filesystem root.'
      },
      {
        term: 'Circular requires',
        kind: 'insight',
        statement: 'If module `a` requires `b` while `b` requires `a`, Node does not loop forever: when it detects the cycle it returns `b` the **partially filled** `exports` object of `a` — whatever was assigned before `a` reached its `require("./b.js")` call. Properties added later are still missing at that moment.',
        detail: 'You may therefore receive an object whose functions are not there yet. Restructure the cycle, or move the `require()` inside a function so it runs lazily, after both modules have finished loading.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: why reassigning `exports` exports nothing',
        problem: 'Two modules attempt to export one function each. Predict what `require()` returns for each:\n```js\n// good.js\nexports.mean = function (nums) {\n  return nums.reduce((a, b) => a + b, 0) / nums.length;\n};\n\n// broken.js\nexports = {\n  mean: function (nums) {\n    return nums.reduce((a, b) => a + b, 0) / nums.length;\n  }\n};\n\n// main.js\nconst good = require("./good.js");\nconst broken = require("./broken.js");\ngood.mean([2, 4, 6]);\nbroken.mean;\n```',
        steps: [
          { label: 'Step 1: How the wrapper sets things up', text: 'For every file, Node runs it as `(function (exports, require, module, ...) { ... })` with `module.exports = {}` already created. The local parameter `exports` is initialized to point at that same object.' },
          { label: 'Step 2: good.js — mutation through the alias', text: '`exports.mean = function ...` writes a property onto the shared object. When the file ends, `module.exports` holds `{ mean: ... }`, so `require("./good.js")` returns that object and `good.mean([2, 4, 6])` returns `4`.' },
          { label: 'Step 3: broken.js — rebinding the alias', text: '`exports = { mean: ... }` creates a brand-new object and points only the **local variable** `exports` at it. `module.exports` still references the original empty object; the two are no longer the same object.' },
          { label: 'Step 4: The invisible failure', text: '`require("./broken.js")` returns `module.exports` — the untouched `{}`. `broken.mean` is `undefined`, and the failure appears only at call time, far from the line that caused it.' },
          { label: 'Step 5: The correct single-export form', text: 'To export one function, overwrite the real thing: `module.exports = function (nums) { ... };` — then `require("./broken.js")` would be the function itself, callable directly.' }
        ],
        result: '`good.mean([2, 4, 6])` returns `4`; `broken.mean` is `undefined`. Aliases are for adding properties; only `module.exports` can be replaced.'
      },
      {
        title: 'Trace the cache: one module, one object, one state',
        problem: 'A module keeps an internal counter and exports functions over it. What does a program observe when it requires the module twice — and what does a *different* file requiring the same module observe?\n```js\n// state.js\nconsole.log("state.js body running");\nlet calls = 0;\nmodule.exports = {\n  track() { return ++calls; },\n  get calls() { return calls; }\n};\n\n// main.js\nconst a = require("./state.js");\nconst b = require("./state.js");\na === b;\n```',
        steps: [
          { label: 'Step 1: First require runs the body', text: 'The log line `"state.js body running"` prints exactly once. During that run, `calls` is created and `module.exports` is filled with the two functions closing over it; the finished object is stored in the module cache.' },
          { label: 'Step 2: Second require hits the cache', text: 'The second call resolves to the same filename, finds the cached entry and returns the very same object — the body does not run again. `a === b` is `true`, not merely equal-looking: there is one object in memory.' },
          { label: 'Step 3: State is shared through it', text: '`a.track()` takes `calls` from 0 to 1; `a.track()` again to 2; then `b.track()` — on what looks like a fresh import — takes it to 3. `b.calls` reads `3` through the getter.' },
          { label: 'Step 4: Another file, same story', text: 'A second file that does `require("./state.js")` also receives the cached object. Module state is shared by the whole process, not scoped per importer — a singleton for free.' },
          { label: 'Step 5: The design lesson', text: 'Use the cache for genuinely shared things (configuration, connection pools, registries). If a module should hand out independent instances, export a class or a factory function instead of holding state at module level.' }
        ],
        result: '`a === b` is `true`, the body log prints once, and the three `track()` calls report `1`, `2`, `3` through either reference — one module, one object, one state.'
      },
      {
        title: 'Exporting a single class from a Node module',
        problem: 'A module wants its entire public surface to be one class, so consumers write `new Counter(10)`. Show the export and the import.',
        steps: [
          { label: 'Step 1: Assign the class to module.exports', text: '\n```js\n// counter-class.js\nmodule.exports = class Counter {\n  constructor(start = 0) { this.n = start; }\n  increment() { return ++this.n; }\n  get value() { return this.n; }\n};\n```\nAfter the file runs, `module.exports` is the class itself, not an object wrapping it.' },
          { label: 'Step 2: The consumer binds the class to any name', text: '\n```js\n// main.js\nconst Counter = require("./counter-class.js");\nconst c = new Counter(10);\nc.increment();   // 11\nc.value;        // 11\n```\nEach `new Counter()` builds an independent instance — nothing is shared between consumers except the class definition.' },
          { label: 'Step 3: The alternative shape', text: 'You could instead write `exports.Counter = class Counter { ... };` and import with destructuring: `const { Counter } = require("./counter-class.js");`. That shape scales when a module later needs to export more names, at the cost of one more level of naming.' }
        ],
        result: 'A single-value export via `module.exports = class ...`, consumed as `new Counter(10)` — the idiomatic Node pattern for module-is-a-type designs.'
      }
    ],
    keyTakeaways: [
      '`require()` returns whatever `module.exports` holds after the module file finishes running.',
      'The wrapper supplies `exports` as an alias for `module.exports` — safe for adding properties, useless once reassigned.',
      'To export a single class or function, assign `module.exports` directly.',
      'Modules are cached by resolved path: the body runs once per process, and every importer receives the same object — module state is a singleton.',
      'Resolution order: core modules, then relative paths, then a walk up `node_modules` directories guided by `package.json` `main`.',
      'Circular requires return a partially filled exports object — restructure the cycle or require lazily inside a function.'
    ],
    quiz: [
      {
        q: 'What does `require("./stats.js")` return?',
        options: [
          'Whatever `module.exports` holds after stats.js has finished running',
          'A fresh empty object on every call, for isolation',
          'The module’s source code as a string',
          'A Promise that resolves to the module’s exports'
        ],
        answer: 0,
        explanation: '`require` hands back the module’s `exports` object — the same cached object on every subsequent call — never a copy and never a promise (promises belong to dynamic `import()`).'
      },
      {
        q: 'A module contains the single statement `exports = { hello() { return "hi"; } };`. What does requiring it produce?',
        options: [
          'The object with the working `hello` method',
          'An empty object — `module.exports` was never touched',
          'A SyntaxError at load time',
          'The `hello` function itself, unwrapped from the object'
        ],
        answer: 1,
        explanation: 'The assignment rebinds only the local `exports` alias; the real export object `module.exports` stays empty, so `require` returns `{}`.'
      },
      {
        q: 'A module file logs a message in its body. How many times does the log print if five different files require it?',
        options: [
          'Five — once per requiring file',
          'One — the body runs on the first require and the result is cached',
          'Zero — module bodies run lazily',
          'It depends on the Node major version'
        ],
        answer: 1,
        explanation: 'Node caches modules by resolved filename after the first load, so the body executes exactly once per process regardless of how many importers there are.'
      },
      {
        q: 'Which statement about circular `require()` dependencies is TRUE?',
        options: [
          'Node detects them and throws an error',
          'Node deadlocks until one module gives up',
          'The second entry to the cycle receives the partially filled exports of the module still mid-execution',
          'Both modules receive fully initialized copies of each other'
        ],
        answer: 2,
        explanation: 'When `a` (mid-load) requires `b`, and `b` requires `a`, Node returns `a`’s exports as they are *at that moment* — properties not yet assigned are missing from the object `b` receives.'
      },
      {
        q: 'What is the difference between `require("fs")` and `require("./fs.js")`?',
        options: [
          'None — both load the same file',
          'The bare name loads a core module (or an installed package); the `./` path loads a local file relative to the requiring module',
          'The bare name is asynchronous; the path form is synchronous',
          'The bare name only works in ES6 modules'
        ],
        answer: 1,
        explanation: 'Specifiers starting with `./` or `../` are file-relative; bare names first match Node’s built-in core modules and then search the `node_modules` tree.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'js-ch10-s3',
    readingTime: 9,
    intro: 'ES6 finally made modules part of the language: `export` any declaration, `import` the names you need — and for the first time each file gets its own top-level scope, strict mode and a guaranteed load order, in the browser and in Node alike. Because every import and export is fixed **at parse time**, the module graph is statically analyzable, which is what enables bundler tree-shaking and the lazy, on-demand `import()` expression.',
    objectives: [
      'Write named exports and a default export, and import each correctly',
      'Use every import form: named, renamed, namespace, combined and dynamic',
      'Explain how ES6 modules load in the browser via `<script type="module">`',
      'Trace the evaluation order of a circular import and the role of live bindings',
    ],
    concepts: [
      {
        term: 'Named exports',
        kind: 'definition',
        statement: 'Prefix any declaration with `export` — `export const`, `export function`, `export class` — or list existing names: `export { mean, stddev };`. A module can export any number of named values; consumers import them by exact name, optionally renaming with `as`.',
        detail: '\n```js\n// stats.js\nexport function mean(nums) { return nums.reduce((a, b) => a + b, 0) / nums.length; }\nexport const VERSION = "2.1";\nfunction stddev(nums) { /* ... */ }\nexport { stddev };           // export an existing binding\nexport { stddev as deviation };  // export under a different name\n```\nEvery named export is a registered public name of the module — the ES6 equivalent of `exports.mean = ...`.'
      },
      {
        term: 'Default exports',
        kind: 'definition',
        statement: '`export default expression` designates **one value per module** as the default. Importers choose their own local name and use no braces: `import Circle from "./circle.js";`. A default export is anonymous — it pairs with the module as a whole, not with a declared name.',
        detail: 'Think of it as `module.exports = ...` with syntax: ideal for modules that are one class, one component or one function. A module can have both a default and named exports: `export default class Circle {...}` alongside `export const PI = Math.PI;`.'
      },
      {
        term: 'Import forms',
        kind: 'method',
        statement: 'All the ways to bring a module’s exports into scope:\n```js\nimport { mean, stddev } from "./stats.js";     // named\nimport { mean as average } from "./stats.js";   // renamed\nimport * as stats from "./stats.js";             // namespace object\nimport Circle from "./circle.js";                // default\nimport Circle, { mean } from "./app.js";         // default + named\nimport "./polyfill.js";                          // side effects only\n```\nImport declarations are hoisted, and the imported bindings are read-only — assigning to one throws a `TypeError`.',
        detail: 'Importing a name the module does not export is caught **before any code runs**: the module fails to link with a `SyntaxError` such as “The requested module does not provide an export named ‘mean’”. Node’s `require()` had no equivalent check — you learned about a missing property only at call time.'
      },
      {
        term: 'Re-exporting',
        kind: 'method',
        statement: '`export { mean } from "./stats.js";` re-exports another module’s value without binding it locally, and `export * from "./stats.js";` forwards **all** named exports (the default is never forwarded). This is how package entry points assemble a public surface from internal files.',
        detail: 'Combine with renaming to build facades: `export { mean as statisticsMean } from "./stats.js";` — consumers of the package never see the internal layout.'
      },
      {
        term: 'Dynamic import()',
        kind: 'method',
        statement: '`import(specifier)` is an expression usable anywhere a function call is — it returns a **Promise** for the module namespace object. The first call fetches, parses and evaluates the module; subsequent calls resolve from cache.',
        detail: '\n```js\nbutton.addEventListener("click", async () => {\n  const charts = await import("./charts.js");\n  charts.plot(series);        // named exports are properties\n  // charts.default          // the default export, if any\n});\n```\nThis is the tool for splitting heavy, rarely used features out of the initial download — the chart library loads only when the user actually clicks.'
      },
      {
        term: 'Modules in the browser',
        kind: 'method',
        statement: 'A `<script type="module" src="./main.js"></script>` tag loads an ES6 module. Module scripts are automatically **deferred** (they run after the HTML is parsed, in dependency order), run in **strict mode**, have top-level `this` equal to `undefined`, and their top-level declarations are scoped to the module — nothing leaks to the global object.',
        detail: 'In browsers, import specifiers must be relative paths starting with `./` (or full URLs); bare specifiers like `"lodash"` require an import map or a bundler. Cross-origin module fetches require CORS headers.'
      },
      {
        term: 'Bundlers and tree shaking',
        kind: 'insight',
        statement: 'Bundlers such as webpack, esbuild and Vite trace the static `import` graph and merge modules into optimized files. Because imports and exports are fixed at parse time, a bundler can prove which exported functions are **never used** and drop them — **tree shaking**.',
        detail: 'This is why ES6 modules supplanted CommonJS on the client: `require()` calls are ordinary dynamic expressions, so no tool can safely remove an unused `module.exports` function that might be reached by a computed property name.'
      },
      {
        term: 'Circular imports and live bindings',
        kind: 'insight',
        statement: 'ES6 modules may import one another. They are evaluated depth-first at first import; a module mid-evaluation exposes its bindings **before its body finishes**. Because exports are **live bindings** — references into the exporting module’s scope, not copies — a function imported early and called later sees the final value. Only reading an exported `const` during the evaluation phase can hit an uninitialized binding.',
        detail: 'Flanagan’s rule: cycles work safely when the circularly imported values are only used **inside function bodies** (called later), and break when they are needed **at module evaluation time** (top-level code).'
      }
    ],
    examples: [
      {
        title: 'Side by side: named exports versus a default export',
        problem: 'Predict the result of each import from these two modules:\n```js\n// stats.js — two named exports\nexport function mean(nums) { return nums.reduce((a, b) => a + b, 0) / nums.length; }\nexport const VERSION = "2.1";\n\n// circle.js — one default export\nexport default class Circle {\n  constructor(r) { this.r = r; }\n  get area() { return Math.PI * this.r * this.r; }\n}\n```',
        steps: [
          { label: 'Step 1: Named imports need braces and exact names', text: '`import { mean, VERSION } from "./stats.js";` binds the exported function and constant. The braces are not destructuring — they are a list of names that must exist in the module, checked at link time.' },
          { label: 'Step 2: Default imports need no braces', text: '`import Circle from "./circle.js";` binds the default export to whatever local name the importer chooses. `import C from "./circle.js"` would bind the *same class* under a different name — the default is anonymous, so the importer names it.' },
          { label: 'Step 3: Combining the two', text: 'If a module has both — say `export default class Circle {...}` plus `export const PI = ...` — the importer writes `import Circle, { PI } from "./circle.js";`: default first, then a braced list. Both parts must exist in the module.' },
          { label: 'Step 4: What fails, and when', text: '`import { Circle } from "./circle.js";` fails at link time with a SyntaxError — the module provides a default, not a `Circle` name. Similarly `import { median } from "./stats.js";` never runs a line of code: missing names are caught before evaluation, a strictness `require()` never had.' },
          { label: 'Step 5: The mental model', text: 'Named exports are the module’s **directory of services**; the default is the module’s **front door**. One module = one front door, many directory entries — and `import` is the lookup that binds them into local, read-only names.' }
        ],
        result: 'Named imports resolve by exact exported name; default imports bind the single anonymous export; any import of a name that does not exist fails before the program starts.'
      },
      {
        title: 'Trace the engine: dynamic import() on demand',
        problem: 'A page ships without its 400 KB charting library. Load it only when the user clicks the button, and verify what `import()` yields:\n```js\ndocument.getElementById("draw").addEventListener("click", async () => {\n  const charts = await import("./charts.js");\n  charts.plot(series);              // charts.js: export function plot(s) { ... }\n});\n```',
        steps: [
          { label: 'Step 1: Nothing happens at page load', text: 'The `import("./charts.js")` expression sits inside the click handler; no module graph edge exists from the entry script, so the bundler splits it into a separate chunk that the browser never fetches until asked.' },
          { label: 'Step 2: The click fires the async handler', text: 'The arrow function is `async`, so calling `import()` returns a promise that the `await` pauses on. The event handler returns control to the browser — the page stays responsive while the chunk downloads.' },
          { label: 'Step 3: The module is fetched, parsed, evaluated', text: 'The engine resolves the specifier, downloads the chunk, and evaluates the module body once. `export function plot(s)` is registered; the promise resolves to the **namespace object** containing it.' },
          { label: 'Step 4: Using the namespace', text: '`charts.plot(series)` reads the named export as a property. A default export would appear as `charts.default`; the namespace also supports `import * as`-style access to everything the module exports.' },
          { label: 'Step 5: Second click — from cache', text: 'A later `import("./charts.js")` resolves immediately: the module registry keeps the evaluated module, so the promise settles at once and the handler proceeds straight to `plot`.' }
        ],
        result: 'The charting code costs zero bytes on first paint and loads exactly once, on the first click — dynamic `import()` is the standard lazy-loading primitive.'
      },
      {
        title: 'Trace a circular import: live bindings to the rescue',
        problem: 'Two modules import each other. Trace the evaluation order and explain why the program still works:\n```js\n// a.js\nimport { helper } from "./b.js";\nexport const LABEL = "A";\nexport function main() { return helper(); }\n\n// b.js\nimport { LABEL } from "./a.js";\nexport function helper() { return "helper sees " + LABEL; }\n\n// main.js\nimport { main } from "./a.js";\nmain();\n```',
        steps: [
          { label: 'Step 1: main.js starts the graph', text: 'Its import of `a.js` begins `a`’s evaluation first. `a`’s own import of `b.js` is hoisted, so before `a`’s body runs, the engine starts `b` — the cycle point.' },
          { label: 'Step 2: b.js runs with a half-initialized a', text: '`b`’s import of `./a.js` does not restart `a`; the engine hands `b` **live bindings** into `a`’s scope, where `LABEL` exists as a declared-but-not-yet-initialized `const`. Crucially, `b` only *declares* `helper` — it does not read `LABEL` yet.' },
          { label: 'Step 3: b finishes, then a finishes', text: '`b` completes, returning control to `a`, whose body then executes: `LABEL = "A"` is initialized and `main` is defined. The graph is now fully evaluated.' },
          { label: 'Step 4: The delayed read sees the final value', text: 'When `main()` calls `helper()`, `helper` reads `LABEL` **through the live binding** — a reference into `a`’s scope — and finds the fully initialized `"A"`. The result is `"helper sees A"`.' },
          { label: 'Step 5: The boundary of safety', text: 'If `b` had read `LABEL` at top level — say `export const TAG = "b-" + LABEL;` — the evaluation order would hit an uninitialized `const` and throw. Cycles are safe when circularly imported values are used only inside functions called later.' }
        ],
        result: 'The circular import works: `main()` returns `"helper sees A"`, because ES6 exports are live references and the risky read is deferred until after both modules are fully evaluated.'
      }
    ],
    keyTakeaways: [
      'Named exports (`export const`, `export function`, `export { ... }`) are the module’s public directory; the default export is its single anonymous front door.',
      'Import forms: named `{ a, b as c }`, namespace `* as m`, default `x`, combined `x, { a }`, and side-effect-only `import "./polyfill.js"`.',
      'Imported bindings are read-only, declarations are hoisted, and importing a missing name is a link-time SyntaxError — before any code runs.',
      'Dynamic `import()` returns a promise for the namespace object and enables on-demand loading of heavy code.',
      'In the browser, `<script type="module">` gives deferred execution, strict mode and a private top-level scope for free.',
      'Static structure enables bundler tree shaking; live bindings make circular imports safe as long as circular values are only read inside functions.'
    ],
    quiz: [
      {
        q: 'A module has only `export default class Circle {}`. What happens with `import { Circle } from "./circle.js";`?',
        options: [
          'It works — the default is importable by name',
          'It binds `undefined`, failing later when Circle is used',
          'It throws a SyntaxError at link time because no named export `Circle` exists',
          'It loads the class twice, once per import form'
        ],
        answer: 2,
        explanation: 'ES6 validates imports against exports before evaluation: the module provides a default export only, so the named import fails immediately with a “does not provide an export named ‘Circle’” error.'
      },
      {
        q: 'How many default exports may a single ES6 module have?',
        options: ['Exactly one', 'Any number, one per function', 'One per file extension it is bundled into', 'None — defaults only exist in CommonJS'],
        answer: 0,
        explanation: 'A module has at most one default export — the anonymous value paired with the module as a whole, in addition to any number of named exports.'
      },
      {
        q: 'What is the result of assigning to an imported binding, as in `import { VERSION } from "./app.js"; VERSION = 3;`?',
        options: [
          'It silently updates the exporting module’s variable',
          'It throws a TypeError — imported bindings are read-only',
          'It creates a new global variable',
          'It triggers a re-import of the module'
        ],
        answer: 1,
        explanation: 'Imports are live but immutable views into the exporter’s scope; assignment is rejected at run time with a TypeError.'
      },
      {
        q: 'What does the expression `import("./heavy.js")` evaluate to?',
        options: [
          'The module’s default export directly',
          'A Promise that resolves to the module namespace object',
          'A Node-style `module.exports` object, synchronously',
          'A function that must be awaited twice'
        ],
        answer: 1,
        explanation: 'Dynamic `import()` fetches and evaluates the module asynchronously and resolves to the namespace object; named exports are its properties and the default is `.default`.'
      },
      {
        q: 'Compared with classic scripts, `<script type="module">` automatically provides:',
        options: [
          'Immediate synchronous execution at parse time',
          'Shared global scope for all module variables',
          'Deferred execution, strict mode and a private top-level scope',
          'Access to CommonJS `require()`'
        ],
        answer: 2,
        explanation: 'Module scripts execute after HTML parsing (like `defer`), always in strict mode, with top-level declarations scoped to the module and top-level `this` equal to `undefined`.'
      },
      // University-pattern: module live bindings — shared counter (original)
      {
        q: "Two modules exist. `counter.js` holds `export let n = 0; export function bump() { n++; }` and `app.js` holds `import { n, bump } from './counter.js'; bump(); bump(); console.log(n);`. What prints, and why?",
        options: ["`0`, because imports are snapshots copied at load time", "A TypeError, because imported bindings are frozen", "`2`, but only after re-importing the module", "`2`, because named imports are live views of the exporter's binding"],
        answer: 3,
        explanation: "Step 1: The data given is an exported mutable binding incremented twice through an exported function, then logged from the importer. Step 2: The governing rules are that ES module imports are live bindings to the exporter's variable rather than copies, that the importer side is read-only while the exporter may mutate, and that dependencies evaluate before their importers. Step 3: Tracing module order, `counter.js` initializes `n` to `0`, `app.js` runs two `bump()` calls raising the shared binding to `2`, and the log reads the live binding showing `2`. Step 4: The distractors fail because no snapshot is taken, reading an imported binding never throws, and no second import pass is needed for updates to appear. Step 5: Therefore the program prints `2` through the live binding."
      }
    ]
  }
]
