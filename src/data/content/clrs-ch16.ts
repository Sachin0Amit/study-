import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition. Chapter 16: Greedy
// Algorithms. Sections 16.1 – 16.5 (activity selection, elements of the
// greedy strategy, Huffman codes, matroids and greedy methods, task
// scheduling as a matroid).
// ============================================================================

export const clrsCh16Content: SectionContent[] = [
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: "clrs-ch16-s1",
    readingTime: 6,
    intro: "A lecture hall is free from time 0 onward and a crowd of activities each wants the room for an interval; two activities are compatible when their intervals do not overlap. The activity-selection problem asks for a largest mutually compatible subset. Dynamic programming solves it — but the problem rewards something far cheaper: take the compatible activity that finishes first, discard everything it conflicts with, and repeat. Correctness of that one-pass greedy reduces to a single exchange argument worth memorizing.",
    objectives: [
      "Formalize activity selection: intervals, compatibility, and the maximum-compatible-subset goal",
      "Prove Theorem 16.1 — the earliest-finishing activity is always a safe choice — by the exchange argument",
      "Trace GREEDY-ACTIVITY-SELECTOR on the book's 11-activity instance and bound its running time",
    ],
    concepts: [
      {
        term: "The activity-selection problem",
        kind: "definition",
        statement: "Given $S = \\{a_1, \\ldots, a_n\\}$ where activity $a_i$ occupies the half-open interval $[s_i, f_i)$, with activities **sorted by finish time** $f_1 \\le f_2 \\le \\cdots \\le f_n$. Activities $a_i$ and $a_j$ are **compatible** when their intervals do not overlap: $s_i \\ge f_j$ or $s_j \\ge f_i$. The goal is a **maximum-size subset of mutually compatible activities**. Scheduling a shared resource — rooms, processors, radio frames — is the abstract content.",
        detail: "CLRS assumes the sort once and for all ($O(n \\lg n)$); the selection itself is then linear. Half-open intervals make compatibility a clean non-strict inequality after sorting.",
      },
      {
        term: "Optimal substructure, briefly",
        kind: "method",
        statement: "Let $S_{ij} = \\{a_k : s_k \\ge f_i \\text{ and } f_k \\le s_j\\}$ be the activities that fit strictly between $a_i$ and $a_j$. If $a_k \\in S_{ij}$ is selected, the residual subproblems are $S_{ik}$ and $S_{kj}$, giving the recurrence $c[i,j] = c[i,k] + c[k,j] + 1$ — exactly the cut-and-paste structure of rod cutting or matrix chains, solvable by DP in $O(n^3)$.",
        detail: "The DP works but wastes its power: it keeps every first choice open because it cannot tell which one is safe. The greedy section identifies precisely that.",
      },
      {
        term: "The greedy choice: earliest finish time",
        kind: "insight",
        statement: "Among the remaining compatible candidates, take the one that **finishes first**. Intuition: it frees the room as early as possible, leaving the most room for the activities that follow. The DP would try all first choices; greedy commits to this one and never revisits it.",
        detail: "Earliest *start* would not work — an activity starting at time 0 but running all day blocks everything. The finish time is the quantity that measures how much future remains.",
      },
      {
        term: "Theorem 16.1 (the greedy choice is safe)",
        kind: "theorem",
        statement: "Consider any nonempty subproblem $S_k$, and let $a_m \\in S_k$ have the earliest finish time. Then $a_m$ is included in **some** maximum-size compatible subset of $S_k$.",
        detail: "The proof is an exchange argument, worked in full in Example 2. It is the template for every \"greedy choice is safe\" proof in this chapter: swap the greedy pick into an arbitrary optimum and show nothing breaks.",
      },
      {
        term: "GREEDY-ACTIVITY-SELECTOR",
        kind: "method",
        statement: "One pass after the sort — $k$ tracks the most recent activity taken:\n```\nGREEDY-ACTIVITY-SELECTOR(s, f)\n1  n = s.length\n2  A = {a1}\n3  k = 1\n4  for m = 2 to n\n5      if s[m] ≥ f[k]\n6          A = A ∪ {am}\n7          k = m\n8  return A\n```\nThe loop is $\\Theta(n)$; the recursive version (RECURSIVE-ACTIVITY-SELECTOR) does the same work by tail recursion.",
        detail: "Feasibility is a single comparison $s[m] \\ge f[k]$ because the input is sorted by finish time — the sort has already linearized the conflict structure.",
      },
    ],
    figures: [
      {
        caption: "The book's 11-activity instance (sorted by finish time). Amber bars are the greedy picks $a_1, a_4, a_8, a_{11}$; dashed guides mark their finish times $f_1 = 4$, $f_4 = 7$, $f_8 = 11$, $f_{11} = 16$. Every gray bar crosses a guide — that is incompatibility made visible — and each pick starts at or to the right of the previous guide. Greedy returns 4 activities, and no compatible subset of this instance is larger.",
        svg: `<svg viewBox="0 0 720 344" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Activity selection timeline for 11 activities"><g stroke="currentColor" stroke-width="1" opacity="0.13"><line x1="50" y1="34" x2="50" y2="296"/><line x1="130" y1="34" x2="130" y2="296"/><line x1="210" y1="34" x2="210" y2="296"/><line x1="290" y1="34" x2="290" y2="296"/><line x1="370" y1="34" x2="370" y2="296"/><line x1="450" y1="34" x2="450" y2="296"/><line x1="530" y1="34" x2="530" y2="296"/><line x1="610" y1="34" x2="610" y2="296"/><line x1="690" y1="34" x2="690" y2="296"/></g><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"><line x1="210" y1="34" x2="210" y2="296"/><line x1="330" y1="34" x2="330" y2="296"/><line x1="490" y1="34" x2="490" y2="296"/><line x1="690" y1="34" x2="690" y2="296"/></g><g font-size="10.5" fill="currentColor" opacity="0.85" text-anchor="middle"><text x="210" y="28">f₁ = 4</text><text x="330" y="28">f₄ = 7</text><text x="490" y="28">f₈ = 11</text><text x="684" y="28">f₁₁ = 16</text></g><g font-size="11.5" fill="currentColor"><text x="16" y="52.5">a₁</text><text x="16" y="76.5">a₂</text><text x="16" y="100.5">a₃</text><text x="16" y="124.5">a₄</text><text x="16" y="148.5">a₅</text><text x="16" y="172.5">a₆</text><text x="16" y="196.5">a₇</text><text x="16" y="220.5">a₈</text><text x="16" y="244.5">a₉</text><text x="16" y="268.5">a₁₀</text><text x="12" y="292.5">a₁₁</text></g><g><rect x="90" y="40" width="120" height="16" rx="3" fill="#f59e0b" opacity="0.7"/><rect x="170" y="64" width="80" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="50" y="88" width="240" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="250" y="112" width="80" height="16" rx="3" fill="#f59e0b" opacity="0.7"/><rect x="170" y="136" width="240" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="250" y="160" width="160" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="290" y="184" width="160" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="370" y="208" width="120" height="16" rx="3" fill="#f59e0b" opacity="0.7"/><rect x="370" y="232" width="160" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="130" y="256" width="480" height="16" rx="3" fill="currentColor" opacity="0.15"/><rect x="530" y="280" width="160" height="16" rx="3" fill="#f59e0b" opacity="0.7"/></g><g stroke="currentColor" opacity="0.55"><line x1="50" y1="308" x2="690" y2="308" stroke-width="1.5"/><line x1="50" y1="308" x2="50" y2="314"/><line x1="130" y1="308" x2="130" y2="314"/><line x1="210" y1="308" x2="210" y2="314"/><line x1="290" y1="308" x2="290" y2="314"/><line x1="370" y1="308" x2="370" y2="314"/><line x1="450" y1="308" x2="450" y2="314"/><line x1="530" y1="308" x2="530" y2="314"/><line x1="610" y1="308" x2="610" y2="314"/><line x1="690" y1="308" x2="690" y2="314"/></g><g font-size="10.5" fill="currentColor" opacity="0.8" text-anchor="middle"><text x="50" y="328">0</text><text x="130" y="328">2</text><text x="210" y="328">4</text><text x="290" y="328">6</text><text x="370" y="328">8</text><text x="450" y="328">10</text><text x="530" y="328">12</text><text x="610" y="328">14</text><text x="690" y="328">16</text></g></svg>`,
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: "Greedy on the book's 11 activities",
        problem: "Activities (start, finish): $a_1(1,4)$, $a_2(3,5)$, $a_3(0,6)$, $a_4(5,7)$, $a_5(3,9)$, $a_6(5,9)$, $a_7(6,10)$, $a_8(8,11)$, $a_9(8,12)$, $a_{10}(2,14)$, $a_{11}(12,16)$. Run GREEDY-ACTIVITY-SELECTOR.",
        steps: [
          { label: "m = 1", text: "Take $a_1$ (earliest finish, $f_1 = 4$); set $k = 1$." },
          { label: "m = 2, 3", text: "$s_2 = 3 < 4$ and $s_3 = 0 < 4$: both start before $a_1$ ends — reject." },
          { label: "m = 4", text: "$s_4 = 5 \\ge f_1 = 4$: take $a_4$ ($f_4 = 7$); set $k = 4$." },
          { label: "m = 5, 6, 7", text: "Starts 3, 5, 6 are all $< 7$ — each overlaps $a_4$'s tail. Reject all three." },
          { label: "m = 8", text: "$s_8 = 8 \\ge 7$: take $a_8$ ($f_8 = 11$); set $k = 8$." },
          { label: "m = 9, 10", text: "Starts 8 and 2 are $< 11$ — reject." },
          { label: "m = 11", text: "$s_{11} = 12 \\ge 11$: take $a_{11}$. No activities remain." },
        ],
        result: "$A = \\{a_1, a_4, a_8, a_{11}\\}$ — the chain $[1,4), [5,7), [8,11), [12,16)$ is pairwise compatible, and by Theorem 16.1 no compatible subset of size 5 exists.",
      },
      {
        title: "Theorem 16.1 in full — the exchange argument",
        problem: "Prove that in any nonempty subproblem $S_k$, the earliest-finishing activity $a_m$ belongs to some maximum compatible subset.",
        steps: [
          { label: "Setup", text: "Let $A \\subseteq S_k$ be any maximum compatible subset, and let $a_j$ be the member of $A$ with the earliest finish time. If $a_j = a_m$ we are done, so suppose not: $f_m \\le f_j$ with $a_m \\ne a_j$." },
          { label: "Structure of A", text: "Every other $a \\in A$ starts at or after $f_j$. Indeed, $a$ is compatible with $a_j$, so either $s_a \\ge f_j$, or $a$ ends before $a_j$ starts ($f_a \\le s_j < f_j$) — but the latter would make $a$ finish earlier than $a_j$, contradicting the choice of $a_j$ as $A$'s earliest finisher." },
          { label: "Swap", text: "Construct $A' = A - \\{a_j\\} \\cup \\{a_m\\}$. Clearly $|A'| = |A|$." },
          { label: "Compatibility", text: "Each $a \\in A - \\{a_j\\}$ has $s_a \\ge f_j \\ge f_m$, so it does not overlap $a_m$ either: $A'$ is mutually compatible." },
          { label: "Conclusion", text: "$A'$ is a maximum compatible subset of $S_k$ that contains $a_m$. The greedy first move therefore destroyed nothing." },
        ],
        result: "The swap never loses size and never breaks compatibility — that is the entire proof. The same skeleton reappears for Huffman's trees (16.3) and matroids (16.4).",
      },
    ],
    keyTakeaways: [
      "Greedy activity selection takes the earliest-finishing compatible activity; Theorem 16.1 makes it safe by a pure exchange argument.",
      "After the $O(n \\lg n)$ sort, GREEDY-ACTIVITY-SELECTOR is a single $\\Theta(n)$ pass — no DP table, no memoization.",
      "The problem has optimal substructure, but greedy needs more: the greedy-choice property — a locally best choice extendable to a globally optimal solution.",
    ],
    quiz: [
      {
        q: "In GREEDY-ACTIVITY-SELECTOR, the next activity taken is always the remaining one that:",
        options: [
          "starts earliest",
          "is shortest",
          "finishes earliest",
          "overlaps the fewest other activities",
        ],
        answer: 2,
        explanation: "The finish time measures how much room survives the choice; starting early or being short says nothing about the finish line.",
      },
      {
        q: "Theorem 16.1 swaps $a_m$ (earliest finish in $S_k$) into an optimal set $A$ in place of $a_j$ (earliest finish in $A$). Compatibility of $a_m$ with the rest of $A$ holds because:",
        options: [
          "every other activity in A starts at or after $f_j$, and $f_m \\le f_j$",
          "every other activity in A finishes after $f_m$",
          "$a_m$ is shorter than $a_j$",
          "the greedy algorithm already removed all conflicts",
        ],
        answer: 0,
        explanation: "The choice of $a_j$ as $A$'s earliest finisher forces all other members to start after $f_j$ — the swap then inherits compatibility through $f_m \\le f_j$.",
      },
      {
        q: "With activities already sorted by finish time, GREEDY-ACTIVITY-SELECTOR runs in:",
        options: ["$\\Theta(n \\lg n)$", "$\\Theta(n)$", "$\\Theta(n^2)$", "$\\Theta(\\lg n)$"],
        answer: 1,
        explanation: "One for-loop with a constant-time test per activity; the $O(n \\lg n)$ sort is paid once, beforehand.",
      },
      {
        q: "For the book's 11-activity instance, greedy returns:",
        options: [
          "$\\{a_1, a_4, a_8, a_{11}\\}$",
          "$\\{a_1, a_3, a_7, a_{11}\\}$",
          "$\\{a_2, a_4, a_8, a_{10}\\}$",
          "$\\{a_1, a_4, a_7, a_{11}\\}$",
        ],
        answer: 0,
        explanation: "Finish-time guides at 4, 7, 11, 16: each pick is the first activity starting at or beyond the previous guide.",
      },
      // PYQ-pattern — activity-selection greedy size (rephrased, values changed)
      {
        q: "Activities with intervals $[1,3], [2,4], [3,5], [0,6], [5,7], [8,9]$ share one hall. The greedy earliest-finish rule selects how many?",
        options: ["4, namely $[1,3], [3,5], [5,7], [8,9]$", "3, namely $[2,4], [5,7], [8,9]$", "5", "2, namely $[0,6], [8,9]$"],
        answer: 0,
        explanation: "Step 1 — Given six intervals, compatibility $s \\ge f_{last}$. Step 2 — Governing rule: take the compatible activity with earliest finish, discard conflicts, repeat; an exchange argument proves optimality. Step 3 — Trace: sorted finishes $3, 4, 5, 6, 7, 9$; pick $[1,3]$, skip $[2,4]$, pick $[3,5]$, skip $[0,6]$, pick $[5,7]$, pick $[8,9]$: total $4$. Step 4 — Sanity check: the four are pairwise compatible, any fifth must clash since only $[2,4]$ and $[0,6]$ remain and both hit chosen ones. Step 5 — Distractor analysis: the $3$-set starts greedily wrong, $5$ is infeasible, and the $2$-set takes the long blocker first. Step 6 — Conclude: $4$ activities.",
      },
    ],
  },

  // ---------------------------------------------------------------- 16.2
  {
    sectionId: "clrs-ch16-s2",
    readingTime: 6,
    intro: "Section 16.1's success looks like luck. Why should committing to one choice and never looking back ever work? This section extracts the design method: cast the problem as a sequence of choices and ask two questions — can a locally optimal choice always be extended to a global optimum (the greedy-choice property), and does each choice leave behind a smaller problem of the same kind (optimal substructure)? The two knapsack problems are the controlled experiment: fractional greedy yes, 0-1 greedy no.",
    objectives: [
      "State the greedy-choice property and the design questions of the greedy strategy",
      "Distinguish how greedy and dynamic programming each use optimal substructure",
      "Use 0-1 versus fractional knapsack as the canonical pair where greedy works for one and fails for the other",
    ],
    concepts: [
      {
        term: "The greedy strategy as a design method",
        kind: "method",
        statement: "CLRS distills greedy design into steps: (1) cast the optimization as making a choice that leaves **one subproblem** to solve; (2) prove the greedy choice is safe — it appears in *some* optimal solution; (3) show that after the choice, combining an optimal solution of the subproblem with the choice gives an optimal solution of the original (optimal substructure); (4) implement the choice loop, usually after sorting the candidates by a score. The signature move: **commit and never reconsider**.",
        detail: "Contrast with DP, which tabulates subproblem optima precisely because it does not know which top-level choice is safe. Greedy converts an exponential tree of choices into one linear pass through a ranked list.",
      },
      {
        term: "Greedy-choice property",
        kind: "definition",
        statement: "A problem has the **greedy-choice property** when a locally optimal choice — the best candidate by the ranking, subject to feasibility — can be extended to some globally optimal solution. It is the extra hypothesis beyond optimal substructure: not merely \"some choice plus a subproblem optimum works,\" but \"*this* choice works.\"",
        detail: "Almost always proved by an exchange argument: take any optimal solution, swap the greedy choice in for a conflicting element of it, and show the swap loses nothing. Theorem 16.1 did exactly this.",
      },
      {
        term: "Optimal substructure",
        kind: "definition",
        statement: "An optimal solution contains within it optimal solutions to the subproblems that remain after each choice. For activity selection: after choosing $a_1$, the residual problem is activity selection among the activities compatible with $a_1$ — the same problem on a smaller instance. Both greedy and DP require this property; it alone does not certify greedy.",
        detail: "The suffix structure here is unusually clean: only one subproblem survives each choice (the DP had two, $S_{ik}$ and $S_{kj}$). A single subproblem per choice is a good hint that greedy may apply.",
      },
      {
        term: "Greedy versus DP: the knapsack pair",
        kind: "insight",
        statement: "**0-1 knapsack** — $n$ items with values and weights, capacity $W$, each item taken wholly or not — has optimal substructure, yet greedy by value density $v_i / w_i$ fails: it strands capacity. **Fractional knapsack**, where $x \\in [0,1]$ of an item may be taken, is greedy-optimal by the same density. The difference is divisibility: with fractions, the leftover capacity is never wasted; with indivisible items, a locally best pick can crowd out a better combination.",
        detail: "DP solves 0-1 in $\\Theta(nW)$ time; the fractional optimum, found greedily in $O(n \\lg n)$, can even exceed every integral solution — that gap is exactly what greedy loses on the 0-1 side.",
      },
      {
        term: "Two proof templates",
        kind: "method",
        statement: "**Exchange**: swap the greedy choice into an arbitrary optimum and argue no loss (Theorem 16.1; Huffman's Lemma 16.2). **Stays ahead**: prove by induction that after $k$ choices, greedy's partial solution is at least as good, by every measure that matters, as any competitor's after $k$ choices (the classic argument for interval scheduling by finish time). Recognizing which template fits is the practical skill.",
        detail: "Exchange proofs tolerate ties and restructuring of the optimum; stays-ahead proofs need a monotone quality measure. The matroid theorem of 16.4 will absorb the exchange template wholesale.",
      },
    ],
    examples: [
      {
        title: "Fractional knapsack: greedy is optimal",
        problem: "Capacity $W = 50$; items (value, weight): $(60, 10)$, $(100, 20)$, $(120, 30)$. Maximize value carried.",
        steps: [
          { label: "Rank", text: "Densities $v/w$ are $60/10 = 6$, $100/20 = 5$, $120/30 = 4$: take in that order." },
          { label: "Item 1", text: "Whole: 10 units, value 60; 40 capacity left." },
          { label: "Item 2", text: "Whole: 20 units, value 160 total; 20 capacity left." },
          { label: "Item 3", text: "Take $20/30$ of it: value $120 \\cdot 2/3 = 80$. Capacity exactly exhausted." },
        ],
        result: "Total $60 + 100 + 80 = 240$ — optimal: any solution exchanging denser for lighter goods can be improved, so density order is safe (fractional greedy-choice property).",
      },
      {
        title: "0-1 knapsack: the same greedy fails",
        problem: "Same items and $W = 50$, but items are indivisible.",
        steps: [
          { label: "Greedy run", text: "Take item 1 (density 6), take item 2 (density 5): weight 30, value 160. Item 3 needs 30 units, only 20 remain — skip. Greedy total: 160." },
          { label: "A better subset", text: "Items 2 and 3 together: weight $20 + 30 = 50 \\le 50$, value $100 + 120 = 220$." },
          { label: "Diagnosis", text: "Item 1's high density bought 60 value for 10 weight, but its 10 units crowded out item 3's 120 value for 30 weight. Divisibility is what made density safe; indivisibility breaks the exchange." },
        ],
        result: "Greedy 160 < 220 optimal — the 0-1 problem needs DP (or search), while the fractional variant does not. Same optimal substructure, different greedy viability.",
      },
    ],
    keyTakeaways: [
      "Greedy design = rank, take the best feasible, commit; correctness needs the greedy-choice property on top of optimal substructure.",
      "Optimal substructure alone is NOT enough — 0-1 knapsack has it and every greedy rule for it fails.",
      "Fractional knapsack is the mirror image: density-greedy is provably optimal, because leftover capacity is never stranded.",
    ],
    quiz: [
      {
        q: "The greedy-choice property states that:",
        options: [
          "every locally optimal choice belongs to every optimal solution",
          "a locally optimal choice belongs to some optimal solution",
          "the subproblem after a greedy choice is identical to the original",
          "greedy algorithms sort their input first",
        ],
        answer: 1,
        explanation: "Only existence is claimed — some optimum extends the greedy pick. That is exactly what Theorem 16.1's swap establishes.",
      },
      {
        q: "Which knapsack variant is solved optimally by the value-density greedy?",
        options: ["0-1 knapsack", "fractional knapsack", "both", "neither"],
        answer: 1,
        explanation: "Fractions let every remaining unit of capacity be filled with the densest remaining goods; indivisible items let a greedy pick strand capacity.",
      },
      {
        q: "Compared with dynamic programming, a greedy algorithm:",
        options: [
          "solves subproblems bottom-up before making the top choice",
          "makes its choice first and never revisits it",
          "enumerates every choice and selects the best",
          "requires overlapping subproblems",
        ],
        answer: 1,
        explanation: "Commit-and-move-on is the defining discipline of greedy; DP defers and looks back through the table.",
      },
      {
        q: "In the $W = 50$ example, greedy-by-density on the 0-1 problem achieves 160 rather than 220 because:",
        options: [
          "item 3 has the highest density",
          "taking items 1 and 2 strands 20 units of capacity that item 3 could have used",
          "the DP table was computed incorrectly",
          "item 1 has the smallest value",
        ],
        answer: 1,
        explanation: "160 + stranded capacity versus 220 with the same knapsack: the locally best item excluded the globally best pair.",
      },
    ],
  },

  // ---------------------------------------------------------------- 16.3
  {
    sectionId: "clrs-ch16-s3",
    readingTime: 8,
    intro: "A 100,000-character file occupies 800,000 bits in 8-bit ASCII, yet its six distinct characters occur with wildly unequal frequencies — a fixed code wastes space on rare letters and economizes nothing on common ones. Huffman's 1952 algorithm builds the optimal variable-length, prefix-free code with one greedy move you can hold in a sentence: merge the two least frequent symbols and treat the merge as a new symbol. Correctness is two lemmas and an induction.",
    objectives: [
      "Represent prefix-free codes as full binary trees and compute a code's cost $B(T)$",
      "Execute HUFFMAN end to end on the six-symbol example and verify the 72% saving",
      "Reproduce the two correctness lemmas — least-frequent siblings and the one-node reduction — and assemble them into the optimality proof",
    ],
    concepts: [
      {
        term: "Prefix-free codes",
        kind: "definition",
        statement: "A **codeword** is the binary string assigned to a character. A code is **prefix-free** when no codeword is a prefix of another. Prefix-free codes are exactly the codes read off a **full binary tree** (every internal node has exactly 2 children) with the characters at the **leaves**: the codeword of $c$ is the root-to-leaf path, and its length is the depth $d_T(c)$. Prefix-freeness makes decoding unambiguous left to right, with no lookahead or backtracking.",
        detail: "Placing a character at an internal node would make its codeword a prefix of everything below it — leaves are what make the code instantaneous.",
      },
      {
        term: "Cost of a code",
        kind: "definition",
        statement: "For character frequencies $f(c)$ (say, occurrences per 100 characters), the cost of a code tree $T$ is $$B(T) = \\sum_{c \\in C} f(c)\\, d_T(c),$$ the number of encoded bits per 100 characters. An **optimal code** is a full binary tree with $C$ at its leaves minimizing $B(T)$. The optimization lever is depth: frequent characters want to be shallow.",
        detail: "The number of full binary trees with $n$ leaves is the Catalan number $C_{n-1} \\approx 4^n / n^{3/2}$ — exponential in the alphabet, so brute-force search is hopeless; the greedy merge finds the optimum directly.",
      },
      {
        term: "The economics of the example",
        kind: "insight",
        statement: "Frequencies per 100 characters: $a{:}45$, $b{:}13$, $c{:}12$, $d{:}16$, $e{:}9$, $f{:}5$. Eight-bit ASCII costs 800 bits per 100; even a tailored fixed code needs $\\lceil \\lg 6 \\rceil = 3$ bits per character, 300 bits. The Huffman tree costs $B(T) = 224$ — for the 100,000-character file, 224,000 bits = 28,000 bytes, a saving of about **72%** over 8-bit. Common $a$ gets a 1-bit codeword; rare $e$ and $f$ pay 4 bits.",
        detail: "When every frequency is a negative power of two times a common scale, the Huffman cost meets Shannon's entropy lower bound exactly — here it comes close because $a$ alone covers 45% of the text.",
      },
      {
        term: "HUFFMAN",
        kind: "method",
        statement: "```\nHUFFMAN(C)\n1  n = |C|\n2  Q = C\n3  for i = 1 to n − 1\n4      allocate a new node z\n5      z.left = x = EXTRACT-MIN(Q)\n6      z.right = y = EXTRACT-MIN(Q)\n7      z.freq = x.freq + y.freq\n8      INSERT(Q, z)\n9  return EXTRACT-MIN(Q)\n```\nThe two least-frequency nodes become the children of a fresh internal node whose frequency is their sum; after $n - 1$ merges one node remains — the root. With a binary min-heap this is $O(n \\lg n)$; with frequencies pre-sorted, two FIFO queues make it $O(n)$.",
        detail: "The greedy choice lives in lines 5–6: always merge the two smallest. Everything else is bookkeeping.",
      },
      {
        term: "Why it is optimal: Lemmas 16.2 and 16.3",
        kind: "theorem",
        statement: "**Lemma 16.2** — some optimal tree has the two least-frequent characters $x, y$ as **siblings at maximum depth**. **Lemma 16.3** — replace $x, y$ by a new character $z$ with $f(z) = f(x) + f(y)$; if $T`$ is an optimal tree for the reduced alphabet, then replacing $z$`s leaf by an internal node with children $x, y$ yields an optimal tree for $C$, and $B(T) = B(T') + f(x) + f(y)$ in both directions. Induction on the alphabet assembles HUFFMAN's optimality: the first merge is safe by 16.2, it reduces the instance by 16.3, and the algorithm recurs.",
        detail: "Lemma 16.2 is an exchange argument on deepest leaves; Lemma 16.3 is the bookkeeping identity — deepening both $x$ and $y$ by one level costs exactly $f(x) + f(y)$ new bits.",
      },
    ],
    figures: [
      {
        caption: "The HUFFMAN build for $f{:}5$, $e{:}9$, $c{:}12$, $b{:}13$, $d{:}16$, $a{:}45$. Internal nodes carry merged weights and merge order: $5+9 \\to 14$, $12+13 \\to 25$, $14+16 \\to 30$, $25+30 \\to 55$, $45+55 \\to 100$. Edge labels are bits; each leaf shows char:frequency above and its codeword below. The greedy invariant is visible — the two smallest weights in the queue always merge — and frequency buys depth: $a$'s 45% earns the 1-bit codeword 1, while rare $f$ and $e$ pay 4 bits each.",
        svg: `<svg viewBox="0 0 720 430" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Huffman code tree built from six character frequencies"><g stroke="currentColor" stroke-width="1.5" opacity="0.5"><line x1="350" y1="44" x2="150" y2="140"/><line x1="350" y1="44" x2="530" y2="140"/><line x1="530" y1="140" x2="410" y2="232"/><line x1="530" y1="140" x2="620" y2="232"/><line x1="410" y1="232" x2="322" y2="324"/><line x1="410" y1="232" x2="486" y2="324"/><line x1="620" y1="232" x2="560" y2="324"/><line x1="620" y1="232" x2="690" y2="324"/><line x1="560" y1="324" x2="508" y2="396"/><line x1="560" y1="324" x2="612" y2="396"/></g><g font-size="12.5" font-weight="600" fill="currentColor"><text x="242" y="94">1</text><text x="432" y="92">0</text><text x="458" y="190">0</text><text x="585" y="190">1</text><text x="350" y="276">0</text><text x="460" y="276">1</text><text x="582" y="280">0</text><text x="668" y="282">1</text><text x="520" y="368">0</text><text x="598" y="368">1</text></g><g fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="1.5"><circle cx="350" cy="44" r="17"/><circle cx="530" cy="140" r="17"/><circle cx="410" cy="232" r="17"/><circle cx="620" cy="232" r="17"/><circle cx="560" cy="324" r="17"/></g><g font-size="12" font-weight="600" fill="currentColor" text-anchor="middle"><text x="350" y="48">100</text><text x="530" y="144">55</text><text x="410" y="236">25</text><text x="620" y="236">30</text><text x="560" y="328">14</text></g><g font-size="10" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="350" y="20">5th merge</text><text x="530" y="112">4th</text><text x="410" y="204">2nd</text><text x="620" y="204">3rd</text><text x="560" y="296">1st</text></g><g fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.25"><rect x="124" y="126" width="52" height="28" rx="6"/><rect x="296" y="310" width="52" height="28" rx="6"/><rect x="460" y="310" width="52" height="28" rx="6"/><rect x="664" y="310" width="52" height="28" rx="6"/><rect x="482" y="382" width="52" height="28" rx="6"/><rect x="586" y="382" width="52" height="28" rx="6"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="150" y="144">a:45</text><text x="322" y="328">c:12</text><text x="486" y="328">b:13</text><text x="690" y="328">d:16</text><text x="508" y="400">f:5</text><text x="612" y="400">e:9</text></g><g font-size="11.5" font-weight="600" fill="currentColor" opacity="0.9" text-anchor="middle"><text x="150" y="172">1</text><text x="322" y="356">000</text><text x="486" y="356">001</text><text x="690" y="356">011</text><text x="508" y="426">0100</text><text x="612" y="426">0101</text></g><text x="24" y="426" font-size="11" fill="currentColor" opacity="0.85">B(T) = 45·1 + 12·3 + 13·3 + 16·3 + 5·4 + 9·4 = 224 bits per 100 chars</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "HUFFMAN on the six characters, every merge",
        problem: "Run HUFFMAN on frequencies $a{:}45$, $b{:}13$, $c{:}12$, $d{:}16$, $e{:}9$, $f{:}5$ and price the resulting code.",
        steps: [
          { label: "Queue", text: "$Q = \\{f{:}5, e{:}9, c{:}12, b{:}13, d{:}16, a{:}45\\}$ — six single-node trees." },
          { label: "Merge 1", text: "Two smallest: $f{:}5$ and $e{:}9$ become the children of $14$." },
          { label: "Merge 2", text: "Next two smallest: $c{:}12$ and $b{:}13$ become the children of $25$." },
          { label: "Merge 3", text: "$14$ and $d{:}16$ become the children of $30$." },
          { label: "Merge 4", text: "$25$ and $30$ become the children of $55$." },
          { label: "Merge 5", text: "$a{:}45$ and $55$ become the children of $100$ — the root. Total: $n - 1 = 5$ merges." },
          { label: "Read codes", text: "Walking root to leaf (0 left, 1 right, as in the figure): $a = 1$, $c = 000$, $b = 001$, $d = 011$, $f = 0100$, $e = 0101$ — prefix-free because all characters sit at leaves." },
        ],
        result: "$B(T) = 45 \\cdot 1 + 12 \\cdot 3 + 13 \\cdot 3 + 16 \\cdot 3 + 5 \\cdot 4 + 9 \\cdot 4 = 45 + 36 + 39 + 48 + 20 + 36 = 224$ bits per 100 characters: 224,000 bits = 28,000 bytes for the file, versus 100,000 bytes in 8-bit ASCII — about 72% saved.",
      },
      {
        title: "Lemma 16.2's swap, with numbers",
        problem: "Show by exchange that some optimal tree has the two least frequent characters, $f{:}5$ and $e{:}9$, as deepest siblings.",
        steps: [
          { label: "Deepest pair", text: "In any optimal full binary tree, take sibling leaves $a, b$ at maximum depth $D$; suppose they hold characters with frequencies 12 and 13, while $f$ (5) and $e$ (9) sit at depths $\\le D$." },
          { label: "Swap f into a's slot", text: "The cost change is $(f(f) - f(a))(D - d(f)) = (5 - 12)(D - d(f)) \\le 0$, because $D \\ge d(f)$ and $5 < 12$: moving the rarer symbol deeper can only help." },
          { label: "Swap e into b's slot", text: "Similarly $(9 - 13)(D - d(e)) \\le 0$ after the first swap." },
          { label: "Conclusion", text: "Both changes are non-increasing in $B$; since the tree was optimal, they cost exactly 0, and the resulting optimal tree has $f$ and $e$ as sibling leaves at maximum depth — the configuration HUFFMAN's first merge builds." },
        ],
        result: "The swap never increases cost — that one inequality is the entire proof of Lemma 16.2, and it is why merging the two least frequent symbols is safe.",
      },
    ],
    keyTakeaways: [
      "Prefix-free codes = characters at the leaves of a full binary tree; the file length to minimize is $B(T) = \\sum_c f(c) d_T(c)$.",
      "HUFFMAN merges the two least-frequent nodes — $O(n \\lg n)$ with a heap, $O(n)$ pre-sorted — and Lemmas 16.2 + 16.3 plus induction prove optimality.",
      "On the book's data: 224 bits per 100 characters versus 300 (best fixed 3-bit) and 800 (8-bit) — variable-length prefix codes win big when frequencies skew.",
    ],
    quiz: [
      {
        q: "A binary character code is prefix-free exactly when:",
        options: [
          "all codewords have the same length",
          "the characters sit at the leaves of a full binary tree",
          "no character has frequency above 50%",
          "the codewords are sorted by length",
        ],
        answer: 1,
        explanation: "A codeword is a root-to-leaf path; a prefix relation would require one character on the path of another — impossible with all characters at leaves.",
      },
      {
        q: "HUFFMAN's greedy choice at each step is to merge:",
        options: [
          "the two characters with the shortest codewords",
          "the two nodes with the smallest frequencies",
          "the deepest pair of leaves",
          "the two characters with the closest frequencies",
        ],
        answer: 1,
        explanation: "Lines 5–6 extract the two minimum frequencies. Lemma 16.2 says exactly this merge is safe in some optimal tree.",
      },
      {
        q: "Lemma 16.3 reduces the alphabet by replacing the least-frequent siblings $x, y$ with $z$, $f(z) = f(x) + f(y)$. The costs relate as:",
        options: [
          "$B(T) = B(T') + f(x) f(y)$",
          "$B(T) = B(T') + f(x) + f(y)$, and optimal trees correspond in both directions",
          "$B(T) = B(T') - f(x) - f(y)$",
          "$B(T) = 2 B(T')$",
        ],
        answer: 1,
        explanation: "Expanding $z$'s leaf into $x, y$ deepens both characters by one level each, adding exactly $f(x) + f(y)$ bits — an identity, so optimality transfers both ways.",
      },
      {
        q: "For frequencies $a{:}45$, $b{:}13$, $c{:}12$, $d{:}16$, $e{:}9$, $f{:}5$, the Huffman cost $B(T)$ per 100 characters is:",
        options: ["300", "224", "196", "250"],
        answer: 1,
        explanation: "Depths 1, 3, 3, 3, 4, 4: $45 + 39 + 36 + 48 + 36 + 20 = 224$ — every merge in the trace is verifiable by hand.",
      },
      // PYQ-pattern — Huffman codeword lengths (rephrased, values changed)
      {
        q: "Symbol frequencies are $a:45, b:13, c:12, d:16, e:9, f:5$. In an optimal prefix code, the codeword lengths of $a$ and $f$ are:",
        options: ["$1$ and $2$", "$2$ and $3$", "$3$ and $4$", "$1$ and $4$"],
        answer: 3,
        explanation: "Step 1 — Given six frequencies summing to $100$. Step 2 — Governing move: repeatedly merge the two least frequent nodes, the greedy choice behind optimal prefix codes. Step 3 — Merges: $5 + 9 = 14$; $12 + 13 = 25$; $14 + 16 = 30$; $25 + 30 = 55$; $45 + 55 = 100$; total cost $14 + 25 + 30 + 55 + 100 = 224$; depths give $a$ length $1$ and $f$ length $4$ (with $b, c, d$ at $3$ and $e$ at $4$). Step 4 — Sanity check: Kraft sum $\\frac{1}{2} + \\frac{3}{8} + \\frac{2}{16} = 1$, frequent $a$ is shortest, rare $f$ longest, and $224$ beats the $300$-bit fixed code. Step 5 — Distractor analysis: swapped or shortened lengths violate sibling and depth invariants of the merge tree. Step 6 — Conclude: $1$ bit for $a$, $4$ bits for $f$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 16.4
  {
    sectionId: "clrs-ch16-s4",
    readingTime: 8,
    intro: "Is there a theorem that certifies greedy wholesale, instead of a fresh exchange argument per problem? Yes — for a sharply delimited class of independence structures: matroids, Whitney's 1935 abstraction of linear independence in matrices. On any weighted matroid, greedy by decreasing weight is optimal. One theorem instantly re-proves Kruskal\'s MST algorithm and will power the scheduler of the next section; the depth tier builds its proof from the exchange axiom up.",
    objectives: [
      "State the three matroid axioms and verify them on small independence systems",
      "Prove the graphic matroid is a matroid and connect it to Kruskal's algorithm",
      "State the weighted-matroid theorem — GREEDY is optimal on every weighted matroid — and follow its proof structure",
    ],
    concepts: [
      {
        term: "Matroid",
        kind: "definition",
        statement: "A **matroid** is a pair $M = (S, \\mathcal{I})$ — a finite ground set $S$ and a family $\\mathcal{I} \\subseteq 2^S$ of **independent sets** — satisfying: **(1)** $\\emptyset \\in \\mathcal{I}$; **(2) hereditary:** $B \\in \\mathcal{I}$ and $A \\subseteq B$ imply $A \\in \\mathcal{I}$; **(3) exchange:** if $A, B \\in \\mathcal{I}$ with $|A| < |B|$, some $x \\in B - A$ has $A \\cup \\{x\\} \\in \\mathcal{I}$.",
        detail: "Whitney extracted these axioms from linear independence of matrix columns — hence the name. Maximal independent sets are **bases**; minimal dependent sets are **circuits**. Linear independence, forests, and the on-time task sets of 16.5 are all matroids.",
      },
      {
        term: "The graphic matroid",
        kind: "definition",
        statement: "For an undirected graph $G = (V, E)$, define $M_G = (S_G, \\mathcal{I}_G)$ with $S_G = E$ and $A \\in \\mathcal{I}_G$ iff $A$ is a **forest** (acyclic). $M_G$ is a matroid: heredity is immediate (a subgraph of a forest is a forest), and exchange follows from counting connected components — worked in the depth tier. Its bases are the spanning forests, all of size $|V| - c$ for $c$ connected components.",
        detail: "Exchange here is the familiar spanning-tree edge swap: given forests $A$ smaller than $B$, some edge of $B$ connects two components of $A$ and can be added without creating a cycle.",
      },
      {
        term: "All bases have the same size",
        kind: "theorem",
        statement: "In any matroid, every maximal independent subset of $S$ — every base — has the same cardinality. If $A, B$ were maximal with $|A| < |B|$, the exchange axiom would supply $x \\in B - A$ with $A \\cup \\{x\\} \\in \\mathcal{I}$, contradicting $A$'s maximality.",
        detail: "For $M_G$ this recovers the graph-theory staple: every spanning forest of a $c$-component graph has exactly $|V| - c$ edges. The proof is two lines — the exchange axiom is doing all the work.",
      },
      {
        term: "Weighted matroids and GREEDY",
        kind: "method",
        statement: "Assign each $x \\in S$ a weight $w(x)$ and let $w(A) = \\sum_{x \\in A} w(x)$. An **optimal subset** is a base of maximum weight. GREEDY sorts $S$ into monotonically decreasing order by weight and adds each element iff independence survives:\n```\nGREEDY(M, w)\n1  A = ∅\n2  sort S(M) into monotonically decreasing order by weight w\n3  for each x in S(M), taken in that order\n4      if A ∪ {x} ∈ I(M)\n5          A = A ∪ {x}\n6  return A\n```",
        detail: "Sorting dominates: $O(n \\lg n)$ plus independence tests. Kruskal is exactly GREEDY on $M_G$ with weights negated (maximizing $-w$ minimizes $w$), the disjoint-set forest supplying fast cycle tests.",
      },
      {
        term: "Theorem: greedy is optimal on every weighted matroid",
        kind: "theorem",
        statement: "If $M = (S, \\mathcal{I})$ is a weighted matroid, GREEDY returns an optimal subset. The proof has three moves: (i) the **first-choice lemma** — the first element greedy accepts lies in some optimal subset, by an exchange argument; (ii) the **contraction** — fixing that element leaves a matroid on which the same reasoning recurs; (iii) induction on $|S|$. The full development, from the exchange axiom up, is the depth tier.",
        detail: "This one theorem re-proves Kruskal and certifies the scheduler of 16.5 — no per-problem exchange argument needed, only the three axioms.",
      },
    ],
    examples: [
      {
        title: "GREEDY on a graphic matroid",
        problem: "A triangle with edges $e_1, e_2, e_3$ of weights $5, 3, 4$. Run GREEDY on $M_G$ and verify optimality exhaustively.",
        steps: [
          { label: "Sort", text: "Decreasing weight: $e_1 (5)$, $e_3 (4)$, $e_2 (3)$." },
          { label: "Take e₁", text: "$A = \\emptyset \\to \\{e_1\\}$: a single edge is a forest — independent." },
          { label: "Take e₃", text: "$\\{e_1, e_3\\}$: two edges on three vertices, a path — still a forest." },
          { label: "Try e₂", text: "$\\{e_1, e_3, e_2\\}$ closes the triangle — a cycle, dependent. Reject." },
          { label: "Exhaustive check", text: "All bases have size $2 = |V| - 1$: $\\{e_1, e_2\\}$ weighs 8, $\\{e_1, e_3\\}$ weighs 9, $\\{e_2, e_3\\}$ weighs 7." },
        ],
        result: "GREEDY returns $\\{e_1, e_3\\}$ with weight 9 — the maximum over all bases. With negated weights the same run picks the minimum spanning tree.",
      },
      {
        title: "The exchange axiom, checked and broken",
        problem: "Verify exchange on the triangle's matroid, then break it on a near miss and see greedy fail.",
        steps: [
          { label: "Exchange holds", text: "$A = \\{e_1\\}$, $B = \\{e_2, e_3\\}$, $|A| < |B|$: candidate $x = e_2$ gives $A \\cup \\{x\\} = \\{e_1, e_2\\}$, a forest — independent. The axiom asks only that some element of $B - A$ extend $A$." },
          { label: "A non-matroid", text: "Let $S = \\{a, b, c\\}$ with $\\mathcal{I} = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a, b\\}\\}$ — hereditary, but take $A = \\{c\\}$, $B = \\{a, b\\}$: neither $\\{c, a\\}$ nor $\\{c, b\\}$ is independent, so exchange fails." },
          { label: "Greedy fails there", text: "Weights $w(c) = 10$, $w(a) = w(b) = 6$: GREEDY takes $c$ first, then can add neither $a$ nor $b$ — it returns weight 10. The optimal base $\\{a, b\\}$ weighs 12." },
        ],
        result: "Drop the exchange axiom and a weight function exists on which greedy is suboptimal — the axiom is not decoration; it is precisely the license greedy needs.",
      },
    ],
    keyTakeaways: [
      "A matroid is a hereditary independence system with the exchange property; forests, linearly independent columns, and on-time task sets are the classic examples.",
      "All bases of a matroid have equal size — a two-line consequence of exchange.",
      "GREEDY (sort by decreasing weight, keep if independent) is optimal on every weighted matroid: Kruskal and the 16.5 scheduler are instances, not coincidences.",
    ],
    quiz: [
      {
        q: "Which of these is NOT one of the three matroid axioms?",
        options: [
          "the empty set is independent",
          "independence is hereditary under taking subsets",
          "whenever $|A| < |B|$ with both independent, $A$ can be extended by an element of $B$",
          "every independent set can be extended to one of size $\\lfloor |S|/2 \\rfloor$",
        ],
        answer: 3,
        explanation: "The axioms are $\\emptyset \\in \\mathcal{I}$, heredity, and exchange. The floor-half claim appears nowhere — independence systems satisfying it need not be matroids.",
      },
      {
        q: "In the graphic matroid $M_G$, the independent sets are exactly:",
        options: ["the spanning trees", "the forests (acyclic edge sets)", "the matchings", "the edge cuts"],
        answer: 1,
        explanation: "Any acyclic edge set qualifies; the maximal ones — spanning forests — are the bases, of size $|V| - c$.",
      },
      {
        q: "Kruskal's MST algorithm is GREEDY on the graphic matroid with:",
        options: [
          "weights used as given",
          "weights negated, so a maximum-weight base is a minimum spanning tree",
          "weights squared",
          "edges sorted by endpoint degree",
        ],
        answer: 1,
        explanation: "GREEDY maximizes; negating each weight turns the maximum-weight base into the minimum-weight spanning forest.",
      },
      {
        q: "All maximal independent subsets of a matroid have the same size because:",
        options: [
          "the hereditary axiom forces it",
          "the exchange axiom would let the smaller one absorb an element of the larger, contradicting maximality",
          "ground sets are finite",
          "weights are nonnegative",
        ],
        answer: 1,
        explanation: "Two maximal sets of different sizes violate exchange — the same two-line argument that gives every spanning forest $|V| - c$ edges.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The exchange engine: why GREEDY cannot fail on a matroid",
        blocks: [
          {
            kind: "para",
            body: "The optimality of greedy on matroids is a chain of four short results, each an application of the exchange axiom: an **augmentation lemma**, a **counting proof that forests form a matroid**, a **first-choice lemma** for GREEDY, and a **contraction lemma** that lets the argument recurse. This tier proves all four and assembles the theorem. It is the deepest structure in the chapter — and the reason one algorithm can be optimal for MSTs, scheduling, and every other matroid at once.",
          },
          {
            kind: "theorem",
            heading: "Augmentation lemma",
            body: "If $A, B \\in \\mathcal{I}$ with $|A| < |B|$, then $A$ can be extended, using only elements of $B$, to an independent set of size $|B|$: there exists $A' \\supseteq A$ with $A' \\subseteq A \\cup B$, $|A'| = |B|$, and $A' \\in \\mathcal{I}$.",
          },
          {
            kind: "proof",
            body: "Induction on the gap $|B| - |A|$. If the gap is 0, take $A' = A$. Otherwise the exchange axiom supplies $x \\in B - A$ with $A \\cup \\{x\\} \\in \\mathcal{I}$; apply the induction hypothesis to the pair $(A \\cup \\{x\\}, B)$, whose gap is one smaller. Each round adds an element of $B$, so the process terminates after exactly $|B| - |A|$ rounds at an independent set of size $|B|$ containing $A$.",
          },
          {
            kind: "theorem",
            heading: "The graphic matroid is a matroid",
            body: "For $M_G = (E, \\mathcal{I}_G)$ with $\\mathcal{I}_G$ the acyclic edge sets: $\\emptyset \\in \\mathcal{I}_G$ and heredity are immediate. For exchange, let $A, B$ be forests with $|A| < |B|$.",
          },
          {
            kind: "proof",
            body: "Count components. The forest $(V, A)$ has $|V| - |A|$ components; $(V, B)$ has $|V| - |B|$, strictly fewer since $|B| > |A|$. Suppose every edge of $B$ had both endpoints inside a single component of $(V, A)$. Then $B$ restricted to a component on $k_i$ vertices is a forest on those vertices, so it has at most $k_i - 1$ edges; summing over the components of $(V, A)$ gives $|B| \\le \\sum (k_i - 1) = |V| - (\\text{number of components of } (V, A)) = |A|$ — contradicting $|A| < |B|$. So some edge $x \\in B$ joins two different components of $(V, A)$, and $A \\cup \\{x\\}$ is still acyclic: independent.",
          },
          {
            kind: "theorem",
            heading: "First-choice lemma",
            body: "Let $x$ be the first element GREEDY accepts (the maximum-weight element with $\\{x\\} \\in \\mathcal{I}$). Then some optimal subset contains $x$.",
          },
          {
            kind: "proof",
            body: "Every element $y$ with $w(y) > w(x)$ was considered first and rejected — so $\\{y\\} \\notin \\mathcal{I}$, and by heredity $y$ lies in **no** independent set at all. Consequently every element of every optimal subset weighs at most $w(x)$. Now let $A$ be an optimal base with $x \\notin A$; we swap $x$ in. If $|A| \\le 1$, then $A = \\{a\\}$ with $w(a) \\le w(x)$, and $\\{x\\}$ is an independent set of the same size and at least the weight — an optimal subset containing $x$. If $|A| \\ge 2$, apply augmentation to $\\{x\\}$ and $A$: there is an independent $A' \\supseteq \\{x\\}$ with $A' \\subseteq \\{x\\} \\cup A$ and $|A'| = |A|$ — so $A' = \\{x\\} \\cup (A - \\{y\\})$ for the single element $y \\in A$ that augmentation never added. Since $|A'| = |A|$ and $A$ is a base, $A'$ is a base too (equal base sizes), and $w(A') = w(A) - w(y) + w(x) \\ge w(A)$ because $w(y) \\le w(x)$. So $A'$ is optimal and contains $x$.",
          },
          {
            kind: "theorem",
            heading: "Contraction lemma",
            body: "Fix $x$ with $\\{x\\} \\in \\mathcal{I}$ and define $M/x = (S', \\mathcal{I}')$ on $S' = \\{y \\in S - \\{x\\} : \\{x, y\\} \\in \\mathcal{I}\\}$ with $\\mathcal{I}' = \\{B \\subseteq S' : B \\cup \\{x\\} \\in \\mathcal{I}\\}$. Then $M/x$ is a matroid, and its optimal subsets $B$ correspond exactly to the optimal subsets of $M$ that contain $x$, via $B \\leftrightarrow B \\cup \\{x\\}$ with $w(B) = w(B \\cup \\{x\\}) - w(x)$.",
          },
          {
            kind: "proof",
            body: "$\\emptyset \\in \\mathcal{I}'$ because $\\{x\\} \\in \\mathcal{I}$. Heredity: a subset of a $B$ with $B \\cup \\{x\\} \\in \\mathcal{I}$ still unions with $\\{x\\}$ to an independent set. Exchange: take $A', B' \\in \\mathcal{I}'$ with $|A'| < |B'|$. Then $A' \\cup \\{x\\}$ and $B' \\cup \\{x\\}$ are independent with $|A' \\cup \\{x\\}| < |B' \\cup \\{x\\}|$, so exchange in $M$ supplies $z \\in (B' \\cup \\{x\\}) - (A' \\cup \\{x\\}) = B' - A'$ with $(A' \\cup \\{x\\}) \\cup \\{z\\} \\in \\mathcal{I}$ — which says exactly $A' \\cup \\{z\\} \\in \\mathcal{I}'$. The weight correspondence is immediate, so optimality transfers across the bijection.",
          },
          {
            kind: "proof",
            heading: "Assembling the theorem",
            body: "Induction on $|S|$. If $S = \\emptyset$, GREEDY returns $\\emptyset$, trivially optimal. Otherwise, by the first-choice lemma some optimal subset contains GREEDY's first pick $x$; by the contraction lemma, the rest of GREEDY's run is exactly GREEDY on the matroid $M/x$ (an element $y$ is addable to $\\{x\\} \\cup A$ iff $y$ is addable within $M/x$), and by the induction hypothesis that run is optimal for $M/x$. The correspondence $B \\mapsto B \\cup \\{x\\}$ upgrades it to an optimal subset of $M$ containing $x$ — which is what GREEDY built.",
          },
          {
            kind: "remark",
            body: "The converse is just as striking — the **Rado–Edmonds theorem**: if a hereditary independence system admits an optimal greedy algorithm for *every* weight function, the system is a matroid. The exchange axiom is not merely sufficient for greedy optimality; it is necessary. Whenever you find a feasibility system where some weighting breaks greedy (as in Example 2 above), you have located a failure of exchange — and vice versa.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 16.5
  {
    sectionId: "clrs-ch16-s5",
    readingTime: 6,
    intro: "Deadlines with penalties: a one-processor to-do list where each unit-time task either makes its deadline or pays. Minimizing total penalty looks combinatorially explosive, but the chapter's punchline is that the feasible on-time sets form a matroid — so the greedy algorithm of 16.4, sort by penalty and keep what fits, is provably optimal. The feasibility test collapses to one line of arithmetic: count the tasks with deadline at most $t$.",
    objectives: [
      "Model unit-time scheduling with deadlines and penalties, and switch to the complementary maximization",
      "Apply the $N_t(A) \\le t$ characterization to decide which task sets can finish entirely on time",
      "Run the greedy-by-penalty algorithm and prove optimality via the matroid theorem",
    ],
    concepts: [
      {
        term: "The scheduling problem",
        kind: "definition",
        statement: "Unit-time tasks $a_1, \\ldots, a_n$ with integer deadlines $d_i \\in \\{1, \\ldots, n\\}$ (measured in time slots) and penalties $w_i \\ge 0$. A schedule runs one task per slot $t = 1, \\ldots, n$; a task that finishes after its deadline is **late** and incurs $w_i$. Minimizing the total late penalty equals **maximizing the total on-time penalty** $\\sum_{\\text{on time}} w_i$ — the complementary problem the greedy will solve.",
        detail: "The switch of objective is the crucial reformulation: among all schedules of all subsets, we want the feasible subset with maximum weight — a weighted matroid optimum in disguise.",
      },
      {
        term: "The independence characterization",
        kind: "theorem",
        statement: "Let $N_t(A) = |\\{a_i \\in A : d_i \\le t\\}|$ count tasks in $A$ with deadline at most $t$. A set $A$ of unit-time tasks can all be scheduled on time **iff $N_t(A) \\le t$ for every $t = 1, \\ldots, n$.** (⇐) schedule $A$ in increasing-deadline order (EDF): before slot $t$, at most $t$ of $A$'s tasks have deadlines $\\le t$, so EDF never overruns. (⇒) the tasks with deadlines $\\le t$ must all occupy slots $1..t$ to be on time, and there are only $t$ such slots.",
        detail: "This is a Hall-type counting condition — a bipartite matching existence theorem collapsed into one inequality per time point. It makes feasibility checkable in $O(n)$ per query.",
      },
      {
        term: "The system is a matroid",
        kind: "theorem",
        statement: "Define $\\mathcal{I} = \\{A : N_t(A) \\le t \\text{ for all } t\\}$. Then $(S, \\mathcal{I})$ is a matroid. Heredity: removing tasks only decreases every $N_t$. Exchange: given independent $A, B$ with $|A| < |B|$, some task of $B - A$ keeps $A$ independent — if every candidate $a \\in B - A$ violated some constraint $t_a$, a pigeonhole count over the deadlines shows $|B| \\le |A|$, a contradiction.",
        detail: "This theorem is what licenses greedy: the 16.4 optimality result applies verbatim once the axioms hold.",
      },
      {
        term: "The greedy scheduler",
        kind: "method",
        statement: "Sort tasks by decreasing penalty. Add each task to $A$ iff $A$ stays independent ($N_t(A) \\le t$ survives). Then schedule $A$ by earliest deadline and run the rejected tasks late, in any order. By the matroid theorem, $A$ maximizes on-time penalty, so the schedule minimizes total late penalty. A naive implementation tests each candidate in $O(n)$ for $O(n^2)$ overall; the deadline arithmetic can be organized to reach $O(n \\lg n)$.",
        detail: "Note what greedy sorts by — penalty, not deadline. Deadlines only enter through the feasibility test $N_t(A) \\le t$.",
      },
      {
        term: "Why unit time is essential",
        kind: "insight",
        statement: "The matroid structure — and with it greedy optimality — evaporates the moment tasks have arbitrary processing times: minimizing total late penalty with general durations is NP-hard. The counting condition $N_t(A) \\le t$ is an exact theory of unit-length jobs only.",
        detail: "This is a recurring pattern in scheduling theory: one clean axiom change (durations) moves a problem from greedy-solvable to NP-hard.",
      },
    ],
    figures: [
      {
        caption: "Seven unit-time tasks (penalty $w$, deadline $d$): $a_1(70, 4)$, $a_2(60, 2)$, $a_3(50, 4)$, $a_4(40, 3)$, $a_5(30, 1)$, $a_6(20, 4)$, $a_7(10, 6)$. **Top** — earliest-deadline-first runs everything in deadline order: $a_3$, $a_6$, $a_7$ finish late, total penalty $80$. **Bottom** — the matroid greedy keeps $\\{a_2, a_4, a_1, a_3, a_7\\}$ on time (EDF within the chosen set) and lets only $a_5$, $a_6$ run late: penalty $50$. Amber dashed blocks are late; greedy keeps the *profitable feasible set*, which is not the most tasks nor the earliest deadlines.",
        svg: `<svg viewBox="0 0 720 260" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Two schedules of seven tasks: earliest-deadline-first versus greedy by penalty"><g font-size="10.5" fill="currentColor" opacity="0.7" text-anchor="middle"><text x="100" y="16">slot 1</text><text x="188" y="16">slot 2</text><text x="276" y="16">slot 3</text><text x="364" y="16">slot 4</text><text x="452" y="16">slot 5</text><text x="540" y="16">slot 6</text><text x="628" y="16">slot 7</text></g><g stroke="currentColor" opacity="0.12"><line x1="56" y1="24" x2="56" y2="206"/><line x1="144" y1="24" x2="144" y2="206"/><line x1="232" y1="24" x2="232" y2="206"/><line x1="320" y1="24" x2="320" y2="206"/><line x1="408" y1="24" x2="408" y2="206"/><line x1="496" y1="24" x2="496" y2="206"/><line x1="584" y1="24" x2="584" y2="206"/><line x1="672" y1="24" x2="672" y2="206"/></g><text x="56" y="42" font-size="12.5" font-weight="600" fill="currentColor">A — earliest-deadline-first (weight-blind)</text><g><rect x="60" y="48" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="148" y="48" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="236" y="48" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="324" y="48" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="412" y="48" width="80" height="44" rx="4" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/><rect x="500" y="48" width="80" height="44" rx="4" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/><rect x="588" y="48" width="80" height="44" rx="4" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/></g><g font-size="10" fill="#f59e0b" text-anchor="middle"><text x="452" y="42">late</text><text x="540" y="42">late</text><text x="628" y="42">late</text></g><g font-size="13" font-weight="600" fill="currentColor" text-anchor="middle"><text x="100" y="66">a₅</text><text x="188" y="66">a₂</text><text x="276" y="66">a₄</text><text x="364" y="66">a₁</text><text x="452" y="66">a₃</text><text x="540" y="66">a₆</text><text x="628" y="66">a₇</text></g><g font-size="9.5" fill="currentColor" opacity="0.8" text-anchor="middle"><text x="100" y="82">d=1 · w=30</text><text x="188" y="82">d=2 · w=60</text><text x="276" y="82">d=3 · w=40</text><text x="364" y="82">d=4 · w=70</text><text x="452" y="82">d=4 · w=50</text><text x="540" y="82">d=4 · w=20</text><text x="628" y="82">d=6 · w=10</text></g><text x="672" y="116" font-size="11" fill="currentColor" text-anchor="end">on-time penalty 200 · late penalty 80</text><text x="56" y="148" font-size="12.5" font-weight="600" fill="currentColor">B — greedy by penalty (matroid)</text><g><rect x="60" y="156" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="148" y="156" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="236" y="156" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="324" y="156" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="412" y="156" width="80" height="44" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1.25"/><rect x="500" y="156" width="80" height="44" rx="4" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/><rect x="588" y="156" width="80" height="44" rx="4" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/></g><g font-size="10" fill="#f59e0b" text-anchor="middle"><text x="540" y="150">late</text><text x="628" y="150">late</text></g><g font-size="13" font-weight="600" fill="currentColor" text-anchor="middle"><text x="100" y="174">a₂</text><text x="188" y="174">a₄</text><text x="276" y="174">a₁</text><text x="364" y="174">a₃</text><text x="452" y="174">a₇</text><text x="540" y="174">a₅</text><text x="628" y="174">a₆</text></g><g font-size="9.5" fill="currentColor" opacity="0.8" text-anchor="middle"><text x="100" y="190">d=2 · w=60</text><text x="188" y="190">d=3 · w=40</text><text x="276" y="190">d=4 · w=70</text><text x="364" y="190">d=4 · w=50</text><text x="452" y="190">d=6 · w=10</text><text x="540" y="190">d=1 · w=30</text><text x="628" y="190">d=4 · w=20</text></g><text x="672" y="224" font-size="11" fill="currentColor" text-anchor="end">on-time penalty 230 · late penalty 50</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Greedy scheduling, seven tasks",
        problem: "Tasks (penalty, deadline): $a_1(70, 4)$, $a_2(60, 2)$, $a_3(50, 4)$, $a_4(40, 3)$, $a_5(30, 1)$, $a_6(20, 4)$, $a_7(10, 6)$. Run the greedy scheduler.",
        steps: [
          { label: "Order", text: "By decreasing penalty: $a_1, a_2, a_3, a_4, a_5, a_6, a_7$." },
          { label: "a₁", text: "$A = \\{a_1\\}$: $N_4 = 1 \\le 4$. Take." },
          { label: "a₂", text: "$N_2 = 1 \\le 2$, $N_4 = 2 \\le 4$. Take." },
          { label: "a₃", text: "$N_4 = 3 \\le 4$. Take." },
          { label: "a₄", text: "$N_3 = 1$, $N_4 = 4 \\le 4$. Take — the deadline-4 budget is now exactly full." },
          { label: "a₅", text: "Adding $a_5$ ($d = 1$) forces $N_4 = 5 > 4$. Reject — even though its own $N_1 = 1$ is fine." },
          { label: "a₆", text: "$N_4 = 5 > 4$. Reject." },
          { label: "a₇", text: "$N_4 = 4$, $N_5 = 4 \\le 5$, $N_6 = 5 \\le 6$. Take." },
          { label: "Schedule", text: "EDF on $A$: $a_2$@1, $a_4$@2, $a_1$@3, $a_3$@4, $a_7$@5 — every deadline met. $a_5, a_6$ run late." },
        ],
        result: "On-time set $\\{a_1, a_2, a_3, a_4, a_7\\}$ with penalty 230 on time; late penalty $30 + 20 = 50$ — optimal by the matroid theorem.",
      },
      {
        title: "EDF alone is not optimal",
        problem: "Schedule the same seven tasks purely by earliest deadline, everything else ignored.",
        steps: [
          { label: "Deadline order", text: "$a_5 (d{=}1)$, $a_2 (2)$, $a_4 (3)$, then $a_1, a_3, a_6$ all at $d = 4$, then $a_7 (6)$." },
          { label: "Slots fill", text: "$a_5$@1, $a_2$@2, $a_4$@3, $a_1$@4 all meet their deadlines." },
          { label: "Overflow", text: "$a_3$@5 misses $d = 4$; $a_6$@6 misses $d = 4$; $a_7$@7 misses $d = 6$." },
          { label: "Cost", text: "Late penalty $50 + 20 + 10 = 80$, versus greedy's 50." },
        ],
        result: "Meeting deadlines greedily is weight-blind: EDF strands 30 dollars of penalty that the matroid greedy recovers by dropping the tight-deadline $a_5$ and keeping the slack-deadline $a_7$ instead.",
      },
    ],
    keyTakeaways: [
      "On-time feasibility of a task set $A$ is exactly $N_t(A) \\le t$ for all $t$ — a pure counting condition over deadlines.",
      "Those feasible sets form a matroid, so sort-by-penalty greedy is optimal — 16.4's theorem does all the work.",
      "Schedule the chosen set EDF; the rest run late. Non-unit processing times destroy the matroid property (the general problem is NP-hard).",
    ],
    quiz: [
      {
        q: "A set $A$ of unit-time tasks can all meet their deadlines iff:",
        options: [
          "$A$ sorted by deadline has no ties",
          "$N_t(A) \\le t$ for every $t$, where $N_t$ counts tasks in $A$ with deadline $\\le t$",
          "the largest deadline in $A$ is at most $|A|$",
          "no two tasks of $A$ share a deadline",
        ],
        answer: 1,
        explanation: "The tasks with deadline $\\le t$ must occupy slots $1..t$ — at most $t$ of them fit; EDF shows the condition is also sufficient.",
      },
      {
        q: "The greedy algorithm of this section processes tasks in order of:",
        options: ["increasing deadline", "decreasing deadline", "decreasing penalty", "decreasing penalty-to-deadline ratio"],
        answer: 2,
        explanation: "Penalty is the weight; deadlines enter only through the feasibility test $N_t(A) \\le t$.",
      },
      {
        q: "In the 7-task example, greedy rejects $a_5$ (penalty 30, $d = 1$) but later accepts $a_7$ (penalty 10, $d = 6$) because:",
        options: [
          "$a_5$ takes two slots",
          "adding $a_5$ would push $N_4$ to 5 > 4, while $a_7$ fits every $N_t$ constraint",
          "$a_7$ has an earlier deadline",
          "ties are broken alphabetically",
        ],
        answer: 1,
        explanation: "The four deadline-4 tasks plus $a_2$ exhaust the $t \\le 4$ capacity; $a_5$'s own deadline-1 slot is free, but the counting condition is global — and $a_7$'s late deadline costs nothing.",
      },
      {
        q: "After greedy selects the on-time set $A$, the schedule for $A$ that meets all deadlines is:",
        options: ["any permutation", "earliest-deadline-first order", "decreasing penalty order", "alternating late and early tasks"],
        answer: 1,
        explanation: "The (⇐) direction of the characterization: with $N_t(A) \\le t$ holding, EDF never overruns a deadline.",
      },
    ],
  },
]
