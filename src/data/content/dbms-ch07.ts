import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 7: Concurrency Control and Recovery
// Sections 7.1 - 7.4. Master study content.
// ============================================================================

export const dbmsCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'dbms-ch7-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Two-phase locking: correctness proof and strictness ladder',
        blocks: [
          {
            kind: 'para',
            body: '**Two-phase locking** disciplines every transaction into a growing phase that only acquires locks and a shrinking phase that only releases them, with the **lock point** marking the transition. The graduate claim is that this local rule on each transaction guarantees a global property — conflict serializability — without any scheduler inspecting the full schedule in advance. Intuition comes from ordering transactions by lock points: once $T_i$ releases a lock that $T_j$ later acquires, $T_i$ can never again acquire a lock $T_j$ holds, so conflicting operations must respect lock-point order. Strict and rigorous variants strengthen the rule to handle crashes as well as interleavings.'
          },
          {
            kind: 'theorem',
            body: 'Every schedule produced by **well-formed two-phase locking** is conflict serializable, with transactions serializable in lock-point order. Moreover, **strict two-phase locking**, which holds all exclusive locks until commit or abort, additionally guarantees **strictness**: no transaction reads or overwrites data written by an uncommitted transaction. Rigorous locking, which holds all locks until end, further guarantees commit-order serializability. No such guarantee holds if any transaction acquires a lock after releasing one.'
          },
          {
            kind: 'proof',
            body: 'Consider conflicting operations $p_i(x)$ and $q_j(x)$ with $p_i$ before $q_j$ in the schedule. Well-formedness forces both transactions to hold the appropriate locks at those moments, and compatibility forces $T_i$ to have released its lock on $x$ before $T_j$ acquired it. Hence the lock point of $T_i$ precedes that of $T_j$. Collecting such precedences over all conflicting pairs shows every precedence edge $T_i \\to T_j$ follows lock-point order, so any cycle would order a lock point before itself — impossible. Therefore the precedence graph is acyclic. Strictness follows because holding $x$ locks until end prevents any $r_j(x)$ or $w_j(x)$ from proceeding after an uncommitted $w_i(x)$. A counterexample with one extra acquisition after release builds a cycle on demand, proving the phase rule is tight.'
          },
          {
            kind: 'application',
            body: 'Production engines implement the theorem as **strict two-phase locking with deadlock handling**: row locks grow during the transaction, all exclusive locks persist until commit, shared locks may release earlier in the basic variant. Deadlock detection then runs cycle search over the waits-for graph, while prevention schemes order waits by timestamp. The cost is reduced concurrency around hot keys, which is why high-contention workloads migrate qualifying transactions to optimistic validation or multiversion reads — each alternative preserves serializability by a different certificate, trading aborts or versions for waiting. Understanding the lock-point proof tells exactly which relaxation each alternative exploits.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Two-phase locking turns the promise of serializability into a runtime discipline: acquire every lock before releasing any. The growing and shrinking phases look simple, yet their boundary decides deadlock freedom and strictness. This section traces lock upgrades, strict variants and the moment schedules become safe.',
    objectives: [
      'Enforce growing and shrinking phases on lock traces and certify $2PL$ membership',
      'Contrast basic, strict and rigorous $2PL$ by lock-release timing and recovery cost',
      'Detect upgrade deadlocks and explain why $2PL$ guarantees serializability but not freedom from deadlock'
    ],
    concepts: [
      {
        term: 'Two-phase locking rule',
        kind: 'law',
        statement: 'A transaction under **two-phase locking** `2PL` acquires each lock before first use and never acquires after its first release, splitting execution into a **growing** phase followed by a **shrinking** phase. The lock point where growing ends orders serial equivalence.',
        detail: 'Shared locks allow joint reads while exclusive locks grant sole write access. Compatibility holds for shared-shared pairs only, and every other combination blocks.'
      },
      {
        term: 'Lock points and serializability',
        kind: 'theorem',
        statement: 'Ordering transactions by their **lock points** `lock-point` yields a serial schedule with identical conflicting-operation order, so every $2PL$ schedule is conflict-serializable. The guarantee needs no graph construction at runtime.',
        detail: 'If $T_1$ reaches its lock point before $T_2$, then every conflict between them follows that order. Acyclicity of the induced precedence graph is therefore automatic.'
      },
      {
        term: 'Strict and rigorous 2PL',
        kind: 'definition',
        statement: '**Strict $2PL$** `strict-2PL` holds exclusive locks until commit or abort, while **rigorous $2PL$** holds shared locks that long as well. Strictness buys cascadeless and strict schedules almost for free.',
        detail: 'Basic $2PL$ may release a write lock early and invite cascading aborts. Strict variants delay release, trading longer waits for trivial recovery.'
      },
      {
        term: 'Lock upgrades and downgrades',
        kind: 'method',
        statement: 'A transaction may **upgrade** `upgrade` a shared lock to exclusive when its read turns into a write, ideally in one atomic step. Concurrent upgraders on one item deadlock unless the upgrade is requested up front.',
        detail: 'Pattern: $T_1$ and $T_2$ both hold shared locks on $A$, then both request exclusive. Neither can proceed, which is the classic upgrade deadlock.'
      },
      {
        term: 'Conservative and deadlock-free variants',
        kind: 'insight',
        statement: '**Conservative $2PL$** `preclaim` preclaims every lock before execution, which prevents deadlocks at the cost of planning and reduced concurrency. Shrinking-phase discipline still applies once the plan runs.',
        detail: 'Preclaiming needs the read and write sets in advance, realistic for canned procedures and hopeless for ad-hoc exploration. Most engines accept deadlock risk and detect it instead.'
      }
    ],
    examples: [
      {
        title: 'Trace: certifying a 2PL execution',
        problem: '$T_1$ does $lockS(A), read(A), lockX(B), write(B), unlock(A), unlock(B)$. Does it obey $2PL$, and what serial order does its lock point imply?',
        steps: [
          { label: 'Step 1', text: '```text\nlocks acquired: S(A), X(B)   -- growing\nfirst release:  unlock(A)\nreleases after: unlock(B)     -- shrinking, no new acquires\n```\nAll acquisitions precede the first release, so the trace is legal $2PL$ with lock point at $lockX(B)$.' },
          { label: 'Step 2', text: 'Any conflicting transaction ordered after this lock point follows $T_1$ in the equivalent serial order, since $T_1$ touched its last new item at that moment.' },
          { label: 'Step 3', text: 'Releasing $X(B)$ only at the end would additionally make the run strict, removing cascade risk at the price of holding $B$ longer.' }
        ],
        result: 'Legal $2PL$ with lock point at acquisition of $X(B)$, serializable in lock-point order.'
      },
      {
        title: 'Drill: upgrade deadlock on one item',
        problem: '$T_1$ and $T_2$ each hold a shared lock on $A$ and then request an exclusive lock on $A$. What happens under $2PL$?',
        steps: [
          { label: 'Step 1', text: 'Both shared locks coexist legally since shared-shared requests are compatible. Each transaction then enters its upgrade request expecting sole ownership.' },
          { label: 'Step 2', text: 'Neither upgrade grants while the other shared lock persists, so each transaction waits on the other and the waits-held graph holds a two-node cycle.' },
          { label: 'Step 3', text: 'A detector aborts one upgrader, releasing its shared lock so the survivor upgrades and proceeds. Requesting exclusive locks from the start would have avoided the cycle.' }
        ],
        result: 'Symmetric upgrades deadlock on $A$, resolved by aborting one requester.'
      }
    ],
    keyTakeaways: [
      '$2PL$ means all lock acquisitions precede the first release, with the lock point fixing serial order.',
      'Lock-point ordering makes every $2PL$ schedule conflict-serializable without building graphs.',
      'Strict $2PL$ holds write locks to commit, buying cascadeless recovery at longer wait times.',
      'Upgrades and preclaiming trade concurrency against deadlock risk inside the same phase discipline.'
    ],
    quiz: [
      {
        q: 'A transaction acquires $S(A)$, releases $S(A)$, then acquires $X(B)$. It:',
        options: [
          'Obeys $2PL$ since locks were released in order',
          'Obeys strict $2PL$ regardless of commit timing',
          'Is deadlock-free by construction',
          'Violates $2PL$ by acquiring after its first release'
        ],
        answer: 3,
        explanation: 'Step 1: The first release ends the growing phase. Step 2: Any later acquisition restarts growing illegally. Step 3: Strictness concerns release timing, not new acquisitions. Step 4: Phase violations say nothing about deadlock freedom.'
      },
      // PYQ-pattern: lock-point order implies the serial witness
      {
        q: '$2PL$ guarantees conflict serializability because:',
        options: [
          'Lock-point order matches conflicting-operation order, giving an acyclic precedence graph',
          'Deadlocks become impossible',
          'Shared locks are never released',
          'Transactions preclaim all locks'
        ],
        answer: 0,
        explanation: 'Step 1: Each transaction has a single lock point. Step 2: Conflicting operations respect lock-point order. Step 3: Respecting one total order keeps the precedence graph acyclic. Step 4: Acyclicity is exactly conflict serializability.'
      },
      {
        q: 'Strict $2PL$ differs from basic $2PL$ in that it:',
        options: [
          'Skips the growing phase',
          'Allows requests after release',
          'Holds exclusive locks until commit or abort',
          'Bans shared locks entirely'
        ],
        answer: 2,
        explanation: 'Step 1: Basic $2PL$ may release writes early. Step 2: Strict $2PL$ pins exclusive locks to commit or abort. Step 3: Pinned writes give cascadeless and strict schedules. Step 4: Phase structure and shared locks are otherwise unchanged.'
      },
      {
        q: 'Two transactions holding $S(A)$ that both request $X(A)$:',
        options: [
          'Both upgrade immediately by compatibility',
          'Deadlock in a waits-for cycle unless one is aborted or preordered',
          'Serialize without waiting under basic $2PL$',
          'Convert to shared locks automatically'
        ],
        answer: 1,
        explanation: 'Step 1: Shared locks coexist, so both holders persist. Step 2: Each exclusive request waits for the other shared lock. Step 3: Mutual waiting is a two-node deadlock cycle. Step 4: Aborting or preordering one requester breaks it.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'dbms-ch7-s2',
    readingTime: 8,
    intro: 'Deadlocks are the tax on locking: mutual waits that no participant can break by waiting longer. Prevention orders the risk away, detection finds cycles after they form, and timeouts guess. This section compares wait-die with wound-wait and shows when each aborts.',
    objectives: [
      'Draw waits-for graphs and decide deadlock from directed cycles',
      'Apply wait-die versus wound-wait rules from transaction ages on a standoff',
      'Compare prevention, detection and timeout handling by abort cost and delay'
    ],
    concepts: [
      {
        term: 'Waits-for graph',
        kind: 'method',
        statement: 'The **waits-for graph** `waits-for` holds an edge $T_i \\to T_j$ whenever $T_i$ waits for a lock held by $T_j$. A directed cycle diagnoses deadlock, and no cycle means some waiter can progress.',
        detail: 'Rebuild the graph at each Blocked request. Older engines check periodically rather than on every request to amortize the search cost.'
      },
      {
        term: 'Wait-die discipline',
        kind: 'law',
        statement: 'Under **wait-die** `wait-die`, an older requester waits for a younger holder while a younger requester aborts itself and retries with its original timestamp. Age is priority, and only youth dies.',
        detail: 'Old timestamp means higher priority here. The dying transaction keeps its age on retry so starvation cannot persist forever.'
      },
      {
        term: 'Wound-wait discipline',
        kind: 'law',
        statement: 'Under **wound-wait** `wound-wait`, an older requester preempts a younger holder by wounding it into abort, while a younger requester waits for an older holder. Age still wins, but youth bleeds instead of waiting.',
        detail: 'Wounding forces the younger holder to release locks promptly so the elder proceeds. Waiting youth never aborts, which suits workloads where holders are near commit.'
      },
      {
        term: 'Prevention versus detection',
        kind: 'insight',
        statement: '**Prevention** `prevention` schemes such as ordering or timestamps never let cycles form, while **detection** `detection` lets waits happen and aborts a cycle victim. Prevention pays in waiting and planning, detection pays in wasted work after abort.',
        detail: 'Lock ordering by item id is simple prevention when access sets are known. Detection needs victim choice by age, work done or abort count.'
      },
      {
        term: 'Timeouts and starvation',
        kind: 'method',
        statement: '**Timeouts** `timeout` abort any waiter past a threshold, which is cheap but confuses slow locks with deadlocks. **Starvation** is avoided by preserving original timestamps across retries so elders eventually win.',
        detail: 'Short timeouts abort needlessly under load, long ones stall true deadlocks. Adaptive thresholds track recent wait statistics instead of one fixed value.'
      }
    ],
    examples: [
      {
        title: 'Trace: wait-die against wound-wait verdicts',
        problem: '$T_{old}$ holds $X(A)$. $T_{young}$ requests $X(A)$. Then reversed: $T_{young}$ holds $X(B)$ while $T_{old}$ requests $X(B)$. Give both verdicts.',
        steps: [
          { label: 'Step 1', text: '```text\ncase 1: young requests, old holds\n  wait-die:  young dies (aborts, keeps age)\n  wound-wait: young waits\ncase 2: old requests, young holds\n  wait-die:  old waits\n  wound-wait: young is wounded (aborts)\n```\nAge decides in both schemes, only the action differs.' },
          { label: 'Step 2', text: 'Wait-die aborts requesters that are younger and lets older requesters queue. Wound-wait instead aborts young holders blocking elders, so older requesters never queue behind youth.' },
          { label: 'Step 3', text: 'Both are deadlock-free: timestamps totally order priority, so a waits-for cycle cannot persist since the youngest edge always resolves by abort.' }
        ],
        result: 'Wait-die kills young requesters, wound-wait kills young holders, and both follow seniority.'
      },
      {
        title: 'Drill: cycle hunt in a waits-for graph',
        problem: 'Holds: $T_1$ on $A$, $T_2$ on $B$, $T_3$ on $C$. Requests: $T_1$ for $B$, $T_2$ for $C$, $T_3$ for $A$. Deadlock, and who is a sound victim?',
        steps: [
          { label: 'Step 1', text: 'Edges $T_1 \\to T_2$, $T_2 \\to T_3$, $T_3 \\to T_1$ close a three-node directed cycle, so the three transactions deadlock.' },
          { label: 'Step 2', text: 'Detection aborts one victim to break the ring. Youngest-first minimizes wasted elder work, while least-work-done minimizes redo cost.' },
          { label: 'Step 3', text: 'After the abort releases one lock, the remaining two edges form a chain that drains without further action.' }
        ],
        result: 'Three-way deadlock certified by the cycle, broken by aborting one victim.'
      }
    ],
    keyTakeaways: [
      'A directed cycle in the waits-for graph is the deadlock diagnosis.',
      'Wait-die aborts young requesters while old requesters wait on young holders.',
      'Wound-wait aborts young holders blocking old requesters while young requesters wait.',
      'Prevention orders priority up front, detection aborts cycle victims, and timeouts guess cheaply.'
    ],
    quiz: [
      {
        q: 'A waits-for graph with edges $T_1 \\to T_2 \\to T_3$ and no return edge is:',
        options: ['Deadlock-free, since no directed cycle exists', 'Deadlocked among all three', 'Deadlocked between $T_1$ and $T_3$', 'Untestable without timestamps'],
        answer: 0,
        explanation: 'Step 1: Deadlock needs a directed cycle. Step 2: The given edges form a chain, not a ring. Step 3: Chain tails eventually acquire their locks. Step 4: Hence no participant is stuck forever.'
      },
      // PYQ-pattern: wait-die versus wound-wait action on an age-ordered standoff
      {
        q: 'Young $T_2$ requests a lock held by old $T_1$. Wait-die and wound-wait respectively:',
        options: [
          'Wait then wound',
          'Wait $T_2$ then abort $T_2$',
          'Abort $T_2$ then wait $T_2$',
          'Abort $T_1$ in both schemes'
        ],
        answer: 2,
        explanation: 'Step 1: Wait-die kills young requesters, so $T_2$ aborts and retries. Step 2: Wound-wait makes young requesters wait for elders. Step 3: Neither scheme touches old $T_1$ here. Step 4: The ordered pair is therefore abort-then-wait.'
      },
      {
        q: 'Old $T_1$ requests a lock held by young $T_2$. Wound-wait does:',
        options: [
          'Makes $T_1$ wait indefinitely',
          'Aborts $T_1$ immediately',
          'Grants both locks jointly',
          'Wounds $T_2$ into abort so $T_1$ proceeds'
        ],
        answer: 3,
        explanation: 'Step 1: The requester is older than the holder. Step 2: Wound-wait favors elders by preemption. Step 3: The younger holder $T_2$ aborts and releases. Step 4: $T_1$ then acquires without queuing.'
      },
      {
        q: 'Timeout-based handling is attractive yet risky because it:',
        options: [
          'Needs full read-write sets in advance',
          'Is cheap to run but mistakes slow waits for deadlocks',
          'Never aborts any transaction',
          'Requires cycle search on every request'
        ],
        answer: 1,
        explanation: 'Step 1: Timeouts need only a clock per waiter. Step 2: No graph is built or searched. Step 3: A loaded but healthy waiter can exceed the threshold. Step 4: That healthy waiter is then aborted needlessly.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'dbms-ch7-s3',
    readingTime: 9,
    intro: 'Timestamps order transactions before they run, replacing locks with age comparisons at each access. Thomas write rule trims obsolete writes, and multiversioning keeps old values for readers. Together they show how optimism and versions trade aborts for waiting.',
    objectives: [
      'Enforce timestamp-ordering rules using read and write stamps $RTS$ and $WTS$',
      'Apply the Thomas write rule to ignore obsolete writes safely',
      'Explain how multiversion storage lets readers use snapshots without blocking writers'
    ],
    concepts: [
      {
        term: 'Timestamp order and stamps',
        kind: 'definition',
        statement: 'Each transaction carries a **timestamp** `TS` fixing its serial position, and each item carries **$RTS$ and $WTS$** recording the youngest reader and writer admitted so far. Accesses arriving out of timestamp order abort.',
        detail: 'Read $r_i(X)$ is admitted when $TS(T_i) \\geq WTS(X)$, then $RTS(X)$ advances to the maximum. Write $w_i(X)$ needs $TS(T_i) \\geq RTS(X)$ and $TS(T_i) \\geq WTS(X)$ under basic ordering.'
      },
      {
        term: 'Read and write admission rules',
        kind: 'law',
        statement: 'Admit $r_i(X)$ when its **timestamp** `admit` is no older than $WTS(X)$, else abort $T_i$. Admit $w_i(X)$ when it is no older than both $RTS(X)$ and $WTS(X)$, else abort, subject to the Thomas exception below.',
        detail: 'Late readers that missed their version abort rather than see the future. Late writers that missed both their readers and their version slot abort rather than rewrite history.'
      },
      {
        term: 'Thomas write rule',
        kind: 'law',
        statement: 'The **Thomas rule** `thomas` ignores $w_i(X)$ when $TS(T_i) \\geq RTS(X)$ yet $TS(T_i) < WTS(X)$: a newer version already shipped and no reader wants the obsolete value. Skipping the write keeps timestamp order without aborting.',
        detail: 'Without the rule the same arrival aborts $T_i$. With it the obsolete write is a safe no-operation, which helps write-heavy workloads with rare reads of hot items.'
      },
      {
        term: 'Multiversion timestamping',
        kind: 'method',
        statement: '**Multiversion** `MVCC` storage keeps version chains $X_1, X_2, \\dots$ with writer stamps, and each reader picks the newest version not newer than itself. Readers never block writers and writers never block readers.',
        detail: 'Read $r_i(X)$ selects $\\max(X_k : WTS(X_k) \\leq TS(T_i))$. Writes append fresh versions. Garbage collection retires versions older than every active reader.'
      },
      {
        term: 'Optimism versus locking tradeoff',
        kind: 'insight',
        statement: 'Timestamping is **optimistic** `optimistic`: conflicts resolve by abort instead of waiting, which suits low-contention loads but avalanches under hot spots. Locking waits more and aborts less, winning when conflicts are frequent.',
        detail: 'Starvation is curbed by restart with the same timestamp. Hybrid engines lock hot items while timestamping the rest to balance the two costs.'
      }
    ],
    examples: [
      {
        title: 'Trace: stamp checks admit or abort',
        problem: 'Item $A$ has $RTS = 5$, $WTS = 5$. Arrivals: $r_8(A)$, then $w_4(A)$, then $w_7(A)$ with Thomas enabled. Decide each.',
        steps: [
          { label: 'Step 1', text: '```text\nstart:  RTS=5 WTS=5\nr8(A):  8 >= WTS(5) -> admit, RTS := max(5,8) = 8\nw4(A):  4 < RTS(8) and 4 < WTS(5) -> stale\n```\nThe read advances the read stamp while the stale write fails both comparisons.' },
          { label: 'Step 2', text: 'For $w_4(A)$ Thomas checks $4 \\geq RTS(8)$: false, so this is not an ignorable obsolete write but a reader-missing one, hence abort $T_4$ rather than skip.' },
          { label: 'Step 3', text: 'Arrival $w_7(A)$ has $7 < RTS(8)$, so it misses a reader and aborts as well. Had $RTS$ stayed $5$, the same $w_7$ with $WTS = 9$ from a newer writer would be a Thomas skip instead of an abort.' }
        ],
        result: '$r_8$ admitted with $RTS = 8$, both late writes abort on reader-miss rules.'
      },
      {
        title: 'Drill: readers on version chains',
        problem: 'Versions $A_3, A_6, A_9$ exist with writer stamps $3, 6, 9$. Which version does $r_7(A)$ read, and when can $A_3$ be discarded?',
        steps: [
          { label: 'Step 1', text: 'Eligible versions satisfy $WTS \\leq 7$: candidates $A_3$ and $A_6$. The newest eligible is $A_6$, so $r_7$ reads $A_6$ without blocking the writer of $A_9$.' },
          { label: 'Step 2', text: 'Version $A_3$ serves only readers with $3 \\leq TS < 6$. Once every active transaction carries $TS \\geq 6$, no future reader wants $A_3$.' },
          { label: 'Step 3', text: 'The collector then retires $A_3$ while keeping $A_6$ for the $6 \\leq TS < 9$ window and $A_9$ as latest.' }
        ],
        result: '$r_7$ reads $A_6$, and $A_3$ retires once all active timestamps reach $6$.'
      }
    ],
    keyTakeaways: [
      'Stamps $RTS$ and $WTS$ admit only accesses arriving in timestamp order.',
      'Late reads abort, and late writes abort unless the Thomas exception applies.',
      'Thomas skips obsolete writes already superseded with no interested reader.',
      'Version chains give each reader its timely snapshot so reads never wait for writes.'
    ],
    quiz: [
      {
        q: 'Read $r_{10}(X)$ with $WTS(X) = 12$ is:',
        options: ['Admitted with $RTS$ update', 'Aborted as a late read', 'Skipped by Thomas rule', 'Queued behind the writer'],
        answer: 1,
        explanation: 'Step 1: Admission needs $TS \\geq WTS$. Step 2: Here $10 < 12$, so the reader missed its version. Step 3: Thomas applies only to writes. Step 4: Hence the reader aborts and restarts.'
      },
      // PYQ-pattern: Thomas-rule skip versus abort on a stale write
      {
        q: 'Write $w_5(X)$ arrives with $RTS(X) = 4$ and $WTS(X) = 8$. With Thomas enabled it is:',
        options: [
          'Admitted and $WTS$ becomes $5$',
          'Aborted for missing its readers',
          'Ignored as an obsolete write without abort',
          'Converted into a shared lock request'
        ],
        answer: 2,
        explanation: 'Step 1: Check readers: $5 \\geq RTS(4)$ passes. Step 2: Check version: $5 < WTS(8)$ fails. Step 3: Newer $X_8$ already shipped with no reader wanting $X_5$. Step 4: Thomas therefore skips the write instead of aborting.'
      },
      {
        q: 'With versions $X_4, X_7, X_{10}$, reader $r_8$ sees:',
        options: [`$X_4$`, `$X_7$`, `$X_{10}$`, 'No version and it blocks'],
        answer: 1,
        explanation: 'Step 1: Eligible versions satisfy $WTS \\leq 8$. Step 2: Candidates are $X_4$ and $X_7$. Step 3: The newest eligible is $X_7$. Step 4: Readers never block; they pick that snapshot.'
      },
      {
        q: 'Timestamp ordering suits low-contention loads because it:',
        options: [
          'Never aborts any transaction',
          'Replaces waiting with aborts, which stay rare when conflicts are few',
          'Holds all locks to commit',
          'Removes the need for timestamps'
        ],
        answer: 1,
        explanation: 'Step 1: Ordering resolves conflicts by abort, not queues. Step 2: Aborts cost wasted work each time. Step 3: Rare conflicts keep that waste small. Step 4: Hot spots flip the advantage back to locking.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'dbms-ch7-s4',
    readingTime: 10,
    intro: 'Logging makes crashes survivable by writing intentions before effects. Write-ahead discipline plus checkpoints bounds the replay work, and undo-redo phases rebuild exactly the committed state. This section runs the log like a program to be replayed.',
    objectives: [
      'Enforce write-ahead rules that force log records before data and commit',
      'Replay undo and redo phases over a log with checkpoints to rebuild state',
      'Compare deferred, immediate and shadow-page recovery strategies'
    ],
    concepts: [
      {
        term: 'Write-ahead logging',
        kind: 'law',
        statement: 'The **write-ahead** `WAL` rule forces each update log record to stable storage before the data page, and the commit record before acknowledgement. No effect precedes its description on durable media.',
        detail: 'Log records carry before-images and after-images per item. Steal policies need undo, no-force policies need redo, and steal with no-force needs both.'
      },
      {
        term: 'Log record anatomy',
        kind: 'notation',
        statement: 'Records include **start, update, commit, abort and checkpoint** markers written as `start(T)`, `write(T,X,old,new)`, `commit(T)` and `ckpt(active)` entries. Recovery scans these markers rather than data pages.',
        detail: 'Update records bracket the change with old and new values. Checkpoint records list the active set so replay starts late instead of at time zero.'
      },
      {
        term: 'Undo and redo phases',
        kind: 'method',
        statement: '**Undo** `undo` rolls active-at-crash transactions backward restoring before-images, while **redo** `redo` replays committed updates forward restoring after-images. Idempotent application makes repeated replay safe.',
        detail: 'Backward scan undoes losers newest-first until their start records. Forward scan from the last checkpoint redoes winners oldest-first, skipping already-persisted effects harmlessly.'
      },
      {
        term: 'Checkpoint styles',
        kind: 'method',
        statement: '**Checkpoints** `ckpt` bound recovery: quiescent checkpoints pause new work for a clean snapshot while fuzzy checkpoints only flush dirty pages and record the active set. Fuzzy variants keep the system online.',
        detail: 'Restart begins at the latest checkpoint instead of the log head. The active list there seeds the undo set, and redo starts from the earliest dirty-page marker nearby.'
      },
      {
        term: 'Deferred versus immediate update',
        kind: 'insight',
        statement: '**Deferred update** `deferred` writes data only at commit so recovery needs redo alone, while **immediate update** `immediate` writes early and needs undo as well. Shadow paging avoids logs with page-table swaps at the cost of scattered reads.',
        detail: 'No-steal with force matches deferred discipline. Steal with no-force is the general immediate case needing both passes, which modern engines choose for concurrency.'
      }
    ],
    examples: [
      {
        title: 'Trace: replay over a crash log',
        problem: 'Log: $start(T_1), write(T_1,A,10,20), commit(T_1), start(T_2), write(T_2,B,5,9), ckpt((T_2)), crash$. Which actions replay?',
        steps: [
          { label: 'Step 1', text: '```text\nwinners:    T1 (commit before crash)\nlosers:     T2 (active at crash)\nredo from checkpoint:  T1 already durable, reapply idempotently\nundo backward:         restore B := 5, append abort(T2)\n```\nClassify each transaction before touching any page.' },
          { label: 'Step 2', text: 'Undo walks backward over $T_2$ records restoring before-images, so $B$ returns to $5$ and an abort marker closes $T_2$.' },
          { label: 'Step 3', text: 'Redo walks forward reapplying $T_1$ after-images, so $A = 20$ holds even when the data page had not been forced before the crash.' }
        ],
        result: '$T_1$ redone to $A = 20$, $T_2$ undone to $B = 5$, with the log markers closing both.'
      },
      {
        title: 'Drill: fuzzy checkpoint shortens replay',
        problem: 'A long log holds $start(T_1), write(T_1,A,..), commit(T_1), start(T_2), ckpt((T_2,T_3)), write(T_2,..), write(T_3,..), crash$. Where does replay start?',
        steps: [
          { label: 'Step 1', text: 'Recovery anchors at the $ckpt((T_2, T_3))$ record instead of the log head, since everything before the checkpoint with no active writers is already durable.' },
          { label: 'Step 2', text: 'Undo set seeds to $(T_2, T_3)$ from the checkpoint active list, extended by any starters after it and shrunk by committers after it.' },
          { label: 'Step 3', text: 'Redo scans forward from the checkpoint reapplying committed after-images, skipping uncommitted $T_2$ and $T_3$ writes that undo already rolled back.' }
        ],
        result: 'Replay covers only the post-checkpoint tail, not the whole history back to $T_1$.'
      }
    ],
    keyTakeaways: [
      'Write-ahead forces log records to stable storage before data pages and before commit acknowledgement.',
      'Undo restores before-images of losers backward, redo restores after-images of winners forward.',
      'Checkpoints anchor restart so only the tail after the last marker replays.',
      'Deferred update needs redo alone while immediate update needs both undo and redo.'
    ],
    quiz: [
      // PYQ-pattern: undo-redo classification from a crash log with checkpoint
      {
        q: 'Crash finds $T_1$ committed and $T_2$ active. Recovery does:',
        options: [
          'Undo $T_1$ and redo $T_2$',
          'Undo both transactions',
          'Redo $T_1$ forward and undo $T_2$ backward',
          'Redo both transactions'
        ],
        answer: 2,
        explanation: 'Step 1: Committed $T_1$ is a winner needing redo. Step 2: Active $T_2$ is a loser needing undo. Step 3: Redo scans forward applying after-images. Step 4: Undo scans backward restoring before-images.'
      },
      {
        q: 'Write-ahead ordering requires:',
        options: [
          'Log records to stable storage before data pages and commit records before acknowledgement',
          'Data pages before log records',
          'Commit before the first write',
          'Checkpoints before every read'
        ],
        answer: 0,
        explanation: 'Step 1: Recovery trusts only durable log descriptions. Step 2: Hence each update record precedes its page. Step 3: The commit record precedes the client acknowledgement. Step 4: Reads need no logging discipline.'
      },
      {
        q: 'Fuzzy checkpoints differ from quiescent ones by:',
        options: [
          'Pausing all transactions for a snapshot',
          'Recording the active set without halting new work',
          'Removing the need for undo',
          'Forcing every data page twice'
        ],
        answer: 1,
        explanation: 'Step 1: Quiescent markers pause the system. Step 2: Fuzzy markers only note active transactions and flush state. Step 3: New work continues during fuzzy capture. Step 4: Restart still anchors at the marker either way.'
      },
      {
        q: 'Deferred update recovery needs:',
        options: ['Undo only', 'Both undo and redo', 'Neither pass', 'Redo only'],
        answer: 3,
        explanation: 'Step 1: Deferred writes reach storage only at commit. Step 2: No uncommitted data can be on disk. Step 3: Losers therefore need no undo. Step 4: Winners still need redo when their pages missed forcing.'
      }
    ]
  }
]
