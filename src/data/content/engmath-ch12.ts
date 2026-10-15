import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 12: Numeric Linear Algebra & Equation
// Solving (Kreyszig 10e, Part E, Chapters 19–20).
// Sections 12.1 – 12.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'engmath-ch12-s1',
    readingTime: 9,
    intro: 'Gauss elimination solves linear systems by clearing one column at a time until back substitution can unwind the answer. Naive elimination divides by whatever sits on the diagonal, which fails on zero pivots and amplifies rounding on tiny ones. This section builds forward elimination with multipliers, adds partial pivoting as the standard safeguard, and counts the arithmetic cost precisely.',
    objectives: [
      'Carry out forward elimination with multipliers and finish with back substitution on small systems',
      'Apply partial pivoting by row swaps and explain the multiplier bound it guarantees',
      'Quote the elimination operation count and predict how cost grows with system size'
    ],
    concepts: [
      {
        term: 'Forward elimination with multipliers',
        kind: 'method',
        statement: '**Forward elimination** clears column `$k$` below the diagonal by subtracting `$m_{ki}$` times the pivot row, where the **multiplier** `$m_{ki} = \\dfrac{a_{ki}^{(k)}}{a_{kk}^{(k)}}$` is stored in the `mult` position it just zeroed. Each stage preserves the solution set because it applies elementary row operations, and after `$n - 1$` stages the system stands in upper-triangular form. The multipliers double as the record of the whole reduction, which the LU chapter reuses directly.',
        detail: 'The superscript on `$a_{ki}^{(k)}$` marks values already updated by earlier stages, never the original entries, a distinction that prevents most hand-computation slips.'
      },
      {
        term: 'Partial pivoting by row swaps',
        kind: 'method',
        statement: '**Partial pivoting** swaps in the largest-magnitude entry of the current column as the pivot before eliminating, so every multiplier satisfies `$|m_{ki}| \\le 1$` and previously created zeros stay intact under the `swap` strategy. This single habit cures both failure modes at once: exact zeros never divide, and tiny pivots never inflate rounding. Full pivoting also swaps columns at higher bookkeeping cost, which is why production codes default to the partial form.',
        detail: 'Each row swap flips the determinant sign, so determinant tracking must count swaps while solution tracking can ignore them.'
      },
      {
        term: 'Back substitution unwinds triangular systems',
        kind: 'method',
        statement: '**Back substitution** reads `$x_{n}$` from the last equation and climbs upward through `$x_{i} = (y_{i} - \\sum_{j>i} u_{ij}x_{j}) \\div u_{ii}$`, one `backsolve` division per unknown. It applies to any upper-triangular system regardless of how elimination produced it, and it costs only quadratic effort against the cubic cost of getting there. Forward substitution is its mirror image for lower-triangular systems, marching from `$x_{1}$` downward instead.',
        detail: 'A zero diagonal entry in `$U$` makes back substitution impossible, which correctly reports a singular or numerically singular matrix.'
      },
      {
        term: 'Operation count of elimination',
        kind: 'theorem',
        statement: 'Elimination needs about **one third of `$n$` cubed** multiplications, `$\\frac{n^{3}}{3}$`, plus about `$\\frac{n^{2}}{2}$` for each back substitution, measured in the `flops` budget of a solver. Doubling `$n$` therefore multiplies elimination work roughly eightfold, which is why a `$1000$-equation` system is routine while a million-equation dense system is hopeless. The count also justifies factoring once and solving often: each extra right-hand side pays only the quadratic substitution price.',
        detail: 'Row comparisons for pivoting add lower-order overhead that the cubic term dominates for every realistic `$n$`.'
      },
      {
        term: 'Tiny pivots without pivoting spell trouble',
        kind: 'insight',
        statement: 'An innocent-looking small pivot divides every multiplier in its column into a large number, so later rows inherit **magnified rounding** that no extra precision downstream can remove. The `tiny` warning sign is a pivot much smaller than its column neighbors, and the cure is swapping before dividing rather than analyzing afterward. Scaling equations first helps too, but pivoting remains the non-negotiable step in every elimination code.',
        detail: 'A pivot of `$10^{-6}$` beside unit-size entries inflates its column multipliers to about `$10^{6}$`, promoting harmless rounding into leading-digit errors.'
      }
    ],
    figures: [
      {
        caption: 'Elimination tableau after two stages: circled pivots $a_{11}$ and $a_{22}$ on the diagonal, stored multipliers $m_{ki}$ below them, and the shrinking active submatrix still to be cleared.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elimination tableau with pivots multipliers and active submatrix"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Forward elimination tableau</text><rect x="110" y="80" width="500" height="200" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="230" y1="80" x2="230" y2="280" stroke="currentColor" stroke-width="1"/><line x1="350" y1="80" x2="350" y2="280" stroke="currentColor" stroke-width="1"/><line x1="110" y1="150" x2="610" y2="150" stroke="currentColor" stroke-width="1"/><line x1="110" y1="215" x2="610" y2="215" stroke="currentColor" stroke-width="1"/><circle cx="170" cy="115" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="290" cy="182" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="170" y="121" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">p1</text><text x="290" y="188" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">p2</text><text x="170" y="190" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">m21</text><text x="170" y="252" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">m31</text><text x="290" y="252" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">m32</text><rect x="350" y="215" width="260" height="65" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="480" y="252" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">active submatrix</text><text x="360" y="320" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">pivots circled, multipliers stored below, zeros above untouched</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Elimination with a forced row swap',
        problem: 'Solve $$\\begin{aligned} 0x + 1y + 1z &= 5 \\\\ 1x + 1y + 1z &= 6 \\\\ 2x + 1y + 0z &= 4 \\end{aligned}$$ by elimination with partial pivoting.',
        steps: [
          { label: 'Step 1: Pivot the first column', text: 'The `$x$` column reads `$0, 1, 2$`, so the largest entry is `$2$` in row three and partial pivoting swaps rows one and three. The reordered system has pivot `$2$` with multipliers `$m_{21} = 1 \\div 2 = 0.5$` and `$m_{31} = 0$`, and clearing gives rows two and three as `$0.5y + z = 4$` beside `$y + z = 5$`.' },
          { label: 'Step 2: Clear the second column', text: 'The `$y$` subcolumn reads `$0.5, 1$`, so row three already holds the larger pivot and no swap is needed. With multiplier `$m_{32} = 0.5$`, subtracting yields `$-0.5z = -1.5$`, hence `$z = 3$`.' },
          { label: 'Step 3: Back-substitute', text: 'From `$y + z = 5$` follows `$y = 2$`, and from `$2x + y = 4$` follows `$x = 1$`. Checking the original first equation `$0 + 2 + 3 = 5$` closes the loop, confirming the swap bookkeeping.' }
        ],
        result: 'Solution `$x = 1$`, `$y = 2$`, `$z = 3$`, verified in all three original equations.'
      },
      {
        title: 'Price a large elimination before running it',
        problem: 'Estimate the multiplication count for dense elimination with `$n = 100$`, plus one back substitution, and confirm with a script.',
        steps: [
          { label: 'Step 1: Apply the cubic count', text: 'Elimination costs about `$n^{3} \\div 3 = 1000000 \\div 3 \\approx 333333$` multiplications, while back substitution adds about `$n^{2} \\div 2 = 5000$`. The triangular solve is barely one percent of the total effort.' },
          { label: 'Step 2: Confirm in code', text: '```python\nn = 100\nelim = n ** 3 / 3.0\nsolve = n ** 2 / 2.0\nprint(int(elim), int(solve), int(elim / solve))\n# 333333 5000 66\n```\nThe script prints `333333 5000 66`: elimination outweighs one solve by a factor of sixty-six.' },
          { label: 'Step 3: Read the planning lesson', text: 'Ten right-hand sides would add only `$50000$` further operations to the `$333333$` already spent, which is exactly why factoring once and solving often dominates separate eliminations.' }
        ],
        result: 'About `$333333$` multiplications for elimination and `$5000$` per solve at `$n = 100$`.'
      }
    ],
    keyTakeaways: [
      'Multipliers `$m_{ki} = a_{ki} \\div a_{kk}$` record elimination, and back substitution unwinds the triangular result.',
      'Partial pivoting swaps the largest column entry into place, bounding every multiplier by one in magnitude.',
      'Elimination costs `$\\frac{n^{3}}{3}$` operations while each solve costs only `$\\frac{n^{2}}{2}$`, so reuse factors.',
      'Tiny unpivoted pivots magnify rounding catastrophically, making pivoting mandatory rather than optional.'
    ],
    quiz: [
      {
        q: 'During elimination the pivot is `$4$` and the entry below it is `$6$`. What multiplier clears that entry?',
        options: [`$6$`, `$4$`, `$1.5$`, `$0.667$`],
        answer: 2,
        explanation: 'Step 1: Recall the multiplier is the target entry divided by the pivot. Step 2: Compute 6 divided by 4, giving 1.5. Step 3: Subtracting 1.5 pivot rows zeroes the entry exactly. Step 4: Without pivoting this multiplier already exceeds 1, hinting a swap was advisable.'
      },
      {
        q: 'Why does production elimination always pivot?',
        options: ['Pivoting reduces the operation count', 'It avoids zero pivots and bounds rounding growth', 'It makes the matrix symmetric', 'It diagonalizes the system directly'],
        answer: 1,
        explanation: 'Step 1: Zero pivots would halt division entirely. Step 2: Tiny pivots inflate multipliers and rounding with them. Step 3: Largest-entry swaps bound all multipliers by 1 in magnitude. Step 4: Cost and symmetry are unaffected; robustness is the whole point.'
      },
      {
        q: 'Roughly how many multiplications does dense elimination need for `$n = 10$`?',
        options: [`$333$`, `$1000$`, `$100$`, `$30$`],
        answer: 0,
        explanation: 'Step 1: Apply n cubed divided by 3. Step 2: 10 cubed is 1000. Step 3: 1000 divided by 3 is about 333. Step 4: Back substitution would add only about 50 more operations.'
      },
      {
        q: 'After elimination with one row swap, the diagonal of `$U$` reads `$2, 3, 5$`. What is `$\\det(A)$`?',
        options: [`$30$`, `$10$`, `$0$`, `$-30$`],
        answer: 3,
        explanation: 'Step 1: The determinant is the signed product of U diagonal entries. Step 2: Multiply 2 times 3 times 5 to get 30. Step 3: One row swap contributes a minus sign. Step 4: Hence the determinant is minus 30.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.2
  {
    sectionId: 'engmath-ch12-s2',
    readingTime: 8,
    intro: 'Elimination recomputed from scratch for every right-hand side wastes the expensive triangularization it just performed. LU factorization splits that work into a factor-once phase and a cheap solve-many phase. This section sets up Doolittle and Crout conventions, specializes to Cholesky for symmetric positive-definite systems, and shows how determinants drop out of the factors.',
    objectives: [
      'Factor small matrices in Doolittle and Crout forms and solve systems through them',
      'Apply the Cholesky factorization to symmetric positive-definite systems',
      'Read determinants from triangular factors and handle row exchanges correctly'
    ],
    concepts: [
      {
        term: 'Factor once, solve many with A = LU',
        kind: 'definition',
        statement: 'Writing the **factorization** `$A = LU$` with unit-lower `$L$` and upper `$U$` separates the cubic factorization from the quadratic solves `$Ly = b$` and `$Ux = y$`, so each new `lu` right-hand side reuses the stored factors. The multipliers from elimination become the subdiagonal of `$L$` while `$U$` is the finished tableau, meaning factorization records rather than repeats work. Time-dependent simulations and circuit sweeps with fixed `$A$` but many `$b$` vectors live on this saving.',
        detail: 'Factoring dominates at `$\\frac{n^{3}}{3}$` operations while every additional solve pays only about `$n^{2}$`, the same economy as elimination with retained multipliers.'
      },
      {
        term: 'Doolittle versus Crout conventions',
        kind: 'definition',
        statement: '**Doolittle** pins unit diagonal on `$L$` and lets `$U$` carry the pivots, while **Crout** pins unit diagonal on `$U$` and lets `$L$` carry them, and the `doolittle` choice matches elimination multipliers most directly. Both forms solve identically through forward and back substitution; only the bookkeeping of where diagonal scaling lives differs. Mixing the conventions mid-computation is a classic slip, so declare one form and keep its unit diagonal fixed throughout.',
        detail: 'With `$A = LU$` fixed, Doolittle and Crout differ by a diagonal scaling `$D$` shuffled between `$L$` and `$U$`, leaving all solves unchanged.'
      },
      {
        term: 'Cholesky for symmetric positive-definite matrices',
        kind: 'theorem',
        statement: 'A symmetric matrix with all-positive leading principal minors factors as **`$A = LL^{T}$`** with positive diagonal, computed by `$l_{ii} = \\sqrt{a_{ii} - \\sum_{k<i} l_{ik}^{2}}$` and `$l_{ji} = (a_{ji} - \\sum_{k<i} l_{jk}l_{ik}) \\div l_{ii}$` in the `chol` sweep. No pivoting is needed because the radicand stays positive exactly for positive-definite input, and the factor needs only half the storage of general LU. Attempting Cholesky on an indefinite matrix fails with a negative radicand, which doubles as a definiteness test.',
        detail: 'Covariance and stiffness matrices are the flagship applications, where symmetry plus positive energy make Cholesky the default solver.'
      },
      {
        term: 'Solves and determinants from the factors',
        kind: 'method',
        statement: 'Forward substitution `$Ly = b$` followed by back substitution `$Ux = y$` delivers each solution, while the **determinant** reads `$\\det(A) = \\pm\\prod u_{ii}$` with the sign from row swaps in the `fwd` workflow. Triangular solves never divide by anything but diagonal entries, so singularity shows up as a zero diagonal rather than a mid-algorithm breakdown. Residual checks `$r = b - Ax$` then confirm each computed solution cheaply.',
        detail: 'The product of `$L$` diagonal entries is one under the Doolittle convention, leaving `$\\det(A)$` entirely to the `$U$` diagonal up to the swap sign.'
      },
      {
        term: 'Zero pivots demand row exchanges, not surrender',
        kind: 'insight',
        statement: 'When a Doolittle pivot vanishes, the remedy is the factorization **`$PA = LU$`** with a permutation recording the swaps, exactly mirroring partial pivoting in the `permute` view. The factors then describe the row-reordered matrix while solves permute `$b$` correspondingly before the triangular steps. Abandoning the factorization at the first zero pivot wastes a system that row exchanges would have solved routinely.',
        detail: 'Every nonsingular matrix admits such a permuted factorization, which is why library solvers pivot inside the factor step rather than failing.'
      }
    ],
    figures: [
      {
        caption: 'Doolittle split $A = LU$: unit-diagonal $L$ below, pivot-carrying $U$ above, with the solve path $b \\to y \\to x$ running forward then back.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L and U triangle factors with solve path"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">A equals L times U</text><polygon points="120,90 120,270 300,270" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="250" font-family="sans-serif" font-size="15" font-weight="bold" fill="currentColor">L</text><text x="150" y="200" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">1s on diagonal</text><polygon points="360,90 540,90 540,270" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="480" y="130" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">U</text><text x="480" y="230" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">pivots on diagonal</text><text x="330" y="190" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">x</text><line x1="580" y1="110" x2="660" y2="110" stroke="currentColor" stroke-width="1.5"/><polygon points="660,110 650,105 650,115" fill="currentColor"/><text x="620" y="100" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">b to y</text><line x1="580" y1="250" x2="660" y2="250" stroke="currentColor" stroke-width="1.5"/><polygon points="660,250 650,245 650,255" fill="currentColor"/><text x="620" y="240" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">y to x</text><text x="360" y="320" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">forward solve down L, back solve up U</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Doolittle factorization of a two-by-two system',
        problem: 'Factor $$A = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$$ in Doolittle form and solve `$Ax = b$` with `$b = (3, 7)$`.',
        steps: [
          { label: 'Step 1: Read off L and U', text: 'The multiplier is `$4 \\div 2 = 2$`, so `$L = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$` and `$U = \\begin{bmatrix} 2 & 1 \\\\ 0 & 1 \\end{bmatrix}$`. Multiplying `$LU$` restores `$A$`, confirming the split before any solve begins.' },
          { label: 'Step 2: Forward solve Ly = b', text: 'From `$y_{1} = 3$` and `$2y_{1} + y_{2} = 7$` follows `$y_{2} = 1$`. The forward sweep marches downward dividing only by the unit diagonal, so no pivot decision arises.' },
          { label: 'Step 3: Back solve Ux = y', text: 'From `$x_{2} = 1$` and `$2x_{1} + x_{2} = 3$` follows `$x_{1} = 1$`. Checking `$A(1,1) = (3, 7)$` closes the verification loop.' }
        ],
        result: 'Factors `$L$` and `$U$` above with solution `$x = (1, 1)$`.'
      },
      {
        title: 'Cholesky factorization of a symmetric system',
        problem: 'Factor $$A = \\begin{bmatrix} 4 & 2 \\\\ 2 & 3 \\end{bmatrix}$$ as `$LL^{T}$` and confirm by multiplication.',
        steps: [
          { label: 'Step 1: First column', text: '`$l_{11} = \\sqrt{4} = 2$` and `$l_{21} = 2 \\div 2 = 1$`. The positive radicand already signals positive-definiteness in progress.' },
          { label: 'Step 2: Second diagonal in code', text: '```python\nimport math\na11, a21, a22 = 4.0, 2.0, 3.0\nl11 = math.sqrt(a11)\nl21 = a21 / l11\nl22 = math.sqrt(a22 - l21 ** 2)\nprint(l11, l21, l22)  # 2.0 1.0 1.41421356\n```\nThe script gives `$l_{22} = \\sqrt{3 - 1} = \\sqrt{2} \\approx 1.4142$`, so `$L = \\begin{bmatrix} 2 & 0 \\\\ 1 & 1.4142 \\end{bmatrix}$`.' },
          { label: 'Step 3: Multiply back', text: '`$LL^{T}$` has corner entries `$4$`, `$2$`, `$2$` and `$1 + 2 = 3$`, exactly `$A$`. The determinant `$4 \\times 3 - 4 = 8$` also equals `$l_{11}^{2} l_{22}^{2} = 4 \\times 2$`, a second confirmation.' }
        ],
        result: 'Cholesky factor `$L$` with `$2, 1, \\sqrt{2}$` entries, verified by `$LL^{T} = A$`.'
      }
    ],
    keyTakeaways: [
      'Doolittle fixes unit diagonal on `$L$` while Crout fixes it on `$U$`, and both enable factor-once solve-many workflows.',
      'Cholesky `$A = LL^{T}$` needs symmetry plus positive-definiteness and skips pivoting entirely.',
      'Determinants read `$\\pm\\prod u_{ii}$` from the factors with the sign set by the swap count.',
      'Zero pivots call for `$PA = LU$` permutations, which exist for every nonsingular matrix.'
    ],
    quiz: [
      {
        q: 'Which property must a real symmetric matrix have for Cholesky factorization to succeed?',
        options: ['Zero determinant', 'Positive-definiteness', 'A zero diagonal entry', 'Skew-symmetry'],
        answer: 1,
        explanation: 'Step 1: Cholesky takes square roots of Schur-type remainders. Step 2: Those radicands stay positive exactly for positive-definite input. Step 3: An indefinite matrix forces a negative radicand and halts the algorithm. Step 4: Symmetry alone, without definiteness, is insufficient.'
      },
      {
        q: 'In a Doolittle factorization, which diagonal is fixed to ones?',
        options: ['The diagonal of $U$', 'Both diagonals', 'Neither diagonal', 'The diagonal of $L$'],
        answer: 3,
        explanation: 'Step 1: Recall the Doolittle convention pins one triangle. Step 2: It chooses L with unit diagonal entries. Step 3: U then carries the elimination pivots. Step 4: Crout is the mirror convention with unit U instead.'
      },
      {
        q: 'Elimination without swaps ends with `$U$` diagonal `$1, 2, 6$`. What is `$\\det(A)$`?',
        options: [`$3$`, `$9$`, `$12$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: With no swaps the sign is positive. Step 2: Multiply the U diagonal: 1 times 2 times 6. Step 3: The product equals 12. Step 4: L contributes nothing since its diagonal is all ones.'
      },
      {
        q: 'A simulation reuses one `$100 \\times 100$` matrix with `$50$` right-hand sides. Why factor first?',
        options: ['Fifty eliminations cost far more than one factorization plus fifty solves', 'Factoring changes the answers favorably', 'Factoring avoids all rounding error', 'Back substitution is impossible without factors'],
        answer: 0,
        explanation: 'Step 1: One factorization costs about 333333 operations. Step 2: Each later solve costs only about 10000 operations. Step 3: Fifty solves total near 500000 against fifty eliminations near 16 million. Step 4: Accuracy is comparable; the saving is purely arithmetic.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.3
  {
    sectionId: 'engmath-ch12-s3',
    readingTime: 8,
    intro: 'Direct solvers become impractical for huge sparse systems, where each elimination step would fill zeros with nonzeros. Iterative splittings instead improve a guessed solution with cheap matrix-vector sweeps until the residual is small. This section builds the Jacobi and Gauss-Seidel updates, states when they converge, and shows how diagonal dominance guarantees success.',
    objectives: [
      'Write Jacobi and Gauss-Seidel updates for a given system and run hand sweeps',
      'Test strict diagonal dominance as a convergence guarantee',
      'State the spectral-radius criterion and choose sensible stopping tests'
    ],
    concepts: [
      {
        term: 'Jacobi update from the diagonal split',
        kind: 'method',
        statement: '**Jacobi iteration** isolates each diagonal entry and updates all unknowns simultaneously through `$x_{i}^{(k+1)} = (b_{i} - \\sum_{j \\ne i} a_{ij}x_{j}^{(k)}) \\div a_{ii}$`, using only old `jacobi` values on the right. Every component refreshes in parallel from the same snapshot, which maps beautifully onto vector and parallel hardware. The price of that simplicity is slower convergence than methods reusing fresh values mid-sweep.',
        detail: 'Jacobi needs all diagonal entries nonzero before the first sweep, and scaling equations to strengthen the diagonal pays off immediately.'
      },
      {
        term: 'Gauss-Seidel reuses fresh values immediately',
        kind: 'method',
        statement: '**Gauss-Seidel** sweeps components in order and feeds each newly computed `$x_{i}^{(k+1)}$` into the remaining equations of the same sweep, accelerating information flow through the `seidel` ordering. On symmetric positive-definite and many diagonally dominant systems it converges roughly twice as fast as Jacobi from the same start. The tradeoff is a sequential sweep that resists naive parallelization, since each component waits for its predecessors.',
        detail: 'Successive over-relaxation extends this idea with a weight `$\\omega$` blending old and new values, speeding convergence further when tuned between one and two.'
      },
      {
        term: 'Strict diagonal dominance guarantees convergence',
        kind: 'theorem',
        statement: 'When each diagonal magnitude exceeds its row off-diagonal sum, `$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$`, the system is **strictly diagonally dominant** and both Jacobi and Gauss-Seidel converge from any `diagdom` start. The condition is sufficient but not necessary, so failure of the test demands further analysis rather than despair. Rearranging equations to strengthen the diagonal is legitimate preprocessing because row order never changes the solution.',
        detail: 'Many discretized differential equations are naturally dominant, which is why these classical iterations survive in modern multigrid smoothers.'
      },
      {
        term: 'Spectral radius decides every splitting',
        kind: 'theorem',
        statement: 'Writing the iteration as `$x^{(k+1)} = Tx^{(k)} + c$`, convergence from all starts holds exactly when the **spectral radius** `$\\rho(T) < 1$`, with smaller radii meaning faster decay of the error in the `specrad` sense. Diagonal dominance implies this eigenvalue condition for Jacobi and Gauss-Seidel, but the radius also judges cases dominance cannot reach. Estimating `$\\rho(T)$` is harder than checking dominance, so theory uses the radius while practice screens with dominance.',
        detail: 'An iteration matrix with radius `$0.5$` roughly halves the error each sweep, gaining one binary digit of accuracy per pass.'
      },
      {
        term: 'Stop on residuals, not on hope',
        kind: 'insight',
        statement: 'A sound stopping test watches the **residual** `$r = b - Ax^{(k)}$` or the successive correction size against a `tol` tolerance scaled to `$b$`, rather than fixing an arbitrary sweep count. Residuals measure equation satisfaction directly and cost one matrix-vector product per check, cheap against the sweep itself. Declaring victory after a preset handful of sweeps risks stopping far from the answer on slow problems or wasting work on fast ones.',
        detail: 'For ill-conditioned systems a small residual can still hide a large error, so residual tests certify equation balance rather than solution accuracy.'
      }
    ],
    figures: [
      {
        caption: 'Update flow for $x_{1}$ and $x_{2}$: Jacobi arrows start only from old values $x^{(k)}$ while Gauss-Seidel arrows reuse the fresh $x_{1}^{(k+1)}$ inside the same sweep.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jacobi versus Gauss Seidel update flow"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Who uses fresh values</text><text x="190" y="90" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">Jacobi</text><rect x="110" y="110" width="160" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="190" y="145" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">old x(k)</text><rect x="110" y="210" width="160" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="190" y="245" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">new x(k+1)</text><line x1="190" y1="170" x2="190" y2="205" stroke="currentColor" stroke-width="1.8"/><polygon points="190,210 184,200 196,200" fill="currentColor"/><text x="530" y="90" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">Gauss-Seidel</text><rect x="450" y="110" width="160" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="530" y="145" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">x1 fresh</text><rect x="450" y="210" width="160" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="530" y="245" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">x2 uses x1 new</text><line x1="530" y1="170" x2="530" y2="205" stroke="currentColor" stroke-width="2.5"/><polygon points="530,210 524,200 536,200" fill="currentColor"/><text x="360" y="320" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">thick arrow: fresh value reused inside the sweep</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'One Jacobi sweep on a dominant system',
        problem: 'Run one Jacobi sweep from `$(0, 0)$` on $$\\begin{aligned} 4x + 1y &= 9 \\\\ 1x + 3y &= 5 \\end{aligned}$$ whose solution is `$(2, 1)$`.',
        steps: [
          { label: 'Step 1: Check dominance first', text: 'Row one gives `$4 > 1$` and row two gives `$3 > 1$`, so strict diagonal dominance guarantees convergence from any start. Both diagonals are safely nonzero, so the Jacobi divisions are legitimate.' },
          { label: 'Step 2: Update from the zero guess', text: 'Jacobi uses only old values: `$x_{1} = (9 - 0) \\div 4 = 2.25$` and `$y_{1} = (5 - 0) \\div 3 \\approx 1.6667$`. After one parallel sweep the guess moves from `$(0, 0)$` to `$(2.25, 1.6667)$`, already bracketing the true `$(2, 1)$`.' },
          { label: 'Step 3: Measure the residual', text: 'The residual is `$r = (9 - (9 + 1.6667), 5 - (2.25 + 5)) = (-1.6667, -2.25)$`, nonzero but far smaller than the starting `$r = (9, 5)$`. Further sweeps shrink it geometrically toward the tolerance.' }
        ],
        result: 'After one sweep `$(2.25, 1.6667)$` with residual `$(-1.6667, -2.25)$`, converging toward `$(2, 1)$`.'
      },
      {
        title: 'Gauss-Seidel reaches further in the same sweep',
        problem: 'Run one Gauss-Seidel sweep from `$(0, 0)$` on the same system and compare against Jacobi.',
        steps: [
          { label: 'Step 1: Refresh x first', text: 'The `$x$` update matches Jacobi: `$x_{1} = 9 \\div 4 = 2.25$`, since no fresh value exists yet at the sweep start.' },
          { label: 'Step 2: Reuse it for y in code', text: '```python\nx1 = 9.0 / 4.0\ny1 = (5.0 - x1) / 3.0\nprint(x1, y1)  # 2.25 0.9166667\n```\nGauss-Seidel feeds `$x_{1} = 2.25$` straight into `$y_{1} = (5 - 2.25) \\div 3 \\approx 0.9167$`, landing closer to the true `$1$` than Jacobi `$1.6667$` in the same sweep.' },
          { label: 'Step 3: Second sweep closes in', text: 'Continuing gives `$x_{2} = (9 - 0.9167) \\div 4 \\approx 2.0208$` and `$y_{2} = (5 - 2.0208) \\div 3 \\approx 0.9931$`, within a percent of `$(2, 1)$` after two sweeps. Fresh-value reuse visibly accelerates the march.' }
        ],
        result: 'Gauss-Seidel reaches `$(2.25, 0.9167)$` then `$(2.0208, 0.9931)$`, outpacing Jacobi from the identical start.'
      }
    ],
    keyTakeaways: [
      'Jacobi refreshes every component from the old snapshot while Gauss-Seidel reuses fresh values within the sweep.',
      'Strict row diagonal dominance guarantees both iterations converge from any starting guess.',
      'The sharp criterion is `$\\rho(T) < 1$` for the iteration matrix, with smaller radii converging faster.',
      'Stop on residual or correction size against tolerance, never on a blind fixed sweep count.'
    ],
    quiz: [
      {
        q: 'What is the defining difference between Gauss-Seidel and Jacobi updates?',
        options: ['Gauss-Seidel needs no diagonal entries', 'Jacobi converges for every matrix', 'Gauss-Seidel reuses just-computed components in the same sweep', 'Jacobi uses fresh values while Gauss-Seidel does not'],
        answer: 2,
        explanation: 'Step 1: Both isolate the diagonal in the same algebraic way. Step 2: Jacobi evaluates all updates from the old vector only. Step 3: Gauss-Seidel substitutes each new component immediately. Step 4: That ordering is the whole difference and usually the speed advantage.'
      },
      {
        q: 'A system has rows `$5x + y - z = 7$` and `$x + 4y + z = 6$` plus `$x - y + 6z = 9$`. Does the dominance guarantee apply?',
        options: ['Yes, all three rows are strictly dominant', 'No, the first row fails', 'Only for Jacobi, not Gauss-Seidel', 'Only after deleting a variable'],
        answer: 0,
        explanation: 'Step 1: Row one compares 5 against 1 plus 1, giving dominance. Step 2: Row two compares 4 against 1 plus 1, giving dominance. Step 3: Row three compares 6 against 1 plus 1, giving dominance. Step 4: All rows dominant means both iterations converge.'
      },
      {
        q: 'An iteration matrix has spectral radius `$0.4$`. What follows?',
        options: ['Divergence from most starts', 'Convergence only from the zero vector', 'Immediate exact convergence in one sweep', 'Convergence from every start'],
        answer: 3,
        explanation: 'Step 1: The sharp test compares the radius against 1. Step 2: Here 0.4 is safely below 1. Step 3: Errors shrink by about 0.4 each sweep from any start. Step 4: One-sweep exactness would need a nilpotent matrix, not merely a small radius.'
      },
      {
        q: 'Which stopping rule is sound for an iterative solver?',
        options: ['Always stop after exactly ten sweeps', 'Stop when the residual norm falls below tolerance', 'Stop when the matrix looks triangular', 'Stop at the first sign change of any component'],
        answer: 1,
        explanation: 'Step 1: Fixed sweep counts ignore fast versus slow convergence. Step 2: The residual directly measures equation satisfaction. Step 3: Scaling tolerance to b keeps the test meaningful across sizes. Step 4: Triangular looks and sign changes carry no accuracy information.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.4
  {
    sectionId: 'engmath-ch12-s4',
    readingTime: 9,
    intro: 'A tiny residual does not always mean a tiny error, and nonlinear equations need entirely different machinery from linear sweeps. The condition number quantifies how much a linear system can amplify data errors, while Newton method attacks nonlinear equations with tangent-line corrections. This section pairs linear sensitivity analysis with Newton iteration for single equations and systems.',
    objectives: [
      'Estimate matrix norms and condition numbers and interpret their size',
      'Distinguish residual size from solution error on ill-conditioned systems',
      'Run Newton iteration for scalar equations and state its systems form'
    ],
    concepts: [
      {
        term: 'Norms measure vectors and matrices',
        kind: 'definition',
        statement: 'The infinity **norm** `$\\lVert x \\rVert_{\\infty}$` takes the largest component magnitude while `$\\lVert A \\rVert_{\\infty}$` takes the largest absolute row sum, giving consistent `norm` rulers for errors and amplifications. Subordinate matrix norms satisfy `$\\lVert Ax \\rVert \\le \\lVert A \\rVert \\, \\lVert x \\rVert$`, which is exactly the inequality sensitivity analysis needs. Norm choice changes constants but never conclusions, so pick the cheapest norm that bounds the quantity of interest.',
        detail: 'For a diagonal matrix the infinity norm is simply the largest diagonal magnitude, and its inverse norm is the reciprocal of the smallest.'
      },
      {
        term: 'Condition number bounds error amplification',
        kind: 'theorem',
        statement: 'The **condition number** `$\\kappa(A) = \\lVert A \\rVert \\, \\lVert A^{-1} \\rVert$` multiplies every relative data error into a worst-case relative solution error through `$\\frac{\\lVert \\Delta x \\rVert}{\\lVert x \\rVert} \\le \\kappa(A) \\frac{\\lVert \\Delta b \\rVert}{\\lVert b \\rVert}$` in the `condnum` bound. Orthogonal and identity matrices sit at the ideal `$\\kappa = 1$`, while `$\\kappa = 10^{6}$` warns that six digits may evaporate. Large condition numbers demand reformulation or higher precision; small residuals alone never overrule them.',
        detail: 'Hilbert-type matrices are the textbook exhibit, with condition numbers exploding as dimension grows even though every entry looks harmless.'
      },
      {
        term: 'Small residuals can hide large errors',
        kind: 'insight',
        statement: 'On ill-conditioned systems the residual `$r = b - A\\tilde{x}$` can look tiny while `$\\tilde{x}$` sits far from `$x$`, because near-singular `$A$` compresses large error vectors into small **residual** leftovers. Trusting residuals as accuracy certificates is therefore unsafe without the condition-number context. Iterative `refine` recovery, solving for the correction from the residual in higher precision, is the standard fallback when `$\\kappa$` is moderate.',
        detail: 'Geometrically the solution lines meet at a shallow angle, so sliding far along the intersection barely changes either equation residual.'
      },
      {
        term: 'Newton iteration for scalar nonlinear equations',
        kind: 'method',
        statement: '**Newton method** corrects each guess along its tangent via `$x_{n+1} = x_{n} - f(x_{n}) \\div f^{\\prime}(x_{n})$`, doubling correct digits near a simple root in the `newton` quadratic-convergence regime. A good start inside the basin converges spectacularly, while a poor start can cycle, diverge, or land on the wrong root. Damped steps or bracketing backups rescue the global behavior without sacrificing the local speed.',
        detail: 'For `$f(x) = x^{2} - 2$` from `$x_{0} = 1$`, Newton gives `$1.5$` then `$1.4167$`, already within a thousandth of `$\\sqrt{2}$`.'
      },
      {
        term: 'Newton for systems and the secant fallback',
        kind: 'method',
        statement: 'For `$F(x) = 0$` in several variables, each Newton step solves the linear **Jacobian system** `$J(x_{n})\\Delta = -F(x_{n})$` and updates `$x_{n+1} = x_{n} + \\Delta$`, reusing every linear solver of this chapter through the `jac` matrix. When derivatives are unavailable, the **secant** update rebuilds a slope from two past function values instead of differentiating. Broyden-type quasi-Newton variants extend that derivative-free idea to systems by updating an approximate Jacobian along the way.',
        detail: 'Each systems step costs one Jacobian assembly plus one linear solve, so cheap Jacobian approximations dominate large-scale practice.'
      }
    ],
    figures: [
      {
        caption: 'Conditioning as geometry: the unit circle maps under $A$ to a long thin ellipse, so inputs along the short axis emerge hugely amplified with $\\kappa$ near the axis ratio.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unit circle mapped to a thin ellipse by an ill conditioned matrix"><text x="360" y="40" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">A stretches the unit circle</text><circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="300" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">unit circle input</text><ellipse cx="520" cy="200" rx="130" ry="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="520" y="300" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">thin ellipse output</text><line x1="290" y1="200" x2="370" y2="200" stroke="currentColor" stroke-width="1.5"/><polygon points="370,200 360,195 360,205" fill="currentColor"/><text x="330" y="185" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">A</text><line x1="520" y1="200" x2="650" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><text x="590" y="185" font-family="sans-serif" font-size="12" text-anchor="middle" fill="currentColor">long axis gain</text><text x="360" y="330" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">axis ratio previews the condition number</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Two Newton steps toward the square root of two',
        problem: 'Approximate `$\\sqrt{2}$` with Newton method on `$f(x) = x^{2} - 2$` starting from `$x_{0} = 1$`.',
        steps: [
          { label: 'Step 1: First tangent correction', text: 'With `$f(1) = -1$` and `$f^{\\prime}(1) = 2$`, the update gives `$x_{1} = 1 - (-1) \\div 2 = 1.5$`. One step already overshoots `$1.41421$` by less than a tenth.' },
          { label: 'Step 2: Second correction', text: 'Now `$f(1.5) = 0.25$` and `$f^{\\prime}(1.5) = 3$`, so `$x_{2} = 1.5 - 0.25 \\div 3 \\approx 1.41667$`. The error falls from `$0.0858$` to `$0.0025$`, roughly squaring as quadratic convergence promises.' },
          { label: 'Step 3: Confirm the digit doubling', text: 'Squaring `$1.41667$` gives `$2.00695$`, within `$0.007$` of target after two steps from a mediocre start. A third step would land inside six digits, the unmistakable Newton acceleration.' }
        ],
        result: 'Newton iterates `$1 \\to 1.5 \\to 1.41667$`, converging toward `$1.41421$`.'
      },
      {
        title: 'Condition number of a diagonal system',
        problem: 'Compute `$\\kappa_{\\infty}$` for `$A$` with diagonal `$(1, 100)$` and interpret a one-percent data error.',
        steps: [
          { label: 'Step 1: Norms of A and its inverse', text: 'The largest row sum of `$A$` is `$100$`, and the inverse has diagonal `$(1, 0.01)$` with largest row sum `$1$`. Hence `$\\lVert A \\rVert_{\\infty} = 100$` and `$\\lVert A^{-1} \\rVert_{\\infty} = 1$`.' },
          { label: 'Step 2: Form kappa in code', text: '```python\na_norm = 100.0\nainv_norm = 1.0\nkappa = a_norm * ainv_norm\nprint(kappa, kappa * 0.01)  # 100.0 1.0\n```\nThe script prints `100.0 1.0`: condition number `$100$`, so a one-percent `$b$` error may surface as a one-hundred-percent `$x$` error in the worst direction.' },
          { label: 'Step 3: Name the sensitive direction', text: 'Perturbations along the `$100$`-gain axis pass through nearly unchanged in the residual yet swing the small component wildly. Rescaling that equation before solving is the honest fix.' }
        ],
        result: '`$\\kappa_{\\infty}(A) = 100$`: one percent of input error can become total output error.'
      }
    ],
    keyTakeaways: [
      'Subordinate norms satisfy `$\\lVert Ax \\rVert \\le \\lVert A \\rVert \\, \\lVert x \\rVert$`, the ruler behind all sensitivity bounds.',
      'The condition number `$\\kappa(A) = \\lVert A \\rVert \\, \\lVert A^{-1} \\rVert$` caps how data errors amplify into solution errors.',
      'Tiny residuals coexist with large errors on ill-conditioned systems, so residuals need condition context.',
      'Newton iteration `$x_{n+1} = x_{n} - f \\div f^{\\prime}$` converges quadratically near simple roots and extends via Jacobian solves.'
    ],
    quiz: [
      // PYQ-pattern — condition number of orthogonal matrices (rephrased)
      {
        q: 'What is the two-norm condition number of any orthogonal matrix `$Q$`?',
        options: [`$0$`, `$1$`, 'Equal to its determinant', 'Infinite'],
        answer: 1,
        explanation: 'Step 1: Orthogonal maps preserve Euclidean length exactly. Step 2: Hence the two-norm of Q is 1. Step 3: Its inverse is its transpose, also with norm 1. Step 4: The product gives condition number 1, the best possible.'
      },
      {
        q: 'Newton method on `$f(x) = x^{2} - 5$` stands at `$x_{n} = 2$`. What is `$x_{n+1}$`?',
        options: [`$2.25$`, `$2.5$`, `$2.2$`, `$2.0$`],
        answer: 0,
        explanation: 'Step 1: Evaluate f at 2, giving 4 minus 5, namely minus 1. Step 2: Evaluate the derivative 2x at 2, giving 4. Step 3: The correction is minus 1 divided by 4, or minus 0.25 with sign flipped in update. Step 4: Add 0.25 to 2, landing at 2.25 toward root 2.236.'
      },
      {
        q: 'A solver reports residual norm `$10^{-9}$` but the independently checked error norm is `$10^{-2}$`. What best explains the gap?',
        options: ['The residual routine has a factor-ten bug', 'Newton converged to the wrong root', 'Ill-conditioning near $10^{7}$ amplifies a small residual into a large error', 'Jacobi always behaves this way'],
        answer: 2,
        explanation: 'Step 1: Residual measures b minus A times x-hat, not the error itself. Step 2: The error-to-residual ratio is bounded by the condition number. Step 3: A gap of 10 to the seventh power matches kappa near 10 to the seventh. Step 4: Refinement or reformulation, not more sweeps, is the remedy.'
      },
      {
        q: 'Near a simple root, Newton method typically behaves how?',
        options: ['Linear convergence with factor one half', 'Immediate one-step exactness', 'Divergence unless damped', 'Quadratic convergence doubling correct digits'],
        answer: 3,
        explanation: 'Step 1: Tangent linearization leaves error proportional to its square. Step 2: Squaring small errors doubles digit counts per step. Step 3: The square-root example fell from 0.086 to 0.0025 in one step. Step 4: Damping is a globalization aid, not the local rate.'
      }
    ]
  }
]
