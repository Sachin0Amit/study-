import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Computer Organization and Architecture
// Chapter 3: Instruction Pipelining and Hazards (Sections 3.1–3.4)
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const compcoaCh03Content: SectionContent[] = [
  // ------------------------------------------------------------------ 3.1
  {
    sectionId: 'compcoa-ch3-s1',
    readingTime: 9,
    intro: 'A five-stage pipeline overlaps fetch, decode, execute, memory and writeback so that five instructions are in flight at once, each in a different stage. Ideal throughput approaches one instruction per cycle once the pipe fills, and total time follows stages plus instructions minus one. This section derives that timing and prices the fill and drain.',
    objectives: [
      'Name the five stages and the register boundary between each pair',
      'Compute pipeline time from k plus n minus 1 and ideal speedup',
      'Explain fill and drain and why short programs gain less'
    ],
    concepts: [
      {
        term: 'Five stages and boundaries',
        kind: 'definition',
        statement: 'The stages are **IF** fetch, **ID** decode and register read, **EX** ALU work, **MEM** data-memory access, and **WB** register writeback, separated by pipeline registers `IF-ID`, `ID-EX`, `EX-MEM` and `MEM-WB` that carry each instruction′s **values** forward one stage per cycle.',
        detail: 'Every instruction visits all five stages in order; loads use MEM genuinely while ALU instructions pass through MEM idle. The registers isolate stages so all five tick simultaneously on different instructions.'
      },
      {
        term: 'Pipeline timing law',
        kind: 'law',
        statement: 'With $k$ stages and $n$ instructions the cycle count is **cycles** $= k + n - 1$, so time obeys $T_{pipe} = (k + n - 1) \\times T_c$ through the single **fill** term $k - 1$ plus one `cycle` per instruction.',
        detail: 'The first instruction exits after $k$ cycles, then one completes per cycle. Sequential time would be $n \\times k \\times T_c$, so the gap between the two formulas is the whole prize.'
      },
      {
        term: 'Ideal speedup',
        kind: 'theorem',
        statement: 'Ideal **speedup** $S = T_{seq} \\div T_{pipe}$ tends to $k$ for large $n$, since $S = n \\times k \\div (k + n - 1)$ approaches **5** for the classic five-stage `pipe` as $n$ grows past the **fill**.',
        detail: 'With $n = 100$ and $k = 5$, cycles equal $5 + 100 - 1 = 104$ against $500$ sequential, giving $S \\approx 4.81$. Short runs suffer: with $n = 5$ the count is $9$ against $25$, only $2.78$.'
      },
      {
        term: 'Throughput and latency split',
        kind: 'insight',
        statement: 'Pipelining lifts **throughput** toward one instruction per cycle but leaves single-instruction **latency** at $k$ cycles, so `ADD` still takes 5 cycles from fetch to writeback while the processor **retires** one result per cycle in steady state.',
        detail: 'Latency-sensitive chains gain nothing from depth; independent streams gain everything. Hazards later drag throughput back below unity.'
      },
      {
        term: 'Fill and drain tax',
        kind: 'insight',
        statement: 'The **fill** of $k - 1$ cycles at the start and the symmetric **drain** at the end run the pipe partly empty, so steady-state rate `1` per cycle applies only to the **middle** of long runs and short basic blocks keep **restarting** the tax.',
        detail: 'Frequent branches and tiny loops re-fill often, which is why later sections price stalls and flushes as extra cycles on top of $k + n - 1$.'
      }
    ],
    examples: [
      {
        title: 'Count: 100 instructions through 5 stages at 2 ns',
        problem: 'Compute pipeline cycles, pipeline time, sequential time and speedup for $n = 100$, $k = 5$, $T_c = 2$ ns, then repeat cycles for $n = 5$.',
        steps: [
          { label: 'Step 1', text: 'Pipeline cycles:\n```text\ncycles = k + n - 1 = 5 + 100 - 1 = 104\ntime = 104 x 2 ns = 208 ns\n```\nFill costs 4 cycles once; the other 100 are pure throughput.' },
          { label: 'Step 2', text: 'Sequential reference:\n```text\ncycles = 100 x 5 = 500; time = 500 x 2 = 1000 ns\nspeedup = 1000 / 208 = 4.81\n```\nNear the ceiling of 5 because 100 dominates the fill.' },
          { label: 'Step 3', text: 'Short run $n = 5$: cycles $= 5 + 5 - 1 = 9$ against $25$ sequential, speedup $25 \\div 9 \\approx 2.78$. The same pipe looks far weaker on tiny programs, previewing why stalls hurt loop-heavy code most.' }
        ],
        result: '104 cycles and 208 ns versus 1000 ns sequential for speedup 4.81; with only 5 instructions the speedup falls to 2.78.'
      },
      {
        title: 'Count: balancing stages against clock',
        problem: 'Unpipelined latency is 10 ns per instruction. A 5-stage pipe balances stages to 2 ns each plus 0.2 ns register overhead. Compute ideal time per instruction in steady state and the real speedup for 1000 instructions.',
        steps: [
          { label: 'Step 1', text: 'Stage clock:\n```text\nTc = 2 + 0.2 = 2.2 ns steady-state rate\n```\nThroughput is one per 2.2 ns once filled, against one per 10 ns before.' },
          { label: 'Step 2', text: 'Totals: pipe cycles $= 5 + 1000 - 1 = 1004$, time $= 1004 \\times 2.2 = 2208.8$ ns; sequential $= 1000 \\times 10 = 10000$ ns.' },
          { label: 'Step 3', text: 'Speedup $= 10000 \\div 2208.8 \\approx 4.53$, below 5 because overhead inflates $T_c$ and fill adds 4 dead cycles. Imbalance would cost more: the slowest stage plus overhead sets every cycle.' }
        ],
        result: 'Steady rate 2.2 ns per instruction and speedup 4.53; register overhead and fill explain the gap from 5.'
      }
    ],
    keyTakeaways: [
      'IF, ID, EX, MEM and WB overlap with one instruction per stage and pipeline registers between stages.',
      'Cycle count is stages plus instructions minus one, giving near-k speedup for long runs.',
      'Throughput approaches 1 per cycle while single-instruction latency stays at k cycles.',
      'Fill and drain tax short programs, so tiny blocks see little of the ideal gain.'
    ],
    quiz: [
      // PYQ-pattern: pipeline cycle count and speedup
      {
        q: '5 stages, 100 instructions, 2 ns clock. Pipeline time and speedup over sequential?',
        options: ['104 cycles, 208 ns, speedup 4.81', '100 cycles, 200 ns, speedup 5.0', '500 cycles, 1000 ns, speedup 1.0', '109 cycles, 218 ns, speedup 4.0'],
        answer: 0,
        explanation: 'Step 1: Cycles equal 5 plus 100 minus 1 equals 104. Step 2: Time equals 104 times 2 equals 208 ns. Step 3: Sequential is 100 times 5 times 2 equals 1000 ns. Step 4: 1000 divided by 208 is about 4.81.'
      },
      // PYQ-pattern: short-program fill effect
      {
        q: 'Same 5-stage pipe with only 5 instructions. Speedup?',
        options: ['5.0', '4.81', '2.78', '1.0'],
        answer: 2,
        explanation: 'Step 1: Cycles equal 5 plus 5 minus 1 equals 9. Step 2: Sequential is 5 times 5 equals 25. Step 3: 25 divided by 9 is about 2.78. Step 4: Fill dominates short runs.'
      },
      // PYQ-pattern: throughput versus latency
      {
        q: 'What does ideal 5-stage pipelining change?',
        options: ['Cuts single-instruction latency to 1 cycle', 'Lifts throughput toward 1 per cycle; latency stays 5 cycles', 'Removes all hazards', 'Cuts stage count to 1'],
        answer: 1,
        explanation: 'Step 1: Latency is still 5 stages per instruction. Step 2: Throughput becomes about 1 completion per cycle. Step 3: Hazards still need handling later. Step 4: So throughput gain with unchanged latency is right.'
      },
      // PYQ-pattern: pipeline overhead arithmetic
      {
        q: 'Stage 2 ns plus 0.2 ns overhead, 1000 instructions. Speedup over 10 ns unpipelined?',
        options: ['5.0 exactly', '1.0', '2.2', '4.53'],
        answer: 3,
        explanation: 'Step 1: Tc equals 2.2 ns. Step 2: Pipe cycles 1004, time 2208.8 ns. Step 3: Sequential 10000 ns. Step 4: 10000 divided by 2208.8 is about 4.53.'
      }
    ]
  },
  // ------------------------------------------------------------------ 3.2
  {
    sectionId: 'compcoa-ch3-s2',
    readingTime: 9,
    intro: 'Hazards are the conflicts that stop the ideal pipeline from retiring one instruction per cycle. Structural hazards fight over hardware, data hazards fight over values not yet produced, and each fight is settled with stall cycles that the compiler or hardware inserts. This section names the three data-hazard shapes and prices their stalls.',
    objectives: [
      'Distinguish structural, RAW, WAR and WAW hazards with pipeline positions',
      'Compute stall cycles for resource conflicts and read-after-write chains',
      'Explain why in-order five-stage pipes meet only RAW among data hazards'
    ],
    concepts: [
      {
        term: 'Structural hazard',
        kind: 'definition',
        statement: 'A **structural** hazard fires when two stages want one resource in one cycle, as when unified memory serves an `IF` fetch and a `MEM` access together so the fetch **stalls** one cycle behind the **memory** stage.',
        detail: 'Separate instruction and data memories (or caches) remove the classic instance. Register-file port shortages and a single writeback bus cause subtler variants.'
      },
      {
        term: 'RAW hazard',
        kind: 'definition',
        statement: 'A **RAW** (read after write) hazard means `ADD R1, R2, R3` followed by `SUB R4, R1, R5` needs `R1` in **ID** before the producer writes it in **WB**, so the consumer stalls **2** cycles in a bare five-stage pipe without **forwarding**.',
        detail: 'True data dependence: the value genuinely flows from first to second instruction. No renaming removes it; only time or bypassing helps.'
      },
      {
        term: 'WAR and WAW hazards',
        kind: 'definition',
        statement: '**WAR** (write after read) and **WAW** (write after write) are **name** hazards: `ADD R1, R2, R3` then `SUB R2, R4, R5` reuses `R2` as a destination, which threatens ordering only if writes can **overtake** reads through out-of-order `EX` paths.',
        detail: 'In-order five-stage pipes never reorder writes, so WAR and WAW cannot fire there. Out-of-order machines rename registers to dissolve them.'
      },
      {
        term: 'Stall insertion math',
        kind: 'method',
        statement: 'Each stall cycle is a **bubble** with `CPI` rising as $CPI = 1 + s$ where `s` is mean stalls per instruction, so 30 percent of instructions stalling 2 cycles gives $CPI = 1 + 0.3 \\times 2 = 1.6$ and 200M instructions cost $200 \\times 1.6 = 320$M **cycles**.',
        detail: 'The compiler′s scheduler and the hardware interlock share this budget: every bubble saved anywhere converts directly into cycles saved everywhere.'
      },
      {
        term: 'Hazard detection in ID',
        kind: 'method',
        statement: 'The **hazard unit** compares source registers `rs` and `rt` in **ID** against destinations in `ID-EX`, `EX-MEM` and `MEM-WB`, and freezes `PC` plus `IF-ID` while injecting a **NOP** bubble into `ID-EX` whenever a live **RAW** match survives.',
        detail: 'Freezing without bubbling would re-execute; bubbling without freezing would skip. The pair together converts a value hazard into pure time.'
      }
    ],
    examples: [
      {
        title: 'Count: RAW pair ADD then SUB without forwarding',
        problem: 'ADD R1, R2, R3 is in EX while SUB R4, R1, R5 reaches ID. Show the colliding stages cycle by cycle and count the stalls needed before SUB may read R1.',
        steps: [
          { label: 'Step 1', text: 'Collision map:\n```text\ncycle 3: ADD in EX, SUB in ID wants R1\ncycle 4: ADD in MEM, SUB still must wait\ncycle 5: ADD in WB writes R1, SUB can read\n```\nThe read in ID at cycle 3 precedes the write in WB at cycle 5 by two stages.' },
          { label: 'Step 2', text: 'Interlock action: freeze `PC` and `IF-ID` for 2 cycles and inject 2 NOP bubbles into `ID-EX`, so SUB stays in ID while ADD advances to WB.' },
          { label: 'Step 3', text: 'Cost: this pair pays $2$ stall cycles; if 30 percent of a 200M program behaves so, $CPI = 1 + 0.3 \\times 2 = 1.6$ and cycles total $320$M. Forwarding in the next section erases most of this bill.' }
        ],
        result: '2 stall cycles per RAW pair without forwarding; the ID-versus-WB gap of two stages is the distance to close.'
      },
      {
        title: 'Count: structural clash on unified memory',
        problem: 'A pipe with one unified memory has an LW in MEM while the next fetch needs IF in the same cycle, every 5th instruction being a load. Compute mean stalls and CPI with 1-cycle resolution.',
        steps: [
          { label: 'Step 1', text: 'Clash pattern:\n```text\nevery LW causes 1 IF stall: s = 0.2 x 1 = 0.2\nCPI = 1 + 0.2 = 1.2\n```\nLoads are 20 percent and each costs one fetch bubble.' },
          { label: 'Step 2', text: 'Over 200M instructions: extra $200 \\times 0.2 = 40$M stall cycles, total $240$M cycles.' },
          { label: 'Step 3', text: 'Fix: split caches let IF and MEM proceed together, erasing the 0.2 term and restoring $CPI = 1$ for this hazard class. Hardware duplication trades area against a permanent 20 percent tax.' }
        ],
        result: 'Mean 0.2 stalls per instruction and CPI 1.2; split memories remove the whole term.'
      }
    ],
    keyTakeaways: [
      'Structural hazards share hardware across stages; data hazards share values across instructions.',
      'RAW is the true dependence and the only data hazard an in-order five-stage pipe can meet.',
      'WAR and WAW are name hazards that need out-of-order writes to exist.',
      'CPI equals 1 plus mean stalls per instruction, so every bubble is directly countable.'
    ],
    quiz: [
      // PYQ-pattern: RAW stall distance
      {
        q: 'ADD R1, R2, R3 followed immediately by SUB R4, R1, R5 in a bare 5-stage pipe. Stalls without forwarding?',
        options: ['0', '1', '2', '3'],
        answer: 2,
        explanation: 'Step 1: SUB reads R1 in ID at cycle 3. Step 2: ADD writes R1 in WB at cycle 5. Step 3: Gap is 2 stages. Step 4: So 2 stall bubbles are needed.'
      },
      // PYQ-pattern: stall CPI arithmetic
      {
        q: '30 percent of instructions stall 2 cycles each. CPI and cycles for 200M instructions?',
        options: ['CPI 1.3, 260M', 'CPI 1.0, 200M', 'CPI 2.0, 400M', 'CPI 1.6, 320M'],
        answer: 3,
        explanation: 'Step 1: Mean stalls equal 0.3 times 2 equals 0.6. Step 2: CPI equals 1 plus 0.6 equals 1.6. Step 3: Cycles equal 200M times 1.6 equals 320M. Step 4: Hence CPI 1.6 with 320M cycles.'
      },
      // PYQ-pattern: WAR and WAW in-order fact
      {
        q: 'Why do WAR and WAW never fire in the classic in-order 5-stage pipe?',
        options: ['No registers are used', 'Writes retire in order, so ordering is preserved', 'Forwarding removes all names', 'Branches flush them'],
        answer: 1,
        explanation: 'Step 1: In-order pipes retire writes in program order. Step 2: Reads therefore see the right version. Step 3: WAR and WAW need overtaking writes. Step 4: Without reordering they cannot occur.'
      },
      // PYQ-pattern: structural stall math
      {
        q: 'Loads are 20 percent and each clashes 1 IF cycle on unified memory. CPI?',
        options: ['1.0', '1.2', '1.5', '2.0'],
        answer: 1,
        explanation: 'Step 1: Mean stalls equal 0.2 times 1 equals 0.2. Step 2: CPI equals 1 plus 0.2 equals 1.2. Step 3: 200M instructions would add 40M bubbles. Step 4: Split memories erase this term.'
      }
    ]
  },
  // ------------------------------------------------------------------ 3.3
  {
    sectionId: 'compcoa-ch3-s3',
    readingTime: 10,
    intro: 'Forwarding wires ALU and memory results back to the ALU inputs so dependent instructions need not wait for writeback. Most read-after-write pairs drop to zero stalls once bypass paths exist, but the load-use pair survives because memory data arrives one stage too late. This section traces each bypass and prices the irreducible case.',
    objectives: [
      'Trace EX-to-EX and MEM-to-EX bypass paths on a RAW pair',
      'Explain why load-use still costs exactly one stall with forwarding',
      'Compute CPI with forwarding versus without from hazard frequencies'
    ],
    concepts: [
      {
        term: 'Forwarding idea',
        kind: 'definition',
        statement: 'A **forwarding** (bypass) path routes the value in `EX-MEM` or `MEM-WB` straight into the **ALU** inputs, so `ADD R1, R2, R3` followed by `SUB R4, R1, R5` feeds `R1` from `EX-MEM` with **zero** stalls through muxes on `ALUinA` and `ALUinB`.',
        detail: 'The hazard unit now compares ID sources against EX-MEM and MEM-WB destinations and steers the muxes instead of freezing. Writeback still happens for later readers, but near readers stop waiting.'
      },
      {
        term: 'EX-to-EX bypass',
        kind: 'method',
        statement: 'Back-to-back ALU instructions use the **EX-to-EX** path: when `ID-EX.rs` or `ID-EX.rt` equals `EX-MEM.rd` with `RegWrite` set, the ALU input mux picks `EX-MEM.ALUOut` instead of the stale **register** value.',
        detail: 'This kills the 2-stall penalty of ALU pairs completely. The comparison excludes register zero, which never forwards.'
      },
      {
        term: 'MEM-to-EX bypass',
        kind: 'method',
        statement: 'Pairs spaced one further apart use the **MEM-to-EX** path: when the source matches `MEM-WB.rd`, the mux picks `MEM-WB` writeback data (ALU result or `MDR` load value) over the **file** output.',
        detail: 'Both bypasses may be armed at once; EX-MEM wins on recency when both match. Priority encoding keeps the youngest value.'
      },
      {
        term: 'Load-use irreducible stall',
        kind: 'law',
        statement: 'A **load-use** pair `LW R1, 0(R2)` then `ADD R4, R1, R3` still stalls **1** cycle with forwarding, because `MDR` data exists only after **MEM** while the consumer needs it at the start of **EX** in the very next cycle.',
        detail: 'The hazard unit detects `ID-EX.MemRead` with destination matching an ID source and freezes one cycle. No bypass from the future exists; the data simply is not ready.'
      },
      {
        term: 'Forwarding CPI math',
        kind: 'method',
        statement: 'With forwarding the stall rate collapses to the load-use share: if 10 percent of instructions are load-use pairs stalling **1** each, then $CPI = 1 + 0.1 \\times 1 = 1.1$ against $1.6$ without `bypasses`, saving $0.5 \\times 200 = 100$M cycles on 200M instructions.',
        detail: 'Scheduling loads away from their users (compiler) plus bypasses (hardware) split the remaining bill. Unavoidable load-use is the floor, not zero.'
      }
    ],
    examples: [
      {
        title: 'Trace: ADD then SUB with EX-to-EX bypass',
        problem: 'Show cycle by cycle how ADD R1, R2, R3 in EX feeds SUB R4, R1, R5 in ID with zero stalls, naming the mux selection.',
        steps: [
          { label: 'Step 1', text: 'Cycle map:\n```text\ncycle 3: ADD in EX computes R1; SUB in ID reads stale R1\ncycle 4: ADD in MEM (EX-MEM holds R1); SUB in EX uses it\n```\nNo freeze occurs because the hazard unit sees the EX-MEM match one stage ahead.' },
          { label: 'Step 2', text: 'Mux action: the `ALUinA` mux for SUB selects `EX-MEM.ALUOut` (the fresh R1) over register-file output, since `EX-MEM.rd = R1` with `RegWrite = 1`.' },
          { label: 'Step 3', text: 'Saving: 2 stalls avoided per pair; at 20 percent ALU-pair frequency over 200M instructions that erases $0.2 \\times 2 \\times 200 = 80$M bubbles against the no-forwarding baseline.' }
        ],
        result: 'Zero stalls: EX-MEM bypass delivers R1 exactly when SUB enters EX, erasing the 2-cycle gap.'
      },
      {
        title: 'Trace: LW then ADD load-use with one bubble',
        problem: 'LW R1, 0(R2) is in EX while ADD R4, R1, R3 reaches ID. Show why forwarding cannot close the gap and count the single stall.',
        steps: [
          { label: 'Step 1', text: 'Timing gap:\n```text\ncycle 3: LW in EX computes address; ADD in ID wants R1\ncycle 4: LW in MEM reads MDR; ADD needs R1 at EX start\n```\nThe data emerges from memory during cycle 4 but ADD must already hold it as cycle 4 begins.' },
          { label: 'Step 2', text: 'Interlock: hazard unit sees `ID-EX.MemRead = 1` with `ID-EX.rt = R1` matching an ID source, freezes PC and IF-ID one cycle, and injects one NOP. On the retry, the MEM-to-EX path feeds `MDR` into the ALU.' },
          { label: 'Step 3', text: 'Bill: exactly $1$ stall per load-use pair, so 10 percent load-use gives $CPI = 1.1$ and $220$M cycles per 200M instructions. The compiler recovers part by hoisting an independent instruction between the two.' }
        ],
        result: 'One unavoidable stall: memory data arrives a stage too late, and only scheduling or a hit-under-miss buffer can hide it.'
      }
    ],
    keyTakeaways: [
      'Bypass paths feed EX-MEM and MEM-WB values directly into ALU inputs, erasing ALU-pair stalls.',
      'EX-to-EX covers adjacent pairs and MEM-to-EX covers pairs one step apart, with EX-MEM winning ties.',
      'Load-use still costs exactly 1 stall because memory data is not ready when the next EX starts.',
      'Forwarding CPI equals 1 plus the load-use share, a large cut from the no-bypass bill.'
    ],
    quiz: [
      // PYQ-pattern: bypass path selection
      {
        q: 'ADD R1, R2, R3 followed immediately by SUB R4, R1, R5 with forwarding. Stalls and path?',
        options: ['2 stalls, no path helps', '0 stalls via EX-to-EX bypass', '1 stall via MEM-to-EX', '3 stalls via WB'],
        answer: 1,
        explanation: 'Step 1: Producer is in EX while consumer is in ID. Step 2: EX-MEM will hold fresh R1 next cycle. Step 3: ALU mux picks EX-MEM over the file. Step 4: Zero stalls result.'
      },
      // PYQ-pattern: load-use penalty
      {
        q: 'LW R1, 0(R2) followed immediately by ADD R4, R1, R3 with full forwarding. Stalls?',
        options: ['1', '0', '2', '3'],
        answer: 0,
        explanation: 'Step 1: Load data appears only after MEM. Step 2: Consumer EX starts the next cycle. Step 3: Data misses the setup window by one stage. Step 4: Exactly 1 bubble is inserted.'
      },
      // PYQ-pattern: forwarding CPI arithmetic
      {
        q: '10 percent load-use pairs stall 1 each; all other RAW stalls vanish. CPI for 200M instructions and total cycles?',
        options: ['CPI 1.1, 220M cycles', 'CPI 1.6, 320M cycles', 'CPI 1.0, 200M cycles', 'CPI 2.0, 400M cycles'],
        answer: 0,
        explanation: 'Step 1: Mean stalls equal 0.1 times 1 equals 0.1. Step 2: CPI equals 1.1. Step 3: Cycles equal 200M times 1.1 equals 220M. Step 4: Saving over 320M baseline is 100M.'
      },
      // PYQ-pattern: hazard detection condition
      {
        q: 'Which condition triggers the 1-cycle load-use interlock?',
        options: ['EX-MEM destination matches with MemWrite set', 'Any store in WB', 'Any branch in MEM', 'ID-EX MemRead with destination matching an ID source'],
        answer: 3,
        explanation: 'Step 1: Producer must be a load, so ID-EX MemRead is 1. Step 2: Its destination rt must match incoming rs or rt. Step 3: Then PC and IF-ID freeze one cycle. Step 4: Other options describe unrelated stages.'
      }
    ]
  },
  // ------------------------------------------------------------------ 3.4
  {
    sectionId: 'compcoa-ch3-s4',
    readingTime: 10,
    intro: 'Control hazards arrive when the pipe does not know which instruction comes next until a branch resolves deep in the line. The cycles between fetch and resolution fill with the wrong instructions unless the machine stalls, predicts or delays. This section prices flush penalties and compares prediction schemes with branch-frequency arithmetic.',
    objectives: [
      'Compute flush penalty from resolution stage and apply it to CPI',
      'Contrast static, 1-bit and 2-bit prediction on misprediction rate',
      'Explain delayed branches with delay slots and their scheduling need'
    ],
    concepts: [
      {
        term: 'Flush penalty rule',
        kind: 'law',
        statement: 'If a branch resolves in **MEM** (stage 4 of 5), a taken branch **flushes** the 3 instructions behind it, so penalty $p = 3$ cycles and taken branches at rate `t` add $CPI = 1 + t \\times p$ through the **IF**, **ID** and **EX** work discarded.',
        detail: 'Resolving earlier shrinks $p$: compare in ID with a dedicated adder and the penalty falls to 1. Pipeline depth directly multiplies control cost.'
      },
      {
        term: 'Static prediction',
        kind: 'method',
        statement: 'A **static** scheme always predicts one direction in hardware, and **predict-backward-taken** guesses loop branches taken and forward branches **not** taken, costing zero on correct guesses and full $p$ on **misses** without any history `table`.',
        detail: 'Loops dominate, so backward-taken wins cheaply. Irregular branches need dynamic history instead.'
      },
      {
        term: 'Dynamic 1-bit and 2-bit predictors',
        kind: 'method',
        statement: 'A **1-bit** predictor remembers the last outcome per branch in a **history** bit and flips on every miss, while **2-bit** saturating counters (`00` to `11`) change prediction only after **two** consecutive misses, resisting the single-odd-iteration **loop-exit** miss.',
        detail: 'A loop of 100 iterations mispredicts twice under 2-bit (first entry, final exit) against more under 1-bit with noisy neighbors. Bigger tables cut aliasing between unrelated branches.'
      },
      {
        term: 'Branch-frequency CPI math',
        kind: 'method',
        statement: 'With branches at 20 percent, half taken, penalty **3** and 60 percent prediction accuracy on taken ones, extra $CPI = 0.2 \\times 0.5 \\times (1 - 0.6) \\times 3 = 0.12$ so $CPI = 1.12$ plus any **data** stalls, a direct `frequency` times miss-rate times penalty product.',
        detail: 'Accuracy applies only to taken branches here since not-taken cost nothing with a MEM-resolution flush model. Better predictors shrink the middle factor.'
      },
      {
        term: 'Delayed branch',
        kind: 'method',
        statement: 'A **delayed** branch always executes the instruction in its **delay slot** (the word after the branch), so the compiler places an **independent** instruction there with `ADD` before the jump target logic, turning a would-be **bubble** into useful work.',
        detail: 'One slot hides a penalty of 1; deeper pipes need several slots that compilers struggle to fill. Unfilled slots take NOPs, which merely rename the bubble.'
      }
    ],
    examples: [
      {
        title: 'Count: branch CPI with prediction accuracy',
        problem: 'Branches are 20 percent of 200M instructions, half taken, penalty 3, predictor right on 60 percent of taken branches. Compute extra CPI, total CPI contribution, and cycles lost to control.',
        steps: [
          { label: 'Step 1', text: 'Mispredicted-taken share:\n```text\n0.2 x 0.5 x (1 - 0.6) = 0.2 x 0.5 x 0.4 = 0.04\n```\nOnly 4 percent of all instructions flush the pipe.' },
          { label: 'Step 2', text: 'Extra CPI: $0.04 \\times 3 = 0.12$, so control lifts $CPI$ from $1$ to $1.12$ before data stalls.' },
          { label: 'Step 3', text: 'Cycles lost: $0.12 \\times 200 = 24$M cycles. Perfect prediction would save all 24M; no prediction (stall 3 on every taken) would cost $0.2 \\times 0.5 \\times 3 = 0.3$ and waste $60$M cycles.' }
        ],
        result: 'Extra CPI 0.12 and 24M lost cycles; prediction saves 36M against stalling every taken branch.'
      },
      {
        title: 'Trace: delay slot that pays and one that wastes',
        problem: 'A loop ends with ADD R1, R1, R2 then BEQ R1, R0, LOOP with a one-slot delayed branch. Show a useful fill and a forced NOP fill, and count cycles for penalty 1.',
        steps: [
          { label: 'Step 1', text: 'Useful fill:\n```asm\nLOOP: ADD R1, R1, R2\n     SUB R3, R3, #1\n     BEQ R3, R0, EXIT\n     ADD R4, R4, R5   ; delay slot, independent\n```\nThe slot instruction runs during the 1-cycle resolution, so effective penalty is 0.' },
          { label: 'Step 2', text: 'Wasted fill: with no independent work the compiler emits `NOP` in the slot, paying the full 1 cycle per branch exactly like a stall.' },
          { label: 'Step 3', text: 'Loop of 100 iterations: useful fill saves $100 \\times 1 = 100$ cycles over NOP fill. Deeper 3-penalty pipes need 3 fills, rarely all available, which is why prediction displaced delay slots.' }
        ],
        result: 'A filled slot costs 0 extra cycles; a NOP slot costs 1; over 100 iterations the gap is 100 cycles.'
      }
    ],
    keyTakeaways: [
      'Flush penalty equals the number of stages between fetch and resolution, priced as taken-rate times penalty.',
      'Static backward-taken prediction is free and suits loops; dynamic 2-bit counters resist lone misses.',
      'Control CPI equals branch share times taken share times miss rate times penalty.',
      'Delayed branches convert one penalty cycle into a compiler-scheduled slot or a NOP.'
    ],
    quiz: [
      // PYQ-pattern: branch-penalty CPI math
      {
        q: 'Branches 20 percent, half taken, penalty 3, 60 percent accuracy on taken. Extra CPI?',
        options: ['0.04', '0.12', '0.30', '0.60'],
        answer: 1,
        explanation: 'Step 1: Mispredicted-taken share is 0.2 times 0.5 times 0.4 equals 0.04. Step 2: Times penalty 3 gives 0.12. Step 3: CPI rises from 1 to 1.12. Step 4: 24M cycles lost per 200M.'
      },
      // PYQ-pattern: flush penalty from stage
      {
        q: 'Branch resolves in MEM (stage 4 of 5). Taken-branch flush penalty?',
        options: ['1', '2', '3', '4'],
        answer: 2,
        explanation: 'Step 1: IF, ID, EX hold wrong-path work. Step 2: That is 3 stages. Step 3: All three flush. Step 4: Penalty is 3 cycles.'
      },
      // PYQ-pattern: predictor comparison
      {
        q: 'Why does a 2-bit counter beat 1-bit on a 100-iteration loop?',
        options: ['It uses no table', 'It needs two misses to flip, surviving the single odd iteration', 'It predicts forward taken', 'It removes the delay slot'],
        answer: 1,
        explanation: 'Step 1: Loop exits once per 100 trips. Step 2: 1-bit flips on that single miss. Step 3: 2-bit needs two in a row to flip. Step 4: So it mispredicts only entry and exit.'
      },
      // PYQ-pattern: delayed branch slot
      {
        q: 'A 1-slot delayed branch has an independent ADD available. Effective penalty?',
        options: ['0 extra cycles; slot does useful work', '1 cycle wasted', '3 cycles flushed', 'Pipeline stalls forever'],
        answer: 0,
        explanation: 'Step 1: Slot always executes. Step 2: Independent ADD fills it. Step 3: No NOP is needed. Step 4: Effective penalty is 0.'
      }
    ]
  }
]
