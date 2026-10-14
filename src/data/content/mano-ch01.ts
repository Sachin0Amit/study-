import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 1: Binary Systems (Sections 1.1 – 1.8 as mapped in library.ts)
// Master study content. Worked-example numbers follow the book’s own examples.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// Prime notation: A′ (U+2032) in prose and inside math; overbars avoided.
// ============================================================================

export const manoCh1Content: SectionContent[] = [
  // ------------------------------------------------------------------ 1.1
  {
    sectionId: 'mano-ch1-s1',
    depth: [
      {
        tier: 'masters',
        title: 'From physical switches to mathematical logic',
        blocks: [
          { kind: 'para', body: 'The argument for binary hardware was completed in 1937, in a master’s thesis at MIT. Claude Shannon’s “A Symbolic Analysis of Relay and Switching Circuits” observed that George Boole’s algebra of logic (1854) — for eighty years a piece of pure mathematics — describes switching networks exactly: a **series** connection of two contacts conducts only when both are closed, which is the AND of the two switch variables; a **parallel** connection conducts when either is closed, which is OR; and the two states of a contact, open and closed, realize the two truth values. The calculus of propositions thereby became a calculus of circuits: engineers could design, transform, and minimize relay networks by algebra rather than by intuition. Section 1.8’s truth tables and its AND, OR and NOT are not a convenient notation imposed on hardware after the fact — they are the native language of two-state devices. Binary signaling is not a compromise forced by noisy components; it is what makes the hardware a physical model of logic itself.' },
          { kind: 'example', heading: 'Binary versus three-level noise margins', body: 'Take a 5 V supply and suppose every driver holds its output within $\\pm 0.3\\ \\text{V}$ of its intended level while every receiver’s decision threshold is uncertain by $\\pm 0.2\\ \\text{V}$; call the combined slop $\\Delta = 0.5\\ \\text{V}$. With **binary** signaling the levels sit at $0$ and $5$, the decision boundary is $2.5\\ \\text{V}$ from each nominal level, and the guaranteed noise margin per side is $5/2 - \\Delta = 2.0\\ \\text{V}$. With a **three-level** code the levels must be $0$, $2.5$, $5$, so the boundaries move to $1.25$ and $3.75$, and each level sits only $5/4 - \\Delta = 0.75\\ \\text{V}$ from its boundary. For $r$ evenly spaced levels the margin is $V_{DD}/(2(r-1)) - \\Delta$, so every doubling of the level count halves the immunity: a ten-level decimal machine would need $5/18 - 0.5$, which is negative — the tolerances already exceed the spacing between levels. The arithmetic explains the industry’s whole history: two levels put each decision at the extremes of the swing, where a transistor is most comfortable, and the exponential loss of margin is why multi-valued logic (this section’s research tier) remains exotic.' },
          { kind: 'para', body: 'Strictly speaking there are no digital signals — only analog signals interpreted digitally. A wire carries a continuous voltage; the **digital abstraction** declares it a 0 or a 1 according to thresholds, and a **restoring** gate re-transmits a clean level no matter how far inside the legal region its input drifted. This is **quantization** applied twice: value is quantized onto the two-symbol alphabet, and time is quantized by the clock of Section 1.7, so that a single instant defines each sample. The payoff is that noise stops accumulating: an analog amplifier chain adds irrecoverable distortion at every stage, but a chain of restoring gates erases input perturbations — provided they stay within the margins of the worked example above. Quantization does charge tuition: the boundary between analog and digital carries a half-symbol error floor (the half-**LSB** of a converter), and information is destroyed at every threshold decision. But a finite alphabet of reliably distinguishable symbols is exactly what the section’s “discrete elements of information” demands; the rest of this chapter is the mathematics of paying that cost once, deliberately, instead of continuously.' },
          { kind: 'remark', body: 'The stored-program concept is Turing’s 1936 universal machine built in metal. Because instructions are data — bit patterns in memory — one fixed machine can imitate any other digital system by interpreting its program; fetch, decode and execute is the universal machine’s single loop, and everything else in Mano’s book is engineering arranged around that loop. The same duality explains compilers, loaders, and operating systems as programs that write programs — and, less cheerfully, why self-modifying code and viruses need no special hardware to exist.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Beyond two states: signals at the frontier',
        blocks: [
          { kind: 'application', heading: 'Flash memories are multivalued', body: 'The margin arithmetic of the master’s tier is a live industrial battlefield. A **QLC flash cell** stores four bits by holding its floating-gate charge at one of sixteen distinguishable threshold-voltage levels — multi-valued logic shipping by the exabyte. Each generation (MLC, 2 bits, 4 levels; TLC, 3 bits, 8 levels; QLC, 4 bits, 16 levels) halves the level spacing in exchange for density, directly spending the noise margin computed above: reads become slow and repeated, sensing needs multiple passes, retention and write endurance fall, and every page is wrapped in **LDPC error correction** (the research tier of Section 1.6) because the raw channel is too unreliable to decode alone. Chip-to-chip links are multivalued too: **PAM-4** serial interfaces put four voltage levels on a wire to double throughput at 56 and 112 gigabaud, accepting an eye one third as tall as binary signaling — about $9.5\\ \\text{dB}$ of noise tolerance surrendered, since $20 \\log 3 \\approx 9.5$. The binary-versus-multivalued question is thus not settled dogma but a measured engineering trade: margins against bits per physical state, re-argued at every process node.' },
          { kind: 'open', heading: 'The quantum register', body: 'Section 1.7’s register holds one definite word; a quantum register of $n$ **qubits** holds a superposition — a unit vector in a $2^n$-dimensional complex space, one amplitude per classical word. Measuring forces one definite word with probability the squared magnitude of its amplitude, and the rest of the superposition is destroyed: the digital abstraction of this section survives only at measurement time. The divergence runs deeper. **No-cloning** forbids copying an unknown state, so fan-out — free in every circuit of this book — is illegal; useful quantum gates must be reversible (Toffoli gates compute AND while retaining the information needed to undo it); and even erasing a classical bit has a thermodynamic price, $kT \\ln 2$ (Landauer). Quantum error correction must therefore protect amplitudes, not bits: parity checks generalize to stabilizer checks on superpositions. What remains open is building fault-tolerant machines whose registers hold their delicate states long enough to compute with. The definite, clonable, two-valued word of this chapter is precisely what quantum research is trying to transcend — and to protect, using codes descended from its own parity bit.' },
        ],
      },
    ],
    readingTime: 7,
    intro: 'Mano opens the book by taking apart the very idea of a computer. A digital computer is a machine that manipulates discrete elements of information under the direction of a stored program, and the whole apparatus — hardware, codes, number systems, and logic — exists to make that manipulation fast, reliable, and cheap. This section describes the machine as a block diagram of three functional units and explains why every one of them is built from binary signals.',
    objectives: [
      'Define a digital computer and a digital system in terms of discrete information processing',
      'Describe the hardware block diagram — CPU, memory unit, and input/output units — and the role of each',
      'Explain the stored program concept and the fetch–decode–execute behavior it implies',
      'Justify why digital hardware uses binary (two-valued) signals rather than ten-valued decimal signals',
    ],
    concepts: [
      {
        term: 'Digital computer',
        kind: 'definition',
        statement: 'A **digital computer** is a system that accepts discrete elements of information (numbers, letters, symbols), stores and processes them according to a **stored program** of instructions, and delivers the results. Each quantity of information is represented inside the machine by a pattern of binary digits.',
        detail: 'Mano stresses two words: digital (discrete, countable information, as opposed to the continuous signals of an analog computer) and stored program (the instructions live in memory alongside the data and are fetched one at a time). Everything in the rest of the book — codes, Boolean algebra, gates, registers, the whole processor design — is scaffolding for this one machine.',
      },
      {
        term: 'The hardware block diagram',
        kind: 'insight',
        statement: 'A computer’s hardware divides into three functional units, whether the machine is a room-sized 1979 mainframe or a modern chip: a **central processing unit (CPU)**, a **memory unit**, and **input/output (I/O) equipment**, all interconnected by buses that carry addresses, data, and control signals.',
        detail: 'In words, the block diagram is: the memory unit holds the program instructions and the data; the CPU fetches instructions from memory, interprets (decodes) them, and executes them. Inside the CPU, a **control unit** directs the operation sequence, an **arithmetic and logic unit (ALU)** performs the microoperations, and a small set of **processor registers** (program counter, instruction register, accumulator, and friends) hold the operands in flight. Input equipment transfers information from the outside world into memory; output equipment reports results back. Chapters 8–11 of Mano build this exact diagram piece by piece.',
      },
      {
        term: 'Stored program concept',
        kind: 'insight',
        statement: 'Because instructions are stored in memory as binary words, the computer can **fetch, decode, and execute** them one at a time in sequence — and it can even manipulate its own instructions as data, since both are just bit patterns.',
        detail: 'This is the von Neumann organization. The processor keeps a program counter with the address of the next instruction, increments it each fetch (unless a branch instruction changes it), and the cycle repeats. A program is nothing more than a stored list of binary instruction codes; changing the program changes the machine’s behavior without touching the wiring.',
      },
      {
        term: 'Why binary signals',
        kind: 'insight',
        statement: 'Digital hardware uses **binary** signals because physical devices that must distinguish two states are far easier to build, cheaper, and more reliable than devices that must distinguish ten voltage levels.',
        detail: 'A transistor operating as a switch is either cut off or saturated; its output is meant to be interpreted as one of two clearly separated voltage ranges. With only two ranges to recognize, noise and component drift can be enormous before a 0 is mistaken for a 1. Early machines did try decimal arithmetic with ten-level signals, and they lost to binary machines precisely because the two-level circuits could use the cheapest, most reliable components. The number of states is small — but so is the cost of getting each state right.',
      },
      {
        term: 'Digital systems beyond computers',
        kind: 'definition',
        statement: 'A **digital system** is any system that manipulates discrete elements of information: a digital watch counting seconds, a calculator combining keypresses, a traffic-light controller sequencing lamps. Digital computers are the most general digital systems because they are **programmable** — the same hardware runs different stored programs.',
        detail: 'Mano’s point is one of levels: combinational and sequential circuits (Chapters 3–7) are the elementary digital systems; registers and register transfers (Chapters 8–10) assemble them into a processor; the basic computer of Chapter 11 assembles that into a complete stored-program machine. Each level reuses the binary logic of this chapter.',
      },
      {
        term: 'Information representation',
        kind: 'notation',
        statement: 'Every kind of information a computer handles — numbers, letters, control symbols, even instructions — is encoded as a **binary word**, a finite string of bits $b_{n-1} \\ldots b_1 b_0$ whose meaning comes from a code agreement between designer and machine.',
        detail: 'The same eight bits can stand for the number 65, the letter A, or an opcode — the encoding convention decides. Sections 1.2 through 1.6 develop the three great encoding topics: number systems (quantity), binary codes (symbols), and complements (signed arithmetic).',
      },
    ],
    examples: [
      {
        title: 'Tracing one instruction through the block diagram',
        problem: 'In words, follow an “add the contents of memory location to the accumulator” instruction through the CPU, memory, and buses, showing which functional unit is active at each step.',
        steps: [
          { label: 'Step 1: Fetch', text: 'The control unit places the contents of the program counter on the address bus; the memory unit responds by placing the instruction word on the data bus, and it is captured into the instruction register inside the CPU.' },
          { label: 'Step 2: Decode', text: 'The control unit examines the instruction’s opcode bits and determines that an add from memory is required; it generates the control signals (read, register enable, ALU select) for the steps to follow.' },
          { label: 'Step 3: Fetch the operand', text: 'The address field of the instruction is placed on the address bus; the memory responds with the data word, which is captured into a CPU data register.' },
          { label: 'Step 4: Execute', text: 'The ALU adds its two inputs — the data register and the accumulator — and the sum is transferred back into the accumulator, while status information (such as a carry) may be recorded.' },
          { label: 'Step 5: Next instruction', text: 'The program counter was already incremented during the fetch, so the next instruction is ready to be fetched; the cycle repeats until a halt instruction is reached.' },
        ],
        result: 'One instruction has touched every block: memory (twice), the buses (twice), the CPU registers (IR, PC, accumulator, data register), the control unit (decode and sequencing), and the ALU (the add).',
      },
      {
        title: 'Why not build a decimal computer?',
        problem: 'Argue from circuit reliability why a two-state machine beats a ten-state machine for general-purpose computation.',
        steps: [
          { label: 'Step 1: Physical state separation', text: 'Suppose a circuit must resolve a signal into one of $r$ levels. The average gap between adjacent levels shrinks roughly like the reciprocal of $r$; with $r = 2$ the two levels can sit at the extremes of the voltage swing.' },
          { label: 'Step 2: Noise immunity', text: 'Any noise smaller than the full separation between the two ranges is automatically rejected. With ten levels packed into the same swing, noise a fraction as large already corrupts a digit.' },
          { label: 'Step 3: Device economics', text: 'A transistor makes a superb two-state switch (fully on or fully off) but a poor ten-level amplifier when mass-produced with 1970s tolerances; the binary design uses the device where it is most reliable.' },
          { label: 'Step 4: The trade accepted', text: 'The price is verbosity: ten decimal digits need about $\\lceil \\log_2 10^{10} \\rceil = 34$ bits, and binary arithmetic and codes must be developed (Sections 1.2–1.6) to make up for the lost compactness of a ten-symbol digit.' },
        ],
        result: 'Binary wins because reliability per component, not compactness per digit, is what scales: a machine built from parts that never confuse their two states can be made arbitrarily large, and the encoding burden shifts to mathematics instead of hardware.',
      },
    ],
    keyTakeaways: [
      'A digital computer stores and processes discrete information under control of a stored program of instructions held in memory.',
      'The hardware block diagram has three units: CPU (control unit + ALU + processor registers), memory, and input/output equipment, tied together by address, data and control buses.',
      'The stored program concept makes instruction fetch, decode and execute the machine’s fundamental cycle, and lets programs be changed without rewiring.',
      'Binary signals are used because two-state devices are cheaper and far more noise-resistant than ten-state devices.',
      'Digital computers are the most general digital systems; watches, calculators and controllers are fixed-program relatives.',
      'Every form of information — numbers, characters, instructions — enters the machine as an encoded binary word.',
    ],
    quiz: [
      {
        q: 'Which functional unit contains the control unit, the ALU, and the processor registers?',
        options: ['The memory unit', 'The central processing unit', 'The input/output equipment', 'The bus system'],
        answer: 1,
        explanation: 'The CPU integrates sequencing (control unit), computation (ALU), and the working registers; memory stores, and I/O communicates with the world.',
      },
      {
        q: 'What does the stored program concept directly enable?',
        options: ['Faster transistors', 'Changing the computer’s behavior by loading different instructions into memory', 'Analog signal processing', 'Reducing the number of bits needed per number'],
        answer: 1,
        explanation: 'Because instructions are ordinary memory words, a new program changes the machine without touching the wiring — the defining property of a stored-program computer.',
      },
      {
        q: 'The strongest hardware argument for binary rather than decimal internal signals is:',
        options: ['Binary numbers are shorter than decimal numbers', 'Two-state circuits are cheaper and far more noise-resistant than ten-level circuits', 'Binary was invented before decimal', 'Decimal arithmetic cannot be implemented with logic gates'],
        answer: 1,
        explanation: 'With only two voltage ranges to distinguish, each state is maximally protected against noise and component variation; the length penalty of binary is paid in encoding, not reliability.',
      },
      {
        q: 'During the fetch phase of an instruction cycle, the memory unit:',
        options: ['Performs the arithmetic', 'Places the instruction word at the addressed location onto the data bus for the CPU to capture', 'Decodes the opcode', 'Increments the program counter electrically'],
        answer: 1,
        explanation: 'Fetch is a memory read at the address held in the program counter: memory drives the instruction word onto the data bus and the CPU latches it into the instruction register. Decode and increment belong to the CPU.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.2
  {
    sectionId: 'mano-ch1-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Positional notation as algebra',
        blocks: [
          { kind: 'para', body: 'A radix-$r$ numeral is a polynomial in disguise, $N = \\sum_i d_i r^i$ with digit coefficients, and everything in this section is polynomial algebra. Reading a numeral is **evaluation**, best organized by Horner’s rule, $$N = \\bigl( \\cdots \\bigl( (d_{n-1} r + d_{n-2}) r + \\cdots \\bigr) r + d_1 \\bigr) r + d_0,$$ which needs only $n-1$ multiplications and additions and never forms a power of $r$ explicitly. Writing a numeral in a new base is the inverse operation: repeated division by $r$ is **synthetic division**, peeling off the constant coefficient first, so the two conversion procedures of the core section are the two classical algorithms of polynomial manipulation. This is why conversions cannot fail: the value is an integer that exists independently of its dress, and base conversion merely re-expresses the same quantity over a different sequence of weights. Carries — the deeper subject of Section 1.3 — are the normalization that keeps digit coefficients inside $\\{0, \\ldots, r-1\\}$.' },
          { kind: 'theorem', heading: 'Uniqueness of positional notation', body: 'For every radix $r \\ge 2$, every integer $N$ with $0 \\le N \\le r^n - 1$ has exactly one representation as a digit string $d_{n-1} \\ldots d_0$ with each $d_i$ in $\\{0, 1, \\ldots, r-1\\}$ and $N = \\sum_{i=0}^{n-1} d_i r^i$. In particular, expansion to radix $r$ is a bijection between the integers in range and the length-$n$ digit strings: no two numerals collide, and no integer is missed. The same uniqueness holds for finite fractional expansions of length $m$, because multiplying by $r^m$ reduces that case to the integer one. The digit produced at each step of the division algorithm is therefore not merely a plausible choice but the only choice there is.' },
          { kind: 'proof', body: 'Existence is the repeated-division algorithm itself, and it terminates: by the division algorithm $N = q_1 r + d_0$ with $0 \\le d_0 < r$, and since $q_1 = \\lfloor N/r \\rfloor < N$ whenever $N \\ge 1$ and $r \\ge 2$, the successive quotients strictly decrease, so after at most $\\lceil \\log_r (N+1) \\rceil$ steps the quotient reaches $0$ and the collected remainders are the digits — the conversion procedure of the core section is a proved algorithm, not a heuristic. Uniqueness: given any representation, reduce $N = \\sum_{i=0}^{n-1} d_i r^i$ modulo $r$; every term except $d_0$ is a multiple of $r$, so $d_0 \\equiv N \\pmod{r}$, and since both $d_0$ and $N \\bmod r$ lie in $\\{0, \\ldots, r-1\\}$ they are equal — no choice. Subtract $d_0$ and divide by $r$; the same argument forces $d_1$, and induction on position determines every digit from $N$ alone, so the numeral is a canonical name for the integer. For a finite fractional expansion of length $m$, multiply by $r^m$: the scaled value is an integer whose digits are forced exactly as above.' },
          { kind: 'theorem', heading: 'Terminating expansions', body: 'A positive rational $p/q$ in lowest terms has a finite expansion in base $r$ **if and only if** every prime factor of $q$ divides $r$. Which fractions terminate is therefore a property of the base, not the fraction: $1/4$ terminates in both decimal and binary, $1/5$ terminates in decimal but not in binary, and $1/10$ has no finite binary form because $10 = 2 \\cdot 5$ while no power of $2$ contains a factor $5$. Dually, every rational terminates in some base (take $r$ divisible by $q$), while an irrational such as $\\sqrt{2}$ terminates in none — and, being irrational, repeats in none either: the rationals are exactly the eventually periodic expansions in every base.' },
          { kind: 'proof', body: 'Suppose first that every prime factor of $q$ divides $r$. Then $q$ divides some power $r^m$ (each prime’s exponent is eventually met), say $r^m = q \\cdot s$, so $p/q = ps/r^m$ — an integer over a power of $r$, which has a finite expansion of at most $m$ fractional digits: write $ps$ in base $r$ and move the radix point $m$ places. Conversely, suppose $p/q = \\sum_{i=1}^{m} d_{-i} r^{-i}$ is a finite expansion. Multiply through by $r^m q$: the left side is the integer $r^m p$, the right side is $q \\cdot t$ where $t = \\sum_{i=1}^{m} d_{-i} r^{m-i}$ is an integer. So $q$ divides $r^m p$, and since $\\gcd(p, q) = 1$, Euclid’s lemma forces $q \\mid r^m$: every prime factor of $q$ divides $r$. Now apply the criterion to $0.1 = 1/10$: termination in base 2 would force $10 \\mid 2^m$, impossible because $5$ divides $10$ but no power of $2$ does. The expansion is necessarily infinite and, being rational, eventually periodic — $(0.0\\overline{0011})_2$, exactly the pattern the core section computed by hand. This is why binary floating point stores only a rounded surrogate for one-tenth, and why $0.1 + 0.2 \\ne 0.3$ in IEEE arithmetic.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Alternative number systems for real hardware',
        blocks: [
          { kind: 'application', heading: 'Logarithmic number systems', body: 'A logarithmic number system (LNS) represents a value as a sign bit plus the fixed-point logarithm of its magnitude. Multiplication becomes addition of the logs, division subtraction, square roots a shift — the entire multiplicative structure of arithmetic collapses onto the cheap integer operations of this chapter, and each multiplication rounds only once, so long products do not accumulate rounding error the way repeated mantissa rounding does. The price is addition itself: $\\log(a + b) = \\log a + \\log\\bigl(1 + 2^{\\,\\log b - \\log a}\\bigr)$, whose correction term is transcendental and was historically supplied by table lookup and interpolation. LNS shines where multiply-accumulates dominate and dynamic range is enormous but genuine additions are rare — FIR filters, hearing aids, radar — and a full LNS research processor (the European Logarithmic Microprocessor) was built to measure the trade. The live questions are how to size the log precision, how to cheapen the addition correction, and where the crossover against floating point lies. Note the symmetry with this chapter: LNS keeps Section 1.2’s positional notation intact but applies it to a logarithm — the digits describe the exponent, and the number itself is never stored.' },
          { kind: 'open', heading: 'Posits versus IEEE floats', body: 'Gustafson’s 2017 **posit** format attacks floating point at its foundations: tapered precision, in which numbers near unit magnitude get more fraction bits and extremes get fewer; a self-scaling regime header replacing exponent fields and subnormals; and a **quire** — a wide fixed-point accumulator that makes dot products exact. The claimed payoff is more accurate answers per bit at every word size; research hardware (a RISC-V posit core) exists, and the machine-learning community keeps re-measuring the claims. The counter-arguments are equally serious: IEEE 754 carries forty years of validated libraries, tuned silicon, and tooling; posit’s variable-position fields complicate fast alignment logic; and independent comparisons find the accuracy edge smaller than advertised once formats are compared at equal hardware budget. Whether the industry will ever pay the switching cost, or whether tapered ideas will be absorbed quietly — as wide accumulators were absorbed into tensor cores — is a genuinely open engineering question. What is not disputed is the insight beneath it: a floating-point format is a set of decisions about where Section 1.2’s digits are spent, and those decisions can be re-argued.' },
        ],
      },
    ],
    readingTime: 8,
    intro: 'A number system in radix $r$ assigns meaning to a digit string by position: each digit is a coefficient of a power of the base. This section states the positional formula once, in full generality, and then works the two directions of conversion — expansion (any base to decimal) and repeated division/multiplication (decimal to any base) — for integers and for fractions, exactly as Mano does with his $41.6875$ and $(402.2)_5$ examples.',
    objectives: [
      'Write the positional expansion of a radix-$r$ number with integer and fractional parts',
      'Convert a binary number (including fractional bits) to decimal by weighted expansion',
      'Convert a decimal number with a fractional part to binary using repeated division and repeated multiplication',
      'Explain why some terminating decimals become non-terminating binary fractions',
    ],
    concepts: [
      {
        term: 'Positional number system',
        kind: 'definition',
        statement: 'A number in **radix** (base) $r$ is a string of digits $(a_{n-1} \\ldots a_1 a_0 . a_{-1} a_{-2} \\ldots a_{-m})_r$ where each digit $a_i$ is one of $0, 1, \\ldots, r-1$, and the value is the sum of each digit times its positional weight: $$N = \\sum_{i=0}^{n-1} a_i r^{i} + \\sum_{i=-m}^{-1} a_i r^{i} = a_{n-1} r^{n-1} + \\cdots + a_0 + a_{-1} r^{-1} + \\cdots + a_{-m} r^{-m}.$$',
        detail: 'The radix point separates non-negative powers of $r$ (left) from negative powers (right). Decimal is the special case $r = 10$; binary is $r = 2$ with digits 0 and 1. Any base is possible — Mano’s own warm-up example uses base 5: $(402.2)_5 = 4 \\cdot 25 + 0 \\cdot 5 + 2 \\cdot 1 + 2 \\cdot \\tfrac{1}{5} = 102.4$ in decimal.',
      },
      {
        term: 'Common bases and their digit sets',
        kind: 'notation',
        statement: 'The bases used throughout digital design are **binary** ($r = 2$, digits 0, 1), **octal** ($r = 8$, digits 0–7), **decimal** ($r = 10$, digits 0–9), and **hexadecimal** ($r = 16$, digits 0–9 and the six letters $A, B, C, D, E, F$ standing for 10 through 15).',
        detail: 'A base-$r$ system needs exactly $r$ distinct digit symbols and no more. Table 1-1 of the book lists the first sixteen counts in all four bases; memorizing the binary column $0000$ through $1111$ is the single most useful drill in the chapter, since octal and hexadecimal read off it directly (Section 1.3).',
      },
      {
        term: 'Expansion: converting to decimal',
        kind: 'method',
        statement: 'To convert from any radix to decimal, **evaluate the positional expansion**: multiply each digit by its power of the base and add. For $(1010.1101)_2$ this means $8 + 2 + 0.5 + 0.25 + 0.0625$.',
        detail: 'Expansion works left of the radix point (positive powers) and right of it (negative powers) in one pass. It is a direct application of the definition, so it cannot fail for any radix, including bases larger than ten where letter digits must first be translated to their decimal values (e.g. $F = 15$).',
      },
      {
        term: 'Repeated division: integers to any base',
        kind: 'method',
        statement: 'To convert a decimal integer to radix $r$, **divide repeatedly by $r$ and collect the remainders**; the first remainder is the least significant digit, and the last quotient digit is the most significant.',
        detail: 'Each division by $r$ peels off one coefficient $a_i$ because $a_i$ is exactly the remainder of $N$ modulo $r$. Reading the remainders from bottom to top of the work stack reproduces the digit string left to right. The same algorithm converts to binary ($r = 2$), octal ($r = 8$), or hex ($r = 16$).',
      },
      {
        term: 'Repeated multiplication: fractions to any base',
        kind: 'method',
        statement: 'To convert a decimal fraction to radix $r$, **multiply repeatedly by $r$ and collect the integer parts**; the first integer part is the most significant fractional digit ($a_{-1}$), and the process continues until the fraction reaches zero or enough digits have been produced.',
        detail: 'Multiplying by $r$ shifts the radix point one place toward the integer side, so whatever spills past the point is the next digit. The process terminates when the fractional part becomes exactly zero — which is not guaranteed, as the next concept explains.',
      },
      {
        term: 'Non-terminating conversions',
        kind: 'insight',
        statement: 'A fraction that terminates in one base need not terminate in another: $0.1$ in decimal is the **non-terminating** binary fraction $0.000110011\\ldots$ with the block $0011$ repeating forever.',
        detail: 'A fraction terminates in base $r$ only if its denominator (in lowest terms) has no prime factors other than those of $r$. Since $10 = 2 \\cdot 5$ and $2$ has no factor 5, one-tenth cannot be a finite sum of powers of one-half. This is exactly why fixed-width binary floating point cannot represent 0.1 exactly — a fact every JavaScript programmer rediscovers (Flanagan, Chapter 3, covers the IEEE format that inherits this property).',
      },
    ],
    examples: [
      {
        title: 'Binary to decimal by positional expansion',
        problem: 'Convert $(1010.1101)_2$ to decimal, showing every weight.',
        steps: [
          { label: 'Step 1: List the integer weights', text: 'Reading left to right from the radix point: the bits $1, 0, 1, 0$ carry weights $2^3, 2^2, 2^1, 2^0$, that is $8, 4, 2, 1$.' },
          { label: 'Step 2: Sum the integer part', text: '$8 + 0 + 2 + 0 = 10$, so the integer part contributes ten.' },
          { label: 'Step 3: List the fractional weights', text: 'The bits after the point, $1, 1, 0, 1$, carry weights $2^{-1}, 2^{-2}, 2^{-3}, 2^{-4}$, that is $\\tfrac{1}{2}, \\tfrac{1}{4}, \\tfrac{1}{8}, \\tfrac{1}{16}$.' },
          { label: 'Step 4: Sum the fractional part', text: '$\\tfrac{1}{2} + \\tfrac{1}{4} + 0 + \\tfrac{1}{16} = \\tfrac{8}{16} + \\tfrac{4}{16} + \\tfrac{1}{16} = \\tfrac{13}{16} = 0.8125$.' },
        ],
        result: '$(1010.1101)_2 = 10 + 0.8125 = 10.8125$ in decimal — Mano’s own worked conversion.',
      },
      {
        title: 'Decimal to binary, integer and fraction together',
        problem: 'Convert $41.6875$ to binary.',
        steps: [
          { label: 'Step 1: Divide the integer 41 by 2 repeatedly', text: 'The remainders read from last to first: $41 \\to 20$ remainder $1$, $20 \\to 10$ remainder $0$, $10 \\to 5$ remainder $0$, $5 \\to 2$ remainder $1$, $2 \\to 1$ remainder $0$, $1 \\to 0$ remainder $1$.' },
          { label: 'Step 2: Read the integer digits', text: 'Bottom to top the remainders are $1, 0, 1, 0, 0, 1$, so $41 = (101001)_2$. Check: $32 + 8 + 1 = 41$.' },
          { label: 'Step 3: Multiply the fraction 0.6875 by 2 repeatedly', text: '$0.6875 \\times 2 = 1.375$ (digit 1); $0.375 \\times 2 = 0.75$ (digit 0); $0.75 \\times 2 = 1.5$ (digit 1); $0.5 \\times 2 = 1.0$ (digit 1).' },
          { label: 'Step 4: Read the fractional digits in order', text: 'The integer parts, taken in the order produced, give $0.1011$; check: $0.5 + 0.125 + 0.0625 = 0.6875$.' },
          { label: 'Step 5: Assemble', text: 'Integer part from Step 2, fraction from Step 4.' },
        ],
        result: '$41.6875 = (101001.1011)_2$ — the book’s canonical mixed-conversion example.',
      },
      {
        title: 'A fraction that refuses to terminate',
        problem: 'Convert $0.1$ to binary and describe what happens.',
        steps: [
          { label: 'Step 1: Multiply by 2', text: '$0.1 \\times 2 = 0.2$ — digit $0$; $0.2 \\times 2 = 0.4$ — digit $0$; $0.4 \\times 2 = 0.8$ — digit $0$.' },
          { label: 'Step 2: Continue', text: '$0.8 \\times 2 = 1.6$ — digit $1$; $0.6 \\times 2 = 1.2$ — digit $1$; and $0.2$ has returned.' },
          { label: 'Step 3: Observe the cycle', text: 'From $0.2$ onward the sequence repeats with period four: $0.0001\\,1001\\,1001\\ldots$, so $0.1 = (0.0\\overline{0011})_2$.' },
          { label: 'Step 4: Interpret', text: 'No finite string of binary fraction bits equals one-tenth exactly; any hardware representation must round, which is why binary floating-point arithmetic on decimal constants accumulates tiny errors.' },
        ],
        result: '$0.1$ converts to the repeating binary fraction $0.0001100110011\\ldots$ — termination in one base guarantees nothing in another.',
      },
    ],
    keyTakeaways: [
      'A radix-$r$ numeral is a sum of digits times powers of $r$; the positional expansion formula converts any base to decimal in one evaluation.',
      'Bases in daily use: 2, 8, 10, 16, with hexadecimal borrowing $A$–$F$ for the values 10–15.',
      'Decimal-to-radix conversion of integers uses repeated division, remainders read bottom to top.',
      'Fractional parts convert by repeated multiplication by $r$, collecting integer parts in the order produced.',
      '$41.6875 = (101001.1011)_2$ and $(1010.1101)_2 = 10.8125$ are the book’s reference conversions to know cold.',
      'Fractions terminate in base $r$ only when the reduced denominator’s prime factors all divide $r$ — so decimal $0.1$ repeats forever in binary.',
    ],
    quiz: [
      {
        q: 'The value of the binary fraction $(0.1011)_2$ is:',
        options: ['0.1011', `$0.6875$`, `$0.8125$`, `$0.11$`],
        answer: 1,
        explanation: 'The bits after the point weight $\\tfrac12 + \\tfrac14 + 0 \\cdot \\tfrac18 + \\tfrac1{16} = \\tfrac{11}{16} = 0.6875$. The 0.8125 trap belongs to $(0.1101)_2$, whose last two bits are swapped.',
      },
      {
        q: 'Converting the decimal integer $41$ to binary by repeated division produces which remainders in the order first-to-last?',
        options: ['1, 0, 1, 0, 0, 1', '1, 0, 0, 1, 0, 1', '1, 0, 1, 0, 0, 1 read bottom-to-top', '0, 1, 1, 0, 0, 1'],
        answer: 2,
        explanation: 'The remainders appear least-significant first (1, 0, 0, 1, 0, 1), and the digit string is read in the opposite order — bottom to top — giving $101001$. Option 2 states exactly this reading rule.',
      },
      {
        q: 'Multiplying $0.6875$ by 2 four times yields integer parts, in order:',
        options: ['0, 1, 0, 1', '1, 0, 1, 1', '1, 1, 0, 1', '1, 1, 1, 0'],
        answer: 1,
        explanation: '$1.375, 0.75, 1.5, 1.0$ give integer parts $1, 0, 1, 1$, so the fraction is $0.1011$. The digits come out most-significant first, unlike integer remainders.',
      },
      {
        q: 'The decimal fraction $0.1$ converts to binary as:',
        options: ['A terminating four-bit fraction', 'A non-terminating, repeating fraction', 'Exactly $2^{-4}$', 'An integer in disguise'],
        answer: 1,
        explanation: 'One-tenth has a factor of 5 in its denominator, which 2 does not divide, so the binary expansion repeats forever: $0.000110011\\ldots$',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.3
  {
    sectionId: 'mano-ch1-s3',
    depth: [
      {
        tier: 'masters',
        title: 'One arithmetic, many alphabets',
        blocks: [
          { kind: 'para', body: 'Addition “in hexadecimal” is not a different arithmetic from addition in decimal or binary — it is the same integer addition wearing a different alphabet. Formally, $n$-digit base-$r$ arithmetic computes in the ring $\\mathbb{Z}/r^n\\mathbb{Z}$ of integers modulo the place overflow $r^n$: the numeral system supplies convenient representatives, the carry rule is the normalization that keeps those representatives canonical, and the digit-carry recurrence below is the complete proof that column-wise manipulation faithfully mirrors integer sums. This is why Mano can develop every subtraction algorithm of Section 1.4 in decimal and then apply it to binary without re-proof: the theorems were never about the digit set. It also explains the core section’s cross-check — converting $59F + E46 = 13E5$ into decimal as $1439 + 3654 = 5093$ must agree, and does, because both computations are names for the same integer sum in the same ring.' },
          { kind: 'derivation', heading: 'The digit–carry recurrence', body: 'Let $X = \\sum x_i r^i$ and $Y = \\sum y_i r^i$ with digits in $\\{0, \\ldots, r-1\\}$. Column-wise addition is generated by the recurrence $$s_i = x_i + y_i + c_{i-1}, \\qquad d_i = s_i \\bmod r, \\qquad c_i = \\left\\lfloor s_i / r \\right\\rfloor,$$ with $c_{-1} = 0$; note $s_i \\le 2(r-1) + 1 = 2r - 1$, so the carry is at most $1$ in every radix. Correctness is the loop invariant that after processing columns $0$ through $k$, $$\\sum_{i=0}^{k} (x_i + y_i) r^i \\;=\\; \\sum_{i=0}^{k} d_i r^i \\;+\\; c_k\\, r^{k+1},$$ read as “true partial sum equals written digits plus the pending carry parked in the next column.” The base case is column zero’s definition; the inductive step substitutes $s_i = c_i r + d_i$ from the recurrence and the two sides telescope. At the end, the leftover $c_{n-1}$ is the end carry — Section 1.4’s “discard it” rule is the statement that the true sum was being computed modulo $r^n$. Instantiated at $r = 2$, this recurrence **is** the ripple-carry adder of Chapter 4: one full adder per column, delay proportional to $n$ because each carry waits on its predecessor. Every scheme in the research tier is an attack on exactly this dependency.' },
          { kind: 'para', body: 'Nothing requires the radix to be constant. In a **mixed-radix** system, position $i$ has its own radix $r_i$ and the value is $\\sum d_i \\cdot (r_0 r_1 \\cdots r_{i-1})$ — each digit weighted by the product of all lower radices. Everyday time is one: hours, minutes and seconds run on radices $(24, 60, 60)$; pre-decimal British currency ran on $(12, 20)$; and the **factorial number system** (radices $1, 2, 3, 4, \\ldots$) gives every integer in $[0, n!-1]$ a unique numeral — the Lehmer code, used to rank and unrank permutations without division. Conversion in and out of mixed radix is the same division algorithm with a varying divisor, and uniqueness survives: the induction of Section 1.2’s theorem goes through position by position, each position with its own modulus. Mixed radix also waits inside the research frontier — the Chinese remainder theorem reconstructs numbers from residues by computing mixed-radix digits first, and Section 1.6’s BCD is radix 10 living inside radix-16 containers, which is precisely why its correction rule exists.' },
          { kind: 'remark', body: 'The grouping trick of the core section is the polynomial identity $r^i = 2^{ki}$ for $r = 2^k$: one radix-$2^k$ digit is exactly a block of $k$ bits, so grouping bits and looking up the table merely re-brackets the same sum — arithmetic-free conversion, and the reason bases related by powers of two never route through decimal. The identity also explains fashion: octal ($k = 3$) fit the 12- and 36-bit machines whose word lengths divide by three; hexadecimal ($k = 4$) inherited the byte-addressable world whose words divide by four. A shorthand survives exactly when it aligns with the hardware’s grain.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Carry-free arithmetic research',
        blocks: [
          { kind: 'application', heading: 'Residue number systems', body: 'A **residue number system** represents $N$ by the vector of its residues $(N \\bmod m_1, \\ldots, N \\bmod m_k)$ over pairwise coprime moduli. The Chinese remainder theorem makes this a ring isomorphism $\\mathbb{Z}/M \\cong \\mathbb{Z}/m_1 \\times \\cdots \\times \\mathbb{Z}/m_k$ with $M = m_1 m_2 \\cdots m_k$: a bijection onto $[0, M)$ that carries addition and multiplication across channelwise. The payoff is the disappearance of the master’s-tier recurrence: addition is **carry-free** — each channel computes $(x_i + y_i) \\bmod m_i$ knowing nothing of its neighbors, so the linear carry chain of an $n$-bit adder is replaced by $k$ small independent adders, and multiplication parallelizes the same way. Signal processing was the classic customer (FIR filters and FFTs are multiply-accumulate deserts), and modern cryptography returned to it: big-integer back ends for homomorphic encryption decompose huge operands into residue channels to fit hardware. The costs are the mirror image — magnitude comparison, overflow detection and division are global questions that residues hide, answerable only by reconstructing the number through the CRT into a positional or mixed-radix form, the very structure the representation abandoned.' },
          { kind: 'application', heading: 'Redundant signed-digit arithmetic', body: 'Avizienis’s 1961 idea: let digits take the values $\\{-1, 0, 1\\}$ (a **signed-digit** representation). Redundancy — several numerals now name the same integer — is the purchase price of freedom from carry propagation: in signed-digit addition each column’s carry-out depends only on a bounded window of neighbors, so all columns can be evaluated in parallel and an $n$-digit adder’s delay stops growing with $n$, unlike the recurrence of the master’s tier. Redundant forms power the interiors of modern arithmetic: **carry-save** adders (a sum vector plus a shifted carry vector — a redundant representation of the total) fill the Wallace and Dadda trees of Section 1.4’s research tier; **Booth recoding** rewrites the multiplier in a signed-digit form, halving the partial-product count; and **SRT division** — the algorithm inside the Pentium’s flawed divider, in Section 1.5’s research tier — guesses quotient digits from a few high bits precisely because redundancy lets a wrong guess be absorbed later. The bill never goes away: redundant numbers resist comparison and zero detection, the same toll the residue system pays for its independence.' },
        ],
      },
    ],
    readingTime: 8,
    intro: 'Octal and hexadecimal exist for one reason: people cannot read long binary strings without making errors, but machines cannot use anything else. Because 8 and 16 are powers of two, each octal digit is exactly three bits and each hex digit exactly four, and conversion between binary and these bases becomes a mechanical grouping trick — no arithmetic at all. This section drills the grouping trick in both directions and then does hexadecimal arithmetic, including the book’s own $59F + E46$ addition.',
    objectives: [
      'Convert binary to octal and hexadecimal by 3-bit and 4-bit grouping, and back, by table lookup',
      'Convert between decimal and hexadecimal by expansion and by repeated division',
      'Perform hexadecimal addition column by column with carries',
      'Explain why octal and hex are called shorthand notations for binary',
    ],
    concepts: [
      {
        term: 'Octal and hexadecimal notation',
        kind: 'definition',
        statement: 'The **octal** system uses base 8 with digits 0–7; the **hexadecimal** system uses base 16 with digits 0–9 and $A$–$F$ for 10–15. Both serve as compact **shorthand for binary**, because $8 = 2^3$ and $16 = 2^4$.',
        detail: 'A sixteen-bit binary word is sixteen characters long but only four hex characters. Designers in 1979 (and now) annotate memory dumps, addresses, and instruction words in hex for exactly this reason; octal was equally beloved in an era of 12-bit and 36-bit machines, whose word lengths divide nicely by three.',
      },
      {
        term: 'The grouping trick',
        kind: 'method',
        statement: 'To convert **binary to octal**, partition the bits into groups of three starting at the radix point (padding with zeros at the outer ends as needed) and replace each group by its octal digit; for **hexadecimal**, use groups of four. The reverse conversion expands each octal or hex digit into its three- or four-bit pattern.',
        detail: 'Padding rule: add zeros on the left of the integer part and on the right of the fractional part — never inside. The trick is exact because three binary digits range over $000$–$111$ = 0–7, exactly the octal digits, and four range over $0000$–$1111$ = 0–F. It works on both sides of the radix point, but grouping must always start at the point and proceed outward.',
      },
      {
        term: 'Digit conversion table',
        kind: 'notation',
        statement: 'The sixteen rows of the table $0 = 0000$, $1 = 0001$, $2 = 0010$, $3 = 0011$, $4 = 0100$, $5 = 0101$, $6 = 0110$, $7 = 0111$, $8 = 1000$, $9 = 1001$, $A = 1010$, $B = 1011$, $C = 1100$, $D = 1101$, $E = 1110$, $F = 1111$ are the entire conversion machinery between hex and binary; the first eight rows do the same for octal.',
        detail: 'Mano presents this table first (Table 1-1) precisely because grouping plus lookup replaces all arithmetic. Fluency means seeing $1101$ and thinking $D$ without a pause — the table is worth memorizing once and keeping forever.',
      },
      {
        term: 'Decimal–hexadecimal conversion',
        kind: 'method',
        statement: 'Decimal to hex uses **repeated division by 16** (remainders become hex digits), and hex to decimal uses **positional expansion** with weights $16^i$: each hex digit’s decimal value is multiplied by $1, 16, 256, 4096, \\ldots$ as positions move left.',
        detail: 'The expansion is just Section 1.2’s method with $r = 16$, including letter digits translated first: $A = 10$, $B = 11$, $C = 12$, $D = 13$, $E = 14$, $F = 15$. For bases related by powers of two, never go through decimal — group bits instead.',
      },
      {
        term: 'Hexadecimal arithmetic',
        kind: 'method',
        statement: 'Hexadecimal addition proceeds right to left exactly like decimal addition, except that a **carry** is generated when a column sum reaches 16 rather than 10: add the two digits plus the incoming carry, then subtract 16 from any sum of 16 or more and carry 1.',
        detail: 'Subtraction, multiplication and division are defined analogously, but addition is the one needed in practice (it is exactly the operation the adders of Chapter 4 will perform). The complement method of Section 1.4 also applies verbatim with $r = 16$.',
      },
    ],
    examples: [
      {
        title: 'Grouping binary into octal and hex',
        problem: 'Convert $(10110111.1011)_2$ to hexadecimal, and $(1001011.1011)_2$ to octal.',
        steps: [
          { label: 'Step 1: Mark the radix point', text: 'Grouping starts at the point — never at the left end of the string — and proceeds outward both ways.' },
          { label: 'Step 2: Pad for hex', text: 'Integer part $10110111$ already has eight bits, a multiple of four. The fraction $1011$ has four bits, also exact — no padding needed here. For the octal case, $1001011$ needs a leading zero to become $001001011$, and the fraction $1011$ needs two trailing zeros to become $101\\,100$.' },
          { label: 'Step 3: Group and look up (hex)', text: '$1011\\,0111\\,.\\,1011$ reads as $B$, $7$, and $B$ from the table, since $1011 = B$ and $0111 = 7$.' },
          { label: 'Step 4: Group and look up (octal)', text: '$001\\,001\\,011\\,.\\,101\\,100$ reads as $1, 1, 3$ point $5, 4$, since $101 = 5$ and $100 = 4$.' },
          { label: 'Step 5: Reverse check', text: 'Expanding $(B7.B)_{16}$ back: $1011\\,0111.1011$ — the original. Expanding $(113.54)_8$: $001\\,001\\,011.101\\,100$ — the original, zero padding dropped.' },
        ],
        result: '$(10110111.1011)_2 = (B7.B)_{16}$ and $(1001011.1011)_2 = (113.54)_8$ — pure grouping, zero arithmetic.',
      },
      {
        title: 'Decimal and hexadecimal, both directions',
        problem: 'Convert $(2AC5)_{16}$ to decimal, and the decimal 2147 to hexadecimal.',
        steps: [
          { label: 'Step 1: Translate letter digits', text: '$2AC5$ becomes the decimal digit values $2, 10, 12, 5$ with weights $16^3, 16^2, 16^1, 16^0$, that is $4096, 256, 16, 1$.' },
          { label: 'Step 2: Expand', text: '$2 \\cdot 4096 + 10 \\cdot 256 + 12 \\cdot 16 + 5 = 8192 + 2560 + 192 + 5 = 10949$.' },
          { label: 'Step 3: Divide 2147 by 16 repeatedly', text: '$2147 \\div 16 = 134$ remainder $3$; $134 \\div 16 = 8$ remainder $6$; $8 \\div 16 = 0$ remainder $8$.' },
          { label: 'Step 4: Read remainders bottom to top', text: 'The remainders $8, 6, 3$ (last first) give the hex digits.' },
          { label: 'Step 5: Verify by re-expanding', text: '$8 \\cdot 256 + 6 \\cdot 16 + 3 = 2048 + 96 + 3 = 2147$ — the round trip closes.' },
        ],
        result: '$(2AC5)_{16} = 10949$ and $2147 = (863)_{16}$.',
      },
      {
        title: 'Hexadecimal addition with carries',
        problem: 'Add $(59F)_{16} + (E46)_{16}$, the book’s own worked addition.',
        steps: [
          { label: 'Step 1: Units column', text: '$F + 6 = 15 + 6 = 21$. Since $21 \\ge 16$, write $21 - 16 = 5$ and carry 1.' },
          { label: 'Step 2: Sixteens column', text: '$9 + 4 + 1 = 14$, which is less than 16 and needs no carry; write the hex digit for 14, which is $E$.' },
          { label: 'Step 3: Two-hundred-fifty-sixes column', text: '$5 + E = 5 + 14 = 19$. Since $19 \\ge 16$, write $19 - 16 = 3$ and carry 1 into a new fourth position.' },
          { label: 'Step 4: Assemble', text: 'The carried 1 occupies the $16^3$ place, followed by $3$, $E$, $5$.' },
          { label: 'Step 5: Check in decimal', text: '$(59F)_{16} = 1439$ and $(E46)_{16} = 3654$; their sum is $5093$, and indeed $(13E5)_{16} = 1 \\cdot 4096 + 3 \\cdot 256 + 14 \\cdot 16 + 5 = 5093$.' },
        ],
        result: '$(59F)_{16} + (E46)_{16} = (13E5)_{16}$ — every carry rule of decimal addition, with the threshold moved from 10 to 16.',
      },
    ],
    keyTakeaways: [
      'Octal digit = three bits; hex digit = four bits, because $8 = 2^3$ and $16 = 2^4$ — that is the entire reason both bases exist.',
      'Binary to octal/hex: group from the radix point outward, pad with zeros at the outer ends only, then look up each group.',
      'The 16-row table from $0000 = 0$ to $1111 = F$ converts hex to binary instantly and is worth memorizing.',
      'Decimal to hex by repeated division by 16; hex to decimal by expansion with weights $1, 16, 256, 4096, \\ldots$',
      'Hex addition carries when a column reaches 16: the book example $59F + E46 = 13E5$ exercises a carry, a letter digit, and a length growth in three columns.',
      'Between power-of-two bases never route through decimal — grouping is exact and effortless.',
    ],
    quiz: [
      {
        q: 'The binary number $(10110111.1011)_2$ written in hexadecimal is:',
        options: [`$(B7.B)_{16}$`, `$(167.11)_{16}$`, `$(C7.B)_{16}$`, `$(B8.B)_{16}$`],
        answer: 0,
        explanation: 'Groups of four from the point: $1011 = B$, $0111 = 7$, fraction $1011 = B$. Option B converts digit-by-digit instead of by place value, and option C misreads $0111$ as 12.',
      },
      {
        q: 'When grouping binary bits for octal conversion, the correct padding procedure is:',
        options: ['Add zeros in the middle of the string to make groups even', 'Add leading zeros to the integer part and trailing zeros to the fractional part', 'Add trailing zeros to the integer part', 'Truncate any leftover bits'],
        answer: 1,
        explanation: 'Grouping starts at the radix point; leftovers collect at the two outer ends, where extra zeros do not change the value ($0011 = 11$ but $1.01 \\ne 1.1$ in general).',
      },
      {
        q: 'In hex addition, $F + 6$ equals:',
        options: ['15 with no carry', '5 with a carry of 1', `$F5$`, '6 with a carry of $F$'],
        answer: 1,
        explanation: '$F + 6 = 15 + 6 = 21 = 16 + 5$, so the column digit is 5 and 16 is carried — exactly like decimal $9 + 6 = 15$ writing 5 and carrying 1.',
      },
      {
        q: 'The decimal value of $(2AC5)_{16}$ is:',
        options: [`$10949$`, `$8630$`, `$9835$`, `$11275$`],
        answer: 0,
        explanation: '$2 \\cdot 4096 + 10 \\cdot 256 + 12 \\cdot 16 + 5 = 8192 + 2560 + 192 + 5 = 10949$. Remember $A = 10$ and $C = 12$ before multiplying by the place weights.',
      },
      {
        q: 'Why is hexadecimal preferred over octal on modern 8-, 16-, 32- and 64-bit machines?',
        options: ['Hex digits are easier to pronounce', 'Because word lengths are multiples of 4, hex digits line up exactly with nibble boundaries', 'Octal cannot represent fractions', 'Hexadecimal arithmetic has no carries'],
        answer: 1,
        explanation: 'A byte is exactly two hex digits, and every power-of-two word size is a whole number of nibbles; octal groups of three straddle byte boundaries on such machines (it shone on 12/36-bit words).',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.4
  {
    sectionId: 'mano-ch1-s4',
    depth: [
      {
        tier: 'masters',
        title: 'Complement arithmetic as modular algebra',
        blocks: [
          { kind: 'theorem', heading: 'Two’s complement is modular addition', body: 'Let $\\phi(x)$ be the unsigned value of the $n$-bit pattern that two’s-complement encoding assigns to the integer $x$. Then the plain $n$-bit adder, with its carry-out discarded, computes $(\\phi(x) + \\phi(y)) \\bmod 2^n$; and because $\\phi(x) \\equiv x \\pmod{2^n}$ for every representable $x$, the output pattern is the two’s-complement encoding of the true sum $x + y$ whenever that sum is representable. Two’s-complement addition **is** addition in the ring $\\mathbb{Z}/2^n\\mathbb{Z}$; discarding the end carry is the reduction modulo $2^n$, not an approximation or a trick. Restricted to the representatives $\\{-2^{n-1}, \\ldots, 2^{n-1} - 1\\}$, the map $\\phi$ is an isomorphism onto the additive group of the ring — the precise sense in which the encoding and the hardware agree.' },
          { kind: 'proof', body: 'For $x \\ge 0$ the encoding is $x$ itself, so $\\phi(x) = x$. For $x < 0$ the encode rule of the core section — invert, add one — yields the pattern whose unsigned value is $(2^n - 1 - |x|) + 1 = 2^n - |x| = 2^n + x$, so in every case the stored pattern is a representative of the residue class of $x$ modulo $2^n$: $\\phi(x) \\equiv x \\pmod{2^n}$. An $n$-bit adder computes unsigned sums truncated to $n$ bits, which is exactly $(\\phi(x) + \\phi(y)) \\bmod 2^n$, the discarded carry-out removing precisely one factor of $2^n$. Substituting residues, $\\phi(x) + \\phi(y) \\equiv x + y \\pmod{2^n}$, so the output pattern is the unique representative of the class of $x + y$. If $x + y$ lies in $[-2^{n-1}, 2^{n-1}-1]$, that pattern is by definition its two’s-complement encoding — correct, carry or no carry. If $x + y$ lies outside the range, the pattern represents $x + y \\pm 2^n$: the wrap-around the core section calls overflow, which is the modular arithmetic itself, not an arithmetic error. Negation falls out by taking $y = -x$: the pattern assigned to $-x$ is $2^n - \\phi(x)$, which is invert-and-increment.' },
          { kind: 'theorem', heading: 'End-around carry correctness', body: 'One’s-complement addition with the end-around carry computes addition in the ring $\\mathbb{Z}/(2^n - 1)\\mathbb{Z}$: adding $M$ to the one’s complement of $N$ and feeding any end carry back to the low column yields exactly $M - N$ when $M > N$, the all-ones pattern when $M = N$, and the one’s complement of $N - M$ when $M < N$. Returning the carry is a legal reduction because $2^n \\equiv 1 \\pmod{2^n - 1}$: what discarding removes, the end-around adds back, modulo the modulus. The theorem also predicts the format’s wart — the two zeros are the two representatives $0$ and $2^n - 1$ of the single zero residue class.' },
          { kind: 'proof', body: 'The one’s complement of $N$ in $n$ bits is $(2^n - 1) - N$: pure bitwise inversion, because a number and its complement sum to $111\\ldots1_2 = 2^n - 1$ position by position. The raw sum is $S = M + (2^n - 1 - N)$. If $M > N$ then $S \\ge 2^n$: an end carry appears, the wrapped sum is $S - 2^n$, and the returned carry gives $S - 2^n + 1 = M - N$, exact. If $M = N$ then $S = 2^n - 1$: no carry, and the register holds all ones — the negative zero, which is congruent to $0$ modulo $2^n - 1$ as promised. If $M < N$ then $S = 2^n - 1 - (N - M)$: no carry, and the holding is the one’s complement of the magnitude. One round of end-around always suffices, because the largest possible $S$ is $2^{n+1} - 2$, so $S - 2^n + 1 \\le 2^n - 1$ never re-carries. The modular reading assembles the cases: the returned carry converts the operation into addition modulo $2^n - 1$, since replacing $2^n$ by $1$ is reduction under $2^n \\equiv 1$, and the two zero patterns are the two representatives of the one zero class.' },
          { kind: 'application', heading: 'The Internet checksum', body: 'One’s-complement end-around arithmetic runs in every IPv4 header and every TCP and UDP segment: the **Internet checksum** (RFC 1071) treats the data as 16-bit words, computes their one’s-complement sum with the end-around carry, and transmits its complement; a receiver that includes the checksum field in the same sum gets the all-ones pattern — zero modulo $2^{16} - 1$. The choice was deliberate 1981 engineering. The end-around sum is commutative and associative even with the wrap, so words can be accumulated in any order, on any parallel hardware, without changing the result; 16-bit word-order swaps leave the check unchanged; and a router that rewrites one header field, such as the time-to-live, can update the checksum incrementally without rescanning the packet. The known weakness — compensating multi-word errors cancel out — is exactly why modern links and file formats carry CRCs beneath it, the story the research tier of Section 1.6 continues.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Making addition fast: the carry problem',
        blocks: [
          { kind: 'derivation', heading: 'Carry-lookahead in logarithmic depth', body: 'The recurrence’s dependency chain is the enemy. For each bit define **generate** $g_i = x_i y_i$ and **propagate** $p_i = x_i \\oplus y_i$, so that $c_i = g_i + p_i c_{i-1}$. Unrolling, $$c_i = g_i + p_i g_{i-1} + p_i p_{i-1} g_{i-2} + \\cdots + p_i p_{i-1} \\cdots p_0 c_{in},$$ which makes every carry a two-level AND–OR function of the inputs — constant depth, but with gate fan-ins that grow with position and $\\Theta(n^2)$ total gates: flat unrolling does not scale. The escape is that the same combine works at any granularity: a four-bit block has **block-generate** and **block-propagate** $$G = g_3 + p_3 g_2 + p_3 p_2 g_1 + p_3 p_2 p_1 g_0, \\qquad P = p_3 p_2 p_1 p_0,$$ and blocks combine exactly as bits do — the combine operator is associative, so arranging $n$ bits in a tree of $\\lceil \\log_4 n \\rceil$ levels produces all carries in $O(\\log n)$ gate levels with bounded fan-in. The cost is the classic blow-up: **Kogge–Stone** keeps the tree minimal in depth but needs $O(n \\log n)$ wires; **Brent–Kung** needs only linear wiring at the price of extra levels. In modern processes the wires dominate delay and energy — the “fastest” adder is chosen by the wiring budget, not the gate count.' },
          { kind: 'application', heading: 'Wallace trees and Dadda multipliers', body: 'Multiplying two $n$-bit numbers produces $n$ partial products — shifted copies of the multiplicand — that must collapse to two numbers before a final carry-propagate add. A **carry-save adder** is a row of full adders, the hardware of the master’s-tier recurrence, used with its carries *saved* rather than propagated: it consumes three numbers and emits two — the sum vector and a shifted carry vector that together form a redundant representation of the same total. Wallace (1964) piles all the columns into carry-save layers, each reducing the operand count by the factor $3/2$ — roughly $\\lceil \\log_{3/2} n \\rceil$ levels. Dadda (1965) proved the refinement optimal: delay each layer until a column is about to exceed the next height in the sequence $2, 3, 4, 6, 9, 13, \\ldots$, which uses provably the fewest full adders for the same depth. Every CPU’s fused multiply–accumulate unit descends from these trees, with Booth recoding (Section 1.3’s research tier) halving the partial-product count and 4:2 compressors folding layers together. The pattern to notice: redundancy converts a carry problem into a routing problem.' },
          { kind: 'open', heading: 'Approximate computing', body: 'Since about 2012 a research community has asked the inverse of this chapter’s question: if the application tolerates error — machine-learning inference, signal processing, graphics — why spend energy making every carry correct? **Inexact adders** truncate the carry chain in the low columns or let late carries miss the clock edge; voltage and timing margins (the noise-margin budget of Section 1.1’s deeper tier) are deliberately overshot, so “errors” become bounded, mostly low-order bit flips. The measured prize is real: adders and multipliers at lowered voltage save large fractions of their energy with outputs the application cannot distinguish from exact. The open problems are conceptual. What is the right contract — worst-case error distance, mean squared error, or a distribution? Accuracy must compose: an inexact adder inside an iterative solver behaves differently from the same adder in a pixel pipeline, so error bounds must propagate through whole programs, statistically or otherwise. And circuits must expose accuracy as a knob the software stack can trade against energy at run time. The field is numerical analysis re-founded on silicon budgets, and how far it can be pushed before correctness collapses is unresolved.' },
        ],
      },
    ],
    readingTime: 9,
    intro: 'Complements are the trick that lets a machine with only an adder also subtract. For each radix $r$ there are two complements — the r’s complement and the (r−1)’s complement — and each yields a subtraction algorithm built entirely from addition. Mano develops the machinery in decimal (where the 10’s and 9’s complements are familiar) and then applies it to binary, where the 2’s complement becomes the signed arithmetic of every modern processor.',
    objectives: [
      'Form the r’s complement and the (r−1)’s complement of a number in any radix',
      'Subtract using the 10’s/9’s complement algorithms, including the end-around carry',
      'Handle the negative-result case when no carry is produced',
      'Perform binary subtraction with 1’s and 2’s complements and interpret the outcomes',
    ],
    concepts: [
      {
        term: 'The (r−1)’s complement',
        kind: 'definition',
        statement: 'Given a number $N$ with $n$ digits in radix $r$, its **(r−1)’s complement** is $r^{n} - 1 - N$: subtract every digit from $r - 1$. In decimal this is the **9’s complement** (each digit from 9); in binary the **1’s complement**, which is simply bit inversion.',
        detail: 'Example: the 9’s complement of $52500$ is $47499$, digit by digit. In binary, since $r - 1 = 1$, the rule collapses to replacing every 0 by 1 and every 1 by 0 — the NOT operation of Section 1.8 waiting inside arithmetic.',
      },
      {
        term: 'The r’s complement',
        kind: 'definition',
        statement: 'The **r’s complement** of an $n$-digit number $N$ in radix $r$ is $r^{n} - N$, formed practically by taking the (r−1)’s complement and **adding 1**. In decimal it is the 10’s complement; in binary the **2’s complement**.',
        detail: 'Two equivalent recipes: (a) leave the rightmost nonzero digit alone and subtract every digit to its left from $r - 1$; or (b) invert-all then add 1 for binary. The r’s complement of a complement restores the original: the operation is an involution on the nonzero numbers.',
      },
      {
        term: 'Subtraction with the r’s complement',
        kind: 'method',
        statement: 'To compute $M - N$ (both $n$ digits): add $M$ to the r’s complement of $N$. If an **end carry** appears (a carry out of the most significant position), discard it — the answer is positive and correct. If no end carry appears, the answer is $-(r^{n} - \\text{sum})$: take the r’s complement of the sum and prefix a minus sign.',
        detail: 'The end carry is worth $r^{n}$, exactly the value borrowed to form the complement, so discarding it leaves $M + (r^{n} - N) - r^{n} = M - N$. Without the carry, $M - N$ is negative and the machine is holding its complement instead; complementing again recovers the magnitude.',
      },
      {
        term: 'Subtraction with the (r−1)’s complement',
        kind: 'method',
        statement: 'Same setup with the (r−1)’s complement, but a produced end carry is **added back** to the least significant position — the **end-around carry** — and any carry into the most significant position that fails to propagate out is discarded before judging the result.',
        detail: 'The end-around carry exists because $r^{n} - 1 - N$ falls short of $r^{n} - N$ by exactly one; returning the carry supplies that missing unit. Machines of the 1’s-complement era literally wired the carry-out back to the carry-in.',
      },
      {
        term: 'Why complements matter in hardware',
        kind: 'insight',
        statement: 'Complement subtraction converts $M - N$ into **addition with a preprocessed operand**, so one parallel adder (Chapter 4) serves both operations — and if $M$ and $N$ are sign-plus-magnitude signed numbers, the same hardware, applied to the signed 2’s-complement encoding, performs signed addition and subtraction with no extra steps.',
        detail: 'This is the design payoff that made 2’s complement the universal signed format (Section 1.5): the sign bit participates in arithmetic automatically, and the “discard the end carry” rule is exactly what dropping the phantom $2^{n}$ means.',
      },
    ],
    examples: [
      {
        title: 'Decimal subtraction both ways: 72532 − 3250',
        problem: 'Compute $72532 - 3250$ using the 10’s complement, then using the 9’s complement, and confirm both give $69282$.',
        steps: [
          { label: 'Step 1: Equalize digit counts', text: 'Write the subtrahend with five digits: $03250$, so both operands span the same $10^{5}$ range.' },
          { label: 'Step 2: Form the 10’s complement of 03250', text: 'Subtract from $10^{5}$: $100000 - 03250 = 96750$. (Equivalently: 9’s complement $96749$, plus 1.)' },
          { label: 'Step 3: Add and discard the end carry', text: '$72532 + 96750 = 169282$. The leading 1 is an end carry worth $10^{5}$, exactly the borrowed amount — drop it, leaving $69282$.' },
          { label: 'Step 4: Now the 9’s complement', text: 'Subtract each digit of $03250$ from 9: $96749$.' },
          { label: 'Step 5: Add and apply the end-around carry', text: '$72532 + 96749 = 169281$. Detach the end carry 1 and add it back to the low end: $69281 + 1 = 69282$.' },
          { label: 'Step 6: Confirm', text: 'Directly, $72532 - 3250 = 69282$; both complement algorithms agree.' },
        ],
        result: '10’s method: $69282$ after discarding the end carry. 9’s method: $69282$ after the end-around carry. Same answer, two bookkeeping styles — Mano’s flagship complement example.',
      },
      {
        title: 'The no-carry case: when the answer is negative',
        problem: 'Using 10’s complements, compute $3250 - 72532$.',
        steps: [
          { label: 'Step 1: Form the 10’s complement of the subtrahend', text: 'Pad to five digits: $72532 \\to$ complement $= 100000 - 72532 = 27468$.' },
          { label: 'Step 2: Add', text: '$03250 + 27468 = 30718$. No end carry appeared out of the fifth position.' },
          { label: 'Step 3: Interpret', text: 'The absence of an end carry means $M < N$, so the register holds the complement of the answer’s magnitude.' },
          { label: 'Step 4: Recover the magnitude', text: 'Take the 10’s complement of $30718$: $100000 - 30718 = 69282$.' },
        ],
        result: '$3250 - 72532 = -69282$: no end carry signals a negative result, and complementing the sum restores the magnitude. The identical rule governs binary 2’s-complement subtraction.',
      },
      {
        title: 'Binary subtraction with 1’s and 2’s complements',
        problem: 'Given $X = (1010100)_2 = 84$ and $Y = (1000011)_2 = 67$, compute $X - Y$ by both complement methods, then compute $Y - X$ with the 2’s complement.',
        steps: [
          { label: 'Step 1: 2’s complement of Y', text: 'Invert $1000011 \\to 0111100$ and add 1: $(0111100)_2 + 1 = 0111101$. (Check: $128 - 67 = 61 = 0111101$.)' },
          { label: 'Step 2: Add and drop the end carry', text: '$1010100 + 0111101 = (1)0010001$. Discarding the end carry leaves $(0010001)_2 = 17$, and indeed $84 - 67 = 17$.' },
          { label: 'Step 3: 1’s complement of Y', text: 'Invert only: $1000011 \\to 0111100$ (value $124 - 67 = 57$).' },
          { label: 'Step 4: Add and use the end-around carry', text: '$1010100 + 0111100 = (1)0010000$; return the end carry to the low bit: $0010000 + 1 = 0010001 = 17$. Both binary methods agree with the decimal answer.' },
          { label: 'Step 5: Reverse subtraction Y − X', text: '2’s complement of $X = 1010100$: invert $\\to 0101011$, add 1 $\\to 0101100$ (value $128 - 84 = 44$).' },
          { label: 'Step 6: Add and read the negative result', text: '$1000011 + 0101100 = 1101111$ with **no** end carry, so the result is negative: complement $1101111 \\to$ invert $0010000$, add 1 $\\to 0010001 = 17$.' },
        ],
        result: '$X - Y = 0010001$ (17) with a discarded carry; $Y - X = -0010001$ (−17) with no carry, recovered by re-complementing — the complete binary decision table for 2’s-complement subtraction.',
      },
    ],
    keyTakeaways: [
      '(r−1)’s complement: subtract each digit from $r-1$; r’s complement: that, plus one — equivalently $r^{n} - N$.',
      'Binary makes both trivial: the 1’s complement is pure bit inversion, and the 2’s complement is inversion plus a single +1.',
      'r’s-complement subtraction: add; if an end carry appears, discard it (positive result); if not, re-complement and attach a minus sign (negative result).',
      '(r−1)’s-complement subtraction: add, then feed any end carry back into the low position — the end-around carry.',
      'The 10’s/9’s machinery applied to $72532 - 3250$ yields $69282$ either way; applied to $3250 - 72532$ the missing carry correctly signals $-69282$.',
      'Complements exist so that subtraction becomes addition, letting one adder serve both operations — the foundation of signed arithmetic in Section 1.5.',
    ],
    quiz: [
      {
        q: 'The 10’s complement of $03250$ is:',
        options: [`$96750$`, `$96749$`, `$03251$`, `$9750$`],
        answer: 0,
        explanation: '$100000 - 03250 = 96750$. Option B is the 9’s complement — one less — which is the classic slip; adding 1 finishes the 10’s complement.',
      },
      {
        q: 'After adding $M$ to the 9’s complement of $N$, an end carry of 1 appears. What do you do?',
        options: ['Discard it and negate the result', 'Add it back to the least significant digit (end-around carry)', 'Subtract it from the most significant digit', 'It indicates an overflow error'],
        answer: 1,
        explanation: 'The (r−1)’s complement under-shoots the r’s complement by one, so the returning carry supplies the missing unit; discarding it (the r’s-complement rule) would leave the answer short by 1.',
      },
      {
        q: 'Computing $M - N$ with the 2’s complement produces NO end carry. This means:',
        options: ['The result is positive and correct as-is', 'The result is negative; the register holds the 2’s complement of the true magnitude', 'The subtraction overflowed', 'The operands were equal'],
        answer: 1,
        explanation: 'No end carry means the borrowed $2^{n}$ was never repaid, i.e. $M < N$: re-complement the sum and prefix a minus sign to recover the magnitude.',
      },
      {
        q: 'The 1’s complement of $(101100)_2$ is:',
        options: [`$(010100)_2$`, `$(010011)_2$`, `$(101101)_2$`, '$(010011)_2$ plus one'],
        answer: 1,
        explanation: 'The 1’s complement inverts every bit: $101100 \\to 010011$. Option A is the 2’s complement (inversion plus one), and option D describes the same 2’s complement in words.',
      },
    
      // PYQ-pattern: GATE 2017 — 10s complement (rephrased)
      {
        q: "What is the $10$’s complement of $04567$, and how is it obtained?",
        options: ["$54533$, by digit reversal", "$95432$, by $9$’s complement only", "$95433$, by $9$’s complement plus $1$", "$04567$, unchanged"],
        answer: 2,
        explanation: "**Step 1 — Given data:** number $04567$, radix $10$.\n**Step 2 — Rule:** $r$’s complement $=$ $(r-1)$’s complement plus $1$; $9$’s complement subtracts each digit from $9$.\n**Step 3 — Computation:** $9$’s of $04567 = 95432$; plus $1$ gives $95433$.\n**Step 4 — Cross-check:** $04567 + 95433 = 100000$; the sum wraps to zero in $5$ digits, as a complement must.\n**Step 5 — Distractors:** $95432$ stops before the final increment; reversal is not complementation; unchanged ignores the definition.\n**Step 6 — Conclude:** $95433$."
      },
      // PYQ-pattern: ISRO 2018 — 2s complement subtraction (rephrased)
      {
        q: "Compute $25 - 18$ in $8$-bit $2$’s-complement arithmetic. What is the bit result?",
        options: ["$00011001$ ($25$) unchanged", "$11111001$ ($-7$)", "$00000111$ ($7$) with end carry discarded", "$11101110$ ($-18$) only"],
        answer: 2,
        explanation: "**Step 1 — Given data:** $25 = 00011001$, $18 = 00010010$.\n**Step 2 — Rule:** subtract by adding the $2$’s complement: invert bits and add $1$, then add and discard the end carry.\n**Step 3 — Computation:** $-18 = 11101110$; $00011001 + 11101110 = 100000111$; drop the ninth bit → $00000111 = 7$.\n**Step 4 — Cross-check:** $25 - 18 = 7$ in decimal; sign bit $0$ confirms non-negative, and operand signs differed so overflow is impossible.\n**Step 5 — Distractors:** $11111001$ negates the answer; $00011001$ never subtracted; $11101110$ is only the subtrahend’s complement.\n**Step 6 — Conclude:** $00000111$."
      },
      // PYQ-pattern: DRDO 2019 — decimal subtraction by complements (rephrased)
      {
        q: "Compute $3250 - 0376$ using $10$’s-complement addition. What is the result?",
        options: ["$12874$, keeping the carry", "$3626$, by direct addition", "$9624$, the complement itself", "$2874$, after dropping the end carry from $12874$"],
        answer: 3,
        explanation: "**Step 1 — Given data:** minuend $3250$, subtrahend $0376$.\n**Step 2 — Rule:** form the $10$’s complement of the subtrahend ($9$’s plus $1$), add, discard the end carry when the minuend is larger.\n**Step 3 — Computation:** $9$’s of $0376 = 9623$; $10$’s $= 9624$; $3250 + 9624 = 12874$; drop carry → $2874$.\n**Step 4 — Cross-check:** $3250 - 0376 = 2874$ directly; the dropped carry signals a non-negative result.\n**Step 5 — Distractors:** $3626$ adds instead of complementing; $9624$ stops at the complement; $12874$ keeps a carry that must go.\n**Step 6 — Conclude:** $2874$."
      }
    ],
  },

  // ------------------------------------------------------------------ 1.5
  {
    sectionId: 'mano-ch1-s5',
    depth: [
      {
        tier: 'masters',
        title: 'The algebra of signed encodings',
        blocks: [
          { kind: 'para', body: 'Set the three systems side by side on three axes. **Range**: sign-magnitude and one’s complement each span $\\pm(2^{n-1}-1)$ with two zeros apiece; two’s complement spans $[-2^{n-1},\\ 2^{n-1}-1]$ with one zero — of the $2^n$ patterns, zero consumes exactly one, leaving an odd remainder whose extra unit is assigned to $-2^{n-1}$. **Zero**: uniqueness is not cosmetic. Every comparison against zero, every loop-exit test, and every equality check must otherwise accept two encodings of “nothing”; one’s-complement machines such as the CDC 6600 paid that bill for a decade. **Adder complexity**: sign-magnitude addition demands sign comparison, magnitude compare-and-swap, possible complementation, and re-signing — essentially a conditional add-or-subtract plus correction logic; one’s complement reuses the plain adder but adds the end-around carry path, an extra cycle whenever the carry appears; two’s complement needs the plain unsigned adder and nothing else, with subtraction sharing the same hardware through one invert-and-increment. On this accounting the format war’s outcome is arithmetically inevitable: two’s complement buys total reuse of unsigned hardware at the price of one un-negatable endpoint, and that is the cheapest bill any signed format has ever offered.' },
          { kind: 'derivation', heading: 'Why complement plus one negates', body: 'For a pattern $x$ with $0 \\le x \\le 2^n - 1$, the two’s-complement encoding of $-x$ must be the representative of $-x$ modulo $2^n$, namely $2^n - x$. Split the difference: $$2^n - x = (2^n - 1 - x) + 1.$$ The middle term is the bit inversion: a number and its bitwise complement sum to $111\\ldots1_2 = 2^n - 1$, because every bit position pairs a $0$ with a $1$. Hence the hardware recipe — invert, then add one — is an identity, not a heuristic: $\\text{NOT}(x) + 1 \\equiv -x \\pmod{2^n}$. Two consequences fall out. The operation is an involution: complementing twice returns $x$, since $2^n - (2^n - x) = x$ — the core section’s observation that the complement of a complement restores the number. And the map has exactly one fixed point: for the pattern $2^{n-1}$, the encoding of $-2^{n-1}$, invert-and-add-one returns it unchanged — the most negative value is its own negation, which is why negation of the range endpoint overflows even when addition would not.' },
          { kind: 'theorem', heading: 'Overflow detected by carry XOR', body: 'In $n$-bit two’s-complement addition, let $c_{n-1}$ be the carry into the sign column and $c_n$ the carry out of it. Then signed overflow occurs **exactly when** $V = c_{n-1} \\oplus c_n$: a single XOR gate over the two carries is a complete detector. Equivalently, overflow occurs exactly when both operands share a sign and the result carries the opposite sign, and never when operand signs differ. The core section’s paired examples behave as the theorem demands: $70 + 80$ and $-70 + (-80)$ trip the detector, while $49 + (-29)$ cannot.' },
          { kind: 'proof', body: 'The sign column is an ordinary full adder: its sum bit is $s = a_{n-1} \\oplus b_{n-1} \\oplus c_{n-1}$ and its carry-out is $c_n = a_{n-1} b_{n-1} + (a_{n-1} \\oplus b_{n-1}) c_{n-1}$ — generate or propagate, the same equation the lookahead derivation uses. Case 1, mixed signs: the true sum lies between the operands, hence in range, so no overflow; and the carry formula collapses to $c_n = c_{n-1}$, so $V = 0$ always — the benign end carry of the $49 + (-29)$ example is exactly this case, and the detector ignores it structurally. Case 2, equal signs $\\sigma = a_{n-1} = b_{n-1}$: the sum bit is $s = \\sigma \\oplus \\sigma \\oplus c_{n-1} = c_{n-1}$, while the carry-out is $c_n = \\sigma \\cdot \\sigma + 0 = \\sigma$. The result’s sign therefore equals the carry *into* the sign column, and the outgoing carry equals the operands’ sign; overflow — a result sign opposite the operands’ — happens exactly when these two disagree, that is, when $c_{n-1} \\ne c_n$. Combining the cases: overflow iff $c_{n-1} \\oplus c_n$, with mixed-sign pairs contributing $0$ to the XOR for structural reasons, not luck. The carries the adder already computes are the complete witness; no extra arithmetic is needed.' },
          { kind: 'example', heading: 'Sign extension and truncation', body: 'Widen the 8-bit encodings of $\\pm 9$ to 16 bits. The value $+9 = 00001001$ zero-extends to $0000000000001001$; the value $-9 = 11110111$ sign-extends to $1111111111110111$ — the sign bit is **replicated** into every new high position. Why replication is forced: an $m$-bit pattern whose low $n$ bits are the original word agrees with it modulo $2^n$, and among all patterns agreeing on the low bits exactly one lies in the $m$-bit signed range — the one whose high bits all equal the sign, since any other choice places the value outside $[-2^{m-1}, 2^{m-1}-1]$ or changes the integer entirely. Zero-extension is the special case that works only for nonnegative values, for which the sign bit is $0$ anyway. Truncation runs the other way with no such guarantee: keeping the low $n$ bits computes the value modulo $2^n$ (the first theorem of Section 1.4’s deeper tier), so narrowing is exact only for values already inside the smaller range — the classic silent corruption when a wide counter is stored into a narrow register.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Verifying arithmetic: from logic to lawsuits',
        blocks: [
          { kind: 'application', heading: 'SAT-based equivalence checking', body: 'Industrial flows never trust synthesis: after place and route, the netlist must be proved equivalent to the register-transfer source. **Combinational equivalence checking** builds a miter — the same inputs feed both circuits, corresponding outputs are XORed, and the OR of all the XORs is a signal that must never be $1$; a SAT solver that reports the resulting formula unsatisfiable has proved the circuits identical on every input. The adders of this chapter fall easily: ripple against carry-lookahead, or either against the modular specification of Section 1.4’s deeper tier, are decided in seconds by conflict-driven solvers. Multiplication is the notorious holdout: Bryant proved that integer multiplication requires exponentially large binary decision diagrams under every variable ordering (Section 1.8’s research tier), and known results show resolution-based SAT proofs of multiplier equivalence can be exponential as well. Verification therefore moved to algebra: modern tools verify multipliers by Gröbner-basis and word-level polynomial reasoning over $\\mathbb{Z}/2^n\\mathbb{Z}$ — literally the ring of the master’s tier — turning the gate network into a polynomial system and deciding ideal membership. Arithmetic circuits are the rare domain where hardware verification is mathematics rather than testing.' },
          { kind: 'remark', heading: 'The Pentium FDIV bug', body: 'In 1994 Thomas Nicely, computing sums of reciprocals of twin primes, noticed his new Pentium’s divisions disagreeing with a 486. The cause: the chip’s radix-4 SRT divider consulted a lookup table in which five of 2048 entries had never been filled in — roughly a one-in-nine-billion fault for random operands, catastrophic for scientific computing. Intel’s replacement program cost about 475 million dollars, and the episode remains the standard cautionary tale for this chapter. The bug was invisible to simulation at practical coverage; it would have fallen to a formal proof that every table entry satisfies the division recurrence — and SRT is precisely the redundant signed-digit digit-recurrence arithmetic of Section 1.3’s research tier, where a missing entry is an illegal digit. After 1994, formal verification of floating-point units stopped being a luxury.' },
        ],
      },
    ],
    readingTime: 9,
    intro: 'Signed numbers attach meaning to the leading bit. Three conventions — sign-magnitude, 1’s complement, and 2’s complement — all encode a sign and a magnitude into $n$ bits, but they differ radically in how convenient the arithmetic is. This section tabulates all three for the book’s ±9 examples, derives their ranges, and works signed addition and subtraction with the two overflow cases every designer must recognize on sight.',
    objectives: [
      'Represent positive and negative integers in sign-magnitude, 1’s and 2’s complement',
      'State the numeric range of each representation for $n$ bits and explain why 2’s complement is asymmetric',
      'Add and subtract signed 2’s-complement numbers, discarding end carries correctly',
      'Detect overflow in signed addition and explain why it cannot occur for mixed-sign operands',
    ],
    concepts: [
      {
        term: 'Sign-magnitude representation',
        kind: 'definition',
        statement: 'In **sign-magnitude**, the most significant bit is the sign (0 for +, 1 for −) and the remaining $n - 1$ bits are the magnitude: for 8 bits, $+9 = 00001001$ and $-9 = 10001001$. The range is $-(2^{n-1} - 1)$ to $+(2^{n-1} - 1)$, with **two zeros** (+0 and −0).',
        detail: 'Sign-magnitude matches human notation and is used for floating-point mantissas, but ordinary addition fails: adding the sign bits requires special logic, and the sign-magnitude sum of two same-sign numbers is not formed by plain binary addition.',
      },
      {
        term: '1’s complement representation',
        kind: 'definition',
        statement: 'The **1’s complement** of a negative number inverts all bits of its positive form: $-9$ in 8 bits is $11110110$. Its range is also $-(2^{n-1} - 1)$ to $+(2^{n-1} - 1)$ with two zeros ($00000000$ and $11111111$), and subtraction reuses the end-around-carry rule of Section 1.4.',
        detail: 'Historically attractive because negation is a single row of inverters, it lost to 2’s complement because of the double zero (a value the hardware must treat specially) and the end-around carry (an extra adder cycle when it occurs).',
      },
      {
        term: '2’s complement representation',
        kind: 'definition',
        statement: 'The **2’s complement** of a negative number is its positive form inverted plus 1: $-9$ in 8 bits is $11110111$. For $n$ bits the range is **asymmetric**: $-2^{n-1}$ to $+2^{n-1} - 1$, that is $-128$ to $+127$ in 8 bits, with exactly one zero.',
        detail: 'The asymmetry exists because zero’s encoding is unique, freeing one extra pattern — the most negative value $10000000$ (−128) — with no positive partner. Its arithmetic advantage is total: addition and subtraction of signed numbers are performed by the plain binary adder of Section 1.4, with the sign bit carried along as an ordinary bit.',
      },
      {
        term: 'The three representations side by side',
        kind: 'notation',
        statement: 'For $n = 8$ bits with the value 9: $+9 = 00001001$ in all systems; $-9 = 10001001$ (sign-magnitude), $11110110$ (1’s complement), $11110111$ (2’s complement) — and the ranges are $\\pm 127$, $\\pm 127$, and $-128$ to $+127$ respectively.',
        detail: 'The three encodings of −9 sit exactly where their definitions put them: sign-magnitude flips only the top bit, 1’s complement all eight bits, 2’s complement all eight plus one. Note $-128$ exists **only** in 2’s complement, and $+128$ exists in none of them.',
      },
      {
        term: 'Signed addition in 2’s complement',
        kind: 'method',
        statement: 'To add signed 2’s-complement numbers, **add them as plain binary numbers and discard any carry out of the sign position**. If both operands have the same sign and the result has the opposite sign, **overflow** has occurred and the answer is wrong.',
        detail: 'When operand signs differ, overflow is impossible — the true sum lies between the operands, hence inside the range. When they match, the sum can overshoot the representable interval, and the 2’s-complement wrap-around makes a positive pair produce a negative-looking bit pattern (and vice versa). The carry into the sign position differing from the carry out of it is the gate-level overflow detector.',
      },
      {
        term: 'Subtraction as addition of the negation',
        kind: 'method',
        statement: '$M - N$ is computed by adding $M$ to the 2’s complement of $N$ and discarding the end carry — so **the same unsigned adder performs signed addition and subtraction** with a single invert-and-increment in the operand path (the mode-controlled circuit of Chapter 4).',
        detail: 'This is the design punchline of the whole complement story: sign-magnitude and 1’s complement machines need correction logic; a 2’s complement machine needs none. It is why every modern processor’s ALU (and the Int8Array of JavaScript’s typed arrays, Flanagan Chapter 11) stores signed integers in 2’s complement.',
      },
    ],
    examples: [
      {
        title: 'Encoding +9 and −9 three ways',
        problem: 'Write +9 and −9 in 8-bit sign-magnitude, 1’s complement and 2’s complement.',
        steps: [
          { label: 'Step 1: The positive form', text: '$9 = 00001001$ — identical in all three systems, since all reserve the top bit and keep positive values as plain binary.' },
          { label: 'Step 2: Sign-magnitude', text: 'Set the sign bit: $-9 = 10001001$; the lower seven bits $0001001$ still read as nine.' },
          { label: 'Step 3: 1’s complement', text: 'Invert all eight bits of $00001001$: $-9 = 11110110$.' },
          { label: 'Step 4: 2’s complement', text: 'Invert and add 1: $11110110 + 1 = 11110111$.' },
          { label: 'Step 5: Sanity check by value', text: 'Reading $11110111$ as a signed number: $-(00001001) = -9$ after complementing — the stored pattern complements back to the magnitude, as required.' },
        ],
        result: '+9 is 00001001 everywhere; −9 is 10001001, 11110110, 11110111 in sign-magnitude, 1’s and 2’s complement respectively.',
      },
      {
        title: 'Overflow in signed addition: the book’s 70 + 80',
        problem: 'In 8-bit 2’s complement, add $(+70) + (+80)$ and $(-70) + (-80)$, and decide in each case whether the result is valid.',
        steps: [
          { label: 'Step 1: Encode +70 and +80', text: '$+70 = 01000110$ and $+80 = 01010000$ — both positive (sign bit 0), both within $[-128, +127]$.' },
          { label: 'Step 2: Add the positives', text: '$01000110 + 01010000 = 10010110$. The sign bit of the result is 1, but two positive operands were added — a negative sum from positive operands is impossible.' },
          { label: 'Step 3: Verify the corruption', text: '$10010110$ as 2’s complement is $-(01101010) = -106$, yet $70 + 80 = 150 > 127$. The true answer escaped the 8-bit range and wrapped around.' },
          { label: 'Step 4: Encode −70 and −80', text: 'Invert and add 1: $-70 = 10111010$, $-80 = 10110000$.' },
          { label: 'Step 5: Add the negatives', text: '$10111010 + 10110000 = (1)01101010$; discarding the end carry leaves $01101010 = +106$ — a positive result from two negative operands, equally impossible.' },
          { label: 'Step 6: State the rule', text: 'Overflow occurred exactly when the operands shared a sign and the result did not; both cases trip it, and both are detectable as the carry into the sign bit differing from the carry out.' },
        ],
        result: '$70 + 80$ gives the erroneous $-106$ and $-70 + (-80)$ gives the erroneous $+106$: both are textbook overflow, flagged by the same-sign/opposite-sign test.',
      },
      {
        title: 'Mixed signs never overflow: (+49) + (−29)',
        problem: 'Add $(+49) + (-29)$ in 8-bit 2’s complement and show the end-carry rule works even when a carry appears.',
        steps: [
          { label: 'Step 1: Encode the operands', text: '$+49 = 00110001$; $-29$ = invert of $00011101$ is $11100010$, plus 1 gives $11100011$.' },
          { label: 'Step 2: Add as plain binary', text: '$00110001 + 11100011 = (1)00010100$.' },
          { label: 'Step 3: Discard the end carry', text: 'Drop the leading 1 (worth $2^{8} = 256$, borrowed when the complement was formed): the result is $00010100$.' },
          { label: 'Step 4: Read and verify', text: '$00010100 = 20$, and indeed $49 - 29 = 20$. The carry out of the sign position here is harmless bookkeeping, not overflow.' },
          { label: 'Step 5: Note the overflow test', text: 'Carry **into** the sign bit and carry **out** of it agree (both 1), so the overflow flag stays clear — contrast the disagreeing carries of the 70 + 80 example.' },
        ],
        result: '$(+49) + (-29) = 00010100 = +20$ with the end carry discarded: mixed-sign addition is always safe, and the agree/disagree carry test separates the benign case from true overflow.',
      },
    ],
    keyTakeaways: [
      'Sign-magnitude: sign bit plus $n - 1$ magnitude bits, two zeros, range $\\pm(2^{n-1} - 1)$.',
      '1’s complement: bitwise inversion of the positive form, two zeros, end-around-carry subtraction.',
      '2’s complement: inversion plus one, single zero, asymmetric range $-2^{n-1}$ to $2^{n-1} - 1$ — the system every modern ALU uses.',
      'Signed 2’s-complement addition is plain binary addition with the end carry discarded; the sign bit is just another bit.',
      'Overflow is possible only for same-sign operands, and it is detected when the result’s sign disagrees with theirs (equivalently, the carry into and out of the sign position differ).',
      'The book’s paired examples: $70 + 80 \\to -106$ and $-70 + (-80) \\to +106$ (both overflow), versus $49 + (-29) \\to 20$ (never overflow).',
    ],
    quiz: [
      {
        q: 'The 8-bit 2’s complement representation of $-9$ is:',
        options: [`$10001001$`, `$11110110$`, `$11110111$`, `$00001001$`],
        answer: 2,
        explanation: 'Invert $00001001 \\to 11110110$, then add 1 to get $11110111$. Option A is sign-magnitude and option B is the 1’s complement.',
      },
      {
        q: 'Why does the 2’s-complement range include one more negative value than positive values?',
        options: ['Because the sign bit doubles the magnitude', 'Because zero has a single encoding, leaving one unused pattern, which is assigned to $-2^{n-1}$', 'Because negative numbers are more common', 'It doesn’t; the range is symmetric'],
        answer: 1,
        explanation: 'Of the $2^{n}$ patterns, zero consumes one, leaving an odd count to split; the extra pattern $100\\ldots0$ becomes $-2^{n-1}$, with no positive $+2^{n-1}$ to pair with.',
      },
      {
        q: 'In 8-bit 2’s complement, $01000110 + 01010000 = 10010110$. What happened?',
        options: ['The result, −106, is correct', 'Overflow: two positives produced a negative-pattern result', 'A borrow error that the end-around carry fixes', 'Nothing; the carry should be kept'],
        answer: 1,
        explanation: 'Two positive operands (70 and 80) cannot sum to a negative value; the true sum 150 exceeds $+127$, and the 2’s-complement wraparound shows it as $-106$. This is the classic overflow signature.',
      },
      {
        q: 'Adding a positive and a negative 2’s-complement number:',
        options: ['Can overflow only when the positive number is larger', 'Can never overflow, because the true sum lies between the operands', 'Always discards two carries', 'Requires converting to sign-magnitude first'],
        answer: 1,
        explanation: 'The sum of a value in $[-128, 0)$ and one in $[0, 127]$ lies in $[-128, 127]$ — inside the range by construction, so overflow detection logic only matters for same-sign pairs.',
      },
      {
        q: 'Which pair of carries detects overflow in a single signed adder?',
        options: ['Carry into bit 0 and out of bit 0', 'Carry into the sign bit versus carry out of the sign bit', 'The two end-around carries', 'Borrow-in and borrow-out of the ALU'],
        answer: 1,
        explanation: 'Overflow equals the exclusive-OR of the carry entering the sign position and the carry leaving it; when they differ, the sign bit was manufactured by wraparound rather than by genuine magnitude.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.6
  {
    sectionId: 'mano-ch1-s6',
    depth: [
      {
        tier: 'masters',
        title: 'The geometry of binary codes',
        blocks: [
          { kind: 'theorem', heading: 'Parity is a distance-2 code', body: 'Define the **Hamming distance** $d(u, v)$ between two equal-length words as the number of positions in which they differ — equivalently the number of $1$s in $u \\oplus v$, that word’s **weight**. This is a genuine metric: $d(u, v) \\le d(u, w) + d(w, v)$, because a bit flipped twice cancels, which is the subadditivity of weight under $\\oplus$; with a metric in hand, “nearest codeword” is well defined. Let $d_{min}$ be a code’s minimum distance over all distinct codeword pairs. Then a code detects every error pattern of weight less than $d_{min}$; and if $d_{min} = 2t + 1$, returning the nearest codeword corrects every error pattern of weight at most $t$. The even-parity code of the core section has $d_{min} = 2$: it detects every single-bit error (indeed every odd number of flips) but locates nothing, and every even number of flips passes it silently.' },
          { kind: 'proof', body: 'Detection: if codeword $c$ is sent and an error $e$ of weight $w(e) < d_{min}$ corrupts it, the received word $r = c \\oplus e$ cannot itself be a codeword — were $r = c′$, then $d(c, c′) = w(e) < d_{min}$, contradicting minimality. So the receiver can always tell that something happened, though not what: the received word lies outside the code. Correction with $d_{min} = 2t + 1$: if $w(e) \\le t$ and some other codeword $c′$ also lay within distance $t$ of $r$, the triangle inequality would give $d(c, c′) \\le d(c, r) + d(r, c′) \\le 2t < 2t + 1$, impossible — so the nearest codeword is unique and is the one sent. For even parity concretely: every codeword has even weight, and flipping one bit changes the weight by exactly one, to odd, so the parity count fails on any single flip; two flips restore evenness and pass silently, exactly as the bound predicts.' },
          { kind: 'derivation', heading: 'Why BCD adds six', body: 'A BCD digit is a value modulo 10 living in a 4-bit container that counts modulo 16; the six patterns $1010$ through $1111$ are the dead zone between the two carry thresholds. Let $s$ be a column’s raw 4-bit sum, including any incoming carry, so $s \\in [0, 19]$. If $s \\le 9$ the column is done: digit $s$, carry $0$. If $s \\ge 10$, add $0110_2 = 6$. The arithmetic, both sub-cases at once: for $10 \\le s \\le 15$, the corrected sum $s + 6$ lies in $[16, 21]$, so the nibble holds $s + 6 - 16 = s - 10$ with a carry of $1$; for $16 \\le s \\le 19$, $s + 6$ lies in $[22, 25]$, and $s + 6 - 16 = s - 10$ again with a carry of $1$. Both regimes obey one law, $$\\text{digit} = s \\bmod 10, \\qquad \\text{carry} = \\lfloor s / 10 \\rfloor,$$ so **adding 6 moves the carry threshold from 16 down to 10** — the mod-16 container is made to carry exactly when the mod-10 digit overflows. The magic number is container modulus minus code modulus, $16 - 10$, and the same skip-the-gap rule builds correct arithmetic for any code with unused patterns; excess-3 corrects by a different constant for the same structural reason.' },
          { kind: 'theorem', heading: 'Gray codes change one bit per step', body: 'The reflected construction of the core section lists all $2^n$ patterns so that consecutive values differ in exactly one bit position — and, stronger, the last and first also differ in exactly one bit, making the ordering a **cyclic** Gray code. Formally: from an $n$-bit cyclic Gray sequence $G_n$, construct $G_{n+1}$ as the first half $0w$ for each word $w$ of $G_n$ in order, followed by the second half $1w$ for each word $w$ of the reversed $G_n$; the theorem is that $G_{n+1}$ is again a cyclic Gray sequence. The base case is immediate: the one-bit sequence $(0, 1)$ changes one bit per step, and its last and first words differ in that bit.' },
          { kind: 'proof', body: 'Induction on $n$, with the hypothesis that $G_n$ is cyclic — adjacent pairs differ in one bit, and the wrap pair does too. Within the first half of $G_{n+1}$, consecutive words share the prefix $0$ and differ exactly where their suffixes from $G_n$ differ, one bit; the second half is the reversed $G_n$ prefixed by $1$, and reversal changes no adjacency. Only the two seams are new pairs. The middle seam: the first half ends at $0\\lambda$, where $\\lambda$ is the last word of $G_n$, and the second half begins with $1\\lambda$, because reversal brings the last word of $G_n$ to the front — same suffix, one new bit. The wrap seam: the second half ends at $1\\phi$, where $\\phi$ is the first word of $G_n$ (reversal moves it to the end), and the cycle returns to the first word of the first half, $0\\phi$ — again exactly one bit. Geometrically, the $n$-cube — vertices are the words, edges join words differing in one bit — is two $(n-1)$-cubes joined by a perfect matching, and the reflected sequence threads a **Hamiltonian cycle** through it, visiting every vertex exactly once before returning. That is why a shaft encoder straddling a boundary reads one of the two adjacent positions and never a spurious distant value.' },
        ],
      },
      {
        tier: 'phd',
        title: 'From parity to Shannon’s limit',
        blocks: [
          { kind: 'derivation', heading: 'Hamming codes and the packing bound', body: 'To correct $t$ errors, surround each of the $2^k$ codewords with its ball of radius $t$: the set of words within distance $t$, of size $\\sum_{j \\le t} \\binom{n}{j}$. Balls around different codewords cannot overlap — a word within $t$ of two codewords would force their distance to at most $2t$ against $d_{min} = 2t + 1$ — so counting the whole space yields the **sphere-packing bound**, $$2^k \\sum_{j=0}^{t} \\binom{n}{j} \\le 2^n.$$ For single-error correction this reads $2^k (1 + n) \\le 2^n$, that is, $n - k \\ge \\lceil \\log_2 (n+1) \\rceil$ parity bits. Hamming’s 1950 $(7, 4)$ code meets the bound with **equality** — $2^4 (1 + 7) = 128 = 2^7$ — the balls tile the space exactly, a **perfect code**. Its trick: place the check bits at positions $1, 2, 4$, each covering the positions whose binary index contains that bit, so the failing checks, read as a binary number, name the position of the flipped bit — the syndrome is the address of the error, detection and correction in one step. Perfect codes are freakishly rare: essentially the Hamming family, the two Golay codes, and little else, so real codes leave packing slack and spend it on rate or decoder simplicity.' },
          { kind: 'application', heading: 'LDPC and turbo codes', body: 'Shannon’s 1948 theorem promised reliable communication at any rate below channel capacity, but proved it with random codes nobody could decode. Closing the gap took two shocks. **Turbo codes** (Berrou, Glavieux and Thitimajshima, 1993) concatenated two convolutional encoders and decoded them iteratively, passing soft reliability values back and forth until the decoders agreed — landing within half a decibel of the Shannon limit; the reception was open disbelief before independent verification. **LDPC codes** — Gallager’s 1961 dissertation, ignored for three decades — define the code by a sparse parity-check matrix; decoding is **belief propagation** on the matrix’s bipartite Tanner graph, a distributed cousin of recomputing the parity checks of Section 1.6, and with long blocks LDPC essentially touches capacity. They now run in 5G, Wi-Fi and satellite broadcasting, and inside every QLC flash controller — the sixteen-level cells of Section 1.1’s research tier are unusable without them. The chapter’s single parity bit, grown into a sparse web of parity checks, is what pays for multilevel storage.' },
          { kind: 'open', heading: 'Finite-length and structured codes', body: 'The asymptotic questions are largely settled, so the frontier moved to finite lengths and structure. **Finite blocklength**: at a fixed error probability, how much rate must be sacrificed at a given length — the dispersion-type bounds of finite-blocklength information theory quantify the gap to capacity that asymptotics hide, and code designers now optimize inside that gap for short packets and ultra-reliable traffic. **Polar codes** (Arikan, 2009) — the first explicit codes proven to achieve capacity with efficient decoding — won the 5G control channel, yet still trail LDPC at short lengths, where their finite-length behavior is only partly understood. Deeper open threads: locally repairable codes for distributed storage, whose repair-bandwidth versus rate trade-offs gained nontrivial bounds only recently; coding for interactive and distributed computation; and quantum LDPC codes, where asymptotically good constructions appeared only in 2021–22 after decades of trying. The parity bit of Section 1.6 keeps acquiring research descendants, and none of the descendant problems is closed.' },
        ],
      },
    ],
    readingTime: 10,
    intro: 'Numbers are only one of the things a machine must encode. A binary code assigns bit patterns to symbols — decimal digits, letters, positions on a shaft — and each code is chosen for what it makes easy: BCD for decimal display, excess-3 for self-complementing arithmetic, Gray for glitch-free position sensing, ASCII for text, parity for error detection. This section works each code, including the add-6 correction rule that makes BCD addition function.',
    objectives: [
      'Encode decimal digits in BCD and perform BCD addition with the +6 correction',
      'Explain the excess-3 code and demonstrate its self-complementing property',
      'Convert between binary and Gray code in both directions',
      'Describe ASCII encoding and attach even or odd parity bits',
    ],
    concepts: [
      {
        term: 'Binary-coded decimal (BCD)',
        kind: 'definition',
        statement: '**BCD** encodes each decimal digit in four bits using its binary value 0000–1001; the six patterns 1010–1111 are **never used**. A $k$-digit decimal number becomes $4k$ bits: $396 = 0011\\,1001\\,0110$.',
        detail: 'BCD is not binary: twelve encodes as $0001\\,0010$ (“one, two”) in BCD but as $1100$ in binary. It costs about twenty percent more bits, and it buys back trivial decimal display and exact decimal fractions (each decimal digit rounds independently) — the standard choice in calculators, clocks and digital meters.',
      },
      {
        term: 'BCD addition and the +6 correction',
        kind: 'method',
        statement: 'Add BCD digits with ordinary 4-bit binary addition; **if a digit sum exceeds 9 (or generates a carry out), add $0110_2 = 6$ to that digit**, which skips over the six unused patterns and produces the correct decimal digit plus the carry into the next position.',
        detail: 'The six skipped patterns mean a 4-bit BCD column has ten values but sixteen patterns; a binary sum from 10 to 15 lands on an illegal pattern, and a sum of 16 or more carries too early — in both cases the missing six must be injected. Each correction carries naturally into the next decimal digit, so multi-digit addition cascades correctly.',
      },
      {
        term: 'Excess-3 code',
        kind: 'definition',
        statement: '**Excess-3** encodes decimal digit $d$ as the 4-bit binary of $d + 3$: zero is $0011$, nine is $1100$. It is a **non-weighted, self-complementing** code: the 1’s complement of a digit’s excess-3 pattern is the excess-3 pattern of $9 - d$.',
        detail: 'Example: 4 encodes as $0111$; inverting gives $1000$, which is excess-3 for 5, and $9 - 4 = 5$. This means 9’s-complement subtraction (Section 1.4) is a row of inverters in excess-3 — the property that made it attractive for decimal machines — and every pattern has at least two 1s, which helped detect certain hardware faults.',
      },
      {
        term: 'Gray code',
        kind: 'definition',
        statement: 'The **Gray code** is a **reflected, unit-distance** ordering of the $2^{n}$ patterns in which successive values differ in exactly **one bit**: $000, 001, 011, 010, 110, 111, 101, 100$ for three bits.',
        detail: 'Because only one bit flips per step, a shaft-position encoder built in Gray code cannot momentarily report a wildly wrong angle: compare binary 011 → 100 (all three bits flip at once; any skew reads 000 through 111 in between) with Gray 010 → 110 (one bit flips; the worst transient is one step off). The price is that Gray is not weighted — arithmetic requires converting to binary first.',
      },
      {
        term: 'Binary ↔ Gray conversion',
        kind: 'method',
        statement: 'Binary to Gray: the most significant Gray bit equals the most significant binary bit, and each next Gray bit is the **exclusive-OR of adjacent binary bits**: $G_i = B_{i+1} \\oplus B_i$. Gray to binary: the most significant binary bit equals that of Gray, and each next binary bit is the **exclusive-OR of the Gray bit with the already-decoded binary bit to its left**: $B_i = B_{i+1} \\oplus G_i$.',
        detail: 'These chains of XOR gates — one gate per bit — are among the first combinational circuits whose design the book fully works out (and reappears as the Chapter 4 BCD-to-Gray converter). The conversions are mutual inverses, so a round trip must reproduce the original word.',
      },
      {
        term: 'ASCII and parity',
        kind: 'notation',
        statement: '**ASCII** is a **7-bit alphanumeric code** covering $2^{7} = 128$ characters: uppercase A is $1000001$, lowercase a is $1100001$, digits 0–9 are $0110000$ through $0111001$. An eighth **parity bit** is appended so that the total number of 1s is even (**even parity**) or odd (**odd parity**), enabling single-bit error detection.',
        detail: 'For character A = $1000001$ (two 1s), even parity appends 0 giving $01000001$; odd parity appends 1 giving $11000001$. A receiver recounting the 1s spots any single flipped bit. Parity detects (but cannot locate) odd numbers of bit errors — the simplest member of the error-detecting code family.',
      },
    ],
    examples: [
      {
        title: 'BCD addition with the +6 correction',
        problem: 'Add the BCD numbers for 27 and 58, showing every correction, and verify the decimal answer 85.',
        steps: [
          { label: 'Step 1: Encode both operands', text: '$27 = 0010\\,0111$ and $58 = 0101\\,1000$ in BCD, two digits each.' },
          { label: 'Step 2: Add the units digits', text: '$0111 + 1000 = 1111$ — binary fifteen, which is **illegal** in BCD (only 0000–1001 are permitted).' },
          { label: 'Step 3: Apply the correction', text: 'Since the sum exceeds 9, add $0110$: $1111 + 0110 = 1\\,0101$. The low nibble $0101$ is decimal 5 (correct), and the carry 1 belongs in the tens position.' },
          { label: 'Step 4: Add the tens digits with the carry', text: '$0010 + 0101 + 1 = 1000$ — eight, which is legal (no correction needed, no carry out).' },
          { label: 'Step 5: Assemble and verify', text: 'The result nibbles are $1000\\,0101$ = BCD 85, and $27 + 58 = 85$ in decimal. Only the units column needed the +6 fix-up.' },
        ],
        result: 'BCD $0010\\,0111 + 0101\\,1000 = 1000\\,0101$ (85) after one +6 correction in the units digit — the standard BCD add-then-correct flow.',
      },
      {
        title: 'Gray code conversion, both directions',
        problem: 'Convert the binary number $1010$ to Gray code, then convert the Gray result back to binary as a round-trip check.',
        steps: [
          { label: 'Step 1: Copy the MSB', text: 'Binary $1010$ has MSB 1; the Gray MSB is also 1 (there is nothing to its left to XOR with).' },
          { label: 'Step 2: XOR adjacent bits downward', text: 'Next Gray bit: $1 \\oplus 0 = 1$. Next: $0 \\oplus 1 = 1$. Last: $1 \\oplus 0 = 1$.' },
          { label: 'Step 3: Read the Gray word', text: 'Gray code of binary $1010$ is $1111$ — indeed the tenth entry of the reflected sequence changes from the ninth by one bit only.' },
          { label: 'Step 4: Reverse: copy the MSB', text: 'Decoding Gray $1111$: binary MSB is 1, copied from the Gray MSB.' },
          { label: 'Step 5: XOR the running binary bit with each Gray bit', text: 'Next binary bit: $1 \\oplus 1 = 0$; next: $0 \\oplus 1 = 1$; last: $1 \\oplus 1 = 0$.' },
          { label: 'Step 6: Confirm the round trip', text: 'The decoded binary word is $1010$ — the original input, so the encode and decode formulas are mutual inverses.' },
        ],
        result: 'Binary $1010 \\to$ Gray $1111 \\to$ binary $1010$: each direction is a chain of XOR gates, and the two directions compose to the identity.',
      },
      {
        title: 'Excess-3 self-complementation and ASCII parity',
        problem: 'Show that inverting the excess-3 code of 4 yields the excess-3 code of 5, and attach both parities to the ASCII letter A.',
        steps: [
          { label: 'Step 1: Encode 4 in excess-3', text: '$4 + 3 = 7$, so the digit 4 is $0111$.' },
          { label: 'Step 2: Invert all bits', text: 'The 1’s complement of $0111$ is $1000$.' },
          { label: 'Step 3: Decode the result', text: '$1000$ as binary is 8, and $8 - 3 = 5$ — the excess-3 code of the digit 5, which is exactly $9 - 4$.' },
          { label: 'Step 4: Generalize', text: 'Inverting performs $d \\to 9 - d$ for every digit: $(d + 3)$ complemented in 4 bits equals $(9 - d) + 3$ because $15 - (d + 3) = 12 - d$.' },
          { label: 'Step 5: Parity on ASCII A', text: 'ASCII A is $1000001$ with two 1s: even parity appends 0, giving $01000001$; odd parity appends 1, giving $11000001$ — any single flipped bit now breaks the agreed count and is flagged.' },
        ],
        result: 'Excess-3 turns 9’s complementing into bit inversion ($4 \\leftrightarrow 5$), and one extra bit turns raw ASCII into a single-error-detecting code.',
      },
    ],
    keyTakeaways: [
      'BCD uses one 4-bit nibble per decimal digit; six patterns per nibble are illegal, and twelve is $0001\\,0010$, not $1100$.',
      'BCD addition: add binary; if a digit sum exceeds 9 or carries, add $0110$ to that digit — the +6 correction cascades into the next digit as a normal carry.',
      'Excess-3 = binary of $d + 3$; inverting the pattern computes $9 - d$, making 9’s-complement subtraction trivial.',
      'Gray code changes exactly one bit per step; convert binary→Gray with $G_i = B_{i+1} \\oplus B_i$ and Gray→binary with $B_i = B_{i+1} \\oplus G_i$.',
      'ASCII is a 7-bit code for 128 characters; an eighth parity bit (even or odd) makes any single-bit error detectable.',
      'Code choice is an engineering trade: BCD buys decimal convenience, Gray buys noise immunity, excess-3 buys easy complementing, parity buys error detection.',
    ],
    quiz: [
      {
        q: 'The BCD sum of the nibbles $0111 + 1000$ is $1111$. The next action is:',
        options: ['Stop — 1111 is the BCD digit 15', 'Add $0110$ to correct the digit, producing 5 with a carry', 'Subtract 9 from the nibble', 'Shift the nibble right by one'],
        answer: 1,
        explanation: 'Fifteen is an illegal BCD pattern; the +6 correction skips the six unused codes, leaving the correct digit 5 and the carry that belongs in the next decade.',
      },
      {
        q: 'The excess-3 representation of the decimal digit 4 is:',
        options: [`$0100$`, `$0111$`, `$1000$`, `$1100$`],
        answer: 1,
        explanation: 'Excess-3 stores $d + 3 = 7 = 0111$. Option A is plain BCD, option C is the complement (excess-3 of 5), and option D is excess-3 of 9.',
      },
      {
        q: 'The Gray code for binary $1010$ is:',
        options: [`$1010$`, `$1111$`, `$1100$`, `$0101$`],
        answer: 1,
        explanation: 'Copy the MSB (1), then XOR adjacent bits: $1{\\oplus}0 = 1$, $0{\\oplus}1 = 1$, $1{\\oplus}0 = 1$, giving $1111$. Option C forgets the final XOR and option A is the identity, which holds only for the leading bits.',
      },
      {
        q: 'An even-parity transmitter sends the ASCII character A. The transmitted 8-bit word is:',
        options: [`$11000001$`, `$01000001$`, `$10000010$`, `$10000011$`],
        answer: 1,
        explanation: 'A = $1000001$ already contains two 1s (even), so the parity bit is 0: $01000001$. Option A is the odd-parity version.',
      },
      {
        q: 'A Gray-code shaft encoder is preferred over straight binary because:',
        options: ['Gray code arithmetic is faster', 'Only one bit changes between adjacent positions, so transient readings are never far off', 'Gray code uses fewer bits per position', 'Gray code is a weighted code'],
        answer: 1,
        explanation: 'Between adjacent sectors, exactly one bit flips, so a sensor straddling a boundary reports one of the two neighboring codes — never a spurious far-away value as with binary’s multi-bit transitions.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.7
  {
    sectionId: 'mano-ch1-s7',
    depth: [
      {
        tier: 'masters',
        title: 'State, time, and the machine’s memory',
        blocks: [
          { kind: 'para', body: 'Close the loop of a combinational circuit — feed an output back as an input — and something new appears: **memory**. The simplest instance is two inverters in a ring, or the cross-coupled latch of Chapter 6: each gate forces the other’s input, the loop has exactly two stable states with one gate low and the other high, and a state, once entered, persists indefinitely without external help. This bistability is the physical content of the core section’s **binary cell**: set and clear are temporary forces applied against the loop, and the output terminals read which side won. With feedback, the circuit’s behavior can no longer be described by a truth table over present inputs alone — the next output depends on the stored state as well — and that is precisely the boundary between combinational logic (Chapters 3 through 5) and sequential logic (Chapters 6 and 7). A register is a word of such loops plus their access gates; the memory unit is an addressed array of them. Storage is not a component added to logic — it is what logic becomes when it is allowed to bite its own tail.' },
          { kind: 'para', body: 'The core section’s trio — registers, combinational next-state logic, clock — is exactly the classical **finite-state machine**: a tuple $(S, I, O, \\delta, \\lambda, s_0)$ with a finite state set $S$ (the reachable register contents, at most $2^n$ for $n$ cells), an input alphabet $I$, an output alphabet $O$, a transition function $\\delta : S \\times I \\to S$ — the combinational logic driving the register inputs — an output function $\\lambda$ (Moore style, $S \\to O$; or Mealy style, $S \\times I \\to O$), and an initial state. One clock pulse fires one transition; that is the entire content of “one transfer per clock interval,” and a guarded transfer such as $P{:}\\ R2 \\leftarrow R1$ is a transition that fires only when the guard holds. The two views are projections of one object: the register-transfer view exposes hardware structure — which register feeds which — while the automaton view exposes behavior — which state follows which. Even the memory unit participates: the core section’s $4096 \\times 16$ unit is $2^{16}$ bits of state, addressed rather than computed with. And the automaton reading is what makes the verification machinery of this section’s research tier possible at all.' },
          { kind: 'para', body: 'The clock does not make circuits fast; it makes them **predictable**. A flip-flop samples its input at the edge, and the sample is meaningful only if the input was stable throughout the **setup** window before the edge and remains stable through the **hold** window after — violate either, and neither the master–slave nor the edge-triggered design gives any guarantee whatever. The synchronous contract is therefore global: every register-to-register path must settle within one period minus setup, for every input, at the slowest process corner and lowest supply voltage; **clock skew** — the edge arriving at different flip-flops at different times — silently steals from that budget, which is why physical design expends enormous effort balancing clock trees and static timing analysis closes the loop by exhaustive worst-case arithmetic rather than by measurement. Correctness here is by discipline, not by testing. But the discipline presumes every sampled signal is already a clean two-valued quantity, and that presumption is exactly what can fail — see the remark.' },
          { kind: 'remark', body: 'Violate setup or hold — feed a flip-flop a signal that changes exactly at the sampling edge, or cross between clock domains without a synchronizer — and the cross-coupled loop can balance at the **metastable** midpoint, neither state, for an unbounded time; Chaney and Molnar demonstrated the phenomenon experimentally in 1973. The arbiter’s dilemma is physics, not a fabrication defect: no physical device can always decide between two sufficiently simultaneous events in bounded time. The probability of failing to resolve decays exponentially with waiting time, so cascading two or three synchronizer flip-flops pushes the mean time between failures out to years — but never to infinity, and every clock-domain crossing in every chip pays this tax forever. Metastability is the analog world’s standing objection to the digital abstraction of Section 1.1: the boundary between the two regimes is real, and one copy of it lives inside every latch.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Verifying state machines at scale',
        blocks: [
          { kind: 'application', heading: 'Model checking', body: 'Because registers plus logic form an automaton, a design can be verified by checking every behavior rather than simulating some of them. **Model checking** (Clarke and Emerson, and independently Queille and Sifakis — the work honored by the 2007 Turing Award) takes the circuit’s finite state graph and a temporal-logic specification — CTL or LTL formulas such as “from every reachable state, the bus is eventually granted” (liveness) or “no two masters hold the grant simultaneously” (safety) — and decides the property by exhaustive traversal, returning a counterexample trace when it fails. The early landmark was the verification of the IEEE Futurebus+ cache-coherence protocol, which surfaced design errors that committees and simulation had missed for years. Explicit-state exploration drowns quickly — $n$ state bits mean up to $2^n$ states — so **symbolic model checking** (McMillan, riding the BDDs of Section 1.8’s research tier) represents whole state *sets* as Boolean functions and traversed astronomic state counts; **bounded model checking** unrolls the transition relation a bounded number of steps and hands the result to a SAT solver, trading completeness for scale. Every serious processor and protocol group now runs these tools as a design gate.' },
          { kind: 'open', heading: 'The state-explosion problem', body: 'The barrier all of this beats against is structural: composition. A chip can be verified as one giant state machine only while its blocks are small; verifying components independently and reassembling the results requires **assume–guarantee contracts** — interface specifications strong enough to compose yet weak enough that humans can write them — and these remain the field’s unsolved engineering problem. Live threads today include parameterized verification: proving a cache protocol correct for *every* number of cores, where cutoff theorems exist only for restricted families of protocols. Another is learning-based invariant inference — whether a model can propose the loop invariant that a proof checker then certifies, and how the certificate can be trusted. And there is the asynchronous alternative: self-timed circuits abandon the global clock entirely, and with it the timing discipline of the master’s tier, at the price of young verification flows. The register-transfer abstraction made *design* compositional; making verification as compositional as design is still open.' },
        ],
      },
    ],
    readingTime: 7,
    intro: 'Information that is represented in binary must also be stored in binary, and the storing element is the register. This section defines the binary cell and the register, describes how a parallel load transfers an entire word in one clock interval under the command of a control function, and organizes the memory unit as an array of addressed registers — the $4096 \\times 16$ memory of the book’s example.',
    objectives: [
      'Define binary cells, registers, and the n-bit word they hold',
      'Describe parallel transfer of information between registers under a control function',
      'Explain how a clock makes transfers unambiguous in time',
      'Determine the address bits, data lines and capacity of a memory unit',
    ],
    concepts: [
      {
        term: 'Binary cell',
        kind: 'definition',
        statement: 'A **binary cell** is a device with **two stable states** that stores one bit, together with input terminals to set and clear it and output terminals to read which state it holds. Any physical element with two distinguishable, self-maintaining states can serve.',
        detail: 'In 1979 that meant magnetic cores or discrete flip-flops; the abstraction is unchanged today. The two states are named 1 and 0 — nothing more is required of the cell than to hold and reveal that distinction.',
      },
      {
        term: 'Register',
        kind: 'definition',
        statement: 'A **register** is a group of binary cells used to store one **word** of information: an $n$-bit register is $n$ cells sharing a common load control, so the whole word is written or read as a unit.',
        detail: 'The register is the elementary unit of digital system organization — Mano’s Chapters 6 through 11 are, in essence, the study of registers wired to one another. Processor registers (accumulator, program counter), memory words, and I/O buffer registers are all the same object at different scales.',
      },
      {
        term: 'Register transfer',
        kind: 'method',
        statement: 'A **register transfer** copies the bits of a source register into a destination register: the destination cells are loaded from the source cells’ outputs, all bits moving **in parallel** during one transfer operation. The RTL statement **R2 ← R1** means “replace the contents of R2 with the contents of R1”, leaving R1 unchanged.',
        detail: 'A transfer may be unconditional or guarded by a **control function**: the statement $P{:}\\ R2 \\leftarrow R1$ means the transfer occurs only when the Boolean variable $P$ is 1. Control functions are generated by timing and control logic (Chapter 8 makes them the microoperation language of the whole computer).',
      },
      {
        term: 'Clocking and timing of transfers',
        kind: 'insight',
        statement: 'Transfers are made **synchronous**: a periodic clock pulse defines the instant at which destination registers accept their new values, so a chain of dependent transfers (each using the previous one’s result) can be sequenced unambiguously — one transfer per clock interval.',
        detail: 'Between pulses the combinational logic between registers settles; the pulse edge then commits the settled values. Without a shared time reference, a loop of registers could race (each feeding the next through logic that feeds back). The clock is the metronome that turns a heap of gates into a sequenced digital system.',
      },
      {
        term: 'The memory unit',
        kind: 'definition',
        statement: 'A **memory unit** is an array of registers (words) accessed by **address**: $k$ address bits select one of $2^{k}$ words, $n$ data lines carry the word, and read/write control inputs set the direction. A $4096 \\times 16$ memory has $2^{12} = 4096$ words of 16 bits — so 12 address lines and 16 bidirectional data lines.',
        detail: 'Internally, an address decoder (Chapter 5) energizes exactly one word-select line; the chosen register’s cells are then read onto the bus or loaded from it. Mano’s canonical sizing example: memory of $4096$ words needs twelve bits of address because $2^{12} = 4096$, and each stored word is one register.',
      },
      {
        term: 'The transfer path through memory',
        kind: 'method',
        statement: 'Communication with memory always names a register and an address: to fetch, place the address on the address lines, assert read, and the word’s bits appear on the data lines for the CPU to capture; to store, place the address, assert write, and the data lines’ contents load into the selected register.',
        detail: 'A CPU’s “load register R1 from memory location 2A5” is thus a register transfer in which the source is a memory register selected by address — the same $\\leftarrow$ notation carries through the entire book, from single registers up to the full instruction cycle.',
      },
    ],
    examples: [
      {
        title: 'Sizing a memory unit',
        problem: 'A memory unit is specified as $4096 \\times 16$ — 4096 words of 16 bits each. Determine the address bits, data lines, total capacity in bits, and the address 2A5 in binary.',
        steps: [
          { label: 'Step 1: Address bits', text: 'Find $k$ with $2^{k} = 4096$: since $2^{12} = 4096$, the address register needs twelve bits.' },
          { label: 'Step 2: Data lines', text: 'Each word is 16 bits, so sixteen data lines carry the selected word in parallel during a read or write.' },
          { label: 'Step 3: Capacity', text: '$4096 \\times 16 = 65536$ bits total, organized as 4096 separately addressable 16-bit registers.' },
          { label: 'Step 4: An address in binary', text: 'Hexadecimal $2A5$ (one hex digit per four address bits) is $0010\\,1010\\,0101$ — twelve bits, exactly filling the address register.' },
          { label: 'Step 5: Generalize the rule', text: 'Any memory of $2^{k}$ words of $n$ bits needs $k$ address lines and $n$ data lines — words and lines are independent design choices.' },
        ],
        result: 'The $4096 \\times 16$ memory uses a 12-bit address, 16 data lines, and holds 65536 bits: address decoding is the mechanism, and $k = 12$ comes straight from $2^{12} = 4096$.',
      },
      {
        title: 'A timed register transfer with a control function',
        problem: 'Registers R1 and R2 are 4-bit registers, R1 holds $1011$, R2 holds $0100$. Describe the transfer $P{:}\\ R2 \\leftarrow R1$ over one clock interval and the value each register holds at each instant.',
        steps: [
          { label: 'Step 1: Before the clock', text: 'R1 = 1011, R2 = 0100, and the control logic has not yet raised $P$; R2’s load input is disabled and its cells hold their old contents.' },
          { label: 'Step 2: Control function asserted', text: 'Timing logic sets $P = 1$; the four output lines of R1 are now gated onto R2’s inputs through the load-enabled cells.' },
          { label: 'Step 3: Combinational settling', text: 'The bits $1, 0, 1, 1$ propagate to R2’s four cell inputs; no state changes yet — registers only change at the defined instant.' },
          { label: 'Step 4: The clock pulse', text: 'On the pulse, all four destination cells capture their inputs simultaneously (a **parallel load** — one bit per cell, one clock for the whole word).' },
          { label: 'Step 5: After the transfer', text: 'R1 = 1011 (sources are never destroyed) and R2 = 1011; the next transfer may now use R2’s new value because a full clock interval has passed.' },
        ],
        result: 'One clock interval, one control function, one parallel load: R2 becomes 1011 while R1 is untouched — the elementary step from which every microoperation sequence of Chapters 8–11 is built.',
      },
    ],
    keyTakeaways: [
      'A binary cell stores one bit in two stable states; a register is a group of cells storing one word.',
      'Register transfer R2 ← R1 copies all bits in parallel, source unchanged; a control function guards the transfer ($P{:}\\ R2 \\leftarrow R1$ fires only when $P = 1$).',
      'The clock pulse defines the instant of transfer, letting sequences of dependent transfers be ordered safely.',
      'Memory is an array of addressed registers: $k$ address bits select among $2^{k}$ words; the $4096 \\times 16$ memory needs 12 address lines and 16 data lines.',
      'Memory reads and writes are register transfers with the source or destination selected by an address decoder.',
      'The same transfer notation scales from two registers to the fetch–decode–execute cycle of the complete computer.',
    ],
    quiz: [
      {
        q: 'A memory unit with 4096 words requires how many address bits?',
        options: ['8', '10', '12', '16'],
        answer: 2,
        explanation: '$2^{12} = 4096$, so twelve address bits select one word — the relationship $k$ address bits to $2^{k}$ words is the sizing rule.',
      },
      {
        q: 'In the transfer statement $P{:}\\ R2 \\leftarrow R1$, the role of $P$ is to:',
        options: ['Select a bit within the register', 'Serve as a control function enabling the transfer only when $P = 1$', 'Hold the parity of the word', 'Increment the register after the transfer'],
        answer: 1,
        explanation: 'The control function is a Boolean condition generated by timing/control logic; the load happens only in the clock intervals where it is 1.',
      },
      {
        q: 'After the transfer $R2 \\leftarrow R1$ completes, the contents of R1 are:',
        options: ['Cleared to zero', 'Complemented', 'Unchanged — transfers copy, they do not move', 'Swapped with R2'],
        answer: 2,
        explanation: 'Register transfer is a copy: the source cells drive the destination’s inputs, and reading a register never disturbs it.',
      },
      {
        q: 'Parallel loading of an 8-bit register means:',
        options: ['The 8 bits enter one per clock pulse', 'All 8 bits enter their cells during a single clock pulse', 'The bits enter in Gray-code order', 'Only the sign bit loads'],
        answer: 1,
        explanation: 'Every cell of the destination register has its own data path from the source; one common load control writes the entire word at the same instant.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.8
  {
    sectionId: 'mano-ch1-s8',
    depth: [
      {
        tier: 'masters',
        title: 'The algebra behind the gates',
        blocks: [
          { kind: 'para', body: 'Binary logic becomes mathematics when it is axiomatized. Huntington (1904) showed that a short list of postulates suffices: a set $B$ carries two binary operations, $+$ and $\\cdot$, and a unary complement $′$, such that **closure** holds; there are **identity elements** $0$ for $+$ and $1$ for $\\cdot$; both operations are **commutative**; $\\cdot$ **distributes** over $+$ and — the law alien to ordinary arithmetic — $+$ distributes over $\\cdot$, as $x + yz = (x+y)(x+z)$, true for logic and false for numbers; and every element has a **complement**, with $x + x′ = 1$ and $x \\cdot x′ = 0$. The two-element system of this section — the truth tables for AND, OR and NOT — is a model of every postulate, checked row by row in eight lines; up to renaming the operations, it is the only algebra on two elements that satisfies them. Huntington’s list is minimal and independent, and the remarkable fact is that this tiny axiom set generates every identity the gates obey — Chapter 2 harvests that crop for cheaper circuits. One further gift, Stone’s representation theorem: every finite Boolean algebra is isomorphic to a field of sets, so intersection and union are always waiting behind AND and OR.' },
          { kind: 'theorem', heading: 'The duality principle', body: 'Every theorem of Boolean algebra remains a theorem after the simultaneous interchange $+ \\leftrightarrow \\cdot$ and $0 \\leftrightarrow 1$ throughout its statement and proof: the **dual** of any valid identity is valid. Absorption comes as the pair $x + xy = x$ with $x(x + y) = x$; the De Morgan laws form a dual pair; every theorem of Chapter 2 arrives in matched couples. Duality is a proof multiplier — half the algebra is free — and it is a theorem about theorems, proved once for the whole system rather than case by case.' },
          { kind: 'proof', body: 'Inspect the postulates: they come in dual pairs. The identity for $+$ dualizes into the identity for $\\cdot$; each distributive law is the other’s dual; and the complement pair $x + x′ = 1$ with $x \\cdot x′ = 0$ swaps into itself. Now argue by induction on derivation length. A theorem is the last line of a proof whose every step is either a postulate instance or a substitution into an earlier line. Dualizing each postulate yields a postulate, and dualization commutes with substitution — the dual of a substituted instance is the substituted instance of the dual — so the dual of every step is a legal step, and the dualized derivation derives the dualized conclusion. As a first dividend, verify $(xy)′ = x′ + y′$ on the four rows of the section’s own truth table; duality then delivers $(x + y)′ = x′y′$ at no charge, and induction on the number of variables generalizes both to arbitrary sums and products — the engine inside every NAND and NOR gate.' },
          { kind: 'derivation', heading: 'Functional completeness via DNF', body: 'AND and NOT alone express every Boolean function — the modest gate set of this section is already universal. The construction is the **disjunctive normal form**. For a row $v = (v_1, \\ldots, v_n)$ of the truth table, define the **minterm** $$m_v = \\ell_1 \\ell_2 \\cdots \\ell_n, \\qquad \\ell_i = x_i \\text{ if } v_i = 1, \\ \\ell_i = x_i′ \\text{ if } v_i = 0,$$ which is $1$ at row $v$ and $0$ at every other row — each literal forces its variable. Then $$f(x_1, \\ldots, x_n) = \\bigvee_{v : f(v) = 1} m_v,$$ because at row $v$ exactly the one surviving minterm $m_v$ can evaluate to $1$. The right-hand side uses OR; eliminate it with the De Morgan identity $x + y = (x′ y′)′$, and only AND and NOT remain. Duality supplies the conjunctive twin, the maxterm form over the zero rows. Corollaries: NOR alone is equally universal — NOT is a NOR of an input with itself, and AND is a NOR applied twice, as the truth table confirms; and since there are exactly $2^{2^n}$ Boolean functions of $n$ variables, this tiny two-operation basis spans a doubly exponential function space — the fact that makes programmable logic possible at all.' },
          { kind: 'para', body: 'One operation of this chapter has been standing outside the algebra: XOR. Equip $\\{0, 1\\}$ with addition $\\oplus$ and multiplication $\\cdot$ (AND): the result is a genuine **ring** — in fact the field $GF(2)$ — in which every element is its own additive inverse, $x \\oplus x = 0$, so subtraction and addition coincide. Algebra done over this ring reorganizes the whole chapter: $n$-bit words become vectors over $GF(2)$; **parity** is the dot product with the all-ones vector, a linear functional; the Gray conversion of Section 1.6, $G_i = B_{i+1} \\oplus B_i$, is a linear map; CRC checksums are remainders of polynomial division in $GF(2)[x]$, messages treated as polynomials whose bits are coefficients; and the error-detecting codes of Section 1.6’s deeper tier are exactly kernels of linear maps, which is why their analysis is linear algebra. XOR is expressible through AND, OR and NOT — $x \\oplus y = xy′ + x′y$, the section’s own first truth table — so it adds no expressive power, but circuits dense in XOR defeat both BDD-based and SAT-based tools (the research tiers of Sections 1.5 and 1.8), a fact verification researchers know painfully. Same object, two dialects: engineers say XOR, algebraists say $GF(2)$.' },
        ],
      },
      {
        tier: 'phd',
        title: 'Truth tables at scale: BDDs and complexity',
        blocks: [
          { kind: 'application', heading: 'BDDs — compressed truth tables', body: 'A truth table with $n$ variables has $2^n$ rows; listing one for $n = 100$ is hopeless, so function manipulation needs structure. Bryant’s 1986 **ordered binary decision diagrams** compress the table into a directed acyclic graph: nodes test one variable each, along one fixed global variable order; every path from root to a terminal answers the function’s value on one input row; and two reductions — merge identical subgraphs, then delete tests whose two branches coincide — are applied until nothing shrinks. The reduced diagram is **canonical**: for a fixed variable order, two functions are equal exactly when their diagrams are identical, so equivalence checking becomes a pointer comparison, and Boolean operations compose diagrams without ever unfolding a table. The catch is order: one variable ordering can yield a linear diagram where another yields an exponential one, and finding good orders is itself intractable. Adders behave — with the two operands’ bits interleaved, every sum and carry bit has a small diagram — but multiplication provably does not: Bryant showed that every variable ordering gives exponential diagrams for the product of two $n$-bit numbers, the result that pushed multiplier verification toward algebra (Section 1.5’s research tier). BDDs remain the workhorse of logic synthesis and were the engine of symbolic model checking.' },
          { kind: 'open', heading: 'Circuit complexity', body: 'Counting delivers an uncomfortable sermon. There are $2^{2^n}$ Boolean functions of $n$ variables, but circuits with at most $g$ gates are comparatively few — Shannon estimated in 1949 that **almost every** function needs on the order of $2^n/n$ gates: randomness is hard. Yet the best lower bound ever proved for an explicit function one can actually write down is about $5n$ gates — linear, a hair above trivial — while the functions humanity cares about (multiplication, satisfiability) are believed to be far larger. Proving that some explicit function requires super-polynomial circuits would separate $P$ from $NP$, the central open problem of computation, sitting barely beneath the surface of this chapter’s truth tables. The known obstacle is the **natural proofs barrier** (Razborov and Rudich, 1997): essentially any “natural” lower-bound argument would double as an efficient algorithm for breaking cryptographic pseudorandomness, so any successful technique must be unlike everything currently understood. The four-row table of Section 1.8 is the visible tip of this iceberg: we can enumerate all functions, prove that almost all are enormous, and still cannot name one that we can prove is large.' },
        ],
      },
    ],
    readingTime: 7,
    intro: 'The chapter closes with the mathematics the hardware will speak for the rest of the book: binary logic. It is a system of two-valued variables and three basic operations — AND, OR and NOT — defined completely by truth tables. Binary logic is not yet Boolean algebra (that is Chapter 2’s algebraic edifice); it is the concrete two-element system that physical gates realize, and the truth table is its complete specification.',
    objectives: [
      'Define binary logic and its two values',
      'State and use the truth tables of the AND, OR and NOT operations',
      'Evaluate logic expressions with correct operator precedence',
      'Distinguish binary logic (the two-element system) from Boolean algebra (the general algebra)',
    ],
    concepts: [
      {
        term: 'Binary logic',
        kind: 'definition',
        statement: '**Binary logic** deals with **binary variables** (each taking exactly one of two values, 0 or 1) and a set of operations on them, each operation defined by a truth table. The names 0 and 1 are arbitrary labels — the states could equally be called false/true, open/closed, or low/high.',
        detail: 'Mano’s presentation is operational: a logic function is **completely specified** by a table that lists its value for every combination of variable values. No geometric, numeric or verbal interpretation is needed — the table is the definition.',
      },
      {
        term: 'The AND operation',
        kind: 'definition',
        statement: '**AND**, written $x \\cdot y$ (or simply $xy$), is 1 only when **both** operands are 1: the truth table has $0 \\cdot 0 = 0$, $0 \\cdot 1 = 0$, $1 \\cdot 0 = 0$, $1 \\cdot 1 = 1$.',
        detail: 'AND is the tabulation of “series connection”: two switches in series carry current only when both are closed. In hardware it is one physical gate; in Boolean algebra it is the multiplication-like operator of Chapter 2.',
      },
      {
        term: 'The OR operation',
        kind: 'definition',
        statement: '**OR**, written $x + y$, is 1 when **at least one** operand is 1: $0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, $1 + 1 = 1$.',
        detail: 'Note carefully: in binary logic $1 + 1 = 1$, **not** 10 — the plus sign is borrowed from arithmetic but denotes set-union-like combination, not addition. This is the single most important notational adjustment for students arriving from arithmetic, and it is why binary arithmetic (Section 1.2) and binary logic need different circuits: an adder must produce a carry; an OR gate must not.',
      },
      {
        term: 'The NOT operation',
        kind: 'definition',
        statement: '**NOT** (complement, inversion), written $x′$, interchanges the two values: $0′ = 1$ and $1′ = 0$. Applying it twice restores the original: $(x′)′ = x$.',
        detail: 'The prime notation (equivalently an overbar) is used throughout the book. NOT is the seed of the complement arithmetic of Section 1.4 — taking the 1’s complement of a word is applying NOT to every bit.',
      },
      {
        term: 'Truth tables as complete specifications',
        kind: 'notation',
        statement: 'For $n$ variables there are $2^{n}$ input combinations; a **truth table** lists the function value for each, in the fixed order $000 \\ldots 0$ up to $111 \\ldots 1$. Two functions are equal exactly when their truth tables agree on every row.',
        detail: 'For example, three variables give eight rows — the same eight rows that become the eight cells of the three-variable Karnaugh map in Chapter 3. The truth table is the bridge between a word problem and hardware: specify behavior, tabulate it, then minimize.',
      },
      {
        term: 'Binary logic versus Boolean algebra',
        kind: 'insight',
        statement: '**Binary logic** is the concrete two-element system of truth tables and switching circuits; **Boolean algebra** (Chapter 2) is the abstract algebra — postulates, theorems, duals — that any such system satisfies. Logic gives the semantics; algebra gives the rules for transforming expressions into cheaper circuits.',
        detail: 'Rosen’s Discrete Mathematics develops the same algebra abstractly (Boolean rings, duality, functional completeness) — Mano’s contribution is to bind each theorem to a gate circuit. When Chapter 2 proves $x + x′y = x + y$, the payoff is removing a gate from a circuit; the mathematics (Rosen, Chapter 12) and the hardware (this book) are two views of one structure.',
      },
    ],
    examples: [
      {
        title: 'Truth table of F = xy′ + x′y',
        problem: 'Tabulate $F = xy′ + x′y$ for all input combinations, carrying the intermediate columns, and state what the function detects.',
        steps: [
          { label: 'Step 1: Enumerate inputs', text: 'Three variables would need eight rows; this function has two variables, so four rows: $(x,y) = 00, 01, 10, 11$.' },
          { label: 'Step 2: Complement column', text: 'For each row compute $x′$ and $y′$: for $(0,1)$ they are $1$ and $0$ respectively.' },
          { label: 'Step 3: Product columns', text: '$xy′$ is 1 only at $(1,0)$; $x′y$ is 1 only at $(0,1)$.' },
          { label: 'Step 4: Combine with OR', text: '$F = xy′ + x′y$ is 1 exactly at rows $(0,1)$ and $(1,0)$, and 0 at $(0,0)$ and $(1,1)$.' },
          { label: 'Step 5: Interpret', text: 'The function is 1 precisely when the inputs **differ** — it is the exclusive-OR, the star operator of Section 2.6, built here from two ANDs, one OR and two inverters.' },
        ],
        result: 'The table reads $F = 0, 1, 1, 0$ for inputs 00, 01, 10, 11: inequality detection, i.e. exclusive-OR.',
      },
      {
        title: 'Evaluating an expression with precedence rules',
        problem: 'Evaluate $F = x + y′z$ at $(x, y, z) = (0, 0, 1)$ and at $(1, 1, 1)$, applying operator precedence.',
        steps: [
          { label: 'Step 1: State the precedence', text: 'Parentheses first, then NOT, then AND, then OR — mirroring “minus, times, plus” in ordinary algebra.' },
          { label: 'Step 2: First evaluation', text: 'At $(0,0,1)$: $y′ = 1$, then $y′z = 1 \\cdot 1 = 1$, then $x + 1 = 1$. The result is 1 — the $z$ term carries the output because $x$ is 0 but $y′z$ is true.' },
          { label: 'Step 3: Second evaluation', text: 'At $(1,1,1)$: $y′ = 0$, $y′z = 0$, and $x + 0 = 1$. The result is again 1, now carried by $x$ alone.' },
          { label: 'Step 4: A contrast that proves precedence matters', text: 'If AND did not bind tighter than OR, $x + y′$ would evaluate first: at $(0,0,1)$ that gives $0 + 1 = 1$ and then multiplied by $z$ gives 1 — but at $(1,1,1)$ it would give $(1 + 0) \\cdot 1 = 1$ as well; a third point such as $(1,1,0)$ settles it: the correct rule gives $1$, the misparse gives $0$.' },
        ],
        result: 'NOT, then AND, then OR: $F(0,0,1) = F(1,1,1) = 1$, and the misparsed version disagrees at $(1,1,0)$ — precedence is part of the language, not a convention.',
      },
    ],
    keyTakeaways: [
      'Binary logic: two-valued variables and truth-table-defined operations — the concrete system gates implement.',
      'AND ($xy$) is 1 only for $1 \\cdot 1$; OR ($x + y$) is 0 only for $0 + 0$; NOT ($x′$) swaps the two values.',
      'In binary logic $1 + 1 = 1$: the + is logical, not arithmetic — carries belong to binary arithmetic, not to OR gates.',
      'An $n$-variable truth table has $2^{n}$ rows and is the complete specification of a function.',
      'Operator precedence is NOT, then AND, then OR, with parentheses overriding.',
      'Binary logic supplies semantics; Boolean algebra (Chapter 2, and Rosen’s Chapter 12 for the pure theory) supplies the transformation rules that turn logic into cheap hardware.',
    ],
    quiz: [
      {
        q: 'In binary logic, the value of $1 + 1$ is:',
        options: ['10', '1', '2', '0'],
        answer: 1,
        explanation: 'OR yields 1 whenever any operand is 1 — the + sign is logical union, not arithmetic addition; the value 10 belongs to binary arithmetic, which is a different system with different circuits.',
      },
      {
        q: 'The truth-table output column of $xy′ + x′y$ (rows 00, 01, 10, 11) is:',
        options: ['0, 0, 1, 1', '0, 1, 1, 0', '1, 0, 0, 1', '1, 1, 0, 0'],
        answer: 1,
        explanation: 'The products are true exactly at $(1,0)$ and $(0,1)$ — the inputs that disagree — so the column is 0, 1, 1, 0: exclusive-OR.',
      },
      {
        q: 'The correct order of precedence in Boolean expressions is:',
        options: ['OR, then AND, then NOT', 'NOT, then AND, then OR', 'AND, then NOT, then OR', 'Left to right, all operators equal'],
        answer: 1,
        explanation: 'Complements bind tightest, then products, then sums — so in $x + y′z$ the term $y′z$ is computed before the final OR.',
      },
      {
        q: 'How many rows does the complete truth table of a 4-variable function require?',
        options: ['4', '8', '16', '32'],
        answer: 2,
        explanation: 'Each of the four variables doubles the combinations: $2^{4} = 16$ rows — and sixteen cells is exactly the four-variable Karnaugh map of Section 3.2.',
      },
    ],
  },
]
