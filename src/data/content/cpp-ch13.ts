import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. (C++11) — Chapter 13
// Exception Handling (TC++PL pp. 343-388). Section ids are verbatim from
// src/data/library-parts/cpp.ts (cpp-ch13-s1 .. cpp-ch13-s7).
// One masters depth tier: 13.2 — the exception guarantees hierarchy.
// ============================================================================

export const cppCh13Content: SectionContent[] = [
  // ------------------------------------------------------------------ 13.1
  {
    sectionId: 'cpp-ch13-s1',
    readingTime: 7,
    intro: "Errors are not a nuisance to patch after the program works — they are part of its specification, and this chapter treats them as such. The opening argument is a division of labor: the code that can *detect* an error (deep inside a library) is almost never the code that knows what *recovering* from it means (an application many call frames above). An exception is the mechanism that carries an error from the point of detection to a caller equipped to do something about it — automatically, through every intermediate function that chose not to care.",
    objectives: [
      "Explain why error detection and error recovery belong to different levels of a program, and how a `throw` connects them",
      "Evaluate the classical alternatives — return codes, `errno`, `assert`, termination — and say precisely why each fails for library code",
      "Trace a `throw` through a call chain: state which destructors run, in what order, and where control lands",
    ],
    concepts: [
      {
        term: 'Exception',
        kind: 'definition',
        statement: "**An exception is an object thrown to signal that a function could not perform its assigned task.** The `throw` transfers control — unwinding any number of intervening stack frames — to the nearest dynamically enclosing handler whose declaration matches the exception's type.",
        detail: "The mechanism is deliberately asymmetric: a `throw` may appear anywhere, while `try`/`catch` protects only the regions whose caller is prepared to recover. Intermediate functions are never consulted — they simply stop running, one frame at a time, destructors first.",
      },
      {
        term: 'The detection–recovery split',
        kind: 'insight',
        statement: "**A library can detect a runtime error but cannot know what to do about it; a caller knows what to do but cannot detect it.** A `find` routine can see that the index is out of range; only the application knows whether that is fatal, retryable, or ignorable.",
        detail: "This split is the argument for exceptions over every alternative. A return code forces the library to guess a policy and forces every intermediate caller to relay it by hand — and it can be silently ignored. `abort()` communicates perfectly but permits no recovery at all. An exception is the only mechanism that is both impossible to ignore and resolvable exactly where the context exists.",
      },
      {
        term: 'Error as a broken promise',
        kind: 'definition',
        statement: "The vocabulary for deciding *what counts* as an error is the vocabulary of contracts: a **precondition** states what must hold on entry, a **postcondition** what the function promises on exit, and a **class invariant** what it means for an object to be valid. An error is the failure of one of these; throwing is the report: I cannot meet my postcondition on these inputs.",
        detail: "A precondition the caller was required to establish, once broken, is a bug — `assert` it or report a logic error. An input no reasonable caller could have checked is the world's fault — throw. Keeping the two straight is most of the design work in this chapter.",
      },
      {
        term: 'Why return codes do not scale',
        kind: 'method',
        statement: "The C-style alternative — return an error indicator — fails three ways at scale: the indicator **can be ignored** (and routinely is); it **must be relayed by hand** through every intermediate function; and it **occupies the return channel**, so the natural result gets smuggled through a reference parameter or paired with the status.",
        detail: "`errno` and global status flags are worse still: state that an intervening call can overwrite before anyone reads it. These mechanisms survive in the niches where they fit — hot inner loops with locally handled failures, kernel code that cannot afford unwinding — which is exactly where the chapter's advice keeps them.",
      },
      {
        term: 'Error Handling: the working contract',
        kind: 'definition',
        statement: '**Error Handling.** Exceptions as the backbone of error handling. You can claim this section when you can explain why error detection and error recovery belong to different levels of a program, and how a `throw` connects them — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 13 (Exception Handling); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        afterConcept: 3,
        caption: 'Figure 13.1 — A `throw` travels down the call stack from `h()`. Each popped frame destroys its locals first (`~c()`, then `~b()`: reverse of construction); `a` was constructed before the `try` and survives into the handler. The handler that runs is the nearest enclosing one whose declaration matches.',
        svg: `<svg viewBox="0 0 760 420" width="100%" role="img" aria-label="Stack unwinding: a throw in h travels through g to a catch in f, destroying locals in reverse order"><text x="410" y="18" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">the exception searches DOWN the call stack for a matching handler</text><rect x="40" y="26" width="400" height="88" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="58" y="48" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">h()</text><text x="58" y="68" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Tracer c;</text><text x="58" y="90" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">throw std::runtime_error("disk");</text><rect x="40" y="146" width="400" height="76" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="58" y="168" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">g()</text><text x="58" y="188" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Tracer b;</text><text x="58" y="208" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">h();</text><rect x="40" y="254" width="400" height="136" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="58" y="276" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">f()</text><text x="58" y="296" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Tracer a;    // constructed before the try</text><rect x="58" y="306" width="364" height="72" rx="4" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="70" y="326" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">try { g(); }</text><text x="70" y="346" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">catch (const std::exception&amp; e)</text><text x="70" y="366" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">{ recover; }</text><line x1="80" y1="254" x2="80" y2="226" stroke="currentColor" stroke-width="1.4"/><polygon points="76,228 84,228 80,218" fill="currentColor"/><line x1="80" y1="146" x2="80" y2="118" stroke="currentColor" stroke-width="1.4"/><polygon points="76,120 84,120 80,110" fill="currentColor"/><text x="88" y="243" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">call</text><text x="88" y="135" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.85">call</text><line x1="300" y1="94" x2="300" y2="336" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><polygon points="295,329 305,329 300,339" fill="currentColor"/><rect x="246" y="120" width="110" height="20" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="301" y="134" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="bold" fill="currentColor">pop h(): ~c()</text><rect x="246" y="228" width="110" height="20" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1"/><text x="301" y="242" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="bold" fill="currentColor">pop g(): ~b()</text><rect x="470" y="26" width="280" height="58" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2"/><text x="488" y="50" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">1</text><text x="508" y="50" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">throw</text><text x="508" y="68" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">no handler in h(); unwinding starts</text><rect x="470" y="104" width="280" height="58" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2"/><text x="488" y="128" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">2</text><text x="508" y="128" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">pop h()</text><text x="508" y="146" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">run ~c(): c dies (count: 1)</text><rect x="470" y="182" width="280" height="58" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2"/><text x="488" y="206" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">3</text><text x="508" y="206" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">pop g()</text><text x="508" y="224" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">run ~b(): b dies (count: 2)</text><rect x="470" y="260" width="280" height="58" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2"/><text x="488" y="284" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">4</text><text x="508" y="284" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">catch in f()</text><text x="508" y="302" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">handler matches; a survives intact</text><rect x="470" y="338" width="280" height="58" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.2"/><text x="488" y="362" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor">5</text><text x="508" y="362" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">f() continues</text><text x="508" y="380" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">~a() runs at f()'s scope exit</text><line x1="610" y1="84" x2="610" y2="100" stroke="currentColor" stroke-width="1.4"/><polygon points="606,98 614,98 610,103" fill="currentColor"/><line x1="610" y1="162" x2="610" y2="178" stroke="currentColor" stroke-width="1.4"/><polygon points="606,176 614,176 610,181" fill="currentColor"/><line x1="610" y1="240" x2="610" y2="256" stroke="currentColor" stroke-width="1.4"/><polygon points="606,254 614,254 610,259" fill="currentColor"/><line x1="610" y1="318" x2="610" y2="334" stroke="currentColor" stroke-width="1.4"/><polygon points="606,332 614,332 610,337" fill="currentColor"/><text x="230" y="412" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.85">destruction during unwinding is reverse of construction: c, then b; a outlives the handler</text></svg>`,
      },
    ],
    examples: [
      {
        title: 'Counting destructors during unwinding',
        problem: 'Trace the code in the figure: `f` constructs `Tracer a`, then a `try` block calls `g`, which constructs `Tracer b` and calls `h`, which constructs `Tracer c` and throws `std::runtime_error("disk")`. List every destructor that runs, in order, before `f` returns normally.',
        steps: [
          { label: 'Construction order', text: 'a (in `f`, before the `try`), then b (in `g`), then c (in `h`): construction order is a, b, c.' },
          { label: 'Throw site', text: '`h` has no `try` block, so the exception immediately begins stack unwinding: `h`' + "'" + 's frame is popped first.' },
          { label: 'Frame h', text: 'c was constructed inside `h`, so `~c()` runs as the frame is popped. Count: 1.' },
          { label: 'Frame g', text: '`g` has no handler either; `~b()` runs as its frame pops. Count: 2. No other automatic objects exist in `g` or `h`.' },
          { label: 'Frame f', text: 'The `catch` clause in `f` matches `std::runtime_error` (it is-a `std::exception`). Objects constructed before the `try` — a — are not destroyed by the throw: unwinding tears down the `try` block, not the whole function.' },
          { label: 'After the handler', text: '`f` continues after the `catch`; when `f` returns, `~a()` runs. Grand total: 4 destructors, of which 2 ran during unwinding, in reverse construction order.' },
        ],
        result: 'Unwinding destroys c, then b; a survives into the handler and dies only when f returns. Two destructors run before the handler executes.',
      },
      {
        title: 'Working through error handling',
        problem: 'Exceptions as the backbone of error handling. Your task: explain why error detection and error recovery belong to different levels of a program, and how a `throw` connects them.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain why error detection and error recovery belong to different levels of a program, and how a `throw` connects them. Write down the guarantee you will rely on — for this chapter it is: Exceptions separate error detection (in libraries, low in the call chain) from error recovery (in caller code with the context to act) — and cannot be silently ignored the way return codes can.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `try { g(); } catch (const std::exception& e) { handle(e); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — evaluate the classical alternatives — return codes, `errno`, `assert`, termination — and say precisely why each fails for library code — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: A throw is a report of an unmet promise: a broken precondition, postcondition, or invariant; a thrown exception propagates automatically through any number of intervening frames. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Exceptions separate error detection (in libraries, low in the call chain) from error recovery (in caller code with the context to act) — and cannot be silently ignored the way return codes can. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Exceptions separate error detection (in libraries, low in the call chain) from error recovery (in caller code with the context to act) — and cannot be silently ignored the way return codes can.',
      'A throw is a report of an unmet promise: a broken precondition, postcondition, or invariant; a thrown exception propagates automatically through any number of intervening frames.',
      'During unwinding, each popped frame destroys its automatic objects in reverse construction order; objects created before the enclosing try block survive the throw.',
    ],
    quiz: [
      {
        q: 'In the traced scenario, which destructor runs FIRST once `h()` throws?',
        options: ['`~a()`', '`~b()`', '`~c()`', 'None: destructors run only after the handler completes'],
        answer: 2,
        explanation: 'Unwinding destroys automatic objects in reverse order of construction: c was constructed last, so `~c()` runs first, then `~b()`; `~a()` runs only when `f` later returns.',
      },
      {
        q: 'Why does returning an error code fail for a general-purpose library routine like `find`?',
        options: [
          'Error codes are slower than exceptions on modern hardware',
          'The library cannot know which callers can recover, and return codes can be silently ignored',
          'Error codes cannot represent more than 256 distinct failures',
          'Return codes cannot cross dynamic library boundaries',
        ],
        answer: 1,
        explanation: 'A library detects the error but has no recovery policy; codes must be relayed by hand through every caller and are routinely ignored — exactly the two defects exceptions were designed to remove.',
      },
      {
        q: 'An exception propagates out of `main` and no handler exists anywhere. What happens?',
        options: [
          'The behavior is undefined',
          'The exception object is leaked and the program continues',
          '`std::terminate` is called and the program ends',
          'The exception is stored in `errno` for later inspection',
        ],
        answer: 2,
        explanation: 'An unhandled exception calls `std::terminate`: the program fails loudly instead of continuing in an unknown state — a deliberate feature.',
      },
      {
        q: 'Which of these can a `throw` legitimately cross without any code of yours executing?',
        options: [
          'Only functions in the standard library',
          'Any number of intervening stack frames — including functions that never mention exceptions',
          'At most one stack frame per try block',
          'Only frames whose functions are declared `noexcept`',
        ],
        answer: 1,
        explanation: 'Propagation is automatic: intermediate functions that did not opt in simply stop running, one frame at a time, destructors first.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.2
  {
    sectionId: 'cpp-ch13-s2',
    readingTime: 8,
    intro: "What may a caller assume when an exception escapes a function? The three exception guarantees — basic, strong, nothrow — are the contract layer on top of the throw mechanism: they state what state the program is left in when things go wrong. The basic guarantee is the floor every operation should meet; the strong guarantee is commit-or-rollback; the nothrow guarantee names the primitive operations the other two must be built from.",
    objectives: [
      "State the basic, strong and nothrow guarantees precisely, including what an unspecified but valid state means",
      "Prove that the guarantees form a hierarchy — nothrow implies strong implies basic — and explain why guarantees do not compose upward without extra structure",
      "Apply the copy-and-commit pattern to build a strong operation out of basic ones, and explain why `move_if_noexcept` is needed for vector growth",
    ],
    concepts: [
      {
        term: 'The basic guarantee',
        kind: 'definition',
        statement: "If an exception escapes the operation, **no resource is leaked** and every object is left in a **valid state** — every class invariant holds. Which valid state is *unspecified*; the standard library describes such containers as valid but unspecified.",
        detail: "This is the minimum every operation should offer. It rules out the nightmare scenario — a leaked memory block plus a container whose size says 4 while only 2 elements exist — while remaining cheap enough to promise universally.",
      },
      {
        term: 'The strong guarantee',
        kind: 'definition',
        statement: "The basic guarantee **plus**: if an exception escapes, the operation had **no effect** — the state of the program is exactly what it was before the call. Commit or roll back, all or nothing.",
        detail: "The strong guarantee lets a caller catch, log, and retry as if the failed call never happened. It is what `vector::push_back` offers for well-behaved element types, and what copy-and-swap provides.",
      },
      {
        term: 'The nothrow guarantee',
        kind: 'definition',
        statement: "The operation **never throws**. In C++11 such operations are declared `noexcept`; if a `noexcept` function tries to exit via an exception anyway, `std::terminate` is called immediately — without unwinding.",
        detail: "Destructors, swaps of built-ins and pointer-stealing moves are the classic nothrow operations. They are not merely good hygiene: every strong guarantee is *constructed out of* nothrow primitives at its commit step.",
      },
      {
        term: 'The hierarchy theorem',
        kind: 'theorem',
        statement: "**Strong implies basic, and nothrow implies both** — vacuously, since an operation that never throws never gets to break its promises. The inclusions are strict: `push_back` over a nothrow-move type is strong but throws `bad_alloc` on a full heap; a reallocation over a type with only a throwing move can be, at best, basic.",
        detail: "The converse directions fail, which is why the three guarantees are genuinely different contracts rather than one virtue at three intensities. The masters tier works this out as predicates on execution traces.",
      },
      {
        term: 'Choosing a target guarantee',
        kind: 'insight',
        statement: "A function can offer **no more** than the weakest guarantee of the operations it calls — unless it adds structure (a temporary plus a nothrow swap) to restore strength. So: basic everywhere as the floor, strong where callers need rollback, and spend `noexcept` on the primitives (swap, move, destroy) that everyone else's guarantees are built from.",
        detail: "This is interface design, not implementation detail: which guarantee an operation offers belongs in its documentation exactly as its postconditions do.",
      },
    ],
    examples: [
      {
        title: 'Auditing push_back at capacity, with an injected failure',
        problem: 'A `vector<Widget>` has size 4, capacity 4, and receives `push_back(w)`. Describe the sequence of steps under the strong guarantee, then inject a failure at copy #3 and count the visible effects.',
        steps: [
          { label: 'Step 1 — allocate', text: 'A new buffer for capacity 8 is allocated. If allocation throws `bad_alloc`, nothing has changed: 0 visible effects. (Weak heap? The old 4-element buffer is untouched.)' },
          { label: 'Step 2 — transfer', text: 'The 4 existing elements are moved into the new buffer if `Widget`' + "'" + 's move is `noexcept`, copied otherwise. This is `std::move_if_noexcept` in action: copying leaves the source intact, so a later throw still finds the vector unchanged.' },
          { label: 'Step 3 — commit', text: 'The 5th element is constructed in the new buffer. If that construction throws, the half-built new buffer is destroyed by the resource handle that owns it — the visible vector still holds 4 elements in the old buffer: 0 effects.' },
          { label: 'Step 4 — swap', text: 'Three pointers are swapped (nothrow) and the old buffer is destroyed. After this point no operation throws: the push is committed.' },
          { label: 'Inject the failure', text: 'Suppose `Widget` has a throwing copy and copy #3 of the transfer throws. Score: 2 temp `Widget`s destroyed by unwinding, original 4 elements untouched, vector reads size 4, capacity 4, contents intact.' },
          { label: 'Verdict', text: 'On every exceptional trace the observable state equals the pre-state: the strong guarantee, audited by hand. The whole cost of the audit trail was one temporary buffer.' },
        ],
        result: '4 transfers + 1 construction + 1 swap; on any injected throw the vector is bit-for-bit as before the call — commit or rollback, exactly as the strong guarantee promises.',
      },
      {
        title: 'Working through exception guarantees',
        problem: 'Basic, strong and nothrow guarantees. Your task: state the basic, strong and nothrow guarantees precisely, including what an unspecified but valid state means.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: state the basic, strong and nothrow guarantees precisely, including what an unspecified but valid state means. Write down the guarantee you will rely on — for this chapter it is: The basic guarantee — no leaks, all invariants intact, state unspecified — is the floor every operation should meet; the strong guarantee adds commit-or-rollback; nothrow operations never throw.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `try { g(); } catch (const std::exception& e) { handle(e); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — prove that the guarantees form a hierarchy — nothrow implies strong implies basic — and explain why guarantees do not compose upward without extra structure — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Guarantees form an implication hierarchy (nothrow ⇒ strong ⇒ basic) but do not compose upward: a caller inherits the weakest guarantee of what it calls unless it adds a temporary and a nothrow swap. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: The basic guarantee — no leaks, all invariants intact, state unspecified — is the floor every operation should meet; the strong guarantee adds commit-or-rollback; nothrow operations never throw. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'The basic guarantee — no leaks, all invariants intact, state unspecified — is the floor every operation should meet; the strong guarantee adds commit-or-rollback; nothrow operations never throw.',
      'Guarantees form an implication hierarchy (nothrow ⇒ strong ⇒ basic) but do not compose upward: a caller inherits the weakest guarantee of what it calls unless it adds a temporary and a nothrow swap.',
      'vector growth moves elements only when the move is noexcept, and copies otherwise — the strong guarantee of push_back is purchased with the nothrow guarantee of the element move constructor.',
    ],
    quiz: [
      {
        q: 'After an exception escapes `v.push_back(x)` where only the basic guarantee holds, which description fits `v`?',
        options: [
          'Invalid: its invariants may be broken',
          'A valid state with no leaks, but the contents are unspecified',
          'Exactly the state it had before the call',
          'Destroyed: it must be reconstructed before use',
        ],
        answer: 1,
        explanation: 'Basic = no leaks and every invariant holds, but which valid state is unspecified. The pre-state promise is the strong guarantee; guaranteed destruction is not a thing.',
      },
      {
        q: 'Why does `vector` copy rather than move elements during reallocation when `T` may have a throwing move constructor?',
        options: [
          'Copying is faster than moving on average',
          'A throw mid-move leaves already-moved-from elements unrestorable, so the strong guarantee cannot be restored',
          'A copy constructor can never throw',
          'The allocator interface has no support for moves',
        ],
        answer: 1,
        explanation: 'A move is licensed to gut its source. If move #3 throws, elements 1 and 2 are already hollow — there is no rollback from a rollback. Copies never touch the source, so a throw leaves the vector unchanged.',
      },
      {
        q: 'A `noexcept` function `f()` attempts to exit via an exception. The result is:',
        options: [
          'The exception is ignored and `f` returns normally',
          'The exception propagates; the declaration was only a hint',
          '`std::terminate` is called immediately, without unwinding',
          'The program fails to compile',
        ],
        answer: 2,
        explanation: 'A noexcept violation is a contract break: terminate is called at the point of the throw. No unwinding, no handlers — which is precisely why nothrow operations can be relied upon as commit steps.',
      },
      {
        q: 'The relationship between the strong and basic guarantees is:',
        options: [
          'Strong implies basic, but not conversely',
          'Basic implies strong, but not conversely',
          'The two are independent contracts',
          'They coincide for all standard containers',
        ],
        answer: 0,
        explanation: 'A no-effect exceptional trace trivially leaves a valid, leak-free state. The converse fails: basic permits damaged-but-valid outcomes that strong forbids.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The exception guarantees hierarchy',
        blocks: [
          {
            kind: 'para',
            body: "Formalize first, because the guarantees earn their name as a hierarchy only when compared as logical predicates. Fix an operation $f$ acting on a program state $S$, and define a *valid state* as one in which every live object satisfies its class invariant and every allocated resource is owned by some object. Executing $f$ produces a trace: a finite sequence of primitive steps ending in normal return or in a throw. Each guarantee is a universal statement over the set of possible traces, and universal statements compare by implication. That comparison is what turns three rules of thumb into one theorem.",
          },
          {
            kind: 'theorem',
            heading: 'Hierarchy theorem',
            body: "Write $\\mathrm{Basic}(f)$ for the claim: on every exceptional trace, the resulting state is valid and no resource is leaked. Write $\\mathrm{Strong}(f)$ for: $\\mathrm{Basic}(f)$, and on every exceptional trace the state equals the pre-state $S_{\\mathrm{in}}$. Write $\\mathrm{NoThrow}(f)$ for: $f$ has no exceptional traces at all. Then $$\\mathrm{NoThrow}(f) \\Rightarrow \\mathrm{Strong}(f) \\Rightarrow \\mathrm{Basic}(f),$$ and both implications are strict in the sense that operations exist satisfying each consequent without the antecedent.",
          },
          {
            kind: 'proof',
            body: "First implication: $\\mathrm{Strong}(f)$ says that on every exceptional trace the state is exactly $S_{\\mathrm{in}}$. Since the program was in a valid state before the call (the standing assumption when reasoning about a single operation), an unchanged state is valid, and a state with no net change allocates nothing it does not free — so nothing leaks. That is precisely $\\mathrm{Basic}(f)$. Second implication, vacuously: $\\mathrm{NoThrow}(f)$ means the set of exceptional traces is empty, so both universal quantifications hold over an empty set — an operation that never throws has no occasion to break, or to observe, its guarantees. Strictness: `vector::push_back` over a nothrow-move element type is strong yet genuinely throwable (`bad_alloc` on a full heap), so it witnesses $\\mathrm{Strong} \\not\\Rightarrow \\mathrm{NoThrow}$; and a reallocation over a type whose only transfer is a throwing move degrades to basic — valid state, no leak, damaged contents — witnessing $\\mathrm{Basic} \\not\\Rightarrow \\mathrm{Strong}$.",
          },
          {
            kind: 'derivation',
            heading: 'Copy-and-commit: manufacturing strong from basic',
            body: "The practical question is how to *build* a strong operation out of parts that are merely basic. Let $f$'s body be: (i) $t \\gets \\mathrm{copy}(O)$; (ii) apply the intended mutations to $t$; (iii) $\\mathrm{swap}(O, t)$; (iv) destroy $t$. Claim: if the swap and the destruction of $t$ are nothrow, then $f$ is strong **no matter what the mutations in step (ii) throw**. Case (i) throws: the copy wrote only into $t$, and $O$ is untouched — the copy may have partially built $t$, but $t$ is local, so its remains are destroyed normally. Case (ii) throws: $t$ may be in any damaged-but-destructible state — still local, still destroyed normally, and $O$ was never touched. Cases (iii) and (iv) cannot throw. So on every exceptional trace $O$ is bit-for-bit unchanged: the strong guarantee. This paragraph is the entire theory behind the copy-and-swap idiom, and behind the standard library's insistence that `swap` be a nothrow operation.",
          },
          {
            kind: 'derivation',
            heading: 'Why moving breaks it, and how move_if_noexcept repairs it',
            body: "Now break the derivation deliberately. Let step (ii) not copy but *move* the elements of $O$ into $t$. A move is an optimization of copy that is licensed to damage its source: after moving element $k$, slot $k$ of $O$ is a hollow shell. Suppose the move of element $j$ throws. The strong guarantee would demand restoring $O$'s elements $0,\\ldots,j-1$ — but their values are gone (they live in $t$ now), and restoring them would itself require a throwing move with the same failure possible again: there is no rollback from a rollback. With throwing moves the derivation fails, and the honest guarantee for move-based reallocation is only basic. The C++11 resolution is surgical: reallocation moves elements **only if the move constructor cannot throw** — the trait `std::is_nothrow_move_constructible`, applied through `std::move_if_noexcept` — and otherwise copies, restoring the copy-based derivation above. `noexcept` was added to the type system precisely to make this a compile-time fact: the strong guarantee of `vector::push_back` is purchased with the nothrow guarantee of `T`'s move constructor.",
          },
          {
            kind: 'example',
            heading: 'Four elements, two policies, one injected throw',
            body: "A `vector<Widget>` with size $= 4$, capacity $= 4$, receives a fifth `push_back`. Policy A (Widget's move is `noexcept`): `reserve(8)` allocates the new buffer, **moves** the 4 elements — each a few words of pointer traffic — constructs the 5th in place, swaps the three vector pointers, frees the old buffer: 4 moves, 1 construction, 1 deallocation, strong. Policy B (Widget's move may throw; copy available): `move_if_noexcept` selects the copy: 4 deep copies buy the same strong guarantee. Inject a failure under Policy B — copy #3 throws — and count: 2 temp Widgets destroyed by `reserve`'s unwinding, the original 4 elements never touched, the vector still reads size 4, capacity 4: zero visible effects. The price of Policy B is 4 deep copies; the price of \"optimizing\" it into throwing moves would have been the guarantee itself.",
          },
          {
            kind: 'application',
            heading: 'Where the standard library draws each line',
            body: "The hierarchy is visible in the library's own specifications. `vector::push_back` promises strong because reallocation uses `move_if_noexcept` — and once C++11 made `std::string`'s and the containers' moves nothrow, the fast path and the strong path coincide. `swap` is required to be nothrow for standard types because it is the commit step of every copy-and-commit design. And `std::sort` deliberately stops at basic: if a user-supplied comparison throws mid-sort, the standard guarantees no leak and a valid range holding the same elements — but unspecified order — because the algorithm cannot roll back a half-finished partition and will not pay copy-and-commit on every swap. The lesson scales down to user code: choose the guarantee per operation by what its callers need, buy strength with temp-plus-nothrow-swap where rollback matters, and spend `noexcept` moves to make the whole ecosystem's strong guarantees cheap.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 13.3
  {
    sectionId: 'cpp-ch13-s3',
    readingTime: 6,
    intro: "The single most important consequence of destructors running during unwinding is that C++ needs no `finally` clause. If every resource is held by an object whose destructor releases it, then every exit from a scope — return, break, throw — releases it with zero extra code. This idiom, RAII, turns the language's scope rules into a resource-management machine, and it is why exceptions make C++ code *more* robust, not less.",
    objectives: [
      "Define RAII and explain how constructor acquisition and destructor release make cleanup impossible to forget",
      "Justify the absence of `finally` in C++ and quantify why destructor-based cleanup beats cleanup written at each exit point",
      "Apply the resource-handle pattern to locks, files and memory, and state the destructor no-throw law",
    ],
    concepts: [
      {
        term: 'RAII',
        kind: 'definition',
        statement: "**Resource Acquisition Is Initialization**: acquire the resource in the constructor and release it in the destructor, so the resource's lifetime is welded to the handle object's lifetime — that is, to a scope. Acquire as you construct; release as you destroy.",
        detail: "The name is deliberately provocative: acquiring a resource *is* initializing the object that owns it. A `lock_guard` is not code that happens to lock a mutex — it *is* the locked mutex, for as long as it exists.",
      },
      {
        term: 'Why C++ has no finally',
        kind: 'insight',
        statement: "A `finally` clause (or `goto cleanup`) writes the release code at **every exit path** of a scope; a destructor writes it **once**, and the language dispatches to it on every exit — including the exception path, via unwinding. The number of cleanup sites you must maintain drops from one-per-exit to zero.",
        detail: "Stroustrup's argument: cleanup logic scattered along exit paths is the bug farm — each new early return is a chance to forget the unlock. The destructor cannot be forgotten because it is not code you call; it is the type's definition.",
      },
      {
        term: 'Resource handles',
        kind: 'definition',
        statement: "A **resource handle** is a small class wrapping an acquire/release pair: `std::unique_ptr` for memory, `std::lock_guard` for mutexes, `std::fstream` for files, `std::thread` (joining) for threads. The pattern covers *everything* with a matching acquire/release shape: sockets, transactions, timers, GPU buffers.",
        detail: "Handles are cheap: typically one pointer plus an allocator. Copying is either banned (`unique_ptr`) or made deep and explicit, which is why `vector`'s buffer handle in 13.6 is a non-copyable `vector_base`.",
      },
      {
        term: 'Destructors must not throw',
        kind: 'law',
        statement: "**Never let an exception escape a destructor.** If a second exception tries to escape while a first is still unwinding, `std::terminate` is called — the program dies with no further cleanup. Destructors are implicitly `noexcept` in C++11 for exactly this reason.",
        detail: "Release operations that can fail (flushing a file, closing a socket) should be best-effort in the destructor, with a separate explicit close/flush operation for callers who must know about the failure.",
      },
      {
        term: 'The constructor/destructor asymmetry',
        kind: 'method',
        statement: "Failure to **acquire** is reported at construction — by throwing, which means the object (and the resource) never existed. Failure to **release** is absorbed silently or terminates: the destructor is the one place from which nothing may be reported upward.",
        detail: "This asymmetry is the design rule for all handles: construction is where validation and error reporting live; destruction is the guaranteed, silent, no-fail epilogue.",
      },
    ],
    figures: [
      {
        afterConcept: 2,
        caption: 'Figure 13.2 — The RAII lifetime. The constructor acquires, the destructor releases, and every exit from the scope — normal flow, an early return, a throw — passes through the destructor. Cleanup is a property of the type, not a path through the code.',
        svg: `<svg viewBox="0 0 760 330" width="100%" role="img" aria-label="RAII guard lifetime: constructor acquires, every exit path passes through the destructor"><line x1="50" y1="185" x2="715" y2="185" stroke="currentColor" stroke-width="1.5"/><polygon points="707,181 707,189 717,185" fill="currentColor"/><text x="712" y="173" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.85">time</text><line x1="95" y1="95" x2="95" y2="275" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><text x="95" y="85" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">enter scope</text><rect x="275" y="120" width="285" height="130" fill="currentColor" fill-opacity="0.07"/><text x="417" y="142" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">resource held</text><text x="417" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.85">scope rules own it, not your discipline</text><rect x="125" y="150" width="150" height="70" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="200" y="177" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13.5" font-weight="bold" fill="currentColor">constructor</text><text x="200" y="196" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">acquires the resource</text><circle cx="420" cy="185" r="4" fill="currentColor"/><text x="420" y="112" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">scope body uses it</text><path d="M 428 177 L 490 120 L 552 158" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="545,154 551,162 556,152" fill="currentColor"/><text x="497" y="112" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">throw x;</text><line x1="428" y1="185" x2="552" y2="185" stroke="currentColor" stroke-width="1.6"/><polygon points="544,181 544,189 554,185" fill="currentColor"/><text x="492" y="176" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">scope ends</text><path d="M 428 193 L 490 250 L 552 212" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="545,216 553,208 556,219" fill="currentColor"/><text x="497" y="266" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">return x;</text><rect x="556" y="158" width="160" height="54" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/><text x="636" y="181" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14.5" font-weight="bold" fill="currentColor">destructor</text><text x="636" y="199" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">releases — always</text><text x="70" y="305" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">std::lock_guard · std::unique_ptr · std::ofstream — three exits, zero cleanup paths to write</text><text x="70" y="323" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.85">a forgotten release becomes a compile-time impossibility, not a code-review checklist item</text></svg>`,
      },
    ],
    examples: [
      {
        title: 'Three exit paths, two cleanup strategies',
        problem: "A function must take a mutex, open a file, process data, and release both. Version A calls `m.lock()` / `m.unlock()` and `open()` / `close()` manually; version B uses `std::lock_guard` and `std::ofstream`. Count the cleanup sites on each of the three exit paths: (1) normal return, (2) early return when `open` fails, (3) an exception thrown by `process()`.",
        steps: [
          { label: 'Version A, path count', text: 'Each exit needs `unlock()` + `close()`: 3 paths × 2 releases = **6 cleanup sites** to write, keep in order, and never forget.' },
          { label: 'Version A, failure accounting', text: 'Forget one site on one path — say the unlock on the throw path — and that path deadlocks every other thread touching `m`. One forgotten line in 6 breaks 1 path in 3; the bug ships silently because the normal path works.' },
          { label: 'Version B', text: '`std::lock_guard<std::mutex> lck(m);` and `std::ofstream out(name);` — 0 cleanup sites. The throws from `process()` unwind through the scope, running both destructors: unlock, close.' },
          { label: 'Why the guarantee is structural', text: 'The destructor is invoked by the scope rules — not by the author remembering. Adding a fourth exit path (a new early return) costs version B zero new lines of cleanup; version A a new pair of them.' },
          { label: 'Order note', text: 'Destruction is reverse of construction: `out` (constructed last) closes first, then `lck` unlocks. If closing depends on the lock still being held, declare the lock first — construction order is the control you have.' },
        ],
        result: 'Version A: 6 cleanup sites, 1 forgotten line breaks 1 of 3 paths. Version B: 0 sites, all 3 (and any future) paths correct by construction — cleanup became a property of the types.',
      },
      {
        title: 'Working through resource management',
        problem: 'RAII and managing everything. Your task: define RAII and explain how constructor acquisition and destructor release make cleanup impossible to forget.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define RAII and explain how constructor acquisition and destructor release make cleanup impossible to forget. Write down the guarantee you will rely on — for this chapter it is: RAII ties each resource to an object whose destructor releases it, so every exit — return, break, or a thrown exception — cleans up with zero extra code.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `try { g(); } catch (const std::exception& e) { handle(e); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — justify the absence of `finally` in C++ and quantify why destructor-based cleanup beats cleanup written at each exit point — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: C++ has no finally because destructors subsume it: one destructor replaces a release written at every exit path, and it cannot be forgotten. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: RAII ties each resource to an object whose destructor releases it, so every exit — return, break, or a thrown exception — cleans up with zero extra code. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'RAII ties each resource to an object whose destructor releases it, so every exit — return, break, or a thrown exception — cleans up with zero extra code.',
      'C++ has no finally because destructors subsume it: one destructor replaces a release written at every exit path, and it cannot be forgotten.',
      'Constructors report acquisition failures by throwing; destructors must never let an exception escape — a second escaping exception during unwinding calls terminate.',
    ],
    quiz: [
      {
        q: 'With `std::lock_guard<std::mutex> lck(m);` in scope, `process()` throws. What happens to the mutex?',
        options: [
          'It stays locked until `main` exits',
          'The exception machinery leaves it locked; only `catch` can release it',
          'The guard object is destroyed during unwinding, unlocking the mutex',
          'Undefined behavior: locks and exceptions cannot be mixed',
        ],
        answer: 2,
        explanation: 'Unwinding destroys automatic objects — including the guard, whose destructor unlocks. That is the whole point of RAII.',
      },
      {
        q: 'Which is the strongest reason C++ omitted a `finally` construct?',
        options: [
          'It was considered too slow for systems code',
          'Destructors centralize the release once per type, instead of once per exit path, and run on every exit',
          'The keyword was already taken by C',
          'Finally clauses cannot release memory',
        ],
        answer: 1,
        explanation: 'A finally clause is cleanup logic duplicated along every exit path; the destructor is written once in the type and dispatched by the scope rules — including the throw path.',
      },
      {
        q: 'An exception escapes a destructor while a first exception is unwinding the stack. What happens?',
        options: [
          'The two exceptions are queued and delivered in order',
          'The first exception is abandoned and the second propagates',
          'The destructor is suspended until the handler runs',
          '`std::terminate` is called immediately',
        ],
        answer: 3,
        explanation: 'Two exceptions in flight simultaneously cannot be represented: terminate fires. This is why destructors are implicitly noexcept and must never emit.',
      },
      {
        q: 'In version B of the worked example, a developer adds a fourth early `return`. How many new cleanup lines must they write?',
        options: [
          'Two: an unlock and a close before the return',
          'One: a single combined `cleanup()` call',
          'Zero: the destructors handle every exit path',
          'Four: releases for both resources, plus their exception-path twins',
        ],
        answer: 2,
        explanation: 'A new exit path costs RAII nothing — the return itself triggers the same destructors. That is the structural difference from per-path cleanup.',
      },
      // PYQ-pattern — destructors during unwinding replace finally (rephrased)
      {
        q: "A function acquires two resources and then throws. Which statement explains why the language needs no `finally` clause?",
        options: ["Exceptions are disabled by default, so cleanup code never runs", "The `catch` clause in the same function always releases its locals", "Resources are reclaimed by the operating system at process exit", "Each RAII handle destructor runs during unwinding in reverse order of construction, releasing its resource"],
        answer: 3,
        explanation: "Step 1: The data given is a function holding two acquired resources when a throw begins unwinding. Step 2: The governing rule is unwinding semantics: fully constructed local objects are destroyed in reverse order of construction while the exception travels outward, and destructors must not themselves throw. Step 3: Tracing the throw, the second handle releases its resource first, then the first handle releases its own, so both acquisitions are undone without any dedicated cleanup clause. Step 4: The distractors fail because exceptions are enabled and active here, no `catch` is needed in the same frame, and process-exit reclamation cannot run timely per-object release. Step 5: Therefore deterministic destruction during unwinding is what replaces a `finally` clause."
      }
    ],
  },

  // ------------------------------------------------------------------ 13.4
  {
    sectionId: 'cpp-ch13-s4',
    readingTime: 6,
    intro: "A class invariant is what being a valid object means. C++ enforces invariants with one sharp tool: the constructor. If a constructor exits by throwing, the object never existed at all — no destructor runs for it, no caller ever sees a half-made object. This section is about arranging code so that this single mechanism carries the entire weight of error checking.",
    objectives: [
      "Define class invariants and explain why the constructor is the enforcement point",
      "State exactly what runs — and what never runs — when a constructor exits via an exception",
      "Design validation into constructors, and contrast that with the nothrow-construction pattern of resource handles",
    ],
    concepts: [
      {
        term: 'Class invariant',
        kind: 'definition',
        statement: "An **invariant** is a statement that holds for every object of the class throughout its observable lifetime — the conditions under which the member functions make sense. For a `Date`: year, month and day are in range and the day exists in that month. For a `vector`: the element count never exceeds the allocated capacity.",
        detail: "The invariant is the class's definition of valid. Every member function may be written *as if* it were true — which is what makes class implementations short and clear instead of defensive.",
      },
      {
        term: 'The throwing-constructor theorem',
        kind: 'theorem',
        statement: "**If a constructor exits by an exception, the object never came into existence.** Its own destructor is not run; destructors of its fully constructed members and bases are run; the caller never obtains the object.",
        detail: "This is the mechanism that enforces invariants: there is no window in which an invalid object exists to be misused. Memory for the object may have been allocated, but if construction fails it is reclaimed — by the operator new machinery and the members' destructors — before anyone can touch it.",
      },
      {
        term: 'Validate at the boundary',
        kind: 'method',
        statement: "Check everything once, in the constructor; throw on bad input. Thereafter every member function assumes a valid object and states only its own preconditions. Error handling concentrates at the seams where untrusted data enters, instead of being smeared across every operation.",
        detail: "The dual rule: functions that receive already-validated types (a `Date`, not three ints) need no checking at all. Making invalid values unrepresentable is the cheapest error handling there is.",
      },
      {
        term: 'Nothrow construction for resource handles',
        kind: 'method',
        statement: "Where validation is not the issue, design the invariant so that **construction cannot fail**: `unique_ptr<int> p;` constructs empty (null) — nothing to allocate, nothing to check — and the operations that can fail are separate members (`p.reset(new int[7])` may throw `bad_alloc`).",
        detail: "The invariant empty-or-owning is achievable with nothing to fail, which is what lets resource handles be used in the exception paths of other code — you can always construct one, unwind always destroys one.",
      },
      {
        term: 'Bugs versus errors',
        kind: 'insight',
        statement: "A violation of an invariant that *should be impossible* — broken by a programming mistake — is a **bug**: `assert` it, or throw a `std::logic_error`. A failure caused by the world — bad input, exhausted memory — is a **runtime error**: throw it and let a caller recover.",
        detail: "Misclassifying the two poisons the program: throwing for bugs invites handlers that mask them; asserting on user input crashes on data. The standard library splits its exceptions into `logic_error` and `runtime_error` subhierarchies along exactly this line.",
      },
    ],
    examples: [
      {
        title: 'February 29, checked by a constructor',
        problem: "A `Date(int y, int m, int d)` throws `std::domain_error` unless the day exists in the month. Predict, without running it, what `Date(2024,2,29)`, `Date(1900,2,29)` and `Date(2000,2,29)` do — and what runs if the constructor throws.",
        steps: [
          { label: 'The leap rule', text: 'A year is leap iff $y \\bmod 4 = 0$ **and** ($y \\bmod 100 \\neq 0$ **or** $y \\bmod 400 = 0$). So the maximum day for February is 28 normally, 29 in a leap year.' },
          { label: '2024', text: '$2024 \\bmod 4 = 0$ and $2024 \\bmod 100 = 24 \\neq 0$: leap. Day 29 exists — `Date(2024,2,29)` constructs normally.' },
          { label: '1900', text: '$1900 \\bmod 4 = 0$ but $1900 \\bmod 100 = 0$ and $1900 \\bmod 400 = 300 \\neq 0$: **not** leap. February has 28 days, so day 29 fails — the constructor throws. This is the classic trap: 1900 is divisible by 4 yet not a leap year.' },
          { label: '2000', text: '$2000 \\bmod 400 = 0$: leap (the every-400-years exception to the exception). `Date(2000,2,29)` constructs.' },
          { label: 'What a throw runs', text: 'Suppose `Date` has a `std::string` label member constructed before the validation in the body. On the throw: the member string destructor runs, the operator new storage is reclaimed — but no `Date` destructor runs, because no `Date` ever existed. The caller never sees a half-built object.' },
        ],
        result: '2024 and 2000 construct (leap years); 1900 throws — divisible by 100 but not by 400. On any throw: members are destroyed, the object never exists, the caller handles the exception.',
      },
      {
        title: 'Working through enforcing invariants',
        problem: 'Constructors, exceptions and design. Your task: define class invariants and explain why the constructor is the enforcement point.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define class invariants and explain why the constructor is the enforcement point. Write down the guarantee you will rely on — for this chapter it is: The invariant is the class definition of valid; the constructor is its enforcement point — a constructor that exits by an exception means the object never existed.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `try { g(); } catch (const std::exception& e) { handle(e); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state exactly what runs — and what never runs — when a constructor exits via an exception — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: When a constructor throws, destructors of fully constructed members and bases run, but the object itself has no destructor to run, and callers never see it. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: The invariant is the class definition of valid; the constructor is its enforcement point — a constructor that exits by an exception means the object never existed. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'The invariant is the class definition of valid; the constructor is its enforcement point — a constructor that exits by an exception means the object never existed.',
      'When a constructor throws, destructors of fully constructed members and bases run, but the object itself has no destructor to run, and callers never see it.',
      'Validate untrusted data once at the boundary, design resource handles whose construction cannot fail, and distinguish bugs (assert, logic errors) from the world failing (throw, runtime errors).',
    ],
    quiz: [
      {
        q: '`Date(1900,2,29)` throws but `Date(2000,2,29)` does not. Why?',
        options: [
          '1900 is not divisible by 4',
          'Both are leap years; the constructor throws for a different reason in 1900',
          '1900 is divisible by 100 but not by 400, so it is not a leap year; 2000 is divisible by 400, so it is',
          'Century years never have a February 29 in the Gregorian calendar',
        ],
        answer: 2,
        explanation: 'The leap rule: divisible by 4 AND (not divisible by 100 OR divisible by 400). 1900 fails the second clause; 2000 passes through the mod-400 escape.',
      },
      {
        q: 'A constructor of class X throws after its `std::string` member was fully constructed. What runs?',
        options: [
          'X destructor runs, then the member string destructor',
          'Nothing runs; the memory is simply reclaimed',
          'The member string destructor runs; X never existed, so no X destructor runs',
          'The caller-side handler runs first, then cleanup',
        ],
        answer: 2,
        explanation: 'Fully constructed members and bases are destroyed; the object itself never came into existence, so its destructor is not a thing to run.',
      },
      {
        q: "Why does `std::unique_ptr<int> p;` (empty construction) never throw?",
        options: [
          'It allocates a null block eagerly',
          'Its invariant — empty or owning — is achievable with nothing to acquire or check',
          'unique_ptr suppresses bad_alloc internally',
          'Empty construction throws but is caught by the library',
        ],
        answer: 1,
        explanation: 'The nothrow-construction pattern: the default state costs nothing to establish. Failing operations are separate members (reset, new) that may throw.',
      },
      {
        q: 'A required precondition that a caller violated is best reported as:',
        options: [
          'A runtime_error thrown for the caller to catch and retry',
          'An assert or logic_error — it is a bug, and handlers would only mask it',
          'Nothing: preconditions are documentation',
          'terminate, immediately',
        ],
        answer: 1,
        explanation: 'Broken contracts that should be impossible are bugs: assert them in debug, or throw from the logic_error family. Runtime errors are reserved for failures of the world that callers could not have checked.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.5
  {
    sectionId: 'cpp-ch13-s5',
    readingTime: 7,
    intro: "Now the mechanics: what a throw really does, how handlers are chosen, what the standard exception hierarchy gives you, and what it all costs. The rules are few and exact — exception objects are copies, handlers match first-not-best, rethrow preserves the original, terminate when nobody catches — and each exists to make the safety patterns of the previous sections mechanically sound.",
    objectives: [
      "Apply the matching rules: handler declaration versus exception dynamic type, order of examination, and `catch (...)`",
      "Choose between catching by reference and by value, and use bare `throw;` to rethrow the original exception",
      "Navigate the standard exception hierarchy and state the C++11 cost model for exceptions",
    ],
    concepts: [
      {
        term: 'Throw, try and catch',
        kind: 'notation',
        statement: "`throw E(args)` constructs (a copy of) the exception object and begins unwinding. A handler `catch (T t)` or `catch (T& t)` matches if the exception's **dynamic** type is `T` or a class derived from `T`. Handlers of one `try` are examined **in order; the first match runs** — not the best match. `catch (...)` matches anything.",
        detail: "Order the handlers most-derived first: a base-class clause placed earlier silently swallows everything its derived clauses were meant to see.",
      },
      {
        term: 'Catch by const reference',
        kind: 'method',
        statement: "Catch as `catch (const std::exception& e)`: the reference binds the actual exception object — no copy, no **slicing** of derived members, and virtual functions like `e.what()` dispatch to the real type. Catching by value copies and slices: the derived part is amputated before the handler sees it.",
        detail: "Inside a handler, a bare `throw;` rethrows **the original exception object** — preserving its dynamic type — while `throw e;` would copy (and slice, if `e` is caught by value). Use bare `throw;` to pass an exception outward after partial handling.",
      },
      {
        term: 'The standard exception hierarchy',
        kind: 'definition',
        statement: "All standard exceptions derive from `std::exception`: `logic_error` (`invalid_argument`, `out_of_range`, `length_error`, `domain_error`, `future_error`), `runtime_error` (`range_error`, `overflow_error`, `underflow_error`, `system_error`), and direct children `bad_alloc`, `bad_cast`, `bad_typeid`, `bad_function_call`.",
        detail: "Derive your own exceptions from `std::exception` (or `std::runtime_error`) so that generic handlers — logging at the top of `main` — can catch, `what()` and rethrow them uniformly.",
      },
      {
        term: 'Unwinding and terminate',
        kind: 'definition',
        statement: "The runtime searches outward for a matching handler, popping frames and running their destructors as it goes (**stack unwinding**). If no handler exists, or an exception escapes a `noexcept` function, `std::terminate` is called — for a `noexcept` violation, immediately, without unwinding.",
        detail: "The search is by *dynamic* type of the exception against the *static* types of handler declarations, scanning scopes and then frames outward — which is why a `try` in a library can recover local failures while letting others pass through untouched.",
      },
      {
        term: 'The cost model',
        kind: 'insight',
        statement: "On the common implementation (table-driven, \"zero-cost\" unwinding), a program that throws nothing pays essentially nothing — the cost is moved into static tables consulted only when a throw happens. A `throw` itself costs far more than a `return` (and grows with the number of frames popped), which is irrelevant for rare errors and wrong for hot control flow.",
        detail: "The design consequence: exceptions are for the exceptional. If a failure is expected on the fast path — a parse loop rejecting most tokens — return codes or expected-style types beat exceptions; `noexcept` additionally lets the compiler drop unwind bookkeeping around calls it knows cannot fail.",
      },
    ],
    examples: [
      {
        title: 'First match, not best match',
        problem: "`v.at(7)` on a size-5 `vector` throws `std::out_of_range`. For each handler list, say which clause runs: (A) `catch (std::out_of_range&)` then `catch (std::logic_error&)`; (B) `catch (std::logic_error&)` then `catch (std::out_of_range&)`; (C) `catch (std::exception&)` only; (D) `catch (std::range_error&)` only.",
        steps: [
          { label: 'The type chain', text: '`std::out_of_range` derives from `std::logic_error`, which derives from `std::exception`. `std::range_error` derives from `std::runtime_error` — a *sibling* branch: it does not match at all.' },
          { label: 'List A', text: 'The first clause matches the dynamic type exactly: the `out_of_range` handler runs. The `logic_error` clause never gets consulted — correct style, most-derived first.' },
          { label: 'List B', text: 'The first clause matches too (a base-class reference binds the derived object): the `logic_error` handler runs, **even though a more specific clause sits right below it**. Compiles fine, silently wrong intent — the classic ordering bug.' },
          { label: 'List C', text: 'The single base clause matches and runs. One coarse handler is fine when all it does is log `e.what()` and rethrow with `throw;` — the rethrow still carries the original `out_of_range` object.' },
          { label: 'List D', text: 'No clause matches — `range_error` is on the runtime_error branch. The exception propagates out of the `try` entirely, unwinding further frames until another handler or `std::terminate`.' },
        ],
        result: 'A: out_of_range clause. B: logic_error clause — first match wins, order is semantics. C: exception clause. D: nothing matches, the exception escapes the try block.',
      },
      {
        title: 'Working through throwing and catching exceptions',
        problem: 'The mechanics and the cost model. Your task: apply the matching rules: handler declaration versus exception dynamic type, order of examination, and `catch (...)`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: apply the matching rules: handler declaration versus exception dynamic type, order of examination, and `catch (...)`. Write down the guarantee you will rely on — for this chapter it is: Handlers match by the exception dynamic type against declaration types, are examined in order, and the FIRST match runs — put derived-class handlers before base-class ones.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `try { g(); } catch (const std::exception& e) { handle(e); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — choose between catching by reference and by value, and use bare `throw;` to rethrow the original exception — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Catch by const reference to avoid copying and slicing; rethrow the original with a bare throw; derive your own exception types from std::exception. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Handlers match by the exception dynamic type against declaration types, are examined in order, and the FIRST match runs — put derived-class handlers before base-class ones. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Handlers match by the exception dynamic type against declaration types, are examined in order, and the FIRST match runs — put derived-class handlers before base-class ones.',
      'Catch by const reference to avoid copying and slicing; rethrow the original with a bare throw; derive your own exception types from std::exception.',
      'The zero-cost model makes non-throwing code free; a throw is far costlier than a return and grows with frames popped — exceptions are for the exceptional, not for control flow.',
    ],
    quiz: [
      {
        q: 'Handlers `catch (std::logic_error&)` then `catch (std::out_of_range&)`; an `out_of_range` is thrown. Which runs?',
        options: [
          '`out_of_range` — the most specific match is preferred',
          '`logic_error` — handlers are examined in order and the first match runs',
          'Ambiguous: the compiler rejects the pair',
          '`catch (...)` takes over',
        ],
        answer: 1,
        explanation: 'Matching is first-match-wins, not best-match: the base-class clause matches the derived exception and runs; the specific clause below is dead code. Order handlers most-derived first.',
      },
      {
        q: '`catch (std::exception e)` catches an `out_of_range` by value. What is lost?',
        options: [
          'Nothing: the copy preserves everything',
          'The exception can no longer be rethrown',
          'The derived part is sliced off: e is a plain exception, and any copied state of out_of_range is gone',
          'The program terminates',
        ],
        answer: 2,
        explanation: 'By-value catching copies into the static type of the declaration, amputating the derived portion. Catch by const reference — `catch (const std::exception& e)` — instead.',
      },
      {
        q: 'Inside a handler, what does a bare `throw;` do?',
        options: [
          'Rethrows the original exception object, preserving its dynamic type',
          'Throws a copy of the caught object, sliced to the declared type',
          'Clears the exception and returns normally',
          'Calls std::terminate',
        ],
        answer: 0,
        explanation: 'Bare throw re-activates the exception currently being handled — the original object, original type. throw e; by contrast copies (and slices, if caught by value).',
      },
      {
        q: 'Under the table-driven (zero-cost) implementation model:',
        options: [
          'Every function call pays a small tax to support potential throws',
          'Both normal and exceptional paths cost the same',
          'Code that never throws pays essentially nothing; the cost lives in static tables consulted only when a throw actually happens',
          'Throws are as cheap as returns by mandate of the standard',
        ],
        answer: 2,
        explanation: 'The zero-cost model moves unwinding information out of the hot path entirely; a throw is expensive relative to a return, which is fine for rare errors and wrong for control flow.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.6
  {
    sectionId: 'cpp-ch13-s6',
    readingTime: 8,
    intro: "Now the chapter cashes in its philosophy: a small `vector`, built the way the standard one is, whose every operation states and keeps a guarantee. Two ideas do the work — `vector_base`, a resource handle for raw memory, and `reserve`, which moves-if-safe and copies otherwise so that `push_back` keeps the strong guarantee even while elements are in transit.",
    objectives: [
      "Explain the vector_base split and how its destructor makes buffer management exception-safe",
      "Trace reserve and push_back step by step, identifying the commit point and the fallback to copying",
      "Compute the amortized cost of growth and distinguish checked from unchecked access",
    ],
    concepts: [
      {
        term: 'vector_base',
        kind: 'definition',
        statement: "`vector_base` is the raw-memory layer: an allocator plus three pointers — `elem` (start of elements), `space` (one past the last constructed element), `last` (end of storage) — with a destructor that unconditionally destroys elements and deallocates. size is `space - elem`; capacity is `last - elem`.",
        detail: "Separating it from `vector` gives the buffer a handle whose destructor frees it *even while an exception is in flight* — RAII applied to raw memory. The invariant `elem <= space <= last` is what every operation must preserve.",
      },
      {
        term: 'reserve',
        kind: 'method',
        statement: "Growth is: allocate a new `vector_base` with capacity `max(2*capacity, needed)`; **move** the elements into it if their move is `noexcept`, **copy** otherwise; swap the three pointers; let the old base's destructor clean up the old buffer.",
        detail: 'The two-phase structure — build the new arrangement aside, then swap — is the strong guarantee made executable. If anything throws before the swap, the vector still points at its untouched old buffer.',
      },
      {
        term: 'push_back',
        kind: 'method',
        statement: "After ensuring space, `push_back` constructs the new element at `space`, then increments `space`. The commit is a single construction: if it throws, the size is unchanged — the vector gained nothing and lost nothing.",
        detail: 'Every step before the construction (reallocation, transfer) is already exception-safe; the construction itself is the last, only, and atomic visible effect.',
      },
      {
        term: 'Checked and unchecked access',
        kind: 'method',
        statement: "`at(i)` validates `0 <= i < size()` and throws `std::out_of_range`; `operator[](i)` is unchecked — the caller has already validated, so no test runs (at most a debug-build `assert`).",
        detail: "Offering both is the design: pay for the check exactly on the paths where the index is untrusted. The out-of-range call to `operator[]` is a precondition violation — a bug, not an error to handle.",
      },
      {
        term: 'Copy-assignment via a temporary',
        kind: 'insight',
        statement: "Implement `a = b` as: make a temp copy of `b`'s elements, `swap` it into `a`, let the temp destroy the old state. Self-assignment is safe for free, and any throw happens while `a` is still intact — the strong guarantee without a special case.",
        detail: "This copy-and-swap shape reuses the machinery of `reserve`: it is the same theorem (build aside, commit by swap) applied to assignment instead of growth.",
      },
    ],
    examples: [
      {
        title: 'The arithmetic of doubling',
        problem: 'An empty `vector` (capacity 0) receives 1000 `push_back`s. The growth policy doubles capacity, first allocation is 1, and each reallocation moves (nothrow move) exactly the current size. How many allocations occur, how many element moves in total, and what is the amortized move count per push?',
        steps: [
          { label: 'When reallocation happens', text: 'A push that finds size == capacity triggers reserve. With doubling: pushes 1, 2, 3, 5, 9, 17, 33, 65, 129, 257, 513 — the capacities before them are 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512.' },
          { label: 'Count allocations', text: 'Eleven pushes trigger reserve: 11 allocations, taking capacity 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. The 1000th push never reallocates again — capacity 1024 suffices.' },
          { label: 'Count moves', text: 'Each reallocation moves the current size: $0+1+2+4+8+\\cdots+512 = 2^{10} - 1 = 1023$ element moves in total.' },
          { label: 'Amortize', text: '$1023/1000 \\approx 1.02$ moves per push. In general, for $n$ pushes the total is below $2n$ (the worst case is just past a doubling: $n = 2^k + 1$ gives $2^{k+1} - 1 < 2n$) — each element is moved at most about once per *doubling of the whole vector*, which is the sense in which growth is free.' },
          { label: 'The slack', text: 'The price is memory: final capacity 1024 for 1000 elements — 24 spare slots, under 2.4% overhead, and the next 24 pushes cost no allocation at all.' },
        ],
        result: '1000 pushes: 11 allocations, 1023 element moves, amortized about 1.02 moves per push — bounded by 2n in general, with 2.4% capacity slack at the end.',
      },
      {
        title: 'Working through a vector implementation',
        problem: 'An industrial-strength vector with exceptions. Your task: explain the vector_base split and how its destructor makes buffer management exception-safe.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain the vector_base split and how its destructor makes buffer management exception-safe. Write down the guarantee you will rely on — for this chapter it is: vector_base owns the raw buffer, so its destructor frees memory even when an exception is mid-flight — RAII under the vector itself.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `try { g(); } catch (const std::exception& e) { handle(e); }` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — trace reserve and push_back step by step, identifying the commit point and the fallback to copying — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: reserve builds the new arrangement aside, moves if noexcept and copies otherwise, then commits with a nothrow pointer swap: push_back inherits the strong guarantee. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: vector_base owns the raw buffer, so its destructor frees memory even when an exception is mid-flight — RAII under the vector itself. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'vector_base owns the raw buffer, so its destructor frees memory even when an exception is mid-flight — RAII under the vector itself.',
      'reserve builds the new arrangement aside, moves if noexcept and copies otherwise, then commits with a nothrow pointer swap: push_back inherits the strong guarantee.',
      'Doubling growth makes 1000 pushes cost 1023 element moves (under 2n always); at() validates and throws out_of_range while operator[] trusts the caller.',
    ],
    quiz: [
      {
        q: 'An empty `vector` with pure doubling receives 1000 `push_back`s (first allocation capacity 1). How many element moves total?',
        options: ['999', '1023', '2000', 'It depends on the heap state'],
        answer: 1,
        explanation: 'Moves happen at each reallocation, moving the current size: 1+2+4+...+512 = 2^10 - 1 = 1023. The bound is under 2n for any n.',
      },
      {
        q: 'Why keep the buffer in a separate `vector_base` class rather than directly in `vector`?',
        options: [
          'To reduce the size of the vector object by one pointer',
          'Because its destructor frees the buffer even while an exception is unwinding — raw memory gets a RAII handle of its own',
          'To allow vector to inherit from the allocator',
          'Because templates cannot contain raw pointers',
        ],
        answer: 1,
        explanation: 'During reserve, a vector_base holds the new (or old) buffer; if anything throws, its destructor still destroys elements and deallocates — the exception-safety of the whole design rests on it.',
      },
      {
        q: 'During `reserve(8)` on a capacity-4 vector with nothrow-move elements, who frees the OLD buffer?',
        options: [
          'The caller, via an explicit delete',
          'reserve itself, before the swap',
          'A temporary vector_base whose destructor runs as it goes out of scope — after the swap made it owner of the old buffer',
          'The garbage collector',
        ],
        answer: 2,
        explanation: 'The swap passes old-buffer ownership to the local base; its destructor (running normally or during unwinding) destroys the old elements and deallocates.',
      },
      {
        q: 'Which statement about `at()` versus `operator[]` is the design intent?',
        options: [
          'at() is always preferred because safety is free',
          'operator[] throws std::out_of_range only in debug builds',
          'at() validates and throws out_of_range for untrusted indices; operator[] is unchecked because the caller has already validated — the out-of-range call is a precondition violation, a bug',
          'Both are checked; at() is simply faster',
        ],
        answer: 2,
        explanation: 'TC++PL provides both on purpose: pay the validation cost exactly where indices are untrusted; treat an out-of-range operator[] as a bug (assert), not an error to recover from.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.7
  {
    sectionId: 'cpp-ch13-s7',
    readingTime: 4,
    intro: "The chapter's rules of thumb compress its philosophy into checkable habits. Three of them carry most of the weight: design error handling as part of the interface from the start; throw to report an unmet promise and catch only what you can handle; and prefer RAII to any amount of manual cleanup.",
    objectives: [
      "Recite the chapter's core advice on when to throw, when to assert, and when to use ordinary control flow",
      "Explain why error handling must be designed in from the start rather than retrofitted",
      "Audit a small design against the advice list and justify each verdict",
    ],
    concepts: [
      {
        term: 'Design error handling first',
        kind: 'method',
        statement: "**Error handling is part of the interface, so it must be designed when the interface is designed** — which guarantee each operation offers is as contractual as its postconditions. Retrofitting guarantees into working code is a redesign, not a patch.",
        detail: 'The practical form: for each operation, write down which of basic/strong/nothrow it offers and why callers need that. The audit takes minutes on a whiteboard and months to reverse.',
      },
      {
        term: 'Throw to report, catch to recover',
        kind: 'insight',
        statement: "**Throw an exception to indicate you cannot perform an assigned task; catch an exception only if you can handle it.** Do not use `throw` for ordinary control flow — it is far costlier than a `return` and it scatters the logic; do not write catch-alls that swallow errors and continue as if nothing happened.",
        detail: 'The corollary: exceptions are for the exceptional. A parser rejecting most tokens on its fast path wants a return code or an expected-style type, not a throw per failure.',
      },
      {
        term: 'RAII over manual cleanup, always',
        kind: 'law',
        statement: "**Never write cleanup that a resource handle could own.** Every acquire/release pair — memory, locks, files, sockets, transactions — belongs in a class whose destructor releases it, so every exit path, including throws, is correct by construction.",
        detail: 'The advice closes the loop with the rest of the chapter: exceptions make code with RAII *more* robust than code without them, because the destructor path is the one path that cannot be forgotten.',
      },
      {
        term: 'Shipping rule for exception handling',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Design error handling with the interface: which guarantee each operation offers is a contract, and retrofitting is redesign.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for exception handling',
        kind: 'method',
        statement: 'Take the objectives as review questions: recite the chapter’s core advice on when to throw, when to assert, and when to use ordinary control flow? Then explain why error handling must be designed in from the start rather than retrofitted? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Auditing a design against the advice',
        problem: "A colleague's `read_config(path)` returns an error code, locks a mutex manually, and `delete`s a `new char[4096]` buffer on each of its three exits. Audit it with the chapter's checklist and prescribe the rewrite.",
        steps: [
          { label: 'Resource audit', text: 'Two acquire/release pairs managed by hand (mutex, buffer) across 3 exit paths = 6 cleanup sites, and one wrong `delete` (missing `[]`) besides. Verdict: wrap both — `std::lock_guard`, `std::unique_ptr<char[]>` — per the RAII law.' },
          { label: 'Failure classification', text: 'Config files are missing or malformed in the field — a runtime error the caller may recover from (default config, user prompt). Verdict: throw `std::runtime_error` with context, not an error code callers will ignore.' },
          { label: 'Guarantee choice', text: 'Callers hold partially-built state across this call. Verdict: offer the strong guarantee — build the parse in a temporary and commit by move, the copy-and-commit shape of 13.2/13.6.' },
          { label: 'Frequency check', text: 'Read once at startup: cost of a throw is irrelevant. (Had this been per-frame hot code, the verdict on error codes would flip.)' },
          { label: 'Who recovers', text: 'The GUI wants to prompt; the service wants to log and die. Both catch `std::runtime_error` where context exists — impossible with an ignored return code.' },
        ],
        result: 'Rewrite: lock_guard + unique_ptr (0 cleanup sites), throw runtime_error on malformed input, temp-then-commit for the strong guarantee — each verdict is a direct application of the checklist.',
      },
      {
        title: 'Reviewing exception handling code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: recite the chapter’s core advice on when to throw, when to assert, and when to use ordinary control flow.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Design error handling with the interface: which guarantee each operation offers is a contract, and retrofitting is redesign.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `try { g(); } catch (const std::exception& e) { handle(e); }`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: explain why error handling must be designed in from the start rather than retrofitted. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Throw to report an unmet promise, catch only what you can handle, and keep throws off hot paths where failures are expected.' },
        ],
        result: 'The review ends with findings tied to reasons: Design error handling with the interface: which guarantee each operation offers is a contract, and retrofitting is redesign. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Design error handling with the interface: which guarantee each operation offers is a contract, and retrofitting is redesign.',
      'Throw to report an unmet promise, catch only what you can handle, and keep throws off hot paths where failures are expected.',
      'Any acquire/release pair belongs in a resource handle — exceptions then strengthen code, because destructor cleanup is the one path that cannot be forgotten.',
    ],
    quiz: [
      {
        q: 'Which practice does the chapter explicitly reject?',
        options: [
          'Catching only exception types you can actually handle',
          'Using `throw` for the ordinary flow of a loop that frequently takes that branch',
          'Documenting which guarantee each operation offers',
          'Deriving custom exceptions from std::exception',
        ],
        answer: 1,
        explanation: 'Exceptions are for the exceptional: a frequently-taken branch thrown as control flow pays the unwinding cost on the hot path and obscures the logic. Use ordinary returns there.',
      },
      {
        q: 'Why is retrofitting error handling into a finished design costly?',
        options: [
          'It cannot be done without changing the ABI',
          'Guarantees shape interfaces — which operations can throw, what state callers may rely on — so adding them later forces redesign of every caller that guessed otherwise',
          'The compiler caches old exception specifications',
          'It is not costly; this is a style preference',
        ],
        answer: 1,
        explanation: 'The guarantees are interface contracts, not implementation details. Callers written against unspecified behavior have already guessed; changing the guess breaks them.',
      },
      {
        q: 'The single most load-bearing habit from the chapter is:',
        options: [
          'Catching every exception as early as possible',
          'Wrapping every acquire/release pair in a resource handle so cleanup runs on every exit path',
          'Declaring every function noexcept',
          'Avoiding exceptions in favor of error codes',
        ],
        answer: 1,
        explanation: 'RAII makes every exit path — return, break, throw — correct by construction. Everything else in the chapter is policy; this one is the mechanism.',
      },
    ],
  },
]
