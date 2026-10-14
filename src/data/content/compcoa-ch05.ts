import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Computer Organization and Architecture
// Chapter 5: I/O — Interrupts, DMA and Buses (Sections 5.1–5.4)
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const compcoaCh05Content: SectionContent[] = [
  // ------------------------------------------------------------------ 5.1
  {
    sectionId: 'compcoa-ch5-s1',
    readingTime: 7,
    intro: 'Programmed input-output moves every byte under direct processor command: the CPU polls a status flag, then reads or writes the data register when ready. No extra hardware helps and no cycles hide, so cost accounting is brutally simple. This section prices polling loops and states when busy-waiting still wins.',
    objectives: [
      'Describe the poll-then-transfer loop with status and data registers',
      'Compute polling overhead from poll cost, rate and useful work share',
      'State when polling beats interrupts on latency and simplicity'
    ],
    concepts: [
      {
        term: 'Status polling loop',
        kind: 'definition',
        statement: 'The CPU spins on a **status** flag such as `READY`, then moves one unit through the **data** register, so `while (READY == 0) {}` followed by `DATA` repeats once per **byte** or word transferred.',
        detail: 'All timing is software: the device sets READY when data lands, the CPU clears it by reading. No context switch or vector lookup intervenes.'
      },
      {
        term: 'Poll cost math',
        kind: 'method',
        statement: 'Polling overhead obeys **share** $= p \\times f$ where `p` is seconds per poll and `f` is polls per second, so $p = 0.5$ us at $f = 100000$ polls per second burns $0.5 \\times 100000 = 50000$ us or **5 percent** of each second.',
        detail: 'Each poll is a status read plus a branch; transfer adds data-register moves. Useful work gets whatever fraction remains after the polling share.'
      },
      {
        term: 'Latency character',
        kind: 'insight',
        statement: 'Polling latency is one **poll interval** at worst, because the CPU notices `READY` on its very next check with no **vector** or save-restore delay in the path.',
        detail: 'Tight loops detect events within microseconds. The price is 100 percent CPU ownership during the wait, which suits nothing else competing.'
      },
      {
        term: 'When polling wins',
        kind: 'insight',
        statement: '**Polling** wins when events are **frequent** (the wait is short), **latency-critical** (handlers must fire at once), or systems are **tiny** with no `interrupt` controller to **program**.',
        detail: 'Fast devices with predictable timing waste more in interrupt setup than in a short spin. Rare slow devices invert the trade toward interrupts.'
      },
      {
        term: 'Programmed transfer steps',
        kind: 'method',
        statement: 'Each unit costs **poll** plus **move** plus **bookkeeping**, so moving `N` words at `c` cycles of loop plus `m` cycles of move takes $(c + m) \\times N$ cycles on the **CPU** with zero overlap.',
        detail: 'Block loops add pointer bumps and bounds checks to $c$. The CPU is the DMA engine here, one instruction at a time.'
      }
    ],
    examples: [
      {
        title: 'Price: polling share of a fast sensor',
        problem: 'Each poll costs 0.5 us and the CPU polls 100000 times per second. Compute the polling share, the remaining useful share, and the verdict for a second compute task.',
        steps: [
          { label: 'Step 1', text: 'Polling share:\n```text\n0.5 us x 100000 = 50000 us = 5 percent of 1 s\n```\nOne twentieth of the processor burns in status reads.' },
          { label: 'Step 2', text: 'Useful share: $100 - 5 = 95$ percent remains for work plus transfers. Data moves add a little more on top.' },
          { label: 'Step 3', text: 'Verdict: polling is fine here (5 percent tax, minimal latency), but at 1M polls per second the same math gives 50 percent and interrupts win. Frequency decides.' }
        ],
        result: '5 percent polling tax with 95 percent left; a tenfold faster device would take 50 percent and force interrupts.'
      },
      {
        title: 'Count: programmed block move cost',
        problem: 'Move 4000 words with programmed I/O at 3 loop cycles plus 2 move cycles per word on a 1 ns clock. Compute total cycles and time with zero overlap.',
        steps: [
          { label: 'Step 1', text: 'Per-word cost:\n```text\nc + m = 3 + 2 = 5 cycles per word\n```\nPoll, branch, pointer bump and the data move together.' },
          { label: 'Step 2', text: 'Total: $5 \\times 4000 = 20000$ cycles, time $= 20000 \\times 1 = 20000$ ns $= 20$ us, all on the CPU.' },
          { label: 'Step 3', text: 'DMA contrast preview: the same 4000 words by cycle stealing cost the CPU only setup plus stolen cycles, freeing the 20000-cycle window for compute.' }
        ],
        result: '20000 cycles and 20 us of full CPU ownership; every cycle is stolen from compute.'
      }
    ],
    keyTakeaways: [
      'Programmed I/O polls READY then moves DATA with the CPU in the loop for every unit.',
      'Polling share equals poll cost times poll rate, leaving the rest for useful work.',
      'Latency is minimal at one poll interval but CPU ownership is total.',
      'Polling suits frequent, urgent or tiny systems and loses on rare slow devices.'
    ],
    quiz: [
      // PYQ-pattern: polling overhead share
      {
        q: 'Poll cost 0.5 us, rate 100000 per second. CPU share burned by polling?',
        options: ['5 percent', '0.5 percent', '50 percent', '95 percent'],
        answer: 0,
        explanation: 'Step 1: Product is 0.5 times 100000 equals 50000 us. Step 2: One second is 1000000 us. Step 3: 50000 divided by 1000000 is 0.05. Step 4: Hence 5 percent.'
      },
      // PYQ-pattern: polling latency character
      {
        q: 'What is the worst-case detection latency of a tight polling loop?',
        options: ['One full context-switch time', 'About one poll interval', 'One disk seek', 'Zero always'],
        answer: 1,
        explanation: 'Step 1: CPU checks READY every iteration. Step 2: An event lands at most one interval before a check. Step 3: No vector or save delay adds. Step 4: So latency is one poll interval.'
      },
      // PYQ-pattern: programmed block cost
      {
        q: '4000 words at 5 CPU cycles each, 1 ns clock. Programmed transfer time?',
        options: ['4 us', '20 us', '200 us', '2 ms'],
        answer: 1,
        explanation: 'Step 1: Cycles equal 5 times 4000 equals 20000. Step 2: Time equals 20000 times 1 ns equals 20000 ns. Step 3: 20000 ns is 20 us. Step 4: All of it owns the CPU.'
      },
      // PYQ-pattern: polling versus interrupt choice
      {
        q: 'When does polling beat interrupts?',
        options: ['Rare slow device with heavy compute alongside', 'Always, polling is free', 'Bursty disk traffic', 'Frequent fast events needing minimal latency'],
        answer: 3,
        explanation: 'Step 1: Frequent events make waits short. Step 2: Tight loops beat vector setup on latency. Step 3: Rare slow devices waste spins. Step 4: So frequent urgent events favor polling.'
      }
    ]
  },
  // ------------------------------------------------------------------ 5.2
  {
    sectionId: 'compcoa-ch5-s2',
    readingTime: 8,
    intro: 'Interrupt-driven input-output frees the processor to compute until the device demands attention, then suspends work, runs a handler and resumes. Vectors locate the handler, priorities order simultaneous requests, and daisy chains or controllers arbitrate. This section prices the per-transfer overhead that decides when interrupts pay.',
    objectives: [
      'Trace an interrupt from request through vector fetch to handler return',
      'Compare daisy-chain, priority-encoder and controller arbitration',
      'Compute effective transfer rate from handler cost and data size'
    ],
    concepts: [
      {
        term: 'Interrupt sequence',
        kind: 'definition',
        statement: 'On **request** the CPU finishes the current instruction, saves `PC` and status, fetches the handler address from the **vector** table, runs the handler, then restores state with **RETI** and resumes the interrupted **program**.',
        detail: 'Atomic save boundaries keep instructions un-split. Nested interrupts re-enable selectively inside handlers for urgent sources.'
      },
      {
        term: 'Vectors and priorities',
        kind: 'definition',
        statement: 'Each device owns a **vector** entry holding its handler address, and a **priority** `number` decides among simultaneous requests so disk completion can preempt a keyboard handler through **mask** bits.',
        detail: 'Masks let handlers defer low-priority sources while servicing. Priority resolves ties deterministically instead of by arrival luck.'
      },
      {
        term: 'Daisy chain arbitration',
        kind: 'method',
        statement: 'A **daisy chain** threads one `grant` line through devices in priority order, so the nearest requesting device to the **controller** keeps the grant and blocks **downstream** neighbors with zero extra select logic.',
        detail: 'Position is priority: rewiring changes rank. A stuck device can starve the tail, which centralized encoders avoid.'
      },
      {
        term: 'Overhead arithmetic',
        kind: 'method',
        statement: 'Each transfer costs **overhead** $o$ plus data time, so with $o = 20$ us per `interrupt` and 4-byte transfers the ceiling is $4 \\div 20 = 0.2$ bytes per us or **0.2 MB per s** no matter how fast the **device** streams.',
        detail: 'Cost splits into save, vector fetch, handler body and restore. Small transfers amortize worst; bulk movement belongs to DMA.'
      },
      {
        term: 'Effective-rate law',
        kind: 'law',
        statement: 'Effective rate obeys $R = D \\div (o + D \\div B)$ where `D` is bytes per transfer, `o` overhead and `B` raw bandwidth, so bigger `D` dilutes **overhead** while faster `B` only trims the **data** term.',
        detail: 'Interrupts suit modest rates with real compute between events. Past the knee where $o$ dominates, polling or DMA takes over.'
      }
    ],
    examples: [
      {
        title: 'Price: interrupt ceiling for word-at-a-time disk',
        problem: 'Overhead is 20 us per interrupt moving 4 bytes. Compute the rate ceiling, then the CPU share if the device offers 4000 such transfers per second.',
        steps: [
          { label: 'Step 1', text: 'Ceiling:\n```text\n4 bytes / 20 us = 0.2 MB per s\n```\nHandler cost, not media speed, binds word-at-a-time flow.' },
          { label: 'Step 2', text: 'Share: $4000 \\times 20 = 80000$ us per second $= 8$ percent of the CPU in overhead alone.' },
          { label: 'Step 3', text: 'Bulk contrast: moving 4000 bytes per interrupt drops overhead per byte by 1000 times to $20 \\div 4000 = 0.005$ us per byte, the exact trade DMA exploits.' }
        ],
        result: 'Ceiling 0.2 MB per s with 8 percent CPU at 4000 transfers per second; bigger chunks dilute overhead linearly.'
      },
      {
        title: 'Trace: nested keyboard preempted by disk',
        problem: 'A keyboard handler runs with keyboard-level mask set when a disk request at higher priority arrives. Order the next four hardware and software actions.',
        steps: [
          { label: 'Step 1', text: 'Arbitrate:\n```text\ndisk wins priority -> save keyboard-handler state\n```\nMasks admit higher but not lower sources during handling.' },
          { label: 'Step 2', text: 'Vector to the disk handler through its table entry and service the block-ready event.' },
          { label: 'Step 3', text: 'RETI restores the keyboard handler, which finishes and RETIs to the main program. Nesting depth stays bounded by priority levels, and equal-priority requests queue in arrival order.' }
        ],
        result: 'Disk preempts keyboard, then control unwinds handler by handler; priorities bound the stack depth.'
      }
    ],
    keyTakeaways: [
      'Interrupts save state, vector to a handler, service, then restore and resume with RETI.',
      'Vectors locate handlers while priorities and masks order simultaneous requests.',
      'Daisy chains grant by position; encoders grant by number with fairer behavior.',
      'Per-transfer overhead caps word-at-a-time rates, so bulk belongs to DMA.'
    ],
    quiz: [
      // PYQ-pattern: interrupt rate ceiling
      {
        q: 'Overhead 20 us per interrupt, 4 bytes each. Rate ceiling?',
        options: ['0.2 MB per s', '2 MB per s', '5 MB per s', '80 MB per s'],
        answer: 0,
        explanation: 'Step 1: Bytes per us equal 4 divided by 20 equals 0.2. Step 2: That is 0.2 MB per s. Step 3: Faster media cannot pass it. Step 4: Only bigger chunks raise it.'
      },
      // PYQ-pattern: interrupt CPU share
      {
        q: '4000 transfers per second at 20 us overhead each. CPU share?',
        options: ['0.8 percent', '8 percent', '80 percent', '0.08 percent'],
        answer: 1,
        explanation: 'Step 1: Total is 4000 times 20 equals 80000 us. Step 2: A second is 1000000 us. Step 3: Ratio is 0.08. Step 4: Hence 8 percent.'
      },
      // PYQ-pattern: daisy-chain arbitration
      {
        q: 'How does a daisy chain fix priority?',
        options: ['By transfer size', 'By random draw', 'By position along the grant line', 'By CPU clock phase'],
        answer: 2,
        explanation: 'Step 1: One grant line threads all devices. Step 2: Nearest requester keeps it. Step 3: Tail is blocked while upstream holds. Step 4: So position is priority.'
      },
      // PYQ-pattern: effective-rate scaling
      {
        q: 'Which change most raises interrupt-driven throughput for tiny transfers?',
        options: ['Faster media with same 4-byte chunks', 'Bigger bytes per interrupt to dilute overhead', 'Deeper nesting', 'Longer vectors'],
        answer: 1,
        explanation: 'Step 1: Overhead dominates tiny transfers. Step 2: Media speed trims only the data term. Step 3: Bigger chunks divide overhead per byte. Step 4: So chunk size wins most.'
      }
    ]
  },
  // ------------------------------------------------------------------ 5.3
  {
    sectionId: 'compcoa-ch5-s3',
    readingTime: 9,
    intro: 'Direct memory access moves blocks without the processor in the data path: the CPU programs source, destination and count into a controller, then computes while words flow. Cycle stealing interleaves single words with CPU cycles while burst mode seizes the bus for the whole block. This section times both modes and states the setup.',
    objectives: [
      'List the DMA setup registers and the handoff sequence with the CPU',
      'Time a block transfer under cycle stealing versus burst mode',
      'Explain when stealing wins on responsiveness and burst wins on speed'
    ],
    concepts: [
      {
        term: 'DMA setup',
        kind: 'definition',
        statement: 'The CPU writes **source**, **destination** and **count** registers plus a control word (`read` or `write`, mode bits), then the **controller** requests the bus, moves words, decrements count, and raises **done** interrupt at zero.',
        detail: 'One interrupt per block replaces one per word. The CPU only verifies and unmaps after completion.'
      },
      {
        term: 'Cycle stealing',
        kind: 'definition',
        statement: '**Cycle stealing** takes one bus cycle per word between CPU cycles, so the processor **slows** but never stops and memory sees interleaved **CPU** and `DMA` addresses on alternate cycles.',
        detail: 'Responsiveness stays high because the longest DMA hold is one cycle. Total time stretches with CPU contention rather than blocking.'
      },
      {
        term: 'Burst and block modes',
        kind: 'definition',
        statement: '**Burst** (block) mode holds the **bus** for the whole transfer, moving `N` words back to back for minimum **transfer** time while the CPU waits or works from **cache** only.',
        detail: 'Throughput peaks because no arbitration repeats per word. Latency-sensitive CPU misses stall for the burst length.'
      },
      {
        term: 'Transfer-time math',
        kind: 'method',
        statement: 'Transfer time obeys $T = S + N \\times w$ where `S` is **setup**, `N` word count and `w` seconds per word, so $S = 50$ us, $N = 4000$ and $w = 0.5$ us give $T = 50 + 4000 \\times 0.5 = 2050$ us or about **2.05 ms**.',
        detail: 'Setup dominates short blocks, word time dominates long ones. Interrupts add one overhead $o$ at the end instead of $N$ of them.'
      },
      {
        term: 'Mode-choice rule',
        kind: 'insight',
        statement: 'Choose **stealing** when the CPU must stay **responsive** during transfer, and **burst** when the block must finish **fastest** and the CPU can idle or live from **cache**, since `arbitration` and **contention** price the difference.',
        detail: 'Disks stream in bursts; interactive machines steal. Controllers offer both with a mode bit per channel.'
      }
    ],
    examples: [
      {
        title: 'Time: 4000-word block by stealing against burst',
        problem: 'Setup 50 us, word time 0.5 us stealing (CPU slowed) versus 0.4 us burst (bus held). Compute both totals and the CPU freedom in each.',
        steps: [
          { label: 'Step 1', text: 'Stealing total:\n```text\nT = 50 + 4000 x 0.5 = 2050 us\n```\nCPU runs between stolen cycles at reduced rate throughout.' },
          { label: 'Step 2', text: 'Burst total: $T = 50 + 4000 \\times 0.4 = 1650$ us. CPU waits or hits cache for about $1600$ us of bus hold.' },
          { label: 'Step 3', text: 'Programmed contrast: $4000 \\times 5$ cycles at 1 ns was $20$ us of CPU-owned moves but zero setup; DMA pays 50 us setup once and returns the CPU, winning hugely on big blocks and losing on tiny ones.' }
        ],
        result: 'Stealing 2050 us with CPU alive, burst 1650 us with CPU held; both dwarf per-word interrupt overhead on large blocks.'
      },
      {
        title: 'Decide: tiny 4-word sensor against 4000-word disk',
        problem: 'Setup is 50 us and word time 0.5 us. Compare DMA against programmed moves (5 cycles per word at 1 ns) for 4 words and for 4000 words.',
        steps: [
          { label: 'Step 1', text: 'Four words DMA:\n```text\nT = 50 + 4 x 0.5 = 52 us\n```\nProgrammed: $4 \\times 5 = 20$ cycles $= 0.02$ us. Programmed wins by far.' },
          { label: 'Step 2', text: 'Four thousand words DMA: $2050$ us with CPU free. Programmed: $20000$ cycles $= 20$ us but CPU fully owned; with real memory timing programmed stalls dominate and interrupts would add $4000 \\times 20 = 80000$ us.' },
          { label: 'Step 3', text: 'Rule: setup must be amortized, so the break-even sits where $S$ falls below per-word savings. Sensors use programmed or interrupt flow; disks use DMA.' }
        ],
        result: 'DMA loses 52 us to 0.02 us on 4 words but wins the CPU back on 4000; setup amortization decides.'
      }
    ],
    keyTakeaways: [
      'DMA setup programs source, destination, count and mode; one done-interrupt ends the block.',
      'Cycle stealing interleaves words with CPU cycles for responsiveness at stretched time.',
      'Burst holds the bus for minimum transfer time while the CPU waits or uses cache.',
      'Block time equals setup plus words times word time, so setup rules tiny transfers.'
    ],
    quiz: [
      // PYQ-pattern: DMA transfer-time arithmetic
      {
        q: 'Setup 50 us, 4000 words at 0.5 us each. DMA total time?',
        options: ['2050 us', '2000 us', '4000 us', '4050 us'],
        answer: 0,
        explanation: 'Step 1: Word time is 4000 times 0.5 equals 2000 us. Step 2: Add setup 50 gives 2050 us. Step 3: That is about 2.05 ms. Step 4: Hence 2050 us.'
      },
      // PYQ-pattern: burst versus stealing
      {
        q: 'Same block in burst at 0.4 us per word with 50 us setup. Total and CPU state?',
        options: ['2050 us, CPU runs freely', '1650 us, CPU held or on cache', '50 us flat, CPU free', '1600 us with no setup'],
        answer: 1,
        explanation: 'Step 1: Words take 4000 times 0.4 equals 1600 us. Step 2: Plus 50 setup equals 1650 us. Step 3: Bus held, CPU waits or caches. Step 4: Hence 1650 us held.'
      },
      // PYQ-pattern: DMA setup contents
      {
        q: 'What must the CPU program into the DMA controller?',
        options: ['Only the done flag', 'Nothing; DMA self-discovers', 'The full data block', 'Source, destination, count and control mode'],
        answer: 3,
        explanation: 'Step 1: Controller needs start addresses. Step 2: Plus word count and direction. Step 3: Mode bits pick stealing or burst. Step 4: Data itself stays in memory.'
      },
      // PYQ-pattern: mode-choice reasoning
      {
        q: 'When is cycle stealing preferred over burst?',
        options: ['Block must finish fastest at any cost', 'CPU must stay responsive during transfer', 'Bus is idle forever', 'Setup time is zero'],
        answer: 1,
        explanation: 'Step 1: Stealing holds at most one cycle. Step 2: CPU progresses between words. Step 3: Burst blocks the bus throughout. Step 4: So responsiveness favors stealing.'
      }
    ]
  },
  // ------------------------------------------------------------------ 5.4
  {
    sectionId: 'compcoa-ch5-s4',
    readingTime: 8,
    intro: 'A bus is a shared highway with rules for who drives, when words latch, and who goes first. Synchronous buses beat a common clock while asynchronous buses shake hands, and arbitration picks one master among many. This section compares the timing disciplines and prices bandwidth and arbitration delay.',
    objectives: [
      'Contrast synchronous clocking with asynchronous handshaking on timing',
      'Compare centralized and distributed arbitration on fairness and wiring',
      'Compute bus bandwidth and arbitration overhead for a transfer mix'
    ],
    concepts: [
      {
        term: 'Synchronous bus',
        kind: 'definition',
        statement: 'A **synchronous** bus latches address and data on **clock** edges, so a 100 MHz clock with 4-byte words peaks at $100 \\times 4 = 400$ MB per s with simple **edge** timing and zero `handshake` wires.',
        detail: 'Every device meets the same edge budget; slow devices insert wait states. Skew bounds length and frequency together.'
      },
      {
        term: 'Asynchronous bus',
        kind: 'definition',
        statement: 'An **asynchronous** bus pairs each transfer with **request** and **acknowledge** handshake lines, so `REQ` rises, the slave answers `ACK`, and mixed-speed devices each take exactly the **time** they need.',
        detail: 'No clock to skew, but two round trips per word cost extra cycles. Handshaking suits varied and distant devices.'
      },
      {
        term: 'Centralized arbitration',
        kind: 'method',
        statement: '**Centralized** arbitration collects all **requests** in one arbiter that returns one **grant**, so priority is a programmable **table** in the `arbiter` and decisions cost one arbiter delay per **transfer**.',
        detail: 'Wiring fans into one box, a single-point bottleneck but the easiest fairness schemes. Daisy grant inside is one variant of central control.'
      },
      {
        term: 'Distributed arbitration',
        kind: 'method',
        statement: '**Distributed** arbitration lets each master assert a shared **priority** code and all retire except the highest, so no central box exists and **wiring** is just the shared `code` lines plus collision **logic** per card.',
        detail: 'Self-selection scales to many masters and survives single-box failure. Priority codes must be unique for clean resolution.'
      },
      {
        term: 'Bandwidth law',
        kind: 'law',
        statement: 'Bandwidth obeys **rate** $= W \\times f \\times e$ where `W` is width, `f` transfers per second and `e` efficiency after arbitration and **protocol**, so 4-byte words at 50M transfers per second with $e = 0.8$ deliver $4 \\times 50 \\times 0.8 = 160$ MB per s of **payload**.',
        detail: 'Overhead bits, grants and waits all fold into $e$. Wider words or faster handshakes raise the ceiling; protocol trims reality.'
      }
    ],
    examples: [
      {
        title: 'Price: synchronous peak against asynchronous reality',
        problem: 'A 100 MHz 4-byte synchronous bus needs no wait states. An asynchronous peer moves 4 bytes per 5-wire handshake of 40 ns total. Compute both bandwidths.',
        steps: [
          { label: 'Step 1', text: 'Synchronous peak:\n```text\n100M x 4 bytes = 400 MB per s\n```\nOne word per clock edge at full efficiency.' },
          { label: 'Step 2', text: 'Asynchronous: $4$ bytes per $40$ ns $= 0.1$ bytes per ns $= 100$ MB per s. Handshake round trips quarter the rate here.' },
          { label: 'Step 3', text: 'With 2 wait states per 4 transfers the synchronous effective rate falls to $4 \\times 100 \\times 0.67 \\approx 268$ MB per s, still ahead but no longer double. Slow slaves tax synchronous clocks through waits.' }
        ],
        result: 'Synchronous 400 MB per s peak versus asynchronous 100 MB per s; wait states narrow but rarely close the gap.'
      },
      {
        title: 'Count: arbitration tax on short transfers',
        problem: 'Each transfer needs 3 arbitration cycles plus 4 data cycles on a 10 ns clock moving 4-byte words. Compute efficiency and payload bandwidth, then the effect of 64-word bursts.',
        steps: [
          { label: 'Step 1', text: 'Single-word efficiency:\n```text\ne = 4 / (3 + 4) = 0.57; rate = 4 bytes / 70 ns = 57 MB per s\n```\nGrants eat nearly half the bus.' },
          { label: 'Step 2', text: 'Burst of 64: arbitration 3 once plus $64 \\times 4 = 256$ data cycles gives $e = 256 \\div 259 \\approx 0.99$.' },
          { label: 'Step 3', text: 'Burst rate: $256$ bytes per $2590$ ns $\\approx 99$ MB per s against a 100 MB per s raw ceiling. Amortizing one grant over many words is the universal bus lesson.' }
        ],
        result: 'Single words run at 57 percent efficiency and 57 MB per s; 64-word bursts reach 99 percent and about 99 MB per s.'
      }
    ],
    keyTakeaways: [
      'Synchronous buses latch on clock edges for speed; asynchronous buses handshake for mixed-speed tolerance.',
      'Centralized arbitration decides in one box from a priority table; distributed resolves on shared priority lines.',
      'Bandwidth equals width times transfer rate times protocol efficiency.',
      'Bursts amortize one arbitration over many words and approach raw bandwidth.'
    ],
    quiz: [
      // PYQ-pattern: synchronous bandwidth
      {
        q: '100 MHz clock, 4-byte words, no waits. Peak bandwidth?',
        options: ['100 MB per s', '200 MB per s', '400 MB per s', '800 MB per s'],
        answer: 2,
        explanation: 'Step 1: Transfers are 100M per second. Step 2: Bytes are 100M times 4 equals 400M. Step 3: That is 400 MB per s. Step 4: Waits would scale it down.'
      },
      // PYQ-pattern: handshake bandwidth
      {
        q: 'Async: 4 bytes per 40 ns handshake. Bandwidth?',
        options: ['40 MB per s', '100 MB per s', '160 MB per s', '400 MB per s'],
        answer: 1,
        explanation: 'Step 1: 4 bytes per 40 ns is 0.1 bytes per ns. Step 2: 0.1 times 1000 equals 100 MB per s. Step 3: Handshake bounds it. Step 4: Hence 100 MB per s.'
      },
      // PYQ-pattern: arbitration efficiency
      {
        q: '3 grant cycles plus 4 data cycles per word. Efficiency and 4-byte rate at 10 ns clocks?',
        options: ['0.57 and 57 MB per s', '0.99 and 99 MB per s', '1.0 and 400 MB per s', '0.25 and 25 MB per s'],
        answer: 0,
        explanation: 'Step 1: Efficiency is 4 divided by 7 equals 0.57. Step 2: Cycle is 70 ns per word. Step 3: 4 bytes per 70 ns is about 57 MB per s. Step 4: Bursts would lift this near 0.99.'
      },
      // PYQ-pattern: arbitration scheme traits
      {
        q: 'Which trait belongs to distributed arbitration?',
        options: ['One central grant box decides', 'Masters self-select on shared priority lines', 'Position alone decides', 'No requests are needed'],
        answer: 1,
        explanation: 'Step 1: No central box exists. Step 2: Each asserts its code. Step 3: Highest survives, rest retire. Step 4: Hence self-select on shared lines.'
      }
    ]
  }
]
