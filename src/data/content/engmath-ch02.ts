import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 2: Eigenvalues, Diagonalization and LU
// Sections 2.1 – 2.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'engmath-ch2-s1',
    readingTime: 9,
    intro: 'Eigenvalues expose the directions along which a matrix acts by pure scaling, reducing complicated transformations to stretches and flips. This section builds the characteristic equation, eigenspaces, and the trace-determinant shortcuts that read eigenvalues without full expansion. Symmetric and triangular matrices receive special treatment because their spectra are visible almost immediately.',
    objectives: [
      'Form `$|A - \\lambda I| = 0$` and solve for eigenvalues, then find eigenvectors',
      'Apply trace-equals-sum and determinant-equals-product checks to spectra',
      'State the symmetric and triangular eigenvalue shortcuts and their eigenvector consequences'
    ],
    concepts: [
      {
        term: 'Characteristic equation',
        kind: 'definition',
        statement: 'A scalar `$\\lambda$` is an **eigenvalue** with nonzero vector `$v$` when `$Av = \\lambda v$`, equivalently when `$A - \\lambda I$` is singular so that `$|A - \\lambda I| = 0$`. The `characteristic` polynomial `$p(\\lambda) = |A - \\lambda I|$` has degree `$n$` for `$n \\times n$` matrices, and its roots counted with multiplicity are the full spectrum. Each eigenvalue is found first, and only then are eigenvectors solved from `$(A - \\lambda I)v = 0$`.',
        detail: 'The zero vector never counts as an eigenvector, though `$\\lambda = 0$` is a legitimate eigenvalue exactly when `$A$` is singular.'
      },
      {
        term: 'Eigenspaces and geometric multiplicity',
        kind: 'definition',
        statement: 'For fixed `$\\lambda$`, the solution set of `$(A - \\lambda I)v = 0$` plus the zero vector forms the **eigenspace** `$E_\\lambda$`, a subspace whose dimension is the geometric multiplicity. The `eigenspace` is the null space of $A - \\lambda I$, so its dimension equals `$n - \\rho(A - \\lambda I)$`. Eigenvectors from distinct eigenvalues are always linearly independent, which is why enough distinct eigenvalues guarantee diagonalizability later.',
        detail: 'Geometric multiplicity never exceeds algebraic multiplicity, and a strict shortfall marks a defective eigenvalue.'
      },
      {
        term: 'Trace is the sum and determinant is the product',
        kind: 'theorem',
        statement: 'The **spectral checks** state `$\\mathrm{tr}(A) = \\lambda_1 + \\cdots + \\lambda_n$` and `$|A| = \\lambda_1 \\cdots \\lambda_n$` with multiplicities included. The `trace` identity follows from matching the `$\\lambda^{n-1}$` coefficient of the characteristic polynomial, and the product identity follows by setting `$\\lambda = 0$`. Any claimed spectrum that fails either check is wrong before further work begins.',
        detail: 'A zero eigenvalue forces $|A| = 0$, and a negative determinant for odd `$n$` forces an odd count of negative real eigenvalues.'
      },
      {
        term: 'Triangular and diagonal spectra',
        kind: 'theorem',
        statement: 'A **triangular** or diagonal matrix wears its eigenvalues on the diagonal, since `$|A - \\lambda I|$` stays triangular with diagonal entries `$a_{ii} - \\lambda$`. The `diagonal` case decouples completely: `$e_1, \\dots, e_n$` are eigenvectors with eigenvalues `$a_{11}, \\dots, a_{nn}$`. Repeated diagonal entries still diagonalize here, unlike general matrices where repetition may defect.',
        detail: 'Reading eigenvalues off a triangular diagonal is instant, but eigenvectors still require solving each singular system.'
      },
      {
        term: 'Real symmetric spectra are fully real',
        kind: 'insight',
        statement: 'A real **symmetric** matrix has all eigenvalues real, and eigenvectors from distinct eigenvalues emerge automatically orthogonal. The `symmetric` guarantee removes complex arithmetic from the spectrum entirely, a sharp contrast with general real matrices whose complex eigenvalues arrive in conjugate pairs. Orthogonal diagonalization of symmetric matrices in the next section rests entirely on this reality plus orthogonality.',
        detail: 'Skew-symmetric real matrices mirror this with purely imaginary eigenvalues, and orthogonal matrices confine theirs to the unit circle `$|\\lambda| = 1$`.'
      }
    ],
    examples: [
      {
        title: 'Compute the full spectrum of a 2x2 matrix',
        problem: 'Find all eigenvalues and one eigenvector each for $$A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$$',
        steps: [
          { label: 'Step 1: Characteristic polynomial', text: '```text\nA - λI = [4-λ 1; 2 3-λ]\n|A - λI| = (4-λ)(3-λ) - 2 = λ^2 - 7λ + 10\nRoots: λ = 5 and λ = 2\n```\nThe quadratic `$\\lambda^2 - 7\\lambda + 10 = 0$` factors as `$(\\lambda - 5)(\\lambda - 2)$`, giving the **eigenvalues** `$5$` and `$2$`.' },
          { label: 'Step 2: Eigenvector for λ = 5', text: 'Solve `$(A - 5I)v = 0$`, i.e. `$-x + y = 0$` with `$2x - 2y = 0$` redundant, so `$y = x$`. Choosing `$x = 1$` yields `$v_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$`, and `$Av_1 = 5v_1$` checks out.' },
          { label: 'Step 3: Eigenvector for λ = 2 and checks', text: 'Solve `$(A - 2I)v = 0$`, i.e. `$2x + y = 0$`, giving `$v_2 = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}$`. Spectral checks pass: sum `$5 + 2 = 7 = \\mathrm{tr}(A)$` and product `$10 = |A|$`.' }
        ],
        result: 'Eigenvalues `$5$` and `$2$` with eigenvectors `$[1, 1]^T$` and `$[1, -2]^T$` up to scaling.'
      },
      {
        title: 'Read a triangular spectrum and test independence',
        problem: 'For $$T = \\begin{bmatrix} 2 & 5 & 1 \\\\ 0 & 2 & 3 \\\\ 0 & 0 & 7 \\end{bmatrix}$$ list eigenvalues with algebraic multiplicities and decide whether three independent eigenvectors exist.',
        steps: [
          { label: 'Step 1: Read the diagonal', text: '```text\nT is upper-triangular -> eigenvalues are diagonal entries\nλ = 2 (twice), λ = 7 (once)\nTrace check: 2 + 2 + 7 = 11 = tr(T)\n```\nThe **triangular** shortcut gives the spectrum with no polynomial work, and the `trace` sum `$11$` confirms the listing.' },
          { label: 'Step 2: Eigenspace for λ = 7', text: 'Solving `$(T - 7I)v = 0$` gives full rank `$2$` in the coefficient part, leaving a one-dimensional space spanned by a vector with nonzero third component. Geometric multiplicity is `$1$`, matching algebraic `$1$`.' },
          { label: 'Step 3: Eigenspace for λ = 2', text: 'Here `$T - 2I$` has only one independent row beyond zeros in a way that leaves rank `$2$`, so nullity is `$3 - 2 = 1$` against algebraic `$2$`. The shortfall means only two independent eigenvectors exist in total, so `$T$` is defective.' }
        ],
        result: 'Spectrum `$2, 2, 7$` but only two independent eigenvectors: defective, not diagonalizable.'
      }
    ],
    keyTakeaways: [
      'Solve `$|A - \\lambda I| = 0$` for eigenvalues, then `$(A - \\lambda I)v = 0$` for eigenvectors; zero vector never qualifies.',
      'Verify every spectrum with `$\\sum \\lambda_i = \\mathrm{tr}(A)$` and `$\\prod \\lambda_i = |A|$`.',
      'Triangular spectra sit on the diagonal; symmetric spectra are real with orthogonal eigenspaces.',
      'Geometric multiplicity `$\\le$` algebraic multiplicity; a shortfall means defective.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2010 — eigenvalues of a 2x2 matrix (rephrased)
      {
        q: 'The eigenvalues of $$A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$$ are:',
        options: [`$5$ and $2$`, `$4$ and $3$`, `$6$ and $1$`, `$3$ and $3$`],
        answer: 0,
        explanation: 'First form `$|A - \\lambda I| = \\lambda^2 - 7\\lambda + 10$`. Next factor as `$(\\lambda - 5)(\\lambda - 2)$`. Then roots are `$5$` and `$2$`. Finally the trace check `$7$` and determinant check `$10$` both pass.'
      },
      {
        q: 'A `$3 \\times 3$` matrix has trace `$6$` and eigenvalues `$1$` and `$2$` plus one unknown. The unknown eigenvalue is:',
        options: [`$1$`, `$2$`, `$3$`, `$6$`],
        answer: 2,
        explanation: 'First apply `$\\mathrm{tr}(A) = \\lambda_1 + \\lambda_2 + \\lambda_3$`. Next substitute `$6 = 1 + 2 + \\lambda_3$`. Then solve `$\\lambda_3 = 3$`. Finally note no determinant data was needed.'
      },
      // PYQ-pattern: GATE 2016 — eigenvalues of triangular matrix (rephrased)
      {
        q: 'Eigenvalues of every upper-triangular matrix are:',
        options: ['Always all zero', 'Always all distinct', 'Exactly the diagonal entries', 'Always all equal to the trace'],
        answer: 2,
        explanation: 'First `$A - \\lambda I$` stays upper-triangular with diagonal `$a_{ii} - \\lambda$`. Next its determinant is the product `$\\prod (a_{ii} - \\lambda)$`. Then zeros occur exactly at `$\\lambda = a_{ii}$`. Finally multiplicities follow diagonal repetition.'
      },
      {
        q: 'If `$Av = \\lambda v$` with `$v \\ne 0$` and `$k$` is a positive integer, what is `$A^k v$`?',
        options: [`$k\\lambda v$`, `$\\lambda^k v$`, `$kA v$`, 'Always the zero vector'],
        answer: 1,
        explanation: 'First apply `$A$` once to get `$\\lambda v$`. Next each further application pulls out one more factor `$\\lambda$`. Then after `$k$` rounds the accumulated scalar is `$\\lambda^k$`. Finally the direction `$v$` is unchanged.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Characteristic polynomials over general fields',
        blocks: [
          {
            kind: 'theorem',
            body: 'Scalars $\\lambda$ with $A v = \\lambda v$ for nonzero $v$ are exactly the roots of $p_{A}(\\lambda) = \\det(A - \\lambda I)$. If $p_{A}(\\lambda) = \\prod_{j} (\\lambda_{j} - \\lambda)^{a_{j}}$ over an algebraic closure, then $\\mathrm{tr}(A) = \\sum_{j} a_{j} \\lambda_{j}$ and $\\det(A) = \\prod_{j} \\lambda_{j}^{a_{j}}$. For each eigenvalue the **geometric multiplicity** $g_{j} = \\dim \\ker(A - \\lambda_{j} I)$ satisfies $1 \\leq g_{j} \\leq a_{j}$, where $a_{j}$ is the algebraic multiplicity. Triangular matrices display the spectrum on the diagonal, and diagonalizable matrices attain $g_{j} = a_{j}$ for all $j$.'
          },
          {
            kind: 'proof',
            body: 'Over $\\mathbb{C}$ every $A$ is unitarily triangularizable as $A = Q T Q^{\\ast}$ with $T$ upper triangular, by induction on invariant subspaces. Then $\\det(A - \\lambda I) = \\prod_{k} (t_{kk} - \\lambda)$, so eigenvalues are diagonal entries counted with multiplicity. The trace and determinant formulas follow from the constant and leading coefficients of $p_{A}$. The inequality $g_{j} \\leq a_{j}$ holds because $g_{j}$ independent eigenvectors extend to a basis in which $A - \\lambda_{j} I$ has a zero block of size $g_{j}$, forcing $(\\lambda_{j} - \\lambda)^{g_{j}}$ to divide $p_{A}(\\lambda)$.'
          },
          {
            kind: 'example',
            heading: 'A shear with one eigenline but a double root',
            body: 'The shear $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$ has $p_{A}(\\lambda) = (2 - \\lambda)^{2}$, so $\\lambda = 2$ has algebraic multiplicity $2$. Solving $(A - 2I)v = 0$ gives $\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix} v = 0$, hence $v$ is a multiple of $(1, 0)^{T}$ and $g = 1 < 2 = a$. No two independent eigenvectors exist, so $A$ cannot diagonalize. This gap $g < a$ is the precise obstruction: diagonalizability is the statement that the gaps close for every eigenvalue, equivalently that the minimal polynomial splits with distinct linear factors.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'engmath-ch2-s2',
    readingTime: 10,
    intro: 'Cayley-Hamilton lets a matrix satisfy its own characteristic equation, turning high powers and inverses into low-degree polynomial arithmetic. Diagonalization goes further by changing basis until the matrix becomes diagonal. This section pairs the power-reduction tool with the exact diagonalizability test and the special symmetric guarantee.',
    objectives: [
      'State Cayley-Hamilton and use it to reduce `$A^3$` and above to lower-degree expressions',
      'Test diagonalizability via independent eigenvector count and minimal polynomial splitting',
      'Diagonalize `$2 \\times 2$` matrices explicitly as `$A = PDP^{-1}$`'
    ],
    concepts: [
      {
        term: 'Cayley-Hamilton theorem',
        kind: 'theorem',
        statement: 'Every square matrix **satisfies its own characteristic equation**: if `$p(\\lambda) = |A - \\lambda I|$`, then `$p(A) = O$` upon replacing `$\\lambda$` by `$A$` and constants by scalar matrices. The `characteristic` polynomial of degree `$n$` thus yields a relation expressing `$A^n$` through `$I, A, \\dots, A^{n-1}$`. All higher powers reduce recursively, so no power ever escapes the span of the first `$n$` powers.',
        detail: 'For `$2 \\times 2$` with `$p(\\lambda) = \\lambda^2 - t\\lambda + d$`, the relation is `$A^2 = tA - dI$` with trace `$t$` and determinant `$d$`.'
      },
      {
        term: 'Inverse and powers from the characteristic relation',
        kind: 'method',
        statement: 'When `$|A| \\ne 0$`, the constant term of `$p(A) = O$` is nonzero and can be rearranged to isolate `$I$`, giving `$A^{-1}$` as an explicit polynomial in `$A$` with no elimination. The `inverse` of a `$2 \\times 2$` follows in one line, and repeated reduction computes `$A^3, A^4, e^A$` truncated series terms purely by substitution. Singular matrices still satisfy `$p(A) = O$` but yield no inverse, since the constant term vanishes.',
        detail: 'This polynomial route shines for small matrices and theory questions, while elimination wins for large numerical inverses.'
      },
      {
        term: 'Diagonalizability test',
        kind: 'theorem',
        statement: 'A matrix `$A$` is **diagonalizable** exactly when it owns `$n$` linearly independent eigenvectors, equivalently when `$A = PDP^{-1}$` with `$D$` diagonal and `$P$` holding the eigenvectors as columns. The `diagonal` entries of `$D$` are the eigenvalues matched to their columns of $P$, and powers collapse to `$A^k = PD^kP^{-1}$`. Distinct eigenvalues always suffice but are not necessary, since repeated eigenvalues may still supply full eigenspaces.',
        detail: 'Defective matrices fail the count and admit only Jordan form, never a pure diagonal `$D$`.'
      },
      {
        term: 'Similar matrices share spectral invariants',
        kind: 'insight',
        statement: 'Matrices related by `$B = P^{-1}AP$` are called **similar** and share eigenvalues, trace, determinant, rank, and characteristic polynomial. The `similar` transform is a change of basis, so it preserves the underlying linear map while changing its coordinate description. Diagonalization is the quest for the most similar-to-diagonal representative of the map.',
        detail: 'Eigenvectors transform as $w = P^{-1}v$, so similar matrices have matched, not identical, eigenvectors.'
      },
      {
        term: 'Symmetric matrices diagonalize orthogonally',
        kind: 'theorem',
        statement: 'Every real symmetric matrix is **orthogonally diagonalizable**: there exists orthogonal `$Q$` with `$A = QDQ^T$` and real diagonal `$D$`. The `orthogonal` diagonalizer has orthonormal eigenvector columns, so inversion is free via `$Q^{-1} = Q^T$`. This spectral decomposition underlies quadratic forms, principal axes, and covariance analysis.',
        detail: 'Repeated eigenvalues cause no defect here, because symmetric eigenspaces always achieve full dimension.'
      }
    ],
    examples: [
      {
        title: 'Reduce A cubed with Cayley-Hamilton',
        problem: 'Let $$A = \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$$ Use Cayley-Hamilton to express `$A^3$` through `$I$` and `$A$`, then evaluate.',
        steps: [
          { label: 'Step 1: Characteristic polynomial', text: '```text\nTriangular -> eigenvalues 1 and 3\np(λ) = (λ-1)(λ-3) = λ^2 - 4λ + 3\nCayley-Hamilton: A^2 - 4A + 3I = O\n```\nThe **characteristic** relation gives `$A^2 = 4A - 3I$`, the reduction rule for all higher powers.' },
          { label: 'Step 2: Multiply up once', text: 'Multiply by `$A$` to get `$A^3 = 4A^2 - 3A$`, then substitute `$A^2$` again: `$A^3 = 4(4A - 3I) - 3A = 13A - 12I$`. The `polynomial` reduction keeps degree below two at every stage.' },
          { label: 'Step 3: Evaluate', text: 'Insert `$A$` and `$I$` to get $$A^3 = 13\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix} - 12\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 26 \\\\ 0 & 27 \\end{bmatrix}$$ Diagonal entries `$1^3$` and `$3^3$` confirm the triangular power rule.' }
        ],
        result: '`$A^3 = 13A - 12I$`, numerically `$\\begin{bmatrix} 1 & 26 \\\\ 0 & 27 \\end{bmatrix}$`.'
      },
      {
        title: 'Diagonalize a 2x2 matrix as PDP inverse',
        problem: 'Diagonalize $$A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$$ from the previous section as `$A = PDP^{-1}$` and write `$A^2$` via `$D$`.',
        steps: [
          { label: 'Step 1: Assemble P and D', text: '```text\nEigenvalues: 5 and 2\nv1 = [1; 1] for λ=5, v2 = [1; -2] for λ=2\nP = [v1 v2], D = diag(5, 2)\n```\nColumns of `$P$` are eigenvectors in the order matching the `diagonal` of `$D$`, and `$|P| = -3 \\ne 0$` confirms independence.' },
          { label: 'Step 2: Invert P', text: 'Using the `$2 \\times 2$` shortcut, $$P^{-1} = \\frac{1}{-3}\\begin{bmatrix} -2 & -1 \\\\ -1 & 1 \\end{bmatrix} = \\begin{bmatrix} 2/3 & 1/3 \\\\ 1/3 & -1/3 \\end{bmatrix}$$ written with fractions `$\\frac{2}{3}$`, `$\\frac{1}{3}$`, `$-\\frac{1}{3}$` in KaTeX. Then `$A = PDP^{-1}$` holds by construction.' },
          { label: 'Step 3: Square via D', text: 'Powers hit only `$D$`: `$A^2 = PD^2P^{-1}$` with `$D^2 = \\mathrm{diag}(25, 4)$`. One short multiplication recovers `$A^2$` without squaring `$A$` directly.' }
        ],
        result: 'With `$P = [v_1 \\; v_2]$` and `$D = \\mathrm{diag}(5,2)$`, `$A = PDP^{-1}$` and `$A^k = PD^kP^{-1}$`.'
      }
    ],
    keyTakeaways: [
      'Cayley-Hamilton `$p(A) = O$` reduces every `$A^n$` to degree below `$n$`, and yields `$A^{-1}$` as a polynomial when `$|A| \\ne 0$`.',
      'Diagonalizable exactly with `$n$` independent eigenvectors; then `$A = PDP^{-1}$` and `$A^k = PD^kP^{-1}$`.',
      'Similarity preserves eigenvalues, trace, determinant, rank and characteristic polynomial.',
      'Real symmetric matrices always admit `$A = QDQ^T$` with orthogonal `$Q$` and real `$D$`.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2008 — Cayley-Hamilton power reduction (rephrased)
      {
        q: 'Matrix `$A$` has characteristic `$p(\\lambda) = \\lambda^2 - 4\\lambda + 3$`. Which matrix identity holds?',
        options: [`$A^2 + 4A + 3I = O$`, `$A^2 - 4A + 3I = O$`, `$A^2 - 4A - 3I = O$`, 'No relation: the theorem applies only to symmetric matrices'],
        answer: 1,
        explanation: 'First state Cayley-Hamilton: `$p(A) = O$`. Next substitute `$A$` for `$\\lambda$` and `$3I$` for `$3$`. Then `$A^2 - 4A + 3I = O$` follows directly. Finally the theorem needs no symmetry hypothesis.'
      },
      {
        q: 'If `$A = PDP^{-1}$` with `$D = \\mathrm{diag}(2, -1)$`, what is `$A^3$`?',
        options: ['$PD^3P^{-1}$ with `$D^3 = \\mathrm{diag}(8, -1)$`', `$P^3 D P^{-3}$`, `$PDP^{-1}$ cubed entry by entry on $P$`, `$D^3 P^{-1} D$`],
        answer: 0,
        explanation: 'First expand `$A^3 = PDP^{-1}PDP^{-1}PDP^{-1}$`. Next adjacent `$P^{-1}P$` pairs cancel to `$I$`. Then only `$PD^3P^{-1}$` survives. Finally cube the diagonal: `$2^3 = 8$` and `$(-1)^3 = -1$`.'
      },
      // PYQ-pattern: GATE 2019 — diagonalizability of a defective matrix (rephrased)
      {
        q: 'A `$3 \\times 3$` matrix has eigenvalue `$2$` of algebraic multiplicity `$3$` but eigenspace dimension `$1$`. It is:',
        options: ['Diagonalizable with $D = 2I$', 'Diagonalizable by a complex $P$', 'Not diagonalizable (defective)', 'Diagonalizable after one row swap'],
        answer: 2,
        explanation: 'First count independent eigenvectors: only `$1$` from the short eigenspace. Next diagonalizability needs `$3$` independent eigenvectors. Then algebraic `$3$` versus geometric `$1$` marks defect. Finally no change of basis can repair the missing directions.'
      },
      {
        q: 'Which property is preserved under similarity `$B = P^{-1}AP$`?',
        options: ['The exact eigenvector matrix `$P$` itself', 'Eigenvalues, trace and determinant', 'The diagonal entries in order', 'Symmetry of `$P$` alone'],
        answer: 1,
        explanation: 'First similarity is a basis change of the same linear map. Next eigenvalues solve `$|A - \\lambda I| = 0$` which is invariant. Then trace and determinant follow as spectral sums and products. Finally entries and eigenvector coordinates do change with basis.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Cayley-Hamilton beyond hand computation',
        blocks: [
          {
            kind: 'theorem',
            body: 'Every square $A$ annihilates its own characteristic polynomial: if $p_{A}(s) = \\det(sI - A) = s^{n} + c_{n-1} s^{n-1} + \\cdots + c_{0}$ then $p_{A}(A) = A^{n} + c_{n-1} A^{n-1} + \\cdots + c_{0} I = 0$. Consequently the **minimal polynomial** $m_{A}$, the monic polynomial of least degree with $m_{A}(A) = 0$, divides $p_{A}$ and shares exactly the same irreducible factors. Powers $A^{k}$ for $k \\geq n$ and, when $A$ is invertible, $A^{-1} = -c_{0}^{-1}(A^{n-1} + \\cdots + c_{1} I)$ reduce to degree below $n$.'
          },
          {
            kind: 'proof',
            body: 'One clean proof uses density: diagonalizable matrices are dense over $\\mathbb{C}$, since a matrix with $n$ distinct eigenvalues is diagonalizable and arbitrarily small perturbations separate repeated eigenvalues. The identity $p_{X}(X) = 0$ is obvious on diagonalizable $X = S D S^{-1}$ because it holds on each eigenvalue, and both sides depend continuously on the entries of $X$. Hence the identity persists on the closure, all matrices. The classical adjugate proof writes $(sI - A) \\, \\mathrm{adj}(sI - A) = p_{A}(s) I$ as a polynomial identity in $s$ and equates operator coefficients.'
          },
          {
            kind: 'remark',
            body: 'The theorem turns high powers into Krylov arithmetic: $e^{A}$, resolvents $(sI - A)^{-1}$ and recurrences $x_{k+1} = A x_{k}$ all collapse to polynomials of degree below $n$. Numerically the Faddeeva LeVerrier recursion extracts the coefficients $c_{k}$ alongside the adjugate, while control theory uses $p_{A}(A) = 0$ to prove that the controllability matrix $[B \\, A B \\, \\cdots \\, A^{n-1} B]$ already spans every reachable direction. The rational canonical form refines the picture: invariant factors interpolate between $m_{A}$ and $p_{A}$.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'engmath-ch2-s3',
    readingTime: 8,
    intro: 'Vector spaces abstract the familiar rules of arrows and function spaces into span, independence, basis and dimension. Rank-nullity then ties the shape of a matrix to the dimensions of its row space and null space. This section supplies the geometry behind elimination: pivots count basis vectors, free variables count null directions.',
    objectives: [
      'Test sets for span, independence, subspace closure and basis status',
      'Compute dimension and coordinates relative to a basis',
      'Apply rank-nullity `$\\mathrm{rank} + \\mathrm{nullity} = n$` to solution geometry'
    ],
    concepts: [
      {
        term: 'Span and subspaces',
        kind: 'definition',
        statement: 'The **span** of vectors is the set of all their linear combinations `$c_1 v_1 + \\cdots + c_k v_k$`, and a **subspace** is a subset closed under addition and scalar multiplication containing the zero vector. The `span` of any set is automatically the smallest subspace holding it. Lines and planes through the origin qualify, while translated lines missing the origin do not.',
        detail: 'Column space and null space are the two subspaces attached to every matrix, living in `$\\mathbb{R}^m$` and `$\\mathbb{R}^n$` respectively.'
      },
      {
        term: 'Linear independence and dependence',
        kind: 'definition',
        statement: 'Vectors are **independent** when `$c_1 v_1 + \\cdots + c_k v_k = 0$` forces every `$c_i = 0$`, and **dependent** when some nontrivial relation exists. The `independent` test runs elimination on the matrix with these vectors as columns: full column rank means independent. Any set containing the zero vector or a repeated vector is dependent at once.',
        detail: 'In $\\mathbb{R}^n$, any `$n+1$` vectors are automatically dependent, since rank cannot exceed `$n$`.'
      },
      {
        term: 'Basis and dimension',
        kind: 'definition',
        statement: 'A **basis** is an independent spanning set, so every vector has unique coordinates `$x = c_1 b_1 + \\cdots + c_n b_n$` relative to it. The `basis` size is fixed for a space and called its **dimension**, with `$\\dim(\\mathbb{R}^n) = n$`. The standard basis `$e_1, \\dots, e_n$` gives raw components, while eigenbases and orthogonal bases simplify maps and projections.',
        detail: 'To extend an independent set to a basis, adjoin vectors outside the current span one at a time until spanning holds.'
      },
      {
        term: 'Rank-nullity theorem',
        kind: 'theorem',
        statement: 'For `$m \\times n$` matrix $A$, **rank plus nullity equals `$n$`**: `$\\rho(A) + \\dim(\\ker A) = n$`, where nullity counts free variables. The `nullity` measures the solution space of $Ax = 0$, so each pivot removes one null direction. Full column rank `$\\rho = n$` forces nullity zero and a trivial-only homogeneous solution.',
        detail: 'Row rank equals column rank, so the same `$\\rho$` serves both the row space in `$\\mathbb{R}^n$` and the column space in `$\\mathbb{R}^m$`.'
      },
      {
        term: 'Coordinates depend on the basis, geometry does not',
        kind: 'insight',
        statement: 'The same vector carries **different coordinate tuples** under different bases, related by an invertible change-of-basis matrix `$[x]_C = P^{-1}[x]_B$`. The `coordinates` are labels while span, independence and dimension are intrinsic geometry. Confusing a coordinate tuple with the vector itself is why basis-change slips occur.',
        detail: 'Choosing an eigenbasis diagonalizes the coordinate map, turning iteration `$x_{k+1} = Ax_k$` into independent scalar recurrences.'
      }
    ],
    examples: [
      {
        title: 'Test independence and build a basis',
        problem: 'In $\\mathbb{R}^3$, test `$v_1 = (1,0,0)$`, `$v_2 = (1,1,0)$`, `$v_3 = (1,1,1)$` for independence, and express `$x = (2,3,4)$` in this basis.',
        steps: [
          { label: 'Step 1: Elimination test', text: '```text\nColumns matrix: [1 1 1; 0 1 1; 0 0 1]\nAlready upper-triangular, pivots in all 3 columns\nDeterminant = 1 (nonzero) -> independent\n```\nThree pivots in three columns certify **independence**, and since three independent vectors in `$\\mathbb{R}^3$` must span, they form a `basis`.' },
          { label: 'Step 2: Solve for coordinates', text: 'Write `$c_1 v_1 + c_2 v_2 + c_3 v_3 = x$`: bottom row gives `$c_3 = 4$`, middle gives `$c_2 + c_3 = 3$` so `$c_2 = -1$`, top gives `$c_1 + c_2 + c_3 = 2$` so `$c_1 = -1$`. Back substitution up the triangular system yields coordinates `$(-1, -1, 4)$`.' },
          { label: 'Step 3: Verify', text: 'Recombine `$-v_1 - v_2 + 4v_3 = (-1-1+4, -1+4, 4) = (2, 3, 4)$`. Uniqueness of basis coordinates guarantees no second triple works.' }
        ],
        result: 'Independent, hence a basis, with `$[x]_B = (-1, -1, 4)$`.'
      },
      {
        title: 'Apply rank-nullity to a solution space',
        problem: 'Matrix `$A$` is `$4 \\times 5$` with `$\\rho(A) = 3$`. Find the nullity and describe `$Ax = 0$` geometrically.',
        steps: [
          { label: 'Step 1: Rank-nullity', text: '```text\nn = 5 columns, rank = 3\nnullity = n - rank = 5 - 3 = 2\nFree variables: 2; pivots: 3\n```\nThe formula `$\\rho + \\mathrm{nullity} = n$` converts one rank number into the full solution dimension.' },
          { label: 'Step 2: Geometry', text: 'Two free variables span a **two-dimensional** subspace (a plane through the origin) in `$\\mathbb{R}^5$`. Every solution is `$x = s u_1 + t u_2$` with basis null vectors `$u_1, u_2$`.' },
          { label: 'Step 3: Consistency remark', text: 'The column space has dimension `$3$` inside $\\mathbb{R}^4$, so non-homogeneous `$Ax = b$` is solvable only for `$b$` in that `$3$-dimensional subspace. Rank counts solvability directions while `nullity` counts solution freedom.' }
        ],
        result: 'Nullity `$2$`: solutions form a plane `$x = su_1 + tu_2$` in `$\\mathbb{R}^5$`.'
      }
    ],
    keyTakeaways: [
      'Span is all linear combinations; subspaces must contain zero and close under both operations.',
      'Independence means only the trivial relation; `$n+1$` vectors in `$\\mathbb{R}^n$` always depend.',
      'Basis gives unique coordinates; size equals dimension.',
      'Rank-nullity `$\\rho + \\mathrm{nullity} = n$` splits unknowns into pivot versus free counts.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2007 — basis of R3 (rephrased)
      {
        q: 'Which triple forms a basis of `$\\mathbb{R}^3$`?',
        options: ['`$(1,0,0), (0,1,0), (1,1,0)$`', '`$(1,0,0), (1,1,0), (1,1,1)$`', '`$(0,0,0), (1,0,0), (0,1,0)$`', '`$(1,1,1), (2,2,2), (0,1,0)$`'],
        answer: 1,
        explanation: 'First the triple with zero third components spans only a plane, so it fails spanning. Next any set holding the zero vector is dependent at once. Then the proportional pair is dependent. Finally the triangular triple has determinant `$1$`, hence independent and spanning.'
      },
      {
        q: 'For a `$5 \\times 7$` matrix of rank $4$, the nullity (dimension of `$Ax = 0$) is:',
        options: [`$1$`, `$2$`, `$3$`, `$4$`],
        answer: 2,
        explanation: 'First identify `$n = 7$` columns. Next apply `$\\rho + \\mathrm{nullity} = n$`. Then `$4 + \\mathrm{nullity} = 7$`. Finally nullity equals `$3$`, meaning three free variables.'
      },
      // PYQ-pattern: ISRO 2015 — linear dependence test (rephrased)
      {
        q: 'Vectors `$v_1, v_2, v_3$` in `$\\mathbb{R}^3$` are dependent. Which must hold?',
        options: ['One of them is a linear combination of the others', 'All of them are zero', 'Their span is all of $\\mathbb{R}^3$', 'Their matrix has rank `$3$`'],
        answer: 0,
        explanation: 'First write the nontrivial relation `$c_1v_1 + c_2v_2 + c_3v_3 = 0$`. Next some `$c_i \\ne 0$` divides through. Then that vector is expressed via the rest. Finally spanning and rank claims need not hold for dependent sets.'
      },
      {
        q: 'The null space `$\\ker(A)$` is best described as:',
        options: ['All `$b$` for which `$Ax = b$` is solvable', 'All `$x$` with $Ax = 0$, a subspace', 'The set of pivot columns of $A$', 'Always just the zero vector'],
        answer: 1,
        explanation: 'First the defining equation is `$Ax = 0$`. Next closure under addition and scaling follows from linearity. Then zero belongs and the set is a subspace of `$\\mathbb{R}^n$`. Finally it collapses to zero only at full column rank.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'engmath-ch2-s4',
    readingTime: 8,
    intro: 'LU decomposition splits `$A$` into a unit-lower times an upper factor so that each right-hand side costs only two triangular solves. Doolittle fixes unit diagonal on `$L$` while Crout puts it on $U$, and partial pivoting extends the idea to every invertible matrix. This section derives the factor patterns and the forward-back substitution routine.',
    objectives: [
      'Factor small matrices in Doolittle `$A = LU$` form by multiplier inspection',
      'Solve `$Ax = b$` through `$Ly = b$` then `$Ux = y$` without inverting',
      'State when `$LU$` exists directly and when row swaps `$PA = LU$` are needed'
    ],
    concepts: [
      {
        term: 'Doolittle form A = LU',
        kind: 'definition',
        statement: 'The **Doolittle** factorization writes `$A = LU$` with `$L$` unit-lower-triangular (ones on the diagonal) and `$U$` upper-triangular. The `multiplier` `$l_{ij}$` below the diagonal records the elimination factor used to clear column `$j$` from row $i$, while `$U$` is the resulting echelon form. For `$2 \\times 2$` with $a_{11} \\ne 0$, the factors are immediate: `$l_{21} = a_{21}/a_{11}$` written as `$l_{21} = \\frac{a_{21}}{a_{11}}$`, `$u_{11} = a_{11}$`, `$u_{12} = a_{12}$`, `$u_{22} = a_{22} - l_{21}u_{12}$`.',
        detail: 'The decomposition is unique when it exists, because the unit diagonal on `$L$` removes the scaling ambiguity between factors.'
      },
      {
        term: 'Crout and Cholesky variants',
        kind: 'notation',
        statement: 'The **Crout** form instead puts ones on `$U$` and lets `$L$` carry the diagonal, while **Cholesky** handles symmetric positive-definite `$A$` as `$A = GG^T$` with lower-triangular `$G$`. The `Crout` choice suits certain derivations, and `Cholesky` halves storage and work for covariance-type matrices. All three share the same elimination multipliers, differing only in where diagonal scaling is parked.',
        detail: 'Cholesky needs positive pivots throughout; a non-positive pivot aborts the factorization and reports indefiniteness.'
      },
      {
        term: 'Forward and back substitution',
        kind: 'method',
        statement: 'Once $A = LU$, solving `$Ax = b$` splits into **forward** `$Ly = b$` solved top-down via `$y_i = b_i - \\sum_{j < i} l_{ij} y_j$`, then **back** `$Ux = y$` solved bottom-up. The `forward` pass costs about `$\\frac{n^2}{2}$` operations and the back pass the same, far below a fresh elimination per right-hand side. Repeated `$b$` vectors reuse one factorization, which is the economic point of the method.',
        detail: 'Unit diagonal on `$L$` means no division in the forward pass, only multiply-subtract steps.'
      },
      {
        term: 'Existence and partial pivoting',
        kind: 'theorem',
        statement: 'Direct `$LU$` without swaps exists exactly when all **leading principal minors** are nonzero, so every elimination pivot is available in order. With **partial pivoting** every invertible matrix factors as `$PA = LU$` where `$P$` records row swaps. The `pivot` strategy swaps the largest-magnitude candidate into place, guaranteeing stability and existence together.',
        detail: 'A zero leading minor forces at least one swap, but `$PA = LU$` still succeeds as long as `$A$` is invertible.'
      },
      {
        term: 'One factorization serves many right-hand sides',
        kind: 'insight',
        statement: 'Factorization dominates cost at about **two-thirds `$n^3$`** operations, while each triangular solve costs only order `$n^2$`. The `reuse` principle therefore favors `$LU$` whenever several `$b$` vectors share one $A$, such as time stepping or load cases. Computing `$A^{-1}$` explicitly is wasteful by comparison, costing several solves plus denser storage.',
        detail: 'Determinant follows free from `$U$`: `$|A| = \\pm \\prod u_{ii}$` with the sign from the recorded swaps.'
      }
    ],
    examples: [
      {
        title: 'Doolittle factorization of a 3x3 matrix',
        problem: 'Factor $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 4 & 3 & 3 \\\\ 8 & 7 & 9 \\end{bmatrix}$$ as `$A = LU$` in Doolittle form.',
        steps: [
          { label: 'Step 1: First column multipliers', text: '```text\nPivot u11 = 2\nl21 = 4 over 2 = 2,  l31 = 8 over 2 = 4\nClear column 1 (U rows update, L records multipliers)\n```\nPivots must be nonzero; `$u_{11} = 2$` qualifies, giving integer `multiplier` values `$2$` and `$4$`.' },
          { label: 'Step 2: Schur update and second pivot', text: 'Subtracting yields working rows `$[0, 1, 1]$` and `$[0, 3, 5]$` in `$U$`, so the next pivot is `$u_{22} = 1$` with `$l_{32} = \\frac{3}{1} = 3$`. Elimination records `$3$` in `$L$` and clears to `$[0, 0, 2]$`.' },
          { label: 'Step 3: Assemble', text: 'Collecting gives $$L = \\begin{bmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 4 & 3 & 1 \\end{bmatrix} \\qquad U = \\begin{bmatrix} 2 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 2 \\end{bmatrix}$$ and `$LU$` multiplies back to `$A$, verified entry by entry.' }
        ],
        result: 'Doolittle factors as above with `$|A| = 2 \\cdot 1 \\cdot 2 = 4$`.'
      },
      {
        title: 'Solve a system with two triangular passes',
        problem: 'Using the factors above, solve `$Ax = b$` for `$b = (2, 7, 23)^T$` written `$b = \\begin{bmatrix} 2 \\\\ 7 \\\\ 23 \\end{bmatrix}$`.',
        steps: [
          { label: 'Step 1: Forward Ly = b', text: '```text\nL unit lower -> no divisions\ny1 = 2\ny2 = 7 - 2*y1 = 3\ny3 = 23 - 4*y1 - 3*y2 = 6\n```\nTop-down `forward` substitution peels off one multiplier row at a time, producing `$y = (2, 3, 6)^T$`.' },
          { label: 'Step 2: Back Ux = y', text: 'Bottom-up from `$2x_3 = 6$` gives `$x_3 = 3$`, then `$x_2 + x_3 = 3$` gives `$x_2 = 0$`, then `$2x_1 + x_2 + x_3 = 2$` gives `$x_1 = -\\frac{1}{2}$`. Each step divides by the diagonal `pivot` of `$U$`.' },
          { label: 'Step 3: Check', text: 'Insert into `$A$` with `$x_1 = -\\frac{1}{2}$`, `$x_2 = 0$`, `$x_3 = 3$`: row one gives $-1 + 0 + 3 = 2$, row two gives $-2 + 0 + 9 = 7$, row three gives $-4 + 0 + 27 = 23$. All three equations check, confirming `$x = (-\\frac{1}{2}, 0, 3)^T$`.' }
        ],
        result: 'Forward then back substitution yields `$y = (2,3,6)^T$` and the triangular path to `$x$`.'
      }
    ],
    keyTakeaways: [
      'Doolittle `$A = LU$` stores multipliers in unit `$L$` and the echelon in `$U$`; `$l_{ij} = a_{ij}^{(j)}/u_{jj}$`.',
      'Solve via `$Ly = b$` top-down then `$Ux = y$` bottom-up; each pass costs about `$n^2/2$`.',
      'Direct `$LU$` needs nonzero leading principal minors; otherwise factor `$PA = LU$` with swaps.',
      'One factorization serves all right-hand sides; determinant is `$\\pm \\prod u_{ii}$`.'
    ],
    quiz: [
      // PYQ-pattern: GATE 2004 — LU factors of a 2x2 matrix (rephrased)
      {
        q: 'Doolittle factors of $$A = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$$ are:',
        options: [`$L = I, U = A$`, `$L = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}, U = \\begin{bmatrix} 2 & 1 \\\\ 0 & 1 \\end{bmatrix}$`, `$L = \\begin{bmatrix} 2 & 0 \\\\ 4 & 3 \\end{bmatrix}, U = I$`, `$L = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}, U = \\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix}$`],
        answer: 1,
        explanation: 'First pivot `$u_{11} = 2$` is nonzero. Next multiplier `$l_{21} = \\frac{4}{2} = 2$`. Then `$u_{22} = 3 - 2 \\cdot 1 = 1$`. Finally only the second option multiplies back to `$A$`.'
      },
      {
        q: 'After factoring $A = LU$, solving for a new `$b$` requires:',
        options: ['A fresh full elimination', 'Only forward then back substitution', 'Computing `$A^{-1}$` explicitly', 'Recomputing `$L$` and `$U$` from scratch'],
        answer: 1,
        explanation: 'First the factors already encode elimination. Next `$Ly = b$` runs top-down in order `$n^2$`. Then `$Ux = y$` runs bottom-up. Finally no refactorization is needed for any new right-hand side.'
      },
      // PYQ-pattern: DRDO 2016 — pivoting and existence of LU (rephrased)
      {
        q: 'Direct `$LU$` without row swaps is guaranteed iff:',
        options: ['`$A$` is symmetric', 'All leading principal minors are nonzero', '`$A$` has trace zero', '`$A$` is orthogonal'],
        answer: 1,
        explanation: 'First each elimination pivot equals a ratio of successive leading minors. Next a zero minor forces a zero pivot in order. Then swaps become unavoidable. Finally nonzero minors at every stage are exactly the condition.'
      },
      {
        q: 'If `$PA = LU$` with one row swap and `$U$` diagonal `$(2, 3, 5)$`, then `$|A|$` equals:',
        options: [`$30$`, `$-30$`, `$10$`, `$0$`],
        answer: 1,
        explanation: 'First `$|P| = -1$` for a single swap. Next `$|L| = 1$` since `$L$` is unit triangular. Then `$|U| = 2 \\cdot 3 \\cdot 5 = 30$`. Finally `$|A| = -|U| = -30$` via `$|P||A| = |L||U|$`.'
      }
    ]
  }
]
