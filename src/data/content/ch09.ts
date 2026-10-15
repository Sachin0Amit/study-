import type { SectionContent } from '../library'

// ============================================================
// Chapter 9 — Relations (Rosen, 8th Edition)
// Master study content — sections 9.1 to 9.6
// ============================================================

export const ch9Content: SectionContent[] = [
  // ---------- 9.1 Relations and Their Properties ----------
  {
    sectionId: 'rosen-ch9-s1',
    readingTime: 12,
    intro: 'Equality, less-than, divisibility, friendship, is-a-substring-of — all are relations: sets of ordered pairs. This section treats relations as mathematical objects you can test, combine and compose, and identifies the four properties — reflexive, symmetric, antisymmetric, transitive — that organize everything that follows.',
    objectives: [
      'Represent relations as subsets of Cartesian products',
      'Test relations for reflexivity, symmetry, antisymmetry and transitivity',
      'Build new relations via complement, inverse and composition',
      'Relate powers Rⁿ to paths in a digraph',
      'Count binary relations on a finite set',
    ],
    concepts: [
      {
        term: 'Binary Relation',
        kind: 'definition',
        statement: 'A **binary relation** from A to B is a subset R of A × B; a relation **on A** is a subset of A × A = A². We write aRb for (a,b) ∈ R.',
        detail: 'On A = {1,2,3}: R = {(1,1),(1,2),(2,3)} is a relation; the divisibility relation on Z⁺ is {(a,b) : a | b}.',
      },
      {
        term: 'Reflexive',
        kind: 'definition',
        statement: 'A relation R on A is **reflexive** if (a,a) ∈ R for every a ∈ A: ∀a(aRa).',
        detail: 'Divides on Z⁺ is reflexive (a|a always). Strict less-than is not (a < a fails). Reflexivity demands a loop at every vertex of the digraph.',
      },
      {
        term: 'Symmetric',
        kind: 'definition',
        statement: 'A relation R on A is **symmetric** if (a,b) ∈ R implies (b,a) ∈ R: ∀a∀b(aRb → bRa).',
        detail: "'Has taken a class with' is symmetric. Divides on {1, ..., 10} is not: 2|4 but 4 does not divide 2.",
      },
      {
        term: 'Antisymmetric',
        kind: 'definition',
        statement: 'A relation R on A is **antisymmetric** if (a,b) ∈ R and (b,a) ∈ R imply a = b: ∀a∀b((aRb ∧ bRa) → a = b).',
        detail: 'Divides on Z⁺ is antisymmetric: a|b and b|a force a = b. Warning: antisymmetric is NOT the negation of symmetric — equality is both, and many relations are neither.',
      },
      {
        term: 'Transitive',
        kind: 'definition',
        statement: 'A relation R on A is **transitive** if (a,b) ∈ R and (b,c) ∈ R imply (a,c) ∈ R.',
        detail: 'Divides and < are transitive. Is-a-parent-of is not: your grandparent is not your parent. Each property is disproved by exhibiting a single counterexample.',
      },
      {
        term: 'Benchmark Relations',
        kind: 'insight',
        statement: 'Four benchmarks train the eye: **divides on Z⁺** (reflexive, antisymmetric, transitive), **congruence mod m** (reflexive, symmetric, transitive), **subset containment** (reflexive, antisymmetric, transitive), **< on Z** (transitive only).',
        detail: 'Memorize the profile of each benchmark and new relations become easy to classify — check each property by hunting for the one counterexample that would kill it.',
      },
      {
        term: 'Combining Relations',
        kind: 'definition',
        statement: 'For R from A to B: the **complement** is R̄ = (A×B) − R; the **inverse** is R⁻¹ = {(b,a) : (a,b) ∈ R}; and for S from B to C the **composition** is **S∘R = {(a,c) : ∃b((a,b) ∈ R ∧ (b,c) ∈ S)}**.',
        detail: 'Composition order matches function composition: apply R first, then S. If R relates students to courses and S relates courses to professors, then S∘R relates students to professors.',
      },
      {
        term: 'Powers of a Relation',
        kind: 'definition',
        statement: 'Rⁿ is the composition of R with itself n times (so R² = R∘R); **R is transitive if and only if Rⁿ ⊆ R for all n ≥ 1**.',
        detail: 'Membership (a,b) ∈ R² means a reaches b through an intermediate element — a two-step path. Transitivity makes every two-step path a one-step edge, which is exactly R² ⊆ R.',
      },
      {
        term: 'Counting Relations',
        kind: 'insight',
        statement: 'A relation on an n-element set is a subset of the n² ordered pairs, so there are $2^{n^{2}}$ relations; there are $2^{n^{2}-n}$ reflexive ones and $2^{n(n+1)/2}$ symmetric ones.',
        detail: 'On a 3-element set: 2⁹ = 512 relations in total, 64 reflexive (the 3 diagonal pairs are forced), 64 symmetric (chosen freely on the diagonal plus the 3 unordered pairs).',
      },
    ],
    examples: [
      {
        title: 'Testing the Four Properties',
        problem: 'Let R = {(1,1),(1,2),(2,1),(2,2),(3,3),(1,3),(3,1)} on A = {1,2,3}. Which properties does R have?',
        steps: [
          { label: 'Reflexive?', text: '(1,1), (2,2) and (3,3) are all present — yes.' },
          { label: 'Symmetric?', text: 'Every pair is matched by its reverse: (1,2) with (2,1), (1,3) with (3,1) — yes.' },
          { label: 'Antisymmetric?', text: '(1,2) and (2,1) are both present with 1 ≠ 2 — no.' },
          { label: 'Transitive?', text: '(2,1) ∈ R and (1,3) ∈ R require (2,3) ∈ R, which is missing — no.' },
        ],
        result: 'R is reflexive and symmetric, but neither antisymmetric nor transitive.',
      },
      {
        title: 'Divides on a Small Set',
        problem: 'Consider R = {(a,b) ∈ A² : a divides b} on A = {1,2,3,4,6,12}. List R and determine its properties.',
        steps: [
          { label: 'List the pairs', text: '(1,1),(1,2),(1,3),(1,4),(1,6),(1,12),(2,2),(2,4),(2,6),(2,12),(3,3),(3,6),(3,12),(4,4),(4,12),(6,6),(6,12),(12,12).' },
          { label: 'Reflexive?', text: 'Every element divides itself — yes.' },
          { label: 'Symmetric? Antisymmetric?', text: '2|4 but 4 does not divide 2 — not symmetric; whenever a|b and b|a the elements are equal — antisymmetric.' },
          { label: 'Transitive?', text: 'a|b and b|c force a|c — yes.' },
        ],
        result: 'Reflexive, antisymmetric and transitive — a partial ordering (Section 9.6 returns to it).',
      },
      {
        title: 'Composing and Inverting',
        problem: 'Let A = {1,2,3}, R = {(1,2),(2,3)} and S = {(2,1),(3,3)}. Compute R⁻¹, S∘R and R².',
        steps: [
          { label: 'Inverse', text: 'R⁻¹ = {(2,1),(3,2)} — reverse every pair.' },
          { label: 'Composition', text: 'S∘R pairs a with c when some b satisfies (a,b) ∈ R and (b,c) ∈ S: (1,2) with (2,1) gives (1,1); (2,3) with (3,3) gives (2,3). So S∘R = {(1,1),(2,3)}.' },
          { label: 'Power', text: 'R² = R∘R: (1,2) with (2,3) gives (1,3). So R² = {(1,3)} — the one two-step shortcut.' },
        ],
        result: 'R⁻¹ = {(2,1),(3,2)}, S∘R = {(1,1),(2,3)}, R² = {(1,3)}.',
      },
    ],
    keyTakeaways: [
      'A relation from A to B is a subset of A × B; a relation on A is a subset of A².',
      'Test the four properties — reflexive, symmetric, antisymmetric, transitive — with membership checks, and disprove with single counterexamples.',
      "Antisymmetric is not 'not symmetric': equality is both; divides is antisymmetric but not symmetric.",
      'Complement, inverse and composition build new relations; S∘R applies R first.',
      'R is transitive iff Rⁿ ⊆ R for every n; there are $2^{n^{2}}$ relations on an n-element set.',
    ],
    quiz: [
      {
        q: 'On A = {a,b,c}, the relation R = {(a,a),(b,b),(a,b),(b,a)} is:',
        options: ['reflexive, symmetric and transitive', 'reflexive and symmetric but not transitive', 'reflexive only', 'symmetric and transitive but not reflexive'],
        answer: 3,
        explanation: 'The pair (c,c) is missing, so R is not reflexive. Symmetry holds (every pair has its reverse) and transitivity holds ((a,b) with (b,a) forces (a,a) and (b,b), both present). Reflexivity does not follow from the other two properties.',
      },
      {
        q: 'The relation a divides b on the positive integers is:',
        options: ['reflexive and symmetric', 'reflexive, antisymmetric and transitive', 'symmetric and transitive', 'irreflexive and antisymmetric'],
        answer: 1,
        explanation: 'a|a always (reflexive); a|b and b|a force a = b (antisymmetric); a|b and b|c force a|c (transitive). It is far from symmetric: 3|6 but 6 does not divide 3.',
      },
      {
        q: 'If R = {(1,2),(2,3)} is a relation on {1,2,3}, what is R ∪ R⁻¹?',
        options: ['{(1,2),(2,3),(2,1),(3,2)}', '{(1,2),(2,3)}', '{(1,3),(3,1)}', '{(1,1),(2,2),(3,3)}'],
        answer: 0,
        explanation: 'R⁻¹ = {(2,1),(3,2)}, so the union collects all four ordered pairs — this is exactly the symmetric closure of R.',
      },
      {
        q: 'How many binary relations are there on a set with 3 elements?',
        options: ['9', '2³ = 8', '2⁹ = 512', '3! = 6'],
        answer: 2,
        explanation: 'A relation is any subset of the 3² = 9 ordered pairs, so there are 2⁹ = 512 possible relations.',
      },
    ],
  },

  // ---------- 9.2 n-ary Relations and Their Applications ----------
  {
    sectionId: 'rosen-ch9-s2',
    readingTime: 8,
    intro: 'Databases are the most valuable application of relations on the planet. An n-ary relation is just a table — a set of tuples — and the database operations of projection and join are mathematics performed at industrial scale by every SQL query ever run.',
    objectives: [
      'Define n-ary relations and their degree',
      'Identify primary and composite keys in a database table',
      'Compute projections of relations',
      'Join two relations on specified fields',
    ],
    concepts: [
      {
        term: 'n-ary Relation',
        kind: 'definition',
        statement: 'An **n-ary relation** on sets A₁, ..., Aₙ is a subset of A₁ × A₂ × ... × Aₙ; its elements are n-tuples (a₁, ..., aₙ), and n is the **degree** of the relation.',
        detail: 'A course-enrollment table of triples (student, course, term) is a 3-ary (ternary) relation; binary relations are the n = 2 special case.',
      },
      {
        term: 'Relational Database',
        kind: 'definition',
        statement: 'A **relational database** is a collection of n-ary relations (tables) whose columns are **attributes**, each attribute having a domain of allowed values.',
        detail: 'A table Students(ID, Name, Major, GPA) is a 4-ary relation; rows are tuples and columns are attributes. The name is literal: Codd modeled database tables exactly as mathematical relations.',
      },
      {
        term: 'Primary Key',
        kind: 'definition',
        statement: 'An attribute (or set of attributes) is a **primary key** for a database relation if no two distinct tuples agree on all of its values — it uniquely determines the tuple.',
        detail: 'Student ID works as a primary key; Name does not, since two students can share a name. Surrogate ID numbers exist purely to guarantee uniqueness.',
      },
      {
        term: 'Composite Key',
        kind: 'definition',
        statement: 'A **composite key** is a set of two or more attributes whose combined values are unique even though no single one is.',
        detail: 'In an Enrollments(StudentID, CourseID, Term) table, the pair (StudentID, CourseID) may repeat across terms, so the triple (StudentID, CourseID, Term) is needed as the key.',
      },
      {
        term: 'Projection',
        kind: 'method',
        statement: 'The **projection** $P_{i_1,i_2,\\ldots,i_m}(R)$ keeps only components i₁, ..., iₘ of each tuple (in that order) and discards duplicate tuples that result — it selects columns.',
        detail: "Projecting (Name, Major) from a Students table yields every (name, major) combination that occurs, with duplicates removed — like SQL's SELECT DISTINCT.",
      },
      {
        term: 'Join',
        kind: 'method',
        statement: 'The **join** Jₚ(R, S) of an m-ary relation R and an n-ary relation S (with p ≤ m and p ≤ n) is the (m + n − p)-ary relation of all tuples of R × S that agree on their first p components.',
        detail: 'Joining Flights(Flight#, Gate, Dest) with Gates(Gate, Time) on the shared gate field pairs each flight with its departure time — tuples are glued only when the gate matches.',
      },
      {
        term: 'Databases and SQL',
        kind: 'insight',
        statement: 'Relational algebra is what SQL implements: WHERE is selection, SELECT is projection, and JOIN is the join operation — set operations running at industrial scale.',
        detail: 'Indices built on keys make these operations fast; the mathematics guarantees they are well-defined constructions on relations.',
      },
    ],
    examples: [
      {
        title: 'Projecting a Table',
        problem: 'Let R = {(302, Ha, CS), (210, Li, CS), (101, Ha, MA), (415, Li, CS)} with attributes (ID, Name, Dept). Compute P₂,₃(R).',
        steps: [
          { label: 'Keep columns 2 and 3', text: 'Extract (Name, Dept) from each tuple: (Ha, CS), (Li, CS), (Ha, MA), (Li, CS).' },
          { label: 'Delete duplicates', text: '(Li, CS) arises twice, and a relation is a set.' },
        ],
        result: 'P₂,₃(R) = {(Ha, CS), (Li, CS), (Ha, MA)}.',
      },
      {
        title: 'Joining Flights to Gates',
        problem: 'Let R = {(302, A, Detroit), (210, B, Chicago)} with attributes (Flight#, Gate, Dest), and S = {(A, 8:15), (B, 8:30)} with attributes (Gate, Departure). Compute J₁(R, S).',
        steps: [
          { label: 'Shared component', text: 'Both relations lead with Gate, so p = 1.' },
          { label: 'Match tuples', text: 'Flight 302 uses gate A, matching (A, 8:15); flight 210 uses gate B, matching (B, 8:30).' },
          { label: 'Merge', text: 'Glue the tuples at the shared field, dropping the duplicated copy of it: (302, A, Detroit, 8:15) and (210, B, Chicago, 8:30).' },
        ],
        result: 'J₁(R,S) = {(302, A, Detroit, 8:15), (210, B, Chicago, 8:30)} — every flight with its departure time.',
      },
      {
        title: 'Finding Keys',
        problem: 'Consider Enrollments = {(1001, CS101, Fall), (1001, MA201, Fall), (1002, CS101, Fall), (1002, CS101, Spring)} with attributes (StudentID, CourseID, Term). Which subsets of attributes form a key?',
        steps: [
          { label: 'Test StudentID alone', text: 'Student 1001 appears in two tuples — not a key.' },
          { label: 'Test CourseID alone', text: 'CS101 appears in three tuples — not a key.' },
          { label: 'Test (StudentID, CourseID)', text: 'The pair (1002, CS101) occurs twice (Fall and Spring) — not a key.' },
          { label: 'Test all three attributes', text: 'All four triples are distinct — the full attribute set is a composite key.' },
        ],
        result: 'Only (StudentID, CourseID, Term) is a key; no proper subset works.',
      },
    ],
    keyTakeaways: [
      'An n-ary relation is a set of n-tuples — a database table; its degree is the number of attributes.',
      'A primary key uniquely determines tuples; composite keys combine attributes to achieve uniqueness.',
      'Projection selects columns (and collapses duplicates); join glues tables together on shared fields.',
      "SQL's SELECT and JOIN are relational algebra — projection and join — in production.",
    ],
    quiz: [
      {
        q: 'A relation is a subset of A₁ × A₂ × A₃ × A₄. What is its degree?',
        options: ['3', '4', 'Depends on the number of tuples', 'Cannot be determined'],
        answer: 1,
        explanation: 'The degree of an n-ary relation is n, the number of components (attributes) in each tuple — here 4, regardless of how many tuples it contains.',
      },
      {
        q: 'Which attribute is most likely to serve as a primary key for a Students table?',
        options: ['Name', 'GPA', 'StudentID', 'Major'],
        answer: 2,
        explanation: 'A primary key must be unique across tuples; names, majors and GPAs repeat, while ID numbers are designed to be unique.',
      },
      {
        q: 'In a table with attributes (Student, Course, Grade), the pair (Student, Course) fails as a key because one student took the same course in two different terms. What is the natural fix?',
        options: ['Drop the Student attribute', 'Use (Student, Course, Term) as a composite key', 'Keys are impossible in such tables', 'Use Grade as the key'],
        answer: 1,
        explanation: 'Extending the composite key with the discriminating attribute Term restores uniqueness — composite keys can be as long as needed.',
      },
      {
        q: 'The projection $P_{i_1,\\ldots,i_m}(R)$ is best described as:',
        options: ['selecting rows that satisfy a condition', 'selecting columns and removing duplicate tuples', 'joining two tables', 'sorting the tuples'],
        answer: 1,
        explanation: 'Projection keeps only the listed components of each tuple and, since relations are sets, collapses any duplicates that result.',
      },
    ],
  },

  // ---------- 9.3 Representing Relations ----------
  {
    sectionId: 'rosen-ch9-s3',
    readingTime: 10,
    intro: 'Computers cannot store ordered pairs directly — but they store matrices and graphs beautifully. This section shows how a zero-one matrix encodes any relation, how Boolean algebra on those matrices mirrors composition, and how digraphs make relational properties visible at a glance.',
    objectives: [
      'Represent relations with zero-one matrices',
      'Read reflexivity, symmetry and antisymmetry off the matrix',
      'Compute Boolean products and relate them to composition',
      'Draw and interpret digraphs of relations',
    ],
    concepts: [
      {
        term: 'Zero-One Matrix of a Relation',
        kind: 'definition',
        statement: 'If A = {a₁, ..., aₘ} and B = {b₁, ..., bₙ}, the **zero-one matrix of R ⊆ A × B** is the m×n matrix $M_R$ with **mᵢⱼ = 1 if (aᵢ, bⱼ) ∈ R** and 0 otherwise.',
        detail: 'Row i is the membership list of everything aᵢ relates to. A relation on an n-element set gets an n×n matrix.',
      },
      {
        term: 'Properties in the Matrix',
        kind: 'theorem',
        statement: 'R on A is **reflexive** iff the main diagonal of $M_R$ is all 1s; **symmetric** iff $M_R = M_R^{t}$ (the matrix equals its transpose); **antisymmetric** iff mᵢⱼmⱼᵢ = 0 for all i ≠ j (no mirrored pair of 1s off the diagonal).',
        detail: 'Transitivity has no simple one-matrix test — it needs powers of the matrix, which is the subject of the next section.',
      },
      {
        term: 'Join and Meet of Matrices',
        kind: 'definition',
        statement: 'The **join** M₁ ∨ M₂ and **meet** M₁ ∧ M₂ of zero-one matrices are their entrywise OR and AND.',
        detail: 'Union of relations corresponds to the join of their matrices, intersection to the meet — the Boolean arithmetic that supports composition.',
      },
      {
        term: 'Boolean Product',
        kind: 'definition',
        statement: 'The **Boolean product** M₁ ⊙ M₂ has (i,j)-entry **⋁ₖ(mᵢₖ ∧ mₖⱼ)** — ordinary matrix multiplication with AND replacing multiplication and OR replacing addition.',
        detail: 'Like arithmetic matrix multiplication, ⊙ is associative, which is exactly what makes matrix powers (and hence relation powers) meaningful.',
      },
      {
        term: 'Matrix of a Composition',
        kind: 'theorem',
        statement: 'The matrix of the composite satisfies $M_{S \\circ R} = M_R \\odot M_S$ — the order reverses: the matrix of the first-applied relation sits on the left.',
        detail: 'This mirrors the familiar reversal in function composition notation: to apply S∘R, apply R first, so its matrix is written first in the product.',
      },
      {
        term: 'Matrix Powers and Rⁿ',
        kind: 'method',
        statement: 'The matrix of Rⁿ is the n-fold Boolean product $M_R \\odot M_R \\odot \\cdots \\odot M_R$; its (i,j)-entry records whether a path of length n leads from aᵢ to aⱼ.',
        detail: 'Boolean squaring of the matrix is the computational route to reachability and the transitive closure in the next section.',
      },
      {
        term: 'Digraph of a Relation',
        kind: 'definition',
        statement: 'The **directed graph** of a relation R on A has vertex set A and a directed edge a → b for each (a,b) ∈ R; a self-loop marks (a,a).',
        detail: 'Reflexivity = a loop at every vertex; symmetry = every edge paired with its reverse; transitivity = every length-2 path already has its shortcut edge.',
      },
      {
        term: 'Choosing a Representation',
        kind: 'insight',
        statement: 'Matrices suit computation (bit operations, fixed-size storage); digraphs suit human insight (paths, components, structure).',
        detail: 'Databases store tables; graph algorithms use adjacency (zero-one) matrices — both are this same mathematics of relations.',
      },
    ],
    examples: [
      {
        title: 'Matrix to Properties',
        problem: 'Write the matrix of R = {(1,1),(1,2),(2,3),(3,1)} on {1,2,3} and read off its properties.',
        steps: [
          { label: 'Build the matrix', text: 'Rows and columns ordered 1, 2, 3: entries 1 at (1,1), (1,2), (2,3), (3,1): $M = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 1 & 0 & 0 \\end{bmatrix}$.' },
          { label: 'Reflexive?', text: 'The diagonal entries are 1, 0, 0 — a diagonal zero kills reflexivity.' },
          { label: 'Symmetric?', text: 'm₁₂ = 1 but m₂₁ = 0 — not symmetric.' },
          { label: 'Antisymmetric?', text: 'Check mirrored pairs: (1,2)/(2,1): 1,0; (1,3)/(3,1): 0,1; (2,3)/(3,2): 1,0 — never both 1, so antisymmetric.' },
          { label: 'Transitive?', text: '(3,1) and (1,2) force (3,2), which is absent — not transitive.' },
        ],
        result: 'R is antisymmetric only.',
      },
      {
        title: 'Boolean Product and Composition',
        problem: 'On A = {1,2}, let R = {(1,1),(1,2),(2,2)} and S = {(1,1),(2,1),(2,2)}. Verify $M_{S \\circ R} = M_R \\odot M_S$.',
        steps: [
          { label: 'Matrices', text: '$M_R = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ and $M_S = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix}$.' },
          { label: 'Boolean product', text: '(1,1): (1∧1)∨(1∧1) = 1; (1,2): (1∧0)∨(1∧1) = 1; (2,1): (0∧1)∨(1∧1) = 1; (2,2): (0∧0)∨(1∧1) = 1. So $M_R \\odot M_S = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$.' },
          { label: 'Direct composition', text: 'Chase pairs through R then S: (1,1)→(1,1); (1,2)→(1,1) and (1,2); (2,2)→(2,1) and (2,2). So S∘R = {(1,1),(1,2),(2,1),(2,2)}.' },
        ],
        result: 'Both agree: $M_{S \\circ R} = M_R \\odot M_S$ is the all-ones matrix — the composite is the universal relation.',
      },
      {
        title: 'A Digraph Sketch',
        problem: 'Describe the digraph of the divisibility relation on A = {1,2,3,6}.',
        steps: [
          { label: 'Edges', text: 'A loop on every vertex (a|a), plus 1→2, 1→3, 1→6, 2→6, 3→6.' },
          { label: 'What you see', text: 'Vertex 1 points at everything; 6 receives from everything; 2 and 3 are mutually unreachable from each other.' },
          { label: 'Structure', text: 'The transitive edge 1→6 (which factors through 2 or 3) is exactly what a Hasse diagram will later delete.' },
        ],
        result: 'A looped digraph whose edge pattern mirrors the factor lattice of 6.',
      },
    ],
    keyTakeaways: [
      'The zero-one matrix $M_R$ has mᵢⱼ = 1 exactly when (aᵢ, bⱼ) ∈ R.',
      'Reflexivity = 1s on the diagonal; symmetry = M = Mᵗ; antisymmetry = no mirrored 1s off the diagonal.',
      'Boolean product replaces multiplication with ∧ and addition with ∨; $M_{S \\circ R} = M_R \\odot M_S$ (order reverses).',
      'Digraphs make properties visible: loops for reflexivity, paired edges for symmetry, shortcut edges for transitivity.',
    ],
    quiz: [
      {
        q: 'A relation R on {1, ..., n} is reflexive exactly when its zero-one matrix satisfies:',
        options: ['all entries are 1', 'the main diagonal is all 1s', 'the matrix is symmetric', 'each row contains at least one 1'],
        answer: 1,
        explanation: 'Reflexivity requires (aᵢ, aᵢ) ∈ R for every i — precisely the diagonal entries mᵢᵢ.',
      },
      {
        q: 'R on a finite set is symmetric exactly when $M_R$ equals:',
        options: ['its transpose $M_R^{t}$', 'the all-ones matrix', `$M_R \\odot M_R$`, 'its complement'],
        answer: 0,
        explanation: 'Symmetry means mᵢⱼ = mⱼᵢ for all i, j — exactly the statement that the matrix equals its transpose (reflection across the main diagonal).',
      },
      {
        q: 'The Boolean product M₁ ⊙ M₂ has (i,j)-entry:',
        options: ['∑ₖ mᵢₖmₖⱼ summed over the integers', '⋁ₖ (mᵢₖ ∧ mₖⱼ) — an OR of ANDs', 'mᵢⱼ ∧ nᵢⱼ', 'mᵢⱼ ∨ nᵢⱼ'],
        answer: 1,
        explanation: 'Boolean product is matrix multiplication with arithmetic replaced by Boolean algebra: multiply with AND, add with OR.',
      },
      {
        q: 'For relations R (from A to B) and S (from B to C), the matrix of the composite satisfies:',
        options: [`$M_{S \\circ R} = M_S \\odot M_R$`, `$M_{S \\circ R} = M_R \\odot M_S$`, `$M_{S \\circ R} = M_S \\wedge M_R$`, `$M_{S \\circ R} = M_R \\vee M_S$`],
        answer: 1,
        explanation: 'The first-applied relation goes on the left: $M_{S \\circ R} = M_R \\odot M_S$ — the same reversal seen in function composition notation.',
      },
    ],
  },

  // ---------- 9.4 Closures of Relations ----------
  {
    sectionId: 'rosen-ch9-s4',
    readingTime: 12,
    intro: "A relation almost has the property you want — it just misses a few pairs. The closure of R is the smallest relation containing R that truly has the property: add loops to make it reflexive, reversed pairs to make it symmetric, and all shortcut paths to make it transitive — the last task needing Warshall's classic algorithm.",
    objectives: [
      'Define closures as minimal extensions of a relation',
      'Form reflexive and symmetric closures directly',
      'Compute transitive closures via matrix powers and paths',
      "Trace Warshall's algorithm and its Wₖ recurrence",
    ],
    concepts: [
      {
        term: 'Closure',
        kind: 'definition',
        statement: 'Given a property P, the **P-closure** of a relation R is the smallest relation S containing R that has property P.',
        detail: 'Closure = add exactly the pairs required and nothing more. Different properties give different closures, and a relation that already has P equals its own P-closure.',
      },
      {
        term: 'Reflexive Closure',
        kind: 'theorem',
        statement: 'The reflexive closure of R on A is **R ∪ Δ**, where Δ = {(a,a) : a ∈ A} is the diagonal (identity) relation.',
        detail: 'Add the missing loops — nothing else is needed, and any extra non-loop pair would violate minimality.',
      },
      {
        term: 'Symmetric Closure',
        kind: 'theorem',
        statement: 'The symmetric closure of R is **R ∪ R⁻¹** — add each missing reversed pair.',
        detail: 'If both (a,b) and (b,a) are already in R nothing changes; the union simply guarantees every edge comes with its mirror.',
      },
      {
        term: 'Paths in Relations',
        kind: 'theorem',
        statement: 'There is a **path of length n** from a to b in the digraph of R if and only if **(a,b) ∈ Rⁿ** (n-fold composition); a path of some length ≥ 1 exists iff (a,b) ∈ R⁺ = R ∪ R² ∪ R³ ∪ ..., the **connectivity relation**.',
        detail: 'Paths of length 1 are the edges themselves; length-2 paths correspond to R², and so on. A circuit is a path that begins and ends at the same vertex.',
      },
      {
        term: 'Transitive Closure',
        kind: 'theorem',
        statement: 'The transitive closure of R on an n-element set is **R⁺ = R ∪ R² ∪ ... ∪ Rⁿ** — every path longer than n repeats a vertex and can be shortened.',
        detail: 'Membership (a,b) ∈ R⁺ means a can reach b. Example: R = {(1,2),(2,3),(3,1)} on a 3-set has R² = {(1,3),(2,1),(3,2)}, R³ = {(1,1),(2,2),(3,3)}, and R⁺ = A × A — everything is reachable around the cycle.',
      },
      {
        term: 'Computing the Closure with Matrix Powers',
        kind: 'method',
        statement: 'Form the zero-one matrix M of R; compute the Boolean powers M, M², ..., Mⁿ; the closure matrix is their **join (entrywise OR)**. Naively this costs about n⁴ bit operations, improvable to O(n³ log n) by repeated squaring.',
        detail: 'The Boolean product is associative, so squaring yields M, M², M⁴, ... quickly — still not the best possible.',
      },
      {
        term: "Warshall's Algorithm",
        kind: 'method',
        statement: "Set W₀ = M and iterate for k = 1..n: **Wₖ[i,j] = Wₖ₋₁[i,j] ∨ (Wₖ₋₁[i,k] ∧ Wₖ₋₁[k,j])**. Then Wₙ is the matrix of the transitive closure, computed in Θ(n³).",
        detail: 'A 1 in Wₖ[i,j] means a path from vᵢ to vⱼ using only intermediate vertices from {v₁, ..., vₖ}: either the path avoids vₖ (first term) or passes through it (second term) — a dynamic-programming dichotomy.',
      },
      {
        term: 'In-Place Warshall',
        kind: 'insight',
        statement: "The update can be done in place — row k is OR-ed into exactly those rows having a 1 in column k — because Wₖ and Wₖ₋₁ differ only in entries that never revert.",
        detail: 'The same structural trick powers the Floyd–Warshall all-pairs shortest-path algorithm, with add/min replacing AND/OR.',
      },
    ],
    examples: [
      {
        title: 'Reflexive and Symmetric Closures',
        problem: 'For R = {(1,2),(2,3)} on A = {1,2,3}, find the reflexive closure and the symmetric closure.',
        steps: [
          { label: 'Reflexive closure', text: 'Union with Δ = {(1,1),(2,2),(3,3)} gives {(1,1),(2,2),(3,3),(1,2),(2,3)}.' },
          { label: 'Symmetric closure', text: 'R⁻¹ = {(2,1),(3,2)}, so R ∪ R⁻¹ = {(1,2),(2,1),(2,3),(3,2)}.' },
          { label: 'Verify minimality', text: 'Removing any added pair would destroy the property, and no other pairs are needed.' },
        ],
        result: 'The reflexive closure adds the 3 diagonal pairs; the symmetric closure adds the 2 reversed pairs.',
      },
      {
        title: 'Transitive Closure by Powers',
        problem: 'Find the transitive closure of R = {(1,2),(2,3)} on {1,2,3}.',
        steps: [
          { label: 'Compute R²', text: '(1,2) followed by (2,3) gives (1,3): R² = {(1,3)}.' },
          { label: 'Compute R³', text: 'No path of length 3 exists: R³ = ∅ (and all higher powers are empty too).' },
          { label: 'Union', text: 'R⁺ = R ∪ R² ∪ R³ = {(1,2),(2,3),(1,3)}.' },
          { label: 'Check transitivity', text: 'The only composability was (1,2) then (2,3), and its shortcut (1,3) is present.' },
        ],
        result: 'R⁺ = {(1,2),(2,3),(1,3)} — the shortcut (1,3) was the only missing pair.',
      },
      {
        title: "Warshall's Algorithm on a 3-Cycle",
        problem: "Trace Warshall's algorithm on M = [[0,1,0],[0,0,1],[1,0,0]] (the directed 3-cycle 1→2→3→1).",
        steps: [
          { label: 'W₀ = M', text: 'Edges 1→2, 2→3, 3→1.' },
          { label: 'k = 1 (allow vertex 1 as intermediate)', text: 'Only row 3 has a 1 in column 1, so row 3 gains row 1: W₁ = [[0,1,0],[0,0,1],[1,1,0]] — new edge 3→2.' },
          { label: 'k = 2 (allow vertex 2)', text: 'Rows 1 and 3 have a 1 in column 2, so both gain row 2 = (0,0,1): W₂ = [[0,1,1],[0,0,1],[1,1,1]] — new edge 1→3.' },
          { label: 'k = 3 (allow vertex 3)', text: 'Every row has a 1 in column 3, so every row gains row 3 = (1,1,1): W₃ = [[1,1,1],[1,1,1],[1,1,1]].' },
        ],
        result: 'W₃ is all 1s: from any vertex you can reach any other around the cycle.',
      },
    ],
    keyTakeaways: [
      'The P-closure of R is the smallest relation with property P that contains R.',
      'Reflexive closure: R ∪ Δ. Symmetric closure: R ∪ R⁻¹.',
      'Transitive closure: R⁺ = R ∪ R² ∪ ... ∪ Rⁿ — the reachability relation.',
      '(a,b) ∈ Rⁿ iff there is a path of length n from a to b in the digraph of R.',
      "Warshall's algorithm computes the transitive closure in Θ(n³) by allowing one new intermediate vertex per stage.",
    ],
    quiz: [
      {
        q: 'The reflexive closure of a relation R on A is:',
        options: ['R ∪ R⁻¹', 'R ∪ Δ where Δ is the diagonal relation', 'R ∩ Δ', 'R²'],
        answer: 1,
        explanation: 'Adding exactly the diagonal pairs (a,a) supplies every missing self-loop, and nothing else is required.',
      },
      {
        q: 'The symmetric closure of R is:',
        options: ['R ∪ R⁻¹', 'R ∩ R⁻¹', 'R ∪ Δ', 'the complement of R'],
        answer: 0,
        explanation: "Each pair's reverse is added; the intersection R ∩ R⁻¹ would instead keep only the pairs that already have their reverse.",
      },
      {
        q: 'What does (a,b) ∈ Rⁿ mean in the digraph of R?',
        options: ['a relates directly to b', 'there is a path of length n from a to b', 'there are n distinct paths from a to b', 'a = b'],
        answer: 1,
        explanation: 'Rⁿ is the n-fold composition; membership records an n-edge walk from a to b.',
      },
      {
        q: "In Warshall's algorithm, Wₖ[i,j] = 1 means there is a path from vᵢ to vⱼ using:",
        options: ['exactly k edges', 'intermediate vertices only from {v₁, ..., vₖ} (plus the endpoints)', 'at most k vertices in total', 'no repeated vertices'],
        answer: 1,
        explanation: 'The index k is the allowed set of intermediate vertices — the dynamic-programming state. After stage n all vertices are allowed, and Wₙ is the transitive closure.',
      },
    ],
  },

  // ---------- 9.5 Equivalence Relations ----------
  {
    sectionId: 'rosen-ch9-s5',
    readingTime: 11,
    intro: 'When is it legitimate to treat two different objects as the same? Equivalence relations — reflexive, symmetric and transitive — are the rigorous answer, and their magic is that they cut any set into disjoint classes: fractions, residue classes, isomorphism types and compressed data all live here.',
    objectives: [
      'Verify equivalence relations and compute equivalence classes',
      'Prove the two defining theorems about classes (equal or disjoint)',
      'Establish the bijection between equivalence relations and partitions',
      'Analyze congruence modulo m and its residue classes',
    ],
    concepts: [
      {
        term: 'Equivalence Relation',
        kind: 'definition',
        statement: 'A relation R on A is an **equivalence relation** if it is **reflexive, symmetric and transitive**; when aRb we call a and b equivalent.',
        detail: 'Congruence mod m, equal checksums, same birthday, same chemical valence, graph isomorphism — all are sameness tests.',
      },
      {
        term: 'Equivalence Class',
        kind: 'definition',
        statement: 'For a ∈ A, the **equivalence class of a** is **[a]ᵣ = {s ∈ A : sRa}** — the set of all elements related to a (equal to {s : aRs} by symmetry).',
        detail: 'Every element belongs to its own class by reflexivity, so classes are automatically nonempty and together cover A.',
      },
      {
        term: 'Equal or Disjoint',
        kind: 'theorem',
        statement: 'For any a, b ∈ A: either **[a] = [b] or [a] ∩ [b] = ∅**; moreover **aRb if and only if [a] = [b]**.',
        detail: 'Two classes that share a single element coincide entirely: symmetry and transitivity propagate the overlap to every member.',
      },
      {
        term: 'Partition',
        kind: 'definition',
        statement: 'A **partition** of A is a collection of nonempty, pairwise disjoint subsets whose union is A; the subsets are the **blocks** (cells) of the partition.',
        detail: '{{1,2},{3,5},{4}} partitions {1,2,3,4,5}. A partition answers one question of every element: which block do you belong to?',
      },
      {
        term: 'Classes Partition the Set',
        kind: 'theorem',
        statement: 'If R is an equivalence relation on A, its distinct equivalence classes **form a partition of A**; conversely, every partition P of A defines an equivalence relation by aRb iff a and b lie in the same block — and the two constructions are inverse to each other.',
        detail: 'Equivalence relations on A ↔ partitions of A: a genuine bijection. The number of equivalence relations on an n-element set is the Bell number Bₙ.',
      },
      {
        term: 'Congruence Modulo m',
        kind: 'definition',
        statement: '**a ≡ b (mod m)** iff m | (a − b); this is an equivalence relation on Z for every m ≥ 1.',
        detail: 'Reflexive: m divides a − a = 0. Symmetric: divisors of a − b divide b − a. Transitive: m | (a−b) and m | (b−c) give m | (a−c).',
      },
      {
        term: 'Residue Classes',
        kind: 'definition',
        statement: 'The equivalence classes of congruence mod m are **[0], [1], ..., [m−1]** where [r] = {r + km : k ∈ Z}; every integer lies in exactly one residue class, and [a] = [b] iff a ≡ b (mod m).',
        detail: 'For m = 4: [0] = {..., −8, −4, 0, 4, 8, ...} and [1] = {..., −7, −3, 1, 5, ...}. Arithmetic on Z mod m is arithmetic on these m classes.',
      },
      {
        term: 'Relations from Attributes',
        kind: 'insight',
        statement: 'Any function f : A → B defines the equivalence relation a ~ b iff f(a) = f(b); conversely every equivalence relation arises this way from its classes map.',
        detail: 'Same birthday = same value of the birthday function; same remainder = same value of the mod-m function. Sameness is always sameness of output.',
      },
    ],
    examples: [
      {
        title: 'Congruence Classes mod 4',
        problem: 'Describe the equivalence classes of a ≡ b (mod 4) on the integers.',
        steps: [
          { label: 'Verify equivalence', text: 'm = 4 divides a − a = 0 (reflexive); a − b swaps sign (symmetric); differences add (transitive).' },
          { label: 'List the classes', text: '[0] = {4k : k ∈ Z}, [1] = {4k+1}, [2] = {4k+2}, [3] = {4k+3}.' },
          { label: 'Observe the partition', text: 'Every integer lands in exactly one class according to its remainder on division by 4.' },
          { label: 'Sample memberships', text: '17 ∈ [1], −6 ∈ [2], 100 ∈ [0].' },
        ],
        result: 'Four residue classes partitioning Z exactly like the remainders 0–3.',
      },
      {
        title: 'From Partition to Relation',
        problem: 'The partition P = {{1,2},{3,5},{4}} of A = {1,2,3,4,5} defines a relation R: aRb iff a and b are in the same block. List R.',
        steps: [
          { label: 'Block {1,2}', text: 'All ordered pairs among {1,2}: (1,1),(1,2),(2,1),(2,2).' },
          { label: 'Block {3,5}', text: '(3,3),(3,5),(5,3),(5,5).' },
          { label: 'Block {4}', text: '(4,4).' },
        ],
        result: 'R is the union of the three blocks mini-universal relations: 9 pairs, an equivalence relation whose classes are exactly the blocks.',
      },
      {
        title: 'A Textbook Verification',
        problem: 'On {1,2,3,4} let R = {(a,b) : a − b is even}. Verify that R is an equivalence relation and find its classes.',
        steps: [
          { label: 'Reflexive', text: 'a − a = 0 is even, so (a,a) ∈ R for every a.' },
          { label: 'Symmetric', text: 'If a − b is even, then b − a = −(a − b) is even.' },
          { label: 'Transitive', text: 'a − b even and b − c even imply a − c = (a−b) + (b−c) is even.' },
          { label: 'Classes', text: '[1] = {a : a − 1 even} = {1,3} = [3]; [2] = {2,4} = [4].' },
        ],
        result: 'An equivalence relation with two classes: the odds {1,3} and the evens {2,4} — parity.',
      },
    ],
    keyTakeaways: [
      'Equivalence relations (reflexive + symmetric + transitive) are rigorous sameness.',
      'Every element lives in exactly one class [a]; classes are equal or disjoint.',
      'Equivalence relations and partitions determine each other — a genuine bijection.',
      'Congruence mod m partitions Z into exactly m residue classes [0], ..., [m−1].',
      'Any function f defines the relation same f-value; every equivalence relation arises this way.',
    ],
    quiz: [
      {
        q: 'Which property is NOT required of an equivalence relation?',
        options: ['reflexivity', 'symmetry', 'antisymmetry', 'transitivity'],
        answer: 2,
        explanation: 'Equivalence relations are reflexive, symmetric and transitive; antisymmetry belongs to partial orderings. Congruence mod 5 is symmetric but not antisymmetric: 1 ≡ 6 and 6 ≡ 1 with 1 ≠ 6.',
      },
      {
        q: 'How many distinct equivalence classes does congruence modulo 5 have on the integers?',
        options: ['Infinitely many', '5', '10', '1'],
        answer: 1,
        explanation: 'The classes are [0], [1], [2], [3], [4] — one per remainder; for example [5] = [0] and [7] = [2].',
      },
      {
        q: 'If [a] ∩ [b] ≠ ∅ for equivalence classes of R, then:',
        options: ['[a] ∪ [b] = A', '[a] = [b]', '[a] and [b] are both singletons', 'a and b are related to nothing'],
        answer: 1,
        explanation: 'Sharing one element s forces aRs and bRs, hence aRb by symmetry and transitivity, so the classes coincide — classes are equal or disjoint.',
      },
      {
        q: 'The number of different equivalence relations on a 3-element set equals the number of partitions of the set. How many are there?',
        options: ['3', '4', '5', '8'],
        answer: 2,
        explanation: 'The partitions are {{1,2,3}}, {{1,2},{3}}, {{1,3},{2}}, {{2,3},{1}} and {{1},{2},{3}} — five of them (the Bell number B₃ = 5).',
      },
    ],
  },

  // ---------- 9.6 Partial Orderings ----------
  {
    sectionId: 'rosen-ch9-s6',
    readingTime: 13,
    intro: 'Schedules, hierarchies and subset containment all share one abstract skeleton: the partial order. This section draws Hasse diagrams — the clean pictures of order — separates total from partial, tells maximal elements from greatest ones, and ends with the topological sort theorem that schedules any partial order into a linear plan.',
    objectives: [
      'Verify partial orderings and identify comparable elements',
      'Draw and read Hasse diagrams via the covering relation',
      'Distinguish total orders, well-orders, maximal and greatest elements',
      'Recognize lattices (lub and glb) in divisibility and subset posets',
      'Produce topological sorts of finite posets',
    ],
    concepts: [
      {
        term: 'Partial Ordering and Poset',
        kind: 'definition',
        statement: 'A relation ⪯ on S is a **partial ordering** if it is reflexive, antisymmetric and transitive; the pair **(S, ⪯) is a poset** (partially ordered set). Elements a and b are **comparable** if a ⪯ b or b ⪯ a.',
        detail: 'Benchmark posets: (Z⁺, |) divisibility, (P(S), ⊆) containment, (Z, ≤) the integers, strings under lexicographic order. Partial because some pairs may be incomparable.',
      },
      {
        term: 'Total Order',
        kind: 'definition',
        statement: 'A poset in which every pair of elements is comparable is a **total order** (linear order); a totally ordered set is called a chain.',
        detail: '(Z, ≤) is total; (P({a,b,c}), ⊆) is not — {a} and {b,c} are incomparable subsets.',
      },
      {
        term: 'Well-Ordering',
        kind: 'definition',
        statement: 'A total order is **well-ordered** if every nonempty subset has a least element.',
        detail: '(Z⁺, ≤) is well-ordered; (Z, ≤) is not, since Z itself has no least element. Well-ordering is the engine behind mathematical induction.',
      },
      {
        term: 'The Covering Relation',
        kind: 'definition',
        statement: 'a is **covered by** b, written a ≺ b, if a < b and there is no c with a < c < b — an immediate step in the order.',
        detail: 'In divisibility on divisors of 24, 4 is covered by 12 (nothing strictly between them in the set), but 1 is not covered by 24 because 2, 3, 4, 6 and 12 intervene.',
      },
      {
        term: 'Hasse Diagram',
        kind: 'method',
        statement: 'The **Hasse diagram** of a poset has one vertex per element, an edge only between covers, and every edge drawn upward from smaller to larger; loops, arrowheads and transitive edges are omitted.',
        detail: 'To build one from the digraph: delete loops, delete every edge implied by transitivity, delete arrowheads, and orient the drawing so smaller elements sit lower. The order is read as upward reachability.',
      },
      {
        term: 'Lexicographic Order',
        kind: 'definition',
        statement: 'Given posets (A₁, ⪯₁) and (A₂, ⪯₂), the **lexicographic order** on A₁ × A₂ sets (a₁,a₂) ⪯ (b₁,b₂) if a₁ ≺₁ b₁, or a₁ = b₁ and a₂ ⪯₂ b₂; iterating gives dictionary order on strings.',
        detail: 'Dictionary order assumes a fixed alphabet and places shorter prefixes first: aardvark before ab. It is a standard way to build total orders on products.',
      },
      {
        term: 'Maximal, Minimal, Greatest, Least',
        kind: 'definition',
        statement: 'a is **maximal** if no b ≠ a has a ≺ b, and **minimal** if no b ≠ a has b ≺ a; a is the **greatest** element if b ⪯ a for every b, and the **least** if a ⪯ b for every b.',
        detail: 'A greatest element is unique when it exists (antisymmetry), and every greatest element is maximal — but maximal elements can be many. In divisibility on {2,3,4}, both 3 and 4 are maximal, yet neither is greatest.',
      },
      {
        term: 'Lattice',
        kind: 'definition',
        statement: 'A poset is a **lattice** if every pair {a,b} has a **least upper bound lub(a,b)** (the join) and a **greatest lower bound glb(a,b)** (the meet).',
        detail: '(Z⁺, |) is a lattice: lub = lcm and glb = gcd. (P(S), ⊆) is a lattice: lub = ∪ and glb = ∩. But divisibility on {2,3,4,6} is not: glb(2,3) would have to be 1, which is not in the set.',
      },
      {
        term: 'Topological Sort',
        kind: 'theorem',
        statement: 'Every finite poset has a **compatible total order** — a topological sort — produced by repeatedly deleting (and listing) a minimal element among those remaining.',
        detail: 'Scheduling with prerequisites: elements are tasks, the order gives constraints, and the algorithm outputs a valid linear plan. It never gets stuck, because every finite nonempty poset has a minimal element.',
      },
    ],
    examples: [
      {
        title: 'Divisibility Hasse Diagram',
        problem: 'Draw the Hasse diagram of the poset (A, |) with A = {1,2,3,4,6,8,12,24}.',
        steps: [
          { label: 'Place by levels', text: '1 at the bottom; then 2 and 3; then 4 and 6; then 8 and 12; then 24 at the top.' },
          { label: 'Keep only covers', text: 'Edges: 1–2, 1–3, 2–4, 2–6, 3–6, 4–8, 4–12, 6–12, 8–24, 12–24.' },
          { label: 'Delete transitive edges', text: 'Edges like 1–24, 2–24, 1–4 and 1–6 vanish — they follow by climbing.' },
          { label: 'Read the order', text: 'a | b exactly when b is reachable from a by climbing upward.' },
        ],
        result: 'A pyramid with 24 greatest and 1 least; note lub(4,6) = 12 and glb(8,12) = 4 — this poset is a lattice.',
      },
      {
        title: 'Is It a Lattice?',
        problem: 'Determine whether the divisibility poset on A = {1,2,3,6} and on B = {2,3,4,6} are lattices.',
        steps: [
          { label: 'Poset A', text: 'lub(2,3) = lcm(2,3) = 6 ∈ A and glb(2,3) = gcd(2,3) = 1 ∈ A; every pair has both bounds — a lattice.' },
          { label: 'Poset B', text: 'lub(2,3) = 6 ∈ B is fine, but glb(2,3) = 1 ∉ B.' },
          { label: 'Conclusion for B', text: 'The pair {2,3} has no greatest lower bound — not a lattice.' },
        ],
        result: 'A is the classic diamond lattice; B is not a lattice — lattice-ness depends on the ground set, not just the relation.',
      },
      {
        title: 'Topological Sort',
        problem: 'A project has tasks with prerequisites: B requires A; C requires A; D requires B and C; E requires D. Produce a valid schedule.',
        steps: [
          { label: 'Model', text: 'Poset on {A,B,C,D,E} with A ≺ B, A ≺ C, B ≺ D, C ≺ D, D ≺ E.' },
          { label: 'First minimal element', text: 'Only A is minimal — schedule A first.' },
          { label: 'Continue', text: 'With A gone, B and C are minimal — pick B (a choice!).' },
          { label: 'Finish', text: 'Then C, then D, then E.' },
        ],
        result: 'A → B → C → D → E is a compatible total order; A → C → B → D → E is equally valid — topological sorts need not be unique.',
      },
    ],
    keyTakeaways: [
      'A poset is reflexive + antisymmetric + transitive; incomparable pairs are what make the order partial.',
      'Hasse diagrams draw only covering relations, upward: loops, arrowheads and transitive edges are deleted.',
      'Total orders compare every pair; well-orders add that every nonempty subset has a least element.',
      'Greatest/least elements are unique when they exist; maximal/minimal elements need not be.',
      'Lattices: every pair has a lub and a glb — divisibility gives lcm/gcd, subsets give ∪/∩.',
      'Every finite poset extends to a compatible total order — a topological sort.',
    ],
    quiz: [
      {
        q: 'Which relation on Z⁺ is a partial ordering?',
        options: ['a + b is even', 'a divides b', 'a ≡ b (mod 5)', 'a·b > 0'],
        answer: 1,
        explanation: 'Divides is reflexive (a|a), antisymmetric (a|b and b|a force a = b) and transitive. Congruence mod 5 fails antisymmetry; the others fail reflexivity or more.',
      },
      {
        q: 'In the Hasse diagram of divisibility on {1,2,3,6}, which pair of elements is incomparable?',
        options: ['1 and 2', '2 and 3', '2 and 6', '1 and 6'],
        answer: 1,
        explanation: '2 does not divide 3 and 3 does not divide 2 — the incomparable pairs are exactly those with no upward path between them.',
      },
      {
        q: 'A poset can have several maximal elements. How many greatest elements can it have?',
        options: ['Several, if they are incomparable', 'At most one', 'Exactly as many as maximal elements', 'None, unless it is a lattice'],
        answer: 1,
        explanation: 'If g₁ and g₂ are both greatest, then g₁ ⪯ g₂ and g₂ ⪯ g₁, so antisymmetry forces g₁ = g₂. Maximal elements need not be comparable; a greatest element dominates everything.',
      },
      {
        q: 'Topological sorting of a finite poset produces:',
        options: ['a Hasse diagram', 'a partition into equivalence classes', 'a total order compatible with the partial order', 'the transitive closure'],
        answer: 2,
        explanation: 'The sort linearizes the poset: whenever a ≺ b, a comes before b in the output list — exactly what scheduling with prerequisites requires.',
      },
      // PYQ-pattern — maximal and minimal elements of a divisibility poset (rephrased, values changed)
      {
        q: 'In the poset $(\\{2, 3, 4, 6, 12\\}, \\mid)$ under divisibility, the maximal and minimal elements are:',
        options: ['Maximal: $12$; minimal: $2, 3$', 'Maximal: $4, 6$; minimal: $2$', 'Maximal: $12$; minimal: $12$', 'Maximal: $2, 3$; minimal: $12$'],
        answer: 0,
        explanation: 'Step 1: Restate maximal as nothing strictly above it in the set and minimal as nothing strictly below it. Step 2: Recall the key test $a \\prec b$ exactly when $a \\mid b$ with $a \\neq b$. Step 3: Check tops as $2 \\mid 12$, $3 \\mid 12$, $4 \\mid 12$ and $6 \\mid 12$, so every element divides $12$ and $12$ is the unique maximal element. Step 4: Check bottoms as no listed element strictly divides $2$ or $3$, while $2 \\mid 4$ and $2 \\mid 6$, so $2$ and $3$ are minimal and $4, 6$ are not. Step 5: The distractors swap the two notions, promote $4, 6$ which sit below $12$, or claim a singleton can be both maximal and minimal here. Step 6: Hence the maximal element is $12$ and the minimal elements are $2$ and $3$.'
      },
    ],
  },
]
