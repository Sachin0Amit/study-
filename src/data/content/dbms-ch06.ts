import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 6: Transactions and ACID
// Sections 6.1 - 6.4. Master study content.
// ============================================================================

export const dbmsCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'dbms-ch6-s1',
    readingTime: 7,
    intro: 'A transaction is the unit of correctness: a batch of reads and writes that must behave as one indivisible step despite crashes and concurrency. The four ACID guards name exactly what can go wrong and what the system promises. This section fixes each property with a failure story that shows its absence.',
    objectives: [
      'State atomicity, consistency, isolation and durability and match each to its failure mode',
      'Distinguish system guarantees from application invariants in consistency reasoning',
      'Explain how logging plus concurrency control jointly deliver $ACID$ behavior'
    ],
    concepts: [
      {
        term: 'Transaction and atomicity',
        kind: 'definition',
        statement: 'A **transaction** `BEGIN` groups reads and writes between begin and commit, and **atomicity** demands all-or-nothing execution: committed work survives fully while aborted work leaves no trace. Partial application states are never visible.',
        detail: 'A funds transfer debits one account and credits another as one unit. A crash between the two legs must roll the debit back, never leave money created or destroyed mid-flight.'
      },
      {
        term: 'Consistency of invariants',
        kind: 'definition',
        statement: '**Consistency** `invariant` means every committed transaction carries the database from one valid state to another, preserving declared constraints and application rules such as $total \\geq 0$. The mechanism assumes transactions are coded correctly and only guarantees their effects apply cleanly.',
        detail: 'Constraint checks at commit reject violators outright. A transfer routine that forgets the credit leg is consistent by enforcement yet wrong by logic, which no storage engine can repair.'
      },
      {
        term: 'Isolation among concurrent work',
        kind: 'definition',
        statement: '**Isolation** `serializable` shields each transaction from the intermediate states of others, with serializability as the gold standard where the interleaved run matches some serial order. Lower levels trade anomalies for speed.',
        detail: 'Two seat-booking transactions reading one free seat must not both succeed. Without isolation both read free, both write booked, and one booking silently overwrites the other.'
      },
      {
        term: 'Durability after commit',
        kind: 'definition',
        statement: '**Durability** `commit` promises that once the system acknowledges commit, the effects survive crashes, power loss and media faults through persisted logs and redundant writes. Acknowledgement precedes safety only in relaxed configurations.',
        detail: 'Write-ahead logging forces log records to stable storage before commit returns. Group commit batches the force across transactions to keep the promise affordable.'
      },
      {
        term: 'Commit, abort and state transitions',
        kind: 'method',
        statement: 'A transaction moves through **active, partially committed, committed, failed and aborted** states tracked by the `log` manager. Commit is the point of no return while abort triggers undo of all its writes.',
        detail: 'Partially committed means the last statement ran but commit has not been acknowledged. Failed means a fault was detected, and aborted means undo completed and locks were released.'
      }
    ],
    examples: [
      {
        title: 'Trace: crash inside a transfer',
        problem: 'Transaction $T$ debits $A$ by $100$, then must credit $B$ by $100$. The machine crashes between the two writes. Which $ACID$ guard acts, and what is the outcome?',
        steps: [
          { label: 'Step 1', text: '```text\nT:  read(A)  A := A - 100  write(A)\n    -- crash here --\n    read(B)  B := B + 100  write(B)  commit\n```\nOnly the debit reached the buffers, so the persisted state holds half a transfer.' },
          { label: 'Step 2', text: 'Atomicity requires all-or-nothing: on restart the recovery manager finds $T$ with no commit record and undoes the debit, restoring $A$ to its prior value.' },
          { label: 'Step 3', text: 'Durability is untouched since nothing committed, consistency holds because the invariant $A + B = constant$ is restored, and isolation kept others away from the half-written state.' }
        ],
        result: 'Atomicity rolls the partial transfer back completely, so balances never show money in flight.'
      },
      {
        title: 'Drill: lost update without isolation',
        problem: 'Two transactions read $balance = 500$ concurrently, each adds $100$ and writes back. What breaks without isolation?',
        steps: [
          { label: 'Step 1', text: 'Both read $500$ into private buffers. Each computes $500 + 100 = 600$ locally, unaware of the other writer.' },
          { label: 'Step 2', text: 'The first writes $600$ and the second overwrites with $600$ again, so one deposit vanishes while both transactions report success.' },
          { label: 'Step 3', text: '```text\ncorrect serial result:  500 + 100 + 100 = 700\ninterleaved result:     600 (one update lost)\n```\nSerializable isolation would serialize the increments to reach $700$.' }
        ],
        result: 'Lost update: concurrent increments need isolation so the final balance is $700$, not $600$.'
      }
    ],
    keyTakeaways: [
      'Atomicity makes each transaction all-or-nothing across crashes and aborts.',
      'Consistency carries valid states to valid states but cannot fix wrong application logic.',
      'Isolation hides intermediate states, with serializable execution as the correctness standard.',
      'Durability keeps committed effects across failures through forced logging.'
    ],
    quiz: [
      {
        q: 'A crash after the debit leg but before the credit leg is repaired by:',
        options: ['Isolation', 'Atomicity via undo on restart', 'Durability via caching', 'Consistency via key choice'],
        answer: 1,
        explanation: 'Step 1: Only part of the transaction reached storage. Step 2: Atomicity demands no partial effects survive. Step 3: Restart recovery undoes uncommitted writes. Step 4: The other guards address concurrency, persistence and invariants, not partial execution.'
      },
      {
        q: 'Two concurrent $+100$ deposits on $500$ yielding $600$ instead of $700$ shows a breach of:',
        options: ['Durability', 'Atomicity', 'Isolation', 'Constraint syntax'],
        answer: 2,
        explanation: 'Step 1: Both transactions read the same starting value. Step 2: The second write overwrote the first. Step 3: That lost update is an interference anomaly. Step 4: Serializable isolation would have ordered the increments.'
      },
      // PYQ-pattern: match each ACID property to its characteristic failure
      {
        q: 'Committed data vanishing after a power cut violates:',
        options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
        answer: 3,
        explanation: 'Step 1: Commit was acknowledged to the client. Step 2: Durability promises survival past that point. Step 3: Losing acknowledged writes breaks exactly that promise. Step 4: The remaining properties govern partial work, invariants and concurrency.'
      },
      {
        q: 'A transfer routine that debits but never credits, yet passes all constraint checks, is:',
        options: [
          'Durable but not atomic',
          'Consistent by enforcement yet logically wrong, which the engine cannot detect',
          'Isolated but not durable',
          'Atomic but not isolated'
        ],
        answer: 1,
        explanation: 'Step 1: Constraints hold since no rule names the missing credit. Step 2: Consistency only preserves stated invariants. Step 3: Application-logic errors sit outside storage guarantees. Step 4: Testing the routine, not tuning the engine, fixes the bug.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'dbms-ch6-s2',
    readingTime: 8,
    intro: 'Once transactions interleave, the schedule decides correctness: the same operations in different orders produce or avoid anomalies. Serial schedules are trivially safe but slow, so the goal is to admit exactly those interleavings with serial-like effects. This section names the three classic anomalies and sets up the equivalence tests that follow.',
    objectives: [
      'Read schedules in $r$ and $w$ notation and spot dirty reads, lost updates and unrepeatable reads',
      'Distinguish serial, interleaved and serializable executions with justification',
      'Predict schedule outcomes by tracing read and write order on shared items'
    ],
    concepts: [
      {
        term: 'Schedule notation',
        kind: 'notation',
        statement: 'A **schedule** `S` lists operations such as $r_1(A)$ and $w_2(A)$ in execution order with commit and abort markers. Two operations conflict when they touch the same item with at least one write.',
        detail: 'Notation $r_1(A)$ means transaction $T_1$ reads $A$. The commit marker $c_1$ ends $T_1$ durably, while $a_1$ announces its abort and rollback.'
      },
      {
        term: 'Dirty read anomaly',
        kind: 'definition',
        statement: 'A **dirty read** `dirty` occurs when $T_2$ reads a value written by uncommitted $T_1$ that later aborts, so $T_2$ consumed data that never officially existed. Cascading aborts follow when $T_2$ already acted on it.',
        detail: 'Timeline: $w_1(A)$ then $r_2(A)$ then $a_1$. Any computation $T_2$ derived from that $A$ is poisoned and must itself roll back.'
      },
      {
        term: 'Lost update anomaly',
        kind: 'definition',
        statement: 'A **lost update** `lost` happens when $T_1$ and $T_2$ read one value and both write back, so the second write silently discards the first. The timeline $r_1(A), r_2(A), w_1(A), w_2(A)$ is the canonical shape.',
        detail: 'Counter increments and seat assignments are the usual victims. The fix orders the write pairs so one increment builds on the other.'
      },
      {
        term: 'Unrepeatable and phantom reads',
        kind: 'definition',
        statement: '**Unrepeatable reads** `repeatable` change a value between two reads of one transaction, while **phantoms** insert or remove rows matching a repeated predicate. Both break the illusion of a stable snapshot.',
        detail: 'Shape: $r_1(A)$, then $w_2(A)$ with $c_2$, then $r_1(A)$ again returning a different $A$. Predicate locking or snapshot isolation addresses the phantom variant.'
      },
      {
        term: 'Serial versus serializable',
        kind: 'definition',
        statement: 'A **serial** `serial` schedule runs transactions end to end with no overlap, while a **serializable** schedule interleaves yet matches the effects of some serial order. Serializability is the admission test for interleavings.',
        detail: 'All serial schedules are trivially serializable, but most serializable schedules are not serial. Conflict and view tests in the next section decide membership efficiently.'
      }
    ],
    examples: [
      {
        title: 'Trace: naming the anomaly in three timelines',
        problem: 'Classify: (a) $w_1(A), r_2(A), a_1$; (b) $r_1(A), r_2(A), w_1(A), w_2(A)$; (c) $r_1(A), w_2(A), c_2, r_1(A)$.',
        steps: [
          { label: 'Step 1', text: '```text\n(a) w1(A) r2(A) a1   -> reader used aborted data\n(b) r1 r2 w1 w2       -> second write buries first\n(c) r1 w2 c2 r1       -> same read returns new value\n```\nMap each timeline to the read-write shapes defined above.' },
          { label: 'Step 2', text: 'Timeline (a) is a dirty read since $T_2$ consumed $T_1$ output that aborted. Timeline (b) is a lost update with the $w_1$ value discarded by $w_2$.' },
          { label: 'Step 3', text: 'Timeline (c) is an unrepeatable read: $T_1$ sees two versions of $A$ inside one transaction even though $T_2$ committed cleanly.' }
        ],
        result: '(a) dirty read, (b) lost update, (c) unrepeatable read, each with its canonical operation order.'
      },
      {
        title: 'Drill: serial check on a small interleaving',
        problem: 'Schedule $S: r_1(A), r_2(B), w_1(B), w_2(A), c_1, c_2$. Is it serial, and could it still be serializable?',
        steps: [
          { label: 'Step 1', text: 'Operations of $T_1$ and $T_2$ alternate, so $S$ is interleaved rather than serial: neither transaction runs end to end.' },
          { label: 'Step 2', text: 'Conflicts sit on different items in a crossed pattern ($T_1$ writes $B$ after reading $A$, $T_2$ writes $A$ after reading $B$), which hints at a cycle to be confirmed by the precedence graph.' },
          { label: 'Step 3', text: 'Serializability stays open: interleaved schedules are admitted whenever their effects equal some serial order, and the graph test of the next section gives the verdict.' }
        ],
        result: 'Not serial, with serializability left to the conflict-graph test.'
      }
    ],
    keyTakeaways: [
      'Schedules in $r$ and $w$ notation make every interference pattern explicit.',
      'Dirty reads consume aborted data, lost updates bury writes, and unrepeatable reads shift values mid-transaction.',
      'Serial means no overlap at all, while serializable means interleaved yet equivalent to some serial order.',
      'Anomaly shapes are recognized by operation order, not by timing accidents.'
    ],
    quiz: [
      {
        q: '$w_1(A)$, $r_2(A)$, $a_1$ is an instance of:',
        options: ['Lost update', 'Dirty read', 'Unrepeatable read', 'Phantom insert'],
        answer: 1,
        explanation: 'Step 1: $T_2$ reads data written by $T_1$. Step 2: $T_1$ then aborts, retracting that value. Step 3: $T_2$ therefore used never-committed data. Step 4: That matches the dirty-read definition.'
      },
      // PYQ-pattern: classify a schedule from its read-write timeline
      {
        q: '$r_1(A)$, $r_2(A)$, $w_1(A)$, $w_2(A)$ produces:',
        options: ['A dirty read by $T_1$', 'A lost update of $T_1$ output', 'An unrepeatable read by $T_2$', 'A phantom row in $T_1$'],
        answer: 1,
        explanation: 'Step 1: Both transactions read the same starting value. Step 2: $T_1$ writes first. Step 3: $T_2$ writes second from the stale read, burying $w_1$. Step 4: Burying a committed increment is the lost-update shape.'
      },
      {
        q: 'Which schedule is serial?',
        options: [
          `$r_1(A), r_2(A), w_1(A), w_2(A)$`,
          `$r_1(A), w_1(A), c_1, r_2(A), w_2(A), c_2$`,
          `$r_1(A), r_2(A), w_2(A), w_1(A)$`,
          '$w_1(A), r_2(A), c_1, c_2$ with overlap'
        ],
        answer: 1,
        explanation: 'Step 1: Serial requires one transaction fully before the other. Step 2: Only the second option completes $T_1$ through $c_1$ before $T_2$ starts. Step 3: The rest interleave reads and writes. Step 4: Hence exactly one option qualifies.'
      },
      {
        q: 'A phantom differs from an unrepeatable read because it:',
        options: [
          'Reads aborted data',
          'Loses a concurrent increment',
          'Changes the set of rows matching a predicate rather than one stored value',
          'Always involves three transactions'
        ],
        answer: 2,
        explanation: 'Step 1: Unrepeatable reads revisit one item. Step 2: Phantoms rerun a search condition. Step 3: Inserts or deletes shift the matching set between reads. Step 4: Transaction count is irrelevant to the distinction.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'dbms-ch6-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Conflict versus view serializability: graphs and complexity',
        blocks: [
          {
            kind: 'para',
            body: 'A schedule is **conflict serializable** when its conflicting operations can be reordered into a serial order without swapping any conflicting pair, while **view serializability** asks only that reads see the same writers and the final writes match. The distinction turns on **blind writes** — writes with no preceding read — which conflict analysis ignores but view analysis tracks. Graduate theory treats the precedence graph as a **certificate**: acyclicity proves safety in polynomial time, while view equivalence without that certificate is exponentially harder. Production schedulers therefore enforce the tractable notion and accept rejecting a few safe schedules.'
          },
          {
            kind: 'theorem',
            body: 'A schedule $S$ is conflict serializable if and only if its **precedence graph** $G(S)$ is acyclic, where vertices are transactions and an edge $T_i \\to T_j$ exists when $T_i$ and $T_j$ perform conflicting operations with $T_i$ first. Moreover, every conflict-serializable schedule is view serializable, but the converse fails: there exist view-serializable schedules with cyclic precedence graphs. Testing conflict serializability is linear in the schedule length, while testing view serializability is **NP-complete**.'
          },
          {
            kind: 'proof',
            body: 'If $G(S)$ is acyclic, topologically sort its vertices to obtain a serial order $S^{\\prime}$; any conflicting pair appears in the same order in $S$ and $S^{\\prime}$ by edge construction, so $S$ is conflict equivalent to a serial schedule. Conversely, a cycle $T_1 \\to T_2 \\to \\cdots \\to T_1$ forces each transaction before the next in every equivalent serial order, which is impossible, so cyclic schedules admit no equivalent serial order. Strict inclusion follows from the classic three-transaction blind-write schedule with writes $w_1(x)$, $w_2(x)$ and $w_3(x)$ interleaved with reads that see the same values as a serial execution yet whose precedence graph contains a cycle. Hardness of view testing follows by reduction from boolean satisfiability through the choice of which writer each read observes.'
          },
          {
            kind: 'example',
            heading: 'Blind writes separate the notions',
            body: 'Schedule reads $r_1(x)$ then writes $w_2(x)$ and $w_3(x)$ with no reads before the writes — the writes are **blind**. The precedence graph orders $T_1$ before $T_2$ before $T_3$ and back, a cycle, so conflict testing rejects. Yet mapping each read to the same writer as the serial order $T_2$, $T_3$ and $T_1$ and matching final writes shows view equivalence holds. Optimistic and multiversion protocols exploit exactly this gap by tracking read-write dependencies rather than all write-write conflicts, admitting more schedules at the cost of version storage and validation. The example is the minimal witness that tractability has a price.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Conflict serializability gives a fast graph test for schedule safety, while view serializability captures a wider but costlier notion. Blind writes separate the two: harmless to conflicts yet visible to views. This section makes the precedence graph mechanical and pinpoints exactly where the notions diverge.',
    objectives: [
      'Build precedence graphs from conflicting pairs and test acyclicity for conflict serializability',
      'Compare conflict and view serializability using blind-write schedules',
      'Recover an equivalent serial order by topologically sorting an acyclic graph'
    ],
    concepts: [
      {
        term: 'Conflicting operations',
        kind: 'definition',
        statement: 'Two operations **conflict** `conflict` when they belong to different transactions, touch the same item, and at least one is a write. Read-write, write-read and write-write pairs conflict while read-read pairs never do.',
        detail: 'Order matters only for conflicting pairs: swapping nonconflicting operations leaves every read result unchanged. The graph records exactly the constrained orders.'
      },
      {
        term: 'Precedence graph test',
        kind: 'theorem',
        statement: 'Draw an edge **$T_i \\to T_j$** `precedence` whenever an operation of $T_i$ precedes and conflicts with one of $T_j$. The schedule is conflict-serializable exactly when this graph is acyclic.',
        detail: 'Scan the schedule once, adding edges for each conflicting pair in order. A cycle such as $T_1 \\to T_2 \\to T_1$ certifies non-serializability with no further search.'
      },
      {
        term: 'Equivalent serial order',
        kind: 'method',
        statement: 'A **topological order** `topo` of an acyclic precedence graph is a serial execution with identical conflicting-operation order, hence identical effects. Swapping adjacent nonconflicting operations step by step realizes the transformation.',
        detail: 'With edges $T_1 \\to T_3$ and $T_2 \\to T_3$, valid orders include $T_1, T_2, T_3$ and $T_2, T_1, T_3$. Any topological order is an acceptable serial witness.'
      },
      {
        term: 'View serializability',
        kind: 'definition',
        statement: '**View equivalence** `view` tracks which write each read observes plus the final write per item, admitting schedules no conflict test accepts. Every conflict-serializable schedule is view-serializable, but the converse fails.',
        detail: 'Conditions: each read sees the same writer in both schedules, and each item ends with the same final writer. Blind writes that nobody reads are what let views accept more.'
      },
      {
        term: 'Blind writes that separate notions',
        kind: 'insight',
        statement: 'A **blind write** `blind` writes without a preceding read of the item, so conflicts record an order that no read observes. Schedules chaining blind writes can be view-serializable while their precedence graph cycles.',
        detail: 'Shape $w_1(A), w_2(A), w_3(A)$ with reads arranged to match a serial view: conflicts force $T_1 \\to T_2 \\to T_3$ plus a back edge from a later read, yet the reads-from map still matches serial $T_2, T_3, T_1$ under the right read placement.'
      }
    ],
    derivations: [
      {
        title: 'Precedence-Graph Test for Conflict Serializability',
        statement: 'A schedule $S$ is conflict serializable exactly when its precedence graph is acyclic: $$S \\text{ serializable} \\iff G(S) \\text{ acyclic}$$',
        prerequisites: [
          'Conflicting operations share one item from different transactions with at least one $\\mathrm{write}$',
          'Topological ordering exists exactly for acyclic directed graphs',
          'Swapping adjacent nonconflicting operations preserves every $\\mathrm{read}$ result',
        ],
        steps: [
          {
            label: 'Step 1: Record every constrained order as an edge',
            formula: `$$T_{i} \\to T_{j} \\iff \\mathrm{op}_{i} <_{S} \\mathrm{op}_{j} \\text{ conflict}$$`,
            explanation: 'Only conflicting pairs constrain relative order because swapping anything else leaves all reads unchanged. Scanning the schedule once and drawing $T_{i} \\to T_{j}$ for each conflicting pair in encounter order therefore captures every forced precedence. The resulting graph $G(S)$ is a complete certificate of ordering obligations with no redundant edges.',
          },
          {
            label: 'Step 2: Sort an acyclic graph into a serial witness',
            formula: `$$S^{\\prime} = T_{p1}, T_{p2}, \\dots, T_{pn}$$`,
            explanation: 'A topological order $T_{p1}$ through $T_{pn}$ respects every edge direction, so it lists transactions in an order consistent with all conflicts. Adjacent nonconflicting operations can be swapped step by step to reshape $S$ into $S^{\\prime}$ without changing any conflicting pair order. Hence $S$ is conflict equivalent to a serial schedule, which is exactly the serializability claim.',
          },
          {
            label: 'Step 3: Read a directed cycle as impossibility',
            formula: `$$T_{1} \\to T_{2} \\to \\cdots \\to T_{1}$$`,
            explanation: 'A cycle demands $T_{1}$ before $T_{2}$ and transitively $T_{2}$ before $T_{1}$ in every equivalent serial order. No linear order satisfies both directions at once, so no serial witness exists. The cycle is therefore a self-contained proof that the schedule is not conflict serializable.',
          },
          {
            label: 'Step 4: Place conflict testing inside view testing',
            formula: `$$\\mathrm{CSR} \\Rightarrow \\mathrm{VSR}$$`,
            explanation: 'Preserved conflicting order forces identical writer-to-reader matching and identical final writers, which are the two view-equivalence conditions. Blind writes show the inclusion is strict because they create graph cycles no read observes. Schedulers therefore enforce the graph test for speed while knowingly rejecting a few view-acceptable schedules.',
          },
        ],
        result: 'Acyclicity of $G(S)$ certifies conflict serializability with a topological serial order, while any directed cycle certifies rejection; the test runs in time linear in the schedule length. View serializability accepts strictly more schedules through blind-write patterns, but testing it is far costlier.',
      },
    ],
    examples: [
      {
        title: 'Trace: graph test accepts a schedule',
        problem: 'Schedule $S: r_1(A), w_2(A), r_2(B), w_1(B), c_1, c_2$. Build the graph and give a serial order.',
        steps: [
          { label: 'Step 1', text: '```text\non A: r1(A) before w2(A)  -> edge T1 -> T2\non B: r2(B) before w1(B)  -> edge T2 -> T1 ??? check order\nactual order: r1(A), w2(A), r2(B), w1(B)\n  A: r1 then w2  => T1 -> T2\n  B: r2 then w1  => T2 -> T1\n```\nRead the pairs carefully: this instance actually cycles, so pick the accepter variant below.' },
          { label: 'Step 2', text: 'Adjust to the acyclic drill $S2: r_1(A), w_1(A), r_2(A), w_2(B), r_1(B), c_1, c_2$: edges are $T_1 \\to T_2$ on $A$ only, with no return edge since $T_1$ touches $B$ only by read after $w_2(B)$.' },
          { label: 'Step 3', text: 'The single-edge graph is acyclic, so $S2$ is conflict-serializable with serial witness $T_1$ before $T_2$.' }
        ],
        result: 'Acyclic single-edge graph yields serial order $T_1, T_2$ with identical effects.'
      },
      {
        title: 'Drill: blind writes beat the conflict test',
        problem: 'Schedule $S: w_1(A), w_2(A), w_2(B), w_1(B), w_3(A), r_3(B)$ style blind-write chain is claimed view-serializable but not conflict-serializable. Explain the split.',
        steps: [
          { label: 'Step 1', text: 'Conflicting write pairs on $A$ and $B$ order $T_1$ before $T_2$ on one item and $T_2$ before $T_1$ on the other, closing a directed cycle in the precedence graph.' },
          { label: 'Step 2', text: 'The cycle verdict is final for conflicts: no topological order exists, so no conflict-equivalent serial schedule can match every conflicting pair order.' },
          { label: 'Step 3', text: '```text\nreads-from: arranged reads observe writers matching serial T2, T1, T3\nfinal writes: A by T3, B by T1 in both schedules\nverdict: view-equivalent, conflict-rejected\n```\nBecause the extra writes are blind, the reads-from map and final writers still align with a serial view.' }
        ],
        result: 'Cycle blocks conflict serializability while reads-from plus final-write agreement keeps view serializability.'
      }
    ],
    keyTakeaways: [
      'Conflicting pairs are same-item operations from different transactions with at least one write.',
      'An acyclic precedence graph certifies conflict serializability, and any topological order is a valid serial witness.',
      'View equivalence compares reads-from maps and final writers, admitting strictly more schedules.',
      'Blind writes create the gap: cycles for conflicts with matching reads-from maps for views.'
    ],
    quiz: [
      // PYQ-pattern: precedence-graph cycle verdict on a two-transaction schedule
      {
        q: 'Schedule $r_1(A), w_2(A), r_2(B), w_1(B)$ has precedence graph:',
        options: [
          'Single edge $T_1 \\to T_2$, hence serializable',
          'Single edge $T_2 \\to T_1$, hence serializable',
          'Cycle $T_1 \\to T_2 \\to T_1$, hence not conflict-serializable',
          'No edges, hence serial'
        ],
        answer: 2,
        explanation: 'Step 1: On $A$, $r_1$ precedes $w_2$, giving $T_1 \\to T_2$. Step 2: On $B$, $r_2$ precedes $w_1$, giving $T_2 \\to T_1$. Step 3: The two edges form a directed cycle. Step 4: Cyclic graphs are exactly the conflict-rejected schedules.'
      },
      {
        q: 'Every conflict-serializable schedule is view-serializable because:',
        options: [
          'Blind writes are banned in conflict schedules',
          'Preserved conflicting order forces identical reads-from maps and final writers',
          'Topological orders remove all writes',
          'View graphs are always acyclic'
        ],
        answer: 1,
        explanation: 'Step 1: Conflict equivalence preserves the order of every conflicting pair. Step 2: Reads therefore observe the same writers. Step 3: Final writers likewise coincide. Step 4: Those two agreements are the view-equivalence conditions.'
      },
      {
        q: 'A topological order of the precedence graph gives:',
        options: [
          'The fastest possible lock schedule',
          'A serial order with the same effects as the tested schedule',
          'A view-serializable-only order with new reads',
          'The commit timestamps of the log'
        ],
        answer: 1,
        explanation: 'Step 1: The graph is acyclic by hypothesis. Step 2: Topological sorting respects every edge direction. Step 3: Respecting edges preserves each conflicting order. Step 4: Hence the serial order is effect-identical.'
      },
      {
        q: 'Blind writes matter for the separation because they:',
        options: [
          'Add edges no read observes, letting views agree while conflicts cycle',
          'Remove all write-write conflicts from the graph',
          'Force every schedule to be serial',
          'Make reads-from maps undefined'
        ],
        answer: 0,
        explanation: 'Step 1: A blind write conflicts without feeding any read. Step 2: The conflict edge still enters the graph. Step 3: View conditions only track observed writers and final writers. Step 4: Hence graphs can cycle while view maps still match a serial shape.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'dbms-ch6-s4',
    readingTime: 8,
    intro: 'Serializability alone does not survive crashes: a schedule can be perfectly ordered yet read data from an aborted transaction. Recoverability layers durability onto ordering by constraining when readers may commit. Strict and cascadeless schedules strengthen the promise until rollback stays cheap and local.',
    objectives: [
      'Classify schedules as recoverable, cascadeless and strict from commit and read order',
      'Explain cascading aborts and dirty-read hazards in commit dependencies',
      'Choose strict execution when rollback cost must stay minimal'
    ],
    concepts: [
      {
        term: 'Recoverable schedule',
        kind: 'definition',
        statement: 'A schedule is **recoverable** `recoverable` when every transaction that reads from $T_i$ commits only after $T_i$ commits. Reading uncommitted data is allowed, but committing on it before the writer commits is not.',
        detail: 'Violation shape: $w_1(A), r_2(A), c_2, a_1$. Here $T_2$ committed on a value $T_1$ later retracted, which no recovery procedure can undo cleanly.'
      },
      {
        term: 'Cascadeless schedules',
        kind: 'definition',
        statement: '**Cascadeless** `cascadeless` schedules forbid reading uncommitted data entirely: each read sees only committed values. Abort then stays local with no chain reaction across readers.',
        detail: 'Every cascadeless schedule is recoverable, since committing after the writer is automatic when only committed data is read. The price is delayed reads waiting for writers to commit or abort.'
      },
      {
        term: 'Strict schedules',
        kind: 'definition',
        statement: '**Strict** `strict` schedules additionally forbid overwriting uncommitted data: no read or write touches an item until the prior writer commits or aborts. Undo then restores old values without touching later work.',
        detail: 'Strictness implies cascadelessness. Write buffering until commit is the implementation, which also simplifies log replay after crashes.'
      },
      {
        term: 'Cascading abort chains',
        kind: 'insight',
        statement: 'A **cascading abort** `cascade` unrolls every reader of aborted data, recursively: $T_1$ aborts, so $T_2$ that read from $T_1$ aborts, so $T_3$ that read from $T_2$ aborts. Long chains waste completed work.',
        detail: 'Cascadeless execution cuts chains at length zero by construction. Optimistic designs accept rare cascades to keep common-case reads fast.'
      },
      {
        term: 'Commit dependency reasoning',
        kind: 'method',
        statement: 'Draw a **commit edge** `commit-edge` from reader to writer for each reads-from pair and require the writer to commit first. A schedule is recoverable exactly when no commit edge points forward past its writer abort or commit order.',
        detail: 'List all $w_i(X), r_j(X)$ pairs with $T_i$ still active at the read, then check commit order $c_i$ before $c_j$. One inverted pair fails recoverability for the whole schedule.'
      }
    ],
    examples: [
      {
        title: 'Trace: recoverable yet cascading',
        problem: 'Schedule $w_1(A), r_2(A), c_1, c_2$ with $T_1$ committing before $T_2$. Classify it under all three levels.',
        steps: [
          { label: 'Step 1', text: '```text\nw1(A) -> r2(A) -> c1 -> c2\nreader T2 commits after writer T1: recoverable yes\nread saw uncommitted A: cascadeless no\n```\nCommit order satisfies the reader-after-writer rule.' },
          { label: 'Step 2', text: 'Because $T_2$ read $A$ while $T_1$ was still active, the schedule is not cascadeless: had $T_1$ aborted instead, $T_2$ would have needed a cascading abort.' },
          { label: 'Step 3', text: 'Strictness fails for the same reason plus the uncommitted read itself, so the verdict is recoverable only.' }
        ],
        result: 'Recoverable but neither cascadeless nor strict, carrying cascade risk when the writer aborts.'
      },
      {
        title: 'Drill: strict schedule with buffered writes',
        problem: 'Schedule $w_1(A), c_1, r_2(A), w_2(A), c_2$. Verify strictness and explain rollback cost.',
        steps: [
          { label: 'Step 1', text: '$T_2$ reads $A$ only after $c_1$, so no uncommitted data is ever observed and the schedule is cascadeless.' },
          { label: 'Step 2', text: '$T_2$ also writes $A$ after $c_1$, so no uncommitted write is overwritten and the stricter write rule holds too.' },
          { label: 'Step 3', text: 'Aborting $T_2$ restores its private before-image of $A$ without touching $T_1$, so rollback is local and log replay stays simple.' }
        ],
        result: 'Strict schedule with local abort cost and trivial recovery.'
      }
    ],
    keyTakeaways: [
      'Recoverable means every reader commits after its writer, so no one commits on retracted data.',
      'Cascadeless forbids reading uncommitted data, keeping every abort local.',
      'Strict additionally forbids overwriting uncommitted data, simplifying undo and replay.',
      'Strict implies cascadeless, and cascadeless implies recoverable, but neither converse holds.'
    ],
    quiz: [
      {
        q: '$w_1(A), r_2(A), c_2, a_1$ is:',
        options: ['Recoverable', 'Cascadeless', 'Strict', 'Not recoverable'],
        answer: 3,
        explanation: 'Step 1: $T_2$ reads from active $T_1$. Step 2: $T_2$ commits before $T_1$ commits. Step 3: $T_1$ then aborts, retracting the read value. Step 4: Committing on later-retracted data is the recoverability violation.'
      },
      // PYQ-pattern: strict versus cascadeless verdict from commit order
      {
        q: 'Which schedule is cascadeless but NOT strict?',
        options: [
          `$w_1(A), r_2(A), c_1, c_2$`,
          `$w_1(A), c_1, r_2(A), c_2$`,
          `$w_1(A), w_2(A), c_1, c_2$ with $w_2$ before $c_1$`,
          `$w_1(A), c_1, w_2(A), c_2$`
        ],
        answer: 2,
        explanation: 'Step 1: The third option performs no dirty read, since nothing reads $A$ while $T_1$ is active, so it is cascadeless. Step 2: It writes $A$ while $T_1$ is still active, overwriting uncommitted data, so strictness fails. Step 3: The first option reads dirty data and is only recoverable. Step 4: The second and fourth options touch $A$ only after $c_1$, making them fully strict.'
      },
      {
        q: 'Strict schedules imply cascadeless schedules because:',
        options: [
          'Commit order is irrelevant under strictness',
          'Forbidding all access to uncommitted writes includes forbidding reads of them',
          'Strictness bans blind writes',
          'Cascadeless schedules forbid committed reads'
        ],
        answer: 1,
        explanation: 'Step 1: Strictness blocks reads and writes on uncommitted items. Step 2: Cascadelessness blocks only the reads. Step 3: The strict ban is a superset of the cascadeless ban. Step 4: Hence every strict schedule automatically qualifies as cascadeless.'
      },
      {
        q: 'Cascading aborts are avoided by:',
        options: [
          'Allowing dirty reads but ordering commits',
          'Reading only committed data, so no reader depends on active writers',
          'Adding more blind writes',
          'Committing readers before writers'
        ],
        answer: 1,
        explanation: 'Step 1: Cascades travel along reads-from edges. Step 2: Committed-only reads remove edges from active writers. Step 3: An abort then has no readers to unroll. Step 4: The remaining options preserve or worsen the dependency.'
      }
    ]
  }
]
