import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 11: The JavaScript Standard Library (Sections 11.1 – 11.6)
// Master study content.
// ============================================================================

export const jsCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'js-ch11-s1',
    readingTime: 9,
    intro: 'Arrays get all the fame, but two other collections solve the problems arrays are worst at: **Set** stores values without duplicates, and **Map** stores key/value associations with keys of *any* type. Alongside their garbage-collecting siblings **WeakSet** and **WeakMap** they form the dictionary half of the standard library — and they fix the two great flaws of using plain objects as dictionaries: stringified keys and inherited properties.',
    objectives: [
      'Create and manipulate Sets and Maps with their full method surface',
      'Explain why object keys collide when they hold objects, and how Map fixes it',
      'Iterate Sets and Maps, including destructured entries',
      'Use Set operations (dedupe, union, intersection) and Map counting idioms',
      'Apply WeakMap to attach private state and metadata to objects'
    ],
    concepts: [
      {
        term: 'Set',
        kind: 'definition',
        statement: 'A **Set** is a collection of unique values — any value at all, including objects and `NaN` — that remembers **insertion order**. Core methods: `add()` (returns the set, so calls chain), `has()`, `delete()` (by value, not index) and the `size` property. Adding a value that is already present does nothing — the set keeps the *first* insertion position.',
        detail: 'Equality uses the SameValueZero algorithm: like `===` except that `NaN` equals `NaN` — so a Set can hold exactly one `NaN`, something `indexOf` on an array can never find.'
      },
      {
        term: 'Set iteration and operations',
        kind: 'method',
        statement: 'A Set is **iterable**: `for (const v of set)`, spread `[...set]` and `Array.from(set)` visit values in insertion order. Because the constructor consumes any iterable, set algebra is two lines:\n```js\nconst a = new Set([1, 2, 3]), b = new Set([2, 3, 4]);\nnew Set([...a, ...b]);          // union:        {1, 2, 3, 4}\n[...a].filter(x => b.has(x));   // intersection: [2, 3]\n[...a].filter(x => !b.has(x));  // difference:   [1]\n```',
        detail: 'Set membership tests (`has`) run in roughly $O(1)$ time, versus $O(n)$ for `array.includes(value)` — the reason large membership lists should be Sets, not arrays.'
      },
      {
        term: 'Map',
        kind: 'definition',
        statement: 'A **Map** holds key/value pairs where keys may be of **any type** — objects, functions, `NaN`, `0` — compared by identity rather than by string conversion. Core methods: `set()` (chainable), `get()`, `has()`, `delete()`, plus `size`.',
        detail: 'The counting idiom replaces three statements of object bookkeeping with one:\n```js\nconst counts = new Map();\nfor (const w of ["to", "be", "or", "not", "to", "be"]) {\n  counts.set(w, (counts.get(w) ?? 0) + 1);\n}\n[...counts];   // [["to", 2], ["be", 2], ["or", 1], ["not", 1]]\n```'
      },
      {
        term: 'Map iteration',
        kind: 'method',
        statement: 'Iterating a Map yields `[key, value]` **entry arrays in insertion order**. `map.keys()` and `map.values()` iterate one side; `map.entries()` (the default) iterates pairs. The destructuring form is idiomatic:\n```js\nfor (const [word, n] of counts) {\n  console.log(word, "appears", n, "times");\n}\n```',
        detail: 'Unlike an object, a Map needs no `Object.keys()` detour and guarantees iteration order — insertion order — by specification.'
      },
      {
        term: 'Map versus plain object',
        kind: 'insight',
        statement: 'A plain object coerces every property key to a string: `plain[objKey]` becomes `plain["[object Object]"]`, so two different objects **collide on the same property**. A Map keys by identity, keeps a `size`, iterates directly, and inherits nothing — there is no `toString` lurking on its prototype that a malicious key name could collide with.',
        detail: 'Choose a plain object when the shape is fixed, the keys are known at write time, and JSON serialization is needed; choose a Map when keys are computed, dynamic, non-string — or when you need guaranteed order and easy membership deletion.'
      },
      {
        term: 'WeakMap',
        kind: 'definition',
        statement: 'A **WeakMap** is a Map whose keys must be objects and are held **weakly**: if nothing else references a key, the garbage collector may destroy the key and its entry at any time. It has `get`, `set`, `has` and `delete` — but no `size`, no iteration and no clearing, because contents can evaporate at any moment.',
        detail: 'This is the privacy tool that competes with closures (Section 10.1) without hiding the class shape: attach implementation state to instances externally, and it disappears with the instance, automatically. It is also the right cache when keys are DOM nodes or other objects you do not own.'
      },
      {
        term: 'WeakSet',
        kind: 'definition',
        statement: 'A **WeakSet** holds a set of object references weakly, supporting only `add`, `has` and `delete`. Its one job is membership marking — for example “this object has already been visited” during a traversal — without keeping the objects alive.',
        detail: 'Both Weak collections deliberately refuse `forEach`, spread and `size`: an API that could enumerate entries would keep them strongly reachable, defeating the whole point.'
      },
      {
        term: 'Choosing the collection',
        kind: 'insight',
        statement: 'Array for **ordered lists with duplicates**; Set for **unique values and membership tests**; plain object for **fixed-shape records**; Map for **dictionaries with dynamic or non-string keys**; WeakMap/WeakSet for **state attached to objects you do not want to keep alive**.',
        detail: 'Flanagan’s rule of thumb: when you find yourself calling `Object.keys(x).length` or guarding against `__proto__` as a key, you wanted a Map.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: deduplication with Set',
        problem: 'Ballots arrive as an array that may repeat voter names. Produce the unique voters in first-seen order, then combine two membership lists with set algebra:\n```js\nconst votes = ["alice", "bob", "alice", "carol", "bob", "alice"];\nconst counted = new Set(votes);\n```',
        steps: [
          { label: 'Step 1: The constructor consumes the iterable', text: 'The Set constructor iterates `votes` and calls `add` on each element — adding `"alice"`, `"bob"`, then `"alice"` **again** (no-op: already present, position unchanged), `"carol"`, `"bob"` (no-op), `"alice"` (no-op).' },
          { label: 'Step 2: Count the survivors', text: '`counted.size` is `3`. Note it is a property, not a method — `counted.size()` is a classic typo that throws.' },
          { label: 'Step 3: Order survives', text: '`[...counted]` spreads the set back into an array: `["alice", "bob", "carol"]` — first-insertion order, which is exactly what “unique voters in order of first ballot” requires. Duplicates do not overwrite position: they are simply ignored.' },
          { label: 'Step 4: Membership and removal', text: '`counted.has("alice")` returns `true`; `counted.delete("bob")` removes by **value** and returns `true`; `counted.add("dave").add("erin")` chains because `add` returns the set itself. `size` is now `4`.' },
          { label: 'Step 5: Set algebra on membership lists', text: 'With `const a = new Set([1, 2, 3])` and `const b = new Set([2, 3, 4])`: the union is `new Set([...a, ...b])` → `{1, 2, 3, 4}`; the intersection is `[...a].filter(x => b.has(x))` → `[2, 3]` — and each `has` check is roughly $O(1)$ instead of scanning an array.' }
        ],
        result: 'Three unique voters `["alice", "bob", "carol"]` in first-seen order; unions and intersections become one-liners built from spread plus `has`.'
      },
      {
        title: 'Map versus plain object: the key collision',
        problem: 'Two user records must be associated with their permissions. Show what goes wrong when a plain object is used as the dictionary, then do it correctly with a Map:\n```js\nconst o1 = { id: 1 }, o2 = { id: 2 };\nconst plain = {};\nplain[o1] = "admin";\nplain[o2] = "editor";\n\nconst m = new Map();\nm.set(o1, "admin").set(o2, "editor");\n```',
        steps: [
          { label: 'Step 1: Object keys become strings', text: 'A property key must be a string (or symbol), so `plain[o1]` coerces the object with `toString()` — producing the literal key `"[object Object]"`. The first assignment writes that property; the value is `"admin"`.' },
          { label: 'Step 2: The second write is a silent overwrite', text: '`plain[o2]` coerces to the **same** string `"[object Object]"`, so `"editor"` replaces `"admin"`. `Object.keys(plain)` reveals the disaster: one key, `"[object Object]"` — both records destroyed.' },
          { label: 'Step 3: Map keys by identity', text: 'In the Map, `o1` and `o2` are keys **as objects** — no conversion at all. `m.size` is `2`; `m.get(o1)` returns `"admin"` and `m.get(o2)` returns `"editor"`.' },
          { label: 'Step 4: Identity, not equality', text: '`m.get({ id: 1 })` returns `undefined` — a freshly built object is a *different* key even though it looks equal. Map lookup is by reference (SameValueZero), so `NaN` works as a key but look-alike objects do not.' },
          { label: 'Step 5: Iterate without ceremony', text: '`for (const [user, role] of m)` visits both pairs in insertion order, destructured. With a plain object you would need `Object.entries(plain)` — and you would still have the collision bug from Step 2.' }
        ],
        result: 'The plain object keeps one entry (`"[object Object]"` → `"editor"`); the Map keeps both associations. When keys are anything but strings, only Map is correct.'
      },
      {
        title: 'WeakMap: private state without closures',
        problem: 'Give each `Counter` instance hidden click state that never appears in `JSON.stringify()` and vanishes when the instance does — without using a closure or a `#` class field:\n```js\nconst clicks = new WeakMap();\n\nclass Counter {\n  constructor() { clicks.set(this, { n: 0 }); }\n  click() {\n    const state = clicks.get(this);\n    state.n++;\n    return state.n;\n  }\n}\n```',
        steps: [
          { label: 'Step 1: State lives beside the instance, not on it', text: 'The WeakMap entry is keyed by the instance itself (`this`). The instance’s own enumerable properties stay empty, so `JSON.stringify(c)` returns `"{}"` and `for/in` sees nothing — privacy from the outside.' },
          { label: 'Step 2: Methods reach it through the map', text: '`click()` fetches the state object with `clicks.get(this)` and increments `state.n`. Two instances hold two separate entries — no sharing, unlike the singleton module state of Section 10.1.' },
          { label: 'Step 3: The entry does not keep the instance alive', text: 'The key is held **weakly**: if the program drops its last reference to a counter, the garbage collector may destroy both the instance and the state entry. A parallel `Map` would have kept both alive forever — a memory leak with the same code.' },
          { label: 'Step 4: The price', text: 'The WeakMap cannot report `size`, iterate its entries, or be cleared — those operations are impossible to offer when entries can disappear mid-run. If you need to enumerate, you need a Map and explicit cleanup.' }
        ],
        result: '`c.click(); c.click();` returns `1`, then `2`; `JSON.stringify(c)` stays `"{}"`; and dropping all references to `c` lets the state be collected — privacy plus automatic cleanup.'
      }
    ],
    keyTakeaways: [
      'Set stores unique values in first-insertion order; `add` is idempotent and `size` is a property, not a method.',
      'Set membership (`has`) is roughly $O(1)$ versus $O(n)$ for `array.includes` — use Sets for membership testing.',
      'Map accepts keys of any type, compared by identity; plain objects coerce keys to strings, so object keys collide on `"[object Object]"`.',
      'Iterating a Map yields `[key, value]` arrays in insertion order — `for (const [k, v] of map)` is the idiom.',
      'WeakMap and WeakSet hold their object keys weakly: entries can be garbage collected, so there is no `size`, no iteration and no clearing.',
      'WeakMap is the standard tool for private per-instance state and object metadata without keeping objects alive.'
    ],
    quiz: [
      {
        q: 'What are the contents and size of `new Set(["to", "be", "to"])` when spread into an array?',
        options: [
          '["to", "be", "to"] with size 3 — Sets keep duplicates in order',
          '["to", "be"] with size 2 — first insertion order, duplicates ignored',
          '["be", "to"] with size 2 — sorted alphabetically',
          '["to", "be", "to"] with size 2 — size counts distinct values only'
        ],
        answer: 1,
        explanation: 'The second `"to"` is already present, so `add` is a no-op: the set keeps first-insertion order `["to", "be"]` and `size` is 2, consistent with the contents.'
      },
      {
        q: 'Why do `plain[o1] = "a"` and `plain[o2] = "b"` clobber each other when `o1` and `o2` are different objects?',
        options: [
          'Because object properties cannot hold string values',
          'Because both keys are coerced to the same string, "[object Object]"',
          'Because plain objects only keep the alphabetically last key',
          'Because the second assignment throws a TypeError'
        ],
        answer: 1,
        explanation: 'Non-string keys are stringified via toString, and two distinct objects both produce "[object Object]" — one property, silently overwritten. A Map keys by object identity instead.'
      },
      {
        q: 'After `m.set(o, 1)`, what does `m.get({ id: 1 })` return when `o` is an object with `id: 1`?',
        options: ['`1` — deep equality is used for keys', '`undefined` — Map keys are compared by identity', 'A TypeError — keys must be strings', '`null` — missing keys return null'],
        answer: 1,
        explanation: 'Map lookup uses SameValueZero on the key itself: a fresh object is a different reference, so the lookup misses and returns undefined.'
      },
      {
        q: 'Which operation is NOT available on a WeakMap?',
        options: ['`get(key)`', '`set(key, value)`', '`has(key)`', 'iterating the entries with `for...of`'],
        answer: 3,
        explanation: 'Weak entries can be garbage collected at any time, so anything that enumerates them — iteration, `size`, `clear` — is deliberately impossible.'
      },
      {
        q: 'Which collection best stores "has this node already been visited?" markers during a graph traversal?',
        options: ['A plain object keyed by node index', 'A WeakSet of nodes', 'A Map from node to itself', 'An array of visited nodes']
        , answer: 1,
        explanation: 'A WeakSet marks membership without extending the lifetime of the nodes — when the traversal drops them, the markers can be collected too.'
      }
    ]
  },

  // ---------------------------------------------------------------- 11.2
  {
    sectionId: 'js-ch11-s2',
    readingTime: 8,
    intro: 'JavaScript numbers are doubles — but files, network packets, images and crypto are **bytes**. The typed array family bridges the two worlds: an **ArrayBuffer** is a fixed-length slab of raw memory, **typed arrays** are array-like views that read it as bytes or floats or big integers, and **DataView** reads and writes it with explicit, byte-order-safe methods. Together with `TextEncoder` and `structuredClone`, this is how JavaScript touches binary data.',
    objectives: [
      'Explain the roles of ArrayBuffer, typed array views and DataView',
      'Create typed arrays and read their buffer, byteOffset, byteLength and length',
      'Read and write numbers with DataView under explicit endianness',
      'Trace how overlapping views over one buffer see each other’s writes',
      'Convert between strings and UTF-8 bytes'
    ],
    concepts: [
      {
        term: 'ArrayBuffer',
        kind: 'definition',
        statement: 'An **ArrayBuffer** is a fixed-length sequence of **raw bytes** — allocated up front (`new ArrayBuffer(8)` gives exactly 8 bytes, zero-filled) and untyped. It has no methods for reading numbers; it is the backing memory that views interpret. Its `byteLength` never changes.',
        detail: 'Buffers can be copied with `slice()` (a copy) or transferred; `structuredClone(buffer)` deep-copies buffers too. In Node, the `Buffer` class is a `Uint8Array` subclass over this same machinery.'
      },
      {
        term: 'Typed arrays',
        kind: 'definition',
        statement: 'A typed array is an **array-like view** over an ArrayBuffer that reads and writes it as one numeric type: `Uint8Array` (1 byte per element), `Int8Array`, `Uint16Array`/`Int16Array` (2), `Uint32Array`/`Int32Array`/`Float32Array` (4), `Float64Array` (8), and the BigInt-backed `BigInt64Array`/`BigUint64Array` (8). Elements outside the type’s range are **converted, not rejected** — writes to integer views truncate modulo $2^8$, $2^{16}$ or $2^{32}$; `Float32Array` rounds to single precision.',
        detail: 'Key properties: `buffer` (the underlying memory), `byteOffset` (where the view starts), `byteLength`, and `length` (element count = `byteLength` / element size). Like strings, they are typed views, not containers — the container is the buffer.'
      },
      {
        term: 'Creating typed arrays',
        kind: 'method',
        statement: 'Three creation styles: `new Uint8Array(1024)` — 1024 zero bytes; `new Float64Array([1.5, 2.5])` or `Uint8Array.of(1, 2, 3)` — copies from values or iterables (allocating a new buffer); and `new Int16Array(buffer, byteOffset, length)` — a **view into existing memory**, where `length` counts elements and the offset must be a multiple of the element size.',
        detail: '\n```js\nconst buf = new ArrayBuffer(16);\nconst ints = new Int32Array(buf, 4, 2);  // 2 ints at bytes 4–11\nconst bytes = new Uint8Array(buf);        // all 16 bytes\nconst from = Uint8Array.from([1, 2, 3]);   // own buffer, own copy\n```'
      },
      {
        term: 'DataView',
        kind: 'definition',
        statement: 'A **DataView** is a neutral view over a buffer with one named method per type — `getUint8`, `setInt16`, `getFloat64`, and so on — where every method takes an explicit byte offset, and the multi-byte ones take a **little-endian flag**: `view.setUint32(0, n, true)` writes little-endian, `false` (or omitted) writes big-endian.',
        detail: 'Unlike typed arrays, a DataView is completely explicit about byte order and alignment — it lets you read file formats and network protocols whose endianness is fixed by the spec, regardless of the machine you run on.'
      },
      {
        term: 'Endianness',
        kind: 'insight',
        statement: 'A multi-byte number can store its least-significant byte first (**little-endian**) or most-significant byte first (**big-endian**). Typed arrays read and write in the **platform’s** byte order — virtually all CPUs JavaScript runs on are little-endian — so the only portable way to control endianness is a DataView with its flag.',
        detail: 'Network byte order is big-endian; most desktop and mobile CPUs are little-endian. Every binary file format picks one, and code that reads binary data must match it deliberately — this is the single most common source of “the number came out as garbage” bugs.'
      },
      {
        term: 'Overlapping views',
        kind: 'insight',
        statement: 'Multiple typed arrays and DataViews may sit over **the same buffer**, even at overlapping offsets. They are windows onto one memory region, so a write through one view is instantly visible through every other view — there is exactly one copy of the bytes.',
        detail: 'This is how struct-like records are built: a `Uint8Array` view for the flags byte, a `Uint32Array` view at offset 4 for the id, a `Float64Array` view at offset 8 for the reading — all sharing one allocation.'
      },
      {
        term: 'Typed arrays are iterable — sort of',
        kind: 'insight',
        statement: 'Typed arrays support indexed access, `length`, iteration, spread and `Array.from`, and several array methods (`sort`, `reverse`, `fill`, `copyWithin`, `slice`, `subarray`, `set`). But they are **not** Array instances: no `push`, `pop`, `splice` or `concat` — because a buffer’s length is fixed.',
        detail: '`set(source, offset)` bulk-copies another array or typed array into the view at a given offset; `subarray(begin, end)` returns a new view over the *same* bytes (unlike `slice`, which copies).'
      },
      {
        term: 'TextEncoder and TextDecoder',
        kind: 'method',
        statement: '`new TextEncoder().encode(str)` returns a `Uint8Array` of the string’s **UTF-8 bytes**; `new TextDecoder().decode(bytes)` converts them back. UTF-8 is a variable-length encoding — an accented character takes 2 bytes, an emoji 4.',
        detail: 'The decoder also accepts a `{ stream: true }` option so multi-byte characters split across chunk boundaries can be decoded incrementally — exactly what stream readers need (Section 13.4).'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: writing a 32-bit integer both endian ways',
        problem: 'Write the number `0x12345678` (305419896) into a 4-byte buffer as little-endian, inspect the raw bytes, then rewrite as big-endian and read both back:\n```js\nconst buf = new ArrayBuffer(4);\nconst view = new DataView(buf);\nconst bytes = new Uint8Array(buf);\n\nview.setUint32(0, 0x12345678, true);   // little-endian\nview.setUint32(0, 0x12345678, false);  // big-endian\n```',
        steps: [
          { label: 'Step 1: Allocate the memory', text: '`new ArrayBuffer(4)` creates 4 zero bytes — one slab, no type. `view` and `bytes` are two windows onto those same 4 bytes.' },
          { label: 'Step 2: Write little-endian', text: '`setUint32(0, 0x12345678, true)` splits the number into its bytes — most significant `0x12`, then `0x34`, `0x56`, `0x78` — and stores the **least significant first**: memory reads `[120, 86, 52, 18]`, i.e. `[0x78, 0x56, 0x34, 0x12]`.' },
          { label: 'Step 3: Read it back — matching order', text: '`view.getUint32(0, true)` reassembles the same number: $0x12345678 = 305419896$. The flag on read and write must agree, or the bytes reassemble in the wrong order.' },
          { label: 'Step 4: Write big-endian', text: '`setUint32(0, 0x12345678, false)` stores the **most significant byte first**: `bytes` is now `[18, 52, 86, 120]` = `[0x12, 0x34, 0x56, 0x78]` — the bytes reversed in place, same number.' },
          { label: 'Step 5: The mismatch disaster', text: 'Had we written little-endian and then called `getUint32(0, false)`, the bytes `[0x78, 0x56, 0x34, 0x12]` would reassemble as $0x78563412 = 2018915346$ — a plausible-looking but completely wrong value. Endianness bugs do not throw; they silently corrupt.' }
        ],
        result: 'Little-endian bytes `[120, 86, 52, 18]`, big-endian bytes `[18, 52, 86, 120]` — same number, mirrored memory, and DataView is the only portable way to choose which.'
      },
      {
        title: 'Overlapping views: one buffer, two pairs of eyes',
        problem: 'An 8-byte buffer is viewed simultaneously as one `Float64Array` element and eight `Uint8Array` bytes. Trace what each view sees when the other writes:\n```js\nconst shared = new ArrayBuffer(8);\nconst asDouble = new Float64Array(shared);\nconst asBytes = new Uint8Array(shared);\n\nasDouble[0] = 1.5;\nasBytes[7] = 191;\n```',
        steps: [
          { label: 'Step 1: Two windows, one memory', text: '`asDouble` has `length` 1 (8 bytes / 8-byte doubles) and `byteOffset` 0; `asBytes` has `length` 8. Both reference the same `shared` buffer — there is one copy of the data, not two.' },
          { label: 'Step 2: Write through the double view', text: '`asDouble[0] = 1.5` stores the IEEE-754 representation of 1.5: the bit pattern `0x3FF8000000000000`. On a little-endian platform the bytes appear as `[0, 0, 0, 0, 0, 0, 248, 63]` — least significant byte first, so `0xF8 = 248` and `0x3F = 63` sit at the **end**.' },
          { label: 'Step 3: Inspect through the byte view', text: 'Reading `asBytes` now shows exactly those eight values — proof that the double’s internals are visible to any view of the same memory.' },
          { label: 'Step 4: Flip one byte, change the number', text: '`asBytes[7] = 191` replaces `0x3F` with `0xBF` — the top byte of the double, whose highest bit is the **sign bit**. The pattern becomes `0xBFF8000000000000`.' },
          { label: 'Step 5: Read back through the double view', text: '`asDouble[0]` now returns `-1.5` — one byte write through one view changed the value seen by another. (On a big-endian platform the sign bit lives in byte 0 instead — which is why this kind of trick must know its byte order.)' }
        ],
        result: 'The byte view exposes `1.5` as `[0, 0, 0, 0, 0, 0, 248, 63]`, and flipping the last byte to 191 turns the double into `-1.5` — overlapping views share memory, not copies.'
      },
      {
        title: 'Strings to bytes and back',
        problem: 'Encode the string `"hi é"` to UTF-8 bytes, inspect them, and decode them back:\n```js\nconst encoder = new TextEncoder();\nconst bytes = encoder.encode("hi é");\nnew TextDecoder().decode(bytes);\n```',
        steps: [
          { label: 'Step 1: Encode', text: '`encoder.encode()` returns a fresh `Uint8Array`. The ASCII characters pass through one byte each: `h` = 104, `i` = 105, space = 32.' },
          { label: 'Step 2: The accented character takes two bytes', text: 'é is code point 233 — above the one-byte ASCII range — so UTF-8 encodes it as the pair `[195, 169]` (`0xC3 0xA9`). The full array is `[104, 105, 32, 195, 169]` — 5 characters, 5 bytes here, but a string of five é’s would take 10 bytes.' },
          { label: 'Step 3: Decode round-trips', text: '`new TextDecoder().decode(bytes)` walks the byte sequences, recognizes `0xC3 0xA9` as one character, and returns `"hi é"` — the original string.' },
          { label: 'Step 4: Why it matters', text: 'Any code that slices byte buffers into fixed-size records must account for variable-length UTF-8 — and code that compares `bytes.length` to `string.length` is comparing bytes to code units, which only agree for pure ASCII.' }
        ],
        result: '`[104, 105, 32, 195, 169]` and back to `"hi é"` — TextEncoder/TextDecoder are the standard bridge between JavaScript strings and binary data.'
      }
    ],
    keyTakeaways: [
      'An ArrayBuffer is fixed-length raw bytes with no read/write methods; views give it meaning.',
      'A typed array is a typed window: `Uint8Array` (1 byte/element) through `Float64Array` (8); writes convert or truncate to the element type.',
      'A view’s `length` counts elements — `byteLength` / element size — and `buffer` plus `byteOffset` locate it in memory.',
      'DataView methods take explicit byte offsets and a little-endian flag: the only portable way to control byte order.',
      'Typed arrays use the platform’s endianness (little-endian in practice); mixing it up yields silently wrong numbers.',
      'Overlapping views share one buffer — writes through one are visible through the others immediately.',
      'TextEncoder/TextDecoder convert between strings and UTF-8 bytes, where non-ASCII characters take 2–4 bytes.'
    ],
    quiz: [
      {
        q: 'A `Uint8Array` view over an `ArrayBuffer` stores elements that are each how many bytes?',
        options: ['1 byte, values 0–255', '4 bytes, values 0–4294967295', '8 bytes, like a double', 'It depends on the platform word size'],
        answer: 0,
        explanation: 'Uint8Array elements are single unsigned bytes — the most common view for I/O buffers, sockets and file data.'
      },
      {
        q: 'In `view.setUint32(0, value, true)`, what does the third argument `true` mean?',
        options: [
          'The value will be written as a float',
          'Write the bytes little-endian — least significant byte first',
          'Bounds checking is enabled',
          'The write is atomic'
        ],
        answer: 1,
        explanation: 'The boolean is the little-endian flag: true writes LSB-first, false (or omitted) writes big-endian; read and write flags must match.'
      },
      {
        q: 'A `Float64Array` is created over a fresh `new ArrayBuffer(8)`. What is its `length`?',
        options: ['8', '1', '64', '0 — the buffer must be larger'],
        answer: 1,
        explanation: 'length counts elements: 8 bytes divided by the 8-byte element size of Float64Array gives exactly one double.'
      },
      {
        q: 'A `Uint8Array` and a `Float64Array` view the same buffer. After `doubles[0] = 2.25`, what does the byte view observe?',
        options: [
          'No change — each view has its own copy of the data',
          'The same bytes the double was written with — views share memory',
          'A TypeError — concurrent views are not allowed',
          'The byte 2 at some offset'
        ],
        answer: 1,
        explanation: 'Views are windows onto one memory region; writing through one is instantly visible through the other, with the byte pattern determined by the type and platform endianness.'
      },
      {
        q: 'Which of these methods does a typed array NOT have, because its buffer length is fixed?',
        options: ['`sort`', '`fill`', '`push`', '`subarray`'],
        answer: 2,
        explanation: 'Typed arrays cannot grow, so push, pop, splice and concat are absent; sort, fill, set, slice and subarray all exist.'
      }
    ]
  },

  // ---------------------------------------------------------------- 11.3
  {
    sectionId: 'js-ch11-s3',
    readingTime: 12,
    intro: 'Regular expressions are patterns that describe text — and JavaScript’s implementation is one of the richest parts of its standard library. A regex is written between slashes, decorated with flags, and used by four string methods and two RegExp methods to **test**, **search**, **extract** and **replace**. This is the full treatment: syntax, flags, the greedy/lazy engine, groups and references, the `lastIndex` state machine, and the lookahead and lookbehind assertions that make regexes a small programming language of their own.',
    objectives: [
      'Read and write regex literals: literals, escapes, character classes, anchors, quantifiers, groups, alternation and backreferences',
      'Explain what each flag — `g`, `i`, `m`, `s`, `u`, `y` — changes at match time',
      'Trace the regex engine’s greedy matching and backtracking, and switch it to lazy when needed',
      'Drive `test`, `exec`, `match`, `matchAll`, `search`, `replace` and `split`, including the `lastIndex` state machine',
      'Use named groups, `$` replacement patterns and function replacers in practical problems'
    ],
    concepts: [
      {
        term: 'Creating regular expressions',
        kind: 'notation',
        statement: 'Two ways to build a RegExp: a **literal** `/pattern/flags` — compiled once when the script loads, the form to use for constant patterns — and the **constructor** `new RegExp("\\\\d+", "g")`, which compiles a runtime string and is needed when the pattern is built from user input. In a literal, backslashes belong to the regex; in a string literal, they must be **doubled** to survive.',
        detail: '\n```js\nconst zip = /\\d{5}/;                  // literal — preferred\nconst zips = new RegExp("\\\\d{5}", "g");  // from a string — note the double backslash\nconst dynamic = new RegExp("\\\\b" + word + "\\\\b", "i");\n```\nA regex object is immutable: `source`, `flags` and `lastIndex` are the interesting properties.'
      },
      {
        term: 'Literal characters, escapes and character classes',
        kind: 'definition',
        statement: 'Letters and digits match themselves. The punctuation **metacharacters** `^ $ . * + ? ( ) [ ] { } | \\` must be escaped with a backslash to match literally. A **character class** `[...]` matches any one character from the set — `[abc]`, ranges `[a-zA-Z0-9]`, negation `[^abc]` — and inside classes, `.` is a literal dot. Predefined classes: `\\d` = digit, `\\w` = `[a-zA-Z0-9_]`, `\\s` = whitespace, with uppercase complements `\\D \\W \\S`; `.` matches any character except line terminators (or any character at all with the `s` flag).',
        detail: '\n```js\n/[abc]/       // one of a, b, c\n/[^0-9]/      // anything that is not a digit\n/[\\d.]/       // a digit OR a literal dot — dot is plain inside a class\n/./           // any character except newline (add s flag to include it)\n/3\\.14/       // a literal dot must be escaped outside a class\n```'
      },
      {
        term: 'Anchors and word boundaries',
        kind: 'definition',
        statement: '**Anchors** match positions, not characters: `^` matches the start of the string (or of any line with the `m` flag), `$` the end (or line end with `m`), `\\b` a **word boundary** — the position between a `\\w` character and a non-`\\w` character. Anchored patterns therefore demand where the match may occur, not merely that it occur.',
        detail: '\n```js\n/^JavaScript$/     // the ENTIRE string, exactly\n/^error/m          // "error" at the start of any line\n/\\bcat\\b/          // "cat" as a whole word — not in "concatenate"\n```\nThe most common anchor bug is forgetting them: `/js/.test("jsx")` is true, because the pattern matches *somewhere*.'
      },
      {
        term: 'Quantifiers: greedy and lazy',
        kind: 'definition',
        statement: 'Repetition operators: `*` (zero or more), `+` (one or more), `?` (zero or one), `{n}` (exactly n), `{n,}` (n or more), `{n,m}` (between n and m). By default they are **greedy** — they consume as many characters as possible, then **backtrack** one at a time until the rest of the pattern matches. Appending `?` makes them **lazy**: they consume as few as possible, then expand one at a time.',
        detail: 'Greedy `.*` is the classic HTML-eating bug: `/<.*>/` on `"<b>bold</b>"` matches the entire string, because `.*` runs to the end and backtracks only to the *last* `>`. Prefer lazy `/<.*?>/` or — better — the negative class `/<[^>]*>/` and `/"[^"]*"/`, which cannot run past their terminator at all.'
      },
      {
        term: 'Grouping, alternation and backreferences',
        kind: 'definition',
        statement: 'Parentheses **group** for alternation and repetition, and by default **capture** their text for later use as `$1`, `$2`... or `m[1]`, `m[2]`.... `(?:...)` groups **without capturing**. Named groups `(?<word>...)` (ES2018) record captures on `m.groups.word`. Alternation `a|b|c` tries the left alternative first. A **backreference** `\\1` (or `\\k<word>`) matches the *same text again* that group 1 captured earlier in the same match.',
        detail: '\n```js\n/(\\w+)@(\\w+)/            // user and host captured as $1 and $2\n/(?:ab)+/                // repeated group, no capture\n/(?<user>\\w+)@(?<host>\\w+)/   // m.groups.user, m.groups.host\n/cat|dog/                 // either alternative\n/(.)\\1/                   // a doubled character — matches "aa", "77"\n/(?<pair>.)\\k<pair>/      // the same thing with a named backreference\n```'
      },
      {
        term: 'The six flags',
        kind: 'notation',
        statement: 'A pattern’s behavior is tuned by letters after the closing slash: **`g`** — global, all matches (and it turns `exec`/`test` into state machines, see below); **`i`** — case-insensitive; **`m`** — multiline, `^` and `$` match at line boundaries; **`s`** — dotAll, `.` also matches newlines; **`u`** — unicode mode, full Unicode and `\\u{...}` escapes (enables named-group syntax checking too); **`y`** — sticky, the match must begin exactly at `lastIndex`.',
        detail: 'Flags combine freely: `/\\bword\\b/gi` finds every case-insensitive occurrence. The `y` flag powers lexical scanners: anchored at a fixed offset, it either matches there or fails — no searching forward.'
      },
      {
        term: 'Matching and searching methods',
        kind: 'method',
        statement: 'RegExp methods: `test(str)` returns true/false; `exec(str)` returns a match array with `index`, `input` and `groups` — or `null`. String methods: `search(re)` returns the index of the first match or -1 (no state); `match(re)` returns the exec-style match, or **all match strings** when `re` has `g`; `matchAll(re)` returns an iterator of full match objects — `re` must have `g`; `split(re)` cuts on matches; `replace(re, ...)` substitutes.',
        detail: '\n```js\n// WITHOUT g — one match, no state\n"js js".match(/j/);     // ["j", index: 0, groups: undefined]\n\n// WITH g — match() returns strings only, exec becomes a STATE MACHINE\n"js js".match(/j/g);    // ["j", "j"]\nconst re = /j/g;\nre.exec("js js");        // match at 0 — re.lastIndex is now 1\nre.exec("js js");        // match at 3 — re.lastIndex is now 4\nre.exec("js js");        // null — and lastIndex RESETS to 0\n```\nThe `/g` flag makes the regex object **stateful**: every `exec` (and `test`!) call resumes from `lastIndex`. `matchAll` iterates every match **without** mutating the original regex — it works on an internal copy — which is why it is the safe modern form.'
      },
      {
        term: 'replace and split',
        kind: 'method',
        statement: '`str.replace(re, replacement)` substitutes — once, or **everywhere with `g`**. The replacement string may reference the match: `$&` (whole match), `$1`–`$99` (groups), `$<name>` (named group), `` $` `` (text before), `$\'` (text after), `$$` (a literal dollar sign). The replacement may instead be a **function**: `(match, ...groups, offset, wholeString) => string` — computed per match, with the named groups object as the final parameter.',
        detail: '\n```js\n"2026-03-03".replace(/(\\d{4})-(\\d{2})-(\\d{2})/, "$3.$2.$1");\n// "03.03.2026" — European date format from captured pieces\n\n"js ts".replace(/(\\w+) (\\w+)/, "$2 $1");   // "ts js" — swap groups\n\n"aXbXc".split(/X/);                       // ["a", "b", "c"]\n```\nThe function form receives `(match, ...captured, offset, string, groups)` — the robust idiom reads groups from the **last** argument.'
      },
      {
        term: 'Lookahead and lookbehind assertions',
        kind: 'definition',
        statement: '**Assertions** match a position *conditionally on its surroundings* without consuming characters: `(?=x)` positive lookahead — the next text must match x; `(?!x)` negative lookahead — the next text must **not** match x; `(?<=x)` positive lookbehind — the preceding text must match x (ES2018); `(?<!x)` negative lookbehind. Because they consume nothing, a pattern can require context and still continue from the same position.',
        detail: '\n```js\n/\\d+(?= dollars)/    // digits only when the words " dollars" follow\n/\\d+(?! dollars)/   // digits NOT followed by the words " dollars"\n/(?<=\\$)\\d+/         // digits only when a literal $ precedes them\n/(?<!avg )\\d+/        // digits NOT preceded by the words "avg "\n```\nThese enable tricks impossible to state otherwise — including matching a position *between* digits, which is exactly how the number-formatting example below inserts thousands separators.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: greedy, lazy and backtracking on markup',
        problem: 'Explain precisely why these three patterns behave differently on the text `"<b>bold</b> text"`:\n```js\nconst text = "<b>bold</b> text";\ntext.match(/<.*>/);    // ?\ntext.match(/<.*?>/);   // ?\ntext.match(/<[^>]*>/); // ?\n```',
        steps: [
          { label: 'Step 1: Greedy takes everything first', text: 'In `/<.*>/`, after `<` matches at offset 0, the greedy `.*` consumes **all remaining characters** to the end of the string — `b`, `b` `>`, ... through `" text"`.' },
          { label: 'Step 2: Then it backtracks for the `>`', text: 'The pattern still needs a final `>`, so the engine hands characters back **one at a time from the right** until the next required character is a `>`. The first `>` found while walking backward is the one at the very end of `"</b>"` — so the match is `"<b>bold</b>"`, the entire element including the closing tag. Greedy does not mean “shortest plausible”; it means “longest possible, then shrink from the right”.' },
          { label: 'Step 3: Lazy starts with nothing', text: 'In `/<.*?>/`, the lazy `.*?` first tries **zero** characters: is the next character a `>`? It is `b` — no match. Expand by one: `<b`, next is `b` — no. Expand again: next is `>` — match. The result is the shortest possible: `"<b>"`.' },
          { label: 'Step 4: The same match, the lazy way', text: 'Called with `/g`, `/<.*?>/g` finds both `"<b>"` and `"</b>"` as separate matches — the lazy pair of patterns most HTML scraping actually wants.' },
          { label: 'Step 5: The zero-backtracking idiom', text: '`/<[^>]*>/` reads “a `<`, then any run of *not-`>`*, then `>`”. The character class cannot pass a `>`, so the match stops at the first one with **no backtracking at all** — the fastest and most readable form. The same shape gives the classic quoted-string pattern `/\"[^\"]*\"/`, which matches a pair of quotes with no quotes inside.' }
        ],
        result: '`/<.*>/` → `"<b>bold</b>"` (greedy, backtracked from the end); `/<.*?>/` → `"<b>"` (lazy, shortest); `/<[^>]*>/` → `"<b>"` with no backtracking — know all three readings before choosing.'
      },
      {
        title: 'Number formatting with a lookahead (thousands separators)',
        problem: 'Insert commas every three digits from the right of a number’s integer part, without touching the decimals — the classic:\n```js\n"1234567.89".replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");\n```',
        steps: [
          { label: 'Step 1: Read the pattern in pieces', text: '`\\B` matches a position **between two word characters** — inside the digit run, never at its edges. `(?=(\\d{3})+(?!\\d))` is a lookahead that must hold at that same position: groups of exactly three digits ahead, and the first non-digit after them proves the groups consumed the rest of the integer part.' },
          { label: 'Step 2: Test each position in "1234567.89"', text: 'Between `1|234567`: ahead are 6 digits — `(\\d{3})+` matches `234567`, then `(?!\\d)` sees `.` — **match**, insert a comma. Between `12|34567`: ahead are 5 digits — no combination of 3-digit groups ends exactly at the `.`, so the lookahead fails, then so does every position with the wrong remainder.' },
          { label: 'Step 3: The winning positions', text: 'Only two positions survive — after the 1st digit and after the 4th — because the integer part has 7 digits and $7 \\equiv 1 \\pmod{3}$: the split must be 1 + 3 + 3. The fractional `89` is protected: `\\B` never matches the boundary around the `.`, and `(?!\\d)` forbids stopping mid-group anyway.' },
          { label: 'Step 4: The empty-match replacement', text: 'The pattern matches **zero characters** — it is pure position. With the `g` flag, `replace` inserts a comma at each matching position: offsets 1 and 4 yield `"1,234,567.89"`.' },
          { label: 'Step 5: Generalize', text: '`"9876543210"` → `"9,876,543,210"` (10 digits → 1+3+3+3). A leading `-` is harmless because `\\B` does not match between `-` and a digit. This single line is a masterclass: an assertion-only pattern performing structural surgery on text.' }
        ],
        result: '`"1234567.89"` becomes `"1,234,567.89"` — commas exactly at the positions followed by whole groups of three digits, decimals untouched.'
      },
      {
        title: 'Parsing URLs: named groups, matchAll and a function replacer',
        problem: 'Extract every URL from a message, show its parts, then rewrite one of them — masking the host of internal links:\n```js\nconst url = /(?<scheme>https?):\\/\\/(?<host>[\\w.]+)(?<path>\\/\\S*)?/g;\nconst msg = "see https://example.com/js/ch11 and https://internal.example.com/api?v=9";\n```',
        steps: [
          { label: 'Step 1: One exec, with names', text: '`url.exec(msg)` (the `g` flag is irrelevant for a single call) returns a match object where `m.groups` is `{ scheme: "https", host: "example.com", path: "/js/ch11" }` and `m.index` gives the offset. Named groups make the pattern self-documenting — no more remembering that `$3` was the path.' },
          { label: 'Step 2: Every URL with matchAll', text: '`for (const m of msg.matchAll(url))` yields one full match object per URL — groups, index and all. Crucially `matchAll` does **not** leave the shared regex mid-state: it iterates an internal copy, so the same `url` pattern stays reusable. (A hand-written `exec` loop would work too, but then you must remember that a `null` return is what resets `lastIndex`.)' },
          { label: 'Step 3: Rebuild with $ patterns', text: '`msg.replace(url, "$<scheme>://$<host>")` rewrites each URL using its captured groups — here stripping paths and queries, because `$<path>` is simply never referenced. Output: `"see https://example.com and https://internal.example.com"`.' },
          { label: 'Step 4: A function replacer with the groups object', text: '\n```js\nmsg.replace(url, (match, ...rest) => {\n  const groups = rest[rest.length - 1];\n  return groups.host === "internal.example.com"\n    ? "[internal link]"\n    : match;\n});\n```\nThe replacer runs **once per match**; its final parameter is the named-groups object (the earlier rest arguments are the positional captures). Any logic — table lookups, validation, randomization — is now fair game.' },
          { label: 'Step 5: The result', text: 'The external URL survives untouched while the internal one is masked: `"see https://example.com/js/ch11 and [internal link]"` — parse, iterate and rewrite, all from one pattern.' }
        ],
        result: 'Named groups expose `m.groups.scheme/host/path`; `matchAll` iterates safely; `$<name>` patterns reassemble matches; and a function replacer receives the groups object last, enabling per-match logic like host masking.'
      }
    ],
    keyTakeaways: [
      'Write regexes as literals `/pattern/flags`; use `new RegExp(string)` only for runtime-built patterns, doubling backslashes in the string.',
      'Metacharacters `^ $ . * + ? ( ) [ ] { } | \\` need escaping; inside `[...]`, `.` and friends are literal.',
      'Anchors are positions: `^`/`$` bound the string (or line, with `m`), `\\b` bounds words — unanchored patterns match *somewhere*, which surprises everyone once.',
      'Quantifiers are greedy by default: match longest, then backtrack from the right. `?` makes them lazy; `[^x]*` classes remove the backtracking entirely.',
      'Parentheses capture: `$1`/`m[1]`, or `(?<name>...)` for readable `m.groups.name`; `(?:...)` groups without capturing; `\\1` and `\\k<name>` match captured text again.',
      'The `g` flag turns `exec`/`test` into stateful machines driven by `lastIndex` — prefer `matchAll`, which does not mutate the shared regex.',
      '`replace` supports `$&`, `$1`, `$<name>` and neighbors — or a per-match function whose last parameter is the named-groups object.',
      'Lookahead `(?=)`/`(?!)` and lookbehind `(?<=)`/`(?<!)` assert context without consuming characters — the key to position-based rewrites like thousands separators.'
    ],
    quiz: [
      {
        q: 'Which pattern matches a quoted string — two double quotes with no quotes between them — most robustly?',
        options: ['/".*"/', '/"[^"]*"/', '/"?"/', '/"(.)"/'],
        answer: 1,
        explanation: '`[^"]*` consumes any run of non-quote characters, so the match can never run past the closing quote — no greedy overreach and no backtracking; `.*` would happily span several quoted strings.'
      },
      {
        q: 'On the text `"<b>bold</b>"`, what does `/<.*>/` match?',
        options: ['`<b>` — the first complete tag', 'The entire string `"<b>bold</b>"` — greedy `.*` runs to the end, then backtracks only to the last `>`', 'Nothing — `.` does not match letters', 'Each tag alternately, because the match is global'],
        answer: 1,
        explanation: 'Greedy quantifiers take everything first and give characters back one at a time from the right until the pattern can complete — landing on the *last* `>`, so the whole element matches.'
      },
      {
        q: 'A regex object `re = /js/g` is used twice: `re.test("one js only")` then again on the same string. What do the calls return?',
        options: [
          'true, then true — test is stateless',
          'true, then false — the first success advanced lastIndex, so the second search resumes after the match; failure then resets lastIndex to 0',
          'false, then true — test starts from the end',
          'A SyntaxError — test may not be called twice'
        ],
        answer: 1,
        explanation: 'With the g flag, test behaves like exec: the first call matches at offset 4 and leaves lastIndex at 6; the second call resumes at 6, finds nothing, returns false — and resets lastIndex, so a third call would return true again.'
      },
      {
        q: 'In a replacement string, what does `$1` mean?',
        options: [
          'A literal dollar and the digit 1',
          'The text captured by the first parenthesized group of the pattern',
          'The character before the match',
          'The whole match'
        ],
        answer: 1,
        explanation: '$1 through $99 splice captured groups into the replacement; $& is the whole match, $<name> a named group, and $$ a literal dollar sign.'
      },
      {
        q: 'What is the difference between `"a1b1".match(/\\d/g)` and `"a1b1".matchAll(/\\d/g)`?',
        options: [
          'None — both return arrays of all matches',
          'match returns the matching strings; matchAll returns an iterator of full match objects — with index and groups — and does not mutate the regex',
          'matchAll returns only the first match',
          'matchAll requires the y flag'
        ],
        answer: 1,
        explanation: 'With g, match flattens to bare strings, losing positions and groups; matchAll yields complete match objects per occurrence (and therefore needs g), iterating an internal copy so the original regex’s lastIndex is untouched.'
      }
    ]
  },

  // ---------------------------------------------------------------- 11.4
  {
    sectionId: 'js-ch11-s4',
    readingTime: 8,
    intro: 'A JavaScript Date is nothing but a **timestamp**: a count of milliseconds since the epoch, 1970-01-01T00:00:00 UTC. Everything else — years, months, days, time zones — is a layer of interpretation the getters apply on request, and nearly every Date bug in history is a misunderstanding of that layer. This section covers date arithmetic, the famous formatting pitfalls, `Intl.DateTimeFormat`, and the **Error** class family with its stack traces and custom subclasses.',
    objectives: [
      'Create Date objects from milliseconds, component fields and strings, and read them back correctly',
      'Perform date arithmetic by millisecond subtraction and addition',
      'Avoid the classic pitfalls: 0-based months, `getDay` vs `getDate`, deprecated `getYear`, UTC vs local',
      'Format dates with `Intl.DateTimeFormat`',
      'Define custom Error subclasses carrying extra context such as HTTP status'
    ],
    concepts: [
      {
        term: 'Date as a millisecond count',
        kind: 'definition',
        statement: 'A Date object stores one number: milliseconds elapsed since **1970-01-01T00:00:00 UTC**. `Date.now()` returns that number for the current instant; `date.getTime()` returns it for a Date; `valueOf()` makes dates work with arithmetic operators, so `end - start` is a millisecond difference. Dates support ±8.64 million milliseconds per day × ±100,000,000 days.',
        detail: 'Date objects are **mutable** — `setMonth` and friends change them in place — which makes shared Date instances a quiet hazard. Prefer constructing a new Date over mutating one you did not create.'
      },
      {
        term: 'Creating dates',
        kind: 'method',
        statement: 'Three constructor forms: `new Date(ms)` — from a millisecond count; `new Date(2026, 2, 3, 10, 30, 0)` — from **local-time** components, where the month field is **0-based** (0 = January, so 2 = March) and one or two arguments mean year + month only; and `new Date("2026-03-03T10:00:00Z")` — parsed from a string, where the ISO form with `Z` is UTC and reliably supported.',
        detail: 'Omitting `new` (`Date(2026, 2, 3)`) does not create a Date at all — it returns the current time as a *string*, a legacy wart. The ISO string format `YYYY-MM-DDTHH:mm:ss.sssZ` is the only one guaranteed to parse identically everywhere; `new Date("2026-03-03")` is defined as UTC midnight, while `new Date("2026/03/03")` is parsed as local time by tradition.'
      },
      {
        term: 'Getters and setters',
        kind: 'method',
        statement: 'Readers come in local and UTC flavors: `getFullYear()`, `getMonth()` (0–11!), `getDate()` (day of month 1–31), `getDay()` (day of **week**, 0 = Sunday), `getHours/getMinutes/getSeconds/getMilliseconds`, and the `getUTC...` twins; `getTime()` is the raw number. Setters mirror them (`setFullYear`, `setMonth`, ...) and **mutate** the Date, normalizing overflow — `new Date(2026, 0, 32)` is February 1st.',
        detail: 'The deprecated `getYear()` returns the year minus 1900 — use `getFullYear()`. `Date.parse(str)` converts a supported string to milliseconds without building an object.'
      },
      {
        term: 'Date arithmetic',
        kind: 'method',
        statement: 'Subtract two Date objects directly — the `-` operator coerces via `valueOf()` — to get milliseconds; divide by 86,400,000 for days. Add a duration by constructing `new Date(date.getTime() + ms)` or using the component setters, which handle month lengths and leap years for you.',
        detail: 'Two cautions: across a daylight-saving transition, “local midnight to local midnight” can be 23 or 25 hours — round day counts (`Math.round(ms / 86400000)`) or compute in UTC; and for month arithmetic use `setMonth`, because months have no fixed millisecond length.'
      },
      {
        term: 'Formatting pitfalls',
        kind: 'insight',
        statement: 'The default `toString()` family (`toString`, `toDateString`, `toTimeString`) produce locale-dependent, machine-inconsistent text; `toISOString()` is always UTC ISO format — ideal for logs and APIs; `toUTCString()` and `toLocaleString()` fill the rest. Rolling your own format means remembering the three traps: **months are 0-based**, `getDay` is the weekday while `getDate` is the day of month, and manual padding of `3` to `"03"`.',
        detail: '\n```js\nconst d = new Date(2026, 2, 3);\nd.getMonth();     // 2 — March, not February\nconst months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",\n                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];\nmonths[d.getMonth()];   // "Mar" — the classic name-table approach\n```'
      },
      {
        term: 'Intl.DateTimeFormat',
        kind: 'method',
        statement: '`new Intl.DateTimeFormat(locale, options).format(date)` produces locale-correct dates: `new Intl.DateTimeFormat("en-US", { dateStyle: "long" })` gives `"March 3, 2026"`, while the German locale gives `"3. März 2026"`. Options choose the parts (`weekday`, `year`, `month`, `day`, `hour`, `minute`, `timeZone`) and their style (`"long"`, `"short"`, `"numeric"`).',
        detail: 'Formatting objects are comparatively expensive to build — create one per locale/options pair and reuse it, rather than constructing one per date. The same object can format many dates; Section 11.6 generalizes the pattern to numbers and collation.'
      },
      {
        term: 'Error and its subclasses',
        kind: 'definition',
        statement: '`new Error(message)` creates an exception object with two useful properties: `message` and `name` (default `"Error"`), plus the nonstandard-but-universal `stack` — a string trace of where the error was created. The standard subclasses — `TypeError`, `RangeError`, `ReferenceError`, `SyntaxError`, `URIError` — signal specific failure classes, and all can be caught, inspected and re-thrown with `instanceof`.',
        detail: 'Technically `throw` accepts any value (`throw "oops"` works) — but thrown non-Errors lose the message/stack contract and break `instanceof Error` handlers, so always throw Error objects.'
      },
      {
        term: 'Custom Error subclasses',
        kind: 'method',
        statement: 'Extend `Error`, call `super(message)`, and set `this.name` to the subclass name — otherwise caught instances still report `"Error"`. Extra properties carry context (`status`, `url`, `code`), and because `class` extends wires the prototype chain, `instanceof` works for both the subclass and `Error`.',
        detail: '\n```js\nclass HTTPError extends Error {\n  constructor(status, message = "request failed") {\n    super(message);\n    this.name = "HTTPError";\n    this.status = status;\n  }\n}\n```\nES2022 adds `new Error(msg, { cause: originalError })` for wrapping lower-level failures without losing the original.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: days between two dates',
        problem: 'Compute how many days separate January 15, 2026 from March 3, 2026, then add a week to the earlier date:\n```js\nconst start = new Date(2026, 0, 15);   // Jan 15, 2026, local midnight\nconst end = new Date(2026, 2, 3);      // Mar 3, 2026, local midnight\nconst ms = end - start;\nconst days = ms / 86400000;\nnew Date(start.getTime() + 7 * 86400000);\n```',
        steps: [
          { label: 'Step 1: Build local midnights', text: 'The three-argument constructor takes (year, month, day) in **local** time — and the month argument is 0-based, so `0` is January and `2` is March. Both Dates internally store a UTC millisecond count for each local midnight.' },
          { label: 'Step 2: Subtracting Dates subtracts numbers', text: 'The `-` operator has no Date arithmetic — it calls `valueOf()` on both, producing `getTime()` values, and subtracts those: `ms = end.getTime() - start.getTime()`.' },
          { label: 'Step 3: Convert to days', text: 'One day is 86,400,000 ms. Counting calendar-wise: Jan 15 → Feb 15 is 31 days, Feb 15 → Mar 3 is 16 days (2026 is not a leap year, February has 28) — 47 days total, so `ms` is 47 × 86,400,000 = **4,060,800,000** and `days` is **47**.' },
          { label: 'Step 4: Adding a duration', text: '`start.getTime() + 7 * 86400000` shifts the raw count by one week and wraps it in a new Date: January 22, 2026 — constructing fresh rather than mutating `start`, which other code may still hold.' },
          { label: 'Step 5: The DST caveat', text: 'If the interval crosses a spring-forward or fall-back night, local midnight to local midnight is 23 or 25 hours and the division yields 46.958... — `Math.round(ms / 86400000)` recovers the calendar answer; or build both dates with `Date.UTC(...)` and count purely in UTC where days are always exact.' }
        ],
        result: '`ms` = 4,060,800,000; `days` = 47; adding 7 × 86,400,000 ms lands on January 22 — arithmetic on the raw millisecond count is the whole secret.'
      },
      {
        title: 'Formatting without the off-by-one disasters',
        problem: 'Display March 3, 2026 as a long human-readable date — first with naive getters, then with `Intl.DateTimeFormat`:\n```js\nconst d = new Date(2026, 2, 3);\nd.getMonth();            // ?\nd.getDay();              // ?\nd.getDate();             // ?\nnew Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(d);\n```',
        steps: [
          { label: 'Step 1: The month trap', text: '`d.getMonth()` returns **2** — March, because months are 0-based. Every hand-rolled format needs `getMonth() + 1` or a name table, and forgetting the `+ 1` is the most common Date bug in the language.' },
          { label: 'Step 2: The day traps', text: '`d.getDate()` is 3 — day of **month** — while `d.getDay()` is 2 — **Tuesday**, day of week with 0 = Sunday. Swapping these two produces dates like “March Tuesday, 2026” or silently wrong weekdays.' },
          { label: 'Step 3: A correct manual format', text: '`` `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}` `` yields `"3/3/2026"` — right, but it hardcodes an American shape and does no zero-padding. (`toISOString()` is not the answer here: it always renders UTC, which can shift the calendar day itself.)' },
          { label: 'Step 4: Delegate to Intl', text: '`new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(d)` returns `"March 3, 2026"` — correct names, punctuation and order for the locale, with zero manual bookkeeping. The German locale gives `"3. März 2026"` from the same Date object.' },
          { label: 'Step 5: Reuse the formatter', text: 'Formatting objects carry setup cost; hoist `const fmt = new Intl.DateTimeFormat("en-US", { dateStyle: "long" })` and call `fmt.format(...)` per date — one object, many dates.' }
        ],
        result: '`getMonth()` → 2, `getDate()` → 3, `getDay()` → 2; the Intl formatter yields `"March 3, 2026"` — the library does the names, the padding and the locale.'
      },
      {
        title: 'A custom HTTPError subclass',
        problem: 'An API wrapper must throw errors that carry the HTTP status and still work with `instanceof Error` handlers:\n```js\nclass HTTPError extends Error {\n  constructor(status, message = "request failed") {\n    super(message);\n    this.name = "HTTPError";\n    this.status = status;\n  }\n}\n\nasync function getJSON(url) {\n  const response = await fetch(url);\n  if (!response.ok) throw new HTTPError(response.status, response.statusText);\n  return response.json();\n}\n```',
        steps: [
          { label: 'Step 1: Extend and call super', text: '`class HTTPError extends Error` puts Error on the prototype chain, so `e instanceof Error` remains true for every instance — existing catch blocks keep working. `super(message)` runs the Error constructor, which sets `message` and captures a `stack` trace at construction.' },
          { label: 'Step 2: Fix the name', text: 'Without `this.name = "HTTPError"`, a caught instance still reports `e.name === "Error"`. Setting it costs one line and makes logs readable: `HTTPError: Not Found`.' },
          { label: 'Step 3: Carry the context', text: '`this.status = 404` attaches the domain data — the caller can branch on `e.status` (`if (e.status === 404) showEmptyPage()`) instead of parsing strings out of a message.' },
          { label: 'Step 4: Throw and catch', text: 'When the fetch fails, `throw new HTTPError(404, "Not Found")` unwinds to the nearest catch. There, `e instanceof HTTPError` is true, `e instanceof Error` is true, `e.message` is `"Not Found"`, `e.status` is `404`, and `e.stack` points at the construction site — five usable facts from one object.' },
          { label: 'Step 5: Compose with cause (ES2022)', text: 'To wrap a network failure: `throw new HTTPError(503, "upstream down", { cause: err })` — the third argument’s `cause` preserves the original error object for the handler that needs it, without flattening it into a message string.' }
        ],
        result: 'A catch block sees `instanceof HTTPError` true, `name` `"HTTPError"`, `status` 404, a working `stack` — custom errors are just Error subclasses with context bolted on.'
      }
    ],
    keyTakeaways: [
      'A Date is one number: milliseconds since 1970-01-01 UTC; `-` between Dates works because of `valueOf()` coercion.',
      'Component constructors use **local** time and 0-based months: `new Date(2026, 2, 3)` is March 3.',
      '`getMonth()` is 0-based; `getDate()` is day of month; `getDay()` is weekday — and `getYear()` is deprecated.',
      'Day arithmetic divides by 86,400,000 ms — round, or work in UTC, to survive daylight-saving transitions.',
      '`toISOString()` is always UTC; `Intl.DateTimeFormat` gives correct, reusable, locale-aware human formatting.',
      'Throw Error objects, not strings: they carry `message`, `name` and `stack`, and they satisfy `instanceof`.',
      'Custom subclasses: `extends Error`, `super(message)`, set `this.name`, add context fields such as `status`; ES2022 `cause` preserves wrapped errors.'
    ],
    quiz: [
      {
        q: 'What does `new Date(2026, 2, 3).getMonth()` return?',
        options: ['3 — the month number of March', '2 — months are 0-based, so March is 2', '0 — only January can be constructed that way', 'It throws a RangeError'],
        answer: 1,
        explanation: 'Date months run 0 (January) through 11 (December): the constructor field 2 selects March, and getMonth reads back that same 0-based value.'
      },
      {
        q: 'What does the expression `d2 - d1` evaluate to for two Date objects?',
        options: [
          'A new Date representing the difference',
          'The difference in milliseconds — a number, via valueOf() coercion',
          'NaN — Dates cannot be subtracted',
          'The difference in days'
        ],
        answer: 1,
        explanation: 'The subtraction operator converts both operands to primitives with valueOf(), which for Dates is the epoch-millisecond count — so the result is a plain number of milliseconds.'
      },
      {
        q: 'Which Date method always renders the timestamp in UTC?',
        options: ['`toString()`', '`toISOString()`', '`toLocaleString()`', '`toDateString()`'],
        answer: 1,
        explanation: 'toISOString always produces the ISO 8601 form in UTC (with a Z suffix); the toString family is locale-and-engine dependent and toLocaleString follows the local zone.'
      },
      {
        q: 'Why must a custom error subclass assign `this.name`?',
        options: [
          'Because name is a required constructor parameter',
          'Otherwise instances inherit the default "Error" name and log misleadingly',
          'To make instanceof work',
          'To freeze the stack trace'
        ],
        answer: 1,
        explanation: 'super(message) leaves name at "Error"; overriding it makes the exception identify itself — instanceof correctness comes from the prototype chain, not from name.'
      },
      {
        q: 'Which pair correctly distinguishes “day of month” from “day of week”?',
        options: ['`getDay()` = month day; `getDate()` = week day', '`getDate()` = month day; `getDay()` = week day (0 = Sunday)', 'Both return the day of month', 'Both return the day of week'],
        answer: 1,
        explanation: 'getDate() is 1–31 within the month; getDay() is 0–6 with 0 = Sunday — the naming is historical and backwards from every intuition, so memorize the pair.'
      }
    ]
  },

  // ---------------------------------------------------------------- 11.5
  {
    sectionId: 'js-ch11-s5',
    readingTime: 7,
    intro: 'JSON is the lingua franca of APIs — and JavaScript ships its own compiler for it: `JSON.stringify` turns values into text and `JSON.parse` turns text back into values. Both take a second argument that changes everything: a **replacer** that filters or transforms on the way out, and a **reviver** that rebuilds on the way in. The format’s limits — no `undefined`, no functions, no cycles, and `NaN` quietly becoming `null` — are exactly what those second arguments exist to work around.',
    objectives: [
      'Serialize values with `JSON.stringify`, including indentation with the space argument',
      'Use array replacers as whitelists and function replacers to transform or omit values',
      'Parse with `JSON.parse` and a reviver that reconstructs Dates and other types',
      'Predict the format’s failures: circular structures, NaN, functions, undefined and Maps',
      'Design `toJSON` methods as per-class escape hatches'
    ],
    concepts: [
      {
        term: 'JSON.stringify',
        kind: 'method',
        statement: '`JSON.stringify(value, replacer?, space?)` serializes a value to JSON text: objects become `{...}`, arrays `[...]`, strings are quoted and escaped, numbers use their `toString()` form (with `null` for the non-finite). The **space** argument — a number of spaces or a string — pretty-prints with newlines and indentation.',
        detail: '\n```js\nJSON.stringify([1, 2, 3]);            // "[1,2,3]"\nJSON.stringify({ a: 1 }, null, 2);\n// "{\\n  \\"a\\": 1\\n}" — readable, for logs and config files\n```'
      },
      {
        term: 'The replacer argument',
        kind: 'method',
        statement: 'The second argument filters what gets serialized. An **array** is a whitelist of property names, applied recursively at every nesting level. A **function** `(key, value) => value` runs for every property of every object (and once for the root with key `""`) — return the value to keep it, a different value to transform it, or `undefined` to **omit the property entirely**.',
        detail: 'The array form cannot express “hide passwords” — only “show these names” — so anything rule-based needs the function form: `JSON.stringify(user, (k, v) => k === "password" ? undefined : v)`.'
      },
      {
        term: 'toJSON',
        kind: 'method',
        statement: 'Before serializing any object, `stringify` checks for a `toJSON()` method and uses its return value instead. `Date` implements it — returning `toISOString()` — which is why Dates serialize as ISO strings automatically; user classes can do the same to define their own wire form.',
        detail: '\n```js\nclass Point {\n  constructor(x, y) { this.x = x; this.y = y; }\n  toJSON() { return [this.x, this.y]; }   // serialize as a pair\n}\nJSON.stringify(new Point(1, 5));   // "[1,5]"\n```'
      },
      {
        term: 'JSON.parse and the reviver',
        kind: 'method',
        statement: '`JSON.parse(text, reviver?)` builds plain objects, arrays and primitives from text, then calls the **reviver** function `(key, value) => value` on every property **from the deepest level up, root last**. The returned value replaces the parsed one — return a `new Date(value)` for stored date strings and Dates come back to life.',
        detail: '\n```js\nconst back = JSON.parse(text, (key, value) =>\n  key === "createdAt" ? new Date(value) : value\n);\n```\nPost-order traversal means an object’s properties are revived before the object itself — so a reviver may inspect already-revived children.'
      },
      {
        term: 'What JSON cannot represent',
        kind: 'insight',
        statement: 'The format has **no** representation for: `undefined`, functions, symbols, `NaN`/`Infinity` (all become `null`), `Map`, `Set`, `Date` (saved only as its ISO string via `toJSON`), or object identity. **Circular structures throw `TypeError: Converting circular structure to JSON`.** In objects, `undefined`/function/symbol properties are dropped; in **arrays** they become `null`, so positions survive.',
        detail: '\n```js\nJSON.stringify({ n: NaN, i: Infinity });        // {"n":null,"i":null}\nJSON.stringify({ f() {}, u: undefined });        // {}\nJSON.stringify([1, undefined, 2]);              // "[1,null,2]"\nconst a = {}; a.self = a;\nJSON.stringify(a);                               // TypeError\n```'
      },
      {
        term: 'The class-revival pattern',
        kind: 'method',
        statement: 'To round-trip class instances, have `toJSON` add a type tag plus raw data, and have the reviver read the tag and rebuild: `toJSON() { return { _class: "Point", x: this.x, y: this.y }; }` — the reviver sees `_class` and constructs a real instance. This is the pattern behind every JSON-persisted object store.',
        detail: 'It restores the constructor information JSON deliberately discards — the text says what it *was*, the reviver decides what it *becomes*. For plain deep copies, prefer `structuredClone` (which understands Map, Set, Date and typed arrays); JSON round-trips only what JSON can say.'
      }
    ],
    examples: [
      {
        title: 'Trace the engine: selective serialization',
        problem: 'Serialize a user record for a public audit log — name and email only, pretty-printed — then serialize the whole record minus the password:\n```js\nconst user = {\n  name: "Ada",\n  email: "ada@example.com",\n  password: "hunter2",\n  attempts: 3,\n  createdAt: new Date("2026-01-15")\n};\n```',
        steps: [
          { label: 'Step 1: The array replacer as whitelist', text: '`JSON.stringify(user, ["name", "email"], 2)` walks the object keeping only properties named in the array — recursively, so a nested `{ name, email }` object would also be filtered to the same fields. `password`, `attempts` and `createdAt` never make the output.' },
          { label: 'Step 2: The output', text: 'The result is the two-line pretty-printed object `{ "name": "Ada", "email": "ada@example.com" }` — the `2` indents every level two spaces, which is what makes audit logs diffable.' },
          { label: 'Step 3: The function replacer as rule', text: '`JSON.stringify(user, (key, value) => key === "password" ? undefined : value)` is called first for the root (`key === ""`, value = the whole `user`), then once per property. Returning `undefined` for `"password"` **omits** that key; everything else passes through untouched.' },
          { label: 'Step 4: Watch the automatic Date handling', text: 'The function version keeps `createdAt` — and it appears in the output as `"2026-01-15T00:00:00.000Z"`, because `stringify` consults Date’s built-in `toJSON()` method before the replacer even sees the value.' },
          { label: 'Step 5: Choose deliberately', text: 'Whitelist when the safe set is small and known (public API payloads); rule-based when the structure is deep or the condition is comparative (hide any key matching `/token/i`). Both beat deleting properties from the source object — which mutates data other code may still need.' }
        ],
        result: 'The whitelist gives `{"name": "Ada", "email": "ada@example.com"}` indented; the function gives the full record with only the password gone — two replacer styles, two intents.'
      },
      {
        title: 'Reviving Dates on the way in',
        problem: 'A JSON string contains a `createdAt` field as an ISO date string. Parse it back so `createdAt` is a real `Date` again:\n```js\nconst text = JSON.stringify(user);\nconst back = JSON.parse(text, (key, value) =>\n  key === "createdAt" ? new Date(value) : value\n);\nback.createdAt instanceof Date;\n```',
        steps: [
          { label: 'Step 1: Parse builds plain data first', text: 'Without a reviver, `JSON.parse` would produce `back.createdAt` as the *string* `"2026-01-15T00:00:00.000Z"` — JSON has no date type, so every date arrives as text.' },
          { label: 'Step 2: The reviver walks depth-first', text: 'The reviver is invoked **post-order** — deepest properties first, the root object last (its key is the empty string). For our record: `name`, `email`, `password`, `attempts`, `createdAt`, then `""`.' },
          { label: 'Step 3: Transform on sight', text: 'At `key === "createdAt"` the reviver returns `new Date(value)`: the string is parsed by the Date constructor (ISO strings parse as UTC — the exact form `toJSON` produced), and the parsed value becomes the property value.' },
          { label: 'Step 4: Verify the revival', text: '`back.createdAt instanceof Date` is `true` and `back.createdAt.getFullYear()` returns `2026` — calendar arithmetic is available again. A more general reviver tests the value’s shape (`/^\\d{4}-\\d{2}-\\d{2}T/`) instead of one key name, reviving every ISO date anywhere in the structure.' }
        ],
        result: 'Dates live in JSON only as strings — but the reviver converts them back to Date objects on every parse, restoring the type system JSON refuses to carry.'
      },
      {
        title: 'The four ways stringify drops your data',
        problem: 'Predict the output or error of each call:\n```js\nJSON.stringify({ n: NaN, i: Infinity });\nJSON.stringify({ f() {}, u: undefined, s: Symbol("x") });\nJSON.stringify([1, undefined, 2]);\nconst a = {}; a.self = a; JSON.stringify(a);\n```',
        steps: [
          { label: 'Step 1: Non-finite numbers become null', text: 'JSON numbers have no `NaN` or `Infinity`, so both are serialized as `null`: the first call returns `{"n":null,"i":null}` — a silent type change that readers of the log must simply know about.' },
          { label: 'Step 2: Unserializable properties vanish from objects', text: 'Functions, `undefined` and symbols are simply **omitted** from object output: the second call returns `{}` — no `f`, no `u`, no `s`, and no error. Empty is not a bug report; it is the format speaking.' },
          { label: 'Step 3: But arrays preserve positions', text: 'Removing a middle array element would corrupt every later index, so `undefined` and friends become `null` placeholders instead: the third call returns `"[1,null,2]"` — note the *different* rule for arrays versus objects.' },
          { label: 'Step 4: Cycles throw', text: 'The fourth call throws `TypeError: Converting circular structure to JSON` — the serializer, having no reference syntax, refuses to loop forever. The fixes: a `toJSON()` that returns a safe, acyclic view; or a replacer that detects and skips the back-reference.' },
          { label: 'Step 5: Read the rules as a design tool', text: 'Knowing exactly what drops is how JSON is used for *public shapes*: put only data in the objects you serialize. When types must survive — Maps, Sets, class identity — either add tag-and-revive logic (the `toJSON` pattern above) or use `structuredClone`, which understands them.' }
        ],
        result: '`{"n":null,"i":null}`, then `{}`, then `"[1,null,2]"`, then a `TypeError` — four data-loss behaviors, each with its own rationale and workaround.'
      }
    ],
    keyTakeaways: [
      '`JSON.stringify(value, replacer, space)`: the replacer filters (array = whitelist, function = transform or omit via `undefined`), the space pretty-prints.',
      'A function replacer runs for every key at every depth, root first with key `""`; returning `undefined` deletes the property from the output.',
      '`toJSON()` defines a class’s own wire format — Date uses it to emit ISO strings; stringify consults it before anything else.',
      '`JSON.parse(text, reviver)` invokes the reviver post-order — deepest properties first, root last — letting each value be replaced or rebuilt.',
      'JSON cannot say `undefined`, functions, symbols, `Map`/`Set`, or non-finite numbers: `NaN`/`Infinity` become `null`, objects drop the properties, arrays keep positions with `null`.',
      'Circular structures throw `TypeError` — break the cycle with `toJSON` or a replacer; use the `_class` tag-and-revive pattern to round-trip instances.'
    ],
    quiz: [
      {
        q: 'What does `JSON.stringify({ a: NaN })` produce?',
        options: ['`{"a":NaN}`', '`{"a":null}` — NaN is not representable and becomes null', 'It throws a TypeError', '`{}` — the property is dropped'],
        answer: 1,
        explanation: 'JSON numbers exclude NaN and Infinity, so both serialize as null — the value survives as a placeholder, unlike undefined/function values in objects, which vanish entirely.'
      },
      {
        q: 'How do `undefined` values behave differently in objects versus arrays during stringification?',
        options: [
          'They are dropped from objects but replaced with null in arrays, preserving positions',
          'They are dropped everywhere',
          'They become null everywhere',
          'They throw in arrays but not objects'
        ],
        answer: 0,
        explanation: 'Object properties that cannot be serialized are omitted; array elements become null, because deleting a middle element would silently renumber the rest.'
      },
      {
        q: 'What does `JSON.stringify(user, ["name", "email"])` do?',
        options: [
          'Serializes only the properties named in the array, at every nesting level',
          'Renames the properties to name and email',
          'Sorts all properties and keeps the first two',
          'Throws if user has more than two properties'
        ],
        answer: 0,
        explanation: 'The array replacer is a recursive whitelist: only listed keys appear in the output, at every depth — the quick way to build a public projection of an object.'
      },
      {
        q: 'A function replacer returns `undefined` for a key. What happens?',
        options: [
          'The property is serialized with the string "undefined"',
          'The property is omitted from the JSON output entirely',
          'Stringification throws',
          'The value is replaced with null'
        ],
        answer: 1,
        explanation: 'Returning undefined from the replacer deletes the key from the output — the mechanism behind hiding passwords and other secrets.'
      },
      {
        q: 'In what order is a reviver called by `JSON.parse`?',
        options: [
          'Root first, then top-down through the levels',
          'Deepest properties first, with the root object last (key "")',
          'In the order the keys appear in the text, depth irrelevant',
          'Once per top-level property only'
        ],
        answer: 1,
        explanation: 'Revivers run post-order: children are revived before their parents, so by the time an object is processed its transformed children are already in place — and the root is the final call with an empty-string key.'
      },
      // Placement-pattern: JSON serialization — dropped versus nulled values (original)
      {
        q: "What does this program print?\n```js\nconsole.log(JSON.stringify({\n  a: 1,\n  b: undefined,\n  c: () => {},\n  d: [1, undefined, 2]\n}));\n```",
        options: ["`{\"a\":1,\"b\":null,\"c\":null,\"d\":[1,null,2]}`", "`{\"a\":1,\"d\":[1,null,2]}`", "A TypeError, because functions are not serializable", "`{\"a\":1}`"],
        answer: 1,
        explanation: "Step 1: The code given stringifies an object mixing a number, `undefined`, a function, and an array containing `undefined`. Step 2: The governing rules are that `JSON.stringify` drops object properties whose values are `undefined`, functions, or symbols, while it converts those same values to `null` when they appear as array elements. Step 3: Tracing key by key, `a` serializes normally, `b` and `c` are dropped entirely, and `d` serializes with its middle hole rendered as `null`, giving `{\"a\":1,\"d\":[1,null,2]}`. Step 4: The distractors fail because no error is raised for unserializable values, `null` placeholders never appear for dropped object keys, and the array survives with its hole nulled. Step 5: Therefore the printed string keeps `a` and `d` only."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.6
  {
    sectionId: 'js-ch11-s6',
    readingTime: 8,
    intro: 'JavaScript ships an internationalization engine: under the `Intl` namespace, **Collator** compares strings the way humans do, **NumberFormat** formats numbers and currency per locale, and **DateTimeFormat** (Section 11.4) does the same for dates. Alongside them, the **console** API goes far beyond `log` with tables, timers and stack traces, and the **URL** class parses and edits web addresses whose query strings are managed by `URLSearchParams` — the last piece being the difference between guessing at query parameters and reading them.',
    objectives: [
      'Sort strings locale-correctly with Intl.Collator, including natural numeric ordering',
      'Format numbers and currency with Intl.NumberFormat',
      'Use the console surface: format strings, tables, timers, trace, assert',
      'Parse URLs with the URL class and read their structural parts',
      'Read, test and mutate query strings with URLSearchParams'
    ],
    concepts: [
      {
        term: 'Intl and locale tags',
        kind: 'definition',
        statement: 'The `Intl` object is the namespace for locale-aware behavior, parameterized by **BCP 47 language tags**: `"en"`, `"en-US"`, `"fr-CA"`, `"de-DE"`. The same data formats differently per locale — 12345.6 is `"12,345.6"` in en-US but `"12.345,6"` in de-DE — and every Intl constructor takes the tag (or `undefined` for the runtime default) plus an options object.',
        detail: 'Construct a formatter once and reuse it: building an `Intl` object is comparatively expensive, formatting through it is cheap — hoist formatters the way you would hoist compiled regexes.'
      },
      {
        term: 'Intl.Collator',
        kind: 'method',
        statement: '`new Intl.Collator(locale, options)` builds a comparator whose `compare(a, b)` sorts strings by locale rules: accented letters fold toward their base letter, and the `numeric: true` option sorts embedded numbers **by value** ("Response2" before "Response10"). Options include `sensitivity` (`"base"`, `"accent"`, `"case"`, `"variant"`) and `ignorePunctuation`.',
        detail: '\n```js\n["b", "A", "à"].sort(new Intl.Collator("fr").compare);\n// ["A", "b", "à"] — roughly letter order, accents handled\n```'
      },
      {
        term: 'Intl.NumberFormat',
        kind: 'method',
        statement: '`new Intl.NumberFormat(locale, options).format(n)` formats numbers: grouping separators and decimal marks per locale; `style: "currency"` with `currency: "EUR"` adds symbols and placement; `style: "percent"` multiplies by 100 and appends the sign; further options fix `minimumFractionDigits` or `notation: "compact"` (12k).',
        detail: '\n```js\nnew Intl.NumberFormat("en-US").format(12345.6);            // "12,345.6"\nnew Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(12345.6);\n// "12.345,60 €"\n```\nParsing back is not this API’s job — never round-trip money through formatted strings.'
      },
      {
        term: 'The console API',
        kind: 'method',
        statement: 'Beyond `console.log` and `console.error`/`warn`/`info` (each with its own severity styling), the console understands **printf-style placeholders** — `%s` string, `%d`/`%i` integer, `%f` float, `%o`/`%O` object, `%c` CSS — plus `console.table(data)` for aligned grids, `console.time(label)` / `console.timeEnd(label)` pairs for millisecond timings, `console.trace()` to print the current stack, `console.count(label)` to tally calls, and `console.assert(cond, msg)` which prints only on failure.',
        detail: '\n```js\nconsole.log("user %s (id %d)", user.name, user.id);\nconsole.time("sort");\nitems.sort();\nconsole.timeEnd("sort");      // "sort: 3.7ms"\n```'
      },
      {
        term: 'The URL class',
        kind: 'definition',
        statement: '`new URL(absoluteUrl)` — or `new URL(relativeUrl, baseUrl)` — parses an address into structural parts exposed as properties: `protocol`, `hostname`, `port`, `host`, `pathname`, `search` (with its leading `?`), `hash` (with its `#`), the read-only `origin`, and the whole `href`. The parts are **live**: assign `url.pathname = "/x"` and `url.href` updates; the constructor also normalizes and validates, throwing on hopeless input.',
        detail: '\n```js\nconst u = new URL("https://api.example.com:8443/search?q=js#top");\nu.hostname;   // "api.example.com"\nu.port;       // "8443"\nu.search;     // "?q=js"\nu.hash;       // "#top"\nu.origin;     // "https://api.example.com:8443"\n```'
      },
      {
        term: 'URLSearchParams',
        kind: 'method',
        statement: '`url.searchParams` is a **URLSearchParams** object — also constructible alone from `"q=js&page=2"` — that manages a query string as ordered key/value pairs: `get(key)` (first value, as a **string**), `getAll(key)` (every value for repeated keys), `has`, `set(key, value)` (replaces *all* values of the key), `append` (adds another), `delete`, `sort`, and iteration as `[key, value]` pairs. Mutations write straight through to `url.search` and `url.href`, with percent-encoding handled automatically.',
        detail: 'The two classic bugs this class kills: comparing `params.get("page")` to the *number* 2 (it is the string `"2"`), and hand-concatenating query strings without encoding — `URLSearchParams.toString()` always emits correct `&`-joined, percent-encoded output.'
      }
    ],
    examples: [
      {
        title: 'Sorting like a human: Collator and currency formatting',
        problem: 'Sort the names `["Répillion", "zebra", "èclair", "apple"]` alphabetically (the way a French reader expects), sort version-ish strings numerically, and format a price for German and American users:\n```js\nconst names = ["Répillion", "zebra", "èclair", "apple"];\n[...names].sort();\n[...names].sort(new Intl.Collator("fr").compare);\n\n["Response10", "Response9", "Response2"]\n  .sort(new Intl.Collator("en", { numeric: true }).compare);\n\nnew Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(12345.6);\nnew Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(12345.6);\n```',
        steps: [
          { label: 'Step 1: Default sort is by code units', text: '`[...names].sort()` compares UTF-16 code units: every uppercase letter sorts before every lowercase one, and accented characters sort near the end. The result is `["Répillion", "apple", "zebra", "èclair"]` — `"Répillion"` first because `R` (82) is less than `a` (97) — alphabetical only by accident.' },
          { label: 'Step 2: The collator knows the alphabet', text: 'With `new Intl.Collator("fr").compare`, `é` folds toward `e` and case is handled by the locale’s rules: the result is `["apple", "èclair", "Répillion", "zebra"]` — what a French reader calls alphabetical order. The comparator is a real function object, so it drops into `sort` directly.' },
          { label: 'Step 3: Natural numeric ordering', text: 'Plain comparison says `"Response10" < "Response2"` because it compares character by character (`"1" < "2"`). With `numeric: true`, embedded digit runs compare **as numbers**: `["Response2", "Response9", "Response10"]` — the ordering file lists, invoices and version numbers actually need.' },
          { label: 'Step 4: Currency per locale', text: 'The German formatter returns `"12.345,60 €"` — dot as thousands separator, comma as decimal mark, symbol after the number. The American formatter returns `"$12,345.60"` — the same number, two conventions, zero manual string surgery.' },
          { label: 'Step 5: Hoist the objects', text: 'Collators and formatters are built once and reused: construct them at module scope (Section 10.1) and call `compare`/`format` per item — the expensive locale data is consulted at construction.' }
        ],
        result: 'French order `["apple", "èclair", "Répillion", "zebra"]`, natural order `["Response2", "Response9", "Response10"]`, and `"12.345,60 €"` / `"$12,345.60"` — locale-aware output with no hand-rolled rules.'
      },
      {
        title: 'Trace the engine: query strings with URLSearchParams',
        problem: 'Parse the URL `https://api.example.com/search?q=js&page=2&tags=modules&tags=es6`, read its parameters safely, then build a modified request URL:\n```js\nconst url = new URL("https://api.example.com/search?q=js&page=2&tags=modules&tags=es6");\nconst p = url.searchParams;\np.get("q");\np.get("page");\np.getAll("tags");\np.set("page", "3");\np.append("sort", "stars");\nurl.href;\n```',
        steps: [
          { label: 'Step 1: The URL constructor does the parsing', text: '`new URL(...)` validates and splits the address — no regex required (Section 11.3 is for fun; this is for production). The query string lives at `url.search` as `"?q=js&page=2&tags=modules&tags=es6"`.' },
          { label: 'Step 2: Single and repeated values', text: '`p.get("q")` returns `"js"` — and `p.get("page")` returns `"2"`, **a string**: comparing it with `=== 2` is false, the single most common query-string bug. `p.getAll("tags")` returns `["modules", "es6"]` — the two values of the repeated key, in order.' },
          { label: 'Step 3: Test before trusting', text: '`p.has("sort")` returns `false` here, and `p.get("missing")` returns `null` — distinguish absence (`null`) from present-but-empty (`""`) in validation code.' },
          { label: 'Step 4: Mutations replace or append', text: '`p.set("page", "3")` first **removes every existing value of the key**, then adds one — `page` is now 3, and it would have collapsed multiple `page` values had there been any. `p.append("sort", "stars")` adds a second value if `sort` already existed, or creates the key.' },
          { label: 'Step 5: The URL updates itself', text: 'The searchParams object is a live view: after the mutations, `url.search` is `"?q=js&page=3&tags=modules&tags=es6&sort=stars"` and `url.href` carries the full updated address — encoding, separators and all, ready for `fetch(url)`.' }
        ],
        result: '`"js"`, the string `"2"`, `["modules", "es6"]` — then a rewritten URL with `page=3` and `sort=stars`, all through the live view: never build a query string by concatenation again.'
      },
      {
        title: 'The console beyond log',
        problem: 'Instrument a sorting routine with each console facility and predict what each line contributes during debugging:\n```js\nconst users = [{ name: "ada", id: 7 }, { name: "grace", id: 12 }];\nconsole.log("loaded %d users", users.length);\nconsole.table(users);\nconsole.time("sort");\nusers.sort((a, b) => a.id - b.id);\nconsole.timeEnd("sort");\nconsole.trace("reached sort block");\nconsole.assert(users.length > 0, "users must not be empty");\n```',
        steps: [
          { label: 'Step 1: Format strings keep logs tidy', text: '`console.log("loaded %d users", 2)` substitutes the placeholder — `%s`, `%d`, `%f`, `%o` are the useful set — so the log statement reads like a sentence instead of an object dump.' },
          { label: 'Step 2: Tables align objects', text: '`console.table(users)` renders the array as a grid with columns for the index and each property — the fastest way to eyeball a list of homogeneous records in a browser console or Node terminal.' },
          { label: 'Step 3: Timers bracket the work', text: '`console.time("sort")` starts a labeled millisecond clock; `console.timeEnd("sort")` stops it and prints something like `"sort: 0.4ms"` — a zero-setup benchmark, precise enough to compare before/after a rewrite.' },
          { label: 'Step 4: Traces answer "how did I get here?"', text: '`console.trace(...)` logs the message **plus the call stack** that reached it — the poor developer’s stack trace, inserted at exactly the suspicious line.' },
          { label: 'Step 5: Assertions fail loudly', text: '`console.assert(cond, msg)` prints the message (with a stack, in Node) **only when the condition is false** — here `users.length > 0` is true, so nothing prints. It documents invariants without polluting successful runs.' }
        ],
        result: 'One line, one table, one measured timing, an on-demand stack trace and a silent invariant check — the console is a lightweight instrumentation suite, not just a print function.'
      }
    ],
    keyTakeaways: [
      'Intl objects are locale-parameterized: construct once, reuse — comparison and formatting are cheap after construction is paid for.',
      'Intl.Collator sorts the way readers expect: accent folding per locale, and `numeric: true` for natural number ordering.',
      'Intl.NumberFormat handles grouping separators, decimal marks, currency symbols and placement per locale — never hand-place a thousands separator again.',
      'The console supports `%s`/`%d`/`%o` placeholders, `table`, `time`/`timeEnd`, `trace`, `count` and `assert`.',
      '`new URL(str, base?)` parses an address into live structural parts; `origin` is read-only, everything else is assignable.',
      '`url.searchParams` is a live URLSearchParams view: `get` returns strings (first value), `getAll` returns repeats, `set` replaces all values of a key, `append` adds — and mutations rewrite `url.href` with correct encoding.'
    ],
    quiz: [
      {
        q: 'Why does `["Response10", "Response2"].sort()` put "Response10" first?',
        options: [
          'Because numbers sort before letters',
          'Because the default sort compares UTF-16 code units character by character, and "1" < "2"',
          'Because sort is stable and preserves input order',
          'It does not — Response2 comes first by default'
        ],
        answer: 1,
        explanation: 'Default sort is lexicographic by code units: at the first differing character, "1" (49) precedes "2" (50). Use `new Intl.Collator("en", { numeric: true }).compare` to compare digit runs by value.'
      },
      {
        q: 'What type does `url.searchParams.get("page")` return for `?page=2`?',
        options: ['The number 2', 'The string "2"', 'A URLSearchParams singleton', 'It depends on the locale'],
        answer: 1,
        explanation: 'Query values are always strings — `params.get("page") === 2` is false; convert explicitly (`Number(params.get("page"))`) when numbers are needed.'
      },
      {
        q: 'What is the difference between `params.set("tag", "a")` and `params.append("tag", "b")` when `tag` already has values?',
        options: [
          'set adds another value; append replaces all values',
          'set replaces ALL existing values of the key with one new value; append adds a value alongside existing ones',
          'They are synonyms',
          'set throws if the key exists'
        ],
        answer: 1,
        explanation: 'set removes every prior value of the key first, then installs one; append always adds — which is how repeated keys like tags accumulate.'
      },
      {
        q: 'Which console pair measures elapsed milliseconds?',
        options: ['`console.log` and `console.error`', '`console.time(label)` and `console.timeEnd(label)`', '`console.count` and `console.countReset`', '`console.assert` and `console.trace`'],
        answer: 1,
        explanation: 'time starts a labeled clock and timeEnd stops it, printing the elapsed duration — labels let multiple measurements interleave.'
      },
      {
        q: 'What does `new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(12345.6)` return?',
        options: ['"$12,345.60"', '"12.345,60 €" — German separators and trailing symbol', '"€12,345.6"', '"12.345,6 EUR" — same separators, no symbol'],
        answer: 1,
        explanation: 'German formatting uses dots for grouping and a comma decimal mark, and places the euro symbol after the number — all handled by the locale data, not by your code.'
      }
    ]
  }
]
