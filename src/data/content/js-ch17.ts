import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 17: JavaScript Tools and Extensions (Sections 17.1 – 17.6)
// Master study content.
// ============================================================================

export const jsCh17Content: SectionContent[] = [
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: 'js-ch17-s1',
    readingTime: 8,
    intro: 'Programs are read far more often than they are written — and read by machines even more than by humans. Two tools close that loop: **ESLint** reads your code without running it and reports the bugs that static analysis can prove (loose equality, assignments in conditions, misspelled variables), while **Prettier** reprints your code in a single canonical style so no human ever debates it again. One finds errors; the other erases bikeshedding. Together they form the floor of every serious JavaScript project.',
    objectives: [
      'Explain what a linter can and cannot detect without executing code',
      'Configure ESLint: rule severities, recommended presets and the flat config file',
      'Recognize the classic violations — loose equality, assignment in conditions, unused and undeclared variables',
      'Justify automatic formatting: why Prettier eliminates an entire class of review noise',
      'Divide the responsibilities: Prettier for layout, ESLint for correctness'
    ],
    concepts: [
      {
        term: 'Linting: reading without running',
        kind: 'definition',
        statement: 'A **linter** parses the source into an AST (the tree of Chapter 14’s metaprogramming world) and walks it looking for **patterns that are always or almost always mistakes** — using an undeclared variable, comparing with `==`, leaving a variable unused, writing code after `return`. It never executes the program, so it finds problems before the first run, in code paths tests never reach.',
        detail: 'The boundary is important: a linter proves things about **all executions** from the text alone, so it cannot catch a wrong algorithm that is syntactically honest — sorting with a broken comparator is invisible to it (that is a job for tests, Section 17.2). Its kills are typos, coercions and dead code: the bugs that hide in plain sight.'
      },
      {
        term: 'What ESLint catches',
        kind: 'insight',
        statement: 'The workhorse rules: **no-undef** (using a variable that was never declared — catches `console.lgo` typos and missing imports), **no-unused-vars** (declared but never read — usually leftover logic), **eqeqeq** (`==` coerces types; `0 == ""` is true), **no-cond-assign** (an `=` typed where `===` was meant in a condition), plus unreachable code, duplicate keys, and suspicious fallthrough.',
        detail: '\n```js\nconst total = quantity * price;\nif (total = 0) { ... }        // no-cond-assign: was === meant?\nif (total == "0") { ... }      // eqeqeq: 0 == "" — coercion alert\nconsole.lgo(total);             // no-undef: lgo is not a function of console\n```\nEach is a program that parses, runs, and quietly misbehaves — which is precisely why a machine should check it.'
      },
      {
        term: 'Configuring ESLint',
        kind: 'method',
        statement: 'ESLint reads a config file — the modern flat config `eslint.config.js` — that lists **rules with severities**: `"off"` (0), `"warn"` (1) and `"error"` (2); errors fail the lint run. You do not write rules from scratch: `js.configs.recommended` is a curated baseline of the rules that catch real bugs, and you override individual rules on top of it.',
        detail: '\n```js\n// eslint.config.js\nimport js from "@eslint/js";\n\nexport default [\n  js.configs.recommended,            // the sensible baseline\n  {\n    rules: {\n      eqeqeq: "error",               // === always\n      "no-unused-vars": "warn",      // leftovers: visible, not fatal\n      "no-console": "off",            // Node scripts may log\n    },\n  },\n];\n```\nThe severity triple is the whole management model: warn for “worth a look”, error for “the build stops”.'
      },
      {
        term: 'Prettier: an opinionated printer',
        kind: 'definition',
        statement: '**Prettier** parses the code (the same AST trick) and reprints it in **one canonical layout** — spacing, line width, quotes, trailing commas, where the line breaks — with almost no options. `prettier --write .` normalizes an entire codebase in one command, and editor-on-save keeps it that way.',
        detail: 'Prettier never interprets: the output is guaranteed semantically identical to the input (same AST modulo formatting), which is why it is safe to run blindly across a repository — and why it deliberately offers only a handful of options (printWidth, semi, singleQuote): the point is to have **no decision left to make**.'
      },
      {
        term: 'Why auto-format at all',
        kind: 'insight',
        statement: 'Every hour spent aligning indentation is an hour not spent on the program; every diff polluted with re-indentation hides the one line that actually changed. Formatting is a solved problem with one right answer per project: let the machine apply it, and code review discusses **behavior only** — the entire style category of review comments simply stops existing.',
        detail: 'The diff argument is the underrated one: a file reformatted by hand mixes cosmetic churn with real edits, and human reviewers stop trusting the diff. A canonical format means reformat commits are large, boring, once — and every later diff is semantic.'
      },
      {
        term: 'Division of labor',
        kind: 'method',
        statement: 'Run **Prettier for format, ESLint for correctness**, in that order — and disable ESLint’s stylistic rules entirely (the `eslint-config-prettier` preset does exactly this) so the two tools can never disagree. Wire both into the pipeline: format-on-save in the editor, then `npm run lint` in CI (Section 17.3) so the main branch cannot drift.',
        detail: '\n```js\n// package.json scripts\n"scripts": {\n  "format": "prettier --write .",\n  "lint": "eslint ."\n}\n```\nTwo tools, zero overlap: if ESLint is reformatting things, its stylistic rules are on and should be off — correctness and layout are different jobs with different tools.'
      }
    ],
    examples: [
      {
        title: 'Three violations that conspire to pay nothing',
        problem: 'This program compiles, runs, and prints `"paid in full"` — while computing a total of zero. Find the three lint-detectable violations and watch them cooperate, then see the exact ESLint report and the minimal fix.\n```js\nfunction total(quantity, price) {\n  const taxRate = 0.08;              // (2) assigned, never used\n  if (quantity = 0) {                // (1) assignment in a condition\n    return 0;                        //     ...so this guard is dead\n  }\n  return quantity * price;           //     and quantity is now 0\n}\n\nconst paid = total(3, 4);            // 0 — not 12\nif (paid == "") {                    // (3) loose equality\n  console.log("paid in full");        //     0 == "" is true!\n}\n```',
        steps: [
          { label: 'Step 1: Read the intent', text: 'The author meant: guard against a zero quantity, apply a tax rate, compute the total, and confirm it. Every one of those intentions is present in the text — and every one is broken by a one-character slip that JavaScript happily accepts.' },
          { label: 'Step 2: Violation 1 — `=` where `===` was meant', text: '`if (quantity = 0)` **assigns** 0 to quantity and uses the assigned value (0) as the condition — falsy, so the guard never fires. Worse, the side effect stands: `quantity` is 0 from here on, so the return line computes `0 * price`. One character changed control flow **and** data. This is what no-cond-assign exists to flag.' },
          { label: 'Step 3: Violation 2 — the unused taxRate', text: '`taxRate` is declared and never read: the calculation below hand-multiplies nothing (the author presumably meant `quantity * price * (1 + taxRate)`). A leftover from a refactor or an unfinished thought, it signals that **this function does not do what its variables claim** — no-unused-vars is a logic smell, not a tidiness one.' },
          { label: 'Step 4: Violation 3 — `==` makes the wrong check pass', text: '`paid` is 0, and `0 == ""` is **true**: both operands coerce to the number 0. With the intended `paid === 12`, the check would fail loudly and the bug would surface here. Loose equality did not cause the bug — it **hid** it, which is why eqeqeq is error-severity in most configs.' },
          { label: 'Step 5: The report and the fix', text: '```js\n// eslint .\n// total.js\n//   3:11  error  \'taxRate\' is assigned a value but never used     no-unused-vars\n//   4:9   error  Expected a conditional expression and instead\n//              saw an assignment                       no-cond-assign\n//   10:9  error  Expected \'===\' and instead saw \'==\'             eqeqeq\n//\n// 3 problems (3 errors, 0 warnings)\n```\nAll three surface in milliseconds without running anything. The fix: `if (quantity === 0)`, use the tax rate (or delete it), and `paid === expected` — three one-line changes that turn silent zero-payment into a working checkout.' }
        ],
        result: 'ESLint reports all three violations by rule name with file and line; fixing them makes `total(3, 4)` return the taxed total and the confirmation check compare real numbers — a program that was “working” only because two bugs and one coercion cancelled out.'
      },
      {
        title: 'Prettier before and after — semantics untouched',
        problem: 'Take a deliberately dense, inconsistently styled function and run `prettier --write` on it. Predict what changes and — more importantly — what is guaranteed not to.\n```js\n// before\nconst config={port:3000,host:"localhost",retries:3}\nfunction start(c){if(!c.port){throw new Error("no port")}return `http://${c.host}:${c.port}` }\n\n// after (prettier --write)\nconst config = { port: 3000, host: "localhost", retries: 3 };\nfunction start(c) {\n  if (!c.port) {\n    throw new Error("no port");\n  }\n  return `http://${c.host}:${c.port}`;\n}\n```',
        steps: [
          { label: 'Step 1: Catalog the mechanical changes', text: 'Missing semicolons and trailing commas added; spacing normalized around operators and braces; the collapsed `if` exploded to braces and its own lines; the overlong line split at the default 80-character print width; the stray space before the newline removed. Every change is layout — **not one token of meaning moved**.' },
          { label: 'Step 2: Why the output is trustworthy', text: 'Prettier parses to an AST and **prints** the tree — it never interprets or optimizes, so the output is by construction the same program: same bindings, same expressions, same execution. That guarantee is what makes “format the whole repository” a routine command instead of a code review event.' },
          { label: 'Step 3: What the team gains', text: 'The next person to touch this file sees the same shapes they see in every other file — curly-brace style, quote style, comma placement are no longer facts about individual authors. Review diffs shrink to semantic changes only, because nobody hand-reformats while editing anymore.' },
          { label: 'Step 4: Where the few knobs are', text: 'The config is tiny by design — `printWidth`, `tabWidth`, `semi`, `singleQuote`, `trailingComma` — set once in `.prettierrc` and never discussed again. The restriction is the feature: fewer options means fewer arguments, and a single obvious style per codebase. If you find yourself wishing Prettier would indent something differently, that is the moment to let go.' },
          { label: 'Step 5: Wire it into the day', text: 'Editor format-on-save is the loop that matters — the file is canonical the instant it is written, and nobody runs a formatting command by hand. CI then only needs to check (`prettier --check .`) that nothing bypassed the editor — belt and suspenders, with ESLint handling correctness on the same pipeline stage.' }
        ],
        result: 'Semantically identical code in canonical style — gained in one command, kept by the editor, enforced by CI; the entire topic of “how should this file be formatted” is retired from the project permanently.'
      }
    ],
    keyTakeaways: [
      'A linter parses to an AST and reports bug-shaped patterns without executing: it covers all code paths before the first run — but cannot judge algorithms (tests, 17.2).',
      'The money rules: no-undef (typos, missing imports), no-unused-vars (leftover logic), eqeqeq (coercion), no-cond-assign (= vs ===).',
      'Severities are the management model: "off" / "warn" / "error" (0/1/2); start from js.configs.recommended and override deliberately.',
      'Prettier reprints code in one canonical layout with near-zero options — same AST in, same program out, so it is safe to run blindly.',
      'Automatic formatting kills a whole category of review noise and keeps diffs semantic; format-on-save plus a CI check keeps it permanent.',
      'Division of labor: Prettier owns layout, ESLint owns correctness; disable ESLint’s stylistic rules (eslint-config-prettier) so they never fight.'
    ],
    quiz: [
      {
        q: 'Which bug can a linter NOT detect?',
        options: [
          'A comparison using == where coercion changes the result',
          'A sort comparator that returns the wrong sign, producing wrong order with valid syntax',
          'Using an undeclared variable due to a typo',
          'An assignment typed inside an if condition'
        ],
        answer: 1,
        explanation: 'Linting reasons about the text via the AST; a well-typed, well-formed comparator that implements the wrong ordering is a behavioral bug — the province of unit tests (Section 17.2).'
      },
      {
        q: 'In an ESLint config, what does severity "error" (2) mean?',
        options: [
          'The rule is disabled',
          'The rule produces a warning that never fails the run',
          'A violation fails the lint command — typically failing CI',
          'ESLint auto-fixes the problem'
        ],
        answer: 2,
        explanation: 'off/warn/error is the whole policy dial: warnings are visible but survivable; errors make `eslint .` exit non-zero, which is exactly how CI enforces the rules the team agreed on.'
      },
      {
        q: 'Why is `if (paid == "")` worth an eqeqeq error even when it happens to work?',
        options: [
          'It is slower than ===',
          '== applies type coercion — 0 == "" is true — so the check passes or fails on hidden conversions rather than the values compared',
          '== is deprecated syntax',
          'It only works in strict mode'
        ],
        answer: 1,
        explanation: 'Loose equality compares after coercing both sides (Section 3.7): empty string, zero and false collapse together — the comparison’s truth is an accident of conversion rules, not of the data.'
      },
      {
        q: 'What is the correct division of labor between Prettier and ESLint?',
        options: [
          'ESLint formats, Prettier lints',
          'Prettier owns canonical layout; ESLint owns correctness rules — with stylistic rules disabled so they never conflict',
          'Both must be run manually before every commit',
          'Use either one; they are interchangeable'
        ],
        answer: 1,
        explanation: 'Formatting and correctness are different problems: Prettier prints one canonical style from the AST, ESLint flags bug patterns — keeping each in its lane (eslint-config-prettier) removes the possibility of contradictory rulings.'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.2
  {
    sectionId: 'js-ch17-s2',
    readingTime: 10,
    intro: 'A test is a tiny program whose job is to fail loudly when your real program is wrong. **Jest** is the de facto standard harness: `describe` groups tests, `it` runs one, `expect(...)` asserts — and its matcher vocabulary plus first-class mocking make asynchronous, dependency-heavy code testable in isolation. This section covers the structure, the one matcher trap everyone hits (`toBe` versus `toEqual`), setup hooks, mocks for network calls, async tests and coverage.',
    objectives: [
      'Structure test suites with describe and it, and assert with expect and matchers',
      'Choose correctly between toBe and toEqual — and explain the object-reference gotcha',
      'Share setup and teardown with beforeEach/afterEach',
      'Replace dependencies with jest.fn() mocks and assert how they were called',
      'Test asynchronous code with awaits and the resolves/rejects matchers, and read coverage output'
    ],
    concepts: [
      {
        term: 'describe and it: tests as suites',
        kind: 'definition',
        statement: 'A test file is a tree of **suites** and **tests**: `describe("cart", () => { it("sums prices", () => { ... }) })`. Each `it` (alias: `test`) is one independently-run unit that passes if every assertion inside holds and fails on the first that does not — and each `it` describes one behavior in its name, so failures read as specifications.',
        detail: '\n```js\ndescribe("formatPrice", () => {\n  it("rounds to two decimals", () => { /* ... */ });\n  it("prefixes the currency", () => { /* ... */ });\n});\n```\nGood suite names are sentences: `it("returns empty for an empty cart")`. The failure output then reads like a broken spec — which is the entire debugging clue.'
      },
      {
        term: 'expect and the matcher vocabulary',
        kind: 'method',
        statement: '`expect(actual)` wraps a value and hands it to a **matcher** that decides pass/fail and prints the diff when it fails. The core: `toBe` (identity), `toEqual` (deep equality), `toStrictEqual` (deep + type + undefined-keys), plus the specialists:\n```js\nexpect(n).toBeCloseTo(0.3, 5);    // floating point\nexpect(s).toMatch(/err/);          // regex on strings\nexpect(arr).toContain("x");        // array membership\nexpect(arr).toHaveLength(3);       // .length of anything\nexpect(fn).toThrow("boom");         // sync throw\nexpect(obj).toHaveProperty("a.b"); // nested path\nexpect(obj).toMatchObject({ a: 1 });// partial deep match\n```\n',
        detail: 'Choosing the specialist over a hand-rolled check is not pedantry: the matcher’s **failure message** is the product. `toHaveLength(3)` failing prints “expected length 3, received 5” — your `expect(arr.length).toBe(3)` prints nearly the same, but `toCloseTo` on floats replaces an always-wrong `toBe(0.1 + 0.2, 0.3)` with an honest tolerance.'
      },
      {
        term: 'toBe versus toEqual: the classic gotcha',
        kind: 'insight',
        statement: '`toBe` is **identity** — the same rule as `===` (via Object.is): two objects with identical contents are **not** the same object, because variables hold references (Sections 3.6 and 6.1). `toEqual` is **deep equality** — it recursively compares contents. Use `toBe` for primitives, `toEqual` for anything made with `{}` or `[]` — the error Jest prints for an equal-looking pair is famously confusing: *“Received: serializes to the same string.”*',
        detail: '\n```js\nconst a = { x: 1 };\nconst b = { x: 1 };       // same content, different object\nexpect(b).toBe(a);        // FAILS — different references\nexpect(b).toEqual(a);     // passes — deep compare\nexpect(b === a).toBe(false); // the language agrees\n```\nAnd the mirror-image trap: `toEqual` also passes when a function accidentally returns a *fresh copy* — if identity matters (same object, not a clone), reach for toBe or toStrictEqual.'
      },
      {
        term: 'beforeEach and afterEach: fresh fixtures',
        kind: 'method',
        statement: 'Hooks run around each test in their suite: **beforeEach** builds a fresh fixture (a new cart, a new temp directory), **afterEach** tears it down; **beforeAll/afterAll** run once per suite for expensive shared setup. The rule: tests must not depend on each other — order should never matter.',
        detail: '\n```js\ndescribe("cart", () => {\n  let cart;\n  beforeEach(() => {\n    cart = createCart();       // every it() starts from zero\n  });\n  it("adds items", () => { cart.add("apple"); ... });\n  it("starts empty", () => { expect(cart.size()).toBe(0); });\n});\n```\nWithout the hook, `starts empty` depends on running before `adds items` — the suite becomes order-sensitive and intermittently red, the worst state a test suite can be in.'
      },
      {
        term: 'jest.fn(): test doubles',
        kind: 'definition',
        statement: '`jest.fn()` creates a **mock function**: a callable that records every call (arguments, order, results) and returns whatever you program — `mockReturnValue(v)`, `mockResolvedValue(p)` for promises, or `mockImplementation(fn)` for full behavior. The unit under test uses it in place of a real dependency, and the test then asserts **how it was called**: `toHaveBeenCalledTimes(1)`, `toHaveBeenCalledWith(args)`.',
        detail: 'Why mock at all: a real network call is slow (milliseconds vs microseconds), flaky (the third-party’s bad day becomes your red build), and ordered (test A’s POST changes what test B sees). A mock makes each test **deterministic and hermetic** — and lets you simulate the failure paths (a 500, a timeout) that a real service would never politely provide on demand.'
      },
      {
        term: 'Testing async code',
        kind: 'method',
        statement: 'Jest waits on whatever a test returns: **return or await the promise**, and the assertion runs after settlement. For failures, the `resolves`/`rejects` matchers await a promise and match its settlement: `await expect(p).resolves.toBe(42)`, `await expect(p).rejects.toThrow("x")` — no try/catch scaffolding, and a promise that never settles fails on timeout rather than silently passing.',
        detail: '\n```js\ntest("resolves", async () => {\n  await expect(Promise.resolve(42)).resolves.toBe(42);\n});\ntest("rejects", async () => {\n  await expect(Promise.reject(new Error("x"))).rejects.toThrow("x");\n});\n```\nThe classic rookie bug: forgetting the `return`/`await` — the test finishes before the promise settles and passes vacuously. Always awaiting is the discipline that closes that hole (Section 13.3 habits, reused).'
      },
      {
        term: 'Coverage: what ran, not what is right',
        kind: 'method',
        statement: '`jest --coverage` instruments the source and reports the percentage of **statements, branches, functions and lines** executed by the tests, per file. It is a map of untested territory — a branch never taken is a behavior never checked — but 100% coverage proves only that every line **ran**, not that the outcomes were asserted.',
        detail: 'Read coverage as a floor, not a goal: a test with no assertions executes code all day long. The numbers to care about are the uncovered ones — an uncovered error handler is a bug shipping with no net. And note the asymmetry with linting (17.1): coverage is measured by running; that is exactly why it cannot be checked statically.'
      }
    ],
    examples: [
      {
        title: 'The toBe/toEqual gotcha, demonstrated and diagnosed',
        problem: 'A cart object is cloned for a preview; the test compares the clone to the original. Predict each assertion, then read the real failure message and fix the test to express its actual intent.\n```js\nconst cart = { items: ["apple", "bread"], total: 5 };\nconst clone = JSON.parse(JSON.stringify(cart));  // deep copy\n\ntest("the clone has the same content", () => {\n  expect(clone).toEqual(cart);      // (a)\n  expect(clone).toBe(cart);        // (b)\n});\n\ntest("the clone is a different object", () => {\n  expect(clone === cart).toBe(false);   // (c)\n  expect(clone.items).toEqual(cart.items); // (d)\n});\n```',
        steps: [
          { label: 'Step 1: A JSON round trip builds a genuinely new object', text: '`JSON.stringify` walks the object into text; `JSON.parse` walks it back into **fresh objects** — every array and nested object is new storage. Content survives; identity does not (Chapter 11.5’s serialization boundary).' },
          { label: 'Step 2: Assertion (a) — deep equality passes', text: 'toEqual recursively compares: same keys, same array elements, same primitives — the clone **equals** the cart in the sense a person means. This is the right matcher for “did I build the thing correctly?”' },
          { label: 'Step 3: Assertion (b) — identity fails, with the infamous message', text: '```js\n// expect(received).toBe(expected) // Object.is equality\n//\n// Expected: {"items": ["apple", "bread"], "total": 5}\n// Received: serializes to the same string\n```\ntoBe is `===` (via Object.is), and two separately-created objects are never `===` (Section 3.6: variables hold references). Jest’s “serializes to the same string” is its way of saying: *these print identically but are not the same object — you probably meant toEqual.*' },
          { label: 'Step 4: Assertions (c) and (d) — state the real intent', text: 'If the test’s point is “it is a copy, mutations do not leak back”, assert that: `(c)` the language-level `clone === cart` is `false`, and (stronger) `expect(clone.items).not.toBe(cart.items)` — the **nested** arrays are distinct too, so pushing to `clone.items` leaves `cart.items` alone. `(d)` confirms the copy is faithful. Identity assertions and equality assertions together say everything: same shape, different storage.' },
          { label: 'Step 5: The rule you keep', text: 'Primitives (numbers, strings, booleans, symbols): `toBe`. Objects and arrays: `toEqual` (or `toStrictEqual` when `undefined`-valued keys and class mismatches matter). When a toBe fails with “serializes to the same string”, it is this section happening to you — and if identity genuinely matters (caching, memoization), keep it and document why.' }
        ],
        result: 'Test 1 fails on the toBe with “Received: serializes to the same string” while its toEqual passes; test 2 passes both assertions — clone and cart are equal in content and distinct in identity, which is exactly what a deep copy promises.'
      },
      {
        title: 'Mocking a fetch wrapper — plus async tests and coverage',
        problem: 'Test a network wrapper without a network: mock global fetch with `jest.fn()`, drive the success and the HTTP-error paths, assert exactly how the wrapper called the API — then run coverage on the result.\n```js\n// ---------- getUser.js (the unit under test) ----------\nasync function getUser(id) {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error(`user ${id}: HTTP ${res.status}`);\n  return res.json();\n}\n\n// ---------- getUser.test.js ----------\nbeforeEach(() => {\n  global.fetch = jest.fn();                     // fresh mock per test\n});\n\ntest("returns the parsed user on 2xx", async () => {\n  fetch.mockResolvedValue({ ok: true, json: async () => ({ id: 7, name: "Ada" }) });\n\n  const user = await getUser(7);\n\n  expect(fetch).toHaveBeenCalledTimes(1);\n  expect(fetch).toHaveBeenCalledWith("/api/users/7");\n  expect(user).toEqual({ id: 7, name: "Ada" });\n});\n\ntest("throws with the status on 4xx/5xx", async () => {\n  fetch.mockResolvedValue({ ok: false, status: 404 });\n\n  await expect(getUser(999)).rejects.toThrow("HTTP 404");\n});\n```',
        steps: [
          { label: 'Step 1: Replace the dependency, not the unit', text: 'The unit is `getUser` — its URL building, its `res.ok` policy, its parse. The dependency is `fetch`. Assigning `global.fetch = jest.fn()` swaps the dependency for a recording stand-in: every call the wrapper makes is captured (arguments, count, order), and the wrapper itself runs its real code. `beforeEach` re-creates the mock per test, so call counts from one test never leak into the next (fresh fixtures).' },
          { label: 'Step 2: Program the happy path', text: '`mockResolvedValue` makes the mock return a promise (Section 13.2 vocabulary) — so `await fetch(...)` inside the wrapper settles with the fake Response `{ok: true, json: ...}`. Note `json` is itself an async function returning a promise: the wrapper’s second await (`return res.json()`) must also be fed. The mock models exactly the shape the real API offers — an object with ok and a json() method — nothing more.' },
          { label: 'Step 3: Assert the call, then the result', text: 'Two kinds of assertion: **interaction** (`toHaveBeenCalledWith("/api/users/7")` — the wrapper called the dependency with the right argument, once) and **outcome** (`user` deep-equals the parsed object). Both matter: a wrapper that fetches the wrong URL but happens to return a hand-built object passes only the outcome — the interaction assertion is what makes the test mean “this wrapper talks to that API”.' },
          { label: 'Step 4: The failure path, with zero try/catch', text: 'The second test programs `{ok: false, status: 404}` and awaits `rejects.toThrow("HTTP 404")` — the matcher awaits the promise, expects a rejection, and matches the message (Section 13.2’s rejection, asserted without scaffolding). This is the determinism mocks buy: a 404 on demand, every run, in milliseconds — the real server would offer it only on its own schedule.' },
          { label: 'Step 5: Read the coverage, know its limits', text: '```js\n// npx jest --coverage\n// File        %Stmts  %Branch  %Funcs  %Lines\n// getUser.js   100      100      100     100\n//```\nBoth the ok and not-ok branches ran, so branch coverage is complete. But remember the definition: coverage says these lines **executed** — the assertions are what decided pass/fail. Delete every expect above and coverage stays at 100% with a suite that proves nothing; the two tools answer different questions, like lint (17.1) and tests answer different questions.' }
        ],
        result: 'Two green tests: the wrapper fetches the right URL once and returns the parsed user; it rejects with a status-bearing message on 4xx — in milliseconds, offline, deterministically — and coverage confirms both branches ran.'
      }
    ],
    keyTakeaways: [
      'Suites are describe/it trees; one behavior per it, named as a sentence — failures should read like a broken spec.',
      'toBe is identity (=== via Object.is) — wrong for equal-content objects; toEqual is deep equality (toStrictEqual adds type and undefined-key strictness); the tell “Received: serializes to the same string” means two equal-looking but distinct objects hit a toBe.',
      'Use specialists for better failure messages: toBeCloseTo (floats), toMatch, toContain, toHaveLength, toThrow, toMatchObject, toHaveProperty.',
      'beforeEach builds fresh fixtures so tests are order-independent; jest.fn() replaces dependencies with recording doubles — mockResolvedValue for promises.',
      'Assert interactions AND outcomes: toHaveBeenCalledWith checks the contract, toEqual checks the result.',
      'Async: await the work or return the promise; rejects/resolves match settlement without try/catch — never let a test finish before its promises do.',
      'Coverage maps what ran (statements/branches/functions/lines) — a floor for finding untested code, not proof of correctness.'
    ],
    quiz: [
      {
        q: '`const a = {x: 1}; const b = {x: 1};` — which assertion passes?',
        options: [
          'expect(b).toBe(a)',
          'expect(b).toEqual(a)',
          'expect(b).toBe(a) and expect(b).toEqual(a)',
          'Neither — Jest cannot compare objects'
        ],
        answer: 1,
        explanation: 'Two object literals are two objects: === (and toBe) compares references and fails; toEqual compares contents recursively and passes — the copy/clone gotcha in one line.'
      },
      {
        q: 'Why does Jest print “Received: serializes to the same string” for a failing toBe?',
        options: [
          'The objects are circular and cannot be printed',
          'The two values print identically but are different objects — an identity comparison failed, so toEqual was probably meant',
          'Jest cannot stringify objects with methods',
          'The test timed out'
        ],
        answer: 1,
        explanation: 'toBe is === for objects: equal-looking content, distinct identity. The message is Jest diagnosing the classic gotcha for you — the values differ only in being two separate allocations.'
      },
      {
        q: 'When does the beforeEach hook run?',
        options: [
          'Once before the whole file',
          'Before every it() in its describe block — each test gets a fresh fixture',
          'After each test',
          'Only when a test fails'
        ],
        answer: 1,
        explanation: 'Per-test setup is what keeps tests order-independent: every it starts from the same known state, so failures point at behavior, not at which tests happened to run first.'
      },
      {
        q: 'Why replace fetch with jest.fn() in unit tests?',
        options: [
          'To make the tests run in a browser',
          'For determinism and speed: no network latency, no third-party outages, and failure paths (404, 500) programmable on demand — while asserting how the unit called it',
          'Because fetch is not part of JavaScript',
          'To increase code coverage automatically'
        ],
        answer: 1,
        explanation: 'Mocks make tests hermetic and fast and record the interaction (toHaveBeenCalledWith) — the real dependency’s mood swings stop being your build’s mood swings.'
      },
      {
        q: 'What does 100% branch coverage prove?',
        options: [
          'Every assertion passed and the code is correct',
          'The code has no bugs',
          'Every branch was executed by the tests — not that every outcome was asserted or is correct',
          'The tests run in under a second'
        ],
        answer: 2,
        explanation: 'Coverage is an execution map: it finds untested territory, but assertions are what decide pass/fail — a test with no expects covers code while proving nothing.'
      },
      // University-pattern: test harness use — assertion versus comment versus log (original)
      {
        q: "A team adopts Jest for a utilities file. Three checks for `clamp` are proposed:\n```js\n// R: test('clamp keeps values in range', () => { expect(clamp(15, 0, 10)).toBe(10); });\n// S: a comment stating that clamp(15, 0, 10) should be 10;\n// T: console.log(clamp(15, 0, 10));\n```\nWhich one matches the harness's intended use?",
        options: ["S, because the runner verifies comments", "T, because printed output fails the build on mismatch", "S and T are both equivalent to R", "R, because it states an assertion the runner executes and reports"],
        answer: 3,
        explanation: "Step 1: The data given is one real test case, one prose comment, and one manual print of the same computation. Step 2: The governing rule is that a test is a tiny program that fails loudly: `test()` registers a case, `expect().toBe()` asserts a value, and the runner executes every case and reports passes and failures. Step 3: Tracing each proposal, R runs the function, compares against `10`, and reports the verdict; S is never executed as a check; T displays a number no tool compares. Step 4: The distractors fail because comments assert nothing, console output passes regardless of content, and only the assertion form connects the computation to a verdict. Step 5: Therefore the assertion form is the intended Jest usage."
      }
    ]
  },

  // ---------------------------------------------------------------- 17.3
  {
    sectionId: 'js-ch17-s3',
    readingTime: 10,
    intro: 'JavaScript ships as **packages** — units of reusable code identified by name and version — and arrives in browsers as **bundles**. `npm` is the package manager at the center: `package.json` declares what you depend on, **semantic versioning** decides how much change you accept, and the **lockfile** pins exactly what you got. Bundlers then assemble those modules (and tree-shake what you never use) into deployable output. One file, one manifest, one build — this section reads them all.',
    objectives: [
      'Read and write package.json: metadata, scripts and the three dependency kinds',
      'Explain semantic versioning and the meaning of ^, ~ and exact versions',
      'Determine exactly which versions a range such as ^2.3.1 accepts',
      'Use npx to run project tools without global installs, and explain lockfiles',
      'Explain what bundlers do, how tree-shaking works, and what HMR buys the dev loop'
    ],
    concepts: [
      {
        term: 'package.json: the manifest',
        kind: 'definition',
        statement: '`package.json` is a project’s manifest: identity (`name`, `version`, `type`), the **scripts** that build/test/run it, and the dependency lists that npm installs. Everything npm and the toolchain know about your project starts here — a repo is not “an npm project” until this file exists.',
        detail: '\n```js\n{\n  "name": "wordcount",\n  "version": "1.4.2",\n  "type": "module",\n  "scripts": {\n    "test": "jest",\n    "lint": "eslint src",\n    "start": "node src/server.js"\n  },\n  "dependencies": { "marked": "^12.0.0" },\n  "devDependencies": { "jest": "^29.7.0", "eslint": "^9.1.0" },\n  "peerDependencies": { "react": "^18.0.0" }\n}\n```\nIts own version field obeys the same semver everyone else’s does — projects are packages, just unpublished ones.'
      },
      {
        term: 'scripts: the project’s keyboard',
        kind: 'method',
        statement: 'The `scripts` map names shell commands: `npm test`, `npm run lint`, `npm start` (start/test have shortcuts). `npm run <name>` executes the command with `node_modules/.bin` on the PATH, so locally-installed tools run **without global installs or ./node_modules prefixes** — the entire team (and CI) shares one interface to the project.',
        detail: 'Adding a tool later means adding one script line, and every consumer — a teammate, a CI pipeline, a Makefile wrapper — uses the same name. Pre/post conventions (`pretest`) run hooks around them; the discipline is that “how do I run the tests” should always have the same one-word answer.'
      },
      {
        term: 'dependencies, devDependencies, peerDependencies',
        kind: 'method',
        statement: '**dependencies** are needed **at runtime** (marked renders markdown when your server runs). **devDependencies** are needed to **build and test** (jest, eslint, prettier, typescript). **peerDependencies** are things the **host must provide** — a React component library declares react as a peer, so the app’s single React is used instead of the library smuggling in a second copy.',
        detail: 'The split matters most when you publish: `npm install` on your package pulls its dependencies but **not** its devDependencies — consumers get the runtime needs, never your test tools. For an application (never published) the distinction is bookkeeping; for a library it is a contract. `npm i -D jest` writes to devDependencies.'
      },
      {
        term: 'Semantic versioning and ranges',
        kind: 'notation',
        statement: 'A version is `MAJOR.MINOR.PATCH`: **PATCH** for bug fixes, **MINOR** for backward-compatible additions, **MAJOR** for breaking changes. A range says how far you trust: **`^2.3.1`** accepts changes that keep the leftmost nonzero component — `>=2.3.1 <3.0.0`; **`~2.3.1`** allows patch-level only — `>=2.3.1 <2.4.0`; a bare **`2.3.1`** pins exactly.',
        detail: 'The trust model behind ^: “bug fixes and new features, but never a breaking change” — exactly what semver promises within a major. The exception that proves the rule: **`^0.3.1` means `>=0.3.1 <0.4.0`**, because 0.x is the unstable band where the **minor** plays the breaking role. `npm install pkg` writes `^` by default — you opt into trust unless you pin.'
      },
      {
        term: 'The lockfile: reproducible installs',
        kind: 'insight',
        statement: '`package-lock.json` records the **exact resolved tree** — every package, every transitive dependency, every checksum — from the last successful install. `npm ci` installs from it verbatim: byte-identical node_modules on your machine, your teammate’s machine and CI. Without it, two installs of `^2.3.1` on different days can silently differ.',
        detail: 'Ranges are declarations of intent; the lockfile is a record of fact. The workflow: range bumps come with dependency updates (a deliberate, reviewable commit that updates the lockfile); automatic upgrades never happen by accident. Commit the lockfile — for applications it is as much source code as anything in src/.'
      },
      {
        term: 'npx: run without installing',
        kind: 'method',
        statement: '`npx <command>` finds the named binary: in the project’s `node_modules/.bin` first, or — if it is not there — downloads a temporary copy and runs it, no global install. `npx create-next-app myapp` bootstraps a project with a tool you never meant to keep; `npx jest` runs the project’s exact local version.',
        detail: 'The global-install habit it replaces: `npm install -g some-tool` puts a version on your machine that shadows or clashes with each project’s own. npx prefers the local one — so the same command name runs the version the lockfile says, per project, per machine.'
      },
      {
        term: 'Bundlers: from modules to deployable output',
        kind: 'definition',
        statement: 'A **bundler** starts at an entry file, follows every `import` recursively through the module graph (Chapter 10), and emits **one or a few output files** containing the whole program — with transforms applied (Babel, Section 17.4) and unreferenced exports dropped. webpack is the classic; Rollup, Parcel and the fast newcomers (esbuild, Vite) share the model.',
        detail: 'Why bundle at all: fewer requests over HTTP/1.1, one minified artifact to cache and deploy, and — most importantly today — a build step where the whole toolchain (transpilation, JSX, CSS modules) plugs in. The dev server (below) is what makes the bundler feel instant during development.'
      },
      {
        term: 'Tree-shaking: dead-export elimination',
        kind: 'method',
        statement: 'Because ES module `import`/`export` are **static** — analyzable from the text without running the code (Section 10.3) — a bundler can compute which exports are reachable from the entry and **omit the rest**. Import one function from a 200-export utility library and the bundle contains that function’s code, not the library’s whole file.',
        detail: 'The reachability walk is mark-and-sweep over the module graph: mark every import and every export those modules actually use; sweep away unmarked declarations. Two things defeat it: **side effects** at module top level (the safest assumption is to keep code that might do something — package.json’s `"sideEffects": false` is the library promising it is pure) and **CommonJS** `require`, which is a runtime function call no static analysis can see — the reason tree-shaking needs ES modules.'
      },
      {
        term: 'The dev server and HMR',
        kind: 'insight',
        statement: 'A bundler’s dev server watches source files; on save it rebuilds **only the changed module** and swaps it into the running app — **hot module replacement** — without a full page reload, preserving application state in the process (React Fast Refresh keeps component state across edits). The edit-to-see loop drops from seconds to milliseconds.',
        detail: 'Underneath it is Section 16.5’s `fs.watch`: file changes fire events, the watcher debounces them, and the server pushes an update over a websocket. The production build remains the full optimized bundle — HMR is the development-mode experience, which is precisely what makes iterating in a big bundled codebase feel like editing one small file.'
      }
    ],
    examples: [
      {
        title: 'What does ^2.3.1 actually accept?',
        problem: 'Your package.json says `"leftpad": "^2.3.1"`. For each candidate release — 2.3.0, 2.3.1, 2.3.7, 2.4.0, 2.9.99, 3.0.0 — decide whether `npm update` would install it, then state the range in inequalities and compare with ~2.3.1.\n```js\n"leftpad": "^2.3.1"   // resolves to: >=2.3.1 <3.0.0\n"leftpad": "~2.3.1"   // resolves to: >=2.3.1 <2.4.0\n"leftpad": "2.3.1"    // resolves to: exactly 2.3.1\n```',
        steps: [
          { label: 'Step 1: Expand the caret', text: '`^2.3.1` locks the **leftmost nonzero component** — the major, 2 — and lets everything to its right float: the range is `>=2.3.1 <3.0.0`. The floor is the written version (nothing older than you asked for); the ceiling is the next major (nothing semver promises to be compatible with).' },
          { label: 'Step 2: Walk the candidates against the floor', text: '**2.3.0** is below the floor — rejected (it is older than the version you named). **2.3.1** and **2.3.7** — patches — accepted: semver says patches are bug fixes only. **2.4.0** and **2.9.99** — minors — accepted: backward-compatible additions, which is the trust `^` expresses. **3.0.0** — rejected: the ceiling is exclusive, and a new major is allowed to break you.' },
          { label: 'Step 3: Compare the tilde', text: '`~2.3.1` stops at the minor: `>=2.3.1 <2.4.0`. So 2.3.7 yes, 2.4.0 no — **patch-level trust only**. Choose it when a dependency’s minors have historically brought risk, or for teammates of stability-critical builds; the price is forgoing backward-compatible features until you bump deliberately.' },
          { label: 'Step 4: The zero-band exception', text: 'Run the same expansion on `^0.3.1` and the leftmost **nonzero** component is the 3, not the 0: the range is `>=0.3.1 <0.4.0`. Zero-major versions declare “unstable — the minor may break,” so the caret conservatively treats it like a major. Same rule, different anchor — and the reason 0.x caret ranges surprise people.' },
          { label: 'Step 5: Where the decision actually lands', text: 'The range only decides what `npm update` **may** fetch; the lockfile records what it **did** fetch. If the lockfile says 2.7.4, every install is 2.7.4 even after 2.8.0 ships — upgrades happen when you re-resolve and commit the new lockfile. The range is policy; the lockfile is fact; CI runs `npm ci` on the fact.' }
        ],
        result: '^2.3.1 accepts 2.3.1, 2.3.7, 2.4.0 and 2.9.99; rejects 2.3.0 (below floor) and 3.0.0 (at ceiling — exclusive) — while ~2.3.1 would additionally reject 2.4.0 and 2.9.99.'
      },
      {
        title: 'Tree-shaking, traced through the module graph',
        problem: 'A utility module exports two functions; the app imports one. Trace what the bundler emits and why — then break it, twice, and see what survives.\n```js\n// ---------- math.js ----------\nexport function used(x) { return x + 1; }\nexport function unused(x) { return x * 2; }\n\n// ---------- main.js (entry) ----------\nimport { used } from "./math.js";\nconsole.log(used(41));\n\n// ---------- bundled output (esbuild --bundle --minify) ----------\nconsole.log((x => x + 1)(41));\n```',
        steps: [
          { label: 'Step 1: The entry marks its imports', text: 'The bundler parses `main.js`, finds the static `import { used }`, and marks the export `used` as **reachable**. The word “static” is doing the work: an ES import is a declaration the parser can see (Section 10.3), not a runtime value — no execution is needed to know who wants what.' },
          { label: 'Step 2: Mark-and-sweep decides what survives', text: 'In `math.js`, `used` is marked; `unused` is not — and nothing else references it either. The sweep drops it: the emitted bundle contains only the arithmetic of `used` (inlined to `x => x + 1` by the minifier). Scale that to a 200-export library and one import costs bytes, not kilobytes.' },
          { label: 'Step 3: Break it with a side effect', text: 'Add `console.log("math.js loaded")` at the top of math.js and shake again: the log **survives**, and so may anything the bundler cannot prove pure around it. Top-level code runs for its effects — dropping it changes the program. The escape is the library’s declaration `"sideEffects": false` in its package.json: a promise that its modules are pure, restoring the aggressive drop.' },
          { label: 'Step 4: Break it with CommonJS', text: 'Rewrite math.js as `exports.unused = function (x) { return x * 2; }; exports.used = ...` — a `require`-world module. Now what lands on `exports` is decided by **runtime** code paths (loops, conditionals, dynamic keys); the static walk is blind, and the safe output is the whole module. This is the tree-shaking argument for ES modules (Section 10.3) over CommonJS (10.2) in one example — reachability analysis needs syntax that declares itself.' },
          { label: 'Step 5: Confirm the result empirically', text: 'The honest check is bundle size: build with the import commented out, build with it present — the delta is the true cost of that one function. Two builds, one subtraction, no trust in anyone’s tree-shaking claims — and if the delta is the whole library, the import is dynamic (`import()`), the module has side effects, or the package ships CommonJS.' }
        ],
        result: 'One import of one function yields a bundle containing exactly that function’s code — until a side effect or a CommonJS export forces the conservative fallback; the mechanism throughout is static reachability over the ES module graph.'
      }
    ],
    keyTakeaways: [
      'package.json is the manifest — identity, scripts (npm run/test/start) and dependency lists; scripts put node_modules/.bin on the PATH so tools run without global installs.',
      'dependencies = runtime; devDependencies = build/test (never installed by consumers); peerDependencies = provided by the host (one React, not two).',
      'Semver: MAJOR.MINOR.PATCH = breaking / compatible-additions / fixes; ^2.3.1 accepts >=2.3.1 <3.0.0 and ~2.3.1 stops at <2.4.0 — and because the caret locks the leftmost NONZERO component, ^0.3.1 stops at 0.4.0 (the 0.x band treats minors as breaking).',
      'The lockfile records the exact resolved tree; npm ci reproduces it byte-for-byte — ranges are policy, the lockfile is fact, and it belongs in version control.',
      'npx runs local-or-temporary binaries — the project’s locked version, no global installs.',
      'Bundlers follow the static ES import graph from an entry into deployable output; tree-shaking is mark-and-sweep reachability — defeated by side effects and by CommonJS.',
      'HMR (atop fs.watch, Section 16.5) swaps just the changed module, preserving state — the dev-loop payoff that made bundlers universal.'
    ],
    quiz: [
      {
        q: 'Which release will `npm update` NOT install for the range `^2.3.1`?',
        options: [
          '2.3.7',
          '2.4.0',
          '2.9.99',
          '3.0.0'
        ],
        answer: 3,
        explanation: 'The caret range is >=2.3.1 <3.0.0 — a new major is the ceiling and it is exclusive: semver allows it to break, which is exactly what the range declines to trust.'
      },
      {
        q: 'Jest appears under which key in package.json for an application you will not publish?',
        options: [
          'dependencies — tests run at runtime',
          'devDependencies — it builds and tests the project but is not needed to run it',
          'peerDependencies — the host provides it',
          'optionalDependencies — it is nice to have'
        ],
        answer: 1,
        explanation: 'Jest is a tool: needed to develop and verify, not to execute the shipped program — the devDependencies slot, which also keeps it (and its transitive weight) out of consumers’ installs if you ever publish.'
      },
      {
        q: 'What is the purpose of peerDependencies in a React component library?',
        options: [
          'To install two copies of React for redundancy',
          'To declare that the host application must supply React — so the library shares the app’s single instance instead of bundling its own',
          'To mark dependencies that failed to install',
          'To list test tools'
        ],
        answer: 1,
        explanation: 'Two Reacts in one page means two reconcilers fighting over one DOM — peers let the library demand the host’s copy and interoperate with its hooks and context.'
      },
      {
        q: 'Why does tree-shaking work with ES modules but hardly at all with CommonJS?',
        options: [
          'ES modules are smaller',
          'ES import/export are static — analyzable from the source without running it — while CommonJS require/exports are runtime values the analyzer cannot see through',
          'CommonJS files cannot be parsed',
          'Bundlers refuse to read CommonJS'
        ],
        answer: 1,
        explanation: 'Reachability analysis needs to know who-uses-what before execution: the ES import declaration provides that statically; a require call is just a function whose result is decided at runtime (Sections 10.2 vs 10.3).'
      },
      {
        q: 'What does the lockfile guarantee that package.json ranges do not?',
        options: [
          'Faster installs',
          'The exact, checksummed version of every package (including transitive ones) — reproducible installs across machines and CI',
          'That no dependency ever needs updating',
          'Compatibility with the newest Node'
        ],
        answer: 1,
        explanation: 'A range like ^2.3.1 resolves differently on different days; the lockfile freezes what was actually resolved, so npm ci installs the identical tree everywhere until someone deliberately updates it.'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.4
  {
    sectionId: 'js-ch17-s4',
    readingTime: 8,
    intro: 'Modern JavaScript runs on ancient browsers — because **Babel** rewrites it first. Babel is a **transpiler**: a source-to-source compiler that parses your ES2024-era code and emits equivalent code in an older dialect, driven by a list of target environments. Its companion trick is the **polyfill**: when the missing piece is a runtime method rather than syntax, you cannot rewrite your way out and must install the behavior instead. Knowing which problem you have — syntax or behavior — is the whole skill.',
    objectives: [
      'Distinguish transpilation (syntax, compile-time) from polyfilling (behavior, runtime)',
      'Configure @babel/preset-env with browser targets through browserslist',
      'Predict how modern syntax — optional chaining — compiles to older JavaScript, and why Babel’s real output caches the intermediate value',
      'Know what Babel cannot do (missing built-ins) and what to import instead'
    ],
    concepts: [
      {
        term: 'Transpilation: source to source',
        kind: 'definition',
        statement: '**Transpilation** is compiling one high-level language into another high-level language: Babel parses modern JavaScript into an AST (the same metaprogramming machinery as Chapter 14), transforms the tree — replacing newer syntax with equivalent older syntax — and prints JavaScript back out. Input and output are the same language, just different dialects.',
        detail: 'The direction is always “new syntax → old syntax”: arrow functions become `function` expressions, classes become constructor functions, template literals become concatenation. Output readability is not a goal — nobody edits it; it exists to run where the source cannot.'
      },
      {
        term: 'Syntax versus behavior: transpile versus polyfill',
        kind: 'insight',
        statement: 'A language feature is either **syntax** (`?.`, `??`, classes — a form the parser must understand) or **behavior** (`Array.prototype.flat`, `Promise`, `Object.entries` — methods and objects the runtime must provide). Babel fixes the first by rewriting; the second needs a **polyfill** — a library that installs the missing method if it is absent: `if (!Array.prototype.includes) { Array.prototype.includes = function... }`.',
        detail: '\n```js\n// syntax — Babel rewrites it at build time:\nconst street = user?.address?.street;         // ES2020 in\nconst street = user == null ? void 0 : ...;   // ES5 out\n\n// behavior — only a polyfill can provide it:\n[1, 2, 3].includes(2);   // method call: identical syntax in ES5 and ES2020\n```\nA method call looks the same in every dialect — there is nothing to rewrite; either the method exists at runtime or your program throws. The classification question — “syntax or behavior?” — decides the whole toolchain.'
      },
      {
        term: '@babel/preset-env',
        kind: 'method',
        statement: 'A **preset** is a curated bundle of plugins; **preset-env** is the meta-preset: given your target environments, it enables **exactly the transforms those targets need** and no more. Modern browsers get (nearly) a no-op build; a legacy-supporting build gets the full translation — one config, two correct outputs.',
        detail: '\n```js\n// babel.config.js\nexport default {\n  presets: [\n    ["@babel/preset-env", {\n      targets: "> 0.25%, not dead",     // browserslist query\n      useBuiltIns: "usage",              // polyfill only what is used\n      corejs: 3,\n    }],\n  ],\n};\n```\n`useBuiltIns: "usage"` scans your code and injects imports from core-js for the **used** features the targets lack — the polyfill story automated.'
      },
      {
        term: 'browserslist: naming your targets',
        kind: 'notation',
        statement: 'Targets are written as **browserslist** queries — a shared mini-language used by Babel, Autoprefixer and more: `"> 0.25%, not dead"` (browsers with >0.25% share, excluding unmaintained ones), `"defaults"`, `"last 2 versions"`, `"node 18"`. The same string steers every tool in the chain.',
        detail: 'The query **is** the product decision: every target you add is older syntax in everyone’s bundle. “not dead” excludes browsers that no longer receive security updates; a corporate build may need `ie 11` — which is precisely when preset-env earns its keep, and when bundle sizes climb.'
      },
      {
        term: 'Where Babel runs',
        kind: 'method',
        statement: 'Babel runs as a build step: `@babel/cli` for direct invocation (`babel src -d lib`), but more commonly as the transform stage inside the bundler (Section 17.3’s loader pipeline), or — for JSX — inside the framework’s own toolchain (Section 17.5). `@babel/core` is the engine; plugins are individual transforms; presets are plugin bundles.',
        detail: 'The division: @babel/core parses and prints; plugins each do one transform; preset-env picks plugins from targets. Fast Rust-based transpilers (esbuild, SWC) increasingly replace Babel for speed while keeping the same conceptual model — targets in, equivalent older syntax out — so the vocabulary here outlives the tool.'
      }
    ],
    examples: [
      {
        title: 'Optional chaining, compiled by hand',
        problem: 'Compile `const street = user?.address?.street;` to older JavaScript yourself, then compare with what Babel actually emits — and find the reason for the temp variable.\n```js\n// ---------- source (ES2020) ----------\nconst street = user?.address?.street;\n\n// ---------- what it MEANS (hand-compiled) ----------\nconst street = user == null\n  ? undefined\n  : user.address == null\n    ? undefined\n    : user.address.street;\n\n// ---------- what Babel EMITS (real output, simplified) ----------\nvar _user$address;\nvar street =\n  user === null || user === void 0\n    ? void 0\n    : (_user$address = user.address) === null || _user$address === void 0\n      ? void 0\n      : _user$address.street;\n```',
        steps: [
          { label: 'Step 1: What the ?. promise is', text: 'For `a?.b`: if `a` is null or undefined, the **entire chain short-circuits to undefined** — `a.b` is never evaluated, and neither is anything after it. Two semantics in one operator: a null test and a skip. That is what must survive every compile.' },
          { label: 'Step 2: The `== null` idiom — both nulls in one test', text: 'The hand-compiled test is `user == null` — the one place loose equality remains idiomatic: it is true for **both** `null` and `undefined` (Section 3.7). Note the tension with Section 17.1’s eqeqeq — ESLint configs commonly carve out exactly this pattern (`{ "eqeqeq": ["error", "always", { "null": "ignore" }] }`).' },
          { label: 'Step 3: void 0 — undefined, spelled safely', text: 'Babel writes `void 0` where the hand version wrote `undefined`: `void 0` evaluates to undefined, is shorter to emit, and — in pre-ES5 code where `undefined` was a writable global — could not be tampered with. Today it is belt-and-suspenders history, but you will meet it constantly in compiled output, so read it as `undefined`.' },
          { label: 'Step 4: Why Babel’s real output uses a temp variable', text: 'The hand version evaluates `user.address` **twice** — once in the null test, once in the access. If `address` were a getter with side effects (a log line, a counter), the hand compile would run it twice and change the program. Babel instead reads `user.address` once into a temp variable and tests that — output that preserves semantics **including** evaluation counts, which is the entire difference between “looks right” and “is right”.' },
          { label: 'Step 5: preset-env would not even blink here', text: 'Point the same config at modern Chrome and none of this happens: `?.` is supported natively, so preset-env leaves the line untouched. One target list (`ie 11` present or absent) is the difference between a no-op build and the ternary cascade — targets, not effort, decide the output.' }
        ],
        result: 'The chain compiles to nested null-guarded ternaries that short-circuit to undefined — with Babel’s real output caching each intermediate access in a temp variable so getters never run twice, and modern targets skipping the transform entirely.'
      },
      {
        title: 'The polyfill side: what no syntax rewrite can fix',
        problem: 'The same “support older runtimes” build must also run `Array.prototype.includes`, `Promise` and `Object.entries` — features that are methods and objects, not syntax. Classify each and write the policy.\n```js\n// 1. syntax — rewrite at build time:\nconst n = items.length ?? 0;              // nullish coalescing\n\n// 2. behavior — install at runtime if absent:\nif (!Array.prototype.includes) {\n  Array.prototype.includes = function (x) {\n    return this.indexOf(x) !== -1;      // approximation for old runtimes\n  };\n}\nconst has = [1, 2, 3].includes(2);       // identical syntax, any era\n\n// 3. more behavior:\nif (!Promise) { /* core-js provides it */ }\nObject.entries({ a: 1 });               // method — polyfill, not transform\n```',
        steps: [
          { label: 'Step 1: Classify by “does the parser care?”', text: '`items.length ?? 0` is a form the parser must understand — **syntax**: Babel rewrites it (to a ternary testing `== null`, the previous example’s machinery). `[1,2,3].includes(2)` parses identically in ES5 and ES2020 — it is a **behavior** question: does the runtime provide the method? Nothing to rewrite; either it is there or it is not.' },
          { label: 'Step 2: A polyfill is a feature-detecting installer', text: 'The canonical shape is the `if (!Array.prototype.includes)` guard: check whether the platform already provides it, and only then patch it in. That is why polyfills are safe on modern runtimes — they self-verify and do nothing — and why they must be loaded **before** first use.' },
          { label: 'Step 3: The core-js library is the polyfill catalog', text: 'You do not hand-write these — **core-js** (with regenerator-runtime for generators) implements the whole standard library for old environments. `useBuiltIns: "usage"` in preset-env scans your code for used features (`includes`, `Promise`, `entries`), and injects `import "core-js/..."` only for the ones your targets actually lack: the include list, computed per build.' },
          { label: 'Step 4: What each mechanism costs', text: 'Syntax transforms cost **bytes always** (the ternary is larger than the `?.`) and zero runtime — dead weight on modern browsers you chose to support. Polyfills cost **bytes conditionally** (only for the features used and missing) and a load-order discipline. Both costs are your targets list itemized — the browserslist string from the previous concept, priced.' },
          { label: 'Step 5: The modern footnote', text: 'Today `?.`, `??` and classes run natively for >95% of users, so many projects transpile almost nothing and ship the source — but the syntax/behavior split never retires: every new standard feature (array grouping, temporal) re-asks the question, and the answer is always “transform if syntax, polyfill if behavior, targets decide.”' }
        ],
        result: 'Syntax gets rewritten at build time; behaviors get installed at runtime via feature-detecting polyfills (core-js, auto-injected per usage); the targets list is the single knob that prices both.'
      }
    ],
    keyTakeaways: [
      'Babel is a source-to-source compiler: modern syntax in, equivalent older syntax out — driven entirely by the target environment list.',
      'The classification question: syntax (parser must know it — classes, ?, ??) → transpile; behavior (runtime must provide it — includes, Promise, entries) → polyfill.',
      'A polyfill feature-detects and installs missing methods/objects only when absent — safe everywhere, required before first use.',
      'preset-env + browserslist targets select exactly the transforms needed; useBuiltIns: "usage" + core-js injects only the polyfills your code actually uses.',
      'Compiled output idioms: `== null` tests both nulls (the eqeqeq-sanctioned exception), `void 0` is undefined, temp variables cache property reads so getters never run twice.',
      'Targets are the product decision: every browser supported is older syntax and more polyfill in everyone’s bundle.'
    ],
    quiz: [
      {
        q: 'Which feature can Babel transpile, and which needs a polyfill?',
        options: [
          'Transpile both',
          'Transpile `a ?? b` (syntax); polyfill `Array.prototype.flat` (a runtime method)',
          'Transpile `Array.prototype.flat`; polyfill `a ?? b`',
          'Neither — both require a newer browser'
        ],
        answer: 1,
        explanation: 'Nullish coalescing is a form the parser must understand — rewritable into a ternary. flat is a method: the call syntax is identical in every era, so the only fix is installing the method at runtime when it is missing.'
      },
      {
        q: 'Why does Babel’s compiled optional chaining store `user.address` in a temporary variable?',
        options: [
          'To make the output smaller',
          'To avoid evaluating the property twice — a getter with side effects must run exactly once, as in the source',
          'Because var cannot hold member expressions',
          'It is a legacy artifact with no purpose'
        ],
        answer: 1,
        explanation: 'The naïve rewrite tests and then accesses user.address — two evaluations where the source had one. The temp preserves evaluation counts: the difference between “looks equivalent” and “is equivalent.”'
      },
      {
        q: 'What does `void 0` mean in Babel output?',
        options: [
          'The number zero',
          'undefined — an expression that evaluates to undefined and cannot be shadowed',
          'An error code',
          'A placeholder for a to-be-computed value'
        ],
        answer: 1,
        explanation: 'void always yields undefined; void 0 is the canonical spelling that pre-ES5 code needed when the undefined global was writable — compiled output still uses it as a safe, short undefined.'
      },
      {
        q: 'What does `useBuiltIns: "usage"` do in a preset-env config?',
        options: [
          'Rewrites method calls into loops',
          'Scans the code for used standard-library features and injects core-js polyfill imports only for those the targets lack',
          'Disables all transforms',
          'Installs every polyfill unconditionally'
        ],
        answer: 1,
        explanation: 'It automates the polyfill classification: used features, missing on the declared targets, get imported from core-js — nothing unused, nothing redundant, per build.'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.5
  {
    sectionId: 'js-ch17-s5',
    readingTime: 9,
    intro: '**JSX** is the most successful JavaScript extension ever shipped: HTML-looking tags that are actually **expressions** — compiled away before the browser ever sees them. A JSX element looks like markup and behaves like a function call that returns a plain object describing UI; React is one consumer of that idea, and the compile step (Babel, Section 17.4) is what dissolves the syntax into ordinary JavaScript. This section hand-compiles JSX until the illusion is fully dispelled: you will see exactly what the tags become.',
    objectives: [
      'Explain what JSX is — a compiled extension, not part of ECMAScript — and why it cannot run unparsed',
      'Hand-compile JSX to React.createElement calls and to the automatic JSX runtime',
      'Apply the rules: single root, JavaScript only inside {}, className for class, capitalized components, closed tags',
      'Treat elements as data: building them in expressions, loops and arrays'
    ],
    concepts: [
      {
        term: 'JSX: markup that is an expression',
        kind: 'definition',
        statement: '**JSX** extends the expression grammar with tags: `<div className="x">hi</div>` is a single **expression** whose value is an object describing the element — the tag, its props and its children. It is not standard ECMAScript: without a compile step (Babel or TypeScript) that rewrites the tags into function calls, a Node process handed this file is a **SyntaxError** at line one.',
        detail: 'The illusion is the point: UI code is nested and visual, and tags let the source read like the tree it builds. But every construct in JSX maps to something you already know — function calls, objects, arrays — which is what makes hand-compiling it (the worked example) both possible and enlightening.'
      },
      {
        term: 'What JSX compiles to',
        kind: 'method',
        statement: 'The classic transform maps each tag to `React.createElement(type, props, ...children)`: `<li key={id}>{label}</li>` becomes `React.createElement("li", { key: id }, label)`. The modern **automatic runtime** instead injects `import { jsx } from "react/jsx-runtime"` and emits `jsx("li", { key: id, children: label })` — no React import required in your file.',
        detail: '\n```js\n// source\nconst el = <div className="x">hi</div>;\n\n// classic transform\nconst el = React.createElement("div", { className: "x" }, "hi");\n//\n// automatic runtime\nconst el = _jsx("div", { className: "x", children: "hi" });\n```\n`createElement(type, props, ...children)` — three things to hand-compile: the tag (string or component), the props object, and the children as extra arguments.'
      },
      {
        term: 'The rules of JSX',
        kind: 'method',
        statement: 'Four compile-blocking or bug-causing rules: (1) **one root element** — wrap siblings in a fragment `<>...</>`; (2) **JavaScript goes in braces** `{expr}` — attributes and children both — because bare text is literal text; (3) **close every tag** (`<img />`, `<div></div>`) — no HTML-style tag omission; (4) the attribute for CSS classes is **className**, because `class` is a reserved word in the expression position.',
        detail: 'Plus the naming law: a lowercase tag means an HTML/host element (the string `"div"` goes to the renderer); a **capitalized** tag means a component — an identifier the compiled call references: `<ItemList/>` compiles to `createElement(ItemList, ...)`, so the variable must be in scope. Rename it to `itemList` and it compiles to a call with the string `"itemList"` — the classic silent break.'
      },
      {
        term: 'Braces hold expressions, not statements',
        kind: 'insight',
        statement: 'Everything inside `{}` is one **expression** — a value: `{items.map(...)}`, `{count > 0 ? "yes" : "no"}`, `{style}`. There are no `if` statements and no `for` loops inside JSX braces: the tools are the conditional operators and the array methods of Chapters 4 and 7 — `map` to make child lists, ternaries and `&&` to choose between pieces.',
        detail: '\n```js\n// not JSX: {if (x) <A/> else <B/>}          — statement, illegal\n// JSX:    {x ? <A /> : <B />}              — expression, legal\n// not JSX: {for (const i of n) <Dot/>}      — statement\n// JSX:    {Array.from({ length: n }, (_, i) => <Dot key={i} />)}\n```\nThe rule follows from the compilation: the braces become a function-call argument, and arguments are values.'
      },
      {
        term: 'Elements are data',
        kind: 'insight',
        statement: 'A JSX element evaluates to a **plain, immutable object** — a description (`{type: "li", props: {...}}`), not a DOM node. You can store elements in variables and arrays, pass them as props, build them inside loops and functions (Chapter 8’s functions-as-values), and create thousands without touching the document — rendering is a separate act performed by the framework.',
        detail: 'This is the mental unlock of declarative UI: the markup describes **what** should exist; the reconciler diffs that description against the screen and performs the **how**. `key` — the next example’s map prop — is a hint to that diffing algorithm, not a prop your component receives: it identifies which array item is which across reorderings.'
      }
    ],
    examples: [
      {
        title: 'Hand-compiling a list component',
        problem: 'Compile this component by hand into `React.createElement` calls — then verify every piece: the props object, the children as arguments, and where the map’s `key` goes.\n```jsx\nfunction ItemList({ items }) {\n  return (\n    <div className="item-list">\n      <h2>Items</h2>\n      <ul>\n        {items.map((item) => (\n          <li key={item.id}>{item.label}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n```',
        steps: [
          { label: 'Step 1: The outer tag is a call with a props object', text: '```js\nfunction ItemList({ items }) {\n  return React.createElement(\n    "div",\n    { className: "item-list" },\n    // ...children as further arguments\n  );\n}\n```\nThe tag name becomes the **first argument** — the string `"div"` (lowercase: host element). The attributes become the **second argument** — an object literal, where `className` is the key because `class` is reserved in this expression position.' },
          { label: 'Step 2: Children are extra arguments, nested calls', text: '```js\n    { className: "item-list" },\n    React.createElement("h2", null, "Items"),\n    React.createElement("ul", null, /* the mapped lis */)\n```\nThe two child elements (`<h2>` and `<ul>`) become **third and fourth arguments** — and they are themselves `createElement` calls. Nesting tags is nesting calls: the markup tree and the call tree have the same shape. `null` is the empty props of the `<h2>`.' },
          { label: 'Step 3: Braces become the expression, verbatim', text: 'The `{items.map(item => <li key={item.id}>{item.label}</li>)}` compiles to the **same expression** in the children position: ```js\nitems.map((item) =>\n  React.createElement("li", { key: item.id }, item.label)\n)\n```\nNothing happened to the map — JSX compiled its **body** (the `<li>` became a call), and the resulting array of elements is passed as the `<ul>`’s child. An array of elements inside children is flattened into the child list — array-in-children is legal and pervasive.' },
          { label: 'Step 4: Where key went — and why it is not a prop', text: 'In the compiled `<li>` call, `key` sits in the props-object position `{ key: item.id }` — but React **extracts it before props reach your component**: it is metadata for the reconciler. When items reorder, keys tell the diff which `<li>` is which (move this one, do not rebuild all). Keys are for **array items across renders**, not for one-of-a-kind elements — and they come from stable identity (an id), never the array index when the list can reorder.' },
          { label: 'Step 5: The complete compiled function', text: '```js\nfunction ItemList({ items }) {\n  return React.createElement(\n    "div",\n    { className: "item-list" },\n    React.createElement("h2", null, "Items"),\n    React.createElement(\n      "ul",\n      null,\n      items.map((item) =>\n        React.createElement("li", { key: item.id }, item.label)\n      )\n    )\n  );\n}\n```\nNo tags anywhere — plain JavaScript any ES5 parser accepts. The automatic runtime changes only the callee (`jsx("div", {...})` with children inside the props object) and adds the import for you: same tree, different plumbing.' }
        ],
        result: 'Five createElement calls deep, props objects with className and key in their exact positions, the map untouched but its body compiled — proof that JSX is sugar over function calls that produce plain objects.'
      },
      {
        title: 'Spot the rule violations',
        problem: 'Each snippet breaks one JSX rule. Name the rule, predict the failure, and write the fix.\n```jsx\n// (1) two roots\nreturn (\n  <Nav />\n  <Feed />\n);\n\n// (2) bare JavaScript where text was meant — and where a statement was meant\nreturn <p>count: items.length</p>;\nreturn <p>{if (n > 0) { "some" }}</p>;\n\n// (3) HTML habits\n<div class="card"></div>\n<img src="x.png">\n\n// (4) lowercase component\nreturn <itemList items={items} />;\n```',
        steps: [
          { label: 'Step 1: One expression, one root', text: 'The `return (` needs **one** value; two sibling tags are two expressions — a syntax error at the JSX level (and, compiled, two values with nowhere to go). The fix is a fragment — `<> <Nav /> <Feed /> </>` — a wrapper that contributes no DOM node of its own, or an actual containing element when one is wanted.' },
          { label: 'Step 2: Braces or text — never both by accident', text: '`<p>count: items.length</p>` renders the literal text `items.length` — bare characters are characters. The fix: `{items.length}`. And the second snippet’s `{if ...}` is illegal in a **different** way: braces hold one expression; `if` is a statement (Section 5.1) with no value. The expression toolkit: ternary `n > 0 ? "some" : "none"`, or short-circuit `n > 0 && "some"` — the compiled call needs a value, so the syntax demands one.' },
          { label: 'Step 3: XML strictness, and the class collision', text: 'Unclosed `<img src="x.png">` fails to parse — JSX is XML-strict: every tag closes, self-closing allowed (`<img src="x.png" />`). And `class="card"` is not an unknown-attribute warning: in an attribute position, `class` collides with the reserved word — the attribute is **className** (or, for the actual HTML attribute via a framework escape hatch, `htmlFor` for `for`). Habit-breaking, then muscle memory.' },
          { label: 'Step 4: The capitalization law', text: '`<itemList .../>` compiles to `createElement("itemList", ...)` — a **host element** named itemList, which no renderer defines: silent no-render (React warns “The tag itemList is unrecognized in this browser”). Capitalize it — `<ItemList .../>` — and it compiles to `createElement(ItemList, ...)`: a **reference to the variable in scope**, your component. One character is the difference between a string and an identifier — the rule exists so that host tags and user components never need namespaces.' },
          { label: 'Step 5: What all four rules share', text: 'Every rule exists because the tag compiles into an expression with strict shape: one root (one value), braces (one expression), closed tags (a parseable grammar), className/capitals (the rules of the surrounding JavaScript — reserved words and identifiers). JSX never escapes JavaScript — it **is** JavaScript, wearing tags; break a JS rule through JSX and the compiler simply reports it at build time, which is the quiet gift of a compile step (Section 17.4).' }
        ],
        result: 'Fixed: a fragment around the siblings; `{items.length}` and a ternary in the braces; `className` and a self-closed `<img />`; `<ItemList />` capitalized — each violation traced to the expression grammar the tags compile into.'
      }
    ],
    keyTakeaways: [
      'JSX tags are expressions that compile to function calls returning plain objects — not part of ECMAScript; unparsed, the file is a SyntaxError.',
      'Classic transform: `<div className="x">hi</div>` → `React.createElement("div", {className: "x"}, "hi")`; automatic runtime: `jsx("div", {className: "x", children: "hi"})` with the import injected.',
      'Children are extra arguments; nested tags are nested calls; an array of elements (from map) is flattened into children.',
      'Braces hold exactly one expression — map, ternary, && — never statements (if/for are values-less); bare text outside braces is literal.',
      'Rules: single root (fragments `<>…</>`), close every tag, className not class, capitalized tags are in-scope component references (lowercase means a host-element string).',
      'Elements are immutable data — storable, passable, buildable in loops (Chapter 8) — rendering is a separate act; key is reconciler metadata for array identity, not a component prop.'
    ],
    quiz: [
      {
        q: 'What does `<div className="x">hi</div>` compile to under the classic transform?',
        options: [
          'A DOM node created with document.createElement',
          'React.createElement("div", { className: "x" }, "hi") — a function call returning an object',
          'An HTML string',
          'Nothing — the browser interprets JSX directly'
        ],
        answer: 1,
        explanation: 'Tag → first argument, attributes → props object, children → further arguments: a call returning a plain description object, which is why elements are storable data.'
      },
      {
        q: 'Why does `<itemList />` silently render nothing while `<ItemList />` works?',
        options: [
          'JSX is case-insensitive but Node is not',
          'A lowercase tag compiles to the host-element string "itemList"; a capitalized tag compiles to a reference to the in-scope component identifier',
          'Lowercase components are deprecated',
          'It renders — just without styles'
        ],
        answer: 1,
        explanation: 'createElement("itemList", ...) asks the renderer for a host element no browser defines; createElement(ItemList, ...) passes your component function — the capitalization is the dispatch, one character deciding string versus identifier.'
      },
      {
        q: 'Which is legal inside JSX braces, `{ ... }`?',
        options: [
          'An if statement choosing between elements',
          'A for loop generating elements',
          'An expression such as items.map(i => <Row key={i.id} />) or cond ? <A /> : <B />',
          'A variable declaration'
        ],
        answer: 2,
        explanation: 'Braces become an argument of the compiled call, and arguments are values: map/ternary/&& produce values; if and for are statements with none — the expression toolkit of Chapters 4 and 7 in markup.'
      },
      {
        q: 'What is the `key` prop on a mapped list element for?',
        options: [
          'It is passed to your component like any prop',
          'It identifies which array item is which across renders, so the reconciler can move elements instead of rebuilding — and it is stripped before props arrive',
          'It sorts the list',
          'It is the HTML id attribute'
        ],
        answer: 1,
        explanation: 'Keys are diffing metadata: stable identity (an id) lets a reorder become moves rather than rebuilds; React removes key from the props your component receives.'
      },
      {
        q: 'Why must JSX attributes use className instead of class?',
        options: [
          'className is shorter',
          'The attribute position compiles into a JavaScript object literal, where class is a reserved word that cannot be a property key in that expression',
          'HTML forbids class in JSX files',
          'class only works with TypeScript'
        ],
        answer: 1,
        explanation: 'Attributes become the props object — and the surrounding JavaScript’s rules apply to it: class is reserved (Section 2.3), so the property is named className (htmlFor similarly for the for attribute).'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.6
  {
    sectionId: 'js-ch17-s6',
    readingTime: 8,
    intro: 'JavaScript’s types are checked at runtime, at the worst possible moment — in production. **Flow** (Meta) adds a static type checker on top of the language: annotations that describe what values are allowed, checked before the program runs, then stripped away so the shipped code is plain JavaScript. Flow itself ultimately lost the ecosystem war — **TypeScript** won it with the same core ideas — but the ideas (maybe types, refinements, discriminated unions) transfer one-to-one, which makes this section a TypeScript primer by other means.',
    objectives: [
      'Annotate function parameters and return types with Flow syntax',
      'Use maybe types (?T) and refinements to make null an explicit, checked part of the contract',
      'Model alternatives with union types and discriminate them safely',
      'Explain why TypeScript became the ecosystem winner — and why Flow concepts transfer intact'
    ],
    concepts: [
      {
        term: 'Flow: gradual typing for JavaScript',
        kind: 'definition',
        statement: '**Flow** is a static type checker: a tool that reads annotated JavaScript and verifies that every value matches its declared type — before running anything. The `// @flow` pragma at the top of a file opts it in; annotations are erased at build time (a Babel plugin strips them — Section 17.4), so the runtime cost is zero.',
        detail: '“Gradual” means the annotations are opt-in per file and per binding: unannotated code still type-checks through inference (a parameter used only as a number is inferred as one), and you add types where they earn their keep — the contract surfaces: parameters, returns, exported data.'
      },
      {
        term: 'Type annotations',
        kind: 'method',
        statement: 'The syntax is `name: Type` for parameters and variables, and `function f(): Type` for return types: `(width: number, label: string): string`. Object types are structural — `{ id: number, name: string }` means “any object with at least these members of these types”, and `?` makes a field or parameter a **maybe**: `height: ?number` admits `null` (and `undefined`) as well.',
        detail: '\n```js\n// @flow\nfunction tag(width: number, label: string): string {\n  return `${label}:${width}`;\n}\ntag(3, "x");     // fine\ntag("3", "x");   // error: string is not a number\ntag(3);          // error: missing argument — arity is typed too\n```\nThe errors are **before execution** — the entire point: move the `tag("3", ...)` failure from a user’s console to the author’s editor.'
      },
      {
        term: 'Maybe types and null refinements',
        kind: 'insight',
        statement: 'A maybe type `?T` means “T or null or undefined” — the contract **admits** absence, so the checker then **demands** you prove presence before use: using a maybe-typed value without a null check is an error. A check narrows: after `if (x != null)` or `const h = height ?? 1`, the value is known to be T (or the fallback), and the code after it type-checks.',
        detail: '\n```js\n// @flow\nfunction area(width: number, height: ?number): number {\n  const h = height ?? 1;   // refinement: h is now plain number\n  return width * h;        // without the ??, this line is an error\n}\n```\nThis is the billion-dollar bug (Tony Hoare’s “null references … my billion-dollar mistake”) turned into a type-system game: absence is representable, and only explicitly-checked absence is usable. It is exactly the discipline `?.` and `??` (Sections 3.4, 17.4) enforce at runtime, moved to compile time.'
      },
      {
        term: 'Union types and discriminants',
        kind: 'method',
        statement: 'A **union** `A | B` means “either shape”: `type Result = { ok: true, value: string } | { ok: false, error: Error }`. A field with literal types (`ok: true` / `ok: false`) acts as a **discriminant**: testing it narrows the union to that variant, so after `if (result.ok)` only `value` is in scope — accessing `result.error` there is a compile error, not a surprise at 3 a.m.',
        detail: '\n```js\n// @flow\ntype Result =\n  | { ok: true, value: string }\n  | { ok: false, error: Error };\n\nfunction render(r: Result): string {\n  if (r.ok) {\n    return r.value;        // narrowed: only this variant has .value\n  }\n  return r.error.message;   // narrowed the other way\n}\n```\nUnions model every “one of several shapes” domain — API responses, parsed results, state machines — and the discriminant pattern makes illegal combinations unrepresentable.'
      },
      {
        term: 'TypeScript: the ecosystem winner',
        kind: 'insight',
        statement: '**TypeScript** (Microsoft) is the same bet as Flow — gradual structural types over JavaScript, erased at compile time — and it won decisively: a dedicated compiler that **is** the build step, generics and utility types, the DefinitelyTyped corpus of library typings, first-class support in every framework and editor (and in the very toolchain of Sections 17.3–17.5). New projects choose it by default; Flow survives mainly inside Meta’s own codebases.',
        detail: 'Why that matters here: nothing in this section is Flow-specific. Maybe types are TypeScript’s `number | null`; refinements are its **narrowing**; discriminated unions are the same pattern with the same syntax shape; even the annotation placement is near-identical (`(width: number) => string`). Learn the concepts once — optional absence, checked unions, typed contracts — and they transfer intact to the tool the industry standardized on.'
      }
    ],
    examples: [
      {
        title: 'A typed function with a maybe parameter',
        problem: 'Annotate `area(width, height)` where height is optional in a null-explicit way: callers may omit intent with null, but the body must prove it handled absence. Then read the errors the annotations catch.\n```js\n// @flow\n\nfunction area(width: number, height: ?number = null): number {\n  const h = height ?? 1;          // refinement — h: number from here on\n  return width * h;\n}\n\narea(3, 4);      // fine — 12\narea(3, null);   // fine — null is an explicit maybe — 3\narea(3);         // fine — the default supplies null — 3\narea("3", 4);   // error: string is not a number\narea(3, "4");   // error: string is not a ?number\narea(3, 4, 2);  // error: too many arguments\n```',
        steps: [
          { label: 'Step 1: The annotations state the contract', text: '`width: number` — required number, no exceptions. `height: ?number = null` — an **explicit maybe**: the parameter admits number, null or undefined, with a default that makes “not provided” mean the same thing as “provided as null”. The return type `: number` promises the caller a number without reading the body.' },
          { label: 'Step 2: The refinement earns the arithmetic', text: 'Without the `??`, `width * height` is an error: height might be null, and `number * null` is `NaN` waiting to happen (Section 3.4). The `?? 1` does double duty — runtime behavior (null becomes 1) and compile-time refinement (after this line, `h` **is** a number). Every use of a maybe must pass through some such gate: `??`, `if (x != null)`, or `x || default`.' },
          { label: 'Step 3: Read the errors as design review', text: '`area("3", 4)` — a string where a number is declared: caught at the call site, in the editor, before any run (the failure mode in untyped JavaScript is silent NaN propagation). `area(3, 4, 2)` — even **arity** is checked: extra arguments are not silently dropped the way untyped JavaScript drops them. Each error is a would-be bug relocated from production to before-commit.' },
          { label: 'Step 4: What the types do NOT say', text: 'Nothing here validates that 3 is a sensible width, that the caller is not passing a temperature — types constrain **shapes and absence**, not semantics. The maybe discipline is the honest scope: null stops being a runtime landmine and becomes a type-level obligation; meaning itself still needs tests (Section 17.2) and review.' },
          { label: 'Step 5: The erasure payoff', text: 'The Babel plugin strips every annotation, and the emitted function is exactly `function area(width, height) { const h = height ?? 1; return width * h; }` with the default restored — zero runtime cost, zero new behavior: the checks were free, paid entirely at build time. That is the whole economics of gradual typing.' }
        ],
        result: 'Three legal calls (12, 3, 3 — the default making omission explicit) and three compile-time errors — string-as-number, wrong-maybe, and arity — with null handled by contract, not by luck.'
      },
      {
        title: 'A discriminated union for load results',
        problem: 'Model “a load either succeeded with a string or failed with an Error” so that rendering **cannot** read the wrong field — then attack it with an invalid variant and a wrong-field access, and watch both fail to type-check.\n```js\n// @flow\ntype LoadResult =\n  | { ok: true, value: string }\n  | { ok: false, error: Error };\n\nfunction render(r: LoadResult): string {\n  if (r.ok) {\n    return r.value;              // r is narrowed to the first variant\n  }\n  return `failed: ${r.error.message}`;   // narrowed to the second\n}\n\nrender({ ok: true, value: "hi" });        // fine\nrender({ ok: true, value: 42 });          // error: value must be string\nrender({ ok: true, error: new Error() }); // error: value is missing,\n                                          //        and error is extra\nrender({ value: "x" });                   // error: no ok discriminant\n```',
        steps: [
          { label: 'Step 1: Two shapes, one tagged with literals', text: 'Each variant carries the same field name `ok` with a **literal type** — `true` in one, `false` in the other. Literals are types too (`true` is a type with exactly one value), and the shared field makes the union **discriminated**: every value of LoadResult answers “which am I?” unambiguously.' },
          { label: 'Step 2: The discriminant test narrows', text: 'Inside `if (r.ok)`, the checker reasons: ok is true, and only the first variant allows that — so `r` **is** `{ok: true, value: string}` there. In the else path, `r` is the second variant. Access follows proof: this is the same refinement move as the null check — one test, and the type of everything under it sharpens.' },
          { label: 'Step 3: Attack it — the illegal shapes do not compile', text: '`{ok: true, value: 42}`: wrong member type — value must be a string. `{ok: true, error: ...}`: the true-variant has no `error`, and `value` is missing — a malformed hybrid that untyped code would happily construct and then crash on later. `{value: "x"}` with no `ok` at all: not a member of the union, rejected — **absence of the discriminant is itself a type error**, which is the “make illegal states unrepresentable” promise.' },
          { label: 'Step 4: The runtime shape is unchanged', text: 'These are ordinary object literals at runtime — Flow adds no wrapper, no class, no field. The union exists in the checker; the erasure principle from the previous example holds here too: the program you ship is the program you wrote, only proven narrower at every branch.' },
          { label: 'Step 5: The same pattern in TypeScript — deliberately', text: 'Spell the identical thing in TS: `type LoadResult = { ok: true; value: string } | { ok: false; error: Error }` — same literals, same narrowing on `if (r.ok)`, same exhaustive checking in switch statements. That near-verbatim portability is the closing point of this chapter: Flow teaches the ideas; TypeScript pays the bills — and both are one Babel/plugin step (Section 17.4) away from the plain JavaScript this book spent sixteen chapters on.' }
        ],
        result: 'render handles both variants with each field access proven by narrowing; the malformed calls — wrong type, hybrid shape, missing discriminant — are all compile errors; and the whole pattern ports to TypeScript by changing the `type` keyword and nothing else.'
      }
    ],
    keyTakeaways: [
      'Flow is a gradual static type checker: `// @flow` opts a file in, annotations are checked pre-run and stripped at build — zero runtime cost.',
      'Annotations: `(width: number, height: ?number): number` — structural object types, literals as types, and arity checked too.',
      'A maybe `?T` admits null/undefined explicitly — and then demands proof before use: `??`, `!= null` checks, or defaults refine T out of the maybe.',
      'Null stops being a landmine and becomes an obligation — the compile-time version of ?. and ?? (Sections 3.4, 17.4).',
      'Unions model “one of several shapes”; a literal discriminant (ok: true | ok: false) lets a test narrow the union — wrong-field access becomes a compile error.',
      'TypeScript won the ecosystem with the same concepts — maybe = `T | null`, refinements = narrowing, unions identical — so these skills transfer one-to-one; treat this section as a TS primer with different syntax.'
    ],
    quiz: [
      {
        q: 'What does the annotation `height: ?number` mean?',
        options: [
          'height must be a number or the function throws',
          'height may be a number, null or undefined — a maybe type that admits absence explicitly',
          'height is optional at runtime only',
          'height can be any type at all'
        ],
        answer: 1,
        explanation: '?T is the maybe type: T plus null plus undefined — absence becomes part of the typed contract, and the checker then requires a refinement before the value is used as T.'
      },
      {
        q: 'In Flow, why does `width * height` fail to type-check when height is `?number` — until `const h = height ?? 1` is added?',
        options: [
          'Multiplication is not allowed in Flow files',
          'Because a maybe-typed value must pass a null check first — the ?? refines h to plain number, proving absence was handled',
          'Because ?? converts numbers to strings',
          'It does not — Flow only checks strings'
        ],
        answer: 1,
        explanation: 'The maybe could be null, and number * null is NaN at runtime; the refinement (??, if != null, || default) proves the value is a number from that line on — absence handled by contract.'
      },
      {
        q: 'Given `type R = { ok: true, value: string } | { ok: false, error: Error }`, what happens inside `if (r.ok)`?',
        options: [
          'Nothing — Flow does not track conditions',
          'r narrows to the first variant, so r.value is legal and r.error there is a compile error',
          'r becomes untyped',
          'The union collapses to never'
        ],
        answer: 1,
        explanation: 'The literal discriminant lets one test narrow the union to the matching variant: the fields of the other variant are provably absent — the wrong-field access moves from a runtime surprise to a compile error.'
      },
      {
        q: 'Why does the book close by pointing at TypeScript?',
        options: [
          'TypeScript is faster at runtime',
          'TypeScript won the ecosystem — same core ideas (maybes, narrowing, unions) with massive library typings and toolchain adoption — so Flow concepts transfer one-to-one',
          'Flow was never actually implemented',
          'TypeScript removes the need for tests and linting'
        ],
        answer: 1,
        explanation: 'The ideas here are portable: T | null, narrowing and discriminated unions are spelled nearly identically in TS, which became the default choice — learning Flow’s model is learning TypeScript’s model.'
      }
    ]
  }
]
