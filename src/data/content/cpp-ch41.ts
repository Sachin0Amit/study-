import type { SectionContent } from "../library"

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition — Chapter 41
// Concurrency: the memory model, atomics and volatile (Sections 41.1 – 41.5)
// Master study content.
// ============================================================================

export const cppCh41Content: SectionContent[] = [
  // ------------------------------------------------------------------ 41.1
  {
    sectionId: "cpp-ch41-s1",
    readingTime: 5,
    intro: "Concurrency — several activities progressing at the same time — has moved from an exotic niche to the default way hardware delivers performance: a phone has a handful of cores, a server thousands. This chapter is the machine-level half of the C++ concurrency story: what the hardware really does, why you cannot reason from any single machine's manual, and the layer of guarantees — the memory model — that ISO C++11 places between the two. Chapter 42 then builds the friendly tools (threads, mutexes, tasks) on this foundation.",
    objectives: [
      "Define concurrency and distinguish hardware parallelism from task-level concurrency",
      "State what a thread is, what it shares with its process and what it owns privately",
      "Name the engines that make observed memory order differ from program order, and locate the machine level relative to Chapter 42",
    ],
    concepts: [
      {
        term: "Concurrency",
        kind: "definition",
        statement: "**Concurrency** is the concept of multiple activities executing (or appearing to execute) at the same time. Its two sources are **hardware** — several cores executing instructions simultaneously, each possibly vectorizing — and **tasks** — many logical activities (sessions, jobs, animations) that a scheduler interleaves on fewer processors than there are tasks.",
        detail: "Concurrency is not parallelism: a concurrent program is correct whether the scheduler runs its activities strictly one at a time, interleaved, or in perfect parallel. Parallelism is a performance decision; concurrency is a program-structure decision.",
      },
      {
        term: "The thread: what is shared, what is private",
        kind: "definition",
        statement: "A **thread** (thread of execution) is the abstraction of a processor executing generated code: it has its own program counter, register set and **activation stack**, and it **shares its process's address space** — code, globals, heap — with the other threads of that process. Two threads in different processes do not share memory; they communicate through operating-system facilities.",
        detail: "Everything a thread touches through its own locals and temporaries is private; every object reachable through a name of wider scope or through a pointer is shared — and sharing is where every problem of this chapter lives.",
      },
      {
        term: "The engines of reorder",
        kind: "insight",
        statement: "The order in which memory operations *appear to happen* to another thread differs from program order because **three engines reorder freely**: the **compiler** (as-if transformations — hoisting, sinking, merging, caching values in registers), the **CPU** (out-of-order execution, speculative loads, and per-core **store buffers** that drain late and, on weakly ordered machines, out of order), and the **memory system** (per-core caches: coherent — unable to permanently disagree — but with propagation that is not instantaneous).",
        detail: "Coherence is exactly the guarantee of no permanent disagreement; it says nothing about how *soon* another core observes a write. The gap between 'eventually' and 'immediately' is where wrong answers come from.",
      },
      {
        term: "The two layers of C++ concurrency support",
        kind: "method",
        statement: "C++11 provides the **machine level** (this chapter): the memory model, `<atomic>`, fences, and `volatile` — the primitives from which synchronization is built. Above it sits the **user level** (Chapter 42): `thread`, `mutex`, `lock`, `future`, `async`, and task-based programming. The working rule: **stay at the highest level that does the job**; descend into Chapter 41 to *implement or optimize* those tools, not to bypass them.",
        detail: "Stroustrup's framing: this chapter is for the people who build and tune the concurrency machinery — and for everyone else, it is what makes the machinery trustworthy.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Concurrency at the machine level. You can claim this section when you can define concurrency and distinguish hardware parallelism from task-level concurrency — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 41 (Concurrency); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Why no hardware manual is a specification",
        problem: "A dual-core machine runs thread 1 executing `x = 1; y = 1;` and thread 2 executing `r1 = y; r2 = x;`, where `x` and `y` are ints initialized to 0. Enumerate the outcomes of the pair $(r_1, r_2)$, and ask who decides which are possible.",
        steps: [
          { label: "The naive view", text: "Program order suggests that once `y` is 1, `x` must be 1 too — so $(r_1, r_2) = (1, 0)$ looks impossible and $(1, 1)$ looks forced after both stores land." },
          { label: "Engine 1: the store buffers", text: "On a weakly ordered machine (ARM, POWER) a core's two stores may become visible to other cores in the opposite order: thread 2 can observe $y = 1$ while $x$ still reads 0 — the outcome $(1, 0)$. On x86's stronger TSO model, stores commit in order, so the hardware alone cannot produce $(1, 0)$ there." },
          { label: "Engine 2: the compiler", text: "Thread 2's two loads are independent, so the compiler may swap them — single-threaded behavior is unchanged, yet $(1, 0)$ becomes possible even on x86. The same license lets it hoist a load out of a loop or cache it across 'redundant' reads." },
          { label: "Engine 3: propagation lag", text: "With no reordering at all, thread 2 may read both variables before thread 1's stores arrive at its cache: $(0, 0)$ is always possible, and plain interleaving admits $(0, 1)$." },
          { label: "The verdict", text: "Every one of $(0,0)$, $(0,1)$, $(1,0)$, $(1,1)$ occurs on some legal execution of some machine — and because plain ints race here, ISO C++ in fact declares the whole execution undefined and stops answering." },
        ],
        result: "The outcome depends on the compiler, the core microarchitecture and the memory-system timing — no single manual is a specification. ISO C++ therefore defines its own abstract machine, and its answers (data races are undefined; atomics are ordered) are the rest of this chapter.",
      },
      {
        title: "Working through introduction",
        problem: "Concurrency at the machine level. Your task: define concurrency and distinguish hardware parallelism from task-level concurrency.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define concurrency and distinguish hardware parallelism from task-level concurrency. Write down the guarantee you will rely on — for this chapter it is: A thread owns its stack, registers and program counter; it shares the rest of the address space with its process's other threads — sharing is where races live." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::atomic<int> flag(0); flag.store(1, std::memory_order_release);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — state what a thread is, what it shares with its process and what it owns privately — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Compiler transformations, store buffering/out-of-order execution, and cache propagation lag make observed order differ from program order, differently on every architecture. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A thread owns its stack, registers and program counter; it shares the rest of the address space with its process's other threads — sharing is where races live. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A thread owns its stack, registers and program counter; it shares the rest of the address space with its process's other threads — sharing is where races live.",
      "Compiler transformations, store buffering/out-of-order execution, and cache propagation lag make observed order differ from program order, differently on every architecture.",
      "C++11 supplies a machine level (memory model, atomics, volatile) precisely so that a portable program never has to consult any particular machine's manual.",
    ],
    quiz: [
      {
        q: "A thread shares which resources with the other threads of its process?",
        options: [
          "Nothing — each thread is fully isolated",
          "Only the code segment",
          "The address space (code, globals, heap), while its stack and registers stay private",
          "Its activation stack only",
        ],
        answer: 2,
        explanation: "Threads of one process share the address space; the program counter, registers and activation stack are per thread — which is why ordinary local variables never race.",
      },
      {
        q: "Thread 1 runs `x = 1; y = 1;` and thread 2 runs `r1 = y; r2 = x;` on plain ints with no synchronization. What does ISO C++ say about $(r_1, r_2)$?",
        options: [
          "$(1, 0)$ is impossible because program order forbids it",
          "Nothing — the accesses form data races, so the behavior is undefined",
          "$(1, 1)$ is guaranteed once the first thread finishes",
          "The reads always see 0 until an explicit flush",
        ],
        answer: 1,
        explanation: "Both pairs of accesses conflict on the same locations with no happens-before ordering: the program has data races, and a data race makes the execution undefined — not 'one of several outcomes'.",
      },
      {
        q: "Which of these belongs to the machine-level layer of C++11 concurrency support?",
        options: [
          "The memory model, atomics, fences and volatile",
          "`std::future` and `std::async`",
          "`std::thread` and `std::mutex`",
          "The operating system's task scheduler",
        ],
        answer: 0,
        explanation: "The machine level is the memory model plus atomics and volatile — the substrate. Threads, mutexes, futures and async are the user level of Chapter 42 built on top.",
      },
      {
        q: "Per-core caches are coherent. What does that guarantee about a write by one core?",
        options: [
          "Other cores observe it immediately",
          "Nothing; caches are unrelated to visibility",
          "The write is broadcast at the next context switch",
          "Cores cannot permanently disagree — but propagation may lag",
        ],
        answer: 3,
        explanation: "Coherence forbids permanent disagreement; it promises nothing about latency. The lag between a write and its propagation is one reason observed order differs from program order.",
      },
    ],
  },

  // ------------------------------------------------------------------ 41.2
  {
    sectionId: "cpp-ch41-s2",
    readingTime: 8,
    intro: "The memory model answers one question: when a thread reads a memory location, what is it guaranteed to see? ISO C++ answers with three ideas — the **memory location** (the unit that can race), **happens-before** (the order that establishes visibility) and the **data race** (the violation that voids all guarantees). Everything else in this chapter — atomics, fences, volatile — is machinery for manufacturing happens-before edges without racing.",
    objectives: [
      "Define memory location and decide which members of a struct share one",
      "Define a data race precisely and state its consequence (undefined behavior)",
      "Use sequenced-before, synchronizes-with and happens-before to prove what a read must see",
    ],
    concepts: [
      {
        term: "Memory location",
        kind: "definition",
        statement: "A **memory location** is either an object of **scalar type** (`int`, pointer, `char`, `double`, an enumerator…) or a **maximal sequence of adjacent bit-fields all of nonzero width**. Two threads may access *different* locations concurrently without interference; the entire correctness question concerns same-location accesses.",
        detail: "In `struct S { char a; char b; int c : 5; int d : 11; };`, `a` and `b` are two locations — one thread may write `a` while another writes `b`. But `c` and `d` form **one** location: writing `c` from one thread and `d` from another, concurrently, is a data race. A zero-width bit-field or a plain member ends a bit-field sequence.",
      },
      {
        term: "Data race",
        kind: "definition",
        statement: "Two accesses **conflict** if they touch the same memory location and at least one is a write. Conflicting accesses from two different threads that are **not ordered by happens-before** constitute a **data race**, and a program with a data race has **undefined behavior** — not 'an arbitrary value': the standard places no constraint on the execution at all. Register caching, tearing, 'impossible' reorderings — all bets are off.",
        detail: "The severity is deliberate: undefined behavior is what lets compilers keep single-thread optimizations on data no other thread touches. It is also why 'it works on my machine' proves nothing about a racy program.",
      },
      {
        term: "Sequenced-before",
        kind: "definition",
        statement: "Within a single thread of execution, the abstract machine evaluates the program as written: one memory operation is **sequenced-before** the operations that follow it in that thread's code. This is the single-thread as-if rule lifted to the abstract machine — the compiler may do anything unobservable *to that thread*, but the thread's own behavior is exactly as if program order were execution order.",
        detail: "Sequenced-before alone orders nothing between threads — for that you need the second ingredient, the inter-thread synchronizes-with edge.",
      },
      {
        term: "happens-before and the visibility law",
        kind: "theorem",
        statement: "**Happens-before** is the transitive closure of sequenced-before and **synchronizes-with** — the inter-thread edges created when a release-side operation is observed by an acquire-side one (release store → acquire load on an atomic), when a mutex is unlocked and later locked, and at thread boundaries (creating a thread happens-before its first action; a thread's last action happens-before the join's return). The **law**: if a write $W$ to location $M$ happens-before a read $R$ of $M$, then $R$ takes its value from $W$ or from a write that happens-after $W$ — never an older one.",
        detail: "Said differently: happens-before is the only thing that makes one thread's writes visible to another's reads in a defined order. No happens-before path between two conflicting accesses means a data race, and a data race means undefined behavior.",
      },
      {
        term: "Memory Model: the working contract",
        kind: "definition",
        statement: "**Memory Model.** What threads are guaranteed to see. You can claim this section when you can define memory location and decide which members of a struct share one — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 41 (Concurrency); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The happens-before graph for release/acquire publication. Each thread's actions are sequenced-before those below them (solid); the release store of the flag synchronizes-with the acquire load that observes it (heavy dash-dot); composing the relations, the write payload = 42 happens-before the consumer's read (dashed arc) — so the read must see 42, never the initial 0.",
        svg: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Happens-before graph for release and acquire publication"><defs><marker id="cpp41a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><text x="130" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Thread 1 (producer)</text><text x="350" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Thread 2 (consumer)</text><rect x="70" y="44" width="120" height="30" rx="5" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><text x="130" y="63.5" text-anchor="middle" font-size="12" fill="currentColor">payload = 42</text><rect x="55" y="124" width="150" height="30" rx="5" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><text x="130" y="143.5" text-anchor="middle" font-size="12" fill="currentColor">flag = 1 (release)</text><rect x="265" y="124" width="170" height="30" rx="5" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.5"/><text x="350" y="143.5" text-anchor="middle" font-size="12" fill="currentColor">spin until flag (acquire)</text><rect x="265" y="214" width="170" height="30" rx="5" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><text x="350" y="233.5" text-anchor="middle" font-size="12" fill="currentColor">read payload → 42</text><line x1="130" y1="74" x2="130" y2="116" stroke="currentColor" stroke-width="2.5" marker-end="url(#cpp41a)"/><line x1="350" y1="154" x2="350" y2="206" stroke="currentColor" stroke-width="2.5" marker-end="url(#cpp41a)"/><line x1="205" y1="139" x2="258" y2="139" stroke="currentColor" stroke-width="3.5" stroke-dasharray="11 4 2 4" marker-end="url(#cpp41a)"/><text x="231" y="117" text-anchor="middle" font-size="10" fill="currentColor">synchronizes-with</text><path d="M 190 59 C 400 70 500 150 437 226" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 5" opacity="0.8" marker-end="url(#cpp41a)"/><text x="438" y="92" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.85">happens-before</text><g font-size="11" fill="currentColor"><line x1="60" y1="287" x2="100" y2="287" stroke="currentColor" stroke-width="2.5"/><text x="110" y="291">sequenced-before (order within one thread)</text><line x1="60" y1="309" x2="100" y2="309" stroke="currentColor" stroke-width="3.5" stroke-dasharray="11 4 2 4"/><text x="110" y="313">synchronizes-with (created by the atomic pair)</text><line x1="60" y1="331" x2="100" y2="331" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 5"/><text x="110" y="335">happens-before (their transitive closure)</text></g></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Publishing data with one acquire/release pair",
        problem: "A producer thread computes a value and publishes it to a consumer through an atomic flag. Prove that the consumer's read must see the value — then break the pattern and see why the proof collapses.",
        steps: [
          { label: "The program", text: "`int payload = 0;` — a plain int. `std::atomic<bool> ready {false};` — the flag. Thread 1: `payload = 42;` then `ready.store(true, std::memory_order_release);`. Thread 2: `while (!ready.load(std::memory_order_acquire)) ;` then `int v = payload;`." },
          { label: "Edge 1: sequenced-before", text: "In thread 1, `payload = 42` is sequenced-before the release store of `ready`. In thread 2, the exiting acquire load is sequenced-before the read of `payload`." },
          { label: "Edge 2: synchronizes-with", text: "When the acquire load finally returns `true`, it took its value from that release store — so the store **synchronizes-with** the load." },
          { label: "Compose the order", text: "payload = 42 happens-before the consumer's read of `payload` (sequenced-before, then synchronizes-with, then sequenced-before). By the visibility law, with no intervening write, `v` must equal **42** — it cannot see the initial 0." },
          { label: "Break the pattern", text: "Make `ready` a plain `bool`: the loop's reads now race with thread 1's write — undefined behavior — and the reasoning collapses. In practice the compiler may hoist the load, emitting the equivalent of `if (!ready) for(;;) ;` — a consumer that spins forever even after the store becomes globally visible." },
        ],
        result: "A single acquire/release pair publishes an entire object graph — this mechanism underlies every mutex-protected critical section (`unlock` synchronizes-with the next `lock`) and every future's set/get.",
      },
      {
        title: "Working through memory model",
        problem: "What threads are guaranteed to see. Your task: define memory location and decide which members of a struct share one.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define memory location and decide which members of a struct share one. Write down the guarantee you will rely on — for this chapter it is: A memory location is a scalar object or a maximal run of adjacent nonzero-width bit-fields — two different chars are two locations, but two adjacent bit-fields are one." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::atomic<int> flag(0); flag.store(1, std::memory_order_release);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — define a data race precisely and state its consequence (undefined behavior) — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Conflicting accesses from two threads, unordered by happens-before, form a data race: the program's behavior is undefined, full stop. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A memory location is a scalar object or a maximal run of adjacent nonzero-width bit-fields — two different chars are two locations, but two adjacent bit-fields are one. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A memory location is a scalar object or a maximal run of adjacent nonzero-width bit-fields — two different chars are two locations, but two adjacent bit-fields are one.",
      "Conflicting accesses from two threads, unordered by happens-before, form a data race: the program's behavior is undefined, full stop.",
      "If a write happens-before a read, the read must return that write's value or a later one's — happens-before is the only source of defined inter-thread visibility.",
    ],
    quiz: [
      {
        q: "In `struct S { char a; char b; int c : 5; int d : 11; };`, which pair of members lives in the same memory location?",
        options: [
          "`a` and `b`",
          "`c` and `d`",
          "`a` and `c`",
          "None — every member is its own location",
        ],
        answer: 1,
        explanation: "Adjacent nonzero-width bit-fields form a single memory location; two adjacent chars are two locations. Two threads writing `c` and `d` concurrently race; writing `a` and `b` concurrently does not.",
      },
      {
        q: "Two threads concurrently use a plain `int x`: one writes it, one reads it, with no synchronization of any kind. The C++ standard says:",
        options: [
          "The read sees either the old or the new value",
          "The read may see a torn value",
          "The program has a data race — its behavior is undefined",
          "The read blocks until the write completes",
        ],
        answer: 2,
        explanation: "Conflicting accesses, no happens-before ordering: a data race. The standard's answer is not 'some value among many' — the entire execution is unconstrained.",
      },
      {
        q: "If a write $W$ to a location happens-before a read $R$ of that location, $R$ is guaranteed to return:",
        options: [
          "Exactly the value written by $W$",
          "The value of $W$ or of a write that happens-after $W$",
          "Any value ever written to that location",
          "The location's initial value",
        ],
        answer: 1,
        explanation: "The visibility law forbids reading *older* than $W$; a write that happens-after $W$ (and is itself ordered with the read) may legitimately intervene and be observed instead.",
      },
      {
        q: "Which of these does NOT create a synchronizes-with edge?",
        options: [
          "A release store observed by an acquire load of the same atomic",
          "A mutex unlock followed by a later lock of that mutex",
          "Thread creation and thread join boundaries",
          "A `volatile` read of a shared variable",
        ],
        answer: 3,
        explanation: "`volatile` is a code-generation rule for special memory; it creates no inter-thread ordering, no atomicity, and no happens-before edge — that is the entire subject of 41.4.",
      },
      // PYQ-pattern: GATE 2023 — data race on plain int is undefined (rephrased)
      {
        q: "Two threads run with no lock, atomic, or other coordination:\n```cpp\n// thread A: ++shared;   // thread B: ++shared;\n```\n`shared` is a plain `int` starting at `0`. Which statement is correct?",
        options: ["The final value is always `2`", "The final value is `1` or `2`, and the program is otherwise fine", "The value stays `0`, because concurrent writes cancel out", "The program contains a data race, which is undefined behavior: lost updates are possible and no outcome is guaranteed"],
        answer: 3,
        explanation: "Step 1: The data given is two unsynchronized read-modify-write updates to one plain integer. Step 2: The governing rule is the race definition: conflicting non-atomic accesses with at least one write and no ordering guarantee constitute a data race, and any data race makes the whole program undefined. Step 3: Tracing one interleaving, both threads read `0`, both add one locally, both store `1`, so an update is visibly lost, and optimizers may assume even stranger executions. Step 4: The distractors fail because no indivisibility exists for plain increments, benign races do not exist in this language, and writes never cancel. Step 5: Therefore no final value can be relied upon."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "Sequential consistency for data-race-free programs",
        blocks: [
          {
            kind: "para",
            body: "Why does the whole apparatus — mutexes, atomics, happens-before — exist? Because hardware gave up sequential consistency for speed decades before multicore made it everyone's problem. Adve and Hill, studying the weakly ordered machines of the late 1980s, proposed the bargain that Java and then C++11 both adopted: **let the machine reorder freely, and in exchange promise that programs without data races still behave as if the machine were sequentially consistent**. A sequentially consistent execution is one explainable by a single global timeline: each thread's operations appear at distinct points of one total order, respecting each thread's program order, and every read returns the value of the most recent write in that order — the interleaving picture every programmer instinctively uses. The theorem below says that picture is *sound* for exactly the programs this book tells you to write.",
          },
          {
            kind: "theorem",
            heading: "SC for data-race-free programs (Adve–Hill 1990; the C++11 form is due to Boehm–Adve 2008)",
            body: "Let $P$ be a program such that (i) every access that two threads can both reach is either an atomic operation performed with `memory_order_seq_cst`, or is non-atomic and happens-before-ordered against every conflicting access (as inside a mutex-protected critical section), and (ii) $P$ executes without data races. Then every execution of $P$ is sequentially consistent: there is a single total order $S$ of all synchronization-relevant operations such that $S$ respects each thread's program order, and every read returns the value of the last write to that location preceding it in $S$ (or the initial value if none). The hypothesis is sharp: relax the atomics to `memory_order_relaxed` and the conclusion fails; admit one race and it fails vacuously, because the execution is undefined.",
          },
          {
            kind: "proof",
            heading: "Assembling the illusion",
            body: "Three observations do the work. **(1) Single-thread freedom.** The abstract machine evaluates each thread as if in program order; compilers may transform arbitrarily underneath, because any transformation observable by *another* thread would require an unsynchronized access to shared data — a race the hypothesis excludes. **(2) Acyclicity.** In an execution the standard admits, happens-before is irreflexive. For suppose $a \\prec_{hb} a$: the cycle must leave some thread and return, so it traverses a synchronizes-with edge $w \\to r$, an edge that exists only because the acquire read $r$ took its value from the release write $w$. The rest of the cycle yields $r \\prec_{hb} w$: the read returned a value from its own causal future. The model's per-location rules — each location has one total *modification order*, and a read may take its value only from a write not superseded relative to happens-before — are precisely what forbids values flowing backwards along the order, so a cycle would make some read read from its future. **(3) Assembly.** A strict partial order has topological orderings, and the seq-cst rules guarantee the seq-cst operations additionally admit one single total order $S$ extending program order. For non-atomic reads, the visible-value rule mandates the last write that happens-before the read; for seq-cst reads, $S$ mandates the last write in $S$. Choosing an $S$ compatible with happens-before makes the two rules coincide, and every read is then explained by the interleaving $S$: the execution is indistinguishable from sequential consistency. ∎ (The full axiomatic treatment is Boehm and Adve, Foundations of the C++ Concurrency Memory Model, POPL 2008.)",
          },
          {
            kind: "example",
            heading: "Dekker's litmus: proving an outcome impossible",
            body: "Two threads, all operations default seq-cst atomics. Thread 1: `x.store(1)` then `r1 = y.load()`. Thread 2: `y.store(1)` then `r2 = x.load()`. Claim: the outcome $(r_1, r_2) = (0, 0)$ is impossible. Suppose it occurred; write $A$ = T1's store of x, $a$ = T1's load of y, $B$ = T2's store of y, $b$ = T2's load of x. Since $r_1 = 0$ and $B$ is the only write to y, $a$ must precede $B$ in $S$ (after $B$ it would read 1); symmetrically $r_2 = 0$ forces $b$ before $A$. Program order gives $A \\prec a$ and $B \\prec b$. Chaining: $A \\prec a \\prec B \\prec b \\prec A$ — a cycle in a total order: contradiction. So at least one thread observes the other's write, which is the property Dekker's and Peterson's mutual-exclusion algorithms are built on. Now change the orders to `memory_order_relaxed`: no total order $S$ exists, the proof evaporates, and $(0, 0)$ really is observed on store-buffering hardware — even x86's, whose single weakness versus SC is precisely its buffered stores. That is why compilers emit a locked exchange or `MFENCE` for a seq-cst store, and a full `DMB` on ARM.",
          },
          {
            kind: "derivation",
            heading: "What weaker orders buy, and what they cost",
            body: "Sequential consistency is not free. A plain store that hits L1 costs about 4 cycles; a seq-cst store on x86 must drain the store buffer — compilers emit `XCHG` or `MOV` + `MFENCE`, roughly 20–50 cycles; on ARMv8, acquire/release instructions (`LDAR`/`STLR`) or a full `DMB` cost tens of cycles; and a *contended* atomic read-modify-write is dominated not by barriers but by the cache line migrating between cores — 40–100 ns, hundreds of cycles, per handoff. Weaker orders exist to spend less when you need less. The canonical sanctioned pattern is a reference count — the design inside every `shared_ptr` control block: increments are `memory_order_relaxed` (only the total matters to ownership, never the order, and an increment publishes no data); the decrement that reaches zero is release-ordered followed by an acquire fence, so the destructor's reads of the object happen-after the last owner's writes. Statistics counters that only need 'eventually roughly right' also use relaxed. Everything subtler — store-buffering publication, IRIW, dependency ordering — is a research-grade obligation: enumerate the litmus outcomes your order permits before trusting it.",
          },
          {
            kind: "remark",
            body: "Four consequences worth internalizing. First, the theorem is why Chapter 42 never mentions `memory_order`: locks and default atomics already put you back in the interleaving picture — the simplest mental model there is, and a correct one. Second, the engine of the proof — a race-free program cannot observe what the compiler did to code that merely looks racy — is what keeps forty years of single-thread optimization legal in a concurrent world: dead-store elimination, register caching and code motion survive untouched, applied only to memory no other thread can legally read. Third, the boundary is absolute: a data race is a property of the execution, not of the individual access — one race anywhere voids every guarantee in the program; there is no 'mostly data-race-free'. Fourth, once you weaken below seq-cst you inherit proof obligations of exactly the form shown above, and testing does not discharge them: the forbidden interleavings are rare by construction.",
          },
          {
            kind: "open",
            heading: "Where the guarantee ends",
            body: "The edges of the DRF-SC bargain remain active research. `memory_order_consume` — meant to expose hardware dependency ordering (an ARM/POWER trick: using a loaded pointer need not wait for the full visibility of what it points to) — was never implemented as specified: every compiler promotes it to acquire, and the committee has formally discouraged its use. The out-of-thin-air question — whether the relaxed axioms admit executions in which a value propagates that no thread ever wrote — consumed a decade of the memory-model community; the C++20 revision (drawing on Lahav and colleagues' RC11 model, and the Java experience of Manson, Pugh and Adve) tightened the causal rules without a complete resolution. Verified compilers (CompCert's memory model) and machine-checked C++ models in Isabelle/HOL (the Cambridge group's work on C11 atomics) keep finding places where 'the standard says' and 'compilers do' diverge. And the engineering frontier — verifying industrial lock-free structures like the Boost lock-free queues against the formal model — remains largely manual. The safe summary for a working programmer: the guarantee is solid exactly where you stay on the paved road.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 41.3
  {
    sectionId: "cpp-ch41-s3",
    readingTime: 7,
    intro: "Atomics are the programmer's handle on the memory model: `std::atomic<T>` gives operations that cannot be torn and, depending on the `memory_order` chosen, order the surrounding ordinary accesses of other threads. This section covers the repertoire (`load`, `store`, `exchange`, `compare_exchange`, the fetch operations), the six memory orderings, fences, and the two traps — spurious failure and ABA — that make lock-free programming expert territory.",
    objectives: [
      "Use `atomic<T>`: which operations exist, which are lock-free, and how each is spelled",
      "State all six memory orders and the guarantee each one adds",
      "Build a spinlock from `atomic_flag`, and explain ABA and `compare_exchange_weak`",
    ],
    concepts: [
      {
        term: "atomic<T> — indivisible operations",
        kind: "definition",
        statement: "`std::atomic<T>` provides `load()`, `store()`, `exchange()` and compare-exchange operations that are **indivisible**: no thread can ever observe the object half-written (torn). For integral and pointer types it adds read-modify-write arithmetic: `fetch_add`, `fetch_sub`, `fetch_and`, `fetch_or`, `fetch_xor`, with the natural operators `++`, `--`, `+=`, `-=`, so `++cnt;` on an `atomic<int>` is one atomic step. A generic `atomic<T>` for trivially copyable `T` exists but **may use a hidden lock**; `atomic_flag` is the only type **guaranteed** lock-free; `is_lock_free()` and the `ATOMIC_..._LOCK_FREE` macros report the facts per platform.",
        detail: "Only use the generic form for small, trivially copyable types; a locked 'atomic' behaves correctly but brings no lock-free benefit and shares no atomic guarantees about the hardware.",
      },
      {
        term: "The operation repertoire",
        kind: "method",
        statement: "`x.store(v, order)` writes; `x.load(order)` reads; `x.exchange(v, order)` writes `v` and returns the old value in one indivisible step; `x.compare_exchange_weak(expected, desired, …)` atomically performs 'if `x == expected` then assign `desired` and return true, else load into `expected` and return false'. The **weak** variant may fail spuriously — report failure although the values matched — which is why it belongs inside retry loops, where it is cheaper than **strong** on LL/SC machines (ARM, POWER); use `compare_exchange_strong` when you will not loop.",
        detail: "Spurious failure is a hardware fact: the load-linked/store-conditional primitive those machines offer can fail because an unrelated cacheline was touched, not because the comparison failed.",
      },
      {
        term: "The six memory orders",
        kind: "definition",
        statement: "Every atomic operation takes a `memory_order`: `memory_order_relaxed` (atomicity only, no ordering), `memory_order_consume` (acquire restricted to data-dependent accesses — effectively deprecated; implementations promote it to acquire), `memory_order_acquire` (a load: later accesses cannot move before it), `memory_order_release` (a store: earlier accesses cannot move after it), `memory_order_acq_rel` (a read-modify-write that is both), and `memory_order_seq_cst` — the **default** — which additionally guarantees that all seq-cst operations on all locations agree on **one single total order** $S$.",
        detail: "The first law of memory orders: use the default until a measured need says otherwise. Weaker orders are contracts with fine print — see the litmus question in the quiz and the masters tier of 41.2.",
      },
      {
        term: "Fences, ABA, and the lock-free caveat",
        kind: "insight",
        statement: "`atomic_thread_fence(order)` installs ordering *without* an operation — a release fence orders preceding accesses, an acquire fence orders following ones (and `atomic_signal_fence` does the same against a signal handler in the same thread). The **ABA problem** haunts `compare_exchange` on pointers: thread 1 reads head `A`; thread 2 pops `A`, pushes `B`, then pushes a new node that happens to be allocated at the same address `A`; thread 1's CAS on the head succeeds even though the structure changed underneath — the classic corruption behind hand-rolled lock-free stacks. Real mitigations (tagged pointers, hazard pointers, epoch reclamation) are graduate material — which is the point: **avoid lock-free cleverness unless you are an expert and can measure the win**.",
        detail: "Stroustrup's list of things atomics buy — lock-free code, dead-lock-free algorithms, interrupt handlers — comes with the caveat that all three are for specialists; the default recommendation is mutexes and the Chapter 42 tools.",
      },
      {
        term: "Atomics: the working contract",
        kind: "definition",
        statement: "**Atomics.** Atomic operations and their ordering. You can claim this section when you can use `atomic<T>`: which operations exist, which are lock-free, and how each is spelled — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 41 (Concurrency); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The memory-ordering ladder. Each step up adds guarantees: relaxed gives atomicity only; acquire forbids later accesses moving before the load; release forbids earlier accesses moving after the store; acq-rel combines both for read-modify-write; seq-cst — the default — additionally gives one single total order over all seq-cst operations. The consume rung exists in the interface but is effectively deprecated: use acquire.",
        svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The memory-ordering ladder from relaxed to sequential consistency"><defs><marker id="cpp41b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><path d="M 90 42 V 293" stroke="currentColor" stroke-width="4" opacity="0.4" fill="none"/><path d="M 225 42 V 293" stroke="currentColor" stroke-width="4" opacity="0.4" fill="none"/><line x1="35" y1="285" x2="35" y2="50" stroke="currentColor" stroke-width="2.5" marker-end="url(#cpp41b)"/><text x="35" y="32" text-anchor="middle" font-size="11" fill="currentColor">stronger</text><text x="35" y="312" text-anchor="middle" font-size="11" fill="currentColor">weaker</text><rect x="78" y="42" width="159" height="26" rx="5" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="157" y="59.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">seq-cst</text><text x="72" y="59" text-anchor="end" font-size="9" fill="currentColor" opacity="0.65">(any)</text><text x="252" y="59" font-size="11" fill="currentColor">one global total order for all seq-cst ops — the default</text><rect x="78" y="87" width="159" height="26" rx="5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><text x="157" y="104.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">acq-rel</text><text x="72" y="104" text-anchor="end" font-size="9" fill="currentColor" opacity="0.65">(RMW)</text><text x="252" y="104" font-size="11" fill="currentColor">read-modify-write: both directions</text><rect x="78" y="132" width="159" height="26" rx="5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><text x="157" y="149.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">release</text><text x="72" y="149" text-anchor="end" font-size="9" fill="currentColor" opacity="0.65">(store)</text><text x="252" y="149" font-size="11" fill="currentColor">a store: earlier ops cannot move after it</text><rect x="78" y="177" width="159" height="26" rx="5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><text x="157" y="194.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">acquire</text><text x="72" y="194" text-anchor="end" font-size="9" fill="currentColor" opacity="0.65">(load)</text><text x="252" y="194" font-size="11" fill="currentColor">a load: later ops cannot move before it</text><rect x="78" y="222" width="159" height="26" rx="5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><text x="157" y="239.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">consume</text><text x="72" y="239" text-anchor="end" font-size="9" fill="currentColor" opacity="0.65">(load)</text><text x="252" y="239" font-size="11" fill="currentColor">acquire for dependent data only (deprecated)</text><rect x="78" y="267" width="159" height="26" rx="5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><text x="157" y="284.5" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">relaxed</text><text x="72" y="284" text-anchor="end" font-size="9" fill="currentColor" opacity="0.65">(any)</text><text x="252" y="284" font-size="11" fill="currentColor">atomicity only — no ordering at all</text><text x="300" y="330" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">a fence installs a rung's ordering without an operation</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "A spinlock from an atomic flag",
        problem: "Build mutual exclusion from the one primitive the standard guarantees to be lock-free, and account for its cost.",
        steps: [
          { label: "State", text: "`std::atomic_flag s = ATOMIC_FLAG_INIT;` — cleared means free. `atomic_flag` has exactly two operations: `test_and_set` and `clear`." },
          { label: "Acquire", text: "`while (s.test_and_set(std::memory_order_acquire)) ;` — `test_and_set` atomically replaces the value with `true` and returns the *old* value. The first thread to arrive gets `false`, skips the loop body, and enters the critical section; nothing in the section can move above the successful `test_and_set`." },
          { label: "Contend", text: "A second thread's `test_and_set` returns `true` — someone holds the lock — so it spins. Each iteration is a read-modify-write that drags the cache line between the two cores' L1 caches: roughly 20–40 ns per iteration on typical hardware." },
          { label: "Release", text: "The holder finishes with `s.clear(std::memory_order_release);` — its critical-section accesses cannot move below it. The spinner's next `test_and_set` returns `false` and acquires; the release→acquire pair makes the whole critical section happen-before the next holder's code, which therefore sees every write." },
          { label: "The economics", text: "A critical section of about 100 ns costs the loser roughly 3–5 futile iterations — reasonable. A 10 ms section burns about 300,000–500,000 atomic read-modify-writes on a spinning core — criminal. Spinlocks are for tiny, briefly-contended sections; `mutex`, which parks the waiting thread, is the default." },
        ],
        result: "Mutual exclusion plus happens-before visibility from a single bit — in miniature, what every mutex implementation does; the price is a core that burns cycles while waiting.",
      },
      {
        title: "Working through atomics",
        problem: "Atomic operations and their ordering. Your task: use `atomic<T>`: which operations exist, which are lock-free, and how each is spelled.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use `atomic<T>`: which operations exist, which are lock-free, and how each is spelled. Write down the guarantee you will rely on — for this chapter it is: `atomic<T>` gives indivisible load/store/exchange/compare-exchange, plus fetch arithmetic for integral and pointer types; only `atomic_flag` is guaranteed lock-free — check `is_lock_free()` for the rest." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::atomic<int> flag(0); flag.store(1, std::memory_order_release);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — state all six memory orders and the guarantee each one adds — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The six memory orders trade ordering for speed; the default, `memory_order_seq_cst`, is what you should be using when you write none — it buys one global total order over all such operations. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `atomic<T>` gives indivisible load/store/exchange/compare-exchange, plus fetch arithmetic for integral and pointer types; only `atomic_flag` is guaranteed lock-free — check `is_lock_free()` for the rest. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`atomic<T>` gives indivisible load/store/exchange/compare-exchange, plus fetch arithmetic for integral and pointer types; only `atomic_flag` is guaranteed lock-free — check `is_lock_free()` for the rest.",
      "The six memory orders trade ordering for speed; the default, `memory_order_seq_cst`, is what you should be using when you write none — it buys one global total order over all such operations.",
      "ABA and spurious CAS failure are why lock-free data structures are expert territory; `compare_exchange_weak` is for retry loops, `strong` for one-shot comparisons.",
    ],
    quiz: [
      {
        q: "You write `x.store(v)` on an `atomic<int>` with no explicit ordering argument. Which memory order applies?",
        options: [
          "`memory_order_relaxed`",
          "`memory_order_acquire`",
          "`memory_order_seq_cst`",
          "There is no default — the order is always required",
        ],
        answer: 2,
        explanation: "The default for atomic operations is sequential consistency: the strongest order, and the only one carrying the single-total-order guarantee that makes interleaving-based reasoning sound.",
      },
      {
        q: "Which standard-library atomic type is guaranteed to be lock-free on every implementation?",
        options: [
          "`atomic<int>`",
          "`atomic_flag`",
          "`atomic<double>`",
          "`atomic<std::string>`",
        ],
        answer: 1,
        explanation: "`atomic_flag` is the one mandated lock-free type — the primitive from which the others can be built. `atomic<int>` happens to be lock-free on all mainstream platforms but the standard does not promise it; the generic `atomic<T>` may use a lock.",
      },
      {
        q: "All atomics use the default ordering. Thread 1: `x.store(1); y.store(1);`. Thread 2: `r1 = y.load(); r2 = x.load();`. Which outcome is impossible?",
        options: [
          "$(r_1, r_2) = (0, 0)$",
          "$(r_1, r_2) = (0, 1)$",
          "$(r_1, r_2) = (1, 0)$",
          "$(r_1, r_2) = (1, 1)$",
        ],
        answer: 2,
        explanation: "seq-cst provides one total order $S$ respecting each thread's program order. $(1, 0)$ would need y's store before y's load, that load before x's load, and x's load before x's store — contradicting thread 1's x-then-y order: a cycle in $S$. With `memory_order_relaxed`, all four outcomes, including $(1, 0)$, are legal.",
      },
      {
        q: "A lock-free stack thread reads head `A` and caches `A->next`. Before its CAS runs, another thread pops `A`, pushes `B`, then pushes a new node that happens to be allocated at address `A`. The first thread's `compare_exchange` against `A`:",
        options: [
          "Fails — the list changed in between",
          "Succeeds even though the list is not what the thread believes: the ABA problem",
          "Fails — compare-exchange detects address reuse",
          "Blocks, waiting for the other thread to finish",
        ],
        answer: 1,
        explanation: "CAS compares only bits: A-after-B-after-A looks unchanged, so the swap succeeds over a structure that was rebuilt underneath — corruption. Tagged pointers or hazard pointers exist to defeat exactly this.",
      },
    ],
  },

  // ------------------------------------------------------------------ 41.4
  {
    sectionId: "cpp-ch41-s4",
    readingTime: 5,
    intro: "`volatile` is the chapter's most misused keyword — because in Java and C# it means something thread-ish, and in C++ it does not. C++ `volatile` is a message to the *optimizer* about *special memory*: memory the program does not exclusively own — device registers, memory-mapped I/O, flags written by a signal handler. It constrains code generation, not the hardware, and therefore cannot synchronize threads. Drawing that boundary precisely is this section's whole job.",
    objectives: [
      "Define special memory and what volatile guarantees for it",
      "Prove from the definition that volatile neither orders nor atomizes thread access",
      "Choose correctly among volatile, atomic and mutex",
    ],
    concepts: [
      {
        term: "Special memory",
        kind: "definition",
        statement: "**Special memory** is memory used by agents outside the C++ abstract machine: memory-mapped device registers, DMA buffers, memory written by debuggers or other processes, flags set by signal handlers. Accesses through `volatile`-qualified lvalues must be performed **exactly as written**: every read and write actually executes, in source order, none elided, none merged, none cached in a register.",
        detail: "Example: `volatile std::uint32_t* status = reinterpret_cast<volatile std::uint32_t*>(0x4000'0010);` — the compiler must re-read `*status` every time you name it, because the device, not the program, decides its value.",
      },
      {
        term: "What volatile does not do",
        kind: "law",
        statement: "`volatile` provides **no atomicity** (a `volatile long long` store can tear on a 32-bit machine), **no ordering of non-volatile accesses around the volatile ones**, and — decisively — **no inter-thread synchronization**: two threads, one writing a `volatile int` and the other reading it, still have a data race and hence undefined behavior. `volatile` is invisible to the hardware: it emits no fences, no locked instructions, no cache control.",
        detail: "The one thread-adjacent niche: a signal handler and the thread it interrupts are *the same thread* — a `volatile std::sig_atomic_t` flag is the sanctioned channel there, precisely because no second thread exists (and `atomic_signal_fence` orders atomics against such handlers).",
      },
      {
        term: "volatile vs atomic vs mutex — the decision rule",
        kind: "method",
        statement: "**Special memory → `volatile`; inter-thread communication → `atomic` (or `mutex`); both needs on the same word → both mechanisms**, because `atomic` does not imply `volatile` and vice versa. Java's `volatile` is closer to C++'s `atomic` with acquire/release semantics; C++'s `volatile` is a strictly weaker, purely code-generation notion — one letter, two worlds.",
        detail: "A memory-mapped register that is also written by a program thread is in both categories at once — qualify the access to stop the optimizer and use atomicity/ordering machinery for the threads; do not expect either tool to cover the other's job.",
      },
      {
        term: "volatile: the working contract",
        kind: "definition",
        statement: "**volatile.** volatile and when it helps. You can claim this section when you can define special memory and what volatile guarantees for it — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 41 (Concurrency); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "volatile: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, prove from the definition that volatile neither orders nor atomizes thread access. Then, choose correctly among volatile, atomic and mutex. Finally, test the outcome against the section promise: volatile exists for special memory — device registers, DMA buffers, signal-handler flags — where every access in the source must actually execute, in order.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Polling a device status register",
        problem: "A status register lives at 0x4000'0010: bit 0 = ready, bit 1 = error. The driver must spin until ready, then read the full register. Show what the compiler does with and without the qualifier.",
        steps: [
          { label: "The access path", text: "`volatile std::uint32_t* status = reinterpret_cast<volatile std::uint32_t*>(0x4000'0010);` then `while ((*status & 0x1) == 0) ;` and afterwards a fresh read of `*status` to check the error bit." },
          { label: "Without volatile", text: "Through a plain `unsigned int*`, the loop body contains no write to `*status`, so the single-threaded as-if rule lets the compiler load once, test that constant forever — emitting either 'skip the loop' or 'spin eternally'. A device that waits for the driver to poll is never polled: a dead driver." },
          { label: "With volatile", text: "Every iteration must perform a fresh load of `*status`, in order, no elision. The device asserts ready on the 4th poll: the code issues exactly 4 loads (0x0, 0x0, 0x0, 0x1), exits, and the follow-up read of `*status` is again a new load — it may already return 0x3 (ready | error), a value the loop never saw." },
          { label: "Why this is not a thread story", text: "The device is not a C++ thread: it writes memory outside the abstract machine, which is precisely the case `volatile` addresses. Had a *thread* written that word, `volatile` would not make the polling defined — it would still be a data race needing `atomic`." },
        ],
        result: "volatile is the optimizer's leash for memory your program does not own; it is one letter away from, and one world apart in meaning from, atomic.",
      },
      {
        title: "Working through volatile",
        problem: "volatile and when it helps. Your task: define special memory and what volatile guarantees for it.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define special memory and what volatile guarantees for it. Write down the guarantee you will rely on — for this chapter it is: volatile exists for special memory — device registers, DMA buffers, signal-handler flags — where every access in the source must actually execute, in order." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::atomic<int> flag(0); flag.store(1, std::memory_order_release);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — prove from the definition that volatile neither orders nor atomizes thread access — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: volatile gives no atomicity, no inter-thread ordering, no synchronizes-with: a shared volatile variable read by one thread while another writes it is still a data race. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: volatile exists for special memory — device registers, DMA buffers, signal-handler flags — where every access in the source must actually execute, in order. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "volatile exists for special memory — device registers, DMA buffers, signal-handler flags — where every access in the source must actually execute, in order.",
      "volatile gives no atomicity, no inter-thread ordering, no synchronizes-with: a shared volatile variable read by one thread while another writes it is still a data race.",
      "Java's volatile resembles C++ atomic; C++ volatile resembles nothing thread-related at all — the optimizer is the only thing that ever sees it.",
    ],
    quiz: [
      {
        q: "A shared `volatile bool stop;` is written by one thread and read by another in a loop. What does the standard say?",
        options: [
          "Well-defined: volatile forces re-reads, so the loop terminates",
          "Well-defined if the platform stores bools atomically",
          "Data race — undefined behavior; volatile does not order threads",
          "Defined only if the writer also holds a mutex",
        ],
        answer: 2,
        explanation: "volatile constrains code generation only: no fences are emitted and no happens-before edge is created, so the unsynchronized conflicting accesses still race and the program is still undefined.",
      },
      {
        q: "Which optimization is forbidden for accesses to a volatile object?",
        options: [
          "Eliminating or caching 'redundant' volatile accesses — each must actually execute",
          "Passing its address to a non-inlined function",
          "Copying it to another volatile object",
          "Allocating it in static storage instead of on the stack",
        ],
        answer: 0,
        explanation: "The defining property: every volatile access in the source happens, exactly as written — no elision, merging, or register caching. Everything else about scheduling is negotiable.",
      },
      {
        q: "Why can't volatile order two threads' accesses, even though it orders the generated code?",
        options: [
          "It emits fences, but only on 32-bit machines",
          "It constrains only the compiler's code generation — no barriers or locked instructions reach the CPU, and no synchronizes-with edge exists",
          "CPUs ignore volatile-qualified loads for performance",
          "It orders writes but never reads",
        ],
        answer: 1,
        explanation: "volatile never becomes an instruction (beyond the load/store itself), so out-of-order execution and store buffers remain unconstrained — and the memory model never learns about the access pair.",
      },
      {
        q: "Java's volatile versus C++'s:",
        options: [
          "Identical — both were standardized from the same specification",
          "C++'s is stronger: it implies atomicity",
          "Neither has any effect on generated code",
          "Java's carries acquire/release ordering; C++'s is purely a code-generation rule for special memory",
        ],
        answer: 3,
        explanation: "Java's volatile is a memory-model construct with ordering semantics — roughly C++ atomic with acquire/release. C++'s volatile never touches the memory model; the name collision misleads exactly one audience: Java refugees.",
      },
    ],
  },

  // ------------------------------------------------------------------ 41.5
  {
    sectionId: "cpp-ch41-s5",
    readingTime: 4,
    intro: "Stroustrup's closing advice for the chapter has one theme: the memory model exists so that you rarely have to think about it. Work at the highest level that gets the job done, keep the default orderings, keep volatile out of your thread code — and when you must go low-level, go with measurements, litmus tests, and a healthy respect for ABA.",
    objectives: [
      "Apply the priority order: tasks, then threads and mutexes, then atomics, then fences and volatile",
      "Justify any weakening below seq-cst with measurement and a written argument",
      "Recognize the legitimate Chapter 41 call sites: flags, counters, memory-mapped I/O, and measured contention",
    ],
    concepts: [
      {
        term: "Stay at the highest level that works",
        kind: "method",
        statement: "**Minimize shared writable data; when sharing is needed, reach for Chapter 42 first** — tasks and futures for structure, `mutex` for exclusion. The machine level of this chapter is for *implementing and optimizing* those tools: a library author may need `atomic`; an application author almost never does. Prefer the simple, obviously-correct version until profiling proves otherwise.",
        detail: "The corollary: if your design requires heroics from Chapter 41 to be correct, redesign before you optimize — data races are undefined behavior, not a performance problem you can tune away.",
      },
      {
        term: "Atomic discipline",
        kind: "method",
        statement: "When atomics are warranted, use them for **simple things** — flags, counters, publication pointers — with the **default `memory_order_seq_cst`**. Weaken only after a *measured* need, and write down the litmus argument for why the weaker order suffices (`relaxed` for counters, release stores with acquire loads for publication). **Avoid lock-free data structures** unless you are an expert with a reclamation strategy for ABA — and even then prefer the reviewed ones in the standard library and Boost.",
        detail: "The reasoning burden of weaker orders is permanent: it must be re-verified at every maintenance change, while the default's correctness argument ('it is sequentially consistent') survives refactoring.",
      },
      {
        term: "volatile has exactly one job",
        kind: "method",
        statement: "**`volatile` is for special memory only** — memory-mapped I/O and signal-handler flags. Never use it for inter-thread communication, never as a 'fix' for a race (it changes no thread semantics at all), and never mix its vocabulary with atomics': `atomic` is about *threads*; `volatile` is about *the optimizer*.",
        detail: "If you find volatile on a variable that threads share without any atomic or mutex in sight, you have found a bug — the standard's word for what you are reading is 'undefined behavior', whatever the machine happens to do.",
      },
      {
        term: "Shipping rule for concurrency",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Minimize shared writable data, then use the Chapter 42 tools; reserve this chapter's machinery for implementing and optimizing those tools.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for concurrency",
        kind: "method",
        statement: "Take the objectives as review questions: apply the priority order: tasks, then threads and mutexes, then atomics, then fences and volatile? Then justify any weakening below seq-cst with measurement and a written argument? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "A five-item concurrency audit",
        problem: "Apply the chapter's rules to five recurring review items; give each a verdict with a reason.",
        steps: [
          { label: "1. A shared request counter", text: "Sixteen handler threads increment a count per request. A plain `long` would race; `volatile long` would *still* race. Correct and idiomatic: `std::atomic<long> requests {0};` with `++requests;` — one atomic read-modify-write, no lock, default ordering." },
          { label: "2. A shutdown flag", text: "A GUI thread sets `shutting_down`; a worker polls it in its loop condition. A plain `bool` races — the fix is `std::atomic<bool>`: `store(true)` to set, `load()` to poll. No explicit order needed: the default is right." },
          { label: "3. A DMA descriptor ring", text: "A network device's descriptor registers live at fixed physical addresses. This is special memory: `volatile` accesses (or the vendor's HAL), and no atomics — the device is not a thread." },
          { label: "4. A proposed lock-free queue", text: "The team wants to 'eliminate lock contention' in a path measured at 4% of run time, of which the mutex costs about 0.3%. The projected win is noise, and the rewrite imports ABA and memory-reclamation risk. Verdict: the mutex stays until numbers demand otherwise." },
          { label: "5. Reference-counted handles", text: "Handles are copied in a hot loop: use `shared_ptr` — its control block already implements the sanctioned optimization internally (relaxed increments; the final decrement ordered so destruction sees every write). Hand-rolling that is exactly the cleverness this chapter's advice forbids." },
        ],
        result: "One atomic counter, one atomic flag, one volatile device pointer, one mutex that stays, one library `shared_ptr` — nothing hand-rolled, nothing weaker than default.",
      },
      {
        title: "Reviewing concurrency code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the priority order: tasks, then threads and mutexes, then atomics, then fences and volatile.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Minimize shared writable data, then use the Chapter 42 tools; reserve this chapter's machinery for implementing and optimizing those tools." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `std::atomic<int> flag(0); flag.store(1, std::memory_order_release);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify any weakening below seq-cst with measurement and a written argument. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Default ordering (seq-cst) is the right choice for atoms in application code; weaker orders require a measured need and a written litmus argument." },
        ],
        result: "The review ends with findings tied to reasons: Minimize shared writable data, then use the Chapter 42 tools; reserve this chapter's machinery for implementing and optimizing those tools. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Minimize shared writable data, then use the Chapter 42 tools; reserve this chapter's machinery for implementing and optimizing those tools.",
      "Default ordering (seq-cst) is the right choice for atoms in application code; weaker orders require a measured need and a written litmus argument.",
      "volatile is only for special memory — device registers and signal-handler flags — never for communication between threads.",
    ],
    quiz: [
      {
        q: "Profiling says two threads contend on a shared counter, costing about 2% of run time. Your first move should be:",
        options: [
          "Rewrite the surrounding structure to be lock-free",
          "Measure the alternatives, then pick the simplest correct tool — likely an `atomic` or a sharded counter",
          "Mark the counter `volatile`",
          "Switch the loads to `memory_order_consume`",
        ],
        answer: 1,
        explanation: "The advice: measure first, then the simplest correct tool. Lock-free rewrites carry ABA and reclamation risk; volatile changes nothing about races; consume is the deprecated order nobody should be typing.",
      },
      {
        q: "A colleague 'fixes' a rare crash by adding `volatile` to a shared `int` that both threads use. The result:",
        options: [
          "The race is gone — volatile serializes the accesses",
          "The data race — and the undefined behavior — remain; only the code generation changed",
          "It now works, but only on 64-bit machines",
          "The compiler now rejects the program",
        ],
        answer: 1,
        explanation: "volatile stops the compiler from caching or eliding accesses but adds no atomicity and no ordering, so the two threads still conflict without happens-before — the definition of a data race.",
      },
      {
        q: "Which is a sanctioned use of `volatile`?",
        options: [
          "A stop flag polled by another thread",
          "Making a 64-bit store atomic on a 32-bit machine",
          "Reading a memory-mapped device status register",
          "Replacing the mutex around a priority queue",
        ],
        answer: 2,
        explanation: "Special memory is volatile's one job. Threads communicate through atomic (or mutexes); volatile contributes nothing to atomicity, ordering, or exclusion.",
      },
    ],
  },
]
