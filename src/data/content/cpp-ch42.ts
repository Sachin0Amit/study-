import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 42: Threads and Tasks (Sections 42.1 – 42.5)
// Master study content.
// ============================================================================

export const cppCh42Content: SectionContent[] = [
  // ---------------------------------------------------------------- 42.1
  {
    sectionId: "cpp-ch42-s1",
    readingTime: 5,
    intro: "Concurrency stopped being optional when single-core clock speeds flattened: since about 2005, essentially all performance gains come from keeping several cores busy, and responsiveness — a user interface that never freezes while a computation runs — demands the same structure. TC++PL treats the subject in two chapters: this one presents the thread and task machinery itself, while chapter 41 supplies the low-level memory model. Stroustrup's central teaching is that you should think in terms of tasks — computations that produce results — and reach for raw threads only when you need tight control.",
    objectives: [
      "Distinguish a thread from a task and say what each is for",
      "Explain why the standard model is shared memory with explicit synchronization",
      "Name the two levels of standard-library concurrency support and their members",
    ],
    concepts: [
      {
        term: "Concurrency and parallelism",
        kind: "definition",
        statement: "A program is **concurrent** when it is structured as computations whose interleaving order is not fixed in advance; it runs **in parallel** when hardware executes parts of it at the same instant. Concurrency is a property of the design, parallelism a property of the execution — multicore hardware rewards designs that expose concurrency.",
        detail: "The book's example domains are the same in both cases: a web server answering many clients, a GUI staying live during a long computation, and scientific code splitting a vector across cores.",
      },
      {
        term: "Thread",
        kind: "definition",
        statement: "A **thread** is an independent sequence of execution within a process; all threads of a process share its address space. The standard-library type `std::thread` is a handle to such an execution: constructing one with a function starts it running.",
        detail: "Threads are a systems-level notion — scheduled by the operating system, sharing memory, cheap to request but not free (creation costs tens of microseconds).",
      },
      {
        term: "Task",
        kind: "definition",
        statement: "A **task** is a computation that can execute concurrently with other computations and communicates its result through a returned value delivered by a `future`. You specify *what* is to be computed and how independent it is; the library and runtime decide *where* it runs.",
        detail: "The task abstraction carries three wins over raw threads: the result comes back as a value, exceptions travel with it, and the launch strategy (new thread, pool, or lazy execution) is separated from the algorithm.",
      },
      {
        term: "Shared memory, not message passing",
        kind: "insight",
        statement: "The standard's model of concurrency is **shared memory**: threads of a process see the same objects, so unsynchronized access to mutable data is a hazard to be managed with `mutex` (this chapter) or `atomic` (chapter 41). Message passing is a useful discipline built on top of these primitives, not a language-level alternative.",
        detail: "TC++PL notes this explicitly: there is no standard message-passing facility; you build one from mutexes, condition variables, and futures if you want one.",
      },
      {
        term: "Two levels of support",
        kind: "insight",
        statement: "The library offers **two layers**: the system level — `std::thread`, `mutex`, `condition_variable` — and the task level — `future`, `promise`, `packaged_task`, `async`. The book's recommendation is to work at the task level for most parallelism and descend to the thread level only when you must control scheduling yourself (a thread pool, a dedicated I/O thread, priorities).",
        detail: "The task level is built *from* the thread level; understanding both orders makes each layer's costs and guarantees intelligible.",
      },
    ],
    examples: [
      {
        title: "A speedup you can verify",
        problem: "Why split a simple loop at all? Sum a vector of 8,000,000 doubles holding 1.0, 2.0, ..., 8,000,000.0, first serially, then as two concurrent halves.",
        steps: [
          { label: "Step 1: Serial reference", text: "A straightforward loop over the whole vector measures 11.6 ms on a 4-core laptop. This is the baseline." },
          { label: "Step 2: Split the work", text: "Each half is 4,000,000 elements: the first sums to 4,000,000 × 4,000,001 / 2 = 8,000,002,000,000 (= 8.000002 × 10¹²); the second to 24,000,002,000,000." },
          { label: "Step 3: Run both halves concurrently", text: "Two threads, one per half; measured wall-clock time is about 6.1 ms, including roughly 2 × 27 μs of thread-creation overhead." },
          { label: "Step 4: Check the arithmetic", text: "8,000,002,000,000 + 24,000,002,000,000 = 32,000,004,000,000, which equals 8,000,000 × 8,000,001 / 2 — the closed-form sum, so the parallel result is exactly right." },
        ],
        result: "Speedup 11.6 / 6.1 ≈ 1.9× for the price of two thread constructions and a join; perfect speedup would be 2.0, and the missing ~0.1 is creation, joining, and two cores streaming through one memory bus.",
      },
      {
        title: "Working through introduction",
        problem: "Threads and tasks. Your task: distinguish a thread from a task and say what each is for.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish a thread from a task and say what each is for. Write down the guarantee you will rely on — for this chapter it is: A thread is a handle on an execution mechanism; a task is a computation whose result arrives through a future." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::thread t(work); t.join();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why the standard model is shared memory with explicit synchronization — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The standard model is shared memory: threads share address space and coordinate with mutexes and atomics. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A thread is a handle on an execution mechanism; a task is a computation whose result arrives through a future. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A thread is a handle on an execution mechanism; a task is a computation whose result arrives through a future.",
      "The standard model is shared memory: threads share address space and coordinate with mutexes and atomics.",
      "Work at the task level (`async`, `packaged_task`, `future`) by default; drop to `std::thread` only for control over scheduling.",
    ],
    quiz: [
      {
        q: "Which statement best captures the difference between a thread and a task as TC++PL uses the terms?",
        options: [
          "A task is a small thread managed by the operating system.",
          "A thread is a direct handle on an execution sequence, while a task is a computation whose result is delivered through a `future` — you state what should run, not where.",
          "Tasks cannot access shared memory; threads can.",
          "A thread returns a value; a task does not.",
        ],
        answer: 1,
        explanation: "The task abstraction is value-oriented: launch a computation, collect its result through a future. The thread abstraction is execution-oriented: you own the scheduling.",
      },
      {
        q: "The standard-library concurrency support is deliberately two-layered. Which grouping is right?",
        options: [
          "`thread`, `mutex`, `atomic` at the system level; `future`, `async`, `packaged_task` at the task level.",
          "`string`, `vector` versus `array`, `list`.",
          "`cin`, `cout` versus `printf`, `scanf`.",
          "`auto`, `decltype` versus `constexpr`, `static_assert`.",
        ],
        answer: 0,
        explanation: "Chapter 41 plus this chapter's first half is the system level; the future family is the task level built on top of it.",
      },
      {
        q: "What is the standard C++ model of communication between concurrently running threads?",
        options: [
          "Message passing through typed channels.",
          "Copy-on-write transactional memory.",
          "Signals and interrupts only.",
          "Shared memory: threads share an address space and coordinate access with `mutex` and `atomic`.",
        ],
        answer: 3,
        explanation: "C++ has no primitive message passing; threads see the same objects, and unsynchronized access to mutable data must be prevented with synchronization.",
      },
      {
        q: "A program spends 10 ms in inherently serial setup and 100 ms of perfectly divisible work you split across 4 cores. Ignoring overheads, what wall time is the best you can hope for?",
        options: [
          "27.5 ms",
          "35 ms",
          "25 ms",
          "10 ms",
        ],
        answer: 1,
        explanation: "10 ms of serial work cannot shrink; 100 ms over 4 cores adds 25 ms. Total 35 ms — the serial fraction is the ceiling on speedup, an idea the cost model in section 42.4 makes precise.",
      },
    ],
  },

  // ---------------------------------------------------------------- 42.2
  {
    sectionId: "cpp-ch42-s2",
    readingTime: 7,
    intro: "A `std::thread` is constructed from a function (or any callable) plus its arguments, and it starts running immediately — construction is the spawn. This section covers the lifecycle — `join`, `detach`, and the destructor's harsh `terminate()` rule — how arguments travel to a thread (by copy, unless you explicitly ask for a reference), and how a thread that must produce a result can hand it back safely.",
    objectives: [
      "Construct and join threads, and explain the destructor's termination rule",
      "Predict how arguments are passed to a thread function, including by reference and to members",
      "Return results from a thread through storage owned by the joining thread",
    ],
    concepts: [
      {
        term: "std::thread",
        kind: "definition",
        statement: "Constructing `std::thread t {f, args}` starts a new thread of execution that immediately (as if) invokes `f(args...)`. `t.join()` waits for it to finish; `t.detach()` severs ownership, leaving the thread running on its own; a default-constructed, moved-from, joined, or detached thread is **not joinable**.",
        detail: "`join()` is the normal way to end a thread's life: after it returns, the thread object refers to nothing and its result (if written through agreed storage) may be read.",
      },
      {
        term: "The termination rule",
        kind: "law",
        statement: "**Destroying a joinable `std::thread` invokes `std::terminate()`** — and so does letting an uncaught exception escape the thread's function. Both rules say the same thing: a running thread is a resource you must explicitly manage, and errors do not travel across raw thread boundaries by themselves.",
        detail: "This is the single most common first crash in threaded C++: forgetting the `join()` and letting the thread object go out of scope while the function is still running.",
      },
      {
        term: "Passing arguments",
        kind: "method",
        statement: "Arguments are **decay-copied into thread-owned storage**, exactly as if passed by value; pass `std::ref(x)` to hand over a genuine reference, and invoke a member function as `std::thread t {&C::run, &obj, args}`. The classic bug is passing a pointer or reference to a local that dies before the thread finishes using it.",
        detail: "The copy is not a nuisance but a safety feature: what the thread keeps alive is decided at the launch line. When you *want* sharing, you must say so — and then you own the lifetime question.",
      },
      {
        term: "Returning results",
        kind: "method",
        statement: "A raw thread has no return value. Write the result through a pointer or reference to storage that outlives the thread, and **`join()` before reading** — read early and you have a race, not a result.",
        detail: "This is exactly the ceremony that `future` and `async` (section 42.4) remove: they turn the write-then-join-then-read handshake into one call returning the value.",
      },
      {
        term: "this_thread and hardware queries",
        kind: "notation",
        statement: "Inside a thread, `this_thread::get_id()` identifies you, `sleep_for(chrono::milliseconds(100))` and `sleep_until` park you, and `yield()` offers to give up the core. Statically, `thread::hardware_concurrency()` returns a hint of the number of hardware thread contexts — or 0 if the implementation cannot tell.",
        detail: "Treat `hardware_concurrency()` as advice: use it to size work splits, never as a guarantee, and always handle the 0 case.",
      },
    ],
    figures: [
      {
        caption: "Lifetime of two thread objects. Construction spawns; join() blocks the caller until the thread's function returns; both joins happen before scope end, so the destructors see non-joinable threads. Skip the joins and the destructor of a joinable thread calls std::terminate().",
        afterConcept: 2,
        svg: '<svg viewBox="0 0 760 330" width="100%" role="img" aria-label="Timeline of two threads spawned by a caller, both joined before scope end" font-family="ui-sans-serif, system-ui"><text x="380" y="20" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Lifetime of two std::thread objects</text><rect x="70" y="32" width="18" height="10" rx="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1"/><text x="94" y="41" font-size="10" fill="currentColor">running</text><rect x="150" y="32" width="18" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2"/><text x="174" y="41" font-size="10" fill="currentColor">blocked in join()</text><text x="64" y="88" text-anchor="end" font-size="10.5" fill="currentColor">caller (main)</text><text x="64" y="172" text-anchor="end" font-size="10.5" fill="currentColor">thread t1</text><text x="64" y="256" text-anchor="end" font-size="10.5" fill="currentColor">thread t2</text><rect x="70" y="77" width="390" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><rect x="460" y="77" width="60" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><rect x="520" y="77" width="40" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><rect x="560" y="77" width="50" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><rect x="610" y="77" width="50" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><rect x="660" y="77" width="40" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8"/><rect x="150" y="161" width="370" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="335" y="172" text-anchor="middle" font-size="10" fill="currentColor">f() runs on t1</text><rect x="210" y="245" width="400" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="410" y="256" text-anchor="middle" font-size="10" fill="currentColor">g() runs on t2</text><line x1="150" y1="91" x2="150" y2="153" stroke="currentColor" stroke-width="1.2"/><polygon points="146,153 150,161 154,153" fill="currentColor"/><text x="156" y="124" font-size="10" fill="currentColor">std::thread t1{f}; spawns f</text><line x1="210" y1="91" x2="210" y2="237" stroke="currentColor" stroke-width="1.2"/><polygon points="206,237 210,245 214,237" fill="currentColor"/><text x="216" y="200" font-size="10" fill="currentColor">std::thread t2{g}; spawns g</text><line x1="520" y1="161" x2="520" y2="95" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><polygon points="516,97 520,89 524,97" fill="currentColor"/><text x="514" y="132" text-anchor="end" font-size="9.5" fill="currentColor">f() returns → join() unblocks main</text><line x1="610" y1="245" x2="610" y2="95" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><polygon points="606,97 610,89 614,97" fill="currentColor"/><text x="604" y="180" text-anchor="end" font-size="9.5" fill="currentColor">g() returns → join() unblocks main</text><text x="490" y="70" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.85">blocked in t1.join()</text><text x="575" y="70" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.85">blocked in t2.join()</text><text x="700" y="58" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.9">scope ends</text><text x="700" y="70" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.9">joined: dtors safe</text><text x="390" y="296" text-anchor="middle" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.85">If a joinable thread is destroyed instead, its destructor calls std::terminate().</text><line x1="70" y1="304" x2="706" y2="304" stroke="currentColor" stroke-width="1.5"/><polygon points="706,300 714,304 706,308" fill="currentColor"/><text x="716" y="308" font-size="10" font-style="italic" fill="currentColor">time</text><line x1="150" y1="304" x2="150" y2="309" stroke="currentColor" stroke-width="1.2"/><line x1="210" y1="304" x2="210" y2="309" stroke="currentColor" stroke-width="1.2"/><line x1="460" y1="304" x2="460" y2="309" stroke="currentColor" stroke-width="1.2"/><line x1="520" y1="304" x2="520" y2="309" stroke="currentColor" stroke-width="1.2"/><line x1="610" y1="304" x2="610" y2="309" stroke="currentColor" stroke-width="1.2"/><line x1="660" y1="304" x2="660" y2="309" stroke="currentColor" stroke-width="1.2"/><text x="150" y="322" text-anchor="middle" font-size="9.5" fill="currentColor">t1 born</text><text x="210" y="322" text-anchor="middle" font-size="9.5" fill="currentColor">t2 born</text><text x="490" y="322" text-anchor="middle" font-size="9.5" fill="currentColor">join t1</text><text x="585" y="322" text-anchor="middle" font-size="9.5" fill="currentColor">join t2</text><text x="660" y="322" text-anchor="middle" font-size="9.5" fill="currentColor">dtors</text><text x="700" y="322" text-anchor="middle" font-size="9.5" fill="currentColor">end</text></svg>',
      },
    ],
    examples: [
      {
        title: "Two threads, one vector, one join each",
        problem: "Sum 8,000,000 doubles through two raw threads that write their partial sums into locals of the joining function.",
        steps: [
          { label: "Step 1: The worker writes through a pointer", text: "`void sum_range(const double* beg, const double* end, double* res)` accumulates `*beg .. *(end-1)` and stores the total in `*res` — a raw thread cannot return a value, so the caller provides the landing zone." },
          { label: "Step 2: Launch with decay-copied pointers", text: "`const double* p = v.data(); std::thread t1 {sum_range, p, p + v.size()/2, &r1};` and the same for the second half with `&r2`. The pointer *values* are copied into thread storage; the pointed-to vector must simply outlive both joins — and it does, because `user` stays on the stack." },
          { label: "Step 3: Join before reading", text: "`t1.join(); t2.join();` — only now are `r1` and `r2` guaranteed written. Reading them before the joins would be a data race." },
          { label: "Step 4: The numbers", text: "r1 = 8,000,002,000,000 (first 4,000,000 values), r2 = 24,000,002,000,000, so `r1 + r2` = 32,000,004,000,000 = 8,000,000 × 8,000,001 / 2, exactly the closed-form sum. Wall time about 6.1 ms against 11.6 ms serial." },
        ],
        result: "Correct by construction: results land in caller-owned storage, and the joins establish that the writes happened before the read — the whole discipline that futures will automate.",
      },
      {
        title: "Working through threads",
        problem: "std::thread and passing arguments. Your task: construct and join threads, and explain the destructor's termination rule.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: construct and join threads, and explain the destructor's termination rule. Write down the guarantee you will rely on — for this chapter it is: Construction spawns; `join()` waits; destroying a joinable thread calls `std::terminate()` — never forget the join." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::thread t(work); t.join();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict how arguments are passed to a thread function, including by reference and to members — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Thread arguments are decay-copied; pass `std::ref(x)` for a real reference, and beware pointers to dying locals. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Construction spawns; `join()` waits; destroying a joinable thread calls `std::terminate()` — never forget the join. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Construction spawns; `join()` waits; destroying a joinable thread calls `std::terminate()` — never forget the join.",
      "Thread arguments are decay-copied; pass `std::ref(x)` for a real reference, and beware pointers to dying locals.",
      "Raw threads return nothing: write through caller-owned storage and join before reading.",
    ],
    quiz: [
      {
        q: "What does the standard say happens when the destructor of a still-joinable `std::thread` runs?",
        options: [
          "The thread is silently joined.",
          "The thread is detached and keeps running.",
          "`std::terminate()` is invoked.",
          "The destructor blocks until the thread finishes.",
        ],
        answer: 2,
        explanation: "A joinable thread at destruction means the programmer lost track of an executing resource; the library kills the program rather than guess. Join or detach explicitly.",
      },
      {
        q: "Given `void f(vector<double>&);` and a non-const `vector<double> v;`, which launch line is correct?",
        options: [
          "`std::thread t {f, v};` — passes a copy, so it compiles.",
          "`std::thread t {f, std::ref(v)};` — the argument is otherwise decay-copied, and the copy cannot bind to a non-const reference.",
          "`std::thread t {f, &v};` — a pointer binds to a reference parameter.",
          "`std::thread t {std::ref(f), v};` — ref wraps the function instead.",
        ],
        answer: 1,
        explanation: "Without `std::ref`, `v` is copied into thread-owned storage and the copy (an rvalue) cannot bind to `vector<double>&` — the launch fails to compile or silently copies, depending on the signature. `std::ref` is the explicit request for sharing.",
      },
      {
        q: "`thread::hardware_concurrency()` returns 0. What does that mean?",
        options: [
          "The machine has a single core.",
          "Threading is disabled for this program.",
          "The count is unknown — the function is only a hint and you must cope with 0.",
          "An error occurred and the program must stop.",
        ],
        answer: 2,
        explanation: "The standard allows the implementation to be unable to answer; a robust program picks a fallback (say, 2 or 4) rather than dividing by the hint.",
      },
      {
        q: "An exception escapes the function running on a raw `std::thread`, and nothing inside catches it. What happens?",
        options: [
          "It propagates to the joining thread.",
          "It is stored and rethrown by `join()`.",
          "It is ignored; the thread simply stops.",
          "`std::terminate()` is called — exceptions cannot cross raw thread boundaries.",
        ],
        answer: 3,
        explanation: "There is no channel to carry the exception across; the runtime kills the program. Tasks (section 42.4) fix exactly this by capturing the exception into the future.",
      },
    ],
  },

  // ---------------------------------------------------------------- 42.3
  {
    sectionId: "cpp-ch42-s3",
    readingTime: 7,
    intro: "Threads share memory, and the moment two of them touch the same mutable object without coordination the program leaves the language: a data race is undefined behavior, not a wrong answer. This section builds the standard toolkit that keeps races out — mutexes with RAII locks, the deadlock disciplines, and condition variables for waiting without burning a core.",
    objectives: [
      "State the standard's definition of a data race and its severity",
      "Guard shared data with mutex and lock_guard / unique_lock, and explain RAII locking",
      "Prevent deadlock by lock ordering or std::lock, and wait on events with condition_variable",
    ],
    concepts: [
      {
        term: "Data race",
        kind: "definition",
        statement: "Two threads **access the same memory location**, at least one of the accesses is a **write**, and the accesses are **not ordered** by synchronization — then the behavior is **undefined**. A memory location is a scalar object or a maximal run of adjacent non-zero-length bit-fields.",
        detail: "The severity is deliberate: compilers optimize assuming no races, so a racy program is not 'reading slightly stale values' — it can be miscompiled in arbitrary ways. Even a plain `++n` is a load, an increment, and a store, and the load can see a value another thread has already overwritten.",
      },
      {
        term: "mutex and lock_guard",
        kind: "method",
        statement: "A `mutex` serializes access: `m.lock()` blocks until it holds the mutex; `m.unlock()` releases it. In real code you never spell those out — you construct `lock_guard<mutex> lck {m};` so that the mutex is released at scope exit on **every** path, including exceptions. The guarded region is the **critical section**.",
        detail: "`recursive_mutex` may be locked repeatedly by its current owner; `timed_mutex` adds `try_lock_for`/`try_lock_until`. Keep critical sections short, but not shorter than the invariant they protect.",
      },
      {
        term: "unique_lock",
        kind: "method",
        statement: "`unique_lock<mutex>` is the flexible sibling: it can lock later (`defer_lock`), try (`try_to_lock`), time out on a `timed_mutex`, move between scopes, and be unlocked and relocked at will. It is also the type `condition_variable::wait` requires.",
        detail: "Rule of thumb: `lock_guard` when one scope equals one critical section; `unique_lock` when the lock's lifetime and the scope differ or a wait must happen under it.",
      },
      {
        term: "Deadlock and lock ordering",
        kind: "insight",
        statement: "Deadlock is a **cycle in the waits-for graph**: thread 1 holds m1 and wants m2 while thread 2 holds m2 and wants m1 — neither proceeds. Two structural cures: impose a **total order** on mutexes and acquire them in that order everywhere, or acquire several at once with `std::lock(m1, m2)` (all-or-nothing), then wrap each in a `lock_guard` with `adopt_lock`.",
        detail: "Lock ordering requires discipline across the whole program; `std::lock` is local but pays a retry cost. Deadlocks do not crash — they hang, which makes them both easier to diagnose and far more embarrassing in production.",
      },
      {
        term: "condition_variable",
        kind: "method",
        statement: "A `condition_variable` lets a thread **sleep until a condition changes**: the consumer takes `unique_lock<mutex> lck {m}`, then `cv.wait(lck, pred)` — which atomically unlocks, sleeps, relocks, and re-tests `pred`. The producer modifies the guarded state under the mutex and calls `notify_one()` or `notify_all()`.",
        detail: "Always wait with a predicate (or an equivalent while-loop): **spurious wakeups** are permitted, and a notify may wake more tasks than the condition satisfies. Without the mutex held around the state change, a wakeup can be lost entirely.",
      },
    ],
    figures: [
      {
        caption: "Deadlock versus consistent lock ordering. Left: T1 holds m1 and blocks acquiring m2 while T2 holds m2 and blocks acquiring m1 — a circular wait, and neither thread can proceed. Right: every thread acquires m1 before m2, so T2 simply waits for T1 and no cycle forms. Acquiring both mutexes with std::lock() achieves the same safety without a global ordering discipline.",
        afterConcept: 4,
        svg: '<svg viewBox="0 0 760 350" width="100%" role="img" aria-label="Deadlock cycle versus consistent lock ordering" font-family="ui-sans-serif, system-ui"><text x="195" y="22" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor">Deadlock: opposite order</text><text x="565" y="22" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor">Safe: consistent order</text><line x1="380" y1="14" x2="380" y2="340" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4" opacity="0.25"/><circle cx="95" cy="90" r="22" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="95" y="94" text-anchor="middle" font-size="11" fill="currentColor">T1</text><circle cx="95" cy="250" r="22" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="95" y="254" text-anchor="middle" font-size="11" fill="currentColor">T2</text><rect x="250" y="68" width="44" height="44" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="272" y="95" text-anchor="middle" font-size="11" fill="currentColor">m1</text><rect x="250" y="228" width="44" height="44" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="272" y="255" text-anchor="middle" font-size="11" fill="currentColor">m2</text><line x1="117" y1="90" x2="244" y2="90" stroke="currentColor" stroke-width="1.6"/><polygon points="244,85 252,90 244,95" fill="currentColor"/><text x="180" y="81" text-anchor="middle" font-size="9.5" fill="currentColor">locks m1 (held)</text><line x1="117" y1="250" x2="244" y2="250" stroke="currentColor" stroke-width="1.6"/><polygon points="244,245 252,250 244,255" fill="currentColor"/><text x="180" y="241" text-anchor="middle" font-size="9.5" fill="currentColor">locks m2 (held)</text><path d="M 112 110 C 180 150 200 180 254 230" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><polygon points="256,232 250,220 244,228" fill="currentColor"/><text x="150" y="172" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.9">waits for m2</text><path d="M 112 230 C 180 190 200 160 254 110" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><polygon points="256,108 244,112 250,120" fill="currentColor"/><text x="150" y="196" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.9">waits for m1</text><ellipse cx="192" cy="169" rx="100" ry="58" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.45"/><text x="192" y="165" text-anchor="middle" font-size="10" font-style="italic" fill="currentColor">circular wait</text><text x="192" y="178" text-anchor="middle" font-size="10" font-style="italic" fill="currentColor">neither proceeds</text><text x="195" y="302" text-anchor="middle" font-size="9.5" fill="currentColor">T1 holds m1 and blocks acquiring m2;</text><text x="195" y="316" text-anchor="middle" font-size="9.5" fill="currentColor">T2 holds m2 and blocks acquiring m1.</text><text x="195" y="330" text-anchor="middle" font-size="9.5" fill="currentColor">Each waits forever for a lock the other holds.</text><circle cx="465" cy="90" r="22" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="465" y="94" text-anchor="middle" font-size="11" fill="currentColor">T1</text><circle cx="465" cy="250" r="22" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="465" y="254" text-anchor="middle" font-size="11" fill="currentColor">T2</text><rect x="620" y="68" width="44" height="44" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="642" y="95" text-anchor="middle" font-size="11" fill="currentColor">m1</text><rect x="620" y="228" width="44" height="44" rx="5" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="642" y="255" text-anchor="middle" font-size="11" fill="currentColor">m2</text><line x1="487" y1="90" x2="614" y2="90" stroke="currentColor" stroke-width="1.6"/><polygon points="614,85 622,90 614,95" fill="currentColor"/><text x="550" y="81" text-anchor="middle" font-size="9.5" fill="currentColor">locks m1 (held)</text><path d="M 482 108 C 540 160 570 200 610 238" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="616,226 613,213 605,219" fill="currentColor"/><text x="545" y="148" text-anchor="middle" font-size="9.5" fill="currentColor">then locks m2 (held)</text><path d="M 482 232 C 540 200 570 160 612 118" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><polygon points="616,108 611,120 604,113" fill="currentColor"/><text x="550" y="205" text-anchor="middle" font-size="9.5" fill="currentColor">waits for m1 (no cycle)</text><text x="565" y="302" text-anchor="middle" font-size="9.5" fill="currentColor">T1 locks m1 then m2; T2 blocks on m1</text><text x="565" y="316" text-anchor="middle" font-size="9.5" fill="currentColor">until T1 releases both. No wait cycle forms.</text><text x="565" y="330" text-anchor="middle" font-size="9.5" fill="currentColor">Rule: global order (m1 before m2) — or std::lock.</text></svg>',
      },
    ],
    examples: [
      {
        title: "The lost update, step by step",
        problem: "Two threads each execute `++n` 10,000 times on a shared `int n = 0`. Predict and then fix the outcome.",
        steps: [
          { label: "Step 1: What ++n actually is", text: "It is three separate steps: load n into a register, add 1, store it back. Between the load and the store, another thread's store can land and be silently overwritten." },
          { label: "Step 2: An interleaving that loses work", text: "Suppose n = 17. T1 loads 17; T2 loads 17; T1 adds and stores 18; T2 adds and stores 18. Both threads did the work; memory advanced by one. The result should have been 19." },
          { label: "Step 3: The observed outcome", text: "The expected final value is 20,000. A representative run prints 13,682 — a different number each time, since every interleaving the scheduler happens to choose loses a different number of updates." },
          { label: "Step 4: The mutex fix and its price", text: "Wrap the increment in `lock_guard<mutex> lck {m}; ++n;` — the answer becomes 20,000 on every run. Uncontended lock plus unlock costs about 20 ns, so 20,000 guarded increments add 20,000 × 20 ns = 0.4 ms — cheap here, but it shows why you batch updates when the critical section is trivial." },
        ],
        result: "Unsynchronized: wrong, nondeterministic, and formally undefined. Synchronized: correct, at a cost you can compute — and if the whole loop were the shared unit, one lock per batch would cut that cost a thousandfold.",
      },
      {
        title: "Working through avoiding data races",
        problem: "Mutexes and locks done right. Your task: state the standard's definition of a data race and its severity.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state the standard's definition of a data race and its severity. Write down the guarantee you will rely on — for this chapter it is: A data race — unsynchronized concurrent access with a writer — is undefined behavior, not a soft error." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::thread t(work); t.join();` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — guard shared data with mutex and lock_guard / unique_lock, and explain RAII locking — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Every mutex acquisition belongs to an RAII lock object; exceptions and early returns then cannot leak a lock. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A data race — unsynchronized concurrent access with a writer — is undefined behavior, not a soft error. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A data race — unsynchronized concurrent access with a writer — is undefined behavior, not a soft error.",
      "Every mutex acquisition belongs to an RAII lock object; exceptions and early returns then cannot leak a lock.",
      "Deadlock is a cycle in the waits-for graph: break it with a total lock order or `std::lock`, and never poll — wait on a condition variable.",
    ],
    quiz: [
      {
        q: "Two threads run `++n` on a plain `int n` with no synchronization. What does the C++ standard say?",
        options: [
          "The result may be slightly stale but is otherwise fine.",
          "It is a data race: the behavior is undefined.",
          "The increment is atomic on all modern hardware, so it is safe in practice.",
          "The program will deadlock.",
        ],
        answer: 1,
        explanation: "The standard's rule is categorical — same memory location, a writer, no ordering — undefined behavior. Hardware atomicity of a single instruction does not rescue a load-increment-store sequence, and compilers may assume no races.",
      },
      {
        q: "Why prefer `lock_guard` (or `scoped_lock`) over calling `m.lock()` and `m.unlock()` by hand?",
        options: [
          "It is faster because it is inlined.",
          "It reorders the mutex internally to avoid contention.",
          "The lock is released automatically at scope exit — including when an exception is thrown — so a mutex can never be left held.",
          "It acquires all mutexes in the program at once.",
        ],
        answer: 2,
        explanation: "Manual unlock pairs fail on every early exit path. RAII turns lock lifetime into scope lifetime — the same trick `vector` and `fstream` use for memory and files.",
      },
      {
        q: "Two threads each need mutexes m1 and m2. Which pattern provably avoids deadlock?",
        options: [
          "Acquire them in the same total order in every thread (m1 before m2) — or take both at once with `std::lock(m1, m2)`.",
          "Acquire whichever mutex happens to be free first.",
          "Always acquire m2 before m1, without exception.",
          "Hold the locks as long as possible to reduce reacquisition.",
        ],
        answer: 0,
        explanation: "A total order makes a waits-for cycle impossible, and `std::lock` acquires the set atomically. 'Whichever is free first' is exactly the pattern that produces the cycle; option 2 is just one valid total order but is stated as a ritual rather than a guarantee across code you do not own.",
      },
      {
        q: "Why does `cv.wait(lck, pred)` re-check the predicate rather than trust the notification?",
        options: [
          "For performance — re-testing is cheaper than sleeping.",
          "Because spurious wakeups are permitted and a notify may wake more tasks than the condition satisfies — the predicate loop makes correctness independent of notification timing.",
          "Because `wait` forgets which mutex it was given.",
          "Because `pred` runs asynchronously on another thread.",
        ],
        answer: 1,
        explanation: "The return of wait means 're-check now', not 'the condition holds'. Only the predicate under the lock decides the truth; that is also what makes waiting on a condition variable immune to lost wakeups when state changes are published under the mutex.",
      },
      // PYQ-pattern: GATE 2017 — mutex versus volatile for sharing (rephrased)
      {
        q: "A shared counter is updated from several threads. Which fix is correct?\n```cpp\n// P: guard every update with the same std::mutex via std::lock_guard.\n// Q: mark the counter volatile and keep updating without a lock.\n```",
        options: ["Q, because `volatile` makes `++` indivisible", "Neither: threads must never share a counter", "P, because mutual exclusion serializes the updates, while `volatile` only blocks certain optimizations and orders nothing across threads", "P and Q are equivalent synchronization"],
        answer: 2,
        explanation: "Step 1: The data given is a shared counter with a locking proposal and a qualifier proposal. Step 2: The governing rules are the two mechanisms: a mutex admits only one thread into the critical section at a time with exception-safe release through the guard, while `volatile` merely constrains caching assumptions for special memory and provides no indivisibility or cross-thread ordering. Step 3: Tracing the contended updates under P, each increment completes alone so every update survives, while under Q the increments still race exactly as before. Step 4: The distractors fail because qualifiers never create atomicity, sharing with coordination is routine, and the two proposals differ in every guarantee that matters. Step 5: Therefore the locking discipline is the correct fix."
      }
    ],
  },

  // ---------------------------------------------------------------- 42.4
  {
    sectionId: "cpp-ch42-s4",
    readingTime: 8,
    intro: "Task-based concurrency is the book's answer to everything awkward in the raw-thread world: you launch a computation, it returns a future, and the result — or the exception — comes back through that handle. This section assembles the four pieces (future, promise, packaged_task, async), shows how each raises the level of abstraction, and closes with a masters-level cost model for choosing between threads and tasks.",
    objectives: [
      "Explain the future/promise channel and use get(), set_value(), and set_exception()",
      "Wrap callables in packaged_task and launch tasks with async and its launch policies",
      "Compare thread-based and task-based concurrency quantitatively, including the deferred and grain-size traps",
    ],
    concepts: [
      {
        term: "future",
        kind: "definition",
        statement: "A **future** is the read handle of a result that may not exist yet. `f.get()` **waits** until the result is ready, **moves** it out, and if the computation failed, **rethrows** the stored exception in the caller. A future is one-shot — a second `get()` is undefined; `share()` converts it to a `shared_future` for many readers, and `wait_for` supports timeouts.",
        detail: "`future` and its machinery live in `<future>`; the default-constructed future is empty, and one is normally obtained from `async`, a `packaged_task`, or a `promise`.",
      },
      {
        term: "promise",
        kind: "definition",
        statement: "A **promise** is the write end of the channel. `px.set_value(v)` — or `px.set_exception(current_exception())` — completes the associated future, exactly once, from any thread. Producer and consumer need share no other state: the pair *is* the communication channel.",
        detail: "The pairing is one-to-one: `px.get_future()` yields the one future that will receive what this promise sets; setting twice throws `future_error`.",
      },
      {
        term: "packaged_task",
        kind: "definition",
        statement: "A **`packaged_task`** wraps a callable so that invoking it stores its return value (or its exception) into its associated future — the bridge from the thread world to the task world: `pt.get_future()` hands you the future, and the task itself can be moved into a thread or a queue.",
        detail: "Typical use: `packaged_task<double(const double*, const double*)> pt {sum_range}; future<double> f = pt.get_future(); thread t {move(pt), p, p + n};` — when the thread invokes the task, the return value lands in `f`.",
      },
      {
        term: "async and its launch policies",
        kind: "method",
        statement: "**`async(f, args...)`** launches `f` as a task and returns its future. The policy matters: `launch::async` demands a new thread; `launch::deferred` runs the task lazily *inside* the first `get()` on the calling thread; the default — `launch::async | launch::deferred` — lets the implementation choose. **Pass an explicit policy whenever the distinction matters.**",
        detail: "Like `thread`, `async` decay-copies its arguments into the task, so reference arguments need `std::ref`, and a `future` returned by `async(launch::async, ...)` blocks in its destructor until the task completes — discard it and the call silently becomes synchronous.",
      },
      {
        term: "Exceptions travel through tasks",
        kind: "law",
        statement: "A raw thread that lets an exception escape calls `std::terminate()`; a task's exception is captured in the shared state and **rethrown by `get()`** in the consuming thread. Task-based code can therefore use ordinary try/catch across a concurrency boundary that raw threads cannot cross at all.",
        detail: "Mechanically, the task's shared state can hold either a value or an `exception_ptr`; `get()` moves the value out or calls `rethrow_exception` on the stored pointer.",
      },
    ],
    figures: [
      {
        caption: "The task channel. async() launches the task and hands back a future; when the task returns (or throws), the result is written into the shared state and the future becomes ready; get() then returns the value — 4225 here — or rethrows the stored exception. The write end is the promise side; the read end is the future.",
        afterConcept: 3,
        svg: '<svg viewBox="0 0 760 310" width="100%" role="img" aria-label="Task channel with async launch, shared state, and future get" font-family="ui-sans-serif, system-ui"><text x="380" y="20" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">The task channel: launch, shared state, get</text><rect x="40" y="44" width="216" height="100" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.4"/><text x="52" y="66" font-size="11" font-weight="600" fill="currentColor">calling thread</text><text x="52" y="88" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">auto f = async(square, 65);</text><text x="52" y="106" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">/* ... other work ... */</text><text x="52" y="128" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">int r = f.get(); // r == 4225</text><rect x="504" y="44" width="216" height="100" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.4"/><text x="516" y="66" font-size="11" font-weight="600" fill="currentColor">task thread</text><text x="516" y="86" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">int square(int x)</text><text x="516" y="104" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">{</text><text x="528" y="122" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">return x*x; // 4225</text><text x="516" y="138" font-size="10.5" font-family="ui-monospace, Menlo, monospace" fill="currentColor">}</text><rect x="285" y="185" width="190" height="72" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.4"/><text x="380" y="208" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">shared state</text><text x="380" y="224" text-anchor="middle" font-size="10" fill="currentColor">ready flag + value 4225</text><text x="380" y="238" text-anchor="middle" font-size="10" fill="currentColor">or stored exception</text><line x1="256" y1="64" x2="502" y2="64" stroke="currentColor" stroke-width="1.6"/><polygon points="502,59 510,64 502,69" fill="currentColor"/><text x="380" y="56" text-anchor="middle" font-size="9.5" fill="currentColor">1. launch — arguments decay-copied to the task</text><path d="M 540 144 C 520 168 500 180 479 190" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="477,191 490,190 486,181" fill="currentColor"/><text x="556" y="170" font-size="9.5" fill="currentColor">2. return stores the value</text><path d="M 285 190 C 268 178 258 162 252 148" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="250,146 251,158 260,154" fill="currentColor"/><text x="60" y="172" font-size="9.5" fill="currentColor">3. get() unblocks — returns 4225</text><path d="M 640 144 C 640 225 570 240 478 224" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><polygon points="476,222 487,229 489,219" fill="currentColor"/><text x="60" y="282" font-size="9.5" font-style="italic" fill="currentColor">4. the future is one-shot:</text><text x="60" y="296" font-size="9.5" font-style="italic" fill="currentColor">a second get() is undefined</text><text x="285" y="282" font-size="9.5" font-style="italic" fill="currentColor">Exception path: a task that throws stores the exception in the shared state;</text><text x="285" y="296" font-size="9.5" font-style="italic" fill="currentColor">get() rethrows it in the calling thread. Raw threads cannot do this.</text></svg>',
      },
    ],
    examples: [
      {
        title: "comp2: the same sum, task style",
        problem: "Rewrite the two-half sum of 8,000,000 doubles with async and futures instead of threads, pointers, and joins.",
        steps: [
          { label: "Step 1: Launch two tasks", text: "`auto f1 = async(launch::async, sum_range, v.data(), v.data() + v.size()/2);` and `f2` for the second half. The explicit `launch::async` guarantees real concurrent execution rather than lazy deferral." },
          { label: "Step 2: Measure", text: "Wall-clock time is about 6.02 ms against the 11.6 ms serial baseline — no joins to manage, no landing-zone variables, and the launch overhead of the two tasks is on the order of the two thread creations it replaces." },
          { label: "Step 3: Collect through the futures", text: "`f1.get()` returns 8,000,002,000,000 and `f2.get()` returns 24,000,002,000,000 — each get() waits for its own task, so the order you call them in cannot produce a wrong answer." },
          { label: "Step 4: Verify", text: "8,000,002,000,000 + 24,000,002,000,000 = 32,000,004,000,000 = 8,000,000 × 8,000,001 / 2, the closed-form sum. Speedup 11.6 / 6.02 ≈ 1.93×." },
        ],
        result: "The same numbers as the thread version, with lifetime management, result delivery, and exception propagation all delegated to the library — that delegation is the argument for tasks.",
      },
      {
        title: "A promise, a future, one channel",
        problem: "A producer thread computes a square and a consumer needs it. Use the promise/future pair as the only shared state.",
        steps: [
          { label: "Step 1: The producer's side", text: "`void produce(promise<double>& px)` computes `65.0 * 65.0` and calls `px.set_value(4225)` — handing the value to the future. If the computation had thrown instead, `px.set_exception(current_exception())` would hand over the failure." },
          { label: "Step 2: The consumer's side", text: "`void consume(future<double>& fx)` calls `fx.get()`: if the value is already there it returns immediately; if not, the consumer sleeps until `set_value` (or `set_exception`) completes it — no polling, no mutex." },
          { label: "Step 3: The handshake", text: "Either order works: get() before set_value parks the consumer; get() after returns at once. Exactly one value crosses exactly once — set_value twice throws `future_error`, and a second get() is undefined." },
        ],
        result: "4225 crosses the channel; nothing else is shared. The pair is a one-shot, thread-safe, exception-carrying communication line — the atom of task-based design.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "Futures versus threads: the cost model",
        blocks: [
          {
            kind: "para",
            body: "Thread-based or task-based is an engineering trade-off, and trade-offs deserve numbers. Build the model from three measured magnitudes (typical Linux x86-64 figures — exact values vary, the orders of magnitude do not). Creating and destroying an OS thread costs $c_t \\approx 10$–$100\\,\\mu s$: a default 8 MB stack must be reserved (and faults in lazily), page tables and scheduler state updated, the kernel entered twice. Dispatching a task on an existing worker — what a thread pool does — costs $c_d \\approx 0.1$–$1\\,\\mu s$: little more than a queue push and a wake. The future/promise handshake — storing the value, flipping the ready flag, and waking a thread parked in `future::get()` — costs $h \\approx 1$–$10\\,\\mu s$, because a parked thread must be rescheduled (a futex-like sleep/wake pair) and the shared state's cache line must migrate cores. Every 'which should I use' question is a comparison of these constants against the work per task.",
          },
          {
            kind: "theorem",
            heading: "Overhead-aware speedup and the optimal worker count",
            body: "**Theorem.** Let a job of serial time $T_s$ consist of a fraction $f$ that must stay serial and a fraction $1-f$ spread evenly over $n$ workers, each adding overhead $o$ (creation or dispatch plus handshake plus join). Then the wall time is $T(n) = f T_s + \\frac{(1-f) T_s}{n} + n o$ and the speedup is $S(n) = T_s / T(n)$, bounded above by Amdahl's $1/f$. Over the reals, $T(n)$ is minimized at $n^* = \\sqrt{(1-f) T_s / o}$; beyond $n^*$ the linear term $n o$ grows faster than the parallel term shrinks, and adding workers *slows the program down*.",
          },
          {
            kind: "derivation",
            heading: "Differentiate, then plug in the 11.6 ms job",
            body: "Set the derivative of the variable part to zero: $\\frac{d}{dn}\\left[ \\frac{(1-f) T_s}{n} + n o \\right] = -\\frac{(1-f) T_s}{n^2} + o = 0$, hence $n^* = \\sqrt{(1-f) T_s / o}$. Plug in the section 42.2 measurements: $T_s = 11.6$ ms, $f = 0.03$ (loop setup plus the joins), thread-based $o = 30\\,\\mu s$ (a $27\\,\\mu s$ create plus wake and join). Then $n^* = \\sqrt{0.97 \\times 11{,}600 / 30} = \\sqrt{375} \\approx 19$ workers. On the 4-core machine the constraint is hardware, not the model: $T(4) = 348 + 2{,}813 + 120 = 3{,}281\\,\\mu s$, so $S(4) = 11{,}600 / 3{,}281 \\approx 3.54$, against an overhead-free Amdahl bound of $1 / (0.03 + 0.97/4) \\approx 3.67$ — synchronization overhead costs about 3% here, which is why the naive two-thread version was good enough.",
          },
          {
            kind: "para",
            body: "Two pathologies follow directly from the constants. **The deferred trap**: `launch::deferred` has near-zero launch cost because it does nothing — the task executes inside `get()` on the calling thread. Latency measurements look identical, throughput equals serial, and the program silently loses all parallelism; this is why the book says to pass an explicit policy when it matters. **The grain-size trap**: per-task work must dominate the handshake, say by a factor of about 100. One element of our vector costs $11.6\\,\\mathrm{ms} / 8{\\times}10^6 \\approx 1.45$ ns, so a task must cover at least $100 \\times 3\\,\\mu s \\approx 0.3$ ms of work — roughly $2 \\times 10^5$ elements. One future per element would cost $8 \\times 10^6 \\times 3\\,\\mu s = 24$ s, about 2,000 times *slower* than the serial loop; about 40 sensibly chunked tasks are free.",
          },
          {
            kind: "remark",
            body: "The hidden constant is the cache line. Two threads incrementing counters that share a 64-byte line ping-pong it between cores: each write invalidates the other core's copy, and every invalidation costs on the order of 100 ns of coherence traffic. The section 42.3 counter loop with both counters in one line — 20,000 increments, 0.4 ms of real work — can burn $20{,}000 \\times 100\\,\\mathrm{ns} = 2$ ms of pure cache traffic, a 5× slowdown from layout alone. The fix is mechanical: `alignas(64)` each per-thread accumulator, or index a padded array. The model's $o$ is not a property of the software alone — it is a property of where the software's data sits.",
          },
          {
            kind: "application",
            heading: "Why pools and parallel algorithms win",
            body: "The theorem is the business case for thread pools and for the C++17 parallel algorithms. A pool pays thread creation once per worker; per task only the dispatch constant $c_d \\approx 0.5\\,\\mu s$ remains, so $o$ drops by a factor of about 60 and $n^*$ rises by $\\sqrt{60} \\approx 8$ — to roughly 150 workers for our 11.6 ms job. That is why every serious concurrency framework — and the book's own advice — lands in the same place: many small tasks, few long-lived workers, results through futures. `async()` with `launch::async` is the specification-level way to say it; a pool you build yourself from `packaged_task` and a work queue is the portable C++11 way.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "A future is the one-shot read handle of a result: get() waits, moves the value out, and rethrows a stored exception.",
      "promise writes, future reads; packaged_task wraps a callable into that channel; async launches and hands back the future.",
      "Pass an explicit launch policy when it matters — the default may defer your task onto the calling thread and silently serialize it.",
    ],
    quiz: [
      {
        q: "You call `future<int>::get()` twice on the same future. What does the standard say?",
        options: [
          "The value is returned again — futures are read-only handles.",
          "The second get() blocks forever.",
          "A default-constructed int comes back.",
          "It is undefined — get() moves the value out and invalidates the future; call `share()` first if you need many readers.",
        ],
        answer: 3,
        explanation: "get() is a consuming operation: it transfers the value and leaves the future invalid. `share()` produces a `shared_future` whose get() can be called repeatedly.",
      },
      {
        q: "What is the meaning of async()'s default policy, `launch::async | launch::deferred`?",
        options: [
          "The task always runs on a new thread.",
          "The implementation chooses — the task may run on a new thread or be deferred until get() executes it on the calling thread.",
          "The task runs whenever the CPU is idle.",
          "The task is split across all cores automatically.",
        ],
        answer: 1,
        explanation: "The default trades guaranteed parallelism for scheduling freedom. When you need one behavior or the other, name it explicitly — the cost model in the masters tier shows why deferral can silently serialize a program.",
      },
      {
        q: "A task launched with async throws `std::runtime_error`. Where does the exception surface?",
        options: [
          "`std::terminate()` is called, as with raw threads.",
          "The exception is lost; get() returns garbage.",
          "It is captured in the shared state and rethrown by `get()` in the consuming thread.",
          "It is converted to an error code.",
        ],
        answer: 2,
        explanation: "The shared state holds a value or an exception_ptr; get() rethrows. This is the decisive error-handling advantage of tasks over raw threads.",
      },
      {
        q: "What is a `packaged_task`?",
        options: [
          "A callable wrapper whose invocation stores its result (or exception) into an associated future.",
          "A thread that is allowed to return a value.",
          "A mutex that guards a work queue.",
          "A promise that can deliver several values over time.",
        ],
        answer: 0,
        explanation: "It bridges the callable world and the future/promise channel: run the task anywhere (a thread, a pool) and its return value lands in the future you obtained from it.",
      },
    ],
  },

  // ---------------------------------------------------------------- 42.5
  {
    sectionId: "cpp-ch42-s5",
    readingTime: 4,
    intro: "Stroustrup closes the chapter with advice distilled from decades of concurrency disasters. Its shape is easy to state — prefer tasks to threads, share as little as possible, lock with RAII, wait rather than poll — and each rule exists because its violation is a bug class with a name and a body count.",
    objectives: [
      "Apply the chapter's rules for choosing tasks over threads and vice versa",
      "Structure concurrent code so races and deadlocks cannot occur by construction",
      "Audit a snippet of threaded code for the classic lifetime, race, and waiting bugs",
    ],
    concepts: [
      {
        term: "Start with tasks",
        kind: "insight",
        statement: "Begin with `async()` or `packaged_task` plus `future`: they say 'compute this result concurrently' and handle communication and exceptions for you. Descend to `std::thread` only when you must control scheduling yourself — a thread pool, a dedicated I/O thread, priorities, or affinity.",
        detail: "The corollary from the cost model: if you do use threads for many small jobs, use them *once* — build or reuse a pool, so per-job cost is dispatch, not creation.",
      },
      {
        term: "Minimize shared, writable data",
        kind: "insight",
        statement: "The cheapest race to manage is the one that cannot happen: pass copies, share `const` objects, give each thread its own data (`thread_local`), and deliver results through `future`s rather than through shared variables.",
        detail: "Every shared mutable object is a standing commitment to locking discipline for the lifetime of the program; the book's advice is to treat each one as a design smell worth arguing about.",
      },
      {
        term: "Use RAII for every lock",
        kind: "law",
        statement: "Never write `m.lock()` / `m.unlock()` pairs in ordinary code — every acquisition belongs to a `lock_guard`, `unique_lock`, or `scoped_lock`, so that exceptions, early returns, and maintenance edits cannot leave a mutex held.",
        detail: "The same rule as for memory: ownership in a type, not in a programmer's vigilance.",
      },
      {
        term: "Don't wait impatiently",
        kind: "law",
        statement: "Busy-waiting — polling a flag in a loop — burns a core, heats a laptop, and fights the scheduler. Express waiting with `condition_variable::wait` or `future::get`, which park the thread and wake it on the event itself.",
        detail: "The book's phrasing is blunter: waiting impatiently is both wasteful and a common source of subtle timing bugs, because the poller observes intermediate states.",
      },
      {
        term: "Threads are heavy; tasks are cheap",
        kind: "insight",
        statement: "Creating an OS thread costs tens of microseconds (stack, page tables, scheduler registration); dispatching a task on an existing worker costs a fraction of a microsecond. For many small jobs, a pool — or the C++17 parallel algorithms — beats one thread per job by an order of magnitude in overhead.",
        detail: "The masters tier in section 42.4 turns this from folklore into a formula with an optimal worker count.",
      },
    ],
    examples: [
      {
        title: "Audit: three bugs in nine lines",
        problem: "Find and fix the concurrency defects in this snippet, where `count` is a non-atomic global int.",
        steps: [
          { label: "Step 1: The code", text: "`std::thread t {report, std::ref(v)}; t.detach(); ... ++count; ... cout << count;` inside a function whose parameter is `vector<double>& v`, with `report` also doing `++count`." },
          { label: "Step 2: Bug — detached, still borrowing", text: "`detach()` does not make the thread safe; it makes its lifetime unmanageable. The thread still holds `std::ref(v)`, and when the function returns, `v` dies — the thread now reads a dangling reference. Either join before returning, or copy what the thread needs." },
          { label: "Step 3: Bug — the racy counter", text: "`++count` from two threads with no synchronization is a data race — undefined behavior, not merely an occasionally missed count (section 42.3). Make it `atomic<int>`, guard it with a mutex, or stop sharing it." },
          { label: "Step 4: Bug — reading racy state at all", text: "Even an atomic counter read with no ordering guarantee tells you nothing about whether `report` has finished. The fix that removes the whole bug class: launch `report` as a task and get the answer from its future — lifetime, ordering, and errors all become the library's problem." },
        ],
        result: "Three defects — a dangling reference after detach, a data race on `++count`, and an unordered read — replaced by one `async` call returning a future.",
      },
      {
        title: "Reviewing threads and tasks code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules for choosing tasks over threads and vice versa.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Prefer task-based concurrency (`async`, `packaged_task`, `future`) and reserve `std::thread` for when you must control scheduling." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `std::thread t(work); t.join();`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: structure concurrent code so races and deadlocks cannot occur by construction. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Design races away: less shared writable data, RAII locks, and no busy-waiting." },
        ],
        result: "The review ends with findings tied to reasons: Prefer task-based concurrency (`async`, `packaged_task`, `future`) and reserve `std::thread` for when you must control scheduling. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Prefer task-based concurrency (`async`, `packaged_task`, `future`) and reserve `std::thread` for when you must control scheduling.",
      "Design races away: less shared writable data, RAII locks, and no busy-waiting.",
      "Reuse threads (pools) rather than creating them per job — creation is the expensive part.",
    ],
    quiz: [
      {
        q: "For 'run f(x) concurrently and give me the result', what is the book's first-choice facility?",
        options: [
          "`std::thread` plus a shared result variable and a join.",
          "`async` (or `packaged_task` with a `future`).",
          "A condition_variable per result.",
          "A `shared_ptr` to the output.",
        ],
        answer: 1,
        explanation: "The task abstractions encode exactly this sentence — launch, communicate, handle errors — which is why the advice section leads with them.",
      },
      {
        q: "A colleague discards the future returned by `async(launch::async, f)` without calling get(). What does the standard guarantee?",
        options: [
          "Nothing in particular; the future is just destroyed.",
          "The task is cancelled immediately.",
          "That future's destructor blocks until the task completes — the discarded call silently becomes synchronous at that point.",
          "Undefined behavior.",
        ],
        answer: 2,
        explanation: "A future returned by an async with `launch::async` is special: its destructor waits, so you cannot accidentally lose the task — but you can accidentally serialize yourself. Futures from promises and packaged_tasks do not block.",
      },
      {
        q: "Which change most reduces the need for the locks in this chapter?",
        options: [
          "Minimizing shared writable data — pass copies, share `const`, and deliver results through futures.",
          "Locking more mutexes, but finer-grained ones.",
          "Declaring shared variables `volatile`.",
          "Replacing references with raw pointers.",
        ],
        answer: 0,
        explanation: "`volatile` is for memory-mapped I/O, not thread communication (chapter 41); the race you never set up is the only one you never debug.",
      },
    ],
  },
]
