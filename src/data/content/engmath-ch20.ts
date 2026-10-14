import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Eigenvalues via Invariant Subspaces
// Chapter 20: sections 20.1 to 20.4. Master study content.
// Source: Axler, Linear Algebra Done Right, 4e, Chapters 5-7 (Sections 5A-5C, 6A-6B, 7A-7B).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh20Content: SectionContent[] = [
  // ---------------------------------------------------------------- 20.1
  {
    sectionId: 'engmath-ch20-s1',
    readingTime: 10,
    intro: 'An invariant subspace is one the operator cannot leave, so restriction stays an operator and powers stay meaningful. One-dimensional invariant subspaces are exactly eigenlines, and eigenvalues are the scalars of the equation $Tv = \\lambda v$. Over complex scalars every operator on a nonzero finite-dimensional space owns an eigenvalue, proved without any determinant.',
    objectives: [
      'Test invariance of subspaces such as `$\\mathcal{P}_{4}(\\mathbb{R})$` under differentiation',
      'Find eigenvalues and eigenvectors of small operators from `$Tv = \\lambda v$`',
      'Use the `$T - \\lambda I$` equivalences to move between eigenvalues, kernels and invertibility'
    ],
    concepts: [
      {
        term: 'Operators and invariant subspaces',
        kind: 'definition',
        statement: 'An **operator** is a linear map from a space to itself, and a subspace `$U$` is **invariant** under `$T$` when `$Tu \\in U$` for every `$u \\in U$`, the `invsub` pair of Axler 5.1 and 5.2. Invariance means the restriction `$T|_{U}$` is again an operator, so powers and polynomials in `$T$` stay inside `$U$`. Without it, restriction maps out of the subspace and the operator toolkit breaks.',
        detail: 'Differentiation has `$\\mathcal{P}_{4}(\\mathbb{R})$` invariant inside `$\\mathcal{P}(\\mathbb{R})$`, since derivatives never exceed degree four (Axler 5.3).'
      },
      {
        term: 'Four subspaces always invariant',
        kind: 'theorem',
        statement: '`$\\{0\\}$`, `$V$`, `$\\operatorname{null} T$` and `$\\operatorname{range} T$` are **always invariant** under every `$T \\in \\mathcal{L}(V)$`, the `easyinv` list of Axler 5.4. Null vectors map to `$0$` which stays null, and range vectors map to range vectors by definition. These always exist but may be trivial, which is why eigenvalues hunt for smaller game.',
        detail: 'When `$T$` is invertible the null space is `$\\{0\\}$` and the range is `$V$`, so the list gives no new information.'
      },
      {
        term: 'Eigenvalues and eigenvectors',
        kind: 'definition',
        statement: 'A scalar `$\\lambda$` is an **eigenvalue** when `$Tv = \\lambda v$` for some nonzero `$v$`, and such a `$v$` is an **eigenvector** for `$\\lambda$`, the `eigenval` pair of Axler 5.5 and 5.8. The nonzero demand is essential since `$T0 = \\lambda 0$` holds for every `$\\lambda$`. One-dimensional invariant subspaces are exactly eigenlines: `$\\operatorname{span}(v)$` is invariant if and only if `$v$` is an eigenvector.',
        detail: 'Eigenvectors for `$\\lambda$` are precisely the nonzero vectors of `$\\operatorname{null}(T - \\lambda I)$`.'
      },
      {
        term: 'Four equivalent eigenvalue tests',
        kind: 'theorem',
        statement: 'On a finite-dimensional space, `$\\lambda$` is an eigenvalue if and only if `$T - \\lambda I$` is **not injective**, equivalently **not surjective**, equivalently **not invertible**, the `eigequiv` numbered 5.7. The equation `$Tv = \\lambda v$` rewrites as `$(T - \\lambda I)v = 0$`, linking eigenvalues to kernels, and 3.65 fuses the three failures. Eigen-hunting becomes singularity-hunting, with no determinant in sight.',
        detail: 'Here `$I$` is the identity operator with `$Iv = v$` for all `$v$`, the natural reference point for shifting `$T$`.'
      },
      {
        term: 'Existence over complex scalars, rotation over real ones',
        kind: 'theorem',
        statement: 'Every operator on a nonzero finite-dimensional **complex** space has an eigenvalue, Axler’s determinant-free `existence` triumph 5.19. By contrast the quarter-turn `$T(w, z) = (-z, w)$` on `$\\mathbb{R}^{2}$` has **no** real eigenvalue, since rotation moves every nonzero vector off its own line, while over `$\\mathbb{C}$` it gains `$\\pm i$` (Axler 5.9). The scalar field decides the spectrum, which is why complex scalars lead the theory.',
        detail: 'Odd-dimensional real operators always own a real eigenvalue too, by the intermediate-value behavior of real polynomials.'
      }
    ],
    figures: [
      {
        caption: 'An eigen-direction stays on its own line with `$Tv = \\lambda v$`, while a generic vector swings away: invariance of a line is exactly the eigenvector property.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eigen-direction preserved versus generic vector rotated"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Eigenline stays, generic vector swings</text><line x1="60" y1="310" x2="660" y2="310" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="320" x2="90" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="290" x2="450" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="90" y1="290" x2="270" y2="200" stroke="currentColor" stroke-width="3"/><polygon points="270,200 258,200 263,211" fill="currentColor"/><line x1="90" y1="290" x2="450" y2="110" stroke="currentColor" stroke-width="3"/><polygon points="450,110 438,110 443,121" fill="currentColor"/><line x1="90" y1="290" x2="200" y2="130" stroke="currentColor" stroke-width="2.5"/><polygon points="200,130 193,141 204,142" fill="currentColor"/><line x1="200" y1="130" x2="330" y2="160" stroke="currentColor" stroke-width="2.5"/><polygon points="330,160 318,158 322,169" fill="currentColor"/><text x="282" y="192" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v</text><text x="462" y="102" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">Tv on the line</text><text x="150" y="200" font-family="sans-serif" font-size="14" fill="currentColor">u</text><text x="272" y="142" font-family="sans-serif" font-size="14" fill="currentColor">Tu off the line</text><text x="360" y="334" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">staying on the line is the whole eigenvalue test</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'An eigenvalue hiding in a 3-space operator',
        problem: 'For `$T(x, y, z) = (7x + 3z, 3x + 6y + 9z, -6y)$` on `$\\mathbb{F}^{3}$`, verify that `$6$` is an eigenvalue with eigenvector `$(3, 1, -1)$` (Axler 5.6), and confirm by script.',
        steps: [
          { label: 'Step 1: Apply T to the candidate', text: 'Compute `$T(3, 1, -1) = (21 - 3, 9 + 6 - 9, -6) = (18, 6, -6)$`. Each slot is arithmetic on the coordinates, with the `$z$`-term contributing `$3(-1) = -3$` in the first slot.' },
          { label: 'Step 2: Factor and confirm by script', text: '```python\ndef T(v):\n    x, y, z = v\n    return (7*x + 3*z, 3*x + 6*y + 9*z, -6*y)\nv = (3, 1, -1)\nprint(T(v))  # (18, 6, -6)\nprint(tuple(6*c for c in v))  # (18, 6, -6)\n```\nSince `$(18, 6, -6) = 6(3, 1, -1)$`, the output is a scalar multiple of the input, and the script checks both sides agree.' },
          { label: 'Step 3: Name the finding', text: 'The nonzero vector `$(3, 1, -1)$` satisfies `$Tv = 6v$`, so `$6$` is an eigenvalue with that eigenvector. Its span is a one-dimensional invariant subspace.' }
        ],
        result: '`$6$` is an eigenvalue of `$T$` with eigenvector `$(3, 1, -1)$`.'
      },
      {
        title: 'Differentiation owns only the eigenvalue zero',
        problem: 'Show `$\\mathcal{P}_{4}(\\mathbb{R})$` is invariant under `$Dp = p^{\\prime}$`, find all eigenvalues of `$D$` there, and describe the eigenspace.',
        steps: [
          { label: 'Step 1: Check invariance', text: 'Derivatives drop degree by one, so `$\\deg Dp \\le 3$` for `$p$` of degree at most `$4$`. Hence `$D$` maps `$\\mathcal{P}_{4}(\\mathbb{R})$` into itself and restriction is an operator.' },
          { label: 'Step 2: Solve the eigen-equation', text: '`$Dp = \\lambda p$` with `$\\lambda \\ne 0$` is impossible by degree: the left side has lower degree than the right unless `$p = 0$`. For `$\\lambda = 0$` the equation `$p^{\\prime} = 0$` gives exactly the constants.' },
          { label: 'Step 3: Report the spectrum', text: 'The only eigenvalue is `$0$`, with eigenspace `$\\operatorname{null} D$` the one-dimensional constants. Invariant subspaces abound here, but eigenlines are scarce.' }
        ],
        result: '`$D$` on `$\\mathcal{P}_{4}(\\mathbb{R})$` has sole eigenvalue `$0$` with eigenspace the constants.'
      }
    ],
    keyTakeaways: [
      'Invariant subspaces keep restriction an operator; `$\\{0\\}$`, `$V$`, null and range always qualify.',
      'Eigenvalues solve `$Tv = \\lambda v$` with `$v \\ne 0$`, and eigenlines are the one-dimensional invariants.',
      '`$\\lambda$` is an eigenvalue exactly when `$T - \\lambda I$` fails injectivity, surjectivity and invertibility together.',
      'Complex operators always own eigenvalues without determinants; the real quarter-turn owns none.'
    ],
    quiz: [
      // PYQ-pattern: eigenvalue verification drill with changed operators (rephrased, values changed)
      {
        q: 'Why does the definition of eigenvalue demand `$v \\ne 0$`?',
        options: ['Zero vectors are not in any vector space', 'Because `$T0 = \\lambda 0$` holds for every `$\\lambda$`', 'Eigenvectors must span the space', 'Nonzero vectors are always independent'],
        answer: 1,
        explanation: 'Step 1: Linearity gives `$T0 = 0$` for every operator. Step 2: Hence `$T0 = \\lambda 0$` is true for all scalars at once. Step 3: Allowing `$v = 0$` would crown every scalar an eigenvalue. Step 4: The nonzero demand keeps the spectrum informative.'
      },
      {
        q: 'Which subspaces are invariant under every operator `$T$`?',
        options: ['Only `$\\{0\\}$` and `$V$`', '`$\\{0\\}$`, `$V$`, `$\\operatorname{null} T$` and `$\\operatorname{range} T$`', 'Every subspace of `$V$`', 'Only the eigenspaces of `$T$`'],
        answer: 1,
        explanation: 'Step 1: This is the always-invariant list of Axler 5.4. Step 2: Null vectors map to `$0$`, staying null. Step 3: Range vectors map to range vectors by definition. Step 4: Arbitrary subspaces need not be preserved, as rotations of lines show.'
      },
      {
        q: 'On finite-dimensional `$V$`, `$\\lambda$` is an eigenvalue of `$T$` exactly when which map fails?',
        options: ['`$T + \\lambda I$` fails to be linear', '`$T - \\lambda I$` fails injectivity, surjectivity and invertibility together', '`$\\lambda T - I$` has a nonzero range', '`$T$` itself is the zero map'],
        answer: 1,
        explanation: 'Step 1: Rewrite `$Tv = \\lambda v$` as `$(T - \\lambda I)v = 0$`. Step 2: A nonzero solution is exactly a nontrivial kernel. Step 3: In finite dimensions the three failures coincide by 3.65. Step 4: This is the equivalence list 5.7.'
      },
      {
        q: 'The quarter-turn `$T(w, z) = (-z, w)$` on `$\\mathbb{R}^{2}$` has no real eigenvalue because of which geometry?',
        options: ['Rotation moves every nonzero vector off its own line', 'Its matrix has all nonzero entries', 'It is not a linear map', 'Two-dimensional spaces admit no eigenvalues'],
        answer: 0,
        explanation: 'Step 1: An eigenvalue needs `$Tv$` parallel to `$v$`. Step 2: A quarter-turn sends each nonzero vector perpendicular to itself. Step 3: No nonzero vector lands on its own span. Step 4: Over `$\\mathbb{C}$` the same map gains `$\\pm i$`, proving the field matters.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.2
  {
    sectionId: 'engmath-ch20-s2',
    readingTime: 9,
    intro: 'Upper-triangular matrices expose eigenvalues on their diagonal and make every operator equation solvable by back substitution. Over complex scalars a suitable basis triangularizes every operator, by repeatedly peeling off an invariant subspace of codimension one. Diagonalizability is the stricter demand for a full eigenbasis, decided by whether eigenspaces span the space.',
    objectives: [
      'Read eigenvalues off upper-triangular matrices and verify eigenpairs directly',
      'Outline the triangularization induction through nested invariant subspaces',
      'Test diagonalizability by spanning of eigenspaces and spot the shear obstruction'
    ],
    concepts: [
      {
        term: 'Upper-triangular matrices wear eigenvalues openly',
        kind: 'definition',
        statement: 'A matrix is **upper-triangular** when all entries below the diagonal are zero, and its **eigenvalues are exactly the diagonal entries**, each repeated by multiplicity, the `uptri` reading rule of Axler 5C. Back substitution solves `$Tv = \\lambda v$` from the bottom row upward. Triangular form is therefore the friendliest portrait an operator can have short of diagonal.',
        detail: 'Zeros below the diagonal mean each basis vector maps into the span of itself and its successors, a nested invariance.'
      },
      {
        term: 'Every complex operator triangularizes',
        kind: 'theorem',
        statement: 'For `$T$` on a nonzero finite-dimensional **complex** space, some basis makes its matrix **upper-triangular**, the `triangthm` of Axler 5C. The proof inducts on dimension: an eigenvalue gives a one-dimensional invariant, the quotient inherits an operator, and the induction hypothesis triangularizes it. Lifting back appends one basis vector at a time until the staircase is complete.',
        detail: 'Complex scalars enter at the base step, where existence of an eigenvalue starts the peeling process.'
      },
      {
        term: 'Nested invariant flag behind the staircase',
        kind: 'insight',
        statement: 'Triangularization builds a **flag** `$\\{0\\} = U_{0} \\subset U_{1} \\subset \\cdots \\subset U_{n} = V$` with `$\\dim U_{k} = k$` and each `$U_{k}$` invariant, the `triflag` picture behind 5C. Basis vector `$k$` extends the flag by one invariant dimension. Reading the matrix in a flag basis forces zeros below the diagonal automatically.',
        detail: 'Quotients `$U_{k} \\div U_{k-1}$` are one-dimensional, so each step contributes exactly one diagonal eigenvalue.'
      },
      {
        term: 'Diagonalizability needs spanning eigenspaces',
        kind: 'theorem',
        statement: 'An operator is **diagonalizable** when some basis consists entirely of eigenvectors, equivalently when the eigenspaces **span** `$V$`, the `diagonalizable` criterion of Axler 5D. Distinct eigenvalues help since their eigenvectors are independent, but repeated eigenvalues may still suffice with roomy eigenspaces. The shear `$T(x, y) = (x + y, y)$` fails: eigenvalue `$1$` owns only the `$x$`-axis, one dimension short of two.',
        detail: 'Sums of eigenspaces are always direct, so dimensions of eigenspaces add without overlap.'
      },
      {
        term: 'Determinant-free characteristic philosophy',
        kind: 'insight',
        statement: 'Axler never defines a characteristic polynomial by determinants; eigenvalues are the scalars making `$T - \\lambda I$` **noninjective**, and the **minimal polynomial** of 5B is the monic annihilator of smallest degree, the `detfree` stance. Its roots are exactly the eigenvalues, and `$\\deg$` is at most `$\\dim V$`. The whole spectral theory therefore rests on injectivity, not on determinant expansion.',
        detail: 'The Cayley-Hamilton consequence that `$T$` satisfies its own minimal equation also follows without determinants in this development.'
      }
    ],
    figures: [
      {
        caption: 'An upper-triangular `$3$`-by-`$3$` portrait: zeros below the diagonal, eigenvalues `$d_{1}, d_{2}, d_{3}$` on it, and free entries above solved by back substitution.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Upper triangular matrix staircase pattern"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Upper-triangular staircase, eigenvalues on show</text><rect x="210" y="80" width="300" height="220" fill="none" stroke="currentColor" stroke-width="2"/><line x1="310" y1="80" x2="310" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="410" y1="80" x2="410" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="210" y1="153" x2="510" y2="153" stroke="currentColor" stroke-width="1.5"/><line x1="210" y1="226" x2="510" y2="226" stroke="currentColor" stroke-width="1.5"/><text x="260" y="122" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">d1</text><text x="360" y="195" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">d2</text><text x="460" y="268" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">d3</text><text x="260" y="195" font-family="sans-serif" font-size="16" text-anchor="middle" fill="currentColor">0</text><text x="260" y="268" font-family="sans-serif" font-size="16" text-anchor="middle" fill="currentColor">0</text><text x="360" y="268" font-family="sans-serif" font-size="16" text-anchor="middle" fill="currentColor">0</text><text x="360" y="122" font-family="sans-serif" font-size="16" text-anchor="middle" fill="currentColor">free</text><text x="460" y="122" font-family="sans-serif" font-size="16" text-anchor="middle" fill="currentColor">free</text><text x="460" y="195" font-family="sans-serif" font-size="16" text-anchor="middle" fill="currentColor">free</text><text x="360" y="330" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">diagonal entries are the eigenvalues, read them off</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Read a triangular spectrum and check one pair',
        problem: 'For `$T$` with matrix columns `$(2, 0, 0)$`, `$(1, 3, 0)$`, `$(4, 5, 2)$` in the standard basis, list the eigenvalues and verify the eigenpair for `$\\lambda = 3$`.',
        steps: [
          { label: 'Step 1: Read the diagonal', text: 'The matrix is upper-triangular with diagonal `$2, 3, 2$`, so the eigenvalues are `$2$` with multiplicity two and `$3$` with multiplicity one. No equation needs solving for the list itself.' },
          { label: 'Step 2: Solve the middle slot and confirm by script', text: '```python\n# columns of M: T(e1)=(2,0,0), T(e2)=(1,3,0), T(e3)=(4,5,2)\n# seek v with T(v) = 3v: try v = (1,1,0)\nprint((2*1 + 1*1, 3*1, 0))  # (3, 3, 0)\nprint(tuple(3*c for c in (1, 1, 0)))  # (3, 3, 0)\n```\nTrying `$v = (1, 1, 0)$` gives `$T(v) = (3, 3, 0) = 3v$, confirmed by the script on both sides.' },
          { label: 'Step 3: Note the multiplicity moral', text: 'The repeated eigenvalue `$2$` may or may not own a two-dimensional eigenspace; diagonal entries count algebraic multiplicity while eigenspaces count geometric room. Reading is easy, diagonalizing is harder.' }
        ],
        result: 'Eigenvalues `$2, 3, 2$`, with `$T(1, 1, 0) = 3(1, 1, 0)$` verified.'
      },
      {
        title: 'The shear that refuses to diagonalize',
        problem: 'Show `$T(x, y) = (x + y, y)$` is not diagonalizable by computing its full eigenspace picture.',
        steps: [
          { label: 'Step 1: Find the eigenvalues', text: 'The matrix is upper-triangular with diagonal `$1, 1$`, so `$1$` is the only eigenvalue. Every eigenvector must satisfy `$T(x, y) = (x, y)$`.' },
          { label: 'Step 2: Solve for the eigenspace', text: 'The equation gives `$(x + y, y) = (x, y)$`, forcing `$y = 0$` with `$x$` free. The eigenspace is the one-dimensional `$x$`-axis, a line short of the plane.' },
          { label: 'Step 3: Conclude non-diagonalizability', text: 'A diagonalizing basis would need two independent eigenvectors, but only one direction exists. The shear triangularizes yet never diagonalizes.' }
        ],
        result: 'Sole eigenvalue `$1$` with one-dimensional eigenspace, so `$T$` is not diagonalizable.'
      }
    ],
    keyTakeaways: [
      'Upper-triangular matrices display eigenvalues on the diagonal for back-substitution reading.',
      'Every complex operator triangularizes by induction through nested invariant subspaces.',
      'Diagonalizability needs eigenspaces spanning the space; the shear shows the obstruction.',
      'Eigenvalues mean noninjectivity of `$T - \\lambda I$`, never a determinant computation.'
    ],
    quiz: [
      // PYQ-pattern: triangular eigenvalue reading drill with changed matrices (rephrased, values changed)
      {
        q: 'An upper-triangular matrix has diagonal `$2, 3, 2$`. What are its eigenvalues?',
        options: ['`$2$` and `$3$`, with `$2$` of multiplicity two', 'Only `$3$`, since `$2$` repeats', 'Only `$6$`, the product of the diagonal', 'Undecided without the above-diagonal entries'],
        answer: 0,
        explanation: 'Step 1: Diagonal entries of a triangular matrix are its eigenvalues. Step 2: Repetition counts as multiplicity, not as exclusion. Step 3: So `$2$` appears twice and `$3$` once. Step 4: Off-diagonal entries never affect this list.'
      },
      {
        q: 'Why does triangularization need complex scalars?',
        options: ['Real matrices cannot be upper-triangular', 'Each induction step needs an eigenvalue to start the peeling', 'Quotients exist only over `$\\mathbb{C}$`', 'Back substitution fails over `$\\mathbb{R}$`'],
        answer: 1,
        explanation: 'Step 1: The induction peels off a one-dimensional invariant subspace. Step 2: That subspace comes from an eigenvector. Step 3: Existence of eigenvalues is guaranteed only over `$\\mathbb{C}$`. Step 4: The quarter-turn over `$\\mathbb{R}$` shows the gap is real.'
      },
      {
        q: 'Why is the shear `$T(x, y) = (x + y, y)$` not diagonalizable?',
        options: ['It has no eigenvalues at all', 'Its only eigenspace is one-dimensional in a two-dimensional space', 'Its matrix is not upper-triangular', 'It is not a linear map'],
        answer: 1,
        explanation: 'Step 1: The diagonal `$1, 1$` gives eigenvalue `$1$`. Step 2: Solving `$T(x, y) = (x, y)$` forces `$y = 0$`. Step 3: The eigenspace is the `$x$`-axis of dimension one. Step 4: One direction cannot span the plane, so no eigenbasis exists.'
      },
      {
        q: 'What is the minimal polynomial of an operator, in Axler’s determinant-free telling?',
        options: ['The determinant of `$T - \\lambda I$`', 'The monic polynomial of smallest degree annihilating `$T$`', 'The product of all diagonal entries', 'The characteristic equation from row expansion'],
        answer: 1,
        explanation: 'Step 1: Apply polynomials to `$T$` by substitution. Step 2: Some nonzero monic polynomial kills `$T$` since powers must go dependent. Step 3: The smallest-degree such one is the minimal polynomial. Step 4: Its roots are the eigenvalues, with no determinant invoked.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.3
  {
    sectionId: 'engmath-ch20-s3',
    readingTime: 10,
    intro: 'Inner products generalize the dot product with linearity in the first slot and conjugate symmetry across slots. The norm measures length, and Cauchy-Schwarz bounds every inner product by the product of lengths. Orthonormal lists are automatically independent, and Gram-Schmidt manufactures them from any independent list.',
    objectives: [
      'Verify the inner-product axioms on Euclidean, weighted and integral examples',
      'Apply Cauchy-Schwarz with its equality condition to concrete vectors',
      'Run Gram-Schmidt on an independent list to produce an orthonormal basis'
    ],
    concepts: [
      {
        term: 'Inner product axioms',
        kind: 'definition',
        statement: 'An **inner product** assigns `$\\langle u, v \\rangle \\in \\mathbb{F}$` with positivity `$\\langle v, v \\rangle \\ge 0$`, definiteness with equality only at `$0$`, additivity and homogeneity in the **first** slot, and **conjugate symmetry** `$\\langle u, v \\rangle = \\overline{\\langle v, u \\rangle}$`, the `ipaxioms` definition 6.2. On real spaces the bar vanishes and symmetry is plain. Linearity lives on the left while the right slot is conjugate-linear.',
        detail: 'Physicists often conjugate the second slot instead; Axler fixes linearity in the first and flags the convention explicitly.'
      },
      {
        term: 'Euclidean, weighted and integral models',
        kind: 'method',
        statement: 'The **Euclidean** product `$\\langle w, z \\rangle = w_{1}\\overline{z_{1}} + \\cdots + w_{n}\\overline{z_{n}}$` on `$\\mathbb{F}^{n}$` is the default, joined by **weighted** versions with positive `$c_{k}$` and the **integral** `$\\langle f, g \\rangle = \\int_{-1}^{1} fg$` on continuous functions, the `models` of Axler 6.3. A space with such a product is an **inner product space** by 6.4. Conjugation in the second factor keeps `$\\lVert z \\rVert^{2}$` a nonnegative real.',
        detail: 'Axler 6.3 also exhibits `$\\langle p, q \\rangle = \\int_{0}^{\\infty} pq e^{-x}$` on polynomials, a working infinite-range model.'
      },
      {
        term: 'Norm, Cauchy-Schwarz and triangle',
        kind: 'theorem',
        statement: 'The **norm** `$\\lVert v \\rVert = \\sqrt{\\langle v, v \\rangle}$` measures length, and **Cauchy-Schwarz** `$|\\langle u, v \\rangle| \\le \\lVert u \\rVert \\lVert v \\rVert$` bounds every inner product, with equality exactly for dependent pairs, the `cauchyschwarz` core of Axler 6A. The **triangle inequality** `$\\lVert u + v \\rVert \\le \\lVert u \\rVert + \\lVert v \\rVert$` follows in one line. Geometry survives abstraction: angles and lengths obey the familiar rules.',
        detail: 'The proof subtracts the best scalar multiple of `$v$` from `$u$` and reads nonnegativity of the remainder.'
      },
      {
        term: 'Orthonormal lists are independent',
        kind: 'theorem',
        statement: 'An **orthonormal** list has unit vectors pairwise orthogonal, and every orthonormal list is automatically **linearly independent**, the `orthindep` of Axler 6B. Dotting a killing relation with each member isolates its coefficient as zero. Orthonormality is therefore independence with a certificate, and coordinates become inner products: `$v = \\langle v, e_{1} \\rangle e_{1} + \\cdots$`.',
        detail: 'Orthogonal nonzero vectors are independent too, since scaling them to unit length preserves all relations.'
      },
      {
        term: 'Gram-Schmidt manufacture',
        kind: 'method',
        statement: '**Gram-Schmidt** turns an independent list into an orthonormal one by subtracting previous projections and normalizing: `$e_{j} = (v_{j} - \\sum_{k < j} \\langle v_{j}, e_{k} \\rangle e_{k}) \\div$` its norm, the `gramschmidt` procedure of 6B. Each step preserves the span of the vectors seen so far. Consequently every finite-dimensional inner product space owns an **orthonormal basis**, and every orthonormal list extends to one.',
        detail: 'Running the procedure on `$(1, 1, 0)$`, `$(0, 1, 1)$` yields `$e_{1} = (1, 1, 0) \\div \\sqrt{2}$` with `$e_{2} = (-1, 1, 2) \\div \\sqrt{6}$`.'
      }
    ],
    figures: [
      {
        caption: 'One Gram-Schmidt step: subtract from `$u$` its projection `$p$` along `$v$`, leaving the perpendicular remainder `$e$` to be normalized.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gram Schmidt projection with perpendicular remainder"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Subtract the projection, keep the perpendicular</text><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><circle cx="120" cy="300" r="6" fill="currentColor"/><text x="104" y="322" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">0</text><line x1="120" y1="300" x2="520" y2="300" stroke="currentColor" stroke-width="2.5"/><polygon points="520,300 508,294 508,306" fill="currentColor"/><text x="532" y="296" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v</text><line x1="120" y1="300" x2="380" y2="120" stroke="currentColor" stroke-width="2.5"/><polygon points="380,120 368,122 372,133" fill="currentColor"/><text x="392" y="116" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">u</text><line x1="120" y1="300" x2="300" y2="300" stroke="currentColor" stroke-width="3"/><polygon points="300,300 288,294 288,306" fill="currentColor"/><text x="204" y="288" font-family="sans-serif" font-size="14" fill="currentColor">p</text><line x1="300" y1="300" x2="380" y2="120" stroke="currentColor" stroke-width="2.5"/><polygon points="380,120 370,128 379,132" fill="currentColor"/><text x="352" y="222" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">e</text><rect x="300" y="282" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="250" font-family="sans-serif" font-size="13" font-style="italic" fill="currentColor">u minus p</text><text x="360" y="336" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">the right angle certifies orthogonality before normalizing</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Orthonormalize two vectors in `$\\mathbb{R}^{3}$`',
        problem: 'Apply Gram-Schmidt to `$(1, 1, 0)$` and `$(0, 1, 1)$` in `$\\mathbb{R}^{3}$` with the Euclidean product, and verify orthonormality by script.',
        steps: [
          { label: 'Step 1: Normalize the first vector', text: 'Its length is `$\\sqrt{2}$`, so `$e_{1} = (1, 1, 0) \\div \\sqrt{2}$`. Unit length is banked before any projection.' },
          { label: 'Step 2: Subtract the projection and normalize, with a numeric check', text: '```python\nimport math\ndot = 0*1 + 1*1 + 1*0\nw = (-dot/2, 1-dot/2, 1)\nprint(w)  # (-0.5, 0.5, 1)\nprint(math.sqrt(0.25 + 0.25 + 1))  # 1.2247 = sqrt(6)/2\n```\nThe inner product with `$e_{1}$` is `$1 \\div \\sqrt{2}$`, so `$w = (0, 1, 1) - (1 \\div 2)(1, 1, 0) = (-1 \\div 2, 1 \\div 2, 1)$` with `$\\lVert w \\rVert = \\sqrt{6} \\div 2$`, giving `$e_{2} = (-1, 1, 2) \\div \\sqrt{6}$`.' },
          { label: 'Step 3: Verify the certificate', text: 'Check `$e_{1} \\cdot e_{2} = (-1 + 1 + 0) \\div \\sqrt{12} = 0$` with both lengths one. Spans match at each step, so `$e_{1}, e_{2}$` is the orthonormal replacement.' }
        ],
        result: '`$e_{1} = (1, 1, 0) \\div \\sqrt{2}$` and `$e_{2} = (-1, 1, 2) \\div \\sqrt{6}$` form the orthonormal pair.'
      },
      {
        title: 'Cauchy-Schwarz on a numeric pair',
        problem: 'Verify `$|\\langle u, v \\rangle| \\le \\lVert u \\rVert \\lVert v \\rVert$` for `$u = (1, 2)$` and `$v = (3, -1)$`, and decide whether equality holds.',
        steps: [
          { label: 'Step 1: Compute the inner product', text: '`$\\langle u, v \\rangle = 1(3) + 2(-1) = 1$`, so the left side is `$1$`. Plain arithmetic, no subtlety.' },
          { label: 'Step 2: Compute both norms', text: '`$\\lVert u \\rVert = \\sqrt{5}$` with `$\\lVert v \\rVert = \\sqrt{10}$`, so the right side is `$\\sqrt{50} \\approx 7.07$`. The bound `$1 \\le 7.07$` holds with room to spare.' },
          { label: 'Step 3: Rule on equality', text: 'Equality needs dependence, but `$(1, 2)$` is no multiple of `$(3, -1)$`. The inequality is strict, exactly as the equality condition predicts.' }
        ],
        result: '`$1 \\le \\sqrt{50}$` strictly, since the pair is independent.'
      }
    ],
    keyTakeaways: [
      'Inner products are linear in the first slot and conjugate-symmetric across slots.',
      'Cauchy-Schwarz bounds `$|\\langle u, v \\rangle|$` by the length product, with equality only for dependence.',
      'Orthonormal lists are automatically independent, with coordinates given by inner products.',
      'Gram-Schmidt orthonormalizes any independent list while preserving stepwise spans.'
    ],
    quiz: [
      // PYQ-pattern: Gram-Schmidt and Cauchy-Schwarz drill with changed vectors (rephrased, values changed)
      {
        q: 'Which property belongs to the FIRST slot of an Axler inner product?',
        options: ['Conjugate symmetry by itself', 'Additivity and homogeneity', 'Positivity of each single entry', 'Symmetry without conjugation'],
        answer: 1,
        explanation: 'Step 1: Axioms 6.2 place additivity and homogeneity in the first slot. Step 2: The second slot inherits conjugate-linearity through symmetry. Step 3: Positivity constrains pairs `$\\langle v, v \\rangle$`, not slots. Step 4: Plain symmetry holds only over real scalars.'
      },
      {
        q: 'For `$u = (1, 2)$` and `$v = (3, -1)$`, what does Cauchy-Schwarz say?',
        options: ['`$|\\langle u, v \\rangle| = 1 \\le \\sqrt{50}$` strictly', '`$|\\langle u, v \\rangle| = 5 = \\sqrt{50}$`', 'The inner product is undefined for these vectors', 'Equality holds since both are nonzero'],
        answer: 0,
        explanation: 'Step 1: Compute `$\\langle u, v \\rangle = 3 - 2 = 1$`. Step 2: Norms give `$\\sqrt{5}$` with `$\\sqrt{10}$`. Step 3: The bound reads `$1 \\le \\sqrt{50}$`. Step 4: Strictness follows because the pair is independent.'
      },
      {
        q: 'Why is every orthonormal list linearly independent?',
        options: ['Orthonormal lists always span the space', 'Dotting a killing relation with `$e_{j}$` forces its coefficient to zero', 'Unit vectors cannot sum to zero', 'Orthogonality implies equal dimensions'],
        answer: 1,
        explanation: 'Step 1: Suppose `$a_{1}e_{1} + \\cdots + a_{n}e_{n} = 0$`. Step 2: Take the inner product with `$e_{j}$`. Step 3: Orthonormality collapses the sum to `$a_{j} = 0$`. Step 4: Every coefficient vanishes, so only the trivial relation exists.'
      },
      {
        q: 'In Gram-Schmidt, what is subtracted from `$v_{j}$` before normalizing?',
        options: ['The sum of all previous `$v_{k}$`', 'Its projections `$\\langle v_{j}, e_{k} \\rangle e_{k}$` onto the orthonormal vectors built so far', 'Its own norm `$\\lVert v_{j} \\rVert$`', 'The next vector `$v_{j+1}$` in advance'],
        answer: 1,
        explanation: 'Step 1: The built `$e_{k}$` span the same space as the seen `$v_{k}$`. Step 2: Projections remove exactly the components along them. Step 3: The remainder is perpendicular to all previous directions. Step 4: Normalizing then banks the next orthonormal member.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.4
  {
    sectionId: 'engmath-ch20-s4',
    readingTime: 9,
    intro: 'Self-adjoint operators satisfy $T^{*} = T$ and behave like real numbers among operators, with real eigenvalues and orthogonal eigenspaces. The Real Spectral Theorem diagonalizes them by an orthonormal eigenbasis, and the complex version extends the picture to normal operators. This is the destination toward which invariant subspaces, triangular forms and inner products were all travelling.',
    objectives: [
      'Test self-adjointness from `$\\langle Tv, w \\rangle = \\langle v, Tw \\rangle$` and from symmetric matrices',
      'Use reality of the spectrum and orthogonality of distinct eigenspaces',
      'State the Real and Complex Spectral Theorems and recognize normal operators'
    ],
    concepts: [
      {
        term: 'Adjoints via the pairing',
        kind: 'definition',
        statement: 'The **adjoint** `$T^{*}$` is the unique operator with `$\\langle Tv, w \\rangle = \\langle v, T^{*}w \\rangle$` for all `$v, w$`, the `adjoint` definition of Axler 7A. Existence comes from Riesz-style representation of the functional `$v \\mapsto \\langle Tv, w \\rangle$`. In orthonormal bases the matrix of `$T^{*}$` is the **conjugate transpose** of the matrix of `$T$`.',
        detail: 'Uniqueness is one line: two candidates give `$\\langle v, (S_{1} - S_{2})w \\rangle = 0$` for all `$v$`, forcing equality.'
      },
      {
        term: 'Self-adjoint and normal operators',
        kind: 'definition',
        statement: 'An operator is **self-adjoint** when `$T^{*} = T$` and **normal** when `$TT^{*} = T^{*}T$`, the `selfadj` pair of 7A. Self-adjoint matrices are exactly the symmetric ones over `$\\mathbb{R}$` and Hermitian over `$\\mathbb{C}$`. Every self-adjoint operator is normal, while the quarter-turn is normal without being self-adjoint, so normality is strictly broader.',
        detail: 'Normality is equivalent to `$\\lVert Tv \\rVert = \\lVert T^{*}v \\rVert$` for all `$v$`, a norm test with no products.'
      },
      {
        term: 'Real spectrum and orthogonal eigenspaces',
        kind: 'theorem',
        statement: 'Eigenvalues of a **self-adjoint** operator are **real**, and eigenvectors for distinct eigenvalues are **orthogonal**, the `realspec` pair of Axler 7A. The proof moves `$\\lambda$` across the pairing: `$\\lambda \\lVert v \\rVert^{2} = \\langle Tv, v \\rangle = \\overline{\\lambda} \\lVert v \\rVert^{2}$` forces `$\\lambda = \\overline{\\lambda}$`. Orthogonality then falls out of the same move applied to two eigenvectors.',
        detail: 'This is why symmetric matrices never surprise with complex eigenvalues: self-adjointness forbids them.'
      },
      {
        term: 'Real Spectral Theorem',
        kind: 'theorem',
        statement: 'A real operator is self-adjoint if and only if it owns an **orthonormal eigenbasis**, the `realst` of Axler 7B. Invariant subspaces reduce self-adjoint maps cleanly: `$U$` invariant implies `$U^{\\perp}$` invariant, so induction peels off eigen-directions one by one. Symmetry of the matrix becomes diagonality in the right orthonormal basis.',
        detail: 'The backward implication is direct computation, while the forward one needs the invariant-complement lemma at every step.'
      },
      {
        term: 'Complex Spectral Theorem and normal outlook',
        kind: 'theorem',
        statement: 'A complex operator is **normal** if and only if it owns an **orthonormal eigenbasis**, the `complexst` of Axler 7B. Self-adjoint maps qualify automatically, and unitary diagonalization is the matrix translation. Normality is therefore the exact boundary of orthonormal diagonalizability, closing the book’s central quest from eigenvalues to geometry.',
        detail: 'The singular-value and polar decompositions of 7E and 7F grow from this soil, extending spectral ideas to non-square maps.'
      }
    ],
    figures: [
      {
        caption: 'A self-adjoint stretch with eigenvalues `$3$` and `$1$`: perpendicular eigen-axes, each scaled by its own real eigenvalue, grid an orthonormal eigenbasis.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Perpendicular eigen-axes with stretch factors"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Orthonormal eigenbasis with real stretches</text><line x1="60" y1="200" x2="660" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="320" x2="360" y2="70" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="260" x2="600" y2="260" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="120" y1="140" x2="600" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="360" y1="200" x2="600" y2="200" stroke="currentColor" stroke-width="3"/><polygon points="600,200 588,194 588,206" fill="currentColor"/><line x1="360" y1="200" x2="360" y2="110" stroke="currentColor" stroke-width="3"/><polygon points="360,110 354,122 366,122" fill="currentColor"/><circle cx="360" cy="200" r="6" fill="currentColor"/><text x="612" y="196" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">3 along e1</text><text x="372" y="106" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">1 along e2</text><text x="344" y="222" font-family="sans-serif" font-size="13" fill="currentColor">0</text><rect x="360" y="200" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="336" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">right angle plus real scales: the spectral signature</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Diagonalize a symmetric two-by-two',
        problem: 'For `$A$` with columns `$(2, 1)$` and `$(1, 2)$`, find its eigenvalues with orthonormal eigenvectors and confirm the diagonalization by script.',
        steps: [
          { label: 'Step 1: Solve for the eigenvalues', text: '`$A(x, y) = (2x + y, x + 2y)$`; trying `$v = (1, 1)$` gives `$(3, 3) = 3v$`, and `$w = (1, -1)$` gives `$(1, -1) = 1w$`. The spectrum is `$3$` with `$1$`, both real as self-adjointness demands.' },
          { label: 'Step 2: Normalize and confirm by script', text: '```python\nimport math\ns = math.sqrt(2)\ne1 = (1/s, 1/s)\ne2 = (1/s, -1/s)\nprint(e1[0]*e2[0] + e1[1]*e2[1])  # 0.0\nprint(e1[0]*e1[0] + e1[1]*e1[1])  # 1.0\n```\nScaling by `$1 \\div \\sqrt{2}$` gives unit vectors, and the script confirms `$e_{1} \\cdot e_{2} = 0$` with `$\\lVert e_{1} \\rVert = 1$`.' },
          { label: 'Step 3: Read the spectral form', text: 'In the basis `$e_{1}, e_{2}$` the matrix is diagonal with `$3$` and `$1$` on the diagonal. Distinct eigenspaces came out orthogonal for free.' }
        ],
        result: 'Eigenvalues `$3$` and `$1$` with orthonormal eigenvectors `$(1, 1) \\div \\sqrt{2}$` and `$(1, -1) \\div \\sqrt{2}$`.'
      },
      {
        title: 'A normal operator that spectral theory skips over real scalars',
        problem: 'Show the quarter-turn `$T(w, z) = (-z, w)$` on `$\\mathbb{R}^{2}$` is normal but owns no orthonormal eigenbasis over `$\\mathbb{R}$`.',
        steps: [
          { label: 'Step 1: Check normality', text: 'Its matrix has columns `$(0, 1)$` and `$(-1, 0)$`, with transpose its negative and `$TT^{*} = T^{*}T = I$`. Hence `$T$` is normal, even unitary, but not self-adjoint.' },
          { label: 'Step 2: Recall the missing spectrum', text: 'From the first section, `$T$` has no real eigenvalue: rotation moves every nonzero vector off its line. An eigenbasis needs eigenvectors, so none exists over `$\\mathbb{R}$`.' },
          { label: 'Step 3: State the precise verdict', text: 'The Real Spectral Theorem does not apply since `$T$` is not self-adjoint, and the Complex one needs complex scalars. Normality alone diagonalizes only over `$\\mathbb{C}$`.' }
        ],
        result: 'Normal and unitary, yet with no real eigenbasis: the field hypothesis is load-bearing.'
      }
    ],
    keyTakeaways: [
      'Adjoints satisfy `$\\langle Tv, w \\rangle = \\langle v, T^{*}w \\rangle$`, with conjugate-transpose matrices.',
      'Self-adjoint operators have real eigenvalues with orthogonal distinct eigenspaces.',
      'Real self-adjoint maps own orthonormal eigenbases: the Real Spectral Theorem.',
      'Normality is the exact boundary of orthonormal diagonalization over `$\\mathbb{C}$`.'
    ],
    quiz: [
      // PYQ-pattern: self-adjoint spectrum drill with changed matrices (rephrased, values changed)
      {
        q: 'What is the matrix of `$T^{*}$` in an orthonormal basis?',
        options: ['The same matrix as `$T$`', 'The entrywise reciprocal matrix', 'The conjugate transpose of the matrix of `$T$`', 'The inverse matrix of `$T$`'],
        answer: 2,
        explanation: 'Step 1: Expand `$\\langle Tv_{k}, e_{j} \\rangle$` in the orthonormal basis. Step 2: Conjugate symmetry moves scalars across the pairing with a bar. Step 3: The coefficient table transposes and conjugates. Step 4: Over real scalars this reduces to the plain transpose.'
      },
      {
        q: 'Why must eigenvalues of a self-adjoint `$T$` be real?',
        options: ['Every operator has real eigenvalues', 'Moving `$\\lambda$` across `$\\langle Tv, v \\rangle$` forces `$\\lambda = \\overline{\\lambda}$`', 'Orthonormal bases contain only real vectors', 'Determinants of symmetric matrices are real'],
        answer: 1,
        explanation: 'Step 1: Take `$Tv = \\lambda v$` with `$v \\ne 0$`. Step 2: Then `$\\lambda \\lVert v \\rVert^{2} = \\langle Tv, v \\rangle = \\langle v, Tv \\rangle$`. Step 3: The last term equals `$\\overline{\\lambda} \\lVert v \\rVert^{2}$`. Step 4: Cancelling the nonzero norm gives `$\\lambda = \\overline{\\lambda}$`.'
      },
      {
        q: 'What does the Real Spectral Theorem conclude for self-adjoint `$T$`?',
        options: ['`$T$` is always invertible', 'An orthonormal eigenbasis diagonalizes `$T$`', 'All eigenvalues equal `$1$`', 'The adjoint `$T^{*}$` vanishes'],
        answer: 1,
        explanation: 'Step 1: Invariant subspaces reduce self-adjoint maps with perpendicular complements. Step 2: Induction peels off unit eigenvectors one by one. Step 3: The collected vectors are orthonormal and spanning. Step 4: In that basis the matrix is diagonal with the real spectrum.'
      },
      {
        q: 'The quarter-turn on `$\\mathbb{R}^{2}$` is normal yet lacks a real eigenbasis because of which fact?',
        options: ['Normal operators are never diagonalizable', 'It is self-adjoint with a defective eigenspace', 'It has no real eigenvalues to build one from', 'Its adjoint does not exist over `$\\mathbb{R}$`'],
        answer: 2,
        explanation: 'Step 1: Normality holds since `$TT^{*} = T^{*}T$`. Step 2: An eigenbasis requires eigenvectors first. Step 3: Rotation moves every nonzero real vector off its line. Step 4: Over `$\\mathbb{C}$` the missing `$\\pm i$` directions appear and diagonalize it.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Spectral theorem via Schur and self-adjointness',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let $V$ be finite dimensional real inner product and $T^{\\ast} = T$ self adjoint. Then all eigenvalues are real, eigenspaces for distinct eigenvalues are orthogonal, and $V$ has an orthonormal eigenbasis diagonalizing $T$ as $T = \\sum_{j} \\lambda_{j} P_{j}$ with orthogonal projections $P_{j}$. Equivalently $A = Q D Q^{T}$ with orthogonal $Q$ and real diagonal $D$ for symmetric matrices. The complex extension states normal $T^{\\ast} T = T T^{\\ast}$ operators diagonalize unitarily. Rayleigh quotients $\\langle T x, x \\rangle / \\langle x, x \\rangle$ attain extrema at eigenvectors.'
          },
          {
            kind: 'proof',
            body: 'Induction on dimension using Schur triangularization: over $\\mathbb{C}$ there is an orthonormal basis with upper triangular matrix. Self adjointness gives $A^{\\ast} = A$, but the adjoint of upper triangular is lower triangular, so $A$ is diagonal with $a_{jj} = \\bar{a}_{jj}$ real. Pick a unit eigenvector $v$; the orthogonal complement $v^{\\perp}$ is invariant because $\\langle T w, v \\rangle = \\langle w, T v \\rangle = \\lambda \\langle w, v \\rangle = 0$ for $w \\in v^{\\perp}$. Restrict and repeat. Orthogonality of distinct eigenspaces follows from $\\lambda \\langle x, y \\rangle = \\langle T x, y \\rangle = \\langle x, T y \\rangle = \\mu \\langle x, y \\rangle$, forcing $\\langle x, y \\rangle = 0$ when $\\lambda \\neq \\mu$.'
          },
          {
            kind: 'remark',
            body: 'Functional calculus $f(T) = \\sum f(\\lambda_{j}) P_{j}$ defines $e^{T}$, $\\sqrt{T}$ and $T^{-1}$ spectrally, with $f$ acting on eigenvalues. **Courant Fischer** $\\lambda_{k} = \\min_{\\dim U = n-k+1} \\max_{0 \\neq x \\in U} \\langle T x, x \\rangle / \\|x\\|^{2}$ variationally characterizes spectra and proves interlacing under compression. Quantum observables are self adjoint with real outcomes, principal component analysis diagonalizes covariance, and graph Laplacians reveal clusters through Fiedler vectors. Nonnormal matrices lack orthogonal diagonalization and exhibit pseudospectral sensitivity.'
          },
        ]
      }
    ],
  }
]
