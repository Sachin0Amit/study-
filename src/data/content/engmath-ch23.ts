import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Schaum Lab III: Mappings and Eigenvalues
// Chapter 23: sections 23.1 to 23.4. Master study content.
// Source: Lipschutz Linear Algebra Schaum 6e, Chapters 5 and 6 with 9 and 11.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh23Content: SectionContent[] = [
  // ---------------------------------------------------------------- 23.1
  {
    sectionId: 'engmath-ch23-s1',
    readingTime: 9,
    intro: 'Every linear map becomes a matrix once bases are fixed, so this workshop drills the column rule that images of basis vectors become columns. You will read kernels and images from `$[F]_{S, S^{\\prime}}$` representatives and verify the action identity `$[F(v)] = A[v]$`. Rank plus nullity then closes each drill with a dimension check.',
    objectives: [
      'Build `$[F]_{S, S^{\\prime}}$` by imaging basis vectors and stacking coordinates',
      'Read kernel and image dimensions from the matrix representative',
      'Verify `$[F(v)] = A[v]$` on sample vectors with script checks'
    ],
    concepts: [
      {
        term: 'Matrix representation column rule',
        kind: 'definition',
        statement: 'The **representation** `$[F]_{S, S^{\\prime}}$` has $j$th column equal to `$[F(w_{j})]_{S^{\\prime}}$`, the `rep` column rule of Schaum 6.2. Basis vectors go in, their images written in the target basis come out as columns. Changing either basis conjugates the matrix while the map stays fixed.',
        detail: 'Schaum 6.2 images `$w_{1} = (1, 1, 1)$` to `$(-7, 4)$`-style coordinates, then stacks three such columns into `$[F]_{S, S^{\\prime}}$`.'
      },
      {
        term: 'Kernel as solution space',
        kind: 'definition',
        statement: 'The **kernel** `$\\ker F = \\{v : F(v) = 0\\}$` is the solution space of the homogeneous representative system, found by the `ker` elimination on `$A[v] = 0$`. Injectivity is exactly trivial kernel, so nullity zero means one-to-one. Free variables in the reduction become kernel basis directions.',
        detail: 'For `$F(x, y) = (x + y, 2x)$` the equation `$F = (0, 0)$` forces `$x = 0$` then `$y = 0$`, so the kernel is `$\\{0\\}$` and `$F$` is injective.'
      },
      {
        term: 'Image as column span',
        kind: 'theorem',
        statement: 'The **image** `$\\operatorname{Im} F$` equals the span of the representative columns, the `image` column-space identity. Pivot columns mark a basis of the image, while free columns expose dependencies. Surjectivity is full column rank reaching every target vector.',
        detail: 'Schaum 6.5 reads `$F(\\mathbb{R}^{3})$` from the three image columns, keeping the two pivot ones as the image basis.'
      },
      {
        term: 'Rank-nullity dimension check',
        kind: 'theorem',
        statement: 'Every map satisfies **rank-nullity** `$\\dim \\ker F + \\dim \\operatorname{Im} F = \\dim V$`, the `ranknull` audit that closes each drill. Kernel directions plus image directions exactly reconstruct the domain dimension. A three-dimensional domain with one-dimensional kernel must have two-dimensional image.',
        detail: 'Schaum 5.4 verifies `$\\dim \\ker F = 1$` with `$\\dim \\operatorname{Im} F = 2$` on a `$3$`-dimensional domain, summing to `$3$`.'
      },
      {
        term: 'Composition becomes product',
        kind: 'insight',
        statement: 'Map **composition** corresponds to matrix product through `$[G \\circ F] = [G][F]$`, the `compose` order-preserving bridge. Applying `$F$` then `$G$` multiplies by `$[F]$` then `$[G]$` on coordinate columns. Dimension compatibility of maps is exactly multiplication compatibility of representatives.',
        detail: 'Schaum 5.38 builds `$F_{ij}$` maps sending one basis vector to another, whose representatives multiply as elementary matrices under composition.'
      }
    ],
    figures: [
      {
        caption: 'A map `$F: V \\to U$` sends basis `$w_{1}, w_{2}, w_{3}$` to columns `$c_{1}, c_{2}, c_{3}$` of `$[F]$`, with `$\\ker F$` collapsing and `$\\operatorname{Im} F$` spanning.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Linear map sending basis to matrix columns"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Basis images become columns</text><ellipse cx="180" cy="180" rx="110" ry="100" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="180" y="90" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">V domain</text><circle cx="140" cy="150" r="6" fill="currentColor"/><circle cx="180" cy="180" r="6" fill="currentColor"/><circle cx="220" cy="210" r="6" fill="currentColor"/><text x="140" y="138" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">w1</text><ellipse cx="540" cy="180" rx="110" ry="100" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="540" y="90" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">U codomain</text><circle cx="500" cy="150" r="6" fill="currentColor"/><circle cx="540" cy="180" r="6" fill="currentColor"/><circle cx="580" cy="210" r="6" fill="currentColor"/><text x="500" y="138" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">c1</text><line x1="290" y1="150" x2="430" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="430,150 418,145 418,155" fill="currentColor"/><line x1="290" y1="190" x2="430" y2="190" stroke="currentColor" stroke-width="2"/><polygon points="430,190 418,185 418,195" fill="currentColor"/><text x="360" y="140" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">F</text><text x="360" y="300" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">kernel collapses to zero, pivot columns span the image</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Representation sprint for a plane map',
        problem: 'Let `$F(x, y) = (x + y, 2x)$` with standard bases on both sides. Write `$[F]$`, find kernel and image, and verify on `$(3, 1)$` with a script.',
        steps: [
          { label: 'Step 1: Image the basis', text: '`$F(1, 0) = (1, 2)$` and `$F(0, 1) = (1, 0)$`, so columns give `$A = [[1, 1], [2, 0]]$`. The column rule needs only two evaluations for a `$2$`-dimensional domain.' },
          { label: 'Step 2: Kernel plus image plus script', text: '```python\nA = [[1, 1], [2, 0]]\nv = [3, 1]\nAv = [A[0][0]*v[0]+A[0][1]*v[1], A[1][0]*v[0]+A[1][1]*v[1]]\nprint(Av)\n```\n`$A[v] = 0$` forces `$x + y = 0$` with `$2x = 0$`, so kernel is `$\\{0\\}$`; determinant `$-2$` gives image all of `$\\mathbb{R}^{2}$`; the script prints `$[4, 6]$` matching `$F(3, 1)$`.' },
          { label: 'Step 3: Rank-nullity audit', text: '`$0 + 2 = 2$` equals the domain dimension, so the audit closes. Injective plus surjective makes `$F$` an isomorphism of the plane.' }
        ],
        result: '`$[F] = [[1, 1], [2, 0]]$` with trivial kernel and full image.'
      },
      {
        title: 'Action-preservation check',
        problem: 'For the same `$F$`, verify `$[F(v)] = A[v]$` on `$v = (x, y)$` symbolically.',
        steps: [
          { label: 'Step 1: Left side from the formula', text: '`$F(x, y) = (x + y, 2x)$` is already in standard coordinates, so `$[F(v)] = (x + y, 2x)$` with no conversion needed.' },
          { label: 'Step 2: Right side by multiplication', text: '`$A[v] = [[1, 1], [2, 0]](x, y) = (x + y, 2x)$` by row-dot-column. Both sides expand identically.' },
          { label: 'Step 3: State the preservation', text: 'The matrix faithfully executes the map on coordinates, which is Schaum Theorem 6.10 in miniature.' }
        ],
        result: 'Both sides equal `$(x + y, 2x)$`, so action is preserved.'
      }
    ],
    keyTakeaways: [
      'Columns of `$[F]$` are basis images written in target coordinates.',
      'Kernel solves `$A[v] = 0$` while image spans the columns.',
      '`$\\dim \\ker F + \\dim \\operatorname{Im} F = \\dim V$` audits every drill.',
      'Composition of maps is product of representatives in the same order.'
    ],
    quiz: [
      // PYQ-pattern: matrix-of-map drill with changed small maps (rephrased, values changed)
      {
        q: 'What is the $j$th column of `$[F]_{S, S^{\\prime}}$`?',
        options: ['The $j$th standard basis vector', '`$[F(w_{j})]_{S^{\\prime}}$` for domain basis vector `$w_{j}$`', 'The $j$th row of the identity', 'Always the zero column'],
        answer: 1,
        explanation: 'Step 1: Feed basis vector `$w_{j}$` through `$F$`. Step 2: Write the result in `$S^{\\prime}$` coordinates. Step 3: Stack as column `$j$`. Step 4: Repeating over all `$j$` builds the matrix.'
      },
      {
        q: 'For `$F(x, y) = (x + y, 2x)$`, what is `$\\ker F$`?',
        options: ['All of `$\\mathbb{R}^{2}$`', 'The line `$y = -x$`', 'Only `$\\{(0, 0)\\}$`', 'The line `$x = 0$`'],
        answer: 2,
        explanation: 'Step 1: Solve `$x + y = 0$` and `$2x = 0$`. Step 2: Second equation gives `$x = 0$`. Step 3: First then gives `$y = 0$`. Step 4: So only the zero vector survives.'
      },
      {
        q: 'A map on a `$3$`-dimensional domain has `$\\dim \\ker F = 1$`. What is `$\\dim \\operatorname{Im} F$`?',
        options: ['`$0$`', '`$1$`', '`$2$`', '`$3$`'],
        answer: 2,
        explanation: 'Step 1: Rank-nullity says the sum is `$3$`. Step 2: So image dimension is `$3 - 1$`. Step 3: That equals `$2$`. Step 4: The audit closes with `$1 + 2 = 3$`.'
      },
      {
        q: 'What is `$[G \\circ F]$` in terms of representatives `$[G]$` and `$[F]$`?',
        options: ['`$[F] + [G]$`', '`$[F][G]$` always', '`$[G][F]$`', 'The zero matrix'],
        answer: 3,
        explanation: 'Step 1: Apply `$F$` first on vectors. Step 2: Then apply `$G$` to the result. Step 3: Matrices multiply on columns in the same order. Step 4: Hence `$[G \\circ F] = [G][F]$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.2
  {
    sectionId: 'engmath-ch23-s2',
    readingTime: 7,
    intro: 'Invertibility is a yes-or-no sprint decided by determinants, pivots or two-sided checks. This workshop fires equivalent conditions at `$2$`-by-`$2$` matrices and small maps so singular cases are rejected in seconds. Each drill ends with an explicit inverse or an explicit dependency witness.',
    objectives: [
      'Fire determinant, pivot and kernel tests for invertibility calls',
      'Invert `$2$`-by-`$2$` matrices by row reduction and adjugate routes',
      'Order products of inverses as `$(AB)^{-1} = B^{-1}A^{-1}$`'
    ],
    concepts: [
      {
        term: 'Two-sided inverse definition',
        kind: 'definition',
        statement: 'A square `$A$` is **invertible** when some `$B$` gives `$AB = BA = I$`, the `twosided` demand with `$B = A^{-1}$`. One-sided equality does not suffice in infinite dimensions, but finite squares upgrade one side to both. The inverse undoes row operations in reverse order.',
        detail: 'Schaum 2.9 checks both products on `$[[1, 2], [3, 4]]$` with `$[[-2, 1], [1.5, -0.5]]$`, since a single side could mislead on larger stages.'
      },
      {
        term: 'Equivalent invertibility conditions',
        kind: 'theorem',
        statement: 'Square `$A$` is **invertible** exactly when `$\\det A \\ne 0$`, equivalently full pivot count, trivial kernel and nonzero eigenvalues all together, the `equiv` bundle. Any one failure certifies singularity for the whole bundle. Sprint habit is determinant first, then pivots if the determinant looks heavy.',
        detail: 'Schaum 3.9 ties unique solvability of `$Ax = b$` for every `$b$` to nonsingularity, merging systems with inverses.'
      },
      {
        term: 'Row-reduction inversion',
        kind: 'method',
        statement: 'Augmenting `$[A \\mid I]$` and reducing to `$[I \\mid A^{-1}]$` inverts by **row reduction**, the `rowinv` tableau that records the undo sequence. A zero row on the left aborts with singularity proved. The same tableau solves several right-hand sides at once when `$I$` is replaced by a block of targets.',
        detail: 'Reducing `$[[4, 7, 1, 0], [2, 6, 0, 1]]$` scales and clears to expose `$\\frac{1}{10}[[6, -7], [-2, 4]]$` on the right.'
      },
      {
        term: 'Product and transpose of inverses',
        kind: 'theorem',
        statement: 'Products of invertibles stay **invertible** with `$(AB)^{-1} = B^{-1}A^{-1}$`, the `prodinv` reversal, while `$(A^{T})^{-1} = (A^{-1})^{T}$` commutes transpose with inversion. Order reversal mirrors undoing shoes before socks. Powers inherit `$ (A^{k})^{-1} = (A^{-1})^{k}$` by repetition.',
        detail: 'Schaum 2.9 verifies `$(AB)(B^{-1}A^{-1}) = I$` by associativity, cancelling the inner pair first.'
      },
      {
        term: 'Singular witnesses',
        kind: 'insight',
        statement: 'A **singular** matrix advertises itself through zero determinant, a free variable, a nonzero kernel vector or a zero eigenvalue, any of which serves as the `nonsing` rejection stamp. Producing one witness beats attempting inversion. Rank below size quantifies exactly how singular the matrix is.',
        detail: 'Proportional rows `$[1, 2]$` and `$[2, 4]$` give determinant `$0$` plus kernel direction `$(2, -1)$`, two witnesses for the price of one.'
      }
    ],
    figures: [
      {
        caption: 'Invertible maps pair domain and codomain bijectively while singular maps collapse a kernel direction and miss targets.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bijective versus collapsing linear maps"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Bijective versus collapsing</text><ellipse cx="180" cy="170" rx="90" ry="90" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><ellipse cx="400" cy="170" rx="90" ry="90" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="230" y1="120" x2="350" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="350,120 338,115 338,125" fill="currentColor"/><line x1="230" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="2"/><polygon points="350,170 338,165 338,175" fill="currentColor"/><line x1="230" y1="220" x2="350" y2="220" stroke="currentColor" stroke-width="2"/><polygon points="350,220 338,215 338,225" fill="currentColor"/><text x="290" y="280" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">invertible: one to one and onto</text><ellipse cx="560" cy="170" rx="70" ry="90" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="520" y1="130" x2="600" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="600,130 588,125 588,135" fill="currentColor"/><line x1="520" y1="170" x2="600" y2="170" stroke="currentColor" stroke-width="2"/><polygon points="600,170 588,165 588,175" fill="currentColor"/><line x1="520" y1="210" x2="560" y2="210" stroke="currentColor" stroke-width="2"/><polygon points="560,210 548,205 548,215" fill="currentColor"/><text x="585" y="280" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">singular: collapse</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Row-tableau inversion sprint',
        problem: 'Invert `$A = [[4, 7], [2, 6]]$` by the `$[A \\mid I]$` tableau.',
        steps: [
          { label: 'Step 1: Set the tableau', text: 'Write `$[[4, 7, 1, 0], [2, 6, 0, 1]]$`. The right block tracks every left move so the undo sequence accumulates there.' },
          { label: 'Step 2: Halve and clear plus script', text: '```python\nD = 4*6 - 7*2\ninv = [[6/D, -7/D], [-2/D, 4/D]]\nprint(D, inv)\n```\nScale row one by `$\\frac{1}{4}$`, clear row two with `$-2R_{1} + R_{2}$`, scale the new pivot and clear upward; the script confirms `$D = 10$` with `$[[0.6, -0.7], [-0.2, 0.4]]$`.' },
          { label: 'Step 3: Read and verify', text: 'Right block is `$A^{-1}$`; multiplying gives `$AA^{-1} = I$` with `$2.4 - 1.4 = 1$` on top-left.' }
        ],
        result: '`$A^{-1} = [[0.6, -0.7], [-0.2, 0.4]]$` by tableau.'
      },
      {
        title: 'Singularity rejection sprint',
        problem: 'Decide invertibility of `$B = [[1, 2], [2, 4]]$` and exhibit a witness.',
        steps: [
          { label: 'Step 1: Determinant alarm', text: '`$\\det B = 4 - 4 = 0$`, so inversion halts. No tableau is needed once the alarm sounds.' },
          { label: 'Step 2: Kernel witness', text: '`$B(2, -1) = (2 - 2, 4 - 4) = (0, 0)$`, so `$(2, -1)$` is a nonzero kernel direction proving dependence.' },
          { label: 'Step 3: State the verdict', text: 'Singular with rank `$1$`; systems `$Bx = b$` are either inconsistent or infinite, never unique.' }
        ],
        result: 'Singular since `$\\det = 0$` with kernel span `$(2, -1)$`.'
      }
    ],
    keyTakeaways: [
      'Determinant nonzero, full pivots and trivial kernel are one bundle.',
      '`$[A \\mid I] \\to [I \\mid A^{-1}]$` inverts while recording the undo path.',
      '`$(AB)^{-1} = B^{-1}A^{-1}$` reverses product order.',
      'One witness such as a kernel vector certifies singularity.'
    ],
    quiz: [
      // PYQ-pattern: invertibility drill with changed two-by-two matrices (rephrased, values changed)
      {
        q: 'Which condition is equivalent to invertibility of square `$A$`?',
        options: ['`$\\det A = 0$`', '`$Ax = 0$` has only the trivial solution', '`$A$` has a zero row', '`$A$` has repeated entries'],
        answer: 1,
        explanation: 'Step 1: Invertible means trivial kernel. Step 2: So `$Ax = 0$` forces `$x = 0$`. Step 3: Zero determinant or zero rows break this. Step 4: Hence trivial-kernel is the equivalent call.'
      },
      {
        q: 'What is `$(AB)^{-1}$` for invertible `$A$` and `$B$`?',
        options: ['`$A^{-1}B^{-1}$`', '`$B^{-1}A^{-1}$`', '`$AB$`', '`$A + B$`'],
        answer: 1,
        explanation: 'Step 1: Undo `$AB$` means undo `$B$` then `$A$` last-applied-first-undone. Step 2: So `$B^{-1}$` acts first. Step 3: Then `$A^{-1}$` acts. Step 4: Hence `$B^{-1}A^{-1}$`.'
      },
      {
        q: 'Why is `$[[1, 2], [2, 4]]$` singular?',
        options: ['Its trace is `$5$`', 'Its rows are proportional giving `$\\det = 0$`', 'It is not square', 'Its entries are integers'],
        answer: 1,
        explanation: 'Step 1: Row two is twice row one. Step 2: So determinant is `$4 - 4 = 0$`. Step 3: Kernel contains `$(2, -1)$`. Step 4: Hence no inverse exists.'
      },
      {
        q: 'After reducing `$[A \\mid I]$` to `$[I \\mid M]$`, what is `$M$`?',
        options: ['The transpose of `$A$`', 'The determinant of `$A$`', 'The zero matrix', 'The inverse `$A^{-1}$`'],
        answer: 3,
        explanation: 'Step 1: Left block became `$I$`, so moves invert `$A$`. Step 2: Right block tracked the same moves from `$I$`. Step 3: Tracking inverts by construction. Step 4: So `$M = A^{-1}$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.3
  {
    sectionId: 'engmath-ch23-s3',
    readingTime: 10,
    intro: 'Eigenvalue sprints compress characteristic polynomials, eigenspaces and diagonalizability calls into two-minute computations. This workshop solves `$\\det(A - \\lambda I) = 0$` for `$2$`-by-`$2$` matrices, builds eigenspace bases and checks the `$2$`-by-`$2$` trace-determinant shortcut. Triangular matrices donate instant eigenvalues to keep the timer honest.',
    objectives: [
      'Form `$\\det(A - \\lambda I)$` and solve for eigenvalues of `$2$`-by-`$2$` matrices',
      'Build eigenspace bases by solving `$(A - \\lambda I)v = 0$`',
      'Call diagonalizability from eigenspace dimensions with shear awareness'
    ],
    concepts: [
      {
        term: 'Characteristic polynomial',
        kind: 'definition',
        statement: 'The **characteristic** polynomial `$p(\\lambda) = \\det(A - \\lambda I)$` has roots exactly at eigenvalues, the `charpoly` detector of Schaum 9.3. Degree equals matrix size, so `$2$`-by-`$2$` gives a quadratic solvable by factoring. Cayley-Hamilton adds that `$A$` satisfies its own `$p(A) = 0$`.',
        detail: 'Schaum 9.5 forms `$\\det [[3 - \\lambda, -2], [2, -2 - \\lambda]]$` style quadratics, then factors to `$\\lambda = 1$` and `$\\lambda = -1$`-type spectra.'
      },
      {
        term: 'Eigenspaces as null spaces',
        kind: 'method',
        statement: 'The **eigenspace** for `$\\lambda$` is `$\\ker(A - \\lambda I)$`, solved by the `eigenspace` elimination on the shifted matrix. Free variables become eigenvector directions, and pivots mark constrained slots. Nonzero solutions are mandatory since eigenvectors must be nonzero by definition.',
        detail: 'Shifting `$[[2, 1], [1, 2]]$` by `$\\lambda = 3$` gives `$[[-1, 1], [1, -1]]$`, whose null line is spanned by `$(1, 1)$`.'
      },
      {
        term: 'Trace-determinant shortcut',
        kind: 'insight',
        statement: 'For `$2$`-by-`$2$` the characteristic equation is **quadratic** `$\\lambda^{2} - (\\operatorname{tr} A)\\lambda + \\det A = 0$`, the `tracedet` sprint formula. Sum of eigenvalues equals trace while product equals determinant. Discriminant `$ (\\operatorname{tr} A)^{2} - 4\\det A$` predicts distinct, repeated or complex pairs.',
        detail: 'With `$\\operatorname{tr} = 4$` and `$\\det = 3$`, the equation `$\\lambda^{2} - 4\\lambda + 3 = 0$` factors as `$(\\lambda - 1)(\\lambda - 3)$` with eigenvalues `$1$` and `$3$`.'
      },
      {
        term: 'Triangular eigenvalues on display',
        kind: 'theorem',
        statement: 'A **triangular** matrix wears eigenvalues on its diagonal with no computation, the `triang` reading rule. Subtracting `$\\lambda I$` keeps triangularity, and the determinant product vanishes exactly at diagonal entries. Back substitution then builds eigenvectors row by row.',
        detail: 'Schaum 9.5 reads `$[[2, 5], [0, 7]]$` as eigenvalues `$2$` and `$7$`, then solves one `$1$`-dimensional null space per eigenvalue.'
      },
      {
        term: 'Diagonalizability call',
        kind: 'theorem',
        statement: 'A matrix is **diagonalizable** when eigenspaces span the whole space, equivalently enough independent eigenvectors for a basis, the `diag` spanning test. Distinct eigenvalues guarantee success, but repeated ones need full-dimensional eigenspaces. The shear `$[[1, 1], [0, 1]]$` fails with only one eigenvector direction for eigenvalue `$1$`.',
        detail: 'Schaum 9.4 contrasts `$[[2, 0], [0, 3]]$` with two eigenlines against the shear with one, deciding diagonalizable versus defective.'
      }
    ],
    figures: [
      {
        caption: 'Eigenvectors stay on their own lines with `$Av = \\lambda v$`: `$v_{1}$` stretches by `$3$` while `$v_{2}$` fixes direction with `$\\lambda = 1$`.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eigenvectors stretching along their own lines"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Eigenvectors keep their lines</text><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="320" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="260" x2="340" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="100" y1="260" x2="220" y2="220" stroke="currentColor" stroke-width="3"/><polygon points="220,220 208,220 213,231" fill="currentColor"/><line x1="100" y1="260" x2="340" y2="180" stroke="currentColor" stroke-width="3"/><polygon points="340,180 328,180 333,191" fill="currentColor"/><line x1="100" y1="260" x2="220" y2="140" stroke="currentColor" stroke-width="2.5"/><polygon points="220,140 213,151 224,151" fill="currentColor"/><line x1="220" y1="140" x2="300" y2="80" stroke="currentColor" stroke-width="2.5"/><polygon points="300,80 291,90 302,91" fill="currentColor"/><text x="232" y="214" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v1</text><text x="180" y="170" font-family="sans-serif" font-size="14" fill="currentColor">u swings</text><text x="360" y="300" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">only eigen-directions survive the map on-line</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Two-by-two eigenvalue sprint',
        problem: 'Find eigenvalues and one eigenvector each for `$A = [[2, 1], [1, 2]]$`, confirming with a script.',
        steps: [
          { label: 'Step 1: Characteristic quadratic', text: 'Trace `$4$` with determinant `$3$` gives `$\\lambda^{2} - 4\\lambda + 3 = 0$`, factoring as `$(\\lambda - 1)(\\lambda - 3)$`. Eigenvalues are `$1$` and `$3$`, distinct so diagonalizable.' },
          { label: 'Step 2: Eigenspaces plus script', text: '```python\nA = [[2, 1], [1, 2]]\ntr = A[0][0] + A[1][1]\ndet = A[0][0]*A[1][1] - A[0][1]*A[1][0]\nprint(tr, det)\n# check A*(1,1) and A*(1,-1)\nprint([2+1, 1+2], [2-1, 1-2])\n```\nFor `$\\lambda = 3$`, `$A - 3I = [[-1, 1], [1, -1]]$` gives `$y = x$` spanned by `$(1, 1)$`; for `$\\lambda = 1$`, `$[[1, 1], [1, 1]]$` gives `$y = -x$` spanned by `$(1, -1)$`; the script prints `$[3, 3]$` and `$[1, -1]$` as `$3(1, 1)$` and `$1(1, -1)$`.' },
          { label: 'Step 3: Call diagonalizable', text: 'Two independent eigenvectors in `$2$`-space span fully, so `$A = PDP^{-1}$` with `$D = [[3, 0], [0, 1]]$` and `$P = [[1, 1], [1, -1]]$`.' }
        ],
        result: 'Eigenvalues `$3$` with `$(1, 1)$` and `$1$` with `$(1, -1)$`; diagonalizable.'
      },
      {
        title: 'Triangular read plus shear warning',
        problem: 'Read eigenvalues of `$T = [[2, 5], [0, 7]]$` and of shear `$S = [[1, 1], [0, 1]]$`, then test diagonalizability.',
        steps: [
          { label: 'Step 1: Diagonal reading', text: '`$T$` gives `$2$` and `$7$` instantly; `$S$` gives `$1$` twice. No polynomial work is needed for triangular form.' },
          { label: 'Step 2: Eigenspace dimensions', text: '`$T$` has distinct eigenvalues so two lines automatically; `$S - I = [[0, 1], [0, 0]]$` has null space spanned by `$(1, 0)$` alone, dimension `$1$` short of `$2$`.' },
          { label: 'Step 3: Diagonalizability verdict', text: '`$T$` diagonalizes while shear `$S$` is defective, the canonical non-example.' }
        ],
        result: '`$T$` diagonalizable with `$2, 7$`; shear defective with repeated `$1$`.'
      }
    ],
    keyTakeaways: [
      '`$p(\\lambda) = \\det(A - \\lambda I)$` roots are exactly the eigenvalues.',
      'Eigenspaces solve `$(A - \\lambda I)v = 0$` with nonzero `$v$` only.',
      '`$2$`-by-`$2$` runs on `$\\lambda^{2} - (\\operatorname{tr} A)\\lambda + \\det A = 0$`.',
      'Diagonalizable needs eigenspaces spanning the space, not just eigenvalues.'
    ],
    quiz: [
      // PYQ-pattern: eigenvalue sprint with changed two-by-two matrices (rephrased, values changed)
      {
        q: 'What are the eigenvalues of `$[[2, 1], [1, 2]]$`?',
        options: ['`$0$` and `$4$`', '`$2$` and `$2$`', '`$1$` and `$3$`', '`$-1$` and `$-3$`'],
        answer: 2,
        explanation: 'Step 1: Trace is `$4$` and determinant is `$3$`. Step 2: Equation is `$\\lambda^{2} - 4\\lambda + 3 = 0$`. Step 3: Factors as `$(\\lambda - 1)(\\lambda - 3)$`. Step 4: Roots are `$1$` and `$3$`.'
      },
      {
        q: 'For `$\\lambda = 3$`, what spans `$\\ker(A - 3I)$` when `$A - 3I = [[-1, 1], [1, -1]]$`?',
        options: ['`$(1, 1)$`', 'The zero vector alone', '`$(1, 0)$`', '`$(0, 0)$` only'],
        answer: 0,
        explanation: 'Step 1: Equation is `$-x + y = 0$`. Step 2: So `$y = x$`. Step 3: Free variable `$x = t$` gives `$(t, t)$`. Step 4: Basis direction is `$(1, 1)$`.'
      },
      {
        q: 'Why is the shear `$[[1, 1], [0, 1]]$` not diagonalizable?',
        options: ['It is not square', 'Its determinant is zero', 'Repeated eigenvalue `$1$` owns only one eigenvector line', 'Its trace is zero'],
        answer: 2,
        explanation: 'Step 1: Eigenvalue `$1$` repeats twice. Step 2: Shift gives `$[[0, 1], [0, 0]]$`. Step 3: Null space is only the `$x$`-axis, dimension one. Step 4: One line cannot span `$2$`-space.'
      },
      {
        q: 'What are the eigenvalues of upper-triangular `$[[2, 5], [0, 7]]$`?',
        options: ['`$5$` and `$0$`', '`$2$` and `$7$`', '`$9$` and `$14$`', 'Cannot be read without expansion'],
        answer: 1,
        explanation: 'Step 1: Triangular determinant is the diagonal product. Step 2: So `$\\det(T - \\lambda I) = (2 - \\lambda)(7 - \\lambda)$`. Step 3: Zeros at `$2$` and `$7$`. Step 4: No expansion needed.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.4
  {
    sectionId: 'engmath-ch23-s4',
    readingTime: 7,
    intro: 'Dual spaces turn row-like functionals into a mirrored vector space with its own basis. This drill evaluates `$f(v)$` pairings, builds dual bases by the `$f_{i}(v_{j}) = 1$` or `$0$` rule and measures annihilators by `$\\dim W + \\dim W^{0} = n$`. Transpose matrices then appear as dual maps in coordinates.',
    objectives: [
      'Evaluate linear functionals and test linearity at speed',
      'Build dual bases from primal bases by biorthogonality solves',
      'Compute annihilator dimensions and transpose-as-dual matrices'
    ],
    concepts: [
      {
        term: 'Linear functionals',
        kind: 'definition',
        statement: 'A **functional** is a linear map `$f: V \\to K$` into scalars obeying `$f(u + v) = f(u) + f(v)$` and `$f(kv) = kf(v)$`, the `functional` linearity pair. Row vectors `$[a, b]$` acting by dot product are the prototype on `$K^{n}$`. Functionals add and scale pointwise into the dual space.',
        detail: 'Schaum 11.2 checks `$f(x, y) = 3x - 2y$` by `$f((1, 2) + (3, 4)) = f(1, 2) + f(3, 4)$` style additivity plus homogeneity.'
      },
      {
        term: 'Dual basis biorthogonality',
        kind: 'theorem',
        statement: 'Every basis `$\\{v_{i}\\}$` owns a **dual** basis `$\\{f_{i}\\}$` with `$f_{i}(v_{j}) = 1$` for `$i = j$` and `$0$` otherwise, the `dualbasis` biorthogonality table. Functionals are fixed by their values on a basis, so these `$n$` conditions pin down each `$f_{i}$`. Coordinates reappear as `$[v]_{i} = f_{i}(v)$`.',
        detail: 'Schaum 11.3 proves the `$f_{i}$` span `$V^{\\ast}$` by writing any `$f$` as `$f(v_{1})f_{1} + f(v_{2})f_{2}$` on `$2$`-space.'
      },
      {
        term: 'Double dual identification',
        kind: 'insight',
        statement: 'Finite-dimensional `$V$` is **naturally** identified with its double dual through `$v \\mapsto \\hat{v}$` with `$\\hat{v}(f) = f(v)$`, the `doubledual` evaluation flip. Dimensions match at `$\\dim V = \\dim V^{\\ast} = \\dim V^{\\ast\\ast}$`. The identification needs no basis choice, unlike dual bases themselves.',
        detail: 'Schaum 11.4 shows `$\\hat{}$` is injective since nonzero `$v$` admits some `$f$` with `$f(v) \\ne 0$`, then dimension forces isomorphism.'
      },
      {
        term: 'Annihilators and dimension balance',
        kind: 'definition',
        statement: 'The **annihilator** `$W^{0} = \\{f : f(w) = 0$` for all `$w \\in W\\}$` collects functionals killing `$W$`, measured by the `annih` balance `$\\dim W + \\dim W^{0} = \\dim V$`. Larger subspaces leave fewer killing functionals. The zero subspace is killed by everything while the whole space is killed only by zero.',
        detail: 'A one-dimensional line in `$\\mathbb{R}^{3}$` has two-dimensional annihilator, the plane of rows orthogonal to its direction.'
      },
      {
        term: 'Transpose as the dual map',
        kind: 'theorem',
        statement: 'Every `$F: V \\to U$` induces a **dual** map `$F^{t}: U^{\\ast} \\to V^{\\ast}$` by `$F^{t}(g) = g \\circ F$`, represented by the transpose matrix, the `transdual` correspondence. Rows become columns across the duality mirror. Rank is preserved since `$\\operatorname{rank} F^{t} = \\operatorname{rank} F$`.',
        detail: 'Schaum 11.8 represents `$F$` by `$A$` in primal bases and `$F^{t}$` by `$A^{T}$` in dual bases, proved by the pairing `$g(F(v)) = [g]^{T}A[v]$`.'
      }
    ],
    figures: [
      {
        caption: 'A functional `$f$` reads vectors by level lines: `$f(v) = 1$`, `$f(v) = 2$` stack parallel while the dual direction points uphill.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Linear functional level lines with uphill direction"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Functionals read by levels</text><line x1="150" y1="250" x2="350" y2="120" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="270" x2="400" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="250" y1="290" x2="450" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="200" x2="480" y2="200" stroke="currentColor" stroke-width="2.5"/><polygon points="480,200 468,195 468,205" fill="currentColor"/><text x="492" y="205" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">uphill f</text><text x="180" y="240" font-family="sans-serif" font-size="13" fill="currentColor">f=1</text><text x="260" y="260" font-family="sans-serif" font-size="13" fill="currentColor">f=2</text><text x="360" y="300" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">parallel levels plus one transverse arrow fix f</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Dual-basis sprint in the plane',
        problem: 'Find the dual basis of `$v_{1} = (1, 1)$`, `$v_{2} = (1, -1)$` for functionals `$f_{i}(x, y) = a_{i}x + b_{i}y$`.',
        steps: [
          { label: 'Step 1: Biorthogonality system', text: 'Demand `$f_{1}(v_{1}) = 1$`, `$f_{1}(v_{2}) = 0$`: `$a + b = 1$` with `$a - b = 0$`, giving `$a = b = 0.5$`. So `$f_{1}(x, y) = 0.5x + 0.5y$`.' },
          { label: 'Step 2: Second functional plus script', text: '```python\n# solve [v1 v2]^T [a b] = e_i by Cramer on [[1,1],[1,-1]]\nD = 1*(-1) - 1*1\na1 = (1*(-1) - 1*0)/D\nb1 = (1*0 - 1*1)/D * -1\nprint(D, a1, b1)\n```\nSimilarly `$f_{2}(v_{1}) = 0$`, `$f_{2}(v_{2}) = 1$` gives `$a = 0.5$`, `$b = -0.5$`; the script confirms `$D = -2$` with `$0.5$` magnitudes.' },
          { label: 'Step 3: Read coordinates back', text: 'Any `$(x, y) = f_{1}(v)v_{1} + f_{2}(v)v_{2}$`; for `$(4, 2)$` this gives `$3v_{1} + 1v_{2}$`, matching the earlier coordinate sprint.' }
        ],
        result: 'Dual basis `$f_{1} = 0.5x + 0.5y$`, `$f_{2} = 0.5x - 0.5y$`.'
      },
      {
        title: 'Annihilator dimension sprint',
        problem: 'Let `$W$` be the `$x$`-axis in `$\\mathbb{R}^{3}$`. Describe `$W^{0}$` and verify `$\\dim W + \\dim W^{0} = 3$`.',
        steps: [
          { label: 'Step 1: Killing condition', text: 'Functionals `$f(x, y, z) = ax + by + cz$` kill `$(t, 0, 0)$` exactly when `$at = 0$` for all `$t$`, so `$a = 0$`. No condition falls on `$b, c$`.' },
          { label: 'Step 2: Parametrize the annihilator', text: '`$W^{0} = \\{by + cz\\}$` spanned by the coordinate functionals `$y$` and `$z$`, dimension `$2$`.' },
          { label: 'Step 3: Balance check', text: '`$1 + 2 = 3$` confirms the annihilator formula for a line in `$3$`-space.' }
        ],
        result: '`$W^{0} = \\operatorname{span}(y, z)$` with `$1 + 2 = 3$`.'
      }
    ],
    keyTakeaways: [
      'Functionals are row-like maps `$V \\to K$` fixed by values on a basis.',
      'Dual bases satisfy `$f_{i}(v_{j}) = 1$` on the diagonal and `$0$` off it.',
      '`$\\dim W + \\dim W^{0} = \\dim V$` measures every annihilator.',
      'Dual maps transpose matrices with rank preserved.'
    ],
    quiz: [
      // PYQ-pattern: dual space drill with changed bases (rephrased, values changed)
      {
        q: 'Which map is a linear functional on `$\\mathbb{R}^{2}$`?',
        options: ['`$f(x, y) = x^{2} + y$`', '`$f(x, y) = 3x - 2y$`', '`$f(x, y) = 1$` constantly', '`$f(x, y) = xy$`'],
        answer: 1,
        explanation: 'Step 1: Functionals need additivity plus homogeneity. Step 2: Squares and products break scaling. Step 3: Constants break zero mapping. Step 4: Only `$3x - 2y$` is linear.'
      },
      {
        q: 'For basis `$v_{1} = (1, 1)$`, `$v_{2} = (1, -1)$`, what is dual `$f_{1}$`?',
        options: ['`$f_{1}(x, y) = x + y$`', '`$f_{1}(x, y) = 0.5x + 0.5y$`', '`$f_{1}(x, y) = x - y$`', '`$f_{1}(x, y) = 0$`'],
        answer: 1,
        explanation: 'Step 1: Need `$f_{1}(v_{1}) = 1$` and `$f_{1}(v_{2}) = 0$`. Step 2: So `$a + b = 1$` and `$a - b = 0$`. Step 3: Solve to `$a = b = 0.5$`. Step 4: Hence `$0.5x + 0.5y$`.'
      },
      {
        q: 'A `$1$`-dimensional line `$W$` in `$\\mathbb{R}^{3}$` has annihilator of dimension what?',
        options: ['`$0$`', '`$1$`', '`$2$`', '`$3$`'],
        answer: 2,
        explanation: 'Step 1: Balance is `$\\dim W + \\dim W^{0} = 3$`. Step 2: So `$\\dim W^{0} = 3 - 1$`. Step 3: That equals `$2$`. Step 4: Concretely `$\\operatorname{span}(y, z)$`.'
      },
      {
        q: 'If `$F$` has matrix `$A$` in primal bases, what represents `$F^{t}$` in dual bases?',
        options: ['`$A^{-1}$`', '`$A^{2}$`', '`$A$` unchanged', 'The transpose `$A^{T}$`'],
        answer: 3,
        explanation: 'Step 1: Dual pairing is `$g(F(v))$`. Step 2: In coordinates that is `$[g]^{T}A[v]$`. Step 3: Regroup as `$(A^{T}[g])^{T}[v]$`. Step 4: So the dual matrix is `$A^{T}$`.'
      }
    ]
  }
]
