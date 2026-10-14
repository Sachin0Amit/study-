import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 8: Functions (Sections 8.1 – 8.7 distilled)
// Master study content — code-first: `inline code` + fenced ``` blocks ```.
// ============================================================================

export const jsCh8Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: "js-ch8-s1",
    readingTime: 8,
    intro: "A function is a block of parameterized JavaScript code, defined once and called many times — and in this language it is also a **value**: something you can assign, pass, return and inspect like any other. This section covers the three definition forms — declarations, expressions and arrow functions — and the one behavioral difference that outweighs everything else: arrow functions capture `this` **lexically** from their defining scope.",
    objectives: [
      "Define functions with declarations, expressions and arrow syntax",
      "Trace the hoisting difference between declarations and expressions",
      "Read arrow function bodies: expression form versus block form",
      "State what arrow functions lack: own this, arguments, prototype, new",
      "Choose the right form for callbacks and top-level code"
    ],
    concepts: [
      {
        term: "Function declarations",
        kind: "definition",
        statement: "A **function declaration** (function definition statement) writes `function name(params) { body }` as a standalone statement. Declarations are **hoisted**: before the statement line executes, the name is already bound to the function object — you may call the function from anywhere in the same scope, even \"above\" its definition.",
        detail: "```\nconsole.log(square(4)); // 16 — the declaration below was hoisted\nfunction square(x) { return x * x; }\n```\nThe entire function object is created at scope entry — not merely the name."
      },
      {
        term: "Function expressions",
        kind: "definition",
        statement: "A **function expression** is a function definition used **as an expression** — on the right side of an assignment, as an argument, inside an object literal: `const square = function (x) { return x * x; };`. Only the **variable** is hoisted (to `undefined` or, with `let`/`const`, into the temporal dead zone) — the function exists only after the assignment runs.",
        detail: "```\ncube(4);               // TypeError: cube is not a function\nvar cube = function (x) { return x * x * x; };\n```\nA named function expression (`const f = function fact(n) {...}`) keeps a private self-reference for recursion — the outer name `f` is all the world sees, and reassigning `f` does not break `fact`."
      },
      {
        term: "Arrow functions",
        kind: "definition",
        statement: "An **arrow function** `params => expression` (or `(params) => { statements }`) is a compact expression form of function. It has **no `this` of its own**: `this` (and `arguments`, `super`, `new.target`) resolve lexically, to the enclosing function’s values — the single most consequential difference in the chapter. Arrows also cannot be used as constructors and have no `prototype` property.",
        detail: "```\nconst square = x => x * x;\nconst add = (x, y) => x + y;\nconst noop = () => {};\n```\nWhen `this` binding matters — method definitions on objects, constructors — arrows are usually the wrong tool (Sections 8.2 and 9.3); when you need `this` *inherited* — callbacks inside methods — they are the fix (the worked example in 8.2)."
      },
      {
        term: "The hoisting law",
        kind: "law",
        statement: "**Declarations are hoisted whole; expressions appear when their assignment executes.** A `function` declaration may be called before its source line; a function stored via assignment can be called only after that assignment, and calling too early throws `TypeError` (with `var`) or `ReferenceError` (with `const`/`let`, from the temporal dead zone).",
        detail: "```\nconsole.log(typeof alpha); // \"function\" — declaration hoisted\nfunction alpha() {}\n\nconsole.log(beta);         // undefined — var hoisted, value not\nvar beta = function () {};\n\nconsole.log(gamma);        // ReferenceError — TDZ until its line\ngamma();\nconst gamma = () => {};\n```"
      },
      {
        term: "Arrow body forms",
        kind: "method",
        statement: "An arrow with an **expression body** returns that expression implicitly: `x => x * x`. A **block body** `{ ... }` needs an explicit `return` — `x => { x; }` returns `undefined`. To return an object literal from an expression body, wrap it in parentheses so the braces are not mistaken for a block: `() => ({ x: 1 })`.",
        detail: "```\nconst identity = x => x;              // implicit return\nconst broken = x => { x; };           // undefined — block, no return\nconst point = (x, y) => ({ x, y });   // parentheses force the object out\nconst block = (x, y) => {\n  let sum = x + y;                    // statements need the braces\n  return sum * 2;\n};\n```"
      },
      {
        term: "Nested functions",
        kind: "definition",
        statement: "Functions may be defined inside other functions: the inner function’s scope chain includes the outer function’s parameters and locals. The inner function is itself a closure — Section 8.5 shows that the captured outer variables **outlive the call that created them**, which is the mechanism behind private state.",
        detail: "```\nfunction hypotenuse(a, b) {\n  function square(n) { return n * n; } // sees a and b if it wants\n  return Math.sqrt(square(a) + square(b));\n}\nhypotenuse(3, 4); // 5\n```"
      },
      {
        term: "Choosing a form",
        kind: "insight",
        statement: "Style guidance distilled from the chapter: **arrow functions for almost every anonymous callback** (concise, immune to `this` surprises); **function declarations for named top-level helpers** (hoisting frees you to order code for readers); **function expressions** mainly when a name is created conditionally or stored among other values.",
        detail: "One caution cuts the other way: when the function *is* a method (Section 8.2) or a constructor (Section 9.2), `function` is the tool — arrow bodies would strip away the `this` binding that those invocations supply."
      }
    ],
    examples: [
      {
        title: "Trace the engine: one square, three ways, and the hoisting trap",
        problem: "Call `square` and `cube` **before** their definition lines under all three definition forms, and explain each outcome.",
        steps: [
          { label: "Step 1: The declaration works from anywhere", text: "```\nsquare(4); // 16\nfunction square(x) { return x * x; }\n```\nAt scope entry the engine created the function object and bound the name — by the time line 1 executes, `square` is ready." },
          { label: "Step 2: The var expression is not ready", text: "```\ncube(4); // TypeError: cube is not a function\nvar cube = function (x) { return x * x; };\n```\n`var cube` hoisted to `undefined`; the call tries `undefined(4)` → TypeError. After the assignment line runs, `cube(4)` returns 16." },
          { label: "Step 3: The const arrow is even stricter", text: "```\ncubed(4);            // ReferenceError: Cannot access before initialization\nconst cubed = x => x * x;\n```\n`const`/`let` bindings live in the **temporal dead zone** until their line executes — the reference itself is the error, before any call attempt." },
          { label: "Step 4: The same code reordered", text: "All three forms work identically when each is invoked after its definition executes — the differences are entirely about *when the binding gets its value*: immediately (declaration), at the assignment (expression), at the line with TDZ protection before it (const/let)." },
          { label: "Step 5: The takeaway applied", text: "The hoisting difference is why function declarations still earn their keep for top-level helpers used across a long file, while arrows rule the inline callbacks defined at their point of use." }
        ],
        result: "Declaration: called early → works. `var` expression: called early → TypeError. `const` arrow: called early → ReferenceError. Same function, three binding timelines."
      },
      {
        title: "Trace the engine: arrow body rules",
        problem: "Predict the return values of `f1(3)`, `f2(3)`, `f3(1, 2)` and `f4(1, 2)` below before running them.",
        steps: [
          { label: "Step 1: The four functions", text: "```\nconst f1 = x => x * 2;\nconst f2 = x => { x * 2; };\nconst f3 = (x, y) => ({ x, y });\nconst f4 = (x, y) => { return { x, y }; };\n```" },
          { label: "Step 2: f1 — expression body", text: "`f1(3)` → 6. The single expression is the implicit return value; no braces, no return keyword needed." },
          { label: "Step 3: f2 — the classic bug", text: "`f2(3)` → **undefined**. The braces make this a block body; `x * 2` is computed and discarded, and without a return statement the function returns undefined." },
          { label: "Step 4: f3 — the parentheses trick", text: "`f3(1, 2)` → `{ x: 1, y: 2 }`. Bare braces would have been parsed as a block (returning undefined); the parentheses wrap the object as an *expression*." },
          { label: "Step 5: f4 — the explicit equivalent", text: "`f4(1, 2)` → `{ x: 1, y: 2 }` — a block body with an explicit return of the same shorthand literal, identical result with more ceremony." }
        ],
        result: "6, undefined, `{ x: 1, y: 2 }`, `{ x: 1, y: 2 }` — braces mean statements and an explicit return; parentheses rescue expression bodies that want to return objects."
      }
    ],
    keyTakeaways: [
      "Three forms: declaration (`function name() {}`, hoisted), expression (`const f = function () {}`, ready at assignment), arrow (`x => x * x`).",
      "Declarations are hoisted whole; calling a `var` expression too early throws TypeError, a `const` arrow throws ReferenceError (TDZ).",
      "Arrow functions have no own `this`, `arguments` or `prototype`, and cannot be constructed — they resolve those names in the enclosing function.",
      "Expression bodies return implicitly; block bodies need `return`; wrap object literals in parentheses.",
      "Nested functions close over the enclosing function’s parameters and locals.",
      "Style: arrows for callbacks, declarations for top-level helpers, `function` whenever `this` must come from the invocation."
    ],
    quiz: [
      {
        q: "Calling a function one line above `var cube = function (x) { return x; };` throws:",
        options: [
          "ReferenceError — the name does not exist yet",
          "TypeError — the name exists but holds undefined",
          "nothing — it returns undefined",
          "SyntaxError"
        ],
        answer: 1,
        explanation: "var hoists the binding (so the name exists) but not the function value — the call attempts undefined(4), a TypeError."
      },
      {
        q: "The expression `const f = x => { x * 2; };` — what does `f(3)` return?",
        options: ["6", "undefined", "3", "an error"],
        answer: 1,
        explanation: "The braces create a block body: x * 2 is evaluated and discarded, and without a return statement the function returns undefined."
      },
      {
        q: "Which statement about arrow functions is true?",
        options: [
          "they define their own this, bound at call time",
          "they inherit this from the enclosing function where they are defined",
          "they can be invoked with new",
          "they receive an arguments object"
        ],
        answer: 1,
        explanation: "Arrows resolve this lexically — the value of the enclosing function — which is exactly why they fix the detached-callback problem and why they cannot serve as methods or constructors."
      },
      {
        q: "To make an arrow function with an expression body return the object `{ x: 1 }`, you write:",
        options: ["() => { x: 1 }", "() => ({ x: 1 })", "() => return { x: 1 }", "() => [x: 1]"],
        answer: 1,
        explanation: "Bare braces read as a block body; the parentheses wrap the literal in an expression, which the arrow then returns implicitly."
      }
    ]
  },

  // ---------------------------------------------------------------- 8.2
  {
    sectionId: "js-ch8-s2",
    readingTime: 10,
    intro: "Four ways to invoke a function produce four different values of `this`: a plain call, a method call, a constructor call and an indirect call through `call`/`apply`/`bind`. The invocation — never the definition — decides the receiver, and every classic JavaScript `this` bug is a call that changed form on the way to the function. This section works all four rows of the binding table with one single function.",
    objectives: [
      "Name the four invocation forms and the value of this in each",
      "Distinguish a method call o.m() from a function call g()",
      "Explain the detached-method bug and fix it with a wrapper or bind",
      "Use call, apply and bind to choose the receiver explicitly"
    ],
    concepts: [
      {
        term: "Invocation as a function",
        kind: "definition",
        statement: "A plain call — `f(x)` — invokes `f` **as a function**. In strict mode the value of `this` is **`undefined`**; in sloppy (non-strict) mode it is the **global object** (`globalThis`). This is the default form: no receiver was supplied, so none is delivered.",
        detail: "```\n\"use strict\";\nfunction f() { return this; }\nf(); // undefined\n```\nMost modern code (modules, class bodies, transpiled output) is strict, so plan on `undefined` — and on the TypeError the moment a function written as a method is called bare (worked below)."
      },
      {
        term: "Invocation as a method",
        kind: "definition",
        statement: "A **method** is a function stored as an object property. The call form `o.m(x)` — property access **immediately followed by the call** — invokes it **as a method**, and `this` is bound to the object `o`. Methods that run on other objects of the same shape are the essence of prototypal inheritance (Chapter 9).",
        detail: "```\nlet o = {\n  value: 42,\n  m() { return this.value; }\n};\no.m(); // 42 — this is o\n```\nThe binding happens per call: assign the same function to two objects and each call sees its own receiver — `this` is a parameter the invocation passes."
      },
      {
        term: "Invocation as a constructor",
        kind: "definition",
        statement: "`new F(x)` invokes `F` **as a constructor**: a fresh object is created, its prototype linked to `F.prototype`, `this` bound to it, and — unless the body explicitly returns an object — that new object is the result. Constructor invocation is the machinery behind classes (Section 9.2 traces all four steps).",
        detail: "```\nfunction F() { this.x = 1; }\nnew F().x;        // 1 — this was the fresh object\nnew F() instanceof F; // true\n```\nCapitalized constructor names are convention, not enforcement — though ES6 classes make calling without `new` an outright error."
      },
      {
        term: "Indirect invocation",
        kind: "method",
        statement: "**`f.call(o, ...args)`** and **`f.apply(o, argsArray)`** invoke `f` with an explicitly chosen `this`; **`f.bind(o)`** returns a new function whose `this` is permanently set to `o`. Indirect invocation is how you borrow methods, retarget functions and build partial applications (Section 8.6 works all three in detail).",
        detail: "```\nfunction f() { return this.tag; }\nlet o = { tag: \"chosen\" };\nf.call(o);  // \"chosen\"\nf.apply(o); // \"chosen\"\nf.bind(o)(); // \"chosen\"\n```"
      },
      {
        term: "The this-binding table",
        kind: "notation",
        statement: "The whole mechanism in four rows: **function call** `f()` → `this` is undefined (strict) or globalThis (sloppy); **method call** `o.m()` → `this` is `o`; **constructor** `new F()` → `this` is the brand-new object; **indirect** `f.call(o)` / `f.apply(o)` / `f.bind(o)()` → `this` is `o`. Every form overrides the previous — and the **last binding wins** until the next call.",
        detail: "Read any `this` in three steps: find the call site; classify the form by the table; only then look inside the function. (Arrow functions are the exception — they have no row, and simply inherit the enclosing function’s answer.)"
      },
      {
        term: "The detached-method bug",
        kind: "insight",
        statement: "Because `this` comes from the **call**, not the definition, detaching a method from its object loses the receiver: `let g = o.m; g()` is a plain function call — `this` is undefined (strict) or global. The classic victims are callbacks passed to `setTimeout` and event handlers (Chapter 15), which invoke your function later with no knowledge of `o`.",
        detail: "Two fixes, one rule: wrap the call so the method form reappears — `setTimeout(() => o.m(), 10)` — or pre-bind the receiver — `setTimeout(o.m.bind(o), 10)`. The arrow wrapper is possible precisely because arrows inherit `this` from the enclosing scope instead of getting their own."
      },
      {
        term: "Method chaining",
        kind: "method",
        statement: "A method that returns `this` lets the next call hang directly off the last: `counter.add(2).add(3).value()`. Fluent APIs (strings, arrays to a degree, jQuery-style DOM toolkits) are built on the pattern — each link must return the receiver (or a new receiver for immutable styles, as Chapter 15 builds for an HTML-building class).",
        detail: "```\nlet counter = {\n  value: 0,\n  add(n) { this.value += n; return this; }\n};\ncounter.add(2).add(3).value; // 5\n```"
      }
    ],
    examples: [
      {
        title: "Trace the engine: one function, four invocations",
        problem: "Run `whereAmI` as a function, as a method, indirectly and as a constructor (strict mode), and give the value of `this` in each — plus what the call returns.",
        steps: [
          { label: "Step 1: The function", text: "```\n\"use strict\";\nfunction whereAmI() {\n  return this;\n}\n```" },
          { label: "Step 2: As a function", text: "`whereAmI()` → `undefined`. No receiver was named, strict mode delivers none. (In a sloppy script the same call would return the global object — a historical footgun, one more reason for modules.)" },
          { label: "Step 3: As a method", text: "```\nlet chart = { name: \"sales\", whereAmI: whereAmI };\nchart.whereAmI();\n```\n→ the `chart` object itself: the property-access-then-call form made `chart` the receiver. `whereAmI` was not written for charts — the call form did the binding." },
          { label: "Step 4: Indirectly", text: "`whereAmI.call(chart)` and `whereAmI.apply(chart)` → the `chart` object again — this time because the call itself named the receiver as the first argument." },
          { label: "Step 5: As a constructor", text: "`new whereAmI()` → a **fresh empty object** inheriting from `whereAmI.prototype`, which the function returned as `this`. Four rows of the table, one function, four different answers — and `new whereAmI() instanceof whereAmI` is true." }
        ],
        result: "undefined / chart / chart / a new object — the definition never changed; only the invocation did."
      },
      {
        title: "Trace the engine: the detached method",
        problem: "A `timer` object’s method is passed to `setTimeout` bare — trace the failure in strict mode and repair it two ways.",
        steps: [
          { label: "Step 1: The object and the attempt", text: "```\n\"use strict\";\nconst timer = {\n  started: false,\n  start() { this.started = true; }\n};\nsetTimeout(timer.start, 10); // later: TypeError\n```\n`timer.start` is evaluated first — producing the function **detached from `timer`** — and that function is what setTimeout receives." },
          { label: "Step 2: The crash", text: "When the timeout fires it invokes the bare function: a plain **function-form call** with no receiver. `this` is `undefined` (strict), so `this.started = true` throws `TypeError: Cannot set properties of undefined`." },
          { label: "Step 3: Fix one — the arrow wrapper", text: "```\nsetTimeout(() => timer.start(), 10);\n```\nThe callback is an arrow whose body performs a genuine **method call** (`timer.start()`) at fire time — the method form is restored, `this` is `timer`, and `started` becomes true." },
          { label: "Step 4: Fix two — bind", text: "```\nsetTimeout(timer.start.bind(timer), 10);\n```\n`bind` manufactures a new function whose `this` is **permanently** `timer`, no matter who calls it or when — the receiver travels with the function." },
          { label: "Step 5: The general law", text: "The bug is never in the method — it is in the **call form**. Any place a framework invokes your callback as a plain function (`setTimeout`, array iteration, event listeners) silently exercises row one of the table; supply a wrapper or a bound function to control the receiver." }
        ],
        result: "Bare hand-off → TypeError at fire time; arrow wrapper or `.bind(timer)` → `started` becomes `true`. The invocation form, not the definition, decides `this`."
      },
      {
        title: "Trace the engine: two objects, one shared method",
        problem: "Write one `describe` function, install it on two different objects, and call it twice — what does `this` see each time?",
        steps: [
          { label: "Step 1: The installation", text: "```\nfunction describe() {\n  return `I am ${this.name}`;\n}\nlet cat = { name: \"Whiskers\", describe };\nlet dog = { name: \"Rex\", describe };\n```\nOne function object, two properties pointing at it — assignment copies references, never bodies." },
          { label: "Step 2: First call", text: "`cat.describe()` → `\"I am Whiskers\"`. The method form made `cat` the receiver, so `this.name` was `\"Whiskers\"`." },
          { label: "Step 3: Second call", text: "`dog.describe()` → `\"I am Rex\"` — same function object, different receiver: the binding is decided **at each call**, and no state leaked between the two invocations." },
          { label: "Step 4: The same function, detached", text: "`let d = cat.describe; d()` is a function-form call again: in strict mode `this` is undefined and `this.name` throws — proof that the function carries no loyalty to either object." },
          { label: "Step 5: Why classes care", text: "This is exactly how prototype methods work (Chapter 9): **one** function on the prototype serves every instance, because every `instance.method()` call re-binds `this` to that instance." }
        ],
        result: "`\"I am Whiskers\"`, then `\"I am Rex\"` from one shared function — per-call receiver binding, the foundation of prototype-based classes."
      }
    ],
    keyTakeaways: [
      "Four invocation forms set four `this` values: function (undefined/global), method (the receiver), constructor (a new object), indirect (the call/apply/bind argument).",
      "The call site, not the definition, determines `this` — classify the invocation before reading the body.",
      "Detaching a method (`let g = o.m; g()`) demotes it to a function call — the source of the setTimeout/event-handler bug.",
      "Fix with an arrow wrapper (which restores the method call at fire time) or `bind` (which permanently bakes in the receiver).",
      "Arrow functions do not participate: they inherit `this` from the enclosing function’s binding.",
      "Returning `this` from a method enables chaining; one shared method serves many receivers."
    ],
    quiz: [
      {
        q: "In strict mode, the plain call `f()` binds `this` to:",
        options: ["the global object", "undefined", "the f function itself", "an empty object"],
        answer: 1,
        explanation: "Function-form invocation supplies no receiver; strict mode makes that explicit as undefined (sloppy mode substitutes the global object instead)."
      },
      {
        q: "`let g = obj.method; g();` (strict mode) results in:",
        options: [
          "a normal method call with this equal to obj",
          "a function call — this is undefined and any this.x access throws",
          "a constructor invocation",
          "a ReferenceError for obj.method"
        ],
        answer: 1,
        explanation: "The property access ended before the call: g holds the detached function, and calling it bare is function-form invocation with no receiver."
      },
      {
        q: "Which expression invokes `f` with `this` bound to `obj` and arguments 1 and 2?",
        options: ["f.obj(1, 2)", "f.call(obj, 1, 2)", "obj.f(1, 2)", "f.bind(1, 2)"],
        answer: 1,
        explanation: "call takes the receiver first and then the individual arguments; apply would take them as an array, and bind returns a new function rather than invoking."
      },
      {
        q: "The arrow function `() => timer.start()` passed to setTimeout fixes the detached-method bug because:",
        options: [
          "arrows get their own this bound to timer",
          "the arrow body performs a real method call, timer.start(), at the moment the callback runs",
          "setTimeout treats arrows specially",
          "arrows copy the method into the callback"
        ],
        answer: 1,
        explanation: "The wrapper restores the method-call form at fire time — the receiver is part of the expression inside the arrow, not something the arrow inherits for the method itself."
      },
      {
        q: "`new F()` inside the constructor binds `this` to:",
        options: [
          "the global object",
          "F.prototype",
          "a newly created object inheriting from F.prototype",
          "the F function itself"
        ],
        answer: 2,
        explanation: "Constructor invocation creates a fresh object, links its prototype to F.prototype, and runs the body with this bound to that new object — which is then returned."
      },
      // University-pattern: arrow versus method this — lexical capture (original)
      {
        q: "What does this program print? Assume a plain script whose top-level `this` is an object without `x`.\n```js\nlet box = {\n  x: 1,\n  arrow: () => this.x,\n  method() { return this.x; }\n};\nconsole.log(box.arrow());\nconsole.log(box.method());\n```",
        options: ["`undefined` then `1`", "`1` then `1`", "`1` then `undefined`", "A TypeError is thrown on the first call"],
        answer: 0,
        explanation: "Step 1: The code given defines an arrow property and a method property on the same object and calls both as methods. Step 2: The governing rules are that arrow functions capture `this` lexically where they are defined, ignoring the later call form, while ordinary methods take `this` from the call form, here `box` for `box.method()`. Step 3: Tracing call by call, the arrow reads the top-level `this`, which lacks `x`, yielding `undefined`, and the method reads `box.x`, yielding `1`. Step 4: The distractors fail because the arrow never adopts `box` as its receiver, the method form plainly resolves through `box`, and reading a missing property yields `undefined` rather than throwing. Step 5: Therefore the output is `undefined` followed by `1`."
      }
    ]
  },

  // ---------------------------------------------------------------- 8.3
  {
    sectionId: "js-ch8-s3",
    readingTime: 9,
    intro: "JavaScript functions are radically tolerant about their inputs: missing arguments become `undefined`, extras are ignored or collected, and — because two functions cannot share a name — there is no overloading to dispatch on argument shape. This section covers default parameters (re-evaluated on **every** call), rest parameters versus the legacy `arguments` object, destructured parameter patterns, and the idioms that replace classical overloading.",
    objectives: [
      "Write default parameter values and state exactly when they are evaluated",
      "Collect variable argument lists with rest parameters",
      "Contrast rest parameters with the arguments object",
      "Destructure object and array parameters, with defaults",
      "Explain why JavaScript has no overload dispatch and what replaces it"
    ],
    concepts: [
      {
        term: "Parameters versus arguments",
        kind: "definition",
        statement: "**Parameters** are the names a function declares (its arity); **arguments** are the values an invocation supplies. JavaScript never checks the count: missing arguments read as `undefined` and extra ones are simply not bound to any parameter name (though rest parameters or `arguments` can still reach them).",
        detail: "```\nfunction f(a, b) { return [a, b]; }\nf(1);      // [1, undefined]\nf(1, 2, 3); // [1, 2] — the 3 is unreachable\n```\nThis tolerance is the design gap that defaults, rest and destructuring step in to fill."
      },
      {
        term: "Default parameter values",
        kind: "method",
        statement: "A parameter written `name = expr` uses `expr` whenever the argument is **`undefined`** (missing or explicitly passed as undefined). Defaults are ordinary expressions evaluated **at call time, on every call that needs them** — and they may reference parameters declared to their left.",
        detail: "```\nfunction rectangleArea(width, height = width) {\n  return width * height; // height defaults to a square\n}\nrectangleArea(3);    // 9\nrectangleArea(3, 2); // 6\n```\nNote that `null` does **not** trigger the default — only `undefined` does; passing `null` passes `null`."
      },
      {
        term: "Rest parameters",
        kind: "method",
        statement: "A **rest parameter** — `...rest`, always last — collects every argument beyond the named ones into a **true array**. It is the modern tool for variadic functions, replacing `arguments` entirely: iterable, array-method-ready, and visible in `f.length` as absent.",
        detail: "```\nfunction max(first = -Infinity, ...rest) {\n  let m = first;\n  for (let v of rest) if (v > m) m = v;\n  return m;\n}\nmax(3, 1, 4, 1, 5); // 5\n```\nAt the call site, spread performs the inverse: `max(...values)` expands an array into arguments — the two dots are doing mirror-image work (spread out, rest in)."
      },
      {
        term: "The arguments object",
        kind: "definition",
        statement: "Inside a classic (non-arrow) function, **`arguments`** is an array-like of all arguments passed: numbered, with `length`, but no array methods and no iteration. Two further quirks: in sloppy mode it **aliases the named parameters** (writing `arguments[0]` changes the first parameter), and arrow functions have no `arguments` at all — they see the enclosing function’s.",
        detail: "```\nfunction legacy() {\n  return arguments.length;\n}\nlegacy(1, 2, 3); // 3 — counting without arrays\n```\nIn strict mode the aliasing disappears (it is a plain snapshot), and in modern code rest parameters retire the whole mechanism."
      },
      {
        term: "Destructured parameters",
        kind: "method",
        statement: "A parameter can be an **object or array pattern**: `function f({ x, y }) {...}` unpacks the first argument’s properties into locals `x` and `y`. Patterns compose with defaults — `{ x = 0, y = 0 } = {}` handles the no-argument call — and the idiom is the named-options signature every modern library uses.",
        detail: "```\nfunction vectorAdd({ x: x1, y: y1 }, { x: x2, y: y2 }) {\n  return { x: x1 + x2, y: y1 + y2 };\n}\nvectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 }); // { x: 4, y: 6 }\n```\nLosing the argument loses the binding: `vectorAdd()` throws TypeError reading `x` of undefined — hence the `= {}` default in the worked example."
      },
      {
        term: "No overloading",
        kind: "insight",
        statement: "JavaScript has **no function overloading**: two definitions with the same name are one name — the second definition simply replaces the first, because a function is just a value assigned to one identifier. Dispatch-on-argument-shape is written by hand instead: default parameters, type checks (`typeof`, `instanceof`), argument counting, and destructuring with defaults.",
        detail: "```\n// one name, several shapes:\nfunction greet(name, punctuation = \"!\") {\n  if (typeof name !== \"string\") name = \"stranger\";\n  return `Hello, ${name}${punctuation}`;\n}\n```\nThe parameters themselves become the overloaded signature — the technique behind the flexible APIs of the standard library (`Array.from`, `splice`, `copyWithin`)."
      }
    ],
    examples: [
      {
        title: "Trace the engine: defaults are evaluated per call",
        problem: "Trace the four calls of `tag` below and the running value of `seq`, showing that the default expression runs exactly when a default is needed.",
        steps: [
          { label: "Step 1: The function", text: "```\nlet seq = 0;\nfunction tag(name = `item-${++seq}`) {\n  return name;\n}\n```" },
          { label: "Step 2: tag() — the default runs", text: "The argument is `undefined`, so the template literal is evaluated **now**: `seq` becomes 1 and the argument is `\"item-1\"`. The counter lives outside the function — it advanced because this call needed a default." },
          { label: "Step 3: tag() again", text: "A second bare call re-evaluates the same expression: `seq` becomes 2, result `\"item-2\"`. Defaults are not one-time compile-time constants — they are per-call expressions (an object-valued default like `[]` is likewise fresh on each call)." },
          { label: "Step 4: tag(\"fixed\") — skipped entirely", text: "The argument is a string, so the default is **never evaluated** — `seq` stays at 2 and the call returns `\"fixed\"`." },
          { label: "Step 5: tag(undefined) — the boundary case", text: "An explicit `undefined` also triggers the default (`\"item-3\"`, `seq` now 3), while `tag(null)` would not — `null` is a value that passes through. The rule is literally \"is the argument undefined?\", nothing deeper." }
        ],
        result: "`\"item-1\"`, `\"item-2\"`, `\"fixed\"`, `\"item-3\"` — with `seq` advancing 0→1→2→(pause)→3: default expressions run exactly when an argument is undefined, every time."
      },
      {
        title: "Trace the engine: rest versus arguments",
        problem: "Implement a variadic `max` twice — once with a rest parameter, once with the legacy `arguments` object — and trace both over the call `max(3, 1, 4, 1, 5)`.",
        steps: [
          { label: "Step 1: The rest version", text: "```\nfunction maxRest(first = -Infinity, ...rest) {\n  let m = first;\n  for (let v of rest) if (v > m) m = v;\n  return m;\n}\n```\nAt the call, `first` binds 3 and `rest` collects `[1, 4, 1, 5]` — a **true array**, so `for/of` works, as would `.reduce`." },
          { label: "Step 2: The trace", text: "`m` starts 3; 1 loses; 4 wins; 1 loses; 5 wins → returns 5. Five arguments, one named, four collected." },
          { label: "Step 3: The legacy version", text: "```\nfunction maxLegacy() {\n  let m = -Infinity;\n  for (let i = 0; i < arguments.length; i++) {\n    if (arguments[i] > m) m = arguments[i];\n  }\n  return m;\n}\n```\nNo parameters at all — `arguments` indexes everything: 3, 1, 4, 1, 5 in a manual `i` loop, because `arguments` is array-like, not iterable, and `.forEach` does not exist on it." },
          { label: "Step 4: The spread handoff", text: "`maxRest(...[2, 7, 1])` — spread at the call site expands the array into three arguments: `first` = 2, `rest` = `[7, 1]`, answer 7. Rest and spread are one mechanism viewed from each end of the call." },
          { label: "Step 5: Why rest won", text: "The rest version works in arrows, exposes its shape to `f.length` correctly (1 here — parameters before the rest), and needs no conversion. `arguments` survives only to read old code." }
        ],
        result: "Both return 5 — but `rest` is a real array (`[1, 4, 1, 5]`) while `arguments` required index arithmetic; and spread at the call site (`maxRest(...arr)`) completes the pair."
      },
      {
        title: "Trace the engine: destructured options with defaults",
        problem: "Define `area({ width = 10, height = 5 } = {})` and trace `area()`, `area({})`, `area({ height: 2 })` and `area({ width: 3, height: 2 })`.",
        steps: [
          { label: "Step 1: The signature", text: "```\nfunction area({ width = 10, height = 5 } = {}) {\n  return width * height;\n}\n```\nTwo defaults in one parameter: `= {}` for the whole argument, and inner defaults for each property the pattern reads." },
          { label: "Step 2: area() — outer default", text: "No argument at all → `undefined` → the outer default supplies a fresh `{}` → the pattern reads `width` and `height` from it, finds neither, applies both inner defaults → `10 * 5` = 50." },
          { label: "Step 3: area({}) — same destination", text: "An explicit empty object skips the outer default (the argument is not undefined) but the pattern still finds no properties → 50 again — the two routes converge." },
          { label: "Step 4: area({ height: 2 }) — selective override", text: "The pattern extracts `height` = 2 and misses `width` → default 10 → 20. Callers name only what differs from the default — the named-arguments ergonomics classical overloading would provide." },
          { label: "Step 5: area({ width: 3, height: 2 }) — fully specified", text: "Both properties present, both defaults skipped → 6. And `area(null)` would throw TypeError — `null` does not trigger the outer `= {}` default; only `undefined` does." }
        ],
        result: "50, 50, 20, 6 — the `= {}` outer default plus inner property defaults emulates named, optional, defaulted arguments in a single parameter."
      }
    ],
    keyTakeaways: [
      "Missing arguments read as `undefined`; extra arguments are ignored unless collected.",
      "Default parameter values are expressions evaluated per call, triggered only by `undefined` (never `null`), and may reference earlier parameters.",
      "Rest parameters `...rest` collect extras into a true array — the modern replacement for `arguments`.",
      "`arguments` is array-like, aliases parameters in sloppy mode, and does not exist in arrow functions.",
      "Destructured parameters unpack objects/arrays into locals; `{ opts = {} }` guards the missing-argument case.",
      "There is no overload dispatch — one name holds one value; emulate overloading with defaults, types and patterns."
    ],
    quiz: [
      {
        q: "Default parameter values are evaluated:",
        options: [
          "once, when the function is defined",
          "each time the function is called and the argument is undefined",
          "each time the function is called, whether needed or not",
          "only in strict mode"
        ],
        answer: 1,
        explanation: "Defaults are per-call expressions, evaluated exactly when an argument is undefined — which is why a default like ++seq advances on exactly the calls that use it."
      },
      {
        q: "Which call triggers the default in `function f(x = 1) { return x; }`?",
        options: ["f(0)", "f(null)", "f(undefined)", "f(false)"],
        answer: 2,
        explanation: "Only an undefined argument — missing or explicit — activates the default; null, 0, false and the empty string are all real values that pass through."
      },
      {
        q: "The rest parameter differs from the arguments object because it is:",
        options: [
          "an array-like without methods",
          "a true array, available in arrow functions, and counted out of f.length",
          "shared across all invocations",
          "always the first parameter"
        ],
        answer: 1,
        explanation: "Rest collects into a genuine array, works everywhere including arrows, and sits outside the arity that the length property reports."
      },
      {
        q: "JavaScript does not support function overloading because:",
        options: [
          "two functions cannot have the same number of parameters",
          "a function name is one binding holding one value — a later definition replaces the earlier one",
          "strict mode forbids it",
          "overloading requires classes"
        ],
        answer: 1,
        explanation: "Definitions are assignments: the second one overwrites the first, so dispatch on argument shape must be written by hand with defaults, type checks and patterns."
      },
      {
        q: "For `function f({ a = 1 } = {}) { return a; }` the call `f({})` returns:",
        options: ["undefined", "1", "an error", "NaN"],
        answer: 1,
        explanation: "The empty object satisfies the outer default (the argument exists), then the pattern finds no a and applies the inner default — 1."
      }
    ]
  },

  // ---------------------------------------------------------------- 8.4
  {
    sectionId: "js-ch8-s4",
    readingTime: 8,
    intro: "Because functions are values, they travel: into objects and arrays, across function boundaries as arguments and return values, into conditional expressions. And because variables inside a function are invisible outside it, a function doubles as a **namespace** — the immediately invoked function expression (IIFE) that powered an entire era of JavaScript modularity before ES6 modules existed.",
    objectives: [
      "Pass functions as arguments and return them from functions",
      "Store functions in objects and arrays and invoke them by computed name",
      "Define a function conditionally with a ternary expression",
      "Wrap reusable code in an IIFE namespace and explain the parentheses",
      "Use the namespace pattern to export a public API"
    ],
    concepts: [
      {
        term: "Functions as values",
        kind: "definition",
        statement: "A function definition is an expression producing a **value**: it can be assigned to variables, stored in object properties and array elements, passed as an argument, returned from a function — and even given properties of its own (`f.id = 3` works, because functions are objects). Copying a variable holding a function copies the reference, never a duplicate body.",
        detail: "```\nconst square = x => x * x;\nconst alias = square; // same function object\nalias(3);              // 9\n```\nThere is exactly one function here, two names for it — the same reference semantics every object enjoys."
      },
      {
        term: "Higher-order functions",
        kind: "definition",
        statement: "A **higher-order function** is a function that operates on other functions — taking one or more as arguments (`array.map(fn)`, `setTimeout(fn)`), returning one (the `bind` and `memoize` of this chapter), or both. Higher-order functions are the hinge between \"functions as values\" and the functional style of Section 8.7.",
        detail: "```\nfunction repeat(n, action) { // action is a function argument\n  for (let i = 0; i < n; i++) action(i);\n}\nrepeat(3, i => console.log(`tick ${i}`));\n```\nThe array methods of Chapter 7 are higher-order functions by design — their entire job is \"run your callback over my data\"."
      },
      {
        term: "A table of functions",
        kind: "method",
        statement: "Storing related functions in an object turns the function name into **data**: `operators[op](a, b)` dispatches on the string `op`. The pattern replaces long `switch` chains, keeps syntax out of the dispatch, and lets built-ins sit beside your own arrows (`pow: Math.pow`) since a function reference is a function reference.",
        detail: "```\nconst operators = {\n  add: (x, y) => x + y,\n  subtract: (x, y) => x - y,\n  multiply: (x, y) => x * y,\n  divide: (x, y) => (y === 0 ? NaN : x / y)\n};\noperators[\"multiply\"](3, 4); // 12 — computed dispatch\n```\nArray-valued tables work identically: `handlers[eventType]` is the spine of every event system (Chapter 15)."
      },
      {
        term: "Conditional function definition",
        kind: "insight",
        statement: "Because definitions are expressions, the definition site itself can be conditional: `const parse = window.JSON ? j => JSON.parse(j) : legacyParse;` — impossible with declaration statements in strict mode (function declarations inside blocks are block-scoped there). The expression form composes with every value-level construct.",
        detail: "This also covers polyfilling Chapter 9 style (`if (!String.prototype.startsWith) {...}`) and test-time injection: the ternary chooses the implementation once, and the rest of the program calls `parse` without knowing which branch won."
      },
      {
        term: "Functions as namespaces",
        kind: "method",
        statement: "Variables declared inside a function are **local to it** — so a function doubles as a private scope. The **IIFE** (immediately invoked function expression) exploits this: wrap a chunk of code in a function expression and invoke it on the spot, and its temporaries never touch the global namespace.",
        detail: "```\n(function () {\n  // chunk of code: locals live and die here\n  let temp = 40 + 2;\n  console.log(temp);\n}()); // defined and invoked in one expression\n```\nThe wrapping parentheses matter: without them `function` at statement position parses as a **declaration**, which cannot be immediately invoked — a syntax error. The parens force expression position; the trailing `()` performs the call."
      },
      {
        term: "The module pattern",
        kind: "method",
        statement: "The full namespace pattern **returns** an object of functions while keeping their shared state hidden inside the IIFE: the public API travels out, the private variables stay in. Before ES6 modules (Chapter 10) this was *the* way to package JavaScript — and it is a direct application of closures, which is why Section 8.5 comes next.",
        detail: "```\nconst stats = (function () {\n  let calls = 0; // private\n  function mean(a) {\n    calls++;\n    return a.reduce((x, y) => x + y) / a.length;\n  }\n  return { mean, usage: () => calls };\n})();\nstats.mean([1, 2, 3]); // 2\nstats.usage();          // 1 — the count survived the call\n```\nOne global (`stats`), any number of private helpers — the whole trick of the pre-module web."
      }
    ],
    examples: [
      {
        title: "Trace the engine: a computed dispatch table",
        problem: "Build the `operators` table with `add`, `subtract`, `multiply` and `divide`, then trace `compute(\"multiply\", 3, 4)` and a failing `compute(\"frob\", 1, 2)`.",
        steps: [
          { label: "Step 1: The table and the dispatcher", text: "```\nconst operators = {\n  add: (x, y) => x + y,\n  subtract: (x, y) => x - y,\n  multiply: (x, y) => x * y,\n  divide: (x, y) => (y === 0 ? NaN : x / y)\n};\nfunction compute(op, lhs, rhs) {\n  let fn = operators[op];\n  if (typeof fn === \"function\") return fn(lhs, rhs);\n  throw new TypeError(`unknown operator: ${op}`);\n}\n```" },
          { label: "Step 2: The lookup", text: "`compute(\"multiply\", 3, 4)` computes the key `\"multiply\"` and reads `operators.multiply` — the arrow `(x, y) => x * y` — exactly as `o[name]` from Chapter 6." },
          { label: "Step 3: The call", text: "That function value is invoked with `(3, 4)` → `3 * 4` = 12. No switch statement, no if-chain — the table is the dispatch, and adding an operator is one more property." },
          { label: "Step 4: The miss", text: "`compute(\"frob\", 1, 2)`: `operators.frob` is `undefined`, so the `typeof` guard fails and the dispatcher throws `TypeError: unknown operator: frob` — controlled failure instead of `undefined is not a function`." },
          { label: "Step 5: Why a function table beats a switch", text: "The keys are data (they can arrive from a network or a parser), the values can be any function reference including built-ins (`Math.pow` would drop in as `pow: Math.pow`), and the dispatch cost is one property access." }
        ],
        result: "12 from the table hit; a typed error from the miss — the function-name-as-data pattern that event handlers, routers and REPLs are all built on."
      },
      {
        title: "Trace the engine: an IIFE keeps its locals local",
        problem: "Run the IIFE below in a program that also declares a global `temp`, and show that the two variables never meet; then export a public API from the same shape.",
        steps: [
          { label: "Step 1: The collision that does not happen", text: "```\nlet temp = \"global data\";\n(function () {\n  let temp = 40 + 2; // local to the IIFE\n  console.log(temp); // 42\n})();\nconsole.log(temp); // \"global data\" — untouched\n```\nBoth variables are named `temp`; only the global one survives the expression." },
          { label: "Step 2: Why the parentheses matter", text: "Write the same lines without the wrapping parens and the parser sees `function () {...}` at statement position — a **function declaration** missing a name: a SyntaxError. The parentheses demote the keyword to expression position, where a nameless function is legal and the trailing `()` can invoke it." },
          { label: "Step 3: The export form", text: "```\nconst dice = (function () {\n  let count = 0;\n  return {\n    roll() { count++; return 1 + Math.floor(Math.random() * 6); },\n    rolls: () => count\n  };\n})();\n```\nThe IIFE returns an object; `count` is visible to `roll` and `rolls` (closures — next section) and to nobody else. One global name: `dice`." },
          { label: "Step 4: The trace", text: "`dice.roll()` → 1 to 6, `count` becomes 1; `dice.roll()` again → `count` 2; `dice.rolls()` → 2 — the private counter persists between calls and between the two methods, which share one closure environment." },
          { label: "Step 5: The legacy note", text: "ES6 modules (Chapter 10) give every file its own scope and explicit exports, so new code rarely needs IIFEs — but the pattern still governs one-shot initialization and the module formats that transpile down to it." }
        ],
        result: "The IIFE’s `temp` lives and dies inside the expression; the exported object exposes exactly what its return value contains — private state, public API, one global binding."
      }
    ],
    keyTakeaways: [
      "Functions are values: assign, store, pass, return them — copying the variable copies the reference.",
      "A higher-order function takes or returns functions; all of Chapter 7’s array methods are higher-order.",
      "An object of functions turns names into data: `operators[op](a, b)` is a dispatch table.",
      "Conditional definition (`const f = cond ? a : b`) composes functions into ordinary expressions.",
      "IIFEs create a private scope on the spot — the wrapping parentheses force expression position.",
      "The module pattern returns a public API from an IIFE whose internals stay private — the ancestor of ES6 modules."
    ],
    quiz: [
      {
        q: "The parentheses in an immediately invoked function expression exist to:",
        options: [
          "pass arguments to the function",
          "force the function keyword into expression position so it can be invoked on the spot",
          "make the function asynchronous",
          "hoist the function"
        ],
        answer: 1,
        explanation: "At statement position, function parses as a declaration (which cannot be anonymous or invoked inline); the parentheses make it an expression, and the trailing pair invokes it."
      },
      {
        q: "A higher-order function is one that:",
        options: [
          "has at least two parameters",
          "takes functions as arguments or returns a function",
          "is defined inside another function",
          "uses arrow syntax"
        ],
        answer: 1,
        explanation: "Higher-order simply describes operating on functions as values — map and setTimeout take them, bind and memoize return them."
      },
      {
        q: "The main benefit of the function-as-namespace pattern is that:",
        options: [
          "functions run faster inside functions",
          "temporary variables stay out of the global scope",
          "it enables overloading",
          "it makes variables constant"
        ],
        answer: 1,
        explanation: "Function scope hides everything inside: only the names you deliberately export (or return) leak out, which is why one global per module was the old rule."
      },
      {
        q: "Storing functions in an object and calling `table[op](x, y)` is best described as:",
        options: [
          "overloading — the language dispatches on argument types",
          "computed dispatch — the function name itself is data",
          "recursion",
          "partial application"
        ],
        answer: 1,
        explanation: "The key arrives at run time and selects the function value from the table; the language provides no overloading, but this pattern supplies the same ergonomics."
      }
    ]
  },

  // ---------------------------------------------------------------- 8.5
  {
    sectionId: "js-ch8-s5",
    readingTime: 12,
    intro: "Closures are the chapter’s flagship: JavaScript uses **lexical scoping** — a function runs in the scope where it was **defined**, not where it is invoked — so an inner function keeps a live link to the outer function’s variables even after that outer call has returned. This section traces the mechanism through the variable-environment diagrams: shared private counters, the unique-integer IIFE, accessor pairs with validation, and memoization.",
    objectives: [
      "State the lexical scoping rule and the definition of a closure",
      "Trace why an outer function’s variables outlive its return",
      "Build private state shared between sibling functions",
      "Explain per-invocation environments: why two counter() calls are independent",
      "Recognize and fix the closure-in-a-loop pitfall",
      "Implement memoization with a closure-held cache"
    ],
    concepts: [
      {
        term: "Lexical scoping",
        kind: "law",
        statement: "JavaScript functions are executed with the **variable scope in effect when they were defined**, not the scope in effect when they are invoked. An inner function’s body refers to names the way the source code reads — resolved statically through the nested scopes of the source text — never through whatever happens to be in scope at call time.",
        detail: "```\nlet scope = \"global scope\";\nfunction checkscope() {\n  let scope = \"local scope\";\n  function f() { return scope; }\n  return f;\n}\ncheckscope()(); // \"local scope\" — f was defined inside checkscope\n```\nThe last call happens at global scope; `f` still sees its **defining** scope’s `scope`."
      },
      {
        term: "Closure",
        kind: "definition",
        statement: "The combination of a function object and the **variable environment** (the set of variable bindings) in which its variables are resolved is a **closure**. Every JavaScript function is technically a closure; the interesting ones are **invoked from a different scope than they were defined in** — typically returned from, or passed out of, their defining function — which is only possible because the captured environment outlives the call that created it.",
        detail: "In `checkscope` above, the call `checkscope()` finishes and its local `scope` should die — but `f` still references that environment, so the engine keeps it alive as long as `f` does. That survival is the entire trick."
      },
      {
        term: "Closures capture variables, not values",
        kind: "insight",
        statement: "A closure holds a reference to the **variable** — the binding — not a snapshot of its value. Later mutations are visible through the closure, and sibling closures over the same environment share one variable, not copies. This is what makes counters possible at all.",
        detail: "```\nfunction makeCounter() {\n  let n = 0; // one variable, captured by reference\n  return {\n    count: () => ++n,\n    reset: () => (n = 0)\n  };\n}\n```\n`count` and `reset` operate on the **same** `n`; two calls of `makeCounter()` produce two independent `n`s — the worked example traces both facts."
      },
      {
        term: "Per-invocation environments",
        kind: "law",
        statement: "Every function invocation creates a **new** environment of parameters and locals. Two closures defined in the same invocation share that one environment; closures from different invocations never do. Calling a factory twice therefore yields state machines that cannot see each other — isolation by construction, not by discipline.",
        detail: "This is the answer to \"why does `c.reset()` not reset `d`?\" — `c`’s methods close over invocation one’s `n`, `d`’s over invocation two’s: different variables that merely share a spelling."
      },
      {
        term: "Private state through closures",
        kind: "method",
        statement: "Because the environment is reachable **only** through the closures it captured, it is genuinely private: no property, reflection or debugger-free code outside can read or write it. This is the pre-class pattern for private state, and — combined with getters and setters — it enforces invariants the way `#` private fields do in Chapter 9.",
        detail: "```\nfunction counter(n = 0) {\n  return {\n    get count() { return n++; },\n    set count(m) {\n      if (m > n) n = m;\n      else throw new Error(\"count can only be set to a larger value\");\n    }\n  };\n}\n```\nThe parameter itself is the private variable — validated, invisible, and shared by both accessors."
      },
      {
        term: "The closure-in-a-loop pitfall",
        kind: "insight",
        statement: "Because closures capture **variables**, functions created in a loop over a `var` index all share the **single** `var` binding — after the loop it holds the final value, so every function reports it. `let` fixes this by creating a **fresh binding per iteration**, so each closure captures its own copy.",
        detail: "```\nlet fs = [];\nfor (var i = 0; i < 3; i++) fs[i] = () => i;\nfs.map(f => f()); // [3, 3, 3] — one shared var\n\nlet gs = [];\nfor (let j = 0; j < 3; j++) gs[j] = () => j;\ngs.map(f => f()); // [0, 1, 2] — a fresh let per iteration\n```\n\"Captured by reference\" cuts both ways: shared state when you want a counter, wrong state when you wanted snapshots."
      },
      {
        term: "Memoization",
        kind: "method",
        statement: "**Memoization** wraps a pure function with a closure-held cache: on each call the wrapper stringifies the arguments, returns a cached hit immediately, and otherwise computes, stores and returns. The cache is private to the wrapper — invisible to the caller, shared by every call of the wrapped function.",
        detail: "```\nfunction memoize(f) {\n  const cache = new Map();\n  return function (...args) {\n    let key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    let result = f.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n```\nThe technique pays off only for pure functions — side effects and call-dependent state do not survive being skipped."
      }
    ],
    examples: [
      {
        title: "Trace the engine: checkscope and uniqueInteger",
        problem: "First trace `checkscope()()` to see the environment outlive its call; then trace three calls of the IIFE-built `uniqueInteger` and the lifetime of its `counter`.",
        steps: [
          { label: "Step 1: The environments", text: "```\nlet scope = \"global scope\";\nfunction checkscope() {\n  let scope = \"local scope\";   // environment E1\n  function f() { return scope; } // f closes over E1\n  return f;\n}\n```\nGlobal environment holds `scope` (\"global scope\"); the call `checkscope()` creates environment E1 with its own `scope` and, inside it, the function `f`." },
          { label: "Step 2: The call that outlives its caller", text: "`checkscope()` returns `f` while E1 should end. But `f`’s reference to E1 keeps the entire environment alive: garbage collection stops at live references. Then `f()` executes **at global scope** yet resolves `scope` through E1 → `\"local scope\"`. Scope is lexical — where the function was **defined**." },
          { label: "Step 3: The IIFE factory", text: "```\nconst uniqueInteger = (function () {\n  let counter = 0; // private, permanent\n  return function () { return counter++; };\n})();\n```\nRead it in two beats: the outer function **ran immediately** (the trailing `()`), returning the inner function, which was assigned to `uniqueInteger`. Its `counter` lives on in the captured environment — one copy, forever." },
          { label: "Step 4: Three calls", text: "`uniqueInteger()` returns 0 (then `counter` becomes 1); the second call returns 1; the third returns 2. Post-increment: the value before the increment is what the caller sees, so the sequence is 0, 1, 2 — unique by construction." },
          { label: "Step 5: The privacy audit", text: "No global variable holds `counter`; no property of `uniqueInteger` exposes it; the only door is the returned function’s own body. This is genuine private state — and the pattern scales straight into the next example." }
        ],
        result: "`checkscope()()` → \"local scope\"; `uniqueInteger()` → 0, 1, 2 — environments survive exactly as long as some closure references them."
      },
      {
        title: "Trace the engine: counter() — shared private state, per-call independence",
        problem: "Trace `c` and `d`, two `counter()` products, through `c.count()`, `d.count()`, `c.reset()`, `c.count()`, `d.count()` — drawing the environments as you go.",
        steps: [
          { label: "Step 1: Two invocations, two environments", text: "```\nfunction counter() {\n  let n = 0;\n  return {\n    count() { return n++; },\n    reset() { n = 0; }\n  };\n}\nlet c = counter(); // environment E1: { n: 0 }\nlet d = counter(); // environment E2: { n: 0 }\n```\nE1 belongs to `c`’s methods, E2 to `d`’s. Different invocations never share bindings — the spelling `n` is identical, the variables are not." },
          { label: "Step 2: c.count() → 0", text: "The call runs in E1: `n++` evaluates to 0 and leaves `n` at 1 **in E1**. E2 is untouched — its `n` is still 0." },
          { label: "Step 3: d.count() → 0", text: "Same body, different environment: this `n++` reads E2’s 0, returns 0, sets E2’s `n` to 1. The two counters are counting independently — proof that `counter()` builds fresh state per call." },
          { label: "Step 4: c.reset() and the asymmetry", text: "`c.reset()` writes E1’s `n` back to 0. Then `c.count()` → 0 (E1 restarted). But `d.count()` → 1: E2 kept running through every line above. Reset c, never touched d — within one counter, `count` and `reset` share one environment; **across** counters, nothing is shared." },
          { label: "Step 5: The picture to keep", text: "```\nc  ---> [ count, reset ] --> environment E1: { n }\nd  ---> [ count, reset ] --> environment E2: { n }\n```\nEach product points its methods at one environment, and the environments point at nothing but their own `n`. Concretely, E1 ran 0 → 1 → (reset to 0) → 1; E2 ran 0 → 1 → 2 — the resets and increments of one counter are invisible to the other, always." }
        ],
        result: "0 (c), 0 (d, independent), reset c, then c.count() → 0 and d.count() → 1: shared within, isolated across — the defining behavior of closure state."
      },
      {
        title: "Trace the engine: memoize, with a cache ledger",
        problem: "Apply `memoize` to a naive Fibonacci and trace `fib(5)` filling the cache, then `fib(4)` answering from it.",
        steps: [
          { label: "Step 1: The memoized definition", text: "```\nconst fib = memoize(function (n) {\n  return n < 2 ? n : fib(n - 1) + fib(n - 2);\n});\n```\nThe recursion calls `fib` — the const binding — so **every recursive call goes through the cache-checking wrapper**. The cache closure is created once, when `memoize` runs." },
          { label: "Step 2: fib(5) — miss, then descend", text: "Key `\"[5]\"` is not in the cache, so the raw function runs and asks for `fib(4)` — wrapper again: miss, descend. The calls walk 4 → 3 → 2 → 1 (hit the base case, cache `\"[1]\"` = 1) and `fib(0)` (cache `\"[0]\"` = 0)." },
          { label: "Step 3: The unwind fills the cache", text: "`fib(2)` = `fib(1) + fib(0)` = 1 → cached. `fib(3)` = `fib(2)` (a **hit** now) + `fib(1)` (hit) = 2 → cached. `fib(4)` = `fib(3)` + `fib(2)` = 3 → cached. `fib(5)` = `fib(4)` + `fib(3)` = 5 → cached. Six entries, and every subproblem computed at most once — the exponential tree collapses to a chain." },
          { label: "Step 4: fib(4) — the hit", text: "Key `\"[4]\"` is present: the wrapper returns `cache.get(\"[4]\")` = 3 **without ever calling the raw function**. O(1) instead of a recursive re-descent — this is the payoff." },
          { label: "Step 5: The closure accounting", text: "The cache lives in `memoize`’s captured environment — created at definition, shared by every call, reachable by no one else. `memoize` works only because `fib` is pure (Section 8.7): a function that logged or advanced a counter would skip those effects on cache hits, silently changing behavior." }
        ],
        result: "`fib(5)` fills the cache `{0:0, 1:1, 2:1, 3:2, 4:3, 5:5}` on its single descent; `fib(4)` returns 3 instantly — closure-held state turning exponential recursion into linear."
      }
    ],
    keyTakeaways: [
      "Lexical scoping: functions run in the scope where they were defined, not where they are invoked.",
      "A closure is a function plus its captured variable environment; all functions are closures, but the useful ones escape their defining scope.",
      "Closures capture variables by reference: mutations are visible, and siblings share one binding.",
      "Each invocation creates a fresh environment — two factory calls produce independent private states.",
      "Closures give real privacy: state reachable only through the functions that captured it.",
      "Loop pitfall: `var` gives one shared binding (all closures see the final value); `let` gives one per iteration.",
      "Memoization wraps a pure function with a closure-held cache — misses compute, hits return instantly."
    ],
    quiz: [
      {
        q: "The essence of lexical scoping is that a function resolves its free variables using the scope:",
        options: [
          "in which it is invoked",
          "in which it was defined",
          "of the global object always",
          "chosen by the caller at invocation time"
        ],
        answer: 1,
        explanation: "The variable bindings come from where the function appears in the source text — checkscope()() sees the outer call’s local even when invoked globally."
      },
      {
        q: "After `let c = counter(), d = counter();` calling `c.reset()` affects `d`:",
        options: [
          "always — they share the variable n",
          "never — each invocation of counter created its own environment",
          "only if reset is called first",
          "only when arrows are used"
        ],
        answer: 1,
        explanation: "Every call of counter creates a new environment; c’s methods and d’s methods close over different n bindings, so no call on one can touch the other."
      },
      {
        q: "Functions created in a loop over `var i = 0; i < 3; i++` and called after the loop all return:",
        options: ["0, 1, 2 respectively", "3 — they share the one var binding", "undefined", "2, 1, 0"],
        answer: 1,
        explanation: "var hoists a single binding for the whole loop; every closure captured that same variable, which ends the loop at 3. With let, each iteration gets a fresh binding and the closures return 0, 1, 2."
      },
      {
        q: "In the memoize pattern, the cache is:",
        options: [
          "a global variable so all callers can clear it",
          "a property of the wrapped function",
          "private state in memoize’s closure, shared by all calls of the wrapper",
          "recreated on every call"
        ],
        answer: 2,
        explanation: "The Map lives in memoize’s captured environment: invisible from outside, created once at wrapping time, and consulted by every call through the wrapper."
      },
      {
        q: "Closures are described as capturing variables rather than values because:",
        options: [
          "they copy each value at definition time",
          "they hold references to the bindings, so later mutations are visible through them",
          "variables cannot be captured at all",
          "values are copied at invocation time"
        ],
        answer: 1,
        explanation: "The capture is of the binding itself — which is exactly why counter’s count and reset share one n, and why the loop pitfall produces shared final values."
      },
      // Placement-pattern: closures over var loop bindings — deferred callbacks (original)
      {
        q: "What does this program print?\n```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```",
        options: ["`0`, `1`, then `2`", "`3`, `3`, then `3`", "`0`, `0`, then `0`", "Nothing, because the callbacks never run"],
        answer: 1,
        explanation: "Step 1: The code given registers three timer callbacks inside a `var` loop and finishes the loop first. Step 2: The governing rules are that `var` creates one function-scoped binding shared by all iterations, that each arrow function closes over that single binding rather than over a snapshot value, and that timers run only after the synchronous loop completes. Step 3: Tracing phase by phase, the loop advances the shared `i` from 0 to 3 while queueing three callbacks, then each callback reads the same binding, now holding `3`, so all three print `3`. Step 4: The distractors fail because per-iteration values would need the block-scoped `let` form, and queued timers do run once the call stack clears. Step 5: Therefore the output is `3` three times."
      }
    ]
  },

  // ---------------------------------------------------------------- 8.6
  {
    sectionId: "js-ch8-s6",
    readingTime: 8,
    intro: "Functions are objects, so they have properties (`name`, `length`, `prototype`) and methods (`call`, `apply`, `bind`, `toString`) and even a constructor — the `Function()` constructor that compiles a function from strings and that you should almost never use. This section works the properties and the invocation-choosing trio, with `bind` doing double duty as the partial-application engine.",
    objectives: [
      "Read the name and length properties and their rules",
      "Invoke with an explicit receiver via call and apply",
      "Build bound and partially applied functions with bind",
      "Explain why the Function() constructor is avoided",
      "Borrow methods from unrelated objects"
    ],
    concepts: [
      {
        term: "The length property",
        kind: "definition",
        statement: "**`f.length`** is the function’s **arity**: the number of parameters declared **before the first default value or rest parameter** — the count of arguments the function *requires*. It powers arity dispatch checks and API introspection; it does not include optional or collected parameters.",
        detail: "```\nfunction f(a, b = 1, ...rest) {}\nf.length; // 1 — b has a default, rest is rest\nfunction g(a, b) {}\ng.length; // 2\n```"
      },
      {
        term: "The name property",
        kind: "definition",
        statement: "**`f.name`** is the function’s name string, used in stack traces and debuggers. It is usually the declared name — but the specification also **infers** names for anonymous assignments: `let square = function () {};` yields the name `\"square\"`, and the same inference applies to arrow functions bound to variables and to object shorthand methods.",
        detail: "```\nfunction declared() {}\nconst anonymous = function () {};\nconst arrow = x => x;\ndeclared.name;   // \"declared\"\nanonymous.name; // \"anonymous\" — inferred from the binding\narrow.name;     // \"arrow\"\n({ m() {} }).m.name; // \"m\"\n```\nThe property is metadata for humans and tools — assigning to it changes nothing about how the function can be called."
      },
      {
        term: "The prototype property",
        kind: "definition",
        statement: "Every non-arrow function has a **`prototype`** property: an object whose purpose is to become the prototype of instances created when the function runs as a **constructor** with `new`. This single property links Chapter 8 to Chapter 9 — classes are constructor functions whose methods live on `this.prototype`.",
        detail: "```\nfunction Range(from, to) { this.from = from; this.to = to; }\nRange.prototype.includes = function (x) {\n  return this.from <= x && x <= this.to;\n};\nnew Range(1, 3).includes(2); // true — method found via the prototype\n```\nArrow functions cannot be constructors and carry no `prototype` — one more reason arrows and `new` never mix."
      },
      {
        term: "call() and apply()",
        kind: "method",
        statement: "**`f.call(receiver, ...args)`** invokes `f` with `this` set to `receiver` and the listed arguments; **`f.apply(receiver, argsArray)`** does the same with the arguments supplied as an array. Historically `apply` was how a variadic array of arguments reached a fixed-arity function — since ES6, **spread at the call site** (`f.call(o, ...args)`, or just `f(...args)`) has erased most of that need.",
        detail: "```\nfunction greet(name) { return `${this.honorific} ${name}`; }\nlet knight = { honorific: \"Ser\" };\ngreet.call(knight, \"Gregor\");     // \"Ser Gregor\"\ngreet.apply(knight, [\"Gregor\"]); // \"Ser Gregor\"\n```\nA classic use: `Object.prototype.toString.call([])` → `\"[object Array]\"` — borrowing the type-revealing toString from the root prototype (Section 9.4 leans on the same idea)."
      },
      {
        term: "bind() and partial application",
        kind: "method",
        statement: "**`f.bind(receiver, ...preset)`** returns a **new function** that, when called, runs `f` with `this` fixed to `receiver` and the `preset` arguments placed **before** whatever arguments the new call supplies — **partial application**. The binding is permanent: a later `call`, `apply` or even `bind` cannot retarget `this`.",
        detail: "```\nfunction f(y, z) { return this.x + y + z; }\nlet g = f.bind({ x: 1 });\nlet h = g.bind({ x: 2 }); // this cannot be re-bound\ng(2, 3); // 6\nh(2, 3); // 6 — still x: 1\nlet p = f.bind({ x: 1 }, 2); // y is pre-filled\np(3);    // 6\n```\n`bind` is the standard cure for the detached-method bug of Section 8.2 — the receiver travels with the function forever."
      },
      {
        term: "The Function() constructor",
        kind: "insight",
        statement: "**`new Function(args..., body)`** builds a function at run time from **string** arguments (`new Function(\"x\", \"y\", \"return x + y\")`). Two reasons to avoid it: the compiled function runs in **global scope only** — it closes over nothing, so it cannot see your local variables (even though it is literally created inside your code) — and building code from strings is a standing invitation for injection and the death of tooling.",
        detail: "```\nlet scope = \"local\";\nconst f = new Function(\"return scope;\");\nf(); // ReferenceError — no closure over your scope\n```\nHistorically it served template compilers and runtime evaluation; today `Function` constructors appear in XSS write-ups more than in programs. Prefer closures — which capture — over string evaluation, which cannot."
      },
      {
        term: "Function toString",
        kind: "method",
        statement: "**`f.toString()`** returns the function’s source text (implementation-defined in format but required to be a valid function definition). Useful for logging and inspection — and for metaprogramming trickery (Chapter 14 uses it in memoization caches keyed by function identity in some libraries).",
        detail: "```\n(() => 1).toString(); // \"() => 1\"\n```\nBuilt-ins may return a placeholder like `\"function toString() { [native code] }\"` — the native-code marker."
      }
    ],
    examples: [
      {
        title: "Trace the engine: bind — receiver first, then arguments",
        problem: "Given `function f(y, z) { return this.x + y + z; }` trace `f.bind({x: 1})`, a second bind on the result, and `f.bind({x: 1}, 2)` — every call and every value.",
        steps: [
          { label: "Step 1: The base function", text: "`f` reads `this.x` and two parameters. Called bare it is a function-form invocation (Section 8.2) — undefined receiver, and `this.x` throws in strict mode. Everything below fixes that by construction." },
          { label: "Step 2: Bind the receiver", text: "```\nlet g = f.bind({ x: 1 });\ng(2, 3); // 6\n```\nThe call `g(2, 3)` runs `f` with `this` = `{ x: 1 }`, `y` = 2, `z` = 3 → `1 + 2 + 3` = 6." },
          { label: "Step 3: The unbreakable binding", text: "```\nlet h = g.bind({ x: 2 });\nh(2, 3); // 6 — NOT 7\n```\n`this` was already bound when `g` was created; a second `bind` (or a `call`) cannot overwrite it. Only the **first** receiver sticks — `h` still sees `x: 1`." },
          { label: "Step 4: Partial application", text: "```\nlet p = f.bind({ x: 1 }, 2);\np(3); // 6\n```\nNow `y` is pre-filled with 2: the new call needs only the remaining argument, which arrives as `z` = 3 → `1 + 2 + 3` = 6. Preset arguments queue ahead of call-time arguments, however many of each." },
          { label: "Step 5: Where the pattern pays", text: "Partial application is how a general function becomes a specialized one: from `pow(base, exp)` you can pre-bake `square = pow.bind(null, 2)`-style helpers (with `this` irrelevant here) — the functional toolkit of Section 8.7 is built on exactly such transformations." }
        ],
        result: "6, 6 (the second bind could not retarget this), and 6 via the partially applied `p` — bind fixes the receiver first and presets arguments ahead of the caller’s."
      },
      {
        title: "Trace the engine: borrowing a method with call",
        problem: "Use `Object.prototype.toString.call` to reveal the real class of an array and of `null`, and explain why `call` is needed rather than a plain method call.",
        steps: [
          { label: "Step 1: The wrong tool fails quietly", text: "`[1, 2].toString()` → `\"1,2\"` — arrays override `toString` with a join, so the generic type-tagging version on `Object.prototype` never runs. The override hides exactly the information we want." },
          { label: "Step 2: Call it directly", text: "```\nObject.prototype.toString.call([1, 2]); // \"[object Array]\"\nObject.prototype.toString.call(null);    // \"[object Null]\"\nObject.prototype.toString.call(/x/);     // \"[object RegExp]\"\n```\nThe receiver we want is the array — but we want to run the *base* method, not the override. `call` executes `Object.prototype`’s function with `this` bound to our value, sidestepping the override entirely." },
          { label: "Step 3: Why this works", text: "`Object.prototype.toString` reads `this`’s internal class tag and builds the `\"[object X]\"` string. Method-form invocation on the array would dispatch to `Array.prototype.toString`; `call` chooses **which function object** runs, and separately **what receiver** it sees — two decisions the dot notation bundles into one." },
          { label: "Step 4: apply, the array form", text: "`f.apply(o, [1, 2])` ≡ `f.call(o, 1, 2)`: with arguments already in an array (say, accumulated in a loop), `apply` delivers them in one piece. Since spread, `f.call(o, ...args)` reads the same and needs no separate form." },
          { label: "Step 5: The idiom in the wild", text: "Borrowing shows up everywhere: `Array.prototype.slice.call(arguments)` (the old array-like converter), `Math.max.apply(null, values)` before spread (`Math.max(...values)` now) — the general shape is \"run function F with receiver R and args A\", which is precisely rows of the Section 8.2 table." }
        ],
        result: "`\"[object Array]\"` and `\"[object Null]\"` — `call` decouples which function runs from who receives it, letting you borrow base implementations over derived overrides."
      },
      {
        title: "Trace the engine: introspecting name and length",
        problem: "Predict `f.length`, `g.name`, `h.length` and `k.name` for the four definitions below, and one call through the `Function()` constructor to show what it cannot see.",
        steps: [
          { label: "Step 1: The definitions", text: "```\nfunction f(a, b = 1, ...rest) { return a + b; }\nconst g = function () {};\nconst h = (x, y) => x + y;\nconst k = f.bind(null);\n```" },
          { label: "Step 2: f.length — the arity rule", text: "`f` declares three parameters, but `length` counts only those **before** the first default or rest: `f.length` is 1. The signature’s required-argument count is the number that matters to callers." },
          { label: "Step 3: g.name and h — inference", text: "`g.name` is `\"g\"` — the anonymous function expression picked up the variable name. `h.length` is 2 (two plain parameters) and `h.name` is `\"h\"` — the same inference for arrows." },
          { label: "Step 4: k — the bound twin", text: "`k.name` is `\"bound f\"` — bound functions advertise their origin — and `k.length` is 0 or less the preset count (binding no arguments here, it still reflects `f`’s 1). The metadata chain survives the transformation." },
          { label: "Step 5: The constructor that sees nothing", text: "```\nlet local = \"visible\";\nconst evil = new Function(\"return local;\");\nevil(); // ReferenceError: local is not defined\n```\nThe `Function` constructor compiles in **global scope**: no closure over `local`, no matter where the construction line sits. Between that and string-injection risk, the constructor earns its \"avoid\" label — closures (Section 8.5) capture; string compilation cannot." }
        ],
        result: "`f.length` 1; `g.name` \"g\"; `h.length` 2; `k.name` \"bound f\" — and the `Function()` constructor throws the ReferenceError that proves it runs scope-blind."
      }
    ],
    keyTakeaways: [
      "`f.length` counts parameters before the first default or rest — the required-argument count.",
      "`f.name` is the declared name, or inferred from the binding for anonymous functions and arrows.",
      "Every non-arrow function has a `prototype` property used by `new` — the bridge into Chapter 9.",
      "`call(receiver, ...args)` and `apply(receiver, array)` invoke with an explicit receiver; spread has absorbed most of apply’s old job.",
      "`bind(receiver, ...preset)` returns a permanently bound, partially applied function — and cannot be re-bound.",
      "Avoid `new Function(...)`: global scope only (no closures), string-based code, injection risk.",
      "`toString()` on a function returns (approximate) source text; built-ins show a native-code placeholder."
    ],
    quiz: [
      {
        q: "For `function f(a, b = 1, ...rest) {}` what is `f.length`?",
        options: ["3", "2", "1", "0"],
        answer: 2,
        explanation: "Arity counts only the parameters before the first default value or rest parameter — here just a."
      },
      {
        q: "`let p = f.bind(obj, 1);` — calling `p(2, 3)` invokes `f` as:",
        options: [
          "f(2, 3) with this = obj",
          "f(1, 2, 3) with this = obj — preset arguments come first",
          "f(1) with this = obj",
          "f(2, 3) with this = undefined"
        ],
        answer: 1,
        explanation: "bind presets arguments ahead of the call-time ones and fixes the receiver: the invocation becomes f with this = obj and arguments 1, 2, 3."
      },
      {
        q: "Which statement about `g = f.bind(obj)` is true?",
        options: [
          "g.call(other) retargets this to other",
          "this in g is permanently obj — further bind or call cannot change it",
          "g is the same function object as f",
          "g loses its parameters"
        ],
        answer: 1,
        explanation: "The receiver is baked in at bind time; the first binding wins over every later attempt to retarget, which is exactly why bind fixes the detached-method bug."
      },
      {
        q: "The `Function()` constructor is discouraged chiefly because its products:",
        options: [
          "cannot have parameters",
          "run in global scope with no closure over local variables, and are built from strings",
          "are always asynchronous",
          "cannot return values"
        ],
        answer: 1,
        explanation: "A Function-constructed function closes over nothing but global scope — invisible to your locals — and string-assembled code defeats tools and invites injection."
      }
    ]
  },

  // ---------------------------------------------------------------- 8.7
  {
    sectionId: "js-ch8-s7",
    readingTime: 10,
    intro: "Treating functions as the primary unit of composition changes how you process data: instead of loops that mutate accumulators, you build **pipelines** — `map` to transform, `filter` to select, `reduce` to collapse — over arrays of records. This section works the book’s canonical data analysis (mean and standard deviation), pure functions and why they are worth writing, and composition as the assembly language of pipelines.",
    objectives: [
      "Process arrays declaratively with forEach, map, filter and reduce",
      "Compute statistics with a reduce/map pipeline, step by step",
      "Define pure functions and state their practical advantages",
      "Compose functions into new functions and understand data flow direction",
      "Recognize when the functional style is a poor fit"
    ],
    concepts: [
      {
        term: "Processing arrays with functions",
        kind: "method",
        statement: "The chapter’s array-processing trio, in pipeline order: **`forEach`** runs a function for side effects over each element; **`map`** transforms elements into a new array; **`filter`** selects a subarray; **`reduce`** collapses to a single value. Each takes a function and applies it — the data stays passive, the *behavior* is the argument.",
        detail: "```\nlet data = [1, -2, 3, -4, 5];\ndata.forEach(x => console.log(x));       // side effects\ndata.filter(x => x > 0);                 // [1, 3, 5]\ndata.map(x => x * x);                    // [1, 4, 9, 16, 25]\ndata.reduce((a, b) => a + b, 0);         // 3\n```\nThe full method catalog, worked example by worked example, is Section 7.4 — this section is about the *style* those methods enable."
      },
      {
        term: "Pure functions",
        kind: "definition",
        statement: "A **pure function** has no side effects and depends on nothing but its arguments: same inputs, same output, every time — `x => x * x` is pure; anything that logs, mutates outside state, reads the clock or network, or throws nondeterministically is not. Purity is what makes a function testable, cacheable (Section 8.5’s memoize), safely reorderable and trivially parallelizable.",
        detail: "```\nconst pureArea = r => Math.PI * r * r;      // same r, same answer\nlet calls = 0;\nconst loudArea = r => { calls++; return pureArea(r); }; // impure\n```\n`Math.random()` and `Date.now()` are pure *impurity* — the standard library’s own reminder that not everything can be a pure function."
      },
      {
        term: "reduce as the universal fold",
        kind: "method",
        statement: "Beyond sums, `reduce` expresses any \"array in, one value out\" computation: maxima, averages, flattening, grouping into a Map, reversing (with `unshift`), building trees. The two things to decide are the **initial accumulator** (whose type is the result type) and the **combining step** — everything else is bookkeeping the method does for you.",
        detail: "```\n// average as one reduce:\nconst mean = a => a.reduce((s, v) => s + v, 0) / a.length;\n// grouping into a Map:\nconst groupBy = (a, keyFn) =>\n  a.reduce((m, v) => (m.set(keyFn(v), v), m), new Map());\n```\nThe grouping pattern — \"return the accumulator itself after each step\" — is the idiom to internalize."
      },
      {
        term: "Composition",
        kind: "method",
        statement: "**Composition** builds a new function from two: `(f ∘ g)(x) = f(g(x))`, or in code `const compose = (f, g) => (x) => f(g(x))`. Composed pipelines read **right to left** (innermost first); many codebases define the flipped `pipe = (f, g) => (x) => g(f(x))` so the stages read in execution order. Either way, composition is function-as-value doing its most structured work.",
        detail: "```\nconst compose = (f, g) => (x) => f(g(x));\nconst square = (x) => x * x;\nconst halve = (x) => x / 2;\nconst halfOfSquare = compose(halve, square); // halve(square(x))\nhalfOfSquare(6); // 18\n```\nThe returned arrow is a closure over `f` and `g` — composition is a direct application of Section 8.5."
      },
      {
        term: "Pipelines over records",
        kind: "method",
        statement: "Real functional style in this book runs over **arrays of records**: filter to a subset, map to a projection, reduce to an aggregate — each stage a pure function, the original data untouched, each intermediate array inspectable in a debugger or test.",
        detail: "```\nlet records = [\n  { name: \"a\", value: 1 },\n  { name: \"b\", value: 2 },\n  { name: \"c\", value: 3 }\n];\nrecords.filter(r => r.value > 1)\n       .map(r => r.value * 10)\n       .reduce((a, b) => a + b, 0); // 50\n```\nCompare with the same computation as one loop: identical result, but the pipeline names its stages, and each stage is reusable and testable in isolation."
      },
      {
        term: "When not to go functional",
        kind: "insight",
        statement: "The style has costs: every `map`/`filter` stage allocates an intermediate array (hot inner loops may want the single classic `for`), and deeply chained pipelines can obscure as easily as they clarify. The book’s own advice is pragmatic — use the functional forms wherever clarity wins, drop to a loop when profiling or plain readability says otherwise.",
        detail: "One rule keeps you out of most trouble: keep the **stages** pure even when the program is not — a pipeline whose links are pure functions can be reordered, cached and tested; one that mutates shared state mid-chain has none of those properties."
      }
    ],
    examples: [
      {
        title: "Trace the engine: mean and standard deviation as a pipeline",
        problem: "Given `data = [1, 1, 3, 5, 5]`, compute the mean and the sample standard deviation entirely with `reduce` and `map` — and lay out every intermediate array.",
        steps: [
          { label: "Step 1: The sum and the mean", text: "```\nlet data = [1, 1, 3, 5, 5];\nlet sum = (x, y) => x + y;\nlet total = data.reduce(sum);  // 15 — first element seeds, fold the rest\nlet mean = total / data.length; // 3\n```\n`reduce(sum)` folds 1+1+3+5+5 = 15; dividing by the count of 5 gives the mean 3." },
          { label: "Step 2: The deviations", text: "```\nlet deviations = data.map(x => x - mean); // [-2, -2, 0, 2, 2]\n```\n`map` produces one new array — same length, each element the distance from the mean. The original `data` is untouched throughout this example." },
          { label: "Step 3: Squares and variance", text: "```\nlet squares = deviations.map(x => x * x); // [4, 4, 0, 4, 4]\nlet variance = squares.reduce(sum) / (data.length - 1); // 16 / 4 = 4\n```\nNote the classic statistics detail: the sample variance divides by n − 1, not n — the pipeline encodes the formula, so the formula’s details are on display." },
          { label: "Step 4: The standard deviation", text: "```\nlet stddev = Math.sqrt(variance); // 2\n```\nFor this textbook data the answer is exactly 2 — a tidy check that the whole pipeline ran correctly." },
          { label: "Step 5: One expression, all stages", text: "```\nlet s = Math.sqrt(\n  data.map(x => x - mean).map(x => x * x).reduce(sum) / (data.length - 1)\n);\n```\nThe nested form shows the shape of the computation — transform, transform, collapse — which is the readable skeleton the book uses whenever it analyzes data." }
        ],
        result: "total 15 → mean 3 → deviations [-2,-2,0,2,2] → squares [4,4,0,4,4] → variance 4 → **stddev = 2**, with no loop counters and no mutated inputs."
      },
      {
        title: "Trace the engine: composition, right to left",
        problem: "Build `halfOfSquare = compose(halve, square)` and `squareOfHalf = compose(square, halve)`, call both on 6, and show exactly which stage runs first.",
        steps: [
          { label: "Step 1: The combinator", text: "```\nconst compose = (f, g) => (x) => f(g(x));\n```\n`compose` is a higher-order function returning a closure over its two function arguments — Section 8.4’s \"functions as return values\" doing structural work." },
          { label: "Step 2: The stages", text: "```\nconst square = (x) => x * x;\nconst halve = (x) => x / 2;\n```" },
          { label: "Step 3: halfOfSquare(6)", text: "`compose(halve, square)` — the returned function computes `halve(square(6))`: the **rightmost** stage runs first. `square(6)` = 36, then `halve(36)` = 18." },
          { label: "Step 4: squareOfHalf(6)", text: "`compose(square, halve)` computes `square(halve(6))`: `halve(6)` = 3, then `square(3)` = 9. Same two functions, same input, different assembly order — 18 versus 9, entirely from the argument order." },
          { label: "Step 5: Reading direction and pipes", text: "Because composition applies right-to-left, pipeline-style codebases often flip it: `const pipe = (f, g) => (x) => g(f(x));` then `pipe(square, halve)(6)` = 18 reads \"square, then halve\" — execution order on the page. Both are the same idea: naming the **assembly** of functions separately from the functions themselves." }
        ],
        result: "`halfOfSquare(6)` = 18 (square first), `squareOfHalf(6)` = 9 (halve first) — the argument order of compose is the execution order, read right to left (or left to right with a pipe)."
      },
      {
        title: "Trace the engine: pure versus impure under memoize",
        problem: "Wrap a pure and an impure area function in the Section 8.5 `memoize` and show which one memoizes correctly — and exactly what the impure one loses.",
        steps: [
          { label: "Step 1: The two candidates", text: "```\nconst pureArea = (r) => Math.PI * r * r;\nlet calls = 0;\nconst loudArea = (r) => { calls++; return pureArea(r); };\n```\n`pureArea(2)` is `12.566...` on every call forever; `loudArea` additionally increments an external counter — its side effect is part of its contract." },
          { label: "Step 2: Memoize the pure one", text: "```\nconst mArea = memoize(pureArea);\nmArea(2); // computes, caches \"[2]\"\nmArea(2); // cache hit — same value, instantly\n```\nBoth calls return the identical number, and nothing in the world changed between them — the cache is invisible, exactly as intended." },
          { label: "Step 3: Memoize the impure one", text: "```\nconst mLoud = memoize(loudArea);\nmLoud(2); // calls becomes 1\nmLoud(2); // cache hit — calls stays 1!\n```\nThe second call never reaches `loudArea`, so the counter does not advance: memoization silently **deleted the side effect**. The returned number is right; the world is wrong." },
          { label: "Step 4: The boundary", text: "The failure generalizes: any result that depends on global state, randomness, the clock or mutable inputs becomes stale or skipped when cached. Purity is not aesthetic — it is the precondition for every \"same input, same behavior\" optimization (memoize, React render caching, test doubles)." },
          { label: "Step 5: The pragmatic split", text: "Real programs are impure at the edges (I/O, UI, network) and pure in the middle (transforms, selections, folds). Push the pure core outward and the functional toolkit of this section applies to everything it touches." }
        ],
        result: "The pure memoizes perfectly; the impure one loses its side effect on the second call — `calls` counts 1 instead of 2 — because memoize assumes what purity promises."
      }
    ],
    keyTakeaways: [
      "The pipeline toolkit: `forEach` for side effects, `map` to transform, `filter` to select, `reduce` to collapse.",
      "Pure functions (same inputs → same outputs, no side effects) are testable, reorderable and cacheable.",
      "`reduce` generalizes to any array-to-value computation — the accumulator type is the result type.",
      "Composition `(f, g) => x => f(g(x))` assembles new functions; arguments read right to left (pipes read left to right).",
      "Statistics pipelines make formulas inspectable: mean 3, deviations, squares, variance 4, stddev 2 on the book’s data.",
      "Keep stages pure even when the program is not — and drop to a loop when allocation or clarity demands it."
    ],
    quiz: [
      {
        q: "For `data = [1, 1, 3, 5, 5]`, the pipeline `data.map(x => x - 3).map(x => x * x).reduce((a, b) => a + b)` yields:",
        options: ["10", "16", "4", "15"],
        answer: 1,
        explanation: "Deviations are [-2,-2,0,2,2]; squares are [4,4,0,4,4]; their sum is 16 — the numerator of the sample variance computed in two maps and a reduce."
      },
      {
        q: "`compose(halve, square)(6)` evaluates to:",
        options: ["9", "18", "36", "3"],
        answer: 1,
        explanation: "compose applies its arguments right to left: square(6) = 36, then halve(36) = 18."
      },
      {
        q: "A pure function is one that:",
        options: [
          "contains no conditional statements",
          "returns the same output for the same inputs and causes no side effects",
          "uses only arrow syntax",
          "never throws"
        ],
        answer: 1,
        explanation: "Purity is determinism plus side-effect freedom — the two properties that make testing, reordering and memoization safe."
      },
      {
        q: "Why does memoizing an impure function change program behavior?",
        options: [
          "the cache converts functions to strings",
          "cache hits skip the call — and with it any side effect the function would have performed",
          "impure functions cannot be called",
          "the cache is shared globally"
        ],
        answer: 1,
        explanation: "A memoized wrapper returns the stored result without invoking the wrapped function, so logging, counters or state changes that would have run are silently skipped on hits."
      }
    ]
  }
]
