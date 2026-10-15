import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 2: Operating-System Structures (Sections 2.1 – 2.5)
// Master study content.
// ============================================================================

export const osCh2Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: "osc-ch2-s1",
    readingTime: 8,
    intro: "An operating system provides the environment within which programs are executed. This section inventories what ‘providing an environment’ concretely means: one user-facing interface plus a set of services — some existing to help the user, others existing to keep the system itself efficient, correct and safe.",
    objectives: [
      "Separate the services that help the user from those that ensure efficient system operation",
      "List and explain the five user-facing services: program execution, I/O, file-system manipulation, communications and error detection",
      "Explain the system-facing services: resource allocation, logging and protection/security",
      "Identify which services a given user action exercises"
    ],
    concepts: [
      {
        term: "Two views of the service set",
        kind: "insight",
        statement: "Operating-system services divide into two groups. One set provides functions **helpful to the user** — the interface plus program execution, I/O, file-system manipulation, communications and error detection. A second set exists **not to help the user but to ensure the efficient operation of the system itself** — resource allocation, logging, protection and security.",
        detail: "The services also make the programming task easier for the programmer: every service in the list is one less thing each application must implement for itself. The user interface, however visible, is substantially removed from the actual system structure — a useful and intuitive UI is not a direct function of the OS proper."
      },
      {
        term: "User interface",
        kind: "definition",
        statement: "Almost every OS offers a **user interface (UI)** in one of three forms: a **graphical user interface (GUI)** — a window system with a mouse as pointing device and a keyboard for text; a **touch-screen interface** for phones and tablets, where users slide fingers or press on-screen buttons; or a **command-line interface (CLI)** using text commands typed in a specific format with specific options. Some systems provide two or all three.",
        detail: "The interface is catalogued here as just another service — the OS’s first job toward its users — and Section 2.2 examines each form in depth."
      },
      {
        term: "Program execution",
        kind: "definition",
        statement: "The system must be able to **load a program into memory and run it**; the program must be able to **end its execution, either normally or abnormally** (indicating error).",
        detail: "Everything else in the chapter — loading, linking, scheduling — exists in service of this most basic requirement: turn a stored binary into a running, and eventually finished, computation."
      },
      {
        term: "I/O operations",
        kind: "definition",
        statement: "A running program may require I/O involving **a file or an I/O device**, sometimes with special functions (reading from a network interface, writing to a file system). For **efficiency and protection, users usually cannot control I/O devices directly** — the OS must provide the means to do I/O.",
        detail: "Raw device control is exactly what privileged instructions (Section 1.4) wall off; the service layer replaces it with safe, shareable, uniform access — hiding the peculiarities of specific hardware devices from the user."
      },
      {
        term: "File-system manipulation",
        kind: "definition",
        statement: "Programs need to **read and write files and directories**, to **create and delete them by name**, to **search** for a given file and **list file information**; many operating systems add **permissions management** that allows or denies access based on **file ownership**.",
        detail: "File systems vary widely — many OSes provide several, sometimes for personal choice, sometimes for specific features or performance characteristics — but the service catalogue (create, delete, read, write, search, permissions) is remarkably stable across systems."
      },
      {
        term: "Communications",
        kind: "definition",
        statement: "One process often needs to exchange information with another — on the same computer or across a network. Two implementation models: **shared memory**, where two or more processes read and write a common section of memory, and **message passing**, where **packets of information in predefined formats are moved between processes by the operating system**.",
        detail: "The same OS must usually serve both: processes may exchange smaller messages without conflicts to avoid, while other pairings need the speed of memory-transfer-rate communication. Chapter 3 and Chapter 6 develop both models fully."
      },
      {
        term: "Error detection",
        kind: "definition",
        statement: "The OS must **constantly detect and respond to errors** in the CPU and memory hardware (memory error, power failure), in I/O devices (parity error on disk, connection failure, printer out of paper) and in the user program (**arithmetic overflow, illegal memory access**). Appropriate action ranges from halting the system, to terminating the offending process, to returning an error code for the process to handle itself.",
        detail: "A correct and consistent computing environment requires that no error pass silently. Error detection also feeds the debugging services of Section 2.5 — logs, core dumps and traces all begin here."
      },
      {
        term: "Resource allocation and logging",
        kind: "definition",
        statement: "When multiple processes run at once, resources must be allocated among them. Some resources (CPU cycles, main memory, file storage) get **special allocation code** — CPU-scheduling routines weigh CPU speed, the processes to run and the number of cores — while others use **general request-and-release code**. **Logging** records which programs use how much and what kinds of resources, for **accounting** (billing users) or for **usage statistics** that guide administrators reconfiguring the system.",
        detail: "The book calls this record keeping ‘logging’; it is also known as accounting. Usage statistics become a valuable tool for improving computing services — the raw data behind the performance tools of Section 2.5."
      },
      {
        term: "Protection and security",
        kind: "definition",
        statement: "Owners of information in a multiuser or networked system want to control its use; concurrent processes must not interfere with one another or with the OS. **Protection** ensures all access to system resources is controlled; **security** starts with **authenticating each user** (usually by password), extends to **defending external I/O devices, including network adapters, from invalid access**, and records connections so break-ins can be detected.",
        detail: "If a system is to be protected and secure, precautions must be instituted **throughout** it — the book’s warning that a chain is only as strong as its weakest link. Protection is the internal mechanism; security is the defense against outsiders, and Chapters 16 and 17 treat them in depth."
      }
    ],
    examples: [
      {
        title: "Saving a document, service by service",
        problem: "A user types a report in a word processor and clicks Save. Which operating-system services does this one action exercise?",
        steps: [
          { label: "Step 1: Program execution", text: "The word processor itself is running because the OS loaded it into memory and started it — and it will end normally when the user quits it." },
          { label: "Step 2: File-system manipulation", text: "The Save command resolves the document’s name, checks the directory for an existing entry, and creates or updates the file — through file-system services, not raw device writes." },
          { label: "Step 3: I/O operations", text: "The bytes stream to the SSD through OS-provided I/O — the program cannot touch the disk controller directly, for efficiency and protection." },
          { label: "Step 4: Error detection", text: "If the disk is full or a device fault occurs, the OS detects it and returns an error code instead of letting the failure pass silently." },
          { label: "Step 5: The system-side services", text: "Meanwhile the OS allocated CPU and memory to the word processor among all running processes, logged its resource usage, and enforced that only the authenticated owner can reach the file at all." }
        ],
        result: "A single user click ran the full gamut: program execution, file-system manipulation, I/O, error detection, resource allocation, logging, and protection and security — the complete service catalogue in one action."
      },
      {
        title: "Choosing an IPC mechanism",
        problem: "Two processes must cooperate: one renders video frames, the other displays them. When should the designer choose shared memory, and when message passing?",
        steps: [
          { label: "Step 1: Assess the data rate", text: "Video frames are large and continuous — memory-transfer speed matters, pointing toward shared memory: the processes agree to lift the OS’s normal isolation and share a region." },
          { label: "Step 2: Assess the coupling", text: "Shared memory leaves the form of the data and synchronization — who writes, who reads, when — to the processes themselves; that freedom costs coordination discipline." },
          { label: "Step 3: Consider the alternative", text: "Message passing moves predefined-format packets through the OS: smaller transfers with no conflicts to avoid, and far easier to implement across computers — but each frame pays a kernel round-trip." },
          { label: "Step 4: Decide", text: "Same-machine, high-bandwidth, latency-sensitive: shared memory. Cross-machine or small control messages: message passing. The OS service layer supports both." }
        ],
        result: "The communications service is a two-model menu, and the choice follows the data’s size, the parties’ location, and how much synchronization the designers want the kernel to own."
      }
    ],
    keyTakeaways: [
      "Services split by beneficiary: user-helpful (program execution, I/O, file systems, communications, error detection) versus system-directed (resource allocation, logging, protection and security).",
      "The UI comes in three forms — GUI, touch screen, CLI — and is itself just another service, largely decoupled from the system core.",
      "Users cannot control I/O devices directly: the OS intermediates every device access for efficiency and protection.",
      "IPC has exactly two models — shared memory and message passing — differing in speed, protection and who owns synchronization.",
      "Error detection is continuous and multi-layer (hardware, devices, programs); responses range from halting the system to returning an error code.",
      "Protection (controlled internal access) and security (defense against outsiders, starting with authentication) must be instituted throughout the system — no weak links."
    ],
    quiz: [
      {
        q: "Which group belongs to the services provided to help the *user*?",
        options: ["resource allocation, logging, protection", "program execution, I/O operations, file-system manipulation, communications, error detection", "authentication, accounting and billing", "CPU scheduling, memory allocation and device release"],
        answer: 1,
        explanation: "The user-facing five are execution, I/O, files, communications and error detection; resource allocation and logging exist for the system’s own efficiency, and protection/security straddles the boundary by serving both."
      },
      {
        q: "The two models for interprocess communication are:",
        options: ["pipes and sockets", "shared memory and message passing", "direct and indirect indexing", "synchronous and asynchronous interrupts"],
        answer: 1,
        explanation: "Processes either agree to read and write a common memory region, or exchange packets in predefined formats that the operating system moves between them — every other IPC facility is built on one of these two."
      },
      {
        q: "Why do operating systems forbid user programs from controlling I/O devices directly?",
        options: ["to force users to buy more hardware", "for efficiency and protection", "because device controllers cannot be programmed", "because user programs have no buffers"],
        answer: 1,
        explanation: "Raw device access would let a buggy or malicious program corrupt shared devices and other processes; channeling all I/O through the OS keeps it safe, uniform and efficiently shareable."
      },
      {
        q: "The book’s warning that ‘a chain is only as strong as its weakest link’ applies to:",
        options: ["multiprocessor speed-up with N processors", "storage hierarchy cost trade-offs", "instituting protection and security precautions throughout the system", "the interrupt vector’s limited size"],
        answer: 2,
        explanation: "One unprotected component undoes the security of the whole: precautions — authentication, controlled access, defended network adapters — must extend across the entire system."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.2
  {
    sectionId: "osc-ch2-s2",
    readingTime: 12,
    intro: "Users meet the OS through a shell, a desktop or a touch screen; programmers meet it through an API whose functions quietly become system calls — traps that flip the mode bit and enter the kernel. This section connects those two worlds and catalogs the six categories of system calls every operating system provides.",
    objectives: [
      "Compare CLI, GUI and touch interfaces, and the two implementation models for command interpreters",
      "Distinguish system calls from APIs (Win32, POSIX, Java) and explain the run-time environment’s role",
      "Describe the system-call interface mechanism and the three parameter-passing methods",
      "Give concrete examples of calls in all six categories, including fork/exec/wait/exit",
      "Contrast the Arduino’s single-tasking execution with FreeBSD’s multitasking shell flow"
    ],
    concepts: [
      {
        term: "Command interpreters and shells",
        kind: "definition",
        statement: "Most systems treat the **command interpreter** as a special program that runs when a process is initiated or when a user first logs on; when several are offered they are known as **shells** — on UNIX and Linux, the C shell, Bourne-Again shell (**bash**) and Korn shell among them. Its main function: **get and execute the next user-specified command**.",
        detail: "Two implementation models for commands. (1) The interpreter **itself contains the code** for each command — deleting a file jumps to a section of interpreter code that sets parameters and makes the system call; the number of commands determines the interpreter’s size. (2) The UNIX model: the interpreter merely uses the command to **identify a file to load into memory and execute** — `rm file.txt` searches for a program named rm and runs it with the argument file.txt, so programmers add commands by creating new files without touching the shell. Repetitive command sequences can be recorded into **shell scripts** that the interpreter runs like programs."
      },
      {
        term: "GUI and touch-screen interfaces",
        kind: "definition",
        statement: "A **graphical user interface** is a mouse-based window-and-menu system on a **desktop metaphor**: icons represent programs, files, directories and system functions; clicking invokes, selects or opens menus. **Touch-screen interfaces** replace mouse and keyboard with **gestures** — pressing and swiping fingers across the screen.",
        detail: "GUIs were born in early-1970s Xerox PARC research (first on the Xerox Alto, 1973), spread with the Apple Macintosh in the 1980s, and matured as Apple’s **Aqua** (macOS) and Microsoft Windows (Version 1.0 layered a GUI onto MS-DOS); open-source desktops include **KDE** and **GNOME** on Linux. The iPhone and iPad use the **Springboard** touch interface. Choice of interface is mostly personal preference — administrators and power users favor the CLI for efficiency and its programmability, and macOS, built partly on a UNIX kernel, offers both Aqua and a command line."
      },
      {
        term: "System calls versus the API",
        kind: "definition",
        statement: "**System calls** provide the interface to OS services — but application programmers design against an **application programming interface (API)** specifying functions, their parameters and return values. The three most common: the **Windows API**, the **POSIX API** (UNIX, Linux, macOS) and the **Java API**. API functions typically invoke the actual system calls behind the scenes — Windows’ CreateProcess() invokes the kernel’s NTCreateProcess().",
        detail: "Why program to an API rather than raw system calls? **Portability** — a program can compile and run on any system supporting the same API — and convenience, since actual system calls are often more detailed and difficult. Programmers access the API through a library provided by the OS: **libc** for C on UNIX/Linux, so a `printf()` call is intercepted by the standard C library, which invokes the `write()` system call and returns its result to the user program."
      },
      {
        term: "The system-call interface",
        kind: "method",
        statement: "The **run-time environment (RTE)** — compilers or interpreters plus libraries and loaders — supplies the **system-call interface** that links applications to the kernel. It **intercepts API function calls, maps each to an associated system-call number, indexes a table by that number**, and invokes the intended system call in the kernel, returning its status. The caller knows nothing about the implementation, only the API contract.",
        detail: "Systems execute thousands of system calls per second — even the simplest programs make heavy use of the OS. Beneath the interface, a call is a **trap**: control passes through the interrupt vector to a service routine, the mode bit is set to kernel, and (as Chapter 1 established) the same process continues in kernel mode — the system-call routine is part of the operating system, not a separate program."
      },
      {
        term: "Parameter passing",
        kind: "method",
        statement: "Three general methods pass parameters to the OS: (1) **in registers** — the simplest, when they fit; (2) in a **block, or table, in memory**, with the block’s **address passed in a register**; (3) **pushed onto the stack** by the program and popped by the OS. Block and stack methods do not limit the number or length of parameters.",
        detail: "**Linux combines the approaches: five or fewer parameters travel in registers; more than five use the block method.** The block approach is what lets a single register smuggle an arbitrarily large argument structure across the kernel boundary."
      },
      {
        term: "Process control calls",
        kind: "definition",
        statement: "The **process control** category covers: end and abort; **load and execute**; **create and terminate process**; get and set process attributes (priority, maximum execution time); **wait for time or event, signal event**; and allocate/free memory. The UNIX trio: **fork()** creates a copy of the calling process, **exec()** replaces its image with a new program, **exit()** terminates returning a status code (0 or an error code) — with **wait()** for a child’s completion. Windows counterparts: CreateProcess(), ExitProcess(), WaitForSingleObject().",
        detail: "The book’s contrast: the **Arduino** is a single-tasking system — a boot loader loads one *sketch* into flash that then runs alone (loading another replaces it), with no OS and no user interface beyond sensors. **FreeBSD** is multitasking: the shell fork()s, the child exec()s the command, the parent either wait()s or leaves the child running in the background — background jobs take input through files or the GUI, not the keyboard — and on completion the child exit()s, making its status available to the shell."
      },
      {
        term: "File and device management calls",
        kind: "definition",
        statement: "File calls mirror the file life cycle: **create() and delete()** by name with attributes; **open() and close()** around use; **read(), write() and reposition()** (rewind or skip to end); plus **get file attributes() and set file attributes()** for name, type, protection codes and accounting — the same operations applying to directories when a directory structure exists. On the device side, a process needing exclusive access first **request()s a device and later release()s it** — the device analog of open() and close() — after which it can read, write and reposition the device much as with files; unmanaged access risks **device contention and perhaps deadlock** (Chapter 8).",
        detail: "UNIX’s open(), read(), write() and close() are the canonical examples — the Windows set is CreateFile(), ReadFile(), WriteFile(), CloseHandle(). The similarity between devices and files is so great that UNIX merges them into a **combined file–device structure**: one set of system calls serves both, with devices identified by special file names, directory placement or file attributes — a recurring design decision the user interface mirrors."
      },
      {
        term: "Information maintenance and communications calls",
        kind: "definition",
        statement: "**Information maintenance** transfers data between user program and OS: **time() and date()**, free memory and disk space, OS version, plus debugging support — **dump()** of memory, and on Linux **strace**, which lists each system call as it executes. **Communications** implements both IPC models: **message passing** (get hostid()/get processid() translate names to identifiers; open connection, accept connection, wait for connection; read message() and write message(); close connection) and **shared memory** (shared memory create and attach).",
        detail: "Receivers of connections are usually special-purpose **daemons**. Message passing suits smaller data and intercomputer communication — no conflicts to avoid and easier to implement; shared memory runs at memory-transfer speed but leaves protection and synchronization to the processes (Chapter 6). Time profiling — recording the program counter at every timer interrupt — builds a statistical picture of where a program spends its time."
      },
      {
        term: "Protection calls",
        kind: "definition",
        statement: "Protection system calls manipulate access controls on resources such as files and disks: **set permission() and get permission()**, plus **allow user() and deny user()** for whether particular users may access particular resources. UNIX: **chmod()** changes permission bits, **umask()** sets defaults for new files, **chown()** changes ownership; Windows: SetFileSecurity() and its security-descriptor colleagues.",
        detail: "Historically protection mattered only on multiprogrammed, multiuser systems; with networking and the Internet, every system — servers to handhelds — must enforce it, which is why this category rounds out the six (Chapter 17 covers the mechanisms, Chapter 16 the larger security picture)."
      }
    ],
    examples: [
      {
        title: "The system calls behind cp in.txt out.txt",
        problem: "Trace the system-call sequence of a program that copies one file to another, following the book’s example (Figure 2.5).",
        steps: [
          { label: "Step 1: Acquire the file names", text: "The names may arrive as command arguments (cp in.txt out.txt) or interactively — prompting and reading each name already costs write() and read() system calls." },
          { label: "Step 2: Open the input file", text: "open() on in.txt — which may fail: no such file, or protected against access. Then the program must output an error message (more system calls) and terminate abnormally (a system call)." },
          { label: "Step 3: Create the output file", text: "create()/open() for out.txt — an existing file of that name forces a choice: abort, delete and recreate, or ask the user; each path is more system calls." },
          { label: "Step 4: The copy loop", text: "read() from the input, write() to the output, repeat — each call returning status for errors such as end-of-file, parity failure or ‘no more disk space’." },
          { label: "Step 5: Shut down cleanly", text: "close() both files, write() a completion message to the screen, and terminate normally — the final system call." }
        ],
        result: "A program that looks like one line of shell work is a long chain of system calls with error handling at every link — and systems execute thousands of such calls per second."
      },
      {
        title: "How a shell runs a command",
        problem: "On FreeBSD, a user types ./main at the bash prompt. Trace the process-control system calls from keystroke to next prompt.",
        steps: [
          { label: "Step 1: The shell forks", text: "bash executes fork(), duplicating itself into a child process — same image, separate PID." },
          { label: "Step 2: The child execs", text: "The child invokes exec() with the name of the executable; the loader replaces the child’s image with main and the new program begins executing (Section 2.3 covers the loader’s part)." },
          { label: "Step 3: The parent chooses", text: "Depending on how the command was issued, bash either wait()s for the child or leaves it running in the background — in the background case the shell immediately prompts for the next command, and the child’s keyboard input must route through files or the GUI instead." },
          { label: "Step 4: The child exits", text: "The program terminates with exit(0) (or a nonzero error code); the status becomes available to the waiting parent." },
          { label: "Step 5: Loop", text: "bash reads the next command — the cycle that makes the shell the visible face of process control." }
        ],
        result: "fork() + exec() + wait() + exit() is the universal UNIX recipe for running anything — the command interpreter is nothing but a loop around these four system calls."
      }
    ],
    keyTakeaways: [
      "A command interpreter either contains each command’s code (size grows with command count) or — the UNIX way — just loads and executes the named program file, keeping the shell small and extensible.",
      "GUIs descend from Xerox PARC’s Alto (1973) through the Macintosh to Aqua, KDE and GNOME; touch (Springboard on iOS) is the third interface family; admins favor the programmable CLI.",
      "Programmers write to APIs (Windows, POSIX, Java) for portability and convenience; run-time support (libc) maps each API function to the underlying system call — printf() becomes write().",
      "The system-call interface intercepts API calls, indexes a table by call number, and traps into the kernel; parameters pass in registers, in a memory block whose address rides in a register, or on the stack — Linux switches to the block method beyond five parameters.",
      "Six categories: process control (fork/exec/wait/exit), file management (open/read/write/close), device management (request/release), information maintenance (time/date), communications (send/receive, shared memory) and protection (chmod).",
      "Single-tasking (Arduino: one sketch, no OS) and multitasking (FreeBSD: fork-exec-wait shells) bracket the process-control spectrum."
    ],
    quiz: [
      {
        q: "Why do application programmers prefer programming to an API rather than invoking system calls directly?",
        options: ["APIs bypass the kernel for faster execution", "APIs offer portability across systems and hide the more detailed, difficult raw system calls", "APIs cannot fail", "API calls run in kernel mode without a trap"],
        answer: 1,
        explanation: "A program written to the POSIX or Windows API can compile and run on any system supporting that API, while the API’s library functions absorb the messier details — but the kernel is still reached only through system calls, never bypassed."
      },
      {
        q: "On Linux, how are the parameters of a system call with more than five arguments passed?",
        options: ["in the first five registers only — extra arguments are dropped", "in a block or table in memory, whose address is passed in a register", "as entries appended to the interrupt vector", "they cannot be passed at all"],
        answer: 1,
        explanation: "Linux uses registers for five or fewer parameters and switches to the block method beyond that — the block approach imposes no limit on the number or length of parameters."
      },
      {
        q: "On a UNIX system, when the user types rm file.txt, the shell:",
        options: ["executes its own built-in code that deletes the file", "jumps to a section of interpreter code with the parameters", "loads and executes a program file named rm with the argument file.txt", "asks the kernel to interpret the rm command directly"],
        answer: 2,
        explanation: "UNIX implements most commands as separate system programs: the shell merely uses the command name to find, load and run the file rm — which is why anyone can add a new command by adding a new program file."
      },
      {
        q: "Which pairing of system calls correctly follows from a FreeBSD shell running a foreground command?",
        options: ["exec() by the shell, then fork() by the kernel", "fork() by the shell, exec() by the child, wait() by the parent, exit() by the child", "create() by the shell, join() by the child, signal() by the parent", "load() by the shell, execute() by the kernel, sleep() by the parent"],
        answer: 1,
        explanation: "The shell duplicates itself with fork(), the child replaces its image using exec(), the parent blocks in wait() for a foreground job, and the child’s exit() returns status — the canonical UNIX process-control sequence."
      },
      {
        q: "Which set of system calls belongs to the communications category?",
        options: ["open(), read(), write(), close()", "fork(), exec(), wait(), exit()", "open connection, read message, write message, close connection", "set permission, get permission, allow user, deny user"],
        answer: 2,
        explanation: "Message-passing communication opens a connection, exchanges messages in both directions, and closes the connection — the other sets are file management, process control and protection respectively."
      }
    ,
      // PYQ-pattern — system calls in a file copy (rephrased)
      {
        q: "Which system-call sequence correctly copies `in.txt` to `out.txt`, with error handling at every stage?",
        options: ["`delete()` the input, then `open()` the output only", "`open()` both files once and return without any `read()` or `write()`", "`write()` the output before `read()` the input, with no `open()` calls", "`open()` the input, `create()` the output, loop `read()` then `write()` checking each status, then `close()` both files"],
        answer: 3,
        explanation: "**Step 1 — Given data:** two named files, copy loop, every call can fail (missing file, protection, full disk).\n**Step 2 — Rule:** file life cycle is `open()`/`create()`, then `read()`/`write()`/`reposition()`, then `close()`; each call returns status that must be checked.\n**Step 3 — Sequence:** `open()` input (fail → report and abort); `create()` output (existing name forces abort, delete-recreate, or prompt); loop `read()` chunk then `write()` chunk; `close()` both; `write()` completion message and terminate normally.\n**Step 4 — Cross-check:** even prompting for names already costs `read()`/`write()` on the terminal; systems execute thousands of such calls per second.\n**Step 5 — Distractors:** skipping the loop copies nothing; reversed order reads unwritten data; deleting the source destroys the work.\n**Step 6 — Conclude:** the first sequence is the only complete, checked copy."
      },
      // PYQ-pattern — system-call parameter passing (rephrased)
      {
        q: "On Linux a system call takes seven parameters. How are they conveyed into the kernel?",
        options: ["All seven ride in registers, extras are dropped", "They are appended to the interrupt vector", "In a memory block whose address rides in a register", "They cannot be passed at all"],
        answer: 2,
        explanation: "**Step 1 — Given data:** seven parameters, more than fits the register-only path.\n**Step 2 — Rule:** three methods exist: registers when they fit, a memory block whose address is passed in a register, or the stack. Linux uses registers for five or fewer and the block method beyond that.\n**Step 3 — Apply:** seven exceeds five, so the block method applies: pack the seven into a table, pass its address.\n**Step 4 — Cross-check:** block and stack methods impose no limit on count or length, unlike pure registers.\n**Step 5 — Distractors:** dropping extras corrupts the call; the vector holds handler addresses, not arguments; refusal contradicts the documented fallback.\n**Step 6 — Conclude:** a block in memory addressed by one register carries all seven."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.3
  {
    sectionId: "osc-ch2-s3",
    readingTime: 9,
    intro: "Between a programmer’s source files and a running process stand the system services — compilers, editors, daemons — and two crucial translators: the linker, which stitches object files into one executable, and the loader, which brings that executable to life in memory. Understanding that pipeline also explains a stubborn fact: why binaries written for one operating system refuse to run on another.",
    objectives: [
      "List the categories of system services and give daemon examples such as cron",
      "Walk the build pipeline: source → relocatable object file → executable → loaded program",
      "Explain relocation, dynamic linking and the role of shared libraries/DLLs",
      "Identify the major binary formats (ELF, PE, Mach-O) and what an entry point is",
      "Explain why applications are OS-specific: ISA, binary format, system calls and the ABI"
    ],
    concepts: [
      {
        term: "System services",
        kind: "definition",
        statement: "**System services** (system utilities) provide a convenient environment for program development and execution. Categories: **file management** (create, delete, copy, rename, print, list files and directories); **status information** (date, time, available memory or disk, user counts — some systems a **registry** for storing and retrieving configuration); **file modification** (editors, search and transformation commands); **programming-language support** (compilers, assemblers, debuggers, interpreters for C, C++, Java, Python); **program loading and execution** (absolute loaders, relocatable loaders, linkage editors, overlay loaders); **communications** (remote login, message sending, e-mail, web browsing, file transfer); and **background services**.",
        detail: "Constantly running system-program processes are known as **services, subsystems or daemons**: a network daemon listening for connections, process schedulers that start processes on a specified schedule — cron is the classic UNIX example — error-monitoring services and print servers; typical systems have dozens. The view of the OS seen by most users is defined by these applications and system programs, not by the system calls beneath them."
      },
      {
        term: "The build pipeline",
        kind: "method",
        statement: "From source to running process: **source files → compiler → relocatable object file → linker → binary executable file → loader → program in memory**. In commands: `gcc -c main.c` produces the relocatable object main.o; `gcc -o main main.o -lm` links main.o with other object files and libraries (the math library, -lm) into the executable main; typing **./main** invokes the loader.",
        detail: "When a program name is entered on the command line, the shell first creates a new process to run the program via fork(), then invokes the loader with exec(), passing the executable’s name; the loader places the program into the new process’s address space. A GUI double-click on the icon triggers the loader through a similar mechanism."
      },
      {
        term: "Relocatable object files and the linker",
        kind: "definition",
        statement: "A **relocatable object file** is compiled to be loaded into **any physical memory location** — its addresses are not final. The **linker** combines the relocatable object files into a **single binary executable file**, pulling in other object files or libraries as needed, such as the standard C or math library.",
        detail: "Each object file may reference functions and variables defined in the others; linking is what makes those symbols resolve to one program. Executables and objects carry a **symbol table** with metadata about the functions and variables the program references."
      },
      {
        term: "The loader and relocation",
        kind: "definition",
        statement: "The **loader** brings the binary executable into memory, where it becomes eligible to run on an available CPU core. An activity associated with linking and loading is **relocation**: it **assigns final addresses to the program parts and adjusts code and data to match those addresses**, so that code can call library functions and access its variables as it executes.",
        detail: "The executable’s format records the program’s **entry point** — the address of the first instruction to execute when the program runs. The loader’s work is why one binary can sit anywhere in memory: nothing in it assumed a fixed address."
      },
      {
        term: "Dynamic linking and shared libraries",
        kind: "definition",
        statement: "Instead of linking every library into the executable, **dynamic linking** resolves libraries when the program is loaded — or even later, during run time. The linker inserts **relocation information** that lets the library be linked and loaded **if it is required**; Windows calls these **dynamically linked libraries (DLLs)**. Multiple processes can then share a single in-memory copy of a library, saving significant memory.",
        detail: "The benefit is avoiding the linking and loading of libraries that may never be used — the book’s Figure 2.11 leaves the math library out of main precisely so it can join at load time. The cost is the notorious **versioning** problem — ‘DLL hell’: an updated library can break applications built against an older one, so modern systems version their shared libraries and keep multiple versions available side by side."
      },
      {
        term: "Binary formats: ELF, PE, Mach-O",
        kind: "definition",
        statement: "Object and executable files follow standard formats containing the compiled machine code and a **symbol table** of metadata. UNIX and Linux use **ELF** (Executable and Linkable Format) — with separate relocatable and executable variants; Windows uses **PE** (Portable Executable); macOS uses **Mach-O**.",
        detail: "Linux tooling: `file main.o` reports an ELF relocatable file, `file main` an ELF executable, and **readelf** examines the sections of an ELF file. Important caveat: ELF is not tied to any specific computer architecture — a common format across UNIX systems does not make an ELF binary portable across CPUs."
      },
      {
        term: "Why applications are OS-specific",
        kind: "insight",
        statement: "A binary compiled on one OS will not run on another because of layered mismatches: the **binary format** (the layout of header, instructions and variables must match what the loader parses), the **instruction set** (only binaries containing the CPU’s ISA execute correctly), and the **system calls** (identity, numbering, operands, invocation and results differ). Above them, **system libraries** expose different APIs — an application written against iOS APIs will not work on Android.",
        detail: "At the architecture level the contract is the **ABI** — the application binary interface: address width, how parameters are passed to system calls, the organization of the run-time stack, the binary format of system libraries, the size of data types. A binary compiled and linked for a given ABI (say, ARMv8’s) runs on systems honoring that ABI — but since ABIs are defined per OS-and-architecture, they do little for cross-platform compatibility. Firefox running on Windows, macOS, many Linux releases, iOS and Android shows how much porting work these layers create."
      },
      {
        term: "Cross-platform strategies",
        kind: "method",
        statement: "Three routes to running one application on several OSes: (1) an **interpreted language** (Python, Ruby) — the interpreter, available per OS, reads source and calls the native system calls, at a performance cost and with only a subset of each OS’s features; (2) a **language with a virtual-machine RTE** — Java compiles once to bytecode that runs wherever the JVM (with its loader and byte-code verifier) has been ported; (3) **porting** the source using a standard API such as **POSIX**, recompiling for each target — time-consuming, and repeated for every new version.",
        detail: "A **cross-compiler** assists route (3): it runs on one platform but generates binaries for another OS or instruction set. In sum, unless an interpreter, RTE or binary is built for the specific OS **and** CPU type, the application will simply fail to run."
      }
    ],
    examples: [
      {
        title: "From main.c to ./main",
        problem: "Follow a C program through the complete build pipeline, naming the artifact and tool at each stage.",
        steps: [
          { label: "Step 1: Compile", text: "`gcc -c main.c` translates the source into **main.o** — a relocatable object file (ELF relocatable) designed to load at any memory address, carrying a symbol table of its references." },
          { label: "Step 2: Link", text: "`gcc -o main main.o -lm` invokes the linker: main.o joins any other object files, and needed libraries are attached — statically, or as dynamic-linking information for later." },
          { label: "Step 3: Inspect the executable", text: "The result **main** is an ELF executable whose header records the **entry point** — the address of the first instruction to execute; `file main` confirms the type." },
          { label: "Step 4: Invoke the loader", text: "Typing **./main** makes the shell fork() a new process and pass the executable’s name via exec() — the loader places the program into the new process’s address space." },
          { label: "Step 5: Relocate and run", text: "Relocation assigns final addresses and adjusts code and data to match; execution begins at the entry point. The math library, if the dynamic path was taken, links and loads now — only if actually required." }
        ],
        result: "Five stages, one running process — and a pipeline in which every artifact (relocatable object, executable, loaded image) has a defined format and role."
      },
      {
        title: "Why main.exe will not run on Linux",
        problem: "A Windows executable is copied onto a Linux machine with the same x86-64 CPU. Explain each reason it still fails.",
        steps: [
          { label: "Step 1: Binary format mismatch", text: "The file is a PE (Portable Executable); the Linux loader parses ELF — it cannot even find the header layout, instructions and variables where it expects them." },
          { label: "Step 2: ABI mismatch", text: "Even ignoring the container, the two systems disagree on address width usage, parameter passing to system calls, run-time stack organization and the binary format of system libraries — the ABI is per-OS-per-architecture." },
          { label: "Step 3: System-call mismatch", text: "The binary asks for Windows calls (CreateFile, WaitForSingleObject) by number and calling convention; Linux offers a different set with different numbering and semantics." },
          { label: "Step 4: Library mismatch", text: "It links against Windows system libraries whose APIs (Win32) do not exist on Linux — POSIX’s open() family is the native interface there." }
        ],
        result: "The same instruction set is not enough: format, ABI, calls and libraries all bind a binary to its OS. Porting means recompiling from source; the alternative is an interpreter, a JVM-style runtime — or a subsystem like WSL (Section 2.5)."
      }
    ],
    keyTakeaways: [
      "System services span file management, status information, file modification, language support, program loading, communications and background daemons — cron scheduling, network listeners, print servers.",
      "The pipeline is fixed: compiler produces relocatable object files; the linker merges them (plus libraries) into one executable; the loader places that executable into a forked process’s memory and jumps to the entry point.",
      "Relocation assigns final addresses and adjusts code and data accordingly — it is why object files can be ‘relocatable’ at all.",
      "Dynamic linking defers library resolution to load time or run time; shared libraries (DLLs) let many processes share one copy — at the risk of versioning conflicts.",
      "ELF (UNIX/Linux), PE (Windows) and Mach-O (macOS) are the executable formats; ELF is ISA-agnostic, so a common format still does not buy cross-CPU portability.",
      "OS-specificity is structural: instruction set, binary format, system calls and system libraries — pinned down per-platform by the ABI.",
      "Cross-platform escapes: interpreted languages, virtual-machine runtimes (Java), or POSIX-style porting — each with a price in performance, features or effort."
    ],
    quiz: [
      {
        q: "What is the correct order of the build pipeline?",
        options: ["compiler → loader → linker", "compiler → linker → loader", "linker → compiler → loader", "loader → compiler → linker"],
        answer: 1,
        explanation: "Compilation yields relocatable object files, the linker merges them into one executable, and only at run time does the loader bring the executable into memory — each stage consumes the previous one’s output."
      },
      {
        q: "A relocatable object file is one that:",
        options: ["must be loaded at one fixed physical memory address", "is designed to be loaded into any physical memory location", "can only be linked dynamically", "contains no symbol table"],
        answer: 1,
        explanation: "Relocatable means free of final addresses — the object can land anywhere, because relocation (during linking/loading) will assign final addresses and adjust the code and data to match."
      },
      {
        q: "The main benefit of dynamic linking with shared libraries is that:",
        options: ["programs run with no system calls", "libraries that end up unused are never linked and loaded into the executable, and processes can share one in-memory copy", "the linker runs faster at compile time", "the binary format becomes architecture-independent"],
        answer: 1,
        explanation: "The linker inserts relocation information instead of the library itself; the library loads only if required — and once in memory it can be shared by multiple processes, saving significant memory."
      },
      {
        q: "Which item is part of an application binary interface (ABI)?",
        options: ["the user’s license terms for the software", "methods of passing parameters to system calls, run-time stack organization and data-type sizes", "the CPU’s cache replacement policy", "the GUI widget set used by the application"],
        answer: 1,
        explanation: "The ABI defines how binary components interface for a given OS on a given architecture — address width, parameter passing, stack layout, system-library binary format and data sizes are its clauses."
      },
      {
        q: "A Windows .exe file placed on an x86-64 Linux machine fails to run primarily because:",
        options: ["the CPU cannot decode x86-64 instructions on Linux", "the binary format, ABI, system calls and system libraries all differ between the two operating systems", "Linux forbids foreign files by law", "the file lacks a symbol table"],
        answer: 1,
        explanation: "The instruction set is identical — but PE vs ELF formats, per-platform ABIs, different system-call interfaces and different libraries (Win32 vs POSIX) all bind the binary to its home OS."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.4
  {
    sectionId: "osc-ch2-s4",
    readingTime: 11,
    intro: "How should a program the size of an operating system be organized? This section gives the designer’s toolkit: separate mechanisms from policies, then choose a structure — monolithic, layered, microkernel, modular — or, as every successful modern system does, mix them into a hybrid like macOS, iOS or Android.",
    objectives: [
      "State user goals versus system goals in OS design, and the mechanisms/policies separation",
      "Explain why modern kernels are written in C/C++ with minimal assembly",
      "Compare monolithic, layered, microkernel and modular structures on coupling and performance",
      "Describe Darwin’s hybrid structure: Mach + BSD + I/O Kit in one address space",
      "Describe Android’s stack: Linux kernel, HAL, native libraries, ART and frameworks"
    ],
    concepts: [
      {
        term: "Design goals",
        kind: "insight",
        statement: "The first problem in designing an OS is defining goals and specifications **before** design begins — the hardware and the system type (traditional desktop, mobile, distributed, real-time) shape everything above. **User goals**: the system should be convenient to use, easy to learn, reliable, safe and fast. **System goals**: easy to design, implement and maintain; flexible, reliable, error-free and efficient.",
        detail: "Both lists are vague — there is no general agreement on how to achieve them — and no unique solution exists: the requirements for Wind River VxWorks (a real-time embedded OS) must differ wildly from those for Windows Server (a large multiaccess enterprise system). Different requirements yield the large variety of solutions in the wild."
      },
      {
        term: "Mechanisms versus policies",
        kind: "definition",
        statement: "The classic separation principle: **mechanisms determine *how* to do something; policies determine *what* will be done**. The timer construct is a mechanism for ensuring CPU protection; deciding how long the timer should be set for a particular user is a policy decision.",
        detail: "Separation buys flexibility — policies change across places and over time, and a general mechanism working across a range of policies means a policy change requires only redefining parameters, not rebuilding the mechanism. A priority mechanism, properly separated, can enforce I/O-intensive-over-CPU-intensive priority **or the opposite**. **Microkernels take the separation to the extreme** with nearly policy-free primitives; Microsoft and Apple closely encode both mechanism and policy to enforce a global look and feel; Linux ships a standard scheduling mechanism whose policy anyone may replace. Whenever the question is *how*, determine a mechanism; whenever *what*, a policy."
      },
      {
        term: "Implementation languages",
        kind: "insight",
        statement: "Early operating systems were written in assembly language; modern ones are written in **higher-level languages — C or C++ with a small amount of assembly for the lowest levels**. Higher-level implementation means code written faster, more compact, easier to understand and debug, free gains from compiler improvements, and far easier porting to other hardware.",
        detail: "Android is the book’s example: kernel mostly C with some assembly; system libraries in C or C++; application frameworks mostly Java. The residual disadvantages — reduced speed, increased storage — are minor: for large programs, modern compilers with deep pipelining and multiple functional units beat expert assembly programmers. Major performance improvements come from **better data structures and algorithms**, not from excellent assembly — and only a small fraction of kernel code is performance-critical anyway (interrupt handlers, I/O manager, memory manager, CPU scheduler)."
      },
      {
        term: "Monolithic structure",
        kind: "definition",
        statement: "The simplest organization is **no structure at all**: all kernel functionality in a **single, static binary file running in a single address space** — the **monolithic** structure. The original UNIX consisted of the kernel plus system programs, with everything between the system-call interface and the physical hardware — file system, CPU scheduling, memory management, device drivers — combined in one enormous kernel; Linux runs monolithically (applications reach it through the glibc standard C library) while adding a modular twist.",
        detail: "Monolithic kernels are difficult to implement and extend — tightly coupled, with wide-ranging ripple effects from any change — but they hold a distinct performance advantage: **very little overhead in the system-call interface and fast communication within the kernel**. That speed is why UNIX, Linux and Windows all still show monolithic structure at their core."
      },
      {
        term: "The layered approach",
        kind: "definition",
        statement: "A **layered** OS divides the system into levels: layer 0 is the hardware, layer $N$ the user interface, and each layer $M$ is an **implementation of an abstract object — data plus the operations that manipulate them**. Layer $M$ offers functions to higher layers and **invokes operations only on lower-level layers**, hiding its data, operations and hardware from above.",
        detail: "The main advantage is **simplicity of construction and debugging**: layer 1 is debugged against only the (assumed-correct) hardware, then its correctness is assumed while layer 2 is debugged, and so on — an error found must lie in the current layer. The costs: appropriately defining each layer’s functionality is hard, and performance suffers as requests **traverse multiple layers**. Dijkstra’s THE system is the classic early layered design; pure layering is rare in OSes (though TCP/IP and web stacks thrive on it), but modern systems layer partially — fewer layers, more functionality per layer."
      },
      {
        term: "Microkernels",
        kind: "definition",
        statement: "The **microkernel** approach removes **all nonessential components from the kernel** and runs them as **user-level programs in separate address spaces**, leaving a smaller kernel that typically provides minimal **process and memory management plus a communication facility**. Clients and services never interact directly — they **exchange messages through the microkernel**.",
        detail: "Benefits: easier extension (new services are user programs), easier porting, more security and reliability — a failed service does not touch the kernel. The cost is performance: messages must be **copied between separate address spaces** and the system may have to switch processes to exchange them. Mach (Carnegie Mellon, mid-1980s) is the landmark research microkernel — and Darwin, the kernel component of macOS and iOS, contains one. QNX Neutrino keeps only message passing, process scheduling, low-level network communication and interrupt handling in kernel, all else in user mode. Cautionary tale: Windows NT began with a layered microkernel organization, performed poorly against Windows 95, and by Windows NT 4.0 and XP had moved layers into kernel space — becoming largely monolithic."
      },
      {
        term: "Loadable kernel modules",
        kind: "definition",
        statement: "The **modules** design — the best current methodology, per the book — gives the kernel **core components** and links additional services via **loadable kernel modules (LKMs)**, at boot time or during run time. It resembles a layered system in having defined, protected interfaces — but is **more flexible because any module can call any other module** — and resembles a microkernel in having a core with minimal fixed function — but is **more efficient because no message passing is needed**. Solaris, Linux, macOS and Windows all use it.",
        detail: "Linux uses LKMs primarily for **device drivers and file systems**: a module can be inserted as the system boots or on demand — for example, when a USB device is plugged into a running machine whose kernel lacks the needed driver — and removed at run time. The result is a dynamic, modular kernel that keeps monolithic performance."
      },
      {
        term: "Hybrid systems: macOS and iOS",
        kind: "definition",
        statement: "In practice few systems adopt one pure structure; they combine them into **hybrid systems**. Apple’s macOS and iOS stack four layers: **user experience** (macOS’s mouse-and-trackpad **Aqua**; iOS’s touch-first **Springboard**), **application frameworks** (**Cocoa** for macOS, **Cocoa Touch** for iOS — APIs for Objective-C and Swift), **core frameworks** (graphics and media, including QuickTime and OpenGL) and the **kernel environment, Darwin** — which itself combines the **Mach microkernel and the BSD UNIX kernel**.",
        detail: "Darwin offers **two system-call interfaces** — Mach traps and BSD POSIX calls — beneath a rich library interface. Mach provides memory management, CPU scheduling and IPC (message passing, remote procedure calls) through kernel abstractions: **tasks** (a Mach process), threads, memory objects and ports — a POSIX fork() becomes a Mach task. To dodge microkernel copying costs, Darwin folds Mach, BSD, the **I/O Kit** (device-driver development) and kernel extensions (**kexts**) into **a single address space**, so messages pass without copying data between spaces. Differences: macOS targets Intel architectures, iOS targets ARM with mobile-tuned power and aggressive memory management, **more stringent security** (each iOS app runs sandboxed, with developer access to POSIX and BSD APIs restricted), and Cocoa Touch exists to serve touch-first hardware."
      },
      {
        term: "Android",
        kind: "definition",
        statement: "Android — designed by the Google-led Open Handset Alliance, open-source, running on countless hardware platforms — is a layered stack built on a **modified Linux kernel** (changes for power management, memory management and allocation, and a new IPC facility, **Binder**). Above it: the **HAL (hardware abstraction layer)** presenting a consistent view of cameras, GPS and sensors; **native libraries** including **Bionic**, Google’s smaller-footprint C library (in place of glibc), plus SQLite, webkit and SSL; the **ART runtime**; and the **application frameworks** with Google’s own Java API.",
        detail: "Apps are written in Java, but compiled to .class bytecode and then translated to **.dex** files for ART. Where many Java virtual machines use **just-in-time (JIT)** compilation, ART performs **ahead-of-time (AOT)** compilation — .dex files compile to native machine code when installed — buying efficient execution and reduced power consumption on limited mobile hardware. The **JNI** escape hatch lets Java code call native libraries directly for specific hardware features, at the cost of portability. Each Android release extends the platform’s versioned **API levels**, against which apps declare the minimum they support."
      }
    ],
    examples: [
      {
        title: "Mechanism or policy?",
        problem: "Classify each design decision as mechanism or policy, and say why the distinction matters: (a) the hardware timer; (b) the timer’s value for user U; (c) a priority-boosting facility; (d) the choice to boost I/O-bound over CPU-bound programs.",
        steps: [
          { label: "Step 1: The timer", text: "(a) is a **mechanism** — how the OS guarantees regaining the CPU from any user program, independent of who runs." },
          { label: "Step 2: The timer value", text: "(b) is a **policy** — how long a particular user may run is a *what/who* decision layered on the mechanism." },
          { label: "Step 3: The priority facility", text: "(c) is a mechanism: a general-purpose way to raise some programs’ priority, able to serve either policy direction." },
          { label: "Step 4: The boost choice", text: "(d) is a policy — and because (c) was separated from (d), flipping the decision (CPU-bound over I/O-bound) requires redefining parameters, not rebuilding the kernel." }
        ],
        result: "The separation principle in action: mechanisms are general tools; policies are the adjustable decisions on top. Microkernels institutionalize the split; Windows and macOS encode both together for uniformity."
      },
      {
        title: "fork() through Darwin",
        problem: "An application on macOS calls the POSIX fork() system call. Trace what happens inside Darwin’s hybrid kernel.",
        steps: [
          { label: "Step 1: Two doors", text: "Darwin exposes two system-call interfaces: Mach traps and BSD POSIX calls. fork() enters through the BSD side — one of the two doors into the same kernel." },
          { label: "Step 2: BSD handles the POSIX semantics", text: "The BSD component implements the POSIX behavior the caller expects, coordinating with process bookkeeping." },
          { label: "Step 3: Mach provides the abstraction", text: "Underneath, Mach represents the new process with its own kernel abstraction — a **task** — via Mach’s process management (alongside its memory management, scheduling and IPC)." },
          { label: "Step 4: One address space pays off", text: "Because Darwin runs Mach, BSD, the I/O Kit and kexts in a single address space, the internal hand-offs need no message copying between separate spaces — the microkernel performance trap, avoided." }
        ],
        result: "One POSIX call, two kernel cultures cooperating: BSD for the interface, Mach for the machinery — the hybrid that lets macOS be a UNIX *and* a Mach descendant at once."
      },
      {
        title: "An Android app from source to screen",
        problem: "Follow a Java Android application from the developer’s editor to executing on the device’s hardware.",
        steps: [
          { label: "Step 1: Write against the Android API", text: "The developer writes Java — but against Google’s Android API, not the standard Java API." },
          { label: "Step 2: Compile to bytecode", text: "The Java compiler produces ordinary .class bytecode files." },
          { label: "Step 3: Translate to .dex", text: "The build translates those .class files into the compact .dex format that the Android runtime consumes." },
          { label: "Step 4: Install with AOT compilation", text: "At install time ART **ahead-of-time** compiles the .dex files into native machine code for the device — unlike JVMs that JIT-compile during execution — so runtime work is smaller and power draw lower." },
          { label: "Step 5: Run through the stack", text: "The app executes through the application frameworks, native libraries (SQLite for data, SSL for security), and the HAL’s consistent view of the camera, GPS or sensors — with Binder, not ordinary pipes, carrying IPC down in the modified Linux kernel." }
        ],
        result: "Java source in, native code out, with each layer — ART, frameworks, HAL, kernel — isolating the app from the dizzying variety of Android hardware."
      }
    ],
    keyTakeaways: [
      "Design begins with goals: users want convenience, ease, reliability, safety and speed; system-builders want easy design, implementation and maintenance plus flexibility and efficiency — both sets deliberately vague.",
      "**Mechanisms answer *how*; policies answer *what*.** Separating them lets policies change without rebuilding mechanisms — the timer is the canonical example.",
      "Modern kernels are C/C++ plus a little assembly; performance now comes from data structures and algorithms, with only interrupt handlers, I/O, memory management and CPU scheduling being latency-critical.",
      "Monolithic: everything in one address space — fastest system-call path, hardest to evolve (the Linux and original-UNIX shape).",
      "Layered: each layer uses only lower layers — debuggable and verifiable by construction, but slow (traversal) and hard to divide; microkernel: minimal kernel + user-space services via messages — robust and extensible but pays copying and switch costs.",
      "Loadable kernel modules combine the strengths: any module may call any other, no message passing — Linux’s device drivers and file systems load and unload at run time.",
      "Hybrids dominate: Darwin = Mach microkernel + BSD in one address space (two system-call interfaces); Android = Linux kernel + HAL + Bionic + ART (AOT, .dex) + Java frameworks."
    ],
    quiz: [
      {
        q: "Which pairing correctly separates mechanism from policy?",
        options: ["the timer is the policy; its value per user is the mechanism", "the timer construct is the mechanism; how long to set it for a particular user is the policy", "both the timer and its value are mechanisms", "both the timer and its value are policies"],
        answer: 1,
        explanation: "Mechanisms determine how (the timer hardware construct that guarantees CPU protection); policies determine what (how long a given user’s quantum lasts) — and a policy change should never force a mechanism rewrite."
      },
      {
        q: "The main performance problem of pure microkernels is:",
        options: ["the kernel cannot load modules at run time", "messages must be copied between separate address spaces and processes must switch to exchange them", "every system call must traverse many layers", "device drivers cannot be unloaded"],
        answer: 1,
        explanation: "With services running as user processes in separate spaces, inter-service communication pays message copying plus process switches — the overhead that derailed Windows NT’s original microkernel organization and that Darwin avoids by merging its components into one address space."
      },
      {
        q: "In the layered approach, layer $M$ may:",
        options: ["invoke operations only on lower-level layers", "call any layer above or below", "invoke operations only on higher-level layers", "bypass layers and address the hardware directly"],
        answer: 0,
        explanation: "Strict layering means each layer builds solely on the layers beneath it — which is what makes bottom-up debugging and verification possible, and what makes cross-layer calls too slow to bear in practice."
      },
      {
        q: "Darwin combines Mach, BSD, the I/O Kit and kernel extensions into a single address space in order to:",
        options: ["make Mach a pure microkernel", "avoid the cost of copying messages between separate address spaces", "support only one system-call interface", "prevent third-party drivers from loading"],
        answer: 1,
        explanation: "A pure microkernel pays message-copying between user-space services; Darwin keeps the Mach structure but shares one address space, so messages pass without data copying — the book’s answer to microkernel overhead."
      },
      {
        q: "A key difference between the Android runtime (ART) and typical Java virtual machines is that ART:",
        options: ["interprets .class files line by line", "compiles .dex files to native code ahead-of-time at installation", "performs just-in-time compilation of bytecode", "runs Java bytecode directly on the hardware"],
        answer: 1,
        explanation: "ART’s ahead-of-time compilation turns .dex files into native machine code when an app is installed — more efficient execution and lower power draw, crucial for devices with limited memory and CPU."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.5
  {
    sectionId: "osc-ch2-s5",
    readingTime: 10,
    intro: "Turning source into a bootable kernel, shepherding the machine from power-on to login, and finding out why it broke when it does — this final section covers the OS lifecycle after the code is written: SYSGEN and boot, dual-boot and WSL, core and crash dumps, counters and tracing, and the eBPF-based tooling that makes a running Linux kernel observable.",
    objectives: [
      "List the SYSGEN steps and the three levels of tailoring, from full system build to run-time modules",
      "Trace the boot process: firmware (BIOS/UEFI), boot block, GRUB, initramfs, systemd, login",
      "Explain dual-boot/multi-boot and how WSL runs native Linux binaries on Windows",
      "Distinguish core dumps, crash dumps and the counter/tracing approaches to performance",
      "Describe BCC/eBPF tracing and formal verification with SAT solvers and model checkers"
    ],
    concepts: [
      {
        term: "Operating-system generation (SYSGEN)",
        kind: "method",
        statement: "Building an OS from scratch: (1) write or obtain the source code, (2) **configure** the system for the machine it will run on, (3) compile, (4) install, (5) boot. Configuration lives in a **configuration file**, and tailoring spans a spectrum: the file can drive **modification of the OS source followed by a complete compile** (a system build); or the **selection of precompiled object modules** from a library, linked together (faster, but possibly overly general); or a **fully modular system** where selection happens at **execution time** — SYSGEN just sets the parameters describing the configuration.",
        detail: "Building Linux from scratch concretely: download the source from kernel.org; `make menuconfig` generates the **.config** file; `make` compiles the kernel into the **vmlinuz** image; `make modules` compiles and `make modules_install` installs the modules; `make install` installs the new kernel. Embedded systems commonly use the full-build extreme for a static hardware configuration; desktop and mobile systems typically use the second approach with loadable modules for dynamic support."
      },
      {
        term: "System boot: firmware and boot stages",
        kind: "definition",
        statement: "**Booting** is the process of starting a computer by loading the kernel: (1) a small **bootstrap program** (boot loader) in nonvolatile firmware **locates the kernel**; (2) the kernel is **loaded into memory and started**; (3) the kernel **initializes hardware**; (4) the **root file system is mounted**. Classic systems stage this: firmware **BIOS** runs a small first loader that loads a second loader from a fixed disk location called the **boot block** — while modern **UEFI** (Unified Extensible Firmware Interface) is a **single, complete boot manager**, faster than the multistage BIOS dance and with better support for 64-bit systems and larger disks.",
        detail: "The bootstrap also **runs diagnostics** — inspecting memory and the CPU, discovering devices — and initializes everything from CPU registers to device controllers to memory contents. The firmware must match the loader: specific GRUB variants exist for BIOS and UEFI."
      },
      {
        term: "GRUB, initramfs and systemd",
        kind: "definition",
        statement: "**GRUB** is the open-source bootstrap program for Linux and UNIX: its configuration file loads at startup, and it allows **changing kernel parameters and selecting among different kernels** at boot time. The kernel image is **compressed** (decompressing after loading into memory, to save space and boot time), and the loader typically creates **initramfs** — a temporary RAM file system holding the **drivers and kernel modules needed to reach the real root file system**. Once the kernel switches to the real root, Linux creates **systemd**, the initial process, which starts other services (a web server, a database) before presenting the login prompt.",
        detail: "Book example from /proc/cmdline: `BOOT_IMAGE=/boot/vmlinuz-4.4.0-59-generic root=UUID=5f2e2232-...` — the kernel image name and the root file system’s unique identifier. Android, though Linux-based, skips GRUB: vendors supply boot loaders, most commonly **LK** (‘little kernel’), and the device **keeps initramfs as its root file system** rather than discarding it. Boot loaders on most systems also offer **recovery or single-user mode** for diagnosing hardware and repairing corrupt file systems."
      },
      {
        term: "Dual-boot and multi-boot",
        kind: "insight",
        statement: "One machine can host several operating systems at once — the book’s example is a user **dual-booting from macOS into Windows**: the same user on the same hardware then faces **two entirely different interfaces and application sets** using the same physical resources, sequentially. Multi-boot generalizes this to several OSes on separate partitions or disks, chosen by the boot loader’s menu.",
        detail: "GRUB’s ability to select among different kernels at boot time is exactly what makes dual- and multi-boot practical on Linux machines — the loader, not the firmware, is the switch. The two systems never run concurrently; only their stored images share the hardware."
      },
      {
        term: "The Windows Subsystem for Linux (WSL)",
        kind: "definition",
        statement: "Windows uses a hybrid architecture with user-mode **subsystems** that emulate different OS environments, and Windows 10 adds the **Windows Subsystem for Linux**: native Linux applications (ELF binaries) run on Windows. Typing `bash.exe` presents a bash shell running Linux — internally, WSL creates a Linux instance of the **init process**, which creates **/bin/bash**, with each process running in a Windows **Pico process** that loads the native Linux binary into its own address space.",
        detail: "Pico processes communicate with the kernel services **LXCore and LXSS**, which translate Linux system calls: when a call has a **one-to-one Windows equivalent**, LXSS forwards it directly; when a call is **similar but not identical**, LXSS does part of the work and invokes the similar Windows call for the rest — Linux fork() is handled by LXSS performing the initial work and then calling **CreateProcess()**; and when there is **no equivalent**, LXSS must implement the functionality itself."
      },
      {
        term: "Failure analysis: core dumps and crash dumps",
        kind: "definition",
        statement: "If a process fails, the OS writes error information to a **log file** and can capture the process’s memory in a **core dump** — the name survives from the early days when main memory was literally called ‘core’ — stored in a file for a debugger to explore code and memory at the time of failure. A kernel failure is a **crash**: error information goes to a log, and memory state goes to a **crash dump**.",
        detail: "A kernel crash in file-system code makes saving state *through that file system* risky, so the kernel writes its memory image to a **section of disk set aside with no file system on it**; after reboot, a process gathers the data from that area into a proper crash-dump file for analysis — Linux’s implementation of this scheme is **kdump**. Kernel debugging is harder than process debugging: size, complexity, hardware control, and the lack of user-level tools."
      },
      {
        term: "Counters versus tracing",
        kind: "method",
        statement: "Performance-monitoring tools come in two kinds. **Counter** tools read statistics the kernel already maintains — per-process (**ps** reports process information, **top** real-time statistics) or system-wide (**vmstat** memory, **netstat** network interfaces, **iostat** disk I/O). **Tracing** tools collect data for a **specific event** as it happens — per-process (**strace** traces system calls invoked by a process; **gdb** is the source-level debugger) or system-wide (**perf**, a collection of performance tools; **tcpdump** collects network packets).",
        detail: "Most Linux counter tools read the **/proc pseudo file system** — a directory hierarchy existing only in kernel memory, with each process’s ID as a subdirectory (e.g., **/proc/2155** holds statistics for process 2155) plus entries for kernel statistics. Windows provides the Task Manager with applications, processes, CPU and memory usage, and networking statistics. Performance tuning means removing the bottlenecks these tools expose."
      },
      {
        term: "BCC and eBPF",
        kind: "definition",
        statement: "**BCC (BPF Compiler Collection)** is a Python front-end to **eBPF (extended Berkeley Packet Filter)** — technology descended from the packet filters of the early 1990s. A BCC tool embeds a subset-of-C program, compiles it to eBPF instructions and inserts it into the **running kernel** using **probes or tracepoints** to capture events such as a specific system call or disk-I/O latency. Before insertion, a **verifier checks that the instructions cannot harm system performance or security** — which is why BCC tools can run on live production systems.",
        detail: "BCC ships many ready tools: **disksnoop** traces disk I/O with timestamps, byte counts and latency; `opensnoop -p 1225` traces open() calls of a single process; **funccount** counts function invocations; **stacksnoop** traces stack usage. The lineage includes **DTrace** — Solaris’s dynamic tracing framework organized around probes, providers and functions — which pioneered safe, dynamic kernel instrumentation."
      },
      {
        term: "Verification and validation",
        kind: "insight",
        statement: "Beyond testing: **formal verification proves properties of a design rather than sampling behaviors**. Applied to OS algorithms and protocols, the tools include **SAT solvers** — engines for boolean satisfiability that search for (or prove the absence of) counterexamples — and **model checkers** such as **Spin**, which exhaustively explores a finite-state model of, say, a locking protocol to prove freedom from deadlock.",
        detail: "Kernighan’s Law sets the debugging stakes: ‘Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.’ Modern practice layers the approaches: counters to spot anomalies, BCC/eBPF tracing to find bottlenecks dynamically, and formal methods targeted at the most concurrency-critical pieces."
      }
    ],
    examples: [
      {
        title: "Booting Linux: power button to login prompt",
        problem: "Trace a modern Linux machine’s boot from cold power to the login screen.",
        steps: [
          { label: "Step 1: Firmware runs", text: "Power-on starts the bootstrap in nonvolatile firmware — UEFI on modern machines (a single, complete boot manager; older BIOS machines stage through the boot block on disk). It runs diagnostics: inspecting memory and the CPU, discovering devices." },
          { label: "Step 2: Boot loader loads", text: "The firmware hands off to the boot loader — GRUB in the standard Linux flow — whose configuration file loads at startup." },
          { label: "Step 3: Kernel selection and load", text: "GRUB selects a kernel (by default or from its menu), loads the compressed image into memory, and passes parameters such as BOOT_IMAGE and root=UUID." },
          { label: "Step 4: Decompress and mount", text: "The kernel decompresses, initializes hardware, and mounts **initramfs** — the temporary RAM file system carrying the drivers needed to reach the real root file system — then switches root to the real one." },
          { label: "Step 5: systemd", text: "Linux creates the **systemd** process as the first system program, which starts daemons — a web server, a database, the login service." },
          { label: "Step 6: Login", text: "The user sees the login prompt; only at this point is the system said to be fully booted and running." }
        ],
        result: "Firmware diagnostics → GRUB → kernel decompress + initramfs → real root → systemd services → login: every Linux boot replays this chain in seconds."
      },
      {
        title: "fork() under WSL",
        problem: "A native Linux application running in the Windows Subsystem for Linux calls fork(). What happens?",
        steps: [
          { label: "Step 1: The call arrives in a Pico process", text: "The Linux binary runs inside a Windows Pico process with its own address space — bash.exe created a Linux instance whose init process spawned /bin/bash, which spawned the application." },
          { label: "Step 2: LXSS/LXCore intercept", text: "The system call reaches the WSL kernel services, which must translate it — Linux fork() has no exact one-to-one Windows counterpart." },
          { label: "Step 3: Partial handling", text: "Because the calls are similar but not identical, LXSS performs the initial work of the fork itself." },
          { label: "Step 4: CreateProcess finishes", text: "LXSS then invokes the similar Windows system call — CreateProcess() — to complete the job, and success returns to the Linux application as if the kernel had natively forked." }
        ],
        result: "Near-miss system calls are split between LXSS’s own work and the closest Windows call — the price and the cleverness of running ELF binaries under an alien kernel."
      }
    ],
    keyTakeaways: [
      "SYSGEN = write/obtain, configure, compile, install, boot — with tailoring from full source rebuilds through precompiled-module linking to run-time module selection; on Linux: menuconfig → .config → make → vmlinuz → make modules_install → make install.",
      "Boot: firmware (BIOS-staged or the single-boot-manager UEFI) locates and loads the kernel; the kernel initializes hardware and mounts root; initramfs bridges the driver gap; systemd starts services and yields the login prompt.",
      "GRUB selects among kernels and takes parameters — the machinery that also enables dual- and multi-boot; Android instead vendors LK and keeps initramfs as its root.",
      "WSL runs native Linux ELF binaries in Windows Pico processes; LXSS/LXCore translate system calls — one-to-one when possible, partially implemented (fork() + CreateProcess()) when not.",
      "Failures leave evidence: process core dumps and kernel crash dumps (saved to raw, file-system-free disk and collected by kdump after reboot).",
      "Counters (ps, top, vmstat, netstat, iostat — mostly reading /proc) measure state; tracing (strace, gdb, perf, tcpdump, BCC/eBPF) records events; the eBPF verifier is what makes live-production tracing safe.",
      "When testing is not enough: SAT solvers and model checkers such as Spin prove properties of OS protocols exhaustively."
    ],
    quiz: [
      {
        q: "Which of these is NOT one of the four steps of booting as the book lists them?",
        options: ["the boot loader locates the kernel", "the kernel is loaded into memory and started", "the kernel initializes hardware", "the window manager draws the desktop"],
        answer: 3,
        explanation: "The canonical sequence ends with mounting the root file system; desktop drawing comes much later, after systemd has started services and a user has logged in."
      },
      {
        q: "The purpose of initramfs during Linux boot is to:",
        options: ["serve as the permanent root file system on servers", "hold the drivers and kernel modules needed to access the real root file system before it can be mounted", "compress the kernel image", "store crash dumps"],
        answer: 1,
        explanation: "The real root often needs drivers the bare kernel lacks; initramfs is a temporary RAM file system carrying exactly those, discarded after the switch to the true root — Android is the exception that keeps it as root."
      },
      {
        q: "Under WSL, the Linux fork() system call is handled by:",
        options: ["forwarding directly to an identical Windows call", "LXSS performing the initial work and then invoking the similar Windows CreateProcess() call to finish", "recompiling the application for Windows", "emulating an entire Linux kernel in user space"],
        answer: 1,
        explanation: "fork() and CreateProcess() are similar but not identical, so LXSS does part of the work itself and delegates the remainder to the near-match Windows call — the hybrid translation strategy WSL uses for near-miss system calls."
      },
      {
        q: "The role of the eBPF verifier is to:",
        options: ["compress eBPF instructions to save memory", "check that inserted instructions cannot harm system performance or security before they run in the kernel", "translate eBPF bytecode into Python", "prevent BCC tools from attaching to any process"],
        answer: 1,
        explanation: "eBPF programs are dynamically inserted into a running kernel; the verifier’s pre-insertion check is what makes that safe — and what allows BCC tools (disksnoop, funccount, stacksnoop) to run on live production systems."
      },
      {
        q: "The essential difference between counter-based and tracing tools is:",
        options: ["counters are only available on Windows; tracing only on Linux", "counters read statistics the kernel already maintains, while tracing collects data for specific events as they occur", "counters work per-process only; tracing is always system-wide", "tracing tools cannot be used on production systems"],
        answer: 1,
        explanation: "vmstat or ps ask ‘what is the current value of a maintained statistic?’, while strace or perf ask ‘show me every occurrence of this event’ — the difference between state inspection and event recording."
      }
    ]
  }
]
