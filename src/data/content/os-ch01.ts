import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 1: Introduction (Sections 1.1 – 1.5)
// Master study content.
// ============================================================================

export const osCh1Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: "osc-ch1-s1",
    depth: [
      {
        tier: "masters",
        title: "The kernel boundary as a contract",
        blocks: [
          {
            kind: "para",
            body: "The two system views deserve to be stated precisely enough to reason about. As a **resource manager**, the kernel is a function from competing requests to a schedule of grants: it multiplexes each physical resource either in **time** — the CPU among processes — or in **space** — memory pages, disk blocks, and device access — subject to fairness and efficiency constraints. As an **extended machine**, the kernel implements a family of virtual machines: files instead of disk blocks, address spaces instead of raw DRAM, sockets instead of packet buffers, each with semantics deliberately cleaner than the hardware beneath. The views are duals rather than rivals. Every abstraction the extended machine sells is paid for by an allocation the manager performs, and every allocation policy is observable only through the abstractions it serves. A well-designed kernel keeps the correspondence tight — the abstraction hides the arbitration, and the arbitration is what makes the abstraction implementable.",
          },
          {
            kind: "para",
            body: "Treat the **system-call interface** as a legal document and the whole boundary becomes analyzable. It is an **application binary interface**: a fixed table of entry points — `read`, `write`, `fork`, `mmap` — with binary-stable calling conventions, argument encodings, error numbers and specified semantics; POSIX is its canonical written form. Everything beneath the boundary may change freely — kernel version, scheduler, file-system implementation, hardware — so long as the contract holds; Linux's famous rule that an upgrade must never break user space is exactly this discipline. The boundary is simultaneously a **protection domain**: the kernel's address space and privileged mode form a domain in which all code is necessarily trusted, while each process's user-mode address space is a domain in which code is presumed hostile. The narrowness of the interface is the point. A few hundred entry points can be specified, audited and even formalized; the billions of instructions behind them cannot.",
          },
          {
            kind: "para",
            body: "The book defines a process as a program in execution; the graduate definition unpacks into four components. A **process** is, first, an **address space** — the set of virtual addresses the program may reference, together with the mapping that gives them meaning. Second, one or more **threads of control**, each an execution context: a saved program counter, a register set, and a stack. Third, a set of **resources** acquired from the kernel — open file descriptors, sockets, memory mappings. Fourth, **credentials** — user and group identity that gate every future request to the manager. The decomposition matters because the parts evolve independently: the address space, resources and credentials belong to the process, while the thread is the unit the scheduler dispatches; systems that allow many threads per process simply share the first, third and fourth components among several instances of the second. Notice also what the definition accomplishes for the kernel itself — the process is the abstraction through which the resource manager sees all of its customers.",
          },
          {
            kind: "example",
            heading: "Trap-and-emulate in one paragraph",
            body: "A hypervisor turns the extended-machine idea on the machine itself. A virtual machine monitor (VMM) boots a guest kernel in **user mode**, letting it believe it owns privilege the monitor has kept for itself. The guest runs, sets up its page tables, and executes a privileged instruction to install the page-table base register. The hardware refuses — the instruction is privileged at the guest's actual privilege level — and the CPU traps into the trap vector the VMM registered at boot. The monitor inspects the trapped instruction, updates its shadow copy of the guest's page tables to produce the mapping the guest intended, emulates the effect the guest expected to see, and resumes the guest at the following instruction. The guest kernel never learns that it is a tenant: every touch of the hardware it believes it owns is intercepted and re-implemented by the layer beneath. Virtualization is thus the extended-machine principle applied recursively — one level lower than the textbook draws it.",
          },
          {
            kind: "remark",
            body: "The chapter's deepest engineering rule is the separation of **mechanism** from **policy**. A mechanism answers *how*: the timer that preempts a process, the page-table hardware that translates an address, the signal mechanism that delivers an event. A policy answers *which* and *when*: which process runs next, which page is evicted, which events matter to whom. The kernel should supply mechanisms powerful enough to enforce any reasonable policy while keeping the policy itself replaceable — one timer mechanism supports batch, interactive, and real-time behavior by changing only the decision procedure above it. Conflating the two hardens today's choice into tomorrow's bottleneck, and the architecture of pluggable schedulers, mountable file systems, and loadable modules is this single separation, applied repeatedly.",
          },
        ],
      },
      {
        tier: "phd",
        title: "When the definition itself dissolves",
        blocks: [
          {
            kind: "para",
            body: "This section admits that no completely adequate definition of an operating system exists — and research has spent three decades stress-testing that admission. Under virtualization, the **resource allocator** role migrates upward: the hypervisor decides which guest receives which cores, memory, and devices, while each guest kernel merely allocates what the hypervisor granted it. The operating system becomes firmware for a virtual machine, and cloud platforms complete the demotion by treating operating systems as disposable appliance images, booted by the thousand and discarded on release. Meanwhile the **extended machine** role leaks sideways: a browser or a JVM supplies files, threads, synchronization and networking so completely that applications target it rather than the OS beneath it. The kernel remains the always-running core of its own machine — but both of its classical job descriptions now have competitors on other layers, which is why the 1998 Microsoft boundary dispute keeps recurring with new defendants.",
          },
          {
            kind: "para",
            body: "The **exokernel** (MIT, Engler and Kaashoek, 1995) is the sharpest research response to the dual view: **separate protection from management**. The exokernel implements no files, no processes, no virtual memory. It securely multiplexes raw hardware — physical pages, disk blocks, network packets — exposing each resource with minimal interpretation and enforcing only ownership: an application may touch only the pages, blocks, and packet slots it has obtained. All abstraction moves into **library operating systems** linked into each application, so a database can implement a buffer cache tuned to its own access pattern while a web server implements its own thread package. Measurements on the Aegis exokernel showed application-specific abstractions beating the fixed kernel ones by wide margins precisely on the workloads those fixed abstractions served poorly. The design never conquered the mainstream, but it keeps resurfacing, muted, each time a kernel grows a mechanism for applications to install their own policies — `eBPF`, `io_uring`.",
          },
          {
            kind: "open",
            heading: "Does the kernel survive as a unit?",
            body: "Two current research lines attack the definition from opposite directions. **Unikernels** — MirageOS is the exemplar — compile the application, its libraries, and a minimal operating system into a single special-purpose image that runs directly on a hypervisor: there is no kernel at all, system calls become ordinary function calls, the image is tens of kilobytes, boots in milliseconds, and exposes thousands of lines of attack surface instead of millions — but any application bug can corrupt the whole machine, because nothing beneath the application exists to catch it. **WASI**, the WebAssembly System Interface, proposes the opposite move: a portable, capability-checked system-call interface through which any WebAssembly binary runs on any host, from a browser to a cloud runtime — the first operating-system interface designed after kernels stopped being the only programs running at all times. The open question: does 'operating system' remain a meaningful unit of system software, or does it dissolve into a stack of independently evolving contracts?",
          },
        ],
      },
    ],
    readingTime: 7,
    intro: "An operating system is the software that manages a computer’s hardware and acts as the intermediary between the user and that hardware. Before studying how an OS works internally, we need to fix what we mean by ‘operating system’ at all — the answer changes dramatically depending on whose viewpoint you take.",
    objectives: [
      "Describe the four components of a computer system and the OS’s intermediary role",
      "Contrast the user view of an OS across PCs, shared mainframes and handheld devices",
      "Explain the two system-view roles: resource allocator and control program",
      "Distinguish kernel, system programs, middleware and application programs",
      "Use the bare-machine vs extended-machine (virtual machine) framing"
    ],
    concepts: [
      {
        term: "Four components of a computer system",
        kind: "definition",
        statement: "A computer system divides roughly into four components: the **hardware** (CPU, memory and I/O devices — the basic computing resources), the **operating system** (the intermediary that controls and coordinates the hardware’s use), the **application programs** (compilers, word processors, web browsers — the tools that define how resources are used to solve user problems) and the **user**.",
        detail: "An equivalent cut is hardware, software and data. The book’s simile: an operating system is like a **government** — it performs no useful function by itself, but it creates the environment in which other programs can do useful work."
      },
      {
        term: "The user view",
        kind: "insight",
        statement: "The **user view** depends on the interface being used. For a PC or laptop, one user **monopolizes the resources**, so the OS is designed mostly for **ease of use**, with some attention to performance and security and *none* to resource utilization — how hardware and software resources are shared.",
        detail: "Mainframes and servers with many terminals reverse the priorities: with many users sharing one machine, **resource utilization and fairness** dominate, because every idle second is wasted capacity that several people are paying for. Handheld devices optimize for individual usability plus battery life, featuring touch screens and voice interfaces (Apple’s Siri); embedded computers in cars and home appliances may have little or **no user view at all**, running without user intervention."
      },
      {
        term: "System view: the resource allocator",
        kind: "definition",
        statement: "From the computer’s point of view, the OS is the program **most intimately involved with the hardware**, and its first system-view role is **resource allocator**: it manages CPU time, memory space, storage space and I/O devices, deciding among **numerous and possibly conflicting requests** so the system operates **efficiently and fairly**.",
        detail: "The kernel must answer allocation questions constantly — which process gets the CPU next, which pages live in memory, which job owns the printer — and the quality of those arbitration decisions is what ‘efficiently and fairly’ measures."
      },
      {
        term: "System view: the control program",
        kind: "definition",
        statement: "The second system-view role is the **control program**: it **manages the execution of user programs to prevent errors and improper use** of the computer — it is especially concerned with the operation and control of **I/O devices**.",
        detail: "The two roles are complementary: the allocator decides *who gets what*, the control program polices *what may be done at all*. Every protection mechanism in this book — mode bits, the timer, memory isolation, file permissions — descends from this single idea."
      },
      {
        term: "What counts as ‘the operating system’?",
        kind: "insight",
        statement: "There is **no completely adequate definition** of an operating system. One view includes **everything the vendor ships** when you order ‘the operating system’ — but shipped systems range from under a megabyte (lacking even a full-screen editor) to multi-gigabyte graphical systems.",
        detail: "The book’s working definition: the OS is **the one program running at all times — the kernel**. Around it sit **system programs** (associated with the OS but not part of the kernel) and **application programs** (everything not tied to system operation). Mobile systems complicate the boundary by adding **middleware** — frameworks providing extra services to application developers: Apple’s iOS and Google’s Android each ship a kernel plus middleware for databases, multimedia and graphics. The 1998 US Department of Justice suit against Microsoft — essentially a dispute over how much functionality belongs in the OS — shows the boundary is commercially explosive, not merely academic."
      },
      {
        term: "Bare machine and extended machine",
        kind: "insight",
        statement: "Hardware alone — the **bare machine** — is not particularly easy to use, and applications share common needs such as controlling I/O devices. Gathering those common control-and-allocation functions into one piece of software yields the OS, which turns raw hardware into a cleaner, easier **extended machine** — the core of the **virtual machine** idea.",
        detail: "The fundamental goal of a computer system is to execute user programs and make solving user problems easier; the OS exists because it is a reasonable way to reach that goal. Everything in this course — files, processes, memory abstractions — is some layer of extension built on bare hardware."
      }
    ],
    figures: [
      {
        caption: "Abstract view of the components of a computer system: users interact through application programs that execute under the control of the operating system, which arbitrates access to the underlying hardware.",
        svg: `<svg viewBox="0 0 720 280" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract view of the components of a computer system"><rect x="40" y="20" width="140" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="110" y="46" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="currentColor">User 1</text><rect x="210" y="20" width="140" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="280" y="46" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="currentColor">User 2</text><text x="385" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">···</text><rect x="420" y="20" width="140" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="490" y="46" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="currentColor">User n</text><line x1="110" y1="62" x2="110" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="280" y1="62" x2="280" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="490" y1="62" x2="490" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="40" y="90" width="640" height="46" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="360" y="118" font-family="system-ui, sans-serif" font-size="13.5" font-weight="500" text-anchor="middle" fill="currentColor">Application Programs (Compiler · Assembler · Text Editor · Database · Web Browser)</text><line x1="360" y1="136" x2="360" y2="156" stroke="currentColor" stroke-width="1.8"/><polygon points="360,162 355,152 365,152" fill="currentColor"/><rect x="40" y="162" width="640" height="46" rx="6" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="360" y="190" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Operating System (Kernel &amp; System Services)</text><line x1="360" y1="208" x2="360" y2="228" stroke="currentColor" stroke-width="1.8"/><polygon points="360,234 355,224 365,224" fill="currentColor"/><rect x="40" y="234" width="640" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 3"/><text x="360" y="261" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="currentColor">Computer Hardware (CPU · Memory · Controllers · I/O Devices)</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Sorting a phone into the OS stack",
        problem: "Classify the software of an Android phone into kernel, system programs, middleware and applications.",
        steps: [
          { label: "Step 1: Kernel", text: "The modified Linux kernel — the one program running at all times, managing CPU, memory, power and the Binder IPC facility." },
          { label: "Step 2: Middleware", text: "The Android frameworks above the kernel — database (SQLite), multimedia and graphics support — services provided to application developers rather than to end users directly." },
          { label: "Step 3: System programs", text: "Programs associated with the OS but not part of the kernel: settings utilities, the window manager, background daemons started at boot." },
          { label: "Step 4: Applications", text: "Everything the user installs from the app store — each is an application program using the layers beneath, not part of the operating system proper." }
        ],
        result: "The ‘vendor ships’ definition would swallow the whole stack; the kernel definition draws the line at the always-running core, with middleware and system programs as scaffolding in between."
      },
      {
        title: "Two programs, one printer — the resource allocator at work",
        problem: "Two users submit print jobs and compute-intensive programs to a shared mainframe. Show how the OS’s two system-view roles interact.",
        steps: [
          { label: "Step 1: Conflicting requests appear", text: "Both processes need the single printer and both want CPU time. The requests conflict — the hardware alone cannot arbitrate." },
          { label: "Step 2: The allocator decides", text: "The OS serializes printer access — one job finishes (or is spooled) before the other starts — so the resource is used efficiently and neither user is starved." },
          { label: "Step 3: The control program polices", text: "Neither process may program the printer’s device controller directly; all access goes through the OS, preventing errors and improper use of the device." },
          { label: "Step 4: Utilization is protected", text: "While one process waits for its printout, the CPU is switched to the other user’s computation — the machine never idles while work exists." }
        ],
        result: "Allocator (fair, efficient division of resources) plus control program (a gatekeeper over dangerous operations) together describe the OS from the system’s point of view."
      }
    ],
    keyTakeaways: [
      "A computer system = hardware + operating system + application programs + user; the OS is the intermediary between user and hardware.",
      "User view: single-user machines optimize ease of use; shared machines optimize resource utilization; handhelds add power constraints; embedded systems may have no user view.",
      "System view: the OS is both a resource allocator (efficient, fair arbitration) and a control program (prevent errors and improper use, especially of I/O).",
      "The kernel is the one program running at all times; system programs, middleware and applications surround it — and ‘the OS’ as shipped is far bigger than the kernel.",
      "Mobile OSes (iOS, Android) blur the boundary by bundling middleware frameworks into the platform.",
      "The OS as extended machine: common, awkward hardware functions are wrapped into one convenient software layer — the seed of the virtual machine idea."
    ],
    quiz: [
      {
        q: "According to the book’s working definition, the operating system proper is:",
        options: ["everything the vendor ships when you order ‘the operating system’", "the kernel — the one program running at all times", "the collection of all system daemons", "the graphical user interface and its applications"],
        answer: 1,
        explanation: "The ‘everything shipped’ view is acknowledged but rejected as too broad; the text follows the definition of the OS as the always-running kernel, with system programs and applications outside it."
      },
      {
        q: "From the user view, an OS for a single-user PC is designed mostly for:",
        options: ["maximizing hardware resource utilization", "ease of use, with some attention to performance and security", "fair sharing among many simultaneous users", "batch throughput of submitted jobs"],
        answer: 1,
        explanation: "One user monopolizes a PC’s resources, so utilization is nearly irrelevant to that user — the design centers on usability; utilization dominates only when multiple users share one machine, as on mainframes."
      },
      {
        q: "In the system view, the control program’s chief concern is:",
        options: ["allocating CPU time fairly among processes", "compiling application programs efficiently", "managing the execution of user programs to prevent errors and improper use, especially of I/O devices", "providing a command interpreter to users"],
        answer: 2,
        explanation: "The control program role is policing: user programs must not cause errors or misuse the machine, and device control is where the risk concentrates. Fair allocation is the separate resource-allocator role."
      },
      {
        q: "Which statement about middleware in mobile operating systems is correct?",
        options: ["it runs below the kernel in firmware", "it is a set of software frameworks providing additional services to application developers", "it replaces device drivers entirely", "it exists only on mainframe systems"],
        answer: 1,
        explanation: "iOS and Android each pair a core kernel with middleware frameworks — databases, multimedia, graphics support — sitting between kernel and applications, which is exactly why ‘what is the OS’ is ambiguous for phones."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.2
  {
    sectionId: "osc-ch1-s2",
    depth: [
      {
        tier: "masters",
        title: "Interrupts, buses and the price of I/O",
        blocks: [
          {
            kind: "para",
            body: "The textbook mechanism scales up by adding tables and ranks. On x86, every interrupt source carries a **vector number**, and the CPU dispatches by indexing the **interrupt descriptor table** — 256 entries, each a gate holding the handler's address, its privilege requirements, and the stack to switch to — so dispatch costs one table lookup rather than a poll of every device. Modern hardware abandons the shared wire entirely: a **message-signaled interrupt** is a memory write from the device, carrying its own vector, which lets a PCI Express system deliver thousands of distinct interrupts as discrete messages. The controller assigns each vector an **interrupt priority level**; a handler can itself be preempted by a higher-priority arrival, and the kernel can forbid that during critical processing by raising the CPU's interrupt-priority mask — the hardware ancestor of the software lock. The three requirements the book lists — deferral, efficient dispatch, and multilevel priorities — are therefore not aspirations but table and mask entries.",
          },
          {
            kind: "para",
            body: "Electrical semantics decide whether interrupt lines can be shared. A **level-triggered** line stays asserted until the handler services the device and the device deasserts: the CPU samples the level, so a device serviced late simply keeps asking, and several devices can share one line because it stays high while any one of them needs service. The hazard is the **interrupt storm** — a handler that fails to clear the condition re-enters itself forever. An **edge-triggered** line signals only the transition: the controller must latch the edge, and a handler that services devices too slowly can miss one that asserted and deasserted while interrupts were masked — which is why edge-triggered handlers must not dawdle on shared lines. The classic PCI interrupt pins were level-triggered precisely to permit sharing, and message-signaled interrupts dissolve the question entirely by making every interrupt a private, addressed message rather than a level on a common wire.",
          },
          {
            kind: "derivation",
            heading: "What I/O costs the CPU",
            body: "Compare the two structures by the bytes per second each can sustain. In **programmed I/O** the CPU moves every word itself, so throughput is bounded by processor cycles: $$R_{\\text{PIO}} = \\frac{f \\cdot w}{c},$$ for clock $f$, word size $w$, and $c$ cycles per word — with $f = 3$ GHz, $w = 8$ bytes, and $c = 10$ cycles, a ceiling of $2.4$ GB/s. Now impose the textbook's interrupt discipline of one interrupt per unit transferred, each costing $C_{I}$ of CPU time: at $C_{I} = 1\\,\\mu\\text{s}$ per byte, the CPU can field at most $$R_{\\text{int}} = \\frac{1}{C_{I}} = 1\\,\\text{MB/s},$$ while a modern drive delivers a hundred times more. **DMA** inverts the accounting: the CPU spends one setup and one completion interrupt per block of $B$ bytes — roughly $1.2$ nanoseconds of CPU per byte for $B = 8192$ at $10\\,\\mu\\text{s}$ of total attention — and the transfer rate is then bounded by the bus and the device rather than the CPU. The feasibility condition for per-unit interrupts falls out directly: they survive only while $C_{I} \\le 1/R$ for device rate $R$ — at $R = 100$ MB/s that demands a 10-nanosecond interrupt, and no machine has ever fielded one.",
          },
          {
            kind: "para",
            body: "**Memory-mapped I/O** makes device registers appear as ordinary physical addresses: a store to the controller's command word *is* the command, and a driver is ordinary code performing loads and stores to special addresses — in C, through pointers to `volatile` locations, since neither the compiler nor the CPU may cache or reorder access to device state. The alternative — dedicated I/O instructions, x86's `in` and `out` reaching a separate port space — survives for legacy reasons; mapping devices into the memory address space lets one bus and one instruction set reach both, and lets DMA target device buffers directly. The **device-driver contract** then has a crisp shape. The driver is the one module that knows the controller's register map and command encoding; implements the kernel's uniform interface — open, read, write, control, poll — on top of it; claims its interrupt vectors and handles completions; and prepares the DMA buffers the controller will read and write behind the CPU's back. Everything the rest of the operating system knows about a device is this interface — which is why drivers remain the kernel's largest and least reliable code base.",
          },
          {
            kind: "remark",
            body: "Because a handler runs with its interrupt line — and often others — masked, an interrupt handler that takes milliseconds silently disables the machine: every device on a masked line loses events while it runs. Real kernels therefore split the work. The **top half**, the registered handler, only acknowledges the device, captures minimal state, and enqueues a request. The **bottom half** — Linux softirqs and tasklets, Windows deferred procedure calls — runs later with interrupts enabled, doing the expensive protocol and buffer work. The section's interrupt architecture is thus an account of where the doorbell rings, not of where the work happens: correctness demands only that the door be answered quickly, and performance demands that everything else be answered elsewhere.",
          },
        ],
      },
      {
        tier: "phd",
        title: "The I/O path at machine speed",
        blocks: [
          {
            kind: "para",
            body: "When gigabit networks arrived, interrupt-driven I/O met a failure mode the textbook picture cannot express: **receive livelock**. Mogul and Ramakrishna, measuring a busy web server at DEC's Western Research Laboratory in the mid-1990s, watched useful throughput collapse to zero while the CPU stayed 100% busy — entirely in interrupt context. The mechanism: every arriving packet raises an interrupt, interrupt handlers run above every process priority, and under overload the arrivals never stop — so the CPU fields interrupts forever and never executes the protocol code that drains the receive queues. The queues overflow, packets drop, and transport-layer retransmissions manufacture still more arrivals: a self-sustaining state in which the machine works hard at accomplishing nothing. The fix, now standard, is hybrid interrupt-polling — Linux's NAPI switches a busy device from interrupts to polling, converting the priority inversion back into ordinary schedulable work.",
          },
          {
            kind: "application",
            heading: "Kernel bypass in the data center",
            body: "The radical conclusion of the livelock studies was that for the fastest devices the kernel should exit the data path entirely. **Kernel-bypass frameworks** — DPDK for packet processing, netmap for high-speed networking, RDMA for remote memory — map device queues and DMA buffers directly into user memory, so an application, or a userspace network stack, polls the hardware itself: no trap, no handler, no copy. Packet forwarding at ten million packets per second on a single core, and remote-memory latencies of a few microseconds, are now routine in production data centers, and RDMA carries the collectives that train modern AI clusters. The price is architectural. Every bypassing application re-implements the buffer management, scheduling, and security the kernel used to provide uniformly, and the machine's protection boundary no longer covers its fastest traffic. The operating system becomes the control plane — configuration, setup, slow paths — while the data plane it once owned runs beside it at user privilege.",
          },
          {
            kind: "open",
            heading: "Is the syscall still the right I/O door?",
            body: "The newest chapter questions the boundary this whole book stands on. `io_uring` — Linux, 2019 — replaces the synchronous system call with shared submission and completion queues between user and kernel: an application enqueues many requests with ordinary memory writes and collects completions asynchronously, amortizing each trap across a batch and enabling zero-copy pipelines; fused with NVMe poll queues, the kernel can be absent from the steady-state fast path without being bypassed at all. The open question is what survives of the classic model in which every I/O operation is a trap, a handler, and a mode switch. If the fastest interface is a shared queue with no trap, the system-call boundary is no longer the operating system's defining edge but one door among several — traps, queues, mapped rings — each with its own performance contract and its own security story, and no existing theory says which combination an operating system should offer.",
          },
        ],
      },
    ],
    readingTime: 11,
    intro: "A modern computer is a CPU and a crowd of device controllers sharing a common bus and memory. Everything the OS does rests on three hardware mechanisms this section makes precise: interrupts, which let devices demand attention; the storage hierarchy, which trades speed against capacity; and DMA, which moves bulk data without drowning the CPU in interrupts.",
    objectives: [
      "Describe von Neumann organization and the fetch–decode–execute cycle, including the interrupt check before each instruction",
      "Explain the roles of device controllers, device drivers and the memory controller on a common bus",
      "Walk the storage hierarchy with representative sizes and access times, and convert storage units",
      "Trace the full interrupt-driven I/O cycle, including vectored dispatch, state save/restore and priority handling",
      "Explain why DMA exists and how it replaces per-byte interrupts with one interrupt per block"
    ],
    concepts: [
      {
        term: "Von Neumann architecture and the instruction cycle",
        kind: "definition",
        statement: "A **von Neumann architecture** keeps instructions and data in one read-write memory. The **instruction cycle**: fetch the instruction from memory into the **instruction register**, **decode** it, optionally fetch operands, **execute**, then store results back to memory. Before executing each instruction the CPU senses the **interrupt-request line**, so hardware can redirect the machine at any instruction boundary.",
        detail: "The memory unit sees only a stream of addresses — it neither knows nor cares whether an address holds instruction or data, or how the address was generated (program counter, indexing, indirection, literal). The **program counter** supplies the fetch address; a **load** moves a byte or word from memory into a CPU register, a **store** writes a register back to memory. Main memory is built from DRAM, and the CPU can execute only what has been loaded into it."
      },
      {
        term: "Device controllers, drivers and the common bus",
        kind: "definition",
        statement: "A general-purpose computer system is **one or more CPUs and a number of device controllers connected through a common bus** that provides access to shared memory. Each **device controller** is in charge of a specific device type, maintains **local buffer storage** and a set of **special-purpose registers**, and moves data between the peripheral devices it controls and that buffer. The OS side of this interface is the **device driver** — one per controller — which understands the controller and presents a uniform interface to the rest of the OS.",
        detail: "Depending on the controller, several devices may attach through it — one USB port can feed a hub with many devices. The CPU and the controllers execute **in parallel, competing for memory cycles**, so a **memory controller** synchronizes access to memory. A typical PC bus hosts a disk controller, a USB controller, and a graphics adapter alongside the keyboard, mouse and monitor."
      },
      {
        term: "The storage hierarchy",
        kind: "insight",
        statement: "Storage systems form a **hierarchy** ordered by speed, cost and capacity: **registers → cache → main memory → nonvolatile memory (NVM/flash, SSD) → hard-disk drives (HDD) → optical disk and magnetic tape** (tertiary storage). The rule: **smaller and faster sits closer to the CPU**; volatile levels sit above the line, nonvolatile levels below it.",
        detail: "Representative values (book Figure 1.14): registers hold under 1 KB and respond in about $0.25$–$0.5$ ns; cache under 16 MB at 0.5–25 ns; main memory under 64 GB at 80–250 ns; solid-state storage up to about 1 TB at 25,000–50,000 ns; magnetic disk to 10 TB at roughly 5,000,000 ns — about **seven orders of magnitude** slower than registers. Unit bookkeeping: a kilobyte is $2^{10}$ bytes, a megabyte $2^{20}$, a gigabyte $2^{30}$, a terabyte $2^{40}$ and a petabyte $2^{50}$ (manufacturers round to powers of ten, and networking counts **bits**, not bytes). Mechanical storage (HDD, optical, tape) is generally larger and cheaper per byte; electrical storage (flash, SSD) is faster but costlier. RAM is **volatile**, so the bootstrap program lives in nonvolatile firmware such as EEPROM — the iPhone, for instance, keeps serial numbers and hardware info there."
      },
      {
        term: "Interrupts and the interrupt vector",
        kind: "definition",
        statement: "Hardware may trigger an interrupt at any time by signaling on the **interrupt-request line** — the CPU senses that line after executing every instruction. A controller **raises** an interrupt by asserting the line; the CPU **catches** the interrupt and **dispatches** it to a handler; the handler **clears** it by servicing the device. Dispatch is fast because the interrupt number **indexes an interrupt vector** — a table of pointers (typically in low memory) to interrupt service routines.",
        detail: "Without vectors, a generic routine would have to poll every possible source to find who needs service — far too slow for something that occurs constantly. Indirection through the table means the fixed location the CPU jumps to simply contains the starting address of the right routine. Windows and UNIX dispatch interrupts in exactly this manner."
      },
      {
        term: "Interrupt handling: save, service, restore",
        kind: "method",
        statement: "On catching an interrupt the CPU reads the interrupt number, uses it as an index into the interrupt vector, and jumps to the handler. The handler **saves any state it will change**, determines the cause of the interrupt, performs the necessary processing, **restores the saved state**, and executes a **return from interrupt** — the interrupted computation resumes as though nothing had happened.",
        detail: "The interrupt architecture must preserve state because the interruption arrives asynchronously — the running program’s registers and program counter belong to it, not to the device. The book lists three modern requirements beyond the basic mechanism: the ability to **defer** handling during critical processing, an **efficient dispatch** to the proper handler (the vector), and **multilevel priorities** so urgent work preempts routine work."
      },
      {
        term: "Maskable vs nonmaskable interrupts, priorities and chaining",
        kind: "insight",
        statement: "Most CPUs have two interrupt-request lines. The **nonmaskable** interrupt is reserved for events such as unrecoverable memory errors and cannot be turned off; the **maskable** line serves device controllers and can be disabled during critical instruction sequences. **Interrupt priority levels** let high-priority interrupts preempt low-priority ones, and **interrupt chaining** hangs a list of handlers off each vector entry, tried one by one.",
        detail: "On Intel processors, vector numbers **0–31 are nonmaskable** events signaling error conditions (divide error at 0, page fault at 14, and so on) while **32–255 are maskable**, used for device-generated interrupts. Chaining exists because computers have more devices than the vector has elements — each element points to the head of a handler list, a compromise between a huge table and a single polling handler."
      },
      {
        term: "Direct memory access (DMA)",
        kind: "definition",
        statement: "**Direct memory access** serves bulk data movement: after the device driver sets up **buffers, pointers and counters** for the device, the device controller transfers an entire block **directly between the device and main memory with no intervention by the CPU**, generating **one interrupt per block** on completion instead of one interrupt per byte.",
        detail: "While the controller works, the CPU is free for other tasks — though controller and CPU still **compete for memory cycles**, the classic cost of DMA known as cycle stealing. On high-end **switch-based** systems, where multiple components converse concurrently instead of arbitrating for a shared bus, DMA is even more effective."
      },
      {
        term: "I/O structure: interrupt-driven vs DMA",
        kind: "method",
        statement: "Interrupt-driven I/O cycle (Figure 1.4): (1) the **device driver initiates I/O** by loading the controller’s registers; (2) the controller starts the transfer into its **local buffer**; (3) on completion the controller **generates an interrupt**; (4) the CPU (checking between instructions) receives it and **transfers control to the interrupt handler**; (5) the handler **processes the data** and returns from interrupt; (6) the CPU **resumes the interrupted task**. With DMA, steps 3–6 collapse: the controller moves the whole block to memory itself and interrupts once, at the end.",
        detail: "For small transfers (a keystroke, a character to a terminal) interrupt-driven I/O is fine; for large NVS transfers it would bury the CPU in per-byte interrupts. DMA trades a little memory-bus contention for thousands of avoided interrupts — the book’s motivating example for why both I/O structures exist."
      }
    ],
    examples: [
      {
        title: "Anatomy of a keystroke",
        problem: "A user presses a key while the CPU is busy running a compiler. Trace the complete interrupt-driven path from press to delivered character.",
        steps: [
          { label: "Step 1: Driver initiates", text: "Earlier, the keyboard’s device driver loaded the controller’s registers requesting ‘read a character from the keyboard’ — the controller examines these registers to determine the action to take." },
          { label: "Step 2: Controller buffers the data", text: "The controller moves the keystroke from the device into its local buffer storage." },
          { label: "Step 3: Interrupt is raised and caught", text: "On completion the controller asserts the interrupt-request line; at the next instruction boundary the CPU senses it, reads the interrupt number, and indexes the interrupt vector to find the handler’s address." },
          { label: "Step 4: Handler saves state and services", text: "The handler saves the registers it will modify, determines that a keyboard event caused the interrupt, and hands the character (or a pointer to it) to the driver." },
          { label: "Step 5: Restore and resume", text: "The handler restores the saved state and executes return from interrupt — the compiler continues exactly where it was, unaware anything happened." }
        ],
        result: "One keystroke exercised the full loop: initiate → buffer → raise → catch → dispatch → save → service → restore. The entire sequence is invisible to the interrupted program."
      },
      {
        title: "Counting interrupts: why DMA exists",
        problem: "A program reads an $8\\,\\text{KB}$ block from a solid-state drive. Compare the interrupt load with per-byte interrupt-driven I/O versus DMA.",
        steps: [
          { label: "Step 1: Size the transfer", text: "$8\\,\\text{KB}$ is $2^{13} = 8192$ bytes." },
          { label: "Step 2: Per-byte interrupts", text: "If the controller interrupted once per byte — as low-speed devices effectively do — the CPU would field $8192$ separate interrupts for this one read, each paying save/dispatch/restore costs." },
          { label: "Step 3: Set up DMA", text: "The driver instead writes a command block: source device, memory address for the block, and a counter of $8192$ bytes to move." },
          { label: "Step 4: Block transfer", text: "The DMA controller moves the whole block directly to main memory, cycle by cycle competing with the CPU for memory but never interrupting it." },
          { label: "Step 5: One completion interrupt", text: "When the block lands, the controller raises a single interrupt telling the driver the operation has completed — a load of $8192$ reduced to $1$." }
        ],
        result: "The interrupt count falls by a factor of $2^{13}$: that is the entire argument for DMA whenever transfers are bulk — the CPU spends the saved time doing useful work instead of fielding interrupts."
      }
    ],
    keyTakeaways: [
      "Von Neumann machines interleave instruction and data access in one memory; the CPU checks for interrupts after every instruction, making the system event-driven.",
      "Device controllers own local buffers and registers; drivers give the OS a uniform interface to them; a memory controller serializes shared-memory access.",
      "The storage hierarchy trades speed for capacity at every level — registers ($0.25$–$0.5$ ns) to magnetic disk (about 5,000,000 ns) — with volatility splitting volatile from nonvolatile levels.",
      "Storage units are powers of two: $2^{10}$ bytes = 1 KB up through $2^{40}$ = 1 TB; networking alone counts bits.",
      "Vectored interrupts dispatch directly by number; handlers must save and restore state; maskable vs nonmaskable lines plus priority levels and chaining complete the modern mechanism.",
      "DMA converts one interrupt per byte into one interrupt per block by giving controllers direct access to main memory — at the cost of some memory-cycle contention."
    ],
    quiz: [
      {
        q: "When does the CPU check for pending interrupts?",
        options: ["only when a process blocks for I/O", "after executing every instruction", "only when the OS issues a poll request", "once per timer tick"],
        answer: 1,
        explanation: "The hardware senses the interrupt-request line after every instruction — that is what lets a device seize the CPU’s attention at any instruction boundary, the property that makes the whole system interrupt-driven."
      },
      {
        q: "The interrupt vector exists mainly to:",
        options: ["buffer data moving to devices", "let the interrupt number index a table of service-routine addresses for fast dispatch", "mask low-priority interrupts during critical sections", "translate virtual addresses to physical addresses"],
        answer: 1,
        explanation: "A table of pointers indexed by a unique number dispatches straight to the right handler with no polling — essential because interrupts occur very frequently and must be handled quickly."
      },
      {
        q: "A nonmaskable interrupt is best described as:",
        options: ["an interrupt a device can defer until the CPU is idle", "an interrupt reserved for events such as unrecoverable memory errors, which cannot be turned off", "any interrupt raised by a disk controller", "an interrupt whose handler runs in user mode"],
        answer: 1,
        explanation: "The two hardware lines split duties: the maskable line serves ordinary devices and can be disabled during critical sequences; the nonmaskable line carries hardware-fault events that must never be ignored."
      },
      {
        q: "With DMA, interrupts are generated:",
        options: ["one per byte transferred", "one per block transferred, when the operation completes", "one per memory cycle, as the controller steals cycles", "none — DMA requires polling"],
        answer: 1,
        explanation: "The controller moves the entire block between device and memory on its own and interrupts once at completion — replacing the per-byte interrupt storm that makes interrupt-driven I/O unusable for bulk transfers."
      },
      {
        q: "Which ordering lists storage from fastest to slowest?",
        options: ["main memory → cache → registers → SSD → HDD", "registers → cache → main memory → NVM/SSD → hard-disk drives → optical and tape", "cache → registers → main memory → HDD → NVM/SSD → tape", "registers → main memory → cache → HDD → NVM/SSD → optical"],
        answer: 1,
        explanation: "Smaller-and-faster lives closer to the CPU: registers, then cache, then DRAM main memory, then electrical nonvolatile memory, then mechanical disks, with optical and tape as tertiary storage at the bottom."
      }
    ,
      // PYQ-pattern: GATE 2019 — DMA versus per-byte interrupts (rephrased)
      {
        q: "Under per-byte interrupt-driven I/O each byte raises one interrupt, while DMA raises one interrupt per block. A controller must move an $8\\,\\text{KB}$ block ($8192$ bytes). How many CPU interrupts occur in each case?",
        options: ["$1$ and $1$", "$1024$ and $8$", "$1$ and $8192$", "$8192$ and $1$"],
        answer: 3,
        explanation: "**Step 1 — Given data:** block size $8\\,\\text{KB} = 2^{13} = 8192$ bytes. Per-byte rule: one interrupt per byte. DMA rule: one completion interrupt per block after driver setup.\n**Step 2 — Rule:** `per-byte count = number of bytes`, `DMA count = number of blocks`.\n**Step 3 — Computation:** per-byte $= 8192$, DMA $= 1$. Setup work (`buffers, pointers, counters`) costs CPU time but raises no interrupt.\n**Step 4 — Cross-check:** ratio is $\\frac{8192}{1} = 8192$, i.e. a factor of $2^{13}$. While the DMA controller moves data, the CPU is free except for memory-cycle contention.\n**Step 5 — Distractors:** `$1$ and $1$` ignores per-byte cost; `$1$ and $8192$` swaps the two; `$1024$ and $8$` assumes $1$-KB sub-blocks, which the statement never defines.\n**Step 6 — Conclude:** per-byte $8192$ versus DMA $1$ — the entire argument for DMA on bulk transfers."
      },
      // PYQ-pattern: ISRO 2018 — vectored interrupt dispatch (rephrased)
      {
        q: "On a machine with $256$ interrupt vectors, a disk controller raises vector $76$ while user code runs. When is the request sensed, and how is the handler located?",
        options: ["Only at timer ticks, by polling every device in turn", "Only when the running process blocks, via the process table", "After the current instruction, by indexing the vector table with $76$", "Before the next fetch, by scanning main memory for the controller address"],
        answer: 2,
        explanation: "**Step 1 — Given data:** vector number $76$, CPU in user mode, $256$-entry table of handler addresses.\n**Step 2 — Rule:** hardware senses the request line after each instruction; the vector number indexes the table directly, so dispatch costs one lookup.\n**Step 3 — Trace:** CPU finishes the current instruction, reads $76$, jumps to `table[76]`. The handler saves state it will clobber, services the device, restores state, and executes return-from-interrupt.\n**Step 4 — Cross-check:** requirements met are deferral during critical sections, efficient dispatch via the table, and multilevel priorities letting urgent vectors preempt routine ones.\n**Step 5 — Distractors:** polling contradicts vectoring; process-table lookup confuses interrupts with scheduling; memory scanning describes polling, not vectored dispatch.\n**Step 6 — Conclude:** sense after each instruction, dispatch by `table[76]`."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.3
  {
    sectionId: "osc-ch1-s3",
    depth: [
      {
        tier: "masters",
        title: "Coherence, Amdahl and the cost of sharing",
        blocks: [
          {
            kind: "para",
            body: "Symmetric multiprocessing works only because the caches cooperate. Each core's private cache holds a copy of lines whose home is main memory, so a write in one cache must become visible to all the others — the **cache-coherence problem**, solved in hardware by a protocol. The workhorse is **MESI**, which labels every cached line with one of four states: **Modified** — this cache holds the only copy and memory's is stale; **Exclusive** — sole copy, memory fresh, writable without telling anyone; **Shared** — read-only replicas may exist elsewhere; **Invalid** — no right to use the line. A core wanting to write a Shared line must first broadcast an invalidation that forces every other copy to Invalid, and a read miss consults the other caches (by snooping a shared bus, or by a directory on larger machines) and may fetch fresh data from a peer's Modified copy. Coherence traffic is a concrete reason the book's speed-up is strictly below $N$: the protocol itself consumes interconnect bandwidth — the very resource the extra cores were bought to provide.",
          },
          {
            kind: "derivation",
            heading: "Amdahl's law, derived",
            body: "Take a workload whose one-processor execution time is $T$, and suppose a fraction $p$ of that work runs in parallel on $n$ processors while the fraction $1 - p$ is inherently serial — coordination, lock contention, sequential phases. On $n$ processors the parallel part shrinks by $n$ and the serial part does not: $$T_n = (1 - p)T + \\frac{pT}{n}.$$ Speed-up is the ratio of the times, $$S(n) = \\frac{T}{T_n} = \\frac{1}{(1 - p) + p/n},$$ and this single fraction governs everything. Two limits: at $n = 1$ the formula consistently returns $S = 1$, and as processors grow without bound, $$\\lim_{n \\to \\infty} S(n) = \\frac{1}{1 - p},$$ so the serial fraction alone caps the machine. Worked numbers: with $p = 0.9$, one hundred processors yields $S = 1/(0.1 + 0.009) \\approx 9.2$ — nine percent efficiency — and even infinitely many processors never exceed $10$. One serial tenth outweighs a hundred cores; this is the quantitative form of the section's warning that speed-up with $N$ processors is strictly less than $N$.",
          },
          {
            kind: "remark",
            body: "Two threads write disjoint variables, yet the caches fight as if they shared them: when the variables land in the **same 64-byte cache line**, each write flips the line to Modified in one cache and Invalid in the other, and the line ping-pongs across the interconnect on nearly every store. This is **false sharing** — no data race exists, the program is logically correct, and performance collapses anyway, sometimes by an order of magnitude, for a reason invisible in the source: it depends on the allocator's byte-level placement. The cures — padding structures to line boundaries, per-CPU counters — are the same locality discipline that NUMA demands on a larger scale, and the diagnosis is always the same: the unit of hardware sharing is the line, not the variable.",
          },
          {
            kind: "para",
            body: "NUMA turns a hardware asymmetry into an operating-system obligation. In a cache-coherent NUMA machine every processor can address all memory, but at different costs: **local** memory answers over a fast local bus in roughly a hundred nanoseconds, while **remote** memory crosses the interconnect at a multiple of that, and a line held Modified on another node must be fetched from that node, not from memory. The hardware guarantees correctness — only performance differs — so the operating system must supply the discipline. Its tools are **first-touch placement**, allocating a page on the node whose thread first faults it in; **scheduler affinity**, keeping a thread and its memory together at the cost of load-balancing freedom; and, in extremis, **page migration**, moving hot pages toward their users. A scheduling decision and an allocation decision that were independent on a desktop become one decision on a server — and the NUMA penalty is the fee for getting it wrong.",
          },
          {
            kind: "para",
            body: "The architecture menu of this section is a latency-versus-failure trade. Inside one chip, cores communicate through shared memory at cache speed — tens of nanoseconds — with hardware coherence keeping them consistent; but the whole machine shares one fate, since a single power fault, memory error, or kernel panic stops every core at once. Across a cluster, nodes share nothing physically; communication is an explicit message over Ethernet or InfiniBand costing microseconds — a hundred to a thousand times a cache hit — but a node's failure is an event the survivors can absorb, which is precisely the high-availability argument for clustering, and the reason a parallel database needs a distributed lock manager where a shared-memory machine would need a mutex. Coherence makes sharing cheap and failure fatal; message passing makes failure survivable and sharing expensive. The industry accordingly built its largest systems as clusters of multicore NUMA machines, and left the operating system to manage every layer of the compromise at once.",
          },
        ],
      },
      {
        tier: "phd",
        title: "Scaling the kernel itself",
        blocks: [
          {
            kind: "para",
            body: "When processors numbered in the tens, kernels stopped scaling before applications did, and the research response was a definitional insight. Clements and colleagues (SOSP 2013) formulated the **commutativity rule**: when the results of a set of operations do not depend on their order — when the operations **commute** — the operating system can implement them so that concurrent executions do not interfere, do not contend on shared cache lines, and therefore scale on any number of cores. The rule is powerful in contrapositive use: compute which system calls commute under which conditions, and you have identified exactly the interface changes that make the kernel a bottleneck. Applying it to Linux — scalable statistics, PID allocation, file-system timestamp handling — produced a modified kernel that scaled nearly linearly on 80 cores where the stock kernel saturated. The deeper point belongs to this chapter: the resource manager must itself scale, and scalability turns out to be a property of the interface, not only of the implementation beneath it.",
          },
          {
            kind: "application",
            heading: "RCU: reads that scale without limit",
            body: "Linux's most consequential scalability mechanism rarely appears in architecture textbooks, yet it is a large part of why the kernel survives machines with thousands of cores. **Read-copy-update** lets readers traverse shared structures — routing tables, file-descriptor tables, security policies — with no locks, no atomic instructions, and no writes to shared memory: a reader announces itself, follows pointers, and is guaranteed that everything it saw stays valid for the duration. Writers make a private copy, modify it, and swing a single pointer to publish; the old version is reclaimed only after a **grace period** proves that every pre-existing reader has finished. Read-mostly workloads therefore scale without bound, and most kernel traffic on a large server is read-mostly. The costs are subtle — writers queue, reclamation is deferred, the API demands strict read-side discipline — but RCU demonstrates that the contention predicted by naive sharing arguments is a property of the implementation, not a law of hardware.",
          },
          {
            kind: "open",
            heading: "Can kernels be fully non-blocking?",
            body: "The endgame of this research line is a kernel with no locks. **Lock-free** data structures guarantee that some thread makes progress in a bounded number of steps even if every other thread is suspended mid-operation; **wait-free** structures guarantee it of every thread. Both are immune to priority inversion, deadlock, and preemption-induced stalls — which is exactly why they matter in kernels, the one place a stalled thread cannot simply be paged out or killed. Lock-free lists, queues and hash tables have accumulated since the 1990s, but the whole-system problem remains open: allocators, garbage collectors, and the scheduler itself resist the lock-free treatment, and non-blocking algorithms often lose their advantage under precisely the high-contention conditions that motivate them, flooding the coherence fabric with invalidations. Whether a complete operating system can be non-blocking, or whether some kernel structures are irreducibly serial — and which definition of progress a kernel should even promise — remain unsettled questions.",
          },
        ],
      },
    ],
    readingTime: 9,
    intro: "Organizing many processors into one computer — or many computers into one system — is the architect’s response to the end of easy single-CPU speedups. This section tours the taxonomy: multiprocessors and multicore chips, NUMA machines, blades, clusters and fully distributed systems, each trading coupling against scalability.",
    objectives: [
      "Define single-processor systems and explain why special-purpose processors do not make one multiprocessor",
      "Compare SMP, multicore and NUMA organizations, including their memory-access properties",
      "Explain why the industry pivoted from faster single cores to more cores (power and memory walls)",
      "Distinguish asymmetric, symmetric and parallel clustering, and the role of SANs",
      "Characterize distributed systems and their LAN/WAN networking substrate"
    ],
    concepts: [
      {
        term: "Single-processor systems",
        kind: "definition",
        statement: "A **single-processor system** has one general-purpose CPU with a single processing **core** — the component that executes instructions and holds local registers. Such systems may still contain **special-purpose processors** (disk, keyboard, graphics controllers) that run limited instruction sets and do **not** run processes.",
        detail: "Some special-purpose processors are managed by the OS — a disk-controller microprocessor keeps its own disk queue and scheduling algorithm — while others are autonomous hardware components the OS cannot even address. By the book’s definition, special-purpose processors do not turn a single-processor system into a multiprocessor; and by that same definition, very few contemporary systems are single-processor systems at all."
      },
      {
        term: "Multiprocessor systems and UMA/SMP",
        kind: "definition",
        statement: "A **multiprocessor system** has two or more processors sharing the computer **bus** and sometimes the **clock, memory and peripheral devices** — a uniform memory access (UMA) design. Its primary advantage is **increased throughput**: more work done in less time. The most common form is **symmetric multiprocessing (SMP)**, where each peer CPU performs all tasks, including operating-system functions and user processes; asymmetric designs instead assign each processor a fixed role under a master.",
        detail: "In an SMP machine every CPU has its own register set and a private (local) cache, but all share physical memory over the system bus — $N$ CPUs can run $N$ processes without significant deterioration. The speed-up ratio with $N$ cooperating processors is **less than $N$**: keeping the parts working correctly plus contention for shared resources eats into the gain. Processors should share certain data structures so the OS can dynamically balance workload among them — carefully written, as Chapters 5 and 6 demand."
      },
      {
        term: "Multicore processors",
        kind: "definition",
        statement: "**Multicore** means multiple computing cores reside on a single chip. It is more efficient than multiple single-core chips because **on-chip communication is faster than between-chip communication**, and one multicore chip **uses significantly less power** — vital for mobile devices and laptops. A typical dual-core design gives each core its own registers and local **level-1 (L1) cache** while sharing an on-chip **level-2 (L2) cache**; a multicore processor with $N$ cores appears to the OS as **$N$ standard CPUs**.",
        detail: "Vocabulary the book fixes: the **CPU** is the hardware that executes instructions, a **processor** is a physical chip containing one or more CPUs, a **core** is the basic computation unit of the CPU, **multicore** puts multiple cores on the same CPU and **multiprocessor** means multiple processors. All modern operating systems — Windows, macOS, Linux, Android, iOS — support multicore SMP."
      },
      {
        term: "Why not a faster single core?",
        kind: "insight",
        statement: "The industry stopped chasing single-core clock speed because dynamic power scales as $P \\approx C V^{2} f$: raising frequency $f$ forces voltage $V$ up too, so power grows super-linearly and the chip overheats — the **power wall**. Since the mid-2000s, transistor budgets (still doubling per Moore’s Law) have gone instead into multiple modestly-clocked cores.",
        detail: "A second wall is **memory latency**: a lone fast core stalls on DRAM accesses that have barely improved, while several cores with on-chip caches can overlap compute and memory waits. This is why the historical pivot — associated with Intel abandoning its push toward ever-higher clock rates in favor of dual- and quad-core designs — happened: parallelism delivers performance that frequency no longer can."
      },
      {
        term: "NUMA — non-uniform memory access",
        kind: "definition",
        statement: "In a **NUMA** system each CPU (or group) gets **local memory accessed via a small, fast local bus**, while the CPUs share one physical address space through a **shared system interconnect**. Local access is fast and free of contention; **remote access** — CPU 0 reaching into CPU 3’s local memory — suffers increased latency across the interconnect.",
        detail: "The benefit is scalability: adding CPUs no longer bottlenecks on a single shared bus, which is why NUMA dominates servers and high-performance computing. The drawback — the NUMA penalty — is mitigated by careful **CPU scheduling and memory management** that keep a process and its data close together on one node (revisited in the scheduling and virtual-memory chapters)."
      },
      {
        term: "Blade servers",
        kind: "definition",
        statement: "A **blade server** places multiple **processor boards, I/O boards and networking boards in the same chassis**. The difference from a traditional multiprocessor is that **each blade-processor board boots independently and runs its own operating system** — in essence, multiple independent multiprocessor systems in one box.",
        detail: "Some blade boards are themselves multiprocessors, blurring the taxonomy further: the blade chassis consolidates power, cooling and networking for what are logically separate computers."
      },
      {
        term: "Clustered systems",
        kind: "definition",
        statement: "A **cluster** gathers two or more individual systems (**nodes**, each typically multicore) joined by a LAN or a faster interconnect such as **InfiniBand** and **sharing storage** — a **loosely coupled** multiprocessor. Clustering mainly provides **high-availability service**: redundancy lets the system survive a node failure. In **asymmetric clustering** one machine is a **hot-standby** monitoring the active server; in **symmetric clustering** two or more hosts run applications and monitor each other.",
        detail: "A monitoring node that sees its peer fail can **take ownership of its storage and restart its applications** — users see only a brief interruption. Systems that keep providing service proportional to surviving hardware **degrade gracefully**; fault-tolerant systems go further and survive any single component failure. **Parallel clusters** let multiple hosts access the same data on shared storage, requiring a **distributed lock manager (DLM)** to prevent conflicting operations — Oracle Real Application Cluster is the book’s example. **Storage-area networks (SANs)** allow many systems to attach to a pool of storage, so any host can take over an application whose data lives on the SAN."
      },
      {
        term: "Distributed systems",
        kind: "definition",
        statement: "A **distributed system** is a collection of **physically separate, possibly heterogeneous computer systems networked** to give users access to the resources the system maintains — increasing computation speed, functionality, data availability and reliability. Nodes have **no shared memory or clock**: they communicate by messages over the network.",
        detail: "Networks are characterized by distance: a **LAN** connects computers within a room, building or campus; a **WAN** links buildings, cities or countries; metropolitan-area networks (MAN) and personal-area networks (PAN — Bluetooth, 802.11) fill the gaps. **TCP/IP** is the dominant protocol and the foundation of the Internet. A **network operating system** leaves nodes autonomous (aware of the network, exchanging messages and files); a **distributed operating system** communicates closely enough to create the illusion of a single OS controlling the network."
      }
    ],
    examples: [
      {
        title: "Choosing an architecture for four workloads",
        problem: "Match each requirement to the most appropriate architecture: (a) an office desktop, (b) a large database server needing dozens of CPUs, (c) a web service that must survive machine failure, (d) a chassis of independent multiprocessor boards.",
        steps: [
          { label: "Step 1: The desktop", text: "A single multicore chip suffices — one processor, several cores, private L1 plus shared L2 caches; the OS sees the cores as standard CPUs and schedules across them." },
          { label: "Step 2: The big database server", text: "A shared bus saturates as CPUs multiply, so choose NUMA: each processor group gets fast local memory over a local bus, one shared interconnect preserves a single address space, and the OS scheduler keeps work near its data." },
          { label: "Step 3: The fault-tolerant web service", text: "Cluster several nodes over InfiniBand with storage on a SAN — any surviving host can take ownership of the storage and restart the application if one node dies." },
          { label: "Step 4: The dense chassis", text: "Blade servers: each board boots its own OS independently, so one chassis hosts many separate multiprocessor systems sharing only power, cooling and the network." }
        ],
        result: "Each design answers a different scaling question — more cores per chip, more CPUs per machine, more machines per service — and each changes what the operating system must manage."
      },
      {
        title: "Failover in an asymmetric cluster",
        problem: "A two-node cluster runs a database. Walk through what happens when the active node fails.",
        steps: [
          { label: "Step 1: Normal operation", text: "Node A runs the database serving clients; node B is in hot-standby mode, doing nothing but monitoring A over the network." },
          { label: "Step 2: Failure detection", text: "A crashes. B’s monitoring detects that A has stopped responding — this is the trigger for high-availability logic." },
          { label: "Step 3: Take ownership", text: "B takes ownership of A’s storage (held on a SAN visible to both nodes) and restarts the database application there." },
          { label: "Step 4: Service continues", text: "Clients reconnect and see only a brief interruption of service — redundancy converted a machine failure into a hiccup instead of an outage." }
        ],
        result: "Asymmetric clustering trades an idle machine for availability; symmetric clustering would instead have both nodes serving traffic and monitoring each other — more efficient, but it requires that more than one application be available to run."
      }
    ],
    keyTakeaways: [
      "Only general-purpose CPUs count toward ‘multiprocessor’; device-specific processors do not run processes.",
      "Multiprocessing buys throughput, but speed-up with $N$ processors is strictly less than $N$ — coordination overhead and shared-resource contention take their cut.",
      "Multicore puts cores on one chip: on-chip communication is faster and power use far lower than multiple single-core chips; the OS simply sees $N$ CPUs.",
      "The single-core era ended at the power wall ($P \\approx C V^{2} f$) and the memory wall; Moore’s-Law transistors now fund cores, not clocks.",
      "NUMA scales by giving each CPU local memory on a local bus — remote access pays a latency penalty that scheduling and placement must minimize.",
      "Clusters are loosely coupled nodes sharing storage (often via SANs) for high availability: hot-standby (asymmetric) or mutual (symmetric) monitoring; parallel clusters add a distributed lock manager.",
      "Distributed systems join autonomous, heterogeneous machines by network (LAN/WAN) with no shared memory or clock — messaging is the only glue."
    ],
    quiz: [
      {
        q: "With $N$ processors cooperating on a workload, the expected speed-up is:",
        options: ["exactly $N$", "less than $N$ because of coordination overhead and contention for shared resources", "more than $N$ due to synergy", "independent of the number of processors"],
        answer: 1,
        explanation: "Keeping cooperating parts correct plus contention for shared resources lowers the gain below the processor count — the book’s caution against naive linear-scaling expectations."
      },
      {
        q: "In a NUMA system, a CPU accessing memory local to a different CPU:",
        options: ["is impossible — address spaces are private", "pays higher latency because the access crosses the system interconnect", "is faster than local access due to caching", "causes the OS to migrate the process immediately"],
        answer: 1,
        explanation: "NUMA keeps one shared physical address space, but remote accesses must traverse the system interconnect — the NUMA penalty the OS fights with careful scheduling and memory placement."
      },
      {
        q: "Asymmetric clustering is characterized by:",
        options: ["all nodes running applications and monitoring each other", "one machine in hot-standby mode while another runs the applications", "each node running its own operating system on its own board", "nodes sharing a single physical memory bus"],
        answer: 1,
        explanation: "The hot-standby host does nothing but monitor the active server and takes over when it fails; when both hosts run applications and watch each other, that is symmetric clustering."
      },
      {
        q: "Which statement about blade servers is correct?",
        options: ["all blades share one operating system", "each blade-processor board boots independently and runs its own operating system", "blades are another name for NUMA nodes", "blades cannot be multiprocessor systems themselves"],
        answer: 1,
        explanation: "A blade chassis holds multiple processor, I/O and networking boards that are independent computers — and some blades are themselves multiprocessors, blurring the categories."
      },
      {
        q: "A system where nodes keep separate memories and clocks and communicate only by network messages is:",
        options: ["an SMP multiprocessor", "a multicore processor", "a distributed system", "a blade server chassis"],
        answer: 2,
        explanation: "Distributed systems are physically separate, possibly heterogeneous computers joined by a network — no shared memory or clock, only message passing; SMP, multicore and blades all share hardware within one machine or chassis."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.4
  {
    sectionId: "osc-ch1-s4",
    depth: [
      {
        tier: "masters",
        title: "Protection and the timer lease",
        blocks: [
          {
            kind: "para",
            body: "Dual-mode operation deserves a more precise statement than a pair of names. The hardware partitions its instruction set into **unprivileged instructions**, whose effects are confined to the executing program's own registers and memory, and **privileged instructions** — I/O, timer programming, interrupt control, halt, and mode switching itself — whose effects reach beyond one program. The **mode bit** is the single hardware state that gates the class. Together they define the kernel as a **protection domain**: a body of code and data whose integrity does not depend on the good behavior of anything outside it, and they define the **trusted computing base** as everything that must be correct for the domain to hold. The design test is sharp in both directions. Any instruction that can affect another program must be privileged, or protection fails outright; and every privilege the kernel genuinely needs must correspond to some instruction, or the kernel cannot do its work. Interrupts and traps are then the only doors into the domain — and the hardware, not the kernel, is the gatekeeper.",
          },
          {
            kind: "para",
            body: "Walk one system call in full detail, because the details are where the security lives. On x86-64, the user library places the call number and arguments in registers and executes `syscall`. The hardware — not software — then does several things atomically: it saves the return address and flags into scratch registers, raises the privilege level to kernel mode, loads the instruction pointer from a model-specific register the kernel configured at boot, and switches the stack pointer to a per-CPU kernel stack, because the user stack is neither trusted nor safely accessible at this point. Execution resumes at the kernel's entry code, which saves the remaining registers and validates the request: the call number must be in range, and every user-supplied pointer must be checked against the user portion of the address space — the kernel cannot simply dereference a user pointer, because a hostile caller would then hand it kernel addresses to read or write. Only then does it dispatch through the system-call table. The return path mirrors the entry: registers restored, `sysret` drops the mode bit, and the instruction after the call continues as if nothing had happened.",
          },
          {
            kind: "para",
            body: "Why does cooperative multitasking — programs calling a `yield` function when they are feeling polite — fail? The starvation argument: system correctness then rests on the assumption that **every** program yields within bounded time, and that assumption is unfalsifiable for binary code you did not write. One infinite loop — a bug, not even an act of malice — freezes every other program, the scheduler, and the operating system itself, because the OS never executes again; no priority scheme, however sophisticated, can act on a machine that never runs it. The timer changes the grammar of CPU ownership from gift to **lease**. Before entering user mode, the kernel loads the timer with the quantum; if the lease expires, the hardware interrupts at the next instruction boundary, custody reverts to the kernel, and it either extends the lease or evicts the tenant. Timesharing, and every interactive system since, exists because of this one asymmetry: the hardware will always interrupt a program that never yields.",
          },
          {
            kind: "para",
            body: "The control question returns one level up: can the **kernel itself** be preempted while executing a system call? In a **non-preemptive kernel**, a system call runs to completion, so a slow disk operation, a page fault, or a thousand-element copy inside the kernel blocks every higher-priority thread on that CPU — interrupts may still fire, but they cannot cause a context switch inside kernel mode. A **preemptive kernel** allows exactly that: it maintains reentrant data structures, guards them with explicit locks, and becomes preemptible at nearly every instruction boundary. Linux's long migration from voluntary preemption to `PREEMPT` and then `PREEMPT_RT` — where even spinlocks become sleeping locks — is decades of converting the kernel's implicit non-preemption assumptions into explicit, audited locking discipline. And for the systems that cannot trust even that, the **watchdog timer** — hardware that resets the machine unless software periodically proves liveness by patting it — assumes the kernel itself may hang, and converts total software failure into a reboot.",
          },
          {
            kind: "example",
            heading: "Scheduling latency, by the numbers",
            body: "An audio thread wakes when each packet arrives every $10$ ms and must begin running within $3$ ms, or the listener hears a gap. Is the machine safe? On a non-preemptive kernel it depends on luck: the thread can be dispatched only when the CPU returns from kernel mode, and a colleague's uncached disk read can spend $8$ ms executing inside a system call on another process's behalf — the deadline expires before the scheduler ever gets a vote, and no priority assignment fixes this, because the stuck component is the kernel itself. On a preemptive kernel the same wake-up preempts in-kernel execution: the worst case shrinks to the longest interval with preemption disabled — a critical section of tens of microseconds — plus context-switch cost, comfortably inside the $3$ ms budget. The lesson generalizes: real-time behavior is never about the average case, it is about the worst thing the kernel can be doing at the moment the deadline arrives.",
          },
        ],
      },
      {
        tier: "phd",
        title: "Scheduling theory and its limits",
        blocks: [
          {
            kind: "theorem",
            heading: "Optimality of EDF",
            body: "Consider a single processor and a finite collection of independent, preemptable jobs, each with a release time, an execution requirement, and a deadline. **Earliest-deadline-first** (EDF) — at every instant, execute the released unfinished job with the earliest deadline — is **optimal** for this model: if any algorithm produces a schedule in which every job meets its deadline, then EDF does too. The guarantee concerns feasibility only; EDF says nothing about response time, fairness, or any other quality measure, and optimality can fail silently outside the model — with nonpreemptable jobs, shared resources, or multiple processors.",
          },
          {
            kind: "proof",
            body: "Suppose a feasible schedule $A$ exists, and compare it with the EDF schedule $E$. Take the earliest time $t$ at which $A$ runs a job $J_L$ whose deadline is **later** than that of some available unfinished job $J_E$ — the only way $A$ can disagree with EDF's choice. Feasibility of $A$ means $J_E$ executes at some later point $u$, and since $J_L$'s deadline is no earlier than $J_E$'s, running $J_L$ at time $u$ instead still meets $J_L$'s deadline. Exchange the two executions: run $J_E$ during $t$ and $J_L$ during $u$, leaving every job's total execution unchanged. Both jobs still meet their deadlines — $J_E$ completes no later than before, and $J_L$ completes within a deadline at least as late as the one $J_E$ satisfied. Each such exchange strictly reduces the number of instants at which the schedule disagrees with EDF, and a finite schedule admits only finitely many disagreements, so iterating produces a schedule that follows EDF at every instant and misses no deadline.",
          },
          {
            kind: "theorem",
            heading: "Liu–Layland utilization bound",
            body: "For $n$ independent periodic tasks on one preemptive processor, where task $i$ has worst-case execution time $C_i$, period $T_i$, and relative deadline equal to its period, let the utilization be $$U = \\sum_{i=1}^{n} \\frac{C_i}{T_i}.$$ If $$U \\le n\\left(2^{1/n} - 1\\right),$$ then the **rate-monotonic** priority assignment — static priorities ordered inversely to period — meets every deadline of every task. The constant is the best possible for fixed priorities: task sets with utilization just above the bound exist that no fixed-priority scheduler can schedule, whereas **earliest-deadline-first** remains feasible all the way to its exact bound $U \\le 1$ when deadlines equal periods. The bound decreases in $n$ toward $\\ln 2 \\approx 0.693$: hard real-time analysis deliberately idles roughly a third of a uniprocessor.",
          },
          {
            kind: "proof",
            body: "The argument rests on the **critical instant** theorem of Liu and Layland: a task's response time is maximized when it is released simultaneously with every higher-priority task, because any delay in interference can only push work later, never earlier. It therefore suffices to analyze the fully synchronous release. Fix the lowest-priority task and count the demand its first job competes with over one of its periods; the system is schedulable exactly when every such window's demand fits inside it. The extremal case makes every inequality tight — each higher-priority task's work finishes precisely at the release of the next — which forces the task parameters into a geometric progression whose common ratio is $2^{1/n}$; summing that construction's utilization yields exactly $U = n(2^{1/n} - 1)$, and a matching infeasible instance exists just above the bound, so no fixed-priority scheme can guarantee more. EDF's stronger bound follows from optimality plus the observation that, with deadlines equal to periods, no interval's demand can exceed its length when total utilization is at most one — and by optimality, if EDF misses a deadline, every algorithm does.",
          },
          {
            kind: "open",
            heading: "Where scheduling theory runs out",
            body: "The theorems above form a complete uniprocessor story — and little of it survives contact with what real systems actually face. First, the **online** problem: release times and execution requirements are rarely known in advance, and competitive analysis is unforgiving — for total flow time, no online scheduler achieves any bounded competitive ratio on a standard-speed processor, while a modest speedup (the $(1 + \\epsilon)$-speed resource-augmentation results of Kalyanasundaram and Pruhs) restores $O(1/\\epsilon)$-competitive algorithms built on shortest-remaining-processing-time. Theory here is elegant, yet still far from a scheduler anyone would ship. Second, the **multiprocessor** problem: global EDF exhibits the **Dhall effect**, in which task sets of arbitrarily low total utilization miss deadlines under any list scheduler that greedily runs earliest-deadline jobs; partitioning tasks onto cores is itself bin-packing and NP-hard; and the strongest utilization bounds known for identical multiprocessors are dramatically weaker than the uniprocessor ones. Whether one clean, practical, optimal real-time scheduler for many cores exists — global, federated, or something not yet invented — remains a genuinely open question.",
          },
        ],
      },
    ],
    readingTime: 9,
    intro: "An operating system is interrupt-driven: after boot it does nothing but wait for events. Making that safe for untrusted user programs requires hardware support — a mode bit that separates user from kernel, privileged instructions, and a timer that guarantees the OS always regains control. Multiprogramming and timesharing are what the machinery is for.",
    objectives: [
      "Describe the bootstrap sequence and the event-driven (interrupt/trap) nature of OS operation",
      "Explain multiprogramming, the job pool, degree of multiprogramming and CPU utilization",
      "Distinguish timesharing/multitasking from multiprogramming, including time slices and interactive response",
      "Trace dual-mode transitions with the mode bit, and list which instructions are privileged",
      "Compute timer interrupt intervals from clock rate and counter size"
    ],
    concepts: [
      {
        term: "Bootstrap and event-driven operation",
        kind: "definition",
        statement: "At power-up or reboot the computer runs an initial **bootstrap program** stored in firmware (EEPROM) — it initializes all aspects of the system, locates the **operating-system kernel, and loads it into memory**. Once the kernel runs, it starts system programs as **system daemons** (on Linux the first is **systemd**) and then **sits quietly waiting for something to happen** — events are almost always signaled by an **interrupt**.",
        detail: "A **trap** (or exception) is a software-generated interrupt, caused either by an **error** (division by zero, invalid memory access) or by a specific user request for an OS service — the **system call**. With no processes to run, no devices to service and no users waiting, the kernel simply idles until hardware or software raises an event."
      },
      {
        term: "Multiprogramming",
        kind: "definition",
        statement: "**Multiprogramming** increases CPU utilization by keeping **several processes in memory simultaneously** and switching the CPU to another process whenever the current one must wait (for I/O, say). As long as at least one process needs to execute, **the CPU is never idle**.",
        detail: "The OS picks from a **job pool** of waiting programs when deciding what to load into memory; the number of processes resident in memory is the **degree of multiprogramming**. Motivation: a single program cannot in general keep the CPU or its devices busy — the book’s analogy is a lawyer who, with enough clients, is never idle while one case waits for trial. Memory management, CPU scheduling, synchronization and file systems all become mandatory once multiprogramming begins."
      },
      {
        term: "Timesharing (multitasking)",
        kind: "definition",
        statement: "**Timesharing** is the logical extension of multiprogramming in which switches occur **frequently**, giving each user or process a **time slice** of the CPU and producing fast **interactive response**. Interactive I/O runs at ‘people speeds’ — seven characters per second is fast typing for humans but glacial for a CPU — so the OS switches rather than idles.",
        detail: "A common method for ensuring reasonable response time is **virtual memory**, letting processes execute even when not fully resident and abstracting memory into a large, uniform array (Chapters 9–10). The book uses the term *multitasking* for this design; the mechanism demands CPU scheduling (Chapter 5), and every chapter afterward on files, protection, synchronization and deadlock services this basic organization."
      },
      {
        term: "Dual-mode operation",
        kind: "definition",
        statement: "To ensure an incorrect or malicious program cannot harm other programs or the OS, hardware distinguishes **user mode** from **kernel mode** (also called supervisor, system or privileged mode). A **mode bit** — **kernel = 0, user = 1** — records the current mode. The system boots in kernel mode, switches to user mode before passing control to a user program, and flips to kernel mode on **every trap or interrupt**.",
        detail: "The mode transitions: user process executing → system call → trap (bit set to 0, kernel executes the call) → return (bit set to 1, user resumes). At boot the hardware starts in kernel mode and the OS starts user applications in user mode, so the OS always gains control in kernel mode. CPUs extend the idea beyond two modes: Intel processors have four **protection rings** (ring 0 kernel, ring 3 user, rings 1–2 rarely used), ARMv8 systems have seven modes, and virtualization-capable CPUs add a **VMM mode** with privileges between user and kernel."
      },
      {
        term: "Privileged instructions",
        kind: "definition",
        statement: "Instructions that may cause harm are designated **privileged** and execute **only in kernel mode** — if attempted in user mode, the hardware does not execute them but treats them as **illegal and traps them to the operating system**. The canonical examples: switching to kernel mode, **I/O control**, **timer management**, and **interrupt management** (turning interrupts off).",
        detail: "This is the enforcement half of dual-mode operation: the kernel can touch devices, halt the CPU and reprogram the timer; a user program cannot. Errors that violate modes — illegal instructions, accesses outside the user’s address space — trap to the OS, which may terminate the program abnormally with an error message and possibly a dump of the program’s memory to a file for later analysis."
      },
      {
        term: "The system call as a mode switch",
        kind: "method",
        statement: "A **system call** is the method a process uses to request action by the OS: usually a **trap to a specific location in the interrupt vector**, executed by a generic trap instruction or a dedicated **syscall** instruction. The hardware treats it as a **software interrupt** — control passes through the vector to a service routine, the mode bit is set to kernel, the kernel examines the call and parameters, verifies they are legal, executes the request, and returns to the instruction following the call.",
        detail: "Note carefully: the **process itself** makes the transition — a system call is a **mode switch within the calling process**, not a separate process. Parameters travel in registers, on the stack, or in a memory block whose address is passed in registers. Windows, UNIX and Linux all take advantage of dual-mode protection this way."
      },
      {
        term: "The timer",
        kind: "definition",
        statement: "The OS must never lose the CPU to a user program stuck in an infinite loop, so hardware provides a **timer** that can be set to interrupt after a specified period — fixed (for example, $1/60$ second) or variable. A variable timer is implemented by a **fixed-rate clock and a counter** the OS loads; each tick decrements the counter, and when it **reaches 0 an interrupt occurs**. Setting the timer is a **privileged instruction**.",
        detail: "A 10-bit counter driven by a 1-millisecond clock allows interrupts at intervals from 1 ms to $2^{10} = 1024$ ms, in steps of 1 ms. Before turning control over to a user program, the OS ensures the timer is set — if it fires, control transfers automatically back to the OS, which may grant more time or treat the program as stuck. On Linux the kernel parameter **HZ** sets the interrupt frequency (HZ = 250 means 250 interrupts per second, one every 4 ms), and the variable **jiffies** counts timer interrupts since boot."
      }
    ],
    examples: [
      {
        title: "A system call from user to kernel and back",
        problem: "A C program calls read(fd, buf, 4096). Trace the complete mode transition.",
        steps: [
          { label: "Step 1: User mode", text: "The process executes in user mode (mode bit = 1) when the run-time library routine places the arguments in registers and issues the trap instruction carrying read’s system-call number." },
          { label: "Step 2: The trap", text: "The hardware treats the trap as a software interrupt: the mode bit flips to 0 and control passes through the interrupt vector to the system-call service routine." },
          { label: "Step 3: Kernel-side validation", text: "The kernel examines the interrupting instruction to determine which call occurred, then verifies the parameters — is fd a valid open file? Is buf a legal address in this process’s space? Is the length sane?" },
          { label: "Step 4: Execution", text: "The kernel performs the I/O — the request may block the process until data arrives, in which case the scheduler runs another process meanwhile." },
          { label: "Step 5: Return", text: "Results and status return to the caller, the mode bit is set back to 1, and execution resumes at the instruction following the system call — same process throughout." }
        ],
        result: "One trap, two mode transitions, zero process switches: the system call is the controlled doorway from user code into kernel code."
      },
      {
        title: "Programming the timer",
        problem: "A system needs timer interrupts every 250 ms, and a second configuration needs intervals up to 2 seconds. The hardware is a 1-millisecond clock with a 10-bit counter. What counter values work, and what are the limits?",
        steps: [
          { label: "Step 1: The mechanism", text: "A fixed-rate clock ticks every 1 ms; each tick decrements the counter; zero triggers the interrupt. So the interval equals the initial counter value in milliseconds." },
          { label: "Step 2: The 250 ms requirement", text: "Load the counter with 250 — it reaches 0 after 250 ticks, i.e., 250 ms." },
          { label: "Step 3: The range of the 10-bit counter", text: "Ten bits hold values from 1 to $2^{10} = 1024$, so intervals run from 1 ms to 1024 ms in 1-ms steps — 250 ms fits comfortably." },
          { label: "Step 4: The 2-second requirement", text: "2000 ms exceeds $2^{10}$, so a 10-bit counter cannot produce it directly: the OS needs a larger counter (more bits) or chains two timer interrupts to reach 2 seconds." }
        ],
        result: "The 10-bit, 1-ms timer spans exactly 1–1024 ms; anything longer requires wider hardware or software assistance — and only the kernel, via the privileged instruction, may load the counter at all."
      }
    ],
    keyTakeaways: [
      "After bootstrap loads the kernel and starts daemons (systemd on Linux), the OS is purely event-driven — interrupts and traps are the only things that wake it.",
      "Multiprogramming keeps several processes resident so the CPU never idles; the job pool feeds memory and the degree of multiprogramming sets how many run.",
      "Timesharing switches so frequently that interaction feels instant; virtual memory extends usable memory to keep response reasonable.",
      "The mode bit (kernel = 0, user = 1) plus privileged instructions (I/O, timer, interrupt control, mode switch) are the hardware foundation of protection.",
      "A system call is a trap — a mode switch inside the calling process, not a new process: parameters in registers, stack, or a memory block.",
      "The timer guarantees control returns: with a 1-ms clock, a 10-bit counter yields intervals from 1 ms to $2^{10} = 1024$ ms; loading it is privileged."
    ],
    quiz: [
      {
        q: "The mode bit reads 0 while code executes. Which mode and privilege apply?",
        options: ["user mode — privileged instructions trap", "kernel mode — privileged instructions may execute", "user mode — no instructions are restricted", "kernel mode — interrupts are disabled"],
        answer: 1,
        explanation: "The convention assigns 0 to kernel (supervisor) mode: there the hardware permits privileged instructions; in user mode (bit = 1) attempting one traps to the OS."
      },
      {
        q: "Which of these is NOT a privileged instruction?",
        options: ["set the value of the timer", "turn off interrupts", "read the clock", "switch from user to kernel mode"],
        answer: 2,
        explanation: "Reading the clock harms nothing, so it stays unprivileged; setting the timer, disabling interrupts and performing the mode switch all let a program seize or blind the machine, so only the kernel may issue them."
      },
      {
        q: "The best description of a system call is:",
        options: ["a new process created by the kernel to service the request", "a trap that switches the calling process from user mode to kernel mode", "a hardware interrupt raised by a device controller", "a message sent from one process to a daemon"],
        answer: 1,
        explanation: "The system call runs inside the calling process: the trap instruction flips the mode bit, dispatches through the interrupt vector to the OS’s service routine, and returns to the very next instruction — no second process exists."
      },
      {
        q: "The timer’s central purpose is to:",
        options: ["timestamp file modifications", "guarantee the OS regains control of the CPU from user programs", "synchronize multiprocessor clocks", "measure memory access latency"],
        answer: 1,
        explanation: "Without a timer a program stuck in an infinite loop would never return control; the timer interrupt fires and hands the CPU back, which is also exactly what makes timesharing possible."
      },
      {
        q: "Multiprogramming exists primarily to:",
        options: ["let several users share one keyboard", "increase CPU utilization by switching to another process when one waits", "protect memory with the mode bit", "speed up individual instructions"],
        answer: 1,
        explanation: "A single program cannot keep CPU and devices busy; by keeping several processes in memory and switching on waits, the CPU is never idle while runnable work exists."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.5
  {
    sectionId: "osc-ch1-s5",
    depth: [
      {
        tier: "masters",
        title: "Kernel architectures and virtualization",
        blocks: [
          {
            kind: "para",
            body: "The chapter gestures at kernel structure; here are the architectures by name. A **monolithic kernel** — Linux and the traditional UNIX design — keeps the whole system in one privileged address space: scheduler, file systems, networking, and drivers cooperating through ordinary function calls. The design is fast, because no boundary is ever crossed, and structurally undisciplined, because any subsystem can corrupt any other. A **microkernel** — Mach, QNX, MINIX 3, seL4 — demotes everything but inter-process communication, basic scheduling, and memory mapping to **user-space servers**: a file access becomes a message to a server process, so a buggy or malicious driver crashes only itself and can be restarted like any failed process. The cost is the boundary itself — what was a function call becomes a trap, two context switches, and a message copy. **Hybrid kernels** — Windows NT, Apple's XNU — adopt the microkernel's organization and the monolith's performance: NT's executive and XNU's BSD layer run in kernel mode atop a Mach-derived core, giving most of the call speed of a monolith with some of the layering of a microkernel.",
          },
          {
            kind: "derivation",
            heading: "The price of a message",
            body: "Quantify the microkernel penalty. A local procedure call costs a handful of instructions — a few nanoseconds. A cross-address-space message on the same machine costs, at minimum, a trap into the kernel, a thread switch to the server, and the same pair for the reply: $$C_{\\text{IPC}} \\;\\ge\\; 2\\,C_{\\text{trap}} + 2\\,C_{\\text{switch}} + 2\\,C_{\\text{copy}}.$$ With 1990s measurements — a trap near $1\\,\\mu\\text{s}$ with its cache-cold register traffic, a thread switch of the same order, two message copies — one message costs tens of microseconds against a call's nanoseconds: a gap of four orders of magnitude, multiplied again for every additional server an operation must traverse. This arithmetic is why first-generation microkernels such as Mach were abandoned as slow, and it defines the research program that answered them. The L4 family attacked each term — copies eliminated by mapping message pages instead of copying them, the fast path reduced to a few hundred instructions, switching folded into the trap — until a message cost a small multiple of a system call. The general lesson: boundary crossings, not abstractions, are the tax; measure the crossing, then attack every term.",
          },
          {
            kind: "para",
            body: "Two further architectures calibrate the extremes. The **layered** approach — THE operating system of Dijkstra (1968), the founding artifact of structured system design — orders the kernel into strict levels where level $n$ may call only level $n - 1$, so that each layer can be verified against the services of the layer beneath. It is beloved of provers and avoided by builders, for the same reason: real kernels admit no clean total order — the file system needs memory and I/O; I/O needs memory; memory's page faults need the file system — and every boundary crossed on the way down pays the message tax again. The **modular** approach — Solaris, and Linux's **loadable kernel modules** — keeps the monolithic address space but late-binds the components: `insmod` links object code into the running kernel, resolving its symbols at load time, so a driver or file system can be added to a live machine without a reboot. It buys microkernel flexibility at function-call cost, with the honest trade that a loaded module runs at full kernel privilege — protection deferred to code review rather than enforced by hardware.",
          },
          {
            kind: "para",
            body: "Architecture choice is, at bottom, a decision about the **trusted computing base** — the set of all components on whose correct behavior the system's guarantees depend. In a monolithic kernel the TCB is the entire kernel image, drivers included, and empirical studies of Windows and Linux crashes have repeatedly attributed a majority of kernel failures to third-party drivers. A microkernel shrinks the TCB toward its IPC core — seL4's is roughly ten thousand lines of C — at the price of running services as swappable, killable, slower user processes. Virtualization complicates the accounting further: in a hosted, type-2 arrangement the host operating system lies inside the TCB of every guest, while a bare-metal, type-1 hypervisor such as ESX or Xen replaces it with a far smaller dedicated core. The TCB is thus the quantity that monolithic speed, microkernel isolation, and hypervisor design are all trading against one another. The question an architect asks is never only whether a design is fast, but what must be *correct* — hardware, kernel, drivers, hypervisor, compiler — for the design's guarantees to hold.",
          },
          {
            kind: "theorem",
            heading: "Popek–Goldberg",
            body: "A computer can support an effective **virtual machine monitor** exactly when its set of **sensitive instructions** — the instructions whose behavior depends on, or alters, the processor's mode of operation or its machine configuration — is a subset of its set of **privileged instructions**, those that trap when executed in unprivileged mode. An effective VMM is one delivering the three defining properties: **equivalence**, meaning any program under the VMM behaves, apart from timing, as it would on the bare machine; **resource control**, meaning the VMM has complete authority over the hardware's resources and no guest can affect them against its will; and **efficiency**, meaning a statistically dominant fraction of guest instructions execute directly on the hardware, without traps or emulation.",
          },
          {
            kind: "proof",
            body: "Run the guest kernel with its privilege reduced: the VMM keeps true kernel mode for itself and arranges to receive every trap. When the guest executes a sensitive instruction, its unprivileged execution traps, and the monitor — which owns the trap vector — reads the offending instruction and the state it meant to change, then **emulates** it: the VMM updates its shadow of the machine, the page tables, interrupt masks and device models, so the guest observes exactly the effect its instruction would have had on bare hardware. Equivalence holds because the guest can reach real machine state only through sensitive instructions, and every sensitive instruction traps — every divergence is funneled through the monitor, which corrects it. Resource control holds for the same reason: no real state changes without passing through the monitor. Efficiency holds because ordinary instructions — arithmetic, loads, stores, branches — are neither sensitive nor privileged and need no intervention at all. Conversely, if some sensitive instruction is unprivileged — x86's `sgdt`, which revealed a privileged table's address without trapping, was the canonical offender — then a guest can observe or alter machine state invisibly, equivalence fails, and trap-and-emulate cannot work; such architectures need hardware virtualization assistance — Intel VT-x, AMD SVM — to force those instructions into the monitor.",
          },
        ],
      },
      {
        tier: "phd",
        title: "Verified kernels and the leaky contract",
        blocks: [
          {
            kind: "para",
            body: "Formal verification entered operating systems through the smallest possible target. Klein and colleagues (SOSP 2009) presented **seL4**, a microkernel with a machine-checked **functional correctness** proof: an Isabelle/HOL theorem that the kernel's C implementation refines its abstract specification — that the code does exactly what the high-level design says, for every input and every interleaving. The proof dwarfed the artifact: on the order of ten thousand lemmas across a couple of hundred thousand lines of script, produced by a team that spent years proving what a few engineers had written in months. Stating the guarantee's edges is the interesting part. Proven: functional correctness, and later properties layered on it, such as integrity and authority confinement. Not proven: timing — no execution-time guarantees follow from correctness — and the trusted computing base did not shrink to the kernel alone, because the theorem is conditional on the C semantics, the compiler, the hardware, and the proof checker itself. A verified kernel is a verified link, not a verified chain.",
          },
          {
            kind: "application",
            heading: "CompCert: trusting the compiler",
            body: "The largest hole the seL4 proof left open was the compiler. **CompCert** — Xavier Leroy's verified C compiler, developed in Coq since 2005 — carries a machine-checked theorem of **semantic preservation**: the generated assembly computes exactly what the source language's formal semantics prescribe, for every execution those semantics define. It was the first realistic optimizing compiler — it schedules instructions, allocates registers, rewrites loops — to carry such a proof, overturning the folk belief that verified compilation at that scale was impossible. For operating systems the consequence is a shorter chain of trust: seL4's follow-up work pushed verification down to the binary, showing the compiled machine code refines the kernel specification — the compiler leaves the trusted computing base for verified builds — and CompCert supplies the same guarantee for applications. The template generalizes. Verification composes: the kernel is verified against the language semantics, the compiler against the same semantics, and each proof makes its neighbors' assumptions true — which is precisely how a trustworthy stack is assembled in practice.",
          },
          {
            kind: "para",
            body: "Meltdown and Spectre (2018) are filed under security, but they are operating-system-theory results: they show that the user/kernel contract itself leaks. The hardware kept its promise at the instruction-set level — user mode could not read kernel memory — but speculative execution transiently loaded kernel lines into the cache before checking privilege, then rolled back the architectural state while leaving the **microarchitectural** state behind: which lines are cached, and therefore how fast a later access answers. A user program with a timer is a machine that reads the cache, so a transient, supposedly invisible privilege violation became a durable channel into kernel secrets, and Spectre went further, poisoning branch predictors to manufacture the transient window at will. The response — kernel page-table isolation on every context switch, at a measurable cost in cache performance — concedes the deep point: the protection boundary is defined by microarchitecture, not only by the instruction set, and any account of kernel isolation that ignores timing side channels is incomplete. The dual-mode model of this chapter is an approximation that hardware can violate beneath the proofs.",
          },
          {
            kind: "application",
            heading: "Capabilities in silicon",
            body: "Access-control lists ask who may touch this object; **capability systems** invert the question. A capability is an unforgeable token naming an object and a set of rights, and possession is permission — no ambient authority, no global namespace to police. Operating systems have always carried the idea in file descriptors: a descriptor is a capability for exactly one file. **Capsicum** (Watson and colleagues, FreeBSD) built a full capability mode on that insight, letting a program voluntarily shed the ambient authority of the UNIX environment and run sandboxed with only the descriptors it was handed — the design behind Chromium's and macOS's sandboxing layers. The research endgame is **CHERI**: 128-bit pointers that carry bounds and permissions in hardware, making every pointer a capability and giving spatial memory safety to C at near-native speed, with enforcement in silicon rather than in checks the optimizer can elide. Arm's Morello prototype and the pure-capability CHERI UNIX port run real software with the memory-corruption bug class substantially narrowed — the nearest thing to an answer to the question this chapter's protection discussion begs: what if hardware offered granularity finer than two modes?",
          },
          {
            kind: "para",
            body: "The third frontier puts a vault inside the attacker's own machine. **Intel SGX** creates **enclaves** — memory regions encrypted on the fly and inaccessible to everything else on the chip, including the operating system, the hypervisor, and even physical probing of DRAM. The OS still schedules and services the enclave, but it cannot read it; and through cryptographic **attestation**, a remote party can verify exactly which code runs inside before sending secrets. **ARM TrustZone** takes the coarser, earlier route: the processor splits into a **secure world** and a **normal world**, each with its own operating system — a small trusted OS beside the main kernel — and hardware gates every world's access to memory and peripherals; the fingerprint matcher and DRM keys in a phone live in the secure world while everything user-facing runs normally. The research lesson cuts both ways. SGX demonstrates that the operating system can itself be the adversary a defense must survive — a complete inversion of this chapter's trust model — and the long catalog of enclave attacks, from cache side channels to voltage glitching to transient-execution leaks, demonstrates again that the boundary lives in microarchitecture as much as in architecture.",
          },
        ],
      },
    ],
    readingTime: 12,
    intro: "The chapter closes with the OS seen as a manager of four resource classes, a defender (protection and security), a multiplicand of hardware (virtualization), and — under the hood — a heavy user of plain data structures: lists, queues, trees, hash maps and bitmaps. Finally it surveys the environments operating systems actually live in, and the free and open-source movement that makes their source code studyable.",
    objectives: [
      "Enumerate the OS’s responsibilities for process, memory, file, storage and I/O management",
      "Distinguish protection from security, and explain user IDs, groups and privilege escalation",
      "Define virtualization and contrast it with emulation",
      "Pick the right kernel data structure — list, stack, queue, tree, hash map or bitmap — with correct complexity",
      "Characterize client–server, peer-to-peer, cloud, embedded, real-time and mobile environments, and differentiate free software from open source (GPL vs BSD licensing)"
    ],
    concepts: [
      {
        term: "Resource management: process, memory, file and I/O",
        kind: "definition",
        statement: "As a **resource manager** the OS manages four big classes. **Process management** (a **process** is a program in execution — the *active* unit of work, where a program is passive): create and delete user and system processes, schedule processes and threads, suspend and resume, and provide synchronization and communication mechanisms. **Memory management**: track which parts of memory are used and by whom, allocate and deallocate, and decide what moves in and out of memory. **File-system management**: create/delete files and directories, map files onto mass storage, back up to stable media. **I/O and mass-storage management**: mount and unmount, free-space management, storage allocation, disk scheduling, partitioning and protection — with the **I/O subsystem** (buffering, caching, spooling, a general device-driver interface) hiding device peculiarities from users.",
        detail: "For the CPU to touch disk data, those data must first reach main memory through CPU-generated I/O calls; instructions must be in memory to execute. **Caching** is the recurring principle throughout: information is copied to a faster level on the assumption it will soon be needed again, so one datum can exist simultaneously on disk, in memory, in cache and in a register — and in multiprocessors, **cache coherency** problems arise when each CPU holds its own copy and an update in one must reach them all (in distributed systems, file replicas raise the same issue)."
      },
      {
        term: "Protection and security",
        kind: "definition",
        statement: "**Protection** is any mechanism for **controlling the access of processes or users to the resources** defined by a computer system — it must supply means both to specify and to enforce controls. **Security** defends the system from **external and internal attacks**: viruses and worms, denial-of-service, identity theft, theft of service. The system distinguishes users by unique **user identifiers (user IDs** — Windows calls them security IDs, SIDs) attached to every one of the user’s processes and threads, and by **group IDs** for sets of users.",
        detail: "Sometimes a user must **escalate privileges** to gain extra permission for an activity — on UNIX the **setuid** attribute makes a program run with the file owner’s user ID rather than the caller’s: the process keeps this effective UID until it gives up the privileges or terminates. Adequate protection does not imply security: a user whose authentication is stolen can be impersonated even while file and memory protection work perfectly — a chain is only as strong as its weakest link."
      },
      {
        term: "Virtualization and the VMM",
        kind: "definition",
        statement: "**Virtualization** abstracts the hardware of a single computer — CPU, memory, disks, network cards — into **several different execution environments**, creating the illusion that each environment runs on its own **private computer**; a user can switch among guest operating systems the way one switches among processes. A **virtual machine manager (VMM)** runs the guests, manages their resource use and protects each guest from the others.",
        detail: "Contrast **emulation**, which simulates a *different* CPU type in software — Apple’s Rosetta let PowerPC applications run on Intel x86 — at a heavy price: every source instruction translates into several target instructions, so emulated code runs much slower when source and target have similar performance. Virtualization instead runs OSes natively compiled for the host CPU. It began on IBM mainframes and reached x86 through VMware; in modern data centers, VMMs like VMware ESX and Citrix XenServer no longer run *on* a host OS — they **are** the host OS. Cloud computing builds directly on this foundation."
      },
      {
        term: "Lists, stacks and queues",
        kind: "definition",
        statement: "After arrays, **lists** are the kernel’s workhorse: a **singly linked list** points each item to its successor, a **doubly linked** list also to its predecessor, and a **circularly linked** list wraps the last item back to the first. Lists accommodate varying-size items and cheap insertion/deletion, but retrieving a specified item is **linear — $O(n)$**. A **stack** (LIFO: **push/pop**) frames kernel function calls — parameters, local variables and return addresses; a **queue** (FIFO) orders waiting work, like printer jobs or tasks waiting for an available CPU.",
        detail: "Linux implements list primitives in **<linux/list.h>**, used throughout the kernel source, and provides its queue as **kfifo** (in kfifo.c). Arrays still serve where direct indexing matters — main memory itself is an array of bytes addressed as ‘item number $\\times$ item size’."
      },
      {
        term: "Trees",
        kind: "definition",
        statement: "A **tree** represents hierarchy through parent–child links; in a **binary search tree** each parent has at most two children with the ordering $\\text{left} \\leq \\text{parent} \\leq \\text{right}$. An unbalanced BST can degenerate toward a chain — worst case $O(n)$ — but a **balanced** tree of $n$ items has at most $\\lg n$ levels, guaranteeing $O(\\lg n)$ search.",
        detail: "Linux uses a balanced **red-black tree** as part of its CPU-scheduling algorithm (the Completely Fair Scheduler, Section 5.7.1), with the implementation living in **<linux/rbtree.h>** — a rare, concrete case of a data-structure choice being visible in scheduling behavior."
      },
      {
        term: "Hash functions and maps",
        kind: "definition",
        statement: "A **hash function** takes data as input, performs a numeric operation, and returns a value used as an index into a table — retrieval can be as good as **$O(1)$** versus $O(n)$ for scanning a list. A **hash map** associates **[key:value] pairs**: hash the key, fetch the value. When two distinct inputs hash to the same slot — a **collision** — a linked list of colliding items hangs off that location, and the more collisions, the less efficient the hash.",
        detail: "The book’s example: a user name maps to a password; at login the entered user name is hashed, the stored password is retrieved from that hash-map slot, and the two passwords are compared. Hash functions are used extensively throughout operating systems precisely because of the constant-time promise."
      },
      {
        term: "Bitmaps",
        kind: "definition",
        statement: "A **bitmap** is a string of $n$ binary digits representing the status of $n$ items: the value of the $i$-th bit tracks the $i$-th resource — 0 might mean available, 1 unavailable. In the book’s example bitmap **001011101**, resources 2, 4, 5, 6 and 8 are unavailable while 0, 1, 3 and 7 remain available.",
        detail: "Bitmaps shine on space efficiency: one bit per resource is $8\\times$ smaller than an eight-bit Boolean per resource, which matters when tracking, say, every block on a multi-terabyte disk. Disk drives — a medium-sized drive divided into several thousand blocks — are the canonical use: the bitmap records the availability of each block."
      },
      {
        term: "Computing environments",
        kind: "insight",
        statement: "The major environments: **traditional** (desktop time-sharing, now rare as such), **client–server** (**compute servers** execute actions and return results; **file servers** provide a file-system interface for create/update/read/delete), **peer-to-peer** (all nodes are peers acting as client or server; services located via a centralized lookup service or by broadcasting a discovery request), **cloud** (computing, storage and applications delivered as a service across a network — **public, private or hybrid**; **SaaS** = applications via the Internet, **PaaS** = a software stack ready for application use, **IaaS** = servers or storage over the Internet), **embedded** (dedicated tasks; some run standard OSes, some special-purpose OSes, some are ASICs with no OS at all), **real-time** (rigid time constraints; the correct result delivered late is a failure) and **mobile** (touch-first, battery-bound handhelds dominated by Apple’s iOS and Google’s Android).",
        detail: "P2P history: Napster used a centralized index of peers’ files (shut down in 2001 for copyright infringement) while Gnutella broadcast discovery requests; Skype hybridizes both with VoIP. Cloud example: Amazon EC2 — thousands of servers, millions of virtual machines, petabytes of storage, pay-per-use. A real-time system functions correctly **only if it returns the correct result within its time constraints** — a robot arm told to halt after smashing the car is a failed system. Mobile devices trade power for capability: a smartphone may top out at 256 GB of storage where a desktop offers 8 TB."
      },
      {
        term: "Free and open-source operating systems",
        kind: "definition",
        statement: "**Free software** is licensed to allow no-cost use, redistribution and modification; **open-source software** makes source available but does not necessarily grant those licensing freedoms — so **all free software is open source, but some open-source software is not free**. The **GNU GPL** is a **copyleft** license: source must be distributed with any binaries, and all copies — including modified versions — must carry the same license; the permissive **BSD license** instead allows binary-only redistribution of derivatives.",
        detail: "History: Stallman began **GNU** (‘GNU’s Not Unix’) in 1984, published the GNU Manifesto and founded the Free Software Foundation in 1985; GNU tools were ready but the kernel was not — until Linus Torvalds released a UNIX-like kernel in 1991 and relicensed it under the GPL in 1992, yielding **GNU/Linux** with hundreds of distributions (Red Hat, SUSE, Fedora, Debian, Slackware, Ubuntu). **BSD UNIX** descends from 1978 AT&T UNIX; after a lawsuit slowed it, the fully open 4.4BSD-lite (1994) spawned FreeBSD, NetBSD, OpenBSD and DragonflyBSD — and **Darwin**, the open-source core kernel component of macOS, is BSD-based. Economics: open-source firms earn revenue through **support contracts and hardware** (Red Hat), and the ‘many eyes’ argument holds that bugs are found and fixed faster when everyone can read the code."
      }
    ],
    examples: [
      {
        title: "Sizing a disk-block bitmap",
        problem: "A $1\\,\\text{TB}$ disk drive is managed in $4\\,\\text{KB}$ blocks. How much memory does an availability bitmap need, and how does it compare with a byte-per-block table?",
        steps: [
          { label: "Step 1: Count the blocks", text: "Block count is $\\frac{2^{40}}{2^{12}} = 2^{28}$ — about 268 million blocks." },
          { label: "Step 2: One bit per block", text: "The bitmap needs $2^{28}$ bits, one per block: 1 for unavailable, 0 for available." },
          { label: "Step 3: Convert to bytes", text: "$2^{28}$ bits is $\\frac{2^{28}}{8} = 2^{25}$ bytes $= 32\\,\\text{MB}$ — the bitmap’s memory cost." },
          { label: "Step 4: Compare with a byte table", text: "An eight-bit Boolean per block would take $2^{28}$ bytes $= 256\\,\\text{MB}$ — $8\\times$ the bitmap’s size." },
          { label: "Step 5: The takeaway", text: "Checking availability is also fast: bit $i$ of the bitmap directly answers ‘is block $i$ free?’ — constant-time per block." }
        ],
        result: "A 32 MB bitmap tracks 268 million blocks — the space efficiency that makes bitmaps the default structure for disk free-space and resource-availability tracking."
      },
      {
        title: "One datum, four copies: migration and coherency",
        problem: "An integer A is stored in file B on hard disk and must be incremented. Trace the data’s journey, and identify where coherency trouble begins.",
        steps: [
          { label: "Step 1: Disk to memory", text: "An I/O operation copies the disk block containing A into main memory — copy 2 now exists." },
          { label: "Step 2: Memory to cache", text: "The value is copied into cache — copy 3." },
          { label: "Step 3: Cache to register", text: "A load brings A into an internal CPU register — copy 4 — where the increment actually executes." },
          { label: "Step 4: Temporary divergence", text: "Until the register value is written back down the chain, the copies of A disagree across levels — correct within one process, dangerous if several processes (or, in a multiprocessor, several CPUs’ caches) hold copies simultaneously." },
          { label: "Step 5: Coherency", text: "In multiprocessor systems every CPU has a local cache; an update to A in one cache must be reflected in all others — the **cache coherency** problem, usually handled in hardware below the OS." }
        ],
        result: "Caching multiplies data; the OS (and hardware) must keep the copies consistent — the same problem reappears for file replicas in distributed systems."
      },
      {
        title: "A setuid privilege escalation",
        problem: "An ordinary user needs to change her password, which requires writing to the system password file owned by root. How does setuid make this safe-ish?",
        steps: [
          { label: "Step 1: The obstacle", text: "The password file is protected — the user’s processes run with her user ID and cannot write it directly, and giving everyone write access would be catastrophic." },
          { label: "Step 2: The setuid attribute", text: "The password-changing program is owned by root and carries the setuid attribute; the OS attaches the file owner’s user ID to processes running it." },
          { label: "Step 3: Elevated execution", text: "The process runs with root’s effective UID — enough privilege to update the password file — but only within the logic of that audited program." },
          { label: "Step 4: Relinquishing", text: "The extra privileges vanish when the process turns them off or terminates; nothing else the user runs gains them." }
        ],
        result: "setuid is the classic privilege-escalation tool: narrowly-scoped, owner-borrowed rights instead of blanket permissions — and a favorite target of attackers when setuid programs contain bugs."
      }
    ],
    keyTakeaways: [
      "The OS manages processes (the active units), memory, files and mass storage, and I/O — each class with a crisp list of responsibilities, from scheduling to free-space management to spooling.",
      "Caching runs through everything: one datum lives at several hierarchy levels at once, so coherency — per-CPU cache and, in distributed systems, file replicas — is a standing problem.",
      "Protection controls internal resource access; security defends against attacks; users are identified by user IDs and groups, with setuid as the standard escalation mechanism.",
      "Virtualization multiplies one machine into many guests under a VMM — distinct from emulation, which translates between CPU architectures.",
      "Kernel data-structure economics: lists $O(n)$, balanced trees (Linux’s red-black CFS scheduler) $O(\\lg n)$, hash maps $O(1)$, bitmaps one bit per resource ($8\\times$ smaller than bytes).",
      "Environments: client–server splits compute from file servers; P2P locates services by lookup or discovery; cloud tiers into SaaS, PaaS and IaaS; real-time systems fail when deadlines slip; iOS and Android own mobile.",
      "Free software ≠ open source necessarily: GPL copyleft forces source and license inheritance; BSD permits binary-only derivatives — GNU/Linux (Torvalds 1991, GPL 1992) and the BSD family are the landmark systems."
    ],
    quiz: [
      {
        q: "Which statement about free and open-source software is correct?",
        options: ["open-source software is always free software", "all free software is open source, but some open-source software is not free", "the BSD license is a copyleft license", "free software means zero-price software only"],
        answer: 1,
        explanation: "Free software licenses grant no-cost use, redistribution and modification — open source only guarantees source availability, so the free set sits inside the open-source set; BSD is the permissive counter-example to GPL copyleft."
      },
      {
        q: "A balanced binary search tree holding $n$ items has at most how many levels?",
        options: ["$n$ levels", "$2n$ levels", "$\\lg n$ levels", "$n \\lg n$ levels"],
        answer: 2,
        explanation: "Balance is what bounds the height: at most $\\lg n$ levels, which is exactly why search, insert and delete stay $O(\\lg n)$ instead of degrading toward the chain-like $O(n)$ worst case."
      },
      {
        q: "The setuid attribute on a UNIX program causes it to:",
        options: ["run with the caller’s group ID only", "run with the user ID of the file’s owner rather than the caller’s", "immediately escalate the entire login session", "run only at boot time"],
        answer: 1,
        explanation: "setuid borrows the owner’s identity — root for the password utility — until the process terminates or relinquishes the privilege; it is targeted escalation, not a blanket grant to the user."
      },
      {
        q: "In cloud terminology, ‘a software stack ready for application use via the Internet, such as a database server’ is:",
        options: ["SaaS — software as a service", "PaaS — platform as a service", "IaaS — infrastructure as a service", "a private cloud"],
        answer: 1,
        explanation: "PaaS delivers a ready platform on which applications are deployed; SaaS delivers the applications themselves and IaaS delivers raw servers and storage — public/private/hybrid is a separate, orthogonal axis."
      },
      {
        q: "A real-time system is distinguished by the fact that it:",
        options: ["runs faster than a general-purpose system", "must return correct results within well-defined time constraints or it fails", "never uses interrupts", "requires multiple processors"],
        answer: 1,
        explanation: "The correctness criterion includes the deadline: processing must be done within the defined constraints — speed is merely desirable on a desktop, mandatory here."
      }
    ]
  }
]
