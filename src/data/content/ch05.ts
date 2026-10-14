import type { SectionContent } from '../library'

// ============================================================
// Rosen, Discrete Mathematics and Its Applications (8th ed.)
// Chapter 5 — Induction and Recursion (Sections 5.1–5.5)
// ============================================================

export const ch5Content: SectionContent[] = [
  // ---------- 5.1 Mathematical Induction ----------
  {
    sectionId: "rosen-ch5-s1",
    readingTime: 12,
    intro: "How do you prove something is true for every positive integer when you cannot check infinitely many cases? Mathematical induction is the domino strategy: knock over the first case, and prove that each falling case knocks over the next. This single principle verifies sums, inequalities, divisibility facts, and later the correctness of algorithms.",
    objectives: [
      "State the principle of mathematical induction and identify its two obligatory parts",
      "Explain why induction is valid (well-ordering of the positive integers)",
      "Prove summation identities such as 1 + 2 + ⋯ + n = n(n+1)/2 by induction",
      "Prove inequalities ($2^n < n!$) and divisibility statements ($3 \\mid n^3 + 2n$) by induction",
      "Recognize and avoid classic induction pitfalls",
    ],
    concepts: [
      {
        term: "Well-ordering property",
        kind: "definition",
        statement: "Every nonempty set of positive integers (equivalently, nonnegative integers) has a **least element**. This innocuous fact is the foundation on which all forms of induction stand.",
        detail: "It fails for the reals: the open interval (0, 1) has no least element — induction is an integer-only tool.",
      },
      {
        term: "Principle of mathematical induction",
        kind: "theorem",
        statement: "To prove that P(n) is true for all positive integers n: (1) **Basis step**: prove P(1); (2) **Inductive step**: prove that for every positive integer k, P(k) → P(k+1). Then P(n) holds for all n ≥ 1.",
        detail: "The two parts are like dominoes: the basis pushes the first one, the inductive step guarantees each falling domino topples the next — so they all fall.",
      },
      {
        term: "Anatomy of the inductive step",
        kind: "method",
        statement: "Assume **P(k)** for an arbitrary fixed k ≥ 1 (the **inductive hypothesis**), then derive **P(k+1)** — usually by writing out the (k+1)-case and finding the k-case inside it. State the hypothesis explicitly; never assume P(k+1).",
        detail: "Template: (1) basis: verify P(1); (2) hypothesis: assume P(k) for an arbitrary k; (3) combine the hypothesis with algebra to reach P(k+1); (4) conclude by induction.",
      },
      {
        term: "Why induction is valid",
        kind: "insight",
        statement: "Suppose P(n) fails for some n. By well-ordering there is a least counterexample s. It is not 1 (basis step), so s − 1 ≥ 1 satisfies P(s−1); but the inductive step applied with k = s − 1 forces P(s) — a contradiction. Hence no counterexample exists.",
        detail: "This least-counterexample argument is itself a preview of section 5.2's well-ordering proofs.",
      },
      {
        term: "Starting anywhere",
        kind: "insight",
        statement: "Induction can begin at any integer b: prove P(b), and P(k) → P(k+1) for all k ≥ b; conclude P(n) for all n ≥ b.",
        detail: "Example: $2^n < n!$ is false for n = 1, 2, 3 and starts at b = 4. Choosing the right starting point is part of designing the proof.",
      },
      {
        term: "What induction proves best",
        kind: "insight",
        statement: "Induction is the tool for statements P(n) indexed by a single integer: closed forms of sums (∑i, ∑i², geometric series), inequalities between sequences, divisibility and congruence claims, counting statements, and — in section 5.4 — correctness and complexity of algorithms.",
        detail: "It is not a method for statements about arbitrary real numbers or uncounted objects; those need other proof techniques from chapter 1.",
      },
      {
        term: "Why the base case is not optional",
        kind: "insight",
        statement: "A valid inductive step with no basis step proves nothing: P(n): $2n < 2^n$ satisfies the inductive step for all k ≥ 1 (if $2k < 2^k$ then $2(k+1) = 2k + 2 < 2^k + 2^k = 2^{k+1}$), yet P(1) and P(2) are false.",
        detail: "The horse paradox — a fake proof that all horses are the same color — breaks exactly at the step from 1 to 2, where the two overlapping subsets become disjoint.",
      },
    ],
    examples: [
      {
        title: "Gauss's sum by induction",
        problem: "Prove that 1 + 2 + ⋯ + n = n(n+1)/2 for every n ≥ 1.",
        steps: [
          { label: "Basis step", text: "n = 1: the left side is 1 and the right side is 1·2/2 = 1." },
          { label: "Inductive hypothesis", text: "Assume 1 + 2 + ⋯ + k = k(k+1)/2 for an arbitrary k ≥ 1." },
          { label: "Inductive step", text: "1 + 2 + ⋯ + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k/2 + 1) = (k+1)(k+2)/2." },
          { label: "Conclusion", text: "The formula holds for k + 1, so by induction it holds for all n ≥ 1." },
        ],
        result: "1 + 2 + ⋯ + n = n(n+1)/2 for all positive integers n.",
      },
      {
        title: "An exponential beaten by a factorial",
        problem: "Prove that $2^n < n!$ for all n ≥ 4.",
        steps: [
          { label: "Basis step", text: "n = 4: 2⁴ = 16 < 24 = 4!." },
          { label: "Inductive hypothesis", text: "Assume $2^k < k!$ for an arbitrary k ≥ 4." },
          { label: "Inductive step", text: "$2^{k+1} = 2\\cdot 2^k < 2\\cdot k!$. Since k ≥ 4, we have 2 < k + 1, so $2\\cdot k! < (k+1)\\cdot k! = (k+1)!$." },
          { label: "Conclusion", text: "$2^{k+1} < (k+1)!$, completing the step; induction finishes the proof." },
        ],
        result: "$2^n < n!$ for every n ≥ 4 — factorials eventually dwarf every fixed exponential.",
      },
      {
        title: "Divisibility by induction",
        problem: "Prove that 3 divides n³ + 2n for every n ≥ 1.",
        steps: [
          { label: "Basis step", text: "n = 1: 1³ + 2·1 = 3, divisible by 3." },
          { label: "Inductive hypothesis", text: "Assume 3 | k³ + 2k for an arbitrary k ≥ 1." },
          { label: "Inductive step", text: "(k+1)³ + 2(k+1) = k³ + 3k² + 3k + 1 + 2k + 2 = (k³ + 2k) + 3(k² + k + 1)." },
          { label: "Conclusion", text: "The first group is divisible by 3 (hypothesis) and the second is a multiple of 3, so 3 | (k+1)³ + 2(k+1); induction completes the proof." },
        ],
        result: "3 | n³ + 2n for all n ≥ 1.",
      },
    ],
    keyTakeaways: [
      "Induction = basis step (P(1)) + inductive step (P(k) → P(k+1)); both parts are mandatory",
      "Its validity follows from the well-ordering property via a least-counterexample argument",
      "Induction can start at any base b and proves P(n) for all n ≥ b",
      "Signature successes: closed forms of sums, inequalities, divisibility, tiling and counting statements",
      "The inductive hypothesis is P(k) only — never assume P(k+1), and never skip the base case",
    ],
    quiz: [
      {
        q: "In the inductive step of a proof of P(n) for all n ≥ 1, you may assume:",
        options: ["P(k+1) for an arbitrary k", "P(k) for an arbitrary fixed k ≥ 1 — and nothing else about P", "that P holds for all n at once", "P(k) and P(k+1) together"],
        answer: 1,
        explanation: "The inductive hypothesis is P(k) for one arbitrary k. Assuming P(k+1) assumes the goal; assuming P for all n is circular.",
      },
      {
        q: "Using 1 + 2 + ⋯ + n = n(n+1)/2, the sum 1 + 2 + ⋯ + 100 equals:",
        options: ["10,000", "5,050", "4,950", "10,100"],
        answer: 1,
        explanation: "100·101/2 = 5,050.",
      },
      {
        q: "Which step is NOT a legitimate part of an induction proof?",
        options: ["Verifying P(1) by direct computation", "Assuming P(k) for an arbitrary k ≥ 1", "Skipping the basis step because the inductive step checks out", "Deriving P(k+1) from the inductive hypothesis"],
        answer: 2,
        explanation: "Without the basis step there is no first domino. For example P(n): $2n < 2^n$ has a valid inductive step but is false at n = 1 and n = 2.",
      },
      {
        q: "1 + 3 + 5 + ⋯ + 13 (the first seven odd numbers) equals:",
        options: ["42", "64", "36", "49"],
        answer: 3,
        explanation: "The first n odd numbers sum to n²; here n = 7 and 7² = 49.",
      },
    ],
  },

  // ---------- 5.2 Strong Induction and Well-Ordering ----------
  {
    sectionId: "rosen-ch5-s2",
    readingTime: 10,
    intro: "Some claims cannot be built from just the previous case — Fibonacci numbers need the last two, and factorizations need everything smaller. Strong induction licenses using all earlier cases at once, and it is provably equivalent to ordinary induction and the well-ordering property: three interchangeable views of the same idea.",
    objectives: [
      "State strong induction and explain when it is needed",
      "Explain the equivalence of ordinary induction, strong induction, and well-ordering",
      "Prove existence of prime factorizations by strong induction",
      "Solve postage-stamp and tiling problems with strong induction",
      "Structure proofs by least counterexample (well-ordering)",
    ],
    concepts: [
      {
        term: "Strong induction principle",
        kind: "theorem",
        statement: "To prove P(n) for all n ≥ b: (1) **Basis**: prove P(b) — sometimes several initial values; (2) **Inductive step**: for every k > b, prove that **[P(b) ∧ P(b+1) ∧ ⋯ ∧ P(k−1)] → P(k)**. Then P(n) holds for all n ≥ b.",
        detail: "The hypothesis is the entire history up to k − 1, not just the single previous case.",
      },
      {
        term: "Ordinary vs strong induction",
        kind: "insight",
        statement: "Strong induction simply assumes more, so every ordinary induction proof is automatically a strong one. Conversely, strong induction of P can be recast as ordinary induction of the stronger statement Q(n) = P(b) ∧ P(b+1) ∧ ⋯ ∧ P(n). The two principles — and well-ordering — are logically equivalent.",
        detail: "Use whichever form makes the proof read cleanest; they have exactly the same power.",
      },
      {
        term: "When strong induction is the right tool",
        kind: "insight",
        statement: "Reach for it when the case for n uses several earlier cases: recurrences like fₙ = fₙ₋₁ + fₙ₋₂, factorizations n = ab (both factors strictly smaller than n), games where a move shrinks the problem by 4 or 5 units, and divide-and-conquer recursions.",
        detail: "Rule of thumb: if the recursive structure looks at n − 1 only, ordinary induction suffices; anything broader needs the strong form.",
      },
      {
        term: "Multiple base cases",
        kind: "method",
        statement: "Strong induction proofs often need a run of initial values before the step can take over: for postage made of 4-cent and 5-cent stamps, verify 12, 13, 14, 15 directly, then for n ≥ 16 use the hypothesis at n − 4.",
        detail: "The number of base cases is dictated by how far back the inductive step reaches.",
      },
      {
        term: "Well-ordering as a proof technique",
        kind: "method",
        statement: "To prove that every n ≥ b has property P: assume the set S = {n ≥ b : P(n) is false} is nonempty; let s = min S (well-ordering); show that some smaller element is also a counterexample — or that P(s) actually holds — either way a contradiction.",
        detail: "This least-counterexample pattern is the mirror image of induction and is often the shortest route to statements like the division algorithm or irrationality proofs.",
      },
      {
        term: "Prime factorization exists (FTA, existence half)",
        kind: "theorem",
        statement: "Every integer n ≥ 2 is prime or a product of primes, by strong induction: if n is not prime, then n = ab with 1 < a, b < n; by the inductive hypothesis a and b are each products of primes; concatenating the two factorizations factors n.",
        detail: "Uniqueness (the other half of the Fundamental Theorem of Arithmetic) is proved separately using the fact that a prime dividing a product divides one of the factors.",
      },
      {
        term: "L-tromino tiling theorem",
        kind: "insight",
        statement: "Every $2^n \\times 2^n$ checkerboard with one square removed can be tiled by L-shaped trominoes. Induction on n: split the $2^{n+1} \\times 2^{n+1}$ board into four quadrants; place one tromino at the center covering one corner square of each of the three quadrants not containing the missing square; every quadrant is now a deficient $2^n$ board, tileable by hypothesis.",
        detail: "A constructive induction: the proof literally tells you where to put the trominoes — $4^n - 1$ of them always suffice.",
      },
    ],
    examples: [
      {
        title: "The postage stamp problem",
        problem: "Show that every postage amount of at least 12 cents can be formed using only 4-cent and 5-cent stamps.",
        steps: [
          { label: "Base cases", text: "12 = 4+4+4; 13 = 4+4+5; 14 = 4+5+5; 15 = 5+5+5." },
          { label: "Strong hypothesis", text: "For n ≥ 16, assume every amount from 12 up to n − 1 is formable." },
          { label: "Inductive step", text: "n − 4 ≥ 12, so n − 4 is formable; add one more 4-cent stamp to reach n." },
          { label: "Sharpness", text: "11 cents is impossible (4a + 5b = 11 has no nonnegative solution), so 12 is the exact threshold." },
        ],
        result: "Every amount ≥ 12 cents is formable from 4-cent and 5-cent stamps.",
      },
      {
        title: "Every n ≥ 2 has a prime factor",
        problem: "Use strong induction — or well-ordering — to show every integer n ≥ 2 is prime or a product of primes.",
        steps: [
          { label: "Strong induction", text: "Basis: n = 2 is prime. For n ≥ 3, assume every m with 2 ≤ m < n is prime or a product of primes." },
          { label: "Case split", text: "If n is prime, done. Otherwise n = ab with 1 < a, b < n." },
          { label: "Apply the hypothesis", text: "Both a and b are products of primes; multiplying the factorizations gives one for n." },
          { label: "Well-ordering version", text: "If some n ≥ 2 had no prime factorization, the least such n is composite, n = ab with smaller numbers a, b — which by minimality DO factor, so n factors too. Contradiction." },
        ],
        result: "Every integer ≥ 2 is prime or a product of primes (existence half of the Fundamental Theorem of Arithmetic).",
      },
      {
        title: "Deficient chessboards",
        problem: "Prove that a $2^n \\times 2^n$ board missing any one square can be tiled by L-trominoes.",
        steps: [
          { label: "Basis", text: "n = 1: a 2×2 board minus one square is exactly one L-tromino." },
          { label: "Divide", text: "For the inductive step, split the $2^{k+1} \\times 2^{k+1}$ board into four $2^k \\times 2^k$ quadrants; the missing square lies in one of them." },
          { label: "Place the center tromino", text: "Put one tromino at the center of the board covering one corner square of each of the other three quadrants." },
          { label: "Recurse", text: "Each quadrant is now a $2^k \\times 2^k$ board missing one square — tile all four by the inductive hypothesis." },
        ],
        result: "Every deficient $2^n \\times 2^n$ board is tileable — the proof is itself the tiling algorithm.",
      },
    ],
    keyTakeaways: [
      "Strong induction assumes all cases from b up to k − 1; ordinary induction assumes only the immediately previous one",
      "Ordinary induction, strong induction, and well-ordering are equivalent — pick the most convenient form",
      "Strong induction often needs several base cases",
      "Postage, prime factorization, and tiling problems are its natural habitat",
      "Well-ordering powers least-counterexample proofs — the mirror image of induction",
    ],
    quiz: [
      {
        q: "In the inductive step of strong induction (proving P(n) for all n ≥ b), you may assume:",
        options: ["only P(k−1)", "P(j) for every j with b ≤ j < k", "P(n) for all n at once", "only P(k)"],
        answer: 1,
        explanation: "The strong inductive hypothesis is the entire history P(b), …, P(k−1) — that is exactly what makes it strong.",
      },
      {
        q: "With 4-cent and 5-cent stamps available, the smallest amount from which every larger amount is formable is:",
        options: ["8 cents", "20 cents", "12 cents", "16 cents"],
        answer: 2,
        explanation: "12, 13, 14, 15 are formable directly, and every n ≥ 16 reduces to n − 4; but 11 cents is impossible.",
      },
      {
        q: "The well-ordering property states that every nonempty set of positive integers:",
        options: ["has a greatest element", "is finite", "has a least element", "contains a prime"],
        answer: 2,
        explanation: "Well-ordering: any nonempty set of positive integers contains a smallest member — the engine behind least-counterexample proofs.",
      },
      {
        q: "Proving that every n ≥ 2 factors into primes most naturally uses strong induction because:",
        options: ["primes cannot be listed", "when n = ab, both a and b are smaller than n, so the proof may need the hypothesis at values other than n − 1", "ordinary induction is invalid for products", "well-ordering fails for composite numbers"],
        answer: 1,
        explanation: "The factors a and b can be anywhere below n, not just n − 1, so the hypothesis must cover all smaller values.",
      },
    ],
  },

  // ---------- 5.3 Recursive Definitions and Structural Induction ----------
  {
    sectionId: "rosen-ch5-s3",
    readingTime: 12,
    intro: "Recursion defines objects in terms of smaller copies of themselves: factorial from factorial, Fibonacci from Fibonacci, well-formed formulas from smaller formulas, trees from smaller trees. Structural induction is the matching proof technique — check the seeds and check every growth rule — and it validates every recursively defined structure in computer science.",
    objectives: [
      "Write recursive definitions of functions: factorial, Fibonacci, exponentiation",
      "Write recursive definitions of sets and strings with basis and recursive clauses",
      "Recognize recursively defined structures: well-formed formulas, rooted and full binary trees",
      "Prove properties of recursively defined structures by structural induction",
      "Explain why structural induction is a valid proof method",
    ],
    concepts: [
      {
        term: "Recursively defined functions",
        kind: "definition",
        statement: "A recursive definition of f on the nonnegative integers gives a **basis** (the value f(0)) and a **recursive clause** defining f(n+1) in terms of f(0), …, f(n).",
        detail: "Factorial: 0! = 1 and (n+1)! = (n+1)·n!. Powers: $a^0 = 1$ and $a^{n+1} = a^n \\cdot a$. Both compute f(n) with n applications of the clause.",
      },
      {
        term: "Fibonacci numbers",
        kind: "definition",
        statement: "**f₀ = 0, f₁ = 1, and fₙ = fₙ₋₁ + fₙ₋₂ for n ≥ 2.** The reference to two earlier values is why proofs about Fibonacci numbers typically need strong induction or induction with a strengthened hypothesis.",
        detail: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, … The number of bit strings of length n with no two consecutive 0s is fₙ₊₂ (a₁ = 2, a₂ = 3, aₙ = aₙ₋₁ + aₙ₋₂).",
      },
      {
        term: "Recursively defined sets",
        kind: "definition",
        statement: "A recursive definition of a set S specifies: (1) **Basis**: certain initial elements are in S; (2) **Recursive step**: rules that build new elements of S from elements already known to be in S; (3) **Exclusion clause**: nothing else belongs to S — S is the smallest set satisfying (1) and (2).",
        detail: "Without the exclusion clause the definition is meaningless: every larger set containing the seeds and closed under the rules would also qualify.",
      },
      {
        term: "Strings over an alphabet",
        kind: "definition",
        statement: "The set Σ* of all strings over alphabet Σ: **basis**: the empty string λ ∈ Σ*; **recursive step**: if w ∈ Σ* and x ∈ Σ, then wx ∈ Σ*. Length: |λ| = 0 and |wx| = |w| + 1. Reversal: $\\lambda^R = \\lambda$ and $(wa)^R = a \\cdot w^R$ for a letter a and string w.",
        detail: "Every string is either empty or a shorter string plus one final letter — which is exactly why string algorithms recurse on the last character.",
      },
      {
        term: "Well-formed formulas",
        kind: "definition",
        statement: "The set of well-formed propositional formulas: **basis**: T, F, and each propositional variable pᵢ are wffs; **recursive step**: if p and q are wffs, then (¬p), (p ∧ q), (p ∨ q), (p → q), (p ↔ q) are wffs. The same pattern defines arithmetic expressions and other formal languages.",
        detail: "Chapter 12's Boolean expressions and chapter 13's grammars are built on this kind of definition — the parentheses make parsing unambiguous.",
      },
      {
        term: "Rooted trees and full binary trees",
        kind: "definition",
        statement: "**Rooted trees**: basis: a single vertex r is a rooted tree; recursive step: join a new root vertex to the roots of one or more disjoint rooted trees. **Full binary trees**: basis: a single vertex; recursive step: if T₁ and T₂ are disjoint full binary trees, join their roots r₁, r₂ under a new root r. Every full binary tree arises this way.",
        detail: "Recursion matches the data structure perfectly: tree algorithms (chapter 11 traversals) are structural inductions in disguise.",
      },
      {
        term: "Structural induction",
        kind: "method",
        statement: "To prove that every element of a recursively defined set has property P: (1) **Basis**: show every basis element has P; (2) **Recursive step**: show each construction rule preserves P — if the inputs have P, the output has P. Then all elements have P.",
        detail: "The exclusion clause guarantees there is nothing else to check: every element is reachable from the basis by finitely many rule applications.",
      },
      {
        term: "Why structural induction is valid",
        kind: "insight",
        statement: "Rank each element by its construction depth (the number of rule applications needed to build it); structural induction is ordinary induction on that number, so it inherits validity from well-ordering.",
        detail: "The dominoes are stages of construction rather than integers — but the logic is the same.",
      },
    ],
    examples: [
      {
        title: "A recursive set and its property",
        problem: "Let S be defined by: 1 ∈ S; if x ∈ S then x + 2 ∈ S. Prove every element of S is odd.",
        steps: [
          { label: "Basis", text: "The only basis element, 1, is odd." },
          { label: "Recursive step", text: "Assume x is odd. Then x + 2 is odd: adding 2 preserves parity." },
          { label: "Apply structural induction", text: "Every element is built from 1 by finitely many +2 steps, so every element is odd. The exclusion clause rules out anything else." },
          { label: "Bonus", text: "In fact S is exactly the set of odd positive integers: 1, 3, 5, 7, …" },
        ],
        result: "All elements of S are odd — and S = {1, 3, 5, 7, …}.",
      },
      {
        title: "Leaves vs internal vertices in full binary trees",
        problem: "Prove by structural induction: every full binary tree T satisfies l(T) = i(T) + 1, where l(T) is the number of leaves and i(T) the number of internal vertices.",
        steps: [
          { label: "Basis", text: "A single vertex: l = 1, i = 0, and 1 = 0 + 1." },
          { label: "Setup the step", text: "T is built from subtrees T₁ and T₂ under a new root. Then l(T) = l(T₁) + l(T₂) and i(T) = i(T₁) + i(T₂) + 1 (the new root is internal)." },
          { label: "Apply the hypothesis", text: "l(T) = (i(T₁) + 1) + (i(T₂) + 1) = i(T₁) + i(T₂) + 1 + 1 = i(T) + 1." },
          { label: "Conclude", text: "By structural induction the identity holds for every full binary tree." },
        ],
        result: "l(T) = i(T) + 1 for every full binary tree — e.g., a tree with 7 leaves has 6 internal vertices.",
      },
      {
        title: "Bit strings without consecutive 0s",
        problem: "Let aₙ count bit strings of length n with no two consecutive 0s. Show aₙ = fₙ₊₂ (Fibonacci) and find a₄.",
        steps: [
          { label: "Find the recurrence", text: "A valid string of length n ends in 1 (any valid string of length n−1 may precede it) or in 01 (any valid string of length n−2 may precede it): aₙ = aₙ₋₁ + aₙ₋₂." },
          { label: "Base values", text: "a₁ = 2 (the strings 0 and 1) and a₂ = 3 (01, 10, 11)." },
          { label: "Identify the sequence", text: "This is the Fibonacci recurrence with a shifted index: aₙ = fₙ₊₂ since f₃ = 2 and f₄ = 3." },
          { label: "Compute a₄", text: "a₃ = 3 + 2 = 5 and a₄ = 5 + 3 = 8: the strings 0101, 0110, 0111, 1010, 1011, 1101, 1110, 1111." },
        ],
        result: "aₙ = fₙ₊₂; in particular a₄ = 8.",
      },
    ],
    keyTakeaways: [
      "Recursive function definition = basis + recursive clause (factorial, powers, Fibonacci)",
      "Recursive set definition = basis + rules + exclusion clause (minimality)",
      "Strings, well-formed formulas, and full binary trees are the canonical recursively defined sets",
      "Structural induction: prove the basis elements have P and every rule preserves P",
      "Validity = ordinary induction on construction depth",
    ],
    quiz: [
      {
        q: "With f₀ = 0 and f₁ = 1, the Fibonacci number f₇ equals:",
        options: ["8", "13", "21", "12"],
        answer: 1,
        explanation: "The sequence runs 0, 1, 1, 2, 3, 5, 8, 13 — the seventh Fibonacci number is 13.",
      },
      {
        q: "How many bit strings of length 4 have no two consecutive 0s?",
        options: ["16", "13", "8", "11"],
        answer: 2,
        explanation: "They satisfy aₙ = aₙ₋₁ + aₙ₋₂ with a₁ = 2, a₂ = 3, so a₃ = 5 and a₄ = 8 (Fibonacci shifted: aₙ = fₙ₊₂).",
      },
      {
        q: "A recursive definition of a set must include:",
        options: ["an inductive hypothesis", "a basis and recursive rules, plus the understanding that nothing outside them belongs to the set", "at least two base cases", "a proof of termination"],
        answer: 1,
        explanation: "Without the exclusion clause (minimality), any larger set closed under the rules would also satisfy the definition — it would not define a unique set.",
      },
      {
        q: "A full binary tree has 7 leaves. How many internal vertices does it have?",
        options: ["8", "6", "7", "5"],
        answer: 1,
        explanation: "By structural induction, l = i + 1 for every full binary tree, so i = 7 − 1 = 6.",
      },
    ],
  },

  // ---------- 5.4 Recursive Algorithms ----------
  {
    sectionId: "rosen-ch5-s4",
    readingTime: 12,
    intro: "A recursive algorithm solves a problem by calling itself on a smaller input — gcd, binary search, merge sort, and Tower of Hanoi all work this way. Recursion and induction are the same idea seen from two sides: the algorithm makes progress exactly where the proof does.",
    objectives: [
      "Trace recursive algorithms: factorial, Fibonacci, gcd, exponentiation",
      "Prove recursive algorithms correct by (strong) induction",
      "Analyze call counts and complexity of recursive algorithms",
      "Explain binary search's logarithmic structure",
      "Derive and understand the merge sort recurrence T(n) = 2T(n/2) + n",
    ],
    concepts: [
      {
        term: "Recursive algorithm",
        kind: "definition",
        statement: "An algorithm is **recursive** when it invokes itself on a strictly smaller input. Every recursive algorithm needs a **base case** that it answers directly without recursing, and its recursive calls must make progress toward that case.",
        detail: "A missing base case or a non-shrinking input means infinite recursion — in practice, a stack overflow.",
      },
      {
        term: "Correctness by induction",
        kind: "method",
        statement: "Prove the base case correct directly; then assume the algorithm is correct on all smaller inputs (strong induction) and show it combines those correct answers into a correct answer for the current input.",
        detail: "The proof of a recursive algorithm is usually a structural mirror of the algorithm itself — same base case, same decomposition.",
      },
      {
        term: "Classic recursive algorithms",
        kind: "method",
        statement: "factorial(n): if n = 0 return 1, else return n·factorial(n−1). gcd(a, b): if b = 0 return a, else return gcd(b, a mod b). fibonacci(n): if n ≤ 1 return n, else return fibonacci(n−1) + fibonacci(n−2).",
        detail: "The recursive gcd terminates after O(log min(a, b)) calls — every two calls at least halve the first argument. Naive recursive Fibonacci makes about 2fₙ₊₁ − 1 calls — exponential! Memoizing (caching) each value makes it linear.",
      },
      {
        term: "Recursive modular exponentiation",
        kind: "method",
        statement: "To compute $a^n \\bmod m$: if n = 0 return 1; if n is even return $(a^{n/2} \\bmod m)^2$; if n is odd return $(a^{(n-1)/2} \\bmod m)^2 \\cdot a \\pmod{m}$. This is section 4.2's repeated squaring as an algorithm — $O(\\log n)$ multiplications.",
        detail: "The even case gets a squaring for a single multiplication, which is exactly where the logarithmic speedup comes from.",
      },
      {
        term: "Binary search",
        kind: "method",
        statement: "To find x in a sorted list: compare x with the middle element; if equal, done; if smaller, recurse on the left half; if larger, recurse on the right half. The interval halves each comparison, giving **⌊log₂ n⌋ + 1 comparisons worst case**. The list must be sorted first.",
        detail: "Trace intuition: 1024 elements → 512 → 256 → ⋯ → 1 in ten halvings, plus one final comparison.",
      },
      {
        term: "Merge sort",
        kind: "method",
        statement: "If the list has at most one element it is sorted; otherwise recursively sort each half, then **merge** the two sorted halves by repeatedly emitting the smaller front element. Merging lists of sizes p and q takes at most **p + q − 1 comparisons**.",
        detail: "The merge step is where all the real work happens — the recursion just chops the list in half down to singletons.",
      },
      {
        term: "The merge sort recurrence",
        kind: "insight",
        statement: "T(n) = 2T(n/2) + n — two half-size problems plus a linear merge — solves to **T(n) = Θ(n log n)**, asymptotically optimal for comparison sorting. This is the prototype divide-and-conquer recurrence; chapter 8 solves T(n) = aT(n/b) + f(n) in general (the master theorem).",
        detail: "Unrolling: n + 2(n/2) + 4(n/4) + ⋯ = n·log₂ n total merge work across all levels.",
      },
      {
        term: "Recursion vs iteration",
        kind: "insight",
        statement: "Any recursive algorithm can be converted to an iterative one (the call stack becomes an explicit stack). Recursion wins on clarity for recursive data (trees, strings, nested structures); iteration avoids call overhead and stack limits.",
        detail: "Choosing between them is an engineering call; the mathematics — correctness and complexity — is identical.",
      },
    ],
    examples: [
      {
        title: "Tracing recursive gcd",
        problem: "Trace gcd(48, 18) using gcd(a, b) = gcd(b, a mod b).",
        steps: [
          { label: "First call", text: "48 = 2·18 + 12, so gcd(48, 18) → gcd(18, 12)." },
          { label: "Second call", text: "18 = 1·12 + 6, so gcd(18, 12) → gcd(12, 6)." },
          { label: "Third call", text: "12 = 2·6 + 0, so gcd(12, 6) → gcd(6, 0)." },
          { label: "Base case", text: "b = 0: return a = 6." },
        ],
        result: "gcd(48, 18) = 6, in three recursive calls.",
      },
      {
        title: "Merge sort on four elements",
        problem: "Merge sort the list [8, 3, 5, 7], counting merge comparisons.",
        steps: [
          { label: "Split", text: "[8, 3] and [5, 7]; each splits into singletons, which are sorted by definition." },
          { label: "First merge", text: "Merge [8] and [3]: 3 < 8 → [3, 8] — 1 comparison." },
          { label: "Second merge", text: "Merge [5] and [7]: 5 < 7 → [5, 7] — 1 comparison." },
          { label: "Final merge", text: "Merge [3, 8] and [5, 7]: 3 vs 5 → 3; 8 vs 5 → 5; 8 vs 7 → 7; append 8 — 3 comparisons (≤ 2 + 2 − 1)." },
        ],
        result: "[3, 5, 7, 8] using 5 comparisons in total.",
      },
      {
        title: "Binary search trace",
        problem: "Binary search for 12 in the sorted list [2, 4, 6, 8, 10, 12, 14, 16, 18].",
        steps: [
          { label: "Compare with the middle", text: "Middle element (5th) is 10; 12 > 10 → search the right half [12, 14, 16, 18]." },
          { label: "Halve again", text: "Middle of the right half is 14; 12 < 14 → search [12]." },
          { label: "Found", text: "The remaining element is 12 — found." },
          { label: "Count", text: "3 comparisons; the search interval shrank 9 → 4 → 1, exactly the logarithmic behavior." },
        ],
        result: "12 found in 3 comparisons (worst case is ⌊log₂ 9⌋ + 1 = 4).",
      },
    ],
    keyTakeaways: [
      "Recursive algorithm = base case + self-call on a strictly smaller input",
      "Correctness: prove the base case directly, then induct over the smaller calls",
      "Recursive gcd: logarithmic; naive Fibonacci: exponential; memoization makes it linear",
      "Binary search halves the interval: ⌊log₂ n⌋ + 1 comparisons worst case, but needs sorted input",
      "Merge sort: T(n) = 2T(n/2) + n = Θ(n log n); merging two lists costs ≤ p + q − 1 comparisons",
    ],
    quiz: [
      {
        q: "A recursive function with no base case:",
        options: ["runs but returns 0", "recurses forever — it never halts", "is automatically tail-recursive", "is faster than one with a base case"],
        answer: 1,
        explanation: "Without a terminating case the self-calls never stop — in practice the call stack overflows.",
      },
      {
        q: "Worst-case comparisons for binary search on a sorted array of 1024 elements:",
        options: ["1024", "512", "10", "11"],
        answer: 3,
        explanation: "Each comparison halves the interval: 1024 → 512 → ⋯ → 1 takes 10 halvings, plus the final comparison: ⌊log₂ 1024⌋ + 1 = 11.",
      },
      {
        q: "Merging two sorted lists of sizes p and q takes at most how many comparisons?",
        options: ["p·q", "p + q", "p + q − 1", "max(p, q)"],
        answer: 2,
        explanation: "Each comparison outputs one element, and the last element can be appended without comparison — at most p + q − 1.",
      },
      {
        q: "The naive doubly-recursive Fibonacci implementation is slow because:",
        options: ["recursion is inherently slow", "it recomputes the same subproblems — the call count grows like the Fibonacci numbers themselves", "additions of large integers dominate the cost", "it requires a sorted array"],
        answer: 1,
        explanation: "fib(n) re-derives the same values inside both branches; the total number of calls satisfies T(n) = T(n−1) + T(n−2) + 1, roughly 2fₙ₊₁ − 1 — exponential.",
      },
    ],
  },

  // ---------- 5.5 Program Correctness ----------
  {
    sectionId: "rosen-ch5-s5",
    readingTime: 9,
    intro: "Programs are mathematical objects, and their correctness can be a theorem. The framework is the Hoare triple {p}S{q} — if precondition p holds and program S terminates, then postcondition q holds afterward. Assignments and conditionals verify by rules; loops yield to their invariants.",
    objectives: [
      "Read and write Hoare triples {p}S{q}",
      "Distinguish partial correctness (no halting claim) from total correctness",
      "Verify assignments and straight-line programs with the composition rule",
      "Verify conditionals and while-loops using invariants",
      "Prove termination with strictly decreasing variants",
    ],
    concepts: [
      {
        term: "Hoare triple",
        kind: "notation",
        statement: "**{p}S{q}** means: if p (the **precondition**) is true before program S runs and S terminates, then q (the **postcondition**) is true afterward. A program S is **correct** with respect to p and q when the triple holds.",
        detail: "Example: {x = 1} y := x + 1 {y = 2} — if x is 1 beforehand, the assignment guarantees y = 2 after.",
      },
      {
        term: "Partial and total correctness",
        kind: "definition",
        statement: "**Partial correctness**: {p}S{q} holds, with no claim that S halts. **Total correctness** = partial correctness plus a proof that S terminates on every input satisfying p. Halting is analyzed separately — and by the halting problem (section 3.1) it cannot be decided in general.",
        detail: "A program can be partially correct and still loop forever on some inputs — partial correctness only constrains terminating runs.",
      },
      {
        term: "Composition rule",
        kind: "method",
        statement: "From {p}S₁{q} and {q}S₂{r}, conclude **{p}S₁; S₂{r}**: the intermediate assertion q passes from the end of the first statement to the start of the second.",
        detail: "Straight-line code verifies by threading assertions from statement to statement.",
      },
      {
        term: "Assignment rule",
        kind: "method",
        statement: "To verify {p} x := e {q}, show that p implies the statement obtained from q by replacing every occurrence of x with e. Intuition: after the assignment, x literally equals the value e had before.",
        detail: "{x = 1} y := x + 1 {y = 2}: substituting x + 1 for y in the postcondition gives x + 1 = 2, which is exactly the precondition.",
      },
      {
        term: "Conditional rule",
        kind: "method",
        statement: "To verify {p} if c then S₁ else S₂ {q}, prove **{p ∧ c}S₁{q}** and **{p ∧ ¬c}S₂{q}**: whichever branch runs, it starts from the relevant half of the precondition.",
        detail: "Case analysis in proof language becomes branch analysis in program language.",
      },
      {
        term: "Loop invariants",
        kind: "definition",
        statement: "An assertion I is a **loop invariant** for while c: S when: (1) p → I holds before the loop is entered; (2) **{I ∧ c} S {I}** — each pass through the body preserves I; (3) **I ∧ ¬c → q** — when the loop exits, the invariant plus the failed test yield the postcondition.",
        detail: "The invariant must hold at the top of every iteration, not merely sometimes. Finding the right invariant is the creative step of verification.",
      },
      {
        term: "Termination via variants",
        kind: "method",
        statement: "Prove a loop terminates by exhibiting a **variant**: an integer quantity v ≥ 0 that strictly decreases on every iteration. A nonnegative integer cannot decrease forever, so the loop must stop. Partial correctness + termination = total correctness.",
        detail: "In the division program below, the remainder r is the variant: it drops by d > 0 each pass and never goes negative.",
      },
    ],
    examples: [
      {
        title: "Verifying a straight-line program",
        problem: "Verify {x = 0} x := x + 1; x := x + 2 {x = 3}.",
        steps: [
          { label: "Split at the semicolon", text: "By the composition rule, prove {x = 0} x := x + 1 {x = 1} and {x = 1} x := x + 2 {x = 3}." },
          { label: "First assignment", text: "Substituting x + 1 for x in the postcondition x = 1 gives x + 1 = 1, i.e., x = 0 — exactly the precondition." },
          { label: "Second assignment", text: "Substituting x + 2 for x in x = 3 gives x + 2 = 3, i.e., x = 1 — exactly the intermediate assertion." },
          { label: "Total correctness", text: "The program has no loops and always terminates, so it is totally correct." },
        ],
        result: "The triple holds — verified purely with the assignment and composition rules.",
      },
      {
        title: "The division algorithm as a program",
        problem: "Verify: q := 0; r := a; while r ≥ d: r := r − d; q := q + 1 outputs a = dq + r with 0 ≤ r < d (for a ≥ 0, d > 0).",
        steps: [
          { label: "State the invariant", text: "I: a = dq + r ∧ r ≥ 0. It holds initially since q = 0 and r = a." },
          { label: "Preservation", text: "If r ≥ d, the body sets r′ = r − d ≥ 0 and q′ = q + 1; then dq′ + r′ = d(q+1) + r − d = dq + r = a." },
          { label: "Exit", text: "The loop stops when r < d, so the invariant yields a = dq + r with 0 ≤ r < d — the division algorithm's promise." },
          { label: "Termination", text: "The variant r decreases by d > 0 each pass and stays nonnegative, so the loop runs exactly ⌊a/d⌋ times." },
        ],
        result: "The program is totally correct: it halts with (q, r) the unique quotient–remainder pair for a ÷ d.",
      },
      {
        title: "Multiplication by repeated addition",
        problem: "Verify: x := 0; i := 0; while i ≠ n: x := x + m; i := i + 1 computes x = mn for n ≥ 0.",
        steps: [
          { label: "State the invariant", text: "I: x = m·i ∧ 0 ≤ i ≤ n. Initially x = 0 = m·0 and i = 0 ≤ n." },
          { label: "Preservation", text: "If i ≠ n, the body sets x′ = x + m and i′ = i + 1; then x′ = m·i + m = m·i′, and i′ ≤ n still holds." },
          { label: "Exit", text: "The loop exits when i = n; the invariant then reads x = m·n — exactly the goal." },
          { label: "Termination", text: "The variant n − i decreases by 1 each pass and never goes negative." },
        ],
        result: "On termination x = mn — the loop is a totally correct multiplier.",
      },
    ],
    keyTakeaways: [
      "{p}S{q}: if the precondition holds and S terminates, the postcondition follows",
      "Partial correctness + a termination proof = total correctness",
      "Assignment rule: verify by substituting the assigned expression into the postcondition",
      "Composition threads assertions; conditionals split into the two branch cases p ∧ c and p ∧ ¬c",
      "Loops: an invariant that is established, preserved each pass, and combined with the exit test — plus a decreasing variant for termination",
    ],
    quiz: [
      {
        q: "The Hoare triple {p}S{q} means:",
        options: ["S always terminates when p holds", "if p holds before S and S terminates, then q holds after", "p and q are equivalent", "S halts on all inputs"],
        answer: 1,
        explanation: "The triple is a conditional claim about terminating runs — termination is a separate concern (total correctness).",
      },
      {
        q: "Partial correctness differs from total correctness because partial correctness:",
        options: ["only verifies some inputs", "applies only to loops", "is proved with truth tables", "does not require proving termination"],
        answer: 3,
        explanation: "Partial correctness says: IF the program halts, the answer is right. Add a termination proof to obtain total correctness.",
      },
      {
        q: "A loop invariant must hold:",
        options: ["only when the loop exits", "only on the first iteration", "before the loop begins and after each complete iteration of the body", "inside every conditional branch of the program"],
        answer: 2,
        explanation: "The invariant is established before entry, preserved by each full pass, and — with the negated loop test — implies the postcondition at exit.",
      },
      {
        q: "In the division-verification program (q := 0; r := a; while r ≥ d: r := r − d; q := q + 1), the loop invariant is:",
        options: ["r < d", "a = dq + r ∧ r ≥ 0", "q ≥ 1", "r = a mod d"],
        answer: 1,
        explanation: "That identity holds initially (a = 0·d + a), each pass preserves it, and together with the exit test r < d it yields exactly the division algorithm's conclusion.",
      },
      // PYQ-pattern: GATE 2012 — weakest precondition of an assignment (rephrased, values changed)
      {
        q: "Consider $\\{P\\} \\; x := x + 3 \\; \\{x = 10\\}$. The weakest precondition $P$ that makes the triple valid is:",
        options: ["$x = 10$", "$x = 7$", "$x = 13$", "$x = 3$"],
        answer: 1,
        explanation: "Step 1: Restate the assignment rule as substitution of the right-hand side into the postcondition. Step 2: Recall the key rule that $\\{P\\} \\; x := e \\; \\{Q(x)\\}$ holds exactly when $P$ implies $Q(e)$. Step 3: Substitute $x + 3$ for $x$ in $x = 10$ to get $x + 3 = 10$. Step 4: Solve to obtain $x = 7$. Step 5: The distractors fail since $x = 10$ would yield $13$ after the assignment, $x = 13$ would yield $16$, and $x = 3$ would yield $6$. Step 6: Hence only $x = 7$ guarantees $x = 10$ afterward."
      },
      // PYQ-pattern: GATE 2018 — variant proving loop termination (rephrased, values changed)
      {
        q: "For the loop `i := 0; while i < n: i := i + 1` with $n \\geq 0$, which variant argument proves termination?",
        options: ["The value $i$ is always positive", "The guard $i < n$ is always true", "Partial correctness already implies termination", "$n - i$ drops by $1$ on every pass and stays nonnegative while the guard holds"],
        answer: 3,
        explanation: "Step 1: Restate termination as discovery of an integer quantity bounded below that strictly falls each iteration. Step 2: Recall the key principle that a nonnegative integer cannot decrease forever, so the loop must stop. Step 3: Track $v = n - i$: initially $v = n \\geq 0$ and the body sends $v$ to $n - (i+1) = v - 1$. Step 4: While $i < n$ holds, $v > 0$, so $v$ is a nonnegative counter ticking down to $0$. Step 5: The distractors fail since $i$ grows rather than shrinks, the guard becomes false at the end by design, and partial correctness never promises halting. Step 6: Therefore $n - i$ is a valid variant and the loop halts after exactly $n$ passes."
      },
    ],
  },
]
