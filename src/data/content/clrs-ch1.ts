import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson,
// Rivest & Stein). Chapter 1: The Role of Algorithms in Computing.
// Sections 1.1 – 1.2. Figure F1 generated & verified in /home/z/tmp-14a.
// ============================================================================

export const clrsCh1Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: "clrs-ch1-s1",
    readingTime: 5,
    intro: "Before any code or analysis, CLRS fixes vocabulary that the whole book depends on: what an algorithm is, how a computational problem is specified by its input–output relation, and what it means for an algorithm to be correct. The running example is sorting — the workhorse problem of the book — and the chapter closes with a warning about problems for which no efficient algorithm is known.",
    objectives: [
      "State the definition of an algorithm and the formal input–output specification of the sorting problem",
      "Distinguish a problem from an instance of that problem, and an algorithm from a correct algorithm",
      "Explain what NP-complete problems are and how practitioners respond to them",
    ],
    concepts: [
      {
        term: "Algorithm",
        kind: "definition",
        statement: "An **algorithm is a well-defined computational procedure that takes some value, or set of values, as *input* and produces some value, or set of values, as *output***. An algorithm is thus a sequence of computational steps that transform the input into the output.",
        detail: "The word descends from the 9th-century Persian mathematician al-Khwārizmī — algorithms are far older than computers. Euclid's algorithm for the greatest common divisor (about 300 BC) is the same kind of object as a modern sorting routine: finite, unambiguous, effective.",
      },
      {
        term: "The sorting problem (as a specification)",
        kind: "definition",
        statement: "**Input:** a sequence of $n$ numbers $\\langle a_1, a_2, \\ldots, a_n \\rangle$. **Output:** a permutation (reordering) $\\langle a'_1, a'_2, \\ldots, a'_n \\rangle$ of the input sequence such that $a'_1 \\le a'_2 \\le \\cdots \\le a'_n$.",
        detail: "This is the book's model of how every problem should be pinned down: a statement of the input constraints and the required input–output relation, with no commitment to *how* the output is produced. The numbers are often called *keys*, and in practice each key may carry satellite data (a record sorted by one of its fields).",
      },
      {
        term: "Instance of a problem",
        kind: "definition",
        statement: "A **problem instance** is the particular input, satisfying the problem's constraints, for which a solution is sought — e.g. the sequence $\\langle 31, 41, 59, 26, 41, 58 \\rangle$ is one instance of the sorting problem.",
        detail: "The distinction matters constantly: an algorithm solves a *problem* only if it is correct on *every* instance, while any proposed program can be checked quickly on a single instance. Note that an instance can have several valid answers — the two equal 41s may appear in either order.",
      },
      {
        term: "Correct algorithms",
        kind: "insight",
        statement: "An algorithm is said to be **correct** if, for every input instance, it *halts* with the correct output. A correct algorithm *solves* the computational problem; an incorrect algorithm might work on most inputs but produce wrong answers on some.",
        detail: "Incorrect algorithms are occasionally still useful if their error rate can be controlled — the book's example is a randomized primality test that errs only when the number is prime, with small probability — but correctness is the default requirement, and Chapter 2 introduces the proof technique (loop invariants) that establishes it.",
      },
      {
        term: "NP-complete problems",
        kind: "insight",
        statement: "There exists a large class of problems — **NP-complete** — for which no efficient algorithm is known: among them the clique problem, the traveling-salesman problem in its optimization form, and the Hamiltonian-cycle problem. A polynomial-time algorithm for any one of them would give polynomial-time algorithms for *all* of them (it would show P = NP); most researchers believe none exists.",
        detail: "The practical takeaway: before investing effort in an exact solution, you must know these problems by sight. Practitioners respond with heuristics that run fast but may err, approximation algorithms with provable quality guarantees, or randomized algorithms whose expected behavior is good — the exact themes of Chapters 5 and beyond.",
      },
    ],
    examples: [
      {
        title: "One instance, many valid outputs",
        problem: "Verify that $\\langle 31, 41, 59, 26, 41, 58 \\rangle$ is an instance of the sorting problem, give a correct output, and count how many different output sequences are acceptable.",
        steps: [
          { label: "Check the input", text: "The input is a sequence of $n = 6$ numbers, which satisfies the input specification — so it is a legitimate instance of the problem." },
          { label: "Produce an output", text: "Sorting the keys gives $\\langle 26, 31, 41, 41, 58, 59 \\rangle$, which is a permutation of the input with every adjacent pair in nondecreasing order — a correct output." },
          { label: "Count correct outputs", text: "The two 41s are distinct keys in their original positions but compare equal, so they may be swapped in the output: $6!/2! = 720/2 = 360$ distinct orderings are valid outputs." },
          { label: "Draw the moral", text: "A problem specifies a *relation* between inputs and outputs, not a function: an algorithm is free to return any output the relation allows, and two different correct algorithms may legally answer differently." },
        ],
        result: "The instance is well formed; $\\langle 26, 31, 41, 41, 58, 59 \\rangle$ is one of 360 acceptable outputs.",
      },
      {
        title: "An algorithm older than computers: Euclid's GCD",
        problem: "Use Euclid's algorithm to compute $\\gcd(2322, 654)$, and use it to illustrate the definition of an algorithm as a finite, unambiguous procedure.",
        steps: [
          { label: "Rule", text: "Repeatedly replace the pair $(a, b)$ with $(b, a \\bmod b)$ — the remainder of $a$ divided by $b$ — until the second component reaches 0; the first is then the gcd." },
          { label: "Divide", text: "$2322 = 3 \\cdot 654 + 360$, so the pair becomes $(654, 360)$." },
          { label: "Divide again", text: "$654 = 1 \\cdot 360 + 294$, then $360 = 1 \\cdot 294 + 66$, then $294 = 4 \\cdot 66 + 30$, then $66 = 2 \\cdot 30 + 6$, then $30 = 5 \\cdot 6 + 0$." },
          { label: "Halt", text: "The remainder hit 0, so the algorithm halts with output 6 — and indeed $2322 = 6 \\cdot 387$ and $654 = 6 \\cdot 109$." },
        ],
        result: "$\\gcd(2322, 654) = 6$, computed in six divisions. Every step was mechanical and finite: the two defining traits of an algorithm, with no machine in sight.",
      },
    ],
    keyTakeaways: [
      "An algorithm is a well-defined computational procedure transforming input to output; a problem is the input–output specification, and an instance is one qualifying input.",
      "An algorithm solves a problem only if it halts with a correct output for every instance — the standard the loop-invariant method of Chapter 2 will prove.",
      "NP-complete problems (clique, TSP variants, Hamiltonian cycle) have no known efficient algorithms; the practical responses are heuristics, approximation algorithms, and randomization.",
    ],
    quiz: [
      {
        q: "According to the book's definition, an algorithm is best described as:",
        options: [
          "any piece of source code stored on a computer",
          "a well-defined computational procedure that takes input values and produces output values",
          "a data structure for storing input sequences",
          "the specification of an input–output relation",
        ],
        answer: 1,
        explanation: "The algorithm is the *procedure* — the sequence of computational steps. The input–output relation itself is the *problem*; the two are deliberately kept separate.",
      },
      {
        q: "The sequence $\\langle 31, 41, 59, 26, 41, 58 \\rangle$ is best described as:",
        options: [
          "an algorithm for sorting",
          "a problem specification",
          "an instance of the sorting problem",
          "a correct output of the sorting problem",
        ],
        answer: 2,
        explanation: "It is one particular input satisfying the constraints — the definition of an instance. A specification would state what inputs and outputs look like in general; an output would be a sorted permutation.",
      },
      {
        q: "Which statement about NP-complete problems is the book's?",
        options: [
          "They are problems for which correct algorithms are impossible to write",
          "They are problems solvable in linear time on quantum computers",
          "They are problems with no known efficient algorithm, where one efficient algorithm for any of them would settle P vs NP",
          "They are problems that arise only in number theory and cryptography",
        ],
        answer: 2,
        explanation: "NP-completeness is about *efficiency*, not computability — exhaustive algorithms exist. The famous equivalence class means a polynomial algorithm for one member would yield polynomial algorithms for all, settling P = NP.",
      },
      {
        q: "An incorrect algorithm can still be useful in practice when:",
        options: [
          "it is shorter than the correct one",
          "its error rate can be controlled — e.g. a randomized test that errs with small probability only on certain inputs",
          "it runs in $O(n \\lg n)$ time for all inputs",
          "it produces outputs that are permutations of the input",
        ],
        answer: 1,
        explanation: "The book's example is a primality test whose errors are rare and one-sided; but by default, an algorithm solves a problem only if it halts with the correct output on every instance.",
      },
    ],
  },

  // ---------------------------------------------------------------- 1.2
  {
    sectionId: "clrs-ch1-s2",
    readingTime: 6,
    intro: "Would a computer 100 times faster always beat a slower one? Not if the slower machine runs a better algorithm. This short section makes the book's founding argument: efficiency differences between algorithms act exactly like hardware differences, so algorithms deserve the same engineering respect as processors and memory — and the gap only widens as inputs grow.",
    objectives: [
      "Quantify how insertion sort and merge sort compare as $n$ grows, on unequal hardware",
      "Explain why asymptotic differences eventually dominate any constant factor, machine included",
      "Identify the small-input regime where constants and hardware still win",
    ],
    concepts: [
      {
        term: "Algorithms as a technology",
        kind: "insight",
        statement: "Total system performance depends on **efficient algorithms** just as it depends on fast hardware, compilers and the operating system — algorithms belong in the same engineering ledger. Because there exist problems (NP-complete) with no known efficient algorithms, and because algorithmic choices change running times by orders of magnitude, *choosing the algorithm* is itself a design decision of the first rank.",
        detail: "The book's framing: suppose computers were infinitely fast and free — then any correct method would do, and algorithms would be a mere formality. For any finite technology, however, the choice of algorithm determines what is computable in practice.",
      },
      {
        term: "Insertion sort vs merge sort",
        kind: "insight",
        statement: "Insertion sort takes time roughly $c_1 n^2$ while merge sort takes $c_2 n \\lg n$. The $n^2$ versus $n \\lg n$ gap means that **beyond a crossover size, no constant factor — not even a 100× slower machine — can save insertion sort**: a slow computer running merge sort overtakes a fast computer running insertion sort at about $n \\approx 3.8 \\times 10^4$ items and is ahead by a factor of 1500 at $n = 10^8$.",
        detail: "Here $\\lg n$ denotes $\\log_2 n$ (base-2 logarithm), the book's convention throughout. The crossover is where the two instruction counts meet: $2n^2 = 50n\\lg n$ at these constants gives $n \\approx 190$ on *equal* machines, and about $3.8\\times10^4$ when the merge-sort machine is 100× slower.",
      },
      {
        term: "Why the crossover always comes",
        kind: "insight",
        statement: "The ratio of the running times is $\\frac{c_1 n^2}{c_2 n \\lg n} = \\frac{c_1}{c_2} \\cdot \\frac{n}{\\lg n}$, which **grows without bound**: dividing $n$ by $\\lg n$ still leaves a quantity tending to infinity, so any constant-factor head start — faster hardware, better constants — is eventually erased.",
        detail: "This is the entire motivation for Chapters 2 and 3: we need a calculus that ignores constants on purpose (asymptotic notation) precisely because constants decide only *when* the better algorithm wins, never *whether* it wins.",
      },
      {
        term: "Why sorting deserves its fame",
        kind: "insight",
        statement: "Sorting is a candidate for the title of most-studied problem in computer science: it is the **standard intermediate step** in databases (index building), search engines (ranked results), compilers, and data compression — which is why the book returns to it repeatedly (insertion and merge sorts here, heapsort and quicksort in Chapters 6–7, counting/radix sorts in Chapter 8, and an $\\Omega(n \\lg n)$ lower bound in Chapter 8).",
        detail: "The lesson generalizes: algorithms whose *worst case* is good (merge sort) and algorithms whose *average case* is good (quicksort, later) trade places depending on how adversarial the inputs are.",
      },
      {
        term: "The small-n regime",
        kind: "insight",
        statement: "For small $n$ the constants $c_1, c_2$ and the hardware rate still decide: insertion sort's tight inner loop beats merge sort below the crossover $n \\approx 3.8 \\times 10^4$ in the book's numbers, which is why hybrid sorts use insertion sort for short subarrays.",
        detail: "Asymptotics report what happens as $n \\to \\infty$; they never claim the leading term dominates at $n = 50$. The engineering rule is to switch to the asymptotically better algorithm only once $n$ passes the measured crossover.",
      },
    ],
    figures: [
      {
        caption: "Time to sort $n$ items on two machines: computer **A** runs insertion sort, $2n^2$ operations at $10^9$ operations/second; computer **B** runs merge sort, $50n\\lg n$ operations at a $100\\times$ slower $10^7$ operations/second. On the log–log grid both curves are straight lines, so they cross at most once — here at $n \\approx 3.8\\times10^4$. Below it, the fast machine wins; above, the slow machine's better *algorithm* wins, by 20× at $10^6$ items and about 1500× at $10^8$.",
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Log-log plot of sorting times: insertion sort on the fast machine crosses merge sort on the slow machine at n about 3.8 times 10 to the 4"><line x1="90" y1="300" x2="90" y2="20" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="90" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">10²</text><line x1="286.667" y1="300" x2="286.667" y2="20" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="286.667" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">10⁴</text><line x1="483.333" y1="300" x2="483.333" y2="20" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="483.333" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">10⁶</text><line x1="680" y1="300" x2="680" y2="20" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="680" y="318" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">10⁸</text><line x1="90" y1="300" x2="680" y2="300" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="84" y="304" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10⁻³ s</text><line x1="90" y1="218.447" x2="680" y2="218.447" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="84" y="222.447" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10⁰ s</text><line x1="90" y1="136.893" x2="680" y2="136.893" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="84" y="140.893" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10³ s</text><line x1="90" y1="55.3398" x2="680" y2="55.3398" stroke="currentColor" stroke-width="1" opacity="0.25"/><text x="84" y="59.3398" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end">10⁶ s</text><line x1="90" y1="300" x2="680" y2="300" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="300" x2="90" y2="20" stroke="currentColor" stroke-width="1.6"/><text x="680" y="336" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">n (items to sort)</text><text x="30" y="60" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">time</text><line x1="173.583" y1="300" x2="680" y2="20" stroke="#f59e0b" stroke-width="2.4"/><line x1="90" y1="285.864" x2="680" y2="106.447" stroke="#10b981" stroke-width="2.4"/><circle cx="343.7" cy="205.942" r="5" fill="currentColor"/><text x="353.7" y="195.942" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">cross ≈ 3.8×10⁴</text><text x="198.167" y="256.505" font-family="ui-sans-serif, system-ui" font-size="12" fill="#f59e0b">A: 2n² @ 10⁹/s</text><text x="522.667" y="147.767" font-family="ui-sans-serif, system-ui" font-size="12" fill="#10b981">B: 50n lg n @ 10⁷/s</text><text x="149" y="278.252" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">A wins (fast machine)</text><text x="444" y="77.0874" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">B wins: 20× @10⁶, 1500× @10⁸</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "The 100× slower computer wins (the book's computation)",
        problem: "Computer A executes $10^9$ instructions per second and runs insertion sort ($2n^2$ instructions); computer B executes $10^7$ instructions per second and runs merge sort ($50n\\lg n$ instructions). Compare the time to sort $n = 10^6$, $10^7$ and $10^8$ items.",
        steps: [
          { label: "At n = 10⁶", text: "A: $2(10^6)^2 = 2\\times10^{12}$ instructions $/$ $10^9$ per s $= 2000$ s ≈ 33 minutes. B: $50 \\cdot 10^6 \\cdot \\lg 10^6 = 50\\cdot10^6 \\cdot 19.93 \\approx 9.97\\times10^8$ instructions $/$ $10^7$ per s $\\approx 100$ s." },
          { label: "At n = 10⁷", text: "A: $2\\times10^{14} / 10^9 = 2\\times10^5$ s ≈ 55.6 hours. B: $50 \\cdot 10^7 \\cdot 23.25 \\approx 1.16\\times10^{10} / 10^7 \\approx 1163$ s ≈ 19.4 minutes." },
          { label: "At n = 10⁸", text: "A: $2\\times10^{16} / 10^9 = 2\\times10^7$ s ≈ 231 days. B: $50 \\cdot 10^8 \\cdot 26.58 \\approx 1.33\\times10^{11} / 10^7 \\approx 1.33\\times10^4$ s ≈ 3.7 hours." },
          { label: "Read the trend", text: "The advantage of the slow computer grows with $n$: 20× at $10^6$, about 170× at $10^7$, and about 1500× at $10^8$ — the ratio $n/\\lg n$ keeps climbing." },
        ],
        result: "Merge sort on the 100× slower machine wins for all $n \\gtrsim 3.8\\times10^4$, and the margin grows without bound: 33 min vs 100 s at $10^6$, 231 days vs 3.7 hours at $10^8$.",
      },
      {
        title: "Where the fast machine still wins",
        problem: "Use the same two computers to sort $n = 50$ items, and locate the exact crossover point.",
        steps: [
          { label: "A at n = 50", text: "$2n^2/10^9 = 2 \\cdot 2500 / 10^9 = 5\\times10^{-6}$ s — 5 microseconds." },
          { label: "B at n = 50", text: "$50n\\lg n/10^7 = 50 \\cdot 50 \\cdot 5.64/10^7 \\approx 1.4\\times10^{-3}$ s — about 1.4 milliseconds, i.e. 280× slower than A." },
          { label: "Solve for the crossover", text: "Set $2n^2/10^9 = 50n\\lg n/10^7$ and cancel $n$: $2n/10^9 = 5\\lg n/10^5$, i.e. $n = 2500\\lg n$. Fixed-point iteration from $n = 30000$ converges to $n \\approx 38040$." },
          { label: "Interpret", text: "Below roughly $3.8\\times10^4$ items the 100× hardware advantage and merge sort's larger constant dominate; above it, the $n/\\lg n$ ratio of the instruction counts takes over irreversibly." },
        ],
        result: "At $n = 50$ computer A wins by ~280×; the machines tie at $n \\approx 3.8\\times10^4$; beyond it B wins by an ever-growing factor.",
      },
    ],
    keyTakeaways: [
      "Algorithms are a technology on par with hardware: total system performance depends on choosing efficient algorithms exactly as it depends on fast processors.",
      "A $\\Theta(n \\lg n)$ merge sort on a 100× slower machine beats a $\\Theta(n^2)$ insertion sort for $n \\gtrsim 3.8\\times10^4$, and the margin grows without bound — constants decide only when the better algorithm wins.",
      "Some problems (the NP-complete class) admit no known efficient algorithm at all, so recognizing them up front redirects effort toward heuristics, approximation, or randomization.",
    ],
    quiz: [
      {
        q: "Computer A (10⁹ ops/s) runs insertion sort with $2n^2$ operations; computer B (10⁷ ops/s) runs merge sort with $50n\\lg n$ operations. To sort $n = 10^6$ items:",
        options: [
          "A finishes about 20× faster than B",
          "B finishes about 20× faster than A",
          "they take essentially the same time",
          "A finishes about 100× faster than B",
        ],
        answer: 1,
        explanation: "A needs $2\\times10^{12}/10^9 = 2000$ s ≈ 33 minutes; B needs about $10^9/10^7 = 100$ s. The slower machine wins by 20× — the algorithm beats the hardware.",
      },
      {
        q: "The running-time ratio of insertion sort to merge sort, $c_1 n^2$ versus $c_2 n \\lg n$, as $n \\to \\infty$:",
        options: [
          "approaches the constant $c_1/c_2$",
          "approaches 1 from above",
          "grows without bound, since $n/\\lg n \\to \\infty$",
          "first grows, then shrinks once $\\lg n$ catches up with $n$",
        ],
        answer: 2,
        explanation: "The ratio is $(c_1/c_2)(n/\\lg n)$, and $n/\\lg n \\to \\infty$: logarithms grow slower than any positive power of $n$, so no constant head start survives.",
      },
      {
        q: "In the book's comparison, the crossover input size where computer B (slow, merge sort) overtakes computer A (fast, insertion sort) is about:",
        options: ["$n \\approx 190$", "$n \\approx 3.8 \\times 10^4$", "$n \\approx 10^6$", "$n \\approx 10^8$"],
        answer: 1,
        explanation: "Solving $2n^2/10^9 = 50n\\lg n/10^7$ gives $n = 2500\\lg n$, i.e. $n \\approx 38040$. (The value $n \\approx 190$ is the crossover on *equal* machines, $2n^2 = 50n\\lg n$.)",
      },
      {
        q: "Which of the following is NOT part of the book's argument that algorithms are a technology?",
        options: [
          "many programs sort data as an intermediate step, so sorting speed propagates everywhere",
          "orders-of-magnitude efficiency differences between algorithms are common",
          "algorithms improve automatically when hardware improves",
          "some problems have no known efficient algorithm, making algorithm selection critical",
        ],
        answer: 2,
        explanation: "The argument runs the other way: however fast the hardware, a quadratic algorithm still loses to an $n\\lg n$ one at scale — hardware gains do not substitute for algorithmic efficiency.",
      },
      // PYQ-pattern: GATE 2016 — quadratic versus n log n crossover (rephrased, values changed)
      {
        q: "Two sorting routines take $8n^2$ and $64n\\lg n$ microseconds respectively. At $n = 1024$, which is faster and by roughly what factor?",
        options: ["The quadratic one, by about twofold", "Neither; they tie within ten per cent", "The quadratic one, by about thirteenfold", "The $n\\lg n$ one, by about thirteenfold"],
        answer: 3,
        explanation: "Step 1 — Given: $A(n) = 8n^2$ and $B(n) = 64n\\lg n$ microseconds, input size $n = 1024 = 2^{10}$ so $\\lg n = 10$. Step 2 — Governing idea: compare the closed forms directly; constants matter at fixed $n$ while growth rates decide large $n$. Step 3 — Algebra: $A = 8 \\times 1024^2 = 8388608$; $B = 64 \\times 1024 \\times 10 = 655360$; ratio $\\frac{8388608}{655360} = 12.8$, so $B$ is faster about thirteenfold. Step 4 — Sanity check: microseconds give $8.4$ s against $0.66$ s, both plausible, and the $n\\lg n$ routine wins exactly because $1024$ lies far above the crossover near $n \\approx 43$. Step 5 — Distractor analysis: the tie ignores the factor-$8$ constant gap, and both quadratic-wins options reverse the inequality at this size. Step 6 — Conclude: the $n\\lg n$ routine is faster by about thirteenfold.",
      },
    ],
  },
]
