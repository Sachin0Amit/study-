import type { SectionContent } from '../library'

/* ============================================================================
   Core Java Twelfth Edition master study content — Concurrency
   Chapter 9: sections 9.1 to 9.4. Based on Horstmann Core Java Volume One,
   Chapter 12: threads, executors, locks, visibility, and safe collections.
   ============================================================================ */

export const javaCh09Content: SectionContent[] = [
  /* ---------------- 9.1 ---------------- */
  {
    sectionId: 'java-ch9-s1',
    readingTime: 9,
    intro: 'Threads let tasks proceed in parallel, but raw threads are hard to manage at scale, which is why Horstmann moves quickly to executors. This section covers thread lifecycle, pools, futures, and fork join decomposition. It ends with virtual threads, the lightweight option for massive numbers of blocking tasks.',
    objectives: [
      'Describe thread states from new through terminated',
      'Submit Callables to executors and collect results with Futures',
      'Decompose recursive work with fork join and virtual thread pools',
    ],
    concepts: [
      {
        term: 'Thread lifecycle states',
        kind: 'definition',
        statement: 'A **thread** moves from `NEW` to `RUNNABLE`, may visit `BLOCKED`, `WAITING`, or `TIMED_WAITING`, and ends in `TERMINATED`, with the scheduler controlling every transition.',
        detail: 'Start a thread exactly once. Interruption is a cooperative request, so blocking methods honor it but ordinary loops must poll.',
      },
      {
        term: 'Executor pools over raw threads',
        kind: 'method',
        statement: 'An **ExecutorService** such as `Executors.newFixedThreadPool(4)` reuses a bounded set of workers, bounding resource use while `submit` queues the overflow.',
        detail: 'Fixed pools suit CPU bound batches. Cached pools suit short bursty tasks. Always shut down, or the JVM lingers on idle workers.',
      },
      {
        term: 'Callable and Future results',
        kind: 'notation',
        statement: 'A **Callable** returns a value to its `Future`, whose `get()` blocks until the answer or an `ExecutionException` carrying the worker failure arrives.',
        detail: 'Cancel with cancel and poll with isDone for responsive designs. Time bounded get overloads keep one slow task from freezing the collector.',
      },
      {
        term: 'Fork join decomposition',
        kind: 'theorem',
        statement: '**Fork join** splits recursive problems until a threshold, then joins partial answers, letting `ForkJoinPool` steal work across idle cores automatically.',
        detail: 'RecursiveTask returns values while RecursiveAction just completes. Size thresholds to keep tasks coarse enough to outweigh scheduling overhead.',
      },
      {
        term: 'Virtual threads for blocking scale',
        kind: 'insight',
        statement: '**Virtual threads** from `newVirtualThreadPerTaskExecutor()` are cheap enough to dedicate one per blocking task, escaping the thread per request memory wall.',
        detail: 'Platform threads remain right for CPU bound pinning and native interop. Virtual threads shine when tasks mostly wait on network or disk.',
      },
    ],
    figures: [
      {
        caption: 'Thread lifecycle: new threads become runnable, may block or wait, and finish terminated.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Thread state transition diagram"><rect x="40" y="140" width="120" height="64" fill="none" stroke="currentColor" stroke-width="2"/><text x="100" y="166" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">NEW</text><text x="100" y="186" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">start</text><rect x="200" y="140" width="140" height="64" fill="none" stroke="currentColor" stroke-width="2"/><text x="270" y="166" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">RUNNABLE</text><text x="270" y="186" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">running or ready</text><rect x="380" y="60" width="150" height="64" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="455" y="86" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">BLOCKED</text><text x="455" y="106" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">lock wait</text><rect x="380" y="220" width="150" height="64" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="455" y="246" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">WAITING</text><text x="455" y="266" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">await or join</text><rect x="570" y="140" width="120" height="64" fill="none" stroke="currentColor" stroke-width="2"/><text x="630" y="166" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">DONE</text><text x="630" y="186" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">terminated</text><line x1="160" y1="172" x2="196" y2="172" stroke="currentColor" stroke-width="1.8"/><polygon points="196,172 186,166 186,178" fill="currentColor"/><line x1="340" y1="150" x2="400" y2="100" stroke="currentColor" stroke-width="1.4"/><line x1="340" y1="194" x2="376" y2="244" stroke="currentColor" stroke-width="1.4"/><line x1="530" y1="92" x2="340" y2="150" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="530" y1="252" x2="340" y2="194" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="340" y1="172" x2="566" y2="172" stroke="currentColor" stroke-width="1.8"/><polygon points="566,172 556,166 556,178" fill="currentColor"/><text x="455" y="330" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Dashed arrows return threads to runnable when unblocked</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Summing with a pooled callable',
        problem: 'Add the numbers one through one hundred on a worker thread and retrieve the answer on the main thread.',
        steps: [
          { label: 'Step 1: Open a fixed pool', text: 'Create a pool of four reusable workers:\n```java\nExecutorService pool = Executors.newFixedThreadPool(4);\n```\nFour threads bound the parallel resource cost.' },
          { label: 'Step 2: Submit and collect', text: 'Run the summation as a Callable and block for its Future value:\n```java\ntry {\n    // pooled-task-pattern: short callable returns a value to its future\n    Future<Integer> future = pool.submit(() -> {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) { sum += i; }\n        return sum;\n    });\n    System.out.println(future.get());\n} catch (InterruptedException | ExecutionException e) {\n    Thread.currentThread().interrupt();\n} finally {\n    pool.shutdown();\n}\n```\nChecked worker failures arrive wrapped in ExecutionException.' },
          { label: 'Step 3: Shut down cleanly', text: 'Confirm the pool stops accepting work after shutdown:\n```java\nboolean calm = pool.isShutdown();\nSystem.out.println(calm);\n```\nIt prints true, so the JVM may exit normally.' },
        ],
        result: 'The pooled task prints fifty fifty, collected safely through its future.',
      },
      {
        title: 'One virtual thread per blocking task',
        problem: 'Launch ten short blocking tasks without sizing any pool, letting the runtime multiplex them onto few carriers.',
        steps: [
          { label: 'Step 1: Open a virtual executor', text: 'Use try with resources so every virtual thread is joined at the end:\n```java\ntry (ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor()) {\n    // virtual-thread-pattern: one lightweight thread per task\n    for (int i = 0; i < 10; i++) {\n        int id = i;\n        pool.submit(() -> System.out.println("task " + id));\n    }\n}\n```\nEach task gets its own thread at near object allocation cost.' },
          { label: 'Step 2: Copy the loop variable', text: 'Capture id instead of i because lambdas demand effectively final variables:\n```java\nint id = i;\npool.submit(() -> System.out.println("task " + id));\n```\nEvery task then prints its own number rather than a shared one.' },
          { label: 'Step 3: Rely on close to join', text: 'Trust the closing brace to wait for all ten tasks:\n```java\nSystem.out.println("all joined");\n```\nThe message prints only after every virtual thread has finished.' },
        ],
        result: 'Ten virtual threads print their ids and join automatically at close.',
      },
    ],
    keyTakeaways: [
      'Threads traverse new, runnable, blocked or waiting, and terminated states.',
      'Executor pools bound resources while futures carry values and failures back.',
      'Fork join suits recursive decomposition with automatic work stealing.',
      'Virtual threads scale blocking workloads far beyond platform thread counts.',
    ],
    quiz: [
      {
        q: 'Why prefer an executor over manual thread creation?',
        options: [
          'Executors remove the need for any synchronization at all',
          'Executors reuse bounded workers and queue overflow instead of exploding threads',
          'Executors make every task run on the calling thread directly',
          'Executors compile tasks ahead of time for native speed',
        ],
        answer: 1,
        explanation: 'Step 1: Raw threads cost a stack per instance. Step 2: Unbounded creation exhausts memory under load. Step 3: Pools cap workers and hold the rest in queues. Step 4: Reuse plus bounding is therefore the advantage.',
      },
      {
        q: 'What does Future dot get do when the task failed?',
        options: [
          'It returns null and marks the pool unhealthy',
          'It retries the Callable automatically up to three times',
          'It throws ExecutionException wrapping the worker failure',
          'It blocks forever until a replacement task succeeds',
        ],
        answer: 2,
        explanation: 'Step 1: Worker exceptions cannot cross threads directly. Step 2: The framework captures the throwable. Step 3: get rethrows it wrapped as ExecutionException. Step 4: Callers thus see failures as wrapped checked exceptions.',
      },
      {
        q: 'When does fork join beat a fixed pool?',
        options: [
          'For recursive splittable work with idle workers stealing tasks',
          'For single long database transactions with strict ordering',
          'For tiny tasks far below the scheduling overhead threshold',
          'For GUI event dispatch needing one dedicated thread',
        ],
        answer: 0,
        explanation: 'Step 1: Fork join recursively halves problems. Step 2: Idle workers steal halves from busy ones. Step 3: This balances irregular recursion automatically. Step 4: Ordered or tiny tasks gain nothing from the machinery.',
      },
      {
        q: 'What must happen after using an ExecutorService?',
        options: [
          'Nothing, pools vanish when tasks complete',
          'Call shutdown so worker threads do not pin the JVM open',
          'Interrupt every worker twice for a clean halt',
          'Serialize the pool for reuse across restarts',
        ],
        answer: 3,
        explanation: 'Step 1: Pool workers are non daemon threads. Step 2: The JVM waits for non daemon threads at exit. Step 3: Shutdown stops intake and winds workers down. Step 4: Without it the program hangs after its real work ends.',
      },
    ],
  },
  /* ---------------- 9.2 ---------------- */
  {
    sectionId: 'java-ch9-s2',
    readingTime: 10,
    intro: 'Shared mutable state turns interleaved threads into race conditions, and Horstmann demonstrates the damage with a bank transfer gone wrong. This section adds ReentrantLock guards, Condition waiting, and the synchronized keyword with its monitor model. It ends with deadlock anatomy and the discipline that avoids it.',
    objectives: [
      'Diagnose race conditions in check then act sequences',
      'Guard critical sections with locks and condition waiting',
      'Recognize and prevent deadlock through lock ordering',
    ],
    concepts: [
      {
        term: 'Race condition on shared state',
        kind: 'definition',
        statement: 'A **race condition** occurs when two threads interleave a read modify write sequence such as `balance = balance + amount`, losing one update despite each step looking atomic.',
        detail: 'Horstmann bank transfer shows deposits vanishing under contention. The cure groups the check and the update inside one critical section.',
      },
      {
        term: 'ReentrantLock guard',
        kind: 'method',
        statement: 'A **ReentrantLock** acquired with `lock()` and released in a `finally` block serializes its critical section while permitting timed and interruptible acquisition.',
        detail: 'Always unlock in finally so exceptions cannot wedge the lock. Reentrancy lets a holding thread relock without self deadlock.',
      },
      {
        term: 'Condition waiting',
        kind: 'notation',
        statement: 'A **Condition** from `lock.newCondition()` parks threads with `await()` until `signalAll()` announces new state, always rechecking the guard in a `while` loop.',
        detail: 'Waiting atomically releases the lock and reacquires on wakeup. The loop survives spurious wakeups and racing signalers.',
      },
      {
        term: 'Synchronized monitor model',
        kind: 'theorem',
        statement: 'The **synchronized** keyword in `synchronized (lock)` blocks locks the intrinsic monitor of the object or class, giving mutual exclusion with automatic release but no timeouts or fairness control.',
        detail: 'Synchronized methods guard whole bodies. Synchronized blocks narrow the critical section to the shared fragment, raising concurrency.',
      },
      {
        term: 'Deadlock by lock ordering',
        kind: 'insight',
        statement: '**Deadlock** freezes threads that each hold one lock while waiting inside `lock()` for another, forming a cycle that no timeout free acquisition can break.',
        detail: 'Impose one global lock order and acquire in that order everywhere. Alternatively use tryLock with backoff so cycles dissolve instead of freezing.',
      },
    ],
    figures: [
      {
        caption: 'Race timeline: two interleaved deposits read the same balance and one update is lost.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Interleaved deposit race condition timeline"><text x="180" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Thread A</text><text x="540" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Thread B</text><line x1="180" y1="70" x2="180" y2="280" stroke="currentColor" stroke-width="1.6"/><line x1="540" y1="70" x2="540" y2="280" stroke="currentColor" stroke-width="1.6"/><rect x="100" y="90" width="160" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="113" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">read 1000</text><rect x="460" y="130" width="160" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="540" y="153" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">read 1000</text><rect x="100" y="180" width="160" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="203" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">write 1100</text><rect x="460" y="220" width="160" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="540" y="243" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">write 1100</text><text x="360" y="300" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Two deposits of 100 leave 1100, not 1200: one update lost.</text><text x="360" y="322" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">A lock fuses each read modify write into one atomic step</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Guarding deposits with a lock',
        problem: 'Stop concurrent deposits from overwriting each other on a shared account balance.',
        steps: [
          { label: 'Step 1: Hold a dedicated lock', text: 'Create one ReentrantLock that guards the balance field:\n```java\nprivate final ReentrantLock balanceLock = new ReentrantLock();\nprivate double balance = 0.0;\n```\nFinal keeps the guard itself from being swapped mid race.' },
          { label: 'Step 2: Fuse read and write', text: 'Wrap the update so no thread can interleave inside it:\n```java\npublic void transfer(double amount) {\n    // lock-guard-pattern: lock protects the check and the update together\n    balanceLock.lock();\n    try {\n        balance = balance + amount;\n    } finally {\n        balanceLock.unlock();\n    }\n}\n```\nThe finally guarantees release on every path.' },
          { label: 'Step 3: Verify the total', text: 'Run two deposits of one hundred from zero and check:\n```java\ntransfer(100.0);\ntransfer(100.0);\nSystem.out.println(balance);\n```\nSerialized updates print two hundred every time.' },
        ],
        result: 'Locked deposits accumulate exactly, with no lost updates.',
      },
      {
        title: 'Waiting for sufficient funds',
        problem: 'Block a withdrawal until deposits cover it, without spinning on the lock.',
        steps: [
          { label: 'Step 1: Create the condition', text: 'Derive a condition from the same balance lock:\n```java\nprivate final Condition fundsAvailable = balanceLock.newCondition();\n```\nConditions always pair with the lock that guards their state.' },
          { label: 'Step 2: Await inside a guard loop', text: 'Park short funded threads until a deposit signals:\n```java\npublic void withdraw(double amount) throws InterruptedException {\n    // condition-wait-pattern: await inside a locked guard loop\n    balanceLock.lock();\n    try {\n        while (balance < amount) { fundsAvailable.await(); }\n        balance = balance - amount;\n    } finally {\n        balanceLock.unlock();\n    }\n}\n```\nThe while loop rechecks after every wakeup.' },
          { label: 'Step 3: Signal after deposits', text: 'Wake waiters at the end of each deposit path:\n```java\nbalance = balance + amount;\nfundsAvailable.signalAll();\n```\nSignal while holding the lock so no wakeup slips between check and park.' },
        ],
        result: 'Withdrawals wait efficiently and proceed only when covered.',
      },
    ],
    keyTakeaways: [
      'Races hide in read modify write sequences that look harmless alone.',
      'Locks fuse checks and updates into single atomic critical sections.',
      'Conditions park threads until state changes, always guarded by loops.',
      'Global lock ordering plus tryLock discipline keeps deadlock away.',
    ],
    quiz: [
      {
        q: 'Why do two concurrent deposits of 100 onto 1000 yield 1100?',
        options: [
          'Because both threads read 1000 before either writes back',
          'Because double addition is not associative in Java',
          'Because the JIT reorders deposits after the print',
          'Because locks slow threads so one deposit is skipped',
        ],
        answer: 2,
        explanation: 'Step 1: Each deposit reads, adds, then writes. Step 2: Interleaving lets both reads see 1000. Step 3: Both then write 1100 independently. Step 4: One update is therefore lost to the race.',
      },
      {
        q: 'Why must unlock sit in a finally block?',
        options: [
          'To inline the critical section for speed',
          'To guarantee release when the body throws',
          'To downgrade the lock to a read lock automatically',
          'To signal waiting conditions implicitly',
        ],
        answer: 0,
        explanation: 'Step 1: Critical sections can throw at any statement. Step 2: A missed unlock wedges every later acquirer. Step 3: Finally runs on normal and exceptional paths. Step 4: Hence the lock always returns to circulation.',
      },
      {
        q: 'Why await inside a while loop rather than an if?',
        options: [
          'Because await consumes extra stack frames each call',
          'Because spurious wakeups and racing signals need rechecking',
          'Because the compiler rejects if guards on Conditions',
          'Because loops run faster than branches on modern JVMs',
        ],
        answer: 3,
        explanation: 'Step 1: Threads may wake without any signal. Step 2: A signaler may serve another waiter first. Step 3: The predicate can be false again at wakeup. Step 4: Only a loop revalidates before proceeding.',
      },
      {
        q: 'Which design most directly prevents deadlock?',
        options: [
          'Adding more locks so threads wait less often',
          'One global lock order acquired consistently everywhere',
          'Synchronizing whole methods instead of small blocks',
          'Using volatile for every shared numeric field',
        ],
        answer: 1,
        explanation: 'Step 1: Deadlock needs a cycle of lock waits. Step 2: A global order forbids cyclic acquisition. Step 3: Consistent ordering holds across all code paths. Step 4: Cycles therefore cannot form.',
      },
    ],
  },
  /* ---------------- 9.3 ---------------- */
  {
    sectionId: 'java-ch9-s3',
    readingTime: 8,
    intro: 'Even with locks correct, threads can still see stale data through caches and reordering. This section explains visibility, the happens before guarantee, and safe publication. It covers volatile flags, final fields, and lock free atomics with LongAdder for hot counters.',
    objectives: [
      'Explain visibility failures and the happens before relation',
      'Publish state safely with volatile and final fields',
      'Replace synchronized counters with atomics and adders',
    ],
    concepts: [
      {
        term: 'Visibility across thread caches',
        kind: 'definition',
        statement: 'A **visibility failure** lets a thread loop forever on a stale cached copy, because writes to plain fields like `done` need not reach other cores promptly.',
        detail: 'Horstmann stop flag spins until volatile forces direct main memory traffic. Without a happens before edge, timing alone decides what a reader sees.',
      },
      {
        term: 'Happens before guarantee',
        kind: 'theorem',
        statement: 'The **happens before** relation, established by actions like `unlock()` before the next `lock()`, orders memory effects: a write that happens before a read is guaranteed visible, and lock release happens before the next acquisition.',
        detail: 'Program order inside one thread always applies. Across threads, only synchronization actions such as unlock, volatile write, and thread start create edges.',
      },
      {
        term: 'Volatile flag publication',
        kind: 'method',
        statement: 'A **volatile** field such as `volatile boolean done` makes every write immediately visible and blocks reorderings that would move accesses across it.',
        detail: 'Use it for status flags and safe publication of immutable snapshots. It never makes read modify write sequences atomic, so counters still need atomics.',
      },
      {
        term: 'Final field safe publication',
        kind: 'notation',
        statement: '**Final fields** freeze at construction end, so any thread receiving the reference sees the fully built values through the freeze guarantee in `new Pair(first, second)` style holders.',
        detail: 'Publish the holder without data races by sharing through proper construction. Immutable objects built this way need no further synchronization.',
      },
      {
        term: 'Atomics and striped adders',
        kind: 'insight',
        statement: '**Atomics** like `AtomicLong` apply single compare and set steps in hardware, while `LongAdder` stripes hot counters across cells to dodge cache line contention.',
        detail: 'Choose AtomicLong for low contention and readable values. Choose LongAdder when many threads hammer one counter and only the sum matters.',
      },
    ],
    figures: [
      {
        caption: 'Volatile writes flush to main memory so every reader thread sees fresh values.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Volatile visibility across thread caches"><rect x="270" y="40" width="180" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="68" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">Main memory</text><text x="360" y="90" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">done equals true</text><rect x="60" y="170" width="180" height="110" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="150" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Writer</text><text x="150" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">volatile write</text><text x="150" y="242" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">flush at once</text><rect x="480" y="170" width="180" height="110" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="570" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Reader</text><text x="570" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">volatile read</text><text x="570" y="242" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">fresh value</text><line x1="150" y1="170" x2="300" y2="110" stroke="currentColor" stroke-width="1.6"/><polygon points="300,110 290,112 293,121" fill="currentColor"/><line x1="420" y1="110" x2="570" y2="170" stroke="currentColor" stroke-width="1.6"/><polygon points="570,170 560,166 561,177" fill="currentColor"/><text x="360" y="322" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">No stale cache copy survives a volatile round trip</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Stopping a worker with a volatile flag',
        problem: 'Let a controller thread stop a spinning worker promptly without locking every loop iteration.',
        steps: [
          { label: 'Step 1: Declare the flag volatile', text: 'Mark the shared stop signal so writes flush immediately:\n```java\nprivate volatile boolean done = false;\n```\nEvery read now travels to main memory instead of a register copy.' },
          { label: 'Step 2: Poll the flag', text: 'Spin until the controller publishes true:\n```java\npublic void run() {\n    // visibility-flag-pattern: volatile publish makes done visible at once\n    while (!done) {\n        doWork();\n    }\n}\npublic void stop() { done = true; }\n```\nThe loop observes the stop within one fresh read.' },
          { label: 'Step 3: Contrast plain fields', text: 'Note the failure mode without the modifier:\n```java\nboolean plain = done;\nSystem.out.println(plain);\n```\nA plain cached read could spin forever even after stop runs.' },
        ],
        result: 'The volatile flag stops the worker on the next poll, every time.',
      },
      {
        title: 'Lock free visit counting',
        problem: 'Count visits and accumulate latency from many threads without serializing on one monitor.',
        steps: [
          { label: 'Step 1: Hold atomic state', text: 'Keep an AtomicLong for exact counts and a LongAdder for hot sums:\n```java\nprivate final AtomicLong visits = new AtomicLong();\nprivate final LongAdder total = new LongAdder();\n```\nBoth structures update without any synchronized block.' },
          { label: 'Step 2: Record without locking', text: 'Add one visit and its latency in hardware assisted steps:\n```java\npublic void record(long latency) {\n    // lock-free-counter-pattern: atomic add replaces synchronized blocks\n    visits.incrementAndGet();\n    total.add(latency);\n}\n```\nCompare and set retries replace monitor queues.' },
          { label: 'Step 3: Read the average', text: 'Combine the two readings for a mean latency:\n```java\ndouble mean = (double) total.sum() / visits.get();\nSystem.out.println(mean);\n```\nStriped cells keep the hot path contention free.' },
        ],
        result: 'Visits and latency accumulate lock free with exact totals.',
      },
    ],
    keyTakeaways: [
      'Plain field writes may hide in caches, so readers can spin on stale values.',
      'Happens before edges from locks, volatile, and thread start order memory.',
      'Volatile publishes flags and snapshots but never atomicizes increments.',
      'Atomics and LongAdder count without monitors at far higher throughput.',
    ],
    quiz: [
      {
        q: 'Why can a plain stop flag loop forever?',
        options: [
          'Because the JIT removes the loop as dead code always',
          'Because the reader caches the value and never reloads it',
          'Because boolean writes are not atomic on any JVM',
          'Because stop runs on a daemon thread that never starts',
        ],
        answer: 3,
        explanation: 'Step 1: Cores may serve repeated reads from cache. Step 2: Nothing forces a reload of a plain field. Step 3: The writer update can sit invisible indefinitely. Step 4: Hence caching, not atomicity, causes the hang.',
      },
      {
        q: 'What does a volatile write guarantee?',
        options: [
          'Atomic read modify write across several fields at once',
          'Immediate visibility plus ordering against surrounding accesses',
          'Mutual exclusion for the enclosing code block',
          'Blocking until every reader acknowledges receipt',
        ],
        answer: 1,
        explanation: 'Step 1: Volatile writes flush to main memory. Step 2: Later volatile reads observe them. Step 3: Reorderings across the access are fenced. Step 4: Compound atomicity and locking are not included.',
      },
      {
        q: 'When is LongAdder better than AtomicLong?',
        options: [
          'When many threads update one counter and only the sum is read',
          'When exact compare and set retries must be counted',
          'When the counter value guards a critical section entry',
          'When updates are rare and reads dominate completely',
        ],
        answer: 2,
        explanation: 'Step 1: AtomicLong funnels all updates through one location. Step 2: Heavy contention bounces that cache line. Step 3: LongAdder stripes updates across cells. Step 4: Striping wins exactly for hot write, cold read counters.',
      },
      {
        q: 'How do final fields publish safely?',
        options: [
          'The freeze at construction end makes them visible with the reference',
          'The garbage collector pins them in registers for readers',
          'The class loader locks them during verification',
          'The JIT inlines them before any thread starts',
        ],
        answer: 0,
        explanation: 'Step 1: Construction writes final fields once. Step 2: The freeze edge orders those writes before publication. Step 3: Any thread receiving the reference sees built values. Step 4: Immutability then needs no extra synchronization.',
      },
    ],
  },
  /* ---------------- 9.4 ---------------- */
  {
    sectionId: 'java-ch9-s4',
    readingTime: 9,
    intro: 'Thread safe collections package proven concurrency control so application code rarely locks directly. This section tours blocking queues, ConcurrentHashMap atomic updates with bulk operations, concurrent sets, and copy on write arrays. It closes with check then act races and the older synchronized collections they replace.',
    objectives: [
      'Coordinate producers and consumers with blocking queues',
      'Update ConcurrentHashMap entries atomically with merge and compute',
      'Avoid check then act races with the right concurrent container',
    ],
    concepts: [
      {
        term: 'Blocking queue handoff',
        kind: 'definition',
        statement: 'A **BlockingQueue** such as `LinkedBlockingQueue<T>` parks producers when full and consumers when empty, turning `put` and `take` into self pacing coordination.',
        detail: 'Bounded queues apply backpressure that unbounded ones lack. Poison pill sentinels shut down consumer fleets cleanly.',
      },
      {
        term: 'ConcurrentHashMap atomic updates',
        kind: 'method',
        statement: '**Atomic map methods** like `merge`, `computeIfAbsent`, and `compute` fuse lookup and update inside the bin, so counters such as `counts.merge(word, 1L, Long::sum)` never lose increments.',
        detail: 'Lambdas passed to these methods must stay short and side effect free. They may rerun under contention, so keep them pure.',
      },
      {
        term: 'Bulk parallel map operations',
        kind: 'notation',
        statement: '**Bulk operations** like `forEach`, `search`, and `reduceEntries` sweep a `ConcurrentHashMap` in parallel above a threshold, as in `map.reduceEntries(1000, reducer)`.',
        detail: 'The threshold splits work only when the map is large enough to pay for it. Transformers and reducers must be associative and stateless.',
      },
      {
        term: 'Copy on write snapshots',
        kind: 'insight',
        statement: '**CopyOnWriteArrayList** created by `new CopyOnWriteArrayList<>(list)` copies its array on every mutation, so iterators traverse immutable snapshots while writers pay the full copy price.',
        detail: 'Ideal for listener lists read constantly but changed rarely. Never choose it for write heavy workloads where copies dominate.',
      },
      {
        term: 'Check then act race',
        kind: 'theorem',
        statement: 'A **check then act** sequence like testing `containsKey` before `put` races even on safe maps, because another thread can slip between the two individually atomic steps.',
        detail: 'Fuse the pair with putIfAbsent or compute instead. The same cure fixes size checks followed by conditional removals on queues.',
      },
    ],
    figures: [
      {
        caption: 'Producer threads hand tasks through a bounded blocking queue to consumer threads.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Blocking queue producer consumer flow"><rect x="40" y="110" width="140" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="110" y="140" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Producers</text><text x="110" y="162" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">put blocks full</text><rect x="250" y="90" width="220" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="118" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Bounded queue</text><rect x="270" y="140" width="40" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="163" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">t1</text><rect x="315" y="140" width="40" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="335" y="163" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">t2</text><rect x="360" y="140" width="40" height="36" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="163" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">t3</text><rect x="540" y="110" width="140" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="610" y="140" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Consumers</text><text x="610" y="162" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">take blocks empty</text><line x1="180" y1="150" x2="246" y2="150" stroke="currentColor" stroke-width="1.8"/><polygon points="246,150 236,144 236,156" fill="currentColor"/><line x1="470" y1="150" x2="536" y2="150" stroke="currentColor" stroke-width="1.8"/><polygon points="536,150 526,144 526,156" fill="currentColor"/><text x="360" y="270" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Full queues park producers, empty queues park consumers.</text><text x="360" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Backpressure replaces manual wait and notify code</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Word counting with atomic map updates',
        problem: 'Count word occurrences from many threads so no increment is ever lost to interleaving.',
        steps: [
          { label: 'Step 1: Share a concurrent map', text: 'Create one ConcurrentHashMap for all counting threads:\n```java\nConcurrentHashMap<String, Long> counts = new ConcurrentHashMap<>();\n```\nBins update independently instead of locking the whole table.' },
          { label: 'Step 2: Merge atomically', text: 'Fold each word into its counter in one fused step:\n```java\ncounts.merge("ada", 1L, Long::sum);\ncounts.computeIfAbsent("grace", k -> 0L);\n```\nLookup plus update happens inside the bin lock, so races cannot split it.' },
          { label: 'Step 3: Reduce in parallel', text: 'Find the current leader with a parallel bulk reduction:\n```java\n// bulk-reduce-pattern: parallel sweep finds the max entry safely\nString top = counts.reduceEntries(1000,\n    (a, b) -> a.getValue() > b.getValue() ? a : b).getKey();\nSystem.out.println(top);\n```\nThe sweep parallelizes only when the map is large enough.' },
        ],
        result: 'Concurrent counters stay exact under any thread interleaving.',
      },
      {
        title: 'Coordinating with a bounded handoff queue',
        problem: 'Move tasks from producers to consumers with natural pacing and no busy waiting.',
        steps: [
          { label: 'Step 1: Bound the channel', text: 'Limit the queue to one hundred pending tasks:\n```java\nBlockingQueue<String> queue = new LinkedBlockingQueue<>(100);\n```\nThe bound turns overload into producer waiting instead of memory growth.' },
          { label: 'Step 2: Hand off with blocking calls', text: 'Transfer one task with self pacing primitives:\n```java\ntry {\n    // handoff-queue-pattern: blocking put and take coordinate threads\n    queue.put("task");\n    String next = queue.take();\n    System.out.println(next);\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n}\n```\nPut parks when full and take parks when empty.' },
          { label: 'Step 3: Preserve interruption', text: 'Restore the interrupt flag instead of swallowing it:\n```java\nThread.currentThread().interrupt();\n```\nHigher layers can then observe the cancellation request.' },
        ],
        result: 'Producers and consumers pace each other through the bounded queue.',
      },
    ],
    keyTakeaways: [
      'Blocking queues coordinate threads with put and take backpressure.',
      'Merge and compute fuse map lookup plus update into atomic steps.',
      'Bulk operations sweep large concurrent maps in parallel safely.',
      'Check then act pairs must fuse, since atomic steps do not compose.',
    ],
    quiz: [
      {
        q: 'What happens on put to a full bounded queue?',
        options: [
          'The oldest element is silently discarded',
          'The producer blocks until space appears',
          'The queue doubles its capacity automatically',
          'An unchecked overflow exception escapes',
        ],
        answer: 0,
        explanation: 'Step 1: Bounded queues fix their capacity at creation. Step 2: Put must wait for a consumer take. Step 3: Blocking applies backpressure upstream. Step 4: Hence producers park rather than overflow.',
      },
      {
        q: 'Why is merge safer than get plus put for counters?',
        options: [
          'Merge avoids boxing the counter values',
          'Merge locks the whole table for the duration',
          'Merge fuses lookup and update inside one atomic step',
          'Merge skips the hash computation for known keys',
        ],
        answer: 2,
        explanation: 'Step 1: Get plus put are two separate atomic steps. Step 2: Another thread can interleave between them. Step 3: Merge executes both under the bin guard. Step 4: No interleave can split the fused update.',
      },
      {
        q: 'When does CopyOnWriteArrayList shine?',
        options: [
          'Write heavy logs with constant appends from many threads',
          'Read heavy listener lists mutated very rarely',
          'Large sorted datasets needing range scans',
          'Blocking handoffs between pipeline stages',
        ],
        answer: 1,
        explanation: 'Step 1: Every mutation copies the whole array. Step 2: Heavy writes therefore pay repeatedly. Step 3: Iterators ride immutable snapshots for free. Step 4: Rare write, constant read workloads fit perfectly.',
      },
      {
        q: 'What is wrong with containsKey followed by put?',
        options: [
          'Both calls are individually unsynchronized on safe maps',
          'Another thread can insert between the check and the act',
          'The key hash changes between the two calls',
          'Checked views reject the two step sequence',
        ],
        answer: 3,
        explanation: 'Step 1: Each call is atomic by itself. Step 2: Atomicity does not extend across the pair. Step 3: A rival thread can act in the gap. Step 4: putIfAbsent or compute fuses the pair correctly.',
      },
    ],
  },
]

export const javaCh9Content = javaCh09Content
