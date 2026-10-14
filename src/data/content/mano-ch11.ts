import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 11: Design of a Basic Computer (Sections 11.1 – 11.3)
// Master study content. All backslashes doubled in TS strings for KaTeX.
// ============================================================================

export const manoCh11Content: SectionContent[] = [
  // ------------------------------------------------------------------ 11.1
  {
    sectionId: 'mano-ch11-s1',
    readingTime: 8,
    prerequisites: [
      'Digital logic gates (AND, OR, NOT) and Boolean algebra',
      'Synchronous flip-flops, 4-bit binary counters, and $4 \\times 16$ decoders',
      'Register transfer level (RTL) micro-operations and common bus multiplexing',
    ],
    intro: 'Chapter 11 integrates the datapath components, arithmetic logic unit, and timing generators from previous chapters into a fully operational digital computer. Mano\\’s basic computer contains a memory unit of 4,096 words of 16 bits each, nine discrete hardware registers interconnected by a 16-bit common bus system, and a sequence counter decoded into 16 discrete timing signals $T_0 \\dots T_{15}$. Understanding this structural organization reveals how hardware control gates choreograph the transfer of binary information between memory and processor registers.',
    objectives: [
      'Diagram the complete register configuration and word sizes of the basic computer',
      'Explain the common bus multiplexer organization and its 3-bit selection lines S2, S1, S0',
      'Describe the memory unit capacity (4096 x 16) and its 12-bit address bus interface',
      'Identify the role of the 4-bit sequence counter (SC) and the timing signals T0 through T15',
      'Trace control gate logic controlling register load and increment operations'
    ],
    concepts: [
      {
        term: 'Basic computer register configuration',
        kind: 'definition',
        statement: 'The computer consists of nine working registers: **AR** (12-bit address register), **PC** (12-bit program counter), **DR** (16-bit data register), **AC** (16-bit accumulator), **IR** (16-bit instruction register), **TR** (16-bit temporary register), **INPR** (8-bit input register), **OUTR** (8-bit output register), and **SC** (4-bit sequence counter).',
        detail: 'AR holds memory addresses (0 to 4095); PC tracks the next instruction to fetch; DR holds operands read from memory; AC is the multi-purpose processing register; IR preserves the fetched instruction word while control logic decodes it.'
      },
      {
        term: 'The 16-bit common bus',
        kind: 'definition',
        statement: 'A common bus with three selection inputs ($S_2, S_1, S_0$) connects the outputs of six registers and memory to the inputs of all registers. Values $1 \\dots 7$ select AR, PC, DR, AC, IR, TR, and Memory respectively, while 0 denotes no transfer.',
        detail: 'The bus avoids separate point-to-point wiring between all register pairs. When $S_2 S_1 S_0 = 010_2$, the 12-bit PC output is placed onto the bus (zero-extended to 16 bits) and can be loaded into AR by raising the AR load enable line: $AR \\leftarrow PC$.'
      },
      {
        term: 'Memory unit interface',
        kind: 'definition',
        statement: 'The memory unit contains $4096 \\times 16$ bits ($2^{12}$ words of 16 bits). It requires a 12-bit address supplied exclusively by the **AR** register, with separate read and write strobe inputs.',
        detail: 'Reading memory puts $M[AR]$ onto the common bus (selected when $S_2 S_1 S_0 = 111_2$). Writing memory transfers the 16-bit bus content into $M[AR]$ when the write input is pulsed.'
      },
      {
        term: 'Timing signals and the sequence counter',
        kind: 'method',
        statement: 'The control unit timing originates from a 4-bit sequence counter (**SC**) decoded by a $4 \\times 16$ decoder into sixteen mutually exclusive timing signals $T_0, T_1, \\dots, T_{15}$.',
        detail: 'The counter increments on each clock pulse: $SC \\leftarrow SC + 1$. When an instruction cycle completes, control logic pulses the synchronous clear line: $SC \\leftarrow 0$, resetting the machine to timing state $T_0$ for the next fetch cycle.'
      },
      {
        term: 'Control gate synthesis',
        kind: 'method',
        statement: 'Every register load, clear, and increment signal is driven by a Boolean combination of timing signals ($T_i$), instruction opcode decodes ($D_j$), and status flip-flops.',
        detail: 'For example, AR is loaded during $T_0$ ($AR \\leftarrow PC$), during $T_2$ ($AR \\leftarrow IR(0-11)$), and during $T_3$ for indirect addressing ($AR \\leftarrow M[AR]$). Thus, the load control input for AR is synthesized as $LD(AR) = T_0 + T_2 + D_7\\prime I T_3$.'
      }
    ],
    figures: [
      {
        caption: "Basic computer common bus system: multiplexer selection lines S₂ S₁ S₀ gate register and memory outputs onto the 16-bit bus, which in turn feeds the parallel inputs of all registers. The adder and logic circuit operates on operands from DR and AC, with result write-back into AC.",
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basic computer common bus system architecture"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/></marker></defs><rect x="40" y="20" width="640" height="34" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="42" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">16-bit Common Bus (Multiplexer Selection: S₂ S₁ S₀)</text><rect x="50" y="90" width="95" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="97" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Memory</text><text x="97" y="132" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">4096 × 16 [7]</text><rect x="165" y="90" width="80" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="205" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">AR</text><text x="205" y="132" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">12 bits [1]</text><rect x="265" y="90" width="80" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="305" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">PC</text><text x="305" y="132" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">12 bits [2]</text><rect x="365" y="90" width="80" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="405" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">DR</text><text x="405" y="132" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">16 bits [3]</text><rect x="465" y="90" width="80" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="505" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">AC</text><text x="505" y="132" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">16 bits [4]</text><rect x="565" y="90" width="80" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="605" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">IR</text><text x="605" y="132" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">16 bits [5]</text><polygon points="410,200 480,200 460,250 430,250" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="445" y="228" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">ALU</text><line x1="405" y1="150" x2="425" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="505" y1="150" x2="465" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><path d="M 445 250 L 445 280 L 525 280 L 525 155" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><text x="485" y="295" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="currentColor">Result to AC</text><line x1="97" y1="90" x2="97" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="205" y1="90" x2="205" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="305" y1="90" x2="305" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="405" y1="90" x2="405" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="505" y1="90" x2="505" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="605" y1="90" x2="605" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><path d="M 165 130 L 148 130" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#arrow)"/><text x="156" y="122" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="currentColor">Address (12)</text></svg>`,
        afterConcept: 2,
      },
    ],
    derivations: [
      {
        title: 'Hardware Control Logic Synthesis for Address Register (AR)',
        statement: 'The synchronous load control enable input for the Address Register (AR) in Mano\\’s basic computer is governed by the Boolean equation: $$ LD(AR) = T_0 + T_2 + D_7\\prime I T_3 $$',
        prerequisites: [
          'Instruction cycle phases: Fetch ($T_0, T_1$), Decode ($T_2$), and Indirect ($T_3$)',
          'Opcode decoder outputs $D_0 \\dots D_7$ ($D_7 = 1$ for register/IO instructions, $D_7 = 0$ for memory-reference)',
          'Addressing mode bit $I = IR(15)$ ($I = 0$ for direct, $I = 1$ for indirect)',
        ],
        steps: [
          {
            label: 'Step 1: Identifying Fetch phase register transfer at T₀',
            formula: `$$ T_0: \\quad AR \\leftarrow PC $$`,
            explanation: 'At the very beginning of every instruction cycle ($SC = 0000_2$), the control unit must fetch the next instruction from memory. Memory addresses are strictly supplied by AR. Therefore, the current program counter must be copied to AR: $S_2 S_1 S_0 = 010_2$ places PC on the bus, and asserting the load input of AR gates this 12-bit address into AR. Thus, timing signal $T_0$ is the first term asserting $LD(AR)$.',
          },
          {
            label: 'Step 2: Identifying Decode phase operand extraction at T₂',
            formula: `$$ T_2: \\quad AR \\leftarrow IR(0-11) $$`,
            explanation: 'During $T_1$, the instruction is read into IR: $IR \\leftarrow M[AR]$. At timing pulse $T_2$, the instruction opcode is decoded by a $3 \\times 8$ decoder into $D_0 \\dots D_7$, while bits $0-11$ of IR represent the address part of the instruction. These 12 bits are transferred from IR through the common bus into AR to prepare for memory operand retrieval: $AR \\leftarrow IR(0-11)$. Therefore, $T_2$ is the second term asserting $LD(AR)$.',
          },
          {
            label: 'Step 3: Identifying Indirect Addressing resolution at T₃',
            formula: `$$ D_7\\prime I T_3: \\quad AR \\leftarrow M[AR] $$`,
            explanation: 'At timing state $T_3$, the control unit examines addressing bit $I$ and opcode decode $D_7$. If $D_7 = 0$ (a memory-reference instruction) and $I = 1$ (indirect addressing mode), the current address in AR points not to the final operand, but to a memory location containing the effective address. Memory read is activated, putting $M[AR]$ on the bus, and AR is loaded with this effective address. The Boolean condition active during this micro-operation is $D_7\\prime I T_3$.',
          },
          {
            label: 'Step 4: Boolean synthesis into control gate hardware',
            formula: `$$ LD(AR) = T_0 \\lor T_2 \\lor (D_7\\prime \\land I \\land T_3) $$`,
            explanation: 'Scanning the entire micro-operation table of the basic computer across all 25 instruction routines confirms that AR is never loaded under any other timing or instruction conditions. Because timing signals $T_0, T_2, T_3$ are mutually exclusive (only one decoder output is active at any clock period), the three conditions combine into an OR gate with an input AND gate for the product term.',
          },
        ],
        result: 'The control logic for $LD(AR)$ requires an OR gate fed by $T_0$, $T_2$, and the output of an AND gate receiving $\\bar{D}_7$, $I$, and $T_3$. This rigorous derivation proves that computer control units are not magical programs, but purely deterministic combinational logic networks that trigger register transfers in synchronization with decoded sequence counter states.',
      },
    ],
    examples: [
      {
        title: 'Synthesizing the Load Function for the Data Register (DR)',
        problem: 'Determine the Boolean control expression for loading the Data Register (DR) given memory-reference instructions AND (D0), ADD (D1), and LDA (D2).',
        steps: [
          { label: 'Identify Transfer Times', text: 'Operands for memory-reference instructions are fetched into DR during clock cycle T4.' },
          { label: 'Formulate Active Conditions', text: 'DR is loaded if the instruction is AND, ADD, or LDA: D0 T4 + D1 T4 + D2 T4.' },
          { label: 'Combine Terms', text: 'Factor timing signal T4: LD(DR) = (D0 + D1 + D2) T4.' }
        ],
        result: 'The load input LD(DR) is driven by an OR gate of D0, D1, D2 ANDed with T4.'
      },
      {
        title: 'Tracing Fetch: AR <- PC then IR <- M[AR], PC <- PC + 1',
        problem: 'Starting with PC = 021 (hex) pointing at an ADD instruction, trace the bus selections and control pulses through timing states T0 and T1.',
        steps: [
          { label: 'T0: AR <- PC', text: 'Bus selection S2 S1 S0 = 010 places PC (021) onto the 16-bit bus; LD(AR) = T0 latches it, so AR becomes 021. SC increments to 1.' },
          { label: 'T1: Read memory onto bus', text: 'With AR = 021 stable, the memory read strobe puts M[021] (the ADD word, say 1001xxxxxxxxxxxx) onto the bus via selection 111; LD(IR) = T1 latches it into IR, while INR(PC) = T1 advances PC to 022 in the same cycle.' },
          { label: 'Why two registers change at once', text: 'T1 drives two independent control lines (load IR, increment PC) from the same timing signal — register transfers in one state need not share a source or destination, only a clock edge.' }
        ],
        result: 'After T0-T1: AR = 021, IR holds the ADD instruction word, PC = 022 — fetch is identical for every opcode and costs exactly two timing states.'
      }
    ],
    keyTakeaways: [
      'The basic computer has 4096x16 memory, 9 discrete registers, and a 16-bit common bus.',
      'Three select lines S2, S1, S0 dictate which register or memory word drives the common bus.',
      'AR is the sole register connected to the memory address lines; 12 bits address all 4096 words.',
      'SC counts from 0 to 15, generating timing signals T0-T15, and is cleared to 0 at cycle end.'
    ],
    quiz: [
      {
        q: 'Why is the Address Register (AR) 12 bits wide while the Accumulator (AC) is 16 bits wide?',
        options: [
          'AR only stores negative numbers',
          'The memory capacity is 4096 words (2^12), requiring exactly 12 address bits, while data words are 16 bits',
          'AR is multiplexed across two clock cycles',
          'AC contains parity check bits that AR omits'
        ],
        answer: 1,
        explanation: '4096 words require 12 bits of address space ($2^{12} = 4096$); each word holds 16 bits of instruction or data, matching AC and DR.'
      },
      {
        q: 'What occurs when the bus selection inputs S2 S1 S0 are set to 1 1 1?',
        options: [
          'The Accumulator is placed on the bus',
          'Memory contents M[AR] are placed on the common bus',
          'All registers are cleared simultaneously',
          'The Program Counter increments'
        ],
        answer: 1,
        explanation: 'Selection code 111 (binary 7) connects the 16-bit output of the memory unit M[AR] onto the common bus lines.'
      },
      {
        q: 'How does the basic computer reset timing back to T0 upon finishing an instruction?',
        options: [
          'By turning off the master clock generator',
          'By asserting the synchronous clear input on the sequence counter (SC <- 0)',
          'By loading the sequence counter with 15',
          'By executing a software interrupt'
        ],
        answer: 1,
        explanation: 'Clearing the sequence counter (SC <- 0) causes the 4x16 decoder to immediately activate output line T0 on the next clock pulse.'
      },
      {
        q: 'Which register provides the address to memory during instruction fetch and operand read?',
        options: ['PC exclusively', 'AR exclusively', 'DR', 'IR'],
        answer: 1,
        explanation: 'In Mano\\’s computer, only the 12-bit Address Register (AR) is physically wired to the address inputs of the memory unit.'
      }
    ]
  },

  // ------------------------------------------------------------------ 11.2
  {
    sectionId: 'mano-ch11-s2',
    readingTime: 9,
    intro: 'An instruction cycle in the basic computer progresses through four sequential phases: fetching the instruction from memory, decoding the operation code, reading an effective address if indirect addressing is indicated, and executing the microoperation sequence specified by the opcode. Mano classifies instructions into three categories: memory-reference instructions (AND, ADD, LDA, STA, BUN, BSA, ISZ), register-reference instructions (clearing, complementing, shifting AC), and input-output instructions. Examining the microoperations cycle by cycle reveals the exact register-transfer logic implemented in hardware.',
    objectives: [
      'Trace the fetch and decode microoperation sequence during timing cycles T0, T1, and T2',
      'Distinguish direct addressing from indirect addressing during timing cycle T3',
      'Write the RTL execution sequence for all seven memory-reference instructions (AND, ADD, LDA, STA, BUN, BSA, ISZ)',
      'Explain subroutine linkage using the BSA (branch and save return address) instruction',
      'List the register-reference instructions and explain how D7 I\\prime T3 activates them'
    ],
    concepts: [
      {
        term: 'The Fetch phase (T0, T1)',
        kind: 'method',
        statement: 'Instruction fetch transfers the current program counter into the address register during $T_0$, then reads the instruction into the instruction register while incrementing the PC during $T_1$.',
        detail: '$T_0: AR \\leftarrow PC$\\n$T_1: IR \\leftarrow M[AR], PC \\leftarrow PC + 1$\\nThis two-cycle sequence runs identically for every instruction in the machine.'
      },
      {
        term: 'The Decode phase (T2, T3)',
        kind: 'method',
        statement: 'During $T_2$, opcode bits $IR(12-14)$ are decoded by a $3 \\times 8$ decoder into $D_0 \\dots D_7$, address bits $IR(0-11)$ are transferred to $AR$, and mode bit $IR(15)$ is latched into flip-flop $I$.',
        detail: 'At $T_3$, if $D_7 = 0$ and $I = 1$ (indirect memory reference), control reads the effective address: $AR \\leftarrow M[AR]$. If $D_7 = 1$ and $I = 0$, a register-reference instruction executes at $T_3$.'
      },
      {
        term: 'Memory-Reference Instructions (MRI)',
        kind: 'definition',
        statement: 'Seven instructions ($D_0 \\dots D_6$) reference memory operands: **AND** ($D_0$: $AC \\leftarrow AC \\wedge DR$), **ADD** ($D_1$: $AC \\leftarrow AC + DR, E \\leftarrow C_{out}$), **LDA** ($D_2$: $AC \\leftarrow DR$), **STA** ($D_3$: $M[AR] \\leftarrow AC$), **BUN** ($D_4$: $PC \\leftarrow AR$), **BSA** ($D_5$: save return address and branch), and **ISZ** ($D_6$: increment and skip if zero).',
        detail: 'For AND, ADD, and LDA, timing cycle $T_4$ reads the operand into DR: $DR \\leftarrow M[AR]$; timing cycle $T_5$ performs the ALU transfer into AC and clears SC.'
      },
      {
        term: 'BSA: Branch and Save Return Address',
        kind: 'method',
        statement: 'BSA implements subroutine calls: it deposits the return address (PC) into the target memory location $M[AR]$, then sets PC to $AR + 1$.',
        detail: '$D_5 T_4: M[AR] \\leftarrow PC, AR \\leftarrow AR + 1$\\n$D_5 T_5: PC \\leftarrow AR, SC \\leftarrow 0$\\nThe subroutine returns by executing an indirect branch: \`BUN I sub_addr\`, which loads PC with the return address stored at the subroutine header.'
      },
      {
        term: 'Register-Reference Instructions',
        kind: 'definition',
        statement: 'When $D_7 I\\prime T_3 = 1$, the operation code is 111 with direct addressing; individual bits of $IR(0-11)$ designate non-memory operations such as CLA (clear AC), CMA (complement AC), INC (increment AC), and HLT (halt).',
        detail: 'Because each operation is recognized by a single bit in the 12-bit register code, multiple register microoperations (such as clearing AC and complementing AC) can theoretically execute simultaneously in a single clock cycle $T_3$.'
      }
    ],
    examples: [
      {
        title: 'Tracing the ISZ (Increment and Skip if Zero) Instruction',
        problem: 'Write the RTL sequence for ISZ (opcode D6) and explain how the program skips the next instruction when the incremented count reaches zero.',
        steps: [
          { label: 'T4: Fetch Count', text: 'D6 T4: DR <- M[AR] (load the stored memory variable into data register)' },
          { label: 'T5: Increment', text: 'D6 T5: DR <- DR + 1 (increment the word in DR)' },
          { label: 'T6: Store and Test', text: 'D6 T6: M[AR] <- DR, if (DR == 0) then (PC <- PC + 1), SC <- 0' }
        ],
        result: 'The updated counter is rewritten to memory; if DR == 0, PC increments an extra time, skipping the subsequent BUN loop branch.'
      },
      {
        title: 'Tracing BSA: Calling a Subroutine at 100',
        problem: 'The instruction BSA 100 (hex) sits at address 020 with PC = 021 after fetch. Trace the T4-T5 transfers and show how BUN I 100 returns.',
        steps: [
          { label: 'T4: Save and bump', text: 'D5 T4: M[AR] <- PC (store 021 at location 100), AR <- AR + 1 (AR becomes 101). The return address is preserved in the first word of the subroutine.' },
          { label: 'T5: Branch and reset', text: 'D5 T5: PC <- AR (PC becomes 101, the first real subroutine instruction), SC <- 0. Execution continues at 101, not at 021.' },
          { label: 'Return via indirect BUN', text: 'The subroutine ends with BUN I 100: at T4, AR <- M[100] (= 021); at T5, PC <- AR (= 021). Control resumes exactly after the BSA call site.' }
        ],
        result: 'BSA deposits PC at M[100] and jumps to 101; BUN I 100 reloads PC from M[100] — a two-word calling convention with no stack, using one reserved header word per subroutine.'
      }
    ],
    keyTakeaways: [
      'The fetch sequence T0-T1 and decode step T2 are identical for all instructions.',
      'T3 resolves indirect addressing (AR <- M[AR]) when I = 1 and D7 = 0.',
      'Memory-reference instructions fetch operands during T4 and execute ALU operations during T5.',
      'BSA saves the return address at M[AR] and jumps to AR + 1; BUN indirect returns from subroutines.'
    ],
    quiz: [
      {
        q: 'What register transfer occurs during timing cycle T1 of the fetch phase?',
        options: [
          'AR <- PC, SC <- 0',
          'IR <- M[AR], PC <- PC + 1',
          'AC <- AC + DR',
          'DR <- M[AR], AR <- AR + 1'
        ],
        answer: 1,
        explanation: 'At T1, the instruction word at M[AR] is latched into IR, and PC is simultaneously incremented to point to the next instruction.'
      },
      {
        q: 'How does the basic computer return from a subroutine invoked by a BSA instruction?',
        options: [
          'By executing a RET hardware pop instruction',
          'By executing BUN with indirect addressing pointing to the subroutine entry label',
          'By resetting the sequence counter to zero',
          'By loading the stack pointer into PC'
        ],
        answer: 1,
        explanation: 'BSA stores the return address in the first word of the subroutine. An indirect branch (BUN I label) reads that address and restores it into PC.'
      },
      {
        q: 'Which condition identifies a register-reference instruction in Mano\\’s architecture?',
        options: ['D7 = 0 and I = 1', 'D7 = 1 and I = 0', 'D0 = 1 and I = 0', 'D7 = 1 and I = 1'],
        answer: 1,
        explanation: 'Opcode 111 activates decoder output D7. When I = 0 (direct mode), the instruction is register-reference (r = D7 I\\prime T3).'
      },
      {
        q: 'During execution of the ISZ instruction, under what condition is the PC incremented an extra time?',
        options: ['If the memory value is negative', 'If the incremented DR value equals zero', 'If AC equals zero', 'If the carry flip-flop E is 1'],
        answer: 1,
        explanation: 'ISZ increments the memory word in DR; if the result is zero, PC <- PC + 1 skips the next instruction (typically skipping an unconditional branch back to loop start).'
      }
    ,
      // PYQ-pattern: GATE 2018 — fetch microoperations (rephrased)
      {
        q: "Which register transfers occur at $T_0$, $T_1$, $T_2$ of every fetch, and which rides free?",
        options: ["$T_0$: AR $\\leftarrow$ PC; $T_1$: IR $\\leftarrow$ M[AR] with PC $\\leftarrow$ PC $+ 1$ free; $T_2$: decode plus AR $\\leftarrow$ IR($0$–$11$)", "$T_0$: AC $\\leftarrow$ DR only", "$T_1$: halt", "$T_2$: output to peripheral"],
        answer: 0,
        explanation: "**Step 1 — Given data:** sequence counter states $T_0$.. with common bus plus dedicated PC incrementer.\n**Step 2 — Rule:** one bus transfer per state; dedicated paths ride free alongside a bus transfer.\n**Step 3 — Trace:** $T_0$ aims AR at PC; $T_1$ reads the word into IR while PC increments off-bus; $T_2$ decodes opcode into $D$ lines and aims AR at the address field.\n**Step 4 — Cross-check:** indirect adds $T_3$: AR $\\leftarrow$ M[AR]; direct skips it.\n**Step 5 — Distractors:** AC work belongs to execute; halt is HLT at $T_3$; peripheral transfer is input-output.\n**Step 6 — Conclude:** the three-step invariant fetch."
      },
      // PYQ-pattern: DRDO 2019 — LDA execute (rephrased)
      {
        q: "Direct LDA (load accumulator) executes which microoperations at $T_3$ and $T_4$?",
        options: ["$T_3$: DR $\\leftarrow$ M[AR]; $T_4$: AC $\\leftarrow$ DR with SC $\\leftarrow$ $0$", "$T_3$: halt", "$T_3$: AC $\\leftarrow$ AC $+ 1$", "$T_3$: output to OUTR"],
        answer: 0,
        explanation: "**Step 1 — Given data:** opcode LDA, direct ($I = 0$), operand already aimed by $T_2$.\n**Step 2 — Rule:** memory-reference executes read-then-load; SC $\\leftarrow$ $0$ returns to fetch.\n**Step 3 — Trace:** $T_3$ brings the word into DR; $T_4$ moves DR into AC and zeroes SC so next is $T_0$.\n**Step 4 — Cross-check:** ADD adds $T_4$: AC $\\leftarrow$ AC $+$ DR with carry to E; STA instead writes at $T_4$.\n**Step 5 — Distractors:** halt, increment and output belong to HLT, ISZ/INC and OUT instructions.\n**Step 6 — Conclude:** read then load, $5$ cycles with fetch."
      }
    ]
  },

  // ------------------------------------------------------------------ 11.3
  {
    sectionId: 'mano-ch11-s3',
    readingTime: 8,
    intro: 'A computer must communicate with external peripherals whose data rates are orders of magnitude slower than CPU clock cycles. Mano\\’s basic computer uses an input register (INPR), an output register (OUTR), and one-bit synchronizing flags (FGI and FGO) to handle character I/O. To avoid wasting millions of CPU cycles in busy-wait polling loops, the architecture incorporates an interrupt facility governed by flip-flop R and interrupt enable flag IEN. The interrupt cycle hardware intercepts instruction execution, preserves return state at memory address 0, and branches to an interrupt service routine at address 1.',
    objectives: [
      'Describe the asynchronous handshaking mechanism using FGI, FGO, INPR, and OUTR',
      'Detail the operation of the six input-output instructions (INP, OUT, SKI, SKO, ION, IOF)',
      'Explain why programmed polling wastes processor throughput compared to interrupt-driven I/O',
      'Trace the hardware interrupt cycle: setting R, saving PC at memory location 0, and jumping to 1',
      'Diagram the complete instruction cycle flowchart including the interrupt check state'
    ],
    concepts: [
      {
        term: 'Input/Output configuration and flags',
        kind: 'definition',
        statement: 'Input register **INPR** (8 bits) receives ASCII characters from an input device and sets flag **FGI** = 1. Output register **OUTR** (8 bits) holds characters for the output device; when ready, the printer sets **FGO** = 1.',
        detail: 'When the computer reads INPR into AC ($AC(0-7) \\leftarrow INPR$), control clears FGI = 0. When the computer writes AC into OUTR ($OUTR \\leftarrow AC(0-7)$), control clears FGO = 0.'
      },
      {
        term: 'Input-Output instructions',
        kind: 'method',
        statement: 'I/O instructions are recognized when $D_7 I T_3 = 1$ (opcode 111 with $I=1$). Individual bits of $IR$ select: **INP** (read character), **OUT** (print character), **SKI** (skip if FGI=1), **SKO** (skip if FGO=1), **ION** (IEN=1), and **IOF** (IEN=0).',
        detail: '\`SKI\` tests if input data is available by checking $FGI$; if $FGI = 1$, control increments $PC \\leftarrow PC + 1$, bypassing a jump instruction.'
      },
      {
        term: 'Programmed I/O vs Interrupts',
        kind: 'insight',
        statement: 'Programmed I/O requires a continuous polling loop: \`LOOP: SKI; BUN LOOP; INP\`. Because humans type at ~5 characters per second while the CPU executes millions of instructions per second, polling wastes over 99.9% of CPU capacity.',
        detail: 'An interrupt mechanism frees the CPU to perform other useful computations; the hardware notifies the CPU only when an external device is ready.'
      },
      {
        term: 'Interrupt flip-flops: IEN and R',
        kind: 'definition',
        statement: '**IEN** (Interrupt Enable) is a software-controlled flip-flop (set by ION, cleared by IOF). **R** is the hardware Interrupt flip-flop set to 1 when $IEN = 1$ and either $FGI = 1$ or $FGO = 1$ at the end of an instruction cycle.',
        detail: 'The boolean expression for triggering the interrupt cycle is $T_0\\prime T_1\\prime T_2\\prime (IEN)(FGI + FGO)$, which sets $R \\leftarrow 1$ instead of starting another fetch cycle.'
      },
      {
        term: 'The Interrupt cycle microoperations',
        kind: 'method',
        statement: 'When $R = 1$, the computer executes a three-step hardware sequence: saves the return address PC in memory word 0, clears IEN and R, and sets PC to 1.',
        detail: '$R T_0: AR \\leftarrow 0, TR \\leftarrow PC$\\n$R T_1: M[AR] \\leftarrow TR, PC \\leftarrow 0$\\n$R T_2: PC \\leftarrow PC + 1, IEN \\leftarrow 0, R \\leftarrow 0, SC \\leftarrow 0$\\nThe interrupt service routine starting at address 1 checks flags, processes the character, and terminates with \`BUN I 0\` to return to the interrupted program.'
      }
    ],
    examples: [
      {
        title: 'Interrupt Service Routine Flow and Return',
        problem: 'Show the assembly routine structure for servicing an input interrupt and returning to the main program.',
        steps: [
          { label: 'Location 0', text: 'Address 0: Reserved for return address (written by hardware during interrupt cycle).' },
          { label: 'Location 1', text: 'Address 1: Service routine entry point. Executes INP to read data and clear FGI.' },
          { label: 'Re-enable Interrupts', text: 'Executes ION to set IEN <- 1 for future interrupts.' },
          { label: 'Return Branch', text: 'Executes BUN I 0 (indirect branch through address 0) to resume the main program.' }
        ],
        result: 'The program resumes execution at the exact instruction that was interrupted, with no data loss.'
      },
      {
        title: 'Counting the Waste in a Polling Loop',
        problem: 'A 1 MHz CPU polls for keyboard input at 5 characters per second with the loop LOOP: SKI / BUN LOOP / INP. Estimate the fraction of CPU cycles wasted versus interrupt-driven I/O.',
        steps: [
          { label: 'Cost of one poll iteration', text: 'SKI executes every cycle (T3 check of FGI); while FGI = 0 the BUN loops back. Roughly 2 instruction cycles per iteration, each ~4 timing states at 1 us per state: about 8 us per poll.' },
          { label: 'Polls between keystrokes', text: 'At 5 chars/sec, keystrokes are 200 ms apart: 200 ms / 8 us = 25,000 polls burned waiting for one character, of which only the final INP does useful work.' },
          { label: 'Interrupt alternative', text: 'With IEN = 1, the CPU runs useful code for the full 200 ms; the hardware sets R only when FGI rises, stealing just the 3-state interrupt cycle plus the short ISR at address 1.' }
        ],
        result: 'Polling wastes roughly 24,999 of 25,000 iterations (>99.9%); interrupts convert the wait into useful computation — the quantitative case for R and IEN.'
      }
    ],
    keyTakeaways: [
      'FGI and FGO synchronize asynchronous character transfers between CPU and slow peripheral devices.',
      'Programmed I/O polls flags with SKI/SKO; interrupts eliminate polling overhead.',
      'When IEN=1 and a flag rises, hardware sets R=1, entering the interrupt cycle instead of fetch.',
      'The interrupt cycle stores the return address at memory location 0 and branches to location 1.'
    ],
    quiz: [
      {
        q: 'What is the function of the SKI instruction?',
        options: [
          'Skip the next instruction if the input flag FGI is 1',
          'Skip the next instruction if Accumulator is zero',
          'Stop keyboard input',
          'Set keyboard interrupt enable'
        ],
        answer: 0,
        explanation: 'SKI (Skip on Input Flag) tests FGI; if FGI = 1, it increments PC by 1, skipping the next branch instruction in a polling loop.'
      },
      {
        q: 'Where does the hardware interrupt cycle store the return address (PC) in Mano\\’s computer?',
        options: ['On top of a hardware stack', 'In memory location 0', 'In the Accumulator', 'In the TR register permanently'],
        answer: 1,
        explanation: 'Mano\\’s basic computer stores the return address in memory word 0 (M[0] <- PC) and sets PC to 1 to begin the interrupt handler.'
      },
      {
        q: 'Why does the hardware clear IEN to 0 during the interrupt cycle?',
        options: [
          'To prevent nested interrupts from corrupting the return address at location 0 before it can be handled',
          'To permanently disable external devices',
          'To reset the master clock frequency',
          'To clear all data in memory'
        ],
        answer: 0,
        explanation: 'Clearing IEN disables further interrupts, preventing a second interrupt from overwriting the return address stored at address 0 before the current handler finishes.'
      },
      {
        q: 'Which instruction returns control from the interrupt service routine back to the interrupted program?',
        options: ['RET', 'HLT', 'BUN I 0 (unconditional indirect branch through memory address 0)', 'ION'],
        answer: 2,
        explanation: 'Because address 0 holds the original PC value, an indirect branch BUN I 0 loads PC with M[0], returning cleanly to the interrupted program.'
      }
    ]
  }
]
