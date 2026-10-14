import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 27: Multithreaded Algorithms (Sections 27.1 – 27.3)
// ============================================================================

export const clrsCh27Content: SectionContent[] = [
  // ---------------------------------------------------------------- 27.1
  {
    sectionId: 'clrs-ch27-s1',
    readingTime: 8,
    intro: "A multithreaded algorithm is written as ordinary pseudocode sprinkled with two keywords — spawn and sync — plus a parallel for loop. This 'dynamic multithreading' model hides schedulers and processors from the programmer, yet supports precise analysis: two measures, work and span, bound the running time on any number of processors before a single machine is chosen.",
    objectives: [
      "Write and trace algorithms using spawn, sync and parallel for",
      "Define work $T_1$, span $T_\\infty$ and parallelism, and derive each for a given dag",
      "State and apply the work law, the span law and the greedy scheduler bound",
      "Explain why the greedy scheduler is within a factor of 2 of optimal",
    ],
    concepts: [
      {
        term: 'The dynamic-multithreading model',
        kind: 'definition',
        statement: "**spawn** $\\ \\texttt{x = spawn fib(n-1)}$ starts a child subroutine that may run in parallel with its parent; the parent continues immediately. **sync** waits until all strands spawned by the current procedure have finished. A **parallel for** loop (`parfor`) runs all its iterations concurrently and implicitly syncs at the end.",
        detail: "The keywords express *logical parallelism* only — which computations may proceed together. How they actually overlap is the scheduler's job, so the same algorithm runs unchanged on 1 core or 1000.",
      },
      {
        term: 'The computation dag',
        kind: 'definition',
        statement: "An execution is a directed acyclic graph of **strands** (maximal instruction sequences without spawn/sync), joined by **continuation edges** (parent after spawn), **spawn edges** (parent to child) and **sync edges** (child back to the waiting parent). A legal schedule is any topological order of this dag.",
        detail: "Every instruction sequence the program can possibly produce is a linearization of one dag — the dag is the complete specification of the computation's structure.",
      },
      {
        term: 'Work and span',
        kind: 'definition',
        statement: "The **work** $T_1$ is the total time to execute all strands on one processor; the **span** $T_\\infty$ is the time on infinitely many processors — the length of the longest (critical) path in the dag.",
        detail: "$T_P$ denotes the time on $P$ processors. The span is also called the *critical path* or *depth*: no amount of hardware can beat it, because its strands are serially dependent.",
      },
      {
        term: 'Work law, span law, parallelism',
        kind: 'law',
        statement: "For every $P \\ge 1$: the **work law** $T_P \\ge T_1 / P$ (a $P$-processor machine does at most $P$ units of work per tick) and the **span law** $T_P \\ge T_\\infty$. Hence the **parallelism** $T_1 / T_\\infty$ is the maximum possible speedup — beyond it, extra processors idle.",
        detail: "Perfect linear speedup $T_P = T_1/P$ holds only up to $P \\approx T_1/T_\\infty$; after that the span law dominates and the curve flattens.",
      },
      {
        term: 'The greedy scheduler bound',
        kind: 'theorem',
        statement: "**(Greedy scheduling theorem.)** A greedy scheduler — one that never leaves a processor idle while a ready strand exists — running a computation with work $T_1$ and span $T_\\infty$ on $P$ processors achieves $T_P \\le \\dfrac{T_1 + T_\\infty (P-1)}{P} = \\dfrac{T_1}{P} + T_\\infty \\cdot \\dfrac{P-1}{P} < \\dfrac{T_1}{P} + T_\\infty$.",
        detail: "Combined with the two lower bounds, greedy is never worse than twice optimal whenever $P \\le T_1/T_\\infty$: since $T_P^* \\ge \\max(T_1/P,\\, T_\\infty)$, the bound gives $T_P / T_P^* \\le 2$. Any online scheduler without future knowledge suffers this factor.",
      },
    ],
    figures: [
      {
        caption: 'The computation dag of $\\text{P-FIB}(4)$. Solid edges are continuations (the thread keeps going), amber edges are spawns (a child thread begins), teal edges are syncs (the parent waits to join). Nine strands give work $T_1 = 9$; the highlighted critical path $s_1 \\to t_1 \\to u_1 \\to w_1 \\to u_2 \\to t_2 \\to s_3$ of 7 strands gives span $T_\\infty = 7$. On $P = 2$ processors the greedy bound promises $T_2 \\le (9 + 7)/2 = 8$ ticks, while the span law forbids anything below 7.',
        svg: '<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="Computation dag of P-FIB(4) with spawn, continuation and sync edges"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">Computation dag of P-FIB(4)</text><line x1="428" y1="16" x2="452" y2="16" stroke="currentColor" stroke-width="2"/><text x="458" y="20" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">continuation (same thread)</text><line x1="428" y1="34" x2="452" y2="34" stroke="#f59e0b" stroke-width="2"/><text x="458" y="38" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">spawn (child thread)</text><line x1="428" y1="52" x2="452" y2="52" stroke="#14b8a6" stroke-width="2"/><text x="458" y="56" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">sync (join)</text><text x="54" y="74" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">fib(4)</text><text x="54" y="154" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">fib(3)</text><text x="54" y="234" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">fib(2)</text><text x="54" y="314" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">bases</text><polygon points="158,70 150,66.5 150,73.5" fill="currentColor"/><line x1="140" y1="70" x2="152" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="608,70 600,66.5 600,73.5" fill="currentColor"/><line x1="260" y1="70" x2="602" y2="70" stroke="currentColor" stroke-width="1.6"/><polygon points="498,150 490,146.5 490,153.5" fill="currentColor"/><line x1="230" y1="150" x2="492" y2="150" stroke="currentColor" stroke-width="1.6"/><polygon points="408,230 400,226.5 400,233.5" fill="currentColor"/><line x1="320" y1="230" x2="402" y2="230" stroke="currentColor" stroke-width="2"/><polygon points="152,148 144,141 153,137.5" fill="#f59e0b"/><line x1="140" y1="70" x2="146" y2="146" stroke="#f59e0b" stroke-width="2.5"/><polygon points="242,228 234,221 243,217.5" fill="#f59e0b"/><line x1="230" y1="150" x2="236" y2="226" stroke="#f59e0b" stroke-width="2.5"/><polygon points="282,308 274,301 283,297.5" fill="#f59e0b"/><line x1="260" y1="70" x2="276" y2="304" stroke="#f59e0b" stroke-width="2"/><polygon points="352,308 344,301 353,297.5" fill="#f59e0b"/><line x1="320" y1="230" x2="346" y2="304" stroke="#f59e0b" stroke-width="2.5"/><polygon points="410,245 406,253 414,253" fill="#14b8a6"/><line x1="410" y1="310" x2="410" y2="251" stroke="#14b8a6" stroke-width="2.5"/><polygon points="606,74 599,68 610,64.5" fill="#14b8a6"/><polyline points="340,310 560,310 606,74" fill="none" stroke="#14b8a6" stroke-width="2"/><polygon points="498,146 491,140 502,136.5" fill="#14b8a6"/><line x1="490" y1="230" x2="494" y2="144" stroke="#14b8a6" stroke-width="2.5"/><polygon points="606,66 599,60 610,56.5" fill="#14b8a6"/><line x1="580" y1="150" x2="602" y2="68" stroke="#14b8a6" stroke-width="2.5"/><rect x="60" y="57" width="80" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="100" y="74" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">spawn fib(3)</text><rect x="160" y="57" width="100" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="210" y="74" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">spawn fib(1)</text><rect x="610" y="57" width="92" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="656" y="74" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">fib(0); sync; +</text><rect x="150" y="137" width="80" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="190" y="154" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">spawn fib(2)</text><rect x="500" y="137" width="80" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="540" y="154" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">fib(1); sync; +</text><rect x="240" y="217" width="80" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="280" y="234" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">spawn fib(1)</text><rect x="410" y="217" width="80" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="450" y="234" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">fib(0); sync; +</text><rect x="280" y="297" width="60" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="310" y="314" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">return 1</text><rect x="350" y="297" width="60" height="26" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/><text x="380" y="314" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">return 1</text><text x="668" y="314" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end" opacity="0.7">T₁ = 9 strands · T∞ = 7</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Work, span and the greedy bound for P-FIB',
        problem: "Analyze the multithreaded Fibonacci program `x = spawn FIB(n-1); y = FIB(n-2); sync; return x+y` and evaluate the greedy bound for the dag of $\\text{P-FIB}(4)$ above.",
        steps: [
          { label: 'Step 1: Count the work', text: "Each call does $\\Theta(1)$ work plus the work of its two children: $T_1(n) = T_1(n-1) + T_1(n-2) + \\Theta(1) = \\Theta(\\varphi^n)$ where $\\varphi \\approx 1.618$. For $n = 4$ there are exactly 9 calls, hence 9 strands of $\\Theta(1)$ work." },
          { label: 'Step 2: Measure the span', text: "The spawned $\\text{FIB}(n-1)$ runs concurrently with $\\text{FIB}(n-2)$, so the span follows the *longer* child: $T_\\infty(n) = T_\\infty(n-1) + \\Theta(1) = \\Theta(n)$. Concretely, the critical path $4 \\to 3 \\to 2 \\to 1$ threads through 7 strands of the dag." },
          { label: 'Step 3: Compute parallelism', text: "$T_1/T_\\infty = \\Theta(\\varphi^n / n)$ — astronomically large: for $n = 30$ the work is about 1.3 million strand-units against a span of about 30." },
          { label: 'Step 4: Apply the greedy bound at $P = 2$', text: "$T_2 \\le (T_1 + T_\\infty)/2 = (9+7)/2 = 8$ ticks, and the span law says $T_2 \\ge 7$; the dag is so serialized at this tiny size that the second processor helps only marginally — the asymptotic gain needs large $n$." },
        ],
        result: 'Work $\\Theta(\\varphi^n)$, span $\\Theta(n)$, parallelism $\\Theta(\\varphi^n/n)$; the scheduler theorem bounds $T_P$ within $T_1/P + T_\\infty$ for any $P$.',
      },
      {
        title: 'Why parallel for beats spawn-per-iteration',
        problem: "A loop of $n$ iterations is implemented (a) by spawning each iteration, (b) by a `parfor` that recursively halves the range. Compare span when each iteration costs $\\Theta(n)$.",
        steps: [
          { label: 'Step 1: Spawn-per-iteration', text: "$n$ children spawn serially from one strand: the spawning alone has span $\\Theta(n)$, so $T_\\infty \\ge \\Theta(n)$ even before any iteration runs — plus each child adds its own $\\Theta(n)$, giving $T_\\infty = \\Theta(n)$ from spawn overhead already." },
          { label: 'Step 2: Recursive parfor', text: "The range splits like a balanced binary tree: $\\Theta(\\lg n)$ spawn levels, then the longest iteration $\\Theta(n)$: $T_\\infty = \\Theta(n) + \\Theta(\\lg n)$ — the log overhead is negligible." },
          { label: 'Step 3: The grain-size lesson', text: "When iterations are cheap, clumping $k$ iterations per spawned chunk (a *grain size*) trades span for spawn overhead; CLRS fixes the grain when it removes the $\\Theta(\\lg n)$ term from the span of loops whose body is $O(1)$." },
        ],
        result: 'Both give $\\Theta(n)$ span here, but the recursive `parfor` exposes the $\\Theta(\\lg n)$-overhead structure that grain-size tuning removes.',
      },
    ],
    keyTakeaways: [
      "spawn, sync and parallel for express logical parallelism; the dag of strands, continuation, spawn and sync edges is the complete specification of what can run concurrently.",
      "Work $T_1$ = total strand time, span $T_\\infty$ = critical-path time; the laws $T_P \\ge T_1/P$ and $T_P \\ge T_\\infty$ sandwich every schedule.",
      "Parallelism $T_1/T_\\infty$ caps the useful processor count; past it, hardware idles on the critical path.",
      "Greedy scheduling guarantees $T_P \\le T_1/P + T_\\infty$ — never worse than twice optimal for $P \\le T_1/T_\\infty$.",
      "P-FIB is a toy: its work is exponential. Multithreading an exponential algorithm is still exponential — first fix the algorithm, then parallelize it.",
    ],
    quiz: [
      {
        q: "In the dynamic-multithreading model, the keyword sync causes the executing thread to:",
        options: ["acquire a lock on shared data", "wait until every strand spawned by the current procedure has completed", "yield the processor to the scheduler", "flush its cache before a memory barrier"],
        answer: 1,
        explanation: "sync is the join point: control resumes only after all children spawned by this procedure finish. Locks are a separate concern the model deliberately does not expose.",
      },
      {
        q: "Which inequality is the span law?",
        options: ["$T_P \\ge T_1 / P$", "$T_P \\ge T_\\infty$", "$T_P \\le T_1/P + T_\\infty$", "$T_P \\le T_1 / T_\\infty$"],
        answer: 1,
        explanation: "The span law: even with unbounded processors, the serial chain on the critical path cannot be shortened, so $T_P \\ge T_\\infty$. The first option is the work law; the third is the greedy upper bound.",
      },
      {
        q: "A dag has $T_1 = 900$ and $T_\\infty = 100$. What does the greedy scheduler bound promise on $P = 10$ processors?",
        options: ["$T_{10} \\le 90$", "$T_{10} \\le 190$", "$T_{10} \\le 100$", "$T_{10} \\le 99$"],
        answer: 1,
        explanation: "$T_{10} \\le T_1/P + T_\\infty (P-1)/P = 90 + 90 = 180 \\le 190$. Only the combined form $(T_1 + T_\\infty(P-1))/P$ is exact; with $T_\\infty = 100$ the slack makes 190 a valid bound (and the exact greedy bound is 180).",
      },
      {
        q: "The parallelism $T_1/T_\\infty$ of a computation is 500. Buying 2000 processors will:",
        options: ["cut the running time by exactly 10× versus 200 processors", "not help much beyond 500 — the span law floors the time", "double the work law bound", "make the dag acyclic"],
        answer: 1,
        explanation: "Past $P \\approx T_1/T_\\infty$ the span dominates: $T_P \\ge T_\\infty$ no matter how many cores you add, so the extra 1500 processors mostly idle.",
      },
    ],
  },

  // ---------------------------------------------------------------- 27.2
  {
    sectionId: 'clrs-ch27-s2',
    readingTime: 7,
    intro: "Matrix multiplication is the perfect stress test for the multithreaded model: its natural triple loop parallelizes in three different ways with wildly different parallelism, and the recursive quadrant algorithm hides a subtlety — enormous theoretical parallelism that memory behavior punishes in practice.",
    objectives: [
      "Derive work and span for parallel loops via the parallel-for costs",
      "Analyze MAT-VEC with a parallelized outer loop",
      "Analyze the recursive quadrant matrix multiply: $T_1 = \\Theta(n^3)$, $T_\\infty = \\Theta(\\lg n)$",
      "Explain why practical implementations stop recursing early",
    ],
    concepts: [
      {
        term: 'The span of a parallel loop',
        kind: 'method',
        statement: "A `parfor` implemented by recursive halving over $n$ iterations has work $\\Theta(n)$ and span $\\Theta(\\lg n)$ (the spawn tree). If each iteration is itself a strand of cost $c$, the loop's span is $\\Theta(\\lg n) + \\max_i c_i$.",
        detail: "For a body of $\\Theta(1)$, this $\\Theta(\\lg n)$ spawn overhead is *not* negligible relative to the work — the standard fix is a grain size: one spawned chunk handles $n/\\lg n$ iterations, restoring $T_\\infty = \\Theta(1)$ per level of nesting.",
      },
      {
        term: 'MAT-VEC: parallelize the outer loop only',
        kind: 'method',
        statement: "For $y = A x$ with a parallel outer loop and serial inner loop: $T_1(n) = \\Theta(n^2)$, $T_\\infty(n) = \\Theta(n)$ (the longest iteration is a full dot product). Parallelism is $\\Theta(n)$.",
        detail: "Parallelizing the inner loop too would give span $\\Theta(\\lg n)$ and parallelism $\\Theta(n^2 / \\lg n)$ — but the spawn overhead per $\\Theta(1)$ inner iteration dwarfs the work. The outer loop alone already exposes $n$-fold parallelism, which suits real matrix libraries that vectorize the inner loop instead.",
      },
      {
        term: 'Recursive quadrant multiplication',
        kind: 'method',
        statement: "`P-MATRIX-MULTIPLY-RECURSIVE(C, A, B)` splits $A, B, C$ into $n/2 \\times n/2$ quadrants, **spawns** the 8 recursive products $T_{ij} = A_{ik} B_{kj}$ (2 per quadrant of $C$), syncs, then adds: $C_{ij} = T_{ij}^{(1)} + T_{ij}^{(2)}$ — the 4 additions run concurrently.",
        detail: "Base case $n = 1$ is a scalar multiply. The additions after the sync are a single parallel step: each $C_{ij}$ gets one add.",
      },
      {
        term: 'Analysis of the quadrant multiply',
        kind: 'theorem',
        statement: "$T_1(n) = 8 T_1(n/2) + \\Theta(1) = \\Theta(n^3)$; the span follows the *longest single child* plus one combine step: $T_\\infty(n) = T_\\infty(n/2) + \\Theta(1) = \\Theta(\\lg n)$. Parallelism is $\\Theta(n^3 / \\lg n)$.",
        detail: "For $n = 8$: exactly $8^3 = 512$ scalar multiplies and $4 \\cdot (8^3 - 1)/7 = 292$ additions, with span $\\lg 8 + 1 = 4$ combine/multiply steps — parallelism $\\approx 804/4 \\approx 201$.",
      },
      {
        term: 'The cache caveat',
        kind: 'insight',
        statement: "Quadrant recursion strides through memory: at depth $d$ each submatrix read touches rows $n/2^d$ apart, wrecking spatial locality and TLB behavior. Real libraries (BLAS) recurse only to a large base case and hand the leaves to cache-blocked, vectorized kernels.",
        detail: "CLRS emphasizes the point: an asymptotically gorgeous $\\Theta(n^3/\\lg n)$ parallelism is worthless if the memory system serializes you. Strassen's algorithm can additionally cut the work to $\\Theta(n^{\\lg 7})$ and composes with the parallel analysis.",
      },
    ],
    examples: [
      {
        title: 'Counting strands in the $8 \\times 8$ quadrant multiply',
        problem: "Run the recursive quadrant algorithm on $n = 8$ matrices down to scalars, and account for every operation and the critical path.",
        steps: [
          { label: 'Step 1: Multiplies', text: "The recursion bottoms out at $1 \\times 1$ blocks: exactly $n^3 = 512$ scalar multiplications, one per leaf of the 8-ary recursion tree." },
          { label: 'Step 2: Additions', text: "The tree has $(8^3-1)/7 = 73$ internal nodes, each performing 4 concurrent scalar additions to combine its two spawned products: $4 \\cdot 73 = 292$ adds." },
          { label: 'Step 3: Span', text: "On the critical path: one leaf multiply plus one add per level — $\\lg 8 = 3$ levels of recursion, each contributing $\\Theta(1)$: $T_\\infty = 4$ strand-steps for $n = 8$, $\\Theta(\\lg n)$ in general." },
          { label: 'Step 4: Parallelism', text: "Total work $804$ steps against span 4: parallelism $\\approx 201$, matching the asymptotic $\\Theta(n^3/\\lg n) = 512/3 \\approx 171$ up to lower-order terms." },
        ],
        result: "The theoretical recipe: work $\\Theta(n^3)$, span $\\Theta(\\lg n)$ — but stop the recursion at a tuned base case so the memory system can keep up.",
      },
      {
        title: 'Span of nested parallel loops',
        problem: 'MAT-VEC $y = Ax$ ($n \\times n$) with outer loop parallelized, inner serial: compute work $T_1$ and span $T_\\infty$.',
        steps: [
          { label: 'Work', text: 'Each of $n$ dot products does $n$ multiply-adds: $T_1 = \\Theta(n^2)$ regardless of parallelization.' },
          { label: 'Span', text: 'Outer parallel-for spawns $n$ strands in $\\Theta(\\lg n)$ span; each dot product serial $\\Theta(n)$: $T_\\infty = \\Theta(\\lg n + n) = \\Theta(n)$.' },
          { label: 'Parallelism', text: '$T_1/T_\\infty = \\Theta(n)$: linear parallelism, not quadratic: parallelizing only the outer loop leaves the inner $n$ on the critical path.' },
          { label: 'Quadrant contrast', text: 'Recursive quadrant multiply parallelizes both dimensions: $T_\\infty = \\Theta(\\lg n)$ with $T_1 = \\Theta(n^3)$: $\\Theta(n^3/\\lg n)$ parallelism, exponentially more.' },
        ],
        result: 'MAT-VEC outer-only: $T_1 = \\Theta(n^2)$, $T_\\infty = \\Theta(n)$, parallelism $\\Theta(n)$: inner loop bounds the span.',
      },
    ],
    keyTakeaways: [
      "A recursive parallel for costs $\\Theta(\\lg n)$ span of pure spawn overhead — control it with grain sizes when bodies are cheap.",
      "MAT-VEC with only the outer loop parallel: $T_1 = \\Theta(n^2)$, $T_\\infty = \\Theta(n)$, parallelism $\\Theta(n)$ — usually the right trade.",
      "Quadrant matrix multiply: work $\\Theta(n^3)$, span $\\Theta(\\lg n)$, parallelism $\\Theta(n^3/\\lg n)$ — enormous on paper, but strided access makes large base cases essential in practice.",
      "Parallelism multiplies with algorithmic improvement: Strassen reduces work and composes with the same span analysis.",
    ],
    quiz: [
      {
        q: "In MAT-VEC with the outer loop parallelized (serial inner loops of $n$ multiplies each), the span is:",
        options: ["$\\Theta(\\lg n)$", "$\\Theta(n)$", "$\\Theta(n^2)$", "$\\Theta(n \\lg n)$"],
        answer: 1,
        explanation: "The longest strand is one full inner loop of $\\Theta(n)$; the outer `parfor` adds only $\\Theta(\\lg n)$ of spawn overhead, which the $\\Theta(n)$ iteration swallows.",
      },
      {
        q: "The recursive quadrant multiply has span $T_\\infty(n) = T_\\infty(n/2) + \\Theta(1)$ because:",
        options: ["the 8 recursive calls run concurrently, so the span is the longest one plus the constant-time combine", "matrix multiplication is associative", "the 4 additions dominate the span", "the scheduler rounds spans up"],
        answer: 0,
        explanation: "All 8 spawned subproblems overlap; after the sync, the 4 scalar additions are one $\\Theta(1)$ parallel step. Hence $\\Theta(\\lg n)$ span.",
      },
      {
        q: "Why do production matrix kernels stop the quadrant recursion at a large base case?",
        options: ["to avoid overflowing the spawn stack", "to reduce spawn overhead and preserve cache locality on strided submatrix access", "because the analysis fails below the base case", "to keep the dag planar"],
        answer: 1,
        explanation: "Spawn overhead per $\\Theta(1)$ leaf is ruinous, and submatrices at depth $d$ have rows $n/2^d$ apart — the cache and TLB serialize the beautiful span unless the leaf is big enough for blocked, vectorized kernels.",
      },
    ],
  },

  // ---------------------------------------------------------------- 27.3
  {
    sectionId: 'clrs-ch27-s3',
    readingTime: 7,
    intro: "Merge sort looks embarrassingly parallel, but its merge is a serial bottleneck: recursing on both halves concurrently still leaves a $\\Theta(n)$ merge on the critical path. The fix is a divide-and-conquer *merge* — split both arrays by rank, spawn one half — which crushes the span from $\\Theta(n)$ to $\\Theta(\\lg^2 n)$ and the whole sort to $\\Theta(\\lg^3 n)$.",
    objectives: [
      "Explain why ordinary merging forces span $\\Theta(n)$",
      "Describe P-MERGE: median split, binary-search rank, one spawned half",
      "Derive $T_\\infty^{\\text{merge}} = \\Theta(\\lg^2 n)$ and $T_\\infty^{\\text{sort}} = \\Theta(\\lg^3 n)$",
      "Compare serial merge sort, P-MERGE-SORT and randomized sorting on span",
    ],
    concepts: [
      {
        term: 'The merging bottleneck',
        kind: 'insight',
        statement: "Parallelizing both recursive calls of merge sort leaves the merge: output element $i$ cannot be chosen until its predecessor's position is known, so a standard two-pointer merge has span $\\Theta(n)$ and the sort has $T_\\infty(n) = \\Theta(n)$.",
        detail: "An ordinary multithreaded merge sort therefore has parallelism $\\Theta(n \\lg n / n) = \\Theta(\\lg n)$ — feeble. The parallelism must come from restructuring the merge itself.",
      },
      {
        term: 'P-MERGE: merge by ranks',
        kind: 'method',
        statement: "To merge $A[p_1..r_1]$ (the longer run) with $A[p_2..r_2]$ into $C$: take the **median** $A[q_1]$ of the first run, `BINARY-SEARCH` its **rank** $q_2$ in the second run. Then **spawn** $\\text{P-MERGE}(A[p_1..q_1{-}1],\\ A[p_2..q_2{-}1])$ into $C$'s front and run the other half ($A[q_1..r_1]$ with $A[q_2..r_2]$) inline; the two output ranges are disjoint, so no sync is needed *inside* the merge.",
        detail: "Each element's output position is computed arithmetically: the spawn handles elements below the median, the continuation those above — the same total order, two independent subproblems.",
      },
      {
        term: 'P-MERGE analysis',
        kind: 'theorem',
        statement: "The binary search costs $\\Theta(\\lg n)$; each level of the merge recursion halves the output size, and the subproblems are *uneven* but their recursion depth is at most $\\lg n$ levels each costing a search: $T_\\infty^{\\text{merge}}(n) = \\Theta(\\lg^2 n)$, while the work stays linear: $T_1^{\\text{merge}}(n) = \\Theta(n)$.",
        detail: "Total work per level is $\\Theta(n)$ (the searches are dominated by the elements they place), and there are $\\Theta(\\lg n)$ levels of span.",
      },
      {
        term: 'P-MERGE-SORT analysis',
        kind: 'theorem',
        statement: "$T_1(n) = 2T_1(n/2) + \\Theta(n) = \\Theta(n \\lg n)$; $T_\\infty(n) = T_\\infty(n/2) + \\Theta(\\lg^2 n) = \\Theta(\\lg^3 n)$. Parallelism: $\\Theta(n / \\lg^2 n)$.",
        detail: "The span recurrence stacks a merge span on each of the $\\lg n$ sort levels. For $n = 2^{20}$: span $\\approx 1000$ against work $\\approx 2 \\times 10^7$ — parallelism about 20,000.",
      },
      {
        term: 'Binary-search rank in $O(\\lg n)$',
        kind: 'method',
        statement: 'P-MERGE finds the cross-ranks $k - j$ via binary search on the opposite subarray in $O(\\lg n)$: $x_{k}$’s rank in $B$ is $\\mathrm{rank} = \\mathrm{lower\\_bound}(B, x_k)$. The two submerges $(A_1,B_1)$, $(A_2,B_2)$ are then independent and spawned in parallel.',
        detail: 'Rank queries cost $O(\\lg n)$ span on the critical path, which is why P-MERGE’s span recurrence is $T_\\infty(n) = T_\\infty(n/2) + O(\\lg n) = \\Theta(\\lg^2 n)$ and not $\\Theta(\\lg n)$.',
      },
    ],
    figures: [
      {
        caption: 'P-MERGE splits by rank. The median 13 of the longer run $A$ splits $A$ after 8; its rank in $B$ (three elements of $B$ are below 13) splits $B$ after 7. The lower halves merge into a **spawned** call (teal) filling the front of $C$, the upper halves merge inline into the back — disjoint output ranges, so the two merges never touch and no inner sync is needed. Result: $T_\\infty^{\\text{merge}} = \\Theta(\\lg^2 n)$ from the binary searches stacked on the recursion.',
        svg: '<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="P-MERGE rank split of two sorted arrays into two independent subproblems"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">P-MERGE: split by the median of one run and its rank in the other</text><text x="112" y="72" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">A (8)</text><g stroke="currentColor" stroke-width="1.3"><rect x="120" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="170" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="220" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="270" y="52" width="50" height="32" fill="#f59e0b" fill-opacity="0.3"/><rect x="320" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="370" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="420" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="470" y="52" width="50" height="32" fill="currentColor" fill-opacity="0.05"/></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><text x="145" y="72">2</text><text x="195" y="72">5</text><text x="245" y="72">8</text><text x="295" y="72">13</text><text x="345" y="72">16</text><text x="395" y="72">19</text><text x="445" y="72">22</text><text x="495" y="72">25</text></g><line x1="270" y1="44" x2="270" y2="100" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 4" opacity="0.8"/><text x="264" y="40" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end">median split of A</text><text x="212" y="126" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">B (4)</text><g stroke="currentColor" stroke-width="1.3"><rect x="220" y="106" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="270" y="106" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="320" y="106" width="50" height="32" fill="currentColor" fill-opacity="0.05"/><rect x="370" y="106" width="50" height="32" fill="#f59e0b" fill-opacity="0.12"/></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><text x="245" y="126">1</text><text x="295" y="126">3</text><text x="345" y="126">7</text><text x="395" y="126">14</text></g><line x1="370" y1="98" x2="370" y2="154" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 4" opacity="0.8"/><text x="376" y="154" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">rank(13) = 3 → split B after 7</text><polygon points="230,208 222,202 233,199" fill="#14b8a6"/><line x1="195" y1="88" x2="226" y2="204" stroke="#14b8a6" stroke-width="1.8"/><polygon points="262,208 254,202 265,199" fill="#14b8a6"/><line x1="295" y1="142" x2="258" y2="204" stroke="#14b8a6" stroke-width="1.8"/><polygon points="512,208 504,202 515,199" fill="currentColor"/><line x1="445" y1="88" x2="508" y2="204" stroke="currentColor" stroke-width="1.8"/><polygon points="566,208 558,202 569,199" fill="currentColor"/><line x1="395" y1="142" x2="562" y2="204" stroke="currentColor" stroke-width="1.8"/><rect x="110" y="210" width="280" height="34" rx="6" fill="#14b8a6" fill-opacity="0.08" stroke="#14b8a6" stroke-width="1.5"/><text x="250" y="231" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">spawn P-MERGE([2,5,8], [1,3,7])</text><rect x="410" y="210" width="260" height="34" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="540" y="231" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">P-MERGE([13,…,25], [14]) inline</text><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle"><text x="130" y="296">1</text><text x="170" y="296">2</text><text x="210" y="296">3</text><text x="250" y="296">5</text><text x="290" y="296">7</text><text x="330" y="296">8</text><text x="430" y="296">13</text><text x="470" y="296">14</text><text x="510" y="296">16</text><text x="550" y="296">19</text><text x="590" y="296">22</text><text x="630" y="296">25</text></g><polygon points="240,308 236,316 244,316" fill="currentColor"/><line x1="240" y1="248" x2="240" y2="312" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><polygon points="530,308 526,316 534,316" fill="currentColor"/><line x1="530" y1="248" x2="530" y2="312" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><g stroke="currentColor" stroke-width="1.2"><rect x="110" y="272" width="240" height="32" fill="#14b8a6" fill-opacity="0.1"/><rect x="410" y="272" width="240" height="32" fill="currentColor" fill-opacity="0.05"/></g><g stroke="currentColor" stroke-width="1.2"><rect x="130" y="344" width="200" height="32" fill="#14b8a6" fill-opacity="0.1"/><rect x="330" y="344" width="220" height="32" fill="currentColor" fill-opacity="0.05"/></g><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle"><text x="150" y="364">1</text><text x="190" y="364">2</text><text x="230" y="364">3</text><text x="270" y="364">5</text><text x="310" y="364">7</text><text x="350" y="364">8</text><text x="390" y="364">13</text><text x="430" y="364">14</text><text x="470" y="364">16</text><text x="510" y="364">19</text><text x="550" y="364">22</text><text x="590" y="364">25</text></g><polygon points="250,342 246,350 254,350" fill="#14b8a6"/><line x1="250" y1="304" x2="250" y2="348" stroke="#14b8a6" stroke-width="1.2" opacity="0.6"/><polygon points="460,342 456,350 464,350" fill="currentColor"/><line x1="460" y1="304" x2="460" y2="348" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><text x="20" y="364" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="start" opacity="0.8">C (12)</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'One rank split, by hand',
        problem: "Execute the top-level split of `P-MERGE` on $A = [2, 5, 8, 13, 16, 19, 22, 25]$ and $B = [1, 3, 7, 14]$.",
        steps: [
          { label: 'Step 1: Take the median of the longer run', text: "$A$ has 8 elements, $B$ only 4 (P-MERGE exchanges so the first run is longer). The median is the 4th element: $A[q_1] = 13$." },
          { label: 'Step 2: Binary-search its rank in $B$', text: "Elements of $B$ below 13: exactly $1, 3, 7$ — so $\\operatorname{rank}(13) = 3$ and $B$ splits into $[1,3,7] \\,|\\, [14]$." },
          { label: 'Step 3: Spawn the lower merge', text: "$\\text{P-MERGE}([2,5,8], [1,3,7])$ is spawned; it produces $[1,2,3,5,7,8]$ into the first 6 slots of $C$ — its output positions are known immediately, no communication needed." },
          { label: 'Step 4: Continue with the upper merge', text: "The parent merges $[13, 16, 19, 22, 25]$ with $[14]$ inline into $[13, 14, 16, 19, 22, 25]$, the last 6 slots. Concatenation: $C = [1,2,3,5,7,8,13,14,16,19,22,25]$ — the correct merge of all 12 keys." },
        ],
        result: 'Two independent half-size merges whose outputs occupy disjoint ranges: this is the one step that turns merging from a serial scan into a parallel recursion.',
      },
      {
        title: 'Span bookkeeping: where $\\lg^3$ comes from',
        problem: "Account for the span of P-MERGE-SORT on $n$ elements.",
        steps: [
          { label: 'Step 1: One merge costs $\\lg^2$ on the critical path', text: "Each P-MERGE level does a $\\Theta(\\lg n)$ binary search then recurses on a smaller merge; the recursion depth is at most $\\lg n$ levels (output size halves along any root-to-leaf path): $T_\\infty^{\\text{merge}}(n) = \\Theta(\\lg^2 n)$." },
          { label: 'Step 2: Stack the sort levels', text: "The sort spawns both halves (parallel) then merges: $T_\\infty(n) = T_\\infty(n/2) + \\Theta(\\lg^2 n) = \\Theta(\\lg^3 n)$." },
          { label: 'Step 3: Compare the alternatives', text: "Serial merge sort: span $\\Theta(n)$. Ordinary parallel merge sort with serial merge: span $\\Theta(n)$. Randomized multithreaded sorting (padding): $\\Theta(\\lg n)$ expected span. P-MERGE-SORT's deterministic $\\Theta(\\lg^3 n)$ sits in between, with linear-log work." },
        ],
        result: 'Work $\\Theta(n \\lg n)$, span $\\Theta(\\lg^3 n)$, parallelism $\\Theta(n / \\lg^2 n)$: for $n = 10^6$, about $10^6/400 = 2500$-fold.',
      },
    ],
    keyTakeaways: [
      "The serial merge is the span killer: naive parallel merge sort tops out at parallelism $\\Theta(\\lg n)$.",
      "P-MERGE splits both runs by the median-and-rank trick so the two sub-merges write disjoint output ranges and need no synchronization.",
      "P-MERGE: $T_1 = \\Theta(n)$, $T_\\infty = \\Theta(\\lg^2 n)$ (binary searches stacked on the recursion); P-MERGE-SORT: $T_1 = \\Theta(n \\lg n)$, $T_\\infty = \\Theta(\\lg^3 n)$.",
      "Parallelism $\\Theta(n/\\lg^2 n)$ is thousands-fold for realistic inputs — genuine parallel sorting with deterministic guarantees.",
    ],
    quiz: [
      {
        q: "Why does P-MERGE not need a sync between its two recursive sub-merges?",
        options: ["both submerges return values instead of writing memory", "they write to disjoint ranges of the output array, computed from the split positions", "the runtime inserts a lock-free buffer", "one submerge is always empty"],
        answer: 1,
        explanation: "The rank split fixes each half's output positions in advance; the spawned lower merge and the inline upper merge never touch the same cells, so no join is needed inside the merge.",
      },
      {
        q: "The span of P-MERGE-SORT is:",
        options: ["$\\Theta(\\lg n)$", "$\\Theta(\\lg^2 n)$", "$\\Theta(\\lg^3 n)$", "$\\Theta(n)$"],
        answer: 2,
        explanation: "$\\Theta(\\lg n)$ sort levels, each paying the $\\Theta(\\lg^2 n)$ merge span: $\\Theta(\\lg^3 n)$. The merge alone is $\\Theta(\\lg^2 n)$ and the serial-merge version is $\\Theta(n)$.",
      },
      {
        q: "In P-MERGE, the purpose of the binary search for $\\operatorname{rank}(A[q_1])$ in the second run is to:",
        options: ["find the element equal to the median", "locate where the second run splits so both sub-merges stay sorted and disjoint", "avoid reading the array twice", "balance the number of processors"],
        answer: 1,
        explanation: "The rank tells exactly how many elements of $B$ precede the median, fixing both output ranges — that is what makes the two recursive merges independent.",
      },
    ],
  },
]
