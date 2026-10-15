import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 10: Virtual Memory (Sections 10.1 – 10.5)
// Master study content.
// ============================================================================

export const osCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'osc-ch10-s1',
    readingTime: 9,
    intro: 'Virtual memory lets a program run while only pieces of it live in RAM: the logical address space is separated from physical memory, and pages are loaded only when demanded. The mechanism is a repurposed valid–invalid bit and a precisely choreographed page-fault trap — this section covers the dance, and its price.',
    objectives: [
      'Define virtual memory and list its benefits',
      'Explain demand paging, the lazy swapper, and the repurposed valid–invalid bit',
      'Walk through the page-fault service sequence, including the instruction restart',
      'Compute effective access time as a function of the page-fault rate, and find the tolerable rate'
    ],
    concepts: [
      {
        term: 'Virtual memory',
        kind: 'definition',
        statement: '**Virtual memory** is a technique that allows the execution of processes that are **not completely in memory**. It separates the logical memory the programmer sees from physical memory, abstracting main memory into an extremely large, uniform array of storage — so programs may be larger than physical memory. Benefits follow: libraries shared by many processes, regions of memory shared between processes, and cheap process creation via page sharing at fork().',
        detail: 'The cost is real: virtual memory is not easy to implement, and used carelessly it can degrade performance severely — the thrashing story of Section 10.4.'
      },
      {
        term: 'Overlays',
        kind: 'insight',
        statement: 'Before virtual memory, programmers split large programs into **overlays** — manually managed chunks kept on disk and loaded into the same memory one at a time, with only the needed pieces resident. The programmer, not the operating system, was responsible for the choreography.',
        detail: 'Overlays are the historical motivation for demand paging, which accomplishes the same thing automatically: the program keeps its large logical address space while the system pages pieces in as they are touched.'
      },
      {
        term: 'Demand paging',
        kind: 'definition',
        statement: 'A **demand-paging system** loads a page **only when it is needed** — the pager is a **lazy swapper** that never touches pages a program never references. Instead of loading the entire executable at start, only the page holding the first instruction is brought in; everything else arrives on fault. Memory is used more efficiently and processes start faster.',
        detail: 'A demand-paging system is like a paging system with swapping (Section 9.5.2) where processes reside in secondary memory and pages trickle in on demand. A program offering a menu of options, for example, never loads the code of the options nobody selects.'
      },
      {
        term: 'The valid–invalid bit, repurposed',
        kind: 'notation',
        statement: 'In pure paging, invalid meant “not in the logical address space.” Under demand paging the same bit also means **“valid but currently in secondary storage”**: the page-table entry of an absent page is marked invalid, while an internal table kept with the process control block records where the page really lives on backing store. Marking a page invalid costs nothing if the process never touches it.',
        detail: 'So an invalid reference has two possible causes, and only the OS can tell them apart: an address outside the logical space (abort the process) or a legal page that has simply not arrived yet (page it in).'
      },
      {
        term: 'The page-fault trap sequence',
        kind: 'method',
        statement: 'Accessing a page marked invalid traps to the OS, which then: (1) checks its internal table — an invalid reference terminates the process, a legal one proceeds; (2) locates the page on secondary storage; (3) finds a free frame (from the free-frame list); (4) schedules the disk read into that frame, giving the CPU to another process while it waits; (5) on the I/O-completion interrupt, corrects the page table and other tables to show the page is in memory; (6) **restarts the instruction** — the process backs up and re-executes the faulting instruction with its saved registers intact.',
        detail: 'The restart is the subtle correctness point: instructions must be restartable — anything half-done when the fault hit must be undone or be idempotent, which is why this is a hardware/OS contract, not an afterthought. The book’s full accounting runs twelve steps, including queueing for the device, the completion interrupt, and restoring the process state before the retry.'
      },
      {
        term: 'Effective access time under demand paging',
        kind: 'law',
        statement: 'With memory-access time $ma$, page-fault probability $p$ and a page-fault service time, $$\\text{EAT} = (1 - p) \\cdot ma + p \\cdot t_{\\text{fault}}.$$ The book’s numbers — $ma = 200$ ns and an 8-ms fault service — give $\\text{EAT} = 200 + 7{,}999{,}800 \\cdot p$ ns: effective access time is **directly proportional to the page-fault rate**.',
        detail: 'The 8-ms figure is an HDD total of about 3-ms average latency + 5-ms seek + 0.05-ms transfer, plus software overhead — and queueing behind other processes only makes it worse. To keep the slowdown under 10 percent, $p$ must stay below $0.0000025$ — fewer than one fault per 399,990 accesses.'
      },
      {
        term: 'Free-frame list and swap-space strategy',
        kind: 'method',
        statement: 'The OS maintains a **free-frame list** so a faulting process can take a frame without waiting for replacement (some systems reserve a few frames so paging-in can overlap execution). Since I/O to swap space is faster than to the file system (larger blocks, no file lookups), systems either copy the executable image to swap at startup, or — as Linux and Windows do — demand-page from the file system and write replaced pages to swap.',
        detail: 'One refinement: demand pages for binary executables come straight from the file system (they are never modified, so replacement simply overwrites them and rereads if needed), while **anonymous memory** — the stack and heap, pages associated with no file — must be backed by swap space.'
      }
    ],
    examples: [
      {
        title: 'The price of a page fault',
        problem: 'With memory-access time $ma = 200$ ns and an average page-fault service time of 8 ms, what is the effective access time if one access in 1,000 faults? What fault rate keeps the slowdown under 10 percent?',
        steps: [
          { label: 'Step 1: Put the units together', text: 'The fault costs 8 ms $= 8{,}000{,}000$ ns, so $$\\text{EAT} = (1 - p) \\times 200 + p \\times 8{,}000{,}000 = 200 + 7{,}999{,}800 \\cdot p \\ \\text{ns}.$$' },
          { label: 'Step 2: One fault per 1,000 accesses', text: 'With $p = 0.001$: $\\text{EAT} = 200 + 7{,}999{,}800 \\times 0.001 \\approx 8{,}200$ ns $= 8.2\\ \\mu s$ — the computer is slowed by a factor of about 40 because of demand paging.' },
          { label: 'Step 3: Budget a 10-percent slowdown', text: 'Demand EAT below 220 ns: $220 > 200 + 7{,}999{,}800 \\cdot p$ gives $20 > 7{,}999{,}800 \\cdot p$, so $p < 0.0000025$.' },
          { label: 'Step 4: Interpret', text: 'That is fewer than one memory access in 399,990 allowed to fault — demand paging works in practice only because a warmed-up process faults orders of magnitude less often than that.' }
        ],
        result: 'At one fault per 1,000 accesses, EAT is about 8.2 μs — a 40× slowdown. The 10-percent budget demands $p < 0.0000025$: fewer than one fault per 399,990 accesses.'
      },
      {
        title: 'Walking the page-fault sequence',
        problem: 'A process references a legal page that is currently on the swap device. List, in order, what the OS does from the trap to the resumed instruction, and say where the 8 ms goes.',
        steps: [
          { label: 'Step 1: Trap and validate', text: 'The MMU raises a page-fault trap. The OS consults its internal table: the reference is legal but the page is absent, so this is a genuine demand, not a protection violation.' },
          { label: 'Step 2: Find a frame', text: 'Take a frame from the free-frame list (evicting a victim to swap first if the list is empty). The process blocks on an I/O queue while another process runs — this context switch hides some latency.' },
          { label: 'Step 3: Page in and fix up', text: 'Issue the disk read, and on completion update the page table (present bit, frame number), invalidate any stale TLB entry, and mark the frame busy. Almost all of the 8 ms is seek, rotation and transfer here.' },
          { label: 'Step 4: Restart', text: 'Back the process up to the faulting instruction and resume: the reference now hits a resident page, and execution continues as if nothing happened.' }
        ],
        result: 'Trap → validate → free frame → disk read → table fix-up → restart. The disk transfer dominates the 8-ms service time; everything else is bookkeeping.'
      }
    ],
    keyTakeaways: [
      'Virtual memory separates logical from physical memory: programs larger than RAM, shared libraries, shared memory, and cheap fork().',
      'Demand paging loads a page only when referenced; the valid–invalid bit now means “not in memory (yet)” as well as “not in the address space.”',
      'The fault sequence ends by restarting the faulting instruction — restartability is a correctness requirement, not an optimization.',
      'EAT $= (1 - p) \\, ma + p \\, t_{\\text{fault}}$ is linear in the fault rate: 200-ns memory with 8-ms faults yields 8.2 μs at one fault per 1,000 accesses.',
      'A 10-percent slowdown budget forces $p < 0.0000025$ — fewer than one fault per 399,990 accesses.',
      'Free-frame lists and smart swap-space strategy (file system versus swap; anonymous memory always swap-backed) hold down the constant term.'
    ],
    quiz: [
      {
        q: 'Under demand paging, a page-table entry marked invalid means:',
        options: ['the page is definitely outside the logical address space', 'the page is either outside the logical address space or valid but currently in secondary storage', 'the page has been evicted and cannot return', 'the TLB must be flushed'],
        answer: 1,
        explanation: 'The bit is repurposed: the OS’s internal table distinguishes a truly illegal reference (terminate) from a legal page that simply has not arrived yet (page it in and restart).'
      },
      {
        q: 'The final step of the page-fault service sequence is to:',
        options: ['copy the page to swap space', 'flush the TLB and switch processes', 'restart the instruction that faulted', 'compact the page table'],
        answer: 2,
        explanation: 'After the page arrives and the tables are corrected, the process backs up and re-executes the faulting instruction with its registers restored — a restart, not a rerun from the beginning, and the reason instructions must be restartable.'
      },
      {
        q: 'With $ma = 200$ ns and 8-ms page-fault service time, keeping the slowdown under 10 percent requires:',
        options: [`$p < 0.025$`, `$p < 0.0000025$`, `$p < 0.0025$`, 'one fault per 40,000 accesses'],
        answer: 1,
        explanation: 'Demanding EAT below 220 ns: $20 > 7{,}999{,}800 \\, p$ gives $p < 0.0000025$ — that is fewer than one fault in 399,990 accesses, not 40,000: the disk is tens of thousands of times slower than memory.'
      },
      {
        q: 'If one access in 1,000 causes a page fault (with the book’s 200-ns memory and 8-ms faults), the effective access time is about:',
        options: ['220 ns', '1 μs', '8.2 μs', '8 ms'],
        answer: 2,
        explanation: '$0.999 \\times 200 + 0.001 \\times 8{,}000{,}000 \\approx 8{,}200$ ns — a slowdown by a factor of about 40, which is why fault rates must be kept minuscule.'
      },
      {
        q: 'Which of these is not a benefit of virtual memory?',
        options: ['Programs larger than physical memory', 'Shared libraries mapped into many processes', 'A faster CPU clock', 'Efficient process creation via shared pages'],
        answer: 2,
        explanation: 'Virtual memory buys address-space freedom, sharing and cheap fork() — it has nothing to do with clock speed, and if used carelessly it actively slows execution down.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'osc-ch10-s2',
    readingTime: 7,
    intro: 'Copying a parent’s entire address space on fork() is wasted work when the child immediately calls exec(). Copy-on-write defers the copying until a page is actually written — and its modern sibling, memory compression, defers paging itself by squeezing frames instead of writing them to disk.',
    objectives: [
      'Explain why fork() motivates copy-on-write',
      'Trace the copy-on-write page-fault sequence',
      'Describe vfork() and when it is appropriate',
      'Explain memory compression and the CPU-versus-I/O tradeoff it embodies'
    ],
    concepts: [
      {
        term: 'The fork() problem',
        kind: 'insight',
        statement: 'The fork() system call creates a child that is a duplicate of its parent — traditionally by copying the parent’s entire address space, duplicating every page. But many children immediately call exec(), destroying all that work. Copying every page eagerly is therefore often pure waste, which motivates a lazier strategy.',
        detail: 'The book frames it precisely: fork() may initially bypass the need for demand paging by using a technique similar to page sharing — minimizing the number of new pages that must be allocated to the newly created process.'
      },
      {
        term: 'Copy-on-write (COW)',
        kind: 'definition',
        statement: 'On fork(), parent and child **initially share the same pages**, each marked copy-on-write. A write by either process traps to the OS, which obtains a frame from the free-frame list, copies **that one page**, and maps the copy into the writer’s address space. Only pages that are actually modified are ever copied; pages that cannot be modified — executable code — are simply shared.',
        detail: 'Windows, Linux and macOS all use copy-on-write. The technique also leans on the free-frame list: allocation happens only as writes occur, so a burst of forks is served cheaply.'
      },
      {
        term: 'Copy-on-write, step by step',
        kind: 'method',
        statement: 'After fork(), physical memory holds pages A, B and C shared by processes 1 and 2, both page tables pointing at the same frames. When process 1 modifies page C: the write traps; the OS takes a free frame, copies C into it; process 1’s page-table entry for C is remapped to the copy and made writable. Pages A and B remain shared; the original C still belongs to process 2.',
        detail: 'If $k$ of the parent’s $n$ writable pages are written before an exec(), exactly $k$ page copies are ever made — instead of $n$ copies, or of copying code pages at all.'
      },
      {
        term: 'vfork()',
        kind: 'definition',
        statement: '**vfork() (virtual memory fork)** suspends the parent and lets the child **borrow the parent’s address space** outright — no copying, no copy-on-write. Any change the child makes is visible to the parent once it resumes, so vfork() must be used with caution; it is intended for the pattern where the child calls exec() immediately, where borrowing is safe and process creation is extremely cheap.',
        detail: 'Several versions of UNIX — Linux, macOS, BSD — provide it, and UNIX command-line shells have used it for exactly the fork-then-exec pattern.'
      },
      {
        term: 'Memory compression',
        kind: 'definition',
        statement: 'Rather than paging modified frames out to swap space, **compress several frames into a single frame**: when replacement selects frames (say 15, 3, 35 and 26), they go on a modified-frame list — and instead of being written to storage, three of them are compressed into one frame that joins a list of compressed frames. A later reference to a compressed page faults, and the frame is decompressed back into memory.',
        detail: 'Mobile systems — which do no swapping at all, Section 9.5.3 — make compression integral (Android, iOS). macOS 10.9+ first compresses LRU pages when free memory runs short, then pages if that does not solve the problem; tests show compression is faster than paging even to SSDs. Windows 10 compresses memory for UWP apps.'
      },
      {
        term: 'The compression tradeoff',
        kind: 'insight',
        statement: 'Compression trades **CPU time for disk I/O**: higher compression ratios come from slower, more computationally expensive algorithms, so systems balance ratio against speed — often using multiple cores to compress in parallel. Microsoft’s Xpress and Apple’s WKdm report compressing pages to **30 to 50 percent of their original size**.',
        detail: 'Windows 10 additionally performs **memory combining**, merging identical pages into a single copy-on-write copy — squeezing memory by deduplication rather than compression. The design question is always: is compressing (or sharing) cheaper than writing to storage?'
      }
    ],
    examples: [
      {
        title: 'fork() with copy-on-write, page by page',
        problem: 'A parent holds writable data pages A, B and C plus read-only code, then forks. The child writes to page C; later the parent writes to page A. What does memory hold?',
        steps: [
          { label: 'Step 1: Fork', text: 'The child’s page table is built pointing at the **same frames** as the parent’s; every writable page is marked copy-on-write. Code pages are read-only and simply shared — they can never be written, so they are never copied.' },
          { label: 'Step 2: Child writes to C', text: 'The write traps; the OS takes a free frame from the free-frame list, copies page C into it, and remaps the child’s entry for C to the new frame, marked writable. The parent still maps the original C.' },
          { label: 'Step 3: Parent writes to A', text: 'Same dance from the other side: a free frame, a copy of A, the parent’s entry remapped and marked writable. Page B remains shared by both processes.' },
          { label: 'Step 4: Count the copies', text: 'Two writes → two page copies. Without COW, fork would have duplicated every page — code included — at fork time; here only written pages ever pay.' }
        ],
        result: 'Final state: B and the code pages shared; a private copy of C in the child and of A in the parent. Copy-on-write copies lazily, only what is written, and never copies read-only pages.'
      },
      {
        title: 'fork, exec and the wasted copy',
        problem: 'A 200-MB process forks and the child immediately calls exec(). Compare the memory work with plain fork() versus fork() with copy-on-write, and explain where vfork() fits.',
        steps: [
          { label: 'Step 1: Plain fork()', text: 'The OS copies all 200 MB of pages up front — then exec() discards the entire copy and loads a fresh image. Nearly all of that copying was pure waste.' },
          { label: 'Step 2: fork() with COW', text: 'No pages are copied at fork time; parent and child share everything marked copy-on-write. The child writes nothing before exec(), so zero page copies happen — exec() simply drops the shared mappings.' },
          { label: 'Step 3: vfork()', text: 'The child borrows the parent’s address space directly while the parent sleeps: not even page tables are meaningfully duplicated. It is the fastest option, but any write the child makes before exec() corrupts the parent — hence the immediate-exec() discipline.' },
          { label: 'Step 4: Rule of thumb', text: 'fork()+exec() → prefer vfork() or COW fork; fork() without exec() → COW still wins whenever the child touches only part of the address space.' }
        ],
        result: 'Plain fork() copies 200 MB pointlessly; COW copies nothing because nothing is written; vfork() avoids even the table setup — at the price of sharing the parent’s memory until exec().'
      }
    ],
    keyTakeaways: [
      'fork() followed immediately by exec() makes eager page copying pure waste; copy-on-write shares pages and copies only on first write.',
      'COW needs per-page write protection, a trap, a free frame and a remap — the OS marks pages copy-on-write at fork time.',
      'Read-only pages (executable code) are never copied — both processes just keep mapping them.',
      'vfork() lends the parent’s address space to a child while the parent is suspended: the fastest possible fork for the exec() pattern, but the child’s writes are visible to the parent.',
      'Memory compression (macOS, Windows 10, Android, iOS) packs several frames into one, trading CPU for disk I/O; Xpress and WKdm reach 30–50 percent of original size.',
      'Windows 10 memory combining merges identical pages under copy-on-write — deduplication as the complement of compression.'
    ],
    quiz: [
      {
        q: 'With copy-on-write, a page is actually copied when:',
        options: ['fork() returns', 'either process writes to a shared page marked COW', 'the child calls exec()', 'the page is evicted'],
        answer: 1,
        explanation: 'The pages start shared and marked copy-on-write; the first write by either process traps, and only then does the OS allocate a frame, copy that page, and remap the writer’s entry. Pages never written are never copied.'
      },
      {
        q: 'vfork() differs from fork() with copy-on-write because:',
        options: ['the child gets compressed pages', 'the child borrows the parent’s address space while the parent is suspended', 'the parent is terminated', 'it copies only code pages'],
        answer: 1,
        explanation: 'vfork() suspends the parent and lets the child run directly in the parent’s address space with no copying and no COW protection — which is why the child’s changes are visible to the parent, and why it is meant only for the immediate-exec() pattern.'
      },
      {
        q: 'Which pages are never copied under copy-on-write?',
        options: ['Stack pages', 'Heap pages', 'Pages that cannot be modified, such as executable code', 'The most frequently written pages'],
        answer: 2,
        explanation: 'Only pages that can be modified need the copy-on-write marking; unmodifiable code pages are simply shared by both processes — a write can never occur, so no copy can ever be needed.'
      },
      {
        q: 'Under memory pressure, macOS 10.9 and later:',
        options: ['immediately swaps whole processes to disk', 'first compresses LRU pages, then pages to storage if needed', 'terminates the largest process', 'disables demand paging'],
        answer: 1,
        explanation: 'macOS first compresses least-recently-used pages when free memory runs short, and pages only if that does not solve the problem — performance tests show compression beats paging even to SSD secondary storage.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'osc-ch10-s3',
    readingTime: 12,
    intro: 'When the free-frame list is empty, bringing a page in means sending another page out — and which page you evict is the single biggest lever on performance. This section traces FIFO, optimal and LRU replacement on the classic reference string, meets Belady’s anomaly, and then chases the practical LRU approximations real systems use.',
    objectives: [
      'Simulate FIFO, optimal and LRU replacement on a reference string and count faults',
      'Explain Belady’s anomaly and why stack algorithms are immune to it',
      'Describe second-chance, enhanced second-chance and page buffering',
      'Relate the modify (dirty) bit to page-replacement cost'
    ],
    concepts: [
      {
        term: 'Page replacement and the dirty bit',
        kind: 'method',
        statement: 'If no frame is free, find one that is not in use and free it: write the victim page to backing store **if it was modified**, change the page and frame tables to mark it absent, read the desired page into the freed frame, and restart the faulting instruction. The **modify (dirty) bit** — set by hardware whenever a byte is written — tells whether the write-out is owed at all: **clean victims are simply discarded**, halving the I/O for read-only pages such as binary code.',
        detail: 'Two page transfers (out plus in) are needed when the victim is dirty, effectively doubling page-fault service time — which is why replacement algorithms prefer clean victims when they can find them.'
      },
      {
        term: 'Reference strings',
        kind: 'notation',
        statement: 'Replacement algorithms are evaluated by running them on a **reference string** — the sequence of page numbers a process references. Two simplifications shrink real traces: only page numbers matter (not full addresses), and immediate repeats of a page can be dropped, since the page just brought in cannot fault on the next reference. The book’s running example uses the string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with three frames.',
        detail: 'A traced address sequence like 0100, 0432, 0101, 0612, … at 100 bytes per page collapses to the reference string 1, 4, 1, 6, 1, 6, 1, 6, 1, 6, 1 — small enough to simulate by hand.'
      },
      {
        term: 'FIFO replacement and Belady’s anomaly',
        kind: 'method',
        statement: '**FIFO** replaces the **oldest page**: associate with each page the time it was brought in, keep a FIFO queue, and evict the head. It is easy to understand and program — and it ignores usage entirely. Worse, it suffers **Belady’s anomaly**: for some algorithms, the page-fault rate may **increase as the number of allocated frames increases**. The book’s string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 yields 9 faults with 3 frames but **10 faults with 4** — more memory, more faults.',
        detail: 'The anomaly was discovered when early investigators noticed that the intuitive assumption “more frames never hurt” was simply false for FIFO — and its discovery triggered the search for an optimal algorithm.'
      },
      {
        term: 'Optimal (OPT) replacement',
        kind: 'method',
        statement: 'Replace the page that **will not be used for the longest period of time**. Optimal replacement provably has the **lowest page-fault rate of all algorithms** for a fixed number of frames and never suffers Belady’s anomaly — but it requires future knowledge, so it exists as a benchmark, not an implementation.',
        detail: 'The key distinction from FIFO is looking forward rather than backward in time: FIFO asks “who arrived first?” while OPT asks “who is needed last?”'
      },
      {
        term: 'LRU replacement',
        kind: 'method',
        statement: 'Replace the **least recently used** page — optimal replacement looking backward in time instead of forward. (Elegantly, the fault rate of OPT on a reference string equals that of OPT on the reversed string, and likewise for LRU.) LRU is considered a good policy and is widely used conceptually — the problem is implementing it.',
        detail: 'On the book’s example string, LRU’s first five faults match optimal’s; it then evicts page 2 at reference 4 — unaware that page 2 is referenced next — yet still finishes with far fewer faults than FIFO.'
      },
      {
        term: 'Stack algorithms',
        kind: 'theorem',
        statement: 'LRU and optimal replacement belong to the class of **stack algorithms**: algorithms for which the set of pages in memory with $n$ frames is always a **subset** of the set in memory with $n + 1$ frames. For LRU this holds because the $n$ most recently referenced pages remain the most recently referenced when a frame is added — and therefore **stack algorithms never exhibit Belady’s anomaly**.',
        detail: 'FIFO is not a stack algorithm, which is exactly why the 3-versus-4-frame reversal is possible: the larger memory holds a set of pages that is not a superset of the smaller memory’s set.'
      },
      {
        term: 'Implementing LRU: counters and stacks',
        kind: 'method',
        statement: '**Counters**: give each page-table entry a time-of-use field, and let a CPU logical clock incremented on every memory reference be copied into the field of the referenced page; replacement searches for the smallest time (and overflow must be handled). **Stack**: keep a doubly linked stack of page numbers with the most recent on top; every reference moves a page from the middle to the top — six pointer changes in the worst case — with the bottom of the stack being the LRU page, so no search is needed.',
        detail: 'Either way, the update happens on **every memory reference**, demanding hardware support beyond standard TLB registers; doing it by interrupt would slow every reference by a factor of at least ten — which few systems could tolerate.'
      },
      {
        term: 'LRU approximations: reference bit, second chance, clock',
        kind: 'method',
        statement: 'Hardware sets a **reference bit** whenever a page is read or written. The **second-chance (clock) algorithm** runs FIFO over a circular queue but inspects the bit: if it is 0, evict; if 1, clear the bit, reset the arrival time, and move on — a page used often enough keeps its bit set and is never replaced. Implemented as a clock hand sweeping a circular queue, clearing bits as it passes; if all bits are set, the sweep clears them all and the algorithm **degenerates to plain FIFO**.',
        detail: 'Recording the reference bits at regular intervals into an 8-bit shift register gives the **additional-reference-bits algorithm** — a history of use over the last eight periods, where the page with the lowest value (as an unsigned integer) is the LRU approximation. Reducing the history to zero bits leaves the single reference bit: second chance itself.'
      },
      {
        term: 'Enhanced second chance and page buffering',
        kind: 'method',
        statement: 'The **enhanced second-chance** algorithm treats the reference and modify bits as an ordered pair and evicts the first page found in the lowest nonempty class: $(0,0)$ — neither recently used nor modified, the best victim — then $(0,1)$ — unreferenced but dirty, costing a write-out — then $(1,0)$ — recently used but clean — then $(1,1)$. The point is to **avoid write-outs**, preferring clean victims. **Page buffering** adds a **pool of free frames**: the desired page is read into a pool frame immediately, before the victim is written out; dirty victims are written from a modified list when the paging device is idle; and each freed frame remembers its old page, which can be reclaimed with no I/O if it is faulted on before reuse.',
        detail: 'The **counting algorithms** bookend the family: LFU replaces the least-frequently-used page (a heavily-then-never-used page lingers; decaying counts help) and MFU the most-frequently-used (arguing a small count means “just arrived”). Both are expensive to implement and approximate optimal poorly — rarely used in practice.'
      }
    ],
    examples: [
      {
        title: 'FIFO, LRU and OPT on the classic reference string',
        problem: 'Run FIFO, LRU and optimal replacement on the reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with three frames, and count the faults.',
        steps: [
          { label: 'Step 1: Compulsory faults', text: 'The first three references — 7, 0, 1 — fault the frames full: {7, 0, 1} after 3 faults. All three algorithms start identically.' },
          { label: 'Step 2: FIFO', text: 'Evicting in arrival order: 2 replaces 7; 3 replaces 0; 0 replaces 1; 4 replaces 2; 2 replaces 3; 3 replaces 0; 0 replaces 4; 1 replaces 2; 2 replaces 3; 7 replaces 0; 0 replaces 1; 1 replaces 2. With the compulsory three: **15 faults**.' },
          { label: 'Step 3: LRU', text: 'At the reference to page 4, the least recently used of {2, 0, 3} is page 2 — evicted, although page 2 is the very next reference; the fault for 2 then evicts page 3, now least recently used. These are the only bad guesses: **12 faults**.' },
          { label: 'Step 4: OPT', text: 'Looking forward: for page 2, page 7 is unused until reference 18 while 0 and 1 return sooner — evict 7. For page 3, page 1 is the last of the three in memory to be referenced again. For page 4, page 0 has the farthest next use; then 4 (never used again) goes for page 0; 3 (never again) for page 1; 2 (never) for page 7: **9 faults**.' },
          { label: 'Step 5: Compare', text: 'FIFO 15, LRU 12, OPT 9 — and no algorithm can process this string in three frames with fewer than nine faults. Ignoring the compulsory three, optimal is twice as good as FIFO.' }
        ],
        result: 'FIFO: 15 faults. LRU: 12 faults. OPT: 9 faults — replacement policy alone swings the fault count by 40 percent on the same string with the same memory.'
      },
      {
        title: 'Belady’s anomaly: more memory, more faults',
        problem: 'Run FIFO replacement on the reference string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with three frames, then with four. Compare with LRU.',
        steps: [
          { label: 'Step 1: Three frames', text: '1, 2, 3 fault in. Then 4 evicts 1; 1 evicts 2; 2 evicts 3; 5 evicts 4 — leaving the queue [1, 2, 5]; references 1 and 2 hit. Then 3 faults and evicts 1, 4 faults and evicts 2, and the final 5 hits. Total: **9 faults**.' },
          { label: 'Step 2: Four frames', text: '1, 2, 3, 4 fault in; 1 and 2 hit. Then 5 evicts 1, and 1, 2, 3, 4, 5 fault one after another as the queue keeps evicting exactly the page about to be referenced: **10 faults**.' },
          { label: 'Step 3: Why it happens', text: 'The extra frame changed the eviction order: page 1 survived longer in the four-frame run, so when 5 arrived a different page was oldest, and the queue fell out of phase with the string’s second half. FIFO’s page set with 4 frames is not a superset of its set with 3 — it is not a stack algorithm.' },
          { label: 'Step 4: Contrast with LRU', text: 'LRU on the same string takes 10 faults with 3 frames and 8 with 4 — more frames, fewer faults, as intuition demands. The pages LRU holds with $n$ frames are always a subset of those with $n + 1$.' }
        ],
        result: 'FIFO: 9 faults with 3 frames, 10 with 4 — Belady’s anomaly. LRU: 10 and 8. More memory is guaranteed to help only under stack algorithms such as LRU and optimal.'
      }
    ],
    keyTakeaways: [
      'Replacement is needed when no frame is free; the victim’s dirty bit decides whether a write-out is owed — clean victims cost half the I/O.',
      'On the classic string with 3 frames: FIFO faults 15 times, LRU 12, optimal 9 — and 9 is provably the minimum.',
      'Belady’s anomaly: FIFO on 1,2,3,4,1,2,5,1,2,3,4,5 faults 9 times with 3 frames but 10 times with 4.',
      'LRU and OPT are stack algorithms — pages held with $n$ frames are a subset of those with $n + 1$ — hence immune to Belady’s anomaly.',
      'True LRU needs per-reference bookkeeping (counters or a stack) — too expensive without heavy hardware support.',
      'Second chance adds a reference bit to FIFO; enhanced second chance prefers $(0,0)$ clean-unreferenced victims, avoiding write-outs.',
      'Page buffering — a free-frame pool, background write-out of dirty victims, and remembered evicted pages — softens the cost of a wrong choice.'
    ],
    quiz: [
      {
        q: 'On the reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with three frames, FIFO, LRU and OPT produce respectively:',
        options: ['12, 12, 9 faults', '15, 12, 9 faults', '15, 10, 7 faults', '9, 12, 15 faults'],
        answer: 1,
        explanation: 'FIFO evicts blindly by arrival and faults 15 times; LRU looks backward and faults 12; optimal looks forward and faults 9 — the provable minimum for this string and frame count.'
      },
      {
        q: 'Belady’s anomaly is the observation that:',
        options: ['dirty pages always cost two I/Os', 'the page-fault rate may increase as the number of allocated frames increases', 'LRU approximates optimal only for large memories', 'page tables grow with address space'],
        answer: 1,
        explanation: 'For some algorithms — FIFO being the classic — more frames can mean more faults: the book’s string gives 9 faults with 3 frames and 10 with 4. Stack algorithms such as LRU and OPT cannot exhibit the anomaly.'
      },
      {
        q: 'Which is true of stack algorithms?',
        options: ['They use a stack data structure for replacement', 'The pages in memory with $n$ frames are always a subset of those with $n + 1$ frames', 'They always outperform FIFO on every string', 'They require hardware counters'],
        answer: 1,
        explanation: 'The stack property is about the sets of pages held, not the data structure: with LRU, the $n$ most recently referenced pages remain resident when a frame is added — which is exactly why stack algorithms never show Belady’s anomaly.'
      },
      {
        q: 'In the second-chance (clock) algorithm, a page whose reference bit is 1 is:',
        options: ['evicted immediately', 'written to disk at once', 'given a second chance: the bit is cleared and the hand moves on', 'wired down for the rest of execution'],
        answer: 2,
        explanation: 'A set reference bit buys the page a reprieve — the bit is cleared and the arrival time reset, so the page will not be replaced until every other page has been replaced or given a second chance. If all bits are set, the algorithm degenerates to FIFO.'
      },
      {
        q: 'The enhanced second-chance algorithm prefers to evict pages in class:',
        options: ['$(1,1)$ — recently used and modified', '$(0,0)$ — neither recently used nor modified', '$(0,1)$ — unreferenced but modified', 'whichever page is largest'],
        answer: 1,
        explanation: 'The ordered pair (reference, modify) defines four classes; $(0,0)$ is the best victim because the page was not used recently (unlikely to be needed) and is clean (no write-out required) — the algorithm exists to avoid I/O, not just to drop pages.'
      }
    ,
      // PYQ-pattern — Belady anomaly demonstration (rephrased)
      {
        q: "Reference string $1,2,3,4,1,2,5,1,2,3,4,5$: FIFO with $3$ frames faults $9$ times, with $4$ frames $10$ times. What does this show?",
        options: ["FIFO is optimal", "LRU always faults less than FIFO", "Belady anomaly: more frames can mean more faults under FIFO", "Optimal replacement faults most"],
        answer: 2,
        explanation: "**Step 1 — Given data:** $12$-length string, counts $9$ ($3$ frames) versus $10$ ($4$ frames).\n**Step 2 — Rule:** FIFO evicts longest-resident; stack algorithms never show this reversal, FIFO can.\n**Step 3 — Trace sketch:**\n```\n3 frames: faults on 1,2,3,4,5 plus re-faults = 9\n4 frames: extra resident changes eviction order = 10\n```\n**Step 4 — Cross-check:** LRU on the same string gives $10$ ($3$ frames) and $8$ ($4$ frames) — monotone, as a stack policy must be.\n**Step 5 — Distractors:** optimal faults least ($7$ here); LRU-vs-FIFO ranking varies by string; optimal never faults most.\n**Step 6 — Conclude:** the increase $9 \\to 10$ is Belady anomaly."
      },
      // PYQ-pattern — optimal replacement count (rephrased)
      {
        q: "On $1,2,3,4,1,2,5,1,2,3,4,5$ with $3$ frames, FIFO faults $9$ and LRU faults $10$. How many faults does optimal replacement incur?",
        options: ["$7$", "$9$", "$10$", "$12$"],
        answer: 0,
        explanation: "**Step 1 — Given data:** same $12$-reference string, $3$ frames.\n**Step 2 — Rule:** optimal evicts the page whose next use lies farthest ahead (or never).\n**Step 3 — Computation:**\n```\n faults on 1,2,3,4 (4), then 5 replaces farthest (7 total)\n keeps 1,2 for their imminent reuses, avoiding LRU/FIFO extras\n```\n total $7$.\n**Step 4 — Cross-check:** $7 \\le 9 \\le 10$ respects optimal $\\le$ any realizable policy; with $4$ frames optimal drops to $6$.\n**Step 5 — Distractors:** $9$/$10$ are FIFO/LRU counts; $12$ is every reference faulting.\n**Step 6 — Conclude:** $7$ faults, the unattainable lower bound."
      }
    ]
  },

  // ---------------------------------------------------------------- 10.4
  {
    sectionId: 'osc-ch10-s4',
    readingTime: 10,
    intro: 'Once several processes compete for memory, the OS must decide how many frames each gets — and what to do when there are not enough to go around. Give a process fewer frames than its locality needs and it thrashes: paging instead of computing, and dragging the whole machine down with it.',
    objectives: [
      'Explain the minimum-frames constraint and equal versus proportional allocation',
      'Contrast local and global replacement',
      'Define thrashing and trace the feedback loop that causes it',
      'Apply the working-set model and the page-fault-frequency strategy',
      'Evaluate prepaging with the $\\alpha$ cost model'
    ],
    concepts: [
      {
        term: 'Minimum frames per process',
        kind: 'definition',
        statement: 'A process must be allocated at least enough frames to hold **all pages that a single instruction can reference** — otherwise the instruction faults, restarts, faults again, and loops forever. A machine whose memory-reference instructions use one address needs a minimum of an instruction frame plus an operand frame; allowing one level of indirect addressing raises the minimum to **three** (the instruction can refer to an address that is itself an indirect reference); a move instruction that may straddle two frames with two indirect operands can require **six**.',
        detail: 'The architecture sets the minimum; the amount of available physical memory sets the maximum; everything in between is allocation policy. Intel’s 32- and 64-bit move instructions, moving only between registers and memory (never memory to memory), keep the required minimum low.'
      },
      {
        term: 'Equal and proportional allocation',
        kind: 'method',
        statement: '**Equal allocation** splits $m$ frames over $n$ processes, $m/n$ each — with 93 frames and 5 processes, 18 each and 3 left over as a free-frame pool. **Proportional allocation** weights by need: if $s_i$ is the size of process $p_i$’s virtual memory and $S = \\sum s_i$, then $$a_i = s_i / S \\times m.$$ Priorities can replace or combine with sizes, giving high-priority processes larger shares.',
        detail: 'Either way, allocation tracks the multiprogramming level: when it rises, each process loses frames to fund the newcomer; when it falls, the departed process’s frames spread over the survivors.'
      },
      {
        term: 'Local versus global replacement',
        kind: 'definition',
        statement: '**Local replacement** requires each process to select a victim only from its own allocated frames — its memory footprint is self-contained and its performance depends only on its own paging behavior. **Global replacement** lets a process take a frame from any process — so a process’s resident set depends on everyone else’s behavior, and the same program may run fast one day and slow the next. Global replacement generally results in **greater system throughput** and is the more common choice.',
        detail: 'A middle path: high-priority processes may replace from the frames of lower-priority processes — growing the important process’s allocation at the expense of the unimportant one.'
      },
      {
        term: 'Thrashing',
        kind: 'definition',
        statement: 'A process **thrashes** when it is spending more time paging than executing. The classic spiral: a process enters a new phase needing more frames, faults, and — under a global replacement policy — takes frames from other processes; those fault too and take frames in turn; the queue for the paging device grows while the ready queue empties; **CPU utilization falls**; the CPU scheduler, reading low utilization as underload, **increases the degree of multiprogramming**; the new process steals frames from running processes, faulting worsens, and utilization collapses — throughput plummets while everyone pages.',
        detail: 'The cure for a system in this state is to **decrease** the degree of multiprogramming — the exact opposite of the scheduler’s instinct. A local replacement policy can stop the contagion (a thrashing process cannot steal from its neighbors) but cannot fix the underlying shortage: the paging-device queue still slows every fault.'
      },
      {
        term: 'The locality model',
        kind: 'definition',
        statement: 'As a process executes, it **moves from locality to locality**: a locality is a set of pages actively used together — a function’s instructions, its local variables and a subset of globals — and localities may overlap. Allocate enough frames for the current locality and the process stops faulting until the locality changes; allocate fewer and it thrashes, since it cannot keep all actively used pages resident.',
        detail: 'The locality model is the unstated principle behind all caching: if accesses were random rather than patterned, caching would be useless. Locality is defined by the program structure and its data structures — stacks have good locality, hash tables scatter references on purpose.'
      },
      {
        term: 'The working-set model',
        kind: 'method',
        statement: 'Fix a **working-set window** of $\\Delta$ references. The **working set** is the set of pages in the most recent $\\Delta$ references — an approximation of the program’s locality. If $\\text{WSS}_i$ is the working-set size of process $i$, total demand is $$D = \\sum_i \\text{WSS}_i.$$ If $D > m$ (total demand exceeds total frames), **thrashing occurs**; the operating system selects a process to suspend — its pages are written out and its frames reallocated — until $D \\leq m$.',
        detail: 'Choosing $\\Delta$ is a dilemma: too small and it misses part of the locality; too large and it overlaps several localities; infinite $\\Delta$ gives every page ever touched. Tracking the exact working set is hard — the book approximates it with a fixed-interval timer interrupt plus reference bits, trading accuracy for cost (more history bits and more frequent interrupts shrink the uncertainty).'
      },
      {
        term: 'Page-fault frequency (PFF)',
        kind: 'method',
        statement: 'PFF takes the direct route: **control the fault rate**. Establish upper and lower bounds on the acceptable page-fault rate. If the actual rate exceeds the upper bound, the process needs more frames — allocate another. If it falls below the lower bound, the process may have too many — take one away. If rates stay high and no frames are free, swap a process out and redistribute its frames.',
        detail: 'Where the working-set model infers the need from reference patterns, PFF measures the symptom itself — and where the working set is most useful for deciding what to preload (prepaging), PFF is the direct anti-thrashing control loop.'
      },
      {
        term: 'Prepaging',
        kind: 'method',
        statement: 'Pure demand paging suffers a burst of faults as a process starts, while it pulls in its initial locality. **Prepaging** brings some — or all — of the needed pages into memory at once (for example, a suspended process’s remembered working set, restored before it restarts). If $s$ pages are prepaged and a fraction $\\alpha$ of them is actually used, prepaging pays when the cost of the $s\\alpha$ saved faults beats the cost of the $s(1 - \\alpha)$ unnecessary loads: with $\\alpha$ near 1, prepaging wins; with $\\alpha$ near 0, it loses.',
        detail: 'Files are more predictable targets than executables — sequential access is common — which is why Linux provides readahead() to prefetch file contents into memory. Whether prepaging helps at all is an empirical question per workload.'
      },
      {
        term: 'Current practice',
        kind: 'insight',
        statement: 'Thrashing and swapping have such a disagreeable performance impact that current best practice is to **include enough physical memory** to avoid them: from smartphones through large servers, keeping all working sets resident except under extreme conditions provides the best user experience.',
        detail: 'When free memory does run low, kernel “reapers” reclaim pages between minimum and maximum thresholds, and Linux’s last resort is the out-of-memory (OOM) killer — terminating the process with the highest OOM score (roughly, the one using the most memory).'
      }
    ],
    examples: [
      {
        title: 'Proportional allocation arithmetic',
        problem: 'A system with 1-KB frames has 62 free frames and two processes: a small student process of 10 pages and an interactive database of 127 pages. How do equal and proportional allocation split the frames?',
        steps: [
          { label: 'Step 1: Equal allocation', text: '$62 / 2 = 31$ frames each — but the student process can never use more than 10, so 21 of its frames are, strictly speaking, wasted.' },
          { label: 'Step 2: Set up proportional weights', text: 'With $s_1 = 10$ and $s_2 = 127$, the total is $S = 137$.' },
          { label: 'Step 3: Allocate', text: '$a_1 = 10/137 \\times 62 \\approx 4$ frames and $a_2 = 127/137 \\times 62 \\approx 57$ frames.' },
          { label: 'Step 4: Adjust and re-balance', text: 'Round each $a_i$ to an integer above the architecture’s minimum, keep the sum within $m$ — and recompute whenever the multiprogramming level changes, since a departing process’s frames spread over the survivors.' }
        ],
        result: 'Equal: 31 and 31 (21 wasted on the small process). Proportional: 4 and 57 — frames follow need, not headcount.'
      },
      {
        title: 'Working sets and the thrashing test',
        problem: 'A process’s reference stream reads ...2 6 1 5 7 7 7 7 5 1 6 2 3 4 1 2 3 4 4 4 3 4 3 4 4 4 1 3 2 3 4 4 4 3 4 4 4... — with $\\Delta = 10$, what are the working sets at $t_1$ (after ...7 7 5 1) and $t_2$ (later, inside the 3–4 phase)? If three processes hold working-set sizes of 5, 4 and 4 on a machine with $m = 12$ frames, what happens?',
        steps: [
          { label: 'Step 1: Window at $t_1$', text: 'The last ten references before $t_1$ are 2 6 1 5 7 7 7 7 5 1, so $\\text{WS}(t_1) = \\{1, 2, 5, 6, 7\\}$ — five pages, this locality in full.' },
          { label: 'Step 2: Window at $t_2$', text: 'By $t_2$ the process has moved into a phase referencing only pages 3 and 4 — the window holds nothing but 3s and 4s — so $\\text{WS}(t_2) = \\{3, 4\\}$, just two pages.' },
          { label: 'Step 3: Total demand', text: 'Three processes with $\\text{WSS} = 5, 4, 4$ give $D = 5 + 4 + 4 = 13$.' },
          { label: 'Step 4: Verdict', text: '$D = 13 > m = 12$: some process cannot hold its locality, so thrashing is inevitable. The working-set strategy suspends one process — writing its pages to backing store — and reallocates its frames until $D \\leq m$, restarting it when memory frees up.' }
        ],
        result: '$\\text{WS}(t_1) = \\{1, 2, 5, 6, 7\\}$ and $\\text{WS}(t_2) = \\{3, 4\\}$; with $D = 13$ against 12 frames, the system must suspend a process or thrash.'
      }
    ],
    keyTakeaways: [
      'Every process needs at least enough frames for its worst single instruction — indirect addressing can force 3 to 6 or more frames.',
      'Equal allocation splits $m/n$; proportional gives $a_i = s_i/S \\times m$ (10 and 127 pages over 62 frames → 4 and 57).',
      'Local replacement is predictable; global replacement usually wins on throughput — and lets one process’s phase change cascade into system-wide faulting.',
      'Thrashing = more time paging than executing; the deadly loop is low CPU utilization → higher multiprogramming → more faults → lower utilization.',
      'Working set: the pages touched in the last $\\Delta$ references; when $D = \\sum \\text{WSS}_i$ exceeds $m$, suspend processes until demand fits supply.',
      'PFF bounds the fault rate: above the ceiling, grant frames; below the floor, reclaim them.',
      'Prepaging $s$ pages pays only when the used fraction $\\alpha$ is high — the cost of $s(1 - \\alpha)$ wasted loads must lose to $s\\alpha$ saved faults.'
    ],
    quiz: [
      {
        q: 'A system has 62 free frames and two processes with 10 and 127 pages. Proportional allocation gives approximately:',
        options: ['31 and 31', '10 and 52', '4 and 57', '6 and 56'],
        answer: 2,
        explanation: 'With $S = 137$: $a_1 = 10/137 \\times 62 \\approx 4$ and $a_2 = 127/137 \\times 62 \\approx 57$ — frames follow need. Equal allocation would give 31 each, wasting 21 on the small process.'
      },
      {
        q: 'A process is said to be thrashing when it:',
        options: ['uses 100% of the CPU', 'spends more time paging than executing', 'holds more frames than any other process', 'never faults'],
        answer: 1,
        explanation: 'Thrashing is the paging death spiral: too few frames for the locality means every eviction removes a page needed right back, so the process pages constantly and computes barely at all — and CPU utilization collapses system-wide.'
      },
      {
        q: 'In the working-set model, thrashing is expected when:',
        options: ['$\\Delta$ is larger than the page table', `$D = \\sum \\text{WSS}_i$ exceeds the total number of frames $m$`, 'the fault rate is zero', 'every process uses global replacement'],
        answer: 1,
        explanation: 'Total demand $D$ is the sum of the working-set sizes; when it exceeds supply $m$, some process cannot keep its locality resident and thrashes — the model’s remedy is to suspend a process and reclaim its frames.'
      },
      {
        q: 'The page-fault-frequency strategy responds to a fault rate above the upper bound by:',
        options: ['swapping the process out', 'taking a frame away from the process', 'allocating the process another frame', 'increasing the page size'],
        answer: 2,
        explanation: 'A high fault rate is the direct signal that the process lacks frames: PFF grants another. Below the lower bound it reclaims one — and only if rates stay high with no free frames does it swap a process out.'
      },
      {
        q: 'Prepaging $s$ pages, of which a fraction $\\alpha$ are actually used, is worthwhile when:',
        options: ['$\\alpha$ is close to 0', '$\\alpha$ is close to 1', 'the pages are dirty', 'the working set is empty'],
        answer: 1,
        explanation: 'Prepaging saves $s\\alpha$ faults but wastes $s(1 - \\alpha)$ unnecessary loads; it wins only when the saved-fault cost dominates — that is, when nearly everything prefetched (α near 1) is actually used.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.5
  {
    sectionId: 'osc-ch10-s5',
    readingTime: 11,
    intro: 'Virtual memory does more than move pages: it turns files into memory and hands the kernel its own allocation machinery. Memory-mapped files make file I/O look like memory access — and are how shared memory is actually built — while slab and buddy allocators keep kernel structures dense, fast and contiguous where hardware demands it.',
    objectives: [
      'Explain memory mapping and its performance advantage over read() and write()',
      'Use mapped files as shared memory, including the Windows API',
      'Describe buddy-system and slab allocation of kernel memory',
      'Discuss TLB reach, I/O interlock and page locking as paging-system design points',
      'Summarize Linux and Windows 10 virtual-memory practice'
    ],
    concepts: [
      {
        term: 'Memory-mapped files',
        kind: 'definition',
        statement: '**Memory mapping** a file logically associates part of a process’s virtual address space with the file, by mapping a disk block to a page (or pages). The first access proceeds through ordinary demand paging — a page fault reads a page-sized portion of the file into a physical page — and subsequent reads and writes are routine memory accesses. Writes are not necessarily synchronous: systems typically update the file from the memory image when it is closed, spilling intermediate changes to swap under memory pressure rather than losing them.',
        detail: 'Solaris takes the idea to its limit: every file is memory-mapped regardless of how it was opened — via mmap() into the process for mapped use, or into the kernel’s address space for open()/read()/write() calls — so all file I/O flows through the efficient memory subsystem with no per-access system-call overhead.'
      },
      {
        term: 'Sharing and shared memory via mapped files',
        kind: 'method',
        statement: 'Multiple processes may map the same file concurrently: each virtual-memory map points to **the same physical page** holding a copy of the disk block, so writes by any process are seen by all the others. With **MAP_SHARED**, writes modify the shared page (and ultimately the file); with **MAP_PRIVATE**, copy-on-write gives each process its own copy of any page it modifies while sharing the rest read-only. Accesses must be coordinated — the Chapter 6 mutual-exclusion tools apply.',
        detail: 'Shared memory is in fact implemented by memory mapping: processes communicate by mapping the same object (a POSIX shared-memory object, or simply a file) into their virtual address spaces — the mapped region is the shared memory. This is exactly the mechanism of Section 3.5’s POSIX shared memory.'
      },
      {
        term: 'mmap versus read() and write()',
        kind: 'insight',
        statement: 'The standard open()/read()/write() path pays a system call and a copy per file access; the mapped path turns accesses into loads and stores serviced by the paging system, with the OS page cache absorbing reuse. Memory mapping thereby **saves a copy of the data** — the user buffer versus the page — and simplifies file access, at the cost of fault-driven loading and page-table bookkeeping.',
        detail: 'The tradeoff is not universal: a database that manages its own I/O buffering can perform worse through the OS’s virtual memory (double buffering), which is why some systems offer raw disk access that bypasses file-system services entirely.'
      },
      {
        term: 'The Windows mapping API',
        kind: 'method',
        statement: 'Windows shared memory is built on mapped files. A producer first opens the file with **CreateFile()** (returning a HANDLE), then creates a mapping of that handle with **CreateFileMapping()** — naming the shared-memory object, for example SharedObject — and establishes a view with **MapViewOfFile()**, which returns a pointer into the process’s virtual address space. A consumer joins via **OpenFileMapping()** on the same name and its own MapViewOfFile(); UnmapViewOfFile() and CloseHandle() tear everything down.',
        detail: 'The mapped view may cover the entire file or an offset-and-size subsection; the mapping is demand-paged, so the whole file need not be resident. Writes through the pointer are writes to the shared-memory object — and to the file.'
      },
      {
        term: 'Kernel memory and the buddy system',
        kind: 'method',
        statement: 'Kernel memory is allocated from a **free-memory pool separate** from the user free-frame list, because the kernel requests data structures smaller than a page (demanding fragmentation discipline) and because devices that interact directly with physical memory may require **physically contiguous** pages. The **buddy system** allocates from a fixed-size segment of contiguous pages as a power-of-2 allocator: requests are rounded up to the next power of 2 (a 21-KB request is satisfied by a 32-KB block), free blocks split into equal **buddies**, and on release, adjacent buddies **coalesce** into larger blocks.',
        detail: 'Coalescing is fast — freeing one 32-KB block can cascade CL + CR → 64 KB → 128 KB → 256 KB. The drawback is internal fragmentation: rounding up cannot guarantee wasting less than **50 percent** of an allocated unit (a 33-KB request needs a 64-KB block).'
      },
      {
        term: 'Slab allocation',
        kind: 'method',
        statement: 'A **slab** is one or more physically contiguous pages; a **cache** — one per unique kernel object type (process descriptors, file objects, semaphores, and so on) — owns one or more slabs populated with pre-constructed **objects** of that type. A request is served from a partially used slab first, then an empty slab, and only then is a new slab grown from contiguous pages. Each slab is **full**, **empty** or **partial**.',
        detail: 'Two benefits: **no fragmentation waste** (each cache’s slabs are divided into exact object-sized chunks) and **fast service** (objects are created in advance and simply marked used; a freed object is immediately reusable). The allocator appeared in Solaris 2.4; Linux adopted it in Version 2.2 as SLAB, and today SLUB (less metadata, no per-CPU queues) is the default, with SLOB serving small embedded systems.'
      },
      {
        term: 'TLB reach and huge pages',
        kind: 'insight',
        statement: '**TLB reach** is the amount of memory accessible from the TLB: the **number of entries multiplied by the page size**. Ideally a process’s working set fits inside the TLB’s reach. Doubling the entries doubles the reach, but associative memory is expensive and power-hungry; **increasing the page size — say 4 KB to 16 KB — quadruples the reach** at the price of fragmentation for applications that need small pages.',
        detail: 'Most architectures therefore support multiple page sizes: Linux defaults to 4 KB and offers **huge pages** (for example 2 MB); ARMv8’s **contiguous bit** lets a single TLB entry map a block of adjacent pages — a 64-KB entry covering $16 \\times 4$-KB blocks, a 1-GB entry covering $32 \\times 32$-MB blocks — stretching reach without more entries. Mixed page sizes may force software-managed TLBs, whose cost the hit-ratio gain usually repays.'
      },
      {
        term: 'I/O interlock and page locking',
        kind: 'method',
        statement: 'Some pages must be **locked** in memory. The classic hazard: a process queues an I/O request to a user buffer and sleeps; another process — under global replacement — chooses that buffer page as a victim and pages it out; when the I/O finally runs, the device writes into a frame that now belongs to a different page. Two fixes: never do I/O to user memory (copy through system memory — expensive), or associate a **lock bit** with each frame so locked frames cannot be selected for replacement while the transfer is live.',
        detail: 'Lock bits protect kernel code that cannot tolerate faults, pin database-managed regions, and shield a newly paged-in page from being stolen before its process even runs. They can leak — a bug that never unlocks strands a frame — so Solaris treats them as hints under pressure, and user-level pinning usually requires privileges. Inverted page tables add their own demand-paging headache: the per-process external page table is itself paged, so a fault can provoke another fault, and kernels must handle that case carefully.'
      },
      {
        term: 'Linux and Windows 10 in practice',
        kind: 'insight',
        statement: '**Linux** uses demand paging with a global page-replacement policy similar to the LRU-approximation clock algorithm, managing pages on two lists: an **active list** (pages considered in use — referenced pages move to its rear) and an **inactive list** (not recently referenced, eligible for reclamation; a reference promotes a page back to active). The page-out daemon **kswapd** awakens when free memory falls below a threshold and reclaims from the inactive list; when memory falls to very low levels, the **out-of-memory (OOM) killer** terminates the process with the highest OOM score — the one using the largest percentage of memory. Kernel memory uses the buddy system plus slab/SLUB. **Windows 10** implements demand paging with **clustering** (a fault brings neighboring pages too: clusters of 3 for data pages, 7 otherwise) and per-process working-set management with defaults of **minimum 50 pages, maximum 345**, combining local replacement within the working set with a global tactic — **automatic working-set trimming** — when free memory runs low, plus memory compression.',
        detail: 'Windows 10 supports 32- and 64-bit systems with up to a 128-TB virtual address space (64-bit), and it implements essentially the whole toolkit: shared libraries, demand paging, copy-on-write, paging and memory compression.'
      }
    ],
    examples: [
      {
        title: 'Buddy allocation, split by split',
        problem: 'A 256-KB kernel segment receives a 21-KB request. Show the buddy system’s splits, the allocation, and the merge on release.',
        steps: [
          { label: 'Step 1: Round up', text: 'The next highest power of 2 above 21 KB is 32 KB — that is the block size that must be produced.' },
          { label: 'Step 2: Split down', text: 'The 256-KB segment splits into buddies $A_L$ and $A_R$ (128 KB each); one of those splits into $B_L$ and $B_R$ (64 KB); one of those splits into $C_L$ and $C_R$ (32 KB).' },
          { label: 'Step 3: Allocate', text: '$C_L$ (32 KB) serves the 21-KB request, wasting $32 - 21 = 11$ KB internally; $C_R$, one 64-KB buddy and one 128-KB buddy remain free.' },
          { label: 'Step 4: Coalesce on release', text: 'Freeing $C_L$ merges it with its buddy $C_R$ into a 64-KB block; that block merges with its buddy into 128 KB; and that merges back into the full 256-KB segment — three pointer-level merges, no searching.' },
          { label: 'Step 5: Stress the downside', text: 'A 33-KB request would have to be satisfied by a 64-KB segment — nothing in the scheme guarantees wasting less than 50 percent of an allocation.' }
        ],
        result: 'Two splits per level, merges by symmetry: the buddy system trades at most half a block of internal fragmentation for log-time coalescing and physically contiguous blocks.'
      },
      {
        title: 'Slab allocation of process descriptors',
        problem: 'The Linux process descriptor, struct task_struct, requires roughly 1.7 KB. Explain how the slab allocator serves a fork().',
        steps: [
          { label: 'Step 1: A cache exists per type', text: 'Linux keeps a cache dedicated to process-descriptor objects — separate caches serve file objects, semaphores and every other kernel structure.' },
          { label: 'Step 2: Size a slab', text: 'A 12-KB slab — three contiguous 4-KB pages — could store six 2-KB objects: each slab is divided into chunks exactly the size of the object it represents.' },
          { label: 'Step 3: Serve the request', text: 'The allocator first tries a partially used slab, then an empty slab; only when both are exhausted does it grow a new slab from contiguous physical pages and hand out an object from it.' },
          { label: 'Step 4: Release', text: 'When the process exits, its object is marked free and returned to its cache — instantly available for the next fork(), with no rebuilding and no coalescing.' }
        ],
        result: 'Allocation becomes a pointer bump into a pre-built object: the kernel’s most frequent allocations become its cheapest, and no space is lost to fragmentation.'
      },
      {
        title: 'TLB reach arithmetic',
        problem: 'A processor has a 64-entry TLB. What is its reach with 4-KB pages? With 2-MB huge pages? What does the ARMv8 contiguous bit add?',
        steps: [
          { label: 'Step 1: Reach with 4-KB pages', text: '$64 \\times 4$ KB $= 256$ KB of memory directly translatable from the TLB.' },
          { label: 'Step 2: Reach with 2-MB pages', text: '$64 \\times 2$ MB $= 128$ MB — 512 times the reach with the same hardware, paid for in internal fragmentation whenever allocations are small.' },
          { label: 'Step 3: The contiguous bit', text: 'One ARMv8 TLB entry with the contiguous bit set can map, for example, a 64-KB block comprising $16 \\times 4$-KB adjacent pages — reach grows without adding entries, at the cost of software managing entries of mixed size.' }
        ],
        result: 'Reach = entries × page size: 256 KB with 4-KB pages, 128 MB with 2-MB pages on the same 64-entry TLB. If the working set outgrows the reach, translation itself becomes the bottleneck.'
      }
    ],
    keyTakeaways: [
      'A mapped file turns disk blocks into pages: the first touch faults, later touches are memory accesses; write-back happens at close, with intermediate changes spilled to swap.',
      'Shared memory = several processes mapping the same object; MAP_SHARED shares writes, MAP_PRIVATE copies on write — mutual exclusion still applies.',
      'Windows shared memory: CreateFile → CreateFileMapping (a named object) → MapViewOfFile; mappings are demand-paged views into the address space.',
      'Kernel memory is a separate pool: the buddy system for contiguous power-of-2 blocks (fast coalescing, up to 50-percent waste), slab/SLUB for exact-sized objects (no fragmentation waste, near-free allocation).',
      'TLB reach = entries × page size; huge pages and ARMv8 contiguous blocks stretch it without more (expensive) TLB entries.',
      'Lock bits pin I/O buffers, kernel pages and freshly faulted pages against replacement — an unlocked DMA buffer is a correctness hazard, not a performance one.',
      'Linux pairs active/inactive lists with kswapd and the OOM killer; Windows 10 uses clustered demand paging, per-process working-set minima and maxima, automatic trimming and a compression store.'
    ],
    quiz: [
      {
        q: 'Memory mapping a file means:',
        options: ['copying the whole file into memory at open()', 'mapping disk blocks to pages so that, after a first page fault, file access happens via ordinary memory reads and writes', 'disabling the page cache for that file', 'reading the file through DMA only'],
        answer: 1,
        explanation: 'A disk block is associated with a page in the process’s address space: initial access demand-pages the data in, and subsequent accesses are plain loads and stores — no system call per access, and one data copy saved.'
      },
      {
        q: 'Two processes want a shared-memory region on Windows. The canonical sequence is:',
        options: ['fork() then exec()', 'CreateFile → CreateFileMapping → MapViewOfFile on a named object', 'malloc() with the SHARED flag', 'pipe() followed by mmap of the pipe'],
        answer: 1,
        explanation: 'CreateFileMapping turns a file handle into a named mapping object — the shared-memory object — and MapViewOfFile maps a view into the process’s virtual address space; the second process opens the same named object and maps its own view of the same physical pages.'
      },
      {
        q: 'The buddy system satisfies a 21-KB kernel request with a block of:',
        options: ['21 KB exactly', '22 KB', '32 KB', '64 KB'],
        answer: 2,
        explanation: 'The power-of-2 allocator rounds up to the next highest power of 2 — 32 KB — leaving 11 KB of internal fragmentation. Merges stay cheap, but nothing guarantees wasting less than 50 percent of an allocated unit.'
      },
      {
        q: 'TLB reach is defined as:',
        options: ['the number of TLB entries', 'entries × page size', 'the hit ratio divided by page size', 'the size of the page table'],
        answer: 1,
        explanation: 'Reach is the memory directly translatable from the TLB: the entry count times the page size. Growing pages from 4 KB to 16 KB quadruples it — which is the argument for huge pages when working sets outgrow the TLB.'
      },
      {
        q: 'A page whose frame has its lock bit set (I/O interlock):',
        options: ['cannot be selected for replacement until it is unlocked', 'is exempt from protection checks', 'must be a huge page', 'is pinned in the TLB rather than memory'],
        answer: 0,
        explanation: 'The lock bit protects frames that must stay resident — most classically a user buffer undergoing device I/O: paging it out mid-transfer would let the device write into a frame that now belongs to someone else. Kernel code and freshly faulted pages are locked for the same reason.'
      }
    ]
  }
]
