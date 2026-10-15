import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (classic edition)
// Chapter 7: Registers and Counters (Sections 7.1 – 7.5)
// Master study content, written from canonical knowledge of the book.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const manoCh7Content: SectionContent[] = [
  // ------------------------------------------------------------------ 7.1
  {
    sectionId: 'mano-ch7-s1',
    readingTime: 8,
    intro: 'A register is a group of flip-flops sharing a clock — the unit in which a computer holds a number. Once flip-flops are grouped, three families of function appear almost for free: loading them in parallel, shifting their contents between adjacent stages, and (with a few select lines) choosing among hold, shift and load on each clock. That last, most general device — the universal shift register — is one of the most-used MSI parts in the book.',
    objectives: [
      'Describe a register as a group of flip-flops with common clock and load control',
      'Implement parallel load with feedback gating around each flip-flop',
      'Analyze shift-left and shift-right registers and their serial-parallel conversion roles',
      'Write the characteristic equation of a bidirectional register with mode control $s_1s_0$',
      'Explain the four operations of the universal shift register and trace it through mixed mode changes',
    ],
    concepts: [
      {
        term: 'Register',
        kind: 'definition',
        statement: 'A **register** is a group of flip-flops, one per bit, driven by a common clock so that all bits update simultaneously. An $n$-bit register with a load control either holds its contents or captures $n$ new data bits on each clock edge.',
        detail: 'The load path is the fundamental pattern of chapter 8’s register transfers: with a D flip-flop per stage, the input logic computes $D_i = (\\text{Load})\\,I_i + (\\text{Load}\')Q_i$ — new data when the load control is 1, recirculated old data when it is 0. No gates are needed if a flip-flop with an enable input is available; the MUX-style gating is then internal to the chip.',
      },
      {
        term: 'Parallel load',
        kind: 'method',
        statement: '**Parallel (broadside) load** transfers all $n$ input bits into the register in one clock period. It requires $n$ data lines plus one control line, in exchange for the fastest possible transfer — the standard word-wide style of the basic computer of chapter 8.',
        detail: 'Contrast with serial transfer through a shift register: one bit per clock over one wire. Parallel costs wires and pins; serial costs time ($n$ clocks per word). The multiplexers of chapter 5 and the common bus of chapter 8 exist precisely to time-share the expensive parallel paths.',
      },
      {
        term: 'Shift register',
        kind: 'definition',
        statement: 'A **shift register** moves its contents one stage per clock: a **shift right** transfers each bit into the next lower stage and brings a **serial input** into the top stage; a **shift left** is the mirror image. The bit shifted out of the end appears at the last flip-flop’s output (or is lost if not captured).',
        detail: 'With D flip-flops, a shift right is simply $D_i = Q_{i+1}$ for each stage — the wiring is the logic. Shift registers convert between serial and parallel form in both directions: shifting a parallel word out one bit per clock performs parallel-to-serial conversion; clocking serial bits in and reading all stages at once performs serial-to-parallel conversion.',
      },
      {
        term: 'Bidirectional register with mode control',
        kind: 'method',
        statement: 'Select lines $s_1s_0$ choose the per-clock operation of a mode-controlled register: with a 2-line code the four operations are hold, shift right with serial input, shift left with serial input, and parallel load. For the top stage $A$ of register $ABCD$: $$A(t+1) = s_1s_0\\,I_A + s_1s_0\'\\,B + s_1\'s_0\'\\,A + s_1\'s_0\\,\\text{(serial in)}.$$',
        detail: 'Every term is one mode: load ($s_1s_0 = 11$) takes $I_A$, shift left ($10$) takes the stage below, hold ($00$) recirculates $A$, and shift right ($01$) takes the right-shift serial input. Each other stage has the analogous equation; the whole register is four copies of a $4 \\times 1$ multiplexer pattern — MSI structure again.',
      },
      {
        term: 'Universal shift register',
        kind: 'definition',
        statement: 'The **universal shift register** integrates all four operations — hold, shift right, shift left, parallel load — with mode inputs $s_1s_0$ and serial inputs for both directions. The 74194-style MSI part implements exactly this function with four flip-flops and a $4 \\times 1$ MUX feeding each stage.',
        detail: 'Universality makes the part a complete serial-parallel subsystem: two such registers exchanging data build a serial data path, and a register that shifts $n$ times then loads forms the basis of serial arithmetic. The book’s design viewpoint: identify the MUX inside the part, and writing its characteristic equation becomes mechanical.',
      },
      {
        term: 'Why shift registers matter',
        kind: 'insight',
        statement: 'Shifting is multiplication and division by 2 for binary numbers, serial data transmission between distant units, and the seat of the timing sequences of Section 7.4. The shift operation is one of the three microoperation families of the register-transfer language in chapter 8.',
        detail: 'A left shift of an unsigned binary word doubles it (shifting in a 0); a right shift halves it, discarding the remainder bit. The circular variants (rotate) preserve all bits and appear in the basic computer’s CIR/CIL instructions for multiword shifts in chapter 8.',
      },
    ],
    examples: [
      {
        title: 'Tracing a register with mode control',
        problem: 'A 4-bit register $ABCD$ ($A$ = MSB) has mode lines $s_1s_0$ (00 hold, 01 shift right, 10 shift left, 11 parallel load) and serial inputs for both directions. Starting from an arbitrary state, execute: parallel load $I_AI_BI_CI_D = 1011$; then shift right with serial input 1; then shift right with serial input 0; then shift left with serial input 0.',
        steps: [
          { label: 'Step 1: Write the stage equations', text: 'Top stage: $A(t+1) = s_1s_0I_A + s_1s_0\'B + s_1\'s_0\'A + s_1\'s_0\\,\\text{SI}_R$. Stages $B$ and $C$ take the neighbor from above for the left-shift term and from below for the right-shift path; stage $D$’s left-shift source is the left serial input $\\text{SI}_L$.' },
          { label: 'Step 2: Load', text: 'With $s_1s_0 = 11$, every stage takes its parallel input: the register becomes $ABCD = 1011$ after the first clock.' },
          { label: 'Step 3: Shift right with SI = 1', text: 'With $s_1s_0 = 01$: $A \\leftarrow 1$, $B \\leftarrow A = 1$, $C \\leftarrow B = 0$, $D \\leftarrow C = 1$: register $= 1101$.' },
          { label: 'Step 4: Shift right with SI = 0', text: 'Again $s_1s_0 = 01$: $A \\leftarrow 0$, $B \\leftarrow 1$, $C \\leftarrow 1$, $D \\leftarrow 0$: register $= 0110$.' },
          { label: 'Step 5: Shift left with SI = 0', text: 'With $s_1s_0 = 10$: $A \\leftarrow B = 1$, $B \\leftarrow C = 1$, $C \\leftarrow D = 0$, $D \\leftarrow \\text{SI}_L = 0$: register $= 1100$.' },
          { label: 'Step 6: Interpret the trace', text: 'Each step obeyed exactly one term of the mode equation — the other three were disabled by the $s_1s_0$ code. The four clocks performed load, two right shifts (an effective divide-by-4 with zero fill on a 4-bit word), then a left shift (multiply-by-2).' },
        ],
        result: '$1011 \\to 1101 \\to 0110 \\to 1100$ across the four clocks — one register, four operations, all selected by two mode lines.',
      },
      {
        title: 'Serial-to-parallel conversion with a universal shift register',
        problem: 'An 8-bit word arrives serially, one bit per clock, on a single line. Show how a 4-bit universal shift register captures half the word, and determine which bit must be sent first so that the register ends up holding the correct bit order.',
        steps: [
          { label: 'Step 1: Set the mode', text: 'Hold the register in shift-right mode ($s_1s_0 = 01$) for the whole reception; the data line connects to the right-shift serial input.' },
          { label: 'Step 2: Shift in four bits', text: 'Feed the bits of the half-word in **LSB-first** order. Starting from $0000$ with bits $1, 1, 0, 1$ (which is the low nibble of $1011$): clock 1 gives $1000$, clock 2 gives $1100$, clock 3 gives $0110$, clock 4 gives $1011$.' },
          { label: 'Step 3: Check the order', text: 'The first bit shifted in travels furthest: after four clocks it sits in stage $D$ (the bottom), while the last bit sits in $A$. Sending the LSB first therefore lands the LSB in the LSB stage — the register reads $1011$ with correct positional weights.' },
          { label: 'Step 4: Note the trap', text: 'Sending the MSB first instead would load the register with the nibble reversed ($1101$ after four clocks of $1,0,1,1$). Serial protocols fix this convention exactly once — the designer must know whether the wire is LSB-first or MSB-first.' },
          { label: 'Step 5: Parallel readout', text: 'After the fourth clock the four stages are read simultaneously as the parallel word: the register has converted four serial bit periods into one 4-bit parallel transfer, and a second register can be receiving the high nibble in the meantime.' },
        ],
        result: 'Four right shifts convert four serial bits to a parallel word; bit order (LSB first) is a real design decision, and the same hardware run in reverse (load, then shift out $n$ clocks) performs parallel-to-serial conversion.',
      },
    ],
    keyTakeaways: [
      'A register is flip-flops plus a common clock; the load path computes $D_i = \\text{Load}\\,I_i + \\text{Load}\'Q_i$ per stage.',
      'Shift right is the wiring $D_i = Q_{i+1}$; shift left is its mirror; each end takes a serial input.',
      'Mode lines $s_1s_0$ select hold, shift right, shift left or parallel load — one $4 \\times 1$ MUX pattern per stage.',
      'The universal shift register (74194-style) is the complete four-operation part; its characteristic equation has one term per mode.',
      'Shifting converts serial to parallel and back; bit order is a convention that must be pinned down before hardware is drawn.',
      'Left shift multiplies a binary number by 2, right shift divides by 2 — the arithmetic meaning behind chapter 8’s shift microoperations.',
    ],
    quiz: [
      {
        q: 'In a mode-controlled register with $s_1s_0 = 01$ (shift right, serial input 1) and present contents $Q_AQ_BQ_CQ_D = 0110$, the next contents are:',
        options: [`$1100$`, '$1011$ with a 0 lost', `$1101$`, `$0111$`],
        answer: 2,
        explanation: 'Shift right brings the serial input into the top: $A \\leftarrow 1$, $B \\leftarrow 0$, $C \\leftarrow 1$, $D \\leftarrow 1$ — giving $1101$.',
      },
      {
        q: 'The four operations of a universal shift register are selected by:',
        options: ['One serial input line and a clock', 'Two mode lines $s_1s_0$ choosing hold, shift right, shift left, parallel load', 'Four dedicated clock inputs', 'An encoder on the parallel outputs'],
        answer: 1,
        explanation: 'Two mode lines give four codes, exactly the operation count of the universal part — hold (00), shift right (01), shift left (10), load (11).',
      },
      {
        q: 'A 4-bit register starts at 0000 and receives the serial stream 1, 0, 1, 1 (in arrival order) by shifting right. After four clocks it contains:',
        options: [`$1011$`, `$1101$`, `$0110$`, `$0011$`],
        answer: 1,
        explanation: 'Successive states are 1000, 0100, 1010, 1101: the first-arriving 1 has traveled to the bottom, so the register holds the reversed order $1101$.',
      },
      {
        q: 'Why does parallel load need $n$ data lines while serial transfer needs one?',
        options: ['Parallel is more reliable', 'Parallel moves all $n$ bits in one clock at the cost of $n$ wires; serial moves one bit per clock over one wire', 'Serial cannot preserve bit order', 'Parallel requires no clock'],
        answer: 1,
        explanation: 'The wire-versus-time trade: $n$ bits in one period (parallel) versus $n$ periods over one wire (serial) — the fundamental cost structure the bus and MUX circuits of chapter 8 manage.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.2
  {
    sectionId: 'mano-ch7-s2',
    readingTime: 8,
    intro: 'The cheapest counter in existence uses no common clock at all: each flip-flop is clocked by the output of the one below it, so a count ripples up the chain. Ripple counters are wonderfully small — every stage is a bare toggle flip-flop — but the ripple is also their defining flaw: the count is momentarily wrong while the change propagates, and the total delay grows linearly with the number of bits.',
    objectives: [
      'Explain the structure of a ripple counter: one external clock, each stage clocked by the stage below',
      'Trace a 3-bit ripple counter through a full count cycle, showing when each stage changes',
      'Compute total settling delay and maximum input frequency from the per-stage propagation delay',
      'Use counter stages as frequency dividers and compute the divided frequencies',
      'Analyze decoding glitches and build a BCD ripple decade counter',
    ],
    concepts: [
      {
        term: 'Ripple counter structure',
        kind: 'definition',
        statement: 'A **ripple (asynchronous) counter** connects the output of each flip-flop to the clock input of the next: only the first stage sees the external clock. With every stage in toggle mode ($J = K = 1$ or $T = 1$) and negative-edge-triggered flip-flops, an $n$-stage chain counts through all $2^{n}$ binary states — a natural binary up-counter.',
        detail: 'Stage 0 toggles on every falling external clock edge; stage 1 toggles when $Q_0$ falls (that is, on every second count); stage 2 toggles when $Q_1$ falls — so the counter obeys the same $T_i = Q_0Q_1\\cdots Q_{i-1}$ law as the synchronous version, but the law is enforced by the clocking topology instead of by gates. The distinction matters: nothing in the ripple counter is simultaneous.',
      },
      {
        term: 'Propagation delay accumulation',
        kind: 'insight',
        statement: 'When several stages must change, they do so **in sequence**, each after one flip-flop propagation delay $t_{pd}$. An $n$-bit ripple counter’s worst-case settling time is $n \\cdot t_{pd}$ (on the $111 \\to 000$ wrap), and transient wrong counts exist between the individual stage changes.',
        detail: 'During the $011 \\to 100$ transition, the machine momentarily reads $010$ (after $Q_0$ falls) and then $000$ (after $Q_1$ falls) before settling at $100$. Any logic watching the outputs during these windows sees states that were never counted through. The maximum reliable input frequency is $f \\leq 1/(n\\,t_{pd})$ — with ten stages of 50 ns flip-flops, barely 2 MHz.',
      },
      {
        term: 'Frequency division',
        kind: 'law',
        statement: 'Each ripple stage divides its input frequency by 2: $Q_0$ runs at $f/2$, $Q_1$ at $f/4$, and stage $k$ at $f/2^{k+1}$. An $n$-stage ripple counter is thus an $n$-bit **scaler chain** delivering $f/2^{n}$ at its top output.',
        detail: 'Frequency division is often more important than counting: a 1 MHz oscillator followed by a chain of six stages yields every power-of-two submultiple down to 15.625 kHz, each available as a distinct output pin. Cascade a BCD decade (Section 7.2’s last example) after binary stages to obtain decade division.',
      },
      {
        term: 'Decoding glitches',
        kind: 'insight',
        statement: 'Combinational decoders watching a ripple counter can produce **narrow false pulses (glitches)** during multi-stage transitions, because the decoded term is momentarily true for an intermediate state that the counter merely passes through.',
        detail: 'Decoding “count = 0” with the AND of all complemented outputs fires falsely during the $011 \\to 100$ transition: after $Q_1$ falls but before $Q_2$ rises, all outputs are momentarily 0. The same spike appears on every decode line whose state is entered transiently. Remedies: gate the decoder with a strobe delayed past the settling time, or use a synchronous counter whose stages change together.',
      },
      {
        term: 'BCD ripple decade counter',
        kind: 'method',
        statement: 'A BCD ripple counter adds one NAND gate that decodes count ten ($Q_8Q_1$) and drives the **asynchronous clear** inputs of all flip-flops: the counter reaches 1010 for a few gate delays, then snaps to 0000 — producing the decade sequence 0 through 9.',
        detail: 'The momentary 1010 is harmless to the outputs’ average behavior but is a real glitch; cascading decades still works because the next decade is clocked by the falling edge of $Q_8$ of the previous one (which occurs once per ten input clocks). This asynchronous-clear method is the cheapest decade scaler in existence — and the reason its decode glitch story must be understood before using the decoded outputs as timing signals.',
      },
    ],
    examples: [
      {
        title: 'Timing diagram of a 3-bit ripple counter',
        problem: 'Draw (in words) the timing behavior of a 3-bit negative-edge ripple counter with toggle flip-flops over a full count cycle, marking every stage change and its delay.',
        steps: [
          { label: 'Step 1: Clock edge 1', text: 'The falling external edge toggles $Q_0$ from 0 to 1 after $t_{pd}$. $Q_0$ rising does not clock $Q_1$ (it triggers on falling edges), so the count reads $001$.' },
          { label: 'Step 2: Clock edge 2', text: '$Q_0$ falls to 0 after $t_{pd}$. This falling edge clocks stage 1: $Q_1$ rises after another $t_{pd}$. $Q_1$ rising does not clock $Q_2$. Count: $010$ — total delay 2$t_{pd}$.' },
          { label: 'Step 3: Clock edges 3 and 4', text: 'Edge 3: only $Q_0$ rises: $011$. Edge 4 is the worst case so far: $Q_0$ falls (1 $t_{pd}$), its falling edge drops $Q_1$ (2 $t_{pd}$), and that falling edge raises $Q_2$ (3 $t_{pd}$) — the count passes transiently through $010$ and $000$ before settling at $100$.' },
          { label: 'Step 4: Clock edges 5 through 7', text: 'Each changes only one or two stages: $101$ (edge 5), $110$ (edge 6, a two-stage change), $111$ (edge 7).' },
          { label: 'Step 5: Clock edge 8 — the wrap', text: 'All three stages toggle in cascade: $Q_0$ at $1\\,t_{pd}$, $Q_1$ at $2\\,t_{pd}$, $Q_2$ at $3\\,t_{pd}$. The display passes through $110$, $100$ and $000$ en route from $111$ to $000$ — the counter is officially wrong for two flip-flop delays.' },
          { label: 'Step 6: Summarize the pattern', text: 'Stage $k$ changes only when all lower stages fall from 1 to 0 together — exactly every $2^{k+1}$ input edges — which is the frequency-division law and the binary count law in one picture.' },
        ],
        result: 'Eight edges traverse 000 → 111 → 000; worst-case settling is $3\\,t_{pd}$ (the wrap), intermediate false states last one $t_{pd}$ each, and every stage’s frequency is half of the stage below it.',
      },
      {
        title: 'Speed and frequency division of a ripple counter',
        problem: 'A 3-bit ripple counter uses flip-flops with propagation delay 50 ns each. (a) What is the worst-case settling time and the maximum reliable input frequency? (b) If driven at 2 MHz, what frequencies appear at each output?',
        steps: [
          { label: 'Step 1: Worst-case transition', text: 'The wrap $111 \\to 000$ changes all three stages in sequence: total settle $= 3 \\times 50 = 150$ ns. The next input edge must not arrive before the count is valid.' },
          { label: 'Step 2: Maximum input frequency', text: '$f_{\\max} = 1/(3 \\times 50\\,\\text{ns}) = 1/150\\,\\text{ns} \\approx 6.67$ MHz. Above this, the top stage lags the true count — and worse, the stage boundaries themselves become ambiguous.' },
          { label: 'Step 3: Divide the applied clock', text: 'At $f = 2$ MHz (period 500 ns, comfortably longer than 150 ns): $Q_0 = 2/2 = 1$ MHz, $Q_1 = 2/4 = 500$ kHz, $Q_2 = 2/8 = 250$ kHz.' },
          { label: 'Step 4: Generalize', text: 'An $n$-stage chain gives $f/2^{n}$ at the top and every intermediate power of two along the way; its speed ceiling falls as $1/n$ — ten 50 ns stages cap at 2 MHz, which is why long high-speed counters go synchronous (Section 7.3).' },
        ],
        result: 'Settle $= 150$ ns, $f_{\\max} \\approx 6.67$ MHz; at 2 MHz the outputs run at 1 MHz, 500 kHz and 250 kHz — one chip, three octave-spaced clocks.',
      },
      {
        title: 'A BCD ripple decade counter',
        problem: 'Convert a 4-bit ripple counter into a decade (BCD) counter using one NAND gate, and explain the glitch and the cascade connection.',
        steps: [
          { label: 'Step 1: Wire the binary ripple counter', text: 'Four toggle stages clocked in ripple: counts run 0000 through 1111 in the unmodified chain.' },
          { label: 'Step 2: Detect the forbidden count', text: 'Count ten is 1010 — $Q_8 = 1$ and $Q_1 = 1$ with $Q_4 = Q_2 = 0$. A single NAND gate on $Q_8$ and $Q_1$ goes low exactly at count ten.' },
          { label: 'Step 3: Clear asynchronously', text: 'Connect the NAND output to all four **direct clear** inputs (active-low). At count ten the stages clear within one gate delay: the counter dwells in 1010 for a few nanoseconds, then sits at 0000 awaiting count one.' },
          { label: 'Step 4: Quantify the glitch', text: 'Outputs read a spurious “ten” for roughly one NAND delay plus one clear delay — invisible to slow displays, but any fast decoder watching the outputs must be strobed after the settle, or it will see the phantom state.' },
          { label: 'Step 5: Cascade decades', text: 'Clock the next decade from this one’s $Q_8$ output (negative edge): $Q_8$ falls exactly once per ten input clocks, at the 9 → 0 wrap, so each decade divides its input by ten — a divide-by-100 chain from two decades.' },
        ],
        result: 'One NAND gate turns a 4-bit binary ripple counter into a decade scaler: 0-9 count, momentary 1010 glitch, and a clean $f/10$ (with $Q_8$ low 80% of the cycle) at the top stage for cascading.',
      },
    ],
    keyTakeaways: [
      'A ripple counter clocks each stage from the output of the stage below; all stages are toggle flip-flops and no common clock exists.',
      'Worst-case settling time is $n \\cdot t_{pd}$ for $n$ stages — transient wrong states are unavoidable.',
      'The reliable input frequency ceiling is $f \\leq 1/(n\\,t_{pd})$; speed degrades linearly with counter length.',
      'Each stage halves the frequency: outputs offer $f/2, f/4, \\ldots, f/2^{n}$ simultaneously.',
      'Decoders on ripple outputs glitch during multi-stage transitions; strobe after settling or go synchronous.',
      'A NAND decoding $Q_8Q_1 = 10$ driving asynchronous clears makes a decade ripple counter with one gate; decades cascade on the falling $Q_8$ of the previous stage.',
    ],
    quiz: [
      {
        q: 'In a ripple counter, what clocks the second flip-flop?',
        options: ['The common clock line', 'The output of the first flip-flop', 'The complement of the external clock', 'A NAND of all higher outputs'],
        answer: 1,
        explanation: 'Only the first stage sees the external clock; every later stage is clocked by the falling output of the stage below it — hence “ripple”.',
      },
      {
        q: 'A 4-bit ripple counter uses flip-flops with $t_{pd} = 25$ ns. Its worst-case settling time and maximum safe input frequency are approximately:',
        options: ['25 ns and 40 MHz', '100 ns and 10 MHz', '50 ns and 20 MHz', '100 ns and 40 MHz'],
        answer: 1,
        explanation: 'Worst case (the 1111 → 0000 wrap) chains all four delays: $4 \\times 25 = 100$ ns, so inputs may arrive at most every 100 ns: $f_{\\max} = 10$ MHz.',
      },
      {
        q: 'During the ripple counter’s transition from count 3 (011) to count 4 (100), which decode line falsely fires and why?',
        options: ['The “count 4” line, because $Q_2$ rises late', 'The “count 0” line, because the intermediate state 000 exists after $Q_1$ falls but before $Q_2$ rises', 'The “count 7” line, because all outputs are momentarily high', 'No line can glitch, since only one stage changes'],
        answer: 1,
        explanation: 'The ripples run $Q_0$ first, then $Q_1$, then $Q_2$: after $Q_1$ falls the outputs read 000 for one $t_{pd}$, and the zero decoder fires on this phantom state.',
      },
      {
        q: 'A BCD ripple decade counter clears itself with a NAND gate decoding:',
        options: ['$Q_4Q_2Q_1Q_0 = 1111$ (count 15)', '$Q_8Q_1 = 10$ (count ten, 1010)', '$Q_8Q_4 = 12$ (count twelve)', 'Any odd count'],
        answer: 1,
        explanation: 'The first code past nine is 1010, decoded by $Q_8Q_1$; the NAND’s low output drives the asynchronous clears so the count snaps to 0000.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.3
  {
    sectionId: 'mano-ch7-s3',
    readingTime: 9,
    intro: 'If every flip-flop shares the clock and the “should I toggle?” decision is made by combinational logic watching the present state, all stages change together and the count is never transiently wrong. Synchronous counters cost a few gates over ripple versions but remove both the delay accumulation and the decoding glitches — and with carry-lookahead structure they scale to any width at constant gate delay, the same trick the chapter 4 adder used.',
    objectives: [
      'Contrast synchronous counter structure with ripple structure and state the speed consequence',
      'Apply the T/JK counter design law $T_i = Q_0Q_1\\cdots Q_{i-1}$ to any width binary counter',
      'Design a synchronous BCD counter with its characteristic asymmetric gates and verify the 9 → 0 wrap',
      'Compare serial (ripple) carry and parallel (lookahead) carry between counter stages with delay budgets',
      'Verify self-correction from unused states',
    ],
    concepts: [
      {
        term: 'Synchronous counter structure',
        kind: 'definition',
        statement: 'In a **synchronous counter** all flip-flops receive the common clock, and each stage’s toggle decision is computed by gates from the present state: the count settles after one flip-flop delay plus (at most) the carry-logic delay, independent of how many stages change together.',
        detail: 'The design procedure is the general sequential design procedure of Section 6.4 specialized to counting: the state table is the count sequence, the excitation table gives each stage’s $J$/$K$ or $T$ requirements, and the K-maps deliver the toggle equations. Because the whole state changes on one edge, decoded outputs are glitch-free (up to ordinary single-gate races) and the maximum frequency no longer falls as $1/n$.',
      },
      {
        term: 'Binary counter toggle law',
        kind: 'law',
        statement: 'For a synchronous binary up-counter, stage $i$ toggles exactly when every lower stage is 1: $$T_i = Q_0\\,Q_1\\cdots Q_{i-1}$$ (and $T_0 = 1$). With JK flip-flops, $J_i = K_i = Q_0Q_1\\cdots Q_{i-1}$.',
        detail: 'This is the same law the ripple counter enforced by clocking topology — here it appears as explicit AND gates. Each equation needs one AND gate whose width grows with the stage index; that widening is the structural cost that carry-lookahead reorganizes.',
      },
      {
        term: 'Serial versus parallel carry',
        kind: 'method',
        statement: 'With a count-enable $E$, the **serial (ripple) carry** chains the enables: $C_1 = EQ_0$, $C_2 = C_1Q_1$, $C_3 = C_2Q_2$ — each stage’s enable arrives one AND delay after the previous stage’s, so $n$ stages accumulate $n$ gate delays. The **parallel (lookahead) carry** computes each enable directly: $C_i = E\\,Q_0Q_1\\cdots Q_{i-1}$ — a wide AND gate, but only one gate delay deep.',
        detail: 'This is chapter 4’s look-ahead adder idea transplanted to counters: instead of waiting for the carry to ripple through the stages, precompute each position’s toggle permission from the present state alone. Wide gates cost pins and fan-in, so commercial parts compromise: 4-bit blocks with internal lookahead, plus lookahead **between** blocks — exactly the structure of the look-ahead carry adder with group generate/propagate terms.',
      },
      {
        term: 'BCD synchronous counter',
        kind: 'method',
        statement: 'The synchronous BCD counter (states 0000–1001, flip-flops $Q_8Q_4Q_2Q_1$) needs the binary toggle law for the low stages and two asymmetric gates for the wrap: $$J_1 = K_1 = 1,\\quad J_2 = Q_1Q_8\',\\ K_2 = Q_1,\\quad J_4 = K_4 = Q_1Q_2,\\quad J_8 = Q_1Q_2Q_4,\\ K_8 = Q_1,$$ with carry out $= Q_8Q_1$.',
        detail: 'The $Q_8\'$ in $J_2$ prevents bit 2 from turning on at count 9 (the wrap must go to 0000, not 1010), and the split $J_8$/$K_8$ (set on $Q_1Q_2Q_4$, clear on $Q_1$ alone) lets bit 8 both enter and leave with single-gate logic. Every gate’s inputs come from the present state, so all decisions are simultaneous with the clock — no ripple, no decade glitch.',
      },
      {
        term: 'Unused-state recovery (lockout check)',
        kind: 'insight',
        statement: 'A modulo-$N$ counter with $N < 2^{n}$ must be checked for **lockout**: starting in any unused code, the synthesized equations must eventually lead back into the count sequence. The BCD counter above recovers — for example 1010 → 1011 → 0100, and 0100 is inside the decade.',
        detail: 'The check is mechanical: evaluate the excitation equations for each unused code. If some unused cycle were closed under the equations, the counter could power up into it and never count correctly; the fix is to force unused-state next-states into the main sequence rather than leaving them as K-map don’t-cares.',
      },
    ],
    examples: [
      {
        title: 'Synchronous BCD counter: structure and verification',
        problem: 'Verify the synchronous BCD counter with $J_1 = K_1 = 1$, $J_2 = Q_1Q_8\'$, $K_2 = Q_1$, $J_4 = K_4 = Q_1Q_2$, $J_8 = Q_1Q_2Q_4$, $K_8 = Q_1$ — checking the two critical transitions and the unused states.',
        steps: [
          { label: 'Step 1: The ordinary counts', text: 'From 0111 (seven): $J_8 = 1\\cdot1\\cdot1 = 1$ sets $Q_8$ while $K_2 = K_4 = 1$ clear the low bits: next state 1000. From 1000: only $J_1 = 1$ acts: 1001. The chain behaves as a plain binary counter while the decade bit is 0.' },
          { label: 'Step 2: The wrap at nine', text: 'From 1001: $K_8 = Q_1 = 1$ clears the decade bit and $J_1 = K_1 = 1$ clears $Q_1$; crucially $J_2 = Q_1Q_8\' = 1 \\cdot 0 = 0$, so $Q_2$ stays 0 (a plain binary machine would have gone to 1010). Next state: 0000 — the wrap is correct.' },
          { label: 'Step 3: The timing payoff', text: 'Both $Q_8$ and $Q_1$ change on the same clock edge, with no intermediate state: the ripple decade’s transient 1010 never exists, so decoded outputs can be used as timing signals without strobing.' },
          { label: 'Step 4: Unused-state check', text: 'From 1010: $J_1 = 1$ sets $Q_1$: 1011. From 1011: $K_8 = Q_1 = 1$ clears $Q_8$, $K_2 = Q_1 = 1$ clears $Q_2$, $J_4 = Q_1Q_2 = 1$ sets $Q_4$, and $Q_1$ clears: next state 0100 — inside the decade. All six unused codes similarly funnel back; there is no lockout.' },
          { label: 'Step 5: The carry out', text: 'Decode the last state with one AND gate on $Q_8Q_1$ (count nine): this signal is the decade’s output to the next decade’s enable — the synchronous counterpart of the ripple counter’s cascaded clock.' },
        ],
        result: 'All ten transitions verified, the 9→0 wrap is glitch-free, unused states recover within two clocks, and $Q_8Q_1$ is the decade carry.',
      },
      {
        title: 'Carry-lookahead between counter stages',
        problem: 'A synchronous binary counter with count-enable $E$ is built in 4-bit blocks. Compare the worst-case enable-arrival delay for serial ripple carry versus parallel lookahead carry across four blocks, with each AND gate contributing 10 ns.',
        steps: [
          { label: 'Step 1: Define the block signals', text: 'Within each block the toggle law holds; between blocks, block $j$ may count only when enabled and when every earlier block is at all-ones. Let $P_j$ (block “propagate-ready”) = the AND of all four $Q$ outputs of block $j$ — the signal that block $j$ is about to roll over.' },
          { label: 'Step 2: Serial carry chain', text: 'Ripple carry sets $E_1 = EP_0$, $E_2 = E_1P_1$, $E_3 = E_2P_2$: the enable for the last block is the output of a three-deep AND chain. With 10 ns per gate it arrives $30$ ns after $E$ — and this delay is added to every clock period budget.' },
          { label: 'Step 3: Parallel lookahead carry', text: 'Lookahead computes each enable directly from the present state: $E_1 = EP_0$, $E_2 = EP_0P_1$, $E_3 = EP_0P_1P_2$. The $P_j$ terms themselves are available simultaneously (each is a 4-input AND of its own block’s flip-flops), so every enable appears after essentially **one** 10 ns gate level beyond the $P$ signals.' },
          { label: 'Step 4: Budget the clock period', text: 'With flip-flop delay 40 ns and setup 20 ns, the serial-carry counter needs $T \\geq 40 + 30 + 10 + 20 = 100$ ns; the lookahead version needs $T \\geq 40 + 10 + 10 + 20 = 80$ ns — a 25% faster clock, and the gap widens with every additional block.' },
          { label: 'Step 5: Note the kinship', text: 'The pattern $C_{i+1} = G_i + P_iC_i$ from the look-ahead adder of chapter 4 is exactly the serial carry equation in disguise, with propagate terms $P_j$ playing the $P_i$ role — the same restructuring idea, reused one chapter later.' },
        ],
        result: 'Serial carry: 30 ns of gate delay for four blocks (growing linearly); lookahead carry: one 10 ns level regardless of block count — counters scale to any width at constant delay, exactly as look-ahead adders do.',
      },
    ],
    keyTakeaways: [
      'Synchronous counters share one clock; toggle decisions are combinational functions of the present state.',
      'Settling delay is one flip-flop delay plus carry-logic delay — independent of counter length under lookahead carry.',
      'The toggle law $T_i = Q_0Q_1\\cdots Q_{i-1}$ generates a binary up-counter of any width.',
      'The synchronous BCD counter wraps 9 → 0 with $J_2 = Q_1Q_8\'$ and $K_8 = Q_1$ doing the decade-specific work; carry out is $Q_8Q_1$.',
      'Serial carry chains enable signals through one AND gate per stage; parallel (lookahead) carry computes each enable in one level from the state.',
      'Unused-state analysis must confirm no lockout: every unused code should funnel back into the count sequence.',
    ],
    quiz: [
      {
        q: 'What primarily limits the maximum clock frequency of a long synchronous binary counter with serial carry?',
        options: ['The flip-flop propagation delays alone', 'The serial carry chain — each stage adds one gate delay to the next stage’s enable', 'The number of output decode gates', 'The power supply current'],
        answer: 1,
        explanation: 'Within a stage the decision is one flip-flop delay, but with ripple carry the $i$-th stage’s enable waits for $i$ chained AND gates — the counter’s speed degrades linearly like a ripple counter’s.',
      },
      {
        q: 'In the synchronous BCD counter, why does $J_2$ include the factor $Q_8\'$?',
        options: ['To make $Q_2$ toggle faster', 'So that at count nine, with $Q_1 = 1$ and $Q_8 = 1$, bit 2 stays 0 and the counter wraps to 0000 instead of reaching 1010', 'Because $Q_2$ and $Q_8$ must always differ', 'To decode the carry out'],
        answer: 1,
        explanation: 'The binary toggle law would set $Q_2$ at the 9 → next transition; masking it with $Q_8\'$ is the decade correction that makes the sequence return to zero.',
      },
      {
        q: 'Parallel (lookahead) carry in a counter is characterized by:',
        options: ['Each enable computed directly as the AND of the current enable and all lower blocks’ ready signals — one gate level deep', 'Enables chained stage to stage', 'Using the flip-flops’ direct clear inputs', 'Requiring no clock at all'],
        answer: 0,
        explanation: 'Lookahead trades wide AND gates for depth: every stage’s toggle permission comes straight from the present state, so the total carry delay stays constant as the counter grows.',
      },
      {
        q: 'A synchronous counter powers up in an unused state and never reaches the intended count sequence. This failure is called:',
        options: ['Metastability', 'Lockout', 'Ripple-through', 'Transparent latching'],
        answer: 1,
        explanation: 'Lockout: the unused states form a closed cycle under the synthesized equations. The design check — evaluate the equations on every unused code — prevents it.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.4
  {
    sectionId: 'mano-ch7-s4',
    readingTime: 8,
    intro: 'Counters do more than count events: sequenced properly, they manufacture time. A control unit needs a repeating ladder of timing signals — $T_0$, $T_1$, …, one per clock — to say “do this now, that next,” and a whole-word interval for serial operations. Ring counters, switch-tail (Johnson) counters and modulo-$N$ counters are the three standard generators, each trading flip-flops against decode gates differently.',
    objectives: [
      'Generate timing signal sequences $T_0, T_1, \\ldots$ with a ring counter or a switch-tail counter',
      'Decode Johnson counter states with two-input AND gates',
      'Design a modulo-$N$ counter with T flip-flops for arbitrary $N$, including the unused-state check',
      'Produce a word-time control interval for serial operations and compare implementation costs',
    ],
    concepts: [
      {
        term: 'Timing signals',
        kind: 'definition',
        statement: 'A set of **timing signals** $T_0, T_1, \\ldots, T_{k-1}$ is a one-hot sequence recurring every $k$ clocks: exactly one signal is high in each period. The basic computer of chapter 8 gates every microoperation with such signals ($T_0$: fetch address, $T_1$: fetch instruction, $T_2$: decode — and so on).',
        detail: 'Timing signals are the state assignment made visible: any counter plus a decoder produces them, but dedicated shift-register structures produce them with fewer gates or fewer flip-flops depending on the choice below. The period $k$ is chosen to match the longest operation to be sequenced.',
      },
      {
        term: 'Ring counter',
        kind: 'method',
        statement: 'A **ring counter** is a shift register whose last output feeds its serial input, circulating a single 1. With $k$ flip-flops it produces $k$ states — $k$ timing signals — with **no decoding gates at all**: each flip-flop output is directly a $T_i$.',
        detail: 'The circulating one is initialized through the direct set input of stage 0 (and clears of the rest). The cost is flip-flop-inefficiency: $k$ states from $k$ flip-flops versus the $\\lceil\\log_2 k\\rceil$ a binary counter needs. For $k = 8$, the ring uses 8 flip-flops and zero decode gates — maximum simplicity, minimum density.',
      },
      {
        term: 'Switch-tail (Johnson) counter',
        kind: 'method',
        statement: 'A **switch-tail counter** circulates the complement of the last stage: shift register with $Q_{n-1}\'$ fed back to the serial input. It passes through $2n$ states (twice a ring counter’s yield), and every state is uniquely decoded by **one two-input AND gate** of an adjacent flip-flop pair.',
        detail: 'The 4-bit sequence is 0000 → 1000 → 1100 → 1110 → 1111 → 0111 → 0011 → 0001 → (repeat). Decodes: the first state is $Q_3\'Q_0\'$, the second $Q_3Q_2\'$, the third $Q_2Q_1\'$, the all-ones state $Q_3Q_0$, and so on — every state is a boundary between a run of 1s and a run of 0s, and that boundary is visible in exactly one adjacent pair.',
      },
      {
        term: 'Modulo-N counter',
        kind: 'method',
        statement: 'A **modulo-$N$ counter** counts $0, 1, \\ldots, N-1$ and returns to 0, using $n = \\lceil \\log_2 N \\rceil$ flip-flops and $N - 2^{n}$ unused states, which serve as K-map don’t-cares. Timing signals come from an $n$-to-$2^n$ decoder on the state bits.',
        detail: 'This is the general design procedure of Section 6.4 applied to a counting sequence; the interesting engineering is the wrap logic and the lockout check. Cost profile: minimum flip-flops, $n$-wide decode gates — the opposite corner of the ring counter.',
      },
      {
        term: 'Word-time generation',
        kind: 'method',
        statement: 'A **word-time** is the interval spanning one full pass of the bit positions of a serial word: $n$ clock periods for an $n$-bit word. It is generated by an $n$-state timing chain (ring, Johnson or mod-$N$) whose first and last timing signals mark the interval boundaries.',
        detail: 'Serial adders, multipliers and the I/O of the basic computer need exactly this envelope signal to know when a word transfer has completed. The OR of all $n$ timing signals gives the word-time waveform directly; alternatively, a mod-$n$ counter with an outer flip-flop toggled at the count reset achieves the same thing for very long words.',
      },
    ],
    examples: [
      {
        title: 'A mod-6 counter with T flip-flops',
        problem: 'Design a synchronous modulo-6 counter (states $Q_2Q_1Q_0$ counting 000 → 101 → 000) using T flip-flops, and verify recovery from the unused codes.',
        steps: [
          { label: 'Step 1: State table', text: 'The six transitions: 000→001, 001→010, 010→011, 011→100, 100→101, 101→000. States 110 and 111 are don’t-cares in the excitation maps.' },
          { label: 'Step 2: Excitation requirements', text: 'Rule: $T = 1$ wherever the bit must change. $Q_0$ changes in every transition: $T_0 = 1$. $Q_1$ changes only at 001→010 (0→1) and 011→100 (1→0): $T_1 = 1$ at states 001 and 011. $Q_2$ changes at 011→100 and 101→000: $T_2 = 1$ at states 011 and 101.' },
          { label: 'Step 3: K-maps with the two don’t-cares', text: 'For $T_1$ (ones at 001, 011; dcs at 110, 111): the groups give $T_1 = Q_0(Q_1 + Q_2\')$. For $T_2$ (ones at 011, 101; dcs at 110, 111): the groups give $T_2 = Q_0(Q_1 + Q_2)$.' },
          { label: 'Step 4: Verify the sequence', text: 'State 000: $T = (1, 0, 0)$ → 001. State 001: $T_1 = 1(0+1) = 1$ → 010. State 011: $T_1 = 1(1+1) = 1$, $T_2 = 1(1+0) = 1$ → 100. State 101: $T_2 = 1(0+1) = 1$, $T_1 = 1(0+0) = 0$ → 000. All six transitions correct.' },
          { label: 'Step 5: Check lockout', text: 'From unused state 110: $T_0 = 1$, others 0 → 111. From 111: $T = (1, 1, 1)$ → 000 — inside the cycle. A power-up in either unused code re-enters the count within two clocks: no lockout.' },
          { label: 'Step 6: Derive the timing signals', text: 'Six 3-input decode gates on the state bits give $T_0 \\ldots T_5$; the OR of all six is the 6-clock word-time envelope for 6-bit serial operations.' },
        ],
        result: '$T_0 = 1$, $T_1 = Q_0(Q_1 + Q_2\')$, $T_2 = Q_0(Q_1 + Q_2)$ — three flip-flops, three gates; both unused states funnel back into the cycle.',
      },
      {
        title: 'Word-time with a switch-tail counter',
        problem: 'Generate eight timing signals $T_0 \\ldots T_7$ and the 8-bit word-time envelope for a serial subsystem, using a 4-bit switch-tail counter, and compare the cost with a ring counter and a binary counter.',
        steps: [
          { label: 'Step 1: Build the switch-tail', text: 'Four D flip-flops in a shift register with the complement of the last stage fed back: $D_0 = Q_3\'$, $D_i = Q_{i-1}$. Initialize to 0000 through the direct inputs.' },
          { label: 'Step 2: Write the state sequence', text: '0000 → 1000 → 1100 → 1110 → 1111 → 0111 → 0011 → 0001 → back to 0000: eight states from four flip-flops — twice the ring counter’s yield.' },
          { label: 'Step 3: Decode with two-input gates', text: 'Each state is the unique boundary between the leading run of 1s and the trailing run of 0s. $T_0 = Q_3\'Q_0\'$ (all clear), $T_1 = Q_3Q_2\'$, $T_2 = Q_2Q_1\'$, $T_3 = Q_1Q_0\'$, $T_4 = Q_3Q_0$ (all set), $T_5 = Q_3\'Q_2$, $T_6 = Q_2\'Q_1$, $T_7 = Q_1\'Q_0$ — eight 2-input AND gates, no wider logic.' },
          { label: 'Step 4: Form the word-time envelope', text: 'The word-time signal is the OR of the eight timing signals (one 8-input gate): high for the full eight-clock span, one period per serial bit position. Its falling edge marks “word complete” for the handshake logic.' },
          { label: 'Step 5: Compare implementations', text: 'Ring counter: 8 flip-flops, zero decode gates. Switch-tail: 4 flip-flops, eight 2-input gates. Binary mod-8: 3 flip-flops, an 8-output 3×8 decoder (gates of 3 inputs). All three produce the same eight timing signals — the choice is where the hardware budget is spent.' },
        ],
        result: 'A 4-bit switch-tail counter plus eight 2-input AND gates yields $T_0 \\ldots T_7$ and the word-time envelope; flip-flop count and gate count can be traded freely among the three structures.',
      },
    ],
    keyTakeaways: [
      'Timing signals are one-hot-per-clock sequences $T_0, T_1, \\ldots$; chapter 8 gates every microoperation on them.',
      'A ring counter gives $k$ states from $k$ flip-flops with no decoding gates.',
      'A switch-tail (Johnson) counter gives $2n$ states from $n$ flip-flops, each decoded by one two-input AND gate.',
      'A modulo-$N$ counter uses the fewest flip-flops ($\\lceil\\log_2 N\\rceil$) and a decoder for the signals.',
      'Design of mod-$N$ counters follows Section 6.4’s procedure; the lockout check on unused states is mandatory.',
      'The word-time envelope — the OR of all timing signals — spans $n$ clock periods and frames serial word transfers.',
    ],
    quiz: [
      {
        q: 'How many distinct states does a 5-bit switch-tail (Johnson) counter cycle through, and with what decode gate complexity?',
        options: ['32 states, decoded with 5-input gates', '10 states, each decoded with one 2-input AND gate', '5 states, no gates required', '20 states, decoded with 4-input gates'],
        answer: 1,
        explanation: 'The switch-tail doubles the ring’s yield ($2n = 10$) and every state is a unique 1s/0s boundary visible in one adjacent flip-flop pair — a 2-input AND per state.',
      },
      {
        q: 'A timing subsystem needs $T_0 \\ldots T_7$ with absolutely minimal combinational logic and has flip-flops to spare. The best choice is:',
        options: ['A mod-8 binary counter with a 3×8 decoder', 'A ring counter with 8 flip-flops', 'A 4-bit switch-tail counter', 'A ripple counter with decoded outputs'],
        answer: 1,
        explanation: 'The ring counter’s flip-flop outputs are the timing signals directly — zero decode gates — at the cost of 8 flip-flops, exactly the trade stated in the question.',
      },
      {
        q: 'In the mod-6 design, the toggle equations are $T_0 = 1$, $T_1 = Q_0(Q_1 + Q_2\')$, $T_2 = Q_0(Q_1 + Q_2)$. Starting from state 101, the next state is:',
        options: ['110 (an unused state)', '000, because $T_2$ alone is 1', '011', '101 (hold)'],
        answer: 1,
        explanation: 'At 101: $T_1 = 1(0 + 0) = 0$ and $T_2 = 1(0 + 1) = 1$, so only $Q_2$ toggles: 101 → 000 — the modulo-6 wrap.',
      },
      {
        q: 'The word-time signal for an 8-bit serial operation:',
        options: ['Is a single clock pulse at the end of the word', 'Spans eight clock periods — one per bit position of the word', 'Is the clock divided by 8 only', 'Exists only in asynchronous systems'],
        answer: 1,
        explanation: 'The envelope must cover every bit period of the word: high for all eight clocks, typically formed as the OR of the eight timing signals.',
      },
    
      // PYQ-pattern — ring counter states (rephrased)
      {
        q: "How many distinct states does a $4$-bit ring counter cycle through?",
        options: ["$16$", "$8$", "$10$", "$4$"],
        answer: 3,
        explanation: "**Step 1 — Given data:** $4$ stages, single circulating $1$.\n**Step 2 — Rule:** ring holds one $1$ rotating through $n$ positions; states $= n$.\n**Step 3 — Trace:** $1000 \\to 0100 \\to 0010 \\to 0001 \\to 1000$.\n**Step 4 — Cross-check:** no decoding needed for timing use; each stage directly is one timing pulse $T_i$.\n**Step 5 — Distractors:** $16$ is binary-counter states; $8$ is $3$-bit binary; $10$ is $5$-bit Johnson.\n**Step 6 — Conclude:** $4$ states."
      },
      // PYQ-pattern — Johnson counter states (rephrased)
      {
        q: "A $5$-bit switch-tail (Johnson) counter cycles through how many states, each decoded with what complexity?",
        options: ["$32$ states with $5$-input decoding", "$20$ states with $4$-input decoding", "$5$ states with no decoding", "$10$ states, each with one $2$-input AND"],
        answer: 3,
        explanation: "**Step 1 — Given data:** $n = 5$, complemented feedback.\n**Step 2 — Rule:** Johnson states $= 2n$; each state is identified by two adjacent stage values, hence $2$-input decoding.\n**Step 3 — Count:** $2 \\times 5 = 10$ states ($00000, 10000, 11000, \\ldots, 00001$).\n**Step 4 — Cross-check:** $5$-bit binary would give $32$; ring would give $5$; Johnson doubles the ring by using both phases.\n**Step 5 — Distractors:** $32$ is binary; $5$ is ring; $20$ doubles twice.\n**Step 6 — Conclude:** $10$ states, $2$-input decodes."
      },
      // PYQ-pattern — timing counter choice (rephrased)
      {
        q: "A control unit needs $8$ repeating timing pulses with minimal decoding. Which counter fits, and how many flip-flops does it need?",
        options: ["$8$-bit ring with $8$ stages", "$4$-bit Johnson with $4$ stages", "$3$-bit binary with $3$ stages plus $3$-input decodes", "$8$-bit binary with $8$ stages"],
        answer: 1,
        explanation: "**Step 1 — Given data:** $8$ pulses, minimize decode complexity.\n**Step 2 — Rule:** ring needs $n$ stages for $n$ pulses; Johnson needs $n/2$ stages for $n$ pulses ($2n$ states); binary needs $\\log_2 n$ stages but multi-input decodes.\n**Step 3 — Compare:** ring $8$ stages; Johnson $4$ stages with $2$-input decodes; binary $3$ stages with $3$-input decodes.\n**Step 4 — Cross-check:** Johnson halves the ring at the cost of $2$-input decodes; binary minimizes flip-flops but maximizes decode width.\n**Step 5 — Distractors:** $8$-bit binary wastes stages; $8$-bit ring is the largest; $3$-bit binary is smallest but decode-heavy.\n**Step 6 — Conclude:** $4$-bit Johnson balances stages and decoding."
      }
    ],
  },

  // ------------------------------------------------------------------ 7.5
  {
    sectionId: 'mano-ch7-s5',
    readingTime: 8,
    intro: 'A random-access memory is the register concept industrialized: thousands of storage cells addressed through one decoder, read and written under external control. This section treats the RAM as a system component — its address, select and read/write control lines, its access-time timing, and above all the technique of building large memories from small chips by expanding words, bits, or both at once.',
    objectives: [
      'Describe the RAM block: address lines, bidirectional data, memory select and read/write controls',
      'Explain the internal address decoding that selects one word out of $2^k$',
      'State the read-cycle and write-cycle timing requirements including access time',
      'Expand memory in the word direction using chip selects from the extra address bits',
      'Expand memory in the bit direction with parallel chips and combine both expansions',
    ],
    concepts: [
      {
        term: 'Random-access memory',
        kind: 'definition',
        statement: 'A **RAM** is a read/write memory in which any of its $2^k$ words is reached equally fast: a $k$-bit address, decoded internally, selects the word; $m$ bidirectional data lines carry the word; a **memory select (CS)** enables the chip and a **read/write (R/W)** control chooses the direction.',
        detail: '“Random access” contrasts with sequential media (tapes, shift-register memories) where reach time depends on position. A $16 \\times 4$ RAM has 4 address lines, 4 data lines, and 16 words of 4 bits — 64 storage cells. Static RAMs store each bit in a flip-flop-like cell; the RAM of this chapter is the static kind.',
      },
      {
        term: 'Internal address decoding',
        kind: 'insight',
        statement: 'Inside the RAM, a $k \\times 2^k$ decoder turns the address into a one-hot **word line** that enables one row of cells; the read/write logic then gates either the cells’ stored bits onto the data lines (read) or the data lines into the cells (write).',
        detail: 'The decoder is exactly the chapter 5 component: word $i$ is selected when the address equals $i$. Because one decoder serves the whole chip, the cost of decoding is amortized across all cells — the same economy of scale that made ROMs attractive. The chip select, in effect an enable on the whole decoder, is what permits the expansion techniques below.',
      },
      {
        term: 'Read and write cycles',
        kind: 'method',
        statement: 'A **read cycle** holds the address stable, asserts CS with R/W = 1, and the data appear on the outputs after the **access time** $t_A$; a **write cycle** holds the address stable, asserts CS with R/W = 0, and pulses the data in — the address must be established before the write command and held after it, and the data must satisfy setup and hold around it.',
        detail: 'Access time is the RAM’s headline number: the delay from a stable address to valid output data. The address setup margin before the write edge, the write pulse width, and the data hold after the edge complete the specification — the same three-number timing contract ($t_{su}$, width, $t_h$) that governs flip-flops in Section 6.1, now at the system level.',
      },
      {
        term: 'Word expansion (address expansion)',
        kind: 'method',
        statement: 'To build a memory with **more words** from small chips: give every chip the low-order address bits in parallel, and drive each chip’s select from a decoder on the high-order bits — one extra address bit doubles the word count and selects between two chips.',
        detail: 'The extra address lines run to a small decoder whose outputs become the individual CS inputs; at any instant exactly one chip drives the shared data lines. This requires the chips to have disabled (high-impedance or open) outputs when deselected — the tri-state discipline of chapter 8’s bus.',
      },
      {
        term: 'Bit expansion',
        kind: 'method',
        statement: 'To build a memory with **wider words**: connect chips in parallel with identical address, select and R/W wiring; each chip contributes its own slice of the data lines. Two $16 \\times 4$ chips make a $16 \\times 8$ memory with no extra logic whatsoever.',
        detail: 'Every chip sees the same address at the same time and performs the same operation on its slice of the word — the memory equivalent of the carry-parallel structure of an adder. Combining both directions: $c$ chips of $2^k \\times m$ build up to $c \\cdot 2^k \\times m$ words of $c \\cdot m$ bits in a $\\sqrt{c} \\times \\sqrt{c}$ arrangement.',
      },
    ],
    examples: [
      {
        title: 'Word expansion: two 16×4 RAMs into a 32×4 RAM',
        problem: 'Build a 32-word by 4-bit memory from $16 \\times 4$ RAM chips. Specify all wiring and verify the addressing of location 22.',
        steps: [
          { label: 'Step 1: Determine the new address width', text: 'Thirty-two words require $2^5 = 32$ codes: five address bits $A_4A_3A_2A_1A_0$. Each chip itself decodes only four bits, so the fifth bit selects which chip holds the word.' },
          { label: 'Step 2: Wire the low-order address', text: 'Connect $A_3A_2A_1A_0$ in parallel to the four address pins of both chips — both chips see the same 4-bit offset within their own 16-word space.' },
          { label: 'Step 3: Decode the extra bit into chip selects', text: 'Use an inverter (a $1 \\times 2$ decoder): chip 0’s CS gets $A_4\'$ and chip 1’s CS gets $A_4$. When $A_4 = 0$, addresses 0–15 reach chip 0; when $A_4 = 1$, addresses 16–31 reach chip 1. (With active-low CS inputs, the inverter is placed on the appropriate branch.)' },
          { label: 'Step 4: Merge the data lines', text: 'Connect the two chips’ data outputs to the same four data lines: the deselected chip’s outputs are in the high-impedance state, so only the selected chip drives the bus. For writes, both CS and R/W gating steer the data into the selected chip only.' },
          { label: 'Step 5: Verify location 22', text: '$22 = 10110_2$: $A_4 = 1$ selects chip 1, and the offset $0110_2 = 6$ addresses chip 1’s internal word 6 — which is the seventh word of the upper block: global location $16 + 6 = 22$. Reading $A_4A_3A_2A_1A_0 = 10110$ returns exactly the stored word.' },
        ],
        result: 'Five address lines, one inverter, two $16 \\times 4$ chips: a $32 \\times 4$ memory in which the MSB of the address chooses the chip and the rest choose the word within it.',
      },
      {
        title: 'Bit expansion: two 16×4 RAMs into a 16×8 RAM',
        problem: 'Build a 16-word by 8-bit memory from $16 \\times 4$ RAM chips and state how to extend the technique to $32 \\times 8$.',
        steps: [
          { label: 'Step 1: Wire the shared control', text: 'Connect the four address lines, the memory select CS and the read/write control identically to both chips — every operation happens to both chips simultaneously.' },
          { label: 'Step 2: Split the data bus', text: 'Chip 0 supplies data lines $D_3D_2D_1D_0$ (the low nibble) and chip 1 supplies $D_7D_6D_5D_4$ (the high nibble). No decoding logic is needed: the two chips never contend because they drive disjoint lines.' },
          { label: 'Step 3: Verify a write', text: 'Writing the byte $1011\\,0110$ to address $7$: both chips receive address 0111 and R/W = write; chip 0 stores $0110$ in its word 7, chip 1 stores $1011$ in its word 7. A later read of address 7 reassembles the full byte.' },
          { label: 'Step 4: Combine with word expansion', text: 'For $32 \\times 8$: take the bit-expanded pair above and duplicate it, using the $A_4$/$A_4\'$ inverter trick from the previous example to select between the two pairs — four chips total: two for word doubling, two for bit doubling, one inverter.' },
          { label: 'Step 5: State the general count', text: 'Chips needed $= (\\text{words desired}/\\text{words per chip}) \\times (\\text{bits desired}/\\text{bits per chip})$: here $32/16 \\times 8/4 = 4$ chips of $16 \\times 4$.' },
        ],
        result: 'Bit expansion is pure parallelism (identical control wiring, disjoint data slices); combined with the chip-select technique it builds any $2^n \\times m$ memory from small parts.',
      },
    ],
    keyTakeaways: [
      'A RAM exposes $k$ address lines, $m$ bidirectional data lines, a chip select and a read/write control; internally a $k \\times 2^k$ decoder selects one word line.',
      'Read: address stable, CS active, R/W = 1, data valid after access time $t_A$. Write: address setup before and hold after the write command, with data setup/hold around it.',
      'Word expansion feeds low address bits to all chips and decodes the extra bits into chip selects.',
      'Bit expansion wires chips in parallel with identical control, each contributing a slice of the data lines.',
      'A $2^a \\times m$ memory from $2^k \\times m_0$ chips needs $2^{a-k} \\times m/m_0$ chips.',
      'Merged output lines require deselected chips to present high impedance — the same tri-state discipline the common bus of chapter 8 relies on.',
    ],
    quiz: [
      {
        q: 'A $64 \\times 8$ RAM has how many address and data lines?',
        options: ['6 address, 8 data', '64 address, 8 data', '8 address, 6 data', '6 address, 64 data'],
        answer: 0,
        explanation: '$64 = 2^6$ words need 6 address bits; the word width is 8 bits, so 8 data lines.',
      },
      {
        q: 'In word expansion, the extra address bits (beyond each chip’s address pins) are used to:',
        options: ['Carry additional data bits', 'Drive a decoder whose outputs become the individual chip selects', 'Speed up the access time', 'Drive the read/write control'],
        answer: 1,
        explanation: 'The high-order bits select which chip owns the addressed word; the low-order bits select the word within the enabled chip.',
      },
      {
        q: 'Two $16 \\times 4$ RAM chips are wired with common address, CS and R/W, chip A on data lines $D_3 \\ldots D_0$ and chip B on $D_7 \\ldots D_4$. The resulting memory is:',
        options: [`$32 \\times 4$`, `$16 \\times 8$`, `$32 \\times 8$`, `$8 \\times 16$`],
        answer: 1,
        explanation: 'Same word count (16), doubled word width (8): classic bit expansion with no extra logic.',
      },
      {
        q: 'During a RAM write cycle, the address must be:',
        options: ['Allowed to change freely during the write pulse', 'Stable before the write command begins and held until after it ends', 'Complemented halfway through', 'Latched only after the data are removed'],
        answer: 1,
        explanation: 'If the internal decoder’s selection changes mid-write, the data can be stored into the wrong word — address setup and hold margins are part of the write-cycle contract, like flip-flop timing.',
      },
      {
        q: 'When several RAM outputs share one set of data lines in a word-expanded memory, the mechanism that prevents contention is:',
        options: ['Series resistors sized for worst case', 'Deselected chips drive high impedance (tri-state) outputs, so only the selected chip drives', 'Diode OR-ing of all outputs', 'Time-division multiplexing of the address'],
        answer: 1,
        explanation: 'The chip select disables the output drivers of every chip except the one being read — the tri-state discipline formalized in chapter 8’s common-bus systems.',
      },
    ],
  },
]
