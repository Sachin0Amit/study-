import type { SectionContent } from '../library'

// ============================================================================
// Flanagan, JavaScript: The Definitive Guide, 7th Edition
// Chapter 14: Metaprogramming (Sections 14.1 – 14.6)
// Master study content.
// ============================================================================

export const jsCh14Content: SectionContent[] = [
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: "js-ch14-s1",
    readingTime: 10,
    intro: "Every property you create in JavaScript carries hidden configuration: three attributes that decide whether its value can be changed, whether loops can see it, and whether it can be deleted or reconfigured. This section reads that configuration with `Object.getOwnPropertyDescriptor()`, rewrites it with `Object.defineProperty()`, and then climbs a ladder of object-level locks — `preventExtensions()`, `seal()` and `freeze()` — that can forbid new properties, deletions and writes outright. Everything here is the API the rest of the chapter builds on: proxies intercept exactly these operations.",
    objectives: [
      "Read and interpret the property descriptor returned by `Object.getOwnPropertyDescriptor()`",
      "Create read-only, hidden and locked properties with `Object.defineProperty()`, and explain the silent-versus-strict failure modes",
      "Distinguish extensibility, sealedness and frozenness, and test each with the matching `Object.is*` predicate",
      "Explain why `Object.freeze()` is shallow, and write a `deepFreeze()` that reaches nested objects and arrays"
    ],
    concepts: [
      {
        term: "Property attributes",
        kind: "definition",
        statement: "Every property has a **name**, a **value** and three **attributes**: **writable** (may the value be changed?), **enumerable** (does the property appear in `for/in` loops and `Object.keys()`?) and **configurable** (may the property be deleted or its attributes changed again?). Properties created by assignment or object literals get `true` for all three attributes.",
        detail: "Accessor properties replace the `value`/`writable` pair with a **get** and/or **set** function, but keep `enumerable` and `configurable`. Arrays are a good illustration of non-default attributes: the `length` property is writable but neither enumerable nor configurable, which is why `Object.keys([1])` returns `['0']` and not `['0', 'length']`."
      },
      {
        term: "The property descriptor",
        kind: "notation",
        statement: "A **property descriptor** is the object that describes attributes: a complete data-property descriptor is `{ value, writable, enumerable, configurable }`, and a complete accessor descriptor is `{ get, set, enumerable, configurable }`.",
        detail: "```js\nObject.getOwnPropertyDescriptor({ x: 1 }, 'x')\n// { value: 1, writable: true, enumerable: true, configurable: true }\nObject.getOwnPropertyDescriptor({}, 'x')   // undefined — only OWN properties\nObject.getOwnPropertyDescriptor([], 'length')\n// { value: 0, writable: true, enumerable: false, configurable: false }\n```\n`Object.getOwnPropertyDescriptors(o)` (plural) returns one descriptor per own property. The descriptor is a snapshot — mutating it changes nothing about the property."
      },
      {
        term: "Object.defineProperty()",
        kind: "method",
        statement: "`Object.defineProperty(o, name, descriptor)` creates a new property or edits the attributes of an existing one, and returns the (modified) object `o`. For a **new** property, any attribute you leave out of the descriptor defaults to `false`; when **redefining** an existing property, omitted attributes keep their current values.",
        detail: "Redefinition is only allowed when the existing property is **configurable** — with a single exception: a configurable property may always be flipped from `writable: true` to `writable: false`, never the reverse.\n```js\nconst settings = { retries: 3 };\nObject.defineProperty(settings, 'retries', { writable: false });\nsettings.retries = 5;   // silently ignored in sloppy mode\nsettings.retries;        // 3 — and in strict mode the assignment throws TypeError\n```"
      },
      {
        term: "Extensibility",
        kind: "definition",
        statement: "An object is **extensible** when new properties may be added to it. `Object.preventExtensions(o)` makes `o` permanently non-extensible — there is no undo — and `Object.isExtensible(o)` tests it. A non-extensible object can still modify and delete the properties it already has.",
        detail: "The silent/strict split applies here too: assigning a new property to a non-extensible object does nothing in sloppy mode and throws `TypeError` in strict mode (modules and class bodies are always strict)."
      },
      {
        term: "Sealing",
        kind: "method",
        statement: "`Object.seal(o)` is `Object.preventExtensions(o)` plus `Object.defineProperty(o, name, { configurable: false })` for every own property. A sealed object can neither gain nor lose properties, but the values of its existing data properties remain writable. Test with `Object.isSealed(o)`.",
        detail: "Sealing is the right tool for objects whose **set** of properties must stay fixed (a record shape, a set of API endpoints) while their values keep updating."
      },
      {
        term: "Freezing",
        kind: "method",
        statement: "`Object.freeze(o)` is `Object.seal(o)` plus `writable: false` on every own data property: nothing about the object’s own data properties can change again. Accessor properties keep working — their getters can still compute fresh values. Test with `Object.isFrozen(o)`. A frozen object is always sealed, and a sealed object is always non-extensible.",
        detail: "Freeze is a cheap way to ship constant configuration tables: `const API = Object.freeze({ base: 'https://api.example.com', retries: 3 });`. Because arrays are objects, freezing one makes `push` and `pop` throw `TypeError` in strict mode."
      },
      {
        term: "Shallow freeze",
        kind: "insight",
        statement: "`Object.freeze()` is **shallow**: it locks the object’s own properties, but any property value that is itself an object — a nested record, an array — remains fully mutable, and `Object.isFrozen()` reports `false` for it until you freeze it explicitly.",
        detail: "Deep immutability must be written by hand: walk the own properties, freeze every value that `typeof v === 'object'`, and recurse. Cycles are safe if you skip already-frozen values, because `Object.isFrozen()` becomes your visited-set."
      }
    ],
    examples: [
      {
        title: "Reading a descriptor and locking a property",
        problem: "The object `const config = { host: 'api.example.com', retries: 3 };` is used everywhere in a large codebase. You have been asked to turn `retries` into a fixed constant that cannot be overwritten, enumerated or deleted, while leaving `host` an ordinary property.",
        steps: [
          { label: "Step 1: Inspect before changing", text: "`Object.getOwnPropertyDescriptor(config, 'retries')` returns `{ value: 3, writable: true, enumerable: true, configurable: true }` — an ordinary, fully permissive data property." },
          { label: "Step 2: Redefine with defineProperty", text: "```js\nObject.defineProperty(config, 'retries', {\n  value: 3, writable: false, enumerable: false, configurable: false\n});\n``` The call returns `config` itself, so it can be chained or wrapped around the object literal at creation time." },
          { label: "Step 3: Observe the write failure", text: "`config.retries = 5;` leaves `config.retries` equal to `3`. In a module or class body (always strict mode) the same line throws `TypeError: Cannot assign to read only property 'retries'` — sloppy mode is silent, strict mode is loud." },
          { label: "Step 4: Confirm invisibility", text: "`Object.keys(config)` now returns `['host']`: the non-enumerable `retries` is skipped by `Object.keys()`, `for/in` and `JSON.stringify()`, yet direct reads like `config.retries` still return `3`." },
          { label: "Step 5: Confirm permanence", text: "`delete config.retries` is a no-op that evaluates to `false` (strict mode throws), and because `configurable` is `false`, not even `Object.defineProperty()` can re-open the property — the attribute set is now final." }
        ],
        result: "`retries` is a constant: readable everywhere, invisible to loops and serializers, immune to deletion and redefinition — while `host` remains a normal mutable property on the same object."
      },
      {
        title: "Climbing the ladder: preventExtensions → seal → freeze",
        problem: "Demonstrate on a single object exactly which operations each level of locking forbids, and verify each level with its matching `Object.is*` predicate.",
        steps: [
          { label: "Step 1: Start permissive", text: "`const o = { a: 1 };` — `Object.isExtensible(o)` is `true`, `Object.isSealed(o)` is `false`, `Object.isFrozen(o)` is `false`." },
          { label: "Step 2: preventExtensions", text: "After `Object.preventExtensions(o)`: `o.b = 2` fails (no new properties), but `o.a = 10` works and `delete o.a` still works — existing properties remain fully live." },
          { label: "Step 3: seal", text: "Re-add `a` and call `Object.seal(o)`: now `delete o.a` fails too, because every own property became non-configurable, while `o.a = 20` continues to work — values are still writable." },
          { label: "Step 4: freeze", text: "`Object.freeze(o)` is the final rung: `o.a = 30` fails as well, because every own data property is now non-writable." },
          { label: "Step 5: Read the predicates", text: "At the end, `Object.isExtensible(o) === false`, `Object.isSealed(o) === true` and `Object.isFrozen(o) === true` — each predicate accepts everything at or above its own level." }
        ],
        result: "Each rung forbids strictly more: `preventExtensions` blocks **addition**, `seal` blocks addition **and deletion**, `freeze` blocks addition, deletion **and mutation** of own data properties."
      },
      {
        title: "The depth of freeze — and a deepFreeze()",
        problem: "`const config = { api: { host: 'api.example.com', retries: 3 }, tags: ['prod', 'eu'] };` was frozen with `Object.freeze(config)`, yet a colleague reports that the API host changed at runtime. Explain why, then fix it.",
        steps: [
          { label: "Step 1: Freeze and check", text: "`Object.isFrozen(config)` returns `true` — but `Object.isFrozen(config.api)` and `Object.isFrozen(config.tags)` both return `false`. Freeze never descends into property values." },
          { label: "Step 2: Reproduce the bug", text: "`config.api.host = 'evil.example.net'` succeeds and so does `config.tags.push('staging')` — both mutate **nested** objects that the top-level freeze never touched." },
          { label: "Step 3: Write deepFreeze", text: "```js\nfunction deepFreeze(o) {\n  Object.freeze(o);\n  for (const key of Object.getOwnPropertyNames(o)) {\n    const v = o[key];\n    if (v && typeof v === 'object' && !Object.isFrozen(v)) {\n      deepFreeze(v);   // recurse into nested objects and arrays\n    }\n  }\n  return o;\n}\n```" },
          { label: "Step 4: Apply it", text: "`deepFreeze(config)` freezes `config`, then `config.api` and `config.tags` — the `!Object.isFrozen(v)` test doubles as a cycle guard, since a frozen object is skipped on revisit." },
          { label: "Step 5: Verify", text: "After the deep freeze, `config.api.host = 'evil.example.net'` throws `TypeError` in strict mode, and `config.tags.push('staging')` throws because frozen arrays reject new indices (`TypeError: Cannot add property 2, object is not extensible`)." }
        ],
        result: "`Object.freeze()` is shallow by design — it cannot guess which nested objects you want immutable, and recursion costs time on every call. True immutability for a configuration tree is the four-line `deepFreeze()` above, applied once at startup."
      }
    ],
    keyTakeaways: [
      "Three attributes — `writable`, `enumerable`, `configurable` — govern change, visibility and deletion; assignment- and literal-created properties get all three as `true`.",
      "For **new** properties, attributes omitted from an `Object.defineProperty()` descriptor default to `false`; when **redefining** an existing property, omitted attributes keep their current values.",
      "`getOwnPropertyDescriptor()` reads one descriptor; `defineProperty()` writes one — together they are the complete metaprogramming surface for individual properties.",
      "The locking ladder: `preventExtensions` < `seal` < `freeze`, tested by `isExtensible` / `isSealed` / `isFrozen`; each frozen object is also sealed and non-extensible.",
      "Violations are silent in sloppy mode and throw `TypeError` in strict mode — and modules, classes and ES2022 class fields are always strict.",
      "`Object.freeze()` is shallow: nested objects and arrays stay mutable until a `deepFreeze()` recursion reaches them; frozen arrays throw on `push`."
    ],
    quiz: [
      {
        q: "What does `Object.getOwnPropertyDescriptor({ id: 42 }, 'id')` return?",
        options: [
          "`{ value: 42, writable: true, enumerable: true, configurable: true }`",
          "`{ value: 42, writable: false, enumerable: false, configurable: false }`",
          "`{ get: undefined, set: undefined, enumerable: true }`",
          "`undefined`, because descriptors are only available on frozen objects"
        ],
        answer: 0,
        explanation: "Properties created by object literals get `true` for all three attributes, and the descriptor of a data property carries value/writable/enumerable/configurable."
      },
      {
        q: "On a fresh empty object, `Object.defineProperty(o, 'x', { value: 1 })` has just run. Which statement is TRUE?",
        options: [
          "`o.x` is writable but not enumerable",
          "`o.x` is non-writable, non-enumerable and non-configurable",
          "`o.x` is enumerable but cannot be deleted",
          "`o.x` cannot be read with the dot operator"
        ],
        answer: 1,
        explanation: "When defineProperty creates a **new** property, any attribute omitted from the descriptor defaults to `false` — only explicit `true` values count."
      },
      {
        q: "An object is sealed but NOT frozen. Which operation still succeeds?",
        options: [
          "Adding a new property to it",
          "Deleting one of its existing properties",
          "Assigning a new value to an existing data property",
          "Changing a property’s attributes back to configurable"
        ],
        answer: 2,
        explanation: "`seal()` makes every own property non-configurable (no adds, no deletes, no reconfiguration) but leaves them writable, so value assignment still works."
      },
      {
        q: "`const cfg = { api: { host: 'x' } }; Object.freeze(cfg);` — which operation still SUCCEEDS afterwards?",
        options: [
          "`cfg.timeout = 30`",
          "`delete cfg.api`",
          "`cfg.api.host = 'y'`",
          "`Object.defineProperty(cfg, 'api', { enumerable: false })`"
        ],
        answer: 2,
        explanation: "Freeze is shallow: it locks `cfg`’s own properties, but the nested object `cfg.api` was never frozen, so writes to its properties still go through."
      },
      {
        q: "`Object.isFrozen(o)` returns `true` when:",
        options: [
          "the object was merely passed to `Object.preventExtensions()`",
          "the object is non-extensible, all own properties are non-configurable, and all own data properties are non-writable",
          "all own properties are non-enumerable",
          "the object contains no accessor properties"
        ],
        answer: 1,
        explanation: "Frozen = non-extensible + everything non-configurable + all own data properties non-writable; enumerability and accessor properties are irrelevant to the predicate."
      }
    ]
  },

  // ---------------------------------------------------------------- 14.2
  {
    sectionId: "js-ch14-s2",
    readingTime: 8,
    intro: "Property lookup in JavaScript is a walk up a chain of objects: every object records its **prototype**, and a missing property name is looked for there next. This section makes that usually-invisible link explicit — reading it with `Object.getPrototypeOf()`, rewiring it with `Object.setPrototypeOf()` and `Object.create()` — and then uses the two links to build class inheritance by hand, exactly the way the `class` keyword of Chapter 9 does it under the hood.",
    objectives: [
      "Trace a property read and a property write through a multi-level prototype chain",
      "Use `Object.getPrototypeOf()`, `Object.setPrototypeOf()` and `Object.create()` to inspect and change an object’s prototype",
      "Explain why `Object.create(null)` yields a prototype-less dictionary object",
      "Wire a constructor-function subclass manually: the prototype link, the constructor reset, and static method inheritance"
    ],
    concepts: [
      {
        term: "The prototype attribute",
        kind: "definition",
        statement: "Every object carries an internal **prototype** attribute pointing at another object (or `null`). Reading `o.x` finds an **own** property of `o` or, failing that, walks `o`’s prototype, that object’s prototype, and so on — the **prototype chain** — until the name is found or the walk reaches `null` and yields `undefined`. **Writing** `o.x = v` (with no setter involved) instead creates an own property of `o`, shadowing any same-named property further up the chain.",
        detail: "Delegation is per-lookup and never mutates the prototype: `delete o.x` removes only the own property, and the next read simply falls through to the inherited one again."
      },
      {
        term: "Reading and setting the link",
        kind: "method",
        statement: "`Object.getPrototypeOf(o)` returns the prototype object; `Object.setPrototypeOf(o, p)` re-points it and returns `o`; `Object.create(p)` returns a brand-new object whose prototype is `p`. The `__proto__` accessor property is the deprecated, legacy spelling of the same operations.",
        detail: "```js\nconst p = { greet() { return 'hi'; } };\nconst o = Object.create(p);\nObject.getPrototypeOf(o) === p;    // true\no.greet();                        // 'hi' — inherited\nObject.setPrototypeOf(o, null);\no.greet;                          // undefined — link severed\n```\nChanging a prototype after an object is hot is one of the classic V8 de-optimizations, so prefer `Object.create(p)` at construction time over `setPrototypeOf` later."
      },
      {
        term: "Object.create(null)",
        kind: "insight",
        statement: "`Object.create(null)` produces an object with **no prototype at all** — no `toString`, no `hasOwnProperty`, nothing inherited. It is the clean base for dictionary objects keyed by arbitrary strings, because inherited names like `'constructor'` or `'toString'` cannot collide with your data.",
        detail: "A plain `{}` used as a map answers `'constructor' in dict` with `true` — an inherited property, not your data. The null-prototype object answers `false`, which is exactly what a dictionary should say. (Chapter 11’s `Map` solves the same problem more completely.)"
      },
      {
        term: "Manual subclassing",
        kind: "method",
        statement: "Without the `class` keyword, a subclass `Sub` of `Sup` is wired by hand in two links: set `Sub.prototype = Object.create(Sup.prototype)` so instances inherit the parent’s methods, and reset `Sub.prototype.constructor = Sub`; optionally also `Object.setPrototypeOf(Sub, Sup)` so the subclass inherits the parent’s **static** methods.",
        detail: "That is precisely what `class Sub extends Sup {}` computes: the chain `instance` → `Sub.prototype` → `Sup.prototype` → `Object.prototype` for methods, plus the constructor-to-constructor link `Sub` → `Sup` for statics — see Chapter 9, Section 9.5."
      },
      {
        term: "instanceof reads the chain",
        kind: "insight",
        statement: "`x instanceof C` walks the prototype chain of `x` looking for `C.prototype` (Section 4.5, and §14.3 for how to override it). A hand-wired subclass therefore satisfies `instanceof` for both the subclass and every ancestor class automatically.",
        detail: "`const tm = new TypedMap(...)` with `TypedMap.prototype` chained to `Map.prototype` makes both `tm instanceof TypedMap` and `tm instanceof Map` return `true` — no registration, no declarations, just the link."
      },
      {
        term: "Setters intercept assignment",
        kind: "insight",
        statement: "The “assignment creates an own property” rule has one exception: if the prototype chain contains an **accessor property** with only a `set` function for that name, the assignment calls the setter instead of creating an own property on the receiver.",
        detail: "This is how exotic objects behave like they have magic properties: the assignment is delegated, the receiver stays untouched, and the setter decides what actually happens."
      }
    ],
    examples: [
      {
        title: "Tracing lookups up a three-object chain",
        problem: "Given `const q = { kind: 'quad' }; const p = Object.create(q); const o = Object.create(p); o.kind = 'own';` — trace what reads and writes on `o` do, and what happens when the own property is later deleted.",
        steps: [
          { label: "Step 1: Read an own property first", text: "`o.kind` returns `'own'` — the own property shadows `q.kind` without altering it; `q.kind` is still `'quad'`." },
          { label: "Step 2: Read an inherited property", text: "`p.kind` returns `'quad'` — `p` has no own `kind`, so the lookup climbs the link to `q`. The full chain above `o` is `p` → `q` → `Object.prototype` → `null` (object literals inherit from `Object.prototype`)." },
          { label: "Step 3: Watch a lookup miss", text: "`o.nope` returns `undefined` — the walk visits `o`, `p`, `q` and `Object.prototype`, finds nothing, and stops at `null`." },
          { label: "Step 4: Write on the middle object", text: "`p.kind = 'parent'` creates an **own** property on `p`; `o.kind` still returns `'own'` (its own shadow wins), but a fresh `Object.create(p).kind` would now return `'parent'`." },
          { label: "Step 5: Delete and re-expose", text: "`delete o.kind` removes the shadow; the next `o.kind` read falls through to `p.kind` and returns `'parent'`." }
        ],
        result: "Reads walk the chain upward with first-match-wins; writes and deletes always act on the receiver itself. Inheritance in JavaScript is delegation for **reads**, isolation for **writes**."
      },
      {
        title: "A manual subclass of Map, no class keyword",
        problem: "Build `TypedMap` — like `Map`, but `set()` rejects keys and values of the wrong type — using constructor functions and explicit prototype wiring, such that `tm instanceof Map` still returns `true` and all inherited `Map` behavior keeps working.",
        steps: [
          { label: "Step 1: The constructor stores types and a real Map", text: "```js\nfunction TypedMap(entries, keyType, valueType) {\n  this.keyType = keyType;\n  this.valueType = valueType;\n  this.map = new Map(entries);\n}\n```" },
          { label: "Step 2: Wire the instance chain", text: "```js\nTypedMap.prototype = Object.create(Map.prototype);\nTypedMap.prototype.constructor = TypedMap;\n``` The first line makes instances delegate to `Map.prototype` for anything not overridden; the second restores the `constructor` back-reference that the first line overwrote." },
          { label: "Step 3: Override set with type checks", text: "```js\nTypedMap.prototype.set = function (key, value) {\n  if (typeof key !== this.keyType) {\n    throw new TypeError(String(key) + ' is not of type ' + this.keyType);\n  }\n  if (typeof value !== this.valueType) {\n    throw new TypeError(String(value) + ' is not of type ' + this.valueType);\n  }\n  return this.map.set(key, value);\n};\n```" },
          { label: "Step 4: Use it", text: "```js\nconst tm = new TypedMap([['one', 1]], 'string', 'number');\ntm.set('two', 2);   // ok — inner map now has 2 entries\ntm.set(2, 'two');   // TypeError: 2 is not of type string\n```" },
          { label: "Step 5: Verify both chains", text: "`tm instanceof TypedMap` → `true` and `tm instanceof Map` → `true`, because `Map.prototype` sits in `tm`’s prototype chain. Methods you did not override (`get`, `has`, `forEach`) come straight from `Map.prototype`; static methods like `Map.groupBy` would only be inherited after also calling `Object.setPrototypeOf(TypedMap, Map)`." }
        ],
        result: "Two `Object.create`/`setPrototypeOf` links reproduce what `extends` does automatically: instances delegate through `TypedMap.prototype` to `Map.prototype`, so every `Map` method keeps working and `instanceof` reports both classes."
      }
    ],
    keyTakeaways: [
      "Property **reads** walk the prototype chain (own properties first, then upward); property **writes** and `delete` act on the receiver alone, shadowing rather than mutating the prototype.",
      "`Object.getPrototypeOf()` reads the link, `Object.setPrototypeOf()` re-points it (with a performance cost if done late), and `Object.create(p)` builds the link at construction time.",
      "`Object.create(null)` gives a prototype-less dictionary: no inherited `toString` or `constructor` can collide with your keys.",
      "Manual subclassing = `Sub.prototype = Object.create(Sup.prototype)` + `Sub.prototype.constructor = Sub`, plus `Object.setPrototypeOf(Sub, Sup)` for statics — exactly what `class Sub extends Sup` computes.",
      "`instanceof` consults the prototype chain, so hand-wired subclasses satisfy it for every ancestor class for free."
    ],
    quiz: [
      {
        q: "If `const o = Object.create(p)`, then `Object.getPrototypeOf(o)` is:",
        options: ["`p`", "`Object.prototype`", "`null`", "`o` itself, because objects are their own prototypes"],
        answer: 0,
        explanation: "`Object.create(p)` sets the new object’s prototype attribute to `p`, and `Object.getPrototypeOf()` reads exactly that attribute."
      },
      {
        q: "`const proto = { n: 1 }; const o = Object.create(proto); o.n = 5;` — after these lines, what are `o.n` and `proto.n`?",
        options: [
          "`o.n` is `5` and `proto.n` is `1`",
          "`o.n` is `5` and `proto.n` is `5`",
          "`o.n` is `1` and `proto.n` is `1` — writes are delegated downward",
          "The assignment `o.n = 5` throws, because `n` belongs to the prototype"
        ],
        answer: 0,
        explanation: "Assignment creates an own property on the receiver, shadowing the inherited one; the prototype object is never touched by an ordinary write."
      },
      {
        q: "Why would a programmer choose `Object.create(null)` for a lookup table?",
        options: [
          "It is faster than `{}` at runtime in all engines",
          "It removes all inherited properties, so keys like `'toString'` cannot collide with inherited names",
          "It makes the object immutable",
          "It automatically converts numeric keys to integers"
        ],
        answer: 1,
        explanation: "A null prototype severs the link to `Object.prototype`, so `'constructor' in dict` is `false` unless your data put it there — the clean dictionary semantics (with `Map` being the fuller solution)."
      },
      {
        q: "Which pair of lines wires up inheritance from `Sup` to a constructor function `Sub` for **instance** methods?",
        options: [
          "`Sub.prototype = Sup.prototype; Sub.__proto__ = Sup;`",
          "`Sub.prototype = Object.create(Sup.prototype); Sub.prototype.constructor = Sub;`",
          "`Object.setPrototypeOf(Sup.prototype, Sub.prototype);`",
          "`Sub.prototype = new Sup(); delete Sub.prototype.constructor;`"
        ],
        answer: 1,
        explanation: "`Object.create(Sup.prototype)` chains instances through `Sub.prototype` to `Sup.prototype` **without** running `Sup`’s constructor; resetting `constructor` keeps the back-reference truthful."
      },
      {
        q: "In the manual `TypedMap` example, why is `tm instanceof Map` true?",
        options: [
          "Because `TypedMap` calls `new Map(...)` internally",
          "Because `instanceof` checks the constructor’s `name` property",
          "Because `Map.prototype` is in `tm`’s prototype chain after the wiring",
          "Because `TypedMap` registered itself with `Map` as a subclass"
        ],
        answer: 2,
        explanation: "`instanceof` walks the prototype chain of the left operand looking for the right operand’s `.prototype`; the `Object.create(Map.prototype)` link puts `Map.prototype` on that walk."
      }
    ]
  },

  // ---------------------------------------------------------------- 14.3
  {
    sectionId: "js-ch14-s3",
    readingTime: 9,
    intro: "JavaScript exposes its own extension points as **well-known symbols** — a fixed set of built-in symbol values, static properties of the `Symbol` class, that core operators consult before using their default behavior. Assign one of them as a computed property name and you can redefine what `instanceof` tests, what `Object.prototype.toString` prints, whether `concat` spreads an object, and even how your objects convert to primitives under the plus and multiplication operators.",
    objectives: [
      "Explain what well-known symbols are and why they must be symbols rather than strings",
      "Redefine `instanceof` for a type by implementing `Symbol.hasInstance`",
      "Customize `Object.prototype.toString` output with `Symbol.toStringTag`",
      "Control spreading in `concat()` with `Symbol.isConcatSpreadable`",
      "Take full control of object-to-primitive conversion with `Symbol.toPrimitive` and its three hints"
    ],
    concepts: [
      {
        term: "Well-known symbols",
        kind: "definition",
        statement: "A **well-known symbol** is one of the static properties of the `Symbol` class — `Symbol.hasInstance`, `Symbol.toStringTag`, `Symbol.toPrimitive` and about a dozen more — that the JavaScript runtime itself consults. Because they are symbols, user code can never accidentally shadow them with a string-keyed property, and because they are shared built-ins, every library sees the same values.",
        detail: "They are unrelated to the global symbol registry of `Symbol.for('name')`/`Symbol.keyFor()`: well-known symbols are not registered, they are simply properties of the `Symbol` object."
      },
      {
        term: "Symbol.hasInstance",
        kind: "method",
        statement: "The `instanceof` operator, on seeing `x instanceof C`, first looks for a method named `Symbol.hasInstance` **on `C`** and calls it with `x`; only when that method is absent does it fall back to the default walk of `x`’s prototype chain for `C.prototype`. The method receives the left operand as-is, so it can be a primitive.",
        detail: "```js\nconst Even = {\n  [Symbol.hasInstance](n) { return n % 2 === 0; }\n};\n2 instanceof Even;   // true\n3 instanceof Even;   // false\n``` Any object — not just constructors — can now serve as the right-hand side of `instanceof`."
      },
      {
        term: "Symbol.toStringTag",
        kind: "definition",
        statement: "`Object.prototype.toString` consults the `Symbol.toStringTag` property (a string, or a getter returning one) to build its result, replacing the generic `'[object Object]'` with `'[object YourTag]'`. The built-ins set it themselves: `Math[Symbol.toStringTag]` is `'Math'` and `JSON[Symbol.toStringTag]` is `'JSON'`.",
        detail: "```js\nclass Circle {\n  get [Symbol.toStringTag]() { return 'Circle'; }\n}\nObject.prototype.toString.call(new Circle());   // '[object Circle]'\nObject.prototype.toString.call(Math);          // '[object Math]'\n```\n`toStringTag` affects only `Object.prototype.toString` — `String(circle)` and `JSON.stringify(circle)` are untouched."
      },
      {
        term: "Symbol.isConcatSpreadable",
        kind: "method",
        statement: "`Array.prototype.concat` spreads true arrays into the result but appends array-**like** objects as single elements — unless the object’s `Symbol.isConcatSpreadable` property is `true`, which forces spreading; setting it `false` on a true array forces it to be appended as one nested element.",
        detail: "```js\nconst arraylike = { length: 2, 0: 'a', 1: 'b' };\n['x'].concat(arraylike);              // ['x', {length: 2, 0: 'a', 1: 'b'}]\narraylike[Symbol.isConcatSpreadable] = true;\n['x'].concat(arraylike);              // ['x', 'a', 'b']\nconst nested = [1, 2];\nnested[Symbol.isConcatSpreadable] = false;\n[0].concat(nested);                    // [0, [1, 2]]\n```"
      },
      {
        term: "Symbol.toPrimitive",
        kind: "definition",
        statement: "When an object must convert to a primitive value, the runtime calls its `Symbol.toPrimitive` method with a **hint** — `'number'`, `'string'` or `'default'` — and uses whatever primitive comes back. It takes precedence over the older `valueOf()`/`toString()` protocol of Section 3.7, and returning an object from it throws a `TypeError`.",
        detail: "Which operators give which hint: `+v`, `v * 2` and `Number(v)` pass `'number'`; template literals and `String(v)` pass `'string'`; the ambiguous `+` between two operands and relational comparisons pass `'default'`, letting your method choose a strategy."
      },
      {
        term: "The wider symbol family",
        kind: "insight",
        statement: "`Symbol.iterator` powers `for/of` and spread (Chapter 12); `Symbol.asyncIterator` powers `for/await/of` (Chapter 13); `Symbol.species` controls which constructor built-ins like `Array` and `Promise` use when they spawn new instances; and `Symbol.match`, `Symbol.replace`, `Symbol.search` and `Symbol.split` let objects plug themselves into `String.prototype`’s regex methods.",
        detail: "The common pattern: a built-in method checks for the symbol method on its operand first, and only falls back to its default algorithm when the symbol is absent — metaprogramming as an orderly protocol."
      }
    ],
    examples: [
      {
        title: "instanceof that answers a predicate",
        problem: "You want `x instanceof Even` to be a readable test for even integers — without any class, constructor or prototype being involved.",
        steps: [
          { label: "Step 1: Define the object with the computed symbol method", text: "```js\nconst Even = {\n  [Symbol.hasInstance](n) { return n % 2 === 0; }\n};\n``` The square brackets make the property name the well-known symbol itself, not the string `'hasInstance'`." },
          { label: "Step 2: Evaluate the operator", text: "`2 instanceof Even` → the engine finds `Symbol.hasInstance` on `Even`, calls it with `2`, and returns the boolean `true`." },
          { label: "Step 3: Check the negative case", text: "`3 instanceof Even` → `false`, and `2.5 instanceof Even` → `false` (since `2.5 % 2` is `0.5`). The left operand is passed through raw — no boxing — so primitives work directly." },
          { label: "Step 4: Note what was bypassed", text: "No prototype-chain walk ever happened: `Even` has no `prototype` property at all. The default `instanceof` algorithm only runs when the `Symbol.hasInstance` method is missing." }
        ],
        result: "One computed-method definition turned a plain object into an `instanceof` target — the cleanest way to express predicate-style type tests like `x instanceof NonEmptyString`."
      },
      {
        title: "A readable tag for Object.prototype.toString",
        problem: "Debug output full of `'[object Object]'` is useless. Give instances of a `Transaction` class a label that `Object.prototype.toString` reports as `'[object Transaction]'`.",
        steps: [
          { label: "Step 1: Confirm the default", text: "```js\nclass Transaction { }\nObject.prototype.toString.call(new Transaction());  // '[object Object]'\n```" },
          { label: "Step 2: Add the tag", text: "```js\nclass Transaction {\n  get amount() { return 0; }                    // (class body, elided)\n  get [Symbol.toStringTag]() { return 'Transaction'; }\n}\n```" },
          { label: "Step 3: Test it", text: "`Object.prototype.toString.call(new Transaction())` now returns `'[object Transaction]'` — on instances and on anything else carrying that tag." },
          { label: "Step 4: Note the boundary", text: "`String(new Transaction())` still uses the ordinary `toString()` method, and `JSON.stringify` ignores the tag entirely — `toStringTag` customizes exactly one debugging entry point." }
        ],
        result: "`'[object Transaction]'` in logs and console dumps, with zero changes to the class’s public API."
      },
      {
        title: "Controlling + and * with Symbol.toPrimitive",
        problem: "For a `Vector` class, you want arithmetic like `v * 2` and unary `+v` to use the vector’s magnitude, while template literals show the coordinates — and the old `valueOf` fallbacks should never be consulted.",
        steps: [
          { label: "Step 1: Define the class with the conversion method", text: "```js\nclass Vector {\n  constructor(x, y) { this.x = x; this.y = y; }\n  get magnitude() { return Math.hypot(this.x, this.y); }\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'string') return '<' + this.x + ',' + this.y + '>';\n    return this.magnitude;              // 'number' and 'default'\n  }\n}\nconst v = new Vector(3, 4);\n```" },
          { label: "Step 2: Number contexts", text: "`+v` (unary plus) → `5`; `v * 2` → `10`; `Number(v)` → `5` — all pass the `'number'` hint, and the method returns the magnitude `Math.hypot(3, 4) = 5`." },
          { label: "Step 3: The ambiguous default hint", text: "`v + 0` → `5` and `v < 6` → `true`: mixed-operator contexts pass `'default'`, and the method again answers with the magnitude." },
          { label: "Step 4: String contexts", text: "Interpolating `v` into a template literal, and `String(v)` — both pass the `'string'` hint and return `'<3,4>'`, formatting the coordinates instead." },
          { label: "Step 5: Note the failure mode", text: "A `Symbol.toPrimitive` that returned another object (say `this`) would throw `TypeError: Cannot convert object to primitive value` — the runtime requires a primitive answer." }
        ],
        result: "One method now decides every conversion: `5` for arithmetic, `'<3,4>'` for display — old-style `valueOf`/`toString` pairs never run because `Symbol.toPrimitive` outranks them."
      }
    ],
    keyTakeaways: [
      "Well-known symbols are the runtime’s extension points: symbol-keyed methods that core operators consult before their default algorithms.",
      "`Symbol.hasInstance` on the right-hand operand redefines `instanceof`, and it receives the left operand raw — primitives included.",
      "`Symbol.toStringTag` changes only `Object.prototype.toString`’s label, not `String()` or `JSON.stringify`.",
      "`Symbol.isConcatSpreadable` flips `concat`’s spreading decision for array-likes (`true`) and for real arrays (`false`).",
      "`Symbol.toPrimitive` replaces the `valueOf`/`toString` dance, receives the hint `'number'`, `'string'` or `'default'`, and must return a primitive or throw.",
      "Other members of the family: `Symbol.iterator`, `Symbol.asyncIterator`, `Symbol.species` and the four string-method symbols."
    ],
    quiz: [
      {
        q: "Why are well-known symbols implemented as **symbols** rather than special string property names?",
        options: [
          "Symbols sort before strings in `Object.keys()`",
          "No string-keyed property — user data or typos — can ever collide with or shadow them",
          "Symbols are stored on the prototype, strings on the instance",
          "Symbols can be compared with `===`, strings cannot"
        ],
        answer: 1,
        explanation: "Symbol keys live in a separate namespace from string keys, so the runtime’s protocol names can never be accidentally (or maliciously) overwritten by ordinary object properties."
      },
      {
        q: "`const Even = { [Symbol.hasInstance](n) { return n % 2 === 0; } };` — what is `2 instanceof Even`?",
        options: ["`true`", "`false`", "`TypeError`, because `Even` is not a function", "`undefined`"],
        answer: 0,
        explanation: "When `Symbol.hasInstance` is present on the right-hand object, `instanceof` simply calls it with the left operand and uses its boolean result — no constructor required."
      },
      {
        q: "After adding `get [Symbol.toStringTag]() { return 'Circle'; }` to a class, which output changes?",
        options: [
          "`JSON.stringify(new Circle())`",
          "`Object.prototype.toString.call(new Circle())`",
          "`String(new Circle())`",
          "`$` interpolation of `new Circle()` inside a template literal"
        ],
        answer: 1,
        explanation: "`toStringTag` is consulted only by `Object.prototype.toString`; template literals, `String()` and `JSON.stringify` use other conversion paths."
      },
      {
        q: "Which hint does the `Symbol.toPrimitive` method receive for the expression `v + 0`, where `v` is an object?",
        options: ["`'number'`", "`'string'`", "`'default'`", "No hint — the method is called with no arguments"],
        answer: 2,
        explanation: "The binary `+` is ambiguous (could mean string concatenation), so it passes the `'default'` hint and lets the method choose; unary `+v` and arithmetic pass `'number'`, templates pass `'string'`."
      },
      {
        q: "You set `obj[Symbol.isConcatSpreadable] = true` on an object with `length: 2` and numeric keys `0` and `1`. What does `[9].concat(obj)` return?",
        options: [
          "`[9, obj]` — array-likes are never spread",
          "`[9, <value of key 0>, <value of key 1>]`",
          "`[9, 2]` — only the length counts",
          "`TypeError`, because spreading non-arrays is not allowed"
        ],
        answer: 1,
        explanation: "With the flag true, `concat` reads the object’s `length` and copies its numbered properties into the result, just as it would for a real array."
      }
    ]
  },

  // ---------------------------------------------------------------- 14.4
  {
    sectionId: "js-ch14-s4",
    readingTime: 8,
    intro: "A **template tag** turns a template literal from data into a function call: writing a function reference immediately before a template literal invokes that function — the **tag** — with the literal’s text and the values of its expressions, and the tag’s return value becomes the value of the whole expression. Tags are how libraries embed little languages inside JavaScript source, and how the built-in `String.raw` escapes the unescaping. This section builds a production-grade `escapeHtml` tag — the single most useful security idiom in the chapter.",
    objectives: [
      "Explain what a tagged template literal is and when it evaluates (parse time versus runtime)",
      "Write the signature of a tag function: the frozen `strings` array plus one argument per substitution",
      "Use the `raw` property and the built-in `String.raw` tag",
      "Implement `escapeHtml()` as a tag that escapes interpolated values but trusts the literal’s text"
    ],
    concepts: [
      {
        term: "Tagged template literal",
        kind: "definition",
        statement: "A template literal immediately preceded by a function reference is not a string — it is a **call to that function**. The function is the **tag**; the template’s pieces are its argument list, and whatever the tag returns is the value of the whole expression. The tag is an ordinary function: it can be passed around, curried or returned from another function.",
        detail: "```js\nfunction shout(strings, ...values) {\n  let s = '';\n  for (let i = 0; i < strings.length; i++) {\n    s += strings[i].toUpperCase();\n    if (i < values.length) s += values[i];\n  }\n  return s + '!';\n}\nshout`hello ${'world'}`;   // 'HELLO WORLD!'\n```"
      },
      {
        term: "The tag function’s arguments",
        kind: "method",
        statement: "A tag receives one leading **`strings` array** followed by one argument per substitution: `tag(strings, ...values)`. `strings` has exactly `values.length + 1` elements (a template with $n$ substitutions has $n + 1$ text chunks), is **frozen** by the runtime, and carries a `raw` property — an array of the raw, unprocessed source text of each chunk.",
        detail: "```js\nfunction showParts(strings, ...values) {\n  console.log(strings);      // ['x<TAB>', 'y'] — escape sequences processed\n  console.log(strings.raw);  // ['x\\\\ty']   — raw source, backslash intact\n  console.log(values);       // [2]\n}\nshowParts`x\\t${1 + 1}y`;\n``` The `raw` array is why a tag can tell the difference between a tab and the two characters backslash-t."
      },
      {
        term: "String.raw",
        kind: "definition",
        statement: "`String.raw` is a built-in tag that returns the template’s chunks **without processing escape sequences** — the go-to for regex strings, Windows paths and any text where a backslash must survive literally.",
        detail: "```js\nString.raw`C:\\new\\docs`;   // 'C:\\new\\docs' — two real backslashes\n`C:\\new\\docs`;            // contains a NEWLINE: \\n was processed\n```"
      },
      {
        term: "Templates are trusted text",
        kind: "insight",
        statement: "The literal chunks of a template are **part of the program’s source code** — authored, reviewed and frozen at parse time — while the values interpolated through the substitution slots are **runtime data**. Security-sensitive tags therefore treat the two differently: the text flows through untouched, and only the substituted values get validated, escaped or parameterized.",
        detail: "This is the same trust boundary as SQL’s separation of query text from bound parameters, and it is why tagged templates are the natural basis for safe HTML, safe SQL and safe URL builders."
      },
      {
        term: "The strings array is cached per call site",
        kind: "insight",
        statement: "For each distinct tagged-template literal in source, the runtime creates **one** frozen `strings` array and reuses its identity on every evaluation of that literal: `tag` can use the array object itself as a `Map` or `WeakMap` key to memoize parsed templates. Different literals — even with identical text — get different arrays.",
        detail: "```js\nconst seen = new WeakMap();\nfunction sql(strings, ...values) {\n  if (!seen.has(strings)) seen.set(strings, strings.join('?'));\n  return { text: seen.get(strings), values };   // parse once, run many times\n}\n```\nCaching is why tags can afford to parse the literal (a mini-language compile) on first use and skip it afterwards — the array identity is the call-site key."
      },
      {
        term: "Parameterized tags: SQL without injection",
        kind: "method",
        statement: "Unlike `escapeHtml`, which returns a string, a safe-SQL tag returns a **parameterized query** `{ text, values }`: the literal chunks become `$1, $2` placeholders and the substitutions travel separately, so the database driver never parses data as SQL. Encoding, not escaping, is the defense.",
        detail: "```js\nfunction sql(strings, ...values) {\n  let text = strings[0];\n  for (let i = 1; i < strings.length; i++) text += '$' + i + strings[i];\n  return { text, values };\n}\nsql`SELECT * FROM users WHERE name = ${name} AND age > ${age}`;\n// { text: 'SELECT * FROM users WHERE name = $1 AND age > $2', values: [name, age] }\n```\nThe same shape gives safe URLs (`encodeURIComponent` each value) and safe shell commands — the tag decides the encoding its sink requires."
      }
    ],
    examples: [
      {
        title: "An escapeHtml tag for safe HTML strings",
        problem: "A comment renderer builds HTML with `'<b>' + username + ' says:</b> ' + comment` and assigns the result to `innerHTML`. A user named `<script>alert('xss')</script>` executes in every visitor’s browser. Rewrite the builder as a tagged template so the page’s own markup stays intact while interpolated data is neutralized.",
        steps: [
          { label: "Step 1: Write the tag", text: "```js\nfunction escapeHtml(strings, ...values) {\n  let s = strings[0];                    // trusted literal text\n  for (let i = 1; i < strings.length; i++) {\n    const v = String(values[i - 1]);     // untrusted data\n    s += v.replace(/&/g, '&amp;')\n           .replace(/</g, '&lt;')\n           .replace(/>/g, '&gt;')\n           .replace(/\"/g, '&quot;')\n           .replace(/'/g, '&#39;');\n    s += strings[i];                      // trusted text again\n  }\n  return s;\n}\n```" },
          { label: "Step 2: Call it as a tag", text: "```js\nconst username = 'Ada <3';\nconst comment = '<script>alert(\"x\")</script>';\nconst html = escapeHtml`<b>${username} says:</b> ${comment}`;\n```" },
          { label: "Step 3: Inspect what the tag received", text: "`strings` is `['<b>', ' says:</b> ', '']` — frozen, three chunks for two substitutions; `values` is `['Ada <3', '<script>alert(\"x\")</script>']`." },
          { label: "Step 4: Read the result", text: "`html` is `'<b>Ada &lt;3 says:</b> &lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;'` — the `<b>` markup passes through untouched, while every character of the data that could open a tag became an entity." },
          { label: "Step 5: Assign safely", text: "`list.innerHTML = html;` renders `Ada <3 says:` in bold followed by the comment’s text displayed literally — the script markup is now inert text, and there is no way for any value passed through a substitution to close the `<b>` and open a new tag." }
        ],
        result: "The tagged call produces display-safe HTML: the literal markup is trusted because it is source code, and the two interpolated values are escaped because they are data. The same pattern gives you safe SQL, safe shell commands and safe URLs — hand the template to a tag whose only job is neutralizing one kind of injection."
      },
      {
        title: "Seeing the two arrays: cooked versus raw",
        problem: "Write a small `showParts` tag that prints exactly what the runtime passes, to make the `strings` array, the `values` array and `strings.raw` concrete.",
        steps: [
          { label: "Step 1: Define the tag", text: "```js\nfunction showParts(strings, ...values) {\n  console.log(strings.length, values.length);   // 2 1\n  console.log(JSON.stringify(strings));         // ['x\\ty','y']\n  console.log(JSON.stringify(strings.raw));    // ['x\\\\ty','y']\n  console.log(values);                          // [2]\n}\nshowParts`x\\t${1 + 1}y`;\n```" },
          { label: "Step 2: Count the chunks", text: "The template has one substitution, so `strings.length` is `2` and `values.length` is `1` — the invariant `strings.length === values.length + 1` every tag can rely on." },
          { label: "Step 3: Compare cooked and raw", text: "`strings[0]` contains a real TAB character because the template’s `\\t` was processed; `strings.raw[0]` contains the two characters backslash and `t`, because `raw` preserves the source as typed." },
          { label: "Step 4: Note the freeze", text: "Attempting `strings.push('z')` throws `TypeError` — the runtime freezes the arrays precisely so tags cannot smuggle state between calls of the same template." }
        ],
        result: "A tag sees four things: cooked chunks, raw chunks, values, and the guarantee that the chunk arrays are frozen — enough to implement everything from `String.raw` to full little languages."
      }
    ],
    keyTakeaways: [
      "A tagged template is a call, not a string: the tag function receives the pieces, and its return value is the expression’s value.",
      "Signature: `tag(strings, ...values)` with `strings.length === values.length + 1`; both arrays are frozen.",
      "`strings.raw` holds the unprocessed source text — and the built-in `String.raw` tag returns exactly that.",
      "Template text is trusted source; substitutions are untrusted data — the trust boundary that makes tags a security tool.",
      "`escapeHtml` as a tag escapes every substitution while leaving the surrounding markup byte-for-byte intact."
    ],
    quiz: [
      {
        q: "A template literal with one substitution is tagged with `escapeHtml`. How many arguments does `escapeHtml` receive?",
        options: ["1", "2", "3", "It depends on the length of `name`"],
        answer: 1,
        explanation: "One `strings` array (`['<b>', '</b>']`) plus one value per substitution — two arguments for a template with one substitution."
      },
      {
        q: "Which expression yields a string containing a real backslash followed by the letter n, with no newline?",
        options: [
          "A plain template literal whose source text is `C:\\new`",
          "`String.raw` applied to a template whose source text is `C:\\new`",
          "`'C:' + '\\n' + 'ew'`",
          "`escapeHtml` applied to a template whose source text is `C:\\new`"
        ],
        answer: 1,
        explanation: "`String.raw` skips escape processing, so the source characters backslash and n survive literally; a normal template processes `\\n` into a newline."
      },
      {
        q: "In the `escapeHtml` tag, why is only the **substituted value** passed through the escaping replacements?",
        options: [
          "For performance — literals are usually shorter",
          "Because literals are trusted program source, while substitutions are untrusted runtime data",
          "Because the `strings` array is frozen and cannot be modified after replacement",
          "Because HTML entities are not valid inside literal chunks"
        ],
        answer: 1,
        explanation: "The literal text was authored and reviewed as part of the program; the substituted values are user data — escaping them (and only them) keeps markup intact while neutralizing injection."
      },
      {
        q: "A tag is applied to a template whose first text chunk is typed in source as `x\\ty` (x, backslash, t), followed by one substitution and the final chunk `y`. What does `strings.raw[0]` contain?",
        options: [
          "A string containing a TAB character",
          "The two characters backslash and `t`",
          "`'x'` — raw strips escape sequences entirely",
          "`undefined`, because `raw` only exists on `String.raw` results"
        ],
        answer: 1,
        explanation: "`raw` preserves the unprocessed source text: the cooked chunk has a real tab, the raw chunk has the two source characters backslash and t."
      },
      {
        q: "A tag is applied to a template with the single text chunk `hello` and no substitutions, and the tag returns the number `42`. What is the value of the tagged-template expression?",
        options: [
          "`'hello'`, because templates always evaluate to strings",
          "`42` — the tag’s return value is the value of the expression",
          "`['hello']` — the strings array",
          "`undefined`, because tags must return strings"
        ],
        answer: 1,
        explanation: "Nothing constrains the return type: a tagged template evaluates to whatever its tag function returns."
      }
    ]
  },

  // ---------------------------------------------------------------- 14.5
  {
    sectionId: "js-ch14-s5",
    readingTime: 8,
    intro: "The `Reflect` object is not a class and not a constructor — it is a **namespace of 13 static functions**, one for each fundamental object operation the language itself performs. Each is the functional counterpart of an operator or `Object` method: `Reflect.get(o, 'x')` for `o.x`, `Reflect.has(o, 'x')` for `'x' in o`, `Reflect.deleteProperty(o, 'x')` for `delete o.x`. Their superpower is uniformity: same arguments, predictable return values, and a one-to-one correspondence with the proxy traps of the next section.",
    objectives: [
      "List the 13 `Reflect` statics and the operator each one replaces",
      "Invoke functions with `Reflect.apply()` using an array of arguments and an explicit receiver",
      "Explain why the fallible `Reflect` methods return `false` instead of throwing, and where that composes better",
      "Use `Reflect.ownKeys()` and describe its ordering guarantee"
    ],
    concepts: [
      {
        term: "The Reflect object",
        kind: "definition",
        statement: "`Reflect` groups one static function per fundamental object operation. Calling `Reflect.get(target, 'x')` performs exactly the operation `target.x` would — same prototype-chain walk, same getters — but as a **function**, so it can be stored in a variable, passed as a callback, or invoked with computed names in higher-order code.",
        detail: "It also patches historical asymmetries: `Reflect.setPrototypeOf` returns a boolean instead of silently failing on non-extensible objects, and `Reflect.defineProperty` returns `false` instead of throwing."
      },
      {
        term: "The thirteen statics",
        kind: "method",
        statement: "The complete set: `apply`, `construct`, `get`, `set`, `has`, `deleteProperty`, `defineProperty`, `getOwnPropertyDescriptor`, `ownKeys`, `getPrototypeOf`, `setPrototypeOf`, `isExtensible` and `preventExtensions` — one per proxy trap (§14.6) and one per fallible object operation in the language.",
        detail: "```text\nReflect.apply(target, thisArg, args)          f.apply(thisArg, args)\nReflect.construct(target, args)               new target(...args)\nReflect.get(target, prop)                     target[prop]\nReflect.set(target, prop, value)              target[prop] = value\nReflect.has(target, prop)                     prop in target\nReflect.deleteProperty(target, prop)          delete target[prop]\nReflect.defineProperty(target, key, desc)     Object.defineProperty\nReflect.getOwnPropertyDescriptor(target, key)  Object.getOwnPropertyDescriptor\nReflect.ownKeys(target)                        Object.keys + symbols\nReflect.getPrototypeOf(target)                Object.getPrototypeOf\nReflect.setPrototypeOf(target, proto)         Object.setPrototypeOf\nReflect.isExtensible(target)                  Object.isExtensible\nReflect.preventExtensions(target)             Object.preventExtensions\n```"
      },
      {
        term: "Success booleans instead of exceptions",
        kind: "insight",
        statement: "The `Reflect` forms of fallible operations return `false` on failure where the operator or `Object` method would throw: `Reflect.defineProperty` returns `false` where `Object.defineProperty` throws a `TypeError`, and `Reflect.deleteProperty` returns `false` where a strict-mode `delete` throws. `Reflect.set` likewise returns whether the assignment stuck.",
        detail: "Boolean-returning operations compose: you can count, filter and short-circuit without `try/catch` scaffolding — and proxy handlers can forward operations and report the outcome truthfully to the proxy machinery."
      },
      {
        term: "Reflect.apply",
        kind: "method",
        statement: "`Reflect.apply(target, thisArg, argumentsList)` invokes `target` with an explicit receiver and an **array** of arguments — the modern, non-throwing replacement for `Function.prototype.apply`. `Reflect.construct(target, args)` is its `new` counterpart: it runs the constructor with `args` and returns the fresh instance.",
        detail: "```js\nconst prices = [19.99, 4.5, 250, 89.9];\nReflect.apply(Math.max, null, prices);    // 250\nReflect.apply(Math.min, null, prices);    // 4.5\nReflect.construct(Map, [['a', 1]]);      // Map(1) { 'a' => 1 }\n```"
      },
      {
        term: "Reflect.ownKeys",
        kind: "method",
        statement: "`Reflect.ownKeys(target)` returns every own property key — string keys **and** symbol keys, enumerable or not — in a fixed order: integer-like keys ascending first, then string keys in insertion order, then symbol keys in insertion order.",
        detail: "```js\nReflect.ownKeys({ b: 1, 2: 'x', [Symbol('id')]: 3 });\n// ['2', 'b', Symbol(id)]\n```\n`Object.keys()` sees only enumerable string keys; `ownKeys` is the complete picture, and it is exactly what the `ownKeys` proxy trap intercepts."
      },
      {
        term: "Reflect mirrors the proxy traps",
        kind: "insight",
        statement: "Every `Reflect` static is paired one-for-one with a proxy trap, so a handler can forward any intercepted operation with the identically-named `Reflect` function — one vocabulary for intercepting an operation and for performing it.",
        detail: "```js\nnew Proxy(target, {\n  get(...args) { return Reflect.get(...args); }   // pass-through proxy\n});\n```"
      }
    ],
    examples: [
      {
        title: "Reflect.apply with receivers and argument arrays",
        problem: "A call-tracking wrapper must call an arbitrary function with an arbitrary `this` value and an argument list that arrives as an array — and it must not depend on `Function.prototype.apply`’s `this` pitfalls.",
        steps: [
          { label: "Step 1: Variadic built-ins", text: "```js\nconst prices = [19.99, 4.5, 250, 89.9];\nReflect.apply(Math.max, null, prices);   // 250\nReflect.apply(Math.min, null, prices);   // 4.5\n``` `Math.max` cares nothing about `this`, so `null` is the receiver." },
          { label: "Step 2: A method that needs its receiver", text: "```js\nconst counter = {\n  n: 10,\n  add(delta, mult) { this.n += delta * mult; return this.n; }\n};\nReflect.apply(counter.add, counter, [5, 2]);   // 20\nReflect.apply(counter.add, { n: 1 }, [5, 2]);  // 11\n``` The second call shows the receiver genuinely steering the result — `this.n` resolved on the substitute object." },
          { label: "Step 3: Methods on primitives", text: "`Reflect.apply(String.prototype.toUpperCase, 'hello', [])` returns `'HELLO'` — receiver and arguments both flow through the same three-parameter shape." },
          { label: "Step 4: Wrap it", text: "```js\nfunction timed(f, thisArg, args) {\n  const t0 = performance.now();\n  const result = Reflect.apply(f, thisArg, args);\n  console.log(f.name + ' took ' + (performance.now() - t0).toFixed(1) + 'ms');\n  return result;\n}\ntimed(counter.add, counter, [1, 3]);   // logs 'add took 0.0ms', returns 23\n```" }
        ],
        result: "`Reflect.apply` gives every dynamic call one uniform shape — function, receiver, argument array — which is exactly what wrappers, dispatch tables and proxy `apply` traps need."
      },
      {
        title: "Operations that never throw",
        problem: "A migration helper copies a chosen set of properties from a legacy record onto a locked, partially-frozen target. With operators it needs `try/catch` around every step; rebuild it with the boolean-returning `Reflect` operations.",
        steps: [
          { label: "Step 1: Create a target that will refuse some writes", text: "```js\nconst locked = {};\nObject.defineProperty(locked, 'id', { value: 1, configurable: false });\n``` Now `delete locked.id` in strict mode throws — but `Reflect.deleteProperty(locked, 'id')` just returns `false`." },
          { label: "Step 2: Redefinition without exceptions", text: "`Reflect.defineProperty(locked, 'id', { value: 2 })` returns `false` (the property is non-configurable), where `Object.defineProperty` throws `TypeError` — the caller learns the same fact as a value." },
          { label: "Step 3: Count the writes that stuck", text: "```js\nfunction safeAssign(dst, src, keys) {\n  let applied = 0;\n  for (const k of keys) {\n    if (Reflect.set(dst, k, src[k])) applied++;\n  }\n  return applied;\n}\n``` No `try/catch`, no strict-mode surprises — `Reflect.set` reports refusal as `false`, including on sealed or frozen targets." },
          { label: "Step 4: Observe the totals", text: "`safeAssign(locked, { id: 9, note: 'x' }, ['id', 'note'])` returns `1`: the frozen `id` write was refused and counted out, while `note` was created successfully." }
        ],
        result: "The fallible object operations become ordinary boolean-returning functions — decision logic replaces exception handling, and the same style feeds straight into proxy traps."
      },
      {
        title: "ownKeys: the complete, ordered key list",
        problem: "Log every own key of an object that mixes integer-like keys, string keys and a symbol key, and predict the order.",
        steps: [
          { label: "Step 1: Build the object", text: "```js\nconst flags = Symbol('flags');\nconst obj = { b: 1, 2: 'two', [flags]: true, a: 2 };\n```" },
          { label: "Step 2: Call ownKeys", text: "`Reflect.ownKeys(obj)` returns `['2', 'b', 'a', Symbol(flags)]` — integer-like keys first in ascending numeric order, then strings in insertion order (`'b'` before `'a'`), then symbols." },
          { label: "Step 3: Compare with Object.keys", text: "`Object.keys(obj)` returns `['2', 'b', 'a']`: same string ordering, but the symbol key is invisible — and any non-enumerable string keys would be missing too." },
          { label: "Step 4: Use the difference deliberately", text: "A property-copy utility that should be lossless iterates `Reflect.ownKeys(src)` and uses `Reflect.get(src, key)`; one that should mimic `JSON.stringify` iterates `Object.keys(src)` instead." }
        ],
        result: "`Reflect.ownKeys` is the lossless enumeration — integers ascending, then strings, then symbols — and the only single call that reveals all three categories."
      }
    ],
    keyTakeaways: [
      "`Reflect` is a namespace of 13 statics — one per fundamental object operation — not a constructor; `new Reflect()` is a `TypeError`.",
      "Each static is the functional form of an operator: `get`/`set` for property access, `has` for `in`, `deleteProperty` for `delete`, `apply`/`construct` for calls and instantiation.",
      "Fallible operations return `false` instead of throwing (`defineProperty`, `deleteProperty`, `set`, `setPrototypeOf`), which composes without `try/catch`.",
      "`Reflect.apply(f, thisArg, args)` and `Reflect.construct(C, args)` are the uniform dynamic-call forms.",
      "`Reflect.ownKeys` lists every own key — strings and symbols, enumerable or not — as integers, then strings, then symbols.",
      "The 13 statics pair one-to-one with proxy traps: handlers forward with the same-named `Reflect` function."
    ],
    quiz: [
      {
        q: "Which `Reflect` static is the functional counterpart of the `delete` operator?",
        options: ["`Reflect.remove`", "`Reflect.deleteProperty`", "`Reflect.ownKeys`", "`Reflect.set` with the value `undefined`"],
        answer: 1,
        explanation: "`Reflect.deleteProperty(target, prop)` performs the same operation as `delete target[prop]`, returning `false` on refusal where strict mode would throw."
      },
      {
        q: "How many static functions does the `Reflect` object define, and what do they correspond to?",
        options: [
          "10, one per array method that `Object` also has",
          "13, one per fundamental object operation / proxy trap",
          "7, one per primitive type",
          "It is open-ended — engines keep adding them"
        ],
        answer: 1,
        explanation: "Thirteen: apply, construct, get, set, has, deleteProperty, defineProperty, getOwnPropertyDescriptor, ownKeys, getPrototypeOf, setPrototypeOf, isExtensible, preventExtensions."
      },
      {
        q: "`Object.defineProperty` throws a `TypeError` when it fails. What does `Reflect.defineProperty` do in the same situation?",
        options: [
          "Also throws — they are identical in every case",
          "Returns `false`",
          "Returns `undefined`",
          "Returns a string describing the failure"
        ],
        answer: 1,
        explanation: "The `Reflect` form reports failure as a boolean return value, which is easier to branch on and is exactly what proxy traps are expected to return."
      },
      {
        q: "`Reflect.ownKeys({ 2: 'a', b: 1, 1: 'z', [Symbol('s')]: 0 })` returns keys in which order?",
        options: [
          "`['1', '2', 'b', Symbol(s)]`",
          "`['2', 'b', '1', Symbol(s)]` — insertion order throughout",
          "`[Symbol(s), '1', '2', 'b']` — symbols first",
          "`['b', '1', '2']` — symbols and integers are both excluded"
        ],
        answer: 0,
        explanation: "Integer-like keys come first in ascending numeric order, then string keys in insertion order, then symbol keys — so `1`, `2`, `b`, then the symbol."
      },
      {
        q: "Why is `Reflect.apply` sometimes preferred over `f.apply(thisArg, args)`?",
        options: [
          "It is always faster in every engine",
          "It cannot be broken by a function that overwrites its own `apply` property, and it takes the arguments as a real array",
          "It converts the arguments to strings first, avoiding type errors",
          "It calls the function in a new thread"
        ],
        answer: 1,
        explanation: "`f.apply` is a method read off the function object (and can be missing or shadowed), while `Reflect.apply` dispatches through the runtime with the same three-argument shape every time."
      }
    ]
  },

  // ---------------------------------------------------------------- 14.6
  {
    sectionId: "js-ch14-s6",
    readingTime: 11,
    intro: "A `Proxy` wraps a target object and lets your code intercept its fundamental operations — property reads, writes, `in` tests, deletion, even calls and construction — by supplying **trap** methods on a handler object. Proxies are the endpoint of this chapter: everything before (descriptors, prototypes, symbols, `Reflect`) is what proxies intercept. Two worked examples build the classics — an access-logging proxy and a private-property-enforcing proxy — and a third hands out a capability you can later revoke.",
    objectives: [
      "Create a proxy with `new Proxy(target, handler)` and explain which operations each of the six core traps intercepts",
      "Forward intercepted operations correctly using the matching `Reflect` functions",
      "Build a logging proxy that records every get/set/has/delete, and a proxy that throws on access to underscore-private properties",
      "Explain proxy invariants and use `Proxy.revocable()` to withdraw a capability permanently"
    ],
    concepts: [
      {
        term: "Proxy",
        kind: "definition",
        statement: "`new Proxy(target, handler)` returns an object that **forwards every operation to `target`** unless the same operation has a **trap** — a method of that name on `handler` — in which case your method runs instead. Operations not covered by any trap behave exactly as they would on the target, and the target itself is unchanged by being wrapped.",
        detail: "A proxy is transparent-looking but not identical: `proxy === target` is `false`, and `Object.getPrototypeOf(proxy)` consults the trap, not the target’s actual link."
      },
      {
        term: "The handler traps",
        kind: "method",
        statement: "The six core traps pair with language operations: `get(target, property, receiver)` intercepts property reads; `set(target, property, value, receiver)` intercepts writes; `has(target, property)` intercepts the `in` operator; `deleteProperty(target, property)` intercepts `delete`; `apply(target, thisArg, args)` intercepts calls (function targets only); and `construct(target, args, newTarget)` intercepts `new`.",
        detail: "The remaining traps mirror the rest of the `Reflect` API: `ownKeys`, `getOwnPropertyDescriptor`, `defineProperty`, `getPrototypeOf`, `setPrototypeOf`, `isExtensible` and `preventExtensions` (§14.5)."
      },
      {
        term: "Proxy invariants",
        kind: "insight",
        statement: "The runtime enforces language semantics even on trapped operations and throws `TypeError` when a trap’s answer would make the target lie: you cannot report a non-configurable target property as missing, return `true` from `set` when the corresponding `Reflect.set` would have failed, or fake a prototype for a non-extensible target.",
        detail: "Invariants are what keep proxies composable with the rest of the language — a proxy of a frozen object still acts frozen, because violating traps are rejected rather than honored."
      },
      {
        term: "Private-property proxies",
        kind: "method",
        statement: "A handler whose `get`, `set`, `has` and `deleteProperty` traps throw `TypeError` for any property name beginning with an underscore turns that naming convention into an enforced rule — the wrapped object’s methods are bound to the target so they can still use the private fields internally.",
        detail: "This is the pattern behind many library classes: hand out `privacyProxy(this)` instead of `this`, and callers simply cannot reach `_cache`, `_listeners` and friends, while the implementation’s own calls — dispatched on the target — work normally."
      },
      {
        term: "Revocable proxies",
        kind: "method",
        statement: "`Proxy.revocable(target, handler)` returns `{ proxy, revoke }`. The proxy behaves normally until `revoke()` is called once; afterwards **every** operation on it throws `TypeError` — a permanent, one-way switch for withdrawing access you previously granted.",
        detail: "Use it when handing an object reference to untrusted or long-lived code: revoke on logout, on timeout, or on subscription cancellation, and even code still holding the reference is locked out."
      },
      {
        term: "What proxies are used for",
        kind: "insight",
        statement: "Classic applications: logging and profiling, validation on write, private-name enforcement, negative array indices or virtual properties, remote-object RPC layers, memoization, test doubles — anywhere the **meaning** of a property access needs to change rather than its value.",
        detail: "Limits to keep in mind: traps fire on property operations, not on internal slots — a proxied `Date` still delegates its data to the target; `==`, `typeof` and a few built-in internal reads bypass traps entirely."
      }
    ],
    examples: [
      {
        title: "A full access-logging proxy",
        problem: "Audit every read, write, membership test and deletion performed on a `user` object over one debugging session, without touching the object or any of its callers.",
        steps: [
          { label: "Step 1: Write the handler", text: "```js\nfunction makeLoggingProxy(target, label) {\n  return new Proxy(target, {\n    get(t, prop, receiver) {\n      const value = Reflect.get(t, prop, receiver);\n      console.log('get    ' + label + '.' + String(prop) + ' -> ' + value);\n      return value;\n    },\n    set(t, prop, value, receiver) {\n      const ok = Reflect.set(t, prop, value, receiver);\n      console.log('set    ' + label + '.' + String(prop) + ' = ' + value + ' [' + ok + ']');\n      return ok;\n    },\n    has(t, prop) {\n      const found = Reflect.has(t, prop);\n      console.log('has    ' + label + '.' + String(prop) + ' [' + found + ']');\n      return found;\n    },\n    deleteProperty(t, prop) {\n      const ok = Reflect.deleteProperty(t, prop);\n      console.log('delete ' + label + '.' + String(prop) + ' [' + ok + ']');\n      return ok;\n    }\n  });\n}\n``` Each trap does its work — logging — and then forwards the operation with the matching `Reflect` function, returning what it returns." },
          { label: "Step 2: Wrap and exercise it", text: "```js\nconst user = makeLoggingProxy({ name: 'Ada', role: 'admin' }, 'user');\nuser.name;              // a read\nuser.role = 'editor';    // a write\n'name' in user;          // a membership test\ndelete user.role;        // a deletion\n```" },
          { label: "Step 3: Read the session log", text: "```text\nget    user.name -> Ada\nset    user.role = editor [true]\nhas    user.name [true]\ndelete user.role [true]\n```" },
          { label: "Step 4: Note the forwarding discipline", text: "Every trap uses the same-named `Reflect` function rather than touching `t` directly — that keeps receiver semantics (getters, setters, prototype walks) exactly as they would be without the proxy, and satisfies the `set` invariant by returning the truthful outcome." },
          { label: "Step 5: Swap the proxy out", text: "The original object still exists unchanged; dropping the proxy reference and handing callers `user` again removes the logging with zero code changes at the call sites." }
        ],
        result: "Four traps and four `Reflect` calls give a complete, zero-caller-impact audit trail of property traffic — the debugging use case, and the template for validation, memoization and RPC proxies."
      },
      {
        title: "Enforcing private properties with a proxy",
        problem: "A `Counter` class stores internal state under names beginning with `_`. The convention is not enforced — callers keep poking `counter._value`. Return a proxy from the constructor so underscore properties are unreachable from outside but fully usable from the class’s own methods.",
        steps: [
          { label: "Step 1: Write the guarding handler", text: "```js\nfunction privacyProxy(target) {\n  const guard = name =>\n    typeof name === 'string' && name.startsWith('_');\n  return new Proxy(target, {\n    get(t, prop, receiver) {\n      if (guard(prop)) throw new TypeError('private property ' + String(prop));\n      const value = Reflect.get(t, prop, receiver);\n      return typeof value === 'function' ? value.bind(t) : value;\n    },\n    set(t, prop, value, receiver) {\n      if (guard(prop)) throw new TypeError('private property ' + String(prop));\n      return Reflect.set(t, prop, value, receiver);\n    },\n    has(t, prop) {\n      if (guard(prop)) return false;\n      return Reflect.has(t, prop);\n    },\n    deleteProperty(t, prop) {\n      if (guard(prop)) return false;\n      return Reflect.deleteProperty(t, prop);\n    }\n  });\n}\n```" },
          { label: "Step 2: Return the proxy from the constructor", text: "```js\nclass Counter {\n  constructor(start = 0) {\n    this._value = start;      // private by convention\n    this.n = () => this._value;   // public methods close over this\n    return privacyProxy(this);\n  }\n  increment() { this._value++; return this._value; }\n}\n``` Because constructors may return an object, `new Counter()` hands callers the proxy, while `this` inside the methods remains the raw target." },
          { label: "Step 3: The bind makes methods work", text: "The `get` trap binds every returned function to the target `t`, so when a caller does `counter.increment()` the method’s `this` is the unguarded target — the class’s own code can use `_value` freely even though callers cannot." },
          { label: "Step 4: Test the enforcement", text: "```js\nconst c = new Counter(10);\nc.increment();        // 11 — public method, bound to target\nc.n();                // 11 — public method\nc._value;             // TypeError: private property _value\nc._value = 0;         // TypeError: private property _value\n'_value' in c;        // false — hidden from membership tests too\n```" },
          { label: "Step 5: Acknowledge the boundary", text: "A determined caller can still reach the target through a bound method’s receiver or by holding the raw object — proxy privacy is strong convention enforcement, not cryptography; true hard privacy needs the `#field` syntax of Chapter 9." }
        ],
        result: "The underscore convention became a runtime rule: public methods work, underscore properties throw, `in` lies to no one, and the class implementation itself is unaffected."
      },
      {
        title: "Handing out access you can take back",
        problem: "A settings service lends a `session` object to third-party plugin code. On logout you need the plugin’s held reference to become useless — even though you cannot reach into the plugin to delete its variables.",
        steps: [
          { label: "Step 1: Create a revocable proxy", text: "```js\nconst { proxy: session, revoke } = Proxy.revocable(\n  { user: 'ada', expires: '2025-06-01' },\n  { get(t, prop) { return Reflect.get(t, prop); } }\n);\nregisterPlugin(session);   // hand the capability out\n```" },
          { label: "Step 2: Use it while it lasts", text: "`session.user` returns `'ada'`; `session.expires` returns the string — all traps behave like a normal proxy." },
          { label: "Step 3: Revoke on logout", text: "```js\nfunction onLogout() {\n  revoke();               // one call, no exceptions, no return value to check\n}\n```" },
          { label: "Step 4: Observe the aftermath", text: "Any later use by the plugin throws: `session.user` → `TypeError: Cannot perform 'get' on a proxy that has been revoked`. The same applies to writes, `in`, `delete`, `apply` and every other operation — there is no trap that can rescue it." },
          { label: "Step 5: Note the design pattern", text: "This is a capability revocation: the object was never the resource, only a key to it. Pair it with a timer (`setTimeout(revoke, 3600000)`) for expiring grants, or with an event listener to revoke on teardown." }
        ],
        result: "One `revoke()` call neutralizes every outstanding reference at once — cheaper and safer than chasing down and nulling each variable yourself."
      }
    ],
    keyTakeaways: [
      "`new Proxy(target, handler)` wraps an object; handler methods named after operations — `get`, `set`, `has`, `deleteProperty`, `apply`, `construct` — intercept them, and absent traps fall through to the target.",
      "Traps should forward with the same-named `Reflect` function, returning its truthful result — that satisfies the proxy invariants that would otherwise throw `TypeError`.",
      "`apply` and `construct` require a callable target and turn the proxy into a wrapped function or class.",
      "A `get` trap that binds returned functions to the target is the key trick for private-property proxies — methods keep private access, callers do not.",
      "`Proxy.revocable(target, handler)` returns `{ proxy, revoke }`; after `revoke()`, every operation on the proxy throws `TypeError` forever.",
      "Proxies change the **meaning** of property operations: logging, validation, virtual properties, privacy, RPC and test doubles — not the target’s own state."
    ],
    quiz: [
      {
        q: "Which handler trap intercepts the expression `'secret' in proxy`?",
        options: ["`get`", "`has`", "`ownKeys`", "`getOwnPropertyDescriptor`"],
        answer: 1,
        explanation: "The `in` operator routes through the `has(target, property)` trap; `get` covers property reads and `ownKeys` covers `Object.keys`-style enumeration."
      },
      {
        q: "A proxy’s `set` trap runs `Reflect.set(t, prop, value)` which returns `false` on a frozen target property, but the trap returns `true` anyway. What happens?",
        options: [
          "Nothing — trap return values are advisory",
          "The runtime throws a `TypeError`, because the trap violated a proxy invariant",
          "The write is forced through to the frozen property",
          "The proxy is silently unwrapped to the target"
        ],
        answer: 1,
        explanation: "Invariants forbid reporting success for operations that actually failed — the proxy machinery checks the trap’s answer against the target’s reality and throws."
      },
      {
        q: "In the private-property proxy, why does the `get` trap bind returned functions to the target object?",
        options: [
          "To make the functions faster",
          "So that public methods called through the proxy have `this` set to the unguarded target and can still use `_private` fields",
          "Because proxies cannot return unbound functions",
          "To make `typeof method` return 'function' instead of 'proxy'"
        ],
        answer: 1,
        explanation: "The class’s own methods must keep unrestricted access to its private fields; binding them to the target sends their `this` around the guard entirely."
      },
      {
        q: "After `const { proxy, revoke } = Proxy.revocable(t, h); revoke();` — what does `proxy.anything` do?",
        options: [
          "Returns `undefined` for every property",
          "Forwards to the target one last time, then blocks",
          "Throws `TypeError` — revoked proxies cannot perform any operation",
          "Returns the target object itself"
        ],
        answer: 2,
        explanation: "Revocation is total and one-way: get, set, has, delete, apply, construct — every operation throws `TypeError` on a revoked proxy."
      },
      {
        q: "Which trap only exists when the proxy target is a **function**?",
        options: ["`get`", "`apply`", "`deleteProperty`", "`set`"],
        answer: 1,
        explanation: "`apply(target, thisArg, args)` intercepts calls and (with `construct`) `new` — both only make sense for callable targets; using them with object targets throws at proxy creation."
      },
      // Placement-pattern: proxy get trap — intercepted versus direct reads (original)
      {
        q: "What does this program print?\n```js\nlet target = { price: 10 };\nlet shop = new Proxy(target, {\n  get(t, prop) { return t[prop] * 2; }\n});\nconsole.log(shop.price);\nconsole.log(target.price);\n```",
        options: ["`10` then `10`", "`20` then `10`", "`20` then `20`", "`10` then `20`"],
        answer: 1,
        explanation: "Step 1: The code given reads the same property once through a doubling proxy and once straight from the target. Step 2: The governing rules are that a `get` trap intercepts only reads performed through the proxy object, that it should forward with the matching `Reflect`-style read `t[prop]`, and that direct reads of the target bypass every trap. Step 3: Tracing read by read, `shop.price` enters the trap, reads `10`, doubles it to `20`, while `target.price` skips the handler and yields the stored `10`. Step 4: The distractors fail because the trap never rewrites the target itself, and direct reads never consult the handler. Step 5: Therefore the output is `20` followed by `10`."
      }
    ]
  }
]
