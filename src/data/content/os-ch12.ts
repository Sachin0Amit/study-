import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 12: I/O Systems (Sections 12.1 – 12.7)
// Master study content.
// ============================================================================

export const osCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: "osc-ch12-s1",
    readingTime: 11,
    intro: "The two main jobs of a computer are I/O and computing — and often the computing is merely incidental to the I/O. Before the operating system can manage devices it must confront the hardware they present: ports and buses, device controllers with small register sets, and the three ways the CPU can talk to them — busy-wait polling, interrupts, and direct memory access. Everything the kernel’s I/O subsystem does is shaped by these mechanisms.",
    objectives: [
      "Describe ports, buses (especially PCIe lanes and generations), daisy chains and device controllers",
      "Explain memory-mapped I/O and the four controller registers (data-in, data-out, status, control)",
      "Trace the busy-bit / command-ready handshaking protocol and analyze the cost of polling",
      "Explain the interrupt mechanism: request lines, vectors, chaining, priorities, masking, and traps",
      "Describe DMA: command blocks, the request/acknowledge handshake, cycle stealing and scatter-gather"
    ],
    concepts: [
      {
        term: "Ports, buses and daisy chains",
        kind: "definition",
        statement: "A device communicates with the computer through a connection point, or **port**; if multiple devices share a common set of wires, the connection is a **bus** — a set of wires plus a rigidly defined protocol of messages conveyed as voltage patterns with defined timings. When devices are cabled one into the next into the next before reaching a port (A → B → C → computer), the arrangement is a **daisy chain**, which usually operates as a bus.",
        detail: "A typical PC structure: the **PCIe bus** connects the processor–memory subsystem to fast devices, while a slower expansion bus carries the keyboard, serial and USB ports; four disks may hang off one serial-attached SCSI (SAS) controller. Device categories: storage (disks, tapes), transmission (network, Bluetooth) and human-interface (screen, keyboard, mouse, audio)."
      },
      {
        term: "PCIe: lanes and generations",
        kind: "notation",
        statement: "**PCIe** sends data over one or more **lanes**; each lane is two signaling pairs — one pair receiving, one transmitting (four wires total) — used as a full-duplex byte stream. Links may be 1, 2, 4, 8, 12, 16 or 32 lanes wide (written with an x prefix, e.g. x8), and each PCIe **generation** roughly doubles the per-lane throughput.",
        detail: "Book figure: a “PCIe gen3 x8” device has maximum throughput of **8 GB/s** — generation 3 delivers about 1 GB/s per lane each way ($8 \times 1\ \text{GB/s} = 8\ \text{GB/s}$), up from about 250 MB/s (gen1) and 500 MB/s (gen2). The designation names both width and generation because both multiply into the result."
      },
      {
        term: "Controllers and memory-mapped I/O",
        kind: "definition",
        statement: "A **controller** is a collection of electronics that operates a port, a bus or a device — from a simple single-chip serial-port controller to a Fibre Channel host-bus adapter (its own processor, microcode and private memory). The CPU commands a controller through its registers, either with special **I/O port instructions** or via **memory-mapped I/O**, where the device-control registers are mapped into the processor’s address space and accessed with ordinary load/store instructions.",
        detail: "Modern systems have converged on memory-mapped I/O because writing millions of bytes to (say) graphics memory is faster than issuing millions of I/O instructions — the graphics controller keeps small I/O ports for control but a large memory-mapped region for the screen contents. Four standard registers: **data-in** (host reads input), **data-out** (host writes output), **status** (command-complete, byte-available, error bits) and **control** (start a command, change mode — duplex, parity, word length, speed). Data registers run 1–4 bytes; FIFO chips can hold a burst beyond the register size."
      },
      {
        term: "Handshaking between host and controller",
        kind: "method",
        statement: "The host–controller protocol coordinates two bits: the **busy bit** in the status register (set by the controller while working) and the **command-ready bit** (set by the host when a command is available). The write protocol: (1) host reads the busy bit until clear; (2) host sets the write bit in the command register and puts a byte in data-out; (3) host sets command-ready; (4) the controller sees command-ready and sets busy; (5) the controller reads the command, takes the byte from data-out and performs the I/O; (6) the controller clears command-ready, clears the error bit and clears busy. The loop repeats per byte.",
        detail: "The controller is the producer–consumer’s other half: it signals state through the status register, the host signals intent through the command register. No data is lost as long as the host returns before the controller’s small buffer overflows."
      },
      {
        term: "Polling and its cost",
        kind: "insight",
        statement: "Step (1) of the handshake is **polling**: a busy-wait loop reading the status register until the device is ready. On most architectures the loop costs only **three CPU instruction cycles** — read a device register, logical-AND to extract the status bit, branch if not zero — so polling is efficient *when the wait is short and the CPU has nothing better to do*.",
        detail: "Polling becomes wasteful when repeated iterations rarely find the device ready while other useful work waits — the classic case of streaming input like a keyboard or serial port, where the controller’s tiny buffer overflows if the host dawdles. The engineering answer is to have the *device* notify the *CPU*, which is exactly what interrupts provide. (Some drivers hybridize: use interrupts at low I/O rates and switch to polling when the rate is so high that the device is nearly always ready.)"
      },
      {
        term: "Interrupts",
        kind: "definition",
        statement: "The CPU hardware has an **interrupt-request line**, sensed after every instruction; a controller **raises an interrupt** by asserting a signal on it, and the CPU performs a **state save** and jumps to a fixed-address **interrupt handler**, which determines the cause, does the processing, restores state and executes a return-from-interrupt. Modern systems are interrupt-heavy — a quiet macOS desktop still took almost 23,000 interrupts in ten seconds, single-user systems see hundreds per second and servers hundreds of thousands.",
        detail: "The needed refinements: (1) **deferring** handling during critical processing; (2) **dispatching** to the right handler without polling every device; (3) **priority levels** so urgent interrupts preempt less urgent ones; (4) a way for *instructions* to summon the kernel — traps. Many kernels split handlers into a fast **first-level interrupt handler (FLIH)** doing state storage and queuing, and a separately scheduled **second-level handler (SLIH)** for the real work; Solaris runs interrupt handlers as high-priority kernel threads."
      },
      {
        term: "Vectored interrupts, chaining, priorities and masking",
        kind: "method",
        statement: "The interrupt mechanism accepts an address that selects a handler from the **interrupt vector**, a table of handler addresses — avoiding a search over all possible sources. Because machines have more devices than vector entries, **interrupt chaining** hangs a list of handlers off each entry, called one by one until one services the request. **Interrupt priority levels** let the CPU defer low-priority interrupts and let high-priority ones preempt; the **maskable** interrupt line can be turned off during critical sequences, while the **nonmaskable** line (e.g. unrecoverable memory errors) cannot.",
        detail: "The Intel Pentium event-vector table maps events 0–31, nonmaskable, to error conditions and exceptions — divide error (0), breakpoint (3), page fault (14), machine check (18) — while events 32–255 are maskable device interrupts. At boot the OS probes the buses, determines present devices and installs their handlers into the vector."
      },
      {
        term: "Traps versus interrupts",
        kind: "definition",
        statement: "A **trap** (software interrupt) is an *intentional* instruction the kernel sets up: library code builds an argument structure and executes the trap instruction, which saves user state, switches to kernel mode and dispatches to the requested service — the mechanism behind system calls. A hardware **interrupt** is *asynchronous and unsolicited* — a device controller announcing output completion, available input, or failure.",
        detail: "Traps get relatively low interrupt priority: executing a system call for an application is less urgent than servicing a controller whose FIFO is about to overflow. Interrupts also serve virtual memory (page faults), kernel control flow (a high-priority handler that starts the next disk I/O, raising a low-priority interrupt to copy results to the user later), and exceptions like division by zero or privileged instructions from user mode."
      },
      {
        term: "Direct memory access (DMA)",
        kind: "method",
        statement: "Rather than burn the CPU feeding a controller one byte at a time (**programmed I/O, PIO**), the host writes a **DMA command block** into memory — a pointer to the transfer source, a pointer to the destination, and a byte count — and hands its address to the DMA controller. The DMA controller then operates the memory bus directly, transferring the data, and **interrupts the CPU once, when the whole transfer finishes**.",
        detail: "Handshake: the device controller signals **DMA-request** when a word is available; the DMA controller **seizes the memory bus**, places the address, and signals **DMA-acknowledge**; the device transfers the word and drops the request. **Cycle stealing**: while the DMA controller owns the memory bus the CPU cannot reach main memory (its caches still work), but the loss is far cheaper than doing the transfer by hand. **Scatter-gather** command blocks list non-contiguous source/destination pairs so one command executes multiple transfers. Safety detail: the destination is normally in kernel address space — a user-space target could be modified mid-transfer — so data is double-buffered through kernel memory (or the transfer is done via memory mapping)."
      }
    ],
    examples: [
      {
        title: "One byte by handshaking, end to end",
        problem: "An application must write one byte to a memory-mapped device. Walk the six-step busy-bit / command-ready handshake and identify exactly where the host busy-waits.",
        steps: [
          { label: "Step 1: Wait for idle", text: "The host repeatedly reads the controller’s **status** register and extracts the busy bit — busy-waiting. The controller cleared busy after finishing its previous command, so the loop exits." },
          { label: "Step 2: Present the command and data", text: "The host sets the write bit in the **command register** and stores the byte into the **data-out** register — both plain memory writes to mapped addresses." },
          { label: "Step 3: Ring the doorbell", text: "The host sets the **command-ready** bit: “there is work for you.” From here the host is done — the rest is the controller’s half of the protocol." },
          { label: "Step 4: Controller accepts", text: "Noticing command-ready, the controller sets the **busy** bit — its promise not to miss the data before reading it." },
          { label: "Step 5: Controller executes", text: "It reads the command register (a write), fetches the byte from data-out, and performs the I/O to the device." },
          { label: "Step 6: Controller finishes", text: "It clears command-ready, clears the error bit in the status register (the I/O succeeded) and clears busy — back to idle, ready for the next byte." }
        ],
        result: "Two bits suffice for a correct producer–consumer exchange; every step is a register read, write or test. The host’s only waste is step 1 — which is precisely the loop polling optimizes or interrupts eliminate."
      },
      {
        title: "Interrupt-per-word versus DMA",
        problem: "A disk controller must deliver an 8 KB block to memory, four bytes (one word) at a time. Compare the CPU cost of interrupt-driven word transfer against a single DMA transfer.",
        steps: [
          { label: "Step 1: Count the words", text: "An 8 KB block is $\\frac{8192}{4} = 2048$ words." },
          { label: "Step 2: Interrupt-driven cost", text: "Each word arrival raises an interrupt: 2,048 state saves, handler dispatches and restores — plus 2,048 word moves executed by the CPU itself. The CPU spends the entire transfer servicing interruptions and doing the copying." },
          { label: "Step 3: Set up DMA instead", text: "The CPU writes one command block — source (device), destination (kernel memory), count 8,192 — and hands its address to the DMA controller. That is a handful of instructions." },
          { label: "Step 4: The transfer runs itself", text: "Per word, the controller asserts DMA-request; the DMA controller seizes the memory bus, places the address, acknowledges; the device deposits the word. The CPU is free to compute (cycle stealing only briefly blocks its memory access)." },
          { label: "Step 5: One interrupt, at the end", text: "When the whole block has landed, the DMA controller raises a single completion interrupt: 2,048 interrupts reduced to 1, and 2,048 CPU word-copies reduced to zero." }
        ],
        result: "DMA converts an O(n)-interrupt, CPU-mediated transfer into one setup plus one completion interrupt — which is why every modern computer, from smartphone to mainframe, ships a DMA controller."
      }
    ],
    keyTakeaways: [
      "Devices attach through ports and buses; PCIe links aggregate 1–32 lanes (two wire pairs each) and each generation roughly doubles per-lane throughput — gen3 x8 tops out at 8 GB/s.",
      "A controller exposes data-in, data-out, status and control registers, reached by I/O port instructions or (now dominant) memory-mapped I/O.",
      "Handshaking coordinates a busy bit (controller state) with a command-ready bit (host intent); the host’s wait loop is polling — only three instruction cycles per iteration, fine for fast dedicated devices but wasteful when waits are long.",
      "Interrupts invert the notification: the controller asserts the request line, the CPU checks it after every instruction, saves state and dispatches via the interrupt vector (with chaining when devices outnumber entries).",
      "Maskable interrupts can be deferred during critical code; the nonmaskable line is reserved for catastrophes like unrecoverable memory errors. Priorities let urgent handlers preempt lazy ones.",
      "Traps are intentional software interrupts (system calls, page faults); hardware interrupts are asynchronous device events. Traps run at lower priority than device service.",
      "DMA moves whole blocks without the CPU: one command block (source, destination, count), scatter-gather for non-contiguous transfers, cycle stealing for the bus, and a single interrupt at completion — 2,048 word-interrupts become 1 for an 8 KB block."
    ],
    quiz: [
      {
        q: "The essential difference between a trap and a hardware interrupt is:",
        options: [
          "traps are always higher priority than interrupts",
          "a trap is an intentional instruction-generated event (system call, page fault), while an interrupt is an asynchronous hardware event",
          "traps cannot be masked",
          "interrupts execute in user mode"
        ],
        answer: 1,
        explanation: "A trap is how code summons the kernel deliberately — the software-interrupt instruction saves user state, switches to kernel mode and dispatches to the service. Device controllers raise interrupts asynchronously when they need attention, and those get higher priority than traps: a FIFO about to overflow cannot wait, a system call can."
      },
      {
        q: "In the handshaking protocol, the controller sets the busy bit:",
        options: [
          "after it notices that the host has set the command-ready bit",
          "before the host writes data",
          "only when an error occurs",
          "when the transfer is complete"
        ],
        answer: 0,
        explanation: "The host first waits for busy to clear, stages the command and byte, then sets command-ready. The controller answers by setting busy (so the host knows the data was taken), does the I/O, and finally clears command-ready, the error bit and busy to finish."
      },
      {
        q: "A “PCIe gen3 x8” device has a maximum throughput of about:",
        options: ["8 MB/s", "250 MB/s", "8 GB/s", "32 GB/s"],
        answer: 2,
        explanation: "Generation 3 delivers roughly 1 GB/s per lane in each direction; x8 multiplies by eight lanes for about 8 GB/s — the book’s figure. Width (lanes) and generation both scale the result."
      },
      {
        q: "During a DMA transfer, “cycle stealing” means:",
        options: [
          "the DMA controller seizes the memory bus for each word, momentarily blocking the CPU from main memory (though its caches remain usable)",
          "the DMA controller steals CPU registers",
          "the device skips every other byte",
          "the CPU disables interrupts"
        ],
        answer: 0,
        explanation: "To place addresses and move data the DMA controller must own the memory bus; whenever it does, the CPU cannot reach memory — but it keeps executing out of its caches. The stolen cycles are far cheaper than the CPU performing the transfer itself."
      },
      {
        q: "A DMA command block contains:",
        options: [
          "the interrupt vector and handler address",
          "the device’s major and minor numbers",
          "a list of all pending processes",
          "a pointer to the source, a pointer to the destination, and a count of bytes to transfer"
        ],
        answer: 3,
        explanation: "Those three fields drive the whole transfer; richer blocks (scatter-gather) add lists of non-contiguous source/destination pairs so one DMA command executes multiple transfers. The CPU writes the block, tells the controller where it is, and gets interrupted once at the end."
      }
    ,
      // PYQ-pattern: GATE 2017 — interrupt feasibility (rephrased)
      {
        q: "A device streams at $50$ MB/s (one byte per $20$ ns) while each per-byte interrupt costs $1$ microsecond of CPU. Can per-byte interrupts keep up, and what is the right structure?",
        options: ["Yes, with polling", "No; the bus must be widened", "Yes, with a larger vector table", "No; at most about $1$ MB/s, so DMA with one interrupt per block is needed"],
        answer: 3,
        explanation: "**Step 1 — Given data:** rate $R = 50$ MB/s, cost $C_I = 1$ microsecond per byte.\n**Step 2 — Rule:** feasible only while $C_I \\le 1/R$; max interrupt-sustainable rate is $1/C_I$.\n**Step 3 — Computation:** $1/C_I = 1$ MB/s, far below $50$ MB/s; needed $C_I \\le 20$ ns, impossible for a full save-dispatch-restore.\n**Step 4 — Cross-check:** DMA inverts the math: one setup plus one completion per $B$-byte block costs microseconds per block, i.e. nanoseconds per byte for large $B$.\n**Step 5 — Distractors:** polling still pays per byte; a larger table speeds dispatch but not the per-byte cost; bus width does not remove interrupts.\n**Step 6 — Conclude:** per-byte handling tops near $1$ MB/s; bulk needs DMA."
      },
      // PYQ-pattern: DRDO 2019 — controller handshake (rephrased)
      {
        q: "Which register set and handshake lets a CPU reliably hand a command to a device controller without loss?",
        options: ["Data-in only, with no status", "Control, status, data-in, data-out with busy-bit and command-ready protocol", "Status only, via interrupts", "Data-out only, via DMA"],
        answer: 1,
        explanation: "**Step 1 — Given data:** controller with local buffers, CPU and device run concurrently.\n**Step 2 — Rule:** CPU writes control, polls status busy-bit until clear, then issues; command-ready strobe latches the command; data registers carry words each way.\n**Step 3 — Trace:** set command word, raise ready, controller sees ready, sets busy, moves data, clears busy and raises completion interrupt.\n**Step 4 — Cross-check:** without status the CPU cannot know when the controller is free; without control it cannot say what to do.\n**Step 5 — Distractors:** single registers omit direction or handshaking; interrupts alone do not transfer commands.\n**Step 6 — Conclude:** four registers plus busy/command-ready is the minimal reliable contract."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.2
  {
    sectionId: "osc-ch12-s2",
    readingTime: 11,
    intro: "Devices differ wildly — character-stream or block, sequential or random, sharable or dedicated, fast or slow — yet applications must open a file, read it, and close it without knowing anything about the hardware. The operating system achieves this with abstraction and layering: a few standard device classes in the application I/O interface, kernel modules (device drivers) that encapsulate the oddities, and kernel I/O services — scheduling, buffering, caching, spooling — that sit above them all.",
    objectives: [
      "Describe the kernel I/O structure: device drivers under a uniform interface, and the major device classes (block, character, network, clock)",
      "Compare blocking, nonblocking and asynchronous I/O, and explain vectored (scatter-gather) I/O and the ioctl escape hatch",
      "Explain the services of the kernel I/O subsystem: scheduling, buffering, caching, spooling, device reservation, error handling and protection",
      "Explain copy semantics and double buffering",
      "Trace how a file name becomes a device command (mount tables, major/minor numbers, dispatch tables)"
    ],
    concepts: [
      {
        term: "Device drivers and the kernel I/O structure",
        kind: "definition",
        statement: "The kernel’s **I/O subsystem** hides device differences behind **device-driver** modules: each driver is custom-tailored to a device but exports one of the standard interfaces, exactly as system calls standardize the application–kernel boundary. Above the drivers, the kernel I/O subsystem provides services; below them, device controllers do the hardware’s side of a protocol.",
        detail: "Drivers are OS-specific — one device ships separate drivers for Windows, Linux, AIX and macOS — but the classes above them are standard, which is why new devices can appear without rewriting the OS. The ioctl() system call is the escape hatch: it passes arbitrary commands from an application straight to a driver (device identifier, integer command selector, pointer to a data structure), avoiding a new syscall per device feature."
      },
      {
        term: "Block and character devices",
        kind: "definition",
        statement: "A **block device** transfers a block of bytes as a unit, understands read(), write() and (if random-access) seek(), and is normally reached through a file system; a **character-stream device** transfers bytes one by one through get()/put()-style calls — keyboards, mice, modems, printers, audio. Applications see block devices through file systems; a database or the OS itself may prefer **raw I/O** — the device as a simple linear array of blocks, with no OS buffering or locking — or the middle path of **direct I/O** (a file mode that disables OS buffering).",
        detail: "Memory-mapped file access layers on block drivers: the file is mapped into memory and touched through the virtual-memory machinery — the same demand-paging path — which is why the OS itself uses mapping to load executables and reach swap space. Character devices fit producers that deliver data spontaneously and consumers that want a linear stream. Device naming differs by OS: MS-DOS puts the device in the file name (C:), while UNIX embeds devices in the regular file-system name space, with a mount table mapping path-name prefixes to devices."
      },
      {
        term: "Network devices and clocks",
        kind: "definition",
        statement: "Network I/O differs enough from disk I/O to earn its own interface — the **socket**: an application creates a socket, binds it, connects it to a remote address, listens for remote connections, accepts them, and sends and receives packets; select() manages a *set* of sockets, reporting which have packets waiting or room to send (eliminating per-socket polling). Hardware **clocks and timers** provide three functions — current time, elapsed time, and “trigger operation X at time T” — built on a **programmable interval timer** that interrupts once or periodically.",
        detail: "The scheduler uses the interval timer to preempt at time-slice end; disk caching uses it to flush dirty buffers periodically; networking uses it to time out stalled operations. Because hardware timer channels are few, the kernel simulates **virtual clocks**: one sorted (earliest-first) list of wanted interrupts, arming the hardware only for the earliest. PCs carry a high-performance event timer (HPET) running in the 10-megahertz range with several comparators; time-of-day drift is corrected by NTP. Block and raw access also imply protection: all I/O instructions are privileged, and memory-mapped I/O regions are guarded by the memory-protection system (with controlled exceptions for graphics)."
      },
      {
        term: "Blocking, nonblocking and asynchronous I/O",
        kind: "definition",
        statement: "A **blocking** system call suspends the calling thread (run queue → wait queue) until the I/O completes — the default, because blocking code is easier to write. A **nonblocking** call returns immediately with whatever is available (full count, fewer bytes, or none). An **asynchronous** call returns immediately and the *entire* transfer completes later, with completion signaled by a variable, a signal or software interrupt, or a call-back outside the thread’s linear control flow.",
        detail: "The distinction in one line: nonblocking read() gives you *some now*; asynchronous read() gives you *all later*. Multithreading is the other route to overlap (some threads block while others compute). By default even “synchronous” storage and network writes are absorbed by the kernel and completed later — UNIX kernels flush secondary-storage buffers roughly every 30 seconds, and applications can request an immediate flush. Asynchronous completion is delivered via signals or call-back routines."
      },
      {
        term: "Vectored (scatter-gather) I/O",
        kind: "method",
        statement: "**Vectored I/O** lets one system call move data to or from *multiple* buffers: the UNIX readv()/writev() calls take a vector of buffers, scattering an incoming stream across them or gathering the outgoing stream from them. The alternative — copying separate buffers into one big buffer and issuing one call, or issuing several calls — pays extra copies or extra context switches.",
        detail: "Benefits: fewer system calls and context switches (the kernel is entered once), no pre-staging copy, and — in some implementations — atomicity: the whole gather-scatter happens without interruption, so concurrent threads cannot interleave with those buffers. When available, programmers use scatter-gather to increase throughput and decrease overhead."
      },
      {
        term: "Kernel I/O services: scheduling",
        kind: "method",
        statement: "The order applications issue I/O is rarely the best order to execute it. The kernel keeps a **wait queue per device**; the **I/O scheduler** reorders that queue to improve overall efficiency and average response time — serving requests 2, 3, 1 when the disk arm sits near the beginning of the disk — while remaining fair, or prioritizing delay-sensitive work (virtual-memory requests may outrank application requests).",
        detail: "To track many concurrent requests the kernel maintains a **device-status table** with an entry per device: type, address and state (idle, busy, not functioning), plus the pending request parameters. Disk-scheduling algorithms (Chapter 11) are the flagship instance: reorder to minimize head movement, merge adjacent requests."
      },
      {
        term: "Buffering and its three reasons",
        kind: "definition",
        statement: "A **buffer** is a memory area holding data in transit between devices or between a device and an application. Buffering exists for three reasons: (1) **speed mismatch** — a network a thousand times slower than an SSD is decoupled by **double buffering** (fill one while draining the other); (2) **transfer-size adaptation** — networking fragments large messages into packets and reassembles them in buffers; (3) **copy semantics** — the version of data written is frozen at the time of the call.",
        detail: "Copy semantics concretely: after write(fd, buf, n) returns, the application may immediately overwrite buf — the OS guarantees the disk receives the version at call time, by copying the application data into a kernel buffer before returning (or by virtual-memory remapping with copy-on-write). The same kernel buffer often doubles as a **buffer cache**."
      },
      {
        term: "Caching, spooling and device reservation",
        kind: "definition",
        statement: "A **cache** holds, on fast storage, a *copy* of data that lives elsewhere; a **buffer** may hold the only existing copy — that is the distinction. A **spool** is a buffer that holds output for a device, like a printer, that cannot accept interleaved streams: each application’s output is spooled to a separate file, and a spooling daemon (or in-kernel thread) copies the queued files to the device one job at a time. For devices that cannot usefully multiplex concurrent access, OS facilities provide **exclusive device reservation** (VMS-style allocate/deallocate, or one-open-handle limits, or Windows’ wait-for-device-object calls).",
        detail: "Kernel buffer caches serve both purposes: a read first checks the cache (avoiding or deferring disk I/O), and writes accumulate for several seconds so large, efficiently scheduled transfers can be gathered. Spool systems expose a control interface — display the queue, remove jobs, suspend printing. Reservation avoids the opposite failure: two processes interleaving writes to one non-sharable device."
      },
      {
        term: "Error handling and kernel data structures",
        kind: "method",
        statement: "I/O calls return one success/failure bit; UNIX adds the integer **errno** (about a hundred values — argument out of range, bad pointer, file not open). Transient failures are retried (a disk read, a network resend); permanent ones are reported up. Underneath, hardware can be richer — SCSI reports failures in three levels (sense key → additional sense code → qualifier) plus error-log pages. The kernel tracks all of I/O in structures: **open-file tables** (per-process and system-wide), **device-status tables**, and per-file **dispatch tables** of function pointers.",
        detail: "The UNIX open-file record contains pointers to read/write, select, ioctl and close routines — one uniform object with dispatch-table-selected behavior for regular files, raw devices or sockets. Devices are named by **major and minor numbers**: major selects the driver, minor the instance (ls -l /dev/sda* shows 8, 0; 8, 1; 8, 2 …). Windows implements I/O as message passing through an I/O manager instead — messages flow to the driver, which may transform them."
      }
    ],
    examples: [
      {
        title: "Copy semantics: why write() copies your buffer",
        problem: "An application calls write(fd, buf, 4096) and immediately overwrites buf with new data before the disk transfer finishes. What does the disk receive — and what did the kernel do to guarantee it?",
        steps: [
          { label: "Step 1: The call arrives", text: "The kernel validates the arguments and prepares the write. The disk is slow, so the physical transfer cannot complete within the call." },
          { label: "Step 2: The kernel copies", text: "write() copies the 4,096 bytes from the application’s buffer into a kernel buffer *before returning control* — one extra copy, deliberately." },
          { label: "Step 3: The application races ahead", text: "Back in user mode the application scribbles new data over buf. The kernel buffer is untouched — a separate memory area." },
          { label: "Step 4: The I/O completes", text: "The disk write proceeds from the kernel buffer, gathering with other writes for efficient scheduling, and lands the bytes captured at call time." }
        ],
        result: "The disk receives the version from the instant of the system call, independent of later buffer changes — that guarantee is copy semantics. The same effect can be had more cheaply with virtual-memory mapping and copy-on-write, which is why both exist."
      },
      {
        title: "Double buffering a slow download",
        problem: "A file arrives over a network interface about a thousand times slower than the SSD storing it. Show how two buffers keep the producer and consumer decoupled so neither ever waits for the other.",
        steps: [
          { label: "Step 1: Fill buffer A", text: "Network bytes accumulate in buffer A while the SSD sits idle — the producer races ahead of the consumer with nowhere to put data yet." },
          { label: "Step 2: Flip to B", text: "When A is full, the kernel requests the SSD write of A — and immediately starts filling buffer B with arriving bytes." },
          { label: "Step 3: Overlap", text: "The drive drains A while the network fills B. The two timelines no longer meet: by the time B fills, A should be empty." },
          { label: "Step 4: Keep alternating", text: "The network switches back to A while the drive takes B — a steady seesaw in which each party always has a free buffer." }
        ],
        result: "Double buffering decouples producer from consumer, relaxing the timing requirements between them — the canonical first use of buffering, and the reason device-speed tables (from keyboards to networks to drives) can coexist."
      }
    ],
    keyTakeaways: [
      "The application I/O interface reduces all devices to a few classes — block (read/write/seek), character stream (get/put), network sockets, clocks/timers — with ioctl() as the escape hatch and drivers encapsulating the differences.",
      "UNIX names devices inside the file-system name space: a mount table maps path prefixes to devices, and a <major, minor> pair selects the driver and instance (8,0 vs 8,1).",
      "Blocking I/O suspends the thread; nonblocking returns immediately with whatever is available; asynchronous requests the full transfer and completes later via signal or call-back. select() multiplexes sockets without busy-waiting.",
      "Vectored (scatter-gather) I/O moves multiple buffers in one system call: fewer context switches, no staging copies, sometimes atomicity.",
      "The kernel I/O subsystem schedules requests per device (reorder, merge, prioritize — the device-status table tracks them) and buffers, caches, spools and reserves devices; a buffer may hold the only copy while a cache holds a faster copy of data that lives elsewhere.",
      "Spooling serializes output for non-sharable devices — every print job is a queued file; device reservation grants exclusive access when interleaving makes no sense.",
      "Error handling runs from a success bit plus errno to SCSI’s three-level sense data; the kernel keeps open-file tables, device-status tables and per-file dispatch tables of function pointers to route it all."
    ],
    quiz: [
      {
        q: "A nonblocking read() differs from an asynchronous read() in that:",
        options: [
          "nonblocking is only for sockets",
          "asynchronous read() always fails on disks",
          "nonblocking returns immediately with whatever data are available now (possibly none), while asynchronous requests the full transfer and completes it later via a signal or call-back",
          "there is no difference — the terms are synonyms"
        ],
        answer: 2,
        explanation: "Nonblocking answers “what do you have right now?” — the full count, fewer bytes, or nothing. Asynchronous answers “do it all, tell me when you’re done” — the entire transfer completes later, with completion delivered through a variable, a signal, a software interrupt, or a call-back outside the thread’s linear flow."
      },
      {
        q: "The precise difference between a buffer and a cache is:",
        options: [
          "a buffer may hold the only existing copy of a data item; a cache holds a copy of data that resides elsewhere",
          "buffers are only in the kernel; caches are only in hardware",
          "caches are always smaller than buffers",
          "buffers are persistent across reboots"
        ],
        answer: 0,
        explanation: "A buffer holds data in transit between producer and consumer — it can be the only copy (copy semantics). A cache exists to make reuse faster and holds a copy of something that permanently lives elsewhere. One memory region can serve both jobs — hence the buffer cache."
      },
      {
        q: "Copy semantics for write() mean:",
        options: [
          "the write is always synchronous",
          "the data written to disk are guaranteed to be the version in the buffer at the time of the call, regardless of later changes to that buffer",
          "the buffer is never copied",
          "the kernel checksums the buffer"
        ],
        answer: 1,
        explanation: "The kernel copies the application data into a kernel buffer before write() returns, so the disk write happens from that snapshot. Virtual-memory mapping with copy-on-write achieves the same guarantee without the copy."
      },
      {
        q: "Spooling exists because:",
        options: [
          "some devices, like printers, cannot accept interleaved data streams from concurrent applications",
          "spool files are faster than memory",
          "printers have no controller",
          "network cards require it for packets"
        ],
        answer: 0,
        explanation: "Only one job can print at a time, yet many applications print concurrently: the OS intercepts all output, spools each application’s output to a separate file, and a spooling daemon or in-kernel thread queues those files to the printer one at a time — with a control interface to view, remove and suspend jobs."
      },
      {
        q: "In UNIX, a device’s major and minor numbers identify:",
        options: [
          "the bus speed and lane count",
          "the interrupt vector and priority",
          "the file system type and mount point",
          "the driver to route the request to, and the specific instance of the device within that driver"
        ],
        answer: 3,
        explanation: "Looking up a device name in the file system yields a <major, minor> pair: the OS uses the major number to dispatch to the right driver, and the minor number lets the driver index to the exact device instance — 8,0 and 8,1 are two partitions of one SSD served by driver 8."
      }
    ]
  },

  // ---------------------------------------------------------------- 12.3
  {
    sectionId: "osc-ch12-s3",
    readingTime: 9,
    intro: "I/O is a major factor in system performance: it forces context switches as processes block and unblock, loads the memory bus with data copies, and exposes every weakness of the interrupt machinery. This section follows one blocking read through all ten steps of its life, collects the book’s principles for making I/O fast, and closes with the other side of the coin — power management, from data-center cores to Android’s deepest sleep states.",
    objectives: [
      "Trace the full life cycle of a blocking read() from system call to data return",
      "Explain where the major I/O costs are: context switches, data copies and interrupt handling",
      "List the design principles for improving I/O performance and the device-functionality progression",
      "Describe the STREAMS framework for modular driver and protocol stacks",
      "Explain power management: component states, wake events, power collapse, wakelocks and CPU scaling strategies"
    ],
    concepts: [
      {
        term: "The life cycle of an I/O request",
        kind: "method",
        statement: "A blocking read() travels: the process issues the call → the kernel checks parameters and the **buffer cache** (hit: return immediately) → on a miss, the process moves to the device’s **wait queue** and the request is scheduled and handed to the **device driver** → the driver allocates kernel buffers and writes commands to the **device controller**’s registers → the controller operates the device → a **DMA transfer** moves the data into kernel memory and raises an interrupt → the **interrupt handler** (via the vector table) stores data and signals the driver → the driver signals the kernel I/O subsystem → the kernel moves the data (and return codes) to the process’s address space and shifts the process from the wait queue to the **ready queue** → the scheduler runs it and the system call completes.",
        detail: "Before any of this, name translation connects the file name to hardware: the file system maps name → inode (UNIX) or FAT entry (MS-DOS); the UNIX mount table resolves the longest matching path prefix to a device; the device’s <major, minor> numbers select the driver; the driver’s device table holds the controller’s port or memory-mapped address. Drivers can even be loaded on demand for devices detected after boot."
      },
      {
        term: "Where the costs are",
        kind: "insight",
        statement: "Each I/O operation crosses protection boundaries (context switches to enter the kernel and back), copies data (controller to kernel buffer, kernel buffer to application), and handles interrupts (state save, dispatch, state restore — a completion typically unblocks a process, paying a full context switch). Network traffic multiplies this: remote login sends **every typed character** through both machines’ full I/O stacks — and the echo doubles the work.",
        detail: "Interrupt handling is relatively expensive: a quiet macOS desktop absorbed almost 23,000 interrupts in ten seconds — about $\frac{23{,}000}{10} \approx 2{,}300$ per second — and servers see hundreds of thousands per second. Programmed I/O can actually beat interrupt-driven I/O when busy-waiting cycles are few — which is why hybrid drivers poll when the I/O rate is high and interrupt when it is low. Mainframes offload the problem entirely to **I/O channels**: dedicated special-purpose CPUs that keep data flowing while the main CPU computes, fed by terminal concentrators multiplexing hundreds of devices onto one port."
      },
      {
        term: "Principles for efficient I/O",
        kind: "law",
        statement: "The book’s design rules: **reduce context switches**; **reduce data copies** between device and application; **reduce interrupt frequency** (larger transfers, smart controllers, polling when busy-wait is bounded); **increase concurrency** with DMA-capable controllers or channels offloading simple copying; **move processing primitives into hardware** so they overlap with CPU and bus operation; and **balance CPU, memory, bus and I/O performance** — an overload in one area idles the others.",
        detail: "Modern additions to the same spirit: interrupt coalescing (one interrupt for a batch of completions), zero-copy paths that DMA directly into user buffers, and memory-mapped files that skip the copy entirely. Where functionality should live is its own trade-off — the **device functionality progression** — starting at the application level (flexible, slow, safe: FUSE file systems in user mode), moving to the kernel (faster, riskier), then the driver, the controller, and finally the device itself (fastest, least flexible, months not days to change: hardware RAID controllers that ignore kernel hints about workload)."
      },
      {
        term: "STREAMS",
        kind: "definition",
        statement: "UNIX System V’s **STREAMS** mechanism lets an application assemble pipelines of driver code dynamically. A **stream** is a full-duplex connection between a device driver and a user process, made of a **stream head** (interfaces the process), a **driver end** (controls the device), and zero or more **modules** pushed between them via ioctl(). Each component holds a **read queue and write queue**, and data moves as **messages** between adjacent queues; queues may implement **flow control** (buffering and refusing messages until there is room).",
        detail: "The process writes with write() (raw data) or putmsg() (messages) and reads with read() or getmsg(); the stream head copies data into messages hand over hand until it reaches the driver end. STREAMS I/O is asynchronous except at the stream head, and modules are reusable across streams (one networking module serving Ethernet and 802.11 cards) — Solaris even implemented sockets on STREAMS. Linux never adopted STREAMS; its socket layer and character-device framework fill the same role, so STREAMS survives mainly as history and as the model for thinking about layered drivers."
      },
      {
        term: "Power management: components and states",
        kind: "method",
        statement: "Power management is device management: firmware builds a **device tree** of the hardware topology at boot, and the OS tracks each component’s use (a driver knows if I/O is pending to the flash or the audio device is open). The ACPI standard provides firmware routines the kernel calls through the driver for device-state discovery, error management and power transitions; devices expose power states (PCI defines **D0**, fully on, through **D3**, off) and **wake events** that can re-enable them.",
        detail: "Data centers feel the same pressure at scale: cooling a modern data center may use twice the electricity of powering the equipment, so management tools evacuate user processes from machines, idle them, and power them off until load returns; CPU cores are suspended (state saved) and resumed on demand. Windows exposes this to laptops as **modern standby** (formerly connected standby) — a low-power idle from which network events can wake the system."
      },
      {
        term: "Android: power collapse and wakelocks",
        kind: "method",
        statement: "Android maximizes battery life with three cooperating mechanisms. **Power collapse** puts the device into a very deep sleep — barely more power than fully off, yet able to wake instantly on a button press — by powering off individual components (screen, speakers, I/O subsystem) and parking the CPU in its lowest state: a modern ARM core draws hundreds of milliwatts under load but only a handful of milliwatts in deepest sleep, and can still take an interrupt and resume. **Component-level power management** walks the device tree: an unused component is turned off; if all components on a bus are unused, the bus goes off; if everything is unused, the system enters power collapse. **Wakelocks** let applications temporarily prevent collapse — while an application holds a wakelock, the kernel will not enter power collapse.",
        detail: "Wakelocks are the safety valve that keeps aggressive power-down from breaking correctness: a game, a video player or an app updater (holding a lock until its download finishes) keeps the device awake exactly as long as needed, then releases it. The pattern generalizes across mobile operating systems, and it composes with component-level management because the kernel consults both usage tracking and outstanding wakelocks before dropping to the next state."
      },
      {
        term: "CPU frequency strategies: race to idle",
        kind: "insight",
        statement: "Beyond powering components off, CPUs can run slower: **dynamic voltage and frequency scaling (DVFS)** lowers voltage and frequency together — and since dynamic power scales roughly as $P \\propto V^2 f$, the savings are superlinear. The competing policy is **race to idle**: finish the work at full speed, then drop straight into the deepest sleep state, exploiting that idle power is tiny. On hardware with fast, efficient deep sleep, racing to idle often wins; workloads with long idle gaps favor slow-and-steady. Linux exposes the trade-off through CPU-frequency **governors** (performance, powersave, and utilization-driven ondemand/schedutil) that choose target frequencies.",
        detail: "Deep idle states (C-states) have wake-up latency, so the OS balances sleep depth against how soon work arrives — the same per-component reasoning Android applies to its device tree. For I/O-bound systems the strongest lever is avoiding work entirely: fewer context switches and data copies mean fewer wake-ups, so the performance principles of this section are power principles too."
      }
    ],
    examples: [
      {
        title: "The life of a blocking read",
        problem: "A process calls read() on a previously opened file. Follow the request through the kernel to the device and back, and identify every context switch, copy and interrupt along the way.",
        steps: [
          { label: "Step 1: System call and cache check", text: "The process issues a blocking read(); kernel system-call code checks the parameters and probes the buffer cache — a hit returns the data immediately and the story ends here with no physical I/O at all." },
          { label: "Step 2: Sleep and schedule", text: "On a miss, the process leaves the run queue for the device’s wait queue (context switch 1), and the I/O subsystem schedules the request and passes it to the device driver — by subroutine call or in-kernel message." },
          { label: "Step 3: Driver programs the controller", text: "The driver allocates kernel buffer space for the incoming data, schedules the I/O, and writes commands into the device controller’s control registers; the controller operates the device hardware to perform the transfer." },
          { label: "Step 4: Data moves by DMA, interrupt fires", text: "A DMA controller moves the block into kernel memory without CPU help (cycle stealing for the bus) and raises one interrupt on completion (data copy 1)." },
          { label: "Step 5: Interrupt path up the stack", text: "The vector table dispatches the interrupt to the correct handler, which stores necessary data and signals the driver; the driver identifies the completed request, checks its status, and signals the kernel I/O subsystem." },
          { label: "Step 6: Deliver and wake", text: "The kernel copies the data into the process’s address space (copy 2), moves the process from the wait queue back to the ready queue, and when the scheduler runs it, the process resumes exactly at the completion of the system call (context switch 2)." }
        ],
        result: "One logical read cost two context switches, two data copies and one interrupt at minimum — and that is the *optimized* path with DMA. Every performance principle in this section exists to shave items off this list."
      },
      {
        title: "Remote login: the price of one keystroke",
        problem: "A user types a single character into a remote shell session. Count the journey of that character, and show why the book calls network I/O a driver of context-switch and interrupt load.",
        steps: [
          { label: "Step 1: Local machine, input side", text: "The keypress raises a keyboard interrupt; the character passes through the interrupt handler to the device driver, into the kernel, and up to the user process (state switches all the way)." },
          { label: "Step 2: Local machine, output side", text: "The process issues a network-I/O system call to send the character: back into the kernel, through the network layers that build a packet, into the network device driver, which hands the packet to the network controller — which raises an interrupt that propagates back up to complete the call." },
          { label: "Step 3: Remote machine", text: "The packet arrives; the network hardware generates an interrupt; the character is unpacked from the protocol stack and handed to the network daemon, which finds the right login session and passes it to that session’s subdaemon — several more context switches." },
          { label: "Step 4: The echo doubles it", text: "The remote system echoes the character back for local display, so the same trip — in reverse, with the same interrupt, driver, kernel and process crossings — happens a second time." },
          { label: "Step 5: What design can do", text: "Line-buffering batches many characters into one packet; large transfers amortize per-byte costs; DMA removes per-word interrupts; front-end processors and terminal concentrators move the multiplexing off the main CPU entirely — mainframes formalized this as dedicated I/O channels." }
        ],
        result: "One typed character, two machines, roughly a dozen crossings of the hardware–driver–kernel–process stack — doubled by the echo. That is why interrupt frequency, context-switch count and data-copy count are the levers of I/O performance."
      }
    ],
    keyTakeaways: [
      "A blocking read passes through parameter checks and the buffer cache, a wait queue, the I/O scheduler, the device driver, the controller registers, the device, a DMA transfer, an interrupt, the interrupt handler, and back up the stack to wake the process — ten steps, two context switches, two copies, one interrupt.",
      "Name translation sits in front of it all: mount tables map path prefixes to devices, and major/minor numbers route to the right driver instance.",
      "I/O overhead is context switches (protection crossings), data copies (controller→kernel→application) and interrupts (state save, dispatch, restore); remote login multiplies all three per character — and the echo doubles it.",
      "Efficiency principles: fewer context switches, fewer copies, fewer interrupts (larger transfers, smart controllers, polling where bounded — plus modern interrupt coalescing), more concurrency (DMA, channels), processing in hardware, and balanced CPU/memory/bus/I/O.",
      "Functionality migrates application → kernel → driver → controller → device hardware as it matures, trading flexibility and development speed for efficiency (FUSE at the flexible end; hardware RAID controllers at the rigid end).",
      "STREAMS let System V UNIX stack modules of driver code dynamically — full-duplex streams with per-module read/write queues, message passing and flow control; Linux never adopted it, its socket and character-device layers serving the same needs.",
      "Power management is device management — ACPI firmware routines under driver control, component states D0–D3 with wake events, Android’s power collapse and wakelocks — while DVFS trades voltage and frequency ($P \\propto V^2 f$) and race to idle finishes fast then sleeps deep (Linux governors choose)."
    ],
    quiz: [
      {
        q: "In the life cycle of a blocking read, what happens if the requested data are already in the buffer cache?",
        options: [
          "the data are returned to the process immediately and no physical I/O is performed",
          "the process is moved to the device wait queue anyway",
          "the driver is reloaded",
          "the request is rejected with an error"
        ],
        answer: 0,
        explanation: "Step 2 of the life cycle: after parameter checking, the kernel probes the buffer cache first — a hit ends the request right there. Only a miss leads to the wait queue, the driver, the controller and the DMA transfer."
      },
      {
        q: "Which of the following is NOT one of the book’s principles for improving I/O efficiency?",
        options: [
          "reduce the number of times data must be copied in memory",
          "increase the number of context switches so the kernel runs more often",
          "reduce the frequency of interrupts by using large transfers",
          "balance CPU, memory, bus and I/O performance"
        ],
        answer: 1,
        explanation: "Context switches are pure overhead — every protection crossing costs state save/restore and cache disruption. The real principles: fewer context switches, fewer copies, fewer interrupts (large transfers, smart controllers, polling when bounded), more DMA concurrency, processing moved into hardware, and balanced subsystems."
      },
      {
        q: "A wakelock on Android is:",
        options: [
          "a hold an application takes to prevent the system from entering power collapse until the application releases it",
          "a hardware interlock on the power button",
          "a kernel spinlock used by interrupt handlers",
          "a lock on the device tree"
        ],
        answer: 0,
        explanation: "Power collapse would otherwise be triggered whenever all components are idle; a game, video player or app updater needs the device to stay awake, so it acquires a wakelock — while held, the kernel will not enter power collapse. The updater releases it when its download completes."
      },
      {
        q: "Under race to idle, a CPU-bound burst of work is best handled by:",
        options: [
          "running at the lowest possible frequency for as long as possible",
          "disabling interrupts",
          "running at full speed, then dropping into the deepest sleep state as soon as the work is done",
          "turning off the display"
        ],
        answer: 2,
        explanation: "Deep idle states consume almost nothing, so finishing fast and sleeping deeply often beats slow-and-steady DVFS — the decision depends on how quickly more work arrives (and how costly the wake-up is). Linux governors encode this policy choice."
      },
      {
        q: "In STREAMS, modules are added to a stream by:",
        options: [
          "editing the mount table",
          "the ioctl() system call, which pushes a module between the stream head and the driver end",
          "raising a nonmaskable interrupt",
          "recompiling the kernel"
        ],
        answer: 1,
        explanation: "A stream is a full-duplex stack — stream head, zero or more modules, driver end — with a read and a write queue in each component, message passing between adjacent queues, and optional flow control. ioctl() pushes modules (e.g. an input-editing module onto a keyboard stream) without touching the rest of the stack."
      }
    ]
  }
]
