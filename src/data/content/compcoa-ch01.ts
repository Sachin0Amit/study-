import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Computer Organization and Architecture
// Chapter 1: ISA, Addressing Modes and Machine Instructions (Sections 1.1–1.4)
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const compcoaCh01Content: SectionContent[] = [
  // ------------------------------------------------------------------ 1.1
  {
    sectionId: 'compcoa-ch1-s1',
    readingTime: 9,
    intro: 'An instruction set architecture is the contract between software and hardware: it fixes how operations name their operands, how many addresses each instruction carries, and where operands live between instructions. This section compares zero, one, two and three-address formats together with the stack, accumulator and general-purpose-register operand models. The arithmetic that matters is instruction count and traffic: fewer addresses per instruction means shorter instructions but longer programs.',
    objectives: [
      'Classify an instruction as zero, one, two or three-address from its operand fields',
      'Compare stack, accumulator and general-purpose-register operand models on code size and traffic',
      'Compute instruction counts and memory traffic for a short expression on each model'
    ],
    concepts: [
      {
        term: 'Three-address format',
        kind: 'definition',
        statement: 'A **three-address** instruction names two sources and one destination explicitly, so `ADD R1, R2, R3` means $R1 = R2 + R3$ with no hidden operand and no destructive overwrite of a source.',
        detail: 'Three-address code needs wide instructions because every instruction carries three register specifiers, yet programs stay short since each instruction does one complete operation. Load-store machines pair this format with `LOAD` and `STORE` so that arithmetic never touches memory directly.'
      },
      {
        term: 'Two-address format',
        kind: 'definition',
        statement: 'A **two-address** instruction reuses one field as both source and destination, so `ADD R1, R2` means $R1 = R1 + R2$ and the original value of `R1` is **destroyed** by the operation.',
        detail: 'Two-address formats shrink instruction width at the price of extra `MOV` instructions whenever a source value is still needed later. Machines with memory operands use this shape heavily, for instance `ADD MEM, R1` accumulates a register into a memory word.'
      },
      {
        term: 'One-address accumulator format',
        kind: 'definition',
        statement: 'A **one-address** machine keeps one operand implicitly in the **accumulator**, so `ADD X` means $AC = AC + M[X]$ and `STORE Y` means $M[Y] = AC$ with the accumulator as the silent partner of every operation.',
        detail: 'Instructions stay short because only one address travels with the opcode, but every non-trivial expression becomes a long chain of loads, operates and stores through the single accumulator. Traffic is high: each binary operation after the first needs its operand fetched and the result eventually stored.'
      },
      {
        term: 'Zero-address stack format',
        kind: 'definition',
        statement: 'A **zero-address** instruction names no operands at all because both sources are implicit: `PUSH A` and `PUSH B` load the stack, then a bare `ADD` pops the top two words, adds them, and pushes $A + B$ back onto the **stack**.',
        detail: 'Stack code is extremely compact since arithmetic instructions carry only an opcode, which is why this model suits interpreters and tiny instruction buffers. The cost is instruction count: every operand must be pushed, every intermediate must pass through the top of stack, and `POP` instructions carry results back to memory.'
      },
      {
        term: 'Operand-model trade rule',
        kind: 'insight',
        statement: 'The trade is **explicitness against count**: richer operand fields in `ADD R1, R2, R3` shorten the program but widen each instruction, while implicit operands in `PUSH`, `POP` and `ADD` narrow each instruction but lengthen the program and raise traffic $T = IC \\times b$ where $b$ is mean instruction width.',
        detail: 'General-purpose-register machines won because compilers can hold several live values in `R0` through `R15` at once, cutting both memory traffic and the push-pop churn of stacks and the load-store churn of accumulators. Extra instruction count still matters because run time follows $T = IC \\times CPI \\times T_c$ with $CPI$ near unity for simple register operations.'
      }
    ],
    examples: [
      {
        title: 'Trace: X = (A plus B) times (C minus D) on three-address and zero-address code',
        problem: 'Compile the expression $X = (A + B) \\times (C - D)$ first for a three-address load-store machine with registers `R1` and `R2`, then for a zero-address stack machine with `PUSH`, `POP`, `ADD`, `SUB` and `MUL`. Count instructions and data-memory touches in each version.',
        steps: [
          { label: 'Step 1', text: 'Three-address version:\n```asm\nLOAD R1, A\nLOAD R2, B\nADD R1, R1, R2\nLOAD R2, C\nSUB R2, R2, D\nMUL R1, R1, R2\nSTORE X, R1\n```\nSeven instructions: four loads, two arithmetic results plus one multiply, and one store. Data-memory touches equal six (five reads including the two reloads of working values plus one write), because arithmetic itself never visits memory.' },
          { label: 'Step 2', text: 'Zero-address version:\n```asm\nPUSH A\nPUSH B\nADD\nPUSH C\nPUSH D\nSUB\nMUL\nPOP X\n```\nEight instructions: five pushes, three bare operators, one pop. Every push reads memory and the pop writes it, so data-memory touches equal six as well, but instruction count is higher and each stack operation is a memory round trip unless a top-of-stack buffer hides it.' },
          { label: 'Step 3', text: 'Compare with $IC$ and width: three-address uses $IC = 7$ wide instructions while stack uses $IC = 8$ narrow ones, so with $CPI = 1$ and the same cycle time the three-address run takes $7$ cycles against $8$ for the stack version. The lesson generalizes: implicit operands compress width but inflate count, and register machines additionally let `R1` hold $A+B$ while `R2` fetches $C$ and $D$ with no restacking.' }
        ],
        result: 'Three-address needs 7 instructions and stack needs 8 for the same expression; both touch data memory 6 times here, but the stack form pays an extra cycle and loses the register reuse that keeps later expressions cheap.'
      },
      {
        title: 'Count: accumulator traffic for X = A plus B on a one-address machine',
        problem: 'A one-address machine has only `LOAD X`, `ADD X`, `STORE X` and starts with nothing useful in the accumulator. List the program for $X = A + B$, count instructions and memory accesses, then repeat the count for a two-address register machine.',
        steps: [
          { label: 'Step 1', text: 'One-address program:\n```asm\nLOAD A\nADD B\nSTORE X\n```\nThree instructions and three memory accesses (read $A$, read $B$, write $X$). The accumulator holds $A$ between the first two lines, so no extra move is needed for this tiny expression.' },
          { label: 'Step 2', text: 'Two-address register version:\n```asm\nMOV R1, A\nADD R1, B\nMOV X, R1\n```\nStill three instructions and three memory accesses here, because the single use of each value hides the accumulator weakness. The gap opens on longer expressions: each new binary operation on the accumulator forces a fresh `LOAD`, while `R1` through `R3` keep several live values on chip.' },
          { label: 'Step 3', text: 'Scale the count to $X = A + B + C + D$ with $CPI = 1$: accumulator code needs $LOAD$ then three $ADD$ steps plus $STORE$, giving $IC = 5$ and $5$ memory touches, while a three-address register machine does three loads, three adds and one store with the partial sums held in registers. Traffic arithmetic $T = IC \\times CPI \\times T_c$ then turns every saved memory-heavy instruction directly into saved cycles.' }
        ],
        result: 'Both models take 3 instructions for X = A plus B, but the accumulator model scales badly: every extra term forces another full load-add through the single accumulator while register machines accumulate partial sums on chip.'
      }
    ],
    keyTakeaways: [
      'Three-address code names two sources and one destination; two-address destroys one source; one-address hides the accumulator; zero-address hides the whole stack.',
      'Implicit operands narrow each instruction but inflate instruction count and traffic, while explicit register fields do the reverse.',
      'Stack programs are compact because operators like ADD carry no addresses, yet every value travels through PUSH and POP.',
      'Run time follows T = IC times CPI times cycle time, so the winning model minimizes the product of count, cycles per instruction and width-driven traffic.'
    ],
    quiz: [
      // PYQ-pattern: zero-address stack code length
      {
        q: 'How many instructions does a zero-address stack machine need for X = (A + B) * (C − D), using PUSH, POP, ADD, SUB, MUL?',
        options: ['6', '7', '8', '9'],
        answer: 2,
        explanation: 'Step 1: Push A and push B, then ADD gives the first sum in 3 steps. Step 2: Push C and push D, then SUB gives the second term in 3 more steps, total 6. Step 3: MUL combines the two stack tops in 1 step, total 7. Step 4: POP X writes the result in 1 step, total 8. Hence the count is 8.'
      },
      // PYQ-pattern: address-field width arithmetic
      {
        q: 'A 32-bit instruction with an 8-bit opcode uses three address fields of equal width. How many registers can it name?',
        options: ['8', '16', '128', '256'],
        answer: 3,
        explanation: 'Step 1: Address bits available equal 32 minus 8 equals 24 bits. Step 2: Three equal fields give 24 divided by 3 equals 8 bits per field. Step 3: One 8-bit field names 2 raised to 8 equals 256 registers. Step 4: So the machine can name 256 registers, matching option 256.'
      },
      // PYQ-pattern: accumulator traffic count
      {
        q: 'A one-address accumulator machine computes X = A + B + C starting with a cold accumulator. How many memory accesses occur?',
        options: ['3', '4', '5', '6'],
        answer: 1,
        explanation: 'Step 1: LOAD A reads A, access count 1. Step 2: ADD B reads B, count 2. Step 3: ADD C reads C, count 3. Step 4: STORE X writes X, count 4. Hence 4 memory accesses for 4 instructions.'
      },
      // PYQ-pattern: instruction-count times CPI comparison
      {
        q: 'Machine P runs a task in 10 million instructions at CPI 1.0; machine Q needs 8 million instructions at CPI 1.5 with the same clock. Which is faster and by how much?',
        options: ['P is faster by 1.2 times', 'Q is faster by 1.2 times', 'Both take equal time', 'Q is faster by 1.5 times'],
        answer: 0,
        explanation: 'Step 1: P cycles equal 10 million times 1.0 equals 10 million. Step 2: Q cycles equal 8 million times 1.5 equals 12 million. Step 3: Ratio Q divided by P equals 12 divided by 10 equals 1.2. Step 4: P uses fewer cycles, so P is faster by 1.2 times.'
      }
    ]
  },
  // ------------------------------------------------------------------ 1.2
  {
    sectionId: 'compcoa-ch1-s2',
    readingTime: 10,
    intro: 'An addressing mode answers one question: given the bits sitting in the instruction, how does the processor compute the effective address of the operand. Immediate, direct, indirect, register, indexed and PC-relative modes each define a small address equation, and the choice fixes how many memory visits an instruction performs. This section drills those equations until each mode reduces to arithmetic.',
    objectives: [
      'Write the effective-address equation of each major addressing mode',
      'Compute effective addresses and memory-visit counts from register and memory contents',
      'Select the mode that fits arrays, pointers and branch targets from its equation'
    ],
    concepts: [
      {
        term: 'Immediate and direct modes',
        kind: 'definition',
        statement: 'In **immediate** mode the operand lives inside the instruction itself, so `ADD R1, #500` computes $R1 = R1 + 500$ with **zero** memory visits, while **direct** mode treats the field as the address, so `LOAD R1, 500` loads $R1 = M[500]$ with one data visit.',
        detail: 'Immediate suits constants and needs no effective-address adder, but the constant width is bounded by the instruction format. Direct reaches any address the field can spell, at the price of one full memory read per operand.'
      },
      {
        term: 'Indirect mode',
        kind: 'definition',
        statement: 'In **indirect** mode the field points to a pointer, so `LOAD R1, @500` first reads $P = M[500]$ and then loads $R1 = M[P]$, costing **two** memory visits for one operand through the pointer cell `M[500]`.',
        detail: 'Register-indirect form `LOAD R1, (R2)` shortens the instruction by keeping the pointer in `R2` instead of in the address field. The flexibility of pointer chasing is paid in extra visits, which is why later machines favor indexed modes for arrays.'
      },
      {
        term: 'Register and register-indirect modes',
        kind: 'definition',
        statement: 'In **register** mode the operand is already on chip, so `ADD R1, R2` computes $R1 = R1 + R2$ with **zero** memory visits, while register-indirect `LOAD R1, (R2)` computes $EA = R2$ and then $R1 = M[EA]$ with one visit.',
        detail: 'Register mode is the fastest mode because the register file supplies both operands in one cycle. Register-indirect adds pointer power with a single visit and underlies stack access, where `SP` points at the top word.'
      },
      {
        term: 'Indexed and scaled modes',
        kind: 'definition',
        statement: 'In **indexed** mode the effective address adds a base and an offset, so `LOAD R1, 200(R2)` computes $EA = R2 + 200$ and then $R1 = M[EA]$, while scaled form `LOAD R1, (R2, R3, 4)` computes $EA = R2 + R3 \\times 4$ for word arrays through index register `R3`.',
        detail: 'Indexed mode walks arrays with no instruction rewrite: bump `R2` or `R3` and the next element arrives. Auto-increment folds the bump into the access, and scaled factors of 1, 2, 4 or 8 match element widths directly.'
      },
      {
        term: 'PC-relative mode',
        kind: 'definition',
        statement: 'In **PC-relative** mode the address field is a signed displacement from the program counter, so `BEQ -12` with $PC = 1000$ jumps to $EA = 1000 - 12 = 988$ and position-independent code in `branch` instructions travels anywhere in memory unchanged.',
        detail: 'PC-relative keeps branch encodings short because targets near the branch need only small displacements. The same equation serves data access on some machines, where tables addressed relative to `PC` move with the program.'
      }
    ],
    examples: [
      {
        title: 'Drill: effective addresses from a register and memory snapshot',
        problem: 'Given $R2 = 1000$, $R3 = 25$, $M[500] = 1400$, $M[1200] = 77$ and $M[1100] = 99$, compute the effective address and loaded value for `LOAD R1, 200(R2)` and for scaled `LOAD R1, (R2, R3, 4)`, and state the memory visits of `LOAD R1, @500`.',
        steps: [
          { label: 'Step 1', text: 'Indexed `LOAD R1, 200(R2)`:\n```asm\nEA = R2 + 200 = 1000 + 200 = 1200\nR1 = M[1200] = 77\n```\nOne data visit after the fetch, because the base plus offset arithmetic happens on chip and only the final word comes from memory.' },
          { label: 'Step 2', text: 'Scaled `LOAD R1, (R2, R3, 4)`:\n```asm\nEA = R2 + R3 * 4 = 1000 + 25 * 4 = 1100\nR1 = M[1100] = 99\n```\nAgain one data visit; the scale factor 4 converts the word index 25 into byte offset 100 automatically.' },
          { label: 'Step 3', text: 'Indirect `LOAD R1, @500` reads $P = M[500] = 1400$ first, then $R1 = M[1400]$, for two data visits. The rule of thumb holds: immediate 0 visits, register 0, direct 1, indexed 1, register-indirect 1, memory-indirect 2.' }
        ],
        result: 'Indexed EA is 1200 loading 77; scaled EA is 1100 loading 99; memory-indirect costs two visits through the pointer cell 500.'
      },
      {
        title: 'Drill: PC-relative branch target and access count',
        problem: 'A branch `BEQ +36` sits at address 2000 with $PC = 2000$ at evaluate time and the condition true. Compute the target, then count total memory visits if the instruction word itself must be fetched and the target holds the next instruction.',
        steps: [
          { label: 'Step 1', text: 'Target equation:\n```asm\nEA = PC + displacement = 2000 + 36 = 2036\n```\nThe 8-bit field carries only the small value 36 while the full 2036 emerges from the adder, which is the whole point of PC-relative coding.' },
          { label: 'Step 2', text: 'Visit count: one fetch for the branch word at 2000, then one fetch for the target word at 2036, giving 2 instruction visits and 0 data visits. A taken branch therefore costs an extra fetch cycle against straight-line flow even before any pipeline penalty.' },
          { label: 'Step 3', text: 'Range check: with an 8-bit signed displacement the reach is $-128$ to $+127$ around $PC$, so targets inside that window encode in one short field while distant targets need a longer format or a register-indirect jump through `R_target`.' }
        ],
        result: 'Target is 2036 with 2 instruction fetches; PC-relative compresses near targets into small displacements at the price of limited reach.'
      }
    ],
    keyTakeaways: [
      'Each mode is an equation: immediate uses the field, direct uses M[field], indirect uses M[M[field]], indexed uses base plus offset, PC-relative uses PC plus displacement.',
      'Memory-visit counts rank modes: register and immediate cost 0 data visits, direct and indexed cost 1, memory-indirect costs 2.',
      'Indexed and scaled modes walk arrays by changing a register instead of rewriting the instruction.',
      'PC-relative addressing keeps branches short and programs relocatable by encoding targets as displacements from PC.'
    ],
    quiz: [
      // PYQ-pattern: indexed effective-address arithmetic
      {
        q: 'R2 holds 1000. What are the EA and loaded value for LOAD R1, 200(R2) given M[1200] = 77?',
        options: ['EA 1000, value 77', 'EA 1200, value 77', 'EA 1200, value 1000', 'EA 1400, value 77'],
        answer: 1,
        explanation: 'Step 1: EA equals base plus offset, 1000 plus 200 equals 1200. Step 2: The load reads M[1200], which holds 77. Step 3: Option 1200 with 77 matches. Step 4: Other options misplace the base or swap address and value.'
      },
      // PYQ-pattern: scaled indexed addressing
      {
        q: 'R2 = 1000, R3 = 25. For LOAD R1, (R2, R3, 4), what is the EA?',
        options: ['1029', '1050', '1100', '2000'],
        answer: 2,
        explanation: 'Step 1: Scale the index: 25 times 4 equals 100. Step 2: Add the base: 1000 plus 100 equals 1100. Step 3: So EA is 1100, one data visit follows. Step 4: 1029 ignores scaling, 1050 adds unscaled, 2000 doubles the base.'
      },
      // PYQ-pattern: indirect visit counting
      {
        q: 'M[500] = 1400 and M[1400] = 36. How many data-memory visits does LOAD R1, @500 perform, and what lands in R1?',
        options: ['1 visit, R1 = 1400', '2 visits, R1 = 36', '2 visits, R1 = 1400', '0 visits, R1 = 500'],
        answer: 1,
        explanation: 'Step 1: First visit reads the pointer P = M[500] = 1400. Step 2: Second visit reads R1 = M[1400] = 36. Step 3: Total is 2 data visits. Step 4: Hence R1 = 36 after 2 visits.'
      },
      // PYQ-pattern: PC-relative target math
      {
        q: 'A branch at PC = 2000 carries displacement −12 with the condition true. What is the target?',
        options: ['1988', '2000', '2012', '1880'],
        answer: 0,
        explanation: 'Step 1: EA equals PC plus displacement. Step 2: 2000 minus 12 equals 1988. Step 3: The branch lands at 1988. Step 4: 2012 adds instead of subtracting; 1880 misplaces a digit.'
      }
    ]
  },
  // ------------------------------------------------------------------ 1.3
  {
    sectionId: 'compcoa-ch1-s3',
    readingTime: 9,
    intro: 'RISC and CISC are two answers to the same compiler problem: what instruction set makes real programs fast. CISC packs work into powerful variable-length instructions with high cycles per instruction, while RISC restricts itself to fixed-length load-store instructions that retire near one per cycle. This section turns that slogan into arithmetic with the iron equation of performance.',
    objectives: [
      'Contrast fixed-length load-store RISC with variable-length memory-operand CISC',
      'Apply T = IC times CPI times cycle time to compare two design points',
      'Explain why compilers prefer regular fixed formats despite higher instruction counts'
    ],
    concepts: [
      {
        term: 'RISC design rules',
        kind: 'definition',
        statement: 'A **RISC** set uses **fixed-length** instructions, a **load-store** discipline where only `LOAD` and `STORE` touch memory, and few simple addressing modes, so most operations retire with $CPI$ near unity.',
        detail: 'Regularity lets the pipeline fetch and decode one instruction per cycle with no length-discovery stage. The compiler accepts a larger $IC$ because each instruction is cheap and scheduling is predictable.'
      },
      {
        term: 'CISC design rules',
        kind: 'definition',
        statement: 'A **CISC** set uses **variable-length** instructions, memory operands inside arithmetic such as `ADD MEM, R1`, and rich modes, so one instruction does more work at $CPI$ well above unity.',
        detail: 'Dense encoding suited small memories and hand-written assembly, but variable lengths complicate fetch and decode. Complex instructions also resist clean pipelining because one instruction may need several memory visits.'
      },
      {
        term: 'Iron performance equation',
        kind: 'law',
        statement: 'Run time obeys the **iron equation** $T = IC \\times CPI \\times T_c$ where `IC` is instruction count, `CPI` is mean cycles per instruction, and `T_c` is the cycle time, so halving `IC` while tripling `CPI` still **loses**.',
        detail: 'Every design trade must move the product, not one factor alone. RISC bets that cutting $CPI$ and $T_c$ outweighs growing $IC$; CISC bets the reverse.'
      },
      {
        term: 'CPI intuition',
        kind: 'insight',
        statement: 'Mean **CPI** blends instruction mix with per-class cost through `CPI` weights: if 60 percent of instructions cost 1 cycle and 40 percent cost 2 cycles, then $CPI = 0.6 \\times 1 + 0.4 \\times 2 = 1.4$ cycles per instruction.',
        detail: 'Memory-operand and multiply instructions carry high per-class CPI, so their frequency decides the average. Pipelining drives simple-operation CPI toward 1 while hazards and misses push the mean back up.'
      },
      {
        term: 'Why compilers prefer regularity',
        kind: 'insight',
        statement: 'Compilers prefer **regular** sets because fixed widths, a flat register file `R0` through `R31`, and orthogonal modes let code generation, register allocation and scheduling use one uniform cost model instead of **special cases** per instruction.',
        detail: 'Exotic instructions go unused when no compiler pattern emits them, so their silicon earns nothing. RISC spends its transistor budget on registers, caches and pipeline control that every program exercises.'
      }
    ],
    examples: [
      {
        title: 'Count: iron-equation race between a CISC and a RISC point',
        problem: 'A task needs $IC = 1.0$ million on CISC at $CPI = 2.5$ and $IC = 1.4$ million on RISC at $CPI = 1.2$, both with $T_c = 0.5$ ns. Compute each run time and the winner.',
        steps: [
          { label: 'Step 1', text: 'CISC time:\n```text\nT = IC x CPI x Tc = 1.0M x 2.5 x 0.5 ns = 1.25 ms\n```\nCycles equal $1.0 \\times 2.5 = 2.5$ million, times $0.5$ ns gives $1.25$ ms.' },
          { label: 'Step 2', text: 'RISC time:\n```text\nT = 1.4M x 1.2 x 0.5 ns = 0.84 ms\n```\nCycles equal $1.4 \\times 1.2 = 1.68$ million, times $0.5$ ns gives $0.84$ ms.' },
          { label: 'Step 3', text: 'Ratio $1.25 \\div 0.84 \\approx 1.49$: RISC wins by about $1.5$ times despite 40 percent more instructions, because its CPI advantage of $2.5$ against $1.2$ dominates the product.' }
        ],
        result: 'CISC 1.25 ms versus RISC 0.84 ms: RISC is about 1.5 times faster since CPI improvement outweighs instruction-count growth.'
      },
      {
        title: 'Count: blended CPI from an instruction mix',
        problem: 'A program executes 50 percent ALU at 1 cycle, 30 percent loads and stores at 2 cycles, and 20 percent branches at 3 cycles. Compute mean CPI, then total cycles for 200 million instructions.',
        steps: [
          { label: 'Step 1', text: 'Blend the mix:\n```text\nCPI = 0.5x1 + 0.3x2 + 0.2x3 = 0.5 + 0.6 + 0.6 = 1.7\n```\nEach term is frequency times per-class cost, summed to $1.7$ cycles per instruction.' },
          { label: 'Step 2', text: 'Scale to the program: $200 \\times 1.7 = 340$ million cycles. At $T_c = 1$ ns that is $0.34$ s.' },
          { label: 'Step 3', text: 'Sensitivity: cutting branch cost from 3 to 2 drops $CPI$ to $0.5 + 0.6 + 0.4 = 1.5$ and cycles to $300$ million, saving $40$ million cycles. Rare expensive classes still move the mean, which is why branch handling earns its own chapter.' }
        ],
        result: 'Mean CPI is 1.7 and 200 million instructions cost 340 million cycles; trimming the priciest class pays the most.'
      }
    ],
    keyTakeaways: [
      'RISC means fixed length, load-store, simple modes and CPI near 1; CISC means variable length, memory operands and CPI well above 1.',
      'Only the product T = IC times CPI times cycle time decides speed, never one factor alone.',
      'Mean CPI is a frequency-weighted blend of per-class costs, so hot expensive classes dominate.',
      'Compilers favor regularity because one uniform cost model beats a shelf of special-case instructions.'
    ],
    quiz: [
      // PYQ-pattern: iron-equation comparison
      {
        q: 'Task: CISC IC 1.0M at CPI 2.5; RISC IC 1.4M at CPI 1.2; same 0.5 ns clock. Which wins?',
        options: ['CISC at 1.25 ms beats RISC at 0.84 ms', 'RISC at 0.84 ms beats CISC at 1.25 ms', 'Tie at 1.0 ms each', 'CISC wins by 1.5 times'],
        answer: 1,
        explanation: 'Step 1: CISC cycles equal 1.0M times 2.5 equals 2.5M, time 1.25 ms. Step 2: RISC cycles equal 1.4M times 1.2 equals 1.68M, time 0.84 ms. Step 3: 1.25 divided by 0.84 is about 1.49. Step 4: RISC is faster by about 1.5 times.'
      },
      // PYQ-pattern: blended CPI arithmetic
      {
        q: 'Mix: 50 percent at 1 cycle, 30 percent at 2 cycles, 20 percent at 3 cycles. Mean CPI?',
        options: ['1.5', '1.6', '1.7', '2.0'],
        answer: 2,
        explanation: 'Step 1: ALU term 0.5 times 1 equals 0.5. Step 2: Memory term 0.3 times 2 equals 0.6, running total 1.1. Step 3: Branch term 0.2 times 3 equals 0.6, total 1.7. Step 4: Mean CPI is 1.7.'
      },
      // PYQ-pattern: RISC versus CISC attribute match
      {
        q: 'Which pair correctly matches the design style?',
        options: ['RISC: variable length with memory operands', 'CISC: fixed length with load-store discipline', 'RISC: fixed length with load-store discipline', 'CISC: single-cycle execution of every instruction'],
        answer: 2,
        explanation: 'Step 1: RISC is defined by fixed-length load-store form. Step 2: CISC is defined by variable-length memory-operand form. Step 3: First two options swap the labels. Step 4: No style executes every instruction in one cycle, so the RISC fixed-length load-store option stands.'
      },
      // PYQ-pattern: cycle-time trade with CPI
      {
        q: 'Design A: 300M cycles at 1.0 ns. Design B: 240M cycles at 1.5 ns. Which is faster?',
        options: ['B by 60 ns', 'Tie at 300 ns', 'B at 240 ns beats A at 300 ns', 'A at 300 ns beats B at 360 ns'],
        answer: 3,
        explanation: 'Step 1: A time equals 300M times 1.0 ns equals 300 ns. Step 2: B time equals 240M times 1.5 ns equals 360 ns. Step 3: 300 is less than 360. Step 4: A wins despite more cycles because its clock is faster.'
      }
    ]
  },
  // ------------------------------------------------------------------ 1.4
  {
    sectionId: 'compcoa-ch1-s4',
    readingTime: 7,
    intro: 'Endianness decides the order in which the bytes of a word sit in memory, while alignment decides the addresses at which words may sit. Both look like bookkeeping until a program moves data between machines or a structure runs slower than its size suggests. This section makes byte order drawable and padding computable.',
    objectives: [
      'Draw little-endian and big-endian layouts of a multibyte word',
      'Apply the alignment rule and compute padding and stride for structures',
      'Explain the cost of unaligned access in extra bus transactions'
    ],
    concepts: [
      {
        term: 'Little-endian order',
        kind: 'definition',
        statement: 'In **little-endian** order the least-significant byte lives at the lowest address, so value `0x12345678` stored at address `1000` places `0x78` at 1000, `0x56` at 1001, `0x34` at 1002 and `0x12` at 1003 with the **low byte low**.',
        detail: 'Integer growth extends toward higher addresses, and a 32-bit load followed by a byte load of the same address yields the low byte with no shift. Most desktop and mobile processors use this order today.'
      },
      {
        term: 'Big-endian order',
        kind: 'definition',
        statement: 'In **big-endian** order the most-significant byte lives at the lowest address, so `0x12345678` at address `1000` places `0x12` at 1000, `0x34` at 1001, `0x56` at 1002 and `0x78` at 1003 with the **big end first**.',
        detail: 'Memory dumps read like ordinary hex numbers from left to right, which suits network headers and human inspection. Network byte order is big-endian, so hosts convert at the boundary with `htonl` style routines.'
      },
      {
        term: 'Alignment rule',
        kind: 'law',
        statement: 'The **alignment** rule requires a datum of size `s` bytes to sit at an address that is a multiple of `s`, so a 4-byte `int` belongs at addresses like `1000` or `1004` but a request at `1002` is **unaligned**.',
        detail: 'Aligned words never straddle a natural bus boundary, so one transaction delivers the whole datum. Hardware may still serve unaligned requests, but only by issuing extra transactions and stitching the bytes.'
      },
      {
        term: 'Padding and stride',
        kind: 'method',
        statement: 'Compilers insert **padding** so every field stays aligned: a `char` of 1 byte followed by an `int` of 4 bytes consumes offset 0 for the `char`, skips offsets 1 through 3, seats the `int` at offset 4, and fixes the **stride** of the whole record at a multiple of the largest field.',
        detail: 'Reordering fields by decreasing size shrinks padding. Arrays multiply the padded stride, so one wasted byte per record costs one byte times the element count.'
      },
      {
        term: 'Unaligned-access cost',
        kind: 'insight',
        statement: 'An **unaligned** word that straddles a boundary costs **two** bus transactions instead of one, so a 4-byte load at `1002` on a 4-byte-wide bus fetches bytes `1000` through `1003` and then `1004` through `1007` before assembling `M[1002]` from the two halves with shifts in `merge` logic.',
        detail: 'Some machines trap instead of stitching, turning the access into a fault plus handler cost. Either way the price lands on programs that pack buffers byte-tight and then read words from odd offsets.'
      }
    ],
    examples: [
      {
        title: 'Draw: 0x12345678 at address 1000 in both orders',
        problem: 'Tabulate the byte at each address from 1000 through 1003 for value 0x12345678 in little-endian and in big-endian order, then state which byte a byte-load from 1000 returns in each case.',
        steps: [
          { label: 'Step 1', text: 'Little-endian table:\n```text\naddr 1000 -> 0x78 | addr 1001 -> 0x56\naddr 1002 -> 0x34 | addr 1003 -> 0x12\n```\nLow byte at the low address; a byte-load from 1000 returns 0x78.' },
          { label: 'Step 2', text: 'Big-endian table:\n```text\naddr 1000 -> 0x12 | addr 1001 -> 0x34\naddr 1002 -> 0x56 | addr 1003 -> 0x78\n```\nHigh byte at the low address; a byte-load from 1000 returns 0x12.' },
          { label: 'Step 3', text: 'Consequence: exchanging a dump between orders without conversion garbles every multibyte field while leaving byte strings intact, since characters occupy one byte each and never reorder. Conversion routines swap positions 1000 with 1003 and 1001 with 1002 for each 4-byte word.' }
        ],
        result: 'Little-endian bytes at 1000..1003 are 78 56 34 12; big-endian are 12 34 56 78; byte-loads from 1000 return 0x78 and 0x12 respectively.'
      },
      {
        title: 'Count: padding and stride of a mixed record',
        problem: 'A record holds char a (1 byte), int b (4 bytes), char c (1 byte) with int alignment 4. Compute offsets, total size and stride, then reorder to minimize padding.',
        steps: [
          { label: 'Step 1', text: 'Naive layout:\n```text\na at offset 0 (1 byte)\npad offsets 1..3 (3 bytes)\nb at offsets 4..7 (4 bytes)\nc at offset 8 (1 byte)\npad offsets 9..11 (3 bytes for stride)\ntotal = 12 bytes, stride = 12\n```\nTrailing pad lifts the size to a multiple of 4 so arrays keep every b aligned.' },
          { label: 'Step 2', text: 'Reordered as b, a, c: b at 0..3, a at 4, c at 5, pad 6..7, total 8 bytes with stride 8. Saving equals 12 minus 8 equals 4 bytes per record.' },
          { label: 'Step 3', text: 'Array effect: one million records save $4 \\times 1000000 = 4000000$ bytes, about 4 MB, with identical fields. Alignment arithmetic therefore decides cache footprint as well as correctness.' }
        ],
        result: 'Naive size 12 bytes, reordered size 8 bytes; field order alone saves 4 bytes per record, about 4 MB per million records.'
      }
    ],
    keyTakeaways: [
      'Little-endian stores the low byte at the low address; big-endian stores the high byte there.',
      'A size-s datum must sit at a multiple-of-s address, or the access is unaligned.',
      'Compilers pad records so each field stays aligned; field order by decreasing size minimizes waste.',
      'Unaligned words cost two bus transactions or a trap, so byte-tight packing trades space against speed.'
    ],
    quiz: [
      // PYQ-pattern: endian byte layout
      {
        q: 'Value 0x12345678 is stored at address 1000 in little-endian order. Which byte sits at 1000?',
        options: ['0x12', '0x34', '0x56', '0x78'],
        answer: 3,
        explanation: 'Step 1: Little-endian puts the least-significant byte lowest. Step 2: Least-significant byte of 0x12345678 is 0x78. Step 3: Address 1000 gets 0x78, 1001 gets 0x56, 1002 gets 0x34, 1003 gets 0x12. Step 4: Hence the byte at 1000 is 0x78.'
      },
      // PYQ-pattern: big-endian layout
      {
        q: 'Same value 0x12345678 at address 1000 in big-endian order. Which byte sits at 1003?',
        options: ['0x12', '0x34', '0x56', '0x78'],
        answer: 3,
        explanation: 'Step 1: Big-endian puts the most-significant byte lowest. Step 2: Layout is 1000:0x12, 1001:0x34, 1002:0x56, 1003:0x78. Step 3: Address 1003 holds 0x78. Step 4: The two orders agree at no position for this value.'
      },
      // PYQ-pattern: alignment rule check
      {
        q: 'A 4-byte int is requested at address 1002 on a 4-byte-wide bus. What happens?',
        options: ['Two transactions fetch 1000–1003 and 1004–1007, then merge', 'One aligned transaction delivers it', 'The value arrives with zero cost', 'Alignment never matters for ints'],
        answer: 0,
        explanation: 'Step 1: Multiples of 4 near 1002 are 1000 and 1004, so 1002 is unaligned. Step 2: First transaction covers 1000 through 1003. Step 3: Second covers 1004 through 1007. Step 4: Merge logic assembles bytes 1002 through 1005, doubling bus cost.'
      },
      // PYQ-pattern: structure padding arithmetic
      {
        q: 'Record: char a, int b, char c with 4-byte int alignment. What are naive size and reordered minimum size?',
        options: ['Naive 6, minimum 6', 'Naive 12, minimum 8', 'Naive 9, minimum 9', 'Naive 8, minimum 12'],
        answer: 1,
        explanation: 'Step 1: a at 0, pad 1–3, b at 4–7, c at 8, tail pad 9–11 gives 12. Step 2: Reordered b at 0–3, a at 4, c at 5, pad 6–7 gives 8. Step 3: Saving is 12 minus 8 equals 4 bytes. Step 4: Hence naive 12 and minimum 8.'
      }
    ]
  }
]
