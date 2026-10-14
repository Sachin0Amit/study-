import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 8: Register-Transfer Logic and the Basic Computer (Sections 8.1 – 8.4
// as mapped in library.ts). Master study content, written from canonical
// knowledge of the book (the PDF is a scan with no text layer). Math is LaTeX,
// rendered by KaTeX via the RichText $...$ / $$...$$ pipeline. All backslashes
// doubled in TS strings.
// ============================================================================

export const manoCh8Content: SectionContent[] = [
  // ------------------------------------------------------------------ 8.1
  {
    sectionId: 'mano-ch8-s1',
    readingTime: 8,
    intro: 'A digital computer is, at bottom, an enormous collection of registers and gates. This chapter opens the register-transfer level of description: a symbolic language in which R1 ← R2 says everything that matters about moving a word, and a control function P says when it may happen. From those two ideas — the transfer and its control — grow the arithmetic, logic and shift microoperations, the common bus, the instruction code and finally the whole fetch–decode–execute rhythm of the basic computer that the rest of this chapter assembles.',
    objectives: [
      'Define the register-transfer language and explain what level of design it occupies',
      'Read and write transfer statements with control functions, including the conditional if (P) then (R1 ← R2) form',
      'Use the basic RTL symbols: letters, parentheses, arrows, commas, colons and subscripts',
      'Execute arithmetic microoperations, including subtraction by both 1’s- and 2’s-complement addition',
      'Apply the logic microoperations AND, OR, XOR and NOT to selective-set, selective-complement, selective-clear, mask, insert and clear',
      'Distinguish logical shifts, circular shifts through E, arithmetic shifts with sign preservation, and serial transfer',
    ],
    concepts: [
      {
        term: 'Register-transfer language (RTL)',
        kind: 'definition',
        statement: 'A **register-transfer language** is a symbolic notation for describing the inter-register transfers and elementary operations of a digital system at a level between logic design (gates and flip-flops) and system design (processors and memories).',
        detail: 'Instead of drawing circuits, the designer writes statements. The statement names registers, states what moves where, and states the Boolean condition under which the move happens. Mano uses this language through the rest of the book: the processor of Chapter 9, the control unit of Chapter 10 and the complete basic computer are all specified in it.',
      },
      {
        term: 'The transfer statement R1 ← R2',
        kind: 'notation',
        statement: 'The statement **R1 ← R2** means: replace the content of register R1 with the content of register R2, the transfer occurring at the next clock pulse edge. The arrow points from source to destination; R2 is unchanged.',
        detail: 'A register is always *some* binary string, so the statement really says: copy the n wires driven by R2 into the n flip-flops of R1 at the edge. If the destination can capture data on its own clock, the hardware is nothing but wires plus a load enable — the schematic of Figure 1. Transfers are written per register, never per bit: the whole word moves as one.',
      },
      {
        term: 'Control functions and the conditional form',
        kind: 'method',
        statement: 'A **control function** is a Boolean function of timing and status variables that gates a transfer: **P: R1 ← R2** means “if (P) then (R1 ← R2)” — the transfer occurs at every clock pulse for which P = 1.',
        detail: 'The colon terminates the control function. P may be a timing signal $T_1$, a decoded opcode such as $D_3$, or any product such as $D_3 T_4$. In hardware the control function is an AND gate that enables the destination register’s load input, which is why a transfer never happens “whenever” — only at a clock edge while its control line is asserted. Two microoperations separated by a comma execute in the same clock period; two statements written on separate lines execute in different periods.',
      },
      {
        term: 'The basic RTL symbols',
        kind: 'notation',
        statement: 'The language uses six conventions: **capital letters** (with digits) denote registers; **parentheses** denote a bit or bit range of a register; the **arrow** ← denotes a transfer; the **comma** separates simultaneous microoperations; the **colon** terminates a control function; **subscripts** name individual flip-flops or bit ranges.',
        detail: 'Examples: AR, PC, DR are registers; DR(0–11) or the subscripted form $\\mathrm{DR}_{0\\text{–}11}$ names the low-order twelve bits of DR; T: AR ← PC, PC ← PC + 1 says both happen under control function T in one period. Brackets enter the language in Section 8.2, where M[AR] names the memory word whose address sits in AR. Every microoperation of the basic computer is written with no more than these symbols.',
      },
      {
        term: 'Arithmetic microoperations',
        kind: 'method',
        statement: 'The **arithmetic microoperations** are addition $R_3 \\leftarrow R_1 + R_2$, subtraction $R_3 \\leftarrow R_1 - R_2$, increment $R \\leftarrow R + 1$ and decrement $R \\leftarrow R - 1$ — each a single clock-period operation of the adder network.',
        detail: 'Subtraction never needs a subtractor: the 2’s complement converts it to addition, $R_1 - R_2 = R_1 + \\bar{R}_2 + 1$, and the carry out of the most significant position is simply discarded. The 1’s-complement variant $R_1 + \\bar{R}_2$ omits the +1 and instead adds the **end-around carry**: if the addition produces a carry out, that carry is fed back into the least significant position. Increment and decrement are the special cases of adding 1 and adding $-1$ (the all-ones word).',
      },
      {
        term: 'Logic microoperations and their applications',
        kind: 'method',
        statement: 'The **logic microoperations** manipulate bits of a word independently: $A \\leftarrow A \\wedge B$ (AND), $A \\leftarrow A \\vee B$ (OR), $A \\leftarrow A \\oplus B$ (XOR) and $A \\leftarrow \\bar{A}$ (NOT). Their five classic applications are selective-set, selective-complement, selective-clear, mask and insert.',
        detail: 'With B selecting bit positions: **selective-set** ($A \\vee B$) forces 1s where B has 1s; **selective-complement** ($A \\oplus B$) flips exactly the bits where B has 1s; **selective-clear** ($A \\wedge \\bar{B}$) forces 0s where B has 1s; **mask** ($A \\wedge B$) keeps the bits where B has 1s and clears the rest; **insert** replaces a field with new bits by first masking it clear and then OR-ing in the value. Clearing a whole register is $A \\leftarrow A \\oplus A$ (or $A \\wedge 0$), the cheapest constant generator in the machine.',
      },
      {
        term: 'Shift microoperations',
        kind: 'method',
        statement: 'The **shift microoperations** are shl (shift left), shr (shift right), cil (circular left) and cir (circular right); **arithmetic shifts** ashl and ashr move the magnitude bits while preserving the sign bit, dividing and multiplying by 2.',
        detail: 'Logical shifts enter 0s at the empty end. Circular shifts rotate through the carry flip-flop E, the basic computer’s link between the shifter and the ALU: cir moves AC(0) into E and E into AC(15). An arithmetic shift right replicates the sign bit so that $\\text{ashr}(x)$ computes $\\lfloor x/2 \\rfloor$ for signed x — note $11011$ (−5) shifts to $11101$ (−3), rounding toward minus infinity, not toward zero. **Serial transfer** moves a word between registers one bit per clock over a single wire — the n-bit transfer costs n pulses.',
      },
    ],
    figures: [
      {
        caption: 'Register transfer hardware: the n bit lines of R1 wired to R2, whose load input is enabled by the AND of the control function P and the clock. When P = 1, the next clock edge loads R2 ← R1.',
        afterConcept: 3,
        svg: '<svg viewBox="0 0 720 300" width="100%" role="img" aria-label="Two registers R1 and R2 drawn as four-cell bit strips, four parallel wires carrying the bits from R1 to R2, and an AND gate whose inputs are the clock and the control function P, its output driving the load input of R2.">\n  <rect x="90" y="90" width="180" height="70" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <line x1="135" y1="90" x2="135" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>\n  <line x1="180" y1="90" x2="180" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>\n  <line x1="225" y1="90" x2="225" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>\n  <text x="180" y="82" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">R1 (source)</text>\n  <text x="112" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">1</text>\n  <text x="157" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">0</text>\n  <text x="202" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">1</text>\n  <text x="247" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">1</text>\n  <rect x="450" y="90" width="180" height="70" fill="#10b981" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <line x1="495" y1="90" x2="495" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>\n  <line x1="540" y1="90" x2="540" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>\n  <line x1="585" y1="90" x2="585" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>\n  <text x="540" y="82" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">R2 (destination)</text>\n  <text x="472" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">1</text>\n  <text x="517" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">0</text>\n  <text x="562" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">1</text>\n  <text x="607" y="130" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">1</text>\n  <polyline points="270,103 450,103" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polyline points="270,121 450,121" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polyline points="270,139 450,139" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polyline points="270,157 450,157" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polygon points="450,103 441,99 441,107" fill="currentColor" stroke="none"/>\n  <polygon points="450,121 441,117 441,125" fill="currentColor" stroke="none"/>\n  <polygon points="450,139 441,135 441,143" fill="currentColor" stroke="none"/>\n  <polygon points="450,157 441,153 441,161" fill="currentColor" stroke="none"/>\n  <text x="360" y="86" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">n parallel bit lines, one per stage</text>\n  <rect x="100" y="192" width="70" height="30" fill="none" stroke="#f59e0b" stroke-width="1.5"/>\n  <text x="135" y="211" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11.5" fill="#f59e0b">clock</text>\n  <circle cx="240" cy="222" r="3" fill="#10b981" stroke="none"/>\n  <text x="240" y="243" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="#10b981">P (control)</text>\n  <path d="M 345 195 L 372 195 A 20 20 0 0 1 372 235 L 345 235 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polyline points="170,207 345,207" fill="none" stroke="#f59e0b" stroke-width="1.5"/>\n  <polyline points="243,222 345,223" fill="none" stroke="#10b981" stroke-width="1.5"/>\n  <polyline points="392,215 540,215" fill="none" stroke="#10b981" stroke-width="1.8"/>\n  <polyline points="540,215 540,160" fill="none" stroke="#10b981" stroke-width="1.8"/>\n  <polygon points="540,160 536,168 544,168" fill="#10b981" stroke="none"/>\n  <text x="465" y="207" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="#10b981">load</text>\n  <text x="360" y="284" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">P: R2 ← R1 — the transfer completes at the first clock edge while P = 1</text>\n</svg>',
      },
      {
        caption: 'Timing of a gated transfer: the control function P is asserted between two clock pulses, and the destination R2 takes the source value R1 = 1011 at every rising edge that finds P = 1 — here at t2 and again at t3.',
        afterConcept: 4,
        svg: '<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Timing diagram with a square clock waveform of five pulses, the control function P high between them, the source register R1 shown as a constant bus value 1011, and the destination R2 changing from 0110 to 1011 at the second clock edge while P is asserted.">\n  <polyline points="60,90 90,90 90,50 130,50 130,90 210,90 210,50 250,50 250,90 330,90 330,50 370,50 370,90 450,90 450,50 490,50 490,90 570,90 570,50 610,50 610,90 660,90" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>\n  <text x="60" y="42" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">clock</text>\n  <polyline points="60,158 150,158 150,128 390,128 390,158 660,158" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round"/>\n  <text x="60" y="120" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="#10b981">P</text>\n  <rect x="200" y="193" width="200" height="28" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/>\n  <line x1="200" y1="193" x2="208" y2="221" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <line x1="200" y1="221" x2="208" y2="193" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <line x1="392" y1="193" x2="400" y2="221" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <line x1="392" y1="221" x2="400" y2="193" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <text x="300" y="212" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12.5" fill="currentColor">1 0 1 1</text>\n  <text x="60" y="212" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">R1</text>\n  <rect x="90" y="242" width="120" height="28" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/>\n  <line x1="90" y1="242" x2="98" y2="270" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <line x1="90" y1="270" x2="98" y2="242" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <text x="150" y="261" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12.5" fill="currentColor">0 1 1 0</text>\n  <rect x="210" y="242" width="450" height="28" fill="#10b981" fill-opacity="0.12" stroke="currentColor" stroke-width="1.4"/>\n  <line x1="660" y1="242" x2="668" y2="270" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <line x1="660" y1="270" x2="668" y2="242" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>\n  <text x="435" y="261" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12.5" fill="currentColor">1 0 1 1</text>\n  <text x="60" y="261" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">R2</text>\n  <polyline points="210,40 210,278" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 4" opacity="0.5"/>\n  <polyline points="330,40 330,278" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 4" opacity="0.5"/>\n  <polygon points="210,40 214,49 206,49" fill="#f59e0b" stroke="none"/>\n  <polygon points="330,40 334,49 326,49" fill="#f59e0b" stroke="none"/>\n  <text x="440" y="36" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">P = 1 across these pulses — R2 ← R1 at every rising edge (t2 and t3)</text>\n  <line x1="60" y1="295" x2="660" y2="295" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>\n  <polygon points="660,295 650,291 650,299" fill="currentColor" stroke="none"/>\n  <text x="90" y="312" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">t1</text>\n  <text x="210" y="312" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">t2</text>\n  <text x="330" y="312" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">t3</text>\n  <text x="450" y="312" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">t4</text>\n  <text x="570" y="312" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">t5</text>\n  <text x="690" y="299" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">time</text>\n</svg>',
      },
    ],
    examples: [
      {
        title: 'Reading and writing RTL statements',
        problem: 'Translate between words and symbols. (a) What does T1: AR ← PC, PC ← PC + 1 do, and in how many clock periods? (b) Write symbolically: “if the decoded instruction D3 and timing signal T4 are both 1, store AC into the memory word addressed by AR.” (c) What does the subscripted range IR(0–11) name in a 16-bit instruction register?',
        steps: [
          { label: 'Step 1: Parse (a)', text: 'One control function T1 gates two comma-separated microoperations, so both happen in the SAME clock period: AR takes the program counter’s value while PC simultaneously advances — a parallel transfer plus an increment, not a sequence.' },
          { label: 'Step 2: Write (b)', text: 'The control function is the AND of D3 and T4; the transfer is a memory write: **D3T4: M[AR] ← AC**. This is exactly the execute step of the store instruction STA in Section 8.4.' },
          { label: 'Step 3: Interpret (c)', text: 'Parentheses (or the subscript form $\\mathrm{IR}_{0\\text{–}11}$) name the low-order twelve bits of IR — in the basic computer, the address field of an instruction word.' },
          { label: 'Step 4: Count the commas', text: 'Note the contrast with T: AR ← PC followed on the next line by T: PC ← PC + 1 — written as two statements they claim two periods; the comma is what buys simultaneity.' },
        ],
        result: 'The colon = control, the arrow = transfer, the comma = same period, parentheses = bit selection. With these four conventions plus register names, every microoperation of the basic computer is expressible.',
      },
      {
        title: 'Subtraction by complement addition',
        problem: 'With 4-bit registers A = 0110 (6) and B = 0011 (3), compute A − B three ways: with a true subtractor, with the 1’s-complement method including the end-around carry, and with the 2’s-complement method. Then repeat with A = 0011 (3) and B = 0110 (6) to see the negative case.',
        steps: [
          { label: 'Step 1: 2’s complement, positive result', text: 'Add the complement plus one: $0110 + \\bar{B} + 1 = 0110 + 1100 + 1$. The sum $0110 + 1100 = 10010$, and $10010 + 1 = 10011$. The leftmost bit is a carry OUT of the 4-bit word; it is discarded, leaving **0011 = 3**.' },
          { label: 'Step 2: 1’s complement with end-around carry', text: 'Add without the +1: $0110 + 1100 = 10010$. A carry appeared, so it is NOT discarded here — it is added back to the least significant bit: $0010 + 1 = 0011 = 3$ ✓. The end-around carry is the manual correction for the missing +1.' },
          { label: 'Step 3: The negative case, 1’s complement', text: 'Now A = 0011, B = 0110: $0011 + 1001 = 1100$. No carry out means the result is negative and needs NO correction: $1100$ reads as −3 in 1’s complement ✓ (check: invert for magnitude, $0011 = 3$).' },
          { label: 'Step 4: The negative case, 2’s complement', text: 'Same operands with the +1: $0011 + 1001 + 1 = 1101$, which reads as −3 in 2’s complement ✓ — and again no carry to worry about.' },
        ],
        result: 'Carry out + discard means the 2’s-complement result is positive; no carry means negative. The end-around carry of the 1’s-complement method is precisely the bookkeeping the +1 does for free in the 2’s-complement method — the masters depth derives why this always works.',
      },
      {
        title: 'The five logic-microoperation applications',
        problem: 'Take AC = 1010 and the selector word B = 0110 (it selects bit positions 1 and 2). Show the effect of each application: selective-set, selective-complement, selective-clear, mask, and an insert that replaces the low two bits of AC with 11. Finish by clearing AC entirely.',
        steps: [
          { label: 'Step 1: Selective-set (OR)', text: 'AC ← AC ∨ B = $1010 \\vee 0110 = 1110$: the selected positions (bits 1, 2) are forced to 1 regardless of their prior value.' },
          { label: 'Step 2: Selective-complement (XOR)', text: 'AC ← AC ⊕ B = $1010 \\oplus 0110 = 1100$: exactly the selected bits flip (bit 1: 1→0, bit 2: 0→1), the others pass through.' },
          { label: 'Step 3: Selective-clear (AND with complement)', text: 'AC ← AC ∧ B̄ = $1010 \\wedge 1001 = 1000$: the selected positions are forced to 0.' },
          { label: 'Step 4: Mask and insert', text: 'Mask: AC ← AC ∧ 1100 = $1000$ — keep the field where the mask is 1, clear the rest. Insert: first mask the field away, then OR the new value in: $(1010 \\wedge 1100) \\vee 0011 = 1000 \\vee 0011 = 1011$ — the low two bits now read 11.' },
          { label: 'Step 5: Clear', text: 'AC ← AC ⊕ AC = $0000$: XOR of a word with itself annihilates every bit — no constant inputs needed.' },
        ],
        result: 'One operand word B and three gates (AND, OR, XOR) give the machine surgical control over arbitrary bit fields of AC — the mechanism behind the AND, CMA and CLA instructions of Section 8.3.',
      },
      {
        title: 'Shifting a word through E',
        problem: 'With the 4-bit accumulator AC = 1010 and the carry flip-flop E = 1, give the result (and the new E) of shr, shl, cil, cir, and of the arithmetic shifts ashr and ashl applied to the signed 5-bit value 11011 (−5). How long does a serial transfer of the word take?',
        steps: [
          { label: 'Step 1: Logical shifts', text: 'shr: 0 enters the left, E ← AC(0) = 0: AC = 0101, E = 0. shl: the left bit leaves into E, 0 enters the right: AC = 0100, E = 1.' },
          { label: 'Step 2: Circular shifts through E', text: 'cir (rotate right): E circulates into the top: AC = 1101 with E ← old AC(0) = 0. cil (rotate left): E enters the bottom: AC = 0101 with E ← old AC(3) = 1. Nothing is lost — the 5 bits AC·E just rotate.' },
          { label: 'Step 3: Arithmetic shifts', text: 'ashr of 11011 (−5): the sign bit stays and replicates: 11101 = −3 = $\\lfloor -5/2 \\rfloor$ — note it rounds DOWN, not toward zero. ashl: 10110 = −10 with E ← 1 capturing the shifted-out bit; a true multiply-by-2 only when the sign does not change.' },
          { label: 'Step 4: Serial transfer', text: 'Moving the 4-bit word from one register to another over a single wire shifts one bit per clock pulse: 4 pulses, each clocking both the source’s shr and the destination’s shl — the cost of saving three wires.' },
        ],
        result: 'Logical shifts drop bits, circular shifts keep them in AC·E, arithmetic shifts preserve the sign and compute multiply/divide by 2 — with the floor-toward-minus-infinity asymmetry that the masters depth examines.',
      },
    ],
    keyTakeaways: [
      'RTL describes a system at the register level: **P: R1 ← R2** means “if (P) then (R1 ← R2)” at the next clock edge, with the colon marking the control function.',
      'The comma buys simultaneity: two microoperations in one statement share one clock period.',
      'Subtraction needs no subtractor: $A - B = A + \\bar{B} + 1$ (2’s complement, discard the carry) or $A + \\bar{B}$ with end-around carry (1’s complement).',
      'The logic microoperations give field surgery on words: OR sets, XOR complements, AND masks, insert = mask then OR, and A ⊕ A clears.',
      'Circular shifts rotate AC·E; arithmetic shifts preserve the sign, and ashr computes $\\lfloor x/2 \\rfloor$.',
      'Serial transfer moves a word one bit per clock — n pulses for n bits.',
    ],
    quiz: [
      {
        q: 'R1 holds 1010 and R2 holds 0110. After the microoperation R1 ← R2, what does R1 hold?',
        options: ['1010', '0110', '1100', '0000'],
        answer: 1,
        explanation: 'The destination takes the source’s content: R1 ← 0110. The source R2 is unchanged.',
      },
      {
        q: 'In the statement P: R2 ← R1, what is P and what does it do?',
        options: ['A register that is copied along with the transfer', 'A Boolean control function; the transfer occurs at every clock pulse for which P = 1', 'The parity of the word being moved', 'A second destination register'],
        answer: 1,
        explanation: 'The colon terminates the control function — an AND of timing and status variables that gates the destination’s load input.',
      },
      {
        q: 'Which pair of microoperations executes in a single clock period?',
        options: ['AR ← PC and PC ← PC + 1 written with a comma between them', 'AR ← PC written on one line and PC ← PC + 1 written on the next line', 'Any two transfers, always', 'No two transfers can ever share a period'],
        answer: 0,
        explanation: 'The comma marks simultaneous microoperations — one statement, one clock period. Separate statements claim separate periods.',
      },
      {
        q: 'With A = 0110 (6) and B = 0011 (3), the 2’s-complement subtraction $A + \\bar{B} + 1$ produces 10011 in 5 bits. What is the 4-bit result?',
        options: ['0011 = 3, discarding the carry out', '0100 = 4, keeping the carry as a sign bit', '1011 = −3 in 2’s complement', '0010 = 2, after an end-around carry'],
        answer: 0,
        explanation: 'The carry out has weight $2^4$ beyond the 4-bit word and is discarded; the remaining 0011 is the correct difference $6 - 3 = 3$.',
      },
      {
        q: 'In 1’s-complement subtraction, when is the end-around carry added back?',
        options: ['Always, after every addition', 'Only when the addition produces a carry out of the most significant position — the positive-result case', 'Only when the result is negative', 'Never — it is always discarded'],
        answer: 1,
        explanation: 'A carry out means the true difference was positive; adding the carry back to the LSB supplies the missing +1. No carry means the result stands as a negative 1’s-complement value.',
      },
      {
        q: 'AC = 1010. After the selective-complement microoperation AC ← AC ⊕ 0110, AC holds:',
        options: ['1110', '1100', '1000', '0101'],
        answer: 1,
        explanation: 'XOR flips exactly the bits where the operand has 1s: bit 1 (1→0) and bit 2 (0→1), giving $1010 \\oplus 0110 = 1100$.',
      },
      {
        q: 'AC = 1010 and the mask word is 1100. After AC ← AC ∧ 1100, AC holds:',
        options: ['1110', '1100', '1000', '0110'],
        answer: 2,
        explanation: 'The mask keeps bits where it has 1s (the high pair) and clears the rest: $1010 \\wedge 1100 = 1000$.',
      },
      {
        q: 'To replace the low two bits of AC = 1010 with the new value 11, the insert sequence is:',
        options: ['AC ← AC ∨ 0011 directly', 'AC ← (AC ∧ 1100) ∨ 0011, giving 1011', 'AC ← (AC ∨ 1100) ∧ 0011, giving 0001', 'AC ← AC ⊕ 0011, giving 1001'],
        answer: 1,
        explanation: 'Insert = mask the field clear, then OR in the new bits: $1000 \\vee 0011 = 1011$. The direct OR could not force 0-bits to change to the intended pattern.',
      },
      {
        q: 'AC = 1001 and E = 1. After cir (circular shift right through E), what are AC and E?',
        options: ['AC = 1100, E = 1', 'AC = 0100, E = 1', 'AC = 1100, E = 0', 'AC = 0011, E = 1'],
        answer: 0,
        explanation: 'E enters the most significant position and AC(0) circulates into E: AC = 1100 and the old AC(0) = 1 lands in E.',
      },
      {
        q: 'The arithmetic shift right of the signed 4-bit word 1101 (−3) produces:',
        options: ['1110, which is −2 — floor(−3/2)', '0110, which is +6', '1111, which is −1', '1001, unchanged because negatives cannot shift'],
        answer: 0,
        explanation: 'The sign bit replicates: $1101 \\to 1110 = -2 = \\lfloor -3/2 \\rfloor$. Arithmetic shift right floors toward minus infinity, unlike truncating division.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Algebra and architecture of the microoperation',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Two’s-complement subtraction as modular arithmetic',
            body: 'Why does discarding the carry make $A + \\bar{B} + 1$ equal $A - B$? Work in the ring $\\mathbb{Z}/2^n\\mathbb{Z}$, where the wraparound at $2^n$ is invisible. The bitwise complement satisfies $\\bar{B} = 2^n - 1 - B$, because each of the $n$ bits contributes its complement to the sum of all-ones. Therefore $A + \\bar{B} + 1 = A + (2^n - 1 - B) + 1 = A - B + 2^n \\equiv A - B \\pmod{2^n}$. The end carry is literally the $2^n$ term being flushed out of the register; discarding it is not a trick but the definition of modular equality. The 1’s-complement method omits the $+1$: $A + \\bar{B} = A - B + 2^n - 1$. If $A > B$, the left side overflows past $2^n$, producing a carry of weight $2^n$ while the register retains $A - B - 1$; feeding that carry back into the least significant bit adds the missing $1$ — hence the name **end-around carry**. If $A \\le B$, no carry appears, no correction applies, and the register content $2^n - 1 - (B - A)$ is precisely the 1’s-complement encoding of the negative difference $-(B - A)$, with the $A = B$ case yielding the notorious $111\\ldots1$ “minus zero” that motivated the 2’s complement’s dominance.',
          },
          {
            kind: 'example',
            heading: 'Arithmetic shift and the two rounding rules',
            body: 'A 4-bit machine divides $-5$ (1101) by 2 with ashr and gets $1110 = -2$; a 5-bit machine dividing $-5$ (11011) gets $11101 = -3$. Both are “correct” — they are different rounding rules. Sign replication computes $\\text{ashr}(x) = \\lfloor x/2 \\rfloor$: for $x = -5$ in 5 bits, $\\lfloor -2.5 \\rfloor = -3$. A truncating divider (rounding toward zero) would give $-2$. For non-negative $x$ the two rules coincide, because truncation and floor agree on positives; the asymmetry lives entirely in the odd negatives. The hardware reason is structural: the sign flip-flop drives both the outgoing sign and the incoming replicated bit, so the shifter cannot “round toward zero” without an extra correction step — add 1 to the result when the shifted-out bit is 1 AND the sign is 1, which is precisely the restoring step a truncating division unit must add. Compilers that strength-reduce a division by a constant into shifts must therefore emit the correction sequence for signed operands, a real code-generation decision flowing straight from this section’s timing diagram.',
          },
          {
            kind: 'para',
            heading: 'The multiplexer bus as a router',
            body: 'Viewed abstractly, the multiplexer bus of Section 8.2 is a router: at any instant it connects exactly one of $k$ source registers to the shared word-path. The cost accounting explains why Mano draws it so carefully. With $k$ registers of $n$ bits, the bus needs $n$ multiplexers of $k$ inputs each — $nk$ gate inputs, growing linearly in both registers and width. Each $k$-input multiplexer built from 2:1 stages has depth $\\lceil \\log_2 k \\rceil$, so the source-select delay grows only logarithmically with the register count — the reason a 32-register file can still be routed in a couple of gate delays. The tri-state alternative of Section 8.2 replaces this combinational tree with a shared wire: selection cost drops to driving one enable line, but the wire itself becomes a capacitive node whose delay grows with length and tap count, and exactly one driver must be enabled at a time or the outputs fight. The two implementations are the two poles of a genuine engineering trade — logic depth versus wire RC — that every bus designer still navigates.',
          },
          {
            kind: 'derivation',
            heading: 'Clock periods per instruction of the basic computer',
            body: 'Mano’s machine spends exactly one clock period per microoperation, so an instruction’s cost is the count of its timing states. Fetch and decode are universal: $T_0$ (AR ← PC), $T_1$ (IR ← M[AR], PC ← PC + 1), $T_2$ (decode, AR ← address field) — three periods. A direct AND or ADD adds two more: $T_4$ reads the operand into DR, $T_5$ computes into AC and clears SC — five periods; an indirect version spends $T_3$ reading the effective address, making six. STA and BUN finish in one execute state ($T_4$): four periods. BSA needs two ($T_4$, $T_5$): five. ISZ is the longest: read, increment, write-back and test occupy $T_4$, $T_5$, $T_6$: six. Register-reference and input-output instructions execute entirely in the $T_3$ slot: four periods. Weighting a plausible mix — 35% ALU-from-memory at 5, 20% store/branch at 4, 5% subroutine call at 5, 5% ISZ at 6, 35% register-reference at 4 — gives $0.35(5) + 0.20(4) + 0.05(5) + 0.05(6) + 0.35(4) = 4.5$ clock periods per instruction, and every additional level of indirection adds one more. The single-period-per-microoperation discipline is what makes this arithmetic exact.',
          },
          {
            kind: 'para',
            heading: 'Wilkes and the stored control word',
            body: 'Maurice Wilkes, building EDSAC at Cambridge, proposed in 1951 that the control signals sequenced by this chapter’s timing states could themselves be stored in a read-only memory: a row per clock period, a column per control line. Each microoperation of this section — a transfer, its control function, the SC ← 0 that ends an instruction — becomes a bit pattern in a **control word**, and each instruction becomes a short routine of such words. This is **microprogramming**, and it reframes the whole chapter: the RTL listing of the instruction cycle is not merely a specification but a program, executable by a very small sequencer reading control memory. Mano’s Chapter 10 develops exactly this: the hardwired gates that realize $D_3 T_4$ become table entries. The idea dominated real machines from the IBM System/360 (whose wide 1958-vintage vertical microcode made a family of compatible models share one architecture) through the CISC era, because it traded a handful of gates for editability — fixing a control bug became rewriting a row of ROM rather than re-cutting a board.',
          },
          {
            kind: 'remark',
            heading: 'The logic microoperations are functionally complete',
            body: 'The logic-microoperation repertoire is not an arbitrary menu: {AND, OR, XOR, NOT} is functionally complete — every bitwise function of two operands is expressible in it. Even the pair {AND, NOT} suffices by De Morgan, and Chapter 2 showed NAND alone suffices; what the four-op set buys is *economy of expression* for the field operations of this section. The XOR identities are the workhorses: $A \\oplus 0 = A$ (pass), $A \\oplus 1 = \\bar{A}$ (complement), $A \\oplus A = 0$ (clear) — three constants from one gate. Deeper: XOR computes the sum bits of an addition while AND computes the carry bits ($A + B = (A \\oplus B) + ((A \\wedge B) \\ll 1)$ iterated), so the arithmetic and logic microoperations of this section are two views of one adder network — the very ALU that Chapter 9 builds as a single combinational block selectable by an operation code.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'From RTL notation to research practice',
        blocks: [
          {
            kind: 'para',
            heading: 'Register transfer as guarded commands',
            body: 'Formally, Mano’s control function is a guard: the pair “P: R1 ← R2” is exactly Dijkstra’s guarded command **if P then R1 ← R2**, and a whole system of them is a synchronous transition system whose state is the vector of all registers. Because every guarded transfer fires simultaneously at the clock edge, the semantics is the parallel-assignment semantics — what Verilog later standardized as the non-blocking assignment (R1 <= R2 under a clocked always block) as opposed to the sequential blocking assignment, a distinction that generates endless beginner bugs precisely because RTL notation makes the parallel reading look so natural. Ill-formed RTL with circular combinational dependencies (A ← B, B ← A without registers) has no fixpoint semantics and must be rejected by construction tools — the register boundary is what makes the mathematical model deterministic and simulable in two passes per clock: evaluate all next-state functions from current state, then commit.',
          },
          {
            kind: 'application',
            heading: 'Model checking a register-transfer description',
            body: 'Because a clocked RTL system is a finite-state machine (the basic computer has roughly $2^{100}$ reachable states — astronomical, but finite), it is a natural target for temporal-logic model checking. Properties of this chapter’s material become CTL formulas: “the transfer is safe” is $\\mathrm{AG}(P \\rightarrow \\mathrm{AX}\\, R_1 = R_2)$ — in every state where P holds, at the next tick R1 equals R2. Bus discipline becomes $\\mathrm{AG}(\\text{at most one source enable})$; the sequencer becomes $\\mathrm{AG}(\\mathrm{SC} \\le 7)$. Tools from nuSMV to modern SMT-based bounded model checkers verify such properties by symbolic traversal (BDDs) or unrolling to a depth k; industrial sign-off (JasperGold-class apps) routinely discharges exactly these one-hot-enable and no-capture-without-load properties on millions of RTL states. The basic computer is small enough that a full CTL check of its instruction cycle is a semester exercise — and historically, the verification of a real microcode-sequenced machine (the AAMP5, early 1990s) was among the first industrial model-checking successes.',
          },
          {
            kind: 'para',
            heading: 'The synchronous hypothesis and its limits',
            body: 'All of this chapter assumes the **synchronous hypothesis**: gates are ideal (zero delay), wires are ideal, and a single clock edge reaches every flip-flop simultaneously. Real silicon violates all three — each path has a delay that varies with temperature, voltage and process corner, and the clock itself arrives skewed across the chip. RTL reasoning survives because the discipline of clocked design pushes all timing questions into two numbers per path (setup and hold relative to the local clock), and static timing analysis verifies those numbers across corners; the notation of “one microoperation per clock period” is thus an abstraction maintained by tooling, not a physical fact. The hypothesis visibly frays at multi-gigahertz scales: a single cycle can no longer span a whole chip, so clocks are generated per domain (GALS — globally asynchronous, locally synchronous), and a transfer like R1 ← R2 crossing domains needs synchronizers and pays metastability risk — the point where Section 8.2’s three-state buffer and its timing assumptions become a research topic rather than a given.',
          },
          {
            kind: 'open',
            heading: 'Verified compilation from RTL to gates',
            body: 'This chapter writes behavior; Chapters 9 and 10 realize it in hardware; and the implicit promise is that the realization matches the description. Keeping that promise is still an open engineering-science problem. Logic synthesis (from the RTL-to-gates flows of the 1980s to modern high-level synthesis from C or Chisel) is trusted through massive simulation plus structural equivalences between adjacent refinement steps, but a fully verified chain — behavioral RTL proven equivalent to the placed netlist, through all retiming, duplication and clock-gating transformations — exists only in fragments: the Kami framework verified a RISC-V core against its ISA by construction, and individual transformations (retiming, unrolling) have mechanical proofs, yet signoff-grade synthesis remains empirical. The prize is large: a machine like Mano’s, specified in one page of RTL, could be compiled to silicon with a machine-checked proof that every gate array implements every colon and arrow of this chapter exactly.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 8.2
  {
    sectionId: 'mano-ch8-s2',
    readingTime: 8,
    intro: 'One destination register is easy: draw n wires. But a computer must move words between many registers, and wiring every pair is hopeless — the wire count explodes quadratically. Mano’s answer is the common bus: one shared word-path that any register can drive and from which any register can load, with multiplexers (or three-state buffers) deciding who drives and a decoder deciding who captures. The same section adds the last transfer primitive: the memory unit, addressed through AR and read or written with the statements DR ← M[AR] and M[AR] ← DR.',
    objectives: [
      'Explain the common-bus concept and why it replaces point-to-point register wiring',
      'Construct a multiplexer bus for four registers, sizing the select lines S1S0 and the number of MUX stages',
      'Write bus transfers in the two-step form BUS ← C, R1 ← BUS and in the simplified one-statement form',
      'Describe the three-state buffer, its high-impedance Z state, and the tri-state bus alternative',
      'State the memory read and write microoperations and the role of AR as the address gate',
      'Account for the one-word-per-period economy that the shared bus forces on every later design',
    ],
    concepts: [
      {
        term: 'The common bus',
        kind: 'definition',
        statement: 'A **common bus** is a single shared word-path to which every register’s outputs can be connected as a source and every register’s inputs as a destination; it carries exactly one word per clock period, so one source is selected at a time.',
        detail: 'With k registers, point-to-point wiring needs $k(k-1)$ ordered register-pair paths — for eight registers, 56 paths of n wires each. The bus replaces all of them with n shared wires plus selection hardware. The price is serialization: two transfers that would have run in parallel on dedicated wires must now occupy two clock periods. Every timing count in Section 8.4 is a consequence of this one trade.',
      },
      {
        term: 'The multiplexer bus construction',
        kind: 'method',
        statement: 'A MUX bus for four registers of n bits uses **n multiplexers of four inputs each (4×1)**, all sharing the two select lines $S_1 S_0$: 00 selects A, 01 selects B, 10 selects C, 11 selects D. The construction extends word-by-word — one MUX stage per bit position.',
        detail: 'Each MUX output is one bus line; its four inputs are the corresponding bit of the four registers. Mano’s figure draws two of the stages explicitly, which is enough to make the pattern visible: register bit i of every source fans into the i-th MUX, and the shared $S_1 S_0$ code routes one register’s bit i onto bus line i. For k registers the select needs $\\lceil \\log_2 k \\rceil$ lines; for wider words you simply add more identical MUX stages — the select wiring does not grow at all.',
      },
      {
        term: 'Bus transfer statements',
        kind: 'notation',
        statement: 'A transfer through the bus is written in two steps: **BUS ← C, R1 ← BUS** — register C is gated onto the bus and register R1 captures it. When the bus is understood, the statement simplifies to **R1 ← C**.',
        detail: 'The two-step form exposes the bus’s two decisions: the source (chosen by the MUX select) and the destination (chosen by which register’s load input is enabled — a 2×4 decoder can turn a 2-bit destination code into exactly one load enable). The simplified one-line form is what Sections 8.3 and 8.4 use throughout; the bus is implied in every register-to-register transfer of the basic computer.',
      },
      {
        term: 'Three-state buffers and the tri-state bus',
        kind: 'definition',
        statement: 'A **three-state buffer** has outputs 0, 1 and **Z** (high impedance). When its enable control is 1 it passes its input; when 0 its output disconnects entirely. A bus built from tri-state drivers needs no multiplexers — the wired-OR of all registers’ outputs is the bus line.',
        detail: 'The Z state is not a logic level: the driver transistor simply releases the wire, leaving it floating (held briefly by its parasitic capacitance). One driver enabled at a time reproduces exactly the MUX bus’s behavior; two enabled simultaneously means two gates fighting — contention, with currents flowing where they should not. Tri-state construction wins when the bus spans physical distance (the wire IS the bus), which is why it became the standard for backplanes and processor buses.',
      },
      {
        term: 'The memory unit and address selection',
        kind: 'definition',
        statement: 'The **memory unit** stores $2^k$ words of n bits; a k-bit address in the **address register (AR)** selects the one word accessed. The basic computer’s memory holds $2^{12} = 4096$ words of 16 bits, addressed by a 12-bit AR.',
        detail: 'Inside the memory unit, a k-to-$2^k$ decoder (Chapter 5) turns the binary address into one asserted word-select line — the same selection problem as the bus, at industrial scale. The address must be stable in AR before the read or write strobe, which is exactly why the basic computer spends timing states loading AR before touching memory. Memory and registers share one uniform language: M is treated as an extension of the register file in which the register number itself is a stored number.',
      },
      {
        term: 'Memory read and write microoperations',
        kind: 'notation',
        statement: 'The **memory read** DR ← M[AR] brings the addressed word into the data register; the **memory write** M[AR] ← DR stores the data register into the addressed word. The brackets name a memory word by its address.',
        detail: 'These are the only two memory statements in the language, and every instruction of Section 8.3 reduces to a timed sequence of them plus register transfers. In the basic computer the write path actually sources AC (the STA instruction: M[AR] ← AC) or PC (the subroutine call BSA: M[AR] ← PC), while every read lands in DR or IR — the hardware consequence of a single write port. The register-transfer level makes the whole memory look like one enormous indexed register, an abstraction every later architecture keeps.',
      },
      {
        term: 'One word per period',
        kind: 'insight',
        statement: 'The common bus carries one word per clock period, so every pair of bus-needing microoperations of an instruction must occupy successive timing states — the single most important constraint in the timing design of Section 8.4.',
        detail: 'The exceptions are the transfers with dedicated paths: PC ← PC + 1 rides its own incrementer, which is why it shares timing state T1 with the memory read IR ← M[AR] during fetch. This serialization is not a weakness of the designers but the honest cost of the shared wire; pipelined and superscalar machines of later chapters exist precisely to recover the parallelism the bus budget gave up.',
      },
    ],
    figures: [
      {
        caption: 'The common bus for four two-bit registers A, B, C, D: each bit position has its own 4×1 multiplexer, both sharing the select lines S1S0 = 10, which route C onto the bus; a destination decoder enables exactly one register load (A), completing BUS ← C, A ← BUS. A 16-bit machine simply repeats the 2-MUX pair eight times to make 16 stages.',
        afterConcept: 3,
        svg: '<svg viewBox="0 0 760 400" width="100%" role="img" aria-label="Common bus diagram with four two-bit registers A, B, C, D on the left, two four-to-one multiplexers in the middle sharing select lines S1 and S0, the two bus lines on the right, and a destination decoder whose highlighted A output enables the load of register A.">\n  <text x="380" y="20" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f59e0b">S1S0 = 10 selects C as the source (green paths)</text>\n  <rect x="60" y="55" width="110" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <line x1="60" y1="77" x2="170" y2="77" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>\n  <text x="52" y="82" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">A</text>\n  <text x="115" y="71" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">0</text>\n  <text x="115" y="94" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">1</text>\n  <rect x="60" y="125" width="110" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <line x1="60" y1="147" x2="170" y2="147" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>\n  <text x="52" y="152" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">B</text>\n  <text x="115" y="141" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">0</text>\n  <text x="115" y="164" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">0</text>\n  <rect x="60" y="195" width="110" height="44" fill="#10b981" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <line x1="60" y1="217" x2="170" y2="217" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>\n  <text x="52" y="222" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">C</text>\n  <text x="115" y="211" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">1</text>\n  <text x="115" y="234" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">1</text>\n  <rect x="60" y="265" width="110" height="44" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <line x1="60" y1="287" x2="170" y2="287" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>\n  <text x="52" y="292" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">D</text>\n  <text x="115" y="281" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">1</text>\n  <text x="115" y="304" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">0</text>\n  <polyline points="170,66 300,72" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/>\n  <polyline points="170,88 300,222" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/>\n  <polyline points="170,136 300,97" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/>\n  <polyline points="170,158 300,247" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/>\n  <polyline points="170,206 300,122" fill="none" stroke="#10b981" stroke-width="1.8"/>\n  <polyline points="170,228 300,272" fill="none" stroke="#10b981" stroke-width="1.8"/>\n  <polyline points="170,276 300,147" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/>\n  <polyline points="170,298 300,297" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/>\n  <rect x="300" y="60" width="90" height="100" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <text x="345" y="102" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">MUX</text>\n  <text x="345" y="118" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">4 × 1</text>\n  <rect x="300" y="210" width="90" height="100" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <text x="345" y="252" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">MUX</text>\n  <text x="345" y="268" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">4 × 1</text>\n  <polyline points="318,44 318,60" fill="none" stroke="#f59e0b" stroke-width="1.5"/>\n  <polyline points="338,44 338,60" fill="none" stroke="#f59e0b" stroke-width="1.5"/>\n  <polyline points="318,160 318,210" fill="none" stroke="#f59e0b" stroke-width="1.5"/>\n  <polyline points="338,160 338,210" fill="none" stroke="#f59e0b" stroke-width="1.5"/>\n  <text x="348" y="190" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="#f59e0b">S1 S0</text>\n  <polyline points="390,110 640,110" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="640,110 631,106 631,114" fill="currentColor" stroke="none"/>\n  <polyline points="390,260 640,260" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="640,260 631,256 631,264" fill="currentColor" stroke="none"/>\n  <text x="420" y="103" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="#10b981">1</text>\n  <text x="420" y="253" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="#10b981">1</text>\n  <text x="560" y="100" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">bus bit 1</text>\n  <text x="560" y="250" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">bus bit 0</text>\n  <text x="505" y="132" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11" fill="#10b981">BUS ← C</text>\n  <rect x="430" y="330" width="130" height="52" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <text x="495" y="352" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11" fill="currentColor">destination</text>\n  <text x="495" y="368" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11" fill="currentColor">decoder 2 × 4</text>\n  <polyline points="430,337 398,337" fill="none" stroke="#10b981" stroke-width="1.8"/>\n  <polygon points="398,337 406,333 406,341" fill="#10b981" stroke="none"/>\n  <text x="414" y="333" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="#10b981">A</text>\n  <polyline points="430,350 398,350" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.45"/>\n  <text x="414" y="346" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">B</text>\n  <polyline points="430,363 398,363" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.45"/>\n  <text x="414" y="359" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">C</text>\n  <polyline points="430,376 398,376" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.45"/>\n  <text x="414" y="372" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">D</text>\n  <polyline points="398,337 24,337 24,77 60,77" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.65"/>\n  <polygon points="60,77 51,73 51,81" fill="#10b981" stroke="none"/>\n  <text x="210" y="330" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="#10b981">load enable A (A ← BUS)</text>\n</svg>',
      },
    ],
    examples: [
      {
        title: 'Tracing a transfer through the MUX bus',
        problem: 'The four 2-bit registers of the bus hold A = 01, B = 00, C = 11, D = 10. The control sets S1S0 = 10 and enables the load input of A. Describe the complete transfer, then state what S1S0 and the destination code must be to accomplish R1-style transfers such as “the content of B replaces the content of D”.',
        steps: [
          { label: 'Step 1: Source selection', text: 'The MUX select code S1S0 = 10 addresses input 2, which is register C. Every MUX stage — one per bit position — routes its C input to the corresponding bus line, so the bus now carries the word **11**, C’s content.' },
          { label: 'Step 2: Destination capture', text: 'Exactly one load enable is asserted — A’s. At the next clock edge A ← BUS = 11. In the full two-step notation: **BUS ← C, A ← BUS**; simplified: **A ← C**.' },
          { label: 'Step 3: Route B into D', text: 'To move B’s word: set the select to 01 (source B) and assert D’s load. The bus carries B = 00 and D captures it: BUS ← B, D ← BUS. On a wider machine the identical select routes all 16 bits at once, because each bit position has its own MUX driven by the same $S_1 S_0$.' },
          { label: 'Step 4: What never happens', text: 'No other register’s load is enabled, so the other registers hold their values regardless of what rides the bus; and no second source can be gated on simultaneously — one select code, one source word, per period.' },
        ],
        result: 'Source = a select code into the MUX tree, destination = a load enable from the decoder: two independent choices per clock period, and any register-to-register transfer is one statement.',
      },
      {
        title: 'MUX bus versus tri-state bus',
        problem: 'Designers must connect four 16-bit registers to a common path. (a) Size the multiplexer construction. (b) Size the three-state alternative. (c) What happens in each construction if the control logic accidentally selects two sources at once?',
        steps: [
          { label: 'Step 1: The MUX count', text: 'Each bit line needs one 4-input MUX, so 16 multiplexers of 4×1, all sharing two select lines $S_1 S_0$. Gate input count: roughly $16 \\times 4 = 64$ AND-terms plus the OR stages — entirely inside the chip, occupying area but no long wires.' },
          { label: 'Step 2: The tri-state count', text: 'Each register output bit goes through one three-state buffer: $4 \\times 16 = 64$ buffers, enabled four at a time (one register = 16 enables). The bus itself is just 16 wires — the construction buys nothing but wires and enables, which is why it shines for long, shared physical paths.' },
          { label: 'Step 3: The double-selection failure', text: 'MUX version: a malformed select code simply picks one (wrong) source — the wrong register is read, but nothing burns. Tri-state version: two drivers fight over the wire — contention. The result is an undefined level and large shoot-through currents; real parts specify a bus turnaround gap for exactly this reason.' },
          { label: 'Step 4: The verdict', text: 'On-chip, where wires are short, the MUX tree wins on predictability and testability; across a board or backplane, tri-state wins on wire count. The basic computer of this book uses the MUX construction inside its processor.' },
        ],
        result: 'Two implementations of “one source at a time”: combinational selection (safe, costs gates) versus electrical disconnection (cheap, demands enable discipline).',
      },
      {
        title: 'Reading and writing through AR',
        problem: 'The memory has 4096 words of 16 bits. AR holds 1AF (hex), DR holds 08C2, and M[1AF] currently holds 0F0F. Trace the read DR ← M[AR], then the write M[AR] ← DR, and state how many address-decode lines the memory unit needs and why AR is 12 bits wide.',
        steps: [
          { label: 'Step 1: Address decoding', text: 'AR = 0001 1010 1111 (12 bits). The memory’s internal 12-to-4096 decoder asserts exactly word-select line $1AF_{16} = 431_{10}$; all other 4095 word lines stay low.' },
          { label: 'Step 2: The read', text: 'With the read strobe, the selected word’s 16 bits drive the memory outputs: DR ← M[AR] loads 0F0F. Memory content is unchanged — a read is non-destructive. DR’s old value 08C2 is simply overwritten.' },
          { label: 'Step 3: The write', text: 'With AR unchanged and the write strobe, the 16 bits on the memory’s data inputs are stored into the selected cell: M[1AF] ← 08C2, destroying the 0F0F that was there. Only the addressed word changes.' },
          { label: 'Step 4: Widths', text: '4096 words need $\\log_2 4096 = 12$ address bits — hence AR (and PC) are 12-bit registers while data registers (DR, AC, IR, TR) are 16-bit: the address and data sides of the machine have different natural widths.' },
        ],
        result: 'One address register, two strobes: DR ← M[AR] and M[AR] ← DR are the only memory statements needed — every instruction of the basic computer is built from them.',
      },
    ],
    keyTakeaways: [
      'The common bus replaces $k(k-1)$ point-to-point register paths with n shared wires plus selection hardware, at the price of one word per clock period.',
      'A MUX bus for four registers uses one 4×1 multiplexer per bit position, all sharing the two select lines $S_1 S_0$; the construction extends word-by-word to any width.',
      'The two-step statement BUS ← C, R1 ← BUS exposes the two independent choices — MUX-select the source, load-enable the destination.',
      'A three-state buffer outputs 0, 1 or Z; a tri-state bus selects a source by enabling exactly one driver, and contention is the failure mode.',
      'Memory is a giant addressed register file: DR ← M[AR] reads, M[AR] ← DR writes, and AR’s 12 bits select 1 of 4096 words in the basic computer.',
      'The one-word-per-period rule serializes every instruction — the dedicated PC incrementer is the classic bypass.',
    ],
    quiz: [
      {
        q: 'Four registers share a multiplexer common bus. How many select lines choose the source register?',
        options: ['One line per register (4 lines)', 'Two lines $S_1 S_0$, since $\\lceil \\log_2 4 \\rceil = 2$', 'Four lines, one per bit of the word', 'None — the source is fixed'],
        answer: 1,
        explanation: 'Selecting one of $k$ sources needs $\\lceil \\log_2 k \\rceil$ lines: two select bits encode the four codes 00, 01, 10, 11.',
      },
      {
        q: 'Four 16-bit registers drive a multiplexer bus. How many 4×1 multiplexers does the bus need?',
        options: ['4 — one per register', '2 — one per select line', '16 — one per bit position of the word', '64 — one per register-bit pair'],
        answer: 2,
        explanation: 'Each bus line (bit position) needs one 4-input MUX; a 16-bit word therefore needs 16 MUX stages, all sharing $S_1 S_0$.',
      },
      {
        q: 'With the select code S1S0 = 10 on a bus wired A = 00, B = 01, C = 10, D = 11 as source codes, and only register A’s load enabled, which transfer executes?',
        options: ['A ← B', 'A ← C', 'C ← A', 'A ← A'],
        answer: 1,
        explanation: 'S1S0 = 10 addresses source C, so the bus carries C’s word; the enabled load captures it into A: BUS ← C, A ← BUS.',
      },
      {
        q: 'A three-state buffer whose enable input is 0 presents at its output:',
        options: ['Logic 0', 'Logic 1', 'A high-impedance Z state — electrically disconnected from the wire', 'Its input, inverted'],
        answer: 2,
        explanation: 'Enable = 0 turns the driver off: the output neither sources nor sinks current, releasing the shared wire to whichever buffer IS enabled.',
      },
      {
        q: 'What happens if two three-state buffers driving the same bus line are enabled simultaneously?',
        options: ['The bus carries the AND of the two inputs', 'The bus carries the OR of the two inputs', 'The two drivers contend: the level is undefined and damaging currents can flow', 'Nothing — the wire automatically arbitrates'],
        answer: 2,
        explanation: 'One buffer tries to pull high, the other low: contention. Real designs insert turnaround gaps and assert exactly one enable to avoid it.',
      },
      {
        q: 'The microoperation DR ← M[AR] means:',
        options: ['The address in AR is copied into DR', 'The memory word at the address held in AR is loaded into DR', 'DR is added to the memory word in AR', 'The memory word addressed by DR is copied into AR'],
        answer: 1,
        explanation: 'Brackets index memory by a register: M[AR] is the word whose address AR holds; the read places it in DR without altering memory.',
      },
      {
        q: 'The basic computer’s AR is 12 bits. How many words can the memory hold, and what does the memory’s internal decoder look like?',
        options: ['2048 words, a 12-to-2048 decoder', '4096 words, a 12-to-4096 word-select decoder', '16 words, a 4-to-16 decoder', '65536 words, a 16-to-65536 decoder'],
        answer: 1,
        explanation: 'A k-bit address selects $2^k$ words: $2^{12} = 4096$ words, one of 4096 decode lines asserted per access.',
      },
      {
        q: 'Which microoperation stores the accumulator into memory, and what is its bus cost?',
        options: ['M[AR] ← AC — one bus period, the write path sourcing AC directly (the STA execute step)', 'AC ← M[AR] — one bus period', 'M[AR] ← AC — it cannot be done; memory only reads', 'AR ← AC — the address is stored in memory'],
        answer: 0,
        explanation: 'The write statement sources the data register: STA executes as M[AR] ← AC in a single execute timing state.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Wires, drivers and the shared path',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Point-to-point versus shared-bus wiring',
            body: 'The bus is a solution to an arithmetic problem. With $k$ registers and $n$-bit words, dedicated wiring must connect every ordered source–destination pair: $k(k-1)$ paths of $n$ wires each — $nk(k-1)$ wires total, quadratic in the register count. Eight registers of 16 bits already want $8 \\times 7 \\times 16 = 896$ wires and 56 separate load-enable networks; sixteen registers want 3840. The common bus instead runs $n$ shared wires, taps every register onto them ($nk$ connection points), and adds selection hardware of size $O(nk)$ — linear in both dimensions. The savings compound with scale, and the price is equally explicit: at most one transfer per period, so the total transfer bandwidth of the machine is capped at $n$ bits per clock no matter how idle the other registers are. Quadratic wire count traded for linear serialization is the founding trade of computer organization, reappearing at every scale from this 4-register bus to chip-to-chip interconnect.',
          },
          {
            kind: 'para',
            heading: 'The physics of the Z state',
            body: 'The three-state buffer’s Z output is an electrical fact, not a logic value: both the pull-up and pull-down transistors are off, so the driver presents a high impedance and sources no current. The shared wire then holds whatever charge was last placed on it, drifting only through leakage — a word can briefly “sit” on an undriven bus, which is why tri-state systems specify turn-off-before-turn-on timing gaps (bus turnaround) rather than risk two drivers overlapping by a nanosecond. Contention is genuinely destructive: two complementary drivers form a near-short from supply to ground through both output stages, dissipating heat in transistors never designed for it, and the logical level during the fight is whichever driver happens to be stronger. The wired-AND variant — open-collector outputs with a shared pull-up resistor — gives the same electrical sharing with the AND semantics as a bonus, which is how I2C gets multi-master arbitration for free: a master writing 1 that reads 0 on the wire knows another master is talking and backs off.',
          },
          {
            kind: 'example',
            heading: 'Scheduling transfers on the one-word bus',
            body: 'Take the fetch of an ADD: AR ← PC (bus use 1); IR ← M[AR] together with PC ← PC + 1 (the memory read occupies the bus into IR, but the incrementer is a dedicated path, so it rides along free — bus use 2); AR ← IR(0–11) (bus use 3); DR ← M[AR] (bus use 4); AC ← AC + DR (the ALU reads its operands through the processor’s internal selection paths of Chapter 9, not the common bus — bus use 0). Total: four bus-occupying periods plus one free rider, hence five clock periods, exactly the T0–T5 count that Section 8.4 derives. The scheduling rule generalizes: list every microoperation, count one period per bus occupancy, allow any transfer with a private path (PC increment, ALU internal operation, a status flip-flop set) to share a period with one bus user. Every CPI claim about the basic computer can be audited on a napkin this way — and every speedup proposal reduces to either adding a private path or adding a second bus.',
          },
          {
            kind: 'para',
            heading: 'Memory as the addressed register file',
            body: 'The statement DR ← M[AR] quietly unifies two worlds: registers, selected by wiring, and memory, selected by a stored number. A memory of $2^k$ words is a register file whose select lines are driven by a k-bit register instead of a control wire — which is why the same RTL symbol family covers both, and why Mano can specify an entire computer before ever drawing a memory cell. The economy deepens on reflection: the address itself is data, so programs can compute which register (memory word) a transfer touches — the entire edifice of pointers, arrays and linked structures is AR ← <computed address> followed by DR ← M[AR]. The cost side is equally structural: because the address must be stable in AR before the strobe, every memory access pays at least one address-setup period, and because the bus carries one word, an address and its data cannot travel together — the two-cycle memory rhythm (aim, then read) that Section 8.4’s timing makes explicit is inherited by every later machine, down to the address/data phase split of modern DRAM interfaces.',
          },
          {
            kind: 'remark',
            heading: 'The serial bus: width one',
            body: 'Section 8.1’s serial transfer — one wire, one bit per clock, n pulses per word — is a bus of width one, and it deserves its place in the family photo because it marks the extreme of the wire-versus-time trade. The parallel common bus spends $n$ wires to finish in one period; the serial link spends one wire and finishes in $n$. When wires are expensive relative to time — between chips in 1979, between boards, over a cable — serial wins, and the entire later history of interconnect is the boundary walking toward serial: wide parallel buses (IDE, parallel SCSI, front-side buses) were progressively replaced by narrow fast serial links (PCIe, SATA, SerDes) once signaling speeds made many parallel wires impossible to skew-match. Mano’s shift-register serial transfer, with its one-bit adder cycling n times, is thus not a historical curiosity but the first appearance of the design point the industry eventually adopted everywhere.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'The shared path under research pressure',
        blocks: [
          {
            kind: 'para',
            heading: 'Asynchronous buses and timing closure',
            body: 'The common bus of this section is synchronous: a global clock guarantees that source, wire and destination settle within one period. As clock rates rose, the wire itself became the bottleneck — an RC line crossing a modern die has tens of picoseconds of flight time and keeps growing with every process node, while the period shrank below the skew of distributing a single clock. The research responses define a taxonomy: source-synchronous interfaces ship the clock alongside the data so the receiver times against a local copy; pipelined buses register the wire mid-travel and trade latency for frequency; and globally-asynchronous locally-synchronous (GALS) designs abandon the global clock entirely, connecting synchronous islands through handshake-based asynchronous links. Handshakes bring their own pathology: a request crossing clock domains can violate setup and hold at the receiving flip-flop, entering **metastability** — an output that hangs between 0 and 1 for an unbounded time. The classical cure is the two-flop synchronizer, which reduces (never eliminates) failure probability exponentially per synchronization stage; the bounded-time synchronizer problem remains actively studied because no physical law lets a device resolve a metastable state by a deadline.',
          },
          {
            kind: 'application',
            heading: 'From the common bus to networks-on-chip',
            body: 'The one-word-per-period rule of this section is a bandwidth ceiling, and industry hit it twice. Off-chip, the shared backplane (Unibus, Multibus, ISA, PCI) saturated as processors and devices multiplied; split-transaction protocols (PCI-X, then PCI Express) separated the request from the response so the bus was not held during a memory access, then replaced the shared wire entirely with point-to-point links and packet switching. On-chip, the same story repeated a decade later: the single shared AMBA bus of 1990s SoCs gave way to matrix crossbars (AMBA AXI with multiple outstanding transactions, per-master read and write channels, and credit-based flow control) and then to networks-on-chip — router tiles and packet routing replacing Mano’s multiplexer tree exactly as packet switching replaced circuit switching in telecoms. The basic computer’s select lines $S_1 S_0$ became, at scale, packet headers; the load enable became a virtual-channel grant; the turnaround gap became credit return. The conceptual skeleton of this section — arbitrate a shared word path among many registers — survives intact under several orders of magnitude of bandwidth.',
          },
          {
            kind: 'para',
            heading: 'Where tri-state went',
            body: 'Tri-state outputs once dominated bus design, and then quietly vanished from die interiors. Process scaling made them a liability: a tri-state driver left enabled during power sequencing or scan test can contend with a neighbor and, at nanometer geometries, the electromigration and latch-up margins no longer tolerate it; testability also suffers, because a floating node holds stale charge that a tester cannot observe. On-die shared paths are therefore built as multiplexer trees — this section’s first construction — and tri-state survives only where the wire leaves the package: legacy board buses, and open-drain shared lines such as I2C, where the wired-AND behavior doubles as an arbitration mechanism. The successor technologies in turn reintroduced shared-wire disciplines under new names: the USB single-ended bus, differential pairs with tri-state-like idle states, and modern high-speed links that never share at all. The pedagogical point is that Mano’s two constructions were not arbitrary: they are the two exhaustive answers to “how does a wire carry one of many sources” — select before the wire (MUX) or disconnect the others from it (tri-state) — and every later interconnect is one of these two answers, replicated and accelerated.',
          },
          {
            kind: 'para',
            heading: 'After the flat M[AR] abstraction',
            body: 'The notation M[AR] presents memory as flat, uniform, and one access away. All three assumptions became research programs. Uniformity fails first in the memory hierarchy: the flat address space is served by caches, and the address itself is reinterpreted as tag, index and offset — the decoder tree of this section literally reappears inside every cache as the index decoder selecting a set. “One access away” fails with latency: a cache miss costs hundreds of cycles, which is why compilers and hardware reorder loads far from uses — the address-setup rhythm (aim AR, then read) that Section 8.4 bakes into the instruction cycle becomes, at scale, the load-use pipeline hazard and the out-of-order load scheduler. And flatness fails with multiprocessors: once two processors share M, “which register holds the word” becomes the cache-coherence problem — the single-driver discipline of this section, generalized to many drivers of many cached copies, with the bus snoop or the directory playing the arbiter that the load-enable decoder played here. The OS courses’ virtual memory then removes even the arithmetic: M[AR] becomes M-translated[AR]. The bracket pair turns out to be the most heavily engineered abstraction in computer architecture.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 8.3
  {
    sectionId: 'mano-ch8-s3',
    readingTime: 9,
    intro: 'A computer is a machine that executes instructions — but before it can execute one, it must be able to name one. The stored-program idea puts instructions in memory as binary words, indistinguishable from data until the control unit claims them; the instruction code is the convention that splits such a word into an operation, an addressing mode and an address. This section lays out the complete instruction set of the basic computer: six memory-reference instructions that move words between memory and the accumulator, twelve register-reference instructions that clear, complement, shift and test it, and the input–output pair that talks to the two peripherals. Every one of them will meet its timing signals in Section 8.4.',
    objectives: [
      'Explain the stored-program concept and why instructions and data share one memory',
      'Read the 16-bit instruction word: opcode, mode bit I, and the 12-bit address field',
      'Compute effective addresses for direct and indirect addressing',
      'Execute each memory-reference instruction (AND, ADD, LDA, STA, BUN, BSA, ISZ) in RTL',
      'List the register-reference instructions and the I/O instructions with their control conditions r and p',
      'Assemble the complete instruction table and read a machine-language program from it',
    ],
    concepts: [
      {
        term: 'The stored program',
        kind: 'definition',
        statement: 'In a **stored-program computer**, instructions live in the same read-write memory as data. The control unit fetches the word whose address is in the program counter, treats it as an instruction for one cycle, and moves on. There is no hardware distinction between an instruction word and a data word — only the timing of their use.',
        detail: 'The consequence is total flexibility: programs can be loaded, changed and even written by other programs, which is everything from assemblers to operating systems to the software you are reading this in. The price is vigilance — nothing stops a runaway program counter from fetching a number as an instruction — and the entire discipline of protected memory exists to manage that risk.',
      },
      {
        term: 'The instruction word',
        kind: 'notation',
        statement: 'The basic computer\'s instruction word is 16 bits, divided as: **bits 0–11 — the address field**, naming one of $2^{12} = 4096$ words of memory; **bits 12–14 — the operation code (opcode)**, one of eight codes $D_0$–$D_7$ from the $3 \\times 8$ decoder; **bit 15 — the mode bit $I$**. In RTL: $\\mathrm{IR}(0\\text{–}11)$ address, $\\mathrm{IR}(12\\text{–}14)$ opcode, $I = \\mathrm{IR}(15)$.',
        detail: 'The decoder outputs $D_0, \\ldots, D_7$ are combinational functions of the opcode bits, available the moment IR is loaded. Codes $D_0$–$D_6$ select the seven memory-reference instructions; code $D_7$ is split by the mode bit into two families: $I = 0$ gives the register-reference instructions (recognized by the control condition $r = D_7 I\' T_3$), and $I = 1$ the input–output instructions ($p = D_7 I T_3$). For the memory-reference instructions the same bit $I$ means direct ($I = 0$) or indirect ($I = 1$) addressing — one physical bit, three meanings, disambiguated by which opcode accompanies it.',
      },
      {
        term: 'Direct and indirect addressing',
        kind: 'definition',
        statement: 'For a memory-reference instruction, the **effective address** is where the operand actually lives. **Direct** ($I = 0$): the effective address is the address field itself. **Indirect** ($I = 1$): the address field names a word that *contains* the effective address — the machine first reads $M[\\mathrm{address}]$ and uses its contents as the operand\'s location.',
        detail: 'Indirection costs one extra memory cycle (the extra microoperation $\\mathrm{AR} \\leftarrow M[\\mathrm{AR}]$ in Section 8.4\'s timing) but buys pointer power: the same instruction can act on different words at different times because a single memory update redirects it. This is the ancestor of every pointer, reference and link in modern computing — the hardware-level mechanism that makes variables indirect.',
      },
      {
        term: 'Memory-reference instructions',
        kind: 'method',
        statement: 'The seven instructions that carry a memory address, with their opcode and execution microoperations (shown from the first execute timing state, after address resolution): **AND ($D_0$)** — $\\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$, then $\\mathrm{AC} \\leftarrow \\mathrm{AC} \\wedge \\mathrm{DR}$; **ADD ($D_1$)** — $\\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$, then $\\mathrm{AC} \\leftarrow \\mathrm{AC} + \\mathrm{DR}$, $E \\leftarrow \\mathrm{carry}$; **LDA ($D_2$)** — $\\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$, then $\\mathrm{AC} \\leftarrow \\mathrm{DR}$; **STA ($D_3$)** — $M[\\mathrm{AR}] \\leftarrow \\mathrm{AC}$; **BUN ($D_4$)** — $\\mathrm{PC} \\leftarrow \\mathrm{AR}$ (unconditional branch); **BSA ($D_5$)** — $M[\\mathrm{AR}] \\leftarrow \\mathrm{PC}$, $\\mathrm{PC} \\leftarrow \\mathrm{AR} + 1$ (branch and save return); **ISZ ($D_6$)** — $\\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$, $\\mathrm{DR} \\leftarrow \\mathrm{DR} + 1$, $M[\\mathrm{AR}] \\leftarrow \\mathrm{DR}$, and if $\\mathrm{DR} = 0$ then $\\mathrm{PC} \\leftarrow \\mathrm{PC} + 1$.',
        detail: 'Notice the grammar: every instruction that reads memory stages it through DR; every one that writes memory uses AR as the pointer and AC (or DR) as the source; and every sequence ends with SC ← 0 to force the next fetch. The BSA convention is the classic return link: the subroutine\'s first word holds the return address, the body follows from the next word, and an indirect BUN through that first word returns. ISZ is the loop primitive — increment a counter in memory and skip the next instruction when it wraps to zero.',
      },
      {
        term: 'Register-reference instructions',
        kind: 'method',
        statement: 'Twelve instructions with opcode $D_7$ and $I = 0$, all executed in a single timing state under $r = D_7 I\' T_3$, each decoded from one bit of $\\mathrm{IR}(0\\text{–}11)$: **CLA** $\\mathrm{AC} \\leftarrow 0$; **CLE** $E \\leftarrow 0$; **CMA** $\\mathrm{AC} \\leftarrow \\overline{\\mathrm{AC}}$; **CME** $E \\leftarrow E\'$; **CIR** — circular shift right through $E$; **CIL** — circular shift left through $E$; **INC** $\\mathrm{AC} \\leftarrow \\mathrm{AC} + 1$; **SPA** — skip if AC positive ($\\mathrm{AC}(15) = 0$); **SNA** — skip if AC negative; **SZA** — skip if AC is zero; **SZE** — skip if $E = 0$; **HLT** — stop the clock ($S \\leftarrow 0$).',
        detail: 'Each instruction bit $B_i = \\mathrm{IR}(i)$ is ANDed with $r$ to form its own control function, so any one of the twelve fires alone: no address is fetched and memory is not touched — the register file is the whole stage. The circular shifts route bit 0 through E to bit 15 (CIR) or bit 15 through E to bit 0 (CIL), making E a one-bit extension that carries multiword shifts and multiplications. The skip instructions do not branch anywhere — they increment PC once more, quietly dropping the next instruction from the stream; paired with a follow-up BUN they build conditional branches.',
      },
      {
        term: 'Input–output instructions',
        kind: 'method',
        statement: 'With opcode $D_7$ and $I = 1$, executed under $p = D_7 I T_3$: **INP** — $\\mathrm{AC}(0\\text{–}7) \\leftarrow \\mathrm{INPR}$, $\\mathrm{FGI} \\leftarrow 0$ (bring a typed character into the low byte of AC and clear the input flag); **OUT** — $\\mathrm{OUTR} \\leftarrow \\mathrm{AC}(0\\text{–}7)$, $\\mathrm{FGO} \\leftarrow 0$ (send the low byte to the printer); **ION** — $\\mathrm{IEN} \\leftarrow 1$ (enable interrupts); **IOF** — $\\mathrm{IEN} \\leftarrow 0$ (disable them).',
        detail: 'The 8-bit input register INPR and output register OUTR meet the 16-bit AC at its low half — characters, not words, are what peripherals exchange. The flags FGI and FGO are the handshakes: a peripheral sets its flag when it has something new, and the instruction that consumes the data clears it. IEN is the master switch for the interrupt cycle of Section 8.4 — with it off, the processor never notices the flags; with it on, a set flag hijacks the cycle at the next instruction boundary.',
      },
      {
        term: 'Reading the instruction table',
        kind: 'insight',
        statement: 'The complete set is best held as one table: 7 memory-reference instructions (opcode ≠ $D_7$, using $I$ for direct/indirect), 12 register-reference ($D_7 I\' T_3$, bits of IR), and 4 input–output ($D_7 I T_3$) — 23 instructions total, and with them the basic computer is Turing-complete.',
        detail: 'It is worth pausing on how little this is. Memory is AND, OR (via masks), add, load and store; control is BUN, BSA and ISZ with three skips; arithmetic beyond ADD is synthesized — complement-and-increment builds subtraction, shift-and-add builds multiplication. A minimal but honest computer, small enough to trace every wire, complete enough to compute anything computable — which is precisely why it makes a good teacher.',
      },
    ],
    figures: [
      {
        caption: 'The 16-bit instruction word and its decoder: bits 0–11 form the address field, bits 12–14 enter the $3 \\times 8$ decoder whose outputs $D_0$–$D_6$ select the memory-reference instructions, and $D_7$ splits by the mode bit $I$ into the register-reference family ($r = D_7 I\' T_3$) and the input–output family ($p = D_7 I T_3$).',
        afterConcept: 2,
        svg: '<svg viewBox="0 0 760 420" width="100%" role="img" aria-label="A 16-bit instruction register drawn as a long box divided into the address field bits 0 to 11, the opcode field bits 12 to 14, and the mode bit I at bit 15, with the opcode feeding a three-by-eight decoder producing D0 through D7 and D7 gated by I and I-prime into the register-reference and input-output families">\n  <text x="380" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">the 16-bit instruction word in IR</text>\n  <rect x="90" y="46" width="580" height="52" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>\n  <rect x="90" y="46" width="435" height="52" fill="#10b981" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <rect x="525" y="46" width="100" height="52" fill="#f59e0b" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/>\n  <rect x="625" y="46" width="45" height="52" fill="#f43f5e" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/>\n  <text x="307" y="76" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">address (0–11)</text>\n  <text x="575" y="76" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">opcode</text>\n  <text x="647" y="76" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13" fill="currentColor">I</text>\n  <text x="307" y="116" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor" opacity="0.75">12 bits → 4096 words</text>\n  <text x="575" y="116" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor" opacity="0.75">bits 12–14</text>\n  <text x="647" y="116" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor" opacity="0.75">bit 15</text>\n  <polyline points="575,98 575,150" fill="none" stroke="#f59e0b" stroke-width="1.8"/>\n  <polygon points="575,155 570,146 580,146" fill="#f59e0b" stroke="none"/>\n  <rect x="490" y="158" width="170" height="46" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <text x="575" y="186" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" fill="currentColor">3 × 8 decoder</text>\n  <text x="672" y="182" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor" opacity="0.8">D0…D7</text>\n  <polyline points="647,98 647,248" fill="none" stroke="#f43f5e" stroke-width="1.6" stroke-dasharray="4 4" opacity="0.8"/>\n  <text x="660" y="240" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="#f43f5e">I</text>\n  <text x="672" y="252" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor" opacity="0.7">I′</text>\n  <rect x="60" y="240" width="230" height="44" fill="#10b981" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <text x="175" y="267" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11.5" fill="currentColor">memory-reference D0–D6</text>\n  <text x="175" y="304" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor" opacity="0.7">AND ADD LDA STA BUN BSA ISZ</text>\n  <rect x="330" y="240" width="230" height="44" fill="#f59e0b" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <text x="445" y="261" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11.5" fill="currentColor">register-reference</text>\n  <text x="445" y="277" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor" opacity="0.75">r = D7 · I′ · T3</text>\n  <rect x="330" y="310" width="230" height="44" fill="#f43f5e" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/>\n  <text x="445" y="331" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11.5" fill="currentColor">input–output</text>\n  <text x="445" y="347" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor" opacity="0.75">p = D7 · I · T3</text>\n  <polyline points="647,262 560,262" fill="none" stroke="currentColor" stroke-width="1.4"/>\n  <polygon points="560,262 569,258 569,266" fill="currentColor" stroke="none"/>\n  <text x="600" y="256" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">I′</text>\n  <polyline points="647,262 647,332 560,332" fill="none" stroke="currentColor" stroke-width="1.4"/>\n  <polygon points="560,332 569,328 569,336" fill="currentColor" stroke="none"/>\n  <text x="600" y="326" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">I</text>\n  <polyline points="490,181 420,181 420,240" fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.7"/>\n  <text x="452" y="174" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">D7</text>\n  <polyline points="490,175 300,175 300,240" fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.7"/>\n  <text x="352" y="168" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="currentColor">D0–D6</text>\n  <text x="175" y="380" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">23 instructions — enough for a complete, traceable computer</text>\n</svg>',
      },
    ],
    examples: [
      {
        title: 'Decoding an instruction word',
        problem: 'The instruction register holds $\\mathtt{1011\\ 0100\\ 0011\\ 0010}$. Decode it completely.',
        steps: [
          { label: 'Split the fields', text: 'Bits 15 = 1 (the I bit), bits 14–12 = $011$ (the opcode), bits 11–0 = $0100\\ 0011\\ 0010 = 1074$ (the address).' },
          { label: 'Identify the opcode', text: 'The 3-bit opcode $011$ decodes to $D_3$ — the STA instruction, store the accumulator.' },
          { label: 'Resolve the mode', text: 'The opcode is a memory-reference code ($D_3 \\ne D_7$), so bit 15 is the addressing mode: $I = 1$ means indirect addressing.' },
          { label: 'Write the instruction', text: 'STA 1074, I — "store AC into the memory word whose address is found (indirectly) in location 1074." If $M[1074] = 26$, the word lands at address 26.' },
        ],
        result: 'STA with indirect addressing through location 1074. The same 16 bits, read by a different opcode, would be a number — meaning lives in the decode, not the pattern.',
      },
      {
        title: 'Direct versus indirect effective address',
        problem: 'Memory contains: $M[300] = 400$ and $M[400] = 907$. An LDA instruction references address 300. What loads into AC if (a) $I = 0$, (b) $I = 1$?',
        steps: [
          { label: 'Direct: the field is the address', text: 'With $I = 0$ the effective address is 300 itself: $\\mathrm{DR} \\leftarrow M[300] = 400$, then $\\mathrm{AC} \\leftarrow 400$.' },
          { label: 'Indirect: the field is a pointer', text: 'With $I = 1$ the machine first reads the pointer: $\\mathrm{AR} \\leftarrow M[300] = 400$. Now the effective address is 400.' },
          { label: 'Fetch through the resolved address', text: 'Then $\\mathrm{DR} \\leftarrow M[400] = 907$ and $\\mathrm{AC} \\leftarrow 907$ — one extra memory cycle bought a level of indirection.' },
          { label: 'Count the cycles', text: 'Direct: one memory access for the operand. Indirect: two — the pointer fetch plus the operand fetch — the price the addressing mode charges.' },
        ],
        result: '(a) AC = 400; (b) AC = 907. Indirection is the hardware ancestor of the pointer: update $M[300]$ and the same instruction now acts elsewhere in memory.',
      },
      {
        title: 'Building subtraction from the instruction set',
        problem: 'The basic computer has no subtract instruction. Show the program, starting at address 100, that computes $X - Y$ (leaving the result in AC) given that location 200 holds $X$ and 201 holds $Y$, using the fact that $X - Y = X + \\overline{Y} + 1$.',
        steps: [
          { label: 'Fetch X', text: 'LDA 200 — $\\mathrm{AC} \\leftarrow M[200] = X$.' },
          { label: 'Complement', text: 'CMA — $\\mathrm{AC} \\leftarrow \\overline{X}$... careful: we need $\\overline{Y}$, not $\\overline{X}$, so reorder — load Y first: LDA 201 gives AC = Y, then CMA gives AC = $\\overline{Y}$.' },
          { label: 'Increment', text: 'INC — $\\mathrm{AC} \\leftarrow \\overline{Y} + 1 = -Y$ (the two\'s complement).' },
          { label: 'Add X', text: 'ADD 200 — $\\mathrm{AC} \\leftarrow (-Y) + X$, with E receiving the carry (a discarded carry here means the true result is positive in the two\'s-complement reading).' },
          { label: 'The program listing', text: '100: LDA 201 · 101: CMA · 102: INC · 103: ADD 200 · 104: HLT — four instructions, and every one of them is a single line of RTL.' },
        ],
        result: 'AC holds $X - Y$ after four instructions: the instruction set\'s arithmetic gap is closed by two\'s-complement algebra wearing microoperations — exactly what the ALU of the next chapter hard-wires.',
      },
      {
        title: 'A loop with ISZ',
        problem: 'Write a routine that repeats a body 10 times, with the iteration counter kept at memory location 30 and the loop body starting at address 40.',
        steps: [
          { label: 'Initialize', text: 'LDA a word containing $-10$ (two\'s complement), STA 30 — the counter counts up toward zero.' },
          { label: 'The loop head', text: 'At the top of the body (address 40 onwards) place the body\'s instructions, ending with: ISZ 30 — increments $M[30]$ and skips its next instruction only when the counter reaches 0.' },
          { label: 'Close the loop', text: 'After the ISZ, place BUN 40 — executed while the counter has not wrapped, sending control back to the body; skipped exactly once, when the count finishes.' },
          { label: 'Trace the count', text: 'First pass: $-10 \\to -9$ (no skip, branch taken). Second: $-9 \\to -8$ … After the tenth increment: $-1 \\to 0$ — the zero condition fires, the BUN is skipped, and execution falls through past the loop.' },
        ],
        result: 'The ISZ + BUN pair is the basic computer\'s while-loop: an incrementing counter, a conditional skip, an unconditional branch — every high-level loop construct compiles down to this skeleton.',
      },
    ],
    keyTakeaways: [
      'Instructions are 16-bit words: bits 0–11 address (4096 words), bits 12–14 opcode, bit 15 the mode bit I.',
      'Opcode $D_7$ splits by I: register-reference ($r = D_7 I\' T_3$, twelve single-cycle operations on AC and E) and input–output ($p = D_7 I T_3$, INP, OUT, ION, IOF).',
      'For memory-reference instructions, I selects direct ($I=0$) or indirect ($I=1$) addressing; indirection costs one extra memory cycle and adds one level of pointer.',
      'Seven memory-reference instructions: AND, ADD, LDA, STA, BUN, BSA, ISZ — with BSA\'s stored return link and ISZ\'s increment-and-skip building subroutines and loops.',
      'Skip instructions (SPA, SNA, SZA, SZE) never branch by themselves: they bump PC once, and a following BUN turns the skip into a conditional branch.',
      '23 instructions suffice for a complete computer — subtraction, multiplication and everything else are synthesized from them by program.',
    ],
    quiz: [
      {
        q: 'The 12-bit address field of the basic computer can name how many memory words?',
        options: ['4096', '2048', '1024', '65536'],
        answer: 0,
        explanation: '$2^{12} = 4096$ words. Sixteen bits would give $2^{16} = 65536$, but four of the sixteen bits are spent on the opcode and the mode bit I.',
      },
      {
        q: 'The instruction word $\\mathtt{0011\\ 0100\\ 0000\\ 0110}$ decodes to:',
        options: ['STA 6, direct', 'STA 6, indirect', 'LDA 6, direct', 'AND 6, indirect'],
        answer: 0,
        explanation: 'Bit 15 = 0 (direct), bits 14–12 = $011$ = $D_3$ = STA, bits 11–0 = $0000\\ 0000\\ 0110$ = 6. So: store AC at address 6, directly.',
      },
      {
        q: 'With $M[50] = 200$ and $M[200] = 75$, the instruction ADD 50, I loads which value into the addend DR?',
        options: ['75', '200', '50', 'the instruction word itself'],
        answer: 0,
        explanation: 'Indirect addressing: the pointer fetch reads $M[50] = 200$, so the effective address is 200, and the operand fetched into DR is $M[200] = 75$ — two memory reads for one operand.',
      },
      {
        q: 'Which instruction stores the return address into memory as its main effect?',
        options: ['BSA', 'BUN', 'ISZ', 'STA'],
        answer: 0,
        explanation: 'BSA (Branch and Save Return Address) writes PC — which already points just past the BSA itself — into the target location and continues from the next word: the classic subroutine call link.',
      },
      {
        q: 'The control function $r = D_7 I\' T_3$ recognizes:',
        options: ['register-reference instructions', 'input–output instructions', 'all memory-reference instructions', 'the fetch phase'],
        answer: 0,
        explanation: 'Opcode $D_7$ with $I = 0$ (hence the $I\'$) at timing state $T_3$ selects the twelve register-reference instructions — each then decoded by a single bit of IR(0–11). The $I$ (not $I\'$) companion condition $p$ selects the I/O family.',
      },
      {
        q: 'ISZ skips the next instruction when:',
        options: ['the incremented memory word becomes zero', 'AC becomes zero', 'E is set', 'the address field is zero'],
        answer: 0,
        explanation: 'ISZ increments the memory word at AR and tests the *word*, not AC: the skip (an extra PC increment) fires exactly when the wrapped-around value hits 0000 — which is why counters are initialized to the negative of the trip count.',
      },
      {
        q: 'The pair CMA followed by INC computes:',
        options: ['the two\'s complement of AC', 'the one\'s complement of AC', 'AC + 1', 'a right shift of AC'],
        answer: 0,
        explanation: 'CMA complements every bit (one\'s complement) and INC adds one: together $\\overline{\\mathrm{AC}} + 1$, which is exactly negation in two\'s-complement arithmetic — the standard recipe for building subtraction from addition.',
      },
      {
        q: 'How many of the basic computer\'s instructions are memory-reference instructions?',
        options: ['7', '6', '12', '23'],
        answer: 0,
        explanation: 'Seven opcodes $D_0$–$D_6$ (AND, ADD, LDA, STA, BUN, BSA, ISZ) carry memory addresses; the eighth code $D_7$ is reserved for the register-reference and I/O families.',
      },
      {
        q: 'A BSA instruction is stored at address 100 (with the subroutine linked at address 300). After BSA completes, which address does the saved return slot hold?',
        options: ['101', '100', '300', '301'],
        answer: 0,
        explanation: 'PC was already incremented past the BSA during fetch, so it holds 101 — the instruction after the call. BSA stores that value (into the link slot at 300) and jumps to the word after the slot, 301, where the subroutine body begins.',
      },
      {
        q: 'The instructions SPA, SNA, SZA and SZE all act by:',
        options: ['incrementing PC once when their condition holds', 'branching to the address field', 'setting the E flip-flop', 'clearing AC'],
        answer: 0,
        explanation: 'Skips work by a single extra $\\mathrm{PC} \\leftarrow \\mathrm{PC} + 1$ — the next instruction (often a BUN) is passed over. Placed before any instruction, a skip converts it into a conditional.',
      },
    
      // PYQ-pattern: GATE 2017 — instruction word fields (rephrased)
      {
        q: "In the basic computer, a $16$-bit instruction word with a $12$-bit address carries which opcode and mode bits?",
        options: ["IR($0$–$11$) address, IR($12$–$14$) opcode, IR($15$) indirect bit", "IR($0$–$7$) opcode only", "IR($0$–$15$) all address", "IR($15$) opcode, rest data"],
        answer: 0,
        explanation: "**Step 1 — Given data:** $16$-bit word, $4096$-word memory needing $12$ address lines.\n**Step 2 — Rule:** low $12$ bits address memory; next $3$ select among $8$ operation decodes; top bit selects direct vs indirect.\n**Step 3 — Apply:** $D_0$..$D_7$ from IR($12$–$14$); $I$ = IR($15$); effective address $=$ IR($0$–$11$) or $M[$IR($0$–$11$)$]$.\n**Step 4 — Cross-check:** $D_7$ with $I = 0$ means register-reference, with $I = 1$ means input-output — twelve plus six operations from one decode.\n**Step 5 — Distractors:** opcode-only ignores addressing; all-address leaves no operation; swapped fields misplace $I$.\n**Step 6 — Conclude:** $12$ address, $3$ opcode, $1$ mode."
      },
      // PYQ-pattern: ISRO 2020 — BSA and ISZ behavior (rephrased)
      {
        q: "What do BSA (branch and save) and ISZ (increment and skip) each do to control flow?",
        options: ["BSA stores PC at the effective address then branches there plus $1$; ISZ increments memory and skips next if zero", "Both clear the accumulator", "BSA halts; ISZ shifts", "Both are input-output operations"],
        answer: 0,
        explanation: "**Step 1 — Given data:** memory-reference operations with effective address EA.\n**Step 2 — Rule:** BSA: $M[EA] \\leftarrow PC$, $PC \\leftarrow EA + 1$ (saves return, jumps to subroutine). ISZ: $M[EA] \\leftarrow M[EA] + 1$; if result $0$ then $PC \\leftarrow PC + 1$ (skip).\n**Step 3 — Apply:** BSA links subroutines; ISZ implements counted loops by skipping the branch-out when the counter hits zero.\n**Step 4 — Cross-check:** BSA takes $4$ cycles, ISZ $6$ (read, increment, write-back, test) — the longest direct instruction.\n**Step 5 — Distractors:** clearing belongs to CLA; halting is HLT; input-output uses $D_7 I$ lines.\n**Step 6 — Conclude:** save-and-branch versus increment-and-skip."
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Instruction sets as design decisions',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Why 3 + 1 + 12 bits',
            body: 'The field split is a budget negotiation. Twelve address bits give $2^{12} = 4096$ words — the memory the basic computer actually wires up. With three opcode bits, eight operations are addressable, which the design stretches to 23 instructions by overloading: $D_7$ plus the mode bit doubles into two families, and the twelve IR bits inside each family decode twelve more single-cycle operations ($2 \\times$ an implicit expansion worth 24 codes on one opcode). The general principle is an information-theoretic squeeze: an instruction wants to say *what*, *where* and *how to find it*, and the bit budget trades the three against each other. Real instruction sets answer the same squeeze with multi-byte formats — the deeper results below — but the trade-off surface (more opcodes vs longer addresses vs more modes) is already fully visible in these 16 bits.',
          },
          {
            kind: 'derivation',
            heading: 'The ISZ loop pattern',
            body: 'Why initialize the counter to $-n$ rather than $0$? Trace both. Counting up from 0 with a "skip when the limit is reached" test needs a comparison — and the basic computer has none. Counting from $-n$ uses the wraparound of two\'s-complement arithmetic as the test: each ISZ adds one, and after exactly $n$ increments the word is $-n + n = 0$, which the zero detector already tests for free. The pattern generalizes: any finite counter can be built from an incrementer and a zero flag, and any repetition from (increment, test, branch). Every for-loop you have ever written lowers to this three-instruction skeleton.',
          },
          {
            kind: 'application',
            heading: 'How real instruction sets grew',
            body: 'The basic computer\'s 23 instructions are the seed of a lineage. Its single accumulator becomes the register file of later machines — many operands, indexed by register fields that no longer fit in 16 bits, so formats lengthen: the x86 family grew from one-byte codes in 1978 to variable-length instructions up to 15 bytes today, while the RISC reaction (MIPS, SPARC, then RISC-V) froze the length at 32 bits and let the compiler do the squeezing. RISC-V\'s compressed 16-bit extension — which trades decode complexity for code density, exactly the basic computer\'s trade in reverse — is the modern echo of the 16-bit budget this section lives inside. The mode bit I, meanwhile, grew into whole addressing-mode fields: immediate, register, base+offset, scaled, PC-relative — each a way to compute the effective address before the operand is fetched.',
          },
          {
            kind: 'remark',
            heading: 'Why the accumulator died',
            body: 'One accumulator forces every computation through a single bottleneck — the implicit operand of nearly every instruction. Two-operand and three-operand formats (ADD R1, R2, R3) need register fields but pay for them with parallelism: the ALU reads two registers while a third result is written, with no serialization on one shared register. The basic computer\'s single-bus CPI accounting of Section 8.4 is the quantitative version of the same story — more named storage plus private paths means fewer forced waits. The accumulator survives only where silicon is counted in pennies: microcontrollers\' register-poor cores keep it alive.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Encodings, gaps and frontiers',
        blocks: [
          {
            kind: 'application',
            heading: 'Opcode assignment as coding theory',
            body: 'Fixed 3-bit opcodes give every instruction equal weight — an optimal code only if all operations are equally frequent, which measurements demolished decades ago (loads, branches and adds dominate). Variable-length encodings assign short codes to frequent instructions, exactly as Huffman coding assigns short codewords to frequent symbols; x86\'s byte-granular prefixes, ARM\'s Thumb-2 16/32-bit mix and RISC-V\'s compressed format are engineered Huffman trees, and instruction-length decoders — the hardware that must find instruction boundaries in a stream — are among the most validated logic on Earth, because a misparse is catastrophic. Research continues on where the frontier sits: a 2020s movement (RISC-V, and the "dark silicon" era\'s custom accelerators) argues for minimal fixed cores plus standard extensions, keeping the decode tree shallow precisely where the old families let it grow.',
          },
          {
            kind: 'para',
            heading: 'The semantic gap',
            body: 'An instruction set is a contract between hardware and compiler writers, and the friction between what programs want to say and what instructions can express is the **semantic gap**. The basic computer sits at one extreme — arithmetic and control so primitive that a subtraction is a four-instruction idiom. CISC closed the gap upward (instructions for procedure calls, string moves, loop primitives) until silicon budgets made compiled sequences of simple instructions cheaper than executed complex ones — the RISC insight, quantified by instruction mix studies (Hennessy and Patterson\'s quantitative approach). The gap now reappears higher up: vector instructions, crypto accelerators and matrix engines (GPU tensor cores, NPUs) encode in one instruction what a compiler loop once said in a thousand. Each generation rediscovers that an instruction is a cached decision about what the layer above will need.',
          },
          {
            kind: 'open',
            heading: 'Designing an open instruction set',
            body: 'Should instruction sets be owned at all? For four decades the dominant ISAs were proprietary architectures with sealed specifications, and the ecosystem paid in licensing, fragmentation and security monoculture (one binary format, one attack surface). RISC-V (2010–) reopened the question: an open, modular specification with a frozen base and optional standard extensions, governed by a foundation rather than a firm. Its unresolved research problems are live: extension versioning without breaking binaries, formal specification of the architecture contract (the RVW memory-consistency formalizations; Sail and KISA models), verification of out-of-order implementations against the spec, and the standards politics of vector-length-agnostic code. The deeper open question is whether open ISAs will do for processors what open source did for operating systems — or whether the bottleneck (fabrication, validation, performance culture) simply sits elsewhere.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 8.4
  {
    sectionId: 'mano-ch8-s4',
    readingTime: 9,
    intro: 'Everything the computer does, it does one clock pulse at a time. This section assembles the timing machinery that sequences the microoperations of the whole chapter into the living rhythm of the machine: a sequence counter raising timing signals $T_0, T_1, T_2, \\ldots$, a fetch phase that always runs the same three steps, a decode step that steers the remaining states, and per-instruction execute sequences that all end by zeroing the counter — pulling the machine back to fetch. The design closes with the interrupt cycle, the small hijack that lets a peripheral steal the machine between instructions. After this section, the basic computer is complete: every wire accounted for, every cycle named.',
    objectives: [
      'Explain the sequence counter SC, the timing signals $T_0$–$T_3$, and how SC ← 0 returns control to fetch',
      'Write the fetch and decode microoperations with their timing states',
      'Trace the effective-address step for indirect addressing',
      'Execute each memory-reference instruction\'s RTL sequence, state by state',
      'Explain how register-reference and I/O instructions execute in a single $T_3$ pulse',
      'Trace the interrupt cycle and the return-from-interrupt mechanism',
    ],
    concepts: [
      {
        term: 'The sequence counter and timing signals',
        kind: 'definition',
        statement: 'A 2-bit **sequence counter** SC, clocked like every register, feeds a $2 \\times 4$ decoder whose outputs are the **timing signals** $T_0, T_1, T_2, T_3$ — one-hot pulses, one per clock period, cycling while SC counts. The microoperation $\\mathrm{SC} \\leftarrow 0$ (written into every instruction\'s last step) resets the count, so the next pulse raises $T_0$ again: the fetch phase.',
        detail: 'A timing signal never acts alone: every control function is a product such as $D_1 T_4$ — opcode $D_1$ (it\'s an ADD) *and* timing $T_4$ (the fourth pulse of this cycle). The AND gate implementing that product is literally the enable on the microoperation\'s load lines. When an instruction needs more than four states, the design widens the counter — the indirect-address step uses $T_3$, and ISZ\'s full sequence runs to $T_5$; the book\'s extended machine allows up to $T_{15}$ before restarting. SC is the conductor\'s baton: the orchestra of registers only moves when it beats.',
      },
      {
        term: 'The fetch phase',
        kind: 'method',
        statement: 'Every instruction begins with the same three microoperations, whatever the instruction turns out to be: $$T_0\\colon\\ \\mathrm{AR} \\leftarrow \\mathrm{PC} \\qquad T_1\\colon\\ \\mathrm{IR} \\leftarrow M[\\mathrm{AR}],\\ \\ \\mathrm{PC} \\leftarrow \\mathrm{PC} + 1 \\qquad T_2\\colon\\ \\mathrm{AR} \\leftarrow \\mathrm{IR}(0\\text{–}11),\\ \\ I \\leftarrow \\mathrm{IR}(15)$$ while the $3 \\times 8$ decoder raises the matching $D_i$ from bits $\\mathrm{IR}(12\\text{–}14)$ combinationally.',
        detail: 'Note the free rider: PC increments in the same state as the instruction fetch, because the incrementer is a dedicated path and the bus carries only the memory word into IR. And note what $T_2$ does not do: the address field moves into AR immediately, so a direct-address instruction is already aimed at its operand; only indirect ones need one more step. Fetch is deliberately dumb — identical for all 23 instructions — which is what makes the machine simple to time and, later, what makes pipelining it so natural.',
      },
      {
        term: 'The indirect address step',
        kind: 'method',
        statement: 'If the fetched instruction is a memory-reference instruction with $I = 1$, one extra state resolves the pointer: $$T_3\\colon\\ \\mathrm{AR} \\leftarrow M[\\mathrm{AR}]$$ — the word at the address field is read and itself installed as the effective address. Direct instructions ($I = 0$) skip this state entirely and begin executing at $T_3$.',
        detail: 'The two paths reunite: after the (possibly skipped) pointer step, AR holds the effective address and the execute sequence runs DR ← M[AR] and its instruction-specific follow-ups. The one-state price of indirection is visible here as pure timing — the strongest sense in which an addressing mode is a loop unrolled into hardware.',
      },
      {
        term: 'Executing the memory-reference instructions',
        kind: 'method',
        statement: 'With the effective address in AR (for direct instructions, from $T_2$): **AND/ADD/LDA** run $T_3\\colon \\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$, then $T_4\\colon$ the operation ($\\mathrm{AC} \\leftarrow \\mathrm{AC} \\wedge \\mathrm{DR}$, or $\\mathrm{AC} \\leftarrow \\mathrm{AC} + \\mathrm{DR},\\ E \\leftarrow \\mathrm{carry}$, or $\\mathrm{AC} \\leftarrow \\mathrm{DR}$) with $\\mathrm{SC} \\leftarrow 0$. **STA** needs no DR: $T_3\\colon M[\\mathrm{AR}] \\leftarrow \\mathrm{AC},\\ \\mathrm{SC} \\leftarrow 0$. **BUN**: $T_3\\colon \\mathrm{PC} \\leftarrow \\mathrm{AR},\\ \\mathrm{SC} \\leftarrow 0$. **BSA**: $T_3\\colon M[\\mathrm{AR}] \\leftarrow \\mathrm{PC},\\ \\mathrm{PC} \\leftarrow \\mathrm{AR} + 1,\\ \\mathrm{SC} \\leftarrow 0$. **ISZ** is the long one: $T_3\\colon \\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$, $T_4\\colon \\mathrm{DR} \\leftarrow \\mathrm{DR} + 1$, $T_5\\colon M[\\mathrm{AR}] \\leftarrow \\mathrm{DR}$, if $(\\mathrm{DR} = 0)$ then $(\\mathrm{PC} \\leftarrow \\mathrm{PC} + 1)$, $\\mathrm{SC} \\leftarrow 0$.',
        detail: 'Count clock cycles from the top of fetch: direct AND/ADD/LDA take 5 ($T_0$–$T_4$), STA and BUN take 4, BSA takes 4, and ISZ takes 6; every indirect variant adds one more. These numbers are the machine\'s CPI table — the honest cost of each instruction, auditable on paper, and the baseline any speedup proposal must beat.',
      },
      {
        term: 'Register-reference and I/O execution',
        kind: 'method',
        statement: 'When $D_7$ fires at $T_2$, no address is needed: the instruction\'s bits are the operation. At the next (and only) execute state, $$r = D_7 I\' T_3 \\quad \\text{or} \\quad p = D_7 I T_3$$ enables one of the twelve (or four) bit-decoded control functions — $B_i = \\mathrm{IR}(i)$ ANDed with $r$ (or $p$) — and the single microoperation executes with $\\mathrm{SC} \\leftarrow 0$: CLA, CMA, CIR, the skips, INP, OUT, all of them, one pulse each.',
        detail: 'The whole register-reference family therefore costs 4 cycles ($T_0$–$T_3$) — fetch plus one action, the cheapest instructions in the machine, which is why good assemblers prefer clearing AC with CLA over loading a zero word from memory (5 cycles via LDA). Bit-decoding a 12-bit field with twelve AND gates to obtain twelve one-cycle operations is the most information-dense opcode trick in the design.',
      },
      {
        term: 'The interrupt cycle',
        kind: 'insight',
        statement: 'At the end of every execute state, the control checks $\\mathrm{IEN} \\cdot (\\mathrm{FGI} \\vee \\mathrm{FGO})$. If a flag is set and interrupts are enabled, instead of returning to fetch the machine runs: $$R T_0\\colon \\mathrm{AR} \\leftarrow 0 \\qquad R T_1\\colon M[\\mathrm{AR}] \\leftarrow \\mathrm{PC},\\ \\mathrm{PC} \\leftarrow 1 \\qquad R T_2\\colon \\mathrm{IEN} \\leftarrow 0,\\ R \\leftarrow 0,\\ \\mathrm{SC} \\leftarrow 0$$ — the return address is saved at location 0, execution branches to the service routine at location 1, and the R (return) flip-flop that distinguished this cycle is cleared.',
        detail: 'The service routine reads the character (INP) or writes it (OUT) — which clears the flag that caused the interrupt — and finishes with an indirect BUN through location 0 to resume the main program, plus ION to re-arm. Interrupts are taken only between instructions, never inside one: the design guarantees each instruction runs to completion, the simplest form of the **precise exception** discipline that all later processors labor to preserve.',
      },
      {
        term: 'The instruction-cycle state diagram',
        kind: 'insight',
        statement: 'The whole machine is one loop: **fetch** ($T_0$–$T_1$) → **decode** ($T_2$) → effective address ($T_3$ if indirect) → **execute** (one to three states) → interrupt check → fetch. The state diagram draws exactly this cycle with the indirect and interrupt branches as its two detours.',
        detail: 'Reading the diagram is reading the machine: every arrow carries its timing label, every box its RTL, and the two decision diamonds (I? and flag?) are the only conditionals the control unit itself ever evaluates. Everything else — the 23 instructions — is data steering a fixed loop, which is the sense in which the fetch–decode–execute cycle deserves its name as the heartbeat of every stored-program computer since 1949.',
      },
    ],
    figures: [
      {
        caption: 'The instruction-cycle state diagram: the fetch phase ($T_0$: AR ← PC; $T_1$: IR ← M[AR], PC ← PC + 1) leads to decode ($T_2$), which steers to the indirect-address step ($T_3$, when I = 1), the execute states, and back to fetch — with the interrupt check as the one detour that can hijack the loop between instructions.',
        afterConcept: 6,
        svg: '<svg viewBox="0 0 760 430" width="100%" role="img" aria-label="State diagram of the instruction cycle: fetch and decode at top, the indirect-address branch to the right, execute below, the interrupt check diamond leading either back to fetch or through the interrupt cycle boxes back to fetch">\n  <rect x="60" y="40" width="180" height="64" rx="10" fill="#10b981" fill-opacity="0.09" stroke="currentColor" stroke-width="1.5"/>\n  <text x="150" y="64" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12.5" fill="currentColor">FETCH</text>\n  <text x="150" y="82" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">T0: AR ← PC</text>\n  <text x="150" y="95" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">T1: IR ← M[AR], PC ← PC+1</text>\n  <rect x="330" y="40" width="180" height="64" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>\n  <text x="420" y="64" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12.5" fill="currentColor">DECODE</text>\n  <text x="420" y="82" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">T2: AR ← IR(0–11)</text>\n  <text x="420" y="95" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">D0–D7 ← IR(12–14)</text>\n  <rect x="600" y="40" width="130" height="64" rx="10" fill="#f59e0b" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <text x="665" y="64" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">INDIRECT</text>\n  <text x="665" y="82" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">T3: AR ← M[AR]</text>\n  <text x="665" y="95" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9" fill="currentColor" opacity="0.7">(I = 1 only)</text>\n  <rect x="330" y="200" width="180" height="64" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>\n  <text x="420" y="224" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12.5" fill="currentColor">EXECUTE</text>\n  <text x="420" y="242" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">per opcode D0–D7:</text>\n  <text x="420" y="255" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor" opacity="0.8">one to three states, SC ← 0</text>\n  <polygon points="420,330 470,362 420,394 370,362" fill="#f43f5e" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/>\n  <text x="420" y="358" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor">flag ∧ IEN?</text>\n  <text x="420" y="372" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9" fill="currentColor" opacity="0.7">(between instructions)</text>\n  <rect x="560" y="330" width="170" height="64" rx="10" fill="#f43f5e" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>\n  <text x="645" y="352" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="currentColor">INTERRUPT CYCLE</text>\n  <text x="645" y="368" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9" fill="currentColor" opacity="0.8">RT0: AR ← 0 · RT1: M[AR] ← PC,</text>\n  <text x="645" y="380" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9" fill="currentColor" opacity="0.8">PC ← 1 · RT2: IEN ← 0, SC ← 0</text>\n  <polyline points="240,72 324,72" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="330,72 320,67 320,77" fill="currentColor" stroke="none"/>\n  <polyline points="510,72 594,72" fill="none" stroke="#f59e0b" stroke-width="1.6"/>\n  <polygon points="600,72 590,67 590,77" fill="#f59e0b" stroke="none"/>\n  <text x="530" y="62" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="#f59e0b">I = 1</text>\n  <polyline points="665,104 665,140 420,140 420,194" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.8"/>\n  <polygon points="420,200 415,190 425,190" fill="currentColor" stroke="none"/>\n  <polyline points="420,104 420,194" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="420,200 415,190 425,190" fill="currentColor" stroke="none"/>\n  <text x="428" y="150" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor">I = 0</text>\n  <polyline points="420,264 420,324" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="420,330 415,320 425,320" fill="currentColor" stroke="none"/>\n  <polyline points="370,362 250,362 250,326 150,326 150,108" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="150,104 145,114 155,114" fill="currentColor" stroke="none"/>\n  <text x="205" y="352" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="currentColor">no → next fetch</text>\n  <polyline points="470,362 554,362" fill="none" stroke="#f43f5e" stroke-width="1.6"/>\n  <polygon points="560,362 550,357 550,367" fill="#f43f5e" stroke="none"/>\n  <text x="492" y="352" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="#f43f5e">yes</text>\n  <polyline points="645,394 645,414 150,414 150,108" fill="none" stroke="#f43f5e" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.85"/>\n  <polygon points="150,104 145,114 155,114" fill="#f43f5e" stroke="none"/>\n  <text x="380" y="426" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75">service routine at 1, returns via indirect BUN through location 0</text>\n</svg>',
      },
    ],
    examples: [
      {
        title: 'Tracing one LDA instruction, state by state',
        problem: 'PC holds 250, location 250 holds an LDA 500 instruction (direct), and $M[500] = 0111\\ 0000\\ 0000\\ 0001$. Trace every timing state with the register values (SC starts at 0).',
        steps: [
          { label: 'T0 — aim the memory', text: '$\\mathrm{AR} \\leftarrow \\mathrm{PC} = 250$. The bus carries PC into AR; SC advances to 1.' },
          { label: 'T1 — fetch and advance', text: '$\\mathrm{IR} \\leftarrow M[250] = \\mathtt{0010\\ 0100\\ 0000\\ 0100}$... the LDA opcode $010$ with address $0100\\ 0000\\ 0100 = 516$ — say instead the word is LDA 500; then PC takes 251 (the incrementer\'s free ride).' },
          { label: 'T2 — decode and aim', text: 'Bits 14–12 = $010$ raise $D_2$ (LDA); $\\mathrm{AR} \\leftarrow \\mathrm{IR}(0\\text{–}11) = 500$; $I = \\mathrm{IR}(15) = 0$ — direct, so no indirect state.' },
          { label: 'T3 — read the operand', text: '$\\mathrm{DR} \\leftarrow M[500] = 0111\\ 0000\\ 0000\\ 0001$.' },
          { label: 'T4 — load and reset', text: '$\\mathrm{AC} \\leftarrow \\mathrm{DR}$ and $\\mathrm{SC} \\leftarrow 0$: five clock pulses per LDA, and the machine returns to fetch with PC = 251.' },
        ],
        result: 'AC = 28673 (0x7001), after exactly 5 cycles: fetch 3, read 1, load 1 — the CPI table\'s row for a direct LDA, verified on the bench.',
      },
      {
        title: 'The six-cycle ISZ, end to end',
        problem: 'Location 300 holds ISZ 350 (direct); $M[350] = 1111\\ 1111\\ 1111\\ 1111$ ($-1$). Trace the complete instruction.',
        steps: [
          { label: 'Fetch: T0, T1, T2', text: '$\\mathrm{AR} \\leftarrow 300$; $\\mathrm{IR} \\leftarrow M[300]$, PC: 301; decode $D_6$ (ISZ), $\\mathrm{AR} \\leftarrow 350$, $I = 0$.' },
          { label: 'T3 — read the counter', text: '$\\mathrm{DR} \\leftarrow M[350] = -1$ (all ones).' },
          { label: 'T4 — increment', text: '$\\mathrm{DR} \\leftarrow \\mathrm{DR} + 1 = 0$ — the wraparound the pattern was waiting for.' },
          { label: 'T5 — write back and test', text: '$M[350] \\leftarrow 0$; since DR = 0, also $\\mathrm{PC} \\leftarrow \\mathrm{PC} + 1$ (the skip fires — the next instruction is bypassed); $\\mathrm{SC} \\leftarrow 0$.' },
          { label: 'Count the pulses', text: 'Six: $T_0, T_1, T_2, T_3, T_4, T_5$ — the longest instruction in the machine, and the workhorse of every loop.' },
        ],
        result: 'The counter wraps to zero, the skip takes effect, and the whole instruction cost 6 cycles — ISZ is why loop overhead, not arithmetic, dominates this machine\'s profiles.',
      },
      {
        title: 'A subtraction program, cycle-counted',
        problem: 'The program of Section 8.3\'s third example (LDA 201; CMA; INC; ADD 200; HLT — all direct, values already in memory) runs from address 100. How many clock cycles does it take in total?',
        steps: [
          { label: 'LDA, direct', text: 'Fetch (3) + read (1) + load (1) = 5 cycles.' },
          { label: 'CMA, register-reference', text: 'Fetch (3) + one execute pulse (1) = 4 cycles.' },
          { label: 'INC, register-reference', text: '4 cycles, same as CMA.' },
          { label: 'ADD, direct', text: 'Fetch (3) + read (1) + add (1) = 5 cycles.' },
          { label: 'HLT, register-reference', text: 'Fetch (3) + stop (1) = 4 cycles — and SC freezing is the machine\'s only rest.' },
        ],
        result: '$5 + 4 + 4 + 5 + 4 = \\mathbf{22}$ cycles for a subtraction — the two\'s-complement idiom\'s cost in the machine\'s own currency, the number every hardware-multiply proposal compares against.',
      },
      {
        title: 'An interrupt in flight',
        problem: 'During the ADD of that same program, the user presses a key: FGI sets while IEN = 1. Trace what happens at the ADD\'s final state and after.',
        steps: [
          { label: 'The ADD completes anyway', text: 'The check is only made between instructions: the ADD runs to its last state and executes $\\mathrm{SC} \\leftarrow 0$ as always — the interrupt never lands mid-instruction.' },
          { label: 'The hijack replaces fetch', text: 'Instead of $T_0\\colon \\mathrm{AR} \\leftarrow \\mathrm{PC}$, the R flip-flop routes the counter\'s pulses into the interrupt cycle: $RT_0\\colon \\mathrm{AR} \\leftarrow 0$.' },
          { label: 'Save and branch', text: '$RT_1\\colon M[0] \\leftarrow \\mathrm{PC}$ (the address of the HLT that never ran yet — the resume point) and $\\mathrm{PC} \\leftarrow 1$.' },
          { label: 'Disarm and resume fetch', text: '$RT_2\\colon \\mathrm{IEN} \\leftarrow 0$, $R \\leftarrow 0$, $\\mathrm{SC} \\leftarrow 0$. The next pulse is an ordinary fetch — of the service routine\'s first instruction at address 1.' },
          { label: 'The routine\'s duty', text: 'It INPs the character (which clears FGI — disarming the cause), does its work, then returns with an indirect BUN through location 0 and re-enables interrupts with ION.' },
        ],
        result: 'The main program resumes at exactly where it was pushed aside, one instruction boundary later — a context switch in five states, with the return address standing in for everything a full OS would save.',
      },
    ],
    keyTakeaways: [
      'The sequence counter SC plus a decoder raises one-hot timing signals $T_0, T_1, \\ldots$; every control function is a product of a decoded opcode and a timing state, and SC ← 0 is the universal "go to fetch".',
      'Fetch is invariant: $T_0\\colon \\mathrm{AR} \\leftarrow \\mathrm{PC}$; $T_1\\colon \\mathrm{IR} \\leftarrow M[\\mathrm{AR}],\\ \\mathrm{PC} \\leftarrow \\mathrm{PC} + 1$; $T_2\\colon$ decode + aim. The PC increment rides free in $T_1$.',
      'Indirect addressing costs exactly one extra state, $T_3\\colon \\mathrm{AR} \\leftarrow M[\\mathrm{AR}]$, skipped by direct instructions.',
      'Cycle counts: register-reference and I/O instructions 4; STA, BUN, BSA 4; direct AND/ADD/LDA 5; ISZ 6; every indirect one adds 1 — the machine\'s CPI table, derivable by hand.',
      'Register-reference and I/O instructions execute entirely in a single $T_3$ pulse via bit decoding under $r = D_7 I\' T_3$ or $p = D_7 I T_3$.',
      'The interrupt cycle fires only between instructions, saves PC at location 0, branches to the routine at 1, disables itself (IEN ← 0), and returns via indirect BUN — precise interruption by construction.',
    ],
    quiz: [
      {
        q: 'During the fetch phase, the program counter increments at timing state:',
        options: ['$T_1$, riding free with the instruction read', '$T_0$, with AR ← PC', '$T_2$, during decode', 'it never increments during fetch'],
        answer: 0,
        explanation: 'PC ← PC + 1 shares $T_1$ with IR ← M[AR] because the incrementer is a dedicated path that does not occupy the common bus — the classic free rider of the timing design.',
      },
      {
        q: 'The microoperation SC ← 0, written at the end of every execute sequence, causes:',
        options: ['the next clock pulse to raise $T_0$ — a new fetch', 'the machine to halt', 'the accumulator to clear', 'an interrupt'],
        answer: 0,
        explanation: 'Zeroing the sequence counter makes the decoder raise $T_0$ next, and $T_0$\'s only microoperation is AR ← PC — the fetch of the next instruction. SC ← 0 is the machine\'s single "return to start".',
      },
      {
        q: 'At $T_2$ of a fetch, the control raises $D_5$ and finds $I = 0$. The next microoperation to execute is:',
        options: ['$T_3\\colon M[\\mathrm{AR}] \\leftarrow \\mathrm{PC}$, PC ← AR + 1 (the BSA execute)', '$T_3\\colon \\mathrm{AR} \\leftarrow M[\\mathrm{AR}]$ (indirect)', `$T_3\\colon \\mathrm{DR} \\leftarrow M[\\mathrm{AR}]$`, 'another fetch'],
        answer: 0,
        explanation: '$D_5$ is BSA and $I = 0$ means direct — no pointer step, so execute begins immediately: the return address (PC) is stored and execution continues from AR + 1.',
      },
      {
        q: 'Which instruction takes the most clock cycles (direct addressing)?',
        options: ['ISZ', 'BUN', 'CMA', 'LDA'],
        answer: 0,
        explanation: 'ISZ needs read, increment, write-back and the zero test: $T_0$–$T_5$, six cycles. BUN takes 4, CMA 4, LDA 5.',
      },
      {
        q: 'The register-reference instructions all execute at timing state:',
        options: ['$T_3$, under control $r = D_7 I\' T_3$', '$T_2$, during decode', '$T_4$, after an operand read', '$T_0$, before fetch'],
        answer: 0,
        explanation: 'With opcode $D_7$ and $I = 0$, no memory operand exists, so one pulse finishes the job: each of the twelve operations is one bit of IR(0–11) ANDed with $r = D_7 I\' T_3$.',
      },
      {
        q: 'A direct ADD (opcode $D_1$) executes its addition under the control function:',
        options: [`$D_1 T_4$`, `$D_1 T_2$`, `$D_1 T_3$`, `$D_1 T_5$`],
        answer: 0,
        explanation: 'Fetch takes $T_0$–$T_2$; $T_3$ reads the operand into DR; the ALU work happens at $T_4$ (AC ← AC + DR, E ← carry, SC ← 0). For an indirect ADD everything shifts one state later.',
      },
      {
        q: 'The interrupt cycle stores the return address:',
        options: ['at memory location 0', 'in the accumulator', 'at the address field of the interrupted instruction', 'in DR'],
        answer: 0,
        explanation: 'RT0 aims AR at 0 and RT1 writes PC there — the interrupted program\'s resume point — while PC takes 1, the service routine\'s start. The routine returns with an indirect BUN through location 0.',
      },
      {
        q: 'Interrupts are recognized:',
        options: ['between instructions, never inside one', 'at every clock pulse', 'only during fetch', 'only when SC = 0'],
        answer: 0,
        explanation: 'The flag test is wired into the end-of-instruction transition: each instruction runs to completion, then the flag condition diverts the cycle. This between-instructions discipline is the ancestor of precise exceptions.',
      },
      {
        q: 'The R flip-flop in the interrupt cycle exists to:',
        options: ['route the timing counter\'s pulses into the interrupt microoperations', 'remember the result of the last ALU operation', 'hold the interrupted instruction\'s opcode', 'count interrupt nesting depth'],
        answer: 0,
        explanation: 'R simply renames the timing states: while R = 1, the pulses $T_0, T_1, T_2$ are interpreted as $RT_0, RT_1, RT_2$ — the interrupt sequence instead of a fetch. Clearing R at RT2 hands the baton back.',
      },
      {
        q: 'How many clock cycles does the program LDA 100 · CLE · HLT take (all direct, ignoring the interrupt check)?',
        options: ['13', '12', '15', '10'],
        answer: 0,
        explanation: 'LDA: fetch 3 + read 1 + load 1 = 5. CLE (register-reference): fetch 3 + execute 1 = 4. HLT: fetch 3 + stop 1 = 4. Total $5 + 4 + 4 = 13$ cycles.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Timing, cost and speedups',
        blocks: [
          {
            kind: 'derivation',
            heading: 'The CPI table, derived',
            body: 'Every instruction\'s cycle count follows from one rule: list the microoperations, and charge one clock period per occupancy of the common bus, letting dedicated paths ride free. Fetch is fixed at three ($T_0, T_1, T_2$: bus, memory, decode-aim). Add one state if indirect. Then per instruction: register-reference and I/O add 1 (one bus-free pulse); STA adds 1 (one memory write); BUN and BSA add 1 (register transfers); AND/ADD/LDA add 2 (memory read plus the ALU state); ISZ adds 3 (read, increment, write-back plus test). The totals — 4, 4, 4, 5, 6 and the indirect +1 — are not a table to memorize but a budget to recompute, and the same audit (bus occupancies, free riders) prices any microarchitecture on paper before it is built.',
          },
          {
            kind: 'application',
            heading: 'Microprogramming the control',
            body: 'Hardwiring every control function $D_i T_j$ (and every $r B_k$, $p B_k$) is a Boolean sum-of-products per control line — correct, fast, and brittle: a design change rewires gates. Wilkes\'s 1951 alternative stores the control signals themselves in a ROM: each cycle reads one **control word** (one bit per control line — horizontal microcode; or an encoded micro-op field — vertical microcode) and the word\'s sequencer bits choose the next address. The basic computer\'s entire control then becomes a 64-ish-word table, one row per (opcode, state) pair, and adding an instruction means adding rows, not gates. Real machines used microcode for exactly this (the VAX and the IBM 360 model 40\'s writable control store; x86\'s modern micro-ops are its direct descendant), trading speed for flexibility at the boundary where hardwired timing closure stops scaling.',
          },
          {
            kind: 'application',
            heading: 'Pipelining the cycle away',
            body: 'The fetch–decode–execute loop is sequential by construction: the machine finishes instruction $n$ before touching $n+1$, so the CPI column is also the latency column. The classical speedup overlaps the phases: while instruction $n$ executes, instruction $n+1$ decodes and $n+2$ fetches — the five-stage pipeline, pushing CPI toward 1. The basic computer\'s own structure predicts the hazards: its single memory port means fetch and a data read contend (the structural hazard a split instruction/data cache later solves), and its BUN overwrites the very PC the fetch is using (the control hazard that branch prediction later hides). Reading this section, one has already met every reason pipelines are hard.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Verification and the clock\'s future',
        blocks: [
          {
            kind: 'application',
            heading: 'RTL verification at scale',
            body: 'Because every microoperation and every control function of this machine is written down, its whole behavior is a finite-state system — and finite-state systems yield to model checking: exhaustive or symbolic exploration proving, for instance, that no reachable state ever enables two drivers of the same register in one pulse (the single-writer discipline this design obeys by hand). That property is exactly what industrial RTL verification checks on designs a million times larger, and its failure modes are the famously expensive ones: the 1994 Pentium FDIV bug — a missing table entry in the division microcode, shipped before formal verification was standard — cost Intel $475 million and made formal methods a line item ever since. Modern signoff routinely proves cache-coherence protocols and pipeline invariants with tools (TLA+, Alloy, model checkers, symbolic simulation) that would fit this machine in an afternoon.',
          },
          {
            kind: 'para',
            heading: 'Precise exceptions and out-of-order cores',
            body: 'This machine\'s interrupts are precise by construction: nothing is ever mid-flight when the flag check happens. Out-of-order processors destroy that comfort — twenty instructions may be partially executed, some past a faulting one — and recovering an exact architectural state (the precise exception) requires the reorder buffer: completed results are held in a completion queue and retired in program order, so the faulting instruction\'s frontier is always clean. The basic computer\'s SC ← 0 at a known instruction boundary is, in miniature, the invariant that multi-million-transistor machinery exists to preserve: the interrupted program sees its own execution as sequential, no matter what the silicon did in parallel.',
          },
          {
            kind: 'open',
            heading: 'Life without the clock',
            body: 'Every timing state of this section assumes a global clock beating in lockstep — but clock distribution is now the limiting cost of large chips (skew budgets, power spent toggling synchronously, GHz-limited by the slowest path). The asynchronous alternative removes the clock entirely: modules handshake (request/acknowledge), data validity replaces timing validity, and average-case rather than worst-case speed governs. Delay-insensitive circuits go further, correct under arbitrary gate delays. The open problems are decades old and stubborn: automatic verification of asynchronous correctness (the handshake discipline is a concurrency problem, and the tools of the previous block apply directly), competitive EDA tooling, and the systems question — how much of a clocked ecosystem (memories, buses, software timing assumptions) an asynchronous island must emulate to interoperate. That a complete, understandable computer like this one is the natural testbed for all of it is the strongest argument for having built it at all.',
          },
        ],
      },
    ],
  },
]
