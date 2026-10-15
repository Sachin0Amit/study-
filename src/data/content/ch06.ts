import type { SectionContent } from "../library"

// ============================================================
// Rosen, Discrete Mathematics and Its Applications (8th ed.)
// Chapter 6 — Counting (Sections 6.1–6.6)
// Master study content
// ============================================================

export const ch6Content: SectionContent[] = [
  {
    sectionId: "rosen-ch6-s1",
    readingTime: 10,
    intro: "Counting is the art of determining how many objects satisfy a condition without listing them all. It powers complexity analysis, probability, algorithm design, and combinatorics — and this section builds the four fundamental rules everything else stands on.",
    objectives: [
      "Apply the product rule to count procedures performed in independent stages",
      "Apply the sum rule and the inclusion–exclusion principle for two sets",
      "Use the subtraction and division rules to handle complements and symmetries",
      "Model counting problems with tree diagrams",
    ],
    concepts: [
      {
        term: "Product Rule",
        kind: "method",
        statement: "If a task consists of two subtasks performed in sequence, with n₁ ways to do the first and n₂ ways to do the second (no matter how the first was done), then there are **n₁ · n₂** ways to do the whole task.",
        detail: "Extends to k stages: n₁·n₂···nₖ. Example: chairs come in 5 styles × 4 colors → 20 distinct chairs.",
      },
      {
        term: "Sum Rule",
        kind: "method",
        statement: "If a task can be done in one of n₁ ways or one of n₂ ways, and the sets of ways are **disjoint**, then it can be done in n₁ + n₂ ways.",
        detail: "Example: a committee of size 5 or size 6 chosen from 10 people: C(10,5) + C(10,6) = 252 + 210 = 462.",
      },
      {
        term: "Inclusion–Exclusion (two sets)",
        kind: "method",
        statement: "If the two classes of ways **overlap**, count |A ∪ B| = |A| + |B| − |A ∩ B|.",
        detail: "Subtracting the intersection removes the double-counted ways. This two-set form is the workhorse of the section.",
      },
      {
        term: "Subtraction Rule (Complement)",
        kind: "method",
        statement: "To count objects with at least one of several properties, count all objects then subtract those with **none**: |A ∪ B| = |U| − |(A ∪ B)̅|.",
        detail: "Perfect when the complement is easier: strings of 8 bits that contain at least one 0 = 2⁸ − 1 (only the all-1s string fails).",
      },
      {
        term: "Division Rule",
        kind: "method",
        statement: "If an n-object count treats objects as distinct when every distinct object occurs exactly d times (each counted d times), then the true number of distinct objects is **n/d**.",
        detail: "Classic use: counting circular arrangements — seat n people around a round table: each distinct seating counted n times by rotation → (n−1)! arrangements.",
      },
      {
        term: "Tree Diagrams",
        kind: "method",
        statement: "A counting strategy that records choices as branches of a tree; each leaf is one complete outcome, so the answer is the **number of leaves**.",
        detail: "Best when the number of later choices depends on earlier ones (e.g., best-of-three playoff outcome patterns).",
      },
      {
        term: "Bit Strings of Length n",
        kind: "notation",
        statement: "There are **2ⁿ** bit strings of length n, and 2ⁿ⁻¹ of them begin (or end) with a particular bit.",
        detail: "Each position independently 0 or 1 → product rule with n stages of 2 ways each.",
      },
      {
        term: "Counting Functions",
        kind: "method",
        statement: "The number of functions from a set of n elements to a set of m elements is **mⁿ**; the number of one-to-one functions is m(m−1)···(m−n+1) when m ≥ n.",
        detail: "Each of the n inputs independently picks one of m outputs (product rule); one-to-one requires distinct choices at each step.",
      },
      {
        term: "Pigeonhole Principle (basic form)",
        kind: "insight",
        statement: "If k+1 or more objects are placed into k boxes, then at least one box contains **at least two** objects.",
        detail: "Formal full treatment comes in 6.2, but the basic form already yields gems like: among 13 people, two share a birth month.",
      },
    ],
    examples: [
      {
        title: "Counting variable names",
        problem: "A variable name in a language is either a single lowercase letter (26 options) or a lowercase letter followed by a digit (26 × 10). How many names are there?",
        steps: [
          { label: "Identify disjoint cases", text: "The two forms are mutually exclusive, so the sum rule applies: 26 + 260." },
          { label: "Apply the product rule inside case 2", text: "One of 26 letters AND one of 10 digits → 26 · 10 = 260." },
          { label: "Combine", text: "26 + 260 = 286 possible variable names." },
        ],
        result: "286 variable names.",
      },
      {
        title: "Strings with constraints via the complement",
        problem: "How many strings of six lowercase letters from the English alphabet contain the letter 'a' (at least once)?",
        steps: [
          { label: "Count the universe", text: "Total strings: 26⁶ = 308,915,776 (product rule: 6 independent positions)." },
          { label: "Count the complement", text: "Strings with NO 'a': each position has 25 choices → 25⁶ = 244,140,625." },
          { label: "Subtract", text: "26⁶ − 25⁶ = 64,775,151." },
        ],
        result: "64,775,151 strings contain at least one 'a'.",
      },
      {
        title: "Division rule: seating around a round table",
        problem: "How many ways can 5 people be seated around a circular table if arrangements that differ only by rotation are considered the same?",
        steps: [
          { label: "Count linear arrangements", text: "5! = 120 ways to place people in five labeled seats." },
          { label: "Notice overcounting", text: "Each circular arrangement appears exactly 5 times among the linear ones — once for each choice of who sits in the 'first' seat (rotations)." },
          { label: "Divide", text: "120 / 5 = 24." },
        ],
        result: "24 distinct circular seatings.",
      },
    ],
    keyTakeaways: [
      "The product rule multiplies counts of independent sequential stages; the sum rule adds counts of disjoint alternatives.",
      "When alternatives overlap, subtract the intersection (two-set inclusion–exclusion).",
      "The complement trick |A| = |U| − |A̅| turns 'at least one' problems into easy subtractions.",
      "The division rule removes systematic overcounting — identify the exact multiplicity d and divide by it.",
      "Tree diagrams shine when later choice-counts depend on earlier choices.",
    ],
    quiz: [
      {
        q: "How many license plates consist of 2 letters followed by 3 digits (repetition allowed)?",
        options: ["26² · 10³ = 676,000", "26 · 10 = 260", "26² + 10³ = 1,076", "36⁵ = 60,466,176"],
        answer: 0,
        explanation: "Product rule across 5 independent positions: 26·26·10·10·10 = 26²·10³ = 676,000.",
      },
      {
        q: "How many 10-bit strings start with 111 or end with 101?",
        options: ["2⁷ + 2⁷ − 2⁴", "2⁷ + 2⁷", "2⁷ + 2⁷ + 2⁴", "2¹⁰ − 2⁷"],
        answer: 0,
        explanation: "|A| = 2⁷ (7 free bits) and |B| = 2⁷, but strings both starting 111 and ending 101 fix 3+3 bits with one overlap position — they start 111 and end 101: first 3 and last 3 fixed, 4 free middle bits… careful: 3 + 3 = 6 fixed bits leaves 4 free → |A∩B| = 2⁴. Inclusion–exclusion: 2⁷ + 2⁷ − 2⁴.",
      },
      {
        q: "Every student in a class of 30 is either a CS major (16) or a math major (14), and 5 are both. How many are neither?",
        options: ["5", "0", "30", "35"],
        answer: 0,
        explanation: "|CS ∪ Math| = 16 + 14 − 5 = 25, so 30 − 25 = 5 students are neither.",
      },
      {
        q: "A password is 6 characters long, each an uppercase letter or digit. How many passwords contain at least one digit?",
        options: ["36⁶ − 26⁶", "36⁶", "10 · 36⁵", "26⁶ − 10⁶"],
        answer: 0,
        explanation: "Complement trick: all passwords 36⁶ minus those with no digits (26⁶).",
      },
    ],
  },
  {
    sectionId: "rosen-ch6-s2",
    readingTime: 9,
    intro: "If you put more pigeons than pigeonholes, two pigeons must share a hole. This trivial observation becomes one of the most powerful existence tools in mathematics — it proves something exists without constructing it.",
    objectives: [
      "State and apply the pigeonhole principle",
      "Apply the generalized pigeonhole principle with N = ⌊(k−1)/n⌋ + 1 objects",
      "Use pigeonhole arguments in clever codomain/subset settings",
      "Understand the idea behind Ramsey numbers such as R(3,3) = 6",
    ],
    concepts: [
      {
        term: "The Pigeonhole Principle",
        kind: "theorem",
        statement: "If k+1 or more objects are placed into k boxes, then at least one box contains **at least two** objects.",
        detail: "Purely existential: it never tells you WHICH box. Proof: if every box held ≤ 1 object, total ≤ k objects, contradicting k+1.",
      },
      {
        term: "Generalized Pigeonhole Principle",
        kind: "theorem",
        statement: "If N objects are placed into k boxes, then there is a box containing at least **⌈N/k⌉** objects.",
        detail: "Equivalent threshold: to guarantee a box with at least r objects you need N = k(r−1) + 1 objects — one more than k(r−1), so k boxes can each hold at most r−1.",
      },
      {
        term: "How to find the pigeons",
        kind: "method",
        statement: "The art is choosing objects and boxes so that 'two in one box' is the conclusion you want. Common boxes: residue classes mod n, a 1–1 mapping's values, pairs summing to a fixed target.",
        detail: "Example: among any n+1 positive integers ≤ 2n, two are coprime? No — two where one divides the other (pair {m, 2m} for m ≤ n).",
      },
      {
        term: "Birthday bound example",
        kind: "insight",
        statement: "Among 367 people, at least two share a birthday (366 possible days including Feb 29). Among just 23 people, the chance of a shared birthday exceeds 50% (probability view).",
        detail: "The deterministic guarantee needs 367; the probabilistic surprise is how small 23 is — both faces of the same principle.",
      },
      {
        term: "Subset sum pigeonhole",
        kind: "method",
        statement: "From any n+1 integers chosen from {1,…,2n}, there must be two such that one **divides** the other; also from any n+1 chosen from {1,…,2n}, two are relatively prime is FALSE in general — but two whose difference is divisible by n must appear among n+1 integers.",
        detail: "Write $m = 2^{a} \\cdot q$ with q odd (q ∈ {1,…,2n−1} gives 2n−1 odd parts): by pigeonhole two share the odd part q, so one divides the other.",
      },
      {
        term: "Ramsey numbers",
        kind: "definition",
        statement: "R(m,n) is the least N such that any 2-coloring of the edges of $K_N$ contains a red $K_m$ or a blue $K_n$. **R(3,3) = 6**.",
        detail: "Proof for R(3,3)=6: pick any vertex — among its 5 edges, 3 share a color; if any edge among those 3 neighbors matches, a monochromatic triangle closes; otherwise the three cross-edges form a triangle of the other color.",
      },
    ],
    examples: [
      {
        title: "Minimum students for a guaranteed shared birth month trio",
        problem: "How many students must be in a class to guarantee at least 3 were born in the same month?",
        steps: [
          { label: "Set up the threshold", text: "Boxes = 12 months; we want a box with ≥ 3 pigeons (students)." },
          { label: "Worst case", text: "With 24 students, every month can hold exactly 2 (24 = 12 × 2)." },
          { label: "Add one more", text: "The 25th student must land in some month, making 3 in that month." },
        ],
        result: "25 students (N = ⌈25/12⌉ = 3 guarantees a month with 3).",
      },
      {
        title: "Same-color socks",
        problem: "A drawer has red, blue, and yellow socks mixed in the dark. How many socks must you grab to guarantee a matching pair?",
        steps: [
          { label: "Identify boxes", text: "3 colors = 3 boxes; grabbing 4 socks forces two into one color box." },
          { label: "Generalize", text: "For n colors, n+1 socks guarantee a matching pair; for 2 pairs of the same color you need 2·3 + 1 = 7." },
        ],
        result: "4 socks guarantee a matching pair.",
      },
      {
        title: "Sum divisible by n",
        problem: "Show that given n+1 positive integers, some subset (of consecutive partial sums) has sum divisible by n.",
        steps: [
          { label: "Consider partial sums", text: "Let S₀=0, S₁, S₂, …, Sₙ be the n+1 partial sums of the sequence." },
          { label: "Boxes = residues mod n", text: "There are n residue classes and n+1 partial sums, so two partial sums Sᵢ, Sⱼ (i<j) share a residue." },
          { label: "Take the difference", text: "Sⱼ − Sᵢ is divisible by n, and it is the sum of the consecutive block i+1…j." },
        ],
        result: "The block between those partial sums has sum ≡ 0 (mod n).",
      },
    ],
    keyTakeaways: [
      "k+1 objects in k boxes forces a box with ≥ 2; N objects in k boxes forces one with ⌈N/k⌉.",
      "Guaranteeing r in one box requires k(r−1) + 1 objects.",
      "Pigeonhole gives existence, never a construction — find the right boxes.",
      "Ramsey theory bootstraps pigeonhole into unavoidable substructure: R(3,3) = 6.",
      "Partial sums mod n is the classic trick for consecutive-block divisibility.",
    ],
    quiz: [
      {
        q: "What is the minimum number of students needed to guarantee that at least 6 received the same grade, if grades are A, B, C, D, F?",
        options: ["26", "25", "30", "31"],
        answer: 0,
        explanation: "5 grades, want ≥ 6 in one: k(r−1)+1 = 5·5+1 = 26.",
      },
      {
        q: "How many numbers must be selected from {1, 2, …, 30} to guarantee that two of them have a sum of 31 or two have a difference divisible by 3?",
        options: ["17", "15", "16", "10"],
        answer: 0,
        explanation: "Pairs summing to 31: {1,30},…,{15,16} — 15 boxes ⇒ 16 numbers force a pair summing to 31. (16 < 17.)",
      },
      {
        q: "In any group of 6 people, where each pair are friends or strangers, there must be 3 mutual friends or 3 mutual strangers because:",
        options: ["R(3,3) = 6", "R(3,2) = 6", "R(2,2) = 6", "The pigeonhole principle alone with 6 boxes"],
        answer: 0,
        explanation: "R(3,3) = 6 — proved by a pigeonhole argument on one person's 5 relationships, then case analysis.",
      },
      {
        q: "A hundred students take an exam graded 0–100. At least how many students share a score?",
        options: ["1 (only guaranteed pair)", "2", "3", "Cannot be determined"],
        answer: 0,
        explanation: "101 possible scores, 100 students — pigeonhole does NOT force any repeat; 'at least 2 share' would need 102 students. The guarantee is only the trivial 'at least 1 student has that score'.",
      },
    ],
  },
  {
    sectionId: "rosen-ch6-s3",
    readingTime: 9,
    intro: "Order matters or it doesn't. This single distinction separates permutations from combinations — the two most-used counting tools in all of mathematics and computer science.",
    objectives: [
      "Count permutations and r-permutations of n distinct objects",
      "Count combinations C(n,r) and recognize when order is irrelevant",
      "Use the symmetry C(n,r) = C(n,n−r)",
      "Solve mixed selection problems where order only sometimes matters",
    ],
    concepts: [
      {
        term: "Permutation",
        kind: "definition",
        statement: "An **ordered** arrangement of objects. A permutation of a set of n distinct objects is an ordered list of all n; an r-permutation is an ordered list of r of them.",
        detail: "Notation P(n,r) = n!/(n−r)!.",
      },
      {
        term: "Number of r-permutations",
        kind: "theorem",
        statement: "**P(n,r) = n(n−1)(n−2)···(n−r+1) = n!/(n−r)!** for 0 ≤ r ≤ n.",
        detail: "Product rule: r stages with n, n−1, … choices. P(n,n) = n!, all permutations.",
      },
      {
        term: "Combination",
        kind: "definition",
        statement: "An **unordered** selection of r objects from n distinct objects.",
        detail: "Notation C(n,r) or the binomial coefficient (n choose r), read 'n choose r'.",
      },
      {
        term: "Number of r-combinations",
        kind: "theorem",
        statement: "**C(n,r) = n!/(r!(n−r)!)** for 0 ≤ r ≤ n.",
        detail: "Each unordered selection gives r! orderings, so C(n,r) = P(n,r)/r!. Also C(n,0) = C(n,n) = 1.",
      },
      {
        term: "Symmetry of combinations",
        kind: "law",
        statement: "C(n,r) = C(n,n−r) — choosing what to keep is the same as choosing what to leave out.",
        detail: "Basis for computing shortcuts: C(100,98) = C(100,2) = 4950.",
      },
      {
        term: "Key word signals",
        kind: "insight",
        statement: "'Order/select a president then a treasurer' → permutation; 'choose a committee of 2' → combination; 'arrange books on a shelf' → permutation; 'deal a hand of cards' → combination.",
        detail: "Ask: would swapping two chosen items create a DIFFERENT counted outcome? Yes → order matters.",
      },
      {
        term: "Hands of cards",
        kind: "notation",
        statement: "A 5-card poker hand from a 52-card deck: C(52,5) = 2,598,960 (order of dealing is irrelevant).",
        detail: "Bridge hand of 13: C(52,13) ≈ 6.35 × 10¹¹ — the classic combination benchmark.",
      },
    ],
    examples: [
      {
        title: "Race podium",
        problem: "In a 10-runner race, how many different gold–silver–bronze podium finishes are possible?",
        steps: [
          { label: "Recognize order matters", text: "A podium is an ordered selection of 3 from 10 — a 3-permutation." },
          { label: "Apply P(n,r)", text: "P(10,3) = 10·9·8 = 720." },
        ],
        result: "720 podium outcomes.",
      },
      {
        title: "Committee vs delegation",
        problem: "From 12 people, how many ways form (a) a committee of 4, (b) a delegation of president, VP, secretary, treasurer?",
        steps: [
          { label: "(a) Unordered", text: "C(12,4) = 12!/(4!·8!) = 495." },
          { label: "(b) Ordered roles", text: "P(12,4) = 12·11·10·9 = 11,880 — each committee has 4! officer arrangements: 495·24 = 11,880. ✓" },
        ],
        result: "495 committees; 11,880 officer slates.",
      },
      {
        title: "Bit strings with exactly k ones",
        problem: "How many 8-bit strings contain exactly three 1s?",
        steps: [
          { label: "Model as choosing positions", text: "Pick which 3 of the 8 positions hold the 1s; the rest are forced to 0." },
          { label: "Combination", text: "C(8,3) = 56." },
        ],
        result: "56 strings.",
      },
    ],
    keyTakeaways: [
      "Permutations count ordered arrangements: P(n,r) = n!/(n−r)!.",
      "Combinations count unordered selections: C(n,r) = n!/(r!(n−r)!).",
      "Combinations are permutations divided by the internal orderings: C = P/r!.",
      "Symmetry C(n,r) = C(n,n−r) saves computation.",
      "Choosing positions in a string/board is the same as choosing objects — map to C(n,k).",
    ],
    quiz: [
      {
        q: "How many distinct arrangements are there of the letters in the word 'LEVEL'?",
        options: ["60", "120", "20", "5"],
        answer: 0,
        explanation: "5 letters with L twice and E twice: 5!/(2!·2!) = 120/4 = 60 — an anagram-style division that foreshadows 6.5.",
      },
      {
        q: "A pizza shop offers 12 toppings. How many 3-topping pizzas are possible (no repeats)?",
        options: ["220", "1320", "36", "1728"],
        answer: 0,
        explanation: "Order of toppings is irrelevant: C(12,3) = 220. (1320 = P(12,3) would overcount each pizza 3! times.)",
      },
      {
        q: "C(20,17) equals:",
        options: ["C(20,3) = 1140", "P(20,3) = 6840", "C(20,17!) ", "20!/17"],
        answer: 0,
        explanation: "By symmetry C(n,r) = C(n,n−r): C(20,17) = C(20,3) = 1140.",
      },
      {
        q: "From 8 men and 5 women, how many committees consist of 3 men and 2 women?",
        options: ["C(8,3)·C(5,2) = 560", "C(13,5) = 1287", "P(8,3)·P(5,2) = 3360", "C(8,2)·C(5,3) = 280"],
        answer: 0,
        explanation: "Independent sub-selections combined by the product rule: choose 3 of 8 men AND 2 of 5 women: 56 · 10 = 560.",
      },
    ],
  },
  {
    sectionId: "rosen-ch6-s4",
    readingTime: 10,
    intro: "Binomial coefficients hide inside the expansion of (a+b)ⁿ, form Pascal's triangle, and satisfy a web of surprising identities — each provable in two ways: algebraically, or by counting the same thing twice.",
    objectives: [
      "Expand powers with the Binomial Theorem and extract coefficients",
      "Build Pascal's triangle from Pascal's identity",
      "Prove Vandermonde's identity and simple identities combinatorially",
      "Count paths on a grid with binomial coefficients",
    ],
    concepts: [
      {
        term: "The Binomial Theorem",
        kind: "theorem",
        statement: "(x + y)ⁿ = Σₖ₌₀ⁿ **C(n,k) xⁿ⁻ᵏ yᵏ** — each term picks which k of the n factors contribute a y.",
        detail: "Example: (x+y)⁴ = x⁴ + 4x³y + 6x²y² + 4xy³ + y⁴.",
      },
      {
        term: "Extracting a coefficient",
        kind: "method",
        statement: "The coefficient of xᵏ in (1+x)ⁿ is **C(n,k)**; the sum of all coefficients (set x=y=1) is 2ⁿ.",
        detail: "Alternating sum (x=1, y=−1) is 0 for n ≥ 1: the number of even-sized subsets equals odd-sized subsets.",
      },
      {
        term: "Pascal's Identity",
        kind: "theorem",
        statement: "**C(n+1,k) = C(n,k−1) + C(n,k)** for 1 ≤ k ≤ n.",
        detail: "Combinatorial proof: the k-subsets of {1,…,n+1} split into those containing n+1 (choose k−1 from the rest) and those not containing it (choose k from the rest).",
      },
      {
        term: "Pascal's Triangle",
        kind: "notation",
        statement: "Row n lists C(n,0), C(n,1), …, C(n,n); each interior entry is the sum of the two above it. Rows sum to 2ⁿ.",
        detail: "1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; … — the geometry of Pascal's identity.",
      },
      {
        term: "Vandermonde's Identity",
        kind: "theorem",
        statement: "**C(m+n,r) = Σⱼ C(m, r−j)·C(n, j)** — choosing r people from m men and n women, summed over how many women are chosen.",
        detail: "Example: C(2n,n) = Σ C(n,j)², since C(n,n−j) = C(n,j).",
      },
      {
        term: "Combinatorial proof",
        kind: "method",
        statement: "Show two expressions count the same set of objects in two different ways. No algebra needed — just two stories about one set.",
        detail: "For instance, counting committees with/without a designated chair proves r·C(n,r) = n·C(n−1,r−1).",
      },
      {
        term: "Grid paths",
        kind: "insight",
        statement: "The number of lattice paths from (0,0) to (m,n) moving only right/up is **C(m+n, m)**.",
        detail: "A path is an arrangement of m R's and n U's — choose positions of the R's.",
      },
    ],
    examples: [
      {
        title: "Expanding with the Binomial Theorem",
        problem: "What is the coefficient of x⁵y³ in (x+y)⁸? What is (2x−3)⁴ fully?",
        steps: [
          { label: "Apply the theorem", text: "Coefficient of x⁵y³ in (x+y)⁸ is C(8,3) = C(8,5) = 56." },
          { label: "Substitute into the second case", text: "(2x−3)⁴ = Σ C(4,k)(2x)⁴⁻ᵏ(−3)ᵏ = 16x⁴ − 96x³ + 216x² − 216x + 81." },
        ],
        result: "56; and 16x⁴ − 96x³ + 216x² − 216x + 81.",
      },
      {
        title: "Grid walk count",
        problem: "How many shortest lattice paths go from (0,0) to (7,4)?",
        steps: [
          { label: "Total moves", text: "Every shortest path uses 7 rights and 4 ups: 11 moves." },
          { label: "Choose the rights", text: "C(11,7) = C(11,4) = 330." },
        ],
        result: "330 paths.",
      },
      {
        title: "Proving an identity by double counting",
        problem: "Prove that C(2n,n) = Σⱼ₌₀ⁿ C(n,j)².",
        steps: [
          { label: "Story 1", text: "Split 2n people into two groups of n. To choose n of all 2n people: C(2n,n) ways." },
          { label: "Story 2", text: "Count the same committees by how many come from the first group: Σⱼ C(n,j)·C(n,n−j) = Σⱼ C(n,j)·C(n,j) = Σⱼ C(n,j)²." },
          { label: "Conclude", text: "Both stories count the same set, so the expressions are equal — Vandermonde with m=n=r." },
        ],
        result: "C(2n,n) = Σⱼ₌₀ⁿ C(n,j)².",
      },
    ],
    keyTakeaways: [
      "(x+y)ⁿ = Σ C(n,k)xⁿ⁻ᵏyᵏ — coefficients come from choosing which factors give y.",
      "Pascal's identity builds the triangle and yields inductive proofs about binomial coefficients.",
      "Vandermonde: C(m+n,r) = Σⱼ C(m,r−j)C(n,j) — count by how many come from each side.",
      "Combinatorial proofs count one set two ways instead of doing algebra.",
      "Grid paths (m R's, n U's) are counted by C(m+n, min(m,n)).",
    ],
    quiz: [
      {
        q: "What is the coefficient of x³ in (1 + 2x)⁷?",
        options: ["280", "35", "140", "560"],
        answer: 0,
        explanation: "Term: C(7,3)·1⁴·(2x)³ = 35 · 8x³ = 280x³.",
      },
      {
        q: "The sum of the entries in row 12 of Pascal's triangle is:",
        options: ["4096", "2048", "12!", "78"],
        answer: 0,
        explanation: "Row n sums to 2ⁿ: 2¹² = 4096.",
      },
      {
        q: "How many 12-bit strings contain exactly eight 1s?",
        options: ["C(12,8) = 495", "C(12,4) = 495", "P(12,8) ≈ 1.99×10⁸", "2⁸ = 256"],
        answer: 0,
        explanation: "Both C(12,8) and C(12,4) equal 495 by symmetry — choose the 8 positions of 1s (or 4 positions of 0s).",
      },
      {
        q: "Vandermonde with m=6, n=4, r=5 says C(10,5) = Σⱼ C(6,5−j)C(4,j). The left side is:",
        options: ["252", "210", "120", "1"],
        answer: 0,
        explanation: "C(10,5) = 252; the right side sums C(6,5)C(4,0)+C(6,4)C(4,1)+C(6,3)C(4,2)+C(6,2)C(4,3)+C(6,1)C(4,4) = 6+60+120+60+6 = 252. ✓",
      },
    ],
  },
  {
    sectionId: "rosen-ch6-s5",
    readingTime: 11,
    intro: "What if you may repeat choices, or the objects you distribute are indistinguishable? Choosing donuts, assigning tasks, and handing out identical candies all need the generalized counting tools of this section.",
    objectives: [
      "Count r-permutations with repetition (nʳ) and know when it applies",
      "Count r-combinations with repetition using stars and bars: C(n+r−1, r)",
      "Count distributions of distinguishable vs indistinguishable objects into boxes",
      "Classify a counting problem across the four repetition/order boxes",
    ],
    concepts: [
      {
        term: "Permutations with repetition",
        kind: "theorem",
        statement: "The number of r-permutations of a set of n objects **with unlimited repetition** is **nʳ**.",
        detail: "Each of r slots independently takes any of n values — strings of length r over an n-symbol alphabet.",
      },
      {
        term: "Combinations with repetition",
        kind: "theorem",
        statement: "The number of r-combinations from n types with repetition allowed is **C(n+r−1, r)**.",
        detail: "Think of choosing r donuts of n kinds: C(n+r−1, r). E.g., 3 kinds, 4 pastries: C(6,3) = 20 multisets.",
      },
      {
        term: "Stars and bars",
        kind: "method",
        statement: "Model a multiset of r objects of n types as r stars in a row with n−1 bars splitting them into n groups; the count is the arrangements of r stars and n−1 indistinguishable bars: **(n+r−1)!/(r!(n−1)!) = C(n+r−1, r)**.",
        detail: "A row of ★★|★|  with bars as dividers between types. Each distinct placement = one multiset.",
      },
      {
        term: "Distinguishable objects, distinguishable boxes",
        kind: "method",
        statement: "Distributing n distinct objects into k distinct boxes so box i gets nᵢ (Σnᵢ = n): the count is **n!/(n₁!n₂!···nₖ!)** — a multinomial coefficient.",
        detail: "Example: deal 52 cards to 4 labeled players, 13 each: 52!/(13!)⁴.",
      },
      {
        term: "Indistinguishable objects, distinguishable boxes",
        kind: "method",
        statement: "Placing r identical balls into n distinct boxes: **C(n+r−1, r)** — the same as combinations with repetition.",
        detail: "How many solutions to x₁+x₂+···+xₙ = r in nonnegative integers.",
      },
      {
        term: "Indistinguishable objects & boxes",
        kind: "insight",
        statement: "The number of partitions of r identical objects into at most n unlabeled groups pₙ(r) has no closed form; partitions are computed recursively.",
        detail: "Example: 4 into at most 2 parts: 4 = 4, 3+1, 2+2 → 3 partitions.",
      },
      {
        term: "Anagram counting",
        kind: "method",
        statement: "The number of distinct permutations of n objects where object types repeat n₁,…,nₖ times is the multinomial **n!/(n₁!···nₖ!)**.",
        detail: "MISSISSIPPI: 11!/(1!4!4!2!) = 34,650 distinguishable arrangements.",
      },
    ],
    examples: [
      {
        title: "Buying half a dozen donuts",
        problem: "A shop sells 5 kinds of donuts. How many different half-dozens (6 donuts, kinds may repeat) can you buy?",
        steps: [
          { label: "Model", text: "A multiset of size 6 from 5 types — combinations with repetition." },
          { label: "Formula", text: "C(5 + 6 − 1, 6) = C(10,6) = 210." },
        ],
        result: "210 possible half-dozens.",
      },
      {
        title: "Solutions of an equation",
        problem: "How many nonnegative integer solutions does x₁ + x₂ + x₃ = 12 have?",
        steps: [
          { label: "Reinterpret as distribution", text: "12 identical units into 3 distinct boxes (the variables)." },
          { label: "Stars and bars", text: "12 stars, 2 bars → C(14,2) = 91." },
        ],
        result: "91 solutions.",
      },
      {
        title: "Anagram of BANANA",
        problem: "How many distinct arrangements of the letters in BANANA?",
        steps: [
          { label: "Count letters", text: "6 letters: B once, A three times, N twice." },
          { label: "Multinomial", text: "6!/(1!·3!·2!) = 720/12 = 60." },
        ],
        result: "60 arrangements.",
      },
      {
        title: "Test answers under repetition rules",
        problem: "How many ways can a true/false quiz of 4 questions be answered? And how many 3-digit codes from digits 1–5 if digits may repeat but the code must end in an even digit?",
        steps: [
          { label: "First part", text: "Each question: 2 choices independently → 2⁴ = 16." },
          { label: "Second part", text: "First two digits: 5 each; last digit ∈ {2,4}: 5·5·2 = 50." },
        ],
        result: "16 answer sheets; 50 codes.",
      },
    ],
    keyTakeaways: [
      "With repetition and order: nʳ arrangements.",
      "With repetition, no order (multisets): C(n+r−1, r) — stars and bars.",
      "Distributing identical items into distinct boxes = solutions of x₁+…+xₙ = r.",
      "Anagrams with repeated letters follow the multinomial coefficient n!/(n₁!···nₖ!).",
      "First classify: order relevant? repetition allowed? objects distinguishable? — then pick the formula.",
    ],
    quiz: [
      {
        q: "How many ways to select 4 scoops (types may repeat) from 31 ice cream flavors?",
        options: ["C(34,4) = 46,376", "31⁴ = 923,521", "C(31,4) = 31,465", "4³¹"],
        answer: 0,
        explanation: "Combinations with repetition: C(31+4−1, 4) = C(34,4) = 46,376.",
      },
      {
        q: "How many nonnegative integer solutions does x₁ + x₂ + x₃ + x₄ = 15 have?",
        options: ["C(18,3) = 816", "4¹⁵", "15!/4!", "C(15,4) = 1365"],
        answer: 0,
        explanation: "15 stars, 3 bars → C(18,3) = 816.",
      },
      {
        q: "The number of distinguishable permutations of MATHEMATICS is:",
        options: ["11!/(2!2!2!) = 4,989,600", "11!", "11!/2", "11!/8"],
        answer: 0,
        explanation: "Letters: M,A,T twice, H,E,I,C,S once — 11 letters with three pairs: 11!/(2!·2!·2!) = 4,989,600.",
      },
      {
        q: "You distribute 10 identical candies among 4 children. One child must receive at least 3. How many distributions (if pre-giving that child 3 candies)?",
        options: ["C(10,3) = 120", "4¹⁰", "C(13,3) = 286", "10!"],
        answer: 0,
        explanation: "Give 3 to that child first; the remaining 7 candies among 4 children: C(7+4−1, 3) = C(10,3) = 120.",
      },
    ],
  },
  {
    sectionId: "rosen-ch6-s6",
    readingTime: 8,
    intro: "It is one thing to count solutions — it is another to actually list them. Generating algorithms that enumerate permutations, combinations and bit strings in a clean order is the bridge from counting to computation.",
    objectives: [
      "List permutations in lexicographic order and compute the next permutation",
      "List combinations in lexicographic order (as bit strings)",
      "Understand Gray codes and why single-bit steps matter",
      "Relate combinations of a set to bit strings of length n",
    ],
    concepts: [
      {
        term: "Lexicographic order",
        kind: "definition",
        statement: "Sequences are ordered like dictionary entries: compare element by element; the first position where they differ decides, by the underlying order of elements.",
        detail: "For {1,2,3}: 123 < 132 < 213 < 231 < 312 < 321.",
      },
      {
        term: "Next permutation algorithm",
        kind: "method",
        statement: "From the right, find the first adjacent ascent aⱼ < aⱼ₊₁; find the rightmost element after j that exceeds aⱼ; swap them; reverse the suffix after j — that yields the next permutation in lexicographic order.",
        detail: "Example: 1342 → swap 3 with 4 → 1432 → reverse suffix → 1423.",
      },
      {
        term: "Combinations as bit strings",
        kind: "method",
        statement: "Represent each r-combination of an n-set by a bit string with exactly r ones (position i is 1 iff element i is chosen); listing combinations lexicographically = listing these strings in lexicographic order.",
        detail: "For n=4, r=2: 1100, 1010, 1001, 0110, 0101, 0011.",
      },
      {
        term: "Next r-combination",
        kind: "method",
        statement: "Given {a₁,…,aᵣ} (sorted), find the largest index i with aᵢ ≠ n−r+i; increment aᵢ and set the following elements to aᵢ+1, aᵢ+2, ….",
        detail: "{2,3,5} with n=5,r=3: i=3 (a₃=5=5) no; i=2: a₂=3≠4 → {2,4,5}.",
      },
      {
        term: "Gray codes",
        kind: "definition",
        statement: "A **reflected Gray code** lists all 2ⁿ bit strings so consecutive strings differ in exactly one bit: Gₙ = 0Gₙ₋₁ then 1·reverse(Gₙ₋₁), starting G₁ = 0, 1.",
        detail: "For n=3: 000, 001, 011, 010, 110, 111, 101, 100. Used in rotary encoders and K-maps (Ch. 12!).",
      },
      {
        term: "Why enumeration order matters",
        kind: "insight",
        statement: "Uniform 'next object' rules let programs enumerate huge sets lazily (streaming), support ranking/unranking, and integrate with backtracking search.",
        detail: "Ranking = position in the listing; unranking = object at a position — both follow from the ordered structure.",
      },
    ],
    examples: [
      {
        title: "Next permutation step",
        problem: "What follows 23514 in lexicographic order?",
        steps: [
          { label: "Find the ascent", text: "Scan from the right: 1 < 4? positions ... 5? The suffix 514 is decreasing... find first aⱼ < aⱼ₊₁ from right: a₃=5, a₄=1: no (5>1); a₄=1 < a₅=4: j = 4." },
          { label: "Swap", text: "Rightmost element after j exceeding a₄=1 is 4 → 23541." },
          { label: "Reverse the suffix after j", text: "Suffix after position 4 is just the last element — unchanged: 23541." },
        ],
        result: "23514 → 23541.",
      },
      {
        title: "Listing all 3-subsets of {1,…,5}",
        problem: "Generate all 3-combinations of {1,2,3,4,5} in lexicographic order.",
        steps: [
          { label: "Start", text: "{1,2,3} (bit string 11100)." },
          { label: "Iterate", text: "{1,2,4}, {1,2,5}, {1,3,4}, {1,3,5}, {1,4,5}, {2,3,4}, {2,3,5}, {2,4,5}, {3,4,5}." },
          { label: "Verify the count", text: "C(5,3) = 10 — exactly 10 listings including the start." },
        ],
        result: "All ten 3-subsets, in dictionary order.",
      },
      {
        title: "Building a Gray code",
        problem: "Construct the 3-bit reflected Gray code.",
        steps: [
          { label: "Base", text: "G₁ = [0, 1]." },
          { label: "Reflect", text: "G₂ = [00, 01, 11, 10]; G₃ = 0G₂ followed by 1·reverse(G₂)." },
          { label: "Result", text: "000, 001, 011, 010, 110, 111, 101, 100." },
        ],
        result: "Each consecutive pair differs in exactly one bit.",
      },
    ],
    keyTakeaways: [
      "Lexicographic order gives a canonical listing for permutations and combinations.",
      "The next-permutation rule: find rightmost ascent, swap with ceiling, reverse suffix.",
      "Combinations of an n-set ↔ bit strings with exactly r ones.",
      "Gray codes change one bit at a time — crucial for hardware encoders and Karnaugh maps.",
      "Ordered enumeration enables ranking, unranking, and lazy generation in programs.",
    ],
    quiz: [
      {
        q: "What is the next permutation after 362541?",
        options: ["364125", "362514", "364521", "365421"],
        answer: 0,
        explanation: "Suffix 541 decreasing; ascent 2<5 at position of '2'. Swap 2 with the rightmost larger element 4 → 364521; reverse suffix after that position → 364125.",
      },
      {
        q: "In the 3-bit reflected Gray code, which string follows 011?",
        options: ["010", "001", "111", "110"],
        answer: 0,
        explanation: "G3 = 000, 001, 011, 010, 110, 111, 101, 100 - each consecutive pair differs in exactly one bit, and 011 to 010 flips the last bit.",
      },
      {
        q: "The bit-string representation of the 3-combination {1,3,5} of {1,…,6} is:",
        options: ["101010", "010101", "110100", "101001"],
        answer: 0,
        explanation: "Positions 1,3,5 carry 1s: 1 0 1 0 1 0.",
      },
      {
        q: "Which pair of consecutive strings violates the Gray code property?",
        options: ["0101 → 0100", "0101 → 0111", "0101 → 1101", "0101 → 0101"],
        answer: 3,
        explanation: "0101→0101 is not a step at all (identical); the others each differ in exactly one bit and are all valid Gray steps.",
      },
      // PYQ-pattern — next permutation in lexicographic order (rephrased, values changed)
      {
        q: "What is the next permutation after $31542$ in lexicographic order?",
        options: ["$32145$", "$31524$", "$34125$", "$32541$"],
        answer: 0,
        explanation: "Step 1: Restate the next-permutation rule as locate the rightmost ascent, swap with its ceiling, then reverse the suffix. Step 2: Recall the key scan $3, 1, 5, 4, 2$ from the right: $4 < 2$ is false, $5 < 4$ is false, but $1 < 5$ is true, so the ascent sits at $1$. Step 3: Among suffix entries $\\{5, 4, 2\\}$ pick the smallest value above $1$, which is $2$. Step 4: Swap to get $3, 2, 5, 4, 1$ and reverse the tail $5, 4, 1$ into $1, 4, 5$. Step 5: The distractor $31524$ merely swaps the last two digits, $34125$ moves the wrong digit, and $32541$ ignores the reversal. Step 6: Hence the successor is $32145$."
      },
      // PYQ-pattern — successor in reflected Gray code (rephrased, values changed)
      {
        q: "In the $4$-bit reflected Gray code, which string follows $0111$?",
        options: ["$0110$", "$1111$", "$0101$", "$0100$"],
        answer: 2,
        explanation: "Step 1: Restate the listing as $0G_{3}$ followed by $1G_{3}$ reversed, where $G_{3} = 000, 001, 011, 010, 110, 111, 101, 100$. Step 2: Recall the key Gray property that consecutive strings differ in exactly one bit. Step 3: Locate $0111$ as $0$ followed by $111$: inside $G_{3}$, the entry $111$ is followed by $101$. Step 4: Reattach the leading $0$ to obtain $0101$, which flips only the third bit of $0111$. Step 5: The distractor $0110$ differs in two bits, $1111$ flips the leading bit too early, and $0100$ is two steps ahead. Step 6: Therefore the immediate successor is $0101$."
      },
    ],
  },
]
