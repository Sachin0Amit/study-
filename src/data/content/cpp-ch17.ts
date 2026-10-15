import type { SectionContent } from "../library"

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 17: Construction, Cleanup, Copy, and Move (Sections 17.1 – 17.7)
// ============================================================================

export const cppCh17Content: SectionContent[] = [
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: "cpp-ch17-s1",
    readingTime: 5,
    intro: "Every object has a life: storage is obtained, a constructor turns raw storage into a valid object, the object is used, a destructor runs, and the storage goes away. Because C++ destroys objects at *known* points, acquisition and release can be tied to construction and destruction — that pairing is the chapter's through-line and C++'s signature resource-management technique.",
    objectives: [
      "Define an object's lifetime precisely and name the events at its two ends",
      "Explain RAII: why constructors acquire and destructors release resources",
      "Predict destruction order for locals, members and free-store objects",
    ],
    concepts: [
      {
        term: "Object lifetime",
        kind: "definition",
        statement: "An object's **lifetime** begins when its constructor has finished running and ends when its destructor starts. Before construction it is raw storage; after destruction, memory that may be reused. Between those two moments — and only then — member functions may be called on it.",
        detail: "Storage lifetime and object lifetime are different clocks: the stack frame for a local may exist before its objects are constructed, but you may not use the object until construction completes.",
      },
      {
        term: "RAII",
        kind: "method",
        statement: "**Resource Acquisition Is Initialization**: acquire every resource in a constructor, release it in the destructor. Because destructors run deterministically — at the closing brace, at `delete`, during exception unwinding — resources are freed exactly when their object dies, on every exit path.",
        detail: "The name is a joke that stuck; the technique is really 'acquisition is construction, release is destruction'. `lock_guard` acquires a mutex at construction and releases it however the scope exits — the exception-safety of chapter 13 is built on it.",
      },
      {
        term: "Deterministic destruction",
        kind: "law",
        statement: "Local objects are destroyed in **reverse order of construction** when control leaves their block — normally or by exception. Members are destroyed after the destructor body, in reverse declaration order. Static objects die at program termination; free-store objects die at `delete`.",
        detail: "Reverse order is deliberate: an object constructed later may refer to earlier ones, so tearing down in reverse guarantees that anything still alive was built before anything it might use.",
      },
      {
        term: "The class owns its housekeeping",
        kind: "insight",
        statement: "Once `Vector`'s constructor does `new double[s]` and its destructor does `delete[] elem`, *every* user of `Vector` gets correct cleanup for free. The discipline is written once, inside the class, instead of being remembered at each of a thousand call sites.",
        detail: "This is the precise sense in which C++ does not need a garbage collector for most code: the pairing of construction and destruction *is* the memory (and file, lock, socket) discipline.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** The life of an object. You can claim this section when you can define an object's lifetime precisely and name the events at its two ends — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 17 (Construction, Cleanup, Copy, and Move); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "Figure — An object's lifetime as a timeline: the constructor acquires resources and checks the invariant, the object is usable only between the end of construction and the start of destruction, and the destructor releases what was acquired — reverse order for multiple objects, exceptions included.",
        svg: `<svg viewBox="0 0 760 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Object lifetime timeline: storage, constructor, usable lifetime, destructor">
<defs><marker id="cpp17a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="380" y="24" text-anchor="middle" font-size="16" fill="currentColor">The life of an object — you write the pair once; the compiler calls it always</text>
<rect x="45" y="50" width="115" height="46" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
<text x="102" y="70" text-anchor="middle" font-size="13" fill="currentColor">storage</text>
<text x="102" y="88" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">stack frame / free store</text>
<rect x="185" y="50" width="130" height="46" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/>
<text x="250" y="70" text-anchor="middle" font-size="13" fill="currentColor">constructor</text>
<text x="250" y="88" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">acquire, check invariant</text>
<rect x="345" y="50" width="200" height="46" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/>
<text x="445" y="70" text-anchor="middle" font-size="13" fill="currentColor">the object lives</text>
<text x="445" y="88" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">member calls, copies, moves</text>
<rect x="570" y="50" width="120" height="46" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/>
<text x="630" y="70" text-anchor="middle" font-size="13" fill="currentColor">destructor</text>
<text x="630" y="88" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">release resources</text>
<line x1="45" y1="130" x2="715" y2="130" stroke="currentColor" stroke-width="2" marker-end="url(#cpp17a)"/>
<text x="733" y="135" font-size="12" fill="currentColor">time</text>
<line x1="322" y1="122" x2="322" y2="138" stroke="currentColor" stroke-width="2"/>
<line x1="575" y1="122" x2="575" y2="138" stroke="currentColor" stroke-width="2"/>
<rect x="322" y="124" width="253" height="12" fill="currentColor" fill-opacity="0.25"/>
<text x="447" y="158" text-anchor="middle" font-size="12.5" fill="currentColor">lifetime — the only window in which member functions may be called</text>
<text x="253" y="158" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">begins when the ctor finishes</text>
<text x="640" y="158" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.8">ends when the dtor starts</text>
<rect x="60" y="175" width="640" height="30" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
<text x="380" y="195" text-anchor="middle" font-size="14" fill="currentColor" font-family="monospace">void f() { Vector v(3); { Vector w(2); } }</text>
<text x="380" y="232" text-anchor="middle" font-size="13" fill="currentColor">built: v then w — destroyed: w then v (reverse order) — an exception in f() runs both destructors anyway</text>
</svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Two vectors, two exit paths",
        problem: "Trace construction and destruction for `void f() { Vector v(3); Vector w(2); g(); }` — once when `g()` returns normally, once when `g()` throws.",
        steps: [
          { label: "Step 1: construction, in order", text: "`v` is built (a `new double[3]` — 24 bytes — plus its pointer and size on the stack), then `w` (16 bytes): 2 constructor calls, 2 allocations." },
          { label: "Step 2: normal exit", text: "At `}` the locals die in reverse order: `~w()` frees 16 bytes, then `~v()` frees 24 bytes — 2 destructor calls, 0 leaks." },
          { label: "Step 3: throwing exit", text: "`g()` throws; as the stack unwinds through `f`, the same destructors run in the same reverse order — the heap is still fully released." },
          { label: "Step 4: who paid?", text: "Neither path required a line of cleanup code in `f`: the class carries the pairing, the language enforces the timing." },
        ],
        result: "2 constructors + 2 destructors on every exit path — deterministic cleanup is a property of the *language*, not of careful callers.",
      },
      {
        title: "Working through introduction",
        problem: "The life of an object. Your task: define an object's lifetime precisely and name the events at its two ends.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define an object's lifetime precisely and name the events at its two ends. Write down the guarantee you will rely on — for this chapter it is: Lifetime begins when construction completes and ends when destruction starts; member calls are legal only in between." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget w; Widget v = std::move(w);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain RAII: why constructors acquire and destructors release resources — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: RAII ties acquisition to construction and release to destruction, so cleanup survives exceptions, early returns and scope exits without caller discipline. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Lifetime begins when construction completes and ends when destruction starts; member calls are legal only in between. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Lifetime begins when construction completes and ends when destruction starts; member calls are legal only in between.",
      "RAII ties acquisition to construction and release to destruction, so cleanup survives exceptions, early returns and scope exits without caller discipline.",
      "Destruction is reverse of construction everywhere — locals, members, array elements — because dependencies point backward in time.",
    ],
    quiz: [
      {
        q: "An object's lifetime begins…",
        options: [
          "when its constructor finishes running",
          "when its storage is allocated",
          "when it is first used",
          "when it is assigned from another object",
        ],
        answer: 0,
        explanation: "Before the constructor completes there is only raw storage; the object and its invariant do not exist yet.",
      },
      {
        q: "In RAII, resources are released…",
        options: [
          "by the last user of the object",
          "in the destructor, on every exit path from the scope",
          "only when the program terminates",
          "by a background garbage collector",
        ],
        answer: 1,
        explanation: "That is the whole trick: the destructor runs at `}`, at `delete`, and during unwinding — all without caller code.",
      },
      {
        q: "For `void f() { A a; B b; C c; }` (constructed in that order), the destruction order is:",
        options: ["a, b, c", "b, c, a", "unspecified", "c, b, a"],
        answer: 3,
        explanation: "Locals die in exactly reverse construction order — `c` was built last and may depend on `a`, so it goes first.",
      },
      {
        q: "If `g()` throws inside `void f() { Vector v(3); g(); }`, then:",
        options: [
          "`~Vector()` never runs — the memory leaks",
          "`~Vector()` runs only if `g` catches the exception",
          "`~Vector()` runs during unwinding, before `f`'s caller sees the exception",
          "the program calls `std::terminate()` immediately",
        ],
        answer: 2,
        explanation: "Stack unwinding destroys fully constructed locals on the way out — that guarantee is what RAII is built on.",
      },
    ],
  },

  // ---------------------------------------------------------------- 17.2
  {
    sectionId: "cpp-ch17-s2",
    readingTime: 8,
    intro: "Constructors build, destructors tear down. A destructor is named `~Vector`, takes no parameters, returns nothing, cannot be overloaded, and is invoked by the implementation — at scope exit, at `delete`, during unwinding — never needing to be called by name. The rules in this section are short, and they carry most of C++'s reputation for resource safety.",
    objectives: [
      "Write constructor/destructor pairs that manage a free-store resource",
      "Predict member and local destruction order from any declaration",
      "State what destructors must never do — and why",
    ],
    concepts: [
      {
        term: "Destructor",
        kind: "definition",
        statement: "A destructor has the form **`~Vector()`** — no parameters, no return type, one per class. It runs implicitly when the object dies: scope exit for locals, `delete` for free-store objects, program termination for statics. You name it explicitly only after placement `new` (rare, specialized).",
        detail: "A destructor may not be overloaded: there is exactly one way to destroy an object, so there is exactly one function.",
      },
      {
        term: "Cleanup",
        kind: "method",
        statement: "A destructor's body releases what the class acquired — `delete[] elem;` frees the element array, a file class closes its file, a lock releases its mutex. After the body, the *members'* destructors run automatically, in reverse declaration order.",
        detail: "If a constructor throws midway, the destructor never runs for that object — but members already constructed are destroyed. A half-built object's partially acquired resources must be handled inside the constructor (or by members that clean up after themselves).",
      },
      {
        term: "Reverse order everywhere",
        kind: "law",
        statement: "**Members are destroyed in the reverse of their declaration order**, and only after the destructor body. Locals in a block die in reverse construction order; array elements are destroyed last-to-first; temporaries at the end of their full expression. Construction and destruction are mirror images.",
        detail: "The mirror is what makes composition safe: when `~Vector` runs, every member is still intact during the body, so the body can use them to release the resource.",
      },
      {
        term: "Destructors must not throw",
        kind: "law",
        statement: "Because destructors run during exception unwinding, an exception escaping one would meet the in-flight exception — and the program dies via **`std::terminate()`**. Destructors absorb or report problems; they never propagate them.",
        detail: "This is why library destructors are written to be exception-free, and why chapter 13's error-handling advice says 'throw constructors, never destructors'.",
      },
      {
        term: "delete and delete[] must match",
        kind: "insight",
        statement: "The destructor uses `delete[] elem` because the constructor used `new double[s]`. `delete p` on an array allocation — or `delete[]` on a single object — is **undefined behavior**: only the array form runs the per-element destructors the array form of construction performed.",
        detail: "The mismatch is a silent, classic bug: it often *appears* to work for types with trivial destructors and corrupts the allocator's bookkeeping for everything else.",
      },
    ],
    examples: [
      {
        title: "The Vector pair, traced byte by byte",
        problem: "Walk `Vector v(3);` from construction to destruction: what is allocated, when, and what does each phase free?",
        steps: [
          { label: "Step 1: the pair", text: "`class Vector { public: Vector(int s) : elem{new double[s]}, sz{s} { } ~Vector() { delete[] elem; } /* … */ private: double* elem; int sz; };` — constructor and destructor own one allocation together." },
          { label: "Step 2: construction", text: "`new double[3]` claims 24 bytes on the free store; `elem` points at it, `sz == 3`. The invariant 'elem points to sz doubles' now holds." },
          { label: "Step 3: use", text: "`v[1] = 2.2;` writes through to the array — raw storage, no further allocation, invariant untouched." },
          { label: "Step 4: destruction", text: "At `}`, the body runs `delete[] elem` — 24 bytes returned — then members (a pointer and an int, trivially destructed) die, then the object's own stack storage is reclaimed." },
          { label: "Step 5: the mismatch check", text: "Had the body said `delete elem;`, the bytes would often still be freed, but the behavior is undefined — the brackets are part of the class' contract with its own allocation style." },
        ],
        result: "One allocation matched by exactly one deallocation, paired by the language rather than by programmer discipline at call sites.",
      },
      {
        title: "Working through constructors and destructors",
        problem: "Building and tearing down objects. Your task: write constructor/destructor pairs that manage a free-store resource.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: write constructor/destructor pairs that manage a free-store resource. Write down the guarantee you will rely on — for this chapter it is: A destructor is `~T()`: no parameters, no return, not overloadable — and called by the implementation, not by you." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget w; Widget v = std::move(w);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict member and local destruction order from any declaration — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Members are destroyed after the destructor body, in reverse declaration order; locals in reverse construction order. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A destructor is `~T()`: no parameters, no return, not overloadable — and called by the implementation, not by you. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A destructor is `~T()`: no parameters, no return, not overloadable — and called by the implementation, not by you.",
      "Members are destroyed after the destructor body, in reverse declaration order; locals in reverse construction order.",
      "Destructors must not throw (`std::terminate()` during unwinding), and `delete`/`delete[]` must match how the memory was allocated.",
    ],
    quiz: [
      {
        q: "Which of these is true of a destructor?",
        options: [
          "it may be overloaded with different parameter lists",
          "it returns the object's final state",
          "it must be called explicitly to free the object",
          "it takes no parameters, returns nothing, and cannot be overloaded",
        ],
        answer: 3,
        explanation: "One way to die, one function: `~T()` — invoked by scope exit, `delete`, or unwinding, never by ordinary code.",
      },
      {
        q: "Members of a class are destroyed…",
        options: [
          "before the destructor body runs",
          "in declaration order, after the body",
          "in reverse declaration order, after the body",
          "in the order the member initializer list happened to list them",
        ],
        answer: 2,
        explanation: "The body runs first (so it can still use the members to release resources), then members die, last-declared first.",
      },
      {
        q: "An exception that escapes a destructor during stack unwinding causes:",
        options: ["`std::terminate()` — program death", "the exception to be swallowed", "the destructor to restart", "the in-flight exception to be replaced"],
        answer: 0,
        explanation: "Two exceptions in flight at once is unsupportable; the standard terminates the program immediately.",
      },
      {
        q: "A constructor throws after acquiring a resource but before finishing. The object's destructor:",
        options: [
          "runs immediately and releases everything",
          "never runs — the class must release the partial resource itself (already-constructed members do clean up)",
          "runs at the next scope exit",
          "runs only if the exception is caught",
        ],
        answer: 1,
        explanation: "No completed construction, no object, no destructor call — a key reason to hand partial resources to member objects rather than raw locals in the constructor.",
      },
      // PYQ-pattern — construction versus destruction order (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nstruct T {\n  char id;\n  T(char c) : id(c) { std::cout << '+' << id; }\n  ~T() { std::cout << '-' << id; }\n};\nint main() {\n  T a('a');\n  T b('b');\n}\n```",
        options: ["`+a+b-a-b`", "`+a+b-b-a`", "`+a-b+a-b`", "`+b+a-b-a`"],
        answer: 1,
        explanation: "Step 1: The code given constructs two automatic objects whose constructor and destructor each print a marker. Step 2: The governing rules are that automatic objects are constructed in declaration order and destroyed in exactly the reverse order when the scope ends. Step 3: Tracing the scope, construction prints `+a` then `+b`, the end of `main` destroys `b` first printing `-b`, then destroys `a` printing `-a`, for a total of `+a+b-b-a`. Step 4: The distractors fail because destruction never repeats construction order, objects are never interleaved, and construction always follows declaration order. Step 5: Therefore the program prints `+a+b-b-a`."
      }
    ],
  },

  // ---------------------------------------------------------------- 17.3
  {
    sectionId: "cpp-ch17-s3",
    readingTime: 7,
    intro: "C++ has too many initialization notations, each with a history and rules of its own. The modern discipline: prefer braces. `Vector v{3};` directly initializes; `Vector v = 3;` copy-initializes through an implicit conversion you may not want; `Vector v;` default-initializes — which for members like `int` means *indeterminate*, not zero. This section straightens out the forms, the default constructor, and the member initializer list.",
    objectives: [
      "Distinguish default, direct, list and copy initialization — and their failure modes",
      "Explain when the default constructor is generated and why containers demand it",
      "Use member initializer lists and in-class initializers correctly",
    ],
    concepts: [
      {
        term: "Initialization forms",
        kind: "notation",
        statement: "**`X a;`** default-initializes; **`X a{v};`** (direct list-init) and **`X a(v);`** (direct-init) construct from `v`; **`X a = v;`** and **`X a = {v};`** copy-initialize — `v` is converted to `X` and the object is constructed from that. Inside constructors, the member initializer list `: elem{new double[s]}, sz{s}` initializes members *before* the body runs.",
        detail: "Braces are the modern default: `Vector v{3};` is immune to the 'most vexing parse' (`Vector v();` declares a function returning a `Vector`!) and rejects narrowing — `int x{3.14};` is an error while `int y = 3.14;` silently truncates.",
      },
      {
        term: "Default constructor",
        kind: "definition",
        statement: "A constructor callable with no arguments — either `X()` or one whose parameters all have defaults. The compiler generates one **only if the class declares no constructor at all**. It is what `Vector vs[1000]` and container growth need: elements must be constructible from nothing.",
        detail: "For generated-not-user-provided cases, `X x{};` (value initialization) also zeroes members like `int` that have no initializer, whereas `X x;` (default initialization) leaves them indeterminate — a classic silent-bug distinction.",
      },
      {
        term: "Member initializer list",
        kind: "method",
        statement: "Sits between the parameter list and the body: `Vector::Vector(int s) : elem{new double[s]}, sz{s} { /* body */ }`. It is *mandatory* for members of class type without a default constructor, for `const` members, for references and for bases — by the time the body runs, those members are already constructed.",
        detail: "It is also a performance tool: initialize a `string` member once instead of default-constructing it and assigning in the body — two steps become one.",
      },
      {
        term: "In-class member initializers",
        kind: "definition",
        statement: "C++11 lets the default live at the member declaration — `int sz = 0; std::string name{\"\"};` — and every constructor that does not mention the member uses it. Constructors that do list the member override it.",
        detail: "This gives a class one obvious place for its representation's defaults, so the many constructors need not repeat them.",
      },
      {
        term: "Initialization is not assignment",
        kind: "insight",
        statement: "`X a = v;`, despite the `=`, is *initialization* — convert and construct. Assignment `a = v;` overwrites an existing, fully constructed object and can never create one. The distinction decides which function runs — constructor or `operator=` — and whether a new object exists at all.",
        detail: "For `Vector`, the two paths differ enormously: constructing copies an array; assigning must also dispose of the old one. The syntax looks similar; the machinery is not.",
      },
    ],
    examples: [
      {
        title: "Three ways to say the same thing — until they differ",
        problem: "Given `class Vector { public: Vector(int s); /* … */ };` with no `explicit`, which forms compile and what does each do? Then make the constructor `explicit` and re-answer.",
        steps: [
          { label: "Step 1: direct list-init", text: "`Vector v1{3};` — the `Vector(int)` constructor runs directly: one vector of 3 elements. The preferred form." },
          { label: "Step 2: copy-init", text: "`Vector v2 = 3;` — legal without `explicit`: the `int` converts to `Vector` via the constructor (a temporary, typically elided). Reads like 'three vectors'; means 'a 3-element vector'. A famous surprise." },
          { label: "Step 3: the fix", text: "Declaring the constructor `explicit` removes the conversion path: `Vector v2 = 3;` no longer compiles, while `Vector v1{3};` is unaffected. Single-argument constructors should be `explicit` unless implicit conversion is the design (like `complex(double)`)." },
          { label: "Step 4: default-init", text: "`Vector v4;` — an error: no default constructor exists. Add one (`Vector() : elem{nullptr}, sz{0} { }`) or the class cannot be used in arrays and containers." },
        ],
        result: "One constructor, three syntax families: direct construction, conversion-then-construction, default construction — `explicit` and braces keep each use's intent visible.",
      },
      {
        title: "Working through class object initialization",
        problem: "Initialization forms, lists and members. Your task: distinguish default, direct, list and copy initialization — and their failure modes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish default, direct, list and copy initialization — and their failure modes. Write down the guarantee you will rely on — for this chapter it is: Prefer `{}` initialization: no narrowing, no vexing parse, unambiguous intent; `X a = v;` means conversion-plus-construction, not assignment." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget w; Widget v = std::move(w);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain when the default constructor is generated and why containers demand it — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: A default constructor is generated only when no constructor is declared — and arrays and containers cannot use the class without one. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Prefer `{}` initialization: no narrowing, no vexing parse, unambiguous intent; `X a = v;` means conversion-plus-construction, not assignment. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Prefer `{}` initialization: no narrowing, no vexing parse, unambiguous intent; `X a = v;` means conversion-plus-construction, not assignment.",
      "A default constructor is generated only when no constructor is declared — and arrays and containers cannot use the class without one.",
      "Initialize members in the initializer list (mandatory for references, `const` members and non-default-constructible members); in-class initializers give one home to defaults.",
    ],
    quiz: [
      {
        q: "Which statement value-initializes an `int` member (to zero) rather than leaving it indeterminate?",
        options: ["`X x;`", "`X x();`", "`X x = X;`", "`X x{};`"],
        answer: 3,
        explanation: "`{}` triggers value initialization, which zeroes uninitialized members; `X x;` default-initializes (indeterminate); `X x();` declares a function.",
      },
      {
        q: "The compiler generates a default constructor for class `X` when:",
        options: [
          "X has no user-declared constructor of any kind",
          "X declares a destructor",
          "X has only `explicit` constructors",
          "always — it cannot be suppressed",
        ],
        answer: 0,
        explanation: "Any declared constructor takes over initialization policy, so generation stops (section 17.6 has the full rules).",
      },
      {
        q: "`int x{3.14};` at block scope:",
        options: [
          "sets x to 3",
          "is a compile-time error: narrowing in list-initialization",
          "is a run-time error",
          "is accepted but warns only",
        ],
        answer: 1,
        explanation: "Brace-initialization refuses the silent truncation that `int x = 3.14;` performs — a major reason to prefer braces.",
      },
      {
        q: "With a non-`explicit` `Vector(int)`, the statement `Vector v = 3;`:",
        options: [
          "is a compile error — int is not a Vector",
          "copy-assigns 3 to a default-constructed v",
          "constructs a 3-element Vector via an implicit conversion",
          "is undefined behavior",
        ],
        answer: 2,
        explanation: "Copy-initialization converts the int through the single-argument constructor — exactly the surprise `explicit` exists to prevent.",
      },
    ],
  },

  // ---------------------------------------------------------------- 17.4
  {
    sectionId: "cpp-ch17-s4",
    readingTime: 7,
    intro: "Two order rules, one delegation mechanism and the base-class hook complete the initialization story. The order rule that bites: members initialize in *declaration* order, not the order written in the initializer list — and initializing one member from another is a classic bug. Delegating constructors let several constructors route through the one that does the real work; bases are initialized before members.",
    objectives: [
      "Apply and defend the declaration-order rule for member initialization",
      "Simplify classes with delegating constructors",
      "Initialize base classes and explain the construction/destruction symmetry",
    ],
    concepts: [
      {
        term: "Declaration order rules",
        kind: "law",
        statement: "Members are initialized in the order they are **declared in the class** and destroyed in the reverse of that order — regardless of the order in the member initializer list. A list written in a different order is legal but misleading; compilers warn about it.",
        detail: "The rule exists because destruction must be the exact reverse of construction, and only declaration order is visible in both places — the initializer list is per-constructor, but the class layout is shared by all of them.",
      },
      {
        term: "Delegating constructors",
        kind: "definition",
        statement: "A constructor whose initializer list invokes another constructor of the same class: `X::X() : X{0, 0} { /* tail */ }`. The target constructor completes — invariant established — before the delegating constructor's body runs; after delegating, no further member initialization is allowed in that list.",
        detail: "Use it to route the many ways an object can begin through the one place that checks the invariant, instead of duplicating validation in every constructor.",
      },
      {
        term: "Base class initialization",
        kind: "method",
        statement: "In a derived class, **bases are initialized before members**, in the order of the base list: `Derived::Derived(int a, int b) : Base{a}, m{b} { }`. Destruction is the mirror image: members first (reverse), then bases (reverse).",
        detail: "Chapter 20 adds the polymorphic layers; the order rules here survive them unchanged.",
      },
      {
        term: "const and reference members must be listed",
        kind: "law",
        statement: "A member that is a **reference**, **`const`**, or of a class **without a default constructor** must appear in *every* constructor's initializer list — assignment in the body is impossible: references cannot be rebound, `const` cannot be assigned, and the class member is already constructed.",
        detail: "A consequence that returns in 17.6: such a class gets its copy assignment *deleted*, because the generated one cannot exist.",
      },
      {
        term: "Member and Base Initialization: the working contract",
        kind: "definition",
        statement: "**Member and Base Initialization.** Order, delegation and base classes. You can claim this section when you can apply and defend the declaration-order rule for member initialization — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 17 (Construction, Cleanup, Copy, and Move); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "The initializer-list order bug, traced",
        problem: "What value does `struct T { int x; int y; T(int v) : y{v}, x{y + 1} { } };` put in `x` when constructed as `T t{5};` — and why is it broken even when it 'works'?",
        steps: [
          { label: "Step 1: the declared order wins", text: "The members are declared `x` then `y`, so initialization runs `x{y + 1}` first and `y{v}` second — the list's order (`y` then `x`) is silently ignored." },
          { label: "Step 2: the read", text: "`x{y + 1}` reads `y` *before* `y` is initialized — an indeterminate value. The result is undefined behavior, not merely a wrong number." },
          { label: "Step 3: why it hides", text: "In debug builds `y` may happen to be 0, giving `x == 1`; an optimizer may assume the read is legitimate and produce anything — the bug appears only under exactly the wrong conditions." },
          { label: "Step 4: the fix", text: "Never initialize a member from another member in the same list. Either reorder declarations (`int y; int x;`) or initialize from the parameter: `T(int v) : y{v}, x{v + 1} { }` — and always write the list in declaration order so the code reads true." },
        ],
        result: "With the fix, `T t{5}` gives `y == 5`, `x == 6` deterministically; the rule to remember is *declaration order, not list order*.",
      },
      {
        title: "Working through member and base initialization",
        problem: "Order, delegation and base classes. Your task: apply and defend the declaration-order rule for member initialization.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: apply and defend the declaration-order rule for member initialization. Write down the guarantee you will rely on — for this chapter it is: Members initialize in declaration order no matter what the initializer list says — and are destroyed in exactly the reverse." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget w; Widget v = std::move(w);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — simplify classes with delegating constructors — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Delegating constructors centralize invariant checking: the target completes before the delegating body runs. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Members initialize in declaration order no matter what the initializer list says — and are destroyed in exactly the reverse. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Members initialize in declaration order no matter what the initializer list says — and are destroyed in exactly the reverse.",
      "Delegating constructors centralize invariant checking: the target completes before the delegating body runs.",
      "Bases are initialized before members and destroyed after them; reference, `const` and non-default-constructible members must appear in every constructor's list.",
    ],
    quiz: [
      {
        q: "For `struct S { int a; int b; S(int v) : b{v}, a{b + 1} { } };`, member `a` is initialized:",
        options: [
          "first, from the not-yet-initialized `b` — undefined behavior",
          "second, after `b` gets `v` — so `a` is `v + 1`",
          "in the order the optimizer prefers",
          "the program refuses to compile",
        ],
        answer: 0,
        explanation: "Declaration order (`a` before `b`) wins, so `b + 1` reads an indeterminate `b`. The code compiles — and is wrong.",
      },
      {
        q: "In a delegating constructor `X::X(const string& s) : X{s.size()} { }`, the delegated-to constructor:",
        options: [
          "runs after the delegating body",
          "completes fully before the delegating body runs",
          "runs concurrently with the delegating body",
          "is optional and skipped if trivial",
        ],
        answer: 1,
        explanation: "Delegation is construction-of-the-object by the target first; the delegating body is a tail that can assume the invariant holds.",
      },
      {
        q: "Which member forces you to write an initializer-list entry in *every* constructor?",
        options: [
          "an `int` member",
          "a `double` member",
          "a reference member (or a `const` member)",
          "a member with a default constructor",
        ],
        answer: 2,
        explanation: "References cannot be rebound and `const` cannot be assigned — by body time it is too late, so the list is the only chance.",
      },
    ],
  },

  // ---------------------------------------------------------------- 17.5
  {
    sectionId: "cpp-ch17-s5",
    readingTime: 9,
    intro: "Copying duplicates an object's value — for a `Vector` that means a new element array and every element copied. Moving recognizes when the source is about to die — a temporary, or a value the caller marked with `std::move` — and *transfers* the resources instead: pointer, size, done. The whole apparatus of rvalue references and move operations exists so that 'expensive to copy, cheap to move' types behave like `int` in the common idioms.",
    objectives: [
      "Write correct copy constructor and copy assignment for a resource-owning class",
      "Write move operations that transfer resources and leave a valid, empty source",
      "Explain `noexcept` moves and why `vector` growth demands them",
    ],
    concepts: [
      {
        term: "Copy operations",
        kind: "definition",
        statement: "The **copy constructor** `Vector(const Vector&)` creates a new object as a duplicate of an existing one; **copy assignment** `Vector& operator=(const Vector&)` overwrites an existing object. The generated meaning is memberwise — but memberwise copy of a `Vector` would copy the pointer and give two owners of one array, so a resource-owning class must define its own copy (or forbid it).",
        detail: "A deep copy: allocate a new element array, then copy each element. For an `n`-element `Vector` that is one allocation plus $O(n)$ element copies.",
      },
      {
        term: "Move operations",
        kind: "definition",
        statement: "The **move constructor** `Vector(Vector&&)` and **move assignment** `Vector& operator=(Vector&&)` steal the source's resources instead of duplicating them: `elem{a.elem}, sz{a.sz}`, then `a.elem = nullptr; a.sz = 0;`. The source survives as a valid, empty object.",
        detail: "A move is a shallow transfer of handles — a few pointer assignments, $O(1)$ — safe because the source is about to die (or has been explicitly marked disposable) and nobody will look at its old contents again.",
      },
      {
        term: "Rvalue references and std::move",
        kind: "definition",
        statement: "An **rvalue reference** `T&&` binds to rvalues: temporaries (`Vector{3}`) and values explicitly cast. **`std::move(x)`** is that cast and nothing more — it moves nothing itself; it makes the move overloads viable for `x` at a call site. Without it, `Vector b = a;` copies, because `a` is an lvalue with a future.",
        detail: "Think of `std::move` as a permission slip: 'I am done with this object's contents — take them.' After it, assume nothing about the source's elements.",
      },
      {
        term: "Self-assignment and the safe pattern",
        kind: "insight",
        statement: "Copy assignment must survive `v = v`. The safe shape: allocate and fill the new array first, `delete[]` the old one, then move the pointers in. New-then-delete is also what makes the operation exception-safe — if the allocation throws, `v` is untouched.",
        detail: "Move assignment steals (or swaps) and must leave the source empty; a swap-based implementation gets self-safety for free and keeps the two-object state consistent.",
      },
      {
        term: "noexcept moves",
        kind: "law",
        statement: "`std::vector` grows by moving elements into a larger buffer — but only when the move constructor is **`noexcept`**; otherwise it *copies*, because a throw mid-move would leave the source already plundered, while a copy leaves it intact. A missing `noexcept` silently converts every growth into $O(n)$ deep copies.",
        detail: "Always mark move constructor and move assignment `noexcept` — it is both a promise you can keep (pointer swaps do not throw) and a performance contract the containers honor.",
      },
    ],
    figures: [
      {
        caption: "Figure — Copy versus move on a `Vector` of 4 elements: copy allocates a second array and duplicates all 4 values ($O(n)$); move hands over the two machine words that *are* the resource ($O(1)$), leaving the source valid and empty.",
        svg: `<svg viewBox="0 0 760 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Copy duplicates the heap buffer element by element; move transfers the pointer and size to the target and empties the source">
<defs><marker id="cpp17b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="40" y="26" font-size="15" fill="currentColor" font-family="monospace">COPY — Vector b = a;</text>
<rect x="40" y="42" width="150" height="50" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
<text x="52" y="62" font-size="13" fill="currentColor" font-family="monospace">a: elem →</text>
<text x="52" y="82" font-size="13" fill="currentColor" font-family="monospace">   sz = 4</text>
<rect x="250" y="42" width="200" height="50" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/>
<line x1="300" y1="42" x2="300" y2="92" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="350" y1="42" x2="350" y2="92" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="400" y1="42" x2="400" y2="92" stroke="currentColor" stroke-width="1" opacity="0.6"/>
<text x="275" y="72" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">1.5</text><text x="325" y="72" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">2.5</text><text x="375" y="72" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">3.5</text><text x="425" y="72" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">4.5</text>
<text x="350" y="34" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">a's heap array (32 bytes)</text>
<line x1="192" y1="62" x2="244" y2="62" stroke="currentColor" stroke-width="2" marker-end="url(#cpp17b)"/>
<rect x="40" y="112" width="150" height="50" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
<text x="52" y="132" font-size="13" fill="currentColor" font-family="monospace">b: elem →</text>
<text x="52" y="152" font-size="13" fill="currentColor" font-family="monospace">   sz = 4</text>
<rect x="250" y="112" width="200" height="50" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>
<line x1="300" y1="112" x2="300" y2="162" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="350" y1="112" x2="350" y2="162" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="400" y1="112" x2="400" y2="162" stroke="currentColor" stroke-width="1" opacity="0.6"/>
<text x="275" y="142" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">1.5</text><text x="325" y="142" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">2.5</text><text x="375" y="142" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">3.5</text><text x="425" y="142" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">4.5</text>
<text x="350" y="178" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">new double[4] + 4 element copies</text>
<line x1="192" y1="132" x2="244" y2="132" stroke="currentColor" stroke-width="2" marker-end="url(#cpp17b)"/>
<text x="490" y="100" font-size="13" fill="currentColor">cost: one allocation +</text>
<text x="490" y="120" font-size="13" fill="currentColor">O(n) element copies;</text>
<text x="490" y="140" font-size="13" fill="currentColor">both objects fully usable</text>
<text x="40" y="205" font-size="15" fill="currentColor" font-family="monospace">MOVE — Vector b = std::move(a);</text>
<rect x="40" y="222" width="170" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="52" y="243" font-size="13" fill="currentColor" opacity="0.6" font-family="monospace">a: elem = nullptr</text>
<text x="52" y="263" font-size="13" fill="currentColor" opacity="0.6" font-family="monospace">   sz = 0  (emptied)</text>
<rect x="250" y="236" width="200" height="50" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>
<line x1="300" y1="236" x2="300" y2="286" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="350" y1="236" x2="350" y2="286" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="400" y1="236" x2="400" y2="286" stroke="currentColor" stroke-width="1" opacity="0.6"/>
<text x="275" y="266" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">1.5</text><text x="325" y="266" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">2.5</text><text x="375" y="266" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">3.5</text><text x="425" y="266" text-anchor="middle" font-size="12" fill="currentColor" font-family="monospace">4.5</text>
<text x="350" y="306" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">the SAME heap array — ownership handed over</text>
<line x1="212" y1="248" x2="244" y2="256" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<text x="228" y="238" font-size="10" fill="currentColor" opacity="0.6">✗</text>
<rect x="40" y="292" width="150" height="50" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
<text x="52" y="312" font-size="13" fill="currentColor" font-family="monospace">b: elem →</text>
<text x="52" y="332" font-size="13" fill="currentColor" font-family="monospace">   sz = 4</text>
<path d="M 190 317 C 240 317 240 261 244 261" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#cpp17b)"/>
<text x="490" y="252" font-size="13" fill="currentColor">cost: two machine-word</text>
<text x="490" y="272" font-size="13" fill="currentColor">assignments — O(1);</text>
<text x="490" y="292" font-size="13" fill="currentColor">a is valid but empty</text>
<text x="380" y="348" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">Copy duplicates the resource; move transfers ownership of it — the distinction the whole rvalue-reference mechanism serves.</text>
</svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Copy two ways, move in O(1)",
        problem: "For `Vector a(3)` holding `{1.5, 2.5, 3.5}`, count allocations, element copies and bytes touched for `Vector b = a;` versus `Vector b = std::move(a);` — then state what may legally be done with `a` afterwards.",
        steps: [
          { label: "Step 1: copy construction", text: "`Vector(const Vector&)` runs `new double[3]` (24 bytes) and copies 3 elements (3 × 8 = 24 bytes of copying). Two arrays now exist; `a` is unchanged and fully usable." },
          { label: "Step 2: copy assignment (had `b` held 1000 elements)", text: "`operator=` allocates the 3-slot array, copies 3 elements, then `delete[]`s the 8000-byte old array — allocate-and-copy first, delete second: safe against self-assignment and exceptions." },
          { label: "Step 3: move construction", text: "`Vector(Vector&&) noexcept` copies two machine words (`elem`, `sz`) into `b`, then sets `a.elem = nullptr; a.sz = 0`. Zero allocations, zero element copies, zero bytes of payload moved." },
          { label: "Step 4: the source afterwards", text: "`a` is a valid, empty object: `a.size() == 0` is safe, destroying it is safe, `a = c;` re-fills it — but `a[0]` has no defined meaning and assuming the old elements is a bug." },
          { label: "Step 5: the noexcept dividend", text: "Growing a `std::vector<Vector>` uses the move *only because* it is `noexcept` — about $2n$ word transfers to reach a million elements, instead of $2n$ deep copies." },
        ],
        result: "Copy: one allocation + $O(n)$ copying, both objects hold the value. Move: $O(1)$, the value changes hands once — and the source is valid-but-empty.",
      },
      {
        title: "Working through copy and move",
        problem: "Copy constructors, moves and their dispatch. Your task: write correct copy constructor and copy assignment for a resource-owning class.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: write correct copy constructor and copy assignment for a resource-owning class. Write down the guarantee you will rely on — for this chapter it is: Copy means deep duplication (allocate + copy every element); move means transfer the handles and empty the source — `std::move` only *marks* the source as movable-from." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget w; Widget v = std::move(w);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — write move operations that transfer resources and leave a valid, empty source — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: A moved-from object is valid but unspecified: destroy it, assign to it, ask its size — but never assume its old contents. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Copy means deep duplication (allocate + copy every element); move means transfer the handles and empty the source — `std::move` only *marks* the source as movable-from. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Copy means deep duplication (allocate + copy every element); move means transfer the handles and empty the source — `std::move` only *marks* the source as movable-from.",
      "A moved-from object is valid but unspecified: destroy it, assign to it, ask its size — but never assume its old contents.",
      "Mark move operations `noexcept` or containers silently fall back to copying on growth; write assignment allocate-first so self-assignment and exceptions are both safe.",
    ],
    quiz: [
      {
        q: "After `Vector b = std::move(a);`, which statement is guaranteed?",
        options: [
          "`a` has been destroyed",
          "`a` is left with `nullptr` elements, so `a[0]` is safe",
          "`a` and `b` now share the array equally",
          "`a` is in a valid state — but assuming anything about its element values is an error",
        ],
        answer: 3,
        explanation: "The moved-from source is valid-but-unspecified: safe to destroy, assign or query for state, never safe to assume contents of.",
      },
      {
        q: "Why must a move constructor be marked `noexcept` for `std::vector` growth to use it?",
        options: [
          "moves are illegal in constructors otherwise",
          "a throwing move mid-reallocation would leave the source already plundered — the vector copies instead to stay exception-safe",
          "`noexcept` makes moves faster by disabling exceptions globally",
          "it is only documentation; the behavior is identical",
        ],
        answer: 1,
        explanation: "A copy that throws leaves the source intact, so the vector can restore itself; a move that throws cannot. No `noexcept`, no moves — your type pays for copies.",
      },
      {
        q: "What does `std::move(x)` itself do?",
        options: [
          "nothing except mark x as an rvalue so move overloads are selected at the assignment/initialization that follows",
          "it moves x's members immediately",
          "it destroys x",
          "it copies x and nulls the copy",
        ],
        answer: 0,
        explanation: "It is a cast to rvalue reference — a permission slip. The move, if any, happens in the constructor or assignment it enables.",
      },
      {
        q: "Copy assignment written as 'allocate new array, copy into it, delete the old, then reassign pointers' is safe because:",
        options: [
          "it is the shortest form",
          "it never runs for `v = v`",
          "if allocation or copying throws, the target still holds its original, intact array — and self-assignment works",
          "the compiler reorders it into a move",
        ],
        answer: 2,
        explanation: "New-then-delete gives the strong guarantee and makes self-assignment a harmless special case — ordering is the whole trick.",
      },
      // PYQ-pattern — copy initialization calls the copy constructor (rephrased)
      {
        q: "`Widget` declares both a copy constructor and a copy-assignment operator. What does `Widget w2 = w1;` do?",
        options: ["Default-constructs `w2`, then copy-assigns from `w1`", "Move-constructs `w2`, because `w1` is a named object", "Copies raw memory with no user code running", "Copy-constructs `w2` directly from `w1`; the assignment operator is not involved"],
        answer: 3,
        explanation: "Step 1: The data given is a declaration with an `=` sign whose right side has the same type. Step 2: The governing rule is copy initialization: despite the `=` token this is initialization rather than assignment, so it calls the copy constructor directly, possibly with elision, and never touches the assignment operator. Step 3: Tracing the statement, storage for `w2` is obtained, the copy constructor builds it from `w1`, and no default construction precedes it. Step 4: The distractors fail because no two-phase build occurs, moves require rvalues rather than named lvalues, and the user-declared copy constructor genuinely runs. Step 5: Therefore the statement copy-constructs without any assignment."
      }
    ],
  },

  // ---------------------------------------------------------------- 17.6
  {
    sectionId: "cpp-ch17-s6",
    readingTime: 8,
    intro: "Declare none of the six special operations and the compiler writes all of them — with exactly the right semantics: memberwise copy, memberwise move, reverse-order destruction. Declare any one of them, and generation rules kick in with surgical precision: some operations keep being generated (deprecated), some stop being generated, some are deleted outright. This section is that rulebook — the birthplace of the rule of zero and the rule of five.",
    objectives: [
      "List the six generated operations and their generated meanings",
      "Apply the suppression and deletion rules to any class declaration",
      "Choose between the rule of zero and the rule of five for a given class",
    ],
    concepts: [
      {
        term: "The six generated operations",
        kind: "definition",
        statement: "Default constructor, copy constructor, copy assignment, move constructor, move assignment, destructor. For each, the compiler implicitly declares (and defines when used) a **generated** version — public, inline — unless your own declarations suppress or delete it.",
        detail: "'Generated' is not a fallback of last resort: it is the exact semantics the compiler would write for your class from its members, and it is usually what you want.",
      },
      {
        term: "Generated meanings",
        kind: "law",
        statement: "The generated **copy** copies each member (by *its* copy); the generated **move** moves each member; the generated **destructor** destroys each member in reverse declaration order; the generated **default constructor** default-initializes each member (or uses its in-class initializer). Cost is the sum of the members' costs — a generated `Vector` copy is $O(n)$ because its members' work is.",
        detail: "These meanings compose: a class built from `string`, `vector` and `unique_ptr` members gets correct copy, move and destruction because each member already got them right.",
      },
      {
        term: "Rule of zero",
        kind: "method",
        statement: "**Declare none of the six.** Compose from members that manage their own resources — `string`, `vector`, `unique_ptr`, file handles — and your class inherits correct copy, move and destruction by construction. The rule of zero is not a compromise; it is the intended use of the machinery.",
        detail: "It also composes with invariants: keep the class' own logic in ordinary member functions, and let members' special operations carry the lifetime machinery.",
      },
      {
        term: "Rule of five, =default, =delete",
        kind: "method",
        statement: "The moment you declare any of destructor, copy or move, plan **all five**: define each, or write **`=default`** to request the generated version, or **`=delete`** to remove it from the overload set entirely (the `unique_ptr` pattern: copy deleted, move kept). The dispatch table below is the exact consequence table of taking over any one of them.",
        detail: "A deleted function participates in overload resolution and *fails* when chosen — a clear compile-time error, not a silent absence.",
      },
      {
        term: "Generating Default Operations: the working contract",
        kind: "definition",
        statement: "**Generating Default Operations.** The rules of zero and the big five. You can claim this section when you can list the six generated operations and their generated meanings — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 17 (Construction, Cleanup, Copy, and Move); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "Figure — The generated-operations dispatch table: for each declaration you write (rows), what the compiler does about each of the six special members (columns): generate, generate-but-deprecated, not generate, or delete.",
        svg: `<svg viewBox="0 0 780 372" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table of C++11 rules for which special member functions are generated, deprecated, suppressed or deleted depending on which one the user declares">
<text x="390" y="22" text-anchor="middle" font-size="15" fill="currentColor">What the compiler writes for you — the C++11 generation rules</text>
<text x="390" y="40" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">row: what you declare (row 2 stands for any non-copy, non-move constructor)</text>
<rect x="20" y="54" width="745" height="276" fill="none" stroke="currentColor" stroke-width="1.5"/>
<line x1="20" y1="88" x2="765" y2="88" stroke="currentColor" stroke-width="1.5"/>
<line x1="195" y1="54" x2="195" y2="330" stroke="currentColor" stroke-width="1.5"/>
<line x1="290" y1="54" x2="290" y2="330" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="385" y1="54" x2="385" y2="330" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="480" y1="54" x2="480" y2="330" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="575" y1="54" x2="575" y2="330" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="670" y1="54" x2="670" y2="330" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="20" y1="122" x2="765" y2="122" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="20" y1="156" x2="765" y2="156" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="20" y1="190" x2="765" y2="190" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="20" y1="224" x2="765" y2="224" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="20" y1="258" x2="765" y2="258" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<line x1="20" y1="292" x2="765" y2="292" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
<text x="105" y="70" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">you declare ↓</text>
<text x="105" y="84" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">compiler writes →</text>
<text x="242" y="70" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">default</text>
<text x="242" y="84" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">ctor</text>
<text x="337" y="70" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">copy</text>
<text x="337" y="84" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">ctor</text>
<text x="432" y="70" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">copy</text>
<text x="432" y="84" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">assign</text>
<text x="527" y="70" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">move</text>
<text x="527" y="84" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">ctor</text>
<text x="622" y="70" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">move</text>
<text x="622" y="84" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">assign</text>
<text x="717" y="78" text-anchor="middle" font-size="11" fill="currentColor" font-family="monospace">dtor</text>
<text x="30" y="109" font-size="11.5" fill="currentColor" font-family="monospace">(nothing)</text>
<text x="30" y="143" font-size="11.5" fill="currentColor" font-family="monospace">X(int)</text>
<text x="30" y="177" font-size="11.5" fill="currentColor" font-family="monospace">X(const X&amp;)</text>
<text x="30" y="211" font-size="11.5" fill="currentColor" font-family="monospace">X&amp; operator=</text>
<text x="42" y="225" font-size="10" fill="currentColor" font-family="monospace">(const X&amp;)</text>
<text x="30" y="245" font-size="11.5" fill="currentColor" font-family="monospace">~X()</text>
<text x="30" y="279" font-size="11.5" fill="currentColor" font-family="monospace">X(X&amp;&amp;)</text>
<text x="30" y="313" font-size="11.5" fill="currentColor" font-family="monospace">X&amp; operator=</text>
<text x="42" y="327" font-size="10" fill="currentColor" font-family="monospace">(X&amp;&amp;)</text>
<rect x="200" y="94" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="242" y="110" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="295" y="94" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="337" y="110" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="390" y="94" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="432" y="110" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="485" y="94" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="527" y="110" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="580" y="94" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="622" y="110" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="675" y="94" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="717" y="110" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<text x="242" y="144" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="295" y="128" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="337" y="144" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="390" y="128" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="432" y="144" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="485" y="128" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="527" y="144" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="580" y="128" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="622" y="144" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="675" y="128" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="717" y="144" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<text x="242" y="178" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="295" y="162" width="85" height="24" fill="currentColor" fill-opacity="0.14"/>
<text x="337" y="178" text-anchor="middle" font-size="12" fill="currentColor">yours</text>
<rect x="390" y="162" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="432" y="178" text-anchor="middle" font-size="12" fill="currentColor">gen*</text>
<text x="527" y="178" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<text x="622" y="178" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="675" y="162" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="717" y="178" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<text x="242" y="212" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="295" y="196" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="337" y="212" text-anchor="middle" font-size="12" fill="currentColor">gen*</text>
<rect x="390" y="196" width="85" height="24" fill="currentColor" fill-opacity="0.14"/>
<text x="432" y="212" text-anchor="middle" font-size="12" fill="currentColor">yours</text>
<text x="527" y="212" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<text x="622" y="212" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="675" y="196" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="717" y="212" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="200" y="230" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="242" y="246" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<rect x="295" y="230" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="337" y="246" text-anchor="middle" font-size="12" fill="currentColor">gen*</text>
<rect x="390" y="230" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="432" y="246" text-anchor="middle" font-size="12" fill="currentColor">gen*</text>
<text x="527" y="246" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<text x="622" y="246" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="675" y="230" width="85" height="24" fill="currentColor" fill-opacity="0.14"/>
<text x="717" y="246" text-anchor="middle" font-size="12" fill="currentColor">yours</text>
<text x="242" y="280" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="295" y="264" width="85" height="24" fill="currentColor" fill-opacity="0.32"/>
<text x="337" y="280" text-anchor="middle" font-size="11.5" fill="currentColor" font-weight="bold">deleted</text>
<rect x="390" y="264" width="85" height="24" fill="currentColor" fill-opacity="0.32"/>
<text x="432" y="280" text-anchor="middle" font-size="11.5" fill="currentColor" font-weight="bold">deleted</text>
<rect x="485" y="264" width="85" height="24" fill="currentColor" fill-opacity="0.14"/>
<text x="527" y="280" text-anchor="middle" font-size="12" fill="currentColor">yours</text>
<text x="622" y="280" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="675" y="264" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="717" y="280" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<text x="242" y="314" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="295" y="298" width="85" height="24" fill="currentColor" fill-opacity="0.32"/>
<text x="337" y="314" text-anchor="middle" font-size="11.5" fill="currentColor" font-weight="bold">deleted</text>
<rect x="390" y="298" width="85" height="24" fill="currentColor" fill-opacity="0.32"/>
<text x="432" y="314" text-anchor="middle" font-size="11.5" fill="currentColor" font-weight="bold">deleted</text>
<text x="527" y="314" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.5">—</text>
<rect x="580" y="298" width="85" height="24" fill="currentColor" fill-opacity="0.14"/>
<text x="622" y="314" text-anchor="middle" font-size="12" fill="currentColor">yours</text>
<rect x="675" y="298" width="85" height="24" fill="currentColor" fill-opacity="0.08"/>
<text x="717" y="314" text-anchor="middle" font-size="12" fill="currentColor">gen</text>
<text x="390" y="350" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.9">gen = implicitly generated · gen* = generated but deprecated (kept for C++98 compatibility) · — = not generated · deleted = using it is an error</text>
<text x="390" y="366" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.75">a member that cannot itself be copied or moved (reference, const) deletes that generated operation for the whole class</text>
</svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "The same buffer, two ways",
        problem: "A `Buffer` owns `char* p; int n;`. Write it under the rule of five, then rewrite it under the rule of zero using `std::vector<char>`, and compare what the compiler writes for each.",
        steps: [
          { label: "Step 1: rule of five", text: "`explicit Buffer(int n) : p{new char[n]}, n{n} { } ~Buffer() { delete[] p; }` plus a correct copy constructor, copy assignment, `noexcept` move constructor and `noexcept` move assignment — roughly 15 careful lines, each one a chance to leak, double-delete or forget `noexcept`." },
          { label: "Step 2: rule of zero", text: "`class Buffer2 { std::vector<char> buf; public: explicit Buffer2(int n) : buf(n) { } };` — zero special members declared." },
          { label: "Step 3: what the compiler writes for Buffer2", text: "Generated copy = memberwise through `vector`'s copy (allocate + n byte copies); generated move = `vector`'s `noexcept` pointer hand-off; generated destructor frees; generated assignments likewise — all correct, all already tested library code." },
          { label: "Step 4: count and compare", text: "For a 4096-byte buffer the runtime costs are identical: copy = one 4 KiB allocation + 4 KiB of copying; move = a few machine words. The difference is 15 lines of your code vs 1 — and the zero version cannot get the details wrong." },
        ],
        result: "Rule of zero by default; rule of five only when a bare resource or a subtle invariant forces your hand — and then all five, deliberately, with `=default` where the generated one was right anyway.",
      },
      {
        title: "Working through generating default operations",
        problem: "The rules of zero and the big five. Your task: list the six generated operations and their generated meanings.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: list the six generated operations and their generated meanings. Write down the guarantee you will rely on — for this chapter it is: Six operations, generated with memberwise semantics (copy, move) and reverse-order destruction — correct by construction for composed classes." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `Widget w; Widget v = std::move(w);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply the suppression and deletion rules to any class declaration — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Taking over one changes the rules for the rest: moves vanish behind a destructor or copy declaration; declaring a move deletes the copies. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Six operations, generated with memberwise semantics (copy, move) and reverse-order destruction — correct by construction for composed classes. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Six operations, generated with memberwise semantics (copy, move) and reverse-order destruction — correct by construction for composed classes.",
      "Taking over one changes the rules for the rest: moves vanish behind a destructor or copy declaration; declaring a move deletes the copies.",
      "Rule of zero: compose from resource-owning members and declare nothing; rule of five: once you declare any one, define or `=default`/`=delete` all of them.",
    ],
    quiz: [
      {
        q: "You declare `~Buffer()` and nothing else. Which best describes the compiler's response?",
        options: [
          "copy operations are still generated (deprecated), but the move operations are NOT — your `Buffer` now copies where it could have moved",
          "all five other operations are still generated as before",
          "moves are deleted: using one is a compile error",
          "the class becomes abstract",
        ],
        answer: 0,
        explanation: "A destructor signals resource management, so generated moves are suppressed for safety — and the class silently degrades to copy behavior, the classic performance trap.",
      },
      {
        q: "The rule of zero works because the generated operations…",
        options: [
          "are always trivially empty",
          "run without accessing any members",
          "apply only to classes with no data members",
          "delegate to the members' own operations, which already get copy, move and destruction right",
        ],
        answer: 3,
        explanation: "Memberwise semantics mean a class composed of `string`/`vector`/`unique_ptr` members inherits their correctness — nothing for you to write.",
      },
      {
        q: "A copy constructor declared `=delete` means that…",
        options: [
          "the class cannot be constructed at all",
          "the compiler writes a slower copy instead",
          "any use of the copy constructor is a compile-time error — as with `unique_ptr`",
          "copies are allowed only for temporaries",
        ],
        answer: 2,
        explanation: "Deleted functions stay in overload resolution and fail loudly when chosen — the mechanism that makes move-only types safe.",
      },
      {
        q: "The generated destructor destroys members…",
        options: [
          "in declaration order",
          "in reverse declaration order, after the destructor body",
          "in the order of the member initializer lists across the class",
          "in alphabetical order of member names",
        ],
        answer: 1,
        explanation: "Mirror-image of construction: body first (members still alive), then members last-declared-first.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The generated-default-operations rules, exactly",
        blocks: [
          {
            kind: "para",
            body: "Before C++11 there were four implicitly generated operations — default constructor, copy constructor, copy assignment, destructor — and one rule: generation unless you declared your own. Move semantics forced the committee to interlock *six* operations without breaking the billions of lines of C++98 already deployed. The result is a compromise, and every clause of it is a decision you can reconstruct: make the dangerous combination a hard error, keep the historically common one compiling, and let the rest follow from memberwise semantics. Knowing *why* each rule reads as it does is what separates memorizing the table from being able to derive it.",
          },
          {
            kind: "theorem",
            heading: "Generation and suppression",
            body: "Let `X` be a class. **(a) Default constructor**: implicitly declared iff `X` has no user-declared constructor of any kind. **(b) Copy constructor**: declared unless `X` has a user-declared copy constructor, move constructor or move assignment; it is *defined as deleted* if `X` has a user-declared move operation; its generation is *deprecated* (but still happens) if `X` has a user-declared copy assignment or destructor. **(c) Copy assignment**: symmetric — declared unless user-declared copy assignment, move constructor or move assignment exists; deleted given a user-declared move operation; deprecated given a user-declared copy constructor or destructor. **(d) Move constructor and move assignment**: declared only if `X` has no user-declared copy constructor, copy assignment, move constructor, move assignment *or* destructor. **(e) Destructor**: declared unless user-declared. Independently of all the above, any generated operation that would be ill-formed for a member — e.g. copy assignment when a member is a reference or `const` — is *deleted*. Deprecation is not suppression: the deprecated functions still exist and work.",
          },
          {
            kind: "derivation",
            heading: "Why the rules are asymmetric on purpose",
            body: "**Declaring any constructor removes the default constructor** because you have taken over initialization policy: what would 'construct from nothing' even mean for `Vector(int)`? A guess. **Declaring a move operation deletes the copies** because a hand-written move only exists when the class manages resources non-trivially — and there, a memberwise copy of a raw handle would give two owners and a double delete. The committee chose a *compile-time error* over a silent, expensive, occasionally fatal copy. **Declaring a destructor or copy operation merely suppresses moves** (falling back to copies) for exactly the opposite reason: C++98 code with destructors was everywhere, and had moves been deleted, no recompilation campaign would have survived. So the asymmetry maps onto risk: hard error where the bug is likely (user move + generated copy), quiet fallback where history demanded it (user destructor + no moves). Note the one surprise in row 5 of the table: a user destructor does *not* remove the generated default constructor — a destructor is not a constructor.",
          },
          {
            kind: "example",
            heading: "The performance cliff, quantified",
            body: "Take a `Buffer` with 4 KiB payloads and one hand-written destructor — moves silently suppressed. Grow a `std::vector<Buffer>` to $n = 1{,}000{,}000$ elements by `push_back`: geometric doubling performs about $2n = 2{,}000{,}000$ element transfers in total. With working moves, each transfer is the object's few machine words (say 24 bytes): about $2 \\times 10^6 \\times 24\\ \\text{B} \\approx 48$ MB of traffic. With moves suppressed, each transfer deep-copies: $2 \\times 10^6 \\times 4096\\ \\text{B} \\approx 8.2$ GB of `memcpy`, plus about two million extra heap allocations and frees. One added destructor line — invisible in review — costs roughly a 170-fold traffic increase and a much larger wall-clock factor from allocation. The fix is mechanical: `Buffer(Buffer&&) noexcept = default; Buffer& operator=(Buffer&&) noexcept = default;` (or just follow the rule of zero), and the numbers collapse back to 48 MB.",
          },
          {
            kind: "application",
            heading: "Composing the rules: how zero-rule classes get away with it",
            body: "The rules *compose through members*, which is the whole reason the rule of zero works. `unique_ptr` deletes its copy and declares its move, so a class holding one gets its copy operations deleted automatically and its move operations generated (memberwise move through a movable member is well-formed). A class holding a `std::mutex` — neither copyable nor movable — becomes immovable itself; a `lock_guard` member quietly propagates 'no copy, no move'. The same propagation deletes a generated copy assignment for any class with a reference or `const` member, because such a member cannot be assigned. When you audit a class, read its members first: the special members it will receive are exactly what its members are willing to provide.",
          },
          {
            kind: "remark",
            body: "The deprecation marks are the standard's way of saying 'this compiles, but it should not have to.' Core Guidelines rule C.21 turns the table into policy: *if you define or `=delete` any default operation, define or `=delete` all five* — `=default` counts as defining. And notice what no declaration can take from you: the destructor is generated even in the last row of the table, because every object must be destructible no matter what else was suppressed or deleted.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 17.7
  {
    sectionId: "cpp-ch17-s7",
    readingTime: 4,
    intro: "The chapter's distilled guidance: let the compiler write the special members (rule of zero), take over all five when you must, make moves `noexcept`, prefer `{}` initialization, and keep destructors exception-free. The list is short because the rules underneath are mechanical — once you know them.",
    objectives: [
      "Decide, for a given class, whether to write zero or five special members",
      "Apply the initialization and `noexcept` advice to new code",
      "Recognize destructor-related traps before they ship",
    ],
    concepts: [
      {
        term: "Rule of zero first",
        kind: "method",
        statement: "Design classes so that no special member is needed: resource-owning members (`string`, `vector`, `unique_ptr`, file handles) carry the weight. Reach for the rule of five only when a bare resource or a subtle invariant leaves no alternative.",
        detail: "The strongest form of the advice: a class with no bare resources reads like a class of values, and value semantics are the easiest to reason about and test.",
      },
      {
        term: "All five, or none",
        kind: "method",
        statement: "If you declare any of destructor, copy or move operations, define or `=delete` all five. The suppression rules of 17.6 otherwise rewrite your class' behavior behind your back — typically, your destructor just cost you your moves.",
        detail: "A declaration you added 'for logging' is still a declaration: state your intent for the whole set, even if four of the five are `=default`.",
      },
      {
        term: "noexcept moves and brace initialization",
        kind: "method",
        statement: "Mark move constructors and move assignments **`noexcept`** — containers pay you back with real moves during growth. Initialize with **`{}`**: narrowing errors and vexing parses become compile-time errors instead of runtime surprises.",
        detail: "Together the two habits remove the two classic silent-degradation modes: copy-instead-of-move, and 'it compiled with `=` but meant something else'.",
      },
      {
        term: "Destructors: quiet, implicit, paired",
        kind: "law",
        statement: "Never throw from a destructor; never call one by name (`delete` and scope exit do it); and ensure every resource a constructor acquires has exactly one release path — the constructor/destructor pair is the unit of resource management.",
        detail: "A destructor that logs, flushes or unlocks should absorb failures itself; one that throws during unwinding kills the process (17.2).",
      },
      {
        term: "Shipping rule for construction, cleanup, copy, and move",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Default to the rule of zero: compose from resource-owning members and declare no special members; take over all five only when forced.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing `File_handle`",
        problem: "Review `class File_handle { FILE* f; public: File_handle(const char* n) : f{std::fopen(n, \"r\")} { if (!f) throw std::runtime_error{\"open failed\"}; } ~File_handle() { std::fclose(f); } };` against the advice list.",
        steps: [
          { label: "Step 1: the acquisition pair ✓", text: "The constructor acquires and *fails loudly* — the invariant 'f points to an open file' holds or the object never exists. The destructor releases on every exit path. Core RAII done." },
          { label: "Step 2: the missing five ✗", text: "Copying would `fclose` the same `FILE*` twice. The class declares a destructor, so its moves are suppressed too — by 17.6 it silently degrades to (broken) copying." },
          { label: "Step 3: the fix", text: "Declare the whole set: copies `=delete`; moves defined (transfer `f`, null the source) and `noexcept` — or better, store a `std::ifstream` and declare nothing at all (rule of zero)." },
          { label: "Step 4: the payoff", text: "Users write `File_handle h{\"data.txt\"};` and cannot leak, double-close, or forget to check — the class carries the discipline they would otherwise have to remember." },
        ],
        result: "Four audit questions — paired? all five? moves `noexcept`? destructor quiet? — are the chapter's advice in checklist form.",
      },
      {
        title: "Reviewing construction, cleanup, copy, and move code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: decide, for a given class, whether to write zero or five special members.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Default to the rule of zero: compose from resource-owning members and declare no special members; take over all five only when forced." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `Widget w; Widget v = std::move(w);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: apply the initialization and `noexcept` advice to new code. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Any special-member declaration triggers the 17.6 rules — state your intent for the whole set, and make moves `noexcept` so containers actually move." },
        ],
        result: "The review ends with findings tied to reasons: Default to the rule of zero: compose from resource-owning members and declare no special members; take over all five only when forced. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Default to the rule of zero: compose from resource-owning members and declare no special members; take over all five only when forced.",
      "Any special-member declaration triggers the 17.6 rules — state your intent for the whole set, and make moves `noexcept` so containers actually move.",
      "Destructors never throw, are never called by name, and pair one-to-one with constructor acquisitions; `{}` initialization keeps the build-time surprises coming (the good kind).",
    ],
    quiz: [
      {
        q: "The best first response for a class whose members already manage their own resources is:",
        options: [
          "declare none of them — the rule of zero",
          "write all six special members by hand for clarity",
          "delete all of them",
          "derive it from a base class with virtual functions",
        ],
        answer: 0,
        explanation: "Generated operations delegate to the members; composed of well-behaved members, the class needs nothing written.",
      },
      {
        q: "Which operation should essentially never be invoked by name in normal code?",
        options: ["the copy constructor", "an in-class initializer", "a delegating constructor", "the destructor"],
        answer: 3,
        explanation: "Scope exit, `delete` and unwinding invoke destructors; naming one is for placement-`new` specialists only.",
      },
      {
        q: "Move operations should be marked `noexcept` because:",
        options: [
          "moves are illegal otherwise",
          "it documents the contract only; behavior is unchanged",
          "containers grow with moves only when the move cannot throw — otherwise they copy for exception safety",
          "the compiler deletes moves that can throw",
        ],
        answer: 2,
        explanation: "A throwing move mid-reallocation would lose data; a copy leaves the source intact. No `noexcept` label, no moves — just silent copies.",
      },
    ],
  },
]
