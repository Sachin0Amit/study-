import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 3: Processes (Sections 3.1 – 3.5)
// Master study content.
// ============================================================================

export const osCh3Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: "osc-ch3-s1",
    readingTime: 10,
    intro: "A process is a program in execution — the active entity that gives a passive executable file its life. This section defines the process, walks the memory layout of a C program from the text section up to the arguments, names the five process states and every transition between them, and opens up the process control block, the data structure the kernel uses to represent each process.",
    objectives: [
      "Distinguish a program from a process, and explain why one program can back many processes",
      "Sketch the memory layout of a C program and place variables in the correct section",
      "Name the five process states and trace every transition in the state diagram",
      "List the contents of a process control block (PCB) and explain why each field exists"
    ],
    concepts: [
      {
        term: "Process",
        kind: "definition",
        statement: "A **process** is a **program in execution**. A **program** is a **passive** entity — a file containing instructions stored on disk (an executable file) — whereas a process is an **active** entity, with a **program counter** specifying the next instruction to execute and a set of associated resources. A program becomes a process when its executable file is loaded into memory.",
        detail: "Several processes can be associated with the same program: many users running copies of the mail program, or one user opening many browser tabs. Each is a separate process — the text sections are equivalent, but the data, heap and stack sections differ. A process can itself be an execution environment for other code: the JVM runs as an ordinary process that interprets the loaded Java program on the program’s behalf."
      },
      {
        term: "Memory layout of a process",
        kind: "definition",
        statement: "A process in memory is laid out, from low addresses to high addresses, as: the **text** section (the compiled program code), **initialized data** (globals such as $y = 15$), **uninitialized data** (the BSS block, such as a bare $x$), the **heap** (memory allocated dynamically at run time, growing toward higher addresses), and the **stack** (growing down from high addresses), with **arguments and environment** ($argc$, $argv$) at the very top.",
        detail: "The sizes of the text and data sections are fixed for the whole run; the stack and heap shrink and grow dynamically and grow toward one another, so the operating system must ensure they never overlap. The GNU size command reports the section sizes of an executable: a sample program shows text 1158, data 284 and bss 8 bytes (bss = “block started by symbol”, the uninitialized data)."
      },
      {
        term: "Stack versus heap",
        kind: "definition",
        statement: "The **stack** holds temporary data for function calls: each call pushes an **activation record** containing function parameters, local variables and the return address; returning pops the record. The **heap** holds memory allocated dynamically at run time (C’s malloc(), Java’s new) — it grows as memory is allocated and shrinks as memory is returned to the system.",
        detail: "Rule of thumb: local variables and call frames live on the stack; everything whose lifetime the programmer controls explicitly lives on the heap. In the book’s example, values = malloc(5 ints) lives in the heap while the loop counter i lives on the stack."
      },
      {
        term: "Process states",
        kind: "definition",
        statement: "As a process executes it changes **state**: **new** (being created), **running** (instructions are being executed), **waiting** (halted until some event occurs, such as an I/O completion or a signal), **ready** (waiting to be assigned to a processor), and **terminated** (finished execution). At any instant, only one process can be running on each processor core — but many processes may be ready and waiting.",
        detail: "The names are arbitrary and vary across operating systems; the states themselves are found on all systems, and some kernels delineate them more finely (Linux adds zombie, stopped and others)."
      },
      {
        term: "Process state transitions",
        kind: "method",
        statement: "The state diagram arrows: new → ready (**admitted**); ready → running (**scheduler dispatch**); running → ready (**interrupt** or expired time slice — preemption); running → waiting (**I/O or event wait**); waiting → ready (**I/O or event completion**); running → terminated (**exit**).",
        detail: "Two arrows are commonly missed: a process is preempted from running back to ready when an interrupt occurs or its time slice expires, and a waiting process never jumps straight to running — it must first re-enter the ready queue."
      },
      {
        term: "Process control block (PCB)",
        kind: "definition",
        statement: "Each process is represented in the operating system by a **process control block** (also called a task control block) — one PCB per process. It contains: **process state**; the **program counter** (address of the next instruction to execute); **CPU registers** (accumulators, index registers, stack pointers, general-purpose registers, condition codes); **CPU-scheduling information** (process priority, pointers to scheduling queues, other scheduling parameters); **memory-management information** (base and limit registers, page or segment tables); **accounting information** (CPU and real time used, time limits, account numbers); and **I/O status information** (list of I/O devices allocated, list of open files).",
        detail: "In brief, the PCB is the repository for all the data needed to start — or restart — a process, along with some accounting data. In Linux the PCB is the task_struct structure in include/linux/sched.h: it holds state, scheduling info, the list of open files, the address space, and pointers to the process’s parent, children and siblings. All active processes are linked in a doubly linked list of task_structs, with a kernel pointer current marking the executing process."
      },
      {
        term: "Saving register state on interrupts",
        kind: "insight",
        statement: "The program counter and CPU registers together capture a process’s exact position of execution. They must be **saved when an interrupt occurs** so that the process can be continued correctly afterward when it is rescheduled — this is exactly the snapshot the PCB stores.",
        detail: "This is why context switching (Section 3.2) is possible at all: because the complete CPU state of a suspended process lives in its PCB, the kernel can stop any process at (almost) any instant and later resume it as if nothing had happened."
      },
      {
        term: "Threads: a first look",
        kind: "insight",
        statement: "The process model so far assumes a process performs a **single thread of execution** — one program counter, one register set, one stack. A single-threaded word processor cannot simultaneously accept keystrokes and run the spell checker. Modern systems extend the process concept to allow **multiple threads of execution** per process, and the PCB is expanded to include information for each thread.",
        detail: "Chapter 4 develops threads in full: each thread gets its own program counter, registers and stack while sharing the process’s code, data, heap and open files."
      }
    ],
    figures: [
      {
        caption: "The five-state process model: as a process executes, it moves between new, ready, running, waiting, and terminated states under the control of the scheduler, interrupts, and I/O events.",
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-state process lifecycle diagram"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/></marker></defs><rect x="30" y="125" width="100" height="50" rx="25" fill="none" stroke="currentColor" stroke-width="2"/><text x="80" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">new</text><rect x="210" y="125" width="110" height="50" rx="25" fill="none" stroke="currentColor" stroke-width="2"/><text x="265" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">ready</text><rect x="420" y="125" width="110" height="50" rx="25" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="475" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">running</text><rect x="590" y="125" width="105" height="50" rx="25" fill="none" stroke="currentColor" stroke-width="2"/><text x="642" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">terminated</text><rect x="315" y="235" width="110" height="50" rx="25" fill="none" stroke="currentColor" stroke-width="2"/><text x="370" y="265" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">waiting</text><path d="M 130 150 L 202 150" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="166" y="142" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">admitted</text><path d="M 320 140 L 412 140" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="366" y="132" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">scheduler dispatch</text><path d="M 445 125 C 410 75, 330 75, 295 120" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="370" y="70" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">interrupt / preemption</text><path d="M 530 150 L 582 150" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="556" y="142" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">exit</text><path d="M 470 175 C 465 210, 435 235, 427 245" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="495" y="220" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">I/O or event wait</text><path d="M 315 250 C 275 240, 255 210, 260 183" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="245" y="230" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">I/O completion</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Placing variables in the memory layout",
        problem: "A C program declares int x; int y = 15; then in main() declares int *values; int i; and calls values = (int *)malloc(sizeof(int) * 5). Locate each item in the process’s memory layout, from the text section to the top.",
        steps: [
          { label: "Step 1: The code itself", text: "The compiled machine instructions of main() occupy the **text** section at the lowest addresses — fixed in size, read-only in practice." },
          { label: "Step 2: The initialized global", text: "$y = 15$ is an initialized global, so it lives in the **initialized data** section; the uninitialized global $x$ goes into the **uninitialized data (BSS)** section just above it." },
          { label: "Step 3: The dynamic allocation", text: "The five integers returned by malloc() live in the **heap**, which grows upward from the data sections as the program allocates." },
          { label: "Step 4: The locals and the call frame", text: "$values$, $i$, the saved return address and main()’s parameters occupy an **activation record on the stack**, near the top of memory, growing downward. The $argc$ and $argv$ values sit above the stack, at the highest addresses." },
          { label: "Step 5: Verify with the tools", text: "Compiling and running size on the executable prints text = 1158, data = 284, bss = 8 bytes — the fixed sections are measurable, while the stack and heap heights only exist at run time." }
        ],
        result: "text (code) → initialized data ($y$) → uninitialized data/BSS ($x$) → heap (malloc array, growing up) → stack (locals, call frames, growing down) → $argc$/$argv$ and environment at the top."
      },
      {
        title: "Tracing the states of one command",
        problem: "A shell runs grep, which reads a large file from disk, computes for a while, and exits. Trace the process through all five states and the transitions it takes, including one preemption.",
        steps: [
          { label: "Step 1: Creation", text: "The shell calls fork() and exec(): the new grep process is in the **new** state while being created, then is **admitted** and enters the **ready** state, joining the ready queue." },
          { label: "Step 2: First dispatch", text: "The CPU scheduler dispatches it: **ready → running**. It begins reading the file and immediately blocks on the disk: **running → waiting** (I/O wait)." },
          { label: "Step 3: I/O completes and preemption", text: "The disk interrupt fires and the process moves **waiting → ready**. It is dispatched again, and while computing, its time slice expires: **running → ready** (an interrupt, not a wait — it did not block)." },
          { label: "Step 4: Second dispatch and exit", text: "It runs again to completion and calls exit(): **running → terminated**. The kernel removes it from all queues and deallocates its PCB and resources." }
        ],
        result: "new → ready → running → waiting → ready → running → ready → running → terminated — every state visited, and both ways of leaving running (wait and preemption) exercised."
      }
    ],
    keyTakeaways: [
      "A program is passive (an executable file on disk); a process is the active, executing entity with a program counter and resources.",
      "Memory layout, low to high: text, initialized data, uninitialized data (BSS), heap (grows up), stack (grows down), arguments and environment.",
      "Stack = activation records (parameters, locals, return addresses); heap = dynamically allocated memory.",
      "Five states — new, ready, running, waiting, terminated — with running → ready (preemption) and waiting → ready (event completion) as the two commonly forgotten arrows.",
      "The PCB stores state, program counter, registers, scheduling info, memory-management info, accounting and I/O status — everything needed to restart the process.",
      "Each process has its own PCB (Linux: task_struct, one per process, linked into a doubly linked list)."
    ],
    quiz: [
      {
        q: "The essential difference between a program and a process is that:",
        options: [
          "a program is a passive entity (an executable file), while a process is a program in execution — an active entity",
          "a program runs in user mode, while a process runs in kernel mode",
          "a program is written in C, while a process is written in assembly",
          "a program is loaded in memory, while a process stays on disk"
        ],
        answer: 0,
        explanation: "A program is the passive set of instructions stored on disk; it becomes a process — an active entity with a program counter and associated resources — when it is loaded into memory and executed."
      },
      {
        q: "In the memory layout of a C program, the section that grows toward LOWER addresses and holds function parameters and local variables is the:",
        options: ["heap", "stack", "initialized data section", "text section"],
        answer: 1,
        explanation: "The stack sits near the top of memory and grows downward; each function call pushes an activation record holding parameters, local variables and the return address. The heap grows in the opposite direction (upward), and text and data have fixed sizes."
      },
      {
        q: "Which state transition is NOT possible in the five-state process model?",
        options: ["running → ready", "waiting → ready", "waiting → running", "ready → running"],
        answer: 2,
        explanation: "A waiting process must first re-enter the ready queue when its event completes; only the scheduler can then dispatch it. Waiting → running does not exist. Running → ready is the preemption arrow (interrupt or expired time slice)."
      },
      {
        q: "Which of the following is NOT typically stored in a process control block?",
        options: [
          "the program counter and CPU registers of the process",
          "memory-management information such as base and limit registers",
          "the program’s source code",
          "accounting information such as CPU and real time used"
        ],
        answer: 2,
        explanation: "The PCB holds execution state (PC, registers), scheduling, memory-management, accounting and I/O status data. The source code is never kept — the process runs from the compiled text section."
      },
      {
        q: "Two processes created from the same program (say, two copies of a mail client) typically:",
        options: [
          "share one PCB",
          "share the same text section but have separate data, heap and stack sections",
          "share the same stack but separate text sections",
          "cannot exist at the same time"
        ],
        answer: 1,
        explanation: "Each invocation is a separate process with its own PCB, program counter, data, heap and stack; only the (read-only) text — the program’s code — is equivalent between them."
      }
    ]
  },

  // ---------------------------------------------------------------- 3.2
  {
    sectionId: "osc-ch3-s2",
    readingTime: 9,
    intro: "Multiprogramming wants a process running at all times; time sharing wants every interactive process to feel alive. The process scheduler pursues both goals by moving processes among queues — one ready queue, many device queues — while long-, medium- and short-term schedulers decide who gets in, who stays in memory, and who gets the CPU next. Every handoff costs a context switch: pure overhead that no user code benefits from.",
    objectives: [
      "Distinguish the job queue, ready queue and device queues",
      "Follow a process through the queueing diagram and its possible branches",
      "Compare the long-term, short-term (CPU) and medium-term schedulers",
      "Explain what a context switch saves and restores, and why it is pure overhead"
    ],
    concepts: [
      {
        term: "Objectives of scheduling",
        kind: "insight",
        statement: "The objective of **multiprogramming** is to have some process running at all times, maximizing **CPU utilization**; the objective of **time sharing** is to switch the CPU among processes so frequently that users can interact with each program while it runs. The number of processes currently in memory is the **degree of multiprogramming**.",
        detail: "Processes divide into I/O-bound ones (more time doing I/O than computing) and CPU-bound ones (infrequent I/O, long computations). A scheduler that balances both kinds keeps every device and every core busy — long-term schedulers explicitly aim for a good process mix."
      },
      {
        term: "Scheduling queues",
        kind: "definition",
        statement: "Processes wait in three kinds of queues. The **job queue** consists of all processes in the system. The **ready queue** contains all processes residing in main memory that are ready and waiting to execute — it lives in the kernel as a linked list of PCBs, with a ready-queue header holding pointers to the first and last PCBs (head and tail), and each PCB holding a pointer to the next PCB in the queue. Each **device queue** holds the processes waiting for that particular I/O device.",
        detail: "A new process enters the ready queue; once running it may terminate, be interrupted, or wait — landing in a device (or event) queue before flowing back to ready. The queues link PCBs, not processes directly: queuing a process means linking its PCB."
      },
      {
        term: "The queueing diagram",
        kind: "method",
        statement: "The flow: a new process is placed in the **ready queue**; when dispatched it executes on the **CPU**; then one of four things happens — (1) it issues an **I/O request** and moves to an **I/O wait queue**, returning to ready when the I/O completes; (2) it **creates a child process** and waits in the wait queue for the child’s termination; (3) it is **interrupted or its time slice expires** and is put back in the ready queue; (4) it **terminates** and leaves the system, its PCB and resources deallocated.",
        detail: "Circles in the diagram represent the resources that serve the queues (the CPU, the devices); arrows show the flow of processes. Interrupt-wait queues are a third wait-queue family: a process waiting for an interrupt re-enters the ready queue when it arrives."
      },
      {
        term: "Long-term scheduler",
        kind: "definition",
        statement: "The **long-term scheduler** (job scheduler) selects processes from the **job pool** — the processes kept in mass-storage waiting to be brought into memory — and loads them into the ready queue. It **controls the degree of multiprogramming** (the number of processes in memory) and is invoked **infrequently**: seconds or minutes may separate its decisions, so it can afford to spend time choosing well.",
        detail: "It should select a good process mix of I/O-bound and CPU-bound processes: all I/O-bound work leaves the CPU idle; all CPU-bound work leaves devices idle and degrades interactive response."
      },
      {
        term: "Short-term (CPU) scheduler",
        kind: "definition",
        statement: "The **short-term scheduler**, or **CPU scheduler**, selects one of the processes in the ready queue and allocates a CPU core to it. It executes frequently — at least once every 100 milliseconds, and typically much more often — so its dispatch decisions must be **fast**: an I/O-bound process may execute for only a few milliseconds before waiting again.",
        detail: "The book’s rule of thumb: if the scheduler takes 1 ms to pick a process that runs for 10 ms, roughly 10% of the CPU is spent purely on scheduling — which is why short-term scheduling algorithms trade sophistication for speed (Chapter 5)."
      },
      {
        term: "Medium-term scheduler (swapper)",
        kind: "definition",
        statement: "The **medium-term scheduler** removes processes from memory to reduce the degree of multiprogramming; later the process can be reintroduced into memory and its execution continued where it left off. This scheme is called **swapping**: the process is **swapped out** to disk with its status saved, then **swapped in** back to memory where its status is restored.",
        detail: "Swapping is typically necessary only when memory has been overcommitted and must be freed up — the classic intermediary between the long-term and short-term schedulers (Chapters 9 and 10 develop the memory-management mechanics)."
      },
      {
        term: "Context switch",
        kind: "definition",
        statement: "Switching the CPU to another process requires a **state save** of the current process and a **state restore** of a different process: the kernel saves the context of the old process **in its PCB** (CPU registers, process state, memory-management information) and loads the saved context of the newly scheduled process. This **context switch** is triggered by an interrupt or a system call.",
        detail: "The context is exactly the PCB contents: register values plus the process state. When the dispatch cycle repeats, P0 is suspended with its state saved into PCB₀, P1 is reloaded from PCB₁ and runs — and the mirror image switches back."
      },
      {
        term: "The cost of a context switch",
        kind: "insight",
        statement: "Context-switch time is **pure overhead**: the system does no useful work while switching. Switching speed varies with memory speed, the number of registers that must be copied, and the existence of special hardware — a typical figure is a few microseconds, with complex systems taking up to milliseconds.",
        detail: "Hardware support helps: processors with multiple register sets switch by changing the pointer to the current register set, falling back to copying only when active processes outnumber register sets. Advanced memory management adds work too — the address space of the current process must be preserved while the next one is prepared (Chapter 10)."
      }
    ],
    examples: [
      {
        title: "One process, all the queues",
        problem: "An I/O-bound text editor autosaves a document, types a burst of characters, and is preempted by a timer interrupt. List every queue it visits in order, and identify which scheduler moved it each time.",
        steps: [
          { label: "Step 1: Entering the system", text: "The editor is created and **admitted** from the job pool into memory by the **long-term scheduler** — this is the only time the long-term scheduler touches it." },
          { label: "Step 2: Autosave I/O", text: "Dispatched from the **ready queue** by the **short-term scheduler**, it issues a write to disk and moves to the **device queue** for that disk. The disk interrupt later returns it to the ready queue." },
          { label: "Step 3: Preemption", text: "While processing keystrokes its time slice expires — an interrupt moves it **running → ready** with no device queue involved; its PCB is simply relinked at the ready queue’s tail." },
          { label: "Step 4: Memory pressure", text: "Suppose many other processes launch and memory grows scarce: the **medium-term scheduler (swapper)** swaps the editor out to disk to lower the degree of multiprogramming, and swaps it back in later, restoring its saved status." }
        ],
        result: "job pool → (long-term) → ready queue → CPU → disk device queue → ready queue → CPU → preempted to ready queue → swapped out and back in by the medium-term scheduler — all three schedulers appear in one lifetime."
      },
      {
        title: "Anatomy of a context switch",
        problem: "Process P₀ has been running when a timer interrupt arrives and the kernel decides to run P₁. Walk through the switch, and compute the overhead fraction if the switch costs 10 µs and P₁ will run for 1 ms.",
        steps: [
          { label: "Step 1: Save the outgoing context", text: "On the interrupt, the kernel saves P₀’s program counter, CPU registers and state **into PCB₀** — the CPU is now executing the kernel, and P₀ is idle in memory with its execution frozen at the interrupted instruction." },
          { label: "Step 2: Restore the incoming context", text: "The kernel loads P₁’s saved register values, program counter and state **from PCB₁** and jumps into P₁’s code — P₁ resumes exactly where it was last suspended." },
          { label: "Step 3: Note what the CPU did meanwhile", text: "During save and restore, the CPU executed only kernel bookkeeping — no user instruction of either process advanced. This is the definition of overhead." },
          { label: "Step 4: Price it", text: "Overhead fraction = $\\frac{10\\ \\mu s}{1000\\ \\mu s} = 1\\%$. Had the switch cost 1 ms, half the CPU would be lost to switching — the reason switch time must stay microscopic." }
        ],
        result: "save PCB₀ → reload PCB₁ → P₁ runs. The 10 µs switch against a 1 ms time slice costs about 1% of the CPU — small, but pure loss on every one of the thousands of switches per second."
      }
    ],
    keyTakeaways: [
      "Job queue = all processes; ready queue = in-memory processes waiting for a CPU (a linked list of PCBs with head and tail pointers); device queues = processes waiting on a specific device.",
      "A running process leaves the CPU four ways: I/O request, creating a child and waiting, preemption (interrupt or time slice), or termination.",
      "Long-term scheduler: selects from the job pool, controls the degree of multiprogramming, runs infrequently, wants a good I/O-bound/CPU-bound mix.",
      "Short-term (CPU) scheduler: selects from the ready queue, runs at least every 100 ms and typically far more often — must be fast.",
      "Medium-term scheduler: the swapper — removes and later reintroduces processes to adjust the degree of multiprogramming.",
      "A context switch = save the old process’s context into its PCB, restore the new one from its PCB — pure overhead, typically a few microseconds, sped up by extra hardware register sets."
    ],
    quiz: [
      {
        q: "The ready queue in most kernels is implemented as:",
        options: [
          "a linked list of PCBs with head and tail pointers in a queue header",
          "a sorted array of program counters",
          "one bitmap bit per process",
          "a copy of the job queue"
        ],
        answer: 0,
        explanation: "The ready queue lives in kernel space as a linked list of process control blocks; the header points to the first and last PCB, and each PCB links to the next — queuing a process is relinking its PCB."
      },
      {
        q: "Which scheduler directly controls the degree of multiprogramming and is invoked only infrequently?",
        options: ["the short-term CPU scheduler", "the long-term scheduler", "the interrupt handler", "the device driver"],
        answer: 1,
        explanation: "The long-term scheduler selects processes from the job pool into memory, so it alone decides how many processes are in memory (the degree of multiprogramming). Its decisions are separated by seconds or minutes, letting it choose carefully — including balancing I/O-bound against CPU-bound processes."
      },
      {
        q: "During a context switch between processes P0 and P1, the kernel:",
        options: [
          "runs user code of both processes simultaneously",
          "saves P0’s state into its PCB and loads P1’s saved state from its PCB",
          "copies P1’s heap into P0’s address space",
          "terminates P0 so P1 can run"
        ],
        answer: 1,
        explanation: "The switch is a state save of the outgoing process into its PCB followed by a state restore of the incoming process from its PCB. No useful user work happens during the switch — it is pure overhead."
      },
      {
        q: "A process whose time slice expires moves:",
        options: [
          "from running to waiting",
          "from running to ready",
          "from running to terminated",
          "from ready to waiting"
        ],
        answer: 1,
        explanation: "An expired time slice (or any interrupt) preempts the process back to the ready queue — it was not blocked, so it must stay eligible for immediate re-dispatch. Waiting is reserved for blocked processes awaiting an event."
      }
    ]
  },

  // ---------------------------------------------------------------- 3.3
  {
    sectionId: "osc-ch3-s3",
    readingTime: 12,
    intro: "Processes are born from other processes: every system boots a root ancestor — systemd on Linux, running as PID 1 — and grows a tree of children identified by unique pids. UNIX builds that tree with fork() and exec(), Windows with one heavyweight CreateProcess(), and Android ranks the resulting processes by importance so a memory-starved phone knows exactly what to kill first. This section follows a process from creation through termination, zombies included.",
    objectives: [
      "Describe process creation: pids, the parent–child tree, and the resource- and execution-sharing options",
      "Trace fork(), exec() and wait() — and explain why fork() returns twice",
      "Explain zombies, orphans and cascading termination",
      "Compare UNIX fork() with Windows CreateProcess()",
      "Describe Android’s process importance hierarchy and systemd’s role as PID 1"
    ],
    concepts: [
      {
        term: "Process creation and the process tree",
        kind: "definition",
        statement: "During execution a process may create new processes: the creating process is the **parent**, the new ones its **children**, and together they form a **tree of processes**. Each process is identified by a unique integer **process identifier (pid)**, usable as an index into kernel process tables. On Linux the **systemd** process — always pid 1 — is the root parent of all user processes, created first at boot; it spawns service processes such as logind and sshd.",
        detail: "ps -el lists all active processes on UNIX/Linux; pstree draws the whole tree. Recursively tracing parents from any process leads back to systemd."
      },
      {
        term: "Resource and execution options at creation",
        kind: "method",
        statement: "A child may obtain resources either **directly from the operating system** or **constrained to a subset of the parent’s resources** (which prevents any process from overloading the system by forking too many children). For execution there are two options: the parent **continues to execute concurrently** with its children, or it **waits** until some or all children terminate. For the address space there are also two: the child is a **duplicate of the parent**, or a **new program is loaded** into it.",
        detail: "The parent may also pass initialization data — e.g., the name of a file to display — and the restriction-to-subset design is what makes resource quotas enforceable."
      },
      {
        term: "fork()",
        kind: "method",
        statement: "The UNIX **fork()** system call creates a new process consisting of a **copy of the address space of the original** — both processes then continue execution at the instruction after fork(), with one difference: **fork() returns 0 in the child** and the **(nonzero) pid of the child in the parent**. The child inherits the parent’s privileges, scheduling attributes and open files.",
        detail: "Modern systems implement the copy lazily as copy-on-write (Chapter 10): parent and child initially share the same physical pages, and each is copied only when one of them writes — making fork() cheap even for huge address spaces."
      },
      {
        term: "exec() and wait()",
        kind: "method",
        statement: "After a fork(), a process typically calls **exec()** to replace its memory space with a new program: exec() loads a binary file into memory — destroying the memory image of the program containing the exec() call — and starts its execution, returning control **only if an error occurs**. The parent can issue **wait()** to move itself off the ready queue until a child terminates; wait() returns the terminated child’s pid and (via a pointer parameter) its exit status.",
        detail: "execlp(\"/bin/ls\", \"ls\", NULL) is one member of the exec() family. A child that skips exec() simply keeps running the parent’s code as an independent copy with its own data."
      },
      {
        term: "exit(), zombies and orphans",
        kind: "definition",
        statement: "A process terminates when it finishes and invokes **exit()** (possibly returning a status value to its waiting parent); all of its resources — memory, open files, I/O buffers — are deallocated. A terminated process whose parent has not yet called wait() is a **zombie**: its entry must remain in the process table because it holds the exit status. If the parent terminates first, the children are **orphans**, traditionally adopted by init/systemd, which periodically calls wait() to collect their statuses.",
        detail: "All processes pass briefly through the zombie state. A parent can also terminate a child via a system call (TerminateProcess() on Windows) — usually allowed only for one’s own children — and some systems apply cascading termination: when a process terminates, all of its children are terminated with it."
      },
      {
        term: "Cascading termination",
        kind: "definition",
        statement: "Some systems do not allow a child to exist if its parent has terminated. In such systems, if a process terminates — normally or abnormally — all of its children must also be terminated, a phenomenon called **cascading termination**, normally initiated by the operating system and propagating from parent down through all descendants.",
        detail: "UNIX/Linux do not cascade automatically: orphaned children are re-parented to init/systemd instead, and left running."
      },
      {
        term: "Windows process creation",
        kind: "method",
        statement: "Windows processes are created with **CreateProcess()**: unlike fork(), which duplicates the caller’s address space, CreateProcess() **loads a specified program into the child at creation time**. Whereas fork() takes no parameters, CreateProcess() expects **no fewer than ten** — including STARTUPINFO (window properties, standard I/O handles) and PROCESS_INFORMATION (handles and identifiers of the new process and its thread) structures. The parent waits via **WaitForSingleObject(pi.hProcess, INFINITE)**.",
        detail: "Example: CreateProcess(NULL, \"...mspaint.exe\", ...) launches Paint as a child, and the parent’s WaitForSingleObject() returns when the child exits — the Windows counterpart of wait()."
      },
      {
        term: "Android process importance hierarchy",
        kind: "definition",
        statement: "Because mobile memory is limited, Android may terminate processes to reclaim resources, choosing victims **in order of increasing importance**. From most to least important: **foreground** (the process on screen, currently interacted with), **visible** (not foreground but performing an activity the foreground refers to), **service** (background work apparent to the user, like streaming music), **background** (activity not apparent to the user), **empty** (holds no active components). Android assigns each process the highest ranking it qualifies for and reclaims empty processes first.",
        detail: "Following the process life-cycle guidelines, Android saves a process’s state before termination and resumes from the saved state if the user navigates back — so a killed background app reappears where you left it."
      },
      {
        term: "systemd, Mach and Android IPC groundwork",
        kind: "insight",
        statement: "Linux replaced System V **init** with **systemd** as PID 1 — a more flexible root process that starts services described as **units** (services, sockets, targets) and tracks them in **cgroups** (control groups). **Mach** (the kernel beneath macOS/iOS) performs all inter-task communication by messages sent to **ports**. Android exposes cross-process RPC through its **binder** framework and the **AIDL** interface language (Section 3.5).",
        detail: "Mach ports are finite, unidirectional mailboxes with one receiver but possibly many senders; port rights (like MACH_PORT_RIGHT_RECEIVE) control who may send or receive — an object-oriented, capability-style design."
      }
    ],
    examples: [
      {
        title: "fork() returns twice",
        problem: "A program forks a child and each branch prints one line. Trace the two return values and the output, assuming the parent’s pid is 8415 and the child receives pid 8416.",
        steps: [
          { label: "Step 1: The call", text: "The parent (pid 8415) executes pid = fork(). The kernel creates a child as a copy of the parent’s address space; both are now runnable at the instruction immediately after the call." },
          { label: "Step 2: The parent’s view", text: "In the parent, fork() returns the child’s pid — the value 8416 — so the branch (pid == 0) is false and the parent executes its else-path: wait(NULL), then printing its message." },
          { label: "Step 3: The child’s view", text: "In the child, fork() returns 0, so the branch (pid == 0) is true and the child executes the child-path code — the very same statement, experienced with a different return value." },
          { label: "Step 4: What the user sees", text: "Two lines of output appear (one from each process, in either order — the scheduler decides): the child’s line first is just as likely as the parent’s. No line prints twice." }
        ],
        result: "One fork(), two return values: 0 in the child (pid 8416) and 8416 in the parent (pid 8415) — the call site executes once per process, which is how the same if/else separates parent from child behavior."
      },
      {
        title: "How a shell runs a command: fork, exec, wait",
        problem: "The book’s Figure 3.8 program forks, the child runs execlp(\"/bin/ls\", \"ls\", NULL), and the parent runs wait(NULL) followed by printf(\"Child Complete\"). Trace the system-call sequence.",
        steps: [
          { label: "Step 1: fork()", text: "The shell/parent calls fork(); the child gets a copy of the address space and both continue after the fork. The parent’s copy of pid is the child’s pid; the child’s copy is 0." },
          { label: "Step 2: exec() in the child", text: "The child takes the (pid == 0) branch and calls execlp(): the ls binary is loaded into the child’s memory, destroying the old image — text, data, heap and stack are replaced. Execution never returns to the C code after execlp() (unless loading fails)." },
          { label: "Step 3: The parent waits", text: "The parent calls wait(NULL), blocking itself off the ready queue until the child terminates; meanwhile the child (now ls) lists the directory." },
          { label: "Step 4: Exit and reap", text: "ls finishes and invokes exit(); the kernel wakes the parent, whose wait() returns the child’s pid and exit status. The parent prints Child Complete and proceeds to its own exit()." }
        ],
        result: "fork() → child: exec() → child: exit(); in parallel parent: wait() → prints Child Complete. Every shell command you type follows this exact dance — fork, then the child becomes the command while the shell waits."
      },
      {
        title: "Reading a Linux process tree",
        problem: "Figure 3.7 of the book shows systemd (pid 1) with children logind (8415), python (2808) and sshd (3028); logind’s child bash (8416) has children ps (9298) and vim (9204). Describe how this tree forms at boot and during a login session.",
        steps: [
          { label: "Step 1: Boot", text: "The kernel starts systemd as the first user process (pid 1). systemd creates daemons that provide additional services — here logind for local logins and sshd for remote ones (plus python for a running service)." },
          { label: "Step 2: Login", text: "A user logs in at the console: logind creates the bash shell (pid 8416) for the session." },
          { label: "Step 3: Working", text: "From bash the user runs ps (9298) and opens vim (9204) — each a child of bash, created by fork() (plus exec() to load the actual program)." },
          { label: "Step 4: Inspecting", text: "ps -el lists every process with its pid and parent; recursively following parents from vim leads bash → logind → systemd — the pstree command draws exactly this tree." }
        ],
        result: "One root (systemd, pid 1), service daemons in the middle, interactive tools at the leaves — every process on a Linux system has a place in this single genealogy."
      }
    ],
    keyTakeaways: [
      "Every process has a unique integer pid; on Linux, systemd (pid 1) is the root of the process tree — ps -el lists processes, pstree draws the tree.",
      "At creation a child gets resources from the OS or a subset of the parent’s; the parent either runs concurrently with children or waits for them; the child is either a duplicate of the parent or loads a new program.",
      "fork() returns twice: 0 in the child, the child’s pid in the parent; the child is a copy of the address space (made cheap by copy-on-write).",
      "exec() replaces text and data with a new program and never returns on success; wait() blocks the parent and collects a child’s pid and exit status.",
      "A terminated-but-unwaited child is a zombie; orphans are adopted by init/systemd; some systems cascade-terminate whole subtrees.",
      "Windows CreateProcess() loads the new program at creation and takes ten-plus parameters (STARTUPINFO, PROCESS_INFORMATION); WaitForSingleObject() replaces wait().",
      "Android kills processes in order of increasing importance: empty, then background, service, visible, foreground last."
    ],
    quiz: [
      {
        q: "Immediately after a successful fork() system call:",
        options: [
          "the child returns 0 from fork(), while the parent receives the child’s pid",
          "the parent returns 0, and the child receives the parent’s pid",
          "both processes receive the child’s pid",
          "the child begins executing a new program"
        ],
        answer: 0,
        explanation: "fork() duplicates the address space and both processes continue at the instruction after the call — but the return value differs: 0 in the new (child) process, the child’s nonzero pid in the parent. Loading a new program is exec()’s job, not fork()’s."
      },
      {
        q: "A zombie process is one that:",
        options: [
          "has terminated but whose parent has not yet called wait()",
          "is stuck in an infinite loop",
          "has been swapped out to disk",
          "is waiting for I/O to complete"
        ],
        answer: 0,
        explanation: "On termination the OS reclaims the process’s memory and files, but its process-table entry must survive until the parent calls wait() to collect the exit status — that lingering entry is the zombie. Waiting-for-I/O is the ordinary waiting state, not a zombie."
      },
      {
        q: "Which statement about Windows CreateProcess() is correct?",
        options: [
          "it takes no parameters, like fork()",
          "it loads a specified program into the child’s address space at creation time and expects no fewer than ten parameters",
          "it duplicates the parent’s address space, like fork()",
          "it creates a thread pool for the child"
        ],
        answer: 1,
        explanation: "Unlike fork()’s duplicate-then-exec pattern, CreateProcess() loads the target program immediately and is configured through ten-plus parameters, including the STARTUPINFO and PROCESS_INFORMATION structures."
      },
      {
        q: "Under memory pressure, Android reclaims processes in which order (first killed to last killed)?",
        options: [
          "foreground, visible, service, background, empty",
          "empty, background, service, visible, foreground",
          "background, empty, service, foreground, visible",
          "all processes are killed simultaneously"
        ],
        answer: 1,
        explanation: "Android ranks processes by importance — foreground (on screen) most important down to empty (no active components) least — and terminates them in increasing order of importance, reclaiming empty and background processes first and touching the foreground process only as a last resort."
      },
      {
        q: "On a Linux system, the root of the user-process tree is:",
        options: ["the bash shell", "logind", "systemd, running as pid 1", "the ps command"],
        answer: 2,
        explanation: "systemd — the successor to System V init — is created first at boot with pid 1 and is the ancestor of all user processes, spawning service processes such as logind and sshd; interactive shells appear deeper in the tree."
      }
    ,
      // PYQ-pattern: GATE 2016 — fork return values (rephrased)
      {
        q: "A process with PID $8415$ calls `fork()` and the child receives PID $8416$. What does each process observe as the return value, and where does each continue?",
        options: ["Parent observes $8416$ and child observes $0$, both continue after the call", "Parent observes $0$ and child observes $8416$", "Both observe $8416$", "Child starts a new program immediately"],
        answer: 0,
        explanation: "**Step 1 — Given data:** parent $8415$, child $8416$, address space copied (cheap via copy-on-write).\n**Step 2 — Rule:** `fork()` returns twice: $0$ in the child, the child PID in the parent; both resume at the instruction after the call.\n**Step 3 — Apply:** parent sees $8416$ and takes the parent branch (often `wait()`); child sees $0$ and takes the child branch (often `exec()`).\n**Step 4 — Cross-check:** privileges, scheduling attributes and open files are inherited; only the return value differs.\n**Step 5 — Distractors:** swapped values invert parent and child; identical values cannot separate the branches; a new program needs `exec()`, not `fork()`.\n**Step 6 — Conclude:** $8416$ in the parent, $0$ in the child."
      },
      // PYQ-pattern: ISRO 2019 — zombie versus orphan (rephrased)
      {
        q: "A child terminates with status $3$ but the parent has not yet called `wait()`. What is the child’s state, and what must the parent do? If instead the parent terminates first, what happens to a still-running child?",
        options: ["Child is running; parent must call `exec()`", "Child is a zombie holding its status until the parent calls `wait()`; a child whose parent dies first is an orphan adopted by the root ancestor", "Child is swapped out; parent must reboot", "Child vanishes immediately with no record"],
        answer: 1,
        explanation: "**Step 1 — Given data:** termination done, status $3$ produced, `wait()` not yet issued.\n**Step 2 — Rule:** `exit()` frees memory and files but the table entry persists until `wait()` collects the status — that lingering entry is a zombie. A child outliving its parent is an orphan, re-parented to the PID $1$ ancestor which periodically reaps.\n**Step 3 — Apply:** child here is a zombie; parent’s `wait()` returns the PID plus status pointer. In the reversed case the child keeps running under its new parent.\n**Step 4 — Cross-check:** every process passes briefly through the zombie state; cascading termination (killing children with the parent) is a different, opt-in policy.\n**Step 5 — Distractors:** running contradicts termination; swap concerns memory pressure, not status collection; immediate vanish would lose the status.\n**Step 6 — Conclude:** zombie until `wait()`; orphan if the parent goes first."
      }
    ]
  },

  // ---------------------------------------------------------------- 3.4
  {
    sectionId: "osc-ch3-s4",
    readingTime: 10,
    intro: "Cooperating processes need to talk. The shared-memory model lets them exchange data by reading and writing a common region of memory — after agreeing to suspend the OS’s usual no-touching rule between address spaces. Its canonical exercise is the producer–consumer problem, solved with a circular ring buffer whose emptiness and fullness are two elegant modulo conditions.",
    objectives: [
      "Distinguish independent from cooperating processes and give the three reasons for cooperation",
      "Compare the shared-memory and message-passing IPC models",
      "State the ring buffer’s empty and full conditions and explain why capacity is n − 1 items",
      "Trace the producer and consumer pseudocode line by line",
      "Use the POSIX shared-memory API: shm_open(), ftruncate(), mmap()"
    ],
    concepts: [
      {
        term: "Independent versus cooperating processes",
        kind: "definition",
        statement: "A process is **independent** if it does not share data with any other process executing in the system; it is **cooperating** if it can affect, or be affected by, other processes — that is, if it shares data with them. Three reasons motivate cooperation: **information sharing** (several applications interested in the same information, such as copy-and-paste), **computation speedup** (subtasks run in parallel — achievable only with multiple processing cores), and **modularity** (system functions divided among separate processes or threads).",
        detail: "Cooperating processes require an interprocess-communication (IPC) mechanism that lets them exchange data — which is where shared memory and message passing begin."
      },
      {
        term: "Two models of IPC",
        kind: "insight",
        statement: "IPC comes in two fundamental models. In the **shared-memory model**, a region of memory shared by the cooperating processes is established, and processes exchange information by reading and writing it. In the **message-passing model**, processes exchange messages through the kernel.",
        detail: "The trade: message passing is easier in distributed systems and needs no conflict avoidance for small data, but it is typically implemented with system calls, requiring more time-consuming kernel intervention. Shared memory can be faster — system calls are needed only to establish the region; afterwards all accesses are ordinary memory accesses with no kernel involvement."
      },
      {
        term: "The shared-memory model",
        kind: "definition",
        statement: "A shared-memory region typically resides in the address space of the process creating the shared-memory segment; other processes **attach** it to their own address space. Normally the operating system prevents one process from accessing another’s memory — shared memory requires the participating processes to **agree to remove that restriction**, after which the form and location of the data are determined by the processes themselves, not by the OS.",
        detail: "Crucially, the processes are also responsible for ensuring they never write to the same location simultaneously — synchronization is the programmers’ burden, addressed with semaphores and monitors in Chapters 6 and 7."
      },
      {
        term: "The producer–consumer problem",
        kind: "definition",
        statement: "A **producer** process produces information that a **consumer** process consumes: a compiler producing assembly code consumed by an assembler, an assembler producing object modules consumed by a loader — or a web server producing content consumed by a browser. To run concurrently, they share a **buffer** that the producer fills and the consumer empties; they must be **synchronized** so that the consumer never consumes an item that has not yet been produced.",
        detail: "Two buffer flavors: an unbounded buffer places no practical limit on size (the consumer may wait, the producer never does), while a bounded buffer has a fixed size — the consumer waits when the buffer is empty and the producer waits when it is full."
      },
      {
        term: "The ring buffer and its two conditions",
        kind: "method",
        statement: "The bounded buffer is a circular array of size $n$ with two logical pointers: $in$ points to the **next free position** and $out$ to the **first full position**. The buffer is **empty** when $in = out$ and **full** when $in + 1 \\equiv out \\pmod{n}$ — so the scheme holds **at most $n - 1$ items** at once. An item is deposited at $buffer[in]$ and removed from $buffer[out]$, with each pointer advanced by $in \\leftarrow (in + 1) \\bmod n$ and $out \\leftarrow (out + 1) \\bmod n$.",
        detail: "Why n − 1 and not n: with all n slots full, in would equal out — indistinguishable from empty. Sacrificing one slot makes the two conditions distinct. The book leaves a full-capacity solution (with an explicit counter) as an exercise."
      },
      {
        term: "Producer and consumer pseudocode",
        kind: "method",
        statement: "The **producer** loops forever: produce an item in next produced; **busy-wait** while the buffer is full — $while((in + 1) \\bmod n = out)$; then store with $buffer[in] \\leftarrow next\\ produced$ and advance $in \\leftarrow (in + 1) \\bmod n$. The **consumer** mirrors it: busy-wait while empty — $while(in = out)$; then $next\\ consumed \\leftarrow buffer[out]$ and advance $out \\leftarrow (out + 1) \\bmod n$.",
        detail: "Each variable next produced / next consumed is local to its process; buffer, in and out live in shared memory. The busy-waiting (spin) loops are the price of this chapter’s simplicity — Chapter 6 replaces them with blocking semaphores."
      },
      {
        term: "POSIX shared-memory API",
        kind: "method",
        statement: "POSIX shared memory is organized with **memory-mapped files**: create a shared-memory object with $fd = \\text{shm\\_open}(name, O\\_CREAT \\mid O\\_RDWR, 0666)$; set its size in bytes with $\\text{ftruncate}(fd, 4096)$; then establish the memory mapping with **mmap()**, which returns a pointer used to access the object — passing **MAP_SHARED** makes writes visible to all sharing processes. The consumer opens the object by the same name (read-only) and calls **shm_unlink(name)** to remove it when finished.",
        detail: "In the book’s example the producer names the object \"OS\", writes the strings Hello and World! through the returned pointer (advancing it by the bytes written), and the consumer printf’s the memory then unlinks. On Windows, shared memory is a section object created with CreateFileMapping() and mapped with MapViewOfFile()."
      }
    ],
    examples: [
      {
        title: "The modulo arithmetic of the ring buffer",
        problem: "A ring buffer has size n = 5, starting empty (in = out = 0). The producer deposits four items without any consumption. Show the pointer positions, verify the full condition, and explain why the fifth item must wait.",
        steps: [
          { label: "Step 1: Deposit the first item", text: "Item A is stored at $buffer[0]$; then $in \\leftarrow (0 + 1) \\bmod 5 = 1$. Occupancy: positions $[0, in) = [0, 1)$ — one item, $out = 0$." },
          { label: "Step 2: Fill three more", text: "Items B, C, D land at positions 1, 2, 3; after D, $in = 4$. The region $[out, in) = [0, 4)$ holds four items — the maximum for $n = 5$." },
          { label: "Step 3: Test the full condition", text: "Check $in + 1 \\equiv out \\pmod 5$: $(4 + 1) \\bmod 5 = 0 = out$ — true, so the producer’s while-loop spins and no fifth item is written." },
          { label: "Step 4: Why the sacrifice", text: "If a fifth item were allowed, after writing at position 4 we would advance $in \\leftarrow (4 + 1) \\bmod 5 = 0$, making $in = out$ — the very signature of an empty buffer. Keeping one slot vacant keeps empty ($in = out$) and full ($in + 1 \\equiv out \\pmod{n}$) mutually exclusive tests." },
          { label: "Step 5: Freeing space", text: "The consumer now removes D: $out \\leftarrow (3 + 1) \\bmod 5 = 4$. Now $(in + 1) \\bmod 5 = 0 \\ne 4 = out$ — the buffer is no longer full and the producer may write one item at position 4." }
        ],
        result: "With n = 5 the buffer cycles between empty (in = out) and full (in + 1 ≡ out mod n = 5), holding at most 4 items — the one-slot sacrifice that disambiguates the two conditions."
      },
      {
        title: "Walking the producer and consumer code",
        problem: "Run the producer and consumer pseudocode on a buffer of size 4. The producer creates items P1, P2; the consumer then consumes one item; the producer adds P3. Trace in, out and the buffer contents after each step.",
        steps: [
          { label: "Step 1: Producer makes P1", text: "Full test: $(0 + 1) \\bmod 4 = 1 \\ne 0 = out$ — not full, so the write proceeds: $buffer[0] = P1$, then $in \\leftarrow 1$. State: in = 1, out = 0, contents [P1]." },
          { label: "Step 2: Producer makes P2", text: "Full test passes again ($2 \\bmod 4 \\ne 0$): $buffer[1] = P2$, $in \\leftarrow 2$. State: in = 2, out = 0, contents [P1, P2]." },
          { label: "Step 3: Consumer takes one", text: "Empty test: $in = 2 \\ne 0 = out$ — not empty, so the read proceeds: $next\\ consumed = buffer[0] = P1$, then $out \\leftarrow 1$. State: in = 2, out = 1, contents [P2]." },
          { label: "Step 4: Producer makes P3", text: "Full test: $(2 + 1) \\bmod 4 = 3 \\ne 1 = out$ — write $buffer[2] = P3$, $in \\leftarrow 3$. State: in = 3, out = 1, contents [P2, P3] — the array keeps wrapping via the modulo, never running off either end." }
        ],
        result: "in and out chase each other around the circle: (1, 0) → (2, 0) → (2, 1) → (3, 1), with every safety check done by the two modulo conditions before any access."
      },
      {
        title: "POSIX shared memory: a 4,096-byte hello",
        problem: "Trace the book’s POSIX producer–consumer pair: which calls run, in what order, and what does each accomplish?",
        steps: [
          { label: "Step 1: Producer creates the object", text: "$\\text{shm\\_open}()$ — invoked with the name OS, the flags $O\\_CREAT \\mid O\\_RDWR$ and the mode 0666 — creates (or opens) a shared-memory object named OS, returning a file descriptor; the flags request creation if absent and read/write access, with 0666 setting permissions." },
          { label: "Step 2: Size it", text: "ftruncate(fd, 4096) sets the object’s size to 4,096 bytes — a fresh shared-memory object has length zero, so nothing could be mapped otherwise." },
          { label: "Step 3: Map it into the address space", text: "mmap(0, SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0) returns ptr; because MAP_SHARED is set, everything written through ptr is visible to every process sharing the object." },
          { label: "Step 4: Write, read, remove", text: "The producer sprintf’s Hello and World! through the pointer, advancing it past each string’s bytes. The consumer — which shm_open’ed the same name OS — maps the object, printf’s its contents, and finishes with shm_unlink(name) to remove the segment." }
        ],
        result: "shm_open → ftruncate → mmap → ordinary memory writes and reads (no further kernel involvement) → shm_unlink: the whole life cycle of a POSIX shared-memory segment."
      }
    ],
    keyTakeaways: [
      "Cooperating processes share data for information sharing, computation speedup (real only on multiple cores) and modularity; independent ones do not.",
      "Shared memory needs kernel help only to establish the region — then plain loads and stores — while message passing pays a system call per exchange but works across machines.",
      "The ring buffer is empty when $in = out$ and full when $in + 1 \\equiv out \\pmod{n}$; capacity is $n - 1$ items because full and empty must remain distinguishable.",
      "Producer: spin while full, write at $buffer[in]$, advance $in \\leftarrow (in+1) \\bmod n$; consumer: spin while empty, read $buffer[out]$, advance $out$ likewise.",
      "POSIX recipe: shm_open(name, flags, mode) → ftruncate(fd, size) → mmap with MAP_SHARED → read/write → shm_unlink; Windows uses CreateFileMapping/MapViewOfFile section objects."
    ],
    quiz: [
      {
        q: "A circular buffer of size n = 8 is empty when in = out. It is full when:",
        options: [
          "(in + 1) mod 8 = out",
          "in = 7",
          "in + out = 8",
          "in = out + 7, without the modulo"
        ],
        answer: 0,
        explanation: "Fullness means one free slot remains between the write cursor and the read cursor, expressed modularly: (in + 1) mod n = out. Without the modulo the condition breaks the moment either pointer wraps around the circle."
      },
      {
        q: "The ring-buffer scheme of the text holds at most n − 1 items because:",
        options: [
          "one slot is used to store the item count",
          "if all n slots were full, in would equal out — indistinguishable from empty",
          "the producer needs a private buffer slot",
          "the kernel reserves one slot for bookkeeping"
        ],
        answer: 1,
        explanation: "With all n positions occupied, advancing in past the last write wraps it to out, making in = out — the same signature as an empty buffer. Vacating one slot keeps the empty and full predicates distinct (a counter variable would restore full capacity, as the book’s exercise asks)."
      },
      {
        q: "In the POSIX shared-memory API, the function that sets the size of a newly created shared-memory object is:",
        options: ["shm_open()", "ftruncate()", "mmap()", "shm_unlink()"],
        answer: 1,
        explanation: "shm_open() creates the object (initially of length zero), ftruncate(fd, size) sets its size in bytes, and mmap() maps it into the caller’s address space; shm_unlink() removes it afterwards."
      },
      {
        q: "Compared with message passing, shared memory is often faster because:",
        options: [
          "it copies every message twice for safety",
          "the kernel is involved only when the shared region is established — afterwards accesses are ordinary memory accesses",
          "it never requires synchronization",
          "it always resides on faster disk storage"
        ],
        answer: 1,
        explanation: "Message passing is typically built on system calls, so every exchange costs kernel intervention; shared memory pays that cost once, at setup. It still needs synchronization (Chapters 6–7) — speed does not remove the data-race responsibility."
      }
    ]
  },

  // ---------------------------------------------------------------- 3.5
  {
    sectionId: "osc-ch3-s5",
    readingTime: 12,
    intro: "Message passing trades shared memory’s raw speed for safety and reach: processes exchange data through send() and receive() primitives over explicitly designed links — direct or via mailboxes, blocking or not, with zero, bounded or unbounded buffering. The same design space powers pipes (the workhorse of the UNIX command line), sockets (the lingua franca of networks), and remote procedure calls that make a call on another machine look like a local function call.",
    objectives: [
      "Contrast direct and indirect (mailbox) communication, and their link properties",
      "Classify the blocking/nonblocking send and receive combinations, including the rendezvous",
      "Distinguish ordinary (anonymous) pipes from named pipes, and trace the POSIX pipe example",
      "Explain sockets as endpoints of communication, and RPC with stubs, marshalling and matchmakers",
      "Outline Android’s AIDL/binder RPC mechanism"
    ],
    concepts: [
      {
        term: "send() and receive()",
        kind: "definition",
        statement: "A message-passing facility provides at least two operations: **send(message)** and **receive(message)**. Messages may be fixed or variable in size: fixed-sized messages make the system-level implementation straightforward but programming harder; variable-sized messages are the reverse — a classic operating-system design trade-off.",
        detail: "If processes P and Q want to communicate, a communication link must exist between them; its logical implementation raises three orthogonal design questions: direct or indirect naming, synchronous or asynchronous operation, and automatic or explicit buffering."
      },
      {
        term: "Direct communication",
        kind: "definition",
        statement: "Under **direct communication**, each process must explicitly name the recipient or sender: $send(P, message)$ and $receive(Q, message)$. A link is established **automatically** between every pair of communicating processes, each link involves **exactly two processes**, and between each pair there is **exactly one link**. This symmetric scheme has an asymmetric variant where only the sender names the recipient: $receive(id, message)$ accepts from any process and reports which one in $id$.",
        detail: "The disadvantage is limited modularity: changing a process’s identifier means finding and updating every reference to it — hard-coding identifiers is exactly what indirection (next concept) avoids."
      },
      {
        term: "Indirect communication: mailboxes and ports",
        kind: "definition",
        statement: "With **indirect communication**, messages are sent to and received from **mailboxes** (also called **ports**): $send(A, message)$ and $receive(A, message)$. A link exists only if both processes **share a mailbox**; a link may be associated with **more than two processes**; and between each pair there may be **many different links**, one per shared mailbox. A mailbox owned by a process vanishes with it; one owned by the OS has an independent existence with create/send/receive/delete operations.",
        detail: "If P₁, P₂ and P₃ share mailbox A and P₁ sends while P₂ and P₃ both receive, the system must define who gets the message — allow only two processes per link, allow only one receive() at a time, or let the system pick arbitrarily (e.g., round-robin)."
      },
      {
        term: "Synchronization and buffering",
        kind: "method",
        statement: "**Blocking send**: the sender is blocked until the message is received by the receiving process or the mailbox. **Nonblocking send**: the sender sends and resumes immediately. **Blocking receive**: the receiver blocks until a message is available. **Nonblocking receive**: the receiver retrieves either a valid message or a null. When both send and receive are blocking, the meeting is a **rendezvous**. Independently, the temporary queue of messages is implemented with **zero capacity** (maximum length 0 — no message can wait, so the sender must block; no buffering), **bounded capacity** (finite length $n$ — the sender continues while space remains and blocks when the queue is full), or **unbounded capacity** (potentially infinite — the sender never blocks).",
        detail: "Blocking = synchronous, nonblocking = asynchronous — terminology that recurs across all of operating systems. With blocking send and receive, the producer–consumer problem becomes almost trivial: each side simply blocks until the other is ready. The zero-capacity case is called a message system with no buffering; the other two are systems with automatic buffering."
      },
      {
        term: "Pipes",
        kind: "definition",
        statement: "A **pipe** acts as a conduit between two processes — one of the earliest IPC mechanisms on UNIX. Four design questions: unidirectional or bidirectional? half duplex or full duplex? must the processes be related (parent–child)? same machine or across a network? **Ordinary (anonymous) pipes** are unidirectional, producer–consumer style conduits usable only between related processes, and they cease to exist when the processes finish. **Named pipes (FIFOs)** appear as typical files, can be used by unrelated processes, and persist until explicitly deleted.",
        detail: "UNIX FIFOs (created with mkfifo()) allow bidirectional communication but only half-duplex — two FIFOs are used for simultaneous two-way traffic — and only on one machine. Windows named pipes (CreateNamedPipe()) are richer: full-duplex, usable across machines, and byte- or message-oriented, where UNIX FIFOs are byte-oriented only."
      },
      {
        term: "The POSIX pipe() example",
        kind: "method",
        statement: "UNIX ordinary pipes are created with **pipe(int fd[])**: fd[0] is the **read end** and fd[1] the **write end**; a pipe is a special type of file, accessed with ordinary read() and write(). A parent creates the pipe, then fork()s — the child inherits the open pipe file descriptors, giving parent and child one shared conduit. Each side **closes its unused end** so the reader can detect end-of-file (read() returns 0) once the writer exits.",
        detail: "The book’s program writes Greetings: the parent closes fd[READ_END] and writes to fd[WRITE_END]; the child closes fd[WRITE_END], reads the message and prints it. Command-line pipes do the same: in ls | less, ls is the producer and less the consumer."
      },
      {
        term: "Sockets",
        kind: "definition",
        statement: "A **socket** is defined as an endpoint for communication: a pair of processes communicating over a network employs a pair of sockets, and **a socket is identified by an IP address concatenated with a port number**. A connection is thus a pair of sockets — e.g., (146.86.5.20:1625) on the client and (161.25.19.8:80) on the web server — with all ports below 1024 reserved as well-known ports (SSH 22, FTP 21, HTTP 80) and client ports assigned arbitrarily above 1024.",
        detail: "Servers listen on their port and accept() connections; the special address 127.0.0.1 (loopback) lets a client and server on the same host talk over TCP/IP. Sockets exchange only an unstructured stream of bytes — the application imposes structure — and higher layers build on them: Java’s Socket/DatagramSocket/MulticastSocket classes, and the WebSocket protocol (RFC 6455) that upgrades an HTTP connection to a persistent, full-duplex channel."
      },
      {
        term: "Remote procedure calls",
        kind: "method",
        statement: "The **RPC** paradigm abstracts the procedure call for use across the network: messages are addressed to an RPC daemon listening on a port, each containing the function identifier and its parameters. The client invokes a **stub** that **marshals** the parameters into a machine-independent form — commonly the **external data representation (XDR)**, which reconciles big-endian versus little-endian machines — and transmits them; a server-side stub unmarshals, invokes the procedure, and returns results the same way. Windows stubs are generated from Microsoft Interface Definition Language (MIDL).",
        detail: "Semantics: unlike local calls, RPCs can be duplicated by network errors, so systems offer at-most-once (timestamps detect repeats) and exactly-once (at-most-once plus client retransmission until an ACK). Port discovery uses fixed port numbers or a rendezvous (matchmaker) daemon: the client asks the matchmaker for the RPC’s port and receives it before the actual call."
      },
      {
        term: "Android RPC: AIDL and the binder",
        kind: "method",
        statement: "Android’s **binder** framework uses RPCs as IPC between processes on the same system. A **service** (an application component with no UI that runs in the background) implements an interface written in the **Android Interface Definition Language (AIDL)**; the development kit compiles the .aidl file into a Java interface plus a **stub**. When a client calls **bindService()**, the service’s **onBind()** returns the stub, and the client simply invokes the remote method — service.remoteMethod(3, 0.14) — while the binder marshals parameters, transfers them, invokes the implementation and returns results.",
        detail: "The book’s RemoteService.aidl declares boolean remoteMethod(int x, double y); internally AIDL also supplies a thread pool so a remote service can handle multiple concurrent requests, each on a separate pool thread."
      }
    ],
    examples: [
      {
        title: "A rendezvous, step by step",
        problem: "A producer and consumer communicate with blocking send() and blocking receive(). The producer is ready at time 1, the consumer only at time 4. Describe the timeline of blockings and messages.",
        steps: [
          { label: "Step 1: Producer sends first", text: "At time 1 the producer calls $send(message)$ — a blocking send with zero-capacity transfer, so it cannot resume until the message is received. The producer is suspended." },
          { label: "Step 2: Consumer arrives", text: "At time 4 the consumer calls the blocking $receive()$ — a message is now available, so the hand-off completes: the sender is unblocked and the consumer proceeds with the data. The two met exactly — a rendezvous." },
          { label: "Step 3: Roles reverse", text: "If the consumer next calls receive() before the producer produces again, the consumer blocks until the next send() — the same synchronization, mirrored." },
          { label: "Step 4: Why the problem gets easy", text: "With both primitives blocking, the producer–consumer solution is trivial: each side’s loop is just produce; send(next produced) versus receive(next consumed); consume — the blocking itself provides all the waiting the busy-waiting ring-buffer code had to spell out." }
        ],
        result: "Blocking send + blocking receive = rendezvous: whichever side arrives first waits for the other, and the synchronization of producer–consumer comes for free."
      },
      {
        title: "A pipe between parent and child",
        problem: "Trace the book’s program: a parent creates a pipe, forks, writes Greetings, and the child reads it. Which descriptors are open in which process, and why do both close one end?",
        steps: [
          { label: "Step 1: Create and fork", text: "pipe(fd) creates the conduit; after fork() both parent and child hold fd[0] (read end) and fd[1] (write end) — the pipe is inherited like any open file." },
          { label: "Step 2: Close the unused ends", text: "The parent closes fd[READ_END] (it only writes) and the child closes fd[WRITE_END] (it only reads). Now the pipe is a one-way channel: parent → child." },
          { label: "Step 3: Write and read", text: "The parent write(fd[WRITE_END], Greetings, 10) — the bytes travel through kernel pipe buffering; the child read(fd[READ_END], ...) collects them and prints read Greetings." },
          { label: "Step 4: End-of-file", text: "When the parent closes fd[WRITE_END] after writing, the child’s read() returns 0 — end-of-file — telling the child that no more data will ever arrive. Had the child kept the write end open, that signal would never come." }
        ],
        result: "pipe(fd) → fork() → each side closes its unused end → write(fd[1]) / read(fd[0]) → closing the write end signals EOF to the reader — the same mechanics behind ls | less."
      },
      {
        title: "Anatomy of one remote procedure call",
        problem: "A client on host X wants to invoke procedure X on a server. Neither side knows the server’s port number in advance, and the machines use opposite byte orders. Follow the four messages of the book’s RPC figure.",
        steps: [
          { label: "Step 1: Ask the matchmaker", text: "The client’s kernel sends a message to the rendezvous (matchmaker) daemon — which listens on a well-known fixed RPC port — requesting the port address of RPC X." },
          { label: "Step 2: Get the port", text: "The matchmaker looks up the answer and replies with port P; the client can now direct RPC calls to P until the process terminates or the server crashes." },
          { label: "Step 3: Marshal and call", text: "The client stub marshals the arguments into XDR — normalizing byte order so big-endian and little-endian machines interoperate — and sends the request to port P, where the server daemon receives it, unmarshals, and executes the procedure." },
          { label: "Step 4: Reply (and retries)", text: "The server marshals the output and replies to the client. If the reply is lost, the client re-sends until an ACK arrives; timestamps on each message let the server detect and ignore duplicates — the at-most-once discipline." }
        ],
        result: "Matchmaker lookup → marshalled request to port P → execution → marshalled reply, with XDR hiding byte order and timestamp/ACK machinery hiding an unreliable network."
      }
    ],
    keyTakeaways: [
      "Message passing = send()/receive() primitives; design axes: direct vs indirect naming, blocking vs nonblocking operation, buffering capacity.",
      "Direct communication names the peer (link automatic, exactly two processes, one link per pair); indirect uses mailboxes/ports (link requires a shared mailbox; more than two processes and multiple links possible).",
      "Blocking + blocking = rendezvous; buffering is zero capacity (sender always blocks), bounded (sender blocks only when full) or unbounded (sender never blocks).",
      "Ordinary pipes: unidirectional, parent–child only, die with their processes; named pipes (FIFOs) live in the file system, serve unrelated processes — UNIX half-duplex/byte-oriented, Windows full-duplex with byte or message modes.",
      "POSIX pipe(fd): fd[0] read end, fd[1] write end; both sides close their unused end so read() sees EOF when the writer exits.",
      "A socket = IP address + port; a connection is a pair of sockets; ports below 1024 are well-known (HTTP 80, SSH 22), client ports exceed 1024.",
      "RPC: client and server stubs marshal parameters via XDR, at-most-once semantics use timestamps plus ACKs, and ports are found via fixed assignment or a matchmaker daemon; Android’s AIDL/binder brings the same pattern on-device."
    ],
    quiz: [
      {
        q: "When both the send() and the receive() operations are blocking, the configuration is called:",
        options: ["a rendezvous", "a datagram", "double buffering", "an upcall"],
        answer: 0,
        explanation: "Blocking send plus blocking receive forces sender and receiver to meet exactly: whichever arrives first waits for the other — the rendezvous. It also makes the producer–consumer problem nearly trivial."
      },
      {
        q: "Which property belongs to indirect (mailbox-based) communication but NOT to direct communication?",
        options: [
          "a link may be associated with more than two processes",
          "processes exchange messages",
          "send and receive primitives exist",
          "communication requires a link"
        ],
        answer: 0,
        explanation: "Direct communication fixes each link to exactly two processes with exactly one link per pair. Mailboxes break that ceiling: any number of processes sharing a mailbox are linked through it, and a pair can even share several mailboxes."
      },
      {
        q: "In the POSIX pipe(fd) API after a fork():",
        options: [
          "fd[0] is the write end and fd[1] the read end",
          "fd[0] is the read end and fd[1] the write end, and both processes hold descriptors for both ends",
          "only the parent keeps any descriptors",
          "the pipe must be recreated in the child"
        ],
        answer: 1,
        explanation: "fd[0] reads, fd[1] writes, and the child inherits the pipe like any open file — so both processes initially see both ends, and each then closes its unused end (closing the write end is what later signals EOF to the reader)."
      },
      {
        q: "Parameter marshalling in RPC systems, using an external data representation such as XDR, exists primarily to:",
        options: [
          "compress the parameters for faster networks",
          "resolve differences in data representation — such as big-endian versus little-endian — between client and server machines",
          "encrypt the message contents",
          "priority-rank concurrent procedure calls"
        ],
        answer: 1,
        explanation: "A 32-bit integer can store its most- or least-significant byte first depending on the architecture; marshalling converts machine-dependent parameters into a common, machine-independent form before transmission, and the server-side stub unmarshals back."
      },
      {
        q: "An ordinary (anonymous) pipe differs from a named pipe (FIFO) in that the ordinary pipe:",
        options: [
          "requires a parent–child relationship and ceases to exist when the communicating processes finish",
          "can be used by unrelated processes",
          "persists in the file system after both processes exit",
          "supports full-duplex communication on UNIX systems"
        ],
        answer: 0,
        explanation: "Ordinary pipes are unidirectional conduits between related processes and vanish when those processes terminate. Named pipes appear as files, outlive their users, and serve unrelated processes — with UNIX FIFOs remaining half-duplex, byte-oriented, and single-machine."
      }
    ]
  }
]
