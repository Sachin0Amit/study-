import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 8: Sorting in Linear Time (Sections 8.1 – 8.4)
// ============================================================================

export const clrsCh8Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: "clrs-ch8-s1",
    readingTime: 7,
    intro: "Merge sort and heapsort run in $O(n \\lg n)$ — is there anything faster? This section proves that in the comparison model the answer is no: every comparison sort makes $\\Omega(n \\lg n)$ comparisons in the worst case. The proof is a counting argument over an abstract object — the decision tree — that captures every comparison sort at once, no matter how clever its control flow.",
    objectives: [
      "Model any comparison sort as a decision tree and argue why correctness demands at least $n!$ leaves",
      "Prove the $\\Omega(n \\lg n)$ lower bound via $h \\ge \\lg(n!)$ and Stirling's approximation",
      "Explain why merge sort and heapsort are asymptotically optimal comparison sorts",
    ],
    concepts: [
      {
        term: "Comparison sorts",
        kind: "definition",
        statement: "A **comparison sort** determines the sorted order **only by comparing elements with each other** — the algorithm's sole view of a key is the outcome of a test $a_i \\le a_j$. Insertion sort, merge sort, heapsort and quicksort are all comparison sorts.",
        detail: "The model is a radical abstraction: values are never inspected, hashed, or used as indices. A comparison sort would run unchanged on encrypted keys, provided the comparison answers stayed consistent. That very abstraction is what the lower bound exploits.",
      },
      {
        term: "The decision-tree model",
        kind: "method",
        statement: "A sort's execution on a given input is a path down a **decision tree**: each **internal node** is labeled by a comparison $i{:}j$ (compare $a_i$ to $a_j$), the two outcomes label the edges (we assume a two-way $\\le$ / $\\gt$ test), and each **leaf** holds a permutation — the sorted order output for every input that reaches it.",
        detail: "Control flow, data movement and loop bookkeeping vanish; only comparisons remain. The **height** of the tree — the longest root-to-leaf path — is the algorithm's worst-case number of comparisons.",
      },
      {
        term: "Every correct sort needs $n!$ leaves",
        kind: "theorem",
        statement: "A comparison sort that handles $n$ distinct keys correctly must have a decision tree with **at least $n!$ reachable leaves**.",
        detail: "Each of the $n!$ orderings of the input must arrive at some leaf, and no leaf can serve two of them: two distinct permutations that follow the same path give identical answers to every comparison on that path, so the algorithm outputs the same permutation for both — wrong for at least one.",
      },
      {
        term: "Theorem 8.1 — the $\\Omega(n \\lg n)$ bound",
        kind: "theorem",
        statement: "Any comparison sort requires $\\Omega(n \\lg n)$ comparisons in the worst case. A binary tree of height $h$ has at most $2^h$ leaves, so $n! \\le 2^h$, giving $h \\ge \\lg(n!) \\ge \\lg(n/e)^n = n(\\lg n - \\lg e) = \\Omega(n \\lg n)$ by Stirling's approximation.",
        detail: "Stirling gives $n! \\ge (n/e)^n$, i.e. $\\lg n! \\ge n \\lg n - n \\lg e$. Since the height lower-bounds the worst-case comparison count, no comparison sort beats $n \\lg n$ by more than a constant factor — randomized comparison sorts included, since a random algorithm is just a probability distribution over trees.",
      },
      {
        term: "Corollary 8.2 — optimality of merge sort and heapsort",
        kind: "insight",
        statement: "Heapsort and merge sort are **asymptotically optimal** comparison sorts: their $O(n \\lg n)$ upper bounds meet the $\\Omega(n \\lg n)$ lower bound.",
        detail: "Quicksort is not covered — its worst case is $\\Theta(n^2)$, so it is optimal only in expectation. The bound is about *comparisons*: the next three sections escape it by using key values as array indices instead of comparing them.",
      },
    ],
    figures: [
      {
        caption: "The decision tree that insertion sort follows on three distinct keys $a_1, a_2, a_3$. Internal nodes labeled $i{:}j$ compare $a_i$ with $a_j$; left edges answer $\\le$, right edges $\\gt$; each leaf holds the output permutation. The tree owns all $3! = 6$ orderings — one per leaf — and its height 3 is the worst-case comparison count, exactly $\\lceil \\lg 6 \\rceil = \\lceil 2.59 \\rceil$: insertion sort is optimal for $n = 3$.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 720 410" width="100%" role="img" aria-label="Decision tree of insertion sort on three elements: a binary tree of comparisons with six permutation leaves"><g stroke="currentColor" stroke-width="1.5"><line x1="349" y1="60" x2="209" y2="113"/><line x1="371" y1="60" x2="511" y2="113"/><line x1="189" y1="145" x2="110" y2="213"/><line x1="211" y1="145" x2="276" y2="213"/><line x1="274" y1="245" x2="222" y2="313"/><line x1="296" y1="245" x2="344" y2="313"/><line x1="509" y1="145" x2="455" y2="213"/><line x1="531" y1="145" x2="594" y2="213"/><line x1="594" y1="245" x2="543" y2="313"/><line x1="616" y1="245" x2="664" y2="313"/></g><g font-family="ui-sans-serif, system-ui" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.75" text-anchor="middle"><text x="272" y="82">≤</text><text x="452" y="82">&gt;</text><text x="142" y="178">≤</text><text x="252" y="178">&gt;</text><text x="240" y="278">≤</text><text x="330" y="278">&gt;</text><text x="472" y="178">≤</text><text x="570" y="178">&gt;</text><text x="560" y="278">≤</text><text x="648" y="278">&gt;</text></g><g stroke="currentColor" stroke-width="1.8"><rect x="337" y="30" width="46" height="30" rx="7" fill="currentColor" fill-opacity="0.08"/><rect x="177" y="115" width="46" height="30" rx="7" fill="currentColor" fill-opacity="0.08"/><rect x="497" y="115" width="46" height="30" rx="7" fill="currentColor" fill-opacity="0.08"/><rect x="262" y="215" width="46" height="30" rx="7" fill="currentColor" fill-opacity="0.08"/><rect x="582" y="215" width="46" height="30" rx="7" fill="currentColor" fill-opacity="0.08"/></g><g font-family="ui-monospace, monospace" font-size="13" fill="currentColor" text-anchor="middle"><text x="360" y="50">1:2</text><text x="200" y="135">2:3</text><text x="520" y="135">1:3</text><text x="285" y="235">1:3</text><text x="605" y="235">2:3</text></g><g stroke="currentColor" stroke-width="1.5"><rect x="58" y="215" width="84" height="30" rx="7" fill="currentColor" fill-opacity="0.03"/><rect x="173" y="315" width="84" height="30" rx="7" fill="currentColor" fill-opacity="0.03"/><rect x="313" y="315" width="84" height="30" rx="7" fill="currentColor" fill-opacity="0.03"/><rect x="403" y="215" width="84" height="30" rx="7" fill="currentColor" fill-opacity="0.03"/><rect x="493" y="315" width="84" height="30" rx="7" fill="currentColor" fill-opacity="0.03"/><rect x="633" y="315" width="84" height="30" rx="7" fill="currentColor" fill-opacity="0.03"/></g><g font-family="ui-monospace, monospace" font-size="12.5" fill="currentColor" text-anchor="middle"><text x="100" y="235">⟨1,2,3⟩</text><text x="215" y="335">⟨1,3,2⟩</text><text x="355" y="335">⟨3,1,2⟩</text><text x="445" y="235">⟨2,1,3⟩</text><text x="535" y="335">⟨2,3,1⟩</text><text x="675" y="335">⟨3,2,1⟩</text></g><text x="360" y="388" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.7" text-anchor="middle">6 leaves = 3! permutations · height 3 = worst-case comparisons</text></svg>`,
      },
    ],
    examples: [
      {
        title: "How tall must the tree be? Three Stirling checks",
        problem: "Use $h \\ge \\lg(n!)$ to lower-bound the worst-case comparison count for $n = 3$, $n = 10$ and $n = 10^6$.",
        steps: [
          { label: "n = 3", text: "$\\lg 3! = \\lg 6 \\approx 2.585$, so $h \\ge 3$ comparisons. Insertion sort's tree (above) has height exactly 3 — it is optimal here, and the $n - 1 + n - 2 + \\cdots = 4$ loose analysis is beaten by the tree." },
          { label: "n = 10", text: "$10! = 3{,}628{,}800$ and $\\lg 10! \\approx 21.79$, so $h \\ge 22$. Merge sort on 10 elements makes at most $n\\lceil \\lg n \\rceil - 2^{\\lceil \\lg n \\rceil} + 1 = 40 - 16 + 1 = 25$ comparisons — a gap of only 3 above the optimum." },
          { label: "n = 10⁶", text: "Stirling: $\\lg(n!) \\approx n(\\lg n - \\lg e) = 10^6 \\cdot (19.93 - 1.443) \\approx 1.85 \\times 10^7$. A perfect $n \\lg n$ sorter would still need $\\approx 1.99 \\times 10^7$ — the $-n \\lg e$ term is worth about 1.4 million comparisons." },
        ],
        result: "The bound $\\lg(n!) = n \\lg n - \\Theta(n)$ is the exact shape of the true optimum (up to lower-order terms); merge sort sits within $O(n)$ comparisons of it.",
      },
      {
        title: "Decision tree for three elements",
        problem: "Draw the decision tree lower bound for $n = 3$ and check $h \\ge \\lg(3!) = \\lg 6$ by hand.",
        steps: [
          { label: "Leaves needed", text: "Three distinct keys admit $3! = 6$ orders, so any correct comparison sort needs at least $6$ leaves: one per permutation." },
          { label: "Height bound", text: "A binary tree of height $h$ has at most $2^h$ leaves, so $2^h \\ge 6$ forces $h \\ge \\lceil \\lg 6 \\rceil = 3$. Worst case at least $3$ comparisons." },
          { label: "Stirling check", text: "$\\lg(3!) = \\lg 6 \\approx 2.58$; $n \\lg n - n \\lg e = 3 \\cdot 1.58 - 4.33 \\approx 0.42$, a valid but loose lower estimate, while $h \\ge 3$ is tight: insertion sort attains $3$ on $\\langle 3,2,1 \\rangle$." },
          { label: "Scale-up", text: "For $n = 10$: $10! = 3628800$, $\\lg(10!) \\approx 21.8$, so $h \\ge 22$ comparisons worst case; merge sort uses about $n \\lceil \\lg n \\rceil \\approx 40$, within a factor $2$ of optimal." },
        ],
        result: "$n = 3$ needs height $\\ge 3$; in general $h \\ge \\lg(n!) = \\Omega(n \\lg n)$ by Stirling, so no comparison sort beats $n \\lg n$ order.",
      },
    ],
    keyTakeaways: [
      "Any correct comparison sort's decision tree must own at least $n!$ leaves — one per input ordering, since a shared leaf forces a wrong answer for one of two orderings.",
      "Height $\\ge \\lg(n!) = \\Omega(n \\lg n)$ by Stirling's $n! \\ge (n/e)^n$: no comparison sort, randomized or deterministic, can beat $n \\lg n$ worst-case comparisons.",
      "Merge sort and heapsort are asymptotically optimal comparison sorts; to sort faster you must stop comparing and exploit key structure — which is exactly what the next three sections do.",
    ],
    quiz: [
      {
        q: "In the decision-tree model, why must a correct comparison sort have at least $n!$ leaves?",
        options: [
          "Each internal node branches two ways, and $2^n = n!$",
          "Each of the $n!$ input orderings must reach its own leaf, since two orderings arriving at the same leaf would receive the same output",
          "The sorted output itself has $n!$ possible forms",
          "Balanced binary trees of height $n$ have exactly $n!$ leaves",
        ],
        answer: 1,
        explanation: "Two distinct permutations that follow the same path answer every comparison on that path identically, so the algorithm produces one identical output for both — correct for at most one of them.",
      },
      {
        q: "A binary tree of height $h$ has at most $2^h$ leaves. Combined with the $n!$-leaf requirement, this gives:",
        options: ["$h \\le \\lg(n!)$", "$h \\ge \\lg(n!)$", "$h = n!$", "$h \\ge n!$"],
        answer: 1,
        explanation: "Leaves $\\le 2^h$ and leaves $\\ge n!$ force $2^h \\ge n!$, i.e. the height — the worst-case comparison count — is at least $\\lg(n!)$.",
      },
      {
        q: "Stirling's approximation enters the proof of Theorem 8.1 in order to:",
        options: [
          "bound the number of internal nodes in a balanced tree",
          "show that $\\lg(n!) = \\Omega(n \\lg n)$",
          "show that $\\lg(n!) = O(\\lg n)$",
          "estimate the average depth of a leaf",
        ],
        answer: 1,
        explanation: "From $n! \\ge (n/e)^n$ we get $\\lg(n!) \\ge n(\\lg n - \\lg e)$, which is $\\Omega(n \\lg n)$ — the leading term of the lower bound.",
      },
      {
        q: "Which statement about Corollary 8.2 is correct?",
        options: [
          "Quicksort is covered, because its average running time is $\\Theta(n \\lg n)$",
          "Heapsort and merge sort are asymptotically optimal comparison sorts; quicksort's $\\Theta(n^2)$ worst case leaves it outside the corollary",
          "The corollary proves no $O(n)$ sort can exist in any model of computation",
          "Insertion sort is asymptotically optimal for all $n$",
        ],
        answer: 1,
        explanation: "The corollary matches $O(n \\lg n)$ algorithms against the comparison lower bound; quicksort's worst case is quadratic, so only its expectation is optimal. Linear sorts exist outside the comparison model — the rest of this chapter builds them.",
      },
      // PYQ-pattern — decision-tree height lower bound (rephrased, values changed)
      {
        q: "Any comparison sort of $6$ distinct keys needs a decision tree with $720$ leaves. Its height is at least:",
        options: ["6", "8", "12", "10"],
        answer: 3,
        explanation: "Step 1 — Given: $6! = 720$ permutations, each needing its own leaf. Step 2 — Governing bound: a binary tree of height $h$ holds at most $2^h$ leaves, so $h \\ge \\lceil\\lg(720)\\rceil$. Step 3 — Arithmetic: $\\lg 720 = \\lg 72 + \\lg 10 \\approx 6.17 + 3.32 = 9.49$, hence $h \\ge 10$. Step 4 — Sanity check: $2^9 = 512 < 720 \\le 1024 = 2^{10}$, Stirling confirms $\\lg(6!) \\approx 9.49$, and the bound is information-theoretic, valid for every comparison method. Step 5 — Distractor analysis: $6$ confuses keys with comparisons, $8$ rounds the logarithm down, and $12$ doubles unnecessarily. Step 6 — Conclude: height at least $10$, the $\\Omega(n\\lg n)$ instance.",
      },
    ],
  },

  // ---------------------------------------------------------------- 8.2
  {
    sectionId: "clrs-ch8-s2",
    readingTime: 7,
    intro: "Counting sort detonates the $\\Omega(n \\lg n)$ barrier by refusing to compare keys at all: it counts how many of each value occur, converts the census into ranks, and drops each element into its pre-computed slot. The price is a precondition — keys must be small integers in the range $0$ to $k$ — and the reward is a stable sort running in $\\Theta(n + k)$.",
    objectives: [
      "Execute COUNTING-SORT line by line, including the rank loop and its invariant",
      "Explain why the final loop runs backward and why that makes the sort stable",
      "Analyze the $\\Theta(n + k)$ cost and state when counting sort beats comparison sorts",
    ],
    concepts: [
      {
        term: "The premise: integers in a small range",
        kind: "definition",
        statement: "Counting sort assumes the $n$ input elements are **integers in the range $0$ to $k$** (any $k$). The value of a key is then used directly as an array index — the operation the comparison model forbids.",
        detail: "This is the structural escape from Section 8.1: nothing in the lower bound prevents a linear-time sort once keys can index memory. The catch is space and time that grow with the range: $k$ must be $O(n)$ (or at least modest) for the sort to be efficient.",
      },
      {
        term: "The COUNTING-SORT procedure",
        kind: "method",
        statement: "**`COUNTING-SORT(A, B, k)`**: zero $C[0..k]$; for $j = 1$ to $n$ do $C[A[j]] = C[A[j]] + 1$; for $i = 1$ to $k$ do $C[i] = C[i] + C[i-1]$; for $j = A.length$ **downto $1$** do $B[C[A[j]]] = A[j]$ and $C[A[j]] = C[A[j]] - 1$.",
        detail: "Array $B$ (length $n$) receives the output; array $C[0..k]$ is auxiliary workspace. The second loop is a prefix sum, the third walks the input **right to left** — the direction is what guarantees stability, and stability is what radix sort will need in Section 8.3.",
      },
      {
        term: "Census, then ranks",
        kind: "insight",
        statement: "After the first loop $C[v]$ counts elements **equal to** $v$; after the prefix-sum loop $C[v]$ counts elements **less than or equal to** $v$ — which is exactly the final position of the last copy of $v$.",
        detail: "The prefix-sum loop's invariant: before iteration $i$, $C[i-1]$ equals the number of elements $\\le i-1$. So $C[v]$ is a rank: when the placement loop reads $A[j] = v$, the slot $C[v]$ is still free precisely for the rightmost remaining copy of $v$.",
      },
      {
        term: "Stability from the backward loop",
        kind: "theorem",
        statement: "Counting sort is **stable**: elements with equal keys appear in the output in the same order as in the input. The reason is the `downto` direction combined with the decrement $C[A[j]] = C[A[j]] - 1$: the rightmost remaining copy of $v$ is placed in the rightmost free slot reserved for $v$.",
        detail: "Run the loop upward instead and equal keys would come out reversed. Stability seems like a nicety here, but it is load-bearing: LSD radix sort (Section 8.3) is correct only because each digit pass is a stable sort.",
      },
      {
        term: "Running time and the verdict",
        kind: "law",
        statement: "Counting sort runs in $\\Theta(n + k)$ and uses $\\Theta(n + k)$ extra space. When $k = O(n)$ the total is $\\Theta(n)$ — **linear**, asymptotically beating every comparison sort.",
        detail: "Each of the four loops is a single pass. If $k = \\Theta(n \\lg n)$ or larger, the $+k$ term dominates and comparison sorts become competitive again — the range, not the input size, decides.",
      },
    ],
    figures: [
      {
        caption: "Counting sort on $A = \\langle 2, 5, 3, 0, 2, 3, 0, 3 \\rangle$ with $k = 5$. (a) After the first loop, $C$ is a census: $C[v] = |\\{j : A[j] = v\\}|$ — e.g. $C[3] = 3$ counts the three 3s. (b) The prefix-sum loop turns the census into ranks: now $C[3] = 7$ counts elements $\\le 3$. When $j = 8$ reads $A[8] = 3$ it writes $B[C[3]] = B[7] = 3$ and drops $C[3]$ to 6 — reserving position 6 for the next 3 in line. That reservation is exactly what makes the sort stable.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 410" width="100%" role="img" aria-label="Two panels of array cells: A, C and B after the counting loop, then C after prefix sums and the final sorted B with the placement of A[8] traced"><text x="16" y="55" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">(a)</text><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor"><text x="66" y="55">A</text><text x="66" y="125">C</text><text x="66" y="195">B</text></g><g stroke="currentColor" stroke-width="1.5"><rect x="100" y="30" width="52" height="40"/><rect x="152" y="30" width="52" height="40"/><rect x="204" y="30" width="52" height="40"/><rect x="256" y="30" width="52" height="40"/><rect x="308" y="30" width="52" height="40"/><rect x="360" y="30" width="52" height="40"/><rect x="412" y="30" width="52" height="40"/><rect x="464" y="30" width="52" height="40"/></g><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="126" y="55">2</text><text x="178" y="55">5</text><text x="230" y="55">3</text><text x="282" y="55">0</text><text x="334" y="55">2</text><text x="386" y="55">3</text><text x="438" y="55">0</text><text x="490" y="55">3</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="126" y="84">1</text><text x="178" y="84">2</text><text x="230" y="84">3</text><text x="282" y="84">4</text><text x="334" y="84">5</text><text x="386" y="84">6</text><text x="438" y="84">7</text><text x="490" y="84">8</text></g><g stroke="currentColor" stroke-width="1.5"><rect x="100" y="100" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="152" y="100" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="204" y="100" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="256" y="100" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="308" y="100" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="360" y="100" width="52" height="40" fill="currentColor" fill-opacity="0.05"/></g><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="126" y="125">2</text><text x="178" y="125">0</text><text x="230" y="125">2</text><text x="282" y="125">3</text><text x="334" y="125">0</text><text x="386" y="125">1</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="126" y="154">0</text><text x="178" y="154">1</text><text x="230" y="154">2</text><text x="282" y="154">3</text><text x="334" y="154">4</text><text x="386" y="154">5</text></g><text x="432" y="122" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">C[v] = #{A[j] = v}</text><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"><rect x="100" y="170" width="52" height="40"/><rect x="152" y="170" width="52" height="40"/><rect x="204" y="170" width="52" height="40"/><rect x="256" y="170" width="52" height="40"/><rect x="308" y="170" width="52" height="40"/><rect x="360" y="170" width="52" height="40"/><rect x="412" y="170" width="52" height="40"/><rect x="464" y="170" width="52" height="40"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="126" y="224">1</text><text x="178" y="224">2</text><text x="230" y="224">3</text><text x="282" y="224">4</text><text x="334" y="224">5</text><text x="386" y="224">6</text><text x="438" y="224">7</text><text x="490" y="224">8</text></g><text x="432" y="192" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">B still empty</text><text x="16" y="275" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">(b)</text><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor"><text x="66" y="275">C</text><text x="66" y="345">B</text></g><text x="100" y="244" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">C[v] = #{A[j] ≤ v} — ranks</text><g stroke="currentColor" stroke-width="1.5"><rect x="100" y="250" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="152" y="250" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="204" y="250" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="256" y="250" width="52" height="40" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2"/><rect x="308" y="250" width="52" height="40" fill="currentColor" fill-opacity="0.05"/><rect x="360" y="250" width="52" height="40" fill="currentColor" fill-opacity="0.05"/></g><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="126" y="275">2</text><text x="178" y="275">2</text><text x="230" y="275">4</text><text x="282" y="275" font-weight="bold">7</text><text x="334" y="275">7</text><text x="386" y="275">8</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="126" y="304">0</text><text x="178" y="304">1</text><text x="230" y="304">2</text><text x="282" y="304">3</text><text x="334" y="304">4</text><text x="386" y="304">5</text></g><g stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3" fill="none"><line x1="548" y1="265" x2="322" y2="265"/></g><polygon points="314,265 324,260.5 324,269.5" fill="#f59e0b"/><text x="435" y="258" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f59e0b" text-anchor="middle">C[3] = 7</text><rect x="552" y="246" width="88" height="34" rx="6" stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 3"/><text x="596" y="268" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">A[8] = 3</text><path d="M 282 294 C 320 316, 375 324, 426 320" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/><polygon points="428,320 418,315.5 418,324.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5"><rect x="100" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/><rect x="152" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/><rect x="204" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/><rect x="256" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/><rect x="308" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/><rect x="360" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/><rect x="412" y="320" width="52" height="40" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2"/><rect x="464" y="320" width="52" height="40" fill="currentColor" fill-opacity="0.12"/></g><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="126" y="345">0</text><text x="178" y="345">0</text><text x="230" y="345">2</text><text x="282" y="345">2</text><text x="334" y="345">3</text><text x="386" y="345">3</text><text x="438" y="345" font-weight="bold">3</text><text x="490" y="345">5</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="126" y="374">1</text><text x="178" y="374">2</text><text x="230" y="374">3</text><text x="282" y="374">4</text><text x="334" y="374">5</text><text x="386" y="374">6</text><text x="438" y="374">7</text><text x="490" y="374">8</text></g><text x="306" y="394" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8" text-anchor="middle">j = 8: B[C[3]] = B[7] ← A[8] = 3, then C[3] ← 6</text></svg>`,
      },
    ],
    examples: [
      {
        title: "A full trace of COUNTING-SORT",
        problem: "Run COUNTING-SORT on $A = \\langle 2, 5, 3, 0, 2, 3, 0, 3 \\rangle$ with $k = 5$, showing $C$ after each loop and the first three placements.",
        steps: [
          { label: "Census", text: "Loop 2 counts: $C = \\langle 2, 0, 2, 3, 0, 1 \\rangle$ over values $0..5$ — two 0s, no 1s, two 2s, three 3s, no 4s, one 5." },
          { label: "Ranks", text: "The prefix-sum loop gives $C = \\langle 2, 2, 4, 7, 7, 8 \\rangle$: e.g. $C[3] = 7$ because seven elements are $\\le 3$." },
          { label: "j = 8, 7, 6", text: "$A[8] = 3$: write $B[7] = 3$, $C[3] \\to 6$. $A[7] = 0$: write $B[2] = 0$, $C[0] \\to 1$. $A[6] = 3$: write $B[6] = 3$, $C[3] \\to 5$." },
          { label: "j = 5 … 1", text: "$A[5] = 2 \\to B[4] = 2$; $A[4] = 0 \\to B[1] = 0$; $A[3] = 3 \\to B[5] = 3$; $A[2] = 5 \\to B[8] = 5$; $A[1] = 2 \\to B[3] = 2$." },
        ],
        result: "$B = \\langle 0, 0, 2, 2, 3, 3, 3, 5 \\rangle$ in $8 + 5 + 8 = 21$ array writes. The three 3s entered at input positions 3, 6, 8 and land at output positions 5, 6, 7 — the same order: the sort is stable.",
      },
      {
        title: "When $k$ dwarfs $n$",
        problem: "Sort $n = 5$ keys from $0..1000$ with COUNTING-SORT and audit why it loses to comparison sorts here.",
        steps: [
          { label: "Cost", text: "COUNTING-SORT costs $\\Theta(n+k) = \\Theta(1005)$ operations and a $C[0..1000]$ array of $1001$ counters for $5$ keys." },
          { label: "Versus merge sort", text: "Merge sort costs $\\Theta(n \\lg n) \\approx 5 \\cdot 3 = 15$ comparisons with $O(n)$ extra space: two orders of magnitude less work and space." },
          { label: "Rule", text: "Counting sort wins only when $k = O(n)$: then $\\Theta(n+k) = \\Theta(n)$. When $k = \\Omega(n \\lg n)$ the $k$ term dominates and a $\\Theta(n \\lg n)$ comparison sort is cheaper." },
          { label: "Fix", text: "Either compress the range (radix sort, Section 8.3) or switch algorithms: the precondition $k \\approx n$ is load-bearing, not advisory." },
        ],
        result: "$\\Theta(1005)$ vs $\\Theta(15)$: counting sort is the wrong tool when $k \\gg n$; its linear bound is linear in the wrong parameter.",
      },
    ],
    keyTakeaways: [
      "Counting sort uses key values as array indices — the move that comparison sorting forbids and the reason it can run in $\\Theta(n + k)$.",
      "After the prefix-sum loop, $C[v]$ is the exact final position of the last copy of $v$; the backward placement loop turns that into stability.",
      "The sort is linear when $k = O(n)$ and wasteful when the range dwarfs the input — the range, not $n$, decides whether counting sort is the right tool.",
    ],
    quiz: [
      {
        q: "After COUNTING-SORT's prefix-sum loop, $C[v]$ contains:",
        options: [
          "the number of elements equal to $v$",
          "the number of elements less than or equal to $v$",
          "the value that belongs at position $v$ of $B$",
          "the index in $B$ where the first copy of $v$ was placed",
        ],
        answer: 1,
        explanation: "The first loop leaves a census (# equal to v); adding $C[i-1]$ into $C[i]$ turns it into a running total (# ≤ v), which is precisely the final slot of the last copy of v.",
      },
      {
        q: "The placement loop runs $j$ from $A.length$ down to $1$ rather than upward. The reason is:",
        options: [
          "it makes the algorithm cache-friendly",
          "it guarantees stability — equal keys keep their input order",
          "it halves the running time",
          "otherwise the census array $C$ would need to be rebuilt",
        ],
        answer: 1,
        explanation: "Walking right to left places the rightmost remaining copy of v in the rightmost free slot reserved for v (C[v] is decremented after each write), so equal keys come out in input order.",
      },
      {
        q: "Counting sort's running time is $\\Theta(n + k)$. It is linear in $n$ exactly when:",
        options: [
          "the input is already sorted",
          "$k = O(n)$, or at least $k$ comparable to $n$",
          "only when $k = O(1)$",
          "the input is uniformly distributed over the range",
        ],
        answer: 1,
        explanation: "The +k term pays for zeroing and scanning the value range; it is dominated by n only when k = O(n). Input distribution is irrelevant — counting sort makes no probabilistic assumption.",
      },
      {
        q: "Why does the $\\Omega(n \\lg n)$ lower bound of Section 8.1 not apply to counting sort?",
        options: [
          "It is written iteratively rather than recursively",
          "It never compares two input keys — values are used directly as array indices",
          "It uses randomization",
          "Its output is only approximately sorted",
        ],
        answer: 1,
        explanation: "The decision-tree argument covers algorithms whose only information about keys comes from comparisons. Counting sort inspects values outright, so the model — and the bound — do not apply.",
      },
      // PYQ-pattern — COUNTING-SORT output (rephrased, values changed)
      {
        q: "COUNTING-SORT with $k = 5$ runs on $A = [2, 5, 3, 0, 2, 3, 0, 3]$. The sorted output is:",
        options: ["$[0, 0, 2, 2, 3, 3, 3, 5]$", "$[0, 0, 2, 3, 3, 3, 2, 5]$", "$[5, 3, 3, 3, 2, 2, 0, 0]$", "$[0, 2, 3, 5, 0, 2, 3, 3]$"],
        answer: 0,
        explanation: "Step 1 — Given: $n = 8$ keys in range $0$ to $5$. Step 2 — Governing phases: census counts per value, prefix sums give last-slot ranks, backward placement keeps equal keys stable. Step 3 — Census: two $0$s, two $2$s, three $3$s, one $5$, zeros elsewhere; ranks lay them as $[0, 0, 2, 2, 3, 3, 3, 5]$. Step 4 — Sanity check: multiset matches the input exactly, length is $8$, total work $\\Theta(n + k) = \\Theta(13)$ beats any comparison method here. Step 5 — Distractor analysis: the second option misplaces one $2$, the third reverses the order, and the fourth echoes the input unsorted. Step 6 — Conclude: $[0, 0, 2, 2, 3, 3, 3, 5]$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 8.3
  {
    sectionId: "clrs-ch8-s3",
    readingTime: 6,
    intro: "Radix sort is the card-sorter algorithm: sort a column of multi-digit numbers by one digit at a time, least significant first, and let earlier passes survive inside the ties of later ones. Its engine is a stable sort per digit — usually counting sort — and its analysis shows digit-by-digit passes cost $\\Theta(d(n + k))$, linear whenever the number of digits is constant and keys come from a small enough alphabet.",
    objectives: [
      "Execute RADIX-SORT and prove its correctness by induction on digit positions",
      "Explain precisely why the per-digit sort must be stable",
      "Analyze $\\Theta(d(n+k))$ and derive the optimal radix $r = \\lg n$ for $b$-bit keys",
    ],
    concepts: [
      {
        term: "LSD radix sort",
        kind: "method",
        statement: "**`RADIX-SORT(A, d)`**: for $i = 1$ to $d$, stably sort $A$ on digit $i$ (digit 1 = least significant). With counting sort as the per-digit engine over digit alphabet $0..k-1$, each pass costs $\\Theta(n + k)$.",
        detail: "This is least-significant-digit radix sort, the punch-card heritage: physical sorters dropped cards into one of $k$ hoppers per pass, and the operator collected the hops without shuffling within each — stability by construction.",
      },
      {
        term: "Correctness: stability carries low digits upward",
        kind: "theorem",
        statement: "If the per-digit sort is stable, then after pass $i$ the array is sorted on its $i$ least significant digits. By induction: pass $i$ orders by digit $i$, and within equal digit-$i$ groups the stable sort preserves the order on the lower $i-1$ digits — which is exactly the correct order for those ties.",
        detail: "Two keys agreeing on digits $1..i$ compare exactly as their lower digits did — and those were fixed by the earlier passes. An unstable pass would scramble equal-digit groups, and digits $< i$ could never re-enter the comparison: the sort is then simply wrong.",
      },
      {
        term: "The analysis",
        kind: "law",
        statement: "Radix sort on $n$ keys with $d$ digits over alphabet size $k$ runs in $\\Theta(d(n + k))$ with counting sort per pass. If $d$ is constant and $k = O(n)$, the total is $\\Theta(n)$ — linear.",
        detail: "Example: 32-bit words split into 8-bit bytes give $d = 4$ passes, $k = 256$: four linear sweeps regardless of $n$. For $b$-bit numbers with radix $r$ bits per digit, $d = \\lceil b/r \\rceil$ and the cost is $\\Theta\\left(\\frac{b}{r}(n + 2^r)\\right)$.",
      },
      {
        term: "Choosing the radix",
        kind: "insight",
        statement: "For $b$-bit keys, the cost $\\Theta\\big(\\tfrac{b}{r}(n + 2^r)\\big)$ is minimized near $r = \\lg n$, giving $\\Theta(bn / \\lg n)$ — each pass then costs $\\Theta(n)$ and there are $b/\\lg n$ passes. Radix sort beats comparison sorting when $b = O(\\lg n)$, i.e. when keys are $O(\\lg n)$-bit numbers.",
        detail: "Fewer digits means a bigger alphabet; more digits means more passes. At $r = \\lg n$ both terms balance. With $b = O(\\lg n)$ the total is $\\Theta(n)$, matching counting sort — but on full multi-word keys; with larger $b$ radix sort slowly loses ground to $n \\lg n$ comparison sorts.",
      },
      {
        term: "MSD versus LSD order",
        kind: "insight",
        statement: "LSD radix sort (least significant digit first) works with one stable pass per digit and no recursion. MSD-first needs to recurse into each bucket after the first pass, because higher digits partition the keys and lower digits must be sorted within each partition independently.",
        detail: "CLRS chooses LSD because stability does the recursion implicitly: after sorting by digit $i$, ties retain the order established by digits $1..i-1$. MSD is preferred only when early digits already discriminate (e.g. string dictionaries with short shared prefixes).",
      },
    ],
    figures: [
      {
        caption: "Three passes of radix sort on $\\langle 329, 457, 657, 839, 436, 720, 355 \\rangle$, each pass a stable counting sort on the bold digit, least significant first. Ties are where stability earns its keep: in pass 2, both 720 and 329 have tens digit 2, so the pass must keep 720 ahead of 329 — the earlier ones pass (0 before 9) did that work, and the hundreds pass (3 < 7) finishes the job. After pass 3 the array is sorted: $\\langle 329, 355, 436, 457, 657, 720, 839 \\rangle$.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 720 350" width="100%" role="img" aria-label="Four rows of seven three-digit numbers: the input and the array after each of three radix-sort passes, active digit highlighted"><text x="30" y="49" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">input</text><text x="30" y="134" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">pass 1</text><text x="30" y="219" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">pass 2</text><text x="30" y="304" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">pass 3</text><g stroke="currentColor" stroke-width="1.5"><rect x="110" y="25" width="76" height="38"/><rect x="186" y="25" width="76" height="38"/><rect x="262" y="25" width="76" height="38"/><rect x="338" y="25" width="76" height="38"/><rect x="414" y="25" width="76" height="38"/><rect x="490" y="25" width="76" height="38"/><rect x="566" y="25" width="76" height="38"/></g><g font-family="ui-monospace, monospace" font-size="15" fill="currentColor" text-anchor="middle"><text x="148" y="49">329</text><text x="224" y="49">457</text><text x="300" y="49">657</text><text x="376" y="49">839</text><text x="452" y="49">436</text><text x="528" y="49">720</text><text x="604" y="49">355</text></g><line x1="200" y1="66" x2="200" y2="104" stroke="currentColor" stroke-width="1.5"/><polygon points="200,108 195.5,99 204.5,99" fill="currentColor"/><text x="215" y="92" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">stable counting sort on ones digit</text><g stroke="currentColor" stroke-width="1.5"><rect x="110" y="110" width="76" height="38"/><rect x="186" y="110" width="76" height="38"/><rect x="262" y="110" width="76" height="38"/><rect x="338" y="110" width="76" height="38"/><rect x="414" y="110" width="76" height="38"/><rect x="490" y="110" width="76" height="38"/><rect x="566" y="110" width="76" height="38"/></g><g font-family="ui-monospace, monospace" font-size="15" fill="currentColor" text-anchor="middle"><text x="148" y="134">72<tspan fill="#f59e0b" font-weight="bold">0</tspan></text><text x="224" y="134">35<tspan fill="#f59e0b" font-weight="bold">5</tspan></text><text x="300" y="134">43<tspan fill="#f59e0b" font-weight="bold">6</tspan></text><text x="376" y="134">45<tspan fill="#f59e0b" font-weight="bold">7</tspan></text><text x="452" y="134">65<tspan fill="#f59e0b" font-weight="bold">7</tspan></text><text x="528" y="134">32<tspan fill="#f59e0b" font-weight="bold">9</tspan></text><text x="604" y="134">83<tspan fill="#f59e0b" font-weight="bold">9</tspan></text></g><line x1="200" y1="151" x2="200" y2="189" stroke="currentColor" stroke-width="1.5"/><polygon points="200,193 195.5,184 204.5,184" fill="currentColor"/><text x="215" y="178" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">stable counting sort on tens digit</text><g stroke="currentColor" stroke-width="1.5"><rect x="110" y="195" width="76" height="38"/><rect x="186" y="195" width="76" height="38"/><rect x="262" y="195" width="76" height="38"/><rect x="338" y="195" width="76" height="38"/><rect x="414" y="195" width="76" height="38"/><rect x="490" y="195" width="76" height="38"/><rect x="566" y="195" width="76" height="38"/></g><g font-family="ui-monospace, monospace" font-size="15" fill="currentColor" text-anchor="middle"><text x="148" y="219">7<tspan fill="#f59e0b" font-weight="bold">2</tspan>0</text><text x="224" y="219">3<tspan fill="#f59e0b" font-weight="bold">2</tspan>9</text><text x="300" y="219">4<tspan fill="#f59e0b" font-weight="bold">3</tspan>6</text><text x="376" y="219">8<tspan fill="#f59e0b" font-weight="bold">3</tspan>9</text><text x="452" y="219">3<tspan fill="#f59e0b" font-weight="bold">5</tspan>5</text><text x="528" y="219">4<tspan fill="#f59e0b" font-weight="bold">5</tspan>7</text><text x="604" y="219">6<tspan fill="#f59e0b" font-weight="bold">5</tspan>7</text></g><line x1="200" y1="236" x2="200" y2="274" stroke="currentColor" stroke-width="1.5"/><polygon points="200,278 195.5,269 204.5,269" fill="currentColor"/><text x="215" y="264" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">stable counting sort on hundreds digit</text><g stroke="currentColor" stroke-width="1.5"><rect x="110" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/><rect x="186" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/><rect x="262" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/><rect x="338" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/><rect x="414" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/><rect x="490" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/><rect x="566" y="280" width="76" height="38" fill="currentColor" fill-opacity="0.06"/></g><g font-family="ui-monospace, monospace" font-size="15" fill="currentColor" text-anchor="middle"><text x="148" y="304"><tspan fill="#f59e0b" font-weight="bold">3</tspan>29</text><text x="224" y="304"><tspan fill="#f59e0b" font-weight="bold">3</tspan>55</text><text x="300" y="304"><tspan fill="#f59e0b" font-weight="bold">4</tspan>36</text><text x="376" y="304"><tspan fill="#f59e0b" font-weight="bold">4</tspan>57</text><text x="452" y="304"><tspan fill="#f59e0b" font-weight="bold">6</tspan>57</text><text x="528" y="304"><tspan fill="#f59e0b" font-weight="bold">7</tspan>20</text><text x="604" y="304"><tspan fill="#f59e0b" font-weight="bold">8</tspan>39</text></g><text x="656" y="304" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">sorted ✓</text></svg>`,
      },
    ],
    examples: [
      {
        title: "Stability on trial: what one unstable pass destroys",
        problem: "Suppose the tens-digit pass of radix sort were NOT stable. Exhibit a concrete failure on 3-digit keys 328 and 321.",
        steps: [
          { label: "Ones pass", text: "Ones digits: $8$ vs $1$, so the stable pass writes 321 before 328 — correct relative order of the tie-to-be." },
          { label: "Tens pass (stable)", text: "Both have tens digit 2: stability keeps 321 ahead of 328. Hundreds pass: both have 3: stability keeps 321 ahead of 328 — final order $\\langle 321, 328 \\rangle$, correct." },
          { label: "Tens pass (unstable)", text: "An unstable sort may emit 328 before 321. The hundreds pass sees equal digit 3 again and (even stably) keeps 328 first — final order $\\langle 328, 321 \\rangle$, wrong." },
          { label: "Moral", text: "Once the leading digits tie, no later pass ever looks at the ones digit again. The low-digit information survives only inside the equal-key groups of later passes — stability is the conservation law." },
        ],
        result: "Radix sort is correct if and only if each digit pass is stable; correctness degrades silently otherwise, which is why CLRS demands stability rather than mere sorting power per pass.",
      },
      {
        title: "Sorting three-digit numbers by hand",
        problem: "LSD-sort $\\langle 329, 457, 657, 839, 436, 720, 355 \\rangle$ and show why each pass must be stable.",
        steps: [
          { label: "Ones", text: "By ones digit: $720, 355, 329, 457, 657, 436, 839$ (digits $0,5,9,7,7,6,9$; ties $457,657$ keep input order by stability)." },
          { label: "Tens", text: "By tens digit stably: $720, 329, 436, 839, 355, 457, 657$ (tens $2,2,3,3,5,5,5$; the $5$s emerge as $355,457,657$ because the ones pass ordered them)." },
          { label: "Hundreds", text: "By hundreds digit stably: $329, 355, 436, 457, 657, 720, 839$: sorted. Each pass is COUNTING-SORT on $k = 10$ digits: $\\Theta(7+10)$ per pass." },
          { label: "Break it", text: "Repeat the tens pass unstably (swap $355$ and $457$): the hundreds pass then yields $\\langle 329, 457, 436, 355, 657, 720, 839 \\rangle$, unsorted: one unstable pass destroys the lower-digit work." },
        ],
        result: "Sorted in $3$ stable passes, $\\Theta(d(n+k)) = \\Theta(3 \\cdot 17)$; stability is what carries low-digit order upward through higher-digit ties.",
      },
    ],
    keyTakeaways: [
      "LSD radix sort runs $d$ stable passes on digits least significant first; induction shows the array is sorted on its low $i$ digits after pass $i$.",
      "Stability is not an optimization but the correctness mechanism: within a tie on the current digit, the earlier passes' order is the final answer.",
      "Cost is $\\Theta(d(n+k))$; with radix $r = \\lg n$ bits per digit, $b$-bit keys sort in $\\Theta(bn/\\lg n)$ — linear whenever $b = O(\\lg n)$.",
    ],
    quiz: [
      {
        q: "Radix sort processes digits least significant first and requires the per-digit sort to be:",
        options: ["in-place", "stable", "recursive", "comparison-based"],
        answer: 1,
        explanation: "Each pass may only reorder equal-digit groups' contents blindly; stability is what preserves the low-digit order those groups already carry — the induction step of the correctness proof.",
      },
      {
        q: "Two 3-digit numbers 328 and 321 tie on the hundreds and tens digits. If every pass is stable, which ends up first and why?",
        options: [
          "321, because the ones-digit pass ordered it ahead of 328 and stability carried that order through both later ties",
          "328, because unstable passes are needed for larger keys",
          "Either — radix sort may output equal-prefix keys in any order",
          "321, because the ones digits are compared again in the hundreds pass",
        ],
        answer: 0,
        explanation: "The ones pass puts 321 (digit 1) before 328 (digit 8); the tens and hundreds passes both see ties and, being stable, preserve that order. No pass ever recompares the ones digits.",
      },
      {
        q: "RADIX-SORT on $n$ keys with $d$ digits over alphabet $0..k$, using counting sort per pass, runs in:",
        options: ["$\\Theta(d(n + k))$", "$\\Theta(n \\lg k)$", "$\\Theta(d \\, n \\lg n)$", "$\\Theta(n^d)$"],
        answer: 0,
        explanation: "Each of the d passes is a counting sort costing Θ(n + k); the passes are sequential, so the costs add.",
      },
      {
        q: "Sorting $n$ $b$-bit numbers with $r$-bit digits costs $\\Theta((b/r)(n + 2^r))$. The choice of $r$ that minimizes this is:",
        options: ["$r = 1$ — one bit at a time is always best", "$r = b$ — a single pass", "$r = \\lg n$", "$r = b/\\lg n$"],
        answer: 2,
        explanation: "At r = lg n each pass costs Θ(n + n) = Θ(n) and there are b/lg n passes, totaling Θ(bn/lg n). Smaller r wastes passes; larger r makes each pass superlinear in n.",
      },
    ],
  },

  // ---------------------------------------------------------------- 8.4
  {
    sectionId: "clrs-ch8-s4",
    readingTime: 6,
    intro: "Bucket sort assumes its input is $n$ independent draws from a uniform distribution on $[0, 1)$ and exploits that belief: scatter the keys into $n$ buckets by their leading bits, sort each tiny bucket by insertion sort, and concatenate. The expectation analysis is a jewel of indicator-random-variable technique: $E[n_i^2] = 2 - 1/n$ per bucket, so the total expected work is $\\Theta(n)$.",
    objectives: [
      "Run BUCKET-SORT and verify a full trace on ten uniform inputs",
      "Derive $E[n_i^2] = 2 - 1/n$ with indicator variables and conclude $E[\\sum_i n_i^2] = 2n - 1$",
      "State exactly what the uniformity assumption buys and what happens without it",
    ],
    concepts: [
      {
        term: "The premise: uniform inputs",
        kind: "definition",
        statement: "BUCKET-SORT assumes its $n$ input numbers are **independently drawn from a uniform distribution on $[0, 1)$**. Under that assumption each key lands in any given bucket with probability $1/n$.",
        detail: "Correctness needs no assumption at all — any input comes out sorted. The distribution is purely a performance hypothesis, in the same spirit as the average-case analysis of quicksort, but stronger and more explicit.",
      },
      {
        term: "The BUCKET-SORT procedure",
        kind: "method",
        statement: "Create $n$ empty buckets $B[0..n-1]$; for $i = 1$ to $n$ insert $A[i]$ into bucket $B[\\lfloor n \\cdot A[i] \\rfloor]$; sort each bucket by **insertion sort**; concatenate the bucket lists in order.",
        detail: "Scatter, sort, gather. The bucket index uses the value directly as a (scaled) array index — the same escape from the comparison model as counting sort. Buckets are typically linked lists, so concatenation is pointer splicing.",
      },
      {
        term: "The $E[n_i^2] = 2 - 1/n$ computation",
        kind: "theorem",
        statement: "Let $n_i$ be the number of keys in bucket $i$ and $X_{ij}$ the indicator that key $j$ lands in bucket $i$. Then $n_i = \\sum_j X_{ij}$ and $$E[n_i^2] = \\sum_j E[X_{ij}^2] + 2\\sum_{j<k} E[X_{ij} X_{ik}] = n \\cdot \\tfrac{1}{n} + n(n-1) \\cdot \\tfrac{1}{n^2} = 2 - \\tfrac{1}{n}.$$",
        detail: "Independence makes $E[X_{ij}X_{ik}] = 1/n^2$ for $j \\ne k$; indicators square to themselves. Summing over all $n$ buckets: $E\\big[\\sum_i n_i^2\\big] = n(2 - 1/n) = 2n - 1$.",
      },
      {
        term: "Expected linear time — and the caveat",
        kind: "insight",
        statement: "Insertion sort on bucket $i$ costs $O(n_i^2)$, so the expected sorting cost is $O(2n - 1) = O(n)$; adding the $\\Theta(n)$ scatter and gather gives **expected $\\Theta(n)$**. But the bound is an expectation, not a guarantee: adversarial input — all keys in one bucket — degenerates to insertion sort on $n$ elements, $\\Theta(n^2)$.",
        detail: "The same mathematics shows the load is concentrated: the variance of $\\sum n_i^2$ is small, so the running time is not merely linear on average but reliably so for genuinely uniform data. The hypothesis is the algorithm: heap a non-uniform input (say, all keys near 0.5) onto bucket sort and it collapses.",
      },
      {
        term: "Insertion sort inside buckets",
        kind: "method",
        statement: "BUCKET-SORT sorts each bucket with INSERTION-SORT, costing $\\Theta(n_i^2)$ on a bucket of $n_i$ keys. The total $\\sum_i O(n_i^2)$ is $O(n)$ in expectation exactly when $E[n_i^2] = 2 - 1/n$, which needs the uniform-input hypothesis.",
        detail: "Any $O(n_i \\lg n_i)$ sort works inside buckets, but insertion sort's tiny constants win because buckets hold $0$, $1$ or $2$ keys with high probability under uniformity.",
      },
    ],
    examples: [
      {
        title: "A complete bucket-sort trace (and the expectation checked)",
        problem: "Sort $A = \\langle 0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68 \\rangle$ with $n = 10$ buckets.",
        steps: [
          { label: "Scatter", text: "Bucket indices $\\lfloor 10 \\cdot A[i] \\rfloor$: $7, 1, 3, 2, 7, 9, 2, 1, 2, 6$. So $B[1] = \\{0.17, 0.12\\}$, $B[2] = \\{0.26, 0.21, 0.23\\}$, $B[3] = \\{0.39\\}$, $B[6] = \\{0.68\\}$, $B[7] = \\{0.78, 0.72\\}$, $B[9] = \\{0.94\\}$; buckets 0, 4, 5, 8 stay empty." },
          { label: "Sort buckets", text: "Insertion sort fixes the size-2 and size-3 buckets: $B[1] = \\{0.12, 0.17\\}$, $B[2] = \\{0.21, 0.23, 0.26\\}$, $B[7] = \\{0.72, 0.78\\}$; singletons are trivially sorted." },
          { label: "Gather", text: "Concatenate $B[0]$ through $B[9]$: $\\langle 0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94 \\rangle$." },
          { label: "Check against the theory", text: "Bucket sizes $\\langle 0, 2, 3, 1, 0, 0, 1, 2, 0, 1 \\rangle$ give $\\sum n_i^2 = 4 + 9 + 1 + 1 + 4 + 1 = 20$ — one unit above the expectation $2n - 1 = 19$." },
        ],
        result: "Ten keys sorted in expected-linear fashion; the realized squared-load statistic (20) lands, as it should, essentially on its mean (19).",
      },
      {
        title: "Two buckets overflow",
        problem: "Run BUCKET-SORT with $n = 10$ on ten keys all in $[0, 0.2)$ and see where linearity breaks.",
        steps: [
          { label: "Scatter", text: "Keys $0.01, 0.03, \\ldots$ all hash to buckets $0$ and $1$: $n_0 = 5$, $n_1 = 5$, buckets $2..9$ empty. Uniformity fails: $E[n_i^2]$ no longer $2-1/n$." },
          { label: "Sort", text: "Insertion sort on $5+5$ keys costs $\\Theta(25+25) = \\Theta(50)$: quadratic in the bucket sizes, linear in $n^2/2$ overall." },
          { label: "Total", text: "$\\sum_i n_i^2 = 50$ versus the uniform expectation $2n-1 = 19$: nearly $3\\times$ the work, and with all $10$ keys in one bucket it would be $100$." },
          { label: "Lesson", text: "Bucket sort's $\\Theta(n)$ is an average over uniform inputs, not a worst case: adversarial clustering restores $\\Theta(n^2)$ through the $n_i^2$ inside-bucket term." },
        ],
        result: "Clustered input costs $\\Theta(50)$ vs $\\Theta(19)$ expected uniform: without uniformity the bucket squares stop averaging to a constant.",
      },
    ],
    keyTakeaways: [
      "Bucket sort scatters keys by value into $n$ buckets, insertion-sorts each, concatenates — correct on any input, fast only on uniform ones.",
      "Indicator variables give $E[n_i^2] = 2 - 1/n$, hence expected total insertion cost $E[\\sum_i n_i^2] = 2n - 1 = \\Theta(n)$ — the crux of the analysis.",
      "Uniformity is a performance contract, not a correctness one: clumped input piles into single buckets and degrades to $\\Theta(n^2)$ insertion sort.",
    ],
    quiz: [
      {
        q: "Bucket sort's expected $\\Theta(n)$ running time rests on which assumption?",
        options: [
          "the keys are integers in a range $k = O(n)$",
          "the input is independently drawn from a uniform distribution over $[0, 1)$",
          "the buckets are kept as balanced search trees",
          "the number of buckets equals the number of distinct keys",
        ],
        answer: 1,
        explanation: "Uniformity makes each key equally likely to land in each of the n buckets, which is what keeps the expected bucket load at 1 and the expected squared load at 2 − 1/n.",
      },
      {
        q: "In the computation $E[n_i^2] = 2 - 1/n$, where does the term $n(n-1) \\cdot 1/n^2 = (n-1)/n$ come from?",
        options: [
          "the $\\sum_j E[X_{ij}^2]$ diagonal terms",
          "the cross terms $2\\sum_{j<k} E[X_{ij} X_{ik}]$ — independent pairs of keys sharing a bucket",
          "the two passes over the input array",
          "the variance of a single uniform draw",
        ],
        answer: 1,
        explanation: "For $j \ne k$, independence gives $E[X_{ij} \cdot X_{ik}] = \Pr[\text{both land in } i] = 1/n^2$; there are $n(n-1)/2$ such pairs and each contributes twice (both orderings), giving $(n-1)/n$.",
      },
      {
        q: "If all $n$ inputs happen to land in one bucket, bucket sort's total cost becomes:",
        options: [
          "$\\Theta(1)$ — one bucket is cheap",
          "$\\Theta(n)$ — the analysis was worst-case all along",
          "$\\Theta(n^2)$ — insertion sort runs on the whole input",
          "$\\Theta(n \\lg n)$ — it falls back to merge sort",
        ],
        answer: 2,
        explanation: "The gather and scatter stay Θ(n), but the single nonempty bucket holds all n keys and insertion sort on it costs Θ(n²) — the price of a violated assumption.",
      },
      {
        q: "The expected total insertion-sort work across all buckets is proportional to:",
        options: [
          "$\\sum_i E[n_i]^2 = 1$",
          "$\\sum_i E[n_i^2] = 2n - 1$",
          "$\\sum_i n_i \\lg n_i$",
          "$n \\cdot E[n_i] = n$",
        ],
        answer: 1,
        explanation: "Insertion sort on a bucket of size $n_i$ costs $O(n_i^2)$, and expectation is linear, so the total is $O(\sum_i E[n_i^2]) = O(2n - 1)$. Note $\sum_i E[n_i]^2$ would be wrong — the squared load, not the square of the mean, is what insertion sort pays.",
      },
    ],
  },
]
