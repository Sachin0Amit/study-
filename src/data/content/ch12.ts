import type { SectionContent } from '../library'

// Master content — Rosen, Discrete Mathematics and Its Applications (8th ed.)
// Chapter 12: Boolean Algebra (Sections 12.1–12.4)
export const ch12Content: SectionContent[] = [
  // ================= 12.1 Boolean Functions =================
  {
    sectionId: "rosen-ch12-s1",
    readingTime: 10,
    intro: "Every digital device you own — a phone, a laptop, a microwave — is at bottom an engine for evaluating functions whose inputs and outputs are just 0s and 1s. Boolean algebra is the mathematics of those functions: a small algebra with surprisingly deep structure. Mastering its identities here is what makes circuit design and minimization in the rest of the chapter possible.",
    objectives: [
      "Define Boolean functions Bⁿ → B, represent them with tables, and count how many exist",
      "Read and write Boolean expressions built with the operations +, · and ′",
      "See the two-element Boolean algebra as a complemented distributive lattice",
      "State and apply the Boolean identities: identity, domination, idempotent, complement, De Morgan and absorption",
      "Use the duality principle to obtain new identities for free",
    ],
    concepts: [
      {
        term: "Boolean function",
        kind: "definition",
        statement: "A **Boolean function** of degree n is a function f : Bⁿ → B, where B = {0, 1}: it assigns exactly one bit to every list of n input bits.",
        detail: "Bⁿ contains 2ⁿ input tuples and each may map to 0 or 1, so there are $2^{2^{n}}$ distinct Boolean functions of n variables: 4 for n = 1, 16 for n = 2, 256 for n = 3. A Boolean function is completely specified by a table with one row per input tuple.",
      },
      {
        term: "Boolean expressions",
        kind: "definition",
        statement: "**Boolean expressions** in the variables x₁, …, xₙ are defined recursively: 0, 1, x₁, …, xₙ are Boolean expressions, and whenever E and F are Boolean expressions, so are (E + F), (E · F) and (E)′. Each Boolean expression represents (evaluates to) a Boolean function.",
        detail: "Evaluation follows the operation tables: x + y = 1 unless both inputs are 0; x · y = 1 only when both inputs are 1; x′ flips the bit. Two expressions are equivalent exactly when they define the same function on every input.",
      },
      {
        term: "The two-element Boolean algebra",
        kind: "insight",
        statement: "The structure ({0, 1}, +, ·, ′) — Boolean sum, Boolean product, complement — is a **complemented distributive lattice** with least element 0, greatest element 1, and every element having a complement.",
        detail: "This is propositional logic in disguise: 1 = true, 0 = false, + is ∨, · is ∧, ′ is ¬. Abstractly, a Boolean algebra is any set with operations satisfying the identity, complementation and distributive laws; the two-element algebra is the smallest nontrivial one, and it is the one digital circuits implement.",
      },
      {
        term: "Identity and domination laws",
        kind: "law",
        statement: "**Identity laws**: x + 0 = x and x · 1 = x. **Domination laws**: x + 1 = 1 and x · 0 = 0.",
        detail: "0 is the identity for + and 1 is the identity for ·. The domination laws have no analogue in ordinary arithmetic: OR-ing with 1 swallows everything, and AND-ing with 0 erases everything.",
      },
      {
        term: "Idempotent laws",
        kind: "law",
        statement: "**Idempotent laws**: x + x = x and x · x = x.",
        detail: "Check with the tables: 1 + 1 = 1 and 0 + 0 = 0, and similarly for the product. Repeating an input changes nothing — which is why duplicate literals can always be deleted.",
      },
      {
        term: "Complement laws",
        kind: "law",
        statement: "**Complement laws**: x + x′ = 1 and x · x′ = 0, together with 0′ = 1, 1′ = 0, and the involution law (x′)′ = x.",
        detail: "An element and its complement join to the top (1) and meet to the bottom (0). Involution says complementing twice returns the original value — the Boolean analogue of double negation.",
      },
      {
        term: "De Morgan's laws (Boolean algebra)",
        kind: "law",
        statement: "**De Morgan's laws**: (x + y)′ = x′ · y′ and (x · y)′ = x′ + y′.",
        detail: "The complement of a sum is the product of complements, and vice versa. These identities are exactly what makes NAND and NOR functionally complete in Section 12.2.",
      },
      {
        term: "Absorption laws",
        kind: "law",
        statement: "**Absorption laws**: x + x · y = x and x · (x + y) = x.",
        detail: "Proof of the first: x + xy = x · 1 + xy = x(1 + y) = x · 1 = x, using identity, distributivity, domination and identity again. Absorption is the identity silently at work when Karnaugh-map groups swallow redundant minterms in Section 12.4.",
      },
      {
        term: "Principle of duality",
        kind: "theorem",
        statement: "The **dual** of a Boolean identity is obtained by interchanging the operations + and · and interchanging the constants 0 and 1 throughout; the dual of every valid identity is also valid.",
        detail: "The dual of x + 0 = x is x · 1 = x; the dual of (x + y)′ = x′y′ is (xy)′ = x′ + y′. Duality halves what you must memorize: every identity on the list comes as a matched pair.",
      },
    ],
    examples: [
      {
        title: "Evaluating a Boolean expression",
        problem: "Evaluate the Boolean function F(x, y, z) = x + y′ · z at the inputs (1, 0, 1) and (0, 1, 1).",
        steps: [
          { label: "Compute the complement", text: "At (1, 0, 1): y = 0, so y′ = 1. At (0, 1, 1): y = 1, so y′ = 0." },
          { label: "Compute the product", text: "First input: y′ · z = 1 · 1 = 1. Second input: y′ · z = 0 · 1 = 0." },
          { label: "Compute the sum", text: "First input: x + 1 = 1 by the domination law. Second input: x + 0 = 0 by the identity law." },
        ],
        result: "F(1, 0, 1) = 1 and F(0, 1, 1) = 0 — exactly what a truth-table row-by-row evaluation would give, treating +, ·, ′ as ∨, ∧, ¬.",
      },
      {
        title: "Verifying an identity with a table",
        problem: "Verify the absorption law x + x · y = x by evaluating both sides on all four inputs.",
        steps: [
          { label: "List the rows", text: "The four inputs are (x, y) = (0,0), (0,1), (1,0), (1,1)." },
          { label: "Compute x · y", text: "The products are 0, 0, 0, 1 respectively." },
          { label: "Compute x + xy", text: "Row (0,0): 0 + 0 = 0 = x. Row (0,1): 0 + 0 = 0 = x. Row (1,0): 1 + 0 = 1 = x. Row (1,1): 1 + 1 = 1 = x." },
        ],
        result: "The columns for x and for x + xy agree on every row, so the identity holds — a proof by exhaustion over B².",
      },
      {
        title: "A purely algebraic simplification",
        problem: "Use Boolean identities to prove the useful simplification x + x′ · y = x + y.",
        steps: [
          { label: "Apply distributivity of + over ·", text: "x + x′y = (x + x′) · (x + y)." },
          { label: "Apply the complement law", text: "x + x′ = 1, so the expression equals 1 · (x + y)." },
          { label: "Apply the identity law", text: "1 · (x + y) = x + y." },
        ],
        result: "x + x′y = x + y — a literal saving that a circuit would otherwise pay for in extra gates.",
      },
    ],
    keyTakeaways: [
      "A Boolean function f : Bⁿ → B assigns a bit to each n-bit input; there are $2^{2^{n}}$ such functions.",
      "Boolean expressions are built from 0, 1 and variables using + (OR), · (AND) and ′ (NOT); each expression denotes one Boolean function.",
      "The identities — identity, domination, idempotent, complement, De Morgan and absorption — form the complete toolkit for simplifying expressions.",
      "Every identity has a dual (swap + with · and 0 with 1), and the dual is automatically true.",
      "Boolean algebra is a complemented distributive lattice; it matches propositional logic with 1 = true, 0 = false.",
      "These pencil-and-paper simplifications preview the systematic methods of Section 12.4.",
    ],
    quiz: [
      {
        q: "How many different Boolean functions of two variables are there?",
        options: ["4", "8", "16", "32"],
        answer: 2,
        explanation: "There are 2² = 4 input rows, and each row's output can independently be 0 or 1, giving 2⁴ = 16 functions.",
      },
      {
        q: "The dual of the identity x + 1 = 1 is:",
        options: ["x · 0 = 0", "x · 1 = x", "x + 0 = x", "x · x = x"],
        answer: 0,
        explanation: "Duality swaps + with · and 0 with 1: x + 1 = 1 becomes x · 0 = 0, which is indeed the dual domination law.",
      },
      {
        q: "Simplify x · (x + y).",
        options: ["x", "y", "x + y", "xy"],
        answer: 0,
        explanation: "By the absorption law, x · (x + y) = x — the factor (x + y) is absorbed.",
      },
      {
        q: "By De Morgan's laws, (x + y′)′ equals:",
        options: ["x′ + y", "x′ · y", "x · y′", "(x · y)′"],
        answer: 1,
        explanation: "The complement of a sum is the product of complements: (x + y′)′ = x′ · (y′)′ = x′y.",
      },
    ],
  },

  // ================= 12.2 Representing Boolean Functions =================
  {
    sectionId: "rosen-ch12-s2",
    readingTime: 9,
    intro: "Knowing that every Boolean function exists is one thing; having a uniform recipe to write it down is another. The sum-of-products expansion reads a canonical expression straight off the truth table, and it proves that three operations — +, · and ′ — already suffice to build anything. Even more surprising: a single gate, NAND, is enough.",
    objectives: [
      "Build the sum-of-products expansion of any Boolean function from its table",
      "Build the product-of-sums expansion from the 0 rows of the table",
      "Define minterms and explain why each covers exactly one input row",
      "Explain functional completeness and verify that {+, ·, ′} qualifies",
      "Show that NAND alone and NOR alone are each functionally complete",
    ],
    concepts: [
      {
        term: "Minterms",
        kind: "definition",
        statement: "A **minterm** in the variables x₁, …, xₙ is a Boolean product y₁y₂…yₙ in which each variable appears exactly once, either uncomplemented (yᵢ = xᵢ) or complemented (yᵢ = xᵢ′).",
        detail: "A minterm equals 1 on exactly one of the 2ⁿ input rows — the row whose bit pattern matches its pattern of complements — and 0 on every other row. There are exactly 2ⁿ minterms in n variables.",
      },
      {
        term: "Sum-of-products expansion",
        kind: "method",
        statement: "The **sum-of-products expansion** (disjunctive normal form) of a Boolean function F is the Boolean sum of all minterms m such that F = 1 on the row where m = 1.",
        detail: "Recipe: for each row of the table where F = 1, write the minterm that is 1 on that row, then OR them all together. The expansion is unique — a canonical fingerprint of the function.",
      },
      {
        term: "Every function has an SOP expansion",
        kind: "theorem",
        statement: "Every Boolean function can be represented by a Boolean expression using only the operations +, · and ′ — namely, its sum-of-products expansion.",
        detail: "This is the theorem that makes digital logic possible: no matter what a function's table says, a circuit built from AND, OR and NOT gates computes it. Equivalently, the set {∨, ∧, ¬} is functionally complete.",
      },
      {
        term: "Product-of-sums expansion",
        kind: "method",
        statement: "The **product-of-sums expansion** of F is the product of sums formed from the rows where F = 0: in the sum for such a row, variable xᵢ appears uncomplemented if the row holds 0 in position i, and complemented if it holds 1. The product equals 0 exactly on those rows, hence equals F.",
        detail: "This is the dual construction to the SOP: cover the 0 rows with sums instead of covering the 1 rows with products. Some functions are much shorter in one form than the other.",
      },
      {
        term: "Functional completeness",
        kind: "definition",
        statement: "A set of Boolean operations is **functionally complete** if every Boolean function can be represented using only the operations in the set.",
        detail: "By the SOP theorem, {+, ·, ′} is functionally complete. The interesting question is how much smaller a complete set can be — the answer, remarkably, is a single operation.",
      },
      {
        term: "{↑} (NAND alone) is functionally complete",
        kind: "theorem",
        statement: "The single operation ↑ (NAND) is functionally complete, because x′ = x ↑ x, x · y = (x ↑ y) ↑ (x ↑ y), and x + y = (x ↑ x) ↑ (y ↑ y).",
        detail: "Any expression in +, · and ′ can be mechanically rewritten using only ↑ via these three identities, so NAND gates alone can build any circuit.",
      },
      {
        term: "{↓} (NOR alone) is functionally complete",
        kind: "theorem",
        statement: "The single operation ↓ (NOR) is functionally complete, because x′ = x ↓ x, x + y = (x ↓ y) ↓ (x ↓ y), and x · y = (x ↓ x) ↓ (y ↓ y).",
        detail: "This is why entire chips can be fabricated from one gate type; the Apollo Guidance Computer was famously built almost entirely from 3-input NOR gates.",
      },
      {
        term: "When a set is NOT functionally complete",
        kind: "insight",
        statement: "{+, ·} without complement is **not** functionally complete: any expression using only + and · evaluates to 1 when all variables equal 1, so the function x′ (which is 0 there) can never be expressed.",
        detail: "Likewise {′} alone can only produce a variable or its complement. Completeness needs an AND-like way to select rows plus some way to invert.",
      },
      {
        term: "Canonical is not minimal",
        kind: "insight",
        statement: "The sum-of-products expansion always exists but is generally far from the smallest representation: the majority function needs four 3-literal minterms as its SOP, yet equals xy + xz + yz.",
        detail: "Canonical forms are for existence proofs and unique fingerprints; Section 12.4 develops the machinery — Karnaugh maps and Quine–McCluskey — for finding minimal forms.",
      },
    ],
    examples: [
      {
        title: "Building the sum-of-products expansion",
        problem: "Find the sum-of-products expansion of the majority function F(x, y, z), which outputs 1 exactly when at least two of x, y, z are 1.",
        steps: [
          { label: "Tabulate", text: "F = 1 on rows (0,1,1), (1,0,1), (1,1,0), (1,1,1); F = 0 on the other four rows." },
          { label: "Write the minterm for each 1-row", text: "Row (0,1,1) gives x′yz; row (1,0,1) gives xy′z; row (1,1,0) gives xyz′; row (1,1,1) gives xyz." },
          { label: "OR them together", text: "F = x′yz + xy′z + xyz′ + xyz." },
          { label: "Sanity check", text: "Each minterm fires on exactly its own row, and the OR fires whenever at least one fires — exactly the at-least-two behavior." },
        ],
        result: "F = x′yz + xy′z + xyz′ + xyz (which Karnaugh maps will later shrink to xy + xz + yz).",
      },
      {
        title: "Building the product-of-sums expansion",
        problem: "Find the product-of-sums expansion of the same majority function F.",
        steps: [
          { label: "Identify the 0 rows", text: "F = 0 on rows (0,0,0), (0,0,1), (0,1,0), (1,0,0)." },
          { label: "Write a sum for each 0 row", text: "Row (0,0,0) gives x + y + z; row (0,0,1) gives x + y + z′; row (0,1,0) gives x + y′ + z; row (1,0,0) gives x′ + y + z. In each sum a variable is complemented exactly where the row holds a 1." },
          { label: "AND them together", text: "F = (x + y + z)(x + y + z′)(x + y′ + z)(x′ + y + z)." },
          { label: "Verify one row", text: "On input (1,0,0) the last factor x′ + y + z = 0 + 0 + 0 = 0, forcing the whole product to 0, as required." },
        ],
        result: "F = (x + y + z)(x + y + z′)(x + y′ + z)(x′ + y + z) — the dual canonical form of the majority function.",
      },
      {
        title: "Rebuilding a function from NAND alone",
        problem: "Express F(x, y, z) = xy + z′ using only the NAND operation ↑.",
        steps: [
          { label: "Rewrite the product", text: "xy = (x ↑ y) ↑ (x ↑ y), since x ↑ y = (xy)′ and double-NAND restores the original product." },
          { label: "Rewrite the complement", text: "z′ = z ↑ z." },
          { label: "Rewrite the sum", text: "Use A + B = (A ↑ A) ↑ (B ↑ B) with A = (x ↑ y) ↑ (x ↑ y) and B = z ↑ z." },
          { label: "Count the gates", text: "Wiring the formulas as a circuit with shared subcircuits takes exactly six NAND gates." },
        ],
        result: "F = (A ↑ A) ↑ (B ↑ B) with A = (x ↑ y) ↑ (x ↑ y) and B = z ↑ z: every Boolean function, this one included, is a NAND-only circuit.",
      },
    ],
    keyTakeaways: [
      "Minterms are the atoms of representation: each n-variable minterm is 1 on exactly one input row.",
      "Sum-of-products: OR the minterms of the 1 rows — every Boolean function has one, proving {+, ·, ′} functionally complete.",
      "Product-of-sums: AND the sums built from the 0 rows — the dual canonical form.",
      "NAND alone and NOR alone are each functionally complete — three identities turn one gate type into all of logic.",
      "{+, ·} without complement is not functionally complete; inversion is essential.",
      "Canonical forms prove existence but are rarely minimal — minimization is the business of Section 12.4.",
    ],
    quiz: [
      {
        q: "A minterm of three variables equals 1 on how many of the eight input rows?",
        options: ["Exactly one", "Exactly four", "All eight", "None"],
        answer: 0,
        explanation: "Its fixed pattern of complements matches exactly one row — which is what makes minterms the atoms of the SOP expansion.",
      },
      {
        q: "Which of these sets of operations is NOT functionally complete?",
        options: ["{+, ·, ′}", "{↑}", "{↓}", "{+, ·}"],
        answer: 3,
        explanation: "Without complement, every expression built from + and · equals 1 when all variables are 1, so x′ cannot be represented.",
      },
      {
        q: "The sum-of-products expansion of the function that is 1 only when x = 1 and y = 0 is:",
        options: ["xy′", "x′y", "x + y′", "(x + y)′"],
        answer: 0,
        explanation: "The unique minterm that is 1 on that row is xy′: x uncomplemented (row value 1) and y complemented (row value 0).",
      },
      {
        q: "Expressed using only the NOR operation ↓, the complement x′ is:",
        options: ["x ↓ x", "x ↓ 0", "(x ↓ x) ↓ (x ↓ x)", "It cannot be expressed with ↓ alone"],
        answer: 0,
        explanation: "x ↓ x = (x + x)′ = x′ — the NOR of a value with itself is its complement.",
      },
    ],
  },

  // ================= 12.3 Logic Gates =================
  {
    sectionId: "rosen-ch12-s3",
    readingTime: 10,
    intro: "Here Boolean algebra hits silicon. A gate is a tiny physical device that realizes one Boolean operation, and wiring gates together produces a combinational circuit — hardware that computes a Boolean function. The adder at the heart of every CPU is nothing more than a cleverly connected handful of these gates.",
    objectives: [
      "Identify the symbols and truth tables of NOT, AND, OR, NAND, NOR and XOR gates",
      "Translate a gate circuit into its Boolean function and vice versa",
      "Distinguish combinational circuits from sequential circuits",
      "Construct half adders and full adders from basic gates",
      "Appreciate gate count and depth as the cost and speed of a circuit",
    ],
    concepts: [
      {
        term: "Logic gates",
        kind: "definition",
        statement: "A **logic gate** is an electronic device that implements a Boolean operation on one or more input signals and produces one output signal. Gates are combined into **circuits** by wiring outputs to inputs.",
        detail: "By convention 1 and 0 stand for two voltage levels (high and low). The NOT gate is also called an **inverter**.",
      },
      {
        term: "NOT, AND and OR gates",
        kind: "notation",
        statement: "The **NOT gate** (inverter) outputs x′; the **AND gate** outputs x · y; the **OR gate** outputs x + y. Distinctive-shape symbols: a triangle with a bubble (NOT), a D-shaped block (AND), a curved shield (OR).",
        detail: "Multiple-input versions generalize naturally: a 3-input AND outputs 1 only when all three inputs are 1; an n-input OR outputs 1 when at least one input is 1.",
      },
      {
        term: "NAND and NOR gates",
        kind: "definition",
        statement: "The **NAND gate** outputs (x · y)′ — it is 0 only when both inputs are 1. The **NOR gate** outputs (x + y)′ — it is 1 only when both inputs are 0. Each is drawn as an AND/OR gate followed by a small inverting bubble.",
        detail: "NAND and NOR are universal (Section 12.2), so entire processors can be, and historically were, fabricated from a single gate type.",
      },
      {
        term: "XOR gate",
        kind: "definition",
        statement: "The **XOR gate** (exclusive OR) outputs x ⊕ y = x′y + xy′: it is 1 exactly when the two inputs differ.",
        detail: "XOR produces the sum bit of binary addition and is a building block of parity checks. It can be built from four NAND gates, or from two inverters, two ANDs and one OR.",
      },
      {
        term: "Combinational circuits",
        kind: "definition",
        statement: "A **combinational circuit** is an interconnection of gates in which the value of each output depends only on the current input values — a circuit with no memory and no feedback loops.",
        detail: "Every combinational circuit computes a Boolean function of its inputs; conversely, every Boolean function is computed by some combinational circuit — build its SOP expansion out of gates.",
      },
      {
        term: "Sequential circuits and memory",
        kind: "insight",
        statement: "Circuits with **feedback** (outputs looped back to inputs) are **sequential circuits**: their outputs can depend on the history of inputs, not just current values.",
        detail: "Feedback loops create bistable elements — latches and flip-flops — that store bits, the origin of computer memory. Analyzing them requires state-based models like the finite-state machines of Chapter 13; this chapter restricts itself to combinational logic.",
      },
      {
        term: "Circuits ↔ Boolean functions",
        kind: "theorem",
        statement: "Combinational circuits and Boolean functions correspond: every circuit computes the Boolean expression obtained by composing its gate operations, and every Boolean function is computed by some circuit.",
        detail: "Analyzing a circuit means writing its expression; synthesizing a circuit means wiring gates to realize an expression (the SOP expansion gives a direct, although not minimal, construction).",
      },
      {
        term: "Gate count, fan-in and depth",
        kind: "insight",
        statement: "The cost of a circuit is roughly its number of gates; its speed is limited by its **depth** — the maximum number of gates on any input-to-output path — since each gate adds propagation delay.",
        detail: "Minimizing literals (Section 12.4) reduces both. Real designs also face fan-in limits (gates with too many inputs are slow), which is why multi-level circuits are often preferred over flat SOP expressions.",
      },
      {
        term: "Half adders and full adders",
        kind: "method",
        statement: "A **half adder** adds two bits x and y, producing sum s = x ⊕ y and carry c = x · y. A **full adder** adds three bits — x, y and an incoming carry z — producing sum s = x ⊕ y ⊕ z and carry-out = xy + (x ⊕ y)z.",
        detail: "Two half adders plus an OR gate make a full adder; the XOR chain gives the sum and the ANDs give the carries — the arithmetic heart of every CPU.",
      },
    ],
    examples: [
      {
        title: "From circuit to Boolean function",
        problem: "A circuit feeds x and y through an inverter on x into an AND with y, an inverter on y into an AND with x, and both AND outputs into a final OR. What function does it compute?",
        steps: [
          { label: "Read off each gate", text: "Top branch: NOT x = x′, then x′ · y. Bottom branch: NOT y = y′, then x · y′." },
          { label: "Combine at the output gate", text: "The final OR outputs x′y + xy′." },
          { label: "Recognize the pattern", text: "x′y + xy′ is 1 exactly when x and y differ — the exclusive OR." },
        ],
        result: "The circuit computes x ⊕ y, using five gates: two inverters, two 2-input ANDs and one 2-input OR.",
      },
      {
        title: "Designing a half adder",
        problem: "Design a circuit that adds two bits x and y, producing the 2-bit answer (carry, sum).",
        steps: [
          { label: "Write the arithmetic table", text: "0 + 0 = 00, 0 + 1 = 01, 1 + 0 = 01, 1 + 1 = 10 (in binary)." },
          { label: "Match the sum bit", text: "The sum bit is 1 exactly when x and y differ: s = x′y + xy′ = x ⊕ y — one XOR gate." },
          { label: "Match the carry bit", text: "The carry bit is 1 exactly when both inputs are 1: c = xy — one AND gate." },
        ],
        result: "Half adder = one XOR gate + one AND gate, with inputs x, y and outputs s = x ⊕ y, c = xy.",
      },
      {
        title: "A full adder from half adders",
        problem: "Build a circuit that adds three bits — x, y and an incoming carry z — outputting a sum bit and a carry-out bit.",
        steps: [
          { label: "First half adder", text: "Add x and y: partial sum p = x ⊕ y and partial carry c₁ = xy." },
          { label: "Second half adder", text: "Add p and the incoming carry z: final sum s = p ⊕ z = x ⊕ y ⊕ z, second carry c₂ = pz = (x ⊕ y)z." },
          { label: "Combine the carries", text: "A carry-out occurs if either stage carried: carry-out = c₁ + c₂ = xy + (x ⊕ y)z." },
          { label: "Check the extreme case", text: "x = y = z = 1: s = 1 ⊕ 1 ⊕ 1 = 1 and carry-out = 1 + 0 = 1, i.e. 1 + 1 + 1 = 11 in binary — correct." },
        ],
        result: "A full adder = two half adders + one OR gate; chain n of them (each carry-out into the next carry-in) for an n-bit ripple-carry adder.",
      },
    ],
    keyTakeaways: [
      "Six gates cover practical logic design: NOT, AND, OR, NAND, NOR and XOR.",
      "Analyzing a circuit = composing the gate operations into one Boolean expression; synthesizing = wiring gates to realize an expression.",
      "NAND and NOR are each universal — a chip can be built from a single gate type.",
      "Combinational circuits have no feedback: outputs depend only on current inputs; feedback creates sequential circuits with memory — the territory of Chapter 13.",
      "Half adder: sum = x ⊕ y, carry = xy; a full adder chains two half adders and ORs the carries.",
      "Gate count is cost, depth is delay — both reasons why minimization matters.",
    ],
    quiz: [
      {
        q: "Which gate outputs 1 exactly when at least one of its two inputs is 0?",
        options: ["AND", "NAND", "NOR", "XOR"],
        answer: 1,
        explanation: "NAND outputs (xy)′, which is 0 only when both inputs are 1 — so at least one 0 input forces output 1. NOR outputs 1 only when both inputs are 0.",
      },
      {
        q: "For any bit x, the value of x ⊕ x is:",
        options: ["0", "1", "x", "x′"],
        answer: 0,
        explanation: "XOR outputs 1 exactly when its inputs differ, and x never differs from itself.",
      },
      {
        q: "In a half adder, the carry-out bit is produced by which gate?",
        options: ["An OR gate (x + y)", "An AND gate (xy)", "An XOR gate (x ⊕ y)", "A NOR gate"],
        answer: 1,
        explanation: "A carry is generated exactly when both input bits are 1, which is the AND function; the XOR produces the sum bit.",
      },
      {
        q: "What makes a circuit sequential rather than combinational?",
        options: ["It uses more than ten gates", "It contains feedback, so outputs can depend on input history", "It uses only NAND gates", "It has multiple output wires"],
        answer: 1,
        explanation: "Combinational circuits compute a pure function of the current inputs; feedback loops create memory, making outputs history-dependent.",
      },
    ],
  },

  // ================= 12.4 Minimization of Circuits =================
  {
    sectionId: "rosen-ch12-s4",
    readingTime: 12,
    intro: "The sum-of-products construction never fails, but it routinely wastes gates — and wasted gates mean cost, power and delay. Karnaugh maps turn minimization into a visual puzzle: arrange the truth table so that the law x + x′ = 1 becomes adjacency on paper, then swallow 1s into the biggest rectangles you can. When variables outnumber what a human can see, the Quine–McCluskey method does the same job as an algorithm.",
    objectives: [
      "Explain why circuit minimization matters for cost and speed",
      "Draw 2-, 3- and 4-variable Karnaugh maps with Gray-code row and column labels",
      "Form legal groups — rectangles of 2ᵏ cells, wraparound included — and read off the minimal expression",
      "Use don't care conditions to simplify functions with restricted inputs",
      "Outline the Quine–McCluskey method and know when to prefer it over K-maps",
    ],
    concepts: [
      {
        term: "Why minimize circuits?",
        kind: "insight",
        statement: "Two expressions can define the same Boolean function while one uses far fewer gates and literals; the cheaper circuit computes the same thing with less silicon, power and propagation delay.",
        detail: "For example, x′y′z′ + x′yz′ + xy′z′ + xyz′ collapses to the single literal z′. Section 12.3's cost (gate count) and depth (delay) both improve when literals disappear.",
      },
      {
        term: "Karnaugh maps",
        kind: "method",
        statement: "A **Karnaugh map** (K-map) rearranges a function's truth table into a grid whose rows and columns are labeled in **Gray code**, so that any two horizontally or vertically adjacent cells differ in exactly one variable — and so do the leftmost and rightmost columns (and top and bottom rows).",
        detail: "2-variable maps are 2 × 2; 3-variable maps are 2 rows × 4 columns; 4-variable maps are 4 × 4. Each cell shows the function's value on the corresponding input row.",
      },
      {
        term: "Gray-code ordering",
        kind: "notation",
        statement: "The labels along each axis run in Gray code order 00, 01, 11, 10: consecutive labels — cyclically, including 10 back to 00 — differ in exactly one bit.",
        detail: "This ordering is the whole trick: adjacent cells then represent input rows differing in a single variable, so the complement law lets one combined term cover both.",
      },
      {
        term: "Legal K-map groups",
        kind: "method",
        statement: "A valid group is a rectangle of 1, 2, 4, 8, … cells — always a **power of two** — containing only 1s, with sides parallel to the grid. Groups may wrap around the map's edges, and in 4-variable maps the four corners can form a group.",
        detail: "Rules of thumb: make every group as large as possible and use as few groups as possible, while covering every 1 at least once. Overlap between groups is allowed and often necessary.",
      },
      {
        term: "Reading a group as a product term",
        kind: "method",
        statement: "The product term for a group keeps exactly the variables that are constant over the whole group (uncomplemented where the constant is 1, complemented where 0); every variable that changes inside the group is eliminated.",
        detail: "Each doubling of a group's area deletes one literal: a 2-cell group kills one variable, a 4-cell group kills two, an 8-cell group three. The final expression is the OR of all groups' terms.",
      },
      {
        term: "Don't care conditions",
        kind: "definition",
        statement: "A **don't care condition** is an input combination that either cannot occur in the application or for which the output value is irrelevant; on the K-map it is marked d and may be treated as 1 or 0 — whichever yields larger groups.",
        detail: "Typical source: 4-bit inputs encoding decimal digits 0–9 leave combinations 1010–1111 unused. In the BCD example below, don't cares shrink a 7-literal two-term expression to the single literal z.",
      },
      {
        term: "Implicants and prime implicants",
        kind: "definition",
        statement: "A product term P is an **implicant** of F when P = 1 forces F = 1 (P's cells all sit on 1s). P is a **prime implicant** when no literal can be deleted while keeping it an implicant — equivalently, when its rectangle cannot be enlarged.",
        detail: "A minimal sum-of-products consists of prime implicants; an **essential prime implicant** covers a 1 that no other prime implicant reaches, so it appears in every minimal cover.",
      },
      {
        term: "The Quine–McCluskey method",
        kind: "method",
        statement: "The **Quine–McCluskey method** finds all prime implicants by repeatedly combining pairs of terms that differ in exactly one literal (replacing the differing literal by a dash), then selects a minimal cover with a **prime implicant chart** whose columns are the 1-minterms and whose rows are prime implicants.",
        detail: "Procedure: (1) list the minterms of F in binary; (2) merge pairs differing in one position, marking combined terms, and repeat until no merges are possible; (3) the unmarked survivors are the prime implicants; (4) chart them against minterms, take essential ones first, then add the cheapest implicants covering the rest.",
      },
      {
        term: "Karnaugh maps vs Quine–McCluskey",
        kind: "insight",
        statement: "K-maps are fast and intuitive for up to about 4–6 variables; Quine–McCluskey is fully algorithmic — programmable, able to handle many variables and multiple-output functions — which is why minimization software uses it, even though it is exponential in the worst case.",
        detail: "Multi-output Quine–McCluskey shares terms between functions to minimize total circuit cost — something per-function K-maps cannot see.",
      },
    ],
    examples: [
      {
        title: "A 3-variable K-map with a wraparound group",
        problem: "Minimize F(x, y, z) = Σ(0, 2, 4, 6) — the function that is 1 exactly when z = 0.",
        steps: [
          { label: "Draw the map", text: "Rows: x = 0, 1. Columns (Gray): yz = 00, 01, 11, 10. Place 1s at cells (x, yz) = (0,00), (0,10), (1,00), (1,10) — the minterms 0, 2, 4, 6." },
          { label: "Spot the wraparound", text: "The leftmost column (yz = 00) and the rightmost column (yz = 10) are adjacent across the map's edge — they differ only in y." },
          { label: "Form one group of four", text: "All four 1s — both rows across the two wrapped columns — form a single legal rectangle of 4 cells." },
          { label: "Read off the term", text: "Inside the group, x takes both values and y takes both values, so both are eliminated; z is constant 0, giving the term z′." },
        ],
        result: "F = z′ — one literal instead of the four 3-literal minterms of the SOP expansion x′y′z′ + x′yz′ + xy′z′ + xyz′.",
      },
      {
        title: "A 4-variable K-map",
        problem: "Minimize F(w, x, y, z) = Σ(0, 1, 2, 4, 5, 6).",
        steps: [
          { label: "Set up the grid", text: "Rows wx = 00, 01, 11, 10 (Gray); columns yz = 00, 01, 11, 10 (Gray). Mark 1s at rows wx = 00 and 01, columns yz = 00, 01 and 10 — six cells in all." },
          { label: "Group 1 — four cells, no wrap", text: "The block rows {00, 01} × columns {00, 01} holds 1s at minterms 0, 1, 4, 5. Over the block w = 0 and y = 0 while x and z vary: term w′y′." },
          { label: "Group 2 — four cells with wraparound", text: "The block rows {00, 01} × columns {00, 10} (left edge wrapping to right edge) holds 1s at minterms 0, 2, 4, 6. There w = 0 and z = 0: term w′z′." },
          { label: "Check the cover", text: "Group 1 covers minterms 0, 1, 4, 5; group 2 covers 0, 2, 4, 6 — together all six 1s, with useful overlap on minterms 0 and 4." },
        ],
        result: "F = w′y′ + w′z′ = w′(y′ + z′): two groups of four replace the six minterms of the SOP — 12 literals down to 4.",
      },
      {
        title: "Don't care conditions: a BCD odd-number detector",
        problem: "A circuit takes a 4-bit BCD digit (only 0000–1001 ever occur; 1010–1111 never appear) and must output 1 exactly for the odd digits 1, 3, 5, 7, 9. Minimize it.",
        steps: [
          { label: "Separate 1s from don't cares", text: "1s: minterms 1, 3, 5, 7, 9. Don't cares (d): minterms 10–15. Genuine 0s: minterms 0, 2, 4, 6, 8 only." },
          { label: "Map without the don't cares", text: "Ignoring the d's, the best cover is F = w′z + x′y′z — the isolated minterm 9 (1001) forces a 3-literal term." },
          { label: "Let don't cares enlarge groups", text: "Use the d's at 11, 13, 15 to complete the 4-cell group of all cells with w = 1, z = 1 (minterm 9 plus three d's); the d's at 10, 12, 14 stay unused. The 1s at 1, 3, 5, 7 already form the group w = 0, z = 1." },
          { label: "Read off both groups", text: "Group 1 (w = 0, z = 1): term w′z. Group 2 (w = 1, z = 1): term wz." },
        ],
        result: "F = w′z + wz = z — a single literal! In BCD, odd numbers are exactly those whose last bit is 1; the don't cares revealed it.",
      },
    ],
    keyTakeaways: [
      "K-maps reorder the truth table in Gray code so adjacent cells differ in one variable — grouping adjacent 1s mechanically applies x + x′ = 1.",
      "Groups must be rectangles of 2ᵏ cells; the map's edges (and, in 4-variable maps, the four corners) wrap around.",
      "Bigger groups drop more literals; fewer groups mean fewer terms — cover all 1s with the largest, fewest rectangles.",
      "Don't cares are free tiles: treat them as 1 only when they enlarge a group, never as an obligation.",
      "Quine–McCluskey: tabular pairwise merging finds all prime implicants, then a chart picks a minimal cover — the algorithmic minimizer inside software tools.",
      "Minimization gives up nothing: the minimized circuit computes exactly the same function as the original SOP.",
    ],
    quiz: [
      {
        q: "Why are Karnaugh map rows and columns labeled in Gray code rather than binary order?",
        options: [
          "To make the map fit on one page",
          "So adjacent cells — including across the map's edges — differ in exactly one variable, and grouping them applies x + x′ = 1",
          "So the minterm numbers increase left to right",
          "To match the layout of logic chips",
        ],
        answer: 1,
        explanation: "Grouping two cells that differ in exactly one variable makes that variable appear both complemented and uncomplemented, so it cancels by the complement law.",
      },
      {
        q: "Which of these is NOT a legal group size in a Karnaugh map?",
        options: ["3 cells", "4 cells", "8 cells", "1 cell"],
        answer: 0,
        explanation: "Groups must be rectangles containing a power-of-two number of cells — 1, 2, 4, 8, 16 — because each doubling is what eliminates one more literal.",
      },
      {
        q: "A cell marked d (a don't care condition) in a K-map is treated how?",
        options: [
          "Always as a 1",
          "Always as a 0",
          "As a 1 when that helps form a larger group, and ignored otherwise",
          "It must be removed from the map before grouping",
        ],
        answer: 2,
        explanation: "The output on a don't care input never matters, so the designer uses it only when it enlarges a group — and is never required to cover it.",
      },
      {
        q: "The key advantage of the Quine–McCluskey method over Karnaugh maps is that it:",
        options: [
          "Always produces expressions with fewer literals",
          "Is a systematic algorithm — programmable and practical for many variables and multi-output circuits",
          "Needs no listing of the function's minterms",
          "Works without any Boolean identities",
        ],
        answer: 1,
        explanation: "K-maps rely on human pattern recognition and stop being usable beyond roughly 4–6 variables; Quine–McCluskey is tabular and algorithmic, so software implements it (at a worst-case exponential price).",
      },
      // PYQ-pattern — K-map minimization to a single literal (rephrased, values changed)
      {
        q: "The Boolean function $F(A,B,C) = \\Sigma m(0,1,2,3)$ simplifies to:",
        options: [
          "$A$",
          "$B$",
          "$C$",
          "$\\lnot A$",
        ],
        answer: 3,
        explanation: "Step 1: Restate the minterms in binary as $000, 001, 010, 011$, all with $A = 0$. Step 2: Recall the key K-map principle that a group of $4$ adjacent ones spanning both values of $B$ and $C$ eliminates those two variables. Step 3: Group the four cells into one block covering $B \\in \\{0,1\\}$ and $C \\in \\{0,1\\}$ with $A$ fixed at $0$. Step 4: Read the surviving literal as $\\lnot A$, since only $A = 0$ is common to the block. Step 5: The distractors fail since $A$ is the complement of the block, while $B$ and $C$ each vary inside the block and cannot survive. Step 6: Hence the minimal sum-of-products form is $F = \\lnot A$.",
      },
    ],
  },
]
