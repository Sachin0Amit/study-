import type { SectionContent } from '../library'

// ============================================================================
// Flanagan, JavaScript: The Definitive Guide, 7th Edition
// Chapter 1: Introduction to JavaScript (Sections 1.1 – 1.3)
// Master study content.
// ============================================================================

export const jsCh1Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'js-ch1-s1',
    depth: [
      {
        tier: 'masters',
        title: 'ECMA-262 from the inside: the spec as a machine',
        blocks: [
          {
            kind: 'para',
            body: '“What JavaScript is” has a precise answer: the language is whatever the current **ECMA-262** specification says it is, and that document is an executable mathematical text, not descriptive prose. Its skeleton is a pair of context-free **grammars** — a lexical grammar producing tokens, a syntactic grammar assembling them into programs — linked by **productions** such as `AdditiveExpression : AdditiveExpression + MultiplicativeExpression`, with early-error rules rejecting the invalid parses outright. On that skeleton, every construct is given meaning by an **algorithm** in spec pseudocode: numbered, deterministic steps over mathematical values, with shared subroutines — the **abstract operations** like `ToPrimitive`, `ToString` and `OrdinaryCreateFromConstructor` — factored out like a function library. Since 2015 the standard is **living**: one edition per year, so the names ES2016 through ES2020 met earlier are snapshots, each frozen only for citation. Conformance is measured by **Test262**, a suite of tens of thousands of tests that turns the pseudocode into pass and fail verdicts for every engine.',
          },
          {
            kind: 'derivation',
            heading: 'Completion records: control flow as algebra',
            body: 'The spec’s control flow is algebra, not jumps. Every statement evaluates to a **Completion Record** — a triple $C = (\\textit{type}, \\textit{value}, \\textit{target})$ whose type is one of $\\text{normal}, \\text{break}, \\text{continue}, \\text{return}$ or $\\text{throw}$; a following statement executes only if the record it receives is normal, and a function call is abrupt exactly when its body finishes with a non-normal record. The `try`/`finally` rule is then a single line. Let $C$ be the try block’s completion and $F$ the finally block’s: $$F = \\text{normal} \\Rightarrow \\text{result} = C \\qquad F \\neq \\text{normal} \\Rightarrow \\text{result} = F$$ The classic trap now explains itself: a `return` inside `finally` manufactures a return record that replaces whatever the try block produced — including a pending `throw`.\\n\\n```js\\nfunction f() {\\n  try { throw new Error("lost"); }\\n  finally { return 42; }\\n}\\n```\\n\\nThe call `f()` evaluates to 42, the `Error` object becomes unreachable garbage, and no uncaught exception is ever reported — the specification’s rule, identical in every conforming engine, not an implementation accident.',
          },
          {
            kind: 'para',
            body: 'Each adjective from this section’s opening maps onto spec machinery. **Dynamic** and **untyped** mean types attach to values, never to variables: bindings are just entries in environment records, and every operator dispatches on what its operands are, with the coercions (`ToPrimitive`, `ToNumber`) defined operation by operation — which is why `"3" * "2"` is 6 while `"3" + "2"` is `"32"`, an asymmetry the next section derives from the algorithm itself. **Prototype-based inheritance** is the `[[Get]]` internal method: reading `book.topic` probes the object’s own slots, then follows the `[[Prototype]]` chain upward until it bottoms out at null. **First-class functions** is one internal slot: functions are ordinary objects carrying `[[Call]]`, and that slot is the entire reason they can be stored in variables, passed as arguments and returned from calls. **Multiparadigm**, finally, is a consequence rather than a feature: closures, higher-order functions and delegation together make both the functional and object-oriented idioms of this chapter’s tour library-level conventions over one small core.',
          },
          {
            kind: 'para',
            body: 'The spec’s deepest abstraction is the set of **internal methods** — `[[Get]]`, `[[Set]]`, `[[DefineOwnProperty]]`, `[[GetPrototypeOf]]`, `[[Call]]`, `[[Construct]]`, roughly thirteen in all — that every object must support. Read carefully, this is a **meta-object protocol**: the language’s own object semantics are exposed as an interface, which is precisely what makes ES6’s `Proxy` possible. A proxy is an object whose internal methods are redirected to user-written traps, so `new Proxy(target, handler)` interposes arbitrary behavior — laziness, access logging, revocation, virtual properties — beneath unchanged surface syntax; the handler’s `get` trap literally becomes `[[Get]]`. The `Reflect` namespace is the protocol’s mirror: one reflective function per internal method, exposing the default behavior ordinary objects get for free. The tooling you already use is built on this — test mocks, security membranes and the reactive getters of modern frameworks are all trap tables plugged into the spec’s own object model.',
          },
          {
            kind: 'application',
            heading: 'Reading the spec like an engineer',
            body: 'The master-level skill this book quietly trains is consulting the document directly. When two engines disagree, or a corner case surfaces — is `Array.prototype.sort` stable, what does `await` do inside a `for` loop, in what order do class fields initialize — the algorithm clauses decide, and engineers on the engine teams file bugs by clause number. **Test262** encodes those algorithms as tens of thousands of runnable tests and gates every release of V8, SpiderMonkey, JavaScriptCore and smaller engines like QuickJS; per-feature conformance statistics are public. This shared arbiter is also why feature detection works at all: the same `Proxy` trap or completion-record subtlety behaves identically across hosts that share no other code, and a language lawyer with the spec bookmarked can predict, before running anything, exactly what the `f()` from the derivation above must return.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'The quest for a formal semantics of JavaScript',
        blocks: [
          {
            kind: 'para',
            body: 'Folklore once held that JavaScript was **unsemanticable** — too accidental, too coercive, too mutable for formal study. The landmark rebuttal was $\\lambda_{JS}$ (Guha, Saftoiu and Krishnamurthi, “The Essence of JavaScript”, ECOOP 2010, distributed as Brown PLT’s `jssem`): a **desugaring** that translates full JavaScript into a small **core calculus** with a small-step operational semantics — references, closures, one uniform object model — so that theorems about the calculus lift to the language through a proved translation. The payoff was immediate: an executable interpreter for $\\lambda_{JS}$, differentially tested against the real engines, surfaced a long list of behavioral divergences among them, and the calculus became the substrate for type systems, equivalence reasoning and analyses that could never have been stated over raw ECMAScript. The method is the lasting lesson: do not model the surface syntax — desugar, then reason.',
          },
          {
            kind: 'para',
            body: 'Two successor lines pushed coverage and rigor further. Politz and colleagues’ “A Tested Semantics for Getters, Setters, and Eval in JavaScript” (DLS 2012) extended the core to the genuinely hostile features — accessor properties and `eval` — and validated it by generating large volumes of small random programs and comparing the semantics against shipping browsers, a methodology that caught real interpreter bugs in the process: semantics as a testing oracle rather than a paper artifact. Park, Stefanescu and Rosu’s **KJS** (PLDI 2013) defined essentially all of ES5 in the **K framework**, whose rewriting semantics is executable, and used it to systematically diff engines against the formal definition. And **JSCert** (Bodin, Gardner, Jensen, Schmitt and Tiu, “A trusted mechanised JavaScript specification”, ICFP 2013) mechanized an ES5 subset in Coq with **JSRef**, a reference interpreter extracted from the development — the JavaScript analogue of CompCert and Frama-C: an artifact sound **by construction**, not by testing.',
          },
          {
            kind: 'para',
            body: 'Why do analyzers despair specifically at `eval` and `with`? Because each breaks a different assumption of static reasoning. `with (o)` redefines name resolution: every free identifier in the block becomes a property lookup on `o`, so whether `x` means `o.x` depends on the runtime contents of a mutable object — even scoping is no longer statically computable. Direct `eval` executes in the caller’s lexical environment and can inject, shadow or capture bindings, so any precise analysis of a function containing a free `eval` must model every string the program could ever construct — undecidable in practice, and undecidable in interesting ways. The object-capability community’s answer was amputation: SES (Secure ECMAScript) removes these features so that static capability analysis becomes possible, and confinement tools such as JSand build sandboxing on the disciplined remainder. Strict mode already points the same way: it deletes `with` outright and confines direct `eval` — design pressure from a decade of real analysis pain.',
          },
          {
            kind: 'open',
            heading: 'One semantics for a moving target',
            body: 'No formal semantics today covers **modern** ECMAScript whole: modules, generators, `Proxy`, async functions, weak references, and the memory model that arrived with `SharedArrayBuffer` all postdate the classic efforts, and every annual edition moves the target under any frozen account. Yet the need sharpens yearly: web security now reasons about untrusted code that uses exactly those features, and arguments about JIT correctness need a semantics of the pipeline, not of the language alone. The open program is a mechanized, executable, coverage-measured semantics of the living standard, maintained in lockstep with TC39 the way Test262 tracks each edition — the semantic analogue of the conformance suite, and a precondition for the verification results the pipeline material later in this chapter will wish for.',
          },
        ],
      },
    ],
    readingTime: 8,
    intro: 'Before writing a single line of code, it pays to know what kind of language you are learning and where it runs. This section pins down JavaScript as a high-level, dynamic, interpreted language with untyped variables, first-class functions and prototype-based inheritance; explains the confusing tangle of names (JavaScript, ECMAScript, ES6, ES2015–ES2020, strict mode); and gets you a live interpreter in under a minute — either the browser console or the Node REPL — so every example in this book can be tried, modified and re-tried.',
    objectives: [
      'Characterize JavaScript: high-level, dynamic, interpreted, untyped, functional and prototype-based',
      'Explain the relationship between the names JavaScript, ECMAScript, ES5/ES6 and the yearly ES2016–ES2020 releases',
      'Explain what a host environment is and name the two big ones (browser, Node)',
      'Open a live JavaScript interpreter in the browser developer tools and in the Node REPL',
      'Recognize the `// =>` value-assertion comment convention used throughout the book'
    ],
    concepts: [
      {
        term: 'What JavaScript is',
        kind: 'definition',
        statement: 'JavaScript is a **high-level**, **dynamic**, **interpreted** programming language well suited to both object-oriented and functional programming styles. Its variables are **untyped** — a variable can hold a number now and a string later. The syntax is loosely based on Java, but the languages are otherwise unrelated: JavaScript derives its **first-class functions** from Scheme and its **prototype-based inheritance** from the little-known language Self. Despite the name, JavaScript has long since outgrown its scripting-language roots and is a robust, general-purpose language for serious software engineering.',
        detail: 'If you are already a JavaScript programmer you can skim this chapter — though the character-frequency program at the end (Section 1.3) is worth a read even then. If you come from Java, do not let the curly braces fool you: except for a superficial syntactic resemblance, JavaScript is completely different from Java.'
      },
      {
        term: 'Names, versions and modes',
        kind: 'notation',
        statement: '“JavaScript” is a trademark licensed from Sun (now Oracle); the standardized version of the language is stuck with the awkward name **ECMAScript**, abbreviated **ES**. The book treats **ES5** as the compatibility baseline. **ES6** (released 2015) added class and module syntax and changed JavaScript from a scripting language into a serious general-purpose one. Since then the standard ships yearly: ES2016, ES2017, ES2018, ES2019, ES2020. Because backward compatibility means old flaws can never be removed, ES5 introduced **strict mode** — an opt-in restricted dialect that fixes early mistakes; code in a class or an ES6 module is automatically strict.',
        detail: 'This book covers the language carefully by version: every feature is introduced with the edition that defined it, and legacy features are flagged as unavailable in strict mode.'
      },
      {
        term: 'The host environment',
        kind: 'definition',
        statement: 'The **core language** defines only a minimal API — numbers, text, arrays, sets, maps and so on — and deliberately includes **no input or output**. I/O, networking, storage and graphics belong to the **host environment** within which JavaScript is embedded. The original host is the **web browser** (input from mouse and keyboard, output as HTML and CSS, HTTP requests); since 2010, **Node** gives JavaScript access to the whole operating system — files, network, servers — making it a popular alternative to shell scripts and a standard choice for web servers.',
        detail: 'Chapters 1–14 of the book are the language itself; Chapter 11 documents the standard library, Chapter 15 the browser host, Chapter 16 the Node host. The same core language runs in all of them.'
      },
      {
        term: 'Exploring with the browser console',
        kind: 'method',
        statement: 'The easiest way to try a few lines of JavaScript is the **developer tools** of a web browser: open them with F12, Ctrl-Shift-I, or Command-Option-I, select the **Console** tab, and type code at the prompt to see results as you type. The tools usually appear as a pane docked to the bottom or right of the window but can be detached into separate windows.',
        detail: 'Line-by-line interactive environments like this are perfect for the ten-second experiment: type an expression, press Enter, read the echoed value, refine. Learning a language means typing its code, not just reading it.'
      },
      {
        term: 'Exploring with the Node REPL',
        kind: 'method',
        statement: 'After installing Node from nodejs.org, type `node` in a terminal to start an interactive session — a **REPL** (read-eval-print loop). Node echoes results just like the browser console. Meta-commands start with a dot: `.help` lists them, `.break` escapes a half-typed expression, `.clear` resets, `.editor` enters a multi-line editor mode, `.load` reads a file into the session, `.save` writes the session back out, and `.exit` (or Ctrl-D) quits.',
        detail: 'A typical first session:\n```js\n$ node\nWelcome to Node.js v12.13.0.\n> let x = 2, y = 3;\nundefined\n> x + y\n5\n> (x === 2) && (y === 3)\ntrue\n> (x > 3) || (y < 3)\nfalse\n```\nNote that the declaration echoes `undefined` — statements do not produce values — while each expression echoes its own value.'
      },
      {
        term: 'The `// =>` assertion convention',
        kind: 'notation',
        statement: 'Throughout the book, a comment of the form `// => value` shows the value that the preceding code produces, emulating an interactive environment in print. A comment `// a == 42` means that after the code runs, the variable `a` holds 42. A comment beginning `// !` means the previous line **throws an exception**, and the rest of the comment says what kind.',
        detail: 'These are not decoration: the author runs a tool that tests the code and verifies each `// =>` value, which keeps the printed examples honest. You should treat every one of them as an invitation to try the code yourself.'
      }
    ],
    examples: [
      {
        title: 'Trace: a first REPL session',
        problem: 'You type the following lines into a fresh Node session. What does the interpreter do, and what is echoed after each line?',
        steps: [
          { label: 'Line 1', text: '```js\nlet x = 2, y = 3;\n```\nThe engine creates two bindings `x` and `y` and assigns the number values 2 and 3. A declaration statement has **no value**, so the REPL echoes `undefined`.' },
          { label: 'Line 2', text: '```js\nx + y\n```\nThis is an expression, not a statement. The engine looks up `x` (2) and `y` (3), applies binary `+` to two numbers, and performs **arithmetic addition**. The value 5 is echoed.' },
          { label: 'Line 3', text: '```js\n(x === 2) && (y === 3)\n```\nEach `===` compares a variable to a literal without conversion: both are true. `&&` returns its second operand when the first is truthy, so the boolean `true` is echoed.' },
          { label: 'Line 4', text: '```js\n(x > 3) || (y < 3)\n```\n`x > 3` is false, `y < 3` is false. `||` has nothing truthy to return, so it echoes its second (falsy) value — the boolean `false`. Every line so far was one tiny experiment; that is exactly how the REPL is meant to be used.' }
        ],
        result: 'Echoes: undefined, 5, true, false — the REPL evaluates each input and prints its value; declarations print undefined because they are not expressions.'
      },
      {
        title: 'Choosing your interpreter: console versus Node',
        problem: 'You want to (a) quickly evaluate `Math.max(1, 5, 3)` and (b) later re-run a 40-line experiment. Which environment fits each task, and how do you move from one to the other?',
        steps: [
          { label: 'Step 1: One-liner, browser console', text: 'Press F12 (or Command-Option-I), open the Console tab, and type `Math.max(1, 5, 3)`. The console immediately echoes 5. Nothing to install; perfect for quick tests of expressions and short snippets.' },
          { label: 'Step 2: Longer code, a file', text: 'For longer chunks, line-by-line environments stop being suitable. Save the code to a file with the traditional extension `.js` — for example `snippet.js` — using any text editor.' },
          { label: 'Step 3: Run the file with Node', text: '```js\n$ node snippet.js\n```\nNode executes the file non-interactively. Note that Node will **not** automatically print the value of the code it runs — unlike the REPL — so printing becomes your job, which is exactly what `console.log()` is for.' }
        ],
        result: 'Quick expression → browser console. Anything longer → a `.js` file run with `node`, using `console.log()` to make results visible.'
      }
    ],
    keyTakeaways: [
      'JavaScript is high-level, dynamic, interpreted and untyped, with first-class functions (from Scheme) and prototype-based inheritance (from Self); its Java-like syntax is only superficial.',
      'JavaScript, ECMAScript and ES are the same thing; ES5 is the compatibility baseline, ES6 (2015) was the big modernization, and editions now ship yearly as ES2016–ES2020.',
      'The core language has no I/O: input, output, networking, storage and graphics come from the host environment — the web browser or Node.',
      'Two ways to get a live interpreter: the browser developer-tools console (F12) and the Node REPL (`node` in a terminal, with `.help`, `.editor`, `.load`, `.save`, `.exit`).',
      'In the book’s examples, `// => value` asserts the produced value, `// a == 42` asserts a variable’s post-run value, and `// !` marks a line that throws.'
    ],
    quiz: [
      {
        q: 'Which of the following statements about JavaScript is FALSE?',
        options: [
          'JavaScript variables are untyped — the same variable can hold a number and later a string',
          'JavaScript’s prototype-based inheritance was inspired by the language Self',
          'JavaScript is compiled to machine code before every execution and has no interpreter',
          'JavaScript is well suited to both object-oriented and functional programming styles'
        ],
        answer: 2,
        explanation: 'JavaScript is described as a high-level, dynamic, interpreted language — its code is not pre-compiled to machine code by the programmer; the interpreter (and its JIT machinery) is part of the run-time model.'
      },
      {
        q: 'The relationship between the names “JavaScript” and “ECMAScript” is that:',
        options: [
          'ECMAScript is a dialect of JavaScript created by Microsoft',
          '“ECMAScript” is the standardized version of the language, and “JavaScript” is the trademarked name everyone actually uses',
          'They are two completely different languages with similar syntax',
          'ECMAScript is JavaScript’s replacement, introduced with ES6 in 2015'
        ],
        answer: 1,
        explanation: 'Netscape submitted the language to ECMA for standardization; trademark issues forced the standard to be named ECMAScript, but in practice everyone calls the language JavaScript. ES6 is just one edition of that one standard.'
      },
      {
        q: 'You are reading Flanagan’s examples and see the comment `// => true` on a line of code. This means:',
        options: [
          'the code on that line is commented out and has no effect',
          'the code throws an exception of type true',
          'the value produced by that code is true, and this assertion has been verified by tooling',
          'the expression will be true only in strict mode'
        ],
        answer: 2,
        explanation: 'The `// => value` convention emulates an interactive environment in print, showing the value the code produces — and the author’s tooling actually verifies these assertions.'
      },
      {
        q: 'Which statement about running JavaScript code is TRUE?',
        options: [
          'The Node REPL automatically prints the value of every statement, including declarations like `let x = 2;`',
          'When you run a file with `node snippet.js`, Node automatically prints the values your code produces',
          'The browser console is the only place JavaScript can be run interactively',
          'Node programs cannot read files or make network requests, because the core language has no I/O'
        ],
        answer: 0,
        explanation: 'The REPL echoes the value of each input (a declaration echoes undefined). When running a file non-interactively, Node prints nothing by itself — you must call `console.log()`. And while the core language has no I/O, the Node host environment adds file, network and OS APIs.'
      },
      {
        q: 'Strict mode exists in JavaScript because:',
        options: [
          'the language needed a way to fix early mistakes without breaking old code, so it made correctness opt-in',
          'it makes JavaScript run faster by disabling garbage collection',
          'ES6 modules run in sloppy mode by default and must opt in',
          'it is required to use classes and arrow functions'
        ],
        answer: 0,
        explanation: 'Backward compatibility forbids removing flawed legacy features, so ES5 added an opt-in restricted dialect. Class bodies and ES6 modules are automatically strict, but classes and arrow functions themselves do not require the directive.'
      }
    ]
  },

  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'js-ch1-s2',
    depth: [
      {
        tier: 'masters',
        title: 'One language, many hosts: the embedding contract',
        blocks: [
          {
            kind: 'para',
            body: 'The two Hello Worlds of this section are quietly profound: the same `console.log("Hello World!")` runs under Node and in the browser, yet `console` is not in ECMA-262 at all — the WHATWG maintains it as a separate console specification. The language standard defines a core with deliberately **no input or output**, then spells out exactly where a **host** may attach: a small set of **host hooks** — operations like `HostPromiseRejectionTracker` or `HostEnsureCanCompileStrings`, each with a contract the embedder must honor — plus whatever global objects the embedder chooses to expose. Node’s `process` and `fs`, the browser’s `document` and `fetch`, are host API surface, not language. This is the precise content of Flanagan’s platform split: everything in Chapters 1 through 14 holds for every host because it is stated with no host in mind, while Chapters 15 and 16 document two different embeddings of one identical language.',
          },
          {
            kind: 'derivation',
            heading: 'The semantics of +',
            body: 'The tour’s `"3" + "2"` quirk is fully determined by the spec’s `AdditiveExpression` algorithm, and it makes a good exercise in reading one. Step 1 — coerce both operands to primitives, with no type hint: $\\text{ToPrimitive}(l)$ and $\\text{ToPrimitive}(r)$. Step 2 — the branch that makes `+` polymorphic: if either operand is now a String, return $\\text{ToString}$ of both, concatenated. Step 3 — otherwise numeric: return $\\text{ToNumber}(l) + \\text{ToNumber}(r)$, ordinary addition. Now replay the tour with the rule in hand. `"3" + "2"` hits the String branch immediately, giving `"32"`. `1 + "2"` also hits it — the number is stringified, giving `"12"`. `true + 1` skips it, so the boolean becomes a number, giving 2. But `"3" - "2"` evaluates to 1, because **only `+` carries the string branch**: the other arithmetic operators call `ToNumber` unconditionally and never look back. The language’s most famous quirk is one clause long — memorable, and completely derivable.',
          },
          {
            kind: 'para',
            body: 'When the tour’s `points.dist()` runs with `this` bound to the array, that too is algorithm, not magic. To evaluate a call, the spec first evaluates the callee as a **Reference Record** — a value together with a base. If that base is a property container (an object, or a string being indexed), the invocation is a method call and `this` becomes exactly that base: hence `points.dist()` hands the array itself to the method, which is how `this[0]` inside `dist` reads the first point. A call of a bare, unbased reference — plain `dist()` — has no base at all, so `this` is `undefined` in strict code and the global object in sloppy mode; the entire arrow-function feature of Chapter 8 exists so you can stop caring about this clause, by capturing `this` lexically at definition time. Two decades of `this` confusion trace to one paragraph of evaluation rules plus one legacy default.',
          },
          {
            kind: 'para',
            body: 'The asynchronous teaser at the tour’s end has a concrete machine under it. Node’s runtime, **libuv**, runs a single loop through ordered **phases**: $$\\text{timers} \\to \\text{pending callbacks} \\to \\text{idle, prepare} \\to \\text{poll} \\to \\text{check} \\to \\text{close}$$ Timer callbacks from `setTimeout` fire in timers; I/O callbacks fire in poll, where the loop can also block waiting for events when nothing else is due; `setImmediate` callbacks fire in check; close callbacks — a socket teardown, say — fire last. Two disciplines ride on top of the loop. Microtasks — promise jobs and `queueMicrotask` entries — drain after **every macrotask callback**, a checkpoint Node 11 aligned with the browser’s HTML specification, so a `.then` registered inside a callback always runs before the loop proceeds. And inside any I/O callback, `setImmediate` beats `setTimeout(0)` by construction: check follows poll in the very same iteration, while the clamped one-millisecond timer must wait for a later timers phase.',
          },
          {
            kind: 'example',
            heading: 'Ordering the three schedulers',
            body: 'Predict, then verify. Inside a `readFile` callback — that is, inside the poll phase of the loop:\n\n```js\nconst fs = require("fs");\nfs.readFile("a.txt", () => {\n  setTimeout(() => console.log("timeout"), 0);\n  setImmediate(() => console.log("immediate"));\n  queueMicrotask(() => console.log("microtask"));\n  console.log("sync");\n});\n```\n\nTrace it phase by phase. The `console.log` line is synchronous and prints first. The callback returns, and the microtask checkpoint drains `queueMicrotask` before any phase transition, so `microtask` prints second. The loop then moves from poll to check, and `immediate` runs third. Only in a subsequent iteration’s timers phase does `timeout` fire, last. Output: `sync`, `microtask`, `immediate`, `timeout` — deterministic on every run. The subtlety worth remembering: had this code run at a module’s top level instead, the first two lines would hold, but `timeout` versus `immediate` becomes a race decided by whether one millisecond had elapsed since process start — one of the few genuinely nondeterministic orderings Node permits.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Gradual typing and the sociology of a standard',
        blocks: [
          {
            kind: 'para',
            body: 'TypeScript and Flow brought gradual typing to the world’s most widely deployed language, but under a deliberate philosophical compromise that is documented, not hidden. The TypeScript project’s published **design non-goals** state plainly that a sound type system is **not among the goals**: types erase completely at compile time, `any` is always available, type assertions are trusted, and several unsound patterns are accepted silently — because the system’s purpose is developer productivity at industrial scale, not proof. Flow began from a more soundness-seeking position and converged on similar pragmatics. This was a design thesis, not ignorance: a type system adopted voluntarily by millions of untrained programmers dies from friction long before it dies from unsoundness. The stance leaves a research question standing — what would a **sound** gradual type system for JavaScript actually cost, in annotations, in runtime checks, in performance — and the next paragraph is the field’s most famous measurement.',
          },
          {
            kind: 'para',
            body: 'Takikawa, Feltey, Greenman, New, Vitek and Felleisen’s “Is Sound Gradual Typing Dead?” (POPL 2016) measured the question, for Typed Racket, with brutal thoroughness: take benchmark programs, type and untyped every module, and run the entire lattice of partially typed configurations. The mechanism of the cost is boundaries: each typed–untyped crossing inserts checks, and when values cross **transitively**, checks compose — a value passing through three boundaries is checked repeatedly, sometimes per operation. The worst configurations ran up to **two orders of magnitude** slower than their untyped baselines, with deeply mutable data structures the dominant victim. Greenman’s subsequent deep-versus-shallow analysis showed that checking only the outermost type recovers most performance at the price of weaker guarantees. The lesson cuts straight through this chapter: TypeScript feels free precisely because it abandoned the soundness that would have made these numbers apply to it. Sound gradual typing for JavaScript remains an engineering trade-off, not a settled fact.',
          },
          {
            kind: 'example',
            heading: 'How ?. traveled through TC39',
            body: 'Optional chaining is a worked specimen of how the language actually evolves through the TC39 **stage process**. Claude Pache and Gabriel Isenberg’s proposal entered **Stage 1** in 2017 with modest intent: kill the `a && a.b && a.b.c` pyramid of defensive checks. Stage 2, where the design is nailed down, forced the hard questions — the `?.` spelling itself, against several rival syntaxes; **short-circuit semantics**, so that in `a?.b.c` a nullish `a` makes the whole chain evaluate to `undefined` without ever touching `b`; interaction with `delete`; and the split that spun nullish coalescing off into its own proposal. **Stage 3** in early 2019 required not just consensus but shipping implementations — V8, SpiderMonkey and JavaScriptCore each landed it behind a flag, and the field experience fed back into the specification text. **Stage 4** and ES2020 followed in 2020, with Chrome 80, Firefox 74 and Safari 13.1 shipping within weeks of one another. Three years, one spin-off, three engines: a normal commute for a modern feature.',
          },
          {
            kind: 'para',
            body: 'The engine landscape is a study in **competitive cooperation**. One language — born as Netscape’s Mocha, renamed LiveScript, shipped as JavaScript, cloned by Microsoft as JScript — was standardized as ECMA-262 in 1997 largely so rivals could interoperate; the surviving quirks (`document.all`, the whole `typeof` table) are the fossil record of that détente. Since then, three to four engines — V8, SpiderMonkey, JavaScriptCore, and Microsoft’s Chakra until Edge adopted Chromium in 2019 — have raced each other on benchmarks while co-designing the same standard in TC39, where a proposal cannot advance without implementer commitment. The racing had real costs: SunSpider rewarded micro-optimizations that mispredicted real workloads, and Google eventually retired Octane because engines had learned to game it. Yet the cooperative half is why Flanagan can write one book about four browsers and a server runtime: the ECMAScript inside them is, to a Test262-first approximation, the same language.',
          },
        ],
      },
    ],
    readingTime: 11,
    intro: 'This is the chapter’s guided tour: one Hello World in each host, then a single continuous stream of code that touches every major feature of the language — values and their types, objects, arrays, operators, functions and arrow functions, methods and this, classes, and a first taste of modules and asynchronous programming. Nothing is explained in depth yet; every topic gets its own chapter later. The goal is vocabulary: after this section you can recognize the parts when the later chapters dissect them.',
    objectives: [
      'Run Hello World with Node and in the browser via a `<script>` tag',
      'Read the tour code: values of every primitive type, objects and property access, arrays and their indices',
      'Distinguish expressions (phrases that compute values) from statements (sentences that change state)',
      'Recognize function declarations, function expressions, arrow functions and methods',
      'Recognize a class definition and an asynchronous promise-based function at sight'
    ],
    concepts: [
      {
        term: 'Hello World with Node',
        kind: 'method',
        statement: 'Put one line in a file `hello.js` and run it with `node hello.js`:\n```js\nconsole.log("Hello World!");\n```\n`console.log()` displays text and other values in the terminal (or the browser console). Because a non-interactive Node run prints nothing on its own, `console.log()` is how your program speaks.',
        detail: 'That is the complete ceremony: no class wrapper, no main function, no import boilerplate. A file of statements is a program.'
      },
      {
        term: 'Hello World in the browser',
        kind: 'method',
        statement: 'To see the same message in a browser console, create `hello.html` containing:\n```js\n<script src="hello.js"></script>\n```\nand load it with a `file://` URL such as `file:///Users/username/javascript/hello.html`, with developer tools open. The browser fetches and executes `hello.js`, and the greeting appears in the console.',
        detail: 'The script tag is the browser’s whole mechanism for including JavaScript in a page; Chapter 15 covers the many attributes that control when and how it runs.'
      },
      {
        term: 'Values and types (a first look)',
        kind: 'definition',
        statement: 'A variable is a symbolic name for a value, declared with `let` and assigned with `=`. JavaScript’s core value types:\n```js\nlet x;                    // Declare: no value yet\nx = 0;                    // Numbers: integers\nx = 0.01;                 // …and reals are the same type\nx = "hello world";        // Strings in quotation marks\nx = \u0027JavaScript\u0027;         // Single quotes delimit strings too\nx = true;                 // Booleans: true or false\nx = null;                 // "No value"\nx = undefined;            // "Absent" (like null, but different)\n```\nNumbers, strings, booleans, null and undefined are **primitives**; the next step up are **objects**.',
        detail: 'Chapter 3 covers all of these in depth, including the two different kinds of nothing (null and undefined) and the sixth primitive, Symbol.'
      },
      {
        term: 'Objects: name/value pairs',
        kind: 'definition',
        statement: 'An **object** is a collection of name/value pairs — a string-to-value map — written in curly braces:\n```js\nlet book = {               // Objects are enclosed in curly braces.\n    topic: "JavaScript",   // The property "topic" has value "JavaScript."\n    edition: 7             // The property "edition" has value 7.\n};\nbook.topic                 // => "JavaScript"\nbook["edition"]            // => 7: another way to access it\nbook.author = "Flanagan";  // Create new properties by assignment.\nbook.contents = {};        // {} is an empty object.\n```\nProperties are read and written with `.` or `[]`, and assignment **creates** properties that do not exist.',
        detail: 'Uniquely among JavaScript’s datatypes, objects are mutable and compared by reference — a fact with big consequences, developed in Chapters 3 and 6.'
      },
      {
        term: 'Arrays',
        kind: 'definition',
        statement: 'An **array** is a numerically indexed, ordered list of values, written in square brackets:\n```js\nlet primes = [2, 3, 5, 7]; // An array of 4 values.\nprimes[0]                  // => 2: the first element (index 0).\nprimes.length              // => 4: how many elements.\nprimes[primes.length-1]    // => 7: the last element.\nprimes[4] = 9;             // Add a new element by assignment.\nprimes[4] = 11;            // Or alter an existing one.\nlet empty = [];            // [] is an empty array.\n```\nArrays and objects nest freely — an array of objects, an object whose properties are arrays — which is how real data structures are built.',
        detail: '```js\nlet points = [             // An array with 2 elements,\n    {x: 0, y: 0},          // each of them an object.\n    {x: 1, y: 1}\n];\nlet data = {                 // An object with 2 properties\n    trial1: [[1,2], [3,4]], // whose values are arrays\n    trial2: [[2,3], [4,5]]  // of arrays.\n};\n```'
      },
      {
        term: 'Operators',
        kind: 'definition',
        statement: 'Operators act on values (operands) to produce new values. Arithmetic (`+ - * /` and shorthands `++ -- += *=`), comparisons (`=== !== < <= > >=` — note `"3" + "2"` is `"32"`, because `+` concatenates strings), and logical operators (`&& || !`) that combine and invert booleans:\n```js\n3 + 2                      // => 5\n"3" + "2"                  // => "32": + adds numbers, concatenates strings\nlet count = 0;\ncount++;                   // Increment the variable\ncount += 2;                // Same as count = count + 2;\ncount *= 3;                // Same as count = count * 3;\ncount                      // => 6: variable names are expressions, too.\nlet x = 2, y = 3;          // These = are assignment, not equality!\nx === y                    // => false: strict equality\n"two" > "three"            // => true: "tw" is alphabetically greater\n(x === 2) && (y === 3)     // => true: && is AND\n(x > 3) || (y < 3)         // => false: || is OR\n!(x === y)                 // => true: ! inverts a boolean\n```',
        detail: 'Chapter 4 documents every operator, its precedence and its type conversions; here you only need to read them fluently.'
      },
      {
        term: 'Expressions versus statements',
        kind: 'insight',
        statement: 'If expressions are the **phrases** of JavaScript, statements are its **full sentences**. An expression is something that computes a value but does nothing — it does not alter program state. A statement has no value, but it does alter state: variable declarations, assignments, and control structures (conditionals and loops) are statements. Roughly: **expressions compute, statements act**.',
        detail: 'The distinction is loose at the edges — assignments are expressions with side effects, and any expression followed by a semicolon is an expression statement — but it organizes the whole book: Chapter 4 is expressions, Chapter 5 is statements.'
      },
      {
        term: 'Functions, arrow functions and methods',
        kind: 'definition',
        statement: 'A function is a named, parameterized block of code you define once and invoke repeatedly:\n```js\nfunction plus1(x) {        // Define a function named "plus1"\n    return x + 1;          // Return a value one larger\n}\nplus1(y)                   // => 4: y is 3, so 3+1\n\nlet square = function(x) { // Functions are values, too:\n    return x * x;          // assign one to a variable\n};                         // (semicolon ends the assignment)\nsquare(plus1(y))           // => 16: two calls in one expression\n```\nES6 adds **arrow function** syntax — `const plus1 = x => x + 1;` and `const square = x => x * x;` — a concise form used mostly for unnamed functions passed as arguments. When a function is assigned to an object property it becomes a **method**, and inside it the `this` keyword refers to the object:\n```js\nlet a = [];\na.push(1,2,3);             // push(): a method of arrays\na.reverse();               // reverse(): another method\npoints.dist = function() { // Define our own method on points\n    let p1 = this[0], p2 = this[1];\n    let a = p2.x-p1.x, b = p2.y-p1.y;\n    return Math.sqrt(a*a + b*b);  // Pythagorean theorem\n};\npoints.dist()              // => Math.sqrt(2)\n```',
        detail: 'Functions are not formally covered until Chapter 8 and methods and this until Chapter 9, but you will meet them constantly before that — they are that important.'
      },
      {
        term: 'Classes',
        kind: 'definition',
        statement: 'JavaScript supports object-oriented programming, but differently from classical languages. The ES6 `class` keyword defines a constructor plus methods; `new` creates instances:\n```js\nclass Point {                          // Class names are capitalized.\n    constructor(x, y) {                // Initialize new instances.\n        this.x = x;                    // this = the new object\n        this.y = y;\n    }\n    distance() {                      // A method of the class\n        return Math.sqrt(              // Square root of x\u00B2+y\u00B2\n            this.x * this.x +\n            this.y * this.y);\n    }\n}\nlet p = new Point(1, 1);   // The geometric point (1,1).\np.distance()               // => Math.SQRT2\n```',
        detail: 'Under the hood, classes are a facade over prototypes and constructor functions — Chapter 9 shows both the facade and the machinery behind it.'
      },
      {
        term: 'Modules and asynchronous code (teaser)',
        kind: 'insight',
        statement: 'Two more features round out the tour. **Modules** (Chapter 10) let code in one file use functions and classes defined in another, with `import` and `export`. **Asynchronous programming** (Chapter 13) is how both hosts do I/O: the core language is not asynchronous, but asynchronous APIs are the default in browsers and Node, built on callbacks, Promises and the `async`/`await` keywords. The histogram program in the next section uses `await` to read input as it arrives.',
        detail: 'Asynchrony is possible because JavaScript is single-threaded with an **event loop** — the same model, and the same trade-offs, you meet from the operating-systems side in OSC Chapter 4 (Threads and Concurrency): OS threads share memory and need synchronization, while JavaScript keeps one thread of control and interleaves work through queued events instead.'
      }
    ],
    examples: [
      {
        title: 'Trace: reading the tour code, line by line',
        problem: 'Walk through this block from the book and state the type and value of each expression as the engine evaluates it.',
        steps: [
          { label: 'Setup', text: '```js\nlet book = { topic: "JavaScript", edition: 7 };\nlet primes = [2, 3, 5, 7];\nprimes[4] = 11;   // now [2, 3, 5, 7, 11]\n```' },
          { label: 'Property access', text: '```js\nbook.topic\n```\nThe engine looks up the property named `topic` on the object `book` and yields the string "JavaScript". `book["edition"]` does the same via brackets and yields the number 7.' },
          { label: 'Element access', text: '```js\nprimes[0]        // => 2\nprimes.length    // => 5\n```\nArrays are zero-indexed, and `length` counts elements — which is why `primes[primes.length-1]` is the last element, here 11.' },
          { label: 'Mixed arithmetic', text: '```js\nlet points = [{x: 0, y: 0}, {x: 1, y: 1}];\npoints[1].x - points[0].x   // => 1\n```\nBrackets index into the array, then `.x` reads a property of the object found there. Operands can be arbitrarily nested expressions.' },
          { label: 'String `+`', text: '```js\n"3" + "2"       // => "32"\n```\nBoth operands are strings, so `+` **concatenates** instead of adding. This is the single most famous JavaScript quirk, and Chapter 4 gives its exact rules.' }
        ],
        result: 'Strings, numbers, booleans and objects flow through the same expression syntax; the engine’s type rules — not your intentions — decide what `+`, `===` and friends do.'
      },
      {
        title: 'Trace: the Point class from construction to method call',
        problem: 'What exactly happens when `new Point(1, 1)` runs, and then `p.distance()`?',
        steps: [
          { label: 'Step 1: `new` creates an object', text: 'The `new` operator creates a brand-new empty object and sets up the prototype link so the object inherits `distance` from the class. Execution enters `constructor` with `this` bound to that new object.' },
          { label: 'Step 2: The constructor initializes', text: '```js\nthis.x = x;   // stores 1\nthis.y = y;   // stores 1\n```\nTwo properties are created on the new object. No `return` is necessary in a constructor invoked with `new` — the initialized object is the value of the expression.' },
          { label: 'Step 3: The method call', text: '```js\np.distance()\n```\nProperty lookup finds `distance` on the class’s prototype (inherited). It is invoked **as a method** — on the object `p` — so inside the method body `this` is `p`, giving `Math.sqrt(1*1 + 1*1)`.' },
          { label: 'Step 4: The value', text: 'The result is `Math.SQRT2` — the square root of 2, $\\sqrt{2}$. The invocation expression as a whole evaluates to that number.' }
        ],
        result: 'new → object created and wired to the class → constructor fills in properties → method call binds this to the instance → value flows back out. This same skeleton underlies every object you will ever create.'
      }
    ],
    keyTakeaways: [
      'Hello World is one line: `console.log("Hello World!")` in a `.js` file run with node, or in a script tag in an HTML file opened in a browser.',
      'Primitives seen on the tour: numbers, strings, booleans, null, undefined; objects and arrays are the compound types and nest freely.',
      'Expressions compute values; statements change state. Declarations, assignments, conditionals and loops are statements.',
      'Functions are values: `function` declarations, `function` expressions assigned to variables, concise arrow functions `x => x * x`, and methods (functions on object properties, with `this`).',
      'ES6 `class` defines a constructor and methods; `new Point(1,1)` creates an instance, and `p.distance()` invokes a method with `this` bound to `p`.',
      'The `// =>` comments in the book are verified value assertions — read them as the code’s contract.',
      'Modules (import/export) and asynchronous APIs (Promises, async/await, the single-threaded event loop) round out the language; both get full chapters later.'
    ],
    quiz: [
      {
        q: 'In the tour code, after `let primes = [2, 3, 5, 7]; primes[4] = 9; primes[4] = 11;`, what is `primes.length`?',
        options: ['4', '5', '11', 'undefined'],
        answer: 1,
        explanation: 'Assigning to index 4 of a 4-element array grows it to length 5 (creating one element); the second assignment merely changes the element’s value. The array is now [2, 3, 5, 7, 11].'
      },
      {
        q: 'What does the expression `"3" + "2"` evaluate to?',
        options: ['5', '"32"', '32', 'NaN'],
        answer: 1,
        explanation: 'When both operands of + are strings, it concatenates: the string "32". Only when neither operand is string-like does + perform numeric addition — this dual personality is covered fully in Chapter 4.'
      },
      {
        q: 'Which of the following is TRUE of the expression `points.dist()` in the tour, where `dist` was assigned as a function property of the `points` array?',
        options: [
          'It throws, because arrays cannot have function properties',
          'Inside dist, `this` refers to the points array the method was invoked on',
          'Inside dist, `this` refers to the global object, because the function is anonymous',
          'The invocation evaluates to undefined, because dist has no parameters'
        ],
        answer: 1,
        explanation: 'When the expression before the parentheses is a property access, the invocation is a method invocation: the object (here the points array) becomes the value of this inside the body — which is how dist can read this[0] and this[1].'
      },
      {
        q: 'The essential difference between expressions and statements, as the book presents it, is:',
        options: [
          'expressions are evaluated to produce a value, while statements are executed to make something happen',
          'expressions must end with a semicolon, while statements must not',
          'expressions can only appear inside functions, while statements appear at top level',
          'expressions alter program state, while statements compute values'
        ],
        answer: 0,
        explanation: 'Expressions are the phrases that compute values (no state change); statements are the sentences that act — declarations, assignments, conditionals, loops. Roughly: expressions compute, statements act.'
      },
      {
        q: 'In the Point class example, what happens when `new Point(1, 1)` is evaluated?',
        options: [
          'The class body is re-parsed for each new object',
          'A new object is created, the constructor runs with this bound to it, and the initialized object is the value of the expression',
          'The constructor must explicitly return the new object or the expression yields undefined',
          'distance() is copied into the new object before the constructor runs'
        ],
        answer: 1,
        explanation: 'new creates the object, links it to the class’s prototype (so distance is inherited, not copied), and runs the constructor with this set to the new object; no return is needed — the object itself is the result.'
      },
      // University-pattern: language versus host environment — console as host API (original)
      {
        q: "A script containing only the line `console.log(typeof console)` runs unchanged in both a browser tab and a Node process. What does this show about `console`, and where is it defined?",
        options: ["`console` is core syntax defined by ECMA-262, so every conforming engine ships an identical copy", "`console` is a host-provided API, so the browser and Node each supply their own object behind the same name", "`console` is a Node-only module that browsers download at runtime before running any script", "`console` is a keyword like `return`, so `typeof console` is a syntax error in both hosts"],
        answer: 1,
        explanation: "Step 1: The data given is one line with no imports that behaves identically in two hosts. Step 2: The governing rule is the core-versus-host split: ECMA-262 defines a core with deliberately no input or output, and each host attaches its own globals through host hooks plus extra objects, with `console` specified outside ECMA-262. Step 3: Tracing the two runs, the browser resolves `console` to its devtools console object while Node resolves it to its own wrapper over standard output, so `typeof console` reports an object in both without either host consulting the language standard. Step 4: The distractors fail because `console` appears in no ECMA-262 clause, browsers never download a Node module to print, and `console` is an ordinary property name rather than a reserved keyword. Step 5: Therefore the identical behavior comes from a shared host-API convention, not from the core language."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'js-ch1-s3',
    depth: [
      {
        tier: 'masters',
        title: 'What the engine really does with your program',
        blocks: [
          {
            kind: 'para',
            body: 'Run the histogram program and you exercise a tiered compiler, not an interpreter in the casual sense. **Ignition** parses the source to an abstract syntax tree, lowers it to register-based bytecode, and interprets it, recording **feedback** into slots of a per-function feedback vector as it runs. Functions that turn hot — measured against an interpreter budget, here the per-character counting loop of `Histogram.add` — tier up: **Sparkplug** (2021) compiles the bytecode to unoptimized machine code quickly and without speculation; **Maglev** (2023) adds cheap type speculation in a mid tier; **TurboFan**, the top tier, builds a sea-of-nodes graph, speculates on the collected feedback — monomorphic shapes, taken branches — inlines small callees, and emits aggressively optimized code guarded by runtime checks. When a guard fails because reality disagrees with the speculation, the function **deoptimizes**: optimized frames are mapped back to interpreter frames mid-execution and execution resumes, correct but slow, while the feedback accumulates again.',
          },
          {
            kind: 'para',
            body: 'Watch `this.totalLetters` inside `add` at the bytecode level. The property load is a single instruction, and its feedback slot starts **uninitialized**. First execution: the runtime resolves the property generically and memoizes the answer — this shape, at this offset — into the slot. From then on, the same instruction hits an **inline cache**: compare the object’s hidden class against the remembered one and, on a match, load the remembered offset directly; the generic lookup is skipped. One remembered shape is **monomorphic**, the fast case. Two to four shapes make the site **polymorphic**: a short case list, still cheap. Beyond four, V8 gives up and marks the site **megamorphic** — every access detours through a global stub cache or the runtime, several times slower, and if TurboFan had specialized on one shape, it deoptimizes and discards the optimized code. The irony at the heart of JavaScript performance: the interpreter teaches the compiler, one feedback slot at a time, and the shape of your data is the lesson plan.',
          },
          {
            kind: 'para',
            body: '**Hidden classes** — V8 says maps, the research literature says shapes — are what make those caches possible. Every object carries a hidden pointer to its shape, and shapes form a **transition tree**: adding `letterCounts` to a fresh `Histogram` and then `totalLetters` walks two transitions, so every `Histogram` the program constructs shares one path — which is why the counting loop stays monomorphic and its property loads cost one comparison plus one offset. `DefaultMap`’s constructor adds `defaultValue` after `super()`: its own transition, its own stable shape. The moment one access site mixes shapes — a comparator receiving objects built along different paths, property keys computed at runtime, a library returning dictionary-mode objects — the site degrades toward megamorphic and optimized code must fall back. The performance culture of “write monomorphic code” is the folk practice of this mechanism: keep every access site seeing one shape, and the engine compiles your object access into two instructions.',
          },
          {
            kind: 'para',
            body: 'Memory tells the same generational story. V8’s heap is split by the **weak generational hypothesis**: most objects die young. New allocations — the temporary strings from `text.replace()` and `toUpperCase()`, spread-built arrays, fresh closures — go into a young semispace, and a **scavenge** (Cheney’s algorithm) copies the few live objects into the other semispace and reclaims the dead majority by simply flipping the spaces; cost is proportional to survivors, not to garbage. Objects surviving two scavenges are **promoted** to old space, which is managed by **mark-compact**: tri-color marking to find live data, run **incrementally** in slices to bound pause times and concurrently with the program where possible, then sweeping and occasionally compacting pages to fight fragmentation. The histogram’s Map entries accumulate from the first chunk to the last, so they are promoted early and marked at the end; its string temporaries die before their second scavenge. A well-shaped program and a well-shaped heap reward the same design instinct.',
          },
          {
            kind: 'example',
            heading: 'Predicting the allocations of add()',
            body: 'Before profiling, predict. Per input chunk, `Histogram.add` performs: one `text.replace(/\\s/g, "")` returning a **new string**, because strings are immutable; one `.toUpperCase()` returning another; then, per character, iteration slicing — and for one-byte strings V8 serves one-character substrings from a 256-entry cache, so `character` usually allocates nothing; per counted letter, one `Map.set` allocating an entry, with small integers up to about $2^{31}$ traveling unboxed as **Smis**, and occasionally, when the load factor trips, a rehash that allocates a larger backing store. Steady state per chunk: two temporary strings plus a handful of table cells, and the two strings become garbage the moment the next statement executes. Prediction: minor scavenges recycle the temporaries nearly for free, scaling with chunk count, while old space grows only with the number of **distinct letters** — a few dozen entries for English text, whatever the corpus size. Verify with `--trace-gc`: scavenges track the chunks; mark-compact events barely register.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Speculation: security, verification, analysis at scale',
        blocks: [
          {
            kind: 'para',
            body: 'The JIT’s superpower, speculation, turned out to be a security liability. **Spectre** (Kocher and colleagues, 2019) broke the browser sandbox’s core assumption — that script cannot read memory it does not own — without exploiting any implementation bug. A proof of concept in JavaScript trained the branch predictor with in-bounds iterations, then fed an out-of-bounds index; the processor mispredicted speculatively, the transient path touched a secret-dependent cache line, and a high-resolution timer converted the cache state into leaked bytes. The browser response was sweeping: coarsening and reducing timer precision, disabling `SharedArrayBuffer` platform-wide in 2018 because it enabled precise timing, shipping **Site Isolation** so each origin runs in its own process, and later re-enabling `SharedArrayBuffer` only for cross-origin-isolated pages under COOP and COEP. The deep lesson for language implementation: speculative optimization is a **constant-time violation by design** — the security contract became about what can be observed, not just what executes.',
          },
          {
            kind: 'para',
            body: '**WebAssembly** emerged partly as the safer target the JavaScript JIT could never be. A wasm module is **validated** before execution against a typed, stack-disciplined grammar, so no malformed instruction stream ever reaches code generation; control flow is **structured**, closing off large classes of code-reuse attacks; linear memory is explicit and bounds-checked rather than an ambient graph of objects; and there is no `eval`, no `with`, no prototype chain to make name resolution dynamic. That is why wasm became the compilation substrate for C, Rust and Go on the web — beyond raw speed, the type discipline is something JavaScript’s feedback-driven speculation only approximates. It is not a panacea: wasm shares the same hardware and the same cache side channels, needs its own constant-time hardening for cryptographic code, and its sandboxing story — memory controls, the component model, capabilities across module boundaries — remains an active design surface rather than a settled one.',
          },
          {
            kind: 'open',
            heading: 'Verifying the optimizing JIT',
            body: 'An optimizing JavaScript compiler is a frontier for verification, and the frontier is wide. Verified compilation exists for C — CompCert, with Frama-C supplying verified analyses of C programs — but the analogous result for a JIT would have to prove that the optimizing pipeline **refines the source semantics on every path, deoptimizations included**, through a tiering system that rewrites stack frames mid-execution while concurrent garbage collection moves objects underneath. A modern optimizing tier is hundreds of thousands of lines of C++ that deliberately change every release; tiering, speculation, inline caches and the memory model all interact. What exists today is fragmentary: translation validation that checks one compilation after the fact, verified intermediate representations, verified interpreters, and conformance testing at Test262 scale. The open problem in full: a semantics of the pipeline, not merely the language, strong enough to prove that no optimization, however speculative, can be observed except through its intended results.',
          },
          {
            kind: 'application',
            heading: 'The type-less type checker',
            body: 'This chapter’s closing program has an industrial ancestor: Google’s **Closure Compiler**, which for years compiled the company’s largest JavaScript — Docs, Maps, pages served at planetary scale — by performing **type inference over untyped code**, guided by optional JSDoc annotations. Crucially, its type system existed to **optimize**: types drive inlining, dead-code elimination and property flattening in ADVANCED mode, and a program with no annotations at all is still analyzed and still shrinks. The inversion is the insight — inference for optimization rather than for guarantees — and it anticipated a decade of scholarship on what static reasoning is actually for. Modern descendants run the loop at npm scale: bundlers doing whole-program reachability analysis on every commit, linters with real dataflow engines, and server-side checkers re-deriving facts no one annotated. Soundness was simply not the customer; throughput was, and across tens of millions of lines of untyped code, the customer was right.',
          },
          {
            kind: 'open',
            heading: 'LLMs as program analysts',
            body: 'The newest frontier swaps the solver for a model. Large language models read JavaScript the way they read prose, and npm — the largest package ecosystem ever assembled — is both their training corpus and their workload: learned bug finding, test generation and migration tooling already outperform classical analysis on tasks that resist formalization, like understanding the intent behind a legacy pyramid of callbacks. But the trade inverts everything above: learned inference is unsound, unstated and unrepeatable — no guarantee, no contract, and possibly a different answer after the next retrain. The open question for programming-language research is the hybrid: models proposing, analyses disposing — learned heuristics generating candidate invariants, contracts and summaries that a sound checker then proves, refutes, or feeds back as training signal. What the $\\lambda_{JS}$ line achieved by desugaring, the learned line must achieve by hypothesis and test, and whether that loop can ever be made trustworthy is, right now, genuinely open.',
          },
        ],
      },
    ],
    readingTime: 12,
    intro: 'The chapter ends with a short but nontrivial program: a Node tool that reads text from standard input, counts how often each letter occurs, and prints a histogram of the most frequent characters. It is real-world JavaScript — a Map subclass, a domain class, a regular expression, array destructuring, sorting, and an async function consuming a stream — and every piece of it is explained in the chapters that follow. Here you read it end to end for shape, then trace one run through it.',
    objectives: [
      'Run the program: `node charfreq.js < charfreq.js` and interpret its output',
      'Explain the two classes: DefaultMap (a Map with a default for missing keys) and Histogram (counts letters)',
      'Follow the data flow: chunk → add(text) → letterCounts Map → sorted entries → formatted lines',
      'Identify the modern features at work: class extends, template literals, destructuring, async/await',
      'Appreciate the program’s shape as a model of readable, commented JavaScript'
    ],
    concepts: [
      {
        term: 'What the program does',
        kind: 'definition',
        statement: 'Example 1-1 reads text from **standard input**, computes the frequency of each letter in that text, and displays a histogram of the most frequently used characters. You can run it on its own source:\n```js\n$ node charfreq.js < charfreq.js\nT: ########### 11.22%\nE: ########## 10.15%\nR: ####### 6.68%\nS: ###### 6.44%\nA: ###### 6.16%\nN: ###### 5.81%\nO: ##### 5.45%\nI: ##### 4.54%\n```\nEach line shows a character, a bar of `#` characters, and the percentage of all letters it represents.',
        detail: 'The program requires Node 12 or higher and, in a Unix environment, is invoked as `node charfreq.js < corpus.txt`. Do not expect to understand every line yet — but by the end of the book, every line will be yours.'
      },
      {
        term: 'DefaultMap: subclassing Map',
        kind: 'definition',
        statement: 'The first class extends the built-in `Map` so that `get()` returns a caller-chosen default instead of `undefined` when the key is missing:\n```js\nclass DefaultMap extends Map {\n    constructor(defaultValue) {\n        super();                    // Invoke superclass constructor\n        this.defaultValue = defaultValue; // Remember the default\n    }\n    get(key) {\n        if (this.has(key)) {        // If the key is already in the map,\n            return super.get(key);  // return its value from superclass.\n        } else {\n            return this.defaultValue; // Otherwise return the default.\n        }\n    }\n}\n```\n`extends` creates a subclass; `super()` calls the superclass constructor; `super.get(key)` calls the overridden method. Chapter 9 covers subclassing in depth.',
        detail: 'The trick this enables: `counts.get(c) + 1` needs no "does the key exist yet?" test the first time a letter appears — a missing key reads as 0, not undefined.'
      },
      {
        term: 'The Histogram class',
        kind: 'definition',
        statement: 'The second class owns the state (a letter-count map and a total) and two behaviors — record text, render itself:\n```js\nclass Histogram {\n    constructor() {\n        this.letterCounts = new DefaultMap(0); // Map from letters to counts\n        this.totalLetters = 0;                 // How many letters in all\n    }\n    add(text) {\n        // Remove whitespace, then convert to upper case\n        text = text.replace(/\\s/g, "").toUpperCase();\n        // Count the letters, one at a time\n        for(let character of text) {\n            let count = this.letterCounts.get(character);\n            this.letterCounts.set(character, count + 1);\n            this.totalLetters++;\n        }\n    }\n    toString() {\n        let entries = [...this.letterCounts]; // Convert to array of [k,v]\n        // Sort by count, then alphabetically\n        entries.sort((a,b) => a[1] === b[1] ? (a[0] < b[0] ? -1 : 1) : b[1] - a[1]);\n        // Convert counts to percentages\n        for(let entry of entries) {\n            entry[1] = entry[1] / this.totalLetters * 100;\n        }\n        // Format and return the display\n        let lines = entries.map(\n            ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`\n        );\n        return lines.join("\\n");\n    }\n}\n```',
        detail: 'Features on display: a regular expression `/\\s/g` matching whitespace (Chapter 11), `for/of` over a string character by character (Chapter 5), spread `...` to copy a Map into an array (Chapter 7), `sort` with a comparator (Chapter 7), `map` with a destructuring arrow parameter `([l,n]) =>` (Chapters 3 and 8), and a template literal with `${...}` interpolation (Chapter 3).'
      },
      {
        term: 'The async main',
        kind: 'method',
        statement: 'Input arrives as an asynchronous stream, so the program is written as an `async` function using `for await` to consume chunks as they arrive, plus one line that ties it all together:\n```js\n// This async function returns a Promise that resolves\n// when the histogram is complete.\nasync function histogramFromStdin() {\n    process.stdin.setEncoding("utf-8"); // Read strings, not bytes\n    let histogram = new Histogram();\n    for await (let chunk of process.stdin) {\n        histogram.add(chunk);\n    }\n    return histogram;\n}\n\n// This one line is the main program:\nhistogramFromStdin().then(histogram => {\n    console.log(histogram.toString());\n});\n```',
        detail: 'The function returns a **Promise** — a placeholder for a value that arrives later (Chapter 13). `for await` loops over the chunks of standard input without blocking; `.then()` registers the code to run when the promised histogram finally exists. All of the input is processed as it streams in, which is the whole point of the asynchronous style.'
      },
      {
        term: 'Reading the program as an architecture',
        kind: 'insight',
        statement: 'Beyond syntax, notice the program’s shape: two small classes with clearly separated responsibilities (storage with defaults; counting and formatting), a comment header explaining how to run it, one function that adapts the async input stream to the domain class, and a one-line main. It is a miniature of how well-structured JavaScript of any size is organized.',
        detail: 'When you reach for this program later, notice also what it does not do: no mutation of input text (strings are immutable — a new string is returned), no manual memory management, and no loop indices in the counting loop — iteration is delegated to `for/of`.'
      }
    ],
    examples: [
      {
        title: 'Trace: the program’s full run on a small input',
        problem: 'You run `echo "banana" | node charfreq.js`. What does the engine do, from process start to printed histogram?',
        steps: [
          { label: 'Step 1: Classes are defined', text: 'The engine evaluates the two class definitions and the async function declaration, then runs the final line. `histogramFromStdin()` is called immediately — it returns a Promise — and `.then()` registers the printer for later. Then top-level code is done and control returns to the event loop.' },
          { label: 'Step 2: The stream delivers "banana"', text: 'Inside the async function, `for await` receives one chunk: the string "banana". The loop body calls `histogram.add("banana")`.' },
          { label: 'Step 3: add() normalizes the text', text: '```js\ntext = text.replace(/\\s/g, "").toUpperCase();\n```\nThe regular expression matches every whitespace character and replaces each with "", producing "BANANA".' },
          { label: 'Step 4: Letters are counted in the DefaultMap', text: '`for(let character of text)` yields "B", then "A", "N", "A", "N", "A". Each `get` returns the running count (0 for the first "B", thanks to the default) and `set` writes back one more; `totalLetters` reaches 6. Final map: B→1, A→3, N→2.' },
          { label: 'Step 5: The stream ends, the Promise resolves', text: '`for await` finishes when input ends, and `return histogram` resolves the Promise. The event loop then calls the `.then` callback, which runs `histogram.toString()`.' },
          { label: 'Step 6: toString() sorts and formats', text: 'Entries are spread to [["B",1],["A",3],["N",2]], sorted by count descending → A(3), N(2), B(1). Each count becomes a percentage of 6: A → 50, N → 33.33, B → 16.67. The `map` formats each as a template literal with `Math.round(n)` hash marks and `n.toFixed(2)` percentages, and `join("\\n")` glues the lines.' }
        ],
        result: '```js\nA: ################################################## 50.00%\nN: ################################# 33.33%\nB: ################ 16.67%\n```\nStreaming in, counting with a defaulted Map, sorting and formatting out — the program’s whole job done in one pass.'
      },
      {
        title: 'Trace: why DefaultMap removes the "first time" special case',
        problem: 'Rewrite `add()` to use a plain `Map` and count the same text. What extra work appears, and why?',
        steps: [
          { label: 'Step 1: The plain-Map version', text: '```js\nfor(let character of text) {\n    if (this.letterCounts.has(character)) {       // key exists?\n        this.letterCounts.set(character,\n            this.letterCounts.get(character) + 1); // bump it\n    } else {\n        this.letterCounts.set(character, 1);      // or start at 1\n    }\n    this.totalLetters++;\n}\n```' },
          { label: 'Step 2: Count the branches', text: 'For every single letter, the engine now evaluates `has()` and then takes one of two different `set()` calls. The reading loop is interrupted by bookkeeping that has nothing to do with counting.' },
          { label: 'Step 3: The DefaultMap version', text: '```js\nlet count = this.letterCounts.get(character); // 0 if absent\nthis.letterCounts.set(character, count + 1);\n```\nOne code path. The "is this the first time?" question is answered once, inside `DefaultMap.get`, instead of being re-asked at every letter of every text.' },
          { label: 'Step 4: The general lesson', text: 'Subclassing a standard class (here `Map`) to move a special case into the data structure is a small, classic piece of object-oriented design — and it is exactly why the program reads so clean.' }
        ],
        result: 'Same histogram output, but the plain-Map version pays an extra has() test and a branch per letter; DefaultMap centralizes the missing-key default so the counting loop is branch-free.'
      }
    ],
    keyTakeaways: [
      'The program is run as `node charfreq.js < corpus.txt`; each output line is `letter: #bar percentage`, sorted most frequent first.',
      'DefaultMap subclasses Map (via `extends`, `super()` and `super.get()`) so a missing key reads as a chosen default — eliminating the "first occurrence" special case.',
      'Histogram.add() strips whitespace with a regex, uppercases, and counts with `for/of` over the string’s characters; toString() spreads the Map to an array, sorts by count, converts to percentages, and formats with map + template literals.',
      'Input is consumed asynchronously with `for await` over `process.stdin`; the function returns a Promise, and `.then()` runs the printing when it resolves.',
      'Every feature used — classes, Map, regex, destructuring, spread, sort comparators, template literals, async iteration — gets a full treatment in Chapters 3 through 13.',
      'The program models good structure: small classes with one responsibility each, a comment header with usage, and a one-line main.'
    ],
    quiz: [
      {
        q: 'What is the purpose of the DefaultMap class in the character-frequency program?',
        options: [
          'It makes Map iteration asynchronous',
          'It returns a caller-chosen default value from get() when a key is not in the map',
          'It stores the histogram’s total letter count',
          'It converts the Map to a sorted array automatically'
        ],
        answer: 1,
        explanation: 'DefaultMap extends Map and overrides get() to return this.defaultValue (0 in this program) for missing keys, so `get(c) + 1` works even the first time a letter is seen.'
      },
      {
        q: 'In `Histogram.add()`, what does the statement `text = text.replace(/\\s/g, "").toUpperCase();` accomplish?',
        options: [
          'It replaces every letter with whitespace and then lowercases the result',
          'It removes all whitespace characters and converts the text to upper case',
          'It splits the text into an array of words',
          'It replaces the character class \\s with the letter g'
        ],
        answer: 1,
        explanation: 'The regex /\\s/g globally matches whitespace characters; replacing each with "" deletes them. toUpperCase() then normalizes case so "a" and "A" count as the same letter.'
      },
      {
        q: 'After processing the text "mom" (3 letters: M once, O once, M again), what does `this.letterCounts` contain?',
        options: [
          'M → 2 and O → 1, with totalLetters 3',
          'M → 1 and O → 1, with totalLetters 3',
          'M → 2 and O → 1, with totalLetters 2',
          'An error, because M is added twice to the Map'
        ],
        answer: 0,
        explanation: 'Each of the three characters is counted: M is set to 1 then 2, O to 1; totalLetters is incremented once per character, so it is 3.'
      },
      {
        q: 'Why is `histogramFromStdin()` declared `async`, and what does `for await` add over a plain `for/of`?',
        options: [
          'It makes the program run faster on multicore CPUs',
          'It lets the function return a Promise and consume the input stream chunk-by-chunk as data arrives, without blocking',
          'It is required syntax whenever a program reads files, enforced by Node',
          'It converts the text to UTF-8 before counting'
        ],
        answer: 1,
        explanation: 'async functions return Promises and enable await; `for await` is asynchronous iteration (Chapter 13) — the loop body runs once per chunk as the stream delivers it, and the event loop stays free between chunks.'
      },
      {
        q: 'The final line of the program is `histogramFromStdin().then(histogram => { console.log(histogram.toString()); });`. What is true of this line?',
        options: [
          'It blocks until all input has been read, then prints synchronously',
          'It calls the function, which starts the reading and returns a Promise, and registers a callback to print the histogram once that Promise resolves',
          'It prints the histogram immediately, before any input is read',
          'It declares a function named histogram that will be called later by Node'
        ],
        answer: 1,
        explanation: 'The call starts the async work and returns a Promise immediately; .then() registers the printing callback that runs when the reading completes and the Promise resolves with the finished histogram.'
      }
    ]
  }
]
