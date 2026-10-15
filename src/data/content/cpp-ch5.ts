import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 5: A Tour of C++ — Concurrency and Utilities (Sections 5.1 – 5.7)
// Master study content.
// ============================================================================

export const cppCh5Content: SectionContent[] = [
  // ------------------------------------------------------------------ 5.1
  {
    sectionId: "cpp-ch5-s1",
    readingTime: 4,
    intro: "The tour's final stop assembles the modern toolbox: automatic resource management, concurrency, and a shelf of small utilities — pairs, tuples, regular expressions, clocks, and the mathematical library. What unites them is that they are standard: code that used to be hand-rolled or platform-specific is now specified by ISO C++ and behaves identically everywhere. As a tour, this chapter gives each topic just enough depth to be used with confidence; the chapters ahead return to the foundations.",
    objectives: [
      "Define resource and recognize the resource kinds a real program manages",
      "State the single language mechanism C++ uses for every kind of resource",
      "Explain why the standard library — not your own code — is the first candidate for any job"
    ],
    concepts: [
      {
        term: "Resource",
        kind: "definition",
        statement: "**A resource is something a program acquires from somewhere and must eventually give back**: memory, file handles, locks, sockets, threads, timers. What makes resources hard is that the number available is finite and the release obligation is easy to forget along the many error paths a program can take.",
        detail: "Memory is only the most common resource. The chapter's central observation is that every resource — a lock, an open file, an allocation — follows the same acquire/release pattern and therefore deserves one uniform solution."
      },
      {
        term: "One mechanism, all resources",
        kind: "insight",
        statement: "**C++ handles every resource the same way: acquire in a constructor, release in a destructor, and let scope determine when the destructor runs.** Because destructors execute on every exit path, the technique scales from a single stack variable to a whole server.",
        detail: "Other languages bolt special machinery onto the problem — garbage collectors, `finally` blocks, `defer`. C++ builds cleanup into object lifetimes, which the compiler is already tracking for free."
      },
      {
        term: "The library-first principle",
        kind: "insight",
        statement: "**Before writing code, look for a standard-library component that already does the job.** Standard components are specified, portable, battle-tested by millions of users, and maintained by the whole community; a hand-rolled replacement starts at zero on all four counts.",
        detail: "The book's stance is blunt: a reason to avoid the standard library should be articulable, not habitual."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Utilities, resources and concurrency at a glance. You can claim this section when you can define resource and recognize the resource kinds a real program manages — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 5 (A Tour of C++: Concurrency and Utilities); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, state the single language mechanism C++ uses for every kind of resource. Then, explain why the standard library — not your own code — is the first candidate for any job. Finally, test the outcome against the section promise: A resource is anything acquired that must be released: memory, files, locks, sockets, threads.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Taking inventory of one function's resources",
        problem: "A web-server request handler must manage: an open socket, three heap buffers, a locked statistics mutex, and a spawned logging thread. How many resources, and what manages them?",
        steps: [
          { label: "Step 1: Count", text: "Five resources: one file descriptor (the socket), three memory allocations, one lock, one thread." },
          { label: "Step 2: Classify the pattern", text: "Each is acquired at a point in the code and must be released exactly once — including along early returns and exceptions." },
          { label: "Step 3: Match to handles", text: "`fstream` or a socket class for the descriptor, `vector` or `unique_ptr` for the buffers, `lock_guard` for the mutex, a joined or detached `thread` object for the thread." },
          { label: "Step 4: The payoff", text: "Five different resources, one management mechanism — every release is tied to a destructor, not to programmer discipline." }
        ],
        result: "Resources come in many kinds; the mechanism that tames them is a single one, which is the subject of the next section."
      },
      {
        title: "Working through introduction",
        problem: "Utilities, resources and concurrency at a glance. Your task: define resource and recognize the resource kinds a real program manages.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define resource and recognize the resource kinds a real program manages. Write down the guarantee you will rely on — for this chapter it is: A resource is anything acquired that must be released: memory, files, locks, sockets, threads." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto f = std::async(compute); int r = f.get();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — state the single language mechanism C++ uses for every kind of resource — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: All resources get the same treatment — constructor acquires, destructor releases, scope sets the lifetime. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A resource is anything acquired that must be released: memory, files, locks, sockets, threads. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A resource is anything acquired that must be released: memory, files, locks, sockets, threads.",
      "All resources get the same treatment — constructor acquires, destructor releases, scope sets the lifetime.",
      "Standard library first: `vector`, `string`, `thread`, `regex` and friends exist so you do not have to write them."
    ],
    quiz: [
      {
        q: "Which of the following is NOT a resource in the chapter's sense?",
        options: ["A file descriptor opened by `ofstream`", "A mutex locked by a thread", "A `const double` local variable holding 3.14", "A heap allocation obtained with `new`"],
        answer: 2,
        explanation: "A `const double` is an automatic object — the compiler manages its storage; nothing was acquired from a finite pool that must be given back. The other three are classic acquire/release obligations."
      },
      {
        q: "The single mechanism C++ uses to manage every kind of resource is:",
        options: ["Reference counting built into the language", "Acquire in a constructor, release in a destructor (RAII)", "A garbage collector that runs destructors", "`try`/`finally` blocks around every acquisition"],
        answer: 1,
        explanation: "RAII ties each resource to an object's lifetime; destructors run deterministically at scope exit on every path, including exceptions."
      },
      {
        q: "Faced with a new problem, the chapter's first rule is to:",
        options: ["write a small class for it", "use pointers and manual memory for control", "look for a standard-library component that solves it", "check what the operating system offers natively"],
        answer: 2,
        explanation: "The library-first principle: standard components are specified, portable and tested; writing your own needs a stated reason."
      }
    ]
  },

  // ------------------------------------------------------------------ 5.2
  {
    sectionId: "cpp-ch5-s2",
    readingTime: 9,
    intro: "Every program manages resources that must be released — and every error path is a chance to forget. This section presents C++'s systematic answer: tie each resource to the lifetime of a handle object. The technique, RAII, together with the two standard smart pointers `unique_ptr` and `shared_ptr` from `<memory>`, turns leaks from coding accidents into design decisions — and the exceptions they cannot prevent.",
    objectives: [
      "State the RAII idiom precisely and explain why destructor-based cleanup is exception-safe",
      "Choose between `unique_ptr` and `shared_ptr` and justify the default",
      "Trace a `shared_ptr` reference count through copies, scope exits and `reset`"
    ],
    concepts: [
      {
        term: "RAII — Resource Acquisition Is Initialization",
        kind: "definition",
        statement: "**Acquire the resource in a constructor and release it in the destructor of a handle object.** Because the destructor runs deterministically when the object's scope is left — by fall-through, by `return`, or by a propagating exception — every path from acquisition to release is covered by construction rather than by discipline.",
        detail: "The standard library is built this way throughout: `vector` frees its elements, `fstream` closes its file, `lock_guard` unlocks its mutex. RAII is not an exotic technique — it is how the library you already use is made safe."
      },
      {
        term: "`unique_ptr`: sole ownership",
        kind: "definition",
        statement: "**A `unique_ptr` owns its object exclusively: there is exactly one owner, the pointer can be moved but never copied, and the object is destroyed when the owner is.** It costs essentially nothing — the generated code matches a raw pointer with the `delete` placed at scope exit.",
        detail: "`unique_ptr<Record> p {new Record{\"Aal\"}};` hands ownership to `p`; `return p;` and `f(move(p))` transfer it elsewhere. Passing a `unique_ptr` by value states the ownership transfer in the type itself."
      },
      {
        term: "`shared_ptr`: shared ownership",
        kind: "definition",
        statement: "**A `shared_ptr` shares ownership: the last owner destroyed also destroys the object.** Ownership is tracked by a count in a per-object control block, so `shared_ptr` costs an extra allocation, atomic counter traffic, and — used carelessly — cycles that never release.",
        detail: "`shared_ptr<Record> p1 {new Record{\"Aal\"}};` then `auto p2 = p1;` gives two owners, and `p1.use_count()` is now 2. Cycles of `shared_ptr`s are broken with `weak_ptr`, which observes without owning."
      },
      {
        term: "The selection rule",
        kind: "insight",
        statement: "**Default to `unique_ptr`; use `shared_ptr` only when ownership is genuinely shared and lifetimes cannot be ordered.** Most relationships in a program are hierarchical — one owner — and expressing them with `shared_ptr` is both slower and less clear.",
        detail: "Refactoring a `shared_ptr` down to a `unique_ptr` usually clarifies a design; needing to refactor upward usually means the ownership design was never made explicit."
      },
      {
        term: "Handles everywhere",
        kind: "method",
        statement: "**Do not reserve RAII for memory: wrap each resource in a handle type as a matter of course.** The pattern — allocate in the constructor, release in the destructor, deal with copying in the copy operations — is identical for a memory buffer, an open file, a lock, or a socket.",
        detail: "Outside such handle implementations, pass owners as `unique_ptr`/`shared_ptr` and pass borrows as plain references or non-owning raw pointers."
      }
    ],
    figures: [
      {
        caption: "RAII ties a resource's lifetime to the handle object's scope: the destructor runs on fall-through, on a mid-function return, and during exception unwinding. The manual version has no such guarantee — its early return leaks the file.",
        afterConcept: 1,
        svg: `<svg viewBox="0 0 760 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RAII scope diagram contrasting handle-object lifetime with manual file management that leaks on an early return"><defs><marker id="ra5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="16" y="16" width="728" height="188" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="30" y="40" font-size="15" font-weight="600" fill="currentColor">RAII: the resource lives exactly as long as the handle</text><text x="34" y="76" font-family="monospace" font-size="13" fill="currentColor">void write_log()</text><text x="34" y="100" font-family="monospace" font-size="13" fill="currentColor">{</text><text x="34" y="124" font-family="monospace" font-size="13" fill="currentColor">  ofstream out{"log.txt"};   // ctor acquires the file</text><text x="34" y="148" font-family="monospace" font-size="13" fill="currentColor">  use(out);</text><text x="34" y="172" font-family="monospace" font-size="13" fill="currentColor">}   // dtor closes the file</text><line x1="468" y1="120" x2="556" y2="120" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.7"/><line x1="468" y1="168" x2="556" y2="168" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.7"/><rect x="560" y="120" width="14" height="48" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.8"/><text x="584" y="130" font-size="12" fill="currentColor" opacity="0.85">acquire: ctor opens</text><text x="584" y="150" font-size="14" fill="currentColor">resource alive</text><text x="584" y="166" font-size="12" fill="currentColor" opacity="0.85">release: dtor closes</text><text x="34" y="196" font-size="13" fill="currentColor" opacity="0.9">every exit — fall-through, mid-function return, or a propagating exception — passes through the destructor</text><rect x="16" y="216" width="728" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5" opacity="0.8"/><text x="30" y="240" font-size="15" font-weight="600" fill="currentColor">Manual management: no such guarantee</text><text x="34" y="268" font-family="monospace" font-size="13" fill="currentColor">FILE* f = fopen("log.txt", "w");</text><text x="34" y="292" font-family="monospace" font-size="13" fill="currentColor">if (bad) return;              // f leaks here</text><text x="34" y="316" font-family="monospace" font-size="13" fill="currentColor">use(f); fclose(f);</text><rect x="540" y="256" width="188" height="52" rx="6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="634" y="278" text-anchor="middle" font-size="13" fill="currentColor">no owner, no destructor</text><text x="634" y="296" text-anchor="middle" font-size="13" fill="currentColor">f is never closed</text><line x1="448" y1="288" x2="532" y2="282" stroke="currentColor" stroke-width="1.6" marker-end="url(#ra5a)"/></svg>`
      }
    ],
    examples: [
      {
        title: "Every exit path, covered by construction",
        problem: "A function must open a file, write to it, and close it — with an early `return` on a formatting error and a possible exception from the write. Compare the manual and RAII versions.",
        steps: [
          { label: "Step 1: Manual version", text: "`FILE* f = fopen(path, \"w\");` … `if (bad) return;` … `fclose(f);` — the early return skips the `fclose`, so the handle leaks on every bad input; a throw skips it too." },
          { label: "Step 2: RAII version", text: "`ofstream out{path};` — the constructor opens. `if (bad) return;` runs `~ofstream` on the way out, closing the file." },
          { label: "Step 3: The exception path", text: "If `use(out)` throws, stack unwinding destroys `out` exactly as a `return` would — there is no third code path to audit." }
        ],
        result: "The leak is gone, not by adding code, but by moving the release obligation into a destructor the language guarantees to run."
      },
      {
        title: "Counting shared owners",
        problem: "Trace the ownership count through: `shared_ptr<Record> p1 {new Record{\"Aal\"}};` then `auto p2 = p1;` in an inner scope, then `p1.reset();` last.",
        steps: [
          { label: "Step 1", text: "`p1` constructed: one owner, `p1.use_count()` is 1." },
          { label: "Step 2", text: "`p2` copies `p1`: two owners, both report `use_count()` of 2." },
          { label: "Step 3", text: "Inner scope ends: `p2` destroyed, count drops to 1 — the `Record` survives." },
          { label: "Step 4", text: "`p1.reset()` releases `p1`'s share: the count transitions $1 \\to 0$ and the destructor of `Record` runs at that moment." }
        ],
        result: "The object dies exactly at the last owner — neither early (dangling pointers) nor never (a leak)."
      }
    ],
    keyTakeaways: [
      "RAII: the constructor acquires, the destructor releases, and scope fixes the moment — on every exit path, including exceptions.",
      "`unique_ptr` is the near-zero-overhead default for sole ownership; `shared_ptr` buys shared lifetime with an allocation plus atomic counts.",
      "Smart pointers and containers are one idea: a handle object whose lifetime governs the resource's."
    ],
    quiz: [
      {
        q: "In RAII, the release of a resource is triggered by:",
        options: ["an explicit `close` call at each exit", "the destructor of the handle object running at scope exit", "the garbage collector", "a `finally` block"],
        answer: 1,
        explanation: "The destructor is generated code that runs on every exit from the scope — that is what removes the per-call-site discipline."
      },
      {
        q: "What makes `unique_ptr` unsuitable when two owners are genuinely needed?",
        options: ["It cannot be null", "It reference-counts too slowly", "It can be moved but never copied — exactly one owner can ever exist", "It only works for built-in types"],
        answer: 2,
        explanation: "Copying is deleted, so ownership cannot be shared; a second owner requires `shared_ptr`'s counted control block."
      },
      {
        q: "After `shared_ptr<Record> p1{new Record}; auto p2 = p1;` — what is `p1.use_count()`, and when is the `Record` destroyed?",
        options: ["1; when `p1` dies", "2; when the last of `p1` and `p2` dies", "2; when `p1` dies", "0; immediately"],
        answer: 1,
        explanation: "The copy raises the count to 2; destruction happens on the transition $1 \\to 0$, i.e. when the last owner is destroyed."
      },
      {
        q: "Why is `unique_ptr` the recommended default over `shared_ptr`?",
        options: ["It is simpler, nearly free at runtime, and most ownership is in fact exclusive", "It is faster to type", "`shared_ptr` is deprecated in C++11", "It supports custom deleters and `shared_ptr` does not"],
        answer: 0,
        explanation: "Exclusive ownership is the common case; `shared_ptr`'s control block and atomic counts buy something most designs do not need. (Both support custom deleters.)"
      },
      // PYQ-pattern — RAII locking versus manual unlock on exceptions (rephrased)
      {
        q: "A function must hold a mutex while updating shared state, including when an exception escapes. Which approach is correct?\n```cpp\n// P: m.lock(); update(); m.unlock();\n// Q: std::lock_guard<std::mutex> g(m); update();\n```",
        options: ["Q, because the guard destructor releases the mutex during unwinding, while P leaks the lock if `update()` throws", "P, because destructors never run while an exception is in flight", "Both are equivalent in every possible case", "Q, because the guard turns the mutex into a recursive one"],
        answer: 0,
        explanation: "Step 1: The data given is a manual lock pair and a guard object spanning the same update. Step 2: The governing rule is RAII: acquisition happens in the constructor, release in the destructor, and stack unwinding destroys local objects even along exception paths. Step 3: Tracing both paths, on success both release the lock, but when `update()` throws, P skips its `unlock` line while Q's guard is destroyed during unwinding and releases the mutex. Step 4: The distractors fail because destructors of locals do run during unwinding, the two forms differ exactly on the throwing path, and the guard changes nothing about recursion. Step 5: Therefore the guard form is the correct one."
      }
    ],
    depth: [
      {
        tier: "masters",
        title: "RAII as a theory of resource safety",
        blocks: [
          {
            kind: "para",
            body: "RAII is usually presented as an idiom, but it deserves to be stated as a small theory of resource safety, because the guarantee it gives is a theorem of the language's object model rather than a coding convention. The objects of the theory are **lifetimes**: the interval between an object's construction and its destruction. The language guarantees that lifetimes of automatic objects nest LIFO within a scope and end at scope exit — on every path. RAII's one observation is that a resource's lifetime can be *made equal to an object's lifetime*, after which every property of lifetimes — nesting, reverse-order destruction, exception-path execution — becomes a property of resources. That is why the technique is universal: nothing in it mentions memory, files or locks specifically."
          },
          {
            kind: "theorem",
            heading: "Deterministic release",
            body: "Let $S$ be a scope and $x$ an automatic object of type $T$ declared in $S$, whose constructor acquires a resource $R$ and whose destructor releases it. Then for every way control can leave $S$ — reaching the closing brace, executing a `return`, or propagating an exception through $S$ — the destructor `~T()` is executed on $x$ exactly once, and $R$ is released. Moreover, automatic objects of $S$ are destroyed in the *reverse* of their construction order, so resources acquired later are released first, and $x$ outlives every automatic object constructed inside scopes nested within $S$ after $x$ was built."
          },
          {
            kind: "proof",
            heading: "Why the theorem holds",
            body: "The two normal paths are compiled directly: at each point where control can leave the scope, the compiler emits destructor calls for the scope's fully constructed automatic objects, in reverse construction order — one code path per exit, not one per resource. The exception path is handled by the **unwinder**: when a frame contains no handler, the runtime destroys that frame's fully constructed automatic objects and continues outward. An object whose constructor threw is *not* itself destroyed — `~T()` must not run on a half-built object — but each already-constructed member and base subobject is. The single way to break the guarantee is a destructor that itself throws while an exception is in flight: two active exceptions call `std::terminate()`. Hence the classical discipline: destructors must not fail, and they must not acquire resources they can fail to release. Within those rules, correctness has been *transferred from every call site to one type definition* — which is the whole point."
          },
          {
            kind: "derivation",
            heading: "The cost model of `shared_ptr`",
            body: "A `shared_ptr<T>` is two words: the stored pointer plus a pointer to the **control block**, which holds the strong count, the weak count, and the deleter. Constructing from `new` costs two allocations (object and block); `make_shared<T>(...)` co-allocates them, halving allocator traffic and improving cache locality. Copying a `shared_ptr` is one atomic increment; destruction is one atomic decrement-and-test. The object dies on the strong count reaching 0; the block dies on the *weak* count reaching 0 — `weak_ptr`s keep the block (to check aliveness) but not the object alive. Note precisely what the atomics protect: the count, not the pointee. Copying one `shared_ptr` from two threads is safe; mutating the object it points to still needs a mutex."
          },
          {
            kind: "example",
            heading: "Exception safety of a container of handles",
            body: "Fill a `vector<unique_ptr<Shape>>` in a loop that constructs each `Shape` with `new`, wrapping each immediately in a `unique_ptr`. If the third constructor throws, unwinding destroys the vector, which destroys its two elements — their `unique_ptr` destructors `delete` the first two shapes. Nothing leaks, even though no line of the loop mentions cleanup. The raw-pointer version — `Shape* v[3]; v[0] = new Shape; v[1] = new Shape; v[2] = new Shape;` — leaks the first two shapes on the same throw, because the array has no destructor that could know about the pointers. The vector case composes two RAII types and inherits the guarantee; the raw case composes nothing and inherits nothing."
          },
          {
            kind: "remark",
            body: "Compare with garbage collection. A tracing collector reclaims memory well, but says nothing about the other resources — locks held, sockets open, transactions open — and its finalizers run at unpredictable times, if at all. RAII covers every resource kind with deterministic timing, and for the `unique_ptr` case it compiles to the same machine code as a raw pointer with the `delete` placed at scope exit: the guarantee is free. Large systems often run both: collection for memory, RAII for everything else. The design lesson survives the comparison: **make the destructor of the handle the one place the release code exists**, and lifetime questions stop being bug reports."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------ 5.3
  {
    sectionId: "cpp-ch5-s3",
    readingTime: 7,
    intro: "Most computers can do several things at once, and most computing problems are naturally concurrent — an interface that stays responsive while computation proceeds. C++11 makes concurrency part of the language and library: `thread` for hardware-level concurrency, tasks and `future`s for value-oriented work, `mutex` with `lock_guard` for protecting shared data, and `condition_variable` for waiting. The machinery is not the hard part — the data races that appear when threads share memory are, so they stay front and center.",
    objectives: [
      "Distinguish a task from a thread and say when to prefer each",
      "Define a data race and prevent one with `mutex` plus `lock_guard`",
      "Coordinate producer and consumer with `condition_variable`, and pass results through `future`"
    ],
    concepts: [
      {
        term: "Thread",
        kind: "definition",
        statement: "**A `thread` is the mechanism for running a task in the same address space as other tasks.** Construct it from a callable and it starts running immediately; `join()` waits for it to finish; every `thread` must be joined or detached before it is destroyed, or the program terminates.",
        detail: "`void f() { thread thr{my_task}; thr.join(); }` — the shared address space is both the point (cheap communication) and the hazard (races)."
      },
      {
        term: "Task and future",
        kind: "insight",
        statement: "**A task is an interface to a computation that can run concurrently; `async()` launches a task and returns a `future` — a handle on its result.** `fut.get()` blocks until the value is ready, and an exception thrown inside the task is re-thrown by `get()`. The system decides how many threads to use, so you reason about values, not scheduling.",
        detail: "Tasks carry both the result and the failure across the concurrency boundary — raw threads do neither without extra plumbing."
      },
      {
        term: "Data race and mutex",
        kind: "definition",
        statement: "**A data race is two threads accessing the same memory location with at least one write and no synchronization — and it is undefined behavior, not a wrong value.** The fix is mutual exclusion: a `mutex` only one thread can hold, acquired through a `lock_guard` so the critical section releases even on an exception.",
        detail: "`void increment() { lock_guard<mutex> lck{m}; ++count; }` — the mutex `m` is released at the closing brace, on every path. When in doubt, use a mutex; keep critical sections short."
      },
      {
        term: "condition_variable",
        kind: "method",
        statement: "**A `condition_variable` lets a thread wait for an event: `wait(lck)` releases the lock and sleeps until another thread calls `notify_one()` or `notify_all()`, then re-acquires the lock.** The standard shape is a queue shared between producers and consumers.",
        detail: "The consumer loop `unique_lock<mutex> lck{m}; while (queue.empty()) cond.wait(lck); auto msg = queue.front(); queue.pop(); lck.unlock();` — the `while` (not `if`) handles spurious wakeups and races between notification and re-acquisition."
      },
      {
        term: "Communicate by value",
        kind: "insight",
        statement: "**Where possible, let concurrent tasks communicate through `future`s and message queues rather than through shared mutable data.** Race-free by construction beats race-free by locking discipline — one less invariant a future maintainer can break.",
        detail: "This is why `async` plus `future` is the first tool to reach for; raw `thread` plus mutex is the mechanism underneath, kept for when you need the control."
      }
    ],
    examples: [
      {
        title: "Summing a vector with two tasks",
        problem: "Add up `vector<int> v{1,2,3,4,5,6,7,8}` using two concurrent tasks and combine their results.",
        steps: [
          { label: "Step 1: Split", text: "First half `{1,2,3,4}`, second half `{5,6,7,8}` — two ranges over the same storage, no copying." },
          { label: "Step 2: Launch", text: "`auto f1 = async(accum, &v[0], &v[4], 0);` and `auto f2 = async(accum, &v[4], &v[8], 0);` — each task returns its partial sum through a `future`." },
          { label: "Step 3: Verify the arithmetic", text: "$1+2+3+4 = 10$ and $5+6+7+8 = 26$." },
          { label: "Step 4: Combine", text: "`return f1.get() + f2.get();` — each `get()` blocks until its task is done, giving $10 + 26 = 36$." }
        ],
        result: "36 — the correct total of 1 through 8, with the partitioning arithmetic checkable by hand: $\\frac{8 \\times 9}{2} = 36$."
      },
      {
        title: "A lost-update race, quantified",
        problem: "Two threads each increment a shared `int` counter 500,000 times. What is the final value, with and without synchronization?",
        steps: [
          { label: "Step 1: The intended result", text: "$2 \\times 500{,}000 = 1{,}000{,}000$ — if every increment landed." },
          { label: "Step 2: Unprotected", text: "`++count` compiles to load, add, store. When both threads interleave loads of the same old value, both write the same new value and an update is lost. Typical observed finals hover near 873,000 — varies run to run, and formally undefined behavior." },
          { label: "Step 3: Protected", text: "Wrap the increment in `lock_guard<mutex> lck{m}; ++count;` — the loads and stores of any single increment no longer interleave." },
          { label: "Step 4: Result", text: "Exactly 1,000,000 on every run — correctness restored by exclusion, at the cost of serializing the critical section." }
        ],
        result: "1,000,000 exactly when locked; anything else when raced — including impossible-seeming values, because the race itself is undefined behavior."
      }
    ],
    keyTakeaways: [
      "Threads share an address space; tasks wrap that hazard in value communication — `async` returns a `future` carrying result or exception.",
      "A data race is undefined behavior; the cure is a mutex held via `lock_guard`, never unlocked by hand.",
      "`condition_variable` plus a shared queue is the producer–consumer shape; `wait` releases the lock while sleeping."
    ],
    quiz: [
      {
        q: "A data race is:",
        options: ["a deadlock", "two threads accessing the same object, at least one writing, with no synchronization — undefined behavior", "a missed notification", "a slow lock"],
        answer: 1,
        explanation: "The unsynchronized read/write overlap makes the program's meaning undefined — not merely wrong, but outside the language's guarantees."
      },
      {
        q: "When does the `lock_guard` release its mutex?",
        options: ["when `notify` is called", "when the programmer writes `unlock`", "at end of scope — including during exception unwinding", "never; the mutex stays held"],
        answer: 2,
        explanation: "The guard is itself an RAII object; its destructor unlocks, so scope exit — normal or exceptional — always releases."
      },
      {
        q: "`async(accum, args...)` returns:",
        options: ["the task's result, computed immediately", "a `promise` object", "a new thread handle that must be joined", "a `future` whose `get()` yields the result and rethrows any task exception"],
        answer: 3,
        explanation: "The launch is decoupled from the value: `get()` blocks until the task finishes, delivering either its return value or its exception."
      },
      {
        q: "Why does the book prefer tasks to threads?",
        options: ["tasks run faster", "the library chooses the number of threads, and exceptions and results travel through the future — you program with values", "threads are deprecated in C++11", "tasks cannot deadlock"],
        answer: 1,
        explanation: "Tasks express *what* to compute; the system decides *where*. Results and failures flow through one channel instead of ad-hoc shared state."
      }
    ]
  },

  // ------------------------------------------------------------------ 5.4
  {
    sectionId: "cpp-ch5-s4",
    readingTime: 6,
    intro: "Between the big containers and the specialized tools sits a shelf of small components the book reaches for constantly: `pair` and `tuple` for heterogeneous bundles, `chrono` for time as a typed quantity, plus function adapters and compile-time type predicates. Individually tiny, together they delete a whole class of bookkeeping code — and of bookkeeping bugs.",
    objectives: [
      "Use `pair` and `tuple` with `get`, `make_pair`/`make_tuple`",
      "Explain a `chrono` duration as a count plus a unit, and time a block with `steady_clock`",
      "Pick the correct clock for measuring intervals versus time-stamping"
    ],
    concepts: [
      {
        term: "pair",
        kind: "definition",
        statement: "**A `pair` holds two values of possibly different types, accessed as `.first` and `.second`.** It is the element type of the associative containers: a `map<K,V>` stores `pair<const K,V>`.",
        detail: "`make_pair(\"odd\", 1)` builds one without spelling the types; `p.first` is `\"odd\"`, `p.second` is `1`."
      },
      {
        term: "tuple",
        kind: "definition",
        statement: "**A `tuple` is the N-value generalization of `pair`: heterogeneous, its member count and types fixed at compile time, elements reached with `get<i>()`.** The index must be a compile-time constant; `tuple_size` reports the length.",
        detail: "`auto t = make_tuple(\"Sue\", 25, 63.5);` then `get<0>(t)` is `\"Sue\"` and `get<1>(t) = 26;` ages her. (Later standards add structured bindings that unpack a tuple into named locals.)"
      },
      {
        term: "duration and time_point",
        kind: "definition",
        statement: "**A `duration` is a count of ticks together with a compile-time unit; `milliseconds`, `microseconds`, `nanoseconds` are all `duration` specializations.** A `time_point` is a duration measured from a clock's epoch. Unit conversion happens implicitly when exact, and requires `duration_cast` when it could lose information.",
        detail: "`duration_cast<milliseconds>(t1-t0).count()` reads the integer tick count of an elapsed interval."
      },
      {
        term: "Choosing a clock",
        kind: "insight",
        statement: "**`steady_clock` never goes backwards — use it for measuring intervals; `system_clock` tracks wall-clock time — use it for time stamps.** Timing with a clock the operating system adjusts mid-measurement produces corrupt intervals.",
        detail: "The elapsed-time idiom: `auto t0 = steady_clock::now(); do_work(); auto d = steady_clock::now() - t0;` then cast `d` to the unit you want to report."
      },
      {
        term: "Type predicates and adapters",
        kind: "insight",
        statement: "**`<type_traits>` supplies compile-time facts about types (`is_integral`, `is_pointer`, `is_class`), and `function`/`bind` adapt callables to a common shape.** These are the small, precisely specified tools that keep generic code from sprouting project-local helpers.",
        detail: "The section's theme in one line: prefer a tiny standard component with exact semantics to a hand-written one with folklore semantics."
      }
    ],
    examples: [
      {
        title: "Reading and writing a tuple",
        problem: "Given `auto t = make_tuple(\"Sue\", 25, 63.5);`, read each element, change one, and report the length.",
        steps: [
          { label: "Step 1: Read", text: "`get<0>(t)` is `\"Sue\"` (a `const char*`-deduced string), `get<1>(t)` is `25`, `get<2>(t)` is `63.5`." },
          { label: "Step 2: Write", text: "`get<1>(t) = 26;` — `get` returns a reference to the element, so Sue ages." },
          { label: "Step 3: Size", text: "`tuple_size` reports 3 elements — a compile-time fact, not a stored count." },
          { label: "Step 4: Index rule", text: "`get<3>(t)` is a compile-time error: index must be constant and in range — mistakes surface before the program runs." }
        ],
        result: "A three-element heterogeneous record with compile-time-checked access — no struct declaration, no off-by-one runtime."
      },
      {
        title: "Timing a loop with `steady_clock`",
        problem: "Measure a 1,000-iteration loop and report the total in microseconds and the per-iteration cost.",
        steps: [
          { label: "Step 1: Capture the start", text: "`auto t0 = steady_clock::now();` — a `time_point` on the steady clock." },
          { label: "Step 2: Run and stop", text: "The loop executes; `auto d = steady_clock::now() - t0;` is a `duration` in the clock's native unit." },
          { label: "Step 3: Convert", text: "`duration_cast<microseconds>(d).count()` returns 412 — a measured total of 412 µs. In nanoseconds that same `d` casts to 412,000." },
          { label: "Step 4: Normalize", text: "Per iteration: $412\\,\\mu s / 1000 = 0.412\\,\\mu s = 412$ ns." }
        ],
        result: "Total 412 µs, per-iteration 412 ns — and the arithmetic is forced to be explicit because `chrono` will not silently divide by a count."
      }
    ],
    keyTakeaways: [
      "`pair` and `tuple` bundle heterogeneous values with compile-time indexed access; `make_pair`/`make_tuple` deduce the types.",
      "In `chrono`, time is typed: a duration is a count times a unit, and lossy conversions demand an explicit `duration_cast`.",
      "Measure intervals with `steady_clock`; time-stamp with `system_clock`."
    ],
    quiz: [
      {
        q: "Given `auto t = make_tuple(1, 2.5, \"x\");`, which expression fails to compile?",
        options: ["`get<0>(t)`", "`get<1>(t)`", "`get<2>(t)`", "`get<3>(t)`"],
        answer: 3,
        explanation: "Tuple indices are compile-time constants in range $0..2$ here; index 3 is out of range and rejected at compile time."
      },
      {
        q: "Why is `steady_clock` the right clock for measuring how long something took?",
        options: ["it has the highest resolution on every platform", "its time points never decrease — operating-system clock adjustments cannot corrupt the interval", "it returns a duration rather than a time_point", "it counts in nanoseconds by definition"],
        answer: 1,
        explanation: "Interval measurement needs monotonicity; `system_clock` can jump when the OS resets the time and would corrupt a difference."
      },
      {
        q: "`duration_cast<nanoseconds>(milliseconds{5}).count()` is:",
        options: ["5", "5000", "5000000", "a compile error"],
        answer: 2,
        explanation: "One millisecond is $10^6$ nanoseconds, so 5 ms is 5,000,000 ns; the conversion is lossless in this direction."
      },
      {
        q: "A `map<string,int>` stores its elements as:",
        options: ["`pair<string,int>`", "`pair<const string,int>`", "`tuple<string,int>`", "two parallel arrays"],
        answer: 1,
        explanation: "The key must not be modified through the map, so the stored type pairs a `const` key with the mapped value."
      }
    ]
  },

  // ------------------------------------------------------------------ 5.5
  {
    sectionId: "cpp-ch5-s5",
    readingTime: 6,
    intro: "Text is data, and recognizing patterns in text is a recurring job: phone numbers, dates, tags, log lines. The `<regex>` library brings regular expressions into the standard: declare a `regex`, search a `string`, inspect what matched through an `smatch`, rewrite with `regex_replace`. The default grammar is the ECMAScript one, used throughout this section.",
    objectives: [
      "Read and write the core regex notation: classes, quantifiers, groups, alternation",
      "Use `regex_search` with `smatch` to capture submatches",
      "Rewrite text with `regex_replace` and the `$` format markers"
    ],
    concepts: [
      {
        term: "The notation",
        kind: "notation",
        statement: "**Character classes (`\\d` digit, `\\w` word character, `[a-z]` ranges), quantifiers (`*` zero or more, `+` one or more, `?` optional, `{n}` and `{2,4}` counted), grouping `(...)`, and alternation `|`** compose into patterns: `\\d{3}-\\d{4}` is three digits, a dash, four digits.",
        detail: "The pattern language is its own small formalism — regex is a notation worth reading fluently, exactly like the math in a physics chapter."
      },
      {
        term: "`regex_search` and `smatch`",
        kind: "method",
        statement: "**`regex_search(s, m, pat)` finds the first substring matching `pat` and fills the `smatch m`: `m[0]` is the whole match, `m[i]` the text of the i-th captured group.** A failed search leaves `m` empty — test the `bool` result before using it.",
        detail: "Groups are what turn a match into data: wrapping parts of the pattern in `(...)` makes their text addressable as `m[1]`, `m[2]`, ..."
      },
      {
        term: "`regex_replace`",
        kind: "method",
        statement: "**`regex_replace(s, pat, fmt)` returns a copy of `s` with every match replaced by `fmt`, in which `$&` is the whole match and `$1`, `$2` are the captured groups.** One call performs a global find-and-rewrite.",
        detail: "Because it rewrites *every* match, the pattern must be anchored carefully — `^` and `\\b` (word boundary) are the usual tools."
      },
      {
        term: "Raw string literals",
        kind: "notation",
        statement: "**`R\"(...)\"` is a raw string literal: backslashes are characters, not escapes.** A regex reads as you would write it on paper — `R\"(\\w{2}\\s*=\\s*\\d+)\"` — instead of `\"\\\\w{2}\\\\s*=\\\\s*\\\\d+\"`, where every backslash must be escaped for the string before the regex ever sees it.",
        detail: "In a normal string literal `\\d` would be consumed by the compiler as an escape; the raw form passes it through to the regex engine untouched."
      },
      {
        term: "Regular Expressions: the working contract",
        kind: "definition",
        statement: "**Regular Expressions.** regex matching in minutes. You can claim this section when you can read and write the core regex notation: classes, quantifiers, groups, alternation — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 5 (A Tour of C++: Concurrency and Utilities); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Extracting a phone number",
        problem: "From `string s = \"call 258-3049 today\";` extract the phone number and then its two parts, using the pattern `R\"(\\d{3}-\\d{4})\"`.",
        steps: [
          { label: "Step 1: Search", text: "`smatch m; regex pat{R\"(\\d{3}-\\d{4})\"}; bool hit = regex_search(s, m, pat);` — `hit` is true; `m[0]` is `\"258-3049\"`." },
          { label: "Step 2: Capture", text: "Re-declare `pat2{R\"((\\d{3})-(\\d{4}))\"};` — now group 1 grabs the first three digits, group 2 the last four." },
          { label: "Step 3: Read the groups", text: "`m[1]` is `\"258\"` and `m[2]` is `\"3049\"`, while `m[0]` remains the whole `\"258-3049\"`." },
          { label: "Step 4: No match", text: "On `\"no numbers here\"`, `regex_search` returns false and `m` is empty — using `m[0]` without checking would be the bug." }
        ],
        result: "Pattern plus two groups: `m[0]` = 258-3049, `m[1]` = 258, `m[2]` = 3049 — the string parsed into data in one search."
      },
      {
        title: "Reformatting ISO dates",
        problem: "Rewrite every date of the form year-month-day in `\"deadline 2025-1-30 firm\"` to month/day/year.",
        steps: [
          { label: "Step 1: Pattern with groups", text: "`regex pat{R\"((\\d{4})-(\\d{1,2})-(\\d{1,2}))\"};` — year is 4 digits, month and day are 1 or 2." },
          { label: "Step 2: Identify the captures", text: "On the match `2025-1-30`: `$1` is `2025`, `$2` is `1`, `$3` is `30`." },
          { label: "Step 3: Replace", text: "`regex_replace(s, pat, \"$2/$3/$1\")` reorders the groups into month/day/year at every match." },
          { label: "Step 4: Result", text: "The output string is `\"deadline 1/30/2025 firm\"` — untouched text passes through, only matches are rewritten." }
        ],
        result: "\"deadline 1/30/2025 firm\" — a global reformat driven entirely by group ordering."
      }
    ],
    keyTakeaways: [
      "`regex` + `regex_search` + `smatch` for finding: `m[0]` is the whole match, `m[i]` the i-th captured group.",
      "`regex_replace` with `$&`, `$1`, `$2` rewrites every match in one pass.",
      "Write patterns as raw strings `R\"(...)\"` so a backslash in the pattern survives the string literal."
    ],
    quiz: [
      {
        q: "Which string does the pattern `\\d{3}-\\d{4}` match?",
        options: ["555-1234", "5551234", "55-12345", "5555-123"],
        answer: 0,
        explanation: "Exactly three digits, a dash, exactly four digits — the others have the wrong count on one side or no dash."
      },
      {
        q: "After a successful `regex_search` into `smatch m` with pattern `(\\d{3})-(\\d{4})`, `m[1]` holds:",
        options: ["the entire match", "the first captured group — the three digits", "the text before the match", "the number of groups"],
        answer: 1,
        explanation: "`m[0]` is the whole match; each parenthesized group contributes `m[1]`, `m[2]`, ... in order of its opening parenthesis."
      },
      {
        q: "In a `regex_replace` format string, `$&` denotes:",
        options: ["the first captured group", "a literal dollar sign", "the entire match", "the unmatched remainder"],
        answer: 2,
        explanation: "`$&` is the whole matched text; `$1`, `$2`, ... are the groups. That is the full format vocabulary you need for rewrites."
      }
    ]
  },

  // ------------------------------------------------------------------ 5.6
  {
    sectionId: "cpp-ch5-s6",
    readingTime: 5,
    intro: "Scientific and engineering code needs more than the arithmetic operators: `<cmath>` supplies the classical functions, `<complex>` makes complex numbers a first-class type, `<random>` separates engines from distributions, `<numeric>` holds the accumulation family, and `<valarray>` offers numeric arrays whose expressions the compiler can optimize. A quick tour of each — plus the precision limits every programmer should be able to quote.",
    objectives: [
      "Use the `<cmath>` function set and distinguish `floor`, `ceil`, `round`, `trunc`",
      "Compute with `complex<double>` and with engines-plus-distributions from `<random>`",
      "Quote the precision limits of `float` and `double` from `numeric_limits`"
    ],
    concepts: [
      {
        term: "`<cmath>`",
        kind: "definition",
        statement: "**The classical mathematical functions — `sqrt`, `pow`, `log`, `exp`, `sin`, `cos`, `abs` — overloaded for `float`, `double` and `long double`, with integral arguments promoted to `double`.** The rounding functions differ in direction: `floor` toward negative infinity, `ceil` toward positive infinity, `trunc` toward zero, `round` to nearest (halves away from zero).",
        detail: "`floor(-2.5)` is `-3.0` but `trunc(-2.5)` is `-2.0` — the pair that catches the unwary."
      },
      {
        term: "`<complex>`",
        kind: "definition",
        statement: "**`complex<double>` supports the full arithmetic with the usual mathematical meaning:** `abs`, `real`, `imag`, `polar`, and complex overloads of `sqrt`, `exp`, `log`. The book's Mandelbrot example is a few lines because the type does the algebra.",
        detail: "`complex<double> z{3,4};` builds $3+4i$; `abs(z)` is $5$; operators compose exactly as written on paper."
      },
      {
        term: "`<random>`",
        kind: "insight",
        statement: "**An engine produces raw bit sequences; a distribution shapes them into the distribution you asked for.** `default_random_engine re; normal_distribution<double> nd{31.0, 8.0};` — then `nd(re)` yields the next sample from $N(31, 8^2)$.",
        detail: "`rand()%n` is the anti-pattern: modulo bias plus weak low bits. The engine/distribution split lets you swap either half independently."
      },
      {
        term: "`<numeric>`",
        kind: "definition",
        statement: "**The accumulation family: `accumulate`, `inner_product`, `partial_sum`, `iota` — generalizations of `+` and `*` over any sequence.** `accumulate(v.begin(), v.end(), 0.0)` sums a `vector<double>`; the *type of the initial value* decides the arithmetic's type.",
        detail: "Summing a `vector<int>` with initial value `0` overflows as an `int`; with `0.0` it computes in `double` — a one-character fix to a classic bug."
      },
      {
        term: "Precision limits",
        kind: "definition",
        statement: "**`numeric_limits<T>::epsilon()` is the gap between 1.0 and the next representable value: $2^{-23} \\approx 1.19\\times10^{-7}$ for `float` (24-bit significand, about 6 significant decimal digits) and $2^{-52} \\approx 2.22\\times10^{-16}$ for `double` (53-bit, about 15).** Every integer up to $2^{53}$ is exact in a `double`; $0.1$ is not.",
        detail: "Hence `0.1 + 0.2` printing as `0.30000000000000004`: both operands are the nearest representable doubles, and so is their sum."
      }
    ],
    examples: [
      {
        title: "Complex arithmetic, by hand and by machine",
        problem: "Compute the product $(3+4i)(1-2i)$ and the magnitude of $3+4i$ — then write the code.",
        steps: [
          { label: "Step 1: Expand the product", text: "$(3+4i)(1-2i) = 3 - 6i + 4i - 8i^2 = 3 - 2i + 8 = 11 - 2i$." },
          { label: "Step 2: Magnitude", text: "$|3+4i| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$." },
          { label: "Step 3: Code", text: "`complex<double> z{3,4}; complex<double> w{1,-2}; cout << z*w << ' ' << abs(z);`" },
          { label: "Step 4: Output", text: "`(11,-2) 5` — the type prints as an ordered pair and the magnitudes agree with the hand computation." }
        ],
        result: "$(11,-2)$ and $5$ — machine and by-hand algebra match exactly."
      },
      {
        title: "How tall is the histogram peak?",
        problem: "Draw 400 samples from `normal_distribution<double> nd{31.0, 8.0}` into unit-width buckets. Roughly how many land in the bucket containing the mean?",
        steps: [
          { label: "Step 1: Density at the mean", text: "The normal density peaks at $\\frac{1}{\\sigma\\sqrt{2\\pi}}$ — with $\\sigma = 8$: $\\frac{1}{8 \\times 2.5066} = 0.04987$ per unit." },
          { label: "Step 2: Expected count", text: "$400 \\times 0.04987 \\approx 19.9$ — about 20 samples in the central bucket." },
          { label: "Step 3: Sanity check", text: "Two standard deviations of width ($\\sigma/2$ each side) holds about 68% of the mass: $0.68 \\times 400 \\approx 272$ samples within buckets 23–39." },
          { label: "Step 4: Run it", text: "`for (int i = 0; i < 400; ++i) { int k = (int)round(nd(re)); if (0 <= k && k < 64) ++h[k]; }` — the observed peak lands near 20." }
        ],
        result: "About 20 per bucket at the mean — the arithmetic of the distribution is checkable before the code is run."
      }
    ],
    keyTakeaways: [
      "`<cmath>` and `<complex>` give the classical mathematics with the expected semantics — mind the four rounding directions.",
      "`<random>` is engine times distribution; never `rand()%n`.",
      "`float` carries ~6 significant digits, `double` ~15; integers are exact in a `double` up to $2^{53}$ — but 0.1 is not exact at any size."
    ],
    quiz: [
      {
        q: "`floor(-2.5)` and `trunc(-2.5)` are, respectively:",
        options: ["-3.0 and -3.0", "-3.0 and -2.0", "-2.0 and -3.0", "-2.5 and -2.5"],
        answer: 1,
        explanation: "`floor` heads toward negative infinity, `trunc` toward zero — for negatives they differ."
      },
      {
        q: "In `normal_distribution<double> nd{31.0, 8.0}; ... nd(re);`, the expression `nd(re)` is:",
        options: ["passing the engine to the distribution to obtain the next shaped value", "reseeding the engine", "resetting the distribution", "reading the engine's state"],
        answer: 0,
        explanation: "The distribution is a functor: give it an engine's raw output and it returns a value with the requested distribution."
      },
      {
        q: "`numeric_limits<double>::epsilon()` is approximately:",
        options: ["$2.22\\times10^{-16}$", "$1.19\\times10^{-7}$", "$2^{53}$", "exactly 0"],
        answer: 0,
        explanation: "A 53-bit significand makes the gap near 1.0 equal to $2^{-52} \\approx 2.22\\times10^{-16}$; the float figure is $2^{-23}$."
      },
      {
        q: "Why is `rand()%n` discouraged?",
        options: ["`rand` is deprecated", "modulo bias and weak low bits make the distribution wrong", "it is too slow", "it only works for n below 100"],
        answer: 1,
        explanation: "The remainder maps unevenly when RAND_MAX+1 is not a multiple of n, and rand's low bits are historically poor — engines plus distributions fix both."
      }
    ]
  },

  // ------------------------------------------------------------------ 5.7
  {
    sectionId: "cpp-ch5-s7",
    readingTime: 4,
    intro: "The chapter closes with rules of thumb — the tour distilled into guidance you can apply at code review. Most reduce to a single move: replace hand-rolled resource and concurrency code with the standard machinery the preceding six sections showed. Advice sections read fast precisely because they cost the most when ignored.",
    objectives: [
      "Apply the chapter's advice rules to audit a code fragment",
      "Justify each rule by naming the standard mechanism that replaces the offending code",
      "Recognize situations where the standard tools genuinely do not fit"
    ],
    concepts: [
      {
        term: "Library before hand-rolled code",
        kind: "law",
        statement: "**Use standard-library components in preference to your own.** Before writing a string class, a hash table, or a regex matcher, state what the standard one cannot do — the answer is usually nothing.",
        detail: "This chapter's components — smart pointers, `thread`, `async`, `tuple`, `regex`, `cmath` — exist so that those wheels are never reinvented."
      },
      {
        term: "No bare new/delete in application code",
        kind: "law",
        statement: "**Keep resource management inside handles: `vector`, `string`, `unique_ptr`, `shared_ptr`.** Raw `new` and `delete` scattered through code is where leaks and dangling pointers are born.",
        detail: "A `new` expression belongs inside the implementation of a handle type; everything above that level passes owners as smart pointers or borrows as references."
      },
      {
        term: "Tasks before threads",
        kind: "law",
        statement: "**Prefer tasks — `async` returning a `future` — to threads when you want the result.** Threads are the mechanism; tasks express the computation, with exceptions and return values carried for you.",
        detail: "Drop to `thread` when you genuinely manage hardware concurrency yourself: long-lived workers, custom scheduling, pinning."
      },
      {
        term: "Never throw while holding a lock",
        kind: "law",
        statement: "**Code inside a critical section must not let an exception escape.** The `lock_guard` will unlock, but the handler runs while shared data may be in an inconsistent state, and locking discipline leaks into exception handling where nobody planned for it.",
        detail: "Keep critical sections short and exception-free; compute outside the lock what can be computed outside."
      },
      {
        term: "Shipping rule for a tour of C++: concurrency and utilities",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Default answers: `vector`, `string`, `unique_ptr`, `async`, `regex` — write your own only with a stated reason.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing a function against the chapter's advice",
        problem: "Review this fragment against the chapter's rules: `int* buf = new int[n]; if (n > 100) return 0; fill(buf, n); thread t{log_stats}; delete[] buf;`",
        steps: [
          { label: "Step 1: Leak", text: "The early `return` skips `delete[] buf` — violates 'no bare new/delete'. Fix: `vector<int> buf(n);` — release is automatic on every path." },
          { label: "Step 2: Thread never joined", text: "`t` is destroyed without `join()` or `detach()` — the program terminates. Fix: `t.join()` before return, or express the logging as `async`." },
          { label: "Step 3: Hand-rolled fill", text: "`fill(buf, n)` reinvents what the library does — fix: the vector initializes, or use `std::fill`/`iota` from `<numeric>`." },
          { label: "Step 4: Count", text: "Three violations in four lines — each one is a rule from this chapter, and each fix deletes code rather than adding it." }
        ],
        result: "The audited version is shorter than the original: `vector<int> buf(n);` plus a joined (or `async`) logging task — every failure mode removed by construction."
      },
      {
        title: "Reviewing a tour of C++: concurrency and utilities code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's advice rules to audit a code fragment.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Default answers: `vector`, `string`, `unique_ptr`, `async`, `regex` — write your own only with a stated reason." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `auto f = std::async(compute); int r = f.get();`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify each rule by naming the standard mechanism that replaces the offending code. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Bare `new`/`delete` belongs inside handle implementations, never in business code." },
        ],
        result: "The review ends with findings tied to reasons: Default answers: `vector`, `string`, `unique_ptr`, `async`, `regex` — write your own only with a stated reason. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Default answers: `vector`, `string`, `unique_ptr`, `async`, `regex` — write your own only with a stated reason.",
      "Bare `new`/`delete` belongs inside handle implementations, never in business code.",
      "Concurrency: tasks over threads, short exception-free critical sections, every `thread` joined or detached."
    ],
    quiz: [
      {
        q: "Which fix best applies the chapter's advice to `int* p = new int[n]; ...; delete[] p;` when the function has several early returns?",
        options: ["add a `delete[]` before every return", "wrap the block in `try`/`catch`", "use `vector<int>` (or a smart pointer) so release happens at scope exit", "make `p` a global"],
        answer: 2,
        explanation: "The advice is to remove the manual release obligation entirely, not to enumerate every path that needs to remember it."
      },
      {
        q: "The advice 'never throw while holding a lock' exists because:",
        options: ["exceptions cannot propagate out of threads", "a throw can escape a critical section leaving shared data inconsistent, and drags locking into exception handling", "locks are destroyed by a throw", "it makes the mutex recursive"],
        answer: 1,
        explanation: "The guard unlocks — the problem is what the handler then sees and who is prepared for it. Keep critical sections short and non-throwing."
      },
      {
        q: "'Prefer tasks to threads' means:",
        options: ["never use `thread`", "express concurrent work as `async` returning a `future`, unless you need explicit thread control", "threads are slower in C++11", "tasks cannot share memory"],
        answer: 1,
        explanation: "Tasks are the higher-level interface to the same machinery — reach for `thread` when you are managing the concurrency yourself."
      }
    ]
  }
]
