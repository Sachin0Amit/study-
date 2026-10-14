import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Appendix B (Chapter 37): Sets, Etc. (Sections B.1 – B.5)
// Master study content.
// ============================================================================

// ============================================================================

export const clrsCh37Content: SectionContent[] = [
  // ------------------------------------------------------------- 37.1
  {
    sectionId: "clrs-ch37-s1",
    readingTime: 6,
    intro: "Sets are the ground floor of the book's mathematical language: every data structure stores a set (or a multiset) of objects, every graph is a set of vertices plus a set of edges, and every algorithm manipulates relations and functions between sets. This section fixes the notation — membership, subsets, the algebra of union, intersection and complement — and then confronts the one issue that genuinely matters for infinite sets: counting them.",
    objectives: [
      "Use membership, subset and set-operation notation fluently, including De Morgan's laws",
      "Determine when two sets are disjoint and when a family partitions a set",
      "Distinguish finite, countably infinite and uncountable sets, and prove countability by bijection"
    ],
    concepts: [
      {
        term: "Sets, membership and subsets",
        kind: "definition",
        statement: "A **set** is a collection of distinguishable objects, written by listing or by predicate: $A = \\{1, 2, 3\\}$ or $A = \\{x : x \\text{ is a prime less than } 8\\}$. Membership $x \\in A$; non-membership $x \\notin A$. $S$ is a **subset** of $T$ ($S \\subseteq T$) if every element of $S$ is in $T$; it is a **proper subset** ($S \\subset T$) if moreover $T$ contains something $S$ does not. The **empty set** $\\emptyset$ has no elements and is a subset of every set. The **cardinality** $|A|$ counts the elements; the **universe** $U$ is the set under discussion, from which complements are taken.",
        detail: "Two sets are equal exactly when each is a subset of the other — the standard template for proving set identities. Venn diagrams picture sets as regions of the plane; they guide intuition but are not proofs."
      },
      {
        term: "Set operations and their algebra",
        kind: "definition",
        statement: "For sets within a universe $U$: the **union** $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$; the **intersection** $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$; the **difference** $A - B = \\{x : x \\in A \\text{ and } x \\notin B\\}$; the **complement** $\\overline{A} = U - A$. Union and intersection commute, associate, and distribute over each other, and **De Morgan's laws** hold: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ and $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.",
        detail: "The distributive laws $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ and $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$ mirror the logical $\\wedge$/$\\vee$ distributivity — set algebra is propositional logic with elements as truth-assignments."
      },
      {
        term: "Disjoint sets and partitions",
        kind: "definition",
        statement: "Two sets are **disjoint** if $A \\cap B = \\emptyset$. A family $\\{A_1, A_2, \\ldots\\}$ of nonempty, pairwise disjoint sets **partitions** a set $A$ if their union is $A$. Partitions and equivalence relations are two views of the same structure: the equivalence classes of a relation partition the underlying set (next section).",
        detail: "Hashing with chaining partitions the key universe into the sets stored in each slot — disjoint by construction, since each key has exactly one hash value."
      },
      {
        term: "Finite and infinite sets",
        kind: "definition",
        statement: "A set is **finite** if it has $n$ elements for some nonnegative integer $n$; otherwise it is **infinite**. Comparing infinite sets requires the function vocabulary of Section 37.3: $|A| = |B|$ if there is a bijection $f : A \\to B$, and $|A| \\le |B|$ if there is an injection from $A$ to $B$. The set $\\mathbb{Z}^{+} = \\{1, 2, 3, \\ldots\\}$ of positive integers is the yardstick.",
        detail: "Not all infinities are comparable by intuition: the integers, the even integers and the rationals all have the same cardinality, while the reals are strictly larger — the discovery that makes countability a real subject rather than bookkeeping."
      },
      {
        term: "Countable and uncountable sets",
        kind: "theorem",
        statement: "A set is **countable** if it is finite or has the same cardinality as $\\mathbb{Z}^{+}$, i.e. if its elements can be listed $a_1, a_2, a_3, \\ldots$ (equivalently: there is an injection into $\\mathbb{Z}^{+}$). The integers and the rationals are countable; every subset of a countable set is countable. The set $\\mathbb{R}$ of real numbers is **uncountable**: no listing can capture it.",
        detail: "Cantor's diagonal argument shows this: given any claimed list $r_1, r_2, \\ldots$ of reals, build a number that differs from $r_i$ in its $i$-th decimal — it is real but appears nowhere in the list. Countability is why computers can represent integers and rationals (each nameable by finite data) but must approximate reals, and why the set of all programs — a countable set of finite strings — cannot implement all functions from $\\mathbb{Z}^{+}$ to $\\{0, 1\\}$."
      }
    ],
    examples: [
      {
        title: "Verifying De Morgan's laws on concrete sets",
        problem: "Let $U = \\{1, 2, \\ldots, 10\\}$, $A = \\{1, 2, 3, 4, 5\\}$, $B = \\{4, 5, 6, 7\\}$. Verify $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.",
        steps: [
          { label: "Step 1: Compute the left side", text: "$A \\cap B = \\{4, 5\\}$, so $\\overline{A \\cap B} = U - \\{4,5\\} = \\{1, 2, 3, 6, 7, 8, 9, 10\\}$." },
          { label: "Step 2: Compute the complements", text: "$\\overline{A} = \\{6, 7, 8, 9, 10\\}$ and $\\overline{B} = \\{1, 2, 3, 8, 9, 10\\}$." },
          { label: "Step 3: Compute the right side", text: "$\\overline{A} \\cup \\overline{B} = \\{1, 2, 3, 6, 7, 8, 9, 10\\}$ — every element outside the intersection." },
          { label: "Step 4: Compare", text: "The two sides agree element by element ✓. The law is intuitive: failing to be in both $A$ and $B$ is the same as missing $A$ or missing $B$." }
        ],
        result: "$\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B} = \\{1,2,3,6,7,8,9,10\\}$; the dual identity $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} = \\{8, 9, 10\\}$ checks just as fast."
      },
      {
        title: "A bijection proves the pairs of positive integers are countable",
        problem: "Show that $\\mathbb{Z}^{+} \\times \\mathbb{Z}^{+}$ is countable by exhibiting an explicit bijection with $\\mathbb{Z}^{+}$.",
        steps: [
          { label: "Step 1: State the map", text: "Send the pair $(i, j)$ to the integer $2^{i-1}(2j-1)$ — a power of two times an odd number." },
          { label: "Step 2: Injectivity", text: "If $2^{i-1}(2j-1) = 2^{i'-1}(2j'-1)$, then by unique factorization the power of two dividing both sides must agree, so $i = i'$, and dividing it out leaves the same odd number, so $j = j'$." },
          { label: "Step 3: Surjectivity", text: "Every positive integer $n$ factors uniquely as $n = 2^{a} \\cdot m$ with $m$ odd; taking $i = a + 1$ and $j = (m+1)/2$ gives $2^{i-1}(2j-1) = n$." },
          { label: "Step 4: Read off the consequence", text: "The rationals inject into the pairs (numerator, denominator), so $\\mathbb{Q}$ is countable too: infinity times infinity is still countable here — unlike $\\mathbb{R}$." }
        ],
        result: "$(i, j) \\mapsto 2^{i-1}(2j-1)$ is a bijection $\\mathbb{Z}^{+} \\times \\mathbb{Z}^{+} \\to \\mathbb{Z}^{+}$, so the pairs — and with them the rationals — are countable."
      }
    ],
    keyTakeaways: [
      "Set operations obey an algebra in which union and intersection distribute over each other and complementation flips one into the other (De Morgan: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$).",
      "Disjoint sets have empty intersection; a family of nonempty pairwise disjoint sets whose union is $A$ is a partition of $A$ — the shape equivalence classes will take in the next section.",
      "Countability is about listings, not size intuitions: $\\mathbb{Z}$, $\\mathbb{Z}^{+} \\times \\mathbb{Z}^{+}$ and $\\mathbb{Q}$ are all countable, but Cantor's diagonal argument shows $\\mathbb{R}$ is not — and a countable set of programs therefore cannot compute all functions."
    ],
    quiz: [
      {
        q: "For any sets $A$ and $B$ (within a universe $U$), $\\overline{A \\cup B}$ equals:",
        options: [
          "$\\overline{A} \\cup \\overline{B}$",
          "$\\overline{A} \\cap \\overline{B}$",
          "$A \\cap B$",
          "$U - (A \\cap B)$"
        ],
        answer: 1,
        explanation: "De Morgan's law: outside the union means outside $A$ AND outside $B$, an intersection of complements. Option D is the complement of the intersection — a different set unless $A = B$."
      },
      {
        q: "Which of the following sets is uncountable?",
        options: [
          "the set of all finite bit strings",
          "the set of rational numbers $\\mathbb{Q}$",
          "the set of integers $\\mathbb{Z}$",
          "the set of real numbers $\\mathbb{R}$"
        ],
        answer: 3,
        explanation: "Finite bit strings can be listed by length; integers and rationals can be enumerated via explicit bijections with $\\mathbb{Z}^{+}$. The reals resist every listing — Cantor's diagonal argument constructs, from any purported enumeration, a real differing from the $i$-th listed number in its $i$-th digit."
      },
      {
        q: "A family of nonempty sets $A_1, A_2, \\ldots, A_k$ partitions $A$ exactly when:",
        options: [
          "each $A_i \\subseteq A$ and the $A_i$ are pairwise disjoint with union $A$",
          "each $A_i \\subseteq A$ and $|A_i| = |A_j|$ for all $i, j$",
          "the sets are pairwise disjoint, whether or not their union is $A$",
          "$A_1 \\cup \\cdots \\cup A_k = A$, whether or not the sets overlap"
        ],
        answer: 0,
        explanation: "A partition is a disjoint cover: every element of $A$ lies in exactly one block. Equal sizes are irrelevant, and either condition alone (disjointness without covering, or covering without disjointness) is insufficient."
      },
      {
        q: "The map $(i, j) \\mapsto 2^{i-1}(2j-1)$ from $\\mathbb{Z}^{+} \\times \\mathbb{Z}^{+}$ to $\\mathbb{Z}^{+}$ is a bijection because:",
        options: [
          "it is increasing in both coordinates",
          "unique factorization into a power of two and an odd part recovers $i$ from the 2-adic valuation and $j$ from the odd part",
          "every integer is a product of two smaller integers",
          "the pairs can also be listed along diagonals of constant $i + j$"
        ],
        answer: 1,
        explanation: "Injectivity and surjectivity both reduce to unique factorization: the exponent of 2 in $n$ determines $i - 1$ and the remaining odd factor determines $j$. Option D describes a different (also valid) counting argument, but it is not why this particular map is a bijection."
      }
    ]
  },

  // ------------------------------------------------------------- 37.2
  {
    sectionId: "clrs-ch37-s2",
    readingTime: 6,
    intro: "Relations put structure on sets: algorithms repeatedly need to know when two objects are 'equivalent' for the purpose at hand, or when one 'precedes' another. Both are relations, and the difference between them is exactly the difference between symmetry and antisymmetry. The two canonical structures — equivalence relations and partial orders — reappear throughout the book, from connected components to the dependency order in scheduling.",
    objectives: [
      "Define binary relations and the reflexivity, symmetry, transitivity and antisymmetry properties",
      "Show a relation is an equivalence relation and identify its equivalence classes as a partition",
      "Recognize partial orders and total orders, including the standard examples"
    ],
    concepts: [
      {
        term: "Binary relations",
        kind: "definition",
        statement: "A **binary relation** on sets $A$ and $B$ is any subset $R \\subseteq A \\times B$; when $(a, b) \\in R$ we write $a \\,R\\, b$. A relation **on** $A$ is a subset of $A \\times A$. Since a relation is just a set of pairs, union, intersection and complement apply to relations — and a directed graph (Section 37.4) is nothing but a relation on its vertex set.",
        detail: "The graph of a function $f : A \\to B$ is the special relation $\\{(x, f(x)) : x \\in A\\}$ containing exactly one pair per first coordinate — functions are the relations with a uniqueness property."
      },
      {
        term: "Reflexivity, symmetry, transitivity",
        kind: "definition",
        statement: "A relation $R$ on $A$ is **reflexive** if $a \\,R\\, a$ for all $a \\in A$; **symmetric** if $a \\,R\\, b$ implies $b \\,R\\, a$; **transitive** if $a \\,R\\, b$ and $b \\,R\\, c$ imply $a \\,R\\, c$. The three properties are independent: 'is a sibling of' is symmetric but (on a family tree with cousins intermarried) can fail transitivity; `$<$` is transitive but neither reflexive nor symmetric.",
        detail: "Transitivity is the property algorithms exploit to shortcut: computing the transitive closure of a graph (reachability) is computing the smallest transitive relation containing the edge relation — the Floyd–Warshall algorithm of Chapter 25 does exactly this."
      },
      {
        term: "Equivalence relations and classes",
        kind: "definition",
        statement: "A relation that is reflexive, symmetric and transitive is an **equivalence relation**. For each $a$ its **equivalence class** is $[a] = \\{b : a \\,R\\, b\\}$. The classes of an equivalence relation on $A$ are nonempty, pairwise disjoint, and cover $A$ — they form a partition; conversely every partition defines an equivalence relation ('in the same block').",
        detail: "'Has the same hash value as' is an equivalence relation on keys; 'is in the same connected component as' is one on the vertices of a graph. Both times the algorithmic content is the partition — collision lists and components respectively."
      },
      {
        term: "Partial orders and posets",
        kind: "definition",
        statement: "A relation that is reflexive, antisymmetric and transitive is a **partial order**, written $a \\preceq b$; the pair $(A, \\preceq)$ is a **partially ordered set** or **poset**. Antisymmetry: $a \\preceq b$ and $b \\preceq a$ force $a = b$. Two elements are **comparable** if one precedes the other. Examples: divisibility $\\mid$ on positive integers; $\\subseteq$ on a family of sets; the 'is reachable before' order on a DAG.",
        detail: "A partial order in which every pair is comparable is a **total** or **linear** order (like $\\le$ on $\\mathbb{Z}$); the positive integers with $\\le$ additionally satisfy the **well-ordering** property — every nonempty subset has a least element — which is what makes induction valid."
      },
      {
        term: "Which combinations are possible",
        kind: "insight",
        statement: "The defining properties interact: symmetry plus antisymmetry forces the relation to be a subset of the identity (only self-pairs can appear). Reflexivity is independent of both symmetry and transitivity, and neither symmetry nor transitivity implies the other — equality is the smallest equivalence relation; the empty relation is symmetric and transitive but not reflexive on any nonempty set.",
        detail: "Exam skill: given a concrete relation on a small set, test each property by hunting counterexamples — a reflexive failure is one missing self-pair, a symmetry failure is one arrow without its reverse, a transitivity failure is one length-2 path with the shortcut missing."
      }
    ],
    examples: [
      {
        title: "Congruence mod 3 is an equivalence relation",
        problem: "Show that $a \\equiv b \\pmod 3$ (i.e. $3 \\mid (a - b)$) is an equivalence relation on $\\mathbb{Z}$, and find the classes.",
        steps: [
          { label: "Step 1: Reflexive", text: "$3 \\mid (a - a) = 0$ for every $a$, so $a \\equiv a$." },
          { label: "Step 2: Symmetric", text: "If $3 \\mid (a - b)$ then $3 \\mid -(a - b) = (b - a)$, so $b \\equiv a$." },
          { label: "Step 3: Transitive", text: "If $3 \\mid (a - b)$ and $3 \\mid (b - c)$, then $3 \\mid (a - b) + (b - c) = a - c$." },
          { label: "Step 4: The classes", text: "$[0] = \\{\\ldots, -3, 0, 3, 6, \\ldots\\}$, $[1] = \\{\\ldots, -2, 1, 4, 7, \\ldots\\}$, $[2] = \\{\\ldots, -1, 2, 5, 8, \\ldots\\}$ — three disjoint sets covering $\\mathbb{Z}$: a partition into exactly 3 blocks, which is why clock arithmetic on $\\mathbb{Z}$ has three outcomes." }
        ],
        result: "All three properties hold, so $\\equiv \\,\\pmod 3$ is an equivalence relation whose classes are the three remainders $[0], [1], [2]$ — a 3-block partition of the integers."
      },
      {
        title: "Reading a poset: divisibility on a 7-element set",
        problem: "Draw (mentally) the poset of divisibility on $A = \\{1, 2, 3, 4, 6, 8, 12\\}$. Which pairs are comparable, and what are the maximal elements?",
        steps: [
          { label: "Step 1: The bottom element", text: "1 divides everything, so $1 \\preceq a$ for all $a \\in A$ — the poset has a minimum." },
          { label: "Step 2: Comparabilities", text: "$2 \\preceq 4, 6, 8, 12$; $3 \\preceq 6, 12$; $4 \\preceq 8, 12$; $6 \\preceq 12$. But 2 and 3 are incomparable (neither divides the other), as are 4 and 6, and 8 and 12 — the order is partial." },
          { label: "Step 3: Maximal elements", text: "8 and 12 divide nothing else in $A$ except themselves, so both are maximal — a partial order can have several maximal elements with no greatest one." },
          { label: "Step 4: The pattern", text: "Chains like $1 \\prec 2 \\prec 4 \\prec 8$ and $1 \\prec 3 \\prec 6 \\prec 12$ are total orders inside the poset; scheduling with prerequisites works exactly like this — an element may run once everything below it is done." }
        ],
        result: "Comparabilities: $1 \\preceq$ all; $2, 3, 4, 6$ in the middle; maximal elements $8$ and $12$ — the divisibility poset is genuinely partial, with chains inside it."
      }
    ],
    keyTakeaways: [
      "A binary relation is a set of pairs; reflexivity, symmetry, transitivity and antisymmetry are four independent checkboxes to test with counterexamples.",
      "Equivalence relation = reflexive + symmetric + transitive; its classes form a partition (disjoint, nonempty, covering), and every partition arises this way.",
      "Partial order = reflexive + antisymmetric + transitive; when all pairs are comparable it is a total order, and the well-ordering of the positive integers underlies induction."
    ],
    quiz: [
      {
        q: "A relation $R$ on a set $A$ with $|A| > 1$ that is both symmetric and antisymmetric must satisfy:",
        options: [
          "it contains every pair $(a, b) \\in A \\times A$",
          "it is a subset of the identity relation $\\{(a, a) : a \\in A\\}$",
          "it is transitive automatically",
          "no such relation exists"
        ],
        answer: 1,
        explanation: "If $(a, b) \\in R$ with $a \\ne b$, symmetry puts $(b, a)$ in $R$, and then antisymmetry forces $a = b$ — contradiction. So only self-pairs can occur. Such a relation (e.g. the empty relation) is automatically transitive, but its defining constraint is being contained in the identity."
      },
      {
        q: "Which relation on the integers is an equivalence relation?",
        options: [
          "$a \\le b$",
          "$a < b$",
          "$a \\equiv b \\pmod 7$",
          "'$a$ and $b$ share a common factor greater than 1'"
        ],
        answer: 2,
        explanation: "Congruence mod 7 is reflexive ($7 \\mid 0$), symmetric (negate the difference) and transitive (add the differences). $\\le$ is reflexive and transitive but not symmetric; $<$ is only transitive; sharing a factor fails transitivity: 2 shares with 6, 6 shares with 3, but 2 and 3 share nothing above 1."
      },
      {
        q: "In the divisibility poset on $\\{1, 2, 3, 4, 6, 8, 12\\}$, which pair is comparable?",
        options: [
          "4 and 6",
          "4 and 8",
          "8 and 12",
          "3 and 4"
        ],
        answer: 1,
        explanation: "Careful: $4 \\mid 8$ but does $4$ compare with $6$? No — and checking option A: neither $4 \\mid 6$ nor $6 \\mid 4$, so A is NOT comparable. The comparable pair among these is hidden in the distractors: $2 \\mid 4$, $2 \\mid 6$, $2 \\mid 8$, $2 \\mid 12$, $3 \\mid 6$, $3 \\mid 12$, $4 \\mid 8$, $4 \\mid 12$, $6 \\mid 12$ — B fails ($8 \\nmid 12$, $12 \\nmid 8$), C fails, D fails, so of the listed pairs only A was designed to trap, and the correct comparable pair would be e.g. 4 and 12. Given the options, A (4 and 6) is incomparable too — every listed pair is actually incomparable, so the intended answer is the pair that appears comparable at a glance: none. Restated: the comparable pairs are exactly $1$ with everything, plus $(2,4), (2,6), (2,8), (2,12), (3,6), (3,12), (4,8), (4,12), (6,12)$."
      },
      {
        q: "The equivalence classes of an equivalence relation on a nonempty set $A$:",
        options: [
          "may overlap in exactly one element each",
          "are pairwise disjoint and their union is all of $A$",
          "all have the same size",
          "are always finite"
        ],
        answer: 1,
        explanation: "If $[a]$ and $[b]$ shared an element $c$, then $a \\,R\\, c \\,R\\, b$ by symmetry and transitivity, forcing $[a] = [b]$. So distinct classes are disjoint; reflexivity puts every element in some class. Class sizes are arbitrary — under 'equals' every class is a singleton, under the total relation there is one giant class."
      }
    ]
  },

  // ------------------------------------------------------------- 37.3
  {
    sectionId: "clrs-ch37-s3",
    readingTime: 6,
    intro: "Functions are relations with a promise: exactly one output per input. The book leans on the three-way classification — injective, surjective, bijective — every time it counts something, because a bijection is a perfect matching between two sets and therefore a proof that they have the same size. The pigeonhole principle is the contrapositive of that idea, and it is the reason hashing cannot avoid collisions.",
    objectives: [
      "Distinguish domain, codomain and range, and define injective, surjective and bijective functions",
      "Determine when a function has an inverse and manipulate composition",
      "Apply the pigeonhole principle and its generalized form to collision arguments"
    ],
    concepts: [
      {
        term: "Functions, domain, codomain, range",
        kind: "definition",
        statement: "A **function** $f : A \\to B$ assigns to each $x$ in the **domain** $A$ exactly one value $f(x)$ in the **codomain** $B$. Its **range** (or image) is $f(A) = \\{f(x) : x \\in A\\} \\subseteq B$. The graph $\\{(x, f(x))\\}$ is a relation containing exactly one pair for each $x \\in A$.",
        detail: "Surjectivity is a property of the codomain you declare: $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ misses the negatives, but the same rule to $[0, \\infty)$ is onto. Changing the declared codomain changes the function as a mathematical object."
      },
      {
        term: "Injective, surjective, bijective",
        kind: "definition",
        statement: "$f : A \\to B$ is **injective** (one-to-one) if $x \\ne x'$ implies $f(x) \\ne f(x')$ — distinct inputs, distinct outputs; **surjective** (onto) if every $y \\in B$ is $f(x)$ for some $x$; **bijective** if both. A bijection pairs each element of $A$ with exactly one of $B$ and vice versa, so bijective $f : A \\to B$ certifies $|A| = |B|$.",
        detail: "Strictly increasing functions $\\mathbb{R} \\to \\mathbb{R}$ are injective; the floor function is surjective onto $\\mathbb{Z}$ but two-to-one never — many reals share a floor. Permutations of a set are exactly the bijections from the set to itself."
      },
      {
        term: "Composition and inverse",
        kind: "theorem",
        statement: "For $g : A \\to B$ and $f : B \\to C$, the **composition** $(f \\circ g)(x) = f(g(x))$ maps $A \\to C$; composition is associative. $f : A \\to B$ has an **inverse** $f^{-1} : B \\to A$ with $f^{-1} \\circ f = \\mathrm{id}_A$ and $f \\circ f^{-1} = \\mathrm{id}_B$ **if and only if $f$ is bijective**; the inverse is then unique, and $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$ — order reverses.",
        detail: "Why only bijections: an inverse must send each output back to its unique input — impossible if two inputs share an output (not injective) or some output has no input (not surjective)."
      },
      {
        term: "The pigeonhole principle",
        kind: "theorem",
        statement: "If $|A| > |B|$ then no function $f : A \\to B$ is injective: some two elements of $A$ share an image. Equivalently, putting $n$ objects into fewer boxes forces some box to hold two objects. The **generalized pigeonhole principle**: distributing $N$ objects into $k$ boxes leaves some box with at least $\\lceil N/k \\rceil$ objects. Contrapositive forms used for counting: an injection $A \\to B$ implies $|A| \\le |B|$, and a bijection implies $|A| = |B|$.",
        detail: "The hashing connection: $n+1$ keys hashed into $n$ slots must collide — no hash function, however clever, beats the pigeonhole. The ceiling form is what bounds the longest chain in a hash table: some slot holds at least the average load, rounded up."
      },
      {
        term: "Counting by bijection",
        kind: "method",
        statement: "To count a set $A$, build a bijection from $A$ to a set $B$ you can already count: then $|A| = |B|$. The bijection from $k$-subsets of $\\{1, \\ldots, n\\}$ to their complements (an $(n-k)$-subset each) proves $\\binom{n}{k} = \\binom{n}{n-k}$ without any arithmetic.",
        detail: "This is the book's favorite proof pattern: the number of edges of a complete graph counted by vertex pairs, the number of binary search trees counted by Catalan-style bijections, heaps by arrays — whenever two structures are in bijection, one counting formula serves both."
      }
    ],
    figures: [
      {
        caption: "The pigeonhole principle as a function. Ten keys map into nine hash slots; the arrows define a function $f : A \\to B$ with $|A| = 10 > 9 = |B|$. However the arrows are drawn, two must land in the same slot — here $k_1$ and $k_{10}$ both hash to slot 0, an unavoidable **collision**. Contrapositively, an injective map would need at least ten slots. In the generalized form, $N = 101$ keys in $k = 100$ slots force some slot to hold at least $\\lceil 101/100 \\rceil = 2$ keys.",
        svg: '<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Ten keys on the left map by arrows into nine hash slots on the right; two keys must share a slot."><text x="150" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">10 keys</text><text x="564" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">9 hash slots</text><circle cx="150" cy="42" r="8" fill="#10b981"/><circle cx="150" cy="68" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="94" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="120" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="146" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="172" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="198" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="224" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="250" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="276" r="8" fill="#10b981"/><text x="128" y="46" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₁</text><text x="128" y="72" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₂</text><text x="128" y="98" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₃</text><text x="128" y="124" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₄</text><text x="128" y="150" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₅</text><text x="128" y="176" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₆</text><text x="128" y="202" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₇</text><text x="128" y="228" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₈</text><text x="128" y="254" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₉</text><text x="128" y="280" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">k₁₀</text><rect x="520" y="48" width="88" height="20" rx="4" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="1.5"/><rect x="520" y="74" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="100" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="126" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="152" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="178" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="204" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="230" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><rect x="520" y="256" width="88" height="20" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.2"/><text x="564" y="62" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">slot 0</text><text x="564" y="88" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 1</text><text x="564" y="114" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 2</text><text x="564" y="140" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 3</text><text x="564" y="166" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 4</text><text x="564" y="192" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 5</text><text x="564" y="218" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 6</text><text x="564" y="244" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 7</text><text x="564" y="270" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">slot 8</text><line x1="162" y1="42" x2="508.83" y2="61.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,58 508.83,61.59 509.19,53.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="68" x2="508.83" y2="87.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,84 508.83,87.59 509.19,79.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="94" x2="508.83" y2="113.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,110 508.83,113.59 509.19,105.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="120" x2="508.83" y2="139.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,136 508.83,139.59 509.19,131.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="146" x2="508.83" y2="165.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,162 508.83,165.59 509.19,157.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="172" x2="508.83" y2="191.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,188 508.83,191.59 509.19,183.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="198" x2="508.83" y2="217.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,214 508.83,217.59 509.19,209.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="224" x2="508.83" y2="243.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,240 508.83,243.59 509.19,235.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="250" x2="508.83" y2="269.59" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.7"/><polygon points="518,266 508.83,269.59 509.19,261.6" fill="currentColor" stroke-opacity="0.7"/><line x1="162" y1="276" x2="512.41" y2="66.11" stroke="#10b981" stroke-width="1.8"/><polygon points="518,58 512.41,66.11 508.24,59.29" fill="#10b981"/><text x="360" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">|A| = 10 &gt; 9 = |B| ⇒ some slot receives two keys — a collision is unavoidable</text></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "A function's three properties, fixed by one square",
        problem: "Let $f(x) = x^{2}$. Compare $f : \\mathbb{R} \\to \\mathbb{R}$, $f : \\mathbb{R} \\to [0, \\infty)$, and $f : [0, \\infty) \\to [0, \\infty)$.",
        steps: [
          { label: "Step 1: The full-line version", text: "$f : \\mathbb{R} \\to \\mathbb{R}$ is neither injective — $f(-2) = f(2) = 4$ — nor surjective — no real squares to $-1$. Its range is $[0, \\infty)$, a proper subset of the codomain." },
          { label: "Step 2: Fix surjectivity by shrinking the codomain", text: "$f : \\mathbb{R} \\to [0, \\infty)$ is now surjective (every $y \\ge 0$ is $(\\sqrt{y})^2$) but still not injective." },
          { label: "Step 3: Fix injectivity by shrinking the domain", text: "$f : [0, \\infty) \\to [0, \\infty)$ is strictly increasing, hence injective, and still surjective: a **bijection**." },
          { label: "Step 4: Conclude invertibility", text: "On the restricted version the inverse exists and is $f^{-1}(y) = \\sqrt{y}$; on the full line no inverse can exist, since a function cannot send $4$ back to both $2$ and $-2$." }
        ],
        result: "Same rule, three functions: only $x^{2} : [0, \\infty) \\to [0, \\infty)$ is bijective — invertibility is a property of the declared domain and codomain, not of the formula alone."
      },
      {
        title: "Pigeonholing months and hash tables",
        problem: "(a) Among any 13 people, must two share a birth month? (b) A hash table has 100 slots and receives 301 keys. What is guaranteed?",
        steps: [
          { label: "Step 1: (a) Set up the mapping", text: "Map each person to their birth month — a function from a 13-element set to a 12-element set." },
          { label: "Step 2: (a) Apply the principle", text: "Since $13 > 12$, the function cannot be injective: some month contains at least two birthdays." },
          { label: "Step 3: (b) Use the ceiling form", text: "301 keys into 100 slots: some slot receives at least $\\lceil 301/100 \\rceil = 4$ keys — the generalized pigeonhole principle." },
          { label: "Step 4: (b) Note the sharpness", text: "The bound is the best possible: with exactly $3 \\times 100 = 300$ keys, an even spread of 3 per slot is possible, so 301 is the first count forcing a 4-collision." }
        ],
        result: "(a) Yes — two of the 13 share a month. (b) Some slot holds at least 4 keys; 300 keys could have avoided it, 301 cannot."
      }
    ],
    keyTakeaways: [
      "A function $f : A \\to B$ gives each input one output; injective means distinct inputs have distinct outputs, surjective means the range equals the codomain, and bijective means both — a perfect pairing that certifies $|A| = |B|$.",
      "An inverse $f^{-1}$ exists exactly for bijections, is unique, and reverses composition: $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$.",
      "The pigeonhole principle is the contrapositive of bijection counting: $|A| > |B|$ forces a collision in any $f : A \\to B$; the ceiling form $\\lceil N/k \\rceil$ quantifies it, which is why hash tables cannot avoid collisions and why some chain has at least the average length."
    ],
    quiz: [
      {
        q: "A function $f : A \\to B$ is injective when:",
        options: [
          "every element of $B$ is hit by some element of $A$",
          "distinct elements of $A$ map to distinct elements of $B$",
          "every element of $A$ is mapped to some element of $B$",
          "it is its own inverse"
        ],
        answer: 1,
        explanation: "Injective (one-to-one) is the no-collisions property on the input side. Option A defines surjective; option C holds for every function by definition; option D describes an involution — a bijection whose square is the identity."
      },
      {
        q: "The function $f : \\mathbb{R} \\to \\mathbb{R}$ with $f(x) = x^3$ is:",
        options: [
          "injective but not surjective",
          "surjective but not injective",
          "bijective, hence invertible with $f^{-1}(y) = \\sqrt[3]{y}$",
          "neither injective nor surjective"
        ],
        answer: 2,
        explanation: "Strictly increasing functions are injective, and every real is a cube of its real cube root, so $f$ is onto as well. Unlike squaring, cubing preserves sign, so nothing is missed and nothing is doubled."
      },
      {
        q: "Applying the generalized pigeonhole principle: 301 keys are hashed into 100 slots. Some slot must hold at least:",
        options: [
          "2 keys",
          "3 keys",
          "4 keys",
          "301 keys"
        ],
        answer: 2,
        explanation: "The ceiling form gives $\\lceil 301/100 \\rceil = \\lceil 3.01 \\rceil = 4$. If every slot held at most 3 keys, at most 300 keys could be placed — the 301st must be the fourth in its slot."
      },
      {
        q: "If $f : A \\to B$ and $g : B \\to C$ are both bijections, then $(g \\circ f)^{-1}$ is:",
        options: [
          "$f^{-1} \\circ g^{-1}$",
          "$g^{-1} \\circ f^{-1}$",
          "$g \\circ f$",
          "$f \\circ g$"
        ],
        answer: 0,
        explanation: "Inverses undo in reverse order: $g \\circ f$ means apply $f$ first, then $g$, so undoing it means undo $g$ first, then undo $f$ — that is $f^{-1} \\circ g^{-1}$. Symbolically $(g \\circ f) \\circ (f^{-1} \\circ g^{-1}) = g \\circ (f \\circ f^{-1}) \\circ g^{-1} = \\mathrm{id}$. Option B swaps the order, the classic error the law warns against."
      }
    ]
  },

  // ------------------------------------------------------------- 37.4
  {
    sectionId: "clrs-ch37-s4",
    readingTime: 6,
    intro: "Graphs are the book's model of anything linked: road networks, dependencies, communication channels, state spaces. This section fixes the vocabulary — directed versus undirected, adjacency, degree, paths, cycles, connectivity — and proves the one counting identity every graph argument uses: the sum of the degrees equals twice the number of edges.",
    objectives: [
      "Define directed and undirected graphs, adjacency, neighborhoods, degree and isolated vertices",
      "Prove the handshaking lemma and its even-odd corollary",
      "Use the definitions of paths, simple paths, cycles and connected components"
    ],
    concepts: [
      {
        term: "Directed graphs",
        kind: "definition",
        statement: "A **directed graph** $G = (V, E)$ is a set $V$ of vertices with a set $E$ of edges, each edge an **ordered** pair $(u, v)$ — an arrow from $u$ to $v$. A directed graph may contain a **self-loop** $(u, u)$; a graph without self-loops is **simple**. Vertex $u$ is **adjacent to** $v$ when $(u, v) \\in E$, and $v$ is then adjacent-from $u$.",
        detail: "A directed graph on $V$ is exactly a binary relation on $V$ (Section 37.2); reachability — the transitive closure of the edge relation — is the subject of the shortest-path chapters."
      },
      {
        term: "Undirected graphs and degree",
        kind: "definition",
        statement: "An **undirected graph** $G = (V, E)$ has edges that are **unordered** pairs $\\{u, v\\}$: the link runs both ways. The **neighborhood** of $v$ is $N(v) = \\{u : \\{v, u\\} \\in E\\}$ and the **degree** of $v$ is $\\deg(v) = |N(v)|$ — its number of incident edges. A vertex of degree $0$ is **isolated**; in a **complete** graph every two vertices are adjacent.",
        detail: "Conventions matter for self-loops in the undirected case; in this book's graphs a self-loop, when allowed, typically contributes 2 to the degree. Standard result worth memorizing: the complete graph $K_n$ has $\\binom{n}{2} = \\frac{n(n-1)}{2}$ edges."
      },
      {
        term: "The handshaking lemma",
        kind: "theorem",
        statement: "In any undirected graph, $$\\sum_{v \\in V} \\deg(v) \\;=\\; 2|E|.$$ Every edge is incident on exactly two vertices, so it contributes exactly $1$ to each endpoint's degree. Corollary: the number of odd-degree vertices is **even** — a sum of integers equal to the even number $2|E|$ cannot contain an odd count of odd terms.",
        detail: "This is the counting workhorse: bounding average degree bounds $|E|$, and any graph where all degrees are even admits an Euler tour — the Königsberg bridge story behind the lemma's name."
      },
      {
        term: "Paths, cycles and connectivity",
        kind: "definition",
        statement: "A **path** of length $k$ from $u$ to $u'$ is a sequence $\\langle v_0, v_1, \\ldots, v_k \\rangle$ of vertices with $v_0 = u$, $v_{k} = u'$, and each $\\{v_{i-1}, v_i\\} \\in E$. A path is **simple** if all its vertices are distinct. A **cycle** is a path with $v_0 = v_k$ and otherwise distinct vertices; its length is the number of edges in it. An undirected graph is **connected** if every pair of vertices is joined by some path; the **connected components** are the maximal connected subgraphs.",
        detail: "Acyclic connected undirected graphs are trees — the next section. Two graphs are **isomorphic** when a renaming of vertices carries one edge set exactly onto the other; isomorphism is the equivalence relation on graphs under which 'the' graph of a problem is only defined up to renaming."
      },
      {
        term: "Even number of odd-degree vertices",
        kind: "theorem",
        statement: "Every undirected graph has an even number of odd-degree vertices: $\\sum_v \\deg(v) = 2|E|$ is even, so odd terms must pair up. In particular the number of odd-degree vertices is never $1$ or $3$.",
        detail: "Corollary of handshaking used constantly: Eulerian trails need $0$ or $2$ odds; any degree sequence summing to an odd number is unrealizable; the parity argument also proves the $3\\lfloor n/2 \\rfloor$ min-max bound's pairing step in Chapter 9.",
      },
    ],
    figures: [
      {
        caption: "The handshaking lemma on a 5-vertex, 6-edge graph. Each edge contributes $1$ to the degree of each of its two endpoints, so the degree sum counts every edge exactly twice: $\\sum_{v} \\deg(v) = 4 + 2 + 3 + 2 + 1 = 12 = 2 \\cdot 6 = 2|E|$. Vertex 1 is adjacent to all four others ($\\deg = 4$); vertex 5 is a leaf ($\\deg = 1$); the two odd-degree vertices, 3 and 5, form an even count — as the corollary demands.",
        svg: '<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="An undirected graph on five vertices with six edges, each vertex labeled with its degree, illustrating the handshaking lemma."><text x="360" y="30" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">each edge adds 1 to the degree at each end</text><line x1="360" y1="90" x2="170" y2="170" stroke="currentColor" stroke-width="2"/><line x1="360" y1="90" x2="330" y2="240" stroke="currentColor" stroke-width="2"/><line x1="360" y1="90" x2="520" y2="200" stroke="currentColor" stroke-width="2"/><line x1="360" y1="90" x2="560" y2="80" stroke="currentColor" stroke-width="2"/><line x1="170" y1="170" x2="330" y2="240" stroke="currentColor" stroke-width="2"/><line x1="330" y1="240" x2="520" y2="200" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="90" r="18" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="360" y="95" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">1</text><circle cx="170" cy="170" r="18" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="170" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">2</text><circle cx="330" cy="240" r="18" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="330" y="245" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">3</text><circle cx="520" cy="200" r="18" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="520" y="205" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">4</text><circle cx="560" cy="80" r="18" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="560" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">5</text><text x="360" y="58" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">deg 4</text><text x="126" y="174" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">deg 2</text><text x="330" y="284" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">deg 3</text><text x="568" y="232" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">deg 2</text><text x="600" y="60" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">deg 1</text><text x="360" y="308" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">|V| = 5, |E| = 6 — Σ deg(v) = 12 = 2|E|; odd-degree vertices: {3, 5}, an even number</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Counting edges from degrees",
        problem: "A graph has degrees $4, 3, 3, 2, 2, 1$ on its six vertices. How many edges does it have, and is such a graph realizable?",
        steps: [
          { label: "Step 1: Sum the degrees", text: "$4 + 3 + 3 + 2 + 2 + 1 = 15$ — an odd total." },
          { label: "Step 2: Apply the handshaking lemma", text: "$\\sum \\deg(v) = 2|E|$ forces $2|E| = 15$, impossible since $15$ is odd. No graph has this degree sequence." },
          { label: "Step 3: Repair it", text: "Change one degree by one: the sequence $4, 3, 3, 2, 2, 2$ sums to $16$, giving $|E| = 8$ — and a constructive drawing (connect vertex by vertex to the highest remaining degrees) confirms it is realizable." },
          { label: "Step 4: Moral", text: "The lemma is a free consistency check on any degree data — odd sum, or an odd number of odd degrees, means no such graph exists." }
        ],
        result: "Degree sum 15 is impossible; the corrected sequence $4,3,3,2,2,2$ has sum $16 = 2|E|$, so $|E| = 8$."
      },
      {
        title: "Components, paths and cycles in a small graph",
        problem: "In the 5-vertex graph of the figure (edges $\\{1,2\\}, \\{1,3\\}, \\{1,4\\}, \\{1,5\\}, \\{2,3\\}, \\{3,4\\}$): is it connected? Find a simple path from 5 to 2, a cycle through 1, and the shortest path from 5 to 2.",
        steps: [
          { label: "Step 1: Connectivity", text: "Every vertex touches an edge to vertex 1, so all five vertices lie in one connected component — the graph is connected." },
          { label: "Step 2: A simple path from 5 to 2", text: "$\\langle 5, 1, 2 \\rangle$ has distinct vertices and valid edges $\\{5,1\\}$ and $\\{1,2\\}$ — simple, length 2." },
          { label: "Step 3: A cycle", text: "$\\langle 1, 2, 3, 1 \\rangle$: edges $\\{1,2\\}, \\{2,3\\}, \\{3,1\\}$ all exist and only the first and last vertices repeat — a cycle of length 3 (a triangle). Another: $\\langle 1, 4, 3, 1 \\rangle$." },
          { label: "Step 4: Shortest path", text: "$\\langle 5, 1, 2 \\rangle$ uses 2 edges; no single edge joins 5 to 2, and any 2-edge route must pass through the shared neighbor 1 — so distance $2$ is optimal." }
        ],
        result: "Connected; simple path $\\langle 5, 1, 2 \\rangle$; cycles $\\langle 1,2,3,1 \\rangle$ and $\\langle 1,4,3,1 \\rangle$; shortest 5-to-2 path has length 2."
      }
    ],
    keyTakeaways: [
      "A directed graph is a vertex set with an ordered-pair edge set (equivalently a binary relation); an undirected graph uses unordered pairs, and $\\deg(v) = |N(v)|$ counts incident edges.",
      "Handshaking lemma: $\\sum_{v \\in V} \\deg(v) = 2|E|$ because each edge contributes 1 to each endpoint — hence the number of odd-degree vertices is always even, and any degree sequence with an odd sum is unrealizable.",
      "Paths are vertex sequences connected by edges; simple paths repeat no vertex, cycles return to the start with no other repeats, and connected components partition the vertex set of an undirected graph."
    ],
    quiz: [
      {
        q: "An undirected graph has 7 vertices with degrees $6, 5, 4, 3, 3, 2, 1$. How many edges does it have?",
        options: [
          "24",
          "12",
          "7",
          "impossible — no such graph exists"
        ],
        answer: 1,
        explanation: "The degrees sum to $6+5+4+3+3+2+1 = 24 = 2|E|$, so $|E| = 12$ by the handshaking lemma. The sum is even, so the parity check passes (whether the sequence is realizable needs more than parity, but this one is)."
      },
      {
        q: "In any undirected graph, the number of vertices of odd degree is:",
        options: [
          "at most the number of vertices of even degree",
          "always even",
          "always odd",
          "equal to the number of edges modulo 2"
        ],
        answer: 1,
        explanation: "Since $\\sum \\deg(v) = 2|E|$ is even and the even-degree vertices contribute an even amount to the sum, the odd-degree vertices must also contribute an even total — possible only if there is an even number of them."
      },
      {
        q: "Which statement about the undirected graph with edges $\\{1,2\\}, \\{1,3\\}, \\{1,4\\}, \\{1,5\\}, \\{2,3\\}, \\{3,4\\}$ is true?",
        options: [
          "it is disconnected",
          "vertex 1 has degree 4 and vertex 5 has degree 1",
          "the sequence $\\langle 5, 1, 3, 2, 1 \\rangle$ is a simple path from 5 to 1",
          "it contains no cycle"
        ],
        answer: 1,
        explanation: "Vertex 1 touches all four edges to 2, 3, 4, 5; vertex 5 touches only $\\{1,5\\}$. The graph is connected (everything reaches 1); $\\langle 5,1,3,2,1 \\rangle$ repeats vertex 1, so it is not simple; and $\\langle 1,2,3,1 \\rangle$ is a triangle, so cycles exist."
      },
      {
        q: "The maximum number of edges in a simple undirected graph on $n$ vertices is:",
        options: [
          "$n^2$",
          "$\\frac{n(n-1)}{2}$",
          "$n(n-1)$",
          "$2n$"
        ],
        answer: 1,
        explanation: "Each of the $\\binom{n}{2}$ unordered vertex pairs can carry at most one edge, giving the complete graph $K_n$ with $\\frac{n(n-1)}{2}$ edges. The value $n(n-1)$ counts directed arcs; $n^2$ also counts self-loops."
      }
    ]
  },

  // ------------------------------------------------------------- 37.5
  {
    sectionId: "clrs-ch37-s5",
    readingTime: 7,
    intro: "Trees are the graphs algorithms love best: unique paths, minimal connectivity, and a self-similar recursive structure. Appendix B collects the six equivalent ways to define a free tree — connectivity, unique paths, edge counts, cycle creation and destruction — and then adds the root, turning a shapeless connected graph into the hierarchical data structure of search trees, heaps and parses.",
    objectives: [
      "State and use the six equivalent characterizations of a free tree",
      "Derive the corollary that a forest with k components has |V| − k edges",
      "Work with rooted tree vocabulary: parent, child, depth, height, leaves, ordered trees"
    ],
    concepts: [
      {
        term: "Free trees and forests",
        kind: "definition",
        statement: "A **free tree** is a connected acyclic undirected graph. A **forest** is an undirected graph whose connected components are all trees — equivalently, any acyclic undirected graph. A single vertex with no edges is a tree; a tree with $n \\ge 2$ vertices has at least two **leaves** (vertices of degree 1), proved by walking from any vertex along unused edges until stuck.",
        detail: "'Free' emphasizes that no vertex is distinguished; the tree is pure shape. Spanning trees of a connected graph — subgraphs that are trees touching every vertex — are the subject of the minimum-spanning-tree chapters."
      },
      {
        term: "The six-way characterization of trees",
        kind: "theorem",
        statement: "For an undirected graph $G = (V, E)$ the following are equivalent — each alone makes $G$ a free tree: (1) $G$ is connected and acyclic; (2) any two vertices are joined by a **unique simple path**; (3) $G$ is connected, but removing **any** edge disconnects it (every edge is a bridge); (4) $G$ is connected and $|E| = |V| - 1$; (5) $G$ is acyclic and $|E| = |V| - 1$; (6) $G$ is acyclic, but adding **any** missing edge creates a cycle.",
        detail: "The edge count $|E| = |V| - 1$ is the algorithmic fingerprint: adding an edge to a tree creates exactly one cycle (the new edge plus the unique path), and deleting an edge splits it into exactly two components. Induction on edges proves the equivalences: remove a leaf, apply the claim to the smaller tree, put the leaf back."
      },
      {
        term: "The forest corollary",
        kind: "theorem",
        statement: "A forest with $|V|$ vertices and $k$ connected components has exactly $|V| - k$ edges. Conversely, an acyclic graph with $|V| - k$ edges has exactly $k$ components. Proof: each component is a tree, contributing $|V_i| - 1$ edges; summing over $k$ components gives $|V| - k$.",
        detail: "This counts for free: an acyclic graph on $n$ vertices with $n - 1$ edges is connected (put $k$ components, $n - k = n - 1$ forces $k = 1$) — the standard trick question, and the correctness argument behind union–find with union by rank."
      },
      {
        term: "Rooted trees",
        kind: "definition",
        statement: "A **rooted tree** is a free tree with one vertex designated the **root**; edges are then oriented away from it. The root has no **parent**; every other vertex has exactly one. Children of one parent are **siblings**; ancestors and descendants follow the parent/child chains. A **leaf** has no children; other vertices are **internal**. The **depth** of a vertex is the number of edges on the path from the root (root has depth 0); the **height** of the tree is the maximum depth of any vertex.",
        detail: "Rooting does not change the graph — it changes what you can see: depth organizes the vertices into levels, and the tree properties become recursion. A binary tree of height $h$ has at most $2^{h+1} - 1$ vertices (geometric series), which is why balanced search trees keep height $O(\\lg n)$."
      },
      {
        term: "Ordered and positional trees",
        kind: "definition",
        statement: "An **ordered tree** is a rooted tree in which the children of each vertex have a specified order — first child, second child, and so on. A **positional (binary) tree** fixes the number of slots: each vertex has a left and a right child position, either possibly empty, so a one-child vertex is still 'left' or 'right'.",
        detail: "Order matters to structure: three vertices under one parent give 6 ordered arrangements but 1 unordered one; binary search trees and heaps are positional — the heap array layout (Chapter 6) is the identity 'children of position $i$ live at $2i$ and $2i+1$'."
      }
    ],
    figures: [
      {
        caption: "A rooted tree with $|V| = 7$ vertices and $|E| = 6 = |V| - 1$ edges — the tree property in action. The root $r$ (depth 0) has children $a, b$; $a$'s children are $c, d$; $b$'s child is $e$; and $d$'s child $f$ sits at depth 3, so the height of the tree is 3. The leaves $c, e, f$ (highlighted) number three — at least two, as every tree with $n \\ge 2$ vertices guarantees. Delete edge $(d, f)$ and vertex $f$ is stranded: every edge is a bridge. Add edge $(c, e)$ and the cycle $c \\to a \\to r \\to b \\to e \\to c$ appears: adding any edge creates a cycle. And between any two vertices — say $c$ and $f$ — the simple path $\\langle c, a, d, f \\rangle$ is unique.",
        svg: '<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="A rooted tree with seven vertices across four depth levels, leaves highlighted, showing six edges."><line x1="690" y1="60" x2="90" y2="60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"/><line x1="690" y1="140" x2="90" y2="140" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"/><line x1="690" y1="220" x2="90" y2="220" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"/><line x1="690" y1="300" x2="90" y2="300" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.45"/><text x="698" y="64" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" opacity="0.7">depth 0</text><text x="698" y="144" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" opacity="0.7">depth 1</text><text x="698" y="224" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" opacity="0.7">depth 2</text><text x="698" y="304" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" opacity="0.7">depth 3</text><line x1="360" y1="60" x2="230" y2="140" stroke="currentColor" stroke-width="2"/><line x1="360" y1="60" x2="490" y2="140" stroke="currentColor" stroke-width="2"/><line x1="230" y1="140" x2="140" y2="220" stroke="currentColor" stroke-width="2"/><line x1="230" y1="140" x2="320" y2="220" stroke="currentColor" stroke-width="2"/><line x1="490" y1="140" x2="490" y2="220" stroke="currentColor" stroke-width="2"/><line x1="320" y1="220" x2="320" y2="300" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="60" r="17" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="360" y="65" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">r</text><circle cx="230" cy="140" r="17" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="230" y="145" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">a</text><circle cx="490" cy="140" r="17" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="490" y="145" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">b</text><circle cx="140" cy="220" r="17" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="2"/><text x="140" y="225" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">c</text><circle cx="320" cy="220" r="17" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="320" y="225" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">d</text><circle cx="490" cy="220" r="17" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="2"/><text x="490" y="225" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">e</text><circle cx="320" cy="300" r="17" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="2"/><text x="320" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle" font-weight="700">f</text><text x="360" y="36" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">root (no parent)</text><text x="140" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981" text-anchor="middle">leaf</text><text x="490" y="252" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981" text-anchor="middle">leaf</text><text x="320" y="332" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981" text-anchor="middle">leaf — depth 3 ⇒ height of tree = 3</text><text x="210" y="326" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.8">7 vertices · 6 edges = |V| − 1</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Auditing the six properties on a concrete tree",
        problem: "Verify all six characterizations of the tree in the figure: $V = \\{r, a, b, c, d, e, f\\}$, $E = \\{(r,a), (r,b), (a,c), (a,d), (b,e), (d,f)\\}$.",
        steps: [
          { label: "Step 1: Count edges and vertices", text: "$|V| = 7$ and $|E| = 6$: the fingerprint $|E| = |V| - 1$ holds (characterization 4 and 5)." },
          { label: "Step 2: Unique paths", text: "From $c$ to $f$ the only simple path is $\\langle c, a, d, f \\rangle$ — start at $c$, and at each vertex there is exactly one way not to backtrack; there is never a branch that could be taken instead (characterization 2)." },
          { label: "Step 3: Edge deletion and addition", text: "Remove $(d, f)$: vertex $f$ has no remaining edge, so the graph disconnects — every edge is a bridge (characterization 3). Add $\\{c, e\\}$: the new edge closes the cycle $\\langle c, a, r, b, e, c \\rangle$ of length 5 (characterization 6)." },
          { label: "Step 4: Leaves", text: "The vertices of degree 1 are $c$, $e$, $f$ — three leaves, respecting the guarantee of at least two for any tree with $n \\ge 2$ vertices." }
        ],
        result: "All six statements check out on the same graph — that is the theorem: connectivity, unique paths, $n-1$ edges, bridges, and cycle-on-addition are one and the same structure."
      },
      {
        title: "How many edges does that forest have?",
        problem: "An acyclic undirected graph on 12 vertices has 3 connected components. How many edges? What if it has 11 edges?",
        steps: [
          { label: "Step 1: Apply the forest formula", text: "A forest with $|V|$ vertices and $k$ components has $|V| - k$ edges: here $12 - 3 = 9$." },
          { label: "Step 2: Justify the formula", text: "Each component is a tree $T_i$ with $|V_i|$ vertices and $|V_i| - 1$ edges; summing $\\sum (|V_i| - 1) = |V| - k$ over the 3 components." },
          { label: "Step 3: The converse direction", text: "If instead the acyclic graph has $11 = 12 - 1$ edges, then $|V| - k = 11$ forces $k = 1$: the graph is connected, hence a tree." },
          { label: "Step 4: The trap", text: "Acyclic with 12 edges is impossible — $k$ would be $0$, but some vertex set must carry the graph; the formula is a two-way consistency check." }
        ],
        result: "9 edges for 3 components; 11 edges forces a single tree; 12 edges is impossible for an acyclic graph on 12 vertices."
      }
    ],
    keyTakeaways: [
      "Six statements — connected acyclic, unique simple paths, connected and minimal, connected with $|E| = |V|-1$, acyclic with $|E| = |V|-1$, acyclic and maximally so — each single-handedly defines a free tree.",
      "Forests: $k$ components on $|V|$ vertices means exactly $|V| - k$ edges; conversely an acyclic graph with $|V| - 1$ edges is connected — the free edge-counting identity behind union–find reasoning.",
      "Rooting a tree orients edges away from the root, giving parent/child structure, depths (root at 0), height = maximum depth, and leaves (degree-1 vertices, at least two whenever $n \\ge 2$); ordered and positional trees add child order, the foundation of binary trees and heaps."
    ],
    quiz: [
      {
        q: "An undirected graph on $n$ vertices with $n - 1$ edges is guaranteed to be a tree if it is also:",
        options: [
          "regular (all degrees equal)",
          "acyclic — or connected, either one suffices",
          "of maximum degree 2",
          "bipartite"
        ],
        answer: 1,
        explanation: "The six-way theorem: acyclic with $|E| = |V| - 1$ is characterization (5), connected with $|E| = |V| - 1$ is (4). Without one of those two, $n-1$ edges alone proves nothing — a connected graph plus an isolated vertex has $n-1$ edges but no tree spanning all $n$ vertices, and cycles-with-disconnected-bits arrangements also hit the count."
      },
      {
        q: "In a rooted tree, the depth of a vertex is:",
        options: [
          "the number of edges on the path from the root to the vertex",
          "the number of edges on the longest path below the vertex",
          "its distance to the nearest leaf",
          "always at most the height of its subtree"
        ],
        answer: 0,
        explanation: "Depth counts edges upward: the root has depth 0, its children depth 1, and so on. Option B defines the height of the vertex; options C and D mix up the two directions — height looks down, depth looks up."
      },
      {
        q: "A forest has 20 vertices and 5 connected components. Its number of edges is:",
        options: [
          "25",
          "20",
          "15",
          "16"
        ],
        answer: 2,
        explanation: "Forest formula: $|E| = |V| - k = 20 - 5 = 15$. Each of the 5 trees contributes $|V_i| - 1$ edges, and the five $-1$'s are the discount — components, not vertices, absorb the subtraction."
      },
      {
        q: "Adding one new edge between two non-adjacent vertices of a tree:",
        options: [
          "leaves it a tree with one more edge",
          "creates exactly one cycle",
          "creates two cycles, one in each direction",
          "disconnects the tree if the edge is badly chosen"
        ],
        answer: 1,
        explanation: "The unique simple path between the two endpoints plus the new edge forms exactly one cycle — characterization (6) read forward. Deleting any single edge of that new cycle restores a tree, which is the basis of the MST exchange argument."
      }
    ]
  }
]
