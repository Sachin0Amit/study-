import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 2: Boolean Algebra and Logic Gates (Sections 2.1 – 2.7)
// Prime notation A′ (U+2032) in prose and math. All worked functions and
// gate-family facts follow the book’s own examples and tables.
// ============================================================================

export const manoCh2Content: SectionContent[] = [
  // ------------------------------------------------------------------ 2.1
  {
    sectionId: 'mano-ch2-s1',
    readingTime: 7,
    intro: 'Chapter 1 ended with binary logic: two values and three operations defined by truth tables. Chapter 2 now builds the algebra that lets us compute with those tables. The section fixes the basic definitions — what a binary-valued system of elements and operators is — and installs the notational conventions, especially the fact that the symbols + and · are logical operators with truth tables, not arithmetic operations.',
    objectives: [
      'State what a system of binary logic consists of and how operations are defined on it',
      'Read and write truth tables for AND, OR and NOT with the book’s notation',
      'Distinguish the logical + and · from arithmetic addition and multiplication',
      'Explain how truth tables serve as complete definitions of operations and functions',
    ],
    concepts: [
      {
        term: 'A set with binary operators',
        kind: 'definition',
        statement: 'The objects of study form a **set of elements** $B = \\{0, 1\\}$ together with **binary operators** (+ and ·) and a **unary operator** (′). A binary operator on $B$ assigns to each ordered pair of elements of $B$ an element of $B$; a unary operator assigns an element of $B$ to each single element.',
        detail: 'The definition is deliberately abstract and set-theoretic — the same shape Rosen uses for Boolean algebra in Discrete Mathematics (Chapter 12). Nothing about voltages, switches or arithmetic enters here; those interpretations are attached later, and the abstraction is what lets one algebra describe relays, gates, and set intersections at once.',
      },
      {
        term: 'The three basic operations',
        kind: 'definition',
        statement: 'The three basic operations of binary logic are defined by truth tables: **AND** ($x \\cdot y$, written $xy$) is 1 only when both inputs are 1; **OR** ($x + y$) is 0 only when both inputs are 0; **NOT** ($x′$) interchanges 0 and 1.',
        detail: 'Presented together, the tables are: $xy$ reads $0, 0, 0, 1$ down the rows 00, 01, 10, 11; $x + y$ reads $0, 1, 1, 1$; and $x′$ reads $1, 0$ down rows 0, 1. These three tables are the entire semantic content of the chapter — everything else is derived.',
      },
      {
        term: 'The truth table as complete definition',
        kind: 'notation',
        statement: 'An operation or function of $n$ variables is **completely specified** by a table with $2^{n}$ rows listing the value for every input combination. Two expressions are **equal** exactly when their truth tables agree on every row.',
        detail: 'This row-by-row equality is the standard by which every identity in this chapter and Chapter 3 is proved or checked: to verify a theorem, build both tables and compare columns. The same tables later become the cells of Karnaugh maps (Chapter 3) and the design specifications of combinational circuits (Chapter 4).',
      },
      {
        term: 'Logical plus is not arithmetic addition',
        kind: 'insight',
        statement: 'In binary logic $1 + 1 = 1$: the + operator tabulates **disjunction**, not the sum that produces a carry. Similarly $x \\cdot y$ agrees with arithmetic multiplication only because both outputs happen to match on the four rows — for +, arithmetic would demand the impossible value 10.',
        detail: 'The symbols are borrowed from ordinary algebra because many of the manipulative rules carry over (commutativity, distributivity of · over +) — but the student must keep straight that the AND/OR gates of Section 2.7 are built from truth tables, while the adders of Chapter 4 implement true addition with carry outputs. Same voltages, different mathematics.',
      },
      {
        term: 'Interpretations of 0 and 1',
        kind: 'insight',
        statement: 'The two elements can be read as **false/true** (propositional logic), as **open/closed** (series and parallel switch contacts), or as **low/high voltage** (gate circuits) — binary logic is the common skeleton beneath all three readings.',
        detail: 'The switching interpretation is why the algebra describes hardware: AND is two switches in series, OR is two switches in parallel, and any Boolean expression wires up as a contact network. The voltage interpretation is the one real ICs use, with the caveat that positive logic maps the higher voltage to 1.',
      },
      {
        term: 'From operations to functions',
        kind: 'method',
        statement: 'By combining variables with the three operations one builds **Boolean functions** such as $F = x + y′z$: each function’s truth table is computed by evaluating the expression row by row, applying NOT first, then AND, then OR.',
        detail: 'The evaluation discipline (precedence NOT, AND, OR, with parentheses) was fixed in Section 1.8; this chapter makes such functions the object of algebraic transformation — simplifying them, complementing them, and expressing them in canonical forms.',
      },
    ],
    examples: [
      {
        title: 'The three truth tables in one view',
        problem: 'Write the complete truth tables of AND, OR and NOT side by side, and confirm each definition from the table alone.',
        steps: [
          { label: 'Step 1: Set up rows for two variables', text: 'Four rows in the canonical order: $(x, y) = (0,0), (0,1), (1,0), (1,1)$, plus a separate two-row table for the one-variable NOT.' },
          { label: 'Step 2: Fill the AND column', text: 'Row by row: $0 \\cdot 0 = 0$, $0 \\cdot 1 = 0$, $1 \\cdot 0 = 0$, $1 \\cdot 1 = 1$ — a single 1 in the last row.' },
          { label: 'Step 3: Fill the OR column', text: '$0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, $1 + 1 = 1$ — a single 0 in the first row; note $1 + 1 = 1$, never 10.' },
          { label: 'Step 4: Fill the NOT column', text: '$0′ = 1$ and $1′ = 0$ — the table swaps the two values.' },
          { label: 'Step 5: Read the definitions off the tables', text: 'AND = “both inputs 1”; OR = “at least one input 1”; NOT = “the other value” — the tables are the definitions, no prose needed.' },
        ],
        result: 'The three canonical tables — $xy$: 0001; $x+y$: 0111; $x′$: 10 — are the axioms in tabular form and the basis of every later proof.',
      },
      {
        title: 'Evaluating a first Boolean function row by row',
        problem: 'Build the truth table of $F = x + y′z$ from the definitions.',
        steps: [
          { label: 'Step 1: Enumerate the eight rows', text: 'Three variables give $2^{3} = 8$ rows: $(x, y, z)$ runs $000, 001, 010, 011, 100, 101, 110, 111$.' },
          { label: 'Step 2: Complement y in each row', text: 'The $y′$ column is $1, 1, 0, 0, 1, 1, 0, 0$ — the inversion of the $y$ column $0, 0, 1, 1, 0, 0, 1, 1$.' },
          { label: 'Step 3: Form the AND term', text: '$y′z$ is 1 only where both factors are 1: rows $001$ and $101$ — the two rows with $y = 0, z = 1$.' },
          { label: 'Step 4: OR with x', text: '$F$ is 1 wherever $x = 1$ (rows 100 through 111) **or** wherever $y′z = 1$: together rows 001, 100, 101, 110, 111.' },
          { label: 'Step 5: Read the function’s meaning', text: 'The output column $0, 1, 0, 0, 1, 1, 1, 1$: $F$ is false only when $x = 0$ and not ($y = 0$ with $z = 1$) — the table, not the words, is the specification.' },
        ],
        result: 'The truth table of $x + y′z$ is 01001111 (rows 000→111): three gates later, this exact table is what the circuit of AND, OR and NOT realizes.',
      },
    ],
    keyTakeaways: [
      'Binary logic = the set $\\{0, 1\\}$ with binary operators + and · and the unary complement ′, all defined by truth tables.',
      'AND outputs 0001, OR outputs 0111, NOT outputs 10 — memorize the three columns.',
      'Logical $1 + 1 = 1$: the operators are truth-functional, not arithmetic; carries belong to adders, not OR gates.',
      'Truth tables are complete definitions, and equality of functions is row-by-row equality of their tables.',
      'The 0/1 labels admit false/true, open/closed and low/high interpretations — one algebra, many physical readings.',
      'Precedence NOT → AND → OR governs every expression, e.g. $x + y′z$ means $x + (y′ \\cdot z)$.',
    ],
    quiz: [
      {
        q: 'A binary operator on the set $\\{0, 1\\}$ assigns:',
        options: ['A carry bit to each pair', 'An element of $\\{0, 1\\}$ to each ordered pair of elements', 'A real number to each element', 'Two outputs to each input pair'],
        answer: 1,
        explanation: 'Closure is part of the definition: every ordered pair of operands maps to a single element of the same set — which is why $1 + 1$ must be 0 or 1, and it is 1.',
      },
      {
        q: 'Which output column (rows 00, 01, 10, 11) belongs to AND and which to OR?',
        options: ['AND: 0111, OR: 0001', 'AND: 0001, OR: 0111', 'AND: 1010, OR: 0101', 'AND: 1000, OR: 1110'],
        answer: 1,
        explanation: 'AND is true only at 11 (column 0001); OR is false only at 00 (column 0111). The reversed pairing in option A is the classic transposition error.',
      },
      {
        q: 'The truth table of $x + y′z$ has how many rows, and at which rows is the function 1?',
        options: ['4 rows; 1 at 01 and 10', '8 rows; 1 at 001, 100, 101, 110, 111', '8 rows; 1 at 000, 010, 011', '3 rows; 1 at 101 only'],
        answer: 1,
        explanation: 'Three variables give $2^{3} = 8$ rows; $F$ is 1 where $x = 1$ (rows 100–111) or where $y′z = 1$ (rows 001 and 101) — together 001, 100, 101, 110, 111.',
      },
      {
        q: 'The statement $1 + 1 = 1$ is correct because:',
        options: ['Binary arithmetic rounds down', 'The + symbol denotes logical OR, defined by its truth table, not addition', '1 is absorbed by 0', 'It only holds in complement form'],
        answer: 1,
        explanation: 'In binary logic the operators are defined by truth tables: OR outputs 1 whenever any operand is 1. Arithmetic addition of two ones is 10 in binary — a different operation performed by different hardware.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.2
  {
    sectionId: 'mano-ch2-s2',
    readingTime: 8,
    intro: 'Boolean algebra is defined by Huntington’s postulates — six assumptions about a set, two binary operators and the two distinguished elements. Every rule used to simplify expressions is either one of these postulates or derived from them. This section states the postulates, verifies that two-valued binary logic satisfies them, and introduces duality, the symmetry principle that halves the work of proving everything that follows.',
    objectives: [
      'List Huntington’s postulates for Boolean algebra',
      'Verify each postulate for the two-element Boolean algebra by truth table',
      'Explain the duality principle and apply it to generate dual statements',
      'Identify which postulate fails in ordinary algebra (and which ordinary-algebra law fails here)',
    ],
    concepts: [
      {
        term: 'Boolean algebra (Huntington’s definition)',
        kind: 'definition',
        statement: 'A **Boolean algebra** is a closed set $B$ with two binary operators, + and ·, satisfying six **postulates**: closure; existence of identity elements (0 for +, 1 for ·); commutativity of both operators; distributivity of · over + **and** of + over ·; existence of complements ($x + x′ = 1$, $x \\cdot x′ = 0$); and the existence of at least two distinct elements.',
        detail: 'The postulates are assumptions, not theorems — they define what qualifies as a Boolean algebra. The two-element system of Chapter 1 is the smallest Boolean algebra; larger ones (like the algebra of subsets of a set under union and intersection) exist and satisfy the same axioms, which is exactly Rosen’s abstract treatment in Discrete Mathematics Chapter 12.',
      },
      {
        term: 'The postulates in symbols',
        kind: 'law',
        statement: 'With $x, y, z \\in B$: **(1) Closure**: $x + y \\in B$ and $x \\cdot y \\in B$. **(2) Identity**: $x + 0 = x$, $x \\cdot 1 = x$. **(3) Commutative**: $x + y = y + x$, $x \\cdot y = y \\cdot x$. **(4) Distributive**: $x \\cdot (y + z) = x \\cdot y + x \\cdot z$ and $x + (y \\cdot z) = (x + y) \\cdot (x + z)$. **(5) Complement**: $x + x′ = 1$, $x \\cdot x′ = 0$. **(6)** There exist at least two elements, with $0 \\neq 1$.',
        detail: 'Postulate 4’s second form is the stranger: in ordinary algebra $x + yz \\neq (x + y)(x + z)$ (try $x = y = z = 2$), but in Boolean algebra it holds exactly. Conversely, cancellation and subtraction have no Boolean counterparts — the postulates are the complete rulebook.',
      },
      {
        term: 'Two-element Boolean algebra',
        kind: 'insight',
        statement: 'The set $B = \\{0, 1\\}$ with the AND/OR/NOT truth tables of Section 2.1 **is a Boolean algebra**: each postulate can be checked against the truth tables directly, a finite verification of eight rows or fewer.',
        detail: 'This check is what licenses using the algebra on gate circuits: the AND and OR operators are exactly the gate operations. Mano performs the verification in a table with one column per postulate pair; it is the moment the book’s logic (Chapter 1) and algebra (Chapter 2) are welded together.',
      },
      {
        term: 'The duality principle',
        kind: 'law',
        statement: 'Every Boolean identity remains valid when + and · are interchanged **and** 0 and 1 are interchanged throughout — the **dual** of a theorem is also a theorem. Duality follows because the postulates come in dual pairs.',
        detail: 'For example, the identity $x + 0 = x$ dualizes to $x \\cdot 1 = x$; the pair of complement laws $x + x′ = 1$ and $x \\cdot x′ = 0$ are each other’s duals. Application: prove one statement of a pair, get the other free — every theorem in Section 2.3 is published in dual pairs for exactly this reason.',
      },
      {
        term: 'Uniqueness of complement and identity',
        kind: 'theorem',
        statement: 'Each element has **exactly one** complement: if both $x + y = 1$ and $x \\cdot y = 0$ hold, then $y = x′$. Likewise 0 and 1 are the unique identity elements for + and ·.',
        detail: 'The proof multiplies $y = y \\cdot 1 = y(x + x′) = xy + x x′ = xy + 0 = xy$, then compares with $x′ = x′ \\cdot 1 = x′(x + y) = x′x + x′y = x′y$, and adding $y = xy$ to $x′y$ gives $y + x′y = y(x′ + 1)$… the chain closes with $y = x′$. Uniqueness is what makes ′ a well-defined operator and involution $(x′)′ = x$ a theorem rather than a definition.',
      },
      {
        term: 'What is NOT a Boolean postulate',
        kind: 'insight',
        statement: 'Subtraction, division, negatives, and cancellation do **not** exist: $x + 1 = 1$ shows adding cannot be undone (from $x + 1 = y + 1$ you may **not** conclude $x = y$), and the order relations of arithmetic are absent.',
        detail: 'Students trained on ordinary algebra routinely “cancel” — this postulate-level list makes clear which habits transfer (commutativity, associativity, one distributive law) and which do not (the other distributive law, uniquely Boolean, is gained instead).',
      },
    ],
    examples: [
      {
        title: 'Verifying the complement postulate by truth table',
        problem: 'Using $B = \\{0, 1\\}$, verify postulate 5: $x + x′ = 1$ and $x \\cdot x′ = 0$ for every element.',
        steps: [
          { label: 'Step 1: Enumerate the elements', text: 'The set has just two elements, so the verification table has two rows: $x = 0$ and $x = 1$.' },
          { label: 'Step 2: First row, x = 0', text: 'The complement is $x′ = 1$; then $x + x′ = 0 + 1 = 1$ and $x \\cdot x′ = 0 \\cdot 1 = 0$ — both laws hold.' },
          { label: 'Step 3: Second row, x = 1', text: 'Now $x′ = 0$; then $x + x′ = 1 + 0 = 1$ and $x \\cdot x′ = 1 \\cdot 0 = 0$ — both laws hold again.' },
          { label: 'Step 4: Interpret the two laws', text: 'Joining an element with its complement saturates to 1; meeting them annihilates to 0 — the “excluded middle” and “contradiction” laws of propositional logic in algebraic dress.' },
          { label: 'Step 5: Note the dual structure', text: 'The two statements exchange + with · and 1 with 0 — the first is the dual of the second, so both are established as a pair.' },
        ],
        result: 'Both complement laws check out in two rows — the finite size of $\\{0, 1\\}$ makes every postulate a two- or four-row truth-table exercise.',
      },
      {
        title: 'Applying duality to generate new identities',
        problem: 'Given the (provable) identity $x + x′y = x + y$, write its dual and verify the dual by truth table.',
        steps: [
          { label: 'Step 1: Apply the duality map', text: 'Interchange + and · everywhere: $x \\cdot (x′ + y) = x \\cdot y$. The elements 0 and 1 do not appear here, so only the operators swap.' },
          { label: 'Step 2: Set up the verification table', text: 'Four rows for $(x, y)$; add columns for $x′ + y$, the left side $x(x′ + y)$, and the right side $xy$.' },
          { label: 'Step 3: Evaluate the left side', text: 'Rows: at $(0,0)$: $0 \\cdot (1 + 0) = 0$; at $(0,1)$: $0 \\cdot (1+1) = 0$; at $(1,0)$: $1 \\cdot (0 + 0) = 0$; at $(1,1)$: $1 \\cdot (0 + 1) = 1$.' },
          { label: 'Step 4: Evaluate the right side', text: '$xy$ is $0, 0, 0, 1$ down the same rows — the columns match on all four.' },
          { label: 'Step 5: Conclude', text: 'Since the dual identity holds on every row, duality is confirmed operationally: the theorem came free once the original was proved, because the postulates come in dual pairs.' },
        ],
        result: 'Dual of $x + x′y = x + y$ is $x(x′ + y) = xy$, verified: both sides output $0, 0, 0, 1$ — one proof, two theorems.',
      },
      {
        title: 'The distributive law that ordinary algebra lacks',
        problem: 'Verify $x + yz = (x + y)(x + z)$ by truth table, and show numerically that it fails in ordinary algebra.',
        steps: [
          { label: 'Step 1: Build the eight-row table', text: 'Columns: $yz$ (AND of the last two variables), the left side $x + yz$, then $x + y$, $x + z$, and their product — the right side.' },
          { label: 'Step 2: Spot the pattern', text: 'The right side $(x+y)(x+z)$ is 0 only when both $x + y$ and $x + z$ are 0, which forces $x = 0$, $y = 0$, $z = 0$ — a single 0 in the first row, and 1 everywhere else.' },
          { label: 'Step 3: Check the left side', text: '$x + yz$ is also 1 everywhere except row 000: if $x = 0$, the term $yz$ is 0 only when $y$ or $z$ is 0. The columns agree on all eight rows.' },
          { label: 'Step 4: Contrast with ordinary algebra', text: 'With $x = y = z = 2$: $x + yz = 6$ but $(x + y)(x + z) = 16$ — the identity is false there, since ordinary + is invertible and Boolean + saturates.' },
          { label: 'Step 5: Note the payoff', text: 'This law is the algebraic engine behind product-of-sums manipulation (Section 2.5) and POS simplification on maps (Section 3.4).' },
        ],
        result: '$x + yz = (x + y)(x + z)$ holds in Boolean algebra on all eight rows and fails in ordinary algebra — the postulate that most sharply separates the two systems.',
      },
    ],
    keyTakeaways: [
      'Boolean algebra is defined by six Huntington postulates: closure, identity elements, commutativity, distributivity (both ways), complements, and at least two elements.',
      'The two-element logic of Chapter 1 satisfies every postulate — checkable in at most eight truth-table rows.',
      'Duality: swapping + ↔ · and 0 ↔ 1 in any theorem yields another theorem; prove one, own both.',
      'The Boolean distributive law $x + yz = (x + y)(x + z)$ has no ordinary-algebra counterpart, while cancellation and subtraction have no Boolean counterpart.',
      'Complements and identities are unique, making ′ a well-defined operator and $(x′)′ = x$ a theorem.',
      'The postulates are the design rulebook: every later simplification cites one of them or a theorem derived from them.',
    ],
    quiz: [
      {
        q: 'Which pair lists BOTH statements of Huntington’s complement postulate?',
        options: [`$x + x′ = 1$ and $x \\cdot x′ = 0$`, `$x + 0 = x$ and $x \\cdot 1 = x$`, `$x + x = x$ and $x \\cdot x = x$`, `$x + 1 = 1$ and $x \\cdot 0 = 0$`],
        answer: 0,
        explanation: 'Joining with the complement saturates to 1; meeting with it annihilates to 0. Option B is the identity postulate and option D is a pair of derivable boundedness theorems.',
      },
      {
        q: 'The dual of the statement $x \\cdot (y + z) = xy + xz$ is:',
        options: [`$x + (y \\cdot z) = (x + y)(x + z)$`, `$x \\cdot (y + z) = xy + xz$`, `$x + yz = xy + xz$`, `$(x + y)(x + z) = xy + x + z$`],
        answer: 0,
        explanation: 'Duality swaps each · with + and each + with · (0 ↔ 1 do not occur here): the product-distributes-over-sum law becomes the sum-distributes-over-product law.',
      },
      {
        q: 'From $x + 1 = y + 1$ in Boolean algebra one may conclude:',
        options: [`$x = y$`, 'Nothing — Boolean + saturates and cannot be cancelled', `$x \\geq y$`, '$x = 1$ only'],
        answer: 1,
        explanation: 'Since $x + 1 = 1$ for every $x$, the equation holds for all pairs — there is no cancellation law; uniqueness arguments must use the complement and identity postulates instead.',
      },
      {
        q: 'Which fact about the identity elements follows from the postulates alone?',
        options: ['1 is the identity for +', '0 is the identity for ·', '0 is the identity for + and 1 for ·, and each is unique', 'Identities depend on the element chosen'],
        answer: 2,
        explanation: 'Postulate 2 fixes $x + 0 = x$ and $x \\cdot 1 = x$; a standard postulate argument shows any element behaving like 0 for + equals 0, and likewise for 1 with ·.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.3
  {
    sectionId: 'mano-ch2-s3',
    readingTime: 9,
    intro: 'The postulates are the axioms; the theorems are the working tools. This section states the six theorem pairs — idempotence, boundedness, involution, absorption, the complement-elimination rule, DeMorgan’s laws — plus the consensus theorem, and proves a representative selection directly from postulates, the way the book does. Each theorem’s payoff is fewer literals, hence fewer gate inputs, in a real circuit.',
    objectives: [
      'State all six basic theorem pairs and the consensus theorem',
      'Prove theorems from postulates, citing each step',
      'Apply absorption, complement-elimination and consensus to simplify expressions',
      'Use DeMorgan’s laws to complement expressions and to push bubbles through gates',
    ],
    concepts: [
      {
        term: 'Idempotence and boundedness',
        kind: 'theorem',
        statement: 'Theorem 1 (**idempotent**): $x + x = x$ and $x \\cdot x = x$. Theorem 2 (**bounded**): $x + 1 = 1$ and $x \\cdot 0 = 0$.',
        detail: 'Proof of the first: $x + x = (x + x) \\cdot 1 = (x + x)(x + x′) = x + x x′ = x + 0 = x$, using identity, distributivity, complement and identity again. Boundedness says OR-ing with 1 saturates and AND-ing with 0 annihilates — the same saturation that blocks cancellation.',
      },
      {
        term: 'Involution',
        kind: 'theorem',
        statement: 'Theorem 3 (**involution**): $(x′)′ = x$ — complementing twice returns the original element.',
        detail: 'The proof leans on uniqueness of complement: both $x$ and $(x′)′$ satisfy the two complement laws relative to $x′$, and the complement is unique, so they are equal. In hardware, two cascaded inverters cancel — a bubble-pushing fact used constantly in Section 4.4.',
      },
      {
        term: 'Absorption',
        kind: 'theorem',
        statement: 'Theorem 4 (**absorption**): $x + xy = x$ and $x(x + y) = x$. Theorem 6 (**complement-elimination**, Mano’s second absorption form): $x + x′y = x + y$ and $x(x′ + y) = xy$.',
        detail: 'Absorption proof: $x + xy = x \\cdot 1 + xy = x(1 + y) = x \\cdot 1 = x$. Theorem 6 proof: $x + x′y = (x + x′)(x + y) = 1 \\cdot (x + y) = x + y$. Circuit meaning: a term that already implies another term is redundant — if $x$ is 1, the value of $y$ cannot change the output.',
      },
      {
        term: 'DeMorgan’s theorems',
        kind: 'theorem',
        statement: 'Theorem 5 (**DeMorgan**): $(x + y)′ = x′y′$ and $(xy)′ = x′ + y′$ — the complement of a sum is the product of complements, and vice versa. For $n$ variables, $(x_1 + x_2 + \\cdots + x_n)′ = x_1′x_2′ \\cdots x_n′$ by repeated application.',
        detail: 'Verified by an eight-row truth table; used for two great purposes: complementing entire functions (Section 2.4) and converting between AND-OR and NAND-NAND / NOR-NOR gate structures (Section 4.4). In gate-symbol terms, DeMorgan is the “bubble-pushing” identity that lets one symbol’s INVERT-OR disguise itself as an AND-with-inverted-inputs.',
      },
      {
        term: 'The consensus theorem',
        kind: 'theorem',
        statement: 'The **consensus theorem**: $xy + x′z + yz = xy + x′z$ — the third term (the **consensus** of the first two) is redundant. Its dual: $(x + y)(x′ + z)(y + z) = (x + y)(x′ + z)$.',
        detail: 'Proof: $yz = yz(x + x′) = xyz + x′yz$, and $xyz \\leq xy$ (it is absorbed: $xy + xyz = xy$) while $x′yz \\leq x′z$; adding the two absorbed pieces to the right-hand side changes nothing. The theorem is the algebraic heart of K-map minimization: two terms that differ in exactly one variable make every third term covered by their consensus redundant.',
      },
      {
        term: 'Theorem application checklist',
        kind: 'method',
        statement: 'To simplify an expression: eliminate duplicate terms; apply absorption ($x + xy = x$); apply complement-elimination ($x + x′y = x + y$); apply consensus to drop redundant third terms; complement whole functions with DeMorgan when a POS form is wanted.',
        detail: 'Algebraic simplification is unguided compared to the K-map (Chapter 3) — it requires noticing patterns — but these five moves account for nearly every step in the book’s algebraic examples and in the QM method’s bookkeeping.',
      },
    ],
    examples: [
      {
        title: 'Proving x + x′y = x + y from postulates',
        problem: 'Give a step-by-step postulate-cited proof of Theorem 6a, then its dual by the duality principle.',
        steps: [
          { label: 'Step 1: Introduce the identity', text: '$x + x′y = (x + x′) \\cdot (x + x′y)$? Instead, run distributivity the Boolean way: $x + x′y = (x + x′)(x + y)$, using $x + yz = (x + y)(x + z)$ with the roles $x, x′, y$.' },
          { label: 'Step 2: Evaluate the first factor', text: 'By the complement postulate, $x + x′ = 1$.' },
          { label: 'Step 3: Collapse with the identity', text: '$1 \\cdot (x + y) = x + y$, by the identity postulate (1 is the identity for ·).' },
          { label: 'Step 4: Assemble the chain', text: '$x + x′y = (x + x′)(x + y) = 1 \\cdot (x + y) = x + y$ — distributivity, complement, identity, in that order.' },
          { label: 'Step 5: Dualize', text: 'Interchanging + and · gives $x \\cdot (x′ + y) = x \\cdot y$, valid without a new proof — duality halves the theorem count.' },
        ],
        result: 'Theorem 6 is proved in three postulate steps, and its dual comes free — the standard Mano proof pattern for the whole theorem list.',
      },
      {
        title: 'DeMorgan verified and extended to three variables',
        problem: 'Verify $(xy)′ = x′ + y′$ by truth table, then derive $(A + B + C)′$ by two applications.',
        steps: [
          { label: 'Step 1: Build the four-row table', text: 'Columns: $xy$, its complement $(xy)′$, then $x′$, $y′$, and their sum $x′ + y′$.' },
          { label: 'Step 2: Compare columns', text: '$(xy)′$ reads $1, 1, 1, 0$; $x′ + y′$ reads $1, 1, 1, 0$ — identical on every row, so the theorem holds.' },
          { label: 'Step 3: Regroup the three-variable sum', text: 'Write $A + B + C$ as $(A + B) + C$ and apply the sum form to the pair: $(A + B + C)′ = (A + B)′ \\cdot C′$.' },
          { label: 'Step 4: Apply the theorem again', text: 'Expand $(A + B)′ = A′B′$ by the same law, giving $(A + B + C)′ = A′B′C′$ — the complement of a sum of any length is the product of complements.' },
          { label: 'Step 5: State the general pattern', text: 'By induction, every + becomes · and every variable complements; the same recursion produces $(ABC)′ = A′ + B′ + C′$ from the product form.' },
        ],
        result: 'DeMorgan: verified in four rows for two variables, and extended recursively — $(A+B+C)′ = A′B′C′$ and $(ABC)′ = A′ + B′ + C′$.',
      },
      {
        title: 'Consensus at work: dropping a redundant term',
        problem: 'Simplify $F = AB + A′C + BC$ using the consensus theorem and verify with a case-check.',
        steps: [
          { label: 'Step 1: Identify the pattern', text: 'The first two terms, $xy = AB$ and $x′z = A′C$, differ in exactly one variable ($A$ vs $A′$), so the consensus term is $yz = BC$.' },
          { label: 'Step 2: Invoke the theorem', text: 'By consensus, $AB + A′C + BC = AB + A′C$ — the third term adds nothing.' },
          { label: 'Step 3: Case-check on the boundary', text: 'When $BC = 1$ (i.e. $B = 1, C = 1$): either $A = 0$, making $A′C = 1$, or $A = 1$, making $AB = 1$. Either way the two-term expression already outputs 1 — exactly when $BC$ would have contributed.' },
          { label: 'Step 4: Case-check off the boundary', text: 'When $BC = 0$ the dropped term contributed 0 anyway, so removing it changes nothing on those rows either.' },
          { label: 'Step 5: Count the savings', text: 'The function went from three product terms and six literals to two terms and four literals — two fewer gate inputs in the AND-OR realization.' },
        ],
        result: '$AB + A′C + BC = AB + A′C$: the consensus term is provably redundant — the algebraic preview of overlapping K-map groups in Chapter 3.',
      },
    ],
    keyTakeaways: [
      'Theorem pairs (each with its dual): idempotent $x + x = x$; bounded $x + 1 = 1$; involution $(x′)′ = x$; absorption $x + xy = x$; complement-elimination $x + x′y = x + y$; DeMorgan $(x + y)′ = x′y′$.',
      'Proofs cite postulates line by line; duality then delivers the mate of each identity at no extra cost.',
      'DeMorgan recursively complements expressions of any length: the complement of a sum is the product of complements, and vice versa.',
      'The consensus theorem $xy + x′z + yz = xy + x′z$ kills redundant third terms — the algebraic form of K-map group overlap.',
      'Every literal removed is a gate input saved, which is why these theorems exist.',
      'Algebraic simplification works but is blind; Chapter 3’s maps and tabulation method mechanize it.',
    ],
    quiz: [
      {
        q: 'The expression $x + x′y$ simplifies to:',
        options: [`$x$`, `$y$`, `$x + y$`, `$x′ + y$`],
        answer: 2,
        explanation: 'By Theorem 6a, $x + x′y = (x + x′)(x + y) = x + y$. Option A is plain absorption, which needs the un-complemented $xy$ term to apply.',
      },
      {
        q: 'By DeMorgan, $(A + BC)′$ equals:',
        options: [`$A′B′ + A′C′$`, `$A′ + B′C′$`, `$A′(B′ + C′)$`, `$A′B′C′$`],
        answer: 2,
        explanation: 'First complement the sum: $(A + BC)′ = A′ \\cdot (BC)′$; then complement the inner product: $(BC)′ = B′ + C′$. Option A drops the outer AND; option B fails to distribute the complement.',
      },
      {
        q: 'In the expression $AB + A′C + BC$, the consensus theorem justifies dropping:',
        options: [`$AB$`, `$A′C$`, `$BC$`, 'Nothing; the expression is already minimal'],
        answer: 2,
        explanation: 'The first two terms disagree only in $A$; their consensus is $BC$, which is redundant — whenever $B = C = 1$, one of $AB$ or $A′C$ already covers the row.',
      },
      {
        q: 'The theorem $(x′)′ = x$ (involution) is proved using:',
        options: ['DeMorgan’s laws applied twice', 'The uniqueness of the complement element', 'The distributive law', 'Consensus'],
        answer: 1,
        explanation: 'Both $x$ and $(x′)′$ satisfy the two complement relations with respect to $x′$; since complements are unique, the two elements coincide — two cascaded inverters cancel.',
      },
      {
        q: 'Which statement is the dual of $x + 1 = 1$?',
        options: [`$x \\cdot 0 = 0$`, `$x + 0 = x$`, `$x \\cdot 1 = x$`, `$1 + x = 1$`],
        answer: 0,
        explanation: 'Duality swaps + with · and 0 with 1: the saturation law becomes the annihilation law. Option C is the identity postulate, dual of option B.',
      },
    
      // PYQ-pattern — absorption complement rule (rephrased)
      {
        q: "Which identity correctly simplifies $x + x′y$, and which theorem justifies each move?",
        options: ["$x′y$, by absorption", "$x$, by idempotence", "$x + y$, by $x + x′y = (x+x′)(x+y) = 1(x+y)$", "$1$, by boundedness"],
        answer: 2,
        explanation: "**Step 1 — Given data:** expression $x + x′y$ with OR distributive over AND.\n**Step 2 — Rule:** distributive $x + yz = (x+y)(x+z)$; complement $x + x′ = 1$; identity $1z = z$.\n**Step 3 — Computation:** $x + x′y = (x + x′)(x + y) = 1(x + y) = x + y$.\n**Step 4 — Cross-check:** rows: when $x = 1$ both sides $1$; when $x = 0$ both equal $y$.\n**Step 5 — Distractors:** $x$ drops a needed $y$-row; $x′y$ drops the $x$-rows; $1$ claims all rows true.\n**Step 6 — Conclude:** $x + y$, removing one literal."
      },
      // PYQ-pattern — consensus term removal (rephrased)
      {
        q: "The expression $xy + x′z + yz$ simplifies to $xy + x′z$. Why is $yz$ redundant?",
        options: ["By idempotence $y + y = y$", "$yz$ is covered by the consensus of the other two: when $y$ and $z$ are $1$, one of $xy$ or $x′z$ is already $1$", "By involution", "$yz$ is a maxterm"],
        answer: 1,
        explanation: "**Step 1 — Given data:** three product terms, middle variable $x$ complemented across the first two.\n**Step 2 — Rule:** consensus theorem: $xy + x′z + yz = xy + x′z$.\n**Step 3 — Reasoning:** if $y = 1$ and $z = 1$, then either $x = 1$ making $xy = 1$, or $x = 0$ making $x′z = 1$; in every $yz$-row another term already covers it.\n**Step 4 — Cross-check:** eight-row table agrees on all rows; the $101$ and $111$ rows confirm coverage.\n**Step 5 — Distractors:** idempotence concerns $y + y$; involution concerns double complement; maxterm concerns sums, not this product.\n**Step 6 — Conclude:** $yz$ adds no new $1$-rows."
      },
      // PYQ-pattern — DeMorgan complement (rephrased)
      {
        q: "By DeMorgan, $(xy′ + x′y)′$ equals which product-of-sums, before any further reduction?",
        options: ["$0$", "$xy + x′y′$", "$x + y$", "$(x′ + y)(x + y′)$"],
        answer: 3,
        explanation: "**Step 1 — Given data:** sum of two products, complemented as a whole.\n**Step 2 — Rule:** $(A + B)′ = A′B′$; $(CD)′ = C′ + D′$; $(t′)′ = t$.\n**Step 3 — Computation:** $(xy′)′ = x′ + y$; $(x′y)′ = x + y′$; AND them: $(x′ + y)(x + y′)$.\n**Step 4 — Cross-check:** expanding gives $xx′ + \\ldots$ terms that simplify, but the asked POS form is exactly this pair of sums.\n**Step 5 — Distractors:** second option mis-complements literals; $x + y$ is too large; $0$ claims unsatisfiable.\n**Step 6 — Conclude:** $(x′ + y)(x + y′)$."
      }
    ],
  },

  // ------------------------------------------------------------------ 2.4
  {
    sectionId: 'mano-ch2-s4',
    readingTime: 8,
    intro: 'A Boolean function is a mapping from $n$ binary variables to a single binary output, and it can be presented four equivalent ways: as an algebraic expression, as a truth table, as a Karnaugh map, and as a circuit of gates. This section moves among the first three, does the book’s simplification of $F_1 = x′y′z + x′yz + xy′$, and shows how DeMorgan complements a function into a new function — the tool that later converts SOP to POS.',
    objectives: [
      'Define Boolean functions and move between expression and truth table',
      'Simplify functions algebraically, term by term',
      'Complement a function using DeMorgan and simplify the result',
      'Explain the literal count of a function and why it measures circuit cost',
    ],
    concepts: [
      {
        term: 'Boolean function',
        kind: 'definition',
        statement: 'A **Boolean function** of $n$ variables is an expression formed from the variables with the operations ·, + and ′; for every assignment of the $2^{n}$ input combinations it evaluates to 0 or 1. Two functions are equal when their truth tables agree on every row.',
        detail: 'The function is the mathematical object; the expression is a description of it — and descriptions are many (an infinite number of expressions denote the same function, of which $2^{2^{n}}$ functions exist for $n$ variables). Simplification changes the description, never the function.',
      },
      {
        term: 'The four equivalent presentations',
        kind: 'method',
        statement: 'One function, four views: the **algebraic expression** (manipulable), the **truth table** (complete and unambiguous), the **Karnaugh map** (the truth table redrawn for adjacency, Chapter 3), and the **gate circuit** (the expression wired up). Any view can be derived from any other.',
        detail: 'The truth table is the referee: build it from the expression by row-wise evaluation, or from the word problem directly; derive the expression from the table by reading off the rows where the function is 1 (the minterms of Section 2.5); draw the map by writing the table into a Gray-coded grid; wire the circuit by following the expression’s operator tree.',
      },
      {
        term: 'Truth table ↔ expression, mechanically',
        kind: 'method',
        statement: 'From expression to table: evaluate on each of the $2^{n}$ rows. From table to expression: OR together one **minterm** (product containing every variable once, true on exactly one row) per row where the function is 1 — this always works, producing the canonical SOP of Section 2.5.',
        detail: 'Example: a 1 on rows 001 and 101 contributes $x′y′z + xy′z$, which the algebra then condenses. The reverse direction is unique — the table determines the function — but many expressions collapse onto the same table, which is why “simpler” is a property of descriptions, not of functions.',
      },
      {
        term: 'Complement of a function',
        kind: 'method',
        statement: 'The **complement** $F′$ is the function that is 0 wherever $F$ is 1 and vice versa. Complement the **entire expression** with DeMorgan — complement each term, swap + with ·, and complement every literal — then simplify.',
        detail: 'The mechanical recipe: complement each product term (turning it into a sum of complemented literals), AND those sums together, and simplify. $F′$ is exactly what Section 3.4 computes when it groups the 0-cells of a K-map, so this algebra is the engine of POS minimization.',
      },
      {
        term: 'Literal count as circuit cost',
        kind: 'insight',
        statement: 'The **cost** of a two-level realization is measured by its number of terms (gates) and total **literals** (gate inputs): each literal in the expression is one input wire on one AND gate (or OR gate, in POS form).',
        detail: 'Simplifying $F_1$ from three terms/six literals to two terms/four literals removes two input wires and one gate — at 1979 IC prices (and modern silicon area alike) that is the entire point of Chapter 3. The minimal description problem is genuinely hard in general; the map and tabulation methods are its practical solutions.',
      },
      {
        term: 'Algebraic simplification, honestly assessed',
        kind: 'insight',
        statement: 'Algebraic manipulation can produce any valid simplification but offers no procedure for finding the next profitable step — the map method (Chapter 3) mechanizes exactly this search, and the tabulation method (Section 3.5) turns it into an algorithm.',
        detail: 'Mano’s simplification examples read smoothly after the fact, but the same text warns that the algebraic approach lacks a terminating procedure for minimality — the reason the chapter that follows exists.',
      },
    ],
    examples: [
      {
        title: 'Simplifying F₁ = x′y′z + x′yz + xy′',
        problem: 'Simplify the book’s function $F_1 = x′y′z + x′yz + xy′$, tabulate its truth table, and count the literal savings.',
        steps: [
          { label: 'Step 1: Group the first two terms', text: '$x′y′z$ and $x′yz$ share $x′z$ and differ only in $y$: $x′y′z + x′yz = x′z(y′ + y) = x′z \\cdot 1 = x′z$, by complement and identity.' },
          { label: 'Step 2: Retain the third term', text: 'The remaining term $xy′$ shares no complemented-variable pattern with $x′z$, so the expression is now $F_1 = x′z + xy′$ — two terms, four literals, down from three terms and six literals.' },
          { label: 'Step 3: Build the truth table', text: 'Evaluate on the eight rows: $x′z$ is 1 at rows 001 and 011; $xy′$ is 1 at rows 100 and 101. The output column is $0, 1, 0, 1, 1, 1, 0, 0$ — exactly the rows where the original three-term expression is 1.' },
          { label: 'Step 4: Confirm equivalence on a boundary row', text: 'At $(0,1,1)$: original $= x′y′z + x′yz + xy′ = 0 + 1 + 0 = 1$; simplified $= x′z + xy′ = 1 + 0 = 1$. At $(1,1,0)$: original $= 0$; simplified $= 0 + 0 = 0$.' },
          { label: 'Step 5: Note the circuit saving', text: 'The AND-OR circuit drops from three AND gates (with 3, 3 and 2 inputs) and one 3-input OR to two 2-input ANDs and one 2-input OR — half the input pins.' },
        ],
        result: '$F_1 = x′z + xy′$ with truth-table column $0, 1, 0, 1, 1, 1, 0, 0$ — identical function, two fewer literals and one fewer gate.',
      },
      {
        title: 'Complementing a function with DeMorgan',
        problem: 'Find $F′$ for $F = AB′ + A′C$ (the two-term form of the chapter’s running example) by complementing the expression, and verify by comparing truth tables.',
        steps: [
          { label: 'Step 1: Complement the whole sum', text: 'By DeMorgan, $(AB′ + A′C)′ = (AB′)′ \\cdot (A′C)′$ — the OR of two products becomes the AND of two complemented products.' },
          { label: 'Step 2: Complement each product', text: 'Again by DeMorgan: $(AB′)′ = A′ + B$ and $(A′C)′ = A + C′$, giving $F′ = (A′ + B)(A + C′)$ — a POS form, as complements of SOP forms must be.' },
          { label: 'Step 3: Expand to SOP', text: 'Multiplying out: $(A′ + B)(A + C′) = A′A + A′C′ + AB + BC′ = A′C′ + AB + BC′$, since $A′A = 0$.' },
          { label: 'Step 4: Verify by rows', text: '$F$ is 1 at the four input combinations where $AB′$ or $A′C$ holds: $010, 011, 100, 110$. Check one complement row: at $(1,0,0)$, $F = AB′ = 1$, and $F′ = A′C′ + AB + BC′ = 0 + 0 + 0 = 0$. At $(0,1,0)$: $F = 0$, and $F′ = A′C′ = 1$.' },
          { label: 'Step 5: Interpret the two forms', text: '$F′$ inherits the structure: the complement of a sum-of-products is a product-of-sums, and its simplified SOP came from multiplying out and canceling the impossible $A′A$ term.' },
        ],
        result: '$F′ = (A′ + B)(A + C′) = A′C′ + AB + BC′$ — DeMorgan inverts the operator structure while the truth table inverts row by row.',
      },
    ],
    keyTakeaways: [
      'A Boolean function is a $2^{n}$-row input-output mapping; expressions, truth tables, K-maps and gate circuits are four presentations of it.',
      'Truth table to expression: OR one minterm per 1-row; expression to table: evaluate all $2^{n}$ rows.',
      'The book’s simplification: $x′y′z + x′yz + xy′ = x′z + xy′$ — pair terms differing in one variable and cancel that variable.',
      'Complementing a function = DeMorgan over the whole expression: $F = AB′ + A′C$ gives $F′ = (A′ + B)(A + C′) = A′C′ + AB + BC′$.',
      'Literals count gate inputs; fewer literals and terms mean a cheaper circuit — the motivation for all of Chapter 3.',
      'Algebraic simplification has no algorithm for the next move — hence K-maps (Section 3.1) and Quine–McCluskey (Section 3.5).',
    ],
    quiz: [
      {
        q: 'The simplified form of $x′y′z + x′yz + xy′$ is:',
        options: [`$x′z + xy′$`, `$x′y + xy′$`, `$z + y′$`, `$x′ + y′$`],
        answer: 0,
        explanation: 'The first two terms combine over the differing variable $y$ into $x′z$, leaving $x′z + xy′$. Option B mis-pairs the terms, and options C and D are too large — they output 1 on rows where the original is 0.',
      },
      {
        q: 'How many distinct Boolean functions of three variables exist?',
        options: ['8', '256', `$2^{2^{3}}$`, '16'],
        answer: 2,
        explanation: 'Each of the $2^{3} = 8$ rows can independently carry a 0 or a 1, giving $2^{8} = 256$ functions — the general count is $2^{2^{n}}$.',
      },
      {
        q: 'The complement of $F = AB′ + A′C$ simplifies to which SOP expression?',
        options: [`$AB + AC′$`, `$A′C′ + AB + BC′$`, `$A′B + BC′$`, `$AB′C′$`],
        answer: 1,
        explanation: 'DeMorgan gives $(A′ + B)(A + C′)$, which expands to $A′C′ + AB + BC′$ after the $A′A$ term vanishes. Option A forgets the $A′C′$ rows entirely.',
      },
      {
        q: 'Why does literal count matter in circuit design?',
        options: ['It determines the radix of the number system', 'Each literal is one gate input, so fewer literals mean smaller, cheaper circuits', 'It measures the propagation delay exactly', 'It counts the truth-table rows'],
        answer: 1,
        explanation: 'In a two-level AND-OR realization every product term is one AND gate whose input count equals its literals, and total literals is the standard first-order cost metric — delay relates to gate levels, not literal count.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.5
  {
    sectionId: 'mano-ch2-s5',
    readingTime: 10,
    intro: 'Canonical forms put every Boolean function into one of two standardized shapes built from minterms or maxterms. A minterm is a product that is true on exactly one input row; a maxterm is a sum that is false on exactly one. Every function is then a sum of minterms or, dually, a product of maxterms — and the two lists are complements of each other, which is the duality the section demonstrates end to end on $F(x, y, z) = \\Sigma m(1, 4, 5, 6, 7)$.',
    objectives: [
      'Define minterms and maxterms and tabulate all eight of each for three variables',
      'Express any function in canonical SOP ($\\Sigma m$) and canonical POS ($\\Pi M$) form',
      'Convert between the $\\Sigma m$ and $\\Pi M$ listings using the complement relationship',
      'Convert arbitrary SOP and POS expressions into standard (canonical) forms',
    ],
    concepts: [
      {
        term: 'Minterms',
        kind: 'definition',
        statement: 'A **minterm** $m_i$ of $n$ variables is a product containing each variable exactly once (complemented or not) that is 1 on exactly one input combination — the one whose bits spell the index $i$. For three variables: $m_1 = x′y′z$ (true only at 001), $m_4 = xy′z′$ (true only at 100), and so on.',
        detail: 'The full list: $m_0 = x′y′z′$, $m_1 = x′y′z$, $m_2 = x′yz′$, $m_3 = x′yz$, $m_4 = xy′z′$, $m_5 = xy′z$, $m_6 = xyz′$, $m_7 = xyz$. Each variable enters uncomplemented where the index bit is 1 and complemented where it is 0. Any function can be written as the OR of the minterms on whose rows it is 1.',
      },
      {
        term: 'Maxterms',
        kind: 'definition',
        statement: 'A **maxterm** $M_i$ of $n$ variables is a sum containing each variable exactly once that is 0 on exactly one input combination — the row spelling the index $i$. For three variables: $M_1 = x + y + z′$ (false only at 001), $M_4 = x′ + y + z$ (false only at 100).',
        detail: 'The full list: $M_0 = x + y + z$, $M_1 = x + y + z′$, $M_2 = x + y′ + z$, $M_3 = x + y′ + z′$, $M_4 = x′ + y + z$, $M_5 = x′ + y + z′$, $M_6 = x′ + y′ + z$, $M_7 = x′ + y′ + z′$. Note the inversion relative to minterms: a variable enters **uncomplemented** where its index bit is **0**. A function equals the AND of the maxterms for the rows where it is 0.',
      },
      {
        term: 'Minterm–maxterm duality',
        kind: 'law',
        statement: 'Each maxterm is the complement of the same-indexed minterm: $M_i = m_i′$, and $m_i = M_i′$. Consequently, if $F = \\Sigma m$ over an index set $K$, then over the complement set: $F = \\Pi M$ (maxterms of all rows where $F = 0$), and $F′ = \\Sigma m$ over the complement indices.',
        detail: 'The bookkeeping rule: **complementing a function swaps the index lists**: $\\Sigma m(1, 4)$ complements to $\\Pi M(0, 2, 3, 5, 6, 7)$, and dual statements follow. The shorthand $F = \\Sigma m(1, 4, 5, 6, 7)$ is compact circuit documentation — the truth table compressed to its 1-row indices.',
      },
      {
        term: 'Canonical and standard forms',
        kind: 'definition',
        statement: 'The **canonical SOP** is a sum of minterms (every product term contains all variables); the **canonical POS** is a product of maxterms. **Standard forms** relax this: a standard SOP (sum-of-products) allows product terms with missing variables, and a standard POS allows sum terms with missing variables.',
        detail: 'Every SOP expression can be expanded to canonical form by padding each product with the missing variables: $xy = xy(z + z′) = xyz + xyz′$ — splitting one term into the two minterms it covers. Dually, sum terms pad by multiplying with $(x + x′)$-style factors. The canonical form is unique per function — that is its value; the standard forms are what gates actually implement.',
      },
      {
        term: 'Expanding an SOP into minterms',
        kind: 'method',
        statement: 'To convert a product term missing variable $v$: replace the term $t$ by $t(v + v′)$ and distribute — the term becomes the pair of minterms covering both settings of $v$. Repeat until every term contains every variable, then delete duplicates.',
        detail: 'Example: $xy′$ of $(x, y, z)$ becomes $xy′(z + z′) = xy′z + xy′z′ = m_5 + m_4$. A term with $k$ missing variables expands into $2^{k}$ minterms — a reminder that short terms cover many rows.',
      },
      {
        term: 'Converting between SOP and POS',
        kind: 'method',
        statement: 'Given a standard SOP, expand to canonical SOP ($\\Sigma m$ list); the canonical POS is then the $\\Pi M$ list over the complementary indices; finally the POS can be simplified by multiplying out and canceling. The reverse route uses $F′$ and DeMorgan.',
        detail: 'This is the algebra that the map method performs visually in Section 3.4: grouping 1-cells yields SOP; grouping 0-cells yields (via complementation) POS. Having both forms lets the designer choose whichever uses fewer gates for the function at hand.',
      },
    ],
    examples: [
      {
        title: 'The full minterm and maxterm lists',
        problem: 'Tabulate the eight minterms and eight maxterms for three variables, and verify $M_2 = m_2′$.',
        steps: [
          { label: 'Step 1: Minterms by index bits', text: 'Write the index $i$ in binary as $xyz$; each variable appears uncomplemented where its bit is 1: $m_2$ has bits 010, so $m_2 = x′yz′$ — true only at $(0, 1, 0)$.' },
          { label: 'Step 2: Maxterms by index bits inverted', text: 'For maxterms the rule inverts: each variable appears uncomplemented where its bit is **0**: $M_2$ has bits 010, so $M_2 = x + y′ + z$ — false only at $(0, 1, 0)$.' },
          { label: 'Step 3: Verify the duality on M₂', text: 'At $(0,1,0)$: $m_2 = x′yz′ = 1 \\cdot 1 \\cdot 1 = 1$ and $M_2 = 0 + 0 + 0 = 0$. At any other row, say $(1, 1, 0)$: $m_2 = 0$ (x′ kills it) and $M_2 = 1$ (x = 1 satisfies the sum).' },
          { label: 'Step 4: State the general rule', text: 'On row $i$, $m_i = 1$ and all other minterms are 0; $M_i = 0$ and all other maxterms are 1; hence $M_i = m_i′$ on every row.' },
          { label: 'Step 5: Read the tables', text: 'Minterms: $x′y′z′, x′y′z, x′yz′, x′yz, xy′z′, xy′z, xyz′, xyz$; maxterms: $x+y+z, x+y+z′, x+y′+z, x+y′+z′, x′+y+z, x′+y+z′, x′+y′+z, x′+y′+z′$ — the two alphabets of canonical form.' },
        ],
        result: 'Eight minterms (true on single rows) and eight maxterms (false on single rows), with $M_i = m_i′$ verified at index 2: the complete canonical vocabulary of three variables.',
      },
      {
        title: 'One function, two canonical forms',
        problem: 'Express $F(x, y, z) = \\Sigma m(1, 4, 5, 6, 7)$ as minterms, simplify it, and write its canonical POS via the complement index set.',
        steps: [
          { label: 'Step 1: Expand the Σm list', text: '$F = m_1 + m_4 + m_5 + m_6 + m_7 = x′y′z + xy′z′ + xy′z + xyz′ + xyz$.' },
          { label: 'Step 2: Simplify by grouping', text: 'The four $m_4 \\ldots m_7$ terms combine into the single literal $x$ (all rows with $x = 1$): $xy′z′ + xy′z + xyz′ + xyz = x(y′z′ + y′z + yz′ + yz) = x$. So $F = x + x′y′z$.' },
          { label: 'Step 3: Simplify further', text: 'By Theorem 6a, $x + x′(y′z) = x + y′z$: $F = x + y′z$, two terms, three literals.' },
          { label: 'Step 4: Write the canonical POS', text: 'The 0-rows are indices $0, 2, 3$, so $F = \\Pi M(0, 2, 3) = M_0 M_2 M_3 = (x + y + z)(x + y′ + z)(x + y′ + z′)$.' },
          { label: 'Step 5: Verify the duals agree', text: 'Combine $M_2 M_3 = (x + y′ + z)(x + y′ + z′) = x + y′$ (the $z$-dependency cancels), so $F = (x + y + z)(x + y′)$; expanding: $(x + y′)(x + y + z) = x + y′(y + z) = x + y′z$ — the same simplified function from Step 3.' },
        ],
        result: '$\\Sigma m(1, 4, 5, 6, 7) = \\Pi M(0, 2, 3)$, both simplifying to $F = x + y′z$ — one function, both canonical forms, one simplified answer.',
      },
      {
        title: 'Converting a standard POS to canonical SOP',
        problem: 'Convert $F = (x + y′)(y + z)$ to canonical sum-of-minterms form.',
        steps: [
          { label: 'Step 1: Multiply out to standard SOP', text: 'By distributivity: $(x + y′)(y + z) = xy + xz + y′y + y′z = xy + xz + y′z$ (the $y′y$ term vanishes).' },
          { label: 'Step 2: Pad the xy term', text: '$xy$ misses $z$: $xy = xy(z + z′) = xyz + xyz′ = m_7 + m_6$.' },
          { label: 'Step 3: Pad the xz term', text: '$xz$ misses $y$: $xz = xz(y + y′) = xyz + xy′z = m_7 + m_5$.' },
          { label: 'Step 4: Pad the y′z term', text: '$y′z$ misses $x$: $y′z = y′z(x + x′) = xy′z + x′y′z = m_5 + m_1$.' },
          { label: 'Step 5: Union the minterm sets', text: 'Collecting and deleting the duplicate $m_7$ and $m_5$: $F = m_1 + m_5 + m_6 + m_7$, that is $F = \\Sigma m(1, 5, 6, 7) = x′y′z + xy′z + xyz′ + xyz$.' },
          { label: 'Step 6: Cross-check', text: 'Direct evaluation at $(0,0,1)$: $(x + y′)(y + z) = (0+1)(0+1) = 1$ — row 1 is indeed a 1-row, matching $m_1$; at $(0,0,0)$: $(1)(0) = 0$, and 0 is not in the list.' },
        ],
        result: '$(x + y′)(y + z) = \\Sigma m(1, 5, 6, 7)$ — the padding rule ($t \\to t(v + v′)$) converts any standard form to the unique canonical one.',
      },
    ],
    keyTakeaways: [
      'Minterm $m_i$: product true only on row $i$; maxterm $M_i$: sum false only on row $i$ — for $n$ variables there are $2^{n}$ of each.',
      'Index-encoding rules: minterms complement variables whose index bit is 0; maxterms complement variables whose index bit is 1; and $M_i = m_i′$.',
      '$F = \\Sigma m(K)$ means AND-ing nothing, OR-ing the minterms of the 1-rows; $F = \\Pi M(\\overline{K})$ lists the 0-rows instead — the two listings are complementary index sets.',
      'The demonstration pair: $\\Sigma m(1, 4, 5, 6, 7) = \\Pi M(0, 2, 3) = x + y′z$.',
      'Standard → canonical conversion pads missing variables: $xy = xyz + xyz′$, i.e. $t \\to t(v + v′)$, doubling the term per missing variable.',
      'Canonical forms are unique (a function’s fingerprint); standard forms are what circuits implement economically.',
    ],
    quiz: [
      {
        q: 'For three variables, the maxterm $M_5$ is:',
        options: [`$x′ + y + z′$`, `$x + y′ + z$`, `$xy′z$`, `$x′y′z′$`],
        answer: 0,
        explanation: 'Index 5 = bits 101: a maxterm complements each variable whose bit is 1, so $x′ + y + z′$, false only at row 101. Option B is $M_2$; options C and D are minterms.',
      },
      {
        q: 'If $F = \\Sigma m(1, 3, 5)$ over three variables, then $F$ also equals:',
        options: [`$\\Pi M(1, 3, 5)$`, `$\\Pi M(0, 2, 4, 6, 7)$`, `$\\Sigma m(0, 2, 4, 6, 7)$`, `$\\Pi M(0, 2, 4)$`],
        answer: 1,
        explanation: 'The POS lists the 0-rows — the complement of the 1-row set $\\{1, 3, 5\\}$ within $\\{0 \\ldots 7\\}$: $\\{0, 2, 4, 6, 7\\}$. Option C would be $F′$ written as a sum.',
      },
      {
        q: 'Expanding the product term $xz$ (variables $x, y, z$) into minterms gives:',
        options: [`$xz + xy$`, `$xyz + xy′z$`, `$xyz + xz′$`, `$m_1 + m_5$`],
        answer: 1,
        explanation: 'The missing variable $y$ is padded: $xz = xz(y + y′) = xyz + xy′z = m_7 + m_5$. Option D lists $m_5$ but pairs it with the wrong partner.',
      },
      {
        q: 'The canonical POS of the function whose 0-rows are 0, 2, 3 is:',
        options: [`$\\Sigma m(0, 2, 3)$`, `$\\Pi M(0, 2, 3)$`, `$\\Pi M(1, 4, 5, 6, 7)$`, `$\\Sigma m(1, 4, 5, 6, 7)$`],
        answer: 1,
        explanation: 'Zero-rows become maxterms directly: $F = M_0 M_2 M_3$. Options C and D describe the same function through its 1-rows — numerically valid but not the canonical POS asked for.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.6
  {
    sectionId: 'mano-ch2-s6',
    readingTime: 8,
    intro: 'AND, OR and NOT are only three of the sixteen possible functions of two binary variables. This section enumerates all sixteen — Mano’s Table 2-5 — and then studies the two that matter most in practice: exclusive-OR, whose parity properties make it the arithmetic and comparison operator, and its complement, the equivalence (XNOR) gate. Two of the sixteen, NAND and NOR, are functionally complete by themselves and lead Section 4.4.',
    objectives: [
      'Enumerate the sixteen functions of two variables and name the significant ones',
      'State the XOR truth table and its two defining identities $A \\oplus 0 = A$ and $A \\oplus 1 = A′$',
      'Prove the parity property of XOR over three or more inputs',
      'Use XNOR as an equality detector in one gate',
    ],
    concepts: [
      {
        term: 'The sixteen two-variable functions',
        kind: 'insight',
        statement: 'A two-variable function’s truth table has four output bits, so there are $2^{4} = 16$ distinct functions $F_0$ through $F_{15}$ — from the constants 0 and 1, through the projections $x$ and $y$ and their complements, to AND, OR and the derived NAND, NOR, XOR and XNOR.',
        detail: 'Mano’s table lists them with output columns for rows 00, 01, 10, 11: the constants $F_0 = 0$ and $F_{15} = 1$; the transfers $F_3 = x$, $F_5 = y$, $F_{10} = y′$, $F_{12} = x′$; the products $F_1 = xy$ and its variants $F_2 = xy′$, $F_4 = x′y$, $F_7 = x + y$; and the four “new” operators $F_6 = x \\oplus y$, $F_9 = (x \\oplus y)′$, $F_8 = (x + y)′$ (NOR), $F_{14} = (xy)′$ (NAND). With only two inputs, Boolean logic is a finite universe one can see whole.',
      },
      {
        term: 'Exclusive-OR (XOR)',
        kind: 'definition',
        statement: '**XOR**, written $x \\oplus y$, is 1 exactly when the inputs **differ**: the truth table outputs $0, 1, 1, 0$ on rows 00, 01, 10, 11, and algebraically $x \\oplus y = xy′ + x′y$.',
        detail: 'It is the inequality detector of Section 1.8. Its gate symbol is the OR symbol with a curved added input line. XOR is remarkable for how many jobs it does: sum bit of an adder, complementer, comparator, parity tree — each a Chapter 4 application.',
      },
      {
        term: 'XOR with a constant: the complementer identity',
        kind: 'law',
        statement: 'XOR obeys $A \\oplus 0 = A$ and $A \\oplus 1 = A′$: XOR-ing with 0 passes the signal through unchanged, while XOR-ing with 1 **inverts** it. A controlled inverter is one XOR gate with the control line on one input.',
        detail: 'Proof from the definition: $A \\oplus 0 = A \\cdot 1′ + A′ \\cdot 0 = A$; $A \\oplus 1 = A \\cdot 1 + A′ \\cdot 1$… more directly, $A \\oplus 1 = A1′ + A′1 = A \\cdot 0 + A′ = A′$. This identity is the mode switch of the adder-subtractor circuit (Section 4.2): the same XOR gates pass $B$ for addition and invert it for subtraction.',
      },
      {
        term: 'The parity property',
        kind: 'law',
        statement: 'The XOR of several bits is 1 exactly when an **odd number** of them are 1: $x \\oplus y \\oplus z = 1$ on rows 001, 010, 100, 111. More generally, XOR is the **odd-parity function** of its operands, and $(x \\oplus y) \\oplus z = x \\oplus (y \\oplus z)$ (associative), so a tree of XOR gates computes the parity of any number of bits.',
        detail: 'Pairing observation: any two 1s among the inputs cancel (their XOR is 0), so only the parity of the count survives — the algebraic echo of the absorption $xy + x′y = x \\oplus y$ having exactly the two-combinations structure. Parity generation and checking are Chapter 1’s error-detection scheme implemented as a XOR tree.',
      },
      {
        term: 'Equivalence (XNOR)',
        kind: 'definition',
        statement: '**XNOR**, the complement of XOR, outputs 1 exactly when the inputs are **equal**: $\\odot$ denotes $xy + x′y′$. One XNOR gate is a 1-bit **equality comparator**.',
        detail: 'Because $(x \\oplus y)′ = x \\odot y$, every XOR property dualizes: XNOR with 0 inverts ($A \\odot 0 = A′$), XNOR with 1 passes ($A \\odot 1 = A$), and a tree of XNORs detects all-bits-equal — the 4-bit comparator of Section 4.3 is built exactly this way, one XNOR per bit position.',
      },
      {
        term: 'Functional completeness note',
        kind: 'insight',
        statement: 'Two of the sixteen functions, $F_{14} = $ **NAND** and $F_8 = $ **NOR**, are each **functionally complete**: AND, OR and NOT can all be built from NAND alone (or NOR alone). In integrated circuits this is decisive — one repeatedly manufactured gate type suffices for any logic.',
        detail: 'NOT is NAND with both inputs tied together ($xx \\downarrow$… precisely, $(xx)′ = x′$); AND is NAND followed by that NOT; OR is NAND on both complemented inputs — all shown with two-level NAND diagrams in Section 4.4. Rosen’s Chapter 12 develops the same completeness result abstractly; Mano’s Chapter 2 grounds it in a real IC catalogue.',
      },
    ],
    examples: [
      {
        title: 'Using the complementer identity',
        problem: 'Use $A \\oplus 1 = A′$ and $A \\oplus 0 = A$ to describe a 4-bit controlled inverter, and verify the identity from the XOR definition.',
        steps: [
          { label: 'Step 1: Verify from the definition', text: '$A \\oplus 1 = A \\cdot 1′ + A′ \\cdot 1 = A \\cdot 0 + A′ = A′$. Similarly $A \\oplus 0 = A \\cdot 0′ + A′ \\cdot 0 = A$ — both identities follow in one line from $xy′ + x′y$.' },
          { label: 'Step 2: Wire the controlled inverter', text: 'Feed the control line $M$ into one input of four XOR gates; the data bits $B_3 B_2 B_1 B_0$ drive the other inputs.' },
          { label: 'Step 3: Mode M = 0', text: 'Each gate computes $B_i \\oplus 0 = B_i$ — the word passes through unchanged.' },
          { label: 'Step 4: Mode M = 1', text: 'Each gate computes $B_i \\oplus 1 = B_i′$ — the word arrives inverted, bit by bit.' },
          { label: 'Step 5: Connect to arithmetic', text: 'Feeding that inverted word into an adder whose carry-in is $M$ computes $A + B′ + 1 = A + (2^{n} - B)$ — i.e. $A - B$ in 2’s-complement form, exactly the adder-subtractor of Section 4.2.' },
        ],
        result: 'Four XOR gates plus a mode line form a programmable inverter: $M = 0$ passes, $M = 1$ complements — one identity, an entire arithmetic circuit.',
      },
      {
        title: 'Parity by XOR tree',
        problem: 'Compute the odd parity of $(x, y, z) = (1, 0, 1)$ two ways: by the truth-table property and by tree evaluation; then build the 3-bit parity truth table.',
        steps: [
          { label: 'Step 1: Count the ones', text: 'The inputs $1, 0, 1$ contain two 1s — an even count — so the odd-parity function value must be 0.' },
          { label: 'Step 2: Tree evaluation (left to right)', text: '$(x \\oplus y) \\oplus z = (1 \\oplus 0) \\oplus 1 = 1 \\oplus 1 = 0$ — agreeing with the count.' },
          { label: 'Step 3: Tree evaluation (right to left)', text: '$x \\oplus (y \\oplus z) = 1 \\oplus (0 \\oplus 1) = 1 \\oplus 1 = 0$ — associativity makes the tree shape irrelevant.' },
          { label: 'Step 4: Build the table', text: 'Over rows 000 through 111, $x \\oplus y \\oplus z$ outputs $0, 1, 1, 0, 1, 0, 0, 1$ — precisely the rows with odd 1-count: 001, 010, 100, 111.' },
          { label: 'Step 5: Read off the gate count', text: 'A 3-input parity generator is two XOR gates (a tree); an 8-bit one is seven — the standard parity hardware of Section 1.6’s error-detection scheme.' },
        ],
        result: 'Odd parity of $1, 0, 1$ is 0 (two 1s cancel); the full column $01101001$ confirms XOR = odd-parity function on three variables.',
      },
    ],
    keyTakeaways: [
      'Two variables admit exactly $2^{4} = 16$ functions, $F_0$–$F_{15}$: constants, transfers/complements, AND/OR and their variants, XOR, XNOR, NAND and NOR.',
      'XOR ($x \\oplus y = xy′ + x′y$) outputs $0, 1, 1, 0$ — the inequality detector.',
      'Complementer identities: $A \\oplus 0 = A$ and $A \\oplus 1 = A′$ — one XOR gate is a mode-controlled inverter.',
      'XOR of many bits is associative and equals the odd-parity function: $x \\oplus y \\oplus z = 1$ iff the 1-count is odd.',
      'XNOR ($xy + x′y′$) is the equality detector: one gate compares two bits; a tree compares words (the comparator of Section 4.3).',
      'NAND and NOR are each functionally complete — the economic reason behind all-NAND design in Section 4.4.',
    ],
    quiz: [
      {
        q: 'How many distinct Boolean functions of two variables exist, and why?',
        options: ['8, one per input row', '16, since the four-row output column has $2^{4}$ possible bit patterns', '4, one per operator', '32, counting duals'],
        answer: 1,
        explanation: 'A two-variable truth table is four output bits; any assignment of 0/1 to those bits is a different function, giving $2^{4} = 16$ — Mano’s Table 2-5 lists all of them.',
      },
      {
        q: 'The identity $A \\oplus 1 = A′$ is used in design to:',
        options: ['Double the signal frequency', 'Build a controlled inverter that complements a data word when the mode line is 1', 'Detect overflow', 'Generate even parity only'],
        answer: 1,
        explanation: 'XOR with a constant 1 complements each data bit: the same gate array passes the word (mode 0) or inverts it (mode 1), the heart of the adder-subtractor’s 2’s-complement path.',
      },
      {
        q: 'The value of $1 \\oplus 0 \\oplus 1 \\oplus 1$ is:',
        options: ['0', '1', '3', 'undefined because XOR is not associative'],
        answer: 1,
        explanation: 'Three 1s among the inputs make an odd count, so the odd-parity function outputs 1; XOR is associative, so the grouping is irrelevant.',
      },
      {
        q: 'A single XNOR gate functions as:',
        options: ['A half adder', 'A one-bit equality comparator', 'A parity generator for four bits', 'A NOT gate only'],
        answer: 1,
        explanation: 'XNOR outputs 1 exactly when both inputs match ($xy + x′y′$), so it compares one bit pair; word comparison cascades one XNOR per bit with an AND of the results.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.7
  {
    sectionId: 'mano-ch2-s7',
    readingTime: 9,
    intro: 'Boolean algebra is mathematics; a logic gate is the piece of hardware that evaluates it. This section defines gates as electronic circuits with the truth tables of Section 2.1, then introduces the engineering parameters that decide which real gate you can buy: fan-in and fan-out, noise margin, propagation delay — and the three IC families of the era, TTL, ECL and CMOS, with their totem-pole and tri-state output stages. Rosen’s Chapter 12 supplies the algebra’s theory; Horowitz and Hill’s Chapter 8 is the field guide to these same families in the flesh.',
    objectives: [
      'Define fan-in, fan-out, noise margin and propagation delay for logic gates',
      'Compare TTL, ECL and CMOS technologies on speed, power and density',
      'Explain totem-pole and tri-state output structures and when tri-state is essential',
      'Compute path delay and fan-out margins from component specifications',
    ],
    concepts: [
      {
        term: 'Logic gate',
        kind: 'definition',
        statement: 'A **logic gate** is an electronic circuit block that realizes one Boolean operation: it accepts one or more binary inputs as voltage levels and produces the truth-table output as a voltage level. AND, OR, NOT, NAND, NOR, XOR and XNOR are available as gates; the **positive logic convention** maps the higher voltage to 1.',
        detail: 'A gate is the algebra of Chapter 2 cast in silicon — the symbols in logic diagrams (distinctive shapes for AND, OR, and the bubble for inversion) correspond one-to-one with the operators. Everything from here to Chapter 12 is built by wiring gates and registers together.',
      },
      {
        term: 'Fan-in and fan-out',
        kind: 'definition',
        statement: '**Fan-in** is the number of inputs a gate provides (limited by technology); **fan-out** is the number of standard input loads a gate output can drive while still guaranteeing logic levels — for standard TTL, ten loads.',
        detail: 'Each driven input draws current and adds capacitance: exceed the fan-out and the output voltage sags (or rise times stretch) until 0s and 1s become ambiguous. High fan-in gates are rare and slow; designers cascade moderate gates instead, exactly as Chapter 4’s two-level circuits do.',
      },
      {
        term: 'Noise margin',
        kind: 'definition',
        statement: '**Noise margin** is the amount of spurious voltage a gate tolerates without misinterpreting an input: the guaranteed output levels lie outside the guaranteed input thresholds, and the gap between them — for TTL roughly $V_{OH} - V_{IH} = 3.4 - 2.0 = 1.4$ V in the high state and $V_{IL} - V_{OL} = 0.8 - 0.2 = 0.6$ V in the low state — is the safety cushion.',
        detail: 'A gate that outputs at least 3.4 V for 1 drives an input that needs at least 2.0 V: 1.4 V of noise can ride on the wire without error. The low-side margin is the tighter one in TTL — part of why its levels are asymmetric.',
      },
      {
        term: 'Propagation delay',
        kind: 'definition',
        statement: '**Propagation delay** $t_{pd}$ is the time from an input change to the resulting output change, measured at the 50% points; for a transition it differs slightly rising versus falling ($t_{PLH}$, $t_{PHL}$), and the average per gate for standard TTL is about 10 nanoseconds. Total path delay is the sum over the levels of logic the signal crosses.',
        detail: 'Delay limits clock speed: a 4-gate serial path at 10 ns per gate cannot resolve faster than about 40 ns, bounding the maximum useful clock below $1/(40\\,\\text{ns}) = 25$ MHz. The look-ahead carry of Section 4.2 exists precisely to flatten the tall serial carry chains that ripple adders create.',
      },
      {
        term: 'TTL, ECL and CMOS',
        kind: 'insight',
        statement: 'The three IC families of the book’s era: **TTL** (transistor-transistor logic) — the workhorse, moderate speed and power, totem-pole outputs; **ECL** (emitter-coupled logic) — the fastest, because its transistors never saturate, at the cost of high power dissipation and small logic swings; **CMOS** (complementary MOS) — very low static power, wide supply tolerance and the highest density, the family that eventually took everything.',
        detail: 'Mano’s comparison axes are speed, power, noise immunity and fan-out — and the trade-offs are real: ECL buys speed with current (tens of milliwatts per gate), TTL balances both, CMOS consumes power mainly while switching. Art of Electronics Chapter 8 is the modern, deep-dive version of exactly this material — logic levels, families, and the interfacing traps between them.',
      },
      {
        term: 'Totem-pole and tri-state outputs',
        kind: 'insight',
        statement: 'A **totem-pole** TTL output stacks two transistors so the gate actively drives both logic levels (fast edges, low impedance). A **tri-state** output adds a disable state: when de-asserted, both transistors turn off and the output floats (**high-impedance**, Hi-Z), letting many outputs share one wire as long as exactly one is enabled at a time.',
        detail: 'The tri-state buffer is what makes **buses** possible: the register-transfer bus of Chapter 8 wires many register outputs onto common lines, each behind a tri-state buffer enabled by its own control function. (Open-collector outputs with a pull-up resistor achieve wired-AND sharing too, at the price of speed.)',
      },
    ],
    examples: [
      {
        title: 'Delay budget through a multilevel path',
        problem: 'A signal must pass through a 4-level path of standard TTL gates ($t_{pd} = 10$ ns each). Compute the worst-case path delay and the ceiling it puts on the system clock.',
        steps: [
          { label: 'Step 1: Count the levels', text: 'The path crosses four gates in series — e.g. two AND levels, an OR, and a final inversion.' },
          { label: 'Step 2: Sum the delays', text: 'Worst case: $4 \\times 10\\,\\text{ns} = 40$ ns from any input change to the final output settling.' },
          { label: 'Step 3: Convert to a frequency bound', text: 'A new input cannot be applied until the output is valid: at most one settled result per 40 ns, i.e. $\\tfrac{1}{40\\,\\text{ns}} = 25$ MHz — and practical clocking leaves margin below that.' },
          { label: 'Step 4: Compare a flatter design', text: 'Restructuring to two levels of logic costs more gates but drops the path to 20 ns, doubling the ceiling — the speed/area trade that look-ahead carry (Section 4.2) makes explicitly.' },
        ],
        result: 'Four TTL levels = 40 ns worst-case = a 25 MHz ceiling; the number of gate levels, not the number of gates, sets the speed — the central lesson of delay budgeting.',
      },
      {
        title: 'Fan-out and noise margin arithmetic',
        problem: 'A TTL gate output drives eight identical gate inputs, each one standard load (fan-out capacity 10). From $V_{OH} = 3.4$ V, $V_{IH} = 2.0$ V, $V_{IL} = 0.8$ V and $V_{OL} = 0.2$ V, compute the fan-out margin and both noise margins.',
        steps: [
          { label: 'Step 1: Compare load to capacity', text: 'Eight loads against a capacity of ten: margin $10 - 8 = 2$ additional inputs may be connected before levels degrade.' },
          { label: 'Step 2: High-level noise margin', text: 'A driven input recognizes 1 above 2.0 V while the output guarantees 3.4 V: the margin is $3.4 - 2.0 = 1.4$ V of tolerated noise on a high wire.' },
          { label: 'Step 3: Low-level noise margin', text: 'The output guarantees at most 0.2 V for 0 while inputs still read 0 up to 0.8 V: the margin is $0.8 - 0.2 = 0.6$ V.' },
          { label: 'Step 4: Design guidance', text: 'The low state tolerates less than half the noise of the high state — so ground bounce and shared return paths (noise on the 0 side) are the first suspects in flaky TTL systems.' },
        ],
        result: 'Fan-out margin 2 loads; noise margins 1.4 V (high) and 0.6 V (low) — the numbers a datasheet actually guarantees, and the reason driving 12 loads from one TTL output is a design error.',
      },
    ],
    keyTakeaways: [
      'A gate is a Boolean operator in silicon; positive logic maps the higher voltage to 1.',
      'Fan-in limits a gate’s input count; fan-out (ten loads for standard TTL) limits how many inputs it may drive.',
      'Noise margin is the guaranteed voltage gap between output levels and input thresholds: 1.4 V high, 0.6 V low for TTL.',
      'Propagation delay (≈ 10 ns for TTL) sums over gate levels — four levels means 40 ns and a ~25 MHz ceiling.',
      'Families trade speed against power: ECL fastest and hottest (nonsaturating), TTL balanced, CMOS lowest power and ultimately dominant.',
      'Tri-state outputs add the Hi-Z state that lets many registers share one bus wire — the enabling trick of Chapter 8’s register transfers.',
    ],
    quiz: [
      {
        q: 'A standard TTL gate output driving eight standard loads, with fan-out specification 10, can safely drive:',
        options: ['12 more loads', '2 more loads', 'no loads at all', 'only CMOS inputs'],
        answer: 1,
        explanation: 'Fan-out 10 minus 8 present loads leaves 2 spare: each additional load draws current and capacitance that the output guarantee cannot cover beyond ten.',
      },
      {
        q: 'With $V_{OH} = 3.4$ V and $V_{IH} = 2.0$ V, the high-level noise margin is:',
        options: ['5.4 V', '1.4 V', '2.0 V', '0.6 V'],
        answer: 1,
        explanation: 'The margin is what the driving output guarantees beyond what the receiving input requires: $3.4 - 2.0 = 1.4$ V. The 0.6 V figure is the low-level margin for the given $V_{IL}, V_{OL}$.',
      },
      {
        q: 'ECL achieves the highest speed of the three classic families because:',
        options: ['It uses higher supply voltages', 'Its transistors are prevented from saturating, avoiding storage-time delays', 'It has no output transistors', 'It employs mechanical relays'],
        answer: 1,
        explanation: 'Emitter coupling keeps transistors in their linear region; saturated transistors (as in standard TTL) must first clear stored charge before switching — that storage time is what ECL trades power to eliminate.',
      },
      {
        q: 'The essential property of a tri-state output is:',
        options: ['It can output three voltage levels', 'It can be disabled into a high-impedance state so multiple outputs can share a bus', 'It triples the fan-out', 'It computes XOR electrically'],
        answer: 1,
        explanation: 'Besides 0 and 1, the disabled tri-state gate presents Hi-Z: it effectively disconnects, so bus lines can be driven by whichever register’s control function is currently asserted.',
      },
      {
        q: 'Propagation delay sets the clock ceiling of a multilevel system because:',
        options: ['Gates overheat at high frequency', 'Signals must finish settling through every level in the path before the next clock edge samples them', 'The power supply cannot follow', 'Fan-out decreases with frequency'],
        answer: 1,
        explanation: 'The clock period must exceed the worst-case path delay (sum over levels of $t_{pd}$); a 40 ns path caps useful clocking near 25 MHz regardless of how many gates sit in parallel at each level.',
      },
    ],
  },
]
