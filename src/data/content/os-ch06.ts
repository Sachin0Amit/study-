import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 6: Synchronization Tools (Sections 6.1 – 6.4 as mapped in library.ts)
// Master study content. Code fragments and traces follow the book's figures.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const osCh6Content: SectionContent[] = [
  // ------------------------------------------------------------------ 6.1
  {
    sectionId: 'osc-ch6-s1',
    readingTime: 8,
    intro: 'When two processes touch the same data at the same time, obviously correct code can produce wrong answers — this is the race condition, and it is the reason synchronization exists. This section pins down exactly what goes wrong in the producer–consumer counter, then states the critical-section problem and the three requirements any correct solution must satisfy.',
    objectives: [
      'Show how concurrent count++ and count-- lose an update at the machine level',
      'Define race conditions and identify them in operating-system code',
      'State the structure of the critical-section problem: entry, critical, exit and remainder sections',
      'Define mutual exclusion, progress and bounded waiting precisely',
    ],
    concepts: [
      {
        term: 'Cooperating processes',
        kind: 'definition',
        statement: 'A **cooperating process** is one that can affect or be affected by other processes executing in the system. Cooperating processes either directly share a logical address space (both code and data) or share data only through shared memory or message passing — and concurrent access to shared data may result in **data inconsistency**.',
        detail: 'The producer–consumer problem with a bounded buffer is the representative paradigm: the producer fills the buffer while the consumer empties it, and both must agree on how many items it currently holds.',
      },
      {
        term: 'The bounded-buffer counter race',
        kind: 'method',
        statement: 'Adding an integer count (initialized to 0, incremented by the producer after each insert, decremented by the consumer after each removal) looks correct — yet if producer and consumer concurrently execute count++ and count--, the final value can be 4, 5 or 6 when the only correct result is 5.',
        detail: 'The producer loops: while (count == BUFFER_SIZE) ; then buffer[in] = next_produced; in = (in + 1) % BUFFER_SIZE; count++. The consumer loops: while (count == 0) ; then next_consumed = buffer[out]; out = (out + 1) % BUFFER_SIZE; count--. Each routine is correct in isolation; together they are not.',
      },
      {
        term: 'The lost update at machine level',
        kind: 'insight',
        statement: 'A single high-level statement is not atomic. count++ compiles to three steps — load into a register, increment the register, store back — and count-- likewise. Concurrent execution of the two statements is equivalent to a **sequential execution in which the lower-level statements are interleaved in some arbitrary order** (preserving each statement’s internal order).',
        detail: 'With count = 5: register1 = count (5), register1 = register1 + 1 (6), register2 = count (5), register2 = register2 − 1 (4), count = register1 (6), count = register2 (4) — the consumer’s store overwrites the producer’s, one update is lost, and count ends at 4. Reversing the two stores yields 6. The registers may even be the same physical register — the interrupt handler saves and restores its contents, so each process still sees its own values.',
      },
      {
        term: 'Race condition',
        kind: 'definition',
        statement: 'A **race condition** is a situation in which several processes access and manipulate the same data concurrently and the outcome of the execution depends on the particular order in which the accesses take place.',
        detail: 'To guard against the race above, we must ensure that only one process at a time can manipulate count — that is, the processes must be synchronized. Multicore systems multiply the exposure: several threads sharing data run in parallel on different processing cores, so any change made by one must not interfere with another.',
      },
      {
        term: 'The critical-section problem',
        kind: 'definition',
        statement: 'Consider $n$ processes $\\{P_0, P_1, \\ldots, P_{n-1}\\}$, each with a segment of code — its **critical section** — in which it accesses and updates data shared with at least one other process. The problem: design a protocol such that **when one process is executing in its critical section, no other process executes in its critical section**.',
        detail: 'Each process must request permission to enter (the **entry section**), may then execute its critical section, followed by the **exit section**; the remaining code is the **remainder section**. The loop structure is: while (true) { entry section; critical section; exit section; remainder section; }.',
      },
      {
        term: 'The three requirements',
        kind: 'law',
        statement: 'Any solution to the critical-section problem must satisfy: **Mutual exclusion** — if process $P_i$ is executing in its critical section, then no other processes can be executing in their critical sections. **Progress** — if no process is executing in its critical section and some processes wish to enter, then only those processes that are not executing in their remainder sections can participate in deciding which will enter its critical section next, and this selection cannot be postponed indefinitely. **Bounded waiting** — there exists a bound on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.',
        detail: 'Each process is assumed to execute at a nonzero speed, but no assumption may be made about the relative speed of the $n$ processes. Mutual exclusion is about safety (never two inside); progress and bounded waiting are about liveness — the system keeps deciding, and nobody waits forever.',
      },
      {
        term: 'Races inside the kernel',
        kind: 'insight',
        statement: 'Kernel code is subject to several possible race conditions because many kernel-mode processes may be active at once: the list of open files, memory-allocation structures, process lists and interrupt-handling structures are all shared. For example, if two processes call fork() simultaneously, the race on the kernel variable next_available_pid can assign **the same process identifier to two separate processes**.',
        detail: 'It is up to kernel developers to ensure that the operating system is free from such race conditions — which is exactly why the rest of this chapter builds the tools.',
      },
      {
        term: 'Preemptive versus nonpreemptive kernels',
        kind: 'definition',
        statement: 'A **preemptive kernel** allows a process to be preempted while running in kernel mode; a **nonpreemptive kernel** does not — a kernel-mode process runs until it exits kernel mode, blocks, or voluntarily yields the CPU.',
        detail: 'A nonpreemptive kernel is essentially free from race conditions on kernel data structures, since only one process is active in the kernel at a time; preemptive kernels must be carefully designed (and are especially difficult on SMP systems, where two kernel-mode processes can run simultaneously on different cores). In exchange, preemptive kernels are more responsive and more suitable for real-time programming. Disabling interrupts around a shared variable solves the problem on a single core — the current instruction sequence cannot be preempted — but on a multiprocessor, disabling interrupts on every core is time-consuming (the message must reach all processors, delaying entry into each critical section) and can even affect the system clock.',
      },
    ],
    examples: [
      {
        title: 'Tracing the lost update',
        problem: 'The buffer count is 5. The producer executes count++ and the consumer executes count-- concurrently. Show an interleaving that produces a wrong final value.',
        steps: [
          { label: 'Step 1: Expand to machine level', text: 'Producer: register1 = count; register1 = register1 + 1; count = register1. Consumer: register2 = count; register2 = register2 − 1; count = register2.' },
          { label: 'Step 2: Interleave T0–T3', text: 'Producer loads register1 = count (register1 = 5) and increments it (register1 = 6). Consumer loads register2 = count — still 5, the producer has not stored yet — and decrements it (register2 = 4).' },
          { label: 'Step 3: Interleave T4–T5', text: 'Producer stores count = register1 → count = 6. Then the consumer stores count = register2 → count = 4. The consumer’s store blindly overwrites the producer’s.' },
          { label: 'Step 4: Check every outcome', text: 'If the stores happen in the opposite order, count ends at 6. Only the interleavings in which the two statements do not overlap produce the correct 5.' },
        ],
        result: 'count == 4 (or 6) instead of 5: the update that stored first is lost. The process holding four-full buffers when five are actually full has simply been misinformed by an unsynchronized counter.',
      },
      {
        title: 'A duplicate process identifier',
        problem: 'Two processes, P0 and P1, simultaneously invoke fork() on a system where the kernel variable next_available_pid is 2615. Why can both children receive pid 2615?',
        steps: [
          { label: 'Step 1: The shared read', text: 'Both processes are executing kernel code that computes the child pid from next_available_pid — and both read the value 2615 before either has updated it.' },
          { label: 'Step 2: Independent updates', text: 'Each kernel instance then increments its own copy of the accounting state and eventually both return 2615 to their parent processes.' },
          { label: 'Step 3: The consequence', text: 'Two separate processes now share one process identifier, corrupting every structure keyed by pid — signals, wait() accounting, /proc entries.' },
        ],
        result: 'Unless mutual exclusion is provided around the read-modify-write of next_available_pid, the same identifier can be assigned twice — a textbook kernel race, cured only by synchronization.',
      },
    ],
    keyTakeaways: [
      'count++ and count-- each compile to load, modify and store; concurrent interleavings of those steps can lose an update (count = 4 or 6 instead of 5).',
      'A race condition exists when the outcome of concurrent accesses depends on the order in which they happen.',
      'The critical-section problem asks for a protocol guaranteeing that at most one process executes in its critical section at any time.',
      'Solutions must provide mutual exclusion (safety) plus progress and bounded waiting (liveness).',
      'Kernel data structures — open-file lists, pid allocation, memory allocation, interrupt handling — are classic race sites.',
      'Nonpreemptive kernels are essentially race-free on kernel data but less responsive; disabling interrupts fixes single-core races but is too expensive on multiprocessors.',
    ],
    quiz: [
      {
        q: 'With count = 5 and the producer and consumer concurrently executing count++ and count--, the possible final values of count are:',
        options: ['Only 5 — the operations are atomic', '4, 5 or 6, depending on the interleaving', 'Only 4 or 6 — 5 is impossible', 'Only 0 or 5'],
        answer: 1,
        explanation: 'The register-level interleavings can lose the producer’s update (result 4), lose the consumer’s (result 6), or execute the statements disjointly (result 5). Only proper synchronization forces the correct 5 every time.',
      },
      {
        q: 'Which requirement states that if no process is in its critical section and some wish to enter, the choice of the next entrant cannot be postponed indefinitely?',
        options: ['Mutual exclusion', 'Bounded waiting', 'Progress', 'Reentrancy'],
        answer: 2,
        explanation: 'Progress also restricts who may participate in the decision: only processes not executing in their remainder sections. Bounded waiting instead limits how many times others may enter before an already-requesting process is granted entry.',
      },
      {
        q: 'Bounded waiting requires that:',
        options: ['Every critical section must finish within a fixed number of instructions', 'A bound exists on the number of times other processes may enter their critical sections after a process requests entry and before that request is granted', 'The ready queue must be FIFO', 'Each process must run at a known speed'],
        answer: 1,
        explanation: 'Bounded waiting is a waiting-limit on admission to the critical section, not a limit on section length — and it must hold even though the relative speeds of the $n$ processes are unknown.',
      },
      {
        q: 'Why is disabling interrupts not a practical general solution on a multiprocessor?',
        options: ['It only works for nonpreemptive kernels', 'Interrupts must be disabled on every core, which is time-consuming and even affects the system clock', 'It violates the bounded-waiting requirement by definition', 'User processes cannot execute CLI instructions in kernel mode'],
        answer: 1,
        explanation: 'The disable message must be passed to all processors, delaying entry into each critical section and degrading system efficiency — and a clock kept updated by interrupts falls behind. On a single processor it works, because the running instruction stream simply cannot be preempted.',
      },
      {
        q: 'The principal advantage of a nonpreemptive kernel over a preemptive one is:',
        options: ['Better real-time responsiveness', 'Higher throughput on SMP systems', 'It is essentially free of race conditions on kernel data structures', 'It requires no dispatcher'],
        answer: 2,
        explanation: 'With only one process active in the kernel at a time, kernel structures are never left half-updated by preemption. The trade-off: less responsiveness and poorer support for real-time tasks, which a preemptive kernel buys at the price of careful synchronization.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.2
  {
    sectionId: 'osc-ch6-s2',
    readingTime: 10,
    intro: 'Peterson’s algorithm solves the critical-section problem for two processes with nothing but two shared variables — and a modern CPU can break it, because hardware reorders memory operations. That failure motivates the real tools: memory barriers, atomic test-and-set, compare-and-swap, and atomic variables.',
    objectives: [
      'State Peterson’s algorithm and sketch why it guarantees mutual exclusion, progress and bounded waiting',
      'Explain instruction reordering, memory models and memory barriers',
      'Use test_and_set and compare_and_swap to build spinlocks, including the bounded-waiting variant',
      'Implement atomic variables with CAS retry loops and recognize their limits',
    ],
    concepts: [
      {
        term: 'Peterson’s solution',
        kind: 'method',
        statement: 'Peterson’s solution restricts itself to two processes, $P_0$ and $P_1$ (for process $P_i$, let $j = 1 - i$), sharing two data items — int turn; and boolean flag[2]. Process $P_i$’s structure: while (true) { flag[i] = true; turn = j; while (flag[j] && turn == j) ; — then the critical section — then flag[i] = false; then the remainder section. }',
        detail: 'turn indicates whose turn it is to enter (turn == i allows $P_i$), and flag[i] true announces that $P_i$ is ready. To enter, $P_i$ first raises its own flag and then generously sets turn to j — asserting that if the other process wants in, it may go. If both try simultaneously, the assignments to turn race, but only one assignment lasts; the eventual value of turn decides who enters.',
      },
      {
        term: 'Why Peterson’s solution is correct',
        kind: 'theorem',
        statement: '**Mutual exclusion**: $P_i$ enters only if either flag[j] == false or turn == i. If both were inside their critical sections, flag[0] == flag[1] == true, and the value of turn would have to be both 0 and 1 simultaneously — impossible, since turn can only be one value. **Progress and bounded waiting**: $P_i$ can be blocked only in the while loop with flag[j] == true and turn == j; if $P_j$ is not ready, flag[j] == false and $P_i$ enters; once $P_j$ leaves its critical section it either resets flag[j] or, on re-entering, must set turn to i — so $P_i$ enters after **at most one entry by $P_j$**.',
        detail: 'The bounded-waiting bound is exactly one turn of the other process: $P_i$ does not modify turn while spinning, so the guarantee cannot be stolen twice in a row.',
      },
      {
        term: 'Instruction reordering',
        kind: 'insight',
        statement: 'To improve performance, processors and compilers may **reorder read and write operations that have no dependencies**. For a single-threaded application the reordering is immaterial (the final values are consistent with expectations — like balancing a checkbook, where the order of credits and debits does not change the final balance). For a multithreaded application with shared data, reordering may render **inconsistent or unexpected results**.',
        detail: 'Shared data: boolean flag = false; int x = 0. Thread 1 runs while (!flag) ; print x; and Thread 2 runs x = 100; flag = true. The expected output is 100 — but Thread 2’s stores may be swapped (flag set before x), and Thread 1 may also load x before loading flag. Either reordering alone lets Thread 1 print 0. Applied to Peterson’s entry section, reordering of flag[i] = true and turn = j can let both threads into their critical sections at once.',
      },
      {
        term: 'Memory models: strongly and weakly ordered',
        kind: 'definition',
        statement: 'A computer architecture’s **memory model** determines the memory guarantees it provides to programs: a **strongly ordered** architecture makes a memory modification on one processor immediately visible to all other processors; a **weakly ordered** architecture may delay that visibility.',
        detail: 'Memory models vary by processor type, so kernel developers cannot make assumptions about the visibility of memory modifications on a shared-memory multiprocessor — which is precisely why memory barriers exist.',
      },
      {
        term: 'Memory barriers (memory fences)',
        kind: 'method',
        statement: 'A **memory barrier** is an instruction that forces all changes in memory to be propagated to all other processors: it guarantees that all loads and stores are **completed before any subsequent load or store operations are performed** — even if the hardware would have reordered them.',
        detail: 'Inserting a memory barrier in Thread 1’s loop (while (!flag) memory_barrier();) guarantees flag is loaded before x, and placing one between Thread 2’s assignments (x = 100; memory_barrier(); flag = true;) ensures x is stored before flag — the expected output 100 is restored. A barrier between the two assignments of Peterson’s entry section repairs the reordering hazard. Barriers are very low-level operations, typically used only by kernel developers writing specialized mutual-exclusion code (on x86, the mfence instruction).',
      },
      {
        term: 'The test_and_set instruction',
        kind: 'method',
        statement: 'The **test_and_set instruction** on a boolean target executes atomically: it reads the old value of target into a return variable, sets target to true, and returns the old value. A spinlock built on it — while (test_and_set(&lock)) ; then the critical section, then lock = false — provides **mutual exclusion but not bounded waiting**.',
        detail: 'Atomicity means that if two test_and_set instructions execute simultaneously (each on a different core), they are serialized in some arbitrary order. The lock is a boolean initialized to false; the first caller reads false and enters, everyone else spins on true. Nothing constrains the order in which spinning processes acquire the lock, which is why bounded waiting fails.',
      },
      {
        term: 'The compare_and_swap instruction',
        kind: 'method',
        statement: 'The **compare_and_swap instruction** — compare_and_swap(value, expected, new_value) — executes atomically: it saves the original value of value into temp; if value == expected it sets value = new_value; and it **always returns the original value of value**. Mutual exclusion: with lock initialized to 0, spin while (compare_and_swap(&lock, 0, 1) != 0); enter the critical section; then set lock = 0.',
        detail: 'The first caller succeeds (lock was 0, becomes 1, returns 0); subsequent callers fail (lock is 1) and spin until the holder resets lock to 0. On Intel x86 architectures this is the cmpxchg instruction, made atomic with the lock prefix, which locks the bus while the destination operand is updated.',
      },
      {
        term: 'A bounded-waiting lock with compare_and_swap',
        kind: 'method',
        statement: 'With boolean waiting[n] (all false) and int lock = 0, process $P_i$ enters by: waiting[i] = true; key = 1; while (waiting[i] && key == 1) key = compare_and_swap(&lock, 0, 1); waiting[i] = false. On exit, $P_i$ scans the waiting array in cyclic order (i+1, i+2, ..., n−1, 0, ..., i−1) and either releases the lock (if nobody waits) or clears waiting[j] of the first waiter, designating it as the next entrant. **Any waiting process enters within n − 1 turns.**',
        detail: 'Mutual exclusion holds because only the first compare_and_swap finds lock == 0 and only one waiting[j] is cleared per exit; progress holds because an exiting process always either sets lock to 0 or wakes a designated waiter; bounded waiting holds by the cyclic scan.',
      },
      {
        term: 'Atomic variables and their limits',
        kind: 'insight',
        statement: 'An **atomic variable** provides atomic operations on basic data types such as integers and booleans, typically built on compare_and_swap. But atomic updates do not solve race conditions in all circumstances: in the bounded buffer, an atomic count still leaves two consumers spinning while (count == 0) — if a producer inserts a single item, **both consumers can exit their loops** and both proceed to consume.',
        detail: 'The standard increment is a CAS retry loop: void increment(atomic int v) { int temp; do { temp = v; } while (temp != compare_and_swap(v, temp, temp + 1)); }. A second thread can interleave between the read and the CAS, making the CAS fail (it returns the changed value, not temp) — the loop simply retries. CAS is the basis of **lock-free** algorithms, which avoid locking overhead but are hard to develop and test; one classic hazard is the **ABA problem**: a value read as A may become B and back to A, so the CAS succeeds even though the variable was modified in between.',
      },
    ],
    examples: [
      {
        title: 'Peterson’s algorithm when both processes arrive at once',
        problem: 'Processes P0 and P1 simultaneously attempt to enter their critical sections using Peterson’s algorithm. Trace the protocol and verify mutual exclusion.',
        steps: [
          { label: 'Step 1: Both raise flags', text: 'P0 sets flag[0] = true; P1 sets flag[1] = true. Both are now declared ready, so both proceed to write turn.' },
          { label: 'Step 2: The yielding writes to turn', text: 'P0 sets turn = 1; P1 sets turn = 0. These two writes land in some order — say P1’s write of turn = 0 happens last, so the surviving value is turn = 0.' },
          { label: 'Step 3: Evaluate the guard conditions', text: 'P0 spins while (flag[1] && turn == 1) — flag[1] is true but turn is 0, so the condition is false and P0 enters its critical section. P1 spins while (flag[0] && turn == 0) — both true — so P1 waits.' },
          { label: 'Step 4: Why both can never be inside', text: 'For both to be inside, both guards would have to be false at the same time: flag[0] && flag[1] both true forces the outcome to hinge on turn — and turn is a single variable that can hold only 0 or 1, not both. Whoever lost the turn write waits.' },
          { label: 'Step 5: Release and re-entry', text: 'When P0 leaves, it sets flag[0] = false, so P1’s guard fails and P1 enters. If P0 immediately wants back in, it sets flag[0] = true and turn = 1, yielding to P1 again — P1 finishes its single entry within one turn of P0 (bounded waiting).' },
        ],
        result: 'The eventual value of turn arbitrates every simultaneous entry attempt, giving mutual exclusion, progress and a wait bounded by one entry of the other process — provided the architecture executes the loads and stores in program order.',
      },
      {
        title: 'The reordering bug and the barrier fix',
        problem: 'Thread 1 executes while (!flag) ; print x; and Thread 2 executes x = 100; flag = true; with flag = false and x = 0 initially. Show how the program can print 0, and repair it with memory barriers.',
        steps: [
          { label: 'Step 1: The expected result', text: 'Program order suggests flag becomes true only after x is 100, so once Thread 1 sees flag true, x must be 100 — and the printed value should be 100.' },
          { label: 'Step 2: The store reordering', text: 'There is no data dependency between x and flag, so Thread 2’s processor may store flag = true first. Thread 1 then exits its loop and prints x — which is still 0.' },
          { label: 'Step 3: The load reordering', text: 'Independently, Thread 1’s processor may hoist the load of x above the load of flag, reading x = 0 even if Thread 2’s stores were issued in order — the printed value is again 0.' },
          { label: 'Step 4: The barrier fix', text: 'A memory barrier in Thread 1’s loop guarantees flag is loaded before x, and a barrier between Thread 2’s assignments guarantees x is stored before flag. With both barriers, the printed value is 100.' },
        ],
        result: 'Either reordering alone breaks the program; memory barriers restore the happens-before relationship the source code appears to promise. The same repair, applied between Peterson’s entry-section assignments, is why barriers matter for software-only solutions.',
      },
      {
        title: 'An atomic increment under contention',
        problem: 'Two threads concurrently call increment() on an atomic integer v whose current value is 7. Trace the CAS retry loop.',
        steps: [
          { label: 'Step 1: Both read temp', text: 'Each thread executes temp = v and both read 7 — the read itself is not the atomic part.' },
          { label: 'Step 2: Thread A’s CAS succeeds', text: 'Thread A executes compare_and_swap(v, 7, 8): v equals the expected 7, so v becomes 8, and the instruction returns 7 — equal to A’s temp, so A exits its loop.' },
          { label: 'Step 3: Thread B’s CAS fails', text: 'Thread B executes compare_and_swap(v, 7, 8): v is now 8, not the expected 7, so no swap happens and the instruction returns 8 — different from B’s temp of 7, so the loop condition temp != result holds and B retries.' },
          { label: 'Step 4: Thread B retries successfully', text: 'B re-reads temp = 8 and calls compare_and_swap(v, 8, 9): v equals 8, so v becomes 9 and the instruction returns 8 — matching temp. B exits.' },
        ],
        result: 'v ends at 9 with both increments counted. The loop is optimistic: it assumes no conflict, detects the collision when CAS returns an unexpected value, and simply retries — no lock, no context switch.',
      },
    ],
    keyTakeaways: [
      'Peterson’s algorithm gives mutual exclusion, progress and bounded waiting (at most one entry by the other process) using only turn and flag[].',
      'Mutual exclusion rests on turn holding a single value: both processes cannot satisfy their guards at once.',
      'Modern processors and compilers reorder independent loads and stores, so software-only solutions like Peterson’s are no longer guaranteed to work.',
      'Memory models classify architectures as strongly ordered (immediately visible writes) or weakly ordered; memory barriers force completion and visibility of all loads and stores before subsequent ones.',
      'test_and_set and compare_and_swap are atomic read-modify-write instructions; both yield simple spinlocks that satisfy mutual exclusion but not bounded waiting.',
      'The bounded-waiting CAS lock adds a waiting[] array and a cyclic hand-off scan, guaranteeing entry within n − 1 turns.',
      'Atomic variables (CAS retry loops) fix single-variable races cheaply — but not multi-variable races like the two-consumer bounded buffer — and CAS brings the ABA hazard.',
    ],
    quiz: [
      {
        q: 'In Peterson’s algorithm, if both processes set their flags and then attempt entry, which process enters its critical section first?',
        options: ['The process that set its flag first', 'The process whose write to turn happened first', 'The process whose opponent’s write to turn happened last (turn points at the opponent)', 'Neither — both must restart the protocol'],
        answer: 2,
        explanation: 'Both write turn in a yielding spirit (P_i sets turn = j). Only one write survives — the last one — and the process NOT named by the surviving value of turn sees its guard condition fail and enters. The other spins.',
      },
      {
        q: 'Peterson’s solution is not guaranteed to work on modern architectures primarily because:',
        options: ['Modern CPUs have more than two cores', 'Processors and compilers may reorder loads and stores that have no dependencies', 'Boolean arrays are not atomic', 'The algorithm requires interrupts to be disabled'],
        answer: 1,
        explanation: 'If the entry section’s two assignments (flag[i] = true; turn = j) are reordered, both threads can pass their guards simultaneously. This is a hardware memory-model issue, not a core-count or data-type issue.',
      },
      {
        q: 'A memory barrier guarantees that:',
        options: ['All processes finish their critical sections within a bounded time', 'All loads and stores before the barrier complete before any subsequent load or store is performed', 'The value of turn is written atomically', 'Interrupts are disabled until the barrier completes'],
        answer: 1,
        explanation: 'The barrier forces memory operations to complete and become visible before later ones execute, defeating both store and load reordering. It says nothing about waiting time or interrupts.',
      },
      {
        q: 'The spinlock built directly from test_and_set satisfies which of the three requirements?',
        options: ['Mutual exclusion only', 'Mutual exclusion and progress only', 'Mutual exclusion, progress and bounded waiting', 'Progress and bounded waiting only'],
        answer: 0,
        explanation: 'Only one caller can read false from the lock variable, so mutual exclusion holds — but spinning processes acquire in arbitrary order, so a unlucky process can wait forever: bounded waiting (and with it the progress guarantee for that process) fails. Adding the waiting[] hand-off protocol restores all three.',
      },
      {
        q: 'compare_and_swap(value, expected, new_value) always returns:',
        options: ['true if the swap occurred, false otherwise', 'The new value of the variable', 'The original value of the variable, whether or not the swap occurred', 'The expected value after comparison'],
        answer: 2,
        explanation: 'CAS saves the original value first and returns it regardless of whether the comparison succeeded — the caller detects failure by comparing the returned original against its own expected value, which is exactly how the retry loop works.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.3
  {
    sectionId: 'osc-ch6-s3',
    readingTime: 10,
    intro: 'Mutex locks and semaphores are the workhorse synchronization tools: acquire/release protects the critical section itself, while a counting integer orders processes and manages n identical resources. Both come with an implementation choice — spin or sleep — that decides their performance, and both can be misused into deadlock.',
    objectives: [
      'Use acquire()/release() to protect a critical section and explain spinlock trade-offs',
      'Define semaphores, wait() and signal(), and distinguish counting from binary semaphores',
      'Use semaphores to enforce ordering between processes and to manage a finite pool of resources',
      'Explain the block/wakeup semaphore implementation, including negative values',
      'Recognize deadlock and starvation caused by semaphore misuse',
    ],
    concepts: [
      {
        term: 'Mutex locks',
        kind: 'definition',
        statement: 'A **mutex lock** (short for mutual exclusion) protects a critical section: a process must **acquire()** the lock before entering and **release()** it on exit. The lock has a boolean available indicating whether it is available; a process attempting to acquire an unavailable lock is blocked until the lock is released.',
        detail: 'The critical-section pattern becomes: while (true) { acquire lock; critical section; release lock; remainder section; }. Calls to acquire() and release() must be performed atomically, so mutex locks are implemented with the CAS instruction of Section 6.2.',
      },
      {
        term: 'Spinlocks and busy waiting',
        kind: 'definition',
        statement: 'The simplest mutex implementation has acquire() loop while the lock is unavailable — **busy waiting**. Such a mutex is called a **spinlock**, because the process spins while waiting.',
        detail: 'Busy waiting wastes CPU cycles that another process could use productively. But it has one great advantage: no context switch is required when a process must wait — and a context switch takes considerable time. On multicore systems, if a lock is held for a short duration, one thread can spin on one core while another thread performs its critical section on another. The general rule: **use a spinlock if the lock will be held for less than the duration of two context switches** (one to move the waiter out, one to restore it later). Spinlocks are widely used in operating systems on multiprocessor systems.',
      },
      {
        term: 'Implementing a mutex with CAS',
        kind: 'method',
        statement: 'Treat the lock as an integer, 0 = available. acquire() spins on compare_and_swap until it observes the swap succeed: while (compare_and_swap(&lock, 0, 1) != 0) ; — and release() simply sets lock = 0. With test_and_set the equivalent spinlock is: while (test_and_set(&lock)) ; with release setting lock = false.',
        detail: 'The first caller swaps 0 for 1 and enters; every other caller’s compare_and_swap returns 1 (the original value), so it keeps spinning; the exit section’s plain store of 0 makes the lock available again. Because the compare-and-swap itself is atomic, the test and the set cannot interleave — which is exactly what the flag-only version of Section 6.1 lacked.',
      },
      {
        term: 'Lock contention',
        kind: 'definition',
        statement: 'A lock is **contended** if a thread blocks while trying to acquire it, and **uncontended** if it is available when a thread attempts acquisition. Contended locks experience **high contention** (relatively many threads trying to acquire) or **low contention** (relatively few).',
        detail: 'Unsurprisingly, highly contended locks tend to decrease the overall performance of concurrent applications — a fact that drives the tool-selection guidance of Section 6.4.',
      },
      {
        term: 'Semaphores',
        kind: 'definition',
        statement: 'A **semaphore S** is an integer variable that, apart from initialization, is accessed only through two standard **atomic** operations: wait(S) { while (S <= 0) ; S--; } and signal(S) { S++; }. Semaphores were introduced by Edsger Dijkstra — wait() was originally termed **P** (proberen, to test) and signal() was **V** (verhogen, to increment).',
        detail: 'All modifications to the semaphore value must be executed atomically; in wait(), the testing of S ≤ 0 as well as its possible decrement must execute without interruption — when one process modifies the value, no other can simultaneously modify the same semaphore.',
      },
      {
        term: 'Counting versus binary semaphores',
        kind: 'definition',
        statement: 'A **counting semaphore** ranges over an unrestricted domain and controls access to a resource with a finite number of instances: initialize S to n; each user performs wait() (decrementing); each releaser performs signal() (incrementing); when S reaches 0, all instances are in use and further waiters block. A **binary semaphore** ranges only between 0 and 1 and behaves like a mutex lock.',
        detail: 'On systems that do not provide mutex locks, binary semaphores can substitute for mutual exclusion. Counting semaphores are the natural fit for managing a pool — n identical buffers, n database connections, n printer ports.',
      },
      {
        term: 'Ordering execution with semaphores',
        kind: 'method',
        statement: 'To require that statement S2 execute only after S1 has completed: let P1 and P2 share a semaphore synch initialized to 0; P1 executes S1; signal(synch); and P2 executes wait(synch); S2. Because synch starts at 0, P2 blocks until P1 signals — even if P2 runs first, the signal is **remembered** in the semaphore value.',
        detail: 'That memory is a semaphore strength: signal() before wait() is not lost, unlike a condition-variable signal with no waiter (Section 6.4). Misuse, however, breaks everything: interchanging wait() and signal() on mutex (signal before the critical section, wait after) lets several processes execute in their critical sections simultaneously; replacing signal(mutex) with wait(mutex) blocks the process permanently; omitting either operation either violates mutual exclusion or blocks forever. These timing errors occur only when particular execution sequences occur, so they are difficult to detect — and even a wrong count value can look reasonable, off by only 1.',
      },
      {
        term: 'The block/wakeup semaphore implementation',
        kind: 'method',
        statement: 'To avoid busy waiting, define a semaphore as a struct — int value; and a list of waiting processes. wait(S) decrements first: S->value--; if (S->value < 0) add the process to S->list and sleep(). signal(S) increments first: S->value++; if (S->value <= 0) remove a process P from S->list and wakeup(P).',
        detail: 'sleep() suspends the caller (its PCB moves to the semaphore’s waiting queue — implementable as a link field in each PCB, FIFO for bounded waiting); wakeup(P) changes P from waiting to ready and places it in the ready queue. In this implementation **semaphore values may be negative, and the magnitude of a negative value is the number of processes waiting** — a consequence of decrementing before testing. The busy waiting is not eliminated but relocated: it is now confined to the short critical sections of wait() and signal() themselves (properly coded, no more than about ten instructions), which are almost never occupied and almost always quickly released. On a single processor, wait() and signal() are made atomic by inhibiting interrupts; in an SMP system, disabling interrupts on every core is too expensive, so compare_and_swap or spinlocks protect the operations instead.',
      },
      {
        term: 'Deadlock and starvation',
        kind: 'insight',
        statement: 'A semaphore implementation with waiting lists can deadlock: two or more processes wait indefinitely for an event (a signal()) that can be caused only by one of the waiting processes themselves. The classic shape: P0 executes wait(S); wait(Q); while P1 executes wait(Q); wait(S), with S = Q = 1 — each acquires one semaphore and waits for the other’s. Starvation, or **indefinite blocking**, is the mirror failure: a process never receives the signal it waits for because signals are repeatedly granted to others.',
        detail: 'Deadlock from holding two semaphores in opposite order is cured by ordering conventions (Chapter 8 generalizes). Starvation appears whenever selection is unbounded — for example, a stream of readers perpetually holding a reader–writer lock can starve writers forever, exactly like the low-priority process of Section 5.3 that ages its way out only if the scheduler intervenes.',
      },
    ],
    examples: [
      {
        title: 'Enforcing statement order with a semaphore',
        problem: 'Statement S2 in process P2 must run only after statement S1 in process P1 completes. Implement the ordering, and check that it survives the signal arriving before the wait.',
        steps: [
          { label: 'Step 1: Initialize the semaphore', text: 'Declare a shared semaphore synch and initialize it to 0 — P2 could not pass a wait() on it yet.' },
          { label: 'Step 2: Instrument both processes', text: 'P1 executes S1; signal(synch). P2 executes wait(synch); S2.' },
          { label: 'Step 3: Trace the normal order', text: 'P1 runs S1 and signals (synch = 1). When P2 later executes wait(synch), the value is 1: the test passes, synch returns to 0, and S2 runs — strictly after S1.' },
          { label: 'Step 4: Trace the reversed order', text: 'If P2 runs first, its wait(synch) finds 0 and blocks. When P1 later signals, synch becomes 1 and P2 is awakened — S2 still runs after S1. The signal was remembered in the semaphore’s value, not lost.' },
          { label: 'Step 5: Contrast with misuse', text: 'If a programmer instead wrote signal(mutex) before a critical section and wait(mutex) after it, several processes could occupy the critical section simultaneously; writing wait(mutex) on both sides would block the process on its own semaphore forever.' },
        ],
        result: 'A zero-initialized semaphore imposes exactly this ordering — and unlike a condition variable, a semaphore signal that arrives early is stored and consumed later, so no interleaving loses it.',
      },
      {
        title: 'A two-semaphore deadlock',
        problem: 'Semaphores S and Q are both initialized to 1. P0 executes wait(S); wait(Q); ... signal(S); signal(Q), and P1 executes wait(Q); wait(S); ... signal(Q); signal(S). Show a schedule in which both deadlock.',
        steps: [
          { label: 'Step 1: P0 takes S', text: 'P0 executes wait(S) successfully — S is now 0, and P0 owns it.' },
          { label: 'Step 2: P1 takes Q', text: 'P1 executes wait(Q) successfully — Q is now 0, and P1 owns it.' },
          { label: 'Step 3: P0 blocks on Q', text: 'P0 executes wait(Q); Q is 0, so in the list implementation the value goes negative and P0 joins Q’s waiting list and sleeps.' },
          { label: 'Step 4: P1 blocks on S', text: 'P1 executes wait(S); S is 0, so P1 blocks on S’s waiting list too.' },
          { label: 'Step 5: Diagnose', text: 'Each process now waits for an event — the other’s signal() — that only the other waiting process can cause. The signal(S) and signal(Q) lines are unreachable, so both wait forever.' },
        ],
        result: 'Classic deadlock: circular waiting on two semaphores acquired in opposite order. The standard cure is a global acquisition order (always S before Q, say), a topic Chapter 8 develops in full.',
      },
      {
        title: 'Reading a negative semaphore value',
        problem: 'A counting semaphore guards 3 identical resources, initialized to 3. Five processes arrive and each executes wait(S); later each executes signal(S). Track the value through the arrivals.',
        steps: [
          { label: 'Step 1: The first three waits', text: 'The three resources are handed out: S goes 3 → 2 → 1 → 0. The block/wakeup implementation decrements first, so each of these waits finds a non-negative result and proceeds.' },
          { label: 'Step 2: The fourth and fifth waits', text: 'The next two waits still decrement first: S goes 0 → −1 → −2. Both processes are added to the waiting list and sleep — nothing is left to hand out.' },
          { label: 'Step 3: Interpret the negative value', text: 'The magnitude |−2| = 2 is exactly the number of processes waiting on the semaphore — the sign encodes demand beyond supply.' },
          { label: 'Step 4: The first release', text: 'A holder executes signal(S): the value goes −2 → −1, and since the value is ≤ 0, one process is removed from the list and awakened — the resource is handed directly to it.' },
          { label: 'Step 5: The system drains', text: 'Two more signals raise the value to 0 (waking the last waiter) and then 1 as the final two holders release — 3 resources, 5 requesters, correct behavior throughout.' },
        ],
        result: 'Values 3, 2, 1, 0, −1, −2 on arrival and back through 0: a negative semaphore value is not an error in this implementation — it is a count of sleepers.',
      },
    ],
    keyTakeaways: [
      'A mutex lock guards a critical section with acquire()/release(); the calls must be atomic, which CAS provides.',
      'Spinlocks busy-wait but avoid context switches — the right choice on multicore systems when the lock is held for less than about two context switches.',
      'A semaphore is an integer accessed only through atomic wait() (P) and signal() (V); counting semaphores manage n resource instances, binary semaphores behave like mutexes.',
      'A zero-initialized semaphore enforces ordering, and its signal is remembered if it fires before the wait — unlike condition-variable signals.',
      'Misusing wait()/signal() — swapping, duplicating or omitting them — yields mutual-exclusion violations or permanent blocking that appear only under rare timings.',
      'In the block/wakeup implementation the value may go negative: its magnitude counts waiting processes, and busy waiting shrinks to the ~10 instructions of wait() and signal() themselves.',
      'Opposite-order acquisition of two semaphores is the minimal deadlock; unbounded selection (a stream of readers) starves.',
    ],
    quiz: [
      {
        q: 'A spinlock is generally the better choice than a blocking mutex when:',
        options: ['The critical section is long and I/O-bound', 'The lock will be held for less than the time of about two context switches on a multicore system', 'There is only one CPU core available', 'The lock is heavily contended for minutes'],
        answer: 1,
        explanation: 'Blocking costs two context switches (sleep and later wakeup); if the lock would be released sooner than that, spinning is cheaper. On a single core, spinning is pure waste — the holder needs that very core to finish.',
      },
      {
        q: 'A counting semaphore controlling access to a pool of 5 identical resources should be initialized to:',
        options: ['0', '1', '5', 'Any negative value'],
        answer: 2,
        explanation: 'Each wait() decrements and each signal() increments, so initializing to n lets exactly n processes through before the value hits 0 and further waiters block — one unit of value per resource instance.',
      },
      {
        q: 'In the block/wakeup implementation, a semaphore value of −4 means:',
        options: ['The semaphore is corrupted', 'Four resources are available', 'Four processes are waiting on the semaphore', 'The last operation was a signal'],
        answer: 2,
        explanation: 'The implementation decrements before testing, so demand beyond supply drives the value negative; the magnitude of the value is exactly the number of processes on the waiting list.',
      },
      {
        q: 'A programmer accidentally writes signal(mutex) before the critical section and wait(mutex) after it. The most likely consequence is:',
        options: ['A deadlock every time', 'Several processes may execute in their critical sections simultaneously', 'The semaphore value becomes negative permanently', 'The compiler rejects the program'],
        answer: 1,
        explanation: 'Signaling first releases mutual exclusion, so multiple processes can pass into the critical section together — a mutual-exclusion violation that surfaces only when the bad interleaving actually occurs.',
      },
      {
        q: 'P0 executes wait(S); wait(Q) and P1 executes wait(Q); wait(S), with S = Q = 1. If P0 gets S and P1 gets Q, the resulting state is:',
        options: ['A livelock — both spin without blocking', 'A race condition on turn', 'A deadlock — each waits for the semaphore the other holds', 'Harmless — one process will be preempted and release'],
        answer: 2,
        explanation: 'Neither process can proceed: each holds one semaphore and blocks on the other, and only a blocked process could execute the needed signal(). This circular wait is the seed of Chapter 8’s deadlock theory.',
      },
      // PYQ-pattern: GATE 2018 — counting semaphore value (rephrased)
      {
        q: "A counting semaphore guards $3$ identical units and starts at $3$. After five `wait()` operations with no `signal()`, what is the value and what does it mean?",
        options: ["$0$, all units free", "$3$, unchanged", "$-2$, two processes waiting", "$5$, five units created"],
        answer: 2,
        explanation: "**Step 1 — Given data:** initial $S = 3$, five decrements, block-and-sleep implementation (decrement first, test after).\n**Step 2 — Rule:** each `wait()` does $S = S - 1$; if $S < 0$ the caller sleeps; magnitude of a negative value counts sleepers.\n**Step 3 — Computation:** $3 \\to 2 \\to 1 \\to 0 \\to -1 \\to -2$. First three hand out units; next two sleep.\n**Step 4 — Cross-check:** $|{-2}| = 2$ sleepers, $3$ units held — demand $5$ minus supply $3$ equals $2$ unmet.\n**Step 5 — Distractors:** $0$ stops after three waits; $3$ ignores decrements; $5$ confuses the count direction.\n**Step 6 — Conclude:** $-2$ with two processes queued."
      },
      // PYQ-pattern: DRDO 2019 — ordering with semaphores (rephrased)
      {
        q: "Statement $S1$ in P1 must precede $S2$ in P2. Shared semaphore `synch` starts at $0$. Which placement enforces the order even if P2 runs first, and why does it work?",
        options: ["Both signal before their statements", "P1: `wait(synch); S1`, P2: `S2; signal(synch)`", "P1: `S1; signal(synch)`, P2: `wait(synch); S2` — an early signal is remembered", "Both wait before their statements"],
        answer: 2,
        explanation: "**Step 1 — Given data:** `synch = 0`, two orders possible.\n**Step 2 — Rule:** `signal()` increments even with no waiter (remembered); `wait()` on $0$ blocks.\n**Step 3 — Trace normal:** P1 signals to $1$; P2’s `wait()` passes and returns value to $0$; $S2$ follows $S1$.\n**Step 4 — Trace reversed:** P2 blocks on $0$; P1 later signals to $1$ and wakes P2; order still holds.\n**Step 5 — Distractors:** waiting first in P1 deadlocks immediately; signaling first in both lets both statements race; waiting in both blocks forever.\n**Step 6 — Conclude:** signal-after-$S1$ plus wait-before-$S2$ is the only correct pairing."
      }
    ],
  },

  // ------------------------------------------------------------------ 6.4
  {
    sectionId: 'osc-ch6-s4',
    readingTime: 11,
    intro: 'Semaphores are powerful but easy to get subtly wrong, so language designers raised the abstraction level: the monitor bundles data with built-in mutual exclusion, and condition variables add waiting and signaling inside it. The price of any locking discipline is liveness — deadlock, priority inversion, starvation — and this section closes with how to choose among the whole toolbox.',
    objectives: [
      'Define the monitor construct and explain what it guarantees automatically',
      'Use condition variables and distinguish signal-and-wait from signal-and-continue semantics',
      'Explain how a monitor is implemented with semaphores (mutex, next, next_count, x_sem, x_count)',
      'Define liveness failures — deadlock, priority inversion, starvation — and apply priority inheritance',
      'Select synchronization tools by abstraction level and contention level',
    ],
    concepts: [
      {
        term: 'Monitors',
        kind: 'definition',
        statement: 'A **monitor type** is an abstract data type that encapsulates data with the functions that operate on it, **with mutual exclusion built in**: the monitor construct ensures that only one process at a time is active within the monitor. The programmer does not code this synchronization constraint explicitly.',
        detail: 'A function defined within a monitor can access only the variables declared locally (and its parameters), and the local variables are accessible only by the monitor’s own functions; the representation cannot be used directly from outside. Processes not yet inside wait in the monitor’s entry queue. Java and C# incorporate the monitor idea; Erlang provides similar concurrency support.',
      },
      {
        term: 'Condition variables',
        kind: 'definition',
        statement: 'A monitor may declare variables of type **condition** (condition x, y;). The only operations on them are x.wait() — the invoking process is **suspended until another process invokes x.signal()** — and x.signal(), which **resumes exactly one** suspended process. If no process is suspended, signal() has **no effect at all**: the state of x is the same as if the operation had never been executed.',
        detail: 'Contrast with semaphores: a semaphore signal() always changes the state (increments the value, storing the event for later), while a condition signal with no waiter evaporates. This difference is why a zero-initialization trick like Section 6.3’s ordering pattern does not port directly to condition variables — a wait() must usually be guarded by a loop re-checking the condition.',
      },
      {
        term: 'Signal-and-wait versus signal-and-continue',
        kind: 'definition',
        statement: 'When process P executes x.signal() and process Q is suspended on x, both cannot continue inside the monitor at once. Two semantics exist: **signal-and-wait** (Hoare) — P waits until Q leaves the monitor or waits for another condition; **signal-and-continue** (Mesa) — Q waits until P leaves the monitor or waits for another condition. A compromise lets P leave the monitor immediately upon signaling, so Q resumes at once.',
        detail: 'Signal-and-continue seems reasonable since P was already executing; but if P continues, the condition Q was waiting for may no longer hold by the time Q runs — hence Mesa-style waiters re-check the condition in a loop (a while, not an if).',
      },
      {
        term: 'Implementing a monitor with semaphores',
        kind: 'method',
        statement: 'For each monitor: a binary semaphore **mutex** (initialized to 1) enforces mutual exclusion; a binary semaphore **next** (initialized to 0) and integer **next_count** suspend signalers. Every external function F becomes: wait(mutex); body of F; if (next_count > 0) signal(next); else signal(mutex). For each condition x: a semaphore **x_sem** (0) and integer **x_count** (0).',
        detail: 'x.wait() is implemented as: x_count++; if (next_count > 0) signal(next); else signal(mutex); wait(x_sem); x_count--. And x.signal() as: if (x_count > 0) { next_count++; signal(x_sem); wait(next); next_count--; }. The waiter releases the monitor mutex (or hands it to a pending signaler) before blocking on x_sem, and the signaler steps aside through next — mutual exclusion inside the monitor is preserved throughout.',
      },
      {
        term: 'Resumption order and conditional wait',
        kind: 'method',
        statement: 'If several processes are suspended on condition x, an x.signal() must choose which to resume. **FCFS** resumes the longest-waiting process; the **conditional-wait** construct x.wait(c) attaches an integer priority number c to each waiting process, and signal resumes the one with the **smallest** c.',
        detail: 'The ResourceAllocator monitor uses it to hand a single resource to the process with the shortest maximum intended use: acquire(time) { if (busy) x.wait(time); busy = true; } and release() { busy = false; x.signal(); }. A monitor cannot, however, guarantee correct use of its own protocol — a process might access the resource without permission, never release it, release what it never requested, or request twice; establishing correctness requires inspecting all programs that use the monitor.',
      },
      {
        term: 'Liveness, deadlock and starvation',
        kind: 'definition',
        statement: '**Liveness** is the set of properties requiring that processes make progress during their execution life cycle; a **liveness failure** — a process waiting indefinitely — violates the progress and bounded-waiting criteria of Section 6.1. The central failure is **deadlock**: a set of processes is deadlocked when every process in the set is waiting for an event (with semaphores, a signal()) that can be caused only by another process in the set — as with P0 holding S and waiting for Q while P1 holds Q and waits for S.',
        detail: 'All liveness failures are characterized by poor performance and responsiveness; the simplest example is an infinite loop, and a busy wait that spins arbitrarily long is a liveness risk. Efforts at mutual exclusion using tools such as mutex locks and semaphores can often lead to such failures, with deadlock, priority inversion and starvation as the recurring three. Deadlock lives at the intersection of resource allocation and ordering; Chapter 8 develops the four conditions, detection, avoidance and recovery machinery in full.',
      },
      {
        term: 'Priority inversion and priority inheritance',
        kind: 'insight',
        statement: '**Priority inversion** arises when a higher-priority process must wait for a lower-priority process to release a lock — and the lower-priority process is itself preempted by medium-priority work, so the high-priority process effectively waits behind a medium one. The fix, the **priority-inheritance protocol**: all processes accessing resources needed by a higher-priority process **inherit the higher priority** until they finish with those resources, then revert.',
        detail: 'With priorities L < M < H and H needing semaphore S held by L: ordinarily H waits for L, but if M becomes runnable it preempts L — and M has effectively delayed H. Under inheritance, L temporarily runs at H’s priority, so M cannot preempt it; when L releases S, H — not M — runs next. Inversion can occur only in systems with more than two priorities.',
      },
      {
        term: 'Tool support: atomics, libraries and race detectors',
        kind: 'insight',
        statement: 'Modern languages ship synchronization directly: **C11 and C++11** provide std::atomic with lock-free operations built on compare-and-swap, and **Java** provides the java.util.concurrent library (locks, condition queues, atomic classes, thread pools). For finding races in existing code, **Valgrind’s Helgrind and DRD** and **ThreadSanitizer (TSan)** dynamically detect data races and lock-order violations at run time.',
        detail: 'These detectors interpose on memory accesses and synchronization operations, flagging unsynchronized accesses to the same location from different threads where at least one is a write — an invaluable safety net, though it can only observe executions that actually happen.',
      },
      {
        term: 'Choosing a tool by contention level',
        kind: 'method',
        statement: 'CAS-based synchronization is **optimistic** — update, detect collisions, retry — while mutual-exclusion locking is **pessimistic** — assume conflict and acquire the lock first. Guidance: **uncontended**, both are fast but CAS is somewhat faster; **moderate contention**, CAS is faster, possibly much faster (a few retry iterations versus the suspend-and-context-switch path); **high contention**, traditional locking is ultimately faster than CAS retry storms.',
        detail: 'Atomic integers are much lighter than locks and generally beat mutexes or semaphores for single updates of counters. Spinlocks suit multiprocessor systems when locks are held briefly. Mutex locks are simpler and cheaper than semaphores and are preferred over binary semaphores for protecting a critical section, while a counting semaphore fits a finite resource pool and a reader–writer lock raises concurrency for read-mostly data. Monitors and condition variables win on simplicity and ease of use, but their overhead may scale poorly under heavy contention.',
      },
    ],
    examples: [
      {
        title: 'A monitor protecting one resource',
        problem: 'The ResourceAllocator monitor holds boolean busy (initially false) and condition x. Process A and process B each call acquire() then later release(). Trace what happens when their requests overlap.',
        steps: [
          { label: 'Step 1: A acquires the resource', text: 'A calls acquire(); the monitor admits A alone (built-in mutual exclusion). busy is false, so A skips the wait, sets busy = true and leaves with the resource.' },
          { label: 'Step 2: B blocks inside the monitor', text: 'B calls acquire(); admitted alone, it finds busy true and executes x.wait() — releasing its exclusivity and suspending on condition x.' },
          { label: 'Step 3: A releases and signals', text: 'A later calls release(); inside the monitor it sets busy = false and executes x.signal(), which resumes exactly one suspended process — B.' },
          { label: 'Step 4: B completes its acquisition', text: 'B re-enters the monitor active state, re-checks busy (false), sets busy = true and proceeds — exactly one holder at every instant, with no explicit lock calls in the application code.' },
          { label: 'Step 5: The priority variant', text: 'Had each caller passed its maximum use time — acquire(time) { if (busy) x.wait(time); ... } — the conditional-wait construct would resume, on release, the waiter with the smallest time value: the shortest job next, a scheduling decision encoded in the wait itself.' },
        ],
        result: 'The monitor supplies the mutual exclusion; the condition variable supplies the waiting discipline. Had B signaled instead of A (or had a signal fired with nobody waiting), the signal would simply have evaporated — semantically different from a semaphore signal.',
      },
      {
        title: 'Priority inversion on Mars Pathfinder',
        problem: 'Priorities satisfy L < M < H. H needs semaphore S, which L holds. Trace the schedule with and without the priority-inheritance protocol.',
        steps: [
          { label: 'Step 1: The inversion appears', text: 'L acquires S. H arrives, needs S, and blocks — H now waits for L to finish with the resource.' },
          { label: 'Step 2: A medium task hijacks the wait', text: 'M becomes runnable and preempts L (M has higher priority than L). Now H — the highest-priority process in the system — is effectively waiting for M to finish, an inversion of the priority order.' },
          { label: 'Step 3: Why it matters on Mars', text: 'On the Sojourner rover in 1997, the high-priority bc_dist task waited for a shared resource held by the low-priority ASI/MET task, which medium-priority tasks kept preempting; a watchdog (bc_sched) detected the stall and reset the system — repeatedly, threatening the mission.' },
          { label: 'Step 4: Apply inheritance', text: 'Under the priority-inheritance protocol, L temporarily inherits H’s priority while holding S, so M cannot preempt it; L finishes with S quickly and reverts to its original priority.' },
          { label: 'Step 5: Resolution', text: 'With S released, H — not M — runs next. On the real rover, the VxWorks operating system had a global variable enabling priority inheritance on all semaphores; after testing, the team set it — from Earth, on the spacecraft already on Mars — and the resets stopped.' },
        ],
        result: 'Priority inheritance converts an unbounded high-priority wait behind medium work into a bounded one behind the resource holder only — the fix that saved Pathfinder.',
      },
      {
        title: 'Deadlock and liveness failures from synchronization',
        problem: 'Semaphores S and Q are initialized to 1. P0 runs wait(S); wait(Q); while P1 runs wait(Q); wait(S). Show the deadlock, and connect it to the broader family of liveness failures.',
        steps: [
          { label: 'Step 1: Partial acquisition', text: 'P0 successfully waits on S; P1 successfully waits on Q — each now owns one semaphore.' },
          { label: 'Step 2: The circular block', text: 'P0 blocks on Q (held by P1); P1 blocks on S (held by P0). Every process in the set waits for an event only another process in the set can cause — the definition of deadlock.' },
          { label: 'Step 3: Classify the failure', text: 'Neither progress nor bounded waiting holds for P0 or P1; the system has lost liveness. Contrast starvation, where waiting is bounded by policy rather than impossible — and where a priority scheduler ages its victims back in.' },
          { label: 'Step 4: The minimal cures', text: 'Impose a global ordering (always S before Q) so the circular wait cannot form, or use a higher-level tool — a monitor or a library lock with deadlock detection — to remove the pattern entirely.' },
        ],
        result: 'Deadlock, priority inversion and starvation are all liveness failures: mutual exclusion is respected, yet progress is not. Chapter 8 turns the two-semaphore picture into the full theory of deadlock handling.',
      },
    ],
    keyTakeaways: [
      'A monitor is an abstract data type with mutual exclusion built in — only one process is active inside it at any time, with no explicit lock calls.',
      'Condition variables offer wait() and signal(); a signal with no waiter evaporates, unlike a semaphore signal, which is remembered in the value.',
      'Hoare semantics (signal-and-wait) parks the signaler; Mesa semantics (signal-and-continue) lets it run — so Mesa waiters must re-check their condition in a loop.',
      'A monitor compiles to semaphores: mutex for exclusion, next/next_count for signalers, x_sem/x_count per condition.',
      'Resumption can be FCFS or by conditional-wait priority numbers — the ResourceAllocator resumes the shortest-time requester.',
      'Liveness failures = deadlock (circular waiting), priority inversion (fixed by priority inheritance, as on Mars Pathfinder) and starvation.',
      'Choose tools by contention: CAS is optimistic and faster up to moderate contention, blocking locks win under high contention, and atomic integers beat locks for simple counters.',
    ],
    quiz: [
      {
        q: 'What does the monitor construct guarantee automatically?',
        options: ['Bounded waiting on all conditions', 'That only one process is active within the monitor at a time', 'That all processes eventually enter the monitor', 'Freedom from deadlock'],
        answer: 1,
        explanation: 'Mutual exclusion is wired into the construct itself — the programmer never writes acquire/release. Bounded waiting, priority guarantees and deadlock-freedom are not automatic; they depend on the condition-variable logic.',
      },
      {
        q: 'If x.signal() is invoked on a condition variable with no suspended processes, the effect is:',
        options: ['The signal is stored for the next waiter', 'The process performing signal blocks', 'No effect — the state of x is as if the operation never executed', 'A run-time error'],
        answer: 2,
        explanation: 'Condition signals evaporate without a waiter — the crucial contrast with semaphore signal(), which increments the value and is remembered. That is why semaphore ordering tricks do not port to condition variables without a re-checking loop.',
      },
      {
        q: 'Under Mesa (signal-and-continue) semantics, when P signals Q:',
        options: ['P immediately exits the monitor and Q runs', 'P keeps running; Q must wait until P leaves the monitor or waits, and then re-check its condition', 'Q and P both continue inside the monitor', 'The signal is lost if P does not block'],
        answer: 1,
        explanation: 'The signaler continues, so by the time Q resumes, the condition it awaited may no longer hold — Mesa programs must re-check conditions in a while-loop. Hoare semantics instead parks P the moment it signals.',
      },
      {
        q: 'Under the priority-inheritance protocol, a low-priority process L holding a resource needed by high-priority H will:',
        options: ['Queue behind H immediately', 'Temporarily run at H’s priority until it releases the resource, then revert to its own', 'Permanently keep H’s priority', 'Be preempted by medium-priority processes anyway'],
        answer: 1,
        explanation: 'Inheritance exists to fence off medium-priority M: while L holds what H needs, L runs at H’s priority, so M cannot preempt it; on release, L reverts and H — not M — gets the CPU. This is exactly the fix applied to the Mars Pathfinder.',
      },
      {
        q: 'Under very high lock contention, which approach is generally faster?',
        options: ['CAS-based retry loops — they always win', 'Traditional blocking synchronization such as mutex locks and semaphores', 'Busy-waiting on an atomic boolean', 'Disabling interrupts'],
        answer: 1,
        explanation: 'CAS is optimistic and cheap when conflicts are rare, but under heavy contention most attempts fail and threads burn cycles retrying; blocking synchronization pays the context switch once and parks the losers. At low and moderate contention, CAS wins.',
      },
    ],
  },
]
