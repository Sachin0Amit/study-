import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 10: Control Logic Design (Sections 10.1 – 10.3 as mapped in library.ts)
// Master study content, written from canonical knowledge of the book (the PDF
// is a scan with no text layer). Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline. All backslashes doubled in TS strings.
// ============================================================================

export const manoCh10Content: SectionContent[] = [
  // ------------------------------------------------------------------ 10.1
  {
    sectionId: 'mano-ch10-s1',
    readingTime: 8,
    intro: 'Chapter 9 built the datapath — now something must tell it what to do, when. The control unit reads three kinds of input — the decoded instruction, the status flags and the timing signals — and turns them into the control functions that open gates, load registers and select ALU operations. Mano develops two ways to build it: hardwired logic derived from a state table, and a stored program of control words called a microprogram.',
    objectives: [
      'Identify the three classes of control-unit input: instruction decode signals, status flags and timing signals',
      'List the control-unit outputs and relate them to the Chapter 9 control word',
      'Explain the sequence counter and decoder that generate timing signals T0, T1, T2, …',
      'Contrast hardwired and microprogrammed control organizations',
      'Relate the hardware control unit to the OS-level structures of OSC Ch 2',
    ],
    concepts: [
      {
        term: 'The control unit',
        kind: 'definition',
        statement: 'The **control unit** is the part of the computer that governs the datapath: it initiates every microoperation by raising **control functions** — gate signals that select register sources, enable loads, and command memory reads and writes — in the proper sequence.',
        detail: 'In Mano’s organization the control unit and the processor together exhaust the machine: the processor is what moves and combines data; the control is what decides which transfer happens during which clock period. Everything else in the book is refinement of this split.',
      },
      {
        term: 'Control inputs: decode, status, timing',
        kind: 'method',
        statement: 'The control unit’s inputs come from three sources: the **instruction decoder** (outputs $D_0, D_1, \ldots, D_7$ recognizing the opcode in IR), the **status flags** (C, V, Z, S, the indirect bit I, and the interrupt flags IEN, FGI, FGO), and the **timing signals** $T_0, T_1, T_2, \ldots$ from the sequence counter and its decoder.',
        detail: 'A control function is a Boolean product of these, such as $D_1 T_4$ for the operand read of an ADD, or $\\text{IEN}(\\text{FGI} + \\text{FGO})$ for recognizing an interrupt. Design the products and you have designed the machine.',
      },
      {
        term: 'Control outputs',
        kind: 'definition',
        statement: 'The control unit’s outputs are the datapath’s command lines: the **control word** (SELA, SELB, SELD, OPR), the register load enables, memory read and write, the PC incrementer enable, the flag and flip-flop set/reset lines, and the sequence counter clear.',
        detail: 'Counting them for the basic computer gives roughly two to three dozen signals — seven register loads, two memory strobes, the ALU selects, the incrementer enable, E/I/S/R/IEN/FGI/FGO set and reset, and SC ← 0. Every one of these is a combinational function of decode, status and timing.',
      },
      {
        term: 'Sequence counter and timing decoder',
        kind: 'method',
        statement: 'Timing signals come from a **sequence counter (SC)** driven by the master clock through a decoder: each count value raises one timing signal $T_i$, and the counter is cleared (SC ← 0) when an instruction finishes so the next fetch restarts at $T_0$.',
        detail: 'The register-reference and I/O instructions of the basic computer finish during $T_3$; memory-reference instructions run through $T_4$ and $T_5$; the counter simply keeps advancing while the control logic decides, at each state, whether to clear it. A **start/stop flip-flop S** (set by power-on, cleared by HLT) gates the clock so the machine can be halted.',
      },
      {
        term: 'Hardwired control',
        kind: 'definition',
        statement: '**Hardwired control** implements the control functions as fixed logic — gates and flip-flops designed once from the state table; changing the instruction set means changing wires.',
        detail: 'Its virtues are speed (a control function is one or two gate delays after its inputs settle) and low recurring cost in mass production; its vice is that any design change ripples through the whole network. The PLA approach of Section 10.3 tames the wiring without giving up the speed.',
      },
      {
        term: 'Microprogrammed control',
        kind: 'definition',
        statement: '**Microprogrammed control** stores the control words in a read-only **control memory** and sequences through them with a control address register — the control unit becomes a small computer inside the computer.',
        detail: 'Each stored word is a **microinstruction**; each machine instruction corresponds to a **microroutine**. Adding an instruction then means writing new microcode rather than rewiring gates — the flexibility that made microprogramming dominant for complex instruction sets. Section 10.2 designs both organizations for the same two-instruction machine.',
      },
      {
        term: 'The boundary the OS inherits',
        kind: 'insight',
        statement: 'Everything an operating system does rides on this control unit: interrupts and traps are just more inputs (IEN, FGI, FGO) and the halt instruction is just S ← 0 — the hardware side of the system-call and process machinery of OSC Ch 2.',
        detail: 'Cross-link: OSC Ch 2 presents an OS as a layer that multiplexes hardware among processes; here is that hardware. The interrupt cycle designed in Chapter 11 is the exact mechanism through which every OS regains control of the CPU.',
      },
    ],
    examples: [
      {
        title: 'Deriving the control functions for fetch and one execute step',
        problem: 'Write the control functions (Boolean products) that open the gates for the fetch steps and for the execute step AC ← AC + DR of a direct ADD.',
        steps: [
          { label: 'Step 1: Fetch, timing state $T_0$', text: 'AR ← PC requires the AR load enable to be a function of $T_0$ alone: control function $T_0$, because every instruction starts this way regardless of opcode.' },
          { label: 'Step 2: Fetch, timing state $T_1$', text: 'IR ← M[AR] needs memory-read plus the IR load enable, and PC ← PC + 1 needs the incrementer enable — all under the single control function $T_1$.' },
          { label: 'Step 3: Decode, timing state $T_2$', text: 'AR ← IR(address field) is again universal: control function $T_2$. The decoder outputs $D_k$ become valid during this state and are ANDed with later timing to specialize execution.' },
          { label: 'Step 4: Execute for ADD specifically', text: 'The operand read DR ← M[AR] is common to several memory-reference instructions, so its function is a sum of products $(D_0 + D_1 + D_2 + D_6) T_4$; the addition AC ← AC + DR is unique to ADD: control function $D_1 T_5$, which simultaneously drives SELA = AC, SELB = DR, OPR = add and the AC load enable, and lets the flags latch.' },
          { label: 'Step 5: End the instruction', text: 'Whichever execute step finishes last raises SC ← 0, returning the timing to $T_0$ for the next fetch.' },
        ],
        result: 'Six gate expressions — $T_0$, $T_1$, $T_2$, $(D_0 + D_1 + D_2 + D_6)T_4$, $D_1 T_5$ and the counter clear — already sequence an entire ADD; the full basic computer is the same discipline applied to every instruction.',
      },
      {
        title: 'Taking inventory of the control outputs',
        problem: 'Count the control signals a basic computer’s control unit must generate, as a preview of the logic sizes in Sections 10.2 and 10.3.',
        steps: [
          { label: 'Step 1: Register loads', text: 'AR, PC, DR, IR, TR each need a load enable; AC’s load is folded into its attached ALU path — about five signals, each fed by several control functions ORed together.' },
          { label: 'Step 2: Memory and ALU', text: 'Memory read and memory write strobes (2), the ALU operation selects shared with the AC path (3), and the shifter selects (2).' },
          { label: 'Step 3: Special flip-flops', text: 'Set/reset lines for E, I, S, R, IEN, FGI, FGO and the SC clear — each is a tiny dedicated control function of decode and timing (or, for FGI/FGO, of the device interfaces).' },
          { label: 'Step 4: Total', text: 'The count lands in the low twenties of independent signals — far too many for random wiring to stay sane, which is exactly why Mano immediately turns to systematic design: state tables in Section 10.2, PLAs in Section 10.3.' },
        ],
        result: 'About 20–25 output lines, each a Boolean function of perhaps a dozen inputs (7 decode outputs, 6–8 status bits, 4–6 timing states): a problem of pure combinational logic — with a few flip-flops for sequencing — i.e. a synchronous sequential circuit.',
      },
    ],
    keyTakeaways: [
      'The control unit sequences microoperations by raising control functions derived from three input classes: decode outputs, status flags and timing signals.',
      'A control function is a Boolean product such as $D_1 T_5$ — decode × timing, sometimes × status.',
      'Timing comes from a sequence counter + decoder producing $T_0, T_1, T_2, \ldots$; SC ← 0 ends each instruction and restarts fetch.',
      'The start/stop flip-flop S halts the clock; HLT is simply S ← 0.',
      'Hardwired control is fast but rigid; microprogrammed control stores control words in ROM and trades speed for flexibility.',
      'Interrupts, traps and halts are control-unit inputs/outputs — the hardware layer beneath the OS services of OSC Ch 2.',
    ],
    quiz: [
      {
        q: 'Which of the following is NOT an input to the control unit?',
        options: ['The instruction decoder outputs $D_0$–$D_7$', 'The status and interrupt flags such as Z and FGI', 'The timing signals from the sequence counter', 'The data word on the common bus'],
        answer: 3,
        explanation: 'The bus carries data for the datapath, not decisions for the control. The control unit consumes decode, status and timing — and emits gate signals.',
      },
      {
        q: 'A control function is best described as:',
        options: ['A microinstruction stored in ROM', 'A Boolean product of decode, status and timing variables that gates one or more microoperations', 'A clock pulse', 'The memory address of an operand'],
        answer: 1,
        explanation: 'In the hardwired view, each microoperation is enabled when its control function — e.g. $D_1 T_5$ — is true; the designer’s job is deriving all such functions systematically.',
      },
      {
        q: 'What resets the sequence counter SC to zero?',
        options: ['Every clock pulse, automatically', 'The control logic at the end of each instruction, so the next fetch restarts at $T_0$', 'The memory write strobe', 'The program counter incrementer'],
        answer: 1,
        explanation: 'Instructions have different lengths — register-reference ones finish at $T_3$, memory-reference ones at $T_5$ — so the logic that completes the last microoperation of an instruction also clears SC.',
      },
      {
        q: 'The essential difference between hardwired and microprogrammed control is:',
        options: ['Hardwired uses flip-flops, microprogrammed does not', 'Hardwired realizes control functions in fixed gates, while microprogrammed control stores control words in a control memory and sequences through them', 'Microprogrammed control is always faster', 'Hardwired control requires a control address register'],
        answer: 1,
        explanation: 'Both end up raising the same output lines; the difference is whether those functions exist as designed gates (fast, rigid) or as entries of a stored program read through a CAR (flexible, slower per step).',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.2
  {
    sectionId: 'mano-ch10-s2',
    readingTime: 12,
    intro: 'This section designs one small control unit twice. First the hardwired way: treat the control as a synchronous sequential circuit, draw its state diagram, build the state and excitation tables, and derive flip-flop input equations — Chapter 6’s method pointed at a real machine. Then the microprogrammed way: store the same behavior as words in a control memory, and let a sequencer with a condition field, a select field and an address field walk through them.',
    objectives: [
      'Model a control unit as a synchronous sequential circuit with states, inputs and control outputs',
      'Design the control for a two-instruction machine by the state-table method: state diagram → state table → excitation table → input and output functions',
      'Define the microinstruction format: condition field, select field, address field',
      'Explain the control address register, its incrementer, the conditional branch logic and the opcode mapping',
      'Write a complete microprogram for the same machine and compare the two implementations',
    ],
    concepts: [
      {
        term: 'Control as a sequential circuit',
        kind: 'definition',
        statement: 'A control unit is a synchronous sequential circuit whose **states** are the timing conditions, whose **inputs** are the decoded opcode bits and status flags, and whose **outputs** are the control functions.',
        detail: 'This is the decisive abstraction: once the control is seen as a state machine, the entire Chapter 6 repertoire — state diagrams, state tables, excitation tables, flip-flop input equations — applies to it directly. The timing-signal approach of Section 10.1 is the special case where the state register is a counter and the states are decoded one-hot.',
      },
      {
        term: 'The state-table design method',
        kind: 'method',
        statement: 'The hardwired design procedure: (1) draw the state diagram, one state per timing condition; (2) assign binary values to states with $n$ flip-flops; (3) derive the state table; (4) choose a flip-flop type and fill in the **excitation table**; (5) simplify the flip-flop input functions and the output functions with Karnaugh maps.',
        detail: 'Mano’s worked design in this chapter is exactly this pipeline for a small computer. The method scales to the basic computer of Chapter 11, where the diagram simply acquires more states (an indirect state, an interrupt cycle) and more input labels.',
      },
      {
        term: 'The two-instruction example machine',
        kind: 'notation',
        statement: 'The worked machine has two instructions: **LDA** (opcode bit $q = 0$: AC ← M[adr], direct) and **BZ** (opcode bit $q = 1$: if the zero flag $Z = 1$ then PC ← adr). Its five states are the fetch ($T_0, T_1$), decode ($T_2$) and execute ($T_3, T_4$) conditions.',
        detail: 'State flow: $T_0$: AR ← PC; $T_1$: IR ← M[AR], PC ← PC + 1; $T_2$: AR ← IR(address field) and decode $q$; then LDA executes in two states ($T_3$: DR ← M[AR]; $T_4$: AC ← DR) while BZ executes in one ($T_3$: branch if Z). The asymmetry — different instructions take different numbers of states — is the whole point of the state diagram’s branch at $T_2$.',
      },
      {
        term: 'Excitation table and input functions',
        kind: 'method',
        statement: 'Encoding the five states in three D flip-flops $Q_2 Q_1 Q_0$ ($T_0 = 000$, $T_1 = 001$, $T_2 = 010$, $T_3 = 011$, $T_4 = 100$) and simplifying gives the input functions $D_2 = \\bar{Q}_2 Q_1 Q_0 \\bar{q}$, $D_1 = \\bar{Q}_2 (Q_1 \\oplus Q_0)$ and $D_0 = \\bar{Q}_2 \\bar{Q}_0$.',
        detail: 'Read them as: $D_0$ copies the pattern “state is $T_0$ or $T_2$” (both have $Q_0 = 0$); $D_1$ recognizes $T_1$ or $T_2$ via the XOR of the low bits; $D_2$ fires only from $T_3$ when the instruction is LDA. The flags enter through the outputs, not the state: BZ’s branch signal is $\\bar{Q}_2 Q_1 Q_0 q Z$ — status gates a control function without changing the state flow.',
      },
      {
        term: 'Microinstruction format',
        kind: 'notation',
        statement: 'A **microinstruction** packs three fields: a **condition field** (selects which status bit to test), a **select field** (the Chapter 9 control word SELA | SELB | SELD | OPR plus memory read/write), and an **address field** (the branch target in control memory).',
        detail: 'For the worked machine: 2-bit condition, 14-bit select, 4-bit address = a 20-bit microinstruction; a 16-word control memory then holds every routine with room to spare. The condition codes are: 00 = never branch (just increment), 01 = branch if $Z = 1$, 10 = branch always, 11 = **map** (jump to the routine selected by the opcode).',
      },
      {
        term: 'The sequencer: CAR and mapping',
        kind: 'definition',
        statement: 'The **control address register (CAR)** addresses control memory; each step it either increments or loads the microinstruction’s address field, depending on the tested condition, and at the end of fetch a **mapping** operation loads the opcode-derived address of the instruction’s routine.',
        detail: 'The condition field drives a multiplexer over the status bits (with constants 0 and 1 for never/always); the mux output chooses increment-versus-load. Mapping is the microprogram version of the decoder: where hardwired logic ANDs $D_k$ into every relevant control function, the microprogram branches once to the routine that belongs to opcode $k$.',
      },
      {
        term: 'Microroutines and the shared fetch',
        kind: 'insight',
        statement: 'A microprogram is organized as one shared **fetch routine** (ending in a map) plus one **microroutine per instruction**, each ending with an unconditional branch back to the fetch — precisely mirroring the instruction cycle.',
        detail: 'Sharing the fetch routine across all instructions is why microprogramming shines for large instruction sets: the $k$-th instruction costs one routine, not a redesign of the whole control network. This is the structure of every microcoded processor.',
      },
      {
        term: 'Hardwired versus microprogrammed',
        kind: 'insight',
        statement: 'Hardwired control executes a step at gate-delay speed but must be rewireed to change; microprogrammed control costs one control-memory read per step (tens of nanoseconds in the era’s ROMs) but changes by rewriting ROM contents.',
        detail: 'Mano’s rule of thumb: use hardwired logic for small, stable, speed-critical control (counters, simple machines); use microprogramming when the instruction set is rich or still evolving. Real processors historically used both — hardwired for the simplest operations, microcoded for the rest.',
      },
    ],
    examples: [
      {
        title: 'State-table design of the two-instruction control',
        problem: 'Design the hardwired control for the machine with LDA (q = 0) and BZ (q = 1, branch if Z = 1) using three D flip-flops.',
        steps: [
          { label: 'Step 1: Draw the state diagram', text: 'States: $T_0$ (AR ← PC), $T_1$ (IR ← M[AR], PC ← PC + 1), $T_2$ (AR ← IR address, decode $q$), $T_3$, $T_4$. Transitions: $T_0 \\to T_1 \\to T_2 \\to T_3$; from $T_3$, LDA continues to $T_4$ while BZ is finished and returns to $T_0$; $T_4 \\to T_0$.' },
          { label: 'Step 2: Assign state codes', text: '$T_0 = 000$, $T_1 = 001$, $T_2 = 010$, $T_3 = 011$, $T_4 = 100$ — three D flip-flops $Q_2 Q_1 Q_0$, codes chosen so successive states count naturally upward.' },
          { label: 'Step 3: Build the state table', text: 'Next states: 000 → 001; 001 → 010; 010 → 011; 011 → 100 if $q = 0$, else 000; 100 → 000. The input $Z$ does not affect next states at all — it only gates BZ’s branch output.' },
          { label: 'Step 4: Fill the excitation table for D flip-flops', text: 'For D flip-flops the excitation equals the next state, so $D_2, D_1, D_0$ are the next-state bits written as functions of $Q_2 Q_1 Q_0$ and $q$.' },
          { label: 'Step 5: Simplify with Karnaugh maps', text: '$D_2 = \\bar{Q}_2 Q_1 Q_0 \\bar{q}$ (fires only from $T_3$ when the instruction is LDA); $D_1 = \\bar{Q}_2 (Q_1 \\oplus Q_0)$ (recognizes $T_1$ and $T_2$); $D_0 = \\bar{Q}_2 \\bar{Q}_0$ (recognizes $T_0$ and $T_2$).' },
          { label: 'Step 6: Verify every transition', text: 'State 000: $D_2 D_1 D_0 = 001$ → $T_1$ ✓. 001: $= 010$ → $T_2$ ✓. 010: $= 011$ → $T_3$ ✓. 011 with $q = 0$: $= 100$ → $T_4$ ✓; with $q = 1$: $= 000$ → $T_0$ ✓. 100: $= 000$ → $T_0$ ✓.' },
          { label: 'Step 7: Derive the output functions', text: 'Decode the states for the microoperation gates: $T_0 = \\bar{Q}_2 \\bar{Q}_1 \\bar{Q}_0$ (AR ← PC), $T_1 = \\bar{Q}_2 \\bar{Q}_1 Q_0$ (IR ← M, PC ← PC + 1), $T_2 = \\bar{Q}_2 Q_1 \\bar{Q}_0$ (AR ← IR), $\\bar{Q}_2 Q_1 Q_0 \\bar{q}$ (DR ← M for LDA), $Q_2 \\bar{Q}_1 \\bar{Q}_0$ (AC ← DR for LDA), and $\\bar{Q}_2 Q_1 Q_0 q Z$ (PC ← AR, taken only when BZ finds Z = 1).' },
        ],
        result: 'Three flip-flops, three input functions and six output functions completely specify the control: the state-table method turned an instruction set into algebra, and the algebra into gates.',
      },
      {
        title: 'Microprogramming the same machine',
        problem: 'Write the microprogram for the LDA/BZ machine using the 20-bit format condition(2) | select(14) | address(4), with condition codes 00 = increment, 01 = branch if Z = 1, 10 = branch always, 11 = map.',
        steps: [
          { label: 'Step 1: The shared fetch routine at address 0000', text: '0000: condition 00, select = AR ← PC (SELA = PC, SELD = AR, transfer). 0001: condition 00, select = IR ← M[AR] (memory read) together with PC ← PC + 1. 0010: condition 11 (map), select = AR ← IR(address field).' },
          { label: 'Step 2: The mapping rule', text: 'The map operation loads CAR with the fixed prefix followed by the opcode bit: $q = 0$ (LDA) maps to address 1000, $q = 1$ (BZ) maps to address 1010 — the two routines begin one map apart.' },
          { label: 'Step 3: The LDA microroutine at 1000', text: '1000: condition 00, select = DR ← M[AR] (memory read). 1001: condition 10 (always), select = AC ← DR (SELA = DR, SELD = AC, transfer), address = 0000 — control returns to the shared fetch.' },
          { label: 'Step 4: The BZ microroutine at 1010', text: '1010: condition 01 (test Z), address = 1100 — if Z = 1 the CAR loads 1100, otherwise it increments to 1011. 1011: condition 10, select = nothing (no microoperation), address = 0000 — the not-taken path simply goes home.' },
          { label: 'Step 5: The taken branch at 1100', text: '1100: condition 10, select = PC ← AR (SELA = AR, SELD = PC, transfer), address = 0000 — the taken branch loads the target and returns to fetch.' },
          { label: 'Step 6: Count the hardware', text: 'Eight used words of a 16 × 20 control memory (320 bits), a 4-bit CAR with incrementer, a 4-to-1 condition multiplexer and the small mapping logic — no gates rewired if the instruction set changes.' },
        ],
        result: 'The same behavior as the worked state-table design, stored as data: fetch (3 words) + map + LDA (2 words) + BZ branch test and two paths (3 words) = 8 microinstructions.',
      },
      {
        title: 'Adding a third instruction: the cost comparison',
        problem: 'Suppose a third instruction, STA (M[adr] ← AC, opcode 10), is added. Compare the change to the hardwired and microprogrammed designs.',
        steps: [
          { label: 'Step 1: Hardwired change', text: 'The opcode becomes two bits ($q_1 q_0$), so every input function and output function depending on $q$ must be re-derived from new Karnaugh maps; the excitation logic grows; and the wiring of any other instruction that shared terms with the changed ones must be re-checked.' },
          { label: 'Step 2: Microprogrammed change', text: 'Append a two-word routine (write AC to memory, branch back to 0000) at free addresses, e.g. 1110 and 1111, and widen the map from one opcode bit to two — the CAR, sequencer and fetch routine are untouched.' },
          { label: 'Step 3: Speed comparison', text: 'Per microoperation, hardwired logic costs a gate delay — a few nanoseconds; a microinstruction costs a control-memory read — several times slower in the era’s ROMs, and it serializes: one microinstruction per clock period.' },
          { label: 'Step 4: Decide', text: 'A stable, small, fast control (a counter, a fixed protocol) suits hardwired logic; a rich or evolving instruction set suits microcode. This is precisely the trade real processor families made as their instruction sets grew.' },
        ],
        result: 'One instruction added: the hardwired design redoes the excitation algebra; the microprogram writes two words. The speed gap — gate delay versus ROM access — is the price of that flexibility.',
      },
    ],
    keyTakeaways: [
      'A control unit is a synchronous sequential circuit: states = timing conditions, inputs = opcode and status, outputs = control functions.',
      'The state-table method runs: state diagram → state assignment → state table → excitation table → simplified input and output functions.',
      'For the worked machine: $D_2 = \\bar{Q}_2 Q_1 Q_0 \\bar{q}$, $D_1 = \\bar{Q}_2 (Q_1 \\oplus Q_0)$, $D_0 = \\bar{Q}_2 \\bar{Q}_0$, with status Z gating outputs only.',
      'A microinstruction = condition field + select field (the processor control word) + address field; 20 bits in the worked format.',
      'The CAR increments by default, branches when the selected condition is true, and maps the opcode to a routine entry at the end of fetch.',
      'Microprograms share one fetch routine plus one routine per instruction — adding instructions costs words, not rewiring.',
      'Hardwired: fast, rigid. Microprogrammed: flexible, slower per step. Choose by stability and richness of the instruction set.',
    ],
    quiz: [
      {
        q: 'In the worked two-instruction design, why does the zero flag Z not appear in the flip-flop input functions $D_2, D_1, D_0$?',
        options: ['Because Z is only sampled by memory', 'Because Z affects only an output control function — BZ returns to $T_0$ whether or not the branch is taken, so the state flow is the same either way', 'Because the machine has no flags', 'Because Z is latched into a flip-flop first'],
        answer: 1,
        explanation: 'The taken and not-taken BZ paths both end the instruction; Z only decides whether the microoperation PC ← AR is issued ($\\bar{Q}_2 Q_1 Q_0 q Z$). Status gates outputs, not states.',
      },
      {
        q: 'What does the condition field value that selects “map” do?',
        options: ['It increments the CAR twice', 'It loads the CAR with an address formed from the opcode bits — the entry point of that instruction’s microroutine', 'It halts the control unit', 'It writes the IR into control memory'],
        answer: 1,
        explanation: 'Mapping is the microprogram counterpart of instruction decode: a fixed prefix plus the opcode selects the routine, replacing the hardwired decoder products $D_k$.',
      },
      {
        q: 'Which sequence correctly describes the organization of the microprogram for the two-instruction machine?',
        options: ['One routine per instruction, each containing its own fetch code', 'A shared fetch routine ending in a map, then a short routine per instruction, each ending with an unconditional branch back to the fetch', 'A single 100-word routine with no branches', 'Fetch and execute interleaved in the same word'],
        answer: 1,
        explanation: 'Every machine instruction reuses the same fetch microcode; only the mapped routine differs, and each routine ends by branching to address 0000 to fetch the next instruction.',
      },
      {
        q: 'The microinstruction format of the worked design is:',
        options: ['opcode | address | data', 'condition field | select field (the processor control word) | address field — 2 + 14 + 4 = 20 bits', 'only the control word, 14 bits', 'state bits | output bits, 8 bits'],
        answer: 1,
        explanation: 'Twenty bits: which status to test, what the datapath should do this period, and where to go next — sequencing and operation in one word.',
      },
      {
        q: 'The main advantage of microprogrammed over hardwired control is:',
        options: ['It is faster per microoperation', 'The instruction set can be changed or extended by rewriting control memory instead of redesigning gate networks', 'It needs no clock', 'It eliminates the need for status flags'],
        answer: 1,
        explanation: 'Flexibility: microroutines are data in a ROM. The cost is one control-memory access per microoperation, which is why pure speed still favors hardwired logic.',
      },
    
      // PYQ-pattern — microprogrammed flexibility (rephrased)
      {
        q: "A processor’s instruction set is still changing weekly. Which control style fits, and why?",
        options: ["Hardwired discrete circuits, fastest per step", "Microprogrammed control: changes are edits to control memory, not rewiring", "No control unit", "A larger clock only"],
        answer: 1,
        explanation: "**Step 1 — Given data:** weekly ISA edits, correctness plus agility needed.\n**Step 2 — Rule:** hardwired control is a sum-of-products per line (fast, brittle); microcode stores one control word per (state, opcode) with sequencer fields.\n**Step 3 — Apply:** redesigned instruction $=$ rewritten routine rows; no derivation or rewiring.\n**Step 4 — Cross-check:** the worked unit’s shared term survives in both styles; PLA sits between (reprogrammable once, faster than microcode).\n**Step 5 — Distractors:** hardwired needs re-derivation weekly; no control cannot sequence; clock alone adds no behavior.\n**Step 6 — Conclude:** microprogram for flexibility."
      },
      // PYQ-pattern — control memory sizing (rephrased)
      {
        q: "A microprogram holds $64$ control words. How wide is its address field, and what do its sequencer fields do?",
        options: ["$6$ bits; condition selects, select and address choose the next word", "$64$ bits; one per word", "$8$ bits; data only", "$4$ bits; clock only"],
        answer: 0,
        explanation: "**Step 1 — Given data:** $64$ words in control memory.\n**Step 2 — Rule:** address bits $= \\log_2(\\text{words})$; sequencer has condition field (which flag to test), select/next-address logic.\n**Step 3 — Computation:** $\\log_2 64 = 6$ bits ($2^6 = 64$).\n**Step 4 — Cross-check:** $32$ words would need $5$; $128$ would need $7$.\n**Step 5 — Distractors:** $64$ bits confuses words with width; $8$ over-provisions; $4$ addresses only $16$.\n**Step 6 — Conclude:** $6$-bit address plus test/branch fields."
      }
    ],
  },

  // ------------------------------------------------------------------ 10.3
  {
    sectionId: 'mano-ch10-s3',
    readingTime: 8,
    intro: 'The state-table method ends in a list of sum-of-products equations — and there is a chip for exactly that: the programmable logic array. This section sizes a PLA that replaces the whole gate network of the worked control unit, compares it with a ROM realization, and closes the chapter with the design decision — hardwired gates, one PLA, or a microprogram — that every control designer faces.',
    objectives: [
      'Describe the PLA as an AND–OR structure programmable in both planes (from Chapter 5)',
      'Translate the worked control unit’s equations into a PLA programming table',
      'Compute the required PLA size: inputs, product terms and outputs',
      'Compare the PLA with a ROM realization of the same control',
      'Summarize when to choose hardwired, PLA or microprogrammed implementation',
    ],
    concepts: [
      {
        term: 'PLA structure',
        kind: 'definition',
        statement: 'A **programmable logic array (PLA)** is an AND plane feeding an OR plane: the AND plane generates chosen product terms of the inputs, and the OR plane sums chosen subsets of those terms into each output — any set of two-level (sum-of-products) functions in one chip.',
        detail: 'From Chapter 5: each input appears in both true and complemented form at every AND gate’s disposal, each AND gate output can drive any OR gate, and each output can optionally be inverted. Programming = specifying the connections, whether by mask (factory), by fuses (field-programmable) or by erasable technology.',
      },
      {
        term: 'PLA size notation',
        kind: 'notation',
        statement: 'A PLA is specified by **inputs × product terms × outputs**; a classic commercial part is **16 × 48 × 8** — 16 inputs, 48 AND terms, 8 outputs.',
        detail: 'The numbers bound the design: the worked control needs no more than 5 of the 16 inputs, 8 of the 48 product terms and exactly 8 outputs — a comfortable fit in one classic part, with headroom for a larger instruction set.',
      },
      {
        term: 'The PLA control method',
        kind: 'method',
        statement: 'To realize a control unit in a PLA: finish the state-table design, list every flip-flop input function and output function as sum-of-products, merge the product-term lists (shared terms are programmed once), and enter the result as the PLA’s connection table.',
        detail: 'This keeps the hardwired speed — outputs appear after one AND and one OR delay — while replacing dozens of gates and their interconnections with a single structured, documented chip. The state flip-flops (with the PLA feeding their D inputs and receiving their outputs) close the sequential loop.',
      },
      {
        term: 'Shared product terms',
        kind: 'insight',
        statement: 'One PLA product term can drive several outputs, which the worked design exploits: the term $\\bar{Q}_2 Q_1 Q_0 \\bar{q}$ is simultaneously the D input of flip-flop 2 and the DR ← M[AR] control function.',
        detail: 'Sharing is free in a PLA (an AND gate output can feed every OR gate) but expensive in discrete gates, where each fan-out means another package pin and wire. It is the single biggest reason PLA control beats gate control in board area.',
      },
      {
        term: 'PLA versus ROM',
        kind: 'insight',
        statement: 'A ROM fully decodes its address inputs — it stores one word for **every** input combination, $2^n$ words for $n$ inputs — while a PLA implements only the product terms the functions actually need.',
        detail: 'For the worked control, a ROM would need $2^5 = 32$ words of 8 bits; the PLA needs only 8 product terms. Control functions are sparse (most input combinations never occur), so PLAs exploit the sparsity and ROMs waste it — though a ROM is simpler to program when the truth table is dense anyway, and the microprogrammed design of Section 10.2 is exactly a control ROM plus sequencer.',
      },
      {
        term: 'Choosing an implementation',
        kind: 'insight',
        statement: 'The three realizations of one control unit: **discrete gates** (fastest, most wiring), **PLA** (nearly as fast, one chip, structured), **microprogram** (flexible, one memory read per step).',
        detail: 'Mano’s closing message: the choice is engineering, not doctrine. Small fixed controllers — counters, sequencers, the timing of the basic computer — suit gates or a PLA; rich or evolving instruction sets suit microcode. The basic computer of Chapter 11 is small enough to design completely with hardwired control functions, and that design is carried out in full.',
      },
    ],
    examples: [
      {
        title: 'Sizing the PLA for the worked control unit',
        problem: 'Realize the two-instruction control unit (LDA/BZ, three D flip-flops $Q_2 Q_1 Q_0$, inputs $q$ and $Z$) in a PLA and compute its size.',
        steps: [
          { label: 'Step 1: Count the inputs', text: 'Five: $Q_2, Q_1, Q_0$ (state), $q$ (opcode bit), $Z$ (status). Each is available in both polarities inside the AND plane.' },
          { label: 'Step 2: List the functions to realize', text: 'Flip-flop inputs: $D_2 = \\bar{Q}_2 Q_1 Q_0 \\bar{q}$; $D_1 = \\bar{Q}_2 \\bar{Q}_1 Q_0 + \\bar{Q}_2 Q_1 \\bar{Q}_0$; $D_0 = \\bar{Q}_2 \\bar{Q}_0$. Control outputs: $T_0 = \\bar{Q}_2 \\bar{Q}_1 \\bar{Q}_0$; $T_1 = \\bar{Q}_2 \\bar{Q}_1 Q_0$; $T_2 = \\bar{Q}_2 Q_1 \\bar{Q}_0$; the DR load with memory read $= \\bar{Q}_2 Q_1 Q_0 \\bar{q}$; $T_4 = Q_2 \\bar{Q}_1 \\bar{Q}_0$; and the branch enable $= \\bar{Q}_2 Q_1 Q_0 q Z$.' },
          { label: 'Step 3: Expand the XOR', text: 'The compact form $D_1 = \\bar{Q}_2 (Q_1 \\oplus Q_0)$ is not two-level; expand it as $\\bar{Q}_2 \\bar{Q}_1 Q_0 + \\bar{Q}_2 Q_1 \\bar{Q}_0$ — two product terms, which the AND plane handles directly.' },
          { label: 'Step 4: Merge and share product terms', text: 'Distinct terms: $\\bar{Q}_2 Q_1 Q_0 \\bar{q}$, $\\bar{Q}_2 \\bar{Q}_1 Q_0$, $\\bar{Q}_2 Q_1 \\bar{Q}_0$, $\\bar{Q}_2 \\bar{Q}_0$, $\\bar{Q}_2 \\bar{Q}_1 \\bar{Q}_0$, $\\bar{Q}_2 Q_1 Q_0$, $Q_2 \\bar{Q}_1 \\bar{Q}_0$, $\\bar{Q}_2 Q_1 Q_0 q Z$ — eight in all. Note the sharing: $\\bar{Q}_2 \\bar{Q}_1 Q_0$ feeds both $D_1$ and $T_1$; $\\bar{Q}_2 Q_1 \\bar{Q}_0$ feeds both $D_1$ and $T_2$; $\\bar{Q}_2 Q_1 Q_0 \\bar{q}$ feeds both $D_2$ and the DR-load output.' },
          { label: 'Step 5: Count the outputs', text: 'Eight: $D_2$, $D_1$, $D_0$, and the five control signals $T_0$, $T_1$, $T_2$, DR-load (with the $T_4$ and branch-enable signals as the remaining outputs).' },
          { label: 'Step 6: State the size and compare', text: 'The design needs a PLA of 5 inputs × 8 product terms × 8 outputs — inside a classic 16 × 48 × 8 part with more than half its capacity free for additional instructions and states.' },
        ],
        result: 'One PLA chip plus three D flip-flops replaces the whole control network; with the classic part’s spare terms, several more instructions could be added before a second chip is needed.',
      },
      {
        title: 'The same control in a ROM',
        problem: 'Compare the PLA realization with storing the same control functions in a ROM addressed by the state and input bits.',
        steps: [
          { label: 'Step 1: Size the ROM', text: 'Five address inputs ($Q_2 Q_1 Q_0 q Z$) mean $2^5 = 32$ addressed words, each 8 bits wide for the eight output functions — 256 bits total, versus the PLA’s 8 product terms.' },
          { label: 'Step 2: Fill the truth table sparsely', text: 'Of the 32 input combinations, only the 10 with valid state codes 000–100 matter for each input pair; the rest are don’t-cares whose stored bits are never used — the ROM decodes every combination anyway.' },
          { label: 'Step 3: Account for the difference', text: 'The PLA’s AND plane synthesizes just the 8 needed terms; the ROM’s internal full decoder hardwires all 32 minterms whether used or not. Sparse control logic — most functions here have 3–5 literals per term — is the PLA’s natural habitat.' },
          { label: 'Step 4: When the ROM wins', text: 'If the control is already expressed as a microprogram (Section 10.2), the ROM is not implementing Boolean functions at all — it stores sequenced microinstructions, and the CAR plus condition logic supply the sequencing the PLA design gets from its flip-flops.' },
        ],
        result: 'PLA: 8 product terms, fast two-level logic, best for combinational control. ROM: 32 decoded words, best when behavior is stored and sequenced (microcode). Both fit the same design in about one chip.',
      },
    ],
    keyTakeaways: [
      'A PLA is a programmable AND plane into a programmable OR plane — any set of sum-of-products functions on one chip.',
      'PLA sizes are quoted as inputs × product terms × outputs; a classic commercial part is 16 × 48 × 8.',
      'The worked control unit fits in a 5 × 8 × 8 PLA plus three state flip-flops.',
      'Product terms can be shared across outputs — the term $\\bar{Q}_2 Q_1 Q_0 \\bar{q}$ serves both a flip-flop input and a control signal.',
      'A ROM fully decodes all $2^n$ input combinations; a PLA implements only the needed product terms, exploiting the sparsity of control logic.',
      'Implementation choice: discrete gates (speed, wiring), PLA (speed, structure, one chip), microprogram (flexibility, one memory read per step).',
    ],
    quiz: [
      {
        q: 'A commercial PLA described as 16 × 48 × 8 provides:',
        options: ['16 outputs, 48 inputs, 8 product terms', '16 inputs, 48 programmable product terms, and 8 outputs', '16 bits of memory, 48 gates, 8 flip-flops', '16 flip-flops, 48 states, 8 instructions'],
        answer: 1,
        explanation: 'The PLA size notation counts inputs, AND-plane product terms and OR-plane outputs: inputs × product terms × outputs.',
      },
      {
        q: 'Why did the PLA realization of the worked control unit need only eight product terms while an equivalent ROM needs 32 words?',
        options: ['Because the PLA runs at a lower clock rate', 'Because control functions are sparse — the PLA’s AND plane synthesizes only the product terms actually used, while the ROM’s full decoder provides all $2^5$ minterms', 'Because the PLA uses flip-flops instead of memory', 'Because the inputs are analog'],
        answer: 1,
        explanation: 'A ROM internally decodes every input combination; a PLA programs only the terms the functions require. With 5 inputs, that is 8 terms versus 32 decoded minterms.',
      },
      {
        q: 'Which term in the worked design is shared between a flip-flop excitation function and a control output?',
        options: [`$\\bar{Q}_2 \\bar{Q}_0$, shared between $D_1$ and $D_0$`, '$\\bar{Q}_2 Q_1 Q_0 \\bar{q}$, which serves both $D_2$ and the DR ← M[AR] control function', '$q Z$, which serves all outputs', 'None — each output needs its own terms'],
        answer: 1,
        explanation: 'One AND-gate output can drive many OR gates, so the term recognizing “state $T_3$ with opcode LDA” both advances the state and issues the memory read into DR — free sharing that discrete gates pay for in wiring.',
      },
      {
        q: 'Which control style would you choose for a processor whose instruction set is still being redesigned weekly?',
        options: ['Hardwired discrete gates', 'A PLA, because it is the fastest possible', 'Microprogrammed control, because instruction changes are edits to control memory rather than hardware redesigns', 'No control unit at all'],
        answer: 2,
        explanation: 'Microcode stores the control as data: a redesigned instruction is a rewritten routine. PLAs and gates need re-derivation and re-programming of the logic for every change, though they execute each step faster.',
      },
    ],
  },
]
