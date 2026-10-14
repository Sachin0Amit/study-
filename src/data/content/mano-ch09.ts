import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 9: Processor Logic Design (Sections 9.1 – 9.4 as mapped in library.ts)
// Master study content, written from canonical knowledge of the book (the PDF
// is a scan with no text layer). Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline. All backslashes doubled in TS strings.
// ============================================================================

export const manoCh9Content: SectionContent[] = [
  // ------------------------------------------------------------------ 9.1
  {
    sectionId: 'mano-ch9-s1',
    readingTime: 8,
    intro: 'Chapter 8 described registers and microoperations abstractly — statements such as AC ← AC + DR with no commitment to wires. This chapter builds the machinery that makes those statements real: a general processor unit in which a bank of registers feeds two selector multiplexers, an arithmetic logic unit, a shifter and a set of status flags, and in which every microoperation is nothing but a control word applied for one clock period. The design is exactly the one the basic computer of Chapter 11 will use.',
    objectives: [
      'Describe the organization of a general processor unit: registers, selectors, buses, ALU, shifter and flags',
      'Explain how a multiplexer selects the ALU’s two source registers and how a decoder selects the destination',
      'Define the control word and size each of its fields for a given register set',
      'Encode a specific microoperation as a binary control word',
      'Connect this hardware view to the system-level view of Operating System Concepts (OSC Ch 2)',
    ],
    concepts: [
      {
        term: 'Processor unit',
        kind: 'definition',
        statement: 'A **processor unit** is the collection of hardware that executes microoperations: a set of registers, two selector circuits that choose ALU operands, the arithmetic logic unit, a shifter, and status flags, all joined by buses and governed by control words.',
        detail: 'Mano draws this as the canonical block diagram: registers $R_1, R_2, \ldots, R_n$ across the top, a MUX A and a MUX B feeding the A and B inputs of the ALU, the shifter after the ALU output, and a destination decoder that enables exactly one register load. Every instruction a computer executes is ultimately a timed sequence of transfers through this one structure.',
      },
      {
        term: 'Register set',
        kind: 'definition',
        statement: 'The processor’s **register set** mixes general working registers with special-purpose ones: a **program counter (PC)** holding the next instruction address, an **address register (AR)** driving memory, a **data register (DR)** for operands, an **accumulator (AC)** for ALU results, an **instruction register (IR)**, and a **temporary register (TR)**.',
        detail: 'In the basic computer of Chapter 11 this set becomes exactly AC, IR, PC, AR, DR, TR, INPR and OUTR. The special registers exist because the fetch–decode–execute rhythm of Chapter 8 demands fixed places to hold the instruction, its address and its operand.',
      },
      {
        term: 'Source selectors',
        kind: 'method',
        statement: 'Two **multiplexers (MUX A and MUX B)** select which two registers drive the A and B buses into the ALU; their select codes are the SELA and SELB fields of the control word.',
        detail: 'With $k$ registers each selector needs $\\lceil \\log_2 k \\rceil$ select lines. Because the two selections are independent, the ALU can receive any register on the A side and any register on the B side in the same clock period — this is what makes microoperations such as AC ← AC + DR a single control word.',
      },
      {
        term: 'Destination decoder',
        kind: 'method',
        statement: 'The **destination decoder** converts the SELD field of the control word into one-hot load enable lines, so that exactly one register captures the ALU/shifter output at the next clock pulse.',
        detail: 'SELD is decoded rather than used literally because a register load is an enable signal, not a multiplexer address: the decoder produces $2^{d}$ enable lines from a $d$-bit field, and the unused codes either idle all registers or perform no transfer at all.',
      },
      {
        term: 'The control word',
        kind: 'notation',
        statement: 'A **control word** is the concatenation of the selection fields that specifies one microoperation: **SELA | SELB | SELD | OPR**, where OPR selects the ALU operation and the shifter function.',
        detail: 'For a processor with eight registers, SELA, SELB and SELD are three bits each; if the ALU has eight operations (three select lines $s_2 s_1 s_0$) and the shifter has three functions plus no-shift (two select lines), OPR is five bits, giving a 14-bit control word. Chapter 10 is entirely about generating sequences of these words.',
      },
      {
        term: 'Word length and datapath width',
        kind: 'insight',
        statement: 'An $n$-bit processor has $n$-bit registers, $n$-bit buses, an $n$-bit ALU and an $n$-bit shifter; the status flags are one bit each and are computed from the $n$-bit result.',
        detail: 'Width is a design constant: the basic computer uses $n = 16$ with a 16-bit AC and 16-bit memory words, while the arithmetic worked examples of this chapter use $n = 4$ purely so every bit can be seen. The logic of the two designs is identical.',
      },
      {
        term: 'Datapath and control: the great division',
        kind: 'insight',
        statement: 'A computer divides into a **datapath** (this chapter: registers, buses, ALU, shifter, flags) and a **control unit** (Chapter 10) that emits control words — the same division that operating systems inherit, with the OS seeing only the instruction set the two layers expose.',
        detail: 'Cross-link: OSC Ch 2 describes an operating system as software layered over hardware services; every process context it saves is precisely the register file and flags designed here, and every system call it dispatches is an instruction fetched through the datapath of Section 9.4. Mano Ch 8 defined the microoperations; this chapter realizes them in gates.',
      },
    ],
    examples: [
      {
        title: 'Sizing and encoding a control word',
        problem: 'A processor has registers AR, PC, DR, AC, IR and TR plus the 8-bit input register INPR. The ALU performs eight operations (transfer, add, add-complement, increment, AND, OR, XOR, complement) and the shifter performs no-shift, shift-right or shift-left. Determine the control word length and encode AC ← AC + DR.',
        steps: [
          { label: 'Step 1: Size the selection fields', text: 'There are seven registers (INPR counts as one source), so each of SELA, SELB and SELD needs $\\lceil \\log_2 7 \\rceil = 3$ bits — eight codes with one to spare.' },
          { label: 'Step 2: Size the operation field', text: 'Eight ALU operations require three select lines $s_2 s_1 s_0$, and the shifter needs two more lines (00 no shift, 01 shift right, 10 shift left), so OPR is five bits.' },
          { label: 'Step 3: Concatenate', text: 'The control word is SELA (3) + SELB (3) + SELD (3) + OPR (5) = **14 bits**, the same size Mano uses for the eight-register processor of his example.' },
          { label: 'Step 4: Assign register codes', text: 'Choose AR = 000, PC = 001, DR = 010, AC = 011, IR = 100, TR = 101, INPR = 110 (111 spare).' },
          { label: 'Step 5: Encode the microoperation', text: 'For AC ← AC + DR: SELA = AC = 011, SELB = DR = 010, SELD = AC = 011, OPR = 00100 (add, no shift). The word is 011 010 011 00100.' },
        ],
        result: 'A 14-bit control word, and AC ← AC + DR is the single word 01101001100100. The control unit of Chapter 10 does nothing but emit sequences of such words, one per clock period.',
      },
      {
        title: 'Following a microoperation through the datapath',
        problem: 'Trace the composite microoperation AC ← sl AC + DR (add, then shift the sum left into AC) through the processor organization, with AC = 0110 and DR = 0011.',
        steps: [
          { label: 'Step 1: Source selection', text: 'MUX A places AC = 0110 on the A bus (SELA = 011) and MUX B places DR = 0011 on the B bus (SELB = 010). Both buses carry their words simultaneously.' },
          { label: 'Step 2: ALU operation', text: 'With OPR selecting addition, the ALU — a combinational network of full adders — forms $0110 + 0011 = 1001$ during this clock period.' },
          { label: 'Step 3: Shifter action', text: 'The shifter follows the ALU: shift-left moves every bit one position toward the more significant end, so 1001 becomes 0010, with the outgoing most significant bit 1 discarded (a full design can capture it in the carry flag instead).' },
          { label: 'Step 4: Destination load and flags', text: 'The destination decoder (SELD = 011 for AC) raises AC’s load line; at the next clock pulse AC takes 0010 and the status flags latch the ALU’s condition bits for the addition (carry 1 from $6 + 3 = 9$ in 4 bits, nonzero, positive).' },
        ],
        result: 'The microoperation completes in one clock period through selection, addition, shifting and load — the pipeline structure every instruction of Chapter 11 will reuse.',
      },
    ],
    keyTakeaways: [
      'A processor unit is registers + two source multiplexers + ALU + shifter + destination decoder + status flags.',
      'SELA and SELB select the ALU’s two operands; SELD is decoded to enable exactly one destination register load.',
      'The control word SELA | SELB | SELD | OPR completely specifies one microoperation — 14 bits for the eight-register example.',
      'Each selection field needs $\\lceil \\log_2 k \\rceil$ bits for $k$ registers.',
      'The shifter sits after the ALU, so composite microoperations such as AC ← sl AC + DR are single control words.',
      'This chapter is the hardware realization of Chapter 8’s register-transfer language, and the layer an OS (OSC Ch 2) ultimately rides on.',
    ],
    quiz: [
      {
        q: 'A processor has 16 registers. How many bits do SELA, SELB and SELD each need?',
        options: ['4 bits each, since $\\lceil \\log_2 16 \\rceil = 4$', '3 bits each, one per operand bus', '16 bits each, one per register', '8 bits each, one per byte of the word'],
        answer: 0,
        explanation: 'Selecting one of $k$ registers requires $\\lceil \\log_2 k \\rceil$ lines; for 16 registers that is 4 bits for each of the three fields.',
      },
      {
        q: 'What does the SELD field of the control word do after decoding?',
        options: ['It selects the ALU operation', 'It raises the load-enable line of exactly one destination register', 'It drives the address bus to memory', 'It sets the status flags'],
        answer: 1,
        explanation: 'SELD goes through a decoder whose one-hot output enables a single register load, so the ALU/shifter result lands in exactly the intended register.',
      },
      {
        q: 'Why does the processor organization use two separate source multiplexers (MUX A and MUX B) rather than one?',
        options: ['To halve the clock frequency', 'Because the ALU takes two operands, and the two selections must be independent so operations like AC ← AC + DR fit in one control word', 'Because registers have two outputs each', 'To provide redundancy against multiplexer failure'],
        answer: 1,
        explanation: 'A two-operand ALU needs two simultaneously selected sources; independent SELA and SELB codes let any register pair meet at the ALU in a single clock period.',
      },
      {
        q: 'In the worked 14-bit control word, what does the OPR field contain?',
        options: ['Only the destination register code', 'The ALU operation select bits plus the shifter select bits', 'The memory read/write lines', 'The instruction opcode'],
        answer: 1,
        explanation: 'OPR is the operation field: three bits $s_2 s_1 s_0$ for the eight ALU microoperations and two bits for the shifter (no-shift, right, left).',
      },
      {
        q: 'Which statement best connects this chapter’s processor to OSC Ch 2’s operating-system structures?',
        options: ['The OS replaces the ALU with software', 'The register file and flags designed here are exactly the per-process context an OS saves and restores, and the ISA the OS targets is the interface this datapath exposes', 'The control word is stored in the file system', 'Multiplexers are managed by the OS scheduler'],
        answer: 1,
        explanation: 'The OS never sees gates — it sees the instruction set. But every process context is the register set of this chapter, and every context switch is a save/restore of these registers driven by the datapath of Section 9.4.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.2
  {
    sectionId: 'mano-ch9-s2',
    readingTime: 10,
    intro: 'The arithmetic logic unit is where microoperations become arithmetic. Mano’s method is beautiful because it reuses one structure three times: an arithmetic circuit is just a chain of full adders whose per-stage inputs are made functions of the selection lines; a logic circuit is a per-bit selector among AND, OR, XOR and complement; and the combined ALU is both, sharing the selection code so that three lines choose among eight microoperations.',
    objectives: [
      'Design a 4-bit arithmetic circuit from full adders with two selection lines',
      'Derive the per-stage input equations $x_i$, $y_i$ and the initial carry from the desired microoperation table',
      'Verify arithmetic selections with concrete binary numbers',
      'Design the logic circuit for AND, OR, XOR and complement microoperations',
      'Present the combined 8-microoperation ALU table and its selection encoding',
    ],
    concepts: [
      {
        term: 'Arithmetic circuit',
        kind: 'definition',
        statement: 'An **arithmetic circuit** is a cascade of full adders whose stage inputs $x_i$ and $y_i$ and initial carry $c_1$ are Boolean functions of the operands $A_i$, $B_i$ and the selection lines, so that one wiring performs several arithmetic microoperations.',
        detail: 'Each stage computes the sum bit $F_i = x_i \\oplus y_i \\oplus c_i$ and carry $c_{i+1} = x_i y_i + x_i c_i + y_i c_i$ exactly as in Chapter 4’s adders; the design freedom lies entirely in what $x_i$, $y_i$ and $c_1$ are wired to be. The carries ripple between stages exactly as in the ripple-carry adder of Chapter 4.',
      },
      {
        term: 'The selection design table',
        kind: 'method',
        statement: 'To design the arithmetic circuit, first tabulate what each selection must add to $A$: with select $s_1 s_0$ equal to 00, 01, 10 and 11 the circuit performs transfer ($F = A$), addition ($F = A + B$), add-complement ($F = A + \\bar{B}$) and increment ($F = A + 1$).',
        detail: 'Reading the table as full-adder inputs: 00 needs $y = 0$ and $c_1 = 0$; 01 needs $y = B$, $c_1 = 0$; 10 needs $y = \\bar{B}$, $c_1 = 0$; and 11 needs $y = 0$ with the single 1 injected as the initial carry $c_1 = 1$. Tabulating $y_i$ over the $s_1 s_0$ cells of a Karnaugh map gives the two-product expression below.',
      },
      {
        term: 'Per-stage input equations',
        kind: 'notation',
        statement: 'The arithmetic circuit design yields $x_i = A_i$, $y_i = \\bar{s}_1 s_0 B_i + s_1 \\bar{s}_0 \\bar{B}_i$ and initial carry $c_1 = s_1 s_0$.',
        detail: 'Check each selection: 00 gives $y_i = 0$, $c_1 = 0$ (transfer); 01 gives $y_i = B_i$ (add); 10 gives $y_i = \\bar{B}_i$ (add the complement); 11 gives $y_i = 0$ but $c_1 = 1$ (increment). Every row of the design table is satisfied by one small gate network per stage.',
      },
      {
        term: 'Two’s-complement subtraction',
        kind: 'law',
        statement: 'Subtraction reuses the adder because $A - B = A + \\bar{B} + 1$: complementing every bit of $B$ and injecting a carry of 1 into the least significant stage forms the two’s complement.',
        detail: 'This is why selection 10 (add-complement) plus an incoming carry of 1 is true subtraction — the trick used by the basic computer and by every two’s-complement machine since. No separate subtractor circuit is ever built.',
      },
      {
        term: 'Logic circuit',
        kind: 'method',
        statement: 'The **logic circuit** performs bitwise Boolean microoperations: per stage it selects among $A_i \\wedge B_i$ (AND), $A_i \\vee B_i$ (OR), $A_i \\oplus B_i$ (XOR) and $\\bar{A}_i$ (complement) under the same two selection lines.',
        detail: 'Each stage is essentially a small multiplexer over the four functions of $A_i$ and $B_i$. Because the operations are bitwise, there are no carries at all in logic mode — the design simply gates the carry chain off.',
      },
      {
        term: 'The combined ALU',
        kind: 'method',
        statement: 'One structure with three selection lines $s_2 s_1 s_0$ performs eight microoperations: $s_2 = 0$ gives the arithmetic set (transfer, add, add-complement, increment) and $s_2 = 1$ gives the logic set (AND, OR, XOR, complement).',
        detail: 'The arithmetic network of full adders handles the $s_2 = 0$ codes; the per-bit logic network handles $s_2 = 1$; the mode bit $s_2$ steers the stage output between them (and disables the carry chain in logic mode). Add the shifter of Section 9.3 after the output and the result is the complete ALU of a processor.',
      },
      {
        term: 'Speed: the carry chain',
        kind: 'insight',
        statement: 'In a ripple arithmetic circuit the worst-case delay grows with the word length because the carry must propagate through every stage; the remedy is the **carry-lookahead** logic of Chapter 4, which real ALU chips use.',
        detail: 'Mano’s designs keep the ripple cascade for clarity — the per-stage selection logic is the lesson — but the same $x_i$, $y_i$, $c_1$ equations plug directly into a lookahead adder when speed matters.',
      },
    ],
    examples: [
      {
        title: 'Designing the arithmetic circuit selection with $s_1 s_0$',
        problem: 'Design a 4-bit arithmetic circuit that performs transfer, addition, add-complement and increment on inputs $A$ and $B$, and verify every selection with $A = 0110$ and $B = 0011$.',
        steps: [
          { label: 'Step 1: Write the microoperation table', text: 'Select $s_1 s_0$: 00 → $F = A$; 01 → $F = A + B$; 10 → $F = A + \\bar{B}$; 11 → $F = A + 1$. These cover the register-transfer needs of the processor (move data, add, set up subtraction, count).' },
          { label: 'Step 2: Translate to full-adder inputs', text: 'Each selection must express $F = A + y + c_1$ for some per-stage bit-pattern $y$ and initial carry $c_1$: 00 → $y = 0$, $c_1 = 0$; 01 → $y = B$, $c_1 = 0$; 10 → $y = \\bar{B}$, $c_1 = 0$; 11 → $y = 0$, $c_1 = 1$.' },
          { label: 'Step 3: Simplify with a Karnaugh map', text: 'Plotting $y_i$ over the four $s_1 s_0$ cells gives $y_i = \\bar{s}_1 s_0 B_i + s_1 \\bar{s}_0 \\bar{B}_i$; the initial carry is $c_1 = s_1 s_0$ because only increment injects a 1 into the least significant stage.' },
          { label: 'Step 4: Wire one stage', text: 'Stage $i$ receives $x_i = A_i$ directly, one AND–OR network computes $y_i$ from $B_i$, $s_1$, $s_0$, and the stages chain carry to carry exactly like Chapter 4’s adder.' },
          { label: 'Step 5: Verify selection 01 (add)', text: 'With $A = 0110$ (6) and $B = 0011$ (3): $y = 0011$, $c_1 = 0$, so $F = 6 + 3 = 9 = 1001$. ✓' },
          { label: 'Step 6: Verify the remaining selections', text: '00: $F = 0110$ (transfer ✓). 10: $y = 1100$, so $F = 6 + 12 = 18 = 10010$, i.e. 0010 with a carry out (add-complement ✓). 11: $y = 0000$, $c_1 = 1$, so $F = 6 + 1 = 0111$ (increment ✓).' },
        ],
        result: 'One cascade of full adders plus a handful of gates per stage implements four arithmetic microoperations — and feeding an incoming carry of 1 turns selection 10 into true subtraction: $6 + 12 + 1 = 19 = 10011$, so $F = 0011 = 3 = 6 - 3$. ✓',
      },
      {
        title: 'The logic circuit: AND, OR, XOR, complement',
        problem: 'Design the per-stage logic selection for the four Boolean microoperations and verify them with $A = 1010$ and $B = 0110$.',
        steps: [
          { label: 'Step 1: Tabulate the bitwise functions', text: 'Select $s_1 s_0$: 00 → $F = A \\wedge B$; 01 → $F = A \\vee B$; 10 → $F = A \\oplus B$; 11 → $F = \\bar{A}$. Each is a function of the two stage bits only — no carries exist in logic mode.' },
          { label: 'Step 2: Build one stage', text: 'Per stage, small gate networks form $A_i B_i$, $A_i + B_i$, $A_i \\oplus B_i$ and $\\bar{A}_i$, and a selection network (effectively a 4-to-1 multiplexer on $s_1 s_0$) passes the chosen function to $F_i$.' },
          { label: 'Step 3: Verify AND ($s_1 s_0 = 00$)', text: '$1010 \\wedge 0110 = 0010$ ✓ — only the bit position where both words carry a 1 survives.' },
          { label: 'Step 4: Verify OR, XOR, complement', text: 'OR: $1010 \\vee 0110 = 1110$ ✓. XOR: $1010 \\oplus 0110 = 1100$ ✓ (the bits that differ). Complement: $\\bar{A} = 0101$ ✓.' },
        ],
        result: 'Four logic microoperations per bit with two selection lines; chained across all stages they operate on whole words at once, which is why mask and test operations in the basic computer are single instructions.',
      },
      {
        title: 'The combined ALU microoperation table',
        problem: 'Assemble the arithmetic and logic selections into one ALU with three selection lines $s_2 s_1 s_0$ and run two selections numerically.',
        steps: [
          { label: 'Step 1: Assign the arithmetic block', text: '$s_2 = 0$: 000 → transfer $F = A$; 001 → add $F = A + B$; 010 → add-complement $F = A + \\bar{B}$; 011 → increment $F = A + 1$.' },
          { label: 'Step 2: Assign the logic block', text: '$s_2 = 1$: 100 → AND $F = A \\wedge B$; 101 → OR $F = A \\vee B$; 110 → XOR $F = A \\oplus B$; 111 → complement $F = \\bar{A}$.' },
          { label: 'Step 3: Combine the hardware', text: 'The mode bit $s_2$ selects between the full-adder path and the logic path per stage and suppresses the carry chain in logic mode — one shared output bus, one set of stage pins.' },
          { label: 'Step 4: Verify one arithmetic and one logic selection', text: 'With $A = 1010$, $B = 0110$: select 001 gives $F = 1010 + 0110 = 10000$, i.e. 0000 with carry 1 ($10 + 6 = 16$ ✓). Select 101 gives $F = 1110$ (OR ✓).' },
        ],
        result: 'Three selection lines, eight microoperations — this table is the OPR field of Section 9.1’s control word, and it is the very instruction repertoire the basic computer applies to AC and DR.',
      },
    ],
    keyTakeaways: [
      'An arithmetic circuit is a full-adder cascade whose stage inputs are functions of the selection lines: $x_i = A_i$, $y_i = \\bar{s}_1 s_0 B_i + s_1 \\bar{s}_0 \\bar{B}_i$, $c_1 = s_1 s_0$.',
      'The four arithmetic selections are transfer, add, add-complement and increment; an incoming carry converts add-complement into subtraction via $A - B = A + \\bar{B} + 1$.',
      'The logic circuit selects AND, OR, XOR or complement per bit with the same two selection lines and no carries.',
      'The combined ALU uses $s_2$ as a mode bit: eight microoperations under three selection lines $s_2 s_1 s_0$.',
      'The OPR field of the processor control word drives exactly these selection lines.',
      'Ripple carry limits speed; the Chapter 4 lookahead technique applies unchanged.',
    ],
    quiz: [
      {
        q: 'In the arithmetic circuit design, what does selection $s_1 s_0 = 11$ compute?',
        options: [`$F = A + B$`, `$F = A + 1$, because $y_i = 0$ and the initial carry $c_1 = 1$`, `$F = A - B$`, `$F = \\bar{A}$`],
        answer: 1,
        explanation: 'With both selection lines high, the per-stage $y$ network output is 0 but $c_1 = s_1 s_0 = 1$, so exactly one 1 is injected at the least significant stage: $F = A + 1$.',
      },
      {
        q: 'How is true subtraction obtained from the add-complement selection?',
        options: ['By complementing $A$ instead of $B$', 'By injecting an incoming carry of 1, giving $A + \\bar{B} + 1 = A - B$', 'By shifting the result right', 'By setting the mode bit $s_2 = 1$'],
        answer: 1,
        explanation: 'Two’s complement guarantees $-B = \\bar{B} + 1$, so add-complement plus a forced initial carry performs subtraction with no extra hardware.',
      },
      {
        q: 'With $A = 0110$ and $B = 0011$, the add-complement selection produces:',
        options: ['0010 (because $6 + 12 = 18$ truncated to 4 bits)', '1001, the sum', '0111, the increment', '0011, the difference'],
        answer: 0,
        explanation: 'Selection 10 forms $A + \\bar{B} = 0110 + 1100 = 10010$; the 4-bit result is 0010 with carry out 1. Add the incoming carry and you get 0011, the true difference $6 - 3$.',
      },
      {
        q: 'What distinguishes logic mode from arithmetic mode in the combined ALU?',
        options: ['Logic mode uses fewer bits', 'Logic mode is bitwise with the carry chain disabled, while arithmetic mode ripples carries between stages', 'Logic mode requires two clock periods', 'Logic mode writes to memory'],
        answer: 1,
        explanation: 'AND, OR, XOR and complement act independently on each bit, so no carry propagates; the mode bit $s_2$ both steers the stage output and gates off the carry chain.',
      },
      {
        q: 'How many selection lines does the combined ALU of this section need, and what do they choose among?',
        options: ['2 lines among 4 arithmetic operations only', '3 lines among 8 microoperations: four arithmetic and four logic', '5 lines among shifter functions', '1 line between add and subtract'],
        answer: 1,
        explanation: '$s_2 s_1 s_0$: with $s_2 = 0$ the full-adder cascade performs transfer, add, add-complement, increment; with $s_2 = 1$ the logic network performs AND, OR, XOR, complement.',
      },
    
      // PYQ-pattern: GATE 2019 — ALU selection lines (rephrased)
      {
        q: "With selection $S_2S_1S_0$, how does the arithmetic circuit choose among its eight microoperations?",
        options: ["$S$ lines halt the machine", "$S$ lines drive the clock", "$S$ lines choose the memory chip", "$S$ lines feed the per-stage full adders’ input functions, picking transfer, increment, add, subtract and related forms"],
        answer: 3,
        explanation: "**Step 1 — Given data:** chain of full adders with per-stage $X_i, Y_i$ made functions of $A_i, B_i$ and $S$.\n**Step 2 — Rule:** three lines encode eight operations (e.g. $F = A$, $F = A + 1$, $F = A + B$, $F = A + B′ + 1$ for subtract, plus complements and transfers).\n**Step 3 — Apply:** setting $S$ rewires every stage identically, so one code adds across all bits while another subtracts.\n**Step 4 — Cross-check:** the logic section reuses the same $S$ idea with a per-bit selector among AND, OR, XOR, complement — one code space, two circuits.\n**Step 5 — Distractors:** clock, memory choice and halt are control-unit jobs, not ALU data selection.\n**Step 6 — Conclude:** $S$ programs the adder inputs."
      },
      // PYQ-pattern: DRDO 2018 — status flags (rephrased)
      {
        q: "After an ALU operation yielding all-zero result with a carry out of the MSB, which flags are set?",
        options: ["Zero $= 1$, carry $= 1$; overflow depends on signed interpretation", "Zero $= 0$, carry $= 0$", "Only sign is set", "No flag changes"],
        answer: 0,
        explanation: "**Step 1 — Given data:** $n$-bit result zero, end carry $1$.\n**Step 2 — Rule:** zero flag $= 1$ iff every result bit $0$; carry $=$ out of MSB; overflow $= C_{n-1} \\oplus C_n$; sign $=$ MSB.\n**Step 3 — Apply:** zero $1$, carry $1$; e.g. $1111 + 0001 = 0000$ with carry $1$ sets both.\n**Step 4 — Cross-check:** overflow here is $0$ for that unsigned wrap (both carries $1$); sign $0$ since result MSB $0$.\n**Step 5 — Distractors:** clearing both ignores the observed zero and carry; sign-only misses them; no-change contradicts flag logic.\n**Step 6 — Conclude:** zero and carry set."
      }
    ],
  },

  // ------------------------------------------------------------------ 9.3
  {
    sectionId: 'mano-ch9-s3',
    readingTime: 9,
    intro: 'Two small blocks complete the processor: the shifter, a combinational network that sits between the ALU output and the destination bus, and the status flags — carry, overflow, zero and sign — which remember one bit of information about the last result and are the raw material of every conditional branch a computer ever takes.',
    objectives: [
      'Design a combinational shifter with right/left/none selection',
      'Trace concrete shift microoperations on 4-bit data',
      'Define each status flag C, V, Z, S and state when it is set',
      'Compute overflow with the XOR-of-carries rule $V = C_8 \\oplus C_7$ on worked 8-bit additions',
      'Distinguish carry (unsigned overflow) from overflow (signed overflow)',
    ],
    concepts: [
      {
        term: 'Combinational shifter',
        kind: 'definition',
        statement: 'The **shifter** is a combinational network between the ALU output and the destination bus: with select lines it passes the word unchanged, shifts it one position right, or shifts it one position left — all in the same clock period as the ALU operation.',
        detail: 'Because it is purely gates (no flip-flops), the shifter is drawn inside the processor’s combinational path, after the ALU. Its select bits occupy the last two bits of the OPR field of the control word.',
      },
      {
        term: 'Shift-right and shift-left wiring',
        kind: 'method',
        statement: 'Shift-right connects each output bit to its left neighbor ($F_i = A_{i+1}$, serial 0 into the most significant position); shift-left connects each output bit to its right neighbor ($F_i = A_{i-1}$, serial 0 into the least significant position); the end bits are simply discarded.',
        detail: 'These are logical shifts — the incoming serial bit is always 0. Shifting left multiplies the unsigned value by 2 (losing the top bit if it was 1), and shifting right divides by 2 — which is why multiply-by-2 loops in the basic computer are written with the CIL circulate instruction instead, so the shifted-out bit survives in E.',
      },
      {
        term: 'The shift selection encoding',
        kind: 'notation',
        statement: 'The two shifter select bits encode: **00 no shift, 01 shift right, 10 shift left** (11 unused or no-transfer), appended to the ALU select bits inside the 5-bit OPR field.',
        detail: 'A microoperation such as AC ← sr AC is therefore the control word with SELA = SELD = AC and OPR = transfer + shift-right — proof that shifting is just another transfer through a slightly different combinational path.',
      },
      {
        term: 'Barrel shifter',
        kind: 'insight',
        statement: 'A **barrel shifter** uses per-bit multiplexers to shift by any amount from 0 to $n - 1$ positions in a single pass, instead of one position per microoperation.',
        detail: 'Mano’s processor shifts one bit at a time because each microoperation takes one clock period; LSI microprocessors of Chapter 12 embed barrel shifters so that a single instruction can scale by any power of two. The trade is gates versus time — the classic hardware–software equivalence again.',
      },
      {
        term: 'Status flags',
        kind: 'definition',
        statement: 'The **status flags** are flip-flops latched together with the ALU result: **C** (carry out of the most significant stage), **V** (signed overflow), **Z** (result is all zeros) and **S** (sign — the most significant bit of the result).',
        detail: 'The flags belong to the ALU: whenever a destination register is loaded from the ALU output, the same clock edge stores the four condition bits. Every skip and branch instruction of the basic computer — SPA, SNA, SZA, SZE, and the ISZ loop test — reads exactly these flip-flops.',
      },
      {
        term: 'Carry versus overflow',
        kind: 'law',
        statement: '**C** signals that the unsigned interpretation went out of range; **V** signals that the signed two’s-complement interpretation went out of range. They are independent: either can be set without the other.',
        detail: 'A carry out of the top stage is normal and expected in two’s-complement arithmetic (for example $-1 + 1$ produces one), whereas V = 1 means the result has the wrong sign and is genuinely wrong as a signed number. Programs that treat data as unsigned test C; programs that treat data as signed test V.',
      },
      {
        term: 'The XOR-of-carries overflow rule',
        kind: 'notation',
        statement: 'For an 8-bit ALU, overflow is computed directly from the carry chain: $V = C_8 \\oplus C_7$ — the carry **into** the most significant stage XOR the carry **out of** it.',
        detail: 'If the carry into the sign bit differs from the carry leaving it, the sign bit was corrupted by carry propagation — exactly the definition of two’s-complement overflow. Hardware cost: one XOR gate, no matter how wide the ALU.',
      },
    ],
    examples: [
      {
        title: 'A 4-bit shifter worked in all three modes',
        problem: 'Show the shifter’s output for the word $A = 1011$ under no-shift, shift-right and shift-left, and note what happens to the end bits.',
        steps: [
          { label: 'Step 1: No shift', text: 'Select 00 passes the word through combinationally: $F = 1011$. This is the ordinary path for non-shift microoperations.' },
          { label: 'Step 2: Shift right', text: 'Select 01 wires $F_i = A_{i+1}$ with a serial 0 entering the most significant position: $F = 0101$. The original least significant bit 1 falls off the right end and is lost (the basic computer would use CIR instead to keep it in E).' },
          { label: 'Step 3: Shift left', text: 'Select 10 wires $F_i = A_{i-1}$ with a serial 0 entering the least significant position: $F = 0110$. The most significant bit 1 falls off the left end — unsigned arithmetic would say $11 \\times 2 = 22 > 15$ does not fit in 4 bits.' },
          { label: 'Step 4: Read the control word view', text: 'Each case is one control word: same SELA/SELD, OPR = transfer plus the two shift bits — shifting is a transfer through a rotated wiring pattern, costing no extra clock period.' },
        ],
        result: 'No shift: 1011; sr: 0101 (bit lost on the right); sl: 0110 (bit lost on the left) — the serial input is 0 and the end bits are discarded.',
      },
      {
        title: 'Setting every flag, including $V = C_8 \\oplus C_7$',
        problem: 'For each 8-bit addition, compute C, V, Z and S. (a) $01111111 + 00000001$; (b) $11111111 + 00000001$; (c) $10000000 + 10000000$.',
        steps: [
          { label: 'Step 1: Case (a) — add 1 to 127', text: 'The carries ripple up through the low seven 1-bits: the carry into the most significant stage is $C_7 = 1$, and the top stage computes $0 + 0 + 1 = 1$ with carry out $C_8 = 0$. Result $10000000$: S = 1, Z = 0.' },
          { label: 'Step 2: Case (a) overflow', text: '$V = C_8 \\oplus C_7 = 0 \\oplus 1 = 1$ — signed overflow, as expected: $127 + 1 = -128$ is out of the signed range $-128$ to $127$. Yet C = 0, because as unsigned arithmetic $127 + 1 = 128$ fits comfortably in 8 bits.' },
          { label: 'Step 3: Case (b) — add 1 to −1', text: '$11111111 + 00000001 = 1\\,00000000$: every stage carries, so $C_7 = 1$ and $C_8 = 1$, result $00000000$ with Z = 1, S = 0.' },
          { label: 'Step 4: Case (b) flags', text: '$V = 1 \\oplus 1 = 0$ — perfectly correct signed arithmetic, $-1 + 1 = 0$. The carry C = 1 is simply the discarded weight $2^8$ and is harmless in two’s complement.' },
          { label: 'Step 5: Case (c) — add −128 to −128', text: '$10000000 + 10000000 = 1\\,00000000$: the low seven stages see $0 + 0$, so the carry into the top stage is $C_7 = 0$, while the top stage’s $1 + 1$ produces $C_8 = 1$. Result $00000000$, Z = 1, S = 0.' },
          { label: 'Step 6: Case (c) overflow', text: '$V = 0 \\oplus 1 = 1$ — signed overflow again: $-128 + -128 = -256$ is far outside range, and C = 1 also flags that unsigned $128 + 128 = 256$ does not fit either.' },
        ],
        result: 'The three cases prove the independence of C and V: (a) V without C, (b) C without V, (c) both. One XOR gate comparing $C_7$ and $C_8$ computes V for every addition the ALU will ever perform.',
      },
    ],
    keyTakeaways: [
      'The shifter is combinational, sits after the ALU, and offers no-shift, shift-right and shift-left under two select bits inside OPR.',
      'Shift-right reads $F_i = A_{i+1}$, shift-left reads $F_i = A_{i-1}$; the serial input is 0 and end bits are discarded.',
      'Left shift doubles, right shift halves unsigned values; the circulate instructions of Chapter 11 keep the end bit in E.',
      'Flags C, V, Z, S latch with the ALU result and drive every conditional branch.',
      'C means unsigned overflow; V means signed overflow; they are independent of each other.',
      '$V = C_8 \\oplus C_7$ (carry into XOR carry out of the sign stage) detects signed overflow with a single gate.',
    ],
    quiz: [
      {
        q: 'What does the 4-bit shifter produce for $A = 1011$ under shift-right with serial input 0?',
        options: ['1101', '0101, with the old least significant bit discarded', '0110', '1011'],
        answer: 1,
        explanation: 'Shift-right moves every bit toward the less significant end, a 0 enters the most significant position, and the least significant 1 is lost: $1011 \\to 0101$.',
      },
      {
        q: 'Why does the ALU compute overflow as $V = C_8 \\oplus C_7$ rather than just using the carry C?',
        options: ['Because XOR gates are cheaper', 'Because a carry into the sign stage that does not exit (or vice versa) is exactly what corrupts the sign bit in two’s-complement arithmetic', 'Because C is used for the Z flag', 'Because $C_7$ stores the sign'],
        answer: 1,
        explanation: 'If the carry entering the sign bit differs from the one leaving it, the sign bit’s value was determined by a lost carry — the definition of signed overflow. C alone says nothing about sign correctness.',
      },
      {
        q: 'Adding $11111111 + 00000001$ in 8 bits gives result 00000000 with which flags?',
        options: ['C = 1, V = 1, Z = 1', 'C = 1, V = 0, Z = 1 — correct signed arithmetic with a harmless carry', 'C = 0, V = 0, Z = 1', 'C = 1, V = 1, Z = 0'],
        answer: 1,
        explanation: 'Both carries are 1, so $V = 1 \\oplus 1 = 0$; the sum $-1 + 1 = 0$ sets Z = 1 and the carry out C = 1 is simply the discarded $2^8$ weight.',
      },
      {
        q: 'Which flag would an unsigned comparison loop test after an addition, and why?',
        options: ['V, because unsigned numbers are signed in disguise', 'C, because a carry out of the most significant bit means the unsigned result exceeded the word range', 'S, because it holds the top bit', 'Z, because zero is the only interesting result'],
        answer: 1,
        explanation: 'For unsigned interpretation the word is the value; a carry out means the true sum did not fit, so C is the unsigned overflow signal. V plays the same role for signed data.',
      },
      {
        q: 'How do the shifter’s select bits reach the hardware?',
        options: ['Through the address bus', 'They are the last two bits of the OPR field of the processor control word', 'They are stored in memory before each shift', 'They are generated only by the shifter itself'],
        answer: 1,
        explanation: 'The control word’s OPR field carries the three ALU select bits plus two shifter select bits, so a shifted microoperation is one 5-bit operation code inside the control word.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.4
  {
    sectionId: 'mano-ch9-s4',
    readingTime: 9,
    intro: 'Now the pieces act together. An instruction is a scripted sequence of control words that walks data through the datapath: the program counter to the address register to memory, the fetched word into the instruction register, the decoder’s output into the address register again, the operand into the data register, and finally the ALU and accumulator. This section traces one instruction through every register and bus.',
    objectives: [
      'State the fetch microoperations that load IR and increment PC',
      'Trace a complete memory-reference instruction through PC, AR, memory, IR, decoder, DR, ALU and AC',
      'Write the control word executed at each timing step of the trace',
      'Extend the trace to indirect addressing, where one extra memory read produces the effective address',
      'Explain why one common bus forces instructions into multiple timing steps',
    ],
    concepts: [
      {
        term: 'The instruction execution datapath',
        kind: 'definition',
        statement: 'The **datapath** is the fixed wiring of registers, buses, ALU and shifter through which every instruction’s microoperations flow; only the sequence of control words differs from one instruction to the next.',
        detail: 'This is the central economy of computer design: one datapath, many programs. The fetch hardware is identical for all instructions; execution paths diverge only after the decoder recognizes the opcode and the control unit begins emitting instruction-specific control words.',
      },
      {
        term: 'Fetch microoperations',
        kind: 'method',
        statement: 'Every instruction begins: **T0:** AR ← PC; **T1:** IR ← M[AR], PC ← PC + 1; **T2:** decode the opcode, AR ← IR(address field), I ← IR(indirect bit).',
        detail: 'T0 aims the memory at the instruction; T1 brings the instruction into IR while the dedicated incrementer advances PC so the next fetch is already aimed; T2 extracts the 12-bit address field into AR and the indirect bit into I, leaving the decoder outputs ready to steer execution. (The basic computer of Chapter 11 numbers the states slightly differently to accommodate indirect addressing at T3.)',
      },
      {
        term: 'Operand and execute paths',
        kind: 'method',
        statement: 'A memory-reference execution continues **T3:** DR ← M[AR] (operand fetch), then an ALU step such as AC ← AC + DR with the flags latching alongside; register-reference instructions skip memory entirely and act on AC and E in one step.',
        detail: 'The common rhythm — aim (AR), read (M[AR] onto the bus), load (destination), compute (ALU into AC) — repeats at every level of computer architecture, which is why Mano can design the whole machine around one bus and one ALU.',
      },
      {
        term: 'One-bus serialization',
        kind: 'insight',
        statement: 'Because the single common bus carries one word per clock period, microoperations that need the bus must occupy successive timing steps — this, not any lack of gates, is what makes instructions take several clock periods.',
        detail: 'The exceptions prove the rule: PC ← PC + 1 happens inside T1 alongside the memory read because the incrementer feeds PC directly without the bus. Parallelism in the basic computer appears exactly where a dedicated path bypasses the bus.',
      },
      {
        term: 'Control words as the instruction’s script',
        kind: 'notation',
        statement: 'Each timing step of an instruction corresponds to one 14-bit control word — for example, the fetch’s T0 is SELA = PC, SELB = unused, SELD = AR, OPR = transfer: 001 000 000 00000.',
        detail: 'Seen this way, an instruction is a short program of control words and the control unit is a machine for running such programs — the insight that leads directly to microprogramming in Chapter 10.',
      },
      {
        term: 'The full data flow chain',
        kind: 'insight',
        statement: 'The complete path of one memory-reference instruction is: **PC → AR → memory → IR → decode → AR → memory → DR → ALU → AC**, with PC incremented on the way and flags latched at the end.',
        detail: 'Memorize this chain and every computer organization question becomes a question about where in the chain a given design stops, repeats or adds a stage — indirect addressing simply inserts one more memory → AR link before the operand read.',
      },
    ],
    examples: [
      {
        title: 'Full trace of a direct-address ADD through the datapath',
        problem: 'Memory location 3 holds the instruction ADD 5 (opcode 001, direct), location 5 holds the value 9, and AC holds 6. Trace the instruction through every register and bus, writing the control word at each step.',
        steps: [
          { label: 'Step 1: T0 — aim memory at the instruction', text: 'Control word 001 000 000 00000 (SELA = PC, SELD = AR, transfer): AR ← PC = 3. The address bus now carries 3 to memory.' },
          { label: 'Step 2: T1 — fetch and advance', text: 'Memory read places M[3] = the ADD instruction word on the bus and IR ← M[AR]; in the same period the dedicated incrementer performs PC ← PC + 1 = 4, so the next fetch is already aimed.' },
          { label: 'Step 3: T2 — decode and extract', text: 'The decoder finds opcode 001 (ADD) and raises its control output; AR ← IR(address field) = 5 via control word 100 000 000 00000 (SELA = IR, SELD = AR); I ← 0, so no indirect step is needed.' },
          { label: 'Step 4: T3 — read the operand', text: 'Memory read with the address bus still driven by AR: the word M[5] = 9 appears on the bus and DR ← M[AR]. One bus, one word, one period.' },
          { label: 'Step 5: T4 — compute and latch', text: 'Control word 011 010 011 00100 (SELA = AC, SELB = DR, SELD = AC, OPR = add): the ALU forms $6 + 9 = 15 = 1111$; at the clock edge AC ← 1111 and the flags latch C = 0, V = 0, Z = 0, S = 0.' },
          { label: 'Step 6 — next instruction', text: 'The control returns to T0 with PC = 4: AR ← 4 and the machine fetches whatever the programmer placed after the ADD.' },
        ],
        result: 'PC → AR → memory → IR → decode → AR → memory → DR → ALU → AC: AC finishes with $1111 = 15$ and PC with 4, exactly the chain of the section title — five control words, five clock periods.',
      },
      {
        title: 'The same instruction with indirect addressing',
        problem: 'Now memory location 3 holds ADD 5 with the indirect bit I = 1; location 5 holds the pointer 7; location 7 holds the operand 9. Show what changes.',
        steps: [
          { label: 'Step 1: Fetch is identical', text: 'T0: AR ← 3; T1: IR ← M[3], PC ← 4; T2: AR ← IR(address field) = 5, but now I ← 1 — the control unit sees that the effective address must be fetched from memory.' },
          { label: 'Step 2: The indirect step', text: 'T3: the memory word M[5] = 7 is read onto the bus and its address field is loaded into AR: AR ← 7. This is the one extra memory → AR link in the chain.' },
          { label: 'Step 3: Operand and execute follow', text: 'T4: DR ← M[7] = 9; T5: AC ← AC + DR with flags latched — AC ← $6 + 9 = 15$ exactly as before, one timing state later.' },
          { label: 'Step 4: Count the cost', text: 'Indirect addressing bought pointer flexibility (the operand can move without editing the instruction) at the price of one extra memory read and one extra clock period — the trade the basic computer quantifies with its T3 state in Chapter 11.' },
        ],
        result: 'The chain grows to PC → AR → memory → IR → decode → AR → memory → AR → memory → DR → ALU → AC: the same datapath, one more bus cycle. Chapter 11 gives this pattern its exact basic-computer timing.',
      },
    ],
    keyTakeaways: [
      'The fetch is universal: AR ← PC; IR ← M[AR] with PC ← PC + 1; then decode, AR ← address field, I ← indirect bit.',
      'Execution of a memory-reference instruction adds DR ← M[AR] and an ALU step such as AC ← AC + DR with flags latched.',
      'Every timing step is one control word; an instruction is a short program of control words.',
      'The single common bus serializes transfers — instructions take multiple clock periods because of bus contention, not gate shortage.',
      'PC’s dedicated incrementer is the one parallel path that shares a period with the memory read.',
      'Indirect addressing inserts one extra memory → AR step before the operand read.',
    ],
    quiz: [
      {
        q: 'Which pair of microoperations happens in the same timing period during fetch, and why?',
        options: ['AR ← PC and IR ← M[AR], because both use the bus', 'IR ← M[AR] and PC ← PC + 1, because the incrementer feeds PC directly without using the common bus', 'AR ← IR and DR ← M[AR], because both are reads', 'PC ← PC + 1 and AC ← AC + DR, because both are arithmetic'],
        answer: 1,
        explanation: 'The memory read occupies the bus into IR, while PC is advanced by its own dedicated incrementer — the classic exception to the one-bus-per-period rule.',
      },
      {
        q: 'In the traced ADD, what does AR hold immediately after the T2 (decode) step?',
        options: ['The instruction address 3', 'The operand address 5, copied from IR’s address field', 'The operand value 9', 'The return address'],
        answer: 1,
        explanation: 'T2 extracts the instruction’s 12-bit address field into AR (via SELA = IR, SELD = AR), aiming memory at the operand — 5 in the example.',
      },
      {
        q: 'What exactly does indirect addressing add to the datapath chain?',
        options: ['A second ALU operation', 'One extra memory read whose result is loaded into AR as the effective address', 'A write to memory', 'An extra increment of PC'],
        answer: 1,
        explanation: 'With I = 1, an extra step reads the pointer word M[address field] into AR; the operand is then read from that effective address — one more memory → AR link.',
      },
      {
        q: 'A designer wants fetch, operand read and execute to happen in fewer clock periods. Which change actually helps?',
        options: ['Widen the common bus to 32 bits', 'Add dedicated paths that bypass the single bus (as the PC incrementer already does), or add a second bus so two transfers can proceed at once', 'Add more status flags', 'Increase the memory size to $2^{16}$ words'],
        answer: 1,
        explanation: 'The bottleneck is bus serialization: only transfers that avoid the common bus can share a period. Additional buses or dedicated paths (as in later pipeline designs) are the real speedups.',
      },
    ],
  },
]
