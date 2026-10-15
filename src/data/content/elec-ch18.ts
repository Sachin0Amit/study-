import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Electronics Master Library — Chapter 18: Digital Electronics and Interfacing
// Sources: Hughes, "Electrical & Electronic Technology", 12th Ed., chs 21–23
//   ch21 Interfacing Digital and Analogue Systems (pp. 499–515):
//     D/A conversion, weighted and R/2R ladders, comparators, A/D converters
//     (Examples 21.1–21.7).
//   ch22 Digital Numbers (pp. 517–530): binary, octal and hexadecimal systems,
//     complements and signed arithmetic (Examples 22.1–22.26).
//   ch23 Digital Systems (pp. 532–565): gates, Boolean rules, De Morgan,
//     Karnaugh maps, latches and flip-flops, IC families, HDLs (Examples
//     23.1–23.13).
//   + The Art of Electronics, 3rd Ed., chs 10–13 for the electronics of real
//     gates: logic levels, noise margins, fan-out, LEDs, relays, optocouplers.
// All worked-example numbers are the books’ own; every figure recomputed.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh18Content: SectionContent[] = [
  // ------------------------------------------------------------------ 18.1
  {
    sectionId: 'ece-e-digital-s11',
    readingTime: 10,
    intro: 'Chapter 17 closed with circuits that generate their own waveforms; this chapter opens the world that consumes them. A digital signal carries information in just two states, ON and OFF, 1 and 0 — and once information is reduced to that form it can be stored, transmitted and recomputed without loss. The quantities of engineering are not binary, though, so the first task is a number system built from two symbols: this section is the grammar of binary, octal and hexadecimal notation, and of the arithmetic that digital hardware performs on them.',
    objectives: [
      'Expand and evaluate positional numbers in any base, and convert between decimal, binary, octal and hexadecimal in both directions',
      'Perform binary addition, subtraction, multiplication and division, including the carry and borrow rules',
      'Form one’s and two’s complements and use them to represent and manipulate signed binary numbers',
      'Interpret fixed-length and BCD representations and their range limits',
      'Convert multi-digit decimal numbers through octal to binary by repeated division',
    ],
    concepts: [
      {
        term: 'Positional number systems',
        kind: 'definition',
        statement: 'In a **positional system** of base (radix) $r$, each digit carries a weight: the value of a number is the sum of each digit times the power of $r$ at its position.',
        detail: 'The decimal number 458 is four hundreds, five tens and eight units: $458 = 4\\times10^2 + 5\\times10^1 + 8\\times10^0$. Weights rise to the left of the point and fall to the right, so $256.18 = 2\\times10^2 + 5\\times10^1 + 6\\times10^0 + 1\\times10^{-1} + 8\\times10^{-2}$. The base is pure bookkeeping: everything in this section follows from substituting a different $r$ into the same weighted sum, and Hughes Chapter 22 builds binary, octal and hexadecimal on exactly this foundation.',
      },
      {
        term: 'The binary system and bits',
        kind: 'definition',
        statement: 'The **binary system** uses base 2 with the two digits 0 and 1, called **bits**; the right-hand bit is the least significant bit (LSB, weight $2^0 = 1$) and the left-hand bit the most significant bit (MSB).',
        detail: 'The binary number $101$ means $1\\times2^2 + 0\\times2^1 + 1\\times2^0 = 5$. Fractional weights continue right of the binary point: $2^{-1} = 0.5$, $2^{-2} = 0.25$, $2^{-3} = 0.125$, $2^{-4} = 0.0625$. Hughes Table 22.1 lists the four-bit numbers 0000 to 1111 — sixteen of the $2^n$ values an $n$-bit word can hold, with each extra bit doubling the range, and $1011_2 = 11_{10}$. A digital system carries these words as parallel voltage levels, one line per bit, which is why word width is the first specification of any digital machine.',
      },
      {
        term: 'Decimal to binary by repeated division',
        kind: 'method',
        statement: 'To convert decimal to binary, **divide repeatedly by 2**; the remainders, read from the first upward, are the binary digits from LSB to MSB.',
        detail: 'Hughes Example 22.2 converts $24_{10}$: $24 \\div 2 = 12$ remainder 0 (LSB), $12 \\div 2 = 6$ r 0, $6 \\div 2 = 3$ r 0, $3 \\div 2 = 1$ r 1, $1 \\div 2 = 0$ r 1 (MSB), so $24_{10} = 11000_2$, that is $2^4 + 2^3 = 16 + 8$. The observation method — subtracting the largest power of 2 that fits — reaches the same answer but invites mistakes by overlooking zero digits; Example 22.3’s sparse $33_{10} = 100001_2$ shows how easily positions go missing. The division method never misses a position, which is why it is the reliable standard.',
      },
      {
        term: 'Binary arithmetic',
        kind: 'method',
        statement: 'Binary addition has four rules — $0+0=0$, $0+1=1$, $1+0=1$, $1+1=0$ **carry 1** — plus the three-input case $1+1+1=1$ carry 1; subtraction, multiplication and division follow the same schoolbook patterns in base 2.',
        detail: 'Subtraction borrows ($0-1=1$ and deduct 1 from the next column); multiplication proceeds by shift-and-add of partial products, and division by shift-and-subtract. Hughes Examples 22.8 and 22.11 work $1101 \\times 0101 = 1000001$ ($13 \\times 5 = 65$) and $111111 \\div 1001 = 111$ ($63 \\div 9 = 7$) exactly like long multiplication and long division. Computers add only two numbers at a time, so multi-term products are accumulated in sequence (Example 22.10 builds $45 \\times 25 = 1125$ that way). Division by repeated subtraction must cope with negative partial remainders — the restoring-division trick — which is one reason negative numbers need a disciplined representation.',
      },
      {
        term: 'One’s and two’s complements',
        kind: 'law',
        statement: 'The **one’s complement** of a binary number inverts every bit; the **two’s complement** adds 1 to that, so for an $n$-bit word $$N^{*} = \\overline{N} + 1 = 2^n - N.$$',
        detail: 'Hughes equation [22.1]. For $1101100$: inverting gives $0010011$, and adding 1 gives the two’s complement $0010100$ (Example 22.13). The quick direct route (Example 22.14): starting at the LSB, copy the bits up to and including the first 1 unchanged, then invert everything to its left. The reward is arithmetic economy: $A - B$ is computed as $A + B^{*}$ with any final carry discarded, so one adder handles every signed operation the machine will ever meet.',
      },
      {
        term: 'Signed binary numbers',
        kind: 'notation',
        statement: 'In a **signed** binary number the left-hand bit is the **sign bit** — 0 for positive, 1 for negative — and the remaining bits carry the magnitude.',
        detail: 'In 8-bit form, $+30 = 00011110$ and $-30 = 10011110$ in sign-magnitude notation. Reading a signed word means stripping the sign bit and evaluating the rest: Hughes Example 22.15 evaluates $10011010$ as magnitude $0011010 = 16 + 8 + 2 = 26$ with a negative sign, so $-26$. Computers keep negative numbers in two’s-complement form so the same adder serves every case: Example 22.17 adds $-9 + 3$ as $11110111 + 00000011 = 11111010$, negative, with magnitude bits giving 6 — the answer $-6$ — and Example 22.18’s $-9 + -3 = -12$ works the same way with the final carry discarded.',
      },
      {
        term: 'The octal system',
        kind: 'definition',
        statement: 'The **octal system** (base 8, digits 0–7) compresses binary three bits at a time, since $8 = 2^3$: each octal digit corresponds to exactly one 3-bit group.',
        detail: 'Positional evaluation works as always: $236_8 = 2\\times8^2 + 3\\times8^1 + 6\\times8^0 = 128 + 24 + 6 = 158_{10}$ (Hughes Example 22.24), and $125_8$ expands bit by bit to $001\\,010\\,101_2 = 64 + 16 + 4 + 1 = 85_{10}$ (Example 22.25). For large decimal-to-binary conversions, dividing by 8 is three times faster: Example 22.26 reduces $6735_{10}$ by repeated division to $15617_8$, which is immediately $001\\,101\\,110\\,001\\,111_2$, and checking the powers of 2 returns exactly 6735. Octal fitted the 12-, 24- and 36-bit machines of an earlier era; today it survives mostly in file-permission notation.',
      },
      {
        term: 'Hexadecimal numbers',
        kind: 'definition',
        statement: 'The **hexadecimal system** (base 16) uses the digits 0–9 then A–F, with $\\text{A} = 10$ through $\\text{F} = 15$; since $16 = 2^4$, one hex digit stands for exactly four bits.',
        detail: 'Hughes Table 22.2 pairs each 4-bit group with its hex digit, so grouping from the binary point converts at sight: $1001\\,1100\\,0101_2 = 9\\text{C}5_{16}$ and $1110\\,0000\\,1010_2 = \\text{E0A}_{16}$. The positional check on the second: $\\text{E0A}_{16} = 14\\times16^2 + 0\\times16^1 + 10 = 3594_{10}$. Hex is the working shorthand of memory maps, machine code and colour codes precisely because a whole byte maps to two digits with no arithmetic at all.',
      },
      {
        term: 'Binary-coded decimal (BCD)',
        kind: 'notation',
        statement: '**BCD** encodes each decimal digit in its own 4-bit group (0000 to 1001); six of the sixteen 4-bit codes go unused, trading coding efficiency for decimal-friendly readout.',
        detail: 'A 12-bit BCD word carries three decimal digits — 000 to 999 — with group weightings that step by ten rather than sixteen: if the least significant group’s bits weigh 1, 2, 4 and 8 mV, the next group’s weigh 10, 20, 40 and 80 mV (Hughes section 21.2). The cost is range: pure binary in 12 bits reaches 4095, BCD only 999. Hughes Example 21.3 decodes $1000\\,0101\\,1001$ with an LSB weighting of 2 mV as the decimal 859, giving $859 \\times 2 = 1718\\,\\text{mV} = 1.718\\,\\text{V}$ — the ladder idea that section 18.4 develops into full converters. Note the book’s warning: do not confuse the most significant digit (MSD) with the most significant bit (MSB).',
      },
    ],
    examples: [
      {
        title: 'Converting a decimal number into binary by two routes (Hughes, Examples 22.1–22.3)',
        problem: 'Convert $24_{10}$ and $33_{10}$ to binary, first by observation (subtracting powers of 2) and then by the repeated division-by-2 method, and verify the results.',
        steps: [
          { label: 'Step 1: Observation method for 24', text: 'The highest power of 2 not greater than 24 is $2^4 = 16$; subtracting leaves 8. The highest power not greater than 8 is $2^3 = 8$ itself, and the remainder is 0. So $24 = 2^4 + 2^3$, giving 1s in those positions only: $24_{10} = 11000_2$.' },
          { label: 'Step 2: Division method for 24', text: 'Divide by 2 repeatedly and record remainders: $24 \\div 2 = 12$ r 0 (LSB), $12 \\div 2 = 6$ r 0, $6 \\div 2 = 3$ r 0, $3 \\div 2 = 1$ r 1, $1 \\div 2 = 0$ r 1 (MSB). Reading the remainders upward gives the same $11000_2$.' },
          { label: 'Step 3: Division method for 33', text: '$33 \\div 2 = 16$ r 1, $16 \\div 2 = 8$ r 0, $8 \\div 2 = 4$ r 0, $4 \\div 2 = 2$ r 0, $2 \\div 2 = 1$ r 0, $1 \\div 2 = 0$ r 1, so $33_{10} = 100001_2$ — a 1 at $2^5$ and another at $2^0$, with four zero positions between.' },
          { label: 'Step 4: Verify by expansion', text: '$100001_2 = 2^5 + 2^0 = 32 + 1 = 33$ and $11000_2 = 16 + 8 = 24$. Both methods agree; the division method is preferred because it cannot silently skip a zero position the way observation can.' },
        ],
        result: '$24_{10} = 11000_2$ and $33_{10} = 100001_2$.',
      },
      {
        title: 'Binary addition with carries (Hughes, Example 22.6)',
        problem: 'Add the decimal numbers 79 and 31 by binary means.',
        steps: [
          { label: 'Step 1: Convert both operands', text: '$79 = 64 + 8 + 4 + 2 + 1 = 1001111_2$; $31 = 16 + 8 + 4 + 2 + 1 = 0011111_2$ padded to the same seven-bit length.' },
          { label: 'Step 2: Add column by column from the LSB', text: '$1+1 = 0$ carry 1; then three columns of $1+1+1 = 1$ carry 1; then $0+1+1 = 0$ carry 1; then $0+0+1 = 1$; finally $1+0 = 1$. The carry chain ripples through four consecutive positions — Hughes marks the carried 1s above the columns just as in decimal work.' },
          { label: 'Step 3: Read the sum', text: 'The result is $1101110_2 = 64 + 32 + 8 + 4 + 2 = 110_{10}$, exactly $79 + 31$.' },
          { label: 'Step 4: Note the hardware implication', text: 'Every column performs the same operation — add two bits and an incoming carry, emit a sum and an outgoing carry. That is precisely the full-adder cell, and the ripple of carries through it is what limits adder speed as word length grows.' },
        ],
        result: '$1001111_2 + 0011111_2 = 1101110_2 = 110_{10}$.',
      },
      {
        title: 'Subtraction by two’s complement addition (Hughes, Example 22.20)',
        problem: 'Subtract $+9$ from $+12$ using 8-bit signed binary numbers and the two’s complement.',
        steps: [
          { label: 'Step 1: Write the operands', text: '$+12 = 00001100$ and $+9 = 00001001$. The subtraction is re-expressed as an addition of the negative: $12 - 9 = 12 + (-9)$.' },
          { label: 'Step 2: Form the two’s complement of 9', text: 'Invert every bit, $00001001 \\to 11110110$, and add 1: $-9 = 11110111$. Check: $00001001 + 11110111 = 1\\,00000000$, so the pair sums to exactly $2^8$ — the complement really is $2^8 - 9$.' },
          { label: 'Step 3: Add and discard the carry', text: '$00001100 + 11110111 = 1\\,00000011$. The ninth-bit carry is the $2^8$ that the complement borrowed; Hughes discards it, and the rule is general.' },
          { label: 'Step 4: Interpret the result', text: 'The remaining word $00000011$ has sign bit 0, so the answer is positive with magnitude 3: $12 - 9 = +3$. Example 22.21 runs the same machinery for $-24 - 19 = -43$, again discarding the final carry.' },
        ],
        result: '$12 - 9 = +3$, computed as $00001100 + 11110111 = (1)00000011$ with the carry discarded.',
      },
    ],
    keyTakeaways: [
      'Every positional number is a weighted sum of digits times powers of its base; because $8 = 2^3$ and $16 = 2^4$, octal and hexadecimal are exact binary shorthands.',
      'Repeated division by 2 (or by 8) converts decimal to binary (or to octal, then binary) without missing zero positions — the reliable method for large numbers.',
      'Binary arithmetic is schoolbook arithmetic with two digits; the carry rule $1+1 = 0$ carry 1 and the three-input case $1+1+1 = 1$ carry 1 drive every adder.',
      'The two’s complement turns subtraction into addition — form $\\overline{N} + 1$, add, discard the final carry — so one adder serves every signed operation.',
      'A sign bit distinguishes $+30 = 00011110$ from $-30 = 10011110$; reading a signed word means evaluating the magnitude bits and applying the sign.',
      'BCD buys decimal-friendly digits at the cost of range — twelve BCD bits stop at 999 where twelve binary bits reach 4095 — and pairs naturally with the decimal readouts of section 18.4.',
    ],
    quiz: [
      {
        q: 'In the repeated division-by-2 conversion of a decimal number, the first remainder produced is which bit of the answer?',
        options: ['The most significant bit (MSB)', 'The least significant bit (LSB)', 'The sign bit', 'The middle bit of the word'],
        answer: 1,
        explanation: 'Each division by 2 tests the number’s parity — exactly the value of the $2^0$ column. Successive remainders fill in the $2^1, 2^2, \\dots$ positions in order, so the last remainder is the MSB: Hughes Example 22.2 builds $24_{10} = 11000_2$ this way.',
      },
      {
        q: 'What is the two’s complement of $1101100$?',
        options: [`$0010011$`, `$0010100$`, `$1101011$`, `$0010110$`],
        answer: 1,
        explanation: 'Inverting every bit gives the one’s complement $0010011$; adding 1 to its LSB gives the two’s complement $0010100$ — Hughes Example 22.13. The direct shortcut of Example 22.14 copies the trailing 100 unchanged and inverts the leading $1101 \\to 0010$, giving the same result.',
      },
      {
        q: 'The binary number $1110\\,0000\\,1010$ groups into hexadecimal and decimal as:',
        options: [`$\\text{F0A}_{16} = 3850_{10}$`, `$\\text{E0A}_{16} = 3594_{10}$`, `$\\text{E0A}_{16} = 3610_{10}$`, `$\\text{EFA}_{16} = 3834_{10}$`],
        answer: 1,
        explanation: 'One hex digit per four bits: $1110 = \\text{E}$, $0000 = 0$, $1010 = \\text{A}$; then the positional check gives $14\\times16^2 + 0\\times16 + 10 = 3594$. Hughes section 22.14 introduces hex precisely because regrouping four bits at a time needs no arithmetic.',
      },
      {
        q: 'A 12-bit BCD converter input of $1000\\,0101\\,1001$ with an LSB weighting of 2 mV produces (Hughes, Example 21.3):',
        options: [`$859 \\times 2\\,\\text{mV} = 1718\\,\\text{mV}$`, `$1113 \\times 2\\,\\text{mV} = 2226\\,\\text{mV}$`, `$859\\,\\text{mV}$`, `$8 \\times 2\\,\\text{mV} = 16\\,\\text{mV}$`],
        answer: 0,
        explanation: 'Each 4-bit group is one decimal digit: $1000 = 8$, $0101 = 5$, $1001 = 9$, so the code is 859. With 2 mV per step of the least significant group the output is $859 \\times 2 = 1718\\,\\text{mV} = 1.718\\,\\text{V}$. Reading the word as pure binary ($1113$) would be wrong: BCD group weightings step by ten, not sixteen.',
      },
      {
        q: 'Why did octal and hexadecimal become standard shorthands for binary?',
        options: ['Because they compute faster in hardware', 'Because 8 and 16 are powers of 2, so each digit maps to an exact group of three or four bits', 'Because decimal digits do not fit in bytes', 'Because they eliminate the need for complements'],
        answer: 1,
        explanation: 'Since $8 = 2^3$ and $16 = 2^4$, an octal digit is always a 3-bit group and a hex digit always a 4-bit group — the conversion is a mechanical regrouping, as in $6735_{10} = 15617_8 = 001\\,101\\,110\\,001\\,111_2$, with no arithmetic at all. Hughes sections 22.13–22.14 introduce them because binary numbers grow cumbersome as they grow long.',
      },
      // PYQ-pattern — decimal to binary conversion (rephrased, values changed)
      {
        q: 'The decimal number 173 is represented in 8-bit unsigned binary as:',
        options: ['10101101', '10100111', '11001010', '01011101'],
        answer: 0,
        explanation: 'Step 1 — Given: decimal $173$, 8-bit unsigned coding with weights $128$ down to $1$. Step 2 — Governing method: repeatedly subtract the largest fitting power of two, marking one in that position and zero elsewhere. Step 3 — Algebra: $173 - 128 = 45$; $45 - 32 = 13$; $13 - 8 = 5$; $5 - 4 = 1$; $1 - 1 = 0$; ones at $128$, $32$, $8$, $4$ and $1$ give $10101101$. Step 4 — Sanity check: value sums to $128 + 32 + 8 + 4 + 1 = 173$, length is $8$ bits, and the leading one correctly signals a value above $127$. Step 5 — Distractor analysis: each wrong option flips one marked bit, producing $167$, $202$ and $93$ respectively. Step 6 — Conclude: the code is 10101101.',
      },
    ],
  },

  // ------------------------------------------------------------------ 18.2
  {
    sectionId: 'ece-e-digital-s12',
    readingTime: 10,
    intro: 'Numbers alone do not act; decisions do. This section crosses from arithmetic into logic — the algebra George Boole built and Claude Shannon first applied to switching circuits. Hughes introduces each function with a bus route, a lamp and two switches, then assembles the gate symbols, truth tables and the small set of Boolean rules that reduce networks to their cheapest form. The deeper Boolean theory belongs to the Digital Logic subject; the concern here is what every electronics engineer must command: the six gates, De Morgan’s theorems, and why real systems standardize on NAND and NOR.',
    objectives: [
      'Write the truth tables of AND, OR, NOT, EXCLUSIVE-OR, NAND and NOR and recognize their symbols',
      'Move between switch models, gate circuits and Boolean expressions for simple logic networks',
      'Apply the commutative, associative, distributive and absorption rules and De Morgan’s laws to simplify Boolean functions',
      'Explain why any function can be built from NAND gates alone or NOR gates alone, and convert a given network to one gate type',
      'Read and sketch timing diagrams for gates with time-varying inputs',
    ],
    concepts: [
      {
        term: 'The two-state advantage',
        kind: 'insight',
        statement: 'Digital operation requires that **all information be reducible to two states**, ON and OFF, 1 and 0 — and once it is, degradation can be reversed.',
        detail: 'Hughes section 23.1 makes the argument: if ON is 10 V and the transmission path delivers only 9 V, the receiver can restore a full 10 V from a fresh source, so the signal emerges exactly as it entered — the regeneration that lets television cross the world with no apparent loss of quality. An analogue amplifier (the nonlinearity of Chapter 15, the frequency response of Chapter 16) can never perfectly restore a continuous signal; a two-stage receiver can always restore a two-state one. In human terms the states answer yes and no, which is why the mathematics of decisions, not of magnitudes, governs them.',
      },
      {
        term: 'The OR function',
        kind: 'definition',
        statement: 'The **OR function** $F = A + B$ is true when $A$ or $B$ or both are true; the $+$ sign means OR, not addition.',
        detail: 'Hughes’s bus that will take me to either A or B: the lamp F lights when either switch — or both — closes, which is exactly two switches in parallel (Fig. 23.1). The truth table reads 1 for 01, 10 and 11, and 0 only for 00. With time-varying inputs the OR output is HIGH during any interval in which at least one input is HIGH — the union of the HIGH intervals in Hughes’s timing diagram, Fig. 23.31. Multi-input ORs extend the idea: $F = A + B + C$ is 1 unless every input is 0.',
      },
      {
        term: 'The AND function',
        kind: 'definition',
        statement: 'The **AND function** $F = A \\cdot B$ is true only when both $A$ and $B$ are true; the dot means AND, not multiplication.',
        detail: 'The bus that will take me to A and B: the lamp lights only when both series switches close (Fig. 23.2). The truth table is 0 everywhere except the single row $1 \\cdot 1 = 1$. With time-varying inputs the AND output is HIGH only in the intervals where all inputs are simultaneously HIGH — Hughes Fig. 23.30 draws exactly this for three inputs, and reading such waveforms is the everyday skill of timing-diagram analysis. The notation is honest multiplication-like syntax because the values are confined to 0 and 1.',
      },
      {
        term: 'The EXCLUSIVE-OR function',
        kind: 'definition',
        statement: 'The **EXCLUSIVE-OR** $F = A \\oplus B$ is true when $A$ or $B$ — but not both — is true: $A \\oplus B = A\\bar{B} + \\bar{A}B$.',
        detail: 'The bus that takes me either to A or to B but not to both. Its household embodiment is the two-way stair-light switching of Fig. 23.3: throw either switch and the lamp changes state. The truth table is 0 for equal inputs and 1 for different ones, which makes XOR the hardware difference detector — the sum bit of binary addition, with AND supplying the carry, and the reason section 18.1’s arithmetic becomes circuitry.',
      },
      {
        term: 'The NOT function and the hardware of gates',
        kind: 'definition',
        statement: 'The **NOT function** $F = \\bar{A}$ inverts its input; circuits that perform logic functions are called **gates**, and Hughes shows their electronics with two diode circuits before hiding it behind a symbol.',
        detail: 'In the diode OR gate (Fig. 23.4), a 10 V on either input forward-biases its diode and the output follows to 10 V. The diode AND gate (Fig. 23.5) works the other way round: if any input sits at 0 V its diode conducts and clamps the output at 0 V; only with 10 V on both inputs do both diodes sit at zero bias and let the output rise to the 10 V of the source. Practical gates replace diodes with switching transistors — mostly FETs, which behave nearly as open circuits when off — but the symbol abstracts all of that away, and several symbol systems are in general use (Fig. 23.6).',
      },
      {
        term: 'NAND and NOR',
        kind: 'definition',
        statement: '**NAND** and **NOR** are AND and OR with the output inverted — $F = \\overline{A \\cdot B \\cdot C}$ and $F = \\overline{A + B + C}$ — each reading 0 only in its defining input combination.',
        detail: 'NOR is an OR gate feeding a NOT; NAND is an AND feeding a NOT — but both come as single integrated gates, the compound function reduced to one circuit. The three-input NAND truth table (Hughes Table 23.6) shows output 1 in every row except $1\\,1\\,1$; NOR outputs 1 only for $0\\,0\\,0$. The little bubble on the symbol is the inverter. These two dominate real hardware for the reason concept 9 develops: each is universal.',
      },
      {
        term: 'The Boolean rulebook',
        kind: 'theorem',
        statement: 'Boolean algebra obeys commutative, associative and **distributive** rules — including the unfamiliar $A + B \\cdot C = (A + B)\\cdot(A + C)$ — plus the absorption laws $A + A \\cdot B = A$.',
        detail: 'The single-variable identities come first (Hughes Fig. 23.8): $A + 1 = 1$, $A + 0 = A$, $A + A = A$, $A + \\bar{A} = 1$, and their AND-side twins $A \\cdot 0 = 0$, $A \\cdot 1 = A$, $A \\cdot A = A$, $A \\cdot \\bar{A} = 0$. Then the commutative and associative rules [23.7]–[23.10], and the distributive pair [23.11]–[23.12]: the second, $A\\cdot(B + C) = A\\cdot B + A\\cdot C$, is ordinary factoring, while the first has no analogue in arithmetic because Boolean addition has no inverse. The special cases $A + A\\cdot B = A$ and $A\\cdot(A + B) = A$ [23.13]–[23.14] do much of the everyday simplification, as the worked examples show.',
      },
      {
        term: 'De Morgan’s laws',
        kind: 'theorem',
        statement: 'Complementing swaps AND with OR: $$\\overline{A \\cdot B \\cdot C} = \\bar{A} + \\bar{B} + \\bar{C} \\qquad \\overline{A + B + C} = \\bar{A} \\cdot \\bar{B} \\cdot \\bar{C}$$',
        detail: 'Hughes equations [23.15]–[23.16], proved by the three-input NAND truth table: the rows where $\\overline{A\\cdot B\\cdot C} = 1$ are exactly the rows where $\\bar{A} + \\bar{B} + \\bar{C} = 1$. In gate form the theorem says a NAND is an OR whose inputs are inverted — the bubbled-OR symbol — and a NOR is a bubbled-AND. That double reading is what lets a designer move between AND/OR/NOT networks and all-NAND or all-NOR ones, and it powers Hughes Example 23.3’s rewrite of $F = A + B\\cdot C$ as $F = \\overline{\\bar{A}\\cdot(\\bar{B} + \\bar{C})}$.',
      },
      {
        term: 'Gate standardization: NAND and NOR universality',
        kind: 'insight',
        statement: 'Every logic function can be built from **NAND gates alone** or from **NOR gates alone**, so a system can standardize on a single gate type.',
        detail: 'The construction kit from NOR (Hughes Figs. 23.14–23.16): NOT is one NOR with its inputs tied together, $\\overline{A + A} = \\bar{A}$; OR is two, the second un-inverting the first; AND is three, inverting both inputs first and NORing the results, $\\overline{\\bar{A} + \\bar{B}} = A\\cdot B$. NAND does the symmetric job by De Morgan. Hughes Example 23.4 builds the NOT-EQUIVALENT function $F = A\\bar{B} + \\bar{A}B$ in NOR form; the direct substitution contains two cascaded inverter pairs whose outputs equal their inputs, and cancelling them leaves five NOR gates. Standardizing costs extra gates but buys one parts list, one spare-parts inventory and one behaviour — usually the right trade, and Example 23.5 realizes one function both ways.',
      },
    ],
    examples: [
      {
        title: 'A two-of-three sensor voter (Hughes, Example 23.1)',
        problem: 'Three positional sensing devices each produce a 1 output when position is confirmed. Design an AND/OR network whose output is 1 when two or more of the devices read 1.',
        steps: [
          { label: 'Step 1: Enumerate the passing combinations', text: 'Four input combinations satisfy two-or-more: $AB\\bar{C}$, $A\\bar{B}C$, $\\bar{A}BC$ and $ABC$, so the canonical sum of products is $F = AB\\bar{C} + A\\bar{B}C + \\bar{A}BC + ABC$.' },
          { label: 'Step 2: Repeat the all-ones term', text: 'Since $A + A = A$ (idempotence), append extra copies of $ABC$ so that each partial term gains a partner sharing two variables: $F = AB\\bar{C} + ABC + A\\bar{B}C + ABC + \\bar{A}BC + ABC$.' },
          { label: 'Step 3: Group and factor', text: 'Each pair shares two of the three variables: $F = AB(\\bar{C} + C) + AC(\\bar{B} + B) + BC(\\bar{A} + A)$. The complementation rule $X + \\bar{X} = 1$ collapses each bracket to 1.' },
          { label: 'Step 4: Read off the network', text: '$F = A\\cdot B + B\\cdot C + C\\cdot A$: three two-input AND gates into a three-input OR (Hughes Fig. 23.9). Any two confirmed sensors switch the output on; a single failed sensor cannot — the majority voter.' },
        ],
        result: '$F = A\\cdot B + B\\cdot C + C\\cdot A$ — three ANDs and one OR, six minterms reduced by idempotence and complementation.',
      },
      {
        title: 'When simplification does not save gates (Hughes, Example 23.3)',
        problem: 'Draw a circuit of gates for $F = A + B\\cdot C$, then transform it using De Morgan’s theorem and compare the gate counts of the two realizations.',
        steps: [
          { label: 'Step 1: The direct circuit', text: 'One AND gate forms $B\\cdot C$; one OR gate combines it with $A$ (Hughes Fig. 23.12). Two gates, no inverters — the natural realization.' },
          { label: 'Step 2: Apply De Morgan', text: 'Complement twice and unfold: $F = \\overline{\\overline{A + B\\cdot C}} = \\overline{\\bar{A}\\cdot\\overline{B\\cdot C}} = \\overline{\\bar{A}\\cdot(\\bar{B} + \\bar{C})}$, using $\\overline{B\\cdot C} = \\bar{B} + \\bar{C}$.' },
          { label: 'Step 3: Realize the new form', text: 'An OR gate forms $\\bar{B} + \\bar{C}$; an AND gate combines that with $\\bar{A}$; a final inverter un-does the outer complement (Fig. 23.13). Still two gates — but now four inverters are needed: $\\bar{A}$, $\\bar{B}$, $\\bar{C}$ and the output inversion.' },
          { label: 'Step 4: The lesson', text: 'Hughes draws the moral explicitly: not all applications of combinational logic rules result in a saving. Minimizing literal count and minimizing gate count are different objectives — the systematic version of the problem is what Karnaugh maps attack in section 18.3.' },
        ],
        result: 'Both forms use two gates; the De Morgan form adds four inverters — algebraic simplification is not always circuit simplification.',
      },
      {
        title: 'One function, two standardizations (Hughes, Example 23.5)',
        problem: 'Realize $F = \\bar{B}\\cdot(A + C) + A\\cdot B$ using (a) only NOR gates and (b) only NAND gates.',
        steps: [
          { label: 'Step 1: Minimize first', text: 'Expand and regroup: $F = A\\bar{B} + \\bar{B}C + AB = A(\\bar{B} + B) + \\bar{B}C = A + \\bar{B}\\cdot C$, by the second distributive rule and $B + \\bar{B} = 1$.' },
          { label: 'Step 2: Prepare the NOR form', text: 'A NOR output is the complement of an OR, so work with $\\bar{F} = \\overline{A + \\bar{B}C} = \\bar{A}\\cdot\\overline{\\bar{B}C} = \\bar{A}\\cdot(B + \\bar{C}) = \\bar{A}B + \\bar{A}\\bar{C}$, using De Morgan twice and the distributive rule.' },
          { label: 'Step 3: The NOR circuit', text: 'Generate $\\bar{A}\\cdot B$ and $\\bar{A}\\cdot\\bar{C}$ separately and feed them to one final NOR: $F = \\overline{\\bar{A}B + \\bar{A}\\bar{C}}$ (Hughes Fig. 23.20). Each product is itself NOR-made — $\\bar{A}\\cdot\\bar{C}$ falls straight out as $\\overline{A + C}$.' },
          { label: 'Step 4: The NAND form', text: 'Keep $F = A + \\bar{B}C$ and read it as a NAND of complements: the inputs to the final NAND are $\\bar{A}$ and $\\overline{\\bar{B}C} = B + \\bar{C}$, so $F = \\overline{\\bar{A}\\cdot(B + \\bar{C})}$ (Fig. 23.21), with the $B + \\bar{C}$ term generated separately.' },
          { label: 'Step 5: Compare', text: 'Neither form is the absolute minimum — Hughes notes that systematic reduction to minimal form lies beyond an introductory text — but both use a single gate type throughout, which is the point of standardization: one chip type, one spare, one behaviour.' },
        ],
        result: 'All-NOR via $F = \\overline{\\bar{A}B + \\bar{A}\\bar{C}}$; all-NAND via $F = \\overline{\\bar{A}\\cdot(B + \\bar{C})}$ — two different single-gate-type circuits for the same minimized function.',
      },
    ],
    keyTakeaways: [
      'Two states make signals regenerable: a 10 V ON arriving as 9 V is restored to exactly 10 V — the property analogue signalling can never have.',
      'The gates map onto everyday switch logic: OR is parallel switches, AND is series, EXCLUSIVE-OR is the two-way stair light, NOT inverts.',
      'Truth tables are the complete specification of a gate: NAND reads 0 only for all-1 inputs, NOR reads 1 only for all-0 inputs.',
      'De Morgan’s laws trade AND for OR under complementation — the tool that converts any AND/OR/NOT network into all-NAND or all-NOR form.',
      'The distributive law has two forms and $A + A\\cdot B = A$; idempotence lets terms be repeated so shared factors can be grouped out.',
      'Standardizing on NAND or NOR costs gates but unifies the parts list; systematic minimization is the job of the Karnaugh maps in the next section.',
    ],
    quiz: [
      {
        q: 'Which input combination makes a three-input NAND gate output 0?',
        options: ['Any input at 0', 'Exactly one input at 0', 'All inputs at 1', 'All inputs at 0'],
        answer: 2,
        explanation: 'NAND is AND followed by NOT: the AND output is 1 only when all inputs are 1, and it is exactly that row the NAND inverts to 0. Hughes Table 23.6 shows the output column 1 for every other combination.',
      },
      {
        q: 'By De Morgan’s theorem, $\\overline{A + B + C}$ equals:',
        options: [`$\\bar{A} + \\bar{B} + \\bar{C}$`, `$\\bar{A} \\cdot \\bar{B} \\cdot \\bar{C}$`, `$A \\cdot B \\cdot C$`, `$\\overline{A \\cdot B \\cdot C}$`],
        answer: 1,
        explanation: 'Complementing an OR turns it into an AND of the complements — Hughes equation [23.16]. Its twin, $\\overline{A\\cdot B\\cdot C} = \\bar{A} + \\bar{B} + \\bar{C}$, is equation [23.15]; both are read gate-wise as: NAND equals a bubbled-OR, NOR equals a bubbled-AND.',
      },
      {
        q: 'Which function computes the sum bit (ignoring carry) of a one-bit binary addition?',
        options: ['AND', 'OR', 'EXCLUSIVE-OR', 'NAND'],
        answer: 2,
        explanation: '$A \\oplus B$ is 1 exactly when the inputs differ — the sum bit without its carry, whose value is $A \\cdot B$. Hughes models XOR with the two-way stair-light switching of Fig. 23.3; the truth table is 0 for equal inputs, 1 for different ones.',
      },
      {
        q: 'How is a NOT gate built from NOR gates?',
        options: ['Tie the two inputs of one NOR together', 'Two NORs in cascade, the second un-inverting the first', 'Three NORs with inverted inputs', 'A NOR followed by an AND'],
        answer: 0,
        explanation: '$\\overline{A + A} = \\bar{A}$: one NOR with both inputs driven by A inverts it (Hughes Fig. 23.14). OR then costs two NORs and AND costs three — inverting both inputs, then NORing: $\\overline{\\bar{A} + \\bar{B}} = A\\cdot B$ (Figs. 23.15–23.16).',
      },
      {
        q: 'In the AND-gate timing diagram of Hughes Fig. 23.30, with three time-varying inputs, the output is:',
        options: ['HIGH whenever any input is HIGH', 'HIGH only during the intervals where all three inputs are simultaneously HIGH', 'A triangular ramp following the input edges', 'LOW only when all inputs are LOW'],
        answer: 1,
        explanation: 'AND needs every input HIGH to output HIGH, so the output waveform is the intersection in time of the three HIGH intervals. The OR gate of Fig. 23.31 is the dual: its output is HIGH during the union of the HIGH intervals.',
      },
    ],
  },

  // ------------------------------------------------------------------ 18.3
  {
    sectionId: 'ece-e-digital-s13',
    readingTime: 12,
    intro: 'Simplifying by Boolean algebra, as Example 23.3 showed, offers no guarantee of reaching the cheapest circuit. This section brings the two tools that close the gap and then the element that algebra alone cannot supply: memory. Karnaugh maps make minimization of four-variable functions a visual routine; feeding a gate output back to an input turns a logic network into a circuit with states. Add a clock and the result is a state machine — the register-and-counter architecture that the converters of section 18.4 and the interfaces of section 18.5 plug into.',
    objectives: [
      'Construct Karnaugh maps for two, three and four variables and fill them from minterm lists, expressions or truth tables',
      'Apply the looping rules — powers of two, largest groups, edge wrap-around — and read the minimal sum-of-products from the loops',
      'Distinguish combinational from sequential circuits, and synchronous from asynchronous behaviour and inputs',
      'Analyze the SR latch, the JK flip-flop and the D-type flip-flop, including the race-around problem and its master–slave cure',
      'Describe programmable logic devices and the role of Verilog-style hardware description languages',
    ],
    concepts: [
      {
        term: 'Combinational versus sequential circuits',
        kind: 'definition',
        statement: 'A **combinational** circuit’s outputs are a function of the present inputs alone; a **sequential** circuit’s outputs depend also on the previous state of the circuit.',
        detail: 'Hughes section 23.15: if the input state of a combinational circuit is known, the output is wholly determined. Sequential behaviour needs two additions — timing, normally supplied by a **clock** (a square or pulse waveform that says when changes may occur), and storage of the previous state, called a memory or register. Basic storage elements are ordinary combinational gates connected with positive feedback; such clocked circuits are called **state machines** because they step from state to state in time with the clock.',
      },
      {
        term: 'The Karnaugh map',
        kind: 'method',
        statement: 'A **Karnaugh map** is a truth table redrawn so that adjacent cells differ in exactly one input variable; each cell is one **minterm** — one ANDed combination of all the inputs.',
        detail: 'Rows and columns follow Gray-code order (00, 01, 11, 10), so a two-variable map has $2^2 = 4$ cells, three variables give 8 and four variables 16 (Hughes Figs. 23.22–23.24). Cells carry their binary code number, with the left-hand variable the most significant bit; Hughes orders the inputs D, C, B, A from left to right with A the LSB. Filling sources can be minterm lists ($F = 0, 5, 6, 8, 12, 13$ in Example 23.7), a logic expression (each product term names its cells — Examples 23.8 and 23.9), or a truth table (Example 23.10). Four variables are handled straightforwardly, six with difficulty; beyond that, three-dimensional maps or map-entered variables are needed.',
      },
      {
        term: 'The looping rules',
        kind: 'law',
        statement: 'Group the 1s in **rectangular groups of $2^n$ adjacent cells**, as large as possible, covering every 1 at least once; each loop contributes one product term in the variables that stay constant inside it.',
        detail: 'Hughes section 23.13(e): groups of 1, 2, 4, 8… cells only; square or rectangular; the larger the group the simpler the term, because each doubling of group size removes one variable. Groups may overlap, and any group whose every cell is covered by other groups is redundant. Crucially, **the edges are adjacent** — the left column touches the right and the top row touches the bottom, because the Gray-coded labels differ in one bit around the wrap. Grouping the 0s instead of the 1s gives the inverse function. Several different minimal covers may tie, all correct.',
      },
      {
        term: 'Synchronous and asynchronous behaviour',
        kind: 'definition',
        statement: 'In a **synchronous** circuit all outputs change together, in step with one edge of the clock; in an **asynchronous** circuit the outputs change at different times — typically through propagation delays through the elements.',
        detail: 'The same words apply to the inputs of a single element: synchronous inputs take effect only at the active clock edge, while asynchronous inputs act the moment they change. The JK flip-flop below has both kinds — J and K are synchronous, but Preset and Clear act directly, independent of the clock. The distinction matters because asynchronous paths are where races and glitches live; the race-around problem of the JK flip-flop is the classic example.',
      },
      {
        term: 'The SR latch',
        kind: 'definition',
        statement: 'Cross-coupling two gates with positive feedback gives a **bistable** — a circuit with two stable states; the NAND **SR latch** sets with $S = 0$, resets with $R = 0$, and remembers when both stay high.',
        detail: 'Start from two inverters, each output feeding the other’s input: Q high forces the second output low and vice versa — two stable states, Q and $\\bar{Q}$ (Hughes Fig. 23.32). Replacing the inverters with two-input NAND gates adds active-low Set and Reset inputs. The truth table (Table 23.11): $S = 0, R = 0$ drives both outputs high — the invalid state, the logical contradiction $Q = \\bar{Q}$; $S = 0, R = 1$ sets $Q = 1$; $S = 1, R = 0$ resets $Q = 0$; and $S = R = 1$ changes nothing — the latch remembers which input was last low. The one forbidden transition is releasing both lows simultaneously: the outcome is indeterminate. A clocked SR latch gates the inputs so changes occur only while the clock is high (level triggering), restoring active-high inputs but inheriting the same forbidden state. The classic application is switch de-bouncing: mechanical contacts bounce, but a changeover switch driving an SR latch delivers one clean pulse per throw.',
      },
      {
        term: 'The JK flip-flop and the race-around problem',
        kind: 'definition',
        statement: 'The **JK flip-flop** feeds $Q$ and $\\bar{Q}$ back to gate the K and J inputs, so the SR forbidden state $J = K = 1$ becomes a **toggle**: $Q^{n+1} = \\bar{Q}^{\\,n}$.',
        detail: 'Truth table (Hughes Table 23.14): $J = K = 0$ holds; $J = 0, K = 1$ resets; $J = 1, K = 0$ sets; $J = K = 1$ toggles. But level-triggered toggling has the **race-around** problem: with every gate delayed 10 ns, a clock high lasting longer than about 30 ns lets the output toggle, feed back, and toggle again — Hughes traces the 10 ns cascade event by event and the circuit oscillates for as long as the clock stays high (Fig. 23.40). The **master–slave** arrangement fixes it: while the clock is high, the slave is isolated by the inverted clock and only the master responds; when the clock falls, the slave copies the master — one toggle per clock pulse, guaranteed. Asynchronous Preset and Clear inputs (usually active low) force the outputs at any time. With J and K both tied permanently high, the flip-flop toggles on every clock edge — frequency division by two, the seed of every binary counter.',
      },
      {
        term: 'The D-type flip-flop',
        kind: 'definition',
        statement: 'The **D-type flip-flop** stores one bit: its data input D drives J and its inverse drives K, so after the active clock edge $Q^{n+1} = D$.',
        detail: 'Hughes section 23.17(c): the D-type is a JK flip-flop with D connected to J and $\\bar{D}$ to K, collapsing the four J/K cases into "copy the input". Its truth table has two rows: $D = 0 \\Rightarrow Q^{n+1} = 0$ and $D = 1 \\Rightarrow Q^{n+1} = 1$. It is the most widely used flip-flop of all — shift registers, storage registers and register files are arrays of D-types clocked together, and the successive-approximation register of section 18.4 is built from the same storage elements with steering logic that sets and clears its bits trial by trial.',
      },
      {
        term: 'Integrated-circuit logic families',
        kind: 'insight',
        statement: 'Logic gates ship as **integrated circuits** — a typical package holds four two-input gates in a 14-pin dual-in-line package about $18\\,\\text{mm} \\times 6\\,\\text{mm}$ — in two rival technologies: CMOS and TTL.',
        detail: 'Hughes section 23.18: CMOS (complementary metal–oxide–semiconductor) is the manufacturers’ favourite for its low power dissipation — helped by supply voltages falling from 5 V to 3.3 V — but it is sensitive to electrostatic discharge and was historically slower. TTL (transistor–transistor logic), built from bipolar transistors, shrugs off static and survives prototype handling; many CMOS devices are pin-compatible with their TTL counterparts, so development can proceed in TTL and production transfer to CMOS. The small-outline IC (SOIC) is the surface-mount sibling of the DIP. The electrical details — logic levels, noise margins, fan-out — are the business of section 18.5; single-chip gate arrays themselves are increasingly displaced by the FPGAs of concept 9.',
      },
      {
        term: 'Programmable logic and HDLs',
        kind: 'insight',
        statement: 'A **field-programmable gate array (FPGA)** implements logic that is programmed — and reprogrammed — from a description written in a **hardware description language** (HDL) such as Verilog or VHDL.',
        detail: 'Programmable devices cost less, flex more and use less board space than wired gate networks. Hughes section 23.19 outlines the method: designs are described at four levels of abstraction — algorithmic (C-like statements), register transfer (registers joined by Boolean equations), gate level and switch level — and the basic unit is the module, which names the block, declares its ports and describes its behaviour. Bit-wise operators do the logic: vertical bar for OR, ampersand for AND, tilde for NOT, so a two-input NAND is one line assigning the complement of (A AND B). Constants carry size, base and value — four bits, binary base, 0000, for instance — with decimal, octal and hexadecimal bases also available. Compilers simulate the design early in the cycle and optimize the logic, often rescuing imperfectly minimized expressions; the deeper language study belongs to the Digital Logic subject.',
      },
    ],
    examples: [
      {
        title: 'Minimizing a four-variable function (Hughes, Examples 23.9–23.12)',
        problem: 'A four-input function G is specified by nine minterms — the cells numbered 1, 3, 4, 5, 6, 7, 8, 10 and 14 in the D, C, B, A map. Fill the Karnaugh map, choose the loops, and write the minimal expression.',
        steps: [
          { label: 'Step 1: Set up the map', text: 'Rows carry the Gray-ordered D C pairs 00, 01, 11, 10; columns the B A pairs in the same order. Cell numbers run 0–15 with DCBA as the binary code: cell 1 is row 00, column 01; cell 14 is row 11, column 10 (Hughes Fig. 23.24).' },
          { label: 'Step 2: Fill in the 1s', text: 'Place 1s in cells 1 and 3 (row 00), the entire row 01 (cells 4, 5, 6, 7), cells 8 and 10 (row 10) and cell 14 (row 11); the remaining seven cells are 0. This is the map of Fig. 23.27 — equivalently the nine-product-term expression of Example 23.9 or the truth table of Example 23.10.' },
          { label: 'Step 3: Loop the four-groups', text: 'Cells 1, 3, 5, 7 form a $2\\times2$ block spanning rows 00–01 and columns 01–11: across it, A stays 1 and D stays 0 while B and C vary — loop term $A\\cdot\\bar{D}$. Cells 4, 5, 6, 7 are the whole row 01: C stays 1 and D stays 0 — loop term $C\\cdot\\bar{D}$.' },
          { label: 'Step 4: Loop the pairs, using the wrap-around', text: 'Cell 10 (row 10, column 10) pairs with cell 14 (row 11, column 10): B, D and A = 0 stay fixed while C varies — term $\\bar{A}\\cdot B\\cdot D$. Cell 8 (row 10, column 00) pairs with cell 10 across the left–right edge wrap: D = 1, C = 0, A = 0 — term $\\bar{A}\\cdot\\bar{C}\\cdot D$. That loop is legal only because the map’s edges are adjacent.' },
          { label: 'Step 5: Assemble and verify', text: 'OR the four loop terms: $G = A\\bar{D} + C\\bar{D} + \\bar{A}BD + \\bar{A}\\bar{C}D$. Nine minterms of four literals have collapsed to four terms of two or three literals, and every 1 sits in at least one loop — Hughes Figs. 23.28–23.29.' },
        ],
        result: '$G = A\\bar{D} + C\\bar{D} + \\bar{A}BD + \\bar{A}\\bar{C}D$ — four loops, one of them valid only through edge wrap-around.',
      },
      {
        title: 'Tracing the SR latch (Hughes, section 23.17)',
        problem: 'A NAND SR latch sits in the memory state (both inputs high, $Q = 1$). Trace what happens when S is taken low and then returned high, and show why the latch remembers.',
        steps: [
          { label: 'Step 1: The set operation', text: 'Any low input to a NAND gate forces its output high. With S low, the upper gate’s output Q goes to 1 regardless of its other input.' },
          { label: 'Step 2: The complementary output follows', text: 'The lower NAND now sees Q = 1 and R = 1 (still high), so its output $\\bar{Q}$ goes low.' },
          { label: 'Step 3: Release S', text: 'S returns high, but the upper gate’s other input is the still-low $\\bar{Q}$, so Q stays 1. With both inputs high the circuit now holds its state — nothing further changes.' },
          { label: 'Step 4: Why it remembers', text: 'The stored low on $\\bar{Q}$ now plays the role the original S = 0 played. Had R been the last input taken low instead, the mirror argument would hold Q low: the latch remembers which input was last low, which is Hughes’s summary of the memory state. Only the simultaneous release of both lows defeats it.' },
        ],
        result: 'S pulsed low gives $Q = 1$, $\\bar{Q} = 0$, and the pair holds after S returns high — the information lives in the loop, not in the inputs.',
      },
      {
        title: 'A logic function in Verilog (Hughes, Example 23.13)',
        problem: 'Write a Verilog module implementing $F = \\overline{(A + B)\\cdot(C + D)}$ for programming onto an FPGA, and describe how it is used.',
        steps: [
          { label: 'Step 1: Declare the module and ports', text: 'The module names the block and lists its connections — four inputs A, B, C, D and one output F — then declares F as a register so procedural assignments can drive it.' },
          { label: 'Step 2: Describe the behaviour', text: 'An always block that watches all four inputs assigns F from the Boolean expression using the bit-wise operators: vertical bar for OR, ampersand for AND, tilde for NOT. The book’s one-line description assigns F the complement of ((A OR B) AND (C OR D)).' },
          { label: 'Step 3: Simulate before building', text: 'Because the always block re-evaluates whenever any input changes, simulation exercises all sixteen input combinations and compares them with the intended truth table before any hardware is touched — the early-error payoff Hughes stresses for HDL workflows.' },
          { label: 'Step 4: Note the abstraction', text: 'The same module synthesizes to whatever gate technology the FPGA provides: the description is technology-independent, and the compiler optimizes the expression even if the designer did not.' },
        ],
        result: 'A few lines — ports, a register, an always block and one Boolean assignment — implement the function; the toolchain does the rest.',
      },
    ],
    keyTakeaways: [
      'Combinational circuits are memoryless; sequential circuits add a clock and storage — and the storage is built from gates plus positive feedback alone.',
      'A Karnaugh map is a Gray-coded truth table: adjacent cells differ in one variable, so a loop of $2^n$ cells removes $n$ literals from the expression.',
      'Loop largest-first, cover every 1, and remember the wrap-around: the left edge touches the right, the top touches the bottom.',
      'The SR latch remembers which input was last low; its only forbidden condition is releasing Set and Reset together.',
      'The JK flip-flop turns the forbidden state into a toggle, needs the master–slave structure to tame the race-around problem, and divides frequency by two with J = K = 1.',
      'The D-type flip-flop copies its input at each active clock edge ($Q^{n+1} = D$) and is the working register element of every digital system.',
      'FPGAs programmed in Verilog or VHDL have displaced wired gate assemblies: describe the behaviour, simulate, and let the compiler optimize.',
    ],
    quiz: [
      {
        q: 'In a four-variable Karnaugh map, cells 8 and 10 are adjacent because:',
        options: ['They are in the same row and all cells of a row are mutually adjacent', 'The map wraps horizontally — columns 00 and 10 differ only in B, with A = 0 in both', 'All cells in the bottom half are mutually adjacent', 'They are not adjacent, and a loop containing both is illegal'],
        answer: 1,
        explanation: 'Cell 8 is row 10, column 00; cell 10 is row 10, column 10. The Gray-coded columns 00 and 10 differ only in B, and the edges wrap so the leftmost column touches the rightmost — Hughes states this as groups joining from the left side to the right side. Looping 8 with 10 yields the term $\\bar{A}\\bar{C}D$ in the worked example.',
      },
      {
        q: 'A loop in a Karnaugh map must contain:',
        options: ['Any number of adjacent 1s', 'Exactly 3, 5 or 7 adjacent cells', 'A power-of-two number of adjacent cells (1, 2, 4, 8, …)', 'At least half of all the cells'],
        answer: 2,
        explanation: 'Only groups of $2^n$ cells remove exactly $n$ variables; a group of three cannot produce a clean literal set. Hughes also requires groups as large as possible, square or rectangular, with every 1 covered at least once.',
      },
      {
        q: 'A NAND SR latch in the memory state (both inputs high, $Q = 1$) has S pulsed low. After S returns high, the outputs are:',
        options: [`$Q = 0$, $\\bar{Q} = 1$`, '$Q = 1$, $\\bar{Q} = 0$, held by the feedback', 'Both outputs high — the invalid state', 'Indeterminate'],
        answer: 1,
        explanation: 'The low on S forces Q high; that drives the lower gate’s output $\\bar{Q}$ low; once S returns high, the low on $\\bar{Q}$ is what keeps Q high. The latch remembers which input was last low, and the state persists with both inputs high.',
      },
      {
        q: 'Why does the basic level-triggered JK flip-flop with J = K = 1 need the master–slave structure?',
        options: ['To make it trigger on the falling edge for convenience', 'Because with 10 ns propagation delays the feedback toggles repeatedly while the clock is high — the race-around problem', 'To provide the Preset and Clear inputs', 'To reduce the number of gates'],
        answer: 1,
        explanation: 'Hughes traces the cascade: the J-gate output falls at 10 ns, Q rises at 20 ns, $\\bar{Q}$ and the K-gate output fall at 30 ns, Q falls again at 40 ns — an oscillation that persists as long as the clock is high. Isolating the slave while the clock is high, and transferring on the fall, guarantees exactly one toggle per pulse.',
      },
      {
        q: 'A D-type flip-flop has D = 1 for several clock pulses in a row. What does Q do after each active clock edge?',
        options: ['It toggles on every clock edge', 'It stays 1 — Q follows D at each edge, copying the stored data', 'It responds to the first edge only and ignores the rest', 'It resets after two edges'],
        answer: 1,
        explanation: 'The D-type truth table has two rows: $Q^{n+1} = 0$ if D = 0 and $Q^{n+1} = 1$ if D = 1 — D wired to J and its inverse to K collapses the JK behaviour into "copy the input". It toggles only when D itself alternates.',
      },
    ],
  },

  // ------------------------------------------------------------------ 18.4
  {
    sectionId: 'ece-e-digital-s14',
    readingTime: 11,
    intro: 'The earlier chapters of this book built amplifiers, filters and oscillators for continuous signals; the first three sections of this chapter built the binary world that processes them noiselessly. Between the two stands the converter. Hughes’s digital thermometer and CD player are its everyday portraits — analogue in, digital out, and back to analogue at the end — and its hardware is nothing new: the summing amplifier of Chapter 15 turns bits into a weighted voltage, and the comparator, fed back around a counter or register, turns a voltage into bits.',
    objectives: [
      'Explain why systems convert analogue to digital as early as possible and back as late as possible, tracing the thermometer and CD-player block chains',
      'Compute bit weights, full-scale outputs, resolution and accuracy for weighted-resistor and R/2R ladder D/A converters',
      'Specify D/A performance through resolution, accuracy, linearity, settling time and BCD-coded inputs',
      'Analyze the op-amp comparator with its threshold voltage and finite gain',
      'Explain and quantify digital-ramp, successive-approximation and flash A/D converters, including conversion time and quantization error',
    ],
    concepts: [
      {
        term: 'The need for conversion',
        kind: 'insight',
        statement: 'Digital systems can **correct their errors** and analogue ones cannot, yet the human senses and most measurements are analogue — so signals are converted to digital as early as possible and back to analogue at the end.',
        detail: 'Hughes section 21.1: digital transmission returns exactly what was put in, while every analogue stage degrades its signal slightly; but hearing, seeing and the measurement side of control systems demand continuity. Hence the architecture: sensor, amplifier, A/D converter, digital processing, D/A converter, output amplifier. Hughes’s two worked chains are the digital thermometer (temperature sensor, linear amplifier, A/D converter, then a logic controller that samples at regular intervals and drives a display formatted in degrees Celsius or Fahrenheit) and the CD player (laser pick-up, amplifier, digital signal processor, D/A converter, stereo amplifiers, loudspeakers).',
      },
      {
        term: 'D/A conversion and resolution',
        kind: 'definition',
        statement: 'A D/A converter maps an $n$-bit input code to one of $2^n$ output levels through a **proportionality factor**; that factor — the step caused by a 1-bit change — is the **resolution**, set by the LSB weight.',
        detail: 'Hughes’s 4-bit example: if the code 1011 (eleven) produces 11 mV, the factor is 1 mV per count, and a factor of 7 would give 77 mV. Example 21.1: a 5-bit converter gives 12 mV for 10100 (= 20), so the factor is 0.6 mV per count; the input 11100 (= 28) gives 16.8 mV, and the full range runs 0 to 18.6 mV in 0.6 mV steps — a request for 16.6 mV is answered with 16.8. Percentage resolution is the step over the maximum output: a 4-bit counter-driven converter with unit steps manages $1/15 = 6.67$ per cent, and Example 21.2’s 8-bit converter with 5 mV steps climbs $2^8 - 1 = 127$ steps to 635 mV for 0.79 per cent. More bits, smaller steps — always.',
      },
      {
        term: 'The weighted-resistor DAC',
        kind: 'method',
        statement: 'The weighted DAC is the **summing amplifier** of Chapter 15 with binary-weighted input resistors; Hughes’s version gives $$V_{\\text{out}} = V_D + 0.5V_C + 0.25V_B + 0.125V_A$$ up to sign (equation [21.1]).',
        detail: 'Each bit switches a nominal 5 V into its own input resistor, and the ratio of the feedback resistance to that resistor sets the bit’s gain. Hughes Fig. 21.4 uses input resistors $R$, $2R$, $4R$, $8R$ from MSB D down to LSB A with $R_f = R$: the LSB alone (input 0001) contributes $0.125 \\times 5 = 0.625\\,\\text{V}$, which is also the step size. Example 21.4’s variant doubles every resistor: with $R_f = 1\\,\\text{k}\\Omega$ and inputs of 2, 4, 8 and 16 k$\\Omega$ the weights become $V_D = 2.5\\,\\text{V}$, $V_C = 1.25\\,\\text{V}$, $V_B = 0.625\\,\\text{V}$, $V_A = 0.3125\\,\\text{V}$. The BCD-coded input of section 18.1 simply makes successive 4-bit groups ten times heavier — Example 21.3’s code 859 at 2 mV per step gives 1.718 V.',
      },
      {
        term: 'Converter accuracy in practice',
        kind: 'definition',
        statement: 'Real bit inputs run between about 2 V and 5.5 V for a 1 and up to 0.8 V for a 0, so **precision-level amplifiers** clamp each line to exactly 5 V or 0 V before the summer; performance is then specified by relative accuracy, differential linearity, linearity and settling time.',
        detail: 'Hughes sections 21.3–21.4. **Relative accuracy** is the maximum deviation from the ideal output as a percentage of full scale: Example 21.5 works a converter whose full-scale output is $5 + 0.5\\times5 + 0.25\\times5 + 0.125\\times5 = 9.375\\,\\text{V}$, so $\\pm 0.02$ per cent is $\\pm 1.875\\,\\text{mV}$. **Differential linearity** is the maximum deviation of any step from the ideal step size — the same $\\pm 1.875$ mV applied to the 625 mV ideal step. **Settling time** is the time to settle within one LSB of the final value. Resolution and accuracy should be matched — Hughes quotes about 0.2 per cent as the working figure — since a 16-bit resolution behind 1 per cent accuracy is wasted silicon.',
      },
      {
        term: 'The R/2R ladder DAC',
        kind: 'method',
        statement: 'The **R/2R ladder** produces the same binary-weighted outputs using **only two resistor values**: each bit drives a 2R rung onto a rail of R segments terminated in 2R.',
        detail: 'With every inactive bit grounded, successive parallel-series reductions make the resistance looking into the rail 2R at every node, so each rung source sees a Thévenin halving on its way to the summing node. Input D (code 1000) delivers $5/(2R)$ into the virtual ground, and with $R_f = 2R$ the output magnitude is $(5/2R)\\times 2R = 5\\,\\text{V}$ — the MSB alone (Hughes Fig. 21.9). Input C (0100) first Thévenin-reduces to a 2.5 V source behind R (Figs. 21.10–21.11) and gives 2.5 V; each lower bit halves again — 1.25 V, 0.625 V — so the output is proportional to the binary weight of the input bits, exactly as Hughes concludes. Four different precision resistors have become two, and the ratio 2:1 is the easiest of all to hold matched on a chip.',
      },
      {
        term: 'The comparator',
        kind: 'definition',
        statement: 'A **comparator** decides which of two analogue signals is larger; built from an op-amp in high-gain differential mode, it saturates at one supply rail or the other whenever the difference exceeds the **threshold voltage**.',
        detail: 'With $\\pm 10$ V supplies the output saturates at $+10$ V or $-10$ V, and a typical open-loop gain of 10 000 makes the linear region only $\\pm 1$ mV wide — the threshold. Hughes Example 21.6: a difference of 2 mV exceeds the threshold and saturates the output at $+10$ V, while 0.5 mV leaves the amplifier linear, giving $G\\times\\Delta V = 10\\,000 \\times 0.5\\,\\text{mV} = +5\\,\\text{V}$. Because supply rails drift, a Zener diode in series with a resistor fixes the delivered levels. The comparator is the decision element of every converter below — and, wired with positive feedback, it is the Schmitt trigger of Chapter 17.',
      },
      {
        term: 'The digital-ramp ADC',
        kind: 'method',
        statement: 'The **digital-ramp converter** drives a DAC from a counter: a start pulse resets the count and locks out the clock, then the DAC staircase climbs one LSB per pulse until it exceeds the input by at least the threshold, freezing the count at the answer.',
        detail: 'Hughes Fig. 21.15: the counter, DAC and comparator in a loop, with an AND gate preventing clock pulses from disturbing the counter during reset. The frozen count is the digital representation of $V_A$. Its vice is time — conversion length grows linearly with the input magnitude, worst case near full scale. The **continuous** variant substitutes an up/down counter that tracks the input from its previous value instead of restarting, faster on average but still slow in the worst case. Quantization error is inherent: the staircase can land no closer than one step, and Hughes is careful to separate this from the converter’s accuracy, which is set by components and adds to it.',
      },
      {
        term: 'The successive-approximation ADC',
        kind: 'method',
        statement: 'The **successive-approximation converter** replaces the counter with a register and the linear search with a binary one: set each bit from MSB to LSB, keep it if the DAC output stays below the input, clear it if not.',
        detail: 'Hughes Fig. 21.12 shows the block diagram — comparator, control unit, clock, register and internal DAC — with the operating sequence: start command, clocked register updates, DAC output to the comparator, comparison against $V_A$, stop when the comparator output falls. An $n$-bit conversion takes $n$ comparison cycles whatever the input value, which is the decisive advantage: the 12-bit converter of Example 21.7 needs twelve clock cycles where its ramp counterpart needs thousands of counts. It remains the general-purpose workhorse between the slow ramp and the fast flash.',
      },
      {
        term: 'The flash ADC',
        kind: 'definition',
        statement: 'A **flash converter** compares the input against every level at once: a resistor divider strings $2^n$ taps between reference and ground, each tap driving its own comparator, and a priority encoder reads the thermometer-coded results.',
        detail: 'One comparison, done — the fastest architecture there is. The cost is hardware: $2^n - 1$ comparators, meaning 255 for 8 bits and over a thousand for 10, each burning power and loading the input with its capacitance. Flash rules where speed is everything — oscilloscope front ends and video — while half-flash and pipelined designs trade some of that speed back for sanity. Hughes closes the chapter with the engineer’s anthem: no matter how fast the converter, engineers will seek better speeds.',
      },
    ],
    examples: [
      {
        title: 'Weights and accuracy of a weighted DAC (Hughes, Examples 21.4 and 21.5)',
        problem: 'A 4-bit weighted DAC has $R_f = 1\\,\\text{k}\\Omega$ with input resistors of 2, 4, 8 and 16 k$\\Omega$ for inputs D, C, B, A; bit inputs are 5 V. Find each bit’s weight. A second converter, with input resistors of $R$, $2R$, $4R$, $8R$, has full-scale output 9.375 V and relative accuracy $\\pm 0.02$ per cent — find the maximum output deviation.',
        steps: [
          { label: 'Step 1: Weight of the MSB', text: 'The summing-amplifier gain for input D is the feedback-to-input resistance ratio, $1\\,\\text{k}\\Omega/2\\,\\text{k}\\Omega = 0.5$, so $V_D = 0.5 \\times 5 = 2.5\\,\\text{V}$.' },
          { label: 'Step 2: The remaining weights', text: 'Halving down the input ladder: $V_C = 1.25\\,\\text{V}$, $V_B = 0.625\\,\\text{V}$ and $V_A = 0.3125\\,\\text{V}$ — the LSB weight, hence the step size, is 0.3125 V (Hughes prints 0.313 V).' },
          { label: 'Step 3: Full-scale of this unit', text: 'Input 1111 sums all four weights: $2.5 + 1.25 + 0.625 + 0.3125 = 4.6875\\,\\text{V}$, in steps of 0.3125 V.' },
          { label: 'Step 4: The accuracy question', text: 'For the second converter the weights are the doubled set (1, 0.5, 0.25, 0.125 into 5 V), so full scale is $5 + 0.5\\times5 + 0.25\\times5 + 0.125\\times5 = 9.375\\,\\text{V}$, as Hughes computes for Example 21.5.' },
          { label: 'Step 5: Maximum deviation', text: 'Relative accuracy is a percentage of full scale: $0.02 \\times 9.375/100 = 1.875\\,\\text{mV}$. No output may deviate from its ideal value by more than $\\pm 1.875$ mV, and the differential-linearity specification applies the same figure to the 625 mV ideal step.' },
        ],
        result: 'Weights 2.5 / 1.25 / 0.625 / 0.3125 V; full-scale 4.6875 V on the first unit, 9.375 V on the second, whose outputs are held within $\\pm 1.875$ mV.',
      },
      {
        title: 'The R/2R ladder halves at every rung (Hughes, section 21.5)',
        problem: 'In the 4-bit R/2R ladder of Hughes Fig. 21.8 ($R_f = 2R$, 5 V bit inputs), compute the output for inputs 1000 and 0100, deduce the other two weights, and evaluate the full-scale input 1111.',
        steps: [
          { label: 'Step 1: Collapse the ladder for input 1000', text: 'With A, B and C grounded, successive parallel-series reduction of their rungs leaves an equivalent resistance of 2R looking into the rail from the summing node. Since that node is a virtual ground, no current flows in the equivalent, and the D-bit current is simply $5/(2R)$.' },
          { label: 'Step 2: Output for 1000', text: 'That current flows on through the feedback resistor: $|V_{\\text{out}}| = (5/2R)\\times 2R = 5\\,\\text{V}$ — the MSB alone, matching Hughes Fig. 21.9.' },
          { label: 'Step 3: Output for 0100', text: 'For input C, Thévenize at the rail junction: the 5 V behind its 2R rung faces the collapsed 2R of the left-hand ladder, halving to a 2.5 V source behind R (Fig. 21.11). Its current flows through the rail into the virtual-ground node and the feedback, giving $|V_{\\text{out}}| = 2.5\\,\\text{V}$ — half the MSB.' },
          { label: 'Step 4: Deduce and sum the rest', text: 'Each lower rung adds one more Thévenin halving: input B gives 1.25 V and input A gives 0.625 V. For 1111, superposition adds the four: $5 + 2.5 + 1.25 + 0.625 = 9.375\\,\\text{V}$ — fifteen 0.625 V steps from 0000 to 1111.' },
        ],
        result: 'Outputs 5 V, 2.5 V, 1.25 V and 0.625 V for bits D, C, B, A; full-scale 1111 gives 9.375 V, all with only two resistor values in the network.',
      },
      {
        title: 'A 12-bit conversion, ramp versus successive approximation (Hughes, Example 21.7)',
        problem: 'A digital-ramp A/D converter has a 1 MHz clock, a 12-bit DAC with 8.190 V full-scale output, and a comparator of 1 mV threshold. For an input $V_A = 4.528$ V find the step size, the counter result and the conversion time; then outline how the successive-approximation version handles the same input.',
        steps: [
          { label: 'Step 1: Step size', text: 'A 12-bit converter has $2^{12} - 1 = 4095$ steps, so the internal DAC advances $8190\\,\\text{mV}/4095 = 2\\,\\text{mV}$ per count.' },
          { label: 'Step 2: Where the ramp stops', text: 'The comparator falls only when $V_{DA}$ exceeds $V_A$ by at least the 1 mV threshold. The staircase levels are even millivolts, so 4.529 V is skipped and the count stops at 4.530 V — count $4530/2 = 2265$.' },
          { label: 'Step 3: Read the counter and the clock cost', text: 'The counter holds $2265 = 100011011001_2$, reached after 2265 clock pulses at one per microsecond — about 2.27 ms. (Hughes prints 4.53 ms for this part, a figure consistent with 1 mV steps rather than the 2 mV steps the book itself computes; the count, 2265, is the book’s own.)' },
          { label: 'Step 4: Resolution and quantization error', text: 'The resolution is the 2 mV step — $2/8190 \\times 100 = 0.024$ per cent — and the quantization error, the largest error the staircase granularity can impose, is one step. Accuracy is separate: component tolerances add to it, not into it.' },
          { label: 'Step 5: The successive-approximation alternative', text: 'With a register instead of a counter, the same converter runs a binary search: set the MSB (4096 mV — under 4528, keep), try bit 11 (6144 — over, clear), and so on down the twelve bits. The search homes onto $100011101000_2 = 2264$, whose DAC output is 4528 mV exactly — twelve clock cycles, about 12 microseconds, instead of thousands of counts.' },
        ],
        result: 'Ramp: $2265 = 100011011001_2$ after about 2.27 ms. SAR: $100011101000_2$ in twelve cycles. Resolution 2 mV (0.024 per cent) either way.',
      },
    ],
    keyTakeaways: [
      'Convert to digital early, process, convert back late: digital stages correct errors; senses, sensors and actuators stay analogue.',
      'A DAC output is proportional to the binary code; the LSB weight is the step size, and percentage resolution is step over full-scale — 8 bits at 5 mV steps gives 635 mV full scale and 0.79 per cent.',
      'The weighted DAC is a summing amplifier with R, 2R, 4R, 8R inputs (Hughes eq. [21.1]); its accuracy lives in the resistor ratios and in the precision-level amplifiers that clamp each bit to exactly 5 V or 0 V.',
      'The R/2R ladder buys the same weighted outputs with only two resistor values — every rung Thévenin-halves, so bits D, C, B, A give 5, 2.5, 1.25, 0.625 V.',
      'The comparator is a high-gain open-loop op-amp: 1 mV of threshold, $\\pm 10$ V of saturated decision — the binary decision element of every ADC.',
      'The digital-ramp ADC is simple but slow, its conversion time growing with the input; the successive-approximation ADC replaces counting with a twelve-step binary search; the flash ADC compares against every level at once and pays with $2^n - 1$ comparators.',
      'Quantization error is one LSB, inherent in any finite staircase, and is distinct from accuracy, which adds component tolerances on top.',
    ],
    quiz: [
      {
        q: 'An 8-bit D/A converter has a step size of 5 mV (Hughes, Example 21.2). Its maximum output voltage and percentage resolution are:',
        options: ['640 mV and 0.78 per cent', '635 mV and 0.79 per cent', '256 mV and 2.0 per cent', '635 mV and 1.6 per cent'],
        answer: 1,
        explanation: 'There are $2^8 - 1 = 127$ steps above zero, so the maximum (full-scale) output is $127 \\times 5 = 635\\,\\text{mV}$, and the percentage resolution is $5/635 \\times 100 = 0.79$ per cent. Resolution tightens as bits are added.',
      },
      {
        q: 'In the R/2R ladder of Hughes Fig. 21.8, taking input C high with all other inputs low reduces (by Thévenin) to:',
        options: ['A 5 V source behind 2R', 'A 2.5 V source behind R, giving a 2.5 V output', 'A 1.25 V source behind R', 'A 5 V source behind R'],
        answer: 1,
        explanation: 'The 5 V on C looks through its 2R rung into the collapsed 2R of the left-hand ladder: the divider halves the voltage to 2.5 V and the parallel combination leaves a Thévenin resistance of R. The current then flows through the rail into the virtual ground and the 2R feedback, delivering 2.5 V — half the MSB, exactly as binary weighting demands.',
      },
      {
        q: 'A comparator with gain 10 000 and $\\pm 10$ V saturation receives $V_1 = 3.1255$ V and $V_2 = 3.1250$ V (Hughes, Example 21.6). Its output is:',
        options: ['$+10$ V, saturated', '$+5$ V, still in the linear region', '$0$ V', '$-5$ V, in the linear region'],
        answer: 1,
        explanation: 'The difference is 0.5 mV — below the 1 mV threshold — so the amplifier has not saturated and the output is the gain times the difference: $10\\,000 \\times 0.5\\,\\text{mV} = +5\\,\\text{V}$. A difference above 1 mV would pin the output at $+10$ V.',
      },
      {
        q: 'What distinguishes the successive-approximation ADC from the digital-ramp ADC?',
        options: ['It uses no comparator', 'It replaces the counter with a register and converges by binary search in n clock cycles', 'It needs $2^n - 1$ comparators', 'It can only convert inputs near full scale'],
        answer: 1,
        explanation: 'The SAR sets each bit from the MSB down, keeps it if the internal DAC output remains below the input and clears it otherwise — a binary search that always finishes in $n$ comparisons. The ramp counts up one step at a time, taking up to $2^n - 1$ cycles; spending $2^n - 1$ comparators is the flash architecture instead.',
      },
      {
        q: 'The quantization error of an A/D converter is:',
        options: ['The sum of all component tolerances', 'One LSB — the granularity of the staircase itself', 'The comparator threshold voltage', 'Zero for a 12-bit converter'],
        answer: 1,
        explanation: 'With 2 mV steps, as in Example 21.7, no input can be represented better than to within one step of the nearest level. Hughes separates this inherent quantization error from the converter accuracy, which is set by the components and adds to it.',
      },
    ],
  },

  // ------------------------------------------------------------------ 18.5
  {
    sectionId: 'ece-e-digital-s15',
    readingTime: 9,
    intro: 'Everything so far treated a gate as an ideal symbol. A real gate is a fistful of transistors with analogue appetites: it needs a supply, its inputs load the stage before it, its output swings between two technology-defined voltage levels, and it burns power while switching. Hughes section 23.18 introduces the two families, TTL and CMOS; this section adds the Art of Electronics view of what the numbers mean — noise margins, fan-out, and the daily business of making logic drive lamps, relays and the analogue world, or survive in it.',
    objectives: [
      'Compare TTL and CMOS technologies: construction, power, speed, supply range and ESD sensitivity',
      'Compute noise margins and fan-out from guaranteed logic levels, and explain the AC fan-out limit of CMOS',
      'Explain why and how TTL and CMOS are interfaced, including pull-ups, HCT families and 3.3 V to 5 V level shifting',
      'Design gate-driven LED and relay circuits with correct current limiting and inductive protection',
      'Describe optocouplers and their role in isolation and level translation',
    ],
    concepts: [
      {
        term: 'TTL — transistor–transistor logic',
        kind: 'definition',
        statement: '**TTL** builds gates from bipolar junction transistors on a nominal 5 V supply; the classic 74 series guarantees $V_{OH} \\ge 2.4$ V, $V_{OL} \\le 0.4$ V, and input thresholds of 2.0 V and 0.8 V.',
        detail: 'Hughes section 23.18 values TTL for development work: it is not sensitive to electrostatic discharge, so it survives breadboard handling that would kill an unprotected CMOS device. Its input stage sources current — a standard TTL input pulls about 1.6 mA when driven low — which limits fan-out to the order of ten, and its resistive pull-ups cost milliwatts per gate whether or not it switches. Though no longer the mainstream, TTL is still met in legacy boards and teaching laboratories, and many CMOS families keep pin compatibility so a TTL prototype can transfer straight to CMOS production.',
      },
      {
        term: 'CMOS — complementary MOS logic',
        kind: 'definition',
        statement: '**CMOS** builds each gate from a complementary pair of N- and P-channel MOSFETs; with a static input one device is off, so the gate draws virtually no supply current and swings its output close to both rails.',
        detail: 'The output is a driven connection to $V_{DD}$ or to ground through a few hundred ohms or less — Chapter 14’s MOSFET used purely as a switch. Hughes notes the two engineering forces: the supply has fallen from 5 V to 3.3 V and below — cutting power, since charging input capacitance dominates dynamic dissipation at $P \\approx C V_{DD}^2 f$ — and switching speeds, once CMOS’s weakness, now rival TTL. The price is fragility: the insulated gates are ESD-sensitive, and every input adds roughly 10 pF of capacitance that the driving stage must charge and discharge at every edge.',
      },
      {
        term: 'Logic levels and noise margins',
        kind: 'law',
        statement: 'The guaranteed levels define the noise margins $$NM_H = V_{OH}(\\min) - V_{IH}(\\min), \\qquad NM_L = V_{IL}(\\max) - V_{OL}(\\max)$$ — the voltage a delivered level can lose to noise and still be read correctly.',
        detail: 'For standard TTL at 5 V: $V_{OH} \\ge 2.4$ V, $V_{IH} \\ge 2.0$ V, $V_{IL} \\le 0.8$ V, $V_{OL} \\le 0.4$ V — margins of 0.4 V in each state. For 74HC CMOS at 5 V the output swings nearly to the rails (about 4.9 V and 0.1 V) while the thresholds sit at 3.5 V and 1.5 V — 70 and 30 per cent of supply — giving margins of about 1.4 V, three and a half times the TTL figures. That is why CMOS tolerates the noisier industrial environments. Margins are guarantees, not typical values: a system designed on typical levels fails in the field.',
      },
      {
        term: 'Fan-out',
        kind: 'law',
        statement: '**Fan-out** is the number of identical inputs one output can drive: for standard TTL, $\\text{fan-out} = I_{OL}/I_{IL} = 16\\,\\text{mA}/1.6\\,\\text{mA} = 10$.',
        detail: 'A standard TTL output is guaranteed to sink 16 mA while holding $V_{OL} \\le 0.4$ V, and each TTL input pulls 1.6 mA when low — the unit load. Ten unit loads, ten gates: an eleventh would drag the output above $V_{IL}$. CMOS inputs draw only picoamps to microamps at DC, so the DC fan-out of CMOS driving CMOS runs to hundreds — but each input is about 10 pF, and at speed the driver’s finite output resistance charges that capacitance through every edge. Propagation delay grows roughly linearly with added loads, so the AC fan-out — set by edge-rate and timing budgets — is the binding number, often a mere handful of inputs at high clock rates.',
      },
      {
        term: 'Mixing families and level shifting',
        kind: 'method',
        statement: 'Mixed technologies must have their logic levels matched: TTL driving 5 V CMOS fails on the high side — 2.4 V delivered against 3.5 V required — and is rescued by a **pull-up resistor** or by the TTL-compatible **74HCT** family.',
        detail: 'The margin arithmetic becomes a compatibility test: TTL’s $V_{OH} = 2.4$ V sits below 74HC’s $V_{IH} = 3.5$ V — a negative noise margin and an invitation to intermittent failure. A pull-up of a few k$\\Omega$ to the 5 V rail lets the TTL output rise to nearly 5 V when high; alternatively, 74HCT devices accept TTL output levels while keeping CMOS internals, at the price of a slightly reduced input margin. In the other direction CMOS drives TTL easily as long as the current sinking is respected. Between 3.3 V and 5 V logic the mismatch reappears — 3.3 V outputs against 3.5 V thresholds — and HCT inputs, resistor dividers or dedicated level-shifting ICs bridge the gap: the everyday interface arithmetic of mixed-signal boards.',
      },
      {
        term: 'Driving LEDs',
        kind: 'method',
        statement: 'A logic output drives an LED through a **current-limiting resistor**: for a 2 V red LED at 15 mA from a 5 V output, $R = (5 - 2)/15\\,\\text{mA} = 200\\,\\Omega$.',
        detail: 'The LED of Chapter 12 conducts over a narrow forward-voltage band, so the resistor — not the gate — sets the current, and the current sets the brightness. Standard TTL sinks 16 mA far more happily than it sources, so the LED is usually wired from the supply rail into the output, lighting when the output goes low. Sizing: a 5 V rail, a 2 V red LED and 15 mA give $(5-2)/0.015 = 200\\,\\Omega$; a 3.3 V CMOS output driving a 3.1 V blue LED has only 200 mV of headroom — not enough, which is where dedicated drivers and constant-current sinks enter. Multiplexed displays time-share the current among many LEDs, one digit at a time, a trick as old as the pocket calculator.',
      },
      {
        term: 'Driving relays and inductive loads',
        kind: 'method',
        statement: 'Relay coils need tens of milliamperes — far beyond a gate — so a **transistor driver** interposes, and a **flyback diode** across the coil absorbs the inductive turn-off spike.',
        detail: 'A small 5 V relay might draw 70 mA through its coil; no logic output can supply that, but one bipolar transistor, run into saturation as the Chapter 13 switch, passes it while the gate supplies only base current — about 1 mA through a 4.3 k$\\Omega$ base resistor for a forced current gain of 70. When the transistor turns off, the coil current cannot stop instantly — Chapter 5’s $v = L\\,di/dt$ — and would otherwise develop hundreds of volts across the switch; the flyback diode, reverse-biased in normal running, gives the current a recirculating path and clamps the spike to about a diode drop. Motor and solenoid drivers are the same story at higher currents, with power MOSFETs taking over from BJTs.',
      },
      {
        term: 'Optocouplers',
        kind: 'definition',
        statement: 'An **optocoupler** pairs an LED with a phototransistor in one package, so the signal crosses as light and the input and output circuits share no electrical connection at all.',
        detail: 'The LED side drives current — say 10 mA; the phototransistor side delivers a fraction of it as collector current, the ratio quoted as the current transfer ratio, commonly 20 to 100 per cent. The reward is galvanic isolation rated in kilovolts: a logic signal can cross between grounds that differ by hundreds of volts, between a noisy power domain and a quiet measurement domain, or into a patient-connected instrument in the instrumentation tradition of Chapter 15. Optocoupled solid-state relays extend the idea to switching AC mains. The isolated-side transistor behaves like any transistor — it needs biasing and a load resistor, and the plain LED–phototransistor pair is slow, tens of microseconds, with logic-output parts available for the impatient.',
      },
    ],
    examples: [
      {
        title: 'Noise margins of TTL against 74HC CMOS',
        problem: 'A 5 V system can be built in TTL (guaranteed $V_{OH} \\ge 2.4$ V, $V_{OL} \\le 0.4$ V, thresholds 2.0 V and 0.8 V) or in 74HC CMOS (outputs within 0.1 V of the rails, thresholds 3.5 V and 1.5 V). Compute the noise margins of each and compare.',
        steps: [
          { label: 'Step 1: TTL high-state margin', text: '$NM_H = V_{OH} - V_{IH} = 2.4 - 2.0 = 0.4\\,\\text{V}$. A logic 1 may sag by up to 0.4 V before the receiver misreads it.' },
          { label: 'Step 2: TTL low-state margin', text: '$NM_L = V_{IL} - V_{OL} = 0.8 - 0.4 = 0.4\\,\\text{V}$ — symmetric with the high state, by the family’s design.' },
          { label: 'Step 3: 74HC margins', text: 'With $V_{OH} \\approx 4.9$ V and $V_{OL} \\approx 0.1$ V: $NM_H = 4.9 - 3.5 = 1.4\\,\\text{V}$ and $NM_L = 1.5 - 0.1 = 1.4\\,\\text{V}$.' },
          { label: 'Step 4: Interpret', text: 'The CMOS margins are about 3.5 times TTL’s: 1.4 V of noise on a CMOS wire is survivable where 0.4 V on a TTL wire corrupts the bit. One caution: CMOS thresholds are ratiometric to the supply, so at 3.3 V the margins shrink with the rail.' },
        ],
        result: 'TTL: 0.4 V in both states. 74HC at 5 V: about 1.4 V in both states.',
      },
      {
        title: 'Fan-out arithmetic, DC and AC',
        problem: 'A standard TTL output is guaranteed to sink 16 mA at $V_{OL} \\le 0.4$ V, and one TTL input draws 1.6 mA when driven low. What is the DC fan-out? What limits fan-out in a CMOS system clocked at 20 MHz if each input presents about 10 pF?',
        steps: [
          { label: 'Step 1: The unit load', text: 'Each driven input, held low, pulls 1.6 mA out of the driving output — one TTL unit load.' },
          { label: 'Step 2: The division', text: '$\\text{fan-out} = I_{OL}/I_{IL} = 16/1.6 = 10$ identical inputs, with the output still meeting its $V_{OL}$ guarantee.' },
          { label: 'Step 3: Why DC is not the whole story for CMOS', text: 'A CMOS input draws almost no DC current, so its DC fan-out would read in the hundreds; but ten inputs at 10 pF each add 100 pF to every driven node.' },
          { label: 'Step 4: The AC cost', text: 'Each edge must charge that capacitance through the driver’s output resistance; delay and edge times stretch roughly in proportion, and the dynamic supply current grows as $P = C V_{DD}^2 f$. At 20 MHz it is the timing budget — not the static current — that sets the real fan-out.' },
        ],
        result: 'TTL DC fan-out = 10; CMOS fan-out is capacitance-limited by speed, not by static input current.',
      },
      {
        title: 'Making a gate drive an LED and a relay',
        problem: 'A 5 V logic output must (a) illuminate a 2 V, 15 mA red LED and (b) energize a 5 V relay whose coil draws 70 mA. Design both interfaces.',
        steps: [
          { label: 'Step 1: The LED resistor', text: 'The resistor must drop $5 - 2 = 3$ V at 15 mA: $R = 3/0.015 = 200\\,\\Omega$. Wiring the LED from the 5 V rail into the gate output lets the output sink the current — the strong direction for TTL totem-pole stages.' },
          { label: 'Step 2: Why the relay cannot connect directly', text: '70 mA exceeds the 16 mA sink rating; connecting the coil directly would pull $V_{OL}$ out of specification and could damage the output stage. The gate drives a transistor instead.' },
          { label: 'Step 3: The transistor driver', text: 'An NPN switch with a 4.3 k$\\Omega$ base resistor draws about $(5 - 0.7)/4.3\\,\\text{k}\\Omega \\approx 1$ mA from the gate; with a current gain of 70 it holds the 70 mA coil in saturation.' },
          { label: 'Step 4: The flyback diode', text: 'The coil’s stored energy must go somewhere at turn-off; a diode across the coil, cathode to the supply, recirculates the current and clamps the collector spike to about one diode drop above the rail instead of hundreds of volts.' },
          { label: 'Step 5: The optocoupler option', text: 'If the relay must float free of the logic ground, drive its transistor through an optocoupler: the gate lights the internal LED with the same 200 $\\Omega$ arithmetic, and the phototransistor does the switching with kilovolts of isolation.' },
        ],
        result: 'LED: 200 $\\Omega$ into a sinking output. Relay: 4.3 k$\\Omega$ base resistor, NPN driver and a flyback diode — or an optocoupled equivalent when the grounds must not meet.',
      },
    ],
    keyTakeaways: [
      'A real gate is an analogue circuit with guaranteed digital behaviour: the four numbers $V_{OH}$, $V_{OL}$, $V_{IH}$ and $V_{IL}$ fix everything about interfacing it.',
      'Noise margins are the gaps between what is delivered and what is demanded: 0.4 V for TTL, about 1.4 V for 5 V 74HC — design to the guarantees, not the typicals.',
      'Fan-out is current arithmetic for TTL ($16\\,\\text{mA}/1.6\\,\\text{mA} = 10$) and capacitance arithmetic for CMOS — speed, not DC current, binds the modern case.',
      'CMOS wins static power (near zero) and supply scaling (5 V down to 3.3 V and below); TTL wins robustness on the bench — and 74HCT parts bridge them.',
      'Interfacing analogue and digital is a design genre: pull-ups for TTL-to-CMOS, level shifters for 3.3 V to 5 V, current limiting for LEDs, transistor drivers with flyback diodes for relays.',
      'Optocouplers move the signal as light and buy kilovolts of galvanic isolation — the cleanest way to let two grounds that must never meet still exchange a bit.',
    ],
    quiz: [
      {
        q: 'A standard TTL output guarantees sinking 16 mA while holding a valid logic 0, and each TTL input draws 1.6 mA when low. The fan-out is:',
        options: ['100', '16', '10', '1.6'],
        answer: 2,
        explanation: 'Fan-out is the sink capability divided by the unit load: $16\\,\\text{mA}/1.6\\,\\text{mA} = 10$. An eleventh input would pull more current than the guarantee covers and lift $V_{OL}$ above its 0.4 V limit.',
      },
      {
        q: 'For a gate with $V_{OH}(\\min) = 2.4$ V, $V_{IH}(\\min) = 2.0$ V, $V_{IL}(\\max) = 0.8$ V and $V_{OL}(\\max) = 0.4$ V, the noise margins are:',
        options: ['2.0 V high and 0.8 V low', '0.4 V in both states', '1.2 V high and 0.4 V low', 'Zero in both states'],
        answer: 1,
        explanation: '$NM_H = V_{OH} - V_{IH} = 2.4 - 2.0 = 0.4$ V and $NM_L = V_{IL} - V_{OL} = 0.8 - 0.4 = 0.4$ V — the classic TTL figures, against roughly 1.4 V for 5 V CMOS.',
      },
      {
        q: 'A 5 V TTL output must drive a 74HC CMOS input ($V_{IH} = 3.5$ V). What is the standard fix?',
        options: ['A series resistor of 200 $\\Omega$', 'A pull-up resistor to the 5 V rail, or a 74HCT input instead of the 74HC', 'A coupling capacitor between the stages', 'Nothing — the levels already match'],
        answer: 1,
        explanation: 'TTL delivers only 2.4 V guaranteed on a logic 1 — below the 3.5 V the HC input demands, so the noise margin is negative. A pull-up of a few k$\\Omega$ lets the high level rise to nearly 5 V; HCT inputs shift the thresholds down to TTL levels while keeping CMOS internals.',
      },
      {
        q: 'Why does a flyback diode accompany every transistor-driven relay coil?',
        options: ['It speeds up the relay turn-off', 'It recirculates the coil current at switch-off, clamping the inductive spike to about a diode drop', 'It sets the coil current', 'It protects the transistor against electrostatic discharge'],
        answer: 1,
        explanation: 'Inductor current cannot stop instantly; interrupting 70 mA in a coil of even modest inductance develops hundreds of volts — $v = L\\,di/dt$ — which would avalanche the transistor. The diode, reverse-biased while running, gives the current a path and holds the spike near one diode drop above the rail.',
      },
      {
        q: 'The current transfer ratio (CTR) of an optocoupler describes:',
        options: ['The ratio of LED forward voltage to breakdown voltage', 'The output collector current as a percentage of the input LED current', 'The isolation voltage rating in kV per amp', 'The propagation-delay ratio between channels'],
        answer: 1,
        explanation: 'Drive 10 mA of LED current and a CTR of 50 per cent yields 5 mA available at the phototransistor collector. CTRs run from about 20 per cent in simple parts to 100 per cent and beyond in darlington-output couplers — and it degrades with age, the design margin to watch.',
      },
    ],
  },
]

// ============================================================================
// Formula sheet — Chapter 18
// ============================================================================

export const elecCh18Formulas: FormulaEntry[] = [
  {
    chapterId: 'ece-e-digital',
    section: '3.11',
    name: 'Positional expansion of a number',
    formula: 'N = Σ dₖ·bᵏ, e.g. 1011₂ = 2³ + 2¹ + 2⁰ = 11₁₀',
    note: 'digits times powers of the base; b = 2, 8, 16 for binary, octal, hex',
    latex: '1011_2 = 1\\cdot 2^3 + 0\\cdot 2^2 + 1\\cdot 2^1 + 1\\cdot 2^0 = 11_{10}',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.11',
    name: 'Two’s complement',
    formula: 'two’s comp = (one’s comp) + 1 = 2ⁿ − N',
    note: 'subtract by adding the complement and discarding the carry',
    latex: 'N^{*} = \\overline{N} + 1 = 2^n - N',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.12',
    name: 'De Morgan’s laws',
    formula: '¬(A·B·C) = ¬A + ¬B + ¬C ; ¬(A+B+C) = ¬A·¬B·¬C',
    note: 'complement swaps AND with OR — the NAND/NOR conversion tool',
    latex: '\\overline{A\\cdot B\\cdot C} = \\bar A + \\bar B + \\bar C,\\quad \\overline{A+B+C} = \\bar A\\cdot\\bar B\\cdot\\bar C',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.12',
    name: 'Boolean distributive and absorption rules',
    formula: 'A + B·C = (A + B)·(A + C) ; A·(B + C) = A·B + A·C ; A + A·B = A',
    note: 'Hughes [23.11]–[23.14]; the workhorses of network reduction',
    latex: 'A + B\\cdot C = (A+B)\\cdot(A+C);\\quad A\\cdot(B+C) = A\\cdot B + A\\cdot C;\\quad A + A\\cdot B = A',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.14',
    name: 'R/2R ladder DAC output',
    formula: '|V_out| = V_ref·(d₃ + d₂/2 + d₁/4 + d₀/8), with R_f = 2R',
    note: 'each rung Thévenin-halves: bits D, C, B, A give 5, 2.5, 1.25, 0.625 V',
    latex: '|V_{out}| = V_{ref}\\left(d_3 + \\tfrac{d_2}{2} + \\tfrac{d_1}{4} + \\tfrac{d_0}{8}\\right)',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.14',
    name: 'DAC/ADC step size and resolution',
    formula: 'step = V_FS/(2ⁿ − 1) ; %res = step/V_FS × 100',
    note: '8 bits at 5 mV: 127 steps to 635 mV, 0.79 per cent',
    latex: '\\text{step} = \\frac{V_{FS}}{2^n - 1},\\qquad \\%\\,\\text{res} = \\frac{\\text{step}}{V_{FS}}\\times 100',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.15',
    name: 'Logic fan-out',
    formula: 'fan-out = I_OL/I_IL = 16 mA/1.6 mA = 10 (TTL)',
    note: 'CMOS is capacitance-limited instead — speed, not DC current',
    latex: '\\text{fan-out} = \\frac{I_{OL}}{I_{IL}} = \\frac{16\\,\\text{mA}}{1.6\\,\\text{mA}} = 10',
  },
  {
    chapterId: 'ece-e-digital',
    section: '3.15',
    name: 'Noise margins',
    formula: 'NM_H = V_OH(min) − V_IH(min) ; NM_L = V_IL(max) − V_OL(max)',
    note: 'TTL 0.4 V both states; 74HC at 5 V about 1.4 V',
    latex: 'NM_H = V_{OH(\\min)} - V_{IH(\\min)},\\quad NM_L = V_{IL(\\max)} - V_{OL(\\max)}',
  },
]
