import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 8: JavaScript for the Web
// Sections 8.1 – 8.5. Master study content.
// ============================================================================

export const webCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'web-ch8-s1',
    readingTime: 10,
    intro: 'JavaScript is the behavior layer of the page: variables remember state, types shape what operations mean, functions package reusable work, and scope decides which code can see which names. This section builds the web-focused core — let and const discipline, primitives versus objects, function forms, block scope and the closures that power every counter, handler and module on real pages.',
    objectives: [
      'Declare state with let and const and explain var and TDZ pitfalls',
      'Distinguish primitive copies from object references',
      'Write function declarations, expressions, arrows and defaults',
      'Use block scope and closures for private web-page state'
    ],
    concepts: [
      {
        term: 'Let, const, var and the temporal dead zone',
        kind: 'definition',
        statement: 'Modern code declares mutable bindings with **`let`** and single-assignment bindings with **`const`**, reserving the legacy **`var`** for reading old codebases only. A `const` binding cannot be reassigned, though the object it points at stays mutable, and accessing a `let` or `const` before its declaration throws a **`ReferenceError`** from the **temporal dead zone**. The `var` keyword instead hoists with function scope and silent `undefined` initialization, which is exactly the class of spooky-action bug block scoping eliminates.',
        detail: 'Default every declaration to `const` and promote to `let` only when reassignment is proven necessary, so mutation is always a deliberate, visible choice.'
      },
      {
        term: 'Primitives versus objects and references',
        kind: 'definition',
        statement: 'JavaScript values split into **primitives** — `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` and `null` — copied **by value**, and **objects** — including arrays and functions — shared **by reference**. Assigning or passing an object copies the pointer, so two variables can mutate one underlying array, while assigning a string duplicates the characters independently. This explains why `===` on objects tests **identity** rather than shape, and why spreading or structured cloning is required for genuine copies.',
        detail: 'Copy objects deliberately with spread for shallow clones or structuredClone for deep ones whenever a function must not mutate its caller’s data.'
      },
      {
        term: 'Functions: forms, defaults and arrows',
        kind: 'method',
        statement: 'Functions arrive as hoisted **declarations** (`function name() {}`), assignable **expressions** (including anonymous and named forms), and concise **arrow functions** (`(a, b) => a + b`) that inherit the surrounding `this`. **Default parameters** like `function greet(name = "friend")` plus **rest parameters** (`...args`) make signatures self-documenting and arity-flexible. Arrows excel as callbacks and array-method arguments, while declarations and method shorthand carry standalone and object behavior where a dynamic `this` matters.',
        detail: 'Use arrows for callbacks and data transforms, declarations for standalone procedures, and method shorthand inside objects to keep `this` semantics obvious.'
      },
      {
        term: 'Scope chains and block scope',
        kind: 'law',
        statement: '**Scope** is the visibility region of a binding: **global scope** spans the page, **function scope** spans one call, and **block scope** spans a single brace pair for `let` and `const`. Inner scopes read outward through the **scope chain**, resolving each name in the nearest enclosing binding, while assignments without declarations leak to the global object in sloppy mode. Modules and strict mode close that leak, turning accidental globals into loud errors at the point of mistake.',
        detail: 'Declare every variable in the narrowest block that uses it so the scope chain stays short and unintended sharing becomes structurally impossible.'
      },
      {
        term: 'Closures as private page state',
        kind: 'insight',
        statement: 'A **closure** is a function bundled with the bindings visible at its creation, so an inner function returned or registered as a handler keeps reading and writing its birth scope — the `count` cell in the counter below — long after that scope’s call finished. This single mechanism implements **private state** — counters, toggles, caches, debounced handlers — without classes or globals: the outer call runs once to seed locals, and the closure carries them forever. Every event listener that remembers prior clicks and every module that hides internals runs on closures.',
        detail: 'Factory functions returning closures are the lightest privacy tool on the web, so reach for them before classes when state plus one behavior is all a widget needs.'
      }
    ],
    examples: [
      {
        title: 'Build a private click counter with a closure',
        problem: 'A like button must count its own clicks without exposing the tally as a global or letting other scripts reset it.',
        steps: [
          { label: 'Step 1: Factory holding private state', text: '```js\nfunction makeCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\nconst nextLike = makeCounter();\n```\nThe outer call seeds `count` once and returns a closure; the variable lives on inside the function while staying unreachable from outside.' },
          { label: 'Step 2: Wire the button', text: '```js\nconst btn = document.querySelector("#like");\nconst tally = document.querySelector("#tally");\nbtn.addEventListener("click", () => {\n  tally.textContent = String(nextLike());\n});\n```\nEach click invokes the same closure, incrementing the hidden tally and rendering it as text with no global ever created.' },
          { label: 'Step 3: Independent instances', text: '```js\nconst nextShare = makeCounter();\nnextShare();\nnextShare();\n```\nA second factory call births a separate `count` cell, proving closures carry per-instance privacy rather than shared static state.' }
        ],
        result: 'Private, per-button state from one factory: no globals, no reset surface, and independent tallies for every widget on the page.'
      },
      {
        title: 'Fix a var-in-a-loop handler bug with block scope',
        problem: 'Three buttons built in a loop all alert the same index because a var declaration shares one binding across iterations.',
        steps: [
          { label: 'Step 1: The broken version', text: '```js\nfor (var i = 0; i < 3; i++) {\n  const btn = document.createElement("button");\n  btn.textContent = "Pick " + i;\n  btn.addEventListener("click", () => alert(i));\n  document.body.append(btn);\n}\n```\nOne function-scoped `i` is shared, so by click time the loop has finished and every handler reads the final value.' },
          { label: 'Step 2: Fix with let per iteration', text: '```js\nfor (let i = 0; i < 3; i++) {\n  const btn = document.createElement("button");\n  btn.textContent = "Pick " + i;\n  btn.addEventListener("click", () => alert(i));\n  document.body.append(btn);\n}\n```\nBlock-scoped `let` in a loop head creates a fresh binding per iteration, so each closure captures its own index value.' },
          { label: 'Step 3: Const for the stable parts', text: '```js\nconst labels = ["Tiny", "Medium", "Large"];\nfor (let i = 0; i < labels.length; i++) {\n  const label = labels[i];\n  alert(label);\n}\n```\nLoop-varying bindings use `let` while per-iteration constants use `const`, making mutation intent explicit at every position.' }
        ],
        result: 'Block scope turns one shared binding into three private ones, fixing the classic loop-closure bug with a single keyword change.'
      }
    ],
    keyTakeaways: [
      'Default to const, use let for true reassignment, and read var only in legacy code.',
      'Primitives copy by value; objects share by reference and compare by identity.',
      'Choose declarations, expressions and arrows by this-behavior and callback role.',
      'Scope narrowly so the chain resolves names in the smallest correct region.',
      'Build private widget state with closure factories before reaching for classes.'
    ],
    quiz: [
      {
        q: 'What happens when code reads a let variable before its declaration line runs?',
        options: [
          'It yields undefined like var',
          'It throws a ReferenceError from the temporal dead zone',
          'It reads the global of the same name',
          'It implicitly declares the variable'
        ],
        answer: 1,
        explanation: 'Block-scoped bindings exist but stay uninitialized until declaration executes, and any earlier read throws rather than yielding undefined.'
      },
      {
        q: 'Why does const arr = [1]; arr.push(2) succeed while arr = [3] fails?',
        options: [
          'Arrays are primitives',
          'const locks the binding, not the contents: mutation is allowed but reassignment is not',
          'push bypasses scope rules',
          'const only applies to numbers'
        ],
        answer: 1,
        explanation: 'The constant is the reference cell itself, so mutating the shared object is legal while pointing the name at a new object is rejected.'
      },
      {
        q: 'Three loop-built handlers share one var index and all fire the final value. Why does let fix it?',
        options: [
          'let runs loops faster',
          'let in a loop head creates a fresh binding per iteration for each closure to capture',
          'let disables hoisting',
          'let converts handlers to arrows'
        ],
        answer: 1,
        explanation: 'Per-iteration bindings give every closure its own cell holding that pass’s value instead of one cell mutated across all passes.'
      },
      {
        q: 'What makes a closure keep state after its outer call returns?',
        options: [
          'The global object caches locals',
          'The inner function retains its birth scope bindings for as long as it is reachable',
          'Strict mode preserves all locals',
          'Return values are automatically memoized'
        ],
        answer: 1,
        explanation: 'Reachability keeps the captured environment alive, so registered or returned inner functions read and write those locals indefinitely.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'web-ch8-s2',
    readingTime: 10,
    intro: 'Modern JavaScript reads like shorthand for intent: array pipelines replace loops, object literals model domain data, and compact syntax removes whole categories of boilerplate. This section covers the essential array and object methods, destructuring and spread, template literals, optional chaining with nullish coalescing, and the module syntax that organizes web code into importable files.',
    objectives: [
      'Transform data with map, filter, reduce, find and friends',
      'Model records with object literals, methods and computed keys',
      'Unpack and merge with destructuring, spread and rest',
      'Guard access with optional chaining and load code with modules'
    ],
    concepts: [
      {
        term: 'Array pipelines: map, filter, reduce and find',
        kind: 'method',
        statement: 'The **array methods** express data intent directly: **`map`** transforms each item, **`filter`** keeps matching ones, **`find`** returns the first match, and **`reduce`** folds everything into one accumulator value. Chaining them — `orders.filter(isPaid).map(toTotal)` — reads as a pipeline where each stage declares what it wants rather than how to loop. These methods return **new arrays** instead of mutating, which keeps source data intact for re-rendering and time-travel debugging.',
        detail: 'Compose small named predicate and mapper functions into pipelines so each stage is testable and the chain reads as plain domain language.'
      },
      {
        term: 'Objects: literals, methods and computed keys',
        kind: 'definition',
        statement: 'An **object literal** like `{ name: "Ada", role: "admin" }` models a record as named properties, with **method shorthand** (`save() {}`) and **computed keys** (`{ [field]: value }`) covering dynamic behavior and names. Property access splits between **dot notation** for known keys and **bracket notation** for computed or spaced keys, while **`Object.keys`**, **`Object.values`** and **`Object.entries`** enumerate contents for iteration. Nested records plus arrays of records describe nearly every API payload a page ever renders.',
        detail: 'Prefer dot access for static keys and brackets only for dynamic ones, so readers instantly see which lookups are fixed and which are computed.'
      },
      {
        term: 'Destructuring, spread and rest',
        kind: 'method',
        statement: '**Destructuring** unpacks structures at binding time — `const { name, role } = user` or `const [first, ...rest] = items` — with **defaults** (`= "guest"`) and **renames** (`{ name: displayName }`) smoothing missing or awkward keys. **Spread** (`...`) expands iterables into calls, arrays and literals for merging, while **rest** gathers leftovers into a fresh collection. Together they replace manual index juggling and `Object.assign` chains with declarative shape-to-shape transforms.',
        detail: 'Destructure function parameters directly in the signature to document expected shape at the boundary where data enters.'
      },
      {
        term: 'Template literals and tagged templates',
        kind: 'notation',
        statement: '**Template literals** with backticks interpolate expressions as `` `Hello, ${name}` `` and span multiple lines without concatenation, making HTML builders and messages readable. **Tagged templates** prefix the literal with a function that receives the strings and values separately, enabling escaping, localization and styled-component CSS DSLs. Untagged interpolation stringifies values automatically, which is convenient for display and dangerous for unsanitized HTML — the bridge to the textContent lesson ahead.',
        detail: 'Interpolate only trusted or escaped values into HTML strings, since template literals stringify faithfully without any safety filtering.'
      },
      {
        term: 'Optional chaining, nullish coalescing and modules',
        kind: 'insight',
        statement: '**Optional chaining** (`?.`) short-circuits property access through possibly missing links — `user?.address?.city` yields `undefined` instead of throwing — while **nullish coalescing** (`??`) defaults only on `null` or `undefined`, unlike `||` which also swallows empty strings and zero. The **module syntax** (`import` and `export` in `type="module"` scripts or bundled files) then organizes helpers, components and API layers into explicit dependency graphs with static analysis. These three features together define defensive modern consumption: safe reads, honest defaults, organized sources.',
        detail: 'Default with ?? when empty strings and zero are legitimate values, reserving || for cases where every falsy value truly means absent.'
      }
    ],
    examples: [
      {
        title: 'Transform an API payload into rendered rows',
        problem: 'A users endpoint returns nested records; render active members as list items showing name, city and role badge.',
        steps: [
          { label: 'Step 1: Shape the data with a pipeline', text: '```js\nconst members = users\n  .filter((u) => u.active)\n  .map((u) => ({\n    name: u.name,\n    city: u.address?.city ?? "Unknown city",\n    role: u.role ?? "member"\n  }));\n```\nFilter keeps actives, map projects each record, and `?.` plus `??` guard missing addresses without a single nested if statement.' },
          { label: 'Step 2: Destructure in the renderer', text: '```js\nfunction row({ name, city, role }) {\n  const li = document.createElement("li");\n  li.textContent = name + " — " + city + " (" + role + ")";\n  return li;\n}\nconst list = document.querySelector("#members");\nmembers.map(row).forEach((li) => list.append(li));\n```\nParameter destructuring documents the expected shape while `textContent` renders safely with no HTML parsing involved.' },
          { label: 'Step 3: Summarize with reduce and find', text: '```js\nconst adminCount = members.reduce((n, m) => n + (m.role === "admin" ? 1 : 0), 0);\nconst firstAda = members.find((m) => m.name === "Ada");\n```\nReduce folds the roster into one tally and find locates a single record, completing the read toolkit alongside the pipeline.' }
        ],
        result: 'Nested payloads become safe rendered rows through filter-map pipelines, destructured renderers and guarded access — no manual loops, no crashes on gaps.'
      },
      {
        title: 'Merge configs with spread and share via modules',
        problem: 'Combine default settings with user overrides without mutating either source, then expose the result from a settings module.',
        steps: [
          { label: 'Step 1: Non-mutating merge', text: '```js\nconst defaults = { theme: "light", pageSize: 20, filters: ["new"] };\nconst overrides = { theme: "dark" };\nconst settings = { ...defaults, ...overrides, filters: [...defaults.filters, "sale"] };\n```\nLater spreads win per key while the nested array merges explicitly, leaving both inputs untouched for reuse.' },
          { label: 'Step 2: Export from a settings module', text: '```js\n// settings.js\nexport const settings = { theme: "dark", pageSize: 20 };\nexport function pageSize() { return settings.pageSize; }\nexport default settings;\n```\nNamed exports share pieces while the default carries the whole record, giving importers precise or wholesale access.' },
          { label: 'Step 3: Import where needed', text: '```js\n// app.js\nimport settings, { pageSize } from "./settings.js";\nconsole.log("page size:", pageSize());\n```\nStatic imports declare the dependency graph in code, enabling bundlers to tree-shake unused exports automatically.' }
        ],
        result: 'Immutable merges plus explicit module boundaries keep configuration predictable, shareable and safe from accidental mutation.'
      }
    ],
    keyTakeaways: [
      'Pipeline data with map, filter, find and reduce instead of manual loops.',
      'Model records as literals with method shorthand and computed keys.',
      'Destructure at boundaries and merge immutably with spread.',
      'Interpolate with template literals but escape untrusted HTML.',
      'Guard with ?. and ??, and organize with import and export.'
    ],
    quiz: [
      {
        q: 'What does users.filter((u) => u.active).map((u) => u.name) produce?',
        options: [
          'It mutates users in place',
          'A new array of names for active users, leaving users untouched',
          'The first active user object',
          'A count of active users'
        ],
        answer: 1,
        explanation: 'Filter keeps matches and map projects them, with both methods returning fresh arrays rather than mutating the source.'
      },
      {
        q: 'In const { name: displayName = "guest" } = user, what do the parts mean?',
        options: [
          'Rename name to displayName, defaulting to guest when missing',
          'Assign guest to user.name unconditionally',
          'Delete the name property',
          'Compare name against guest'
        ],
        answer: 0,
        explanation: 'The colon renames the extracted binding while the equals supplies a default applied when the source value is undefined.'
      },
      {
        q: 'Why prefer settings = { ...defaults, ...overrides } over mutating defaults?',
        options: [
          'It runs faster in all engines',
          'It produces a fresh object so both inputs stay reusable and renders stay predictable',
          'Spread works only on arrays',
          'Mutation is a syntax error'
        ],
        answer: 1,
        explanation: 'Immutable merges prevent shared-reference surprises where one consumer’s tweak silently rewrites another’s configuration.'
      },
      {
        q: 'When should ?? be used instead of || for defaults?',
        options: [
          'When every falsy value should trigger the default',
          'When empty strings and zero are legitimate values that must survive, defaulting only on null or undefined',
          'When the value is always a boolean',
          'They are interchangeable in all cases'
        ],
        answer: 1,
        explanation: 'Nullish coalescing treats only nullish absence as missing, while logical-or also replaces meaningful falsy content like zero-length input.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'web-ch8-s3',
    readingTime: 10,
    intro: 'The DOM is the live tree behind every page, and JavaScript rewrites it constantly: finding nodes, walking relationships, swapping text, toggling classes and building new branches. This section covers precise selection, safe traversal, the textContent-versus-innerHTML security boundary, class and style manipulation, and constructing nodes without breaking listeners or performance.',
    objectives: [
      'Select elements precisely with querySelector and querySelectorAll',
      'Traverse parents, children and siblings including closest()',
      'Render text safely with textContent and sanitize innerHTML use',
      'Toggle state with classList, attributes and built nodes'
    ],
    concepts: [
      {
        term: 'Selecting with querySelector and friends',
        kind: 'method',
        statement: 'The **`querySelector()`** method returns the first element matching any **CSS selector**, while **`querySelectorAll()`** returns a static list of every match, so `#menu a.active` or `input[name="email"]` select with the full selector language. The older **`getElementById()`**, **`getElementsByClassName()`** and **`getElementsByTagName()`** still appear in legacy code, with live collections that update as the DOM changes. Modern practice defaults to the query pair for expressiveness, reaching inside a subtree via `card.querySelector()` to scope searches locally.',
        detail: 'Scope queries to the nearest known ancestor instead of the whole document so components find their own nodes without colliding with identical markup elsewhere.'
      },
      {
        term: 'Traversing with parent, children and closest',
        kind: 'method',
        statement: '**Traversal properties** walk the tree: **`parentElement`**, **`children`**, **`firstElementChild`**, **`nextElementSibling`** and their kin move one step, skipping text nodes that the older `childNodes` family includes. The **`closest()`** method climbs from an element through its ancestors until a selector matches, answering which card, row or dialog contains this click. Downward searches use scoped `querySelector` while upward questions use `closest`, covering both traversal directions with two habits.',
        detail: 'Prefer element-only traversal properties and closest() over manual parent chains so whitespace text nodes never shift an index or break a climb.'
      },
      {
        term: 'TextContent versus innerHTML and XSS',
        kind: 'law',
        statement: 'The **`textContent`** property sets raw text that never parses as markup, making it the **safe default** for user data, while **`innerHTML`** parses its string into live elements — and any embedded scripts, event attributes or malicious tags execute or render. This boundary is the **cross-site scripting (XSS)** frontier: interpolating untrusted strings into `innerHTML` hands attackers markup injection, whereas `textContent` neutralizes payloads into visible characters. Reserve `innerHTML` for trusted static templates, and sanitize anything else through text nodes or a vetted sanitizer.',
        detail: 'Treat every innerHTML assignment as a security decision: trusted constant template or sanitized input, never raw user or API strings.'
      },
      {
        term: 'Classes, attributes, dataset and styles',
        kind: 'method',
        statement: 'Visual state belongs in classes toggled through **`classList`** — `add`, `remove`, `toggle` with an optional force flag, and `contains` for reads — keeping presentation in CSS while script flips semantic state. The **`dataset`** surface maps `data-*` attributes to camelCase properties for per-element payloads, and **`setAttribute`** handles ARIA and form states that classes cannot carry. Inline **`style`** manipulation suits dynamic values like positions and progress widths, but static styling stays in classes so the cascade keeps working.',
        detail: 'Toggle state classes and ARIA attributes together so visual treatment and programmatic state never drift out of sync.'
      },
      {
        term: 'Building nodes without breaking the page',
        kind: 'insight',
        statement: 'New content is built with **`createElement()`**, configured through properties and classes, and attached with **`append()`**, **`prepend()`** or **`before()`**, preserving existing listeners that wholesale `innerHTML` replacement would destroy. **Template elements** (`<template>`) stamp repeated structures by cloning inert markup, and **`DocumentFragment`** batches many insertions into one reflow. This construction path keeps handlers alive, avoids serialization round-trips, and performs linearly where repeated `innerHTML +=` degrades quadratically.',
        detail: 'Batch list builds through fragments or single templates rather than repeated innerHTML concatenation, preserving listeners and layout performance together.'
      }
    ],
    examples: [
      {
        title: 'Render user comments without an XSS hole',
        problem: 'A comment feed receives author names and bodies from an API; render them safely while still allowing a trusted admin badge icon.',
        steps: [
          { label: 'Step 1: Unsafe pattern to avoid', text: '```js\n// DANGEROUS: never do this with untrusted data\nlist.innerHTML += "<li><b>" + comment.author + "</b>: " + comment.body + "</li>";\n```\nString concatenation into `innerHTML` parses attacker markup, so a body containing an image with an error handler would execute script.' },
          { label: 'Step 2: Safe node construction', text: '```js\nfunction commentNode({ author, body, official }) {\n  const li = document.createElement("li");\n  const who = document.createElement("b");\n  who.textContent = author;\n  li.append(who, ": " + body);\n  if (official) { li.classList.add("official"); }\n  return li;\n}\n```\nEvery untrusted string lands in `textContent` or string append context that serializes as text, while trust (official flag) travels as a boolean, not markup.' },
          { label: 'Step 3: Trusted badge via CSS, batch via fragment', text: '```css\n.official::after { content: " ✓"; color: #16a34a; font-weight: 700; }\n```\n```js\nconst frag = document.createDocumentFragment();\ncomments.map(commentNode).forEach((li) => frag.append(li));\nlist.append(frag);\n```\nThe badge draws from CSS generated content — no markup needed — and the fragment inserts the whole feed in one reflow.' }
        ],
        result: 'Untrusted data renders as inert text, trust travels as data rather than HTML, and the feed inserts efficiently with handlers elsewhere untouched.'
      },
      {
        title: 'Build tabs with traversal and class state',
        problem: 'A tab strip must switch panels on click, track the active tab in classes plus ARIA, and resolve panels through DOM relationships.',
        steps: [
          { label: 'Step 1: Markup with relationships', text: '```html\n<div class="tabs">\n  <div role="tablist">\n    <button role="tab" aria-selected="true" data-panel="p1">Overview</button>\n    <button role="tab" aria-selected="false" data-panel="p2">Specs</button>\n  </div>\n  <section id="p1" role="tabpanel">Overview copy…</section>\n  <section id="p2" role="tabpanel" hidden>Specs copy…</section>\n</div>\n```\nButtons carry tab semantics while `data-panel` attributes link each tab to its panel id without fragile index coupling.' },
          { label: 'Step 2: Delegated switch via closest', text: '```js\nconst tabs = document.querySelector(".tabs");\ntabs.addEventListener("click", (event) => {\n  const tab = event.target.closest(\'[role="tab"]\');\n  if (!tab) { return; }\n  tabs.querySelectorAll(\'[role="tab"]\').forEach((t) => {\n    t.setAttribute("aria-selected", String(t === tab));\n    t.classList.toggle("active", t === tab);\n  });\n  tabs.querySelectorAll(\'[role="tabpanel"]\').forEach((p) => {\n    p.hidden = p.id !== tab.dataset.panel;\n  });\n});\n```\nOne listener resolves the clicked tab with `closest()`, then syncs classes, ARIA selection and panel visibility in a single pass.' },
          { label: 'Step 3: Active styling in CSS', text: '```css\n.tabs [role="tab"].active { border-bottom: 3px solid #4f46e5; font-weight: 700; }\n```\nPresentation stays in the stylesheet keyed off the same class script toggles, keeping state singular and styling declarative.' }
        ],
        result: 'Tabs switch through traversal plus class state: resilient to nested icon clicks, announced correctly, and styled without inline CSS.'
      }
    ],
    keyTakeaways: [
      'Select with querySelector scoped to the nearest known ancestor.',
      'Climb with closest() and walk element-only traversal properties.',
      'Render untrusted strings with textContent; reserve innerHTML for trusted templates.',
      'Carry visual state in classList and semantic state in attributes together.',
      'Build with createElement, templates and fragments to preserve handlers.'
    ],
    quiz: [
      {
        q: 'Why is scoped card.querySelector preferred over document.querySelector in components?',
        options: [
          'It runs without CSS support',
          'It finds the component’s own nodes without colliding with identical markup elsewhere',
          'It returns live collections',
          'It works without JavaScript modules'
        ],
        answer: 1,
        explanation: 'Subtree-scoped search confines selection to one instance, so repeated components each manipulate their own internals safely.'
      },
      {
        q: 'What is the XSS danger of list.innerHTML += userBody?',
        options: [
          'It renders slowly',
          'Embedded markup and handlers in the string parse and execute as live page code',
          'It removes existing listeners safely',
          'It escapes all characters'
        ],
        answer: 1,
        explanation: 'innerHTML parses its input as HTML, so attacker tags and event attributes become executable page content instead of visible text.'
      },
      {
        q: 'What does event.target.closest(".card") answer?',
        options: [
          'The first card in the document',
          'The nearest ancestor (or self) of the click that matches .card',
          'All cards on the page',
          'The card’s first child'
        ],
        answer: 1,
        explanation: 'Closest climbs from the event target upward, returning the containing component that owns the interaction.'
      },
      {
        q: 'Why build list items with createElement plus a fragment instead of repeated innerHTML +=?',
        options: [
          'Fragments need no JavaScript',
          'It preserves existing listeners and inserts in one reflow instead of rescanning and rebinding each time',
          'innerHTML cannot create list items',
          'Fragments disable the cascade'
        ],
        answer: 1,
        explanation: 'Node construction keeps handlers alive and batches layout, while repeated innerHTML concatenation destroys listeners and degrades performance.'
      },
      // Placement-pattern: safe DOM insertion of user text (original)
      {
        q: "User-supplied nicknames must appear in a list. Which insertion is safe, and what is wrong with the other?\n```js\n// P: li.innerHTML = nickname;\n// Q: li.textContent = nickname;\n```",
        options: ["P: markup inside names should render as markup", "Both are equally safe for arbitrary input", "Q: it writes plain text so embedded markup cannot execute, while P parses the string as HTML and can run injected scripts", "P for short names and Q for long names"],
        answer: 2,
        explanation: "Step 1: The data given is untrusted text flowing into the DOM through two different sinks. Step 2: The governing rules are sink semantics: `innerHTML` parses its string as HTML, executing embedded event handlers and scripts, while `textContent` creates a inert text node that never parses. Step 3: Tracing a hostile nickname such as an image tag with an error handler, P builds live elements that fire, while Q displays the characters literally with no element construction. Step 4: The distractors fail because rendering user markup is exactly the vulnerability, safety never depends on string length, and the two sinks behave nothing alike. Step 5: Therefore the text sink is the safe insertion."
      }
    ]
  },
  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'web-ch8-s4',
    readingTime: 10,
    intro: 'Pages come alive through events: clicks, keys, submits and scrolls flowing from the browser into handler functions. This section covers listener registration with modern options, the event object and its preventDefault power, the capture-and-bubble propagation model, delegation with closest() for dynamic lists, and the form events behind validated, user-friendly inputs.',
    objectives: [
      'Register listeners with addEventListener and once, passive and signal options',
      'Read event objects and control defaults with preventDefault()',
      'Explain capture, target and bubble phases of propagation',
      'Delegate dynamic lists with closest() and validate with form events'
    ],
    concepts: [
      {
        term: 'Listeners and modern registration options',
        kind: 'method',
        statement: 'Handlers attach with **`addEventListener(type, handler, options)`**, supporting multiple listeners per event where the old `onclick` property allowed only one. The options object refines behavior: **`once`** auto-removes after a single fire, **`passive: true`** promises no `preventDefault` so touch and wheel scrolling stay fluid, and **`signal`** from an `AbortController` removes whole groups at once. Cleanup pairs `removeEventListener` with the same function reference, or aborts the controller that owns the group.',
        detail: 'Mark touch and wheel listeners passive unless they must cancel scrolling, and group component listeners under one AbortController for single-call teardown.'
      },
      {
        term: 'The event object and preventDefault',
        kind: 'definition',
        statement: 'Every handler receives an **event object** carrying **`type`**, **`target`** (the origin element), **`currentTarget`** (the attached element), plus type-specific data like pressed keys or pointer coordinates. Calling **`preventDefault()`** cancels the browser’s native action — form submission, link navigation, context menu — so script can validate, confirm or reroute first. Reading modifier flags such as shift or ctrl on the object enables shortcuts and multi-select gestures from the same handler.',
        detail: 'Distinguish target from currentTarget in every delegated handler, since the origin and the attached listener are different elements by design.'
      },
      {
        term: 'Propagation: capture, target and bubble',
        kind: 'law',
        statement: 'Events travel in three **phases**: **capture** descends from window to the target, **target** fires at the origin, then **bubbling** ascends back through every ancestor. Most handlers listen during bubbling, which is why one ancestor listener observes all descendant clicks; passing capture `true` or `{ capture: true }` instead intercepts on the way down. **`stopPropagation()`** halts further travel while `stopImmediatePropagation()` additionally silences sibling listeners on the same element.',
        detail: 'Let events bubble by default and stop them only with reason, since blanket stopping breaks analytics, delegation and overlay dismissal upstream.'
      },
      {
        term: 'Delegation with closest() and matches()',
        kind: 'method',
        statement: '**Event delegation** attaches one listener to a stable ancestor and routes each bubbled event by testing the origin with **`closest()`** or **`matches()`**, as in `event.target.closest("li")` for dynamic lists. Because the ancestor persists while children come and go, delegation handles elements added after binding with zero per-item listeners and constant memory. Guards — early return when no match, ignoring clicks on controls inside the item — keep routing precise as markup evolves.',
        detail: 'Delegate every dynamic collection from its container so inserts, removes and re-renders never require listener bookkeeping.'
      },
      {
        term: 'Form events: submit, input, change and validation',
        kind: 'insight',
        statement: 'Forms speak through **`submit`** on the form (validate then `preventDefault` or allow), **`input`** on every keystroke for live feedback, and **`change`** on committed selections like selects, checkboxes and file pickers. Live validation pairs `input` events with **`checkValidity()`** and `setCustomValidity()` for custom rules, revealing messages early while the submit handler enforces the final gate. Handling `submit` rather than button clicks also captures keyboard Enter submissions that button-only wiring silently misses.',
        detail: 'Validate live on input for guidance and conclusively on submit for enforcement, covering both typing users and Enter-key submitters.'
      }
    ],
    examples: [
      {
        title: 'Run a dynamic todo list on one listener',
        problem: 'A todo list with add, complete and delete actions grows dynamically; handle every button with a single delegated listener.',
        steps: [
          { label: 'Step 1: Stable container markup', text: '```html\n<form id="addForm"><input name="task" required><button>Add</button></form>\n<ul id="todos"></ul>\n```\nThe form and list persist for the page lifetime while items churn inside, making the list the ideal delegation root.' },
          { label: 'Step 2: One delegated click router', text: '```js\nconst todos = document.querySelector("#todos");\ntodos.addEventListener("click", (event) => {\n  const item = event.target.closest("li");\n  if (!item) { return; }\n  if (event.target.closest("[data-del]")) { item.remove(); return; }\n  if (event.target.closest("[data-done]")) { item.classList.toggle("done"); }\n});\n```\nThe handler climbs to the owning item once, then routes by which action button matched — working for items added long after binding.' },
          { label: 'Step 3: Add items safely with submit', text: '```js\nconst form = document.querySelector("#addForm");\nform.addEventListener("submit", (event) => {\n  event.preventDefault();\n  const text = form.elements.task.value.trim();\n  if (!text) { return; }\n  const li = document.createElement("li");\n  li.textContent = text;\n  const done = document.createElement("button");\n  done.textContent = "Done";\n  done.setAttribute("data-done", "");\n  const del = document.createElement("button");\n  del.textContent = "Delete";\n  del.setAttribute("data-del", "");\n  li.append(" ", done, " ", del);\n  todos.append(li);\n  form.reset();\n});\n```\nSubmit handling captures both button clicks and Enter keys, `preventDefault` stops navigation, and `textContent` keeps task text inert.' }
        ],
        result: 'One listener serves an unbounded dynamic list: no per-item wiring, no rebinding on render, with add, toggle and delete all routed correctly.'
      },
      {
        title: 'Validate a signup form live and on submit',
        problem: 'An email plus password form must coach users during typing yet enforce rules conclusively at submission, including a custom password match.',
        steps: [
          { label: 'Step 1: Live input feedback', text: '```js\nconst email = document.querySelector("#email");\nemail.addEventListener("input", () => {\n  const ok = email.checkValidity();\n  email.classList.toggle("bad", !ok);\n  email.setAttribute("aria-invalid", String(!ok));\n});\n```\nEvery keystroke rechecks the built-in email rule, syncing visual and ARIA state so guidance arrives while typing, not after.' },
          { label: 'Step 2: Custom rule with setCustomValidity', text: '```js\nconst pw = document.querySelector("#pw");\nconst pw2 = document.querySelector("#pw2");\nfunction checkMatch() {\n  const mismatch = pw.value !== pw2.value;\n  pw2.setCustomValidity(mismatch ? "Passwords must match." : "");\n}\npw.addEventListener("input", checkMatch);\npw2.addEventListener("input", checkMatch);\n```\nCustom validity plugs the confirmation rule into the native validation engine so it participates in submit gating automatically.' },
          { label: 'Step 3: Submit gate with once hint', text: '```js\nconst form = document.querySelector("#signup");\nform.addEventListener("submit", (event) => {\n  if (!form.checkValidity()) {\n    event.preventDefault();\n    form.reportValidity();\n  }\n});\n```\nThe submit handler enforces the final checkpoint and surfaces native messages, catching Enter-key submits that button wiring would miss.' }
        ],
        result: 'Live coaching plus a hard submit gate: users learn during typing while invalid data can never leave the page.'
      }
    ],
    keyTakeaways: [
      'Attach with addEventListener; use once, passive and signal options deliberately.',
      'Read target versus currentTarget and cancel natives with preventDefault.',
      'Let events bubble to delegated ancestors; stop propagation sparingly.',
      'Delegate dynamic collections with closest() routing from stable roots.',
      'Coach on input, enforce on submit, and cover Enter-key submissions.'
    ],
    quiz: [
      {
        q: 'Why use { passive: true } on a touchmove listener that never calls preventDefault?',
        options: [
          'It makes the handler run once',
          'It lets the browser scroll without waiting on the handler, keeping touch fluid',
          'It enables event delegation',
          'It captures the event instead of bubbling'
        ],
        answer: 1,
        explanation: 'The passive promise removes the scroll-blocking handshake, so the compositor proceeds while script observes in parallel.'
      },
      {
        q: 'In a delegated list handler, what is the difference between target and currentTarget?',
        options: [
          'They are always identical',
          'target is the clicked origin element; currentTarget is the ancestor carrying the listener',
          'currentTarget is the clicked element',
          'target only exists on forms'
        ],
        answer: 1,
        explanation: 'Delegation depends on the split: the origin identifies which item acted while the attached ancestor provides the single stable listener.'
      },
      {
        q: 'Newly added todo items ignore clicks until rebinding. What architectural fix removes rebinding?',
        options: [
          'Higher z-index on new items',
          'Delegate from the stable list container with closest() routing',
          'Inline onclick attributes on each item',
          'Polling with timers'
        ],
        answer: 1,
        explanation: 'Ancestor delegation observes bubbled events from present and future children alike, so inserts never need listener bookkeeping.'
      },
      {
        q: 'Why handle form submit instead of just the submit button click?',
        options: [
          'Buttons cannot be styled',
          'Submit fires for keyboard Enter submissions that button clicks miss',
          'Submit runs faster',
          'Click handlers are deprecated'
        ],
        answer: 1,
        explanation: 'Enter-key submission triggers the form event without a button click, so submit wiring is the only complete gate.'
      },
      // Placement-pattern: event delegation for long lists (original)
      {
        q: "A `<ul>` holds 500 `<li>` rows, each needing a click that reports its own id, and rows keep being added. Which wiring is best?",
        options: ["Attach 500 separate listeners, one per row, for clarity", "Attach one listener on the `<ul>` reading `event.target.closest('li')`, so current and future rows work with no extra wiring", "Write an inline `onclick` attribute on every row", "Poll the list every second looking for clicks"],
        answer: 1,
        explanation: "Step 1: The data given is a long, growing list where each row needs identical click handling. Step 2: The governing rules are bubbling and target identity: clicks rise from the row to the list, `target` names the origin while `currentTarget` names the attached list, and one ancestor listener can serve the whole subtree. Step 3: Tracing a click on a newly added row, the event bubbles to the single list listener, `closest('li')` recovers the row, and its id is reported with no per-row setup. Step 4: The distractors fail because hundreds of listeners waste memory and miss future rows, inline handlers mix layers and duplicate code, and polling never observes events at all. Step 5: Therefore the single delegated listener is the best wiring."
      }
    ]
  },
  // ---------------------------------------------------------------- 8.5
  {
    sectionId: 'web-ch8-s5',
    readingTime: 9,
    intro: 'Every developer spends half their craft debugging, and the browser ships a world-class laboratory for it. This section builds systematic debugging: throwing and catching with the right error types, reading stacks, wielding console methods beyond log, stepping through breakpoints, interrogating the network tab, and following a reproduce-isolate-fix loop that converges instead of flailing.',
    objectives: [
      'Handle failures with try/catch/finally and purposeful throws',
      'Read error types, messages and stack traces to their cause',
      'Debug with console methods, breakpoints and scope inspection',
      'Diagnose requests with the network tab and a systematic loop'
    ],
    concepts: [
      {
        term: 'Try, catch, finally and purposeful throws',
        kind: 'method',
        statement: 'The **`try/catch/finally`** structure attempts risky work, handles failure, and always runs cleanup: `try` holds the fallible operation, **`catch`** receives the error object for recovery or reporting, and **`finally`** releases resources whether success or failure resulted. Code signals its own contract violations with **`throw new Error()`** (or a `TypeError` for wrong types), turning silent `undefined` propagation into loud, located failures. Catch blocks should recover, retry or rethrow with context — never swallow errors into empty silence.',
        detail: 'Throw early at validation boundaries and catch at recovery boundaries, so failures surface loudly where caused and resolve deliberately where handled.'
      },
      {
        term: 'Error types, messages and stack traces',
        kind: 'definition',
        statement: 'JavaScript classifies failures: **`TypeError`** for wrong-type operations like calling `null`, **`ReferenceError`** for missing bindings, **`SyntaxError`** for unparseable code, and **`RangeError`** for out-of-bounds values — each message naming the offense. The **stack trace** lists the call path from the throw site outward, read top-down from the immediate failure to its oldest caller. Chaining with `cause` (`throw new Error("load failed", { cause: err })`) preserves the original fault beneath a human-friendly wrapper.',
        detail: 'Read the first stack line for what failed and the next frames for who called it, since the fix usually belongs one frame above the throw.'
      },
      {
        term: 'Console beyond log: table, assert and grouping',
        kind: 'method',
        statement: 'The **console** family instruments running code: **`console.log`** for values, **`console.table`** for arrays of records, **`console.assert`** that fires only when a condition fails, and **`console.group`** for collapsing related output. **`console.time`** pairs with `timeEnd` to measure hot paths, while format specifiers render objects readably. Assertions double as executable documentation — `console.assert(list, "list must exist")` states the invariant and reports exactly when reality violates it.',
        detail: 'Prefer assert for invariants and table for record collections so failures announce themselves and data stays scannable without manual formatting.'
      },
      {
        term: 'Breakpoints, stepping and scope inspection',
        kind: 'method',
        statement: 'The **Sources panel** pauses execution on **line breakpoints**, **conditional breakpoints** that fire on expressions, and **DOM or event breakpoints** that trap mutations and listeners. Once paused, **step over** runs one line, **step into** descends into calls, and the **scope viewer** exposes `locals`, closures and globals at the frozen moment. Hovering variables and the paused call stack reveal how state evolved, replacing print-guessing with direct observation of the failure instant.',
        detail: 'Set conditional breakpoints on loop iterations of interest and inspect closure scope first, since captured state is the usual invisible suspect.'
      },
      {
        term: 'Network tab and the systematic loop',
        kind: 'insight',
        statement: 'The **Network tab** exposes every request — including `fetch` calls — with **status codes**, **headers**, **payloads**, timings and failed bodies, distinguishing server faults from client bugs at a glance. Filters isolate fetches, the preview pane decodes JSON, and **throttling** reproduces slow-connection failures on demand. The **systematic loop** binds it all: **reproduce** reliably, **isolate** with breakpoints and binary-search commenting, **fix** minimally, then **verify** with the case that failed — converging where random edits flail.',
        detail: 'Reproduce first with throttling and recorded steps, since a failure that cannot be retriggered on demand cannot be proven fixed.'
      }
    ],
    examples: [
      {
        title: 'Guard a fetch with typed errors and recovery',
        problem: 'A profile loader must distinguish network failure, missing users and bad JSON, recovering gracefully for each with a clear message.',
        steps: [
          { label: 'Step 1: Throw with meaning', text: '```js\nasync function loadUser(id) {\n  let res;\n  try {\n    res = await fetch("/api/users/" + id);\n  } catch (err) {\n    throw new Error("Network unreachable", { cause: err });\n  }\n  if (res.status === 404) {\n    throw new RangeError("No user with id " + id);\n  }\n  if (!res.ok) {\n    throw new Error("Server responded " + res.status);\n  }\n  return res.json();\n}\n```\nEach failure class gets its own error type and message, with the low-level fault preserved under `cause` for inspection.' },
          { label: 'Step 2: Recover at the boundary', text: '```js\nconst box = document.querySelector("#profile");\ntry {\n  const user = await loadUser(7);\n  box.textContent = user.name;\n} catch (err) {\n  console.assert(err instanceof Error, "expected an Error object");\n  box.textContent = "Could not load profile: " + err.message;\n} finally {\n  box.classList.add("settled");\n}\n```\nThe UI boundary catches once, asserts the contract, renders a human message, and always marks settled state in `finally`.' },
          { label: 'Step 3: Diagnose with the network tab', text: 'Open DevTools Network, filter to Fetch, and reload: a red 404 row confirms the missing-user path, the preview shows the server body, and timing exposes slow responses worth throttling to reproduce. Matching the observed status to the thrown branch closes the loop between symptom and code.' }
        ],
        result: 'Typed throws plus one recovery boundary turn three failure modes into clear messages, with network evidence confirming each branch.'
      },
      {
        title: 'Hunt a null-property crash systematically',
        problem: 'Clicking save throws “Cannot read properties of null”, and the culprit line touches three different element lookups.',
        steps: [
          { label: 'Step 1: Reproduce and read the stack', text: 'Click save twice to confirm it fails every time, then read the console: the first stack line names the property read, and the frame above shows which lookup returned null. The error type — a TypeError on null — already says a selector found nothing rather than data being wrong.' },
          { label: 'Step 2: Break and inspect scope', text: '```js\nfunction onSave() {\n  const form = document.querySelector("#editor");\n  const title = form.querySelector("#title");\n  console.assert(form, "editor form must exist");\n  console.assert(title, "title field must exist");\n  title.focus();\n}\n```\nA line breakpoint on the crash plus asserts on each lookup reveal the null binding directly; here a renamed id leaves `form` null, so the property read was doomed before the title line ran.' },
          { label: 'Step 3: Fix minimally and verify', text: 'Correct the selector to the renamed id, reload, click save twice more, and confirm the console stays clean with focus landing in the title field. The reproduce case becomes the regression check: same steps, now passing, proving the fix rather than hoping.' }
        ],
        result: 'Reproduce, isolate via stack plus breakpoint, fix the selector, verify with the original steps — the loop converges in minutes instead of edits.'
      }
    ],
    keyTakeaways: [
      'Throw typed errors early; catch and recover at UI boundaries with finally cleanup.',
      'Read error type plus first stack frames to locate cause above the throw.',
      'Instrument with assert, table and time instead of bare logging.',
      'Pause on breakpoints and inspect scope rather than guessing with prints.',
      'Reproduce, isolate with network plus breakpoints, fix minimally, verify.'
    ],
    quiz: [
      {
        q: 'Where should try/catch boundaries sit in a page?',
        options: [
          'Around every single line',
          'Risky operations in try, recovery at UI boundaries, cleanup in finally',
          'Only around JSON parsing',
          'Nowhere — errors should crash pages'
        ],
        answer: 1,
        explanation: 'Throws propagate to the nearest handler, so fallible work attempts locally while user-visible recovery and resource release happen at deliberate boundaries.'
      },
      {
        q: 'The console shows “Cannot read properties of null (reading focus)”. What does the type tell you?',
        options: [
          'Focus is deprecated',
          'A TypeError says an operation ran on null — a lookup returned nothing before focus was called',
          'The script has a syntax error',
          'The network is offline'
        ],
        answer: 1,
        explanation: 'TypeErrors flag wrong-type operations, and reading a property off null means the element query, not the data, came up empty.'
      },
      {
        q: 'Why prefer console.assert over console.log for invariants?',
        options: [
          'It runs faster',
          'It stays silent on success and reports exactly when the invariant breaks',
          'It pauses execution like a breakpoint',
          'It works without DevTools'
        ],
        answer: 1,
        explanation: 'Assertions encode expectations as code, producing signal only on violation instead of noise requiring manual scanning.'
      },
      {
        q: 'A fetch returns 404 but the handler reports “network failure”. How does the network tab resolve this?',
        options: [
          'It cannot — statuses are invisible',
          'The red 404 row with its body proves the server responded, so the bug is status handling, not connectivity',
          'It restarts the server automatically',
          'It rewrites the status to 200'
        ],
        answer: 1,
        explanation: 'Status, headers and preview separate transport faults from application responses, directing the fix to the branch that mishandled 404.'
      }
    ]
  }
]
