import type { SectionContent } from '../library'

// ============================================================================
// Rosen, Discrete Mathematics and Its Applications, 8th Edition
// Chapter 2: Basic Structures — Sets, Functions, Sequences, Sums, Matrices
// (Sections 2.1 – 2.6) Master study content.
// ============================================================================

export const ch2Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: "rosen-ch2-s1",
    depth: [
      {
        tier: "masters",
        title: "Naive sets are not enough: Russell's paradox and the ZFC repair",
        blocks: [
          {
            kind: "para",
            body: "Rosen's definition — a set is an unordered collection of distinct objects, decided element by element — is **naive set theory**: any property you can state carves out a set. Frege's Grundgesetze (1893) made this the **unrestricted comprehension axiom**: for every predicate $P(x)$ there is a set $\\{x : P(x)\\}$. In June 1902 Russell wrote to Frege with a single question: what happens for $P(x) \\equiv x \\notin x$? Frege conceded that his foundations were destroyed — one of the most dramatic moments in the history of mathematics, and the reason every modern treatment, including the one you are reading, stands on axiomatic ground. The repair, carried out by Zermelo (1908) and refined by Fraenkel (1922), keeps the idea of comprehension but doses it: never collect everything; carve subcollections only out of sets that already exist."
          },
          {
            kind: "theorem",
            heading: "Russell's paradox",
            body: "No set contains exactly those sets that are not members of themselves. Consequently there is no universal set — no set $U$ with $x \\in U$ for every set $x$ — so \"the set of everything\" is not merely false but unavailable to coherent thought. The theorem is provable in the weakest reasonable systems; its lesson is that the notion of set must be constrained from within."
          },
          {
            kind: "proof",
            body: "Suppose $R = \\{x : x \\notin x\\}$ were a set, and ask the single question: is $R \\in R$? Unpacking the defining property of $R$, membership holds exactly when $R$ fails its own test: $$R \\in R \\iff R \\notin R.$$ Each alternative contradicts itself, so $R$ cannot exist — and the argument used nothing but the meaning of $\\in$: no numbers, no infinity, no choice. For the second claim, if a universal set $U$ existed, then separation applied inside $U$ to the predicate $x \\notin x$ would produce $\\{x \\in U : x \\notin x\\}$, which (since every set would lie in $U$) is exactly the forbidden $R$, and the contradiction returns. Russell's paradox is thus a theorem-schema: any theory rich enough to form this collection is inconsistent, and the axioms below are engineered precisely to prevent its formation."
          },
          {
            kind: "para",
            body: "The axioms of **ZFC** — Zermelo–Fraenkel set theory with Choice — are the following. **Extensionality**: $\\forall x \\forall y\\, (\\forall z\\, (z \\in x \\leftrightarrow z \\in y) \\to x = y)$. **Empty set**: some set has no members. **Pairing**: for any $a, b$ the set $\\{a, b\\}$ exists. **Union**: for any set $A$ so does $\\bigcup A = \\{x : x \\in y \\text{ for some } y \\in A\\}$. **Power set**: for any set $A$ so does $\\mathcal{P}(A) = \\{x : x \\subseteq A\\}$. **Infinity**: some set contains $\\emptyset$ and is closed under $x \\mapsto x \\cup \\{x\\}$ — this is where $\\mathbb{N}$ comes from. **Separation**: for each predicate $\\varphi$ and set $A$, the subcollection $\\{x \\in A : \\varphi(x)\\}$ is a set — comprehension relativized to a set already built, the precise repair of Russell's wound. **Replacement**: the image of a set under a definable class function is again a set. **Foundation**: every nonempty set has an $\\in$-minimal member. **Choice**: every family of nonempty sets admits a choice function. Everything in this chapter — power sets, Cartesian products, the number systems — becomes a theorem derivable from this list rather than an act of faith."
          },
          {
            kind: "example",
            heading: "The cumulative hierarchy by hand",
            body: "Build the universe from nothing: set $V_0 = \\emptyset$, $V_{\\alpha+1} = \\mathcal{P}(V_\\alpha)$, and $V_\\lambda = \\bigcup_{\\alpha < \\lambda} V_\\alpha$ for limit ordinals $\\lambda$. Then $V_1 = \\{\\emptyset\\}$, $V_2 = \\{\\emptyset, \\{\\emptyset\\}\\}$, $|V_3| = 4$, $|V_4| = 16$, $|V_5| = 65536$, and $|V_6| = 2^{65536}$ — the **von Neumann universe** grows by iterating nothing but the power set of this section through all ordinals. The **rank** of a set is defined by recursion on membership, $\\operatorname{rank}(x) = \\sup \\{\\operatorname{rank}(y) + 1 : y \\in x\\}$, so $\\operatorname{rank}(\\emptyset) = 0$ and $\\operatorname{rank}(\\{\\{\\emptyset\\}\\}) = 2$; the axiom of foundation is equivalent to the assertion that every set has a rank, that is, that $V = \\bigcup_\\alpha V_\\alpha$. The natural numbers ride along as the **von Neumann ordinals** $0 = \\emptyset$ and $n + 1 = n \\cup \\{n\\}$, with the set of all of them supplied by the axiom of infinity. Every set you will ever meet lives at some stage of this one construction."
          },
          {
            kind: "remark",
            body: "The paradox forces a triage among **elements, subsets, and classes**. Elements are the members of a set: $\\emptyset \\in \\{\\emptyset\\}$, and that is all. Subsets are themselves sets that happen to sit inside another: $\\{\\emptyset\\} \\subseteq \\{\\emptyset, \\{\\emptyset\\}\\}$. Classes are collections specified by predicates that may be too big to be sets: the class of all sets, the class $\\mathbf{ON}$ of all ordinals — collecting all of the latter reproduces the Russell phenomenon (the Burali–Forti paradox), so these remain **proper classes**, never completed totalities. Foundation, by forbidding infinite descending membership chains, quietly settles the barbershop question $x \\in x$: never, for any set."
          }
        ]
      },
      {
        tier: "phd",
        title: "The independent continuum: Gödel, Cohen, and the large cardinals",
        blocks: [
          {
            kind: "para",
            body: "The deepest facts about these axioms concern what they cannot decide. Gödel (1938) built the **constructible universe** $L$: rerun the hierarchy of the master tier using only definable subsets, $L_0 = \\emptyset$ and $L_{\\alpha+1} = \\operatorname{Def}(L_\\alpha)$, the collection of sets first-order definable over $L_\\alpha$. Inside $L$ everything is pinned down by syntax, and Gödel proved the relative consistency $$\\operatorname{Con}(\\mathrm{ZF}) \\implies \\operatorname{Con}(\\mathrm{ZFC} + \\mathrm{GCH}),$$ so the **continuum hypothesis** — Cantor's question, whether every uncountable set of reals has size $2^{\\aleph_0}$, that is whether $2^{\\aleph_0} = \\aleph_1$ — can never be refuted from the axioms. This was the first great application of model theory to the foundations of mathematics, and the reason Gödel's name is attached to both incompleteness and the fine structure of definability."
          },
          {
            kind: "para",
            body: "Cohen (1963) built the mirror image. **Forcing** starts inside a countable transitive model and adjoins a **generic** object $G$, engineered to force chosen properties on the extension; a forcing relation $p \\Vdash \\varphi$ lets one prove theorems about the extension from inside the ground model. Adding $\\aleph_2$ Cohen reals yields a model of $\\mathrm{ZFC} + \\neg\\mathrm{CH}$, so $$\\operatorname{Con}(\\mathrm{ZF}) \\implies \\operatorname{Con}(\\mathrm{ZFC} + \\neg \\mathrm{CH}).$$ Together: **the continuum hypothesis is independent of ZFC** (assuming ZF consistent) — the first naturally posed mathematical question proved undecidable from the standard axioms, and the reason Cohen joined Gödel in the logicians' pantheon (Fields Medal 1966). Forcing is now a general technology for building universes to order: Easton (1970) showed that on regular cardinals the continuum function is almost arbitrary, so the continuum may consistently be $\\aleph_1$, $\\aleph_2$, or $\\aleph_{17}$ — independence is a landscape of universes, not a single anomaly."
          },
          {
            kind: "para",
            body: "Choice deserves its own audit. In **ZF alone** the following are equivalent, and none is provable: the axiom of choice; **Zorn's lemma** (every partially ordered set in which every chain has an upper bound has a maximal element) — the working mathematician's favorite compactness argument; the **well-ordering theorem** (every set admits a well-order, so every cardinality is an $\\aleph$); the Hausdorff maximal principle; and the statement that every vector space has a basis, with the converse direction due to Blass (1984). The price of Choice is pathology. **Banach–Tarski (1924)**: a solid ball in $\\mathbb{R}^3$ splits into five pieces that rigid motions reassemble into two balls of the original size; the pieces are non-measurable sets whose existence is unprovable without Choice. The paradox fails in the plane — the plane's rotation group is amenable, in von Neumann's sense, and amenability forbids such decompositions — yet Choice still buys the geometric miracle of Laczkovich (1990): a circle dissected into finitely many pieces and reassembled, by translations alone, into a square of equal area."
          },
          {
            kind: "open",
            heading: "Large cardinals and the HOD conjecture",
            body: "Beyond the infinities ZFC can certify stretches the **large cardinal hierarchy**: inaccessible, Mahlo, weakly compact, indescribable, **measurable** (Ulam 1930: a cardinal carrying a nontrivial countably complete ultrafilter), strong, Woodin, supercompact, extendible — each axiom asserting an infinity so vast that it implies the consistency of the whole theory below it, so that none can be proved consistent relative to ZFC if ZFC itself is consistent. Why believe them? Because they decide exactly what ZFC cannot: the regularity properties of sets of reals (Section 2.5's research tier) and the fine structure of $L(\\mathbb{R})$. The central open problem of the field, the **inner model problem**, asks for a canonical inner model, like Gödel's $L$ but rich enough, that can host a supercompact cardinal; Mitchell and Steel got as far as Woodin cardinals. Woodin's **HOD conjecture** asserts that the hereditarily ordinal-definable sets form such a model — that the universe $V$ is provably close to its definable core. Whether the conjecture holds, and what that would settle about the continuum, is open."
          }
        ]
      }
    ],
    readingTime: 8,
    intro: "Sets are the raw material of all of mathematics — every structure in this book (relations, graphs, languages, probability spaces) is built from them. This section covers the notation, subsets, power sets and Cartesian products, ending with the truth-set bridge back to the predicates of Chapter 1.",
    objectives: [
      "Use roster and set-builder notation and translate between them",
      "Determine subset and equality relationships between sets",
      "Compute power sets and Cartesian products",
      "Work fluently with the standard number sets N, Z, Z⁺, Q, R",
      "Connect predicates to their truth sets"
    ],
    concepts: [
      {
        term: "Sets and membership",
        kind: "definition",
        statement: "A **set** is an unordered collection of distinct objects, called **elements** or members. We write a ∈ A if a is an element of A and a ∉ A otherwise. Two sets are equal iff they have exactly the same elements (**axiom of extensionality**).",
        detail: "Order and repetition are irrelevant: {1, 2, 3} = {3, 1, 2, 1}, and both have three elements. Contrast with sequences, where order and repetition matter (Section 2.4)."
      },
      {
        term: "Roster and set-builder notation",
        kind: "notation",
        statement: "The **roster method** lists elements between braces: {a, e, i, o, u}. **Set-builder notation** specifies membership by a predicate: {x | x is an integer and 0 < x < 5} = {1, 2, 3, 4}, often written {x ∈ Z | 0 < x < 5}.",
        detail: "Set-builder is essential when a set is infinite or has no simple pattern: the set of solutions, the set of primes, the domain of a variable. A variant with two rules is common: {3k | k ∈ Z, 0 ≤ k ≤ 3} = {0, 3, 6, 9}."
      },
      {
        term: "The standard number sets",
        kind: "definition",
        statement: "**N** = {0, 1, 2, …} (nonnegative integers), **Z** = {…, −2, −1, 0, 1, 2, …}, **Z⁺** = {1, 2, 3, …}, **Q** = {p/q | p ∈ Z, q ∈ Z, q ≠ 0} (rationals), **R** (reals), **R⁺** (positive reals).",
        detail: "Rosen takes N to include 0; some other books start N at 1 — always check the convention. Note Z⁺ ⊂ Z ⊂ Q ⊂ R, and each inclusion is proper."
      },
      {
        term: "Subsets, proper subsets, equality",
        kind: "definition",
        statement: "A ⊆ B iff every element of A is an element of B: ∀x (x ∈ A → x ∈ B). A is a **proper subset** of B (A ⊂ B) when A ⊆ B and A ≠ B. Consequently A = B iff A ⊆ B and B ⊆ A.",
        detail: "The two-inclusion characterization is the standard proof template for set equality (Section 2.2 uses it constantly). A circle for A inside a circle for B — a Venn diagram — visualizes but does not prove."
      },
      {
        term: "The empty set and singletons",
        kind: "definition",
        statement: "The **empty set** ∅ = { } contains no elements; it is a subset of every set. A **singleton** is a set with exactly one element.",
        detail: "Beware the type distinction: ∅ is a set with no elements, while {∅} is a singleton whose one element happens to be the empty set — so ∅ ∈ {∅} but ∅ ∈ ∅ is false. Nothing is an element of ∅."
      },
      {
        term: "Cardinality of finite sets",
        kind: "definition",
        statement: "If A has exactly n distinct elements for some nonnegative integer n, then A is **finite** and |A| = n. A set that is not finite is **infinite**.",
        detail: "Counting distinct elements only: |{1, 1, 2}| = 2. Infinite cardinalities — the shocking discovery that some infinities outweigh others — are the subject of Section 2.5."
      },
      {
        term: "Power set",
        kind: "definition",
        statement: "The **power set** of A is the set of all subsets of A: P(A) = {S | S ⊆ A}. If |A| = n then |P(A)| = 2ⁿ.",
        detail: "P({0, 1}) = {∅, {0}, {1}, {0,1}} — four subsets. Doubling rule: each subset either contains or omits each element, and adding one element doubles the count. P(∅) = {∅}, and ∅ ⊆ A always gives ∅ ∈ P(A)."
      },
      {
        term: "Cartesian product",
        kind: "definition",
        statement: "The **Cartesian product** A × B = {(a, b) | a ∈ A ∧ b ∈ B} is the set of all ordered pairs with first component in A and second in B. Ordered pairs satisfy (a, b) = (c, d) iff a = c and b = d; |A × B| = |A|·|B|. Write A² = A × A.",
        detail: "Order matters twice over: the pair (1, 2) ≠ (2, 1), and generally A × B ≠ B × A. The plane of analytic geometry is R × R. Products extend to k factors: A₁ × … × Aₖ consists of ordered k-tuples."
      },
      {
        term: "Truth sets of predicates",
        kind: "definition",
        statement: "The **truth set** of a predicate P over domain D is {x ∈ D | P(x)}. Then ∀x P(x) is true iff the truth set equals D, and ∃x P(x) is true iff the truth set is nonempty.",
        detail: "Truth sets turn quantifier questions into subset questions — e.g., P(x): “x² > 4” over D = {1, 2, 3, 4} has truth set {3, 4}, so ∀x P(x) is false but ∃x P(x) is true. This is the precise bridge between Chapters 1 and 2."
      }
    ],
    examples: [
      {
        title: "Roster and set-builder, both ways",
        problem: "List the elements of {x ∈ Z⁺ | x² < 30}, and describe the set {−4, −1, 4, 9, 16} in set-builder notation.",
        steps: [
          { label: "Step 1: Test positive integers in increasing order", text: "1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25 — all under 30; but 6² = 36 fails, and squares only grow after that." },
          { label: "Step 2: Read off the roster", text: "{1, 2, 3, 4, 5}." },
          { label: "Step 3: Find the pattern in the second set", text: "The listed numbers are −4 together with perfect squares of small integers — but −4 is not a square, so it must enter the condition separately." },
          { label: "Step 4: Write the builder form", text: "{x | x = n² for some n ∈ Z⁺ with n ≤ 4, or x = −4}." }
        ],
        result: "{1, 2, 3, 4, 5} and a conditional description capturing exactly the five listed elements. Set-builder is not unique — many correct descriptions exist."
      },
      {
        title: "Computing a power set",
        problem: "Find P({0, 1, 2}) and its cardinality.",
        steps: [
          { label: "Step 1: Group subsets by size", text: "Size 0: ∅. Size 1: {0}, {1}, {2}. Size 2: {0,1}, {0,2}, {1,2}. Size 3: {0,1,2}." },
          { label: "Step 2: Assemble", text: "P({0,1,2}) = {∅, {0}, {1}, {2}, {0,1}, {0,2}, {1,2}, {0,1,2}}." },
          { label: "Step 3: Count and confirm the formula", text: "The subsets number $1 + 3 + 3 + 1 = 8 = 2^{3} = 2^{|A|}$." }
        ],
        result: "P({0,1,2}) has 8 elements, matching |P(A)| = 2ⁿ. Note that {0,1,2} itself is an element of its power set, and ∅ always is."
      },
      {
        title: "Cartesian products",
        problem: "With A = {1, 2} and B = {a, b, c}, list A × B, count its elements, and show A × B ≠ B × A.",
        steps: [
          { label: "Step 1: Pair each element of A with everything in B", text: "A × B = {(1,a), (1,b), (1,c), (2,a), (2,b), (2,c)}." },
          { label: "Step 2: Count", text: "|A × B| = 2 · 3 = 6, matching |A|·|B|." },
          { label: "Step 3: Compute the reverse product", text: "B × A = {(a,1), (a,2), (b,1), (b,2), (c,1), (c,2)}." },
          { label: "Step 4: Compare", text: "Every element of A × B has a number first; every element of B × A has a letter first — the sets share no elements at all." }
        ],
        result: "A × B ≠ B × A (in fact they are disjoint here): Cartesian product is not commutative, although the two always have the same cardinality."
      }
    ],
    keyTakeaways: [
      "A set is determined entirely by its elements — order and repetition do not matter.",
      "A = B iff A ⊆ B and B ⊆ A; that two-inclusion argument is the master template for set-equality proofs.",
      "∅ is a subset of every set and an element of every power set; ∅ ≠ {∅}.",
      "The power set of an n-element set has 2ⁿ elements.",
      "A × B collects ordered pairs; |A × B| = |A||B|, and A × B ≠ B × A in general.",
      "Truth sets translate quantified statements into set language: ∀ over D means the truth set is all of D."
    ],
    quiz: [
      {
        q: "The set {x ∈ Z | x² = 4} equals:",
        options: ["{2}", "{−2, 2}", "{4}", "∅"],
        answer: 1,
        explanation: "Both 2 and −2 square to 4 over the integers, so the set has two elements. Forgetting the negative root is the classic error here."
      },
      {
        q: "|P({a, b, c})| =",
        options: ["3", "6", "8", "9"],
        answer: 2,
        explanation: "A 3-element set has 2³ = 8 subsets: ∅, three singletons, three pairs, and the whole set — each element is either in or out of a subset, giving 2 · 2 · 2 choices."
      },
      {
        q: "If |A| = 3 and |B| = 4, then |A × B| =",
        options: ["7", "12", "64", "81"],
        answer: 1,
        explanation: "The Cartesian product's cardinality is the product of the cardinalities: 3 · 4 = 12 ordered pairs."
      },
      {
        q: "Which statement is always true?",
        options: ["∅ ∈ A for every set A", "∅ ⊆ A for every set A", "{∅} = ∅", "∅ ∈ ∅"],
        answer: 1,
        explanation: "The empty set is a subset of everything vacuously: there is no element of ∅ that fails to be in A. But ∅ is an *element* of A only when A happens to contain it ({1} does not), {∅} has one element while ∅ has none, and nothing is an element of ∅."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.2
  {
    sectionId: "rosen-ch2-s2",
    depth: [
      {
        tier: "masters",
        title: "The algebra of sets as a Boolean algebra — proofs, duality, counting",
        blocks: [
          {
            kind: "theorem",
            heading: "De Morgan's laws for indexed families",
            body: "For any family $\\{A_i\\}_{i \\in I}$ of subsets of a universal set $U$ — the index set may be finite, countably infinite, or enormous — $$\\overline{\\bigcup_{i \\in I} A_i} = \\bigcap_{i \\in I} \\overline{A_i} \\quad \\text{and} \\quad \\overline{\\bigcap_{i \\in I} A_i} = \\bigcup_{i \\in I} \\overline{A_i}.$$ The two-set identities of this section are the case of a two-element index set; the countable case is what makes the complement rules of probability work for events; the general statement is the correct one, and its proof is the master template for every identity in the algebra of sets."
          },
          {
            kind: "proof",
            body: "Fix an element $x$ of $U$ and chase it through the definitions. For the first law: $$x \\in \\overline{\\bigcup_i A_i} \\iff \\neg\\, \\exists i \\in I\\, (x \\in A_i) \\iff \\forall i \\in I\\, (x \\notin A_i) \\iff \\forall i \\in I\\, (x \\in \\overline{A_i}) \\iff x \\in \\bigcap_i \\overline{A_i}.$$ The second step is precisely the quantifier De Morgan law of Chapter 1, $\\neg\\exists = \\forall\\neg$; the third merely unfolds the definition of complement; the outer steps unfold union and intersection. Since every step is an equivalence, the two sets have exactly the same members and are equal by extensionality — no Venn diagram was consulted, and none could have carried the infinite case. The second law follows by applying the first to the family of complements $\\{\\overline{A_i}\\}_{i \\in I}$ and complementing both sides, using $\\overline{\\overline{A}} = A$; or directly by the symmetric chain of equivalences. The moral: a set identity reduces pointwise to a propositional equivalence, one element at a time — logic is the engine, sets the machinery."
          },
          {
            kind: "derivation",
            heading: "The characteristic-function calculus",
            body: "Fix a finite universal set $U$ and encode each $A \\subseteq U$ by its **characteristic function** $\\chi_A : U \\to \\{0, 1\\}$ — the bit string of this section, in functional dress. The operations become pointwise arithmetic: $$\\chi_{A \\cap B} = \\chi_A \\cdot \\chi_B, \\qquad \\chi_{A \\cup B} = \\max(\\chi_A, \\chi_B), \\qquad \\chi_{\\overline{A}} = 1 - \\chi_A,$$ and each identity is verified by checking the two possible values at each point. De Morgan's law, for example, becomes the arithmetic identity $$1 - \\max(a, b) = \\min(1 - a, 1 - b)$$ evaluated at $a = \\chi_A(x)$, $b = \\chi_B(x)$. For families, $\\chi_{\\bigcup_i A_i} = \\sup_i \\chi_{A_i}$ and $\\chi_{\\bigcap_i A_i} = \\inf_i \\chi_{A_i}$, so arbitrary unions and intersections are suprema and infima of zero-one-valued functions. The payoff is counting: $|A| = \\sum_{x \\in U} \\chi_A(x)$, and applying this to $\\chi_{A \\cup B} = \\chi_A + \\chi_B - \\chi_{A \\cap B}$ yields **inclusion–exclusion**, $$|A \\cup B| = |A| + |B| - |A \\cap B|,$$ with the three-set formula $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$ beginning the $n$-set sieve, whose $2^n$ terms alternate signs exactly as the characteristic-function expansion dictates."
          },
          {
            kind: "theorem",
            heading: "The algebra of sets is a Boolean algebra",
            body: "The structure $\\big(\\mathcal{P}(U), \\cup, \\cap, \\overline{\\cdot}\\big)$, with constants $\\emptyset$ and $U$, is a **Boolean algebra** in the sense of Huntington (1904): the operations are commutative and associative, each distributes over the other, $\\emptyset$ and $U$ act as identities for $\\cup$ and $\\cap$, and every element satisfies $A \\cup \\overline{A} = U$ and $A \\cap \\overline{A} = \\emptyset$. Moreover, for each $n$, the set terms in variables $A_1, \\ldots, A_n$, quotiented by the identities that hold in every Boolean algebra, form the **free Boolean algebra** on $n$ generators, and the dictionary $\\vee \\mapsto \\cup$, $\\wedge \\mapsto \\cap$, $\\neg \\mapsto$ complement sends propositional tautologies exactly to set identities: the two theories are one algebra wearing two notations."
          },
          {
            kind: "proof",
            body: "Huntington's axioms fall to the element argument: for the distributive law, $x \\in A \\cap (B \\cup C)$ iff $x \\in A \\wedge (x \\in B \\vee x \\in C)$ iff $(x \\in A \\wedge x \\in B) \\vee (x \\in A \\wedge x \\in C)$ iff $x \\in (A \\cap B) \\cup (A \\cap C)$, by the distributive equivalence of Chapter 1 — and every other axiom similarly collapses to a propositional law evaluated at the single point $x$. For the freeness claim, form the $2^n$ **atoms** $B_\\varepsilon = A_1^{\\varepsilon_1} \\cap \\cdots \\cap A_n^{\\varepsilon_n}$, where $A^1 = A$ and $A^0 = \\overline{A}$: the nonempty ones partition $U$, and every set term evaluates to exactly the union of the atoms it contains, so a term's behavior is a function from the $2^n$ atoms to 'in or out' — a truth table. Sending a term to the set of satisfying valuations is therefore an isomorphism from the term algebra onto the algebra of unions of atoms, and a set identity holds for all sets iff the corresponding formula is a tautology. This is why Rosen's table of set identities and the Chapter 1 table of equivalences are, row for row, the same table."
          },
          {
            kind: "remark",
            body: "Complement is an order-reversing involution that conjugates union with intersection — that is exactly what $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ says. It follows that any identity built from $\\cup$, $\\cap$, complements, $\\emptyset$ and $U$ may be flipped — swap $\\cup$ with $\\cap$ and $\\emptyset$ with $U$ — and the result is again an identity: the **duality principle** of Boolean algebra. Absorption $A \\cup (A \\cap B) = A$ dualizes to $A \\cap (A \\cup B) = A$; the identity laws dualize to the domination laws; De Morgan is self-dual. Duality is not a coincidence among examples but an automorphism of the whole theory — proofs transport along it — and it is the combinatorial shadow of the Stone duality awaiting in the research tier."
          }
        ]
      },
      {
        tier: "phd",
        title: "Stone duality, ultrafilters, and the Boolean frontier",
        blocks: [
          {
            kind: "para",
            body: "Is the algebra of sets merely an example of a Boolean algebra, or is it the example? **Stone's representation theorem (1936)**: every Boolean algebra embeds into the power-set algebra of the set of its **ultrafilters** — its maximal consistent verdicts — via $b \\mapsto \\{U : b \\in U\\}$. Every Boolean algebra is therefore an algebra of sets; the set-based picture of this section is not one option among many but the universal form. Stone went further and topologized: declaring those sets clopen yields a **Stone space** — compact, Hausdorff, with a base of clopen sets — and the correspondence sharpens into a full **duality** between Boolean algebras and Stone spaces, with homomorphisms paired to continuous maps in the reverse direction. This template — algebra dual to topology — became the organizing principle of modern analysis (Gelfand duality for commutative C*-algebras, Pontryagin duality for locally compact abelian groups) and is the reason the master tier could unify propositional logic and set algebra in a single structure."
          },
          {
            kind: "remark",
            body: "An ultrafilter on $\\mathbb{N}$ is a coherent voting rule: a collection of subsets closed under intersection and supersets, never containing both a set and its complement, always containing one of them, and — for a **nonprincipal** ultrafilter — never containing a finite set. The principal ultrafilters $\\{A : n \\in A\\}$ are explicit and boring; a nonprincipal one is guaranteed by the ultrafilter lemma, a weak form of Choice, and provably no example can be explicitly defined: it is a genuinely nonconstructive object, invisible in ZF. Quotient the sequences of reals by the agreement relation $\\{n : a_n = b_n\\} \\in U$, and Łoś's theorem (1955) makes the **ultrapower** $\\mathbb{R}^{\\mathbb{N}}/U$ an elementary extension of the reals in which the class of $(1, 1/2, 1/3, \\ldots)$ is a positive **infinitesimal** and that of $(1, 2, 3, \\ldots)$ is infinite — Abraham Robinson's **nonstandard analysis** (1960s), where Leibniz's discarded infinitesimals become honest numbers and the epsilons and deltas of calculus are re-derived by algebra."
          },
          {
            kind: "application",
            heading: "From De Morgan to silicon",
            body: "The billion-variable Boolean algebras of hardware verification are this section's algebra at industrial scale. A **binary decision diagram** (Bryant 1986) represents a Boolean function — equivalently, the set of its satisfying bit strings, an element of $\\{0,1\\}^n$ — as a directed acyclic graph of tests with aggressive sharing and a fixed variable order; on the canonical form, union, intersection and complement become linear-time graph algorithms, and equivalence checking collapses to isomorphism testing. Equivalence checkers and model checkers for processor designs manipulate such set algebra with millions of variables daily — every chip you own was verified by De Morgan's laws running at scale. **SAT solvers** search the atoms of the free Boolean algebra directly, and modern conflict-driven clause-learning solvers routinely discharge verification conditions with hundreds of thousands of variables. What began as chalkboard identities between unions and complements is now a load-bearing component of the world's semiconductor supply chain — and, of course, of the database engines whose bit-string set operations this section already exhibited."
          },
          {
            kind: "open",
            heading: "The circuit lower bound gap",
            body: "Counting (Shannon 1949) shows that almost every Boolean function of $n$ variables requires circuits of size about $2^n/n$: the functions with small circuits form a vanishing fraction. Yet no explicitly describable function is proved to require more than about $3n$ gates — the current record being $(3 + 1/86)n$ for a suitable function family (Find, Golovnev, Hirsch and Kulikov). The chasm between 'almost all' and 'any explicit one' is among the widest known in mathematics, and it guards the central castle of complexity theory: a super-polynomial lower bound for an explicit Boolean function would separate $\\mathrm{P}$ from any circuit class containing it. The one modern breach of the wall is Williams's **algorithmic method** (2010): a sufficiently-faster-than-trivial algorithm for analyzing the circuits of a class implies a lower bound against that class, and the technique delivered the breakthrough $\\mathrm{NEXP} \\not\\subseteq \\mathrm{ACC}^0$. Open: extend the method to $\\mathrm{NP}$ — or even prove an explicit $4n$ lower bound for unrestricted circuits."
          }
        ]
      }
    ],
    readingTime: 9,
    intro: "Sets become a working algebra once you can combine them: unions, intersections, differences, complements — and the identities they satisfy, which mirror propositional logic almost perfectly. This section also reveals how computers actually store sets: as bit strings, so that set operations become single CPU instructions.",
    objectives: [
      "Perform union, intersection, difference, complement and symmetric difference on concrete sets",
      "State and use the set identity laws, especially De Morgan's",
      "Prove set identities by element arguments, membership tables, or propositional equivalence",
      "Represent sets as bit strings and compute operations bitwise"
    ],
    concepts: [
      {
        term: "Union and intersection",
        kind: "definition",
        statement: "A ∪ B = {x | x ∈ A ∨ x ∈ B} (elements in **at least one**), and A ∩ B = {x | x ∈ A ∧ x ∈ B} (elements in **both**). Sets A and B are **disjoint** when A ∩ B = ∅. Both operations extend to collections: ⋃ₖ Aₖ and ⋂ₖ Aₖ.",
        detail: "Union and intersection are commutative, associative, and distribute over each other. The union of a countable family A₁, A₂, … is {x | x ∈ Aₖ for some k} — the natural home of infinite collections."
      },
      {
        term: "Complement and difference",
        kind: "definition",
        statement: "With respect to a **universal set** U, the complement of A is Ā = U − A = {x ∈ U | x ∉ A}. The **difference** A − B = {x | x ∈ A ∧ x ∉ B} = A ∩ B̄.",
        detail: "Every complement is relative to an understood universe (integers, reals, bit positions…). Difference is “take away”: {1, 2, 3} − {3, 4} = {1, 2}, while {3, 4} − {1, 2, 3} = {4} — not symmetric."
      },
      {
        term: "Symmetric difference",
        kind: "definition",
        statement: "The **symmetric difference** A ⊕ B = (A ∪ B) − (A ∩ B) = {x | x belongs to exactly one of A and B}.",
        detail: "It is the set version of exclusive or: (x ∈ A) ⊕ (x ∈ B). With A = {1, 2, 3} and B = {3, 4}: A ⊕ B = {1, 2, 4}. Identity: A ⊕ A = ∅ and A ⊕ ∅ = A."
      },
      {
        term: "The set identities",
        kind: "law",
        statement: "Identity: A ∪ ∅ = A, A ∩ U = A. Domination: A ∪ U = U, A ∩ ∅ = ∅. Idempotent: A ∪ A = A, A ∩ A = A. Complementation: the complement of Ā is A. Commutative and associative laws for ∪ and ∩. Distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) and A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C). **De Morgan**: the complement of A ∪ B is Ā ∩ B̄, and the complement of A ∩ B is Ā ∪ B̄. Absorption: A ∪ (A ∩ B) = A, A ∩ (A ∪ B) = A.",
        detail: "Every one mirrors a propositional equivalence with ∪ ↔ ∨, ∩ ↔ ∧, complement ↔ ¬ — you can literally translate proofs between the two worlds. This is why Chapter 1 work pays off here."
      },
      {
        term: "Proving set identities",
        kind: "method",
        statement: "Three routes: **(1) element argument** — show each side is a subset of the other by chasing elements through the definitions; **(2) membership tables** — a truth table over “x ∈ A / x ∉ A” columns; **(3) translation** — convert to the corresponding propositional equivalence and cite Chapter 1.",
        detail: "The element argument is the gold standard (it uses only the definitions). To prove A = B: take any x ∈ A, show x ∈ B (so A ⊆ B), then take any x ∈ B and show x ∈ A (so B ⊆ A)."
      },
      {
        term: "Membership tables",
        kind: "method",
        statement: "A membership table has one column per set (A, B, C, …) whose rows run through all combinations of x ∈ / x ∉, plus columns for each side of the claimed identity; the identity holds iff the two sides' columns agree on every row.",
        detail: "With two sets there are 4 rows, with three sets 8 — the same doubling behavior as truth tables. Like truth tables, they are verification, not intuition."
      },
      {
        term: "Venn diagrams",
        kind: "insight",
        statement: "A Venn diagram draws U as a rectangle with overlapping circles for the sets; shaded regions depict the result of an operation. They are excellent for intuition and counterexamples, but a drawing is not a proof.",
        detail: "Use Venn diagrams to *find* an identity or to *refute* one by exhibiting a membership pattern where the two sides differ — then confirm with a real argument."
      },
      {
        term: "Computer representation with bit strings",
        kind: "method",
        statement: "Fix an ordered universe U = {a₁, a₂, …, aₙ}. Represent A by its **characteristic bit string** of length n, where bit i is 1 iff aᵢ ∈ A. Then: A ∪ B = bitwise OR, A ∩ B = bitwise AND, Ā = bitwise complement (flip every bit), A ⊕ B = bitwise XOR.",
        detail: "Example with U = {1, 2, 3, 4, 5, 6}: A = {1, 2, 4} ↦ 110100, B = {2, 3, 6} ↦ 011001, so A ∩ B ↦ 010000 = {2}. This is exactly how databases and languages like Pascal and Python implement sets — and the reason set operations are so fast in hardware."
      }
    ],
    figures: [
      {
        caption: "The four basic set operations as Venn-diagram shadings — each rounded panel plays the universal set $U$, and the two circles are $A$ and $B$. Top row: $A \\cup B$ (either circle, lens included) and $A \\cap B$ (the lens alone). Bottom row: $A - B$ (the left crescent) and the symmetric difference $A \\oplus B = (A \\cup B) - (A \\cap B)$ (both crescents — membership in exactly one of the sets). The unshaded remainder of a panel is the complement of the shaded set — and these four pictures are what bit strings compute with single bitwise instructions: $A \\cup B$ is OR, $A \\cap B$ is AND, $A - B$ is AND with the complement, and $A \\oplus B$ is XOR.",
        svg: '<svg viewBox="0 0 720 388" width="100%" role="img" aria-label="Four Venn diagrams of two overlapping sets A and B showing union, intersection, difference and symmetric difference"><rect x="20" y="16" width="330" height="170" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><path d="M184,34.5 A54,54 0 1 0 184,121.5 A54,54 0 1 0 184,34.5 Z" fill="currentColor" fill-opacity="0.15"/><circle cx="152" cy="78" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="216" cy="78" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="127" y="82" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">A</text><text x="241" y="82" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">B</text><text x="185" y="168" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">A ∪ B</text><rect x="370" y="16" width="330" height="170" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><path d="M534,34.5 A54,54 0 0 1 534,121.5 A54,54 0 0 1 534,34.5 Z" fill="currentColor" fill-opacity="0.15"/><circle cx="502" cy="78" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="566" cy="78" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="477" y="82" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">A</text><text x="591" y="82" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">B</text><text x="535" y="168" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">A ∩ B</text><rect x="20" y="202" width="330" height="170" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><path d="M184,220.5 A54,54 0 1 0 184,307.5 A54,54 0 0 1 184,220.5 Z" fill="currentColor" fill-opacity="0.15"/><circle cx="152" cy="264" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="216" cy="264" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="127" y="268" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">A</text><text x="241" y="268" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">B</text><text x="185" y="354" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">A − B</text><rect x="370" y="202" width="330" height="170" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><path d="M534,220.5 A54,54 0 1 0 534,307.5 A54,54 0 0 1 534,220.5 Z" fill="currentColor" fill-opacity="0.15"/><path d="M534,220.5 A54,54 0 1 1 534,307.5 A54,54 0 0 0 534,220.5 Z" fill="currentColor" fill-opacity="0.15"/><circle cx="502" cy="264" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="566" cy="264" r="54" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="477" y="268" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">A</text><text x="591" y="268" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">B</text><text x="535" y="354" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="700">A ⊕ B</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Computing with concrete sets",
        problem: "With U = {0, 1, 2, 3, 4, 5, 6, 7}, A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, compute A ∪ B, A ∩ B, A − B, B − A, A ⊕ B and Ā.",
        steps: [
          { label: "Step 1: Union", text: "Everything appearing anywhere: A ∪ B = {1, 2, 3, 4, 5, 6}." },
          { label: "Step 2: Intersection", text: "Only the shared elements: A ∩ B = {3, 4}." },
          { label: "Step 3: Differences", text: "A − B = {1, 2} (remove B's elements from A); B − A = {5, 6}." },
          { label: "Step 4: Symmetric difference", text: "A ⊕ B = (A ∪ B) − (A ∩ B) = {1, 2, 5, 6} — exactly one of the two sets." },
          { label: "Step 5: Complement", text: "Everything in U outside A: Ā = {0, 5, 6, 7}." }
        ],
        result: "Nine operations from the definitions; note A − B ≠ B − A, and A ⊕ B = (A − B) ∪ (B − A)."
      },
      {
        title: "Proving De Morgan's law for sets",
        problem: "Prove that the complement of A ∪ B equals Ā ∩ B̄, using the element argument.",
        steps: [
          { label: "Step 1: Show LHS ⊆ RHS", text: "Let x be in the complement of A ∪ B. Then x ∉ A ∪ B, so x ∉ A and x ∉ B — i.e., x ∈ Ā and x ∈ B̄. Hence x ∈ Ā ∩ B̄." },
          { label: "Step 2: Show RHS ⊆ LHS", text: "Let x ∈ Ā ∩ B̄. Then x ∉ A and x ∉ B, so x cannot be in A ∪ B, which means x is in the complement of A ∪ B." },
          { label: "Step 3: Conclude equality", text: "Each side is a subset of the other, so by extensionality the two sets are equal." },
          { label: "Step 4: Observe the mirror", text: "The whole argument translated ¬(p ∨ q) ≡ ¬p ∧ ¬q from propositional logic — membership style." }
        ],
        result: "The identity holds by mutual inclusion; the parallel with the logical De Morgan law is exact and is why both are called by the same name."
      },
      {
        title: "Set operations via bit strings",
        problem: "With universe U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {1, 2, 5, 7, 9} and B = {2, 4, 5, 8}, compute A ∪ B, A ∩ B and A ⊕ B using bit strings.",
        steps: [
          { label: "Step 1: Write the bit strings", text: "A ↦ 110010101 and B ↦ 010110010 (position i records membership of i)." },
          { label: "Step 2: Union = bitwise OR", text: "110010101 ∨ 010110010 = 110111111, i.e., {1, 2, 3, 4, 5, 7, 8, 9}." },
          { label: "Step 3: Intersection = bitwise AND", text: "110010101 ∧ 010110010 = 010010000, i.e., {2, 5}." },
          { label: "Step 4: Symmetric difference = bitwise XOR", text: "110010101 ⊕ 010110010 = 100100111, i.e., {1, 4, 7, 8, 9}." }
        ],
        result: "Each set operation is one bitwise instruction on the machine — the practical payoff of the bit-string representation."
      }
    ],
    keyTakeaways: [
      "A − B = A ∩ B̄; difference is directional, symmetric difference is not.",
      "The set identities (identity, domination, idempotent, commutative, associative, distributive, De Morgan, absorption) mirror the propositional equivalences exactly.",
      "Prove set equality by mutual inclusion; membership tables and Venn diagrams support but do not replace the element argument.",
      "De Morgan for sets: the complement of a union is the intersection of complements, and vice versa.",
      "Bit-string representation turns union/intersection/complement into bitwise OR/AND/flip — how computers really do set algebra.",
      "The complement is always relative to a universal set U."
    ],
    quiz: [
      {
        q: "A − B equals:",
        options: ["A ∩ B̄", "B̄ − A", "B − A", "A ∪ B̄"],
        answer: 0,
        explanation: "Removing B's elements from A keeps exactly the elements that are in A and not in B: A ∩ B̄. The reverse difference B̄ − A would also drop A's elements, which is a different set."
      },
      {
        q: "By De Morgan's laws, the complement of A ∪ B is:",
        options: ["Ā ∩ B̄", "Ā ∪ B̄", "A ∩ B", "A ∪ B"],
        answer: 0,
        explanation: "The complement of a union is the intersection of the complements: an element avoids A ∪ B exactly when it avoids both A and B. The ∪ version is the other De Morgan law (for complements of intersections)."
      },
      {
        q: "With universe {1,…,9}, A = {1,2,5,7,9} and B = {2,4,5,8}, the bit string of A ∪ B is:",
        options: ["110010101", "010010000", "110111111", "100100111"],
        answer: 2,
        explanation: "Union is bitwise OR: 110010101 ∨ 010110010 = 110111111. Option 1 is A itself, option 2 (010010000) is the AND — the intersection {2,5} — and option 3 is the XOR {1,4,7,8,9}."
      },
      {
        q: "If A ∩ B = ∅, then A and B are:",
        options: ["equal", "disjoint", "complements of each other", "each other's subsets"],
        answer: 1,
        explanation: "An empty intersection is precisely the definition of disjoint sets. They need not cover the universe (which complements would) and are certainly not equal — unless both are empty."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.3
  {
    sectionId: "rosen-ch2-s3",
    depth: [
      {
        tier: "masters",
        title: "Factorization, inverses, and the Schröder–Bernstein theorem",
        blocks: [
          {
            kind: "theorem",
            heading: "Epi–mono factorization",
            body: "Every function $f : A \\to B$ factors as $$A \\xrightarrow{\\,e\\,} f(A) \\xrightarrow{\\,m\\,} B$$ where $e(x) = f(x)$ lands in the image and $m(y) = y$ is the inclusion, so $f = m \\circ e$ with $e$ surjective and $m$ injective. Moreover $f$ is injective if and only if it is **left-cancellable** — $f \\circ g = f \\circ h$ forces $g = h$ — and surjective if and only if it is **right-cancellable** — $g \\circ f = h \\circ f$ forces $g = h$. Among all factorizations of $f$ into a surjection followed by an injection, this one is unique up to a unique commuting bijection, so the image is not a convenience but a canonical middle object."
          },
          {
            kind: "proof",
            body: "$e$ is onto $f(A)$ by the definition of the image, $m$ is injective because inclusions are, and $(m \\circ e)(x) = m(f(x)) = f(x)$. Cancellation, injectivity direction: if $f$ is one-to-one and $f(g(x)) = f(h(x))$ for every $x$, injectivity gives $g(x) = h(x)$ for every $x$, so $g = h$. Conversely, if $f$ fails injectivity, choose $a \\ne b$ with $f(a) = f(b)$, and let $g, h$ map a one-element set to $a$ and $b$; then $f \\circ g = f \\circ h$ while $g \\ne h$, so cancellation fails. Surjectivity direction: if $f$ is onto and $g(f(x)) = h(f(x))$ for all $x$, then every $y \\in B$ equals some $f(x)$, so $g$ and $h$ agree everywhere. Conversely, if $f$ misses some $y \\in B$, let $g$ be constant zero on $B$ and $h$ the indicator of $\\{y\\}$, both into $\\{0,1\\}$: they agree on the range of $f$ but differ at $y$, so $g \\circ f = h \\circ f$ with $g \\ne h$. Uniqueness: for any other factorization $A \\xrightarrow{e'} X \\xrightarrow{m'} B$, the rule $\\varphi(e(x)) = e'(x)$ is well defined because $e$ is surjective, and bijective, with $\\varphi \\circ e = e'$ and $m' \\circ \\varphi = m$; any two such $\\varphi$ agree by surjectivity of $e$."
          },
          {
            kind: "theorem",
            heading: "Inverses of bijections",
            body: "A function $f : A \\to B$ is a bijection if and only if it has a **two-sided inverse** — a $g : B \\to A$ with $g \\circ f = \\mathrm{id}_A$ and $f \\circ g = \\mathrm{id}_B$ — and this inverse is unique, written $f^{-1}$. Consequently the bijections from a set to itself form a group under composition, the **symmetric group** $S_A$, of order $n!$ when $|A| = n$; and inversion reverses composition, $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$."
          },
          {
            kind: "proof",
            body: "Existence: assume $f$ bijective. For each $y \\in B$, surjectivity supplies an $x$ with $f(x) = y$ and injectivity makes it unique, so defining $g(y)$ to be that $x$ is legitimate; unwinding the definition gives $g(f(x)) = x$ for all $x$ and $f(g(y)) = y$ for all $y$. Conversely, suppose the two-sided $g$ exists. If $f(a_1) = f(a_2)$, applying $g$ gives $a_1 = g(f(a_1)) = g(f(a_2)) = a_2$, so $f$ is injective; and every $y \\in B$ equals $f(g(y))$, so $f$ is surjective — both defining properties of a bijection are used, in both directions of the theorem. Uniqueness is the computation $$g = g \\circ \\mathrm{id}_B = g \\circ (f \\circ h) = (g \\circ f) \\circ h = \\mathrm{id}_A \\circ h = h,$$ whose middle regrouping is legitimate precisely because composition is associative — associativity is not decoration; it is what makes inverses unique. The group laws follow: composition of bijections is a bijection whose inverse is the reversed composition, $\\mathrm{id}$ is neutral, and every element is invertible. The reversal in $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$ mirrors $(AB)^t = B^t A^t$ of Section 2.6 — for the same reason: whatever acts first must be undone last."
          },
          {
            kind: "theorem",
            heading: "Schröder–Bernstein theorem",
            body: "If there is an injection $f : A \\to B$ and an injection $g : B \\to A$, then there is a bijection $h : A \\to B$. Equivalently: $|A| \\le |B|$ and $|B| \\le |A|$ imply $|A| = |B|$, so cardinal comparison is antisymmetric and not merely a preorder — it behaves like a genuine partial order on sizes. The proof is constructive: from $f$ and $g$ alone it manufactures the bijection, which is why this is the standard tool when an explicit matching is too ugly to write down."
          },
          {
            kind: "proof",
            body: "Set $A_0 = A \\setminus g(B)$, then $A_{n+1} = g(f(A_n))$, and let $A_\\infty = \\bigcup_{n \\ge 0} A_n$: the elements of $A$ whose backward ancestry, traced alternately through $g$ and $f$, never escapes into the image of $g$. Define $$h(a) = \\begin{cases} f(a) & a \\in A_\\infty \\\\ g^{-1}(a) & a \\notin A_\\infty \\end{cases}$$ Well-definedness: if $a \\notin A_\\infty$ then in particular $a \\notin A_0 = A \\setminus g(B)$, so $a = g(b)$ for some — indeed unique, since $g$ is injective — $b \\in B$; write $g^{-1}(a) = b$. Injectivity: on $A_\\infty$ the map $h$ is the injective $f$; off $A_\\infty$ it is the injective $g^{-1}$. Could the two images collide? If $f(a) = g^{-1}(a')$ with $a \\in A_\\infty$ and $a' \\notin A_\\infty$, apply $g$ to get $g(f(a)) = a'$; but $g(f(a)) \\in g(f(A_\\infty)) = \\bigcup_{n \\ge 1} A_n \\subseteq A_\\infty$, while $a' \\notin A_\\infty$ — contradiction, so the images are disjoint and $h$ is injective. Surjectivity: take $b \\in B$. If $g(b) \\notin A_\\infty$ then $h(g(b)) = g^{-1}(g(b)) = b$. If $g(b) \\in A_\\infty$, then $g(b) \\notin A_0$ (it lies in $g(B)$), so $g(b) \\in A_n$ for some $n \\ge 1$, that is $g(b) \\in g(f(A_{n-1}))$; injectivity of $g$ yields $b = f(a)$ for some $a \\in A_{n-1} \\subseteq A_\\infty$, and then $h(a) = b$. Either way $b$ is hit, and $h$ is the desired bijection."
          },
          {
            kind: "para",
            body: "Two dividends close the tier. For **finite** sets, the factorization theorem collapses to the **pigeonhole principle**: if $|A| = |B| = n < \\infty$ then injective, surjective and bijective are equivalent for $f : A \\to B$ — an injection between equinumerous finite sets cannot miss, because $n$ pigeons in $n$ holes with no sharing fill every hole; for infinite sets this fails spectacularly (Hilbert's hotel), which is exactly the doorway to Section 2.5. And **function sets** carry genuine cardinal arithmetic: write $B^A$ for the set of all functions $A \\to B$, so $|B^A| = |B|^{|A|}$, with laws mirroring the familiar ones — $C^{A \\times B} \\cong (C^B)^A$ (currying: a two-argument function is a one-argument function returning functions, the set-theoretic content of closures in programming languages), $A^C \\times B^C \\cong (A \\times B)^C$, and $A^B \\times A^C \\cong A^{B \\sqcup C}$ (a function on a disjoint union is a pair of functions). The power set is a function space in disguise — $\\mathcal{P}(A) \\cong \\{0,1\\}^A$ by sending each subset to its characteristic function, the bit string of Section 2.2 — so $|\\mathcal{P}(A)| = 2^{|A|}$ becomes literal exponentiation: the engine of Cantor's theorem."
          }
        ]
      },
      {
        tier: "phd",
        title: "Cardinal characteristics of the continuum and PCF theory",
        blocks: [
          {
            kind: "para",
            body: "Above $\\aleph_0$ and below the continuum lies a populated middle that ZFC cannot flatten. The **cardinal characteristics of the continuum** measure how large various 'smallness' families must be. Order the functions $\\mathbb{N}^{\\mathbb{N}}$ by **eventual domination**: $f \\le^* g$ if $f(n) \\le g(n)$ for all but finitely many $n$. The **bounding number** $\\mathfrak{b}$ is the least cardinality of a family that no single function eventually dominates; the **dominating number** $\\mathfrak{d}$ is the least size of a cofinal family. Adding the additivity, covering, uniformity and cofinality numbers of the null ideal (measure) and the meager ideal (category) produces **Cichoń's diagram** — ten cardinals between $\\aleph_1$ and $2^{\\aleph_0}$, with precisely the drawn inequalities provable in ZFC and essentially every undrawn relation independent: a complete atlas of what the axioms can and cannot see about the continuum's internal structure. The area is very much alive: in 2013 Malliaris and Shelah proved $\\mathfrak{p} = \\mathfrak{t}$, two characteristics long sandwiched apart, settling Rothberger's 1948 problem by model-theoretic (ultraproduct) means and winning the first Hausdorff Medal. Still open, decades on: whether the almost-disjointness number $\\mathfrak{a}$ can consistently be a singular cardinal, or one of countable cofinality."
          },
          {
            kind: "para",
            body: "For **regular** cardinals, Easton's theorem (1970) makes the continuum function $\\kappa \\mapsto 2^\\kappa$ almost arbitrary — any nondecreasing assignment with $\\operatorname{cf}(2^\\kappa) > \\kappa$ can be forced. **Singular** cardinals are where ZFC bites back. **Silver's theorem (1974)**: if the generalized continuum hypothesis holds below a singular cardinal of uncountable cofinality on a stationary set, then it holds at that cardinal — the first rigidity. Galvin and Hajnal sharpened the phenomenon. Then **Shelah's PCF theory**, the calculus of the **possible cofinalities** of reduced products, produced its monument: if $\\aleph_\\omega$ is a strong limit (meaning $2^{\\aleph_n} < \\aleph_\\omega$ for every $n$), then $$2^{\\aleph_\\omega} < \\aleph_{\\omega_4}$$ — an absolute bound, in pure ZFC, on an exponent that Easton-style arguments suggest should be free. The proof builds a scale — a cofinal sequence in a product modulo an ideal — and dissects its structure; Shelah's book *Cardinal Arithmetic* (1994) devotes five hundred pages to this circle of ideas, and its author is fond of noting that the whole edifice exists to prove one inequality. And the bound is nearly sharp from the other side: Gitik, from large cardinals, built universes where the singular cardinal hypothesis fails outright at $\\aleph_\\omega$."
          },
          {
            kind: "open",
            heading: "The sharpness of Shelah's bound",
            body: "Suppose $\\aleph_\\omega$ is a strong limit. Shelah caps $2^{\\aleph_\\omega}$ below $\\aleph_{\\omega_4}$, but the truth is unknown within a wide band: can the bound be improved to $\\aleph_{\\omega_2}$ or $\\aleph_{\\omega_3}$? Is it consistent at all that $2^{\\aleph_\\omega} \\ge \\aleph_{\\omega_2}$? Every known attack — forcing constructions in the style of Gitik and Mitchell, inner models with overlapping extenders, pcf-scale analysis — currently breaks against the same wall: nobody can analyze overlapping extenders on a scale of length $\\aleph_{\\omega_1}$ or beyond. The problem is a precise question about a single exponent, yet it sits at the junction of forcing, inner model theory and the combinatorics of scales; Shelah has described the gap between what is known and what might be true here as one of the principal open problems of cardinal arithmetic. Progress would likely drag the whole inner model program along with it."
          }
        ]
      }
    ],
    readingTime: 10,
    intro: "Functions are the workhorses of mathematics and the precise language of computation — every algorithm maps inputs to outputs. This section defines functions and their three key properties (one-to-one, onto, bijective), the inverse and composition operations, and the special functions (floor, ceiling, factorial, exponential, logarithm) used throughout computer science.",
    objectives: [
      "Determine whether a relation is a function and identify domain, codomain and range",
      "Test functions for injectivity and surjectivity",
      "Compose functions and invert bijections",
      "Evaluate the floor, ceiling, factorial, exponential and logarithm functions"
    ],
    concepts: [
      {
        term: "Functions",
        kind: "definition",
        statement: "A **function** f from A to B, written f : A → B, assigns to each element a ∈ A exactly one element f(a) ∈ B. A is the **domain**, B the **codomain**, and f(a) is the **image** of a (or “the value of f at a”).",
        detail: "Two requirements make a function well-defined: every input is assigned (no holes) and each input has exactly one output (no ambiguity). The graph of f is the set {(a, f(a)) | a ∈ A} ⊆ A × B — which is why functions are special relations."
      },
      {
        term: "Domain, codomain, range",
        kind: "definition",
        statement: "The **range** (image) of f is f(A) = {f(a) | a ∈ A} ⊆ B. For S ⊆ A, the image of S is f(S) = {f(s) | s ∈ S}; for T ⊆ B, the **inverse image** is f⁻¹(T) = {a ∈ A | f(a) ∈ T}.",
        detail: "Codomain is a declared target; range is what is actually hit. f : R → R with f(x) = x² has range [0, ∞) — the codomain over-promises. Changing the codomain changes whether f is onto."
      },
      {
        term: "One-to-one (injective) functions",
        kind: "definition",
        statement: "f is **one-to-one** (injective) iff f(a₁) = f(a₂) implies a₁ = a₂ — equivalently, distinct inputs always produce distinct outputs: a₁ ≠ a₂ → f(a₁) ≠ f(a₂).",
        detail: "To disprove injectivity, exhibit a collision: two different inputs sharing one output. On graphs, every horizontal line crosses at most once (the “horizontal line test”). A strictly monotone function on R is always injective."
      },
      {
        term: "Onto (surjective) functions",
        kind: "definition",
        statement: "f : A → B is **onto** (surjective) iff every b ∈ B equals f(a) for some a ∈ A: ∀b ∈ B ∃a ∈ A (f(a) = b) — equivalently, the range equals the whole codomain.",
        detail: "Surjectivity is a property of the declared codomain: shrink B to the range and any function becomes onto. f(x) = x² is onto as a map R → [0, ∞) but not as R → R."
      },
      {
        term: "Bijections",
        kind: "definition",
        statement: "f is a **one-to-one correspondence** (bijection) iff it is both injective and surjective: every b ∈ B is hit by exactly one a ∈ A. Bijections are precisely what “|A| = |B|” means — for finite and infinite sets alike (Section 2.5).",
        detail: "A bijection pairs the elements of A with the elements of B: with A = {1, 2, 3} and B = {a, b, c}, the assignment 1↦a, 2↦c, 3↦b is a perfect matching. Bijections are also exactly the invertible functions."
      },
      {
        term: "Inverse functions",
        kind: "definition",
        statement: "If f : A → B is a bijection, the **inverse function** f⁻¹ : B → A is defined by f⁻¹(b) = a iff f(a) = b. Then $f^{-1} \\circ f = \\mathrm{id}_A$ and $f \\circ f^{-1} = \\mathrm{id}_B$, and $(f^{-1})^{-1} = f$.",
        detail: "No bijection, no (two-sided) inverse: a non-injective f cannot undo a collision, and a non-surjective f leaves some inputs with nowhere to go. When solving y = f(x) for x you are computing f⁻¹ — possible for every y exactly when f is bijective."
      },
      {
        term: "Composition of functions",
        kind: "definition",
        statement: "The **composition** of g : B → C and f : A → B is (g ∘ f)(x) = g(f(x)) — apply f first, then g. Composition is associative but generally not commutative: f ∘ g ≠ g ∘ f.",
        detail: "Range-of-inside must fit domain-of-outside: (g ∘ f) needs f's outputs to be legal inputs of g. Both associativity and the failure of commutativity are checked by plugging in: ((h∘g)∘f)(x) = h(g(f(x))) = (h∘(g∘f))(x), while f(x) = x + 1, g(x) = x² give (g∘f)(x) = (x+1)² ≠ x² + 1 = (f∘g)(x)."
      },
      {
        term: "Floor and ceiling functions",
        kind: "definition",
        statement: "The **floor** ⌊x⌋ is the greatest integer ≤ x; the **ceiling** ⌈x⌉ is the least integer ≥ x. Key facts: ⌊x⌋ = n iff n ≤ x < n + 1; ⌈x⌉ = n iff n − 1 < x ≤ n; they agree on integers and differ by exactly 1 otherwise; ⌊x + n⌋ = ⌊x⌋ + n for integer n; and ⌊−x⌋ = −⌈x⌉.",
        detail: "Examples: ⌊2.7⌋ = 2, ⌈2.3⌉ = 3, ⌊−3.4⌋ = −4, ⌈−3.4⌉ = −3, and ⌊5⌋ = ⌈5⌉ = 5 for integers. The function ⌊x + ½⌋ rounds to the nearest integer. These functions appear constantly in algorithm analysis (Chapter 3) and number theory (Chapter 4)."
      },
      {
        term: "Factorial, exponential and logarithm functions",
        kind: "definition",
        statement: "The **factorial** is f(n) = n! = n(n−1)(n−2)⋯2·1 with 0! = 1. The **exponential** f(x) = aˣ (a > 0, a ≠ 1) has base a; the **logarithm** $\\log_b x$ (b > 0, b ≠ 1) is its inverse: $\\log_b b^x = x$ and $b^{\\log_b x} = x$ for x > 0. Laws: $\\log_b(xy) = \\log_b x + \\log_b y$, $\\log_b(x^y) = y\\,\\log_b x$, and $\\log_a x = \\frac{\\log_b x}{\\log_b a}$.",
        detail: "Factorial growth eventually dominates every exponential c·dⁿ, exponentials dominate every polynomial, and logarithms grow slower than every positive power $x^{\\varepsilon}$ — the hierarchy that calibrates algorithm complexity in Chapter 3."
      }
    ],
    examples: [
      {
        title: "Properties depend on domain and codomain",
        problem: "Analyze f(x) = x² as: (a) f : R → R; (b) f : Z⁺ → Z⁺; (c) f : R → [0, ∞).",
        steps: [
          { label: "Step 1: Case (a) — injectivity test", text: "f(2) = f(−2) = 4: a collision, so not injective on R." },
          { label: "Step 2: Case (a) — surjectivity test", text: "No real x has x² = −1, so not onto R." },
          { label: "Step 3: Case (b) — positive integers", text: "Distinct positive inputs give distinct squares (x² = y² with x, y > 0 forces x = y), so injective; but 3 is not a perfect square, so not surjective." },
          { label: "Step 4: Case (c) — real to nonnegative", text: "Every y ≥ 0 has the square root as a preimage, so surjective; the collision from (a) persists, so still not injective." }
        ],
        result: "Same formula, three different verdicts: (a) neither, (b) injective only, (c) surjective only. Injectivity/surjectivity are properties of the declared mapping, not of the formula alone."
      },
      {
        title: "Computing with floor and ceiling",
        problem: "Evaluate ⌊2.7⌋, ⌈2.3⌉, ⌊−3.4⌋, ⌈−3.4⌉, ⌊5⌋, ⌈5⌉, and explain why ⌊x + ½⌋ rounds x to the nearest integer.",
        steps: [
          { label: "Step 1: Apply the definitions", text: "⌊2.7⌋ = 2 (greatest integer ≤ 2.7), ⌈2.3⌉ = 3 (least integer ≥ 2.3), ⌊−3.4⌋ = −4, ⌈−3.4⌉ = −3, and ⌊5⌋ = ⌈5⌉ = 5 for the integer 5." },
          { label: "Step 2: Watch the negative case", text: "Rounding down at −3.4 goes to −4 (further from zero) — floor is not truncation for negatives." },
          { label: "Step 3: Analyze the rounding trick", text: "If x = n + r with 0 ≤ r < 1: r < ½ makes x + ½ < n + 1, so ⌊x + ½⌋ = n (rounds down); r ≥ ½ makes x + ½ ≥ n + 1, so ⌊x + ½⌋ = n + 1 (rounds up)." },
          { label: "Step 4: Verify on samples", text: "⌊2.4 + 0.5⌋ = 2 and ⌊2.6 + 0.5⌋ = 3 — rounds to nearest." }
        ],
        result: "Floor/ceiling differ by 1 on non-integers and agree on integers; adding ½ before flooring implements round-to-nearest, a trick used in dozens of algorithms."
      },
      {
        title: "Inverting and composing",
        problem: "Let f(x) = 2x + 1 on R. Show f is bijective, find f⁻¹, and compare f ∘ g with g ∘ f for g(x) = x².",
        steps: [
          { label: "Step 1: Injective", text: "2a + 1 = 2b + 1 gives a = b after subtracting 1 and dividing by 2 — injective." },
          { label: "Step 2: Surjective", text: "Given y ∈ R, the preimage x = (y − 1)/2 is real and satisfies f(x) = y — onto." },
          { label: "Step 3: Solve for the inverse", text: "Set y = 2x + 1 and solve: x = (y − 1)/2, so f⁻¹(y) = (y − 1)/2. Check: f⁻¹(f(x)) = (2x + 1 − 1)/2 = x." },
          { label: "Step 4: Compare the two compositions", text: "(f ∘ g)(x) = f(x²) = 2x² + 1, while (g ∘ f)(x) = g(2x + 1) = (2x + 1)² = 4x² + 4x + 1 — different functions." }
        ],
        result: "f is a bijection with f⁻¹(x) = (x − 1)/2, and f ∘ g ≠ g ∘ f: composition order matters."
      }
    ],
    keyTakeaways: [
      "A function assigns exactly one output to every input; its range can be smaller than its codomain.",
      "Injective means no collisions; surjective means every codomain element is hit; bijective means a perfect pairing.",
      "Only bijections have inverse functions; f⁻¹(f(x)) = x and f(f⁻¹(y)) = y.",
      "Composition (g ∘ f)(x) = g(f(x)) is associative but not commutative.",
      "⌊x⌋ rounds down, ⌈x⌉ rounds up, they differ by 1 off the integers, and ⌊x + ½⌋ rounds to nearest.",
      "Growth hierarchy: logarithm ≺ polynomial ≺ exponential ≺ factorial — the yardstick of Chapter 3."
    ],
    quiz: [
      {
        q: "The function f : Z → Z with f(x) = 2x + 1 is:",
        options: ["injective and surjective", "injective but not surjective — only odd integers are hit", "surjective but not injective", "neither injective nor surjective"],
        answer: 1,
        explanation: "Equal outputs force equal inputs (2a+1 = 2b+1 ⟹ a = b), so it is injective; but 0 (and every even integer) has no preimage, so it is not onto Z. Note the same formula R → R is bijective — codomain matters."
      },
      {
        q: "⌊−2.3⌋ + ⌈0.7⌉ =",
        options: ["−3", "−2", "−1", "1"],
        answer: 1,
        explanation: "⌊−2.3⌋ = −3 (the greatest integer at most −2.3) and ⌈0.7⌉ = 1 (the least integer at least 0.7), and −3 + 1 = −2. Floor of a negative non-integer is one less than truncation."
      },
      {
        q: "The inverse of f(x) = 3x − 6 is:",
        options: ["f⁻¹(x) = (x + 6)/3", "f⁻¹(x) = (x − 6)/3", "f⁻¹(x) = 3x + 6", "f⁻¹(x) = 6 − 3x"],
        answer: 0,
        explanation: "Solve y = 3x − 6 for x: x = (y + 6)/3. Check: f⁻¹(f(x)) = (3x − 6 + 6)/3 = x. The other candidates fail this undo test."
      },
      {
        q: "f : {1,2,3} → {a,b,c} with f(1) = b, f(2) = c, f(3) = b is:",
        options: ["bijective", "injective but not surjective", "surjective but not injective", "neither injective nor surjective"],
        answer: 3,
        explanation: "f(1) = f(3) = b is a collision, so not injective; and a is never hit, so not surjective. Both failures at once means neither property holds."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.4
  {
    sectionId: "rosen-ch2-s4",
    depth: [
      {
        tier: "masters",
        title: "Closed forms: characteristic roots, generating functions, Bernoulli numbers",
        blocks: [
          {
            kind: "derivation",
            heading: "The characteristic-polynomial method",
            body: "A **linear recurrence with constant coefficients** of order $k$ has the form $a_n = c_1 a_{n-1} + \\cdots + c_k a_{n-k}$. Seek pure-exponential solutions $a_n = r^n$: substitution and division by $r^{n-k}$ yields the **characteristic equation** $$r^k - c_1 r^{k-1} - \\cdots - c_k = 0.$$ The solutions of the recurrence form a vector space of dimension $k$ — a solution is determined by its first $k$ values — so when the characteristic polynomial has $k$ distinct roots $r_1, \\ldots, r_k$, the general solution is $$a_n = \\alpha_1 r_1^n + \\cdots + \\alpha_k r_k^n$$ with the constants pinned down by the initial conditions. A repeated root $r$ of multiplicity $m$ contributes a polynomial of degree below $m$ times $r^n$: perturb the root to $r + \\varepsilon$ and observe that $\\big((r + \\varepsilon)^n - r^n\\big)/\\varepsilon \\to n r^{n-1}$, so the derivative-like solutions survive at $\\varepsilon = 0$. The Fibonacci recurrence $f_n = f_{n-1} + f_{n-2}$ gives $r^2 = r + 1$, with roots $\\varphi = \\tfrac{1 + \\sqrt{5}}{2}$ and $\\psi = \\tfrac{1 - \\sqrt{5}}{2}$; fitting $f_0 = 0$, $f_1 = 1$ yields **Binet's formula** $$f_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$$ — integers all the way down, despite the irrational dressing."
          },
          {
            kind: "derivation",
            heading: "The generating-function machine",
            body: "Wrap the entire sequence into one object, the **generating function** $G(x) = \\sum_{n \\ge 0} a_n x^n$, and compute in the ring of **formal power series** — objects that are never evaluated, only added and multiplied by the Cauchy product, so questions of convergence simply do not arise. A recurrence becomes an identity between rational functions. For Fibonacci: multiply $f_n = f_{n-1} + f_{n-2}$ by $x^n$ and sum over $n \\ge 2$ to get $$G(x) - f_0 - f_1 x = x\\,(G(x) - f_0) + x^2 G(x),$$ and with $f_0 = 0$, $f_1 = 1$: $$G(x) = \\frac{x}{1 - x - x^2}.$$ Factor $1 - x - x^2 = (1 - \\varphi x)(1 - \\psi x)$, split into partial fractions, and read coefficients off the geometric series $\\frac{1}{1 - rx} = \\sum_n r^n x^n$: Binet's formula reappears, the golden ratio now revealed as the reciprocal of a pole. The dictionary to memorize: multiplying $G$ by $x$ shifts the sequence; multiplying by $\\frac{1}{1 - x}$ takes partial sums — this is exactly the geometric sum formula of this section, $\\sum_{k=0}^{n} a r^k = \\frac{a(r^{n+1} - 1)}{r - 1}$, in formal dress; differentiation multiplies the $n$th term by $n$; and $[x^n]G$ extracts a coefficient. One generating function replaces a table of sequence values — and, in the research tier, becomes the primary object of the theory."
          },
          {
            kind: "theorem",
            heading: "Faulhaber's formula",
            body: "Define the **Bernoulli numbers** by the exponential generating function $$\\frac{x e^x}{e^x - 1} = \\sum_{j \\ge 0} B_j \\frac{x^j}{j!},$$ so that $B_0 = 1$, $B_1 = \\tfrac{1}{2}$, $B_2 = \\tfrac{1}{6}$, $B_3 = 0$, $B_4 = -\\tfrac{1}{30}$, $B_6 = \\tfrac{1}{42}$, and every odd-indexed one after $B_1$ vanishes; equivalently they obey the recurrence $\\sum_{j=0}^{m} \\binom{m+1}{j} B_j = m + 1$. Then for every exponent $p \\ge 1$ and every $n \\ge 1$: $$\\sum_{k=1}^{n} k^{p} = \\frac{1}{p + 1} \\sum_{j=0}^{p} \\binom{p+1}{j} B_j\\, n^{p+1-j}.$$ The right side is a polynomial in $n$ of degree $p + 1$ with leading term $\\tfrac{n^{p+1}}{p+1}$ — the sum of $p$th powers is, to first order, an integral, and the Bernoulli numbers are the complete set of correction terms."
          },
          {
            kind: "proof",
            body: "Sum a geometric progression of exponentials. On the one hand, $$\\sum_{k=1}^{n} e^{kx} = \\sum_{p \\ge 0} \\Big( \\sum_{k=1}^{n} k^p \\Big) \\frac{x^p}{p!},$$ because $e^{kx} = \\sum_p k^p x^p / p!$ and finite sums may be interchanged. On the other hand the geometric series collapses to a closed form that factors as $$\\frac{e^{(n+1)x} - e^x}{e^x - 1} = \\frac{e^{nx} - 1}{x} \\cdot \\frac{x e^x}{e^x - 1}.$$ Now $\\frac{e^{nx} - 1}{x} = \\sum_{m \\ge 0} \\frac{n^{m+1}}{(m+1)!} x^m$, and the second factor is the Bernoulli series by definition. Multiplying out and collecting the coefficient of $x^p$: $$\\sum_{k=1}^{n} k^p = p! \\sum_{m + j = p} \\frac{n^{m+1}}{(m+1)!\\, j!} B_j = \\frac{1}{p+1} \\sum_{j=0}^{p} \\binom{p+1}{j} B_j\\, n^{p+1-j},$$ where the last equality reindexes $m = p - j$ and uses $\\frac{p!}{(p+1-j)!\\, j!} = \\frac{1}{p+1} \\binom{p+1}{j}$. Setting $p = 1, 2, 3$ recovers $\\tfrac{n(n+1)}{2}$, $\\tfrac{n(n+1)(2n+1)}{6}$, and Nicomachus's identity $\\tfrac{n^2(n+1)^2}{4}$ — the last visibly the square of the first, a coincidence Faulhaber chased by hand through degree seventeen before declaring the pattern universal."
          },
          {
            kind: "derivation",
            heading: "Perturbation and telescoping",
            body: "Most closed forms of this section yield to a single two-sided trick. Write $S_n = \\sum_{k=0}^{n} a_k$ and compute $S_{n+1}$ twice — once by appending the last term, once by shifting the index and factoring. For the geometric progression $a_k = r^k$: $$S_n + r^{n+1} = 1 + r S_n \\implies S_n = \\frac{1 - r^{n+1}}{1 - r} \\quad (r \\ne 1),$$ with the factor $a$ riding along by linearity — the textbook formula in one line. The same perturbation prices the sum $S = \\sum_{k \\ge 1} k x^k$: write $S = \\sum_{j \\ge 0} (j + 1) x^{j+1} = x\\,S + \\frac{x}{1 - x}$, so $$S = \\frac{x}{(1 - x)^2},$$ and at $x = \\tfrac{1}{2}$ this says $\\sum_{k \\ge 1} k\\, 2^{-k} = 2$ — the expected number of coin tosses until the first head. Telescoping is the same idea made explicit: whenever $g(k) = G(k+1) - G(k)$, summation collapses, $\\sum_{k=1}^{n} g(k) = G(n+1) - G(1)$; applying this to the binomial expansion of $(k+1)^{p+1} - k^{p+1}$ is the engine that drives the Bernoulli recursion, and virtually every sum in this book that is not a geometric series falls to one of these two moves."
          }
        ]
      },
      {
        tier: "phd",
        title: "Asymptotics by singularities: analytic combinatorics to Collatz",
        blocks: [
          {
            kind: "para",
            body: "**Analytic combinatorics** (Flajolet and Sedgewick, 2009) promotes the generating functions of the master tier into a systematic asymptotic calculus, on one governing principle: the growth of the coefficients is read off from the **singularities** of the function. Inside the disc of convergence a function is analytic and its coefficients decay; the dominant singularities — those of smallest modulus — on the boundary control everything. The **transfer theorems** make this precise: if $F(z) \\sim c\\,(1 - z/\\rho)^{-\\alpha}$ as $z \\to \\rho$ from within, then $$[z^n] F(z) \\sim \\frac{c}{\\Gamma(\\alpha)}\\, n^{\\alpha - 1}\\, \\rho^{-n}.$$ The combinatorialist's favorite singularity is the square root: recursive specifications with a pairing structure lead to a functional equation $y = z\\,\\Phi(y)$ whose solution develops a square-root singularity at the radius of convergence, and $\\alpha = \\tfrac{1}{2}$ transfers to the **universal law** $n^{-3/2}\\rho^{-n}$ of simply generated trees — the Catalan numbers $C_n \\sim 4^n/(\\sqrt{\\pi}\\, n^{3/2})$ are the prototype. Where the undergraduate demands a closed form and finds none, the analyst reads off the base and the exponent from the singularity: asymptotics is the honest closed form."
          },
          {
            kind: "application",
            heading: "Quicksort's hidden constants",
            body: "Average-case algorithm analysis is where this machinery earns its industrial keep. Quicksort's expected comparison count obeys $c_n = n - 1 + \\tfrac{2}{n} \\sum_{k=0}^{n-1} c_k$; the recurrence is awkward term by term, but the generating function of the solution has a **logarithmic singularity**, and the transfer theorem for $\\log \\tfrac{1}{1-z}$ delivers the fine print of the asymptotics: $c_n = 2n \\ln n + (2\\gamma - 4) n + O(\\log n)$, where $\\gamma$ is the Euler–Mascheroni constant — analytic number theory living inside a sorting routine. The Flajolet school goes much further: hashing with linear probing is analyzed through parking functions, continuing Knuth's 1963 analysis of chained sorting, the first average-case analysis of an algorithm ever published; digital tries, suffix trees and random allocations all submit to singularity analysis or its saddle-point refinement; random permutations and their cycle structure yield to the exp-log schema. The method is uniform: derive the generating function from the recurrence or the combinatorial specification, locate the dominant singularity, and read the asymptotics — constants included — off the singular expansion."
          },
          {
            kind: "para",
            body: "Which sequences can a finite machine compute? A sequence $(a_n)$ is **$k$-automatic** if $a_n$ is the output of a finite automaton reading the base-$k$ digits of $n$ — the **Thue–Morse sequence**, the parity of the number of ones in the binary expansion of $n$, is the archetype, computable by a two-state machine. **Cobham's theorem (1969)**: a sequence that is simultaneously $k$-automatic and $\\ell$-automatic, for bases $k$ and $\\ell$ that are multiplicatively independent (no powers coincide), must be ultimately periodic — the base you count in leaves a computational fingerprint that no automaton can disguise. **Christol's theorem (1979)** upgrades the dictionary dramatically: over a finite field $\\mathbb{F}_p$, a formal power series $\\sum a_n x^n$ is **algebraic** — a root of a polynomial with coefficients in $\\mathbb{F}_p(x)$ — if and only if $(a_n)$ is $p$-automatic. Automaticity is algebraicity in positive characteristic, a bridge with no analogue over the rationals: indeed the Thue–Morse series is algebraic over $\\mathbb{F}_2(x)$ yet transcendental over $\\mathbb{Q}(x)$, a rigidity proved by Mahler's method. Kedlaya's theorem extends the correspondence to finite extensions of $\\mathbb{Q}_p$, tying automata to $p$-adic analysis."
          },
          {
            kind: "open",
            heading: "The Collatz conjecture",
            body: "Iterate the recurrence: $a_{n+1} = a_n/2$ when $a_n$ is even, $3a_n + 1$ when odd. The conjecture: every positive integer eventually reaches $1$. It has been verified beyond $2^{68}$ (Barina, 2020), and every heuristic agrees — on average the map multiplies by $3^{1/2}/2 < 1$ per two steps, so random-looking orbits should drift downward — yet nothing rigorous is known, and the problem has devoured techniques from number theory, ergodic theory and dynamical systems for eighty years; Erdős's verdict was that mathematics is not yet ripe for such questions. What is known is sobering: Conway proved the generalized problem — arbitrary affine maps selected by residue class — is **undecidable**, his FRACTRAN construction encoding Turing machines inside Collatz-style maps, so no uniform method can exist; Krasikov and Lagarias showed that the set of integers below $x$ that reach $1$ exceeds $x^{0.84}$; and Tao (2019) proved that almost all orbits, in logarithmic density, attain almost bounded values — in his own phrasing, the conjecture is 99 percent solved in the logarithmic sense. The remaining one percent is the entire problem, and it remains the purest open question about a recurrence that undergraduate notation can state in one line."
          }
        ]
      }
    ],
    readingTime: 8,
    intro: "Sequences are the discrete analog of functions — lists indexed by integers — and they carry the time dimension of computer science: recurrence relations describe how each term grows from its predecessors. Summation notation compresses long additions into a single symbol and its closed forms power complexity analysis throughout the rest of the book.",
    objectives: [
      "Compute terms of sequences given a formula or a recurrence with initial conditions",
      "Recognize arithmetic and geometric progressions and use their closed forms",
      "Evaluate sums in Σ notation using the standard formulas",
      "Work with double sums"
    ],
    concepts: [
      {
        term: "Sequences",
        kind: "definition",
        statement: "A **sequence** is a function from a subset of the integers (usually {0, 1, 2, …} or {1, 2, 3, …}) to a set S. Its values are written with subscripts, {aₙ}, and aₙ is the **term** (the nth term) of the sequence.",
        detail: "Order and repetition matter — unlike sets. {aₙ} with aₙ = 1/n starts 1, 1/2, 1/3, …; the index set convention determines where the list starts. Sequences model data streams, recursive computation, and anything with a “next” operation."
      },
      {
        term: "Geometric progressions",
        kind: "definition",
        statement: "A **geometric progression** is a sequence of the form a, ar, ar², ar³, … — each term is the previous times the fixed **common ratio** r. Closed form: aₙ = arⁿ.",
        detail: "With a = 2 and r = 3 the sequence is 2, 6, 18, 54, …. Geometric growth (|r| > 1) is the signature of exponential-time algorithms; geometric decay (|r| < 1) underlies infinite series like 1 + 1/2 + 1/4 + ⋯ = 2."
      },
      {
        term: "Arithmetic progressions",
        kind: "definition",
        statement: "An **arithmetic progression** is a sequence a, a + d, a + 2d, a + 3d, … — each term is the previous plus the fixed **common difference** d. Closed form: aₙ = a + dn.",
        detail: "With a = 3 and d = 4: 3, 7, 11, 15, …. Note aₙ = 3n − 2 (starting at n = 1) generates the same 1, 4, 7, 10, … as the recurrence a₁ = 1, aₙ = aₙ₋₁ + 3 — formulas and recurrences are two descriptions of one sequence."
      },
      {
        term: "Recurrence relations",
        kind: "definition",
        statement: "A **recurrence relation** for {aₙ} expresses aₙ in terms of earlier terms; together with **initial conditions** (values of the first terms) it determines the whole sequence. A formula expressing aₙ directly in n is a **closed form**.",
        detail: "The compound-interest recurrence a₀ = P, aₙ = (1 + r)·aₙ₋₁ closes to aₙ = P(1 + r)ⁿ. Chapter 8 develops systematic methods for solving recurrences; here you learn to compute terms and verify candidate closed forms (by substitution or induction, Chapter 5)."
      },
      {
        term: "The Fibonacci sequence",
        kind: "definition",
        statement: "The **Fibonacci sequence** is defined by f₀ = 0, f₁ = 1 and fₙ = fₙ₋₁ + fₙ₋₂ for n ≥ 2: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … It appears in plant growth, the golden ratio, and algorithm analysis.",
        detail: "Fibonacci is the canonical two-term recurrence: each term needs the previous *two*. Its growth rate tends to the golden ratio φ ≈ 1.618, which is why the naive recursive Fibonacci computation is hopelessly slow (Chapter 3–5 discuss why)."
      },
      {
        term: "Summation notation",
        kind: "notation",
        statement: "$\\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \\dots + a_n$. The variable k is the **index of summation** (a dummy — renaming changes nothing), m and n are the lower and upper limits.",
        detail: "Σ notation generalizes: $\\sum_{k \\in S} a_k$ sums over any index set S, and products use ∏ analogously. Always confirm the limits and that the index — not a fixed value — drives the terms: $\\sum_{k=1}^{n} 1 = n$ (a sum of n ones), and $\\sum_{k=0}^{n} 2^k = 2^{n+1} - 1$ (the exponent must be the index k)."
      },
      {
        term: "Geometric series",
        kind: "theorem",
        statement: "For r ≠ 1: $\\sum_{k=0}^{n} ar^k = \\frac{a(r^{n+1} - 1)}{r - 1}$. For |r| < 1 the infinite series converges: $\\sum_{k=0}^{\\infty} ar^k = \\frac{a}{1 - r}$.",
        detail: "Example: 1 + 2 + 4 + 8 + 16 = 2⁵ − 1 = 31, and 1 + 1/2 + 1/4 + ⋯ = 2. The doubling pattern of geometric sums is the backbone of binary representation and the halving analysis of binary search."
      },
      {
        term: "Sums of powers",
        kind: "theorem",
        statement: "$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$; $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$; $\\sum_{k=1}^{n} k^3 = \\frac{n^2(n+1)^2}{4}$ (the square of the first formula).",
        detail: "Example: $\\sum_{k=1}^{100} k = 5050$ (Gauss's famous shortcut). These closed forms convert loop-analysis sums into polynomials in n — the polynomial theorem of Chapter 3 then gives the complexity class immediately."
      },
      {
        term: "Double summations",
        kind: "notation",
        statement: "$\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}$ means: for each fixed i, sum over j (the inner sum first), then add those results over i. When the inner limit depends on the outer index the region is triangular: $\\sum_{i=1}^{n} \\sum_{j=1}^{i} a_{ij}$ counts pairs with j ≤ i.",
        detail: "Example: $\\sum_{i=1}^{4} \\sum_{j=1}^{i} 1 = 1 + 2 + 3 + 4 = 10$ — the number of pairs (i, j) with 1 ≤ j ≤ i ≤ 4, i.e., “choose with order”, the handshake count n(n+1)/2. Nested loops in programs compute exactly such double sums."
      }
    ],
    examples: [
      {
        title: "Formula vs recurrence",
        problem: "List the first five terms of (a) aₙ = 3n − 2 for n ≥ 1, and (b) the sequence with a₁ = 1, aₙ = aₙ₋₁ + 3 for n ≥ 2. What do you notice? Do the same for c₁ = 1, cₙ = 2cₙ₋₁.",
        steps: [
          { label: "Step 1: Evaluate the formula", text: "(a) n = 1..5 gives 1, 4, 7, 10, 13 — an arithmetic progression with a = 1, d = 3." },
          { label: "Step 2: Iterate the recurrence", text: "(b) a₁ = 1; then add 3 repeatedly: 1, 4, 7, 10, 13 — the same sequence." },
          { label: "Step 3: Conclude for (a)/(b)", text: "The recurrence aₙ = aₙ₋₁ + 3 and the formula aₙ = 3n − 2 describe the same arithmetic progression." },
          { label: "Step 4: The geometric analogue", text: "c₁ = 1, cₙ = 2cₙ₋₁ gives 1, 2, 4, 8, 16 — a geometric progression with closed form cₙ = 2ⁿ⁻¹." }
        ],
        result: "Arithmetic recurrences close to linear formulas; geometric (multiplicative) recurrences close to exponentials. Recognizing which world you are in predicts the growth rate immediately."
      },
      {
        title: "Evaluating a sum with the standard formulas",
        problem: "Compute $\\sum_{k=1}^{100} (3k - 1)$.",
        steps: [
          { label: "Step 1: Split the sum", text: "$\\sum (3k - 1) = 3\\sum k - \\sum 1$, using linearity of summation." },
          { label: "Step 2: Apply the first-power formula", text: "$\\sum_{k=1}^{100} k = \\frac{100 \\cdot 101}{2} = 5050$." },
          { label: "Step 3: The constant sum", text: "$\\sum_{k=1}^{100} 1 = 100$." },
          { label: "Step 4: Combine", text: "3 · 5050 − 100 = 15150 − 100 = 15050." }
        ],
        result: "The sum is 15050 — no loop required: split, look up, combine. This exact pattern evaluates the operation counts of simple loops in Chapter 3."
      },
      {
        title: "A double sum",
        problem: "Evaluate $\\sum_{i=1}^{3} \\sum_{j=1}^{2} (2i + j)$.",
        steps: [
          { label: "Step 1: Compute each inner sum", text: "i = 1: (2+1) + (2+2) = 7; i = 2: (4+1) + (4+2) = 11; i = 3: (6+1) + (6+2) = 15." },
          { label: "Step 2: Sum over the outer index", text: "7 + 11 + 15 = 33." },
          { label: "Step 3: Verify by expansion", text: "$\\sum\\sum(2i + j) = 2\\sum_{i=1}^{3}\\sum_{j=1}^{2} i + \\sum_{i=1}^{3}\\sum_{j=1}^{2} j = 2(2\\cdot(1+2+3)) + 3(1+2) = 24 + 9 = 33$. ✓" }
        ],
        result: "The double sum equals 33 — inner sums first, or split into elementary pieces; both routes agree."
      }
    ],
    keyTakeaways: [
      "A sequence is an integer-indexed list; order and repetition matter (unlike sets).",
      "Arithmetic progressions add a fixed d (closed form a + dn); geometric progressions multiply by a fixed r (closed form arⁿ).",
      "A recurrence plus initial conditions determines a sequence; a closed form computes any term directly.",
      "Fibonacci: f₀ = 0, f₁ = 1, fₙ = fₙ₋₁ + fₙ₋₂ — the model two-term recurrence.",
      "Σ notation: $\\sum_{k=0}^{n} ar^k = \\frac{a(r^{n+1} - 1)}{r - 1}$, $\\sum k = \\frac{n(n+1)}{2}$, $\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum k^3 = \\frac{n^2(n+1)^2}{4}$.",
      "Evaluate double sums inner-first; triangular index regions count pairs and drive nested-loop analysis."
    ],
    quiz: [
      {
        q: "A sequence starts 5, 10, 20, 40, … and satisfies aₙ = 2aₙ₋₁. Then a₅ =",
        options: ["80", "160", "100", "125"],
        answer: 0,
        explanation: "The next term doubles the last: 2 · 40 = 80. This is a geometric progression with a = 5, r = 2, and closed form aₙ = 5 · 2ⁿ⁻¹."
      },
      {
        q: "$\\sum_{k=1}^{10} k^2 =$",
        options: ["385", "55", "3025", "5050"],
        answer: 0,
        explanation: "By the power-sum formula, $\\frac{10 \\cdot 11 \\cdot 21}{6} = \\frac{2310}{6} = 385$. The distractors are $\\sum k = 55$, $(\\sum k)^2 = 3025$, and $\\sum_{k=1}^{100} k = 5050$."
      },
      {
        q: "$\\sum_{i=0}^{5} 2^i =$",
        options: ["63", "62", "64", "31"],
        answer: 0,
        explanation: "This is a geometric series with a = 1, r = 2: $\\frac{2^6 - 1}{2 - 1} = 64 - 1 = 63$. It counts every binary number from 000000 to 111111."
      },
      {
        q: "With f₀ = 0, f₁ = 1 and fₙ = fₙ₋₁ + fₙ₋₂, the value f₆ is:",
        options: ["5", "8", "13", "21"],
        answer: 1,
        explanation: "The sequence runs 0, 1, 1, 2, 3, 5, 8 — the seventh listed value, f₆ = 8. Counting from index 0 is the trap; f₆ is not the sixth term in the displayed list but the one with subscript 6."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.5
  {
    sectionId: "rosen-ch2-s5",
    depth: [
      {
        tier: "masters",
        title: "The arithmetic of infinities: pairing, diagonalization, the continuum",
        blocks: [
          {
            kind: "theorem",
            heading: "Cantor's theorem",
            body: "For every set $S$, no function $f : S \\to \\mathcal{P}(S)$ is surjective; since $x \\mapsto \\{x\\}$ injects $S$ into its power set, $|S| < |\\mathcal{P}(S)|$ strictly. There is therefore no largest cardinality, and the sequence $S, \\mathcal{P}(S), \\mathcal{P}(\\mathcal{P}(S)), \\ldots$ of ever-increasing infinities never terminates. The proof generalizes the digit-diagonalization of this section, replacing decimal digits with membership: whatever list you bring, the argument constructs its refutation."
          },
          {
            kind: "proof",
            body: "Let $f : S \\to \\mathcal{P}(S)$ be arbitrary. By the axiom of separation, the **diagonal set** $$D = \\{x \\in S : x \\notin f(x)\\}$$ exists. If $f$ were onto there would be a $d \\in S$ with $f(d) = D$, and testing $d$ for membership in its own image gives the contradiction $$d \\in D \\iff d \\notin f(d) \\iff d \\notin D.$$ So $f$ is not surjective — and $f$ was arbitrary, so no surjection exists at all. Together with the injection $x \\mapsto \\{x\\}$ this gives $|S| \\le |\\mathcal{P}(S)|$ and $|S| \\ne |\\mathcal{P}(S)|$. Note the kinship with the interval argument of this section: given any candidate enumeration of subsets, the construction produces a set differing from the $x$-th subset at the element $x$ — the witness of failure is manufactured from the attempt itself. Iterating the power set from $\\mathbb{N}$ yields $\\aleph_0 < 2^{\\aleph_0} < 2^{2^{\\aleph_0}} < \\cdots$, and collecting 'all cardinalities' into a completed totality would reproduce the contradiction, which is why the cardinals form a proper class rather than a set."
          },
          {
            kind: "theorem",
            heading: "A pairing function for the rationals",
            body: "The **Cantor pairing function** $$\\pi(a, b) = \\frac{(a + b)(a + b + 1)}{2} + b$$ is a bijection from $\\mathbb{N} \\times \\mathbb{N}$ onto $\\mathbb{N}$. Composing it with a coprimality filter and a sign interleave yields an explicit bijection $\\mathbb{N} \\to \\mathbb{Q}$, so $|\\mathbb{Q}| = \\aleph_0$ by exhibited construction rather than by diagram: the countability of the rationals becomes an arithmetic fact, with the diagonal traversal of this section realized as a polynomial."
          },
          {
            kind: "proof",
            body: "Think of $\\mathbb{N} \\times \\mathbb{N}$ as the infinite grid. The pairs with $a + b = s$ form the $s$-th anti-diagonal and carry exactly $s + 1$ pairs; the diagonals below it carry $1 + 2 + \\cdots + s = \\tfrac{s(s+1)}{2}$ pairs in total; and within its diagonal, a pair is displaced by $+\\,b$. So $\\pi$ enumerates the grid along anti-diagonals — the traversal of this section, made arithmetic. **Injectivity**: within one diagonal, $\\pi(a, b) - \\pi(a', b') = b - b'$, so equality forces $b = b'$ and then $a = a'$; across diagonals, if $s = a + b < s' = a' + b'$ then $\\pi(a, b) \\le \\tfrac{s(s+1)}{2} + s < \\tfrac{(s+1)(s+2)}{2} \\le \\pi(a', b')$, so values from different diagonals differ. **Surjectivity**: every $m \\in \\mathbb{N}$ lies in exactly one interval $\\tfrac{s(s+1)}{2} \\le m < \\tfrac{(s+1)(s+2)}{2}$; putting $b = m - \\tfrac{s(s+1)}{2}$ (so $b \\le s$) and $a = s - b$ gives $\\pi(a, b) = m$. Now enumerate the positive rationals: run through pairs $(p, q)$ with $q \\ge 1$ in $\\pi$-order, listing $p/q$ exactly when $\\gcd(p, q) = 1$; deleting the crossed-out duplicates leaves a list, because an infinite subset of a list is still a list, and every positive rational appears in lowest terms at a finite position. Interleaving $0, +q_1, -q_1, +q_2, -q_2, \\ldots$ finishes an explicit bijection $\\mathbb{N} \\to \\mathbb{Q}$."
          },
          {
            kind: "derivation",
            heading: "From intervals to power sets",
            body: "Three sober bijections calibrate the continuum. First, the interval and the line are the same size: $x \\mapsto \\tan\\big(\\pi(x - \\tfrac{1}{2})\\big)$ is a bijection $(0, 1) \\to \\mathbb{R}$ — strictly increasing, onto, with the right limits at the ends. Second, $\\mathcal{P}(\\mathbb{N})$ injects into $(0, 1)$: map $S \\subseteq \\mathbb{N}$ to $\\sum_{n \\in S} 2 \\cdot 3^{-(n+1)}$, the real whose ternary expansion has a 2 exactly in the positions of $S$ — distinct sets give distinct reals, since ternary expansions using only 0s and 2s are unique, and the image is the Cantor set. Third, $(0,1)$ injects into $\\mathcal{P}(\\mathbb{N})$: send each real to the set of positions of 1s in its binary expansion, choosing for each dyadic rational the expansion that ends in zeros, so the map is single-valued and injective. By **Schröder–Bernstein** — its first genuine workout — the two sets are equinumerous, and therefore $$|\\mathbb{R}| = |(0, 1)| = |\\mathcal{P}(\\mathbb{N})| = 2^{\\aleph_0}.$$ The arithmetic now runs on exponents: $2^{\\aleph_0} \\cdot 2^{\\aleph_0} = 2^{\\aleph_0 + \\aleph_0} = 2^{\\aleph_0}$, so the plane is no bigger than the line; $\\big(2^{\\aleph_0}\\big)^{\\aleph_0} = 2^{\\aleph_0 \\cdot \\aleph_0} = 2^{\\aleph_0}$, so even the set of all sequences of reals has the continuum's size; and $2^{\\aleph_0} + \\aleph_0 = 2^{\\aleph_0}$ by Hilbert's hotel. The exponent laws $\\kappa^{\\lambda} \\cdot \\kappa^{\\mu} = \\kappa^{\\lambda + \\mu}$ and $\\big(\\kappa^{\\lambda}\\big)^{\\mu} = \\kappa^{\\lambda \\mu}$ are the cardinal shadows of the currying isomorphisms of Section 2.3's master tier."
          },
          {
            kind: "remark",
            body: "Hilbert's hotel, run properly, is cardinal arithmetic. The single late arrival — move every guest from room $n$ to $n + 1$ — is the statement $\\aleph_0 + 1 = \\aleph_0$. Seating one countable coach — guests to even rooms, coach passengers to odd — is $\\aleph_0 + \\aleph_0 = \\aleph_0$. A countable fleet of countable coaches is the pairing function's diagonal scan, $\\aleph_0 \\cdot \\aleph_0 = \\aleph_0$. But the last step hides an invoice: seating the fleet requires choosing an enumeration of each coach's passengers, and for a merely countable family of arbitrary countable sets that choice is precisely the **axiom of countable choice**. Without any form of choice the edifice wobbles: in the Feferman–Lévy model of ZF, the continuum is a countable union of countable sets. Cardinal arithmetic is not a free consequence of bijections; it is what bijections and choice jointly buy."
          }
        ]
      },
      {
        tier: "phd",
        title: "Descriptive set theory: Borel ranks, determinacy, and the frontier",
        blocks: [
          {
            kind: "para",
            body: "How complex can a set of reals be while remaining *describable*? The **Borel sets** are the closure of the open sets under complement and countable union; the **Borel hierarchy** stratifies that closure: $\\mathbf{\\Sigma}^0_1$ = open, $\\mathbf{\\Pi}^0_1$ = closed, and for countable ordinals $\\alpha$, $\\mathbf{\\Sigma}^0_\\alpha$ consists of countable unions of sets from earlier $\\mathbf{\\Pi}^0$ levels. The construction runs through all countable ordinals, and every level is genuinely new — for each $\\alpha < \\omega_1$ there are Borel sets of exact rank $\\alpha$ — a strict hierarchy of length $\\omega_1$. Every Borel set carries a **code**, a countable well-founded tree describing how it is assembled; there are exactly continuum many codes, hence continuum many Borel sets, packed into $\\aleph_1$ levels. The subject was born from an error: Lebesgue believed (1905) that projections of Borel sets are Borel; **Souslin** found the mistake in 1917 and, dissecting it, defined the **analytic sets** $\\mathbf{\\Sigma}^1_1$ — the projections, equivalently the continuous images, of Borel sets — a strictly larger class with its own deep regularity theory, and descriptive set theory was born."
          },
          {
            kind: "theorem",
            heading: "Perfect set property",
            body: "**Souslin–Lusin.** Every uncountable analytic set of reals contains a nonempty **perfect subset** — a closed set with no isolated points, which necessarily has cardinality exactly $2^{\\aleph_0}$. Consequently every analytic set has cardinality $\\aleph_0$ or exactly $2^{\\aleph_0}$: the continuum hypothesis, independent of ZFC in general, is *provable* for analytic sets, and the same holds one level up for coanalytic sets."
          },
          {
            kind: "proof",
            body: "First the closed case — the **Cantor–Bendixson theorem**. Given closed $F \\subseteq \\mathbb{R}$, iterate the deletion of isolated points transfinitely: $F^{(\\alpha+1)}$ removes the isolated points of $F^{(\\alpha)}$, with unions taken at limit stages. A point deleted at stage $\\alpha$ has a rational open interval meeting $F^{(\\alpha)}$ only in that point; since later stages only shrink the set, that interval continues to separate the point from everything deleted later, and distinct deleted points receive distinct rational intervals — so only countably many points are ever deleted, and the process stabilizes. The remainder is the **perfect kernel** $P$, and $F = P \\cup S$ with $S$ countable: the Cantor–Bendixson decomposition. A nonempty perfect set is enormous — split it recursively into two disjoint closed pieces of shrinking diameter, obtaining a binary tree of nested pieces whose branches inject $2^{\\mathbb{N}}$ into $P$ — so an uncountable closed set has exactly continuum many points. For analytic $A$: analytic sets are projections of trees on $\\mathbb{N} \\times \\mathbb{N}$, and Souslin's dichotomy for such a tree either exhibits a splitting subtree whose projection is a perfect subset of $A$, or — via the **Lusin–Sierpiński boundedness theorem**, which confines the associated ranks below $\\omega_1$ — forces $A$ countable. The boundedness step is the deep input; every graduate text in the subject builds it before this theorem."
          },
          {
            kind: "para",
            body: "Games put these sets to work. Players I and II alternately play natural numbers, jointly producing a real $x$; a payoff set $A$ decides who wins, and $A$ is **determined** if one player has a winning strategy. **Gale–Stewart (1953)**: open sets are determined — the proof ranks positions by the stage at which the outcome is settled and observes that the player facing a loss can always step down the rank. **Martin (1975)**: **Borel determinacy** — every Borel set is determined. This is one of the deepest theorems provable in ZFC: Martin's argument assigns to each countable ordinal a layer of unraveling machinery, and Harvey Friedman proved the cost is intrinsic — Borel determinacy at level $\\alpha$ requires $\\alpha$-many iterations of the power set operation, so Zermelo set theory (ZFC without Replacement) cannot prove it at all: a theorem whose proof-theoretic price tag is exactly known. Determinacy is a regularity engine: under the **axiom of determinacy** of Mycielski and Steinhaus — all sets of reals determined — every set of reals is Lebesgue measurable, has the Baire property, and has the perfect set property, though AD contradicts the axiom of choice. Martin, Steel and Woodin then proved that AD holds in $L(\\mathbb{R})$ if there are infinitely many Woodin cardinals: the regularity of sets of reals is bought with large cardinals."
          },
          {
            kind: "open",
            heading: "The inner model problem",
            body: "How far does the large-cardinal ladder reach inside the universe? The **inner model program** seeks canonical miniatures of $V$ — Gödel's constructible $L$, but rich enough to host large cardinals; Mitchell and Steel reached the Woodin level, but no canonical inner model containing a **supercompact** cardinal is known. This is the inner model problem, arguably the central open problem of set theory: its solution would calibrate the consistency strength of every natural statement about sets of reals, and settle whether the determinacy hierarchy is continuous from below. Woodin's **Ω-conjecture** asserts that Ω-logic — truth invariant under all forcing extensions — admits a complete proof calculus, which would give questions like the size of the continuum a forcing-invariant meaning. Which value the calculus would then dictate is itself unsettled: Woodin's $P_{\\max}$ program once pointed to a canonical universe with continuum $\\aleph_2$, while his ultimate-$L$ program now points to $\\aleph_1$. Whether the conjecture holds, and which — if either — is the right completion of ZFC, is where the fate of the continuum currently rests."
          }
        ]
      }
    ],
    readingTime: 9,
    intro: "How big is infinity? This section answers it precisely: a set is countable if its elements can be listed one after another. The positive integers, the integers and even the rationals are countable — but Cantor's diagonalization shows the real numbers are strictly bigger, and the power set construction climbs to infinities without end.",
    objectives: [
      "Define equal cardinality via bijections",
      "Prove sets countable by explicit enumeration or bijection",
      "Understand why Z and Q are countable",
      "Run Cantor's diagonalization argument for R",
      "Compare infinite cardinalities, including |P(S)| > |S|"
    ],
    concepts: [
      {
        term: "Cardinality as bijection",
        kind: "definition",
        statement: "Sets A and B have the **same cardinality**, |A| = |B|, iff there is a bijection f : A → B. For finite sets this means “same number of elements”; for infinite sets it defines what “same size” means.",
        detail: "Bijections pair elements perfectly — no leftovers, no collisions. If A and B are finite with |A| = |B| = n, every injection is automatically a bijection (the pigeonhole principle, Chapter 6); for infinite sets an injection can miss, so the bijection requirement has teeth."
      },
      {
        term: "Countable sets",
        kind: "definition",
        statement: "A set is **countable** if it is finite or has the same cardinality as the set Z⁺ of positive integers — equivalently, if its elements can be written as an infinite list a₁, a₂, a₃, … with every element appearing exactly once.",
        detail: "“Countable” literally means “you can count them”: the list position is the count. An infinite countable set is called **countably infinite** (or denumerable), and all countably infinite sets have cardinality ℵ₀ (“aleph-null”)."
      },
      {
        term: "Every infinite subset of a countable set is countable",
        kind: "theorem",
        statement: "If S is an infinite subset of a countable set, then S is countably infinite: list the big set and cross off elements not in S — the survivors enumerate S in order.",
        detail: "Corollaries: the squares, the primes, the multiples of 17 — all countable, however “thin” they seem. This theorem is the standard shortcut for proving countability of natural subcollections."
      },
      {
        term: "Hilbert's Grand Hotel",
        kind: "insight",
        statement: "A fully occupied hotel with countably many rooms 1, 2, 3, … can still accept a new guest (move each guest from room n to room n + 1) or even infinitely many new guests (move each to room 2n, freeing all odd rooms).",
        detail: "The paradox resolves once you see it as the bijection n ↦ n + 1 (or n ↦ 2n): the positive integers are in one-to-one correspondence with the even positive integers — a proper subset of the same size. This is the defining pathology of infinite sets (Dedekind's criterion)."
      },
      {
        term: "The rationals are countable",
        kind: "theorem",
        statement: "The set Q of rational numbers is countable: arrange positive rationals p/q in a two-dimensional grid and traverse it diagonally (p + q = 2, then 3, then 4, …), skipping duplicates like 2/2; interleave negatives and zero as for Z.",
        detail: "The diagonal traversal is the crucial trick — a row-by-row scan would never finish the first row. The same technique shows Z × Z is countable, hence Q × Q, hence (by induction) any finite Cartesian power. Countable sets are remarkably robust."
      },
      {
        term: "Cantor diagonalization: R is uncountable",
        kind: "theorem",
        statement: "The real numbers in (0, 1) are uncountable. Given any list r₁, r₂, r₃, … of reals in (0, 1), build x by choosing its nth digit to differ from the nth digit of rₙ (say, 4 if that digit is not 4, else 5). Then x differs from every rₙ in the nth digit, so x is in (0, 1) but not on the list — no list exhausts the interval.",
        detail: "Avoiding the digits 0 and 9 sidesteps the 0.4999… = 0.5 ambiguity. The theorem's consequence: |R| > |Z⁺| — a genuinely bigger infinity. Diagonalization reappears in logic (the halting problem, Section 3.1) and computability (Chapter 13)."
      },
      {
        term: "The power set is strictly bigger",
        kind: "theorem",
        statement: "**Cantor's theorem**: |S| < |P(S)| for every set S. In particular the power set of Z⁺ — essentially the set of infinite bit strings — is uncountable, and its cardinality equals that of R.",
        detail: "The diagonal idea works again: for any function f : S → P(S), the set D = {x ∈ S | x ∉ f(x)} differs from every f(x) at the element x, so f is never onto. Iterating P gives an endless tower of ever-larger infinities."
      },
      {
        term: "Schröder–Bernstein theorem",
        kind: "theorem",
        statement: "If there is an injection f : A → B and an injection g : B → A, then |A| = |B|: a bijection between A and B exists.",
        detail: "This spares you from constructing an explicit bijection — two one-way embeddings suffice. Standard use: |(0, 1)| = |R| via injections in both directions."
      }
    ],
    examples: [
      {
        title: "The integers are countable",
        problem: "Show that the set Z of all integers is countable.",
        steps: [
          { label: "Step 1: Try to list", text: "Naively: 0, 1, 2, … never reaches the negatives. A one-direction list fails." },
          { label: "Step 2: Zig-zag instead", text: "List 0, 1, −1, 2, −2, 3, −3, … — every integer appears at a definite finite position: n ≥ 0 sits at position 2n + 1, and n < 0 at position 2|n|." },
          { label: "Step 3: Extract the bijection", text: "f : Z⁺ → Z with f(k) = (−1)ᵏ ⌊k/2⌋ maps 1↦0, 2↦1, 3↦−1, 4↦2, 5↦−2, …" },
          { label: "Step 4: Conclude", text: "A bijection with Z⁺ exists, so Z is countably infinite." }
        ],
        result: "The zig-zag listing is itself the proof: position in the list = value of the inverse bijection. The same interleave handles Q's signs later."
      },
      {
        title: "Enumerating the rationals",
        problem: "Explain the diagonal enumeration showing Q⁺ (positive rationals) is countable.",
        steps: [
          { label: "Step 1: Grid the fractions", text: "Put p/q in row p, column q — every positive rational sits somewhere in the infinite grid." },
          { label: "Step 2: Traverse anti-diagonals", text: "Read diagonals of constant p + q: 1/1; then 1/2, 2/1; then 1/3, 2/2, 3/1; then 1/4, 2/3, 3/2, 4/1; … Each diagonal is finite, so every cell is reached in finite time." },
          { label: "Step 3: Skip duplicates", text: "When a fraction reduces to one already listed (2/2 = 1, 2/4 = 1/2), skip it — this keeps the list repetition-free." },
          { label: "Step 4: Absorb signs and zero", text: "Interleave with the negated list and 0 as for Z; countability is preserved by finite interleavings." }
        ],
        result: "Every positive rational is reached at some finite stage, so Q⁺ is countable — and so is Q. No row-by-row scan could do this: only the diagonal order visits every finite cell."
      },
      {
        title: "Running the diagonal argument",
        problem: "A colleague claims to have listed all reals in (0, 1): r₁ = 0.5000…, r₂ = 0.3333…, r₃ = 0.1414…, r₄ = 0.7071…, …. Build a real the list misses.",
        steps: [
          { label: "Step 1: Read off the diagonal digits", text: "First digit of r₁ is 5; second of r₂ is 3; third of r₃ is 1; fourth of r₄ is 7; …" },
          { label: "Step 2: Change each one", text: "Use the rule “4 unless the diagonal digit is 4, else 5”: x = 0.4444… for the digits shown (5→4, 3→4, 1→4, 7→4, …)." },
          { label: "Step 3: Continue the rule forever", text: "The nth digit of x is defined against the nth digit of rₙ for every n, so the construction never terminates early." },
          { label: "Step 4: Verify x is missed", text: "x differs from r₁ in digit 1, from r₂ in digit 2, from rₙ in digit n — so x is not on the list, though x ∈ (0, 1)." }
        ],
        result: "Every attempted list misses some real in (0, 1), so (0, 1) — and hence R — is uncountable. No cleverer listing can escape: the argument defeats any list by construction."
      }
    ],
    keyTakeaways: [
      "|A| = |B| is defined by bijections, not by counting — this makes infinite sizes comparable.",
      "Countable = finite or listable like Z⁺; every infinite subset of a countable set is countable.",
      "Z and Q are countable (zig-zag and diagonal-traversal listings); countability survives finite products and interleavings.",
      "Cantor diagonalization: any list of reals misses a real built digit-by-digit — so R is uncountable.",
      "Hilbert's hotel shows a set can have the same size as a proper subset — the signature of infinity.",
      "Cantor's theorem: |P(S)| > |S| always, so there is no biggest infinity."
    ],
    quiz: [
      {
        q: "A set is countable when:",
        options: ["it is finite or there is a one-to-one correspondence with Z⁺", "it can be put in one-to-one correspondence with R", "every element is an integer", "its power set is finite"],
        answer: 0,
        explanation: "Countable means listable: either already finite, or enumerable as a₁, a₂, … exhausting the set — exactly a bijection with the positive integers. The reals are uncountable, integer-ness is irrelevant (Q contains non-integers yet is countable), and finite power sets only come from finite base sets."
      },
      {
        q: "Cantor's diagonalization proves R is uncountable by:",
        options: ["listing all reals and counting them", "building a real whose nth digit differs from the nth listed real, so it appears nowhere on any list", "showing the rationals are uncountable", "proving every real is irrational"],
        answer: 1,
        explanation: "Given any proposed complete list, the constructed number disagrees with the nth entry at digit n, defeating every entry simultaneously — so no list is complete. The argument is constructive and applies to every candidate list."
      },
      {
        q: "The set of positive even integers 2Z⁺ satisfies:",
        options: ["|2Z⁺| < |Z⁺|, since it is a proper subset", "|2Z⁺| = |Z⁺| via the bijection n ↦ 2n", "2Z⁺ is uncountable", "2Z⁺ is finite"],
        answer: 1,
        explanation: "The map n ↦ 2n pairs every positive integer with exactly one even one — a bijection. This is Hilbert's hotel phenomenon: infinite sets can match their proper subsets, so “subset” does not mean “smaller cardinality.”"
      },
      {
        q: "To prove that two infinite sets A and B have the same cardinality, one must:",
        options: ["exhibit a bijection from A onto B", "count the elements of A and B and compare", "show that A ≠ B", "list the elements of A but not B"],
        answer: 0,
        explanation: "Same cardinality is *defined* by the existence of a one-to-one correspondence. Counting is meaningless for infinite sets, and (by Schröder–Bernstein) even a pair of injections suffices — but a plain listing or inequality does not."
      }
    ]
  },

  // ---------------------------------------------------------------- 2.6
  {
    sectionId: "rosen-ch2-s6",
    depth: [
      {
        tier: "masters",
        title: "Relations as matrices: Boolean products, paths, and semiring algebra",
        blocks: [
          {
            kind: "theorem",
            heading: "Composition of relations",
            body: "Let $R \\subseteq X \\times Y$ and $S \\subseteq Y \\times Z$ be relations, encoded by zero-one matrices $M_R$ and $M_S$. Then the composite relation $S \\circ R = \\{(x, z) : \\exists y \\in Y\\ (x R y \\wedge y S z)\\}$ has matrix $$M_{S \\circ R} = M_S \\odot M_R.$$ Likewise $M_{R \\cup S} = M_R \\vee M_S$ and $M_{R \\cap S} = M_R \\wedge M_S$ wherever the shapes agree: the entire calculus of relations is matrix algebra over the Boolean semiring, and this section's Boolean product is not an analogy but the composition operation itself."
          },
          {
            kind: "proof",
            body: "Index $X = \\{x_1, x_2, \\ldots\\}$, $Y = \\{y_1, y_2, \\ldots\\}$, $Z = \\{z_1, z_2, \\ldots\\}$. Entry $(i, j)$ of $M_S \\odot M_R$ is, by the definition of Boolean product, $$\\bigvee_{k} \\big( (M_R)_{ik} \\wedge (M_S)_{kj} \\big),$$ which reads: *some* $k$ with $x_i R y_k$ and $y_k S z_j$ — precisely the definition of $(x_i, z_j) \\in S \\circ R$, quantifier for quantifier. The join and meet rules are immediate, since membership in a union or intersection is the disjunction or conjunction of memberships. Two remarks ride along. First, the index reversal — $M_S \\odot M_R$, not $M_R \\odot M_S$ — matches function composition $g \\circ f$ and mirrors $(AB)^t = B^t A^t$: whatever acts first sits rightmost. Second, ordinary matrix multiplication over $\\mathbb{N}$ computes the **number** of intermediate witnesses $y$ connecting $x$ to $z$, and the Boolean product merely thresholds that count at one — detecting paths and counting paths are the same computation with a different arithmetic."
          },
          {
            kind: "theorem",
            heading: "Boolean powers and reachability",
            body: "Let $A$ be the zero-one adjacency matrix of a finite directed graph on $n$ vertices, and let $A^{[k]}$ denote its $k$-fold Boolean product with $A^{[0]} = I_n$. Then the $(i, j)$ entry of $A^{[k]}$ is 1 if and only if there is a directed walk of exactly $k$ edges from vertex $i$ to vertex $j$. Consequently the reachability relation — the reflexive-transitive closure of the edge relation — has matrix $$I \\vee A \\vee A^{[2]} \\vee \\cdots \\vee A^{[n-1]},$$ and powers beyond $n - 1$ add nothing."
          },
          {
            kind: "proof",
            body: "Induction on $k$. For $k = 0$: $A^{[0]} = I$ records exactly the trivial walks, each vertex to itself using no edges. For the inductive step: a walk of length $k + 1$ from $i$ to $j$ is a walk of length $k$ from $i$ to some vertex $v$ followed by an edge $v \\to j$; conversely, any such pair concatenates. So length-$(k+1)$ walks from $i$ to $j$ exist if and only if some $v$ admits a length-$k$ walk from $i$ and an edge to $j$ — exactly the $(i, j)$ entry of $A^{[k]} \\odot A = A^{[k+1]}$, by the composition theorem just proved. For the closure: any walk from $i$ to $j$ whose length reaches $n$ must revisit some vertex; deleting the portion of the walk between the two visits shortens it while preserving the endpoints. Hence if any walk exists then a *simple* walk exists, and a simple walk visits at most $n$ vertices, so uses at most $n - 1$ edges — the join stabilizes by the $(n-1)$-st power, and its entries say exactly: reachable or not. Warshall's algorithm computes this same closure in $O(n^3)$ steps by admitting one intermediate vertex at a time — dynamic programming over the semiring."
          },
          {
            kind: "derivation",
            heading: "Invertibility over rings and fields",
            body: "The determinant decides invertibility, and the reason is a polynomial identity valid over **any commutative ring**. Define the **adjugate** of an $n \\times n$ matrix $A$ by $\\operatorname{adj}(A)_{ij} = (-1)^{i+j} \\det A^{(j,i)}$, where $A^{(j,i)}$ is $A$ with row $j$ and column $i$ deleted. Then $$A \\cdot \\operatorname{adj}(A) = \\operatorname{adj}(A) \\cdot A = \\det(A) \\cdot I_n.$$ The diagonal entries of the product are the Laplace expansions of $\\det A$ along each row; the off-diagonal entries are expansions of matrices with two equal rows, hence zero. Reading consequences off the identity: over a commutative ring $R$, the matrix $A$ is invertible if and only if $\\det A$ is a **unit** — if $\\det A$ divides 1, then $(\\det A)^{-1} \\operatorname{adj}(A)$ is a genuine inverse with entries in $R$; conversely $1 = \\det(A A^{-1}) = \\det A \\cdot \\det A^{-1}$ exhibits an inverse of $\\det A$. Over a **field** every nonzero element is a unit, so invertible collapses to $\\det A \\ne 0$ — the familiar criterion is the field-special case of the ring theorem. Over $\\mathbb{Z}$: the diagonal matrix with 2s on the diagonal has determinant 4, not a unit, so it is invertible over $\\mathbb{Q}$ but not over $\\mathbb{Z}$. And for *square* matrices over a field, a one-sided inverse is two-sided: $AB = I$ makes the linear map $x \\mapsto Ax$ surjective, since every $y$ is $A(By)$; a surjective endomorphism of a finite-dimensional space is bijective, so $A^{-1}$ exists and $B = A^{-1}(AB) = A^{-1}$. The finite dimension is essential: on infinite sequences the shift $S(x_1, x_2, \\ldots) = (0, x_1, x_2, \\ldots)$ satisfies $TS = I$ but $ST \\ne I$."
          },
          {
            kind: "remark",
            body: "Nothing in the path-counting theorem used subtraction. The entire construction — join, meet, Boolean product, powers, the reachability closure — lives in a **semiring** $(S, \\oplus, \\otimes, 0, 1)$: two monoids tied together by distributivity. Instantiate $(\\oplus, \\otimes) = (\\vee, \\wedge)$ and you get this section's Boolean algebra of relations; $(+, \\times)$ over $\\mathbb{N}$ counts walks of each length; $(\\min, +)$ makes the very same matrix equations compute **shortest paths** — Floyd–Warshall is Gaussian elimination over the min-plus semiring; $(\\max, +)$ yields the tropical algebra of the research tier. One theorem, many algebras: choose the semiring, and the matrix machinery answers a different combinatorial question."
          }
        ]
      },
      {
        tier: "phd",
        title: "Tropical algebra, random matrices, and the field with one element",
        blocks: [
          {
            kind: "para",
            body: "**Tropical algebra** works over the semiring $(\\mathbb{R} \\cup \\{-\\infty\\}, \\oplus, \\otimes)$ with $a \\oplus b = \\max(a, b)$ and $a \\otimes b = a + b$. As $q \\to 0^{+}$, the map $x \\mapsto q^x$ dequantizes ordinary algebra into tropical — $q^x + q^y \\approx q^{\\max(x, y)}$ turns sums into maxima (Maslov dequantization) — so tropical geometry is the logarithmic limit of classical algebra, piecewise-linear in the limit. A tropical linear map $x \\mapsto A \\otimes x$ is a finite maximum of affine functions; tropical matrix multiplication iterates longest-path computations; and the **tropical eigenvalue** of a matrix is the maximum **cycle mean** $$\\lambda = \\max_{\\text{cycles } C} \\frac{w(C)}{|C|}$$ of the weighted digraph — the steady-state throughput of a factory or rail network in the discrete-event systems of Baccelli, Cohen, Olsder and Quadrat. The **tropical determinant** $\\bigoplus_\\sigma \\bigotimes_i a_{i\\sigma(i)}$ is the **assignment problem**: the best perfect matching is a determinant computation, and tropical Cramer rules are an active field. Tropical geometry proper — the piecewise-linear shadows of algebraic varieties — rewrote parts of enumerative geometry after Mikhalkin used tropicalization to count curves."
          },
          {
            kind: "application",
            heading: "The billion-dollar eigenvector",
            body: "Rank the web by its dominant eigenvector. Model browsing as a random walk on the link graph: from each page follow a random outgoing link with probability $\\alpha$, or teleport to a uniformly random page with probability $1 - \\alpha$. The stationary distribution of this walk is the **PageRank** (Brin and Page, 1998). The mathematics is **Perron–Frobenius**: a matrix with strictly positive entries has a unique eigenvalue of maximal modulus, real and positive, with a strictly positive eigenvector; more generally an irreducible aperiodic nonnegative matrix has a unique nonnegative stationary vector up to scale. The teleportation term is not a user-experience nicety — it makes the Google matrix **positive**, hence primitive, which is exactly what Perron–Frobenius needs to guarantee a *unique* ranking. Computation is the **power method**, $v \\leftarrow Gv$, converging geometrically at the rate set by the two largest eigenvalues; because $G$ is sparse, an iteration costs one sweep of the link structure, and a few dozen iterations ranked the web of a billion pages on 1998 hardware. Linear algebra decides which pages you see first: this section's matrix multiplication, iterated until the eigenvector emerges."
          },
          {
            kind: "application",
            heading: "Random matrices: compressed sensing",
            body: "Randomness makes underdetermined systems solvable. **Johnson–Lindenstrauss (1984)**: any $n$ points in Euclidean space can be mapped by a random linear map into $O(\\log n)$ dimensions with all pairwise distances preserved within a factor $1 \\pm \\varepsilon$ — random projection is the workhorse of dimensionality reduction, sketching, and approximate nearest-neighbor search. **Compressed sensing** (Candès, Romberg and Tao; Donoho; 2006): a signal that is $k$-sparse in a known basis — $k$ nonzero coefficients out of $n$ — can be recovered from merely $m \\approx k \\log(n/k)$ random linear measurements by $\\ell_1$-minimization, because a random $m \\times n$ matrix satisfies the **restricted isometry property** with high probability: it approximately preserves the geometry of all sparse vectors at once. The practical wins are enormous: MRI reconstructs from fewer measurements, so scans shorten; single-pixel cameras sample directly in the compressed domain; radar and tomography pipelines restructured around sparsity. In machine learning the same random-matrix calculus prices neural networks: random initialization preserves separation in the Johnson–Lindenstrauss sense, and the Marchenko–Pastur law describes the bulk spectrum of random weight matrices. The random matrix is at once the sensor and the model."
          },
          {
            kind: "open",
            heading: "The field with one element",
            body: "There is no field with one element — the field axioms demand $0 \\ne 1$ — yet large parts of mathematics behave as if $\\mathbb{F}_1$ existed, and the quest to define it is a live program. Tits (1957) observed that the Weyl group of $\\mathrm{GL}_n$ is what remains of $\\mathrm{GL}_n(\\mathbb{F}_q)$ as $q \\to 1$: the group 'over the field with one element' should satisfy $\\mathrm{GL}_n(\\mathbb{F}_1) = S_n$. The counting evidence is seductive: $|\\mathrm{GL}_n(\\mathbb{F}_q)| = q^{n(n-1)/2} \\prod_{i=1}^{n} (q^i - 1)$, and dividing out the diagonal torus $(q - 1)^n$ before letting $q \\to 1$ leaves exactly $n!$. Since then Soule has built varieties over $\\mathbb{F}_1$, Connes and Consani have pursued topos-theoretic and arithmetic-geometric routes linking it to the Riemann hypothesis through absolute zeta functions, and Lorscheid's blueprints axiomatize the common structure — while matroids behave like vector spaces over $\\mathbb{F}_1$, a vector space over it being nothing but a pointed set. Open in earnest: is there a *canonical* $\\mathbb{F}_1$-geometry under which the deep analogies — Weil conjectures, Riemann hypothesis, motives — become theorems? The field that does not exist remains one of the most productive fictions in modern mathematics."
          }
        ]
      }
    ],
    readingTime: 7,
    intro: "Matrices package tables of numbers into a single algebraic object: they represent linear transformations, graphs (Chapter 9), networks, and — in the zero-one case — relations and connectivity. This section covers matrix arithmetic, transposes and the Boolean product that powers reachability computations.",
    objectives: [
      "Perform matrix addition, scalar multiplication and matrix multiplication",
      "Use identity and symmetric matrices correctly",
      "Compute transposes and apply (AB)ᵗ = BᵗAᵗ",
      "Compute the join, meet and Boolean product of zero-one matrices"
    ],
    concepts: [
      {
        term: "Matrices",
        kind: "definition",
        statement: "An **m × n matrix** is a rectangular array with m rows and n columns; the entry in row i, column j is aᵢⱼ. A matrix with equal numbers of rows and columns is **square**. Two matrices are equal iff they have the same dimensions and identical entries.",
        detail: "Matrices index by (row, column) in that order — aᵢⱼ lives at the crossing of row i and column j. They will represent relations (Chapter 9), graph adjacency (Chapter 10) and linear systems; here you learn their arithmetic."
      },
      {
        term: "Matrix addition and scalar multiplication",
        kind: "definition",
        statement: "For matrices A, B of the **same** m × n shape: (A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ (add entrywise). For a scalar c: (cA)ᵢⱼ = c·aᵢⱼ. The m × n zero matrix (all entries 0) is the additive identity.",
        detail: "Addition is commutative and associative, but only defined for matching shapes — a 2 × 3 matrix cannot be added to a 3 × 2 one. Entrywise operations are the easy ones; the interesting one comes next."
      },
      {
        term: "Matrix multiplication",
        kind: "definition",
        statement: "For A of size m × n and B of size n × r, the product AB is the m × r matrix with (AB)ᵢⱼ = ∑ₖ aᵢₖ bₖⱼ — row i of A dotted with column j of B. The inner dimensions must agree; multiplication is associative and distributive but **not commutative**.",
        detail: "Row-times-column is the chant: the (i, j) entry pairs the kth entry of row i with the kth entry of column j and sums. AB requires “columns of A = rows of B”: a 2 × 3 times a 3 × 4 gives a 2 × 4. Even when both AB and BA exist they usually differ."
      },
      {
        term: "The identity matrix",
        kind: "definition",
        statement: "**Iₙ** is the n × n matrix with 1's on the diagonal and 0's elsewhere: (Iₙ)ᵢⱼ = 1 if i = j, else 0. For any m × n matrix A: A·Iₙ = A = Iₘ·A.",
        detail: "Iₙ is the multiplicative identity for matrices — it corresponds to the “do nothing” transformation. It is the matrix analogue of the number 1."
      },
      {
        term: "Transpose",
        kind: "definition",
        statement: "The **transpose** Aᵗ is the matrix with rows and columns swapped: (Aᵗ)ᵢⱼ = aⱼᵢ. If A is m × n then Aᵗ is n × m. Key identities: (Aᵗ)ᵗ = A, (A + B)ᵗ = Aᵗ + Bᵗ and **(AB)ᵗ = BᵗAᵗ** — note the reversal.",
        detail: "Transposing reflects entries across the main diagonal. The reversal in (AB)ᵗ = BᵗAᵗ is the algebraic shadow of “row i of A meets column j of B”: after transposing, the roles and order swap."
      },
      {
        term: "Symmetric matrices",
        kind: "definition",
        statement: "A square matrix A is **symmetric** when A = Aᵗ, i.e., aᵢⱼ = aⱼᵢ for all i, j. The sum of two symmetric matrices (of the same size) is symmetric, and (A + Aᵗ) is always symmetric.",
        detail: "Caution: the product of two symmetric matrices need not be symmetric — (AB)ᵗ = BᵗAᵗ = BA, which differs from AB in general. Symmetric zero-one matrices encode undirected relations and graphs in later chapters."
      },
      {
        term: "Zero-one matrices",
        kind: "definition",
        statement: "A **zero-one matrix** has every entry 0 or 1. They encode discrete structures: membership grids, adjacency, connectivity. Two special entrywise operations: the **join** A ∨ B (entrywise max/OR) and the **meet** A ∧ B (entrywise min/AND).",
        detail: "Join and meet parallel ∪ and ∩ for sets and ∨ and ∧ for propositions: (A ∨ B)ᵢⱼ = aᵢⱼ ∨ bᵢⱼ, (A ∧ B)ᵢⱼ = aᵢⱼ ∧ bᵢⱼ. This is Boolean arithmetic on tables — one of the three worlds (sets, logic, matrices) that mirror each other."
      },
      {
        term: "Boolean product and Boolean powers",
        kind: "definition",
        statement: "The **Boolean product** of zero-one matrices is matrix multiplication with OR in place of + and AND in place of ×: (A ⊙ B)ᵢⱼ = 1 iff ∃k (aᵢₖ = 1 ∧ bₖⱼ = 1). The **Boolean power** $A^{[n]} = A \\odot A \\odot \\cdots \\odot A$ (n factors).",
        detail: "Computing one entry: scan row i of A and column j of B in parallel; the entry is 1 the moment a pair of 1's aligns, else 0. When A is the adjacency matrix of a graph, $A^{[n]}$'s (i, j) entry records whether a path of length n exists from i to j — the bridge to Chapters 9 and 10."
      }
    ],
    examples: [
      {
        title: "Matrix multiplication is not commutative",
        problem: "With A = [[1, 2], [3, 4]] and B = [[0, 1], [1, 0]], compute AB and BA.",
        steps: [
          { label: "Step 1: Compute AB row by row", text: "Row 1: (1·0 + 2·1, 1·1 + 2·0) = (2, 1). Row 2: (3·0 + 4·1, 3·1 + 4·0) = (4, 3). So AB = [[2, 1], [4, 3]]." },
          { label: "Step 2: Compute BA", text: "Row 1: (0·1 + 1·3, 0·2 + 1·4) = (3, 4). Row 2: (1·1 + 0·3, 1·2 + 0·4) = (1, 2). So BA = [[3, 4], [1, 2]]." },
          { label: "Step 3: Compare", text: "AB ≠ BA — the (1,1) entries alone (2 vs 3) differ." }
        ],
        result: "Both products exist yet disagree: matrix multiplication is order-sensitive, so “AB” and “BA” must never be casually interchanged."
      },
      {
        title: "Transposes and symmetry",
        problem: "For A = [[1, 2], [3, 4]], compute Aᵗ and A + Aᵗ, and verify that the result is symmetric.",
        steps: [
          { label: "Step 1: Swap rows and columns", text: "Aᵗ = [[1, 3], [2, 4]] — entry (1,2) of A (which is 2) moves to (2,1)." },
          { label: "Step 2: Add", text: "A + Aᵗ = [[2, 5], [5, 8]]." },
          { label: "Step 3: Check symmetry", text: "The off-diagonal entries agree (5 = 5), so (A + Aᵗ)ᵗ = A + Aᵗ." },
          { label: "Step 4: Note the general fact", text: "This always works: ((A + Aᵗ)ᵗ) = Aᵗ + (Aᵗ)ᵗ = Aᵗ + A = A + Aᵗ." }
        ],
        result: "A + Aᵗ is always symmetric — a standard trick for symmetrizing a matrix; note that A itself is not symmetric (2 ≠ 3 off-diagonal)."
      },
      {
        title: "Boolean product of zero-one matrices",
        problem: "Compute the Boolean product A ⊙ B for A = [[1, 1, 0], [0, 1, 1]] and B = [[1, 0], [0, 1], [1, 1]].",
        steps: [
          { label: "Step 1: Entry (1,1)", text: "Row 1 of A is (1,1,0), column 1 of B is (1,0,1): aligned pairs (1,1), (1,0), (0,1) — the first pair is (1,1), so OR of ANDs = 1." },
          { label: "Step 2: Entry (1,2)", text: "Column 2 of B is (0,1,1): pairs (1,0), (1,1), (0,1) — the pair (1,1) appears, so entry = 1." },
          { label: "Step 3: Entries (2,1) and (2,2)", text: "Row 2 of A is (0,1,1): against column 1 the pair (1,1) at k = 2 gives 1; against column 2 the pair (1,1) at k = 2 gives 1." },
          { label: "Step 4: Assemble", text: "A ⊙ B = [[1, 1], [1, 1]]." }
        ],
        result: "The Boolean product is all 1's: every row of A has at least one aligned 1 with every column of B. Contrast ordinary multiplication of the same matrices, which would produce a different, larger-valued matrix."
      }
    ],
    keyTakeaways: [
      "Matrix addition requires equal shapes and is entrywise; multiplication requires matching inner dimensions and is row-times-column.",
      "(AB)ᵢⱼ = ∑ₖ aᵢₖbₖⱼ; a 2×3 times a 3×4 yields a 2×4.",
      "Multiplication is associative but not commutative; the identity Iₙ has 1's on the diagonal.",
      "(AB)ᵗ = BᵗAᵗ — the order reverses; A is symmetric iff A = Aᵗ.",
      "Zero-one matrices use join ∨ (OR) and meet ∧ (AND) entrywise.",
      "Boolean product A ⊙ B replaces × by ∧ and + by ∨; its powers count paths in graphs — the gateway to Chapters 9 and 10."
    ],
    quiz: [
      {
        q: "(AB)ᵗ equals:",
        options: ["BᵗAᵗ", "AᵗBᵗ", "AB", "BA"],
        answer: 0,
        explanation: "Transposing a product reverses the order: (AB)ᵗ = BᵗAᵗ. Computing AᵗBᵗ instead generally gives a different (and often differently-shaped) matrix."
      },
      {
        q: "If A is a 2 × 3 matrix and B is a 3 × 4 matrix, then AB is:",
        options: ["a 2 × 4 matrix", "a 4 × 2 matrix", "a 3 × 3 matrix", "undefined"],
        answer: 0,
        explanation: "The shared inner dimension 3 cancels; the product takes the outer dimensions: 2 × 4. (BA would be undefined, since 4 ≠ 2.)"
      },
      {
        q: "In the Boolean product A ⊙ B, the entry (i, j) is 1 exactly when:",
        options: ["every product aᵢₖbₖⱼ equals 1", "at least one k has aᵢₖ = 1 and bₖⱼ = 1", "the rows of A equal the columns of B", "i = j"],
        answer: 1,
        explanation: "Boolean product is OR-of-ANDs: entry (i, j) is 1 iff some position k has 1's aligned in row i of A and column j of B — exactly one matching pair suffices."
      },
      {
        q: "A square matrix A is symmetric when:",
        options: ["A = Aᵗ", "A = −Aᵗ", "all entries are 0 or 1", "A² = I"],
        answer: 0,
        explanation: "Symmetry means the matrix mirrors across its main diagonal: aᵢⱼ = aⱼᵢ for all i, j. Zero-one entries define a different (Boolean) world, and A² = I is a separate involutive property."
      },
      // PYQ-pattern: GATE 2013 — Boolean product of zero-one matrices (rephrased, values changed)
      {
        q: "Let $A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ be zero-one matrices. The Boolean product $A \\odot B$ equals:",
        options: ["$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$", "$\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$", "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$", "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$"],
        answer: 2,
        explanation: "Step 1: Restate the task as computing the **Boolean product** $C = A \\odot B$ where $c_{ij} = \\bigvee_{k}(a_{ik} \\land b_{kj})$. Step 2: Recall the key rule that each entry is $1$ exactly when some position $k$ has $1$ in both row $i$ of $A$ and column $j$ of $B$. Step 3: Compute row $1$: with column $1$ we get $(1 \\land 1) \\lor (0 \\land 0) \\lor (1 \\land 1) = 1$, and with column $2$ we get $(1 \\land 0) \\lor (0 \\land 1) \\lor (1 \\land 0) = 0$. Step 4: Compute row $2$: with column $1$ we get $(0 \\land 1) \\lor (1 \\land 0) \\lor (0 \\land 1) = 0$, and with column $2$ we get $(0 \\land 0) \\lor (1 \\land 1) \\lor (0 \\land 0) = 1$. Step 5: The all-ones option confuses Boolean product with join, the anti-diagonal option swaps the columns, and the zero option forgets that matching $1$ pairs already exist. Step 6: Hence $C$ is the $2 \\times 2$ identity matrix."
      },
      // PYQ-pattern: GATE 2017 — counting symmetric zero-one matrices (rephrased, values changed)
      {
        q: "How many symmetric $3 \\times 3$ zero-one matrices are there?",
        options: ["$64$", "$512$", "$8$", "$6$"],
        answer: 0,
        explanation: "Step 1: Restate the task as counting binary choices subject to the symmetry constraint $a_{ij} = a_{ji}$. Step 2: Recall the key structural fact that a symmetric matrix is fixed by its diagonal plus its strictly upper triangle. Step 3: Count free positions as $3$ diagonal entries plus $\\frac{3 \\times 2}{2} = 3$ upper-triangular entries, giving $6$ independent bits. Step 4: Each independent bit has $2$ choices, so the total is $2^{6} = 64$. Step 5: The distractor $512 = 2^{9}$ counts all $3 \\times 3$ zero-one matrices ignoring symmetry, $8 = 2^{3}$ counts only diagonal freedom, and $6$ counts positions rather than assignments. Step 6: Therefore the symmetric family has $64$ members."
      }
    ]
  }
]
