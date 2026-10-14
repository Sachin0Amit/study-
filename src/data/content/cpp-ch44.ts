import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 44: Compatibility (Sections 44.1 – 44.4)
// Master study content.
// ============================================================================

export const cppCh44Content: SectionContent[] = [
  // ---------------------------------------------------------------- 44.1
  {
    sectionId: "cpp-ch44-s1",
    readingTime: 5,
    intro: "This last chapter steps back and asks two questions a practitioner meets weekly: what changed between C++98 and C++11, and how does C++ relate to C? The answers are engineering, not trivia — knowing the C++11 delta tells you which idioms to prefer when one codebase contains both styles, and knowing the real C/C++ differences is the difference between a clean port and a week of mysterious compile and link errors.",
    objectives: [
      "Distinguish source compatibility from link compatibility and name where each is promised",
      "Explain in what sense C++ is and is not a superset of C",
      "Justify why maintaining C compatibility is an economic feature of the language",
    ],
    concepts: [
      {
        term: "Three compatibility relations",
        kind: "definition",
        statement: "TC++PL separates three questions: (1) **C++11 versus C++98** — the standard works to keep existing code compiling, and nearly all of it does (export templates were removed, and `auto` changed meaning); (2) **C++ versus C** — a deliberate, small, documented set of differences (section 44.3); (3) **link compatibility** across implementations — never assumed, always verified per toolchain.",
        detail: "Within one implementation family, code compiled at different times generally links; across vendors, even the same version is not promised — the standard deliberately does not mandate an ABI.",
      },
      {
        term: "Source versus link compatibility",
        kind: "definition",
        statement: "**Source compatibility** means a program compiles unchanged; **link compatibility** means separately compiled parts interoperate — symbol names, calling conventions, and object layouts agree. C++ offers source compatibility across versions as a goal, and link compatibility to C through `extern \"C\"`; across C++ compilers, only source is portable.",
        detail: "The name-mangling and layout differences that break cross-compiler linking are exactly what `extern \"C\"` suspends at a C boundary.",
      },
      {
        term: "Almost a superset",
        kind: "law",
        statement: "C++ is *almost* a superset of C: most C programs become legal C++ after mechanical fixes, but the languages have drifted apart on purpose — C++ rejects implicit `void*` conversions, tentative definitions, and features C added after the fork (variable-length arrays, `restrict`). Neither committee now accepts a change that would break the other language accidentally.",
        detail: "In practice, the C subset of C++ is well-defined enough that large codebases compile as both for decades — which is exactly why the remaining differences deserve a checklist (section 44.3).",
      },
      {
        term: "Why compatibility is a feature",
        kind: "insight",
        statement: "The economics: billions of lines of working C, an installed base of C ABIs as the systems lingua franca, and teams that migrate incrementally. Compatibility is why C++ grew a better subset instead of replacing C's syntax incompatibly — the value of the existing code exceeds the value of a clean slate.",
        detail: "Stroustrup's rule of thumb appears here: C++'s evolution is constrained by the code that already exists, on purpose — breaking changes must buy their cost back in benefit.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Compatibility at a glance. You can claim this section when you can distinguish source compatibility from link compatibility and name where each is promised — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 44 (Compatibility); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Six lines, three piles",
        problem: "Classify each fragment as legal in both languages, legal in C only, or legal in C++ only — and say why.",
        steps: [
          { label: "Pile 1: Both", text: "`int x = 1;` and `int f(void) { return 0; }` — plain declarations that lie in the common subset; the explicit `(void)` parameter list is the form that means 'no arguments' in both." },
          { label: "Pile 2: C only", text: "`int* p = malloc(4);` — C accepts the implicit conversion of `malloc`'s `void*` result; C++ requires a cast or `new`. And `goto over; int z = 0; over: ;` — C permits jumping over an initialization; C++ rejects it because `z` would exist uninitialized." },
          { label: "Pile 3: C++ only", text: "`auto y = x + 1;` — in C++11 this deduces `int`; in C, `auto` is a storage-class specifier and the declaration is an error. And `class Foo { };` — `class` is an ordinary identifier in C, a keyword in C++." },
          { label: "The pattern", text: "The C-only pile is mostly *silent permissiveness* C++ withdrew (implicit conversions, uncontrolled jumps); the C++-only pile is the type machinery C never had. Neither language contains the other." },
        ],
        result: "Two lines in each pile — 'common subset' is a real, documentable dialect, and every serious dual-language header lives inside it deliberately.",
      },
      {
        title: "Working through introduction",
        problem: "Compatibility at a glance. Your task: distinguish source compatibility from link compatibility and name where each is promised.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish source compatibility from link compatibility and name where each is promised. Write down the guarantee you will rely on — for this chapter it is: Three relations matter: C++11/C++98 (nearly all old code compiles), C++/C (deliberate differences), and cross-compiler linking (never assumed)." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int legacy(int n);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain in what sense C++ is and is not a superset of C — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Source compatibility is about compiling unchanged; link compatibility is about symbols and layout — only the C boundary is standardized. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Three relations matter: C++11/C++98 (nearly all old code compiles), C++/C (deliberate differences), and cross-compiler linking (never assumed). Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Three relations matter: C++11/C++98 (nearly all old code compiles), C++/C (deliberate differences), and cross-compiler linking (never assumed).",
      "Source compatibility is about compiling unchanged; link compatibility is about symbols and layout — only the C boundary is standardized.",
      "C++ is an almost-superset of C by design, and the exceptions exist to buy type safety.",
    ],
    quiz: [
      {
        q: "Is C++ a superset of C?",
        options: [
          "Yes — every valid C program is a valid C++ program.",
          "No overlap at all — they are separate languages sharing syntax accidentally.",
          "Almost — deliberately not: C++ rejects some valid C, and the two languages have evolved separately since 1989.",
          "Only C89 is shared; C99 broke compatibility permanently.",
        ],
        answer: 2,
        explanation: "The gaps are intentional (implicit void* conversions, tentative definitions) and the two standards committees have added incompatible features on both sides since the split.",
      },
      {
        q: "What does link compatibility mean?",
        options: [
          "The code compiles with either compiler.",
          "Separately compiled parts interoperate — their symbol names, calling conventions, and layouts agree.",
          "The two languages share a grammar.",
          "The standard libraries behave identically.",
        ],
        answer: 1,
        explanation: "Linking is about object files meeting: name mangling and layout must match, which the standard deliberately does not guarantee across implementations — unlike the `extern \"C\"` boundary.",
      },
      {
        q: "Why does C++ work so hard to stay C-compatible?",
        options: [
          "Because billions of lines of C and the C ABI anchor systems programming — interop is an economic necessity.",
          "Because C is faster and C++ must delegate to it.",
          "Because the ISO committee required it in 1998.",
          "Because C++ has no standard library of its own.",
        ],
        answer: 0,
        explanation: "The installed base is the asset: rewriting working code has costs and risks that dwarf the inconvenience of maintaining compatibility rules.",
      },
    ],
  },

  // ---------------------------------------------------------------- 44.2
  {
    sectionId: "cpp-ch44-s2",
    readingTime: 8,
    intro: "C++11 was the largest revision the language has ever had — 'C++0x' became C++11 after thirteen years of work. Stroustrup's summary runs to roughly a hundred additions; this section organizes the ones you will actually meet: move semantics and the type-deduction trio, the template machinery, uniform initialization, and the concurrency foundation that chapters 41 and 42 stand on.",
    objectives: [
      "Explain what move semantics and rvalue references change about returning and growing objects",
      "List the major language and library families added in C++11 and their purpose",
      "Rewrite C++98 idioms in their C++11 forms and state what each rewrite removes",
    ],
    concepts: [
      {
        term: "Move semantics and rvalue references",
        kind: "definition",
        statement: "**Rvalue references** (`T&&`) name objects whose value need not be preserved — temporaries and expiring locals. Overloading on `T&&` enables **move operations**: take the source's guts (three pointer assignments for a `vector`) instead of deep-copying them, leaving the source empty. Moves are what make pass-by-value, `std::sort`'s swaps, and value-style APIs affordable.",
        detail: "With `std::move` to mark sources and `std::forward` to preserve value category through templates, the machinery underlies every C++11 library addition in this list.",
      },
      {
        term: "Lambdas, auto, and range-for",
        kind: "method",
        statement: "A **lambda** writes the function object at its point of use — `[=](int a, int b) { return a > b; }` captures what it needs and inlines into the call. **`auto`** deduces a type from its initializer, **`decltype`** from an expression, and **range-for** (`for (auto& e : c)`) replaces the iterator boilerplate.",
        detail: "Together they shrink typical algorithm code dramatically and remove its most error-prone ingredient: the hand-spelled 30-character iterator type that anchored half of all C++98 compile errors.",
      },
      {
        term: "The template machinery",
        kind: "definition",
        statement: "**Variadic templates** (parameter packs) made type-safe variadic interfaces possible — `make_shared`, `tuple`, `std::thread`, `async` itself. **Template aliases** (`using IntMap = map<int,string>;`) replaced `typedef` tricks; `>>` now closes nested templates; local types became valid template arguments; `constexpr` functions moved computation to compile time; `static_assert` added compile-time diagnostics.",
        detail: "C++98's fixed-arity workarounds — overloads in powers of two, macro glue — are all obsolete; the variadic pattern `(Args&& ...args)` forwarding to a pack expansion is the idiom to recognize on sight.",
      },
      {
        term: "Uniform initialization",
        kind: "definition",
        statement: "Braces work everywhere: `int a[] {1,2,3}`, `vector<int> v {1,2,3}`, `complex z {1,2}`, members, returns. The **initializer_list** type participates in overload resolution for constructors, and **narrowing is rejected**: `int x {3.14};` does not compile.",
        detail: "One syntax for every initialization context was the goal; the cost is a few parsing surprises when a constructor taking an initializer_list competes with a two-argument one — prefer braces for containers and lists, parentheses when the parentheses constructor is meant.",
      },
      {
        term: "The concurrency foundation",
        kind: "definition",
        statement: "C++11's single biggest addition is the **memory model** — a formal answer to 'what is one thread guaranteed to see when another writes' — plus `atomic` with its ordering guarantees, `std::thread`, `mutex`, `condition_variable`, and the future family. Threads moved from platform feature to language feature.",
        detail: "Around it: `thread_local` storage, `chrono`, and `exception_ptr` for carrying exceptions across threads. Chapters 41 and 42 are the detailed treatment of exactly this list.",
      },
    ],
    figures: [
      {
        caption: "A map of the C++11 additions over C++98, grouped the way this book treats them: language core (left), the concurrency and memory-model foundation (center, emphasized), and the standard-library additions (right). The memory model is the keystone — portable threads and atomics are impossible without it.",
        afterConcept: 5,
        svg: '<svg viewBox="0 0 760 420" width="100%" role="img" aria-label="Map of C++11 additions over C++98 grouped by language core, concurrency and memory model, and library" font-family="ui-sans-serif, system-ui"><rect x="255" y="12" width="250" height="34" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="380" y="34" text-anchor="middle" font-size="12.5" font-weight="600" fill="currentColor">C++11: what it added to C++98</text><line x1="380" y1="46" x2="136" y2="66" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="380" y1="46" x2="380" y2="66" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="380" y1="46" x2="624" y2="66" stroke="currentColor" stroke-width="1" opacity="0.5"/><text x="136" y="80" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor">Language core</text><text x="380" y="80" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor">Concurrency + memory model</text><text x="624" y="80" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor">Standard library</text><rect x="30" y="90" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="106" text-anchor="middle" font-size="10" fill="currentColor">move semantics, rvalue refs</text><rect x="30" y="122" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="138" text-anchor="middle" font-size="10" fill="currentColor">lambdas and closures</text><rect x="30" y="154" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="170" text-anchor="middle" font-size="10" fill="currentColor">auto, decltype, range-for</text><rect x="30" y="186" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="202" text-anchor="middle" font-size="10" fill="currentColor">variadic templates, aliases</text><rect x="30" y="218" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="234" text-anchor="middle" font-size="10" fill="currentColor">uniform init, initializer lists</text><rect x="30" y="250" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="266" text-anchor="middle" font-size="10" fill="currentColor">constexpr fns, compile-time asserts</text><rect x="30" y="282" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="298" text-anchor="middle" font-size="10" fill="currentColor">enum class, nullptr, long long</text><rect x="30" y="314" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="330" text-anchor="middle" font-size="10" fill="currentColor">override, final, =default, =delete</text><rect x="30" y="346" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="136" y="362" text-anchor="middle" font-size="10" fill="currentColor">delegating and inheriting ctors</text><rect x="274" y="90" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="106" text-anchor="middle" font-size="10" fill="currentColor">the C++ memory model</text><rect x="274" y="122" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="138" text-anchor="middle" font-size="10" fill="currentColor">atomics and fences</text><rect x="274" y="154" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="170" text-anchor="middle" font-size="10" fill="currentColor">thread, mutex, lock types</text><rect x="274" y="186" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="202" text-anchor="middle" font-size="10" fill="currentColor">condition variable</text><rect x="274" y="218" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="234" text-anchor="middle" font-size="10" fill="currentColor">future, promise, async</text><rect x="274" y="250" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="266" text-anchor="middle" font-size="10" fill="currentColor">packaged tasks, thread pools</text><rect x="274" y="282" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="298" text-anchor="middle" font-size="10" fill="currentColor">thread local storage</text><rect x="274" y="314" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.4"/><text x="380" y="330" text-anchor="middle" font-size="10" fill="currentColor">chrono dates and durations</text><rect x="518" y="90" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="106" text-anchor="middle" font-size="10" fill="currentColor">smart pointers</text><rect x="518" y="122" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="138" text-anchor="middle" font-size="10" fill="currentColor">tuple, array, forward list</text><rect x="518" y="154" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="170" text-anchor="middle" font-size="10" fill="currentColor">unordered containers</text><rect x="518" y="186" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="202" text-anchor="middle" font-size="10" fill="currentColor">function and bind</text><rect x="518" y="218" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="234" text-anchor="middle" font-size="10" fill="currentColor">regular expressions (regex)</text><rect x="518" y="250" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="266" text-anchor="middle" font-size="10" fill="currentColor">random engines and distributions</text><rect x="518" y="282" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="298" text-anchor="middle" font-size="10" fill="currentColor">type traits</text><rect x="518" y="314" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="330" text-anchor="middle" font-size="10" fill="currentColor">error codes, exception ptrs</text><rect x="518" y="346" width="212" height="24" rx="5" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/><text x="624" y="362" text-anchor="middle" font-size="10" fill="currentColor">begin, end, move, forward</text><text x="380" y="398" text-anchor="middle" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.85">The memory model is the foundation: portable threads and atomics are impossible without it.</text></svg>',
      },
    ],
    examples: [
      {
        title: "Three rewrites, measured",
        problem: "Take three C++98 idioms, rewrite each in C++11, and count what disappears.",
        steps: [
          { label: "Rewrite 1: Iteration", text: "C++98: `for (std::map<std::string,int>::iterator p = m.begin(); p != m.end(); ++p) use(p->first, p->second);` — a 35-character type name spelled at the loop head. C++11: `for (auto& e : m) use(e.first, e.second);` — three lines become one and the type name vanishes." },
          { label: "Rewrite 2: The algorithm argument", text: "C++98 sorts by a named functor: a struct with an `operator()`, defined away from the call, then passed by name — six lines and a page-flip. C++11: `sort(v.begin(), v.end(), [](const string& a, const string& b) { return a.size() < b.size(); });` — the ordering lives at the call site and inlines." },
          { label: "Rewrite 3: Returning a big object", text: "Returning a `vector<string>` of 1,000 strings of 100 characters: a C++98 copy duplicates every buffer — 1,000 allocations and roughly 101,000 bytes moved, about 0.1 ms. The C++11 move hands over three pointers per string instead — a few hundred nanoseconds, about four orders of magnitude less work, with the same source code (`return v;`) thanks to overload resolution on rvalue-ness." },
        ],
        result: "One iterator spelling, one functor, and one deep copy gone — each rewrite deletes exactly the kind of code reviewers have to squint at, which is the pattern of the whole C++11 delta.",
      },
      {
        title: "Working through C++11 extensions",
        problem: "What C++11 added over C++98. Your task: explain what move semantics and rvalue references change about returning and growing objects.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain what move semantics and rvalue references change about returning and growing objects. Write down the guarantee you will rely on — for this chapter it is: Move semantics (rvalue references) makes returning and growing objects cheap — the enabler of C++11's value-style APIs." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int legacy(int n);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — list the major language and library families added in C++11 and their purpose — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Lambdas, auto, decltype, and range-for delete the boilerplate and the giant type spellings of C++98. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Move semantics (rvalue references) makes returning and growing objects cheap — the enabler of C++11's value-style APIs. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Move semantics (rvalue references) makes returning and growing objects cheap — the enabler of C++11's value-style APIs.",
      "Lambdas, auto, decltype, and range-for delete the boilerplate and the giant type spellings of C++98.",
      "The memory model plus atomics and threads is the foundational addition; uniform initialization and variadic templates round out the language core.",
    ],
    quiz: [
      {
        q: "What single C++11 addition made a portable thread library possible at all?",
        options: [
          "The memory model — the formal definition of what one thread is guaranteed to see when another writes.",
          "Garbage collection.",
          "Lambda expressions.",
          "The `final` keyword.",
        ],
        answer: 0,
        explanation: "Without a memory model, compilers are free to reorder and cache memory operations; atomics and mutexes have semantics only because C++11 first defined the model they sit on (chapter 41).",
      },
      {
        q: "What do rvalue references (`T&&`) enable?",
        options: [
          "Reference counting.",
          "Deducing template arguments automatically.",
          "Move semantics — taking resources from expiring objects instead of deep-copying them.",
          "Aliasing the same object under two names.",
        ],
        answer: 2,
        explanation: "An rvalue reference binds to objects whose value need not be preserved, so the move constructor may steal its guts — a vector move is three pointer assignments.",
      },
      {
        q: "Which of these is NOT a C++11 feature?",
        options: [
          "Lambdas",
          "Variadic templates",
          "`static_assert`",
          "Concepts — that is C++20.",
        ],
        answer: 3,
        explanation: "Concepts were the headline feature of C++20; C++11 shipped without them and used tag dispatch and SFINAE instead.",
      },
      {
        q: "What does `enum class` mainly buy over a plain enum?",
        options: [
          "Shorter declarations.",
          "Scoped enumerator names and no implicit conversion to int — no silent surprises.",
          "Faster comparisons in switch statements.",
          "ABI compatibility with C enums.",
        ],
        answer: 1,
        explanation: "A scoped enum's enumerators do not leak into the enclosing scope, and values do not silently convert to integers — closing two classic bug families at once.",
      },
    ],
  },

  // ---------------------------------------------------------------- 44.3
  {
    sectionId: "cpp-ch44-s3",
    readingTime: 7,
    intro: "The C and C++ committees parted company in 1989 and have met separately ever since; the languages overlap heavily but neither contains the other. The differences are not accidents — almost every one exists to make C++'s type discipline possible — and each is a porting bug waiting for the unwary. This section is the checklist.",
    objectives: [
      "Predict which valid C programs a C++ compiler will reject, and why the rejection is deliberate",
      "Explain the type-system differences: void* conversions, character literal types, string literal constness",
      "Use extern \"C\" and the common subset to build headers and libraries that serve both languages",
    ],
    concepts: [
      {
        term: "Not a superset — by design",
        kind: "law",
        statement: "Every incompatibility in this section is deliberate: C++ trades C's silent permissiveness for compile-time error detection — implicit `void*` conversions, unconverted character literals, unchecked empty parameter lists. The price is that some correct C programs need small, mechanical edits to become C++.",
        detail: "TC++PL's stance: the differences are 'minor' in count but not in kind — each removes a silent assumption a C compiler makes on the programmer's behalf.",
      },
      {
        term: "Type-system differences",
        kind: "definition",
        statement: "In C, `malloc`'s `void*` result converts implicitly to any object pointer; C++ requires a cast. In C a character literal has type `int`, so `sizeof('a')` is `sizeof(int)` (typically 4); in C++ it is `char` — `sizeof('a') == 1`. A C string literal is `char[N]`; a C++ literal is `const char[N]`, and binding it to `char*` is at best deprecated. File-scope `const` has external linkage in C, internal in C++.",
        detail: "The `const` linkage rule means a `const int x;` at file scope needs an initializer in C++ but is a common tentative declaration pattern in C.",
      },
      {
        term: "Declarations and namespaces",
        kind: "definition",
        statement: "C++ reserves about 80 identifiers C uses freely (`class`, `new`, `delete`, `template`, `this`, `namespace`, ...). C keeps a separate **tag namespace** (`struct S` and an ordinary identifier `S` can coexist); in C++ the tag *is* an ordinary type name. Empty parentheses `f()` mean 'unspecified arguments' in C but 'no arguments' in C++ — C must write `f(void)`. Tentative definitions (`int x; int x;`) are legal C and a redefinition error in C++. `goto` may not jump over an initialization in C++.",
        detail: "The K&R one-argument-defines-at-a-time style also shows the difference: old-style C definitions without prototypes are rejected by C++ outright.",
      },
      {
        term: "Features C has and C++ lacks",
        kind: "definition",
        statement: "Variable-length arrays (`int a[n]` with run-time n), the `restrict` qualifier, C99 designated initializers (`{ .x = 1 }` — C++20 adopts a restricted form), compound literals, `_Generic` type dispatch, and flexible array members. C++ answers each differently: `vector`, implementation extensions, member initializers, and overloading.",
        detail: "These are the reason 'compile it as C++' fails on modern C codebases: C99-era code assumes features the C++ committee consciously declined to import (until C++20 partially relented on designated initializers).",
      },
      {
        term: "The interop kit: extern \"C\"",
        kind: "method",
        statement: "`extern \"C\" { ... }` gives declarations **C linkage**: the function keeps its unmangled C symbol, so C code, C compilers, and dlsym-style lookups can all find it. Headers shared between the languages wrap their declarations in `#ifdef __cplusplus` guards; overloading and classes cannot cross the boundary, but pointers to plain data and to functions pass freely.",
        detail: "A C function can never be overloaded if it is to keep C linkage; and the objects crossing the boundary should be of layout-compatible types — PODs or standard-layout structs.",
      },
    ],
    examples: [
      {
        title: "One line, two languages",
        problem: "This line is legal C and rejected by every C++ compiler. Diagnose it, fix it both ways, and note the two hidden numbers a shared codebase must know.",
        steps: [
          { label: "Step 1: The line", text: "`int* p = malloc(10 * sizeof(int));` — in C, `malloc` returns `void*` and the assignment converts it implicitly; in C++ that conversion is ill-formed, and the compiler stops right there." },
          { label: "Step 2: Two fixes", text: "The portable form adds the cast — `int* p = (int*)malloc(10 * sizeof(int));` — legal in both languages. The C++-native form is `int* p = new int[10];` (or better, `vector<int> v(10);`), which also constructs and deallocates correctly." },
          { label: "Step 3: The hidden numbers", text: "Write `printf(\"%zu\", sizeof('a'));` through both compilers: C prints `4` (a character literal has type int), C++ prints `1` (type char). Same source, different language, different answer — the classic shared-codebase interview question." },
          { label: "Step 4: The linking half", text: "A function `double rate(int);` compiled by a C++ compiler gets a mangled name encoding its parameter types; C code linking against it finds no symbol. Wrapping the declaration in `extern \"C\"` suppresses the mangling so both sides agree on the one name — the same mechanism a shared header automates with `#ifdef __cplusplus`." },
        ],
        result: "Diagnosis (implicit void* conversion), two fixes (cast for common-subset code, new for C++-only), one measurable divergence (sizeof of a character literal), and the linkage rule that makes the last mile work.",
      },
      {
        title: "Working through C/C++ compatibility",
        problem: "Real differences between the languages. Your task: predict which valid C programs a C++ compiler will reject, and why the rejection is deliberate.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: predict which valid C programs a C++ compiler will reject, and why the rejection is deliberate. Write down the guarantee you will rely on — for this chapter it is: C++ deliberately rejects some valid C: implicit void* conversions, tentative definitions, VLAs, restrict, and unconverted character literals." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int legacy(int n);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the type-system differences: void* conversions, character literal types, string literal constness — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Same source, different meaning: sizeof('a') is 4 in C and 1 in C++; file-scope const has different linkage; () means different things. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: C++ deliberately rejects some valid C: implicit void* conversions, tentative definitions, VLAs, restrict, and unconverted character literals. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "C++ deliberately rejects some valid C: implicit void* conversions, tentative definitions, VLAs, restrict, and unconverted character literals.",
      "Same source, different meaning: sizeof('a') is 4 in C and 1 in C++; file-scope const has different linkage; () means different things.",
      "extern \"C\" plus the common subset is the standard interop kit: one unmangled symbol per function, layout-compatible types across the boundary.",
    ],
    quiz: [
      {
        q: "What happens to `int* p = malloc(10 * sizeof(int));` in each language?",
        options: [
          "Legal in both.",
          "A warning in both.",
          "Legal C, rejected by C++ — a void* does not implicitly convert to int*.",
          "Legal C++, rejected by C.",
        ],
        answer: 2,
        explanation: "C permits the implicit conversion from void*; C++ requires an explicit cast (or new) — a deliberate removal of an unsound silent conversion.",
      },
      {
        q: "What does `sizeof('a')` yield in C and in C++?",
        options: [
          "C: typically 4 (a character literal has type int); C++: 1 (type char).",
          "Both 1.",
          "Both 4.",
          "C: 1, C++: 4.",
        ],
        answer: 0,
        explanation: "C inherits its promotion rules from pre-ANSI practice; C++ made the literal a char so overloading on character type works — same syntax, different types.",
      },
      {
        q: "Which feature exists in C but not in (pre-C++20) C++?",
        options: [
          "Function overloading.",
          "Variable-length arrays (and restrict, and C99 designated initializers).",
          "References.",
          "Templates.",
        ],
        answer: 1,
        explanation: "The C committee added VLAs, restrict, and designated initializers in C99; C++ consciously declined, offering vector and (later) a restricted initializer form instead.",
      },
      {
        q: "What is the purpose of `extern \"C\"`?",
        options: [
          "It makes the function inline across translation units.",
          "It renames the function to a C++-style mangled symbol.",
          "It marks the function as deprecated for C callers.",
          "It gives the function C linkage — an unmangled symbol that C code can link to.",
        ],
        answer: 3,
        explanation: "Name mangling encodes parameter types; extern \"C\" suspends it so the symbol the C++ compiler emits is the one the C compiler expects — the hinge of every mixed codebase.",
      },
    ],
  },

  // ---------------------------------------------------------------- 44.4
  {
    sectionId: "cpp-ch44-s4",
    readingTime: 4,
    intro: "The chapter closes with advice that is really a migration strategy: keep C code compiling as C++ from day one, keep the boundary between the languages narrow and explicit, and never write in the C subset what the language you are using exists to improve. Each rule converts a compatibility trap into a deliberate, visible decision.",
    objectives: [
      "Apply the compile-early, compile-often strategy for C code in a C++ project",
      "Structure a dual-language header with include guards and extern \"C\" correctly",
      "Explain why programming in the C subset of C++ is a false economy",
    ],
    concepts: [
      {
        term: "Compile your C as C++",
        kind: "method",
        statement: "Get C code compiling under a C++ compiler early, and keep it compiling in both languages — the compiler then flags every silent difference (implicit conversions, missing prototypes, tentative definitions) as it appears, instead of letting it become an archaeology dig years later.",
        detail: "The inverse rule is just as important: do not 'fix' the warnings by casting them into silence — fix the code, or the compatibility check stops checking anything.",
      },
      {
        term: "Wrap, don't scatter",
        kind: "method",
        statement: "Isolate the C interface behind a thin façade of RAII types: a `File` class owning `FILE*`, a `std::string` boundary converting with `.c_str()`, a `vector` behind the pointer-and-count API. The C lives in one directory; the rest of the program stays C++.",
        detail: "The façade is also the natural place for the error checks the C API omits — turning return codes into exceptions exactly once, at the boundary.",
      },
      {
        term: "Program in C++, not the C subset",
        kind: "insight",
        statement: "You can write C with a C++ compiler, and sometimes you must — but resource handles, `string`, `vector`, and exceptions exist precisely so you do not have to. A project that forbids its own facilities re-imports every bug class the C++ library was designed to remove.",
        detail: "TC++PL's formulation is about intent: the C subset is for interoperating with C, not a dialect to write new systems in.",
      },
      {
        term: "Know the actual differences",
        kind: "law",
        statement: "Maintain the checklist: implicit `void*` casts, `sizeof('a')`, string literal constness, reserved keywords, tag namespaces, tentative definitions, `goto` over initialization, VLAs and `restrict`. When a dual-language header misbehaves, it is almost always one of these — and a wrong guess hides it further.",
        detail: "The shared-subset dialect is learnable in an afternoon; what it costs is remembering that two compilers read the same line differently, and knowing which line.",
      },
      {
        term: "Link compatibility is per-implementation",
        kind: "insight",
        statement: "The standard does not guarantee that code compiled by different compilers — or even different versions of one compiler — links. The safe common denominator across vendors is the C ABI: `extern \"C\"` functions plus standard-layout data across the boundary, with anything richer created through a factory function.",
        detail: "This is why plugin systems and OS interfaces are C APIs even when their implementations are C++ — the C ABI is the one interface every toolchain agrees on.",
      },
    ],
    examples: [
      {
        title: "One header, two languages",
        problem: "Write a geometry header that compiles as C under a C compiler and as C++ under a C++ compiler, exporting one function to both.",
        steps: [
          { label: "Step 1: The skeleton", text: "`#ifndef GEOM_H / #define GEOM_H / #ifdef __cplusplus extern \"C\" { #endif ... #ifdef __cplusplus } #endif / #endif` — the include guard is identical in both languages; `__cplusplus` is defined only by C++ compilers." },
          { label: "Step 2: The declarations", text: "Inside the guarded region, plain common-subset declarations only: `typedef struct { double r; } Circle; double area(const Circle* c);` — pointers to layout-compatible data and functions with C linkage cross the boundary; references, classes, and overloads cannot." },
          { label: "Step 3: What each compiler sees", text: "The C compiler sees two plain declarations. The C++ compiler additionally wraps them in `extern \"C\"`, so the definition — even if compiled as C++ — receives an unmangled symbol with C calling convention, and a C-built library links against it without knowing C++ exists." },
          { label: "Step 4: The C++ side's freedom", text: "The implementation file compiles as C++ and may use `vector`, templates, and exceptions internally — the boundary constrains only the declared interface, which is exactly why it stays maintainable." },
        ],
        result: "One file, two compilers, one ABI: the pattern underlying every C library that ships a C++ binding, and the standard layout of system headers on every platform.",
      },
      {
        title: "Reviewing compatibility code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the compile-early, compile-often strategy for C code in a C++ project.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Keep C code compiling as C++ from the start — the compiler becomes a continuous compatibility checker." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `int legacy(int n);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: structure a dual-language header with include guards and extern 'C' correctly. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Contain the C interface behind RAII wrappers and one narrow boundary; use extern 'C' and the common subset in shared headers." },
        ],
        result: "The review ends with findings tied to reasons: Keep C code compiling as C++ from the start — the compiler becomes a continuous compatibility checker. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Keep C code compiling as C++ from the start — the compiler becomes a continuous compatibility checker.",
      "Contain the C interface behind RAII wrappers and one narrow boundary; use extern \"C\" and the common subset in shared headers.",
      "Write new code in full C++: the C subset re-imports the bug classes the library exists to remove.",
    ],
    quiz: [
      {
        q: "What is the first move when a C++ project needs to absorb a C library?",
        options: [
          "Rewrite it from scratch in a modern language.",
          "Get it to compile as C++ early and keep it compiling in both — the compiler then surfaces every silent difference.",
          "Compile it as C forever and link with extern \"C\" only at the end.",
          "Convert all its functions to classes before reading them.",
        ],
        answer: 1,
        explanation: "Early dual compilation turns compatibility from a one-time porting project into a standing invariant the compiler enforces for free.",
      },
      {
        q: "In a header shared by C and C++ code, what is the role of `#ifdef __cplusplus extern \"C\" {`?",
        options: [
          "To include the declarations twice for safety.",
          "To disable the include guard for C.",
          "So the same header compiles as C, while a C++ compiler additionally sees the declarations wrapped in C linkage — one symbol, callable from both.",
          "To speed up the preprocessor.",
        ],
        answer: 2,
        explanation: "The macro `__cplusplus` is defined only by C++ compilers; the guard lets one source of truth serve both languages with the right linkage on each side.",
      },
      {
        q: "What is the book's stance on writing new code in the C subset of C++?",
        options: [
          "It is the recommended style for systems work.",
          "It compiles, but you re-import C's bug classes — use `string`, `vector`, RAII, and exceptions where you can.",
          "It is required for portability to embedded targets.",
          "It always produces smaller and faster code.",
        ],
        answer: 1,
        explanation: "The C subset exists for interop, not as a dialect for new systems; every facility it declines to use is a bug class it volunteers to keep.",
      },
    ],
  },
]
