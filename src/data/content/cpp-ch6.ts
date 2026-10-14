import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 6: Types and Declarations (Sections 6.1 – 6.6)
// Master study content.
// ============================================================================

export const cppCh6Content: SectionContent[] = [
  // ------------------------------------------------------------------ 6.1
  {
    sectionId: "cpp-ch6-s1",
    readingTime: 5,
    intro: "C++ is a standardized language: ISO/IEC 14882 defines exactly what a conforming program may rely on, and this book targets the 2011 edition of that document — C++11. Knowing what the standard guarantees, what it leaves to implementations, and what it declares flatly undefined is the difference between portable code and code that merely happens to work on today's compiler. This section reads the fine print.",
    objectives: [
      "Identify the ISO standard document and what it specifies — language and library together",
      "Distinguish implementation-defined, unspecified and undefined behavior",
      "Explain why 'what my compiler does' is not a specification"
    ],
    concepts: [
      {
        term: "ISO/IEC 14882",
        kind: "definition",
        statement: "**The C++ standard is ISO/IEC 14882; the edition this book implements is C++11 (14882:2011).** It specifies both the language and the standard library in one document — semantics, not implementations: everything observable to a conforming program is fixed, and the rest is deliberately left open.",
        detail: "A standard is developed through a committee process of proposals and national-body votes, then published by ISO. It is written for compiler writers and expert readers, not as a tutorial."
      },
      {
        term: "The three escape hatches",
        kind: "definition",
        statement: "**The standard grades every behavior: *implementation-defined* (each implementation must document its choice, e.g. `sizeof(int)`), *unspecified* (no documentation required, e.g. the value of padding bytes), and *undefined* (no guarantees at all, e.g. dereferencing a dangling pointer).** Portable code depends only on the defined core.",
        detail: "Implementation-defined choices may differ but are at least discoverable; undefined behavior removes the program from the language's protection — the optimizer may do anything."
      },
      {
        term: "Why a standard at all?",
        kind: "insight",
        statement: "**A standard is what makes code portable across compilers, platforms and decades.** Relying on what one implementation happens to do — the size of an `int`, the signedness of a plain `char`, struct padding — is a latent bug for the day the code moves.",
        detail: "The economic argument: millions of lines of C++ depend on stability, so old guarantees survive even as new standards (C++14, C++17, ...) add facilities."
      },
      {
        term: "Implementations lag and lead",
        kind: "insight",
        statement: "**Compilers implement the standard at different rates.** C++98-era implementations are still in the wild, some compilers are mostly C++11, and some lead with experimental facilities. A practical skill is checking which features your toolchain actually provides.",
        detail: "The book's advice: prefer to write to the standard, and treat features an implementation lacks as a toolchain fact to check, not a reason to write non-standard code."
      },
      {
        term: "The ISO C++ Standard: the working contract",
        kind: "definition",
        statement: "**The ISO C++ Standard.** The standardization process and what it specifies. You can claim this section when you can identify the ISO standard document and what it specifies — language and library together — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 6 (Types and Declarations); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "A portability audit",
        problem: "The line `int base = 100000; int area = base * base;` computes $100{,}000^2$. Is it correct on a typical 32-bit-`int` machine? What does the standard actually guarantee?",
        steps: [
          { label: "Step 1: The arithmetic", text: "$base \\times base = 10^{10} = 10{,}000{,}000{,}000$." },
          { label: "Step 2: The type's capacity", text: "A 32-bit signed `int` tops out at $2^{31} - 1 = 2{,}147{,}483{,}647$ — an order of magnitude too small." },
          { label: "Step 3: What the standard says", text: "It guarantees only that `int` holds at least 16 bits; on this machine it holds 32 — and $10^{10}$ overflows it. Signed overflow is *undefined behavior*, not a wraparound." },
          { label: "Step 4: The fix", text: "`long long area = base * 1LL * base;` or `long long area{base} * base;` — 64 bits holds $10^{10}$ trivially (max about $9.2\\times10^{18}$)." }
        ],
        result: "The original is undefined on the very machine it was tested on; the fix depends only on the guaranteed minimum of 64 bits for `long long`."
      },
      {
        title: "Working through the ISO C++ standard",
        problem: "The standardization process and what it specifies. Your task: identify the ISO standard document and what it specifies — language and library together.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: identify the ISO standard document and what it specifies — language and library together. Write down the guarantee you will rely on — for this chapter it is: ISO/IEC 14882 defines language and library together; this edition targets C++11." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `constexpr double pi = 3.14159;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — distinguish implementation-defined, unspecified and undefined behavior — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Implementation-defined behavior is documented per implementation; unspecified and undefined behavior are not safety nets. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: ISO/IEC 14882 defines language and library together; this edition targets C++11. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "ISO/IEC 14882 defines language and library together; this edition targets C++11.",
      "Implementation-defined behavior is documented per implementation; unspecified and undefined behavior are not safety nets.",
      "Code that relies on unguaranteed details is a portability bug waiting for the next compiler or platform."
    ],
    quiz: [
      {
        q: "The ISO C++ standard's number, and this book's target edition, are:",
        options: ["ISO/IEC 14882, targeting C++11", "ISO/IEC 9899, targeting C99", "ISO/IEC 14882:1998 exclusively", "ANSI X3J16, no ISO number"],
        answer: 0,
        explanation: "C++ is standardized as ISO/IEC 14882; the 4th edition of the book is written against the 2011 revision, C++11."
      },
      {
        q: "`sizeof(int)` is an example of:",
        options: ["undefined behavior", "unspecified behavior", "implementation-defined behavior — each implementation documents its choice", "a value the standard fixes at 4"],
        answer: 2,
        explanation: "The standard constrains the range (at least 16 bits, and not larger than `long`) but the concrete size is the implementation's documented choice."
      },
      {
        q: "A program that depends on how its current compiler pads a struct is relying on:",
        options: ["a standard guarantee", "undefined behavior", "good practice, portable everywhere", "behavior the standard leaves open — a portability risk"],
        answer: 3,
        explanation: "Padding is left to implementations (and alignment), so the dependence is a latent bug on any machine with different alignment rules."
      }
    ]
  },

  // ------------------------------------------------------------------ 6.2
  {
    sectionId: "cpp-ch6-s2",
    readingTime: 7,
    intro: "Every value in a program has a type, and the fundamental types — `bool`, characters, integers, floating point — come with precise guarantees and precise freedom: sizes the standard constrains but does not fix, exact arithmetic on unsigned integers, and approximations in floating point that every engineer must budget for. This section is the field guide: what each type promises, what it costs, and where the traps are.",
    objectives: [
      "State the size guarantees and ordering laws for the fundamental types",
      "Explain unsigned modulo arithmetic and IEEE floating-point precision limits",
      "Distinguish the three character types and choose among them"
    ],
    concepts: [
      {
        term: "`bool`",
        kind: "definition",
        statement: "**`bool` holds exactly `true` or `false`.** In arithmetic a `bool` promotes to `int` (`true` becomes 1, `false` becomes 0), which is why `count += (x > 0);` tallies the positive entries.",
        detail: "`sizeof(bool)` is not pinned by the standard — one byte is typical — but its domain is exactly the two truth values."
      },
      {
        term: "The three character types",
        kind: "definition",
        statement: "**`char`, `signed char` and `unsigned char` are three distinct types; plain `char` is its own type, signed or unsigned by implementation choice.** `sizeof(char)` is 1 by definition — it is the unit of `sizeof` — and a byte is at least 8 bits. For wider text, `char16_t` (UTF-16), `char32_t` (UTF-32) and `wchar_t` hold Unicode characters.",
        detail: "Treating characters as small integers — as C does — is the source of the signedness surprises; the three-type split exists so plain `char` can stay text."
      },
      {
        term: "Integer types and the modulo law",
        kind: "law",
        statement: "**Sizes form a non-decreasing chain with each step implementation-dependent:** $1 = \\text{sizeof(char)} \\le \\text{sizeof(short)} \\le \\text{sizeof(int)} \\le \\text{sizeof(long)} \\le \\text{sizeof(long\\ long)}$. The minimum guarantees: at least 16 bits for `short` and `int`, 32 for `long`, 64 for `long long`. **Unsigned arithmetic is exact modulo $2^N$; signed overflow is undefined behavior.**",
        detail: "On a typical 64-bit Linux (LP64): `short` 2, `int` 4, `long` 8, `long long` 8 bytes; on 64-bit Windows, `long` is 4. Use `<cstdint>` names like `int32_t` when a width is a requirement."
      },
      {
        term: "Floating point",
        kind: "definition",
        statement: "**`float`, `double` and `long double`, with IEEE 754 as the de facto standard: `double` is the default choice, holding integers exactly up to $2^{53}$ and about 15 significant decimal digits; `float` gives about 6.** Numbers like $0.1$ have no exact binary representation at any precision.",
        detail: "`long double` offers more precision at the cost of memory traffic; prefer `double` until profiling says otherwise."
      },
      {
        term: "Literals and suffixes",
        kind: "notation",
        statement: "**Integer literals can be decimal, hexadecimal (`0x1F`) or octal (leading `0`); suffixes `u`, `l`, `ul` select unsignedness and width; floating literals gain `f` for `float`.** The type of a literal is part of the language, not a property of its digits.",
        detail: "`0x10` is 16, not a decimal 10 — and `010` is 8, which is why a padded decimal list is a famous bug."
      }
    ],
    examples: [
      {
        title: "Unsigned wraparound, exactly",
        problem: "An 8-bit unsigned counter reads 200. What is 200 + 300 in that type? And 250 + 10?",
        steps: [
          { label: "Step 1: The rule", text: "Unsigned arithmetic is modulo $2^8 = 256$: the true sum is reduced by multiples of 256 into $[0, 256)$." },
          { label: "Step 2: First sum", text: "$200 + 300 = 500 = 256 + 244$, so the stored value is 244." },
          { label: "Step 3: Second sum", text: "$250 + 10 = 260 = 256 + 4$, so the stored value is 4 — not an error, not negative." },
          { label: "Step 4: Contrast", text: "The same overflow with *signed* 8-bit values would be undefined behavior — the guarantee belongs to the unsigned types only." }
        ],
        result: "244 and 4: unsigned arithmetic is well-defined modular arithmetic, which is why it is the choice for bit-level and range code."
      },
      {
        title: "The precision ladder, observed",
        problem: "Predict what prints for `0.1f`, and for `0.1 + 0.2 == 0.3` at `double` precision.",
        steps: [
          { label: "Step 1: Why 0.1 is inexact", text: "$0.1 = 1/10$ has no finite binary expansion — it is the binary analogue of $1/3$ in decimal." },
          { label: "Step 2: Float", text: "The nearest `float` to 0.1 is $13421773/2^{24} = 0.100000001490116...$ — printing 0.1f shows the tail of digits." },
          { label: "Step 3: Double", text: "Each operand rounds to the nearest 53-bit double, so `0.1 + 0.2` gives `0.30000000000000004` and the comparison with `0.3` is false." },
          { label: "Step 4: The right question", text: "Compare with a tolerance: `fabs(a - b) < 1e-12` — or scale to exact integer arithmetic when equality matters." }
        ],
        result: "Floating point is a *designed approximation*: exact for integers below $2^{53}$, honest rounding everywhere else, and never silently exact for 0.1."
      }
    ],
    keyTakeaways: [
      "Only the ordering chain and minimum widths are guaranteed; concrete sizes are implementation-defined — use `int32_t`-style names when width matters.",
      "Unsigned arithmetic is exact modulo $2^N$; signed overflow is undefined — never rely on wraparound in signed types.",
      "`double` carries ~15 significant digits and exact integers to $2^{53}$; 0.1 is not exactly representable in binary at any width."
    ],
    quiz: [
      {
        q: "How many distinct types are among `char`, `signed char`, and `unsigned char`?",
        options: ["1 — they are aliases", "2 — `char` is signed or unsigned", "3 — they are three distinct types", "implementation-defined"],
        answer: 2,
        explanation: "All three exist separately: plain `char` is its own type whose signedness is an implementation choice, distinct from both explicit forms."
      },
      {
        q: "In 8-bit unsigned arithmetic, 200 + 300 equals:",
        options: ["500", "244", "an overflow error", "0"],
        answer: 1,
        explanation: "Modulo $256$: $500 - 256 = 244$. Unsigned overflow is defined as wraparound, not as an error."
      },
      {
        q: "The largest integer guaranteed exactly representable in an IEEE 754 `double` is:",
        options: ["$2^{31}$", "$2^{32}$", "$2^{53}$", "$2^{64}$"],
        answer: 2,
        explanation: "The 53-bit significand (one implicit bit) keeps every integer up to $2^{53} = 9{,}007{,}199{,}254{,}740{,}992$ exact."
      },
      {
        q: "Which relation is guaranteed by the standard?",
        options: ["`sizeof(int) == 4`", "`sizeof(char) <= sizeof(int)`", "`sizeof(long) == 8`", "`sizeof(short) == 2`"],
        answer: 1,
        explanation: "Only the non-decreasing chain is guaranteed; the concrete sizes (4, 8, 2) are all implementation choices on mainstream platforms."
      }
    ]
  },

  // ------------------------------------------------------------------ 6.3
  {
    sectionId: "cpp-ch6-s3",
    readingTime: 7,
    intro: "Every name in a program is introduced by a declaration, and the book's first distinction — declaration versus definition — organizes everything from header hygiene to the linker's one-definition rule. The initializer forms carry their own policy: `{}` rejects narrowing conversions that `=` and `()` accept silently. And `auto` lets the compiler deduce the type while guaranteeing initialization, which deletes an entire genre of redundancy and another of bugs.",
    objectives: [
      "Distinguish declaration from definition and apply the one-definition rule",
      "Compare the `=`, `(...)` and `{...}` initializer forms, especially narrowing",
      "Explain what `auto` deduces and why it requires an initializer"
    ],
    concepts: [
      {
        term: "Declaration vs. definition",
        kind: "definition",
        statement: "**A declaration introduces a name with a type; a definition additionally provides the entity itself — initialized storage or a body.** `extern int x;` declares; `int x;` defines. Every name must have exactly one definition (the one-definition rule) but may be declared as often as useful.",
        detail: "This split is why headers contain declarations and exactly one source file contains the definition — the linker matches them."
      },
      {
        term: "The three initializer forms",
        kind: "method",
        statement: "**`int a = 7;`, `int a(7);` and `int a{7};` all initialize; only `{}` refuses to narrow.** `double d = 7;` converts silently, but `double d{7};` is fine (widening); `int x = 7.9;` truncates to 7 without complaint, while `int x{7.9};` is a compile-time error.",
        detail: "Use `{}` as the default for new code: the errors it rejects — lost fractional parts, constants that do not fit — are the ones that cost debugging days."
      },
      {
        term: "Uninitialized means undefined",
        kind: "law",
        statement: "**A local variable declared without an initializer holds indeterminate bits — reading it is undefined behavior.** Globals and statics are zero-initialized, which only makes the trap subtler because it disappears in tests that matter less.",
        detail: "The discipline: never declare a variable before you have a value for it — and initialize at the point of declaration whenever you can."
      },
      {
        term: "`auto` deduction",
        kind: "method",
        statement: "**`auto x = expr;` gives `x` the type of `expr`.** It demands an initializer (there is nothing to deduce from otherwise) and guarantees the variable starts with a value. `auto i = 7;` is `int`; `auto d = 7.0;` is `double`; `auto& r = x;` is a reference to `x`'s type.",
        detail: "In generic code, `auto&&` forwards perfectly; in ordinary code, `auto` removes redundancy like `map<string,int>::iterator it = m.begin();`."
      },
      {
        term: "`constexpr`",
        kind: "definition",
        statement: "**`constexpr` marks an entity as usable in constant expressions — values computable by the compiler before the program runs.** A `constexpr int` can serve where a literal is required: an array bound, a template argument, another `constexpr` initializer.",
        detail: "It is the modern replacement for macros-as-constants: typed, scoped, and evaluated where misuse is a compile error."
      }
    ],
    examples: [
      {
        title: "A narrowing audit",
        problem: "Which of these compile, and which perform silent damage? `int a = 7.9; int b{7.9}; char c = 1000; char d{1000};`",
        steps: [
          { label: "Step 1", text: "`int a = 7.9;` compiles; `a` becomes 7 — the fraction is silently lost." },
          { label: "Step 2", text: "`int b{7.9};` is rejected at compile time: `{}` does not narrow a `double` into an `int`." },
          { label: "Step 3", text: "`char c = 1000;` compiles on an 8-bit `char` — 1000 does not fit; the stored value is implementation-defined truncation." },
          { label: "Step 4", text: "`char d{1000};` is rejected: the constant does not fit the target — again `{}` catches what `=` covers up." }
        ],
        result: "Two of the four lines silently corrupt values; `{}` catches both — its entire job is to convert silent loss into compile-time errors."
      },
      {
        title: "What does `auto` deduce?",
        problem: "Deduce the type and value of `auto a = 7;`, `auto b = 7.0;`, `auto c = 7/2;` and `auto d = 7.0/2;`.",
        steps: [
          { label: "Step 1", text: "`auto a = 7;` — the literal 7 is `int`, so `a` is an `int` holding 7." },
          { label: "Step 2", text: "`auto b = 7.0;` — the literal is `double`; `b` is a `double`." },
          { label: "Step 3", text: "`auto c = 7/2;` — integer division happens *first*: `7/2` is the `int` 3, so `c` is `int` 3, not 3.5." },
          { label: "Step 4", text: "`auto d = 7.0/2;` — mixed arithmetic promotes to `double`: `d` is `double` 3.5." }
        ],
        result: "`auto` copies the expression's type exactly — including its truncations. The deduction is never the problem; the expression is."
      }
    ],
    keyTakeaways: [
      "A definition is a declaration that provides the entity; the one-definition rule allows many declarations, exactly one definition.",
      "Initialize with `{}` when in doubt: it rejects narrowing that `=` and `()` perform silently.",
      "Reading an uninitialized local is undefined behavior — and `auto` variables are always initialized by construction."
    ],
    quiz: [
      {
        q: "`extern int x;` is:",
        options: ["a definition", "a declaration that is not a definition", "an initialization", "a type alias"],
        answer: 1,
        explanation: "It announces the name and type but does not set aside storage; some other translation unit must define `x` exactly once."
      },
      {
        q: "Which line fails to compile?",
        options: ["`int a = 7.9;`", "`double b = 7;`", "`int c{7.9};`", "`auto d = 7.9;`"],
        answer: 2,
        explanation: "The braces forbid narrowing from `double` to `int`; the `=` forms convert silently, and widening 7 to `double` is legal in braces."
      },
      {
        q: "What is `auto x = 7/2;`?",
        options: ["3.5 (double)", "3 (int) — the integer division happens before deduction", "3.5 (float)", "a compile error: ambiguous"],
        answer: 1,
        explanation: "`auto` deduces the type of the initialized expression; `7/2` is already the `int` 3, so `x` is an `int`."
      },
      {
        q: "Reading the value of an uninitialized local variable is:",
        options: ["zero", "implementation-defined", "undefined behavior", "the previous stack contents, well-defined"],
        answer: 2,
        explanation: "No value is guaranteed — the standard puts such reads outside the language, and optimizers exploit exactly that."
      },
      // PYQ-pattern: GATE 2014 — brace initialization rejects narrowing (rephrased)
      {
        q: "Which statement about these two declarations is correct?\n```cpp\nint a = 7.5;\nint b{7.5};\n```",
        options: ["Both compile, and both hold `7`", "Both are rejected, because fractional literals require `double`", "The first compiles holding `7`, while the second is rejected for narrowing", "The first is rejected, while the second compiles holding `8`"],
        answer: 2,
        explanation: "Step 1: The data given is a copy-style initialization and a brace-style initialization from the same fractional literal. Step 2: The governing rule is narrowing control: the `=` form permits narrowing with truncation, while the `{}` form requires a diagnostic when the value cannot be represented exactly. Step 3: Tracing declaration by declaration, `a` initializes through conversion and holds the truncated `7`, while `b` triggers a narrowing diagnostic and the program does not compile. Step 4: The distractors fail because the two forms deliberately differ, fractional literals are valid initializers for `int` under the `=` form, and no rounding to `8` occurs anywhere. Step 5: Therefore braces reject what the equals form silently truncates."
      }
    ]
  },

  // ------------------------------------------------------------------ 6.4
  {
    sectionId: "cpp-ch6-s4",
    readingTime: 6,
    intro: "The words object, value, variable and lvalue are the vocabulary of every error message and every design discussion about copying and moving. An object is a piece of memory with a type; a value is what you read from it; an lvalue is an expression that refers to an object that persists, an rvalue one that does not. Get these four words right and half of C++'s reputation for difficulty dissolves.",
    objectives: [
      "Define object, value and variable precisely",
      "Classify expressions as lvalues or rvalues",
      "Explain what `move(x)` changes about an expression's classification"
    ],
    concepts: [
      {
        term: "Object",
        kind: "definition",
        statement: "**An object is a region of memory that holds a value of some type.** Its size, alignment and layout come from the type; its lifetime comes from its storage: automatic (scope), static (program), free store (`new`/`delete`), or temporary (until the end of the full expression).",
        detail: "Objects are what destructors are called on — the theory of RAII in the previous chapter is exactly a theory of object lifetimes."
      },
      {
        term: "Value and variable",
        kind: "definition",
        statement: "**A value is a set of bits read through a type — the interpretation. A variable is a named object.** The same bits can be values of different types (that is what a union exploits), and a value can exist with no object at all — the literal `42`.",
        detail: "In the book's phrasing the trio runs: an object is something in memory; a value is the typed content; a variable is a named object."
      },
      {
        term: "lvalue vs. rvalue",
        kind: "definition",
        statement: "**An lvalue refers to an object that persists beyond the expression using it; an rvalue is a value that does not.** Mnemonics from the `=` of assignment: lvalues can appear on the left, rvalues on the right. `*p`, `v[i]`, `s.m` and `++i` are lvalues; `42`, `x+1`, `string(\"hi\")` and `i++` are rvalues.",
        detail: "The classification decides binding: `T&` accepts lvalues only; `const T&` accepts both; `T&&` accepts rvalues — which is how move semantics finds the temporaries it may harvest."
      },
      {
        term: "`move`",
        kind: "method",
        statement: "**`move(x)` reclassifies the lvalue `x` as an rvalue reference — licensing the receiver to pilfer `x`'s resources.** It moves nothing itself; a move happens only if the receiving constructor or assignment chooses to act on the license. Afterward `x` remains valid but its content is unspecified.",
        detail: "It is the bridge in the figure below — the controlled way an object's value crosses from the lvalue world into the rvalue world where harvesting is permitted."
      },
      {
        term: "Objects and Values: the working contract",
        kind: "definition",
        statement: "**Objects and Values.** Lvalues, rvalues and lifetimes. You can claim this section when you can define object, value and variable precisely — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 6 (Types and Declarations); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The expression taxonomy: lvalues refer to objects that persist; rvalues are transient values. `move(x)` reclassifies an lvalue as an rvalue so that move-optimized code may harvest its resources, and the binding rules at the bottom govern which reference type each kind may initialize.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 760 350" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Taxonomy of C++ expressions into lvalues and rvalues with example expressions, the move bridge, and reference binding rules"><defs><marker id="lr6a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="270" y="16" width="220" height="36" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="380" y="40" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">every C++ expression</text><line x1="380" y1="52" x2="185" y2="94" stroke="currentColor" stroke-width="1.5" marker-end="url(#lr6a)"/><line x1="380" y1="52" x2="575" y2="94" stroke="currentColor" stroke-width="1.5" marker-end="url(#lr6a)"/><rect x="60" y="96" width="240" height="56" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="180" y="120" text-anchor="middle" font-size="16" font-weight="600" fill="currentColor">lvalue</text><text x="180" y="140" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">refers to an object; persists</text><rect x="460" y="96" width="240" height="56" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="580" y="120" text-anchor="middle" font-size="16" font-weight="600" fill="currentColor">rvalue</text><text x="580" y="140" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">a value; temporary, about to vanish</text><rect x="66" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="85" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">x</text><rect x="112" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="131" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">*p</text><rect x="158" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="177" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">v[i]</text><rect x="204" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="223" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">s.m</text><rect x="250" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="269" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">++i</text><rect x="466" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="485" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">42</text><rect x="512" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="531" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">x+1</text><rect x="558" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="577" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">i++</text><rect x="604" y="172" width="38" height="24" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.3"/><text x="623" y="189" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">x+y</text><path d="M 300 124 C 355 170, 405 170, 456 124" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#lr6a)"/><text x="380" y="212" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">move(x)</text><text x="380" y="228" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">reclassify: resources may be harvested</text><rect x="60" y="240" width="640" height="96" rx="8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="7 5"/><text x="380" y="262" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">what each reference type binds to</text><text x="84" y="288" font-family="monospace" font-size="13" fill="currentColor">T&amp;        — lvalues only</text><text x="84" y="316" font-family="monospace" font-size="13" fill="currentColor">const T&amp; — lvalues and rvalues alike</text><text x="410" y="288" font-family="monospace" font-size="13" fill="currentColor">T&amp;&amp;      — rvalues (incl. move-ed lvalues)</text><text x="410" y="316" font-family="monospace" font-size="13" fill="currentColor">const T&amp; keeps a temporary alive</text></svg>`
      }
    ],
    examples: [
      {
        title: "Classify eight expressions",
        problem: "With `int x; int* p = &x; vector<int> v(3);` in scope, classify `x`, `x+1`, `*p`, `v[0]`, `42`, `string(\"hi\")`, `++x`, `x++`.",
        steps: [
          { label: "Step 1: Names and dereferences", text: "`x` names a persistent object — lvalue. `*p` refers to that same object through the pointer — lvalue. `v[0]` names the zeroth element object — lvalue." },
          { label: "Step 2: Arithmetic and literals", text: "`x+1` computes a temporary value — rvalue. `42` is a literal with no object at all — rvalue. `string(\"hi\")` is a temporary object that dies at the semicolon — rvalue." },
          { label: "Step 3: The increments", text: "`++x` increments x and yields x itself — lvalue. `x++` yields a *copy* of the old value — rvalue." },
          { label: "Step 4: Consequence", text: "`int& r1 = x;` and `int& r2 = ++x;` compile; `int& r3 = x+1;` and `int& r4 = x++;` do not — a non-const `T&` cannot bind to an rvalue." }
        ],
        result: "Four lvalues (`x`, `*p`, `v[0]`, `++x`) and four rvalues (`x+1`, `42`, `string(\"hi\")`, `x++`) — the binding rules in the figure follow mechanically."
      },
      {
        title: "Working through objects and values",
        problem: "Lvalues, rvalues and lifetimes. Your task: define object, value and variable precisely.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define object, value and variable precisely. Write down the guarantee you will rely on — for this chapter it is: An object is a typed region of memory; a value is its typed content; a variable is a named object." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `constexpr double pi = 3.14159;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — classify expressions as lvalues or rvalues — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: lvalues refer to objects that persist (`*p`, `v[i]`, `++i`); rvalues are transient (`42`, `x+1`, `i++`). If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: An object is a typed region of memory; a value is its typed content; a variable is a named object. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "An object is a typed region of memory; a value is its typed content; a variable is a named object.",
      "lvalues refer to objects that persist (`*p`, `v[i]`, `++i`); rvalues are transient (`42`, `x+1`, `i++`).",
      "`move(x)` reclassifies rather than moves — the harvesting happens in the receiver, only if it is written to."
    ],
    quiz: [
      {
        q: "Which of these expressions is an rvalue?",
        options: ["`*p`", "`v[i]`", "`++i`", "`i++`"],
        answer: 3,
        explanation: "`i++` delivers a copy of the old value — a temporary. The other three all refer to objects that persist beyond the expression."
      },
      {
        q: "An object is best defined as:",
        options: ["a named constant", "a region of memory holding a value of a type", "any expression with a value", "a class instance only"],
        answer: 1,
        explanation: "Memory plus type — the name is optional (a variable), the value is what is stored, and class instances are just one kind."
      },
      {
        q: "`std::move(x)`:",
        options: ["moves x's contents immediately", "copies x", "reclassifies x as an rvalue reference — the receiver decides whether to move from it", "destroys x"],
        answer: 2,
        explanation: "It returns an `rvalue` reference to `x`, granting permission; nothing is transferred until a move constructor or assignment acts on it."
      },
      {
        q: "Why does `int& r = x+1;` fail to compile?",
        options: ["`x+1` might overflow", "a non-const lvalue reference cannot bind to the temporary result of an expression", "references must be initialized", "operator precedence"],
        answer: 1,
        explanation: "The sum is an rvalue; binding it to `T&` would let you write through a reference to a dead temporary. `const int&` would accept it and extend its life."
      }
    ]
  },

  // ------------------------------------------------------------------ 6.5
  {
    sectionId: "cpp-ch6-s5",
    readingTime: 5,
    intro: "Long type names are a readability tax, and macros are not the answer. C++ offers the alias declaration — `using Pairs = vector<pair<int,int>>;` — which simply names a type without creating a new one, reads left to right, and, unlike the older `typedef`, can be parameterized as a template. Small syntax, big effect on the readability of declarations.",
    objectives: [
      "Write a `using` alias and explain that it introduces a name, not a new type",
      "Decode a complex `typedef` and rewrite it as a `using` alias",
      "Parameterize an alias in a template, and contrast with `#define`"
    ],
    concepts: [
      {
        term: "The using-alias",
        kind: "definition",
        statement: "**`using Pairs = vector<pair<int,int>>;` declares `Pairs` as a synonym for an existing type — no new type is created.** Aliases can be local, appearing in exactly the scope that needs them, and they compose inside other declarations.",
        detail: "An alias improves clarity exactly when the expanded type is noise: `for (Pairs::iterator p = ps.begin(); ...)` says less than `for (auto p = ps.begin(); ...)` — use aliases for *meaning*, `auto` for *redundancy*."
      },
      {
        term: "`typedef`",
        kind: "definition",
        statement: "**`typedef` is the legacy spelling of the same idea: `typedef vector<pair<int,int>> Pairs;`.** For array, function and pointer-to-function types the declarator syntax reads inside-out, which is why the book prefers the `using` form for anything nontrivial.",
        detail: "`typedef unsigned long ulong;` is fine either way; the difference bites on complex declarators — see the worked example."
      },
      {
        term: "Alias templates",
        kind: "method",
        statement: "**A `using` alias can be parameterized: `template<typename T> using Vec = vector<T,My_alloc<T>>;` — a template alias, impossible to express with `typedef`.** Instantiating `Vec<int>` names the whole expanded type.",
        detail: "This gives libraries a clean way to present customized containers without exposing every default parameter at each use site."
      },
      {
        term: "Aliases vs. macros",
        kind: "insight",
        statement: "**A `#define` is preprocessor text substitution: it ignores scope, ignores types, and cannot be scoped to a namespace or a template.** An alias is a language-level name with a type and a scope — everything a textual paste is not.",
        detail: "The same contrast as `constexpr` versus `#define` constants: the language mechanism participates in checking; the macro does not."
      },
      {
        term: "Type Aliases: the working contract",
        kind: "definition",
        statement: "**Type Aliases.** using declarations and alias templates. You can claim this section when you can write a `using` alias and explain that it introduces a name, not a new type — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 6 (Types and Declarations); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Decoding a classic typedef",
        problem: "What does `typedef void (*Signal_handler)(int);` declare, and what is the `using` spelling?",
        steps: [
          { label: "Step 1: Find the name", text: "Start at the name being declared: `Signal_handler`." },
          { label: "Step 2: Read the declarator", text: "`(*Signal_handler)` — it is a pointer; `(int)` at the right — to a function taking an `int`; `void` at the left — returning `void`." },
          { label: "Step 3: Assemble", text: "`Signal_handler` names the type 'pointer to function taking int, returning void' — the type of a signal callback." },
          { label: "Step 4: The alias spelling", text: "`using Signal_handler = void(*)(int);` — left side is the new name, right side is the type — no decoding required." }
        ],
        result: "The two declarations mean the same thing; the `using` form reads in a straight line, which is why it is the book's preferred syntax."
      },
      {
        title: "Working through type aliases",
        problem: "using declarations and alias templates. Your task: write a `using` alias and explain that it introduces a name, not a new type.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: write a `using` alias and explain that it introduces a name, not a new type. Write down the guarantee you will rely on — for this chapter it is: `using X = T;` introduces a new name for an existing type — never a distinct type." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `constexpr double pi = 3.14159;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — decode a complex `typedef` and rewrite it as a `using` alias — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Alias templates parameterize the trick, something `typedef` cannot do; both are language-level, unlike `#define`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `using X = T;` introduces a new name for an existing type — never a distinct type. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`using X = T;` introduces a new name for an existing type — never a distinct type.",
      "Alias templates parameterize the trick, something `typedef` cannot do; both are language-level, unlike `#define`.",
      "Prefer `using` for complex declarators: it reads left to right instead of inside-out."
    ],
    quiz: [
      {
        q: "What does `using Pairs = vector<pair<int,int>>;` introduce?",
        options: ["a new type distinct from the vector", "another name for an existing type", "a preprocessor macro", "a template specialization"],
        answer: 1,
        explanation: "An alias is a synonym: a `Pairs` is a `vector<pair<int,int>>` in every context, including overload resolution."
      },
      {
        q: "Which cannot be written with `typedef`?",
        options: ["`typedef unsigned long ulong;`", "a pointer-to-function type", "a generic alias taking a template parameter", "`typedef int* Pint;`"],
        answer: 2,
        explanation: "Templates over typedefs are not expressible; `template<typename T> using ...` was added exactly to fill that gap."
      },
      {
        q: "Compared with `#define Pairs vector<pair<int,int>>`, the using-alias:",
        options: ["is processed by the preprocessor", "respects scope and participates in type checking", "is faster at run time", "cannot appear inside functions"],
        answer: 1,
        explanation: "The macro is blind text replacement; the alias is a scoped, typed name the compiler understands."
      }
    ]
  },

  // ------------------------------------------------------------------ 6.6
  {
    sectionId: "cpp-ch6-s6",
    readingTime: 4,
    intro: "The chapter's advice compresses its lessons into reviewable rules: keep types and scopes simple, initialize everything, declare close to use, and let the compiler carry the typing work with `auto` and the `{}` initializer. None of them is decorative — each names a bug class the chapter has just shown how to create.",
    objectives: [
      "Apply the chapter's rules to audit a small code fragment",
      "Explain the uninitialized-variable and integer-division traps in terms of the rules",
      "Choose where `auto` and `{}` improve clarity rather than obscure it"
    ],
    concepts: [
      {
        term: "Keep it simple",
        kind: "law",
        statement: "**Choose the simplest type and the smallest scope that does the job.** A plain `int` loop counter beats a clever template; a local beats a global; a `double` beats a `long double` without a measured reason.",
        detail: "Complexity in types is paid at every use site — in readability, in error messages, in compile time."
      },
      {
        term: "Never read an uninitialized variable",
        kind: "law",
        statement: "**Every variable gets an initializer, ideally `{}` at declaration.** Uninitialized reads are undefined behavior, and zero-initialized statics only hide the bug until the variable moves to the stack.",
        detail: "Corollary: do not declare a variable before you can compute its value — hoisting declarations 'for tidiness' creates the hazard."
      },
      {
        term: "Keep scopes small",
        kind: "law",
        statement: "**Declare names in the smallest scope that works, as close to first use as possible.** Locality makes both readers and compilers happier: fewer live variables, shorter proofs of correctness by inspection.",
        detail: "The same rule scales up: file-scope `static`s and globals are the largest scopes, and the most expensive to reason about."
      },
      {
        term: "Let the compiler work",
        kind: "insight",
        statement: "**Use `auto` where the type is redundant and `{}` where you want narrowing checked.** The compiler applies both rules perfectly; typing the same thing twice is a chance to disagree with yourself.",
        detail: "`auto d = 7/2;` still demonstrates the boundary — the compiler deduces faithfully, including the truncation you did not intend."
      },
      {
        term: "Shipping rule for types and declarations",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Smallest scope, simplest type, initializer at declaration — the three habits that prevent most declaration bugs.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing a fragment",
        problem: "Find the chapter-rule violations in `int total; double avg = n / count; total = total + 1; return avg;`",
        steps: [
          { label: "Step 1: Uninitialized read", text: "`total` is declared without an initializer and read in `total + 1` — undefined behavior; rule: initialize at declaration." },
          { label: "Step 2: Integer division", text: "If `n` and `count` are ints, `n / count` truncates *before* the conversion to `double` — `avg` for 7 over 2 becomes 3.0, not 3.5." },
          { label: "Step 3: Scope", text: "`total` is used only at one point — declaring it there (`int total = 0;` in the smallest scope) removes the read-before-write entirely." },
          { label: "Step 4: Fixes", text: "`auto avg = double(n) / count;` and `int total = 0;` — two small edits, both moving the work to the compiler or the declaration." }
        ],
        result: "The corrected fragment cannot express the original bugs — that is what the advice rules are for."
      },
      {
        title: "Reviewing types and declarations code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules to audit a small code fragment.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Smallest scope, simplest type, initializer at declaration — the three habits that prevent most declaration bugs." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `constexpr double pi = 3.14159;`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: explain the uninitialized-variable and integer-division traps in terms of the rules. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Reading an uninitialized local is undefined behavior, not zero." },
        ],
        result: "The review ends with findings tied to reasons: Smallest scope, simplest type, initializer at declaration — the three habits that prevent most declaration bugs. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Smallest scope, simplest type, initializer at declaration — the three habits that prevent most declaration bugs.",
      "Reading an uninitialized local is undefined behavior, not zero.",
      "`auto` removes redundancy and `{}` rejects narrowing; both hand work to the compiler."
    ],
    quiz: [
      {
        q: "The chapter's advice on uninitialized variables is:",
        options: ["zero is fine as a default", "declare early at the top of the function, initialize later", "do not declare a variable until you have a value for it", "always initialize to -1"],
        answer: 2,
        explanation: "Declaring with the value in hand eliminates the read-before-write window; early declaration exists only to create it."
      },
      {
        q: "`double d = 7/2;` gives:",
        options: ["3.5", "3.0 — the integer division happens first", "4.0", "implementation-defined"],
        answer: 1,
        explanation: "Both operands are `int`, so the division truncates to 3, which is then converted to the `double` 3.0 — convert an operand first."
      },
      {
        q: "The advice on declarations is to keep them:",
        options: ["all at file scope for visibility", "in the smallest scope that works, close to first use", "in a single block at the top of the function", "inside macros"],
        answer: 1,
        explanation: "Small scopes shorten the live range of every name, shrinking both the reader's and the compiler's proof burden."
      }
    ]
  }
]
