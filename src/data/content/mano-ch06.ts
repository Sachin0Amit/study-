import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (classic edition)
// Chapter 6: Synchronous Sequential Logic (Sections 6.1 – 6.4)
// Master study content, written from canonical knowledge of the book.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const manoCh6Content: SectionContent[] = [
  // ------------------------------------------------------------------ 6.1
  {
    sectionId: 'mano-ch6-s1',
    readingTime: 11,
    intro: 'A combinational circuit forgets everything when its inputs change; a sequential circuit remembers. The memory lives in storage elements whose outputs feed back to their own inputs, and the gentlest of them — the latch — is just two cross-coupled gates. This section builds the ladder from the basic SR latch through clocked, edge-triggered flip-flops to the JK and T types that make counters and state machines practical.',
    objectives: [
      'Explain the difference between combinational and sequential circuits, and the role of feedback',
      'Analyze the cross-coupled NAND SR latch in all four input combinations, including the forbidden one',
      'State the characteristic tables and equations of the SR, D, JK and T flip-flops',
      'Describe edge triggering, the master-slave construction and the asynchronous set/reset inputs',
      'Apply setup and hold time constraints to compute a maximum clock frequency',
    ],
    concepts: [
      {
        term: 'Sequential circuit',
        kind: 'definition',
        statement: 'A **sequential circuit** has outputs that depend not only on the present inputs but on the past history of inputs — its **internal state**, held in storage elements. The state plus the inputs determine both the outputs and the next state, so sequential circuits contain feedback paths from storage outputs back to their inputs.',
        detail: 'Combinational circuits can always be described by a truth table; sequential circuits need a state table or state diagram (Section 6.2). When all state elements change on a common clock signal, the circuit is **synchronous**; without a clock (as in the basic latch or an asynchronous ripple counter) it is **asynchronous**. Synchronous design is the book’s discipline: it makes timing analysis tractable and is the subject of the rest of this chapter and chapter 7.',
      },
      {
        term: 'SR latch from cross-coupled NAND gates',
        kind: 'definition',
        statement: 'The **SR latch** stores one bit with two cross-coupled NAND gates (each output feeds the other gate’s input). With active-low inputs $S\'$ and $R\'$: $S\'R\' = 11$ holds the stored bit, $S\'R\' = 01$ sets $Q = 1$, $S\'R\' = 10$ resets $Q = 0$, and $S\'R\' = 00$ is **forbidden** — both outputs are driven to 1 and the final state on release is unpredictable.',
        detail: 'The NAND latch is analyzed by tracing the feedback: assume any starting state, propagate each output through the opposite gate, and confirm the assumed state is self-consistent. Because the two gate delays are never exactly equal, the $S\'R\' = 00 \\to 11$ transition starts a race the circuit cannot resolve deterministically — a metastable oscillation. The forbidden input is why designers moved on to clocked elements. The characteristic equation of the usable SR element is $Q(t+1) = S + R\'Q$ with the constraint $SR = 0$.',
      },
      {
        term: 'D latch and edge triggering',
        kind: 'definition',
        statement: 'A **D latch** eliminates the forbidden input by gating $S = D$, $R = D\'$: while the enable is active it is **transparent** ($Q$ follows $D$); when the enable is inactive it holds. An **edge-triggered flip-flop** goes further — it samples $D$ only during the brief transition of the clock pulse, and ignores $D$ at all other times.',
        detail: 'Transparency is dangerous in cascaded systems: while the enable is high, output changes stream through to later stages. Edge triggering restores discipline: a value captured at the clock edge cannot be disturbed by later input changes in the same cycle, which is what makes the synchronous design procedure of Section 6.4 sound.',
      },
      {
        term: 'JK flip-flop',
        kind: 'definition',
        statement: 'The **JK flip-flop** removes the SR forbidden state by feeding each output back to gate the opposite input: $J = K = 1$ is legal and **toggles** the state. Its characteristic equation is $$Q(t+1) = JQ\' + K\'Q,$$ and its characteristic table: $JK = 00$ hold, $01$ reset to 0, $10$ set to 1, $11$ toggle.',
        detail: 'The feedback means the toggle case can never apply set and reset simultaneously — whichever output is 1 blocks the very gate that would drive the other output. The JK is the most versatile flip-flop: wiring $J = K = T$ gives the T flip-flop, and wiring $J = D$, $K = D\'$ gives the D flip-flop. Its excitation table is rich in don’t-cares, which usually yields the cheapest counter circuits (Section 6.4).',
      },
      {
        term: 'T flip-flop',
        kind: 'definition',
        statement: 'The **T (toggle) flip-flop** complements its state when $T = 1$ and holds when $T = 0$: $$Q(t+1) = T \\oplus Q = T\'Q + TQ\'.$$ It is the natural element for binary counters, where a stage toggles exactly when all less significant stages are 1.',
        detail: 'The XOR form of the characteristic equation is worth remembering because it converts directly to the excitation rule used in counter design: $T = 1$ whenever the present and next states differ, $T = 0$ whenever they are the same.',
      },
      {
        term: 'Master-slave construction',
        kind: 'method',
        statement: 'A **master-slave flip-flop** cascades two latches on complementary clock phases: the master follows the input while the slave holds, then the slave copies the master while the master holds. The visible output changes only once per clock pulse, isolating input from output during the sensitive interval.',
        detail: 'This pulse-triggered behavior solved the transparency problem in the era of level-sensitive latches and makes JK flip-flops safe to use in tightly-coupled circuits such as ripple counters, where one flip-flop’s output is another’s clock. Modern edge-triggered devices achieve the same isolation with a single edge-sensitive internal design, but the master-slave picture remains the clearest explanation of why a flip-flop is not a latch.',
      },
      {
        term: 'Direct set and reset inputs',
        kind: 'definition',
        statement: 'Besides the clocked inputs, practical flip-flops provide **asynchronous inputs** (preset and clear, often active-low) that force the state immediately, regardless of the clock, the J/K/D/T inputs or the edge. They are used to initialize registers to known states at power-up.',
        detail: 'The word asynchronous is literal: these inputs bypass the clocking structure entirely. A counter built from JK flip-flops, for example, starts counting from a predictable value only because a power-up clear pulse resets every stage to 0 through the direct inputs.',
      },
      {
        term: 'Setup and hold times',
        kind: 'insight',
        statement: 'For reliable capture, the data input must be stable for the **setup time** before the triggering clock edge and remain stable for the **hold time** after it. A register’s maximum clock frequency is set by the flip-flop propagation delay, the combinational delay on the path between flip-flops, and the setup time of the receiving flip-flop.',
        detail: 'The worst-case path gives the minimum clock period: $T \\geq t_{pd}(\\text{FF}) + t_{pd}(\\text{logic}) + t_{su}$. Violating setup or hold captures an indeterminate value — the same race condition the SR latch exhibits, now appearing at the metastable level inside the capture element.',
      },
    ],
    examples: [
      {
        title: 'Full state analysis of the NAND SR latch',
        problem: 'A latch is built from two cross-coupled NAND gates: gate 1 computes $Q = \\overline{S\' \\cdot Q\'}$ and gate 2 computes $Q\' = \\overline{R\' \\cdot Q}$. Trace all four input combinations and explain the forbidden case.',
        steps: [
          { label: 'Step 1: Verify the hold state', text: 'Set $S\' = R\' = 1$ and assume $Q = 0$, $Q\' = 1$. Gate 1: $\\overline{1 \\cdot 1} = 0$, confirming $Q = 0$. Gate 2: $\\overline{1 \\cdot 0} = 1$, confirming $Q\' = 1$. The assumption is self-consistent — the stored bit persists. (Starting from $Q = 1$ checks out the same way.)' },
          { label: 'Step 2: Set the latch', text: 'Drive $S\' = 0$, $R\' = 1$. Gate 1 now has a 0 input, so $Q = 1$ after one gate delay regardless of the old state. Then gate 2 computes $\\overline{1 \\cdot 1} = 0$, so $Q\' = 0$ after a second delay — the latch is set, and releasing $S\'$ back to 1 leaves it set (Step 1 logic).' },
          { label: 'Step 3: Reset the latch', text: 'Drive $S\' = 1$, $R\' = 0$. Symmetrically, gate 2 forces $Q\' = 1$, then gate 1 computes $\\overline{1 \\cdot 1} = 0$, so $Q = 0$ — reset, and it remains reset after $R\'$ returns to 1.' },
          { label: 'Step 4: Enter the forbidden zone', text: 'Drive $S\' = R\' = 0$. Gate 1: $\\overline{0 \\cdot \\cdot} = 1$ forces $Q = 1$; gate 2: $\\overline{0 \\cdot \\cdot} = 1$ forces $Q\' = 1$. Both outputs are 1 — the pair is no longer complementary.' },
          { label: 'Step 5: Race on release', text: 'Now release both inputs to $S\' = R\' = 1$ simultaneously. Each gate sees $1$ and $1$ and starts to fall toward 0; whichever gate is faster wins the race and drives the other back to 1. The final state is set or reset depending on nanosecond asymmetries — unpredictable, so $S\'R\' = 00$ must never occur.' },
        ],
        result: 'Hold, set and reset are the three usable modes; the simultaneous-low case destroys complementarity and makes the release indeterminate — the fundamental reason clocked flip-flops exist.',
      },
      {
        title: 'Deriving the JK characteristic equation',
        problem: 'From the JK characteristic table, derive the next-state equation $Q(t+1) = JQ\' + K\'Q$ using a three-variable K-map.',
        steps: [
          { label: 'Step 1: Write the characteristic table', text: 'Over $J$, $K$ and the present state $Q$: $(0,0)$ hold gives $Q(t+1) = Q$ — so 0 for $Q = 0$ and 1 for $Q = 1$; $(0,1)$ reset gives 0 always; $(1,0)$ set gives 1 always; $(1,1)$ toggle gives $Q\'$ — 1 for $Q = 0$ and 0 for $Q = 1$.' },
          { label: 'Step 2: Plot the eight cells', text: 'On a K-map with variables $J$, $K$, $Q$, the 1-cells are $(J,K,Q) = (0,0,1)$, $(1,0,0)$, $(1,0,1)$ and $(1,1,0)$.' },
          { label: 'Step 3: Group for $JQ\'$', text: 'Cells $(1,0,0)$ and $(1,1,0)$ are adjacent in $K$: both have $J = 1$, $Q = 0$ — the group covers “$J = 1$, present state 0”, the set-when-clear case. This gives the term $JQ\'$.' },
          { label: 'Step 4: Group for $K\'Q$', text: 'Cells $(0,0,1)$ and $(1,0,1)$ are adjacent in $J$: both have $K = 0$, $Q = 1$ — hold or set when already 1. This gives the term $K\'Q$.' },
          { label: 'Step 5: Assemble and check', text: '$Q(t+1) = JQ\' + K\'Q$. Spot checks: $J = K = 1$ gives $Q\' + 0 = Q\'$ — toggle. $J = K = 0$ gives $0 + Q = Q$ — hold. $J = 0, K = 1$ gives 0 — reset. $J = 1, K = 0$ gives $Q\' + Q = 1$ — set. All four rows agree.' },
        ],
        result: 'Two groups on the characteristic K-map yield $Q(t+1) = JQ\' + K\'Q$; the same method on the T table gives $Q(t+1) = T\'Q + TQ\' = T \\oplus Q$.',
      },
      {
        title: 'Maximum clock frequency of a flip-flop cascade',
        problem: 'A synchronous circuit has flip-flops with propagation delay 40 ns and setup time 20 ns, feeding combinational logic whose worst path delay is 30 ns before the next flip-flop. What is the minimum clock period and the maximum clock frequency?',
        steps: [
          { label: 'Step 1: Identify the critical path', text: 'Data leave a source flip-flop only after its propagation delay $t_{pd} = 40$ ns, then ripple through the combinational network for another 30 ns, and must arrive at the destination flip-flop at least $t_{su} = 20$ ns before the capturing edge.' },
          { label: 'Step 2: Sum the budget', text: 'Minimum period: $T \\geq t_{pd}(\\text{FF}) + t_{pd}(\\text{logic}) + t_{su} = 40 + 30 + 20 = 90$ ns.' },
          { label: 'Step 3: Convert to frequency', text: '$f_{\\max} = 1/T \\approx 1/90\\,\\text{ns} \\approx 11.1$ MHz. Clocking faster leaves the destination flip-flop’s setup window unfilled and invites metastable capture.' },
          { label: 'Step 4: Note the general rule', text: 'Each additional logic level between flip-flops consumes budget directly — this is why the state-assignment step of Section 6.3 aims to minimize exactly this combinational logic.' },
        ],
        result: '$T_{\\min} = 90$ ns and $f_{\\max} \\approx 11.1$ MHz; the same budget equation governs every synchronous design in chapters 6 through 8.',
      },
    ],
    keyTakeaways: [
      'Sequential circuits possess state: storage elements with feedback make outputs depend on input history.',
      'The cross-coupled NAND SR latch holds on $S\'R\' = 11$, sets on 01, resets on 10; $S\'R\' = 00$ forces both outputs high and makes release indeterminate — forbidden.',
      'Characteristic equations: $Q(t+1) = D$ for the D flip-flop, $Q(t+1) = JQ\' + K\'Q$ for JK, and $Q(t+1) = T \\oplus Q$ for T.',
      'The JK feedback removes the forbidden SR input; $J = K = 1$ toggles, which is what counters exploit.',
      'Edge triggering and the master-slave construction both guarantee one state change per clock and isolation between input and output within a cycle.',
      'Asynchronous preset/clear inputs override the clock to initialize state at power-up.',
      'Setup/hold analysis gives $T_{\\text{clock}} \\geq t_{pd}(\\text{FF}) + t_{pd}(\\text{logic}) + t_{su}$ for every flip-flop-to-flip-flop path.',
    ],
    quiz: [
      {
        q: 'In the NAND SR latch, which input combination is forbidden and why?',
        options: ['$S\' = R\' = 1$, because it makes both outputs 0', '$S\' = R\' = 0$, because both outputs go to 1 and the release race is indeterminate', '$S\' = 1, R\' = 0$, because it sets and resets at once', '$S\' = 0, R\' = 1$, because it toggles repeatedly'],
        answer: 1,
        explanation: 'Both active-low inputs asserted force both NAND outputs to 1 (not complementary); releasing them simultaneously starts a race whose winner is unpredictable.',
      },
      {
        q: 'A JK flip-flop has $J = 1$, $K = 1$ and present state $Q = 1$. What is $Q(t+1)$?',
        options: ['0, because $J = 1$ forces a set', '1, because $K = 1$ forces a hold', '0, because the $K$ input resets and $J = K = 1$ means toggle', 'Undefined, as in the SR latch'],
        answer: 2,
        explanation: 'With $J = K = 1$ the characteristic equation gives $Q(t+1) = Q\'$ — a toggle, here from 1 to 0. The JK feedback makes this input combination perfectly legal.',
      },
      {
        q: 'The characteristic equation $Q(t+1) = JQ\' + K\'Q$ predicts, for $J = 0$, $K = 0$, that the flip-flop will:',
        options: ['Reset to 0', 'Set to 1', 'Hold its present state', 'Toggle'],
        answer: 2,
        explanation: 'Both terms die ($J = 0$ kills $JQ\'$; $K = 0$ leaves $K\'Q = Q$), so $Q(t+1) = Q$ — the hold condition that makes JK usable for storage.',
      },
      {
        q: 'Why does the master-slave construction prevent the transparency problem of the plain D latch?',
        options: ['It doubles the clock frequency', 'The master and slave are enabled on opposite clock phases, so the output changes at most once per pulse', 'It removes the feedback path entirely', 'It uses NAND gates instead of NOR gates'],
        answer: 1,
        explanation: 'While the master follows the input, the slave is frozen; when the slave updates, the master is frozen. Input changes can never stream through both stages in the same instant.',
      },
      {
        q: 'A path between two flip-flops has $t_{pd}(\\text{FF}) = 15$ ns, logic delay $25$ ns, and destination setup time $10$ ns. The minimum safe clock period is:',
        options: ['25 ns', '40 ns', '50 ns', '15 ns'],
        answer: 2,
        explanation: 'Sum the budget: $15 + 25 + 10 = 50$ ns — the data must arrive 10 ns before the edge after accounting for launch delay and logic delay.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.2
  {
    sectionId: 'mano-ch6-s2',
    readingTime: 9,
    intro: 'Given a clocked sequential circuit, what does it do? Analysis answers this with three artifacts — state equations, a state table and a state diagram — followed by a timing trace that reveals the circuit’s behavior as a sequence of input-output events. The same artifacts run in reverse in Section 6.4, which is why the analysis procedure deserves to be mastered first.',
    objectives: [
      'Write the state equations and output equation of a clocked circuit from its flip-flop input functions',
      'Construct the state table and state diagram, including the treatment of unreachable states',
      'Distinguish Mealy from Moore output conventions and their timing consequences',
      'Verify circuit behavior with an input-sequence timing trace',
    ],
    concepts: [
      {
        term: 'State equations',
        kind: 'notation',
        statement: 'The **state equations** of a clocked sequential circuit express each flip-flop’s next state as a function of the present states and inputs: with two flip-flops $A$, $B$ and input $x$, $A(t+1) = f_A(A, B, x)$ and $B(t+1) = f_B(A, B, x)$. For D flip-flops the input functions are themselves the next-state functions.',
        detail: 'Deriving them is mechanical: write each flip-flop’s data (or excitation) function from the combinational logic, and substitute the flip-flop characteristic equation. For JK flip-flops, substitute $Q(t+1) = JQ\' + K\'Q$; for T flip-flops, $Q(t+1) = T \\oplus Q$. The output equation is written separately: $y = g(A, B, x)$ if outputs depend on inputs too.',
      },
      {
        term: 'State table',
        kind: 'method',
        statement: 'The **state table** is the sequential circuit’s truth table: rows are present states, columns are input combinations, and each entry gives the **next state** (and, in a Mealy table, the output for that present-state/input pair).',
        detail: 'With one input the table has two next-state columns ($x = 0$ and $x = 1$); with two inputs, four. Every one of the $2^{n}$ flip-flop combinations appears as a row — including states that the circuit can never reach from its initial state. Such unreachable states must still be tabulated honestly; Section 6.3 removes redundant ones and Section 6.4 checks that unused ones recover to the main cycle.',
      },
      {
        term: 'State diagram',
        kind: 'notation',
        statement: 'The **state diagram** is the state table drawn as a directed graph: nodes are states, and each labeled edge gives the input (and output for Mealy) of a transition — edge label $x/y$ on input $x$ producing output $y$.',
        detail: 'For Moore machines the output belongs to the node, since it depends only on the state. The diagram is the most readable form of a sequential circuit: the number of edges leaving a node equals the number of distinct input combinations, and any suspicious node (no outgoing reset path, unreachable, and so on) is immediately visible.',
      },
      {
        term: 'Mealy versus Moore machines',
        kind: 'definition',
        statement: 'In a **Mealy machine** the outputs are a function of state and inputs, so an output can change asynchronously the moment an input changes. In a **Moore machine** the outputs depend only on the state, so they are stable for the whole clock period following each state change and are delayed one cycle relative to Mealy.',
        detail: 'A Mealy detector of input pattern $11$ fires its output in the very clock cycle in which the second 1 arrives; the equivalent Moore machine needs a dedicated “detected” state, so the output rises one clock later but stays aligned to whole clock periods. Both appear throughout the book’s examples — Mealy for economy (fewer states), Moore for output timing regularity. The Moore version of an $n$-state Mealy machine may need up to $n$ extra states to encode the outputs.',
      },
      {
        term: 'Analysis procedure',
        kind: 'method',
        statement: 'The analysis of a clocked sequential circuit proceeds: (1) label flip-flop inputs and write their excitation functions; (2) substitute characteristic equations to get **state equations**; (3) tabulate next states and outputs for all present-state/input combinations; (4) draw the **state diagram**; (5) verify with a **timing trace** of a representative input sequence.',
        detail: 'The final verbal description — “this circuit detects two consecutive 1s” — is the real product of analysis; the trace is what justifies it. Note the connection to the finite-state machines of discrete mathematics (Rosen, chapter 13): the state diagram here is exactly the transition diagram of a finite automaton, with the flip-flops realizing its state register.',
      },
    ],
    examples: [
      {
        title: 'Complete analysis of a two-flip-flop Mealy circuit',
        problem: 'A sequential circuit has D flip-flops $A$ and $B$ with input $x$ and output $y$: $D_A = x(A \\oplus B)$, $D_B = A\'B\'x$, $y = x(A \\oplus B)$. Derive the state table and state diagram and describe the circuit’s behavior.',
        steps: [
          { label: 'Step 1: Record the state equations', text: 'For D flip-flops the excitation functions are the next-state functions: $A(t+1) = x(A \\oplus B)$, $B(t+1) = A\'B\'x$, with Mealy output $y = x(A \\oplus B)$.' },
          { label: 'Step 2: Tabulate all four states × two inputs', text: 'State $AB = 00$: on $x = 0$, next $= 00$; on $x = 1$, $A(t+1) = 1 \\cdot 0 = 0$, $B(t+1) = 1$, next $= 01$. State $01$: $x = 0 \\to 00$; $x = 1 \\to A(t+1) = 1(0 \\oplus 1) = 1$, $B(t+1) = 0$, next $= 10$. State $10$: $x = 0 \\to 00$; $x = 1 \\to A(t+1) = 1(1 \\oplus 0) = 1$, $B(t+1) = 0$, next $= 10$. State $11$ (unused): both inputs lead to $00$.' },
          { label: 'Step 3: Attach the outputs', text: 'The output is 1 only when $x = 1$ and $A \\oplus B = 1$: that is the transitions $01 \\xrightarrow{1/1} 10$ and $10 \\xrightarrow{1/1} 10$. All other edges carry output 0.' },
          { label: 'Step 4: Draw the state diagram and interpret', text: 'State 00 is the reset state (call it $A$); 01 means “one 1 seen” ($B$); 10 means “two or more consecutive 1s seen” ($C$). Every 0 returns to reset. The circuit asserts $y$ exactly when a 1 arrives while already in $B$ or $C$ — it detects the input pattern **11** with overlapping allowed, and state 11 self-corrects to 00.' },
          { label: 'Step 5: Verify with a timing trace', text: 'Feed $x = 0, 1, 1, 0, 1, 1, 1$ starting from 00: states go $00 \\to 00 \\to 01 \\to 10 \\to 00 \\to 01 \\to 10 \\to 10$ and the outputs read $y = 0, 0, 1, 0, 0, 1, 1$ — a 1 exactly at the second of each run of consecutive 1s, and it keeps firing for every additional 1.' },
        ],
        result: 'The circuit is an overlapping Mealy detector for two consecutive 1s; the state diagram makes the redundant state 11 and the self-loop on 10 visible at a glance.',
      },
      {
        title: 'Mealy-to-Moore timing comparison on the same detector',
        problem: 'Convert the 11-detector behavior to a Moore machine with three states and compare the output sequences produced for the same input.',
        steps: [
          { label: 'Step 1: Assign outputs to states', text: 'Use states $S_0$ (reset, output 0), $S_1$ (one 1 seen, output 0) and $S_2$ (two or more 1s seen, output 1). The output is a property of the state, written inside the node.' },
          { label: 'Step 2: Write the Moore transitions', text: '$S_0$: $0 \\to S_0$, $1 \\to S_1$. $S_1$: $0 \\to S_0$, $1 \\to S_2$. $S_2$: $0 \\to S_0$, $1 \\to S_2$. The Mealy edges labeled $1/1$ become plain $1$-edges into the output-1 state $S_2$.' },
          { label: 'Step 3: Trace the Moore machine', text: 'For the same input $x = 0, 1, 1, 0, 1, 1, 1$ the machine occupies $S_0, S_0, S_1, S_2, S_0, S_1, S_2$ during the seven clock periods and reads outputs $0, 0, 0, 1, 0, 0, 1$ — with an additional 1 during the following period if no further input arrives.' },
          { label: 'Step 4: Compare the two output streams', text: 'Mealy gave $0, 0, 1, 0, 0, 1, 1$; Moore gives $0, 0, 0, 1, 0, 0, 1(,\\ldots)$. The Moore output is the Mealy output delayed one clock period: detection is registered in the state itself rather than in the transition.' },
          { label: 'Step 5: State the design lesson', text: 'Mealy costs fewer states and reacts a cycle earlier but lets outputs glitch with input skew; Moore outputs are clean, clock-aligned signals — one full period wide — at the price of an extra state whenever a detection edge must be remembered.' },
        ],
        result: 'Same behavior, different timing: Moore trades one state and one clock of latency for glitch-free, clock-aligned outputs — the classic Mealy/Moore trade-off the book illustrates with exactly this kind of sequence detector.',
      },
    ],
    keyTakeaways: [
      'State equations come from excitation functions plus flip-flop characteristic equations; outputs are written separately.',
      'The state table enumerates every present-state/input combination, including unreachable states, whose behavior must still be understood.',
      'A Mealy diagram labels edges $x/y$; a Moore diagram labels nodes with outputs.',
      'Mealy outputs react within the input’s clock cycle; Moore outputs are delayed one cycle but are stable for full clock periods.',
      'Analysis ends with a timing trace and a verbal description of what the circuit computes — the machine’s input-output contract.',
      'The state diagram is precisely the transition diagram of the finite automata studied in discrete mathematics — flip-flops realize the state register.',
    ],
    quiz: [
      {
        q: 'A circuit has flip-flops with $D_A = A\'B + AB$ and $D_B = xB\'$. How many rows does its state table have (one input $x$)?',
        options: ['2', '4', '8', '16'],
        answer: 1,
        explanation: 'Two flip-flops give $2^{2} = 4$ present states; each row has next-state columns for $x = 0$ and $x = 1$.',
      },
      {
        q: 'The essential difference between Mealy and Moore outputs is:',
        options: ['Mealy outputs depend only on the state; Moore outputs depend on state and input', 'Mealy outputs depend on state and input; Moore outputs depend only on the state', 'Moore machines cannot use D flip-flops', 'Mealy machines have no clock'],
        answer: 1,
        explanation: 'Mealy’s $y = g(\\text{state}, x)$ fires during the input’s cycle; Moore’s $y = g(\\text{state})$ changes only when the state changes, one cycle later.',
      },
      {
        q: 'In the analyzed circuit ($D_A = x(A \\oplus B)$, $D_B = A\'B\'x$, $y = x(A \\oplus B)$), starting from state 00 with input $x = 1$ then $x = 1$ again, the states and outputs are:',
        options: [`$00 \\to 01 \\to 10$ with outputs $0$ then $1$`, `$00 \\to 01 \\to 01$ with outputs $0$ then $0$`, `$00 \\to 10 \\to 10$ with outputs $1$ then $1$`, `$00 \\to 00 \\to 00$ with outputs $0$ then $0$`],
        answer: 0,
        explanation: 'First 1: next state 01, output $1 \\cdot (0 \\oplus 0) = 0$. Second 1: from 01, next state 10 (entering $C$) and output $1 \\cdot (0 \\oplus 1) = 1$ — the detection.',
      },
      {
        q: 'Why must unreachable states still be analyzed in the state table?',
        options: ['They can be entered by input glitches or power-up conditions, and their recovery behavior matters', 'They make the state diagram prettier', 'The state table must always be square', 'They generate the circuit’s outputs'],
        answer: 0,
        explanation: 'A transient error or an unlucky power-up can land the machine in an unreachable state; a self-correcting design returns it to the main cycle, which is only verifiable if those transitions are tabulated.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.3
  {
    sectionId: 'mano-ch6-s3',
    readingTime: 9,
    intro: 'Two sequential circuits that produce identical output sequences for every possible input sequence are indistinguishable from the outside — so the larger one is wasted hardware. State reduction finds the smallest externally equivalent machine, and state assignment then chooses which binary codes the surviving states get, a choice that can double or halve the amount of combinational logic. Both steps precede any gate-level work in the design procedure.',
    objectives: [
      'Define state equivalence precisely in terms of input and output sequences',
      'Apply the row-matching method to merge redundant states',
      'Apply the implication chart to detect equivalences that row matching misses',
      'Compare binary state assignments by counting gates and literals in the excitation equations',
      'Explain one-hot assignment and when its flip-flop cost is worthwhile',
    ],
    concepts: [
      {
        term: 'State equivalence',
        kind: 'definition',
        statement: 'Two states $S_a$ and $S_b$ are **equivalent** if, for every possible input sequence applied from either state, the circuits produce **identical output sequences** and end in equivalent states. Equivalent states can be merged into one with no external effect.',
        detail: 'The definition is recursive: $S_a \\equiv S_b$ requires equal outputs now and equivalent next states for every input symbol. This recursion is exactly what the two reduction methods operationalize — row matching checks the crude case where the next-state rows are literally identical; the implication chart checks the full recursive condition.',
      },
      {
        term: 'Row-matching method',
        kind: 'method',
        statement: '**Row matching** scans the state table for rows with identical next-state entries and identical outputs and merges them; the merged name is substituted everywhere, and the scan repeats until no two rows match. It is simple but incomplete — it only finds equivalences that are visible as identical rows at some stage.',
        detail: 'Merging one pair can make a previously hidden pair visible (substitution can equalize rows that were not equal before), which is why the scan iterates. Row matching never merges states whose next-state entries merely point to each other — that case needs the implication chart.',
      },
      {
        term: 'Implication chart',
        kind: 'method',
        statement: 'The **implication chart** (pair table) tests every state pair: a pair is crossed out if the two states’ outputs differ; otherwise the pair **implies** the pairs of corresponding next states, and it survives only if every implied pair survives. Pairs that imply only themselves (or each other) pass.',
        detail: 'Work bottom-up: kill pairs with mismatched outputs, then repeatedly kill any pair that implies a killed pair. The surviving pairs are exactly the equivalent pairs — including circular equivalences such as $S_1 \\to S_2$ on one input and $S_2 \\to S_1$ on the other, which row matching cannot see. The chart has $k(k-1)/2$ cells for $k$ states and terminates because elimination is monotone.',
      },
      {
        term: 'State assignment',
        kind: 'definition',
        statement: 'A **state assignment** maps each of the $k$ states of the reduced table onto the $2^{n}$ codes of $n = \\lceil \\log_2 k \\rceil$ flip-flops. Different assignments yield different excitation equations — the same state table can cost twice the gates under a poor code map.',
        detail: 'With $k = 4$ states and $n = 2$ flip-flops there are $4! = 24$ raw assignments, but complementing or permuting the state variables merely renames signals, leaving circuit cost unchanged; only $24/8 = 3$ distinct cost classes exist. For larger $k$ the count grows explosively ($k = 9$ states over 4 flip-flops already gives millions of raw assignments), so heuristic guidelines replace exhaustive search: give adjacent codes to states that share a next state or that are entered from a common state.',
      },
      {
        term: 'One-hot assignment',
        kind: 'method',
        statement: 'A **one-hot** assignment uses one flip-flop per state ($k$ flip-flops) with exactly one of them hot at a time. The excitation logic shrinks dramatically — each flip-flop’s equation is just the OR of the conditions on its incoming edges — at the price of extra flip-flops.',
        detail: 'One-hot turns state logic into wiring: flip-flop $Q_i$ is set by an edge from state $j$ when $Q_j \\cdot (\\text{input of that edge})$ holds. The trade is $k$ flip-flops versus $\\lceil \\log_2 k \\rceil$ plus much simpler, shallower combinational logic — the standard bargain in programmable logic devices, where flip-flops are abundant and wide AND gates are not. Binary assignment suits discrete gate minimization where flip-flops are the scarce resource.',
      },
    ],
    examples: [
      {
        title: 'Reducing a six-state table with row matching and an implication chart',
        problem: 'Reduce the following state table (input $x$, Moore output $z$) to its minimum number of states: a: (b, c), z=0; b: (d, e), z=0; c: (d, e), z=0; d: (e, f), z=1; e: (d, f), z=1; f: (a, f), z=1 — where each pair lists the next state for $x = 0$ and $x = 1$.',
        steps: [
          { label: 'Step 1: Scan for identical rows', text: 'Rows b and c both read (d, e) with output 0 — identical, so $b \\equiv c$ by row matching. Replace every c by b throughout the table.' },
          { label: 'Step 2: Rescan after substitution', text: 'The table is now: a: (b, b), 0; b: (d, e), 0; d: (e, f), 1; e: (d, f), 1; f: (a, f), 1. Rows d and e differ in their $x = 0$ next state (e versus d) — no textual match, so row matching is finished with five states.' },
          { label: 'Step 3: Build the implication chart', text: 'List all pairs of the five states. Cross out immediately every pair with unequal outputs: (a,d), (a,e), (a,f), (b,d), (b,e), (b,f). Remaining: (a,b) and (d,e).' },
          { label: 'Step 4: Test the implied pairs', text: 'Pair (a,b): outputs match (0, 0); on $x = 0$ it implies (b, b) — trivially fine; on $x = 1$ it implies (b, d) — a crossed-out pair, so (a,b) is eliminated. Pair (d,e): outputs match (1, 1); $x = 0$ implies (e, d) — the pair (d,e) itself, a circular implication that is consistent; $x = 1$ implies (f, f) — trivially fine. So $d \\equiv e$ survives.' },
          { label: 'Step 5: Merge and present the reduced table', text: 'Merge e into d: a: (b, b), 0; b: (d, d), 0; d: (d, f), 1; f: (a, f), 1. Four states — no further pairs survive, so this is minimal.' },
        ],
        result: 'Row matching found $b \\equiv c$ (6 → 5 states); the implication chart then exposed the circular equivalence $d \\equiv e$ (5 → 4 states). The machine now fits two flip-flops instead of three.',
      },
      {
        title: 'Two state assignments, two different costs',
        problem: 'For the reduced table a: (b, b), 0; b: (d, d), 0; d: (d, f), 1; f: (a, f), 1 (D flip-flops, input $x$), compare assignment 1: a=00, b=01, d=10, f=11 against assignment 2: a=00, b=01, d=11, f=10.',
        steps: [
          { label: 'Step 1: Equations for assignment 1', text: 'With state variables $Q_1Q_0$, the next-state functions are $Q_1(t+1) = Q_1\'Q_0 + Q_1Q_0\' + Q_1x$ and $Q_0(t+1) = Q_1\'Q_0\' + Q_1x$, and $z = Q_1$. Total: five product terms and twelve literal appearances.' },
          { label: 'Step 2: Equations for assignment 2', text: 'The same table under the Gray-order assignment gives $Q_1(t+1) = Q_0 + Q_1x$ and $Q_0(t+1) = Q_1\' + Q_0x\'$, with the same output $z = Q_1$. Total: four product terms and seven literals.' },
          { label: 'Step 3: Account for the difference', text: 'Assignment 2 places the states of the table’s main cycle (a → b → d → f) on adjacent codes, so each transition flips a single flip-flop; assignment 1 breaks the cycle between d and f, forcing the term $Q_1Q_0\'$ (and a two-variable jump) that Gray ordering avoids.' },
          { label: 'Step 4: Translate to hardware', text: 'At roughly one gate input per literal, the second assignment saves about 40% of the excitation logic with identical external behavior — and it also shortens the critical path, raising the maximum clock frequency from the timing analysis of Section 6.1.' },
          { label: 'Step 5: Note the one-hot alternative', text: 'A one-hot encoding of the same four states uses four flip-flops but each excitation equation collapses to two product terms of two literals each ($Q_b = Q_a$ from state a, $Q_d = Q_b$, $Q_f = Q_dx + Q_fx$, $Q_a = Q_fx\'$) — more flip-flops, nearly no combinational logic.' },
        ],
        result: 'Same machine, different code maps: 12 literals versus 7 under binary encodings, or minimal logic at the cost of two extra flip-flops under one-hot — state assignment is a genuine design variable, not bookkeeping.',
      },
    ],
    keyTakeaways: [
      'States are equivalent when no input sequence can distinguish their output sequences; equivalent states merge without external effect.',
      'Row matching merges identical rows and iterates after substitution, but cannot see circular equivalences.',
      'The implication chart resolves all equivalences: outputs must match, and every implied pair must survive.',
      'Merging states saves flip-flops only when the count crosses a power-of-two boundary ($k \\le 2^{n}$).',
      'State assignment changes cost but not behavior; for 4 states over 2 flip-flops only 3 distinct assignments exist after complement and permutation equivalences.',
      'Assign adjacent codes to states on the same cycle and to states with common next states; one-hot trades flip-flops for minimal, shallow excitation logic.',
    ],
    quiz: [
      {
        q: 'Two states are equivalent if and only if:',
        options: ['They have identical names in the state table', 'They produce identical output sequences for every input sequence applied from each of them', 'They are both unreachable from the initial state', 'They have the same number of incoming edges'],
        answer: 1,
        explanation: 'Equivalence is defined externally: no input sequence may distinguish the two states by their outputs — internal next-state details only matter through this contract.',
      },
      {
        q: 'Row matching fails to merge states d and e whose rows are (e, f) and (d, f) with identical outputs. Why?',
        options: ['Their outputs differ', 'The next-state entries differ textually (e versus d), even though they are mutually equivalent — only the implication chart can close the loop', 'State f makes them unreachable', 'Row matching only works for Mealy machines'],
        answer: 1,
        explanation: 'Each state’s $x = 0$ next state is the other — a circular implication with matching outputs, which row matching’s literal text comparison cannot detect but the chart proves equivalent.',
      },
      {
        q: 'A reduced machine has 5 states. How many flip-flops does a binary state assignment require, and how many would one-hot use?',
        options: ['3 and 5', '5 and 3', '2 and 4', '4 and 5'],
        answer: 0,
        explanation: 'Binary needs $\\lceil \\log_2 5 \\rceil = 3$ flip-flops (8 codes, 3 unused); one-hot dedicates one flip-flop per state, so 5.',
      },
      {
        q: 'In an implication chart, a pair is eliminated when:',
        options: ['It implies only itself', 'Its two states have different outputs, or it implies a pair that has been eliminated', 'Its states have the same next states', 'It appears in the first column'],
        answer: 1,
        explanation: 'Mismatched outputs kill a pair immediately; otherwise the pair lives only if all its implied pairs live. Self-implication is consistent and passes.',
      },
      {
        q: 'Why does a Gray-order assignment often beat the natural binary order for a state cycle?',
        options: ['It uses fewer flip-flops', 'Adjacent codes mean single-bit transitions, which simplify the excitation equations and shorten critical paths', 'Gray codes eliminate the need for flip-flops', 'It makes the state table smaller'],
        answer: 1,
        explanation: 'Consecutive states on adjacent codes differ in one variable, so each transition’s excitation is a single product term — the 12-versus-7-literal comparison in the worked example.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.4
  {
    sectionId: 'mano-ch6-s4',
    readingTime: 12,
    intro: 'Design is analysis run backwards: from a verbal specification to a state diagram, through reduction and assignment, down to flip-flop excitation equations and the final circuit diagram. The excitation tables — which flip-flop inputs cause a given state transition — are the bridge between the abstract state table and real hardware, and choosing D, JK or T changes how much the don’t-cares can help. This section carries three complete designs: a binary counter, a BCD counter and a sequence detector.',
    objectives: [
      'Execute the full synthesis procedure from state diagram to logic diagram',
      'Write and use the excitation tables of the D, JK and T flip-flops',
      'Design a 3-bit binary up-counter with JK flip-flops from truth table through K-maps to equations',
      'Design a synchronous BCD counter and verify its recovery from unused states',
      'Design a Mealy sequence detector for the pattern 101 with overlapping allowed',
    ],
    concepts: [
      {
        term: 'Design procedure',
        kind: 'method',
        statement: 'The synchronous design procedure: (1) derive the **state diagram** or state table from the word specification; (2) **reduce** the state table (Section 6.3); (3) make a **state assignment**; (4) choose flip-flop types and write the **excitation table**; (5) simplify the flip-flop input functions and output functions with K-maps; (6) draw the logic diagram.',
        detail: 'Steps 4–6 are exactly analysis in reverse. The only new machinery is the excitation table, which answers “what inputs does this flip-flop need to go from state $Q$ to state $Q(t+1)$?” — the inverse question to the characteristic table.',
      },
      {
        term: 'Flip-flop excitation tables',
        kind: 'method',
        statement: 'For each transition $Q \\to Q(t+1)$ the required inputs are: **D**: $D = Q(t+1)$ always; **T**: $T = Q \\oplus Q(t+1)$ (toggle exactly when the state changes); **JK**: $0 \\to 0$ needs $J = 0, K = X$; $0 \\to 1$ needs $J = 1, K = X$; $1 \\to 0$ needs $J = X, K = 1$; $1 \\to 1$ needs $J = X, K = 0$.',
        detail: 'The JK table has an $X$ in every row — one of the two inputs is always irrelevant — which floods the K-maps with don’t-cares and typically produces the cheapest two-level realization. The D table has none, making D the easiest to design and the easiest to reason about. T sits in between and suits counting structures where “toggle” is the natural verb.',
      },
      {
        term: 'Binary counter pattern',
        kind: 'law',
        statement: 'A synchronous $n$-bit binary up-counter with T flip-flops needs stage $i$ to toggle exactly when every less significant stage is 1: $$T_i = Q_0 Q_1 \\cdots Q_{i-1}, \\qquad T_0 = 1.$$ With JK flip-flops, $J_i = K_i = Q_0 Q_1 \\cdots Q_{i-1}$.',
        detail: 'This single law generates the entire counter: bit 0 toggles every clock, bit 1 when $Q_0 = 1$, bit 2 when $Q_0Q_1 = 1$, and so on. It is also the seed of the carry-lookahead discussion of chapter 7, where the wide AND terms are restructured to keep speed as $n$ grows.',
      },
      {
        term: 'Counters with skipped states',
        kind: 'method',
        statement: 'A counter that does not use all $2^{n}$ codes (a **modulo-$N$** counter with $N < 2^{n}$) is designed like any sequential circuit: the unused codes become **don’t-cares** in the K-maps unless a self-correction requirement forces them somewhere specific.',
        detail: 'BCD is the canonical example: ten used states, six don’t-cares. The designer must still analyze where the don’t-care states lead — a counter that powers up in an unused state and never returns to the count sequence is said to suffer from **lockout**. Verifying recovery (unused states eventually enter the main cycle) is a required design step, not a nicety.',
      },
      {
        term: 'Mealy detector design',
        kind: 'method',
        statement: 'For a sequence detector, build states that remember “the longest suffix of the input that is also a prefix of the target pattern,” mark detection on the completing edge, and allow **overlap** by treating the detection’s last symbols as the beginning of the next occurrence.',
        detail: 'For the pattern 101 the states are: nothing useful seen, “1” seen, and “10” seen; the edge from “10” on input 1 completes the pattern and lands back in the “1” state (its trailing 1 starts the next candidate). Overlap is what distinguishes a detector that finds 101 once in 10101 from one that finds it twice.',
      },
    ],
    examples: [
      {
        title: 'A 3-bit binary up-counter with JK flip-flops',
        problem: 'Design a synchronous 3-bit counter that counts 000 → 001 → ⋯ → 111 → 000 using JK flip-flops, deriving every input equation from the excitation table.',
        steps: [
          { label: 'Step 1: Write the count table', text: 'Present state $Q_2Q_1Q_0$ → next state: 000→001, 001→010, 010→011, 011→100, 100→101, 101→110, 110→111, 111→000. All eight codes are used, so there are no don’t-cares in the next states — but the JK excitation table will still supply plenty in the $J$, $K$ columns.' },
          { label: 'Step 2: Translate to excitation requirements', text: 'For each flip-flop apply the JK rules: e.g., the transition 001→010 requires $Q_0$ to go 1→0 (so $J_0 = X$, $K_0 = 1$) and $Q_1$ to go 0→1 (so $J_1 = 1$, $K_1 = X$). Row by row, $Q_0$ changes in every one of the eight transitions, so $J_0 = K_0 = 1$ emerges immediately.' },
          { label: 'Step 3: Fill the three K-map pairs', text: 'For $Q_1$: it must toggle exactly when $Q_0 = 1$ (rows 001, 011, 101, 111 show $0\\to1$ or $1\\to0$) and hold when $Q_0 = 0$; the K-maps for $J_1$ and $K_1$ therefore read $J_1 = K_1 = Q_0$ after covering the don’t-cares.' },
          { label: 'Step 4: The $Q_2$ maps', text: 'Bit 2 toggles only at 011→100 and 111→000, both of which have $Q_0 = Q_1 = 1$; all other transitions hold. The minimized pair is $J_2 = K_2 = Q_0Q_1$.' },
          { label: 'Step 5: Draw the circuit', text: 'Three JK flip-flops share one clock (this is what makes it synchronous). A wire from $Q_0$ feeds both $J_1$ and $K_1$; one AND gate combines $Q_0$ and $Q_1$ to feed both $J_2$ and $K_2$; $J_0$ and $K_0$ are tied to 1. No other logic is needed.' },
          { label: 'Step 6: Verify against the pattern law', text: 'The result matches the counter law $J_i = K_i = Q_0Q_1\\cdots Q_{i-1}$ — and indeed an $n$-bit version needs only $n - 2$ AND gates of growing width.' },
        ],
        result: '$J_0 = K_0 = 1$, $J_1 = K_1 = Q_0$, $J_2 = K_2 = Q_0Q_1$ — three JK flip-flops, one clock, one AND gate: the textbook synchronous up-counter.',
      },
      {
        title: 'A synchronous BCD counter with JK flip-flops',
        problem: 'Design a 4-bit synchronous counter that counts 0000 through 1001 and returns to 0000 (BCD), using flip-flops with weights $Q_8, Q_4, Q_2, Q_1$, and verify recovery from the unused states.',
        steps: [
          { label: 'Step 1: Tabulate the ten transitions', text: 'Count 0→1→⋯→9→0. All six codes 1010 through 1111 are unused — their next states are don’t-cares in the excitation maps.' },
          { label: 'Step 2: The two easy flip-flops', text: '$Q_1$ (weight 1) changes in every transition: $J_1 = K_1 = 1$. $Q_4$ toggles at 3→4 and 7→8 and holds elsewhere: the maps give $J_4 = K_4 = Q_1Q_2$.' },
          { label: 'Step 3: The $Q_2$ asymmetry', text: '$Q_2$ would also want $J_2 = K_2 = Q_1$, but at count 9 (1001) the counter must go to 0000, not 1010: $Q_2$ must stay 0 even though $Q_1 = 1$. The fix is $J_2 = Q_1Q_8\'$, $K_2 = Q_1$ — the $Q_8\'$ factor suppresses the toggle whenever the decade bit is set.' },
          { label: 'Step 4: The $Q_8$ equations', text: '$Q_8$ sets at 7→8 (needs $J_8 = Q_1Q_2Q_4$) and clears at 9→0 (needs $K_8 = Q_1$). Its full pair: $J_8 = Q_1Q_2Q_4$, $K_8 = Q_1$.' },
          { label: 'Step 5: Verify the wrap', text: 'At 1001: $J_1 = K_1 = 1$ so $Q_1$ falls; $K_8 = Q_1 = 1$ so $Q_8$ falls; $J_2 = Q_1Q_8\' = 1 \\cdot 0 = 0$ so $Q_2$ correctly stays 0 — next state 0000. At 0111: $J_8 = 1 \\cdot 1 \\cdot 1$ sets $Q_8$ while $Q_4, Q_2$ fall — next state 1000. Both critical edges behave.' },
          { label: 'Step 6: Check the unused states', text: 'If the counter wakes in 1010, the next clock takes it to 1011 ($Q_1$ sets), and from 1011 the equations give 0100 ($Q_8$ and $Q_2$ fall, $Q_4$ sets) — back inside the decade. No lockout: every unused state re-enters the main cycle within two clocks.' },
        ],
        result: '$J_1 = K_1 = 1$, $J_2 = Q_1Q_8\'$, $K_2 = Q_1$, $J_4 = K_4 = Q_1Q_2$, $J_8 = Q_1Q_2Q_4$, $K_8 = Q_1$ — with carry out $Q_8Q_1$ to enable the next decade; the two asymmetric gates ($Q_8\'$ in $J_2$, the split $J_8$/$K_8$) are the entire price of skipping six codes.',
      },
      {
        title: 'A Mealy detector for the sequence 101',
        problem: 'Design a synchronous circuit with one input $x$ and one output $z$ that raises $z$ for exactly one clock whenever the last three inputs were 101, overlapping included. Use D flip-flops and verify with a trace.',
        steps: [
          { label: 'Step 1: Choose the states', text: 'Three states: $A$ = no progress, $B$ = a trailing 1 has been seen, $C$ = a trailing 10 has been seen. Edges: $A \\xrightarrow{1} B$; $B \\xrightarrow{0} C$, $B \\xrightarrow{1} B$; $C \\xrightarrow{1} B$ with $z = 1$ (pattern complete, the 1 restarts the next match), $C \\xrightarrow{0} A$.' },
          { label: 'Step 2: Make the assignment and state table', text: 'Two flip-flops $Q_1Q_0$ with $A = 00$, $B = 01$, $C = 10$; code 11 is unused (don’t-care). Next-state and output rows: 00: $x{=}0 \\to 00$ (z=0), $x{=}1 \\to 01$ (z=0); 01: $0 \\to 10$ (0), $1 \\to 01$ (0); 10: $0 \\to 00$ (0), $1 \\to 01$ (z=1).' },
          { label: 'Step 3: Apply the D excitation rule', text: 'For D flip-flops the excitation table is trivial — $D$ equals the next state. So the K-maps for $D_1$ and $D_0$ are just the next-state columns with the 11 rows as don’t-cares.' },
          { label: 'Step 4: Minimize', text: 'From the table, $Q_1(t+1) = 1$ only on the 01 row with $x = 0$: $D_1 = Q_0x\'$ (using the don’t-care at 11). $Q_0(t+1) = 1$ on every row with $x = 1$: $D_0 = x$. The output fires only from state 10 on $x = 1$: $z = Q_1x$.' },
          { label: 'Step 5: Draw the circuit', text: 'Two D flip-flops on a common clock: $D_0$ is wired directly to $x$; $D_1$ is a single AND gate of $Q_0$ and $x\'$; the output gate ANDs $Q_1$ with $x$. Three gates in total beyond the flip-flops.' },
          { label: 'Step 6: Verify with $x = 10101$', text: 'States: $A \\to B \\to C \\to B \\to C \\to B$; outputs $z = 0, 0, 1, 0, 1$. Both occurrences of 101 (positions 1–3 and 3–5) are detected — the overlap works because the completing 1 lands the machine in $B$, ready for the next pattern.' },
        ],
        result: '$D_1 = Q_0x\'$, $D_0 = x$, $z = Q_1x$: two flip-flops, two AND gates and an inverter detect 101 with overlap — the smallest correct Mealy realization.',
      },
    ],
    keyTakeaways: [
      'Design inverts analysis: specification → state diagram → reduction → assignment → excitation table → K-maps → circuit.',
      'Excitation tables: D copies the next state; T toggles on change; JK offers a don’t-care in every row and usually minimizes best.',
      'The binary counter law $T_i = Q_0Q_1\\cdots Q_{i-1}$ generates any width synchronous up-counter.',
      'BCD counters need asymmetric equations ($J_2 = Q_1Q_8\'$; $J_8 = Q_1Q_2Q_4$, $K_8 = Q_1$) to skip codes 10–15 and must be checked for lockout — the design’s unused states recover to the main cycle.',
      'Sequence-detector states encode the longest useful input suffix; detection edges return to a state that preserves overlap.',
      'Unused state codes are K-map don’t-cares, but their post-synthesis behavior must be analyzed to guarantee self-correction.',
      'D flip-flops keep the design step trivial ($D = Q(t+1)$); JK flip-flops trade design effort for smaller excitation logic.',
    ],
    quiz: [
      {
        q: 'The JK excitation table entry for the transition $1 \\to 0$ is:',
        options: [`$J = 1$, $K = X$`, `$J = X$, $K = 1$`, `$J = 0$, $K = 0$`, '$J = 1$, $K = 1$ only'],
        answer: 1,
        explanation: 'To clear a set flip-flop, $K = 1$ is required and $J$ is irrelevant — the $X$ patterns are why JK realizations minimize so well.',
      },
      {
        q: 'In a 4-bit synchronous binary up-counter with T flip-flops, the input to the third stage ($Q_2$) is:',
        options: [`$T_2 = Q_0 + Q_1$`, `$T_2 = Q_0Q_1$`, `$T_2 = Q_1Q_2$`, `$T_2 = 1$`],
        answer: 1,
        explanation: 'Stage 2 toggles exactly when both less significant bits are 1: $T_2 = Q_0Q_1$ — one AND gate per stage beyond the first.',
      },
      {
        q: 'The BCD counter’s $J_2$ input includes the factor $Q_8\'$ because:',
        options: ['It speeds up the carry', 'At count 9 the counter must go to 0000, so $Q_2$ must not toggle even though $Q_1 = 1$', `$Q_8$ is the complement of $Q_2$`, 'It prevents the clock from reaching $Q_2$'],
        answer: 1,
        explanation: 'Without $Q_8\'$, count 9 (1001) would advance to 1010 instead of 0000; the $Q_8\'$ gate suppresses $Q_2$’s toggle precisely when the decade wraps.',
      },
      {
        q: 'A Mealy 101 detector with overlap, after completing a detection with input 1, enters which state?',
        options: ['The reset state, because the pattern is finished', 'The state meaning “1 seen”, because the completing 1 may start the next 101', 'The state meaning “10 seen”', 'A dedicated detection state held for one clock'],
        answer: 1,
        explanation: 'Overlapping detection reuses suffixes: the trailing 1 of 101 is the leading 1 of the next possible 101, so the machine lands in the “1 seen” state — input 10101 fires twice.',
      },
      {
        q: 'Designing with D flip-flops instead of JK flip-flops typically means:',
        options: ['More K-map don’t-cares and smaller logic', 'A trivial excitation step ($D = Q(t+1)$) but no excitation don’t-cares', 'The design cannot use state reduction', 'Timing analysis is unnecessary'],
        answer: 1,
        explanation: 'The D excitation table has no X entries, so the logic maps have only next-state don’t-cares — but the design step itself is direct, which is why the 101 detector used D flip-flops.',
      },
    
      // PYQ-pattern — JK excitation (rephrased)
      {
        q: "A JK flip-flop must go $1 \\to 0$ on the next clock. What $J,K$ achieve it?",
        options: ["$J = 0, K = 0$", "$J = d, K = 1$", "$J = 1, K = d$", "$J = d, K = 0$"],
        answer: 1,
        explanation: "**Step 1 — Given data:** present $1$, next $0$.\n**Step 2 — Rule:** JK table: $0 \\to 0$: $J = 0, K = d$; $0 \\to 1$: $J = 1, K = d$; $1 \\to 0$: $J = d, K = 1$; $1 \\to 1$: $J = d, K = 0$.\n**Step 3 — Apply:** need reset, so $K = 1$; $J$ is don’t-care ($d$).\n**Step 4 — Cross-check:** characteristic $Q^{+} = JQ′ + K′Q$ with $Q = 1$ gives $J(0) + K′(1) = K′ = 0$ when $K = 1$, as required.\n**Step 5 — Distractors:** hold keeps $1$; set drives to $1$; $K = 0$ holds $1$.\n**Step 6 — Conclude:** $J = d, K = 1$."
      },
      // PYQ-pattern — D versus JK don’t-cares (rephrased)
      {
        q: "Why does designing with D flip-flops give fewer excitation don’t-cares than with JK flip-flops?",
        options: ["D has no clock", "D cannot hold state", "D excitation is $D = Q(t+1)$ with no $X$ entries, while JK has two $d$ per transition pair", "JK has no excitation table"],
        answer: 2,
        explanation: "**Step 1 — Given data:** D table: $0 \\to 0$ needs $0$, $0 \\to 1$ needs $1$, $1 \\to 0$ needs $0$, $1 \\to 1$ needs $1$.\n**Step 2 — Rule:** JK assigns $d$ to half the entries (one input free per transition); D assigns a fixed $0$/$1$.\n**Step 3 — Consequence:** D maps have only next-state don’t-cares from unused states; JK maps also have excitation $d$ entries that enlarge groups.\n**Step 4 — Cross-check:** the $101$ detector illustration uses D for directness despite larger logic — the trade described in the text.\n**Step 5 — Distractors:** D is clocked; D holds via feedback; JK tables exist with $d$ entries.\n**Step 6 — Conclude:** D is direct but less minimizable."
      },
      // PYQ-pattern — overlapping sequence detector (rephrased)
      {
        q: "A Mealy $101$ detector with overlap has just output $1$ on input $1$. Which state does it enter, and why?",
        options: ["Reset, pattern finished", "`1 seen`, since the trailing $1$ can start the next $101$", "`10 seen`", "A one-clock lockout state"],
        answer: 1,
        explanation: "**Step 1 — Given data:** Moore/Mealy states `reset`, `1 seen`, `10 seen`; overlap allowed.\n**Step 2 — Rule:** suffix of a completed pattern that is also a prefix of the pattern must be retained.\n**Step 3 — Apply:** $101$ ends with $1$, which is the prefix of length $1$; go to `1 seen`.\n**Step 4 — Cross-check:** input $10101$ then fires twice, confirming reuse; reset would fire only once.\n**Step 5 — Distractors:** reset discards the reusable suffix; `10 seen` expects $0$ next; lockout is non-overlapping design.\n**Step 6 — Conclude:** overlap lands in `1 seen`."
      }
    ],
  },
]
