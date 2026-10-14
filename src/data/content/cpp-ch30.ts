import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition
// Chapter 30: Standard Library Summary (Sections 30.1 – 30.5)
// Master study content.
// ============================================================================

export const cppCh30Content: SectionContent[] = [
  // ---------------------------------------------------------------- 30.1
  {
    sectionId: "cpp-ch30-s1",
    readingTime: 5,
    intro: "The standard library is what turns C++ from a powerful language into a productive one: ready-made, efficient answers to the problems virtually every program faces — storage, traversal, sorting, I/O, time, text, concurrency. This chapter is the map of that territory before the book descends into each region in detail.",
    objectives: [
      "List the major parts of the standard library and say what each contributes",
      "Explain how the design ideals — generality, uniformity, economy — shape the library's interfaces",
      "Classify a given programming task into the library component that serves it"
    ],
    concepts: [
      {
        term: "What the standard library provides",
        kind: "definition",
        statement: "The library spans a dozen domains: **run-time language support** (dynamic memory, RTTI), **the C standard library** with minor modifications, **strings and I/O**, a **framework of containers, iterators and algorithms** (the STL), **numerical computation** (`complex`, `valarray`, random numbers), **regular expression matching**, **concurrency** (`thread`, `mutex`, `future`), plus general **utilities** (time, function objects) and **locale** support.",
        detail: "The book's own tour spends a chapter on each part; the point of the summary is to know what exists before designing anything yourself."
      },
      {
        term: "The STL",
        kind: "definition",
        statement: "The **Standard Template Library** — the framework of generic **containers, iterators and algorithms** designed by Alexander Stepanov and colleagues, later adopted as the centerpiece of the ISO C++ library: roughly a dozen containers, some sixty algorithms, glued together by five iterator categories.",
        detail: "The STL's defining move is the separation: algorithms never know which container they serve, only the iterator category — one `sort` works for every container that can be randomly accessed."
      },
      {
        term: "Design ideals: general, uniform, economical",
        kind: "insight",
        statement: "Library facilities aim to be **general** (usable for any element type meeting minimal requirements), **uniform** (predictable naming and conventions across all components) and **economical** (zero-overhead: you do not pay for what you do not use).",
        detail: "Stroustrup's practical corollary: the standard components are typically more efficient, more correct and better tested than what you can write yourself in the time you have."
      },
      {
        term: "Library and language grow together",
        kind: "insight",
        statement: "Features migrate between language and library as experience accumulates: what many users need and can be supplied without special syntax becomes a library component; what the compiler must understand stays in the language. The boundary is a design decision, not an accident.",
        detail: "Examples: `string` is library, not language; `initializer_list` needed language support but is library machinery; `thread` arrived only when hardware made concurrency mainstream."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** What the library provides and why. You can claim this section when you can list the major parts of the standard library and say what each contributes — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 30 (Standard Library Summary); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Matching tasks to library components",
        problem: "A program must (1) keep a million (name, phone) records searchable by name, (2) produce a report sorted by phone, (3) parse dates like “Mar 30, 2026” from user input, (4) time a slow function, and (5) run the parsing on a worker thread. Which library parts do you reach for?",
        steps: [
          { label: "Step 1: Lookup structure", text: "An `unordered_map<string, Phone>` gives expected $O(1)$ lookup by name; a `map` would instead give $O(\\log n)$ lookup plus alphabetical iteration." },
          { label: "Step 2: Sorted report", text: "Copy the records into a `vector<pair<Phone, Name>>` and `sort` with a comparator on the phone field — $O(n \\log n)$." },
          { label: "Step 3: Dates", text: "`<regex>` — build a `regex`, apply `regex_match` to each line, and read the captures." },
          { label: "Step 4: Timing", text: "`<chrono>` — take `steady_clock::now()` before and after, subtract, and print the `duration`." },
          { label: "Step 5: Concurrency", text: "`<thread>` — run the parse in a `thread` and `join` it, guarding shared results with a `mutex` from `<mutex>`." }
        ],
        result: "Every subtask lands on an existing, tuned component — the mark of knowing the library is that nothing here is designed from scratch."
      },
      {
        title: "Working through introduction",
        problem: "What the library provides and why. Your task: list the major parts of the standard library and say what each contributes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: list the major parts of the standard library and say what each contributes. Write down the guarantee you will rely on — for this chapter it is: The library spans a dozen domains: language support, C compatibility, strings/I/O, the STL, numerics, regex, concurrency, utilities and locales." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double m = std::numeric_limits<double>::max();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain how the design ideals — generality, uniformity, economy — shape the library's interfaces — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The STL's separation — containers hold data, algorithms process sequences, iterators connect the two — is the library's architectural core. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: The library spans a dozen domains: language support, C compatibility, strings/I/O, the STL, numerics, regex, concurrency, utilities and locales. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "The library spans a dozen domains: language support, C compatibility, strings/I/O, the STL, numerics, regex, concurrency, utilities and locales.",
      "The STL's separation — containers hold data, algorithms process sequences, iterators connect the two — is the library's architectural core.",
      "Standard components are usually more efficient and better tested than hand-written equivalents written in the time you have."
    ],
    quiz: [
      {
        q: "Which part of the library is the framework of containers, iterators and algorithms?",
        options: ["The STL", "The `<chrono>` time library", "The locale layer", "`valarray` numerics"],
        answer: 0,
        explanation: "The Standard Template Library — Stepanov's framework — is one part of the larger standard library; the others are separate parts."
      },
      {
        q: "A library design that must work for any element type meeting minimal requirements is called:",
        options: ["uniform", "general", "economical", "portable"],
        answer: 1,
        explanation: "Generality is the ideal of serving any suitable type; uniformity is consistent conventions; economy is the zero-overhead principle."
      },
      {
        q: "Which component answers “time a slow function”?",
        options: ["`<ctime>`'s `clock()`", "a `duration` cast only", "`<chrono>`'s `steady_clock`", "`<ratio>`"],
        answer: 2,
        explanation: "`steady_clock` is the monotonic clock intended for interval measurement; `system_clock` can jump and is for wall-clock time."
      },
      {
        q: "In this chapter's view, replacing a library component with a hand-written one is usually:",
        options: ["necessary for performance", "impossible in C++", "required for portability", "more code, more bugs, rarely faster"],
        answer: 3,
        explanation: "The library's templates are tuned, inlinable and battle-tested; hand-rolled versions lose on all three counts."
      }
    ]
  },

  // ---------------------------------------------------------------- 30.2
  {
    sectionId: "cpp-ch30-s2",
    readingTime: 5,
    intro: "Every standard-library facility is reached through a header. This section fixes the naming rules, the namespace rules, and the subtle difference between the `<c...>` and `<...h>` spellings of the C library — the details that decide whether `std::sqrt` or bare `sqrt` compiles.",
    objectives: [
      "Use the header-naming conventions and locate each facility in the right header",
      "Distinguish `<cmath>`-style from `<math.h>`-style headers and their namespace effects",
      "Avoid the classic header pitfalls: missing includes and polluting `using` directives"
    ],
    concepts: [
      {
        term: "Header conventions",
        kind: "definition",
        statement: "Standard headers carry **no file extension**: `#include <vector>`, `#include <string>`, `#include <algorithm>`. Every name they declare lives in **namespace `std`** (except `std` itself and the C macros, which have no namespace).",
        detail: "The headers are not file names in any guaranteed sense — they are names the preprocessor resolves as the implementation sees fit."
      },
      {
        term: "The `<c...>` headers",
        kind: "definition",
        statement: "Each C standard-library header `xxx.h` reappears as `<cxxx>`: `<cmath>`, `<cstdlib>`, `<cstring>`, … **The `<math.h>` spelling puts its names in the global namespace and possibly in `std`; the `<cmath>` spelling puts them in `std` and possibly in the global namespace.**",
        detail: "The two spellings are therefore not symmetric — and portable C++ code says `std::sqrt`, which works under either, rather than relying on which direction the leakage goes."
      },
      {
        term: "Where things live",
        kind: "method",
        statement: "A working mental map: containers have headers named after them (`<vector>`, `<list>`, `<map>`, `<unordered_map>`, …); the algorithms live in `<algorithm>` (numeric ones in `<numeric>`); iterators and their adaptors in `<iterator>`; function objects and adaptors in `<functional>`; `size_t`, `ptrdiff_t`, `nullptr_t` in `<cstddef>`.",
        detail: "When a name fails to compile, the missing header is the first suspect — the compiler's “not declared” is usually “not included”."
      },
      {
        term: "Namespace hygiene",
        kind: "insight",
        statement: "Never put a using-directive (`using namespace std;`) in a header or before an `#include`: it reopens the namespace for **every** includer, silently inviting ambiguities and name capture.",
        detail: "Inside a function or a source file the directive is a style choice; at global scope in a header it is a defect."
      },
      {
        term: "Headers: the working contract",
        kind: "definition",
        statement: "**Headers.** How the library is included. You can claim this section when you can use the header-naming conventions and locate each facility in the right header — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 30 (Standard Library Summary); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Diagnosing three compile-time failures",
        problem: "A small program (a) calls `std::find(v.begin(), v.end(), 7)` and fails to compile; (b) calls `sqrt(2.0)` having included `<cmath>` and fails; (c) includes `<string.h>` and calls `std::strlen` — should that work?",
        steps: [
          { label: "Case a", text: "`find` is declared in `<algorithm>`, not alongside the container — add `#include <algorithm>`. The rule “algorithms live in `<algorithm>`” is absolute." },
          { label: "Case b", text: "`<cmath>` guarantees the name in `std`; the unqualified `sqrt` is only available under the `.h` spelling or by the (unspecified) leakage — write `std::sqrt(2.0)`." },
          { label: "Case c", text: "`<string.h>` is the C header: it puts `strlen` in the global namespace and only *possibly* in `std`, so `std::strlen` is not portable — use `<cstring>` with `std::`, or plain `strlen`." },
          { label: "Moral", text: "All three failures are header or namespace mismatches, not logic errors: the compiler is enforcing the library's naming discipline." }
        ],
        result: "One include and two spellings fixed the whole program — the fix was knowing the rules, not debugging."
      },
      {
        title: "Working through headers",
        problem: "How the library is included. Your task: use the header-naming conventions and locate each facility in the right header.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use the header-naming conventions and locate each facility in the right header. Write down the guarantee you will rely on — for this chapter it is: Standard headers have no extension and declare their names in namespace `std`." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double m = std::numeric_limits<double>::max();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — distinguish `<cmath>`-style from `<math.h>`-style headers and their namespace effects — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `<math.h>` pollutes the global namespace (and possibly `std`); `<cmath>` declares in `std` (and possibly the global one) — prefer `<c...>` plus qualified names. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Standard headers have no extension and declare their names in namespace `std`. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Standard headers have no extension and declare their names in namespace `std`.",
      "`<math.h>` pollutes the global namespace (and possibly `std`); `<cmath>` declares in `std` (and possibly the global one) — prefer `<c...>` plus qualified names.",
      "Algorithms are in `<algorithm>`/`<numeric>`, never in the container headers; never place `using namespace std;` in a header."
    ],
    quiz: [
      {
        q: "Which header declares `std::find`?",
        options: ["`<vector>`", "`<algorithm>`", "`<iterator>`", "`<functional>`"],
        answer: 1,
        explanation: "All the non-numeric algorithms, `find` included, live in `<algorithm>`; containers only supply the iterators you pass to them."
      },
      {
        q: "`<math.h>` versus `<cmath>`:",
        options: [
          "`<math.h>` puts names in the global namespace and possibly in `std`; `<cmath>` puts them in `std` and possibly in the global one",
          "`<math.h>` puts names in `std` only",
          "the two are identical in every respect",
          "`<cmath>` declares macros only"
        ],
        answer: 0,
        explanation: "This is the chapter's exact statement — the leakage is only guaranteed in one direction for each spelling."
      },
      {
        q: "`using namespace std;` at global scope in a header is:",
        options: ["required for templates", "convenient and harmless", "a pollution hazard for every includer — avoid it", "an error the compiler rejects"],
        answer: 2,
        explanation: "The directive reopens `std` in every translation unit that includes the header, capturing names unpredictably."
      },
      {
        q: "For `std::strlen`, the portable include is:",
        options: ["`<string>`", "`<string.h>`", "`<cstring>`", "`<cstr>`"],
        answer: 2,
        explanation: "`<cstring>` guarantees the names in `std`; `<string.h>` guarantees them only in the global namespace."
      }
    ]
  },

  // ---------------------------------------------------------------- 30.3
  {
    sectionId: "cpp-ch30-s3",
    readingTime: 6,
    intro: "Before the library can offer containers and algorithms it must underpin the language itself: the types the core mentions by name (`size_t`, `nullptr_t`), the numeric limits of the machine, allocation failure and initializer lists. These facilities are the bedrock the rest of the library stands on.",
    objectives: [
      "Name the headers that provide core-language support and say what each contributes",
      "Use `numeric_limits` to query type properties instead of hard-coding platform constants",
      "Avoid the unsigned-arithmetic traps that `size_t` and `ptrdiff_t` set"
    ],
    concepts: [
      {
        term: "The language-support headers",
        kind: "definition",
        statement: "**`<cstddef>`** (`size_t`, `ptrdiff_t`, `nullptr_t`), **`<limits>`** (`numeric_limits`), **`<new>`** (`bad_alloc`, `set_new_handler`), **`<typeinfo>`** (`type_info`, `bad_cast`, `bad_typeid`), **`<exception>`** (`exception`, `terminate`), **`<initializer_list>`**, plus the C inheritance `<cstdarg>`, `<csetjmp>`, `<csignal>`, `<cstdlib>`, `<ctime>`.",
        detail: "These are not “utilities you may use” — they are the declarations the language semantics refer to."
      },
      {
        term: "`size_t` and `ptrdiff_t`",
        kind: "notation",
        statement: "`std::size_t` is the **unsigned** type returned by `sizeof` and by every container's `size()`; `std::ptrdiff_t` is the **signed** type of pointer subtraction. A container of $n$ elements has valid subscripts $0 \\ldots n-1$.",
        detail: "The classic trap: `v.size() - 1` on an *empty* container computes $0 - 1$ in unsigned arithmetic — a huge number near $2^{32}$ or $2^{64}$, never $-1$."
      },
      {
        term: "`numeric_limits`",
        kind: "definition",
        statement: "A template exposing each built-in type's properties: `numeric_limits<int>::max()` and `::min()`, `::digits10`, `::is_signed`; for floating types also `::epsilon()` and `::has_infinity()`. It replaces the C macros (`INT_MAX`, `DBL_MAX`) with one uniform, overloadable interface.",
        detail: "For `double`, `digits10` is 15 — about fifteen significant decimal digits round-trip exactly — and `epsilon()` is $2^{-52} \\approx 2.22\\times10^{-16}$, the spacing of `double`s near 1."
      },
      {
        term: "`initializer_list`",
        kind: "definition",
        statement: "The type behind the brace syntax `vector<int> v {1, 2, 3}`: a lightweight view of an array of `const T` that the compiler constructs automatically when a function takes an `initializer_list<T>` parameter.",
        detail: "It is how variadic-looking brace lists reach constructors and `min({a, b, c})`-style overloads without templates."
      },
      {
        term: "Language Support: the working contract",
        kind: "definition",
        statement: "**Language Support.** Support for language features and limits. You can claim this section when you can name the headers that provide core-language support and say what each contributes — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 30 (Standard Library Summary); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Limits in action: the overflow-safe midpoint",
        problem: "A binary search over `int` data must compute the midpoint of `lo = 1500000000` and `hi = 2000000000`. Show why `(lo + hi) / 2` is wrong, and fix it.",
        steps: [
          { label: "Check the limit", text: "`numeric_limits<int>::max()` is $2^{31} - 1 = 2\\,147\\,483\\,647$." },
          { label: "The overflow", text: "$lo + hi = 3.5\\times10^{9} > 2\\,147\\,483\\,647$: signed overflow — **undefined behavior**, typically a wrapped negative midpoint." },
          { label: "The fix", text: "$lo + (hi - lo)/2 = 1\\,500\\,000\\,000 + 250\\,000\\,000 = 1\\,750\\,000\\,000$ — comfortably inside the range." },
          { label: "The floating cousin", text: "For `double`, remember `digits10 == 15` significant digits and `epsilon()` $\\approx 2.22\\times10^{-16}$ before trusting an `==` on computed reals." }
        ],
        result: "Midpoint 1,750,000,000 computed without overflow — the general lesson: query `numeric_limits` instead of assuming a 32-bit two's-complement world."
      },
      {
        title: "Working through language support",
        problem: "Support for language features and limits. Your task: name the headers that provide core-language support and say what each contributes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: name the headers that provide core-language support and say what each contributes. Write down the guarantee you will rely on — for this chapter it is: `<cstddef>`, `<limits>`, `<new>`, `<typeinfo>` and `<exception>` declare the types the core language itself depends on." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double m = std::numeric_limits<double>::max();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use `numeric_limits` to query type properties instead of hard-coding platform constants — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `size_t` is unsigned: `v.size() - 1` wraps on an empty container instead of becoming $-1$. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `<cstddef>`, `<limits>`, `<new>`, `<typeinfo>` and `<exception>` declare the types the core language itself depends on. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`<cstddef>`, `<limits>`, `<new>`, `<typeinfo>` and `<exception>` declare the types the core language itself depends on.",
      "`size_t` is unsigned: `v.size() - 1` wraps on an empty container instead of becoming $-1$.",
      "`numeric_limits<T>` is the portable source of every platform constant — max, min, digits10, epsilon."
    ],
    quiz: [
      {
        q: "`numeric_limits<int>::max()` for the usual 32-bit two's-complement `int` equals:",
        options: ["$2^{31}$", "$2^{31} - 1 = 2\\,147\\,483\\,647$", "$2^{32} - 1$", "implementation-defined with no typical value"],
        answer: 1,
        explanation: "One less than $2^{31}$: the sign bit halves the positive range — the fact that makes `(lo + hi)` overflow."
      },
      {
        q: "For an empty `vector` v, the expression `v.size() - 1` yields:",
        options: ["$-1$", "$0$", "a huge unsigned value near $2^{32}$ or $2^{64}$", "a throw of `length_error`"],
        answer: 2,
        explanation: "`size()` is unsigned; $0 - 1$ wraps modulo $2^{32}$ or $2^{64}$ — defined behavior, disastrous value."
      },
      {
        q: "`set_new_handler`, which lets you intercept out-of-memory, is declared in:",
        options: ["`<exception>`", "`<new>`", "`<limits>`", "`<cstddef>`"],
        answer: 1,
        explanation: "`<new>` declares `bad_alloc` and `set_new_handler`; `<exception>` holds the base class and `terminate`."
      },
      {
        q: "The braced list in `vector<int> v {1, 2, 3}` has type:",
        options: ["`std::initializer_list<int>`", "`int[3]`", "`std::array<int, 3>`", "a tuple of three ints"],
        answer: 0,
        explanation: "The compiler builds an `initializer_list<int>` over a temporary array of `const int` and hands it to the constructor."
      }
    ]
  },

  // ---------------------------------------------------------------- 30.4
  {
    sectionId: "cpp-ch30-s4",
    readingTime: 6,
    intro: "The standard library reports errors by exceptions, but it is deliberately stingy: most operations communicate through return values or preconditions, and exceptions are reserved for what return values cannot express. This section maps exactly what the library throws, when, and what it never throws.",
    objectives: [
      "Draw the standard exception hierarchy and place `out_of_range`, `length_error` and `bad_alloc` correctly",
      "Predict which library operations throw and which leave errors unchecked",
      "State the basic, strong and no-throw exception-safety guarantees"
    ],
    concepts: [
      {
        term: "The exception hierarchy",
        kind: "definition",
        statement: "All standard exceptions derive from `std::exception`. **`logic_error`** covers errors a caller could in principle detect before running — `invalid_argument`, `length_error`, `out_of_range`, `domain_error`; **`runtime_error`** covers errors detectable only at run time — `range_error`, `overflow_error`, `underflow_error`. Beside them sit `bad_alloc` (`<new>`) and `bad_cast`/`bad_typeid` (`<typeinfo>`).",
        detail: "A too-large request (say, a `reserve` beyond policy) reports `length_error`; an out-of-range index on a *checked* access reports `out_of_range`."
      },
      {
        term: "What the library throws",
        kind: "law",
        statement: "Very little, by design: `vector::at`, `map::at` and `bitset`'s checked conversions throw `out_of_range`; `new` throws `bad_alloc`; `dynamic_cast` of references throws `bad_cast`; a `bitset::to_ulong` too large to fit throws `overflow_error`. Everything else — in particular `v[i]` — **checks nothing**.",
        detail: "Rationale: the library cannot know whether a caller has already validated the index; unchecked access keeps the zero-overhead principle intact."
      },
      {
        term: "Exception-safety guarantees",
        kind: "definition",
        statement: "A library operation offers the **basic guarantee** (on failure, invariants hold, no leaks, the object is in some valid state), the **strong guarantee** (failure leaves the object exactly as before — `push_back` when a copy throws mid-reallocation), or the **no-throw guarantee** (`swap`, `pop_back`, destructors — never let these throw).",
        detail: "Code written to the strong guarantee can retry; code written to the basic guarantee must be able to continue with a valid-but-changed object."
      },
      {
        term: "Unchecked by default, checked by request",
        kind: "insight",
        statement: "The library's error-handling philosophy splits access in two: the fast, unchecked path (`[ ]`, iterators) assumes the caller has established validity; the checked path (`at()`) pays a comparison and a branch to convert a logic error into a catchable exception.",
        detail: "An uncaught exception terminates the program via `terminate`; that is the intended fate of a violated precondition that nobody handled."
      },
      {
        term: "Error Handling: the working contract",
        kind: "definition",
        statement: "**Error Handling.** Exceptions from the library's point of view. You can claim this section when you can draw the standard exception hierarchy and place `out_of_range`, `length_error` and `bad_alloc` correctly — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 30 (Standard Library Summary); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The standard exception hierarchy (§30.4). Everything derives from `exception`; the library's own throws concentrate on `out_of_range` (checked access) and `bad_alloc` (allocation), while `overflow_error`/`underflow_error` report numeric overflows at run time.",
        svg: `<svg role='img' aria-label='The standard exception hierarchy (§30.4). Everything derives from &#96;exception&#96;; the library&#39;s own throws concentrate on &#96;out_of_range&#96; (checked access) and...' viewBox="0 0 840 320" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="340" y="16" width="160" height="34" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.5"/><text x="420" y="38" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">exception</text><path d="M420 50 V66 M140 66 H625 M140 66 V86 M340 66 V86 M625 66 V86" fill="none" stroke="currentColor" stroke-opacity="0.4"/><rect x="50" y="86" width="180" height="34" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.35"/><text x="140" y="107" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">logic error</text><rect x="250" y="86" width="180" height="34" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.35"/><text x="340" y="107" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">runtime error</text><rect x="450" y="86" width="350" height="34" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.35"/><text x="625" y="107" text-anchor="middle" font-size="12" fill="currentColor">bad alloc · bad cast · bad typeid · bad exception</text><text x="625" y="140" text-anchor="middle" font-size="10.5" font-style="italic" fill="currentColor" fill-opacity="0.7">from the new and typeinfo headers</text><path d="M140 120 V156 M340 120 V156" fill="none" stroke="currentColor" stroke-opacity="0.4"/><rect x="20" y="156" width="240" height="100" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.25"/><text x="140" y="178" text-anchor="middle" font-size="12" fill="currentColor">invalid argument</text><text x="140" y="198" text-anchor="middle" font-size="12" fill="currentColor">length error</text><text x="140" y="218" text-anchor="middle" font-size="12" fill="currentColor">out of range</text><text x="140" y="238" text-anchor="middle" font-size="12" fill="currentColor">domain error</text><rect x="290" y="156" width="240" height="100" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.25"/><text x="410" y="186" text-anchor="middle" font-size="12" fill="currentColor">range error</text><text x="410" y="208" text-anchor="middle" font-size="12" fill="currentColor">overflow error</text><text x="410" y="230" text-anchor="middle" font-size="12" fill="currentColor">underflow error</text><text x="420" y="290" text-anchor="middle" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.75">catch the most derived class you can handle; catch (std::exception) catches them all</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "at() versus [ ]",
        problem: "For `vector<int> v {0, 10, 20, 30, 40}`, contrast `v[5] = 1;` with `v.at(5) = 1;` — and with `v[4]` / `v.at(4)`.",
        steps: [
          { label: "Valid index", text: "`v[4]` and `v.at(4)` both yield `40` — fast path and checked path agree when the index is legal." },
          { label: "Subscript out of range", text: "`v[5]` writes past the end: **undefined behavior** — heap corruption, a crash, or nothing at all; no exception is thrown." },
          { label: "Checked access", text: "`v.at(5)` throws `std::out_of_range` (a `logic_error`), so `catch (std::out_of_range&)` — or `catch (std::exception&)` — handles it; `e.what()` returns an implementation-defined message." },
          { label: "Choosing", text: "Use `[ ]` where the index is already known valid (a loop bounded by `v.size()`); use `at()` where the index arrives from outside the program's control." }
        ],
        result: "One index error, two contracts: undefined behavior on the fast path, a precise exception on the checked path — pick per call site, not by habit."
      },
      {
        title: "Working through error handling",
        problem: "Exceptions from the library's point of view. Your task: draw the standard exception hierarchy and place `out_of_range`, `length_error` and `bad_alloc` correctly.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: draw the standard exception hierarchy and place `out_of_range`, `length_error` and `bad_alloc` correctly. Write down the guarantee you will rely on — for this chapter it is: `out_of_range` and `length_error` are `logic_error`s; `overflow_error` and `underflow_error` are `runtime_error`s; `bad_alloc` sits on its own branch." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double m = std::numeric_limits<double>::max();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict which library operations throw and which leave errors unchecked — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The library throws only from checked operations (`at`, `new`, `dynamic_cast`); `v[i]` is unchecked by design. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `out_of_range` and `length_error` are `logic_error`s; `overflow_error` and `underflow_error` are `runtime_error`s; `bad_alloc` sits on its own branch. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`out_of_range` and `length_error` are `logic_error`s; `overflow_error` and `underflow_error` are `runtime_error`s; `bad_alloc` sits on its own branch.",
      "The library throws only from checked operations (`at`, `new`, `dynamic_cast`); `v[i]` is unchecked by design.",
      "Know which guarantee an operation gives — basic, strong or no-throw — before writing recovery code."
    ],
    quiz: [
      {
        q: "`v.at(99)` on a five-element `vector` throws:",
        options: ["`std::out_of_range`", "`std::runtime_error` directly", "`std::bad_alloc`", "nothing — it is undefined behavior"],
        answer: 0,
        explanation: "`at` is the checked access: it throws `out_of_range`, a subclass of `logic_error`."
      },
      {
        q: "Which is NOT a `logic_error` subclass?",
        options: ["`invalid_argument`", "`length_error`", "`overflow_error`", "`domain_error`"],
        answer: 2,
        explanation: "`overflow_error` belongs to the `runtime_error` branch — a numeric condition only detectable at run time."
      },
      {
        q: "“Failure leaves the object exactly as it was before the operation” is the:",
        options: ["basic guarantee", "strong guarantee", "no-throw guarantee", "swap guarantee"],
        answer: 1,
        explanation: "The strong guarantee permits retry; the basic guarantee only promises a valid state, and the no-throw guarantee promises no failure at all."
      },
      {
        q: "`v[7]` on a five-element `vector`:",
        options: ["throws `out_of_range`", "returns 0", "is undefined behavior", "is a compile-time error"],
        answer: 2,
        explanation: "Unchecked subscripting is the zero-overhead path; only `at` validates."
      }
    ]
  },

  // ---------------------------------------------------------------- 30.5
  {
    sectionId: "cpp-ch30-s5",
    readingTime: 4,
    intro: "The chapter closes with Stroustrup's rules of thumb, which compress the library into a decision procedure: what to reach for first, what to distrust, and what never to write by hand. They are short because the earlier sections earned them.",
    objectives: [
      "Apply the “know the library first” discipline to new programming tasks",
      "Justify preferring standard components over hand-rolled ones with cost and correctness arguments",
      "Recognize when library advice overrides performance intuition"
    ],
    concepts: [
      {
        term: "Know the library before you write",
        kind: "method",
        statement: "**Do not re-invent the wheel: before writing a container, algorithm or utility, check the library** — it is probably there, already tested and tuned. Reading the library's table of contents is part of design.",
        detail: "The corollary cuts the other way: do not turn to non-standard or hand-built code until the standard has demonstrably failed you."
      },
      {
        term: "Performance intuition is unreliable",
        kind: "insight",
        statement: "Hand-written code is not automatically faster: the library's templates are specialized by iterator category and inlined by the compiler, so a library `sort` routinely beats hand-written quicksort and a `vector` beats hand-managed arrays in real programs.",
        detail: "Measure before believing — but start from the library side, where the surprises are usually pleasant."
      },
      {
        term: "Complexity guarantees are promises",
        kind: "law",
        statement: "Every standard algorithm and container operation carries a documented complexity — $O(n)$ for `find`, $O(n \\log n)$ for `sort`, $O(\\log n)$ for a `map` lookup. Treat these as binding contracts you may reason with, not folklore.",
        detail: "This is what makes “the library is fast enough” a design argument rather than a hope."
      },
      {
        term: "Shipping rule for standard library summary",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Check the library before writing any container, algorithm or utility yourself.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for standard library summary",
        kind: "method",
        statement: "Take the objectives as review questions: apply the “know the library first” discipline to new programming tasks? Then justify preferring standard components over hand-rolled ones with cost and correctness arguments? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "The cost of not using the library",
        problem: "A team hand-writes a bubble sort for 10,000 records while a colleague uses `std::sort`. Compare the comparison counts.",
        steps: [
          { label: "Bubble sort", text: "average/worst case $\\frac{n(n-1)}{2} = \\frac{10^4(10^4-1)}{2} \\approx 5\\times10^7$ comparisons." },
          { label: "std::sort", text: "worst case $O(n \\log n)$: about $10^4 \\times \\log_2(10^4) \\approx 10^4 \\times 13.3 \\approx 1.3\\times10^5$ comparisons." },
          { label: "Ratio", text: "$5\\times10^7 / 1.3\\times10^5 \\approx 370$ — three orders of magnitude, before counting the bugs a hand-rolled sort accumulates." },
          { label: "Beyond speed", text: "The library version also accepts any element type with a strict weak ordering, and is exercised daily by millions of programs." }
        ],
        result: "≈370× fewer comparisons — the advice “prefer the standard library” is quantitative, not aesthetic."
      },
      {
        title: "Reviewing standard library summary code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the “know the library first” discipline to new programming tasks.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Check the library before writing any container, algorithm or utility yourself." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `double m = std::numeric_limits<double>::max();`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify preferring standard components over hand-rolled ones with cost and correctness arguments. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Trust the documented complexity guarantees — they are contracts you can reason with." },
        ],
        result: "The review ends with findings tied to reasons: Check the library before writing any container, algorithm or utility yourself. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Check the library before writing any container, algorithm or utility yourself.",
      "Trust the documented complexity guarantees — they are contracts you can reason with.",
      "Hand-written code is rarely faster and never better tested than the standard equivalent."
    ],
    quiz: [
      {
        q: "For n = 10,000, `std::sort` makes about how many comparisons?",
        options: ["$10^4$", "$5 \\times 10^7$", "$1.3 \\times 10^5$", "$10^8$"],
        answer: 2,
        explanation: "$n \\log_2 n \\approx 10^4 \\times 13.3 \\approx 1.3\\times10^5$ — versus $5\\times10^7$ for bubble sort."
      },
      {
        q: "Your first move when a program needs a hash table is:",
        options: ["write one with chained buckets", "use `unordered_map` from the library", "use `map` — always", "avoid the question with parallel arrays"],
        answer: 1,
        explanation: "The library already supplies the tuned, tested hash table; hand-rolling is the last resort, not the first."
      },
      {
        q: "A standard algorithm's documented complexity is:",
        options: ["typical folklore", "true only for `int`", "unspecified by the standard", "a binding upper-bound promise"],
        answer: 3,
        explanation: "The complexity is part of the standard's contract — you may rely on it in design."
      }
    ]
  }
]
