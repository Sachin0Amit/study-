import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 4: Threads and Concurrency (Sections 4.1 – 4.4)
// Master study content.
// ============================================================================

export const osCh4Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: "osc-ch4-s1",
    readingTime: 9,
    intro: "A thread is the basic unit of CPU utilization — a program counter, a register set and a stack — bundled inside a process and sharing that process’s code, data and open files with its sibling threads. This section defines the thread, contrasts single- and multithreaded processes, and develops the four canonical benefits of multithreading: responsiveness, resource sharing, economy and scalability.",
    objectives: [
      "Define a thread and list its components",
      "Separate what a thread shares with its peers from what it owns privately",
      "Describe the structure of single-threaded versus multithreaded processes",
      "Explain the four benefits of multithreading and the pitfalls that accompany them",
      "Walk through the classic multithreaded server and word-processor examples"
    ],
    concepts: [
      {
        term: "Thread",
        kind: "definition",
        statement: "A **thread** is a basic unit of CPU utilization; it comprises a **thread ID**, a **program counter (PC)**, a **register set**, and a **stack**. It shares with other threads belonging to the same process its **code (text) section**, **data section**, and other operating-system resources — such as **open files and signals**. A traditional (single-threaded) process has one thread of control; a process with multiple threads can perform more than one task at a time.",
        detail: "Everything execution-specific — PC, registers, stack — belongs to the thread; everything resource-like — code, global data, heap, open files — belongs to the process and is shared by all its threads. Two threads of one process never share a stack or a register set."
      },
      {
        term: "Single-threaded versus multithreaded process",
        kind: "insight",
        statement: "Picture the process as a rectangle: the shared band holds **code, data and files**. In a single-threaded process, one column below it holds a single **registers + PC + stack** triple. In a multithreaded process, several such columns — one per thread, each with its own registers, PC and stack — hang from the very same shared band.",
        detail: "The diagram makes the sharing rule visual: all the per-thread machinery sits underneath the common code/data/files section. Adding a thread duplicates only the little column, never the big band — which is why threads are cheap and communication between them is just ordinary memory access."
      },
      {
        term: "Motivating examples",
        kind: "insight",
        statement: "A **word processor** may run one thread displaying graphics, another responding to keystrokes, and a third performing spelling and grammar checking in the background. A **web browser** may have one thread display images or text while another retrieves data from the network. An application generating **thumbnails** can assign one thread per image. A busy **web server** cannot serve thousands of clients one at a time — it creates a separate thread per request.",
        detail: "Even operating system kernels are multithreaded: during boot, Linux creates kernel threads for managing devices, memory management and interrupt handling — visible as children of kthreadd (pid 2) in ps -ef output."
      },
      {
        term: "The multithreaded server architecture",
        kind: "method",
        statement: "The book’s web-server pattern: the server runs as a single process whose thread **listens** for client requests; when a request arrives, it **creates a new thread to service the request** and then **resumes listening** for additional requests. Creating a thread per request beats the older create-a-process-per-request design because process creation is time consuming and resource intensive.",
        detail: "This is asynchronous threading in action: the parent (listener) resumes immediately after forking each worker, and the workers run independently — the architecture behind virtually every network server you have ever connected to."
      },
      {
        term: "Benefit 1: Responsiveness",
        kind: "insight",
        statement: "Multithreading an interactive application may allow it to **continue running even if part of it is blocked** or performing a lengthy operation. When a user clicks a button that triggers slow work, a single-threaded application is unresponsive until it finishes; if the work runs in a separate asynchronous thread, the interface stays live.",
        detail: "This is the user-interface argument for threads — and the reason a modern browser can render one page while a network thread is still downloading the next image."
      },
      {
        term: "Benefit 2: Resource sharing",
        kind: "insight",
        statement: "Processes can share resources only through explicitly arranged techniques such as shared memory and message passing. Threads, by contrast, **share the memory and resources of their process by default** — an application can have several threads of activity within the same address space with no extra machinery.",
        detail: "The benefit of sharing code and data is that threads cooperate through ordinary variables and data structures — a two-edged sword, since unintended sharing is exactly what data races are made of."
      },
      {
        term: "Benefit 3: Economy",
        kind: "insight",
        statement: "Allocating memory and resources for process creation is costly. Because threads share the resources of the process to which they belong, it is more economical to **create and context-switch threads**: thread creation consumes less time and memory than process creation, and context switching is typically faster between threads than between processes.",
        detail: "Empirically gauging the difference is difficult, but the rule of thumb quoted throughout the literature — including the OSC companion materials — is roughly an order of magnitude: creating a thread typically costs about one-tenth of creating a process, and switching is similarly cheaper."
      },
      {
        term: "Benefit 4: Scalability",
        kind: "insight",
        statement: "The benefits of multithreading grow on **multiprocessor (multicore) architectures**, where threads may run **in parallel on different processing cores**. A single-threaded process can run on only one processor regardless of how many are available; a multithreaded one recruits them all.",
        detail: "This is the modern argument: with the end of raw single-core frequency scaling, nearly all performance growth now comes from more cores — reachable only through threads (or implicit threading, Section 4.4)."
      },
      {
        term: "Pitfalls of multithreading",
        kind: "insight",
        statement: "Threads also bring hazards: **data races** (two threads reading and writing shared data concurrently can interleave destructively — Chapters 6 and 7), the difficulty of **splitting tasks** into parallelizable pieces, and the combinatorial explosion of possible execution paths that makes **testing and debugging** harder than for single-threaded programs.",
        detail: "The four benefits explain why we want threads; the pitfalls explain why synchronization tools (mutexes, semaphores, monitors) and implicit threading frameworks occupy the rest of this chapter and the next three."
      }
    ],
    examples: [
      {
        title: "One request, one thread: a web server in action",
        problem: "A multithreaded server implements the dispatcher/worker pattern. Two client requests arrive in quick succession. Trace the threads from arrival to completion.",
        steps: [
          { label: "Step 1: The listener waits", text: "The server process starts with one thread blocked in an accept-style call, listening for client requests — no CPU is consumed while it waits." },
          { label: "Step 2: Request A arrives", text: "Client A connects: the listening thread wakes, then **creates a new worker thread to service request A** — the worker gets its own stack, registers and PC but shares the server’s code, data and open socket files." },
          { label: "Step 3: Back to listening", text: "The listener **resumes waiting immediately**; while worker A is still generating the response, client B connects — and gets its own worker thread. Neither client waits for the other’s response." },
          { label: "Step 4: Workers retire", text: "Each worker finishes its reply and terminates, returning the thread’s resources; the process — and the listener — live on for the next request. Creating a thread per request is far cheaper than the historical alternative of creating a whole process." }
        ],
        result: "One always-on listener, one disposable worker per request — thousands of clients can be in flight simultaneously in a single process, something a single-threaded server fundamentally cannot offer."
      },
      {
        title: "Word processor: three threads, one document",
        problem: "A word processor displays graphics, responds to keystrokes, and checks spelling in the background. Compare its behavior as a single-threaded versus a multithreaded process.",
        steps: [
          { label: "Step 1: Assign the threads", text: "Thread 1 renders the display and graphics; thread 2 reads and handles user keystrokes; thread 3 runs the spelling and grammar check over the document." },
          { label: "Step 2: The single-threaded disaster", text: "With one thread of control, the process performs one task at a time: while the spell checker churns through a long document, keystrokes queue unanswered — the user cannot simultaneously type and be checked." },
          { label: "Step 3: The multithreaded version", text: "With three threads, the keystroke thread stays responsive even while the checker runs (responsiveness); all three threads read the same document data in the shared address space (resource sharing by default)." },
          { label: "Step 4: What each thread owns", text: "Each thread keeps its own stack and register set for its local variables and call frames — but there is exactly one copy of the document, the code, and the open file, shared among all three." }
        ],
        result: "Responsiveness (typing never stalls), natural sharing (one document), and economy (three threads, one address space) — three of the four benefits in one familiar application."
      }
    ],
    keyTakeaways: [
      "A thread = thread ID + program counter + register set + stack; it shares code, data, heap, open files and signals with its sibling threads.",
      "Per-thread private: stack, registers, program counter. Per-process shared: everything else.",
      "Benefits: responsiveness (stay live while a thread blocks), resource sharing (one address space by default), economy (threads are about 10× cheaper to create and switch than processes), scalability (true parallelism on multiple cores).",
      "The multithreaded server pattern: one listener thread creates a worker thread per request and immediately resumes listening.",
      "Pitfalls: data races on shared data, hard task decomposition, and many more execution paths to test and debug."
    ],
    quiz: [
      {
        q: "Which of the following does a thread NOT share with other threads of the same process?",
        options: ["the code (text) section", "the heap", "its stack and register set", "open files"],
        answer: 2,
        explanation: "The stack, registers and program counter are precisely the per-thread private state — each thread needs its own execution position and call frames. Code, data, heap and open files belong to the process and are shared."
      },
      {
        q: "The multithreaded web-server pattern described in the book:",
        options: [
          "creates a separate process for each client request",
          "creates a new thread to service each request, then resumes listening for more",
          "serves all clients from a single thread, one at a time",
          "relies on shared memory between client machines"
        ],
        answer: 1,
        explanation: "A listener thread accepts each request and creates a worker thread for it, then immediately resumes listening. Process-per-request was the older, more expensive approach; single-threaded service would serialize every client."
      },
      {
        q: "The economy benefit of threads over processes refers to the fact that:",
        options: [
          "threads use fewer system calls in total",
          "thread creation and context switching consume less time and memory than their process counterparts",
          "threads never need synchronization",
          "each thread gets its own address space"
        ],
        answer: 1,
        explanation: "Because threads share the process’s resources, creating one duplicates only a small amount of per-thread state, and switching between threads is cheaper than between processes — commonly quoted as roughly an order of magnitude."
      },
      {
        q: "A single-threaded process on a 16-core system can use at most:",
        options: ["1 core", "8 cores", "16 cores", "all cores only if it spins"],
        answer: 0,
        explanation: "One thread of control means one program counter — it can execute on only one processor at a time, however many exist. Recruiting more cores requires more threads; that limitation is the scalability argument for multithreading."
      }
    ]
  },

  // ---------------------------------------------------------------- 4.2
  {
    sectionId: "osc-ch4-s2",
    readingTime: 10,
    intro: "Multicore chips put several CPUs on one die, and suddenly concurrency can become true parallelism. But Amdahl’s law caps the payoff: the serial fraction of a program — the part that cannot run in parallel — limits speedup no matter how many cores you buy. This section separates concurrency from parallelism, distinguishes data from task parallelism, and lists the five challenges every multicore programmer faces.",
    objectives: [
      "Distinguish concurrency from parallelism, and explain the role of multicore architecture",
      "State Amdahl’s law and compute speedup for given serial fractions and core counts",
      "Explain why the serial portion dominates as cores grow without bound",
      "Differentiate data parallelism from task parallelism",
      "List the five challenges of programming for multicore systems"
    ],
    concepts: [
      {
        term: "Concurrency versus parallelism",
        kind: "definition",
        statement: "A **concurrent** system supports more than one task by allowing all tasks to make progress; a **parallel** system can perform more than one task **simultaneously**. Concurrency without parallelism is possible: before multiprocessors, single-CPU schedulers created the **illusion of parallelism** by rapidly switching between processes. On a system with multiple cores, threads can run in parallel — a separate thread assigned to each core.",
        detail: "An application with four threads on one core merely interleaves them over time (concurrency); on a multicore system the same four threads can occupy four cores at once (parallelism). Concurrency is about structure, parallelism about simultaneity."
      },
      {
        term: "Multicore systems",
        kind: "definition",
        statement: "A **multicore** system places multiple computing cores on a single processing chip, each core appearing as a separate CPU to the operating system. Multithreaded programming provides the mechanism for more efficient use of these multiple computing cores and improved concurrency.",
        detail: "Single-CPU systems evolved into multi-CPU systems, which evolved into multicore chips — the hardware trend that turned parallel programming from a specialist topic into the mainstream path to performance."
      },
      {
        term: "Amdahl’s law",
        kind: "law",
        statement: "Amdahl’s law identifies the potential performance gain from adding computing cores to an application that has both serial and parallel components. If $S$ is the **portion of the application that must be performed serially** on a system with $N$ processing cores, then\n\n$$\\text{speedup} \\le \\frac{1}{S + \\dfrac{1 - S}{N}}$$\n\nThe serial fraction $S$ runs unchanged; the parallel fraction $1 - S$ is divided across the $N$ cores.",
        detail: "Speedup here means the ratio of the single-core running time to the N-core running time. The inequality is strict in practice — synchronization, memory contention and load imbalance only pull the real value below the bound."
      },
      {
        term: "The serial portion dominates",
        kind: "insight",
        statement: "As $N$ approaches infinity, the parallel term $\\frac{1 - S}{N}$ vanishes and the speedup converges to $\\frac{1}{S}$: if 50 percent of an application is serial, the maximum speedup is 2 times **no matter how many cores are added**. The serial portion of an application has a disproportionate effect on the performance gained by additional cores.",
        detail: "A graph of speedup versus cores flattens toward the 1/S ceiling: curves for S = 0.05, 0.10 and 0.50 level off near 20, 10 and 2 respectively — the flattening is the whole message of the law."
      },
      {
        term: "Data parallelism",
        kind: "definition",
        statement: "**Data parallelism** focuses on distributing **subsets of the same data** across multiple computing cores and performing the **same operation** on each. Example: summing an array of size $N$ — on a dual-core system, thread A on core 0 sums elements $0 \\ldots \\frac{N}{2} - 1$ while thread B on core 1 sums elements $\\frac{N}{2} \\ldots N - 1$.",
        detail: "Same operation, partitioned data: the textbook data-parallel patterns are element-wise transforms and reductions (sums, maxima) over arrays — what a GPU does with thousands of cores."
      },
      {
        term: "Task parallelism",
        kind: "definition",
        statement: "**Task parallelism** involves distributing not data but **tasks (threads)** across multiple cores, each thread performing a **unique operation** — possibly on the same data, possibly on different data. Example: two threads each performing a different statistical operation on the same array of elements, in parallel on separate cores.",
        detail: "Data parallelism distributes data and repeats an operation; task parallelism distributes operations. The two are not mutually exclusive — many applications hybridize the two strategies."
      },
      {
        term: "Five challenges of multicore programming",
        kind: "method",
        statement: "Programming for multicore systems challenges developers in five areas: (1) **identifying tasks** — finding areas of the application that divide into separate, concurrent tasks; (2) **balance** — ensuring tasks perform equal work of equal value (a core running a low-value task may not be worth the cost); (3) **data splitting** — dividing the data accessed by the tasks to run on separate cores; (4) **data dependency** — synchronizing tasks that depend on one another’s data; (5) **testing and debugging** — many possible execution paths make concurrent programs inherently harder to verify.",
        detail: "The first four concern design; the fifth concerns verification. The data-dependency challenge (scheduling tasks so dependents wait for producers) returns in force in Chapter 6 with race conditions and synchronization."
      },
      {
        term: "Where threads are managed: a first look",
        kind: "insight",
        statement: "Support for threads may be provided at the **user level** — user threads managed by a thread library above the kernel, without kernel support — or at the **kernel level**, where **kernel threads** are supported and managed directly by the operating system. Virtually all contemporary operating systems (Windows, Linux, macOS) support kernel threads, and a relationship must exist between user threads and kernel threads.",
        detail: "How user threads map onto kernel threads — many-to-one, one-to-one, or many-to-many — is the subject of Section 4.3 and determines whether a blocking system call stalls the whole process and whether threads can run in parallel."
      }
    ],
    examples: [
      {
        title: "Amdahl’s law with numbers",
        problem: "An application is 75 percent parallel and 25 percent serial. Compute the speedup bound on 2, 4 and 16 cores, and the limit as cores grow without bound. What if the serial portion were 50 percent?",
        steps: [
          { label: "Step 1: Set up the formula", text: "Here $S = 0.25$ (serial) and $1 - S = 0.75$ (parallel), so $\\text{speedup} \\le \\frac{1}{0.25 + 0.75/N}$." },
          { label: "Step 2: Two cores", text: "$\\text{speedup} \\le \\frac{1}{0.25 + 0.75/2} = \\frac{1}{0.625} = 1.6$ — doubling the cores buys only a 60 percent improvement." },
          { label: "Step 3: Four cores", text: "$\\text{speedup} \\le \\frac{1}{0.25 + 0.75/4} = \\frac{1}{0.4375} \\approx 2.28$ — quadrupling the cores still does not triple the speed." },
          { label: "Step 4: Sixteen cores and the limit", text: "$\\text{speedup} \\le \\frac{1}{0.25 + 0.75/16} = \\frac{1}{0.296875} \\approx 3.37$. As $N \\to \\infty$, the parallel term vanishes: $\\text{speedup} \\to \\frac{1}{0.25} = 4$ — an infinite number of cores would at best quadruple this program." },
          { label: "Step 5: The 50-percent-serial variant", text: "With $S = 0.5$ the ceiling collapses to $\\frac{1}{0.5} = 2$ times, reached almost immediately as cores are added — a graphic reminder that serial code, not core count, is the bottleneck." }
        ],
        result: "75% parallel: 1.6× on 2 cores, 2.28× on 4, 3.37× on 16, and a hard ceiling of 4× forever; at 50% serial the ceiling is 2×. The serial fraction is destiny."
      },
      {
        title: "Data-parallel sum of an array",
        problem: "Sum an array of N = 1,000,000 integers on a dual-core system using data parallelism. Which challenge of multicore programming does the final step illustrate?",
        steps: [
          { label: "Step 1: Split the data", text: "Data splitting: thread A receives elements $0 \\ldots 499\\,999$ and thread B elements $500\\,000 \\ldots 999\\,999$ — the same operation (sum) is applied to each subset on its own core." },
          { label: "Step 2: Run in parallel", text: "Both threads execute concurrently and in parallel on cores 0 and 1, each accumulating its partial sum — ideally halving the parallel portion of the running time." },
          { label: "Step 3: Combine the results", text: "The parent adds the two partial sums — a serial step, since only one addition remains once both threads finish. It cannot overlap with the partial computations." },
          { label: "Step 4: Name the challenges", text: "The example touched data splitting (Step 1), balance (equal halves keep both cores busy the whole time) and data dependency (the final add must wait for both partial results — exactly the synchronization challenge of Section 4.2.1)." }
        ],
        result: "Split evenly, sum in parallel, add the two partials serially: the structure of nearly every data-parallel reduction — and a concrete instance of three of the five multicore challenges."
      }
    ],
    keyTakeaways: [
      "Concurrency = multiple tasks making progress (the illusion via rapid switching on one core); parallelism = tasks executing simultaneously (real on multiple cores).",
      "Amdahl’s law: $\\text{speedup} \\le \\frac{1}{S + (1 - S)/N}$ where $S$ is the serial fraction and $N$ the number of cores.",
      "As $N \\to \\infty$, speedup converges to $1/S$ — a 25%-serial program can never exceed 4×, a 50%-serial one never 2×.",
      "Data parallelism: same operation on partitioned data (array halves); task parallelism: different operations on possibly shared data.",
      "The five multicore challenges: identifying tasks, balance, data splitting, data dependency, testing and debugging.",
      "Threads are managed either in user space (user threads) or by the kernel (kernel threads) — the mapping models come next in Section 4.3."
    ],
    quiz: [
      {
        q: "An application is 75% parallel and 25% serial. According to Amdahl’s law, its speedup on 4 cores is at most:",
        options: ["2.28 times", "4 times", "1.6 times", "3 times"],
        answer: 0,
        explanation: "1 / (0.25 + 0.75/4) = 1 / 0.4375 ≈ 2.28. The ceiling of 4 times is reached only as the core count grows without bound, and 1.6 is the two-core figure."
      },
      {
        q: "As the number of processing cores N approaches infinity, the speedup bound of an application with serial fraction S approaches:",
        options: ["N", "1/S", "1/(1 − S)", "S × N"],
        answer: 1,
        explanation: "The parallel term (1 − S)/N shrinks to zero, leaving speedup ≤ 1/S. A program that is half serial can never run more than twice as fast, no matter the hardware — the fundamental message of Amdahl’s law."
      },
      {
        q: "Two threads run different statistical operations on the SAME array, each on its own core. This is:",
        options: ["data parallelism", "task parallelism", "zero-capacity buffering", "a rendezvous"],
        answer: 1,
        explanation: "The tasks (operations) are distributed, not the data — the defining shape of task parallelism. Data parallelism would partition the array and run the same operation on each half."
      },
      {
        q: "Which of the following is one of the challenges of programming multicore systems listed in the text?",
        options: [
          "ensuring tasks perform equal work of equal value (balance)",
          "raising the CPU clock frequency",
          "converting all programs to kernel threads",
          "eliminating the serial portion of every algorithm"
        ],
        answer: 0,
        explanation: "The five challenges are identifying tasks, balance, data splitting, data dependency, and testing and debugging. Balance matters because a core running a task of little value may not justify its cost."
      },
      {
        q: "A single-core CPU rapidly switches among four running threads so that all make progress. This is:",
        options: ["parallelism without concurrency", "concurrency without parallelism", "task parallelism", "a many-to-many thread mapping"],
        answer: 1,
        explanation: "All tasks progress (concurrency) but only one executes at any instant — no true simultaneity. Before multiprocessors, CPU schedulers manufactured exactly this illusion of parallelism."
      }
    ,
      // PYQ-pattern: GATE 2021 — Amdahl speedup bound (rephrased)
      {
        q: "A program is $20$ percent serial and $80$ percent parallel. What is the speedup bound on $5$ cores, and what is the limit on any number of cores?",
        options: ["$2.78$ on $5$ cores, ceiling $5$", "$5$ on $5$ cores, no ceiling", "$1.6$ on $5$ cores, ceiling $2$", "$4$ on $5$ cores, ceiling $4$"],
        answer: 0,
        explanation: "**Step 1 — Given data:** serial fraction $S = 0.2$, parallel $1 - S = 0.8$, $N = 5$.\n**Step 2 — Rule:** $$\\text{speedup} \\le \\frac{1}{S + (1-S)/N}$$ with limit $1/S$ as $N \\to \\infty$.\n**Step 3 — Computation:** $$\\frac{1}{0.2 + \\frac{0.8}{5}} = \\frac{1}{0.2 + 0.16} = \\frac{1}{0.36} \\approx 2.78$$ Limit: $$\\frac{1}{0.2} = 5$$\n**Step 4 — Cross-check:** on $2$ cores the same program gives $\\frac{1}{0.2+0.4} \\approx 1.67$; extra cores help less each time as the serial part dominates.\n**Step 5 — Distractors:** $5$ claims linear scaling, ignoring $S$; $1.6$ is the $25$-percent-serial two-core figure; $4$ is the $25$-percent-serial ceiling.\n**Step 6 — Conclude:** about $2.78$ on five cores, never above $5$."
      },
      // PYQ-pattern: DRDO 2018 — serial fraction dominates (rephrased)
      {
        q: "If $40$ percent of an application must run serially, what is the maximum speedup on any number of cores, and what does adding cores beyond $8$ achieve?",
        options: ["$8$, linear scaling continues", "$4$, doubling every two cores", "$2.5$, almost nothing further", "$1.67$, cores hurt"],
        answer: 2,
        explanation: "**Step 1 — Given data:** $S = 0.4$, $N \\to \\infty$.\n**Step 2 — Rule:** ceiling is $1/S$ since $(1-S)/N$ vanishes.\n**Step 3 — Computation:** $$\\frac{1}{0.4} = 2.5$$ On $8$ cores: $$\\frac{1}{0.4+\\frac{0.6}{8}} = \\frac{1}{0.475} \\approx 2.11$$ already near the ceiling.\n**Step 4 — Cross-check:** the curve flattens toward $2.5$; curves for larger $S$ flatten earlier and lower.\n**Step 5 — Distractors:** linear scaling ignores the serial part; $4$ is the $25$-percent ceiling; slowdown contradicts the bound (speedup never falls with $N$ in the model).\n**Step 6 — Conclude:** ceiling $2.5$; past $8$ cores gains are marginal."
      }
    ]
  },

  // ---------------------------------------------------------------- 4.3
  {
    sectionId: "osc-ch4-s3",
    readingTime: 12,
    intro: "User threads live above the kernel; kernel threads live inside it — and something must map one onto the other. This section compares the three multithreading models (many-to-one, one-to-one, many-to-many) and then tours the three great thread libraries: POSIX Pthreads, the Windows API and Java — using one common example, summing the integers 1 through N in a separate thread.",
    objectives: [
      "Compare user-level and kernel-level threads",
      "Explain the many-to-one, one-to-one and many-to-many (two-level) models with their trade-offs",
      "Distinguish asynchronous from synchronous thread creation",
      "Write and trace a Pthreads summation program",
      "Create threads in Windows and Java, and use Java’s ExecutorService with Callable and Future"
    ],
    concepts: [
      {
        term: "User threads and kernel threads",
        kind: "definition",
        statement: "**User threads** are supported above the kernel and managed without kernel support; **kernel threads** are supported and managed directly by the operating system. Virtually all contemporary operating systems — Windows, Linux, macOS — support kernel threads, and a relationship (a mapping) must exist between user threads and kernel threads.",
        detail: "A thread library may be implemented entirely in user space (library calls are local function calls) or as a kernel-level library (API calls become system calls). Kernel visibility is the crux: threads the kernel cannot see cannot be scheduled onto separate cores."
      },
      {
        term: "Many-to-one model",
        kind: "definition",
        statement: "The **many-to-one model** maps many user-level threads to **one** kernel thread. Thread management is done by the thread library in user space, so it is efficient — but the **entire process blocks if any thread makes a blocking system call**, and because only one thread can access the kernel at a time, **multiple threads cannot run in parallel** on multicore systems.",
        detail: "Green threads — a thread library available for Solaris and adopted in early versions of Java — used the many-to-one model. Very few systems continue to use it, because it cannot exploit the multiple processing cores now standard on most machines."
      },
      {
        term: "One-to-one model",
        kind: "definition",
        statement: "The **one-to-one model** maps each user thread to a kernel thread. It provides **more concurrency** than many-to-one: another thread can run when a thread makes a blocking system call, and multiple threads can run in parallel on multiprocessors. The drawback is that creating a user thread requires **creating the corresponding kernel thread** — and a large number of kernel threads may burden system performance.",
        detail: "Linux and the Windows family implement the one-to-one model. The practical constraint is the developer’s responsibility: do not create more threads than the system can carry (some systems cap the total)."
      },
      {
        term: "Many-to-many and two-level models",
        kind: "definition",
        statement: "The **many-to-many model** multiplexes many user-level threads to a **smaller or equal number of kernel threads**: developers create as many user threads as necessary, kernel threads can run in parallel, and when a thread performs a blocking system call the kernel can schedule another thread. A variation — the **two-level model** — still multiplexes many user threads onto kernel threads but also allows a user thread to be **bound** to one kernel thread.",
        detail: "The number of kernel threads may match the application or the machine (more on an 8-core system than a 4-core one). Although many-to-many is the most flexible in theory, it is difficult to implement — and with cores proliferating, limiting kernel threads matters less, so most operating systems settled on one-to-one. Modern concurrency libraries (Section 4.4) map tasks to threads using the many-to-many idea."
      },
      {
        term: "Thread libraries",
        kind: "definition",
        statement: "A **thread library** gives the programmer an API for creating and managing threads. Three main libraries are in use today: **POSIX Pthreads** (the threads extension of the POSIX standard, IEEE 1003.1c — a specification for thread behavior, not an implementation, provided as either a user-level or kernel-level library), the **Windows thread library** (kernel-level), and the **Java thread API** (which generally maps onto the host OS’s library — Pthreads on Linux/macOS, the Windows API on Windows).",
        detail: "In POSIX and Windows threading, data declared globally is shared among all threads of the process. Java has no global data notion, so shared access must be arranged explicitly between threads."
      },
      {
        term: "Asynchronous versus synchronous threading",
        kind: "definition",
        statement: "With **asynchronous threading**, once the parent creates a child thread the parent resumes execution — parent and child run concurrently and independently, with typically little data sharing (the multithreaded-server pattern). With **synchronous threading**, the parent creates one or more children and then **waits for all of them to terminate** before resuming: after finishing, each child terminates and **joins** with its parent, and only then does the parent continue — typically involving significant data sharing, such as combining the children’s results.",
        detail: "The fork-join strategy of Section 4.4 is implicit synchronous threading. All the book’s summation examples (below) use synchronous threading."
      },
      {
        term: "Pthreads API",
        kind: "method",
        statement: "A Pthreads program: include pthread.h; declare $pthread\\_t\\ tid$ and attributes $pthread\\_attr\\_t\\ attr$; initialize defaults with **pthread_attr_init(&attr)**; create the thread with **pthread_create(&tid, &attr, runner, argv[1])** — passing the function where the new thread begins execution; wait with **pthread_join(tid, NULL)**. The child thread ends by calling **pthread_exit(0)**. Global data (like $sum$) is shared by all threads.",
        detail: "Joining several threads is a for loop: create workers[] and call pthread_join(workers[i], NULL) for i = 0 … NUM_THREADS − 1. Data declared outside any function is the sharing channel."
      },
      {
        term: "Windows threads",
        kind: "method",
        statement: "Windows threads are created with **CreateThread()**, which takes security attributes, a stack size (0 = default), the thread function (a function of one LPVOID parameter returning DWORD), a parameter pointer, creation flags (e.g., start suspended), and returns the thread identifier by reference. The parent waits with **WaitForSingleObject(ThreadHandle, INFINITE)**, or **WaitForMultipleObjects(N, THandles, TRUE, INFINITE)** for an array of N handles — then CloseHandle() releases each thread handle.",
        detail: "The book’s Windows summation example mirrors the Pthreads one exactly: a global DWORD Sum, a Summation() function looping 1..Upper, CreateThread with defaults, WaitForSingleObject, then printf of the shared total."
      },
      {
        term: "Java threads, ExecutorService and futures",
        kind: "method",
        statement: "Java offers two explicit techniques: define a class **extending Thread** and override run(), or — more common — **implement the Runnable interface** (whose single abstract method is public void run()); wrap it in a Thread and call **start()**, which allocates and initializes the new thread and invokes run() on its behalf (never call run() directly). Since Java 1.5, the java.util.concurrent **Executor framework** decouples task submission from thread creation: an **ExecutorService** (e.g., Executors.newSingleThreadExecutor()) runs Runnable tasks via execute(), and **Callable** tasks via submit(), which returns a **Future** whose **get()** blocks until the result is available.",
        detail: "Callable behaves like Runnable but returns a result — the fix for Java threads being unable to return values. The book’s Summation class implements Callable<Integer>, loops 1..upper in call(), and the driver prints result.get(). Since Java 8, lambda expressions (Runnable task = () -> …) spare you the wrapper class."
      }
    ],
    examples: [
      {
        title: "Summation with Pthreads",
        problem: "The book’s program sums the integers 1..N in a separate thread: main() creates the thread with runner() and argv[1], joins it, and prints the global sum. Trace an execution with N = 5.",
        steps: [
          { label: "Step 1: Set up", text: "main() declares the shared global $sum$, initializes default attributes with pthread_attr_init(&attr), and calls pthread_create(&tid, &attr, runner, argv[1]) — argv[1] is the command-line string \"5\"." },
          { label: "Step 2: Two threads, one address space", text: "The program now has the initial thread in main() and the summation thread in runner(). Both share the global $sum$; each keeps its own stack, PC and registers." },
          { label: "Step 3: The child computes", text: "runner() converts its parameter with atoi(param), sets $sum = 0$, and runs the loop $sum += i$ for $i = 1 \\ldots 5$ — accumulating $1 + 2 + 3 + 4 + 5 = 15$ — then terminates with pthread_exit(0)." },
          { label: "Step 4: The parent joins and reads", text: "main() has meanwhile been blocked in pthread_join(tid, NULL); when the child exits, join returns and the parent printf’s sum = 15 — reading the shared global the child wrote." },
          { label: "Step 5: Scaling to several threads", text: "For ten workers you would store their tids in an array and join them in a loop: for i = 0 … 9, pthread_join(workers[i], NULL) — the synchronous-threading pattern where the parent waits for every child." }
        ],
        result: "pthread_create → runner computes 15 into the shared global → pthread_exit → the parent’s join returns → sum = 15 printed: the create/join strategy with global data as the sharing channel."
      },
      {
        title: "Three ways to say it in Java",
        problem: "Express the same 1..N summation in Java three ways: extending Thread, implementing Runnable, and via the Executor framework with Callable and Future (N = 5).",
        steps: [
          { label: "Step 1: Extend Thread", text: "class Summation extends Thread { public void run() { … } } — the run() method holds the loop; new Summation().start() launches it. Simple, but Java’s single inheritance is now spent." },
          { label: "Step 2: Implement Runnable", text: "class Task implements Runnable defines run(); the driver builds Thread worker = new Thread(new Task()); worker.start(); — start() allocates the thread and calls run() for you. The thread cannot return the sum: it must write shared state." },
          { label: "Step 3: Callable + Future", text: "class Summation implements Callable<Integer> defines Integer call() { … return sum; }; ExecutorService pool = Executors.newSingleThreadExecutor(); Future<Integer> result = pool.submit(new Summation(5));" },
          { label: "Step 4: Collect the answer", text: "System.out.println(result.get()) blocks until the value is ready and prints 15 — the parent waits for the **result**, not for a thread to die, and Callable gets a return value where Runnable cannot." }
        ],
        result: "Three syntaxes, one computation: extend Thread or implement Runnable for fire-and-forget work with shared data; prefer ExecutorService + Callable + Future when you want a value back cleanly."
      },
      {
        title: "Choosing a threading model",
        problem: "For each of three applications — a GUI toolkit with many user-level threads on Solaris green threads; a modern Linux server; a concurrency library mapping thousands of tasks — decide which multithreading model fits and why.",
        steps: [
          { label: "Step 1: The green-threads toolkit", text: "Many user threads on one kernel thread = **many-to-one**. Thread creation and switching are pure user-space operations (fast), but one blocking system call freezes the whole process and no two threads ever run in parallel — acceptable for cooperative GUI work, fatal for a server." },
          { label: "Step 2: The Linux server", text: "Every user thread maps to a kernel thread = **one-to-one**. A blocking system call stalls only its own thread, and threads genuinely run in parallel across cores. The cost: each thread consumes a kernel thread, so thread counts must stay sane — exactly the model Linux and Windows chose." },
          { label: "Step 3: The task library", text: "Thousands of user-level tasks multiplexed onto a small pool of kernel threads = **many-to-many**. Unlimited cheap tasks, parallel execution, and kernel scheduling around blocked threads — with the two-level twist that an individual task may be bound to a kernel thread when needed." },
          { label: "Step 4: Note the industry verdict", text: "Many-to-many is the most flexible but hardest to implement, and with core counts rising, capping kernel threads matters less — so mainstream operating systems ship one-to-one, and the many-to-many idea survives inside task libraries (Section 4.4)." }
        ],
        result: "Many-to-one for cheap user-space threads at the cost of blocking and no parallelism; one-to-one for full concurrency at kernel-thread cost; many-to-many to get both — with one-to-one winning in OS kernels and many-to-many living on in run-time libraries."
      }
    ],
    keyTakeaways: [
      "User threads are managed above the kernel; kernel threads are managed by the OS — the mapping between them defines the model.",
      "Many-to-one: efficient user-space management, but one blocking syscall blocks the whole process and no parallelism (green threads).",
      "One-to-one: every user thread gets a kernel thread — blocking one thread doesn’t stop the rest and threads run in parallel; the cost is kernel-thread creation overhead (Linux, Windows).",
      "Many-to-many (and the two-level variant with bound threads): user threads multiplexed onto a smaller-or-equal set of kernel threads — flexible but hard to implement, so most systems use one-to-one.",
      "Pthreads: pthread_create(&tid, &attr, runner, param) … pthread_join(tid, NULL); global data is shared.",
      "Windows: CreateThread() + WaitForSingleObject()/WaitForMultipleObjects(); Java: extend Thread or implement Runnable, start() (never call run() directly), and ExecutorService with Callable/Future for tasks that return values.",
      "Asynchronous threading: parent resumes at once, little sharing; synchronous threading: parent waits for all children to join — the pattern of every summation example in this section."
    ],
    quiz: [
      {
        q: "In the many-to-one threading model, if one user thread makes a blocking system call:",
        options: [
          "the entire process blocks",
          "only that thread blocks, and others keep running",
          "the kernel creates a new kernel thread for the others",
          "the thread is terminated and restarted later"
        ],
        answer: 0,
        explanation: "All user threads share the single kernel thread, so when it enters the kernel and blocks, nothing of the process can run. This — plus the impossibility of parallel execution — is why few systems still use many-to-one."
      },
      {
        q: "Linux and Windows implement which multithreading model?",
        options: ["many-to-one", "one-to-one", "many-to-many", "two-level with bound threads"],
        answer: 1,
        explanation: "Each user thread maps to its own kernel thread: blocking calls no longer stall the process and threads run in parallel on multiprocessors, at the price of kernel-thread creation overhead for every user thread."
      },
      {
        q: "In the Pthreads summation program, the parent thread learns the result computed by the runner() thread by:",
        options: [
          "reading the global variable sum after pthread_join() returns",
          "receiving it as the return value of pthread_create()",
          "calling pthread_exit() itself",
          "marshalling it through a mailbox"
        ],
        answer: 0,
        explanation: "POSIX threads share globally declared data: the child writes sum, then pthread_join(tid, NULL) makes the parent wait for the child’s termination, after which it safely prints the shared total."
      },
      {
        q: "In Java, to launch a thread you invoke:",
        options: [
          "the run() method directly on the Runnable",
          "start() on the Thread object — which allocates the thread and calls run() on your behalf",
          "submit() on the Runnable class itself",
          "execute() on the Callable interface"
        ],
        answer: 1,
        explanation: "start() does two things: it allocates memory and initializes the new thread in the JVM, and it invokes run(). Calling run() yourself just executes the method sequentially on the current thread — no concurrency at all."
      },
      {
        q: "The Java Callable and Future pair exists because:",
        options: [
          "Runnable tasks cannot return a result, so Callable defines call() with a return value and submit() hands back a Future whose get() retrieves it",
          "Runnable tasks cannot be scheduled",
          "threads cannot share global data in Java",
          "the JVM forbids multiple threads per process"
        ],
        answer: 0,
        explanation: "Java threads have no return channel and no global data, so Callable<V> provides V call() and ExecutorService.submit() returns a Future<V>; calling get() on it blocks until the result is available."
      }
    ]
  },

  // ---------------------------------------------------------------- 4.4
  {
    sectionId: "osc-ch4-s4",
    readingTime: 12,
    intro: "Applications with hundreds or thousands of threads are on the horizon — and designing them by hand is unmanageable. Implicit threading hands thread creation and management to compilers and run-time libraries: thread pools, OpenMP directives, Grand Central Dispatch queues, Intel TBB templates and Java’s fork-join framework, with the developer identifying tasks rather than threads. The section closes with the issues that cut across all multithreaded programs: fork() and exec() semantics, signals, cancellation, thread-local storage and scheduler activations.",
    objectives: [
      "Explain the rationale for implicit threading and the thread-pool design and its benefits",
      "Describe OpenMP, Grand Central Dispatch and Intel TBB approaches to parallelism",
      "Trace Java’s fork-join framework: ForkJoinPool, RecursiveTask, compute(), fork()/join() and work stealing",
      "State the multithreaded semantics of fork() and exec(), signal delivery options, and cancellation modes",
      "Explain thread-local storage and scheduler activations (LWPs and upcalls)"
    ],
    concepts: [
      {
        term: "Implicit threading and thread pools",
        kind: "method",
        statement: "**Implicit threading** transfers the creation and management of threads from application developers to **compilers and run-time libraries**: the developer identifies **tasks** — not threads — that can run in parallel, and the run-time library maps tasks to separate threads, typically using the many-to-many model. Its workhorse is the **thread pool**: a number of threads created at start-up and placed in a pool, where they sit and wait for work. When the server receives a request, it **submits the request to the pool** rather than creating a thread: an available thread is awakened and services the task immediately; if none is available, the task is queued until one becomes free. Once a thread completes its service, it **returns to the pool** and awaits more work.",
        detail: "Three benefits: (1) servicing a request with an existing thread is often faster than waiting to create one; (2) a pool limits the number of threads that exist at any one point — important on systems that cannot support many concurrent threads; (3) separating the task from the mechanics of running it enables strategies such as delayed or periodic execution. Pool size is set heuristically from CPU count, physical memory and expected concurrent requests; sophisticated pools (Apple’s GCD) adjust the count dynamically. The motivation for all of this is scale and correctness: thousands of hand-managed threads invite deadlocks and races that are hard to test (the correctness issues of Chapters 6 and 8)."
      },
      {
        term: "OpenMP",
        kind: "method",
        statement: "**OpenMP** is a set of compiler directives and an API for C, C++ or FORTRAN that supports parallel programming in shared-memory environments. A **#pragma omp parallel** directive marks a parallel region; on encountering it, the run-time library creates as many threads as there are processing cores (two on a dual-core, four on a quad-core), all threads execute the region simultaneously, and each thread is terminated as it exits the region. Loops are parallelized with **#pragma omp parallel for** — the iterations are divided among the created threads.",
        detail: "Developers can also set the thread count manually and mark data as shared between threads or private to a thread. Example: with #pragma omp parallel for on for (i = 0; i < N; i++) c[i] = a[i] + b[i];, the loop’s work is split across the pool of threads OpenMP created."
      },
      {
        term: "Grand Central Dispatch and Intel TBB",
        kind: "method",
        statement: "**Grand Central Dispatch (GCD)** — Apple’s combination of run-time library, API and language extensions for macOS and iOS — schedules tasks onto **dispatch queues**: **serial queues** remove tasks in FIFO order, completing one before removing the next (each process has a main queue, and developers can create private ones), while **concurrent queues** are also FIFO but remove several tasks at a time to run in parallel (system-wide global queues in four QoS classes: user-interactive, user-initiated, utility, background). Tasks are expressed as blocks (in Objective-C/C, a self-contained unit of work written with a caret character before a braced body) or Swift closures, which express the same functionality without the caret. **Intel Threading Building Blocks (TBB)** is a C++ template library needing no special compiler: developers specify tasks, and the TBB task scheduler — load-balancing and cache-aware — maps them to threads, with templates such as parallel_for, atomic operations, mutual exclusion and concurrent containers.",
        detail: "GCD’s thread pool is composed of POSIX threads and grows and shrinks with application demand and system capacity (implemented in the open-source libdispatch, also ported to FreeBSD). A Swift example: get a global queue with dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0), then dispatch_async(queue, { print(\"I am a closure.\") })."
      },
      {
        term: "Java fork-join",
        kind: "method",
        statement: "Java’s fork-join library (Version 1.7) targets **recursive divide-and-conquer algorithms** such as Quicksort and mergesort. A **ForkJoinPool** — a thread pool whose workers each maintain a queue of forked tasks — executes tasks that extend **RecursiveTask<V>** (returns a value from compute()) or **RecursiveAction** (returns nothing), both extending ForkJoinTask. The task’s **compute()** method either solves the problem directly if it is small enough (below a THRESHOLD) or forks two subtasks and combines their joined results: $result = left.join() + right.join()$. Idle workers **steal tasks** from other threads’ queues — the work-stealing algorithm that balances the load.",
        detail: "The generic pattern: Task(problem): if problem is small, solve directly; else subtask1 = fork(new Task(subset)); subtask2 = fork(new Task(subset)); return join(subtask1) combined with join(subtask2). Choosing THRESHOLD requires timing trials — the book uses 1,000 elements for array summation."
      },
      {
        term: "fork() and exec() in multithreaded programs",
        kind: "insight",
        statement: "If one thread calls fork(), does the new process duplicate **all** threads or only the **calling** thread? Some UNIX systems provide **two versions of fork()**: one duplicating all threads, another duplicating only the thread that invoked it. **exec()** works as in Chapter 3: if any thread invokes exec(), the program specified in its parameter **replaces the entire process — including all threads**.",
        detail: "Choosing between the fork() versions is application logic: if exec() follows immediately, duplicating all threads is unnecessary — duplicate only the calling thread; if the forked process will keep running as-is, it should duplicate all threads."
      },
      {
        term: "Signal handling in multithreaded programs",
        kind: "method",
        statement: "A UNIX **signal** notifies a process that an event occurred, following the pattern: the signal is generated, delivered to a process, and then handled — by the default handler or by a user-defined one that overrides it. **Synchronous signals** (illegal memory access, division by 0) are delivered to the same process that caused them; **asynchronous signals** (external termination keystrokes, an expiring timer) arrive from outside the running process. In a multithreaded program the delivery question acquires four answers: deliver the signal (1) **to the thread to which the signal applies**, (2) **to every thread in the process**, (3) **to certain threads**, or (4) **assign a specific thread to receive all signals** for the process.",
        detail: "Synchronous signals must go to the causing thread; asynchronous ones like Ctrl-C termination should reach all threads. UNIX threads specify which signals they accept and block — kill(pid_t pid, int signal) targets a process, pthread_kill(pthread_t tid, int signal) a specific thread. Windows has no signals per se; it emulates them with asynchronous procedure calls (APCs), which are delivered to a particular thread and are therefore simpler."
      },
      {
        term: "Thread cancellation",
        kind: "definition",
        statement: "**Thread cancellation** terminates a target thread before it completes (e.g., rival search threads after one finds the result, or the stop button canceling a page’s loading threads). Two modes: **asynchronous cancellation** — one thread immediately terminates the target; **deferred cancellation** — the target periodically checks whether it should terminate, allowing it to stop itself in an orderly fashion at a safe point.",
        detail: "The danger with asynchronous cancellation is state: resources allocated to the canceled thread may not be freed, and the thread may die mid-update of shared data. Pthreads initiates cancellation with pthread_cancel(tid) — a request, honored only per the target’s state and type (off, deferred, asynchronous); deferred cancellation occurs at cancellation points, established with pthread_testcancel(), and cleanup handlers release resources before death. Java uses deferred-style cancellation via interrupt() and isInterrupted()."
      },
      {
        term: "Thread-local storage",
        kind: "definition",
        statement: "**Thread-local storage (TLS)** gives each thread its own copy of certain data — invisible to its peers — even though threads of a process share the process’s data. Example: a transaction-processing system assigns each transaction (serviced by its own thread) a unique identifier stored in TLS.",
        detail: "TLS is not a local variable: locals are visible only during a single function invocation, while TLS data are visible across function invocations — like static data, except unique per thread. Support: Java’s ThreadLocal<T> with set()/get(), Pthreads’ pthread_key_t keys, C#’s [ThreadStatic] attribute, and gcc’s __thread storage class (static __thread int threadID;)."
      },
      {
        term: "Scheduler activations and upcalls",
        kind: "definition",
        statement: "Systems using the many-to-many or two-level models place an intermediate data structure between user and kernel threads: the **lightweight process (LWP)** — to the user-thread library a **virtual processor** on which it schedules user threads, and beneath it a kernel thread that the OS schedules on a physical processor. Communication from kernel to thread library uses **upcalls**: when an application thread is about to block, the kernel makes an upcall informing the library, allocates a new virtual processor, and the library’s **upcall handler** saves the blocking thread’s state and schedules another eligible thread on the new LWP; when the awaited event occurs, another upcall marks the blocked thread eligible again.",
        detail: "The kernel grants the application a set of LWPs (virtual processors) that it can grow or shrink — this is how the number of kernel threads is dynamically adjusted. An I/O-intensive application needs roughly one LWP per concurrent blocking system call: five simultaneous file reads with only four LWPs forces the fifth to wait."
      }
    ],
    examples: [
      {
        title: "Fork-join sum, hands on",
        problem: "Sum the array [3, 1, 4, 1, 5, 9, 2, 6] with Java’s fork-join framework using THRESHOLD = 2 (solve directly when a range has fewer than 2 elements). Trace every fork, join and direct computation.",
        steps: [
          { label: "Step 1: Submit the root task", text: "ForkJoinPool pool = new ForkJoinPool(); int sum = pool.invoke(new SumTask(0, 7, array)) — the pool’s workers begin executing compute() on the whole range." },
          { label: "Step 2: Divide the root", text: "Range (0, 7) has 7 ≥ THRESHOLD elements, so compute() sets mid = (0 + 7)/2 = 3, forks leftTask(0, 3) and rightTask(4, 7), then blocks in $leftTask.join() + rightTask.join()$." },
          { label: "Step 3: Divide the halves", text: "Left (0, 3) sets mid = 1 and forks (0, 1) and (2, 3); right (4, 7) sets mid = 5 and forks (4, 5) and (6, 7) — four leaf tasks are now in the queues, and idle workers steal them." },
          { label: "Step 4: Solve the leaves directly", text: "Each leaf range has fewer than THRESHOLD + 1 elements, so compute() loops: (0, 1) → 3 + 1 = 4; (2, 3) → 4 + 1 = 5; (4, 5) → 5 + 9 = 14; (6, 7) → 2 + 6 = 8." },
          { label: "Step 5: Join the results", text: "Left returns $4 + 5 = 9$; right returns $14 + 8 = 22$; the root combines $9 + 22 = 31$ — the value returned by pool.invoke(). Had a worker gone idle mid-tree, it would have stolen a queued leaf rather than waiting." }
        ],
        result: "31 — obtained by two levels of division into four directly-computed leaves, with joins summing 4+5 and 14+8, then 9+22. The library decided how many threads ran the tasks; the code only expressed the divide-and-conquer structure."
      },
      {
        title: "OpenMP parallelizes a loop",
        problem: "Two arrays a and b of size N must be summed element-wise into c. Show the OpenMP version on a quad-core system and count the threads created.",
        steps: [
          { label: "Step 1: Mark the region", text: "The directive #pragma omp parallel for placed immediately above for (i = 0; i < N; i++) c[i] = a[i] + b[i]; tells the run-time library to parallelize the loop that follows." },
          { label: "Step 2: Threads are created for you", text: "OpenMP creates as many threads as there are processing cores — four on the quad-core system — without a single explicit thread call in your source." },
          { label: "Step 3: The loop is divided", text: "The iteration space 0..N−1 is divided among the four threads (roughly N/4 iterations each); every write c[i] is independent of every other, so no synchronization is needed." },
          { label: "Step 4: Implicit join", text: "As each thread finishes its share of the loop it terminates; execution of the original (master) thread resumes after the parallel region — an implicit fork-join with the compiler directives playing the role of the fork calls." }
        ],
        result: "Four threads, one directive, zero explicit thread management — the essence of implicit threading: identify the parallel region (or loop), and let the run-time library do the rest."
      },
      {
        title: "A thread pool under load",
        problem: "A web server with a pool of 8 threads receives 12 requests in a burst. Describe the pool’s behavior from burst to drain, and the three benefits it realizes over thread-per-request.",
        steps: [
          { label: "Step 1: The first eight requests", text: "Each request is submitted to the pool; all 8 pooled threads are idle, so 8 requests are picked up immediately and serviced concurrently — none pays a thread-creation cost (benefit 1: existing threads serve faster)." },
          { label: "Step 2: The overflow queues", text: "The 9th through 12th requests find no free thread, so they wait in the pool’s queue — the system is **bounded** at 8 concurrent threads no matter how heavy the traffic (benefit 2: unlimited thread-per-request storms can never exhaust CPU or memory)." },
          { label: "Step 3: Threads recycle", text: "As each worker finishes, it returns to the pool and immediately picks up a queued request — one thread may serve several requests during the burst, amortizing its creation cost across all of them." },
          { label: "Step 4: Beyond simple dispatch", text: "Because the task is decoupled from the mechanics of running it (benefit 3), the same pool can schedule a task after a time delay or run it periodically; richer pools even resize themselves with demand, growing under load and shrinking to save memory when idle." }
        ],
        result: "8 threads, 12 requests, zero creations after start-up: immediate service for eight, a bounded queue for the rest, and recycled workers throughout — the standard architecture for servers (Java: Executors.newFixedThreadPool(8))."
      }
    ],
    keyTakeaways: [
      "Implicit threading: identify tasks, not threads — compilers and run-time libraries manage creation, mapping (typically many-to-many), scheduling and balancing.",
      "Thread pools: pre-created threads waiting for work — faster service, a hard bound on thread count, and decoupling that enables delayed or periodic execution.",
      "OpenMP: compiler directives (#pragma omp parallel, #pragma omp parallel for) create as many threads as cores and divide loop iterations among them.",
      "GCD: dispatch queues — serial (FIFO, one task at a time) vs concurrent (FIFO removal, parallel execution), tasks as blocks or Swift closures; Intel TBB is the C++ template-library analogue with a cache-aware, load-balancing task scheduler.",
      "Java fork-join: ForkJoinPool runs RecursiveTask/RecursiveAction tasks whose compute() divides until below a threshold, then combines join() results — with work stealing to balance the queues.",
      "Multithreaded fork() may duplicate all threads or only the caller; exec() replaces the whole process; signals are delivered to the causing thread, all threads, selected threads, or a designated thread; cancellation should be deferred (cancellation points), asynchronous risks leaked locks and half-written data.",
      "Thread-local storage gives each thread private long-lived data (like statics, but per-thread); scheduler activations let the kernel and thread library cooperate through LWPs and upcalls, adjusting virtual processors as threads block."
    ],
    quiz: [
      {
        q: "Which of the following is a benefit of thread pools over creating a thread per request?",
        options: [
          "it removes the need for any synchronization",
          "it places a bound on the number of threads that exist at any one point",
          "it guarantees every request runs in parallel",
          "it eliminates the operating system from thread scheduling"
        ],
        answer: 1,
        explanation: "A pool has a fixed population of pre-created, recycled threads, so unbounded request storms cannot spawn unbounded threads and exhaust CPU or memory. It also serves requests faster (no creation latency) and decouples tasks from execution mechanics — but it neither removes synchronization nor guarantees parallelism."
      },
      {
        q: "When OpenMP encounters the directive #pragma omp parallel on a quad-core system, it creates:",
        options: [
          "one thread per loop iteration",
          "as many threads as there are processing cores — four",
          "exactly two threads regardless of cores",
          "no threads; the region runs sequentially"
        ],
        answer: 1,
        explanation: "OpenMP creates one thread per processing core (four here); all threads simultaneously execute the parallel region, and each is terminated as it exits the region. Developers may also set the thread count manually."
      },
      {
        q: "In Java’s fork-join framework, work stealing means:",
        options: [
          "a thread that finishes its queue can steal tasks from another thread’s queue, balancing the workload",
          "the operating system steals CPU time from long-running tasks",
          "results are stolen from the Future objects of other tasks",
          "idle threads are removed from the ForkJoinPool permanently"
        ],
        answer: 0,
        explanation: "Each worker in a ForkJoinPool keeps a queue of tasks it has forked; when a queue empties, its thread steals a task from another thread’s queue — thousands of tasks end up balanced across a handful of workers."
      },
      {
        q: "If a thread in a multithreaded program invokes exec():",
        options: [
          "only that thread is replaced; the others continue",
          "the program specified in the parameter replaces the entire process, including all threads",
          "all threads are duplicated into a new process",
          "exec() is a no-op in multithreaded programs"
        ],
        answer: 1,
        explanation: "exec() behaves as in Chapter 3: the named program overlays the whole process and every thread in it. The subtle multithreaded question concerns fork(), which on some systems duplicates all threads and on others only the calling thread."
      },
      {
        q: "Deferred cancellation in Pthreads is safer than asynchronous cancellation because:",
        options: [
          "the target thread checks for pending cancellation at designated cancellation points, terminating itself at a safe place with resources released",
          "it cannot ever terminate the target thread",
          "the cancellation request is silently discarded",
          "it requires no pthread_cancel() call"
        ],
        answer: 0,
        explanation: "With deferred cancellation the target runs until a cancellation point (e.g., pthread_testcancel() or a blocking call), where it can stop cleanly — cleanup handlers can release locks and memory first. Asynchronous cancellation can kill a thread mid-update, leaking resources and corrupting shared data."
      }
    ]
  }
]
