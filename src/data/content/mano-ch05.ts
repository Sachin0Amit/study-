import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (classic edition)
// Chapter 5: Combinational Logic with MSI and LSI (Sections 5.1 – 5.3)
// Master study content, written from canonical knowledge of the book
// (the print edition is a scan without a text layer).
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const manoCh5Content: SectionContent[] = [
  // ------------------------------------------------------------------ 5.1
  {
    sectionId: 'mano-ch5-s1',
    readingTime: 11,
    intro: 'Beyond a handful of gates, designing every combinational function from discrete logic is wasteful. The MSI and LSI families package the recurring building blocks of digital design — decoders, encoders, multiplexers — as single integrated circuits, and the designer’s job becomes selecting and interconnecting them. This section shows how each block works internally and how it is used as a universal function implementer.',
    objectives: [
      'Explain what the MSI and LSI integration levels provide over gate-level (SSI) design',
      'Expand decoders with enable inputs into larger decoders and implement Boolean functions as sums of minterms with a decoder plus one OR gate',
      'Analyze and design priority encoders, including the valid-output signal',
      'Use a multiplexer as a general-purpose function generator for any $n$-variable function',
      'Describe the demultiplexer as a decoder operated with its enable as a data input',
    ],
    concepts: [
      {
        term: 'MSI and LSI circuits',
        kind: 'definition',
        statement: 'Digital integrated circuits are classified by complexity: **SSI** (small scale) provides a few gates per package, **MSI** (medium scale) provides a dozen to a hundred gates wired into a standard function such as a decoder, adder or register, and **LSI** (large scale) provides a thousand or more gates in a single subsystem such as a memory or a microprocessor.',
        detail: 'The MSI/LSI viewpoint inverts the design process: instead of minimizing a Boolean function and drawing gates, the designer picks a catalog part whose internal structure already computes a general class of functions, then customizes the wiring around it. The same MSI part may be a decoder in one application, a demultiplexer in another, and a code converter in a third. This is the theme of the whole chapter: decoders, encoders, multiplexers, ROMs, PLAs and PALs are progressively more general function implementers.',
      },
      {
        term: 'Binary decoder',
        kind: 'definition',
        statement: 'A **decoder** with $n$ inputs and $2^{n}$ outputs asserts exactly one output line — the one whose index equals the binary value of the inputs. Output $D_i = m_i$, so a decoder is a hardware **minterm generator**: it produces all $2^{n}$ minterms of its $n$ select variables.',
        detail: 'A 3-to-8 decoder with select inputs $x, y, z$ produces $D_0 = x\'y\'z\'$, $D_1 = x\'y\'z$, up to $D_7 = xyz$. Decoders usually carry one or more **enable** inputs: when the enable is inactive, all outputs are 0 no matter what the selects are; when active, the decoder behaves normally. Enables are what make decoder expansion possible, and they are drawn as gate inputs in the block symbol.',
      },
      {
        term: 'Decoder expansion through enables',
        kind: 'method',
        statement: 'Two $3 \\times 8$ decoders with enables combine into one **$4 \\times 16$ decoder**: the three low-order inputs go to both decoders, and the fourth input drives the two enables in complementary polarity, so exactly one half is active at a time.',
        detail: 'For inputs $w, x, y, z$: connect $x, y, z$ to both decoders’ selects, enable decoder 1 with $w\'$ (so it produces minterms $D_0$ through $D_7$ when $w = 0$) and decoder 2 with $w$ (minterms $D_8$ through $D_{15}$ when $w = 1$). The same idea scales both dimensions: four $3 \\times 8$ decoders plus a $2 \\times 4$ decoder on the enables build a $5 \\times 32$ decoder.',
      },
      {
        term: 'Implementing functions with a decoder and OR gate',
        kind: 'method',
        statement: 'Because the decoder outputs are the minterms, any Boolean function expressed as a sum of minterms, $F = \\sum(\\ldots)$, is realized by **OR-ing the decoded minterms** with a single OR gate. A NOR gate on the same outputs yields $F\'$ directly.',
        detail: 'An $n$-input decoder plus one wide OR gate implements any function of $n$ variables, with no minimization required — the decoder does not care that most of its minterms are unused. Multiple output functions of the same variables share one decoder, each with its own OR gate. The price is the unused decoding capacity: this is exactly the trade-off the ROM of the next section makes formal.',
      },
      {
        term: 'Encoder and priority encoder',
        kind: 'definition',
        statement: 'An **encoder** performs the inverse of a decoder: $2^{n}$ input lines produce an $n$-bit code. A plain encoder assumes exactly one input is asserted; a **priority encoder** resolves multiple simultaneous assertions by outputting the code of the highest-priority input, and it adds a **valid output $V$** to distinguish “input 0 asserted” from “no input asserted”. Both are false in the plain encoder, which is why $V$ is needed.',
        detail: 'Priority encoders are essential for interrupt systems (chapter 8 returns to them) and for keyboard scanning. The don’t-care entries in the priority truth table — all lower-priority inputs are irrelevant once a higher one is asserted — are what keep the minimized equations small.',
      },
      {
        term: 'Multiplexer',
        kind: 'definition',
        statement: 'A **multiplexer (MUX)** routes one of $2^{k}$ data inputs to a single output under control of $k$ **select lines**: a $4 \\times 1$ MUX with selects $S_1, S_0$ computes $$Y = S_1\'S_0\'\\,I_0 + S_1\'S_0\\,I_1 + S_1S_0\'\\,I_2 + S_1S_0\\,I_3.$$ Because each product is a minterm of the selects, a MUX is a sum of minterms whose coefficients are the data inputs.',
        detail: 'Inside, a $2^{k} \\times 1$ MUX is a decoder whose AND gates are enlarged by the data input, feeding one OR gate — so MUX, decoder and ROM are one family of circuits. MSI examples: the 74153 is a dual $4 \\times 1$ MUX and the 74151 is an $8 \\times 1$ MUX with an enable (and a complementary output). An enable input also makes a MUX tree possible: two $4 \\times 1$ MUXes plus the enable trick build an $8 \\times 1$.',
      },
      {
        term: 'Multiplexer as a function generator',
        kind: 'method',
        statement: 'Any Boolean function of $k$ variables can be implemented with **one $2^{k-1} \\times 1$ MUX**: put $k-1$ variables on the select lines, and the remaining variable, its complement, 0 or 1 on each data input.',
        detail: 'The construction collapses the truth table in pairs: the two minterms that share a select combination determine one data input — $z$ if both are 1, $z\'$ if the first is 1, the constant 1 if both are 1, 0 if both are 0. This works for functions of any size (iterate the halving for a MUX tree), at the cost of wiring density. A $k$-variable function that is genuinely arbitrary costs $2^{k-1}$ data connections; compare this with the $2^{k}$ words of storage a ROM would spend.',
      },
      {
        term: 'Demultiplexer',
        kind: 'definition',
        statement: 'A **demultiplexer** routes a single data input to one of $2^{n}$ destinations — the mirror image of the multiplexer. A decoder with an enable **is** a demultiplexer: the data go into the enable, and the select lines choose which output follows the data.',
        detail: 'When the enable input carries data, every output is 0 except the selected one, which equals the data stream — serial-to-parallel distribution. The dual use of the same part (decoder with enable = demux) is a classic example of MSI parts wearing several hats, and it appears again in chapter 8 where decoders drive the register-select lines of a common bus system.',
      },
    ],
    examples: [
      {
        title: 'Building a 4×16 decoder from two 3×8 decoders',
        problem: 'Using two 3×8 decoders, each with one enable input, construct a 4×16 decoder with inputs $w, x, y, z$, and then use it to implement the function $F(w,x,y,z) = \\sum(1, 2, 4, 8)$.',
        steps: [
          { label: 'Step 1: Assign the low-order inputs', text: 'Feed $x, y, z$ to the select inputs of both 3×8 decoders. Both decoders therefore decode the same three-bit value into a one-hot line $m_0 \\ldots m_7$ of the pair $xyz$.' },
          { label: 'Step 2: Use the fourth input for the enables', text: 'Feed $w$ through an inverter to decoder 1’s enable and directly to decoder 2’s enable. When $w = 0$ only decoder 1 is enabled, so its outputs are $D_0$ through $D_7$ (the minterms with $w = 0$); when $w = 1$ only decoder 2 is enabled, giving $D_8$ through $D_{15}$.' },
          { label: 'Step 3: Check the coverage', text: 'Every 4-bit combination now asserts exactly one of the sixteen outputs: input 0110, for instance, has $w = 0$ and $xyz = 110$, so it asserts $D_6$ from decoder 1 while decoder 2 is fully disabled.' },
          { label: 'Step 4: Realize the function', text: 'For $F = \\sum(1, 2, 4, 8)$, OR the outputs $D_1$, $D_2$, $D_4$ and $D_8$ with a 4-input OR gate. No gates other than the OR (and one inverter) are needed — the decoder supplies every minterm ready-made.' },
          { label: 'Step 5: Observe the structure of $F$', text: 'The minterms 0001, 0010, 0100, 1000 are pairwise non-adjacent on the K-map, so a gate realization needs four 4-input AND terms — the decoder-plus-OR version is not just simpler to design but also uses no more silicon.' },
        ],
        result: 'Two enabled 3×8 decoders plus an inverter form a 4×16 decoder; one 4-input OR gate on minterms 1, 2, 4, 8 completes the “exactly one of four inputs is 1” detector.',
      },
      {
        title: 'Designing an 8-to-3 priority encoder',
        problem: 'Derive the outputs of an 8-to-3 priority encoder with inputs $D_7$ (highest priority) down to $D_0$ (lowest), outputs $x$, $y$, $z$ and valid bit $V$, where the output code is the binary index of the highest asserted input.',
        steps: [
          { label: 'Step 1: Tabulate the behavior', text: 'When $D_7 = 1$ the output is 111 regardless of $D_6 \\ldots D_0$; when $D_7 = 0$ and $D_6 = 1$ the output is 110; and so on down to $D_1 = 1$ giving 001 and $D_0 = 1$ giving 000. When all inputs are 0, the outputs are 000 and $V = 0$; otherwise $V = 1$.' },
          { label: 'Step 2: Mark the don’t-cares', text: 'Each row of the table below the highest asserted input is irrelevant — these don’t-care conditions are what allow two-level minimization to stay small.' },
          { label: 'Step 3: Derive $x$ and $V$', text: 'The MSB of the code is 1 exactly for inputs 4 through 7: $x = D_4 + D_5 + D_6 + D_7$. The valid bit is the OR of everything: $V = D_0 + D_1 + \\cdots + D_7$.' },
          { label: 'Step 4: Derive $y$', text: 'The middle bit is 1 for codes 2, 3, 6, 7 — that is, whenever $D_6$ or $D_7$ is asserted, or (with all of $D_7, D_6, D_5, D_4$ low) $D_2$ or $D_3$ is asserted: $y = D_6 + D_7 + D_4\'D_5\'(D_2 + D_3)$.' },
          { label: 'Step 5: Derive $z$', text: 'The LSB is 1 for the odd indices 1, 3, 5, 7. Gating each with the higher-priority zeros gives $z = D_7 + D_6\'D_5 + D_6\'D_4\'D_3 + D_6\'D_4\'D_2\'D_1$.' },
          { label: 'Step 6: Verify two rows', text: 'If only $D_5 = 1$: $x = 1$, $y = D_6\'D_5 = 1$, $z = D_6\'D_5 = 1$ — code 101, the index of $D_5$. If only $D_2 = 1$: $x = 0$, $y = D_4\'D_5\'(D_2 + D_3) = 1$, $z = 0$ — code 010. Both correct, and $V = 1$ in both.' },
        ],
        result: 'A 4-to-2 priority encoder is the same idea one size smaller; the 8-to-3 version needs 6 gates beyond the $V$ OR, and its equations show the tell-tale pattern of masked lower-priority inputs.',
      },
      {
        title: 'Implementing a 3-variable function with a 4×1 multiplexer',
        problem: 'Implement $F(x, y, z) = \\sum(1, 3, 5, 6)$ using a single $4 \\times 1$ multiplexer, and compare the cost with the decoder-plus-OR approach.',
        steps: [
          { label: 'Step 1: Choose the select variables', text: 'Put the two most significant variables $x, y$ on the select lines $S_1, S_0$. Each data input $I_i$ then covers the pair of minterms that share that $xy$ combination, with $z$ as the free variable.' },
          { label: 'Step 2: Evaluate each pair', text: 'For $S_1S_0 = 00$ (minterms 0 and 1): $F = 0$ at 0 and $1$ at 1, so $I_0 = z$. For $01$ (minterms 2 and 3): $F = 1$ only at 3, so $I_1 = z$ as well. For $10$ (minterms 4 and 5): $F = 1$ at 5, so $I_2 = z$. For $11$ (minterms 6 and 7): $F = 1$ at 6 and $0$ at 7, so $I_3 = z\'$.' },
          { label: 'Step 3: Write the resulting circuit', text: 'The multiplexer output is $Y = x\'y\'z + x\'yz + xy\'z + xyz\'$, which is exactly the given function. Only the wiring of $z$ and $z\'$ to the data inputs is needed — no external gates at all.' },
          { label: 'Step 4: Compare with a decoder', text: 'The same function via a 3×8 decoder needs an OR gate over minterms 1, 3, 5, 6. The MUX version uses fewer packages for a single function, while the decoder version is more economical when many functions of the same variables must be built together — the book makes exactly this comparison when introducing MSI selection criteria.' },
        ],
        result: 'Data inputs $(z, z, z, z\')$ on a $4 \\times 1$ MUX with $x, y$ on the selects implement $F$ with no auxiliary gates; in general a $k$-variable function needs a $2^{k-1} \\times 1$ MUX.',
      },
    ],
    keyTakeaways: [
      'An $n$-input decoder asserts exactly one of $2^{n}$ outputs and is therefore a complete minterm generator.',
      'Enable inputs let small decoders compose into large ones: two enabled 3×8 decoders build a 4×16.',
      'A decoder plus one OR gate realizes any sum-of-minterms function of its inputs; a NOR gate realizes the complement.',
      'A priority encoder outputs the index of the highest-priority asserted input, with a valid bit $V$ to flag the all-zeros case.',
      'A $2^{k} \\times 1$ multiplexer output is a sum of minterms of its select lines weighted by the data inputs.',
      'Any $k$-variable function fits one $2^{k-1} \\times 1$ MUX: selects carry $k-1$ variables, data inputs carry the last variable, its complement, 0 or 1.',
      'A decoder with its enable used as a data input is a demultiplexer — one MSI part, two design roles.',
    ],
    quiz: [
      {
        q: 'A $4 \\times 16$ decoder is built from two $3 \\times 8$ decoders. What drives the two enable inputs?',
        options: ['The two lowest-order select bits, one to each decoder', 'The highest-order input bit and its complement, one to each decoder', 'A common clock signal to both decoders', 'The valid output $V$ of an encoder'],
        answer: 1,
        explanation: 'The low-order bits feed both decoders; the extra bit $w$ steers the enables so decoder 1 covers words 0–7 ($w = 0$) and decoder 2 covers words 8–15 ($w = 1$).',
      },
      {
        q: 'A Boolean function $F(A,B,C) = \\sum(0, 2, 5, 7)$ is to be implemented with a 3×8 decoder and one logic gate. Which gate, connected to which outputs?',
        options: ['An AND gate on outputs 0, 2, 5, 7', 'A NOR gate on outputs 1, 3, 4, 6', 'An OR gate on outputs 0, 2, 5, 7', 'An XOR gate on outputs 0 and 7'],
        answer: 2,
        explanation: 'Decoder output $D_i$ is minterm $m_i$, so a sum of minterms is just an OR of the listed outputs — one OR gate and no minimization required.',
      },
      {
        q: 'In a priority encoder, the valid output $V$ exists because:',
        options: ['The output code must be latched before it changes', 'The code 000 must be distinguishable from “no input asserted”', 'Power consumption must be monitored', 'Priority encoders can only handle even numbers of inputs'],
        answer: 1,
        explanation: 'When input $D_0$ is asserted the output code is 000 — the same as the idle code. $V$ is the OR of all inputs, so it separates “input 0 asserted” from “nothing asserted”.',
      },
      {
        q: 'To implement an arbitrary Boolean function of 6 variables using a single multiplexer, the MUX size required is:',
        options: ['$32 \\times 1$ with 5 variables on the select lines', '$64 \\times 1$ with all 6 variables on the select lines', '$16 \\times 1$ with 4 variables on the select lines', '$8 \\times 1$ with 3 variables on the select lines'],
        answer: 0,
        explanation: 'The function-generator construction halves the table: $2^{k-1} = 32$ data inputs, with the sixth variable (or its complement, or a constant) wired to each input.',
      },
      {
        q: 'How is a demultiplexer most economically obtained in an MSI-based design?',
        options: ['By connecting two multiplexers back to back', 'By using a decoder and applying the data to its enable input', 'By adding OR gates to the outputs of a priority encoder', 'By disabling the select lines of a MUX'],
        answer: 1,
        explanation: 'With data on the enable, the selected output follows the data and all others stay 0 — routing one source to one of $2^{n}$ destinations.',
      },
    
      // PYQ-pattern: GATE 2015 — decoder as minterm generator (rephrased)
      {
        q: "$F(A,B,C) = \\Sigma(0,2,5,7)$ is to be built with a $3$-to-$8$ decoder and one logic unit. Which unit on which outputs does it?",
        options: ["AND on $0,2,5,7$", "NOR on $1,3,4,6$", "OR on $0,2,5,7$", "XOR on $0$ and $7$"],
        answer: 2,
        explanation: "**Step 1 — Given data:** three variables, listed $1$-minterms $0,2,5,7$.\n**Step 2 — Rule:** decoder output $D_i$ equals minterm $m_i$; a sum of minterms is an OR of those outputs.\n**Step 3 — Apply:** wire $D_0, D_2, D_5, D_7$ into a $4$-input OR; output $1$ exactly on the listed rows.\n**Step 4 — Cross-check:** complement rows $1,3,4,6$ would need NOR/AND forms, not asked here.\n**Step 5 — Distractors:** AND of $1$-rows gives $0$ almost everywhere; NOR of complement rows is dual but not the asked wiring; two-input XOR covers two rows only.\n**Step 6 — Conclude:** one OR over $0,2,5,7$."
      },
      // PYQ-pattern: ISRO 2016 — multiplexer as function generator (rephrased)
      {
        q: "How is $F(A,B,C) = \\Sigma(1,2,6,7)$ built with one $8$-to-$1$ multiplexer?",
        options: ["It cannot be done with a multiplexer", "Select $AB$, data from $C$ only", "Use two multiplexers in series", "Select $S_2S_1S_0 = ABC$, data $D_1 = D_2 = D_6 = D_7 = 1$, rest $0$"],
        answer: 3,
        explanation: "**Step 1 — Given data:** three-variable truth table with four $1$-rows.\n**Step 2 — Rule:** an $8$-to-$1$ unit with select $= ABC$ routes exactly one data input per row; tying data to constants programs the table.\n**Step 3 — Apply:** set $D_1,D_2,D_6,D_7$ to $1$ and the other four to $0$; the output reproduces $F$ row by row.\n**Step 4 — Cross-check:** a $4$-to-$1$ version would instead use $AB$ as select and $C$/constants as data — same idea, fewer pins.\n**Step 5 — Distractors:** $AB$-only select needs data functions of $C$, not constants alone; two units are unnecessary; impossibility contradicts universality.\n**Step 6 — Conclude:** program four data lines to $1$."
      }
    ],
  },

  // ------------------------------------------------------------------ 5.2
  {
    sectionId: 'mano-ch5-s2',
    readingTime: 8,
    intro: 'A read-only memory is the combinational circuit concept pushed to LSI scale: a fixed decoder feeding a programmable OR plane. Internally it is just a decoder plus OR gates, yet because the stored pattern can be chosen per unit, a ROM replaces whole boards of random logic for multi-output functions. Programming a ROM means writing out its truth table.',
    objectives: [
      'Describe the internal organization of a ROM as decoder plus programmable OR connections',
      'State the size of a ROM as $2^{n}$ words of $m$ bits for $n$ address lines, and compute total bit counts',
      'Program a ROM from a truth table, exploiting don’t-care conditions',
      'Explain the difference between mask-programmed ROMs and user-programmable PROMs',
      'Judge when a ROM is the right implementation medium for a set of functions',
    ],
    concepts: [
      {
        term: 'ROM as a combinational circuit',
        kind: 'definition',
        statement: 'A **read-only memory (ROM)** is an LSI combinational unit with $n$ address inputs and $m$ data outputs: it contains $2^{n}$ fixed words of $m$ bits, and the address word selects which stored **data word** drives the outputs. Internally it is an $n \\times 2^{n}$ decoder whose outputs (the word lines) feed $m$ OR gates through connections that are either made or absent.',
        detail: 'The book insists on the combinational view: nothing is stored dynamically and there is no clock — the outputs are a pure function of the address inputs, determined by which fuse connections exist on each word line. A $32 \\times 8$ ROM has 5 address lines, 32 words of 8 bits, and internally a 5×32 decoder feeding eight 32-input OR gates.',
      },
      {
        term: 'ROM size notation',
        kind: 'notation',
        statement: 'A ROM is specified as **$2^{n} \\times m$**: $2^{n}$ words of $m$ bits each, so the total storage is $2^{n} \\cdot m$ bits and the package exposes $n$ address pins and $m$ data pins.',
        detail: 'A $16 \\times 4$ ROM stores $64$ bits; a $1024 \\times 8$ ROM stores $8192$ bits. When a ROM is used as a combinational circuit, the $n$ inputs are the address lines, the $m$ outputs are the functions, and the $2^{n}$ stored words are exactly the rows of the truth table.',
      },
      {
        term: 'Truth-table programming',
        kind: 'method',
        statement: 'To implement a set of $n$-input, $m$-output functions in a ROM: list the full truth table with all $2^{n}$ rows, and make each row a stored word. The ROM then emits row $i$ whenever the inputs equal the binary value $i$ — **the truth table itself is the program**.',
        detail: 'No minimization is required or even useful: the decoder already generates every minterm internally, whether the function uses it or not. Don’t-care rows can be programmed arbitrarily (usually 0) since the corresponding input combinations never occur in the application.',
      },
      {
        term: 'Mask programming versus PROM',
        kind: 'insight',
        statement: 'A **mask-programmed ROM** has its connection pattern fixed at manufacture by a metallization mask — cheap per unit in huge volumes, but a design change means a new mask. A **PROM** (programmable ROM) ships blank and is programmed once by the customer, typically by blowing fusible links with current pulses.',
        detail: 'The blow-a-fuse step is irreversible, so PROM prototyping is done carefully with verified patterns. The book also notes erasable variants (EPROM), which clear the pattern with ultraviolet light so the same silicon can be reprogrammed. The mask-versus-PROM decision is an economic one: mask cost amortizes over volume, PROM flexibility pays for low-volume and development work.',
      },
      {
        term: 'When to choose a ROM',
        kind: 'insight',
        statement: 'A ROM is the natural medium when the functions are **complex, multi-output, and dense in minterms** — code converters, arithmetic look-up tables, character generators. When functions are sparse (few minterms used), most of the $2^{n}$ words store nothing useful, and a PLA (next section) does the same job with far less silicon.',
        detail: 'The decision sequence the book builds across this chapter: gates for small functions, MSI decoders/MUXes for a few functions, ROM when the whole truth table is genuinely needed, PLA when product terms can be shared and minimized, PAL as the economical middle ground.',
      },
    ],
    examples: [
      {
        title: 'A squaring ROM: 3-bit input, 6-bit output',
        problem: 'Design a ROM-based combinational circuit that accepts a 3-bit number $A_2A_1A_0$ and outputs its square. Minimize the required ROM size by exploiting structure in the table.',
        steps: [
          { label: 'Step 1: Compute the squares', text: 'For inputs 0 through 7 the squares are $0, 1, 4, 9, 16, 25, 36, 49$ — six-bit values ranging from $000000$ to $110001$. A naive design stores all six output bits for each of the 8 words: an $8 \\times 6$ ROM.' },
          { label: 'Step 2: Write the truth table', text: 'Rows (address → data): $000 \\to 000000$, $001 \\to 000001$, $010 \\to 000100$, $011 \\to 001001$, $100 \\to 010000$, $101 \\to 011001$, $110 \\to 100100$, $111 \\to 110001$.' },
          { label: 'Step 3: Examine the least significant bit', text: 'The LSB column of the squares reads $0, 1, 0, 1, 0, 1, 0, 1$ — exactly the input bit $A_0$. Squares inherit the parity of their root, so $B_0 = A_0$ always.' },
          { label: 'Step 4: Remove the redundant column', text: 'Wire $A_0$ directly to output $B_0$ and store only $B_5B_4B_3B_2B_1$ in the ROM: an $8 \\times 5$ ROM with data $00000, 00000, 00010, 00100, 10000, 11000, 10010, 11000$.' },
          { label: 'Step 5: Verify two rows', text: 'Input $110$ (6): stored word $10010$ plus hard-wired $B_0 = 0$ gives $100100 = 36$. Input $101$ (5): stored $11000$ plus $B_0 = A_0 = 1$ gives $110001 = 25$. Correct.' },
        ],
        result: 'An $8 \\times 5$ ROM (40 bits) plus one wire implements the squarer; observing $B_0 = A_0$ saved an entire output column, the book’s standard demonstration of pruning a ROM table.',
      },
      {
        title: 'A BCD-to-excess-3 code converter in a 16×4 ROM',
        problem: 'Implement the 4-input, 4-output BCD-to-excess-3 converter in a ROM, handling the six unused BDC input combinations sensibly.',
        steps: [
          { label: 'Step 1: Build the truth table', text: 'Excess-3 is BCD plus 3. For BCD inputs $0000$ through $1001$ the outputs are: $0000 \\to 0011$, $0001 \\to 0100$, $0010 \\to 0101$, $0011 \\to 0110$, $0100 \\to 0111$, $0101 \\to 1000$, $0110 \\to 1001$, $0111 \\to 1010$, $1000 \\to 1011$, $1001 \\to 1100$.' },
          { label: 'Step 2: Treat invalid codes as don’t-cares', text: 'Inputs $1010$ through $1111$ never occur in BCD, so those six words are don’t-cares. In a gate design they would shrink the K-maps; in a ROM they are simply programmed with 0s (or any convenient filler) — the capacity is paid for either way.' },
          { label: 'Step 3: Size the ROM', text: 'Four address lines require $2^{4} = 16$ words; four outputs require $m = 4$ bits per word: a $16 \\times 4$ ROM, 64 bits total.' },
          { label: 'Step 4: Program it', text: 'Store the ten output codes at addresses 0–9 and zeros at 10–15. The converter is complete — one package, no gates, and if the specification later changes to excess-3 with different entries, only the stored pattern changes.' },
          { label: 'Step 5: Compare with gates', text: 'The gate-minimized version of this same converter (a chapter 4 design problem) needs several packages of AND/OR logic. The ROM wins on parts count and on design time; it loses on silicon utilization since 6 of 16 words are wasted.' },
        ],
        result: 'A $16 \\times 4$ ROM programmed with the ten excess-3 codes implements the converter in a single LSI part — the classic demonstration of a ROM as four functions sharing one truth table.',
      },
    ],
    keyTakeaways: [
      'A ROM is an $n \\times 2^{n}$ decoder plus $m$ OR gates with fixed (made-or-absent) connections — purely combinational, no clock.',
      'Size notation $2^{n} \\times m$ means $2^{n}$ stored words of $m$ bits; total bits $= 2^{n} m$.',
      'Programming a ROM means writing its truth table; minimization is unnecessary because the decoder generates every minterm anyway.',
      'Don’t-care input combinations cost nothing to leave unminimized in a ROM, but their words still occupy capacity.',
      'Mask-programmed ROMs are fixed at manufacture; PROMs are field-programmed once by blowing fuses; EPROMs add erasability.',
      'ROMs shine for dense multi-output functions; sparse functions waste most of the $2^{n}$ words and belong in a PLA.',
    ],
    quiz: [
      {
        q: 'A ROM has 10 address pins and 8 data pins. How many bits does it store, and how is it specified?',
        options: ['80 bits, specified as $10 \\times 8$', `$2^{10} \\cdot 8 = 8192$ bits, specified as $1024 \\times 8$`, '$10 \\cdot 8 = 80$ bits with 10 words', '1024 bits, specified as $8 \\times 128$'],
        answer: 1,
        explanation: 'Ten address lines address $2^{10} = 1024$ words of 8 bits each: $1024 \\times 8$ = 8192 stored bits.',
      },
      {
        q: 'When implementing combinational functions in a ROM, the stored program is best described as:',
        options: ['The minimized Boolean equations', 'The full truth table, one row per address', 'The K-map groupings of each output', 'A list of required product terms'],
        answer: 1,
        explanation: 'Each address word stores the row of the truth table; the decoder selects the row matching the current inputs, so the table itself is the ROM’s content.',
      },
      {
        q: 'A 4-input function uses only 3 of its 16 possible input combinations. Why is a ROM still an acceptable but inefficient choice?',
        options: ['ROMs cannot implement functions with unused input combinations', 'The 13 unused words still occupy address space and silicon, wasting capacity', 'The ROM would need external gates to suppress the unused words', 'ROM outputs are only valid for sequential circuits'],
        answer: 1,
        explanation: 'ROM capacity is paid in full regardless of use: for sparse functions most of the $2^{n}$ words are wasted, which is exactly the gap a PLA fills.',
      },
      {
        q: 'The essential difference between a mask-programmed ROM and a PROM is:',
        options: ['The PROM is faster because it is smaller', 'The mask ROM’s pattern is fixed at manufacture; the PROM is field-programmed once, usually by blowing fuses', 'The PROM can be written and rewritten at run time', 'The mask ROM stores fewer bits per package'],
        answer: 1,
        explanation: 'Mask programming amortizes a one-time mask cost over volume; PROM programming (fuse blowing) happens at the user’s site and is irreversible. Run-time rewritable behavior belongs to later RAM/EEPROM families, not the ROM of this chapter.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.3
  {
    sectionId: 'mano-ch5-s3',
    readingTime: 8,
    intro: 'The ROM’s decoder always generates every minterm; the programmable logic array relaxes this by making the AND plane programmable too. Only the product terms a design actually needs are formed, and any output may share them. The PAL then trades some of that flexibility for lower cost. Together with the ROM these three parts span the practical options for two-level combinational design at LSI scale.',
    objectives: [
      'Describe the AND-OR structure of a PLA and its $n \\times p \\times m$ size specification',
      'Construct a PLA programming table with 1/0/– entries and implement multiple functions sharing product terms',
      'Explain the PAL’s fixed OR plane and its consequences for term sharing',
      'Choose among ROM, PLA and PAL for a given set of functions',
    ],
    concepts: [
      {
        term: 'Programmable logic array (PLA)',
        kind: 'definition',
        statement: 'A **PLA** is an LSI combinational unit with a **programmable AND plane feeding a programmable OR plane**: $n$ inputs, $p$ product-term (AND) gates and $m$ sum (OR) gates. Any set of sum-of-products functions with at most $p$ total product terms fits, and one product term can feed several OR gates.',
        detail: 'Each AND gate sees every input and its complement and programmably selects which to include — it can thus form any product term, not only minterms. Each OR gate programmably selects which of the $p$ terms to sum. Because the AND plane is not a full decoder, a PLA of modest size ($p \\ll 2^{n}$) implements sparse functions far more economically than a ROM.',
      },
      {
        term: 'PLA programming table',
        kind: 'notation',
        statement: 'The PLA program is a table with one row per product term: the **inputs columns** carry $1$ (variable in true form), $0$ (complemented) or $–$ (absent), and the **outputs columns** carry $1$ (term connected to that OR gate) or $–$ (not connected).',
        detail: 'For example, a row $(1, –, 1 \\,|\\, 1, –)$ is the term $A C$ connected to the first output only. The table is the complete fuse map of the device — the designer’s minimization work happens before writing it, because every product term saved is a row (and real silicon) saved.',
      },
      {
        term: 'Product-term sharing',
        kind: 'method',
        statement: 'When several functions are implemented together, they must be **minimized jointly**: a product term used by more than one output is realized once in the AND plane and simply connected to each OR gate that needs it. Minimizing each function in isolation forfeits this sharing.',
        detail: 'The procedure: simplify each function with K-maps (or Quine–McCluskey from chapter 3), then look for terms common to several functions and re-express the functions to maximize overlap. The total number of distinct product terms is the PLA resource that matters — it can be smaller than the sum of the individual function needs.',
      },
      {
        term: 'Programmable array logic (PAL)',
        kind: 'definition',
        statement: 'A **PAL** has a **programmable AND plane and a fixed OR plane**: each output OR gate is hard-wired to a dedicated set of AND lines (typically three or four per output in commercial parts). Programmability exists only on the input side.',
        detail: 'The fixed OR plane removes a level of programmable wiring, making a PAL cheaper and faster than a comparable PLA, at the cost of flexibility: a function needing more product terms than its output’s allowance must be restructured (for instance by factoring through another output). PALs with flip-flops on the outputs become the registered PALs used for sequential design.',
      },
      {
        term: 'Choosing among ROM, PLA and PAL',
        kind: 'insight',
        statement: 'Use a **ROM** when nearly every minterm of the inputs is needed (dense tables); use a **PLA** when functions are sparse and share many product terms; use a **PAL** when cost dominates and each output fits the fixed term count.',
        detail: 'All three are two-level AND–OR structures; they differ only in which plane is programmable. ROM: fixed AND (full decoder), fixed-at-manufacture OR. PLA: programmable AND, programmable OR. PAL: programmable AND, fixed OR. The PLA is the most flexible and most expensive; the PAL dominates commodity programmable logic for exactly the reason economies of scale predict.',
      },
    ],
    examples: [
      {
        title: 'Programming a PLA for two functions with a shared product term',
        problem: 'Implement $F_1(A,B,C) = \\sum(3, 5, 6, 7)$ and $F_2(A,B,C) = \\sum(3, 4, 5, 6, 7)$ in a PLA, minimizing the number of product terms by sharing.',
        steps: [
          { label: 'Step 1: Minimize $F_1$', text: 'The minterms 011, 101, 110, 111 pair up on the K-map as $AB$, $AC$ and $BC$ — this is the majority function: $F_1 = AB + AC + BC$ (three 2-literal terms, no simpler cover exists).' },
          { label: 'Step 2: Minimize $F_2$', text: 'Minterms 100, 101, 110, 111 are covered by the single literal $A$; minterm 011 ($A\'BC$) is covered by $BC$: $F_2 = A + BC$.' },
          { label: 'Step 3: Identify the sharing', text: 'The term $BC$ appears in both functions. Total distinct product terms: $AB$, $AC$, $BC$ and $A$ — four rows in the PLA table, versus five if each function were wired independently.' },
          { label: 'Step 4: Write the programming table', text: 'Row 1 ($AB$): inputs $(1, 1, –)$, outputs $(1, –)$ — feeds $F_1$. Row 2 ($AC$): inputs $(1, –, 1)$, outputs $(1, –)$. Row 3 ($BC$): inputs $(–, 1, 1)$, outputs $(1, 1)$ — feeds both. Row 4 ($A$): inputs $(1, –, –)$, outputs $(–, 1)$.' },
          { label: 'Step 5: Verify with an input', text: 'At $ABC = 011$: rows 1, 2, 4 evaluate to 0; row 3 ($BC$) is 1, so $F_1 = 1$ and $F_2 = 1$. Checking against the minterm lists: $011 = 3$ appears in both — correct.' },
        ],
        result: 'A PLA of size $3 \\times 4 \\times 2$ (3 inputs, 4 product terms, 2 outputs) implements both functions; a ROM doing the same job would need all $8$ decoded words.',
      },
      {
        title: 'The same functions in a PAL',
        problem: 'Repeat the implementation of $F_1 = AB + AC + BC$ and $F_2 = A + BC$ in a PAL whose OR gates each draw from a dedicated set of three AND terms, and compare the resource counts.',
        steps: [
          { label: 'Step 1: Map $F_1$ to a PAL output', text: '$F_1$ needs exactly three product terms ($AB$, $AC$, $BC$), which fits a three-term output. The PAL assigns dedicated AND lines: $AB$, $AC$ and $BC$ all feed $F_1$’s OR gate.' },
          { label: 'Step 2: Map $F_2$ to another output', text: 'The fixed OR plane means $F_2$ cannot borrow the $BC$ term already formed for $F_1$ — each output owns its AND lines exclusively. $F_2$’s output therefore needs its own copies: $A$ and $BC$, two of its three available terms.' },
          { label: 'Step 3: Count the AND gates', text: 'The PAL forms $AB$, $AC$, $BC$, $A$ and a second copy of $BC$: five product terms total. The PLA needed only four because it shared $BC$ between outputs.' },
          { label: 'Step 4: Assess the trade', text: 'The PAL uses one extra AND gate but saves the entire programmable-OR wiring layer — in a commodity part with dozens of outputs, this trade is what makes the PAL cheaper to manufacture and buy.' },
          { label: 'Step 5: Note the design rule', text: 'If a function ever needs more terms than its output provides, the designer factors it (e.g., routing a partial sum through a spare output) — a constraint that simply never arises in a PLA.' },
        ],
        result: 'PAL: 5 AND terms, no sharing possible; PLA: 4 AND terms with $BC$ shared; ROM: 8 full minterms. The trio cleanly illustrates the flexibility-versus-cost ladder.',
      },
    ],
    keyTakeaways: [
      'A PLA is a programmable AND plane into a programmable OR plane, specified as $n \\times p \\times m$ (inputs × product terms × outputs).',
      'The programming table uses 1/0/– input entries (true/complement/absent) and 1/– output entries (connected or not).',
      'Functions implemented together must be minimized together so that shared product terms are realized once.',
      'A PAL fixes the OR plane: each output gets a dedicated bundle of AND terms, so sharing between outputs is impossible but silicon is cheaper.',
      'Choose ROM for dense truth tables, PLA for sparse shared-term logic, PAL for low-cost moderate logic.',
      'All three devices are two-level AND–OR structures differing only in which plane is programmable — the chapter’s unifying insight.',
    ],
    quiz: [
      {
        q: 'In a PLA programming table, the input entry “–” in a product-term row means:',
        options: ['The variable enters complemented', 'The variable does not participate in that product term', 'The term is disconnected from all outputs', 'The value is a don’t-care to be chosen later'],
        answer: 1,
        explanation: '1 = variable in true form, 0 = complemented, – = absent from the term; $–$ entries are what let a PLA form reduced product terms rather than only minterms.',
      },
      {
        q: 'Two functions share the product term $BC$. How does this affect a PLA versus a PAL implementation?',
        options: ['Both realize the term once and route it to both outputs', 'The PLA realizes $BC$ once; the PAL must duplicate it on each output that needs it', 'Neither device can implement shared terms', 'The PAL realizes it once because its AND plane is fixed'],
        answer: 1,
        explanation: 'The PLA’s programmable OR plane can connect one AND output to several OR gates; the PAL’s fixed OR wiring dedicates AND lines to a single output, forcing duplication.',
      },
      {
        q: 'Which structure corresponds to a ROM’s internal organization?',
        options: ['Programmable AND plane and programmable OR plane', 'Fixed full decoder (AND plane) with fixed-at-manufacture OR connections', 'Programmable AND plane with fixed OR plane', 'A bank of D flip-flops with a common clock'],
        answer: 1,
        explanation: 'A ROM always decodes every input combination (full AND plane) and stores its pattern in the made-or-absent OR connections, fixed by mask or fuse.',
      },
      {
        q: 'A design needs 12 functions of 10 variables, each using only 4 or 5 product terms. Which implementation is most appropriate?',
        options: ['A ROM, because the table is $1024 \\times 12$', 'A PLA, because the functions are sparse and may share terms', 'A bank of 12 encoders', 'A magnitude comparator with 10 inputs'],
        answer: 1,
        explanation: 'A ROM would store $1024$ words per output and use only a handful; a PLA with roughly $12 \\times 5$ product terms (fewer with sharing) exploits the sparsity exactly.',
      },
    ],
  },
]
