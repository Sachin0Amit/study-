import type { SectionContent } from "../library"

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 1: Notes to the Reader (Sections 1.1 – 1.6)
// ============================================================================

export const cppCh1Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: "cpp-ch1-s1",
    readingTime: 5,
    intro: "The C++ Programming Language is a tour and a reference bound in one volume: 44 chapters arranged in four parts, ordered by increasing abstraction. Stroustrup front-loads three short tours of the language so that you see the whole of C++ before any single feature is studied in depth. This section maps the territory so you can navigate the rest of the book — and this course — deliberately.",
    objectives: [
      "Sketch the four-part structure of the book and the chapters each part contains",
      "Choose the right part of the book for a given programming problem",
      "Explain why the tours (Chapters 2–5) precede the detailed treatments",
    ],
    concepts: [
      {
        term: "The four parts",
        kind: "definition",
        statement: "**Part I, Introductory material (Chapters 1–5)**, opens with this chapter and continues with three tours of the language plus a tour of utilities and concurrency. **Part II, Basic facilities (Chapters 6–15)**, covers the built-in machinery: types and declarations, pointers, arrays and references, statements, expressions, functions, exception handling, namespaces, and source files and linking. **Part III, Abstraction mechanisms (Chapters 16–29)**, covers classes, construction/copy/move, overloading, derived classes and hierarchies, templates and generic programming, and template metaprogramming. **Part IV, The standard library (Chapters 30–45)**, is the user's view: STL containers, algorithms and iterators, memory and resources, strings, regex, I/O streams, numerics, concurrency, and the C standard library.",
        detail: "The organizing axis is *level of abstraction*, not history: built-in types first, then user-defined types, then parameterized types, then ready-made library types.",
      },
      {
        term: "The tour-first organization",
        kind: "insight",
        statement: "Chapters 2–5 deliberately present C++ **as it is used by good programmers** — classes, templates, the standard library and concurrency in a few dozen pages each — before any feature gets a full treatment. The rationale: a language cannot be understood as a mere list of features, because its power comes from the combination of features working together.",
        detail: "You cannot design a class properly without knowing that templates exist, and you cannot appreciate templates without having seen containers. The tours give you the combination first; the later parts supply the detail on demand.",
      },
      {
        term: "Assumed background and reading paths",
        kind: "method",
        statement: "The book assumes **some programming experience** but *not* prior C. Read Part I linearly as a tutorial; treat Parts II–IV as reference material reached through the table of contents and the index rather than cover to cover.",
        detail: "Stroustrup's own suggestion for experienced C or Java programmers is to still read the tours first: unlearning habits is harder than learning features, and the tours present the modern style that the detail chapters then justify.",
      },
      {
        term: "The Structure of This Book: the working contract",
        kind: "definition",
        statement: "**The Structure of This Book.** Introduction, basic facilities, abstraction mechanisms, the standard library and references. You can claim this section when you can sketch the four-part structure of the book and the chapters each part contains — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 1 (Notes to the Reader); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "The Structure of This Book: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, choose the right part of the book for a given programming problem. Then, explain why the tours (Chapters 2–5) precede the detailed treatments. Finally, test the outcome against the section promise: Four parts ordered by abstraction: introductory tours, basic facilities, abstraction mechanisms, standard library.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Mapping three questions onto the book",
        problem: "For each of these realistic questions, which chapter(s) answer it, and at what depth?",
        steps: [
          { label: "Question 1", text: "“I need to sort a vector of structs by a field.” The quick answer is the library tour (4.5, algorithms); the deep answer is Chapter 32 (STL algorithms) with Chapter 33 (iterators) and lambdas from Chapter 11." },
          { label: "Question 2", text: "“What does the standard actually guarantee about vector growth?” That is Chapter 31 (STL containers) — a Part IV guarantee question; the tours stay silent on purpose." },
          { label: "Question 3", text: "“How do move semantics really work?” The tour of abstraction (3.3) gives the idea in two pages; Chapter 17 (construction, cleanup, copy and move) gives the mechanism, and Chapter 34 the memory model behind allocation." },
          { label: "The pattern", text: "Every practical question has a *tour-level* answer you can use today and a *part-level* answer that explains why the quick answer is safe." },
        ],
        result: "The book is organized by depth of treatment: tours for use, Parts II–IV for understanding. Read Chapter 1 first, the tours second, then jump.",
      },
      {
        title: "Working through the structure of this book",
        problem: "Introduction, basic facilities, abstraction mechanisms, the standard library and references. Your task: sketch the four-part structure of the book and the chapters each part contains.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: sketch the four-part structure of the book and the chapters each part contains. Write down the guarantee you will rely on — for this chapter it is: Four parts ordered by abstraction: introductory tours, basic facilities, abstraction mechanisms, standard library." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v = {1, 2, 3}; std::sort(v.begin(), v.end());` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — choose the right part of the book for a given programming problem — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The tours (Chapters 2–5) exist because features only make sense in combination — see the whole before the parts. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Four parts ordered by abstraction: introductory tours, basic facilities, abstraction mechanisms, standard library. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Four parts ordered by abstraction: introductory tours, basic facilities, abstraction mechanisms, standard library.",
      "The tours (Chapters 2–5) exist because features only make sense in combination — see the whole before the parts.",
      "Parts II–IV are reference material: navigate by problem, not by page order.",
    ],
    quiz: [
      {
        q: "Which part of the book contains the introductory tours of the language and library?",
        options: [
          "Part I, Chapters 1–5",
          "Part II, because tours are basic facilities",
          "Part III, the abstraction mechanisms",
          "Part IV, the standard library",
        ],
        answer: 0,
        explanation: "Part I is the introductory material: Chapter 1 plus the tours of the basics, abstraction, containers and algorithms, and concurrency and utilities.",
      },
      {
        q: "A reader wants the formal, complete rules for template name binding. Where does that live?",
        options: [
          "Chapter 3, the tour of abstraction",
          "Chapter 26 (instantiation) in Part III, the abstraction mechanisms",
          "Part I only — the tours are complete descriptions",
          "Nowhere; templates are specified only by implementations",
        ],
        answer: 1,
        explanation: "The tours are explicitly incomplete. Templates span Part III (Chapters 23–29); instantiation and name binding is Chapter 26.",
      },
      {
        q: "Why do the tours precede the detailed chapters?",
        options: [
          "For historical reasons — the tours reproduce the order C++ was standardized in",
          "To keep the page count low by avoiding detail",
          "Because Part II assumes knowledge of the standard library",
          "Because a language cannot be understood as a list of features; its value lies in combinations",
        ],
        answer: 3,
        explanation: "Stroustrup's stated rationale: features interact, so you need an overview of the whole before any feature's details are meaningful.",
      },
      {
        q: "Which sequence correctly orders the parts by the abstractions they cover?",
        options: [
          "Standard library → basic facilities → abstraction mechanisms → tours",
          "Abstraction mechanisms → basic facilities → tours → standard library",
          "Tours → basic facilities → abstraction mechanisms → standard library",
          "Basic facilities → tours → standard library → abstraction mechanisms",
        ],
        answer: 2,
        explanation: "Built-in facilities, then user-defined abstractions, then the ready-made library: the axis is level of abstraction.",
      },
    ],
  },

  // ---------------------------------------------------------------- 1.2
  {
    sectionId: "cpp-ch1-s2",
    readingTime: 6,
    intro: "C++ was not accreted by accident; it was built against an explicit design brief, and every feature decision in the rest of the book is argued from it. This section states that brief — a systems-programming language supporting multiple paradigms with no room for features that tax code that does not use them — and the two consequences that shape everything else: the zero-overhead principle and the static type system.",
    objectives: [
      "State the design aims of C++ and why no single paradigm is privileged",
      "Apply the zero-overhead principle to judge a proposed feature or design",
      "Explain the role and limits of C compatibility in the design",
    ],
    concepts: [
      {
        term: "The design brief",
        kind: "law",
        statement: "**C++ is a general-purpose programming language with a bias toward systems programming that (1) is a better C, (2) supports data abstraction, (3) supports object-oriented programming, and (4) supports generic programming.** It is multi-paradigm by policy: procedures, classes, and templates are all first-class tools, and the design task is to pick the right one for the job, not to force every problem into one idiom.",
        detail: "This is the canonical formulation Stroustrup gives (echoing The Design and Evolution of C++). “General-purpose with a systems bias” rules out mandatory garbage collection, mandatory run-time checks, and any feature that cannot be implemented efficiently on ordinary hardware.",
      },
      {
        term: "The zero-overhead principle",
        kind: "law",
        statement: "**What you don't use, you don't pay for. What you do use, you couldn't hand-code any better.** Abstractions must compile down to code as good as a specialist could write without them: virtual functions cost one indirection *only when you call them virtually*, templates specialize to the exact type used, and unused library features cost nothing at run time.",
        detail: "The first half is the reason C++ has no universal base class and no mandatory runtime; the second half is the reason `std::sort` beats hand-written loops for inlined element types.",
      },
      {
        term: "Static type checking as the main safety net",
        kind: "insight",
        statement: "C++ checks types at **compile time**, and the type system is the primary tool for holding large programs under control: the richer the types you use, the more errors surface as compile-time messages instead of run-time crashes. Type violations are not “undefined unless caught” — the language makes no promise for unchecked memory or type transgressions, so the language's answer is to make the compiler catch what it can before the program runs.",
        detail: "Small programs can be made to work in almost any language; the hard problem — the one C++ targets — is keeping large programs understandable, and that is where the type system earns its keep.",
      },
      {
        term: "C compatibility — what it is and is not",
        kind: "insight",
        statement: "C++ aims for **C compatibility at the source level for the large common subset**, so C libraries and C code can interoperate, but C++ is *not* a superset of C: some C programs are invalid C++, and many accepted-by-both programs mean different things. The book's advice is blunt — from a C background, “leaving C behind” is often the modern C++ move, because many C idioms (arrays, raw pointers, `malloc`, casts, macros) are unsafe micro-optimizations in C++ clothing.",
        detail: "Together with the library this yields the language-library-system view: an ISO C++ program is written in a language, against a standard library, and atop a compile-link model shared with C. All three layers are part of “knowing C++”.",
      },
      {
        term: "The Design of C++: the working contract",
        kind: "definition",
        statement: "**The Design of C++.** Programming styles, type checking, C compatibility and the language-library-system view. You can claim this section when you can state the design aims of C++ and why no single paradigm is privileged — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 1 (Notes to the Reader); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Auditing a design against the zero-overhead principle",
        problem: "Does sorting a `vector<int>` with `std::sort` pay a hidden abstraction tax? Test the claim against the principle's two halves.",
        steps: [
          { label: "Step 1: instantiate", text: "`std::sort` is a template; used on `vector<int>` it is generated for `int` and `vector<int>::iterator` — the comparisons and the loop overhead can be inlined and optimized for exactly that element type." },
          { label: "Step 2: first half", text: "Code that never uses `std::sort`, virtual functions, or exceptions at all carries none of their cost — “what you don't use, you don't pay for”." },
          { label: "Step 3: second half", text: "The generated inner loop is the same compare-and-swap sequence a C programmer would write for an `int` array — “what you do use, you couldn't hand-code any better”." },
          { label: "Step 4: contrast", text: "A design that boxed each `int` on the heap and called a virtual comparison through a universal base class would violate the principle: every comparison pays an indirection and every element an allocation." },
        ],
        result: "The principle is a *test you can apply*: any proposed abstraction must either compile away or provide value visibly greater than its cost.",
      },
      {
        title: "Working through the design of C++",
        problem: "Programming styles, type checking, C compatibility and the language-library-system view. Your task: state the design aims of C++ and why no single paradigm is privileged.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state the design aims of C++ and why no single paradigm is privileged. Write down the guarantee you will rely on — for this chapter it is: C++ is general-purpose with a systems bias: better C plus data abstraction, OOP and generic programming — multi-paradigm by design." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v = {1, 2, 3}; std::sort(v.begin(), v.end());` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the zero-overhead principle to judge a proposed feature or design — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Zero-overhead rule: unused features cost nothing; used features cost no more than hand-written code. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: C++ is general-purpose with a systems bias: better C plus data abstraction, OOP and generic programming — multi-paradigm by design. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "C++ is general-purpose with a systems bias: better C plus data abstraction, OOP and generic programming — multi-paradigm by design.",
      "Zero-overhead rule: unused features cost nothing; used features cost no more than hand-written code.",
      "C++ is C-compatible at the interface level, not a superset; many C idioms should be left behind in modern C++.",
    ],
    quiz: [
      {
        q: "Which statement is the zero-overhead principle as Stroustrup states it?",
        options: [
          "All abstractions must be paid for by a small constant factor",
          "What you don't use, you don't pay for; what you do use, you couldn't hand-code any better",
          "Run-time checks are worth their cost in all programs",
          "The compiler may insert a garbage collector when heap use is detected",
        ],
        answer: 1,
        explanation: "Both halves matter: no tax on unused machinery, and no tax on used machinery relative to hand-written specialist code.",
      },
      {
        q: "Why does C++ reject a mandatory garbage collector as part of the core language?",
        options: [
          "Because it would tax programs that manage resources deterministically — violating the systems-programming bias and zero-overhead rule",
          "Because garbage collection is mathematically unsound",
          "Because collectors cannot be written portably",
          "Because destructors make resource leaks impossible in all cases",
        ],
        answer: 0,
        explanation: "A mandatory collector is a run-time cost and an unpredictability no real-time or systems program can accept; C++ instead offers deterministic destruction, with optional collectors for those who want them.",
      },
      {
        q: "“C++ is a better C” is best read as which of the following?",
        options: [
          "C++ accepts every C program unchanged",
          "C++ corrects the C grammar and syntax so old code must be rewritten",
          "C++ programs are always faster than equivalent C programs",
          "C++ improves on C for the areas where C is weak (type safety, abstraction) while remaining close enough for interoperation",
        ],
        answer: 3,
        explanation: "C++ is not a superset; the aim is compatibility on the common subset so libraries interoperate, while the language pushes toward safer, higher-level styles.",
      },
      {
        q: "A team argues for treating every entity as an object of a single base class with virtual methods “for uniformity”. Which design rule does this break first?",
        options: [
          "The multi-paradigm rule, because it uses object orientation at all",
          "None — this is exactly how the standard containers are designed",
          "The zero-overhead principle: code that does not need dynamic dispatch would still pay for it",
          "The C compatibility rule, because base classes are not in C",
        ],
        answer: 2,
        explanation: "A universal base class taxes every use with indirection and uniformity of representation; C++ deliberately has none.",
      },
      // PYQ-pattern — C versus C++ character literal types (rephrased)
      {
        q: "The same source line `sizeof('a')` is compiled once as C and once as C++. What values result, and what does the difference show?\n```cpp\n// compiled as C:   printf(\"%d\\n\", (int)sizeof('a'));\n// compiled as C++: std::cout << sizeof('a');\n```",
        options: ["`1` in both, because character literals are identical in the two languages", "`4` in both, because `int` occupies 4 bytes on every platform", "`4` in C and `1` in C++, because C gives character literals type `int` while C++ gives them type `char`", "`1` in C and `4` in C++, because C++ widens every literal"],
        answer: 2,
        explanation: "Step 1: The data given is one token sequence measured by `sizeof` under two language rules. Step 2: The governing rule is the type of a character literal: C assigns it type `int`, while C++ assigns it type `char`, and `sizeof` reports the size of that type. Step 3: Tracing both compilations, the C build measures an `int` and prints `4` on typical platforms, while the C++ build measures a `char` and prints `1`. Step 4: The distractors fail because the literal types genuinely differ, no platform fixes `int` at 4 bytes by standard, and C++ narrows rather than widens here. Step 5: Therefore identical syntax can carry different meanings, which is why C++ is compatible with C on a shared subset rather than being a strict superset."
      }
    ],
  },

  // ---------------------------------------------------------------- 1.3
  {
    sectionId: "cpp-ch1-s3",
    readingTime: 5,
    intro: "C++ supports programming at many levels — from raw machine manipulation to type-rich application code — and where you operate is a choice, not a fixed property of the language. This section is Stroustrup's field guide to learning that range: learn by programming, start with the modern style, and retrain your habits deliberately if you come from C or Java.",
    objectives: [
      "Explain why C++ can only be learned by writing programs",
      "List the C habits that modern C++ deliberately leaves behind",
      "Contrast Java programmers' assumptions with C++ value semantics and destruction",
    ],
    concepts: [
      {
        term: "Learning by programming",
        kind: "method",
        statement: "You cannot learn C++ by reading about it: **the only way to learn a programming language is to write programs in it**. Start with the tours, write small complete programs immediately, and use the standard library from the first day so that early programs are useful rather than ceremonial.",
        detail: "The book is written so this is possible: the tours deliberately use strings, containers and algorithms before defining them, because using the library is how real C++ is learned.",
      },
      {
        term: "Two levels, one language",
        kind: "insight",
        statement: "C++ can express both the **low-level machine view** (pointers, casts, bytes, layout — the C subset's home ground) and the **high-level type-rich view** (user-defined types, containers, algorithms). Both are C++; the design center of the language is the high level, but the low level exists so that abstraction never becomes a wall between you and the machine when you need through it.",
        detail: "The practical consequence for learning: master the high level first, and reach for the low level deliberately, with a reason, not from habit.",
      },
      {
        term: "For programmers coming from C",
        kind: "insight",
        statement: "The C habits to leave behind: fixed-size arrays and pointer arithmetic (use `vector`), `malloc`/`free` (use objects and containers whose lifetimes are managed by constructors/destructors), C-style casts and macros (use templates and `constexpr`), `printf` (use streams), and macro-based constants (use `constexpr`). In C these idioms were tools; in C++ they are the low-level escape hatches that the type system cannot check.",
        detail: "Stroustrup's warning to C programmers: much of the C you know is a set of unsafe micro-optimizations for 1970s compilers; modern C++ gives the same performance without the unsafety.",
      },
      {
        term: "For programmers coming from Java",
        kind: "insight",
        statement: "The surprises for Java programmers are structural: C++ has **value semantics** (objects live where you declare them, assignments copy), **deterministic destruction** (destructors run at scope exit — no garbage collector), **no universal root class**, and **`const` as a first-class idea**. Templates do the compile-time work that interfaces and factories do at run time in Java.",
        detail: "The mental shift: in Java an object is always reached through a reference to heap-allocated memory; in C++ an object *is* its storage, and you choose — stack, member, or free store — per type and per use.",
      },
      {
        term: "Learning C++: the working contract",
        kind: "definition",
        statement: "**Learning C++.** Learning by programming, with suggestions for C++, C and Java programmers. You can claim this section when you can explain why C++ can only be learned by writing programs — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 1 (Notes to the Reader); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Porting a C line counter to C++",
        problem: "Count the lines of an input stream. First the C idiom, then the C++ idiom — compare the failure modes.",
        steps: [
          { label: "Step 1: the C version", text: "In C: `char line[100]; while (fgets(line, 100, stdin)) ++n;` — a fixed 100-byte buffer, the length limit duplicated as a magic number in two places." },
          { label: "Step 2: find the failure", text: "A 150-character line is split by `fgets` into two reads, so `n` counts 2 where the text has 1 line. A 99+ character buffer is a silent correctness bug, and any larger reworking risks an overflow." },
          { label: "Step 3: the C++ version", text: "In C++: `string line; while (getline(cin, line)) ++n;` — `string` owns and grows its own storage, so no size limit exists to get wrong, and `getline` returns the stream, which converts to `bool` exactly when the read fails." },
          { label: "Step 4: compare", text: "One statement, no buffer, no magic numbers, no overflow class of bugs. This is “leaving C behind”: the C idiom optimized for a 1970s allocator, not for correctness." },
        ],
        result: "The port removes an entire bug class (fixed-size buffers) rather than fixing one instance of it — the standard payoff of using the type-rich level.",
      },
      {
        title: "Working through learning C++",
        problem: "Learning by programming, with suggestions for C++, C and Java programmers. Your task: explain why C++ can only be learned by writing programs.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain why C++ can only be learned by writing programs. Write down the guarantee you will rely on — for this chapter it is: C++ is learned by writing programs, and the tours are designed to be programmed along with." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v = {1, 2, 3}; std::sort(v.begin(), v.end());` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — list the C habits that modern C++ deliberately leaves behind — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: From C: replace arrays, `malloc`, casts, macros and `printf` with `vector`, objects, templates, `constexpr` and streams. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: C++ is learned by writing programs, and the tours are designed to be programmed along with. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "C++ is learned by writing programs, and the tours are designed to be programmed along with.",
      "From C: replace arrays, `malloc`, casts, macros and `printf` with `vector`, objects, templates, `constexpr` and streams.",
      "From Java: expect value semantics, deterministic destruction, no root class, and templates doing compile-time genericity.",
    ],
    quiz: [
      {
        q: "Which is Stroustrup's position on learning C++?",
        options: [
          "Learn C first, then add classes on top of that base",
          "Write programs from the start, using the standard library early",
          "Read the language definition first; programs come later",
          "Master pointers and memory layout before writing any class",
        ],
        answer: 1,
        explanation: "The book states that the only way to learn a language is to program in it, and the tours are built so you can use the library from day one.",
      },
      {
        q: "A C programmer's first instinct is `double buf[256]`. What is the modern C++ replacement in most code?",
        options: [
          "A `vector` or a `string`, which own and grow their storage",
          "A `malloc`'d array, since it can be resized",
          "A raw pointer plus a length variable",
          "A macro that allocates the buffer lazily",
        ],
        answer: 0,
        explanation: "Fixed-size arrays invite overflow bugs; `vector` and `string` manage size and storage themselves.",
      },
      {
        q: "Which Java assumption fails immediately in C++?",
        options: [
          "Loops exist in both languages",
          "Both languages have integer arithmetic",
          "Both languages have libraries",
          "Object assignment copies the object's value — objects are not always heap-allocated references",
        ],
        answer: 3,
        explanation: "C++ has value semantics: assignment copies, objects live where declared, and only explicitly requested dynamic allocation touches the free store.",
      },
      {
        q: "Why does C++ have no universal base class like Java's `Object`?",
        options: [
          "Because multiple inheritance already covers that role",
          "It does — `std::object` is the root of the hierarchy",
          "Because it would tax all objects with representation and dispatch they may not need — a zero-overhead violation",
          "Because the standard library forbids it",
        ],
        answer: 2,
        explanation: "A forced root class means every object carries the root's baggage; C++ keeps built-in types first-class and only pays for polymorphism where it is used.",
      },
    ],
  },

  // ---------------------------------------------------------------- 1.4
  {
    sectionId: "cpp-ch1-s4",
    readingTime: 5,
    intro: "C++'s design makes sense only against its history: it began in 1979 as “C with Classes”, a Simula-style class mechanism grafted onto C for efficiency, and grew by experiment into an ISO-standard language of two million-plus programmers. This section walks the timeline — Cfront, the 1998 standard with the STL, and the 2011 C++11 revision this fourth edition targets.",
    objectives: [
      "Trace the timeline from C with Classes (1979) to the C++11 standard (2011)",
      "Explain what Simula and C each contributed to the original design",
      "State what C++98 and C++11 each added and why they mattered",
    ],
    concepts: [
      {
        term: "1979: C with Classes",
        kind: "definition",
        statement: "C++ began at Bell Labs in **1979** as a set of extensions to C called **“C with Classes”**, written by Stroustrup for his work on distributed systems. He wanted **Simula's** program organization — classes, inheritance, virtual functions — because it made large programs tractable, but with **C's** efficiency, portability and unfussy deployment, which Simula's run-time systems of the day could not deliver.",
        detail: "The combination was the design: Simula for structure, C for the machine, and a single-language compile-and-link model so the result could run everywhere C ran.",
      },
      {
        term: "The Cfront era",
        kind: "insight",
        statement: "The implementation itself was a driving force: a translator (later compiler) named **Cfront**, whose releases paced the language. The name “C++” (Rick Mascitti's suggestion, a play on `++`) dates from 1983; **Cfront 1.0's first commercial release came in 1985**; Release 2.0 (1989) added multiple inheritance; Release 3.0 (1991) added templates and exception handling.",
        detail: "Each feature was used experimentally for years inside Bell Labs and the user community before standardization — “use it before standardizing it” is the recurring theme of C++'s history.",
      },
      {
        term: "1998: the first ISO standard",
        kind: "definition",
        statement: "**C++98** (ISO/IEC 14882) stabilized thirteen years of industrial practice into a portable standard, and — decisively — **adopted the STL**: the containers, algorithms and iterator framework of Stepanov, Musser and Lee, plus `string`, `complex` and the I/O streams library. The language gained a standard library to match its abstraction mechanisms.",
        detail: "Standardization converted C++ from a dialect family defined by implementations into a language defined by a document — the difference between “works on my compiler” and “works”.",
      },
      {
        term: "2011: C++11",
        kind: "definition",
        statement: "After a decade of incremental work, **C++11** nearly doubles the language's effective surface: move semantics and rvalue references, `auto`, range-`for`, uniform `{}` initialization, lambdas, `constexpr`, variadic templates, a defined **memory model with threads, mutexes, atomics and futures**, `unique_ptr`/`shared_ptr`, regular expressions, and `unordered_map`. Stroustrup's summary: it “feels like a new language” while remaining compatible enough to run the world's existing C++ code.",
        detail: "This fourth edition of the book is a C++11 book: it describes the language as defined by ISO/IEC 14882:2011, with the C++98/03 rules noted only where they differ.",
      },
      {
        term: "History: the working contract",
        kind: "definition",
        statement: "**History.** The timeline from the early years through the 1998 and 2011 standards. You can claim this section when you can trace the timeline from C with Classes (1979) to the C++11 standard (2011) — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 1 (Notes to the Reader); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The C++ timeline: from C with Classes (1979) through the Cfront releases to the ISO standards of 1998 and 2011. Each step added a mechanism after years of experimental use, never by deleting the old one.",
        afterConcept: 4,
        svg: '<svg viewBox="0 0 760 240" width="100%" role="img" aria-label="C++ history timeline from 1979 to 2011"><line x1="45" y1="130" x2="730" y2="130" stroke="currentColor" stroke-width="1.6"/><polygon points="730,125.5 740,130 730,134.5" fill="currentColor"/><circle cx="60" cy="130" r="4.5" fill="currentColor"/><line x1="60" y1="126" x2="60" y2="96" stroke="currentColor" stroke-width="1.2"/><text x="60" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">C with Classes</text><text x="60" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.75">Bell Labs, Simula + C</text><text x="60" y="148" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">1979</text><circle cx="140" cy="130" r="4.5" fill="currentColor"/><line x1="140" y1="134" x2="140" y2="164" stroke="currentColor" stroke-width="1.2"/><text x="140" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">renamed C++</text><text x="140" y="192" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">1983</text><circle cx="180" cy="130" r="4.5" fill="currentColor"/><line x1="180" y1="126" x2="180" y2="96" stroke="currentColor" stroke-width="1.2"/><text x="180" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">Cfront 1.0</text><text x="180" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.75">first commercial release</text><text x="180" y="148" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">1985</text><circle cx="260" cy="130" r="4.5" fill="currentColor"/><line x1="260" y1="134" x2="260" y2="164" stroke="currentColor" stroke-width="1.2"/><text x="260" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">Release 2.0:</text><text x="260" y="192" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">multiple inheritance</text><text x="260" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">1989</text><circle cx="300" cy="130" r="4.5" fill="currentColor"/><line x1="300" y1="126" x2="300" y2="96" stroke="currentColor" stroke-width="1.2"/><text x="300" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">Release 3.0:</text><text x="300" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">templates, exceptions</text><text x="300" y="148" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">1991</text><circle cx="440" cy="130" r="4.5" fill="currentColor"/><line x1="440" y1="134" x2="440" y2="164" stroke="currentColor" stroke-width="1.2"/><text x="440" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">ISO C++98: the STL,</text><text x="440" y="192" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">string, complex, streams</text><text x="440" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">1998</text><circle cx="700" cy="130" r="4.5" fill="currentColor"/><line x1="700" y1="126" x2="700" y2="96" stroke="currentColor" stroke-width="1.2"/><text x="700" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">C++11: move, lambda,</text><text x="700" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">threads, auto, regex</text><text x="700" y="148" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="600" fill="currentColor">2011</text><text x="380" y="232" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.8">ISO/IEC 14882 — one document defines the language and its standard library</text></svg>',
      },
    ],
    examples: [
      {
        title: "Dating a feature from first principles",
        problem: "Place each of these five mechanisms on the timeline and justify the date: virtual functions, multiple inheritance, templates, the STL containers, and the thread/memory model.",
        steps: [
          { label: "Virtual functions", text: "In C with Classes from the start (1979–83): Simula's insight, cheap to implement, no new type-system burden — earliest." },
          { label: "Multiple inheritance", text: "Release 2.0, 1989 — requested by users building complex frameworks; controversial, so it arrived only after years of pressure." },
          { label: "Templates", text: "Release 3.0, 1991 — needed to write type-safe containers without macros; took a decade to reach full power." },
          { label: "The STL", text: "Adopted into the 1998 standard — generic programming matured *because* templates existed; Stepanov's framework joined the standard library." },
          { label: "Threads and the memory model", text: "2011 — multicores became universal, so the language finally defined what concurrent access means; no earlier standard could even state the question." },
        ],
        result: "The pattern: mechanisms are used experimentally for years, then standardized; nothing is added on speculation, and nothing working is removed.",
      },
      {
        title: "Working through history",
        problem: "The timeline from the early years through the 1998 and 2011 standards. Your task: trace the timeline from C with Classes (1979) to the C++11 standard (2011).",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: trace the timeline from C with Classes (1979) to the C++11 standard (2011). Write down the guarantee you will rely on — for this chapter it is: C++ began in 1979 as C with Classes: Simula's organization on C's efficiency." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v = {1, 2, 3}; std::sort(v.begin(), v.end());` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain what Simula and C each contributed to the original design — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Cfront releases paced the language: 1.0 (1985), 2.0 with multiple inheritance (1989), 3.0 with templates (1991). If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: C++ began in 1979 as C with Classes: Simula's organization on C's efficiency. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "C++ began in 1979 as C with Classes: Simula's organization on C's efficiency.",
      "Cfront releases paced the language: 1.0 (1985), 2.0 with multiple inheritance (1989), 3.0 with templates (1991).",
      "C++98 standardized the language plus the STL; C++11 added move semantics, lambdas and a real concurrency model — the subject of this edition.",
    ],
    quiz: [
      {
        q: "Which two languages were the direct ancestors of the original C with Classes design?",
        options: [
          "Smalltalk and B",
          "Simula and C",
          "Algol and Ada",
          "BCPL and Pascal",
        ],
        answer: 1,
        explanation: "Simula contributed classes, inheritance and virtual functions; C contributed the efficiency, portability and the deployment model.",
      },
      {
        q: "The most consequential *library* addition of the 1998 standard was:",
        options: [
          "The STL — containers, algorithms and iterators",
          "The thread library",
          "Regular expressions",
          "Smart pointers",
        ],
        answer: 0,
        explanation: "The Stepanov–Musser–Lee STL gave C++ its standard containers and algorithms; regex, threads and `unique_ptr` all arrived in 2011.",
      },
      {
        q: "Which feature is a C++11 addition?",
        options: [
          "Multiple inheritance",
          "Virtual functions",
          "Templates",
          "A defined memory model with threads and atomics",
        ],
        answer: 3,
        explanation: "Concurrency support — memory model, `thread`, `mutex`, `atomic` — entered the standard only in 2011.",
      },
      {
        q: "The name “C++” and the first commercial Cfront release date are:",
        options: [
          "1985 and 1989",
          "1979 and 1981",
          "1983 and 1985 respectively",
          "1991 and 1998",
        ],
        answer: 2,
        explanation: "Mascitti's name dates from 1983; Cfront 1.0 was first released commercially in 1985.",
      },
    ],
  },

  // ---------------------------------------------------------------- 1.5
  {
    sectionId: "cpp-ch1-s5",
    readingTime: 4,
    intro: "Stroustrup closes the opening chapter with a list of rules of thumb, and their tone is characteristic: calm, practical, and deeply suspicious of cleverness for its own sake. The advice exists because most C++ failures are not language failures — they are failures of expectation and discipline, and a small set of habits prevents most of them.",
    objectives: [
      "Apply the core behavioral rules: don't panic, program rather than read, and distrust folklore",
      "Justify the library-first and simplify-first habits",
      "Recognize when advice must yield to measurement and understanding",
    ],
    concepts: [
      {
        term: "The behavioral rules",
        kind: "law",
        statement: "**Don't panic** — the language is learnable and everything becomes clear with use. **Take the time to learn the basics**: guessing at syntax and semantics accumulates incorrect mental models. **Program rather than merely read**, and **when confused, simplify**: a smaller program that works teaches more than a large one that does not.",
        detail: "Underneath all of these: don't believe in magic. Every construct does something specific; finding out what is always cheaper than debugging around it.",
      },
      {
        term: "The library-first rule",
        kind: "method",
        statement: "Before writing any data structure, sort routine, string operation or utility, **assume the standard library has it** — `string`, `vector`, `map`, the algorithms, `regex`. Library code is shorter to write, clearer to read, and usually faster than the hand-rolled version because millions of users have exercised it.",
        detail: "The rule has a corollary for this book's examples: the `Vector` we build in the tours exists to teach mechanism, not to replace `std::vector` in real code.",
      },
      {
        term: "Advice is no substitute for understanding",
        kind: "insight",
        statement: "Rules of thumb — including the book's own — are **generalizations, not laws of nature**. Any advice can be wrong in a specific context, so the final step of applying any rule is to understand *why* it holds and notice when your situation lacks the precondition. When in doubt, measure: performance folklore in particular is mostly folklore.",
        detail: "This is why the advice chapters give one-paragraph justifications rather than commandments: a rule you can derive is a rule you can correctly break.",
      },
      {
        term: "Shipping rule for notes to the reader",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Don't panic, learn the basics properly, program rather than read, and simplify when confused.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for notes to the reader",
        kind: "method",
        statement: "Take the objectives as review questions: apply the core behavioral rules: don't panic, program rather than read, and distrust folklore? Then justify the library-first and simplify-first habits? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "Applying the rules to a code review",
        problem: "Review this fragment against the chapter's advice and rewrite it: `int i; double vals[8]; for (int k = 0; k <= 8; ++k) vals[k] = k*i;`",
        steps: [
          { label: "Step 1: uninitialized variable", text: "`i` is declared without a value — the “avoid uninitialized variables” rule exists precisely for this: reading `i` yields indeterminate garbage, and the bug is invisible in the source." },
          { label: "Step 2: off-by-one", text: "The loop runs `k` from 0 to 8 inclusive — that is 9 iterations writing `vals[8]`, which does not exist in an 8-element array. The write silently corrupts adjacent memory." },
          { label: "Step 3: wrong tool", text: "A fixed C-style array with a hand-managed bound is the pattern the advice says to replace: use a `vector` and, better, an algorithm that owns the loop entirely." },
          { label: "Step 4: rewrite", text: "Initialize the multiplier, replace the array with `vector<double> vals(9)`, and let the loop write `vals[k] = k * factor;` — or compute the values with `std::iota`-style generation if the arithmetic allows." },
        ],
        result: "All three defects came from ignoring one rule each; the rewrite removes the classes of bugs, not just the instances.",
      },
      {
        title: "Reviewing notes to the reader code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the core behavioral rules: don't panic, program rather than read, and distrust folklore.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Don't panic, learn the basics properly, program rather than read, and simplify when confused." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `std::vector<int> v = {1, 2, 3}; std::sort(v.begin(), v.end());`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify the library-first and simplify-first habits. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Assume the standard library already has what you need before writing it yourself." },
        ],
        result: "The review ends with findings tied to reasons: Don't panic, learn the basics properly, program rather than read, and simplify when confused. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Don't panic, learn the basics properly, program rather than read, and simplify when confused.",
      "Assume the standard library already has what you need before writing it yourself.",
      "Advice is a generalization: understand why a rule holds, and measure when performance is the question.",
    ],
    quiz: [
      {
        q: "The “don't believe in magic” rule, in practice, means:",
        options: [
          "Avoid language features you find mysterious, permanently",
          "Investigate what a construct actually does rather than coding around a vague fear of it",
          "Trust only what the standard library documents",
          "Never read the compiler's error messages",
        ],
        answer: 1,
        explanation: "Every construct has specific semantics; discovering them is always cheaper than building habits on guesses.",
      },
      {
        q: "Before implementing a hash table for string keys, the advice says to first check:",
        options: [
          "Whether `std::map` or `std::unordered_map` already solves the problem",
          "Whether the CPU supports hashing instructions",
          "Whether the project can afford a garbage collector",
          "Whether C-style arrays would be faster",
        ],
        answer: 0,
        explanation: "Library-first: the standard containers cover the overwhelming majority of real needs, better tested and often faster.",
      },
      {
        q: "A rule of thumb such as “always pass by const reference” is best treated as:",
        options: [
          "An absolute requirement of the language",
          "Obsolete advice from C++98",
          "A performance optimization that never has exceptions",
          "A generalization to understand and possibly override with a reason or a measurement",
        ],
        answer: 3,
        explanation: "Stroustrup explicitly notes that advice is no substitute for understanding — the preconditions of a rule can fail in context.",
      },
    ],
  },

  // ---------------------------------------------------------------- 1.6
  {
    sectionId: "cpp-ch1-s6",
    readingTime: 4,
    intro: "A tour chapter ends by pointing outward: where the authoritative answers live. For C++ the answer has two layers — the ISO standard, which defines the language and library precisely, and a small canon of books that teach it at different depths. Knowing which source answers which kind of question is itself a programming skill.",
    objectives: [
      "State what the ISO standard specifies and its role as court of last appeal",
      "Match the companion books (PPP, D&E, Accelerated C++) to their audiences",
      "Choose the right source for a given kind of C++ question",
    ],
    concepts: [
      {
        term: "The ISO C++ standard",
        kind: "definition",
        statement: "**ISO/IEC 14882** defines C++ completely: the lexical and grammatical rules, the semantics of every construct, and the entire standard library. It is written for compiler writers and standards experts, not as a tutorial, and it is the **court of last appeal**: when compilers disagree or a guarantee seems unclear, the standard's wording decides.",
        detail: "The fourth edition of this book describes the 2011 edition of the standard (C++11). The standard is revised by the ISO committee on a rolling basis — C++98, C++03 and C++11 are its editions to date, with work continuing.",
      },
      {
        term: "The companion canon",
        kind: "definition",
        statement: "**Programming: Principles and Practice Using C++** (Stroustrup) is the first-programming-course text — use it if you are new to programming itself. **The Design and Evolution of C++** records *why* each feature exists: the constraints, rejected alternatives and experiments. **Accelerated C++** (Koenig & Moo) teaches the language through the library from page one. The **Annotated C++ Reference Manual** (Ellis & Stroustrup, 1990) is the historical ancestor of the standard, and K&R remains the reference for the C subset.",
        detail: "This book — The C++ Programming Language — sits in the middle: a tour plus a reference for programmers who already know how to program.",
      },
      {
        term: "Using references deliberately",
        kind: "method",
        statement: "Work the ladder: the **tours** for a working answer, the **detail chapters** for mechanism and rationale, and the **standard** only when a precise guarantee is genuinely in question. This matches how the book itself cites: rules are stated in prose and backed by pointers to chapters, not to standard clauses, until precision is unavoidable.",
        detail: "One habit to build early: when your compiler and your expectation disagree, write the smallest program that isolates the difference — that program is the question you take to the reference.",
      },
      {
        term: "References: the working contract",
        kind: "definition",
        statement: "**References.** Where to go next in the standard and the literature. You can claim this section when you can state what the ISO standard specifies and its role as court of last appeal — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 1 (Notes to the Reader); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "References: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, match the companion books (PPP, D&E, Accelerated C++) to their audiences. Then, choose the right source for a given kind of C++ question. Finally, test the outcome against the section promise: ISO/IEC 14882 is the complete definition of language and library — the reference of last appeal, not a tutorial.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Choosing the source for four questions",
        problem: "For each question, pick the right source and say why: (a) “I have never programmed — where do I start?” (b) “Why does C++ have both classes and templates?” (c) “Is it guaranteed that `v.push_back` keeps earlier elements' addresses valid?” (d) “What's the cleanest way to read words and count them?”",
        steps: [
          { label: "Question (a)", text: "Never programmed → **Programming: Principles and Practice Using C++** — the textbook deliberately assuming no prior experience, unlike this book." },
          { label: "Question (b)", text: "A “why” question → **The Design and Evolution of C++** — the recorded rationale and the rejected alternatives; no syntax book answers design-intent questions well." },
          { label: "Question (c)", text: "A guarantee question → the **ISO standard** (and this book's Chapter 31's precise statement of it): only the standard resolves disputes about what may be relied on across implementations." },
          { label: "Question (d)", text: "A “how do I do this well” question → the tours here (Chapter 4's `map` example), because idiom is what the tours teach." },
        ],
        result: "Question type selects the source: tutorials for beginners, design books for why, standards for guarantees, tours for idiom.",
      },
      {
        title: "Working through references",
        problem: "Where to go next in the standard and the literature. Your task: state what the ISO standard specifies and its role as court of last appeal.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state what the ISO standard specifies and its role as court of last appeal. Write down the guarantee you will rely on — for this chapter it is: ISO/IEC 14882 is the complete definition of language and library — the reference of last appeal, not a tutorial." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::vector<int> v = {1, 2, 3}; std::sort(v.begin(), v.end());` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — match the companion books (PPP, D&E, Accelerated C++) to their audiences — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The canon divides cleanly: PPP for first programmers, D&E for rationale, Accelerated C++ for library-first teaching. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: ISO/IEC 14882 is the complete definition of language and library — the reference of last appeal, not a tutorial. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "ISO/IEC 14882 is the complete definition of language and library — the reference of last appeal, not a tutorial.",
      "The canon divides cleanly: PPP for first programmers, D&E for rationale, Accelerated C++ for library-first teaching.",
      "Route questions by type: how → tours, why → D&E, is-it-guaranteed → the standard.",
    ],
    quiz: [
      {
        q: "Two compilers accept a program but give it different behavior. What is the authoritative source?",
        options: [
          "The Annotated Reference Manual of 1990",
          "This book's tours",
          "The ISO C++ standard, ISO/IEC 14882",
          "The most recent compiler documentation",
        ],
        answer: 2,
        explanation: "The standard defines the semantics; the ARM is the 1990 historical ancestor, and books describe rather than define.",
      },
      {
        q: "Which book should a reader with no programming experience at all start from?",
        options: [
          "The C++ Programming Language",
          "Programming: Principles and Practice Using C++",
          "The Design and Evolution of C++",
          "K&R's The C Programming Language",
        ],
        answer: 1,
        explanation: "PPP is Stroustrup's textbook for a first programming course; TC++PL assumes you can already program.",
      },
      {
        q: "“Why does C++ not have garbage collection as part of the core language?” is best answered by:",
        options: [
          "The Design and Evolution of C++",
          "The tours of the language",
          "The ISO standard's library clauses",
          "Accelerated C++",
        ],
        answer: 0,
        explanation: "D&E is precisely the record of design constraints and rationale — the why behind each decision.",
      },
    ],
  },
]
