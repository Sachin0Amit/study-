import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 4: Expressions and Operators (Sections 4.1 – 4.7)
// Master study content.
// ============================================================================

export const jsCh4Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'js-ch4-s1',
    readingTime: 8,
    intro: 'Expressions are the phrases of a JavaScript program — the pieces that evaluate to values — and statements are the sentences that make things happen (Chapter 5). This section starts at the bottom of the expression tower with the **primary expressions** that contain no smaller expression: literals, reserved words and bare identifiers. It then covers the two initializers that look like literals but are not: the object and array initializers, which happily embed arbitrary subexpressions, computed names, methods and the spread operator.',
    objectives: [
      'Distinguish expressions from statements, and classify the three kinds of primary expression',
      'Read and write object initializer syntax: shorthand, computed keys, methods, accessors and spread',
      'Read and write array initializer syntax, including elisions that create sparse arrays',
      'Explain when and how initializers are evaluated, and why spread copies only one level deep'
    ],
    concepts: [
      {
        term: 'What an expression is',
        kind: 'definition',
        statement: 'An **expression** is a phrase of JavaScript that can be **evaluated** to produce a value. Expressions nest: the operands of an operator are themselves expressions, so `x + y * z` is one expression built from three variable references and two operators. Chapter 4 covers every way to write an expression; Chapter 5 covers statements, which *do* things rather than compute values.',
        detail: 'The test that separates the chapters: an expression answers "what value?", a statement answers "what happens next?". Statements contain expressions; expressions never contain statements (except function bodies, which live in their own scope).'
      },
      {
        term: 'Primary expressions',
        kind: 'definition',
        statement: 'The simplest expressions — the atoms — are **primary expressions**: they are self-contained and require no smaller expression inside them. They are the constant **literals**, certain **reserved words** (`true`, `false`, `null`, `this`), and **variable references** — bare identifiers that evaluate to the value of the variable or constant they name (`undefined` behaves this way too: it is a predefined global property, not a keyword). Everything else in this chapter is built up from these.',
        detail: 'One "literal" is more than it looks: the template literal interpolates arbitrary expressions, and the object and array initializers below are compound expressions rather than true literals.'
      },
      {
        term: 'Literals',
        kind: 'notation',
        statement: 'A **literal** is a data value that appears directly in the source, its meaning fixed by the way it is written. JavaScript has literals for strings, numbers in several bases, booleans, null, BigInt, and regular expressions:\n```js\n"hello"            // string literal\n`hello ${name}`     // template literal (ES6): a literal CONTAINING a subexpression\n12  1.2  .5        // numeric literals\n0xff  0b101  0o17  // hex, binary, octal (Section 3.2)\n1_000_000n          // BigInt literal\ntrue  false  null  // boolean and null literals\n/ab+c/gi            // regular-expression literal\n```\nThe template literal is the odd one out: its `${...}` interpolates any expression at evaluation time, which is why it behaves more like an initializer than a pure literal.',
        detail: 'A regex literal may not be empty — `/` on its own is division — and a slash inside the pattern must be escaped. Regexes get a full chapter later (Section 11.3).'
      },
      {
        term: 'Variable references',
        kind: 'definition',
        statement: 'A bare **identifier** on its own is an expression: it evaluates to the value of the variable, constant, or global property it names — `x`, `total`, `Math`, `console`. The interpreter consults the enclosing scopes from innermost outward to find the binding; Section 3.8 explains how `var` hoisting and the `let` temporal dead zone decide what the identifier means before this expression ever runs.',
        detail: 'An identifier that names no binding at all throws a `ReferenceError` at runtime — unless you probe it with `typeof` (Section 4.7), which is exactly why feature detection has a special form.'
      },
      {
        term: 'Object initializer syntax',
        kind: 'notation',
        statement: 'The **object initializer** (often called an object literal) is a comma-separated list of `property: value` pairs inside braces, spanning as many lines as you like:\n```js\nconst book = {\n  title: "JavaScript: The Definitive Guide",  // property: value\n  edition: 7,                                 // number value\n  authors: ["Flanagan"],                       // nested initializer\n  summary() {                                  // ES6 method shorthand\n    return this.title + ", " + this.edition + "th ed.";\n  },\n};\n```\nA trailing comma is legal, keys may be written without quotes when they are valid identifiers, and the value can be any expression.',
        detail: 'Section 6.6 catalogs the remaining literal extensions (getters/setters, symbol keys, spread on setters). What matters here: the initializer is evaluated, not merely read.'
      },
      {
        term: 'Initializer extensions',
        kind: 'method',
        statement: 'Four ES6+ extensions make object initializers do the work of small programs:\n```js\nconst x = 2, y = 3;\nconst point = { x, y };                 // shorthand: { x: x, y: y }\nconst key = "dyn";\nconst o = { [key + "amic"]: true };     // computed key: "dynamic"\nconst defaults = { color: "teal", size: 1 };\nconst badge = { ...defaults, id: 7 };    // spread copies properties in\nconst rect = {\n  w: 3, h: 4,\n  get area() { return this.w * this.h; } // accessor property\n};\n```\n**Shorthand** abbreviates `{ x: x }` as `{ x }`; a **computed key** `[expr]` evaluates its bracketed expression at object-creation time; **spread** `...obj` copies another object’s own enumerable string-keyed properties (later keys win); **method shorthand** omits the `function` keyword.',
        detail: 'Spread into an object is ES2018; computed keys and shorthand are ES6. Spread never copies inherited properties, and a later explicit key overrides the spread-in value.'
      },
      {
        term: 'Array initializer syntax',
        kind: 'notation',
        statement: 'The **array initializer** is a comma-separated list of values in brackets — the commas carry the structure:\n```js\nconst primes = [2, 3, 5, 7, 11];\nconst pairs = [[1, 2], [3, 4]];     // nesting is fine\nconst more = [...primes, 13];       // ES6 spread: 2,3,5,7,11,13\nconst sparse = [1, , 3];            // ELISION: a hole at index 1!\nconst two = [1, 2, ];                // trailing comma: length is 2\n```\nOmitting a value between commas creates a **hole** — a sparse array — rather than an `undefined` element. Spread copies an array’s indexed elements into a brand-new array (one level deep).',
        detail: 'Section 7.2 shows why holes matter: they are absent properties, so `length` counts them but iteration methods skip them. Trailing commas are free in both initializers.'
      },
      {
        term: 'Initializers are live expressions',
        kind: 'insight',
        statement: 'An initializer is not a compile-time constant: each time execution reaches it, every property value is evaluated **from scratch, left to right**. `let stamps = [Date.now(), Date.now()]` records two (possibly different) timestamps, and a `f()` inside a literal runs on every evaluation. Spread likewise runs on the spot — and copies only **one level deep**: `{ ...o }` shares nested objects rather than cloning them (Section 6.2).',
        detail: 'Fresh evaluation is exactly what makes initializers safe to place inside loops and function bodies: each pass builds a new container with new values — never a shared one.'
      }
    ],
    examples: [
      {
        title: 'Trace: one object literal, evaluated',
        problem: 'Given `const method = "GET"; const tag = "route";`, evaluate `make("list", "/api")` step by step and describe the resulting object.',
        steps: [
          { label: 'The code', text: '```js\nconst method = "GET";\nconst tag = "route";\nfunction make(action, path) {\n  return {\n    action,                        // shorthand\n    method,                        // shorthand — outer variable!\n    [tag]: path,                   // computed name: "route"\n    ["h" + "its"]: 1,              // computed name: "hits"\n    log() { return this.action + " " + this.method; },\n  };\n}\nconst req = make("list", "/api");\n```' },
          { label: 'Step 1: the return statement is reached', text: 'Evaluation of the object initializer begins. No object exists yet — nothing is allocated until the braces close.' },
          { label: 'Step 2: shorthand properties resolve', text: 'Left to right: `action` is shorthand for `action: action` — the property name "action" gets the parameter value "list". Then `method` is shorthand for `method: method` — the name on the left is fixed, the value on the right reads the **outer variable** `method`, yielding "GET". Shorthand never invents properties; it reads what is in scope.' },
          { label: 'Step 3: computed keys run as expressions', text: '`[tag]` evaluates the variable to the string "route", which becomes the property name holding "/api". `["h" + "its"]` concatenates to "hits" and stores 1. The bracket contents are ordinary expressions — function calls would run here too.' },
          { label: 'Step 4: the method lands and the object is done', text: 'Method shorthand creates a function value stored under "log". The finished object has five own properties — action: "list", method: "GET", route: "/api", hits: 1, log: the function — plus the inherited Object.prototype methods. If make is called again, every step reruns and a fresh object appears.' }
        ],
        result: 'req is { action: "list", method: "GET", route: "/api", hits: 1, log: f }. Shorthand reads outer-scope values, computed keys evaluate expressions, and each evaluation builds a new object.'
      },
      {
        title: 'Trace: holes are not undefined',
        problem: 'Compare `[1, , 3]` with `[1, undefined, 3]` — same length, same reads. What is actually stored, and what proves the difference?',
        steps: [
          { label: 'The code', text: '```js\nconst a = [1, , 3];           // sparse: hole at index 1\nconst b = [1, undefined, 3];  // dense: real undefined at index 1\na.length === b.length          // => true (3)\na[1] === b[1]                 // => true (undefined)\n1 in a                        // => false — NO property "1" at all\n1 in b                        // => true — a property holding undefined\nObject.keys(a)                // => ["0", "2"]\nObject.keys(b)                // => ["0", "1", "2"]\n```' },
          { label: 'Step 1: the elision skips a property', text: 'In `a`, the comma pair is an **elision**: the initializer simply does not create index 1. Reading `a[1]` yields undefined only because reading any absent property yields undefined — nothing was stored there.' },
          { label: 'Step 2: the explicit value exists', text: 'In `b`, index 1 exists and holds the value undefined. Both arrays agree on length and on every element read, so ordinary code cannot tell them apart.' },
          { label: 'Step 3: existence tests can', text: 'The `in` operator (Section 4.5) tests property existence, not value: `1 in b` is true, `1 in a` is false. `Object.keys` shows the same split: two keys versus three.' },
          { label: 'Step 4: iteration can too', text: 'Chapter 7’s array methods skip holes but still call their callbacks for explicit undefined elements — so `forEach` runs three times on `b` and twice on `a`. When you mean undefined, write undefined; when you mean absent, write the elision — and expect sparse arrays to surprise readers either way.' }
        ],
        result: 'A hole is an absent property; an explicit undefined is a stored value. The arrays agree on length and reads but differ under in, Object.keys and the iteration methods.'
      }
    ],
    keyTakeaways: [
      'Primary expressions — literals, certain reserved words (true, false, null, this) and bare identifiers — are the atoms every other expression is built from.',
      'Object and array initializers look like literals but are compound expressions: subexpressions inside them are evaluated each time execution reaches them.',
      'Object initializer toolbox: property: value pairs, ES6 shorthand, computed keys [expr], method shorthand, accessor properties, and spread ...obj (later keys win).',
      'Array literals nest, spread, and can contain elisions — commas that create holes (absent properties) rather than undefined elements; trailing commas change nothing.',
      'Initializers evaluate fresh on every pass — safe in loops and function bodies — and spread copies only one level deep, sharing nested objects.'
    ],
    quiz: [
      {
        q: 'Which of these is NOT a primary expression?',
        options: [
          'A string literal such as "hello"',
          'A bare identifier such as total',
          'A property access such as o.x',
          'The reserved word this'
        ],
        answer: 2,
        explanation: 'Property access builds a larger expression from a primary one — it needs an object expression and a name. Literals, certain reserved words and variable references are the primary atoms.'
      },
      {
        q: 'When `x` and `y` are in scope, what does the shorthand `{ x, y }` stand for?',
        options: ['{ x: y, y: x }', '{ x: x, y: y }', 'A declaration of two new variables', '{ "x": "y" }'],
        answer: 1,
        explanation: 'ES6 shorthand uses each identifier once as the property name and once as the value: the property "x" gets the value of the variable x, and likewise for y.'
      },
      {
        q: 'After `const a = [1, , 3];`, what is the value of `1 in a`?',
        options: ['true — undefined is stored there', 'false — there is no property "1" at all', 'undefined', 'It throws a SyntaxError'],
        answer: 1,
        explanation: 'The comma pair is an elision: a hole. Index 1 never becomes a property, so the existence test is false even though a[1] reads as undefined.'
      },
      {
        q: 'Given `const defaults = { color: "teal", size: 1 };`, what is `{ ...defaults, color: "rose" }`?',
        options: [
          '{ color: "teal", size: 1 } — spread wins',
          '{ color: "rose", size: 1 } — the later explicit key overrides the spread-in value',
          '{ color: "rose" } — only later keys are kept',
          'A SyntaxError — spread cannot be followed by other properties'
        ],
        answer: 1,
        explanation: 'Spread copies properties in order; a property written after it (with the same key) overwrites the copied value. Reverse the order and the spread-in teal would win instead.'
      },
      {
        q: 'An object initializer containing `Date.now()` sits inside a loop body that runs three times. How many times does Date.now() execute?',
        options: [
          'Once — literals are folded at parse time',
          'Three times — initializers are evaluated fresh each time execution reaches them',
          'Zero — function calls are not allowed in literals',
          'Once per property in the whole program'
        ],
        answer: 1,
        explanation: 'Initializers are live expressions: every property value is evaluated on every pass, left to right. That is what makes them safe to reuse in loops — each pass gets fresh values and a fresh object.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'js-ch4-s2',
    readingTime: 9,
    intro: 'Between the atoms of Section 4.1 and the operators of Section 4.3 sit the expressions that make objects usable: **function definition expressions** (values that are also behavior), **property access expressions** (the two syntaxes for reading a property) and **invocation expressions** (calling the function). Together they introduce this — the keyword whose value is decided not by where a function is defined but by how it is invoked, a distinction that will echo through Chapters 8 and 9.',
    objectives: [
      'Write anonymous, named and arrow function definition expressions and know when each is appropriate',
      'Choose between expression.identifier and expression[expression] for property access',
      'Invoke functions and methods, including with spread arguments and the conditional ?.( ) form',
      'Predict the value of this for method calls versus plain function calls',
      'Explain how ?. short-circuits a property access that would otherwise throw'
    ],
    concepts: [
      {
        term: 'Function definition expressions',
        kind: 'definition',
        statement: 'A **function definition expression** defines a function value — usually anonymous — with the `function` keyword:\n```js\nconst square = function (x) { return x * x; };    // anonymous\nconst f = function fact(n) {                      // NAMED expression\n  return n <= 1 ? 1 : n * fact(n - 1);           // name enables recursion\n};\nconst sq = (x) => x * x;                           // arrow (ES6)\n```\nWhen a name is present it becomes a binding **inside the function only** — invisible outside, perfect for recursion. Arrows are more than shorthand: they also inherit `this` instead of receiving one (Chapter 8).',
        detail: 'A function definition becomes a *declaration statement* (Chapter 5) only when the `function` keyword is the very first token of the statement — otherwise it is this expression.'
      },
      {
        term: 'The two property access syntaxes',
        kind: 'method',
        statement: 'A property is read (or assigned) with either **dot notation** `expression.identifier` or **bracket notation** `expression[expression]`:\n```js\no.x          // dot: fixed name, valid identifier only\no["x"]       // bracket: same read, string key\no[0]         // key becomes the string "0"\nlet k = "color";\no[k]         // reads the property the variable names\no["main color"]  // spaces, dashes, any string: brackets only\n```\nThe dot requires the property name to be a literal identifier; the bracket form evaluates its own subscript expression and converts it to a **string** key. Use dot whenever you can, brackets whenever you must.',
        detail: 'Note that `o.m` never consults a variable m — the identifier after the dot is the property name, literally. `o[m]` never ignores the variable m — the subscript is always evaluated.'
      },
      {
        term: 'When brackets are mandatory',
        kind: 'insight',
        statement: 'The dot accepts only identifiers: letters, digits, `$` and `_`, not starting with a digit, no spaces or punctuation. So numeric keys (`a[0]`), keys with spaces or hyphens (`o["data-id"]`), keys stored in variables, and keys computed at runtime all require brackets — brackets are **mandatory** for every one of those cases. Since ES5, reserved words are legal after the dot (`o.class`, `o.new`), but they are the one case linters still squint at. Mixed chains are the norm: `data.rows[i].cells[j]`.',
        detail: 'The classic bug is writing `routes.m` when a variable m holds the key — the dot reads the literal property "m" (usually undefined) instead. Section 4.2’s second worked example is exactly this trap.'
      },
      {
        term: 'Conditional property access ?.',
        kind: 'method',
        statement: 'ES2020 adds a **conditional access** form. `a?.b` reads `a.b` when `a` is not null or undefined; when it is, the access yields `undefined` instead of throwing `TypeError`:\n```js\no?.x          // undefined when o is null/undefined; else o.x\no?.[k]        // conditional bracket form\nf?.(arg)      // conditional invocation, below\n```\nThe short circuit covers the whole chain: in `a?.b.c.d`, a null `a` skips the entire remainder — `.c` is never even evaluated.',
        detail: 'Section 4.6 pairs ?. with ?? to rebuild values that would otherwise be errors: `settings.user?.profile?.name ?? "guest"`. One caveat: the result undefined cannot distinguish "the property is missing" from "the property holds undefined".'
      },
      {
        term: 'Invocation expressions',
        kind: 'definition',
        statement: 'An **invocation expression** is `f(args)`: JavaScript evaluates `f` (if the result is not callable it throws `TypeError`), then evaluates each argument **left to right**, then runs the function body with parameters bound to those values. `f(...a)` **spreads** an array’s elements as the arguments. The value of the invocation expression is the function’s return value — or `undefined` if it falls off the end.',
        detail: 'Argument evaluation order is why `f(i++, i++)` passes two different values (Section 4.4 traces it). Spread in calls is ES6, the mirror image of spread in array literals.'
      },
      {
        term: 'Method invocation and this',
        kind: 'law',
        statement: 'When the property access that yields the function is part of the invocation itself, it is a **method invocation** and `this` is bound to the object: `o.m(x)` runs `m` with `this === o`. A plain invocation — `let g = o.m; g(x)` — loses that association: in strict mode `this` is `undefined`, in sloppy mode the global object. **The value of this depends on how the function is invoked, not on where it is defined.**',
        detail: 'Chapters 8 and 9 complete the story: arrows inherit this lexically, call/apply/bind set it explicitly, and classes have their own rules. The call-form distinction — o.m() versus g() — is the part to master now.'
      },
      {
        term: 'Evaluation order and side effects',
        kind: 'insight',
        statement: 'The pieces of an access or invocation are evaluated strictly **left to right**: in `a[i++] = a[i++]` the first postfix increment happens first, so the two accesses can see different indices. Method chains read the same way — `o.m().n()` calls `m` first, then accesses `.n` on its *result*. Relying on evaluation order across side effects is legal but a readability hazard; sequence such effects with separate statements.',
        detail: 'This left-to-right rule is a JavaScript constant: it governs operators (Section 4.3), arguments, and the pieces of property access alike. Other languages leave some of it unspecified — JavaScript never does.'
      }
    ],
    examples: [
      {
        title: 'Trace: dot, bracket and a dynamic key',
        problem: 'A routes object is indexed by HTTP method read from a request. Which access forms work, and which one silently reads the wrong property?',
        steps: [
          { label: 'The code', text: '```js\nconst routes = {\n  GET: "/list",\n  "POST /save": "/save",\n};\nconst m = "GET";\nroutes.GET            // (1)\nroutes[m]             // (2)\nroutes["POST /save"]  // (3)\nroutes.m              // (4)\n```' },
          { label: 'Step 1: dot reads the literal name', text: '(1) `routes.GET` is dot notation: the identifier GET names the property "GET" — object keys are strings and `GET` converts to exactly that key. Result "/list".' },
          { label: 'Step 2: bracket reads through the variable', text: '(2) `routes[m]` evaluates the variable m first (the string "GET"), converts it to the key, and reads the same property: "/list". Whenever the name comes from data, brackets are the form.' },
          { label: 'Step 3: non-identifier keys need brackets', text: '(3) `routes["POST /save"]` cannot be written with a dot — spaces make "POST /save" an invalid identifier — but bracket keys accept any string. Result "/save".' },
          { label: 'Step 4: the classic bug', text: '(4) `routes.m` does NOT read through the variable — the dot wants a property literally named "m", which does not exist, so the result is `undefined` with no error. If you want the variable, it must sit inside brackets.' }
        ],
        result: 'Dot is fixed-name, bracket is computed-name. `routes.m` versus `routes[m]` is the classic lookup bug: same letter, opposite meanings.'
      },
      {
        title: 'Trace: this follows the call form',
        problem: 'An object’s method that uses this is called three ways: as a method, as a plain function, and through an arrow wrapper. Predict all three outcomes in strict mode.',
        steps: [
          { label: 'The code', text: '```js\n"use strict";\nconst counter = {\n  count: 0,\n  bump() { return ++this.count; },\n};\ncounter.bump();                  // (1)\nconst b = counter.bump;\ntry { b(); } catch (e) { log(e.name); }  // (2)\nconst safeBump = () => counter.bump();\nsafeBump();                      // (3)\n```' },
          { label: 'Step 1: method invocation', text: '(1) The access `counter.bump` is part of the call, so this is counter: `++this.count` increments the object’s own property and returns 1.' },
          { label: 'Step 2: plain invocation', text: '(2) The expression before the parentheses is just a variable — not an access on counter — so this is undefined in strict mode. `++this.count` throws `TypeError: Cannot set properties of undefined`. The function was not broken; the call form was.' },
          { label: 'Step 3: the arrow re-establishes the method call', text: '(3) The arrow ignores its own call form entirely (arrows have no this of their own) and its body performs `counter.bump()` — a genuine method invocation. count becomes 2.' },
          { label: 'Step 4: the lesson generalized', text: 'Detach a method from its object (assign it, pass it as a callback) and you change this unless you re-attach it. Chapter 8 adds the tools — bind, arrows, class fields — that make the re-attachment routine.' }
        ],
        result: 'Same function, three answers: 1, a TypeError, then 2. this is a property of the invocation, not of the function.'
      }
    ],
    keyTakeaways: [
      'Function definition expressions (function or arrow) create function values; the name in a named expression is a recursion-only local binding.',
      'Dot for literal identifier names, brackets for computed or non-identifier keys — and o.m never consults a variable named m.',
      '?. conditional access short-circuits the whole chain to undefined when its base is null/undefined; f?.(x) is its call form.',
      'Invocation evaluates f and the arguments left to right, then runs the body; f(...a) spreads an array into the argument list.',
      'this is decided by the call form: method call o.m() binds o, plain call binds undefined (strict) or the global object (sloppy); arrows inherit this from their enclosing scope.'
    ],
    quiz: [
      {
        q: '`o.x` is equivalent to which bracket-form expression?',
        options: ['`o["x"]`', '`o[x]`', '`o[0]`', 'None — dot and bracket read different properties'],
        answer: 0,
        explanation: 'The dot reads the literal identifier x as a string key, exactly like o["x"]. o[x] would instead evaluate the variable x — a different read whenever x holds anything but the string "x".'
      },
      {
        q: 'Which property CANNOT be accessed with dot notation?',
        options: [
          'A property named "saveAll"',
          'A property named "data-id"',
          'A property named "Save2"',
          'A property named `$total`'
        ],
        answer: 1,
        explanation: 'Identifiers may contain letters, digits, `$` and `_` but not hyphens — "data-id" is not an identifier, so brackets `o["data-id"]` are mandatory. `$total` and `Save2` are perfectly legal identifier names.'
      },
      {
        q: 'After `const f = o.m; f();` in strict mode, what is this inside m?',
        options: ['o', 'undefined', 'The global object', 'null'],
        answer: 1,
        explanation: 'The call form is plain — the expression before ( ) is a variable, not an access on o — so strict mode binds this to undefined. In sloppy code it would be the global object instead.'
      },
      {
        q: 'When a is null, what does `a?.b.c` evaluate to?',
        options: [
          'undefined, and the rest of the chain is not evaluated',
          'null',
          'A TypeError from reading .b of null',
          'undefined only if c is also missing'
        ],
        answer: 0,
        explanation: 'The ?. short-circuits the entire chain: once a is known nullish, neither .b nor .c is evaluated and the whole expression is undefined — no exception, no further work.'
      },
      {
        q: 'In the call `f(a, b)`, when are the two arguments evaluated?',
        options: [
          'Left to right, before the function body starts running',
          'Right to left, before the body runs',
          'Lazily, inside the body, at first use',
          'In undefined order — the specification leaves it open'
        ],
        answer: 0,
        explanation: 'JavaScript always evaluates subexpressions left to right: a first, then b, then the invocation. Lazy argument evaluation is a feature of some other languages, never JavaScript.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'js-ch4-s3',
    readingTime: 10,
    intro: 'The new operator creates the objects that constructor functions and classes work on; after that one addition, this section steps back and organizes the whole chapter. Operators are classified by arity, by the operand types they convert, and by their side effects — and then the two rules that decide how a long unparenthesized expression is grouped before anything runs: **precedence** and **associativity**, with the surprise that evaluation order is a separate, simpler rule of its own.',
    objectives: [
      'Describe what a new expression does: fresh object, prototype link, constructor call',
      'Classify operators by arity, operand types, side effects and result types',
      'Apply the precedence and associativity table to parse complex expressions',
      'Explain why evaluation order is always left to right, independent of precedence'
    ],
    concepts: [
      {
        term: 'Object creation expressions',
        kind: 'definition',
        statement: 'An **object creation expression** creates a new object and invokes a function as its **constructor**:\n```js\nconst now = new Date();       // no-argument form\nconst p = new Point(2, 3);     // constructor with arguments\n```\nEvaluation: create a new empty object whose prototype is the constructor’s `.prototype` property; invoke the constructor with `this` bound to the new object; the value of the `new` expression is that new object — unless the constructor explicitly returns an object of its own, in which case that object wins.',
        detail: 'Chapter 9 builds classes on exactly this mechanism: class constructors run with new-like semantics, and the class syntax is largely a cleaner wrapper around prototype objects.'
      },
      {
        term: 'Operators, operands, arity',
        kind: 'definition',
        statement: 'An **operator** combines one or more operand expressions into a larger one. By **arity**: unary (`-x`, `typeof x`), binary (`x + y`) and ternary — JavaScript has exactly one ternary operator, the conditional `?:`. One symbol can serve several operators: `-` is both unary negation and binary subtraction, `++` exists in postfix and prefix forms with different values, and `*` is multiplication while `*=` is assignment. Operators are written with punctuation or with keywords (`typeof`, `void`, `delete`, `in`, `instanceof`, `await`).',
        detail: 'A few operators change program state (assignment, delete, ++/--): these have **side effects**, flagged in the reference table. Everything else merely computes a value.'
      },
      {
        term: 'Operand and result types',
        kind: 'law',
        statement: 'Most operators expect primitive operands and **convert** whatever they receive: `*`, `/`, `%`, `-` and unary `-` convert with `Number()`, so `"2" * 3` is 6 and `"" - 1` is -1. When conversion fails the answer is `NaN`, never an exception. The comparisons and `+` behave differently depending on operand types (Section 4.5, Section 4.4), and object operands are first reduced via `valueOf`/`toString` (Section 3.7). Bitwise operators are the strict ones: they truncate to 32-bit integers.',
        detail: 'Assignment operators require an lvalue on the left — a variable, object property or array element — and throw a ReferenceError otherwise. The result of an assignment expression is the assigned value.'
      },
      {
        term: 'Operator precedence',
        kind: 'law',
        statement: '**Precedence** decides how strongly an operator binds its operands when different operators mix. Property access, calls and `new` bind tightest; the comma operator is loosest. The full order this book uses, highest first:\n```js\n// Precedence table — highest binds tightest; L/R = associativity\n//  1   ()  .  []  ?.  new (with argument list)      access, call      L\n//  2   new (no argument list)                                        R\n//  3   x++   x--                       postfix                       L\n//  4   ++x  --x  +x  -x  ~  !  typeof void delete await                R\n//  5   **                                                              R\n//  6   *   /   %                                                       L\n//  7   +   -                                                           L\n//  8   <<  >>  >>>                                                     L\n//  9   <  <=  >  >=  in  instanceof                                    L\n// 10   ==  !=  ===  !==                                                L\n// 11   &                                                              L\n// 12   ^                                                              L\n// 13   |                                                              L\n// 14   &&                                                             L\n// 15   ||                                                             L\n// 16   ??                                                              R\n// 17   ?: (conditional)                                               R\n// 18   =  +=  -=  *=  /=  %=  **=  <<=  >>=  >>>=  &=  |=  ^=         R\n// 19   , (comma)                                                      L\n```',
        detail: 'Two consequences worth memorizing: unary operators bind looser than postfix but tighter than `**`, and `&` binds tighter than `^` which binds tighter than `|` — all tighter than `&&` and `||`, which surprises people coming from other languages.'
      },
      {
        term: 'Associativity',
        kind: 'definition',
        statement: '**Associativity** decides grouping when several operators of the SAME precedence compete for an operand. Most operators group **left to right** (L): `a - b - c` is `(a - b) - c`. The right-to-left (R) exceptions matter in practice: unary operators (`!~-x` is `!(~(-x))`), exponentiation (`2**3**2` is `2**(3**2)` = 512), assignment (`a = b = c` pushes c into b then a), the conditional `?:`, and `??`. Postfix `++`/`--` attach to the single expression on their left, so no question arises.',
        detail: '`2 ** 3 ** 2` and `a = b = c` are the two chains you will actually type. Assignment returns the assigned value — that is what makes the chain work: b = c evaluates to c, and a = (that value) evaluates to c as well. If a mixed expression needs more than a second of thought, parenthesize it — clarity beats cleverness in review.'
      },
      {
        term: 'Evaluation order is left to right',
        kind: 'law',
        statement: 'Precedence and associativity decide how an expression is **grouped**; which subexpression actually runs first is a separate rule — always **left to right, at every level**. In `f() + g() * h()` the multiplication binds tighter, but `f()` still executes first:\n```js\nlet order = [];\nfunction f() { order.push("f"); return 1; }\nfunction g() { order.push("g"); return 2; }\nfunction h() { order.push("h"); return 3; }\nf() + g() * h();    // => 7\norder               // => ["f", "g", "h"] — f ran first\n```\nThe rule matters exactly when side effects interact; with pure operands it is invisible.',
        detail: 'This is the same left-to-right discipline seen in arguments and property access (Section 4.2) — it is a property of the whole language, not of any one operator.'
      },
      {
        term: 'Parentheses override',
        kind: 'method',
        statement: 'Parentheses are not an operator: they are **grouping syntax** that forces the parse you mean, overriding both precedence and associativity. `(2 + 3) * 4` is 20 where `2 + 3 * 4` is 14; `(a || b) ?? c` is legal where `a || b ?? c` is a SyntaxError (Section 4.6). Parentheses do not force evaluation order — that is already fixed — but they do change which value flows where.',
        detail: 'When in doubt in code that others will read, parenthesize. The linters of Chapter 17 agree: they flag precedence-sensitive mixtures like a & b == c even when the parse is technically correct.'
      }
    ],
    examples: [
      {
        title: 'Trace: new, step by step',
        problem: 'Show exactly what `new Point(2, 3)` does — and what would change if the constructor returned an object of its own.',
        steps: [
          { label: 'The code', text: '```js\nfunction Point(x, y) {\n  this.x = x;\n  this.y = y;\n}\nconst p = new Point(2, 3);\nconst q = new Point(9, 9);\np instanceof Point    // true\np === q               // false — two fresh objects\n```' },
          { label: 'Step 1: allocate and link', text: 'new creates a new empty object and sets its prototype to Point.prototype — the object that gives every Point its shared methods.' },
          { label: 'Step 2: run the constructor with this', text: 'The constructor body executes with this bound to the fresh object. The two assignments create own properties x and y on it — nothing is returned, which means "return this" by default.' },
          { label: 'Step 3: the return rule', text: 'The new expression evaluates to the fresh object — unless the constructor executes `return someObject`, in which case that object replaces it (returning a primitive is ignored). Had Point returned { z: 0 }, every new Point would be that empty-ish object and p.x would be undefined.' },
          { label: 'Step 4: identity and instanceof', text: 'Each new expression manufactures a fresh object: p and q are distinct references (Section 3.6), so p === q is false — while both inherit through Point.prototype, so p instanceof Point is true (Section 4.5).' }
        ],
        result: 'new = allocate a fresh object, prototype-link it, invoke the constructor with this bound to it, and yield that object unless the constructor returns its own object.'
      },
      {
        title: 'Trace: parsing without parentheses',
        problem: 'Group and evaluate three expressions using only the precedence and associativity rules.',
        steps: [
          { label: 'The expressions', text: '```js\nlet x = 2;\nx + 3 * 4 ** 2      // (A)\n2 ** 3 ** 2         // (B)\nlet a = 1, b = 2;\na = b = 3           // (C)\n```' },
          { label: 'Step 1: (A) three levels at once', text: '** (level 5) beats * (level 6), which beats + (level 7): the grouping is x + (3 * (4 ** 2)). So 4 ** 2 = 16, then 3 * 16 = 48, then 2 + 48 = 50.' },
          { label: 'Step 2: (B) right associativity', text: 'Two ** operators compete for the middle 3; ** is right-associative so the right pair groups first: 2 ** (3 ** 2) = 2 ** 9 = 512. Left-associative grouping would have given (2 ** 3) ** 2 = 64 — not what JavaScript does.' },
          { label: 'Step 3: (C) assignment chains flow right to left', text: 'Assignment is also right-associative: b = 3 runs first, and the value it yields (3) flows left into a = 3. Both variables now hold 3, and the expression’s value is 3.' },
          { label: 'Step 4: override when the parse is not the intent', text: 'Parentheses change the grouping, not the order discipline: (x + 3 * 4) ** 2 is (2 + 12) ** 2 = 196. When code reviewers would reach for the table, write the parentheses instead.' }
        ],
        result: '(A) 50, (B) 512, (C) both variables 3 with expression value 3 — precedence groups, associativity breaks ties, and neither changes left-to-right execution.'
      }
    ],
    keyTakeaways: [
      'new allocates a fresh object, links it to the constructor’s prototype, invokes the constructor with this, and returns the object — unless the constructor returns an object of its own.',
      'Operators are unary, binary or (exactly one) ternary; some symbols encode several operators, and a few have side effects.',
      'Most operators convert their operands — NaN is the failure answer, never an exception; bitwise operators truncate to 32 bits; assignment needs an lvalue.',
      'Precedence groups, associativity breaks same-precedence ties: only unary operators, **, ?:, ?? and assignment (plus new and =>) associate right to left.',
      'Evaluation order is always left to right at every level — independent of precedence and associativity.',
      'Parentheses override grouping (and are required to mix ?? with && / ||); they do not change evaluation order.'
    ],
    quiz: [
      {
        q: 'Which list contains ONLY right-associative operators?',
        options: [
          'assignment, conditional ?:, **, unary operators',
          'arithmetic, equality, logical && and ||',
          'property access, function call, new',
          'relational, shifts, comma'
        ],
        answer: 0,
        explanation: 'The right-to-left exceptions are unary operators, **, ?:, ?? and assignment (with new and =>). Everything else — arithmetic, equality, logical, relational, shifts and comma — groups left to right.'
      },
      {
        q: 'In `x + y * z`, if x, y and z are function calls, which runs first?',
        options: ['y, because * binds tighter', 'x, because evaluation order is always left to right', 'z, because the rightmost is evaluated first', 'The order is unspecified'],
        answer: 1,
        explanation: 'Precedence decides grouping (y * z first), but execution is left to right regardless: x is evaluated before either of the others. Grouping and order are independent rules.'
      },
      {
        q: 'What does `2 ** 3 ** 2` evaluate to?',
        options: ['64', '512', '36', 'A SyntaxError'],
        answer: 1,
        explanation: '** is right-associative: the grouping is 2 ** (3 ** 2) = 2 ** 9 = 512. The would-be left grouping (2 ** 3) ** 2 = 64 is not what the language does.'
      },
      {
        q: 'What happens when a constructor function invoked with new executes `return { z: 0 };`?',
        options: [
          'The new expression evaluates to that returned object instead of the fresh one',
          'A TypeError — constructors cannot return values',
          'The returned object is ignored and the fresh object is used',
          'The fresh object gains a z property'
        ],
        answer: 0,
        explanation: 'new yields whatever object the constructor explicitly returns; only when it returns nothing (or a primitive, which is ignored) does the freshly allocated this become the value of the expression.'
      },
      {
        q: 'Which of these binds its operand TIGHTEST?',
        options: ['`x * y`', '`x++` (postfix)', '`typeof x`', '`a && b`'],
        answer: 1,
        explanation: 'Postfix ++/-- sit above the unary operators, which sit above multiplication, which sits far above &&: the table’s top three levels are member access/call, new, then postfix increment and decrement.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'js-ch4-s4',
    readingTime: 11,
    intro: 'Arithmetic in JavaScript is generous to a fault: every operator accepts every operand, converting as needed and preferring NaN over an error. This section covers the arithmetic operators proper — **, *, /, % and the two-faced + — then the unary forms including prefix and postfix ++/-- with their famous evaluation trap, NaN propagation, and the bitwise family that quietly truncates everything to 32 bits and unlocks flag masks, bit sets, and the two’s complement arithmetic behind signed and unsigned shifts.',
    objectives: [
      'Predict results of **, *, /, %, + and - across all string/number operand combinations',
      'Distinguish prefix from postfix ++ and --, tracing both their values and their side effects',
      'Explain NaN propagation through arithmetic and its two ** exceptions',
      'Evaluate `&`, `|`, `^`, `~`, `<<`, `>>` and `>>>` on 32-bit two’s complement operands',
      'Use bit masks to set, test, clear and toggle flag bits'
    ],
    concepts: [
      {
        term: 'Exponentiation',
        kind: 'definition',
        statement: 'The ** operator (ES2016) raises its left operand to the power of its right: `2 ** 10` is 1024, `x ** 0.5` is a square root. It is **right-associative** (Section 4.3) and has a deliberate grammar surprise: `-3 ** 2` is a **SyntaxError** — unary minus binds too loosely for the parser to guess your intent, so you must write `(-3) ** 2` (9) or `-(3 ** 2)` (-9). The `**=` form assigns the result.',
        detail: '** works for BigInt operands too (Chapter 3); it does not accept a negative base with a fractional exponent (that returns NaN). Math.pow is the identical function form.'
      },
      {
        term: '* / % — multiply, divide, remainder',
        kind: 'law',
        statement: 'All three convert their operands with `Number()`: `"2" * 3` is 6, `"x" * 3` is NaN. **Division always produces a floating-point result** — there is no integer division: `7 / 2` is 3.5 (use `Math.floor` or `Math.trunc` to integerize). Division by zero yields Infinity, -Infinity or NaN (Section 3.2). The remainder `%` takes the **sign of the dividend**: `-5 % 2` is -1 and `5 % -2` is 1 — like Java, unlike Python. For a true mathematical modulo: `((n % m) + m) % m`.',
        detail: 'Practical uses of %: parity tests (n % 2), cycling through indexes ((i + 1) % len), and splitting a quantity into units. Remember the sign rule when the dividend can be negative.'
      },
      {
        term: 'The two faces of +',
        kind: 'law',
        statement: 'Binary `+` adds numbers or concatenates strings — and it decides which after converting objects to primitives. **If either operand is (or converts to) a string, + concatenates**, converting the other side to a string; otherwise both go through Number():\n```js\n1 + 2          // 3 — both numbers\n"1" + 2        // "12" — a string on either side wins\n1 + 2 + "3"    // "33" — (1 + 2) first, then 3 + "3"\n"3" + 1 + 2    // "312" — string first, all concat after\ntrue + true    // 2 — booleans numberify\nnull + 1       // 1 — null converts to 0\nundefined + 1  // NaN — undefined converts to NaN\n1 + {}         // "1[object Object]"\n1 + []         // "1" — empty array converts to ""\n"6" - 1        // 5 — minus has ONE behavior\n"6" * "7"      // 42\n```\nEvery other arithmetic operator coerces to number; only + consults the types this way.',
        detail: 'This is the operator behind accidental "12" results from numeric-looking input. When summing, convert explicitly with Number() or unary + — Section 3.7 has the full conversion rules.'
      },
      {
        term: 'Unary + and unary -',
        kind: 'method',
        statement: 'The unary operators convert to a number and act: unary **minus negates** after ToNumber; unary **plus converts and does nothing else** — it is the idiomatic shorthand for `Number()`, commonly written without a space:\n```js\n+"3"        // 3\n+"3.14"     // 3.14\n+""         // 0\n+"x"        // NaN\n-"3"        // -3\n- -x        // double negation — x, converted, twice\n```\nObjects consult `valueOf` first, then `toString` — which is why `+new Date()` yields the millisecond timestamp (the Date’s numeric heart, Section 3.2).',
        detail: 'Prefer Number(x) when the conversion is the point and unary + when it is incidental (like the Date idiom). Unary operators bind tighter than * — `-x * y` is (-x) * y.'
      },
      {
        term: '++ and --: prefix versus postfix',
        kind: 'method',
        statement: '`++` and `--` add or subtract 1 from an lvalue (variable, property or element) and always work numerically — even `"5"++` becomes 6, no concatenation. The difference is what the **expression itself yields**: the **postfix** form (`i++`) returns the value *before* adjusting; the **prefix** form (`++i`) returns the value *after*:\n```js\nlet i = 1;\nlet a = i++;   // a = 1, i = 2 — old value out, then bump\nlet b = ++i;   // b = 3, i = 3 — bump first, new value out\n```\nBoth forms have the same side effect; only the yielded value differs.',
        detail: 'Because arguments evaluate left to right (Section 4.2), `f(i++, i++)` passes two different values — the worked example traces it. When the value is unused, prefer prefix: it reads as one idea.'
      },
      {
        term: 'NaN propagation',
        kind: 'law',
        statement: 'NaN is sticky: any arithmetic operation with a NaN operand produces NaN — `NaN + 1`, `NaN * 0` are all NaN — and every comparison involving NaN is false (Section 4.5). The single exception is IEEE-faithful: `NaN ** 0` is 1. NaN is JavaScript’s failure sentinel for numeric work — `parseInt("x")`, `Number("x")`, `undefined + 1` all land there rather than throwing.',
        detail: 'Detect it with `Number.isNaN(x)` or the self-inequality idiom `x != x` (Chapter 3). Because it propagates silently, validate at the boundary — one NaN in a running sum poisons the whole result.'
      },
      {
        term: 'Bitwise operators',
        kind: 'definition',
        statement: 'The bitwise operators convert their operands to **32-bit signed integers** (two’s complement), combine them bit by bit, and return a number:\n```js\n0x0F & 0x3D   // => 0x0D (13): AND — 1 only where BOTH are 1\n0x0F | 0x3D   // => 0x3F (63): OR — 1 where EITHER is 1\n0x0F ^ 0x3D   // => 0x32 (50): XOR — 1 where EXACTLY ONE is 1\n~0x0F         // => -16 (0xFFFFFFF0): NOT — flip every bit\n```\nThese are precisely the AND, OR and XOR gates of Mano’s Digital Logic (Chapters 1–2) — the truth tables Rosen’s Boolean algebra chapter (Ch 12) formalizes — evaluated here on numbers instead of wires. Values outside the 32-bit range wrap: -1 is all ones, so `-1 & 0xFF` is 255.',
        detail: 'Bitwise operands beyond $\\pm 2^{31}$ wrap modulo $2^{32}$, and NaN/Infinity convert to 0. BigInt has its own bitwise operators with no width limit (Chapter 3).'
      },
      {
        term: 'Shift operators',
        kind: 'definition',
        statement: 'The three **shift operators** move the 32-bit pattern left or right, with a sign difference on the right:\n```js\n5 << 3          // => 40: left shift = multiply by 2^3\n1 << 31         // => -2147483648: overflow into the sign bit\n-12 >> 2        // => -3: >> keeps the sign bit (arithmetic shift)\n-12 >>> 2       // => 1073741821: >>> fills with zeros (unsigned)\n-1 >>> 0        // => 4294967295: the same bits, read as unsigned\n```\n`>>` treats the value as signed and sign-extends; `>>>` treats the same 32 bits as an unsigned integer and pushes in zeros — the tool for reading a bit pattern without its sign, used heavily with the typed arrays of Chapter 11.',
        detail: 'A left shift is multiplication by $2^{n}$ with wraparound; a right `>>` by $n$ is floor division by $2^{n}$ for both signs (-12 >> 2 is floor(-3) = -3). Beyond 31, shift counts wrap modulo 32: 1 << 32 is 1.'
      }
    ],
    examples: [
      {
        title: 'Trace: postfix versus prefix',
        problem: 'Evaluate each line, then predict a two-argument call that increments the same variable twice.',
        steps: [
          { label: 'The code', text: '```js\nlet i = 1;\nlet a = i++;        // (1)\nlet b = ++i;        // (2)\nlet c = i++ - ++i;  // (3)\nfunction show(x, y) { return [x, y]; }\nlet n = 0;\nshow(n++, ++n);     // (4)\n```' },
          { label: 'Step 1: (1) postfix — old value out', text: 'i++ yields the value before the increment: a is 1. The side effect still happens — i is 2 after the statement.' },
          { label: 'Step 2: (2) prefix — new value out', text: '++i bumps first: i goes 2 to 3, and b receives the new value 3. Same operator family, same side effect, different yielded value.' },
          { label: 'Step 3: (3) both forms in one expression', text: 'Left to right: i++ yields 3 (i becomes 4), then ++i bumps to 5 and yields 5. c = 3 - 5 = -2, with i left at 5. Mixing forms like this is legal and unwise — this line exists so the trace can prove you understand it, not as a style model.' },
          { label: 'Step 4: (4) the argument-order trap', text: 'Arguments evaluate left to right: n++ yields 0 (n becomes 1), then ++n bumps to 2 and yields 2. show returns [0, 2] — two different values from the "same" variable. In languages with unspecified argument order this line would be unanswerable; in JavaScript it is merely a bad idea.' }
        ],
        result: 'a = 1, b = 3, c = -2 (i ends 5), and show(n++, ++n) returns [0, 2]. Postfix hands out the old value, prefix the new one — and left-to-right order fixes every question.'
      },
      {
        title: 'Worked: a permission mask',
        problem: 'Implement a Unix-style permission word with bits for READ, WRITE and EXEC: grant, test, clear and toggle permissions using only bitwise operators.',
        steps: [
          { label: 'Step 1: define the bits', text: '```js\nconst READ = 0b001;   // 1\nconst WRITE = 0b010;  // 2\nconst EXEC = 0b100;  // 4\nlet perms = 0;        // no permissions\n```\nEach constant is one bit position; any combination is their union — a set encoded as a number.' },
          { label: 'Step 2: grant a bit', text: '```js\nperms = READ | WRITE;   // 0b011 = 3\nperms |= EXEC;          // 0b111 = 7 — add a bit without disturbing others\n```\nOR sets bits: a 0 becomes 1 where the mask has a 1, and existing 1s stay. This is set union, gate for gate the OR of Chapter 2 in Mano’s Digital Logic.' },
          { label: 'Step 3: test for a bit (never with truthiness alone)', text: '```js\n(perms & READ) !== 0    // true — READ is set\n(perms & EXEC) !== 0    // false — EXEC is not\nperms & (READ | EXEC)   // 0b101 = 5 — which of several bits are set\n```\nAND masks out everything but the bit(s) of interest. Compare with `!== 0` as a discipline: `&` yields a NUMBER (here 1 or 5), and when you test several bits at once the nonzero result cannot tell you which ones — only the comparison can.' },
          { label: 'Step 4: clear and toggle', text: '```js\nperms &= ~READ;   // 0b110 — READ cleared, others untouched\nperms ^= WRITE;   // 0b100 — WRITE toggled off\nperms |= READ;    // 0b101 — and back on\n```\n`~READ` is all ones except the READ bit, so AND-ing with it erases exactly that bit. XOR flips the masked bits in place — 1 to 0, 0 to 1.' }
        ],
        result: 'A number behaves as a bit set: `|` grants, `&` tests, `& ~` clears, `^` toggles — four idioms that cover essentially every flag-manipulation need.'
      },
      {
        title: 'Trace: >>, >>> and two’s complement',
        problem: 'Explain the three different results of shifting the same negative number, starting from its 32-bit representation.',
        steps: [
          { label: 'Step 1: write the bits', text: '12 is 0b1100. In 32-bit two’s complement, -12 is the bitwise complement of 11 plus 1: 0xFFFFFFF4 — every high bit set, the low four bits 0100.' },
          { label: 'Step 2: the arithmetic shift >>', text: '```js\n-12 >> 2    // => -3\n```\n>> shifts right two places, copying the sign bit in from the left — the value stays negative. It is floor division by 4: floor(-12 / 4) = -3 exactly.' },
          { label: 'Step 3: the zero-fill shift >>>', text: '```js\n-12 >>> 2   // => 1073741821\n```\n>>> pushes in zeros instead, so the same bit pattern 0xFFFFFFF4 becomes 0x3FFFFFFD — read as an unsigned integer, 1073741821. The bits did not change; the interpretation did.' },
          { label: 'Step 4: the unsigned-view idiom', text: '```js\n-1 >>> 0    // => 4294967295 (2^32 - 1)\n```\nShifting by zero converts nothing yet re-reads the pattern unsigned: -1 is all 32 ones, so as an unsigned value it is $2^{32} - 1$. This is the standard trick for inspecting what a negative number looks like to the bitwise operators — and for the unsigned reads in Chapter 11’s typed arrays.' }
        ],
        result: 'Same bits, three answers: -3 (sign-extended), 1073741821 (zero-filled), 4294967295 (unsigned re-read). >> preserves sign, >>> does not, and x >>> 0 displays the raw 32-bit pattern.'
      }
    ],
    keyTakeaways: [
      '** is right-associative and -3 ** 2 is a SyntaxError — parenthesize (-3) ** 2 or -(3 ** 2).',
      'Division is always floating point; % takes the sign of the dividend (-5 % 2 is -1); use ((n % m) + m) % m for true modulo.',
      '+ concatenates when either operand converts to a string — the only arithmetic operator that consults types this way; every other one numberifies (and yields NaN on failure).',
      'Postfix i++ yields the old value, prefix ++i the new one; both bump the same way, and argument lists evaluate left to right so f(i++, i++) passes two different values.',
      'NaN poisons arithmetic (NaN ** 0 being the lone 1 exception) and makes every comparison false — validate at input boundaries.',
      'Bitwise operators work on 32-bit two’s complement integers: `&` masks, `|` sets, `^` toggles, `~` inverts; `<<` multiplies by $2^{n}$, `>>` floor-divides preserving sign, `>>>` re-reads unsigned.',
      'The flag idioms: grant with `|=`, test with `(flags & bit) !== 0`, clear with `&= ~bit`, toggle with `^=`.'
    ],
    quiz: [
      {
        q: 'What are the values of `"7" - 1` and `"7" + 1`?',
        options: ['6 and "71"', '"71" and 6', '6 and 8', 'NaN and "71"'],
        answer: 0,
        explanation: 'Minus has one behavior — numeric coercion — so "7" becomes 7 and the result is 6. Plus sees a string operand and concatenates, giving "71". The two operators are not symmetric.'
      },
      {
        q: 'What does the expression `-3 ** 2` do?',
        options: ['Evaluates to 9', 'Evaluates to -9', 'Throws a SyntaxError at parse time', 'Evaluates to NaN'],
        answer: 2,
        explanation: 'The grammar forbids an unparenthesized unary operand directly left of ** — the designers chose a hard error over silent ambiguity. Write (-3) ** 2 for 9 or -(3 ** 2) for -9.'
      },
      {
        q: 'After `let i = 2; const r = [i++, i++];`, what are r and i?',
        options: ['r is [2, 2], i is 3', 'r is [2, 3], i is 4', 'r is [3, 3], i is 4', 'r is [2, 3], i is 3'],
        answer: 1,
        explanation: 'Array elements evaluate left to right: the first postfix yields 2 (i becomes 3), the second yields 3 (i becomes 4). Both entries reflect the old value at the moment each was evaluated.'
      },
      {
        q: 'Which expression tests whether n is odd?',
        options: ['`(n & 1) === 1`', '`n && 1`', '`(n | 1) === 1`', '`n ^ 1`'],
        answer: 0,
        explanation: 'AND with 1 masks everything but the low bit, which is 1 exactly for odd numbers. `n && 1` is a truthiness test of n, `n | 1` forces the bit on, and `n ^ 1` flips it.'
      },
      {
        q: 'What is the value of `-1 >>> 0`?',
        options: ['-1', '1', '4294967295', '0'],
        answer: 2,
        explanation: '-1 is thirty-two 1-bits in two’s complement; >>> re-reads the same pattern as unsigned — $2^{32} - 1$ = 4294967295. Shifting by zero leaves every bit in place.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.5
  {
    sectionId: 'js-ch4-s5',
    readingTime: 10,
    intro: 'Relational expressions ask how two values stand to each other — equal, identical, ordered, contained. JavaScript makes the chapter’s sharpest split here: **===** compares values with no conversion at all, **==** compares after a well-defined conversion dance, and the six comparison operators consult strings or numbers depending on both sides. Add in — which tests property existence, and instanceof, which walks prototype chains — and you have every "is this related to that" question the language can ask.',
    objectives: [
      'Apply the strict equality rules: primitives by value, objects by identity, NaN and +0/-0 corner cases',
      'Apply the == conversion algorithm, including the special null/undefined pairing',
      'Predict < <= > >= for string, mixed and NaN operands, and for Dates',
      'Use the in operator and distinguish own from inherited properties',
      'Use instanceof to test prototype chains, including its primitive exception'
    ],
    concepts: [
      {
        term: 'Strict equality ===',
        kind: 'law',
        statement: '**Strict equality** compares two values with no conversion whatsoever. Two numbers are equal when they have the same value — with the two famous exceptions: `NaN === NaN` is false, and `+0 === -0` is true. Two strings are equal when they have exactly the same length and the same 16-bit values in the same order. Two booleans when identical. Two objects (including arrays and functions) only when they are **the same object** — `[]` and `[]` are never equal. And values of different types are never strictly equal: `1 === "1"` is false, `true !== 1`.',
        detail: 'This is the equality to use by default — it never surprises. The only coercion it performs is none at all, which is exactly why linters (Chapter 17) enforce it.'
      },
      {
        term: 'Loose equality ==',
        kind: 'law',
        statement: '**Loose equality** first normalizes its operands, then compares. The algorithm: (1) `null` and `undefined` are equal to each other and to nothing else — no conversion applies to them; (2) same type → the === rules; (3) number vs string → the string converts to a number; (4) boolean vs anything → the boolean converts to a number first, then retry; (5) object vs primitive → the object converts to a primitive (`valueOf`, then `toString`, Section 3.7), then retry. Everything else — genuinely different non-nullish types — is false:\n```js\n1 == "1"          // true: "1" converts to 1\n0 == false        // true: false converts to 0\n"" == 0           // true: "" converts to 0\nnull == undefined // true — the special pairing\nnull == 0         // false: null converts to nothing\nNaN == NaN        // false: NaN is unequal to everything\n[1] == 1          // true: [1] converts to "1" then 1\n[] == ""          // true: [] converts to ""\n```',
        detail: 'The one idiom that earns its keep: `x == null` matches both null and undefined — a concise "is absent" test. Beyond it, == mostly produces bugs; prefer === everywhere else.'
      },
      {
        term: '!= and !==',
        kind: 'definition',
        statement: 'The **inequality operators** `!=` and `!==` are the exact negations: `a != b` is precisely `!(a == b)`, and `a !== b` is `!(a === b)`. No extra conversion rules of their own. The strict forms inherit all the advice: use `!==` by default, and reach for `!=` only in the `x != null` absence test.',
        detail: 'Because equality questions are binary, negation never changes the conversion story — only the answer. The full decision procedure lives in the two operators above.'
      },
      {
        term: 'Comparison operators < <= > >=',
        kind: 'law',
        statement: 'The four comparisons follow one rule: **if both operands are strings, compare code units; otherwise convert both to numbers** (objects via `valueOf`/`toString` with the numeric hint). If either conversion yields NaN, **every comparison is false** — including `x >= NaN` and `x < NaN` both:\n```js\n1 + 1 < 3          // true — numbers\n"11" < "3"        // true! — STRING compare: "1" < "3"\n"11" < 3          // false — numeric: 11 < 3 is false\n"one" < 3         // false — "one" converts to NaN\nnew Date(2020, 0) < new Date(2021, 0)   // true — timestamps\n```\nDates work because their `valueOf` is the millisecond timestamp (Section 3.2) — the one object comparison people write on purpose.',
        detail: 'The all-strings rule is character-by-character on UTF-16 code units, so uppercase letters sort before lowercase ("Z" < "a") — Chapter 3’s localeCompare exists for human ordering.'
      },
      {
        term: 'The in operator',
        kind: 'definition',
        statement: 'The **in operator** asks whether an object has a named property — own or inherited: `"x" in o`. It expects a string or something that converts to one on the left and an object on the right. On arrays, indices are property names: `0 in [10, 20]` is true, `2 in [10, 20]` is false. Inherited properties count: `"toString" in {}` is true — it lives on Object.prototype. To test only own properties, use `Object.hasOwn(o, "x")` or the older `o.hasOwnProperty("x")` (Section 6.4).',
        detail: 'in tests existence, not value — the exact tool that distinguished array holes from stored undefined in Section 4.1. The for/in statement of Chapter 5 is built on the same property-name enumeration.'
      },
      {
        term: 'The instanceof operator',
        kind: 'definition',
        statement: 'The **instanceof operator** — `object instanceof Constructor` — asks whether the constructor’s `.prototype` appears anywhere on the object’s prototype chain. It walks the chain of the left operand (after confirming it is an object) looking for that exact prototype object:\n```js\nfunction Point(x, y) { this.x = x; this.y = y; }\nconst p = new Point(1, 2);\np instanceof Point     // true — chain starts at Point.prototype\np instanceof Object   // true — chain continues to Object.prototype\n[] instanceof Array    // true\n[] instanceof Object  // true — arrays are objects\n"s" instanceof String  // false! — a primitive has no chain\nnew String("s") instanceof String   // true — this one does\n```\nPrimitives always answer false: instanceof tests objects, and a string primitive is not a String object (Section 3.6).',
        detail: 'Cross-realm objects (from another window or frame) can answer false unexpectedly — the classic iframe gotcha. Chapter 9 leans on instanceof for classes; Chapter 11’s Array.isArray is the robust array test that avoids both pitfalls.'
      },
      {
        term: 'Equal-looking values that are not',
        kind: 'insight',
        statement: 'A short museum of **comparison surprises**, all of which follow from the rules above:\n```js\nNaN === NaN              // false — unequal to everything, itself included\n[1, 2] == [1, 2]         // false — two distinct array objects\nlet a = [1, 2];\na == a                   // true — the SAME object\n"1" == true              // true — true converts to 1, "1" to 1\n({}) == "[object Object]" // true — object converts to that string\nnull == 0                // false — null pairs only with undefined\n```\nNone of these is a language bug; each is the algorithm doing exactly what it says.',
        detail: 'The practical defense is a house rule: === always, == null when you mean "absent", and deep comparison libraries when you mean contents — Chapter 7 covers why arrays need them.'
      }
    ],
    examples: [
      {
        title: 'Worked: the == versus === comparison table',
        problem: 'Predict every result below before reading the explanation column — each row exercises one clause of the == algorithm or one === rule.',
        steps: [
          { label: 'The battery', text: '```js\n1 === "1"             // (a)\n1 == "1"              // (b)\n0 == false            // (c)\n"" == false           // (d)\nnull == undefined     // (e)\nnull == 0             // (f)\nNaN == NaN            // (g)\n[1] == 1              // (h)\n[] == ""              // (i)\nlet o1 = {}, o2 = {};\no1 == o2              // (j)\no1 == o1              // (k)\n```' },
          { label: 'Step 1: (a) versus (b) — the string clause', text: '(a) Different types under ===: false, immediately, no questions asked. (b) == with number vs string converts the string: 1 == 1 → true.' },
          { label: 'Step 2: (c) and (d) — the boolean clause', text: '(c) false converts to 0, then 0 == 0 → true. (d) both sides convert — false to 0, "" to 0 — so true as well. This is why empty strings and false look identical to ==, which is rarely what anyone wants.' },
          { label: 'Step 3: (e) and (f) — the nullish pairing', text: '(e) null and undefined are equal to each other and nothing else: true. (f) null does NOT convert to 0 for == — false. The pairing is the single special case in the whole algorithm.' },
          { label: 'Step 4: (g) — NaN exclusion', text: 'NaN fails even self-equality: false under both operators. The only values for which x == x is false are NaN (and NaN === NaN likewise false).' },
          { label: 'Step 5: (h) and (i) — the object clause', text: '(h) [1] converts to the primitive "1" (valueOf hands back the array, toString produces "1"), then the string clause finishes the job: true. (i) [] converts to "" and the empty string equals the empty string: true.' },
          { label: 'Step 6: (j) and (k) — object identity', text: 'Two fresh empty objects are distinct references: (j) false — == never deep-compares contents. The same object on both sides: (k) true. For objects, both equality operators answer "same object?", never "same contents?".' }
        ],
        result: '(a) F (b) T (c) T (d) T (e) T (f) F (g) F (h) T (i) T (j) F (k) T — one algorithm, six clauses, zero magic.'
      },
      {
        title: 'Trace: in and instanceof',
        problem: 'Given a constructor, an instance and a primitive, walk both tests: which properties exist (where?), and which prototype chains contain which prototypes?',
        steps: [
          { label: 'The code', text: '```js\nfunction Point(x, y) { this.x = x; this.y = y; }\nconst p = new Point(1, 2);\n"x" in p               // (1)\n"toString" in p        // (2)\n"z" in p               // (3)\np instanceof Point      // (4)\np instanceof Object     // (5)\n[] instanceof Array     // (6)\n"s" instanceof String  // (7)\n```' },
          { label: 'Step 1: own properties answer first', text: '(1) true — x is an own property, created by the constructor’s assignment. (3) false — z was never created, and nothing defines it up the chain either.' },
          { label: 'Step 2: inheritance counts for in', text: '(2) true — p has no own toString, but the walk continues to Point.prototype, then Object.prototype, where toString lives. in answers "does it exist anywhere on this object?" — use Object.hasOwn(p, "toString") to get false here.' },
          { label: 'Step 3: instanceof walks the same chain', text: '(4) p’s chain is p → Point.prototype → Object.prototype → null. Point.prototype is the first link: true. (5) Object.prototype appears further along: true. Every plain object answers true to instanceof Object.' },
          { label: 'Step 4: arrays and the primitive exception', text: '(6) An array’s chain includes Array.prototype: true. (7) A string primitive is not an object — there is no chain to walk — so instanceof evaluates to false without consulting String at all. Only new String("s"), a wrapper object, would say true.' }
        ],
        result: 'in searches properties (own then inherited); instanceof searches prototype chains for one specific prototype object; primitives sit outside both games.'
      }
    ],
    keyTakeaways: [
      '=== never converts: numbers by value (NaN unequal, +0 equals -0), strings by exact 16-bit sequence, objects by identity, different types always false.',
      '== normalizes first: null pairs only with undefined; strings convert to numbers; booleans convert to numbers; objects convert to primitives — then compare.',
      'Use === everywhere except the deliberate absence test x == null; != and !== are exact negations of their partners.',
      'Comparisons are string-vs-string only when BOTH are strings; otherwise numeric — and any NaN operand makes all four comparisons false.',
      'in tests property existence including inherited properties; own-only tests need Object.hasOwn (or hasOwnProperty).',
      'instanceof walks the prototype chain for Constructor.prototype; primitives always answer false.'
    ],
    quiz: [
      {
        q: 'Which of these is TRUE?',
        options: [
          '`NaN === NaN`',
          '`+0 === -0`',
          '`[] === []`',
          '`null === undefined`'
        ],
        answer: 1,
        explanation: 'Positive and negative zero are strictly equal (distinguishable only as divisors, Chapter 3). NaN equals nothing including itself, two array literals are distinct objects, and null and undefined are different types under ===.'
      },
      {
        q: 'Under ==, which pair converts the string operand to a number?',
        options: [
          '`1 == "1"` — number vs string',
          '`null == 0` — null vs number',
          '`null == undefined` — the nullish pair',
          '`"a" == "b"` — string vs string'
        ],
        answer: 0,
        explanation: 'The mixed number/string case converts the string to a number and compares numerically. null never converts for ==, the nullish pairing needs no conversion, and two strings compare as strings.'
      },
      {
        q: 'What is the value of `"11" < "3"`?',
        options: ['false — both convert to numbers, 11 > 3', 'true — string comparison of code units', 'false — comparing a string with a number is an error', 'NaN'],
        answer: 1,
        explanation: 'When both operands are strings the comparison is lexicographic on code units: "1" < "3" at the first character decides it. "11" < 3 would be the numeric case (false), but this pair is two strings.'
      },
      {
        q: 'What does `"toString" in {}` evaluate to?',
        options: ['false — {} has no own properties', 'true — inherited properties count for in', 'A TypeError — the left operand must be an identifier', 'undefined'],
        answer: 1,
        explanation: 'in walks the whole property chain, and Object.prototype contributes toString. To restrict the test to own properties, use Object.hasOwn or hasOwnProperty.'
      },
      {
        q: 'Which expression is false?',
        options: ['`p instanceof Point` (p = new Point(1, 2))', '`[] instanceof Object`', '`new Date() instanceof Date`', '`"s" instanceof String`'],
        answer: 3,
        explanation: 'A string primitive is not an object and has no prototype chain, so instanceof answers false — only the wrapper new String("s") would pass. The others walk real chains that contain the named prototype.'
      }
    ]
  },

  // ---------------------------------------------------------------- 4.6
  {
    sectionId: 'js-ch4-s6',
    readingTime: 11,
    intro: 'JavaScript’s logical operators are liars in the best sense: && and || do not really compute booleans at all — they **return one of their operands**, chosen with short-circuit evaluation, which makes them the language’s guard and default-value idioms rather than its logic. This section covers that truth, the ! and ?? refinements, the assignment operators (including destructuring with defaults and rest), and the one operator the language has spent twenty years regretting: eval.',
    objectives: [
      'Explain why && and || return operand values, and use them as guards and defaults',
      'Apply ! and the truthiness rules; convert any value to a real boolean with !!',
      'Distinguish ?? from || and know when each is correct',
      'Read and write assignment operators, chains, and destructuring with defaults and rest',
      'State the dangers of eval and name the safe alternatives'
    ],
    concepts: [
      {
        term: '&& as a guard',
        kind: 'law',
        statement: 'The **logical AND** evaluates its first operand and tests it for truthiness. If it is falsy, the expression **is** that first value — the second operand is never evaluated at all. If it is truthy, the expression is the value of the second operand. The result: `a && b` is "a if a is falsy, else b" — booleans only if you feed it booleans:\n```js\n0 && "x"            // 0 — falsy first operand returned as-is\n"left" && "right"   // "right"\nnull && anything    // null — anything never runs\nif (a === b) start();   // is equivalent to the guard\n(a === b) && start();   // ...but write the if — the guard is famous\n```\nThe classic use is the **guard**: `a && a.b` — evaluate a.b only when a exists (ES2020’s ?. is the modern replacement for that exact pattern).',
        detail: 'Because the second operand can be skipped, && is one of the operators no function can imitate (Section 4.3). Its other idiom — "poor man’s if" — is legal, terse and widely discouraged.'
      },
      {
        term: '|| as a default selector',
        kind: 'method',
        statement: 'The **logical OR** mirrors it: `a || b` is "a if a is truthy, else b". One operand always survives, and the first truthy one ends the search:\n```js\nlet max = maxWidth || 500;          // default when maxWidth is falsy\nlet o = {};\no.counter = o.counter || 1;         // initialize-if-absent\n"fallback" || "unused"              // "fallback" — second never evaluated\n```\nThis is the default-value idiom — powerful, and subtly wrong whenever **0, an empty string, or false is a legitimate value**, because those are falsy and get replaced. That flaw is exactly what motivated ??.',
        detail: 'Note the two readings of ||: "logical OR" when you care about truthiness, "default selector" when you care about values. Same mechanics — the difference is what you do with the result.'
      },
      {
        term: '! and truthiness',
        kind: 'definition',
        statement: 'The **logical NOT** applies ToBoolean and negates — it is the one logical operator that always returns a boolean. Two applications of it give the canonical **booleanize** idiom:\n```js\n!null          // true\n!0             // true\n!""            // true\n!NaN           // true\n!undefined     // true\n!false         // true\n!!"0"          // true! — nonempty strings are truthy\n!!value        // the value as a real boolean\n```\nThe six falsy values (false, undefined, null, 0, -0, NaN, "" — seven tokens, six values, Section 3.4) define everything else as truthy — including "0", "false", [] and {}.',
        detail: '!!x is the honest way to answer "is this truthy?" with a boolean — Boolean(x) says the same thing more explicitly and just as fast.'
      },
      {
        term: '?? the nullish coalescing operator',
        kind: 'definition',
        statement: 'ES2020’s **??** is || with better manners: it falls back only when the left operand is **null or undefined** — never for the other falsy values:\n```js\n0 ?? 100        // 0 — zero survives\n0 || 100        // 100 — zero is replaced\n"" ?? "none"    // ""\nfalse ?? true   // false\nnull ?? 10      // 10\nundefined ?? 10 // 10\n```\nUse || when "any truthy value or a fallback" is the intent; use ?? when "absent means default, but 0/false/empty-string are real answers". ?? is right-associative and **cannot be mixed with && or || without parentheses** — `a ?? b || c` is a SyntaxError; write `a ?? (b || c)`.',
        detail: 'The prefix "nullish" names the two values it cares about: null and undefined. It pairs naturally with ?. (Section 4.2): `settings.user?.name ?? "guest"`.'
      },
      {
        term: 'Optional chaining, revisited in full',
        kind: 'method',
        statement: 'Section 4.2 introduced the access forms; the **full optional-chaining family** is:\n```js\no?.x            // property: undefined if o is nullish\no?.[k]          // bracket property\nf?.(x)          // conditional invocation — call only if f is not\n                // null/undefined (else the expression is undefined)\na?.b.c?.d       // chains: each ?. guards everything to its right\n```\nLike &&, the short circuit is total: nothing after the ?. evaluates. And like every short-circuit, the undefined result cannot say WHY — missing property and explicit undefined look identical.',
        detail: 'f?.(x) answers "call this callback if it was provided": `onDone?.(result)` replaces the old `if (onDone) onDone(result)`. The call form still requires f to be callable when present — ?. checks nullish, not callability.'
      },
      {
        term: 'Assignment operators',
        kind: 'definition',
        statement: 'Assignment expects an **lvalue** on the left — a variable, object property or array element — and yields the assigned value as its own, so chains work right to left: `a = b = c = 0`. The compound forms combine an operation with the assignment: `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `<<=`, `>>=`, `>>>=`, `&=`, `|=`, `^=`:\n```js\ntotal += 5;       // total = total + 5\nflags |= EXEC;    // the bit-set idiom of Section 4.4\nword <<= 2;       // shift-and-assign\n```\nIn the property form `o[f()] += 1`, the reference is evaluated **once** — the function does not run twice. Assignment does not declare anything: the binding must already exist (or you create an accidental global, Section 3.8).',
        detail: 'Section 3.8 covered the declaration side (let/const/var and what each may assign). Here assignment is purely an operator — which is why it can appear inside initializers, arguments and return values.'
      },
      {
        term: 'Destructuring assignment',
        kind: 'method',
        statement: 'A **destructuring assignment** puts a pattern where a value normally goes, and assigns into its variables. Section 3.8 met it in declarations; as a pure assignment it also swaps and rebinds:\n```js\nlet x = 1, y = 2;\n[x, y] = [y, x];            // swap — no temp\nconst [first, , third] = [1, 2, 3];       // skip by elision: 1, 3\nconst { a, b: renamed, c = 9 } = { a: 1, b: 2 };  // rename + default\nconst [head, ...rest] = [1, 2, 3, 4];      // rest collects: 1, [2,3,4]\nlet [min, max] = [3, 1];    // any iterable fits the array pattern\n```\nDefaults apply when the source property/element is undefined; **rest** (...) collects what remains; object patterns read by property name, array patterns by position. A statement whose first token is `{` is parsed as a block — so an object destructuring at statement level must be parenthesized: `({ a } = o);`.',
        detail: 'The idioms it powers: multiple return values (return an array, destructure at the call site), configuration objects with defaults, and swapping. Nested patterns work too, but readability sets the practical limit.'
      },
      {
        term: 'eval and its dangers',
        kind: 'insight',
        statement: '`eval(code)` parses and executes a string of JavaScript **at runtime, in the calling scope**, and returns the value of the last expression. Three prices, one per word: it is **slow** (the code crosses the interpreter boundary and defeats optimization), **scope-corrupting** (evaluated code sees and mutates local variables), and — the killer — a **security hole** when any part of the string comes from outside:\n```js\nconst total = eval(input.value);      // NEVER: user input becomes code\nconst area = eval("w * h");          // avoid: string-built code\n```\nIf input.value can be influenced by anyone, they can execute anything the page can. Alternatives: JSON.parse for data, plain expressions for computation, and the Function constructor for the rare sanctioned case (indirect eval runs globally, but is still a red flag).',
        detail: 'Chapter 17’s linters reject eval by default, and Section 10.3 notes that ES6 modules forbid it from leaking declarations into scope. Legitimate uses are so rare that the working rule is: it is always a bug until proven otherwise.'
      }
    ],
    examples: [
      {
        title: 'Trace: the || default, the zero trap, and the ?? fix',
        problem: 'A drawing function defaults width and padding. The caller passes zeros — legal values both. Which defaults behave?',
        steps: [
          { label: 'The code', text: '```js\nfunction draw(options) {\n  let width = options.width || 300;    // (A)\n  let pad = options.padding ?? 10;     // (B)\n  return [width, pad];\n}\ndraw({ width: 0, padding: 0 });\n```' },
          { label: 'Step 1: (A) || tests truthiness, and 0 is falsy', text: 'options.width is 0 — a perfectly legitimate "thinnest line" — but || only asks "truthy?". The answer is no, so the fallback 300 wins. width is now wrong: the caller asked for 0 and got 300.' },
          { label: 'Step 2: (B) ?? tests nullishness, and 0 is not nullish', text: 'options.padding is 0 — also falsy, but ?? checks only for null and undefined. Neither applies, so the value 0 survives. pad is right for the wrong-feeling reason: not because 0 is meaningful to ??, but because 0 is not null or undefined.' },
          { label: 'Step 3: the result and the fix', text: 'The call returns [300, 0] — one default honored, one overridden. Changing (A) to `options.width ?? 300` gives [0, 0]: both zeros respected, and the defaults now fire only when the properties are absent (or explicitly null/undefined).' },
          { label: 'Step 4: choosing the operator', text: 'Ask one question about the missing-value domain: can a falsy non-nullish value ever be legitimate? If yes (widths, offsets, counts, flags, empty strings), only ?? is correct. If "anything truthy counts, or default" is genuinely the rule — a label, a mode string — || is the right tool.' }
        ],
        result: 'draw returned [300, 0] under the mixed operators; with ?? throughout it returns [0, 0]. || replaces falsy values; ?? replaces only absence.'
      },
      {
        title: 'Worked: destructuring with defaults and rest',
        problem: 'Unpack a configuration object with defaults, a rename, and a rest collect — then pull three elements from an array, skipping the middle.',
        steps: [
          { label: 'The code', text: '```js\nfunction connect(options) {\n  const {\n    host = "localhost",\n    port = 8080,\n    retries: attempts = 3,\n    ...rest\n  } = options;\n  const [first, , third] = [1, 2, 3];\n  return [host, port, attempts, rest, first, third];\n}\nconnect({ host: "db", tags: ["a"] });\n```' },
          { label: 'Step 1: present properties bind directly', text: 'host finds "db" on options and binds it. No default is consulted — defaults apply only when the source property is undefined.' },
          { label: 'Step 2: missing properties fall back', text: 'port is absent from the object, so the default 8080 binds. Note the default lives on the target side — it is about the pattern’s variable, not the source object.' },
          { label: 'Step 3: rename and default together', text: '`retries: attempts = 3` reads the source property "retries" (absent here) into a variable named attempts, defaulting to 3. The colon syntax is the same as in object literals: source name on the left, target on the right — here with a default riding along.' },
          { label: 'Step 4: rest collects what the pattern did not take', text: 'After host, port and retries are matched, `...rest` gathers every remaining own enumerable property: { tags: ["a"] }. This is the spread of Section 4.1 in reverse — gathering instead of distributing.' },
          { label: 'Step 5: positional patterns skip with elisions', text: 'The array pattern [first, , third] binds 1 and 3 and skips index 1 — the same elision syntax as sparse array literals. Result: ["db", 8080, 3, { tags: ["a"] }, 1, 3].' }
        ],
        result: 'host "db", port 8080 (defaulted), attempts 3 (renamed + defaulted), rest { tags: ["a"] }, first 1, third 3 — defaults fire only on undefined, rest swallows the rest, elisions skip.'
      },
      {
        title: 'eval: one caution',
        problem: 'A comment-count feature receives an expression string from a URL parameter and "just evals it". Show the failure modes and the repair.',
        steps: [
          { label: 'The code under review', text: '```js\n// input.expression arrives from the URL, attacker-controlled\nconst count = eval(input.expression);\n// e.g. expression = "fetch(\\"/steal?c=\\" + document.cookie)"\nconst area = eval("w * h");          // second offender\n```' },
          { label: 'Step 1: what the first line actually does', text: 'The string is compiled and executed with the privileges of the page. A crafted expression can read cookies, make requests, and call any API — there is no sandbox, no allowlist, nothing. This is a textbook XSS injection point.' },
          { label: 'Step 2: why the second line is also wrong', text: 'Even with no attacker, "w * h" crosses into the interpreter at runtime: the surrounding function becomes hard to optimize, the code is invisible to static tools (typos surface only when the path runs), and the scope rule means the string can see and change w and h. It is also simply unnecessary — the expression is known at write time.' },
          { label: 'Step 3: the repair', text: '```js\nconst area = w * h;                   // it was just arithmetic\nconst count = Number(input.expression); // data is data\n```\nIf the requirement is "parse a number", parse a number. If code must be generated dynamically, generate it with the Function constructor in a locked-down environment — and treat that as a design smell to justify in review.' },
          { label: 'Step 4: the standing rule', text: 'Never eval anything influenced by outside input; prefer evaling nothing at all. Chapter 17’s linters encode this as a default error, which matches the industry’s conclusion about the operator.' }
        ],
        result: 'The eval lines are a security hole, a performance hazard and an obscurity — replaced by direct arithmetic and Number(). The rule: data is parsed, never executed.'
      }
    ],
    keyTakeaways: [
      '&& returns its first operand if falsy (skipping the second), else its second operand; || returns the first truthy operand — value selectors, not boolean computers.',
      'The guard (a && a.b) and default (x || fallback) idioms are the operators’ daily jobs; the "poor man’s if" form is legal but frowned on.',
      '! always yields a boolean; !!x (or Boolean(x)) is the honest truthiness conversion. Six falsy values; everything else — including "0" and [] — is truthy.',
      '?? falls back only on null/undefined, so 0, "" and false survive; it cannot be mixed with && / || without parentheses.',
      '?. guards a whole chain (.x, [k], and the f?.(x) call form) and pairs with ?? for safe navigation with defaults.',
      'Assignment is an expression yielding the assigned value; compound forms include all arithmetic and bitwise operators; destructuring adds patterns, defaults, renames, elisions and rest — parenthesize object destructuring at statement start.',
      'eval executes strings in the calling scope: slow, opaque, and a security hole on any outside input. Parse data instead.'
    ],
    quiz: [
      {
        q: 'What is the value of `0 || "fallback"`?',
        options: ['0', '"fallback"', 'false', 'undefined'],
        answer: 1,
        explanation: '|| returns the first operand if it is truthy, else the second. 0 is falsy, so the expression is "fallback" — exactly the behavior that makes || wrong when 0 is a legitimate value.'
      },
      {
        q: 'What is the value of `false && "x"`?',
        options: ['"x"', 'false', 'true', 'undefined'],
        answer: 1,
        explanation: 'The first operand is falsy, so && IS that operand and the second never evaluates. The operator returns operand values — here the boolean false, not a computed conjunction.'
      },
      {
        q: 'With `const pad = opts.padding ?? 8;`, which padding value still results in 8?',
        options: ['0', '"" (empty string)', 'false', 'null'],
        answer: 3,
        explanation: '?? falls back only for null and undefined. 0, "" and false are falsy but not nullish, so they survive — that is precisely the difference from ||.'
      },
      {
        q: 'After `const [a, ...b] = [1, 2, 3];`, what are a and b?',
        options: ['a is 1, b is 2', 'a is 1, b is [2, 3]', 'a is [1], b is [2, 3]', 'a is 1, b is 3'],
        answer: 1,
        explanation: 'The first pattern position takes the first element; the rest parameter collects the remaining elements into a new array. The same ... syntax spreads in literals and gathers in patterns.'
      },
      {
        q: 'Why is `let count = eval(userText);` flagged as a security hole?',
        options: [
          'Because eval is slower than a function call',
          'Because the string is executed with the page’s full privileges — attacker-supplied code runs as your code',
          'Because eval always returns undefined',
          'Because eval cannot see local variables'
        ],
        answer: 1,
        explanation: 'The performance cost and scope visibility are real but secondary: the fatal issue is executing untrusted strings with everything the running program can do. Parse input as data instead.'
      },
      // Placement-pattern: logical operators return operands — short-circuit value (original)
      {
        q: "What is the value of `result`?\n```js\nlet result = 0 || 'hi' && null || 5;\n```",
        options: ["`0`", "`'hi'`", "`null`", "`5`"],
        answer: 3,
        explanation: "Step 1: The data given is one expression mixing `||` and `&&` over non-boolean operands. Step 2: The governing rules are that `&&` binds tighter than `||`, that `&&` yields its first falsy operand or its last operand, and that `||` yields its first truthy operand or its last operand. Step 3: Tracing stepwise, `'hi' && null` evaluates first and yields `null`, reducing the expression to `0 || null || 5`; `0 || null` yields `null` since both are falsy; `null || 5` yields `5`. Step 4: The distractors fail because `0` is falsy and never survives `||`, `'hi'` is consumed inside the `&&`, and `null` is falsy so the final `||` moves past it. Step 5: Therefore `result` holds `5`."
      }
    ]
  },

  // ---------------------------------------------------------------- 4.7
  {
    sectionId: 'js-ch4-s7',
    readingTime: 9,
    intro: 'The last operators are the miscellany that round out the chapter: the conditional ?: that packs an if/else into a single expression, typeof for probing types without exceptions, delete for removing properties, void for discarding a value on purpose, and the comma operator that sequences two expressions into one. It closes with a first meeting of await — the operator that will dominate Chapter 13.',
    objectives: [
      'Use the conditional operator, including nested chains and its lazy evaluation',
      'List every string typeof can return and apply its quirks safely',
      'Apply delete: what it removes, what it returns, and strict mode’s hard errors',
      'Use void and the comma operator, and distinguish the comma operator from comma separators',
      'Recognize await as the (Chapter 13) bridge from expressions to asynchronous values'
    ],
    concepts: [
      {
        term: 'The conditional operator ?:',
        kind: 'definition',
        statement: 'The **conditional operator** is JavaScript’s only ternary operator: `condition ? value1 : value2`. It evaluates the condition for truthiness, then evaluates and yields **only the chosen arm** — the other is skipped entirely. Because it is an expression, it goes where statements cannot: initializers, arguments, returns:\n```js\nconst bg = dark ? "#111" : "#f5f5f5";\nconst label = n === 1 ? "1 item" : n + " items";\nmax = a > b ? a : b;\n```\nIt is right-associative, so chains read as else-if ladders: `a ? 1 : b ? 2 : 3` means a ? 1 : (b ? 2 : 3).',
        detail: 'One condition, two values — when you need statements or side effects per branch, write the if/else instead. Nested deeper than two levels, the ladder stops being readable.'
      },
      {
        term: 'typeof',
        kind: 'method',
        statement: 'The **typeof operator** returns one of exactly eight strings: `"undefined"`, `"object"`, `"boolean"`, `"number"`, `"string"`, `"function"`, `"bigint"`, `"symbol"`. The quirks that matter:\n```js\ntypeof null           // "object" — the famous JS1 bug, permanent for compatibility\ntypeof NaN            // "number" — NaN is a number value\ntypeof function () {} // "function" — callables get their own answer\ntypeof []             // "object" — arrays need Array.isArray\ntypeof undeclaredName // "undefined" — NO ReferenceError, uniquely\n```\nThe last quirk is a feature: `if (typeof fetch === "function")` probes for an API that may not exist without throwing — the standard feature-detection pattern.',
        detail: 'typeof answers "what kind of VALUE is this", not "what constructor made it" — for the latter use instanceof (Section 4.5) or the class-specific predicates like Array.isArray (Chapter 7). Parentheses around the operand are legal and never change the answer.'
      },
      {
        term: 'delete',
        kind: 'method',
        statement: 'The unary **delete** removes a property from an object (or an element from an array, leaving a hole). It returns true when the property is gone afterward — which includes properties that never existed — and false when the deletion failed (sloppy mode):\n```js\nconst o = { x: 1, y: 2 };\ndelete o.x          // true\n"x" in o            // false\ndelete o.z          // true — nothing named z, but "z" in o is false either way\nconst a = [1, 2, 3];\ndelete a[1];        // true — but a is now [1, <hole>, 3], length 3\n```\nWhat it cannot do: remove declared variables or function bindings. **Strict mode is stricter twice**: `delete x` on a bare identifier is a SyntaxError at parse time, and deleting a nonconfigurable property (a frozen object’s, or Object.prototype) throws a TypeError instead of returning false.',
        detail: 'One historical wrinkle from Section 3.8: accidental sloppy-mode globals ARE properties of the global object, so `oops = 42; delete oops;` works there — a party trick, not a technique. Section 6.3 covers property configuration in depth.'
      },
      {
        term: 'void',
        kind: 'definition',
        statement: 'The unary **void** evaluates its operand and then yields `undefined`, discarding whatever the operand produced: `void 0` is undefined, `void (1 + 1)` is undefined (the 2 vanishes). Its honest uses are narrow: making a value explicitly undefined (`void 0` predates a time when undefined was writable), the legacy `javascript: void doThing()` URL idiom that suppresses link navigation, and — the modern one — marking a promise as deliberately fire-and-forget: `void prefetch()` says "I know this returns a promise and I am choosing not to await it".',
        detail: 'void does not prevent side effects — the operand runs! It discards only the value. Code that needs void to be readable usually wants a comment instead.'
      },
      {
        term: 'The comma operator',
        kind: 'definition',
        statement: 'The binary **comma operator** evaluates its left operand, discards the value, evaluates the right operand, and yields that: `(1, 2, 3)` is 3. Its natural habitat is the for-loop header, where the grammar allows only one expression per clause:\n```js\nfor (let i = 0, j = 9; i <= j; i++, j--) {\n  // init declares two; increment advances both — comma operator at work\n}\nlet seq = (1, 2, 3);   // 3 — the only sensible standalone use: none\n```\nPrecedence is dead last (below assignment), which is why `x = 1, 2` assigns 1 and then discards the 2 — parenthesize to sequence inside an expression.',
        detail: 'Do not confuse the operator with the comma *separators* in array literals [1, 2], argument lists f(a, b) and declarations let x = 1, y = 2 — those delimit items; the operator evaluates left to right and keeps only the last value.'
      },
      {
        term: 'await: first look',
        kind: 'insight',
        statement: 'The unary **await** (ES2017) is the operator bridge into asynchronous JavaScript: inside an `async` function, `await promise` pauses **this function** — not the program — until the promise settles, and yields the fulfillment value. Other code keeps running in the meantime; Chapter 13 shows the machinery, and Chapter 5’s loops show the statement-level partner (`for await...of`):\n```js\nasync function load() {\n  const response = await fetch("/api/data");\n  const data = await response.json();\n  return data;               // async functions return a promise\n}\n```\nIt appears here because it IS an operator — precedence with the unary group, right there in the table of Section 4.3.',
        detail: 'The one-line summary for now: await converts "value later" into "value here", for this function only, without freezing anything else. The full event-loop story is Chapter 13 (and Operating System Concepts Chapter 4 tells the kernel-side counterpart).'
      }
    ],
    examples: [
      {
        title: 'Worked: typeof — every answer, every quirk',
        problem: 'Evaluate typeof against one value of every kind, then use it to write a safe feature check for an API that may not exist.',
        steps: [
          { label: 'The battery', text: '```js\ntypeof 42            // "number"\ntypeof NaN           // "number" (!)\ntypeof "x"           // "string"\ntypeof true          // "boolean"\ntypeof undefined     // "undefined"\ntypeof null          // "object" (!)\ntypeof 1n            // "bigint"\ntypeof Symbol()      // "symbol"\ntypeof function () {} // "function"\ntypeof []            // "object"\ntypeof {}            // "object"\ntypeof undeclaredName // "undefined" (!)\n```' },
          { label: 'Step 1: the primitive reports', text: 'Numbers (NaN included — it is a numeric value), strings, booleans, undefined, BigInt and symbol each report their type. This is the happy path: typeof on a primitive tells the truth.' },
          { label: 'Step 2: the two famous lies', text: '`typeof null` is "object" — a bug from the first JavaScript implementation, kept because "fixing" it would break the web. And `typeof []` is "object" — arrays are a kind of object, so Array.isArray (Chapter 7) is the real array test.' },
          { label: 'Step 3: functions stand alone', text: 'Callables report "function" — the one object subtype typeof distinguishes. Classes also answer "function" (they are constructors, Chapter 9), which is a hint, not a rule.' },
          { label: 'Step 4: the undeclared case — the feature check', text: '```js\nif (typeof requestIdleCallback === "function") {\n  requestIdleCallback(work);   // exists — use it\n}\n```\nReading an undeclared identifier normally throws ReferenceError; typeof is the one operator that does not, answering "undefined" instead. That is what makes runtime feature detection possible without a try/catch.' }
        ],
        result: 'Eight possible answers, two documented lies (null, arrays), one unique exemption (undeclared names) — and the safest feature check in the language.'
      },
      {
        title: 'Trace: ?: as an expression, delete as an operation',
        problem: 'Use the conditional operator to pick a stylesheet, then delete properties from a plain object and a frozen one — in both strict and sloppy mode.',
        steps: [
          { label: 'The code', text: '```js\n"use strict";\nconst mode = "dark";\nconst bg = mode === "dark" ? "#111" : "#f5f5f5";     // (1)\nconst o = { x: 1, y: 2 };\ndelete o.x;                     // (2) true\n"x" in o;                       // false\ndelete o.nope;                  // (3) true — nothing removed, still true\nconst frozen = Object.freeze({ keep: true });\ndelete frozen.keep;             // (4) TypeError!\n```' },
          { label: 'Step 1: the conditional picks one arm', text: '(1) The comparison is true, so only "#111" is evaluated — the light value is skipped, and any side effects it might have carried would not run. The whole thing is an expression, so it initializes the const directly.' },
          { label: 'Step 2: delete removes an own configurable property', text: '(2) x was created by an ordinary literal, so it is configurable: delete removes it (true), and the existence test confirms. The object still holds y.' },
          { label: 'Step 3: deleting what is not there is still true', text: '(3) delete answers "is the property absent afterward?" — so a no-op deletion returns true. The return value is about the outcome, not about whether anything was removed.' },
          { label: 'Step 4: nonconfigurable is a wall — and strict mode makes it loud', text: '(4) Object.freeze made keep nonconfigurable. In sloppy code delete would return false and move on; in strict code it throws `TypeError: Cannot delete property \'keep\'`. The same throw-on-failure rule applies to assignments that fail (Section 5.5).' }
        ],
        result: 'bg is "#111"; o loses x; and the frozen object’s delete escalates from silent failure to a TypeError — strict mode converts property mistakes from no-ops into errors.'
      }
    ],
    keyTakeaways: [
      '?: evaluates only the chosen arm and is an expression — usable in initializers, arguments and returns; right-associativity makes chains read as else-if ladders.',
      'typeof returns one of eight strings; null lies ("object"), arrays report "object", functions get "function" — and undeclared identifiers answer "undefined" instead of throwing, enabling safe feature checks.',
      'delete removes own configurable properties (leaving holes in arrays), returns true when the property is absent afterward, and is doubled-barred in strict mode: bare identifiers are a SyntaxError, nonconfigurable targets throw.',
      'void evaluates and discards a value, yielding undefined — its modern job is marking fire-and-forget promises; the comma operator keeps the last value and lives mainly in for headers.',
      'await (Chapter 13) pauses its async function until a promise settles and yields the value — the operator-shaped preview of asynchronous JavaScript.'
    ],
    quiz: [
      {
        q: 'What is `typeof null`?',
        options: ['"null"', '"object"', '"undefined"', 'It throws a TypeError'],
        answer: 1,
        explanation: 'A bug in the earliest JavaScript implementation, kept for backward compatibility: null reports "object" and always has. Test for null with x === null, not typeof.'
      },
      {
        q: 'Why does `if (typeof someLibrary !== "undefined")` not throw, even when someLibrary was never declared?',
        options: [
          'Because typeof returns a string even for errors',
          'Because typeof is specified to evaluate its operand’s type without requiring a binding — undeclared names yield "undefined"',
          'Because undeclared variables are automatically created as undefined',
          'Because if statements swallow ReferenceErrors'
        ],
        answer: 1,
        explanation: 'typeof is the one operator exempt from the ReferenceError on unbound identifiers — it reports their absence as "undefined", which makes it the standard feature-detection tool.'
      },
      {
        q: 'In `dark ? loadDark() : loadLight()`, how many of the two calls run?',
        options: ['Both, in order', 'Exactly one — only the chosen arm is evaluated', 'Neither — ?: discards results', 'It depends on strict mode'],
        answer: 1,
        explanation: 'The conditional operator is lazy: it evaluates the condition, then only the selected arm. Side effects in the unselected branch never happen — the same short-circuit property && and || have.'
      },
      {
        q: 'In strict mode, what does `let x = 1; delete x;` do?',
        options: ['Deletes x, returning true', 'Returns false without deleting', 'Throws a TypeError at runtime', 'Is a SyntaxError before the code ever runs'],
        answer: 3,
        explanation: 'delete with a bare (unqualified) identifier is an early error in strict mode — the parser rejects it. Variables are not deletable properties; only an object property can be a delete target.'
      },
      {
        q: 'What is the value of `void (2 + 2)`?',
        options: ['4', 'undefined', 'null', '0'],
        answer: 1,
        explanation: 'void evaluates its operand (the addition happens) and then discards the result, yielding undefined. The operator hides values, not side effects.'
      }
    ]
  }
]
