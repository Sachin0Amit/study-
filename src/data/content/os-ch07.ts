import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 7: Synchronization Examples (Sections 7.1 – 7.5)
// Master study content.
// ============================================================================

export const osCh7Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'osc-ch7-s1',
    readingTime: 8,
    intro: 'The bounded-buffer (producer–consumer) problem is the canonical test every synchronization primitive must pass: a pool of n buffers shared between producers that append items and consumers that remove them, with nobody allowed to touch the pool at the wrong moment or overflow it. This section builds the classic three-semaphore solution, shows why the order of the wait() calls is a matter of life and death, and recasts the same design as a monitor and as a ready-made Java class.',
    objectives: [
      'Set up the bounded-buffer problem: the shared pool and the three semaphores mutex, empty and full with their initial values',
      'Write the producer and consumer protocols and explain their symmetry',
      'Show why swapping wait(empty) and wait(mutex) deadlocks a full buffer',
      'Reason about the invariant relationships among the semaphore values during a run',
      'Translate the solution into a monitor with condition variables and recognize Java’s ArrayBlockingQueue as the same idea industrialized'
    ],
    concepts: [
      {
        term: 'The bounded-buffer setting',
        kind: 'definition',
        statement: 'A pool of **n buffers**, each capable of holding one item, is shared by producer and consumer processes. The shared data are: `int n; semaphore mutex = 1; semaphore empty = n; semaphore full = 0`. The binary semaphore **mutex** provides mutual exclusion for accesses to the buffer pool; **empty** counts the number of empty buffers (initialized to n); **full** counts the number of full buffers (initialized to 0).',
        detail: 'The solution is deliberately implementation-neutral: semaphores are used because they are the traditional presentation vehicle, but actual implementations could substitute mutex locks for the binary semaphore. The deep symmetry: we can read the code as the producer producing full buffers for the consumer, or as the consumer producing empty buffers for the producer.'
      },
      {
        term: 'The producer protocol',
        kind: 'method',
        statement: 'The producer loops forever: produce an item in next_produced; **wait(empty)** — reserve a free slot; **wait(mutex)** — enter the pool’s critical section; append next_produced to the buffer; **signal(mutex)**; **signal(full)** — advertise the new occupied slot.',
        detail: 'Reserving a slot with wait(empty) before taking the lock guarantees the producer never even attempts an append when the pool is full. The append itself happens strictly between the wait(mutex)…signal(mutex) pair, so the buffer structure is never modified by two threads at once.'
      },
      {
        term: 'The consumer protocol',
        kind: 'method',
        statement: 'The consumer loops forever: **wait(full)** — claim an occupied slot; **wait(mutex)**; remove an item from the buffer into next_consumed; **signal(mutex)**; **signal(empty)** — return the slot to the free pool; then consume the item.',
        detail: 'The consumer is the exact mirror image of the producer with empty and full exchanged and append replaced by remove — the symmetry makes the pair easy to remember and easy to verify against each other.'
      },
      {
        term: 'Why the order of the waits matters',
        kind: 'insight',
        statement: 'The counting semaphore (empty for the producer, full for the consumer) must be acquired **before** the mutex. If the producer swaps them — wait(mutex) then wait(empty) — then on a full buffer it blocks on empty **while holding mutex**, and the consumer can never enter its own critical section to free a slot: guaranteed deadlock.',
        detail: 'The rule generalizes: never block on a resource count while holding the lock that guards the data. The symmetric failure kills a swapped consumer on an empty buffer. Chapter 6 makes the same point about semaphore misuse in general — omitting a wait() or a signal() either breaks mutual exclusion or blocks a process forever.'
      },
      {
        term: 'Semaphore value invariants',
        kind: 'insight',
        statement: 'At every quiescent point of a correct run: full equals the number of occupied slots, empty equals the number of free slots, and $\\text{empty} + \\text{full} \\le n$, with equality whenever no thread is mid-transfer. The mutex value is always 0 or 1, and it is 0 only while exactly one thread is inside the pool’s critical section.',
        detail: 'These invariants are the standard correctness argument. Producers decrement empty before touching the pool, so producing into a full pool is impossible; consumers decrement full first, so removing from an empty pool is impossible. While a producer sits between wait(empty) and signal(full), one buffer unit is “in transit” — that is why empty + full can dip to $n - 1$ but never exceed n.'
      },
      {
        term: 'Monitor solution with condition variables',
        kind: 'method',
        statement: 'A monitor BoundedBuffer owns the pool, a count, and two condition variables — **notFull** and **notEmpty**. insert() runs: while (count == n) notFull.wait(); append the item; count++; notEmpty.signal(). remove() runs: while (count == 0) notEmpty.wait(); take the item; count−−; notFull.signal().',
        detail: 'The pairing rule: a thread waits on the condition that is blocking it, and after changing the shared state it signals the **opposite** condition — the one whose truth may have just changed for someone else. While a thread executes condition.wait() it releases the monitor lock and re-acquires it when reawakened; the while loop (rather than a single if) rechecks the condition after waking, the defensive idiom that Mesa-style condition variables and Java both require.'
      },
      {
        term: 'Java ArrayBlockingQueue',
        kind: 'insight',
        statement: 'The class **ArrayBlockingQueue** from java.util.concurrent is a ready-made bounded buffer: a fixed-capacity ring protected by a single lock with two internal conditions — put() blocks when the queue is full and take() blocks when it is empty.',
        detail: 'The textbook BoundedBuffer of Section 7.4 — synchronized insert() and remove() with wait() and notify() — is exactly this design hand-rolled; production code should use the library version, which also feeds thread pools through a blocking work queue.'
      }
    ],
    examples: [
      {
        title: 'Swapping the waits: a deadlock in four steps',
        problem: 'Let n = 2 with both slots occupied, and suppose the producer mistakenly executes wait(mutex) before wait(empty). Trace what happens.',
        steps: [
          { label: 'Step 1: Initial state', text: 'mutex = 1, empty = 0, full = 2 — the pool is full and unlocked. The consumer is about to request an item.' },
          { label: 'Step 2: The producer takes the lock', text: 'wait(mutex) succeeds (mutex: 1 → 0). The very next statement, wait(empty), finds empty = 0 — the producer blocks **inside the pool’s critical section**, still holding the lock.' },
          { label: 'Step 3: The consumer tries to enter', text: 'wait(full) succeeds (full = 2), so an occupied slot is claimed — but the following wait(mutex) finds mutex = 0 and blocks the consumer outside the pool.' },
          { label: 'Step 4: Deadlock', text: 'The producer waits for the consumer to signal(empty); the consumer waits for the producer to signal(mutex). Each holds what the other needs, and neither can proceed — forever.' }
        ],
        result: 'One swapped line converts a correct program into a deadlock that strikes every time the buffer is full. The symmetric bug — wait(mutex) before wait(full) in the consumer — deadlocks whenever the buffer is empty.'
      },
      {
        title: 'Accounting the semaphores through a full cycle',
        problem: 'Let n = 3 with the pool empty. Track (mutex, empty, full) through one complete produce–consume cycle.',
        steps: [
          { label: 'Step 1: Initial state', text: '(1, 3, 0): unlocked, three free slots, zero occupied slots.' },
          { label: 'Step 2: The producer reserves and enters', text: 'wait(empty): empty 3 → 2 — a slot is spoken for. wait(mutex): mutex 1 → 0. The item is appended; note full still reads 0, because the producer has not yet advertised it.' },
          { label: 'Step 3: The producer exits and advertises', text: 'signal(mutex): 0 → 1; signal(full): 0 → 1. Invariant check: empty + full = 2 + 1 = 3 = n.' },
          { label: 'Step 4: The consumer mirrors', text: 'wait(full): 1 → 0; wait(mutex): 1 → 0; the item is taken; signal(mutex): 0 → 1; signal(empty): 2 → 3.' },
          { label: 'Step 5: Steady state', text: 'The triple returns to (1, 3, 0) — exactly the initial values, as a complete produce–consume cycle must restore every semaphore.' }
        ],
        result: 'Every intermediate value is legal: empty + full never exceeds n, and full never counts an item that is not yet in the pool — the invariants that make the three-semaphore solution correct.'
      }
    ],
    keyTakeaways: [
      'Three semaphores: mutex = 1 guards the pool, empty = n counts free slots, full = 0 counts occupied slots.',
      'Producer: wait(empty); wait(mutex); append; signal(mutex); signal(full) — the consumer is the mirror image with empty and full exchanged.',
      'The counting semaphore is always taken before the mutex; swapping them deadlocks a full (or empty) pool with the lock held.',
      'Invariants: full = occupied slots, empty = free slots, $\\text{empty} + \\text{full} \\le n$; a producer between wait(empty) and signal(full) owns one buffer unit in transit.',
      'The monitor version waits on notFull/notEmpty and signals the opposite condition after changing count — and Java’s ArrayBlockingQueue ships that design as a library class.'
    ],
    quiz: [
      {
        q: 'In the standard bounded-buffer solution, the three semaphores are initialized as:',
        options: ['mutex = 1, empty = n, full = 0', 'mutex = 0, empty = n, full = n', 'mutex = n, empty = 1, full = 0', 'mutex = 1, empty = 0, full = n'],
        answer: 0,
        explanation: 'mutex guards the pool and starts unlocked (1); every one of the n slots starts empty (empty = n); nothing is produced yet (full = 0). The other assignments would let the first producer or consumer bypass the pool accounting entirely.'
      },
      {
        q: 'A producer that executes wait(mutex) before wait(empty) deadlocks on a full buffer because:',
        options: ['the producer blocks while holding the mutex, so no consumer can enter the pool to free a slot', 'semaphores may not be nested', 'wait(empty) must always be the final operation of the loop', 'the consumer signals empty before removing an item'],
        answer: 0,
        explanation: 'The blocked producer owns the very lock the consumer needs in order to remove an item and eventually signal(empty). Nesting semaphore calls is perfectly legal — it is blocking on the inner one while holding the outer one that is fatal.'
      },
      {
        q: 'While the producer sits between wait(empty) and signal(full), the values of empty and full satisfy:',
        options: ['empty + full = n − 1: the in-transit item is owned by the producer', 'empty + full = n still holds', 'full already counts the item being appended', 'empty is temporarily negative'],
        answer: 0,
        explanation: 'The reserved slot has left empty but has not yet appeared in full — the missing unit is the item in transit. Once the producer executes signal(full), the sum returns to n.'
      },
      {
        q: 'In the monitor version, after a consumer successfully removes an item from a non-empty pool it signals:',
        options: ['notFull, in case a producer is waiting on a full pool', 'notEmpty, in case another consumer is waiting', 'both condition variables', 'the monitor exit rather than a condition'],
        answer: 0,
        explanation: 'Removing an item changes the state that producers care about: space. The pairing rule is to signal the condition opposite to the one your own action just made more true — a consumer frees capacity, so it signals notFull.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'osc-ch7-s2',
    readingTime: 10,
    intro: 'Two more classics stress synchronization in different directions. Readers–writers lets many readers share data but demands exclusive access for writers — and the obvious solution quietly starves one side. The dining philosophers distills resource allocation into five hungry diners and five chopsticks, where the natural strategy deadlocks the entire table. Both problems teach the same lesson: correctness requires reasoning about waits, not just about locks.',
    objectives: [
      'State the readers–writers problem and its two classical variants',
      'Walk the first readers–writers solution — readcount, mutex and rw_mutex — including how waiting readers queue',
      'Explain why reader priority starves writers and how ordering arrivals removes starvation',
      'Present the dining-philosophers problem and prove the naive semaphore solution can deadlock',
      'Compare the three deadlock remedies — at most four diners, asymmetric ordering, and the monitor with test(i)'
    ],
    concepts: [
      {
        term: 'The readers–writers problem',
        kind: 'definition',
        statement: 'A shared database is accessed by **readers**, who may share it simultaneously with no adverse effects, and **writers**, who require exclusive access while writing. The **first readers–writers problem** requires that no reader be kept waiting unless a writer has already obtained permission — no reader waits for other readers just because a writer is waiting. The **second problem** requires that once a writer is ready, it performs its write as soon as possible — no new readers may start.',
        detail: 'A solution to either variant can starve the other side: writers starve in the first (a stream of readers never releases the object), readers starve in the second. Starvation-free variants exist and typically order all arrivals through a single queue.'
      },
      {
        term: 'Data structures of the first solution',
        kind: 'notation',
        statement: 'Reader processes share: `semaphore rw_mutex = 1; semaphore mutex = 1; int read_count = 0`. **rw_mutex** is common to readers and writers — mutual exclusion for the object itself. **mutex** ensures mutual exclusion when read_count is updated. **read_count** tracks how many processes are currently reading.',
        detail: 'rw_mutex is used only by the first reader to enter and the last reader to leave — readers in the middle of a reading crowd never touch it, which is exactly what lets them share the object.'
      },
      {
        term: 'The writer and reader protocols',
        kind: 'method',
        statement: 'Writer: while (true) { **wait(rw_mutex)**; …perform writing…; **signal(rw_mutex)** }. Reader: wait(mutex); read_count++; if (read_count == 1) **wait(rw_mutex)**; signal(mutex); …perform reading…; wait(mutex); read_count−−; if (read_count == 0) **signal(rw_mutex)**; signal(mutex).',
        detail: 'The if (read_count == 1) and if (read_count == 0) tests are the entire trick: the first reader locks out writers on everyone’s behalf, the last reader lets them back in, and every reader in between enters and leaves freely under plain mutex protection of the counter.'
      },
      {
        term: 'How waiting readers queue',
        kind: 'insight',
        statement: 'If a writer is in its critical section and n readers are waiting, then **one reader is queued on rw_mutex and the other $n - 1$ are queued on mutex**. When the writer executes signal(rw_mutex), the scheduler may resume either the waiting readers or a single waiting writer.',
        detail: 'The asymmetry comes from the read_count gate: the first waiting reader to get mutex will find itself at read_count == 1 and block on rw_mutex; the rest complete their increment, release mutex, and then stall at wait(mutex) for their turn to decrement later. The choice of whom to wake belongs to the scheduler, not the algorithm.'
      },
      {
        term: 'Starvation, fairness and reader–writer locks',
        kind: 'insight',
        statement: 'The first solution starves writers whenever the reader stream never ends. A starvation-free variant routes **all** arrivals — readers and writers alike — through a single FIFO-order semaphore acting as an entrance gate, so a waiting writer blocks readers that arrive after it; nobody leapfrogs anybody.',
        detail: 'Some systems package the idea as **reader–writer locks**: acquiring requires specifying read or write mode; multiple readers may hold the lock in read mode, only one writer may hold it in write mode. They pay off when the read/write roles are easy to distinguish and readers heavily outnumber writers — the extra concurrency repays the extra setup overhead.'
      },
      {
        term: 'The dining-philosophers problem',
        kind: 'definition',
        statement: 'Five philosophers sit at a circular table with five single chopsticks between neighbors. A philosopher thinks, then gets hungry, then tries to pick up the two chopsticks closest to her — **one at a time**, never taking a chopstick already in a neighbor’s hand — eats without putting them down, then returns both and thinks again.',
        detail: 'The problem is classic not for its culinary realism but as the simplest embodiment of a large class of concurrency-control problems: allocating several resources among several processes in a deadlock-free and starvation-free manner.'
      },
      {
        term: 'The naive semaphore solution and its deadlock',
        kind: 'method',
        statement: 'Represent each chopstick with a semaphore — `semaphore chopstick[5]`, all initialized to 1. Philosopher i runs: wait(chopstick[i]); wait(chopstick[(i + 1) % 5]); … eat …; signal(chopstick[i]); signal(chopstick[(i + 1) % 5]); … think … . This guarantees no two neighbors eat simultaneously, but it must be rejected: it can deadlock.',
        detail: 'If all five philosophers become hungry at the same time and each grabs her left chopstick, every element of chopstick is 0 and every philosopher waits forever for her right chopstick — a textbook circular wait.'
      },
      {
        term: 'Three remedies for the deadlock',
        kind: 'method',
        statement: '**(1) Room for four:** allow at most n − 1 = 4 philosophers to sit at the table simultaneously (a room semaphore acquired before grabbing chopsticks), so at least one hungry philosopher can always get both. **(2) All-or-nothing pickup:** allow a philosopher to pick up her chopsticks only if both are available, performing the pickup in a critical section. **(3) Asymmetric ordering:** an odd-numbered philosopher picks up her left chopstick first, an even-numbered philosopher picks up her right first — breaking the all-grab-left cycle.',
        detail: 'Any of the three negates the circular-wait condition. But a deadlock-free solution does not necessarily eliminate starvation — a satisfactory solution must also guarantee that no philosopher starves to death while her neighbors keep alternating.'
      },
      {
        term: 'The monitor solution with test(i)',
        kind: 'method',
        statement: 'The monitor DiningPhilosophers keeps `enum {THINKING, HUNGRY, EATING} state[5]` and `condition self[5]`. pickup(i): state[i] = HUNGRY; test(i); if (state[i] != EATING) self[i].wait(). putdown(i): state[i] = THINKING; test((i + 4) % 5); test((i + 1) % 5). test(i) promotes i to EATING — with self[i].signal() — exactly when state[(i + 4) % 5] != EATING and state[i] == HUNGRY and state[(i + 1) % 5] != EATING.',
        detail: 'Each philosopher invokes pickup(i) … eat … putdown(i) around her meal. The restriction “pick up only if both are available” is enforced inside the monitor: a hungry philosopher who cannot eat blocks on her own condition variable, and a departing philosopher’s two test() calls — for her left and right neighbors — are what may awaken them. The solution is deadlock-free, yet starvation remains possible in principle.'
      }
    ],
    examples: [
      {
        title: 'read_count at work: two readers, one waiting writer',
        problem: 'Readers R1 and R2 are reading; writer W1 then arrives, followed by reader R3. Trace read_count and the semaphores until the writer enters.',
        steps: [
          { label: 'Step 1: R1 arrives', text: 'wait(mutex); read_count: 0 → 1. Because read_count == 1, R1 executes wait(rw_mutex) and acquires it (rw_mutex: 1 → 0). signal(mutex). R1 reads.' },
          { label: 'Step 2: R2 arrives', text: 'wait(mutex); read_count: 1 → 2. Not 1 — so R2 skips rw_mutex entirely. signal(mutex). Two readers are now inside the object simultaneously.' },
          { label: 'Step 3: W1 arrives', text: 'wait(rw_mutex) finds it at 0 — the writer blocks and is queued on rw_mutex.' },
          { label: 'Step 4: R3 arrives', text: 'read_count: 2 → 3, still not 1 — R3 also skips rw_mutex and joins the reading. The waiting writer watches a third reader sail past: reader priority in action.' },
          { label: 'Step 5: The readers drain', text: 'R1 leaves: read_count 3 → 2, not 0. R2 leaves: 2 → 1. R3 leaves: 1 → 0 — so R3 executes signal(rw_mutex), and the writer finally enters.' }
        ],
        result: 'read_count gates rw_mutex at exactly its edges (the 0 → 1 and 1 → 0 transitions). The middle readers commute freely — which is precisely why an unending reader stream starves the writer forever.'
      },
      {
        title: 'Five philosophers, five left chopsticks',
        problem: 'Show how the naive semaphore solution deadlocks when all five philosophers become hungry at once.',
        steps: [
          { label: 'Step 1: Simultaneous hunger', text: 'All five philosophers get hungry at the same moment, and each immediately executes wait(chopstick[i]) on her left chopstick.' },
          { label: 'Step 2: The left chopsticks vanish', text: 'Every semaphore chopstick[0…4] goes 1 → 0. Each chopstick is now held by the philosopher on its right (her left hand).' },
          { label: 'Step 3: Everyone reaches right', text: 'Each philosopher next executes wait(chopstick[(i + 1) % 5]) — her right chopstick, which is exactly her right neighbor’s left chopstick, value 0.' },
          { label: 'Step 4: The circle closes', text: 'All five wait() calls block forever: philosopher 0 waits for a chopstick held by philosopher 1, who waits on 2, on 3, on 4, who waits on 0 — circular wait, the fourth necessary condition of Chapter 8, realized at the dinner table.' }
        ],
        result: 'Deadlock: five blocked philosophers, five held chopsticks, zero progress. Note that the failure needs the unlucky schedule — at other times the naive solution works, which is what makes such bugs so treacherous to test.'
      },
      {
        title: 'The monitor solution at dinner',
        problem: 'All five philosophers invoke pickup(i) simultaneously (in order 0 through 4), then philosopher 0 finishes first and philosopher 2 second. Who eats, and when?',
        steps: [
          { label: 'Step 1: pickup(0)', text: 'state[0] = HUNGRY; test(0): neighbors 4 and 1 are THINKING → state[0] = EATING (self[0].signal() finds no waiter — a no-op). Philosopher 0 eats.' },
          { label: 'Step 2: pickup(1) blocks', text: 'state[1] = HUNGRY; test(1): left neighbor state[0] == EATING → the test fails. Since state[1] != EATING, philosopher 1 executes self[1].wait() and suspends inside the monitor.' },
          { label: 'Step 3: pickup(2) succeeds, 3 and 4 block', text: 'test(2): neighbors 1 and 3 not EATING → state[2] = EATING — philosophers 0 and 2, non-adjacent, eat concurrently. test(3): left neighbor 2 is EATING → self[3].wait(). test(4): right neighbor 0 is EATING → self[4].wait().' },
          { label: 'Step 4: putdown(0)', text: 'state[0] = THINKING. test((0 + 4) % 5) = test(4): neighbor 3 is HUNGRY-not-EATING, state[4] == HUNGRY, and 0 is now THINKING → state[4] = EATING with self[4].signal() — philosopher 4 wakes and eats. test(1): right neighbor 2 still EATING → philosopher 1 keeps waiting.' },
          { label: 'Step 5: putdown(2)', text: 'state[2] = THINKING. test(1): neighbors 0 and 2 both THINKING → philosopher 1 eats. test(3): right neighbor 4 now EATING → philosopher 3 still waits her turn.' }
        ],
        result: 'Mutual exclusion holds (never two neighbors eating), no deadlock ever forms (a departing philosopher’s two test() calls immediately promote any runnable neighbor), and dinner proceeds: 0 and 2, then 4, then 1 — with philosopher 3 fed as soon as a neighbor yields. Starvation is not ruled out, merely not forced.'
      }
    ],
    keyTakeaways: [
      'Readers share; writers need exclusivity. The first readers–writers problem favors readers; the second favors writers; either can starve the disfavored side.',
      'The gate trick: only the first reader waits on rw_mutex, only the last reader signals it — middle readers never touch it.',
      'When a writer is active and n readers wait: one reader queues on rw_mutex, the other n − 1 queue on mutex; a starvation-free variant orders all arrivals through one FIFO gate.',
      'The naive philosophers solution (grab left, then right) deadlocks when everyone grabs left at once — circular wait around the table.',
      'Fixes: allow only four at the table, pick up both chopsticks atomically, or make ordering asymmetric (odd left-first, even right-first).',
      'The monitor solution tracks state[5] and self[5] with test(i): a philosopher eats only if she is HUNGRY and both neighbors are not EATING — deadlock-free, but starvation-free only with more machinery.',
      'Deadlock-free does not imply starvation-free — the two liveness properties must be argued separately.'
    ],
    quiz: [
      {
        q: 'In the first readers–writers solution, a reader executes wait(rw_mutex) only when:',
        options: ['read_count becomes 1 — it is the first reader entering', 'read_count becomes 0 — it is the last reader leaving', 'a writer is waiting', 'rw_mutex is already held by a writer'],
        answer: 0,
        explanation: 'The first reader acquires rw_mutex on everyone’s behalf; the last reader releases it. Readers in the middle (read_count not at 1 or 0) never touch rw_mutex — that is what lets them share the object.'
      },
      {
        q: 'A writer is inside its critical section and three readers are waiting. Where are the readers queued?',
        options: ['One on rw_mutex and the other two on mutex', 'All three on rw_mutex', 'All three on mutex', 'One on mutex and the other two on rw_mutex'],
        answer: 0,
        explanation: 'Exactly one reader can be the “first” to reach read_count == 1 and block on rw_mutex; the others complete their counter updates and later block at mutex on the exit path. When the writer signals rw_mutex, the scheduler chooses whom to resume.'
      },
      {
        q: 'The asymmetric dining-philosophers solution prevents deadlock because:',
        options: ['with one philosopher reaching right-first, a cycle of all-left acquisitions cannot form', 'it reduces the number of philosophers to four', 'chopsticks become sharable resources', 'each philosopher releases her left chopstick while waiting'],
        answer: 0,
        explanation: 'Four philosophers reaching left-first and one reaching right-first cannot all hold exactly one chopstick in a circular chain — the odd one out competes for a chopstick in the opposite direction, so at least one pair of neighbors can always complete. The table still seats five; only the order of grabs changes.'
      },
      {
        q: 'In the monitor solution, philosopher i may be set to EATING by test(i) only if:',
        options: ['state[i] == HUNGRY and both neighbors are not EATING', 'state[i] == THINKING and both neighbors are EATING', 'she holds both chopstick semaphores', 'she has waited at least one turn'],
        answer: 0,
        explanation: 'test(i) checks state[(i + 4) % 5] != EATING, state[i] == HUNGRY, and state[(i + 1) % 5] != EATING. Chopsticks are implicit in the neighbors’ states — no semaphores are needed inside the monitor.'
      },
      {
        q: 'Which statement about the dining-philosophers solutions is TRUE?',
        options: ['A deadlock-free solution is not necessarily starvation-free', 'A starvation-free solution is automatically deadlock-free in every schedule', 'The monitor solution eliminates all liveness hazards', 'Limiting the table to four philosophers also prevents starvation'],
        answer: 0,
        explanation: 'Deadlock and starvation are independent liveness failures. The monitor solution is deadlock-free yet a philosopher can still starve; seating only four breaks circular wait but says nothing about fairness — every remedy needs its own starvation argument.'
      }
    ,
      // PYQ-pattern — readers writers entry (rephrased)
      {
        q: "In the first readers–writers solution (`read_count`, `mutex`, `rw_mutex`), when does a reader acquire `rw_mutex`?",
        options: ["Never; readers ignore `rw_mutex`", "On every entry and exit", "Only when `read_count` becomes $0$", "Only when `read_count` becomes $1$ (first reader in)"],
        answer: 3,
        explanation: "**Step 1 — Given data:** `rw_mutex = 1`, `mutex = 1`, `read_count = 0`.\n**Step 2 — Rule:** reader does `wait(mutex); read_count++; if (read_count == 1) wait(rw_mutex); signal(mutex)`; exit does the mirror with `if (read_count == 0) signal(rw_mutex)`.\n**Step 3 — Apply:** R1 makes count $0 \\to 1$ and locks out writers for the whole crowd; R2 makes $1 \\to 2$ and skips `rw_mutex`, sharing freely.\n**Step 4 — Cross-check:** with one writer active and three readers waiting, one reader queues on `rw_mutex` and two on `mutex` — exactly the edge-gating behavior.\n**Step 5 — Distractors:** every-entry locking would serialize readers; $0$-test belongs to the last leaver; ignoring `rw_mutex` lets writers corrupt reads.\n**Step 6 — Conclude:** first reader locks, last reader unlocks."
      },
      // PYQ-pattern — dining philosophers remedy (rephrased)
      {
        q: "All five philosophers hold their left chopstick and wait for the right one. Which change breaks the circular wait while still seating five?",
        options: ["Seat only four philosophers forever", "Odd philosophers pick left first, even pick right first", "Let chopsticks be shared freely", "Release the left chopstick only after eating"],
        answer: 1,
        explanation: "**Step 1 — Given data:** five held lefts, five pending rights, a directed cycle.\n**Step 2 — Rule:** deadlock needs all four conditions; breaking circular wait suffices. Asymmetric ordering makes the grab directions differ.\n**Step 3 — Apply:** four reach left, one reaches right; the odd one out contends oppositely, so at least one neighbor pair can complete and release.\n**Step 4 — Cross-check:** alternatives also work (at most four seated, or atomic both-or-none pickup in a critical section), but seating five with asymmetry preserves capacity.\n**Step 5 — Distractors:** permanent four-seating wastes a seat; free sharing drops mutual exclusion; release-after-eating never happens because nobody can start eating.\n**Step 6 — Conclude:** asymmetric order breaks the all-left cycle."
      }
    ]
  },

  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'osc-ch7-s3',
    readingTime: 9,
    intro: 'Real kernels do not use one tool — they use a toolbox, chosen by how long a lock will be held and how many cores must cooperate. Windows masks interrupts and spins; Linux counts preemption depth and pairs spinlocks with sleeping mutexes. Above the kernels sits POSIX, the portable user-level API — mutexes, named and unnamed semaphores, and condition variables with their unforgiving while-loop rule.',
    objectives: [
      'Describe how Windows synchronizes kernel data on single- and multiprocessor systems, and how dispatcher objects use signaled states',
      'Explain Linux’s atomic integers, spinlocks, preemption disabling and mutex locks — and when each is appropriate',
      'Use the POSIX mutex, named/unnamed semaphore and condition-variable APIs',
      'Apply the always-recheck-in-a-while-loop rule for condition variables'
    ],
    concepts: [
      {
        term: 'Windows: interrupts and spinlocks',
        kind: 'insight',
        statement: 'On a single-processor system, the Windows kernel protects a global resource by **temporarily masking interrupts** for every interrupt handler that may also touch that resource. On a multiprocessor system it uses **spinlocks** — but only to protect short code segments, and a thread is never preempted while holding one.',
        detail: 'The deeper Windows mechanism is the interrupt request level (IRQL): code raises its IRQL so that lower-priority interrupts are masked entirely, replacing locks with scheduling discipline on a single core (the book covers IRQLs with Windows internals in Chapter 21). For longer holds, dispatcher objects take over.'
      },
      {
        term: 'Windows dispatcher objects',
        kind: 'definition',
        statement: 'Threads outside the kernel synchronize via **dispatcher objects**, which include mutex locks, semaphores, events and timers. Each object is in a **signaled state** (available — a thread acquiring it does not block) or a **nonsignaled state** (a thread attempting to acquire it blocks and joins the object’s waiting queue).',
        detail: 'When an object moves to signaled, the kernel moves threads from waiting to ready: exactly one for a mutex (a mutex has a single owner), but **all** waiting threads for an event. Events thus behave like condition-variable broadcasts; timers notify one or more threads that a time interval expired. A mutex’s state diagram is simply: acquire → nonsignaled; owner releases → signaled.'
      },
      {
        term: 'Windows critical-section objects',
        kind: 'insight',
        statement: 'A **critical-section object** is a user-mode mutex that can often be acquired and released with no kernel intervention at all. On a multiprocessor system it spins briefly while waiting; if the spin does not pay off, the acquiring thread allocates a kernel mutex and yields its CPU.',
        detail: 'The kernel mutex is allocated only when contention actually occurs — and in practice there is very little contention — so critical-section objects are significantly cheaper than full kernel dispatcher objects.'
      },
      {
        term: 'Linux atomic integers',
        kind: 'method',
        statement: 'The simplest Linux kernel synchronization is the opaque type **atomic_t**: atomic_set(&counter, 5), atomic_add(10, &counter), atomic_sub(4, &counter), atomic_inc(&counter), value = atomic_read(&counter) — every arithmetic operation is performed without interruption.',
        detail: 'Atomic integers are ideal for isolated counters: no locking overhead at all. Their reach is limited to single-variable updates — when several variables together form the race condition, real locking tools are required.'
      },
      {
        term: 'Linux spinlocks and preemption control',
        kind: 'method',
        statement: 'On SMP machines the fundamental Linux lock is a **spinlock**, held only for short durations. On a single processing core, spinlocks are inappropriate and are replaced by **disabling kernel preemption** — acquiring the spinlock becomes preempt_disable() and releasing it becomes preempt_enable(). Each task carries a preempt_count in its thread-info structure, incremented on lock acquisition; if it is greater than 0 for the running task, the kernel must not be preempted.',
        detail: 'Both spinlocks and mutex locks in the Linux kernel are **nonrecursive**: reacquiring a lock you already hold blocks you on yourself. The rule of thumb from Chapter 6: spin only when the hold will be shorter than about two context switches; spinlocks (with preemption control) are for short holds, semaphores and mutex locks for longer ones.'
      },
      {
        term: 'Linux mutex locks, semaphores and reader–writer variants',
        kind: 'method',
        statement: 'For longer critical sections, the kernel offers **mutex locks**: a task calling mutex_lock() sleeps if the lock is unavailable and is awakened when the owner calls mutex_unlock(). Semaphores and reader–writer versions of both spinlocks and semaphores are also provided — the reader–writer spinlock family includes **seqlocks** for data that is mostly read (readers retry when a writer bumps a sequence number) and **RCU** (read-copy-update), in which readers never block at all and writers copy, update, and defer reclamation until old readers finish.',
        detail: 'Linux before Version 2.6 was a nonpreemptive kernel; it is now fully preemptive even in kernel mode, which is precisely why this toolbox — atomics, spinlocks, sleeping mutexes, semaphores — matters so much.'
      },
      {
        term: 'POSIX mutex locks',
        kind: 'method',
        statement: 'Pthreads uses `pthread_mutex_t` with **pthread_mutex_init(&mutex, NULL)** (NULL selects default attributes), **pthread_mutex_lock(&mutex)** to acquire — blocking until the owner calls **pthread_mutex_unlock(&mutex)** — plus **pthread_mutex_trylock()** for a nonblocking attempt. All mutex functions return 0 on success and a nonzero error code otherwise.',
        detail: 'A mutex attribute object (pthread_mutexattr_t) can customize the lock — notably to make it shareable between separate processes rather than only between threads of one process.'
      },
      {
        term: 'POSIX semaphores: named and unnamed',
        kind: 'method',
        statement: 'POSIX specifies **named** semaphores — created with **sem_open("/SEM", O_CREAT, 0666, 1)**, so unrelated processes can share one semaphore simply by referring to its name — and **unnamed** semaphores — created with **sem_init(&sem, pshared, value)**, where pshared = 0 restricts the semaphore to threads of the creating process and a nonzero value lets it live in shared memory for use across processes. Both are operated on with **sem_wait()** and **sem_post()**.',
        detail: 'Named semaphores hang around once created: later sem_open() calls with the same name return a descriptor to the existing semaphore. In the example, O_CREAT creates if absent, 0666 grants read/write access to other processes, and the initial value is 1 — a classic mutual-exclusion semaphore.'
      },
      {
        term: 'POSIX condition variables and the while-loop rule',
        kind: 'method',
        statement: 'A `pthread_cond_t` is always paired with a mutex: the mutex **must be held** before calling **pthread_cond_wait(&cond_var, &mutex)**, which atomically releases the mutex, blocks, and — when signaled — reacquires the mutex before returning. A modifier calls **pthread_cond_signal()** (or pthread_cond_broadcast() for all waiters), and the signal does **not** release the mutex — the subsequent pthread_mutex_unlock() does.',
        detail: 'The waiting code must wrap the condition in a while loop — while (a != b) pthread_cond_wait(&cond_var, &mutex); — so the condition is rechecked after being signaled. Between the signal and the waiter’s reacquisition, another thread may have consumed the event or made the condition false again; the loop converts a possibly stale wakeup into a correct re-evaluation.'
      }
    ],
    examples: [
      {
        title: 'Linux atomic operations, one value at a time',
        problem: 'An atomic integer val starts uninitialized. Compute its value after: atomic_set(&val, 10); atomic_sub(8, &val); atomic_inc(&val); atomic_inc(&val); atomic_add(6, &val); atomic_sub(3, &val).',
        steps: [
          { label: 'Step 1: Set', text: 'atomic_set(&val, 10) — val = 10.' },
          { label: 'Step 2: Subtract', text: 'atomic_sub(8, &val) — val = 10 − 8 = 2.' },
          { label: 'Step 3: Increment twice', text: 'atomic_inc(&val); atomic_inc(&val) — val = 2 + 1 + 1 = 4.' },
          { label: 'Step 4: Add and subtract', text: 'atomic_add(6, &val) — val = 10; atomic_sub(3, &val) — val = 7.' }
        ],
        result: 'val = 7. Every operation was indivisible, so even a storm of concurrent updates on other cores could not interleave inside these six steps.'
      },
      {
        title: 'A condition-variable handshake, correctly looped',
        problem: 'A consumer waits for count > 0 on a shared variable guarded by mutex, and a producer makes it true. Walk one full wait/signal round trip.',
        steps: [
          { label: 'Step 1: The consumer waits', text: 'Holding the mutex, the consumer evaluates while (count == 0) — true — and calls pthread_cond_wait(&cond_var, &mutex): the mutex is released, the consumer blocks, and the shared data is protected the entire time.' },
          { label: 'Step 2: The producer signals', text: 'The producer acquires the mutex, sets count = 1, and calls pthread_cond_signal(&cond_var). The consumer is marked eligible to run — but the producer still owns the mutex, and the signal released nothing.' },
          { label: 'Step 3: The unlock completes the handoff', text: 'The producer’s pthread_mutex_unlock(&mutex) is what frees the lock; the consumer reacquires it inside pthread_cond_wait and returns from the call — still inside the while loop.' },
          { label: 'Step 4: The recheck saves the day', text: 'The consumer re-evaluates count == 0 — now false — and proceeds. Had another consumer drained the item in the interim, the recheck would send this consumer back to pthread_cond_wait without ever touching inconsistent data.' }
        ],
        result: 'The handshake: wait releases the lock and sleeps; signal wakes without unlocking; unlock is what actually transfers ownership. The while loop around the wait is the difference between “usually works” and “correct.”'
      }
    ],
    keyTakeaways: [
      'Windows on one core masks interrupts (via IRQL discipline) instead of locking; on many cores it spins — briefly, and never preempting a spinlock holder.',
      'Dispatcher objects (mutex, semaphore, event, timer) live in signaled/nonsignaled states; a signaled mutex wakes exactly one waiter, an event wakes all.',
      'Critical-section objects are user-mode mutexes that escalate to a kernel mutex only under contention.',
      'Linux: atomic_t for counters, spinlocks plus preempt_count for short holds on many cores, disable-preemption instead of spinning on one core, sleeping mutex locks for long holds — all nonrecursive.',
      'POSIX semaphores come named (sem_open with "/name") for sharing across unrelated processes and unnamed (sem_init with pshared) for threads or shared memory.',
      'pthread_cond_wait releases the mutex while sleeping and reacquires it before returning; pthread_cond_signal does not release anything — the unlock does.',
      'Always recheck the condition in a while loop after pthread_cond_wait returns.'
    ],
    quiz: [
      {
        q: 'On a single-processor system, the Windows kernel typically protects a global resource by:',
        options: ['temporarily masking interrupts that could touch it', 'acquiring a spinlock', 'disabling kernel preemption only', 'queueing all threads on a dispatcher object'],
        answer: 0,
        explanation: 'With one core there is nothing to spin against — the only competing access can come from an interrupt handler, so masking those interrupts is both sufficient and fast. Spinlocks are the multiprocessor tool; disabling preemption is Linux’s single-core strategy.'
      },
      {
        q: 'When a mutex dispatcher object in Windows moves to its signaled state, the kernel moves how many waiting threads to ready?',
        options: ['Exactly one — a mutex has a single owner', 'All waiting threads', 'Half of the waiting threads, rounded up', 'None — threads must poll the state'],
        answer: 0,
        explanation: 'A mutex may be owned by only one thread, so only one waiter is selected. An event object is the contrast: every thread waiting on the event is moved to ready.'
      },
      {
        q: 'On a single-core Linux system, the kernel replaces spinlocks with:',
        options: ['disabling and enabling kernel preemption, tracked by preempt_count', 'atomic integers', 'semaphores with long waits', 'dispatcher objects'],
        answer: 0,
        explanation: 'Rather than holding a spinlock, the kernel disables kernel preemption; rather than releasing it, it enables preemption. The per-task preempt_count records how many locks are held — greater than 0 means the running kernel task must not be preempted.'
      },
      {
        q: 'The essential difference between sem_open() and sem_init() is:',
        options: ['sem_open() creates a named semaphore shareable by unrelated processes; sem_init() creates an unnamed one for threads of one process or for shared memory', 'sem_init() is the only one that supports sem_wait()', 'sem_open() works only on Linux; sem_init() only on macOS', 'there is no difference at all'],
        answer: 0,
        explanation: 'Both use sem_wait()/sem_post(). The named form is rendezvous-by-name across processes; the unnamed form is cheaper but must be placed in a shared-memory region (pshared nonzero) if separate processes are to use it.'
      },
      {
        q: 'The condition in pthread_cond_wait() usage must be rechecked in a while loop because:',
        options: ['the condition may have become false again before the waiter reacquires the mutex', 'pthread_cond_signal() may drop the signal entirely', 'the mutex is not reacquired automatically', 'sem_wait() must always follow sem_post()'],
        answer: 0,
        explanation: 'Between the signal and the waiter’s return from pthread_cond_wait, another thread can grab the mutex and invalidate the condition. The loop re-evaluates under the lock, turning a possibly stale wakeup into a correct decision; signals are never lost, but they can be overtaken.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'osc-ch7-s4',
    readingTime: 9,
    intro: 'Java made synchronization a language feature: every object carries a lock and a wait set, so a monitor is one synchronized keyword away. Above that monitor core, the Java API layers reentrant locks, named conditions, semaphores and CAS-based atomics — and when locks themselves become the problem, transactional memory, OpenMP directives and functional languages point to a world with fewer locks to get wrong.',
    objectives: [
      'Explain Java monitors: the per-object lock, synchronized methods and blocks, and entry sets',
      'Use wait(), notify() and notifyAll() correctly, including the while-loop recheck',
      'Contrast ReentrantLock and Condition with built-in monitors, and explain the try/finally unlock idiom',
      'Survey java.util.concurrent — semaphores, CAS-based atomics, executors and ArrayBlockingQueue',
      'Describe transactional memory, OpenMP critical sections and functional languages as alternatives to explicit locking'
    ],
    concepts: [
      {
        term: 'Every object is a monitor',
        kind: 'definition',
        statement: 'In Java, **every object has associated with it a single lock**. A method declared **synchronized** can be invoked only by a thread that owns the object’s lock; a blocked caller joins the **entry set** of threads waiting for the lock. The lock is acquired on method entry and released on exit; when it is released with a nonempty entry set, the JVM arbitrarily selects a thread from the set as the new owner — the specification requires no ordering, though most virtual machines keep the entry set FIFO.',
        detail: 'The BoundedBuffer class of Section 7.4.1 is the pattern: insert() and remove() are synchronized, so the buffer’s state is only ever touched by one thread, and the lock scope covers the whole method.'
      },
      {
        term: 'wait(), notify() and notifyAll()',
        kind: 'method',
        statement: 'Every object also has a **wait set**. A thread inside a synchronized method that cannot continue calls **wait()**: it releases the lock, becomes blocked, and joins the wait set. **notify()** picks an arbitrary thread T from the wait set, moves T to the entry set, and makes T runnable; **notifyAll()** does the same for every waiting thread. Once T reacquires the lock it returns from wait() — and must recheck its condition.',
        detail: 'In the textbook buffer, insert() is written as: while (count == BUFFER_SIZE) { wait(); } buffer[in] = item; in = (in + 1) % BUFFER_SIZE; count++; notify(); — and remove() is the mirror image. If no thread is in the wait set, notify() is simply ignored. A woken thread receives no information about why it was awakened — hence the while loop.'
      },
      {
        term: 'Block synchronization',
        kind: 'method',
        statement: 'When only a small part of a method manipulates shared data, synchronizing the entire method makes the lock scope too large. Java allows **synchronized(this) { /* critical section */ }** — a synchronized block — so only the code that needs the object’s lock holds it.',
        detail: 'The non-critical prologue and epilogue of the method then run unlocked, shrinking the window of serialization and reducing contention on the object.'
      },
      {
        term: 'ReentrantLock and Condition',
        kind: 'method',
        statement: '**ReentrantLock** implements the Lock interface: lock() assigns ownership if the lock is free — or if the caller already owns it, which is why it is reentrant — and otherwise blocks until unlock(). A **Condition** is obtained via lock.newCondition() and provides **await()** and **signal()**, the analogues of wait() and notify().',
        detail: 'The idiom is `key.lock(); try { /* critical section */ } finally { key.unlock(); }` — unlock() belongs in finally so the lock is freed even on an exception, while lock() stays outside the try: if lock() itself threw, finally would call unlock() on an unowned lock, throwing IllegalMonitorStateException and obscuring the real failure. A fairness parameter can favor the longest-waiting thread. Conditions are what Java monitors lack at the language level: a monitor has exactly one unnamed condition, whereas newCondition() yields as many named ones as needed — the doWork(turn) example drives five of them to signal exactly the next thread in turn.'
      },
      {
        term: 'The java.util.concurrent toolbox',
        kind: 'method',
        statement: 'Release 1.5 added the concurrency utilities: **ReentrantReadWriteLock** (many concurrent readers, one exclusive writer), the counting **Semaphore** (acquire()/release() around a critical section), atomic variable classes built on **compare-and-swap**, the **Executor** framework for thread pools, and **ArrayBlockingQueue** — the bounded buffer as a blocking ring.',
        detail: 'CAS-based atomics are the optimistic strategy from Chapter 6: try the update, detect collisions, retry — faster than locks through moderate contention, and for a single hot variable often the right tool entirely. A semaphore follows the same try/finally discipline as a lock, with release() in the finally clause.'
      },
      {
        term: 'Thread dumps and deadlock diagnosis',
        kind: 'method',
        statement: 'A **thread dump** snapshots the states of all threads in a running Java application, including which locks each blocked thread is waiting to acquire. On seeing the dump, the JVM searches the wait-for graph for cycles and reports any deadlocked threads it detects. Generate one with Ctrl-\\ (UNIX, Linux, macOS), Ctrl-Break (Windows) — or the jstack command-line tool.',
        detail: 'This is the Java answer to Section 8.7’s detection question: deadlock is found by cycle-hunting in a graph the run time can build for free. The book’s Figure 8.1 two-mutex example, ported to Java, shows up in the dump as a reported deadlock cycle between the two threads.'
      },
      {
        term: 'Transactional memory',
        kind: 'method',
        statement: 'A **memory transaction** is a sequence of memory read–write operations that are atomic: if all operations complete, the transaction **commits**; otherwise it is **aborted and rolled back** as if it never ran. The language construct atomic { S } executes statement sequence S as such a transaction — the update() function that once was acquire(); modify shared data; release(); becomes atomic { modify shared data; }.',
        detail: 'The transactional memory system — not the developer — guarantees atomicity; because no locks are involved, deadlock is not possible; and the system can identify which statements inside atomic blocks may safely run concurrently (for example, concurrent readers). Software TM (STM) inserts compiler instrumentation to manage transactions; hardware TM (HTM) uses the cache hierarchy and cache-coherency protocols to detect conflicts — less overhead, at the cost of modified hardware. Intel’s TSX instructions brought HTM to mainstream x86 processors.'
      },
      {
        term: 'OpenMP critical sections',
        kind: 'method',
        statement: 'In an OpenMP parallel region, the compiler directive **#pragma omp critical { counter += value; }** designates the following block as a critical section in which only one thread may be active at a time — behaving much like a binary semaphore or mutex lock, with the library managing thread creation and blocking.',
        detail: 'Multiple critical sections can be given separate names, with the rule that only one thread may be active in a same-named section at a time. The directive is easier to use than raw mutex locks, but developers must still identify the races to protect, and deadlock remains possible when several critical sections are involved.'
      },
      {
        term: 'Functional languages: no shared state, no races',
        kind: 'insight',
        statement: 'Imperative languages (C, C++, Java, C#) maintain mutable state, which is exactly what races corrupt. **Functional languages do not maintain state**: once a variable is defined and assigned, its value is immutable. Because mutable shared state cannot exist, race conditions and deadlocks essentially vanish — most of this chapter’s problems are nonexistent.',
        detail: 'Erlang has drawn attention for its actor-style concurrency — independent processes exchanging immutable messages — and Scala mixes the functional paradigm with object orientation. Haskell’s software transactional memory is the research landmark where functional purity and transactions meet: retry blocks compose without locks.'
      }
    ],
    examples: [
      {
        title: 'The Java bounded-buffer handshake',
        problem: 'The buffer is full and the object’s lock is free. The producer calls insert() and the consumer calls remove(). Walk the wait-set choreography through one item.',
        steps: [
          { label: 'Step 1: The producer enters and parks', text: 'The producer sees the lock available and enters synchronized insert(). It finds count == BUFFER_SIZE and calls wait(): the lock is released, the producer is blocked, and it joins the object’s wait set.' },
          { label: 'Step 2: The consumer enters', text: 'The lock is now available, so the consumer enters synchronized remove(), removes an item (count decrements), and calls notify() — the consumer still owns the lock throughout.' },
          { label: 'Step 3: notify() relocates the producer', text: 'notify() picks the producer from the wait set, moves it to the entry set, and sets its state to runnable. The producer is eligible to compete for the lock — nothing more.' },
          { label: 'Step 4: The consumer exits', text: 'Exiting remove() releases the lock for the object.' },
          { label: 'Step 5: The producer resumes and rechecks', text: 'The producer reacquires the lock, returns from wait() — inside the while loop — retests count == BUFFER_SIZE (now false), appends its item, increments count, calls notify() (ignored if no one waits), and exits, releasing the lock.' }
        ],
        result: 'Two sets do all the work: the entry set serializes lock ownership; the wait set parks threads whose condition is false. Every transition through wait() or method exit releases the lock, and every wakeup passes through the condition recheck before proceeding.'
      },
      {
        title: 'From locks to transactions',
        problem: 'A function update() modifies shared data. Compare its locked form with its transactional-memory form.',
        steps: [
          { label: 'Step 1: The locked version', text: 'void update() { acquire(); /* modify shared data */ release(); } — correct under low contention, but as thread counts grow, lock ownership becomes the bottleneck, and any second lock introduces deadlock risk.' },
          { label: 'Step 2: The transactional version', text: 'void update() { atomic { /* modify shared data */ } } — the same body, executed as a memory transaction.' },
          { label: 'Step 3: Optimistic execution', text: 'The TM system lets the transaction run, buffering its reads and writes and watching for conflicts with other concurrent transactions — optimistic concurrency, no locks taken in advance.' },
          { label: 'Step 4: Commit or roll back', text: 'If no conflicting access occurred, the transaction commits and its writes become visible atomically. On conflict it aborts and rolls back to its starting state, then retries.' },
          { label: 'Step 5: What is gained and what is paid', text: 'Deadlock is impossible — nothing is held while waiting. The TM system can even let several transactions run concurrently when their accesses are compatible. The cost is the retry work under heavy contention, which hardware support (Intel TSX) minimizes for the common case.' }
        ],
        result: 'Transactional memory moves the correctness obligation from the developer to the system: the same atomic { } block is deadlock-free by construction, at the price of contention-driven retries.'
      }
    ],
    keyTakeaways: [
      'Every Java object has one lock and one wait set; synchronized methods (or synchronized(this) blocks) take the lock, and the JVM picks the next owner from the entry set — arbitrarily by specification, FIFO in practice.',
      'wait() releases the lock and parks the thread in the wait set; notify() relocates one arbitrary waiter to the entry set; notifyAll() relocates all of them. Recheck the condition in a while loop after wait() returns.',
      'ReentrantLock adds fairness and reentrancy; unlock() goes in finally, lock() stays outside the try to avoid masking the original exception with IllegalMonitorStateException.',
      'Condition objects from lock.newCondition() provide the named condition variables that plain Java monitors lack — await() and signal() per condition.',
      'java.util.concurrent rounds out the toolbox: read–write locks, semaphores, CAS-based atomics, executors, and ArrayBlockingQueue as the industrialized bounded buffer.',
      'Thread dumps (Ctrl-\\, Ctrl-Break, or jstack) let the JVM itself hunt cycles in the wait-for graph and report deadlocks.',
      'Transactional memory (atomic blocks; STM and HTM such as Intel TSX), OpenMP’s #pragma omp critical, and functional languages (immutable state, Erlang actors) all trade locks for safer or narrower synchronization obligations.'
    ],
    quiz: [
      {
        q: 'A thread calling wait() on a Java object must currently own the object’s lock. The call:',
        options: ['releases the lock, blocks the thread, and places it in the object’s wait set', 'holds the lock while blocking, so no other thread can enter', 'terminates the thread until notified', 'moves the thread directly into the entry set'],
        answer: 0,
        explanation: 'Releasing the lock is the point — otherwise the thread that could make the condition true (say, the consumer freeing buffer space) could never enter its synchronized method. The thread parks in the wait set and rejoins the entry set only when notified.'
      },
      {
        q: 'notify() differs from notifyAll() in that notify():',
        options: ['moves one arbitrary thread from the wait set to the entry set; notifyAll() moves all of them', 'releases the lock immediately; notifyAll() does not', 'requires a Condition object; notifyAll() does not', 'may only be called from a static method'],
        answer: 0,
        explanation: 'Both leave the lock alone and only relocate waiters — one arbitrarily chosen thread for notify(), every waiting thread for notifyAll(). In either case each relocated thread must still reacquire the lock and recheck its condition.'
      },
      {
        q: 'In the ReentrantLock idiom, unlock() is placed in a finally clause while lock() is kept outside the try because:',
        options: ['if lock() itself throws, the finally would call unlock() on an unowned lock and throw IllegalMonitorStateException, obscuring the original failure', 'lock() can never throw any exception', 'the finally clause runs before the try block', 'unlock() must execute before the critical section'],
        answer: 0,
        explanation: 'lock() does not throw checked exceptions, so putting it inside try risks an unchecked failure (such as OutOfMemoryError) followed by a finally unlock() of a lock that was never acquired — the resulting IllegalMonitorStateException would hide the true cause.'
      },
      {
        q: 'A memory transaction that conflicts with another concurrent transaction is:',
        options: ['aborted and rolled back, then typically retried', 'allowed to finish with corrupt data', 'blocked until all other transactions commit', 'promoted to a global lock'],
        answer: 0,
        explanation: 'Transactional memory is optimistic: run first, detect conflicts, and on conflict undo everything back to the transaction’s starting state. Because no locks are held while waiting, deadlock cannot occur; the price is retry work under heavy contention.'
      },
      {
        q: 'Functional languages such as Erlang largely eliminate race conditions because:',
        options: ['variables are immutable — there is no shared mutable state to corrupt', 'they run on special race-free hardware', 'all functions are executed by a single thread', 'they use stronger mutex locks than Java'],
        answer: 0,
        explanation: 'Once assigned, a variable’s value cannot change, so concurrent readers can never observe a torn update — the precondition for a race simply does not exist. Erlang’s actor processes exchange immutable messages instead of sharing memory.'
      }
    ]
  }
]
