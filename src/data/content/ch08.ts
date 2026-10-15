import type { SectionContent } from '../library'

// ============================================================
// Chapter 8 — Advanced Counting Techniques (Rosen, 8th Edition)
// Master study content — sections 8.1 to 8.6
// ============================================================

export const ch8Content: SectionContent[] = [
  // ---------- 8.1 Applications of Recurrence Relations ----------
  {
    sectionId: 'rosen-ch8-s1',
    readingTime: 9,
    intro: "How fast do rabbits multiply? What does compound interest really compute? And how many moves does it take to relocate 64 golden disks between three pegs? Recurrence relations express the next value of a sequence through earlier ones — the natural mathematical form of any process that builds its future from its past.",
    objectives: [
      'Define recurrence relations, initial conditions and degree',
      'Model counting problems with recurrences (rabbits, interest, Hanoi)',
      'Derive the Towers of Hanoi recurrence and its closed form',
      'Connect recurrences to recursive algorithm running times',
    ],
    concepts: [
      {
        term: 'Recurrence Relation',
        kind: 'definition',
        statement: 'A **recurrence relation** for the sequence {aₙ} expresses aₙ in terms of previous terms: **aₙ = f(aₙ₋₁, aₙ₋₂, ..., a₁, a₀)**.',
        detail: 'Compound interest: aₙ = (1 + r)·aₙ₋₁. Fibonacci: fₙ = fₙ₋₁ + fₙ₋₂. A recurrence defines a sequence dynamically rather than by an explicit formula.',
      },
      {
        term: 'Initial Conditions',
        kind: 'definition',
        statement: 'The **initial conditions** specify the first terms of the sequence — enough values to determine the entire sequence recursively.',
        detail: 'The Fibonacci recurrence needs f₀ = 0 (or f₁ = 1) and f₁ = 1. Without initial conditions, a recurrence describes a whole family of sequences.',
      },
      {
        term: 'Degree of a Recurrence',
        kind: 'definition',
        statement: 'A recurrence of the form aₙ = f(aₙ₋₁, ..., aₙ₋ₖ), in which aₙ₋ₖ appears and no earlier term does, has **degree k**.',
        detail: 'fₙ = fₙ₋₁ + fₙ₋₂ has degree 2 — it looks two steps back. The degree determines how many initial conditions are needed.',
      },
      {
        term: 'The Rabbit Model',
        kind: 'insight',
        statement: "Fibonacci's rabbits satisfy **fₙ = fₙ₋₁ + fₙ₋₂**: this month's pairs equal last month's pairs plus newborns from all pairs alive two months ago.",
        detail: 'Assume each pair matures in one month and then produces a new pair every month, with no deaths: the count is exactly the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, ...',
      },
      {
        term: 'Compound Interest',
        kind: 'law',
        statement: 'A principal P at annual rate r satisfies **aₙ = (1 + r)·aₙ₋₁** with a₀ = P, and by iteration **aₙ = P(1 + r)ⁿ**.',
        detail: 'A 10,000-dollar deposit at 6% grows as aₙ = 1.06·aₙ₋₁ and is worth about 57,435 dollars after 30 years.',
      },
      {
        term: 'The Towers of Hanoi',
        kind: 'method',
        statement: 'The minimum number of moves for n disks (moving one disk at a time, never resting a larger disk on a smaller one) satisfies **Hₙ = 2·Hₙ₋₁ + 1** with H₁ = 1, so **Hₙ = 2ⁿ − 1**.',
        detail: 'Move the top n − 1 disks to the spare peg (Hₙ₋₁ moves), move the base disk (1 move), then move the stack onto it (Hₙ₋₁ moves). For 64 disks that is 2⁶⁴ − 1 ≈ 1.8×10¹⁹ moves — about 585 billion years at one move per second.',
      },
      {
        term: 'Recurrences from Recursive Algorithms',
        kind: 'insight',
        statement: "The running time T(n) of a recursive algorithm satisfies a recurrence mirroring its structure: T(n) = T(n − 1) + c for linear recursion, T(n) = 2T(n/2) + c·n for divide-and-conquer.",
        detail: 'Analyzing a recursive algorithm and solving a recurrence are the same problem. Dynamic programming avoids recomputation by tabulating intermediate terms of the recurrence.',
      },
      {
        term: 'Iteration as a First Attack',
        kind: 'method',
        statement: 'Compute a₀, a₁, a₂, ... in turn, look for a pattern, and verify the conjectured closed form by induction.',
        detail: 'For Hanoi: 1, 3, 7, 15, 31, ... suggests Hₙ = 2ⁿ − 1, which is then proved by substituting into the recurrence — an induction hidden inside the iteration.',
      },
    ],
    examples: [
      {
        title: 'Counting Rabbit Pairs',
        problem: "Start with one newborn pair of rabbits; each pair matures in one month and then produces a new pair every month. How many pairs are there after a year?",
        steps: [
          { label: 'Model', text: 'fₙ = fₙ₋₁ + fₙ₋₂ with f₁ = 1 and f₂ = 1.' },
          { label: 'Reasoning', text: 'Month n keeps all month-(n−1) pairs and adds newborns equal to the month-(n−2) pairs, which are exactly the pairs now mature.' },
          { label: 'Iterate', text: 'f₃ = 2, f₄ = 3, f₅ = 5, f₆ = 8, f₇ = 13, f₈ = 21, f₉ = 34, f₁₀ = 55, f₁₁ = 89, f₁₂ = 144.' },
        ],
        result: '144 pairs after 12 months — the twelfth Fibonacci number.',
      },
      {
        title: 'Compound Interest',
        problem: 'You deposit 10,000 dollars at 6% annual interest, compounded yearly. Model the balance and find its value after 30 years.',
        steps: [
          { label: 'Recurrence', text: 'aₙ = 1.06·aₙ₋₁ with a₀ = 10000: each year the balance is 106% of the previous.' },
          { label: 'Unfold by iteration', text: 'a₁ = 10000·1.06, a₂ = 10000·1.06², and in general aₙ = 10000·1.06ⁿ.' },
          { label: 'Evaluate', text: 'a₃₀ = 10000·1.06³⁰ ≈ 10000·5.7435.' },
        ],
        result: '≈ 57,435 dollars — the balance nearly sextuples in 30 years.',
      },
      {
        title: 'Towers of Hanoi',
        problem: 'Derive and solve the recurrence for the minimum number of moves Hₙ needed to transfer n disks.',
        steps: [
          { label: 'Strategy', text: 'Move the top n − 1 disks to the spare peg, move the largest disk to the target peg, then move the n − 1 stack onto it.' },
          { label: 'Recurrence', text: 'Hₙ = 2·Hₙ₋₁ + 1, with H₁ = 1.' },
          { label: 'Iterate', text: 'H₂ = 3, H₃ = 7, H₄ = 15 — the pattern Hₙ = 2ⁿ − 1 emerges.' },
          { label: 'Prove the closed form', text: 'If Hₙ₋₁ = 2ⁿ⁻¹ − 1 then Hₙ = 2(2ⁿ⁻¹ − 1) + 1 = 2ⁿ − 1, an induction.' },
        ],
        result: 'Hₙ = 2ⁿ − 1; for 64 disks that is about 1.8×10¹⁹ moves.',
      },
    ],
    keyTakeaways: [
      'A recurrence defines a sequence dynamically — aₙ from earlier terms; initial conditions pin down which sequence.',
      'Fibonacci fₙ = fₙ₋₁ + fₙ₋₂ models any process where new growth comes from the previous two stages.',
      'Towers of Hanoi: Hₙ = 2Hₙ₋₁ + 1 solves to Hₙ = 2ⁿ − 1.',
      'Compound interest aₙ = (1+r)·aₙ₋₁ solves to aₙ = P(1+r)ⁿ.',
      "Recursive algorithms' running times satisfy recurrences that mirror their structure.",
    ],
    quiz: [
      {
        q: 'How many moves does the Towers of Hanoi require for 5 disks?',
        options: ['16', '25', '31', '63'],
        answer: 2,
        explanation: 'H₅ = 2⁵ − 1 = 31 — the recurrence Hₙ = 2Hₙ₋₁ + 1 with H₁ = 1 gives 1, 3, 7, 15, 31.',
      },
      {
        q: 'What is the degree of the recurrence aₙ = aₙ₋₁ + 3aₙ₋₃?',
        options: ['1', '2', '3', '4'],
        answer: 2,
        explanation: 'Degree is the largest k such that aₙ₋ₖ appears; here the farthest-back term is aₙ₋₃, so the degree is 3.',
      },
      {
        q: 'A bank balance grows by 0.5% per month. If aₙ is the balance after n months, which recurrence models it?',
        options: ['aₙ = aₙ₋₁ + 0.005', 'aₙ = 1.005·aₙ₋₁', 'aₙ = aₙ₋₁ + 0.005·a₀', 'aₙ = 0.995·aₙ₋₁'],
        answer: 1,
        explanation: 'Compound growth multiplies the previous balance by (1 + r) = 1.005. Adding a constant, or a fixed fraction of a₀, would be simple (non-compounding) interest.',
      },
      {
        q: 'The Fibonacci recurrence fₙ = fₙ₋₁ + fₙ₋₂ with f₁ = f₂ = 1 gives f₆ = ?',
        options: ['5', '6', '8', '13'],
        answer: 2,
        explanation: 'f₃ = 2, f₄ = 3, f₅ = 5, f₆ = 8 — each term is the sum of the two before it.',
      },
    ],
  },

  // ---------- 8.2 Solving Linear Recurrence Relations ----------
  {
    sectionId: 'rosen-ch8-s2',
    readingTime: 12,
    intro: "Fibonacci guessed; we can solve. A large and practically important family of recurrences — linear, with constant coefficients — can be cracked completely: form the characteristic equation, find its roots, and write down the closed form directly. This section gives you the full cookbook, including repeated roots and nonhomogeneous right-hand sides.",
    objectives: [
      'Recognize linear homogeneous recurrences with constant coefficients',
      'Solve recurrences via the characteristic equation with distinct roots',
      'Handle repeated roots with (α₁ + α₂n)·rⁿ forms',
      'Find particular solutions for nonhomogeneous recurrences',
      'Combine homogeneous and particular solutions to fit initial conditions',
    ],
    concepts: [
      {
        term: 'Linear Homogeneous Recurrence',
        kind: 'definition',
        statement: 'A recurrence **aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ** with real constants cᵢ and cₖ ≠ 0 is a **linear homogeneous recurrence with constant coefficients** of degree k.',
        detail: 'fₙ = fₙ₋₁ + fₙ₋₂ qualifies (c₁ = c₂ = 1). The relations aₙ = a²ₙ₋₁ and aₙ = aₙ₋₁ + 1 do not — the first is nonlinear, the second nonhomogeneous.',
      },
      {
        term: 'Characteristic Equation',
        kind: 'method',
        statement: 'Substituting the trial solution aₙ = rⁿ into the homogeneous recurrence yields the **characteristic equation rᵏ − c₁rᵏ⁻¹ − ... − cₖ₋₁r − cₖ = 0**; its roots are the characteristic roots.',
        detail: 'Geometric sequences rⁿ are exactly the basic solutions of the homogeneous equation, and every solution turns out to be a linear combination of them.',
      },
      {
        term: 'Distinct Roots Theorem',
        kind: 'theorem',
        statement: 'If the k characteristic roots r₁, ..., rₖ are all distinct, every solution has the form **aₙ = α₁r₁ⁿ + α₂r₂ⁿ + ... + αₖrₖⁿ**, with the constants αᵢ determined by the initial conditions.',
        detail: 'Two initial conditions pin down two unknowns in a degree-2 recurrence: solve the small linear system for the αᵢ as the final step.',
      },
      {
        term: 'Repeated Roots Theorem',
        kind: 'theorem',
        statement: 'If r is a characteristic root of multiplicity m, the general solution contains the block **(α₁ + α₂n + α₃n² + ... + αₘnᵐ⁻¹)·rⁿ**; for a degree-2 recurrence with a double root r this is aₙ = (α₁ + α₂n)·rⁿ.',
        detail: 'Example: aₙ = 6aₙ₋₁ − 9aₙ₋₂ has characteristic equation r² − 6r + 9 = (r − 3)² = 0, so every solution looks like aₙ = (α₁ + α₂n)·3ⁿ.',
      },
      {
        term: 'Nonhomogeneous Recurrence',
        kind: 'definition',
        statement: 'A **nonhomogeneous linear recurrence with constant coefficients** has the form aₙ = c₁aₙ₋₁ + ... + cₖaₙ₋ₖ + F(n) with F(n) ≠ 0.',
        detail: 'The Hanoi recurrence Hₙ = 2Hₙ₋₁ + 1 is nonhomogeneous with F(n) = 1 — that trailing +1 is exactly such a term.',
      },
      {
        term: 'Table of Particular Solutions',
        kind: 'method',
        statement: 'To find one particular solution: for **F(n) = polynomial of degree t**, try a polynomial of degree t with undetermined coefficients; for **F(n) = C·sⁿ with s not a root** of the characteristic equation, try A·sⁿ; if **s is a root of multiplicity m**, try A·nᵐ·sⁿ.',
        detail: 'For aₙ = 2aₙ₋₁ + 1 try the constant aₙ = A: substituting gives A = 2A + 1, so A = −1. For aₙ = 2aₙ₋₁ + 2ⁿ try A·2ⁿ; dividing by 2ⁿ⁻¹ forces A = −2.',
      },
      {
        term: 'General Solution of a Nonhomogeneous Recurrence',
        kind: 'theorem',
        statement: 'The general solution of a nonhomogeneous linear recurrence equals the **general homogeneous solution plus any particular solution**; the initial conditions then determine the constants.',
        detail: 'For aₙ = 2aₙ₋₁ + 1: the homogeneous part α·2ⁿ plus the particular solution −1 gives aₙ = α·2ⁿ − 1; a₀ = 0 forces α = 1, so aₙ = 2ⁿ − 1 — Hanoi again.',
      },
      {
        term: 'Why It Works',
        kind: 'insight',
        statement: 'The solutions of a homogeneous linear recurrence form a k-dimensional vector space whose basis is given by the root blocks; adding a particular solution translates that space.',
        detail: 'This is exactly the structure of linear differential equations — same characteristic-equation trick, same superposition principle.',
      },
    ],
    examples: [
      {
        title: 'Fibonacci Solved',
        problem: 'Find a closed form for fₙ = fₙ₋₁ + fₙ₋₂ with f₀ = 0 and f₁ = 1.',
        steps: [
          { label: 'Characteristic equation', text: 'r² = r + 1, that is, r² − r − 1 = 0.' },
          { label: 'Roots', text: 'r = (1 ± √5)/2: call them φ ≈ 1.618 (the golden ratio) and ψ ≈ −0.618.' },
          { label: 'General form', text: 'fₙ = α·φⁿ + β·ψⁿ.' },
          { label: 'Fit initial conditions', text: 'α + β = 0 and αφ + βψ = 1 give α = 1/√5 and β = −1/√5.' },
          { label: 'Closed form', text: 'fₙ = (φⁿ − ψⁿ)/√5 — Binet formula.' },
        ],
        result: 'fₙ = (φⁿ − ψⁿ)/√5; for example f₁₀ = 55 exactly.',
      },
      {
        title: 'A Repeated Root',
        problem: 'Solve aₙ = 4aₙ₋₁ − 4aₙ₋₂ with a₀ = 1 and a₁ = 4.',
        steps: [
          { label: 'Characteristic equation', text: 'r² − 4r + 4 = (r − 2)² = 0 — a double root r = 2.' },
          { label: 'Repeated-root form', text: 'aₙ = (α + βn)·2ⁿ.' },
          { label: 'Initial conditions', text: 'a₀ = α = 1; then a₁ = (1 + β)·2 = 4 gives β = 1.' },
          { label: 'Verify', text: 'aₙ = (n + 1)·2ⁿ; check a₂ = 12 and 4·4 − 4·1 = 12.' },
        ],
        result: 'aₙ = (n + 1)·2ⁿ.',
      },
      {
        title: 'A Nonhomogeneous Recurrence',
        problem: 'Solve aₙ = 3aₙ₋₁ + 2ⁿ with a₀ = 1.',
        steps: [
          { label: 'Homogeneous part', text: 'The characteristic equation r − 3 = 0 has the single root 3, giving α·3ⁿ.' },
          { label: 'Particular solution', text: 'F(n) = 2ⁿ and 2 is not a root, so try A·2ⁿ: substituting gives A·2ⁿ = 3A·2ⁿ⁻¹ + 2ⁿ, and dividing by 2ⁿ⁻¹ forces 2A = 3A + 2, so A = −2.' },
          { label: 'General solution', text: 'aₙ = α·3ⁿ − 2·2ⁿ.' },
          { label: 'Fit the initial condition', text: 'a₀ = 1 gives α − 2 = 1, so α = 3.' },
          { label: 'Verify', text: 'a₁ = 9 − 4 = 5 and the recurrence gives 3·1 + 2 = 5; a₂ = 27 − 8 = 19 and 3·5 + 4 = 19.' },
        ],
        result: 'aₙ = 3ⁿ⁺¹ − 2ⁿ⁺¹.',
      },
    ],
    keyTakeaways: [
      'Linear homogeneous recurrences with constant coefficients are solved completely by the characteristic equation rᵏ − c₁rᵏ⁻¹ − ... − cₖ = 0.',
      'Distinct roots: aₙ = α₁r₁ⁿ + ... + αₖrₖⁿ; repeated roots insert polynomial factors, e.g. (α₁ + α₂n)rⁿ for a double root.',
      'Nonhomogeneous recurrences: general solution = homogeneous general solution + one particular solution.',
      'F(n) = C·sⁿ with s a root of multiplicity m requires the particular trial A·nᵐ·sⁿ.',
      'Initial conditions are applied last, to the combined general solution.',
    ],
    quiz: [
      {
        q: 'What is the characteristic equation of aₙ = 6aₙ₋₁ − 9aₙ₋₂?',
        options: ['r² − 6r + 9 = 0, which factors as (r − 3)² — a double root', 'r² + 6r − 9 = 0 — distinct roots', 'r² − 9r + 6 = 0 — distinct roots', 'r² − 6r − 9 = 0 — distinct roots'],
        answer: 0,
        explanation: 'Move every term to one side: r² − 6r + 9 = 0, which factors as (r − 3)². The repeated root 3 gives solutions of the form (α₁ + α₂n)·3ⁿ.',
      },
      {
        q: 'The recurrence aₙ = 2aₙ₋₁ + 3aₙ₋₂ has distinct characteristic roots 3 and −1. What is the form of its general solution?',
        options: ['aₙ = α·3ⁿ + β·(−1)ⁿ', 'aₙ = (α + βn)·3ⁿ', 'aₙ = α·3ⁿ + β·1ⁿ', 'aₙ = α·3ⁿ + β·3ⁿ⁻¹'],
        answer: 0,
        explanation: 'Distinct roots r₁ = 3 and r₂ = −1 give aₙ = α·r₁ⁿ + β·r₂ⁿ = α·3ⁿ + β·(−1)ⁿ; the initial conditions would pin down α and β.',
      },
      {
        q: 'For the nonhomogeneous recurrence aₙ = 2aₙ₋₁ + 3ⁿ, where 3 is not a characteristic root, what should you try as a particular solution?',
        options: ['A constant A', 'A·n·3ⁿ', 'A·3ⁿ', 'A·2ⁿ'],
        answer: 2,
        explanation: 'When F(n) = C·sⁿ with s not a root of the characteristic equation, try A·sⁿ. The A·n·sⁿ form is reserved for the case where s is a root.',
      },
      {
        q: 'The general solution of a nonhomogeneous linear recurrence is:',
        options: ['the particular solution alone', 'the homogeneous solution alone', 'homogeneous general solution plus a particular solution', 'the average of the homogeneous and particular solutions'],
        answer: 2,
        explanation: 'Solutions form a translate of the homogeneous solution space: take any particular solution and add the general homogeneous solution, then fix constants with the initial conditions.',
      },
    ],
  },

  // ---------- 8.3 Divide-and-Conquer Algorithms and Recurrence Relations ----------
  {
    sectionId: 'rosen-ch8-s3',
    readingTime: 10,
    intro: 'Binary search finds a name in a million-entry phone book in twenty steps; merge sort orders a billion items in thirty passes. Both owe their speed to divide-and-conquer, and their cost is captured by recurrences of the form f(n) = a·f(n/b) + g(n). One comparison — a versus $b^{d}$ — settles the growth rate.',
    objectives: [
      'Set up divide-and-conquer recurrences f(n) = a·f(n/b) + g(n)',
      'Master theorem: compare a with $b^{d}$ to read off Θ growth',
      'Analyze binary search and merge sort',
      'Understand the recursion-tree expansion behind the theorem',
    ],
    concepts: [
      {
        term: 'Divide-and-Conquer Paradigm',
        kind: 'method',
        statement: 'Split a problem of size n into **a subproblems each of size n/b**, solve them recursively, and combine the results at cost g(n) — captured by the recurrence **f(n) = a·f(n/b) + g(n)**.',
        detail: 'Binary search: 1 subproblem of half the size. Merge sort: 2 halves plus a linear merge. Schoolbook multiplication of large integers: 4 products of half-size numbers.',
      },
      {
        term: 'Divide-and-Conquer Recurrence',
        kind: 'definition',
        statement: 'f(n) = a·f(n/b) + g(n) with integer a ≥ 1 (number of subproblems) and b > 1 (shrink factor); g(n) is the splitting/combining cost.',
        detail: "Rosen's version assumes n is a power of b, so the subproblems divide evenly and the recursion bottoms out at n = 1.",
      },
      {
        term: 'Master Theorem for f(n) = a·f(n/b) + c·nᵈ',
        kind: 'theorem',
        statement: 'With a ≥ 1, b > 1, c > 0 and d ≥ 0: **a >** $b^{d}$ implies f(n) is $O(n^{\\log_b a})$; **a <** $b^{d}$ implies f(n) is $O(n^{d})$; **a =** $b^{d}$ implies f(n) is $O(n^{d}\\cdot\\log n)$.',
        detail: '$\\log_b a$ is the exponent at which total subproblem work grows per level. Compare it with d, the exponent of the per-level combine cost: whichever side wins sets the complexity.',
      },
      {
        term: 'Binary Search',
        kind: 'method',
        statement: 'Comparing the target with the middle element and discarding half the list gives **f(n) = f(n/2) + 2 → Θ(log n)**.',
        detail: 'Here a = 1, b = 2, d = 0, so $a = b^{d} = 1$ — the balanced case with $n^{d} = 1$. Doubling the list adds just one more step.',
      },
      {
        term: 'Merge Sort',
        kind: 'method',
        statement: 'Sorting two halves and merging them with at most n − 1 comparisons gives **f(n) = 2f(n/2) + n − 1 → Θ(n log n)**.',
        detail: 'a = 2, b = 2, d = 1: again $a = b^{d}$, the balanced case — each of the log₂ n levels of the recursion tree does O(n) work.',
      },
      {
        term: 'Recursion-Tree Expansion',
        kind: 'method',
        statement: 'Unroll the recurrence level by level: level i holds aⁱ subproblems of size n/bⁱ, stopping at depth $k = \\log_b n$; sum the per-level costs.',
        detail: 'For merge sort every level costs n in aggregate across log₂ n levels. The three master-theorem cases are exactly: per-level work growing, shrinking, or constant × $n^{d}$.',
      },
      {
        term: 'Closest Pair of Points',
        kind: 'insight',
        statement: 'The closest pair among n planar points can be found in **O(n log n)**: split by a vertical line, solve both halves recursively, then check a 2δ-wide strip — f(n) = 2f(n/2) + O(n).',
        detail: 'The delicate part is the combine step: when the strip is scanned in order of y-coordinate, each point needs comparison with only a constant number of neighbors.',
      },
      {
        term: 'Uneven Splits and Floors',
        kind: 'insight',
        statement: 'Real algorithms rarely divide evenly; replacing n/b by ⌈n/b⌉ or ⌊n/b⌋ changes the recurrences but not the asymptotic answers.',
        detail: 'Binary search on arbitrary n uses ⌊n/2⌋ and ⌈n/2⌉ sized halves, and the Θ(log n) conclusion survives unchanged.',
      },
    ],
    examples: [
      {
        title: 'Binary Search',
        problem: 'Derive the running time of binary search on a sorted list of n = 2ᵏ elements.',
        steps: [
          { label: 'Recurrence', text: 'Each step costs a constant number of comparisons (2 in the standard analysis) and halves the domain: f(n) = f(n/2) + 2.' },
          { label: 'Master theorem parameters', text: 'a = 1, b = 2, d = 0 (constant work per level), so $b^{d} = 1$.' },
          { label: 'Balanced case', text: '$a = b^{d} = 1$ gives f(n) = O(n⁰·log n) = O(log n).' },
          { label: 'Sanity check', text: 'n = 2²⁰ ≈ 10⁶ elements take about 20 steps.' },
        ],
        result: 'Binary search runs in Θ(log n) — twenty probes for a million entries.',
      },
      {
        title: 'Merge Sort',
        problem: 'Derive the running time of merge sort.',
        steps: [
          { label: 'Recurrence', text: 'Two half-size sorts plus a merge costing at most n − 1 comparisons: f(n) = 2f(n/2) + n − 1.' },
          { label: 'Master theorem parameters', text: 'a = 2, b = 2, d = 1, so $b^{d} = 2$.' },
          { label: 'Balanced case', text: '$a = b^{d}$, giving f(n) = O(n log n).' },
          { label: 'Tree view', text: 'log₂ n levels, each merging a total of at most n elements.' },
        ],
        result: 'Merge sort is Θ(n log n) — optimal for comparison-based sorting.',
      },
      {
        title: 'Applying the Master Theorem',
        problem: 'Determine the growth of f(n) = 9f(n/3) + n² and f(n) = 4f(n/2) + n.',
        steps: [
          { label: 'First recurrence', text: 'a = 9, b = 3, d = 2: $b^{d} = 9 = a$, the balanced case → Θ(n² log n).' },
          { label: 'Second recurrence', text: 'a = 4, b = 2, d = 1: $b^{d} = 2 < a = 4$ → $\\Theta(n^{\\log_2 4}) = \\Theta(n^{2})$.' },
          { label: 'Interpretation', text: 'In the second recurrence subproblems multiply faster than the combine cost shrinks — the leaves of the recursion tree dominate.' },
        ],
        result: 'Θ(n² log n) and Θ(n²) respectively.',
      },
    ],
    keyTakeaways: [
      'Divide-and-conquer cost: f(n) = a·f(n/b) + g(n) with a subproblems of size n/b.',
      'Master theorem for $f(n) = a \\cdot f(n/b) + c \\cdot n^{d}$: compare a with $b^{d}$.',
      '$a > b^{d} \\to \\Theta(n^{\\log_b a})$; $a < b^{d} \\to \\Theta(n^{d})$; $a = b^{d} \\to \\Theta(n^{d} \\log n)$.',
      'Binary search: f(n) = f(n/2) + O(1) → Θ(log n); merge sort: f(n) = 2f(n/2) + O(n) → Θ(n log n).',
      'The recursion tree explains the cases: per-level work either grows, shrinks, or stays proportional to $n^{d}$.',
    ],
    quiz: [
      {
        q: 'Using the master theorem, what is the growth of f(n) = 4f(n/2) + n?',
        options: ['Θ(n)', 'Θ(n log n)', 'Θ(n²)', 'Θ(log n)'],
        answer: 2,
        explanation: 'a = 4, b = 2, d = 1, so $a > b^{d} = 2$; the subproblem count dominates, giving $\\Theta(n^{\\log_2 4}) = \\Theta(n^{2})$.',
      },
      {
        q: "Which recurrence best models merge sort's comparison count?",
        options: ['f(n) = f(n/2) + n', 'f(n) = 2f(n/2) + n', 'f(n) = 2f(n − 1) + 1', 'f(n) = 2f(n/2) + n²'],
        answer: 1,
        explanation: 'Two half-size sorts plus a linear merge: a = 2, b = 2, d = 1 is the balanced case, giving Θ(n log n).',
      },
      {
        q: 'In the master theorem for $f(n) = a \\cdot f(n/b) + c \\cdot n^{d}$, the case $a = b^{d}$ yields:',
        options: [`$\\Theta(n^{\\log_b a})$`, `$\\Theta(n^{d})$`, `$\\Theta(n^{d} \\log n)$`, `$\\Theta(\\log n)$`],
        answer: 2,
        explanation: 'When subproblem growth exactly balances the combine cost, the log n levels each doing $n^{d}$ work accumulate to $\\Theta(n^{d} \\log n)$.',
      },
      {
        q: 'Binary search satisfies f(n) = f(n/2) + 3. What is its asymptotic growth?',
        options: ['Θ(1)', 'Θ(log n)', 'Θ(n)', 'Θ(n log n)'],
        answer: 1,
        explanation: 'a = 1, b = 2, d = 0 gives $a = b^{d} = 1$ — the balanced case with $n^{d} = 1$, so f(n) = Θ(log n).',
      },
    ],
  },

  // ---------- 8.4 Generating Functions ----------
  {
    sectionId: 'rosen-ch8-s4',
    readingTime: 12,
    intro: 'A generating function stuffs an entire infinite sequence into a single algebraic object — one formula that remembers everything about {aₖ}. In exchange, sequence manipulation becomes algebra: shifts become multiplications, recurrences become equations you can solve, and counting problems become coefficient extraction.',
    objectives: [
      'Write generating functions for sequences and recognize closed forms',
      'Use operations: shifting, scaling, differentiation and products',
      'Solve recurrences by converting them into equations for G(x)',
      'Count constrained selections with products of series (making change)',
    ],
    concepts: [
      {
        term: 'Generating Function',
        kind: 'definition',
        statement: 'The **generating function** of the sequence {aₖ} is $G(x) = \\sum_{k=0}^{\\infty} a_k x^{k} = a_0 + a_1 x + a_2 x^{2} + \\cdots$, treated as a formal algebraic object (convergence is irrelevant).',
        detail: '{1,1,1,...} ↦ 1/(1−x); {2ᵏ} ↦ 1/(1−2x); {1/k!} ↦ eˣ. The sequence is the list of coefficients, so equal functions encode equal sequences.',
      },
      {
        term: 'Table of Closed Forms',
        kind: 'notation',
        statement: 'Memorize: **∑ₖ xᵏ = 1/(1−x)**, **∑ₖ aᵏxᵏ = 1/(1−ax)**, **∑ₖ (−1)ᵏxᵏ = 1/(1+x)**, **∑ₖ (k+1)xᵏ = 1/(1−x)²**, and **∑ₖ₌₀ⁿ C(n,k)xᵏ = (1+x)ⁿ**.',
        detail: 'These come from the geometric series and the binomial theorem — the two most-used identities of the chapter.',
      },
      {
        term: 'Extended Binomial Coefficients',
        kind: 'definition',
        statement: 'For real u and integer k ≥ 0 define **C(u,k) = u(u−1)(u−2)...(u−k+1)/k!**; then the extended binomial theorem gives **(1+x)ᵘ = ∑ₖ C(u,k)xᵏ**.',
        detail: "In particular (1−x)⁻ⁿ = ∑ₖ C(n+k−1,k)xᵏ, which generates the sequence {C(n+k−1,k)} — combinations with repetition.",
      },
      {
        term: 'Shifting Property',
        kind: 'law',
        statement: 'If G(x) generates {aₖ}, then **x·G(x) generates {0, a₀, a₁, a₂, ...}** and **(G(x) − a₀)/x generates {a₁, a₂, a₃, ...}**.',
        detail: 'Shifting lets you align recurrence terms so they cancel algebraically when you sum the recurrence.',
      },
      {
        term: 'Differentiation Property',
        kind: 'law',
        statement: 'If G(x) = ∑aₖxᵏ then **x·G′(x) = ∑ₖ k·aₖxᵏ** — differentiation multiplies each coefficient by its index.',
        detail: 'Apply to 1/(1−x): G′(x) = 1/(1−x)², so x/(1−x)² generates 1, 2, 3, 4, ... while 1/(1−x)² generates (k+1) = 1, 2, 3, ... as well.',
      },
      {
        term: 'Products and Convolution',
        kind: 'theorem',
        statement: 'If G(x) = ∑aₖxᵏ and H(x) = ∑bₖxᵏ, then G(x)·H(x) = ∑cₖxᵏ with **cₖ = ∑ⱼ₌₀ᵏ aⱼ·bₖ₋ⱼ** (discrete convolution).',
        detail: "This is the algebra behind 'choose some from column A and some from column B': the coefficient of xᵏ collects every split k = j + (k − j).",
      },
      {
        term: 'Solving Recurrences with Generating Functions',
        kind: 'method',
        statement: 'Multiply the recurrence by xⁿ, sum over n, translate shifted sums into G(x) using the shift laws, solve the resulting algebraic equation for G(x), and read off coefficients.',
        detail: 'For aₙ = 2aₙ₋₁ + 1 with a₀ = 0: summing gives G(x) = 2x·G(x) + x/(1−x), so G(x) = x/((1−x)(1−2x)) = 1/(1−2x) − 1/(1−x) and aₙ = 2ⁿ − 1.',
      },
      {
        term: 'Counting with Generating Functions',
        kind: 'method',
        statement: 'To count selections under constraints, multiply one series per item type — the **coefficient of xʳ** counts selections of total r. Unlimited items of denomination d ↦ $\\frac{1}{1-x^{d}}$; at most m copies ↦ $1 + x^{d} + \\cdots + x^{md}$.',
        detail: 'Making change for 30 cents from unlimited pennies, nickels and dimes: the coefficient of x³⁰ in 1/((1−x)(1−x⁵)(1−x¹⁰)).',
      },
      {
        term: 'The Generating Function Idea',
        kind: 'insight',
        statement: 'Generating functions compress sequence-level bookkeeping into algebra — a clothesline on which we hang up a sequence.',
        detail: 'Recurrences, convolution sums and combinatorial constraints all become manipulations of rational functions; the technique scales to problems where direct counting is hopeless.',
      },
    ],
    examples: [
      {
        title: 'Making Change',
        problem: 'How many ways can you make 20 cents using unlimited pennies, nickels and dimes?',
        steps: [
          { label: 'One factor per coin type', text: 'Pennies: 1/(1−x); nickels: 1/(1−x⁵); dimes: 1/(1−x¹⁰).' },
          { label: 'Generating function', text: 'G(x) = 1/((1−x)(1−x⁵)(1−x¹⁰)); the answer is the coefficient of x²⁰.' },
          { label: 'Interpret the coefficient', text: '[x²⁰] counts triples (p, n, d) of coin counts with p + 5n + 10d = 20.' },
          { label: 'Enumerate', text: 'd = 0: n = 0..4 (5 ways); d = 1: n = 0..2 (3 ways); d = 2: n = 0 (1 way).' },
        ],
        result: '9 ways — the coefficient of x²⁰ is 9.',
      },
      {
        title: 'Solving a Recurrence',
        problem: 'Use generating functions to solve aₙ = 2aₙ₋₁ + 1 with a₀ = 0.',
        steps: [
          { label: 'Sum the recurrence', text: 'Multiply by xⁿ and sum over n ≥ 1: ∑aₙxⁿ = 2∑aₙ₋₁xⁿ + ∑xⁿ.' },
          { label: 'Translate to G(x)', text: 'G(x) − a₀ = 2x·G(x) + x/(1−x), so G(x)(1 − 2x) = x/(1−x).' },
          { label: 'Solve', text: 'G(x) = x/((1−x)(1−2x)).' },
          { label: 'Partial fractions', text: 'G(x) = 1/(1−2x) − 1/(1−x).' },
          { label: 'Read coefficients', text: 'aₙ = 2ⁿ − 1 — the Hanoi sequence, derived by pure algebra.' },
        ],
        result: 'aₙ = 2ⁿ − 1.',
      },
      {
        title: 'Bagels with Limits',
        problem: 'In how many ways can you select a dozen (12) bagels from three varieties if you take at most 5 of each kind?',
        steps: [
          { label: 'One factor per variety', text: 'Each variety contributes (1 + x + x² + x³ + x⁴ + x⁵): zero through five bagels.' },
          { label: 'Generating function', text: 'G(x) = (1 + x + ... + x⁵)³; the answer is the coefficient of x¹².' },
          { label: 'Convert to closed form', text: '(1 + x + ... + x⁵) = (1−x⁶)/(1−x), so G(x) = (1−x⁶)³/(1−x)³ and the numerator expands to 1 − 3x⁶ + 3x¹² − x¹⁸.' },
          { label: 'Extract the coefficient', text: '[x¹²] = C(14,2) − 3·C(8,2) + 3·C(2,2) = 91 − 84 + 3 = 10.' },
        ],
        result: '10 combinations — inclusion–exclusion appeared inside the coefficient extraction.',
      },
    ],
    keyTakeaways: [
      'The generating function G(x) = ∑aₖxᵏ encodes a sequence as the coefficients of one algebraic object.',
      'Know the table: ∑xᵏ = 1/(1−x), ∑aᵏxᵏ = 1/(1−ax), ∑C(n,k)xᵏ = (1+x)ⁿ.',
      'x·G(x) shifts coefficients up; x·G′(x) multiplies each coefficient by its index.',
      'Products convolve: G(x)H(x) has coefficients cₖ = ∑aⱼbₖ₋ⱼ — the engine of selection counting.',
      'Solving a recurrence: sum it into an equation for G(x), solve, then extract coefficients (partial fractions help).',
      'Constrained selection problems: one factor per item type, then read off the coefficient of xʳ.',
    ],
    quiz: [
      {
        q: 'What is the generating function of the sequence 1, 1, 1, 1, ...?',
        options: ['1/(1+x)', '1/(1−x)', 'eˣ', '(1+x)ⁿ'],
        answer: 1,
        explanation: 'The geometric series ∑ₖ xᵏ = 1/(1−x) — the most used identity in the chapter.',
      },
      {
        q: 'The sequence {aₖ} has generating function G(x) = 1/(1−3x). What is aₖ?',
        options: ['3ᵏ', 'k·3', '3k', '1/3ᵏ'],
        answer: 0,
        explanation: '1/(1−3x) = ∑ₖ (3x)ᵏ = ∑ₖ 3ᵏxᵏ, so aₖ = 3ᵏ.',
      },
      {
        q: 'If G(x) = ∑ₖ aₖxᵏ, what sequence does x·G(x) generate?',
        options: ['{aₖ₊₁}', '{0, a₀, a₁, a₂, ...}', '{aₖ/k}', '{k·aₖ}'],
        answer: 1,
        explanation: 'Multiplying by x shifts every coefficient one place to the right, prepending a zero; shifting down, (G(x) − a₀)/x, generates {aₖ₊₁}.',
      },
      {
        q: 'In the generating-function method for making change, what does the factor 1/(1−x⁵) represent?',
        options: ['One nickel', 'Any number of pennies', 'Any number of nickels', 'Exactly five coins'],
        answer: 2,
        explanation: 'Each power x⁵ʲ counts choosing j nickels (contributing 5j cents); summing over all j gives the geometric series 1/(1−x⁵) = 1 + x⁵ + x¹⁰ + ...',
      },
    ],
  },

  // ---------- 8.5 Inclusion-Exclusion ----------
  {
    sectionId: 'rosen-ch8-s5',
    readingTime: 9,
    intro: 'How many students study math or physics? Certainly not |M| + |P| — the double majors would be counted twice. Inclusion–exclusion is the art of counting unions without double counting, alternating between adding and subtracting overlaps until every element is counted exactly once.',
    objectives: [
      'Apply the two-set and three-set inclusion–exclusion formulas',
      'State and use the general n-set principle',
      'Use the complementary form to count elements belonging to none of several sets',
      'Understand why the alternating sum exactly corrects over-counting',
    ],
    concepts: [
      {
        term: 'Two-Set Principle',
        kind: 'theorem',
        statement: '**|A ∪ B| = |A| + |B| − |A ∩ B|**.',
        detail: 'Add the sizes, then remove the overlap that was counted twice. Example: |A| = 12, |B| = 9, |A ∩ B| = 4 gives |A ∪ B| = 17.',
      },
      {
        term: 'Three-Set Principle',
        kind: 'theorem',
        statement: '**|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|**.',
        detail: 'An element in exactly two of the sets appears 2 − 1 = 1 time; an element in all three appears 3 − 3 + 1 = 1 time. Every element ends up counted exactly once.',
      },
      {
        term: 'The General Principle',
        kind: 'theorem',
        statement: '**|A₁ ∪ ... ∪ Aₙ| = ∑|Aᵢ| − ∑ᵢ<ⱼ|Aᵢ∩Aⱼ| + ∑ᵢ<ⱼ<ₖ|Aᵢ∩Aⱼ∩Aₖ| − ... + (−1)ⁿ⁺¹|A₁∩...∩Aₙ|**.',
        detail: 'Odd-order intersections are added, even-order intersections subtracted. In compact form: $|\\bigcup_i A_i| = \\sum_{I \\neq \\varnothing} (-1)^{|I|+1} \\cdot |\\bigcap_{i \\in I} A_i|$.',
      },
      {
        term: 'Why the Alternating Sum Works',
        kind: 'insight',
        statement: 'An element lying in exactly k of the sets is counted $\\sum_{j=1}^{k} (-1)^{j+1} \\binom{k}{j} = 1 - (1-1)^{k} = 1$ time for k ≥ 1 — the binomial theorem makes the cancellation exact.',
        detail: 'This identity is the combinatorial heart of the principle: alternating binomial sums vanish for k ≥ 1 and equal 1 for k = 0.',
      },
      {
        term: 'Complementary Form',
        kind: 'theorem',
        statement: 'The number of elements of S belonging to **none** of A₁, ..., Aₙ is **|S| − |A₁ ∪ ... ∪ Aₙ|** = |S| − ∑|Aᵢ| + ∑ᵢ<ⱼ|Aᵢ∩Aⱼ| − ... + (−1)ⁿ|A₁∩...∩Aₙ|.',
        detail: 'This form counts objects avoiding every property — the standard setup for derangements and onto functions in the next section.',
      },
      {
        term: 'Venn Diagram Intuition',
        kind: 'insight',
        statement: 'For two and three sets, Venn diagrams let you read the formula off the regions: each region must end up with weight exactly 1.',
        detail: 'A point sitting in k regions receives total weight k − C(k,2) + C(k,3) − ... = 1, which is exactly the alternating-binomial identity.',
      },
      {
        term: 'Divisibility Counting',
        kind: 'method',
        statement: "To count integers from 1 to n divisible by at least one of d₁, ..., dₖ: use $|A_{d_i}| = \\lfloor n/d_i \\rfloor$, with intersections dividing by the **least common multiple**: $|A_d \\cap A_e| = \\lfloor n/\\operatorname{lcm}(d,e) \\rfloor$.",
        detail: 'Multiples of both 3 and 5 are multiples of lcm(3,5) = 15, so |A₃ ∩ A₅| = ⌊n/15⌋.',
      },
    ],
    examples: [
      {
        title: 'Divisible by 3 or 5',
        problem: 'How many integers from 1 to 1000 are divisible by 3 or by 5?',
        steps: [
          { label: 'Sizes', text: '|A₃| = ⌊1000/3⌋ = 333 and |A₅| = ⌊1000/5⌋ = 200.' },
          { label: 'Overlap', text: 'Multiples of both are multiples of lcm(3,5) = 15: |A₃ ∩ A₅| = ⌊1000/15⌋ = 66.' },
          { label: 'Union', text: '|A₃ ∪ A₅| = 333 + 200 − 66 = 467.' },
        ],
        result: '467 integers.',
      },
      {
        title: 'Three Student Clubs',
        problem: 'In a class of 40 students: 15 joined Math club, 12 Physics, 11 Chemistry; 6 joined both Math and Physics, 5 Math and Chemistry, 4 Physics and Chemistry; 2 joined all three. How many joined at least one club?',
        steps: [
          { label: 'Formula', text: '|M ∪ P ∪ C| = (15+12+11) − (6+5+4) + 2.' },
          { label: 'Sum singles', text: '38 club memberships counted with multiplicity.' },
          { label: 'Subtract pairs', text: '38 − 15 = 23.' },
          { label: 'Add the triple', text: '23 + 2 = 25; so 40 − 25 = 15 students joined nothing.' },
        ],
        result: '25 students joined at least one club.',
      },
      {
        title: 'Avoiding All Three Primes',
        problem: 'How many integers from 1 to 100 are divisible by none of 2, 3 and 5?',
        steps: [
          { label: 'Set sizes', text: '|A₂| = 50, |A₃| = 33, |A₅| = 20.' },
          { label: 'Pairwise overlaps', text: '|A₂∩A₃| = ⌊100/6⌋ = 16, |A₂∩A₅| = ⌊100/10⌋ = 10, |A₃∩A₅| = ⌊100/15⌋ = 6.' },
          { label: 'Triple overlap', text: '|A₂∩A₃∩A₅| = ⌊100/30⌋ = 3.' },
          { label: 'Union', text: '50 + 33 + 20 − 16 − 10 − 6 + 3 = 74.' },
          { label: 'Complement', text: '100 − 74 = 26 integers divisible by none of them.' },
        ],
        result: '26 integers — the number 1 plus the 25 integers greater than 1 whose smallest prime factor is at least 7, the key idea behind the sieve.',
      },
    ],
    keyTakeaways: [
      'Two sets: |A ∪ B| = |A| + |B| − |A ∩ B| — each overlap is subtracted exactly once.',
      'n sets alternate: + singles, − pairs, + triples, ..., (−1)ⁿ⁺¹ times the n-fold intersection.',
      'An element in exactly k sets is counted ∑(−1)ʲ⁺¹C(k,j) = 1 time — the binomial theorem makes it exact.',
      'The complementary form counts elements in none of the sets — the tool for derangements and onto functions.',
      'Divisibility counting: $|A_d| = \\lfloor n/d \\rfloor$ and intersections divide by lcms.',
    ],
    quiz: [
      {
        q: '|A| = 12, |B| = 9, |A ∩ B| = 4. What is |A ∪ B|?',
        options: ['21', '17', '13', '25'],
        answer: 1,
        explanation: '12 + 9 − 4 = 17; the 4 elements in both sets must not be double counted.',
      },
      {
        q: 'How many integers from 1 to 100 are divisible by 2 or by 3?',
        options: ['67', '50', '83', '33'],
        answer: 0,
        explanation: '50 + 33 − ⌊100/6⌋ = 50 + 33 − 16 = 67; the multiples of 6 are counted by both sets and must be subtracted once.',
      },
      {
        q: 'In the formula for |A₁ ∪ A₂ ∪ A₃|, the triple intersection term |A₁ ∩ A₂ ∩ A₃| enters with which sign, and why?',
        options: ['+ because it was never counted before', '− because all pairwise terms are subtracted', '+ because elements in all three sets have net count 3 − 3 = 0 before it is added back', 'It does not appear in the formula'],
        answer: 2,
        explanation: 'An element in all three sets is added 3 times (singles) and subtracted 3 times (pairs) — net 0 — so the triple intersection must be added back once.',
      },
      {
        q: 'The complementary form of inclusion–exclusion directly counts:',
        options: ['elements in every set', 'elements in at least one set', 'elements in none of the sets', 'elements in exactly one set'],
        answer: 2,
        explanation: 'Taking |S| − |A₁ ∪ ... ∪ Aₙ| counts elements belonging to no Aᵢ at all — the starting point for derangement and onto-function counts.',
      },
    ],
  },

  // ---------- 8.6 Applications of Inclusion-Exclusion ----------
  {
    sectionId: 'rosen-ch8-s6',
    readingTime: 10,
    intro: "Two famous counting problems fall to inclusion–exclusion in one stroke: how many functions are onto, and how many permutations fix nothing. The answers — an alternating sum for surjections and the derangement formula Dₙ = n!∑(−1)ᵏ/k! — explain why the probability that nobody gets their own hat back converges to 1/e.",
    objectives: [
      'Count onto functions with the alternating surjection formula',
      'Define derangements and derive their closed form',
      'Estimate Dₙ via the Taylor series for 1/e',
      'Connect the sieve of Eratosthenes to inclusion–exclusion',
    ],
    concepts: [
      {
        term: 'Counting Onto Functions',
        kind: 'theorem',
        statement: 'The number of **onto** functions from a set with m elements to a set with n elements (m ≥ n) is **∑ⱼ₌₀ⁿ (−1)ʲ·C(n,j)·(n−j)ᵐ = nᵐ − C(n,1)(n−1)ᵐ + C(n,2)(n−2)ᵐ − ...**',
        detail: "Total functions: nᵐ. Subtract those missing a fixed value: C(n,1)(n−1)ᵐ. Add back those missing two: C(n,2)(n−2)ᵐ. This is inclusion–exclusion over the properties 'value i is missed'.",
      },
      {
        term: 'Surjections and Stirling Numbers',
        kind: 'insight',
        statement: 'The onto count equals n!·S(m,n), where S(m,n) is a **Stirling number of the second kind** — the number of partitions of m objects into n nonempty blocks.',
        detail: 'Each onto function f induces the partition {f⁻¹(1), ..., f⁻¹(n)} of its domain; there are S(m,n) such partitions and n! ways to label the blocks with values.',
      },
      {
        term: 'Derangement',
        kind: 'definition',
        statement: 'A **derangement** is a permutation that leaves no element in its original position. Dₙ denotes the number of derangements of n objects.',
        detail: 'D₁ = 0, D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44. For {1,2,3} the derangements are (2,3,1) and (3,1,2).',
      },
      {
        term: 'The Derangement Formula',
        kind: 'theorem',
        statement: '**Dₙ = n!·∑ₖ₌₀ⁿ (−1)ᵏ/k! = n!(1 − 1/1! + 1/2! − 1/3! + ... + (−1)ⁿ/n!)**.',
        detail: "Inclusion–exclusion over the properties 'i is fixed': Dₙ = ∑ₖ (−1)ᵏC(n,k)(n−k)!, and C(n,k)·(n−k)! = n!/k!.",
      },
      {
        term: 'Derangements and e',
        kind: 'insight',
        statement: '**Dₙ ≈ n!/e**, and the probability pₙ = Dₙ/n! tends to 1/e ≈ 0.368 as n → ∞, alternating above and below it.',
        detail: 'The sum ∑(−1)ᵏ/k! is the alternating partial Taylor series of e⁻¹. The probability of a coincidence-free permutation is essentially independent of n.',
      },
      {
        term: 'Derangement Recurrences',
        kind: 'method',
        statement: 'Two handy recurrences: **Dₙ = n·Dₙ₋₁ + (−1)ⁿ** and **Dₙ = (n−1)(Dₙ₋₁ + Dₙ₋₂)**, with D₁ = 0 and D₂ = 1.',
        detail: 'Check: D₅ = 5·D₄ + (−1)⁵ = 45 − 1 = 44. These compute Dₙ without evaluating the alternating sum.',
      },
      {
        term: 'The Hatcheck Problem',
        kind: 'insight',
        statement: 'If n people randomly grab n hats, the probability that nobody gets their own hat is Dₙ/n!.',
        detail: 'For n = 5 it is 44/120 = 11/30 ≈ 0.367 — already close to 1/e.',
      },
      {
        term: 'The Sieve of Eratosthenes',
        kind: 'insight',
        statement: 'Finding the primes up to N by crossing out multiples of the primes ≤ √N is inclusion–exclusion in disguise: the survivors are exactly the numbers divisible by none of the small primes.',
        detail: 'Counting numbers ≤ 100 not divisible by 2, 3, 5 or 7 (with lcms handling intersections) gives 22 numbers: the number 1 and the 21 primes between 10 and 100 — hence 25 primes up to 100.',
      },
    ],
    examples: [
      {
        title: 'Onto Functions',
        problem: 'How many functions from a 6-element set onto a 3-element set are there?',
        steps: [
          { label: 'All functions', text: '3⁶ = 729 total functions.' },
          { label: 'Subtract non-onto', text: 'Functions missing a fixed value: C(3,1)·2⁶ = 3·64 = 192.' },
          { label: 'Add back double misses', text: 'Functions missing two fixed values: C(3,2)·1⁶ = 3.' },
          { label: 'Formula', text: '729 − 192 + 3 = 540.' },
        ],
        result: '540 onto functions (equivalently 3!·S(6,3) = 6·90).',
      },
      {
        title: 'The Hatcheck Problem, n = 5',
        problem: 'Five people each grab a random hat. What is the probability that nobody gets their own?',
        steps: [
          { label: 'Total outcomes', text: '5! = 120 permutations of hats.' },
          { label: 'Favorable outcomes', text: 'D₅ = 5!(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120) = 120 − 120 + 60 − 20 + 5 − 1 = 44.' },
          { label: 'Probability', text: '44/120 = 11/30 ≈ 0.367.' },
          { label: 'Compare with 1/e', text: '1/e ≈ 0.3679 — the probability is already nearly converged.' },
        ],
        result: '11/30 ≈ 0.367.',
      },
      {
        title: 'Primes Below 100 by Sieve',
        problem: 'Use inclusion–exclusion to count the primes up to 100.',
        steps: [
          { label: 'Key fact', text: 'Every composite ≤ 100 has a prime factor ≤ √100 = 10, so the survivors of crossing out 2, 3, 5 and 7 are the number 1 and all primes in (10, 100].' },
          { label: 'Multiples', text: '|A₂| = 50, |A₃| = 33, |A₅| = 20, |A₇| = 14.' },
          { label: 'Pairwise (lcm) overlaps', text: '16 + 10 + 7 + 6 + 4 + 2 = 45.' },
          { label: 'Triple overlaps', text: '⌊100/30⌋ + ⌊100/42⌋ + ⌊100/70⌋ + ⌊100/105⌋ = 3 + 2 + 1 + 0 = 6.' },
          { label: 'Inclusion–exclusion', text: 'Union = (50+33+20+14) − 45 + 6 = 78, so 100 − 78 = 22 survivors.' },
          { label: 'Count primes', text: 'The 22 survivors are 1 and 21 primes greater than 10; adding the primes 2, 3, 5, 7 themselves gives 25.' },
        ],
        result: 'π(100) = 25 primes.',
      },
    ],
    keyTakeaways: [
      'Onto functions from an m-set to an n-set: ∑ⱼ(−1)ʲC(n,j)(n−j)ᵐ — inclusion–exclusion over missed values.',
      'A derangement fixes nothing: Dₙ = n!∑ₖ(−1)ᵏ/k!.',
      'Dₙ ≈ n!/e; the probability that a random permutation is a derangement tends to 1/e.',
      'Handy recurrences: Dₙ = nDₙ₋₁ + (−1)ⁿ and Dₙ = (n−1)(Dₙ₋₁ + Dₙ₋₂).',
      'The sieve of Eratosthenes is inclusion–exclusion on divisibility: survivors of crossing out small primes.',
    ],
    quiz: [
      {
        q: 'How many onto functions are there from a 4-element set to a 2-element set?',
        options: ['16', '14', '12', '8'],
        answer: 1,
        explanation: '2⁴ − C(2,1)·1⁴ = 16 − 2 = 14: subtract the two constant (non-onto) functions.',
      },
      {
        q: 'What is D₄, the number of derangements of 4 objects?',
        options: ['24', '9', '11', '6'],
        answer: 1,
        explanation: 'D₄ = 4!(1 − 1 + 1/2 − 1/6 + 1/24) = 24 − 24 + 12 − 4 + 1 = 9.',
      },
      {
        q: 'As n grows, the probability Dₙ/n! that a random permutation is a derangement approaches:',
        options: ['0', '1/2', '1/e ≈ 0.368', '1'],
        answer: 2,
        explanation: 'Dₙ/n! = ∑ₖ₌₀ⁿ (−1)ᵏ/k! → e⁻¹ ≈ 0.3679 — the alternating Taylor series for 1/e.',
      },
      {
        q: 'In the onto-function count ∑ⱼ(−1)ʲC(n,j)(n−j)ᵐ, what does the term C(n,1)(n−1)ᵐ represent?',
        options: ['Functions that hit every value', 'Functions missing a specified value, summed over the n choices of that value', 'Functions missing exactly two values', 'Bijections only'],
        answer: 1,
        explanation: 'For each of the C(n,1) = n choices of a missed value, (n−1)ᵐ functions avoid it — but functions missing two values are subtracted twice, which is why the +C(n,2)(n−2)ᵐ term restores them.',
      },
      // PYQ-pattern — derangement recurrence D5 (rephrased, values changed)
      {
        q: 'What is $D_{5}$, the number of derangements of $5$ objects?',
        options: [`$120$`, `$45$`, `$24$`, `$44$`],
        answer: 3,
        explanation: 'Step 1: Restate $D_{5}$ as permutations of $5$ objects with no fixed point. Step 2: Recall the key formula $D_{n} = n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!}$. Step 3: Expand for $n = 5$ as $120(1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120})$. Step 4: Simplify term by term to $0 + 60 - 20 + 5 - 1 = 44$. Step 5: The distractor $120$ counts all permutations, $45$ rounds the $44$ plus one, and $24$ is $4!$ rather than $D_{5}$. Step 6: Hence $D_{5} = 44$.'
      },
    ],
  },
]
