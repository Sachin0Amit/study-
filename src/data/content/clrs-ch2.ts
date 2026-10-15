import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition. Chapter 2: Getting Started.
// Sections 2.1 – 2.3 (insertion sort, RAM analysis, merge sort).
// Figures F2/F3 generated & verified in /home/z/tmp-14a.
// ============================================================================

export const clrsCh2Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: "clrs-ch2-s1",
    readingTime: 6,
    intro: "Insertion sort is the book's first algorithm — familiar from sorting a hand of playing cards — and it earns its place by being simple enough to prove correct. The proof technique is the loop invariant, a statement about the algorithm's state that holds before and after every iteration; it is CLRS's model for proving *any* imperative algorithm correct.",
    objectives: [
      "Execute INSERTION-SORT by hand on a small array, tracking the key and the shifts",
      "State the loop invariant of insertion sort and argue initialization, maintenance and termination",
      "Recognize the pseudocode conventions CLRS uses throughout the book",
    ],
    concepts: [
      {
        term: "INSERTION-SORT",
        kind: "method",
        statement: "Sort in place, one element at a time, like sorting playing cards in your hand:\n```\nINSERTION-SORT(A)\n1  for j = 2 to A.length\n2      key = A[j]\n3      // Insert A[j] into the sorted sequence A[1..j−1].\n4      i = j − 1\n5      while i > 0 and A[i] > key\n6          A[i+1] = A[i]\n7          i = i − 1\n8      A[i+1] = key\n```\nAt the start of each iteration of the `for` loop, the subarray `A[1..j−1]` is sorted; the element `A[j]` is the **key** being inserted.",
        detail: "Conventions: indentation encodes block structure; `A.length` is the number of elements; array indices run from 1; variables are local to the procedure; the `while` test combines with `and` and short-circuits, so `A[i]` is never read after `i` reaches 0.",
      },
      {
        term: "Loop invariant",
        kind: "definition",
        statement: "A **loop invariant** is a property of the program state that holds *before and after each iteration* of a loop. For insertion sort: **at the start of each iteration of the `for` loop, the subarray $A[1..j-1]$ consists of the elements originally in $A[1..j-1]$, but in sorted order.**",
        detail: "The name is deliberate: the loop leaves the property *invariant* — unchanged — even though it changes everything else about the array prefix (its order). The invariant states both halves: sortedness AND preservation of the original multiset; omit either and the proof collapses.",
      },
      {
        term: "The three properties of a loop invariant",
        kind: "method",
        statement: "A loop invariant is proved like mathematical induction, with three properties: **Initialization** — it is true before the first iteration; **Maintenance** — if it is true before an iteration, it remains true before the next; **Termination** — when the loop stops, the invariant plus the reason for stopping yields a useful property of the output.",
        detail: "Initialization here is trivial: for $j=2$, `A[1..1]` is a single element, trivially sorted and trivially the original. Maintenance is the while-loop shift. Termination is the payoff: the loop stops with $j = n+1$, so the invariant reads “$A[1..n]$ is the original array, sorted” — which is exactly the sorting problem's specification.",
      },
      {
        term: "Why termination completes a correctness proof",
        kind: "insight",
        statement: "Induction over loop iterations proves the invariant up to the *last* iteration; the **termination step** converts that partial correctness into an algorithm-correctness proof, because it identifies a loop variable that eventually forces the exit condition (here $j$ exceeds `A.length`) and substitutes that fact back into the invariant.",
        detail: "The pattern generalizes: any `for`/`while` loop whose bound variable marches monotonically toward a threshold terminates; the invariant at the threshold is the theorem you wanted. CLRS uses exactly this skeleton for merge sort (Exercise 2.1-4 style arguments) and throughout Part I.",
      },
      {
        term: "Pseudocode conventions",
        kind: "notation",
        statement: "Indentation shows block structure; $A.\\mathrm{length}$ is the array size; indices start at $1$; $\\mathrm{and}$ and $\\mathrm{or}$ short-circuit; variables are local unless stated; $//$ marks comments and $\\infty$ marks sentinels in later chapters.",
        detail: "The same conventions govern every procedure in the book, so reading one algorithm carefully pays off everywhere: a `for j = 2 to A.length` loop always runs $n-1$ times and a `while` test that fails still counts as one execution of the test.",
      },
    ],
    figures: [
      {
        caption: "INSERTION-SORT on $\\langle 5, 2, 4, 6, 1, 3 \\rangle$. Each row is the array at the *top* of iteration $j$; the shaded prefix $A[1..j-1]$ is the loop invariant made visible, and the amber cell is the key $A[j]$. In the $j=5$ row the key 1 must jump over all four larger keys; row $j+1$ then shows the state *after* that insertion. Total: 9 shifts — one per inversion of the input.",
        svg: '<svg viewBox="0 0 720 300" width="100%" role="img" aria-label="Insertion sort trace on 5 2 4 6 1 3: six rows, shaded sorted prefix, amber key, nine shifts"><text x="360" y="22" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">INSERTION-SORT ⟨5, 2, 4, 6, 1, 3⟩ — 9 shifts total</text><text x="130" y="62" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j</text><text x="206" y="62" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">A[1]</text><text x="252" y="62" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">A[2]</text><text x="298" y="62" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">A[3]</text><text x="344" y="62" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">A[4]</text><text x="390" y="62" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">A[5]</text><text x="436" y="62" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">A[6]</text><text x="130" y="95" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j=1</text><rect x="190" y="74" width="40" height="26" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><text x="210" y="92" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><rect x="236" y="74" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="256" y="92" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><rect x="282" y="74" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="302" y="92" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><rect x="328" y="74" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="348" y="92" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><rect x="374" y="74" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="394" y="92" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><rect x="420" y="74" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="440" y="92" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="130" y="127" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j=2</text><rect x="190" y="106" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="210" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><rect x="236" y="106" width="40" height="26" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><text x="256" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><rect x="282" y="106" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="302" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><rect x="328" y="106" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="348" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><rect x="374" y="106" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="394" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><rect x="420" y="106" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="440" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="130" y="159" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j=3</text><rect x="190" y="138" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="210" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><rect x="236" y="138" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="256" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><rect x="282" y="138" width="40" height="26" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><text x="302" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><rect x="328" y="138" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="348" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><rect x="374" y="138" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="394" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><rect x="420" y="138" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="440" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="130" y="191" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j=4</text><rect x="190" y="170" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="210" y="188" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><rect x="236" y="170" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="256" y="188" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><rect x="282" y="170" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="302" y="188" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><rect x="328" y="170" width="40" height="26" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><text x="348" y="188" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><rect x="374" y="170" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="394" y="188" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><rect x="420" y="170" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="440" y="188" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="130" y="223" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j=5</text><rect x="190" y="202" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="210" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><rect x="236" y="202" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="256" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><rect x="282" y="202" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="302" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><rect x="328" y="202" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="348" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><rect x="374" y="202" width="40" height="26" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><text x="394" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><rect x="420" y="202" width="40" height="26" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="440" y="220" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><text x="130" y="255" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">j=6</text><rect x="190" y="234" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="210" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">1</text><rect x="236" y="234" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="256" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><rect x="282" y="234" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="302" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">3</text><rect x="328" y="234" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="348" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><rect x="374" y="234" width="40" height="26" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.2"/><text x="394" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">5</text><rect x="420" y="234" width="40" height="26" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/><text x="440" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><text x="190" y="288" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">shaded = sorted prefix A[1..j−1] · amber = key A[j]</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Tracing insertion sort, counting the shifts",
        problem: "Run INSERTION-SORT on $A = \\langle 5, 2, 4, 6, 1, 3 \\rangle$ and count how many elements each key jumps over.",
        steps: [
          { label: "j = 2", text: "key = 2 shifts 5 right once: $\\langle 2, 5, 4, 6, 1, 3 \\rangle$ — 1 shift." },
          { label: "j = 3", text: "key = 4 shifts 5 right once: $\\langle 2, 4, 5, 6, 1, 3 \\rangle$ — 1 shift." },
          { label: "j = 4", text: "key = 6 is already larger than 5, so the while test fails immediately: 0 shifts — the sorted-prefix invariant did the work for free." },
          { label: "j = 5", text: "key = 1 shifts 6, 5, 4, 2 right: $\\langle 1, 2, 4, 5, 6, 3 \\rangle$ — 4 shifts." },
          { label: "j = 6", text: "key = 3 shifts 6, 5, 4 right: $\\langle 1, 2, 3, 4, 5, 6 \\rangle$ — 3 shifts. Done." },
        ],
        result: "Sorted in $1+1+0+4+3 = 9$ shifts — exactly the number of *inverted pairs* $(i, j)$ with $i < j$ and $A[i] > A[j]$ in the input: $(5,2), (5,4), (5,1), (5,3), (2,1), (4,1), (6,1), (6,3), (4,3)$.",
      },
      {
        title: "The invariant, verified at the endpoint",
        problem: "Show formally how initialization, maintenance and termination combine to prove that INSERTION-SORT correctly sorts $\\langle 5, 2, 4, 6, 1, 3 \\rangle$.",
        steps: [
          { label: "Initialization", text: "Before iteration $j = 2$, the prefix is $A[1..1] = \\langle 5 \\rangle$: a one-element prefix is sorted and contains exactly the original element." },
          { label: "Maintenance", text: "Assume $A[1..j-1]$ is sorted and consists of the original first $j-1$ elements. The while loop shifts every element larger than $key = A[j]$ one slot right; since the prefix was sorted, the shifted block is exactly the tail of elements greater than $key$, and slot $A[i+1]$ lands correctly between the smaller prefix and the shifted tail. After `A[i+1] = key`, the prefix $A[1..j]$ is sorted and still a permutation of the original $j$ elements." },
          { label: "Termination", text: "The `for` loop stops when $j = n + 1 = 7$. Substituting $j = 7$ into the invariant: $A[1..6]$ consists of the original six elements in sorted order — the output $\\langle 1, 2, 3, 4, 5, 6 \\rangle$ satisfies the sorting problem's specification." },
        ],
        result: "The three properties chain into a complete correctness proof — the template CLRS reuses for every algorithm it presents.",
      },
    ],
    keyTakeaways: [
      "INSERTION-SORT builds a sorted prefix one key at a time; the number of shifts equals the number of inversions in the input.",
      "The loop invariant — $A[1..j-1]$ is sorted and contains exactly the original elements — is proved by initialization, maintenance and termination, exactly like induction with an exit clause.",
      "At termination $j = n+1$, so the invariant reads: the whole array is a sorted permutation of the input — which is the definition of correctness for sorting.",
    ],
    quiz: [
      {
        q: "The loop invariant of INSERTION-SORT states that at the start of each iteration of the `for` loop:",
        options: [
          "A[1..j] is sorted and contains the smallest j elements of the input",
          "A[1..j−1] consists of the elements originally in A[1..j−1], but in sorted order",
          "A[j] is the largest of the first j elements",
          "A[1..j−1] contains the j−1 smallest elements of the whole array",
        ],
        answer: 1,
        explanation: "The invariant makes both a sortedness claim AND a 'same elements' claim about the *original* prefix — not about the smallest elements globally, which the algorithm cannot know yet.",
      },
      {
        q: "Which of the three properties of a loop invariant has no direct counterpart in ordinary mathematical induction?",
        options: ["initialization", "maintenance", "termination", "none — all three are standard induction"],
        answer: 2,
        explanation: "Initialization ≈ base case and maintenance ≈ inductive step; termination is the extra ingredient that computers add to mathematics — it uses the loop's stopping condition to land the invariant on the final state.",
      },
      {
        q: "In the trace on $\\langle 5,2,4,6,1,3 \\rangle$, the total number of element shifts performed is:",
        options: ["6", "9", "12", "15"],
        answer: 1,
        explanation: "Per-key shifts are $1 + 1 + 0 + 4 + 3 = 9$, matching the input's inversion count — insertion sort's running time is governed by how disordered the input is.",
      },
      {
        q: "Termination of INSERTION-SORT's outer loop occurs when:",
        options: [
          "the array is detected to be sorted",
          "$j$ exceeds A.length, and the invariant then covers A[1..n]",
          "the key has shifted past position 1",
          "the while loop fails its test",
        ],
        answer: 1,
        explanation: "The `for` header runs $j$ from 2 to A.length; the iteration after the last has $j = n+1$. Substituting into the invariant yields the full-array correctness statement — no sortedness detection is needed.",
      },
    ],
  },

  // ---------------------------------------------------------------- 2.2
  {
    sectionId: "clrs-ch2-s2",
    readingTime: 7,
    intro: "To compare algorithms you must be able to *measure* them, and measuring requires a cost model. CLRS adopts the random-access machine (RAM) — one processor, constant-time primitive operations, no memory-hierarchy surprises — then analyzes insertion sort honestly: line by line, best case and worst. The section ends with the two simplifications that define the whole subject: keep only the leading term, and ignore its coefficient.",
    objectives: [
      "State the RAM model and the assumptions it makes about primitive operations",
      "Derive the worst-case running time of insertion sort and its best-case counterpart",
      "Justify focusing on the worst case, and reduce a running time to its order of growth",
    ],
    concepts: [
      {
        term: "The RAM model of computation",
        kind: "definition",
        statement: "In the **random-access machine (RAM)** model, instructions execute **one after another, with no concurrent operations**; each instruction takes a constant amount of time and each — arithmetic (`+ − × ÷ mod floor ceiling`), data movement (`load store copy`), and control (`if then else for while goto subroutine call return`) — is charged the same constant. Memory is unlimited, and each access takes unit time regardless of address.",
        detail: "It deliberately ignores the memory hierarchy: no caches, no disks, no pipelining. It also assumes exact real arithmetic limited only by word size — the *word-RAM* refinement. The point is not realism but a *shared yardstick*: two algorithms compared in the model will, mostly, compare the same way on real hardware.",
      },
      {
        term: "Running time and input size",
        kind: "definition",
        statement: "The **running time** of an algorithm on a particular input is the number of primitive operations executed. The **input size** depends on the problem — the number of items for sorting, the number of bits for multiplying integers, both numbers plus edge count for graphs. For insertion sort, the natural measure is $n$, the array length, and the running time is a function of the input's *order* as well as its content.",
        detail: "The parameter $t_j$ for insertion sort: the number of times the `while` test executes for that value of $j$. It depends on the data — already-sorted input makes every $t_j = 1$; reverse-sorted input makes $t_j = j$.",
      },
      {
        term: "Worst-case and best-case analysis of insertion sort",
        kind: "theorem",
        statement: "For input size $n$: if the array is already sorted, every $t_j = 1$ and $T(n) = an + b = \\Theta(n)$; **if the array is sorted in reverse order, $t_j = j$ for all $j$ and $T(n) = an^2 + bn + c = \\Theta(n^2)$** — the running time is a quadratic in $n$ with computable constants.",
        detail: "The reverse-sorted sum is the heart of it: the inner test executes $\\sum_{j=2}^{n} j = \\frac{n(n+1)}{2} - 1$ times, and the shifts execute one fewer per term. An *average* input has roughly half the pairs inverted, giving $t_j \\approx j/2$ and again a quadratic — the average case is no better in order of growth.",
      },
      {
        term: "Order of growth",
        kind: "notation",
        statement: "Drop the lower-order terms and the coefficient of the leading term: insertion sort's worst case $an^2 + bn + c$ is recorded as **$\\Theta(n^2)$** — read 'theta of n squared'. This single term is the *order of growth*; it is what survives comparisons across machines, compilers and constant factors.",
        detail: "The book's rule for $n = 100$: the worst case is $100^2/2 - 100/2 = 4950$ inner-test executions against $99$ for sorted input — the *ratio* between cases grows like $n/2$, so for large inputs the term $n^2$ is not merely dominant, it is everything.",
      },
      {
        term: "Why worst case?",
        kind: "insight",
        statement: "CLRS focuses on the worst-case running time for three reasons: it gives a **guaranteed upper bound on time for any input**; worst cases occur with some frequency in practice (searching for an absent record is the common case, not the exception); and the 'average case' is often roughly as bad in growth — insertion sort's average is still quadratic.",
        detail: "When a true average-case bound is needed, it requires a *probabilistic analysis*: a defensible assumption about input distributions and the mathematics to compute expectations — Chapter 5's program.",
      },
    ],
    examples: [
      {
        title: "The worst-case derivation, term by term",
        problem: "Assume the reverse-sorted input so that $t_j = j$ for $j = 2, \\ldots, n$. Derive the exact count of `while`-test executions and its leading behavior.",
        steps: [
          { label: "Count the tests", text: "For each $j$, the while test runs $t_j = j$ times (the last test fails, having shifted $j-1$ elements). Total: $\\sum_{j=2}^{n} j = \\left( \\frac{n(n+1)}{2} - 1 \\right)$." },
          { label: "Count the shifts", text: "Each successful test shifts one element, so shifts total $\\sum_{j=2}^{n} (j-1) = \\frac{n(n-1)}{2}$." },
          { label: "Aggregate honestly", text: "Multiplying each line of pseudocode by its cost and its execution count and summing yields a running time of the form $an^2 + bn + c$ for explicit machine constants $a, b, c$." },
          { label: "Reduce to order of growth", text: "For $n = 1000$: $\\frac{n(n+1)}{2} - 1 = 500{,}499$ tests versus $\\frac{n^2}{2} = 500{,}000$ from the leading term alone — the leading term already carries $99.9\\%$ of the count, which is why lower-order terms are dropped." },
        ],
        result: "Worst-case running time $= an^2 + bn + c = \\Theta(n^2)$; already-sorted input instead gives $\\Theta(n)$ — insertion sort is *adaptive* to nearly sorted data, which is why real libraries keep a truncated insertion sort for short runs.",
      },
      {
        title: "Best case, and the average in between",
        problem: "Compute the best-case count for $n = 100$ and argue that a 'random' input is still quadratic.",
        steps: [
          { label: "Best case", text: "Sorted input: each $t_j = 1$ (one failing test, zero shifts), so the inner loop costs a constant per element: $\\sum_{j=2}^{100} 1 = 99$ tests total — linear." },
          { label: "Average behavior", text: "For each pair of positions, a random ordering inverts each of the $\\binom{n}{2}$ pairs with probability $1/2$, so the expected number of shifts — which equals the number of inversions — is $\\binom{n}{2}/2 = n(n-1)/8$." },
          { label: "Same order", text: "For $n = 100$: expected shifts $= 100 \\cdot 99/8 \\approx 1238$, versus $4950$ in the worst case — a factor-4 gap in the *constant*, and identical $\\Theta(n^2)$ growth." },
        ],
        result: "Best case $\\Theta(n)$, worst and expected $\\Theta(n^2)$: only the constant differs between average and worst — the growth rate is set by the inversions, and random inputs have quadratically many of them.",
      },
    ],
    keyTakeaways: [
      "The RAM model charges unit time per primitive instruction, sequentially, with unlimited flat memory — a shared yardstick, not a hardware simulator.",
      "Insertion sort: reverse-sorted input forces $\\sum_{j=2}^{n} j = n(n+1)/2 - 1$ inner tests, giving $T(n) = an^2 + bn + c = \\Theta(n^2)$; sorted input gives $\\Theta(n)$.",
      "Order of growth keeps only the leading term ($\\Theta(n^2)$ above), and worst-case analysis is preferred because it bounds every input and is often representative in growth.",
    ],
    quiz: [
      {
        q: "Which is NOT an assumption of the RAM model as used in Chapter 2?",
        options: [
          "instructions execute one at a time, with no concurrency",
          "each primitive instruction takes constant time",
          "memory accesses all take unit time, ignoring caches and disks",
          "multiplying two $n$-bit numbers costs the same as adding them",
        ],
        answer: 3,
        explanation: "The model *does* charge both a constant — the simplification — so the false statement is about what it ignores: it does not model bit-length costs (that refinement returns in Chapter 29 for numbers, via word-size caveats).",
      },
      {
        q: "On a reverse-sorted array of $n = 100$ elements, how many element shifts does INSERTION-SORT perform?",
        options: ["99", "4950", "5049", "10000"],
        answer: 1,
        explanation: "With $t_j = j$ while-tests, the shifts number $\\sum_{j=2}^{n}(j-1) = n(n-1)/2 = 4950$; the tests themselves are $\\sum_{j=2}^{n} j = 5049$. Both are quadratic — the $\\Theta(n^2)$ verdict.",
      },
      {
        q: "The best-case running time of insertion sort is:",
        options: ["$\\Theta(n^2)$ — same as worst case", "$\\Theta(n \\lg n)$", "$\\Theta(n)$, on already-sorted input", "$\\Theta(\\lg n)$"],
        answer: 2,
        explanation: "On sorted input each key fails its first while test ($t_j = 1$), so the total work is one constant-time test per element: linear. This is the adaptivity that hybrid sorts like Timsort exploit.",
      },
      {
        q: "The order of growth of insertion sort's worst case $an^2 + bn + c$ is written:",
        options: ["$\\Theta(an^2)$", "$\\Theta(n^2)$", "$O(n^2 + n)$", "$\\Theta(an^2 + bn + c)$"],
        answer: 1,
        explanation: "Both lower-order terms and the leading coefficient are dropped: the notation expresses the *shape* of growth, independent of machine constants — the machinery of Chapter 3 makes this precise.",
      },
    ],
  },

  // ---------------------------------------------------------------- 2.3
  {
    sectionId: "clrs-ch2-s3",
    readingTime: 7,
    intro: "Merge sort introduces the book's first *design paradigm*: divide and conquer. Instead of solving one big problem, split it in half, solve the halves recursively, and spend your effort on the combine step — merging two sorted piles into one. The reward for doing extra combining work is a provable $\\Theta(n \\lg n)$ bound in the worst case, the guarantee insertion sort could never give.",
    objectives: [
      "Describe the divide–conquer–combine structure of merge sort and the MERGE procedure with sentinels",
      "Trace a merge of two sorted sequences and bound its cost at $\\Theta(n)$",
      "Set up the recurrence $T(n) = 2T(n/2) + \\Theta(n)$ and read off the recursion depth",
    ],
    concepts: [
      {
        term: "Divide and conquer",
        kind: "method",
        statement: "Many useful algorithms are **recursive** in structure: to solve a problem of size $n$, they call themselves on inputs of size a fraction of $n$. The divide-and-conquer paradigm has three steps at each level: **Divide** the problem into subproblems; **Conquer** the subproblems recursively (bottoming out at tiny base cases); **Combine** the subproblem solutions into the original answer.",
        detail: "For merge sort: divide is trivial (find the midpoint, pure index arithmetic); conquer recurses on both halves; combine — the *only* real work — is the MERGE procedure. Where the work concentrates is a design signature: merge sort is combine-heavy; quicksort in Chapter 7 will be divide-heavy.",
      },
      {
        term: "MERGE with sentinels",
        kind: "method",
        statement: "To merge sorted runs $A[p..q]$ and $A[q+1..r]$ in $\\Theta(n)$ time, copy them to arrays $L$ and $R$, append $\\infty$ to each as a **sentinel**, and repeatedly take the smaller front element:\n```\nMERGE(A, p, q, r)\n1  n1 = q − p + 1\n2  n2 = r − q\n3  let L[1..n1+1] and R[1..n2+1] be new arrays\n4  for i = 1 to n1\n5      L[i] = A[p+i−1]\n6  for j = 1 to n2\n7      R[j] = A[q+j]\n8  L[n1+1] = ∞\n9  R[n2+1] = ∞\n10 i = 1\n11 j = 1\n12 for k = p to r\n13     if L[i] ≤ R[j]\n14         A[k] = L[i]\n15         i = i + 1\n16     else A[k] = R[j]\n17         j = j + 1\n```\nThe invariant of lines 12–17: `A[p..k−1]` holds the $k-p$ smallest of $L \\cup R$ in order, with `L[i]`, `R[j]` the smallest not yet copied.",
        detail: "Sentinels remove the 'is this pile empty?' test from line 13: the value $\\infty$ can never be the strict minimum while real elements remain, so the algorithm never reads past a pile's end — one pile empties exactly when the loop finishes. The `≤` in line 13 makes the merge *stable* (ties go to the left run), preserving equal keys' original relative order.",
      },
      {
        term: "MERGE-SORT",
        kind: "method",
        statement: "```\nMERGE-SORT(A, p, r)\n1  if p < r\n2      q = ⌊(p + r)/2⌋\n3      MERGE-SORT(A, p, q)\n4      MERGE-SORT(A, q+1, r)\n5      MERGE(A, p, q, r)\n```\nInitial call: `MERGE-SORT(A, 1, n)`. The recursion bottoms out at one-element runs ($p = r$), which are sorted by definition.",
        detail: "The floor in line 2 handles odd lengths; CLRS shows in Section 4.3/4.6-style analysis that such roundings only perturb constants, never the order of growth.",
      },
      {
        term: "The recurrence and its shape",
        kind: "theorem",
        statement: "Dividing is $\\Theta(1)$, merging $n$ elements is $\\Theta(n)$, and each level spawns two half-sized problems, so\n$$T(n) = \\begin{cases} \\Theta(1) & \\text{if } n = 1 \\\\ 2\\,T(n/2) + \\Theta(n) & \\text{if } n > 1. \\end{cases}$$\nChapter 4 proves $T(n) = \\Theta(n \\lg n)$; already in this chapter the recursion tree explains it: **the recursion has depth $\\lg n$, every level does $\\le n$ work merging, so the total is about $n \\lg n$.**",
        detail: "Formally, when $n$ is an exact power of 2, the tree has $\\lg n$ internal levels each costing exactly $cn$, plus $n$ leaves costing $\\Theta(1)$: $T(n) = cn\\lg n + \\Theta(n)$. An intuitive gloss: log base 2 of $n$ is 'the number of times you can halve $n$ before reaching 1'.",
      },
      {
        term: "Sentinel-free MERGE",
        kind: "method",
        statement: "Without sentinels MERGE tests exhaustion explicitly: copy $L = A[p..q]$ and $R = A[q+1..r]$, then while both piles are nonempty take the smaller front element, and finally drain whichever pile remains. The cost stays $\\Theta(n_1+n_2)$ with at most twice the comparisons of the sentinel version.",
        detail: "Exercise 2.3-2 asks for exactly this variant. Sentinels are a clarity device, not a complexity device: they remove two emptiness tests from the inner loop at the price of one extra cell per pile holding $\\infty$.",
      },
    ],
    figures: [
      {
        caption: "MERGE-SORT on $\\langle 5, 2, 4, 7, 1, 3, 2, 6 \\rangle$: the **divide** phase (down, left) is pure index arithmetic — the array is never touched until the size-1 base cases. The **combine** phase (up, right) does all the work: each merge of a level costs $\\Theta(n)$ total, and there are $\\lg 8 = 3$ levels, giving $8 \\cdot 3 + 8 = 32$ element-writes — the anatomy of $\\Theta(n \\lg n)$.",
        svg: '<svg viewBox="0 0 720 310" width="100%" role="img" aria-label="Merge sort recursion tree: divide down to singletons, merged sorted lists up, Theta n work per level"><text x="360" y="22" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">MERGE-SORT ⟨5, 2, 4, 7, 1, 3, 2, 6⟩ — ÷ down, merge up: Θ(n) × 3 levels</text><rect x="80" y="50" width="560" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="360" y="68" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">5, 2, 4, 7, 1, 3, 2, 6</text><rect x="95" y="115" width="260" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="225" y="133" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">5, 2, 4, 7</text><rect x="365" y="115" width="260" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="495" y="133" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle">1, 3, 2, 6</text><rect x="97" y="180" width="120" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="157" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">2, 5</text><rect x="232" y="180" width="120" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="292" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">4, 7</text><rect x="367" y="180" width="120" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="427" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">1, 3</text><rect x="502" y="180" width="120" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="562" y="198" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">2, 6</text><rect x="64" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="90" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">5</text><rect x="164" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="190" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">2</text><rect x="231" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="257" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">4</text><rect x="301" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="327" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">7</text><rect x="367" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="393" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">1</text><rect x="434" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="460" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">3</text><rect x="501" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="527" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">2</text><rect x="601" y="250" width="52" height="26" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="627" y="268" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">6</text><line x1="360" y1="76" x2="225" y2="115" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="360" y1="76" x2="495" y2="115" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="225" y1="141" x2="157" y2="180" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="225" y1="141" x2="292" y2="180" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="495" y1="141" x2="427" y2="180" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="495" y1="141" x2="562" y2="180" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="157" y1="206" x2="90" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="157" y1="206" x2="190" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="292" y1="206" x2="257" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="292" y1="206" x2="327" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="427" y1="206" x2="393" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="427" y1="206" x2="460" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="562" y1="206" x2="527" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><line x1="562" y1="206" x2="627" y2="245" stroke="currentColor" stroke-width="1" opacity="0.55"/><text x="60" y="128" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor">÷</text><text x="60" y="193" font-family="ui-sans-serif, system-ui" font-size="14" fill="currentColor">÷</text><text x="655" y="128" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">merge ↑</text><text x="655" y="193" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">merge ↑</text><text x="360" y="292" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">each level costs Θ(8) → 8·3 + 8 = 32 writes = Θ(n lg n)</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Merging two sorted piles with sentinels",
        problem: "Trace MERGE on $L = \\langle 2, 4, 5, 7, \\infty \\rangle$ and $R = \\langle 1, 3, 8, \\infty \\rangle$, counting comparisons.",
        steps: [
          { label: "Compare fronts", text: "$1 < 2$: take 1; then $2 < 3$: take 2; $3 < 4$: take 3; $4 < 8$: take 4; $5 < 8$: take 5; $7 < 8$: take 7." },
          { label: "Left pile empties", text: "$L$ is exhausted; only the sentinel remains, so the next comparison is $8 \\le \\infty$: take 8." },
          { label: "Done", text: "Both piles now hold only sentinels; the output $\\langle 1, 2, 3, 4, 5, 7, 8 \\rangle$ is complete after $7$ comparisons for $7$ output elements." },
          { label: "Bound check", text: "The merge of runs of sizes $n_1, n_2$ performs at most $n_1 + n_2 - 1$ real comparisons — each comparison except the last retires an element permanently, and the sentinels guarantee at most two extra sentinel comparisons." },
        ],
        result: "$\\langle 1, 2, 3, 4, 5, 7, 8 \\rangle$ in 7 comparisons; in general MERGE costs $\\Theta(n_1 + n_2)$ — linear, with no logarithm.",
      },
      {
        title: "Auditing the recursion tree for n = 8",
        problem: "Count the total merge work for MERGE-SORT on $n = 8$ elements, level by level, and compare with the formula $n \\lg n$.",
        steps: [
          { label: "Level 1 (two runs of 4)", text: "One merge of size 8: 8 element-writes, at most 7 comparisons." },
          { label: "Level 2 (four runs of 2)", text: "Two merges of size 4: $2 \\times 4 = 8$ writes." },
          { label: "Level 3 (base cases)", text: "Four merges of size 2: $4 \\times 2 = 8$ writes. Below them, the eight singletons trigger no merges — $p = r$ returns immediately." },
          { label: "Add it up", text: "Writes: $8 + 8 + 8 = 24 = 8 \\cdot \\lg 8 = n \\lg n$. Depth: $\\lg 8 = 3$ levels of merging." },
        ],
        result: "$T(8) \\approx 8 \\lg 8 = 24$ element-writes plus linear overhead — the tree picture and the formula agree exactly, and both scale as $n \\lg n$.",
      },
    ],
    keyTakeaways: [
      "Divide and conquer splits (divide), recurses (conquer), and reassembles (combine); in merge sort the divide step is free and the combine step — MERGE — is all the work.",
      "Sentinels ($\\infty$ at the end of each run) remove bounds-checks from MERGE, making it a clean $\\Theta(n_1 + n_2)$ loop with the sorted-prefix invariant; the `≤` test keeps the merge stable.",
      "The recurrence $T(n) = 2T(n/2) + \\Theta(n)$ resolves to $\\Theta(n \\lg n)$: $\\lg n$ levels of recursion, at most $n$ work each — a worst-case guarantee insertion sort cannot match.",
    ],
    quiz: [
      {
        q: "The purpose of the $\\infty$ sentinels in MERGE is:",
        options: [
          "to mark the position of the largest element",
          "to eliminate tests for an exhausted pile, since ∞ is never the strict minimum while real elements remain",
          "to make the merge stable",
          "to allow recursive calls on the subarrays",
        ],
        answer: 1,
        explanation: "The sentinel acts as a permanently-losing placeholder, so line 13's comparison never reads past a run's end: when one pile is empty, all remaining real elements beat the other pile's ∞ and drain out.",
      },
      {
        q: "Merging two sorted runs of sizes $n_1 = 4$ and $n_2 = 3$ performs at most how many real (non-sentinel) comparisons?",
        options: ["3", "6", "7", "12"],
        answer: 1,
        explanation: "At most $n_1 + n_2 - 1 = 6$: each real comparison except the last retires one element permanently, and after $n_1 + n_2 - 1$ comparisons only one real element can remain.",
      },
      {
        q: "In the merge sort recursion tree for $n$ (a power of 2), the work at depth $j$ (root = depth 0) totals:",
        options: [
          "$2^j \\cdot \\Theta(1)$",
          "$\\Theta(n)$ at every internal level",
          "$\\Theta(n/2^j)$ summed over levels gives $\\Theta(n)$ overall",
          "$\\Theta(n \\lg n)$ at the root level alone",
        ],
        answer: 1,
        explanation: "Depth $j$ holds $2^j$ subproblems of size $n/2^j$: $2^j \\cdot c(n/2^j) = cn$ merging work per level. With $\\lg n$ internal levels the total is $cn \\lg n + \\Theta(n)$.",
      },
      {
        q: "Which step of merge sort's divide-and-conquer does the real work?",
        options: ["divide — finding the midpoint", "conquer — the base cases", "combine — MERGE", "they are equally expensive"],
        answer: 2,
        explanation: "Divide is one floor division; the base cases are constant time; combine is $\\Theta(n)$ per level. Merge sort is combine-heavy, in contrast to quicksort whose cost sits in divide — a contrast the book draws explicitly.",
      },
      // PYQ-pattern — merge comparison count (rephrased, values changed)
      {
        q: "A textbook merge of two sorted runs holding $5$ and $5$ keys, with no sentinels, halts as soon as one run exhausts. It performs at most how many key comparisons?",
        options: ["9", "10", "25", "5"],
        answer: 0,
        explanation: "Step 1 — Given: run lengths $m = 5$ and $n = 5$, comparison advances exactly one of the two pointers, halt at exhaustion. Step 2 — Governing count: each comparison consumes one key except the final run of leftovers, which copies without comparing. Step 3 — Trace: after $m + n - 1 = 9$ comparisons at least one run is empty (pigeonhole over $10$ keys with $9$ consumptions), and the remaining keys append directly, so $9$ suffices and instances exist attaining it. Step 4 — Sanity check: $9$ is linear in $m + n$, far below the $25$ pairwise product, and grows by one per extra key. Step 5 — Distractor analysis: $10$ counts the sentinel variant that compares once per output slot, $25$ compares every pair, and $5$ compares only one run. Step 6 — Conclude: at most $9$ comparisons.",
      },
    ],
  },
]
