// ============================================================================
// Compiler Design + Computer Organization & Architecture (GATE CS / ISRO) —
// chapter/section metadata (bookId 'compcoa-complete').
// Lab mapping: ISA/ALU → gates & sequential labs, pipelining → cpu-scheduler,
// caches → paging-visualizer, I/O → os-anatomy, lexing/parsing → FSM & parse trees,
// dataflow → graph-playground. No code console.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../library'

export const COMPCOA_CHAPTERS: ChapterMeta[] = [
  { id: 'compcoa-ch1', bookId: 'compcoa-complete', number: 1, title: 'ISA, Addressing Modes & Machine Instructions', shortTitle: 'ISA & Addressing', description: 'Instruction formats, addressing modes, stack versus GPR machines, RISC/CISC contrasts.', icon: 'cpu', pages: 'Unit 1', interactiveKey: 'logic-gates' },
  { id: 'compcoa-ch2', bookId: 'compcoa-complete', number: 2, title: 'ALU, Datapath & Control Unit', shortTitle: 'Datapath & Control', description: 'Single-cycle datapath, hardwired versus microprogrammed control, control-signal derivation.', icon: 'circuit-board', pages: 'Unit 2', interactiveKey: 'sequential-lab' },
  { id: 'compcoa-ch3', bookId: 'compcoa-complete', number: 3, title: 'Instruction Pipelining & Hazards', shortTitle: 'Pipelining', description: 'Five-stage pipeline, structural/data/control hazards, forwarding, branch prediction, speedup math.', icon: 'timer', pages: 'Unit 3', interactiveKey: 'cpu-scheduler' },
  { id: 'compcoa-ch4', bookId: 'compcoa-complete', number: 4, title: 'Cache, Main & Secondary Memory', shortTitle: 'Memory Hierarchy', description: 'Direct/associative/set-associative mapping, replacement and write policies, AMAT, virtual memory preview.', icon: 'memory-stick', pages: 'Unit 4', interactiveKey: 'paging-visualizer' },
  { id: 'compcoa-ch5', bookId: 'compcoa-complete', number: 5, title: 'I/O: Interrupts, DMA & Buses', shortTitle: 'I/O Systems', description: 'Programmed I/O, interrupt-driven transfer, DMA cycle stealing, bus arbitration.', icon: 'plug', pages: 'Unit 5', interactiveKey: 'os-anatomy' },
  { id: 'compcoa-ch6', bookId: 'compcoa-complete', number: 6, title: 'Lexical Analysis', shortTitle: 'Lexing', description: 'Tokens and lexemes, longest-match rule, NFA-to-DFA subset construction, Flex-style specifications.', icon: 'type', pages: 'Unit 6', interactiveKey: 'fsm-simulator' },
  { id: 'compcoa-ch7', bookId: 'compcoa-complete', number: 7, title: 'Top-Down Parsing: LL(1)', shortTitle: 'LL Parsing', description: 'FIRST/FOLLOW sets, predictive tables, left recursion and left-factoring elimination.', icon: 'list', pages: 'Unit 7', interactiveKey: 'tree-traversal' },
  { id: 'compcoa-ch8', bookId: 'compcoa-complete', number: 8, title: 'Bottom-Up Parsing: LR Families', shortTitle: 'LR Parsing', description: 'Handles and shift-reduce, SLR/LALR/CLR items, conflict diagnosis and precedence fixes.', icon: 'list-ordered', pages: 'Unit 8', interactiveKey: 'fsm-simulator' },
  { id: 'compcoa-ch9', bookId: 'compcoa-complete', number: 9, title: 'Syntax-Directed Translation, Runtime & Intermediate Code', shortTitle: 'SDT & Runtime', description: 'S versus L attributes, activation records and displays, three-address code, basic blocks and CFGs.', icon: 'boxes', pages: 'Unit 9', interactiveKey: 'graph-playground' },
  { id: 'compcoa-ch10', bookId: 'compcoa-complete', number: 10, title: 'Optimization & Dataflow Analysis', shortTitle: 'Optimization', description: 'Local optimizations, constant propagation, liveness, common-subexpression elimination, loops.', icon: 'gauge', pages: 'Unit 10', interactiveKey: 'graph-playground' },
]

export const COMPCOA_SECTIONS: SectionMeta[] = [
  { id: 'compcoa-ch1-s1', chapterId: 'compcoa-ch1', number: 1.1, title: 'Instruction Formats & Operand Models', description: 'Zero/one/two/three-address formats, stack versus accumulator versus GPR trade-offs.' },
  { id: 'compcoa-ch1-s2', chapterId: 'compcoa-ch1', number: 1.2, title: 'Addressing Modes', description: 'Immediate, direct, indirect, register, indexed, PC-relative and their effective-address math.' },
  { id: 'compcoa-ch1-s3', chapterId: 'compcoa-ch1', number: 1.3, title: 'RISC vs CISC & Instruction Counts', description: 'Fixed versus variable length, CPI intuition, why compilers prefer regularity.' },
  { id: 'compcoa-ch1-s4', chapterId: 'compcoa-ch1', number: 1.4, title: 'Endianness & Alignment', description: 'Little versus big endian, alignment padding, unaligned-access costs.' },
  { id: 'compcoa-ch2-s1', chapterId: 'compcoa-ch2', number: 2.1, title: 'Single-Cycle Datapath', description: 'PC, register file, ALU and memories wired for one instruction per cycle.' },
  { id: 'compcoa-ch2-s2', chapterId: 'compcoa-ch2', number: 2.2, title: 'Hardwired Control', description: 'Deriving control signals from opcode fields with combinational logic.' },
  { id: 'compcoa-ch2-s3', chapterId: 'compcoa-ch2', number: 2.3, title: 'Microprogrammed Control', description: 'Control store, horizontal versus vertical microcode, sequencing.' },
  { id: 'compcoa-ch2-s4', chapterId: 'compcoa-ch2', number: 2.4, title: 'Multicycle Datapath & CPI', description: 'Sharing functional units across steps, CPI and execution-time arithmetic.' },
  { id: 'compcoa-ch3-s1', chapterId: 'compcoa-ch3', number: 3.1, title: 'Five-Stage Pipeline & Throughput', description: 'IF/ID/EX/MEM/WB overlap, ideal speedup and pipeline fill/drain.' },
  { id: 'compcoa-ch3-s2', chapterId: 'compcoa-ch3', number: 3.2, title: 'Structural & Data Hazards', description: 'Resource conflicts, RAW/WAR/WAW hazards, stall insertion math.' },
  { id: 'compcoa-ch3-s3', chapterId: 'compcoa-ch3', number: 3.3, title: 'Forwarding & Hazard Detection', description: 'Bypass paths that kill stalls, load-use hazard as the irreducible case.' },
  { id: 'compcoa-ch3-s4', chapterId: 'compcoa-ch3', number: 3.4, title: 'Control Hazards & Branch Prediction', description: 'Flush penalties, static versus dynamic prediction, delayed branches.' },
  { id: 'compcoa-ch4-s1', chapterId: 'compcoa-ch4', number: 4.1, title: 'Direct, Associative & Set-Associative Mapping', description: 'Index/tag/offset splits, block placement and lookup walks.' },
  { id: 'compcoa-ch4-s2', chapterId: 'compcoa-ch4', number: 4.2, title: 'Replacement & Write Policies', description: 'LRU/FIFO/random, write-through versus write-back, write-allocate choices.' },
  { id: 'compcoa-ch4-s3', chapterId: 'compcoa-ch4', number: 4.3, title: 'AMAT & Multilevel Caches', description: 'Hit-time plus miss-rate-times-penalty across L1/L2/memory.' },
  { id: 'compcoa-ch4-s4', chapterId: 'compcoa-ch4', number: 4.4, title: 'Main & Secondary Storage', description: 'SRAM versus DRAM, disks and flash basics, locality that makes it all work.' },
  { id: 'compcoa-ch5-s1', chapterId: 'compcoa-ch5', number: 5.1, title: 'Programmed I/O & Status Polling', description: 'Busy-wait transfers, status registers, when polling wins.' },
  { id: 'compcoa-ch5-s2', chapterId: 'compcoa-ch5', number: 5.2, title: 'Interrupt-Driven I/O', description: 'Vectors, priorities, daisy chains, interrupt overhead arithmetic.' },
  { id: 'compcoa-ch5-s3', chapterId: 'compcoa-ch5', number: 5.3, title: 'DMA: Stealing & Burst Modes', description: 'Cycle stealing versus burst/block transfer, DMA controller setup.' },
  { id: 'compcoa-ch5-s4', chapterId: 'compcoa-ch5', number: 5.4, title: 'Buses & Arbitration', description: 'Synchronous versus asynchronous buses, centralized versus distributed arbitration.' },
  { id: 'compcoa-ch6-s1', chapterId: 'compcoa-ch6', number: 6.1, title: 'Tokens, Lexemes & Attributes', description: 'What the lexer emits, longest match, keyword versus identifier disambiguation.' },
  { id: 'compcoa-ch6-s2', chapterId: 'compcoa-ch6', number: 6.2, title: 'Regular Definitions to NFA', description: 'Thompson construction for concatenation, alternation and closure.' },
  { id: 'compcoa-ch6-s3', chapterId: 'compcoa-ch6', number: 6.3, title: 'Subset Construction: NFA to DFA', description: 'Epsilon-closure, DFA state minimization preview.' },
  { id: 'compcoa-ch6-s4', chapterId: 'compcoa-ch6', number: 6.4, title: 'Lexical Errors & Recovery', description: 'Panic-mode recovery, error tokens, why lexing rarely fails.' },
  { id: 'compcoa-ch7-s1', chapterId: 'compcoa-ch7', number: 7.1, title: 'FIRST Sets', description: 'Computing FIRST with epsilon propagation through productions.' },
  { id: 'compcoa-ch7-s2', chapterId: 'compcoa-ch7', number: 7.2, title: 'FOLLOW Sets', description: 'End-marker seeding, propagation across nullable tails.' },
  { id: 'compcoa-ch7-s3', chapterId: 'compcoa-ch7', number: 7.3, title: 'LL(1) Tables & Conflicts', description: 'Table construction, multiply-defined entries as grammar defects.' },
  { id: 'compcoa-ch7-s4', chapterId: 'compcoa-ch7', number: 7.4, title: 'Left Recursion & Left Factoring', description: 'Rewrites that make grammars predictive without changing the language.' },
  { id: 'compcoa-ch8-s1', chapterId: 'compcoa-ch8', number: 8.1, title: 'Handles & Shift-Reduce Parsing', description: 'Stack discipline, shift versus reduce decisions, viable prefixes.' },
  { id: 'compcoa-ch8-s2', chapterId: 'compcoa-ch8', number: 8.2, title: 'SLR Items & Tables', description: 'LR(0) items, closure/goto, FOLLOW-based reduce decisions.' },
  { id: 'compcoa-ch8-s3', chapterId: 'compcoa-ch8', number: 8.3, title: 'CLR vs LALR', description: 'Lookahead-carrying items, state merging, power versus table-size trade-off.' },
  { id: 'compcoa-ch8-s4', chapterId: 'compcoa-ch8', number: 8.4, title: 'Conflicts & Precedence Fixes', description: 'Shift/reduce versus reduce/reduce, dangling-else resolution.' },
  { id: 'compcoa-ch9-s1', chapterId: 'compcoa-ch9', number: 9.1, title: 'S vs L Attributed Definitions', description: 'Synthesized versus inherited attributes, evaluation orders.' },
  { id: 'compcoa-ch9-s2', chapterId: 'compcoa-ch9', number: 9.2, title: 'Activation Records & Displays', description: 'Static/dynamic links, calling sequences, access to nonlocals.' },
  { id: 'compcoa-ch9-s3', chapterId: 'compcoa-ch9', number: 9.3, title: 'Three-Address Code & Basic Blocks', description: 'Quadruples, leaders, block partitioning, control-flow graphs.' },
  { id: 'compcoa-ch9-s4', chapterId: 'compcoa-ch9', number: 9.4, title: 'Types, Declarations & Storage Layout', description: 'Width computation, alignment, array and record layouts.' },
  { id: 'compcoa-ch10-s1', chapterId: 'compcoa-ch10', number: 10.1, title: 'Local Optimizations', description: 'Constant folding, strength reduction, dead-code and copy elimination.' },
  { id: 'compcoa-ch10-s2', chapterId: 'compcoa-ch10', number: 10.2, title: 'Constant Propagation', description: 'Reaching-definition-flavoured forward analysis with lattices.' },
  { id: 'compcoa-ch10-s3', chapterId: 'compcoa-ch10', number: 10.3, title: 'Liveness Analysis', description: 'Backward equations, live ranges, register-allocation preview.' },
  { id: 'compcoa-ch10-s4', chapterId: 'compcoa-ch10', number: 10.4, title: 'CSE Elimination & Loop Optimizations', description: 'Available expressions, hoisting, induction variables.' },
]
