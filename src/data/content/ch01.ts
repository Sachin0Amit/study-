import type { SectionContent } from '../library'

// ============================================================================
// Rosen, Discrete Mathematics and Its Applications, 8th Edition
// Chapter 1: The Foundations — Logic and Proofs (Sections 1.1 – 1.8)
// Master study content.
// ============================================================================

export const ch1Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: "rosen-ch1-s1",
    depth: [
      {
        tier: "masters",
        title: "Truth functions, normal forms, and completeness",
        blocks: [
          { kind: "para", body: "Every connective in this section is a **truth function**: a map $f : \\{0,1\\}^n \\to \\{0,1\\}$ assigning each of the $2^n$ input rows an output bit. Counting fixes the landscape before any proof is written: each row can independently carry 0 or 1, so there are exactly $2^{2^n}$ connectives of arity $n$ — four unary ones, sixteen binary ones, 256 ternary ones, and already $2^{32}$ of arity five. The connectives $\\lnot, \\land, \\lor, \\to, \\leftrightarrow$ therefore sample a vanishing corner of the possible functions, and the graduate theory of this section asks two sharp questions about them: which sets of connectives can express **every** truth function (functional completeness), and how large must the expressions be? The first question has a complete classical answer, proved below; the second is the seed of circuit complexity, pursued at Level III." },
          { kind: "theorem", heading: "Disjunctive normal form", body: "Every truth function $f : \\{0,1\\}^n \\to \\{0,1\\}$ is computed by a formula using only $\\lnot, \\land, \\lor$. Explicitly, let $S$ be the set of rows on which $f$ takes the value 1, and for each row $a = (a_1, \\dots, a_n)$ write the **minterm** $m_a = \\bigwedge_{i=1}^n L_i(a)$, where $L_i(a)$ is $p_i$ if $a_i = 1$ and $\\lnot p_i$ if $a_i = 0$. Then $f$ is computed by $\\varphi = \\bigvee_{a \\in S} m_a$. In particular the set $\\{\\lnot, \\land, \\lor\\}$ is **functionally complete**: every connective of every arity is definable from it, and so is any connective yet to be invented." },
          { kind: "proof", body: "A minterm $m_a$ is true under an assignment $v$ exactly when $v = a$: if the two agree in every coordinate, every literal $L_i(a)$ is true and the conjunction stands; if they differ in coordinate $i$, the literal $L_i(a)$ is false and the conjunction collapses. A disjunction, in turn, is true exactly when some disjunct is true. So $\\varphi$ is true under $v$ precisely when the disjunct $m_v$ was included, that is, precisely when $f(v) = 1$ — the formula computes $f$ on all $2^n$ inputs. If $S$ is empty, take any contradiction such as $p_1 \\land \\lnot p_1$, which represents the constant-0 function. Read backwards, the construction is exactly the algorithm for converting an arbitrary truth table into a formula, and dualizing every connective in the argument yields the conjunctive normal form theorem for free." },
          { kind: "theorem", heading: "Post's completeness criterion", body: "A set $B$ of connectives is functionally complete if and only if $B$ is **not** contained in any one of the five classes: $T_0$ (functions with $f(0,\\dots,0) = 0$), $T_1$ (functions with $f(1,\\dots,1) = 1$), the **monotone** functions, the **affine** functions (those of the form $a_0 \\oplus a_1 p_1 \\oplus \\cdots \\oplus a_n p_n$ over $\\mathbb{F}_2$), and the **self-dual** functions (those with $f(\\lnot p_1, \\dots, \\lnot p_n) = \\lnot f(p_1, \\dots, p_n)$). These are the maximal **clones** in the lattice of closed classes of truth functions that Emil Post classified completely in 1941, and functional completeness is precisely escape from all five." },
          { kind: "proof", body: "Necessity first. Each of the five classes is closed under composition — plugging monotone (or affine, or 0-preserving, …) functions into one another cannot leave the class — and each is a proper subclass of all truth functions, so a connective set inside one class generates only that class, never everything. For sufficiency, choose connectives $f_1, \\dots, f_5$, one escaping each class. Identify all arguments of the $T_0$-escape to get a unary $u$ with $u(0) = 1$, and of the $T_1$-escape to get $v$ with $v(1) = 0$; working the cases, either one of them is a negation, or $u$ and $v$ are the two constants 1 and 0. If we hold the constants, a non-monotone function takes the values 1 and 0 on comparable inputs, and a chain between them that flips one coordinate at a time yields, after the fixed coordinates are replaced by constants, a negation. If instead we hold negation, a non-self-dual function has $f(a) = f(\\lnot a)$ for some $a$, and feeding each argument $x$ or $\\lnot x$ according to the bits of $a$ yields a constant. Either way we obtain $\\lnot$, 0 and 1. The final step is a finite case check: with negation and the constants available, any non-affine function generates conjunction or disjunction — each of the eight non-affine binary truth functions does. With $\\lnot$ and $\\land$ in hand, the normal-form theorem finishes the construction." },
          { kind: "derivation", heading: "The Sheffer stroke and the Peirce arrow", body: "Functional completeness from a **single** connective was observed by Sheffer (1913), with an unpublished anticipation by Peirce. Write $p \\mid q = \\lnot(p \\land q)$ (NAND, the Sheffer stroke) and $p \\downarrow q = \\lnot(p \\lor q)$ (NOR, the Peirce arrow). Negation and conjunction — hence, by the normal-form theorem, everything — reduce to NAND: $$\\lnot p \\;\\equiv\\; p \\mid p, \\qquad p \\land q \\;\\equiv\\; (p \\mid q) \\mid (p \\mid q).$$ For NOR the mirror identities hold: $$\\lnot p \\;\\equiv\\; p \\downarrow p, \\qquad p \\lor q \\;\\equiv\\; (p \\downarrow q) \\downarrow (p \\downarrow q).$$ The remaining connectives follow by De Morgan, for instance $p \\to q \\equiv \\lnot p \\lor q$. This is why physical hardware concentrates on one robust gate type — a chip built only from NAND gates is logically universal — and Post's criterion confirms that among all sixteen binary connectives, exactly the two dagger-shaped ones manage the trick alone." }
        ]
      },
      {
        tier: "phd",
        title: "SAT at the frontier: NP-completeness and beyond",
        blocks: [
          { kind: "para", body: "The decision problem **SAT** — given a formula, decide whether some assignment satisfies it — is the computational heart of this chapter: the satisfiability testing of the equivalence section was its baby case. The **Cook–Levin theorem** (1971; Levin independently, 1973) makes SAT the canonical intractable problem: SAT is **NP-complete**, so every problem whose solutions can be verified in polynomial time reduces to it. The proof encodes a polynomial-time verifier as a giant propositional formula asserting “this computation is legal and accepting,” clause by clause, over variables that name tape cells at each time step; the verifier has an accepting run exactly when the formula is satisfiable. Every theme of this chapter — translation, normal forms, consistency checking — is downstream of that one encoding idea, which is why a logic course is secretly a computational complexity course." },
          { kind: "application", heading: "From DPLL to CDCL", body: "The Davis–Putnam–Logemann–Loveland procedure (1960; the tree-search revision, 1962) decides SAT by branching on a variable, simplifying, and backtracking on conflict. Its modern descendant, **conflict-driven clause learning** (GRASP, 1996; Chaff, 2001), converts each dead end into a learned clause that prunes the entire remaining search space, and Chaff's **VSIDS** heuristic — branch on variables active in recent conflicts, with scores decayed exponentially — lets the solver discover the instance's structure on the fly. Restarts, watched literals and aggressive clause deletion complete the engine. The empirical outcome transformed the field: industrial instances with millions of variables — hardware verification, planning, scheduling, cryptographic puzzles — now fall routinely, although carefully constructed worst cases remain exponential. SAT solving has become a general-purpose reasoning backend embedded in production systems at Google, Intel and Amazon, and the mathematical analysis of these algorithms (proof lengths, restart policies, heuristics) is itself a research area." },
          { kind: "theorem", heading: "The random k-SAT threshold", body: "Fix $k \\ge 2$ and draw a formula from $m$ independent random $k$-clauses over $n$ variables, with density $\\alpha = m/n$. There is a **critical density** $\\alpha_k$: below it the formula is satisfiable with probability tending to 1 as $n \\to \\infty$, and above it unsatisfiable with probability tending to 1. Friedgut (1999) proved that such a sharp threshold exists for every fixed $k$, and Ding, Sly and Sun (2016) confirmed the location predicted by statistical physics — the replica-symmetry value — for all sufficiently large $k$. For $k = 3$ the exact threshold, believed to be near $4.267$, is still open; the transition's fine structure is precisely where the CDCL solvers of the previous block struggle hardest." },
          { kind: "open", heading: "The P versus NP problem", body: "Is every problem whose solutions can be verified efficiently also solvable efficiently — does $\\mathrm{P} = \\mathrm{NP}$? Open since 1971, a Clay millennium problem carrying a million-dollar prize, and the deepest single question about the material of this chapter, since SAT is its pivot. The known barriers are themselves theorems: relativization (Baker–Gill–Solovay, 1975) shows that diagonalization alone cannot settle it; natural proofs (Razborov–Rudich, 1997) show that the standard method for circuit lower bounds cannot settle it; algebrization (Aaronson–Wigderson, 2008) extends both obstructions. Between the undergraduate truth table and the answer there is, at present, no known bridge." }
        ]
      },
    ],
    readingTime: 10,
    prerequisites: [
      'Declarative sentences and propositional truth valuation (True / False)',
      'Elementary truth tables for negation ($\\neg$), conjunction ($\\land$), and disjunction ($\\lor$)',
      'Concept of logical equivalence ($\\equiv$): identical truth value under all interpretations',
    ],
    intro: "Logic is the grammar of mathematics: every definition, theorem and proof you will ever read is built out of propositions stitched together by connectives. This section defines propositions, the connectives ¬, ∧, ∨, ⊕, → and ↔, and the truth tables that give each of them exact meaning.",
    objectives: [
      "Recognize propositions and distinguish them from commands, questions and open sentences",
      "Translate English statements into compound propositions using ¬, ∧, ∨, ⊕, → and ↔",
      "Build and read truth tables, including multi-variable tables",
      "Apply operator precedence to parse compound propositions correctly",
      "Compute bitwise AND, OR and XOR on bit strings"
    ],
    concepts: [
      {
        term: "Proposition",
        kind: "definition",
        statement: "A **proposition** is a declarative sentence that is either true or false, but not both. Its **truth value** is T (true) or F (false).",
        detail: "Commands (“Close the door.”), questions (“What time is it?”), opinions and open sentences with unbound variables (“x + 1 > 5”) are not propositions. Paradoxes like “This sentence is false” fail the definition because they can be neither true nor false."
      },
      {
        term: "Negation ¬",
        kind: "definition",
        statement: "The **negation** of a proposition p is the proposition ¬p (“not p”), which is true exactly when p is false.",
        detail: "If p is “Today is Friday,” then ¬p is “Today is not Friday” (equivalently, “It is not the case that today is Friday”). The negation of a negation returns the original: ¬¬p has the same truth value as p."
      },
      {
        term: "Conjunction ∧ and disjunction ∨",
        kind: "definition",
        statement: "The **conjunction** p ∧ q (“p and q”) is true exactly when both p and q are true. The **disjunction** p ∨ q (“p or q”) is the **inclusive** or: it is false exactly when both p and q are false.",
        detail: "Inclusive or means “one, the other, or both.” Natural language “or” is sometimes inclusive (“experience with Java or C++”) and sometimes exclusive (“soup or salad”), so translation must respect the intended meaning."
      },
      {
        term: "Exclusive or ⊕",
        kind: "definition",
        statement: "The **exclusive or** p ⊕ q is true exactly when precisely one of p and q is true; it is false when p and q have the same truth value.",
        detail: "It can be built from the other connectives: p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q). It is also exactly the negation of the biconditional: p ⊕ q ≡ ¬(p ↔ q)."
      },
      {
        term: "Conditional p → q",
        kind: "definition",
        statement: "The **conditional** p → q (“if p, then q”) is false only in the single case where p is true and q is false. Here p is the **hypothesis** (antecedent) and q is the **conclusion** (consequent).",
        detail: "Many phrasings mean p → q: “p only if q,” “p is sufficient for q,” “q is necessary for p,” “q whenever p,” “q follows from p.” The **converse** is q → p, the **inverse** is ¬p → ¬q, and the **contrapositive** is ¬q → ¬p — only the contrapositive is equivalent to the original. A conditional with a false hypothesis is true (vacuously)."
      },
      {
        term: "Biconditional ↔",
        kind: "definition",
        statement: "The **biconditional** p ↔ q (“p if and only if q”) is true exactly when p and q have the same truth value.",
        detail: "Read it as “p if and only if q,” “p iff q,” or “p is necessary and sufficient for q.” It decomposes into the two conditionals: p ↔ q ≡ (p → q) ∧ (q → p)."
      },
      {
        term: "Truth tables",
        kind: "method",
        statement: "A **truth table** lists all 2ⁿ combinations of truth values of the n propositional variables in a compound proposition, together with the resulting truth value of the compound for each row.",
        detail: "Build columns from the inside out: variables first, then sub-expressions, then the whole formula. A one-variable table has 2 rows, two variables give 4 rows, three give 8 — the table doubles with each added variable, which is why algebraic methods (Section 1.3) eventually replace tables."
      },
      {
        term: "Precedence of logical operators",
        kind: "notation",
        statement: "From highest to lowest precedence: ¬, then ∧, then ∨, then →, then ↔.",
        detail: "So ¬p ∨ q parses as (¬p) ∨ q, and p ∨ q → r parses as (p ∨ q) → r. When in doubt — or to be unambiguous to a reader — write parentheses."
      },
      {
        term: "Bits and Boolean operations",
        kind: "definition",
        statement: "A **bit** is a symbol with two values, 0 (false) and 1 (true); a **Boolean variable** has 0 or 1 as its value; a **bit string** is a sequence of bits. The bitwise operations AND, OR and XOR apply ∧, ∨, ⊕ to corresponding positions of two equal-length bit strings.",
        detail: "For example, the AND of the 8-bit strings 01 1010 11 and 11 0001 10 is 01 0000 10, and their XOR is 10 1011 01. Computers store truth values exactly this way, which is why logic and hardware meet in Chapter 12."
      }
    ],
    derivations: [
      {
        title: 'Logical Equivalence of the Conditional Proposition',
        statement: 'The conditional statement $p \\to q$ is logically equivalent to the disjunctive proposition $\\neg p \\lor q$: $$ (p \\to q) \\equiv (\\neg p \\lor q) $$',
        prerequisites: [
          'Truth valuation of conditional statement: $p \\to q$ is false if and only if $p = T$ and $q = F$',
          'Truth valuation of negation ($\\neg$) and disjunction ($\\lor$)',
          'Truth table equivalence criterion',
        ],
        steps: [
          {
            label: 'Step 1: Formal truth valuation of p → q',
            formula: `$$ v(p \\to q) = \\begin{cases} F & \\text{if } v(p) = T \\text{ and } v(q) = F \\\\ T & \\text{otherwise} \\end{cases} $$`,
            explanation: 'In propositional logic, a conditional assertion is a promise: "if the condition holds, the consequence follows". The only circumstance under which this promise is broken is when the premise $p$ is fulfilled (True) yet the outcome $q$ fails to materialize (False). In all other three possibilities, the statement remains unbroken (True).',
          },
          {
            label: 'Step 2: Valuation of the negation ¬p',
            formula: `$$ v(\\neg p) = 1 - v(p) \\implies \\text{Row 1: } F, \\quad \\text{Row 2: } F, \\quad \\text{Row 3: } T, \\quad \\text{Row 4: } T $$`,
            explanation: 'Negation inverts truth values: for input rows $(T, T)$ and $(T, F)$, $\\neg p$ evaluates to False ($F$). For rows $(F, T)$ and $(F, F)$ where hypothesis $p$ is false, $\\neg p$ evaluates to True ($T$).',
          },
          {
            label: 'Step 3: Valuation of the disjunction ¬p ∨ q',
            formula: `$$ v(\\neg p \\lor q) = \\max(v(\\neg p), v(q)) $$`,
            explanation: 'A disjunction is True whenever at least one disjunct is True. Computing row-by-row: Row 1 ($F \\lor T = T$), Row 2 ($F \\lor F = F$), Row 3 ($T \\lor T = T$), and Row 4 ($T \\lor F = T$).',
          },
          {
            label: 'Step 4: Exhaustive truth vector comparison',
            formula: `$$ [v(p \\to q)] = \\begin{pmatrix} T \\\\ F \\\\ T \\\\ T \\end{pmatrix} = [v(\\neg p \\lor q)] $$`,
            explanation: 'Comparing the resulting truth columns demonstrates complete identity across all $2^2 = 4$ rows of the truth table. Since the truth values match under all possible interpretations, the two propositions are logically equivalent by definition.',
          },
        ],
        result: 'The derived equivalence $(p \\to q) \\equiv (\\neg p \\lor q)$ is one of the most foundational theorems in formal logic. It resolves the classical puzzle of "vacuous truth": whenever the premise $p$ is False, $\\neg p$ is True, immediately rendering the disjunction $\\neg p \\lor q$ True regardless of $q$. Furthermore, applying De Morgan\\\'s laws to its negation yields $\\neg(p \\to q) \\equiv p \\land \\neg q$, rigorously proving how to negate an implication.',
      },
      {
        title: 'Derivation of the Contrapositive Law via Boolean Algebra',
        statement: 'A conditional proposition $p \\to q$ is logically equivalent to its contrapositive $\\neg q \\to \\neg p$, while not equivalent to its converse or inverse: $$ (p \\to q) \\equiv (\\neg q \\to \\neg p) $$',
        prerequisites: [
          'Conditional disjunction equivalence: $(A \\to B) \\equiv (\\neg A \\lor B)$',
          'Double negation law: $\\neg(\\neg A) \\equiv A$',
          'Commutative law of disjunction: $(A \\lor B) \\equiv (B \\lor A)$',
        ],
        steps: [
          {
            label: 'Step 1: Expressing the contrapositive in disjunctive form',
            formula: `$$ (\\neg q \\to \\neg p) \\equiv \\neg(\\neg q) \\lor \\neg p $$`,
            explanation: 'We substitute the hypothesis $\\neg q$ and conclusion $\\neg p$ into the conditional equivalence theorem derived above: any implication $A \\to B$ transforms into $(\\neg A) \\lor B$.',
          },
          {
            label: 'Step 2: Eliminating double negation',
            formula: `$$ \\neg(\\neg q) \\equiv q \\implies \\neg(\\neg q) \\lor \\neg p \\equiv q \\lor \\neg p $$`,
            explanation: 'By the law of double negation, negating a false claim restores the affirmative proposition: $\\neg(\\neg q)$ simplifies directly to $q$.',
          },
          {
            label: 'Step 3: Applying commutativity of disjunction',
            formula: `$$ q \\lor \\neg p \\equiv \\neg p \\lor q $$`,
            explanation: 'Disjunction is an abelian (commutative) logical connective: the order of disjuncts does not alter the truth value of the compound proposition.',
          },
          {
            label: 'Step 4: Recognizing the original conditional',
            formula: `$$ \\neg p \\lor q \\equiv (p \\to q) $$`,
            explanation: 'The resulting formula $\\neg p \\lor q$ is identically the disjunctive form of $p \\to q$, closing the chain of equivalences: $(\\neg q \\to \\neg p) \\equiv \\neg(\\neg q) \\lor \\neg p \\equiv q \\lor \\neg p \\equiv \\neg p \\lor q \\equiv (p \\to q)$.',
          },
        ],
        result: 'This purely algebraic derivation establishes the validity of Proof by Contraposition: to prove "if $p$ then $q$", one may instead prove "if not $q$ then not $p$". In contrast, the converse $q \\to p \\equiv \\neg q \\lor p$ and inverse $\\neg p \\to \\neg q \\equiv p \\lor \\neg q$ possess truth vectors $(T, T, F, T)^T \\ne (T, F, T, T)^T$, confirming they are distinct and logically inequivalent statements.',
      },
    ],
    examples: [
      {
        title: "Spotting propositions",
        problem: "Which of the following are propositions, and what are their truth values? (a) Toronto is the capital of Canada. (b) 1 + 1 = 2. (c) What time is it? (d) x + 1 = 2.",
        steps: [
          { label: "Step 1: Test (a) for declarative form and definite truth value", text: "It is a declarative sentence with a definite truth value — it is false, since Ottawa is the capital. So it is a proposition." },
          { label: "Step 2: Test (b)", text: "1 + 1 = 2 is a declarative sentence that is true — a proposition." },
          { label: "Step 3: Test (c)", text: "A question has no truth value — not a proposition." },
          { label: "Step 4: Test (d)", text: "“x + 1 = 2” depends on the value of x; it is a predicate (propositional function), not a proposition — until x is fixed." }
        ],
        result: "Only (a) and (b) are propositions: (a) is false, (b) is true."
      },
      {
        title: "A two-variable truth table",
        problem: "Use a truth table to show that (p ∨ ¬q) ∧ (¬p ∨ q) is logically equivalent to p ↔ q.",
        steps: [
          { label: "Step 1: List the four rows", text: "(p, q) over T T, T F, F T, F F, and add columns for ¬p and ¬q." },
          { label: "Step 2: Compute the two disjuncts", text: "p ∨ ¬q gives T, T, F, T (rows 1–4) and ¬p ∨ q gives T, F, T, T." },
          { label: "Step 3: Conjoin them", text: "(p ∨ ¬q) ∧ (¬p ∨ q) gives T, F, F, T." },
          { label: "Step 4: Compare with the biconditional", text: "p ↔ q is true exactly when p and q agree: T, F, F, T — identical columns." }
        ],
        result: "The two propositions have the same truth value on every row, so (p ∨ ¬q) ∧ (¬p ∨ q) ≡ p ↔ q. Note each disjunct is itself a conditional in disguise: p ∨ ¬q ≡ q → p and ¬p ∨ q ≡ p → q."
      },
      {
        title: "Translating and transforming a conditional",
        problem: "Let p be “It is raining this afternoon” and q be “The match will be cancelled.” Express the following in symbols: (a) If it is raining this afternoon, then the match will be cancelled. (b) its converse, (c) its contrapositive, (d) its inverse, and (e) “The match will be cancelled only if it is raining this afternoon.”",
        steps: [
          { label: "Step 1: The conditional", text: "(a) is p → q." },
          { label: "Step 2: Swap hypothesis and conclusion", text: "(b) The converse is q → p: if the match is cancelled, it is raining." },
          { label: "Step 3: Negate and swap", text: "(c) The contrapositive is ¬q → ¬p: if the match is not cancelled, it is not raining." },
          { label: "Step 4: Negate without swapping", text: "(d) The inverse is ¬p → ¬q: if it is not raining, the match is not cancelled." },
          { label: "Step 5: Translate “only if”", text: "(e) “q only if p” means q → p — the same shape as the converse, not the original conditional." }
        ],
        result: "Only the original statement (a) and its contrapositive (c) are logically equivalent; the converse (b), inverse (d) and statement (e) say something different."
      }
    ],
    keyTakeaways: [
      "A proposition is a declarative sentence with a definite truth value, T or F.",
      "∧ is true only when both parts are true; ∨ (inclusive) is false only when both are false; ⊕ is true exactly when exactly one part is true.",
      "p → q is false only in the single case T → F; a false hypothesis makes the conditional vacuously true.",
      "The contrapositive ¬q → ¬p is equivalent to p → q, but the converse q → p and inverse ¬p → ¬q are not.",
      "Operator precedence: ¬ before ∧ before ∨ before → before ↔ — parentheses remove all doubt.",
      "Bit strings store truth values, and bitwise ∧, ∨, ⊕ mirror the propositional connectives — the hardware bridge to Chapter 12."
    ],
    quiz: [
      {
        q: "Which of these sentences is a proposition?",
        options: ["Please close the door.", "What time is it?", "3 + 5 = 8", "x + 1 > 2"],
        answer: 2,
        explanation: "A proposition must be a declarative sentence with a definite truth value. “3 + 5 = 8” qualifies (it is false). The others are an imperative, a question, and an open sentence whose truth depends on x."
      },
      {
        q: "If p is true and q is false, then p → q is:",
        options: ["True", "False", "True only because p is true", "Undetermined"],
        answer: 1,
        explanation: "The conditional is false in exactly one situation: a true hypothesis with a false conclusion. That is precisely this case."
      },
      {
        q: "The exclusive or p ⊕ q is true exactly when:",
        options: ["both p and q are true", "p and q have the same truth value", "exactly one of p and q is true", "neither p nor q is true"],
        answer: 2,
        explanation: "Exclusive or demands exactly one true operand: it is false both when both are true and when both are false."
      },
      {
        q: "The bitwise OR of the bit strings 01 1010 and 10 1001 is:",
        options: ["11 1011", "00 1000", "11 1010", "01 1001"],
        answer: 0,
        explanation: "OR column by column: 0∨1 = 1, 1∨0 = 1, 1∨1 = 1, 0∨0 = 0, 1∨0 = 1, 0∨1 = 1, giving 11 1011. (00 1000 would be the AND, and 01 1001 the XOR.)"
      }
    ]
  },

  // ---------------------------------------------------------------- 1.2
  {
    sectionId: "rosen-ch1-s2",
    depth: [
      {
        tier: "masters",
        title: "Boolean algebras: the algebra behind the circuits",
        blocks: [
          { kind: "para", body: "The connectives of Section 1.1 obey equational laws, and abstracting them yields a **Boolean algebra**: a set $B$ carrying operations $\\land, \\lor$, a complement $\\lnot$, and constants $0, 1$, satisfying the commutative, associative, distributive and identity laws together with $x \\land \\lnot x = 0$, $x \\lor \\lnot x = 1$ and absorption. The truth values $\\{0,1\\}$ under the truth-table operations form the smallest nontrivial example, and every powerset $\\mathcal{P}(S)$ under intersection, union and complementation forms another. Huntington (1904) proved that strikingly small equational bases suffice, and this corner of algebra became a benchmark for machines too: the Robbins conjecture — whether associativity, commutativity and the single Robbins equation already force Boolean structure — resisted mathematicians for sixty years until McCune's theorem prover EQP settled it in 1996. Boole's 1854 “algebra of thought” is thus both a theory with theorems of its own and a permanent test case for what automated reasoning can do." },
          { kind: "theorem", heading: "The duality principle", body: "Let $e$ be any equation between terms of Boolean algebra that holds in every Boolean algebra. Then its **dual** $e^\\ast$ — obtained throughout by exchanging $\\land$ with $\\lor$ and $0$ with $1$ — also holds in every Boolean algebra. Duality halves the equational workload: each proved identity manufactures a partner for free, so absorption $x \\land (x \\lor y) = x$ begets $x \\lor (x \\land y) = x$, and the two De Morgan laws of the equivalence section are duals of one another. What the truth-table section did by computing two columns, the duality principle does by pure symmetry." },
          { kind: "proof", body: "Given a Boolean algebra $B$, form its **opposite** $B^{\\mathrm{op}}$: the same underlying set, but with $x \\land^{\\mathrm{op}} y = x \\lor y$ and $x \\lor^{\\mathrm{op}} y = x \\land y$, the two constants exchanged, complementation unchanged. Each axiom of the Boolean-algebra axiomatization is carried by these exchanges onto another axiom — the axiom list is closed under duality — so $B^{\\mathrm{op}}$ is again a Boolean algebra. Now let $e$ be an identity valid in every Boolean algebra, and let $C$ be an arbitrary one; we must show $e^\\ast$ holds in $C$. Interpret the terms of $e$ in the Boolean algebra $C^{\\mathrm{op}}$: the operation symbols of $e^\\ast$, evaluated in $C$, behave exactly as those of $e$ behave in $C^{\\mathrm{op}}$, so the truth of $e$ in $C^{\\mathrm{op}}$ is precisely the truth of $e^\\ast$ in $C$. Since $e$ holds in every Boolean algebra, $C^{\\mathrm{op}}$ included, $e^\\ast$ holds in $C$; and $C$ was arbitrary, so the dual identity holds universally." },
          { kind: "theorem", heading: "Finite Boolean algebras are powerset algebras", body: "Every finite Boolean algebra $B$ is isomorphic to the powerset algebra of its set of **atoms** — its minimal nonzero elements. Consequently the cardinality of $B$ is a power of two; two finite Boolean algebras are isomorphic exactly when they have equally many atoms; and there is no Boolean algebra with 6 or 12 elements. The algebra with $k$ atoms has exactly $2^k$ elements, so the two-element truth-value algebra is the one-atom case and the eight-element algebra is the powerset of a three-element set in disguise." },
          { kind: "proof", body: "Order $B$ by $x \\le y$ iff $x \\land y = x$. Call $a \\ne 0$ an **atom** if $x \\le a$ forces $x = 0$ or $x = a$. Every nonzero element dominates an atom: descending from any non-atom, $0 < x < b$, must terminate in a finite algebra, and it terminates at an atom below $b$. For an atom $a$ and any element $b$, either $a \\le b$ or $a \\le \\lnot b$: the meet $a \\land b$ lies below $a$, so it equals $0$ or $a$; if it is $a$ then $a \\le b$; if it is $0$, then $a = a \\land (b \\lor \\lnot b) = (a \\land b) \\lor (a \\land \\lnot b) = a \\land \\lnot b$, so $a \\le \\lnot b$. Now send each element to its atom set, $\\pi(b) = \\{a \\text{ atom} : a \\le b\\}$. **Injectivity**: if $b \\ne c$, say $b \\land \\lnot c \\ne 0$; an atom below it lies below $b$ but not below $c$, so the atom sets differ. **Surjectivity and structure**: for a set $X$ of atoms with join $b = \\bigvee X$, the either/or lemma and distributivity show the atoms below $b$ are exactly the members of $X$; and meets, joins and complements act on atom sets by intersection, union and complementation. The map is an isomorphism onto the powerset algebra of the atoms of $B$." },
          { kind: "application", heading: "Logic synthesis", body: "A combinational circuit's specification is a truth function, and the designer must realize it in gates: two-level logic realizes a disjunctive normal form directly, as an OR layer over an AND layer. Exact minimization — the Quine–McCluskey tabulation that generalizes Karnaugh maps — is itself exponentially costly, so industrial tools such as Espresso iterate safe local algebraic rewrites; modern flows rewrite circuits into **AND-inverter graphs** and hand equivalence checking to SAT solvers and binary decision diagrams against the specification. Behind the pipeline stands this section's mathematics: the specification is a Boolean function, the circuit is a term, and “does the implementation meet the spec?” is a propositional validity question — the consistency checking of the system-specifications subsection, scaled to millions of variables. Gate libraries are bases of a Boolean algebra, and technology mapping is a change of basis." }
        ]
      },
      {
        tier: "phd",
        title: "Boolean function complexity: the lower-bound frontier",
        blocks: [
          { kind: "theorem", heading: "Shannon's counting bound", body: "Fix the binary basis $\\{\\land, \\lor, \\lnot\\}$, negations on inputs free. As $n \\to \\infty$, the fraction of $n$-variable truth functions computable by circuits of size below $2^n/(c\\,n)$ — for a suitable absolute constant $c$ — tends to $0$. Almost every truth function needs circuits of size proportional to $2^n/n$: exponential size is the norm, and the small, friendly formulas of this chapter are the freaks. Shannon's 1949 observation founded circuit complexity by proving that hard functions are not rare but overwhelmingly typical." },
          { kind: "proof", body: "Count descriptions instead of functions. A circuit with $s$ two-input gates is described by choosing, for each gate, its operation and the two earlier sources feeding it — at most $(c(s+n))^{2s}$ descriptions in all, for an absolute constant $c$ — and this over-counts, since many descriptions are invalid or describe the same circuit. The number of $n$-variable truth functions is $2^{2^n}$. Choosing $c$ large and setting $s = 2^n/(c\\,n)$, the number of descriptions is at most roughly $2^{2^n/4}$, an exponentially small fraction of the functions for large $n$. So all but a vanishing fraction of truth functions need more than $s$ gates: hard functions are not exotic, they are the overwhelming norm. What counting cannot do is **name** a hard function — it proves existence without exhibition — and that is exactly the gap that makes the next block a frontier rather than a settled chapter." },
          { kind: "para", body: "Against Shannon's guarantee, the best lower bound proved for any **explicitly presented** function over the full binary basis remains about $3n$ — Blum's 1984 construction, improved only marginally in four decades. The frontier therefore advances under restrictions. For constant-depth, unbounded-fan-in circuits of AND, OR and NOT gates ($\\mathrm{AC}^0$), Håstad's switching-lemma analysis (1986) proves that parity requires size $2^{\\Omega(n^{1/(d-1)})}$ at depth $d$ — exponential for every fixed depth — with matching quasipolynomial upper bounds nearby. For threshold circuits ($\\mathrm{TC}^0$), no super-polynomial lower bound is known at all; for depth two the best bounds are barely super-linear (Kane–Williams, 2016). The natural-proofs barrier of Razborov and Rudich (1997) explains much of the stall. Every result here is a theorem about the truth functions of Section 1.1; every open gap is one." },
          { kind: "application", heading: "Ordered binary decision diagrams", body: "A **BDD** is a directed acyclic graph of decision nodes — each tests one variable along two edges — whose shared subgraphs compress the truth table of a function; with a fixed variable order and a merge-equal-children reduction, the representation becomes **canonical** (Bryant, 1986), so equivalence and satisfiability reduce to graph comparison and the search for a path to the 1-terminal. Canonical BDDs power **symbolic model checking**: sets of states are stored as their characteristic functions, and the fixpoint computation of reachable states is executed entirely on BDDs, with image operations carried out on Boolean matrices. This is the technology with which the model checkers of Clarke, Emerson and Sifakis (Turing Award, 2007) reached industrial scale, and the variable-order sensitivity of the representation — an art as much as a theorem — remains a live research topic." },
          { kind: "remark", body: "Over $\\mathbb{F}_2$, every truth function has a unique **algebraic normal form** — a polynomial $f = \\bigoplus_{S} a_S \\bigwedge_{i \\in S} p_i$, with one coefficient per subset of the variables — computed by the Möbius transform on the subset lattice. This is the working language of stream-cipher design, where filter and combining functions on register states are specified, and attacked, through their ANFs: algebraic degree governs higher-order differential attacks, and **bent functions** — those at maximal Hamming distance from the affine functions — are sought exactly through this normal form. The same representation underlies the SAT-encoding of XOR constraints, where it explains why resolution struggles with parity reasoning." }
        ]
      },
    ],
    readingTime: 7,
    intro: "Propositional logic is not an abstract game — it is a working tool for software engineers, search engines, puzzle solvers and chip designers. This section trains you to translate English (including slippery phrases like “only if” and “unless”) into logic, to check that a list of system specifications is consistent, and to see how logic powers Boolean searches, famous puzzles and digital circuits.",
    objectives: [
      "Translate nuanced English sentences, including “only if” and “unless”, into compound propositions",
      "Test a list of system specifications for consistency",
      "Write Boolean search queries using AND, OR and NOT",
      "Solve knights-and-knaves puzzles with case analysis",
      "Explain how digital circuits implement propositional connectives"
    ],
    concepts: [
      {
        term: "Two-step translation method",
        kind: "method",
        statement: "To translate an English sentence into logic: **(1)** identify the atomic propositions and name them p, q, r, …; **(2)** combine them with the connective matching the English wording — “and” → ∧, “(inclusive) or” → ∨, “exclusive or” → ⊕, “if … then” → →, “if and only if” → ↔, “not / it is not the case that” → ¬.",
        detail: "Translation is the hard part: natural language is ambiguous, logic is not. Once a sentence is translated, everything that follows (equivalence checking, satisfiability, reasoning) becomes mechanical."
      },
      {
        term: "System specifications and consistency",
        kind: "definition",
        statement: "A **system specification** is a compound proposition describing required behavior of a system. A collection of specifications is **consistent** if there is at least one assignment of truth values to the variables that makes every specification true simultaneously.",
        detail: "If no such assignment exists, the specifications are inconsistent and no system can implement them — a disaster if discovered after the system is built. This is why spec lists are checked with logic before code is written."
      },
      {
        term: "Checking consistency",
        kind: "method",
        statement: "To check consistency: assign a variable to each atomic claim, translate every specification, then determine (for example with a truth table) whether at least one row makes all of them true.",
        detail: "One satisfying assignment is enough to prove consistency; every row failing some specification proves inconsistency."
      },
      {
        term: "Boolean searches",
        kind: "insight",
        statement: "Web and database searches use Boolean operators that mirror the connectives: **AND** matches pages containing all terms (∧), **OR** matches pages containing at least one term (∨), **NOT** excludes pages containing a term (¬), and parentheses group.",
        detail: "A query like (Utah OR Arizona) AND hiking AND NOT Colorado retrieves pages mentioning hiking and one of the two states, but excludes any page mentioning Colorado — propositional logic with a search engine."
      },
      {
        term: "Logic puzzles: knights and knaves",
        kind: "method",
        statement: "In knights-and-knaves puzzles every inhabitant is either a **knight**, who always tells the truth, or a **knave**, who always lies. Translate each statement, then run a case analysis: assume a speaker is a knight (statement true) or a knave (statement false) and keep only the consistent assignments.",
        detail: "The power of the method is that contradictions prune possibilities quickly — often one or two case checks are enough to pin down every inhabitant's type."
      },
      {
        term: "Logic circuits",
        kind: "insight",
        statement: "Digital circuits realize propositional logic: signals are bits (0 = false, 1 = true) and gates compute connectives — the **inverter** (NOT gate) outputs ¬p, the **OR gate** outputs p ∨ q, the **AND gate** outputs p ∧ q.",
        detail: "Any compound proposition can be built as a circuit of these gates, and every circuit computes a compound proposition. Chapter 12 develops this correspondence into Boolean algebra and circuit minimization."
      },
      {
        term: "Tricky English phrasings",
        kind: "insight",
        statement: "“q is necessary for p” means p → q; “q is sufficient for p” means q → p; “p only if q” means p → q; “p unless q” means ¬q → p (equivalently p ∨ q); “neither p nor q” means ¬p ∧ ¬q.",
        detail: "Watch the direction: “You can graduate only if you complete 120 credits” translates as graduate → credits, *not* credits → graduate. Mixing up the direction of “only if” is the single most common translation error."
      }
    ],
    examples: [
      {
        title: "Are these specifications consistent?",
        problem: "Specifications: (1) The diagnostic message is stored in the buffer or it is retransmitted. (2) The diagnostic message is not stored in the buffer. (3) If the diagnostic message is stored in the buffer, then it is retransmitted. Are they consistent?",
        steps: [
          { label: "Step 1: Assign variables and translate", text: "Let p = “the message is stored in the buffer,” q = “the message is retransmitted.” The specs are: p ∨ q; ¬p; p → q." },
          { label: "Step 2: Use the strongest constraint first", text: "Spec 2, ¬p, forces p = F." },
          { label: "Step 3: Propagate", text: "With p = F, spec 1 (p ∨ q) forces q = T." },
          { label: "Step 4: Verify the remaining spec", text: "Spec 3 becomes F → T, which is true." }
        ],
        result: "Yes — the assignment p = F, q = T satisfies all three specifications, so the system can be built."
      },
      {
        title: "The island of knights and knaves",
        problem: "You meet two islanders, A and B. A says: “We are both knaves.” What are A and B?",
        steps: [
          { label: "Step 1: Case 1 — suppose A is a knight", text: "Then A's statement is true, so both are knaves — contradicting A being a knight. This case is impossible." },
          { label: "Step 2: Case 2 — suppose A is a knave", text: "Then A's statement is false: it is not the case that both are knaves." },
          { label: "Step 3: Finish the deduction", text: "Since A is a knave, the only way “both are knaves” can be false is that B is a knight." }
        ],
        result: "A is a knave and B is a knight."
      },
      {
        title: "Designing a Boolean search query",
        problem: "You want web pages about hiking trails in Utah or Arizona, but nothing about Colorado. Write the query.",
        steps: [
          { label: "Step 1: Identify the alternatives", text: "Utah or Arizona — a disjunction: (Utah OR Arizona)." },
          { label: "Step 2: Add the mandatory term", text: "AND hiking AND trails — conjunctions narrow the result." },
          { label: "Step 3: Add the exclusion", text: "NOT Colorado removes every page mentioning Colorado." }
        ],
        result: "(Utah OR Arizona) AND hiking AND trails NOT Colorado — AND narrows, OR broadens, NOT excludes, exactly like ∧, ∨, ¬."
      }
    ],
    keyTakeaways: [
      "Translate first, reason second: name the atomic propositions, then connect them.",
      "“p only if q” is p → q; “p unless q” is ¬q → p (i.e., p ∨ q).",
      "A specification list is consistent exactly when some truth assignment makes all specs true at once.",
      "Boolean search operators AND, OR, NOT behave like ∧, ∨, ¬ with parentheses for grouping.",
      "Knights-and-knaves puzzles are solved by case analysis: assume each speaker's type and discard contradictory cases.",
      "Inverters, OR gates and AND gates physically implement ¬, ∨, ∧ — logic is the blueprint of hardware."
    ],
    quiz: [
      {
        q: "A list of system specifications is consistent when:",
        options: ["each specification is a tautology", "at least one truth assignment makes every specification true at once", "no two specifications mention the same variable", "all specifications can be false simultaneously"],
        answer: 1,
        explanation: "Consistency means the conjunction of all specifications is satisfiable — one row of the joint truth table where everything is true. Tautologies are irrelevant, and all-false says nothing about all-true."
      },
      {
        q: "The specifications “p ∨ q”, “¬p”, and “p → q” are simultaneously satisfied when:",
        options: ["p = T, q = T", "p = T, q = F", "p = F, q = T", "p = F, q = F"],
        answer: 2,
        explanation: "¬p forces p = F; then p ∨ q forces q = T; and p → q becomes F → T, which is true. No other assignment works (with p = F, q = F the first spec fails)."
      },
      {
        q: "“You will pass the course unless you skip the final exam” (p: you pass; q: you skip the final) translates as:",
        options: ["¬q → p", "q → p", "p → ¬q", "p ↔ q"],
        answer: 0,
        explanation: "“p unless q” means that when the “unless” condition fails, p must hold: ¬q → p, equivalently p ∨ q. The other options reverse the direction or claim equivalence where none exists."
      },
      {
        q: "An islander says “I am a knave.” On an island where knights always tell the truth and knaves always lie:",
        options: ["the speaker is a knight", "the speaker is a knave", "the situation is impossible — neither type could truthfully or falsely say this", "the speaker's type cannot be determined"],
        answer: 2,
        explanation: "A knight saying it would be asserting a falsehood (impossible for a knight); a knave saying it would be asserting a truth (impossible for a knave). No inhabitant can ever make this statement, so the scenario is impossible."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.3
  {
    sectionId: "rosen-ch1-s3",
    depth: [
      {
        tier: "masters",
        title: "Equational logic, resolution, and satisfiability",
        blocks: [
          { kind: "para", body: "Section 1.3 works equivalences by hand; the graduate reading makes the tool precise. Logical equivalence is a **congruence** on formulas: it is an equivalence relation, and it is preserved in every context — if $\\varphi \\equiv \\psi$ then $C[\\varphi] \\equiv C[\\psi]$ for any formula $C$ with a hole — which is precisely the license an algebraic derivation uses when it rewrites one subformula at a time and leaves the rest alone. The same frame exposes the deep symmetry of the subject: **satisfiability and validity are duals**, since $\\varphi$ is valid exactly when $\\lnot\\varphi$ is unsatisfiable, so a refutation engine for one is a decision engine for the other. That design decision powers every theorem prover, and the two technologies that follow — resolution and Horn propagation — are the two exploitations of it that survive into modern practice." },
          { kind: "theorem", heading: "Resolution is sound and refutation-complete", body: "A **clause** is a disjunction of literals, and a CNF formula is read as its set of clauses. From clauses $A \\lor p$ and $B \\lor \\lnot p$, resolution infers the **resolvent** $A \\lor B$. Resolution is sound — every resolvent is a logical consequence of its parents — and, as a refutation system, complete: an unsatisfiable clause set has a resolution derivation of the empty clause, and a satisfiable one never derives it. Refutation by resolution is therefore a complete alternative to truth tables: to prove $\\varphi$ a tautology, refute the clause set of $\\lnot\\varphi$." },
          { kind: "proof", body: "Soundness is a two-case check: at any assignment satisfying both parents, if $p$ is false then the clause $A \\lor p$ is satisfied through some literal of $A$, and if $p$ is true then $B \\lor \\lnot p$ is satisfied through $B$; either way $A \\lor B$ holds. Completeness follows by induction on the number of variables, the Davis–Putnam elimination. Let $\\Sigma$ be an unsatisfiable clause set; close it under resolution on the single variable $p$, and delete every clause containing $p$ or $\\lnot p$, obtaining $\\Sigma'$ over the remaining variables. Every clause of $\\Sigma'$ is derivable from $\\Sigma$, so suppose toward contradiction that some assignment $\\sigma$ satisfies $\\Sigma'$. Split the clauses of $\\Sigma$ into those containing $p$, those containing $\\lnot p$, and the rest — the rest survive into $\\Sigma'$, so $\\sigma$ satisfies them. If setting $p$ true falsifies $\\Sigma$, some clause $B \\lor \\lnot p$ has $B$ false under $\\sigma$; if setting $p$ false also fails, some clause $A \\lor p$ has $A$ false under $\\sigma$; then the resolvent $A \\lor B$ — which the closure placed in $\\Sigma'$ — is falsified by $\\sigma$, contradicting that $\\sigma$ satisfies $\\Sigma'$. So one of the two settings satisfies $\\Sigma$: an unsatisfiable $\\Sigma$ forces $\\Sigma'$ unsatisfiable, and by induction the empty clause is derivable from $\\Sigma'$, hence from $\\Sigma$. A satisfying set can never derive the empty clause — soundness again — so refutation exactly characterizes unsatisfiability." },
          { kind: "theorem", heading: "Unit propagation solves Horn-SAT", body: "A **Horn clause** is a disjunction of literals with at most one positive literal, equivalently an implication $p_1 \\land \\cdots \\land p_k \\to q$ — a **fact** when $k = 0$, a **goal** when the head is falsity. A Horn formula is satisfiable if and only if the following fixpoint computation succeeds: start with the set $U$ of facts; whenever all premises of a clause have entered $U$, add its conclusion; if a goal clause's premises all enter $U$, report unsatisfiable. If the process stops without failure, $U$ is the **least model** of the definite clauses — contained in every other model — and the whole computation runs in time linear in the formula size (Dowling and Gallier, 1984). This fixpoint is exactly how logic-programming interpreters execute queries, and why pure Prolog programs are tractable." },
          { kind: "proof", body: "Let $U^\\ast$ be the closure the propagation computes, and let $M$ be any model of the formula. By induction on the stages, every stage is contained in $M$: the facts are clauses with empty bodies, which $M$ must satisfy outright; and if all premises of $p_1 \\land \\cdots \\land p_k \\to q$ lie in $M$, then $M$ satisfies the clause only if $q \\in M$. Hence $U^\\ast \\subseteq M$ for every model $M$ — the propagation computes the least model of the definite clauses, which is where linear-time satisfiability comes from: only one candidate needs testing. Now both directions are immediate. If the process stops without a goal firing, then $U^\\ast$ itself is a model: each definite clause either had its conclusion added, or some premise is forever absent, hence false in $U^\\ast$; and each goal clause has a premise forever absent, so it holds vacuously. If instead a goal fires, all its premises lie in $U^\\ast$, hence in every model, so every model falsifies that goal clause — the formula is unsatisfiable. A linear-time implementation keeps a counter of unsatisfied premises per clause and a queue of newly derived atoms." },
          { kind: "derivation", heading: "Two-SAT as an implication graph", body: "A 2-SAT instance is a graph problem in disguise. For each clause $(\\lnot p \\lor q)$ add the implications $p \\to q$ and $\\lnot q \\to \\lnot p$ — a clause is false exactly when the corresponding implication is violated — producing the **implication graph**, which is skew-symmetric: whenever it contains the edge $l \\to m$ it also contains $\\lnot m \\to \\lnot l$. An assignment satisfies the formula exactly when the set of literals it makes true is closed under the edges. **The criterion (Aspvall–Plass–Tarjan, 1979)**: the formula is satisfiable if and only if no variable has $p$ and $\\lnot p$ in the same strongly connected component. Necessity is immediate: a cycle through both forces any consistent assignment to make both true — an impossibility. For sufficiency, topologically order the components of the condensation and set each variable true exactly when its literal's component comes **after** its negation's; skew-symmetry guarantees the choice is consistent, because an edge from a chosen-true literal leads to another chosen-true one, and any contradiction inside the ordering would collapse the two complementary components into a single cycle. The result: satisfiability of 2-CNF in linear time by depth-first search — structure in the clause set buys algorithms that brute force cannot see." }
        ]
      },
      {
        tier: "phd",
        title: "Proof complexity: resolution and its limits",
        blocks: [
          { kind: "theorem", heading: "Haken's pigeonhole bound", body: "Let $\\mathrm{PHP}_n$ — the pigeonhole principle for $n$ holes and $n+1$ pigeons — be written as an unsatisfiable CNF over variables $p_{ij}$ reading “pigeon $i$ sits in hole $j$,” with clauses asserting that every pigeon sits somewhere and that no hole holds two pigeons. Every resolution refutation of $\\mathrm{PHP}_n$ has length at least $2^{\\Omega(n)}$, although the formula itself has only polynomially many clauses. Resolution — the complete rule of the Level II notes — is nonetheless **exponentially weak** on this most combinatorial of tautologies: the first super-polynomial lower bound in proof complexity (Haken, 1985), and still the textbook exhibit of the gap between completeness and efficiency." },
          { kind: "para", body: "Haken's technique is **bottleneck counting**. Call an assignment of the pigeon variables *critical* when it comes from an injective placement of $n$ of the pigeons into the $n$ holes, the last pigeon left homeless; such an assignment satisfies every clause but one, and a refutation must kill every critical assignment by deriving some clause it falsifies. The counting shows that any clause of moderate width kills only a few critical assignments — an isoperimetric fact about partial matchings — so exponentially many clauses are needed to cover them all. Later work systematized the phenomenon: Ben-Sasson and Wigderson (2001) proved a general **width–size tradeoff**, converting lower bounds on the width of any refutation into lower bounds on its length, and the pigeonhole formulas remain the laboratory in which the field tests its instruments. The exact resolution complexity of the *onto* variant — where every hole must be occupied — is a subtler quantity tied to matching structures." },
          { kind: "para", body: "The broader program is **proof complexity**, posed by Stephen Cook in the 1970s: is there a propositional proof system in which every tautology has a polynomial-size proof? Such a “super” system exists exactly if $\\mathrm{NP} = \\mathrm{coNP}$, making the question the natural dual of the P versus NP problem of the first section's Level III notes. The known map is ragged: resolution and its refinements fall to exponential bounds, and constant-depth Frege systems fall on counting principles (Beame–Pitassi–Impagliazzo; Krajíček–Pudlák–Woods, 1990s). But for **Frege systems** — ordinary Hilbert-style propositional calculi — no super-polynomial lower bound is known at all, only quadratic ones, and separating Frege from **extended Frege**, which merely adds definitional abbreviations, is a recognized open problem. Each lower bound is a theorem about the limits of an inference style; each gap is a theorem about the limits of current mathematics." }
        ]
      },
    ],
    readingTime: 11,
    intro: "Two propositions that always share the same truth value are logically equivalent, and the algebra of such equivalences is what makes logic computable. This section builds the complete law toolkit — De Morgan's laws, the distributive laws, the conditional-biconditional rewrites — and applies it to classifying tautologies and testing satisfiability.",
    objectives: [
      "Classify propositions as tautologies, contradictions, or contingencies",
      "Prove equivalences with truth tables and with algebraic derivations",
      "Use De Morgan's laws and the standard equivalence laws fluently",
      "Rewrite conditionals and biconditionals in terms of ∧, ∨, ¬",
      "Determine whether a compound proposition is satisfiable"
    ],
    concepts: [
      {
        term: "Tautology, contradiction, contingency",
        kind: "definition",
        statement: "A compound proposition is a **tautology** if it is true for every assignment of truth values to its variables, a **contradiction** if it is false for every assignment, and a **contingency** otherwise.",
        detail: "p ∨ ¬p is a tautology; p ∧ ¬p is a contradiction; p ∨ q is a contingency (its truth depends on the facts). Only tautologies and contradictions are independent of how the world actually is."
      },
      {
        term: "Logical equivalence",
        kind: "definition",
        statement: "Propositions p and q are **logically equivalent**, written p ≡ q, if and only if p ↔ q is a tautology — equivalently, if they have identical truth tables.",
        detail: "The symbol ≡ is not the equals sign: it asserts a fact about truth values, and it is reflexive, symmetric and transitive. A very useful test: p ≡ q iff p ↔ q is a tautology."
      },
      {
        term: "De Morgan's laws",
        kind: "law",
        statement: "**¬(p ∧ q) ≡ ¬p ∨ ¬q** and **¬(p ∨ q) ≡ ¬p ∧ ¬q**: the negation of a conjunction is the disjunction of the negations, and the negation of a disjunction is the conjunction of the negations.",
        detail: "Negation flips ∧ into ∨ and vice versa. These are the most-used laws in the chapter — “not (p and q)” means “not p or not q,” not “not p and not q.”"
      },
      {
        term: "The logical equivalence laws",
        kind: "law",
        statement: "Identity: p ∧ T ≡ p, p ∨ F ≡ p. Domination: p ∨ T ≡ T, p ∧ F ≡ F. Idempotent: p ∨ p ≡ p, p ∧ p ≡ p. Double negation: ¬¬p ≡ p. Commutative: p ∨ q ≡ q ∨ p, p ∧ q ≡ q ∧ p. Associative: (p ∨ q) ∨ r ≡ p ∨ (q ∨ r), and likewise for ∧. Distributive: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r), p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r). Absorption: p ∨ (p ∧ q) ≡ p, p ∧ (p ∨ q) ≡ p. Negation: p ∨ ¬p ≡ T, p ∧ ¬p ≡ F.",
        detail: "These mirror the laws of arithmetic (commutative, associative, distributive) plus logic-specific ones (domination, absorption, negation). Memorize them — every algebraic proof is a chain of these steps."
      },
      {
        term: "Conditional and biconditional rewrites",
        kind: "law",
        statement: "p → q ≡ ¬p ∨ q ≡ ¬q → ¬p. Also p → q ≡ ¬q → ¬p (contrapositive) and (p ∧ ¬q) → F is the “proof by contradiction” form. For the biconditional: p ↔ q ≡ (p → q) ∧ (q → p) ≡ (p ∧ q) ∨ (¬p ∧ ¬q) ≡ ¬(p ⊕ q).",
        detail: "The single most useful identity in the book: an implication is an or in disguise. It converts every conditional into ∧/∨/¬ territory, where the algebraic laws operate."
      },
      {
        term: "Substitution instances stay tautologies",
        kind: "method",
        statement: "Every substitution instance of a tautology is a tautology: replacing the variables p, q, r in an equivalence by arbitrary compound propositions yields a new equivalence.",
        detail: "From De Morgan's law we immediately get ¬((p → r) ∧ (q ∨ s)) ≡ ¬(p → r) ∨ ¬(q ∨ s) without any new truth table. This is why a short list of laws generates endless valid reasoning."
      },
      {
        term: "Satisfiability",
        kind: "definition",
        statement: "A compound proposition is **satisfiable** if there is an assignment of truth values to its variables that makes it true. A compound proposition is a tautology if and only if its negation is not satisfiable.",
        detail: "Satisfiability (SAT) is computationally hard in general but enormously useful: Sudoku, n-queens and circuit verification all reduce to finding a satisfying assignment of a giant compound proposition built from the puzzle's constraints."
      },
      {
        term: "Two methods for proving equivalences",
        kind: "method",
        statement: "**(1) Truth tables**: build the 2ⁿ rows for each side and compare columns — always works, but doubles with each variable. **(2) Algebraic derivation**: transform one side into the other with the known laws, citing each step.",
        detail: "Prefer algebra once you have three or more variables. A hybrid strategy is also legitimate: show each side is equivalent to some common third proposition."
      },
      {
        term: "Normal-form thinking",
        kind: "insight",
        statement: "Every compound proposition can be rewritten using only ∧, ∨ and ¬ (conditionals eliminated via p → q ≡ ¬p ∨ q), and even using a single connective such as NAND (¬(p ∧ q)), which is functionally complete.",
        detail: "This is why hardware can be built from one type of gate, and why mastering ∧, ∨, ¬ manipulations is enough in principle — every other connective is an abbreviation."
      }
    ],
    examples: [
      {
        title: "An algebraic equivalence proof",
        problem: "Show that ¬(p ∨ (¬p ∧ q)) ≡ ¬p ∧ ¬q using the laws of logic.",
        steps: [
          { label: "Step 1: Apply De Morgan's second law to the outer negation", text: "¬(p ∨ (¬p ∧ q)) ≡ ¬p ∧ ¬(¬p ∧ q)." },
          { label: "Step 2: Apply De Morgan's first law and double negation", text: "¬(¬p ∧ q) ≡ ¬(¬p) ∨ ¬q ≡ p ∨ ¬q, so the whole expression is ¬p ∧ (p ∨ ¬q)." },
          { label: "Step 3: Distribute", text: "¬p ∧ (p ∨ ¬q) ≡ (¬p ∧ p) ∨ (¬p ∧ ¬q)." },
          { label: "Step 4: Negation and identity laws", text: "(¬p ∧ p) ≡ F, and F ∨ X ≡ X, leaving ¬p ∧ ¬q." }
        ],
        result: "¬(p ∨ (¬p ∧ q)) ≡ ¬p ∧ ¬q, proved in four law-cited steps with no truth table."
      },
      {
        title: "Proving a tautology without a truth table",
        problem: "Show that (p ∧ q) → (p ∨ q) is a tautology.",
        steps: [
          { label: "Step 1: Eliminate the conditional", text: "(p ∧ q) → (p ∨ q) ≡ ¬(p ∧ q) ∨ (p ∨ q)." },
          { label: "Step 2: Apply De Morgan's law", text: "¬(p ∧ q) ≡ ¬p ∨ ¬q, giving (¬p ∨ ¬q) ∨ (p ∨ q)." },
          { label: "Step 3: Reassociate and pair opposites", text: "By commutativity and associativity: (¬p ∨ p) ∨ (¬q ∨ q)." },
          { label: "Step 4: Apply the negation law, then domination", text: "(¬p ∨ p) ≡ T and (¬q ∨ q) ≡ T, so the expression is T ∨ T ≡ T." }
        ],
        result: "The proposition is true under every assignment — a tautology."
      },
      {
        title: "Testing satisfiability",
        problem: "Determine whether (p ∨ ¬q) ∧ (¬p ∨ q) ∧ (¬p ∨ ¬q) is satisfiable.",
        steps: [
          { label: "Step 1: Try p = T, q = T", text: "The third clause ¬p ∨ ¬q is F — fails." },
          { label: "Step 2: Try p = T, q = F", text: "The second clause ¬p ∨ q is F — fails." },
          { label: "Step 3: Try p = F, q = T", text: "The first clause p ∨ ¬q is F — fails." },
          { label: "Step 4: Try p = F, q = F", text: "All three clauses evaluate to T — the assignment works." }
        ],
        result: "The proposition is satisfiable (only at p = F, q = F). Searching the four rows of the truth table was enough here; SAT solvers do exactly this search, but smarter, for millions of variables."
      }
    ],
    keyTakeaways: [
      "p ≡ q iff p ↔ q is a tautology — equivalently, the two truth tables match row for row.",
      "De Morgan's laws: negation swaps ∧ with ∨ — the most frequently used equivalences in the course.",
      "p → q ≡ ¬p ∨ q ≡ ¬q → ¬p — one proposition in three shapes.",
      "Algebraic derivation beats truth tables as soon as the variable count grows.",
      "Satisfiable means some assignment makes the proposition true; a tautology's negation is unsatisfiable.",
      "The identity, domination, idempotent, double-negation, commutative, associative, distributive, absorption and negation laws form your complete proof toolkit."
    ],
    quiz: [
      {
        q: "¬(p ∧ q) is logically equivalent to:",
        options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "p → q"],
        answer: 1,
        explanation: "By De Morgan's law the negation of a conjunction is the disjunction of the negations: ¬p ∨ ¬q. (p → q ≡ ¬p ∨ q is not equivalent: at p = F, q = F we get ¬(F) = T but ¬p ∨ q = F.)"
      },
      {
        q: "Which of the following is NOT equivalent to p → q?",
        options: ["¬p ∨ q", "¬q → ¬p", "¬p → ¬q", "(p ∧ q) ∨ ¬p"],
        answer: 2,
        explanation: "¬p → ¬q is the inverse of the conditional, not equivalent to it. The others are the disjunctive form, the contrapositive, and an absorption-style rewrite — all equivalent to p → q."
      },
      {
        q: "The compound proposition (p ∨ ¬p) → q simplifies to:",
        options: ["q", "T", "F", "p ∧ q"],
        answer: 0,
        explanation: "p ∨ ¬p ≡ T, and T → q ≡ ¬T ∨ q ≡ q. The whole proposition says exactly as much as q itself."
      },
      {
        q: "The proposition (p ∨ q) ∧ (¬p ∨ q) ∧ (p ∨ ¬q) ∧ (¬p ∨ ¬q) is:",
        options: ["a tautology — it is true at p = q = T", "satisfiable only at p = T, q = F", "not satisfiable — every assignment falsifies at least one clause", "equivalent to p ⊕ q"],
        answer: 2,
        explanation: "Check the four assignments: T,T fails clause 4; T,F fails clause 2; F,T fails clause 3; F,F fails clause 1. No assignment satisfies all four clauses, so the proposition is a contradiction (unsatisfiable)."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.4
  {
    sectionId: "rosen-ch1-s4",
    depth: [
      {
        tier: "masters",
        title: "Tarskian semantics, definability, and prenex forms",
        blocks: [
          { kind: "para", body: "Tarski's 1933 move makes “meaning” precise. A **structure** $\\mathcal{A} = (A;\\, R^{\\mathcal{A}}_1, f^{\\mathcal{A}}_1, c^{\\mathcal{A}}_1, \\dots)$ is a nonempty set $A$ — the **universe** — together with interpretations: a concrete relation for each predicate symbol, a concrete function for each function symbol, a concrete element for each constant. A **variable assignment** is a function $s$ from variables to $A$. Satisfaction $\\mathcal{A} \\models \\varphi[s]$ is then defined by **recursion on formulas**: atoms hold when the interpreted tuple belongs to the interpreted relation; connectives follow the truth tables; and $\\mathcal{A} \\models \\forall x\\, \\varphi[s]$ exactly when $\\mathcal{A} \\models \\varphi[s(x|a)]$ for **every** $a \\in A$, where $s(x|a)$ reassigns $x$ to $a$. A sentence's truth depends on $\\mathcal{A}$ alone, and this clause-by-clause definition is what makes every later metatheorem — substitution, prenexing, completeness — provable by induction." },
          { kind: "theorem", heading: "Prenex normal form", body: "Every first-order formula $\\varphi$ is logically equivalent to one of the shape $Q_1 x_1 \\cdots Q_k x_k\\, \\psi$ — all quantifiers in front, the **matrix** $\\psi$ quantifier-free — with $k$ at most the number of quantifier occurrences in $\\varphi$. The rewriting uses the quantifier dualities $\\lnot \\forall x\\, \\varphi \\equiv \\exists x\\, \\lnot \\varphi$ and $\\lnot \\exists x\\, \\varphi \\equiv \\forall x\\, \\lnot \\varphi$, together with the commutations $(Q x\\, \\varphi) \\circ \\chi \\equiv Q x (\\varphi \\circ \\chi)$ for a binary connective $\\circ$, valid whenever $x$ is not free in $\\chi$; renaming bound variables keeps that proviso true. The theorem is the engine behind clausification and Skolemization in every automated prover." },
          { kind: "proof", body: "The algorithm: push negations inward with the dualities until they sit on atoms (the propositional De Morgan laws handle the connectives), then pull quantifiers outward past the binary connectives, renaming bound variables whenever the proviso fails. Correctness rests on two lemmas. First, the dualities are semantic facts: by Tarski's recursion, $\\mathcal{A} \\models \\lnot \\forall x\\, \\varphi[s]$ iff not every $a \\in A$ yields $\\mathcal{A} \\models \\varphi[s(x|a)]$ iff some $a$ fails iff $\\mathcal{A} \\models \\exists x\\, \\lnot \\varphi[s]$. Second, the **coincidence lemma**: satisfaction of $\\chi$ under $s$ depends only on the values of the free variables of $\\chi$ (structural induction on $\\chi$); so when $x$ is not free in $\\chi$, the assignments $s(x|a)$ all agree with $s$ on $\\chi$, and the commutation preserves truth at every assignment. Renaming bound variables — alpha-conversion — is sound for the same reason, and fresh names always exist. Each pulling step strictly decreases the number of quantifiers buried under a connective, so the algorithm terminates with all quantifiers in prefix position and the matrix quantifier-free, equivalence preserved at every step." },
          { kind: "example", heading: "What a structure can and cannot define", body: "Work in the structure $\\mathcal{Z} = (\\mathbb{Z}; +, 0)$. The even integers **are definable**: the formula $\\exists y\\,(y + y = x)$ holds exactly of the even elements. The order relation is **not definable**, and the proof is the **automorphism method**. The map $\\pi(x) = -x$ is an automorphism of $\\mathcal{Z}$ — a bijection with $\\pi(x + y) = \\pi(x) + \\pi(y)$ and $\\pi(0) = 0$ — and a structural induction shows definable relations are preserved by every automorphism: atomic formulas transfer because $\\pi$ respects the interpreted operations, and the quantifier step transfers because $\\pi$ is onto. So if some formula $\\theta(x, y)$ defined the order, then from $\\mathcal{Z} \\models \\theta(0, 1)$ — true, since $0 < 1$ — preservation would give $\\mathcal{Z} \\models \\theta(\\pi(0), \\pi(1))$, that is $\\mathcal{Z} \\models \\theta(0, -1)$, forcing $0 < -1$ — false. The method generalizes: to prove undefinability, find a symmetry of the structure that the would-be definition fails to respect, and the same idea scales to Ehrenfeucht–Fraïssé games at Level III of the nested-quantifiers section." },
          { kind: "para", body: "Two classical theorems show first-order logic cannot control cardinality. **Downward Löwenheim–Skolem**: a structure in a countable language has a countable **elementary submodel** — close the interpretations under the functions definable in the language, and a Tarski test shows the closure satisfies the same sentences. **Upward Löwenheim–Skolem**: a theory with an infinite model has models of every larger cardinality — add $\\kappa$ fresh constants with axioms making them pairwise distinct; every finite subset is satisfiable in the infinite model, so compactness (proved at Level II of the inference section) supplies a model of the whole. The punchline is the **Skolem paradox**: if Zermelo–Fraenkel set theory is consistent, it has a countable model — a universe internally certifying uncountable sets, itself countable from outside. The escape is instructive: the witnessing bijection is not an element of the model, because countability is not first-order definable within it. First-order expressive power has a hard ceiling; the Level III notes below measure it." },
          { kind: "remark", body: "The empty domain is excluded by convention: on it $\\forall x\\, \\varphi$ would be vacuously true and $\\exists x\\, \\varphi$ vacuously false, breaking the duality $\\lnot \\forall \\equiv \\exists \\lnot$ that the whole apparatus leans on — Tarski's choice, made to keep De Morgan's laws for quantifiers intact. Substitution must also respect binding: substituting a term $t$ containing $y$ into $\\varphi(x)$ under a $\\forall y$ **captures** the variable, and the result is meaningless. Alpha-conversion — renaming bound variables to fresh ones — is the repair, and capture-avoiding substitution is exactly the hygiene condition every proof assistant, from Prolog to Lean, enforces mechanically before it will accept a rewrite." }
        ]
      },
      {
        tier: "phd",
        title: "The expressive ceiling of first-order logic",
        blocks: [
          { kind: "para", body: "Church's theorem (1936; Turing's route was independent): **validity in first-order logic is undecidable** — no algorithm decides whether an arbitrary sentence holds in all structures. The reduction encodes a Turing machine's halting problem into a sentence of a small signature, true exactly of encoding structures in which the machine halts. Validity is nevertheless **semidecidable**: Gödel's completeness theorem turns proof search into a sound and complete semi-decision procedure, so valid sentences are eventually proved while invalid ones may run forever — the first great undecidability result, and the reason automated provers must be smarter than enumeration. On finite structures the picture inverts: by Trakhtenbrot's theorem (1950), the set of sentences with **finite** models is not semidecidable either, so finite and classical model theory are genuinely different subjects — a fact that shapes every theorem in this tier, since all of them concern finite structures." },
          { kind: "theorem", heading: "The zero–one law", body: "Endow the graphs on vertex set $\\{1, \\dots, n\\}$ with the distribution $G(n, 1/2)$ — every labeled graph equally likely. For every first-order sentence $\\varphi$ of the language of graphs, the limiting probability $\\mu(\\varphi) = \\lim_{n \\to \\infty} \\Pr\\bigl[G(n,1/2) \\models \\varphi\\bigr]$ exists and equals $0$ or $1$. The consequence: any graph property whose asymptotic probability fails to converge, or converges to a value strictly between 0 and 1, is not first-order — parity of the number of edges is the standard casualty, oscillating near one-half forever. There are no asymptotically delicate first-order graph properties (Fagin, 1976)." },
          { kind: "proof", body: "The engine is the family of **extension axioms**: for all disjoint tuples $\\bar a, \\bar b$ of distinct vertices, there is a vertex adjacent to every member of $\\bar a$ and to none of $\\bar b$. In $G(n, 1/2)$ a fixed vertex fails to serve with probability $1 - 2^{-(|\\bar a| + |\\bar b|)}$, so the probability that no vertex serves is at most $\\left(1 - 2^{-(|\\bar a| + |\\bar b|)}\\right)^{n}$, which tends to $0$: each single axiom holds asymptotically almost surely. Let $T$ collect all extension axioms. A back-and-forth argument shows any two models of $T$ satisfy the same first-order sentences — $T$ is complete; its unique countable model is the **Rado graph**, the countable random graph. Now fix $\\varphi$. If $T \\models \\varphi$, compactness yields a finite $T_0 \\subseteq T$ entailing $\\varphi$, and $\\Pr[G \\models T_0] \\to 1$ by a union bound over finitely many axioms, so $\\mu(\\varphi) = 1$. Otherwise $T \\models \\lnot \\varphi$, and the same argument gives $\\mu(\\varphi) = 0$. There is no third outcome, and every first-order sentence is decided by the extension axioms alone." },
          { kind: "theorem", heading: "Fagin's theorem", body: "A class of finite structures is decidable in **NP** if and only if it is definable by an **existential second-order** sentence — first-order logic augmented with relation variables $R_1, \\dots, R_k$ that are existentially quantified, with the body itself first-order. The certificate a nondeterministic machine guesses is nothing but the interpretation of the second-order variables: three-colorability is $\\exists R, G, B$ (“the three color classes cover the graph”), and admitting a Hamiltonian path is $\\exists L$ (“$L$ linearly orders the vertices with consecutive ones adjacent”). Complexity classes thereby **become logics** — the program of **descriptive complexity** (Fagin, 1974): the polynomial hierarchy is exactly full second-order logic (Stockmeyer), and PSPACE and the exponent-time classes correspond to suitable fixpoint and second-order fragments on ordered structures. The one class that refuses every natural logical characterization is the most important one — the open problem below." },
          { kind: "open", heading: "A logic for polynomial time", body: "Is there a “reasonable” logic whose sentences define exactly the polynomial-time properties of finite structures? Fagin's theorem captures NP elegantly, but P has resisted every candidate: the natural fixpoint logics capture P only on **ordered** structures, and Gurevich conjectured that no logic captures P on unordered structures at all — a conjecture which, if proved, would separate P from NP. Abiteboul and Vianu's reductions show the unordered question collapses onto deep separations between database query languages, one of the rare places where logic, database theory and complexity are provably the same question. After fifty years, the polynomial-time properties of finite structures still have no logic to call home." }
        ]
      },
    ],
    readingTime: 10,
    intro: "Propositions are too coarse to say “every prime larger than 2 is odd” — that sentence talks about objects and needs variables. Predicates are propositions with holes in them, and quantifiers ∀ and ∃ are the tools that plug the holes by sweeping over whole domains. Nearly every theorem in mathematics is a quantified predicate statement.",
    objectives: [
      "Evaluate predicates and propositional functions on concrete domains",
      "Translate between quantified statements and English in both directions",
      "Negate statements with ∀ and ∃ correctly",
      "Understand exactly when universal and existential statements are true or false",
      "Recognize and expand the uniqueness quantifier ∃!"
    ],
    concepts: [
      {
        term: "Predicates",
        kind: "definition",
        statement: "A **predicate** P(x) is a sentence containing a variable that becomes a proposition when the variable is assigned a value from its domain. P(x) itself is a **propositional function**; P(5) is a proposition.",
        detail: "“x is greater than 3” is a predicate: substituting x = 5 gives the true proposition “5 > 3,” while x = 2 gives a false one. Predicates can take several variables: P(x, y): “x + y = 0.”"
      },
      {
        term: "Domain (universe of discourse)",
        kind: "definition",
        statement: "The **domain** of a predicate is the set of values its variables may take; the truth of a quantified statement is always relative to this domain.",
        detail: "The statement ∀x (x² ≥ x) is true over the positive integers but false over the real numbers (x = ½ fails). Always ask: quantified over what?"
      },
      {
        term: "Universal quantifier ∀",
        kind: "definition",
        statement: "The **universal quantification** ∀x P(x) is the proposition “P(x) is true for all values of x in the domain.” It is true exactly when P(x) holds for every element, and a single counterexample makes it false.",
        detail: "English cues: “for all,” “for every,” “all,” “each.” Over the empty domain it is vacuously true. To disprove a universal, exhibit one counterexample; to prove it, you must handle every element."
      },
      {
        term: "Existential quantifier ∃",
        kind: "definition",
        statement: "The **existential quantification** ∃x P(x) is the proposition “there exists an x in the domain such that P(x).” It is true exactly when at least one **witness** exists, and false when P(x) fails for every element.",
        detail: "English cues: “there exists,” “some,” “at least one.” To prove an existential, exhibit one witness; to disprove it, you must show every element fails."
      },
      {
        term: "De Morgan's laws for quantifiers",
        kind: "law",
        statement: "**¬∀x P(x) ≡ ∃x ¬P(x)** and **¬∃x P(x) ≡ ∀x ¬P(x)**: negation flips the quantifier and negates the predicate.",
        detail: "“Not everyone passed the exam” means “someone failed the exam”; “no student failed” means “every student passed.” Getting this backwards is a classic exam error — think through the English, not just the symbols."
      },
      {
        term: "Quantifiers with restricted domains",
        kind: "insight",
        statement: "∀x > 0 (x² ≥ x) abbreviates ∀x (x > 0 → x² ≥ x), while ∃x > 0 (x² = 25) abbreviates ∃x (x > 0 ∧ x² = 25): restricting a **universal** uses a conditional, restricting an **existential** uses a conjunction.",
        detail: "This asymmetry is the same one as in “all lions are fierce” (∀ with →) versus “some lion is fierce” (∃ with ∧), and mixing them up changes the meaning entirely."
      },
      {
        term: "Uniqueness quantifier ∃!",
        kind: "notation",
        statement: "**∃!x P(x)** means exactly one element of the domain satisfies P(x). It expands as ∃x (P(x) ∧ ∀y (P(y) → y = x)).",
        detail: "Example: ∃!x (x is an even prime) is true — the witness is 2. Uniqueness assertions appear everywhere in mathematics (“the” inverse, “the” limit), and this is their formal shape."
      },
      {
        term: "Binding, scope and free variables",
        kind: "notation",
        statement: "A quantifier's **scope** is the statement it directly precedes; a variable is **bound** if it lies in the scope of a quantifier naming it and **free** otherwise. Quantifiers bind tightly: ∀x P(x) ∨ Q(x) means (∀x P(x)) ∨ Q(x).",
        detail: "Write ∀x (P(x) ∨ Q(x)) if the disjunction belongs inside the quantifier. In a well-formed statement every variable is bound — a formula with free variables is a predicate, not a proposition."
      },
      {
        term: "Universal-conditional vs existential-conjunction",
        kind: "insight",
        statement: "“All A are B” translates as ∀x (A(x) → B(x)), while “some A is (not) B” translates as ∃x (A(x) ∧ ¬B(x)). Using ∧ with ∀ (or → with ∃) is a meaning-changing error.",
        detail: "∀x (Lion(x) ∧ Fierce(x)) absurdly claims that everything in the universe is a fierce lion. The conditional form is weak enough to be true of non-lions — exactly what “all” requires."
      }
    ],
    examples: [
      {
        title: "Truth values over the integers",
        problem: "Over the domain of all integers, determine the truth value of: (a) ∀x (x² ≥ x); (b) ∃x (x² = 2); (c) ∀x (x² > x); (d) ∃x (x³ = −1).",
        steps: [
          { label: "Step 1: Analyze (a)", text: "For negative x, x² is positive and beats x; at x = 0, 0 ≥ 0; at x = 1, 1 ≥ 1; and for x ≥ 2, x² ≥ 2x > x. Every integer passes — true." },
          { label: "Step 2: Analyze (b)", text: "x² = 2 requires x = ±√2, which are not integers. No witness exists — false." },
          { label: "Step 3: Analyze (c)", text: "A single counterexample suffices: x = 0 gives 0 > 0, false. (x = 1 also works.) So the universal is false." },
          { label: "Step 4: Analyze (d)", text: "The witness is x = −1: (−1)³ = −1. True." }
        ],
        result: "(a) true, (b) false, (c) false (counterexamples 0 and 1), (d) true (witness −1)."
      },
      {
        title: "The lion translations",
        problem: "Let L(x) = “x is a lion,” F(x) = “x is fierce,” C(x) = “x drinks coffee,” over the domain of all animals. Translate: (a) All lions are fierce. (b) Some lions do not drink coffee. (c) Then negate (b).",
        steps: [
          { label: "Step 1: Universal with conditional", text: "(a) ∀x (L(x) → F(x)) — every animal, if a lion, is fierce." },
          { label: "Step 2: Existential with conjunction", text: "(b) ∃x (L(x) ∧ ¬C(x)) — some animal is a lion and does not drink coffee." },
          { label: "Step 3: Negate and push inward", text: "¬∃x (L(x) ∧ ¬C(x)) ≡ ∀x ¬(L(x) ∧ ¬C(x)) by De Morgan for quantifiers." },
          { label: "Step 4: Simplify the propositional part", text: "¬(L(x) ∧ ¬C(x)) ≡ ¬L(x) ∨ C(x) ≡ L(x) → C(x)." }
        ],
        result: "The negation of (b) is ∀x (L(x) → C(x)): “every lion drinks coffee.” Notice how the quantifier flipped and the connective changed from ∧ to →."
      },
      {
        title: "Expressing uniqueness",
        problem: "Express “there is exactly one even prime number” with quantifiers, using E(x) = “x is even” and P(x) = “x is prime” over the positive integers.",
        steps: [
          { label: "Step 1: State the unique-existence form", text: "∃!x (E(x) ∧ P(x))." },
          { label: "Step 2: Expand ∃! as existence plus uniqueness", text: "∃x ((E(x) ∧ P(x)) ∧ ∀y ((E(y) ∧ P(y)) → y = x))." },
          { label: "Step 3: Identify the witness", text: "x = 2 satisfies E ∧ P, and any other even prime would have to equal 2 — the uniqueness clause is true." }
        ],
        result: "∃!x (E(x) ∧ P(x)) is true with witness 2: the expansion separates “there is at least one” from “there is at most one.”"
      }
    ],
    keyTakeaways: [
      "A predicate becomes a proposition only when its variables are bound — by substitution or by quantifiers.",
      "∀x P(x) is true iff P holds for every element; one counterexample kills it. ∃x P(x) is true iff some witness exists.",
      "Negation flips quantifiers: ¬∀x P(x) ≡ ∃x ¬P(x) and ¬∃x P(x) ≡ ∀x ¬P(x).",
      "“All A are B” is ∀ with →; “some A is B” is ∃ with ∧ — never mix these pairings.",
      "Quantifiers bind tightly; use parentheses to make scope explicit.",
      "∃!x P(x) means exactly one witness: existence plus ∀y (P(y) → y = x)."
    ],
    quiz: [
      {
        q: "¬∀x P(x) is logically equivalent to:",
        options: ["∃x ¬P(x)", "∀x ¬P(x)", "∃x P(x)", "¬∃x P(x)"],
        answer: 0,
        explanation: "By De Morgan's law for quantifiers, the failure of a universal statement means some element fails: ∃x ¬P(x). The other options are the negation of an existential, a universal negation, or an unchanged predicate."
      },
      {
        q: "Over the domain of positive integers, the statement ∀x (x² ≥ x) is:",
        options: ["true — the smallest positive integer is 1, and x² ≥ x for every x ≥ 1", "false — take x = 0", "false — take x = 1/2", "true only when x is prime"],
        answer: 0,
        explanation: "For x ≥ 1, multiplying x ≥ 1 by x gives x² ≥ x, so the universal holds. The proposed counterexamples are outside the domain (0 and 1/2 are not positive integers), so they are irrelevant."
      },
      {
        q: "With D(x) = “x is a dog” and F(x) = “x can fly,” the statement “No dog can fly” is:",
        options: ["∀x (D(x) → ¬F(x))", "∀x (D(x) ∧ ¬F(x))", "∃x (D(x) → ¬F(x))", "∃x (D(x) ∧ ¬F(x))"],
        answer: 0,
        explanation: "“No dog can fly” is a claim about every animal: if a dog, then it cannot fly. The ∧ version falsely claims everything is a non-flying dog; the ∃ versions merely assert one non-flying dog exists (far weaker)."
      },
      {
        q: "The statement ∃!x P(x) asserts that:",
        options: ["at least one x satisfies P", "at most one x satisfies P", "exactly one x satisfies P", "all x satisfy P"],
        answer: 2,
        explanation: "The uniqueness quantifier demands both existence of a witness and that any other witness equals it — exactly one. “At least one” is plain ∃; “at most one” is the second half alone."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.5
  {
    sectionId: "rosen-ch1-s5",
    depth: [
      {
        tier: "masters",
        title: "Duality, Skolem functions, and generalized quantifiers",
        blocks: [
          { kind: "theorem", heading: "Duality laws for nested quantifiers", body: "For every structure, formula and assignment: $\\lnot \\forall x\\, \\varphi$ is equivalent to $\\exists x\\, \\lnot \\varphi$, and $\\lnot \\exists x\\, \\varphi$ to $\\forall x\\, \\lnot \\varphi$; the implication $\\exists y\\, \\forall x\\, \\varphi \\models \\forall x\\, \\exists y\\, \\varphi$ always holds; and the converse fails in general. These are the precise forms of the section's rule — move the negation inward, flipping every quantifier it passes, and never swap an existential past a universal without a proof." },
          { kind: "proof", body: "All three claims are direct consequences of Tarski's recursive satisfaction definition (Level II of the predicates section). For the negation laws: $\\mathcal{A} \\models \\lnot \\forall x\\, \\varphi[s]$ iff not every $a \\in A$ satisfies $\\mathcal{A} \\models \\varphi[s(x|a)]$, iff some $a$ fails it, iff some $a$ satisfies $\\mathcal{A} \\models \\lnot \\varphi[s(x|a)]$, iff $\\mathcal{A} \\models \\exists x\\, \\lnot \\varphi[s]$ — and dually for the second law. For the order claim, suppose $\\mathcal{A} \\models \\exists y\\, \\forall x\\, \\varphi[s]$, witnessed by $b$: for every $a$, the assignment reassigning $y$ to $b$ and $x$ to $a$ satisfies $\\varphi$, so choosing the same $b$ for each $x$ witnesses $\\mathcal{A} \\models \\forall x\\, \\exists y\\, \\varphi[s]$. The converse fails over the integers with order: let $\\varphi(x, y)$ be $y > x$. Each integer has a larger one, so $\\forall x\\, \\exists y\\, \\varphi$ holds; but no single $b$ exceeds every $x$, so $\\exists y\\, \\forall x\\, \\varphi$ fails. The witness $y$ may depend on $x$ exactly when its quantifier sits inside — that is the entire content of order sensitivity." },
          { kind: "para", body: "The dependency structure has a name. Given $\\forall x\\, \\exists y\\, P(x, y)$, the semantics supplies some witness for each $x$, and the axiom of choice assembles a **Skolem function** $f$ with $\\forall x\\, P(x, f(x))$; conversely any such $f$ witnesses the quantified statement. Skolemization — replacing existentials that sit under universals by function symbols — is the standard normal form behind automated reasoning, and it makes the game reading vivid: read $\\forall x$ as the **falsifier's move** (“choose any $x$”) and $\\exists y$ as the **verifier's** (“respond with $y$”), and $\\mathcal{A} \\models \\forall x\\, \\exists y\\, P(x,y)$ says exactly that the verifier has a winning strategy — a function telling her what to answer. Two adjacent universals commute because two falsifier moves can be exchanged; a universal and an existential cannot, because a response must come after its challenge. Alternation count thereby measures a statement's inherent interactivity, and its second-order content: one new function symbol per $\\forall\\exists$ block." },
          { kind: "derivation", heading: "Generalized and many-sorted quantification", body: "Two extensions earn their keep in both theory and practice. **Many-sorted logic** partitions each structure into sorts — students, courses, grades — with every variable, quantifier, function and predicate assigned a sort, so that ill-typed formulas are not merely false but ungrammatical. The one-sorted theory is recovered by predicate symbols for the sorts, and the translation preserves validity, but the sorted presentation is the native language of databases, specification languages and SMT solvers, where types guard against meaningless queries. **Generalized quantifiers** then calibrate what $\\exists$ and $\\forall$ miss. “There are at least $k$” is genuinely first-order, though it needs $k$ variables: $$\\exists x_1 \\cdots \\exists x_k \\; \\bigwedge_{i < j} \\; x_i \\ne x_j.$$ But “there are infinitely many” is not first-order — the theorem proved next — and neither is “most $x$ satisfy $P$”. Each proposed quantifier spawns a logic with its own completeness theorem and its own complexity, and choosing quantifiers is how a theory declares exactly how much expressive power it intends to use." },
          { kind: "theorem", heading: "Finiteness is not first-order expressible", body: "No sentence of first-order logic defines the finite structures; indeed no set of sentences does. The class of infinite structures, by contrast, is defined by the infinite theory $\\{\\tau_k : k \\ge 1\\}$ of “at least $k$ elements” sentences, but by no single sentence — an asymmetry between the finite and the infinite that compactness forces on the logic. Second-order quantification repairs the omission instantly: “every injective self-map is surjective” pins finiteness with one quantifier over functions, the first hint of how much stronger second-order logic is (Level III below)." },
          { kind: "proof", body: "Suppose a set $\\Phi$ defined finiteness, and consider $T = \\Phi \\cup \\{\\tau_k : k \\ge 1\\}$, where $\\tau_k$ is the displayed formula of the previous block. Every finite subset of $T$ is satisfiable: it mentions only finitely many of the $\\tau_k$, and a finite structure with more elements than the largest mentioned $k$ satisfies those; and it satisfies every member of the finite part of $\\Phi$ because it is finite, so $\\Phi$ in its entirety holds of it. By the compactness theorem — proved at Level II of the rules-of-inference section — $T$ has a model $M$. $M$ satisfies every $\\tau_k$, so $M$ is infinite; but $M \\models \\Phi$ says $M$ is finite — contradiction. For single sentences the infinitude side falls as well: were $\\psi$ true exactly in the infinite structures, its negation would be a single sentence defining finiteness, which the first part rules out. So finiteness cannot be expressed even approximately, while infinitude needs the whole infinite theory $\\{\\tau_k\\}$ — and second-order logic, quantifying over the bijections directly, says it in one stroke." }
        ]
      },
      {
        tier: "phd",
        title: "Inexpressibility, Lindström, and finite structures",
        blocks: [
          { kind: "derivation", heading: "Why reachability escapes first-order logic", body: "Connectivity — the transitive closure of the edge relation — is the paradigm of a property expressible with nested quantifiers of unbounded depth but by no finite formula. Suppose a formula $\\varphi(x, y)$ defined reachability in every graph. Add constants $a, b$ and, for each $j$, let the sentence $\\rho_j$ block paths of length exactly $j$: $$\\rho_j \\;=\\; \\lnot\\, \\exists x_1 \\cdots \\exists x_j \\; \\bigl( E(a, x_1) \\land \\cdots \\land E(x_j, b) \\bigr).$$ Let $\\sigma_k$ conjoin $\\rho_1, \\dots, \\rho_k$, and consider $T = \\{\\varphi(a,b)\\} \\cup \\{\\sigma_k : k \\ge 1\\}$. Any finite subset of $T$ mentions paths only up to some maximum length $K$; a simple directed path of length $K + 1$ from $a$ to $b$ satisfies $\\varphi(a,b)$ — the endpoints are joined — while blocking every path of length at most $K$. So every finite subset of $T$ has a model, and by compactness $T$ itself has a model $M$. In $M$, the interpretation of $\\varphi$ says that $a$ reaches $b$; but every finite path from $a$ to $b$ is blocked, so no path exists and $\\varphi$ fails — contradiction. The same technique kills acyclicity and well-foundedness; no first-order sentence computes a transitive closure, which is why database languages add recursion by hand." },
          { kind: "para", body: "The method behind all such results is the **Ehrenfeucht–Fraïssé game**. Two players — the **spoiler** and the **duplicator** — alternate pebbling elements of two structures, the spoiler choosing in either structure, the duplicator responding in the other; the duplicator wins $k$ rounds if the pebbled tuples always form a partial isomorphism. The fundamental theorem: the duplicator has a $k$-round winning strategy on $\\mathcal{A}, \\mathcal{B}$ exactly when $\\mathcal{A}$ and $\\mathcal{B}$ satisfy the same sentences of quantifier rank at most $k$. Inexpressibility thereby becomes a strategy: to show that no depth-$k$ sentence defines a property, exhibit two structures differing in the property on which the duplicator survives $k$ rounds — two long paths of different lengths do this for connectivity. **Locality** explains the phenomenon wholesale: Gaifman's theorem shows every first-order formula is equivalent to one whose truth at a tuple depends only on bounded-radius neighborhoods around it, so global, recursive properties lie beyond any fixed quantifier depth. Pebbling with a bounded stock of reusable tokens characterizes the finite-variable logics of the open problem below." },
          { kind: "theorem", heading: "Lindström's theorem", body: "Fix a reasonable abstract notion of “logic” extending first-order logic (Lindström's regular logics: syntax effectively presented, semantic consequence closed under the standard operations). If such a logic satisfies both the **compactness theorem** and the **downward Löwenheim–Skolem theorem** — every satisfiable sentence has a countable model — then it is no stronger than first-order logic: every sentence of the logic is equivalent to a first-order sentence. First-order logic is therefore the **strongest** logic with compactness and countable models: the two theorems of Level II are not incidental features but a complete characterization of the logic itself (Lindström, 1969) — the first and most influential of the characterization theorems that treat logics as mathematical objects." },
          { kind: "proof", body: "This is a sketch; the full argument is Ebbinghaus–Flum–Thomas's Chapter VIII. The two properties are used in tandem against a putative sentence $\\varphi$ of the stronger logic that no first-order sentence matches. Compactness alone yields the finite-basis property: if a first-order theory entails $\\varphi$ in the stronger consequence relation, a finite part already does, so any separation between the logics must occur between elementarily equivalent structures. Downward Löwenheim–Skolem then brings all structures down to a countable universe, where an elementary-chain construction powered by compactness — building a chain of partial isomorphisms that the two structures must alternately extend and refute — forces two elementarily equivalent countable structures to disagree about $\\varphi$. But the elementary diagram argument shows such a pair cannot exist: one of the two logic properties fails first, and the contradiction lands. Every strengthening of first-order logic must therefore give up compactness or countable models: second-order logic, which defines finiteness, gives up both; the logics $\\mathrm{L}_{\\omega_1\\omega}$ keep countable models and surrender compactness — the theorem's predictions are exact." },
          { kind: "open", heading: "The finite-variable hierarchy", body: "Restrict first-order syntax to $k$ variables in the entire formula ($\\mathrm{L}^k$), reusing each as often as needed. Over arbitrary structures the hierarchy is known to be strict — each level expresses something the previous ones cannot. Over **finite** structures, where each level is decidable in principle, strictness is a long-standing open problem: whether every level adds genuinely new expressive power on finite structures has resisted decades of pebble-game technology. The variant with counting quantifiers ($\\mathrm{C}^k$) is strict on finite structures — the Cai–Fürer–Immerman construction — and is the exact combinatorial core of the **Weisfeiler–Leman** algorithm for graph isomorphism, so the open question is entangled with the complexity of isomorphism testing itself: how many variables, with counting, does it take to tell two finite graphs apart? No one knows." }
        ]
      },
    ],
    readingTime: 9,
    intro: "Real mathematical statements stack quantifiers: “every positive real has a square root” is ∀ followed by ∃. Nested quantifiers express the deepest facts of mathematics — limits, continuity, surjectivity — but they also hide traps, because swapping a ∀ and an ∃ changes the meaning entirely. This section teaches you to read, write and negate them with confidence.",
    objectives: [
      "Translate statements with two or more quantifiers in both directions",
      "Understand precisely why the order of ∀ and ∃ matters",
      "Express mathematical facts (inverses, roots, sums) with nested quantifiers",
      "Negate nested quantified statements one layer at a time"
    ],
    concepts: [
      {
        term: "Nested quantifiers",
        kind: "definition",
        statement: "Quantifiers are **nested** when one appears inside the scope of another, as in ∀x ∃y P(x, y). Read them left to right: for every x, there exists a y (possibly depending on x) such that P(x, y) holds.",
        detail: "Predicates with two variables, P(x, y), take pairs of values, and quantifying each variable turns them into genuine propositions — the final truth value depends on the domain and the order of the quantifiers."
      },
      {
        term: "The order of ∀ and ∃ matters",
        kind: "insight",
        statement: "∀x ∃y P(x, y) and ∃y ∀x P(x, y) are **not** equivalent. In the first, y may be chosen *after* seeing x (y depends on x); in the second, one single y must work for every x. The second implies the first, but not conversely.",
        detail: "With L(x, y) = “x loves y”: ∀x ∃y L(x, y) says everyone loves someone, while ∃y ∀x L(x, y) says some one person is loved by everybody. Over the reals, ∀x ∃y (x + y = 0) is true (pick y = −x) but ∃y ∀x (x + y = 0) is false (no fixed number is the inverse of everything)."
      },
      {
        term: "Same-type quantifiers commute",
        kind: "insight",
        statement: "∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y) and ∃x ∃y P(x, y) ≡ ∃y ∃x P(x, y): swapping two adjacent universals (or two adjacent existentials) never changes meaning; swapping a universal with an existential usually does.",
        detail: "Order only becomes critical at the boundary between a ∀ and an ∃ — that is where dependence of choices enters."
      },
      {
        term: "The two-variable truth conditions",
        kind: "insight",
        statement: "∀x ∀y P is true when P holds for **every pair**; ∃x ∃y P when **some pair** works; ∀x ∃y P when **each x has its own** y; ∃x ∀y P when **one x works against all** y.",
        detail: "To falsify ∀x ∀y P, exhibit one bad pair. To falsify ∀x ∃y P, exhibit one x for which no y works. To falsify ∃x ∀y P, show every x fails against some y. Knowing the failure mode tells you what a counterexample must look like."
      },
      {
        term: "Translating mathematics into nested quantifiers",
        kind: "method",
        statement: "Standard translations: “every real has an additive inverse” is ∀x ∃y (x + y = 0); “every nonzero real has a multiplicative inverse” is ∀x (x ≠ 0 → ∃y (xy = 1)); “the product of two negative reals is positive” is ∀x ∀y ((x < 0 ∧ y < 0) → xy > 0).",
        detail: "The pattern is always the same: decide for each variable whether the claim is universal or existential, then let the inner quantifiers depend on the outer ones. The restricted-domain conditional (x ≠ 0 → …) handles exceptions."
      },
      {
        term: "Negating nested quantifiers",
        kind: "method",
        statement: "Move the negation inward one quantifier at a time, flipping each quantifier it passes, and negate the predicate at the end: ¬∀x ∃y P(x, y) ≡ ∃x ¬∃y P(x, y) ≡ ∃x ∀y ¬P(x, y).",
        detail: "Every quantifier crossed flips: ∀ becomes ∃ and ∃ becomes ∀. Apply De Morgan's law for quantifiers repeatedly — never negate only the innermost piece and leave the quantifiers untouched."
      }
    ],
    examples: [
      {
        title: "Additive inverses: order makes the difference",
        problem: "Over the real numbers, compare the truth values of ∀x ∃y (x + y = 0) and ∃y ∀x (x + y = 0).",
        steps: [
          { label: "Step 1: Read the first statement", text: "For every real x there is a real y with x + y = 0 — each x gets to choose its own partner y = −x." },
          { label: "Step 2: Verify it", text: "Given any x, set y = −x: then x + (−x) = 0. True." },
          { label: "Step 3: Read the second statement", text: "There is a single real y that sums with every real x to 0 — one y must serve all x at once." },
          { label: "Step 4: Refute it", text: "Fix any candidate y₀ and choose x = 1 − y₀: then x + y₀ = 1 ≠ 0. No y₀ survives, so the statement is false." }
        ],
        result: "∀x ∃y (x + y = 0) is true; ∃y ∀x (x + y = 0) is false. The one-directional implication ∃y∀x … ⟹ ∀x∃y … holds, but not the reverse."
      },
      {
        title: "Translate, then negate",
        problem: "Express “every positive real number has a multiplicative inverse” over the reals, then negate your expression and read the negation in English.",
        steps: [
          { label: "Step 1: Choose quantifiers per variable", text: "“Every” is universal; the inverse is a witness that may depend on the number, so it is existential." },
          { label: "Step 2: Write it", text: "∀x (x > 0 → ∃y (xy = 1))." },
          { label: "Step 3: Negate, outer layer first", text: "¬∀x (…) ≡ ∃x ¬(x > 0 → ∃y (xy = 1))." },
          { label: "Step 4: Simplify and continue inward", text: "¬(A → B) ≡ A ∧ ¬B, so we get ∃x (x > 0 ∧ ¬∃y (xy = 1)) ≡ ∃x (x > 0 ∧ ∀y (xy ≠ 1))." }
        ],
        result: "The negation reads: “there is a positive real number whose product with every real number differs from 1” — a false statement over ℝ, as expected, since the original is true."
      },
      {
        title: "Who loves whom",
        problem: "With L(x, y) meaning “x loves y” over the domain of all people, express: (a) everybody loves somebody; (b) somebody is loved by everybody; (c) nobody loves everybody.",
        steps: [
          { label: "Step 1: Part (a)", text: "For each person there exists a person they love: ∀x ∃y L(x, y)." },
          { label: "Step 2: Part (b)", text: "There is one person y such that every x loves them: ∃y ∀x L(x, y)." },
          { label: "Step 3: Part (c) as a negation", text: "“Nobody loves everybody” negates ∃x ∀y L(x, y): ¬∃x ∀y L(x, y)." },
          { label: "Step 4: Push the negation inward", text: "¬∃x ∀y L(x, y) ≡ ∀x ¬∀y L(x, y) ≡ ∀x ∃y ¬L(x, y): everyone fails to love at least one person." }
        ],
        result: "(a) ∀x ∃y L(x, y); (b) ∃y ∀x L(x, y); (c) ∀x ∃y ¬L(x, y) — note how (a) and (b) use the same predicate with the quantifiers swapped and mean different things."
      }
    ],
    keyTakeaways: [
      "Read nested quantifiers left to right: inner choices may depend on outer variables.",
      "∀x ∃y and ∃y ∀x are different statements; the ∀-then-∃ order is the weaker (more often true) one.",
      "Swapping two universals or two existentials is safe; swapping a ∀ past an ∃ is not.",
      "Negation passes through quantifiers by flipping each one, ending with the negated predicate: ¬∀x∃y P ≡ ∃x∀y ¬P.",
      "Mathematical facts are nested quantifications: inverses, roots, boundedness and continuity all have this shape.",
      "To refute ∀x ∃y P you must produce an x that defeats every y — one specific x, not just any bad pair."
    ],
    quiz: [
      {
        q: "The negation of ∀x ∃y P(x, y) is:",
        options: ["∃x ∀y ¬P(x, y)", "∀x ∃y ¬P(x, y)", "∃x ∃y ¬P(x, y)", "∀x ∀y ¬P(x, y)"],
        answer: 0,
        explanation: "Each quantifier the negation passes flips: ¬(∀x ∃y P) = ∃x ¬(∃y P) = ∃x ∀y ¬P. Stopping early leaves quantifiers un-flipped and changes the meaning."
      },
      {
        q: "Over the real numbers, ∃y ∀x (x + y = 0) is:",
        options: ["true — take y = 0", "false — for any fixed y, choosing x = 1 − y gives x + y = 1 ≠ 0", "true — take y = −x", "equivalent to ∀x ∃y (x + y = 0)"],
        answer: 1,
        explanation: "The ∀ is outside, so no single y can adapt to x; every candidate y is defeated by x = 1 − y. Note “take y = −x” is illegal here because y may not depend on x, and the two quantifier orders are not equivalent."
      },
      {
        q: "“Every nonzero real number has a multiplicative inverse” is:",
        options: ["∀x ∃y (xy = 1)", "∀x (x ≠ 0 → ∃y (xy = 1))", "∃y ∀x (xy = 1)", "∀x (x ≠ 0 ∧ ∃y (xy = 1))"],
        answer: 1,
        explanation: "The exception “nonzero” must be a conditional hypothesis, not a conjunct: with ∧ the statement would claim every real is nonzero. The ∃y∀x version demands one universal inverse, which is false."
      },
      {
        q: "With L(x, y) meaning “x loves y” over all people, the statement ∃y ∀x L(x, y) says:",
        options: ["everybody loves somebody", "somebody is loved by everybody", "everybody is loved by somebody", "somebody loves themself"],
        answer: 1,
        explanation: "The ∃y is outermost, so it picks one person y; then ∀x L(x, y) says every x loves that y. “Everybody loves somebody” is the reversed order ∀x ∃y L(x, y)."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.6
  {
    sectionId: "rosen-ch1-s6",
    depth: [
      {
        tier: "masters",
        title: "Soundness, completeness, compactness, resolution",
        blocks: [
          { kind: "theorem", heading: "Soundness of the inference rules", body: "Write $\\Sigma \\vdash \\varphi$ when the formula $\\varphi$ is derivable from premises $\\Sigma$ by finitely many applications of the section's rules — modus ponens and modus tollens, the two syllogisms, addition, simplification, conjunction, resolution, and the four quantifier rules — and $\\Sigma \\models \\varphi$ when every truth assignment, or in the quantified case every structure, satisfying all of $\\Sigma$ also satisfies $\\varphi$. **Soundness** is the theorem that $\\Sigma \\vdash \\varphi$ implies $\\Sigma \\models \\varphi$: the rules never manufacture truth. The section's definition of a valid argument form — premises-to-conclusion a tautology — is exactly the case of empty $\\Sigma$, and the classic fallacies are precisely the candidate rules that fail the property: $q,\\; p \\to q \\vdash p$ breaks at the row where $p$ is false and $q$ is true, the counterexample assignment that convicted affirming the conclusion." },
          { kind: "proof", body: "Induct on the length of the derivation. A one-line derivation consists of a premise, which every satisfying assignment satisfies by definition. For the inductive step, the final line follows from earlier lines — already semantic consequences of $\\Sigma$ — by one rule; check each rule against the truth tables. Modus ponens: an assignment satisfying $p$ and $p \\to q$ must satisfy $q$, because the only row in which $p \\to q$ is false has $p$ true and $q$ false. Modus tollens: an assignment satisfying $\\lnot q$ and $p \\to q$ cannot satisfy $p$, for then it would satisfy $q$ alongside $\\lnot q$. Resolution: if $p \\lor q$ and $\\lnot p \\lor r$ hold, whichever truth value $p$ takes forces one disjunct of $q \\lor r$. The quantifier rules need their side conditions: universal generalization is sound only when the element instantiated was chosen arbitrarily, with no special assumption about it — exactly the bookkeeping separating a general proof from a special one. Every rule preserves consequence, so every finite chain of rules does too." },
          { kind: "theorem", heading: "Gödel's completeness theorem", body: "Gödel proved in 1929 that the quantified calculus is adequate to its semantics: if $\\Sigma \\models \\varphi$ then $\\Sigma \\vdash \\varphi$, for any set $\\Sigma$ of first-order sentences and any sentence $\\varphi$. Two reformulations display the force. Contrapositive, model-existence form: every syntactically consistent set — one from which no pair $\\psi, \\lnot \\psi$ is derivable — has a model. Bolted to the finitude of derivations: if every finite subset of $\\Sigma$ is satisfiable, then $\\Sigma$ itself is satisfiable — the **compactness theorem**, the corollary on which the next block builds an impossibility argument. Together with soundness, completeness seals a perfect match: $\\vdash$ and $\\models$ define the same consequence relation, one by grammar and finitude, the other by truth in structures — the calculus neither cheats nor misses. Gödel's own evaluation was sober: completeness shows this calculus is exactly right; his 1931 incompleteness theorems show arithmetic deserves no such luck." },
          { kind: "proof", body: "The construction manufactures a model out of syntax in four moves. First, **Henkin constants**: for each sentence $\\exists x\\, \\varphi(x)$ of the expanded language add a fresh constant $c$ and the axiom $\\exists x\\, \\varphi(x) \\to \\varphi(c)$; an induction over the enumeration shows consistency survives, and every existence claim now has a named witness. Second, **Lindenbaum's lemma**: enumerate all sentences and walk the list, adding each sentence that keeps the set consistent; the union $\\Delta$ is maximal consistent, containing exactly one of $\\varphi$ and $\\lnot \\varphi$ for every sentence. Third, the **term model**: take the constant symbols themselves as the domain, interpreting each relation symbol by what $\\Delta$ asserts about tuples of constants. Fourth, the **truth lemma**, proved by induction on formula structure: the term model satisfies precisely the sentences of $\\Delta$. Hence every consistent set has a model — in particular a consistent $\\Sigma \\cup \\{\\lnot \\varphi\\}$, which exists when $\\Sigma \\nvdash \\varphi$, would have a model satisfying $\\Sigma$ but falsifying $\\varphi$, contradicting $\\Sigma \\models \\varphi$. So the derivation must exist after all." },
          { kind: "derivation", heading: "Compactness: reachability is not first-order", body: "Compactness proves that some natural notions are not expressible in first-order logic by any sentence or axiom set. In a graph with edge relation $E$, call $b$ reachable from $a$ when a finite path of edges joins them. Suppose some formula $\\theta(x, y)$ defined reachability. Add constants $a, b$ with the sentence $\\theta(a, b)$ and, for each $k \\ge 1$, an axiom blocking paths of length $k$: $$\\lnot\\, \\exists x_1 \\cdots \\exists x_{k-1}\\, \\bigl( E(a, x_1) \\land \\cdots \\land E(x_{k-1}, b) \\bigr).$$ Every finite fragment is satisfiable — take a single path graph of length $N$, with $N$ larger than any $k$ mentioned: $a$ reaches $b$, and no shorter path exists. Compactness then supplies one model of all the axioms at once: a graph in which $\\theta(a, b)$ holds yet no finite path joins $a$ to $b$, contradicting the defining property of $\\theta$. The transitive closure of $E$ is therefore not first-order definable, and no finitary proof system, however clever, repairs this — which is why practical query languages bolt on an explicit recursion operator, Datalog or recursive CTEs in SQL, to compute reachability." },
          { kind: "derivation", heading: "Resolution: the single sufficient rule", body: "Resolution earns its self-sufficiency through one lemma and one induction. **Lemma**: an assignment satisfying the clauses $A \\lor x$ and $B \\lor \\lnot x$ satisfies the resolvent $A \\lor B$ — if $x$ is true, $B \\lor \\lnot x$ forces $B$; if false, $A \\lor x$ forces $A$. Deriving resolvents is therefore sound. **Refutation completeness**: if a finite clause set $S$ is unsatisfiable, resolution alone derives the empty clause $\\Box$. Induct on the number of variables. With none, unsatisfiability means $\\Box$ already lies in $S$. Otherwise fix a variable $x$ and let $S^{\\prime}$ collect the clauses of $S$ not mentioning $x$, plus every resolvent $A \\lor B$ of a pair $A \\lor x$, $B \\lor \\lnot x$ from $S$. Any assignment satisfying $S^{\\prime}$ extends to one satisfying $S$: choose the truth value of $x$; if both choices left some clause of $S$ unsatisfied, clauses $C \\lor \\lnot x$ and $D \\lor x$ would both be violated, so the resolvent $C \\lor D$ — a member of $S^{\\prime}$ — would be violated too, impossible. So $S^{\\prime}$ is unsatisfiable with one variable fewer, and the induction produces $\\Box$. Refuting the negated goal by resolution therefore proves the goal — the engine inside Prolog and the CDCL SAT solvers of the first section's research level." }
        ]
      },
      {
        tier: "phd",
        title: "Automated reasoning and the price of proofs",
        blocks: [
          { kind: "application", heading: "Superposition: resolution at research scale", body: "First-order resolution is the engine of the research provers **Vampire**, **E** and **SPASS**. Naive resolution drowns in its own consequences, so modern systems run the **superposition calculus** of Bachmair and Ganzinger: a saturation loop in which inference is restricted to maximal literals under a simplification ordering, a selection function suppresses inferable-but-redundant clauses, and equality is built in through paramodulation, the disciplined substitution of equals for equals. A conjecture is proved by saturating the negated goal until the empty clause surfaces. These provers dominate the CADE ATP System Competition and settle tens of thousands of problems from the TPTP library, from pure first-order logic through algebra to software analysis. The industrial continuation is SMT: solvers such as **Z3** couple a resolution-descended reasoning core with dedicated decision procedures for arithmetic and data structures, and now verify cloud access policies and cryptographic protocols at scale. The section's one-line rule — resolve complementary literals, carry on — run with proof-theoretic discipline, became a verification industry." },
          { kind: "theorem", heading: "Haken's pigeonhole lower bound", body: "The pigeonhole principle — $n + 1$ pigeons cannot be placed in $n$ holes with at most one pigeon per hole — is an obvious truth, yet its natural clause encoding, $\\mathrm{PHP}_n$, hides an exponential secret. **Haken's theorem (1985)**: every resolution refutation of $\\mathrm{PHP}_n$ contains at least $2^{\\Omega(n)}$ clauses. The proof introduces bottleneck counting: at some point in any refutation a large set of pigeons must simultaneously be blocked from a large set of holes, and covering all those pigeon-hole combinations requires exponentially many distinct clauses; the empty clause can only be reached through such a block. Chvátal and Szemerédi (1988) strengthened the bound through random restrictions to essentially tight form. The meaning is twofold. Practically, resolution-based SAT solvers cannot certify the pigeonhole principle in polynomial time — encodings of it are a standard way to make solvers visibly choke. Structurally, it is one of the few unconditional exponential lower bounds for a natural proof system on natural tautologies: a measured fence at the far edge of what efficient proof can reach." },
          { kind: "open", heading: "Polynomially bounded proof systems", body: "Cook and Reckhow (1979) organized the field around one question: does every tautology have a proof of polynomial length, in some proof system? A **polynomially bounded proof system** for tautologies exists if and only if $\\mathrm{NP} = \\mathrm{coNP}$ — a collapse widely disbelieved, and a slightly more approachable face of the P versus NP question from the research level of the first section. The known answers are negative and hard-won: resolution, cutting planes, the polynomial calculus and bounded-depth Frege systems are all not polynomially bounded, each by its own combinatorial method. For full **Frege systems** — the textbook axioms-and-modus-ponens calculi — no super-polynomial lower bound is known at all, and **extended Frege**, which lets a proof introduce abbreviating variables, is believed stronger still; separating the two would require circuit lower bounds that current techniques provably cannot supply, the Razborov–Rudich natural-proofs barrier transplanted to provability. Whether polynomial-size proofs of all tautologies exist — and whether, existing, they could be found as readily as checked — is the open heart of proof complexity." }
        ]
      },
    ],
    readingTime: 9,
    intro: "A proof is a chain of small, valid steps — and this section names those steps. The rules of inference are the atomic moves of all mathematical reasoning, from modus ponens (the very shape of “apply the theorem”) to resolution (the engine of automated provers). Learning them individually is what lets you construct and audit longer arguments without gaps.",
    objectives: [
      "Determine whether an argument form is valid",
      "Apply the rules of inference for propositions: modus ponens, modus tollens, the syllogisms, addition, simplification, conjunction, resolution",
      "Use the rules of inference for quantifiers",
      "Recognize the classic fallacies of affirming the conclusion and denying the hypothesis",
      "Combine several rules into one valid multi-step argument"
    ],
    concepts: [
      {
        term: "Arguments and validity",
        kind: "definition",
        statement: "An **argument** is a sequence of propositions p₁, p₂, …, pₙ (the **premises**) ending in a conclusion q. The argument is **valid** if (p₁ ∧ p₂ ∧ … ∧ pₙ) → q is a tautology; an argument form is valid exactly when every substitution instance is valid.",
        detail: "Validity is about form, not truth: a valid argument with false premises can conclude something false, and true conclusions can come from invalid forms. What validity guarantees is that *if* the premises hold, the conclusion must hold."
      },
      {
        term: "Modus ponens",
        kind: "law",
        statement: "**Modus ponens**: p, p → q ⊢ q — from a conditional and its hypothesis, infer the conclusion.",
        detail: "This is the workhorse of mathematics: every time you verify a theorem's hypotheses and then use its conclusion, you are running modus ponens. Its quantified form, universal modus ponens, is ∀x (P(x) → Q(x)) together with P(a), giving Q(a)."
      },
      {
        term: "Modus tollens",
        kind: "law",
        statement: "**Modus tollens**: ¬q, p → q ⊢ ¬p — if the conclusion of a conditional fails, the hypothesis must fail too.",
        detail: "“If the switch were on, the lamp would be lit. The lamp is dark. So the switch is not on.” Together with modus ponens this underlies contraposition-style reasoning in proofs."
      },
      {
        term: "Hypothetical syllogism",
        kind: "law",
        statement: "**Hypothetical syllogism**: p → q, q → r ⊢ p → r — conditionals chain transitively.",
        detail: "This is how lemmas compose into theorems: if A implies B and B implies C, then A implies C."
      },
      {
        term: "Disjunctive syllogism",
        kind: "law",
        statement: "**Disjunctive syllogism**: p ∨ q, ¬p ⊢ q — with a disjunction on the table and one option eliminated, the other follows.",
        detail: "The pattern behind case-elimination and detective work: either the butler or the gardener did it; the gardener has an alibi; so the butler did it."
      },
      {
        term: "Addition, simplification, conjunction",
        kind: "law",
        statement: "**Addition**: p ⊢ p ∨ q (weaken by adding a disjunct). **Simplification**: p ∧ q ⊢ p (extract one conjunct). **Conjunction**: p, q ⊢ p ∧ q (merge two established facts).",
        detail: "These look trivial but are essential plumbing: addition lets you feed a fact into a disjunctive-syllogism step, simplification pulls out what you need from a compound fact, and conjunction assembles the compound premises that later rules consume."
      },
      {
        term: "Resolution",
        kind: "law",
        statement: "**Resolution**: p ∨ q, ¬p ∨ r ⊢ q ∨ r — from two clauses containing a complementary pair (p and ¬p), infer the resolvent with that pair removed.",
        detail: "Resolution is the single rule powering automated theorem provers and the logic behind Prolog: every propositional theorem can, in principle, be proved by resolution plus refutation (assume the negation of the goal, derive a contradiction)."
      },
      {
        term: "Rules of inference for quantifiers",
        kind: "law",
        statement: "**Universal instantiation**: ∀x P(x) ⊢ P(c) for any element c. **Universal generalization**: P(c) for an *arbitrary* c ⊢ ∀x P(x). **Existential instantiation**: ∃x P(x) ⊢ P(c) for some witness c (a new name). **Existential generalization**: P(c) ⊢ ∃x P(x).",
        detail: "Universal instantiation + modus ponens = “everyone in the class passed; Maria is in the class; so Maria passed.” The arbitrary-element requirement in universal generalization is exactly what a general proof must honor: the c in universal generalization may have no special properties."
      },
      {
        term: "The classic fallacies",
        kind: "insight",
        statement: "**Affirming the conclusion**: q, p → q ⊢ p — INVALID. **Denying the hypothesis**: ¬p, p → q ⊢ ¬q — equally INVALID. Both err by treating a conditional as a biconditional.",
        detail: "Check with p = F, q = T: the premises (p → q) and q are both true while p is false, so affirming the conclusion has a counterexample; likewise ¬p true with q true refutes denying the hypothesis. These two fallacies account for an enormous share of bad everyday reasoning."
      }
    ],
    examples: [
      {
        title: "A multi-rule argument",
        problem: "Premises: (1) It is not sunny this afternoon and it is colder than yesterday. (2) We will go swimming only if it is sunny. (3) If we do not go swimming, then we will take a canoe trip. (4) If we take a canoe trip, then we will be home by sunset. Show that these imply: we will be home by sunset.",
        steps: [
          { label: "Step 1: Symbolize", text: "p: sunny this afternoon; q: colder than yesterday; r: we go swimming; s: we take a canoe trip; t: home by sunset. Premises: ¬p ∧ q; r → p; ¬r → s; s → t." },
          { label: "Step 2: Simplification", text: "From ¬p ∧ q infer ¬p (simplification)." },
          { label: "Step 3: Modus tollens", text: "From ¬p and r → p infer ¬r — we do not go swimming." },
          { label: "Step 4: Modus ponens on premise 3", text: "From ¬r and ¬r → s infer s — we take a canoe trip." },
          { label: "Step 5: Modus ponens on premise 4", text: "From s and s → t infer t." }
        ],
        result: "We will be home by sunset — a five-step chain using simplification, modus tollens and modus ponens twice."
      },
      {
        title: "Catching a fallacy",
        problem: "Is this argument valid? “If the butler committed the crime, then the maid lied. The maid lied. Therefore, the butler committed the crime.”",
        steps: [
          { label: "Step 1: Symbolize", text: "Premises: p → q and q; conclusion: p, where p = “the butler committed the crime,” q = “the maid lied.”" },
          { label: "Step 2: Name the form", text: "This is affirming the conclusion (q, p → q ⊢ p)." },
          { label: "Step 3: Hunt for a counterexample assignment", text: "Take p = F, q = T: the maid lied, but someone else did it. Then p → q is T (F → T) and q is T, yet the conclusion p is F." },
          { label: "Step 4: Conclude", text: "Since the premises can be true while the conclusion is false, (premises) → conclusion is not a tautology." }
        ],
        result: "The argument is invalid — the maid's lie is consistent with any culprit (or with an innocent explanation), so it cannot single out the butler."
      },
      {
        title: "Quantifier rules in action",
        problem: "Premises: All lions are fierce. Some lions do not drink coffee. Prove: some fierce creatures do not drink coffee.",
        steps: [
          { label: "Step 1: Symbolize", text: "∀x (L(x) → F(x)) and ∃x (L(x) ∧ ¬C(x)); goal ∃x (F(x) ∧ ¬C(x))." },
          { label: "Step 2: Existential instantiation", text: "From ∃x (L(x) ∧ ¬C(x)) introduce a witness c with L(c) ∧ ¬C(c)." },
          { label: "Step 3: Simplification", text: "From L(c) ∧ ¬C(c) obtain L(c) and ¬C(c) separately." },
          { label: "Step 4: Universal instantiation + modus ponens", text: "From ∀x (L(x) → F(x)) obtain L(c) → F(c); with L(c), modus ponens gives F(c)." },
          { label: "Step 5: Conjunction + existential generalization", text: "Combine F(c) ∧ ¬C(c), then generalize to ∃x (F(x) ∧ ¬C(x))." }
        ],
        result: "The conclusion follows — and the proof shows the standard pipeline: strip the quantifiers with instantiation, reason propositionally, then restore a quantifier with generalization."
      }
    ],
    keyTakeaways: [
      "An argument is valid iff premises-to-conclusion is a tautology — validity is about form, not the actual facts.",
      "Modus ponens and modus tollens are the two shapes of applying a theorem; the syllogisms chain and eliminate options.",
      "Resolution (p ∨ q, ¬p ∨ r ⊢ q ∨ r) alone suffices for automated propositional theorem proving.",
      "Quantified arguments run by instantiating, reasoning propositionally, then generalizing — with an arbitrary witness for ∀ and a fixed new witness for ∃.",
      "Affirming the conclusion and denying the hypothesis are invalid: a conditional does not run backwards.",
      "When auditing an argument, hunt for a truth assignment that makes all premises true and the conclusion false — finding one proves invalidity."
    ],
    quiz: [
      {
        q: "From the premises p → q and ¬q, a valid argument concludes:",
        options: ["¬p", "p", "q", "p ∨ q"],
        answer: 0,
        explanation: "This is modus tollens: the failure of the conclusion forces the failure of the hypothesis, so ¬p follows. Concluding p (or q) from ¬q would be fallacious."
      },
      {
        q: "Which of these argument forms is INVALID?",
        options: ["modus tollens: ¬q, p → q ⊢ ¬p", "disjunctive syllogism: p ∨ q, ¬p ⊢ q", "affirming the conclusion: q, p → q ⊢ p", "hypothetical syllogism: p → q, q → r ⊢ p → r"],
        answer: 2,
        explanation: "Affirming the conclusion treats a conditional as reversible: q might hold for reasons unrelated to p. The counterexample p = F, q = T makes the premises true and the conclusion false."
      },
      {
        q: "By resolution, from p ∨ q and ¬p ∨ r one may infer:",
        options: ["q ∨ r", "p ∨ r", "¬q ∨ r", "p ∧ r"],
        answer: 0,
        explanation: "Resolution cancels the complementary pair p, ¬p and merges what is left: q ∨ r. This tiny rule is the complete inference engine of resolution-based provers."
      },
      {
        q: "“All CS students know Python. Maria is a CS student. Therefore Maria knows Python.” The proof combines:",
        options: ["universal instantiation followed by modus ponens", "existential instantiation followed by modus tollens", "universal generalization followed by simplification", "addition followed by conjunction"],
        answer: 0,
        explanation: "Instantiate ∀x (CS(x) → Knows(x)) at Maria to get CS(Maria) → Knows(Maria), then apply modus ponens with the premise CS(Maria). This pattern — universal modus ponens — is the shape of applying any general theorem to a specific case."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.7
  {
    sectionId: "rosen-ch1-s7",
    depth: [
      {
        tier: "masters",
        title: "The logical anatomy of the standard proof shapes",
        blocks: [
          { kind: "theorem", heading: "Contraposition is the contrapositive", body: "A proof by contraposition of the conditional $P \\to Q$ — assume $\\lnot Q$, derive $\\lnot P$ — is nothing but a direct proof of the sentence $\\lnot Q \\to \\lnot P$. The license is the equivalence $$P \\to Q \\;\\equiv\\; \\lnot Q \\to \\lnot P,$$ which holds assignment by assignment: both formulas are false on exactly the one row where $P$ is true and $Q$ is false, so each is a theorem precisely when the other is. The natural-deduction refinement adds a subtlety that matters for strategy. The direction $(P \\to Q) \\to (\\lnot Q \\to \\lnot P)$ is constructively provable — from $P$, $P \\to Q$ and $\\lnot Q$ one lands in an immediate contradiction, which is exactly how $\\lnot P$ is proved. But the converse direction, the one contraposition actually invokes, needs the classical principle of the next theorem: double-negation elimination. The advice “use contraposition when the negated hypothesis is friendlier” therefore describes a controlled, exactly measurable use of classical strength — more than the direct method demands, less than full proof by contradiction." },
          { kind: "proof", body: "Semantic check: with letters $P$ and $Q$ there are four assignments. $P \\to Q$ is false only when $P$ is true and $Q$ is false; $\\lnot Q \\to \\lnot P$ is false only when $\\lnot Q$ is true and $\\lnot P$ is false — that is, $Q$ false and $P$ true: the very same single row. Formulas falsified on identical rows are equivalent. Syntactically, from a derivation of $\\lnot P$ under the assumption $\\lnot Q$, build a derivation of $P \\to Q$ as follows: assume $P$; for reductio suppose $\\lnot Q$; the given derivation yields $\\lnot P$; together with $P$ this is $\\bot$; discharge the supposition to obtain $\\lnot\\lnot Q$; apply double-negation elimination to reach $Q$; finally discharge $P$. The double-negation step is exactly where classical logic enters — constructively the construction stops at $P \\to \\lnot\\lnot Q$, which is why the equivalence itself is classical even though each direction short of it is not." },
          { kind: "theorem", heading: "Contradiction is double-negation elimination", body: "Proof by contradiction of a proposition $P$ is the inference $$(\\lnot P \\to \\bot) \\;\\to\\; P:$$ if assuming the negation of $P$ lands in absurdity, conclude $P$. Classically this is **double-negation elimination** verbatim, since $\\lnot P \\to \\bot$ is the definition of $\\lnot\\lnot P$, and $\\lnot\\lnot P \\to P$ is the most conspicuous nonconstructive axiom of classical logic. Intuitionistic reasoning keeps ex falso quodlibet — from $\\bot$, anything — and the contraposition-style passage from $P \\to Q$ to $\\lnot Q \\to \\lnot P$, but rejects $(\\lnot P \\to \\bot) \\to P$ for general $P$, accepting it only where $P$ is decidable. The refinement explains which of this section's proofs are secretly constructive: the irrationality of $\\sqrt{2}$ is, because its conclusion is negative — the statement has the shape $\\lnot P$, with $P$ the claim $\\sqrt{2} \\in \\mathbb{Q}$ — and deriving $\\bot$ from $P$ is precisely how $\\lnot P$ is proved directly. Only positive, existential conclusions make contradiction genuinely nonconstructive; those are the province of the next block." },
          { kind: "proof", body: "Derive the method from double negation in a calculus with introduction and elimination rules for each connective, the absurdity constant $\\bot$, and ex falso. Assume $\\lnot P$; suppose it yields both $r$ and $\\lnot r$; their conjunction gives $\\bot$; the subderivation shows $\\lnot P \\to \\bot$, that is, $\\lnot\\lnot P$; apply $\\lnot\\lnot P \\to P$ and conclude $P$. Conversely, derive double negation from the method: to show $\\lnot\\lnot P \\to P$, assume $\\lnot\\lnot P$ and $\\lnot P$; these two contradict, so the assumption $\\lnot P$ leads to $\\bot$, and the contradiction rule converts that into $P$. The two principles are interderivable — each is the other in different dress — so a logic keeps or loses them together: dropping both leaves exactly the intuitionistic fragment, inside which $P \\to \\lnot\\lnot P$ still holds but its converse does not. That is the precise sense in which proof by contradiction is “stronger” than the direct and contrapositive methods: not a proof shape among shapes, but an additional axiom wearing one." },
          { kind: "example", heading: "A witness versus a bare existence", body: "Compare two existence arguments of the same species. First the section's gem: either $\\sqrt{2}^{\\sqrt{2}}$ is rational, or $x = \\sqrt{2}^{\\sqrt{2}}$ and $y = \\sqrt{2}$ are both irrational while $x^{y} = \\sqrt{2}^{2} = 2$ is rational — either way an irrational pair with rational power exists, though the proof never reveals which case holds. Second, a count argument in the style of the weak (odd) Goldbach conjecture: Vinogradov proved in 1937, by the circle method, that the number of representations of a large odd $n$ as an ordered sum of three primes is on the order of $n^{2}/(\\log n)^{3}$ — in particular positive, so a representation exists — yet the original proof was ineffective: it guaranteed a threshold beyond which the count is positive without revealing where the threshold is, and it exhibits no triple for any given $n$. Helfgott completed the conjecture for every odd $n > 5$ in 2013; for $n = 7$ the witness is simply $2 + 2 + 3$. The count proves existence from abundance; the witness exhibits it; only the second is an algorithm — or acceptable to a constructivist." },
          { kind: "theorem", heading: "Induction and minimal counterexamples", body: "Fix a set $W$ carrying a binary relation that is **well-founded**: every nonempty subset has a minimal element, equivalently there is no infinite descending chain ($\\mathbb{N}$ with its usual order is the prototype). Three principles are then equivalent: **well-founded induction** — if $P(x)$ holds whenever $P$ holds at every predecessor of $x$, then $P$ holds on all of $W$; the **least-counterexample principle** — if $\\lnot P$ holds somewhere, it holds at a minimal point, so a smallest counterexample exists; and well-foundedness itself. The equivalence is what licenses the working strategy “let $m$ be a minimal counterexample and dismantle it into a smaller one” — the workhorse of finite combinatorics, from extremal graph theory to the classical attacks on the four-color problem — because it converts an obligation to verify infinitely many cases into one local argument: no counterexample can be smallest, so none exists. Ordinary mathematical induction on $n$ is the special case $W = \\mathbb{N}$, and strong induction is the version that reads “predecessors” literally." },
          { kind: "proof", body: "Induction gives least counterexamples: let $F = \\{x \\in W : \\lnot P(x)\\}$. If $F$ is nonempty, well-foundedness supplies a minimal $m \\in F$; every predecessor of $m$ lies outside $F$, that is, satisfies $P$ — precisely the hypothesis of the induction principle, which therefore forces $P(m)$, contradicting $m \\in F$. So $F$ is empty: no counterexamples at all. Conversely, induction needs minimal elements: suppose some nonempty $S \\subseteq W$ had none, and define $Q(x)$ to be “$x \\notin S$”. If all predecessors of $x$ satisfy $Q$, then no predecessor of $x$ lies in $S$; if $x$ itself lay in $S$, then $x$ would not be minimal in $S$ — there are no minimal elements — so some member of $S$ would precede $x$, a contradiction. So the implication from predecessors to $Q(x)$ holds for every $x$, and induction concludes $Q$ everywhere: $S$ is empty, contradicting its choice. Hence the two principles stand or fall together — and with them, the tactic of killing conjectures by shrinking their counterexamples." }
        ]
      },
      {
        tier: "phd",
        title: "Calibrating, mining, and formalizing proofs",
        blocks: [
          { kind: "para", body: "**Reverse mathematics** — Friedman's program, developed with Simpson — calibrates the axioms a theorem needs by proving it from a weak base and then, remarkably, back again: deriving the axioms from the theorem. The base theory $\\mathsf{RCA}_0$, recursive comprehension with $\\Sigma^{0}_{1}$ induction, captures computable mathematics. Over it, weak König's lemma ($\\mathsf{WKL}_0$) turns out equivalent to the completeness theorem for countable first-order logic, to Heine–Borel compactness, and to the prime ideal theorem for countable commutative rings; arithmetical comprehension ($\\mathsf{ACA}_0$) is equivalent to Bolzano–Weierstrass and to the infinite Ramsey theorem for triples; and the hierarchy continues through $\\Pi^{1}_{1}$ comprehension toward full second-order arithmetic. The calibration has teeth: Seetapun showed in 1995 that Ramsey's theorem for pairs does not imply $\\mathsf{ACA}_0$, and the later work of Liu and others separated it from $\\mathsf{WKL}_0$ as well, charting exactly which strength the base theory cannot reach. For this chapter the message is sharp: even a single theorem's proof carries a measurable logical price, and reverse mathematics is the invoice." },
          { kind: "application", heading: "Proof mining: unwinding the ineffective", body: "Kreisel asked: when a proof guarantees an object or a bound, can the proof itself be made to yield it? Kohlenbach's **proof mining** is the systematic answer: run a nonconstructive proof through a **proof interpretation** — Gödel's Dialectica interpretation, the no-counterexample interpretation, modified realizability — and extract the uniform quantitative information hidden inside, with fully explicit complexity. The reason this works at all is the fact this level exposed above: a proof can use its principles only in logically controlled ways, and the interpretation replaces each nonconstructive step — choice, comprehension, a compactness appeal — with a finite approximation to its effect. The flagship results sit in nonlinear analysis and ergodic theory: from abstract proofs that merely assert convergence, mining extracts explicit rates — or, when convergence is genuinely too slow to have one, explicit **metastable** bounds in Tao's sense, as in Kohlenbach and Leuştean's quantitative analysis of the mean ergodic theorem. It is the modern continuation of the witness-versus-count dichotomy: circle-method ineffectivity of the Vinogradov kind is exactly the darkness these interpretations are built to unwind, and the extracted bounds routinely beat the classical ones." },
          { kind: "application", heading: "The Liquid Tensor Experiment", body: "On 5 December 2020, Peter Scholze challenged the formalization community: verify, in the Lean proof assistant, Theorem 9.4 of the Clausen–Scholze notes on condensed mathematics — the foundation of the theory of liquid vector spaces — admitting he was not at all certain the proof, on which the theory rests, was actually correct. The **Liquid Tensor Experiment**, led by Johan Commelin and Adam Topaz, proved the heart of the theorem in about six months, and the full statement with its dependencies over the following year; the effort contributed tens of thousands of lines to **mathlib**, the communal library of formalized mathematics, including functional-analytic infrastructure no proof assistant had. Scholze's verdict was striking: the experiment gave him more confidence in the problematic part of the proof than he had ever had, and it taught him where his own understanding was thin. For the strategy of this section the lesson is radical: “reduce the proof to small verifiable steps and check every one” — the exhaustive method of the next section, run at the scale of research mathematics — is now a viable proof method at the frontier, with mathematics and computation sharing the argument." }
        ]
      },
    ],
    readingTime: 11,
    intro: "This is where mathematics becomes a verb: writing proofs. A proof is nothing more than a valid argument whose conclusion is the claim — but constructing one takes craft. You will learn the standard shapes (direct, contraposition, contradiction), the essential definitions (even, odd, rational), and how a single counterexample can settle a universal claim.",
    objectives: [
      "Use the terminology: theorem, lemma, corollary, conjecture",
      "Write direct proofs of conditional statements about integers",
      "Use contraposition and contradiction when the direct route stalls",
      "Give constructive and nonconstructive existence proofs",
      "Disprove universal statements with counterexamples"
    ],
    concepts: [
      {
        term: "Theorems, lemmas, corollaries, conjectures",
        kind: "definition",
        statement: "A **theorem** is a statement that can be shown true (less important ones are often called **propositions**). A **lemma** is a helper theorem proved as a step toward a bigger result; a **corollary** follows directly from an existing theorem; a **conjecture** is a statement believed true but not yet proved.",
        detail: "The labeling reflects social convention, not logical difference: Fermat's Last Theorem was a conjecture for 350 years until Wiles proved it. A proof is, formally, a valid argument from premises to the statement."
      },
      {
        term: "Even, odd, rational",
        kind: "definition",
        statement: "The integer n is **even** iff n = 2k for some integer k; **odd** iff n = 2k + 1 for some integer k. The real r is **rational** iff r = p/q for integers p and q with q ≠ 0; otherwise r is irrational.",
        detail: "These definitions are the atoms of hundreds of textbook proofs: every parity or rationality proof begins by writing the definition's equation and ends by producing the required form. Every integer is exactly one of even or odd (n = 2⌊n/2⌋ or 2⌈n/2⌉ − 1)."
      },
      {
        term: "Direct proof",
        kind: "method",
        statement: "To prove p → q directly: assume p, derive consequences step by step using definitions, known facts and algebra, and arrive at q.",
        detail: "Template: “Assume n is odd. Then n = 2k + 1 for some integer k. … Therefore n² is odd.” The chain must be unbroken — every step follows from the previous ones by definition, computation or a cited theorem."
      },
      {
        term: "Proof by contraposition",
        kind: "method",
        statement: "To prove p → q, prove its contrapositive ¬q → ¬p instead: assume ¬q and derive ¬p. Since a conditional and its contrapositive are equivalent, this proves the original.",
        detail: "Choose contraposition when the negation of the hypothesis gives you better algebra to work with: to prove “if 3n + 2 is odd then n is odd,” assuming n is even is far more tractable than assuming 3n + 2 is odd. Contraposition and contradiction are both called *indirect* proofs."
      },
      {
        term: "Proof by contradiction",
        kind: "method",
        statement: "To prove p, assume ¬p and derive a contradiction of the form r ∧ ¬r. Since ¬p is impossible, p must be true. Equivalently, prove p → q by showing (p ∧ ¬q) leads to absurdity.",
        detail: "The classic: √2 is irrational — assume √2 = a/b in lowest terms and deduce that a and b are both even, contradicting lowest terms. Contradiction is the strongest hammer: it works for any statement, not just conditionals, but should be saved for when direct and contrapositive approaches fail."
      },
      {
        term: "Vacuous and trivial proofs",
        kind: "method",
        statement: "A conditional p → q is **vacuously** proved by showing p is always false, and **trivially** proved by showing q is always true — no hypothesis work is needed because F → anything is T and anything → T is T.",
        detail: "“If x is a real number with x² < 0, then x⁷ = 3” is (vacuously) true. These are legitimate proofs, not cheating — they arise constantly as edge cases inside bigger case analyses."
      },
      {
        term: "Existence proofs",
        kind: "method",
        statement: "To prove ∃x P(x): a **constructive** proof exhibits a specific witness; a **nonconstructive** proof argues that some witness must exist without producing one.",
        detail: "Famous nonconstructive gem: there exist irrational x and y with $x^{y}$ rational — either $\\sqrt{2}^{\\sqrt{2}}$ is rational (done), or $x = \\sqrt{2}^{\\sqrt{2}}$ and y = √2 give $x^{y} = (\\sqrt{2}^{\\sqrt{2}})^{\\sqrt{2}} = \\sqrt{2}^{2} = 2$. Both branches conclude existence, yet the proof never reveals which pair works."
      },
      {
        term: "Counterexamples",
        kind: "method",
        statement: "A **counterexample** to a statement ∀x P(x) is a single element a with ¬P(a); it disproves the universal claim outright.",
        detail: "“Every prime is odd” dies at 2. Because a single witness settles the matter, hunting for counterexamples is the cheapest first move when facing a suspicious conjecture."
      },
      {
        term: "Common proof mistakes",
        kind: "insight",
        statement: "The standard errors: proving the converse instead of the statement; assuming what must be proved (**circular reasoning** / begging the question); treating “not (for all)” as “for all not”; and concluding a universal from a few examples.",
        detail: "Examples prove ∃-statements but never ∀-statements. Writing the statement in formal logic before proving it (hypothesis, conclusion, quantifiers) is the best defense against these traps."
      }
    ],
    examples: [
      {
        title: "A direct proof about parity",
        problem: "Prove: if n is an odd integer, then n² is odd.",
        steps: [
          { label: "Step 1: Unfold the hypothesis's definition", text: "n odd means n = 2k + 1 for some integer k." },
          { label: "Step 2: Compute n²", text: "n² = (2k + 1)² = 4k² + 4k + 1." },
          { label: "Step 3: Force the target form", text: "4k² + 4k + 1 = 2(2k² + 2k) + 1, which is 2·(integer) + 1." },
          { label: "Step 4: Fold in the conclusion's definition", text: "2(2k² + 2k) + 1 has the shape 2j + 1 with j = 2k² + 2k an integer, so n² is odd." }
        ],
        result: "The square of every odd integer is odd — proved directly, with the two definitions of “odd” as the bookends."
      },
      {
        title: "Contraposition when direct is awkward",
        problem: "Prove: if 3n + 2 is odd, then n is odd (n an integer).",
        steps: [
          { label: "Step 1: Consider the direct route", text: "Assuming 3n + 2 odd means 3n + 2 = 2k + 1; extracting information about n is messy. Try the contrapositive." },
          { label: "Step 2: State the contrapositive", text: "If n is even, then 3n + 2 is even." },
          { label: "Step 3: Prove it directly", text: "n even gives n = 2k; then 3n + 2 = 6k + 2 = 2(3k + 1), an even integer." },
          { label: "Step 4: Conclude by equivalence", text: "The contrapositive holds, and a conditional is equivalent to its contrapositive." }
        ],
        result: "3n + 2 odd forces n odd — proved by contraposition, the tool of choice when one side of the implication is much easier to reason from."
      },
      {
        title: "Contradiction: √2 is irrational",
        problem: "Prove that √2 is irrational.",
        steps: [
          { label: "Step 1: Assume the negation", text: "Suppose √2 were rational: √2 = a/b with integers a, b, in lowest terms (gcd(a, b) = 1)." },
          { label: "Step 2: Clear denominators and square", text: "a = b√2 gives a² = 2b², so a² is even." },
          { label: "Step 3: Descend to a", text: "a² even forces a even (an odd a would give odd a²), so a = 2c for some integer c." },
          { label: "Step 4: Descend to b", text: "Substituting: 4c² = 2b², so b² = 2c² is even, and the same reasoning makes b even." },
          { label: "Step 5: Unfold the contradiction", text: "Both a and b even contradicts the fraction being in lowest terms." }
        ],
        result: "The assumption that √2 is rational is impossible, so √2 is irrational — the 2,300-year-old prototype of proof by contradiction."
      }
    ],
    keyTakeaways: [
      "A proof is a valid argument; lemmas, theorems and corollaries differ in role, not in logic.",
      "Direct proof: assume the hypothesis, then chain definitions and algebra to the conclusion.",
      "Contraposition proves p → q by proving ¬q → ¬p — pick it when the negated hypothesis is friendlier.",
      "Contradiction assumes the negation and detonates it against any known fact; it proves any kind of statement, not just conditionals.",
      "Existence proofs are constructive (show a witness) or nonconstructive (show one must exist).",
      "A single counterexample demolishes a universal statement — search for one before attempting a proof."
    ],
    quiz: [
      {
        q: "In a direct proof that the square of an odd integer is odd, after writing n = 2k + 1 we compute n² = 4k² + 4k + 1 and then:",
        options: ["factor it as 2(2k² + 2k) + 1, which has the form 2·(integer) + 1", "note it is positive, hence odd", "observe 4k² + 4k is odd", "divide by 2 and check the remainder is 1 only when k is even"],
        answer: 0,
        explanation: "The definition of odd is “2j + 1 for some integer j,” so the proof must exhibit that form — here j = 2k² + 2k. Positivity and the parity of k are irrelevant."
      },
      {
        q: "The contrapositive of “if n² is even, then n is even” is:",
        options: ["if n is odd, then n² is odd", "if n is even, then n² is even", "if n² is odd, then n is odd", "n² is odd whenever n is even"],
        answer: 0,
        explanation: "With p = “n² even” and q = “n even,” the contrapositive is ¬q → ¬p: if n is odd, n² is odd. Option 2 is the converse; option 3 is the inverse — neither is equivalent to the original."
      },
      {
        q: "Assuming √2 = a/b in lowest terms and deriving that a and b are both even is:",
        options: ["a direct proof that √2 is rational", "a proof by contradiction — “both even” contradicts “lowest terms”", "a proof by cases on the parity of a", "a vacuous proof"],
        answer: 1,
        explanation: "The derivation produces an explicit contradiction with a standing assumption, which is exactly proof by contradiction. The negated hypothesis (rationality of √2) is thereby impossible."
      },
      {
        q: "The argument “either $\\sqrt{2}^{\\sqrt{2}}$ is rational, or $(\\sqrt{2}^{\\sqrt{2}})^{\\sqrt{2}} = 2$ is rational — either way some irrational number raised to an irrational power is rational, though we never learn which” is:",
        options: ["a constructive existence proof", "a nonconstructive existence proof", "a proof by strong induction", "a counterexample"],
        answer: 1,
        explanation: "The proof establishes that a witness exists in each case without identifying which case actually occurs, so it never exhibits a specific pair — the defining feature of a nonconstructive existence proof."
      }
    ]
  },

  // ---------------------------------------------------------------- 1.8
  {
    sectionId: "rosen-ch1-s8",
    depth: [
      {
        tier: "masters",
        title: "Strategy as proof search and compression",
        blocks: [
          { kind: "para", body: "The section's advice — reason forward from hypotheses, backward from the goal — becomes exact in the theory of **proof search**. Gentzen's **sequent calculus** represents a proof state as $\\Gamma \\Rightarrow \\Delta$: working assumptions on the left, goals on the right. Each logical constant then comes with two rules, one per side, that decompose it: to establish $\\Gamma \\Rightarrow A \\land B$ it suffices — this is the right rule for conjunction — to establish $\\Gamma \\Rightarrow A$ and $\\Gamma \\Rightarrow B$; to use an assumption $C \\lor D$ on the left, it suffices to continue both from $C, \\Gamma \\Rightarrow \\Delta$ and from $D, \\Gamma \\Rightarrow \\Delta$. Many sequent rules are **invertible** — premise and conclusion are interderivable — so applying them backward provably loses nothing, and the strategic reading is immediate: do the invertible decompositions first, and postpone the genuinely committing choices, such as which disjunct to prove on the right or which witness to exhibit for an existential, until the deterministic work has shrunk the problem. Backward chaining is this discipline arranged as search from the goal; resolution refutation — backward chaining on clauses — is its industrial form." },
          { kind: "theorem", heading: "Case analysis decides propositional logic", body: "Let $\\varphi$ be a formula whose variables are among $p_1, \\dots, p_n$. Then the exhaustive case analysis over all $2^{n}$ truth assignments is a **complete decision procedure** for propositional logic: $\\varphi$ is a tautology if and only if every one of the $2^{n}$ cases verifies it, and if some case fails, that case is a counterexample — a certificate of falsity exactly as checkable as the proof of validity. The method is an exhaustive proof by cases whose splitting principle is the law of excluded middle applied once per atom, $p_i \\lor \\lnot p_i$, and nothing about $\\varphi$ is used beyond truth-functional evaluation inside each case. Consequently propositional logic is **decidable**: an algorithm halts on every input formula, correctly answering “tautology” or presenting a falsifying assignment, in time $O(2^{n} \\cdot \\lvert \\varphi \\rvert)$. The exponential is the price of completeness-by-cases — and it is apparently unavoidable, since tautology-testing is coNP-complete, so a polynomial case-analysis procedure would collapse $\\mathrm{P}$ and $\\mathrm{NP}$." },
          { kind: "proof", body: "Soundness of the procedure is the exhaustiveness of the cases. Splitting on $p_1$ via excluded middle divides the problem into two subproblems, $p_1$ true and $p_1$ false, whose cases are disjoint and jointly exhaustive; iterating for $p_2, \\dots, p_n$ refines the space into exactly $2^{n}$ cells, each fixing every variable, together covering every possible assignment exactly once. Inside one cell every subformula of $\\varphi$ evaluates deterministically, by the recursive clause of its connective, and the evaluation is itself a derivation of $\\varphi$ or of $\\lnot \\varphi$ from the case's atomic assumptions — a miniature direct proof local to the case. If all $2^{n}$ cells derive $\\varphi$, then the disjunction of all the cases, a tautology by construction, delivers $\\varphi$ unconditionally: a proof by $2^{n}$ exhaustive cases, with the bookkeeping automated. For the running time, each cell costs one evaluation of $\\varphi$, linear in $\\lvert \\varphi \\rvert$, giving the $O(2^{n} \\cdot \\lvert \\varphi \\rvert)$ bound — decidability honestly earned, with the exponential cost of enumeration paid in full." },
          { kind: "remark", heading: "Small cases, large exceptions", body: "Why does “look at small cases” work so often? Because many logics enjoy a **small-model property**: any counterexample can be taken small. For a propositional claim over $n$ atoms the counterexample is a single assignment of $n$ bits, so the truth table is a perfect oracle; modal and description logics, and the guarded fragments, enjoy the **finite model property** — satisfiability, when it holds, is always witnessed by a bounded finite model — which is what justifies small-case inspection algorithmically. But the heuristic stays a heuristic, and the warning is historical: **Pólya's 1919 conjecture**, that for every $n$ the majority of integers up to $n$ have an odd number of prime factors, was confirmed by every computation available, then disproved by Haselgrove in 1958 by a nonconstructive argument — an existence proof for a counterexample, in exactly the style the previous section's Level II dissected — with the first explicit failure appearing at $n = 906{,}150{,}257$. Small cases are evidence; evidence is not proof." },
          { kind: "theorem", heading: "Lemmas are cuts: Gentzen's Hauptsatz", body: "Every use of a lemma is an instance of Gentzen's **cut rule**: from the derivation $\\Gamma \\Rightarrow \\varphi$ (the lemma's own proof) and the derivation $\\varphi, \\Gamma \\Rightarrow \\psi$ (the main argument invoking it), conclude $\\Gamma \\Rightarrow \\psi$ directly. **Gentzen's Hauptsatz** (1934–35) — the cut elimination theorem — states that every sequent-calculus proof can be effectively transformed into a **cut-free** one: lemmas are, in principle, always dispensable. The structural payoff is the **subformula property**: a cut-free proof of $\\Gamma \\Rightarrow \\psi$ mentions only subformulas of the formulas occurring in $\\Gamma$ and $\\psi$ — every intermediate assertion is a piece of the statement itself. This is the precise theorem behind the strategist's instinct to stay close to the statement: cut-free search has only finitely many possible sentences to consider, which is what makes goal-directed proof search terminate on propositional inputs. It is also why direct proofs feel clean: nothing external can enter a cut-free derivation." },
          { kind: "proof", body: "The transformation is a double induction: on the size of the cut formula and, within that, on the heights of the derivations being joined. A cut on an atomic formula can be permuted upward until it meets an axiom, where it disappears. A cut on $A \\land B$ is pushed against the proof of $A \\land B$, which must end by introducing the conjunction from proofs of $A$ and $B$; the two halves are then spliced into the argument that consumed the conjunction, leaving cuts on the strictly smaller formulas $A$ and $B$ in place of the original. Iterating, every cut dissolves. The cost is fierce: each splice can duplicate an entire subproof, and Orevkov (1982) and Statman (1979) showed the blowup is not bounded by any fixed tower of exponentials — cut elimination is nonelementary in the worst case. Lemmas are therefore exponential compression: the cut-free proof exists, but may be too large to inhabit the universe, and “adapting known proofs” is not laziness but the only way finite mathematicians can write finite mathematics." },
          { kind: "para", body: "Pólya's **How to Solve It** (1945) catalogued the heuristics this section teaches informally: understand, plan, execute, review; draw on known results; work backward; decompose and recombine; exploit symmetry; examine special cases; generalize the problem to make it easier. The limits of the catalog are as instructive as its contents. No heuristic is complete: by the Church–Turing undecidability of first-order validity — the 1936 answer to the Entscheidungsproblem — there is no algorithm, and therefore no mechanically followable strategy, guaranteed to find a proof or refutation of every statement, so creative choice is not a removable overhead but the essence of the craft. Heuristics can also misfire: symmetry invites “without loss of generality” claims that a hidden asymmetry quietly refutes. What strategy adds, formally, is ordering and compression of a search that completeness renders enumerable but undecidability keeps from being automatic — and whether machines can do better is the subject of the research level." }
        ]
      },
      {
        tier: "phd",
        title: "Machine mathematics and the shape of proofs",
        blocks: [
          { kind: "application", heading: "Neural provers: GPT-f to AlphaProof", body: "The proof-search picture of Level II is now run by learning systems. **GPT-f** (Polu and Sutskever, 2020) coupled a transformer language model with tree search over Metamath derivations and became the first neural prover to contribute new, human-verified proofs to a formal library — machine-found proofs checked line by line. **AlphaGeometry** (Trinh and colleagues, Nature 2024) solved 25 of 30 Olympiad geometry problems in a formal language of its own construction, combining a symbolic deduction engine with a learned generator of auxiliary constructions. **AlphaProof** (Google DeepMind, 2024) fine-tunes a language model to propose steps of Lean proofs, verifies them in a deterministic environment, and trains on the outcome with AlphaZero-style reinforcement learning; combined with AlphaGeometry 2 it reached silver-medal standard at the 2024 International Mathematical Olympiad, solving four of the six problems. The persistent bottleneck is the **formal-to-informal gap**: models reason inside verified languages whose statements must still be supplied by humans, and **autoformalization** — translating textbook mathematics into those languages — remains the least automated step of the entire pipeline." },
          { kind: "para", heading: "Can elegance be formalized?", body: "Erdős pictured **the BOOK**: God's volume holding the perfect proof of every theorem, of which human proofs are smudged photocopies; Aigner and Ziegler's **Proofs from THE BOOK** collects candidate pages. Whether book-ness is a formal property is a genuine research question with quantitative proxies: proof length, the canonical measure of proof complexity; economy of concepts, captured exactly by the subformula property of Level II — a cut-free proof reuses only the statement's own material; symmetry, measurable as invariance of the derivation under the statement's automorphisms; and surprise, approximated by Kolmogorov-style compression relative to the statement. Each proxy overshoots or undershoots: a shortest derivation can still feel like mud, and a luminous one-line argument can conceal exponential formal content. Gowers's “two cultures” essay observes that theory-builders and problem-solvers hold genuinely different aesthetics, suggesting elegance is at least partly social. Whether the shadows converge — whether human-judged beauty correlates with formal brevity or locality, and could even be predicted from them — is an open empirical question, one the machine provers of this level are beginning to generate data for." },
          { kind: "open", heading: "Finding proofs versus checking them", body: "Checking a formal proof is cheap: each rule application is a local, mechanical verification, and the whole audit runs in time polynomial in the proof's length. Finding one is another universe. Propositionally, the gap is exactly the P versus NP phenomenon of the first section's research level — certificates are short, discovery apparently is not — and proof complexity quantifies it system by system, with Haken-style lower bounds marking where efficient certification stops. In first-order logic, finding is not even in principle bounded: validity is recursively enumerable but undecidable, so any complete search must sometimes run forever, and strategy can shorten the wait without abolishing it. At research scale the gap turns qualitative: the four-color theorem was settled in 1976 by machine enumeration over 1,936 reducible configurations and formally verified by Gonthier in 2005 — correctness achieved, comprehension deferred. The open problems: is there an algorithm that finds human-readable proofs when they exist; can readability itself be defined well enough to be engineered; and is the hardness of finding versus checking a mathematical fact about proof systems, or a limitation of the ones invented so far? Current provers deliver correctness without comprehension; closing that gap is the open frontier." }
        ]
      },
    ],
    readingTime: 9,
    intro: "Knowing the proof methods is half the craft; the other half is strategy — choosing the right method, splitting the problem into cases, proving things are unique, and adapting proofs you already know. This section assembles the full strategic toolkit, with famous illustrations from checkerboard tilings to unsolved conjectures.",
    objectives: [
      "Structure proofs by cases and use “without loss of generality” correctly",
      "Prove uniqueness statements with the two-part template",
      "Reason forward and backward to find a proof path",
      "Adapt known proofs to new statements",
      "Understand how conjectures are explored, proved or refuted"
    ],
    concepts: [
      {
        term: "Exhaustive proof",
        kind: "method",
        statement: "An **exhaustive proof** is a proof by cases where the cases are checked literally one by one — feasible only when there are finitely many (and few) possibilities.",
        detail: "Example: “if n is a positive integer with n ≤ 4, then n² ≤ 16” is proved by checking 1, 2, 3, 4. Computers now make exhaustive proofs respectable for millions of cases (the four-color theorem was settled this way), but the logic is the same."
      },
      {
        term: "Proof by cases",
        kind: "method",
        statement: "To prove ∀x P(x) by cases: split the domain into two or more **exhaustive** (every possibility covered) cases, prove the statement separately in each case, then combine.",
        detail: "Typical splits: x < 0 / x = 0 / x > 0, or n even / n odd. Each case may use a different argument — that is the whole point. The cases must not overlap the conclusion differently: they must all conclude the same goal."
      },
      {
        term: "Without loss of generality",
        kind: "method",
        statement: "**WLOG**: when a symmetric argument lets you prove one case and get the others by merely renaming or swapping variables, you may say “without loss of generality, assume case 1.”",
        detail: "In proving |xy| = |x||y| you may assume WLOG that x ≥ 0 — the negative case is the mirror argument with x replaced by −x. The phrase is a promise: if you cannot honestly deliver the other cases by symmetry, you have a gap, not a proof."
      },
      {
        term: "Uniqueness proofs",
        kind: "method",
        statement: "To prove ∃!x P(x): **(1)** existence — exhibit or argue for at least one x with P(x); **(2)** uniqueness — assume x₁ and x₂ both satisfy P and derive x₁ = x₂.",
        detail: "Example shape: the inverse of a group element, the solution of a linear equation, the empty set's subset property. Uniqueness never means “there is at most one” alone — it means exactly one, so both halves are required."
      },
      {
        term: "Forward and backward reasoning",
        kind: "method",
        statement: "**Forward reasoning** starts from the hypotheses and derives consequences; **backward reasoning** starts from the goal q and asks what statement would *suffice* to prove it — working back toward something the hypotheses can deliver.",
        detail: "To prove ∀a≠0 ∃b (ab = 1) backward: it would suffice that b = 1/a; that requires 1/a to exist, which holds for reals a ≠ 0. Backward reasoning is a discovery tool — the final written proof is usually presented forward."
      },
      {
        term: "Adapting existing proofs",
        kind: "insight",
        statement: "When a new statement resembles a proved one, try the same proof structure: the same definition-unfolding, the same auxiliary construction, the same contradiction target — adjusting where the objects differ.",
        detail: "The proof that √2 is irrational adapts to √3 (both descend to “a and b both divisible by 3”); the domino coloring argument adapts from one board shape to another. The idea also runs in reverse: seeing *why* a proof breaks on a new statement often reveals a counterexample."
      },
      {
        term: "Circular reasoning and other traps",
        kind: "insight",
        statement: "**Circular reasoning (begging the question)** uses the statement being proved (or an equivalent) as one of its own premises. Other traps: skipping a case, using a “theorem” that is actually a conjecture, and proving a weaker statement than claimed.",
        detail: "“The Bible is true because it says so” is the paradigm. In coursework the subtle version appears when a lemma quietly assumes what the main theorem needs to establish. The remedy is to display every premise and check none smuggles in the conclusion."
      },
      {
        term: "Conjectures and open problems",
        kind: "insight",
        statement: "A **conjecture** is a proposed statement awaiting proof or refutation. Famous examples: Goldbach's conjecture (every even integer greater than 2 is a sum of two primes) and the 3x + 1 (Collatz) problem — iterate n ↦ n/2 (n even) or n ↦ 3n + 1 (n odd); every start seems to reach 1, but no one can prove it.",
        detail: "The workflow of discovery: compute examples, spot a pattern, formulate the conjecture, hunt for counterexamples, then attempt a proof. Counterexample hunting kills most conjectures early — which is a success, not a failure."
      },
      {
        term: "Strategy: matching methods to statements",
        kind: "method",
        statement: "A selection heuristic: conditional statement with usable hypothesis → direct proof; hypothesis hard to use, conclusion easy to negate → contraposition; statement mentions “not,” “irrational,” or a maximum/minimum → contradiction; statement splits naturally (parity, sign, ranges) → cases; statement demands a witness → constructive existence; statement demands impossibility → contradiction.",
        detail: "Keep a fallback hierarchy: try direct, then contraposition, then contradiction. If stuck after all three, look for a counterexample — maybe the statement is false."
      }
    ],
    examples: [
      {
        title: "Proof by cases",
        problem: "Prove that n² ≥ n for every integer n.",
        steps: [
          { label: "Step 1: Choose exhaustive cases", text: "Every integer falls into exactly one of: n ≤ −1, n = 0, n ≥ 1." },
          { label: "Step 2: Case n ≤ −1", text: "Then n² ≥ 1 > 0 > n? Carefully: n² ≥ 1 and n < 1, so n² > n — in particular n² ≥ n." },
          { label: "Step 3: Case n = 0", text: "n² = 0 = n, so n² ≥ n holds with equality." },
          { label: "Step 4: Case n ≥ 1", text: "n² − n = n(n − 1) is a product of two nonnegative integers, hence ≥ 0." }
        ],
        result: "Since every integer belongs to one of the cases and the statement holds in each, n² ≥ n for all integers n."
      },
      {
        title: "A uniqueness proof",
        problem: "Prove that every nonzero real number has a unique multiplicative inverse: ∃!y (xy = 1) for each x ≠ 0.",
        steps: [
          { label: "Step 1: Existence", text: "Since x ≠ 0, the real number 1/x exists, and x · (1/x) = 1." },
          { label: "Step 2: Set up uniqueness", text: "Suppose y and z are both inverses of x: xy = 1 and xz = 1." },
          { label: "Step 3: Chain them together", text: "y = y · 1 = y(xz) = (yx)z = 1 · z = z, using associativity and the two inverse equations." },
          { label: "Step 4: Conclude", text: "Any two inverses coincide, so the inverse is unique." }
        ],
        result: "Existence (witness 1/x) plus uniqueness (any two inverses are equal) give ∃!y (xy = 1) — the two-part template every uniqueness proof follows."
      },
      {
        title: "The mutilated checkerboard",
        problem: "Can an 8 × 8 checkerboard with two diagonally opposite corners removed be tiled by 1 × 2 dominoes?",
        steps: [
          { label: "Step 1: Find the invariant", text: "Color the board in the usual alternating pattern; each domino, wherever placed, covers exactly one black and one white square." },
          { label: "Step 2: Count the colors of the full board", text: "An intact 8 × 8 board has 32 black and 32 white squares." },
          { label: "Step 3: Account for the removals", text: "Diagonally opposite corners of a square board share the same color, so removing them leaves 30 of one color and 32 of the other." },
          { label: "Step 4: Derive the obstruction", text: "Any domino tiling would cover equal numbers of black and white squares — impossible with 30 versus 32." }
        ],
        result: "No tiling exists — and the coloring-argument technique transfers to countless other tiling problems, a showcase of adapting proofs rather than brute force."
      }
    ],
    keyTakeaways: [
      "Proof by cases must cover every possibility; each case proves the same conclusion, possibly by different arguments.",
      "“WLOG” is legitimate only when the remaining cases follow by an honest symmetry or renaming.",
      "Uniqueness proofs have two obligatory parts: existence of a witness, and any two witnesses are equal.",
      "Reason backward to discover a path, then write the proof forward.",
      "Adapting a known proof is the mathematician's chief move — and noticing where it breaks finds counterexamples.",
      "Conjectures drive the field: test with examples, hunt counterexamples, then attempt a proof — Goldbach and 3x + 1 remain open."
    ],
    quiz: [
      {
        q: "A valid proof by cases requires that:",
        options: ["the cases cover every possibility for the objects under discussion", "each case assumes the conclusion", "there are exactly two cases", "all cases end with different conclusions"],
        answer: 0,
        explanation: "Exhaustiveness is the non-negotiable requirement — a single uncovered possibility is a gap in the proof. The cases may be many or few, and every case must conclude the statement being proved."
      },
      {
        q: "In a proof you write “without loss of generality, assume x ≤ y.” This is justified when:",
        options: ["the argument for x > y is identical to the one given, with x and y interchanged", "x and y are always equal", "the hypothesis already guarantees x ≤ y", "the statement is symmetric in every variable, not just x and y"],
        answer: 0,
        explanation: "WLOG is a symmetry claim about the proof: the excluded cases must follow from the treated case by swapping names. If the hypothesis guaranteed x ≤ y there would be no need for WLOG at all."
      },
      {
        q: "The uniqueness part of proving ∃!x P(x) proceeds by:",
        options: ["assuming two witnesses x₁ and x₂ satisfy P and deriving x₁ = x₂", "exhibiting one witness with P", "showing no witness exists", "verifying P for every element of the domain"],
        answer: 0,
        explanation: "Uniqueness means “at most one”: any two objects satisfying P must be the same. Exhibiting a witness is the *existence* half — both halves together give “exactly one.”"
      },
      {
        q: "An 8 × 8 checkerboard with two diagonally opposite corners removed cannot be tiled by 1 × 2 dominoes because:",
        options: ["64 − 2 = 62 is odd", "the two removed squares have the same color, leaving 30 of one color and 32 of the other, while every domino covers one square of each color", "dominoes cannot be rotated", "the two removed squares are adjacent to each other"],
        answer: 1,
        explanation: "The coloring invariant settles it: 62 squares remain but the colors are unbalanced 30–32, and each domino consumes exactly one of each. The parity/counting mismatch makes a tiling impossible."
      },
      // PYQ-pattern — irrationality proof by contradiction (rephrased, values changed)
      {
        q: "To establish that $\\sqrt{2}$ is irrational by contradiction, which opening move launches a valid argument?",
        options: ["Declare that the decimal expansion of $\\sqrt{2}$ never repeats, so it is irrational", "Suppose $\\sqrt{2} = \\frac{p}{q}$ where $p$ and $q$ are positive integers with $\\gcd(p,q) = 1$", "Suppose every positive real number can be written as a quotient of integers", "Suppose $\\sqrt{2} = \\frac{m}{n}$ where $m$ and $n$ are both even"],
        answer: 1,
        explanation: "Step 1: Restate the goal as **negation of rationality** — assume the opposite of what must be shown, namely $\\sqrt{2} \\in \\mathbb{Q}$. Step 2: Recall the key characterization that every rational has a lowest-terms form $\\frac{p}{q}$ with $\\gcd(p,q) = 1$. Step 3: Square to get $2q^{2} = p^{2}$, hence $p^{2}$ is even and therefore $p$ is even, say $p = 2k$. Step 4: Substitute back to get $2q^{2} = 4k^{2}$, so $q^{2} = 2k^{2}$ and $q$ is even as well — contradicting $\\gcd(p,q) = 1$. Step 5: The distractors fail since decimal non-repetition assumes the conclusion, universal rationality is far stronger than needed, and starting with both even concedes the contradiction at once. Step 6: Therefore the initial supposition is impossible and $\\sqrt{2} \\notin \\mathbb{Q}$."
      },
      // PYQ-pattern — contrapositive proof structure (rephrased, values changed)
      {
        q: "For integers, consider the claim that whenever $n^{2}$ is even then $n$ is even. A contrapositive argument starts by supposing:",
        options: ["$n$ is even and deducing that $n^{2}$ is even", "$n^{2}$ is odd and deducing that $n$ is odd", "$n^{2}$ is even and $n$ is odd simultaneously", "$n$ is odd and deducing that $n^{2}$ is odd"],
        answer: 3,
        explanation: "Step 1: Restate the implication $P \\to Q$ with $P$ as $n^{2}$ is even and $Q$ as $n$ is even. Step 2: Recall the key logical identity $(P \\to Q) \\equiv (\\lnot Q \\to \\lnot P)$, so proving the contrapositive suffices. Step 3: Negate $Q$ to get $n$ odd, hence $n = 2k+1$ for some integer $k$. Step 4: Compute $n^{2} = 4k^{2} + 4k + 1 = 2(2k^{2} + 2k) + 1$, which has the form $2t+1$ and is therefore odd. Step 5: The distractors confuse direction since starting from $n$ even proves the converse, starting from $n^{2}$ odd targets the inverse, and the joint assumption belongs to contradiction setup rather than contrapositive. Step 6: Thus $\\lnot Q \\to \\lnot P$ holds, and the original claim follows."
      }
    ]
  }
]
