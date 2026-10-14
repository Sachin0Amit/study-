import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 6: Objects (Sections 6.1 – 6.6 distilled)
// Master study content — code-first: `inline code` + fenced ``` blocks ```.
// ============================================================================

export const jsCh6Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: "js-ch6-s1",
    readingTime: 7,
    intro: "A JavaScript **object** is an unordered collection of named values, and it is the single structure out of which nearly everything else in the language is built: arrays, functions, classes, even strings behave like objects. This section defines properties precisely, introduces the attributes a property carries (writable, enumerable, configurable) and the three attributes every object itself carries (prototype, class, extensible). Every code example is traced statement by statement, the way the engine would run it.",
    objectives: [
      "Define an object as a collection of properties and read the name/value distinction",
      "Distinguish data properties from accessor properties",
      "Name the three attributes every object carries: prototype, class and extensible",
      "Trace a property lookup that finds an inherited value through the prototype",
      "Explain why arrays, functions and strings are still, at bottom, objects"
    ],
    concepts: [
      {
        term: "Object",
        kind: "definition",
        statement: "An **object** is an **unordered collection of properties**, each a **name/value pair**: the property name is a **string or a symbol**, and the value is any JavaScript value — primitive, object or function. A value that is a function is called a **method**. Objects are mutable and manipulated **by reference**, never copied as a whole by assignment.",
        detail: "```\nlet book = {\n  title: \"JavaScript: The Definitive Guide\",\n  edition: 7,\n  authors: [\"David Flanagan\"]\n};\n```\nThe names here are `\"title\"`, `\"edition\"` and `\"authors\"`; the values are a string, a number and an array. Because the collection is unordered, `book.title` and `book.edition` have no positional relationship to each other."
      },
      {
        term: "Property names and values",
        kind: "notation",
        statement: "A property name is sometimes called a **key**. Keys are always **strings or symbols** even when they look like numbers: array indices like `a[0]` are the string `\"0\"` under the hood, which is exactly why ordinary objects can model mappings from strings to values.",
        detail: "The value can be any type whatsoever — objects nest arbitrarily: `book.publisher.address.city` is three property accesses in a row. The string-to-value association inside one object is why a plain object doubles as a lookup table (a full treatment of the purpose-built `Map` is in Chapter 11)."
      },
      {
        term: "Data properties vs accessor properties",
        kind: "definition",
        statement: "A **data property** simply holds a value. An **accessor property** holds no value of its own: reading it invokes a **getter** function and writing it invokes a **setter** function, so it looks like a property but behaves like a pair of hidden methods.",
        detail: "Accessor properties are written with the `get` and `set` keywords in an object literal (Section 6.6). In Chapter 8 you will see them combined with closures to build genuinely private, validated state."
      },
      {
        term: "Property attributes",
        kind: "definition",
        statement: "Every property, data or accessor, carries three attributes: **writable** (may the value be changed? — data properties only), **enumerable** (does the property show up in `for/in` loops and `Object.keys()`?) and **configurable** (may the property be deleted or its attributes changed?). Accessor properties swap the writable/value pair for `get` and `set` functions.",
        detail: "These are normally invisible machinery, but Chapter 14 exposes them through `Object.defineProperty()` and friends — the foundation for freezing objects, hiding properties and metaprogramming."
      },
      {
        term: "The prototype object attribute",
        kind: "definition",
        statement: "Every object carries a **prototype** attribute: a reference to a second object from which it **inherits properties**. Setting an object property may be blocked by a read-only inherited property, and reading `o.x` walks up the prototype chain if `x` is not an own property of `o`. The prototype is normally fixed at object creation time.",
        detail: "You can inspect it: `Object.getPrototypeOf(o)` returns it, and `o1.isPrototypeOf(o2)` tests whether `o1` sits anywhere in `o2`’s chain. Most objects inherit, directly or transitively, from `Object.prototype`, the root object that supplies `toString`, `hasOwnProperty` and friends."
      },
      {
        term: "The class and extensible attributes",
        kind: "definition",
        statement: "An object’s **class attribute** is a string such as `\"Object\"` or `\"Array\"` that classifies it — essentially historical, retrievable only indirectly via `Object.prototype.toString.call(o)`. The **extensible attribute** says whether new properties may be added: it can be cleared with `Object.preventExtensions(o)` and friends (Chapter 14), after which the object is frozen against growth.",
        detail: "Chapter 9 leans on the prototype attribute constantly — classes are nothing but prototypes plus a constructor function. The class attribute, by contrast, is mostly a curiosity you will not use directly."
      },
      {
        term: "Special objects are still objects",
        kind: "insight",
        statement: "Arrays are objects whose properties are numbered and that carry a magical `length`; functions are objects with executable code attached; a **string** is an object-like value with numbered characters and a `length`; `RegExp`, `Date`, `Error` and `Map` instances are objects. It is objects all the way down.",
        detail: "This is why `typeof` returns `\"object\"` for arrays and `\"function\"` for functions — but both still pass every object rule in this chapter. Strings, being primitive, only *borrow* object behavior when you use `s.length` or `s[i]` (a temporary wrapper object is created, used and discarded)."
      }
    ],
    examples: [
      {
        title: "Reading a real object literal",
        problem: "For the `book` object below, list every property as a name/value pair, give the type of each value, and identify one property the object inherits but did not declare.",
        steps: [
          { label: "Step 1: The literal", text: "```\nlet book = {\n  title: \"JavaScript: The Definitive Guide\",\n  edition: 7,\n  authors: [\"David Flanagan\"]\n};\n```" },
          { label: "Step 2: The own properties", text: "Three own properties: `title` (name is the string `\"title\"`, value is a string), `edition` (value is the number 7) and `authors` (value is an array, itself an object). The names are always strings — `edition` looks like an identifier but the engine stores the key `\"edition\"`." },
          { label: "Step 3: The nested object", text: "The value of `book.authors` is itself an object, so `book.authors[0]` performs a property access on the string `\"0\"` of that inner array object, yielding `\"David Flanagan\"`." },
          { label: "Step 4: The inherited property", text: "`book.toString` is not an own property. The engine follows `book`’s prototype up to `Object.prototype`, which owns a `toString` method — so `book.toString()` returns `\"[object Object]\"` without the literal ever mentioning it." },
          { label: "Step 5: Confirm with a test", text: "`book.hasOwnProperty(\"title\")` is `true` (own), while `book.hasOwnProperty(\"toString\")` is `false` (inherited) — the existence-testing tools of Section 6.4 in action." }
        ],
        result: "Own: `title` → string, `edition` → number, `authors` → array. Inherited: `toString` (plus every other property of `Object.prototype`) — the object literal you write is only the bottom layer of the object you get."
      },
      {
        title: "Trace the engine: a lookup through the prototype",
        problem: "Given `let p = { x: 1 };` and `let o = Object.create(p); o.y = 2;` — what do `o.x`, `o.y`, `o.z` and `o.toString` evaluate to, and why does `o.z.q` behave differently from `o.z`?",
        steps: [
          { label: "Step 1: The two objects", text: "`Object.create(p)` makes a new empty object whose prototype is `p`. So the chain is `o` → `p` → `Object.prototype` → `null`. The assignment `o.y = 2` creates an own property on `o`." },
          { label: "Step 2: o.x", text: "`x` is not an own property of `o`, so the engine looks at the prototype `p`, finds `x: 1`, and returns `1`. Nothing was copied — `o` and `p` share one `x`." },
          { label: "Step 3: o.y and o.z", text: "`o.y` is an own property → `2`. `o.z` is nowhere in the chain → the expression evaluates to `undefined`, **not an error**: a missing property is a value of `undefined`." },
          { label: "Step 4: o.z.q — the error case", text: "`o.z.q` tries to read property `q` **of** `undefined`, which throws `TypeError: Cannot read properties of undefined`. The lesson: the missing property itself is safe; it is chaining *through* it that throws." },
          { label: "Step 5: o.toString", text: "`toString` is not on `o` or `p`, but it is on `Object.prototype` at the top of the chain — so `o.toString` is that inherited function." }
        ],
        result: "`o.x` → 1 (inherited from `p`), `o.y` → 2 (own), `o.z` → `undefined` (missing, no error), `o.z.q` → TypeError, `o.toString` → function inherited from `Object.prototype`."
      },
      {
        title: "Copying an object copies the reference",
        problem: "Trace what happens when a variable holding an object is assigned to a second variable, then one property is changed through the second name.",
        steps: [
          { label: "Step 1: One object, two names", text: "```\nlet a = { n: 1 };\nlet b = a;   // copies the REFERENCE, not the object\n```" },
          { label: "Step 2: Mutate through b", text: "```\nb.n = 2;\nconsole.log(a.n); // 2\n```\nThere is only one object; `a` and `b` are two labels for it, so the change is visible through both." },
          { label: "Step 3: A real copy", text: "```\nlet c = { ...a }; // spread copies own enumerable properties\nc.n = 5;\nconsole.log(a.n); // still 2 — a is untouched\n```\n`c` is a new object with its own properties (a **shallow** copy — nested objects are still shared, as Section 6.5 explains)." }
        ],
        result: "Assignment aliases objects; `{ ...o }` (or `Object.assign({}, o)`) makes a fresh shallow copy. Comparing distinct objects with `===` is always `false` even with identical contents — identity, not structure, is compared."
      }
    ],
    keyTakeaways: [
      "An object is an unordered collection of properties: string-or-symbol name → any value; a function-valued property is a method.",
      "Data properties hold values; accessor properties run a getter on read and a setter on write.",
      "Every property has writable, enumerable and configurable attributes; every object has prototype, class and extensible attributes.",
      "Reading a missing property yields `undefined`; chaining a further property through that `undefined` throws a TypeError.",
      "Objects are compared and assigned by reference — spreading makes a shallow copy.",
      "Arrays, functions, Dates and Maps are all objects; the prototype supplies shared behavior like `Object.prototype.toString`."
    ],
    quiz: [
      {
        q: "In JavaScript, the name of an object property may be:",
        options: [
          "any string or symbol",
          "any string, number or boolean",
          "only valid identifiers",
          "only strings up to 256 characters"
        ],
        answer: 0,
        explanation: "Property names are always strings or symbols; numbers like array indices are converted to strings, and other primitives are converted before use as keys."
      },
      {
        q: "An object’s prototype attribute is:",
        options: [
          "the function that created the object",
          "a second object from which the first inherits properties",
          "a string naming the class of the object",
          "an array of the object’s own property names"
        ],
        answer: 1,
        explanation: "The prototype is a reference to another object consulted on failed lookups and at creation time; the class is the string, and the creating function is the constructor."
      },
      {
        q: "Evaluating the expression `o.z.q` when `o` has no property `z`:",
        options: [
          "returns undefined",
          "returns null",
          "throws a TypeError",
          "creates the property z automatically"
        ],
        answer: 2,
        explanation: "`o.z` is safely undefined, but then reading `.q` of that undefined value throws TypeError — you cannot read a property of undefined."
      },
      {
        q: "Which statement about data vs accessor properties is true?",
        options: [
          "accessor properties are only available on class instances, never plain objects",
          "an accessor property has get and set functions in place of the value and writable attributes",
          "data properties cannot be deleted",
          "accessor properties cannot be enumerated"
        ],
        answer: 1,
        explanation: "Accessors swap value/writable for getter/setter functions; they exist in ordinary literals too (get/set syntax), and enumerability is an independent attribute."
      }
    ]
  },

  // ---------------------------------------------------------------- 6.2
  {
    sectionId: "js-ch6-s2",
    readingTime: 8,
    intro: "There are exactly three ways to bring a new ordinary object into the world: write an **object literal**, invoke a **constructor with `new`**, or call **`Object.create()`** with an explicit prototype. This section works all three, then shows the prototype-based creation pattern that powers the Range classes of Chapter 9 — creating objects that share a prototype of default values and inherited methods.",
    objectives: [
      "Create objects with literals, the new operator and Object.create()",
      "Explain what Object.create(null) produces and when you want it",
      "Use a prototype to supply shared default values and shared methods",
      "Predict when a fresh object is created versus when an existing one is reused"
    ],
    concepts: [
      {
        term: "Object literals",
        kind: "method",
        statement: "An **object literal** is a comma-separated list of `name: value` pairs between braces: `{ x: 1, y: 2 }`. It is an **expression** — it is evaluated (and creates a brand-new object) every time the statement runs — and it may nest arbitrarily with array and function literals.",
        detail: "```\nlet empty = {};\nlet point = { x: 1, y: 2 };\nfunction makePoint(x, y) {\n  return { x, y }; // shorthand — Section 6.6\n}\n```\nA trailing comma after the last property is legal. Every literal gets `Object.prototype` as its prototype, which is why `point.toString` works."
      },
      {
        term: "The new operator",
        kind: "method",
        statement: "`new` creates a new object that inherits from the specified **constructor function**’s `prototype` property, then invokes the constructor with the new object as the value of `this`: `let o = new Object();` creates an empty object just like `{}`. The same mechanism produces `new Array()`, `new Date()`, `new Map()` and — in Chapter 9 — your own classes.",
        detail: "The full four-step mechanics of `new` are traced in Section 9.2. For now: constructor invocation is the second route to an object, and the built-in constructor `Object()` is almost never worth calling — `{}` is shorter and idiomatic."
      },
      {
        term: "Object.create()",
        kind: "method",
        statement: "**`Object.create(p)`** creates a new empty object with **`p` as its prototype**, before any properties are assigned — letting you pick the prototype explicitly. `Object.create(Object.prototype)` produces another plain empty `{}`-equivalent; `Object.create(null)` produces an object with **no prototype at all**, inheriting nothing.",
        detail: "```\nlet o1 = Object.create({ x: 1, y: 2 });\no1.x + o1.y // 3 — inherited\nlet o2 = Object.create(null); // no toString, no nothing\no2.toString // undefined\n```\n`Object.create()` is also useful defensively: a dictionary built on `Object.create(null)` cannot be tricked by an inherited `toString` when property names are untrusted."
      },
      {
        term: "The prototype as a source of defaults",
        kind: "method",
        statement: "Because reads fall through to the prototype and writes stay on the object itself, a shared prototype doubles as a store of **default values**: instances list only their differences, and setting a property **shadows** the inherited one rather than changing it for everyone.",
        detail: "```\nlet defaults = { theme: \"light\", volume: 5, muted: false };\nlet options = Object.create(defaults);\noptions.theme = \"dark\";     // own property, shadows the default\nconsole.log(options.volume); // 5 — still from the prototype\n```\nThis one-inherit-per-lookup scheme is memory-friendly too: the default values exist once, not once per options object."
      },
      {
        term: "Literals are evaluated every time",
        kind: "insight",
        statement: "A literal inside a loop body or function body runs again on each iteration or call, so a factory function returning `{ x, y }` hands out a **fresh object on every call**. The confusion case is the opposite: storing a literal in a `const` variable creates one object that is simply shared by everyone holding that variable.",
        detail: "```\nfunction fresh() { return { n: 0 }; }\nlet a = fresh(), b = fresh();\na.n = 1;\nconsole.log(b.n); // 0 — two independent objects\n\nconst shared = { n: 0 };\nlet c = shared, d = shared;\nc.n = 1;\nconsole.log(d.n); // 1 — one object, two variables\n```"
      }
    ],
    examples: [
      {
        title: "Trace the engine: three empty objects and a fourth with no past",
        problem: "Create an empty object each of the three ways, plus one via `Object.create(null)`. For each, say what `o.toString` is and why.",
        steps: [
          { label: "Step 1: The three routes", text: "```\nlet a = {};                        // literal\nlet b = new Object();              // constructor\nlet c = Object.create(Object.prototype);\n```\nAll three are empty ordinary objects whose prototype is `Object.prototype` — functionally identical." },
          { label: "Step 2: The inherited method", text: "For `a`, `b` and `c`, `o.toString` is the function on `Object.prototype`, so `String(o)` gives `\"[object Object]\"` for each." },
          { label: "Step 3: The null-prototype object", text: "```\nlet d = Object.create(null);\nd.toString // undefined\n```\n`d`’s prototype is `null`, the end-of-chain marker — it has no inherited properties at all, not even `toString` or `hasOwnProperty`." },
          { label: "Step 4: Where the null prototype shines", text: "Converting `d` to a primitive (`String(d)`, `` `${d}` ``) throws `TypeError: Cannot convert object to primitive value` — but as a pure dictionary keyed by untrusted names it is the safest object in the language: no inherited property can collide with a stored key." }
        ],
        result: "`{}`, `new Object()` and `Object.create(Object.prototype)` all yield a standard empty object inheriting from `Object.prototype`; `Object.create(null)` yields a bare dictionary with no inherited members."
      },
      {
        title: "A prototype ladder of settings",
        problem: "Build a chain `defaults` → `options` and trace every read and write, including what happens after `delete`.",
        steps: [
          { label: "Step 1: Set up the chain", text: "```\nlet defaults = { theme: \"light\", volume: 5 };\nlet options = Object.create(defaults);\noptions.theme = \"dark\"; // own property — shadows, does not touch defaults\n```\nChain: `options` → `defaults` → `Object.prototype` → `null`." },
          { label: "Step 2: Reads", text: "`options.theme` → `\"dark\"` (own property found first, lookup stops). `options.volume` → `5` (falls through to `defaults`). `options.muted` → `undefined` (nowhere in the chain)." },
          { label: "Step 3: The write never leaks upward", text: "`options.volume = 0` creates an own `volume` on `options`; `defaults.volume` still reads `5`. Shadowing is per-object: the shared default is intact for other objects created from it." },
          { label: "Step 4: Delete restores the inherited view", text: "`delete options.theme` removes the own property, so `options.theme` is `\"light\"` again — the inherited value shows through (the delete operator is traced fully in the next section)." }
        ],
        result: "Reads fall down the chain, writes stay on the top object, deletes un-shadow: `theme` goes `\"light\"` → `\"dark\"` → (delete) → `\"light\"`, while `defaults` never changed."
      },
      {
        title: "How many objects does this loop create?",
        problem: "How many distinct objects exist after running the code below, and which variables see which ones?",
        steps: [
          { label: "Step 1: The code", text: "```\nconst origin = { x: 0, y: 0 };\nlet points = [];\nfor (let i = 0; i < 3; i++) {\n  points.push({ x: i, y: 0 });\n}\n```" },
          { label: "Step 2: Count the literals", text: "The loop body runs three times and the literal `{ x: i, y: 0 }` is evaluated each time — three distinct points with `x` of 0, 1 and 2. Plus `origin` and the array itself: five objects." },
          { label: "Step 3: They do not share state", text: "`points[0].x = 99` changes only the first point; `origin` and the other points are untouched because each literal evaluation made a fresh object." },
          { label: "Step 4: The trap that does not apply here", text: "Had the loop pushed `origin` instead of a literal, all three slots would alias one object and the mutation would be visible three times. Literal-per-iteration is what saves you." }
        ],
        result: "Five objects: `origin`, the array, and three loop-fresh points. Each literal evaluation is a new object; only explicit sharing of a variable re-uses one."
      }
    ],
    keyTakeaways: [
      "Three creation routes: the literal `{}` (idiomatic), `new Constructor()`, and `Object.create(proto)` with an explicit prototype.",
      "An object literal is an expression evaluated on every run — fresh object each time it executes.",
      "`Object.create(p)` links the new object to `p`; reads inherit and writes shadow.",
      "`Object.create(null)` produces a prototype-less dictionary: no inherited `toString`, immune to name collisions, unsafe to convert to a primitive.",
      "A shared prototype is an efficient store of defaults: instances hold only their overrides.",
      "`{}`, `new Object()` and `Object.create(Object.prototype)` are the same object shape."
    ],
    quiz: [
      {
        q: "The expression `Object.create(null)` yields an object that:",
        options: [
          "is the same as {}",
          "has no inherited properties at all, not even toString",
          "cannot have properties added to it",
          "inherits from Object.prototype like every object"
        ],
        answer: 1,
        explanation: "`null` is the end of every prototype chain, so the new object inherits nothing; it is still extensible and perfectly usable as a dictionary."
      },
      {
        q: "After `let p = { x: 1 }; let o = Object.create(p); o.x = 2; delete o.x;` the expression `o.x` is:",
        options: ["undefined", "1", "2", "0"],
        answer: 1,
        explanation: "The write created an own property that shadowed the inherited one; deleting the own property re-exposes the inherited `x: 1`."
      },
      {
        q: "A function body contains the statement `return { seed: 1 };` and is called five times. How many seed objects exist?",
        options: [
          "one — the literal was compiled once",
          "five — the literal is evaluated at each call",
          "zero — return values are discarded",
          "one per distinct caller"
        ],
        answer: 1,
        explanation: "Object literals are expressions: every evaluation creates and returns a new object, so five calls produce five independent `{ seed: 1 }` objects."
      },
      {
        q: "`new Date()` creates an object whose prototype is:",
        options: [
          "Object.prototype",
          "Date.prototype, which itself inherits from Object.prototype",
          "null",
          "the current date string"
        ],
        answer: 1,
        explanation: "Constructor invocation links the new object to the constructor’s prototype property; Date.prototype’s own prototype is Object.prototype, forming the chain."
      }
    ]
  },

  // ---------------------------------------------------------------- 6.3
  {
    sectionId: "js-ch6-s3",
    readingTime: 9,
    intro: "Property access looks trivial until you ask what `o.x` really does — and then square brackets, dynamic keys, prototypes, null bases and deletion all matter. This section covers the two access forms, when each is required, exactly which operations throw, and the `delete` operator that removes own properties while leaving inherited ones alone.",
    objectives: [
      "Choose between dot and square-bracket property access and convert between them",
      "Use bracket notation for computed and arbitrary property names",
      "Predict the TypeErrors that come from null and undefined base objects",
      "Trace how assignment creates or overwrites own properties — never inherited ones",
      "Delete own properties and explain what happens to inherited ones"
    ],
    concepts: [
      {
        term: "Dot notation",
        kind: "notation",
        statement: "**Dot notation** `o.x` names a property with an identifier: simple, preferred when the name is known ahead of time and is a legal identifier. The identifier after the dot is used literally as the string key — `o.x` and `o[\"x\"]` are the same access.",
        detail: "Reserved words are actually allowed after the dot in modern JavaScript (`o.class`, `o.for`), but the safe style treats anything identifier-like as dot territory and everything else as bracket territory."
      },
      {
        term: "Square bracket notation",
        kind: "notation",
        statement: "**Bracket notation** `o[expr]` evaluates the bracketed expression and **converts the result to a string** to use as the key. It is required when the name is not a legal identifier (`o[\"main title\"]`), when it contains punctuation, or when it is **computed at run time** (`o[name]`).",
        detail: "Because the index becomes a string, `a[2]` and `a[\"2\"]` on an array are the same element — arrays are objects with string keys that merely look numeric."
      },
      {
        term: "Objects as associative arrays",
        kind: "method",
        statement: "Bracket notation turns an object into a **string-to-value map** whose keys are data. The classic pattern — increment a counter for each word, where the words come from input rather than from your source code — is a loop over bracket accesses: `counts[word] = (counts[word] || 0) + 1`.",
        detail: "This is the pre-`Map` idiom from every edition of the book. Its modern caveats: inherited keys can collide, keys are limited to strings, and it needs `Object.create(null)` or careful `hasOwnProperty` checks — reasons the `Map` of Chapter 11 exists."
      },
      {
        term: "TypeErrors on null and undefined bases",
        kind: "law",
        statement: "Reading a property of `null` or `undefined` throws `TypeError` — but **reading a missing property of a valid object never throws**; it yields `undefined`. The same rule applies to writes: `o.x = 1` is fine, `null.x = 1` throws. Guard chains with `&&` or the optional chaining operator `?.`.",
        detail: "```\nlet book = null;\nbook.title            // TypeError: Cannot read properties of null\nbook && book.title    // null — the && short-circuits\nlet shelf = {};\nshelf.book && shelf.book.title // undefined — safe chain\n```"
      },
      {
        term: "Assignment creates or overwrites",
        kind: "law",
        statement: "Property assignment **creates an own property** if the name is absent and **overwrites the own property** if present. It never modifies a prototype: assigning `o.x = 1` when `x` is inherited shadows it with an own copy. A write throws only in strict mode when the property (own or inherited) is non-writable, or when the object is frozen.",
        detail: "Reads consult the chain; writes stay local. That asymmetry is exactly why the shared-defaults pattern of Section 6.2 works and why classes can share methods safely (Chapter 9)."
      },
      {
        term: "The delete operator",
        kind: "method",
        statement: "`delete o.x` removes an **own, configurable** property — it operates on a property access expression, not a bare variable. It returns `true` when the deletion succeeded **or when nothing needed deleting**, and `false` (sloppy mode) or a TypeError (strict mode) for non-configurable properties such as array `length` or properties of the global object created with `var`.",
        detail: "```\nlet o = { x: 1 };\ndelete o.x; // true — now gone\n\"x\" in o;    // false\ndelete o.x; // true again — deleting a missing property is a no-op success\n```\nDeleting does not touch the prototype: if `x` is inherited, `delete o.x` returns true but the inherited `x` remains — and is what you get from then on."
      },
      {
        term: "Delete versus setting to undefined",
        kind: "insight",
        statement: "Setting `o.x = undefined` hides the value but keeps the key — property name in the object, `\"x\" in o` still true, `Object.keys` still lists it. `delete o.x` removes the property itself. The distinction matters for existence tests, enumeration and JSON output.",
        detail: "On arrays the distinction is sharper: `a[i] = undefined` keeps a dense array with an undefined element; `delete a[i]` punches a **hole** (a sparse array) — Section 7.2 traces the difference."
      }
    ],
    examples: [
      {
        title: "Trace the engine: word counts with computed keys",
        problem: "Given `let words = [\"red\", \"blue\", \"red\"];` build a count table using bracket notation, tracing every read and write.",
        steps: [
          { label: "Step 1: The loop", text: "```\nlet counts = Object.create(null); // no inherited keys to collide\nfor (let w of words) {\n  counts[w] = (counts[w] || 0) + 1;\n}\n```" },
          { label: "Step 2: First iteration, w is red", text: "`counts[\"red\"]` is `undefined` (fresh object); `undefined || 0` is `0`; `0 + 1` is `1`; write creates the own property `red: 1`." },
          { label: "Step 3: Second iteration, w is blue", text: "Same dance: `blue` was absent → `blue: 1` is created. The two keys are unrelated data — the object is being used as a map." },
          { label: "Step 4: Third iteration, w is red again", text: "Now `counts[\"red\"]` is `1`, so `1 + 1` gives `2` and the own property is overwritten: `red: 2`." },
          { label: "Step 5: Read back", text: "`counts` is `{ red: 2, blue: 1 }`; `Object.keys(counts)` is `[\"red\", \"blue\"]` in insertion order. Note that `counts[w]` — with the loop variable — is exactly what dot notation cannot express: the key arrives as a string at run time." }
        ],
        result: "The `|| 0` default plus an overwrite-on-write gives a tally in three iterations: `{ red: 2, blue: 1 }` — computed keys are the entire trick."
      },
      {
        title: "The delete trace: shadow, delete, inherit",
        problem: "Start from `let p = { x: 1 };` and `let o = Object.create(p);`. Set `o.x = 2`, delete it twice, and explain every value read along the way.",
        steps: [
          { label: "Step 1: The shadowing write", text: "`o.x = 2` creates an **own** property `x` on `o`. `o.x` reads `2` (own found first, prototype never consulted); `p.x` still reads `1`." },
          { label: "Step 2: The first delete", text: "`delete o.x` returns `true` and removes the own property. The next read `o.x` falls through to `p` and returns `1` — the inherited value was never touched, merely hidden." },
          { label: "Step 3: The second delete", text: "`delete o.x` again — there is no own `x` on `o`, so the operator has nothing to remove. It returns `true` (a no-op success) and **the inherited `x` survives**: `o.x` is still `1`." },
          { label: "Step 4: The moral", text: "`delete` operates on the object in the expression `o.x` — the base `o` — never on the prototype chain behind it. Deleting your own shadow is the only way to re-expose an inherited value." }
        ],
        result: "`o.x` reads: 2 (own) → 1 (after delete re-exposes the inherited value) → 1 (second delete is a no-op; inherited properties are out of its reach)."
      },
      {
        title: "Guarding a chained access",
        problem: "Why does the book write `book && book.author && book.author.name` instead of just `book.author.name`, and how does optional chaining shorten it?",
        steps: [
          { label: "Step 1: The failure", text: "If `book` is `null` or `book.author` is `undefined`, then `book.author.name` throws TypeError for reading `.name` of that null/undefined — one missing layer kills the whole chain." },
          { label: "Step 2: The && ladder", text: "```\nlet name = book && book.author && book.author.name;\n```\nEach `&&` evaluates to its left side when that side is falsy — `null` or `undefined` — stopping the chain before the fatal read. The result is `undefined` instead of an exception." },
          { label: "Step 3: Optional chaining", text: "```\nlet name = book?.author?.name;\n```\nThe `?.` operator does the same test automatically: if the base is null/undefined the whole expression is `undefined`; otherwise evaluation proceeds to the right. `?.` is an ES2020 operator covered with the operators in Chapter 4." },
          { label: "Step 4: Writes need the long form", text: "`book?.author = ...` is illegal — optional chaining is for reads. To assign safely you must first ensure each layer exists, which is what constructor functions and classes (Chapter 9) do." }
        ],
        result: "Missing mid-chain data should produce `undefined`, not a TypeError — the `&&` ladder and `?.` both deliver that, at the cost of one construct per link."
      }
    ],
    keyTakeaways: [
      "`o.x` requires an identifier; `o[expr]` converts any expression to a string key and is the only form for computed or exotic names.",
      "Reading a missing property yields `undefined`; reading any property of `null`/`undefined` throws TypeError — guard with `&&` or `?.`.",
      "Assignment creates or overwrites an own property; it never writes to the prototype — inherited values are shadowed, not changed.",
      "`delete o.x` removes the own configurable property and returns true; deleting a missing or inherited property changes nothing.",
      "Delete removes the property; assigning `undefined` keeps the key with a dead value — different `in`/enumeration/JSON consequences.",
      "Arrays are objects with string keys: `a[2]` is `a[\"2\"]`."
    ],
    quiz: [
      {
        q: "Which expression is the correct way to read the property whose name is held in the variable `key`?",
        options: ["o.key", "o[key]", "o::key", "o->key"],
        answer: 1,
        explanation: "Bracket notation evaluates its contents, converting the result to the string key; `o.key` would look up the literal name \"key\"."
      },
      {
        q: "After `let o = { a: 1 };` the expression `delete o.b` returns:",
        options: [
          "false, because b does not exist",
          "true — deleting a nonexistent property is a successful no-op",
          "undefined",
          "a TypeError"
        ],
        answer: 1,
        explanation: "delete returns true when the property is gone or was never there; it only fails (false or TypeError in strict mode) for non-configurable properties."
      },
      {
        q: "If `o` inherits property `x` from its prototype, then after `o.x = 5` executes:",
        options: [
          "the prototype’s x becomes 5",
          "o gains an own property x equal to 5, shadowing the inherited one",
          "a TypeError is thrown because x already exists",
          "the property is deleted"
        ],
        answer: 1,
        explanation: "Writes never reach the prototype: assignment creates an own property on the base object of the access expression, hiding the inherited value for this object only."
      },
      {
        q: "Which single expression throws a TypeError?",
        options: [
          "let n = o.missing;",
          "let n = o.missing.deeper;",
          "let n = o[\"totally unknown key\"];",
          "let n = o.toString;"
        ],
        answer: 1,
        explanation: "A missing property safely evaluates to undefined — but reading .deeper of that undefined throws; the other three read properties of a valid object."
      },
      {
        q: "The main reason bracket notation exists alongside dot notation is:",
        options: [
          "brackets are faster at run time",
          "brackets accept computed names, so keys can be data rather than identifiers",
          "dot notation only works on class instances",
          "brackets copy the property value instead of referencing it"
        ],
        answer: 1,
        explanation: "Dot form needs a literal identifier known at write-time; brackets evaluate an expression to a string key, enabling the map-like uses of objects."
      },
      // Placement-pattern: prototype chain — shadowing and delete (original)
      {
        q: "What does this program print?\n```js\nlet base = { x: 1 };\nlet child = Object.create(base);\nchild.x = 2;\ndelete child.x;\nconsole.log(child.x);\n```",
        options: ["`1`", "`2`", "`undefined`", "A TypeError is thrown"],
        answer: 0,
        explanation: "Step 1: The code given links `child` to `base`, shadows `x`, deletes the shadow, then reads `x`. Step 2: The governing rules are that assignment always creates or updates an own property without touching the prototype, that `delete` removes only own properties and never prototype members, and that a read walks from the object up the prototype chain. Step 3: Tracing line by line, `child.x = 2` creates an own `x` hiding the prototype's `1`, `delete child.x` removes exactly that own property, and the final read finds no own `x` so it continues to `base` and yields `1`. Step 4: The distractors fail because `2` describes the state before the deletion, `undefined` would need the prototype link gone, and `delete` on a configurable own property never throws. Step 5: Therefore the program prints `1`."
      }
    ]
  },

  // ---------------------------------------------------------------- 6.4
  {
    sectionId: "js-ch6-s4",
    readingTime: 9,
    intro: "Does this object have that property — and do you mean have it *itself*, or merely *reach* it through the prototype? JavaScript answers those questions with three different tools (`in`, `hasOwnProperty` and comparing against `undefined`) and enumerates properties with `for/in` plus the `Object.keys` family. This section works every tool and traces the exact differences in a side-by-side example.",
    objectives: [
      "Test property existence with in, hasOwnProperty and the !== undefined idiom",
      "Explain when each test gives a different answer",
      "Enumerate properties with for/in and with Object.keys, Object.values and Object.entries",
      "State and trace the modern property enumeration order rule",
      "Explain why built-in properties do not clutter for/in loops"
    ],
    concepts: [
      {
        term: "The in operator",
        kind: "method",
        statement: "**`\"x\" in o`** tests whether the property `x` exists **anywhere** in `o`’s prototype chain — own or inherited. It is about **existence of the key**, not the value: `\"x\" in { x: undefined }` is `true`.",
        detail: "```\n\"toString\" in {} // true — inherited from Object.prototype\n\"x\" in { x: undefined } // true — the key exists\n```\n`in` on the right-hand of `for/in` is not this operator — the loop form is its own statement (below)."
      },
      {
        term: "hasOwnProperty()",
        kind: "method",
        statement: "**`o.hasOwnProperty(\"x\")`** tests whether `x` is an **own property** of `o`, ignoring the prototype chain entirely. It is the stricter of the two existence tests and the one that matters for data you actually stored on the object.",
        detail: "Because the method itself is inherited from `Object.prototype`, a null-prototype object must borrow it explicitly: `Object.prototype.hasOwnProperty.call(o, \"x\")`. The related `o.propertyIsEnumerable(\"x\")` additionally requires the enumerable attribute to be set."
      },
      {
        term: "The !== undefined idiom",
        kind: "method",
        statement: "The quick test `o.x !== undefined` conflates **existence with value**: it returns false for a property that exists but holds `undefined`, and true only when some key along the chain maps to a defined value. Use it when undefined is not a legal value in your data model.",
        detail: "```\nlet o = { x: undefined };\n\"x\" in o                 // true\no.hasOwnProperty(\"x\")   // true\no.x !== undefined        // false — the value IS undefined\n```\nThree tests, three answers: this object is the worked example of why the distinction survives."
      },
      {
        term: "The for/in loop",
        kind: "method",
        statement: "**`for (let p in o)`** iterates the **string** property names of `o` — own and inherited **enumerable** names alike, walking the prototype chain. It does not enumerate symbol-keyed properties, and it skips non-enumerable ones.",
        detail: "```\nfor (let p in { a: 1, b: 2 }) {\n  console.log(p); // \"a\", then \"b\"\n}\n```\nBecause inherited properties can appear, code that wants only own data usually pairs the loop with `hasOwnProperty` — or just uses `Object.keys`."
      },
      {
        term: "Object.keys, Object.values, Object.entries",
        kind: "method",
        statement: "The three functions return arrays built from the **own, enumerable, string-keyed** properties of the argument: `Object.keys(o)` the names, `Object.values(o)` the values, `Object.entries(o)` an array of `[key, value]` pairs. Inherited properties are excluded — the key behavioral difference from `for/in`.",
        detail: "```\nlet o = { a: 1, b: 2 };\nObject.keys(o)       // [\"a\", \"b\"]\nObject.values(o)     // [1, 2]\nObject.entries(o)    // [[\"a\", 1], [\"b\", 2]]\n```\nBeing arrays, the results are iterable with `for/of`, mappable with `.map`, and generally the modern answer to walking an object — the array methods of Chapter 7 apply directly."
      },
      {
        term: "Property enumeration order",
        kind: "law",
        statement: "Modern JavaScript guarantees enumeration order for own properties: **integer-like string keys in ascending numeric order first**, then remaining string keys **in insertion order**, then symbol keys in insertion order. `Object.keys` follows this rule, and `for/in` enumerates own properties in the same order before moving up the prototype chain.",
        detail: "```\nlet o = { b: 1, 2: \"two\", 1: \"one\", a: 3 };\nObject.keys(o) // [\"1\", \"2\", \"b\", \"a\"]\n```\nThe two integer-like keys jump to the front sorted numerically even though `b` was written first; `b` then `a` follow insertion order. Note that only non-negative integers up to the array-index limit count as integer-like."
      },
      {
        term: "Why for/in stays quiet",
        kind: "insight",
        statement: "The built-in properties of `Object.prototype` — `toString`, `valueOf`, `hasOwnProperty` and friends — are **non-enumerable**, which is why a `for/in` over a plain object does not spew them. The mechanism that keeps the loop clean is the enumerability attribute, and it is also exactly what prototype-patching code must respect (Section 9.4).",
        detail: "This is the design insight of the chapter: inheritance from a shared prototype is only tolerable in everyday code because the inherited built-ins carry `enumerable: false`. You inherit their behavior without inheriting their noise."
      }
    ],
    examples: [
      {
        title: "Trace the engine: three existence tests, three answers",
        problem: "Given `let o = { x: undefined };` determine the value of every expression below before running it, and explain each.",
        steps: [
          { label: "Step 1: The setup", text: "The object has exactly one own property: the key `x`, whose value is `undefined`. Its chain then runs to `Object.prototype`." },
          { label: "Step 2: \"x\" in o", text: "The `in` operator checks the key — own first, found → `true`. The value being undefined is irrelevant to `in`." },
          { label: "Step 3: o.hasOwnProperty(\"x\")", text: "Own test — `x` is an own property → `true`. Same answer as `in` here because the property is own rather than inherited." },
          { label: "Step 4: o.x !== undefined", text: "Reads the value → `undefined`, so the comparison is `false`. The key exists; the idiom says it does not." },
          { label: "Step 5: \"toString\" in o and o.hasOwnProperty(\"toString\")", text: "`in` walks the chain → `true` (inherited from `Object.prototype`). `hasOwnProperty` → `false` — the strict test denies it. Four expressions, and every one of the three tools was needed to describe this one object." }
        ],
        result: "`\"x\" in o` → true, `o.hasOwnProperty(\"x\")` → true, `o.x !== undefined` → false, `\"toString\" in o` → true, `o.hasOwnProperty(\"toString\")` → false — existence, ownness and value are three separate questions."
      },
      {
        title: "The worked diff: for/in versus the Object.keys family",
        problem: "Build an object with one inherited enumerable property and one own property, then run `for/in`, `Object.keys`, `Object.values` and `Object.entries` over it and account for every difference in output.",
        steps: [
          { label: "Step 1: The setup", text: "```\nlet proto = { inherited: 10 };\nlet o = Object.create(proto);\no.own = 20;\n```\n`o` has one own property (`own: 20`) and reaches one inherited enumerable property (`inherited: 10`)." },
          { label: "Step 2: for/in", text: "The loop enumerates own enumerable names first, then walks up the chain — output `own` and then `inherited`. It sees **two** properties." },
          { label: "Step 3: Object.keys", text: "`Object.keys(o)` → `[\"own\"]`. The chain is not consulted: only own, enumerable, string-keyed names appear." },
          { label: "Step 4: Object.values and Object.entries", text: "`Object.values(o)` → `[20]`; `Object.entries(o)` → `[[\"own\", 20]]`. Same own-only rule, and the pairs format pairs perfectly with destructuring: `for (let [k, v] of Object.entries(o))`." },
          { label: "Step 5: The rule to remember", text: "Inherited properties are visible to `in` and to `for/in`, invisible to the `Object.keys` family. When enumerating data you stored, the trio is the safer tool — no prototype surprises can reach it." }
        ],
        result: "`for/in` yields `own`, `inherited`; `Object.keys` yields `[\"own\"]`; values `[20]`; entries `[[\"own\", 20]]` — the diff is exactly the prototype chain."
      },
      {
        title: "Enumeration order, traced",
        problem: "Predict the output of `Object.keys` on `let o = { b: 1, 2: \"two\", 1: \"one\", a: 3 };` and of the `for/in` loop over the same object.",
        steps: [
          { label: "Step 1: Classify the keys", text: "String keys: `\"b\"`, `\"2\"`, `\"1\"`, `\"a\"`. Of these, `\"1\"` and `\"2\"` are **integer-like**; `\"b\"` and `\"a\"` are not." },
          { label: "Step 2: Integer-like keys first, numerically", text: "The rule sorts integer-like keys ascending: `\"1\"` then `\"2\"` — regardless of the fact that `b` was written first and `2` before `1`." },
          { label: "Step 3: Then strings in insertion order", text: "Among the rest, insertion order governs: `\"b\"` (written first) then `\"a\"`. Symbols would come last in their own insertion order — there are none here." },
          { label: "Step 4: The result", text: "`Object.keys(o)` → `[\"1\", \"2\", \"b\", \"a\"]`, and `for (let p in o) console.log(p)` prints the same four names in the same order (nothing is inherited)." },
          { label: "Step 5: Why this rule exists", text: "The integer-first clause keeps array-like keys (and arrays themselves) visiting indices 0, 1, 2… in a sane order, while insertion order for named keys matches programmer intuition about \"the order I added them\"." }
        ],
        result: "`[\"1\", \"2\", \"b\", \"a\"]` — integers sorted numerically lead; named keys follow in written order."
      }
    ],
    keyTakeaways: [
      "`\"x\" in o` tests existence anywhere in the prototype chain; `o.hasOwnProperty(\"x\")` tests own-ness only.",
      "`o.x !== undefined` conflates existence with value — false for a property that exists with value undefined.",
      "`for/in` enumerates own and inherited enumerable string keys; `Object.keys/values/entries` enumerate own enumerable string keys only.",
      "Guaranteed order: integer-like keys ascending, then strings in insertion order, then symbols.",
      "Built-ins stay out of loops because they are non-enumerable — enumerability, not existence, is what keeps `for/in` clean.",
      "Prefer the `Object.entries` + `for/of` combination for walking data objects: array methods apply immediately."
    ],
    quiz: [
      {
        q: "For `let o = { x: undefined };` which expression is false?",
        options: ["\"x\" in o", "o.hasOwnProperty(\"x\")", "o.x !== undefined", "Object.keys(o).includes(\"x\")"],
        answer: 2,
        explanation: "The property exists with the value undefined, so only the value comparison fails — the key tests all pass."
      },
      {
        q: "The key behavioral difference between a `for/in` loop and `Object.keys` is that:",
        options: [
          "for/in is faster",
          "for/in includes inherited enumerable properties; Object.keys reports only own enumerable string keys",
          "Object.keys includes symbol-keyed properties",
          "for/in visits values instead of keys"
        ],
        answer: 1,
        explanation: "Both enumerate string keys, but the loop walks the prototype chain while Object.keys stops at own properties — and neither enumerates symbols."
      },
      {
        q: "Given `let o = { b: 1, 2: \"two\", 1: \"one\", a: 3 };` what does `Object.keys(o)` return?",
        options: [
          "[\"b\", \"2\", \"1\", \"a\"]",
          "[\"1\", \"2\", \"b\", \"a\"]",
          "[\"b\", \"a\", \"1\", \"2\"]",
          "[\"1\", \"2\", \"a\", \"b\"]"
        ],
        answer: 1,
        explanation: "Integer-like keys sort first in ascending numeric order (\"1\", \"2\"), then the remaining string keys follow insertion order (\"b\" before \"a\")."
      },
      {
        q: "Why does a `for/in` loop over a plain object not list `toString`?",
        options: [
          "because toString is inherited rather than own, and for/in skips all inherited properties",
          "because toString is non-enumerable",
          "because toString is a function",
          "because toString lives on the constructor, not the prototype"
        ],
        answer: 1,
        explanation: "for/in actually does include inherited enumerable properties — it skips toString because that built-in carries the enumerable: false attribute."
      }
    ]
  },

  // ---------------------------------------------------------------- 6.5
  {
    sectionId: "js-ch6-s5",
    readingTime: 9,
    intro: "Objects grow and travel: `Object.assign` and the spread operator copy properties from one object into another, and `JSON.stringify` with `JSON.parse` turns objects into text and back. Both operations have sharp edges — shallow copies, last-write-wins merging, dropped functions, `undefined` and symbols — and both are traced below statement by statement, including the `toJSON` escape hatch that makes serialization customizable.",
    objectives: [
      "Extend objects with Object.assign and the object spread operator, knowing exactly what each copies",
      "Predict the winner when multiple sources define the same property",
      "Trace what JSON.stringify keeps, drops and transforms",
      "Round-trip an object through JSON.parse and know what cannot survive the trip",
      "Customize serialization with toJSON"
    ],
    concepts: [
      {
        term: "Object.assign",
        kind: "method",
        statement: "**`Object.assign(target, ...sources)`** copies the **own enumerable** properties (string and symbol keyed) of each source object into `target` — reading each value from its source and **writing** it into the target — then returns the (mutated) target. If several sources define the same key, **the last one wins**.",
        detail: "```\nlet target = { a: 1 };\nObject.assign(target, { b: 2 }, { a: 3 });\n// target is { a: 3, b: 2 }\n```\nBecause it writes into the target, the classic safe-merge idiom passes a fresh literal: `let merged = Object.assign({}, defaults, options);` — the empty literal absorbs everything and `defaults` stays untouched."
      },
      {
        term: "Spread in object literals",
        kind: "method",
        statement: "The **object spread operator** `{ ...source }` inside a literal copies the own enumerable properties of `source` into the new object being built. `let copy = { ...o }` is the idiomatic shallow copy, and `{ ...defaults, ...options }` the idiomatic merge — same semantics as the `Object.assign({}, ...)` idiom, fresh object guaranteed.",
        detail: "```\nlet o = { x: 1, y: 2 };\nlet copy = { ...o, z: 3 }; // { x: 1, y: 2, z: 3 }\ncopy.x = 99;\no.x // still 1\n```\nSpread may appear anywhere in the literal, and explicit properties written **after** it override the spread values; properties written before are overridden by the spread."
      },
      {
        term: "Shallow means shallow",
        kind: "insight",
        statement: "Both `Object.assign` and spread copy **one level** of properties. If a property value is a nested object, the copy gets a reference to the *same* nested object — mutating it through either parent is visible through both. Deep copies need a recursive walk or `structuredClone()`.",
        detail: "```\nlet original = { home: { city: \"Eugene\" } };\nlet copy = { ...original };\ncopy.home.city = \"Portland\";\noriginal.home.city // \"Portland\" — one home object, two parents\n```\nSerialization is one way out: `JSON.parse(JSON.stringify(o))` deep-copies anything that survives JSON — at the price of the drops listed next."
      },
      {
        term: "JSON.stringify",
        kind: "method",
        statement: "**`JSON.stringify(o)`** serializes the own enumerable string-keyed properties of `o` into JSON text. It drops functions, `undefined` values and symbol-keyed properties; converts `NaN` and `Infinity` to `null`; serializes `Date` objects as ISO strings (via their `toJSON`); and throws `TypeError` on circular (cyclically nested) structures.",
        detail: "```\nJSON.stringify({ a: 1, b: [true, null] })\n// '{\"a\":1,\"b\":[true,null]}'\nJSON.stringify({ f: () => 1, g: undefined, h: NaN })\n// '{\"h\":null}'\n```\nOptional second and third arguments filter keys and pretty-print: `JSON.stringify(o, null, 2)` indents with two spaces. Arrays serialize element by element, with holes and undefined elements both becoming `null` (Chapter 7)."
      },
      {
        term: "JSON.parse",
        kind: "method",
        statement: "**`JSON.parse(text)`** parses JSON text into new objects, arrays and primitive values. The result is made of **plain objects and arrays**: no classes, no methods, no prototypes beyond the ordinary ones — functions that were dropped by stringify cannot come back.",
        detail: "A second reviver argument can transform values during parsing — the mirror image of `toJSON`, treated with the whole JSON API in Chapter 11. For now: round-tripping state through JSON yields data-shaped objects, and rebuilding a class instance is your job (`Object.assign(new Range(0, 0), parsed)` is a serviceable start)."
      },
      {
        term: "toJSON",
        kind: "method",
        statement: "If an object has a method named **`toJSON`**, `JSON.stringify` calls it and serializes **its return value** instead of the object itself. This is how `Date` produces its ISO string, and how you teach your own classes to serialize: return the plain data that should represent the object.",
        detail: "```\nclass Temperature {\n  constructor(c) { this.celsius = c; }\n  toJSON() { return this.celsius; }\n}\nJSON.stringify(new Temperature(25)) // \"25\"\nJSON.parse(\"25\")                     // 25\n```\n`toJSON` is called **before** the replacer and before property enumeration — the earliest hook in the pipeline, and the most powerful."
      }
    ],
    examples: [
      {
        title: "Trace the engine: a three-way merge",
        problem: "Given defaults for a chart and two override objects, trace `Object.assign({}, defaults, options)` and its spread twin, and say exactly which object gets mutated.",
        steps: [
          { label: "Step 1: The inputs", text: "```\nlet defaults = { width: 100, height: 100, color: \"red\" };\nlet options = { width: 200 };\n```" },
          { label: "Step 2: Assign into a fresh target", text: "```\nlet chart = Object.assign({}, defaults, options);\n```\nFirst the empty `{}` receives `width: 100`, `height: 100`, `color: \"red\"` from `defaults` — then `options` overwrites `width` to `200`. Result: `{ width: 200, height: 100, color: \"red\" }`." },
          { label: "Step 3: Last write wins", text: "The overwrite rule is purely sequential: each later source rewrites any key an earlier source set. Reordering the arguments reorders the winners — `Object.assign({}, options, defaults)` would end with `width: 100`." },
          { label: "Step 4: The originals are intact", text: "`defaults.width` still reads `100` and `options` still has only `width` — only the fresh literal was written into. Omit it (`Object.assign(defaults, options)`) and defaults itself would be mutated — a classic bug." },
          { label: "Step 5: The spread twin", text: "```\nlet chart2 = { ...defaults, ...options };\n```\nIdentical result, guaranteed-fresh target by construction. Note both are **shallow**: a nested `axis: { min: 0 }` would be shared, not copied." }
        ],
        result: "`{ width: 200, height: 100, color: \"red\" }` — a new object; `defaults` and `options` untouched; last-mentioned source owns every collision."
      },
      {
        title: "Trace the engine: what survives a JSON round trip",
        problem: "Serialize the `lecture` object below and account for every property that is kept, transformed or dropped; then parse the text back and compare.",
        steps: [
          { label: "Step 1: The object", text: "```\nlet lecture = {\n  title: \"Closures\",\n  room: null,\n  when: new Date(Date.UTC(2027, 2, 14)),\n  canceled: undefined,\n  describe() { return `Lecture on ${this.title}`; }\n};\n```" },
          { label: "Step 2: Walk the own enumerable string keys in order", text: "`title` → string, kept. `room` → `null` is legal JSON, kept. `when` → a Date: stringify consults `toJSON`, which yields the ISO string `\"2027-03-14T00:00:00.000Z\"`. `canceled` → `undefined`, **dropped from the object entirely**. `describe` → a function, dropped." },
          { label: "Step 3: The text", text: "```\nlet s = JSON.stringify(lecture);\n// '{\"title\":\"Closures\",\"room\":null,\"when\":\"2027-03-14T00:00:00.000Z\"}'\n```" },
          { label: "Step 4: Parse it back", text: "`let copy = JSON.parse(s);` yields `{ title: \"Closures\", room: null, when: \"2027-03-14T00:00:00.000Z\" }` — note `when` is now a **string**, not a Date; parsing is literal, so reviving typed values needs code (or a reviver)." },
          { label: "Step 5: The audit", text: "Survived: title, room. Transformed: when (Date → string). Lost: canceled (undefined), describe (function), the original’s prototype identity — `copy.describe` is undefined and `copy instanceof` anything interesting is false." }
        ],
        result: "JSON keeps plain data, converts Dates to ISO strings via toJSON, and silently discards functions, undefined and symbols — parse gives back data-shaped plain objects, never class instances."
      },
      {
        title: "toJSON to the rescue: serializing a Set",
        problem: "A `Set` serializes to `{}` — explain why, then fix it with `toJSON` on a subclass and trace the output.",
        steps: [
          { label: "Step 1: The failure", text: "```\nJSON.stringify(new Set([1, 2, 3])) // \"{}\"\n```\nA Set stores its members in internal slots, not in own enumerable string-keyed properties — so the property-walking serializer sees nothing." },
          { label: "Step 2: The fix", text: "```\nclass SerializableSet extends Set {\n  toJSON() {\n    return [...this]; // spread the members into an array — Chapter 7\n  }\n}\n```" },
          { label: "Step 3: Trace the serialization", text: "`JSON.stringify(new SerializableSet([\"a\", \"b\"]))` — stringify finds `toJSON`, calls it, gets `[\"a\", \"b\"]`, and serializes that array: `'[\"a\",\"b\"]'`." },
          { label: "Step 4: Round trip", text: "`JSON.parse` yields the array `[\"a\", \"b\"]`; turning it back into a Set is one constructor call: `new SerializableSet(parsed)` — the pair of directions is symmetric only because we wrote both ends." },
          { label: "Step 5: Generalize the lesson", text: "`toJSON` is the single sanctioned hook for making any class or built-in serializable: return the plain value (primitive, array, plain object) that *represents* the object, and stringify handles the rest recursively." }
        ],
        result: "From `\"{}\"` to `'[\"a\",\"b\"]'` — one method, called before enumeration, that swaps the object for its serializable stand-in."
      }
    ],
    keyTakeaways: [
      "`Object.assign(target, ...sources)` mutates and returns the target, copying own enumerable properties; later sources win collisions.",
      "`{ ...o }` spreads the same own enumerable properties into a fresh object — the safe-copy and safe-merge idiom.",
      "Both copies are shallow: nested objects are shared between original and copy.",
      "`JSON.stringify` keeps own enumerable string-keyed data, converts NaN/Infinity to null, stringifies Dates via toJSON, and drops functions, undefined and symbol keys.",
      "`JSON.parse` returns plain data — no methods, no classes; circular structures make stringify throw.",
      "A `toJSON` method swaps an object for its serializable representation before anything else happens."
    ],
    quiz: [
      {
        q: "After `Object.assign(target, s1, s2)` where both sources define property `x`, the value of `target.x` comes from:",
        options: ["s1", "s2", "whichever value is larger", "neither — assign throws on conflicts"],
        answer: 1,
        explanation: "Properties are copied source by source in argument order, so the last source to write a key owns the final value."
      },
      {
        q: "Which value is NOT silently dropped by `JSON.stringify` when serializing `{ f: fn, n: NaN }`?",
        options: ["the function f", "NaN, which becomes null", "both are dropped", "stringify throws instead"],
        answer: 1,
        explanation: "Functions and undefined are dropped from objects, but NaN is converted to the JSON value null — it survives as a value, not as a number."
      },
      {
        q: "The expression `JSON.parse(JSON.stringify(obj))` is best described as:",
        options: [
          "an infinite loop",
          "a deep copy of the JSON-representable part of obj",
          "a no-op that returns obj itself",
          "a shallow copy that preserves methods"
        ],
        answer: 1,
        explanation: "Serialization recurses through nested objects, so the copy is deep — but functions, undefined, symbols and Dates-as-Dates do not survive, and cycles throw."
      },
      {
        q: "During `JSON.stringify(o)`, if `o` has a method named `toJSON`, stringify:",
        options: [
          "ignores it because it is a function",
          "calls it and serializes its return value instead of o",
          "calls it only if o is a Date",
          "throws a TypeError"
        ],
        answer: 1,
        explanation: "toJSON is the earliest hook in the pipeline: its return value — not the object itself — is what gets serialized, which is exactly how Date becomes an ISO string."
      },
      {
        q: "`let a = { deep: { v: 1 } }; let b = { ...a }; b.deep.v = 2;` — now `a.deep.v` is:",
        options: ["1", "2", "undefined", "an error is thrown"],
        answer: 1,
        explanation: "The spread copied the reference to the one nested deep object, so both parents see the mutation — shallow copies share second-level state."
      }
    ]
  },

  // ---------------------------------------------------------------- 6.6
  {
    sectionId: "js-ch6-s6",
    readingTime: 10,
    intro: "Object methods are just function-valued properties — but the `this` keyword that runs through them, the `toString`/`valueOf` conversion protocol, and the extended literal syntax of ES6 (shorthand properties, computed keys, symbols, shorthand methods, getters and setters) give them real power. This section closes the chapter with the full literal toolbox and a worked accessor that validates its writes.",
    objectives: [
      "Define methods and explain what this is in a method invocation",
      "Customize string and number conversion with toString and valueOf",
      "Use every ES6 literal extension: shorthand properties, computed keys, symbols, shorthand methods, spread",
      "Define getter and setter accessor properties in an object literal",
      "Build a validated accessor pair that protects its state"
    ],
    concepts: [
      {
        term: "Methods and this",
        kind: "definition",
        statement: "A **method** is a function stored as a property, invoked through its object: `o.m()`. Inside the call, the keyword **`this`** holds the object of invocation — so `this.x` in a method reads or writes the receiving object’s own state. `this` is determined **by how the function is called**, not where it is defined (the full invocation table is Section 8.2).",
        detail: "```\nlet calculator = {\n  value: 0,\n  add(n) { this.value += n; return this; },\n};\ncalculator.add(2).add(3); // .value is 5 — returning this chains calls\n```\nReturning `this` from mutating methods is the **method chaining** idiom behind fluent APIs."
      },
      {
        term: "toString and valueOf",
        kind: "method",
        statement: "Every object inherits **`toString()`** (a string representation — the default is `\"[object Object]\"`) and **`valueOf()`** (a primitive stand-in for number contexts — by default the object itself). Overriding `toString` customizes template literals and `String(o)`; overriding `valueOf` customizes arithmetic and comparison conversions.",
        detail: "```\nconst point = {\n  x: 3, y: 4,\n  toString() { return `(${this.x}, ${this.y})`; },\n  valueOf() { return Math.hypot(this.x, this.y); }\n};\nString(point)  // \"(3, 4)\" — toString\npoint * 2      // 10 — valueOf gives 5, then doubled\n```\nThere is also a locale-aware `toLocaleString()` hook used by internationalized code (Chapter 11)."
      },
      {
        term: "Shorthand properties",
        kind: "notation",
        statement: "Inside an object literal, a bare name stands for the variable of that name: `{ x, y }` is exactly `{ x: x, y: y }`. The shorthand is why factory functions returning state can be so compact, and it pairs with destructuring throughout the book’s later code.",
        detail: "```\nfunction makePoint(x, y) {\n  return { x, y }; // same as { x: x, y: y }\n}\nmakePoint(1, 2) // { x: 1, y: 2 }\n```"
      },
      {
        term: "Computed property names",
        kind: "notation",
        statement: "Inside a literal, square brackets around an **expression** compute the property name at object-creation time: `{ [prop + \"Name\"]: value }`. Everything the bracket accessor can do to a name, the computed key can do while the object is being built.",
        detail: "```\nlet prop = \"main\";\nlet config = { [prop]: 1, [`${prop}Title\"]: \"Config\" };\n// { main: 1, mainTitle: \"Config\" }\n```\nThe expression may evaluate to a string or a **symbol** — computed keys are the only way to use a symbol key in a literal."
      },
      {
        term: "Symbols as property keys",
        kind: "method",
        statement: "A **symbol** (Chapter 3) is a primitive guaranteed unique even against an identical description, so symbol-keyed properties cannot collide with anyone else’s string keys. They are invisible to `for/in` and `Object.keys`, ignored by `JSON.stringify`, and are the mechanism for both pseudo-private object state and the well-known protocol hooks like `Symbol.iterator` (Chapters 12 and 14).",
        detail: "```\nconst SIZE = Symbol(\"size\");\nconst stack = {\n  [SIZE]: 0,\n  push(v) { this[SIZE]++; return v; }\n};\nObject.keys(stack) // [\"push\"] — SIZE is hidden\n```\nHidden is not private (anyone holding the symbol can read it), but accidental access and name collisions are both out of the picture."
      },
      {
        term: "Shorthand methods",
        kind: "notation",
        statement: "A literal method drops the colon and the `function` keyword: `{ area() { return this.r * this.r * Math.PI; } }`. It is the same function expression with the name recorded properly for stack traces — and the syntax also hosts generator (`*m()`) and async (`async m()`) shorthand.",
        detail: "```\nlet circle = {\n  r: 1,\n  area() { return Math.PI * this.r ** 2; },\n  *[Symbol.iterator]() { yield this.r; } // generator shorthand, Chapter 12\n};\ncircle.area() // 3.141592653589793\n```"
      },
      {
        term: "Getters and setters in literals",
        kind: "method",
        statement: "An **accessor property** defined in a literal pairs `get name()` and/or `set name(v)` functions with one property name. Reading `o.name` runs the getter; assigning runs the setter. Accessors hold no value attribute — compute or guard the value in the pair — and they are the natural home of validation and derived properties.",
        detail: "```\nconst user = {\n  _name: \"\",\n  get name() { return this._name; },\n  set name(v) {\n    if (typeof v !== \"string\" || v.length === 0) throw new TypeError(\"bad name\");\n    this._name = v;\n  }\n};\n```\nThe leading underscore marks the backing data property as internal by convention only — real privacy needs closures (Section 8.5) or `#` private fields (Chapter 9)."
      },
      {
        term: "Accessor properties are enumerable and configurable",
        kind: "insight",
        statement: "Accessors created with literal syntax have `enumerable: true` and `configurable: true` — they show up in `Object.keys` like any data property. The writable attribute does not exist for them: it is replaced by the presence or absence of the setter (get-only = read-only).",
        detail: "A getter without a setter makes a property assignment fail silently in sloppy mode or throw TypeError in strict mode — the same read-only behavior a non-writable data property shows."
      }
    ],
    examples: [
      {
        title: "The worked accessor: a validating thermometer",
        problem: "Build a thermometer object whose celsius property validates writes (numbers only, never below absolute zero) and whose fahrenheit property is computed, then trace four operations including one that throws.",
        steps: [
          { label: "Step 1: The object", text: "```\nconst thermometer = {\n  _celsius: 0,\n  set celsius(v) {\n    if (typeof v !== \"number\" || !Number.isFinite(v) || v < -273.15) {\n      throw new RangeError(`invalid celsius value: ${v}`);\n    }\n    this._celsius = v;\n  },\n  get celsius() { return this._celsius; },\n  get fahrenheit() { return this._celsius * 1.8 + 32; }\n};\n```" },
          { label: "Step 2: The first read", text: "`thermometer.celsius` runs the getter → `0`. No function call syntax is written or needed — the property read *is* the call." },
          { label: "Step 3: A legal write", text: "`thermometer.celsius = 25;` runs the setter; the argument is a finite number above −273.15, so the guard passes and `_celsius` becomes 25. Then `thermometer.fahrenheit` → `25 * 1.8 + 32` = `77` — computed on demand, stored nowhere." },
          { label: "Step 4: The illegal writes", text: "`thermometer.celsius = \"warm\"` throws `RangeError` — `typeof` check fails. `thermometer.celsius = -300` throws — below absolute zero. The stored value is untouched: **validation happens before the assignment**, so bad data never lands." },
          { label: "Step 5: What the outside world sees", text: "`Object.keys(thermometer)` lists `\"_celsius\"`, `\"celsius\"` and `\"fahrenheit\"` — the accessors are ordinary enumerable properties; only their behavior differs. And `JSON.stringify(thermometer)` serializes the backing store, not the computed fahrenheit." }
        ],
        result: "Reads compute, writes validate, and the fahrenheit property is derived fresh on every access — with `RangeError: invalid celsius value: -300` guarding the bottom of the scale."
      },
      {
        title: "Trace the engine: conversion protocol on a point",
        problem: "For the `point` object with custom `toString` and `valueOf` below, trace `String(point)`, `` `${point}` ``, `point * 2` and `+point`.",
        steps: [
          { label: "Step 1: The object", text: "```\nconst point = {\n  x: 3, y: 4,\n  toString() { return `(${this.x}, ${this.y})`; },\n  valueOf() { return Math.hypot(this.x, this.y); }\n};\n```" },
          { label: "Step 2: String contexts", text: "`String(point)` calls the custom `toString` → `\"(3, 4)\"`. A template literal is a string context too — `` `${point}` `` produces the same `\"(3, 4)\"` (the default would have been `\"[object Object]\"`)." },
          { label: "Step 3: Number contexts", text: "`point * 2` needs a number, so `valueOf` runs → `Math.hypot(3, 4)` = `5`, and `5 * 2` = `10`. Unary `+point` → `5`, and `Number(point)` → `5`." },
          { label: "Step 4: The + ambiguity", text: "`\"\" + point` prefers string conversion (the left operand is a string), so it concatenates with `toString` → `\"(3, 4)\"` — the one operator whose choice of conversion is historical rather than numeric." },
          { label: "Step 5: Why both hooks", text: "Two conversion methods exist because objects live in both textual and numeric contexts. Overriding one and not the other gives half the story — the defaults are `\"[object Object]\"` and the object itself, respectively." }
        ],
        result: "`String(point)` and template literals give \"(3, 4)\"; arithmetic goes through `valueOf` (5) — so `point * 2` is 10 and `+point` is 5."
      },
      {
        title: "Symbols as keys: hiding state in plain sight",
        problem: "Use a symbol to hold a stack’s size where neither `Object.keys` nor `JSON.stringify` nor a `for/in` loop will report it, and verify the hiding with all three.",
        steps: [
          { label: "Step 1: The setup", text: "```\nconst SIZE = Symbol(\"size\");\nconst stack = {\n  [SIZE]: 0,\n  push(v) { this[SIZE]++; return this; },\n  get size() { return this[SIZE]; }\n};\nstack.push(\"a\").push(\"b\");\n```" },
          { label: "Step 2: The key was computed", text: "The literal computed `[SIZE]` at creation time — the only literal syntax that can — making an own symbol-keyed property with value 2 after the two pushes." },
          { label: "Step 3: The enumeration tests", text: "`Object.keys(stack)` → `[\"push\", \"size\"]` — the method and the accessor are ordinary string keys, so they are listed. But `SIZE` appears in neither `Object.keys` nor a `for/in` loop: symbol keys are skipped by both." },
          { label: "Step 4: JSON agrees", text: "`JSON.stringify(stack)` → `{}`. Symbol keys are invisible to the serializer, so the counter and nothing else travels — string-keyed methods are dropped anyway because they are functions." },
          { label: "Step 5: The access rule", text: "Anyone who can name the symbol can read the state: `stack[SIZE]` → `2` works fine, because a symbol is a key, not a lock. Real privacy comes from the closure techniques of Section 8.5 or the `#` fields of Chapter 9 — symbols are about collision-proof *convention*." }
        ],
        result: "The size lives at a key no string can name by accident: invisible to enumeration and serialization, visible to code holding the symbol — pseudo-private by uniqueness, not by secrecy."
      }
    ],
    keyTakeaways: [
      "A method is a function-valued property; inside `o.m()`, `this` is `o` — decided by the invocation, not the definition.",
      "Overriding `toString` customizes string conversion; overriding `valueOf` customizes numeric conversion; both defaults are nearly useless.",
      "Literal shorthand: `{ x, y }` for existing variables, `{ [expr]: v }` for computed names, `{ m() {} }` for methods.",
      "Symbol keys cannot collide, are skipped by for/in, Object.keys and JSON.stringify, and require computed-key syntax in literals.",
      "Getters and setters create accessor properties: reads and writes run functions, enabling validation and derived values.",
      "A get-only accessor is read-only — assignment throws in strict mode; the backing underscore property is convention, not privacy."
    ],
    quiz: [
      {
        q: "In `let o = { m() { return this; } };` what does `o.m()` return?",
        options: ["the global object", "the function m itself", "o", "undefined"],
        answer: 2,
        explanation: "A method invocation binds this to its receiving object — the object before the dot — which is o here."
      },
      {
        q: "Which syntax creates a property whose name is the value of the variable `key`?",
        options: ["{ key: 1 }", "{ [key]: 1 }", "{ key(): 1 }", "{ ...key }"],
        answer: 1,
        explanation: "Computed property names evaluate the bracketed expression at literal-creation time and use the result (string or symbol) as the key."
      },
      {
        q: "A property created with `get` and no `set` is best described as:",
        options: [
          "a writable data property",
          "read-only — assignment throws in strict mode",
          "non-enumerable",
          "deleted after first read"
        ],
        answer: 1,
        explanation: "Accessor properties with only a getter cannot be assigned: sloppy mode ignores the write and strict mode throws a TypeError, like any read-only property."
      },
      {
        q: "Why does `JSON.stringify(o)` ignore a property keyed by a symbol?",
        options: [
          "symbols cannot be property keys",
          "JSON serialization only covers own enumerable string-keyed properties",
          "symbols are always non-enumerable",
          "JSON.stringify converts symbols to null"
        ],
        answer: 1,
        explanation: "The JSON format has only string keys, so the serializer walks string-keyed properties only — symbol-keyed data (and functions, undefined) never appear."
      },
      {
        q: "Inside a template literal, an object is converted to a string using its:",
        options: ["valueOf method", "toJSON method", "toString method", "constructor"],
        answer: 2,
        explanation: "String contexts — template literals, String(), concatenation with a string — convert objects through toString; valueOf serves numeric contexts and toJSON exists only for JSON.stringify."
      },
      // Placement-pattern: this-binding — method versus detached call (original)
      {
        q: "What does this program print? Assume the file runs as a plain non-strict script.\n```js\nlet meter = {\n  v: 7,\n  read() { return this.v; }\n};\nlet detached = meter.read;\nconsole.log(meter.read());\nconsole.log(detached());\n```",
        options: ["`7` then `7`", "A TypeError is thrown on the second call", "`7` then `undefined`", "`undefined` then `undefined`"],
        answer: 2,
        explanation: "Step 1: The code given calls the same function once as a method and once detached, logging both results. Step 2: The governing rule is that `this` is fixed by the call form: a method call `meter.read()` sets `this` to `meter`, while a plain call `detached()` sets `this` to the global object in sloppy mode, which carries no `v` property. Step 3: Tracing call by call, the method form reads `meter.v` and yields `7`, and the detached form reads `globalThis.v`, which is absent, yielding `undefined`. Step 4: The distractors fail because the binding does not travel with the function reference, a TypeError would need strict-mode `undefined` dereferenced further, and the first call clearly resolves through `meter`. Step 5: Therefore the output is `7` followed by `undefined`."
      }
    ]
  }
]
