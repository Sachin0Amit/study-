import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 7: Arrays (Sections 7.1 – 7.5 distilled)
// Master study content — code-first: `inline code` + fenced ``` blocks ```.
// ============================================================================

export const jsCh7Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: "js-ch7-s1",
    readingTime: 8,
    intro: "An array is an ordered collection of numbered values — and in JavaScript it is a specialized object: indices are string keys that merely look numeric, and the automatic `length` property is what makes those keys behave like positions. This section covers the four creation routes, the read/write rules for elements, and the precise law that ties `length` to the highest index.",
    objectives: [
      "Create arrays with literals, the spread operator, Array.of and Array.from",
      "Read and write elements with bracket index expressions",
      "State the rule that defines length as one more than the highest index",
      "Predict when writes grow the array, create holes, or truncate it"
    ],
    concepts: [
      {
        term: "Array",
        kind: "definition",
        statement: "An **array** is an **ordered collection of values**, each called an **element** and numbered by a non-negative integer **index** starting at 0. An array is really a specialized object: the index is the string key `\"0\"`, `\"1\"`, `\"2\"` and so on, plus one special own property, `length`.",
        detail: "```\nlet primes = [2, 3, 5, 7, 11];\nprimes[0]     // 2 — bracket access with the numeric index\nprimes.length // 5\n```\nAny JavaScript value may be an element — including `undefined`, objects, and other arrays."
      },
      {
        term: "Array literals",
        kind: "method",
        statement: "The **array literal** is a comma-separated list of expressions between square brackets: `[1, 2, 3]`. It is an expression, evaluated fresh each time it runs (a loop pushing `[0, 0]` creates a new pair per iteration); an empty literal `[]` is the idiomatic empty array, and a trailing comma is allowed.",
        detail: "```\nlet a = [1, 2, 3];\nlet mixed = [1, \"two\", { three: 3 }, [4, 5]];\nlet empty = [];\n```\nElements may nest arbitrarily — the last element of `mixed` is itself an array, the seed of the multidimensional arrays of Section 7.5."
      },
      {
        term: "Spread operator in array literals",
        kind: "method",
        statement: "The **spread operator** `...` inside a literal expands an **iterable** (another array, a string, a Set) into elements: `let copy = [...original]` makes a new array with the same elements in order. Spread at the top level is the idiomatic copy, concat and combine.",
        detail: "```\nlet a = [1, 2, 3];\nlet b = [...a];       // [1, 2, 3] — a new array, same elements\nlet c = [0, ...a, 4]; // [0, 1, 2, 3, 4]\n[...\"abc\"]            // [\"a\", \"b\", \"c\"] — strings are iterable\n```\nSpread copies elements (shallow), never the array object itself — `b.push(4)` leaves `a` untouched."
      },
      {
        term: "Array.of()",
        kind: "method",
        statement: "**`Array.of(...values)`** creates an array from its arguments, always treating them as elements. It exists to fix the notorious single-number behavior of the `Array()` constructor: `Array.of(3)` is `[3]`, while `new Array(3)` is a length-3 array with three holes and no elements.",
        detail: "```\nArray.of()        // []\nArray.of(3)       // [3]\nnew Array(3)      // length 3, zero elements present (Section 7.2)\nArray.of(1, 2, 3) // [1, 2, 3]\n```\n`Array.of` is one of two **static array functions** — the other being `Array.from` — and the reason to prefer it over `new Array(...)` is entirely the one-argument case."
      },
      {
        term: "Array.from()",
        kind: "method",
        statement: "**`Array.from(iterableOrArrayLike, mapFn?)`** builds a true array from anything iterable or array-like, optionally passing each element through `mapFn` first. It is the bridge between the array world and everything that merely resembles arrays — strings, Sets, `arguments`, NodeLists (Section 7.5).",
        detail: "```\nArray.from([1, 2, 3], x => x * x)    // [1, 4, 9]\nArray.from(\"abc\")                     // [\"a\", \"b\", \"c\"]\nArray.from({ length: 3 }, (_, i) => i) // [0, 1, 2]\n```\nThe mapping function runs during the copy — one pass instead of copy-then-map — and receives `(element, index)` like every array callback."
      },
      {
        term: "Reading and writing elements",
        kind: "method",
        statement: "Element access is bracket notation: `a[i]` converts `i` to a string and looks it up. **Out-of-bounds reads never throw** — they return `undefined`. **Writes to a non-negative integer index below `2**32 - 2` always work**: a write beyond the current end grows the array, and a write to a negative or non-integer key does not touch the array as an array at all — it just adds a property that happens to live on the object.",
        detail: "```\nlet a = [\"a\", \"b\", \"c\"];\na[0]          // \"a\"\na[3]          // undefined — out of bounds, no error\na[-1]         // undefined — negative keys are not indices\na[\"0\"]       // \"a\" — same element: the index is the string \"0\"\na[10000] = 1; // length becomes 10001\n```"
      },
      {
        term: "The length property",
        kind: "law",
        statement: "`length` is always **one more than the highest index present** (for dense arrays, simply the element count). It is writable in both directions: a **smaller** value instantly **truncates** the array, discarding the tail; a larger value grows the array with holes and loses nothing.",
        detail: "```\nlet a = [1, 2, 3, 4, 5];\na.length = 3;    // a is [1, 2, 3] — 4 and 5 are gone\na.length = 5;    // [1, 2, 3, , , ] — holes where 4, 5 were\na[a.length] = 6; // append — the idiomatic pre-push form\n```\nTruncation via `length` is destructive and permanent: there is no undo for the discarded elements."
      }
    ],
    examples: [
      {
        title: "Trace the engine: four creation routes, one resulting array",
        problem: "Produce the array `[1, 2, 3]` each of the four ways, and state what each route is uniquely good at.",
        steps: [
          { label: "Step 1: Literal", text: "```\nlet a1 = [1, 2, 3];\n```\nBest when you can see the elements in the source — a fresh array per evaluation." },
          { label: "Step 2: Spread of another array", text: "```\nlet source = [1, 2, 3];\nlet a2 = [...source];\n```\nBest for copying or combining: `a2` shares no identity with `source` — push to one and the other is unchanged (though nested objects are shared)." },
          { label: "Step 3: Array.of", text: "```\nlet a3 = Array.of(1, 2, 3);\n```\nBest when the elements arrive as an argument list — and the only safe choice when a single number might be the sole element, where `new Array(3)` would build three holes." },
          { label: "Step 4: Array.from with a map function", text: "```\nlet a4 = Array.from({ length: 3 }, (_, i) => i + 1);\n```\nBest for generated and transformed arrays — the second argument transforms during the copy, so `a4` is `[1, 2, 3]` without a separate `.map` pass." },
          { label: "Step 5: The common guarantee", text: "All four produce genuine arrays: `Array.isArray` is `true` for each, each has the full method set of Section 7.4, and each starts dense (no holes)." }
        ],
        result: "Four routes to `[1, 2, 3]`: write it down, spread an existing one, list it with `Array.of`, or generate it with `Array.from` — the choice is about where the elements come from."
      },
      {
        title: "Trace the engine: Array.from with a mapping function",
        problem: "Trace `Array.from({ length: 4 }, (_, i) => i * i)` element by element, then the string-mapping form `Array.from(\"cat\", c => c.toUpperCase())`.",
        steps: [
          { label: "Step 1: The array-like first argument", text: "`{ length: 4 }` is not an array — it is an **array-like** object with a length and no elements (reads yield `undefined`). `Array.from` treats it as four slots." },
          { label: "Step 2: The callback runs per slot", text: "Slot 0: the element is `undefined`, the index is `0`, so `(_, 0) => 0 * 0` produces `0`. Slot 1: `1 * 1` = `1`. Slot 2: `2 * 2` = `4`. Slot 3: `3 * 3` = `9`." },
          { label: "Step 3: The result", text: "`[0, 1, 4, 9]` — a generated array, built and transformed in a single pass. The conventional `_` names the ignored element argument." },
          { label: "Step 4: The string form", text: "`\"cat\"` is iterable, so `Array.from(\"cat\", c => c.toUpperCase())` iterates its three characters — `\"c\"`, `\"a\"`, `\"t\"` — mapping each to its uppercase form: `[\"C\", \"A\", \"T\"]`." },
          { label: "Step 5: Why not copy then map", text: "`Array.from(x).map(f)` gives the same answer in two passes; the map-function argument is the built-in single-pass version — the pattern `map` and `flatMap` make idiomatic in Section 7.4." }
        ],
        result: "`[0, 1, 4, 9]` and `[\"C\", \"A\", \"T\"]` — Array.from turns array-likes, iterables and strings into real arrays, transforming along the way."
      },
      {
        title: "Trace the engine: length obeys the highest index",
        problem: "Starting from `let a = [];` trace `a[5] = true`, then `a.length = 2`, then `a[1] = 7`, then `a[a.length] = 9`, and report the array and its length after each step.",
        steps: [
          { label: "Step 1: The far write", text: "`a[5] = true` sets index 5; `length` jumps from 0 to **6** — one more than the highest index. Indices 0 through 4 do not exist (holes), which Section 7.2 examines closely." },
          { label: "Step 2: The truncating write", text: "`a.length = 2` shrinks the array: index 5 (and 2 through 4) are discarded. The array is now length 2 with both slots holes — `1 in a` is still false, and `a[5]` now reads `undefined` because it is out of bounds." },
          { label: "Step 3: Refill", text: "`a[1] = 7` fills the second slot: length stays 2 (index 1 < length), and now `a` is `[hole, 7]` — `a[0]` still undefined-by-absence and `a[1]` equal to 7." },
          { label: "Step 4: The append idiom", text: "`a[a.length] = 9` writes index 2, the first position past the end — length becomes 3. This grows-by-one is exactly what `push` does for you (Section 7.3)." },
          { label: "Step 5: The rule check", text: "After every step, length was exactly one more than the highest present index — the invariant the engine maintains for you and that a manual `length` write can bend or snap." }
        ],
        result: "After the sequence: `a[5] = true` gives length 6; truncation to 2 discards indices 2 through 5; `a[1] = 7` fills in place; `a[a.length] = 9` appends — length tracks the top index plus one at every moment."
      }
    ],
    keyTakeaways: [
      "An array is a specialized object whose indices are string keys plus the special `length` property.",
      "Four creation routes: literal, spread `[...a]`, `Array.of(...)` (fixes the `new Array(3)` hole trap), `Array.from(x, mapFn)` for array-likes and iterables.",
      "Out-of-bounds reads return `undefined`; writes to valid indices always succeed and may grow the array.",
      "`length` is one more than the highest index; writing a smaller value truncates permanently, writing a larger one creates holes.",
      "Spread copies elements into a new array — shallowly, like every copy in this language.",
      "`a[a.length] = x` appends by hand; `Array.from` with a map function builds generated arrays in one pass."
    ],
    quiz: [
      {
        q: "What is the result of `Array.of(3)` versus `new Array(3)`?",
        options: [
          "both are [3]",
          "[3] versus an empty array of length 3",
          "both are arrays of length 3",
          "an error versus [3]"
        ],
        answer: 1,
        explanation: "Array.of treats its arguments as elements; the Array constructor treats a single number as a length, producing three holes and no elements."
      },
      {
        q: "After `let a = [1, 2, 3]; a[10] = 4;` what is `a.length`?",
        options: ["4", "11", "10", "undefined"],
        answer: 1,
        explanation: "The highest index is now 10, and length is defined as one more than the highest index — indices 3 through 9 become holes."
      },
      {
        q: "The expression `a[\"2\"]` where `a = [10, 20, 30]` evaluates to:",
        options: [
          "undefined, because the key is a string",
          "30, because the key is the same string the array stores for index 2",
          "an error",
          "the string \"30\""
        ],
        answer: 1,
        explanation: "Bracket notation converts its expression to a string key, and the key stored for the third element is the string \"2\" — so the lookup succeeds."
      },
      {
        q: "Setting `a.length = 0` on a dense array of five elements:",
        options: [
          "throws a TypeError",
          "leaves the elements accessible but reports length 0",
          "removes every element — the array is empty",
          "fills the array with undefined"
        ],
        answer: 2,
        explanation: "Writing a smaller length truncates the array permanently: every element at or beyond the new length is discarded, making length 0 the classic clear-the-array move."
      }
    ]
  },

  // ---------------------------------------------------------------- 7.2
  {
    sectionId: "js-ch7-s2",
    readingTime: 7,
    intro: "Most JavaScript arrays are **dense** — every index from 0 to length − 1 holds a real element. But nothing enforces that: `delete`, sparse literals, a growing `length`, or `new Array(n)` all create **holes** — missing indices that read as `undefined` yet are not elements at all. This section makes the hole/`undefined` distinction precise and traces the differences through existence tests, iteration and JSON.",
    objectives: [
      "Define sparse arrays and list the four ways holes are created",
      "Distinguish a hole from an element whose value is undefined",
      "Trace how forEach and for/of treat holes differently",
      "Explain why dense arrays are the recommended default"
    ],
    concepts: [
      {
        term: "Sparse arrays",
        kind: "definition",
        statement: "An array is **sparse** when some indices in its range hold no element — a **hole**. Then `length` overstates the element count: an array can have length 100 and contain three elements. Sparse arrays arise from deleting elements, skipping in a literal, growing `length`, or creating with `new Array(n)`.",
        detail: "```\nlet a = new Array(5); // length 5, five holes\nlet b = [1, , 3];     // hole at index 1\nlet c = [1, 2, 3];\ndelete c[1];          // hole at index 1\nlet d = [];\nd.length = 3;         // three holes\n```"
      },
      {
        term: "Hole versus undefined element",
        kind: "insight",
        statement: "`[1, undefined, 3]` and `[1, , 3]` both read `a[1]` as `undefined` — but the first **has** an element at index 1 (the value happens to be undefined) while the second **does not**. The existence test `1 in a` is the discriminator: `true` for the dense array, `false` for the sparse one.",
        detail: "```\nlet dense = [1, undefined, 3];\nlet sparse = [1, , 3];\ndense[1]     // undefined\nsparse[1]    // undefined — same read\n1 in dense   // true — an element exists\n1 in sparse  // false — a hole, not an element\n```"
      },
      {
        term: "Iteration over holes",
        kind: "law",
        statement: "The array **methods** (`forEach`, `map`’s callback, `filter`, `reduce` — every callback-driven method) **skip holes entirely**: the callback is never invoked for them. The `for/of` loop, driven by the array iterator instead, **yields `undefined` for each hole** — one value per index.",
        detail: "```\nlet sparse = [1, , 3];\nsparse.forEach(v => console.log(v)); // logs 1, then 3 — no call for the hole\nfor (let v of sparse) console.log(v); // logs 1, undefined, 3 — one per index\n```\n`map` preserves hole positions in its output without calling the callback there; `filter` simply drops them."
      },
      {
        term: "Holes in JSON",
        kind: "insight",
        statement: "The JSON serializer converts every hole to `null` in arrays — and so does an `undefined` element. Round-tripping a sparse array through JSON therefore **densifies** it: the holes come back as explicit `null` values.",
        detail: "```\nJSON.stringify([1, , 3])         // '[1,null,3]'\nJSON.stringify([1, undefined, 3]) // '[1,null,3]' — identical text\n```\nExistence and position survive; the hole/undefined distinction does not — one more reason not to rely on it."
      },
      {
        term: "Prefer dense arrays",
        kind: "insight",
        statement: "The book’s advice is blunt: sparse arrays are legal, quirky and best avoided. When you need an empty slot, storing `undefined` or `null` explicitly keeps every test, loop and serialization consistent — and engines store and optimize dense layouts far better.",
        detail: "The historical use for sparse arrays — a lookup keyed by huge numbers with mostly-missing entries — is properly served by a `Map` (Chapter 11), which does not pretend the keys between stored ones exist."
      },
      {
        term: "Truncation versus holes",
        kind: "method",
        statement: "Two `length` operations bookend the section: writing a **smaller** length truncates (elements are gone, no holes created), and writing a **larger** one creates trailing holes. `a.length = 0` empties an array completely — the fastest clear there is.",
        detail: "```\nlet a = [1, 2, 3];\na.length = 1; // [1] — 2 and 3 truncated away\na.length = 4; // [1, , , ] — holes after index 0\n```"
      }
    ],
    examples: [
      {
        title: "The worked diff: hole versus undefined element",
        problem: "Given `let sparse = [1, , 3];` and `let dense = [1, undefined, 3];` run the read test, the existence test, `Object.keys`, `forEach` and `JSON.stringify` on both and account for every difference.",
        steps: [
          { label: "Step 1: The read test agrees", text: "`sparse[1]` is `undefined` and `dense[1]` is `undefined` — from the reading side the two arrays are indistinguishable." },
          { label: "Step 2: The existence test disagrees", text: "`1 in sparse` → `false` (no element). `1 in dense` → `true` (an element whose value is undefined). This is the definitive probe." },
          { label: "Step 3: Object.keys agrees with existence", text: "`Object.keys(sparse)` → `[\"0\", \"2\"]`; `Object.keys(dense)` → `[\"0\", \"1\", \"2\"]` — the hole contributes no key, the undefined element does." },
          { label: "Step 4: forEach disagrees", text: "`sparse.forEach(cb)` invokes the callback twice (values 1 and 3); `dense.forEach(cb)` invokes it three times (values 1, undefined and 3). The loop bodies you write really can observe the difference." },
          { label: "Step 5: JSON erases the difference", text: "Both serialize to `'[1,null,3]'` — holes and undefined elements both become `null`, so after a round trip through `JSON.parse` you hold a dense array with a `null` element in both cases." }
        ],
        result: "Same reads, different existence (`in`, keys, forEach) — and JSON papers over the whole distinction with `null`."
      },
      {
        title: "Trace the engine: delete makes a hole, splice does not",
        problem: "Starting from `let a = [\"a\", \"b\", \"c\", \"d\"];` compare `delete a[1]` with `splice(1, 1)` on a fresh copy — array, length and `1 in a` after each.",
        steps: [
          { label: "Step 1: The delete", text: "`delete a[1]` removes the property `\"1\"` from the array object. The result is `[\"a\", , \"c\", \"d\"]`: `length` is still 4 and `a[1]` reads `undefined` because nothing is there." },
          { label: "Step 2: The hole’s ripple", text: "`1 in a` → false; a `forEach` over `a` now processes only `\"a\"`, `\"c\"`, `\"d\"`; iterating with `for/of` yields `\"a\"`, `undefined`, `\"c\"`, `\"d\"`." },
          { label: "Step 3: The splice on a fresh copy", text: "```\nlet b = [\"a\", \"b\", \"c\", \"d\"];\nb.splice(1, 1);\n```\nThis removes the element **and closes the gap**: `b` is `[\"a\", \"c\", \"d\"]` with length 3 — the later elements shift down one index." },
          { label: "Step 4: Why splice is the array way", text: "`delete` is an object operation that happens to work on arrays, leaving a hole; `splice` is the array operation that renumbers the elements after the cut — Section 7.3 dissects it fully." }
        ],
        result: "delete leaves length 4 with a hole; splice leaves length 3, dense and renumbered — for removing elements, splice (or filter for copies) is the tool."
      }
    ],
    keyTakeaways: [
      "A sparse array has holes: indices within its length that hold no element.",
      "Holes are created by `delete`, by missing values in a literal, by a larger `length` write, and by `new Array(n)`.",
      "A hole and an undefined element read identically; `i in a` and `Object.keys` distinguish them.",
      "Callback methods skip holes; `for/of` yields undefined for them; JSON writes null for both.",
      "Prefer dense arrays — store explicit `undefined` or `null`, or use a `Map` for genuinely sparse numeric keys.",
      "`splice` removes elements and renumbers; `delete` removes a key and leaves a hole."
    ],
    quiz: [
      {
        q: "Given `let a = [1, , 3];` which expression is false?",
        options: ["a[1] === undefined", "a.length === 3", "1 in a", "a[2] === 3"],
        answer: 2,
        explanation: "The middle slot is a hole: it reads as undefined, but no element exists there, so the in-operator returns false."
      },
      {
        q: "A forEach callback passed over `[10, , 30]` is invoked:",
        options: [
          "three times",
          "twice — once for 10 and once for 30",
          "once — forEach stops at the hole",
          "zero times"
        ],
        answer: 1,
        explanation: "The array methods skip holes entirely: the callback sees the elements that exist, never learning the hole was there."
      },
      {
        q: "The best way to remove the element at index 2 of a five-element array and keep the array dense is:",
        options: [
          "delete a[2]",
          "a[2] = undefined",
          "a.splice(2, 1)",
          "a.length = 2"
        ],
        answer: 2,
        explanation: "splice removes the element and shifts the tail down, keeping every remaining index occupied; delete leaves a hole and assignment leaves a dead value, and truncating the length would discard elements 3 and 4."
      },
      {
        q: "After `let a = [1, 2, 3]; a.length = 5;` the array is:",
        options: [
          "still [1, 2, 3] with length 3",
          "of length 5 with holes at indices 3 and 4",
          "of length 5 with undefined elements at 3 and 4",
          "an error"
        ],
        answer: 1,
        explanation: "Growing length adds nothing — it creates holes; a[3] and a[4] read undefined but fail the in-test, unlike explicit undefined elements."
      }
    ]
  },

  // ---------------------------------------------------------------- 7.3
  {
    sectionId: "js-ch7-s3",
    readingTime: 9,
    intro: "Arrays are built to change at the ends and in the middle: `push`/`pop` work the back, `shift`/`unshift` work the front, and `splice` does anything anywhere — insert, delete or replace. For walking the result there are three idioms — `for/of`, `forEach` and the classic `for` — each with a precise reason to be chosen. This section works the full toolkit with the loop-unrolling traces.",
    objectives: [
      "Implement stack and queue behavior with push/pop and push/shift",
      "Predict every splice argument’s effect: start, deleteCount and inserted items",
      "Choose between for/of, forEach and the classic for loop",
      "Explain why delete is the wrong removal tool and splice is the right one"
    ],
    concepts: [
      {
        term: "push and pop",
        kind: "method",
        statement: "**`push(...values)`** appends one or more values at the **end** of the array and returns the new length; **`pop()`** removes and returns the **last** element (`undefined` on an empty array). Both mutate the array. Together they are the **stack** (LIFO: last in, first out).",
        detail: "```\nlet stack = [];\nstack.push(1, 2); // returns 2 — new length\nstack.pop();      // returns 2 — the last value pushed\n```"
      },
      {
        term: "shift and unshift",
        kind: "method",
        statement: "**`unshift(...values)`** prepends values at the **front** (returning the new length); **`shift()`** removes and returns the **first** element. Both renumber every remaining element — an O(n) walk — so a queue built on `push` + `shift` trades a little speed for perfect order-keeping (FIFO: first in, first out).",
        detail: "```\nlet queue = [];\nqueue.push(\"a\", \"b\"); // enqueue at the back\nqueue.shift();        // dequeue from the front → \"a\"\n```\n`pop` with `unshift` gives a queue with the opposite orientation — the pairing decides the direction, not either method alone."
      },
      {
        term: "splice — the universal editor",
        kind: "method",
        statement: "**`splice(start, deleteCount, ...items)`** changes an array in place: it removes `deleteCount` elements starting at index `start`, inserts `items` in their place, and **returns an array of the removed elements**. Omitted arguments mean \"to the end\" (`deleteCount` default) and \"insert nothing\" (`items` default); a negative `start` counts back from the end.",
        detail: "```\nlet a = [1, 2, 3, 4, 5];\na.splice(2, 0, \"a\", \"b\"); // insert: [1, 2, \"a\", \"b\", 3, 4, 5]\na.splice(3, 2);            // remove: [1, 2, \"a\", 4, 5]\na.splice(-2);              // remove the last two: [1, 2, \"a\"]\n```\nSplice is the only method that removes elements while keeping the array dense — `delete` only punches holes."
      },
      {
        term: "delete on arrays",
        kind: "insight",
        statement: "`delete a[i]` removes the element but leaves the index a **hole** — length does not change and the later elements do not shift (Section 7.2). To actually remove, use `splice(i, 1)`, `pop()`, `shift()`, or `filter` when a copy is acceptable.",
        detail: "```\nlet a = [1, 2, 3];\ndelete a[1]; // [1, , 3] — length 3, a hole\na.splice(1, 1) would have given [1, 3] — length 2, dense\n```"
      },
      {
        term: "for/of loops",
        kind: "method",
        statement: "**`for (let element of array)`** iterates the array’s **values** through its iterator (Chapter 12): no index bookkeeping, works on any iterable, supports `break`, `continue` and `return` from the enclosing function, and yields `undefined` for holes.",
        detail: "```\nlet sum = 0;\nfor (let v of [1, 2, 3]) {\n  if (v < 0) break;\n  sum += v;\n}\n// sum is 6\n```\nNeed the index too? `for (let [i, v] of a.entries())` pairs them up without managing a counter."
      },
      {
        term: "forEach",
        kind: "method",
        statement: "**`array.forEach(callback)`** invokes `callback(value, index, array)` once per element and returns `undefined`. It is pure side-effect machinery — there is no way to stop it early (no `break`), so early-exit searches belong to `for/of`, `find`, or the `some`/`every` trick.",
        detail: "```\n[\"a\", \"b\"].forEach((v, i, a) => {\n  console.log(i, v, a.length); // 0 a 2, then 1 b 2\n});\n```\nThe three-argument signature is worth memorizing — index and whole array arrive free with every value."
      },
      {
        term: "Choosing an iteration idiom",
        kind: "insight",
        statement: "Use **`for/of`** for values (with break/continue/return), **`forEach`** for fire-and-forget side effects over the whole array, and the **classic `for`** only when the index math itself matters — iterating strides, two arrays in lockstep by position, or mutating indices mid-loop. Before ES6, `forEach` was the only concise form; today `for/of` is the default answer.",
        detail: "```\nfor (let i = 0; i < a.length; i++) { ... } // classic — index in hand\nfor (const v of a) { ... }                 // values, breakable\na.forEach(v => { ... });                  // callbacks, unbreakable\n```\nAll three visit elements in index order 0, 1, 2 and onward."
      }
    ],
    examples: [
      {
        title: "Trace the engine: splice anatomy",
        problem: "Starting from `let a = [1, 2, 3, 4, 5];` trace `a.splice(2, 0, \"a\", \"b\")`, then `a.splice(2, 2)` on the result, then `a.splice(-2)` on that — array, return value and length after each.",
        steps: [
          { label: "Step 1: The insert — splice(2, 0, \"a\", \"b\")", text: "Start at index 2, remove **zero** elements, insert `\"a\"` and `\"b\"` there. Return value: `[]` (nothing removed). New array: `[1, 2, \"a\", \"b\", 3, 4, 5]`, length 7. The elements 3, 4, 5 shifted right by two — splice keeps the array dense." },
          { label: "Step 2: The removal — splice(2, 2)", text: "Start at index 2 (the `\"a\"`), remove **two** elements. Return value: `[\"a\", \"b\"]`. New array: `[1, 2, 3, 4, 5]`, length 5 — the tail shifted left by two to close the gap." },
          { label: "Step 3: Replace is remove plus insert", text: "`a.splice(1, 1, \"x\")` on `[1, 2, 3, 4, 5]` removes `2` (return `[2]`) and puts `\"x\"` in its place: `[1, \"x\", 3, 4, 5]` — one call, both operations." },
          { label: "Step 4: The negative start — splice(-2)", text: "A negative start counts from the end: index `length - 2`. With `deleteCount` omitted it deletes through the end: on `[1, \"x\", 3, 4, 5]` it removes `[4, 5]`, leaving `[1, \"x\", 3]`." },
          { label: "Step 5: The signature summary", text: "`splice(start, deleteCount, ...items)` — start from the front or back, remove zero or more, insert zero or more, always in place, always returning the removed slice as an array (never the modified array — that one stays where it lives)." }
        ],
        result: "`[1, 2, \"a\", \"b\", 3, 4, 5]` (returned `[]`) → `[1, 2, 3, 4, 5]` (returned `[\"a\", \"b\"]`) → `[1, \"x\", 3]` (returned `[4, 5]`) — splice inserts, removes, replaces, and closes every gap it makes."
      },
      {
        title: "Trace the engine: a stack and a queue",
        problem: "Drive `let stack = [];` through push 1, push 2, push 3, pop, pop; then drive `let queue = [];` through the same three pushes followed by shift, shift. Report every value produced.",
        steps: [
          { label: "Step 1: The stack fills", text: "`stack.push(1)` → length 1; `stack.push(2)` → 2; `stack.push(3)` → 3. The array is `[1, 2, 3]` — each push appends at the back and returns the new length." },
          { label: "Step 2: The stack drains — LIFO", text: "`stack.pop()` → `3`; `stack.pop()` → `2`. Last in, first out: what came out last came in last. The array is now `[1]`." },
          { label: "Step 3: The queue fills", text: "Same pushes: `queue` is `[1, 2, 3]` — enqueue always happens at the back with push." },
          { label: "Step 4: The queue drains — FIFO", text: "`queue.shift()` → `1` (removes from the front, renumbering 2→0 and 3→1); `queue.shift()` → `2`. First in, first out: the oldest entry leaves first. The array is now `[3]`." },
          { label: "Step 5: The pairing is the policy", text: "push + pop = stack (both ends at the back). push + shift = queue (in at the back, out at the front). unshift + pop = queue the other way round. No new data structure needed — the pairing of two array methods *is* the data structure." }
        ],
        result: "Stack pops yield 3 then 2 (LIFO); queue shifts yield 1 then 2 (FIFO) — from the same three pushes, the exit rule is the only difference."
      },
      {
        title: "Trace the engine: three loops over one array",
        problem: "Sum the array `[10, 20, 30]` with a `for/of` loop, a `forEach` call and a classic `for` loop, and stop early when a value exceeds 25 in whichever loop can.",
        steps: [
          { label: "Step 1: for/of", text: "```\nlet sum1 = 0;\nfor (let v of [10, 20, 30]) {\n  sum1 += v;\n}\n```\nNo counter, no `.length`, no off-by-one — the iterator hands over 10, 20, 30 and the sum is 60. With `if (v > 25) break;` inserted after the addition, the loop would still have already added 30 — break stops future iterations, not the current one." },
          { label: "Step 2: forEach", text: "```\nlet sum2 = 0;\n[10, 20, 30].forEach(v => { sum2 += v; });\n```\nThe arrow function runs three times with values 10, 20, 30 — sum2 is 60. There is no legal `break` here: `return` only skips the rest of this callback invocation." },
          { label: "Step 3: The classic for", text: "```\nlet sum3 = 0;\nlet a = [10, 20, 30];\nfor (let i = 0; i < a.length; i++) {\n  sum3 += a[i];\n}\n```\nThe index `i` runs 0, 1, 2 — you manage it, you may stride it, compare across arrays, or stop on any condition: `if (a[i] > 25) break;` placed *before* the addition here genuinely leaves 30 out." },
          { label: "Step 4: The early-exit verdict", text: "To \"sum until a value exceeds 25\": the classic for (condition before adding) or `for/of` (break before adding) both work cleanly; `forEach` cannot express it at all — use `find`, `some`, or a `for/of` instead." }
        ],
        result: "All three loops sum to 60; only the break-capable loops can stop mid-array — forEach is all-or-nothing by design."
      }
    ],
    keyTakeaways: [
      "push/pop operate at the back; shift/unshift at the front; all four mutate and return new length (push, unshift) or the removed element (pop, shift).",
      "push+pop is a stack; push+shift is a queue — the method pairing is the data structure.",
      "`splice(start, deleteCount, ...items)` inserts, removes and replaces in place, returning the removed elements as an array.",
      "A negative splice start counts from the end; omitted deleteCount means delete-to-the-end.",
      "`delete` on an array leaves a hole — splice, pop, shift or filter remove for real.",
      "`for/of` gives breakable value iteration; `forEach` gives unbreakable callbacks with (value, index, array); classic `for` is for index math."
    ],
    quiz: [
      {
        q: "`[1, 2, 3].splice(1, 1, \"x\", \"y\")` returns:",
        options: ["[1, \"x\", \"y\", 3]", "[2]", "[\"x\", \"y\"]", "the new array"],
        answer: 1,
        explanation: "splice always returns an array of the elements it removed — here just the 2 — while the modified array [1, \"x\", \"y\", 3] stays in the original variable."
      },
      {
        q: "Which pairing turns a plain array into a queue (first in, first out)?",
        options: ["push and pop", "push and shift", "unshift and pop", "splice and slice"],
        answer: 1,
        explanation: "push enqueues at the back and shift dequeues from the front, so entries leave in arrival order; push+pop is the stack, and unshift+pop is the reverse queue."
      },
      {
        q: "The loop that CANNOT stop early with a break statement is:",
        options: ["for (let v of a)", "the classic for", "forEach", "for (let [i, v] of a.entries())"],
        answer: 2,
        explanation: "forEach invokes the callback for every element and supports no interruption — early exits need for/of, a classic for, or the some/every methods."
      },
      {
        q: "After `let a = [1, 2, 3, 4]; a.splice(-2);` the array `a` is:",
        options: ["[1, 2, 3, 4]", "[1, 2]", "[3, 4]", "[1, 2, 3]"],
        answer: 1,
        explanation: "A negative start counts from the end (index 2) and the omitted deleteCount removes through the end — elements 3 and 4 are returned and gone."
      }
    ]
  },

  // ---------------------------------------------------------------- 7.4
  {
    sectionId: "js-ch7-s4",
    readingTime: 12,
    intro: "This section is the array-method catalog — the part of JavaScript you will type most. The methods divide by what they return (new arrays, values, verdicts) and by whether they mutate (only a handful do). Every entry carries a micro-example, and the worked examples trace the three that matter most: `reduce` step by step, `sort` with and without a comparator, and a `map`/`filter` pipeline.",
    objectives: [
      "Classify the catalog: methods that return new arrays, single values, or verdicts",
      "Trace reduce with an initializer element by element",
      "Sort numbers correctly with a comparator, and recognize comparator mistakes",
      "Combine map and filter into a data pipeline",
      "Name the short mutating list — the only methods that change the array"
    ],
    concepts: [
      {
        term: "map and filter",
        kind: "method",
        statement: "**`map(fn)`** returns a **new array** with `fn(value, index, array)` applied to each element — same length, transformed values. **`filter(fn)`** returns a new array of the elements for which `fn` returned a truthy value — same or shorter, untouched values. Neither mutates the original.",
        detail: "```\nlet a = [1, 2, 3, 4];\na.map(x => x * 10);       // [10, 20, 30, 40]\na.filter(x => x % 2 === 0); // [2, 4]\na.map(x => x * 10).filter(x => x > 20); // [30, 40] — chained\n```\nChaining works because every link returns an array — the pipeline idea that Section 8.7 turns into a programming style."
      },
      {
        term: "reduce and reduceRight",
        kind: "method",
        statement: "**`reduce(fn, initial)`** folds an array into a single value: it carries an **accumulator** through the elements left to right, at each step computing `fn(accumulator, value, index, array)`; the final accumulator is the result. `reduceRight` runs the same fold from the right. Without an `initial`, the first element seeds the accumulator and the fold starts at the second — and an **empty array throws TypeError**.",
        detail: "```\n[1, 2, 3, 4].reduce((acc, v) => acc + v, 0); // 10\n[1, 2, 3, 4].reduce((acc, v) => acc + v);    // 10 — first element seeds\n[].reduce((acc, v) => acc + v);                // TypeError on empty, no init\n```\nThe initial value is also the type-setter: `reduce((a, v) => a.concat(v), [])` collects into an array, not a number."
      },
      {
        term: "flat and flatMap",
        kind: "method",
        statement: "**`flat(depth = 1)`** returns a new array with sub-arrays flattened to the given depth (`Infinity` flattens everything); holes simply disappear. **`flatMap(fn)`** is exactly `map(fn).flat(1)` in one pass — map to arrays (zero or more results each), then splice those results into the output.",
        detail: "```\n[1, [2, [3, [4]]]].flat();     // [1, 2, [3, [4]]]\n[1, [2, [3, [4]]]].flat(2);    // [1, 2, 3, [4]]\n[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]\n[\"a b\", \"c\"].flatMap(s => s.split(\" \")); // [\"a\", \"b\", \"c\"]\n```"
      },
      {
        term: "concat and slice",
        kind: "method",
        statement: "**`concat(...args)`** returns a new array holding the original elements followed by the arguments — array arguments are flattened **one level** into elements, everything else is appended as a single element. **`slice(start, end)`** returns the sub-array from `start` up to but **excluding** `end`; both endpoints accept negatives counting from the end, and `slice()` with no arguments copies the whole array. Neither mutates.",
        detail: "```\nlet a = [1, 2, 3];\na.concat(4, [5, [6, 7]]); // [1, 2, 3, 4, 5, [6, 7]] — one level only\na.slice(1, -1);          // [2] — from index 1 to index length-1, exclusive\n[...a];                  // the modern copy, same effect as a.slice()\n```"
      },
      {
        term: "indexOf, lastIndexOf and includes",
        kind: "method",
        statement: "**`indexOf(x, from?)`** returns the first index of `x` (searching from `from`) or −1; **`lastIndexOf(x)`** searches from the end; **`includes(x)`** returns a boolean. All compare with strict `===`-like semantics — which means **`indexOf` can never find `NaN`**, while `includes` uses a different comparison and **can**: `[NaN].includes(NaN)` is `true`.",
        detail: "```\n[1, 2, 1].indexOf(1);   // 0 — first occurrence\n[1, 2, 1].lastIndexOf(1); // 2\n[NaN].indexOf(NaN);    // -1 — strict equality never matches NaN\n[NaN].includes(NaN);   // true — includes uses SameValueZero\n```"
      },
      {
        term: "find, findIndex, some and every",
        kind: "method",
        statement: "The predicate quartet: **`find(fn)`** returns the first **value** passing the predicate (else `undefined`); **`findIndex(fn)`** returns its **index** (else −1); **`some(fn)`** is true if at least one element passes; **`every(fn)`** is true only if all do (vacuously true for an empty array). All four short-circuit at their answer.",
        detail: "```\n[1, -2, 3, -4].find(x => x < 0);      // -2\n[1, -2, 3, -4].findIndex(x => x < 0); // 1\n[1, -2, 3].some(x => x < 0);          // true\n[1, -2, 3].every(x => x > 0);         // false\n[].every(x => false);                 // true — nobody fails\n```\n`some` and `every` are also the legitimate early-exit loops that `forEach` refuses to be."
      },
      {
        term: "sort with a comparator",
        kind: "method",
        statement: "**`sort(cmp?)`** sorts **in place** and returns the same array. **The default converts elements to strings and compares those** — a disaster for numbers (`[33, 4, 1111, 222]` sorts to `[1111, 222, 33, 4]`). Pass a comparator `(a, b)` returning a negative number when `a` should come first, a positive when `b` should, and 0 for a tie — for numbers, `(a, b) => a - b` is the whole recipe.",
        detail: "```\n[33, 4, 1111, 222].sort();              // [1111, 222, 33, 4] — string order!\n[33, 4, 1111, 222].sort((a, b) => a - b); // [4, 33, 222, 1111] — numeric\n[33, 4, 1111, 222].sort((a, b) => b - a); // [1111, 222, 33, 4] — descending\n```\nA comparator returning `true`/`false` instead of a signed number is the classic silent bug: booleans coerce to 1 and 0 — never negative — so the sort produces garbage without an error."
      },
      {
        term: "reverse and join",
        kind: "method",
        statement: "**`reverse()`** reverses **in place** and returns the same array (one of the few mutators). **`join(sep = \",\")`** returns a string of every element converted with `String()`, separated by `sep`; holes and `undefined` both join as empty strings. Its inverse on the string side is `str.split(sep)` — the round trip that lets string processing borrow array methods.",
        detail: "```\n[1, 2, 3].reverse();   // [3, 2, 1]\n[1, 2, 3].join(\" + \"); // \"1 + 2 + 3\"\n[1, , 3].join();      // \"1,,3\" — the hole contributes nothing\n\"a,b\".split(\",\");      // [\"a\", \"b\"] — and back with join\n```"
      },
      {
        term: "The mutation shortlist",
        kind: "law",
        statement: "Of everything in this catalog, only these mutate the receiver: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` (and `fill`/`copyWithin`, Chapter 11 neighbors). **Everything else — `map`, `filter`, `slice`, `concat`, `reduce`, `find`, `some`, `every`, `join`, `flat` — returns a new value and leaves the array alone.** When in doubt, check against this list before chaining.",
        detail: "This is the habit-forming rule: read the chain left to right and ask *mutator or producer?* at every dot — because a `sort` in the middle of a pipeline quietly rearranges your original data while a `slice` before it would have shielded the source (`[...a].sort()` is the copy-then-sort idiom)."
      }
    ],
    examples: [
      {
        title: "Trace the engine: reduce, fully worked",
        problem: "Compute `let a = [1, 2, 3, 4, 5]; a.reduce((x, y) => x * y, 1);` with a step table, then explain what changes if the initializer is omitted.",
        steps: [
          { label: "Step 1: The accumulator is seeded", text: "The second argument `1` becomes the initial accumulator. The callback will run once per element — five times — with the accumulator as its first argument." },
          { label: "Step 2: Element 1", text: "`(1, 1) => 1 * 1` — accumulator becomes 1." },
          { label: "Step 3: Elements 2 and 3", text: "`(1, 2) => 2` — accumulator 2; then `(2, 3) => 6` — accumulator 6." },
          { label: "Step 4: Elements 4 and 5", text: "`(6, 4) => 24` — accumulator 24; then `(24, 5) => 120` — accumulator 120, the final answer. Every intermediate product existed only in the accumulator variable." },
          { label: "Step 5: Without the initializer", text: "The first element (the number 1) seeds the accumulator and the callback runs only four times — same result, 120, here. But on an **empty** array the initializer-less call throws `TypeError: Reduce of empty array with no initial value`, while `[].reduce(mul, 1)` neatly returns 1 — the identity element you chose." }
        ],
        result: "The accumulator walks 1 → 1 → 2 → 6 → 24 → 120: the product of all five elements, computed in five multiplications, each seeing only the running total and one element."
      },
      {
        title: "Trace the engine: sorting numbers wrong, then right",
        problem: "Sort `[33, 4, 1111, 222]` with no comparator, then with `(a, b) => a - b`, then with the broken `(a, b) => a > b` — and explain each outcome.",
        steps: [
          { label: "Step 1: The default sort", text: "`a.sort()` → `[1111, 222, 33, 4]`. The default converted each number to a string and compared those lexicographically: `\"1111\" < \"222\"` (character `1` before `2`), `\"222\" < \"33\"` (`2` before `3`), `\"33\" < \"4\"`. No error — just string order wearing a number costume." },
          { label: "Step 2: The numeric comparator", text: "`a.sort((a, b) => a - b)` → `[4, 33, 222, 1111]`. Now each comparison returns a signed difference: 4 − 33 is negative, so 4 is placed before 33; the engine does roughly n·log n such comparisons (the same order-of-growth analysis as the sorting algorithms in Rosen Chapter 3)." },
          { label: "Step 3: Descending is one sign flip", text: "`a.sort((a, b) => b - a)` → `[1111, 222, 33, 4]` — same machinery, inverted verdicts." },
          { label: "Step 4: The boolean bug", text: "`a.sort((a, b) => a > b)` returns `true` or `false` — coerced to 1 or 0, **never negative**. A comparator that never says `a is smaller` cannot communicate the ordering; the result is an incorrectly ordered array with no exception raised — the classic silent sort bug." },
          { label: "Step 5: Objects sort by key", text: "For arrays of objects the comparator reads the field: `users.sort((u, v) => u.age - v.age)`. Strings compare with locale-aware helpers like `localeCompare` rather than subtraction." }
        ],
        result: "Default `[1111, 222, 33, 4]`; numeric `[4, 33, 222, 1111]`; boolean comparator — garbage without diagnostics. The sign convention (negative, zero, positive) is the entire comparator contract."
      },
      {
        title: "Trace the engine: a map/filter pipeline",
        problem: "Given `let words = [\"discrete\", \"math\", \"is\", \"fun\"];` produce the uppercase form of every word longer than 3 letters, first with an explicit loop and then as a pipeline.",
        steps: [
          { label: "Step 1: The explicit version", text: "```\nlet result = [];\nfor (let w of words) {\n  if (w.length > 3) result.push(w.toUpperCase());\n}\n```\nOne loop does both jobs — test and transform — with a mutable accumulator." },
          { label: "Step 2: The pipeline", text: "```\nlet result = words.filter(w => w.length > 3).map(w => w.toUpperCase());\n```\n`filter` first: `\"discrete\"` (8 letters) and `\"math\"` (4) pass; `\"is\"` and `\"fun\"` fail. The intermediate array is `[\"discrete\", \"math\"]`." },
          { label: "Step 3: Then map", text: "`.map(w => w.toUpperCase())` transforms each survivor: `[\"DISCRETE\", \"MATH\"]` — the same result, in two named stages, no mutable variable." },
          { label: "Step 4: Order matters", text: "Filtering first is also the fast order — map only transforms what survives. Reversed (`.map(...).filter(...)`), every word is uppercased and then two are thrown away: correct but wasteful." },
          { label: "Step 5: The reading skill", text: "Pipelines read as stages over data — `filter` narrows, `map` reshapes, `reduce` collapses (Section 8.7 runs full analytics this way). Each stage leaves its input untouched and hands a new array to the next." }
        ],
        result: "`[\"DISCRETE\", \"MATH\"]` — from four words through a two-stage pipeline whose intermediate is `[\"discrete\", \"math\"]`; filter before map when both orders are legal."
      }
    ],
    keyTakeaways: [
      "Producers (no mutation): map, filter, reduce, reduceRight, flat, flatMap, concat, slice, indexOf, includes, find, some, every, join.",
      "Mutators: push, pop, shift, unshift, splice, sort, reverse — copy first (`[...a]`) when the original must survive.",
      "reduce carries an accumulator; the initializer sets its type and makes empty arrays safe; reduceRight folds from the right.",
      "Default sort compares strings — always pass `(a, b) => a - b` for numbers, and return signed numbers, never booleans.",
      "indexOf cannot find NaN; includes can. some/every short-circuit and give forEach its missing early exit.",
      "`flatMap` = `map` then `flat(1)`; `slice()` and spread copy; `concat` flattens array arguments exactly one level."
    ],
    quiz: [
      {
        q: "What does `[1, 2, 3, 4].reduce((acc, v) => acc + v, 10)` return?",
        options: ["10", "20", "24", "0"],
        answer: 1,
        explanation: "The accumulator starts at 10 and absorbs 1, 2, 3, 4 — 10 + 1 + 2 + 3 + 4 = 20."
      },
      {
        q: "`[33, 4, 1111, 222].sort()` produces:",
        options: [
          "[4, 33, 222, 1111]",
          "[1111, 222, 33, 4] — elements were compared as strings",
          "[33, 4, 1111, 222] — sort does nothing without a comparator",
          "a TypeError"
        ],
        answer: 1,
        explanation: "The default comparator converts to strings, so lexicographic order rules: \"1111\" < \"222\" < \"33\" < \"4\"."
      },
      {
        q: "Which expression finds whether an array contains NaN?",
        options: [
          "a.indexOf(NaN) !== -1",
          "a.includes(NaN)",
          "a.find(NaN)",
          "NaN in a"
        ],
        answer: 1,
        explanation: "indexOf and friends compare with strict equality, which is false for every NaN; includes uses the SameValueZero comparison that does match NaN to NaN."
      },
      {
        q: "Which of these methods does NOT mutate the array it is called on?",
        options: ["splice", "sort", "reverse", "concat"],
        answer: 3,
        explanation: "concat builds and returns a new array; splice, sort and reverse all rearrange or edit the receiver in place."
      },
      {
        q: "`[\"a b\", \"c\"].flatMap(s => s.split(\" \"))` evaluates to:",
        options: ["[[\"a\", \"b\"], [\"c\"]]", "[\"a\", \"b\", \"c\"]", "[\"a b\", \"c\"]", "[\"ab\", \"c\"]"],
        answer: 1,
        explanation: "flatMap maps each string to an array of words and flattens that result one level into the output array — the two steps of map-then-flat in one call."
      },
      // University-pattern: array map with live-array mutation — trace (original)
      {
        q: "What are the final contents of `a` and `b`?\n```js\nlet a = [1, 2, 3];\nlet b = a.map((x, i, arr) => {\n  arr[i] = x * 2;\n  return x;\n});\n```",
        options: ["`a` is `[1, 2, 3]` and `b` is `[2, 4, 6]`", "`a` and `b` are both `[2, 4, 6]`", "Both arrays stay `[1, 2, 3]`", "`a` is `[2, 4, 6]` and `b` is `[1, 2, 3]`"],
        answer: 3,
        explanation: "Step 1: The code given maps over `a` while the callback writes doubled values back into the same array and returns the received element. Step 2: The governing rules are that `map` builds a fresh array from the callback return values, that each element value is read before its callback runs, and that the third callback parameter aliases the live array being traversed. Step 3: Tracing index by index, index 0 receives `1`, writes `2`, returns `1`; index 1 receives `2`, writes `4`, returns `2`; index 2 receives `3`, writes `6`, returns `3`; hence `a` becomes `[2, 4, 6]` while `b` collects the pre-mutation values `[1, 2, 3]`. Step 4: The distractors fail because the writes genuinely mutate `a`, and the returned values were captured before those writes. Step 5: Therefore `a` is `[2, 4, 6]` and `b` is `[1, 2, 3]`."
      }
    ]
  },

  // ---------------------------------------------------------------- 7.5
  {
    sectionId: "js-ch7-s5",
    readingTime: 8,
    intro: "Arrays nest to become matrices, and half the objects in the platform pretend to be arrays: `arguments`, DOM NodeLists, even strings — with a `length` and numbered access but no array methods. This section builds multidimensional arrays safely, defines array-like objects, converts them with `Array.from` and the spread operator, and closes with strings as read-only arrays of characters.",
    objectives: [
      "Build and index multidimensional arrays without shared-row bugs",
      "Define array-like objects and distinguish them from real arrays",
      "Convert array-likes and iterables to true arrays with Array.from and spread",
      "Use Array.isArray to test what something really is",
      "Treat strings as arrays while respecting their immutability and UTF-16 storage"
    ],
    concepts: [
      {
        term: "Multidimensional arrays",
        kind: "method",
        statement: "JavaScript has no true multidimensional arrays — a **matrix** is an **array of arrays**, and `matrix[i]` is a row (itself an array) whose elements `matrix[i][j]` you reach with two bracket accesses in a row. Rows may have different lengths (a jagged array) because nothing enforces uniformity.",
        detail: "```\nlet row = [0, 0, 0];\nlet matrix = [row, row, row]; // BUG: three names for one row\nmatrix[0][0] = 1;             // every row’s first cell is now 1\n```\nEvery row must be a **distinct array object** — see the worked example for the safe construction."
      },
      {
        term: "Array-like objects",
        kind: "definition",
        statement: "An **array-like** is any object with a numeric `length` property and elements stored under integer-like string keys: `arguments` inside a function, browser NodeLists, and strings all qualify. Array-likes support `a[i]` and `a.length` — but none of the array methods, because they are not arrays.",
        detail: "```\nfunction f() {\n  console.log(arguments.length); // works\n  arguments.forEach(() => {});   // TypeError — no such method\n}\n```\nThe bridge to the full toolkit is conversion: `Array.from(x)` for any array-like (or iterable), and `...x` spread only for iterables (strings, Sets, arrays — not `arguments`, not NodeLists)."
      },
      {
        term: "Array.isArray",
        kind: "method",
        statement: "**`Array.isArray(x)`** returns true only for **genuine arrays** — the one reliable test, because `typeof []` is merely `\"object\"`, array-likes fail it, and proxy-wrapped arrays still pass it. Use it whenever \"array or not\" decides a code path.",
        detail: "```\nArray.isArray([1, 2]);      // true\nArray.isArray(\"12\");        // false — a string is array-LIKE\nArray.isArray({ length: 2 }); // false — array-like, not array\nArray.isArray(arguments);    // false (inside a normal function)\n```"
      },
      {
        term: "The arguments object",
        kind: "definition",
        statement: "Inside a classic (non-arrow) function, **`arguments`** is the array-like of the actual arguments passed: numbered, with a `length`, but no methods, not an array, and shadowed away entirely in arrow functions. Modern code replaces it with **rest parameters** (`...args`), which yield a real array (Section 8.3).",
        detail: "```\nfunction legacy() {\n  return Array.from(arguments).reduce((a, b) => a + b, 0);\n}\nlegacy(1, 2, 3); // 6 — converted, then reduced\n```\nThe conversion step is the tax of every pre-ES6 codebase — and the reason `arguments` survives only in maintenance work."
      },
      {
        term: "Strings as arrays",
        kind: "method",
        statement: "A string is array-like and iterable: `s[i]` reads the character at position `i` and `s.length` counts its **UTF-16 code units**. But strings are **immutable** — `s[0] = \"X\"` is a silent no-op in sloppy mode and a TypeError in strict mode. To process characters as a collection, make an array: `[...s]` or `s.split(\"\")`.",
        detail: "```\nlet s = \"tree\";\ns[0];        // \"t\"\ns.length;    // 4\n[...s];      // [\"t\", \"r\", \"e\", \"e\"]\ns.split(\"\"); // [\"t\", \"r\", \"e\", \"e\"] — by UTF-16 code unit\n```\nThe spread iterates **code points** while `split(\"\")` splits **code units** — the difference shows on emoji and other astral characters (worked below)."
      },
      {
        term: "UTF-16 and code points",
        kind: "insight",
        statement: "JavaScript strings store UTF-16 code units, so a character outside the basic multilingual plane (an emoji, for instance) occupies **two** array positions. `length`, `s[i]` and `split(\"\")` see code units; the iterator (`for/of`, spread) sees whole **code points**. For true bytes, `new TextEncoder().encode(s)` yields a `Uint8Array` of UTF-8 bytes.",
        detail: "```\nlet s = \"\\u{1F499}\"; // a blue heart emoji\ns.length;          // 2 — two code units\n[...s].length;     // 1 — one code point\nnew TextEncoder().encode(s).length; // 4 UTF-8 bytes\n```\nArray-of-characters thinking must pick a unit of account — and the iterator is almost always the right one."
      }
    ],
    examples: [
      {
        title: "Trace the engine: building a matrix the safe way",
        problem: "Build a 3x3 multiplication-style grid `matrix[i][j] = i * 3 + j` with `Array.from`, index it, and explain why the `fill` shortcut would have corrupted it.",
        steps: [
          { label: "Step 1: The construction", text: "```\nlet matrix = Array.from({ length: 3 }, (_, i) =>\n  Array.from({ length: 3 }, (_, j) => i * 3 + j)\n);\n```\nThe outer call runs its map function three times (i = 0, 1, 2); each run **returns a fresh inner array**, so the rows are three distinct objects." },
          { label: "Step 2: The content", text: "Row 0 maps its slots to 0, 1, 2; row 1 to 3, 4, 5; row 2 to 6, 7, 8 — the value `i * 3 + j` baked in at construction." },
          { label: "Step 3: Indexing", text: "`matrix[2]` is the third row, the array `[6, 7, 8]`; `matrix[2][1]` is that row’s second element: `7`. Two bracket accesses in a row — row first, then column." },
          { label: "Step 4: The mutation check", text: "`matrix[0][0] = 99` changes only row 0 — `matrix[1][0]` still reads 3. Distinct row objects make cell writes independent, which is the entire point of the construction." },
          { label: "Step 5: The bug avoided", text: "`Array(3).fill([0, 0, 0])` fills with **the same array reference three times**: writing `m[0][0]` would show through `m[1][0]` and `m[2][0]` — one row wearing three hats, the classic shared-state trap." }
        ],
        result: "`[[0,1,2],[3,4,5],[6,7,8]]` with `matrix[2][1]` = 7 — three independent rows, because the map function returned a new array per row."
      },
      {
        title: "Trace the engine: array-like to real array",
        problem: "A legacy function receives `arguments`; a DOM script receives a NodeList from `document.querySelectorAll`. Show both failing on `.forEach`, then convert each with `Array.from` and complete the job.",
        steps: [
          { label: "Step 1: The array-like that is not an array", text: "```\nfunction tally() {\n  arguments.forEach(() => {}); // TypeError: arguments.forEach is not a function\n}\n```\n`arguments` has `length` and `[0]`, `[1]`… but no prototype full of methods — it is array-like, not an array." },
          { label: "Step 2: Convert and work", text: "```\nfunction sum() {\n  return Array.from(arguments).reduce((a, b) => a + b, 0);\n}\nsum(3, 1, 4, 1, 5); // 14\n```\n`Array.from` walks the length and indices and builds a true array — which then has `reduce`. (Modern style: `function sum(...numbers)` skips the conversion entirely.)" },
          { label: "Step 3: The DOM twin", text: "```\nlet nodes = document.querySelectorAll(\"p\"); // a NodeList\nnodes.map(n => n.textContent); // TypeError — same problem, browser flavor\nArray.from(nodes, n => n.textContent.toUpperCase()); // works, map built in\n```\nNote the second argument of `Array.from` mapping during the copy — no separate `.map` stage needed." },
          { label: "Step 4: Spread versus from", text: "`[...nodes]` also works — NodeLists are iterable in modern browsers — but spread only handles **iterables**: `[...arguments]` is fine in modern code, while `[...{ length: 2 }]` throws because a bare array-like is not iterable. `Array.from` accepts both kinds." },
          { label: "Step 5: Verify the result", text: "`Array.isArray(Array.from(arguments))` → `true`: the product is a genuine array, with every method of Section 7.4 available from then on." }
        ],
        result: "Both `arguments` and NodeLists fail method calls until converted; `Array.from(x, mapFn?)` turns either into a true array (spread handles only iterables), unlocking the whole catalog."
      },
      {
        title: "Trace the engine: strings as read-only arrays",
        problem: "Given `let s = \"tree\";` read a character, spread the string into an array, attempt a write, and repeat the length experiment on an emoji string.",
        steps: [
          { label: "Step 1: Read like an array", text: "`s[0]` → `\"t\"`; `s.length` → 4; `s[s.length - 1]` → `\"e\"`. Positional access works exactly like an array’s." },
          { label: "Step 2: Try to write", text: "`s[0] = \"T\"` — in strict mode this throws `TypeError: Cannot assign to read only property`; in sloppy mode it silently does nothing. Either way `s` is still `\"tree\"`: strings are immutable, so character editing goes through building a new string." },
          { label: "Step 3: Copy into a real array", text: "`[...s]` → `[\"t\", \"r\", \"e\", \"e\"]`; now array operations apply — `.reverse()`, `.map(c => c.toUpperCase())` (yielding `[\"T\", \"R\", \"E\", \"E\"]`), then `.join(\"\")` back to a string." },
          { label: "Step 4: The emoji case", text: "```\nlet e = \"\\u{1F499}\";\ne.length;      // 2 — UTF-16 code units\n[...e].length; // 1 — code points\n```\nThe single emoji occupies two string positions; `s[i]` and `split(\"\")` would cut it into meaningless halves, while the spread iterator hands it over whole." },
          { label: "Step 5: The rule of thumb", text: "Read characters with `s[i]`, process characters with `[...s]` (code-point safe), rebuild with `join` — and reach for `TextEncoder().encode` when the bytes themselves are what you need." }
        ],
        result: "Strings are array-like for reading and iterating but immutable for writing — and one emoji is two `length` units but one spread element."
      }
    ],
    keyTakeaways: [
      "A matrix is an array of distinct row arrays; `fill([0,0,0])` shares one row — build rows with `Array.from` so each is fresh.",
      "Array-likes have `length` and numbered keys but no methods: `arguments`, NodeLists, strings.",
      "`Array.isArray` is the only reliable array test; `typeof` says merely `\"object\"`.",
      "`Array.from(x, mapFn?)` converts array-likes and iterables to real arrays; spread converts only iterables.",
      "Strings: `s[i]` reads, `[...s]` iterates code points, writes throw or no-op — immutability is absolute.",
      "`length` counts UTF-16 code units, so astral characters (emoji) count twice; the iterator counts once."
    ],
    quiz: [
      {
        q: "Why does `Array(3).fill([0, 0, 0])` fail as a matrix builder?",
        options: [
          "fill only works on dense arrays",
          "all three rows are the same array object, so writes through one appear in all",
          "Array(3) creates an array of length 0",
          "fill inserts the array itself as a single element"
        ],
        answer: 1,
        explanation: "fill copies its single argument into every slot — one reference, three aliases — so any row write mutates the one shared row that all indices see."
      },
      {
        q: "Which call converts the array-like `arguments` object into a true array?",
        options: ["arguments.slice()", "Array.from(arguments)", "arguments.toArray()", "new Array(arguments)"],
        answer: 1,
        explanation: "Array.from is designed for exactly this: it reads the length and indices of any array-like and builds a genuine array with the full method set."
      },
      {
        q: "For a string holding one emoji character, `s.length` is:",
        options: ["1", "2 — the emoji spans two UTF-16 code units", "0", "an error"],
        answer: 1,
        explanation: "length counts UTF-16 code units and astral-plane characters need two of them; the code-point-aware [...s] yields a single element."
      },
      {
        q: "Inside a function body, `arguments.forEach(...)` throws TypeError because:",
        options: [
          "arguments is always empty",
          "arguments is array-like — it has length and indices but no array methods",
          "forEach requires strict mode",
          "arguments is a real array but frozen"
        ],
        answer: 1,
        explanation: "The arguments object mimics arrays structurally but inherits none of their methods — convert it with Array.from, or use rest parameters instead."
      }
    ]
  }
]
