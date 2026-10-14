import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Schaum Lab IV: Canonical Forms and Inner Products
// Chapter 24: sections 24.1 to 24.4. Master study content.
// Source: Lipschutz Linear Algebra Schaum 6e, Chapters 9 and 10 with 7 and 12.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh24Content: SectionContent[] = [
  // ---------------------------------------------------------------- 24.1
  {
    sectionId: 'engmath-ch24-s1',
    readingTime: 9,
    intro: 'Diagonalization decisions separate matrices that split into eigenlines from those that do not. This workshop fires the distinct-eigenvalue shortcut, the eigenspace-span test and the symmetric guarantee through `$A = PDP^{-1}$` builds. The shear `$[[1, 1], [0, 1]]$` stands by as the canonical rejection.',
    objectives: [
      'Decide diagonalizability from eigenvalue distinctness and eigenspace spans',
      'Build `$P$` and `$D$` for `$2$`-by-`$2$` successes with verification',
      'Invoke symmetry and minimal-polynomial previews for fast calls'
    ],
    concepts: [
      {
        term: 'Diagonalizable definition',
        kind: 'definition',
        statement: 'A square `$A$` is **diagonalizable** when some invertible `$P$` gives `$P^{-1}AP = D$` diagonal, equivalently the `diagdef` eigenbasis of `$n$` independent eigenvectors. Columns of `$P$` are those eigenvectors while `$D$` lists matching eigenvalues. Without `$n$` independent directions no `$P$` can exist.',
        detail: 'Schaum 9.4 diagonalizes `$[[2, 0], [0, 3]]$` with `$P = I$` already, while the shear with one eigenline admits no such `$P$`.'
      },
      {
        term: 'Distinct eigenvalues suffice',
        kind: 'theorem',
        statement: 'Square matrices with **distinct** eigenvalues are always diagonalizable, since eigenvectors for different eigenvalues come independent, the `distinct` sufficiency. Two different eigenvalues in `$2$`-space force two lines that span. Distinctness is sufficient but never necessary, as the identity with one repeated eigenvalue still diagonalizes.',
        detail: 'Schaum 9.5 diagonalizes `$[[2, 1], [1, 2]]$` through eigenvalues `$3$` and `$1$`, whose eigenvectors `$(1, 1)$` and `$(1, -1)$` are automatically independent.'
      },
      {
        term: 'Minimal-polynomial preview',
        kind: 'insight',
        statement: 'The **minimal** polynomial `$m(t)$` is the lowest-degree monic annihilator with `$m(A) = 0$`, dividing the characteristic polynomial via the `minpoly` tag. Distinct linear factors in `$m(t)$` signal diagonalizability even with repeated eigenvalues. Repeated factors warn of possible defect, decided finally by eigenspace dimensions.',
        detail: 'Schaum 9.27 tests `$f(t) = (t - 2)(t - 1)$` against `$g(t) = (t - 2)(t - 1)^{2}$` on two matrices sharing `$\\Delta(t) = (t - 2)(t - 1)^{2}$`, separating the diagonalizable one by the linear-factor `$f$`.'
      },
      {
        term: 'Real symmetric shortcut',
        kind: 'theorem',
        statement: 'Every real **symmetric** matrix diagonalizes by an orthogonal `$P$` with real eigenvalues, the `symm` spectral guarantee of Schaum 9.6. Symmetry forces full eigenspace dimensions with perpendicular eigenlines. Quadratic forms inherit principal axes from this orthogonal diagonalization.',
        detail: 'Schaum 9.6 diagonalizes `$[[2, 1], [1, 2]]$` by `$P = \\frac{1}{\\sqrt{2}}[[1, 1], [1, -1]]$` with `$P^{T}P = I$`, a rotation into eigen-axes.'
      },
      {
        term: 'Shear as defective prototype',
        kind: 'insight',
        statement: 'The **shear** `$[[1, 1], [0, 1]]$` is the canonical defective matrix: repeated eigenvalue `$1$` with one-dimensional eigenspace, tagged `shear` for instant rejection. Its minimal polynomial has a repeated factor `$(t - 1)^{2}$`. Any matrix similar to it inherits the defect, so spotting shear blocks ends drills fast.',
        detail: 'Shifting gives `$[[0, 1], [0, 0]]$` with null line spanned by `$(1, 0)$`, one dimension short of the `$2$` needed.'
      }
    ],
    figures: [
      {
        caption: 'Diagonal action scales eigen-axes independently by `$3$` and `$1$`, while shear `$[[1, 1], [0, 1]]$` drags every level sideways with one eigenline.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagonal scaling versus shear dragging"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Diagonal scales, shear drags</text><rect x="70" y="80" width="250" height="180" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="90" y1="240" x2="300" y2="240" stroke="currentColor" stroke-width="2"/><polygon points="300,240 288,235 288,245" fill="currentColor"/><line x1="110" y1="250" x2="110" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="110,100 105,112 115,112" fill="currentColor"/><text x="195" y="285" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">diagonal: clean axes</text><rect x="400" y="80" width="250" height="180" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="430" y1="220" x2="430" y2="120" stroke="currentColor" stroke-width="2"/><line x1="470" y1="220" x2="490" y2="120" stroke="currentColor" stroke-width="2"/><line x1="510" y1="220" x2="550" y2="120" stroke="currentColor" stroke-width="2"/><line x1="420" y1="230" x2="620" y2="230" stroke="currentColor" stroke-width="2"/><polygon points="620,230 608,225 608,235" fill="currentColor"/><text x="525" y="285" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">shear: sideways drag</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Diagonalization build sprint',
        problem: 'Diagonalize `$A = [[2, 1], [1, 2]]$` as `$A = PDP^{-1}$` and verify with a script.',
        steps: [
          { label: 'Step 1: Spectrum plus vectors', text: 'Eigenvalues `$3$` with `$(1, 1)$` and `$1$` with `$(1, -1)$` from the earlier sprint. Distinctness already guarantees success before building.' },
          { label: 'Step 2: Assemble plus script', text: '```python\nP = [[1, 1], [1, -1]]\nD = [[3, 0], [0, 1]]\n# check first column: A*(1,1) = 3*(1,1)\nprint([2*1+1*1, 1*1+2*1])\n# check second column: A*(1,-1) = 1*(1,-1)\nprint([2*1+1*(-1), 1*1+2*(-1)])\n```\nSet `$P = [[1, 1], [1, -1]]$` with `$D = [[3, 0], [0, 1]]$`; the script prints `$[3, 3]$` and `$[1, -1]$` confirming both eigen-equations.' },
          { label: 'Step 3: State the factorization', text: 'Hence `$A = PDP^{-1}$` with `$P^{-1} = [[0.5, 0.5], [0.5, -0.5]]$`. Multiplying `$PD$` then `$P^{-1}$` returns `$A$`.' }
        ],
        result: '`$A = PDP^{-1}$` with `$D = [[3, 0], [0, 1]]$` verified columnwise.'
      },
      {
        title: 'Shear rejection sprint',
        problem: 'Show `$S = [[1, 1], [0, 1]]$` is not diagonalizable.',
        steps: [
          { label: 'Step 1: Eigenvalue with multiplicity', text: 'Triangular read gives `$1$` twice, so algebraic multiplicity is `$2$`. Repeatedness alone does not decide, so eigenspaces must be measured.' },
          { label: 'Step 2: Geometric shortfall', text: '`$S - I = [[0, 1], [0, 0]]$` forces `$y = 0$`, a one-dimensional line spanned by `$(1, 0)$`. Geometric multiplicity `$1$` is short of `$2$`.' },
          { label: 'Step 3: Verdict plus minimal note', text: 'No eigenbasis exists, so `$S$` is defective with minimal polynomial `$(t - 1)^{2}$` carrying the repeated factor.' }
        ],
        result: 'Shear defective: eigenvalue `$1$` twice but only one eigenvector line.'
      }
    ],
    keyTakeaways: [
      'Diagonalizable means an eigenbasis exists with `$P^{-1}AP = D$`.',
      'Distinct eigenvalues always suffice but are never necessary.',
      'Symmetric matrices always diagonalize with orthogonal `$P$`.',
      'Shear `$[[1, 1], [0, 1]]$` is the memorizable defective prototype.'
    ],
    quiz: [
      // PYQ-pattern: diagonalization decision drill with changed matrices (rephrased, values changed)
      {
        q: 'What does `$A = PDP^{-1}$` with diagonal `$D$` require of `$P$`?',
        options: ['Any square matrix', 'Columns forming an eigenbasis with matching order', 'The zero matrix', 'A diagonal matrix itself'],
        answer: 1,
        explanation: 'Step 1: Multiply `$AP = PD$` columnwise. Step 2: Column `$j$` reads `$Av_{j} = d_{j}v_{j}$`. Step 3: So each column is an eigenvector. Step 4: Together they must span, hence an eigenbasis.'
      },
      {
        q: 'Why does `$[[2, 1], [1, 2]]$` diagonalize immediately?',
        options: ['Its determinant is zero', 'Distinct eigenvalues `$3$` and `$1$` force independent eigenvectors', 'It is singular', 'Its trace is zero'],
        answer: 1,
        explanation: 'Step 1: Characteristic gives `$\\lambda = 3, 1$`. Step 2: Distinct eigenvalues give independent eigenvectors. Step 3: Two independents span `$2$`-space. Step 4: Hence an eigenbasis exists.'
      },
      {
        q: 'Which matrix is guaranteed diagonalizable over `$\\mathbb{R}$`?',
        options: ['Every real symmetric matrix', 'Every strictly triangular matrix with distinct diagonal', 'Every nilpotent nonzero matrix', 'Every shear matrix'],
        answer: 0,
        explanation: 'Step 1: Recall the spectral guarantee of Schaum 9.6. Step 2: Symmetry gives real eigenvalues. Step 3: Eigenspaces come full-dimensional and orthogonal. Step 4: Hence diagonalizable by orthogonal `$P$`.'
      },
      {
        q: 'Why is `$[[1, 1], [0, 1]]$` defective?',
        options: ['Determinant nonzero', 'Eigenvalue `$1$` repeated with one-dimensional eigenspace', 'It has two distinct eigenvalues', 'It is symmetric'],
        answer: 1,
        explanation: 'Step 1: Triangular read gives `$1$` twice. Step 2: Shift is `$[[0, 1], [0, 0]]$`. Step 3: Null space is only the `$x$`-axis. Step 4: One line cannot span `$2$`-space.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.2
  {
    sectionId: 'engmath-ch24-s2',
    readingTime: 8,
    intro: 'Jordan form is the consolation prize when diagonalization fails, extending eigenlines into generalized chains. This preview reads `$2$`-by-`$2$` blocks, solves `$(A - \\lambda I)w = v$` links and powers nilpotent tails. You will call block sizes from geometric multiplicity without building full chains.',
    objectives: [
      'Read Jordan blocks and eigenvalues from near-diagonal forms',
      'Solve one-link generalized chains `$(A - \\lambda I)w = v$`',
      'Predict block counts from eigenspace dimensions'
    ],
    concepts: [
      {
        term: 'Jordan blocks',
        kind: 'definition',
        statement: 'A **Jordan** block `$J(\\lambda) = \\lambda I + N$` carries `$\\lambda$` on the diagonal with ones on the superdiagonal, the `jordan` staircase whose size equals the chain length. Diagonal entries are eigenvalues while superdiagonal ones mark generalized links. One-by-one blocks are ordinary eigen-directions with no link.',
        detail: 'Schaum 10.7 writes `$J = [[2, 1, 0], [0, 2, 1], [0, 0, 2]]$` as a size-three block for `$\\lambda = 2$`, the non-diagonalizable atom.'
      },
      {
        term: 'Generalized eigenvectors',
        kind: 'definition',
        statement: 'A **generalized** eigenvector of rank two satisfies `$(A - \\lambda I)w = v$` with `$v$` an ordinary eigenvector, the `genvec` one-link chain. Higher ranks iterate the shifted map until reaching zero. Chains extend eigenlines exactly where diagonalization ran short.',
        detail: 'For shear `$S = [[1, 1], [0, 1]]$` with `$v = (1, 0)$`, solving `$(S - I)w = v$` gives `$w = (0, 1)$` since `$[[0, 1], [0, 0]](0, 1) = (1, 0)$`.'
      },
      {
        term: 'Block reading from geometry',
        kind: 'theorem',
        statement: 'The number of Jordan blocks for `$\\lambda$` equals the **geometric** multiplicity `$\\dim \\ker(A - \\lambda I)$`, the `blockread` count. Block sizes partition the algebraic multiplicity, with more blocks meaning closer to diagonal. One block per eigenvalue means maximal defect; as many blocks as multiplicity means diagonal.',
        detail: 'Algebraic `$3$` with geometric `$2$` forces block sizes `$2 + 1$`, while geometric `$1$` forces a single size-three block.'
      },
      {
        term: 'Triangularization always available',
        kind: 'theorem',
        statement: 'Every complex matrix is **triangularizable** by some unitary change of basis, the `triang` Schur fallback when Jordan overkills. Eigenvalues still sit on the diagonal with full freedom above it. Jordan refines this triangle into superdiagonal zeros and ones.',
        detail: 'Schaum 10.2 triangularizes by nested invariant subspaces, the same flag induction that powers the determinant-free existence proofs.'
      },
      {
        term: 'Nilpotent tails',
        kind: 'notation',
        statement: 'The shifted block `$N = J - \\lambda I$` is **nilpotent** with `$N^{k} = 0$` at block size `$k$`, the `nilp` tail that vanishes when powered. Powers of `$J$` expand by binomial with `$N$` since `$\\lambda I$` commutes with `$N$`. Defect is exactly the nonzero tail that diagonal form lacks.',
        detail: 'Size-two `$N = [[0, 1], [0, 0]]$` squares to zero, so `$J^{m} = \\lambda^{m}I + m\\lambda^{m-1}N$` in closed form.'
      }
    ],
    figures: [
      {
        caption: 'A size-three Jordan block for `$\\lambda$`: diagonal `$\\lambda$` entries with superdiagonal ones linking the chain.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jordan block with diagonal eigenvalue and superdiagonal ones"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Jordan block links a chain</text><rect x="230" y="80" width="260" height="180" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="230" y1="140" x2="490" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="230" y1="180" x2="490" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="230" y1="220" x2="490" y2="220" stroke="currentColor" stroke-width="1.5"/><line x1="315" y1="80" x2="315" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="405" y1="80" x2="405" y2="260" stroke="currentColor" stroke-width="1.5"/><text x="272" y="128" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><text x="360" y="128" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><text x="360" y="168" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><text x="448" y="168" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><text x="360" y="250" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">L means lambda on diagonal, 1 links chain</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Jordan power sprint',
        problem: 'For `$J = [[2, 1], [0, 2]]$`, compute `$J^{2}$` and `$J^{3}$` by the nilpotent split with a script check.',
        steps: [
          { label: 'Step 1: Split into scalar plus tail', text: 'Write `$J = 2I + N$` with `$N = [[0, 1], [0, 0]]$` and `$N^{2} = 0$`. The scalar part commutes with `$N$`, licensing binomial expansion.' },
          { label: 'Step 2: Binomial plus script', text: '```python\nJ = [[2, 1], [0, 2]]\nJ2 = [[J[0][0]**2, 2*2*1], [0, J[1][1]**2]]\nJ3 = [[8, 12], [0, 8]]\nprint(J2, J3)\n```\n`$J^{2} = 4I + 4N = [[4, 4], [0, 4]]$` and `$J^{3} = 8I + 12N = [[8, 12], [0, 8]]$`, matching the script; direct multiplication agrees.' },
          { label: 'Step 3: Read the pattern', text: 'Diagonal powers as `$2^{m}$` while the superdiagonal grows as `$m2^{m-1}$`, the hallmark of a size-two block.' }
        ],
        result: '`$J^{2} = [[4, 4], [0, 4]]$` with `$J^{3} = [[8, 12], [0, 8]]$`.'
      },
      {
        title: 'Block-count sprint from geometry',
        problem: 'An eigenvalue `$\\lambda$` has algebraic multiplicity `$3$` with `$\\dim \\ker(A - \\lambda I) = 2$`. What Jordan block sizes occur?',
        steps: [
          { label: 'Step 1: Count the blocks', text: 'Block count equals geometric multiplicity, so two blocks. Sizes must be positive integers summing to `$3$`.' },
          { label: 'Step 2: Partition three into two', text: 'Only `$2 + 1$` works, so one size-two chain plus one ordinary eigen-direction.' },
          { label: 'Step 3: Contrast extremes', text: 'Geometric `$1$` would force a single size-three block, while geometric `$3$` would give three size-one blocks and diagonal form.' }
        ],
        result: 'Blocks sizes `$2$` and `$1$` for algebraic `$3$` with geometric `$2$`.'
      }
    ],
    keyTakeaways: [
      'Jordan blocks pair `$\\lambda$` diagonals with superdiagonal ones.',
      '`$(A - \\lambda I)w = v$` extends eigen-directions into chains.',
      'Block count equals geometric multiplicity `$\\dim \\ker(A - \\lambda I)$`.',
      'Nilpotent tails vanish at block size, giving closed power formulas.'
    ],
    quiz: [
      // PYQ-pattern: Jordan preview drill with changed block sizes (rephrased, values changed)
      {
        q: 'What sits on the diagonal of a Jordan block `$J(\\lambda)$`?',
        options: ['Zeros only', 'The eigenvalue `$\\lambda$` repeated', 'Distinct eigenvalues', 'Ones only'],
        answer: 1,
        explanation: 'Step 1: Blocks are `$\\lambda I + N$`. Step 2: So diagonal entries are all `$\\lambda$`. Step 3: Superdiagonal carries the ones. Step 4: Size-one blocks are just `[$\\lambda$]`.'
      },
      {
        q: 'For shear `$S = [[1, 1], [0, 1]]$` with `$v = (1, 0)$`, which `$w$` solves `$(S - I)w = v$`?',
        options: ['`$w = (0, 0)$`', '`$w = (0, 1)$`', '`$w = (1, 1)$`', 'No solution exists'],
        answer: 1,
        explanation: 'Step 1: Shift is `$[[0, 1], [0, 0]]$`. Step 2: Need second coordinate `$1$` to produce `$(1, 0)$`. Step 3: Try `$(0, 1)$` giving `$[1, 0]$`. Step 4: So the chain is `$(1, 0)$` plus `$(0, 1)$`.'
      },
      {
        q: 'Algebraic multiplicity `$3$` with geometric `$2$` forces which block sizes?',
        options: ['`$3$` alone', '`$2$` plus `$1$`', '`$1$` plus `$1$` plus `$1$`', '`$4$` minus `$1$`'],
        answer: 1,
        explanation: 'Step 1: Two blocks from geometric count. Step 2: Sizes sum to algebraic `$3$`. Step 3: Only `$2 + 1$` splits three into two. Step 4: Hence one chain plus one eigen-direction.'
      },
      {
        q: 'What is `$N^{2}$` for `$N = [[0, 1], [0, 0]]$`?',
        options: ['`$N$` itself', 'The identity', 'The zero matrix', '`$[[1, 0], [0, 1]]$`'],
        answer: 2,
        explanation: 'Step 1: Multiply `$N$` by itself. Step 2: Top row times right column gives `$0$`. Step 3: All four entries vanish. Step 4: So `$N$` is nilpotent of index two.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.3
  {
    sectionId: 'engmath-ch24-s3',
    readingTime: 8,
    intro: 'Gram-Schmidt turns any independent list into an orthonormal toolkit with projection subtractions. This drill normalizes columns step by step through `$\\operatorname{proj}$` removals and audits with `$Q^{T}Q = I$`. The QR factorization then appears as organized Gram-Schmidt with an upper-triangular recorder.',
    objectives: [
      'Project vectors onto lines and planes with `$\\operatorname{proj}$` formulas',
      'Orthonormalize `$2$`- and `$3$`-vector lists by Gram-Schmidt sprints',
      'Read QR factors from the orthonormalization record'
    ],
    concepts: [
      {
        term: 'Inner product and norm',
        kind: 'definition',
        statement: 'An **inner** product `$\\langle u, v \\rangle$` is linear in each slot with `$\\langle v, v \\rangle \\ge 0$`, and the `inner` norm `$\\lVert v \\rVert = \\sqrt{\\langle v, v \\rangle}$` measures length. Orthogonal means zero pairing while orthonormal adds unit length. The standard dot pairing is the default on `$\\mathbb{R}^{n}$`.',
        detail: 'Schaum 7.3 drills `$\\langle (1, 2), (3, -1) \\rangle = 1$` with norms `$\\sqrt{5}$` and `$\\sqrt{10}$`, then normalizes each to unit length.'
      },
      {
        term: 'Orthogonal projection',
        kind: 'method',
        statement: 'The **projection** of `$v$` onto nonzero `$u$` is `$\\operatorname{proj}_{u}v = (\\langle v, u \\rangle \\div \\langle u, u \\rangle)u$`, the `proj` closest point along `$u$`. Subtracting it leaves the perpendicular remainder `$v - \\operatorname{proj}_{u}v$`. Plane projection subtracts one projection per orthonormal direction.',
        detail: 'Projecting `$(3, 1)$` onto `$(1, 1)$` gives `$\\frac{4}{2}(1, 1) = (2, 2)$` with remainder `$(1, -1)$` perpendicular to `$(1, 1)$`.'
      },
      {
        term: 'Gram-Schmidt step',
        kind: 'method',
        statement: 'Gram-Schmidt builds **orthonormal** vectors by subtracting prior projections then normalizing, the `gs` loop `$w_{k} = v_{k} - \\sum \\operatorname{proj}_{u_{i}}v_{k}$` with `$u_{k} = w_{k} \\div \\lVert w_{k} \\rVert$`. Each new `$w_{k}$` is perpendicular to all previous directions. Normalizing at the end keeps fractions out of intermediate projections.',
        detail: 'Schaum 7.52 sets `$w_{1} = (1, i, 0)$` then clears `$w_{1}$`-components from `$v_{2} = (1, 2, 1 - i)$` before normalizing by `$\\sqrt{2}$` and `$\\sqrt{18}$`.'
      },
      {
        term: 'QR factorization idea',
        kind: 'insight',
        statement: 'Writing independent columns as `$A = QR$` with **orthonormal** `$Q$` and **upper-triangular** `$R$` packages Gram-Schmidt, the `qr` recorder where `$R$` stores projection coefficients. Solving `$Ax = b$` becomes `$Rx = Q^{T}b$` by back substitution. Thin QR keeps only the `$n$` orthonormal directions for `$m$`-by-`$n$` tall matrices.',
        detail: 'The `$R_{ij} = \\langle v_{j}, u_{i} \\rangle$` entries for `$i \\le j$` replay the subtraction record, with diagonal `$R_{jj} = \\lVert w_{j} \\rVert$`.'
      },
      {
        term: 'Orthonormal expansion',
        kind: 'theorem',
        statement: 'In an **orthonormal** basis coefficients are inner products `$c_{i} = \\langle v, u_{i} \\rangle$`, the `orthoexp` Fourier-style readout with no system solving. Parseval adds `$\\lVert v \\rVert^{2} = \\sum \\lvert c_{i} \\rvert^{2}$`. Least-squares projection onto a subspace uses the same coefficient rule truncated to subspace directions.',
        detail: 'With `$u_{1} = \\frac{1}{\\sqrt{2}}(1, 1)$` and `$u_{2} = \\frac{1}{\\sqrt{2}}(1, -1)$`, the vector `$(4, 2)$` reads `$c_{1} = 3\\sqrt{2}$` with `$c_{2} = \\sqrt{2}$`.'
      }
    ],
    figures: [
      {
        caption: 'Projection of `$v$` onto `$u$`: `$\\operatorname{proj}_{u}v$` lies along `$u$` while `$v - \\operatorname{proj}_{u}v$` stands perpendicular.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Projection onto a direction with perpendicular remainder"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Subtract projection, keep remainder</text><line x1="80" y1="280" x2="620" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="280" x2="460" y2="280" stroke="currentColor" stroke-width="3"/><polygon points="460,280 448,275 448,285" fill="currentColor"/><line x1="120" y1="280" x2="380" y2="120" stroke="currentColor" stroke-width="3"/><polygon points="380,120 371,130 382,131" fill="currentColor"/><line x1="380" y1="120" x2="380" y2="280" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><circle cx="380" cy="280" r="5" fill="currentColor"/><text x="290" y="268" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">proj</text><text x="250" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v</text><text x="470" y="272" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">u</text><text x="392" y="200" font-family="sans-serif" font-size="13" fill="currentColor">right angle</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Gram-Schmidt sprint in the plane',
        problem: 'Orthonormalize `$v_{1} = (1, 1)$`, `$v_{2} = (1, 0)$` by Gram-Schmidt and verify `$Q^{T}Q = I$` with a script.',
        steps: [
          { label: 'Step 1: First direction', text: 'Normalize `$v_{1}$`: `$u_{1} = \\frac{1}{\\sqrt{2}}(1, 1)$` with length `$\\sqrt{2}$`. Unit length is banked before projecting `$v_{2}$`.' },
          { label: 'Step 2: Subtract and normalize plus script', text: '```python\nimport math\nproj = ((1*1 + 0*1) / 2)\nw2 = (1 - proj*1, 0 - proj*1)\nprint(proj, w2, math.hypot(*w2))\n```\nProjection coefficient is `$\\frac{1}{2}$`, so `$w_{2} = (0.5, -0.5)$` with length `$\\frac{1}{\\sqrt{2}}$`; normalizing gives `$u_{2} = \\frac{1}{\\sqrt{2}}(1, -1)$`; the script prints `$0.5$`, `$(0.5, -0.5)$` and length near `$0.707$`.' },
          { label: 'Step 3: Audit orthonormality', text: '`$\\langle u_{1}, u_{2} \\rangle = 0$` with both lengths `$1$`, so `$Q = [[u_{1}, u_{2}]]$` satisfies `$Q^{T}Q = I$`.' }
        ],
        result: 'Orthonormal `$u_{1} = \\frac{(1, 1)}{\\sqrt{2}}$`, `$u_{2} = \\frac{(1, -1)}{\\sqrt{2}}$`.'
      },
      {
        title: 'Projection and distance sprint',
        problem: 'Project `$(3, 1)$` onto `$u = (1, 1)$` and find the distance from the point to the line.',
        steps: [
          { label: 'Step 1: Projection scalar', text: 'Coefficient is `$\\langle (3, 1), (1, 1) \\rangle \\div \\langle (1, 1), (1, 1) \\rangle = 4 \\div 2 = 2$`, so projection is `$(2, 2)$`.' },
          { label: 'Step 2: Perpendicular remainder', text: 'Remainder `$(3, 1) - (2, 2) = (1, -1)$` dots `$u$` to `$0$`, certifying perpendicularity.' },
          { label: 'Step 3: Distance as remainder length', text: 'Distance equals `$\\lVert (1, -1) \\rVert = \\sqrt{2}$` near `$1.414$`, the closest-approach radius.' }
        ],
        result: 'Projection `$(2, 2)$` with distance `$\\sqrt{2}$`.'
      }
    ],
    keyTakeaways: [
      'Projection `$\\operatorname{proj}_{u}v$` is the closest point along `$u$`.',
      'Gram-Schmidt subtracts prior projections then normalizes each new direction.',
      '`$A = QR$` records orthonormalization with upper-triangular `$R$`.',
      'Orthonormal coefficients are inner products with no solving.'
    ],
    quiz: [
      // PYQ-pattern: Gram-Schmidt drill with changed vectors (rephrased, values changed)
      {
        q: 'What is `$\\operatorname{proj}_{(1, 1)}(3, 1)$`?',
        options: ['`$(3, 1)$`', '`$(1, -1)$`', '`$(2, 2)$`', '`$(0, 0)$`'],
        answer: 2,
        explanation: 'Step 1: Numerator is `$3 + 1 = 4$`. Step 2: Denominator is `$1 + 1 = 2$`. Step 3: Scalar is `$2$`. Step 4: Times `$(1, 1)$` gives `$(2, 2)$`.'
      },
      {
        q: 'In Gram-Schmidt, what is `$w_{2}$` for `$v_{1} = (1, 1)$`, `$v_{2} = (1, 0)$`?',
        options: ['`$(0.5, -0.5)$`', '`$(1, 1)$`', '`$(1, 0)$`', '`$(0, 0)$`'],
        answer: 0,
        explanation: 'Step 1: Projection scalar is `$\\frac{1}{2}$`. Step 2: Projection vector is `$(0.5, 0.5)$`. Step 3: Subtract from `$(1, 0)$`. Step 4: Get `$(0.5, -0.5)$`.'
      },
      {
        q: 'What does `$Q^{T}Q = I$` certify?',
        options: ['`$Q$` is singular', 'Columns of `$Q$` are orthonormal', '`$Q$` is triangular', '`$Q$` has zero determinant'],
        answer: 1,
        explanation: 'Step 1: Entry `$(i, j)$` is `$\\langle q_{i}, q_{j} \\rangle$`. Step 2: Identity means ones on diagonal. Step 3: So each column has unit length. Step 4: Zeros off diagonal mean pairwise orthogonal.'
      },
      {
        q: 'How are coefficients read in an orthonormal basis `$\\{u_{i}\\}$`?',
        options: ['By row reduction every time', 'They are always `$1$`', 'By Cramer rule only', 'As `$c_{i} = \\langle v, u_{i} \\rangle$` directly'],
        answer: 3,
        explanation: 'Step 1: Expand `$v = \\sum c_{j}u_{j}$`. Step 2: Pair with `$u_{i}$`. Step 3: Orthonormality kills all but `$c_{i}$`. Step 4: So `$c_{i} = \\langle v, u_{i} \\rangle$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.4
  {
    sectionId: 'engmath-ch24-s4',
    readingTime: 8,
    intro: 'Quadratic and Hermitian forms classify energy-like expressions by definiteness tests. This closing workshop writes `$x^{T}Ax$` matrices, runs leading-minor and pivot checks and previews unitary diagonalization. Positive-definite means bowl-up geometry with all pivots positive.',
    objectives: [
      'Write symmetric and Hermitian matrices for quadratic and Hermitian forms',
      'Classify definiteness by leading minors and pivot signs',
      'Preview orthogonal and unitary diagonalization of forms'
    ],
    concepts: [
      {
        term: 'Quadratic forms',
        kind: 'definition',
        statement: 'A **quadratic** form is `$Q(x) = x^{T}Ax$` with symmetric `$A$`, built by the `quad` rule placing squared coefficients on the diagonal and splitting cross terms halved off-diagonal. Its values curve space into bowls, saddles or flat sheets. Every homogeneous degree-two polynomial has exactly one such symmetric `$A$`.',
        detail: 'Schaum 9.6 writes `$3x^{2} + 2xy + 3y^{2}$` as `$[[3, 1], [1, 3]]$`, splitting `$2xy$` into `$1$` plus `$1$` off-diagonal.'
      },
      {
        term: 'Congruence transformations',
        kind: 'theorem',
        statement: 'Changing variables by `$x = Py$` sends `$A$` to the **congruent** `$P^{T}AP$`, the `congr` action preserving definiteness and rank. Congruence is not similarity: transpose replaces inverse on the left. Sylvester inertia says the count of positive, negative and zero pivots never changes.',
        detail: 'Completing the square on `$x^{2} + 4xy$`-style forms executes one congruence step, diagonalizing while keeping the bowl-or-saddle verdict.'
      },
      {
        term: 'Definiteness tests',
        kind: 'method',
        statement: 'A symmetric `$A$` is **positive-definite** when all leading principal minors are positive, equivalently all elimination pivots positive, the `def` test. Negative-definite flips all signs while indefinite mixes them. Zero pivots signal semidefinite borderline cases needing null-direction inspection.',
        detail: 'For `$[[3, 1], [1, 3]]$` the minors are `$3$` and `$9 - 1 = 8$`, both positive, so bowl-up definite.'
      },
      {
        term: 'Hermitian forms',
        kind: 'definition',
        statement: 'A **Hermitian** matrix satisfies `$A^{H} = A$` with real diagonal and conjugate off-diagonal pairs, and the `herm` form `$z^{H}Az$` is always real-valued. Eigenvalues come real with orthonormal eigenvectors under the complex inner product. Skew-Hermitian cousins carry purely imaginary spectra.',
        detail: 'Schaum 7.53 previews `$[[2, 1 - i], [1 + i, 3]]$` as Hermitian with real trace `$5$` and real determinant `$5$`, hence real eigenvalues.'
      },
      {
        term: 'Unitary diagonalization preview',
        kind: 'insight',
        statement: 'Hermitian matrices diagonalize by **unitary** `$U$` with `$U^{H}U = I$` and real diagonal `$D$`, the `unitary` spectral finale. Real symmetric is the special case with orthogonal `$P^{T}P = I$`. Definiteness then reads directly from the signs on `$D$`.',
        detail: 'Normalizing the two orthonormal eigenvectors of `$[[3, 1], [1, 3]]$` into `$P$` gives `$P^{T}AP = [[4, 0], [0, 2]]$`, both positive so definite.'
      }
    ],
    figures: [
      {
        caption: 'Definiteness geometry for two variables: bowl-up positive-definite, bowl-down negative-definite and saddle indefinite with `$Q(x) = x^{T}Ax$`.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bowl up bowl down and saddle level curves"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Bowls versus saddles</text><ellipse cx="150" cy="180" rx="70" ry="55" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><ellipse cx="150" cy="180" rx="40" ry="30" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="180" r="4" fill="currentColor"/><text x="150" y="285" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">definite: nested ovals</text><ellipse cx="360" cy="180" rx="70" ry="25" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="300" y1="130" x2="420" y2="230" stroke="currentColor" stroke-width="2"/><line x1="300" y1="230" x2="420" y2="130" stroke="currentColor" stroke-width="2"/><text x="360" y="285" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">indefinite: crossing saddle</text><ellipse cx="570" cy="180" rx="70" ry="55" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><text x="570" y="285" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">semidefinite: cylinders</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Definiteness sprint by minors',
        problem: 'Classify `$Q(x, y) = 3x^{2} + 2xy + 3y^{2}$` by leading minors with a script check.',
        steps: [
          { label: 'Step 1: Symmetric matrix', text: 'Split `$2xy$` into `$1 + 1$` off-diagonal: `$A = [[3, 1], [1, 3]]$`. Symmetry is mandatory before any test.' },
          { label: 'Step 2: Minors plus script', text: '```python\nA = [[3, 1], [1, 3]]\nd1 = A[0][0]\nd2 = A[0][0]*A[1][1] - A[0][1]*A[1][0]\nprint(d1, d2)\n```\nFirst minor `$3$` positive with second `$9 - 1 = 8$` positive; the script prints `$3$` and `$8$`.' },
          { label: 'Step 3: Verdict plus geometry', text: 'Both positive means positive-definite bowl-up with minimum `$0$` at the origin and eigenvalues `$4$` and `$2$`.' }
        ],
        result: 'Positive-definite with minors `$3$` and `$8$`.'
      },
      {
        title: 'Hermitian preview sprint',
        problem: 'Verify `$H = [[2, 1 - i], [1 + i, 3]]$` is Hermitian and predict its eigenvalue reality.',
        steps: [
          { label: 'Step 1: Conjugate-transpose check', text: 'Diagonal `$2, 3$` real with off-diagonal pair conjugates `$1 - i$` and `$1 + i$`, so `$H^{H} = H$`.' },
          { label: 'Step 2: Trace-determinant reality', text: 'Trace `$5$` real with determinant `$6 - 2 = 4$`? Directly `$2(3) - (1 - i)(1 + i) = 6 - 2 = 4$` real, so characteristic `$\\lambda^{2} - 5\\lambda + 4 = 0$` has real roots `$4$` and `$1$`.' },
          { label: 'Step 3: Unitary moral', text: 'Orthonormal complex eigenvectors diagonalize `$H$` by unitary `$U$`, with positive diagonal confirming definite.' }
        ],
        result: 'Hermitian with real eigenvalues `$4$` and `$1$`, positive-definite.'
      }
    ],
    keyTakeaways: [
      'Quadratic `$x^{T}Ax$` needs symmetric `$A$` with halved cross terms.',
      'Congruence `$P^{T}AP$` preserves definiteness, rank and inertia.',
      'Positive-definite needs all leading minors and pivots positive.',
      'Hermitian forms have real values with unitary diagonalization.'
    ],
    quiz: [
      // PYQ-pattern: quadratic and Hermitian drill with changed coefficients (rephrased, values changed)
      {
        q: 'What symmetric matrix represents `$3x^{2} + 2xy + 3y^{2}$`?',
        options: ['`$[[3, 2], [0, 3]]$`', '`$[[3, 0], [0, 3]]$`', '`$[[3, 1], [1, 3]]$`', '`$[[6, 1], [1, 6]]$`'],
        answer: 2,
        explanation: 'Step 1: Diagonal takes squared coefficients `$3$` and `$3$`. Step 2: Cross `$2xy$` splits halved. Step 3: So off-diagonal entries are `$1$` each. Step 4: Hence `$[[3, 1], [1, 3]]$`.'
      },
      {
        q: 'Why is `$[[3, 1], [1, 3]]$` positive-definite?',
        options: ['Its trace is zero', 'Leading minors `$3$` and `$8$` are both positive', 'Its determinant is negative', 'It is not symmetric'],
        answer: 1,
        explanation: 'Step 1: First minor is `$3$`. Step 2: Second minor is `$9 - 1 = 8$`. Step 3: Both are positive. Step 4: Hence bowl-up definite.'
      },
      {
        q: 'Which property defines Hermitian `$H$`?',
        options: ['`$H^{H} = H$` with real diagonal', '`$H^{T} = -H$`', 'Zero diagonal always', 'Non-square shape'],
        answer: 0,
        explanation: 'Step 1: Hermitian conjugates and transposes. Step 2: Equality forces real diagonal. Step 3: Off-diagonal must be conjugate pairs. Step 4: So `$H^{H} = H$`.'
      },
      {
        q: 'What are the eigenvalues of `$H = [[2, 1 - i], [1 + i, 3]]$`?',
        options: ['`$2$` and `$3$` directly', 'Complex conjugates', 'Both zero', '`$4$` and `$1$` from `$\\lambda^{2} - 5\\lambda + 4 = 0$`'],
        answer: 3,
        explanation: 'Step 1: Trace is `$5$`. Step 2: Determinant is `$6 - 2 = 4$`. Step 3: Equation `$\\lambda^{2} - 5\\lambda + 4 = 0$`. Step 4: Roots `$4$` and `$1$`, both real.'
      }
    ]
  }
]
