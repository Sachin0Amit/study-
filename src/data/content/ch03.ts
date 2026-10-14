import type { SectionContent } from '../library'

// ============================================================================
// Rosen, Discrete Mathematics and Its Applications, 8th Edition
// Chapter 3: Algorithms (Sections 3.1 – 3.3)
// Master study content.
// ============================================================================

export const ch3Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: "rosen-ch3-s1",
    readingTime: 9,
    intro: "An algorithm is a finite list of unambiguous instructions that turns inputs into outputs — the formal heart of computer science. This section defines what makes a procedure an algorithm, develops the search, sort and greedy classics in pseudocode, and closes with the first great impossibility theorem: the halting problem.",
    objectives: [
      "State the properties every algorithm must have",
      "Read and write pseudocode using Rosen's conventions",
      "Trace linear search, binary search, bubble sort and insertion sort on concrete inputs",
      "Execute the greedy change-making algorithm and recognize when it fails to be optimal",
      "Understand the undecidability proof of the halting problem"
    ],
    concepts: [
      {
        term: "Algorithms and their properties",
        kind: "definition",
        statement: "An **algorithm** is a finite sequence of precise, unambiguous instructions for solving a problem. Every algorithm must have: **input** (values from a specified set), **output** (at least one value), **definiteness** (each step precisely defined), **correctness** (produces the correct output for every input), **finiteness** (terminates after finitely many steps), **effectiveness** (each step is basic enough to be carried out), and **generality** (applies to the whole class of problems it claims to).",
        detail: "The word traces to al-Khowarizmi, a 9th-century Persian mathematician; the modern meaning — effective procedure — is the object computer science studies. An algorithm is an abstract artifact, independent of programming language or hardware."
      },
      {
        term: "Pseudocode conventions",
        kind: "notation",
        statement: "Rosen's pseudocode uses: **procedure** *name*(inputs) to begin, **:=** for assignment, blocks delimited by **indentation**, **while** *condition* … **end while**, **for** *var* := *a* to *b* … **end for**, **if** *condition* **then** … **else** … **end if**, **return** to exit with a value, and braces { } for comments.",
        detail: "Pseudocode is for humans: it strips away language syntax while keeping step-by-step precision. Reading trace: follow the variable values line by line on small inputs — the single best way to understand (or debug) any algorithm."
      },
      {
        term: "Linear search",
        kind: "method",
        statement: "**Linear search** scans a list left to right comparing each element with the target x, returning the position of the first match (or 0 / “not found”). It works on any list, sorted or not.",
        detail: "Worst case: the target is last or absent — n comparisons for a list of n elements (Section 3.3 computes the details). Linear search is the baseline every smarter search must beat, and for unsorted data it is the only option that is still trivially correct."
      },
      {
        term: "Binary search",
        kind: "method",
        statement: "**Binary search** on a *sorted* list compares x with the middle element: if equal, stop; if x is smaller, search the left half; if larger, search the right half — halving the remaining interval every step until found or the interval is empty.",
        detail: "After each comparison at most half the candidates remain, so the number of comparisons is about 2log₂ n. The correctness proof (find the invariant: “if x is present, it lies within the current interval [i, j]”) is a classic use of loop invariants. Binary search is why sorted data is worth maintaining."
      },
      {
        term: "Bubble sort",
        kind: "method",
        statement: "**Bubble sort** makes passes through the list, comparing each adjacent pair and swapping if out of order; larger values “bubble” toward the end. After pass i, the i largest elements occupy their final positions, so pass i need only reach position n − i.",
        detail: "Rosen's version runs the fixed double loop (n − 1 passes with shrinking inner loops), always performing n(n − 1)/2 comparisons regardless of input — Θ(n²) always (Section 3.3). It is a teaching algorithm: simple, stable, and rarely the practical choice."
      },
      {
        term: "Insertion sort",
        kind: "method",
        statement: "**Insertion sort** builds a sorted prefix one element at a time: take the next unsorted element and slide it left into its correct place among the already-sorted elements by repeated swaps.",
        detail: "On an already-sorted list each new element compares once and swaps zero times — Θ(n) best case, the reason insertion sort is the standard choice for small or nearly-sorted inputs. Worst case remains Θ(n²) (each element travels past the whole prefix)."
      },
      {
        term: "Greedy algorithms and change-making",
        kind: "method",
        statement: "A **greedy algorithm** makes the locally optimal choice at each step. The **greedy change-making algorithm**: repeatedly take the largest coin denomination ≤ the remaining amount. With the US system (25, 10, 5, 1) it always minimizes the number of coins; with arbitrary denominations it can fail.",
        detail: "Failure example: denominations 25, 10, 1 for the amount 30 — greedy gives 25 + 1 + 1 + 1 + 1 + 1 (six coins) while 10 + 10 + 10 uses three. Greedy is a *strategy*, not a guarantee: each problem needs its own proof that greedy choices compose into a global optimum (Chapter 6 re-encounters this in counting, and algorithm design courses return to it in depth)."
      },
      {
        term: "Verifying algorithm correctness",
        kind: "insight",
        statement: "An algorithm is **correct** when it produces the correct output for every valid input — not merely the inputs you tested. For iterative algorithms the standard tool is a **loop invariant**: a statement that holds before and after every iteration and, together with termination, implies correctness.",
        detail: "For binary search the invariant is “if x is in the list, it lies between positions i and j.” Each iteration preserves it while shrinking the interval; when the loop ends, the invariant pins down the answer. Chapter 5 (induction) makes this reasoning airtight."
      },
      {
        term: "The halting problem",
        kind: "theorem",
        statement: "**There is no procedure that decides, for every program P and input I, whether P eventually halts on I.** The problem is *undecidable*: no algorithm solving it can exist.",
        detail: "Proof by contradiction (diagonalization, Section 2.5): suppose H(P, I) decides halting. Build K(P) which runs H(P, P) and then does the opposite — halting iff H says P(P) loops, looping iff H says it halts. Feeding K to itself, K(K) halts iff it doesn't — contradiction. This shows computation has hard limits, decades before P vs NP asked about *efficient* computation."
      }
    ],
    examples: [
      {
        title: "Tracing binary search",
        problem: "Trace binary search for x = 8 in the sorted list L = [1, 3, 5, 7, 9, 11, 13] (positions 1–7).",
        steps: [
          { label: "Step 1: First probe — the middle", text: "Interval [1, 7], middle position 4: L(4) = 7. Since 8 > 7, discard positions 1–4; the target can only lie in [5, 7]." },
          { label: "Step 2: Second probe", text: "Interval [5, 7], middle position 6: L(6) = 11. Since 8 < 11, discard position 6 and beyond: now [5, 5]." },
          { label: "Step 3: Third probe", text: "Interval [5, 5], middle position 5: L(5) = 9. Since 8 < 9, the interval shrinks to [5, 4] — empty." },
          { label: "Step 4: Termination", text: "The interval is empty (start > end), so 8 is not in the list: report not found." }
        ],
        result: "Not found — in three comparisons, against seven for linear search. Each probe halves the candidates: 7 → 3 → 1 → 0."
      },
      {
        title: "Greedy change-making, worked and stress-tested",
        problem: "Apply greedy change-making to 67 cents with denominations 25, 10, 5, 1. Then try the same algorithm with denominations 25, 10, 1 for 30 cents.",
        steps: [
          { label: "Step 1: 67 cents, standard coins", text: "Largest ≤ 67 is 25 (twice): 67 → 42 → 17. Largest ≤ 17 is 10: 17 → 7. Then 5: 7 → 2. Then 1 + 1: 2 → 0." },
          { label: "Step 2: Count the coins", text: "25 + 25 + 10 + 5 + 1 + 1 — six coins, which is optimal for the US system." },
          { label: "Step 3: Now the awkward denominations", text: "30 cents with {25, 10, 1}: greedy takes 25, leaving 5 — five pennies: 25 + 1 + 1 + 1 + 1 + 1, six coins." },
          { label: "Step 4: Compare with the true optimum", text: "Three dimes = 30 exactly: three coins. Greedy's first “locally best” choice (the quarter) blocked the global optimum." }
        ],
        result: "Greedy is optimal for the US coin system but not for arbitrary denominations — a concrete demonstration that greedy strategy requires a per-problem optimality proof."
      },
      {
        title: "The halting problem is unsolvable",
        problem: "Show that no procedure H(P, I) can decide for every program P and input I whether P halts on I.",
        steps: [
          { label: "Step 1: Suppose H exists", text: "Assume H(P, I) always correctly answers “halts” or “never halts.”" },
          { label: "Step 2: Build the diagonal program", text: "Define K(P): run H(P, P); if the answer is “halts,” loop forever; if “never halts,” stop immediately." },
          { label: "Step 3: Feed K to itself — case 1", text: "If K(K) halts, then H(K, K) answered “halts”; but by its definition K(K) then loops forever. Contradiction." },
          { label: "Step 4: Feed K to itself — case 2", text: "If K(K) loops forever, then H(K, K) answered “never halts”; but by its definition K(K) then stops. Contradiction." },
          { label: "Step 5: Conclude", text: "Both possible behaviors of K(K) contradict the assumption, so H cannot exist." }
        ],
        result: "The halting problem is undecidable — no algorithm, however clever or fast, can decide halting for all programs. This is Cantor's diagonalization reborn in computation."
      }
    ],
    keyTakeaways: [
      "An algorithm needs input, output, definiteness, correctness, finiteness, effectiveness and generality — miss one and it is not an algorithm.",
      "Binary search requires sorted input and wins by halving: about 2log₂ n comparisons against linear search's n.",
      "Bubble sort is Θ(n²) always; insertion sort is Θ(n) on nearly-sorted input — matching the algorithm to the data matters.",
      "Greedy = locally best choice each step; prove global optimality per problem (US coins yes, {25,10,1} at 30 cents no).",
      "Correctness demands all inputs, not just tested ones — loop invariants are the standard verification tool.",
      "The halting problem is undecidable: diagonalization proves no decision procedure can exist."
    ],
    quiz: [
      {
        q: "Binary search may be applied when:",
        options: ["the list is sorted", "the list has an even number of elements", "every element is distinct", "the list is short"],
        answer: 0,
        explanation: "Halving the interval only makes sense when comparisons split the candidates, which requires order. Distinctness, parity of length, and size are irrelevant — an unsorted list defeats binary search no matter what."
      },
      {
        q: "Greedy change-making with denominations 25, 10, 1 applied to 30 cents produces:",
        options: ["3 coins — three dimes", "6 coins — one quarter and five pennies", "2 coins", "no solution"],
        answer: 1,
        explanation: "Greedy takes the quarter first (25 ≤ 30), leaving 5, which only pennies can cover: 25 + 1·5 = six coins. The optimum is three dimes — greedy is not always optimal."
      },
      {
        q: "The halting problem asks whether an algorithm can decide, for every program and input:",
        options: ["whether the program produces the correct output", "whether the program eventually stops running", "how much memory the program uses", "whether the program is written correctly"],
        answer: 1,
        explanation: "Halting = eventual termination. The theorem is that no such decision procedure exists — establishing a fundamental limit of computation, separate from questions of speed or memory."
      },
      {
        q: "After the first complete pass of bubble sort on the list 5, 1, 4, 2, 8:",
        options: ["the list is fully sorted", "the largest element, 8, is guaranteed to be in its final position", "the smallest element is guaranteed to be first", "the list is unchanged"],
        answer: 1,
        explanation: "Sweeping adjacent swaps carries the largest-so-far value to the end of the list: 5,1,4,2,8 → 1,5,4,2,8 → 1,4,5,2,8 → 1,4,2,5,8 → 1,4,2,5,8. The list is not yet sorted, but 8 can never move again."
      }
    ]
  },

  // ---------------------------------------------------------------- 3.2
  {
    sectionId: "rosen-ch3-s2",
    readingTime: 10,
    intro: "How do you say “this algorithm's work grows no faster than that one” precisely? Big-O, big-Omega and big-Theta notation turn vague fastness claims into inequalities between functions with explicit witnesses. This section builds the definitions, the polynomial and combination theorems, and the growth ladder — log, polynomial, exponential, factorial — that orders the entire zoo of algorithm behaviors.",
    objectives: [
      "Use the definitions of big-O, big-Omega and big-Theta with explicit witnesses",
      "Prove polynomial bounds using the degree theorem",
      "Combine known bounds with the sum and product rules",
      "Order the standard complexity classes by growth rate"
    ],
    concepts: [
      {
        term: "Big-O notation",
        kind: "definition",
        statement: "f(x) is **O(g(x))** iff there are constants C > 0 and k (the **witnesses**) such that |f(x)| ≤ C|g(x)| for all x > k. Informally: f grows no faster than a constant multiple of g, eventually.",
        detail: "The witness pair (C, k) makes the claim checkable: for f(x) = x² + 4x + 17, choosing C = 22, k = 1 works since x² + 4x + 17 ≤ 22x² for x ≥ 1. Big-O is an *upper bound*: “7n³ is O(n³)” and also (loosely) “7n³ is O(n⁴).”"
      },
      {
        term: "Big-Omega notation",
        kind: "definition",
        statement: "f(x) is **Ω(g(x))** iff there are witnesses C > 0, k with |f(x)| ≥ C|g(x)| for all x > k — f grows at least as fast as a constant multiple of g. Equivalently: f is Ω(g) iff g is O(f).",
        detail: "Where big-O bounds from above, Ω bounds from below: “the algorithm takes at least this long in the worst case.” For a positive-leading polynomial, dropping to a constant times the leading term eventually underestimates it: x² + 4x + 17 ≥ x² for x ≥ 1, so it is Ω(x²)."
      },
      {
        term: "Big-Theta notation",
        kind: "definition",
        statement: "f(x) is **Θ(g(x))** iff it is both O(g(x)) and Ω(g(x)): there are C₁, C₂ > 0 and k with C₁|g(x)| ≤ |f(x)| ≤ C₂|g(x)| for all x > k. This says f and g have the **same growth rate** up to constant factors.",
        detail: "Θ is the tight, two-sided classification people mean by “the complexity is …”: x² + 4x + 17 is Θ(x²). Big-Θ is an equivalence-relation-like grouping (reflexive, symmetric, transitive up to the relation's intent) — functions partition into growth classes."
      },
      {
        term: "The polynomial theorem",
        kind: "theorem",
        statement: "If f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ⋯ + a₁x + a₀ with aₙ > 0 and degree n, then f(x) is Θ(xⁿ) — every polynomial is big-Theta of its leading term.",
        detail: "Upper: for x ≥ 1, each |aᵢ|xⁱ ≤ |aᵢ|xⁿ, so |f(x)| ≤ (∑|aᵢ|)xⁿ. Lower: for x ≥ 1, f(x) ≥ (aₙ/2)xⁿ (the tail cannot cancel more than half the leading term — or more simply, aₙxⁿ/2 for x large enough). Consequence: 7x³ + 3x + 100 is Θ(x³), and lower-degree terms never matter."
      },
      {
        term: "Combining growth bounds",
        kind: "theorem",
        statement: "If f₁ is O(g₁) and f₂ is O(g₂), then f₁ + f₂ is O(max(|g₁|, |g₂|)) and f₁·f₂ is O(g₁g₂). Also: c·f is O(g) when f is; and big-O is transitive (f O g, g O h ⟹ f O h).",
        detail: "Sum rule: sequential work adds the dominating term — that is why a program's overall complexity is the max of its parts. Product rule: nested work multiplies — a loop of n iterations each doing n work is n². These two rules alone compute the complexity of most simple code."
      },
      {
        term: "The growth ladder",
        kind: "insight",
        statement: "In order of eventual dominance: **O(1) ≺ O(log n) ≺ O(√n) ≺ O(n) ≺ O(n log n) ≺ O(n²) ≺ O(n³) ≺ O(2ⁿ) ≺ O(n!)**. Each class eventually exceeds any constant multiple of the previous one.",
        detail: "Key comparisons: log grows slower than any positive power of n; every exponential c·dˣ with d > 1 eventually beats every polynomial; and n! eventually beats every exponential. Stirling's formula n! ≈ √(2πn)(n/e)ⁿ shows factorial growth towering over 2ⁿ. Practical meaning: an n! algorithm is hopeless beyond n ≈ 12, a 2ⁿ algorithm beyond n ≈ 40."
      },
      {
        term: "Showing f is not O(g)",
        kind: "method",
        statement: "To prove f is *not* O(g), show that the ratio |f|/|g| grows beyond every constant: for every C > 0 there is an x with |f(x)| > C|g(x)|. A single row of the ratio table often suffices for exponentials vs polynomials.",
        detail: "Example shape: 2ˣ/x² → ∞ — doubling x squares the exponential factor (2²ˣ = (2ˣ)²) while the denominator only quadruples, so the ratio grows without bound and no witness C survives. Such impossibility proofs separate classes on the ladder (n² is not O(n log n), 2ⁿ is not O(n¹⁰⁰⁰), n! is not O(2ⁿ))."
      },
      {
        term: "Witnesses and the art of the bound",
        kind: "method",
        statement: "To prove f is O(g), produce and verify witnesses (C, k). A robust recipe: bound each term of f by a multiple of the corresponding power of g's dominant term on x > k (usually k = 1), then add the multiples.",
        detail: "For f(x) = x² + 4x + 17 with g(x) = x²: for x > 1, x² ≤ x², 4x ≤ 4x², 17 ≤ 17x², so f ≤ 22x². Witnesses are never unique — smaller ones are elegant but any valid pair certifies the bound."
      },
      {
        term: "Important functions and their growth",
        kind: "insight",
        statement: "The reference functions of algorithm analysis: **1** (constant), **log n** (halving/searching), **n** (scanning), **n log n** (good sorting), **n²** (all-pairs), **n³** (all triples), **cⁿ** (exhaustive subsets), **n!** (all permutations).",
        detail: "Log bases are interchangeable up to a constant (log₂ n = log n / log 2), so big-O ignores the base. The same ladder prices algorithms in Section 3.3, where worst/average/best case distinctions get attached to these classes."
      }
    ],
    examples: [
      {
        title: "Proving a big-O bound with witnesses",
        problem: "Show that f(x) = x² + 4x + 17 is O(x²), and then show it is actually Θ(x²).",
        steps: [
          { label: "Step 1: Set up the target inequality", text: "We need C and k with x² + 4x + 17 ≤ C·x² for x > k. Try k = 1: then x ≥ 1 forces x ≤ x² and 1 ≤ x²." },
          { label: "Step 2: Dominate each term", text: "For x ≥ 1: x² ≤ x², 4x ≤ 4x², 17 ≤ 17x². Adding: f(x) ≤ (1 + 4 + 17)x² = 22x²." },
          { label: "Step 3: State the witnesses", text: "C = 22, k = 1 certify f is O(x²). (Tighter pairs exist; any valid pair suffices.)" },
          { label: "Step 4: Prove the lower bound for Θ", text: "For x ≥ 1, f(x) = x² + 4x + 17 ≥ x², so f is Ω(x²) with C = 1, k = 1." },
          { label: "Step 5: Combine", text: "Upper and lower bounds together: 1·x² ≤ f(x) ≤ 22·x² for x ≥ 1, so f is Θ(x²)." }
        ],
        result: "f(x) = x² + 4x + 17 is Θ(x²) — consistent with the polynomial theorem: only the leading term matters."
      },
      {
        title: "A two-sided bound for a cubic",
        problem: "Show that x³ + 3x is Θ(x³) with explicit witnesses.",
        steps: [
          { label: "Step 1: Upper bound for x ≥ 1", text: "Since x ≤ x³ for x ≥ 1: x³ + 3x ≤ x³ + 3x³ = 4x³. So C₂ = 4 works." },
          { label: "Step 2: Lower bound for x ≥ 1", text: "Dropping the positive term: x³ + 3x ≥ x³. So C₁ = 1 works." },
          { label: "Step 3: Assemble the sandwich", text: "1·x³ ≤ x³ + 3x ≤ 4·x³ for all x ≥ 1." }
        ],
        result: "Witnesses C₁ = 1, C₂ = 4, k = 1 prove x³ + 3x is Θ(x³) — the same sandwich pattern proves the general polynomial theorem."
      },
      {
        title: "Climbing the growth ladder",
        problem: "Order these functions by eventual growth from slowest to fastest: log₂ n, √n, n, n log₂ n, n², 2ⁿ, n!.",
        steps: [
          { label: "Step 1: Logarithm first", text: "log₂ n grows slower than any positive power: for any ε > 0, log₂ n is $O(n^{\\varepsilon})$ (prove by taking ε-th powers: (log₂ n)ᵉ ≤ n eventually)." },
          { label: "Step 2: Powers of n line up", text: "$\\sqrt{n} = n^{0.5} \\prec n \\prec n^{2}$ — compare exponents." },
          { label: "Step 3: n log n wedges between n and n²", text: "log₂ n ≤ n eventually, so n log₂ n is O(n²) but not O(n) (log₂ n outgrows every constant)." },
          { label: "Step 4: Exponentials beat all polynomials", text: "Compare 2ⁿ with n²: moving from n to n + 1 multiplies the exponential's advantage — 2ⁿ⁺¹/2ⁿ = 2, while (n + 1)²/n² → 1. Repeated doubling wins against any fixed power, so 2ⁿ/n² → ∞." },
          { label: "Step 5: Factorial beats exponential", text: "For n ≥ 2, every factor of n! = n(n−1)⋯2·1 is at least 2, so n! ≥ 2ⁿ⁻¹ — and the surplus of factors above 2 makes n!/2ⁿ grow beyond every constant." }
        ],
        result: "log₂ n ≺ √n ≺ n ≺ n log₂ n ≺ n² ≺ 2ⁿ ≺ n! — the master ordering used throughout Section 3.3 and all of algorithm design."
      }
    ],
    keyTakeaways: [
      "f is O(g) iff witnesses C, k give |f(x)| ≤ C|g(x)| for all x > k — an eventual upper bound.",
      "Ω is the dual lower bound; Θ means both, i.e., f and g grow at the same rate up to constants.",
      "Every polynomial is Θ of its leading term — lower-order terms and constants never matter.",
      "Sums take max (sequential code), products multiply (nested code): the two rules that price most programs.",
      "The ladder: 1 ≺ log n ≺ √n ≺ n ≺ n log n ≺ n² ≺ n³ ≺ 2ⁿ ≺ n! — each rung eventually dominates the previous.",
      "Proving f is NOT O(g) requires the ratio to exceed every constant — a single column of large-x values won't do alone, a limiting argument will."
    ],
    quiz: [
      {
        q: "f(x) = 7x³ + 20x + 9 is:",
        options: ["Θ(x³)", "Θ(x²)", "O(1)", "Ω(2ˣ)"],
        answer: 0,
        explanation: "By the polynomial theorem, a degree-3 polynomial with positive leading coefficient is Θ(x³): the linear term and constant are eventually negligible. It is certainly not bounded above by a constant, and no polynomial grows as fast as an exponential."
      },
      {
        q: "To prove that f(x) is O(g(x)) you must produce:",
        options: ["witnesses C > 0 and k such that |f(x)| ≤ C|g(x)| for all x > k", "a single value x₀ with f(x₀) ≤ g(x₀)", "a proof that f(x) = C·g(x) for all x", "the exact maximum value of f"],
        answer: 0,
        explanation: "The definition is a witnessed, eventual inequality. One lucky data point proves nothing, exact proportionality is far too strong (and rare), and big-O never requires knowing exact maxima."
      },
      {
        q: "Which function grows fastest as n → ∞?",
        options: ["2ⁿ", "n!", "n¹⁰⁰⁰", "n log n"],
        answer: 1,
        explanation: "Factorial growth dominates: by Stirling's formula n! ≈ √(2πn)(n/e)ⁿ, which eventually exceeds any exponential c·dⁿ, and exponentials in turn beat every fixed power n¹⁰⁰⁰."
      },
      {
        q: "Which statement is TRUE?",
        options: ["n log n is O(n²)", "n² is O(n log n)", "2ⁿ is O(n¹⁰⁰⁰)", "log n is O(1)"],
        answer: 0,
        explanation: "Since log n ≤ n for n ≥ 2, n log n ≤ n². The rest fail: n²/(n log n) = n/log n → ∞, exponentials eventually exceed every polynomial, and log n is unbounded so no constant bounds it."
      }
    ]
  },

  // ---------------------------------------------------------------- 3.3
  {
    sectionId: "rosen-ch3-s3",
    readingTime: 9,
    intro: "Complexity theory attaches numbers to algorithms: how many operations, how much memory, in the worst case, on average, at best. This section computes the complexity of the Chapter 3 classics — searching, sorting, Euclid's algorithm — and draws the practical dividing line between tractable (polynomial) and intractable (exponential) problems.",
    objectives: [
      "Compute worst-case and average-case complexity of linear and binary search",
      "Count the comparisons made by bubble and insertion sort",
      "Analyze time complexity of Euclid's algorithm",
      "Distinguish time from space complexity",
      "Classify algorithms as tractable or intractable"
    ],
    concepts: [
      {
        term: "Time complexity",
        kind: "definition",
        statement: "The **time complexity** of an algorithm is the amount of computer time it uses as a function of the input size n — in practice, the count of basic operations (comparisons, additions, swaps), each charged a constant cost. By Section 3.2, the count is expressed with big-O, Ω, Θ.",
        detail: "The convention “every basic operation costs one unit” is coarse but robust: on any real machine the constants shift, the growth classes do not. When comparing two algorithms of the same Θ class, constants and lower-order terms matter again."
      },
      {
        term: "Space complexity",
        kind: "definition",
        statement: "The **space complexity** of an algorithm is the memory it uses as a function of input size, measured in the same asymptotic style. Auxiliary space = memory beyond the input itself.",
        detail: "Binary search uses O(1) auxiliary space (a few index variables) — in-place. Merge sort (Chapter 5) uses O(n) auxiliary space. Time–space trade-offs are a recurring design theme: caching saves time by spending memory."
      },
      {
        term: "Worst-case complexity",
        kind: "definition",
        statement: "The **worst-case** time complexity is the maximum number of operations over all inputs of size n — the guarantee the algorithm always meets. It is the standard reported measure.",
        detail: "For linear search: the target is last or absent, giving exactly n comparisons — Θ(n). Worst case is the right number when deadlines matter (real-time systems) and it is usually the easiest to compute: adversarially place the target."
      },
      {
        term: "Average-case complexity",
        kind: "definition",
        statement: "The **average-case** complexity is the expected number of operations over a probability distribution of inputs (usually uniform). For linear search with the target present and equally likely at each position: (1 + 2 + ⋯ + n)/n = (n + 1)/2 — still Θ(n).",
        detail: "Average case needs a model of the inputs, which may or may not match reality. Insertion sort is Θ(n²) on average but Θ(n) on (nearly) sorted inputs — for data that is “almost sorted in practice,” the best case is the typical case."
      },
      {
        term: "Complexity of linear and binary search",
        kind: "theorem",
        statement: "Linear search: Θ(n) worst case, (n + 1)/2 average (target present, uniform position). Binary search: Θ(log n) worst case — at most about 2log₂ n + 1 element comparisons on a sorted list of n elements.",
        detail: "Why 2log₂ n + 1: each iteration does at most two comparisons (less-than and greater-than) and there are at most ⌊log₂ n⌋ + 1 halvings before the interval empties. Scale: n = 10⁶ — linear does a million comparisons, binary about forty."
      },
      {
        term: "Complexity of the simple sorts",
        kind: "theorem",
        statement: "Bubble sort (Rosen's version) always performs exactly n(n − 1)/2 comparisons — Θ(n²) worst, average and best. Insertion sort performs at most n(n −  1)/2 comparisons (Θ(n²) worst), about half that on average, and exactly n − 1 comparisons (Θ(n)) on an already-sorted list.",
        detail: "The count (n − 1) + (n − 2) + ⋯ + 1 = n(n − 1)/2 is the triangular sum from Section 2.4. Faster general sorts — merge sort at Θ(n log n) — arrive in Chapter 5, and no comparison sort can beat Θ(n log n) (Chapter 6's counting ideas sketch why)."
      },
      {
        term: "Complexity of Euclid's algorithm",
        kind: "theorem",
        statement: "The number of divisions used by the Euclidean algorithm to compute gcd(a, b) with a ≥ b > 0 is **O(log b)** — the inputs shrink at least geometrically because two consecutive Fibonacci numbers are the worst case (Lamé's theorem).",
        detail: "Lamé's theorem: if the algorithm takes n division steps with a ≥ b, then b ≥ fₙ₊₁ (Fibonacci), so the step count is at most about log_φ(b) ≈ 1.44 log₂ b. Euclid is thus logarithmic — astonishingly efficient for a 2,300-year-old algorithm."
      },
      {
        term: "Tractability and the class P",
        kind: "definition",
        statement: "A problem is **tractable** if an algorithm solving it runs in polynomial time (nᵏ for some constant k); the class of problems solvable in polynomial time is called **P**. Problems requiring super-polynomial (typically exponential) time in the input size are **intractable** in practice.",
        detail: "The polynomial/exponential boundary is the practical cliff: on a computer doing 10⁹ operations/second, n = 30 needs 0.03s at n³ but 10⁴ years at 2ⁿ. The class **NP** (solutions *verifiable* in polynomial time) contains P, and whether P = NP is the most famous open problem in mathematics — a million-dollar Millennium Prize."
      },
      {
        term: "Understanding algorithm efficiency",
        kind: "insight",
        statement: "Rules of thumb: a Θ(log n) algorithm is effectively instant at any realistic scale; Θ(n) scans are cheap; Θ(n log n) is the price of general comparison sorting; Θ(n²) works to a few tens of thousands of items; Θ(2ⁿ) and Θ(n!) only for tiny n. Hardware speedups shift constants, never classes.",
        detail: "A 1000× faster computer moves the 2ⁿ-feasible frontier from n ≈ 30 to n ≈ 40 — a logarithmic gain. A better algorithm (say Θ(n log n) instead of Θ(n²)) turns overnight jobs into seconds. This is why complexity classes, not benchmarks, are the theory of computing."
      }
    ],
    examples: [
      {
        title: "Linear vs binary search at scale",
        problem: "Compare worst-case comparisons for linear and binary search on n = 64 and n = 1,000,000.",
        steps: [
          { label: "Step 1: Linear search at n = 64", text: "Worst case (target absent or last): 64 comparisons — one per element." },
          { label: "Step 2: Binary search at n = 64", text: "The interval halves 64 → 32 → 16 → 8 → 4 → 2 → 1: six rounds (log₂ 64 = 6), at most about 2·6 + 1 = 13 comparisons." },
          { label: "Step 3: Linear search at a million", text: "One million comparisons." },
          { label: "Step 4: Binary search at a million", text: "log₂(10⁶) ≈ 19.93, so about 2·20 + 1 = 41 comparisons." }
        ],
        result: "64 vs 13, then 10⁶ vs about 41: the gap between Θ(n) and Θ(log n) explodes with scale — doubling n adds just one more binary-search round."
      },
      {
        title: "Counting bubble sort's comparisons",
        problem: "Derive the exact number of comparisons bubble sort performs on a list of n elements, and evaluate it for n = 100.",
        steps: [
          { label: "Step 1: Count the inner loop", text: "Pass i compares adjacent pairs in the first n − i + 1 positions — that is n − i comparisons (i = 1, …, n − 1)." },
          { label: "Step 2: Sum over passes", text: "(n − 1) + (n − 2) + ⋯ + 2 + 1 = n(n − 1)/2, the triangular number (Section 2.4)." },
          { label: "Step 3: Note the input-independence", text: "Rosen's loops run a fixed number of times regardless of the data — even a sorted list pays full price." },
          { label: "Step 4: Evaluate at n = 100", text: "100 · 99/2 = 4,950 comparisons; at n = 1,000,000 it would be ≈ 5 × 10¹¹ — hours of machine time." }
        ],
        result: "Bubble sort always performs n(n − 1)/2 comparisons: Θ(n²), with no best-case discount."
      },
      {
        title: "Best case earns its keep",
        problem: "How many comparisons does insertion sort perform on the already-sorted list 1, 2, 3, 4, 5, and why does bubble sort get no such discount?",
        steps: [
          { label: "Step 1: Trace insertion sort", text: "Element 2 compares once with 1 (no swap); 3 compares once with 2; 4 once with 3; 5 once with 4. Each new element stops at the first comparison." },
          { label: "Step 2: Count", text: "n − 1 = 4 comparisons, 0 swaps — Θ(n) best case, because nothing travels." },
          { label: "Step 3: Contrast bubble sort", text: "Bubble sort's pass structure is fixed: it still runs all n(n − 1)/2 comparisons on sorted input (in Rosen's formulation), because the loops never check whether work remains." },
          { label: "Step 4: Draw the practical conclusion", text: "For nearly-sorted data, insertion sort behaves near-linearly — the classic reason it survives inside real-world sorting libraries for small runs." }
        ],
        result: "Insertion sort: 4 comparisons (Θ(n)); bubble sort: 10 comparisons (Θ(n²)). Best-case analysis is not an academic nicety — it decides which algorithm ships."
      }
    ],
    keyTakeaways: [
      "Time complexity counts basic operations as a function of input size; space complexity counts memory.",
      "Worst case is the universal guarantee; average case needs an input model (uniform-position linear search: (n + 1)/2).",
      "Linear search: Θ(n). Binary search: Θ(log n) — about 2log₂ n + 1 comparisons on sorted input.",
      "Bubble sort always does n(n − 1)/2 comparisons; insertion sort does n − 1 on sorted input but Θ(n²) worst case.",
      "Euclid's algorithm is O(log b) — Fibonacci inputs are the worst case (Lamé's theorem).",
      "Tractable = polynomial time (class P); exponential algorithms are hopeless beyond small n, and P vs NP remains open."
    ],
    quiz: [
      {
        q: "Worst case, linear search on n elements performs:",
        options: ["n comparisons", "n/2 comparisons always", "log₂ n comparisons", "n² comparisons"],
        answer: 0,
        explanation: "The adversary hides the target last (or omits it), forcing a full scan: n comparisons. The (n + 1)/2 figure is the average case under a uniform-position model, not the worst case."
      },
      {
        q: "A binary search on 1,024 sorted elements uses at most about:",
        options: ["21 comparisons", "512 comparisons", "1,024 comparisons", "over a million comparisons"],
        answer: 0,
        explanation: "log₂ 1024 = 10 halvings, at about two comparisons each plus one final check: ≈ 2·10 + 1 = 21. Each comparison eliminates half the remaining candidates."
      },
      {
        q: "Bubble sort (Rosen's version) performs:",
        options: ["exactly n(n − 1)/2 comparisons, so it is Θ(n²) on every input", "n comparisons on every input", "Θ(n log n) comparisons on average", "fewer comparisons when the input is already sorted"],
        answer: 0,
        explanation: "The loop bounds are fixed by n, not by the data: (n − 1) + (n − 2) + ⋯ + 1 = n(n − 1)/2 always. Insertion sort — not bubble sort — is the one with a Θ(n) sorted-input best case."
      },
      {
        q: "An algorithm is considered tractable when it:",
        options: ["runs in polynomial time in the input size", "always runs in constant time", "uses no memory", "has been implemented and tested"],
        answer: 0,
        explanation: "Tractability is the polynomial/exponential dividing line: nᵏ for some fixed k scales to large inputs, while 2ⁿ does not, whatever the hardware. Implementation and testing say nothing about asymptotic behavior."
      },
      // PYQ-pattern: GATE 2011 — average-case complexity of linear search (rephrased, values changed)
      {
        q: "Linear search is applied to a list of $n$ distinct elements, with the target always present and equally likely to occupy any of the $n$ positions. The average number of comparisons equals:",
        options: ["$n$", "$\\log_{2} n$", "$n^{2}$", "$\\frac{n+1}{2}$"],
        answer: 3,
        explanation: "Step 1: Restate the task as the **uniform-position average** of the comparison count $1, 2, \\ldots, n$. Step 2: Recall the key formula that average-case cost is the arithmetic mean $\\frac{1}{n}\\sum_{i=1}^{n} i$ under the uniform model. Step 3: Sum the series to get $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$. Step 4: Divide by $n$ to obtain $\\frac{n+1}{2}$, which is $\\Theta(n)$ but with a precise constant. Step 5: The distractors confuse models since $n$ is the worst case, $\\log_{2} n$ belongs to binary search on sorted input, and $n^{2}$ belongs to sorting. Step 6: Hence the average is $\\frac{n+1}{2}$ comparisons."
      },
      // PYQ-pattern: GATE 2016 — best-case complexity of insertion sort (rephrased, values changed)
      {
        q: "Insertion sort is run on an already sorted list of $n$ distinct elements. The number of element comparisons performed equals:",
        options: ["$\\frac{n(n-1)}{2}$", "$n-1$", "$n \\log_{2} n$", "$1$"],
        answer: 1,
        explanation: "Step 1: Restate the run as insertion of each new element into an already ordered prefix. Step 2: Recall the key behavior that on sorted input each element compares once with its predecessor and stops. Step 3: The second element needs $1$ comparison, the third needs $1$, and so on through the $n$th element. Step 4: Total the comparisons as $(n-1) \\times 1 = n-1$, giving $\\Theta(n)$ best-case time. Step 5: The distractor $\\frac{n(n-1)}{2}$ is the worst case when every element travels the full prefix, $n \\log_{2} n$ belongs to merge sort, and $1$ forgets that all $n-1$ insertions must still be verified. Step 6: Therefore sorted input costs exactly $n-1$ comparisons."
      }
    ]
  }
]
