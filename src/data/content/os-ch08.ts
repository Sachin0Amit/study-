import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 8: Deadlocks (Sections 8.1 – 8.9 coverage in 3 study sections)
// Master study content.
// ============================================================================

export const osCh8Content: SectionContent[] = [
  // ------------------------------------------------- 8.1–8.4 in one section
  {
    sectionId: 'osc-ch8-s1',
    readingTime: 9,
    intro: 'Every deadlock is a story about waiting: threads request, use and release resources, and sometimes the waits close into a loop that no one can break. This section makes the story precise — resource types and instances, the canonical two-mutex deadlock, the four necessary conditions that must all hold at once, and the resource-allocation graph that turns cycles into diagnosis.',
    objectives: [
      'Model system resources as types with instances and follow the request/use/release lifecycle',
      'Trace the two-mutex Pthreads deadlock and explain its scheduling dependence',
      'State the four necessary conditions and why all four must hold simultaneously',
      'Read and build resource-allocation graphs, distinguishing request edges from assignment edges',
      'Decide what a cycle does and does not prove in single-instance versus multiple-instance systems'
    ],
    concepts: [
      {
        term: 'Resources, types and instances',
        kind: 'definition',
        statement: 'A system consists of a finite number of resources distributed among competing threads, partitioned into **resource types** $R_1, R_2, \\ldots, R_m$, where type $R_i$ has $W_i$ **identical instances** — CPU cycles, files, network interfaces, DVD drives. A request for a type is satisfied by **any** instance; if instances are not interchangeable, the classes were defined improperly.',
        detail: 'Mutex locks and semaphores are resources too — on contemporary systems they are the most common sources of deadlock. Because each lock is associated with a specific data structure (one lock for a queue, another for a list), each lock instance typically gets its own resource class.'
      },
      {
        term: 'The resource lifecycle',
        kind: 'method',
        statement: 'Under normal operation a thread uses each resource in three steps: **Request** — if the resource cannot be granted immediately (for example, a mutex held by another thread), the requester waits; **Use** — the thread operates on the resource (with a mutex, enters its critical section); **Release** — the thread returns it.',
        detail: 'Request and release surface as system calls — request() and release() of a device, open() and close() of a file, allocate() and free() of memory — or as wait()/signal() on a semaphore and acquire()/release() on a mutex. A kernel table records which resources are free or allocated and to whom, and queues of threads waiting for each resource.'
      },
      {
        term: 'Deadlock defined',
        kind: 'definition',
        statement: 'A set of threads is in a **deadlocked state** when every thread in the set is waiting for an event that can be caused only by another thread in the set. The events of concern are resource acquisition and release.',
        detail: 'The events need not be locks: reading from a network interface or interprocess-communication facilities can close a wait cycle too. The Kansas legislature once mandated the perfect deadlock — “When two trains approach each other at a crossing, both shall come to a full stop and neither shall start up again until the other has gone.”'
      },
      {
        term: 'The two-mutex pattern',
        kind: 'insight',
        statement: 'Two threads share two initialized mutex locks. thread one acquires them in the order first_mutex, second_mutex; thread two acquires second_mutex, first_mutex. If thread one gets first_mutex while thread two gets second_mutex, each blocks forever on the other’s lock — deadlock. If thread one completes both acquisitions first, no deadlock occurs at all.',
        detail: 'The same trap needs no locks: two threads each blocked in pthread_join() waiting for the other to exit are deadlocked on thread completion events. The lesson is that such deadlocks appear only under certain scheduling orders — which makes them maddening to identify, reproduce and test for.'
      },
      {
        term: 'The four necessary conditions',
        kind: 'theorem',
        statement: 'A deadlock can arise only if **all four** hold simultaneously: **1. Mutual exclusion** — at least one resource is held in a nonsharable mode. **2. Hold and wait** — a thread holds at least one resource and waits for additional resources held by other threads. **3. No preemption** — a resource can be released only voluntarily by its holder after the thread completes. **4. Circular wait** — a set $\\{T_0, T_1, \\ldots, T_n\\}$ of waiting threads exists with $T_0$ waiting for a resource held by $T_1$, $T_1$ waiting for one held by $T_2$, …, $T_{n-1}$ waiting for one held by $T_n$, and $T_n$ waiting for one held by $T_0$.',
        detail: 'All four must hold — break any one and deadlock is impossible. They are not fully independent: circular wait implies hold and wait. Section 8.5’s prevention strategies negate them one at a time precisely because they are separable targets.'
      },
      {
        term: 'Resource-allocation graphs',
        kind: 'notation',
        statement: 'A directed **resource-allocation graph** has vertices partitioned into threads $T = \\{T_1, \\ldots, T_n\\}$ (drawn as circles) and resource types $R = \\{R_1, \\ldots, R_m\\}$ (drawn as rectangles containing one dot per instance). A **request edge** $T_i \\to R_j$ means thread $T_i$ is waiting for an instance of $R_j$; an **assignment edge** $R_j \\to T_i$ means an instance of $R_j$ is allocated to $T_i$. A request edge points only to the rectangle; an assignment edge must designate one specific dot.',
        detail: 'The graph breathes with the lifecycle: a request inserts a request edge; granting it converts the request edge instantaneously into an assignment edge; releasing deletes the assignment edge. Deadlock diagnosis becomes cycle-hunting on this picture.'
      },
      {
        term: 'What a cycle proves',
        kind: 'theorem',
        statement: '**If the graph contains no cycle, no thread is deadlocked.** If it contains a cycle and every resource type involved has exactly **one instance**, the deadlock has occurred — the cycle is both necessary and sufficient, and every thread in it is deadlocked. If the cycle involves types with **several instances**, a deadlock **may** exist: the cycle is necessary but not sufficient, and deeper analysis is required.',
        detail: 'The multiple-instance case is the tricky one: another thread outside the cycle might hold a spare instance and walk away from it, breaking the cycle on its own. That “one possibility” is exactly why Section 8.7 needs a matrix algorithm instead of eyeballing the graph.'
      }
    ],
    figures: [
      {
        caption: "Resource-allocation graph with a circular wait: thread T₁ holds an instance of R₁ and requests R₂, while thread T₂ holds R₂ and requests R₁. Because both resource types have only one instance, the cycle proves deadlock.",
        svg: `<svg viewBox="0 0 720 280" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Resource allocation graph showing a deadlock cycle"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/></marker></defs><circle cx="200" cy="80" r="32" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="86" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">T₁</text><circle cx="520" cy="200" r="32" fill="none" stroke="currentColor" stroke-width="2"/><text x="520" y="206" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">T₂</text><rect x="160" y="165" width="80" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">R₁</text><circle cx="200" cy="210" r="5" fill="currentColor"/><rect x="480" y="45" width="80" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="520" y="65" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">R₂</text><circle cx="520" cy="90" r="5" fill="currentColor"/><path d="M 200 205 L 200 118" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="140" y="150" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">assigned</text><path d="M 232 80 L 472 80" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="350" y="70" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">requests</text><path d="M 520 95 L 520 162" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="575" y="135" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">assigned</text><path d="M 488 200 L 246 200" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="360" y="220" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">requests (cycle closes)</text></svg>`,
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'Two threads, two mutexes',
        problem: 'pthread_mutex_t first_mutex and second_mutex are initialized unlocked. thread one runs pthread_mutex_lock(&first_mutex); pthread_mutex_lock(&second_mutex); … work …; unlock both; thread two locks second_mutex then first_mutex. Exhibit a deadlocked schedule.',
        steps: [
          { label: 'Step 1: Both threads start', text: 'The scheduler runs thread one first: pthread_mutex_lock(&first_mutex) succeeds — thread one now owns first_mutex.' },
          { label: 'Step 2: The second thread takes the other lock', text: 'Before thread one proceeds, the scheduler switches: thread two executes pthread_mutex_lock(&second_mutex) and succeeds — thread two owns second_mutex.' },
          { label: 'Step 3: The fatal second requests', text: 'thread one calls pthread_mutex_lock(&second_mutex) — held by thread two — and blocks. thread two calls pthread_mutex_lock(&first_mutex) — held by thread one — and blocks.' },
          { label: 'Step 4: The cycle is closed', text: 'thread one waits for an event (the unlock of second_mutex) that only thread two can cause, while thread two waits for the unlock of first_mutex, which only thread one can cause. Neither ever reaches its unlock statements.' },
          { label: 'Step 5: The scheduling dependence', text: 'Had thread one instead acquired and released both locks before thread two requested any, the program would run flawlessly — the deadlock needs the interleaving of Step 1–2. That is why deadlock bugs survive casual testing.' }
        ],
        result: 'Deadlock: each thread holds one mutex and waits for the other’s — circular wait between exactly two threads. The fix previewed in Section 8.5: make both threads acquire the locks in the same order.'
      },
      {
        title: 'A graph walk: from safe to deadlocked',
        problem: 'A resource-allocation graph has $T = \\{T_1, T_2, T_3\\}$ and $R = \\{R_1, R_2, R_3, R_4\\}$ with instances: $R_1$ has one, $R_2$ has two, $R_3$ has one, $R_4$ has three. Edges: $E = \\{T_1 \\to R_1, T_2 \\to R_3, R_1 \\to T_2, R_2 \\to T_2, R_2 \\to T_1, R_3 \\to T_3\\}$. Is the system deadlocked? What if $T_3$ now requests an instance of $R_2$?',
        steps: [
          { label: 'Step 1: Translate the edges into state', text: 'Assignment edges: $R_1$ is held by $T_2$; one instance of $R_2$ by $T_2$ and the other by $T_1$; $R_3$ by $T_3$; no instance of $R_4$ is allocated. Request edges: $T_1$ wants $R_1$; $T_2$ wants $R_3$. So $T_3$ is running freely, holding $R_3$, waiting for nothing.' },
          { label: 'Step 2: Cycle check on the original graph', text: 'Follow $T_1 \\to R_1 \\to T_2 \\to R_3 \\to T_3$: the path dies at $T_3$, which waits for nothing. No cycle exists — by the theorem, the system is definitely not deadlocked, even with $T_1$ and $T_2$ both blocked.' },
          { label: 'Step 3: $T_3$ requests an instance of $R_2$', text: 'Both instances of $R_2$ are held (by $T_1$ and $T_2$), so the request edge $T_3 \\to R_2$ is added and stays — the grant cannot be made.' },
          { label: 'Step 4: Two minimal cycles appear', text: '$T_1 \\to R_1 \\to T_2 \\to R_3 \\to T_3 \\to R_2 \\to T_1$ and $T_2 \\to R_3 \\to T_3 \\to R_2 \\to T_2$.' },
          { label: 'Step 5: Every thread in the cycles is stuck', text: '$T_2$ waits for $R_3$, held by $T_3$; $T_3$ waits for $R_2$, held by $T_1$ and $T_2$; $T_1$ waits for $R_1$, held by $T_2$. Because $R_1$ and $R_3$ are single-instance types, each cycle member is provably deadlocked.' },
          { label: 'Step 6: The idle instances save no one', text: 'All three instances of $R_4$ sit unused — the waiting threads want the wrong resource type, and spare capacity of the wrong kind breaks nothing.' }
        ],
        result: 'Originally: no cycle, no deadlock (just ordinary waiting). After $T_3$’s request: two cycles through single-instance types — $T_1$, $T_2$ and $T_3$ are deadlocked.'
      },
      {
        title: 'A cycle that lies',
        problem: 'A graph contains threads $T_1$–$T_4$ and types $R_1$ (single instance) and $R_2$ (multiple instances). $T_1$ holds an instance of $R_2$ and requests $R_1$; $T_3$ holds $R_1$ and requests $R_2$; $T_4$ — otherwise uninvolved — holds another instance of $R_2$. Deadlocked?',
        steps: [
          { label: 'Step 1: Find the cycle', text: '$T_1 \\to R_1 \\to T_3 \\to R_2 \\to T_1$ — a genuine cycle through the graph.' },
          { label: 'Step 2: Apply the theorem carefully', text: '$R_2$ has multiple instances, so a cycle is necessary but not sufficient for deadlock. The cycle alone proves only “one possibility.”' },
          { label: 'Step 3: Look outside the cycle', text: '$T_4$ holds an instance of $R_2$ and is not blocked — it may finish and release it at any moment.' },
          { label: 'Step 4: Break the would-be deadlock', text: 'If $T_4$ releases its instance of $R_2$, that instance can be allocated to $T_3$; $T_3$ then completes, releases $R_1$, and $T_1$ proceeds. The cycle dissolves without any recovery action.' },
          { label: 'Step 5: Conclusion', text: 'The threads are entangled but not deadlocked — this schedule-dependent tangle is why multi-instance systems need the detection algorithm of Section 8.7 rather than a graph glance.' }
        ],
        result: 'A cycle with multi-instance resource types is a warning, not a verdict: the system may or may not be deadlocked, and only deeper analysis — or waiting — settles it.'
      }
    ],
    keyTakeaways: [
      'Resources come in types $R_i$ with $W_i$ identical instances; locks and semaphores are resources and get their own classes.',
      'The lifecycle is request, use, release — and the kernel’s tables plus wait queues are the bookkeeping behind it.',
      'Deadlock = every thread in a set waits for an event only another thread in the set can cause.',
      'The two-mutex pattern (one thread locking A then B, the other B then A) deadlocks only on unlucky schedules — the reason such bugs evade testing.',
      'Four conditions must ALL hold: mutual exclusion, hold and wait, no preemption, circular wait — and circular wait implies hold and wait.',
      'Resource-allocation graphs: request edge $T_i \\to R_j$, assignment edge $R_j \\to T_i$; no cycle means no deadlock.',
      'A cycle in a single-instance system is a proven deadlock; with multiple instances it is only a possibility — one warning that matrix algorithms must resolve.'
    ],
    quiz: [
      {
        q: 'Which of the following is NOT one of the four necessary conditions for deadlock?',
        options: ['Bounded waiting', 'Hold and wait', 'No preemption', 'Circular wait'],
        answer: 0,
        explanation: 'The four are mutual exclusion, hold and wait, no preemption and circular wait. Bounded waiting is a correctness requirement for critical-section solutions — a liveness guarantee, not a deadlock ingredient.'
      },
      {
        q: 'If a resource-allocation graph contains no cycle, then:',
        options: ['the system is definitely not deadlocked', 'the system is definitely deadlocked', 'a deadlock may still exist among waiting threads', 'all threads must be blocked'],
        answer: 0,
        explanation: 'Acyclicity is the strong direction of the theorem: deadlock requires a cycle, so no cycle rules deadlock out entirely — blocked threads in an acyclic graph are merely waiting for threads that can still run.'
      },
      {
        q: 'A cycle appears in a resource-allocation graph in which one involved resource type has two instances. What can be concluded?',
        options: ['A deadlock may or may not exist — the cycle is necessary but not sufficient', 'The system is definitely deadlocked', 'The system is definitely not deadlocked', 'The graph must be redrawn'],
        answer: 0,
        explanation: 'With multiple instances, another thread outside the cycle can free an instance and dissolve the tangle — as in the book’s Figure 8.6, where T4 can release R2 and unblock the whole cycle. Single-instance cycles alone are conclusive.'
      },
      {
        q: 'In the two-mutex Pthreads example, deadlock occurs exactly when:',
        options: ['each thread acquires its first lock before either acquires its second', 'both threads request the same single lock', 'one thread runs to completion first', 'the mutexes are initialized to different values'],
        answer: 0,
        explanation: 'The deadlock needs the interleaving where thread one holds first_mutex and thread two holds second_mutex, so each then blocks on the other. If either thread completes both acquisitions first, the other simply waits momentarily — no cycle ever forms.'
      },
      {
        q: 'The circular-wait condition implies which other necessary condition?',
        options: ['Hold and wait', 'Mutual exclusion', 'No preemption', 'None — the four are independent'],
        answer: 0,
        explanation: 'To be part of a circular wait, a thread must be holding one resource while waiting for the next — that is hold and wait by definition. The conditions are therefore not completely independent, though each is still a separately attackable target for prevention.'
      }
    ]
  },

  // ------------------------------------------------- 8.5–8.6
  {
    sectionId: 'osc-ch8-s2',
    readingTime: 12,
    intro: 'If deadlock is four conditions holding at once, the first defense is to make one of them impossible — prevention — and the second is to stay out of trouble by knowing the future: avoidance, where each request is granted only if the system provably remains safe. The Banker’s algorithm is the classic avoidance machinery, and its matrices are among the most worked exercises in all of operating systems.',
    objectives: [
      'Name the three global strategies for deadlock and what each costs',
      'Break each of the four necessary conditions and judge the practicality of each scheme',
      'Prove that total ordering of resource types prevents circular wait',
      'Define safe states and distinguish safe, unsafe and deadlocked states',
      'Execute the safety algorithm and the resource-request algorithm on the book’s five-thread example'
    ],
    concepts: [
      {
        term: 'Three ways to handle deadlock',
        kind: 'definition',
        statement: 'A system can **ignore** deadlocks and pretend they never occur — the choice of most operating systems, including Linux and Windows, since deadlocks are rare and prevention is expensive; it falls to developers to write deadlock-free programs. It can **prevent or avoid** deadlocks so the system never enters a deadlocked state. Or it can let deadlocks happen, **detect** them and **recover** — the database approach.',
        detail: 'Undetected deadlock lets performance rot: resources are held by threads that cannot run, more threads sink into the deadlock as they request, and the system eventually stops functioning and needs a manual restart. Databases can afford detection and recovery because they already keep transaction logs.'
      },
      {
        term: 'Negating mutual exclusion',
        kind: 'method',
        statement: 'A deadlock requires at least one nonsharable resource, so **sharable resources cannot be part of a deadlock**: read-only files can be opened simultaneously by many threads, and no thread ever waits for one. Spooling printer output makes the printer logically sharable — every thread writes to the spool and one daemon owns the device.',
        detail: 'The limit is fundamental: some resources are intrinsically nonsharable — a mutex lock cannot be simultaneously held by several threads — so mutual exclusion cannot be denied in general, only engineered away per resource.'
      },
      {
        term: 'Negating hold and wait',
        kind: 'method',
        statement: 'Two protocols guarantee a thread never holds while waiting. **Request everything up front**: each thread requests and is allocated all its resources before execution begins. **Release then request**: a thread may request resources only when it currently holds none — before asking for anything more it must release what it has.',
        detail: 'Both suffer two disadvantages: **low utilization** (a mutex held for an entire run though needed for a moment) and **starvation** — a thread needing several popular resources may wait indefinitely because one of them is always allocated to somebody else.'
      },
      {
        term: 'Negating no preemption',
        kind: 'method',
        statement: 'If a thread holding resources requests another and must wait, **all its current resources are preempted** — implicitly released, added to the list it is waiting for; the thread restarts only when it can regain the old resources plus the new. The refined variant: if a request cannot be granted, check whether the wanted resources are held by other **waiting** threads and preempt them from those.',
        detail: 'This works only where state is cheaply saveable and restorable — CPU registers, memory pages, database transactions. It cannot generally be applied to mutex locks and semaphores, precisely the resources where deadlocks most commonly occur.'
      },
      {
        term: 'Negating circular wait: total ordering',
        kind: 'method',
        statement: 'Impose a total ordering on resource types via a one-to-one function $F: R \\to \\mathbb{N}$, and require each thread to request resources only in **increasing order**: it may request $R_j$ only if $F(R_j) > F(R_i)$ for every $R_i$ it holds (equivalently, it must first release any $R_i$ with $F(R_i) \\ge F(R_j)$); several instances of one type must be requested together.',
        detail: 'Proof by contradiction: suppose a circular wait $\\{T_0, \\ldots, T_n\\}$ exists, $T_i$ waiting for $R_i$ held by $T_{i+1}$ (indices modulo). Since $T_{i+1}$ holds $R_i$ while requesting $R_{i+1}$, the protocol forces $F(R_i) < F(R_{i+1})$ for all i — so $F(R_0) < F(R_1) < \\cdots < F(R_n) < F(R_0)$, impossible by transitivity. Hence no circular wait. In practice: ordering hundreds of locks is hard, Java developers fall back on System.identityHashCode() for the function F — and dynamic lock acquisition (an account-transfer function locking two accounts in whatever order they arrive) can still deadlock despite a global ordering.'
      },
      {
        term: 'Safe state',
        kind: 'definition',
        statement: 'A state is **safe** if the system can allocate resources to each thread up to its maximum and still avoid deadlock — formally, if there exists a **safe sequence** $\\langle T_1, T_2, \\ldots, T_n \\rangle$ such that, for each $T_i$, the requests $T_i$ can still make are satisfied by the currently available resources plus the resources held by all $T_j$ with $j < i$. If no such sequence exists, the state is **unsafe**.',
        detail: 'The containments: every deadlock is an unsafe state, but an unsafe state is not necessarily deadlocked — it merely *may* lead to deadlock depending on how threads behave. A safe state is never a deadlocked state. Avoidance = never leave the safe region: a request is granted only if the resulting state is still safe, so a thread may wait even when resources are available.'
      },
      {
        term: 'Banker’s algorithm: data structures',
        kind: 'notation',
        statement: 'For $n$ threads and $m$ resource types, maintain: **Available** — a length-m vector, $\\text{Available}[j] = k$ means $k$ instances of $R_j$ are free; **Max** — an $n \\times m$ matrix of maximum demands; **Allocation** — an $n \\times m$ matrix of current holdings; **Need** — an $n \\times m$ matrix of remaining requirements, with $\\text{Need}_{ij} = \\text{Max}_{ij} - \\text{Allocation}_{ij}$. For vectors, $X \\le Y$ iff $X[i] \\le Y[i]$ for all i; rows are written $\\text{Allocation}_i$, $\\text{Need}_i$.',
        detail: 'A thread entering the system must declare its maximum — which may not exceed the system totals — and from then on every request can be checked against Need. The name comes from banking: never loan out cash in a way that leaves the bank unable to satisfy all its customers.'
      },
      {
        term: 'The safety algorithm',
        kind: 'method',
        statement: '1. Initialize Work = Available and Finish[i] = false for all i. 2. Find an index i with Finish[i] == false and $\\text{Need}_i \\le \\text{Work}$; if none exists, go to step 4. 3. Set Work = Work + $\\text{Allocation}_i$ and Finish[i] = true; go to step 2. 4. The state is safe **iff** Finish[i] == true for all i.',
        detail: 'The intuition: a thread whose remaining need fits in Work could run to completion even if everything else froze, then return everything it holds — so its allocation can be folded into Work and the next thread examined. The order in which eligible threads are picked does not matter for the yes/no answer. Cost: $O(m \\times n^2)$ operations.'
      },
      {
        term: 'The resource-request algorithm',
        kind: 'method',
        statement: 'When $T_i$ requests a vector $\\text{Request}_i$: **1.** If $\\text{Request}_i \\le \\text{Need}_i$, continue; otherwise raise an error — the thread exceeded its declared maximum. **2.** If $\\text{Request}_i \\le \\text{Available}$, continue; otherwise $T_i$ must wait. **3.** Pretend to grant: $\\text{Available} = \\text{Available} - \\text{Request}_i$; $\\text{Allocation}_i = \\text{Allocation}_i + \\text{Request}_i$; $\\text{Need}_i = \\text{Need}_i - \\text{Request}_i$. Run the safety algorithm: safe — the transaction completes and $T_i$ keeps the resources; unsafe — roll back to the old state and let $T_i$ wait.',
        detail: 'The pretend-and-test structure is the whole of avoidance: each grant is a trial balloon retracted whenever safety would be lost. Note a request can be refused even when the resources are physically available — staying safe is worth more than short-term utilization.'
      }
    ],
    examples: [
      {
        title: 'Safe today, unsafe tomorrow',
        problem: 'A system has 12 instances of one resource type and three threads. Thread $T_0$ requires up to 10 (currently holding 5), $T_1$ up to 4 (holding 2), $T_2$ up to 9 (holding 2); 3 instances are free. Is the state safe? What happens if $T_2$ requests and is granted one more?',
        steps: [
          { label: 'Step 1: Test safety', text: 'Try $\\langle T_1, T_0, T_2 \\rangle$: $T_1$ needs at most $4 - 2 = 2$ more, and $2 \\le 3$ available — grant, let it finish, and its 2 held instances return: 5 free.' },
          { label: 'Step 2: Continue the sequence', text: '$T_0$ needs $10 - 5 = 5$ more and $5 \\le 5$ — it can finish and return its 5, letting the pool reach 10; $T_2$ needs $9 - 2 = 7$ and $7 \\le 10$ — all threads can complete. The state is safe.' },
          { label: 'Step 3: $T_2$ is granted one more', text: 'Holdings become $T_0$: 5, $T_1$: 2, $T_2$: 3 — only 2 remain free.' },
          { label: 'Step 4: Retest safety', text: 'Only $T_1$ can still be satisfied ($2 \\le 2$); once it finishes and returns its 2, only 4 are free. $T_0$ needs 5 and $T_2$ needs 6 — neither fits, and no order of completion helps: no safe sequence exists. The state is unsafe (not yet deadlocked).' },
          { label: 'Step 5: The danger materializes', text: 'If $T_0$ then requests its 5 and $T_2$ its 6, both block — each waiting for resources that only the other’s completion could free: deadlock.' }
        ],
        result: 'Granting one innocent-looking request flipped the system from safe to unsafe. The avoidance rule: that grant should have been postponed until another thread finished — the decision the Banker’s algorithm automates.'
      },
      {
        title: 'The Banker’s safety algorithm, worked',
        problem: 'Five threads $T_0$–$T_4$ share three resource types: A has 10 instances, B has 5, C has 7. The snapshot (Allocation | Max) is below with Available = $(3, 3, 2)$: $$\\begin{array}{c|ccc|ccc} & A & B & C & A & B & C \\\\ \\hline T_0 & 0 & 1 & 0 & 7 & 5 & 3 \\\\ T_1 & 2 & 0 & 0 & 3 & 2 & 2 \\\\ T_2 & 3 & 0 & 2 & 9 & 0 & 2 \\\\ T_3 & 2 & 1 & 1 & 2 & 2 & 2 \\\\ T_4 & 0 & 0 & 2 & 4 & 3 & 3 \\end{array}$$ Is the system in a safe state?',
        steps: [
          { label: 'Step 1: Compute Need = Max − Allocation', text: '$\\text{Need}_{T_0} = (7,5,3) - (0,1,0) = (7,4,3)$; $T_1$: $(1,2,2)$; $T_2$: $(6,0,0)$; $T_3$: $(0,1,1)$; $T_4$: $(4,3,1)$.' },
          { label: 'Step 2: First pass over the threads', text: 'Work = $(3,3,2)$, all Finish false. $T_0$ needs $(7,4,3) \\nleq (3,3,2)$ — skip. $T_1$ needs $(1,2,2) \\le (3,3,2)$ — eligible.' },
          { label: 'Step 3: Finish $T_1$, then $T_3$', text: 'Fold $T_1$’s allocation: Work = $(3,3,2) + (2,0,0) = (5,3,2)$. Next scan: $T_3$ needs $(0,1,1) \\le (5,3,2)$ — Work = $(5,3,2) + (2,1,1) = (7,4,3)$.' },
          { label: 'Step 4: Finish $T_4$, then $T_2$, then $T_0$', text: '$T_4$ needs $(4,3,1) \\le (7,4,3)$ — Work = $(7,4,3) + (0,0,2) = (7,4,5)$. $T_2$ needs $(6,0,0) \\le (7,4,5)$ — Work = $(7,4,5) + (3,0,2) = (10,4,7)$. $T_0$ needs $(7,4,3) \\le (10,4,7)$ — Work = $(10,4,7) + (0,1,0) = (10,5,7)$.' },
          { label: 'Step 5: Verdict', text: 'Finish[i] = true for all five threads, so the state is safe. The witness sequence is $\\langle T_1, T_3, T_4, T_2, T_0 \\rangle$ — the book’s answer; it is not unique (after $T_3$, $T_0$ had also become eligible).' }
        ],
        result: 'The system is safe: $\\langle T_1, T_3, T_4, T_2, T_0 \\rangle$ is a safe sequence — every thread can run to maximum, in that order, on current resources plus the returns of those before it.'
      },
      {
        title: 'Granting a request: $T_1$ asks for $(1, 0, 2)$',
        problem: 'From the same snapshot, thread $T_1$ requests one instance of A and two of C: $\\text{Request}_1 = (1,0,2)$. Can it be granted immediately? And what about a $(3,3,0)$ request from $T_4$, or a $(0,2,0)$ request from $T_0$?',
        steps: [
          { label: 'Step 1: Legality check', text: '$\\text{Request}_1 = (1,0,2) \\le \\text{Need}_1 = (1,2,2)$ — within the declared maximum. $\\text{Request}_1 = (1,0,2) \\le \\text{Available} = (3,3,2)$ — the resources exist. Proceed to the pretend-allocation.' },
          { label: 'Step 2: Pretend to grant', text: 'Available = $(3,3,2) - (1,0,2) = (2,3,0)$; $\\text{Allocation}_1 = (2,0,0) + (1,0,2) = (3,0,2)$; $\\text{Need}_1 = (1,2,2) - (1,0,2) = (0,2,0)$.' },
          { label: 'Step 3: Run the safety algorithm on the new state', text: 'Work = $(2,3,0)$: $T_1$ needs $(0,2,0) \\le (2,3,0)$ — Work = $(2,3,0) + (3,0,2) = (5,3,2)$. $T_3$ needs $(0,1,1) \\le (5,3,2)$ — Work = $(7,4,3)$. $T_4$ needs $(4,3,1) \\le (7,4,3)$ — Work = $(7,4,5)$. $T_0$ needs $(7,4,3) \\le (7,4,5)$ — Work = $(7,5,5)$. $T_2$ needs $(6,0,0) \\le (7,5,5)$ — Work = $(10,5,7)$.' },
          { label: 'Step 4: Grant the request', text: 'All threads finish — the sequence $\\langle T_1, T_3, T_4, T_0, T_2 \\rangle$ certifies the new state safe, so the transaction completes: $T_1$ keeps the resources.' },
          { label: 'Step 5: The two refusals', text: 'A $(3,3,0)$ request from $T_4$ fails step 2 outright — with Available now $(2,3,0)$, three instances of A do not exist, so $T_4$ waits. A $(0,2,0)$ request from $T_0$ passes availability — $(0,2,0) \\le (2,3,0)$ — but the pretend-state is unsafe: after granting, Work = $(2,1,0)$ and **no** thread’s Need fits ($T_1$ needs two B’s, $T_3$ one C, and so on), so no safe sequence exists. The grant is rolled back and $T_0$ waits.' }
        ],
        result: '$\\text{Request}_1 = (1,0,2)$: granted — the new state is safe. $T_4$’s $(3,3,0)$: refused for lack of resources. $T_0$’s $(0,2,0)$: refused even though the resources are available, because spending them would leave the system in an unsafe state — avoidance in action.'
      }
    ],
    keyTakeaways: [
      'Three strategies: ignore (Linux and Windows — deadlocks are rare), prevent or avoid (never deadlock), detect and recover (databases with transaction logs).',
      'Mutual exclusion falls only to sharable resources (spooled printers, read-only files) and preemption only to saveable state (CPU registers, database transactions) — neither negation reaches the mutex locks where deadlocks actually breed.',
      'Hold and wait falls to request-all-up-front or release-then-request, at the price of low utilization and possible starvation.',
      'Total ordering of resource types — always request ascending $F$ values — provably prevents circular wait; dynamic lock acquisition can still defeat it.',
      'Safe state: some completion order $\\langle T_1, \\ldots, T_n \\rangle$ lets every thread reach its maximum on current resources plus earlier returns; unsafe ≠ deadlocked.',
      'Banker’s algorithm: Need = Max − Allocation; the safety algorithm folds finishable threads into Work at $O(m \\times n^2)$; the request algorithm pretends, tests safety, and rolls back if unsafe.',
      'Requests can be denied even when resources are free — safety, not availability, is the criterion.'
    ],
    quiz: [
      {
        q: 'With $\\text{Max}_{T_0} = (7,5,3)$ and $\\text{Allocation}_{T_0} = (0,1,0)$, the Need row for $T_0$ is:',
        options: [`$(7,4,3)$`, `$(7,5,3)$`, `$(0,1,0)$`, `$(7,6,3)$`],
        answer: 0,
        explanation: 'Need is the remaining requirement: $\\text{Need}_{ij} = \\text{Max}_{ij} - \\text{Allocation}_{ij}$, componentwise $(7-0, 5-1, 3-0) = (7,4,3)$. The subtraction is per resource type, never a scalar total.'
      },
      {
        q: 'Requiring every thread to request and be allocated all its resources before it begins execution negates which condition?',
        options: ['Hold and wait', 'Mutual exclusion', 'No preemption', 'Circular wait'],
        answer: 0,
        explanation: 'A thread holding everything it will ever need cannot be waiting for more — hold and wait is impossible. The costs are exactly the two the book lists: resources sit allocated but unused (low utilization), and a thread needing several popular resources may starve.'
      },
      {
        q: 'An unsafe state is one in which:',
        options: ['no safe sequence exists — deadlock is possible but not certain', 'deadlock has definitely occurred', 'all threads are blocked', 'Available exceeds Need for every thread'],
        answer: 0,
        explanation: 'Unsafe means the OS can no longer guarantee a completion order if threads demand their maxima — deadlock becomes possible depending on future requests. Deadlocked states are a subset of unsafe states; the containment is strict.'
      },
      {
        q: 'In the safety algorithm, a thread $T_i$ is selected to “finish” when:',
        options: ['Finish[i] == false and $\\text{Need}_i \\le \\text{Work}$', 'Finish[i] == true and $\\text{Need}_i \\ge \\text{Work}$', '$\\text{Allocation}_i$ is the largest', 'it holds no resources'],
        answer: 0,
        explanation: 'Work plays the role of “resources that could be freed for the taking”: a thread whose remaining need fits could run to completion even in the worst case, so its whole allocation is folded into Work and it is marked finished. Selection order does not affect the final verdict.'
      },
      {
        q: 'The book’s example refuses $T_0$’s request $(0,2,0)$ even though the resources are available. Why?',
        options: ['Granting it would leave the system in an unsafe state, so the trial allocation is rolled back', '$T_0$ had exceeded its declared maximum', 'The request vector exceeded Available', 'Requests of exactly two units are always denied'],
        answer: 0,
        explanation: 'The request passes both legality checks — Need and Available — but the pretend-allocation leaves no thread able to finish: no safe sequence exists. Avoidance rolls the state back and makes $T_0$ wait; physical availability is not the criterion, provable safety is.'
      }
    ,
      // PYQ-pattern — Banker safe sequence (rephrased)
      {
        q: "Types A/B/C have $10$/$5$/$7$ instances. Allocation|Max rows: T0 $0,1,0$|$7,5,3$; T1 $2,0,0$|$3,2,2$; T2 $3,0,2$|$9,0,2$; T3 $2,1,1$|$2,2,2$; T4 $0,0,2$|$4,3,3$. Available $=(3,3,2)$. Which is a safe sequence?",
        options: ["$\\langle T_0,T_1,T_2,T_3,T_4 \\rangle$", "$\\langle T_1,T_3,T_4,T_2,T_0 \\rangle$", "$\\langle T_2,T_0,T_1,T_3,T_4 \\rangle$", "No safe sequence exists"],
        answer: 1,
        explanation: "**Step 1 — Given data:** compute Need $=$ Max $-$ Allocation: T0 $(7,4,3)$, T1 $(1,2,2)$, T2 $(6,0,0)$, T3 $(0,1,1)$, T4 $(4,3,1)$; Work $= (3,3,2)$.\n**Step 2 — Rule:** repeatedly pick unfinished $i$ with Need$_i \\le$ Work, then Work $+=$ Allocation$_i$.\n**Step 3 — Computation:**\n```\nWork(3,3,2): T1 fits -> (5,3,2); T3 fits -> (7,4,3);\nT4 fits -> (7,4,5); T2 fits -> (10,4,7); T0 fits -> (10,5,7)\n```\n**Step 4 — Cross-check:** all Finish true, so state is safe; order among eligible threads does not affect the verdict.\n**Step 5 — Distractors:** starting with T0 fails since $(7,4,3) \\nleq (3,3,2)$; T2-first fails similarly; unsafe verdict contradicts the constructed witness.\n**Step 6 — Conclude:** $\\langle T_1,T_3,T_4,T_2,T_0 \\rangle$ certifies safety."
      },
      // PYQ-pattern — Banker request grant (rephrased)
      {
        q: "From the same snapshot (Available $(3,3,2)$), T1 requests $(1,0,2)$. Can it be granted immediately?",
        options: ["Yes; the pretend state has safe sequence $\\langle T_1,T_3,T_4,T_0,T_2 \\rangle$", "No; it exceeds Need", "No; it exceeds Available", "Yes; without any safety test"],
        answer: 0,
        explanation: "**Step 1 — Given data:** Request$_1 = (1,0,2)$, Need$_1 = (1,2,2)$, Available $= (3,3,2)$.\n**Step 2 — Rule:** check Request $\\le$ Need, then Request $\\le$ Available, then pretend-grant and run safety; roll back if unsafe.\n**Step 3 — Computation:** legality holds on both; pretend gives Available $(2,3,0)$, Allocation$_1 = (3,0,2)$, Need$_1 = (0,2,0)$; safety run:\n```\n(2,3,0): T1 -> (5,3,2); T3 -> (7,4,3); T4 -> (7,4,5); T0 -> (7,5,5); T2 done\n```\n**Step 4 — Cross-check:** all finish, so the new state is safe and the grant completes. A $(0,2,0)$ ask from T0 with the same Available would instead go unsafe and be rolled back.\n**Step 5 — Distractors:** Need and Available both pass, so neither refusal applies; skipping the test abandons avoidance.\n**Step 6 — Conclude:** grant now; T1 keeps the resources."
      }
    ]
  },

  // ------------------------------------------------- 8.7–8.9
  {
    sectionId: 'osc-ch8-s3',
    readingTime: 10,
    intro: 'When a system neither prevents nor avoids deadlock, it must catch it in the act and clean up afterward. Detection ranges from cycle-hunting in wait-for graphs to the matrix algorithm for multiple instances; recovery means terminating or preempting with rollback — and both must beware starving the victim they keep choosing. Livelock closes the chapter’s liveness story: threads that never block and never progress.',
    objectives: [
      'Build wait-for graphs and detect deadlock in single-instance systems',
      'Run the multiple-instance detection algorithm and interpret the Finish vector',
      'Choose a detection frequency — per-request, periodic interval, or CPU-utilization threshold',
      'Recover by termination or by preemption with rollback, and prevent victim starvation',
      'Recognize livelock and use lockdep, BCC and Java thread dumps as detection tools'
    ],
    concepts: [
      {
        term: 'Wait-for graphs',
        kind: 'method',
        statement: 'When every resource type has a **single instance**, the resource-allocation graph collapses into a **wait-for graph**: remove the resource nodes and merge each pair $T_i \\to R_q$, $R_q \\to T_j$ into one edge $T_i \\to T_j$ meaning “$T_i$ is waiting for $T_j$.” A deadlock exists **if and only if** the wait-for graph contains a cycle, so the system maintains it and periodically runs a cycle-detection search — $O(n^2)$ over n threads.',
        detail: 'The biconditional is what makes single-instance systems pleasant: a cycle is a complete verdict, not a warning. The same graph, built live from lock operations, is what the BCC and Java tools automate.'
      },
      {
        term: 'Detection algorithm for multiple instances',
        kind: 'method',
        statement: 'With several instances per type, maintain **Available** (length m), **Allocation** ($n \\times m$) and **Request** ($n \\times m$ — what each thread is asking for **right now**). 1. Work = Available; Finish[i] = false for every thread with $\\text{Allocation}_i \\ne 0$, and Finish[i] = true for any thread holding nothing. 2. Find i with Finish[i] == false and $\\text{Request}_i \\le \\text{Work}$. 3. Work = Work + $\\text{Allocation}_i$; Finish[i] = true; repeat step 2. 4. The system is deadlocked iff Finish[i] == false for some i — and exactly those threads are the deadlocked ones.',
        detail: 'The structure mirrors the safety algorithm with Request in place of Need — the future is unknown here, only current demands. Step 3’s optimism: a thread whose request can be met is assumed to need nothing further and to soon return everything; if that assumption is wrong, any resulting deadlock is simply caught on the next invocation. Cost: $O(m \\times n^2)$.'
      },
      {
        term: 'When to run detection',
        kind: 'insight',
        statement: 'Two factors set the frequency: how often deadlocks are likely, and how many threads are affected when one strikes. The extremes: invoke the algorithm **every time a request cannot be granted immediately** — maximal information (the deadlocked set and the request that closed the cycle) at maximal overhead — or invoke it on a **schedule**: once per hour, or whenever CPU utilization drops below a threshold such as 40 percent, since a deadlock eventually cripples throughput and drags utilization down.',
        detail: 'The middle ground accepts a coarse clock: detection at arbitrary intervals may find many cycles whose triggering request can no longer be identified — all the deadlocked threads jointly caused it, and the “culprit” is a scheduling artifact.'
      },
      {
        term: 'Recovery by termination',
        kind: 'method',
        statement: 'Break a deadlock by aborting processes: **abort all deadlocked processes** — guaranteed to break the cycle, at the cost of discarding all their partial computations — or **abort one at a time until the cycle dissolves**, re-running the detection algorithm after each termination. Partial termination demands a victim: a policy decision weighing priority, time already computed and time remaining, the number and type of resources used, how many more resources are needed, and how many processes must be terminated.',
        detail: 'Aborting is not clean: a process mid-update leaves files in an incorrect state, and terminating a mutex holder leaves shared data with no integrity guarantees even though the lock itself is marked available. Databases embrace this path — a victim transaction is aborted and rolled back, its locks released, the remaining transactions resume, and the aborted transaction is reissued; MySQL picks victims that minimize the number of rows inserted, updated or deleted.'
      },
      {
        term: 'Recovery by preemption and rollback',
        kind: 'method',
        statement: 'Successively **preempt resources** from deadlocked processes and hand them to others until the cycle breaks. Three problems must be addressed: **selecting a victim** — which resources and processes to preempt, minimizing cost (resources held, time consumed); **rollback** — the preempted process must be returned to some safe state, and since identifying one is hard, the simplest policy is a **total rollback** (abort and restart), while rolling back only as far as necessary requires the system to retain much more state, typically via transaction logs; and **starvation**.',
        detail: 'Cost-based victim selection is the mirror of the termination policy: the cheapest casualty is chosen — which is exactly how the same process gets chosen again and again.'
      },
      {
        term: 'Starvation of victims',
        kind: 'insight',
        statement: 'If victim selection is driven by cost factors alone, the same unfortunate process may be picked every time — preempted, rolled back, preempted again — and never complete its task: starvation. The practical fix: ensure a process can be a victim only a small, finite number of times, most commonly by **including the number of rollbacks (its age) in the cost factor**, so a repeatedly victimized process eventually becomes too expensive to choose again.',
        detail: 'Recovery, like every resource policy in this chapter, is really two questions: break the cycle now, and keep the cure from becoming a chronic disease.'
      },
      {
        term: 'Livelock',
        kind: 'definition',
        statement: '**Livelock** is a liveness failure kin to deadlock: threads are unable to proceed, but for a different reason — a thread continuously attempts an action that keeps failing, changing state all the while. It is the two-people-in-a-corridor shuffle: he steps right, she steps left, still blocking each other; he steps left, she steps right; and so on — nobody is blocked, nobody makes progress.',
        detail: 'The code shape: rewriting the two-mutex deadlock with pthread_mutex_trylock() — each thread acquires its first lock, fails trylock on the second, releases everything, and immediately retries; if both retry in lockstep, both spin forever. The general cure is to retry failing operations at random times — precisely the Ethernet approach to packet collisions, where hosts back off a random interval before retransmitting. Livelock is less common than deadlock but equally scheduling-dependent.'
      },
      {
        term: 'Tools: lockdep, BCC and thread dumps',
        kind: 'method',
        statement: '**Linux lockdep** verifies locking order in a (running development) kernel: it dynamically tracks the order in which locks are acquired and reports a possible deadlock when locks are grabbed out of order; it also reports when kernel code acquires a spinlock that is also used in an interrupt handler while interrupts are enabled — a spin-forever scenario. The **BCC deadlock detector** traces a user process’s calls to pthread_mutex_lock()/pthread_mutex_unlock(), builds the wait-for graph of its mutexes and reports a possible deadlock when it detects a cycle. **Java thread dumps** (jstack, Ctrl-\\ on UNIX/macOS, Ctrl-Break on Windows) snapshot every thread and the locks it waits for; the JVM searches the wait-for graph and reports deadlocked threads.',
        detail: 'lockdep is a development tool — too slow for production systems — but its designers reported deadlock reports reduced by an order of magnitude within a few years of its 2006 introduction, and recent revisions extend it to user applications with Pthreads mutexes. Together these tools are deadlock detection made practical: cycle-hunting, outsourced.'
      }
    ],
    examples: [
      {
        title: 'Running the detection algorithm',
        problem: 'Five threads $T_0$–$T_4$ share three types: A has 7 instances, B has 2, C has 6. The snapshot (Allocation | Request) with Available = $(0,0,0)$: $$\\begin{array}{c|ccc|ccc} & A & B & C & A & B & C \\\\ \\hline T_0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\ T_1 & 2 & 0 & 0 & 2 & 0 & 2 \\\\ T_2 & 3 & 0 & 3 & 0 & 0 & 0 \\\\ T_3 & 2 & 1 & 1 & 1 & 0 & 0 \\\\ T_4 & 0 & 0 & 2 & 0 & 0 & 2 \\end{array}$$ Is the system deadlocked? What if $T_2$ requests one more instance of C?',
        steps: [
          { label: 'Step 1: Initialize', text: 'Work = $(0,0,0)$. Every thread has a nonzero Allocation, so Finish[i] = false for all five — including $T_0$, whose Request row is $(0,0,0)$: the book’s zero-request row.' },
          { label: 'Step 2: $T_0$ finishes on an empty request', text: 'Finish[0] == false and $\\text{Request}_0 = (0,0,0) \\le (0,0,0)$ — a request for nothing is always satisfiable. Work = $(0,0,0) + (0,1,0) = (0,1,0)$; Finish[0] = true.' },
          { label: 'Step 3: The cascade completes', text: '$T_2$ requests $(0,0,0) \\le (0,1,0)$ — Work = $(0,1,0) + (3,0,3) = (3,1,3)$. $T_3$ requests $(1,0,0) \\le (3,1,3)$ — Work = $(5,2,4)$. $T_1$ requests $(2,0,2) \\le (5,2,4)$ — Work = $(7,2,4)$. $T_4$ requests $(0,0,2) \\le (7,2,4)$ — Work = $(7,2,6)$.' },
          { label: 'Step 4: Verdict on the original state', text: 'Finish[i] = true for every thread — the system is **not** deadlocked; the completion order $\\langle T_0, T_2, T_3, T_1, T_4 \\rangle$ demonstrates it.' },
          { label: 'Step 5: $T_2$ asks for one more C', text: '$\\text{Request}_2$ becomes $(0,0,1)$. Re-run: $T_0$ still finishes, Work = $(0,1,0)$ — and now $T_1$ needs $(2,0,2)$, $T_2$ needs $(0,0,1)$, $T_3$ needs $(1,0,0)$, $T_4$ needs $(0,0,2)$: not one of them fits $(0,1,0)$.' },
          { label: 'Step 6: Verdict on the new state', text: 'Finish stays false for $T_1$, $T_2$, $T_3$ and $T_4$: those four threads are deadlocked — the resources they would return upon completion are exactly what the others are waiting for.' }
        ],
        result: 'Original state: no deadlock — a zero request lets $T_0$ drain its allocation into Work and unlock the whole cascade. After $T_2$’s single extra request for C: deadlock among $T_1$, $T_2$, $T_3$ and $T_4$, with only $T_0$ able to complete.'
      },
      {
        title: 'From deadlock to livelock with trylock()',
        problem: 'Rewrite the two-mutex deadlock so each thread uses pthread_mutex_trylock() for its second lock and releases both on failure. What behavior emerges?',
        steps: [
          { label: 'Step 1: The new shape', text: 'thread one: lock(first_mutex); if (trylock(second_mutex) succeeds) { work; unlock both; done } else unlock(first_mutex); and loop while not done. thread two mirrors it starting from second_mutex.' },
          { label: 'Step 2: The colliding moment', text: 'thread one acquires first_mutex; thread two acquires second_mutex; each trylock on the other’s mutex fails — the same configuration that deadlocked the original program.' },
          { label: 'Step 3: But nobody blocks', text: 'On failure each thread releases the lock it holds and loops — the states keep changing: acquire, try, fail, release, acquire, try, fail, release…' },
          { label: 'Step 4: Lockstep doom', text: 'If both threads retry at the same rate, they keep meeting in the fatal configuration: both are runnable, both are executing instructions — and neither ever holds both locks. No thread is blocked, and no progress occurs: livelock.' },
          { label: 'Step 5: The cure', text: 'Have each thread retry after a random delay. The two retry streams decorrelate — the Ethernet collision-backoff strategy — and one of them soon finds the other’s lock released, completing its work.' }
        ],
        result: 'Livelock: continuous activity, zero progress — distinct from deadlock’s frozen waiting, and curable by randomness where order creates the pathology.'
      }
    ],
    keyTakeaways: [
      'Single-instance systems: collapse the resource-allocation graph into a wait-for graph — deadlock iff a cycle; maintain it and scan periodically at $O(n^2)$.',
      'Multiple-instance detection mirrors the safety algorithm with Request in place of Need — threads holding nothing start with Finish = true, the algorithm optimistically assumes a satisfiable thread will need nothing more, and exactly the threads left with Finish = false are deadlocked.',
      'Run detection per ungrantable request (precise, expensive) or on a schedule — hourly, or when CPU utilization drops below a threshold like 40 percent.',
      'Recovery by termination: all deadlocked processes at once, or one victim at a time chosen by priority, time invested and remaining, resources held and needed, and how many terminations it takes.',
      'Recovery by preemption: select a victim, roll it back (total rollback is simplest; partial needs transaction-log state), and fold rollback counts into victim cost to avoid starving the same process forever.',
      'Livelock: threads retry failing actions in lockstep — never blocked, never progressing; random backoff (Ethernet-style) breaks the symmetry.',
      'Tooling is cycle-hunting at scale: Linux lockdep (lock-order verification in the kernel), the BCC deadlock detector (wait-for graphs from traced mutex calls) and Java thread dumps via jstack.'
    ],
    quiz: [
      {
        q: 'In the deadlock-detection algorithm, threads whose Allocation row is all zeros are initialized with Finish[i] = true because:',
        options: ['they hold nothing, so they cannot be part of a deadlock and their completion adds nothing', 'they are already deadlocked', 'their requests are always granted immediately', 'the algorithm cannot see them'],
        answer: 0,
        explanation: 'A thread holding no resources cannot be trapped in a hold-and-wait cycle, and there is nothing to reclaim from it — marking it finished at the start simply removes it from consideration while leaving Work unchanged.'
      },
      {
        q: 'The detection algorithm differs from the Banker’s safety algorithm chiefly in that it:',
        options: ['uses the current Request matrix instead of the future-oriented Need matrix', 'does not use an Available vector', 'requires threads to declare their maximum demands', 'runs only when the system is safe'],
        answer: 0,
        explanation: 'Detection knows nothing about the future — it sees only what threads are asking for now. Avoidance needs the declared maxima to compute Need; detection deliberately trades that knowledge for applicability to any system.'
      },
      {
        q: 'Including the number of rollbacks in a victim-selection cost function is designed to prevent:',
        options: ['starvation — the same process being victimized over and over', 'deadlock in the detector itself', 'livelock among waiting threads', 'priority inversion'],
        answer: 0,
        explanation: 'A purely cost-based choice can pick the same cheapest victim every cycle, so it never finishes. Aging the victim by counting its rollbacks raises its cost until the policy eventually chooses somebody else — a finite number of victimizations per process.'
      },
      {
        q: 'Livelock differs from deadlock in that livelocked threads:',
        options: ['keep executing — repeatedly attempting actions that fail — without being blocked', 'are blocked in the kernel waiting for I/O', 'hold all system resources', 'can never be detected'],
        answer: 0,
        explanation: 'Deadlock freezes threads in a wait; livelock sets them marching in place: lock, try, fail, release, repeat. The corridor-politeness image captures it — two people sidestepping each other forever, never stopped, never past.'
      },
      {
        q: 'Linux lockdep reports a possible deadlock when:',
        options: ['it observes locks being acquired out of the established order, or interrupt-unsafe spinlock use', 'CPU utilization exceeds 90 percent', 'a thread waits more than two context switches', 'the wait-for graph is empty'],
        answer: 0,
        explanation: 'lockdep dynamically tracks lock-acquisition order and flags inversions — the circular-wait pattern forming — along with spinlocks acquired with interrupts enabled when the same lock is used in an interrupt handler, which would make the handler spin on a lock the preempted holder still owns.'
      }
    ]
  }
]
