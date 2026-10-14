import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. — Chapter 34
// Memory and Resources (§34.1 – §34.7)
// ============================================================================

export const cppCh34Content: SectionContent[] = [
  // ---------------------------------------------------------------- 34.1
  {
    sectionId: 'cpp-ch34-s1',
    readingTime: 6,
    intro: "Everything a program touches is a resource: memory, file handles, locks, threads, sockets. This chapter is Stroustrup's discipline for acquiring resources, owning them, and — inevitably — releasing them, with memory as the dominant case. The tool is ownership made explicit in types and scopes, so that release happens by language rule rather than by programmer discipline.",
    objectives: [
      "Define resource and ownership, and explain why memory is the paradigm case",
      "State the RAII discipline and why it makes release exception-safe",
      "Distinguish automatic, static and free-store memory and match each to its release rule",
    ],
    concepts: [
      {
        term: 'Resource',
        kind: 'definition',
        statement: "A **resource** is something that is **acquired** — typically from a system that has less of it than we would like — and must eventually be **released** (given back). Memory is the classic case, but locks, file handles, sockets, threads and timers are resources in exactly the same sense. A program that fails to release what it acquires is said to **leak**.",
        detail: "The key economic fact: a leak is invisible in the short run — the program produces correct answers while resources last — and fatal in the long run. Resource management is about making release *inevitable* rather than merely *intended*.",
      },
      {
        term: 'Ownership',
        kind: 'definition',
        statement: "A resource is owned by the entity that is **responsible for releasing it** — typically an object: a scope, a container, a smart pointer. Ownership is the name for that responsibility, and it is what a raw `T*` conspicuously does *not* express: a raw pointer only observes; it makes no promise about who releases.",
        detail: "Once ownership has a home, the release question has exactly one answer. Almost every resource bug is a case of ownership that was never assigned.",
      },
      {
        term: 'RAII',
        kind: 'method',
        statement: "**Resource Acquisition Is Initialization**: acquire the resource in a constructor and release it in the destructor of an object placed in the scope where the resource is needed. Because C++ destroys automatic objects deterministically when a scope exits — normally or via an exception — the destructor, and therefore the release, **must run**:\n```\nvoid use() {\n    vector<int> v(1000);   // acquire: v owns its buffer\n    // ... work, even throwing work ...\n}                        // release guaranteed here\n```\n`vector`, `fstream`, `lock_guard` and the smart pointers of §34.3 are all RAII handles.",
        detail: "This is the foundation of exception safety: unwinding a stack runs the destructors of every automatic object on it, so every resource held by such an object is returned no matter which throw fires.",
      },
      {
        term: 'The three homes of memory',
        kind: 'definition',
        statement: "An object lives in one of three memories: **automatic** (stack) storage, destroyed deterministically at scope exit; **static** storage, lasting the whole run; and the **free store** (heap), where `new` allocates and only the matching `delete` releases. (Thread-local storage is a per-thread variant of static.) The free store is the home of every leak — objects there outlive the scopes that created them.",
        detail: "The chapter's machinery exists because free-store objects have no natural destructor point: something must *own* them, and the rest of the chapter is about choosing the right owner type.",
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** Memory as a resource. You can claim this section when you can define resource and ownership, and explain why memory is the paradigm case — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 34 (Memory and Resources); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'The leak audit — discipline versus guarantee',
        problem: "A server allocates a 1 MiB buffer per request. Version A uses `new char[1024*1024]` with a manual `delete[]` on every return path; version B wraps the buffer in a `vector<char>`. A malformed request makes version A throw before its `delete[]`. What happens over 100,000 such requests?",
        steps: [
          { label: 'Version A', text: "Each malformed request unwinds past its unmanaged buffer — a leak. 100,000 of them strand $100{,}000 \\times 2^{20}$ bytes ≈ 104.9 GB (≈ 97.7 GiB) of address space; the process dies at the allocator's limit long before 'later'." },
          { label: 'Version B', text: "The same throw unwinds the stack, and the `vector`'s destructor runs during unwinding, returning its buffer at once. Net leak: 0 bytes — for every error path, with no release code written inside the function." },
          { label: 'The moral', text: "Version A relies on the *programmer being right on every path*; version B relies on the *language being right by construction*." },
        ],
        result: "≈ 104.9 GB stranded by discipline versus 0 bytes by RAII — identical behavior on the happy path, opposite failure behavior on every other path.",
      },
      {
        title: 'Working through introduction',
        problem: 'Memory as a resource. Your task: define resource and ownership, and explain why memory is the paradigm case.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define resource and ownership, and explain why memory is the paradigm case. Write down the guarantee you will rely on — for this chapter it is: A resource is anything acquired that must be released; ownership is the responsibility to release it — and a raw pointer expresses no such responsibility.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::unique_ptr<Node> p(new Node); auto q = std::move(p);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state the RAII discipline and why it makes release exception-safe — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: RAII moves release from programmer discipline to language guarantee: constructors acquire, destructors release, scopes decide when. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A resource is anything acquired that must be released; ownership is the responsibility to release it — and a raw pointer expresses no such responsibility. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "A resource is anything acquired that must be released; ownership is the responsibility to release it — and a raw pointer expresses no such responsibility.",
      "RAII moves release from programmer discipline to language guarantee: constructors acquire, destructors release, scopes decide when.",
      "The free store is where leaks live; the library's answer is that containers and smart pointers — not bare `new`/`delete` — should own free-store memory.",
    ],
    quiz: [
      {
        q: "Which statement best captures the book's definition of a resource?",
        options: [
          "Anything the operating system provides",
          "Something acquired that must eventually be released, with memory as the paradigm case",
          "Any variable allocated on the stack",
          "A pointer to an object of unknown lifetime",
        ],
        answer: 1,
        explanation: "The definition is about acquire/release bookkeeping; where the resource comes from is incidental.",
      },
      {
        q: "RAII guarantees release because the destructor runs:",
        options: [
          "when the programmer remembers to call it",
          "when the garbage collector runs",
          "deterministically at scope exit, including during exception unwinding",
          "only on the normal return path",
        ],
        answer: 2,
        explanation: "Unwinding destroys automatic objects on the way out — that is precisely why releases are exception-safe.",
      },
      {
        q: "Which memory kind is the source of leaks?",
        options: ["Automatic (stack) storage", "Static storage", "The free store (heap)", "Register storage"],
        answer: 2,
        explanation: "Only free-store objects outlive the scope that created them, and only their release is manual unless an owner type takes over.",
      },
      {
        q: "A raw `T*` differs from an owning handle because it:",
        options: [
          "is always cheaper in space",
          "expresses observation without release responsibility",
          "cannot be copied",
          "keeps a use count",
        ],
        answer: 1,
        explanation: "Observation is exactly what raw pointers are for; ownership is what `unique_ptr` and `shared_ptr` add.",
      },
      // PYQ-pattern: GATE 2022 — exclusive versus shared ownership choice (rephrased)
      {
        q: "A factory creates an object with exactly one owner at a time, and ownership transfers to the caller. Which smart pointer matches, and why not the alternative?",
        options: ["`std::unique_ptr`, because it models exclusive ownership with move-only transfer, while `shared_ptr` adds shared bookkeeping the design does not need", "`std::shared_ptr`, because every object needs a shared count", "A raw owning pointer, because smart pointers cannot transfer ownership", "`std::weak_ptr`, because it owns its object exclusively"],
        answer: 0,
        explanation: "Step 1: The data given is a single-owner object whose ownership moves from factory to caller. Step 2: The governing rules are the ownership vocabulary: `unique_ptr` is move-only exclusive ownership with no overhead, `shared_ptr` adds a control block with atomic counts for sharing, and `weak_ptr` observes without owning. Step 3: Applying the design, the factory returns a `unique_ptr` by move, the caller becomes the sole owner, and no reference counting ever runs. Step 4: The distractors fail because unneeded sharing taxes every copy with atomic bookkeeping, raw ownership abandons exception safety, and weak pointers own nothing. Step 5: Therefore the exclusive pointer is the matching tool."
      }
    ],
  },

  // ---------------------------------------------------------------- 34.2
  {
    sectionId: 'cpp-ch34-s2',
    readingTime: 7,
    intro: "Between the built-in arrays and the STL containers sits a family that *almost* qualifies: `array`, `bitset` and `tuple` cover the fixed-size, the bit-packed and the heterogeneous cases. Each is a first-class tool with one broken container promise — no iterators, no runtime sizing, or compile-time-only element access — and knowing exactly which promise is broken is the point of the section.",
    objectives: [
      "Use `array<T, N>` as a zero-overhead replacement for built-in arrays",
      "Do bit arithmetic with `bitset<N>` and predict every operation's result",
      "Build, read and unpack `tuple`s with `get<i>`, `make_tuple` and `tie`",
    ],
    concepts: [
      {
        term: 'array',
        kind: 'definition',
        statement: "**`array<T, N>`** is a fixed-size sequence of $N$ elements of type $T$, stored exactly where the `array` object is declared (usually the stack). It is a real container — `begin()`, `end()`, `size()`, compatible with every STL algorithm — with two restrictions: the size is a compile-time constant and it never allocates. Element zero lives at offset zero of the object itself, so an `array` is exactly as big as the built-in `T[N]` it replaces — zero overhead — but it does not decay to a pointer, and it knows its own size.",
        detail: "It also has the tuple interface (`get<i>`, `tuple_size`), so it interoperates with the compile-time machinery of §34.2.3.",
      },
      {
        term: 'bitset',
        kind: 'definition',
        statement: "**`bitset<N>`** holds $N$ bits with value semantics: copy it, compare it, combine it with `&`, `|`, `^`, `~`, shift it with `<<` and `>>`, flip individual bits (`set`, `reset`, `flip`, `test`), count them (`count`, `any`, `all`, `none`), and convert with `to_string` and `to_ulong`. It is *not* a container — no iterators, elements addressed by bit index, and $N$ must be a compile-time constant.",
        detail: "Where `vector<bool>` packs bits into a growable container, `bitset` is the fixed-size tool: often a machine word or two, living in registers.",
      },
      {
        term: 'tuple',
        kind: 'definition',
        statement: "**`tuple<T0, T1, ...>`** is a heterogeneous fixed-size sequence: element $i$ has type $T_i$ and is reachable only at compile time — `get<i>(t)` — because ordinary iteration cannot visit values of different types. `make_tuple` builds one from values (decaying `T&` to `T`); `tie` unpacks one into existing variables (or `ignore`, to skip); `tuple_size` and `tuple_element` give the compile-time count and element types; comparison is lexicographic. A `pair` is the two-element special case that underpins `map`.",
        detail: "The tuple is the C++11 answer to 'return several values': one object, typed fields, destructured by the caller.",
      },
      {
        term: 'Why they are only "almost" containers',
        kind: 'insight',
        statement: "The built-in `T[N]` decays to pointers and has no members; `bitset` has no iterators and a compile-time size; `tuple` can only be indexed at compile time; and `vector<bool>` — the standard's bit-packed specialization — returns a proxy, not a `bool&`, so it violates the container contract. The chapter's title is a warning label: each member of the family is a solid citizen with exactly one broken container promise.",
        detail: "None of these gaps is a defect; each is the price of the special case the type serves. The skill is knowing which tool's broken promise you can live with.",
      },
      {
        term: '‘‘Almost Containers’’: the working contract',
        kind: 'definition',
        statement: '**‘‘Almost Containers’’.** array, bitset, tuple and more. You can claim this section when you can use `array<T, N>` as a zero-overhead replacement for built-in arrays — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 34 (Memory and Resources); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Bit surgery with a verified trace',
        problem: "Starting from `bitset<8> b {0x5A}` (binary 0101 1010), compute `b.count()`, the effect of `b <<= 2`, the new `to_ulong()` and count, and finally `b & bitset<8>{0x0F}`.",
        steps: [
          { label: 'Count', text: "0x5A = 90 = 0101 1010. Set bits sit at positions 1, 3, 4, 6 (position 0 = rightmost), so `b.count()` is 4." },
          { label: 'Shift', text: "Left two: bits move to positions 3, 5, 6, 8 — and position 8 falls off the end — leaving 0110 1000. Check in integers: 90 << 2 = 360, truncated to 8 bits = 104 = 0x68." },
          { label: 'Re-count', text: "0110 1000 has set bits at 3, 5, 6: the new `count()` is 3." },
          { label: 'Mask', text: "0110 1000 & 0000 1111 = 0000 1000 = 8. Every intermediate is reproducible by hand." },
        ],
        result: "count 4 → shift → `to_ulong()` 104 with count 3 → masked value 8; all pure value semantics, no loop written.",
      },
      {
        title: 'Unpacking with tie',
        problem: "A function returns `make_tuple(\"Kim\", 7, 1.75)`. Bind the three components to existing variables `s`, `n`, `h` in one statement.",
        steps: [
          { label: 'The idiom', text: "`string s; int n; double h;` then `tie(s, n, h) = make_tuple(\"Kim\", 7, 1.75);` — `tie` builds a `tuple` of *references*, so the assignment writes through to `s`, `n` and `h`." },
          { label: 'After', text: "`s` is \"Kim\", `n` is 7, `h` is 1.75. The returned tuple's `get<1>` has type `int`, not `int&`, because `make_tuple` decays and copies its arguments." },
          { label: 'Skipping', text: "`tie(ignore, n, h) = ...` leaves the string alone — `ignore` is the placeholder component." },
        ],
        result: "One statement, three variables set — the canonical multiple-return-value pattern of the C++11 library.",
      },
    ],
    keyTakeaways: [
      "`array<T, N>` gives the built-in array's cost with container behavior: no decay, known size, algorithm-compatible, zero heap traffic.",
      "`bitset<N>` is value-semantics bit arithmetic — shifts, masks, counts and conversions — with size fixed at compile time and no iterators.",
      "`tuple` is the heterogeneous fixed-size sequence: `get<i>` at compile time, `make_tuple` to build, `tie` to unpack.",
    ],
    quiz: [
      {
        q: "Which is NOT true of `array<int, 4>` compared with `int[4]`?",
        options: [
          "It stores its elements inside itself — no heap allocation",
          "It knows its size via `size()`",
          "It decays to `int*` when passed to a function",
          "It works with range-for and STL algorithms",
        ],
        answer: 2,
        explanation: "Refusing to decay is one of `array`'s main improvements — sizes survive passing.",
      },
      {
        q: "`bitset<8>(0x5A).count()` is:",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explanation: "0x5A = 0101 1010 — four set bits.",
      },
      {
        q: "You can reach a `tuple`'s elements:",
        options: [
          "through a range-for loop",
          "with an index known at compile time, via `get<i>`",
          "with `.at(i)`, checked at runtime",
          "only by copying them into a `pair`",
        ],
        answer: 1,
        explanation: "Elements have different types, so which `get<i>` to call must be decidable before the program runs.",
      },
      {
        q: "`vector<bool>` earns the 'almost container' label because:",
        options: [
          "it cannot grow",
          "indexing yields a proxy, not a `bool&`",
          "it has no iterators",
          "its size is a template parameter",
        ],
        answer: 1,
        explanation: "Packing bits means you cannot return a reference to one bit — the proxy breaks the container contract.",
      },
    ],
  },

  // ---------------------------------------------------------------- 34.3
  {
    sectionId: 'cpp-ch34-s3',
    readingTime: 8,
    intro: "This is the chapter's centerpiece: pointer types that carry ownership in the type itself. `unique_ptr` makes one owner a compile-time fact; `shared_ptr` adds a counted-control-block regime for genuinely shared objects; `weak_ptr` observes without owning. Together they retire almost every reason to write `delete` in application code.",
    objectives: [
      "Choose between `unique_ptr`, `shared_ptr` and `weak_ptr` by the ownership shape of the problem",
      "Trace a shared object's use count through copies, resets and scope exits",
      "Recognize the classic ownership bugs: cycles, `get()`-rebinding and raw `this`",
    ],
    concepts: [
      {
        term: 'unique_ptr',
        kind: 'definition',
        statement: "**`unique_ptr<T>`** owns an object exclusively: at most one `unique_ptr` refers to it, so copying is a compile-time error and ownership changes only by **move**. The object is destroyed when the `unique_ptr` is — scope end, container relocation, destruction of the enclosing object. With the default deleter it costs exactly one machine word — the same as a raw `T*`:\n```\nunique_ptr<Record> make() { return make_unique<Record>(\"Joe\", 42); }\nauto p = make();            // p owns the Record\nauto q = move(p);           // q owns it; p is now null\n```\nThere is an array form, `unique_ptr<T[]>`, so `new[]` has a safe home too.",
        detail: "Use it as the default: the first-choice holder of heap objects inside classes and the natural factory return type.",
      },
      {
        term: 'shared_ptr',
        kind: 'definition',
        statement: "**`shared_ptr<T>`** expresses **shared ownership**: any number of `shared_ptr`s may own the same object, and the object is destroyed when the *last* owner is. Each handle costs two words — one pointer to the object, one to a heap-allocated **control block** holding the strong count, the weak count and the deleter. Copying increments the strong count; destroying a handle decrements it, and the transition to zero destroys the object. `make_shared<T>(args...)` allocates the object and its control block in a single allocation; `use_count()` reports the current number of owners.",
        detail: "Shared ownership is a real design decision, not a default: it buys lifetime safety for objects whose death no single scope governs, at the price of the counter traffic and the control block.",
      },
      {
        term: 'weak_ptr',
        kind: 'definition',
        statement: "**`weak_ptr<T>`** observes an object owned by `shared_ptr`s without owning it: it points at the control block but never keeps the strong count nonzero. If the object dies, the `weak_ptr` **expires** — test with `expired()` or promote safely with `lock()`, which returns a `shared_ptr` (null if the object is gone):\n```\nstruct Node { weak_ptr<Node> next; };\nif (auto n = node.next.lock()) { /* safe: n keeps it alive */ }\n```\nWeak references are the standard cure for the two structures plain shared ownership cannot express: **cycles** and **caches**.",
        detail: "The lock-then-use pattern is not optional decoration: using an expired weak reference any other way is a race with destruction.",
      },
      {
        term: 'The ownership pitfalls',
        kind: 'insight',
        statement: "The ownership types fail only when their contracts are broken. Initializing a second owner from `p.get()` creates two independent control blocks for one object — a guaranteed double delete. Wrapping a raw `this` in a `shared_ptr` does the same; a class that must hand out shared ownership of itself should inherit `enable_shared_from_this` and call `shared_from_this()` instead. And a ring of `shared_ptr`s never reaches zero: somewhere in the cycle a `weak_ptr` must take over.",
        detail: "Every one of these bugs is an attempt to create ownership where the type already recorded it differently — the fix is to make the type tell the truth.",
      },
      {
        term: 'Resource Management Pointers: the working contract',
        kind: 'definition',
        statement: '**Resource Management Pointers.** unique_ptr, shared_ptr and weak_ptr. You can claim this section when you can choose between `unique_ptr`, `shared_ptr` and `weak_ptr` by the ownership shape of the problem — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 34 (Memory and Resources); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        caption: "Raw pointers versus a unique pointer. Left: three aliases point at one heap Widget — nothing in the type says who (if anyone) must delete it, so the two failure modes are a leak (nobody deletes) and a double delete (two do). Right: u2 is the single owner; the dashed box is u1, emptied by the move that handed u2 its object; copying u2 is rejected at compile time. The object dies exactly when its owner does — destruction by scope, not by discipline. One word per handle: a unique pointer costs the same as a raw one.",
        svg: `<svg viewBox="0 0 720 330" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Raw pointer aliases versus unique pointer ownership"><defs><marker id="uar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><line x1="356" y1="14" x2="356" y2="318" stroke="currentColor" stroke-width="1" opacity="0.15"/><text x="180" y="34" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">raw pointers: three aliases, no owner</text><rect x="52" y="56" width="66" height="32" rx="4" fill="currentColor" opacity="0.08"/><text x="85" y="76" font-size="12" fill="currentColor" text-anchor="middle">r1</text><rect x="52" y="126" width="66" height="32" rx="4" fill="currentColor" opacity="0.08"/><text x="85" y="146" font-size="12" fill="currentColor" text-anchor="middle">r2</text><rect x="52" y="196" width="66" height="32" rx="4" fill="currentColor" opacity="0.08"/><text x="85" y="216" font-size="12" fill="currentColor" text-anchor="middle">r3</text><rect x="240" y="112" width="104" height="64" rx="6" fill="currentColor" opacity="0.12" stroke="currentColor"/><text x="292" y="138" font-size="12" fill="currentColor" text-anchor="middle">Widget</text><text x="292" y="156" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.8">on the heap</text><g stroke="currentColor" stroke-width="1.6" marker-end="url(#uar)"><line x1="118" y1="72" x2="238" y2="128"/><line x1="118" y1="142" x2="238" y2="144"/><line x1="118" y1="212" x2="238" y2="160"/></g><text x="180" y="266" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">who must delete?</text><text x="180" y="284" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">nobody → leak · two of them → double delete</text><text x="540" y="34" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">unique pointer: exactly one owner</text><rect x="392" y="66" width="128" height="40" rx="4" fill="currentColor" opacity="0.14" stroke="currentColor"/><text x="456" y="90" font-size="12" fill="currentColor" text-anchor="middle">u2 (owner)</text><rect x="596" y="102" width="100" height="66" rx="6" fill="currentColor" opacity="0.12" stroke="currentColor"/><text x="646" y="128" font-size="12" fill="currentColor" text-anchor="middle">Widget</text><text x="646" y="146" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.8">on the heap</text><g stroke="currentColor" stroke-width="1.8" marker-end="url(#uar)"><line x1="520" y1="86" x2="594" y2="126"/></g><text x="556" y="66" font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle">owns · deletes on exit</text><rect x="392" y="170" width="128" height="36" rx="4" fill="none" stroke="currentColor" stroke-dasharray="4 4" opacity="0.55"/><text x="456" y="192" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.6">u1 = null</text><g stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.7" marker-end="url(#uar)"><line x1="452" y1="168" x2="452" y2="112"/></g><text x="466" y="146" font-size="10.5" fill="currentColor" opacity="0.8">move</text><text x="540" y="244" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">copying u2 is a compile-time error</text><text x="540" y="262" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">destruction of the owner = destruction of the object</text><text x="360" y="316" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">one word per unique pointer — same size as a raw pointer</text></svg>`,
        afterConcept: 1,
      },
      {
        caption: "Every shared pointer is two words: one to the object, one to the heap control block it shares with the other owners. p1 and p2 both point at the Record *and* at the control block, whose strong count of 2 reflects exactly them; the weak pointer w points only at the control block — it observes without owning and can never keep the Record alive. When the strong count drops to zero the Record is destroyed; the control block lingers until the weak count also drops (implementations commonly hold one extra weak unit, a sentinel, while any owner lives). `make_shared` would fuse the Record and the control block into a single allocation.",
        svg: `<svg viewBox="0 0 720 400" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Shared pointer control block layout"><defs><marker id="cbar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><rect x="18" y="42" width="184" height="122" rx="8" fill="none" stroke="currentColor" stroke-dasharray="5 4" opacity="0.45"/><text x="30" y="60" font-size="11" fill="currentColor" opacity="0.7">main's stack</text><rect x="32" y="72" width="156" height="74" rx="5" fill="currentColor" opacity="0.1" stroke="currentColor"/><text x="110" y="92" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">shared pointer p1</text><rect x="42" y="102" width="64" height="26" rx="3" fill="none" stroke="currentColor"/><text x="74" y="119" font-size="10.5" fill="currentColor" text-anchor="middle">obj</text><rect x="114" y="102" width="64" height="26" rx="3" fill="none" stroke="currentColor"/><text x="146" y="119" font-size="10.5" fill="currentColor" text-anchor="middle">ctrl</text><text x="110" y="158" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">two words per handle</text><rect x="18" y="182" width="184" height="122" rx="8" fill="none" stroke="currentColor" stroke-dasharray="5 4" opacity="0.45"/><text x="30" y="200" font-size="11" fill="currentColor" opacity="0.7">worker's stack</text><rect x="32" y="212" width="156" height="74" rx="5" fill="currentColor" opacity="0.1" stroke="currentColor"/><text x="110" y="232" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">shared pointer p2</text><rect x="42" y="242" width="64" height="26" rx="3" fill="none" stroke="currentColor"/><text x="74" y="259" font-size="10.5" fill="currentColor" text-anchor="middle">obj</text><rect x="114" y="242" width="64" height="26" rx="3" fill="none" stroke="currentColor"/><text x="146" y="259" font-size="10.5" fill="currentColor" text-anchor="middle">ctrl</text><rect x="222" y="182" width="172" height="122" rx="8" fill="none" stroke="currentColor" stroke-dasharray="5 4" opacity="0.45"/><text x="234" y="200" font-size="11" fill="currentColor" opacity="0.7">observer's stack</text><rect x="238" y="212" width="140" height="74" rx="5" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-dasharray="4 3"/><text x="308" y="232" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">weak pointer w</text><rect x="276" y="246" width="64" height="26" rx="3" fill="none" stroke="currentColor"/><text x="308" y="263" font-size="10.5" fill="currentColor" text-anchor="middle">ctrl</text><text x="308" y="298" font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">no obj word at all</text><rect x="496" y="48" width="196" height="118" rx="6" fill="currentColor" opacity="0.12" stroke="currentColor"/><text x="594" y="70" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">Record (heap)</text><text x="594" y="92" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">name · 24 bytes</text><text x="594" y="110" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">value · 8 bytes</text><text x="594" y="128" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">… rest of the object</text><rect x="496" y="206" width="196" height="150" rx="6" fill="currentColor" opacity="0.12" stroke="currentColor"/><text x="594" y="228" font-size="12.5" font-weight="600" fill="currentColor" text-anchor="middle">control block</text><text x="594" y="252" font-size="11.5" fill="currentColor" text-anchor="middle">strong count = 2</text><text x="594" y="274" font-size="11.5" fill="currentColor" text-anchor="middle">weak count = 1</text><text x="594" y="296" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.8">deleter</text><text x="594" y="318" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.8">allocator</text><g stroke="currentColor" stroke-width="1.7" marker-end="url(#cbar)"><line x1="106" y1="128" x2="494" y2="96"/><line x1="106" y1="268" x2="494" y2="140"/><line x1="178" y1="115" x2="494" y2="286"/><line x1="178" y1="255" x2="494" y2="308"/></g><g stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4" opacity="0.8" marker-end="url(#cbar)"><line x1="340" y1="259" x2="494" y2="252"/></g><text x="300" y="240" font-size="10.5" fill="currentColor" opacity="0.75">observes only</text><text x="360" y="376" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">the last strong release destroys the Record;</text><text x="360" y="392" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">the last weak release frees the control block</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'The use-count ledger',
        problem: "Trace the strong use count through `auto p = make_shared<int>(99);`, an inner scope that copies it into `q`, the scope exit, and then `p.reset()`. What runs, and when?",
        steps: [
          { label: 'Create', text: "`make_shared` builds the `int` and its control block in one allocation: strong count 1." },
          { label: 'Copy', text: "`auto q = p;` increments the count — 2. Two owners, one object; destruction is committed to neither of them individually." },
          { label: 'Inner scope ends', text: "`q` is destroyed: count decrements to 1. The `int` survives — no destructor runs." },
          { label: 'Reset', text: "`p.reset()`: 1 → 0 — the transition that destroys the `int`. The control block would linger until any weak observers also expire." },
        ],
        result: "Counts 1 → 2 → 1 → 0; the `int`'s destructor runs exactly once, at the final reset — the object dies with its last owner, no sooner.",
      },
      {
        title: 'The ring that never dies',
        problem: "Two nodes hold each other through `shared_ptr`: `a->next = b; b->next = a;`, with `a` and `b` themselves `shared_ptr`s in `main`. When `main` ends, does anything run?",
        steps: [
          { label: 'Enter the end', text: "Node A's strong count is 2 (`a` plus `b->next`); node B's is 2 as well, by symmetry." },
          { label: 'Locals die', text: "`a` and `b` are destroyed: each count drops to 1. Both nodes are now unreachable — but each is still referenced by the other's `next`." },
          { label: 'Nothing reaches zero', text: "No count ever hits 0: neither destructor ever runs, and the two nodes (and everything they own) leak. `use_count()` on each would report 1 forever." },
          { label: 'Fix', text: "Declare `next` as `weak_ptr<Node>` and access it as `if (auto n = next.lock()) { ... }` — a temporary `shared_ptr` keeps the node alive exactly for the duration of the use." },
        ],
        result: "Shared ownership of a cycle is an unreachable island; one `weak_ptr` in the ring breaks the invariant and the leak disappears.",
      },
    ],
    keyTakeaways: [
      "`unique_ptr` is the default owner: one handle, zero overhead, copying disabled, moving transfers — use it unless ownership is genuinely shared.",
      "`shared_ptr` buys shared lifetime with a two-word handle and a control block; `use_count()` traces it, `make_shared` makes it one allocation.",
      "`weak_ptr` observes without owning — `lock()` to use — and is the only cure for cycles and caches; `get()`-rebinding and raw `this` create the double deletes.",
    ],
    quiz: [
      {
        q: "Why is copying a `unique_ptr` a compile-time error?",
        options: [
          "Because it would be ambiguous which copy deletes",
          "Because unique pointers are immutable",
          "Because it has no constructor at all",
          "Because its use count cannot be duplicated",
        ],
        answer: 0,
        explanation: "Two owners would mean two eventual deletes — the type forbids the state instead of debugging it later.",
      },
      {
        q: "A `shared_ptr` costs two machine words because:",
        options: [
          "it caches the pointee's size",
          "it stores the object pointer and the control-block pointer",
          "the deleter must be inlined",
          "it must support arrays",
        ],
        answer: 1,
        explanation: "Owners need both: where the object is, and where the shared bookkeeping is.",
      },
      {
        q: "`weak_ptr::lock()` returns:",
        options: [
          "a `bool` saying whether the object exists",
          "the raw pointer",
          "a `shared_ptr` — null if the object expired",
          "a reference to the object",
        ],
        answer: 2,
        explanation: "Promotion is the safe pattern: while the returned `shared_ptr` lives, the object cannot be destroyed under you.",
      },
      {
        q: "After `auto p = make_shared<X>(); auto q = shared_ptr<X>(p.get());` the program:",
        options: [
          "is safe: q shares ownership with p",
          "has two control blocks for one object — a double delete",
          "leaks the control block",
          "does not compile",
        ],
        answer: 1,
        explanation: "`get()` hands out a raw pointer; constructing a fresh owner from it builds a second, independent control block.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The control block under concurrency: counts, the memory model, and why the destructor runs exactly once',
        blocks: [
          {
            kind: 'para',
            body: "'Is `shared_ptr` thread-safe?' splits into two questions with different answers. (a) *Many threads manipulating distinct `shared_ptr` objects that share a target* — copying here, resetting there: safe, and the most common pattern in message-passing code. (b) *Threads racing on the same `shared_ptr` object* — one assigns while another copies: a data race, exactly as it would be for an `int`; the only remedies are external synchronization or the atomic interface (`atomic<shared_ptr<T>>`, a C++20 addition that postdates the book). The interesting theorem hides inside (a): with no lock and no coordination beyond the counter itself, the object's destructor runs **exactly once**, on a well-defined thread, and observes every completed use of the object. That is not luck — it is a small memory-model argument, and it is what makes lock-free shared ownership usable at all.",
          },
          {
            kind: 'theorem',
            heading: 'Single destruction under a shared counter',
            body: "Let an object $x$ be owned through a control block whose strong count is a signed integer modified only by atomic read-modify-write operations — one increment per copy of an owning handle, one decrement per destroyed handle. Then: (i) exactly one decrement observes the pre-value 1, and the destructor of $x$ runs exactly once, on the thread that performed that decrement; (ii) the deleter call happens-after every access to $x$ that happened-before the destruction of some owning handle; (iii) the control block outlives $x$ — it is freed only when the weak count drops to zero, and implementations commonly keep one extra weak unit (a sentinel standing for 'the object still exists') so that weak pointers can always safely read the block.",
          },
          {
            kind: 'proof',
            heading: 'Modification order, release sequences, and the acquire fence',
            body: "All increments and decrements are atomic RMWs on one integer, so they are totally ordered: the counter has a single **modification order** $M$. The count starts at 1 when the first handle is created, each event changes it by $\\pm 1$, and each RMW reads the immediately preceding value in $M$ — no update is ever lost. A decrement can store 0 only from a pre-value of 1, and by induction along $M$ the value 0 is stored at most once: claim (i). For (ii), the implementation discipline is: **increments may be relaxed** (a new handle is only ever obtained through other synchronization — thread creation, a mutex, an atomic pointer — so its ordering is somebody else's problem), but **every decrement is a release RMW**. A release store heads a release sequence, and an RMW that reads from a release sequence continues it; chaining this along $M$, the final decrement — the one that stores 0 — reads from a chain that contains *every* earlier decrement, each a release. The winning thread then executes an **acquire fence before invoking the deleter** (this is the pattern in libstdc++ and libc++ alike). Acquire-after-release-sequence yields synchronizes-with each earlier decrement, so by transitivity every write that happened-before any earlier decrement — in particular each owner's completed uses of $x$, which precede that owner's own decrement in program order — happens-before the deleter call. Claim (iii) is the sentinel design: the weak count cannot reach zero while the strong count is nonzero, so a `weak_ptr` never outlives the block it reads.",
          },
          {
            kind: 'example',
            heading: 'A six-event ledger',
            body: "`main` owns a `Record` (count 1) and passes a copy to a spawned worker (2). The worker copies its handle into a local cache (3). The cache entry is dropped (2). `main` resets its own handle (1). The worker function returns, destroying its handle: 1 → 0, and `~Record()` runs **on the worker thread** — destruction happens wherever the final release happens, and no implementation migrates it. Six events, counts 1 → 2 → 3 → 2 → 1 → 0, one destructor, zero locks. And by the theorem, everything `main` and the worker did to the `Record` before dropping their handles is visible to that destructor.",
          },
          {
            kind: 'remark',
            heading: 'The use count is for humans, not for programs',
            body: "The standard's note on `use_count()` says the value is an **approximation** in multi-threaded environments — other threads may be mid-copy or mid-destroy, so the number you read describes a past instant at best. The broken idiom this licenses is tempting: `if (p.use_count() == 1) { /* 'exclusively mine' — mutate in place */ }`. Two threads can each observe a stale 1, or the count can change between test and use. The rule: `use_count()` is a debugging and logging aid; control flow never branches on it. Likewise `shared_ptr` itself is not atomic — the C++11-era free functions `atomic_load`/`atomic_store` on `shared_ptr` were the interim answer and were replaced in C++20 by a real `atomic<shared_ptr<T>>` with load, store and exchange.",
          },
          {
            kind: 'application',
            heading: 'Handing payloads across threads',
            body: "The theorem is what makes the standard idiom sound: a producer hands a `shared_ptr<const Message>` to a consumer queue by value; the copy is the safe handoff, and whichever thread drops the last handle pays for the destructor, seeing all prior writes. `make_shared` tightens it further — one allocation for payload plus control block, one cache line to contend on, better locality. `weak_ptr` completes the toolkit for caches: entries expire without coordination. The costs to respect: every copy and destroy is an atomic RMW on a *shared* cache line, so under heavy cross-thread copying the counter itself becomes the bottleneck — the line ping-pongs between cores. That is why well-tuned pipelines copy the handle exactly once per hop and carry immutable (`const`) payloads: shared ownership of things nobody mutates has no visibility questions left to answer.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 34.4
  {
    sectionId: 'cpp-ch34-s4',
    readingTime: 5,
    intro: "Beneath every container sits an allocator: the strategy object that turns 'I need room for n Ts' into raw bytes. The default strategy just forwards to the global new/delete machinery; the point of the allocator concept is that it is a customization point — pools, arenas and shared memory can be swapped in without touching the container's code.",
    objectives: [
      "State the allocator interface and its strict allocate/construct/destroy/deallocate pairing",
      "Explain why allocation and initialization are separated",
      "Say where allocators plug into the container templates and what `scoped_allocator_adaptor` is for",
    ],
    concepts: [
      {
        term: 'The allocator concept',
        kind: 'definition',
        statement: "An **allocator** is the strategy a container uses to obtain raw memory for its elements. The default, `allocator<T>`, forwards to the global allocation machinery; the concept exists so that **pool, arena, shared-memory or counted** strategies can be substituted without rewriting `vector` or `list`. Allocation is separated from construction: what an allocator hands back is raw memory, not objects — the container builds and destroys the elements itself.",
        detail: "This separation is why one `vector` implementation serves both ordinary heap use and real-time, pool-based use: the policy is a parameter, not a property of the container.",
      },
      {
        term: 'The interface',
        kind: 'method',
        statement: "`allocator<T>` offers exactly the raw layer:\n```\nallocator<double> a;\ndouble* p = a.allocate(4);          // room for 4 doubles; nothing constructed\nfor (int i = 0; i < 4; ++i) a.construct(p + i, 1.0 / (i + 1));\nfor (int i = 0; i < 4; ++i) a.destroy(p + i);\na.deallocate(p, 4);                 // n must match the allocate call\n```\nThe pairing rules are strict: never deallocate what you did not allocate, never destroy what you did not construct — and never *use* what you did not construct.",
        detail: "Every standard container is a disciplined client of exactly these four operations; §34.6 is that discipline written out.",
      },
      {
        term: 'Where allocators plug in',
        kind: 'insight',
        statement: "Every standard container takes an allocator as a defaulted template parameter — `vector<T, allocator<T>>`, `list<T, allocator<T>>` — so the strategy is chosen *per container type*, not globally. `scoped_allocator_adaptor` pushes one policy down through nested containers, so that a `vector` of `list`s uses the same pool for both levels; and `allocate_shared` combines a custom allocator with shared ownership, placing the control block in your arena too.",
        detail: "The catch to remember: a container and its allocator are wired at the type level, which is why allocators are conventionally stateless (empty) types — an empty class costs nothing per element, and the container can copy handles freely.",
      },
      {
        term: 'Allocators: the working contract',
        kind: 'definition',
        statement: '**Allocators.** Customizing allocation. You can claim this section when you can state the allocator interface and its strict allocate/construct/destroy/deallocate pairing — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 34 (Memory and Resources); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Allocators: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, explain why allocation and initialization are separated. Then, say where allocators plug into the container templates and what `scoped_allocator_adaptor` is for. Finally, test the outcome against the section promise: An allocator is a container’s memory strategy, customizable per container through its template parameter.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'The arena ledger',
        problem: "A server creates and destroys 10,000 nodes of 32 bytes each with the default allocator, whose per-allocation bookkeeping costs about 16 bytes on a 64-bit heap. What does an arena allocator that pre-allocates one block change?",
        steps: [
          { label: 'Default', text: "10,000 allocations of 32 bytes each consume $32 + 16 = 48$ bytes of heap machinery: 320,000 bytes of payload riding on 160,000 bytes (50%) of bookkeeping — plus 10,000 allocator calls." },
          { label: 'Arena', text: "One allocation of 320,000 bytes (plus, say, a 64-byte header). Each 'allocation' is a pointer bump inside the block; per-node overhead: 0 bytes, per-node calls: 1 pointer addition." },
          { label: 'The trade', text: "Nodes of an arena are freed only when the *whole* arena dies — individual nodes cannot be returned piecemeal. That is the classic pool bargain: speed and compactness in exchange for deferred release." },
        ],
        result: "≈ 160,000 bytes and 9,999 allocator calls saved; deallocation deferred to arena teardown — the deal that making allocators a template parameter lets each container choose.",
      },
      {
        title: 'Working through allocators',
        problem: 'Customizing allocation. Your task: state the allocator interface and its strict allocate/construct/destroy/deallocate pairing.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: state the allocator interface and its strict allocate/construct/destroy/deallocate pairing. Write down the guarantee you will rely on — for this chapter it is: An allocator is a container’s memory strategy, customizable per container through its template parameter.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::unique_ptr<Node> p(new Node); auto q = std::move(p);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain why allocation and initialization are separated — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The interface is four calls — `allocate`, `construct`, `destroy`, `deallocate` — with strict pairing rules; what it hands out is raw memory, never objects. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: An allocator is a container’s memory strategy, customizable per container through its template parameter. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "An allocator is a container's memory strategy, customizable per container through its template parameter.",
      "The interface is four calls — `allocate`, `construct`, `destroy`, `deallocate` — with strict pairing rules; what it hands out is raw memory, never objects.",
      "`scoped_allocator_adaptor` propagates one strategy through nested containers; stateless allocators keep the policy free.",
    ],
    quiz: [
      {
        q: "`allocator<T>::allocate(n)` returns:",
        options: [
          "$n$ constructed `T` objects",
          "raw memory for $n$ `T`s, with nothing constructed",
          "a container of $n$ elements",
          "a null pointer if memory is short",
        ],
        answer: 1,
        explanation: "Construction is a separate, explicit step — that separation is the entire point of the layer.",
      },
      {
        q: "Which pairing does the allocator discipline require?",
        options: [
          "`allocate` ↔ `deallocate` with the same $n$; `construct` ↔ `destroy`",
          "`allocate` ↔ `construct`",
          "`new` ↔ `free`",
          "`allocate` ↔ `destroy`",
        ],
        answer: 0,
        explanation: "Two independent pairings, each exact: memory in/out, objects in/out.",
      },
      {
        q: "Containers accept an allocator template parameter mainly to:",
        options: [
          "make containers smaller",
          "let allocation strategy be customized without rewriting container code",
          "support garbage collection only",
          "avoid exceptions",
        ],
        answer: 1,
        explanation: "It is a customization point — pools, arenas and shared memory slot in behind the same container code.",
      },
    ],
  },

  // ---------------------------------------------------------------- 34.5
  {
    sectionId: 'cpp-ch34-s5',
    readingTime: 5,
    intro: "C++11 carried an interface for optional, conservative garbage collection: rules about what a traced pointer may look like, and two functions for promising that a disguised pointer still counts. No implementation was ever required to collect, and C++23 removed the interface outright — but the design lesson, and the reason it failed to catch on, are worth the section.",
    objectives: [
      "Explain pointer safety — relaxed, preferred and strict — and what `get_pointer_safety()` reports",
      "Use `declare_reachable` to protect a pointer stored in untraceable form",
      "Say why the library's real answer to collection is RAII, not GC",
    ],
    concepts: [
      {
        term: 'Pointer safety',
        kind: 'definition',
        statement: "The interface classifies implementations by what they assume about pointers: in **relaxed** safety, a collector is conservative — it treats anything that *might* be a pointer as one, so unreachable objects survive by accident; in **strict** safety, the implementation may assume all pointers are traceably derived, so a pointer hidden in an integer can be ignored and its object collected; **preferred** asks for relaxed semantics with an effort to collect. `get_pointer_safety()` reports which regime you are running under.",
        detail: "In every regime, ordinary C++ pointers are safe; the distinction only matters for disguised or disguised-away references.",
      },
      {
        term: 'declare_reachable',
        kind: 'method',
        statement: "`declare_reachable(p)` promises the collector that the object `p` points to is live, even though no traceable pointer to it currently exists — the lifeline for a reference stored in disguised form (as an integer, XOR-compacted, or shipped through a file). `undeclare_reachable(p)` retracts the promise and conveniently returns the re-typed pointer for further use.",
        detail: "Reachability declarations are the only sanctioned way to hide a pointer from a strict collector — and, symmetrically, a way to *pin* an object that a conservative collector would otherwise keep anyway.",
      },
      {
        term: 'The C++ stance',
        kind: 'insight',
        statement: "The interface exists so that an *optional, conservative* collector could be added to an implementation without changing the language: the ABI was chosen so tracing can work at all. But no mainstream implementation ships a required collector, and C++23 removed the interface (a 2014 book describing machinery the language later abandoned). Stroustrup's practical reading stands: write code as if no collector exists — **RAII, not GC, is C++'s answer to lifetime**.",
        detail: "Deterministic destruction is not a limitation the GC interface was fixing; it is a feature the C++ model is built around — destructors as scope-bound logic.",
      },
      {
        term: 'The Garbage Collection Interface: the working contract',
        kind: 'definition',
        statement: '**The Garbage Collection Interface.** Optional GC support. You can claim this section when you can explain pointer safety — relaxed, preferred and strict — and what `get_pointer_safety()` reports — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 34 (Memory and Resources); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'The Garbage Collection Interface: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, use `declare_reachable` to protect a pointer stored in untraceable form. Then, say why the library’s real answer to collection is RAII, not GC. Finally, test the outcome against the section promise: Pointer safety classifies collectors: conservative (relaxed) keeps anything that might be referenced; strict may collect behind hidden pointers.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Hiding a pointer from the mark phase',
        problem: "A program creates `X* p = new X;` but stores it as `uintptr_t hidden = reinterpret_cast<uintptr_t>(p);` inside a table of numbers, dropping all real references. A tracing collector runs its mark phase. What happens, and what does `declare_reachable` change?",
        steps: [
          { label: 'Mark', text: "The collector scans roots — registers, stacks, globals — for values that look like pointers, then follows those transitively." },
          { label: 'Strict regime', text: "`hidden` looks like a large integer; a strict collector treats no reference to X as live and reclaims it — while the program later dereferences `hidden` at its peril." },
          { label: 'Conservative regime', text: "A conservative collector *might* keep X if some stray word happens to equal its address — which is exactly the unreliability the interface addresses: correctness by coincidence." },
          { label: 'The fix', text: "`declare_reachable(p)` pins X: the collector treats it as a root, whatever the table looks like, until the matching `undeclare_reachable(p)`." },
        ],
        result: "Without the declaration, X's survival depends on the pointer-safety regime and coincidence; with it, survival is guaranteed — and collection deferred even if the program genuinely forgot X.",
      },
      {
        title: 'Working through the garbage collection interface',
        problem: 'Optional GC support. Your task: explain pointer safety — relaxed, preferred and strict — and what `get_pointer_safety()` reports.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain pointer safety — relaxed, preferred and strict — and what `get_pointer_safety()` reports. Write down the guarantee you will rely on — for this chapter it is: Pointer safety classifies collectors: conservative (relaxed) keeps anything that might be referenced; strict may collect behind hidden pointers.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::unique_ptr<Node> p(new Node); auto q = std::move(p);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — use `declare_reachable` to protect a pointer stored in untraceable form — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `declare_reachable`/`undeclare_reachable` are the promise pair for references stored in untraceable form. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Pointer safety classifies collectors: conservative (relaxed) keeps anything that might be referenced; strict may collect behind hidden pointers. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "Pointer safety classifies collectors: conservative (relaxed) keeps anything that might be referenced; strict may collect behind hidden pointers.",
      "`declare_reachable`/`undeclare_reachable` are the promise pair for references stored in untraceable form.",
      "The GC interface was optional machinery, removed in C++23 — C++'s real lifetime discipline is RAII.",
    ],
    quiz: [
      {
        q: "`get_pointer_safety()` returning `pointer_safety::strict` means:",
        options: [
          "the heap is never collected",
          "the implementation may assume all pointers are traceably derived, so hidden pointers risk collection",
          "all pointers must be declared reachable",
          "shared ownership is required",
        ],
        answer: 1,
        explanation: "Strict safety licenses precise collection: untraceable references are simply not references.",
      },
      {
        q: "`declare_reachable(p)` exists so that:",
        options: [
          "any object can be made immortal",
          "a program storing a pointer in untraceable form can promise the collector the object is live",
          "the collector can find the heap",
          "weak references become strong",
        ],
        answer: 1,
        explanation: "It is the escape hatch for disguised references — a promise that substitutes for traceability.",
      },
      {
        q: "The chapter's practical stance on relying on this interface:",
        options: [
          "use it everywhere for safety",
          "C++ requires a collector, so learn it",
          "write as if no collector exists — RAII is the C++ answer; the interface was removed in C++23",
          "it replaces shared ownership",
        ],
        answer: 2,
        explanation: "No mainstream implementation requires collection, and the interface is gone from the language.",
      },
    ],
  },

  // ---------------------------------------------------------------- 34.6
  {
    sectionId: 'cpp-ch34-s6',
    readingTime: 5,
    intro: "Between the allocator's raw bytes and real objects lies the discipline of uninitialized memory: the exact rules for constructing in raw storage and destroying what was constructed. Application code should never touch this layer — but it is how every container works, and knowing it explains both `vector`'s performance tricks and its exception guarantees.",
    objectives: [
      "State the five-stage life of a heap element and its strict pairing rules",
      "Use `uninitialized_copy` and `uninitialized_fill` as the bridge from bytes to objects",
      "Explain why separating allocation from construction buys performance and exception safety",
    ],
    concepts: [
      {
        term: 'The raw-storage discipline',
        kind: 'law',
        statement: "Raw memory from an allocator holds *nothing* yet. The full life of a heap element is: **allocate** the memory → **construct** the object on it → use it → **destroy** the object → **deallocate** the memory. The pairing is strict: destroying an unconstructed region, using a destroyed one, or deallocating with a count other than the one allocated is undefined behavior. Every container implements exactly this protocol on your behalf.",
        detail: "The discipline is a state machine — raw, constructed, dead — and each library call is one labeled arrow. Skip an arrow and every later step is undefined.",
      },
      {
        term: 'The uninitialized algorithms',
        kind: 'method',
        statement: "`uninitialized_copy(first, last, out)` copies the range `[first, last)` into *raw* memory at `out`, constructing as it goes; `uninitialized_fill(first, last, v)` constructs copies of `v` over the whole raw range; `uninitialized_fill_n` is the count form. They are the bridge between an allocator's bytes and real objects:\n```\nauto q = a.allocate(n);\nuninitialized_fill(q, q + n, 0.0);   // n doubles, all constructed\nfor (auto e = q; e < q + n; ++e) a.destroy(e);\na.deallocate(q, n);\n```\n`vector`'s growth is precisely an `uninitialized_copy` of the old elements into a larger buffer.",
        detail: "If a construction throws mid-way, the algorithm destroys the elements it already made — leaving the remaining memory raw, as it found it.",
      },
      {
        term: 'Why separate allocation from initialization',
        kind: 'insight',
        statement: "Two independent reasons. **Cost**: `reserve(n)` buys room for $n$ elements but constructs zero — default-constructing a million `string`s you are about to overwrite would be pure waste. **Exception safety**: a container tracks how many elements it *constructed*; on a throwing operation only those are destroyed, and the still-raw remainder is returned wholesale. Keeping the constructed count and the allocated capacity distinct is what makes `vector`'s strong guarantee affordable.",
        detail: "The book's own implementation sketches of containers are the best reading here: pages of bookkeeping exist precisely to know which elements are real.",
      },
      {
        term: 'Uninitialized Memory: the working contract',
        kind: 'definition',
        statement: '**Uninitialized Memory.** raw storage and its disciplined use. You can claim this section when you can state the five-stage life of a heap element and its strict pairing rules — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 34 (Memory and Resources); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Uninitialized Memory: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, use `uninitialized_copy` and `uninitialized_fill` as the bridge from bytes to objects. Then, explain why separating allocation from construction buys performance and exception safety. Finally, test the outcome against the section promise: A heap element’s life is allocate → construct → use → destroy → deallocate, with each pairing strict and each step explicit.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'vector grows from capacity 4 to 8',
        problem: "A `vector<int>` has capacity 4, all four slots constructed, and a fifth `push_back` arrives. With `sizeof(int)` = 4, trace the five steps the library performs.",
        steps: [
          { label: 'Allocate', text: "Raw memory for 8 ints: 32 bytes, nothing constructed. (`size()` is still 4, `capacity()` is now 8.)" },
          { label: 'Relocate', text: "`uninitialized_copy` constructs 4 ints in the new buffer — 16 bytes of real objects; the old buffer still holds the originals." },
          { label: 'Destroy', text: "The 4 old elements are destroyed — they are duplicates now, not garbage to leak." },
          { label: 'Release', text: "The old 16-byte buffer is deallocated; the vector points at the new one. `size()` = 4, `capacity()` = 8." },
          { label: 'Construct', text: "The pushed element is constructed at index 4 — the only construction that belongs to *this* push. Steps 1–4 are the relocation cost that doubling amortizes." },
        ],
        result: "32 B raw → 4 constructed copies → 16 B returned, and exactly one `push_back` construction — the relocation protocol in five moves.",
      },
      {
        title: 'Working through uninitialized memory',
        problem: 'raw storage and its disciplined use. Your task: state the five-stage life of a heap element and its strict pairing rules.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: state the five-stage life of a heap element and its strict pairing rules. Write down the guarantee you will rely on — for this chapter it is: A heap element’s life is allocate → construct → use → destroy → deallocate, with each pairing strict and each step explicit.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::unique_ptr<Node> p(new Node); auto q = std::move(p);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — use `uninitialized_copy` and `uninitialized_fill` as the bridge from bytes to objects — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `uninitialized_copy` and `uninitialized_fill` construct objects in raw memory — the bridge every container crosses during growth. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A heap element’s life is allocate → construct → use → destroy → deallocate, with each pairing strict and each step explicit. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "A heap element's life is allocate → construct → use → destroy → deallocate, with each pairing strict and each step explicit.",
      "`uninitialized_copy` and `uninitialized_fill` construct objects in raw memory — the bridge every container crosses during growth.",
      "Separating allocation from construction buys `reserve`'s zero-construction room and exception-safe partial cleanup.",
    ],
    quiz: [
      {
        q: "What does `uninitialized_copy(first, last, p)` do?",
        options: [
          "copies bytes as `memcpy` would",
          "constructs copies of the `[first, last)` elements in the raw memory at `p`",
          "allocates memory and then copies",
          "copies without constructing, leaving raw bytes",
        ],
        answer: 1,
        explanation: "Construct-in-place is the difference from plain copy: the destination starts as raw memory.",
      },
      {
        q: "Why does `reserve(n)` not construct $n$ elements?",
        options: [
          "to save the constructor calls — they would be overwritten anyway",
          "because reserve is only advisory",
          "to keep size and capacity equal",
          "because raw memory cannot hold objects",
        ],
        answer: 0,
        explanation: "Capacity is room; elements exist only when constructed. Paying for construction twice would be pure waste.",
      },
      {
        q: "On `vector` growth, the old buffer is deallocated only after:",
        options: [
          "its elements are destroyed and the new ones constructed",
          "`reserve` is called again",
          "size exceeds capacity a second time",
          "`clear()` runs",
        ],
        answer: 0,
        explanation: "The order is allocate new → construct copies → destroy old → release old; each step guards the next.",
      },
    ],
  },

  // ---------------------------------------------------------------- 34.7
  {
    sectionId: 'cpp-ch34-s7',
    readingTime: 4,
    intro: "The chapter closes with Stroustrup's rules of thumb — and they compress to a single idea: let types and scopes own resources, and treat every manual new/delete as a design smell to be justified, not a habit to be tolerated.",
    objectives: [
      "Apply the ownership-type decision order: container by value, `unique_ptr`, then `shared_ptr`",
      "Recognize when raw memory work belongs in a class rather than in application code",
      "Explain why observation, not ownership, is the surviving role of raw pointers",
    ],
    concepts: [
      {
        term: 'Own with types, not discipline',
        kind: 'law',
        statement: "Prefer containers to hold objects by value; where indirection is needed, prefer `unique_ptr` for single ownership — the default — and reach for `shared_ptr` only when ownership is genuinely shared. Every bare `new`/`delete` pair in application code is a hand-rolled destructor waiting to miss a path.",
        detail: "The decision order matters: shared ownership used as a default is how cycles and accidental immortality creep in.",
      },
      {
        term: 'If you must manage raw memory, wrap it',
        kind: 'law',
        statement: "Custom containers and arenas are legitimate — but then the allocate/construct/destroy/deallocate protocol of §34.6 lives inside one class, paired by construction; and owners are built with `make_shared`/`make_unique` so construction and acquisition cannot separate. Raw-storage code scattered through functions is not legitimate.",
        detail: "This is the same RAII argument one level down: even the resource machinery deserves exactly one owner.",
      },
      {
        term: 'Raw pointers observe',
        kind: 'insight',
        statement: "The surviving role of `T*` (and `T&`) is **observation without ownership**: passing 'look at this' into a function, iterating a range someone else owns. A raw pointer means 'I am not responsible for releasing this' — which is a *useful* statement precisely because the ownership types exist to make the opposite statement.",
        detail: "Verify with tools, not hope: sanitizer and valgrind runs find the leaks the type system could not express.",
      },
      {
        term: 'Shipping rule for memory and resources',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Decision order: container by value → `unique_ptr` → `shared_ptr` only for genuinely shared lifetimes.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for memory and resources',
        kind: 'method',
        statement: 'Take the objectives as review questions: apply the ownership-type decision order: container by value, `unique_ptr`, then `shared_ptr`? Then recognize when raw memory work belongs in a class rather than in application code? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Refactor by the rules',
        problem: "Apply the advice to `X* make() { return new X{args}; }`, whose callers sometimes `delete` the result — including one path that stores the pointer in two places.",
        steps: [
          { label: 'Single consumer', text: "If one caller consumes the result, change the factory to return `unique_ptr<X>` via `make_unique<X>(args)`. The two-place store now fails to compile — surfacing the design error at build time instead of at 3 a.m." },
          { label: 'Genuinely shared', text: "If the two stores are both long-lived owners, return `shared_ptr<X>` from `make_shared<X>(args)`; both stores copy the handle, and the last retirement destroys X." },
          { label: 'Mere observers', text: "The 'sometimes delete' caller that only looks should take `X&` or a raw `X*` — non-owning by convention, the one legitimate use of raw pointers." },
        ],
        result: "Every `new` disappeared from user code; each ownership shape is encoded in a type and enforced by the compiler.",
      },
      {
        title: 'Reviewing memory and resources code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the ownership-type decision order: container by value, `unique_ptr`, then `shared_ptr`.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Decision order: container by value → `unique_ptr` → `shared_ptr` only for genuinely shared lifetimes.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `std::unique_ptr<Node> p(new Node); auto q = std::move(p);`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: recognize when raw memory work belongs in a class rather than in application code. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Raw-memory protocol belongs inside exactly one owning class, never scattered through functions.' },
        ],
        result: 'The review ends with findings tied to reasons: Decision order: container by value → `unique_ptr` → `shared_ptr` only for genuinely shared lifetimes. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      "Decision order: container by value → `unique_ptr` → `shared_ptr` only for genuinely shared lifetimes.",
      "Raw-memory protocol belongs inside exactly one owning class, never scattered through functions.",
      "Raw pointers survive as the notation for observation without ownership — meaningful only because owners are typed.",
    ],
    quiz: [
      {
        q: "The chapter's default choice for a returned, heap-allocated object is:",
        options: ["a raw `X*` with a comment", "`auto_ptr`", "`unique_ptr`", "`weak_ptr`"],
        answer: 2,
        explanation: "Single ownership is the common case, and `unique_ptr` expresses it at zero cost — plus the array form for `new[]`.",
      },
      {
        q: "`shared_ptr` is the right tool when:",
        options: [
          "you want the fastest possible handle",
          "ownership is genuinely shared among several long-lived users",
          "you need to observe without owning",
          "the object lives on the stack",
        ],
        answer: 1,
        explanation: "Shared ownership is a real design decision, bought with a control block and counter traffic.",
      },
      {
        q: "A non-owning observer should use:",
        options: [
          "`shared_ptr` always, for safety",
          "a raw pointer or reference, by convention",
          "a second control block",
          "`get()` on another observer",
        ],
        answer: 1,
        explanation: "Observation without ownership is exactly the statement a raw `T*` or `T&` makes.",
      },
    ],
  },
]
