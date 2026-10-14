import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Computer Organization and Architecture
// Chapter 2: ALU, Datapath and Control Unit (Sections 2.1–2.4)
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const compcoaCh02Content: SectionContent[] = [
  // ------------------------------------------------------------------ 2.1
  {
    sectionId: 'compcoa-ch2-s1',
    readingTime: 9,
    intro: 'A single-cycle datapath executes one whole instruction per clock by wiring every resource the instruction could need into one long combinational path. The program counter, register file, arithmetic unit and the two memories all operate once per cycle while multiplexers steer data by opcode. This section traces that path and shows why the slowest instruction sets the clock.',
    objectives: [
      'Name each datapath block and the value it produces for R-type, load, store and branch instructions',
      'Trace one instruction through PC, memories, register file and ALU in order',
      'Explain why single-cycle cycle time equals the longest instruction latency'
    ],
    concepts: [
      {
        term: 'Single-cycle contract',
        kind: 'definition',
        statement: 'The **single-cycle** contract starts a new instruction every cycle, so `CPI = 1` by construction and each instruction from `ADD` to `LW` must finish its fetch, decode, execute and writeback before the **next** clock edge.',
        detail: 'No resource may be reused within a cycle, which forces separate instruction and data memories (or a doubled-port memory) so fetch and data access can overlap in time without collision.'
      },
      {
        term: 'PC and instruction memory',
        kind: 'definition',
        statement: 'The **program counter** holds the address of the current instruction, so `PC` feeds instruction memory each cycle while $PC_{next} = PC + 4$ flows through the **increment adder** for straight-line flow.',
        detail: 'Branches and jumps overwrite that default with a computed target through a multiplexer at the PC input. The PC update is the only architected state change common to every instruction.'
      },
      {
        term: 'Register file discipline',
        kind: 'definition',
        statement: 'The **register file** exposes two read ports and one write port, so `ADD R1, R2, R3` reads `R2` and `R3` together, pushes them through the **ALU**, and writes `R1` in the same cycle.',
        detail: 'Read-after-write within one cycle is handled by write-then-read port discipline or by forwarding the write data. Register zero stays hardwired to 0 and ignores writes.'
      },
      {
        term: 'ALU and data memory roles',
        kind: 'definition',
        statement: 'The **ALU** computes $R = A + B$ for address arithmetic, $R = A - B$ with a **zero** flag for branches, and logic results for `AND` and `OR`, while data memory serves only `LW` and `SW` through the address in `ALUOut`.',
        detail: 'Loads route memory output through a writeback multiplexer into the register file; stores route a register value into memory write data with write enabled. All other instructions leave data memory idle.'
      },
      {
        term: 'Cycle-time rule',
        kind: 'law',
        statement: 'The clock obeys $T_c = \\max(T_{R} , T_{LW} , T_{SW} , T_{BEQ})$ where each `T` is a full instruction latency, so the **load word** path through `PC` to instruction memory to register file to ALU to data memory and back to the register file fixes the **slowest** cycle for everybody.',
        detail: 'Fast ALU instructions finish early and wait, wasting the margin between their short path and the load path. That waste is the motive for multicycle and pipelined designs that let quick instructions keep a short clock.'
      }
    ],
    examples: [
      {
        title: 'Trace: LW R1, 200(R2) through the single-cycle path',
        problem: 'Trace load-word with $R2 = 1000$ through every block in visit order, naming the multiplexer choices, and state which added latency makes loads the slowest class.',
        steps: [
          { label: 'Step 1', text: 'Fetch and decode:\n```text\nPC=5000 -> InstrMem -> opcode LW, rs=R2, rt=R1, imm=200\nRegFile[R2]=1000 read on port A while imm 200 sign-extends\n```\nThe PC multiplexer selects $PC+4$ as the tentative next address pending branch resolution.' },
          { label: 'Step 2', text: 'Execute and access:\n```text\nALU: 1000 + 200 = 1200 -> DataMem address\nDataMem[1200] = 77 -> writeback mux selects MemOut\n```\nThe ALU multiplexer selects the sign-extended immediate rather than the second register, and data-memory read enables.' },
          { label: 'Step 3', text: 'Writeback and advance: register file writes 77 into `R1`, and $PC$ becomes $5004$. Latency sums five stages ($t_{fetch} = 2$ ns, $t_{reg} = 1$ ns, $t_{ALU} = 2$ ns, $t_{mem} = 2$ ns, $t_{wb} = 1$ ns gives $8$ ns), the longest of any class, so $T_c = 8$ ns binds ALU instructions that need only $6$ ns.' }
        ],
        result: 'The load visits PC, instruction memory, register file, ALU, data memory and register file again; its 8 ns path sets the cycle time that every instruction pays.'
      },
      {
        title: 'Trace: BEQ R1, R2, −12 through the same path',
        problem: 'With $R1 = R2 = 50$ and $PC = 8000$, trace the branch: which ALU operation runs, which flag matters, and what PC results.',
        steps: [
          { label: 'Step 1', text: 'Fetch and register read:\n```text\nPC=8000 -> instr BEQ R1,R2,-12; read R1=50, R2=50\n```\nThe sign-extended offset shifts to a word displacement and the branch adder forms $8000 - 12 = 7988$ in parallel with the ALU test.' },
          { label: 'Step 2', text: 'Test: ALU computes $50 - 50 = 0$ and raises **zero**, so the PC multiplexer selects 7988 over $8004$. With unequal registers **zero** stays low and $PC+4$ wins.' },
          { label: 'Step 3', text: 'No register write and no data-memory access occur: branch control disables write enables. Latency is fetch plus register plus ALU plus mux, about $6$ ns here, but the clock still ticks $8$ ns because loads rule.' }
        ],
        result: 'Equal registers raise zero and PC becomes 7988; the branch uses the ALU as a comparator and skips memory entirely.'
      }
    ],
    keyTakeaways: [
      'Single-cycle runs CPI equal to 1 with separate instruction and data memories so fetch never fights data access.',
      'PC feeds instruction memory, the register file feeds the ALU, the ALU feeds data-memory address, and a writeback mux closes the loop.',
      'ALU plus zero flag doubles as the branch comparator with no extra test unit.',
      'Cycle time equals the slowest instruction latency, so loads tax every faster instruction.'
    ],
    quiz: [
      // PYQ-pattern: single-cycle cycle-time rule
      {
        q: 'Latencies: R-type 6 ns, LW 8 ns, SW 7 ns, BEQ 5 ns. What is the single-cycle clock?',
        options: ['5 ns', '6 ns', '7 ns', '8 ns'],
        answer: 3,
        explanation: 'Step 1: The clock must cover the slowest instruction. Step 2: Maximum of 6, 8, 7, 5 is 8. Step 3: So Tc equals 8 ns. Step 4: Faster instructions idle the difference.'
      },
      // PYQ-pattern: datapath block roles
      {
        q: 'In a single-cycle LW, what does the ALU compute?',
        options: ['PC plus 4 for the next fetch', 'Base plus offset as the data-memory address', 'The loaded value minus zero', 'The branch target comparison'],
        answer: 1,
        explanation: 'Step 1: LW needs the address base plus offset. Step 2: With R2 1000 and offset 200 the ALU gives 1200. Step 3: That value addresses data memory. Step 4: PC plus 4 uses a separate adder, not the main ALU.'
      },
      // PYQ-pattern: register-file ports
      {
        q: 'Why does the single-cycle register file need two read ports and one write port?',
        options: ['To supply both ALU sources while retiring a result in the same cycle', 'To fetch two instructions at once', 'To read data memory twice per cycle', 'To double the clock rate'],
        answer: 0,
        explanation: 'Step 1: R-type ADD needs R2 and R3 together. Step 2: Two read ports deliver both in one cycle. Step 3: The write port retires R1 the same cycle. Step 4: Without all three ports the CPI equal to 1 contract breaks.'
      },
      // PYQ-pattern: branch datapath control
      {
        q: 'BEQ with R1 = R2 takes which PC path in single-cycle?',
        options: ['Always PC plus 4', 'Branch-target address since zero is raised', 'Zero register contents', 'Data-memory output'],
        answer: 1,
        explanation: 'Step 1: ALU subtracts R1 minus R2 giving 0. Step 2: Zero flag goes high. Step 3: The PC mux selects the branch adder output 7988 style target. Step 4: Unequal registers would keep PC plus 4.'
      }
    ]
  },
  // ------------------------------------------------------------------ 2.2
  {
    sectionId: 'compcoa-ch2-s2',
    readingTime: 8,
    intro: 'Hardwired control replaces a program of control steps with a combinational circuit that reads the opcode and raises exactly the signals each instruction needs. Given the six-bit opcode of an R-type, load, store or branch, a truth table maps bit patterns to RegWrite, MemRead, MemWrite, ALUSrc and friends. This section derives those signals and weighs speed against the rigidity that follows.',
    objectives: [
      'List the control signals of the single-cycle datapath and their effect',
      'Derive signal values for R-type, LW, SW and BEQ from opcode fields',
      'Contrast hardwired speed with the cost of changing the instruction set'
    ],
    concepts: [
      {
        term: 'Control-signal vocabulary',
        kind: 'definition',
        statement: 'Each mnemonic names one steering choice: `RegWrite` enables register writes, `MemRead` and `MemWrite` gate data memory, `ALUSrc` picks register or **immediate**, and `MemtoReg` picks ALU result or **memory output** for writeback.',
        detail: 'Branch adds `Branch` combined with the zero flag, and jump adds a PC-source select. Every signal is a pure function of opcode plus occasionally funct bits, evaluated combinationally each cycle.'
      },
      {
        term: 'R-type signal pattern',
        kind: 'method',
        statement: 'An **R-type** instruction such as `ADD R1, R2, R3` asserts `RegWrite = 1` with `ALUSrc = 0` and `MemtoReg = 0`, while `MemRead = 0`, `MemWrite = 0` and `Branch = 0` keep memory and the **PC mux** quiet.',
        detail: 'The 4-bit ALU control derives from funct: add, subtract, AND, OR and set-less-than each map to a distinct ALU code. No immediate flows anywhere in this pattern.'
      },
      {
        term: 'LW and SW patterns',
        kind: 'method',
        statement: 'A **load** `LW R1, 200(R2)` uses `ALUSrc = 1`, `MemRead = 1`, `MemtoReg = 1` and `RegWrite = 1` to steer the immediate into the ALU and memory output into the register, while a **store** `SW R1, 200(R2)` uses `ALUSrc = 1`, `MemWrite = 1` and `RegWrite = 0` since no register **retires**.',
        detail: 'Both use ALU operation add for address math. The writeback mux is the visible difference: loads select memory, stores select nothing because the register file stays shut.'
      },
      {
        term: 'Branch pattern',
        kind: 'method',
        statement: 'A **branch** `BEQ R1, R2, off` sets `ALUSrc = 0`, `Branch = 1` and `RegWrite = 0` with `MemRead = 0` and `MemWrite = 0`, so the ALU subtracts while the **AND** of `Branch` and `zero` steers the PC mux.',
        detail: 'Memory and register writes stay disabled: a branch changes only PC. Jump extends the idea with an unconditional PC-source select plus a link write for call variants.'
      },
      {
        term: 'Hardwired trade rule',
        kind: 'insight',
        statement: 'Hardwired control is a **two-level** AND-OR network from opcode bits to signals, so `delay` is one gate cascade and the controller runs at **full** datapath speed, yet adding an opcode rewires the **truth table** and risks the whole timing closure.',
        detail: 'Speed suits fixed RISC sets with few formats; churn suits microcode instead. Complexity grows with the product of opcodes and signals, which is why irregular sets strain this style.'
      }
    ],
    examples: [
      {
        title: 'Derive: full signal row for LW R1, 200(R2)',
        problem: 'Starting from opcode LW, assign RegDst, ALUSrc, MemtoReg, RegWrite, MemRead, MemWrite, Branch and ALUOp, and justify each choice against the datapath.',
        steps: [
          { label: 'Step 1', text: 'Register and ALU steering:\n```text\nRegDst=0 (rt=R1) | ALUSrc=1 (use imm 200) | ALUOp=add\n```\nDestination is the `rt` field for loads, and the ALU must add base plus offset rather than combine two registers.' },
          { label: 'Step 2', text: 'Memory and writeback:\n```text\nMemRead=1 | MemtoReg=1 | RegWrite=1 | MemWrite=0 | Branch=0\n```\nRead enables, the writeback mux picks memory output, the register write retires R1, and store and branch stay off.' },
          { label: 'Step 3', text: 'Check against SW: swapping to a store flips the row to `MemWrite = 1`, `RegWrite = 0`, `MemtoReg` unused, everything else identical. One truth-table row per opcode captures the whole difference.' }
        ],
        result: 'LW row is RegDst 0, ALUSrc 1, MemtoReg 1, RegWrite 1, MemRead 1, MemWrite 0, Branch 0, ALUOp add.'
      },
      {
        title: 'Derive: R-type ADD against BEQ side by side',
        problem: 'Write the signal rows for ADD R1, R2, R3 and BEQ R1, R2, off, then point at the three signals that differ most instructively.',
        steps: [
          { label: 'Step 1', text: 'ADD row:\n```text\nRegDst=1 | ALUSrc=0 | MemtoReg=0 | RegWrite=1\nMemRead=0 | MemWrite=0 | Branch=0 | ALUOp=funct\n```\nTwo registers feed the ALU and its result retires directly.' },
          { label: 'Step 2', text: 'BEQ row:\n```text\nRegDst=x | ALUSrc=0 | MemtoReg=x | RegWrite=0\nMemRead=0 | MemWrite=0 | Branch=1 | ALUOp=sub\n```\nSame ALU inputs, but the result is discarded except for its zero flag, and Branch arms the PC mux.' },
          { label: 'Step 3', text: 'Key trio: `RegWrite` 1 versus 0 decides retirement, `Branch` 0 versus 1 decides PC steering, and `MemtoReg` matters versus is unused. The AND gate `Branch AND zero` is the only new logic branches need.' }
        ],
        result: 'ADD retires an ALU result while BEQ retires nothing and steers PC; RegWrite, Branch and the use of zero separate the rows.'
      }
    ],
    keyTakeaways: [
      'Every instruction is one row of a truth table from opcode bits to RegWrite, MemRead, MemWrite, ALUSrc, MemtoReg and Branch.',
      'Loads read memory into registers while stores write registers into memory with no register retirement.',
      'Branches disable all writes and steer PC through Branch AND zero.',
      'Hardwired control is fastest for fixed sets and most brittle when opcodes change.'
    ],
    quiz: [
      // PYQ-pattern: load control signals
      {
        q: 'Which signal row matches LW R1, 200(R2)?',
        options: ['ALUSrc 0, MemRead 1, MemtoReg 0, RegWrite 1', 'ALUSrc 1, MemRead 1, MemtoReg 1, RegWrite 1', 'ALUSrc 1, MemWrite 1, RegWrite 0', 'ALUSrc 0, Branch 1, RegWrite 0'],
        answer: 1,
        explanation: 'Step 1: LW needs the immediate, so ALUSrc is 1. Step 2: It reads memory, so MemRead is 1. Step 3: Writeback takes memory output, so MemtoReg is 1 with RegWrite 1. Step 4: Only the second row has all four.'
      },
      // PYQ-pattern: store control signals
      {
        q: 'Which signals does SW assert?',
        options: ['MemWrite 1 with RegWrite 0', 'MemRead 1 with MemtoReg 1', 'RegWrite 1 with MemtoReg 0', 'Branch 1 with zero'],
        answer: 0,
        explanation: 'Step 1: Stores write memory, so MemWrite is 1. Step 2: No register retires, so RegWrite is 0. Step 3: MemRead stays 0 and Branch stays 0. Step 4: Hence MemWrite 1 with RegWrite 0.'
      },
      // PYQ-pattern: branch control path
      {
        q: 'How does BEQ steer the PC in hardwired control?',
        options: ['MemtoReg selects the target', 'Branch AND zero selects the target over PC plus 4', 'ALUSrc selects the target', 'RegWrite selects the target'],
        answer: 1,
        explanation: 'Step 1: BEQ sets Branch to 1. Step 2: ALU subtract gives zero flag. Step 3: AND of Branch and zero drives the PC mux. Step 4: High picks target 7988 style address, low keeps PC plus 4.'
      },
      // PYQ-pattern: hardwired versus microprogrammed
      {
        q: 'What best characterizes hardwired control?',
        options: ['Slow but trivially extensible via control store', 'One microinstruction per gate', 'Fast combinational mapping, costly to extend', 'No dependence on opcode bits'],
        answer: 2,
        explanation: 'Step 1: Mapping is AND-OR logic, delay one cascade. Step 2: That makes it the fastest style. Step 3: New opcodes rewrite the truth table and timing. Step 4: So fast yet brittle is the right pairing.'
      }
    ]
  },
  // ------------------------------------------------------------------ 2.3
  {
    sectionId: 'compcoa-ch2-s3',
    readingTime: 8,
    intro: 'Microprogrammed control replaces the web of gates with a tiny stored program: each machine instruction triggers a sequence of microinstructions, and each microinstruction is a word of control bits read from a control store. Horizontal words are wide and fast while vertical words are narrow and encoded. This section sizes the store and compares the two encodings.',
    objectives: [
      'Describe fetch of microinstructions from the control store by the microsequencer',
      'Contrast horizontal and vertical microcode on width, speed and decode cost',
      'Size a control store and sequence a three-microstep load'
    ],
    concepts: [
      {
        term: 'Control store idea',
        kind: 'definition',
        statement: 'The **control store** is a small fast memory holding **microinstructions**, so executing `LW` means the **microsequencer** steps through addresses $u_0, u_1, u_2$ whose bit fields raise `MemRead`, then latch `ALUOut`, then write the register in successive **microsteps**.',
        detail: 'Changing behavior means rewriting memory words, not rewiring gates. The micro program counter plus a mapping from opcode to start address forms the whole sequencer.'
      },
      {
        term: 'Horizontal microcode',
        kind: 'definition',
        statement: 'In **horizontal** microcode each control signal owns one bit, so a 40-signal machine uses 40-bit words where `MemRead` and `ALUSrc` can assert in the **same** word with zero decode delay.',
        detail: 'Parallelism is maximal: any compatible signal bundle fires at once. Width is the price, since the store holds one wide word per microstep.'
      },
      {
        term: 'Vertical microcode',
        kind: 'definition',
        statement: 'In **vertical** microcode an encoded field such as 4-bit `ALUOp` decodes into 16 actions through a **decoder**, so words stay narrow while each microstep does **less** in parallel and pays decode delay.',
        detail: 'Mutually exclusive signals share a field, which compresses the store dramatically. The decoder resembles an instruction decoder one level down.'
      },
      {
        term: 'Store-size math',
        kind: 'method',
        statement: 'Store bits obey **bits** $= S \\times W$ where `S` is the microstep count and `W` the word width, so 512 steps of 40-bit horizontal words need $512 \\times 40 = 20480$ bits or **2.5 KB**, while 4-bit encoded vertical words for the same steps need $512 \\times 12 = 6144$ bits under a sample 12-bit format.',
        detail: 'Sequencing fields add a few bits per word for next-address or branch-on-flag selects. Address width follows $\\lceil \\log_2 S \\rceil$, so 512 steps need a 9-bit micro address.'
      },
      {
        term: 'Sequencing and mapping',
        kind: 'method',
        statement: 'The **microsequencer** picks the next microaddress from increment, opcode **map**, or flag branch, so `BEQ` microcode tests **zero** in word $u_2$ and either continues to writeback or jumps to the **branch-taken** microroutine.',
        detail: 'Mapping ROM converts the 6-bit opcode to a start address in one lookup. Conditional microbranches reuse the same flag bits the datapath already produces.'
      }
    ],
    examples: [
      {
        title: 'Sequence: LW in three microsteps',
        problem: 'Write a three-microstep horizontal routine for LW R1, 200(R2) naming the asserted signals per step, then count cycles if each microstep is one clock.',
        steps: [
          { label: 'Step 1', text: 'Microstep u0, address phase:\n```text\nu0: ALUSrc=1, ALUOp=add ; ALUOut = R2 + 200\n```\nThe immediate steers into the ALU and the sum latches into ALUOut at the step edge.' },
          { label: 'Step 2', text: 'Microstep u1, memory phase:\n```text\nu1: MemRead=1 ; MDR = M[ALUOut]\n```\nThe address held in ALUOut reads the word into the memory data register.' },
          { label: 'Step 3', text: 'Microstep u2, writeback: `MemtoReg = 1, RegWrite = 1` moves MDR into R1. Three microsteps mean $CPI = 3$ for LW here, so 100 million loads cost $300$ million microcycles against 100 million single-cycle clocks.' }
        ],
        result: 'LW retires in 3 microsteps with CPI 3 for loads; microcode trades cycles for a far simpler controller.'
      },
      {
        title: 'Size: horizontal against vertical store',
        problem: 'A controller needs 512 microsteps. Horizontal words are 40 bits; vertical words are 12 bits plus a 4-to-16 decoder. Compute both store sizes and the saving.',
        steps: [
          { label: 'Step 1', text: 'Horizontal bits:\n```text\n512 x 40 = 20480 bits = 2.5 KB\n```\nEvery signal gets its own bit and any bundle fires at once.' },
          { label: 'Step 2', text: 'Vertical bits:\n```text\n512 x 12 = 6144 bits = 0.75 KB\n```\nEncoded fields share bits; the decoder expands 4 bits into 16 actions with one gate delay.' },
          { label: 'Step 3', text: 'Saving equals $20480 - 6144 = 14336$ bits (1.75 KB), about 70 percent smaller, paid in decode delay plus reduced parallelism per microstep.' }
        ],
        result: 'Horizontal 2.5 KB versus vertical 0.75 KB; vertical saves 70 percent of store at the price of decode delay.'
      }
    ],
    keyTakeaways: [
      'Microcode executes each instruction as a routine of microsteps read from a control store.',
      'Horizontal words are wide with one bit per signal and maximal parallelism.',
      'Vertical words are narrow and encoded, saving store at the price of decode delay.',
      'Store bits equal steps times width, and the sequencer maps opcodes to start addresses.'
    ],
    quiz: [
      // PYQ-pattern: control-store sizing
      {
        q: 'A control store holds 512 microsteps of 40-bit words. What is its size?',
        options: ['6144 bits', '20480 bits (2.5 KB)', '512 bits', '40960 bits (5 KB)'],
        answer: 1,
        explanation: 'Step 1: Bits equal steps times width. Step 2: 512 times 40 equals 20480. Step 3: 20480 divided by 8 equals 2560 bytes. Step 4: 2560 bytes is 2.5 KB.'
      },
      // PYQ-pattern: horizontal versus vertical
      {
        q: 'Which statement about microcode encodings is correct?',
        options: ['Horizontal is narrow and needs a decoder', 'Vertical is wide with one bit per signal', 'Horizontal is wide and parallel; vertical is narrow, encoded, with decode delay', 'Both avoid any sequencer'],
        answer: 2,
        explanation: 'Step 1: Horizontal gives each signal its own bit, wide and parallel. Step 2: Vertical encodes fields, narrow with decode. Step 3: First two options swap the labels. Step 4: Both still need a microsequencer, so the third option stands.'
      },
      // PYQ-pattern: microstep sequencing
      {
        q: 'LW runs as 3 microsteps of 1 clock each. What is its CPI, and what do 100M loads cost?',
        options: ['CPI 1, 100M cycles', 'CPI 3, 300M cycles', 'CPI 2, 200M cycles', 'CPI 4, 400M cycles'],
        answer: 1,
        explanation: 'Step 1: 3 microsteps at 1 clock each is 3 clocks. Step 2: So CPI is 3. Step 3: 100M times 3 equals 300M cycles. Step 4: Single-cycle would have cost 100M.'
      },
      // PYQ-pattern: microaddress width
      {
        q: 'How many microaddress bits are needed for 512 microsteps?',
        options: ['9', '8', '10', '12'],
        answer: 0,
        explanation: 'Step 1: Need ceiling of log base 2 of 512. Step 2: 2 raised to 8 is 256, too few. Step 3: 2 raised to 9 is 512, exactly enough. Step 4: So 9 bits.'
      }
    ]
  },
  // ------------------------------------------------------------------ 2.4
  {
    sectionId: 'compcoa-ch2-s4',
    readingTime: 10,
    intro: 'A multicycle datapath reuses one ALU, one memory and one register file across several short steps instead of buying a dedicated copy for each stage. Instructions take as many cycles as they need, so fast instructions stop paying the load-word clock. This section computes CPI per class and turns the mix into execution time.',
    objectives: [
      'Explain how resource sharing cuts hardware but raises CPI above 1',
      'Compute blended CPI from per-class cycle counts and frequencies',
      'Compare single-cycle and multicycle time with the iron equation'
    ],
    concepts: [
      {
        term: 'Sharing principle',
        kind: 'definition',
        statement: 'A **multicycle** datapath reuses one **ALU** for address math, branch tests and arithmetic across different cycles, and one **memory** for fetch and data access in different cycles, staging values in `IR`, `MDR`, `A`, `B` and `ALUOut` registers between **steps**.',
        detail: 'Temporary registers hold values that must survive into later cycles. The controller becomes a small finite-state machine sequencing fetch, decode, execute, access and writeback states.'
      },
      {
        term: 'Per-class cycle counts',
        kind: 'definition',
        statement: 'Typical counts are **4** cycles for branches, **4** for R-type, **3** for stores and **5** for loads, because `LW` alone pays fetch plus decode plus address plus memory plus **writeback** while others skip the steps they never **need**.',
        detail: 'Every instruction shares fetch and decode, then diverges. Skipped steps are skipped cycles, which is exactly the saving over single-cycle.'
      },
      {
        term: 'Blended CPI',
        kind: 'method',
        statement: 'Blended **CPI** weights each class by frequency through `CPI` summation: with 40 percent ALU at 4, 25 percent loads at 5, 15 percent stores at 3 and 20 percent branches at 4, $CPI = 0.4 \\times 4 + 0.25 \\times 5 + 0.15 \\times 3 + 0.2 \\times 4 = 4.1$ cycles per **instruction**.',
        detail: 'Frequency data comes from measurement or compiler estimates. The dominant class sets the optimization target: cutting load cycles helps most when loads are hot.'
      },
      {
        term: 'Multicycle clock advantage',
        kind: 'insight',
        statement: 'The multicycle clock ticks at one **stage** delay rather than one whole-instruction delay, so with stage $2$ ns against single-cycle $8$ ns the same `CPI` mix at $CPI = 4.1$ finishes each instruction in $4.1 \\times 2 = 8.2$ ns of work versus $1 \\times 8 = 8$ ns, nearly tied but with far **less** hardware.',
        detail: 'Real wins come when the stage clock beats the single-cycle clock by more than CPI grows. Pipelining then attacks the remaining CPI gap.'
      },
      {
        term: 'Execution-time arithmetic',
        kind: 'law',
        statement: 'Execution time obeys $T = IC \\times CPI \\times T_c$ on both styles, so 200 million instructions at $CPI = 4.1$ and $T_c = 2$ ns take $200 \\times 4.1 \\times 2 = 1640$ million ns or **1.64 ms** through direct **multiplication** counted in `cycles`.',
        detail: 'Compare designs by the triple product only. A shorter clock never compensates a proportionally larger CPI unless the product shrinks.'
      }
    ],
    examples: [
      {
        title: 'Count: blended CPI and run time of a mix',
        problem: 'Mix: 40 percent R-type at 4 cycles, 25 percent LW at 5, 15 percent SW at 3, 20 percent branches at 4. Compute CPI, then run time for 200M instructions at 2 ns.',
        steps: [
          { label: 'Step 1', text: 'Blend:\n```text\nCPI = 0.4x4 + 0.25x5 + 0.15x3 + 0.2x4\n    = 1.6 + 1.25 + 0.45 + 0.8 = 4.1\n```\nLoads contribute the largest per-class term despite only 25 percent share.' },
          { label: 'Step 2', text: 'Cycles: $200 \\times 4.1 = 820$ million cycles. Time: $820 \\times 2 = 1640$ million ns $= 1.64$ ms.' },
          { label: 'Step 3', text: 'Single-cycle rival at $T_c = 8$ ns needs $200 \\times 1 \\times 8 = 1600$ million ns $= 1.60$ ms: nearly tied in time, but multicycle uses one ALU and one memory instead of duplicated units plus a branch adder.' }
        ],
        result: 'CPI 4.1 and 1.64 ms; multicycle matches single-cycle time here while halving duplicated hardware.'
      },
      {
        title: 'Count: cutting one load cycle',
        problem: 'Starting from CPI 4.1 above, an optimization trims LW from 5 to 4 cycles. Compute the new CPI, the cycles saved over 200M instructions, and the time saved at 2 ns.',
        steps: [
          { label: 'Step 1', text: 'New blend:\n```text\nCPI = 0.4x4 + 0.25x4 + 0.15x3 + 0.2x4\n    = 1.6 + 1.0 + 0.45 + 0.8 = 3.85\n```\nOnly the 25 percent load term changes, from 1.25 to 1.0.' },
          { label: 'Step 2', text: 'Cycles saved: $(4.1 - 3.85) \\times 200 = 0.25 \\times 200 = 50$ million cycles.' },
          { label: 'Step 3', text: 'Time saved: $50 \\times 2 = 100$ million ns $= 0.1$ ms, cutting 1.64 ms to 1.54 ms. Hot-class cycles dominate, so profiling before optimizing is mandatory.' }
        ],
        result: 'New CPI 3.85 saves 50M cycles and 0.1 ms; one cycle off a hot class beats several cycles off a cold one.'
      }
    ],
    keyTakeaways: [
      'Multicycle reuses one ALU and one memory across steps with temporary registers between cycles.',
      'Each class pays only its own steps: branches 4, R-type 4, stores 3, loads 5 in the standard pattern.',
      'Blended CPI is the frequency-weighted sum of per-class cycles.',
      'Time still obeys IC times CPI times cycle time, so short clocks must beat CPI growth to win.'
    ],
    quiz: [
      // PYQ-pattern: blended CPI computation
      {
        q: 'Mix: 40 percent at 4, 25 percent at 5, 15 percent at 3, 20 percent at 4 cycles. CPI?',
        options: ['3.85', '4.0', '4.1', '4.5'],
        answer: 2,
        explanation: 'Step 1: 0.4 times 4 equals 1.6. Step 2: 0.25 times 5 equals 1.25, total 2.85. Step 3: 0.15 times 3 equals 0.45, total 3.3; 0.2 times 4 equals 0.8, total 4.1. Step 4: CPI is 4.1.'
      },
      // PYQ-pattern: execution-time arithmetic
      {
        q: '200M instructions, CPI 4.1, 2 ns clock. Run time?',
        options: ['1.64 ms', '1.60 ms', '0.82 ms', '3.28 ms'],
        answer: 0,
        explanation: 'Step 1: Cycles equal 200M times 4.1 equals 820M. Step 2: Time equals 820M times 2 ns equals 1640M ns. Step 3: 1640M ns equals 1.64 ms. Step 4: Hence 1.64 ms.'
      },
      // PYQ-pattern: single-cycle versus multicycle
      {
        q: 'Single-cycle: 200M instr, CPI 1, 8 ns. Multicycle above: 1.64 ms. Verdict?',
        options: ['Multicycle halves time', 'Nearly tied near 1.6 ms; multicycle saves hardware', 'Single-cycle is twice as fast', 'Multicycle needs no controller'],
        answer: 1,
        explanation: 'Step 1: Single-cycle time is 200M times 1 times 8 equals 1600M ns equals 1.60 ms. Step 2: Multicycle is 1.64 ms. Step 3: Gap is 0.04 ms, near tie. Step 4: Multicycle still wins on hardware with one ALU and one memory.'
      },
      // PYQ-pattern: hot-class optimization
      {
        q: 'Trimming LW from 5 to 4 cycles in the mix above gives what new CPI?',
        options: ['3.60', '3.85', '4.10', '4.35'],
        answer: 1,
        explanation: 'Step 1: Load term falls from 0.25 times 5 equals 1.25 to 0.25 times 4 equals 1.0. Step 2: Drop is 0.25. Step 3: 4.1 minus 0.25 equals 3.85. Step 4: New CPI is 3.85.'
      }
    ]
  }
]
