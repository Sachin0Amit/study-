import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Computer Organization and Architecture
// Chapter 4: Cache, Main and Secondary Memory (Sections 4.1–4.4)
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const compcoaCh04Content: SectionContent[] = [
  // ------------------------------------------------------------------ 4.1
  {
    sectionId: 'compcoa-ch4-s1',
    readingTime: 10,
    intro: 'A cache decides where each memory block may live and how to find it again from its address bits. Direct mapping fixes one home per block, fully associative allows any home, and set-associative compromises with a small choice of homes. This section splits addresses into tag, index and offset and walks lookups through each organization.',
    objectives: [
      'Split a byte address into tag, index and offset for each mapping',
      'Walk a lookup through placement, tag match and offset select',
      'Compare hit speed, miss rate and hardware cost across the three mappings'
    ],
    concepts: [
      {
        term: 'Block and offset split',
        kind: 'definition',
        statement: 'A block of `B` bytes needs $o = \\log_2 B$ **offset** bits, so a 64-byte block uses `o = 6` bits to pick 1 of 64 bytes inside the block while the remaining upper bits identify the **block** itself.',
        detail: 'Offset never participates in tag match; it only multiplexes the byte or word out after a hit. Word-addressable variants use word offsets with the same logarithm.'
      },
      {
        term: 'Direct mapping',
        kind: 'definition',
        statement: 'A **direct-mapped** cache with `C` blocks assigns block `b` to slot $i = b \\bmod C$, so the `C = 256` cache with 64-byte blocks uses 6 offset bits, 8 **index** bits and the rest as **tag** compared at exactly one slot.',
        detail: 'Hits are fast (one tag check) but conflicts miss even in a large cache when two hot blocks share a slot. Placement needs no choice, hence no replacement policy.'
      },
      {
        term: 'Fully associative mapping',
        kind: 'definition',
        statement: 'A **fully associative** cache lets a block live in **any** slot, so the whole block number minus offset becomes the **tag** compared in parallel across every slot through `comparators` on all lines at once.',
        detail: 'Conflict misses vanish (only capacity and cold misses remain) but every slot needs a comparator, which scales badly. Replacement policy now decides every eviction.'
      },
      {
        term: 'Set-associative mapping',
        kind: 'definition',
        statement: 'A **k-way** set-associative cache groups slots into sets of `k` lines, so block `b` picks set $s = b \\bmod S$ with $S = C \\div k$ sets and then matches its **tag** against only the `k` members through `k` comparators.',
        detail: 'With $C = 256$ and $k = 4$, sets equal $64$, index is 6 bits, offset 6 bits, tag the rest. Raising $k$ cuts conflicts toward fully associative at the price of comparators and slower match.'
      },
      {
        term: 'Worked address split',
        kind: 'method',
        statement: 'For a 32-bit address, 64-byte blocks and 256 slots direct-mapped: `o = 6`, **index** $= 8$, **tag** $= 32 - 8 - 6 = 18$ bits, so address `0x12345678` yields offset `0x38`, index `0x59` and tag `0x48D1` by **field** slicing.',
        detail: 'Set-associative 4-way on the same geometry keeps offset 6, drops index to 6 (64 sets) and grows tag to 20 bits. The arithmetic always starts from block size, then slot or set count.'
      }
    ],
    examples: [
      {
        title: 'Split: 0x12345678 in direct and 4-way caches',
        problem: '32-bit addresses, 64-byte blocks. Cache A is direct-mapped with 256 blocks; cache B is 4-way with 256 blocks total. Compute offset, index and tag widths and slice 0x12345678 for each.',
        steps: [
          { label: 'Step 1', text: 'Common offset:\n```text\no = log2(64) = 6 bits; byte 0x12345678 & 0x3F = 0x38\n```\nLow 6 bits select inside the block for both caches.' },
          { label: 'Step 2', text: 'Cache A direct: index 8 bits $= (0x12345678 >> 6) \\And 0xFF = 0x59$, tag 18 bits $= 0x12345678 >> 14 = 0x48D1$. One slot checked, one comparator.' },
          { label: 'Step 3', text: 'Cache B 4-way: sets $= 256 \\div 4 = 64$, index 6 bits $= (0x12345678 >> 6) \\And 0x3F = 0x19$, tag 20 bits $= 0x12345678 >> 12 = 0x12345$. Four tags in set 0x19 compare at once; hits need offset 0x38 after any match.' }
        ],
        result: 'Direct gives offset 6, index 8, tag 18 with slot 0x59; 4-way gives offset 6, index 6, tag 20 with set 0x19.'
      },
      {
        title: 'Walk: conflict that 4-way survives and direct does not',
        problem: 'Blocks X and Y both map to direct slot 0x59 but to different tags. Show the direct-mapped miss sequence for alternating accesses and the 4-way hit sequence with LRU.',
        steps: [
          { label: 'Step 1', text: 'Direct alternating X Y X Y:\n```text\nX miss (load X, evict Y) | Y miss (load Y, evict X) | ...\nmiss rate 100 percent on this pair\n```\nOne slot cannot hold both; every access evicts the other.' },
          { label: 'Step 2', text: '4-way with LRU: first X misses and loads, first Y misses and loads into a second way of the same set, then all later X and Y hit. Miss rate on the steady pattern drops to 0 after 2 cold misses.' },
          { label: 'Step 3', text: 'Price: the 4-way pays 4 comparators and LRU bits per set against 1 comparator and no choice for direct. Associativity converts conflict misses into comparator cost.' }
        ],
        result: 'Direct misses every alternation while 4-way misses twice then hits; associativity trades comparators for conflict freedom.'
      }
    ],
    keyTakeaways: [
      'Offset bits select inside the block, index bits pick the slot or set, tag bits identify which block is stored.',
      'Direct maps each block to one slot with one comparator and suffers conflict misses.',
      'Fully associative removes conflicts with a comparator per slot and needs a replacement policy.',
      'Set-associative splits the difference with k comparators over k-way sets.'
    ],
    quiz: [
      // PYQ-pattern: tag-index-offset split
      {
        q: '32-bit address, 64-byte blocks, 256-block direct-mapped cache. Tag, index, offset widths?',
        options: ['tag 18, index 8, offset 6', 'tag 20, index 6, offset 6', 'tag 24, index 8, offset 0', 'tag 6, index 8, offset 18'],
        answer: 0,
        explanation: 'Step 1: Offset is log2 of 64 equals 6. Step 2: Index is log2 of 256 equals 8. Step 3: Tag is 32 minus 8 minus 6 equals 18. Step 4: Hence 18, 8, 6.'
      },
      // PYQ-pattern: set-associative split
      {
        q: 'Same geometry but 4-way with 256 blocks total. Index and tag widths?',
        options: ['index 8, tag 18', 'index 6, tag 20', 'index 4, tag 22', 'index 2, tag 24'],
        answer: 1,
        explanation: 'Step 1: Sets equal 256 divided by 4 equals 64. Step 2: Index is log2 of 64 equals 6. Step 3: Tag is 32 minus 6 minus 6 equals 20. Step 4: Hence index 6, tag 20.'
      },
      // PYQ-pattern: mapping conflict behavior
      {
        q: 'Two hot blocks share one direct-mapped slot. Steady alternating miss rate?',
        options: ['0 percent', '50 percent', '100 percent', '25 percent'],
        answer: 2,
        explanation: 'Step 1: Each access evicts the other. Step 2: X always finds Y present. Step 3: Y always finds X present. Step 4: Every access misses, 100 percent.'
      },
      // PYQ-pattern: associativity cost
      {
        q: 'What does raising associativity from direct to 4-way cost?',
        options: ['Fewer index bits and 4 comparators with LRU state', 'Larger blocks automatically', 'Zero hardware change', 'Removal of tags'],
        answer: 0,
        explanation: 'Step 1: Sets shrink so index drops 8 to 6. Step 2: Four tags compare per access. Step 3: LRU bits pick victims. Step 4: Tags remain, blocks unchanged.'
      }
    ]
  },
  // ------------------------------------------------------------------ 4.2
  {
    sectionId: 'compcoa-ch4-s2',
    readingTime: 8,
    intro: 'Once a miss forces an eviction and a store changes a cached copy, policy decides: which line leaves under least-recently-used, first-in-first-out or random choice, and whether writes go through to memory at once or wait dirty in the cache. This section compares the three replacement rules and prices write-through against write-back traffic.',
    objectives: [
      'Simulate LRU, FIFO and random eviction on a short reference string',
      'Contrast write-through with write-back on traffic and dirty-bit need',
      'Decide write-allocate versus no-write-allocate for store misses'
    ],
    concepts: [
      {
        term: 'LRU replacement',
        kind: 'definition',
        statement: 'On a miss, **LRU** evicts the line unused for the longest time, tracked by **recency** bits or a stack per set, so the repeating pattern `A B C A B C` in a 3-line cache **hits** forever after 3 cold misses.',
        detail: 'LRU exploits temporal locality directly and is near-optimal for loops. True LRU state grows with associativity, so large sets use tree or pseudo-LRU approximations.'
      },
      {
        term: 'FIFO and random',
        kind: 'definition',
        statement: '**FIFO** evicts the line loaded earliest through a **queue** pointer regardless of reuse, while **random** picks a `victim` with no state at all, so both can evict a **hot** line that LRU would have kept.',
        detail: 'FIFO is cheap and immune to some scans but suffers hits that LRU catches on cyclic reuse. Random needs zero bookkeeping and avoids pathological worst cases by chance.'
      },
      {
        term: 'Write-through policy',
        kind: 'definition',
        statement: '**Write-through** sends every store to cache **and** memory together, so `SW` costs one memory write per store and needs **no** dirty bit while reads later always find memory **fresh**.',
        detail: 'Traffic is high: 20 percent stores mean 0.2 memory writes per instruction. A write buffer hides latency but not bandwidth.'
      },
      {
        term: 'Write-back policy',
        kind: 'definition',
        statement: '**Write-back** marks stored lines **dirty** and writes memory only at eviction, so ten stores to one line cost **one** later writeback through the `dirty` bit instead of ten **immediate** writes.',
        detail: 'Traffic drops sharply for repeated writes to the same line. Evictions of clean lines cost nothing; dirty evictions cost a full block writeback.'
      },
      {
        term: 'Write-allocate choice',
        kind: 'method',
        statement: 'On a store miss, **write-allocate** loads the block first (pairs with **write-back**), while **no-write-allocate** sends the store straight to memory and skips the cache (pairs with **write-through**), so streaming writes avoid **polluting** the `cache`.',
        detail: 'Read misses always allocate. The standard pairings keep the protocol coherent: allocate with dirty bits, or bypass with immediate memory update.'
      }
    ],
    examples: [
      {
        title: 'Simulate: LRU against FIFO on A B C D A B C D',
        problem: 'A 3-line fully associative cache starts empty. Simulate LRU and FIFO on references A B C D A B C D and count hits in each.',
        steps: [
          { label: 'Step 1', text: 'First pass A B C D:\n```text\nA miss | B miss | C miss | D miss evict A (both policies)\ncache = {B,C,D}, hits = 0 of 4\n```\nCold misses fill the cache identically.' },
          { label: 'Step 2', text: 'LRU second pass: A misses (evict B, least recent), B misses (evict C), C misses (evict D), D misses (evict A): 0 hits. FIFO second pass behaves the same here because reuse distance 4 exceeds size 3 under both rules.' },
          { label: 'Step 3', text: 'Contrast with fitting pattern A B C A B C: after 3 cold misses both hit forever (6 hits of 9 total with the first pass). Lesson: replacement matters only when the working set exceeds capacity, and then LRU wins exactly on recency-friendly loops that fit.' }
        ],
        result: 'Both score 0 of 8 on the 4-cycle over 3 lines; on fitting loops both hit after 3 cold misses, with LRU ahead on recency patterns.'
      },
      {
        title: 'Price: write traffic for 10 stores to one line',
        problem: 'Ten stores hit the same cached word in a 64-byte-block cache. Compute memory-write traffic under write-through versus write-back with later eviction, in bytes.',
        steps: [
          { label: 'Step 1', text: 'Write-through:\n```text\n10 stores x 4 bytes = 40 bytes to memory\n```\nEvery store reaches memory immediately; the cache copy stays clean.' },
          { label: 'Step 2', text: 'Write-back: 0 bytes during the stores (dirty bit set), then one 64-byte block writeback at eviction, total 64 bytes but a single transaction.' },
          { label: 'Step 3', text: 'Verdict: write-back wins on transaction count (1 against 10) while moving more bytes per eviction; with word-granular counting it moves 4 bytes once against 40. Repeated per-line writes are the write-back sweet spot.' }
        ],
        result: 'Write-through moves 40 bytes in 10 writes; write-back moves one block once at eviction, far fewer transactions.'
      }
    ],
    keyTakeaways: [
      'LRU evicts the least-recent line and suits loops; FIFO evicts the oldest load; random needs no state.',
      'Replacement only matters when the working set overflows the cache.',
      'Write-through writes memory every store with no dirty bit; write-back writes once per dirty eviction.',
      'Store misses allocate with write-back and usually bypass with write-through.'
    ],
    quiz: [
      // PYQ-pattern: LRU simulation
      {
        q: '3-line cache, pattern A B C A B C after cold misses. Steady LRU behavior?',
        options: ['Miss every time', 'Hit every time after 3 cold misses', 'Alternate hit miss', 'Evict on every hit'],
        answer: 1,
        explanation: 'Step 1: First A, B, C miss and fill 3 lines. Step 2: Working set of 3 fits 3 lines. Step 3: LRU keeps all three resident. Step 4: Every later access hits.'
      },
      // PYQ-pattern: FIFO versus LRU reasoning
      {
        q: 'Which eviction needs no per-line state?',
        options: ['True LRU', 'Pseudo-LRU', 'Random', 'Tree-LRU'],
        answer: 2,
        explanation: 'Step 1: LRU family tracks recency bits. Step 2: FIFO tracks a queue pointer. Step 3: Random picks by chance with zero books. Step 4: Hence random.'
      },
      // PYQ-pattern: write-policy traffic
      {
        q: 'Ten stores to one cached word. Memory-write transactions under write-through vs write-back with eviction?',
        options: ['1 vs 10', '10 vs 1', '10 vs 10', '0 vs 0'],
        answer: 1,
        explanation: 'Step 1: Write-through sends all 10 to memory. Step 2: Write-back sets dirty, zero during stores. Step 3: One block writeback at eviction. Step 4: So 10 against 1.'
      },
      // PYQ-pattern: allocate policy pairing
      {
        q: 'Standard pairings for store misses are?',
        options: ['Write-back with write-allocate; write-through with no-write-allocate', 'Write-back with no-write-allocate; write-through with write-allocate', 'Both always allocate', 'Neither ever allocates'],
        answer: 0,
        explanation: 'Step 1: Write-back expects the line resident to mark dirty. Step 2: So it allocates on miss. Step 3: Write-through updates memory directly. Step 4: So it bypasses with no-write-allocate.'
      }
    ]
  },
  // ------------------------------------------------------------------ 4.3
  {
    sectionId: 'compcoa-ch4-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Memory hierarchy performance: AMAT and locality theory',
        blocks: [
          {
            kind: 'para',
            body: '**Average memory access time** folds hit latency, miss rate and miss penalty into one expectation that predicts pipeline stall time. With one level, $AMAT = t_{hit} + r \\times t_{miss}$, where $r$ is the miss ratio; with two levels the miss penalty is itself an access time, giving nested form. Graduate performance reasoning treats each term as independently optimizable — faster hits via smaller or more associative structures, fewer misses via larger blocks and smarter replacement, cheaper penalties via parallelism and prefetch — and asks which term dominates for the workload at hand. Locality is the workload property that makes all three optimizations pay.'
          },
          {
            kind: 'theorem',
            body: 'For a two-level hierarchy with $L_1$ miss rate $r_1$ and $L_2$ miss rate $r_2$ conditioned on $L_1$ misses, $$AMAT = t_{1} + r_1 \\times (t_{2} + r_2 \\times t_{mem}).$$ In particular, reducing $r_1$ by $\\Delta r$ saves $\\Delta r \\times (t_{2} + r_2 \\times t_{mem})$ per access, while reducing $t_{2}$ saves only $r_1$ times as much — misses at the outer level matter proportionally to how often they are reached. No reordering of the hierarchy changes the product structure; only overlapping misses through nonblocking caches reduces effective penalty below the formula.'
          },
          {
            kind: 'derivation',
            heading: 'Conditioning on hierarchy outcomes',
            body: 'Derive by conditioning on $L_1$ outcome: with probability $1 - r_1$ cost is $t_{1}$, with probability $r_1$ cost is $t_{1}$ plus the $L_2$ access. The $L_2$ access itself costs $t_{2}$ plus $t_{mem}$ with probability $r_2$. Linearity of expectation gives $$E[T] = (1-r_1)t_{1} + r_1(t_{1} + t_{2} + r_2 t_{mem}) = t_{1} + r_1 t_{2} + r_1 r_2 t_{mem}.$$ For $t_{1} = 1$, $t_{2} = 10$, $t_{mem} = 100$, $r_1 = 0.05$ and $r_2 = 0.3$, the total is $1 + 0.5 + 1.5 = 3.0$ cycles, showing outer misses dominate despite rarity. The derivation also reveals the optimization priority: halve $r_1$ before halving $t_{2}$ when $t_{2} + r_2 t_{mem}$ exceeds the scaled comparison.'
          },
          {
            kind: 'application',
            body: 'Architects apply the decomposition as a **bottleneck finder**: profile $r_1$ and $r_2$ with performance counters, measure $t_{mem}$ under contention, then invest transistors where the product is largest — larger $L_1$ when $r_1 t_{2}$ dominates, victim buffers and prefetch when $r_1 r_2 t_{mem}$ dominates. Nonblocking caches and miss-status handling registers overlap multiple $t_{mem}$ penalties, effectively replacing $r_2 t_{mem}$ with a smaller overlapped cost that queueing models predict. Research frontiers extend the same expectation to compressed and disaggregated memories, where $t_{mem}$ itself becomes a distribution rather than a constant.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Average memory access time folds hit speed, miss frequency and miss cost into one number that predicts pipeline drag. With two cache levels the formula nests: the L1 miss penalty is itself the L2 access time. This section evaluates the one-level and two-level forms and shows which factor to attack first.',
    objectives: [
      'Evaluate AMAT equals hit time plus miss rate times miss penalty',
      'Nest the formula across L1, L2 and main memory',
      'Rank hit time, miss rate and penalty optimizations by arithmetic impact'
    ],
    concepts: [
      {
        term: 'AMAT one-level law',
        kind: 'law',
        statement: 'One-level **AMAT** obeys $AMAT = T_{hit} + r \\times T_{pen}$ where `T_hit` is hit time, `r` is miss **rate** and `T_pen` is miss **penalty**, so $T_{hit} = 2$, $r = 0.05$ and $T_{pen} = 100$ give $AMAT = 2 + 0.05 \\times 100 = 7$ cycles through direct **substitution**.',
        detail: 'Rate must be misses per instruction-side access consistently defined (per reference), and penalty counts from request to data arrival. Local and global rates differ once L2 filters traffic.'
      },
      {
        term: 'Miss-rate versus penalty tension',
        kind: 'insight',
        statement: 'Bigger blocks and higher **associativity** cut `r` but stretch `T_hit`, while faster backing stores cut `T_pen`, so the product $r \\times T_{pen}$ decides and neither factor **alone** predicts AMAT.',
        detail: 'Doubling block size that halves the rate from 0.08 to 0.04 while adding 1 cycle to hits trades $8$ saved penalty cycles against $1$ extra everywhere.'
      },
      {
        term: 'Two-level nesting',
        kind: 'law',
        statement: 'Two-level **AMAT** nests as $AMAT = T_{L1} + r_{L1} \\times (T_{L2} + r_{L2} \\times T_{mem})$ where the `L1` penalty is the whole **L2** access expression through the inner **parentheses**.',
        detail: 'Local L2 rate divides L2 misses by L1 misses; global divides by all references. The nested form needs local rates at each stage.'
      },
      {
        term: 'Worked two-level value',
        kind: 'method',
        statement: 'With $T_{L1} = 1$, $r_{L1} = 0.1$, $T_{L2} = 10$, $r_{L2} = 0.2$ and $T_{mem} = 200$: inner $= 10 + 0.2 \\times 200 = 50$, then $AMAT = 1 + 0.1 \\times 50 = 6$ `cycles` by **inside-out** evaluation.',
        detail: 'L2 cuts the 200-cycle memory sting to an effective 50-cycle L1 penalty. Without L2 the same L1 gives $1 + 0.1 \\times 200 = 21$ cycles.'
      },
      {
        term: 'CPI coupling',
        kind: 'method',
        statement: 'Memory stalls add $CPI_{mem} = m \\times r \\times T_{pen}$ where `m` is memory accesses per **instruction**, so $m = 1.2$, $r = 0.05$ and $T_{pen} = 100$ add $1.2 \\times 0.05 \\times 100 = 6$ stall cycles per **instruction** to base CPI.',
        detail: 'Halving the rate to 0.025 saves 3 full CPI points here, dwarfing most pipeline tweaks. Memory hierarchy is where CPI is won or lost.'
      }
    ],
    examples: [
      {
        title: 'Evaluate: one-level AMAT and its CPI shadow',
        problem: 'Hit 2 cycles, miss rate 0.05, penalty 100 cycles, 1.2 accesses per instruction, base CPI 1.0. Compute AMAT and total CPI with memory stalls.',
        steps: [
          { label: 'Step 1', text: 'AMAT:\n```text\nAMAT = 2 + 0.05 x 100 = 2 + 5 = 7 cycles\n```\nEach access averages 7 cycles despite 2-cycle hits.' },
          { label: 'Step 2', text: 'Stall CPI: $1.2 \\times 0.05 \\times 100 = 6.0$ cycles per instruction. Total $CPI = 1.0 + 6.0 = 7.0$.' },
          { label: 'Step 3', text: 'Leverage: halving the rate to 0.025 gives $AMAT = 2 + 2.5 = 4.5$ and stalls $3.0$, total CPI $4.0$, saving 3 points. Penalty cuts help proportionally less once the product dominates.' }
        ],
        result: 'AMAT 7 cycles and total CPI 7.0; halving the miss rate saves 3 full CPI points.'
      },
      {
        title: 'Evaluate: two-level nesting against no L2',
        problem: 'L1 hit 1, L1 rate 0.1, L2 hit 10, L2 local rate 0.2, memory 200. Compute nested AMAT, then AMAT with L1 straight to memory.',
        steps: [
          { label: 'Step 1', text: 'Inner L2 expression:\n```text\nT_L2 + r_L2 x T_mem = 10 + 0.2 x 200 = 50\n```\nAn L1 miss costs 50 on average with L2 filtering.' },
          { label: 'Step 2', text: 'Outer: $AMAT = 1 + 0.1 \\times 50 = 6$ cycles.' },
          { label: 'Step 3', text: 'No L2: $AMAT = 1 + 0.1 \\times 200 = 21$ cycles. L2 saves $15$ cycles per access, and at 1.2 accesses per instruction that is $18$ CPI points of avoided stalls.' }
        ],
        result: 'Nested AMAT 6 cycles versus 21 without L2; the second level saves 15 cycles per access.'
      }
    ],
    keyTakeaways: [
      'AMAT equals hit time plus miss rate times miss penalty, evaluated inside out for hierarchies.',
      'Only the product of rate and penalty matters, so balance both instead of chasing one.',
      'The L1 penalty is the full L2 access time, which nests the same formula one level down.',
      'Memory stalls scale with accesses per instruction, making miss rate the highest-leverage CPI knob.'
    ],
    quiz: [
      // PYQ-pattern: one-level AMAT arithmetic
      {
        q: 'Hit 2, rate 0.05, penalty 100. AMAT?',
        options: ['5', '7', '102', '12'],
        answer: 1,
        explanation: 'Step 1: Product is 0.05 times 100 equals 5. Step 2: Add hit 2 gives 7. Step 3: Units are cycles per access. Step 4: Hence 7.'
      },
      // PYQ-pattern: nested two-level AMAT
      {
        q: 'L1 hit 1, L1 rate 0.1, L2 hit 10, L2 local rate 0.2, memory 200. AMAT?',
        options: ['6', '12', '21', '51'],
        answer: 0,
        explanation: 'Step 1: Inner is 10 plus 0.2 times 200 equals 50. Step 2: Outer is 1 plus 0.1 times 50 equals 6. Step 3: Without L2 it would be 21. Step 4: Hence 6.'
      },
      // PYQ-pattern: stall-CPI coupling
      {
        q: '1.2 accesses per instruction, rate 0.05, penalty 100, base CPI 1. Total CPI?',
        options: ['2.0', '4.0', '7.0', '13.0'],
        answer: 2,
        explanation: 'Step 1: Stalls equal 1.2 times 0.05 times 100 equals 6. Step 2: Add base 1 gives 7. Step 3: Memory dominates the pipeline. Step 4: Hence 7.0.'
      },
      // PYQ-pattern: hierarchy optimization choice
      {
        q: 'Halving rate 0.05 to 0.025 (hit 2, penalty 100) saves how much AMAT?',
        options: ['0.5 cycles', '2.5 cycles', '5 cycles', 'Nothing'],
        answer: 1,
        explanation: 'Step 1: Before, product is 5.0, AMAT 7. Step 2: After, product is 2.5, AMAT 4.5. Step 3: Difference is 2.5 cycles. Step 4: Rate cuts pay the full penalty width.'
      }
    ]
  },
  // ------------------------------------------------------------------ 4.4
  {
    sectionId: 'compcoa-ch4-s4',
    readingTime: 7,
    intro: 'Below the caches sit the technologies that actually store bits: fast static RAM for cache, dense dynamic RAM for main memory, and disks and flash for bulk capacity. Each level trades speed against size and price, and locality is the behavior that makes the trade work. This section sizes those trades and states the locality contract.',
    objectives: [
      'Contrast SRAM, DRAM, disk and flash on speed, density and persistence',
      'Explain refresh, access granularity and why DRAM needs row handling',
      'State temporal and spatial locality and what each level exploits'
    ],
    concepts: [
      {
        term: 'SRAM character',
        kind: 'definition',
        statement: 'Cache uses **SRAM** of six-transistor cells that hold state while powered, so access is a fast **1 ns**-class `row` select with no refresh and density pays about six **transistors** per bit.',
        detail: 'Speed and simplicity suit small on-chip arrays. Cost per bit rules out main-memory sizes.'
      },
      {
        term: 'DRAM character',
        kind: 'definition',
        statement: 'Main memory uses **DRAM** of one transistor plus one capacitor per bit, so reads are **destructive**, every `row` needs periodic **refresh** within tens of milliseconds, and density beats SRAM by roughly six **times** per cell.',
        detail: 'Access opens a row into a buffer then selects columns; row hits are fast while row changes pay activation. Controllers schedule refresh around demand traffic.'
      },
      {
        term: 'Disks and flash',
        kind: 'definition',
        statement: '**Disks** seek mechanically in **milliseconds** with huge cheap capacity, while **flash** erases in large **blocks** before rewriting pages and wears per **erase**, so both serve bulk `persistence` that RAM cannot **promise**.',
        detail: 'Disk time splits into seek plus rotation plus transfer; flash time splits into page reads and block erases with wear leveling. Neither matches RAM latency.'
      },
      {
        term: 'Locality contract',
        kind: 'law',
        statement: '**Temporal** locality (recently used reused soon through `loop` variables) fills caches with hits, while **spatial** locality (neighbors used soon through `array` strides) fills whole **blocks** on each miss.',
        detail: 'Caches capture both: tags exploit temporal reuse and blocks prefetch spatial neighbors. Streaming with no reuse defeats the first; random jumps defeat the second.'
      },
      {
        term: 'Hierarchy sizing rule',
        kind: 'insight',
        statement: 'Each level is roughly **10 times** faster and **100 times** smaller than the next, so 32 KB of `L1` at 1 cycle backs 256 KB of `L2` at 10 cycles backing 8 GB of **DRAM** at 200 cycles backing terabytes of **disk** and flash.',
        detail: 'AMAT math from the prior section prices every level: fast small levels filter the slow big ones, and locality keeps the filter effective.'
      }
    ],
    examples: [
      {
        title: 'Compare: row-hit against row-miss DRAM timing',
        problem: 'A DRAM has row-hit 40 ns and row-miss 80 ns. A program makes 1M accesses with 80 percent row hits. Compute mean time and total, then the all-miss total.',
        steps: [
          { label: 'Step 1', text: 'Mean:\n```text\n0.8 x 40 + 0.2 x 80 = 32 + 16 = 48 ns\n```\nRow locality saves nearly half the miss cost on average.' },
          { label: 'Step 2', text: 'Total: $1000000 \\times 48 = 48000000$ ns $= 48$ ms.' },
          { label: 'Step 3', text: 'All-miss total: $1000000 \\times 80 = 80$ ms, so locality saves $32$ ms here. Controllers reorder queues to raise the hit share, the DRAM analog of cache scheduling.' }
        ],
        result: 'Mean 48 ns and 48 ms total versus 80 ms all-miss; row locality saves 32 ms.'
      },
      {
        title: 'Classify: which locality saves each pattern',
        problem: 'Classify three loops as temporal, spatial or neither: repeated scalar accumulation, unit-stride array sum, and random pointer chase over a huge graph.',
        steps: [
          { label: 'Step 1', text: 'Accumulator:\n```text\nfor (...) s += k;  // s reused every trip -> temporal\n```\nOne line stays hot; even a tiny cache hits.' },
          { label: 'Step 2', text: 'Stride-1 sum over `a[i]`: spatial, since each 64-byte miss prefetches 16 ints and the next 15 hit. Blocking extends this to matrices.' },
          { label: 'Step 3', text: 'Random chase: neither, because targets scatter wider than cache with no reuse; throughput falls to memory rate and only latency tolerance (out-of-order depth) helps.' }
        ],
        result: 'Scalars exploit temporal, strides exploit spatial blocks, random chases exploit neither.'
      }
    ],
    keyTakeaways: [
      'SRAM is fast and refresh-free but sparse; DRAM is dense but needs refresh and row management.',
      'Disks and flash persist bulk data with millisecond and erase-block costs RAM never pays.',
      'Temporal locality reuses the same line; spatial locality reuses neighbors in the block.',
      'Level sizes and speeds step by orders of magnitude, and AMAT prices each step.'
    ],
    quiz: [
      // PYQ-pattern: DRAM row timing
      {
        q: 'Row-hit 40 ns, row-miss 80 ns, 80 percent hits over 1M accesses. Total time?',
        options: ['40 ms', '64 ms', '48 ms', '80 ms'],
        answer: 2,
        explanation: 'Step 1: Mean is 0.8 times 40 plus 0.2 times 80 equals 48 ns. Step 2: Total is 1M times 48 ns equals 48 ms. Step 3: All-miss would be 80 ms. Step 4: Hence 48 ms.'
      },
      // PYQ-pattern: SRAM versus DRAM
      {
        q: 'Which pairing is correct?',
        options: ['SRAM dense with refresh; DRAM fast without refresh', 'SRAM fast without refresh; DRAM dense with refresh', 'Both need refresh equally', 'Both persist without power'],
        answer: 1,
        explanation: 'Step 1: SRAM holds state while powered, no refresh. Step 2: DRAM capacitors leak, refresh required. Step 3: DRAM cell is smaller, denser. Step 4: Hence fast SRAM without refresh, dense DRAM with refresh.'
      },
      // PYQ-pattern: locality classification
      {
        q: 'Unit-stride sum over a[i] exploits mainly?',
        options: ['Temporal reuse of one scalar', 'Spatial reuse of block neighbors', 'Neither; it always misses', 'Branch prediction'],
        answer: 1,
        explanation: 'Step 1: Each miss loads 64 bytes. Step 2: Next 15 ints already resident. Step 3: That is neighbor reuse. Step 4: Hence spatial locality.'
      },
      // PYQ-pattern: storage technology costs
      {
        q: 'Which cost belongs to flash but not SRAM?',
        options: ['Block erase before rewrite with wear limits', 'Row activation latency', 'Tag comparison per access', 'Refresh every few ms'],
        answer: 0,
        explanation: 'Step 1: Flash erases whole blocks first. Step 2: Cells wear per erase cycle. Step 3: SRAM has no erase or refresh. Step 4: DRAM owns refresh, not flash.'
      }
    ]
  }
]
