import type { SectionContent } from '../library'

// ============================================================================
// Flanagan, JavaScript: The Definitive Guide, 7th Edition
// Chapter 3: Types, Values, and Variables (Sections 3.1 – 3.8)
// Master study content.
// ============================================================================

export const jsCh3Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'js-ch3-s1',
    readingTime: 8,
    intro: 'Computer programs work by manipulating values, and the kinds of values a language can represent are its types. This section draws the master dividing line of the whole chapter — primitive types versus object types — then surveys what the object side of that line includes, why functions and classes are themselves values, and how JavaScript frees you from ever deallocating memory by hand.',
    objectives: [
      'Partition JavaScript’s types into primitives and objects, naming every primitive',
      'List the special-purpose object types provided by the core language and standard library',
      'Explain why functions and classes count as values in JavaScript',
      'Describe garbage collection and the one responsibility it still leaves the programmer'
    ],
    concepts: [
      {
        term: 'The type landscape',
        kind: 'definition',
        statement: 'JavaScript types divide into two categories: **primitive types** and **object types**. The primitives are **numbers**, **strings**, and **booleans**, plus the special values **null** and **undefined** (each typically considered the sole member of its own type) and **symbols** (ES6). Any value that is not a number, string, boolean, symbol, null or undefined is an **object**: a collection of properties, each with a name and a value (a primitive or another object).',
        detail: 'Numbers, strings and booleans get the largest share of this chapter (Sections 3.2–3.4); symbols and the global object are in 3.5; objects themselves get Chapter 6.'
      },
      {
        term: 'Special kinds of objects',
        kind: 'definition',
        statement: 'An ordinary object is an **unordered** collection of named values. The language also defines **arrays** — ordered, numbered collections with special syntax and behavior (Chapter 7) — and the standard library adds more: `Set` (a set of values), `Map` (key-to-value mapping), typed arrays for bytes and binary data, `RegExp` for textual pattern matching, `Date` for dates and times, and `Error` and its subtypes for run-time failures (Chapter 11).',
        detail: 'One very special object, the **global object** (Section 3.5), is worth covering early because its properties are the globally defined identifiers of your program.'
      },
      {
        term: 'Functions and classes are values',
        kind: 'insight',
        statement: 'JavaScript differs from more static languages in that **functions and classes are not just syntax — they are values** that programs can manipulate: assigned to variables, stored in arrays, passed as arguments, returned from functions. Like any non-primitive value, functions and classes are a specialized kind of object (Chapters 8 and 9).',
        detail: 'This one design decision — first-class functions — is what makes possible the functional programming style of Chapter 8 and the callbacks and Promise chains of Chapter 13.'
      },
      {
        term: 'Garbage collection',
        kind: 'definition',
        statement: 'The JavaScript interpreter performs **automatic garbage collection** for memory management: when a value is no longer **reachable** — when no running code has any way to refer to it — the interpreter knows it can never be used again and automatically reclaims its memory. Programmers generally do not worry about destroying or deallocating values.',
        detail: 'The residual responsibility runs the other way: take care that values do not **inadvertently remain reachable** — and therefore non-reclaimable — longer than necessary. A forgotten event handler or lingering array of large objects is JavaScript’s version of a memory leak.'
      },
      {
        term: 'Methods and the OO style',
        kind: 'method',
        statement: 'JavaScript supports an object-oriented programming style: rather than globally defined functions operating on values, the **types themselves define methods**. To sort array `a`, we do not pass `a` to a `sort()` function — we invoke the `sort()` method of `a`:\n```js\na.sort();   // The object-oriented version of sort(a).\n```\nTechnically only objects have methods, but numbers, strings, booleans and symbols **behave as if** they have methods (a wrapper performs the magic, Section 3.7). `null` and `undefined` are the only values methods cannot be invoked on.',
        detail: 'The practical consequence: `s.toUpperCase()` works on a string variable even though the string is a primitive — JavaScript creates a transient String object, runs the method, and discards the wrapper.'
      }
    ],
    examples: [
      {
        title: 'Trace: classifying values from a line of code',
        problem: 'Classify every value in this statement as primitive (which?) or object (which special kind?), and identify the method call.',
        steps: [
          { label: 'The code', text: '```js\nlet s = "3.14".slice(0, 1);  // "3"\n```' },
          { label: 'Step 1: The literal', text: '`"3.14"` is a **string** — a primitive. It is an immutable ordered sequence of 16-bit values.' },
          { label: 'Step 2: The method call', text: '`.slice(0, 1)` looks like a method on a primitive. Since only objects truly have methods, JavaScript transiently wraps the string in a String object, invokes slice, and returns a new primitive string "3". The wrapper is discarded immediately.' },
          { label: 'Step 3: The binding', text: '`s` now holds the primitive "3". The variable itself is not typed — it can later hold a number or an object with no ceremony — but the value it currently holds is a string primitive.' },
          { label: 'Step 4: The taxonomy check', text: 'Nothing here is an object at rest: the literal is primitive, the result is primitive, and the only object ever involved (the wrapper) existed for one method call. Had we written `new String("3.14")` instead, the value would have been a genuine String object — a historical leftover to avoid.' }
        ],
        result: 'One primitive in, one primitive out, one transient wrapper object for the method call — the everyday mechanics of "primitives with methods".'
      },
      {
        title: 'Reachability decides collection',
        problem: 'Two arrays are created. One is returned from a function and stored; the other is local and dropped. What can be collected, and when?',
        steps: [
          { label: 'The code', text: '```js\nfunction make() {\n    let keep = [new Array(1e6).fill("x")];  // big array, in an array\n    let drop = [new Array(1e6).fill("y")];  // another\n    return keep;\n}\nlet kept = make();\n```' },
          { label: 'Step 1: During the call', text: 'Both million-element arrays are reachable — through `keep` and `drop` from the executing function’s scope.' },
          { label: 'Step 2: After the return', text: '`drop` and its inner array are no longer referred to by anything: the function’s scope is gone and no other binding points at them. They are unreachable — garbage, no matter how large.' },
          { label: 'Step 3: What survives', text: '`keep` (and its million-element contents) remains reachable through the global `kept`. The garbage collector may reclaim `drop`’s memory but must not touch `kept`’s.' },
          { label: 'Step 4: The programmer’s half of the deal', text: 'Had the function also stored `drop` into a global cache "just in case", both arrays would stay reachable forever — the classic accidental leak that garbage collection cannot fix for you.' }
        ],
        result: 'Unreachable values are collected automatically; the programmer’s only memory duty is not to keep values reachable longer than needed.'
      }
    ],
    keyTakeaways: [
      'Primitives: numbers, strings, booleans, null, undefined, symbols. Everything else — including arrays, functions and classes — is an object.',
      'null and undefined are each typically the sole member of their own special type; symbols (ES6) enable language extension.',
      'Special objects beyond plain objects: arrays, Set, Map, typed arrays, RegExp, Date, Error — all covered in Chapters 7 and 11.',
      'Functions and classes are values (specialized objects), assignable and passable like any other — this enables the functional and callback styles of later chapters.',
      'Memory is garbage collected: unreachable values are reclaimed automatically; avoid keeping values reachable longer than necessary.',
      'Method syntax (`a.sort()`) works on primitives too via transient wrappers; only null and undefined reject method calls.'
    ],
    quiz: [
      {
        q: 'Which of the following is NOT one of JavaScript’s primitive types?',
        options: ['symbol', 'array', 'boolean', 'null'],
        answer: 1,
        explanation: 'Arrays are a special kind of object — a numbered, ordered collection. The primitives are numbers, strings, booleans, symbols, null and undefined.'
      },
      {
        q: '“Functions and classes are values in JavaScript” means that:',
        options: [
          'they can be assigned to variables, passed as arguments and returned from functions, like any other value',
          'they always evaluate to numbers',
          'they can only be used inside classes',
          'they are converted to strings when printed'
        ],
        answer: 0,
        explanation: 'Unlike more static languages, JavaScript treats functions and classes as first-class values — specialized kinds of objects — which is the foundation for callbacks, higher-order functions and the Promise style.'
      },
      {
        q: 'A value becomes eligible for garbage collection when:',
        options: [
          'it is older than a fixed age set by the interpreter',
          'it is no longer reachable — no running code has any way to refer to it',
          'it is explicitly passed to a free() function',
          'the program enters strict mode'
        ],
        answer: 1,
        explanation: 'Reachability is the criterion: when nothing can reference a value anymore, the interpreter knows it can never be used again and reclaims it automatically.'
      },
      {
        q: 'Which values are the only ones that methods cannot be invoked on?',
        options: ['numbers and strings', 'null and undefined', 'booleans and symbols', 'arrays and functions'],
        answer: 1,
        explanation: 'Numbers, strings, booleans and symbols behave as if they have methods (via transient wrappers), but null and undefined have no properties at all — accessing one throws a TypeError.'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'js-ch3-s2',
    readingTime: 12,
    intro: 'JavaScript’s primary numeric type, Number, serves both integers and reals — with one representation: the 64-bit IEEE 754 floating-point format, the same "double" of Java and C++. That single decision explains most of this section: the exact integer range, the rounding surprises, NaN and Infinity, and eventually the need for BigInt. Along the way: number literals in four bases, the Math object, formatting and parsing, and a first look at Dates as numbers.',
    objectives: [
      'State the IEEE 754 double format, its magnitude limits, and the exact integer range $\\pm 2^{53}$',
      'Read and write numeric literals in decimal, hex, binary and octal, plus separators and exponent form',
      'Explain overflow, underflow, negative zero, division by zero, and the peculiarities of NaN',
      'Demonstrate binary floating-point rounding error and prescribe the scaled-integer fix',
      'Use BigInt for integers beyond $2^{53}$, respecting its no-mixing rule',
      'Convert numbers to and from strings with toString(radix), toFixed, toExponential, toPrecision, parseInt and Intl.NumberFormat'
    ],
    concepts: [
      {
        term: 'The Number type and IEEE 754',
        kind: 'definition',
        statement: 'JavaScript’s primary numeric type, **Number**, represents integers and approximates real numbers using the **64-bit floating-point format defined by the IEEE 754 standard** — the same format as `double` in Java, C++ and most modern languages. It can represent numbers as large as $\\pm 1.7976931348623157 \\times 10^{308}$ and as small as $\\pm 5 \\times 10^{-324}$. The number format exactly represents all integers between $-2^{53}$ and $2^{53}$ — that is, $-9{,}007{,}199{,}254{,}740{,}992$ through $9{,}007{,}199{,}254{,}740{,}992$; beyond that, trailing digits may lose precision.',
        detail: 'Certain operations — array indexing and the bitwise operators of Chapter 4 — are performed with 32-bit integers instead. For an encyclopedic companion to this section, see Rosen’s Number Theory chapter (Ch 4): divisibility, modular arithmetic and representations in bases 2, 8 and 16 are exactly the mathematics JavaScript’s hex/octal/binary literals and BigInt arithmetic run on.'
      },
      {
        term: 'Integer literals in four bases',
        kind: 'notation',
        statement: 'A base-10 integer is a sequence of digits. A **hexadecimal** literal begins with `0x` or `0X`; ES6 adds **binary** (`0b`/`0B`) and **octal** (`0o`/`0O`) prefixes; any numeric literal may be preceded by a minus sign:\n```js\n0xff            // => 255: (15*16 + 15)\n0xBADCAFE       // => 195939070\n0b10101        // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)\n0o377          // => 255: (3*64 + 7*8 + 7*1)\n```\n**Underscore separators** group long literals for readability: `let billion = 1_000_000_000;` also work in hex (`0x89_AB_CD_EF`) and binary (`0b0001_1101_0111`).',
        detail: 'Floating-point literals use the traditional real syntax — `3.14`, `2345.6789`, `.3333333333333333` — or exponential notation: `6.02e23` means $6.02 \\times 10^{23}$ and `1.4738223E-32` means $1.4738223 \\times 10^{-32}$. Grammar in brief: [digits][.digits][(E|e)[(+|-)]digits].'
      },
      {
        term: 'The Math object',
        kind: 'method',
        statement: 'Beyond the arithmetic operators, more complex mathematics lives as properties of the **Math** object:\n```js\nMath.pow(2,53)             // => 9007199254740992: 2 to the power 53\nMath.round(.6)             // => 1.0: round to the nearest integer\nMath.ceil(.6)              // => 1.0: round up\nMath.floor(.6)              // => 0.0: round down\nMath.abs(-5)               // => 5: absolute value\nMath.max(x,y,z)            // Return the largest argument\nMath.min(x,y,z)            // Return the smallest argument\nMath.random()              // Pseudo-random x where 0 <= x < 1.0\nMath.PI                    // \u03C0: circumference/diameter\nMath.E                     // e: base of the natural logarithm\nMath.sqrt(3)               // => 3**0.5\nMath.cbrt(27)              // => 3: cube root\nMath.hypot(3, 4)           // => 5: square root of sum of squares\nMath.log10(100)            // => 2\nMath.log2(1024)            // => 10\nMath.sign(x)               // -1, 0, or 1\nMath.trunc(3.9)            // => 3: drop the fractional part\n```',
        detail: 'Also: `Math.log1p(x)` (accurate log of 1+x for tiny x), `Math.expm1(x)`, `Math.imul` (32-bit multiply), `Math.clz32`, `Math.fround` (round to 32-bit float), and the hyperbolic family `sinh/cosh/tanh/asinh/acosh/atanh`.'
      },
      {
        term: 'Infinity, overflow and underflow',
        kind: 'law',
        statement: 'Arithmetic in JavaScript **does not raise errors** on overflow, underflow or division by zero. **Overflow** produces the special value `Infinity` (or `-Infinity`); **underflow** — a result closer to zero than the smallest representable number — returns `0` (or `-0`, negative zero, from negative values). Division by zero returns infinity or negative infinity; the one exception is `0/0`, which has no well-defined value and yields **NaN** (not-a-number):\n```js\nInfinity                    // A positive number too big to represent\nNumber.POSITIVE_INFINITY    // Same value\n1/0                         // => Infinity\nNumber.MAX_VALUE * 2        // => Infinity; overflow\n-1/0                        // => -Infinity\nNumber.MIN_VALUE/2          // => 0: underflow\n-Number.MIN_VALUE/2         // => -0: negative zero\n0/0                         // => NaN\nInfinity/Infinity           // => NaN\n```',
        detail: 'Negative zero is almost completely indistinguishable from regular zero — with one exception: as a divisor. `let zero = 0, negz = -0;` gives `zero === negz` → true, but `1/zero === 1/negz` → false (Infinity versus -Infinity).'
      },
      {
        term: 'NaN: not-a-number',
        kind: 'definition',
        statement: '`NaN` arises from zero divided by zero, infinity divided by infinity, square roots of negative numbers, or arithmetic with non-numeric operands that cannot convert. Its defining quirk: **it does not compare equal to any value, including itself**, so `x === NaN` is always false. To test for it, use `x != x` or `Number.isNaN(x)`:\n```js\nNaN                         // The not-a-number value\nNumber.NaN                  // Same value, written another way\n0/0                         // => NaN\nNaN === NaN                 // => false!\nx != x                      // true if and only if x is NaN\nNumber.isNaN(x)             // The clean test\n```',
        detail: 'The **global** `isNaN()` differs subtly: it returns true if its argument is NaN *or is a non-numeric value that converts to NaN* (so `isNaN("one")` is true). `Number.isNaN()` answers only "is this the NaN value?" `Number.isFinite(x)` is true for numbers other than NaN, Infinity, -Infinity.'
      },
      {
        term: 'Binary floating-point rounding error',
        kind: 'law',
        statement: 'Only $18{,}437{,}736{,}874{,}454{,}810{,}627$ real numbers are exactly representable in the JavaScript number format. IEEE 754 is a **binary** representation: it represents $1/2$, $1/8$, $1/1024$ exactly, but **not** decimal fractions like $1/10$. So `.1` is stored as a very close approximation, and arithmetic on approximations shows through:\n```js\nlet x = .3 - .2;   // thirty cents minus twenty cents\nlet y = .2 - .1;   // twenty cents minus ten cents\nx === y            // => false: the two values are not the same!\nx === .1           // => false: .3-.2 is not equal to .1\ny === .1           // => true: .2-.1 is equal to .1\n```',
        detail: 'This is not a JavaScript bug — it affects every binary floating-point language, including Java and C++. The values are extremely close to correct and fine for almost any purpose; the problem arises only when **comparing for equality**. Fix: use scaled integers (manipulate money as integer cents, not fractional dollars), or a tolerance-based comparison.'
      },
      {
        term: 'BigInt',
        kind: 'definition',
        statement: 'ES2020 adds a second numeric type, **BigInt**, mainly to represent 64-bit integers for interoperability — but BigInt values can have millions of digits. Literals are digits followed by `n` (with the usual base prefixes):\n```js\n1234n                 // A not-so-big BigInt literal\n0x8000000000000000n   // => 2n**63n: a 64-bit integer\nBigInt(Number.MAX_SAFE_INTEGER)   // => 9007199254740991n\n3000n / 997n           // => 3n: division drops the remainder\n3000n % 997n           // => 9n\n```\nArithmetic works like regular numbers **except division truncates toward zero** — and you may **not mix** BigInt and regular number operands (`1n + 1` throws TypeError), because neither type is strictly more general. Comparison operators do allow mixing (`1 < 2n` → true), but `0 === 0n` is false because `===` checks type. No `Math` function accepts BigInts.',
        detail: 'Fun from the book: `(2n ** 131071n) - 1n` is a Mersenne prime with 39457 decimal digits. BigInt is not suitable for cryptography — implementations do not prevent timing attacks. Note that BigInt cannot represent the non-integers that Number can, and Number cannot represent the magnitudes BigInt can; hence the no-mixing rule.'
      },
      {
        term: 'Number formatting and parsing',
        kind: 'method',
        statement: 'For explicit control over number↔string conversion: `Number()` converts strictly (base-10 only, no trailing characters), while the globals `parseInt()` and `parseFloat()` skip leading whitespace, parse as far as they can, and ignore the rest:\n```js\nNumber("3")             // => 3\nparseInt("3 blind mice") // => 3\nparseFloat(" 3.14 meters") // => 3.14\nparseInt("-12.34")      // => -12\nparseInt("0xFF")        // => 255\nparseInt(".1")          // => NaN: integers can\u0027t start with "."\nparseInt("11", 2)       // => 3: radix argument\nparseInt("ff", 16)      // => 255\nparseInt("zz", 36)      // => 1295\n```',
        detail: 'For number-to-string, `n.toString(radix)` converts bases 2–36, and three methods control formatting: `toFixed(d)` (fixed decimals), `toExponential(d)` (exponent form) and `toPrecision(n)` (n significant digits, switching to exponential when the integer part does not fit):\n```js\nlet n = 123456.789;\nn.toFixed(2)       // => "123456.79"\nn.toExponential(3) // => "1.235e+5"\nn.toPrecision(7)  // => "123456.8"\nn.toString(16)    // => "1e240" (hexadecimal)\n```\nFor internationalized formatting, `Intl.NumberFormat` (Chapter 11) formats numbers for locales — currency, grouping and decimal separators that match the user’s conventions.'
      },
      {
        term: 'Dates (a first look)',
        kind: 'definition',
        statement: 'JavaScript defines a simple **Date** class for dates and times. Dates are objects, but they have a numeric heart: a **timestamp** counting milliseconds since January 1, 1970:\n```js\nlet timestamp = Date.now();   // The current time as a number\nlet now = new Date();         // The current time as an object\nlet ms = now.getTime();       // Convert to a millisecond timestamp\nlet iso = now.toISOString();  // Standard format string\n```\nThe valueOf a Date is that millisecond count — which is why Dates compare correctly with `<` and `>` (Section 3.7’s object-to-primitive rules rely on it).',
        detail: 'Full coverage is in §11.4. The milliseconds-since-epoch representation is what makes Date arithmetic — differences, additions — plain number arithmetic.'
      }
    ],
    examples: [
      {
        title: 'Trace: why .3 - .2 !== .2 - .1',
        problem: 'Money arithmetic produces a wrong comparison. Trace the exact approximations involved and fix the program.',
        steps: [
          { label: 'The code', text: '```js\nlet x = .3 - .2;   // thirty cents minus twenty cents\nlet y = .2 - .1;   // twenty cents minus ten cents\nx === y            // => false!\n```' },
          { label: 'Step 1: The literals are approximations', text: 'IEEE 754 is binary: it represents 1/2, 1/4, 1/8 exactly, but 3/10 and 2/10 have no finite binary expansion. So `.3` and `.2` are stored as the nearest representable doubles — each very close, but not exactly equal, to the decimal value.' },
          { label: 'Step 2: Subtraction doubles down', text: 'The subtraction `.3 - .2` computes the difference of two approximations. The result is extremely close to 0.1 — but it is not the same approximation that the literal `.1` produces, and it is not the same value that `.2 - .1` produces either, because the errors in the two subtractions land differently.' },
          { label: 'Step 3: Strict equality demands bit-for-bit identity', text: '`===` compares the exact 64-bit values. Two "nearly 0.1" values that differ in their last bits are simply not equal. No error was thrown — the arithmetic is as correct as the format permits.' },
          { label: 'Step 4: The fix — scaled integers', text: '```js\nlet cents = 30 - 20;   // 10 exactly: integers this small are always exact\ncents === 20 - 10      // => true\n```\nManipulate monetary values as integer cents (or mills) so every quantity is exactly representable; convert to dollars only at display time.' }
        ],
        result: 'Binary floating point cannot represent .1/.2/.3 exactly; equality comparisons on the differences fail. Scale to integers and the problem vanishes.'
      },
      {
        title: 'Trace: NaN’s self-inequality, exploited',
        problem: 'Write a test that detects NaN — and prove why `x === NaN` cannot ever work.',
        steps: [
          { label: 'Step 1: The direct attempt fails', text: '```js\nlet x = 0/0;      // NaN\nx === NaN         // => false\n```\nNaN is defined to compare unequal to every value, **including itself**. So no value ever satisfies `x === NaN` — the comparison is false even when x is NaN.' },
          { label: 'Step 2: The idiom that exploits the property', text: '```js\nx != x            // true if and only if x is NaN\n```\nEvery value equals itself except NaN. So the only way "x is not equal to x" can be true is that x is the one value violating self-equality. The quirk becomes the test.' },
          { label: 'Step 3: The readable form', text: '```js\nNumber.isNaN(x)   // true iff x is the NaN value\n```\nPrefer this in real code — but know why it works, and know the difference from the **global** `isNaN()`, which first coerces its argument to a number: `isNaN("one")` is true (the string converts to NaN) while `Number.isNaN("one")` is false.' },
          { label: 'Step 4: The related finite test', text: '```js\nNumber.isFinite(x)  // true iff x is a number, not NaN/Infinity/-Infinity\n```\nA common guard before arithmetic that assumes an ordinary finite value.' }
        ],
        result: 'NaN !== NaN by definition; detect it with x != x or Number.isNaN(x), and remember the global isNaN() coerces its argument first.'
      },
      {
        title: 'Trace: BigInt meets the $2^{53}$ wall',
        problem: 'A program must compute with exact 64-bit unsigned values. Show where Number fails, and how BigInt succeeds — including one operation that throws.',
        steps: [
          { label: 'Step 1: Beyond safe integers', text: '```js\nNumber.MAX_SAFE_INTEGER     // => 9007199254740991 = 2^53 - 1\n2**53 + 1 === 2**53 + 3      // => true — both round to the same double!\n```\nAbove $2^{53}$, consecutive integers no longer have distinct representations, so arithmetic silently loses units — catastrophic for counters, timestamps and hashes.' },
          { label: 'Step 2: BigInt to the rescue', text: '```js\n0x8000000000000000n          // 2n**63n, exact\n(2n ** 63n) - 1n             // the largest signed 64-bit integer, exact\nBigInt("1" + "0".repeat(100)) // a googol, exact\n```' },
          { label: 'Step 3: Division truncates', text: '```js\n3000n / 997n    // => 3n (remainder dropped)\n3000n % 997n   // => 9n  (take the remainder explicitly)\n```\nBigInt division discards the fractional part toward zero — plan for it when translating formulas.' },
          { label: 'Step 4: Mixing is forbidden', text: '```js\n1n + 1         // !TypeError: cannot mix BigInt and number\n1 < 2n         // => true: comparisons are allowed\n0 === 0n       // => false: === includes type\n```\nNeither type is more general (BigInt: unbounded integers only; Number: fractional values, huge range), so mixed arithmetic is simply banned. Convert explicitly with `BigInt(n)` or `Number(big)` when you must cross.' }
        ],
        result: 'Number loses unit precision above $2^{53}$; BigInt is exact at any magnitude but integer-only, truncates on division, and throws when mixed with Number under arithmetic operators.'
      }
    ],
    keyTakeaways: [
      'Number is the IEEE 754 64-bit double: magnitudes to about $\\pm 1.8 \\times 10^{308}$, all integers exact only within $\\pm 2^{53}$; array indexing and bitwise operators use 32 bits.',
      'Literals: decimal, hex 0x, binary 0b, octal 0o, exponential 1.5e-8, and underscore separators 1_000_000.',
      'Overflow → Infinity, underflow → 0 (or -0), division by zero → ±Infinity; only 0/0, ∞/∞ and similar produce NaN.',
      'NaN is unequal to everything including itself — test with x != x or Number.isNaN(x); negative zero equals zero but differs as a divisor.',
      'Binary floating point cannot represent .1 exactly: .3-.2 !== .2-.1. For money, use scaled integers.',
      'BigInt (ES2020) gives exact arbitrary-precision integers (literals end in n); division truncates, Math functions reject them, and mixing with Number under arithmetic throws.',
      'parseInt/parseFloat are lenient parsers (with optional radix); toString(radix), toFixed, toExponential and toPrecision format; Intl.NumberFormat internationalizes.'
    ],
    quiz: [
      {
        q: 'JavaScript can exactly represent which range of integers?',
        options: [
          'All integers from $-(2^{31})$ to $2^{31}-1$, like Java’s int',
          'All integers between $-2^{53}$ and $2^{53}$, inclusive',
          'All integers up to $2^{64}-1$',
          'Only integers that are also representable in binary-coded decimal'
        ],
        answer: 1,
        explanation: 'The 64-bit IEEE 754 format exactly represents all integers from $-9{,}007{,}199{,}254{,}740{,}992$ ($-2^{53}$) to $+9{,}007{,}199{,}254{,}740{,}992$ ($2^{53}$); beyond that, trailing digits can lose precision. (The 32-bit range applies only to array indexing and bitwise operators.)'
      },
      {
        q: 'What does the expression `0/0` evaluate to?',
        options: ['0', 'Infinity', 'NaN', 'It throws a RangeError'],
        answer: 2,
        explanation: 'Division by zero normally yields Infinity or -Infinity, but zero divided by zero has no well-defined value, so it produces the special not-a-number value NaN. No error is raised — JavaScript arithmetic never throws on these conditions.'
      },
      {
        q: 'Why does the comparison `x === .1` return false when x was computed as `.3 - .2`?',
        options: [
          'Because === performs type conversion and both are strings',
          'Because .1 is exactly representable but .3 and .2 are not',
          'Because binary floating point cannot represent .1, .2 or .3 exactly, and the subtraction of two approximations does not yield the literal .1’s approximation',
          'Because subtraction always returns a string in JavaScript'
        ],
        answer: 2,
        explanation: 'None of .1, .2, .3 has an exact binary representation; each is stored as its nearest double. The difference of the approximations of .3 and .2 is not bit-identical to the approximation of the literal .1, and === demands bit-identical values. This affects every binary floating-point language, not just JavaScript.'
      },
      {
        q: 'Which of the following is TRUE of BigInt?',
        options: [
          'BigInt literals are written like 1234n, and 0x/0o/0b prefixes work for bases 16/8/2',
          'BigInt can be freely mixed with regular numbers in arithmetic expressions',
          'Math.sqrt() accepts BigInt operands',
          'BigInt division throws away only the sign of the remainder'
        ],
        answer: 0,
        explanation: 'Literals end in n with the usual base prefixes; mixing BigInt with Number under +,-,*,/,%,** throws a TypeError (comparisons are fine); no Math function accepts BigInt; and division truncates toward zero, dropping the whole remainder.'
      },
      {
        q: 'What is the difference between `parseInt("3 blind mice")` and `Number("3 blind mice")`?',
        options: [
          'Both return 3',
          'parseInt returns 3; Number returns NaN because trailing characters are not allowed',
          'parseInt returns NaN; Number returns 3',
          'Both return NaN'
        ],
        answer: 1,
        explanation: 'The parsing functions are lenient: they skip leading whitespace, parse as many numeric characters as they can and ignore the rest. The Number() conversion is strict — the entire string must be a valid base-10 numeric literal or the result is NaN.'
      },
      {
        q: 'A Date object’s underlying numeric representation is:',
        options: [
          'seconds since January 1, 1970',
          'milliseconds since January 1, 1970',
          'nanoseconds since January 1, 1900',
          'there is none — Dates store formatted strings'
        ],
        answer: 1,
        explanation: 'A Date’s timestamp counts elapsed milliseconds since January 1, 1970 — Date.now() returns it directly, and a Date’s valueOf yields it, which is what makes Date arithmetic and ordering comparisons plain number operations.'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'js-ch3-s3',
    readingTime: 12,
    intro: 'The JavaScript type for representing text is the string: an immutable, ordered sequence of 16-bit values, typically Unicode characters. This section covers string literals in all their forms (single quotes, double quotes, and ES6 template literals with interpolation), the escape sequences, the rich method catalogue, the crucial distinction between UTF-16 code units and Unicode codepoints — the reason an emoji can have length 2 — and a first look at regular expressions.',
    objectives: [
      'State the string model: immutable sequences of 16-bit values, zero-based indexing',
      'Write string literals with both quote styles, line continuations, and multi-line template literals',
      'Use escape sequences including \\u, \\u{...}, \\x and the single-character escapes',
      'Apply the core string methods for slicing, searching, transforming and padding',
      'Explain the UTF-16 code unit versus codepoint distinction (surrogate pairs) and iterate by codepoint',
      'Recognize regular expression literals and the basic matching APIs'
    ],
    concepts: [
      {
        term: 'The string model',
        kind: 'definition',
        statement: 'A **string** is an **immutable, ordered sequence of 16-bit values**, each typically representing a Unicode character. The **length** of a string is the number of 16-bit values it contains, and strings use **zero-based indexing** — the first 16-bit value is at position 0. There is no separate type for a single character: a "character" is simply a string of length 1. The empty string has length 0.\n```js\nlet s = "hello";\ns.length    // => 5\ns[0]        // => "h"\ns[s.length-1] // => "o": the last character\n```',
        detail: 'Immutability is strict: methods like replace() and toUpperCase() return **new** strings; the original is never modified (Section 3.6 develops the consequences).'
      },
      {
        term: 'Codepoints, code units and surrogate pairs',
        kind: 'insight',
        statement: 'JavaScript uses the **UTF-16 encoding** of Unicode. Characters from the “basic multilingual plane” have codepoints that fit in 16 bits — one string element. Characters whose codepoints need more than 16 bits (most emoji) are encoded as a **surrogate pair**: two 16-bit values that act as one character:\n```js\nlet euro = "€";\nlet love = "💙";         // one emoji, but TWO 16-bit values\neuro.length    // => 1: this character has one 16-bit element\nlove.length    // => 2: UTF-16 encoding of 💙 is "\\ud83d\\udc99"\n```',
        detail: 'Most string methods operate on **16-bit values, not characters** — they do not treat surrogate pairs specially and perform no normalization. Since ES6, though, strings are **iterable**: `for/of` and the spread operator iterate actual **codepoints**, not code units. So an emoji has `.length` 2 but yields exactly one loop iteration — and "I ❤" has length 3 by codepoints but 5 by code units if both emoji are surrogate pairs.'
      },
      {
        term: 'String literals',
        kind: 'notation',
        statement: 'String literals are enclosed in a matched pair of single quotes, double quotes, or **backticks**. Double quotes and backticks may appear inside single-quoted strings, and so on for the other combinations:\n```js\n""                                       // The empty string\n\u0027testing\u0027\n"3.14"\n\u0027name="myform"\u0027\n"Wouldn\u0027t you prefer O\u0027Reilly\u0027s book?"\n`"She said \u0027hi\u0027", he said.`\n```\nBacktick-delimited **template literals** (ES6) allow embedded expressions. To break a single-quoted string across lines, end each line with a backslash — or use a backtick string, where newlines are included literally.',
        detail: 'Single-line strings joined with + were the norm before ES5; since ES5 a backslash before the line break continues the literal. In backtick literals, the line terminators themselves become part of the string. When mixing JavaScript and HTML, use one quote style for JS and the other for HTML attributes: `<button onclick="alert(\u0027Thank you\u0027)">Click Me</button>`.'
      },
      {
        term: 'Escape sequences',
        kind: 'notation',
        statement: 'The backslash combines with the character following it to represent an otherwise-unrepresentable character. The escape table:\n```js\n\\0    NUL character\n\\b    backspace          \\t    horizontal tab\n\\n    newline            \\v    vertical tab\n\\f    form feed          \\r    carriage return\n\\\"    double quote        \\\'    single quote (apostrophe)\n\\\\    backslash\n\\xnn    the character with hex code nn (so \\xA9 is ©)\n\\unnnn  four hex digits (\\u03c0 is π)\n\\u{n}   1–6 hex digits, codepoints up to 10FFFF (ES6): \\u{1f600} is the grinning-face emoji\n```\nIf the backslash precedes any other character, it is simply ignored: `\\#` is the same as `#`.',
        detail: 'Two usages dominate: embedding the delimiter inside itself —\n```js\n\'You\\\'re right, it can\\\'t be a quote\'\n```\n— and writing characters the keyboard or file format cannot express.'
      },
      {
        term: 'Working with strings: the method catalogue',
        kind: 'method',
        statement: 'Strings concatenate with `+` and compare with `===` (equal iff the same length and the same 16-bit values at every index). The built-in API, all demonstrated on `let s = "Hello, world"`:\n```js\n// Portions\ns.substring(1,4)        // => "ell": 2nd, 3rd, 4th characters\ns.slice(1,4)            // => "ell": same thing\ns.slice(-3)             // => "rld": last 3 characters\ns.split(", ")           // => ["Hello", "world"]\n// Searching\ns.indexOf("l")         // => 2: position of first "l"\ns.indexOf("l", 3)       // => 3: first "l" at or after 3\ns.lastIndexOf("l")      // => 10\ns.startsWith("Hell")    // => true\ns.endsWith("!")          // => false\ns.includes("or")        // => true\n// Modified copies\ns.replace("llo", "ya")  // => "Heya, world"\ns.toLowerCase()          // => "hello, world"\ns.toUpperCase()          // => "HELLO, WORLD"\ns.normalize()            // Unicode NFC normalization\n// Characters\ns.charAt(0)             // => "H"\ns.charCodeAt(0)         // => 72: 16-bit number at position 0\ns.codePointAt(0)        // => 72: works for codepoints > 16 bits\n// Padding and trimming (ES2017/2019)\n"x".padStart(3)         // => "  x"\n"x".padStart(3, "*")     // => "**x"\n" test ".trim()          // => "test"; also trimStart/trimEnd\n// Misc\n"<>".repeat(5)          // => "<><><><><>"\ns.concat("!")           // => "Hello, world!" (just use +)\n```',
        detail: 'Remember that strings are immutable — every one of these returns a new string. Strings also support array-style indexing: `s[0]` is "H" and `s[s.length-1]` is "d", equivalent to charAt(). For locale-aware comparison and sorting, see localeCompare and Intl.Collator in Chapter 11.'
      },
      {
        term: 'Template literals',
        kind: 'definition',
        statement: 'ES6 template literals are delimited with **backticks** and may include arbitrary JavaScript expressions between `${` and `}`:\n```js\nlet name = "Bill";\nlet greeting = `Hello ${ name }.`;   // greeting == "Hello Bill."\n```\nEverything between `${` and the matching `}` is a JavaScript expression, evaluated and converted to a string; everything outside is literal text. A template literal may include any number of expressions, may use all escape characters, and may span lines with no special escaping. A backslash at the end of a line can suppress the initial newline.',
        detail: 'A **tagged template literal** puts a function (the “tag”) right before the opening backtick; the text and expression values are passed to that function, and its return value is the result — the basis for DSLs like the styled-components library and Chapter 14’s template tags. The one built-in tag is `String.raw`, which returns the text without processing backslash escapes:\n```js\n`\\n`.length              // => 1: a single newline character\nString.raw`\\n`.length    // => 2: a backslash character and the letter n\n```'
      },
      {
        term: 'Pattern matching with RegExp',
        kind: 'notation',
        statement: 'JavaScript defines the **regular expression** datatype (RegExp) for describing and matching patterns in text. RegExp literals are written between slashes (with optional flags after the closing slash):\n```js\n/^HTML/;            // Match the letters H T M L at the start of a string\n/[1-9][0-9]*/;     // Match a nonzero digit, then any number of digits\n/\\bjavascript\\b/i;  // Match "javascript" as a word, case-insensitive\n```\nRegExps define methods, and strings have methods that accept them:\n```js\nlet text = "testing: 1, 2, 3";\nlet pattern = /\\d+/g;        // one or more digits, global\npattern.test(text)          // => true: a match exists\ntext.search(pattern)        // => 9: position of first match\ntext.match(pattern)         // => ["1", "2", "3"]: all matches\ntext.replace(pattern, "#")  // => "testing: #, #, #"\ntext.split(/\\D+/)           // => ["", "1", "2", "3"]\n```',
        detail: 'RegExp is not one of the fundamental types but has a literal syntax like numbers and strings, so it feels built-in. The full grammar — character classes, anchors, groups, repetition, the match and exec methods — is documented in §11.3.'
      }
    ],
    examples: [
      {
        title: 'Trace: an emoji has length 2',
        problem: 'Compute the length of the string "I 😀!" three ways — `.length`, indexing, and `for/of` iteration — and explain the differences.',
        steps: [
          { label: 'The string', text: '```js\nlet s = "I 😀!";\n``` It contains three visible characters: the letter I, the grinning-face emoji, and an exclamation mark.' },
          { label: 'Step 1: The code-unit count', text: '```js\ns.length   // => 4\n```\nThe emoji’s codepoint (U+1F600) does not fit in 16 bits, so UTF-16 encodes it as a **surrogate pair** — two 16-bit values. The length property counts 16-bit values: 1 (I) + 2 (the pair) + 1 (!) = 4.' },
          { label: 'Step 2: Indexing suffers too', text: '```js\ns[1]             // a lone high surrogate: half an emoji\ns.charCodeAt(1)  // 55357 (0xD83D) — the first half only\n```\nMost methods, including substring and charCodeAt, split the pair without ceremony.' },
          { label: 'Step 3: Iteration goes by codepoint', text: '```js\nlet n = 0;\nfor(let ch of s) n++;   // n === 3\ns.codePointAt(1)         // => 128512 (0x1F600): the full emoji\n```\nSince ES6, strings are iterable by **codepoint** — for/of (and the spread operator) visit the emoji once, as a single character, using surrogate-aware logic.' },
          { label: 'Step 4: The rule to remember', text: '`.length` and index-based methods count UTF-16 **code units**; `for/of`, `...` and `codePointAt` handle Unicode **codepoints**. Know which one your loop needs — text-processing bugs with emoji and rare scripts almost always come from mixing them up.' }
        ],
        result: 'Length 4 (code units), iteration count 3 (codepoints): the same string measures differently depending on whether you count UTF-16 units or Unicode characters.'
      },
      {
        title: 'Trace: a template literal builds an error message',
        problem: 'Interpolate variables into a multi-line error message, and trace exactly what the engine produces.',
        steps: [
          { label: 'The code', text: '```js\nlet filename = "app.js", linenumber = 42;\nlet exception = { message: "oops", stack: "  at app.js:42" };\nlet errorMessage = `\\\n\\u2718 Test failure at ${filename}:${linenumber}:\n${exception.message}\nStack trace:\n${exception.stack}\n`;\n```' },
          { label: 'Step 1: The leading backslash', text: 'The `\\` at the end of the first line escapes the **newline** immediately after the opening backtick, so the string does not begin with a line break. (Inside backticks, newlines are otherwise literal parts of the string.)' },
          { label: 'Step 2: The escape', text: '```js\n\\u2718\n```\nis processed exactly as in ordinary strings: it becomes the ✘ character. Escapes work inside templates.' },
          { label: 'Step 3: The interpolations', text: 'Each `${...}` is evaluated as an expression and converted to a string: `filename` → "app.js", `linenumber` → 42 (number to string), `exception.message` → "oops", `exception.stack` → its string value. The colons, colon-newline and "Stack trace:" remain literal text.' },
          { label: 'Step 4: The result', text: 'A five-line message beginning "✘ Test failure at app.js:42:" — one string value, built from parts, with no concatenation operators and no manual newline escapes.' }
        ],
        result: 'Template literals compose literal text, escapes, newlines and any number of `${...}` expressions into one value — the standard way to build formatted text in modern JavaScript.'
      },
      {
        title: 'Trace: a tiny frequency counter with for/of',
        problem: 'Use string iteration, property access and a plain object to count letters in "mississippi", then read off the counts.',
        steps: [
          { label: 'The code', text: '```js\nlet frequency = {};\nfor(let letter of "mississippi") {\n    if (frequency[letter]) {\n        frequency[letter]++;\n    } else {\n        frequency[letter] = 1;\n    }\n}\nfrequency   // => {m: 1, i: 4, s: 4, p: 2}\n```' },
          { label: 'Step 1: Iteration by codepoint', text: '`for/of` yields each character as a one-codepoint string: "m", "i", "s", "s", "i", … — 11 iterations total.' },
          { label: 'Step 2: The truthiness test', text: '```js\nif (frequency[letter])\n```\nOn the first visit the property is `undefined` — falsy — so the else branch initializes it to 1. On later visits it is a positive number — truthy — and is incremented.' },
          { label: 'Step 3: Property names coerce to strings', text: 'The letter strings are used directly as property keys: frequency.m, frequency.i, frequency.s, frequency.p. The accumulator is a plain object — a string-to-number map, exactly the shape a Map formalizes in Chapter 11.' },
          { label: 'Step 4: Result', text: 'm:1, i:4, s:4, p:2 — the letters of "mississippi" counted with three lines of code. This same skeleton, upgraded to a Map subclass with a default value, becomes the Chapter 1 histogram program.' }
        ],
        result: 'for/of over a string iterates codepoints one at a time; a plain object accumulates counts with a truthiness test distinguishing first-visit from repeat-visit.'
      }
    ],
    keyTakeaways: [
      'Strings are immutable ordered sequences of 16-bit values with zero-based indexing; "a character" is just a length-1 string, and methods like replace() return new strings.',
      'Literals: single or double quotes (identical in meaning), and ES6 backticks — template literals with `${...}` expression interpolation and multi-line support.',
      'Escapes: \\n, \\t, quotes and backslash; \\xnn for two hex digits; \\unnnn for four; \\u{n} (ES6) for 1–6 digits — the only form that reaches codepoints above U+FFFF.',
      'The method toolkit: substring/slice/split (portions), indexOf/startsWith/endsWith/includes (search), replace/toLowerCase/toUpperCase/normalize (copies), charAt/charCodeAt/codePointAt, padStart/padEnd, trim/trimStart/trimEnd, repeat.',
      'UTF-16 distinguishes code units from codepoints: an emoji is a surrogate pair — .length 2, but one for/of iteration; codePointAt reads it whole.',
      'Template literals interpolate any expressions, may span lines, may be tagged (String.raw is the built-in tag).',
      'RegExp literals (/pattern/flags) describe text patterns; test, search, match, replace and split consume them (full treatment in Chapter 11).'
    ],
    quiz: [
      {
        q: 'What is the `.length` of a string containing just the grinning-face emoji 😀, and why?',
        options: [
          '1, because length counts characters',
          '2, because the emoji is encoded as a surrogate pair of two 16-bit values and length counts 16-bit values',
          '4, because emoji take 4 bytes in UTF-8',
          'undefined, because emoji cannot appear in strings'
        ],
        answer: 1,
        explanation: 'JavaScript strings are sequences of 16-bit values, and this emoji’s codepoint (U+1F600) exceeds 16 bits, so UTF-16 represents it as a surrogate pair — two code units, hence length 2. (In UTF-8 it would be 4 bytes, but strings here are UTF-16.)'
      },
      {
        q: 'Which of the following correctly converts each visible character of an emoji-containing string, one per iteration?',
        options: [
          '```js\nfor(let i = 0; i < s.length; i++) f(s[i]);\n```',
          '```js\nfor(let ch of s) f(ch);\n```',
          '```js\ns.split("")\n```',
          '```js\nfor(let i = 0; i < s.length; i++) f(s.charCodeAt(i));\n```'
        ],
        answer: 1,
        explanation: 'Since ES6 strings are iterable, and for/of (like the spread operator) iterates actual codepoints — surrogate pairs included — so the emoji yields one iteration. Index-based loops, split("") and charCodeAt all operate on 16-bit code units and would split the pair.'
      },
      {
        q: 'What are the values of the two expressions here?\n```js\n`\\n`.length\nString.raw`\\n`.length\n```',
        options: [
          '2 and 2 — both process escapes',
          '1 and 2 — the ordinary template processes the escape into one newline character, while String.raw returns the raw text: a backslash character plus the letter n',
          '2 and 1 — String.raw removes the backslash',
          '1 and 1 — backticks do not support escapes'
        ],
        answer: 1,
        explanation: 'An ordinary template literal processes \\n into one newline character (length 1); the String.raw tag returns the raw text — a backslash character plus the letter n — length 2.'
      },
      {
        q: 'After `let s = "Hello, world";`, which expression yields "world"?',
        options: ['```js\ns.substring(6, 11)\n```', '```js\ns.slice(0, 5)\n```', '```js\ns.slice(7)\n```', '```js\ns.split(", ")\n```'],
        answer: 2,
        explanation: 'slice(7) takes the characters from index 7 to the end: "world" (the comma and space occupy indices 5 and 6). substring(6,11) gives "o, wo"; slice(0,5) gives "Hello"; split returns an array, not a string.'
      },
      {
        q: 'Which statement about string immutability is correct?',
        options: [
          '```js\nlet s = "hello"; s[0] = "H";\n``` changes s to "Hello"',
          '```js\nlet s = "hello"; s.toUpperCase();\n``` changes s to "HELLO"',
          'Methods that appear to modify a string actually return new string values; the original is unchanged',
          'Strings are mutable, but only inside functions'
        ],
        answer: 2,
        explanation: 'Primitives are immutable (Section 3.6): toUpperCase() returns a new string "HELLO" while s remains "hello", and assigning to s[0] silently does nothing. To change s you must assign: s = s.toUpperCase().'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'js-ch3-s4',
    readingTime: 8,
    intro: 'Booleans are the two-value logic that drives every conditional in the language — but JavaScript sweetens them with truthiness: any value at all can stand in where a boolean is expected. This section defines the boolean type, lists the six falsy values, shows how if statements exploit truthiness, and then untangles the two kinds of nothing: null, the deliberate absence of a value, and undefined, the system-level absence that appears when nothing was ever assigned.',
    objectives: [
      'Use the boolean values true and false as the results of comparisons',
      'Recite the six falsy values and classify any value as truthy or falsy',
      'Compare the strict `if (o !== null)` test with the truthy `if (o)` test and choose between them',
      'Distinguish null from undefined: their origins, their typeof results, and their equality under =='
    ],
    concepts: [
      {
        term: 'Boolean values',
        kind: 'definition',
        statement: 'A **boolean** value represents truth or falsehood, on or off, yes or no — only two possible values, written with the reserved words `true` and `false`. Booleans are generally the result of comparisons:\n```js\na === 4   // true if a equals 4; false otherwise\n```\nand they drive the control structures:\n```js\nif (a === 4) {\n    b = b + 1;\n} else {\n    a = a + 1;\n}\n```\nThe three boolean operators — `&&` (AND), `||` (OR), `!` (NOT) — combine and invert them: `if ((x === 0 && y === 0) || !(z === 0))` means "x and y are both zero, or z is nonzero" (Chapter 4 gives their full, value-returning semantics).',
        detail: 'Booleans have a toString() method yielding "true"/"false" and no other useful methods — the type is trivial on its own; its power comes from truthiness conversion.'
      },
      {
        term: 'Truthy and falsy',
        kind: 'law',
        statement: 'Any JavaScript value can be converted to a boolean. Exactly **six values** convert to (and work like) `false`:\n```js\nundefined\nnull\n0\n-0\nNaN\n""    // the empty string\n```\n**All other values — including all objects and arrays — convert to and work like `true`.** The six are called **falsy** values; everything else is **truthy**. Anywhere JavaScript expects a boolean value, a falsy value works like false and a truthy one like true.',
        detail: 'Note the surprises hiding here: the string "0" is truthy (non-empty string), the empty array [] is truthy (it is an object), and "false" is truthy (it is a non-empty string). Truthiness is about which value you have, not what it looks like.'
      },
      {
        term: 'Explicit test versus truthiness test',
        kind: 'method',
        statement: 'Suppose variable `o` holds either an object or `null`. The explicit test:\n```js\nif (o !== null) ...\n```\nexecutes the body only if `o` is not null. The truthy shortcut:\n```js\nif (o) ...\n```\nis less strict: it executes the body unless `o` is **any** falsy value — null, undefined, 0, -0, NaN or "". Which is appropriate depends on what values you expect: if you need to distinguish null from 0 and "", use the explicit comparison; if any "absence-like" value should skip the body, the shortcut reads cleaner.',
        detail: 'This same choice resurfaces in Chapter 4 with `||` (selects the first truthy operand) versus `??` (selects the first defined operand): the `||` idiom breaks when 0 or "" are legal values.'
      },
      {
        term: 'null',
        kind: 'definition',
        statement: '`null` is a language keyword that evaluates to a special value usually used to indicate the **absence of a value**. Applying `typeof` to it returns the string "object" — indicating that null can be thought of as a special object value that means "no object". In practice, null is regarded as the sole member of its own type, usable to mean "no value" for numbers and strings as well as objects. Most languages have an equivalent: NULL, nil, or None.',
        detail: 'The author’s intent distinction: null is for the everyday, program-level sense of "no value" — a slot deliberately empty.'
      },
      {
        term: 'undefined',
        kind: 'definition',
        statement: '`undefined` represents a **deeper kind of absence**. It is the value of variables that have not been initialized; the value you get when querying a property or array element that does not exist; the return value of functions that do not explicitly return; and the value of parameters for which no argument was passed. `undefined` is a predefined global constant (not a language keyword, though the distinction rarely matters), and `typeof undefined` is "undefined" — the sole member of its own special type.',
        detail: 'Neither null nor undefined has any properties or methods; using `.` or `[]` on either throws a TypeError. The author’s reading: undefined is for the system-level, unexpected, error-like absence — the value the language hands you when nothing was ever put there.'
      },
      {
        term: 'null versus undefined in practice',
        kind: 'insight',
        statement: 'Despite the difference in flavor, both indicate absence and can often be used interchangeably: the equality operator `==` considers them **equal** (`null == undefined` → true; use `===` to distinguish them: `null === undefined` → false). Both are falsy. The pragmatic advice: treat `null` as "deliberately empty" in your own APIs, expect `undefined` from the language’s un-initialized corners, and use `===` when the difference matters.',
        detail: 'Chapter 4’s `??` operator treats exactly these two values as "nullish" — another sign of their kinship as the language’s two absences.'
      }
    ],
    examples: [
      {
        title: 'Trace: the six falsy values meet an if',
        problem: 'Run each value through `if (v) { log("truthy") } else { log("falsy") }` and predict the branch taken.',
        steps: [
          { label: 'Value 1', text: '```js\nif (0) …      // falsy: 0 is one of the six\nif (-0) …     // falsy: negative zero is too\nif (NaN) …    // falsy: NaN converts to false\n```\nThe numeric absences all fail the test.' },
          { label: 'Value 2', text: '```js\nif ("") …         // falsy: the empty string\nif ("0") …        // truthy! non-empty string\nif ("false") …    // truthy! still a non-empty string\n```\nString truthiness is about emptiness, not content — "0" and "false" are truthy.' },
          { label: 'Value 3', text: '```js\nif (null) …        // falsy\nif (undefined) …   // falsy: both absences\n```\nThe two nothings both take the else branch.' },
          { label: 'Value 4', text: '```js\nif ([]) …          // truthy: an object, even empty\nif ({}) …          // truthy\nif (document.all) … // truthy in browsers: an object\n```\n**No object is ever falsy** — not even the empty array or an empty object literal. Testing `if (arr)` cannot distinguish a full array from an empty one.' },
          { label: 'The summary', text: 'falsy = { undefined, null, 0, -0, NaN, "" }; everything else — every object, every non-empty string, every nonzero number — truthy.' }
        ],
        result: 'The if takes the truthy branch for "0", "false", [] and {} and the falsy branch for 0, -0, NaN, "", null and undefined — the six falsy values.'
      },
      {
        title: 'Trace: the four births of undefined',
        problem: 'Show the four situations that produce undefined, according to the book, and confirm each with code.',
        steps: [
          { label: 'Birth 1: uninitialized variable', text: '```js\nlet x;      // declared, never assigned\nx           // => undefined\n```\nA let declaration without initializer gives the binding the value undefined until you assign something.' },
          { label: 'Birth 2: missing property or element', text: '```js\nlet o = {};\no.nonexistent     // => undefined\n[7,8,9][5]        // => undefined\n```\nQuerying a property or index that does not exist yields undefined — not an error. (Contrast null, which you must place yourself.)' },
          { label: 'Birth 3: no return statement', text: '```js\nfunction f() { let a = 1; }   // computes, returns nothing\nf()      // => undefined\n```\nA function with no return (or a bare `return;`) returns undefined to its caller.' },
          { label: 'Birth 4: missing argument', text: '```js\nfunction g(a) { return a; }\ng()      // => undefined: the parameter got no argument\n```\nParameters without arguments hold undefined — the fact that makes default parameters (Chapter 8) necessary.' },
          { label: 'The contrast', text: 'None of these four can ever produce null. null appears only when code deliberately assigns or returns it — which is exactly why the book reads null as "chosen absence" and undefined as "system absence".' }
        ],
        result: 'Uninitialized variables, missing properties, returns without values, and unpassed arguments all yield undefined; null appears only by explicit intent.'
      }
    ],
    keyTakeaways: [
      'Booleans are true/false, produced by comparisons, consumed by conditionals; &&, || and ! combine them.',
      'Exactly six falsy values: undefined, null, 0, -0, NaN, "" — every other value, including all objects and arrays, is truthy.',
      '"0", "false" and [] are truthy: truthiness depends on the value, not its appearance.',
      '`if (o !== null)` tests for null specifically; `if (o)` skips the body for any falsy value — choose based on whether 0 or "" are meaningful.',
      'null = keyword, typeof "object", deliberate absence; undefined = global constant, typeof "undefined", the system’s absence.',
      'undefined appears in four ways: uninitialized variables, missing properties/elements, valueless returns, and unpassed arguments.',
      'null == undefined is true (== treats them as equal); null === undefined is false; both are falsy and neither has properties or methods.'
    ],
    quiz: [
      {
        q: 'Which one of these values is falsy?',
        options:['```js\n"0"\n```', '```js\n[]\n```', '```js\nNaN\n```', '```js\n"false"\n```'],
        answer: 2,
        explanation: 'The six falsy values are undefined, null, 0, -0, NaN and the empty string. "0" and "false" are non-empty strings (truthy), and [] is an object — and no object is ever falsy.'
      },
      {
        q: 'The essential difference between null and undefined is:',
        options: [
          'null is a number; undefined is an object',
          'null indicates a deliberate absence of value, while undefined is the system-level value for things that were never assigned: uninitialized variables, missing properties, valueless returns, unpassed arguments',
          'undefined is deprecated and null replaced it in ES6',
          'null is truthy and undefined is falsy'
        ],
        answer: 1,
        explanation: 'Both are primitive absences and both are falsy, but null is the keyword you use yourself to mean "no value", while undefined is what the language produces for its own uninitialized corners. typeof null is "object"; typeof undefined is "undefined".'
      },
      {
        q: 'What are the values of `null == undefined` and `null === undefined`?',
        options: [
          'true and true',
          'false and false',
          'true and false',
          'false and true'
        ],
        answer: 2,
        explanation: 'The == operator has a special rule treating null and undefined as equal; the strict === does no conversion and the two values (and their types) differ, so it is false.'
      },
      {
        q: 'A variable `options` may hold an object, or the number 0 (both meaningful). To default only when it holds no value at all, which test is correct?',
        options: [
          '```js\nif (!options) …\n```',
          '```js\nif (options == null) …\n```',
          '```js\nif (options == false) …\n```',
          '```js\nif (options = null) …\n```'],
        answer: 1,
        explanation: '`options == null` is true for both null and undefined and nothing else — 0 is not equal to null under ==. The plain truthiness test !options would wrongly treat the legal value 0 as absent (the same reason ?? exists in Chapter 4).'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.5
  {
    sectionId: 'js-ch3-s5',
    readingTime: 9,
    intro: 'ES6’s sixth primitive, Symbol, answers a narrow but real problem: how can code add properties to shared objects without any risk of colliding with anyone else’s property names? A symbol is a value whose only job is to be a unique property key — never equal to any other symbol. This section covers the Symbol() function, the well-known symbols like Symbol.iterator, the global Symbol registry, and the global object itself: the object whose properties are the globally defined identifiers of your program.',
    objectives: [
      'Explain the collision problem symbols solve and the guarantee Symbol() provides',
      'Use symbols as property keys with computed property syntax',
      'Distinguish Symbol() (always unique) from Symbol.for() (the global registry) and Symbol.keyFor()',
      'Name the well-known symbols and Symbol.iterator’s role in for/of',
      'Describe the global object, its initial properties, and globalThis'
    ],
    concepts: [
      {
        term: 'Symbols: unique property keys',
        kind: 'definition',
        statement: 'Property names in objects are typically (and until ES6, exclusively) strings — but in ES6 and later, **Symbols** can also serve as property names:\n```js\nlet strname = "string name";      // A string to use as a property name\nlet symname = Symbol("propname"); // A Symbol to use as a property name\ntypeof strname                    // => "string"\ntypeof symname                    // => "symbol"\nlet o = {};\no[strname] = 1;                   // Define a property with a string name\no[symname] = 2;                   // Define a property with a Symbol name\no[strname]                        // => 1\no[symname]                        // => 2\n```',
        detail: 'Symbols have **no literal syntax** — you obtain them only by calling the `Symbol()` function. That call never returns the same value twice, even with the same argument: every symbol is unique.'
      },
      {
        term: 'The uniqueness guarantee',
        kind: 'law',
        statement: 'Because `Symbol()` never returns the same value twice, a symbol you create can be used as a property name **without any risk of overwriting an existing property**. If you use symbolic property names and do not share the symbols, you can be confident that other modules of your program will never accidentally overwrite your properties — a lightweight namespacing mechanism built into the type system.',
        detail: 'The optional string argument is purely descriptive — it appears in the symbol’s toString() (`Symbol("propname").toString()` → "Symbol(propname)") but has no effect on identity: calling Symbol() twice with the same string produces two completely different symbols.'
      },
      {
        term: 'Symbols as language extension: well-known symbols',
        kind: 'insight',
        statement: 'In practice, symbols serve as a **language extension mechanism**. When ES6 introduced the `for/of` loop and iterable objects, it needed to define a standard way for objects to expose their iterator — without adding a string property name that might clash. The answer: `Symbol.iterator`, a symbol stored as a property of the Symbol function object, used as the method name objects implement to be iterable. Related well-known symbols include `Symbol.hasInstance` (customizes instanceof) and others covered in Chapter 14.\n```js\n// A tiny iterable class using a Symbol-keyed method (Chapter 12 detail):\nclass Range {\n    constructor(from, to) { this.from = from; this.to = to; }\n    [Symbol.iterator]() { /* returns an iterator */ }\n}\n```\nThe bracket syntax `[Symbol.iterator]` — a computed property name — is how symbol-keyed methods are written.',
        detail: 'When you write `for(let x of someObj)`, the engine looks up the method named by the Symbol.iterator symbol. Ordinary string-keyed code cannot collide with it, and your own symbols get the same protection in reverse.'
      },
      {
        term: 'The global symbol registry: Symbol.for()',
        kind: 'method',
        statement: 'Sometimes you want symbols **private** to your code (use `Symbol()`); other times you want to define a symbol and **share it widely** — as an extension point other code can participate in. For that, JavaScript defines a global symbol **registry**. `Symbol.for(string)` returns the symbol associated with that string, creating it if necessary — and **always returns the same symbol for the same string**:\n```js\nlet s = Symbol.for("shared");\nlet t = Symbol.for("shared");\ns === t          // => true\ns.toString()     // => "Symbol(shared)"\nSymbol.keyFor(t) // => "shared"\n```\n`Symbol.keyFor()` retrieves the registry key for a registered symbol (it returns undefined for symbols created by plain `Symbol()`).',
        detail: 'The contrast to memorize: `Symbol()` never repeats; `Symbol.for()` always repeats for a given string. The registry is global to your program — which is the point: two modules that both ask for Symbol.for("shared") get the very same symbol.'
      },
      {
        term: 'The global object',
        kind: 'definition',
        statement: 'The **global object** is a regular JavaScript object with a special purpose: **its properties are the globally defined identifiers available to your program**. When the interpreter starts (or a browser loads a new page), it creates a new global object with an initial set of properties:\n- Global **constants**: `undefined`, `Infinity`, `NaN`\n- Global **functions**: `isNaN()`, `parseInt()`, `eval()`\n- **Constructor functions**: `Date()`, `RegExp()`, `String()`, `Object()`, `Array()`\n- Global **objects**: `Math`, `JSON`\nThese are not reserved words, but they deserve to be treated as if they were.',
        detail: 'In **Node**, the global object has a property named `global` referring to itself. In **browsers**, the **Window** object serves as the global object and has a self-referential `window` property; web workers use `self` instead. ES2020 finally standardizes **`globalThis`** as the way to refer to the global object in any context.'
      }
    ],
    examples: [
      {
        title: 'Trace: Symbol() versus Symbol.for()',
        problem: 'Predict the result of each comparison, then state the guarantee each function provides.',
        steps: [
          { label: 'Round 1: plain Symbol()', text: '```js\nSymbol("x") === Symbol("x")   // => false\n```\nEach call mints a fresh, unique symbol. The argument is documentation, not identity — two symbols with the same description are as different as two objects.' },
          { label: 'Round 2: the registry', text: '```js\nSymbol.for("x") === Symbol.for("x")   // => true\n```\nSymbol.for() consults the global registry: the first call creates a symbol and files it under "x"; the second call finds and returns that same symbol.' },
          { label: 'Round 3: mixing the two', text: '```js\nSymbol("x") === Symbol.for("x")   // => false\n```\nA plain Symbol() never consults the registry, so it can never equal a registered one — even with matching descriptions.' },
          { label: 'Round 4: the key', text: '```js\nSymbol.keyFor(Symbol.for("x"))   // => "x"\nSymbol.keyFor(Symbol("x"))       // => undefined: not registered\n```\nkeyFor() recovers the registry string of a registered symbol; unregistered symbols have no registry key.' },
          { label: 'The rule', text: 'Want a private, collision-proof key? Call `Symbol()`. Want a shared, cross-module key? Call `Symbol.for()` with a well-chosen string. Never expect descriptions to make symbols equal — only the registry does that.' }
        ],
        result: 'Symbol() is always unique; Symbol.for() is unique per string; keyFor() maps back; mixing the two families never compares equal.'
      },
      {
        title: 'Trace: two libraries, one object',
        problem: 'Library A and Library B both want to stash a "version" property on a shared object. Show the string-key collision and the symbol-key fix.',
        steps: [
          { label: 'The collision', text: '```js\nlet shared = {};\nshared["version"] = "A-1.0";     // Library A writes\nshared["version"] = "B-2.0";     // Library B overwrites!\nshared["version"]               // => "B-2.0": A\u0027s value is gone\n```\nString keys share one flat namespace; last writer wins.' },
          { label: 'The fix', text: '```js\nconst A = Symbol("version");\nconst B = Symbol("version");\nshared[A] = "A-1.0";\nshared[B] = "B-2.0";\nshared[A]   // => "A-1.0"\nshared[B]   // => "B-2.0": both coexist\n```\nBoth symbols have the description "version", but they are **different values** — different properties. No overwriting is possible, because no second party can ever obtain the same symbol by accident.' },
          { label: 'The cost', text: 'Symbols must be shared **explicitly**: library A hands its symbol to code that needs to read the property. The string key was guessable; the symbol key is capability — you have it or you do not.' },
          { label: 'When to use the registry instead', text: 'If the property is meant to be an open extension point — any code should be able to participate — use `Symbol.for("myapp.version")` so all parties converge on one symbol by agreement on the string.' }
        ],
        result: 'String keys collide and lose data; symbol keys coexist because uniqueness is guaranteed by the type itself.'
      }
    ],
    keyTakeaways: [
      'Symbols are ES6’s sixth primitive: unique, no literal syntax, obtained by calling Symbol(); typeof is "symbol".',
      'Symbol() never returns the same value twice — so symbol-keyed properties cannot collide, even with identical descriptions.',
      'The string argument to Symbol() is descriptive only, appearing in toString(): Symbol("sym_x") → "Symbol(sym_x)".',
      'Well-known symbols (Symbol.iterator, Symbol.hasInstance, …) extend the language without string-key collisions; computed [Symbol.iterator] syntax defines such methods.',
      'Symbol.for() is a global registry: same string → same symbol, shareable across modules; Symbol.keyFor() recovers the key; Symbol() symbols are never in the registry.',
      'The global object’s properties are your program’s global identifiers (undefined, Infinity, NaN, parseInt, Date, Math, JSON, …); access it as globalThis (ES2020), global in Node, window/self in browsers.'
    ],
    quiz: [
      {
        q: 'What does `Symbol("test") === Symbol("test")` evaluate to?',
        options: ['true, because the descriptions match', 'false, because Symbol() never returns the same value twice', 'true, because symbols are interned like strings', 'It throws a TypeError'],
        answer: 1,
        explanation: 'The string argument is purely descriptive. Every Symbol() call mints a new unique symbol, so two calls never produce equal values — that uniqueness is the entire point of the type.'
      },
      {
        q: 'How does `Symbol.for("shared")` differ from `Symbol("shared")`?',
        options: [
          'There is no difference',
          'Symbol.for() consults a global registry and always returns the same symbol for the same string; Symbol() always returns a fresh unique symbol',
          'Symbol.for() returns a string; Symbol() returns a symbol',
          'Symbol.for() only works inside classes'
        ],
        answer: 1,
        explanation: 'The registry-backed Symbol.for() makes symbols shareable by agreement on a string (the extension-point use case); plain Symbol() makes them private and unrepeatable. Symbol.keyFor() maps registered symbols back to their strings.'
      },
      {
        q: 'Why did ES6 use Symbol.iterator (rather than a string method name) as the hook for the for/of loop?',
        options: [
          'Symbols iterate faster than strings',
          'A symbol-keyed method cannot collide with any user-defined string property, so the new protocol extends the language without breaking existing objects',
          'String method names are not allowed on objects',
          'Because symbols are enumerable'
        ],
        answer: 1,
        explanation: 'A well-known symbol reserves the protocol slot immutably: no code using string keys can accidentally shadow it, and existing objects are unaffected — symbols as a language-extension mechanism.'
      },
      {
        q: 'In a web browser, the global object is:',
        options: [
          'the document object',
          'the Window object, referenced by its self-referential window property (and by the ES2020 standard name globalThis)',
          'the Math object',
          'there is none: identifiers resolve directly to values'
        ],
        answer: 1,
        explanation: 'The Window object serves as the global object for a page’s code (window refers to it; workers use self), and globalThis standardizes the reference across every host — Node uses global as its name.'
      },
      {
        q: 'Which of the following is NOT among the initial properties of the global object listed in the chapter?',
        options: ['the constant undefined', 'the function parseInt()', 'the object Math', 'the statement keyword while'],
        answer: 3,
        explanation: 'Keywords like while are part of the language grammar, not properties of the global object. The global object holds constants (undefined, Infinity, NaN), functions (isNaN, parseInt, eval), constructors (Date, RegExp, String, …) and objects (Math, JSON).'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.6
  {
    sectionId: 'js-ch3-s6',
    readingTime: 8,
    intro: 'There is a fundamental difference between primitives and objects that explains half the surprising behavior in JavaScript programs: primitives are immutable and compared by value; objects are mutable and compared by reference. Two distinct objects are never equal, no matter how identical their contents — but two names can refer to one object, and changes through either are visible through both. This section makes the distinction precise and shows how to copy and compare objects when you need value semantics.',
    objectives: [
      'State the immutability of primitives and demonstrate that string methods return new strings',
      'Explain compare-by-value for primitives and compare-by-reference for objects',
      'Predict the outcome of mutating an object through a second reference',
      'Copy arrays and objects explicitly, and write a by-value array comparison'
    ],
    concepts: [
      {
        term: 'Primitives are immutable',
        kind: 'law',
        statement: 'There is no way to change (or "mutate") a primitive value. This is obvious for numbers and booleans — it does not even make sense to "change the value of 3". For strings it is less obvious but equally true: because strings behave like arrays of characters, you might expect to alter the character at an index. You cannot:\n```js\nlet s = "hello";   // Start with some lowercase text\ns.toUpperCase();   // Returns "HELLO", but doesn\u0027t alter s\ns                 // => "hello": the original string has not changed\n```\nAll string methods that appear to modify a string in fact return **new** strings.',
        detail: 'Assignment changes which value a *variable* refers to, never the value itself. `s = s.toUpperCase();` rebinds the name to a fresh string; the old "hello" is untouched (and, now unreachable, becomes collectible).'
      },
      {
        term: 'Primitives compare by value',
        kind: 'law',
        statement: 'Two primitive values are the same if and only if they have **the same value**. For numbers, booleans, null and undefined this is self-evident — there is no other way they could compare. For strings it needs saying: two distinct string values are equal if and only if they have **the same length and the same 16-bit value at every position**. Two string literals with the same characters compare equal even if the program wrote them in different places.',
        detail: 'No normalization is performed: two strings that look identical but use different Unicode encodings (Section 2.4’s composed versus combining é) are NOT equal — === compares the 16-bit values, and they differ.'
      },
      {
        term: 'Objects are mutable',
        kind: 'definition',
        statement: 'Objects differ from primitives in two linked ways. First, they are **mutable** — their values can change:\n```js\nlet o = { x: 1 };     // Start with an object\no.x = 2;               // Mutate it by changing a property value\no.y = 3;               // Mutate again by adding a new property\nlet a = [1,2,3];      // Arrays are mutable too\na[0] = 0;              // Change an element\na[3] = 4;              // Add one\n```',
        detail: 'The object’s identity persists through the changes: it is the same object before and after, which is what makes the reference semantics below meaningful.'
      },
      {
        term: 'Objects compare by reference',
        kind: 'law',
        statement: 'Two distinct objects are **never equal**, even if they have the same properties with the same values — and two distinct arrays are never equal even with the same elements in the same order:\n```js\nlet o = {x: 1}, p = {x: 1};   // Two objects with same properties\no === p                       // => false: distinct objects never equal\nlet a = [], b = [];           // Two distinct, empty arrays\na === b                       // => false: distinct arrays never equal\n```\nObjects are sometimes called **reference types** to distinguish them from primitives: object values are **references**, and two object values are the same if and only if they **refer to the same underlying object**:\n```js\nlet a = [];        // The variable a refers to an empty array.\nlet b = a;         // Now b refers to the same array.\nb[0] = 1;          // Mutate the array referred to by variable b.\na[0]               // => 1: the change is also visible through a.\na === b            // => true: a and b refer to the same object.\n```',
        detail: 'So `===` on objects is an **identity** test: same reference or nothing. This is why comparing two freshly built arrays of equal content fails, and why JSON round trips and copies never compare equal to their originals.'
      },
      {
        term: 'Copying and comparing by value',
        kind: 'method',
        statement: 'Assigning an object to a variable assigns the **reference** — it never copies. To copy, you must explicitly duplicate properties or elements:\n```js\nlet a = ["a","b","c"];              // An array we want to copy\nlet b = [];                         // A distinct array to copy into\nfor(let i = 0; i < a.length; i++) { // For each index of a\n    b[i] = a[i];                    // Copy the element\n}\nlet c = Array.from(b);              // ES6: copy arrays with Array.from()\n```\nAnd to compare arrays by value, write the loop yourself:\n```js\nfunction equalArrays(a, b) {\n    if (a === b) return true;                // Identical arrays are equal\n    if (a.length !== b.length) return false; // Different sizes not equal\n    for(let i = 0; i < a.length; i++) {      // Loop through all elements\n        if (a[i] !== b[i]) return false;     // Any difference: not equal\n    }\n    return true;                             // Otherwise: equal\n}\n```',
        detail: 'Note that equalArrays compares elements with ===, so nested arrays/objects inside are compared by reference again — a fully deep comparison needs recursion. (ES2019+ also offers structuredClone for deep copies of most objects.)'
      }
    ],
    examples: [
      {
        title: 'Trace: by value versus by reference',
        problem: 'Run both blocks and explain why the outcomes differ.',
        steps: [
          { label: 'Block 1: numbers', text: '```js\nlet x = 1;\nlet y = x;    // copy the VALUE 1\ny = 2;        // rebind y\nx            // => 1: untouched\nx === y       // => false (1 vs 2), but 1 === 1 elsewhere is true\n```' },
          { label: 'Step 1: What assignment did', text: 'For primitives, `let y = x` copies the value itself into the new binding. The two variables are thereafter independent — nothing done to y can affect x.' },
          { label: 'Block 2: objects', text: '```js\nlet a = { n: 1 };\nlet b = a;       // copy the REFERENCE\nb.n = 2;         // mutate the shared object\na.n              // => 2: visible through a!\na === b          // => true: same object\n```' },
          { label: 'Step 2: What assignment did here', text: 'For objects, `let b = a` copies only the **reference** — both names now point at one object. Mutating through either name rewrites the shared thing both names see.' },
          { label: 'Step 3: The equality contrast', text: '```js\n{ n: 2 } === { n: 2 }   // => false: two objects, same content\n``` Duplicate content is irrelevant — distinct references are never equal. Equality for objects means identity, not resemblance.' },
          { label: 'The rule', text: 'Primitives: value semantics — copy on assign, compare contents. Objects: reference semantics — share on assign, compare identity. Every "why did my other variable change?" bug is this table.' }
        ],
        result: 'Numbers copy independently; objects share one underlying value, so mutations through b appear at a, and only identical references compare equal.'
      },
      {
        title: 'Trace: mutating a shared array from two names',
        problem: 'Three variables hold "the same" array. Trace each mutation and the final state of each name.',
        steps: [
          { label: 'Setup', text: '```js\nlet a = [1, 2];\nlet b = a;\nlet c = [1, 2];   // same contents, different array\n```' },
          { label: 'Step 1: A push', text: '```js\nb.push(3);\n``` b refers to the same array as a, so both now see [1, 2, 3]. c is untouched: [1, 2].' },
          { label: 'Step 2: Rebinding one name', text: '```js\nb = [9];\n``` This makes b refer to a NEW array — it does not modify the shared one. a still sees [1, 2, 3]. Assignment redirects a reference; mutation edits the referent.' },
          { label: 'Step 3: The comparison', text: '```js\na === c          // => false: c is a distinct array\na === [1,2,3]    // => false: a fresh literal is a fresh array\n```\nContent is irrelevant to === — identity is the only question it asks. Even an array built to look exactly like a is not a.' },
          { label: 'Step 4: Final state', text: 'a → [1, 2, 3]; b → [9]; c → [1, 2]. One mutation, visible through every name that referenced the target; one reassignment, visible through exactly one name.' }
        ],
        result: 'Mutating through b changed what a saw; rebinding b did not. Content equality never holds between distinct arrays — identity is the only ===.'
      }
    ],
    keyTakeaways: [
      'Primitives are immutable — there is no operation that changes the value itself; string methods return new strings.',
      'Primitives compare by value: equal iff same length and same bits at every position (strings), or the same value (numbers, booleans).',
      'Objects are mutable: property values can change, properties can be added and removed, array elements can be overwritten — identity persists.',
      'Objects compare by reference (identity): two distinct objects are never equal regardless of content; a === b is true only when both refer to the same object.',
      'Assignment of an object copies only the reference — mutations through one name are visible through all names for that object.',
      'To copy: loop the elements, or Array.from() (ES6). To compare by value: compare lengths then each element with a loop (deep comparison needs recursion).'
    ],
    quiz: [
      {
        q: 'After `let s = "hello"; s.toUpperCase();` what is the value of s?',
        options: ['"HELLO"', '"hello"', 'undefined', 'It throws, because strings are immutable'],
        answer: 1,
        explanation: 'Strings are immutable primitives: toUpperCase() returns a new string "HELLO" and leaves s holding "hello". To change s you must capture the result: s = s.toUpperCase().'
      },
      {
        q: 'What does `[] === []` evaluate to, and why?',
        options: [
          'true: both are empty arrays',
          'false: two distinct array objects are never equal, even with identical content — objects compare by reference',
          'true: empty arrays are interned',
          'It throws a TypeError'
        ],
        answer: 1,
        explanation: 'Each [] literal creates a new array, and === on objects is an identity test on references. Distinct references never compare equal, no matter how similar the contents.'
      },
      {
        q: 'Given `let a = {x: 1}; let b = a; b.x = 2;`, what is `a.x`?',
        options: ['1', '2', 'undefined', 'This code throws'],
        answer: 1,
        explanation: 'b = a copies the reference, not the object: both names refer to the same object, so the mutation b.x = 2 is visible through a as well.'
      },
      {
        q: 'You need two independent copies of an array so that edits to one never affect the other. Which approach works?',
        options: [
          '```js\nlet b = a;\n```',
          '```js\nlet b = Array.from(a);\n```',
          '```js\nlet b = a.slice();\n``` — and note this copies only one level; nested objects inside are still shared',
          'Both B and C (while a plain assignment b = a does NOT copy)'
        ],
        answer: 3,
        explanation: 'Assignment copies only the reference. Array.from(a) (or a slice loop, or a.slice()) creates a distinct array with the same top-level elements. Beware: if the elements are themselves objects, both copies reference those same objects — a fully deep copy needs more.'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.7
  {
    sectionId: 'js-ch3-s7',
    readingTime: 12,
    intro: 'JavaScript is famously flexible about types: give it a string where it wants a number, and it converts. This section maps the whole conversion territory — the primitive-to-primitive table (with its surprising entries), the difference between explicit conversion and the coercion performed by == and the arithmetic operators, and the genuinely subtle part: how objects convert to primitives via the prefer-string, prefer-number and no-preference algorithms that drive valueOf() and toString().',
    objectives: [
      'Apply the conversion table: any value to string, number or boolean',
      'Distinguish the == operator’s conversions from === and list the pairs that compare equal',
      'Perform explicit conversions with Boolean(), Number(), String() and the operator idioms (+x, x + "", !!x)',
      'Trace object-to-primitive conversion: toString(), valueOf(), and the three preference algorithms',
      'Explain the notorious `Number([])` === 0 and `Number([9])` === 9 results',
      'Format and parse numbers with toFixed, toExponential, toPrecision, parseInt/parseFloat'
    ],
    concepts: [
      {
        term: 'The conversion table',
        kind: 'definition',
        statement: 'If JavaScript wants a string, it converts whatever you give it to a string; if it wants a number, it tries (yielding **NaN** when it cannot); if it wants a boolean, it applies truthiness (Section 3.4). Selected rows of the chapter’s Table 3-2 (the surprising entries marked with !):\n```js\nValue                      to String      to Number    to Boolean\nundefined                  \"undefined\"     NaN          false\nnull                       \"null\"          0 (!)        false\ntrue / false               \"true\"/\"false\"  1 / 0        —\n\"\"  (empty string)          —               0 (!)        false\n\"1.2\" (numeric string)     —               1.2          true\n\"one\" (non-numeric)         —               NaN          true\n0 / -0                     \"0\"             —            false\nInfinity                   \"Infinity\"      —            true\nNaN                        \"NaN\"           —            false\n{}  (any object)            via toString    see below    true\n[]  (empty array)           \"\" (!)           0 (!)        true (!)\n[9] (one numeric element)   \"9\"             9 (!)        true\n[\"a\"] (any other array)      via join()      NaN          true\n```\nThe double surprise in the [] row: the empty array converts to the number 0 — but to the boolean **true**. The two columns follow different rules (truthiness for one, the object-to-primitive algorithms below for the other).',
        detail: 'Every string converts to either a number, NaN, or… note "1.2" works but "1 2" does not: leading/trailing whitespace is allowed, any other non-numeric characters produce NaN. And remember objects: ALL objects — including arrays and even new Boolean(false) — are truthy.'
      },
      {
        term: 'Conversions in practice',
        kind: 'method',
        statement: '```js\n10 + " objects"           // => "10 objects": 10 converts to a string\n"7" * "4"                 // => 28: both strings convert to numbers\nlet n = 1 - "x";          // n == NaN: "x" can\u0027t convert to a number\nn + " objects"            // => "NaN objects": NaN converts to "NaN"\n```\nThe `+` operator prefers **strings** (concatenation if either operand is string-like); the other arithmetic operators prefer **numbers** — which is why "7" * "4" multiplies but "7" + "4" concatenates.'
      },
      {
        term: 'Conversions and equality',
        kind: 'law',
        statement: 'The strict equality operator `===` performs no type conversion; the `==` operator does, and all of these comparisons are true:\n```js\nnull == undefined   // => true: the two absences are treated as equal\n"0" == 0           // => true: string converts to number first\n0 == false         // => true: boolean converts to number first\n"0" == false       // => true: both operands convert to 0!\n```\nThe general == algorithm: same type → strict comparison; null vs undefined → equal; number vs string → convert string to number; boolean vs anything → convert boolean to 1/0; object vs primitive → convert object to primitive and retry. **But convertibility does not imply equality**: `undefined == false` is false — == never converts its operands to booleans.',
        detail: 'The chapter’s advice, developed fully in Chapter 4: == is a legacy feature and a known source of bugs; almost always use === and !==. The three == behaviors worth memorizing are the four comparisons above (and that NaN equals nothing under either operator).'
      },
      {
        term: 'Explicit conversions',
        kind: 'method',
        statement: 'The conversion functions make intent visible:\n```js\nNumber("3")     // => 3\nString(false)   // => "false"\nBoolean([])     // => true\n```\nAll values except null and undefined also have a toString() method. Three operator idioms do the same jobs — you will see them in real code:\n```js\nx + ""   // String(x)\n+x       // Number(x)\nx - 0    // Number(x)\n!!x      // Boolean(x)\n```',
        detail: 'The Number()/String()/Boolean() functions can also be invoked with new to produce "wrapper" objects — a historical leftover with no good use. And note the unary idioms fail differently on BigInt: unary + rejects BigInts entirely.'
      },
      {
        term: 'Object-to-primitive algorithms',
        kind: 'method',
        statement: 'Objects convert to primitives through one of three algorithms, chosen by context:\n- **prefer-string**: try `toString()` first, then `valueOf()` — used when a string is wanted (template literals, String()).\n- **prefer-number**: try `valueOf()` first, then `toString()` — used when a number is wanted (most operators, the relational operators).\n- **no-preference**: Date uses prefer-string; every other object uses prefer-number — used by `+`, `==`.\nIn each algorithm: use the first method that exists and returns a primitive (even if it is not the requested type); if neither returns a primitive, throw a TypeError.\n```js\n// The two methods at work:\n({x: 1, y: 2}).toString()     // => "[object Object]"\n[1,2,3].toString()            // => "1,2,3"\n(function(x) { f(x); }).toString()  // => "function(x) { f(x); }"\n/\u005Cd+/g.toString()                  // the regex source\nlet d = new Date(2010, 0, 1);\nd.toString()   // => "Fri Jan 01 2010 ..."\nd.valueOf()    // => 1262332800000: ms since the epoch\n```',
        detail: 'The default valueOf() simply returns the object itself (not a primitive), so for plain objects both algorithms end up at toString(). Wrapper classes’ valueOf() returns the wrapped primitive. The full specification details (Symbol.toPrimitive and more) are in Chapter 14.'
      },
      {
        term: 'Why Number([]) is 0 and Number([9]) is 9',
        kind: 'insight',
        statement: 'The array-to-number results that look like bugs are the algorithms running exactly as specified:\n```js\nNumber([])    // => 0: this is unexpected!\nNumber([99])  // => 99: really?\n```\nObject-to-number conversion first applies the **prefer-number** algorithm: Array inherits the default valueOf() (returns the object itself — not a primitive), so it falls back to **toString()**. An empty array stringifies to ""; "" converts to the number 0. A single-element array stringifies to its element’s string: "99"; "99" converts to 99. Longer arrays stringify like "9,8", and "9,8" converts to NaN.',
        detail: 'The same cascade explains `"1" + [2]` → "12": + uses no-preference (prefer-number for arrays), Array → "2" (primitive), then since one operand is a string, concatenation.'
      }
    ],
    examples: [
      {
        title: 'Trace: "1" == true, step by step',
        problem: 'Show exactly why `"1" == true` is true, applying one == rule at a time.',
        steps: [
          { label: 'The expression', text: '```js\n"1" == true\n``` Types differ (string vs boolean), so == begins converting.' },
          { label: 'Rule: boolean converts to number', text: 'When either value is a boolean, convert it to a number and retry: `true` → 1. The comparison is now `"1" == 1`.' },
          { label: 'Rule: string converts to number', text: 'When one side is a number and the other a string, convert the string: `"1"` → 1. The comparison is now `1 == 1`.' },
          { label: 'Same type: strict equality decides', text: 'Two equal numbers: **true**. Two very different-looking values really do compare equal under ==' },
          { label: 'The sequel', text: 'The same cascade gives "0" == false → true ("0" → 0, false → 0), and explains why == is treated as a bug source: every comparison must be traced through this algorithm. `"1" === true` is false — no conversion, no surprise.' }
        ],
        result: 'true → 1, "1" → 1, and 1 == 1: two conversions, one surprising equality — the canonical demonstration of why === is the default recommendation.'
      },
      {
        title: 'Trace: Number([]) through the algorithms',
        problem: 'Evaluate `Number([])` and `Number([9])` by walking the object-to-primitive machinery one step at a time.',
        steps: [
          { label: 'Step 1: Number() wants a number', text: 'Object-to-number conversion starts with the **prefer-number** algorithm: try valueOf() first, then toString().' },
          { label: 'Step 2: valueOf() is useless here', text: 'Arrays inherit the default valueOf(), which returns the object **itself** — not a primitive. The algorithm moves on to toString(). (Only wrapper classes and a few built-ins like Date have meaningful valueOf() methods.)' },
          { label: 'Step 3: toString() produces the primitive', text: 'For []: the empty array stringifies to `""`. For [9]: toString() joins elements with commas — `"9"`.' },
          { label: 'Step 4: String to number', text: 'The primitive is then converted by the string-to-number rules: `""` → 0, `"9"` → 9. Results: `Number([])` === 0 and `Number([9])` === 9, and `Number([9, 8])` is NaN because "9,8" is not a numeric string.' },
          { label: 'The takeaway', text: 'Nothing buggy happened — the spec was followed to the letter. The lesson is to never rely on accidental object coercion: convert explicitly (`String(x)`, `Number(x)`) whenever a value crosses a type boundary.' }
        ],
        result: 'valueOf() fails to give a primitive → toString() yields "" or "9" → string-to-number gives 0 and 9. The "unexpected" results are the specified pipeline in action.'
      },
      {
        title: 'Trace: + with mixed operand types',
        problem: 'Evaluate each expression using the + operator’s rules (objects first, then string-preference, then numbers).',
        steps: [
          { label: 'Pair 1', text: '```js\n1 + 2          // => 3: both numbers, addition\n"1" + "2"      // => "12": both strings, concatenation\n``` No conversion needed in either case.' },
          { label: 'Pair 2', text: '```js\n"1" + 2        // => "12"\n1 + "2"        // => "12"\n``` If either operand is a string, the other converts to a string and concatenation wins.' },
          { label: 'Pair 3', text: '```js\n1 + {}          // => "1[object Object]"\n2 + null        // => 2    (null → 0)\n2 + undefined   // => NaN  (undefined → NaN)\ntrue + true     // => 2    (true → 1)\n``` The object stringifies via no-preference (→ toString()); null and undefined follow the number column of the table; booleans convert to numbers when no string is present.' },
          { label: 'Pair 4: associativity bites', text: '```js\n1 + 2 + " blind mice"    // => "3 blind mice"\n1 + (2 + " blind mice")  // => "12 blind mice"\n``` + is left-associative: the first line adds 1+2 numerically, then concatenates. Parentheses reorder: 2 concatenates with the string first, then 1 joins the text. Same tokens, different results — the order of + matters when strings mix in.' }
        ],
        result: 'The decision cascade: convert objects to primitives; if either operand is then a string, concatenate; otherwise add numerically — and left-to-right associativity decides which + acts first.'
      }
    ],
    keyTakeaways: [
      'JavaScript converts implicitly wherever a type is expected: strings for string contexts, numbers-or-NaN for numeric contexts, truthiness for boolean contexts.',
      'Surprising table rows: null → 0, "" → 0 (but falsy), all objects including [] and new Boolean(false) → true, [] → 0 and [9] → 9 as numbers.',
      '== converts: null == undefined, "0" == 0, 0 == false, "0" == false are all true; === never converts — prefer it (and !==).',
      'Explicit conversions: Number(), String(), Boolean(); the idioms +x, x-0, x+"", !!x do the same jobs.',
      'Objects convert via prefer-string (toString then valueOf), prefer-number (valueOf then toString), or no-preference (Date → string, everything else → number); first primitive result wins, else TypeError.',
      'Number([]) === 0 because arrays’ default valueOf() returns the object itself, so toString() runs: "" → 0; Number([9]) === 9 via "9" → 9.',
      '+ prefers strings (concatenate if either operand is string-like after object conversion); * - / % prefer numbers; + is left-associative, so 1+2+"m" ≠ 1+(2+"m").'
    ],
    quiz: [
      {
        q: 'Which one of these == comparisons is FALSE?',
        options: [
          '```js\nnull == undefined\n```',
          '```js\n"0" == 0\n```',
          '```js\nundefined == false\n```',
          '```js\n0 == false\n```'],
        answer: 2,
        explanation: '== has a special rule making null and undefined equal, converts "0"→0 and false→0; but it NEVER converts its operands to booleans — so undefined == false is false, despite both being falsy. Convertibility does not imply equality.'
      },
      {
        q: 'What is `Number([9])` and why?',
        options: [
          '9 — arrays convert to their length',
          '9 — the prefer-number algorithm finds valueOf() returns the object itself, so toString() runs, producing "9", which converts to the number 9',
          'NaN — arrays are never numeric',
          'It throws a TypeError'
        ],
        answer: 1,
        explanation: 'The default valueOf() is not a primitive, so the algorithm falls back to toString(): a one-element array stringifies to its element’s string "9", which parses to 9. The same cascade with [] gives "" → 0.'
      },
      {
        q: 'Which of these values is TRUTHY?',
        options: ['```js\nnew Boolean(false)\n```', '```js\n""\n```', '```js\n0\n```', '```js\nNaN\n```'],
        answer: 0,
        explanation: 'Object-to-boolean conversion is trivial: ALL objects convert to true — including empty arrays and even the wrapper object wrapping false. Only undefined, null, 0, -0, NaN and "" are falsy.'
      },
      {
        q: 'What are the values of `1 + 2 + " mice"` and `1 + (2 + " mice")`?',
        options: [
          '"3 mice" and "12 mice"',
          '"12 mice" and "3 mice"',
          '"3 mice" and "3 mice"',
          '"12 mice" and "12 mice"'
        ],
        answer: 0,
        explanation: '+ is left-associative: 1+2 is numeric addition (3), then 3 concatenates with the string. With parentheses, 2 concatenates first ("2 mice"), and 1 then joins the text — "12 mice". Order matters when strings are mixed with +.'
      },
      {
        q: 'When an object must convert to a number, which method does JavaScript try FIRST (for ordinary, non-Date objects)?',
        options: ['toString()', 'valueOf()', 'Symbol.toPrimitive only', 'toLocaleString()'],
        answer: 1,
        explanation: 'Number contexts use the prefer-number algorithm: valueOf() first, falling back to toString() only if valueOf() is missing or returns an object. String contexts reverse the order (prefer-string), and + and == use the no-preference variant.'
      }
    ]
  },

  // ---------------------------------------------------------------- 3.8
  {
    sectionId: 'js-ch3-s8',
    readingTime: 12,
    intro: 'Before you can use a name, you must declare it. Modern JavaScript gives you let and const — block-scoped, with a temporal dead zone that makes use-before-declaration an actual error — while legacy var hoists declarations to the top of the function and quietly yields undefined. This section covers all three keywords, their scoping rules, the hoisting hazards, and then the jewel of ES6 declarations: destructuring assignment, which unpacks arrays and objects into variables with defaults, rest, skipping and nesting.',
    objectives: [
      'Declare variables and constants with let and const, with initialization best practices',
      'Explain block scope versus var’s function scope, and read a nested-scope example correctly',
      'Define hoisting and the temporal dead zone, and predict each one’s error behavior',
      'Describe how undeclared assignments become (deletable) globals outside strict mode',
      'Destructure arrays and objects: defaults, rest (...), skipping commas, renaming with colon, and nesting'
    ],
    concepts: [
      {
        term: 'let and const',
        kind: 'definition',
        statement: 'Variables are declared with `let`; constants with `const`. Initialize when you declare, when possible:\n```js\nlet i;\nlet sum;\nlet i, sum;                          // multiple names in one statement\nlet message = "hello";\nlet i = 0, j = 0, k = 0;\nlet x = 2, y = x*x;                  // initializers can use earlier names\n```\nIf you omit the initializer, the variable’s value is `undefined` until assigned. `const` works like `let` except you **must** initialize immediately, and the value can never be reassigned (any attempt throws a TypeError):\n```js\nconst H0 = 74;          // Hubble constant (km/s/Mpc)\nconst C = 299792.458;   // Speed of light in a vacuum (km/s)\nconst AU = 1.496E8;     // Astronomical Unit (km)\n```\nAll-capitals names like H0 or HTTP_NOT_FOUND are a common (not universal) convention for constants.',
        detail: 'Two schools of thought on when to use const: only for fundamentally unchanging values (physical constants, version numbers) — the author’s preference — or for *any* value that does not happen to change, switching to let only when needed. Note: const prevents **reassignment**, not mutation of object contents.'
      },
      {
        term: 'Block scope',
        kind: 'law',
        statement: 'Variables and constants declared with `let` and `const` are **block-scoped**: defined only within the block (curly-braced region) containing the declaration. Function bodies, class bodies, if/else clauses, and loop bodies are all blocks. A declaration at the top level, outside any block, is a **global** with global scope. Loop variables declared in a `for`/`for in`/`for of` header have the loop body as their scope:\n```js\nfor(let i = 0, len = data.length; i < len; i++) console.log(data[i]);\nfor(let datum of data) console.log(datum);\nfor(const property in object) console.log(property);\n```\nYou can even declare loop "variables" with `const` — legal as long as the body does not reassign the value; the const simply holds one iteration’s value at a time.',
        detail: 'In Node and in client-side modules, a "global" is scoped to its file. In traditional client-side script, a global declared in one <script> is visible in every script that runs after the declaration.'
      },
      {
        term: 'Repeated declarations and shadowing',
        kind: 'law',
        statement: 'Using the same name in **two let/const declarations of the same scope is a syntax error**. Declaring a new variable with the same name in a **nested** scope is legal (though best avoided) — the inner declaration **shadows** the outer:\n```js\nconst x = 1;        // Declare x as a global constant\nif (x === 1) {\n    let x = 2;      // Inside a block, x can refer to a different value\n    console.log(x); // Prints 2\n}\nconsole.log(x);     // Prints 1: back in the global scope\nlet x = 3;          // ! Syntax error: re-declaring x in the same scope\n```',
        detail: 'Also note: JavaScript variable declarations carry no type — a variable may hold a number now and a string later (`let i = 10; i = "ten";` is legal if poor style). TypeScript and Flow (Chapter 17) add optional type annotations.'
      },
      {
        term: 'var: function scope and hoisting',
        kind: 'definition',
        statement: 'Before ES6, `var` was the only declaration. It differs from `let` in four ways:\n- **No block scope**: var variables are scoped to the body of the containing **function**, no matter how deeply nested in blocks.\n- **var globals become properties of the global object** (so `var x = 2;` outside a function behaves like `globalThis.x = 2;`, though not perfectly: such properties cannot be deleted). let/const globals are not properties of the global object.\n- **Redeclaration is legal**: because var variables have function scope, `for(var i = 0; ...)` loops routinely redeclare the same i.\n- **Hoisting**: the declaration is lifted to the top of the enclosing function — the variable can be used anywhere in the function without error; before the initialization line runs, its value is `undefined`.\n```js\n// The classic hoisting surprise:\nvar y = "global";\nfunction f() {\n    console.log(y);   // undefined — NOT "global": the hoisted\n    var y = "local";  // declaration already exists up here\n}\n```',
        detail: 'In modern JavaScript there is really no reason to use var instead of let — except reading old code, where var’s hoisting explains otherwise mysterious undefineds.'
      },
      {
        term: 'The temporal dead zone',
        kind: 'insight',
        statement: 'let and const are hoisted too — the name is known to the engine from the start of the block — but they live in a **temporal dead zone (TDZ)** until the declaration statement executes. Referencing the variable in that window does not yield undefined: it **throws a ReferenceError**. This is let’s correction of var’s silent-undefined misfeature: use-before-declaration becomes an actual error instead of a quiet bug:\n```js\n{\n    console.log(x);   // !ReferenceError: Cannot access \u0027x\u0027\n    let x = 1;        // …before initialization\n}\n```',
        detail: 'The error message engines give ("Cannot access ‘x’ before initialization") is the TDZ made visible. The practical rule it enforces: declare before you use — the same discipline every reader of the code already assumed.'
      },
      {
        term: 'Undeclared variables',
        kind: 'insight',
        statement: 'Outside strict mode, assigning to a name never declared with let, const or var **creates a new global variable** — no matter how deeply nested the code:\n```js\nfunction f() {\n    oops = 42;   // no declaration: accidental global!\n}\nf();\noops            // => 42: now visible everywhere\n```\nThis is bug-prone and one of the best arguments for strict mode, where the same code throws a ReferenceError instead. Accidentally-created globals are like var globals — properties of the global object — but unlike proper var declarations, they CAN be deleted with the delete operator.',
        detail: 'The moral: always declare. A typo in an assignment (`conts = 3;`) silently becomes a global under sloppy mode and corrupts unrelated code; strict mode turns it into an immediate error at the exact line.'
      },
      {
        term: 'Destructuring assignment',
        kind: 'definition',
        statement: 'ES6 destructuring unpacks structured values into variables. The left side mimics array and object literal syntax:\n```js\nlet [x,y] = [1,2];   // Same as let x=1, y=2\n[x,y] = [x+1,y+1];   // Same as x = x + 1, y = y + 1\n[x,y] = [y,x];       // Swap the values of the two variables\n[x,y]                // => [3,2]: incremented and swapped\n```\nIt shines with functions returning arrays:\n```js\nfunction toPolar(x, y) {          // Convert [x,y] to [r,theta]\n    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];\n}\nfunction toCartesian(r, theta) {   // Polar to Cartesian\n    return [r*Math.cos(theta), r*Math.sin(theta)];\n}\nlet [r,theta] = toPolar(1.0, 1.0);   // r == Math.sqrt(2); theta == Math.PI/4\nlet [x,y] = toCartesian(r,theta);    // back to [1.0, 1.0]\n```',
        detail: 'Destructuring works in let/const/var declarations, in plain assignments to already-declared variables, and — from Chapter 8 — in function parameter lists.'
      },
      {
        term: 'Destructuring extras: skip, rest, nested, objects, defaults',
        kind: 'method',
        statement: 'The full toolkit, each rule shown in one line:\n```js\nlet [x,y] = [1];        // x == 1; y == undefined: extras get undefined\n[x,y] = [1,2,3];        // x == 1; y == 2: extra values ignored\n[,x,,y] = [1,2,3,4];    // x == 2; y == 4: commas skip values\nlet [x, ...y] = [1,2,3,4];  // y == [2,3,4]: rest collects the remainder\nlet [a, [b, c]] = [1, [2,2.5], 3];  // a==1; b==2; c==2.5: nesting\nlet [first, ...rest] = "Hello";  // first=="H"; rest==["e","l","l","o"]\n```\nArrays destructure any **iterable** (that is why the string works). Object destructuring uses braces, matching property names; `name: local` renames, and the left side ignores unmatched properties:\n```js\nlet transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};\nlet {r, g, b} = transparent;         // r == g == b == 0.0\nconst {sin, cos, tan} = Math;       // same as three separate consts\nconst { cos: cosine, tan: tangent } = Math;  // renamed copies\nlet [{x: x1, y: y1}, {x: x2, y: y2}] = [{x: 1, y: 2}, {x: 3, y: 4}];\n// a mix of nested arrays/objects works too — see the chapter’s points example\n```\nIn `for` loops and with `Object.entries()`:\n```js\nlet o = { x: 1, y: 2 };\nfor(const [name, value] of Object.entries(o)) {\n    console.log(name, value);   // "x 1" then "y 2"\n}\n```',
        detail: 'Object destructuring may include **defaults**: `let { timeout = 1000 } = options;` assigns 1000 when the property is undefined — the idiom behind default options objects. To check a complex destructuring, flip it: after `let [{x: x1}, {x: x2}] = points;`, the left side `[{x: x1}, {x: x2}]` should work as a valid literal reproducing the structure.'
      }
    ],
    examples: [
      {
        title: 'Trace: the temporal dead zone',
        problem: 'Contrast var’s silent undefined with let’s loud ReferenceError for the same use-before-declaration.',
        steps: [
          { label: 'The var version', text: '```js\nfunction f() {\n    console.log(x);   // prints: undefined\n    var x = 1;\n    console.log(x);   // prints: 1\n}\n``` Hoisting moved `var x;` to the top of f — so the first log reads a declared-but-uninitialized variable: undefined. No error; just quiet wrongness.' },
          { label: 'The let version', text: '```js\nfunction g() {\n    console.log(x);   // !ReferenceError: Cannot access \u0027x\u0027\n    let x = 1;        //    before initialization\n}\n``` The engine knows about x from the start of the block (it is hoisted), but the binding is in the **temporal dead zone** until the let statement runs. Reading it there throws.' },
          { label: 'Why the TDZ is a feature', text: 'The var version hides the bug: undefined flows onward and fails somewhere far away. The let version fails **at the offending line**, with a message naming the variable — the difference between debugging for an hour and reading one error message.' },
          { label: 'A subtle companion case', text: '```js\nlet x = "outer";\n{\n    let x = x + 1;   // !ReferenceError: the inner x\u0027s TDZ\n}\n``` The new block’s x shadows the outer one **from the top of the block** — the initializer reads the inner x, which does not exist yet. Shadowing plus TDZ is a real trap: rename the inner variable.' }
        ],
        result: 'var: undefined, bug deferred. let: ReferenceError at the exact line. The TDZ converts a silent hazard into an immediate, located error.'
      },
      {
        title: 'Trace: destructuring with skip, rest and swap',
        problem: 'Evaluate each destructuring statement, giving the final values of all variables.',
        steps: [
          { label: 'Statement 1: basics and mismatch', text: '```js\nlet [x, y] = [1];\n``` x gets 1; there is no second value, so y gets **undefined**. Extra values on the right are simply ignored: `[x, y] = [1, 2, 3]` leaves x==1, y==2.' },
          { label: 'Statement 2: skipping with commas', text: '```js\n[, x, , y] = [1, 2, 3, 4];\n``` The holes skip positions 0 and 2: x == 2 (position 1), y == 4 (position 3).' },
          { label: 'Statement 3: rest', text: '```js\n[x, ...y] = [1, 2, 3, 4];\n``` x == 1; the `...` before y collects **all remaining values into a new array**: y == [2, 3, 4]. (The same three dots gather function arguments in Chapter 8 — one syntax, two roles.)' },
          { label: 'Statement 4: the swap', text: '```js\n[x, y] = [y, x];\n``` The right side is evaluated completely FIRST — building a new two-element array from the current values — then destructured into the left. That is why the swap works: both old values are captured before either assignment lands.' },
          { label: 'Statement 5: string as iterable', text: '```js\nlet [first, ...rest] = "Hello";\n``` first == "H"; rest == ["e","l","l","o"]. Array destructuring accepts any iterable, and strings iterate by codepoint.' }
        ],
        result: 'x and y from [1]: 1 and undefined. After all statements: skipping selects positions, rest gathers arrays, and the swap pattern [x,y]=[y,x] exchanges values in one line.'
      },
      {
        title: 'Trace: object destructuring into renamed and nested targets',
        problem: 'Starting from `let points = { p1: [1, 2], p2: [3, 4] };`, write one destructuring that yields x1, y1, x2, y2 — then verify it by flipping the assignment.',
        steps: [
          { label: 'Step 1: Read the shape', text: 'The value is an object with two properties (p1, p2), each an array of two numbers. The destructuring must mirror that: braces at the top, brackets inside.' },
          { label: 'Step 2: The destructuring', text: '```js\nlet { p1: [x1, y1], p2: [x2, y2] } = points;\n```\n`p1: [x1, y1]` means: take the property named p1, then destructure its value as an array into x1 and y1. Property names always sit on the left of the colon — exactly as in an object literal.' },
          { label: 'Step 3: The results', text: 'x1 == 1, y1 == 2, x2 == 3, y2 == 4 — four scalars unpacked from nested data in one statement.' },
          { label: 'Step 4: The flip check', text: '```js\nlet points2 = { p1: [x1, y1], p2: [x2, y2] };\n// points2 deep-equals points\n```\nAfter a destructuring, the left side works as a **valid literal** elsewhere. If your flipped literal reproduces the original structure, the destructuring was written correctly — the chapter’s own verification trick.' },
          { label: 'Step 5: The style warning', text: 'Complex destructuring is hard to write and hard to read. Four plain assignments — `let x1 = points.p1[0];` and so on — are always legal and often kinder to the next reader.' }
        ],
        result: 'Nested object-array destructuring unpacks all four coordinates; the flip-the-assignment test confirms the pattern; prefer plain assignments when the pattern stops being obvious.'
      }
    ],
    keyTakeaways: [
      'let declares variables, const constants (must be initialized; assignment throws TypeError). Initialize at declaration whenever possible.',
      'let/const are block-scoped; loop headers scope the loop variable to the body — and const is legal there if the body never reassigns.',
      'Redeclaring in the same scope is a SyntaxError; shadowing in a nested block is legal but risky.',
      'var is function-scoped, hoisted (usable anywhere in the function, undefined before initialization), legal to redeclare, and its globals become global-object properties.',
      'let/const have a temporal dead zone: referencing before the declaration runs throws ReferenceError instead of yielding undefined — an error at the bug, not far from it.',
      'Outside strict mode, assignment to an undeclared name creates a global (deletable, unlike var globals); strict mode makes it a ReferenceError.',
      'Destructuring unpacks arrays and objects: defaults, commas to skip, ...rest to collect the remainder, colon to rename (property name on the left), and arbitrary nesting — and works on any iterable.'
    ],
    quiz: [
      {
        q: 'What does this code print?\n```js\nfunction f() {\n    console.log(x);\n    var x = 1;\n}\nf();\n```',
        options: [
          '1',
          'undefined — the var declaration is hoisted, so x exists from the top of the function but is uninitialized',
          'It throws a ReferenceError',
          'It prints "x"'
        ],
        answer: 1,
        explanation: 'var declarations are hoisted to the top of the enclosing function: x exists before the log runs, holding undefined until its initialization line executes. let, in contrast, would throw a ReferenceError from the temporal dead zone.'
      },
      {
        q: 'Which statement about const is TRUE?',
        options: [
          'A const declaration must be initialized at declaration time, and its binding can never be reassigned',
          'The value held by a const object is frozen: its properties cannot change',
          'const cannot be used in a for/of loop header',
          'const variables are function-scoped like var'
        ],
        answer: 0,
        explanation: 'const requires an initializer and forbids reassignment — but it does not freeze object contents (const o = {}; o.x = 1; is legal; o = {} is not). for(const x of data) is legal and idiomatic when the body never reassigns, and const is block-scoped like let.'
      },
      {
        q: 'After `let [x, ...y] = [1, 2, 3, 4];`, what are the values of x and y?',
        options: [
          'x == 1; y == 2',
          'x == 1; y == [2, 3, 4]',
          'x == [1]; y == [2, 3, 4]',
          'x == 1; y == 4'
        ],
        answer: 1,
        explanation: 'The first target takes the first element; the rest parameter (...) collects all remaining values into a new array. Skipping, defaults and rest are the three positional tools of array destructuring.'
      },
      {
        q: 'In the object destructuring `const { cos: cosine } = Math;`, which name is the property and which is the variable?',
        options: [
          'cos is the variable; cosine is the property',
          'cos is the property name (on Math); cosine is the variable being assigned',
          'Both are variables declared by the statement',
          'Both are property names; nothing is declared'
        ],
        answer: 1,
        explanation: 'Property names always appear on the left of the colon — in both object literals and destructuring. The statement reads Math.cos into a new constant named cosine (equivalent to const cosine = Math.cos).'
      },
      {
        q: 'Outside strict mode, what does `function f() { oops = 42; } f();` do?',
        options: [
          'It throws a ReferenceError immediately',
          'It creates a new local variable oops inside f',
          'It creates a new global variable oops — a property of the global object, deletable with the delete operator',
          'Nothing: the assignment is ignored'
        ],
        answer: 2,
        explanation: 'Assignment to an undeclared name creates a global, no matter how deeply nested the code — one of the best arguments for strict mode, where the same line throws. Unlike proper var globals, these accidental globals can be deleted.'
      },
      {
        q: 'Which of these is NOT a difference between var and let?',
        options: [
          'var is function-scoped while let is block-scoped',
          'var declarations are hoisted (usable as undefined before initialization) while let bindings live in a temporal dead zone',
          'var globals become properties of the global object while let globals do not',
          'var requires an initializer while let does not'
        ],
        answer: 3,
        explanation: 'Neither requires an initializer (only const does). The real differences are scope (function vs block), hoisting behavior (silent undefined vs TDZ ReferenceError), global-object property status, and redeclaration legality (var allows it, let does not).'
      },
      // University-pattern: temporal dead zone — let access before declaration (original)
      {
        q: "What does this program print?\n```js\ntry {\n  console.log(status);\n} catch (e) {\n  console.log(e.constructor.name);\n}\nlet status = 'ready';\nconsole.log(status);\n```",
        options: ["`ReferenceError` then `ready`", "`undefined` then `ready`", "`ready` twice", "`ReferenceError` then `undefined`"],
        answer: 0,
        explanation: "Step 1: The code given reads `status` before its `let` declaration executes, catches whatever happens, then reads it again after. Step 2: The governing rule is the temporal dead zone: a `let` binding exists from block entry but stays uninitialized until the declaration runs, and any read in that window throws a ReferenceError instead of yielding `undefined`. Step 3: Tracing line by line, the `try` block reads an uninitialized binding and throws, the `catch` prints `ReferenceError`, the declaration then initializes `status` to `'ready'`, and the final log prints `ready`. Step 4: The distractors fail because `undefined` is the legacy `var` hoisting behavior rather than the `let` behavior, and the second read occurs after initialization so it cannot throw. Step 5: Therefore the output is `ReferenceError` followed by `ready`."
      }
    ]
  }
]
