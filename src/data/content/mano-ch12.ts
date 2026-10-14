import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 12: Microcomputer LSI Components (Sections 12.1 – 12.3)
// Master study content. All backslashes doubled in TS strings for KaTeX.
// ============================================================================

export const manoCh12Content: SectionContent[] = [
  // ------------------------------------------------------------------ 12.1
  {
    sectionId: 'mano-ch12-s1',
    readingTime: 8,
    intro: 'Chapter 12 extends the discrete-gate computer concepts of Chapter 11 to integrated **LSI (Large Scale Integration)** microcomputer systems. A microcomputer consists of a microprocessor unit (MPU), semiconductor memory chips (RAM and ROM), and peripheral interface adapters interconnected via a standardized system bus architecture. Understanding how tri-state bus transceivers, address buses, and control lines connect multiple integrated circuit packages establishes the hardware foundation of modern microprocessor systems.',
    objectives: [
      'Diagram the three-bus architecture of a microcomputer: address bus, data bus, and control bus',
      'Explain the complementary roles of RAM (read/write data) and ROM (bootstrap firmware)',
      'Describe the operation of tri-state bus transceivers in multi-chip bus environments',
      'Identify peripheral interface adapters (PIA / USART) and their bus connections',
      'Contrast discrete processor implementations with single-chip LSI microprocessors'
    ],
    concepts: [
      {
        term: 'Microcomputer system architecture',
        kind: 'definition',
        statement: 'A **microcomputer** is a complete computing system built around an LSI microprocessor (MPU), containing semiconductor **RAM** for dynamic data, **ROM** for non-volatile programs, and I/O interface units connected via three shared system buses.',
        detail: 'The single-chip microprocessor combines the ALU, general-purpose register array, and control logic onto a single silicon substrate, replacing dozens of individual MSI logic packages.'
      },
      {
        term: 'The three-bus system',
        kind: 'definition',
        statement: 'System communication is organized into three buses: the **Address Bus** (unidirectional, driven by MPU to select memory/IO locations), the **Data Bus** (bidirectional, transferring bytes/words), and the **Control Bus** (signaling read, write, and bus status).',
        detail: 'In typical 8-bit microprocessors (such as 8080/8085/6502/Z80), a 16-bit address bus addresses up to $2^{16} = 65,536$ bytes (64 KB), while an 8-bit data bus moves one byte per memory cycle.'
      },
      {
        term: 'Tri-state bus buffering',
        kind: 'method',
        statement: 'To allow multiple memory and I/O chips to share the same physical data lines without electrical contention, all non-selected chip outputs remain in a high-impedance (**Hi-Z**) third state.',
        detail: 'Bus transceivers (such as the 74LS245) provide bidirectional amplification and tri-state control, preventing capacitive loading and electrical short circuits between competing output drivers.'
      },
      {
        term: 'Semiconductor RAM and ROM partitioning',
        kind: 'insight',
        statement: '**ROM** stores non-volatile startup code (bootstrap loader, BIOS) that remains intact when power is disconnected. **RAM** provides volatile scratchpad memory for program variables, stacks, and operating buffers.',
        detail: 'Upon power-up or hardware RESET, the MPU program counter is automatically initialized to a fixed address (e.g., $0000_{16}$ or $FFFF_{16}$) mapped directly to ROM firmware.'
      },
      {
        term: 'Peripheral interface adapters',
        kind: 'definition',
        statement: 'LSI interface adapters (parallel PIAs and serial USARMs) buffer data between the high-speed microprocessor bus and asynchronous external peripherals, handling handshaking flags, interrupts, and voltage level translations.',
        detail: 'These adapters contain internal control, status, and data registers that appear to the MPU either as distinct memory addresses or as dedicated I/O ports.'
      }
    ],
    examples: [
      {
        title: 'Calculating Microcomputer Memory Address Reach',
        problem: 'A microcomputer features a 16-bit address bus and an 8-bit data bus. Calculate the total byte addressability and maximum data transfer per cycle.',
        steps: [
          { label: 'Address Space', text: '2^16 = 65,536 distinct addresses, denoted as 64 Kilobytes (KB).' },
          { label: 'Word Width', text: 'Each memory location stores 8 bits (1 byte).' },
          { label: 'Total Capacity', text: 'Maximum directly addressable memory is exactly 65,536 bytes (64 KB).' }
        ],
        result: 'The system can address up to 64 KB of RAM/ROM, transferring 1 byte per bus cycle.'
      },
      {
        title: 'Power-On Reset: Why the CPU Wakes Up in ROM',
        problem: 'A 64 KB system maps ROM to 0000h-1FFFh and RAM to 2000h-FFFFh. Trace what happens when the operator presses RESET.',
        steps: [
          { label: 'RESET vectors the PC', text: 'The RESET pin forces the program counter to the hardwired start address 0000h — inside the ROM block, never inside volatile RAM (which powers up with random contents).' },
          { label: 'First fetch hits ROM', text: 'AR <- 0000h, M[AR] (a ROM bootstrap word) rides the data bus to the MPU. Tri-state discipline holds: ROM drives the bus while every RAM chip stays Hi-Z.' },
          { label: 'Bootstrap hands off to RAM', text: 'The ROM loader initializes stack pointers and PIA control registers, then jumps to the RAM-resident monitor. ROM owns the first instruction; RAM owns everything after.' }
        ],
        result: 'RESET + fixed ROM vector solves the chicken-and-egg problem: volatile RAM cannot bootstrap itself, so the first fetch is steered to non-volatile firmware by construction.'
      }
    ],
    keyTakeaways: [
      'Microcomputers interconnect MPU, RAM, ROM, and I/O chips via address, data, and control buses.',
      'The address bus is unidirectional (MPU to memory/IO); the data bus is bidirectional.',
      'Tri-state bus drivers ensure only one chip drives the shared data bus at any moment.',
      'ROM contains permanent startup code; RAM holds volatile runtime programs and data.'
    ],
    quiz: [
      {
        q: 'Why is the data bus in a microcomputer bidirectional while the address bus is unidirectional?',
        options: [
          'Because address lines carry more current than data lines',
          'Because the MPU must both read data from and write data to memory/IO, while the MPU alone generates memory addresses',
          'Because memory chips cannot receive binary addresses',
          'Because DMA controllers forbid bidirectional address lines'
        ],
        answer: 1,
        explanation: 'The MPU originates all memory addresses (unidirectional from CPU to chips), but data must flow both into the CPU (reads) and out of the CPU (writes), requiring bidirectional data lines.'
      },
      {
        q: 'What electrical state do non-selected memory chips assert on the shared data bus?',
        options: ['Logic 0 (0V)', 'Logic 1 (+5V)', 'High impedance (Hi-Z), electrically disconnecting their outputs from the bus', 'Oscillating square wave'],
        answer: 2,
        explanation: 'Tri-state outputs disconnect inactive chips (Hi-Z), allowing the single selected chip to control bus voltage without contention.'
      },
      {
        q: 'How many bytes of memory can a microprocessor with 16 address lines address directly?',
        options: ['1,024 bytes', '16,384 bytes', '65,536 bytes (64 KB)', '1,048,576 bytes (1 MB)'],
        answer: 2,
        explanation: '16 binary address lines yield $2^{16} = 65,536$ address combinations, representing 64 KB of byte-wide memory.'
      },
      {
        q: 'Where does the microprocessor point upon receiving a power-on RESET signal?',
        options: ['To a random RAM location', 'To a fixed hardware reset address mapped to non-volatile ROM firmware', 'To the last executed instruction in cache', 'To the stack pointer'],
        answer: 1,
        explanation: 'RESET hardwires the program counter to a pre-assigned address where initialization code stored in ROM begins execution.'
      }
    ]
  },

  // ------------------------------------------------------------------ 12.2
  {
    sectionId: 'mano-ch12-s2',
    readingTime: 8,
    intro: 'Viewing the microprocessor as an integrated circuit component requires understanding its pin connections, electrical characteristics, and bus timing diagrams. An MPU communicates through clock synchronization pins, read/write strobe lines, address latch controls, and status lines. Machine cycles subdivide instruction execution into discrete clock periods ($T$-states), coordinating with handshake lines like READY and HOLD to interface with slow memory chips and Direct Memory Access (DMA) controllers.',
    objectives: [
      'Identify standard MPU control pins: RD, WR, ALE, CLK, RESET, and READY',
      'Analyze machine cycle timing diagrams and state subdivisions (T-states)',
      'Explain how the READY input inserts WAIT states for slow memory and peripherals',
      'Describe DMA bus arbitration using HOLD and HLDA (Hold Acknowledge) signals',
      'Distinguish maskable interrupts (INTR) from non-maskable interrupts (NMI)'
    ],
    concepts: [
      {
        term: 'Microprocessor pinout categories',
        kind: 'definition',
        statement: 'Microprocessor pins divide into five functional groups: **Power and Clock** (Vcc, GND, CLK), **Address Bus** ($A_0-A_{15}$), **Data Bus** ($D_0-D_7$), **Control Strobes** ($\\overline{\\text{RD}}, \\overline{\\text{WR}}$), and **Bus Arbitration / Interrupts** (READY, HOLD, HLDA, RESET, INTR).',
        detail: 'Active-low signals (indicated by an overbar, e.g. $\\overline{\\text{RD}}$) assert a low voltage (0V) to command an operation, improving noise immunity on open-collector buses.'
      },
      {
        term: 'Machine cycles and T-states',
        kind: 'definition',
        statement: 'An instruction cycle consists of one or more **machine cycles** (such as Opcode Fetch, Memory Read, Memory Write, I/O Read). Each machine cycle is composed of three to six clock periods called **T-states** ($T_1, T_2, T_3, \\dots$).',
        detail: 'During $T_1$, the address is placed on the address bus. During $T_2$, control strobes ($\\overline{\\text{RD}}$) activate. During $T_3$, data is sampled from the bus into the processor register.'
      },
      {
        term: 'The READY line and WAIT states',
        kind: 'method',
        statement: 'When interfacing with slow semiconductor memories that cannot deliver data within the standard $T_2-T_3$ interval, the memory asserts **READY = 0**, causing the MPU to insert idle clock cycles called **WAIT states** ($T_W$).',
        detail: 'During WAIT states, address lines and control strobes remain held stable. When the memory finishes internal access, it raises READY = 1, and the processor resumes execution at $T_3$.'
      },
      {
        term: 'Bus arbitration: HOLD and HLDA',
        kind: 'method',
        statement: 'A Direct Memory Access (DMA) controller requests mastery of the system bus by raising **HOLD = 1**. The MPU floats its address, data, and control lines into high impedance and acknowledges with **HLDA = 1**.',
        detail: 'The DMA controller can then transfer high-speed data blocks directly between memory and disk drives without MPU program intervention (compare Operating System Concepts, Chapter 12).'
      },
      {
        term: 'Maskable vs Non-Maskable Interrupts',
        kind: 'insight',
        statement: '**Maskable interrupts** (INTR) can be disabled under software control via instructions like CLI/DI. **Non-Maskable Interrupts** (NMI) bypass interrupt masks and cannot be disabled, reserved for critical hardware emergencies such as power failure.',
        detail: 'When NMI triggers, the processor immediately saves its state and branches to a dedicated emergency recovery routine.'
      }
    ],
    figures: [
      {
        caption: "Demultiplexing the address and data bus: the 8085 MPU multiplexes the lower 8 bits of the address bus with the 8-bit data bus on pins AD₀–AD₇. The ALE strobe latches A₀–A₇ into an external 74LS373 latch during T₁, holding the address stable while AD₀–AD₇ is freed for bidirectional data transfer during T₂ and T₃.",
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Microprocessor address and data bus demultiplexing circuit"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/></marker></defs><rect x="40" y="30" width="140" height="240" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="110" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">8085 MPU</text><text x="165" y="100" font-family="system-ui, sans-serif" font-size="11" text-anchor="end" fill="currentColor">A₈ - A₁₅</text><text x="165" y="150" font-family="system-ui, sans-serif" font-size="11" text-anchor="end" fill="currentColor">AD₀ - AD₇</text><text x="165" y="200" font-family="system-ui, sans-serif" font-size="11" text-anchor="end" fill="currentColor">ALE</text><text x="165" y="245" font-family="system-ui, sans-serif" font-size="10" text-anchor="end" fill="currentColor">IO/M, RD, WR</text><line x1="180" y1="95" x2="620" y2="95" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="400" y="85" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">Higher Order Address (A₈ - A₁₅)</text><rect x="310" y="125" width="110" height="100" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="365" y="155" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">74LS373</text><text x="365" y="172" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">Octal Latch</text><text x="320" y="205" font-family="system-ui, sans-serif" font-size="10" fill="currentColor">G (Enable)</text><path d="M 180 145 L 310 145" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><path d="M 245 145 L 245 45 L 620 45" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="430" y="38" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">Bidirectional Data Bus (D₀ - D₇)</text><path d="M 180 195 L 310 195" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><line x1="420" y1="175" x2="620" y2="175" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="520" y="165" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">Lower Order Address (A₀ - A₇)</text><line x1="180" y1="240" x2="620" y2="240" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/><text x="400" y="260" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">Control Bus (IO/M, RD, WR)</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Timing Analysis with Wait State Insertion',
        problem: 'A microprocessor operates at 4 MHz clock frequency (clock period = 250 ns). A memory chip requires 600 ns access time. Determine how many WAIT states must be inserted during a 3-state read cycle.',
        steps: [
          { label: 'Normal Available Time', text: 'In a 3-state cycle without wait states, data must be valid by T3, giving roughly 2 clock cycles = 500 ns.' },
          { label: 'Calculate Deficit', text: 'Required access time (600 ns) exceeds available time (500 ns) by 100 ns.' },
          { label: 'Insert Wait State', text: 'Inserting one WAIT state (Tw = 250 ns) extends total available access time to 750 ns.' }
        ],
        result: 'Exactly one WAIT state (Tw) is required to guarantee reliable memory reads.'
      },
      {
        title: 'DMA Takeover via HOLD and HLDA',
        problem: 'A disk controller must move a 512-byte sector into memory at 8000h without CPU help. Trace the HOLD/HLDA handshake and bus ownership.',
        steps: [
          { label: 'Request', text: 'The DMA controller raises HOLD = 1 after the current machine cycle. The MPU finishes the in-flight T-state so the buses are left in a clean, non-half-driven state.' },
          { label: 'Acknowledge and float', text: 'The MPU floats address, data, and RD/WR lines to Hi-Z and answers HLDA = 1. From this edge on, the DMA controller — not the MPU — drives A0-A15 and the control strobes.' },
          { label: 'Block transfer', text: 'The DMA engine issues 512 back-to-back memory-write cycles (address 8000h-81FFh) sourced from the disk FIFO. The MPU idles; READY/WAIT still applies if the RAM is slow.' },
          { label: 'Release', text: 'The controller drops HOLD; the MPU drops HLDA and resumes fetching at the next PC. No registers were touched — the transfer bypassed the CPU entirely.' }
        ],
        result: 'HOLD asks, HLDA grants, buses float, DMA streams 512 bytes MPU-free — the hardware path behind the OS-level DMA of Operating System Concepts, Chapter 12.'
      }
    ],
    keyTakeaways: [
      'MPU instruction cycles subdivide into machine cycles and individual T-state clock periods.',
      'Active-low strobes (RD, WR) command read and write data transfers.',
      'READY allows slow memory chips to insert WAIT states, freezing bus timing until data is ready.',
      'HOLD and HLDA allow DMA controllers to take over system buses for high-speed transfers.'
    ],
    quiz: [
      {
        q: 'What is the function of the READY pin on a microprocessor?',
        options: [
          'To indicate that the CPU has finished executing all instructions',
          'To allow slow memory or I/O devices to insert WAIT states by holding the line low',
          'To clear all general-purpose registers to zero',
          'To signal that the internal battery backup is fully charged'
        ],
        answer: 1,
        explanation: 'When a slow memory device pulls READY low, the MPU inserts one or more idle WAIT cycles ($T_W$), giving the memory additional time to stabilize data on the bus.'
      },
      {
        q: 'What occurs during a DMA transfer when the MPU asserts HLDA (Hold Acknowledge)?',
        options: [
          'The MPU executes an interrupt service routine',
          'The MPU floats its address, data, and control lines to high impedance, relinquishing bus control',
          'The MPU accelerates its internal clock multiplier',
          'The MPU writes all registers to hard disk'
        ],
        answer: 1,
        explanation: 'HLDA signals that the MPU has disconnected its drivers from the system buses (Hi-Z), allowing the DMA controller to drive memory and I/O lines directly.'
      },
      {
        q: 'How does a Non-Maskable Interrupt (NMI) differ from a standard maskable interrupt (INTR)?',
        options: [
          'NMI can be disabled by executing a software disable instruction',
          'NMI cannot be disabled or masked by software and is prioritized for emergency events like power loss',
          'NMI only operates when the computer is powered down',
          'NMI requires three external clock pulses to trigger'
        ],
        answer: 1,
        explanation: 'NMI lines bypass internal software interrupt masks, guaranteeing immediate CPU response for catastrophic hardware errors.'
      },
      {
        q: 'If a microprocessor operates with a clock period of 200 ns, how long is a 4-state machine cycle?',
        options: ['200 ns', '400 ns', '800 ns', '1.6 microseconds'],
        answer: 2,
        explanation: '4 T-states $\\times 200\\text{ ns} = 800\\text{ ns}$.'
      }
    ]
  },

  // ------------------------------------------------------------------ 12.3
  {
    sectionId: 'mano-ch12-s3',
    readingTime: 8,
    intro: 'Connecting discrete semiconductor memory and peripheral chips to a microprocessor requires address decoding logic. Address decoding maps each physical chip to a unique range within the processor\\’s total address space. Mano contrasts **linear selection** with **full decoding** using binary decoders (such as the 74LS138), and details the architectural distinction between **memory-mapped I/O** (where peripherals occupy memory addresses) and **isolated I/O** (where peripherals use a separate address space with dedicated IN/OUT instructions).',
    objectives: [
      'Design address decoding networks using binary decoders (74LS138) and logic gates',
      'Generate active-low Chip Select (CS) signals to map multiple RAM and ROM chips',
      'Construct a system memory map without address overlapping or bus conflicts',
      'Contrast Memory-Mapped I/O with Isolated (Port-Mapped) I/O architectures',
      'Explain address foldback and aliasing caused by partial address decoding'
    ],
    concepts: [
      {
        term: 'Chip Select (CS) decoding',
        kind: 'definition',
        statement: 'Memory and peripheral chips feature active-low **Chip Select** ($\\overline{\\text{CS}}$) inputs. Address decoding logic asserts $\\overline{\\text{CS}} = 0$ on exactly one chip when the address bus values fall within that chip\\’s assigned range.',
        detail: 'When $\\overline{\\text{CS}} = 1$, the chip is disabled and its data pins remain in high impedance (Hi-Z), preventing bus conflict.'
      },
      {
        term: 'Full decoding vs Partial decoding',
        kind: 'method',
        statement: '**Full decoding** checks all high-order address lines, mapping each memory location to a single unique address. **Partial decoding** leaves certain address lines unconnected to save logic gates, causing **address foldback** (mirroring).',
        detail: 'Under partial decoding with $A_{15}$ unused, a device appears at both $0000_{16}$ and $8000_{16}$. While cheaper, partial decoding wastes address space and can cause accidental aliasing.'
      },
      {
        term: 'The 3x8 Decoder (74LS138) in memory mapping',
        kind: 'method',
        statement: 'A standard $3 \\times 8$ decoder takes address lines $A_{13}, A_{14}, A_{15}$ and splits a 64 KB address space into eight equal 8 KB blocks, producing active-low outputs $Y_0 \\dots Y_7$ for chip selection.',
        detail: 'Output $Y_0$ covers $0000_{16} - 1FFF_{16}$ (often wired to ROM), $Y_1$ covers $2000_{16} - 3FFF_{16}$ (wired to RAM), and so forth.'
      },
      {
        term: 'Memory-Mapped I/O',
        kind: 'definition',
        statement: 'In **Memory-Mapped I/O**, peripheral registers are assigned memory addresses. The MPU uses standard memory instructions (\`LDA\`, \`STA\`, \`MOV\`) to communicate with I/O devices.',
        detail: 'Advantages: all memory addressing modes and arithmetic instructions apply directly to peripheral registers. Disadvantage: occupies part of the memory address space (e.g. reserving addresses $F000_{16}-FFFF_{16}$ reduces available RAM).'
      },
      {
        term: 'Isolated (Port-Mapped) I/O',
        kind: 'definition',
        statement: 'In **Isolated I/O**, peripherals reside in a separate 8-bit or 16-bit I/O address space accessed exclusively by dedicated \`IN\` and \`OUT\` instructions, distinguished by an $\\text{IO}/\\overline{\\text{M}}$ control pin.',
        detail: 'Advantages: preserves the full 64 KB space for RAM/ROM. Disadvantage: limited instruction set (operands must pass through the accumulator register).'
      }
    ],
    examples: [
      {
        title: 'Designing a 74LS138 Memory Map for 16 KB ROM and 32 KB RAM',
        problem: 'Map a 16 KB ROM starting at 0000h and a 32 KB RAM starting at 8000h in a 64 KB address space using address lines A15, A14, A13.',
        steps: [
          { label: 'Analyze ROM Range', text: '16 KB spans 0000h to 3FFFh. High address bits A15 A14 = 0 0. A 3x8 decoder output Y0 (0000-1FFFh) and Y1 (2000-3FFFh) combined via an AND gate drive ROM CS.' },
          { label: 'Analyze RAM Range', text: '32 KB spans 8000h to FFFFh. High bit A15 = 1. A15 connected directly through an inverter drives RAM CS.' },
          { label: 'Verify Separation', text: 'ROM and RAM address ranges never overlap; when A15 = 0, RAM is Hi-Z; when A15 = 1, ROM is Hi-Z.' }
        ],
        result: 'Complete non-overlapping memory map using high-order address decoding.'
      },
      {
        title: 'Placing One PIA: Memory-Mapped vs Isolated I/O',
        problem: 'A parallel PIA with four registers must be visible to an 8080-style CPU. Compare wiring it memory-mapped at F000h-F003h versus isolated at port 08h-0Bh.',
        steps: [
          { label: 'Memory-mapped wiring', text: 'Full-decode F000h-F003h (A15-A2 = 11110000000000) to the PIA CS; A1-A0 pick the register. Access uses memory instructions: LDA F001h reads the status register, STA F000h writes data — every addressing mode and ALU op applies directly.' },
          { label: 'Isolated wiring', text: 'Decode port 08h-0Bh qualified by IO/M = 1 to the same CS. Access uses IN 09h / OUT 08h through the accumulator only — the full 64 KB stays RAM/ROM, but operands must funnel via A.' },
          { label: 'Cost comparison', text: 'Memory-mapped steals 4 bytes of address space (aliasing risk if partially decoded); isolated costs an IO/M pin and a thinner instruction set. Mano rule: memory-rich small systems map; I/O-heavy systems isolate.' }
        ],
        result: 'Same four PIA registers at F000h (LDA/STA, full modes, 4 bytes lost) or at port 08h (IN/OUT via A, space preserved) — one decode choice, two software models.'
      }
    ],
    keyTakeaways: [
      'Address decoders assert active-low CS signals to enable one memory or I/O chip at a time.',
      'Full decoding uses all address lines; partial decoding causes address aliasing (foldback).',
      'Memory-mapped I/O treats device registers as memory words; isolated I/O uses dedicated IN/OUT lines.',
      '3x8 decoders (like 74LS138) partition 64 KB memory space cleanly into 8 KB blocks.'
    ],
    quiz: [
      {
        q: 'What is the primary operational difference between Memory-Mapped I/O and Isolated I/O?',
        options: [
          'Memory-mapped I/O requires optical fiber cables',
          'Memory-mapped I/O treats peripherals as memory addresses using standard instructions (MOV/LDA/STA); isolated I/O uses dedicated IN/OUT instructions and separate I/O address space',
          'Isolated I/O operates without an address bus',
          'Memory-mapped I/O can only communicate with printer devices'
        ],
        answer: 1,
        explanation: 'In memory-mapped I/O, device registers share the memory address space and are read/written with standard memory instructions; isolated I/O uses distinct control lines (IO/M) and dedicated IN/OUT opcodes.'
      },
      {
        q: 'What problem occurs when high-order address lines are left unconnected in a partial decoding scheme?',
        options: [
          'The microprocessor burns out due to overvoltage',
          'Address foldback (aliasing): the same physical memory device responds to multiple distinct address ranges',
          'The data bus becomes unidirectional',
          'Clock frequency drops by half'
        ],
        answer: 1,
        explanation: 'Unconnected address lines act as "don’t cares", meaning the decoded chip enables at multiple duplicate addresses across the memory map (foldback).'
      },
      {
        q: 'If a 3x8 decoder has inputs A15, A14, A13, what address range does its Y0 active-low output cover in a 64 KB system?',
        options: ['0000h to 0FFFh (4 KB)', '0000h to 1FFFh (8 KB)', '0000h to 3FFFh (16 KB)', '0000h to 7FFFh (32 KB)'],
        answer: 1,
        explanation: 'When A15 A14 A13 = 0 0 0, the remaining 13 address lines (A0-A12) span $0000_{16}$ to $1FFF_{16}$ ($2^{13} = 8192$ bytes = 8 KB).'
      },
      {
        q: 'Why are Chip Select (CS) pins almost universally designed as active-low inputs on memory ICs?',
        options: [
          'Because active-low logic was cheaper in 1960',
          'Because standard TTL decoders produce active-low outputs, and active-low bus lines offer superior noise immunity and wire-OR capability',
          'To prevent memory from reading data during power outages',
          'Because low voltage carries more data bits'
        ],
        answer: 1,
        explanation: 'Active-low signals match the output polarity of standard bipolar/TTL decoders and provide better noise margin against ground bounce.'
      }
    ,
      // PYQ-pattern: GATE 2020 — memory expansion count (rephrased)
      {
        q: "How many $1K \\times 8$ chips build a $4K \\times 16$ memory, and how are they arranged?",
        options: ["$4$ chips in one row", "$8$ chips: $4$ rows for words $\\times$ $2$ columns for bits", "$16$ chips", "$2$ chips"],
        answer: 1,
        explanation: "**Step 1 — Given data:** target $4096 \\times 16$, chip $1024 \\times 8$.\n**Step 2 — Rule:** rows $=$ target words/chip words; columns $=$ target bits/chip bits; total $=$ rows $\\times$ columns.\n**Step 3 — Computation:** rows $= \\frac{4096}{1024} = 4$; columns $= \\frac{16}{8} = 2$; total $8$.\n**Step 4 — Cross-check:** address decoder selects one of $4$ rows with $2$ high lines; data lines pair two chips per row for $16$ bits.\n**Step 5 — Distractors:** $4$ misses bit expansion; $16$ doubles both; $2$ misses word expansion.\n**Step 6 — Conclude:** $8$ chips in $4 \\times 2$."
      },
      // PYQ-pattern: ISRO 2019 — mapped versus isolated I/O (rephrased)
      {
        q: "What distinguishes memory-mapped I/O from isolated I/O for reaching peripherals?",
        options: ["Mapped uses the same address space and LDA/STA; isolated uses a separate space with IN/OUT", "Both use identical instructions", "Mapped needs no decoding", "Isolated cannot use interrupts"],
        answer: 0,
        explanation: "**Step 1 — Given data:** peripherals needing addresses, two school designs.\n**Step 2 — Rule:** mapped reserves memory addresses for registers (load/store reach them); isolated has a second space with dedicated strobes.\n**Step 3 — Apply:** mapped: `STA` to a display register address; isolated: `OUT` with its own address lines.\n**Step 4 — Cross-check:** mapped simplifies instructions but consumes memory space; isolated preserves space at the cost of extra instructions and full vs linear decoding trade-offs.\n**Step 5 — Distractors:** identical instructions erase the distinction; decoding is needed in both; interrupts work with either.\n**Step 6 — Conclude:** same-space LDA/STA versus separate-space IN/OUT."
      }
    ]
  }
]
