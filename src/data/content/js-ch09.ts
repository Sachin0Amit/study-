import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 9: Classes (Sections 9.1 – 9.5)
// Master study content.
// ============================================================================

export const jsCh9Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'js-ch9-s1',
    readingTime: 7,
    intro: 'Long before ES6 introduced the `class` keyword, JavaScript had classes — assembled from two ordinary ingredients: a function that **initializes** each new object, and a **prototype** object whose properties every instance shares. The `class` keyword of Section 9.3 is pure shorthand for this machinery, so understanding it by hand is not history: it is the mental model that makes `instanceof`, `extends` and every "method not found" question decidable. The core mechanism is **delegation** — a property read that misses an object continues along its prototype link.',
    objectives: [
      'Define a class the pre-ES6 way: a factory function plus a shared prototype object',
      'Trace a property lookup across a multi-link prototype chain to its end',
      'Explain why a failed read yields undefined instead of an error',
      'Distinguish own properties from inherited ones with Object.hasOwn',
      'Predict what assignment does when a property exists only on the prototype'
    ],
    concepts: [
      {
        term: 'A class is a factory plus a prototype',
        kind: 'definition',
        statement: 'A JavaScript **class** is a set of objects that share behavior by delegating to one common **prototype object**. The class exists because every instance points at that one object — nothing in the language marks it as special. The pre-`class` recipe: a factory function creates and initializes each instance, and the prototype object holds the methods.',
        detail: '\n```js\n// A factory function that returns a new range object.\nfunction range(from, to) {\n  const r = Object.create(range.methods);  // r delegates to range.methods\n  r.from = from;                            // own data properties\n  r.to = to;\n  return r;\n}\n\nrange.methods = {                           // the shared prototype\n  includes(x) { return this.from <= x && x <= this.to; },\n  toString() { return "(" + this.from + "..." + this.to + ")"; },\n};\n\nconst r = range(1, 3);\nr.includes(2);   // true — method found on the prototype, this = r\n```\n`Object.create(p)` returns a fresh empty object whose prototype link points at p — the whole wiring in one call.'
      },
      {
        term: 'The prototype chain',
        kind: 'law',
        statement: 'Every object carries one internal **prototype link** (`[[Prototype]]`, readable as `Object.getPrototypeOf(obj)`) to another object or to `null`. Reading `obj.x` looks at `obj` first; on a miss, the lookup **continues at the prototype**, then the prototype’s prototype, and so on — returning the first hit found.',
        detail: 'The link is read with `Object.getPrototypeOf(r)`; the historical `r.__proto__` accessor is standardized but the method forms (`Object.getPrototypeOf`, `Object.create`) are the clean interface. Section 6.1 introduced this for plain objects — a class is the same single link, used systematically: instances hold data, the prototype holds behavior.'
      },
      {
        term: 'The chain ends at null',
        kind: 'insight',
        statement: 'For ordinary objects the chain is `obj` → `Object.prototype` → `null`. `Object.prototype` supplies `toString`, `hasOwnProperty`, `valueOf` and friends to every object in the language, and **its** prototype is `null` — the sentinel that stops the walk. A read that falls off the end is therefore not an error: `r.nonesuch` evaluates to `undefined`.',
        detail: 'Walking the chain one link at a time is a **linear search** — long chains cost a little on every miss, which is why classes keep their chains short. `Object.create(null)` produces a prototype-less object with no inherited methods at all, occasionally used for bare lookup tables (though Section 11.1’s `Map` is the modern answer).'
      },
      {
        term: 'Reads walk the chain; writes never do',
        kind: 'method',
        statement: 'Assignment `r.x = 99` does **not** search the chain. If `x` is not an own property, it is created **on the object itself** — the prototype is never touched — and the new property **shadows** any same-named property further up. (The one exception: a setter along the chain intercepts the write, Section 9.3.)',
        detail: 'This asymmetry is what makes shared behavior safe to share: one range writing `r.name = "renamed"` can never clobber a `name` property for the other instances, because the write never climbs.'
      },
      {
        term: 'Own versus inherited properties',
        kind: 'method',
        statement: 'A property stored directly on the object is **own**; anything found along the chain is **inherited**. `Object.hasOwn(r, "from")` is true for the factory-built range while `Object.hasOwn(r, "includes")` is false — the method lives on `range.methods`, and `r` merely reaches it through the link.',
        detail: 'for/in (Section 5.3) enumerates own enumerable properties **and** inherited ones — which is exactly why careless additions to shared prototypes leak into every loop, the hazard Section 9.4 documents.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: one lookup, three links',
        problem: 'Given the `range` factory above, trace each expression to its verdict:\n```js\nconst r = range(1, 3);\n\nr.from;                      // ?\nr.includes(2);               // ?\nr.hasOwnProperty("from");    // ?\nr.nonesuch;                  // ?\n\nr.nonesuch = 99;\nr.nonesuch;                  // ?\nrange.methods.nonesuch;      // ?\n```',
        steps: [
          { label: 'Step 1: Own data hit at link zero', text: 'The lookup for `r.from` never leaves the instance: the factory assigned `from` and `to` directly onto r, so they are own properties — `1` returns immediately.' },
          { label: 'Step 2: Method hit at link one', text: '`r.includes` is not an own property, so the engine follows r’s `[[Prototype]]` link to `range.methods` — where `includes` lives. The function is retrieved and invoked with `this` bound to r, reading `this.from` and `this.to` back on the instance.' },
          { label: 'Step 3: Hit at link two', text: '`r.hasOwnProperty` misses on r, misses on `range.methods`, and arrives at `Object.prototype` — the shared ancestor of (nearly) every object — where `hasOwnProperty` is defined. The chain so far: `r` → `range.methods` → `Object.prototype` → `null`.' },
          { label: 'Step 4: The total miss', text: '`r.nonesuch` walks all three nodes, reaches `null`, and stops. A failed **read** is not an error: the expression evaluates to `undefined`. (Contrast a failed **call** — `r.nonesuch()` would throw a TypeError, because calling undefined does throw.)' },
          { label: 'Step 5: The write never climbs', text: '`r.nonesuch = 99` creates a new own property on r. Proof: `range.methods.nonesuch` is still `undefined` afterward, and every other range built from the same prototype is untouched. The chain is a read path, not a write path.' }
        ],
        result: '`r.from` → 1; `r.includes(2)` → true (method at link one); `r.hasOwnProperty("from")` → true (method at link two); `r.nonesuch` → undefined (fell off the chain at null); after assignment `r.nonesuch` → 99 as an own property while the prototype stays clean.'
      },
      {
        title: 'Making the prototype-class iterable',
        problem: 'Add iteration to the factory-built range so that `[...range(1, 4)]` yields `[1, 2, 3, 4]`, using what the chain already provides:\n```js\nrange.methods[Symbol.iterator] = function* () {\n  for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;\n};\n\n[...range(1, 4)];   // ?\nfor (const n of range(3, 5)) console.log(n);   // ?\n```',
        steps: [
          { label: 'Step 1: Symbols as property names', text: '`Symbol.iterator` (Section 3.5) is the protocol key the language looks up — computed property names like `[Symbol.iterator]` attach methods without any chance of collision with ordinary string-keyed properties.' },
          { label: 'Step 2: A generator as the method', text: 'The `function*` form (Section 12.3) makes the method return an iterator directly — no separate iterator class needed. Because it sits on `range.methods`, every range — including ones created before this line ran — is iterable retroactively, the same live-prototype upgrade Section 9.4 formalizes.' },
          { label: 'Step 3: Consumers are duck-typed', text: 'The spread operator and `for/of` never ask what a range **is** — they only look up `Symbol.iterator` and call it. Delegation supplies the method; the protocol machinery does the rest, which is how a hand-built class slots into the language’s built-in syntax.' }
        ],
        result: '`[...range(1, 4)]` → `[1, 2, 3, 4]`; the for/of loop logs 3, then 4, then 5 — a pre-class class fully participating in modern iteration.'
      }
    ],
    keyTakeaways: [
      'A class is a factory (or constructor) plus a shared prototype object — instances hold data, the prototype holds behavior.',
      'Property reads walk the prototype link on every miss: `obj` → prototype → prototype’s prototype → … → `null`.',
      'The chain for ordinary objects ends `Object.prototype` → `null`; `Object.prototype` supplies `toString` and friends to everything.',
      'A read that falls off the chain is `undefined`, not an error; only calling or otherwise operating on that undefined throws.',
      'Assignment never walks the chain — it creates an own property that shadows any inherited one, leaving shared prototypes untouched.',
      '`Object.hasOwn(obj, k)` separates own properties from inherited ones; for/in sees both, which is why prototype hygiene matters.'
    ],
    quiz: [
      {
        q: 'Reading `r.nonesuch` where `r` is a factory-built range and no property named nonesuch exists anywhere on its chain evaluates to:',
        options: [
          'A ReferenceError',
          'undefined — the lookup walks to the end of the chain (null) and quietly fails',
          'null — the value of the last prototype link',
          'The string "nonesuch"'
        ],
        answer: 1,
        explanation: 'Failed property reads are not errors: the walk ends at null and the expression evaluates to undefined. Only calling the result (`r.nonesuch()`) throws.'
      },
      {
        q: 'For a plain object literal `{}`, what is the full prototype chain?',
        options: [
          '`{}` → null',
          '`{}` → `Function.prototype` → null',
          '`{}` → `Object.prototype` → null',
          '`{}` → `Array.prototype` → `Object.prototype` → null'
        ],
        answer: 2,
        explanation: 'Object literals delegate to Object.prototype, whose own prototype is null — two links, and the reason every object has toString and hasOwnProperty.'
      },
      {
        q: 'A property `name` exists on an object’s prototype. Executing `obj.name = "new"` —',
        options: [
          'rewrites the property on the prototype for all instances',
          'creates an own property on obj that shadows the inherited one',
          'throws, because the property is inherited',
          'deletes the prototype property and adds it to obj'
        ],
        answer: 1,
        explanation: 'Writes never climb the chain: a same-named own property is created on the object itself, and subsequent reads stop at the shadow before reaching the prototype.'
      },
      {
        q: 'For a range built by the `range` factory, `Object.hasOwn(r, "includes")` returns:',
        options: [
          'true — the instance can call the method',
          'false — the method is inherited from range.methods, not stored on r',
          'true only after includes has been called once',
          'undefined'
        ],
        answer: 1,
        explanation: 'hasOwn tests for own properties only; includes resolves through the prototype link at call time but never lives on the instance.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.2
  {
    sectionId: 'js-ch9-s2',
    readingTime: 8,
    intro: 'A **constructor function** is the classic way to mass-produce instances: write an ordinary function, invoke it with `new`, and the language performs four well-defined steps that manufacture the object, wire its prototype link and run the initializer. Those four steps explain everything downstream — why `instanceof` works, where the `constructor` property comes from, and the one famous way a constructor can betray its caller: by returning an object of its own.',
    objectives: [
      'Write a constructor function and invoke it with new',
      'Recite and apply the four steps new performs, in order',
      'Explain what instanceof tests and how it uses the prototype chain',
      'Use isPrototypeOf for the object-side equivalent check',
      'Predict the result when a constructor explicitly returns an object or a primitive'
    ],
    concepts: [
      {
        term: 'Constructor functions and new',
        kind: 'definition',
        statement: 'A **constructor** is an ordinary function invoked with the `new` operator: it initializes a freshly manufactured object through `this`. The convention is a capitalized name. The pairing with `new` is what turns a function into a class factory.',
        detail: '\n```js\nfunction Range(from, to) {\n  this.from = from;   // initialize the fresh object\n  this.to = to;\n}\nRange.prototype = {  // methods for instances (see below)\n  includes(x) { return this.from <= x && x <= this.to; },\n  toString() { return "(" + this.from + "..." + this.to + ")"; },\n};\n\nconst r = new Range(1, 3);   // r inherits Range.prototype\n```\nThe classic bug of this era: calling `Range(1, 3)` **without** new runs the same body with `this` bound to the global object (or undefined in strict mode, Section 5.5) — silently writing globals. Classes (Section 9.3) close this hole by throwing when called without new.'
      },
      {
        term: 'The four steps of new',
        kind: 'law',
        statement: 'Evaluating `new C(args)` performs, in order: **(1)** create a brand-new empty object; **(2)** set its prototype link to `C.prototype`; **(3)** call `C` with `this` bound to the new object; **(4)** return that object — **unless** the constructor explicitly returned a non-null object, which wins instead.',
        detail: '\n```js\nnew Range(1, 3)\n// 1. const o = {};                                  create\n// 2. Object.setPrototypeOf(o, Range.prototype);      link\n// 3. const result = Range.call(o, 1, 3);             initialize (this = o)\n// 4. return (result is an object) ? result : o;     return\n```\nStep 2 is the inheritance: step 3 merely fills in data. Keep the four steps memorized — they are the definition of everything `class` (9.3) and `extends` (9.5) do.'
      },
      {
        term: 'Constructor.prototype',
        kind: 'insight',
        statement: 'Every function automatically receives a `prototype` property when it is defined — an object whose single property, `constructor`, points back to the function. With `new`, that object becomes the prototype of the instances. **Mutating** it upgrades every instance; **replacing** it wholesale severs the `constructor` back-reference.',
        detail: 'After `Range.prototype = { includes…, toString… }`, an instance can no longer find `Range` via `r.constructor` — the lookup falls through the literal’s own prototype to `Object.prototype.constructor`, which is the `Object` function. Add `constructor: Range` into the replacement literal, or extend the existing prototype with `Object.assign` (Section 9.4), to keep the back-reference honest.'
      },
      {
        term: 'instanceof',
        kind: 'definition',
        statement: '`obj instanceof C` asks exactly one question: **does the object `C.prototype` appear anywhere on obj’s prototype chain?** It never looks at the function body, the name, or how the object was made — only the link.',
        detail: '\n```js\nconst r = new Range(1, 3);\nr instanceof Range;              // true: chain is r → Range.prototype → …\nr instanceof Object;              // true: Object.prototype is also on the chain\n[] instanceof Range;               // false: Array.prototype chain never meets it\n```\nIt answers "does this object delegate to that prototype", which makes it the standard runtime class test.'
      },
      {
        term: 'isPrototypeOf',
        kind: 'method',
        statement: 'The object-side converse of instanceof: `p.isPrototypeOf(obj)` asks whether **p** appears on obj’s prototype chain. `Range.prototype.isPrototypeOf(r)` and `r instanceof Range` are the same question from two directions — and isPrototypeOf needs no constructor reference at all.',
        detail: '`Object.prototype.isPrototypeOf({})` is true for any ordinary object — the reason instanceof Object always succeeds. This form shines when you hold a prototype object but not the class that made it.'
      },
      {
        term: 'When constructors return',
        kind: 'insight',
        statement: 'A constructor’s `return` obeys the rule in step 4: returning an **object** (or function or array) hands that object to the caller instead of the constructed `this`; returning a **primitive** (number, string, boolean…) is silently ignored and `this` is delivered as usual.',
        detail: '\n```js\nfunction Ghost() { return { spooky: true }; }\nnew Ghost() instanceof Ghost;   // false! the plain object delegates to Object.prototype\n\nfunction Wand(size) { this.size = size; return 42; }\nnew Wand(9).size;                // 9 — the primitive return was ignored\n```\nThe object-return rule is not a curiosity: it is how built-in constructors hand back their exotic objects, and how `extends Array` (Section 9.5) produces real arrays.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: what new Range(1, 3) actually does',
        problem: 'Using the constructor version of Range above, verify each of the four steps with code:\n```js\nconst r = new Range(1, 3);\n\nObject.getPrototypeOf(r) === Range.prototype;   // ?\nObject.hasOwn(r, "from") && Object.hasOwn(r, "to");   // ?\nr instanceof Range;                              // ?\nRange.prototype.isPrototypeOf(r);                // ?\nr.constructor;                                   // ?\n```',
        steps: [
          { label: 'Step 1+2: Create and link', text: 'new manufactures an empty object and points its `[[Prototype]]` at `Range.prototype` — the object literal holding `includes` and `toString`. The probe `Object.getPrototypeOf(r) === Range.prototype` confirms the wiring is identity, not a copy.' },
          { label: 'Step 3: Initialize through this', text: 'Range runs with `this` bound to the new object; the two assignments create the own properties `from` = 1 and `to` = 3. The method object is never copied — every instance stays two fields plus one link.' },
          { label: 'Step 4: Return this', text: 'Range finishes without a return statement, so new delivers the initialized object. Both class tests pass: `r instanceof Range` walks the chain and meets `Range.prototype`; `Range.prototype.isPrototypeOf(r)` asks the same from the other side.' },
          { label: 'Step 5: The lost constructor', text: 'Because the class definition **replaced** `Range.prototype` with a fresh literal, the default prototype object (the one carrying the `constructor` back-reference) was discarded. `r.constructor` therefore resolves through the literal’s own prototype: it is the built-in `Object` function, not Range. Add `constructor: Range` to the literal — or better, use the class keyword (9.3), which maintains it for you.' },
          { label: 'Step 6: The upgrade property', text: 'Note what did **not** happen: no per-instance copies of methods. Swap `includes` for a fixed version on `Range.prototype` right now, and `r.includes(2)` picks it up on the next call — the lookup happens at call time, every time.' }
        ],
        result: 'All four wiring probes return true; `r.constructor` is `Object` — the one casualty of replacing the prototype wholesale. The instance itself is exactly `{ from: 1, to: 3 }` plus one prototype link.'
      },
      {
        title: 'The return-value game',
        problem: 'Predict each result before running:\n```js\nfunction Wizard(power) { this.power = power; }\nfunction Ghost() { return { spooky: true }; }\nfunction Wand(size) { this.size = size; return 42; }\n\nnew Wizard(10);            // ?\nnew Ghost();               // instanceof Ghost → ?\nnew Wand(9).size;           // ?\n```',
        steps: [
          { label: 'Step 1: Wizard — the normal case', text: 'No return statement means step 4 sees `undefined`, a primitive, and delivers `this`: `{ power: 10 }` linked to `Wizard.prototype`. This is the behavior every constructor in Section 9.1 and 9.3 relies on.' },
          { label: 'Step 2: Ghost — the object return wins', text: 'Ghost explicitly returns an object literal, so **that object** is the value of `new Ghost()` — the half-built `this` is thrown away. The literal’s prototype is `Object.prototype`, so `new Ghost() instanceof Ghost` is **false**: no link to Ghost survives the hijack.' },
          { label: 'Step 3: Wand — the primitive return is ignored', text: '`return 42` is a primitive, so step 4 ignores it entirely and hands back `this`. `new Wand(9).size` is 9, and the instance is a perfectly ordinary Wand. The rule is binary: objects override, primitives evaporate.' },
          { label: 'Step 4: Why the rule exists', text: 'Built-in constructors **must** return exotic objects — a real Array carries internal length machinery no plain `this` could fake. ES6 subclassing leans on exactly this: when `class EZArray extends Array` calls `super()`, the Array constructor returns a genuine array object, and that becomes the subclass instance (Section 9.5). The quirk you just traced is the mechanism modern inheritance is built on.' }
        ],
        result: '`new Wizard(10)` → the constructed instance; `new Ghost()` → `{ spooky: true }`, **not** instanceof Ghost; `new Wand(9).size` → 9 — object returns win, primitive returns are ignored.'
      }
    ],
    keyTakeaways: [
      'A constructor is an ordinary function plus the `new` operator; the capitalization is convention, the behavior is the four steps.',
      'new: **create** an empty object, **link** it to `C.prototype`, **call** C with this = the object, **return** it — unless C returned an object of its own.',
      '`obj instanceof C` tests only whether `C.prototype` is on obj’s prototype chain; `p.isPrototypeOf(obj)` is the same question asked from the prototype side.',
      'Replacing `C.prototype` wholesale drops the `constructor` back-reference (it then resolves to Object); mutating it in place keeps every link intact.',
      'Constructor object-returns hijack the instance (and defeat instanceof); primitive returns are silently ignored.',
      'Calling a constructor without new runs its body against the global object — the classic era bug that classes fix by throwing.'
    ],
    quiz: [
      {
        q: 'What, precisely, does `r instanceof Range` test?',
        options: [
          'Whether r was created by the Range function',
          'Whether the object `Range.prototype` appears anywhere on r’s prototype chain',
          'Whether r has a constructor property equal to Range',
          'Whether r has all the methods Range defines'
        ],
        answer: 1,
        explanation: 'instanceof never inspects provenance or shape — only the chain: it walks from r looking for the specific object Range.prototype.'
      },
      {
        q: 'Which lists the four steps of `new C()` in the correct order?',
        options: [
          'Run the constructor, create the object, set the prototype, return',
          'Create an empty object, set its prototype to C.prototype, call C with this bound to it, return the object (unless C returned an object)',
          'Set the prototype, create the object, return, run the constructor',
          'Create the object, run the constructor, set the prototype, validate the return'
        ],
        answer: 1,
        explanation: 'Create → link → initialize → return: the link exists before the body runs, which is why this-bound code can already call inherited methods.'
      },
      {
        q: '`function F() { return { x: 1 }; }` — what does `new F() instanceof F` evaluate to?',
        options: [
          'true — the object came from F',
          'false — the explicit object return wins, and it delegates to Object.prototype, not F.prototype',
          'true — instanceof checks the constructor property',
          'It throws'
        ],
        answer: 1,
        explanation: 'An explicit object return replaces the constructed this; the returned literal has no link to F.prototype, so the chain walk fails.'
      },
      {
        q: 'After `Range.prototype = { ...methods... }` (a wholesale replacement), `r.constructor` for instances resolves to:',
        options: [
          'Range — the back-reference is automatic',
          'The Object function — the replacement literal lost the constructor property, so the lookup falls through to Object.prototype.constructor',
          'undefined',
          'null'
        ],
        answer: 1,
        explanation: 'Only the auto-created default prototype carries the constructor back-reference; a replacement literal must add `constructor: Range` itself or the lookup lands on Object.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.3
  {
    sectionId: 'js-ch9-s3',
    readingTime: 11,
    intro: 'The `class` keyword is a cleaner surface over the exact machinery of Sections 9.1–9.2: a constructor function, a prototype object with non-enumerable methods, and stricter defaults. Declarations are **not hoisted**, methods live on the prototype, `static` methods live on the class itself, and modern field syntax adds per-instance **public fields**, language-enforced **private `#fields`**, getters and setters, and one-time **static blocks**. This section reads the full syntax and proves the sugar equivalence with live probes.',
    objectives: [
      'Write class declarations and expressions and explain why they are not hoisted',
      'Locate every class member: instance methods, statics, accessors, fields',
      'Prove that class syntax desugars to the constructor+prototype pattern',
      'Use getters and setters to build validated computed properties',
      'Use #private fields and static blocks for real encapsulation'
    ],
    concepts: [
      {
        term: 'class declarations and expressions',
        kind: 'definition',
        statement: 'A **class declaration** `class Range { ... }` defines a constructor plus its prototype in one block; a **class expression** `const R = class { ... }` does the same inline. Unlike function declarations, class declarations are **not hoisted**: the binding is in the temporal dead zone until the definition is evaluated — using the class one line early throws a ReferenceError.',
        detail: '\n```js\nclass Range {\n  constructor(from, to) {\n    this.from = from;\n    this.to = to;\n  }\n  includes(x) { return this.from <= x && x <= this.to; }\n  toString() { return "(" + this.from + "..." + this.to + ")"; }\n}\n```\nTwo more strictness upgrades: the class body executes in **strict mode** regardless of the file, and calling a class without `new` throws a TypeError — the Section 9.2 forgotten-new bug is now impossible.'
      },
      {
        term: 'The constructor method',
        kind: 'method',
        statement: 'The body’s `constructor(...)` method is the initialization function that `new` calls (step 3 of Section 9.2). At most one is allowed; omitting it entirely is legal and inserts a default — an empty constructor for base classes, or `constructor(...args) { super(...args); }` for derived ones (Section 9.5).',
        detail: 'The constructor is for initializing `this`, not for heavy work: by convention it makes the object valid and returns nothing.'
      },
      {
        term: 'Methods are prototype properties',
        kind: 'insight',
        statement: 'Inside a class body, a method definition is a **non-enumerable property of the class’s prototype** — the identical slot Section 9.2 wired by hand. `typeof Range` is still `"function"`: the keyword creates a constructor function object, not a new kind of entity.',
        detail: '\n```js\ntypeof Range;                                  // "function"\nObject.getOwnPropertyNames(Range.prototype);\n// ["constructor", "includes", "toString"]\n```\nThe name list is exactly what the manual pattern builds — the difference is enumerability (class methods are invisible to for/in) and the stricter defaults listed above.'
      },
      {
        term: 'static methods',
        kind: 'method',
        statement: 'A method marked `static` becomes a property **of the class itself**, not of the prototype: it is called as `Range.parse(...)` and does not exist on instances. Inside a static method, `this` is the class — making statics the natural home for factories, comparators and class-wide helpers.',
        detail: '\n```js\nclass Range {\n  /* ...instance methods as above... */\n  static parse(s) {\n    const [from, to] = s.split("..").map(Number);\n    return new Range(from, to);\n  }\n}\nRange.parse("1..3");     // factory — same class, different entry point\nnew Range(1, 3).parse;   // undefined — not on instances\n```\nBuilt-ins work this way everywhere: `Number.parseInt`, `Object.keys`, `Date.now` (Section 11).'
      },
      {
        term: 'Getters and setters in class bodies',
        kind: 'method',
        statement: 'Accessor syntax from object literals (Section 6.6) works in class bodies: `get name() { ... }` intercepts reads of `name`, `set name(v) { ... }` intercepts writes. The pair becomes a single accessor property on the prototype, inherited by all instances — computed and validated properties without storing anything.',
        detail: '\n```js\nclass Temperature {\n  constructor(celsius = 0) { this.celsius = celsius; }\n  get fahrenheit() { return this.celsius * 9 / 5 + 32; }\n  set fahrenheit(f) { this.celsius = (f - 32) * 5 / 9; }\n}\nconst t = new Temperature(0);\nt.fahrenheit;        // 32 — computed on read\n```\nSee the worked example: one stored field, one derived view, validated on write.'
      },
      {
        term: 'Public instance fields',
        kind: 'method',
        statement: 'A class body may declare **instance fields** with initializers: `count = 0;` creates a public own property on every instance, initialized **before the constructor body runs**, in declaration order. `static` fields (`static origin = ...`) attach to the class once.',
        detail: '\n```js\nclass Counter {\n  count = 0;              // public instance field — one per instance\n  static origin = "counter";   // static field — one per class\n}\n```\nFields are assignment spelled declaratively: they make per-instance state visible at the top of the class instead of buried in constructor lines.'
      },
      {
        term: 'Private fields with #',
        kind: 'definition',
        statement: 'A field named with a leading `#` — `#count = 0;` — is **private**: the name is meaningful only inside the class body that declares it. Outside, the token is not even valid syntax (a SyntaxError at parse time); from a different class, access throws a TypeError. Privacy is enforced by the language, not by convention.',
        detail: '\n```js\nclass Safe {\n  #secret = 42;\n  reveal() { return this.#secret; }   // fine inside the body\n}\nnew Safe().reveal();   // 42\nnew Safe().#secret;    // SyntaxError — the name does not exist out here\n```\nRules: `#` fields must be **declared** in the body (you cannot invent them ad hoc), every instance gets its own copy, and `static #x` / private accessors `get #x()` exist too. Compare the old convention `_secret` — a warning label, not a lock.'
      },
      {
        term: 'Static blocks',
        kind: 'insight',
        statement: 'A `static { ... }` block runs **once**, when the class is defined, after static field initializers — the place for static initialization too complex for one expression: try/catch parsing, loops, conditional setup. It may read and write the class’s private statics.',
        detail: '\n```js\nclass Config {\n  static #env;\n  static {\n    try { Config.#env = JSON.parse(globalThis.appConfig); }\n    catch { Config.#env = {}; }        // sane default on any failure\n  }\n  static get env() { return Config.#env; }\n}\n```\nOne class may have several static blocks; they run in source order interleaved with static field initializers.'
      }
    ],
    examples: [
      {
        title: 'The same class twice: proving the sugar',
        problem: 'Write Range as a class and as the manual constructor+prototype pattern, then verify they are the same shape:\n```js\nclass Range {\n  constructor(from, to) { this.from = from; this.to = to; }\n  includes(x) { return this.from <= x && x <= this.to; }\n  toString() { return "(" + this.from + "..." + this.to + ")"; }\n}\n\nfunction RangeFn(from, to) { this.from = from; this.to = to; }\nRangeFn.prototype.includes = function (x) {\n  return this.from <= x && x <= this.to;\n};\nRangeFn.prototype.toString = function () {\n  return "(" + this.from + "..." + this.to + ")";\n};\n\ntypeof Range;                                    // ?\nObject.getOwnPropertyNames(Range.prototype);    // ?\nnew Range(1, 3) instanceof Range;                // ?\n```',
        steps: [
          { label: 'Step 1: A class is a function', text: '`typeof Range` is `"function"`. The class keyword creates an ordinary constructor function object — the very thing `new` operates on — plus a prototype. There is no separate "class instance" machinery in the language.' },
          { label: 'Step 2: The methods land on the prototype', text: '`Object.getOwnPropertyNames(Range.prototype)` lists `["constructor", "includes", "toString"]` — the identical set the manual pattern builds, including the `constructor` method standing where Section 9.2’s lost back-reference used to live. Instance storage (`from`, `to`) is still created per-object by the constructor, exactly as before.' },
          { label: 'Step 3: Instances are indistinguishable', text: 'Both `new Range(1, 3)` and `new RangeFn(1, 3)` are `{ from: 1, to: 3 }` plus one prototype link; `instanceof` passes for both; both inherit methods through the same one-link lookup of Section 9.1. Any code consuming the objects behaves identically.' },
          { label: 'Step 4: The three genuine differences', text: 'Class methods are **non-enumerable** (invisible to for/in, Section 5.3); the class body runs in **strict mode** always; and the class name binding is **not hoisted** — plus calling without `new` throws. Everything else — including `constructor`, `typeof`, the prototype wiring — is the pattern of 9.2 wearing syntax.' },
          { label: 'Step 5: Why keep both readings', text: 'Older codebases, error stacks and metaprogramming (Section 14.2) all present the desugared form; reading `Range.prototype.includes` in the wild should map instantly to "a method in the class body". The equivalence is the load-bearing fact for Sections 9.4 and 9.5.' }
        ],
        result: '`typeof Range` → "function"; prototype names → `["constructor", "includes", "toString"]`; instanceof → true. The class is the constructor+prototype pattern with stricter defaults — sugar, verified.'
      },
      {
        title: 'Validated data with a getter/setter pair',
        problem: 'Store a temperature once (celsius) and expose fahrenheit as a computed, write-validated property:\n```js\nclass Temperature {\n  constructor(celsius = 0) { this.celsius = celsius; }\n  get fahrenheit() { return this.celsius * 9 / 5 + 32; }\n  set fahrenheit(f) {\n    if (f < -459.67) throw new RangeError("below absolute zero");\n    this.celsius = (f - 32) * 5 / 9;\n  }\n  static fromFahrenheit(f) { return new Temperature((f - 32) * 5 / 9); }\n}\n\nconst t = new Temperature(0);\nt.fahrenheit;         // ?\nt.fahrenheit = 212;  // ?\nt.celsius;           // ?\nTemperature.fromFahrenheit(98.6).celsius;   // ?\n```',
        steps: [
          { label: 'Step 1: The read computes', text: '`t.fahrenheit` finds no stored property — the accessor pair on the prototype intercepts the read and computes `0 * 9 / 5 + 32` = **32**. No fahrenheit value is ever stored, so it can never go stale when celsius changes.' },
          { label: 'Step 2: The write routes through the setter', text: '`t.fahrenheit = 212` does not create a property: the setter runs, converts to `(212 - 32) * 5 / 9` = 100, and stores **one** number — `t.celsius` is now 100. Assignment syntax, method semantics: the API reads like data, behaves like validation.' },
          { label: 'Step 3: Validation guards the write', text: '`t.fahrenheit = -500` throws `RangeError: below absolute zero` **before** any mutation — the object is never corrupted. Reads of the stored field remain unvalidated; the choke point is the derived write path.' },
          { label: 'Step 4: The static factory', text: '`Temperature.fromFahrenheit(98.6)` constructs via the class-level method — `this` in a static method is the class itself. The instance API and the class API stay separate: `t.fromFahrenheit` is undefined.' },
          { label: 'Step 5: One pair, all instances', text: 'The get/set pair is a single property on `Temperature.prototype`, so every instance — past and future — shares it. Nothing per-instance exists except the celsius field: minimal storage, maximal invariant.' }
        ],
        result: '32, then after the assignment 100, and `fromFahrenheit(98.6)` gives celsius ≈ 37. One stored field, one computed view with validation — the accessor pattern in five lines.'
      },
      {
        title: 'A counter with #count',
        problem: 'Build a counter whose count cannot be read or corrupted from outside, and count how many counters exist:\n```js\nclass Counter {\n  static #created = 0;\n  #count;\n  constructor(start = 0) {\n    this.#count = start;\n    Counter.#created++;\n  }\n  increment(by = 1) { this.#count += by; return this; }\n  get value() { return this.#count; }\n  static get instances() { return Counter.#created; }\n}\n\nconst c = new Counter(10);\nc.increment(5).increment();\nc.value;           // ?\nc.count;            // ?\nc.\u0023count;         // ?\nCounter.instances; // ?\n```',
        steps: [
          { label: 'Step 1: Declaration is mandatory', text: 'The body declares `#count;` with no initializer; the constructor then assigns `this.#count = start`. Unlike ordinary properties, a private field **must** be declared in the body first — `this.#x = 1` inside a class that never declared `#x` is a SyntaxError, so private state is always visible in the class source.' },
          { label: 'Step 2: Privacy is name-scope, not per-object', text: 'Inside any method, constructor or getter of Counter, `this.#count` reads and writes normally. Outside the class body the token does not parse at all — the third probe fails before the program even runs. A second class with its own `#count` is a **different** private name: no collisions, no cross-access.' },
          { label: 'Step 3: Every instance gets its own copy', text: '`#count` is an instance field — each Counter has its own slot, initialized to 10 here. The methods `increment` and the `value` getter are shared on the prototype (Section 9.1), but the state they guard is strictly per-instance.' },
          { label: 'Step 4: The private static counts the class', text: '`static #created` belongs to the class itself, and only class code can touch it. The constructor increments it on every construction; the static getter `Counter.instances` exposes the census. After one construction the answer is **1** — try a second `new Counter()` and it reads 2.' },
          { label: 'Step 5: Chaining via returned this', text: '`increment` returns `this`, so `c.increment(5).increment()` is one expression: 10 + 5 = 15, then +1 = **16**. `c.value` is 16; `c.count` is undefined — no public twin of the private field was ever created, so there is nothing to corrupt.' }
        ],
        result: '`c.value` → 16; `c.count` → undefined (no public property exists); `c.#count` from outside → SyntaxError (will not even parse); `Counter.instances` → 1. Encapsulation enforced by the grammar itself.'
      }
    ],
    keyTakeaways: [
      'A class is a function: `typeof Range` is "function", and methods become non-enumerable properties of `Range.prototype` — the 9.1–9.2 pattern with stricter defaults.',
      'Class declarations are not hoisted (TDZ), their bodies are strict mode, and calling without new throws a TypeError.',
      '`static` members live on the class, instance members on the prototype, fields on the instances — three addresses, one syntax.',
      'Get/set pairs in class bodies give computed properties with write-side validation, shared through the prototype.',
      'Public instance fields (`x = 0`) initialize before the constructor body; omitting the constructor inserts a default.',
      '`#private` fields are declared in the body, checked at parse time, invisible outside — real encapsulation, unlike the `_name` convention.',
      '`static { ... }` blocks run once at class definition and may initialize private statics — the escape hatch for complex static setup.'
    ],
    quiz: [
      {
        q: 'Where do methods defined in a class body live?',
        options: [
          'On each instance, copied at construction',
          'On the class’s prototype object, as non-enumerable properties',
          'On the constructor function itself',
          'In a hidden per-class method table'
        ],
        answer: 1,
        explanation: 'Class methods are prototype properties — exactly the manual wiring of Section 9.2, plus non-enumerable so for/in never sees them.'
      },
      {
        q: 'What happens if code references a class by name one line above its declaration?',
        options: [
          'It works — class declarations hoist like function declarations',
          'ReferenceError — class bindings live in the temporal dead zone until the definition is evaluated',
          'undefined — the class exists but is empty',
          'TypeError — classes cannot be referenced before construction'
        ],
        answer: 1,
        explanation: 'Classes behave like let/const: not hoisted for use. The definition must execute before any reference resolves.'
      },
      {
        q: 'Outside the class body, what does the expression `new Counter().#count` do?',
        options: [
          'Returns undefined — the field is private',
          'Throws a TypeError at runtime',
          'Fails with a SyntaxError — the parser rejects the private name outside its declaring class',
          'Returns the field’s value because # is only a convention'
        ],
        answer: 2,
        explanation: 'Private names are lexically scoped to the class body: code outside it cannot even mention them, so the program fails to parse — stronger than any runtime check.'
      },
      {
        q: 'For `class T { get fahrenheit() {...} set fahrenheit(f) {...} }`, what does `t.fahrenheit = 212` do?',
        options: [
          'Creates an own property fahrenheit = 212 on the instance',
          'Runs the setter function with 212 — assignment syntax, method semantics',
          'Throws, because accessors are read-only',
          'Updates the class prototype'
        ],
        answer: 1,
        explanation: 'The setter intercepts the assignment: writes never climb the prototype chain (Section 9.1) because the accessor pair catches them first.'
      },
      {
        q: 'A public instance field `count = 0;` in a class body is initialized:',
        options: [
          'Lazily, on first access',
          'Once, on the prototype, for all instances',
          'On each new instance, before the constructor body runs',
          'When the class is defined'
        ],
        answer: 2,
        explanation: 'Fields are per-instance initializers that run at construction time before the constructor body — every instance gets its own copy.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.4
  {
    sectionId: 'js-ch9-s4',
    readingTime: 6,
    intro: 'A prototype is a live object, so a class is **retroactively upgradeable**: add a method to the prototype today and every instance — including ones created yesterday — can call it tomorrow. For classes you own, `Object.assign` makes that a one-line batch operation. For the language’s built-in prototypes, the same move is a famous hazard: it poisons `for/in` loops everywhere and collides with the entire future of the standard library — this section shows exactly why, and the subclassing alternative that replaced it.',
    objectives: [
      'Add methods to an existing class with Object.assign on its prototype',
      'Explain why every instance, past and future, picks up the addition',
      'Demonstrate the for/in poisoning that built-in patching causes',
      'Use Object.defineProperty to make a patch non-enumerable — and still say no',
      'Choose subclassing (Section 9.5) as the safe way to extend built-ins'
    ],
    concepts: [
      {
        term: 'Prototype patching for your own classes',
        kind: 'method',
        statement: '`Object.assign(SomeClass.prototype, { method1() {...}, method2() {...} })` copies any number of methods onto the existing prototype **in place** — the `constructor` back-reference and all prior methods survive, and because lookups happen at call time (Section 9.1), every existing instance immediately understands the new names.',
        detail: '\n```js\nObject.assign(Range.prototype, {\n  equals(r) { return this.from === r.from && this.to === r.to; },\n  overlaps(r) { return this.from <= r.to && r.from <= this.to; },\n});\nnew Range(1, 3).equals(new Range(1, 3));   // true\n```\nThis is the civilized descendant of Section 9.2’s wholesale replacement — which severed `constructor` — and the same tool mixins use in Section 9.5.'
      },
      {
        term: 'Why built-in patching is forbidden',
        kind: 'insight',
        statement: 'Adding properties to `Array.prototype`, `Object.prototype`, `String.prototype` and friends is known as **monkey patching** and is rejected by every style guide for three compounding reasons: the additions are **global** (every script on the page sees them), they **collide** with other scripts and with future standards, and — because assignment creates **enumerable** properties — they surface inside every `for/in` loop in the program.',
        detail: 'The standards process itself has been bitten: a widely-used library that pre-defined `Array.prototype.flatten` forced the committee to rename the language feature to `flat`. Your clever helper is tomorrow’s compatibility report.'
      },
      {
        term: 'The defineProperty escape hatch',
        kind: 'method',
        statement: '`Object.defineProperty(Array.prototype, "last", { value, writable: true, configurable: true, enumerable: false })` installs a method that `for/in` cannot see — non-enumerability is exactly how the built-in methods avoid polluting loops. It fixes the loop symptom, not the collision disease.',
        detail: '\n```js\nObject.defineProperty(Array.prototype, "last", {\n  value: function () { return this[this.length - 1]; },\n  writable: true, configurable: true,\n  enumerable: false,   // invisible to for/in — like every built-in method\n});\n[10, 20, 30].last();   // 30, and loops stay clean\n```\nUnderstand it as the explanation for why built-ins never poisoned loops — not as a license.'
      },
      {
        term: 'Subclass instead',
        kind: 'insight',
        statement: 'The modern route to "an Array with extra methods" is `class EZArray extends Array { ... }` — your names live in **your** namespace, instances are still real arrays, and nobody else’s code changes behavior. Section 9.5 builds the full machinery; the rule of thumb lands here: **extend what you own, never edit what you share**.',
        detail: 'If you do not control the class, wrap it or subclass it; if you need a utility function, a plain function (`last(a)`) is always safe. Prototype patching of built-ins is the one JavaScript habit with no defenders left.'
      },
      {
        term: 'Polyfills: the one disciplined exception',
        kind: 'method',
        statement: 'A **polyfill** backports a standard method missing on old engines — and it is the only built-in patch the book tolerates, under three rules: feature-check first (`if (!Array.prototype.flat)`), match the specification exactly, and install with `Object.defineProperty` as non-enumerable. Anything else is monkey patching by another name.',
        detail: '\n```js\nif (!Array.prototype.flat) {\n  Object.defineProperty(Array.prototype, "flat", {\n    value: function (depth = 1) { /* spec algorithm */ },\n    writable: true, configurable: true, enumerable: false,\n  });\n}\n```\nThe guard means modern engines never see the patch (no collision with the native `flat`); the descriptor keeps `for/in` clean. Polyfill libraries (core-js) exist precisely so application code never hand-rolls this.'
      },
      {
        term: 'Object.prototype is the worst target',
        kind: 'insight',
        statement: 'Patching `Object.prototype` poisons **every** object — arrays, functions, dates, null-prototype dictionaries excepted — because every ordinary chain ends there (Section 9.1). One enumerable addition appears in every `for/in` in the program, breaks every `in` check for that name, and collides with every future standard key at once.',
        detail: 'The `flatten` → `flat` rename was an `Array.prototype` collision affecting arrays only; an `Object.prototype` collision affects the language itself. Dictionary objects (`{}` as maps) are the first casualty: `"myKey" in dict` can no longer distinguish data from inheritance — the reason Section 14.2 prefers `Object.create(null)` and Chapter 11 prefers `Map`.'
      }
    ],
    examples: [
      {
        title: 'Upgrade every instance at once',
        problem: 'Two ranges exist already. Add an `equals` method to Range without touching the class definition, and verify nothing else broke:\n```js\nconst r1 = new Range(1, 3);\nconst r2 = new Range(2, 5);\n\nObject.assign(Range.prototype, {\n  equals(r) { return this.from === r.from && this.to === r.to; },\n});\n\nr1.equals(new Range(1, 3));   // ?\nr1.equals(r2);                 // ?\nr1.constructor;               // ?\nr1.includes(2);               // ?\n```',
        steps: [
          { label: 'Step 1: The instances exist first', text: 'r1 and r2 were created **before** any `equals` method existed — at that moment, `r1.equals` would have walked the chain and returned undefined (a total miss, Section 9.1).' },
          { label: 'Step 2: Object.assign mutates in place', text: 'The call copies `equals` onto the **existing** prototype object — no replacement, no new object. The prototype’s identity is unchanged, which is why the `constructor` back-reference and every earlier method survive untouched.' },
          { label: 'Step 3: Old instances learn instantly', text: 'Lookup is per-call: `r1.equals(new Range(1, 3))` now walks r1 → `Range.prototype`, finds the new method, and returns **true**; `r1.equals(r2)` compares 1 vs 2 and returns false. No instance was rebuilt, migrated or notified — the chain simply has one more property.' },
          { label: 'Step 4: Nothing else changed', text: '`r1.constructor` still resolves to Range, and `r1.includes(2)` still works — both probes confirm the in-place edit. Contrast Section 9.2’s wholesale replacement, which would have orphaned `constructor` and forced every instance onto a new (identical-looking) prototype.' },
          { label: 'Step 5: When this is legitimate', text: 'Patching **your own** class is a real technique: split a large class across files, upgrade a library class you maintain for all its users, or attach cross-cutting behavior as mixins (next section). The line this section draws is ownership — built-ins are shared by every program in the page.' }
        ],
        result: 'true, false, Range (constructor intact), true — one `Object.assign` upgraded every existing and future instance, with zero side effects on the prototype’s existing residents.'
      },
      {
        title: 'The for/in poison',
        problem: 'A teammate "improves" arrays for everyone. Predict the loop before running it:\n```js\nArray.prototype.last = function () { return this[this.length - 1]; };\n\nconst a = [10, 20, 30];\na.last();                        // ?\nfor (const i in a) console.log(i);   // what logs?\n```',
        steps: [
          { label: 'Step 1: The patch seems to work', text: '`a.last()` returns 30 — the method is found by the normal prototype walk, and nothing about the call site looks wrong. This is what makes the hazard seductive: the first hundred uses are fine.' },
          { label: 'Step 2: The loop betrays it', text: 'The for/in logs `"0"`, `"1"`, `"2"` — and then `"last"`. for/in enumerates every enumerable property on the **entire prototype chain** (Section 5.3), and assignment-created properties are enumerable by default. The loop that iterated three elements now iterates four, the fourth being the string key "last" (its value: the function).' },
          { label: 'Step 3: Why built-ins never do this', text: 'Every method the language itself installs — `map`, `push`, `toString` — is defined with `enumerable: false`, which for/in skips. That is the entire reason ordinary loops over arrays and objects have always been clean: the built-ins are politely invisible.' },
          { label: 'Step 4: The half-fix', text: 'Reinstalling the method via `Object.defineProperty` with `enumerable: false` removes the loop symptom. But the collision disease remains: any other script that defines `last` differently now conflicts, page-wide, and a future standard could claim the name (the `flatten` → `flat` episode).' },
          { label: 'Step 5: The real fixes', text: 'A plain function `const last = (a) => a[a.length - 1]` needs no shared object. Or subclass — `class EZArray extends Array { get last() { return this[this.length - 1]; } }` — your method in your namespace, on instances that are still real arrays. Both routes keep the shared prototypes pristine.' }
        ],
        result: '`a.last()` → 30, but the loop logs 0, 1, 2 and **"last"** — an enumerable inherited property leaking into every for/in on the page. Non-enumerable defineProperty hides it; a function or subclass avoids it entirely.'
      }
    ],
    keyTakeaways: [
      'Prototypes are live: `Object.assign(C.prototype, {...})` upgrades every instance — existing ones included — because method lookup happens at call time.',
      'Object.assign mutates the prototype in place, preserving `constructor` and prior methods, unlike wholesale replacement.',
      'Never patch built-in prototypes: the change is global, collides with other scripts and future standards, and assignment-created properties are enumerable.',
      'for/in walks the whole prototype chain, so enumerable additions to `Array.prototype` (or worse, `Object.prototype`) appear in every loop in the program.',
      '`Object.defineProperty` with `enumerable: false` is how built-ins stay invisible to for/in — an explanation, not a license.',
      'The safe extensions of shared types are plain functions or subclasses (`class EZArray extends Array`), never edits to the shared prototype.'
    ],
    quiz: [
      {
        q: 'Why do instances created **before** `Object.assign(SomeClass.prototype, { go() {} })` still get the `go` method?',
        options: [
          'They are rebuilt when the prototype changes',
          'Method lookup walks the prototype chain at call time, and the mutated prototype is on that chain',
          'go is copied to each instance lazily',
          'They do not — only future instances see it'
        ],
        answer: 1,
        explanation: 'Instances hold only a link, not a copy: every property read re-walks the chain, so a prototype mutation is visible to old and new instances alike.'
      },
      {
        q: 'After `Array.prototype.last = function () {...}`, `for (const i in [1, 2])` logs:',
        options: [
          '0 and 1 only',
          '0, 1 — and "last", because assignment-created properties are enumerable and for/in walks the chain',
          'Nothing — arrays are not enumerable',
          '1 and 2, the values'
        ],
        answer: 1,
        explanation: 'for/in visits enumerable properties on the whole prototype chain; the patched-in method is enumerable by default, so its key shows up after the array indexes.'
      },
      {
        q: 'What does `enumerable: false` in an `Object.defineProperty` patch accomplish?',
        options: [
          'Makes the method read-only',
          'Hides the property from for/in loops — the same trick every built-in method uses',
          'Deletes the property from the prototype',
          'Makes the method available only to arrays'
        ],
        answer: 1,
        explanation: 'Non-enumerability keeps loops clean, which is how built-ins avoid poisoning for/in — though collisions with other scripts remain possible.'
      },
      {
        q: 'The recommended way to give arrays a custom `last` behavior today is:',
        options: [
          'Assign it to Array.prototype with a distinctive name',
          'Define it on Object.prototype so everything benefits',
          'Subclass (`class MyArray extends Array`) or write a plain function — never edit the shared prototype',
          'Use Object.defineProperty with enumerable: true'
        ],
        answer: 2,
        explanation: 'Extend what you own: a subclass keeps your names in your namespace while instances stay real arrays; a plain function is even simpler when no state is needed.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.5
  {
    sectionId: 'js-ch9-s5',
    readingTime: 11,
    intro: '**Inheritance** with `extends` chains prototypes on two levels at once — instance prototypes behind instance prototypes, and the classes themselves behind one another for statics. The derived constructor must call `super()` before touching `this`, because in a derived class it is the **base** constructor that performs Section 9.2’s create-and-link steps. Overridden methods can borrow their parent versions through `super.method()`, built-ins like `Array` and `Error` subclass cleanly, and for everything else there are two lighter tools: abstract base classes and mixins.',
    objectives: [
      'Draw the two prototype links that extends establishes',
      'Apply the super()-before-this rule and its ReferenceError',
      'Override a method and delegate back with super.method()',
      'Subclass built-ins: Array, Error, Map',
      'Use new.target guards for abstract classes and Object.assign mixins for composition'
    ],
    concepts: [
      {
        term: 'extends and the two-level chain',
        kind: 'definition',
        statement: '`class Sub extends Super` wires **two** links: `Sub.prototype` → `Super.prototype` (so instances inherit through both — a Sub instance is also a Super instance for instanceof), and `Sub` → `Super` itself (so **statics are inherited**: `Sub.parse` works if Super defines one).',
        detail: '\n```js\nclass Range { /* 9.3 class */ }\nclass Span extends Range {}\n\nconst s = new Span(1, 3);\ns instanceof Span;    // true\ns instanceof Range;   // true — the chain passes through Range.prototype\nSpan.parse;           // inherited static, callable on the subclass\n```\nThe chain behind s is `s` → `Span.prototype` → `Range.prototype` → `Object.prototype` → null: Section 9.1’s linear search, one link longer.'
      },
      {
        term: 'super() before this',
        kind: 'law',
        statement: 'In a **derived** class constructor, `this` does not exist until `super()` has been called — the base constructor performs the create-and-link steps (Section 9.2) and returns the object that becomes `this`. Reading or writing `this` first throws a ReferenceError; omitting the constructor entirely inserts `constructor(...args) { super(...args); }` automatically.',
        detail: '\n```js\nclass TypedMap extends Map {\n  #valueType;\n  constructor(valueType, entries) {\n    validate(entries);        // fine: needs no this\n    // this.#valueType = ... // ReferenceError — super has not run\n    super(entries);          // object is created HERE\n    this.#valueType = valueType;   // now this exists\n  }\n}\n```\nThe rule exists because base constructors may return exotic objects (Section 9.2’s return rule) — the derived class cannot assume what `this` will be until the base says so.'
      },
      {
        term: 'Overriding and super.method()',
        kind: 'method',
        statement: 'A derived class can redefine an inherited method — its version, being closer on the chain, **shadows** the parent’s (Section 9.1’s rule again). Inside the override, `super.method(...)` invokes the parent’s implementation, so a subclass can **extend** behavior instead of copying it.',
        detail: '\n```js\nclass LoggedRange extends Range {\n  includes(x) {\n    console.log("checking", x);\n    return super.includes(x);   // borrow, do not reimplement\n  }\n}\n```\n`super` here means "start the lookup one level above the prototype this method is defined on" — not "the parent of this instance", a distinction that matters when methods move around (Section 14.6’s proxies can even intercept it).'
      },
      {
        term: 'extends built-ins',
        kind: 'method',
        statement: 'Subclassing `Array`, `Error`, `Map`, `Set` and the rest is reliable in ES6: the built-in constructor returns its exotic object through `super()`, the instance carries the full built-in method set, `instanceof` works across the chain, and statics like `Array.of` produce **subclass** instances.',
        detail: '\n```js\nclass EZArray extends Array {\n  get first() { return this[0]; }\n  get last() { return this[this.length - 1]; }\n}\nEZArray.of(10, 20, 30).last;      // 30 — a REAL array with extras\nEZArray.of(1, 2) instanceof Array; // true\n\nclass NotFound extends Error {}   // catch (e) { if (e instanceof NotFound) }\n```\nWhat `map` and `filter` construct for subclasses is steered by the `Symbol.species` machinery (Section 14.3) — by default, the subclass itself.'
      },
      {
        term: 'Abstract classes with new.target',
        kind: 'method',
        statement: 'JavaScript has no abstract keyword, but the idiom is three lines: a base class whose constructor throws when **directly** instantiated. `new.target` is the constructor `new` was actually invoked with — the base class itself for a direct `new Abstract()`, but the **subclass** when reached through `super()` — so the guard trips only on direct construction.',
        detail: '\n```js\nclass AbstractSet {\n  constructor() {\n    if (new.target === AbstractSet) {\n      throw new TypeError("AbstractSet is abstract — subclass it");\n    }\n  }\n  has(x) { throw new Error("subclass must implement has()"); }\n}\nclass SingletonSet extends AbstractSet {\n  constructor(member) { super(); this.member = member; }\n  has(x) { return x === this.member; }\n}\n```\nThe unimplemented `has` doubling as a stub turns forgetting into a loud failure instead of silent inheritance of nonsense.'
      },
      {
        term: 'Composition and mixins',
        kind: 'insight',
        statement: 'Inheritance answers "is-a" and is limited to one parent; **composition** answers "has-this-behavior" and is unlimited. A **mixin** is a plain object of methods stamped onto any number of classes with `Object.assign(Class.prototype, mixin)` — Section 9.4’s tool, used to share behavior sideways instead of down.',
        detail: '\n```js\nconst Serialization = {\n  serialize() { return JSON.stringify(this); },\n};\nclass Note {}\nObject.assign(Note.prototype, Serialization);\n```\nOne caveat: `Object.assign` copies **values**, invoking any getters on the source (Section 6.6) — accessor-preserving mixins need `Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))`. Mixins can also be written as factories that return subclasses when true composition-with-state is needed.'
      }
    ],
    examples: [
      {
        title: 'TypedMap: validate, then super, then this',
        problem: 'A Map that enforces a value type at construction and on every `set`. Explain the order of every line in the constructor:\n```js\nclass TypedMap extends Map {\n  #valueType;\n  constructor(valueType, entries) {\n    if (entries) {\n      for (const [k, v] of entries) {\n        if (typeof v !== valueType) {\n          throw new TypeError(k + " maps to " + typeof v);\n        }\n      }\n    }\n    super(entries);\n    this.#valueType = valueType;\n  }\n  set(key, value) {\n    if (typeof value !== this.#valueType) {\n      throw new TypeError("wrong value type");\n    }\n    return super.set(key, value);\n  }\n}\n\nconst m = new TypedMap("number", [["a", 1], ["b", 2]]);\nm.set("c", 3);\nm.set("d", "x");                        // ?\nnew TypedMap("number", [["a", "x"]]);    // ?\n```',
        steps: [
          { label: 'Step 1: Enter the derived constructor — this does not exist yet', text: 'Unlike a base class, `new TypedMap(...)` creates nothing up front: the derived constructor starts with `this` uninitialized, because the object will be whatever `Map`’s constructor returns (Section 9.2’s object-return rule). The validation loop runs **before** super because it needs no `this` — it only touches its parameters.' },
          { label: 'Step 2: super(entries) builds the real object', text: 'Calling `super` invokes `Map` with the entries; Map performs the create-and-link steps, installs its internal hash storage, and returns a genuine Map object. That returned object becomes `this` inside TypedMap’s constructor — one shared object, half built by each class.' },
          { label: 'Step 3: Private state after super', text: 'Only now can `this.#valueType = valueType` run — a line earlier it would throw `ReferenceError: Must call super constructor in derived class before accessing this`. The `#valueType` declaration in the class body is what makes the field assignable at all (Section 9.3’s declaration rule).' },
          { label: 'Step 4: Override and delegate', text: 'The `set` override adds the type check, then calls `super.set(key, value)` — the parent’s storage logic, unchanged — and **returns its result**, preserving Map’s chainable API. Extend, then delegate: the shape of almost every good override.' },
          { label: 'Step 5: The two failure paths', text: 'Construction with a bad entry throws at the validation loop — nothing was ever stored. The later `m.set("d", "x")` throws from the override — and note that `super.set` was never reached, so the bad pair is not half-inserted: the check happens before the delegation, so the parent’s invariants (and its return value) are never compromised.' }
        ],
        result: '`m.set("c", 3)` succeeds; `m.set("d", "x")` throws TypeError (checked before super.set runs); the bad-entry construction throws during validation. Order inside a derived constructor is a rule, not a style choice: no-super code first, super, then this.'
      },
      {
        title: 'EZArray: extends Array in action',
        problem: 'Verify that an array subclass is a real array with extras, and that built-in machinery respects the subclass:\n```js\nclass EZArray extends Array {\n  get first() { return this[0]; }\n  get last() { return this[this.length - 1]; }\n}\n\nconst a = EZArray.of(10, 20, 30);\na instanceof Array;      // ?\na.last;                 // ?\nconst doubled = a.map(x => x * 2);\ndoubled.last;           // ?\n```',
        steps: [
          { label: 'Step 1: The inherited static builds a subclass instance', text: '`EZArray.of(10, 20, 30)` — `of` is inherited through the Sub → Super class-side link — constructs via the subclass, so `a` is a genuine EZArray: real array storage, real length, plus `first` and `last` one link above `Array.prototype`.' },
          { label: 'Step 2: instanceof crosses the whole chain', text: '`a instanceof Array` is **true**: the walk `a` → `EZArray.prototype` → `Array.prototype` meets `Array.prototype`, so every array method from Section 7.4 — push, slice, reduce — is inherited. The extras sit closer to the instance and shadow nothing, so both layers cooperate.' },
          { label: 'Step 3: Derived methods construct the subclass', text: '`a.map(x => x * 2)` returns an **EZArray**, so `doubled.last` is **60** — one expression chaining a built-in transform with a custom accessor. By default, built-in producers use the subclass (the `Symbol.species` hook of Section 14.3 exists precisely to tune or disable this).' },
          { label: 'Step 4: Why ES6 made this possible', text: 'Pre-ES6, faking array subclasses broke because hand-rolled constructors returned plain objects that lacked the array’s internal machinery. ES6’s fix is exactly Section 9.2’s return rule plus super: `super()` hands back the real exotic object, and the subclass decorates it. The same recipe subclasses `Error` — `class NotFound extends Error {}` — giving instanceof-able custom errors (Section 11.4).' }
        ],
        result: 'true, 30, and 60: the subclass instance passes instanceof Array, reads its own accessors, and even `map` returns an EZArray — built-ins and user classes in one chain.'
      },
      {
        title: 'A mixin by Object.assign',
        problem: 'Give a plain domain class two orthogonal capabilities — events and timestamps — without any inheritance from them:\n```js\nconst Evented = {\n  on(type, handler) {\n    (this._handlers ||= {})[type] ||= [];\n    this._handlers[type].push(handler);\n    return this;\n  },\n  emit(type, event) {\n    for (const h of this._handlers?.[type] ?? []) h(event);\n    return this;\n  },\n};\nconst Timestamped = {\n  touch() { this.updatedAt = Date.now(); return this; },\n};\n\nclass Note { constructor(title) { this.title = title; } }\nObject.assign(Note.prototype, Evented, Timestamped);\n\nconst n = new Note("groceries");\nn.on("change", () => console.log("changed")).touch();\nn.emit("change", {});                       // ?\nObject.hasOwn(n, "on");                     // ?\nObject.hasOwn(Note.prototype, "on");      // ?\n```',
        steps: [
          { label: 'Step 1: Mixins are plain objects of methods', text: 'No class, no extends: each mixin is a behavior package — event registration and emission in one, timestamping in another. They express **has-a-capability**, not is-a-kind-of, and any class can adopt them without spending its single inheritance slot.' },
          { label: 'Step 2: Stamping with Object.assign', text: 'The one-line stamp copies both method sets onto `Note.prototype` (Section 9.4’s tool — in place, constructor preserved). Method resolution is the ordinary chain walk of Section 9.1: `n.on` resolves through the class prototype, which is why `Object.hasOwn(n, "on")` is false while `Object.hasOwn(Note.prototype, "on")` is true.' },
          { label: 'Step 3: Compose any number of them', text: 'Note now behaves as Evented **and** Timestamped — the chained `n.on(...).touch()` is one expression across both mixins. Inheritance chains like this need a diamond of classes; mixins are stamped sideways, one Object.assign per concern, and a class can adopt ten without hierarchy gymnastics.' },
          { label: 'Step 4: The getter caveat', text: 'Object.assign copies **values**: had Evented used `get handlers()` accessors, assign would have invoked them once and copied the resulting data (Section 6.6). Accessor-preserving mixins use `Object.defineProperties(Note.prototype, Object.getOwnPropertyDescriptors(Evented))` — or keep mixins to plain methods, the common discipline.' },
          { label: 'Step 5: Choosing inheritance vs composition', text: 'Use extends when a real is-a substitution applies (a TypedMap **is a** Map) and the chain stays short; use mixins for orthogonal capabilities shared across unrelated classes; use plain functions when neither state nor polymorphism is needed. Deep hierarchies are the code smell both patterns exist to prevent.' }
        ],
        result: 'The emit fires the listener ("changed" logs); `Object.hasOwn(n, "on")` → false; `Object.hasOwn(Note.prototype, "on")` → true. Two capabilities, one line each, zero inheritance spent.'
      }
    ],
    keyTakeaways: [
      '`extends` chains both levels: `Sub.prototype` → `Super.prototype` for instances, and `Sub` → `Super` for inherited statics — instanceof holds across the whole chain.',
      'A derived constructor must call `super()` before touching `this`; the base constructor is what actually creates the object (and may return an exotic one, like a real Array).',
      'Omitting a derived constructor inserts `constructor(...args) { super(...args); }`; overriding a method shadows it, and `super.method()` borrows the parent version.',
      'ES6 subclassing of built-ins works: `EZArray.of(...)` and `map` produce subclass instances, and `class NotFound extends Error` gives instanceof-able errors.',
      'Abstract-class idiom: throw in the base constructor when `new.target === BaseClass` — the guard sees the subclass (not the base) when reached through super().',
      'Mixins share behavior sideways: plain method objects stamped with `Object.assign(Class.prototype, mixin)` — remember assign copies values, so accessor mixins need defineProperties.',
      'Prefer composition when capabilities are orthogonal; reserve extends for true is-a relationships, and keep chains short.'
    ],
    quiz: [
      {
        q: 'In a derived-class constructor, what happens if you read `this` before calling `super()`?',
        options: [
          'It is undefined but harmless',
          'ReferenceError — the base constructor has not yet created the object that this will refer to',
          'It works, but methods are missing',
          'The constructor is called again'
        ],
        answer: 1,
        explanation: 'Derived classes do not create their own this: super() runs the base constructor, whose returned object becomes this. Touching it early is a hard error.'
      },
      {
        q: 'What two links does `class Sub extends Super` establish?',
        options: [
          '`Sub` → `Super` only; prototypes are unrelated',
          '`Sub.prototype` → `Super.prototype`, and `Sub` → `Super` (so statics are inherited)',
          'Instances of Sub copy both classes’ methods',
          '`Super.prototype` → `Sub.prototype`, reversed'
        ],
        answer: 1,
        explanation: 'Instance inheritance runs through the prototype chain; the classes themselves are also chained, which is why Sub.of or Sub.parse resolves to the parent’s statics.'
      },
      {
        q: 'An omitted constructor in a class that `extends` another is equivalent to:',
        options: [
          'constructor() {}',
          'constructor(...args) { super(...args); }',
          'constructor(...args) { this.args = args; }',
          'Nothing — the class cannot be instantiated'
        ],
        answer: 1,
        explanation: 'The default derived constructor forwards all arguments to super — the forwarding form is what "no constructor" means for a subclass.'
      },
      {
        q: 'Inside an override, `super.method()`:',
        options: [
          'Calls the method recursively',
          'Invokes the parent class’s implementation of that method, so the override can extend rather than replace it',
          'Creates a new instance of the parent',
          'Is only valid inside the constructor'
        ],
        answer: 1,
        explanation: 'super starts the property lookup one level above the prototype the method is defined on — borrow the inherited behavior, then add yours around it.'
      },
      {
        q: 'What does `Object.assign(Note.prototype, Evented)` do if Evented contains `get handlers()`?',
        options: [
          'Copies the getter onto the prototype',
          'Invokes the getter once and copies its resulting **value** — accessor-preserving mixins need Object.defineProperties with getOwnPropertyDescriptors',
          'Throws a TypeError',
          'Ignores accessor properties silently'
        ],
        answer: 1,
        explanation: 'Object.assign reads property values from the source, which runs getters; the destination receives plain data. defineProperties is the descriptor-level alternative.'
      },
      // Placement-pattern: derived constructors — super before this (original)
      {
        q: "What happens when this program runs?\n```js\nclass A {\n  constructor() { this.kind = 'a'; }\n}\nclass B extends A {\n  constructor() {\n    this.extra = 1;\n    super();\n  }\n}\nnew B();\n```",
        options: ["A `B` instance with `kind` `'a'` and `extra` `1`", "A `B` instance with only `extra`", "A ReferenceError, because `super()` must run before `this` is touched", "A TypeError, because `A` is not a constructor"],
        answer: 2,
        explanation: "Step 1: The code given builds a derived constructor that writes `this.extra` before calling `super()`. Step 2: The governing rule is that in a derived class the `this` binding stays uninitialized until `super()` runs, since the base constructor performs the create-and-link steps, and touching `this` earlier throws a ReferenceError. Step 3: Tracing construction, `new B` enters the derived constructor with no usable `this`, the assignment to `this.extra` executes first, and the engine throws before `super()` is ever reached. Step 4: The distractors fail because no instance survives to carry properties, nothing about `A` being callable is at fault, and reordering the two lines would be required for success. Step 5: Therefore construction throws a ReferenceError."
      }
    ]
  }
]
