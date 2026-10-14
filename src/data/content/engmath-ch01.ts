import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 1: Matrices, Determinants and Linear Systems
// Sections 1.1 – 1.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'engmath-ch1-s1',
    readingTime: 8,
    intro: 'Matrices store linear information in rectangular arrays, and almost every later topic in this volume leans on fluent matrix algebra. This section fixes the vocabulary of special matrix types and the rules for addition, multiplication, transpose and trace. The non-commutativity of multiplication and the shape-compatibility check cause more slips than any other pair of facts in the chapter.',
    objectives: [
      'Classify symmetric, skew-symmetric, orthogonal, idempotent, triangular and diagonal matrices from defining identities',
      'Multiply conformable matrices and explain why order matters with a concrete counterexample',
      'Apply transpose, trace and identity rules to simplify matrix expressions'
    ],
    concepts: [
      {
        term: 'Symmetric and skew-symmetric matrices',
        kind: 'definition',
        statement: 'A square matrix is **symmetric** when it equals its own transpose, `$A^T = A$`, so entry `$a_{ij}$` mirrors `$a_{ji}$` for every pair, while it is **skew-symmetric** when `$A^T = -A$`, which forces every diagonal entry to vanish since `$a_{ii} = -a_{ii}$`. The `transpose` operation reflects across the main diagonal, and every square matrix splits uniquely into a symmetric plus a skew-symmetric part via `$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$`. Any sum of the form `$B + B^T$` is symmetric and any difference `$B - B^T$` is skew-symmetric, a construction used constantly in later proofs.',
        detail: 'Diagonal entries of a skew-symmetric matrix are always zero, and `$A^T$` applied twice returns `$A$`, so symmetry can be tested in one glance at off-diagonal pairs.'
      },
      {
        term: 'Orthogonal, idempotent and triangular families',
        kind: 'definition',
        statement: 'An **orthogonal** matrix has orthonormal columns, equivalently `$Q^T Q = I$` so that `$Q^T = Q^{-1}$` and length is preserved under `$x \\mapsto Qx$`, while an **idempotent** matrix obeys `$A^2 = A$` and an **involutory** matrix obeys `$A^2 = I$`. The `diag` family contains diagonal matrices with nonzero entries allowed only on the main diagonal, upper-triangular matrices with zeros below it, and lower-triangular matrices with zeros above it. Identity `$I$`, zero `$O$`, and scalar matrices `$cI$` sit at the intersection of these families and act as the neutral elements of multiplication and addition.',
        detail: 'Products of upper-triangular matrices stay upper-triangular with multiplied diagonal entries, so triangular determinants and eigenvalues are read directly off the diagonal.'
      },
      {
        term: 'Multiplication needs conformable shapes and does not commute',
        kind: 'law',
        statement: 'The product `$AB$` exists only when the column count of `$A$` equals the row count of `$B$`, and the **order matters**: in general `$AB \\ne BA$`, and one side may exist while the other does not. The `matmul` entry rule is `$c_{ij} = \\sum_{k} a_{ik} b_{kj}$`, a dot product of row `$i$` of `$A$` with column `$j$` of `$B$`. Scalar multiplication `$cA$` scales every entry and does commute with everything, which is why scalars can be pulled through products but matrices cannot be reordered.',
        detail: 'Before multiplying, write the shapes as `$(m \\times n)(n \\times p) = m \\times p$`; a mismatch of inner dimensions means the product is undefined, not zero.'
      },
      {
        term: 'Transpose, inverse and trace algebra',
        kind: 'theorem',
        statement: 'Reversal governs products: **transpose reverses order** via `$(AB)^T = B^T A^T$` and, when inverses exist, `$(AB)^{-1} = B^{-1} A^{-1}$`, while sums stay in order with `$(A + B)^T = A^T + B^T$`. The **trace** sums diagonal entries as `$\\mathrm{tr}(A) = \\sum_{i} a_{ii}$` and obeys the cyclic rule `$\\mathrm{tr}(AB) = \\mathrm{tr}(BA)$` even though `$AB \\ne BA$`. The `trace` is linear with `$\\mathrm{tr}(A + B) = \\mathrm{tr}(A) + \\mathrm{tr}(B)$` and `$\\mathrm{tr}(cA) = c\\,\\mathrm{tr}(A)$`, facts used to compute eigenvalue sums without solving any polynomial.',
        detail: 'Cyclicity extends to three factors as `$\\mathrm{tr}(ABC) = \\mathrm{tr}(CAB)$`, but arbitrary permutations are not permitted, only cyclic rotations.'
      },
      {
        term: 'Shape-first reading habit',
        kind: 'insight',
        statement: 'Experts read the **shapes first and the entries second**: the shape line `$(m \\times n)$` decides existence, output size, and which identities even type-check, while entry arithmetic comes only after. The `identity` `$I_n$` must carry the correct size for each product, since `$AI_m = A$` requires `$m$` to match the column count of `$A$`. Most algebra slips are shape slips, such as adding matrices of different sizes or writing `$A^2$` for a non-square `$A$`.',
        detail: 'Powers `$A^k$`, polynomials `$p(A)$`, and exponentials `$e^A$` are defined only for square matrices, because only squares stay conformable under self-multiplication.'
      }
    ],
    examples: [
      {
        title: 'Multiply two small matrices and expose non-commutativity',
        problem: 'Let $$A = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix} \\qquad B = \\begin{bmatrix} 0 & 1 \\\\ 1 & 1 \\end{bmatrix}$$ Compute `$AB$` and `$BA$`, and confirm they differ.',
        steps: [
          { label: 'Step 1: Check shapes', text: '```text\nA is 2x2, B is 2x2 -> both products AB and BA exist, each 2x2\nc(ij) = row i of A dot column j of B\n```\nBoth matrices are square of the same size, so shape permits multiplication in either order, and the outputs are both `$2 \\times 2$`.' },
          { label: 'Step 2: Compute AB entry by entry', text: 'Row one of `$A$` dotted with columns of `$B$` gives `$c_{11} = 1 \\cdot 0 + 2 \\cdot 1 = 2$`, `$c_{12} = 1 \\cdot 1 + 2 \\cdot 1 = 3$`; row two gives `$c_{21} = 0 \\cdot 0 + 1 \\cdot 1 = 1$` and `$c_{22} = 0 \\cdot 1 + 1 \\cdot 1 = 1$`. Hence $$AB = \\begin{bmatrix} 2 & 3 \\\\ 1 & 1 \\end{bmatrix}$$ using the `matmul` row-dot-column rule.' },
          { label: 'Step 3: Compute BA and compare', text: 'Reversing the order gives `$d_{11} = 0 \\cdot 1 + 1 \\cdot 0 = 0$`, `$d_{12} = 0 \\cdot 2 + 1 \\cdot 1 = 1$`, `$d_{21} = 1 \\cdot 1 + 1 \\cdot 0 = 1$`, `$d_{22} = 1 \\cdot 2 + 1 \\cdot 1 = 3$`, so $$BA = \\begin{bmatrix} 0 & 1 \\\\ 1 & 3 \\end{bmatrix} \\ne AB$$ The two products share the trace `$3$` but differ in every off-diagonal story, a clean witness that order matters.' }
        ],
        result: '$$AB = \\begin{bmatrix} 2 & 3 \\\\ 1 & 1 \\end{bmatrix}$$ while $$BA = \\begin{bmatrix} 0 & 1 \\\\ 1 & 3 \\end{bmatrix}$$ so multiplication does not commute.'
      },
      {
        title: 'Test symmetry, orthogonality and trace in one pass',
        problem: 'For $$M = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$$ decide whether `$M$` is symmetric or skew-symmetric, test orthogonality via `$M^T M$`, and compute `$\\mathrm{tr}(M)$` and `$\\mathrm{tr}(M^T M)$`.',
        steps: [
          { label: 'Step 1: Transpose test', text: '```text\nM^T = [0 1; -1 0] = -M  -> skew-symmetric\nDiagonal of M is (0, 0) as required\nSymmetric test M^T = M fails\n```\nSince `$M^T = -M$`, the matrix is **skew-symmetric** and not symmetric, with the mandatory zero diagonal `$0, 0`.' },
          { label: 'Step 2: Orthogonality check', text: 'Form `$M^T M = (-M)(M) = -M^2$`; direct multiplication gives `$M^2 = \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$`, so `$M^T M = I_2$`. The `orthogonal` identity holds, meaning columns are orthonormal and `$M^T = M^{-1}$`.' },
          { label: 'Step 3: Traces', text: 'The trace `$\\mathrm{tr}(M) = 0 + 0 = 0$` as every skew-symmetric trace must vanish, while `$\\mathrm{tr}(M^T M) = \\mathrm{tr}(I_2) = 2$` counts the squared column lengths. The two traces together confirm skew-symmetry plus orthogonality in numbers.' }
        ],
        result: '`$M$` is skew-symmetric and orthogonal with `$\\mathrm{tr}(M) = 0$` and `$M^T M = I_2$`.'
      }
    ],
    keyTakeaways: [
      'Symmetric means `$A^T = A$` and skew-symmetric means `$A^T = -A$` with zero diagonal; every square splits into one of each.',
      'Orthogonal means `$Q^T Q = I$`, idempotent means `$A^2 = A$`, triangular means zeros on one side of the diagonal.',
      'Products need matching inner dimensions and do not commute: `$AB \\ne BA$` in general.',
      'Reversal rules `$(AB)^T = B^T A^T$` and cyclic trace `$\\mathrm{tr}(AB) = \\mathrm{tr}(BA)$` organize all simplification.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2014 — symmetric and skew-symmetric split (rephrased)
      {
        q: 'If `$A$` is any square matrix, which claim about `$B = A + A^T$` and `$C = A - A^T$` is correct?',
        options: ['$B$ is skew-symmetric and `$C$` is symmetric', '$B$ is symmetric and `$C$` is skew-symmetric', 'Both `$B$` and `$C$` are symmetric', 'Both `$B$` and `$C$` are orthogonal'],
        answer: 1,
        explanation: 'First transpose each combination using linearity of transpose. Next `$B^T = A^T + A = B$` shows symmetry while `$C^T = A^T - A = -C$` shows skew-symmetry. Finally the diagonal of `$C$` must vanish, confirming the classification.'
      },
      {
        q: 'Let $$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\qquad B = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$$ Which statement about `$AB$` versus `$BA$` holds?',
        options: [`$AB = BA$`, 'Only `$AB$` exists; `$BA$` is undefined', 'Both exist but `$AB \\ne BA$`', 'Both exist and both equal the zero matrix'],
        answer: 2,
        explanation: 'First note both factors are `$2 \\times 2$` so both orders are conformable. Next compute `$AB$` whose second column picks out column structure of `$A$` scaled by `$B$`. Then compute `$BA$` which instead combines rows of `$A$`. Finally compare entries: the two results differ, so order matters.'
      },
      // PYQ-pattern: GATE 2016 — transpose reversal and trace identities (rephrased)
      {
        q: 'For conformable matrices with `$A$` of size `$m \\times n$` and `$B$` of size $n \\times p$, what is `$(AB)^T$`?',
        options: [`$A^T B^T$`, `$B^T A^T$`, '$AB$ with each entry transposed in place', 'Defined only when `$m = p$`'],
        answer: 1,
        explanation: 'First recall transposition swaps row and column indices of the product. Next track how the summation index `$k$` moves from `$a_{ik}b_{kj}$` to `$b_{kj}a_{ik}$`. Then identify the result as the product of transposes in reverse order. Finally check shapes: `$B^T$` is `$p \\times n$` and `$A^T$` is `$n \\times m$`, so `$B^T A^T$` is `$p \\times m$` as required.'
      },
      {
        q: 'If `$Q$` is orthogonal and `$x$` is any column vector, what is the squared length `$\\lVert Qx \\rVert^2$`?',
        options: ['Always zero', `$\\lVert x \\rVert^2$`, `$\\det(Q)$ times $\\lVert x \\rVert^2$`, 'The trace `$\\mathrm{tr}(Q)$`'],
        answer: 1,
        explanation: 'First expand the squared norm as `$(Qx)^T (Qx) = x^T Q^T Q x$`. Next substitute the orthogonal identity `$Q^T Q = I$`. Then the expression collapses to `$x^T x$` which is exactly `$\\lVert x \\rVert^2$`. Finally note orthogonal maps are length-preserving rotations or reflections.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'engmath-ch1-s2',
    readingTime: 9,
    intro: 'The determinant is a single scalar that reports whether a square matrix is invertible, how volumes scale, and how elimination will behave. This section builds the cofactor definition for small matrices and the row-operation rules that make larger determinants tractable. The scaling trap `$|kA| = k^n |A|$` and the false linearity `$|A+B| = |A| + |B|$` are flagged early because they recur in timed problem sets.',
    objectives: [
      'Evaluate `$2 \\times 2$` and `$3 \\times 3$` determinants by formula and cofactor expansion',
      'Predict how row swaps, scaling, and row addition change the determinant',
      'Apply multiplicativity `$|AB| = |A||B|$` and triangular shortcuts correctly'
    ],
    concepts: [
      {
        term: 'Determinant by formula and cofactors',
        kind: 'definition',
        statement: 'For `$2 \\times 2$` the **determinant** is `$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$`, the signed area of the parallelogram spanned by the columns. For `$3 \\times 3$` and beyond, expansion along any row or column gives `$|A| = \\sum_{j} a_{ij} C_{ij}$` where the `cofactor` `$C_{ij} = (-1)^{i+j} M_{ij}$` pairs a checkerboard sign with the minor `$M_{ij}$` obtained by deleting row `$i$` and column `$j$`. Choosing the row or column with the most zeros minimizes arithmetic, since each zero kills a whole cofactor term.',
        detail: 'The checkerboard `$(-1)^{i+j}$` starts with `$+$` at position `$(1,1)$`, and forgetting it is the most common cofactor slip.'
      },
      {
        term: 'Effect of row and column operations',
        kind: 'method',
        statement: 'Three operation rules control every hand computation: swapping two rows **flips the sign**, scaling one row by `$c$` **multiplies** the determinant by `$c$`, and adding a multiple of one row to another **leaves** the determinant unchanged. The `row-add` invariance is the workhorse that creates zeros before expansion, while the swap rule explains why an **odd permutation** of rows negates `$|A|$`. Identical rows, proportional rows, or a zero row force `$|A| = 0$` immediately with no expansion needed.',
        detail: 'Transpose leaves the determinant unchanged with `$|A^T| = |A|$`, so every row rule has a matching column rule.'
      },
      {
        term: 'Multiplicativity and triangular evaluation',
        kind: 'theorem',
        statement: 'Determinants **multiply across products** via `$|AB| = |A| \\cdot |B|$`, so `$|A^k| = |A|^k$` and any singular factor poisons the product to zero. A **triangular** or diagonal matrix has determinant equal to the product of its diagonal entries, because cofactor expansion peels off one diagonal factor at a time. The `upper-triangular` shortcut turns elimination into evaluation: once a matrix is triangular, no further expansion is needed.',
        detail: 'Sums do not split, so `$|A + B| \\ne |A| + |B|$` in general, and the product rule never extends to addition.'
      },
      {
        term: 'Minors, cofactors and the cofactor matrix',
        kind: 'notation',
        statement: 'The **minor** `$M_{ij}$` is the determinant of the submatrix after deleting row `$i$` and column `$j$`, and the signed version `$C_{ij} = (-1)^{i+j} M_{ij}$` is the `cofactor`. Collecting all cofactors into a matrix `$C$` and transposing yields the adjoint `$\\mathrm{adj}(A) = C^T$`, the object that builds the inverse in the next section. Strange-but-true selection rules state that expansion with cofactors of a *different* row sums to zero, a property called alien-cofactor cancellation.',
        detail: 'For `$3 \\times 3$` there are nine cofactors, and each uses a `$2 \\times 2$` minor, so the full expansion has six signed triple products.'
      },
      {
        term: 'Scalar multiples scale by a power',
        kind: 'insight',
        statement: 'Scaling the whole matrix scales **every row**, so `$|kA| = k^n |A|$` for `$n \\times n$` matrices, not `$k|A|$`: the factor `$k$` appears once per row. The `determinant` is linear in each single row separately (multilinear), which is exactly why one-row scaling gives one factor of `$k$` while whole-matrix scaling gives `$n$` of them. Confusing `$|kA|$` with `$k|A|$` undercounts by `$k^{n-1}$`, a costly slip on matrices of size three and above.',
        detail: 'Consequences include `$|-A| = (-1)^n |A|$`, so odd-sized matrices flip sign under global negation while even-sized ones do not.'
      }
    ],
    examples: [
      {
        title: 'Evaluate a 3x3 determinant with a zero-creating step',
        problem: 'Compute $$|A| = \\begin{vmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{vmatrix}$$ by first simplifying, then expanding along the best line.',
        steps: [
          { label: 'Step 1: Choose the method', text: '```text\nBest line: row 1 has a zero already (entry a(13) = 0)\nPlan: expand along row 1 directly, two live cofactors\nSigns on row 1: + - +\n```\nRow one already contains a zero, so expansion costs only two `$2 \\times 2$` minors instead of three.' },
          { label: 'Step 2: Write the two cofactors', text: 'Expansion gives `$|A| = 2 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} - 1 \\cdot \\begin{vmatrix} 1 & 1 \\\\ 0 & 2 \\end{vmatrix} + 0$`. The `cofactor` signs `$+$`, `$-$` come from `$(-1)^{1+j}$`, and the zero term drops out entirely.' },
          { label: 'Step 3: Finish the arithmetic', text: 'The minors evaluate to `$4 - 1 = 3$` and `$2 - 0 = 2$`, so `$|A| = 2 \\cdot 3 - 1 \\cdot 2 = 4$`. A nonzero value reports an invertible matrix with volume scale `$4$`.' }
        ],
        result: 'The determinant equals `$4$`, so `$A$` is invertible.'
      },
      {
        title: 'Use row operations to triangularize before evaluating',
        problem: 'Compute $$|B| = \\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 1 & 1 & 1 \\end{vmatrix}$$ by creating zeros with row addition, tracking the determinant at each move.',
        steps: [
          { label: 'Step 1: Clear below the pivot', text: '```text\nR2 <- R2 - 2*R1   (det unchanged)\nR3 <- R3 - R1     (det unchanged)\nNew matrix: [1 2 3; 0 1 1; 0 -1 -2]\n```\nBoth moves are `row-add` operations, so the `determinant` is unchanged and no sign or scale correction is owed.' },
          { label: 'Step 2: Clear once more', text: 'Add row two to row three via `$R_3 \\gets R_3 + R_2$`, again determinant-preserving, reaching $$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & -1 \\end{bmatrix}$$ The matrix is now **upper-triangular**, so the determinant is the diagonal product.' },
          { label: 'Step 3: Read the diagonal', text: 'Diagonal entries `$1, 1, -1$` multiply to `$-1$`, hence `$|B| = -1$`. No swaps or scalings occurred, so no sign flip or factor contaminates the reading.' }
        ],
        result: 'After determinant-preserving row additions, `$|B| = 1 \\cdot 1 \\cdot (-1) = -1$`.'
      }
    ],
    keyTakeaways: [
      'Expand along the row or column with the most zeros using `$|A| = \\sum_j a_{ij} C_{ij}$` with `$C_{ij} = (-1)^{i+j} M_{ij}$`.',
      'Swap flips sign, single-row scaling scales once, and row addition preserves `$|A|$`; duplicate or proportional rows give zero.',
      'Products multiply as `$|AB| = |A||B|$` and triangular determinants are diagonal products.',
      'Whole-matrix scaling obeys `$|kA| = k^n |A|$`, and `$|A+B|$` never splits into `$|A| + |B|$`.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2013 — determinant of a 3x3 matrix (rephrased)
      {
        q: 'What is $$\\begin{vmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{vmatrix}~?$$',
        options: [`$0$`, `$2$`, `$4$`, `$8$`],
        answer: 2,
        explanation: 'First expand along row one, which already holds a zero. Next evaluate the two live minors `$3$` and `$2$`. Then combine as `$2 \\cdot 3 - 1 \\cdot 2 = 4$`. Finally note the nonzero value signals invertibility.'
      },
      {
        q: 'Matrix `$A$` is `$3 \\times 3$` with `$|A| = 2$`. What is `$|3A|$`?',
        options: [`$6$`, `$18$`, `$54$`, `$27$`],
        answer: 2,
        explanation: 'First recall whole-matrix scaling hits every one of the `$n = 3$` rows. Next apply `$|kA| = k^n |A|$` with `$k = 3$`. Then compute `$3^3 \\cdot 2 = 27 \\cdot 2$`. Finally arrive at $54$, not `$6$`.'
      },
      // PYQ-pattern: GATE 2009 — row operations and determinant (rephrased)
      {
        q: 'Starting from `$A$`, matrix `$B$` is formed by swapping rows one and two, then adding twice row one to row three. If `$|A| = 5$`, what is `$|B|$`?',
        options: [`$5$`, `$-5$`, `$10$`, `$-10$`],
        answer: 1,
        explanation: 'First the swap multiplies the determinant by `$-1$`, taking `$5$` to `$-5$`. Next the row-addition move `$R_3 \\gets R_3 + 2R_1$` leaves the determinant unchanged. Then no scaling occurred, so no further factor applies. Finally `$|B| = -5$`.'
      },
      {
        q: 'If `$A$` and `$B$` are `$n \\times n$` with `$|A| = 0$`, what is `$|AB|$`?',
        options: [`$|B|$`, `$0$`, `$1$`, 'Cannot be determined from `$|A|$` alone'],
        answer: 1,
        explanation: 'First invoke multiplicativity `$|AB| = |A| \\cdot |B|$`. Next substitute `$|A| = 0$`. Then the product is `$0 \\cdot |B| = 0$` regardless of `$B$`. Finally conclude a singular factor always poisons the product.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'engmath-ch1-s3',
    readingTime: 9,
    intro: 'Inverses undo matrix multiplication, adjoints build them from cofactors, and rank measures how much independent information a matrix carries. This section unites the adjoint-inverse formula with the two practical rank computations: minors and echelon form. Rank then becomes the single number that predicts consistency, invertibility, and solution dimension in the next section.',
    objectives: [
      'Compute inverses via `$A^{-1} = \\mathrm{adj}(A)/|A|$` and detect singular matrices',
      'Find rank by largest nonzero minor and by row-echelon pivot count',
      'State invertibility equivalences linking determinant, rank, rows and columns'
    ],
    concepts: [
      {
        term: 'Adjoint-inverse formula',
        kind: 'theorem',
        statement: 'For square `$A$` with `$|A| \\ne 0$`, the **inverse** is `$A^{-1} = \\frac{1}{|A|} \\mathrm{adj}(A)$` where the `adjoint` is the transpose of the cofactor matrix. Each entry of the inverse therefore divides a signed minor by the determinant, which is why a zero determinant makes inversion impossible. The formula also gives `$A \\cdot \\mathrm{adj}(A) = |A| I$`, valid even for singular matrices.',
        detail: 'For `$2 \\times 2$` this collapses to swapping diagonal entries, negating off-diagonals, and dividing by `$ad - bc$`.'
      },
      {
        term: 'Singular versus invertible',
        kind: 'definition',
        statement: 'A square matrix is **singular** when `$|A| = 0$`, admitting no inverse, and **invertible** (nonsingular) when `$|A| \\ne 0$`. The `inverse` when it exists is unique and obeys `$(A^{-1})^{-1} = A$` plus `$(A^T)^{-1} = (A^{-1})^T$`. Invertibility is equivalent to full rank, independent columns, independent rows, and a trivial null space containing only the zero vector.',
        detail: 'Numerically, a tiny but nonzero determinant still inverts in theory yet amplifies rounding error, a conditioning warning beyond the binary singular label.'
      },
      {
        term: 'Rank by largest nonzero minor',
        kind: 'method',
        statement: 'The **rank** `$\\rho(A)$` is the size `$r$` of the largest square submatrix with nonzero determinant, so rank is found by testing minors from large to small. A `minor` of size `$r+1$` vanishing everywhere while some `$r$`-minor survives certifies rank `$r$`. Rank zero occurs only for the zero matrix, and rank never exceeds either dimension of the matrix.',
        detail: 'For a `$3 \\times 4$` matrix, test the four `$3 \\times 3$` minors first: any nonzero one proves full row rank `$3$` at once.'
      },
      {
        term: 'Rank by echelon pivot count',
        kind: 'method',
        statement: 'Row operations preserve rank, so reduction to **row-echelon form** reveals rank as the count of nonzero rows, equivalently the count of `pivot` positions. The `echelon` staircase has each leading entry to the right of the one above, and zero rows sink to the bottom. This method scales to large matrices where minor-hunting would need combinatorially many determinants.',
        detail: 'Column operations also preserve rank, so mixed reduction is permitted when only the rank number, not the solution set, is wanted.'
      },
      {
        term: 'Rank cannot exceed its borders',
        kind: 'insight',
        statement: 'Rank obeys the **ceiling** `$\\rho(A) \\le \\min(m, n)$` for `$m \\times n$` matrices, with equality called **full rank**. The `rank` of a product obeys `$\\rho(AB) \\le \\min(\\rho(A), \\rho(B))$`, so multiplication never creates independence. A tall matrix can have full column rank while a wide matrix can have full row rank, but only square full-rank matrices earn inverses.',
        detail: 'Rank one matrices factor as `$uv^T$`, an outer product whose columns are all multiples of `$u$` and whose rows are all multiples of `$v^T$`.'
      }
    ],
    examples: [
      {
        title: 'Invert a 2x2 matrix and verify the product',
        problem: 'Find the inverse of $$A = \\begin{bmatrix} 4 & 7 \\\\ 2 & 6 \\end{bmatrix}$$ and verify `$AA^{-1} = I$`.',
        steps: [
          { label: 'Step 1: Determinant first', text: '```text\n|A| = 4*6 - 7*2 = 24 - 14 = 10 (nonzero -> invertible)\n2x2 shortcut: swap diagonal, negate off-diagonal, divide by |A|\n```\nThe nonzero value `$10$` licenses inversion, and its size will divide every entry of the `inverse`.' },
          { label: 'Step 2: Apply the shortcut', text: 'Swap `$4$` and `$6$`, negate `$7$` and `$2$`, then divide by `$10$` to get $$A^{-1} = \\frac{1}{10}\\begin{bmatrix} 6 & -7 \\\\ -2 & 4 \\end{bmatrix} = \\begin{bmatrix} 0.6 & -0.7 \\\\ -0.2 & 0.4 \\end{bmatrix}$$ This is the `$2 \\times 2$` face of `$A^{-1} = \\mathrm{adj}(A)/|A|$`.' },
          { label: 'Step 3: Verify', text: 'Multiply `$AA^{-1}$`: top-left `$4(0.6) + 7(-0.2) = 2.4 - 1.4 = 1$`, top-right `$4(-0.7) + 7(0.4) = -2.8 + 2.8 = 0$`, and similarly the second row gives `$0$` and `$1$`. The product is $I_2$, confirming the inverse.' }
        ],
        result: '$$A^{-1} = \\frac{1}{10}\\begin{bmatrix} 6 & -7 \\\\ -2 & 4 \\end{bmatrix}$$ with `$|A| = 10$`.'
      },
      {
        title: 'Find rank by echelon form',
        problem: 'Determine `$\\rho(A)$` for $$A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 2 \\\\ 1 & 0 & 1 \\end{bmatrix}$$ using elimination.',
        steps: [
          { label: 'Step 1: Eliminate', text: '```text\nR2 <- R2 - 2*R1  ->  [0 0 0]\nR3 <- R3 - R1    ->  [0 -2 0]\nSwap R2 and R3 to restore staircase\n```\nRow two is a multiple of row one, so it collapses to zeros and contributes no `pivot`.' },
          { label: 'Step 2: Read the staircase', text: 'After the swap the echelon form is $$\\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$ with pivots in columns one and two. The `echelon` nonzero-row count is `$2$`.' },
          { label: 'Step 3: Cross-check by minors', text: 'All `$3 \\times 3$` determinants vanish since `$|A| = 0$` by proportional rows, but the minor deleting row two and column three gives `$\\begin{vmatrix} 1 & 2 \\\\ 1 & 0 \\end{vmatrix} = -2 \\ne 0$`. Largest surviving minor has size $2$, confirming `$\\rho(A) = 2$`.' }
        ],
        result: 'Rank `$\\rho(A) = 2$` with one dependency from the doubled row.'
      }
    ],
    keyTakeaways: [
      'Invert by `$A^{-1} = \\mathrm{adj}(A)/|A|$` when `$|A| \\ne 0$`; zero determinant means singular with no inverse.',
      'Rank is the largest surviving minor size, equal to the echelon pivot count.',
      'Invertible is equivalent to full rank, nonzero determinant, and independent rows and columns.',
      'Rank obeys `$\\rho(AB) \\le \\min(\\rho(A), \\rho(B))$` and `$\\rho(A) \\le \\min(m,n)$`.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2012 — inverse of a 2x2 matrix (rephrased)
      {
        q: 'If $$A = \\begin{bmatrix} 4 & 7 \\\\ 2 & 6 \\end{bmatrix}$$ what is `$A^{-1}$`?',
        options: [`$\\frac{1}{10}\\begin{bmatrix} 6 & -7 \\\\ -2 & 4 \\end{bmatrix}$`, `$\\frac{1}{10}\\begin{bmatrix} 4 & 7 \\\\ 2 & 6 \\end{bmatrix}$`, `$\\frac{1}{38}\\begin{bmatrix} 6 & -7 \\\\ -2 & 4 \\end{bmatrix}$`, 'Does not exist since `$A$` is singular'],
        answer: 0,
        explanation: 'First compute `$|A| = 24 - 14 = 10 \\ne 0$` so the inverse exists. Next swap diagonal entries and negate off-diagonals to form the adjoint. Then divide every entry by `$10$`. Finally the first option matches while the divisor `$38$` has no basis.'
      },
      {
        q: 'A `$4 \\times 5$` matrix has every `$3 \\times 3$` minor equal to zero but some `$2 \\times 2$` minor nonzero. What is its rank?',
        options: [`$1$`, `$2$`, `$3$`, `$4$`],
        answer: 1,
        explanation: 'First recall rank is the largest surviving minor size. Next all size-three minors vanish, so rank is below `$3$`. Then a surviving size-two minor proves rank is at least `$2$`. Finally rank equals `$2$` exactly.'
      },
      // PYQ-pattern: GATE 2015 — rank of a matrix with dependent rows (rephrased)
      {
        q: 'Which condition is equivalent to `$A$` (square) being invertible?',
        options: [`$|A| = 0$`, 'Some row is a linear combination of the others', 'Rank equals the matrix size', 'The adjoint `$\\mathrm{adj}(A)$` is the zero matrix'],
        answer: 2,
        explanation: 'First eliminate singularity: `$|A| = 0$` is the opposite of invertibility. Next dependent rows force zero determinant, also opposite. Then full rank `$\\rho(A) = n$` matches nonzero determinant and independent rows. Finally a zero adjoint occurs only for rank below $n - 1$, never for invertible matrices.'
      },
      {
        q: 'If `$A$` is `$3 \\times 3$` with `$|A| = 4$`, what is `$|A^{-1}|$`?',
        options: [`$4$`, `$-4$`, `$\\frac{1}{4}$`, `$16$`],
        answer: 2,
        explanation: 'First use `$AA^{-1} = I$` with determinants on both sides. Next `$|A| \\cdot |A^{-1}| = |I| = 1$`. Then substitute `$|A| = 4$` to get `$4 \\cdot |A^{-1}| = 1$`. Finally `$|A^{-1}| = \\frac{1}{4}$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'engmath-ch1-s4',
    readingTime: 10,
    intro: 'Linear systems ask which vectors `$x$` satisfy `$Ax = b$`, and the answer depends on a race between the coefficient rank and the augmented rank. This section states the consistency conditions, contrasts homogeneous with non-homogeneous systems, and compares Cramer rule against elimination. Counting solutions without fully solving is the headline skill.',
    objectives: [
      'Apply the consistency conditions to predict zero, one, or infinitely many solutions',
      'Solve small systems by Cramer rule and by Gaussian elimination',
      'Distinguish homogeneous trivial-only from nontrivial cases via rank'
    ],
    concepts: [
      {
        term: 'Consistency conditions for Ax = b',
        kind: 'theorem',
        statement: 'Let `$\\rho(A)$` be the coefficient rank and `$\\rho([A \\mid b])$` the **augmented** rank. The system is **consistent** exactly when the ranks agree, and then the solution is unique if `$\\rho(A) = n$` (unknowns count) or infinite with `$n - \\rho(A)$` free variables if `$\\rho(A) < n$`. The `augmented` matrix appends `$b$` as an extra column, and disagreement `$\\rho([A \\mid b]) = \\rho(A) + 1$` means `$b$` points outside the column space.',
        detail: 'Counting solutions needs only the two ranks and `$n$`: no full solve is required to answer zero, one, or infinite.'
      },
      {
        term: 'Homogeneous systems and the trivial solution',
        kind: 'theorem',
        statement: 'The **homogeneous** system `$Ax = 0$` is always consistent because `$x = 0$` (the trivial solution) works, with the only question being uniqueness. It admits **nontrivial** solutions exactly when `$\\rho(A) < n$`, equivalently `$|A| = 0$` for square systems. The `nullspace` of `$A$` is the full solution set, a subspace of dimension `$n - \\rho(A)$`.',
        detail: 'More unknowns than equations (`$n > m$`) forces nontrivial solutions, since rank cannot exceed `$m$`.'
      },
      {
        term: 'Cramer rule by determinant ratios',
        kind: 'method',
        statement: 'For a square system with `$|A| \\ne 0$`, **Cramer rule** gives each unknown as a ratio `$x_i = |A_i| / |A|$` where `$A_i$` replaces column `$i$` of `$A$` by `$b$`. The `determinant` in the denominator is shared across all unknowns, so one `$|A|$` plus `$n$` modified determinants solve the whole system. The rule collapses when `$|A| = 0$`, and it costs `$n+1$` determinants, making it a theory tool rather than a large-system algorithm.',
        detail: 'Cramer rule proves uniqueness cleanly but elimination wins on arithmetic for size four and above.'
      },
      {
        term: 'Gaussian elimination to echelon and back substitution',
        kind: 'method',
        statement: 'Forward elimination applies `row-add`, swap, and scale moves to reach an **upper-triangular** (echelon) form, tracking that swaps flip determinant signs while row-adds preserve solution sets. **Back substitution** then solves from the last equation upward, dividing by each `pivot` in turn. A zero pivot with nonzero right-hand side exposes inconsistency, while a full zero row exposes a free variable.',
        detail: 'Gauss-Jordan continues to reduced echelon with ones on pivots, reading the solution without a separate backward pass.'
      },
      {
        term: 'Free variables carry the infinity',
        kind: 'insight',
        statement: 'Each missing pivot creates one **free variable** that can be chosen arbitrarily, with the remaining basic variables expressed in terms of it. The `parametric` solution `$x = x_p + t_1 v_1 + \\cdots$` separates one particular solution from the homogeneous directions. Rank deficiency `$n - \\rho(A)$` therefore counts the degrees of freedom, not just the vague label infinite.',
        detail: 'A unique solution has zero free variables, and an inconsistent system has none either, since inconsistency means no solution at all.'
      }
    ],
    derivations: [
      {
        title: 'Cramer Rule for Two Equations in Two Unknowns',
        statement: 'Derivation of $x = \\frac{\\Delta_{x}}{\\Delta}$ and $y = \\frac{\\Delta_{y}}{\\Delta}$ for $ax + by = e$ and $cx + dy = f$ with $\\Delta = ad - bc \\ne 0$',
        prerequisites: [
          'Determinant of a $2 \\times 2$ matrix $\\Delta = ad - bc$',
          'Elimination moves preserve the solution set of $Ax = b$',
          'Unique solution exists exactly when $\\Delta \\ne 0$',
        ],
        steps: [
          {
            label: 'Step 1: Eliminate $y$ to isolate $x$',
            formula: '$$\\Delta = ad - bc, \\quad \\Delta_{x} = ed - bf$$',
            explanation: 'Multiply the first equation by $d$ and the second by $b$, then subtract, so the $y$ terms cancel exactly because both become $bdy$. This works because equal quantities subtracted from equal quantities keep equality, leaving a single equation in $x$ with coefficient $ad - bc$. The combination is chosen precisely to force the $y$ coefficient to zero.',
          },
          {
            label: 'Step 2: Eliminate $x$ to isolate $y$',
            formula: '$$\\Delta_{y} = af - ce$$',
            explanation: 'Multiply the first equation by $c$ and the second by $a$, then subtract, so the $x$ terms cancel exactly because both become $acx$. This mirrors the previous step with the roles exchanged, which is legitimate for the same equality-preserving reason. The surviving $y$ coefficient is again $ad - bc$ up to sign, giving $\\Delta_{y}$ on the right.',
          },
          {
            label: 'Step 3: Divide by the nonzero determinant',
            formula: '$$x = \\frac{\\Delta_{x}}{\\Delta}, \\quad y = \\frac{\\Delta_{y}}{\\Delta}$$',
            explanation: 'Because $\\Delta \\ne 0$ is assumed, division by $\\Delta$ is valid and yields a single candidate pair. This step works since a nonzero scalar multiple can be cancelled from both sides of an equation without changing its truth. If $\\Delta$ were zero this division would be impossible, which is why the hypothesis is essential.',
          },
          {
            label: 'Step 4: Read numerators as replaced-column determinants',
            formula: '$$\\Delta_{x} = \\begin{vmatrix} e & b \\\\ c & d \\end{vmatrix}, \\quad \\Delta_{y} = \\begin{vmatrix} a & e \\\\ c & f \\end{vmatrix}$$',
            explanation: 'Expanding each $2 \\times 2$ determinant reproduces $ed - bf$ and $af - ce$ respectively, so the elimination numerators are exactly the determinants of matrices with one column replaced by constants on the right side. This identification works because the determinant formula is defined by the same cross products that elimination produced. Hence each unknown is a ratio of two determinants.',
          },
        ],
        result: 'For $\\Delta \\ne 0$, $x = \\frac{\\Delta_{x}}{\\Delta}$ and $y = \\frac{\\Delta_{y}}{\\Delta}$, meaning each unknown is the determinant with its column replaced by constants divided by the shared coefficient determinant.',
      },
    ],
    examples: [
      {
        title: 'Solve a 2x2 system by Cramer rule',
        problem: 'Solve $$\\begin{aligned} 2x + y &= 5 \\\\ x + 3y &= 5 \\end{aligned}$$ using determinant ratios.',
        steps: [
          { label: 'Step 1: Determinant of A', text: '```text\nA = [2 1; 1 3], b = [5; 5]\n|A| = 2*3 - 1*1 = 5 (nonzero -> unique solution)\nA_x replaces col 1 by b; A_y replaces col 2 by b\n```\nThe shared denominator `$|A| = 5$` is nonzero, so **Cramer rule** applies and exactly one solution exists.' },
          { label: 'Step 2: Modified determinants', text: 'Form `$|A_x| = \\begin{vmatrix} 5 & 1 \\\\ 5 & 3 \\end{vmatrix} = 15 - 5 = 10$` and `$|A_y| = \\begin{vmatrix} 2 & 5 \\\\ 1 & 5 \\end{vmatrix} = 10 - 5 = 5$`. Each `determinant` replaces one column of `$A$` by `$b$`.' },
          { label: 'Step 3: Divide', text: 'Ratios give `$x = 10/5 = 2$` written properly as `$x = \\frac{10}{5} = 2$` and `$y = \\frac{5}{5} = 1$`. Substitution checks: `$4 + 1 = 5$` and `$2 + 3 = 5$`.' }
        ],
        result: 'The unique solution is `$x = 2$`, `$y = 1$`.'
      },
      {
        title: 'Detect inconsistency from the augmented rank',
        problem: 'Determine the solution count for $$\\begin{aligned} x + y + z &= 1 \\\\ 2x + 2y + 2z &= 4 \\\\ x - y + z &= 0 \\end{aligned}$$ without finding any solution.',
        steps: [
          { label: 'Step 1: Build the augmented matrix', text: '```text\n[A|b] = [1 1 1 | 1; 2 2 2 | 4; 1 -1 1 | 0]\nSuspect: row 2 is twice row 1 on the left only\n```\nThe left block of row two doubles row one, but `$4 \\ne 2 \\cdot 1$` on the right, the classic parallel-plane signal.' },
          { label: 'Step 2: Eliminate', text: 'Subtract `$2R_1$` from `$R_2$` to get `$[0 \\; 0 \\; 0 \\mid 2]$`, the row `$0 = 2$` which is impossible. Coefficient rank stays `$2$` from rows one and three, but the `augmented` rank rises to `$3$`.' },
          { label: 'Step 3: Conclude', text: 'Since `$\\rho(A) = 2 \\ne 3 = \\rho([A \\mid b])$`, the consistency condition fails and the system has **no solution**. Geometrically two of the planes are parallel and distinct.' }
        ],
        result: 'Ranks disagree (`$2$` versus `$3$`), so the system is inconsistent with zero solutions.'
      }
    ],
    keyTakeaways: [
      'Consistent exactly when `$\\rho(A) = \\rho([A \\mid b])$`; unique if rank equals $n$, otherwise `$n - \\rho(A)$` free variables.',
      'Homogeneous `$Ax = 0$` always admits `$x = 0$`, plus nontrivial solutions exactly when rank drops below `$n$.',
      'Cramer rule `$x_i = |A_i|/|A|$` needs `$|A| \\ne 0$` and costs `$n+1$` determinants.',
      'Zero pivot rows read as `$0 = c$` (inconsistent) or `$0 = 0$` (free variable).'
    ],
    quiz: [
      // PYQ-pattern: GATE 2011 — consistency of a 3x3 system (rephrased)
      {
        q: 'For `$Ax = b$` with `$A$` of size $3 \\times 3$, suppose `$\\rho(A) = 2$` and `$\\rho([A \\mid b]) = 3$`. How many solutions?',
        options: ['Exactly one', 'Infinitely many', 'None', 'Exactly two'],
        answer: 2,
        explanation: 'First compare the two ranks: `$2 \\ne 3$` so consistency fails. Next recall agreement is necessary and sufficient for any solution. Then mismatch means `$b$` lies outside the column space. Finally the count is zero solutions.'
      },
      {
        q: 'The homogeneous system with $$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{bmatrix}$$ has how many solutions?',
        options: ['Only the trivial solution', 'Infinitely many (a line of solutions)', 'Infinitely many (a plane of solutions)', 'No solution'],
        answer: 1,
        explanation: 'First rows one and two are proportional, so `$|A| = 0$`. Next rank is `$2$` since rows one and three are independent. Then `$n - \\rho = 3 - 2 = 1$` free variable remains. Finally homogeneous systems are always consistent, so solutions form a line through the origin.'
      },
      // PYQ-pattern: GATE 2017 — Cramer rule for a 2x2 system (rephrased)
      {
        q: 'By Cramer rule, the solution of $$\\begin{aligned} 2x + y &= 5 \\\\ x + 3y &= 5 \\end{aligned}$$ is:',
        options: [`$x = 1, y = 2$`, `$x = 2, y = 1$`, `$x = 3, y = -1$`, `$x = 0, y = 5$`],
        answer: 1,
        explanation: 'First compute `$|A| = 6 - 1 = 5$`. Next `$|A_x| = 15 - 5 = 10$` giving `$x = \\frac{10}{5} = 2$`. Then `$|A_y| = 10 - 5 = 5$` giving `$y = \\frac{5}{5} = 1$`. Finally verify `$2 + 3 = 5$` in the second equation.'
      },
      {
        q: 'A system of `$2$` equations in `$4$` unknowns has `$\\rho(A) = \\rho([A \\mid b]) = 2$`. The solution set is:',
        options: ['A unique point', 'A line (one free direction)', 'A 2-dimensional plane of solutions', 'Empty'],
        answer: 2,
        explanation: 'First ranks agree so the system is consistent. Next free variables count `$n - \\rho = 4 - 2 = 2$`. Then two independent homogeneous directions span the solution offset. Finally the general solution is a `$2$-dimensional flat, a plane through a particular point.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Fredholm alternative and the four subspaces',
        blocks: [
          {
            kind: 'theorem',
            body: 'The **Fredholm alternative** decides solvability of $Ax = b$ without solving. Let $A$ be $m \\times n$ with rank $r$. Then $Ax = b$ is solvable exactly when $y^{T} b = 0$ for every $y$ with $A^{T} y = 0$, equivalently $\\mathrm{rank}(A) = \\mathrm{rank}([A \\, b])$. Moreover $\\mathrm{rank}(A) + \\dim \\ker(A) = n$ and $\\mathrm{rank}(A) + \\dim \\ker(A^{T}) = m$, so the four subspaces have dimensions $r$, $n - r$, $r$ and $m - r$. The condition $y^{T} b = 0$ says $b$ has no component in the left nullspace.'
          },
          {
            kind: 'proof',
            body: 'Necessity is one line: if $Ax = b$ and $A^{T} y = 0$ then $y^{T} b = y^{T} A x = (A^{T} y)^{T} x = 0$. Sufficiency follows from orthogonal complements. The row space equals $(\\ker A)^{\\perp}$ and the column space equals $(\\ker A^{T})^{\\perp}$ under the standard dot product, with inclusion upgraded to equality by the dimension count $\\dim \\mathrm{range}(A) = r = m - \\dim \\ker(A^{T})$. Hence any $b$ orthogonal to $\\ker(A^{T})$ lies in the range. The augmented rank test is this geometry in computational form.'
          },
          {
            kind: 'remark',
            body: 'When the test fails, the **normal equations** $A^{T} A \\hat{x} = A^{T} b$ still give the least squares projection, and the Moore Penrose pseudoinverse selects the minimum norm minimizer via the singular value decomposition $A = U \\Sigma V^{T}$. Finite dimensions make the range closed, so the alternative is sharp. In infinite dimensions it breaks: compact operators can have nonclosed range, and the index $\\dim \\ker - \\dim \\mathrm{coker}$ becomes Fredholm theory, the gateway to integral equations $u - \\lambda K u = f$ and the Riesz Schauder theorems.'
          },
        ]
      }
    ],
  }
]
