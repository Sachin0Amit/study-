import type { SectionContent } from '../library'

// ============================================================================
// Engineering Semester Exams — CSE (bookId 'cse-complete') — lesson content.
// Unit-1 (first section) master lessons for eight core CSE chapters across the
// 8-semester B.Tech structure (standard university paper pattern): Data Structures,
// Operating Systems, Theory of Automata, DBMS, Computer Networks, Compiler
// Design, Software Engineering and Machine Learning.
// Every section targets the recurring 5-year university-paper pattern:
// definitions, the standard numerical/trace question, and short notes.
// ============================================================================

export const enggCseContent: SectionContent[] = [
  // ------------------------------------------------------------- DSA 12.1
  {
    sectionId: 'cse-e-dsa-s1',
    readingTime: 10,
    prerequisites: [
      'C arrays, pointers and the `sizeof` operator (Programming for Problem Solving)',
      'big-O intuition for counting basic operations',
    ],
    intro: 'Data Structures is the signature Semester 3 subject of every B.Tech CSE programme, and Unit 1 is where assessors collect easy marks: row-major/column-major address numericals and sparse-matrix triplet representation have appeared in almost every the state technical universities paper of the last five years, usually as a compulsory 7-mark question. This section covers the ADT viewpoint, address arithmetic, the triplet form of sparse matrices and string processing with pattern matching.',
    objectives: [
      'Define an **abstract data type (ADT)** and separate specification from implementation for arrays and strings',
      'Compute element addresses in row-major and column-major order using $LOC(A[i][j]) = B + W[(i - l_r)N + (j - l_c)]$ and its column-major twin',
      'Represent a sparse matrix in triplet form, decide when it beats dense storage, and trace sparse-matrix addition',
      'Trace naive string pattern matching and derive its $O((n - m + 1)m)$ worst case',
    ],
    concepts: [
      {
        term: 'Abstract data type',
        kind: 'definition',
        statement: 'An **abstract data type** is a mathematical model together with the set of operations defined on it, specified independently of any implementation; the `array` ADT exports operations like `insert`, `delete`, `traverse` and `search` over a fixed-capacity sequence.',
        detail: 'Assessments ask you to state the ADT for an array or stack (data members plus operation signatures) and then give one implementation such as `struct Array { int A[10]; int length; }`. The classic mistake is listing only the data and forgetting that operations belong to the ADT contract.',
      },
      {
        term: 'Row-major and column-major address laws',
        kind: 'law',
        statement: 'For a 2-D array with base address $B$, element size $W$ bytes and $N$ columns, **row-major** order stores $LOC(A[i][j]) = B + W[(i - l_r)N + (j - l_c)]$, while **column-major** order gives $LOC(A[i][j]) = B + W[(j - l_c)M + (i - l_r)]$ with $M$ rows.',
        detail: 'C stores arrays row-major while Fortran and MATLAB store them column-major — a favourite 2-mark comparison. Insert the lower bounds $l_r, l_c$ carefully when the declaration is written `A[4..10][2..8]`; forgetting them is the single most common mark-losing slip in this numerical.',
      },
      {
        term: 'Sparse matrix triplet representation',
        kind: 'method',
        statement: 'A matrix is **sparse** when most entries are zero; the **triplet (3-tuple) representation** stores one header row $(m, n, t)$ followed by $(i, j, value)$ for each nonzero — `3 x (t + 1)` cells instead of $m \\times n$.',
        detail: 'University papers hand you a 4x5 or 5x6 matrix and ask for its triplet form — list the nonzeros row by row so column indices increase within each row. The representation pays off only when $3(t + 1) < mn$; forgetting the header row when counting storage is the usual error.',
      },
      {
        term: 'Adding two sparse triplets',
        kind: 'method',
        statement: 'Sparse **addition is a row-major merge**: both matrices must have identical dimensions; copy triplets while row indices differ, and when row and column indices both match emit $a_{ij} + b_{ij}$ (skipping the entry if it sums to zero, per course convention).',
        detail: 'Assessments ask for the triplet sum of two small sparse matrices. State the dimension check first — different orders cannot be added — and note that the result count $t$ can shrink when entries cancel to zero.',
      },
      {
        term: 'Strings and naive pattern matching',
        kind: 'insight',
        statement: 'A C string is a `char` array terminated by the null character `\\0`, so `"hello"` occupies $6$ bytes; the **naive (brute-force) matcher** slides the pattern across the text and runs in $O((n - m + 1)m)$ time with $O(1)$ space.',
        detail: 'Papers ask for a dry run on text `AAAAAB` with pattern `AAB` — in the worst case every alignment almost matches, giving the quadratic bound — plus a two-line note on how KMP removes re-comparison using the failure function.',
      },
    ],
    examples: [
      {
        title: 'Row-major versus column-major address',
        problem: 'A 2-D array `float A[8][10]` is stored from base address 2000 with each float taking 4 bytes. Using 0-based indexing, find the address of `A[5][7]` in (a) row-major and (b) column-major order.',
        steps: [
          { label: 'Step 1', text: '```text\nM = 8 rows, N = 10 columns, W = 4 bytes, B = 2000, target (i, j) = (5, 7)\n```\nIdentify the parameters: $M = 8$, $N = 10$, $W = 4$, $B = 2000$ and the element $(i, j) = (5, 7)$ with lower bounds zero.' },
          { label: 'Step 2', text: 'Row-major: $LOC = B + W(iN + j) = 2000 + 4(5 \\times 10 + 7) = 2000 + 4 \\times 57 = 2000 + 228 = 2228$.' },
          { label: 'Step 3', text: 'Column-major: $LOC = B + W(jM + i) = 2000 + 4(7 \\times 8 + 5) = 2000 + 4 \\times 61 = 2000 + 244 = 2244$.' },
          { label: 'Step 4', text: 'The two orders differ by $2244 - 2228 = 16$ bytes, i.e. 4 elements: row-major walks the 10-column row first while column-major walks the 8-row column first. Always confirm which order the question specifies before substituting.' },
        ],
        result: 'Row-major address $= 2228$; column-major address $= 2244$.',
      },
      {
        title: 'Sparse matrix to triplet form',
        problem: 'Represent the following $5 \\times 6$ sparse matrix in triplet (3-tuple) form and compare its storage with dense storage of one integer per cell:\n\n```text\nrow 1:  0 0 0 0 9 0\nrow 2:  0 8 0 0 0 0\nrow 3:  0 0 0 0 0 0\nrow 4:  0 0 3 0 0 0\nrow 5:  5 0 0 0 0 2\n```',
        steps: [
          { label: 'Step 1', text: 'Count the nonzeros: entries at $(1,5), (2,2), (4,3), (5,1), (5,6)$, so $t = 5$ out of $mn = 30$ cells — density about $17\\%$, comfortably sparse.' },
          { label: 'Step 2', text: '```text\n5 6 5\n1 5 9\n2 2 8\n4 3 3\n5 1 5\n5 6 2\n```\nWrite the header $(m, n, t) = (5, 6, 5)$ and then one row per nonzero in row-major order, keeping column indices increasing within each row.' },
          { label: 'Step 3', text: 'Storage: dense storage needs $5 \\times 6 = 30$ integers, while the triplet needs $3 \\times (5 + 1) = 18$ integers — a $40\\%$ saving.' },
          { label: 'Step 4', text: 'The transpose uses the same idea with every $(i, j, v)$ rewritten as $(j, i, v)$ and the rows re-sorted by the new first column — a favourite follow-up question.' },
        ],
        result: 'Triplet has 6 rows: header (5, 6, 5) then (1,5,9), (2,2,8), (4,3,3), (5,1,5), (5,6,2); 18 cells versus 30 dense cells.',
      },
    ],
    keyTakeaways: [
      'An ADT fixes what operations mean; the implementation (array, linked list) decides their cost.',
      'Row-major: $B + W(iN + j)$; column-major: $B + W(jM + i)$ — substitute the lower bounds when indices do not start at 0.',
      'Triplet form stores $3(t+1)$ cells for $t$ nonzeros and beats dense storage roughly when $t < mn/3$.',
      'C strings end in `\\0` and the naive matcher costs $O((n-m+1)m)$ — the bound KMP improves to $O(n+m)$.',
    ],
    quiz: [
      {
        q: 'An `int A[10][20]` array (4 bytes per element) has base address 1000 with 0-based indexing. The row-major address of `A[5][10]` is',
        options: ['1420', '1440', '1540', '2440'],
        answer: 1,
        explanation: 'Step 1: Identify $W = 4$, $B = 1000$ and $N = 20$ columns. Step 2: Row-major offset $= (iN + j)W = (5 \\times 20 + 10) \\times 4 = 440$. Step 3: Address $= 1000 + 440 = 1440$. Step 4: 1420 is the column-major value $(jM + i)W = (10 \\times 10 + 5) \\times 4$ — the intended trap.',
      },
      // PYQ-pattern: triplet storage counting
      {
        q: 'A 100 x 100 sparse matrix has 60 nonzeros. Its triplet representation (with the header row) has how many rows?',
        options: ['60', '180', '183', '61'],
        answer: 3,
        explanation: 'Step 1: Each nonzero contributes exactly one triplet row. Step 2: With $t = 60$ there are 60 such rows. Step 3: The header row $(m, n, t)$ adds one more. Step 4: Total $= 61$; 180 and 183 count columns, not rows.',
      },
      {
        q: 'For 0-based indexing with $M$ rows and $N$ columns, the column-major address of $A[i][j]$ is',
        options: ['$B + W(iM + j)$', '$B + W(jN + i)$', '$B + W(jM + i)$', '$B + W(iN + j)$'],
        answer: 2,
        explanation: 'Step 1: Column-major storage fills column 0 completely, then column 1, and so on. Step 2: Before column $j$ there are $j$ full columns of $M$ elements, contributing $jM$ cells. Step 3: Within column $j$, row $i$ adds $i$ more cells, so the offset is $(jM + i)W$. Step 4: The last option is the row-major rule — the standard assessment mix-up.',
      },
      {
        q: 'The worst-case running time of naive string matching for text length $n$ and pattern length $m$ is',
        options: ['$O(n + m)$', '$O(n \\log m)$', '$O((n - m + 1)m)$', '$O(m \\log n)$'],
        answer: 2,
        explanation: 'Step 1: The pattern can align at $n - m + 1$ starting positions. Step 2: In the worst case (text `AAAAAA`, pattern `AAB`) each alignment compares $m$ characters before failing. Step 3: The total is about $(n - m + 1) \\times m$ comparisons. Step 4: $O(n + m)$ is KMP with its failure function, not the naive method.',
      },
    ],
  },
  // -------------------------------------------------------------- OS 18.1
  {
    sectionId: 'cse-e-os-s1',
    readingTime: 9,
    prerequisites: [
      'How a C program executes and lays out its memory',
      'The idea of interrupts and device drivers (Computer Organization helps)',
    ],
    intro: 'Operating Systems is the Semester 4 systems core, and assessors open nearly every paper with this unit: define the OS as a resource manager, distinguish kernel from user mode, and trace one system call — a pattern sustained across five years of the state technical universities papers as a 7–10 mark question. This section builds that vocabulary along with the classic OS structures (monolithic, layered, microkernel, hybrid) that you must be able to compare.',
    objectives: [
      'Explain the OS as an **extended machine** and a **resource manager**, listing the resources it allocates',
      'Distinguish kernel mode from user mode using the mode bit and identify privileged instructions',
      'Trace a system call such as `read()` from the library wrapper through the trap into the kernel and back',
      'Compare batch, multiprogramming, time-sharing and real-time systems, and monolithic, layered, microkernel and modular OS structures',
    ],
    concepts: [
      {
        term: 'OS as extended machine and resource manager',
        kind: 'definition',
        statement: 'The OS is **system software** that (i) presents an **extended machine** — clean abstractions like files and sockets above raw hardware — and (ii) acts as a **resource manager** arbitrating CPU, memory, I/O devices and files among competing programs.',
        detail: 'Short 2-mark questions ask for exactly these two views plus examples of managed resources. A common error is calling the OS the first program that runs — that is the bootloader; the OS is what the bootloader hands control to.',
      },
      {
        term: 'Dual-mode operation',
        kind: 'insight',
        statement: 'Hardware provides a **mode bit**: $0$ = kernel (supervisor) mode and $1$ = user mode. Instructions such as I/O, halting the CPU, masking interrupts and switching the page-table base are **privileged** and legal only in kernel mode.',
        detail: 'Assessments ask which instructions are privileged and what happens on violation — the hardware traps to the OS, which normally terminates the offender. Reversing the bit values (kernel = 1) is a classic MCQ trap; remember "zero = omnipotent".',
      },
      {
        term: 'System call mechanism',
        kind: 'method',
        statement: 'A **system call** is how a user program requests an OS service: the C library places the syscall number and arguments in registers and executes a trap instruction (`syscall` on x86-64, `int 0x80` on old x86, `svc` on ARM); the hardware switches to kernel mode and jumps through the **system-call table** to the handler.',
        detail: 'Papers ask for the numbered sequence user program → library wrapper → trap → mode switch → table dispatch → kernel service → return, and for the difference between a system call and an ordinary function call (a mode switch and a protection-boundary crossing versus a plain stack jump). The category list — process control, file, device, information, communication, protection — also appears as short notes.',
      },
      {
        term: 'OS kernel structures',
        kind: 'method',
        statement: 'The four classic **structures** are **monolithic** (everything in kernel space — traditional UNIX; fastest but fragile), **layered** ($n$ strict levels, each using only level $n-1$ — Dijkstra\u2019s THE OS), **microkernel** (minimal kernel with services like drivers running as user servers communicating by message passing — Minix, QNX) and **modular/hybrid** (loadable kernel modules — Solaris, Windows, macOS).',
        detail: 'The expected comparison lines: microkernel = more reliable and easier to extend, but extra message-passing overhead; layered = clean design but hard to assign functions to layers and slower to cross. Cite one example OS per structure for full marks.',
      },
      {
        term: 'Types of operating systems',
        kind: 'definition',
        statement: 'The main **OS types** are batch (no user interaction, throughput-oriented), multiprogramming (many jobs in memory to keep the CPU busy), time-sharing or multitasking (CPU switched by timer among processes for responsiveness) and real-time (deadline-bound — hard if a missed deadline is catastrophic), plus distributed and embedded variants.',
        detail: 'Classify-the-scenario questions (airline reservation, payroll, missile guidance) are near-certain; answer with the criterion first — interactivity, CPU utilisation or deadline criticality — then the label. Distinguish multiprogramming (goal = utilisation) from multitasking (goal = interactive responsiveness).',
      },
    ],
    examples: [
      {
        title: 'Tracing the read() system call',
        problem: 'A C program executes `n = read(fd, buf, 512);`. List the sequence of events from the library call to the return, marking every mode switch.',
        steps: [
          { label: 'Step 1', text: 'The program calls the C library wrapper `read()`, which loads the syscall number for read and the arguments fd, buf and 512 into the registers defined by the calling convention.' },
          { label: 'Step 2', text: '```text\nsyscall instruction -> trap -> mode bit 1 -> 0, user context saved\n```\nThe wrapper executes the trap instruction; the hardware saves the user program counter, flips the mode bit from 1 to 0 and transfers control to the fixed kernel entry point that indexes the system-call table.' },
          { label: 'Step 3', text: 'The kernel validates the arguments — is fd an open file, is buf a legal writable user address — then either copies buffered data or blocks the process and schedules another one until the device supplies 512 bytes.' },
          { label: 'Step 4', text: 'The kernel places the return value in the result register, restores the user context, resets the mode bit to 1 and resumes the instruction after the call — exactly two mode switches per system call.' },
        ],
        result: 'User call → register setup → trap (mode 1→0) → table dispatch → kernel service (possible block) → return value → mode 0→1 → resume.',
      },
      {
        title: 'Choosing the OS type for four systems',
        problem: 'Classify the operating system most suited to: (i) weekly payroll of a company, (ii) airline reservation counters, (iii) a flight-control computer, (iv) a video-streaming server.',
        steps: [
          { label: 'Step 1', text: 'Fix the selection criteria first: interactivity, CPU utilisation and deadline criticality — systems with similar needs get the same OS type.' },
          { label: 'Step 2', text: '(i) Payroll is submitted, runs unattended overnight and values throughput — **batch processing**. (ii) Reservation counters need many concurrent interactive queries with fast response — **time-sharing**.' },
          { label: 'Step 3', text: '(iii) Flight control must respond within hard deadlines where failure is catastrophic — **hard real-time**, judged on guaranteed worst-case latency, never average speed.' },
          { label: 'Step 4', text: '(iv) Streaming tolerates an occasional late frame but not systematic ones — **soft real-time**, prioritising continuous media delivery over strict guarantees.' },
        ],
        result: '(i) batch, (ii) time-sharing, (iii) hard real-time, (iv) soft real-time — each justified by its defining criterion.',
      },
    ],
    keyTakeaways: [
      'The OS is an extended machine (abstractions) and a resource manager (arbitration of CPU, memory, I/O and files).',
      'Mode bit 0 = kernel, 1 = user; privileged instructions (I/O, halt, interrupt masks) execute only in kernel mode.',
      'A system call crosses the protection boundary via a trap and the syscall table — two mode switches, unlike a plain function call.',
      'Structure trade-off: monolithic is fastest, microkernel is most isolated but pays message-passing cost, layered is cleanest but slowest to cross.',
    ],
    quiz: [
      {
        q: 'The mode bit of the CPU reads 1. The processor is in',
        options: ['user mode', 'kernel mode', 'bootstrap mode', 'interrupt mode'],
        answer: 0,
        explanation: 'Step 1: Recall the convention — 0 denotes kernel (supervisor) mode and 1 denotes user mode. Step 2: A bit reading 1 therefore means unprivileged user code is running. Step 3: A privileged instruction attempted now would trap to the OS. Step 4: "Kernel = 1" is the planted reversal trap.',
      },
      {
        q: 'Which of the following is a privileged instruction?',
        options: ['Adding two registers', 'Loading a value from user memory', 'Masking a hardware interrupt', 'Branching to a subroutine'],
        answer: 2,
        explanation: 'Step 1: Privileged instructions affect the whole machine or other processes, not just the running program. Step 2: Arithmetic, user-memory loads and branches only touch the calling process. Step 3: Masking interrupts changes system-wide behaviour, so it must be privileged. Step 4: If user code could mask interrupts it could monopolise the CPU forever.',
      },
      // PYQ-pattern: structure comparison short note
      {
        q: 'The key mechanism that makes a microkernel slower than a monolithic kernel is',
        options: ['larger kernel image size', 'message passing between user-space servers', 'absence of a system-call table', 'lack of device drivers'],
        answer: 1,
        explanation: 'Step 1: In a microkernel only IPC, scheduling and basic memory management stay in kernel space. Step 2: File systems and drivers run as user-level servers. Step 3: Every service request becomes message traffic with extra context switches — the performance cost. Step 4: Drivers do exist, just outside the kernel, so the last option is wrong.',
      },
      {
        q: 'Time-sharing systems achieve interactivity primarily through',
        options: ['spooling jobs onto disk', 'multiprogramming without interrupts', 'dedicating a terminal to each process', 'rapid CPU switching driven by timer interrupts'],
        answer: 3,
        explanation: 'Step 1: Interactivity demands that every active process gets CPU attention within milliseconds. Step 2: A hardware timer interrupts each running process after its quantum expires. Step 3: The scheduler then switches the CPU to another process, creating the illusion of parallel terminals. Step 4: Spooling is a batch-world buffering idea, not an interactivity mechanism.',
      },
    ],
  },
  // ------------------------------------------------------------- TOC 20.1
  {
    sectionId: 'cse-e-toc-s1',
    readingTime: 11,
    prerequisites: [
      'Sets, relations and functions (Discrete Structures)',
      'Proof by induction and contradiction basics',
    ],
    intro: 'Theory of Automata is the Semester 4 abstract core, and its Unit 1 is the highest-scoring unit of the subject: construct a DFA for a language, convert an NFA to a DFA by subset construction, then minimise — these three tasks recur in five straight years of the state technical universities papers, usually 10–14 marks combined. The section treats finite automata as the mathematics of finite memory.',
    objectives: [
      'Write a DFA as the five-tuple $M = (Q, \\Sigma, \\delta, q_0, F)$ and read the extended transition function',
      'Construct DFAs for arithmetic and pattern languages such as binary multiples of 3 or strings ending in 01',
      'Convert any NFA to an equivalent DFA via subset construction with the $2^n$ bound',
      'Minimise a DFA by removing unreachable states and refining equivalence partitions; state the role of Kleene\u2019s theorem and the pumping lemma',
    ],
    concepts: [
      {
        term: 'Deterministic finite automaton',
        kind: 'definition',
        statement: 'A **deterministic finite automaton** is $M = (Q, \\Sigma, \\delta, q_0, F)$ — a finite state set, input alphabet, transition function $\\delta : Q \\times \\Sigma \\to Q$, start state and accepting set $F$; the language accepted is $L(M) = \\{w : \\hat{\\delta}(q_0, w) \\in F\\}$.',
        detail: 'Assessments demand the formal tuple before the diagram. A common error is an incomplete transition table — in a DFA every (state, symbol) pair must have exactly one target; if your table has holes you have really designed an NFA.',
      },
      {
        term: 'Nondeterminism and epsilon moves',
        kind: 'definition',
        statement: 'A **nondeterministic FA** allows $\\delta : Q \\times \\Sigma \\to 2^Q$ (a set of targets, possibly empty) plus **ε-transitions** that fire without consuming input; the NFA accepts when **any** run of choices reaches a final state.',
        detail: 'NFAs are easier to design but no more powerful — by Kleene\u2019s theorem DFAs, NFAs and regular expressions all define exactly the regular languages. Students lose marks claiming NFAs recognise more; they only express the same class more concisely.',
      },
      {
        term: 'Subset construction',
        kind: 'method',
        statement: '**Subset construction** converts an NFA over states $Q$ into a DFA whose states are subsets of $Q$: start from the ε-closure of $\\{q_0\\}$ and set $\\delta\'(S, a) = \\epsilon\\text{-closure}\\left(\\bigcup_{q \\in S} \\delta(q, a)\\right)$; a DFA state is accepting when it contains an NFA final state.',
        detail: 'Only reachable subsets are ever built, so practical blow-up is small even though the worst case is $2^n$. Forgetting the ε-closure when starting or moving is the most common conversion error; the deterministic version of this assessment task usually has no ε-moves at all.',
      },
      {
        term: 'DFA minimisation',
        kind: 'method',
        statement: 'To **minimise a DFA**: (1) drop unreachable states; (2) partition states into final versus non-final; (3) repeatedly split any class whose states send some symbol into different classes; the fixed point is the unique minimal DFA (up to isomorphism) whose states are the Myhill–Nerode equivalence classes.',
        detail: 'Papers hand you a 5–6 state DFA to minimise. Work a table of successive partitions and cite minimality and uniqueness for full marks; merging two states that some string distinguishes is the fatal error.',
      },
      {
        term: 'Regular expressions and their limits',
        kind: 'theorem',
        statement: '**Kleene\u2019s theorem**: a language is regular iff some finite automaton accepts it iff some regular expression denotes it. The **pumping lemma** — for regular $L$ there is a length $p$ such that $w = xyz$ with $|xy| \\le p$, $|y| \\ge 1$ and $xy^iz \\in L$ for every $i$ — proves languages like $\\{0^n1^n\\}$ **not** regular.',
        detail: 'The pumping lemma is a necessary condition for regularity, never a sufficient one; using it to prove a language regular earns zero. Assessments want the contrapositive argument: if for every valid decomposition some $i$ pumps the word out of the language, the language cannot be regular.',
      },
    ],
    examples: [
      {
        title: 'DFA for binary strings divisible by 3',
        problem: 'Construct a DFA over $\\{0, 1\\}$ accepting exactly the binary representations of numbers divisible by 3 (including 0), and check it on $1001$ and $101$.',
        steps: [
          { label: 'Step 1', text: 'Model the memory: the only fact a finite automaton can track about the number read so far is its remainder $r \\in \\{0, 1, 2\\}$. Take states $q_0, q_1, q_2$ for the three remainders, start $q_0$, accepting set $\\{q_0\\}$.' },
          { label: 'Step 2', text: 'Appending a digit $d$ maps the value $N$ to $2N + d$, so the remainder updates as $r \\mapsto (2r + d) \\bmod 3$. This gives the table: $q_0$: $0 \\to q_0$, $1 \\to q_1$; $q_1$: $0 \\to q_2$, $1 \\to q_0$; $q_2$: $0 \\to q_1$, $1 \\to q_2$.' },
          { label: 'Step 3', text: '```text\n1001 (= 9):  q0 -1-> q1 -0-> q2 -0-> q1 -1-> q0   accept\n```\nTrace $1001_2 = 9$: it ends in $q_0$, and indeed $9 = 3 \\times 3$ is divisible by 3.' },
          { label: 'Step 4', text: '```text\n101 (= 5):   q0 -1-> q1 -0-> q2 -1-> q2           reject\n```\nTrace $101_2 = 5$: it ends in $q_2$, rejected since $5 \\bmod 3 = 2$. The automaton is already minimal — the three remainders are pairwise distinguishable (the suffix 0 leads $q_0$ to acceptance but $q_1$ to rejection).' },
        ],
        result: 'A three-state DFA with transition $r\' = (2r + d) \\bmod 3$ and single accepting state $q_0$; accepts 1001 (9), rejects 101 (5).',
      },
      {
        title: 'NFA to DFA by subset construction',
        problem: 'Convert the NFA $N$ for strings over $\\{0, 1\\}$ ending in $01$ — states $\\{A, B, C\\}$, start $A$, final $\\{C\\}$, with $\\delta(A,0) = \\{A, B\\}$, $\\delta(A,1) = \\{A\\}$ and $\\delta(B,1) = \\{C\\}$ — into an equivalent DFA.',
        steps: [
          { label: 'Step 1', text: 'The DFA start state is the singleton $\\{A\\}$. On 0 it reaches $\\{A\\} \\cup \\{B\\} = \\{A, B\\}$; on 1 it stays at $\\{A\\}$. Name the new subset $S_1 = \\{A, B\\}$.' },
          { label: 'Step 2', text: 'From $S_1$: on 0, $\\delta(A,0) \\cup \\delta(B,0) = \\{A, B\\} = S_1$; on 1, $\\{A\\} \\cup \\{C\\} = \\{A, C\\}$ — name it $S_2$.' },
          { label: 'Step 3', text: 'From $S_2$: on 0 back to $S_1$; on 1 back to $\\{A\\}$. No new subsets appear, so the DFA has the three states $\\{A\\}, \\{A,B\\}, \\{A,C\\}$, with $S_2$ accepting because it contains the NFA final state $C$.' },
          { label: 'Step 4', text: '```text\n0101:  {A} -0-> {A,B} -1-> {A,C} -0-> {A,B} -1-> {A,C}   accept\n```\nCheck $w = 0101$: it ends in the accepting subset, and 0101 indeed ends in 01. The resulting DFA is minimal at three states.' },
        ],
        result: 'DFA states $\\{A\\}, \\{A,B\\}, \\{A,C\\}$ with accepting state $\\{A,C\\}$ — three states, no subset blow-up.',
      },
    ],
    keyTakeaways: [
      'A DFA is the tuple $(Q, \\Sigma, \\delta, q_0, F)$ with a total, single-valued $\\delta$; the NFA relaxes both to sets and ε-moves.',
      'Design trick: states equal the finite memory of the problem — the remainder mod 3, or the last symbols seen.',
      'Subset construction builds DFA states as subsets of NFA states; worst case $2^n$, accepting means containing an NFA final state.',
      'Minimisation = drop unreachable states then refine partitions; the minimal DFA is unique, and the pumping lemma proves non-regularity — never regularity.',
    ],
    quiz: [
      {
        q: 'The minimum number of states in a DFA accepting binary strings whose value is divisible by 3 is',
        options: ['2', '3', '4', 'infinitely many'],
        answer: 1,
        explanation: 'Step 1: A DFA has finite memory, so it can only track the current remainder. Step 2: Divisibility by 3 needs three distinguishable remainders 0, 1 and 2. Step 3: The states for remainders 0 and 1 are distinguished by the suffix 0 — from remainder 0 it keeps you accepting, from remainder 1 it moves you to 2, rejecting. Step 4: Fewer than three states would merge two remainders and misclassify some multiple.',
      },
      {
        q: 'During subset construction, an NFA with $n$ states can require up to how many DFA states?',
        options: ['$n$', '$n^2$', '$2^n$', '$n!$'],
        answer: 2,
        explanation: 'Step 1: Each DFA state is a subset of the NFA state set. Step 2: An $n$-state NFA has $2^n$ subsets. Step 3: Adversarial NFAs make every subset reachable, achieving the bound. Step 4: In practice only reachable subsets are constructed, so most conversions stay small.',
      },
      {
        q: 'Which of these languages is regular?',
        options: ['$\\{0^n1^n : n \\ge 0\\}$', 'strings over $\\{0,1\\}$ containing the substring 01', '$\\{ww : w \\in \\{0,1\\}^*\\}$', '$\\{0^{n^2} : n \\ge 0\\}$'],
        answer: 1,
        explanation: 'Step 1: Test for finite memory — can a fixed number of states capture what must be remembered? Step 2: Substring detection needs only "have I seen 01 yet", so a three-state DFA accepts it. Step 3: Balanced counting ($0^n1^n$), string copying ($ww$) and quadratic lengths all need unbounded memory and fall to pumping-lemma proofs. Step 4: Hence only the substring language is regular.',
      },
      {
        q: 'When minimising a DFA, the initial partition places which states together?',
        options: ['states with equal in-degree', 'states reachable in one step', 'states whose labels share a letter', 'all accepting states together and all non-accepting states together'],
        answer: 3,
        explanation: 'Step 1: Two states are equivalent if no suffix distinguishes them. Step 2: The empty string already distinguishes accepting from non-accepting states. Step 3: So refinement starts from finals versus non-finals and splits classes whose members behave differently on some symbol. Step 4: The process stops when no class splits, leaving the Myhill–Nerode classes.',
      },
    ],
  },
  // ------------------------------------------------------------ DBMS 21.1
  {
    sectionId: 'cse-e-dbms-s1',
    readingTime: 11,
    prerequisites: [
      'Tables, rows and columns from everyday spreadsheet use',
      'Basic set operations: union, subset, Cartesian product',
    ],
    intro: 'DBMS is the Semester 5 core in which this unit is the guaranteed opener: draw and explain the three-level architecture with data independence, then design an ER diagram and map it to tables — a question pattern repeated across the state technical universities papers year after year with 10-mark weight. Master the key types and the special abstractions (generalization, specialization, aggregation) and most of Unit 1 falls into place.',
    objectives: [
      'Explain the **three-level ANSI/SPARC architecture** and distinguish physical from logical data independence',
      'Classify DDL, DML, DCL and TCL statements with examples',
      'Build an ER diagram with entities, attribute types and keys, then map 1:1, 1:N and M:N relationships to tables',
      'Model weak entities and apply generalization, specialization and aggregation',
    ],
    concepts: [
      {
        term: 'Three-level architecture and data independence',
        kind: 'definition',
        statement: 'The **three-level architecture** separates the **external** level (user views), the **conceptual** level (community logical schema) and the **internal** level (physical storage). **Physical data independence** = change the internal schema without touching the conceptual; **logical data independence** = change the conceptual without invalidating external views.',
        detail: 'Assessments ask which level changed in a scenario (a new index = physical; splitting a table = logical) and which independence is harder to achieve — logical, since every view must keep working. Confusing the two independences is the standard mark-loser.',
      },
      {
        term: 'Database languages',
        kind: 'notation',
        statement: '**DDL** defines structure (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`), **DML** manipulates data (`SELECT`, `INSERT`, `UPDATE`, `DELETE`), **DCL** controls rights (`GRANT`, `REVOKE`) and **TCL** guards transactions (`COMMIT`, `ROLLBACK`, `SAVEPOINT`).',
        detail: 'A 2-mark favourite sorts five mixed statements into these buckets — remember `TRUNCATE` is DDL (it deallocates storage rather than deleting row by row) and `SELECT` is DML, which surprises many students.',
      },
      {
        term: 'ER building blocks and keys',
        kind: 'definition',
        statement: 'An **entity** is a distinguishable object — strong if it has its own key, weak otherwise; **attributes** are simple or composite, single- or multivalued, or **derived** (computed, never stored); the key hierarchy runs superkey → candidate key → primary key (the chosen candidate), with the rest becoming **alternate keys** and **foreign keys** referencing another table.',
        detail: 'Definition questions mix these terms: a primary key is never NULL and never duplicated, while a foreign key may be NULL and may repeat. Storing derived attributes (age alongside dob) is flagged as a design error.',
      },
      {
        term: 'Mapping relationships to tables',
        kind: 'method',
        statement: 'To map an ER diagram: each strong entity becomes a table; a **1:N** relationship becomes a foreign key on the N-side; an **M:N** relationship becomes its own table whose primary key is the pair of foreign keys, carrying any relationship attributes; the **total participation** of a weak entity forces an identifying relationship with its owner.',
        detail: 'The M:N mapping rule is the most-tested single fact of this unit. Common errors: putting foreign keys on both sides of 1:N (one side suffices) and forgetting the relationship attribute hours inside the junction table.',
      },
      {
        term: 'Generalization, specialization, aggregation',
        kind: 'insight',
        statement: '**Specialization** (top-down) extracts sub-entities from a parent, e.g. EMPLOYEE into TEACHER and ADMIN; **generalization** (bottom-up) merges sub-entities with common features into a parent; **aggregation** treats an entire relationship set as one abstract entity so that it can participate in another relationship.',
        detail: 'The assessment tell-tale: "managers monitor the works_on relationship between employees and projects" is aggregation, not a new entity. Disjoint versus overlap and total versus partial constraints on ISA hierarchies earn the last marks in long answers.',
      },
    ],
    examples: [
      {
        title: 'Company ER diagram to tables',
        problem: 'A company tracks employees (emp_id, name, salary), departments (dept_id, dept_name) and projects (proj_id, proj_name). Each employee works in exactly one department, a department controls many projects, and employees work on projects for a recorded number of hours. Draw the ER diagram and map it to relational tables.',
        steps: [
          { label: 'Step 1', text: 'Entities: EMPLOYEE, DEPARTMENT, PROJECT. The relationships are works_in (N:1 — many employees to one department), controls (1:N — department to projects) and works_on (M:N with descriptive attribute hours).' },
          { label: 'Step 2', text: 'Strong entities become tables keyed by their own identifiers: `EMPLOYEE(emp_id, name, salary)`, `DEPARTMENT(dept_id, dept_name)` and `PROJECT(proj_id, proj_name)`.' },
          { label: 'Step 3', text: 'Each 1:N relationship becomes a foreign key on the N-side: add `dept_id` to EMPLOYEE for works_in, and add `dept_id` to PROJECT for controls.' },
          { label: 'Step 4', text: 'The M:N relationship gets its own table with the two foreign keys as a composite primary key plus the relationship attribute: `WORKS_ON(emp_id, proj_id, hours)` with PRIMARY KEY (emp_id, proj_id).' },
        ],
        result: 'Four tables: EMPLOYEE(emp_id PK, name, salary, dept_id FK), DEPARTMENT(dept_id PK, dept_name), PROJECT(proj_id PK, proj_name, dept_id FK) and WORKS_ON(emp_id, proj_id, hours) with composite PK.',
      },
      {
        title: 'Mapping a weak entity',
        problem: 'Every employee records dependents by (dependent_name, date_of_birth); dependent names are unique only within one employee. Represent DEPENDENT in the ER model and map it to a table.',
        steps: [
          { label: 'Step 1', text: 'DEPENDENT has no identifier of its own — dependent_name is only a **partial key** — so it is a weak entity with total participation in an identifying relationship with its owner entity EMPLOYEE.' },
          { label: 'Step 2', text: 'In the ER diagram, draw DEPENDENT as a double rectangle joined to EMPLOYEE through a double-diamond identifying relationship, with the partial key underlined by a dashed line.' },
          { label: 'Step 3', text: 'Mapping rule for weak entities: the weak table takes owner primary key + partial key + its own attributes, giving `DEPENDENT(emp_id, dep_name, dob)`.' },
          { label: 'Step 4', text: 'Its primary key is the composite (emp_id, dep_name) with emp_id also a foreign key to EMPLOYEE — deleting the owner removes identification, so dependents are deleted too (cascade).' },
        ],
        result: 'DEPENDENT(emp_id, dep_name, dob) with PRIMARY KEY (emp_id, dep_name) and FOREIGN KEY (emp_id) REFERENCES EMPLOYEE.',
      },
    ],
    keyTakeaways: [
      'Three levels — external, conceptual, internal — with physical and logical data independence protecting them from each other.',
      'Primary key = chosen candidate key; foreign keys may be NULL and may repeat; `TRUNCATE` is DDL and `SELECT` is DML.',
      '1:N maps to a foreign key on the N-side; M:N always maps to a new table with a composite key plus relationship attributes.',
      'A weak entity maps to owner primary key + partial key; aggregation lets a whole relationship set act as an entity.',
    ],
    quiz: [
      {
        q: 'Adding a new column to a base table while existing application views keep working demonstrates',
        options: ['physical data independence', 'logical data independence', 'schema-less design', 'view materialization'],
        answer: 1,
        explanation: 'Step 1: Identify the changed level — the conceptual (logical) schema gained an attribute. Step 2: The external schemas (views and applications) are unaffected. Step 3: That is precisely the definition of logical data independence. Step 4: Physical independence concerns storage-level changes such as indexes or file organisation.',
      },
      {
        q: 'An M:N relationship between STUDENT and COURSE with attribute grade maps to how many new tables?',
        options: ['none', 'two', 'three', 'one'],
        answer: 3,
        explanation: 'Step 1: Recall the mapping rule for M:N relationships. Step 2: Neither side can host the foreign key, since each relates to many of the other. Step 3: A single junction table ENROLLMENT(student_id, course_id, grade) with composite key (student_id, course_id) is created. Step 4: More tables appear only if further entities or relationships exist.',
      },
      {
        q: 'MANAGER monitors the works_on relationship between EMPLOYEE and PROJECT. The ER abstraction used is',
        options: ['specialization', 'generalization', 'aggregation', 'weak entity'],
        answer: 2,
        explanation: 'Step 1: The thing related to MANAGER is itself a relationship (works_on), not an entity. Step 2: The abstraction that treats a relationship set as an entity set is aggregation. Step 3: Specialization and generalization build ISA hierarchies among entities. Step 4: No owner dependency or partial key exists, so the weak-entity option is wrong.',
      },
      {
        q: 'The primary key of the DEPENDENT table mapped from a weak entity is',
        options: ['dep_name alone', 'emp_id alone', 'emp_id together with dep_name', 'a surrogate key column'],
        answer: 2,
        explanation: 'Step 1: A weak entity has only a partial key, unique within one owner. Step 2: To identify a dependent globally you must know whose dependent it is. Step 3: Hence owner primary key emp_id plus partial key dep_name forms the composite primary key. Step 4: dep_name alone repeats across employees, and emp_id alone repeats within one employee.',
      },
    ],
  },
  // -------------------------------------------------------------- CN 23.1
  {
    sectionId: 'cse-e-cn-s1',
    readingTime: 10,
    prerequisites: [
      'Bits, bytes and binary representation',
      'Everyday use of networked applications — browsing, email, file transfer',
    ],
    intro: 'Computer Networks opens with the single most predictable question in the subject: explain the OSI reference model layer by layer, compare it with TCP/IP, and describe how a message travels with headers — asked in virtually every the state technical universities paper of the last five years, typically for 10 marks. Layering concepts plus circuit, datagram and virtual-circuit switching complete Unit 1.',
    objectives: [
      'Justify layering — decomposition, peer protocols, clean interfaces — and state each OSI layer\u2019s responsibility',
      'Compare the OSI and TCP/IP stacks layer by layer, including where session and presentation went',
      'Trace encapsulation: how PDUs are named and how headers are added and stripped at sender, routers and receiver',
      'Contrast circuit switching, datagram packet switching and virtual-circuit switching with delay behaviour',
    ],
    concepts: [
      {
        term: 'Why layers',
        kind: 'insight',
        statement: '**Layering** decomposes networking into $n$ levels where each layer offers services to the one above through an interface and talks to its **peer** layer using a protocol; a change in one layer — say a new Wi-Fi standard — leaves the others untouched.',
        detail: 'Two-mark asks: peer protocol versus interface, and the advantages — decomposed design, interoperability, technology independence. The classic mistake is saying adjacent layers talk using protocols; protocols are horizontal (peer to peer), while services flow vertically through interfaces.',
      },
      {
        term: 'The OSI seven layers',
        kind: 'law',
        statement: 'OSI (ISO 7498) stacks seven layers — **Physical** (bit transmission), **Data Link** (framing, MAC, error and flow control hop-to-hop), **Network** (logical addressing, routing), **Transport** (end-to-end delivery, ports, segmentation), **Session** (dialog control, synchronisation points), **Presentation** (syntax, encryption, compression) and **Application** (user-level services).',
        detail: 'Mnemonic: Please Do Not Throw Sausage Pizza Away, bottom-up. Assessments ask "at which layer does X happen?" — routing = network, reliable byte stream = transport, framing = data link, compression = presentation — so memorise one verb per layer rather than a paragraph.',
      },
      {
        term: 'The TCP/IP model',
        kind: 'method',
        statement: 'The **TCP/IP stack** has four layers — **host-to-network (link)**, **internet**, **transport** and **application**; it merged session and presentation into the application layer, was protocol-first (built around IP and TCP) while OSI was model-first, and offers both connection-oriented (TCP) and connectionless (UDP) transport over a purely connectionless internet layer.',
        detail: 'The expected comparison rows: layer count (7 versus 4), origin (protocol suite versus reference model), reliability approach, and the fate of session and presentation. Saying TCP/IP has a session layer is an instant mark loss.',
      },
      {
        term: 'Encapsulation and PDUs',
        kind: 'method',
        statement: 'Going down the stack each layer adds its header: application **data** becomes a **segment** with a transport header, a **packet** with a network header, a **frame** with a data-link header and trailer (FCS), and finally **bits** on the wire; receivers decapsulate in reverse.',
        detail: 'Routers decode only up to the network layer — they strip the old frame and build a new one for the outgoing link. Asking which headers a router rewrites (layer 2 only, never the IP header fields beyond TTL) is a standard test of real understanding.',
      },
      {
        term: 'Switching techniques',
        kind: 'insight',
        statement: '**Circuit switching** reserves a dedicated path through setup, data and teardown phases (idle bandwidth wasted, no per-packet overhead — telephony); **datagram packet switching** forwards each packet independently (no setup, possible reordering); **virtual circuits** add a setup phase installing per-hop VC tables so all packets of a call follow one path in order.',
        detail: 'Comparison questions want: reserved versus statistical bandwidth sharing, setup cost versus per-packet header cost, in-order delivery and fault tolerance (datagrams reroute per packet; a broken VC path tears down the call). Voice suits circuit switching; bursty data suits packet switching.',
      },
    ],
    examples: [
      {
        title: 'A message descends the stack',
        problem: 'A browser sends a 500-byte HTTP request to a web server. Describe what the sender stack, an intermediate router and the receiver stack each do to the data, naming the PDU at each point.',
        steps: [
          { label: 'Step 1', text: 'The application layer creates the HTTP request **data**; session and presentation duties (in TCP/IP, folded into the application) may compress or encode it — the PDU is still data.' },
          { label: 'Step 2', text: 'TCP adds its header (source and destination ports, sequence number) making a **segment**; IP adds its header (addresses, TTL) making a **packet**; the link layer adds header and FCS trailer making a **frame**, and the physical layer serialises it as **bits**.' },
          { label: 'Step 3', text: '```text\nrouter: read frame -> verify FCS -> strip L2 -> read IP header -> build new frame\n```\nEach router verifies and removes the layer-2 frame, decrements the IP TTL, consults its routing table and re-encapsulates the packet in a brand-new frame for the next hop — the network-layer conversation continues unchanged.' },
          { label: 'Step 4', text: 'At the receiver the stack climbs: bits → frame (FCS verified, stripped) → packet → segment (TCP reorders and acknowledges) → data delivered to the server process listening on port 80 or 443.' },
        ],
        result: 'Sender encapsulates data → segment → packet → frame → bits; routers rebuild only the frames while preserving the packet; the receiver decapsulates in reverse and hands the data to the server.',
      },
      {
        title: 'Store-and-forward delay: one packet versus many',
        problem: 'A 10,000-bit message crosses 3 store-and-forward links of 1 Mbps each. Compare the end-to-end delay when sent (a) as one 10,000-bit packet and (b) as ten 1,000-bit packets, ignoring headers and propagation delay.',
        steps: [
          { label: 'Step 1', text: '(a) One packet must be fully received at each router before forwarding: $10{,}000$ bits at $10^6$ bps takes $10$ ms per link, and 3 links give $3 \\times 10 = 30$ ms.' },
          { label: 'Step 2', text: '(b) Each small packet takes $1000 / 10^6 = 1$ ms to push onto a link.' },
          { label: 'Step 3', text: 'Pipelining: while the first packet rides link 2, the second already uses link 1. Total time $= (k + n - 1) \\times t_{link} = (10 + 3 - 1) \\times 1 = 12$ ms for $k = 10$ packets over $n = 3$ links.' },
          { label: 'Step 4', text: 'Packet switching cuts the delay from 30 ms to 12 ms because the links stay busy in parallel — the quantitative reason data networks abandoned message switching; circuit switching would add call setup and idle periods on top.' },
        ],
        result: '(a) 30 ms as a single packet; (b) 12 ms as ten packets — a $2.5\\times$ speedup from pipelining.',
      },
    ],
    keyTakeaways: [
      'Peer layers speak protocols horizontally; services flow vertically through interfaces.',
      'OSI = 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application); TCP/IP = 4 with session and presentation absorbed into the application layer.',
      'PDU ladder: data → segment → packet → frame → bits; routers rewrite only the frame.',
      'Circuit switching reserves bandwidth after setup; datagrams forward independently and may reorder; virtual circuits deliver in order once the VC tables are installed.',
    ],
    quiz: [
      {
        q: 'In the OSI model, routing and logical addressing are performed at the',
        options: ['data-link layer', 'transport layer', 'network layer', 'session layer'],
        answer: 2,
        explanation: 'Step 1: Routing is a hop-by-hop, network-wide decision. Step 2: The network layer adds logical (IP) addresses and chooses output links. Step 3: Data link handles framing and physical (MAC) addressing on one link; transport is end-to-end. Step 4: The session layer only manages dialogs.',
      },
      {
        q: 'The PDU produced at the data-link layer of the sender is a',
        options: ['segment', 'packet', 'datagram', 'frame'],
        answer: 3,
        explanation: 'Step 1: Recall the PDU ladder by layer. Step 2: Transport creates segments, network creates packets, physical carries bits. Step 3: The data-link layer wraps the packet with a header and FCS trailer to form a frame. Step 4: Datagram names a connectionless network-layer packet, not a layer-2 unit.',
      },
      // PYQ-pattern: switching comparison
      {
        q: 'Which statement about virtual-circuit networks is TRUE?',
        options: ['Each packet carries the full destination address and is routed independently', 'A setup phase installs VC tables and all packets of a call follow the same path in order', 'No state is kept in the switches', 'Packets of one call may arrive out of order'],
        answer: 1,
        explanation: 'Step 1: Virtual circuits borrow the setup idea from circuit switching. Step 2: During setup, each switch records the incoming-to-outgoing VC number mapping. Step 3: Every packet then carries only the small VC label and follows the installed path, arriving in order. Step 4: Independent routing and no switch state describe datagram networks; out-of-order arrival contradicts the fixed path.',
      },
      {
        q: 'In the TCP/IP model, OSI session-layer functionality belongs to',
        options: ['the application layer', 'the transport layer', 'the internet layer', 'no layer — it does not exist in TCP/IP systems'],
        answer: 0,
        explanation: 'Step 1: TCP/IP has only link, internet, transport and application layers. Step 2: Session (dialog control) and presentation (syntax, encryption) duties were not given separate layers. Step 3: Applications or libraries implement them, so the functions are absorbed into the application layer. Step 4: The functions still exist in real systems — only the layer disappeared.',
      },
    ],
  },
  // --------------------------------------------------------- COMPILER 24.1
  {
    sectionId: 'cse-e-compiler-s1',
    readingTime: 10,
    prerequisites: [
      'Regular expressions and finite automata (Theory of Automata, Unit 1)',
      'C syntax: declarations, expressions and precedence',
    ],
    intro: 'Compiler Design papers begin with the same two questions every year: explain the phases of a compiler using a sample assignment statement, and define token, lexeme and pattern while specifying identifiers with regular expressions — a pattern the state technical universities have both kept for the last five years. This section walks the front end from source text to tokens.',
    objectives: [
      'List the six phases of analysis and synthesis and classify what each phase consumes and produces',
      'Distinguish token, lexeme and pattern, and tokenise a C statement',
      'Specify identifiers and constants with regular expressions and rank the operators by precedence',
      'Structure a lex/flex scanner as declarations, rules and user code',
    ],
    concepts: [
      {
        term: 'Phases, passes and the symbol table',
        kind: 'insight',
        statement: 'A compiler splits into **analysis (front end)** — lexical, syntax and semantic analysis plus intermediate code generation — and **synthesis (back end)** — optimisation and target code generation, all coordinated through one shared **symbol table**; a **pass** is one complete read of the program.',
        detail: 'The assessment diagram is the six boxes around the symbol table with source flowing down to target code. Attribute errors correctly: misspelled keywords and malformed numbers = lexical, broken grammar = syntax, type clashes = semantic — a guaranteed 2-mark distinction.',
      },
      {
        term: 'Role of the lexical analyser',
        kind: 'definition',
        statement: 'The **scanner** groups characters into **lexemes** and reports a **token** (category name) for each, following a **pattern** (rule); it also strips whitespace and comments, tracks line numbers for error messages and enters identifiers into the **symbol table**.',
        detail: 'For `count <= 100` the lexemes are `count`, `<=`, `100` with tokens id, relop and number. Assessments ask why the scanner is a separate phase: simpler design, machine-generated from regular expressions and faster specialised buffering.',
      },
      {
        term: 'Regular-expression specification of tokens',
        kind: 'notation',
        statement: 'Tokens are specified by **regular expressions** such as `identifier = letter (letter | digit | _)*`, `integer = digit+` and `real = digit+ . digit+ (E (+|-)? digit+)?`; operator precedence is **Kleene star over concatenation over alternation**, with parentheses overriding.',
        detail: 'Questions ask you to write the RE for unsigned numbers or identifiers and to read precedence: `a | b c*` parses as `a | (b (c*))`. Forgetting that alternation binds loosest is the usual slip.',
      },
      {
        term: 'From regular expression to scanner automaton',
        kind: 'method',
        statement: 'Thompson construction turns an RE into an ε-NFA of linear size; subset construction then yields a DFA that a table-driven scanner loops on — repeat `state = table[state][next_char]` until the longest lexeme is matched, then finalise the token.',
        detail: 'The dragon-book pipeline for `(a|b)*abb` — RE to ε-NFA to DFA to a small minimal automaton — is worth practising once by hand. The scanner must return the **longest** lexeme (`<=`, not `<`), which is exactly the maximal-munch behaviour of the DFA loop.',
      },
      {
        term: 'Structure of a lex/flex file',
        kind: 'method',
        statement: 'A **lex** file has three sections separated by `%%` — declarations (aliases like `digit [0-9]`), rules of the form `pattern action` such as `{id} { return ID; }`, and user code; flex compiles the rules into precisely the table-driven DFA above.',
        detail: 'Assessments give a spec — recognise keywords if and else, identifiers, integers — and expect the three-part skeleton plus two rules. Rule order matters: keyword rules must precede the identifier rule, or `if` will be scanned as an identifier (a classic trap to discuss).',
      },
    ],
    examples: [
      {
        title: 'One statement through all six phases',
        problem: 'Show the output of every phase of a compiler for the statement `position = initial + rate * 60` where `rate` is real and the literals are integers.',
        steps: [
          { label: 'Step 1', text: 'Lexical analysis produces the token stream `<id,1> <=> <id,2> <+> <id,3> <*> <num,60>` — the indices 1–3 are symbol-table entries for position, initial and rate, and whitespace is discarded.' },
          { label: 'Step 2', text: 'Syntax analysis builds the parse tree honouring precedence, so `rate * 60` forms a subtree before the addition; structural errors would be reported here against the grammar.' },
          { label: 'Step 3', text: 'Semantic analysis checks types: `rate` is real but 60 is integer, so the conversion node `inttofloat(60)` is inserted to make both operands real.' },
          { label: 'Step 4', text: 'Intermediate code: `t1 = inttofloat(60); t2 = id3 * t1; t3 = id2 + t2; id1 = t3`. Optimisation folds t1 into 60.0 at compile time, and code generation emits `MOVF id3, R2; MULF #60.0, R2; MOVF id2, R1; ADDF R1, R2; MOVF R2, id1`.' },
        ],
        result: 'Tokens → parse tree → type-corrected tree → three-address code `t2 = id3 * 60.0; id1 = id2 + t2` after constant folding → register machine code.',
      },
      {
        title: 'Tokenising a statement and writing its lex rules',
        problem: 'Tokenise `if (count <= 100) total = total + 0.5;` and write the lex declarations and rules covering the identifier, integer and real constants that occur.',
        steps: [
          { label: 'Step 1', text: 'Lexemes with tokens — 12 tokens in all: `if` (keyword), `(`, `count` (id), `<=` (relop LE), `100` (number), `)`, `total` (id), `=` (assign), `total` (id), `+` (plus), `0.5` (real), `;` — whitespace separates lexemes but produces no token.' },
          { label: 'Step 2', text: 'Declarations section: `letter [A-Za-z]`, `digit [0-9]`, then `id {letter}({letter}|{digit}|_)*`, `int {digit}+` and `real {digit}+\\.{digit}+`.' },
          { label: 'Step 3', text: 'Rules section, keywords first: `if return IF;` before `{id} return ID;`, then `{int} return INT_CONST;`, `{real} return REAL_CONST;` and `<= return LE;`.' },
          { label: 'Step 4', text: 'Note maximal munch in action: the scanner reads `<=` as one lexeme because the relop DFA prefers the longest match over stopping at the single `<`.' },
        ],
        result: 'Keyword if, ids count and total (twice), relop <=, number 100, real 0.5, plus the punctuation and operators — with keyword-before-identifier rules and longest-match scanning.',
      },
    ],
    keyTakeaways: [
      'Six phases split analysis (lexical, syntax, semantic, intermediate code) from synthesis (optimisation, code generation), glued by the symbol table.',
      'Token = category, lexeme = actual text, pattern = rule; the scanner strips whitespace and comments and records line numbers.',
      'RE precedence: star over concatenation over alternation; Thompson construction plus subset construction yield the table-driven scanner DFA.',
      'lex = declarations %% rules %% user code; keyword rules must precede the identifier rule and scanning is longest-match.',
    ],
    quiz: [
      {
        q: 'In the statement `total = total + 0.5;` the string `0.5` is best described as',
        options: ['a token', 'a lexeme whose token is real-number', 'a pattern', 'a grammar production'],
        answer: 1,
        explanation: 'Step 1: Recall the three-way distinction. Step 2: The lexeme is the literal character string matched. Step 3: Its token (category) is a real-number constant and the pattern is the RE `digit+ . digit+`. Step 4: Calling `0.5` itself a token confuses the instance with its class.',
      },
      {
        q: 'The phase that reports a type mismatch for the operator `*` is',
        options: ['lexical analysis', 'syntax analysis', 'semantic analysis', 'code optimization'],
        answer: 2,
        explanation: 'Step 1: The program is grammatically legal, so parsing succeeds. Step 2: The offence concerns meaning — multiplying incompatible types. Step 3: Type checking is the core job of semantic analysis. Step 4: Lexical errors are malformed characters and syntax errors break the grammar.',
      },
      {
        q: 'Which phase inserts `inttofloat(60)` when compiling `rate * 60` with `rate` real?',
        options: ['Lexical analysis', 'Intermediate code generation', 'Semantic analysis', 'The preprocessor'],
        answer: 2,
        explanation: 'Step 1: The insertion exists because two types must be made to agree. Step 2: Type checking and coercion insertion are semantic-analysis duties. Step 3: Later phases merely carry the conversion into the IR and machine code. Step 4: The preprocessor handles macros and includes, not types.',
      },
      {
        q: 'In flex, the rule `if return IF;` must appear before `{id} return ID;` because',
        options: ['flex rules run bottom-up', 'later rules have higher priority', 'keywords are longer strings', 'flex always matches the first listed rule when longest matches tie'],
        answer: 3,
        explanation: 'Step 1: Both patterns match the lexeme `if` with equal length — two characters. Step 2: flex resolves ties by rule order, and the earlier rule wins. Step 3: So `if` must be listed first or it will be scanned as an ordinary identifier. Step 4: The equal-length fact makes the "longer keyword" reasoning irrelevant.',
      },
    ],
  },
  // -------------------------------------------------------------- SE 25.1
  {
    sectionId: 'cse-e-sweng-s1',
    readingTime: 9,
    prerequisites: [
      'What constitutes software: programs, data and documentation',
      'Experience of any team project whose requirements changed midway',
    ],
    intro: 'Software Engineering and Project Management opens with the surest 10 marks in the paper: compare SDLC models and select one for a given scenario — the question the state technical universities have reused, with fresh scenarios, across the last five years. Unit 1 also carries the agile short notes (Scrum events, XP practices) that appear as 3–5 mark sub-questions.',
    objectives: [
      'Name the SDLC phases common to every model and the work products of each',
      'Compare waterfall, incremental/iterative, RAD, spiral and agile on requirements volatility, risk and delivery speed',
      'Justify model selection for scenario questions using explicit criteria',
      'Describe Scrum roles, artifacts and timeboxed events, plus the core XP practices',
    ],
    concepts: [
      {
        term: 'The common SDLC phases',
        kind: 'definition',
        statement: 'Every SDLC model organises **requirements analysis → design → implementation → testing → deployment → maintenance**, with software understood as programs **plus documentation and procedures**; the models differ only in how they order, repeat or overlap these phases.',
        detail: 'Assessments ask which phase an activity belongs to (SRS = requirements; unit, integration, system and acceptance testing = testing) and the maintenance types — corrective, adaptive, perfective and preventive — as a short note. Maintenance consuming the majority of lifetime cost is a favourite one-liner.',
      },
      {
        term: 'Waterfall model',
        kind: 'method',
        statement: 'The **waterfall** flows one direction through frozen, sign-off stages — requirements → design → code → test → maintain; it suits stable, well-understood and safety-critical work, but change after sign-off is expensive because repair cost grows steeply downstream.',
        detail: 'Its V-model variant pairs each development phase with a test level (requirements with acceptance, design with integration, code with unit) — worth one diagram line. The standard criticism: working software appears only at the end, so late requirement errors are catastrophic.',
      },
      {
        term: 'Incremental, iterative and RAD',
        kind: 'method',
        statement: '**Incremental** delivery builds the system as usable slices — core first, feature increments after; **iterative** refinement reworks the same product through cycles; **RAD** (James Martin) compresses delivery into 60–90-day cycles using heavy user involvement (JAD workshops), reusable components and 4GL/CASE tools.',
        detail: 'Contrast with waterfall: early working software and easier feedback, but good architects are needed to slice increments cleanly. RAD fails when performance or scalability is critical or users cannot be collocated — that trade-off sentence is exactly what earns marks.',
      },
      {
        term: 'Spiral model',
        kind: 'method',
        statement: 'Boehm\u2019s **spiral** loops through four quadrants — (1) determine objectives and constraints, (2) evaluate alternatives, **identify and resolve risks**, (3) develop and verify, typically via a prototype, and (4) plan the next loop — making it a **risk-driven** meta-model whose radius reflects cumulative cost.',
        detail: 'The keyword is risk: every assessment answer must show the risk quadrant doing prototyping or simulation before major commitment. It suits large, novel, first-of-a-kind systems; critics note it is costly and demands risk-assessment expertise.',
      },
      {
        term: 'The agile family: XP and Scrum',
        kind: 'insight',
        statement: '**Agile** values individuals and interactions, working software, customer collaboration and responding to change (the Manifesto); **XP** practices include pair programming, test-driven development, continuous integration, small releases and on-site customer; **Scrum** fixes roles (Product Owner, Scrum Master, Developers), artifacts (product backlog, sprint backlog, increment) and timeboxed events — sprints of at most one month, sprint planning, the 15-minute daily scrum, sprint review and retrospective.',
        detail: 'Know the timeboxes (daily scrum 15 minutes; planning, review and retrospective scale with sprint length — 8, 4 and 3 hours for a one-month sprint) and one-line purposes. Confusing the Product Owner (decides what to build) with the Scrum Master (guards the process) is the classic MCQ trap.',
      },
    ],
    examples: [
      {
        title: 'Selecting the model for four projects',
        problem: 'Recommend an SDLC model with a one-line justification for: (i) control software for a nuclear reactor, (ii) a startup\u2019s e-commerce app whose requirements change weekly, (iii) the company\u2019s first AI-based imaging product on unproven technology, (iv) an in-house payroll system similar to one the vendor has built thrice before.',
        steps: [
          { label: 'Step 1', text: 'Fix the criteria: requirement volatility, project risk, need for documentation or certification, user availability and schedule pressure.' },
          { label: 'Step 2', text: '(i) Stable, precisely specified, safety-critical → **waterfall/V-model**: complete documentation and verification before deployment outweigh flexibility. (ii) Volatile requirements and fast market feedback → **agile (Scrum)**: sprints absorb weekly change and ship working increments.' },
          { label: 'Step 3', text: '(iii) Novel technology with huge technical risk → **spiral**: each loop prototypes and retires the biggest risk before major investment is committed.' },
          { label: 'Step 4', text: '(iv) Known problem, reusable components, tight schedule → **RAD**: reuse plus JAD workshops deliver a working system in a short cycle. Write each answer as model plus criterion — assessors award the marks for the justification, not the label alone.' },
        ],
        result: '(i) waterfall/V-model, (ii) agile-Scrum, (iii) spiral, (iv) RAD — each keyed to its dominant selection criterion.',
      },
      {
        title: 'One Scrum sprint, end to end',
        problem: 'A seven-member team works in two-week sprints. Walk through every Scrum event of one sprint, giving its timebox and its output.',
        steps: [
          { label: 'Step 1', text: '**Sprint planning** (at most 4 h for a two-week sprint): the team selects high-priority items from the product backlog into the sprint backlog and commits to a sprint goal.' },
          { label: 'Step 2', text: 'Throughout the sprint, the **daily scrum** (15 minutes, same time every day): each developer answers what I did, what I will do and what blocks me — a synchronisation among developers, not a status report to managers.' },
          { label: 'Step 3', text: 'At sprint end, the **sprint review** (at most 2 h) demonstrates the potentially shippable **increment** to stakeholders and collects feedback that re-orders the product backlog.' },
          { label: 'Step 4', text: 'The **sprint retrospective** (at most 1.5 h) inspects the process itself — what worked, what to improve — closing the loop before the next planning event; timeboxes scale down from the one-month reference.' },
        ],
        result: 'Planning (≤ 4 h) → daily scrums (15 min each) → review (≤ 2 h, increment demonstrated) → retrospective (≤ 1.5 h, process improvements).',
      },
    ],
    keyTakeaways: [
      'All models share requirements → design → code → test → deploy → maintain; they differ in ordering and repetition.',
      'Waterfall for stable, documented, safety-critical work; incremental and RAD for fast, reuse-heavy delivery.',
      'The spiral is risk-driven: objectives → risk resolution → development → planning, loop after loop.',
      'Scrum = roles (PO, SM, developers) + artifacts (backlogs, increment) + timeboxed events (15-minute daily scrum, sprint of at most one month).',
    ],
    quiz: [
      {
        q: 'The SDLC model organised explicitly around risk analysis is the',
        options: ['waterfall model', 'RAD model', 'V-model', 'spiral model'],
        answer: 3,
        explanation: 'Step 1: Recall each model\u2019s organising principle — sequence, reuse speed, verification, risk. Step 2: The spiral\u2019s second quadrant explicitly identifies and resolves risks through prototyping on every loop. Step 3: Waterfall and the V-model handle stable requirements while RAD compresses the schedule. Step 4: Hence the spiral is called risk-driven.',
      },
      {
        q: 'Waterfall is most appropriate when',
        options: ['requirements are expected to change monthly', 'the technology is unproven and risky', 'requirements are well understood and stable', 'users are unavailable but markets shift weekly'],
        answer: 2,
        explanation: 'Step 1: Waterfall freezes each stage behind a sign-off. Step 2: That is safe only when requirements are clear and unlikely to change. Step 3: Evolving needs would force costly re-entry into finished stages. Step 4: Risky technology suggests the spiral; shifting markets suggest agile.',
      },
      {
        q: 'The daily scrum timebox is',
        options: ['45 minutes', '30 minutes', '15 minutes', 'the whole morning'],
        answer: 2,
        explanation: 'Step 1: The daily scrum is a short synchronisation for the developers. Step 2: The Scrum Guide fixes it at 15 minutes, held daily at the same time and place. Step 3: Other events scale with sprint length — planning up to 8 hours for a one-month sprint. Step 4: Treating it as a lengthy status meeting for managers is the anti-pattern.',
      },
      // PYQ-pattern: agile short note
      {
        q: 'Which pair lists XP practices?',
        options: ['sprint review and retrospective', 'pair programming and test-driven development', 'product backlog and sprint backlog', 'JAD workshops and 4GL tools'],
        answer: 1,
        explanation: 'Step 1: XP is an agile method built on engineering practices. Step 2: Pair programming and test-driven development (write the failing test first) are signature XP practices, along with continuous integration and small releases. Step 3: The first option lists Scrum events and the third lists Scrum artifacts. Step 4: JAD workshops and 4GL tools belong to RAD.',
      },
    ],
  },
  // -------------------------------------------------------------- ML 27.1
  {
    sectionId: 'cse-e-ml-s1',
    readingTime: 10,
    prerequisites: [
      'Straight-line equations and partial derivatives (Engineering Mathematics I)',
      'Basic probability and expected value',
    ],
    intro: 'Machine Learning enters the B.Tech CSE scheme in Semester 6, and its Unit 1 is the dependable scorer: classify the learning paradigm of a scenario, then derive or numerically fit a least-squares line and run gradient-descent steps — the repeated the state technical universities pattern over the last five years. The unit also introduces logistic regression as the bridge to classification.',
    objectives: [
      'Classify tasks as supervised (regression or classification), unsupervised or reinforcement learning with justified labels',
      'Fit $y = a + bx$ by least squares using the normal equations and predict at a new point',
      'Run and analyse gradient-descent updates, including learning-rate failure modes',
      'Explain logistic regression: sigmoid hypothesis, decision boundary and cross-entropy loss',
    ],
    concepts: [
      {
        term: 'Learning paradigms',
        kind: 'definition',
        statement: '**Supervised learning** trains on labelled pairs $(x, y)$ — **regression** for continuous targets, **classification** for discrete labels; **unsupervised learning** finds structure in unlabelled data (clustering, dimensionality reduction, association rules); **reinforcement learning** learns a **policy** from delayed **rewards** through interaction with an environment.',
        detail: 'The scenario question — spam filtering, customer segmentation, game playing — is worth 2 marks every session; label by the signal present: labels → supervised, none → unsupervised, rewards → reinforcement.',
      },
      {
        term: 'Linear regression and the normal equations',
        kind: 'theorem',
        statement: 'With hypothesis $h_\\theta(x) = \\theta_0 + \\theta_1 x$ and cost $J(\\theta) = \\frac{1}{2m}\\sum_{i=1}^{m}(h_\\theta(x^{(i)}) - y^{(i)})^2$, the minimiser satisfies the **normal equations**: $b = \\frac{m\\sum xy - \\sum x \\sum y}{m\\sum x^2 - (\\sum x)^2}$ and $a = \\bar{y} - b\\bar{x}$ (vector form $\\theta = (X^TX)^{-1}X^Ty$).',
        detail: 'Numericals supply 3–4 points and ask for the line and one prediction — tabulate $\\sum x$, $\\sum y$, $\\sum xy$ and $\\sum x^2$ first. Swapping the numerator pair or dropping $m$ are the classic slips; note that $a = \\bar y - b\\bar x$ means the fitted line always passes through the centroid.',
      },
      {
        term: 'Gradient descent',
        kind: 'method',
        statement: '**Batch gradient descent** iterates $\\theta_j := \\theta_j - \\alpha \\frac{\\partial J}{\\partial \\theta_j}$ — for MSE this is $\\theta_1 := \\theta_1 - \\frac{\\alpha}{m}\\sum (h_\\theta(x^{(i)}) - y^{(i)})\\,x^{(i)}$ — with the learning rate $\\alpha$ controlling stability; all parameters update **simultaneously**.',
        detail: 'Assessments ask for 2–3 iterations on a toy cost function. Diagnosis rules: too small $\\alpha$ = slow crawl, too large $\\alpha$ = oscillation or divergence. Gradient descent also scales to large feature counts where the normal-equation matrix inverse at $O(n^3)$ does not.',
      },
      {
        term: 'Logistic regression',
        kind: 'method',
        statement: 'For binary labels, **logistic regression** squashes a linear score through the sigmoid $g(z) = \\frac{1}{1 + e^{-z}} \\in (0, 1)$, modelling $P(y = 1 \\mid x) = g(\\theta^T x)$ with **decision boundary** $\\theta^T x = 0$ and cost $J = -\\frac{1}{m}\\sum [y \\log h + (1 - y)\\log(1 - h)]$ — **cross-entropy, not MSE**.',
        detail: 'Know $g(0) = 0.5$, $g(2) \\approx 0.88$ and $g(-z) = 1 - g(z)$. Why not MSE: the squared error on a sigmoid is non-convex with vanishing gradients, while cross-entropy is convex for this model. Despite the name it is a classifier, not a regressor.',
      },
      {
        term: 'Underfitting, overfitting and evaluation',
        kind: 'insight',
        statement: '**Underfitting (high bias)** = too simple a hypothesis; **overfitting (high variance)** = fitting noise, shown by a widening train-versus-test gap; defences are more features (fixes bias), more data or regularisation $J + \\lambda\\sum \\theta_j^2$ (fixes variance), judged always on a held-out **test split** never used for training.',
        detail: 'Short-note questions want the overfitting sketch, the two curves and one remedy each. Reporting training accuracy as performance is the flagged error — the test set must stay untouched until final evaluation.',
      },
    ],
    examples: [
      {
        title: 'Least-squares line and prediction',
        problem: 'Fit a straight line $y = a + bx$ by least squares to the data (1, 2), (2, 3), (3, 5) and predict $y$ at $x = 4$.',
        steps: [
          { label: 'Step 1', text: 'Tabulate the sums: $m = 3$, $\\sum x = 6$, $\\sum y = 10$, $\\sum xy = 2 + 6 + 15 = 23$ and $\\sum x^2 = 1 + 4 + 9 = 14$.' },
          { label: 'Step 2', text: 'Slope: $b = \\frac{m\\sum xy - \\sum x \\sum y}{m\\sum x^2 - (\\sum x)^2} = \\frac{69 - 60}{42 - 36} = \\frac{9}{6} = 1.5$.' },
          { label: 'Step 3', text: 'Intercept: $a = \\bar{y} - b\\bar{x} = \\frac{10}{3} - 1.5 \\times \\frac{6}{3} = 0.333$, so the fitted line is $\\hat{y} = 0.33 + 1.5x$.' },
          { label: 'Step 4', text: 'Prediction at $x = 4$: $\\hat{y} = 0.333 + 6 = 6.33$. The residuals at the data points are $+0.17$, $-0.33$ and $+0.17$, and the line passes through the centroid $(2, 10/3)$ as the normal equations guarantee.' },
        ],
        result: '$\\hat{y} = 0.33 + 1.5x$; the predicted value at $x = 4$ is about $6.33$.',
      },
      {
        title: 'Gradient descent iterations',
        problem: 'Run three iterations of gradient descent on $J(w) = (w - 3)^2$ starting from $w_0 = 0$ with $\\alpha = 0.1$, and explain what happens if $\\alpha = 1$.',
        steps: [
          { label: 'Step 1', text: 'The update rule is $w := w - \\alpha \\cdot 2(w - 3)$. First step: $w_1 = 0 - 0.1 \\times 2(0 - 3) = 0.6$.' },
          { label: 'Step 2', text: 'Iterate: $w_2 = 0.6 - 0.1 \\times 2(0.6 - 3) = 1.08$ and $w_3 = 1.08 - 0.2(1.08 - 3) = 1.464$.' },
          { label: 'Step 3', text: 'Each step multiplies the gap to the optimum by $(1 - 2\\alpha) = 0.8$, so $w_k = 3 - 3(0.8)^k \\to 3$ — steady geometric convergence.' },
          { label: 'Step 4', text: 'With $\\alpha = 1$ the update becomes $w := 6 - w$: the iterates oscillate $0, 6, 0, 6, \\ldots$ forever — the too-large learning-rate failure mode that assessments want named.' },
        ],
        result: '$w_1 = 0.6$, $w_2 = 1.08$, $w_3 = 1.464$, converging to 3 geometrically; $\\alpha = 1$ oscillates without ever converging.',
      },
    ],
    keyTakeaways: [
      'Labels → supervised (regression or classification); no labels → unsupervised; rewards → reinforcement.',
      'Least-squares line: $b = \\frac{m\\sum xy - \\sum x\\sum y}{m\\sum x^2 - (\\sum x)^2}$ with $a = \\bar y - b\\bar x$, always through the centroid.',
      'Gradient descent $\\theta := \\theta - \\alpha\\nabla J$: small $\\alpha$ crawls, large $\\alpha$ oscillates or diverges; updates are simultaneous.',
      'Logistic regression outputs $g(\\theta^Tx) \\in (0, 1)$ probabilities with boundary $\\theta^Tx = 0$ and the convex cross-entropy loss.',
    ],
    quiz: [
      {
        q: 'Grouping a shop\u2019s customers into segments without any labelled categories is',
        options: ['supervised classification', 'unsupervised learning (clustering)', 'regression', 'reinforcement learning'],
        answer: 1,
        explanation: 'Step 1: Look for the training signal — labels or rewards. Step 2: Neither is provided, only customer feature vectors. Step 3: Discovering groups in unlabelled data is clustering, an unsupervised task. Step 4: Supervised learning would need segments already labelled by someone.',
      },
      {
        q: 'For the least-squares fit on the data (1, 2), (2, 3), (3, 5), the slope $b$ is',
        options: ['$1.5$', '$1.0$', '$0.33$', '$2.0$'],
        answer: 0,
        explanation: 'Step 1: Tabulate $\\sum x = 6$, $\\sum y = 10$, $\\sum xy = 23$, $\\sum x^2 = 14$, $m = 3$. Step 2: Numerator $= 3(23) - 6(10) = 9$. Step 3: Denominator $= 3(14) - 36 = 6$, so $b = 1.5$. Step 4: The value $0.33$ is the intercept $a$ — the classic mix-up.',
      },
      {
        q: 'The sigmoid $g(z) = \\frac{1}{1 + e^{-z}}$ satisfies',
        options: ['$g(0) = 0$ and range $[-1, 1]$', '$g(0) = 0.5$ and range $(0, 1)$', '$g(0) = 1$ and range $[0, 1]$', 'range $(-\\infty, \\infty)$'],
        answer: 1,
        explanation: 'Step 1: At $z = 0$ we have $e^{0} = 1$, so $g(0) = 1/2$. Step 2: As $z \\to \\infty$, $e^{-z} \\to 0$ and $g \\to 1$. Step 3: As $z \\to -\\infty$, $g \\to 0$ while staying positive. Step 4: Hence the output is a probability in the open interval $(0, 1)$ — never negative and never equal to 1.',
      },
      {
        q: 'Training accuracy 99% but test accuracy 62% indicates',
        options: ['high bias (underfitting)', 'a vanishing gradient', 'class imbalance only', 'high variance (overfitting)'],
        answer: 3,
        explanation: 'Step 1: Compare train and test performance — the large gap is the signature. Step 2: The model memorised the training data including its noise. Step 3: That is overfitting, i.e. high variance; remedies are more data, regularisation or a simpler model. Step 4: Underfitting would show poor scores on both sets.',
      },
    ],
  },
]
