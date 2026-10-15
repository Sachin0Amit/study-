import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 4: Combinational Logic (Sections 4.1 – 4.4 as mapped in library.ts)
// Master study content, written from canonical knowledge of the book (the PDF
// is a scan with no text layer). Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline. All backslashes doubled in TS strings.
// Prime notation B′ (U+2032) in prose and math; curly apostrophes only.
// ============================================================================

export const manoCh4Content: SectionContent[] = [
  // ------------------------------------------------------------------ 4.1
  {
    sectionId: 'mano-ch4-s1',
    readingTime: 9,
    intro: 'Chapters 2 and 3 built the algebra and the map method; this chapter turns them loose on hardware. A combinational circuit is the direct physical form of a set of Boolean functions — $n$ input lines, $m$ output lines, and no memory anywhere — and its design is a procedure: state the specification, derive the truth table, simplify with Karnaugh maps, draw the diagram. The section works the entire procedure end-to-end on a BCD-to-Gray code converter, don’t-cares included.',
    objectives: [
      'Define a combinational circuit and distinguish it from a sequential circuit',
      'Carry out the four-step combinational design procedure: specification, truth table, simplification, logic diagram',
      'Exploit don’t-care input combinations to reduce gate count',
      'Work a complete design from verbal specification to logic diagram for the BCD-to-Gray converter',
      'Verify a finished design by re-deriving its truth table',
    ],
    concepts: [
      {
        term: 'Combinational circuit',
        kind: 'definition',
        statement: 'A **combinational circuit** has $n$ input variables, $m$ output variables, and a set of gates such that each output is a Boolean function of the present inputs only — the outputs at any time depend only on the input values at that same time, never on their history.',
        detail: 'The absence of memory is the defining property: no feedback, no flip-flops, no clock. Sequential circuits (Chapter 6) add exactly that missing ingredient. Every circuit in this chapter — adders, converters, comparators — is a truth table wired in silicon, which is why the truth table is the central object of the design procedure.',
      },
      {
        term: 'The design procedure',
        kind: 'method',
        statement: 'Designing a combinational circuit proceeds in four steps: **(1) specification** — state the problem precisely, including the meaning of every input and output; **(2) truth table** — derive the table that relates every input combination to its outputs; **(3) simplification** — minimize each output function with Karnaugh maps (Chapter 3) or algebra; **(4) logic diagram** — draw the circuit with the available gates, labeling all internal and external connections.',
        detail: 'The procedure is the chapter’s backbone: every example in Sections 4.2 through 4.4 — adders, code converters, comparators, NAND conversions — is one pass through these same four steps. Verification is the unofficial fifth step: re-derive the truth table from the finished circuit and compare it with the specification.',
      },
      {
        term: 'Specification as the hardest step',
        kind: 'insight',
        statement: 'The verbal specification must fix what the circuit is to do **before** any table is drawn — how many inputs, what each combination means, what each output must become — because every later step is mechanical once the specification is unambiguous.',
        detail: 'For the code converter of this section the specification is compact: the circuit receives one decimal digit in BCD (four bits, only ten combinations valid) and must emit the same digit in the reflected Gray code. The four-bit code, the ten valid rows and the six invalid ones are all decided at this step.',
      },
      {
        term: 'Don’t-cares as design freedom',
        kind: 'method',
        statement: 'Input combinations that can never occur are marked **don’t-care** (X) in the truth table and may be assigned 0 or 1 on the K-map — whichever makes the groups larger. The six BCD combinations $1010$ through $1111$ never reach the converter, so they become six free cells.',
        detail: 'This is the practical payoff of Section 3.4’s don’t-care theory: in this section’s worked converter the Gray bit $G_2$ collapses from a four-literal exclusive-OR shape to the two-literal sum $G_2 = B_3 + B_2$ precisely because the never-occurring rows let the map groups grow.',
      },
      {
        term: 'Counting gates and levels',
        kind: 'notation',
        statement: 'The cost of a finished design is reported as the number of **gates**, the number of **gate levels** (the longest input-to-output path), and the count of **literals** in the simplified expressions — two-level SOP realizations from the maps, unless multilevel factoring (Section 4.4) does better.',
        detail: 'Mano’s book keeps all three measures visible because they trade against each other: fewer literals usually means fewer gates, but factoring to share terms adds levels, and levels add propagation delay — the same delay arithmetic met in Section 2.7 and met again in the look-ahead adder of Section 4.2.',
      },
      {
        term: 'The Gray code',
        kind: 'definition',
        statement: 'The **reflected Gray code** lists the decimal digits so that successive values differ in exactly one bit: $0000, 0001, 0011, 0010, 0110, 0111, 0101, 0100, 1100, 1101$ for digits 0 through 9 — the same code introduced with binary codes in Section 1.6.',
        detail: 'One-bit-per-step adjacency is what makes Gray code the choice for shaft encoders and for the K-map cell ordering of Chapter 3 — the map columns run 00, 01, 11, 10 precisely so that adjacent cells differ in one variable, i.e. so that the map is laid out in Gray order.',
      },
    ],
    examples: [
      {
        title: 'Complete design: a BCD-to-Gray code converter',
        problem: 'Design a combinational circuit that converts a BCD digit $B_3 B_2 B_1 B_0$ into the same digit in reflected Gray code $G_3 G_2 G_1 G_0$. Work all four steps of the procedure.',
        steps: [
          { label: 'Step 1: Specification', text: 'Inputs: four bits $B_3 B_2 B_1 B_0$ holding a BCD digit, so only combinations $0000$ through $1001$ can occur. Outputs: four bits $G_3 G_2 G_1 G_0$ equal to the Gray code of the same digit. The six combinations $1010$ through $1111$ are don’t-cares.' },
          { label: 'Step 2: Truth table', text: 'Reading digit by digit: $0{:}\\ 0000 \\to 0000$; $1{:}\\ 0001 \\to 0001$; $2{:}\\ 0010 \\to 0011$; $3{:}\\ 0011 \\to 0010$; $4{:}\\ 0100 \\to 0110$; $5{:}\\ 0101 \\to 0111$; $6{:}\\ 0110 \\to 0101$; $7{:}\\ 0111 \\to 0100$; $8{:}\\ 1000 \\to 1100$; $9{:}\\ 1001 \\to 1101$. Rows $1010 \\ldots 1111$ are marked X in all four output columns — sixteen rows, ten specified, six free.' },
          { label: 'Step 3: Simplify $G_3$ and $G_2$', text: 'For $G_3$: the map has 1s only at rows 8 and 9; one quad with the don’t-cares of rows 10–15 gives simply $G_3 = B_3$. For $G_2$: 1s at rows 4–7 and 8–9; the quad $\\{4,5,6,7\\}$ gives $B_2$ and the quad $\\{8,9,10,11\\}$ gives $B_3 B_2′$, which absorb into $G_2 = B_3 + B_2$ — the don’t-cares earned that simplification.' },
          { label: 'Step 4: Simplify $G_1$ and $G_0$', text: 'For $G_1$: 1s at rows 2–5; two quads with don’t-cares give $G_1 = B_2′ B_1 + B_2 B_1′$ (the exclusive-OR shape). For $G_0$: 1s at rows 1, 2, 4, 6, 9; the prime quads $\\{4,6,12,14\\}$, $\\{2,6,10,14\\}$ and the pair $\\{1,9\\}$ give $G_0 = B_2 B_0′ + B_1 B_0′ + B_2′ B_1′ B_0$.' },
          { label: 'Step 5: Logic diagram', text: 'Draw the four functions: $G_3$ is a wire from $B_3$; $G_2$ is one 2-input OR gate of $B_3$ and $B_2$; $G_1$ is two 2-input AND gates (one with a $B_2′$ input) feeding an OR; $G_0$ is three AND gates (two sharing the $B_0′$ input) feeding a 3-input OR. Count: eight gates plus three inverters for $B_2′$, $B_1′$ and $B_0′$, at most three levels deep.' },
          { label: 'Step 6: Verify against the specification', text: 'Re-evaluate every expression on the ten valid rows. Digit 6 $(B_3B_2B_1B_0 = 0110)$: $G_3 = 0$; $G_2 = 0 + 1 = 1$; $G_1 = 0 \\cdot 1 + 1 \\cdot 0 = 0$; $G_0 = 1 \\cdot 1 + 1 \\cdot 1 + 0 = 1$ — the outputs read $0101$, exactly the Gray code of 6. Digit 8 $(1000)$: $G_3 = 1$; $G_2 = 1 + 0 = 1$; $G_1 = 0$; $G_0 = 0$ — the outputs read $1100$, the Gray code of 8. All ten rows check the same way.' },
        ],
        result: 'A 10-row truth table with 6 don’t-cares, four K-maps, and eight gates: $G_3 = B_3$, $G_2 = B_3 + B_2$, $G_1 = B_2′B_1 + B_2B_1′$, $G_0 = B_2B_0′ + B_1B_0′ + B_2′B_1′B_0$ — the design procedure delivered hardware from a sentence.',
      },
      {
        title: 'What the don’t-cares were worth',
        problem: 'Quantify the saving on $G_2$: minimize $G_2$ first treating the six invalid rows as 0s, then again as don’t-cares.',
        steps: [
          { label: 'Step 1: No don’t-cares', text: 'With rows 10–15 forced to 0, the 1s at rows 4–7 and 8–9 can only pair: $\\{4,5,6,7\\}$ still gives $B_2$, but the two 1s at rows 8–9 must join a pair $\\{8,9\\} = B_3B_2′$, and rows 4–5 cannot reach them. The minimum is $G_2 = B_3′B_2 + B_3B_2′$ — the exclusive-OR, four literals, three gates.' },
          { label: 'Step 2: With don’t-cares', text: 'Letting rows 10–15 float lets the 1s at 8, 9 group with 10, 11 into the quad $B_3B_2′$, and rows 12–15 absorb into $B_3$: the OR of the two quads simplifies by absorption to $G_2 = B_3 + B_2$ — two literals, one gate.' },
          { label: 'Step 3: Score the difference', text: 'Four literals and three gates become two literals and one gate — a halving of the cost of that output, obtained without changing the specification, only by recognizing that invalid inputs never occur.' },
          { label: 'Step 4: State the general lesson', text: 'Don’t-cares are not an optional trick: in code converters driven by bounded inputs (BCD here, excess-3 in Section 4.3, decimal digits everywhere) they routinely halve the logic. Section 3.4 formalized them; this is their pay-off in hardware.' },
        ],
        result: 'Without don’t-cares: $G_2 = B_3′B_2 + B_3B_2′$ (4 literals); with them: $G_2 = B_3 + B_2$ (2 literals) — the specification’s blind spots are the designer’s discount.',
      },
    ],
    keyTakeaways: [
      'A combinational circuit is a memoryless wiring of Boolean functions: $n$ inputs, $m$ outputs, truth table only, no history.',
      'The design procedure is invariant: specification → truth table → simplification (K-maps) → logic diagram, then verify by re-deriving the table.',
      'Don’t-cares for impossible inputs shrink the logic — the BCD-to-Gray $G_2$ fell from a four-literal XOR to $B_3 + B_2$.',
      'The finished BCD-to-Gray converter: $G_3 = B_3$, $G_2 = B_3 + B_2$, $G_1 = B_2′B_1 + B_2B_1′$, $G_0 = B_2B_0′ + B_1B_0′ + B_2′B_1′B_0$ — eight gates.',
      'Gray code adjacency (one bit changes per step) is the same property that orders K-map cells — Chapter 3’s maps are Gray-laid-out tables.',
      'Gate count, literal count and level count are the three cost figures of merit, and they trade against each other.',
    ],
    quiz: [
      {
        q: 'The first step of the combinational design procedure is:',
        options: ['Drawing the logic diagram', 'Deriving the truth table', 'Stating the specification of the circuit precisely', 'Minimizing with K-maps'],
        answer: 2,
        explanation: 'Nothing mechanical can begin until the problem is fixed: what the inputs mean, which combinations are possible, and what each output must be — the truth table and the maps are downstream of that decision.',
      },
      {
        q: 'For the BCD-to-Gray converter, the truth table has how many rows and how many are don’t-cares?',
        options: ['10 rows, no don’t-cares', '16 rows, 6 of them don’t-cares', '16 rows, all specified', '4 rows, one per output bit'],
        answer: 1,
        explanation: 'Four input bits give $2^{4} = 16$ combinations; BCD uses only ten, so rows $1010$ through $1111$ are marked X and are free to be 0 or 1 on the maps.',
      },
      {
        q: 'The simplification $G_2 = B_3 + B_2$ is legal only because:',
        options: ['$B_3$ and $B_2$ are always equal', 'The input combinations $1010$ through $1111$ never occur, so their outputs are don’t-cares', 'OR is cheaper than XOR in every family', 'Gray code is self-complementing'],
        answer: 1,
        explanation: 'On the invalid rows the don’t-cares let the 1s at rows 8–9 group with rows 10–11 and 12–15; forced 0s there would clip those groups and leave $G_2 = B_3′B_2 + B_3B_2′$.',
      },
      {
        q: 'Which property distinguishes a combinational circuit from a sequential one?',
        options: ['It has more gates', 'Its outputs depend only on the present input values, never on past inputs', 'It must be built from NAND gates', 'It requires a clock signal'],
        answer: 1,
        explanation: 'No memory, no feedback, no clock: the outputs are pure functions of the present inputs. Sequential circuits (Chapter 6) are exactly the circuits that remember.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.2
  {
    sectionId: 'mano-ch4-s2',
    readingTime: 11,
    intro: 'Arithmetic is where combinational design earns its keep. Two bits in, a sum and a carry out: the half adder. Add a carry-in and the full adder appears — the single cell from which every integer ALU in existence is built. Cascading four cells gives the ripple-carry adder, whose speed is limited by the carry crawling through every stage; computing the carries in parallel from generate and propagate signals gives the look-ahead carry adder. A mode line and exclusive-OR gates turn the same hardware into a subtractor with overflow detected by one more XOR.',
    objectives: [
      'Derive the half adder and full adder equations from their truth tables',
      'Build a 4-bit ripple-carry adder and compute its worst-case delay in gate delays',
      'Define carry generate and propagate and derive the look-ahead carry equations $C_{i+1} = G_i + P_iC_i$',
      'Compare ripple and look-ahead speeds quantitatively for 4- and 16-bit adders',
      'Explain the mode-controlled adder-subtractor and detect signed overflow with $V = C_n \\oplus C_{n-1}$',
    ],
    concepts: [
      {
        term: 'Half adder',
        kind: 'definition',
        statement: 'A **half adder** adds two bits $A$ and $B$, producing the sum bit $S = A′B + AB′ = A \\oplus B$ and the carry $C = AB$. The truth table’s four rows read, in the order $AB = 00, 01, 10, 11$: $S = 0, 1, 1, 0$ and $C = 0, 0, 0, 1$.',
        detail: 'Two gates realize it: one XOR and one AND. It is called half because it cannot accept a carry from a previous stage — that omission is what forces the full adder into existence.',
      },
      {
        term: 'Full adder',
        kind: 'definition',
        statement: 'A **full adder** adds three bits — $A$, $B$ and the carry-in $C_{\\text{in}}$ — producing $$S = A \\oplus B \\oplus C_{\\text{in}}, \\qquad C_{\\text{out}} = AB + (A \\oplus B)C_{\\text{in}}.$$ The SOP form from the truth table is $S = A′B′C_{\\text{in}} + A′BC_{\\text{in}}′ + AB′C_{\\text{in}}′ + ABC_{\\text{in}}$ and $C_{\\text{out}} = AB + AC_{\\text{in}} + BC_{\\text{in}}$.',
        detail: 'The XOR form of $S$ is the reason Section 2.6’s exclusive-OR matters so much: the three-literal minterm version costs four AND gates and an OR, while $A \\oplus B \\oplus C_{\\text{in}}$ costs two XOR gates. The carry in the form $AB + (A \\oplus B)C_{\\text{in}}$ exposes the structure used next: a carry is either generated here ($AB$) or propagated up from below.',
      },
      {
        term: 'Ripple-carry adder',
        kind: 'method',
        statement: 'An **$n$-bit ripple-carry adder** cascades $n$ full adders: stage $i$ computes bit $S_i$ from $A_i$, $B_i$ and $C_i$, and passes $C_{i+1}$ to the next stage. The final carry $C_n$ is the carry out of the whole sum.',
        detail: 'The structure is perfectly regular — which is why it was the first multi-bit adder anyone built — but the carry must travel through every stage: with 2 gate delays from $C_i$ to $C_{i+1}$ (one AND, one OR), the 4-bit carry out $C_4$ appears after 8 gate delays, and an $n$-bit adder needs $2n$. Long words make the ripple adder painfully slow: a 32-bit sum waits 64 gate delays for its top carry.',
      },
      {
        term: 'Carry generate and propagate',
        kind: 'law',
        statement: 'For each bit position define the **generate** and **propagate** signals $$G_i = A_iB_i, \\qquad P_i = A_i \\oplus B_i,$$ from which each carry is computed **in parallel**: $$C_{i+1} = G_i + P_iC_i.$$ Expanded for a 4-bit block, with external carry $C_0$: $$C_1 = G_0 + P_0C_0, \\quad C_2 = G_1 + P_1G_0 + P_1P_0C_0,$$ $$C_3 = G_2 + P_2G_1 + P_2P_1G_0 + P_2P_1P_0C_0,$$ $$C_4 = G_3 + P_3G_2 + P_3P_2G_1 + P_3P_2P_1G_0 + P_3P_2P_1P_0C_0.$$',
        detail: 'The reading is the whole idea: stage $i$ generates a carry when both its bits are 1 ($G_i$), and propagates an incoming carry when exactly one bit is 1 ($P_i$). Every carry is then a flat two-level AND-OR function of the $G$s, $P$s and $C_0$ — no carry waits on another carry, so all four carries exist simultaneously.',
      },
      {
        term: 'Look-ahead carry adder',
        kind: 'method',
        statement: 'A **look-ahead carry adder** computes all carries with the flat equations above: the $G_i$ and $P_i$ appear one gate delay after the inputs, each $C_{i+1}$ is a two-level AND-OR expression two delays later (3 total), and each sum bit $S_i = P_i \\oplus C_i$ follows one XOR after that (4 total) — independent of word length.',
        detail: 'For 4 bits the gain is 8 gate delays down to 4; for 16 bits, built as four look-ahead blocks whose own group generate and propagate feed a second look-ahead level, the ripple’s 32 delays fall to roughly 8. The price is hardware: the flat $C_4$ expression alone needs four AND gates of fan-in up to 5 and one wide OR. Real designs (the 74182 look-ahead generator among them) stop at two levels of look-ahead and accept the residual ripple between blocks.',
      },
      {
        term: 'Adder-subtractor with mode control',
        kind: 'method',
        statement: 'A single 4-bit adder adds **and** subtracts: each $B_i$ passes through an XOR gate with the mode line $M$ — $B_i \\oplus M$ — and $M$ also feeds the carry input $C_0$. With $M = 0$: $S = A + B$. With $M = 1$: $S = A + B′ + 1 = A - B$ in two’s complement, exactly the complement-plus-one rule of Section 1.4.',
        detail: 'The XOR gate doubles as a programmable inverter: $B_i \\oplus 0 = B_i$ passes the bit, $B_i \\oplus 1 = B_i′$ complements it. Feeding $M$ into $C_0$ adds the required 1 for free. One adder, one set of XOR gates, two operations — the standard arrangement in every two’s-complement processor.',
      },
      {
        term: 'Overflow detection',
        kind: 'law',
        statement: 'Adding two’s-complement numbers, **signed overflow** is detected by comparing the carry into and out of the sign stage: $$V = C_n \\oplus C_{n-1}.$$ If $V = 1$ the sign of the result is wrong — the true sum lies outside $-2^{n-1}$ to $2^{n-1} - 1$.',
        detail: 'The rule: adding two positives (carry into the sign stage 0) that produces a negative result (carry out 1) is overflow, and so is the symmetric negative case. One XOR gate, already fed by both carries in the look-ahead structure, produces $V$. This is the same $C_8 \\oplus C_7$ flag the ALU of Chapter 9 latches alongside every addition.',
      },
    ],
    examples: [
      {
        title: 'From half adder to full adder by truth table',
        problem: 'Derive the full adder’s equations from its truth table and realize the cell with two XOR gates, one AND and one OR gate.',
        steps: [
          { label: 'Step 1: The half adder table', text: 'Two inputs give four rows: $A B = 00 \\to S = 0, C = 0$; $01 \\to S = 1, C = 0$; $10 \\to S = 1, C = 0$; $11 \\to S = 0, C = 1$. The sum column $0110$ is exclusive-OR; the carry column $0001$ is AND: $S = A \\oplus B$, $C = AB$.' },
          { label: 'Step 2: Add the carry-in — the full adder table', text: 'Three inputs give eight rows; the sum $S$ is 1 for an odd number of 1s among $A, B, C_{\\text{in}}$ (rows 001, 010, 100, 111) and the carry $C_{\\text{out}}$ is 1 when at least two inputs are 1 (rows 011, 101, 110, 111).' },
          { label: 'Step 3: Read the sum as XOR', text: 'The odd-parity column gives $S = A′B′C_{\\text{in}} + A′BC_{\\text{in}}′ + AB′C_{\\text{in}}′ + ABC_{\\text{in}}$, which factors as $S = A \\oplus B \\oplus C_{\\text{in}}$ — two XOR gates replace four ANDs and an OR.' },
          { label: 'Step 4: Read the carry in generate-propagate form', text: 'The majority column gives $C_{\\text{out}} = AB + AC_{\\text{in}} + BC_{\\text{in}}$, which regroups as $C_{\\text{out}} = AB + (A \\oplus B)C_{\\text{in}}$: generate the carry if $A = B = 1$, else propagate it if $A \\oplus B = 1$ and the carry-in is 1.' },
          { label: 'Step 5: Draw the cell', text: 'Gate 1: $P = A \\oplus B$. Gate 2: $G = AB$. Gate 3: $S = P \\oplus C_{\\text{in}}$. Gate 4: $C_{\\text{out}} = G + PC_{\\text{in}}$. Four gates, with $P$ and $G$ brought out as side outputs — exactly the signals the look-ahead structure of the next example consumes.' },
          { label: 'Step 6: One numeric check', text: '$A = 1, B = 1, C_{\\text{in}} = 1$: $S = 1 \\oplus 1 \\oplus 1 = 1$, $C_{\\text{out}} = 1 \\cdot 1 + 0 \\cdot 1 = 1$ — one plus one plus one is eleven ($3 = 11_2$): sum 1, carry 1 ✓.' },
        ],
        result: 'The full adder: $S = A \\oplus B \\oplus C_{\\text{in}}$, $C_{\\text{out}} = AB + (A \\oplus B)C_{\\text{in}}$ — four gates per bit, with $P$ and $G$ exported for carry look-ahead.',
      },
      {
        title: 'Ripple versus look-ahead: the speed comparison',
        problem: 'Add $A = 0101$ and $B = 0011$ with a 4-bit ripple-carry adder and time the worst-case carry; then build the look-ahead version and compare.',
        steps: [
          { label: 'Step 1: Trace the ripple addition', text: 'Stage 0: $1 + 1 + 0 = 10$: $S_0 = 0$, $C_1 = 1$. Stage 1: $0 + 1 + 1 = 10$: $S_1 = 0$, $C_2 = 1$. Stage 2: $1 + 0 + 1 = 10$: $S_2 = 0$, $C_3 = 1$. Stage 3: $0 + 0 + 1 = 01$: $S_3 = 1$, $C_4 = 0$. The result is $1000 = 8 = 5 + 3$, and the carry had to pass through all four stages to prove $C_4 = 0$.' },
          { label: 'Step 2: Time the ripple', text: 'Each stage costs 2 gate delays from $C_i$ to $C_{i+1}$ (the AND and the OR of $C_{\\text{out}} = G + PC_{\\text{in}}$): $C_1$ at 2, $C_2$ at 4, $C_3$ at 6, $C_4$ at 8 gate delays, and $S_3 = P_3 \\oplus C_3$ one delay after $C_3$, at 7. Worst-case output: $C_4$ at **8 gate delays** — and in general $2n$ for $n$ bits.' },
          { label: 'Step 3: Build the look-ahead signals', text: 'Compute $G_i = A_iB_i$ and $P_i = A_i \\oplus B_i$ for all stages at once (1 gate delay): $G_0 = 1 \\cdot 1 = 1$ and every other $G_i = 0$; $P_1 = P_2 = 1$ while $P_0 = P_3 = 0$.' },
          { label: 'Step 4: Evaluate the flat carry equations', text: '$C_1 = G_0 + P_0C_0 = 1 + 0 = 1$. $C_2 = G_1 + P_1G_0 + P_1P_0C_0 = 0 + 1 + 0 = 1$. $C_3 = G_2 + P_2G_1 + P_2P_1G_0 + P_2P_1P_0C_0 = 0 + 0 + 1 + 0 = 1$. $C_4 = G_3 + P_3G_2 + P_3P_2G_1 + P_3P_2P_1G_0 + P_3P_2P_1P_0C_0 = 0$ — the same carries as the ripple, all computed in one shot.' },
          { label: 'Step 5: Time the look-ahead', text: 'The $G$s and $P$s exist after 1 gate delay; each $C_{i+1}$ is a two-level AND-OR function of them and $C_0$, valid at delay 3; each sum bit $S_i = P_i \\oplus C_i$ is valid at delay 4. All four carries and all sums are ready after **4 gate delays**, versus 7–8 for the ripple — a 2× speedup at 4 bits.' },
          { label: 'Step 6: Extrapolate to 16 bits', text: 'Ripple: $C_{16}$ after $2 \\times 16 = 32$ gate delays. Look-ahead in four 4-bit blocks with a second-level of group generate/propagate: the block carries appear after roughly 8 gate delays total. The gap widens linearly with word length — which is why every wide fast adder since the MSI era is a look-ahead (or a cousin of it).',
          },
        ],
        result: 'Same sums, different physics: ripple delivers $C_4$ at 8 gate delays ($2n$ in general), look-ahead at 4 ($3$ for all carries plus $1$ for the sums) — independent of $n$ at every level of look-ahead.',
      },
      {
        title: 'The adder-subtractor and its overflow flag',
        problem: 'Use the mode-controlled adder-subtractor to compute $5 - 3$, $3 - 5$, and $7 + 6$ (4-bit two’s complement), tracing every carry and the overflow flag $V = C_4 \\oplus C_3$.',
        steps: [
          { label: 'Step 1: Set up the hardware', text: 'Mode $M$ feeds $C_0$ and one input of every $B$-side XOR gate. $M = 0$ passes $B$ through: $S = A + B$. $M = 1$ complements $B$ and adds 1: $S = A + B′ + 1 = A - B$.' },
          { label: 'Step 2: Compute $5 - 3$ ($A = 0101$, $B = 0011$, $M = 1$)', text: '$B′ = 1100$, $C_0 = 1$. Stage 0: $1 + 0 + 1 = 10$: $S_0 = 0$, $C_1 = 1$. Stage 1: $0 + 0 + 1 = 01$: $S_1 = 1$, $C_2 = 0$. Stage 2: $1 + 1 + 0 = 10$: $S_2 = 0$, $C_3 = 1$. Stage 3: $0 + 1 + 1 = 11$: $S_3 = 1$, $C_4 = 1$. Result $S = 0010 = 2$ ✓, $C_4 = 1$ (no borrow), $V = 1 \\oplus 1 = 0$.' },
          { label: 'Step 3: Compute $3 - 5$ ($A = 0011$, $B = 0101$, $M = 1$)', text: '$B′ = 1010$, $C_0 = 1$. Stage 0: $1 + 0 + 1 = 10$: $S_0 = 0$, $C_1 = 1$. Stage 1: $1 + 1 + 1 = 11$: $S_1 = 1$, $C_2 = 1$. Stage 2: $0 + 0 + 1 = 01$: $S_2 = 1$, $C_3 = 0$. Stage 3: $0 + 1 + 0 = 01$: $S_3 = 1$, $C_4 = 0$. Result $S = 1110 = -2$ in two’s complement ✓, $C_4 = 0$ (the borrow signal in unsigned reading), $V = 0 \\oplus 0 = 0$.' },
          { label: 'Step 4: Compute $7 + 6$ ($A = 0111$, $B = 0110$, $M = 0$)', text: 'Stage 0: $1 + 0 + 0 = 01$: $S_0 = 1$, $C_1 = 0$. Stage 1: $1 + 1 + 0 = 10$: $S_1 = 0$, $C_2 = 1$. Stage 2: $1 + 1 + 1 = 11$: $S_2 = 1$, $C_3 = 1$. Stage 3: $0 + 0 + 1 = 01$: $S_3 = 1$, $C_4 = 0$. Result $S = 1101$, which read as two’s complement is $-3$ — but $7 + 6 = 13$.' },
          { label: 'Step 5: Read the flags', text: 'In Step 4, $V = C_4 \\oplus C_3 = 0 \\oplus 1 = 1$: overflow — two positives summed to a negative because 13 exceeds $2^{3} - 1 = 7$. In Steps 2 and 3 the carries agreed ($V = 0$) and the signed results were exact. The carry out $C_4$ by itself means unsigned overflow only; $V$ alone speaks for the signed world — the two flags are independent, as Chapter 9’s ALU will re-emphasize.' },
        ],
        result: 'One adder plus four XOR gates and one mode bit perform $5 - 3 = 0010$, $3 - 5 = 1110$ (i.e. $-2$) and $7 + 6 = 1101$ with $V = C_4 \\oplus C_3 = 1$ flagging the third case as out of signed range.',
      },
    ],
    keyTakeaways: [
      'Half adder: $S = A \\oplus B$, $C = AB$. Full adder: $S = A \\oplus B \\oplus C_{\\text{in}}$, $C_{\\text{out}} = AB + (A \\oplus B)C_{\\text{in}}$ — four gates per bit.',
      'The ripple-carry adder is $n$ cascaded full adders; its worst-case delay is $2n$ gate delays because the carry walks every stage.',
      'Look-ahead carry: $G_i = A_iB_i$ (generate), $P_i = A_i \\oplus B_i$ (propagate), $C_{i+1} = G_i + P_iC_i$ — flat two-level carry equations, all carries valid 3 gate delays after the inputs.',
      '4-bit comparison: 8 gate delays (ripple) versus 4 (look-ahead); 16-bit: 32 versus roughly 8 with two-level look-ahead — speed bought with extra AND-OR hardware.',
      'Mode line through XOR gates turns the adder into a subtractor: $M = 1$ computes $A + B′ + 1 = A - B$, the two’s-complement rule of Chapter 1 wired into gates.',
      'Signed overflow: $V = C_n \\oplus C_{n-1}$ — carry into and out of the sign stage disagree exactly when the signed result is out of range.',
    ],
    quiz: [
      {
        q: 'Why is a half adder called half?',
        options: ['It handles only half the truth table', 'It adds two bits but cannot accept a carry-in from a previous stage', 'It computes only the carry', 'It works at half the clock speed'],
        answer: 1,
        explanation: 'It has no $C_{\\text{in}}$ input, so it cannot be cascaded — the full adder exists precisely to add the third bit that makes multi-bit addition possible.',
      },
      {
        q: 'In the look-ahead adder, the propagate signal of stage $i$ is:',
        options: [`$P_i = A_iB_i$`, '$P_i = A_i \\oplus B_i$ — the carry passes when exactly one operand bit is 1', '$P_i = A_i + B_i$ only', `$P_i = A_i′B_i + A_iB_i′C_i$`],
        answer: 1,
        explanation: 'Generate $G_i = A_iB_i$ creates a carry on the spot; propagate $P_i = A_i \\oplus B_i$ lets an incoming carry pass through the stage. (An OR-based $P_i = A_i + B_i$ also propagates correctly, but the XOR form is free — it is the sum bit.)',
      },
      {
        q: 'A 16-bit ripple-carry adder’s final carry is valid after approximately how many gate delays?',
        options: ['16', '32', '4', '2'],
        answer: 1,
        explanation: 'Each stage adds 2 gate delays to the carry chain ($2n$ in general): $2 \\times 16 = 32$ — the linear growth that look-ahead exists to break.',
      },
      {
        q: 'With $A = 0111$, $B = 0110$ and $M = 0$, the 4-bit adder-subtractor produces which flags?',
        options: [`$C_4 = 1$ and $V = 1$`, '$C_4 = 0$ and $V = 1$ — signed overflow, no unsigned carry', `$C_4 = 0$ and $V = 0$`, `$C_4 = 1$ and $V = 0$`],
        answer: 1,
        explanation: 'The sum is $1101$: as unsigned it fits ($13 < 16$, so $C_4 = 0$), but signed it reads $-3$ — the carries into and out of the sign stage disagree, so $V = C_4 \\oplus C_3 = 1$.',
      },
      {
        q: 'In the mode-controlled adder-subtractor, the mode bit $M$ does what when $M = 1$?',
        options: ['Disables the carry chain', 'Complements every $B_i$ through the XOR gates and supplies the $+1$ through $C_0$, so the adder computes $A - B$', 'Shifts the result left by one', 'Clears the accumulator'],
        answer: 1,
        explanation: 'The XOR gates act as programmable inverters ($B_i \\oplus 1 = B_i′$) and $M$ into $C_0$ adds the 1: together $A + B′ + 1 = A - B$ — two’s-complement subtraction with no extra adder.',
      },
    
      // PYQ-pattern — full adder expressions (rephrased)
      {
        q: "A full adder has inputs $x$, $y$, $z$ (carry-in). Which pair gives sum $S$ and carry $C$?",
        options: ["$S = x′y′z$, $C = x + y$", "$S = xy + yz$, $C = x \\oplus y$", "$S = x + y + z$, $C = xyz$", "$S = x \\oplus y \\oplus z$, $C = xy + xz + yz$"],
        answer: 3,
        explanation: "**Step 1 — Given data:** three input bits, two outputs.\n**Step 2 — Rule:** sum is odd parity (three-way XOR); carry is majority (at least two inputs $1$).\n**Step 3 — Check:** $S = x \\oplus y \\oplus z$ is $1$ on $1,2,4,7$; $C = xy + xz + yz$ is $1$ on $3,5,6,7$.\n**Step 4 — Cross-check:** half adder is the $z = 0$ case: $S = x \\oplus y$, $C = xy$, consistent.\n**Step 5 — Distractors:** swap sum and carry roles; OR-sum ignores parity; single minterm covers one row only.\n**Step 6 — Conclude:** XOR trio for sum, three ANDs ORed for carry."
      },
      // PYQ-pattern — ripple carry delay (rephrased)
      {
        q: "Each full-adder stage contributes $2$ circuit delays to the carry chain. After how many delays is the final carry valid in an $8$-bit ripple-carry adder?",
        options: ["$8$", "$4$", "$16$", "$32$"],
        answer: 2,
        explanation: "**Step 1 — Given data:** $n = 8$ stages, $2$ delays per stage.\n**Step 2 — Rule:** ripple delay grows linearly as $2n$ since each carry waits for the previous stage.\n**Step 3 — Computation:** $2 \\times 8 = 16$ delays.\n**Step 4 — Cross-check:** $4$-bit gives $8$, $16$-bit gives $32$; the $16$-bit figure in the text matches this $2n$ law.\n**Step 5 — Distractors:** $8$ counts one per stage; $4$ counts half; $32$ is the $16$-bit figure.\n**Step 6 — Conclude:** $16$ delays, the linear cost look-ahead removes."
      },
      // PYQ-pattern — adder subtractor overflow (rephrased)
      {
        q: "A $4$-bit mode-controlled adder-subtractor adds with $M = 0$: $A = 0111$ ($7$), $B = 0100$ ($4$). What are result, carry and signed-overflow $V$?",
        options: ["$0111$, no change", "$1011$, carry $1$, $V = 0$", "$1011$ ($-5$), carry $0$, $V = 1$ (overflow)", "$0000$, carry $1$, $V = 1$"],
        answer: 2,
        explanation: "**Step 1 — Given data:** $M = 0$ passes $B$ unchanged; add $0111 + 0100$.\n**Step 2 — Rule:** $M$ XORs each $B$ bit ($M = 1$ inverts for subtraction); overflow $V = C_{3} \\oplus C_{4}$ (carry into sign XOR carry out).\n**Step 3 — Computation:** bit-wise $0111 + 0100 = 1011$; carries into sign $1$, out $0$; $V = 1$.\n**Step 4 — Cross-check:** $7 + 4 = 11$ exceeds $+7$ max, so signed overflow must flag; unsigned $11$ is legal, hence carry $0$.\n**Step 5 — Distractors:** $V = 0$ misses the range breach; unchanged ignores addition; zero result is unrelated.\n**Step 6 — Conclude:** $1011$ with overflow."
      }
    ],
  },

  // ------------------------------------------------------------------ 4.3
  {
    sectionId: 'mano-ch4-s3',
    readingTime: 10,
    intro: 'Between adders and NAND conversion sits a family of circuits that are pure translation: code converters, which re-encode the same information for a different consumer, and magnitude comparators, which decide order. Both are the design procedure of Section 4.1 applied again — but each hides an algebraic shortcut. The BCD-to-excess-3 converter is the book’s grand worked design; binary-to-Gray is one exclusive-OR per bit; and the 4-bit comparator shows how a per-bit test snowballs into a cascade expression.',
    objectives: [
      'Design a BCD-to-excess-3 converter completely: truth table, four K-maps with don’t-cares, equations, circuit',
      'Convert between binary and Gray code with the exclusive-OR relation and back with the cumulative exclusive-OR',
      'Derive the 1-bit magnitude comparator’s three outputs',
      'Extend to the 4-bit comparator and its cascade expression',
      'Explain how MSI comparator chips cascade to arbitrary word length',
    ],
    concepts: [
      {
        term: 'Code converter',
        kind: 'definition',
        statement: 'A **code converter** is a combinational circuit that translates binary information from one encoding to another: $n$ inputs in the source code, $m$ outputs in the target code, one truth-table row per valid symbol. The BCD-to-Gray converter of Section 4.1 was one; the classic worked example of the book is **BCD to excess-3**.',
        detail: 'Excess-3 codes each decimal digit as its value plus three, which makes the code self-complementing — complementing the bits yields the nine’s complement of the digit, a property the subtracting hardware of the era exploited. The converter receives $A\\,B\\,C\\,D$ (BCD, digit value $8A + 4B + 2C + D$) and emits $W\\,X\\,Y\\,Z$ with value $8W + 4X + 2Y + Z = 8A + 4B + 2C + D + 3$.',
      },
      {
        term: 'The BCD-to-excess-3 equations',
        kind: 'law',
        statement: 'Minimizing the four output maps (1s on rows for digits $d$, don’t-cares on rows 10–15) yields $$W = A + BC + BD, \\qquad X = B′C + B′D + BC′D′ + AB′,$$ $$Y = C′D′ + CD, \\qquad Z = D′.$$',
        detail: 'The last two show the arithmetic underneath: $Y$ and $Z$ are the two low bits of $d + 3$ viewed as functions of the BCD bits, and $Z = D′$ says the excess-3 low bit is simply the complement of the BCD low bit — adding three flips the parity of the low bit for every digit. The $X$ equation is the messiest because the carry structure of $+3$ crosses the middle of the digit range.',
      },
      {
        term: 'Binary-to-Gray conversion',
        kind: 'law',
        statement: 'For the **full binary** code (all $2^n$ combinations), Gray bits come from adjacent binary bits: $$G_n = B_n, \\qquad G_i = B_{i+1} \\oplus B_i \\quad (i < n).$$ The inverse recovers binary cumulatively: $B_n = G_n$ and $B_i = B_{i+1} \\oplus G_i$.',
        detail: 'Exclusive-OR of neighboring bits measures where the binary code changes step to step, which is exactly the one-bit-at-a-time property of Gray. The BCD-to-Gray converter of Section 4.1 could not use this clean chain on all four outputs only because its don’t-cares bought cheaper sums — restricted to the ten valid rows, the two designs agree.',
      },
      {
        term: 'The 1-bit magnitude comparator',
        kind: 'definition',
        statement: 'Comparing single bits $A$ and $B$ needs three outputs: $$ (A > B) = AB′, \\qquad (A = B) = AB + A′B′ = (A \\oplus B)′, \\qquad (A < B) = A′B, $$ exactly one of which is 1 for any input pair.',
        detail: 'The equality output is the coincidence (XNOR) function of Section 2.6. The three functions are exhaustive and mutually exclusive — the property that lets wider comparators combine the per-bit verdicts with pure AND-OR logic.',
      },
      {
        term: 'The 4-bit comparator',
        kind: 'method',
        statement: 'With per-bit equality $x_i = A_iB_i + A_i′B_i′$, the 4-bit verdicts are $$ (A = B) = x_3x_2x_1x_0, $$ $$ (A > B) = A_3B_3′ + x_3A_2B_2′ + x_3x_2A_1B_1′ + x_3x_2x_1A_0B_0′, $$ and symmetrically $$ (A < B) = A_3′B_3 + x_3A_2′B_2 + x_3x_2A_1′B_1 + x_3x_2x_1A_0′B_0. $$',
        detail: 'Read $(A > B)$ aloud: $A$ is bigger iff it wins at the most significant position where the two numbers differ — each term guards the higher equal bits with their $x$ factors and then demands $A_i = 1, B_i = 0$ at the deciding position. The three outputs remain mutually exclusive; hardware can compute the third as the NOR of the other two.',
      },
      {
        term: 'Cascading comparators',
        kind: 'insight',
        statement: 'A 4-bit comparator chip (the MSI 7485 of Chapter 5’s catalog) adds **cascade inputs** — the $(A > B)$, $(A = B)$, $(A < B)$ verdicts of a lower-order block — and reaches its verdict for the pair of 8-bit operands by consulting them only when its own four bits tie.',
        detail: 'The cascade expression above already contains the mechanism: when all $x_i = 1$ (a local tie), the external verdicts must flow through, so a chip wires its cascade inputs into the tail of its $(A > B)$ and $(A < B)$ chains. Word length then grows by a chip per 4 bits with no extra logic — the same packaging trick that made adders and counters one-chip functions in the MSI era that Chapter 5 surveys.',
      },
    ],
    examples: [
      {
        title: 'The complete BCD-to-excess-3 design',
        problem: 'Design the converter from BCD inputs $A\\,B\\,C\\,D$ to excess-3 outputs $W\\,X\\,Y\\,Z$, exploiting the six don’t-care rows.',
        steps: [
          { label: 'Step 1: Specification and table', text: 'Each output is the corresponding bit of (digit $+\\,3$): digit $0 = 0000 \\to 0011$; $1 \\to 0100$; $2 \\to 0101$; $3 \\to 0110$; $4 \\to 0111$; $5 \\to 1000$; $6 \\to 1001$; $7 \\to 1010$; $8 \\to 1011$; $9 \\to 1100$. Rows for $1010$ through $1111$ are X in all four output columns.' },
          { label: 'Step 2: Map $W$ (the top bit)', text: '1s on digits 5–9 (rows 5–9). One quad with the don’t-cares gives $A$ (all of rows 8–15); the remaining 1s at rows 5, 6, 7 pair up as $BC$ (rows 6, 7 + 14, 15) and $BD$ (rows 5, 7 + 13, 15): $W = A + BC + BD$ — 1 exactly when the digit is 5 or more, i.e. when $d + 3 \\ge 8$.' },
          { label: 'Step 3: Map $Z$ (the bottom bit)', text: '1s on even digits 0, 2, 4, 6, 8 (rows 0, 2, 4, 6, 8): every one of them has $D = 0$, and all don’t-care rows with $D = 0$ make the column quad free: $Z = D′$ — the cleanest possible output, one inverter.' },
          { label: 'Step 4: Map $Y$', text: '1s on digits 0, 3, 4, 7, 8 (rows 0, 3, 4, 7, 8): the column quad $\\{0, 4, 8, 12\\}$ gives $C′D′$ and the column quad $\\{3, 7, 11, 15\\}$ gives $CD$: $Y = C′D′ + CD$ — the equivalence function of the two low BCD bits.' },
          { label: 'Step 5: Map $X$ (the hard one)', text: '1s on digits 1, 2, 3, 4, 8, 9 (rows 1, 2, 3, 4, 8, 9). Prime groups: the quad $\\{1, 3, 9, 11\\} = B′D$; the quad $\\{2, 3, 10, 11\\} = B′C$; the quad $\\{8, 9, 10, 11\\} = AB′$; and digit 4 can only pair with the don’t-care row 12: $BC′D′$. So $X = B′C + B′D + AB′ + BC′D′$ — 4 terms, 9 literals.' },
          { label: 'Step 6: Verify two rows end to end', text: 'Digit 4 $(ABCD = 0100)$: $W = 0 + 1 \\cdot 0 + 1 \\cdot 0 = 0$; $X = 0 + 0 + 0 + 1 \\cdot 1 \\cdot 1 = 1$; $Y = C′D′ = 1$; $Z = D′ = 1$ → $WXYZ = 0111$ ✓ (excess-3 of 4). Digit 9 $(1001)$: $W = 1$; $X = AB′ = 1$; $Y = CD = 0$; $Z = D′ = 0$ → $1100$ ✓ (excess-3 of 9 is twelve).',
          },
          { label: 'Step 7: Draw the diagram', text: 'Count the gates: $W$ needs two 2-input ANDs and one 3-input OR; $X$ needs three 2-input ANDs, one 3-input AND and a 4-input OR; $Y$ one 2-input AND with an inverter, one AND, one OR; $Z$ one inverter — roughly a dozen gates plus shared complemented literals, exactly the two-level SOP shape the maps produce.' },
        ],
        result: 'BCD-to-excess-3 in four equations: $W = A + BC + BD$, $X = B′C + B′D + AB′ + BC′D′$, $Y = C′D′ + CD$, $Z = D′$ — verified on rows 4 and 9 and the textbook’s showcase of don’t-cares at work.',
      },
      {
        title: 'Binary to Gray and back in one line each',
        problem: 'Convert $1011_2$ to Gray code and convert the Gray word $1110$ back to binary.',
        steps: [
          { label: 'Step 1: Write the conversion rule', text: 'Binary $B_3B_2B_1B_0$ to Gray $G_3G_2G_1G_0$: $G_3 = B_3$, then each lower Gray bit is the XOR of two adjacent binary bits: $G_i = B_{i+1} \\oplus B_i$.' },
          { label: 'Step 2: Apply to $1011$', text: '$G_3 = 1$; $G_2 = B_3 \\oplus B_2 = 1 \\oplus 0 = 1$; $G_1 = B_2 \\oplus B_1 = 0 \\oplus 1 = 1$; $G_0 = B_1 \\oplus B_0 = 1 \\oplus 1 = 0$. Gray word: $1110$.' },
          { label: 'Step 3: Check the adjacency claim', text: 'Binary $1011 = 11$: the Gray code of 11 is $1110$, and counting Gray steps from $1010$ (ten) to $1110$ changes exactly one bit at a time — the defining property survives the conversion.' },
          { label: 'Step 4: Invert the map — Gray to binary', text: 'Recovery runs top-down: $B_3 = G_3$; $B_2 = B_3 \\oplus G_2$; $B_1 = B_2 \\oplus G_1$; $B_0 = B_1 \\oplus G_0$ — each binary bit accumulates the XOR of the Gray bits above it.' },
          { label: 'Step 5: Apply to $1110$', text: '$B_3 = 1$; $B_2 = 1 \\oplus 1 = 0$; $B_1 = 0 \\oplus 1 = 1$; $B_0 = 1 \\oplus 0 = 1$ → $1011$ — back to the original word, as the round trip must guarantee.' },
        ],
        result: 'Binary $1011 \\to$ Gray $1110$; Gray $1110 \\to$ binary $1011$ — conversion is a fan of XOR gates, recovery a cumulative chain of them.',
      },
      {
        title: 'A 4-bit comparison, term by term',
        problem: 'Evaluate the 4-bit comparator outputs for $A = 1010$ and $B = 1001$ using the cascade expressions.',
        steps: [
          { label: 'Step 1: Per-bit equality', text: '$x_3 = 1 \\cdot 1 + 1′ \\cdot 1′ = 1$; $x_2 = 1$ (both bits 0); $x_1 = 1 \\cdot 0 + 1′ \\cdot 0′ = 0$ (bits 1 vs 0); $x_0 = 0 \\cdot 1 + 0′ \\cdot 1′ = 0$ (bits 0 vs 1). The first difference appears at bit position 1.' },
          { label: 'Step 2: Evaluate $(A = B)$', text: '$(A = B) = x_3x_2x_1x_0 = 1 \\cdot 1 \\cdot 0 \\cdot 0 = 0$ — the words are unequal, as the differing bits already showed.' },
          { label: 'Step 3: Evaluate $(A > B)$', text: 'Term by term: $A_3B_3′ = 1 \\cdot 0 = 0$; $x_3A_2B_2′ = 1 \\cdot 0 \\cdot 1 = 0$; $x_3x_2A_1B_1′ = 1 \\cdot 1 \\cdot 1 \\cdot 1 = 1$ — hit: the words agree above position 1 and $A_1 = 1 > B_1 = 0$ there; the last term cannot matter once one fires: $(A > B) = 1$.' },
          { label: 'Step 4: Evaluate $(A < B)$', text: 'Every term dies: $A_3′B_3 = 0$; $x_3A_2′B_2 = 0$; $x_3x_2A_1′B_1 = 1 \\cdot 1 \\cdot 0 \\cdot 0 = 0$; the tail likewise: $(A < B) = 0$. Exactly one output is high ✓.' },
          { label: 'Step 5: Interpret the structure', text: 'The verdict came from the most significant differing position, guarded by the equality bits above it — which is exactly how the decimal comparison $10 > 9$ feels: the first digit that differs decides, everything to its right is irrelevant.' },
        ],
        result: '$A = 1010 > B = 1001$: $(A{>}B) = 1$, $(A{=}B) = 0$, $(A{<}B) = 0$ — decided at bit 1, the highest position where the words differ.',
      },
    ],
    keyTakeaways: [
      'A code converter is the design procedure pointed at a re-encoding: BCD-to-excess-3 gives $W = A + BC + BD$, $X = B′C + B′D + AB′ + BC′D′$, $Y = C′D′ + CD$, $Z = D′$.',
      'The six invalid BCD rows are don’t-cares and routinely halve the logic — $Z$ collapses to a single inverter.',
      'Full binary-to-Gray is one XOR per bit ($G_i = B_{i+1} \\oplus B_i$); Gray-to-binary is the cumulative XOR chain.',
      '1-bit comparison: $(A{>}B) = AB′$, $(A{=}B) = (A \\oplus B)′$, $(A{<}B) = A′B$ — exhaustive and mutually exclusive.',
      '4-bit comparison decides at the most significant differing bit; the $x_i$ guard terms make the expression a cascade, and MSI chips chain that way (Chapter 5).',
      'The three comparator outputs are one-hot: hardware may compute the third as the NOR of the other two.',
    ],
    quiz: [
      {
        q: 'Why is excess-3 of the digit $d$ computed as $d + 3$?',
        options: ['To make room for a parity bit', 'The code is self-complementing: complementing the bits yields the nine’s complement of the digit', 'Because BCD cannot represent 0', 'To align with hexadecimal'],
        answer: 1,
        explanation: 'Excess-3 maps $d \\to d + 3$ so that $9 - d$ corresponds to the bitwise complement of the code word — the property decimal machines used for nine’s-complement subtraction.',
      },
      {
        q: 'In the BCD-to-excess-3 design, the output $Z$ equals:',
        options: [`$D$`, '$D′$ — a single inverter, because adding 3 flips the parity of the low bit', `$C \\oplus D$`, `$W$`],
        answer: 1,
        explanation: 'Every even digit maps to an odd excess-3 value and vice versa: $Z = D′$ is the whole function — the cleanest demonstration of don’t-cares plus insight beating brute force.',
      },
      {
        q: 'The Gray code of binary $1011$ is:',
        options: [`$1011$`, '$1110$ — each Gray bit XORs adjacent binary bits', `$0100$`, `$1101$`],
        answer: 1,
        explanation: '$G_3 = 1$, $G_2 = 1 \\oplus 0 = 1$, $G_1 = 0 \\oplus 1 = 1$, $G_0 = 1 \\oplus 1 = 0$: the word $1110$, one bit different from every Gray neighbor.',
      },
      {
        q: 'In the 4-bit comparator, the purpose of the $x_i$ factors in the term $x_3x_2A_1B_1′$ is to:',
        options: ['Add delay for timing safety', 'Ensure position 1 decides only when the higher positions are equal', 'Complement the lower bits', 'Enable the cascade inputs'],
        answer: 1,
        explanation: 'The first differing position must decide; each term guards the higher bits with equality factors so it fires only if everything above agrees and $A_i = 1, B_i = 0$ at that position.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.4
  {
    sectionId: 'mano-ch4-s4',
    readingTime: 9,
    intro: 'The maps hand us sum-of-products expressions, but the physical part catalog hands us NAND and NOR — the natural transistors of TTL and CMOS. Fortunately the two universal gates can realize anything: a two-level AND-OR diagram converts to all-NAND by inspection, multilevel circuits convert by a disciplined bubble game, and the AND-OR-INVERT gate packages the complement of an SOP in one device. This section is the translator between Boolean algebra and the parts you can actually buy.',
    objectives: [
      'Show that NAND and NOR are functionally complete',
      'Convert two-level AND-OR (SOP) circuits to two-level NAND circuits and POS circuits to NOR circuits',
      'Use the alternate graphic symbols and the bubble-pushing transformation on multilevel circuits',
      'Convert an arbitrary AND-OR network to an all-NAND network step by step',
      'Recognize and use the AND-OR-INVERT (AOI) gate',
    ],
    concepts: [
      {
        term: 'Universal (functionally complete) gates',
        kind: 'definition',
        statement: 'A gate type is **universal** if any Boolean function can be realized with gates of that type alone. NAND is universal: NOT is NAND with tied inputs ($x′ = (xx)′$), AND is NAND followed by that inverter, OR is NAND of the complemented inputs. By duality, NOR is universal too.',
        detail: 'The proof is three constructions: $x′ = (x \\cdot x)′$; $xy = ((xy)′)′$; $x + y = (x′y′)′$ — the last by De Morgan. Since {NOT, AND, OR} generates every function, so does NAND alone. Economically this is why IC families lead with NAND: one mask, every circuit — the point Section 2.7 made about gate families and Chapter 5 will make about programmable logic.',
      },
      {
        term: 'Two-level NAND conversion',
        kind: 'law',
        statement: 'A two-level **AND-OR** circuit realizing an SOP expression $F = AB + CD$ converts to an all-NAND circuit by replacing both levels with NAND gates: $$F = AB + CD = \\big((AB)′ \\cdot (CD)′\\big)′,$$ the second De Morgan theorem with the complement pushed to the inputs. The diagram: two NANDs feeding a third.',
        detail: 'The rule generalizes: an SOP with any number of product terms becomes NAND of NANDs, one NAND per product term plus one at the output. The two circuits have identical truth tables but different gate inventories — and the NAND version matches what the catalog sells.',
      },
      {
        term: 'Alternate graphic symbols and bubble pushing',
        kind: 'notation',
        statement: 'By De Morgan a NAND gate is **also** an OR gate whose inputs are inverted — its alternate symbol is an OR shape with bubbles on the inputs. Likewise NOR is an AND with bubbled inputs. **Bubble pushing** slides these inversion circles through the diagram in pairs: two bubbles on a wire cancel, and any single leftover bubble must be matched by complementing a literal.',
        detail: 'The game is what makes multilevel conversion visual: convert every AND-OR diagram so that gates alternate shapes-and-bubbles until every internal wire carries either two bubbles (which cancel) or zero, leaving NAND and NOR shapes only. One bubble left alone on an input means feeding that input’s complement literal instead.',
      },
      {
        term: 'Multilevel NAND conversion procedure',
        kind: 'method',
        statement: 'To convert an arbitrary AND-OR network to all-NAND: **(1)** express the function with AND and OR so that alternate levels are AND and OR (factor or expand as needed); **(2)** insert complementation pairs so each AND becomes a NAND whose output bubble feeds the next level; **(3)** cancel bubble pairs on internal wires; **(4)** complement any input literals that still meet a lone bubble; a first-level OR keeps its inputs complemented and becomes a NAND.',
        detail: 'Equivalently, by algebra: rewrite every AND as the NAND of the same inputs followed by double negation, and every OR as NAND of complemented inputs — $x + y = (x′y′)′$ — then cancel the double negations that share a wire. What survives is all-NAND by construction.',
      },
      {
        term: 'AND-OR-INVERT gate',
        kind: 'definition',
        statement: 'An **AND-OR-INVERT (AOI)** gate is a single LSI/TTL device (the 54/7454 pattern) realizing $F = (AB + CD + \\ldots)′$ — several ANDs feeding one NOR — i.e. the complement of an SOP in one package, one logic level faster than separate gates.',
        detail: 'Whenever the required function is the complement of a sum of products — comparator outputs like $(A{<}B)$, the $\\overline{\\text{enable}}$ signals of Chapter 5’s decoders — the AOI realizes it directly. The dual **OR-AND-INVERT** gate realizes the complement of a POS. Recognizing when a spec is naturally an inverted SOP is the mark of a designer who reads part catalogs.',
      },
      {
        term: 'All-NOR by duality',
        kind: 'insight',
        statement: 'Everything above dualizes: a two-level **OR-AND** (POS) circuit converts to all-NOR, and a spec that arrives as a product of sums should be built that way. Which family to choose is set by which form the function naturally takes — SOP from the 1s of the map, POS from the 0s (Section 3.4).',
        detail: 'NAND-for-SOP and NOR-for-POS are the two sides of one coin, exactly as duality predicts. Mixing them — NAND here, NOR there — almost always costs extra inverters and levels; the disciplined designer picks one and sticks to it.',
      },
    ],
    examples: [
      {
        title: 'Two-level conversion: $F = AB + CD$ to all-NAND',
        problem: 'Convert the AND-OR realization of $F = AB + CD$ into a circuit using only NAND gates, and prove the equivalence.',
        steps: [
          { label: 'Step 1: The AND-OR circuit', text: 'Two 2-input AND gates compute $AB$ and $CD$; one OR gate combines them — the literal wiring of the SOP form, three gates.' },
          { label: 'Step 2: Apply De Morgan to the output', text: '$F = AB + CD$. By the second De Morgan theorem, $AB + CD = \\big((AB)′ \\cdot (CD)′\\big)′$: the OR of two terms is the complement of the AND of their complements.' },
          { label: 'Step 3: Recognize the NAND shapes', text: 'Each inner term $(AB)′$ and $(CD)′$ is exactly a 2-input NAND of the literals; the outer complemented AND is a NAND of those two outputs: three NAND gates total.' },
          { label: 'Step 4: Prove equivalence with the alternate symbols', text: 'Push the output OR gate’s bubble onto its inputs: the OR-with-bubbles accepts the complemented products. Each input bubble meets an AND gate — an AND followed by a bubble **is** the NAND’s own alternate reading — so every gate is a NAND shape with no stray bubbles. The transformation cancelled itself into the catalog part.' },
          { label: 'Step 5: One truth-table spot check', text: 'At $ABCD = 1100$: $AB = 1$, $CD = 0$, so $F = 1$; the NAND circuit computes $(AB)′ = 0$, $(CD)′ = 1$, and the output NAND gives $(0 \\cdot 1)′ = 1$ ✓. At $ABCD = 0000$: $F = 0$; the NAND circuit computes $(AB)′ = 1$, $(CD)′ = 1$, and the output gives $(1 \\cdot 1)′ = 0$ ✓.' },
        ],
        result: 'Three NAND gates replace the AND-OR pair — $F = ((AB)′ \\cdot (CD)′)′$ — the same truth table with one gate species instead of two.',
      },
      {
        title: 'Multilevel conversion: $F = A(B + CD) + B′C$ to all-NAND',
        problem: 'Convert the multilevel AND-OR realization of $F = A(B + CD) + B′C$ into an equivalent circuit using NAND gates only.',
        steps: [
          { label: 'Step 1: Draw the AND-OR levels', text: 'Level by level: gate 1 computes $CD$ (AND); gate 2 computes $B + CD$ (OR); gate 3 computes $A \\cdot (B + CD)$ (AND); gate 4 computes $B′C$ (AND, with a complemented literal); gate 5 (OR) produces $F$.' },
          { label: 'Step 2: Transform the inner OR', text: 'The OR gate becomes a NAND whose inputs are complemented: $B + CD = (B′ \\cdot (CD)′)′$ — a NAND gate fed by $B′$ and by $(CD)′$.' },
          { label: 'Step 3: Feed the NANDs', text: 'The term $(CD)′$ is itself a NAND of $C$ and $D$ — so gate 1 turns into that NAND. The literal $B′$ needed by the inner NAND comes from a NAND with its two inputs tied: $B′ = (B \\cdot B)′$.' },
          { label: 'Step 4: Transform the upper levels', text: 'Gate 3, $A \\cdot (B + CD)$, becomes a NAND producing $\\big(A(B + CD)\\big)′$ — i.e. the NAND gate’s own complemented output; likewise gate 4 becomes a NAND of $B′$ and $C$ producing $(B′C)′$.' },
          { label: 'Step 5: Combine at the top', text: 'The final OR accepts the two complemented products, so it is a NAND of them: $F = \\big(\\big(A(B+CD)\\big)′ \\cdot (B′C)′\\big)′ = A(B + CD) + B′C$ by De Morgan. Count: six NAND gates, of which one is the tied-input inverter for $B′$.' },
          { label: 'Step 6: Verify one input combination', text: 'At $ABCD = 1110$: target $F = 1(1 + 1 \\cdot 0) + 1′ \\cdot 0 = 1$. NAND chain: $(CD)′ = (10)′ = 1$; $B′ = 0$; inner NAND $= (0 \\cdot 1)′ = 1$ (this is $B + CD = 1$); upper NAND $= (A \\cdot 1)′ = 0$ (i.e. $A(B+CD) = 1$); side NAND $= (0 \\cdot 0)′ = 1$; final NAND $= (0 \\cdot 1)′ = 1$ ✓.' },
        ],
        result: 'Six NAND gates — including the tied-input NOT — realize the multilevel function with an identical truth table: bubble pushing turned AND-OR into the one-gate-type catalog circuit.',
      },
      {
        title: 'One AOI gate for an inverted SOP',
        problem: 'The Section 4.1 Gray converter needs $Y = (B_2B_0′ + B_1B_0′)′$ for a later stage. Realize it with a single AND-OR-INVERT gate.',
        steps: [
          { label: 'Step 1: Recognize the shape', text: 'The required function is the complement of a two-term SOP — exactly the AOI pattern $F = (AB + CD)′$ with inputs $A = B_2$, $B = B_0′$, $C = B_1$, $D = B_0′$.' },
          { label: 'Step 2: Wire the gate', text: 'Feed the two AND sections of the AOI with $(B_2, B_0′)$ and $(B_1, B_0′)$; the device internally ORs the products and complements the result — the output is $Y$ with one package and one logic level.' },
          { label: 'Step 3: Check the levels', text: 'Built from discretes, the same function costs two ANDs, one OR and one inverter — three levels; the AOI does it in its single internal level, roughly halving the propagation delay.' },
          { label: 'Step 4: Read the dual use', text: 'Dually, if a POS complement were needed — $(x + y)(z + w)$ inverted — the OR-AND-INVERT gate would play the same trick on a product of sums. The lesson: before building the complement of a standard form, check the one-gate versions.' },
        ],
        result: 'One AOI package replaces four gates: $Y = (B_2B_0′ + B_1B_0′)′$ in a single level — inverted SOPs are a part number, not a project.',
      },
    ],
    keyTakeaways: [
      'NAND (and dually NOR) is universal: NOT, AND and OR all fall out of one gate type, so one mask can build anything.',
      'Two-level AND-OR ⇄ two-level NAND-NAND by De Morgan: $F = AB + CD = ((AB)′(CD)′)′$; POS ⇄ NOR-NOR dually.',
      'Multilevel conversion is bubble pushing: insert complement pairs, cancel doubles on internal wires, complement literals that meet a lone bubble.',
      'The worked multilevel conversion: $F = A(B + CD) + B′C$ needs exactly six NAND gates, one used as a tied-input inverter.',
      'The AND-OR-INVERT gate realizes $(AB + CD + \\ldots)′$ in one package and one level — reach for it whenever the spec is a complemented SOP.',
      'Pick the family by the natural form: NAND with SOP (1s of the map), NOR with POS (0s of the map); mixing families buys inverters.',
    ],
    quiz: [
      {
        q: 'The inverter built from one NAND gate is:',
        options: ['NAND with one input grounded', 'NAND with both inputs tied to the same signal: $x′ = (x \\cdot x)′$', 'NAND with one input at 1', 'Two NANDs in series'],
        answer: 1,
        explanation: 'Tying the inputs makes the AND redundant: $(x \\cdot x)′ = x′$ — the first of the three constructions that prove NAND universal.',
      },
      {
        q: 'Converting the SOP circuit for $F = AB + CD$ to all-NAND yields how many gates, and of what kind?',
        options: ['Two ANDs and one OR', 'Three NANDs — two for the products, one combining them', 'Four NANDs', 'One NOR'],
        answer: 1,
        explanation: 'Each product term becomes one NAND (output complemented), and the combining OR becomes a NAND of those complemented products — De Morgan does the swap for free.',
      },
      {
        q: 'During bubble pushing, two inversion bubbles on the same internal wire:',
        options: ['Must be removed and replaced with an inverter', 'Cancel each other — the wire carries the uncomplemented signal', 'Double the signal', 'Indicate a design error'],
        answer: 1,
        explanation: 'Double complementation is identity: $x″ = x$. Cancelling bubble pairs is how the transformation keeps the truth table invariant while reshaping the gates.',
      },
      {
        q: 'An AND-OR-INVERT gate directly realizes:',
        options: ['Any product of sums', 'The complement of a sum of products: $(AB + CD + \\ldots)′$', 'Exclusive-OR', 'A flip-flop'],
        answer: 1,
        explanation: 'The AOI is ANDs feeding an internal NOR — one package, one level, the negated SOP — the exact shape of many enable and comparator signals.',
      },
    ],
  },
]
