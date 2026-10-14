import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Schaum Lab I: Vectors, Matrices and Determinants
// Chapter 21: sections 21.1 to 21.4. Master study content.
// Source: Lipschutz Linear Algebra Schaum 6e, Chapters 1 and 2 with 8 and 3.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh21Content: SectionContent[] = [
  // ---------------------------------------------------------------- 21.1
  {
    sectionId: 'engmath-ch21-s1',
    readingTime: 9,
    intro: 'Set a timer for twenty minutes and sprint through spatial vectors the Schaum way with short solved computations and instant geometric checks. Each drill turns coordinates into meaning through the pairings `$u \\cdot v$` for angle and `$u \\times v$` for area. By the last whistle you will read orthogonality plus line, plane and distance answers directly from numbers.',
    objectives: [
      'Compute `$u \\cdot v$` and `$u \\times v$` for short integer vectors and decide orthogonality at speed',
      'Write parametric lines and normal-form planes from a point plus a direction or normal vector',
      'Evaluate point-to-line and point-to-plane distances with the projection formula'
    ],
    concepts: [
      {
        term: 'Dot product, length and angle',
        kind: 'definition',
        statement: 'The **dot product** `$u \\cdot v = u_{1}v_{1} + u_{2}v_{2} + u_{3}v_{3}$` fuses two vectors into a scalar, and the `dot` rule `$\\cos \\theta = (u \\cdot v) \\div (\\lVert u \\rVert \\lVert v \\rVert)$` turns that scalar into an angle. Length is the self-pairing `$\\lVert u \\rVert = \\sqrt{u \\cdot u}$`, so unit vectors are exactly the vectors with `$u \\cdot u = 1$`. Zero dot means right angle, which is the fastest orthogonality test in the workshop.',
        detail: 'Schaum 1.3 to 1.5 drills `$u = (1, -2, 3)$` against `$v = (4, 5, -1)$` giving `$u \\cdot v = -9$`, while `$u = (1, -2, 3)$` against `$w = (2, 7, 4)$` gives `$0$` and hence perpendicularity.'
      },
      {
        term: 'Cross product and parallelogram area',
        kind: 'method',
        statement: 'The **cross product** `$u \\times v$` returns a vector perpendicular to both factors, computed by the `cross` determinant with `$\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$` across the top row. Its length `$\\lVert u \\times v \\rVert$` equals the area of the spanned parallelogram, and `$u \\times v = 0$` flags parallel inputs. Swapping factors flips the sign through `$v \\times u = -(u \\times v)$`.',
        detail: 'Schaum 1.61 evaluates `$u = 3\\mathbf{i} - 4\\mathbf{j} + 2\\mathbf{k}$` crossed with `$v = 2\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}$` as `$2\\mathbf{i} + 13\\mathbf{j} + 23\\mathbf{k}$` by cofactor expansion down the top row.'
      },
      {
        term: 'Lines from point plus direction',
        kind: 'notation',
        statement: 'A **line** through `$P_{0}$` along `$d$` is the set `$P_{0} + td$` with scalar `$t$`, and the `param` triple `$x = x_{0} + td_{1}$`, `$y = y_{0} + td_{2}$`, `$z = z_{0} + td_{3}$` is its parametric form. Two points give a direction by subtraction `$d = Q - P_{0}$`, so no direction ever needs to be guessed. Parallel lines share a direction up to scale, while skew lines in space never meet and are never parallel.',
        detail: 'Schaum 1.5 writes located vectors as differences of endpoints, so the segment from `$(1, 2, 3)$` to `$(4, -1, 2)$` contributes direction `$(3, -3, -1)$` for the line equations.'
      },
      {
        term: 'Planes from point plus normal',
        kind: 'definition',
        statement: 'A **plane** through `$P_{0}$` with normal `$n = (a, b, c)$` is the solution set of `$n \\cdot (x - P_{0}) = 0$`, expanded by the `normal` form `$ax + by + cz = d$` with `$d = n \\cdot P_{0}$`. The normal is readable directly from coefficients, and any cross product of two in-plane directions manufactures one. Three noncollinear points fix a plane through two independent direction differences.',
        detail: 'Schaum 1.59 finds tangent planes by gradient normals; the same pattern turns `$n = (2, -1, 3)$` through `$(1, 0, 2)$` into `$2x - y + 3z = 8$`.'
      },
      {
        term: 'Distances by projection',
        kind: 'theorem',
        statement: 'The **distance** from `$Q$` to a plane `$ax + by + cz = d$` is `$\\lvert aQ_{1} + bQ_{2} + cQ_{3} - d \\rvert \\div \\sqrt{a^{2} + b^{2} + c^{2}}$`, the `dist` projection of `$Q - P_{0}$` onto the unit normal. Point-to-line distance replaces the normal with `$\\lVert (Q - P_{0}) \\times d \\rVert \\div \\lVert d \\rVert$`. Both formulas divide an absolute volume-like numerator by the normalizing length, so units stay consistent.',
        detail: 'The origin against `$2x - y + 3z = 8$` gives numerator `$8$` and denominator `$\\sqrt{14}$`, hence distance `$\\frac{8}{\\sqrt{14}}$` after rationalization-free simplification.'
      }
    ],
    figures: [
      {
        caption: 'Two spatial vectors `$u$` and `$v$` with included angle `$\\theta$`, plus a plane with normal `$n$`: dot reads the angle while cross reads the shaded area.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two vectors with angle and a plane with normal"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Dot reads angle, cross reads area</text><line x1="60" y1="310" x2="660" y2="310" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="320" x2="90" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="290" x2="300" y2="200" stroke="currentColor" stroke-width="3"/><polygon points="300,200 288,200 293,211" fill="currentColor"/><line x1="90" y1="290" x2="260" y2="120" stroke="currentColor" stroke-width="3"/><polygon points="260,120 252,131 263,131" fill="currentColor"/><path d="M 180 258 A 90 90 0 0 0 168 218" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="150" y="250" font-family="sans-serif" font-size="14" fill="currentColor">theta</text><text x="312" y="196" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">u</text><text x="270" y="112" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v</text><rect x="420" y="150" width="180" height="120" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="510" y1="210" x2="510" y2="90" stroke="currentColor" stroke-width="3"/><polygon points="510,90 503,103 517,103" fill="currentColor"/><text x="522" y="140" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">n</text><text x="470" y="292" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">normal is perpendicular to every in-plane direction</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Dot product sprint with angle check',
        problem: 'For `$u = (1, 2, 3)$` and `$v = (2, -1, 1)$`, compute `$u \\cdot v$`, both lengths, and `$\\cos \\theta$`, then confirm with a short script.',
        steps: [
          { label: 'Step 1: Multiply and add', text: 'Pair coordinates: `$u \\cdot v = (1)(2) + (2)(-1) + (3)(1) = 2 - 2 + 3 = 3$`. The positive sign already promises an acute angle before any division.' },
          { label: 'Step 2: Lengths plus script check', text: '```python\nu = (1, 2, 3)\nv = (2, -1, 1)\ndot = u[0]*v[0] + u[1]*v[1] + u[2]*v[2]\nnu = (u[0]**2 + u[1]**2 + u[2]**2) ** 0.5\nnv = (v[0]**2 + v[1]**2 + v[2]**2) ** 0.5\nprint(dot, nu, nv)\n```\nThe script prints `$3$` with `$\\lVert u \\rVert = \\sqrt{14}$` near `$3.742$` and `$\\lVert v \\rVert = \\sqrt{6}$` near `$2.449$`.' },
          { label: 'Step 3: Read the angle', text: 'Hence `$\\cos \\theta = \\frac{3}{\\sqrt{14}\\sqrt{6}} = \\frac{3}{\\sqrt{84}}$` near `$0.327$`, so `$\\theta$` is acute near `$71$` degrees. Orthogonality would have needed exactly `$0$` in the numerator.' }
        ],
        result: '`$u \\cdot v = 3$`, `$\\cos \\theta = \\frac{3}{\\sqrt{84}}$`, acute near `$71$` degrees.'
      },
      {
        title: 'Plane sprint plus origin distance',
        problem: 'Write the plane through `$P_{0} = (1, 0, 2)$` with normal `$n = (2, -1, 3)$`, then find the distance from the origin to that plane.',
        steps: [
          { label: 'Step 1: Expand the normal form', text: 'Insert into `$n \\cdot (x - P_{0}) = 0$`: `$2(x - 1) - (y - 0) + 3(z - 2) = 0$`. Collecting gives `$2x - y + 3z = 8$`, so `$d = 8$` is `$n \\cdot P_{0}$`.' },
          { label: 'Step 2: Build the distance fraction', text: 'Numerator is `$\\lvert 2(0) - 0 + 3(0) - 8 \\rvert = 8$` and denominator is `$\\sqrt{4 + 1 + 9} = \\sqrt{14}$`. No cross product is needed because the normal is given.' },
          { label: 'Step 3: Report cleanly', text: 'Distance equals `$\\frac{8}{\\sqrt{14}}$` near `$2.138$`. The foot of the perpendicular lies along `$tn$` from the origin with `$t = \\frac{8}{14}$`.' }
        ],
        result: 'Plane `$2x - y + 3z = 8$` with origin distance `$\\frac{8}{\\sqrt{14}}$`.'
      }
    ],
    keyTakeaways: [
      'Zero dot product is the two-second perpendicularity certificate in `$\\mathbb{R}^{3}$`.',
      'Cross length is parallelogram area, and `$u \\times v = 0$` diagnoses parallel inputs.',
      'Lines need one point plus one direction, while planes need one point plus one normal.',
      'Distances divide an absolute numerator by the normalizing length `$\\sqrt{a^{2} + b^{2} + c^{2}}$`.'
    ],
    quiz: [
      // PYQ-pattern: spatial vector drill with changed integer coordinates (rephrased, values changed)
      {
        q: 'With `$u = (1, -2, 3)$` and `$w = (2, 7, 4)$`, what does `$u \\cdot w$` say?',
        options: ['`$u \\cdot w = -9$` so the angle is obtuse', '`$u \\cdot w = 0$` so they are perpendicular', '`$u \\cdot w = 39$` so they are parallel', '`$u \\cdot w = 11$` so the angle is acute'],
        answer: 1,
        explanation: 'Step 1: Multiply pairs as `$1(2) + (-2)(7) + 3(4)$`. Step 2: Simplify to `$2 - 14 + 12 = 0$`. Step 3: Zero dot means `$\\cos \\theta = 0$`. Step 4: Hence the vectors are perpendicular.'
      },
      {
        q: 'If `$\\lVert u \\times v \\rVert = 0$` for nonzero `$u$` and `$v$`, what follows?',
        options: ['They are parallel since the spanned area collapses', 'They are perpendicular since the dot vanishes', 'They span a unit square', 'Their sum is the zero vector'],
        answer: 0,
        explanation: 'Step 1: Cross length equals parallelogram area. Step 2: Zero area means the parallelogram is flat. Step 3: Flat happens exactly when directions coincide up to scale. Step 4: So the vectors are parallel.'
      },
      {
        q: 'Which parametric triple describes the line through `$(1, 2, 3)$` along `$(3, -3, -1)$`?',
        options: ['`$x = 1 + 3t$`, `$y = 2 + 3t$`, `$z = 3 + t$`', '`$x = 1 + 3t$`, `$y = 2 - 3t$`, `$z = 3 - t$`', '`$x = 3 + t$`, `$y = -3 + 2t$`, `$z = -1 + 3t$`', '`$x = 1 - t$`, `$y = 2 - t$`, `$z = 3 - t$`'],
        answer: 1,
        explanation: 'Step 1: Form is base plus `$t$` times direction. Step 2: So `$x = 1 + 3t$` matches the first slot. Step 3: Second slot needs `$2 - 3t$` and third needs `$3 - t$`. Step 4: Only the second option matches all three slots.'
      },
      {
        q: 'What is the distance from the origin to `$2x - y + 3z = 8$`?',
        options: ['`$\\sqrt{14}$`', '`$8$`', '`$14$`', '`$\\frac{8}{\\sqrt{14}}$`'],
        answer: 3,
        explanation: 'Step 1: Numerator is `$\\lvert 0 - 8 \\rvert = 8$`. Step 2: Normal length is `$\\sqrt{4 + 1 + 9} = \\sqrt{14}$`. Step 3: Divide to get `$\\frac{8}{\\sqrt{14}}$`. Step 4: Numerically near `$2.138$`, not `$8$` or `$\\sqrt{14}$` alone.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.2
  {
    sectionId: 'engmath-ch21-s2',
    readingTime: 8,
    intro: 'This is a mechanics workshop for matrix algebra where compatibility, transpose and inverse moves must become reflexes. You will multiply small blocks, flip with `$A^{T}$` rules and invert `$2$`-by-`$2$` matrices by the adjugate shortcut. Every drill ends with a one-line verification such as `$AA^{-1} = I$` so errors surface immediately.',
    objectives: [
      'Multiply compatible matrices and read the `$m$`-by-`$n$` shape of `$AB$` before computing entries',
      'Apply transpose and symmetric checks including `$(AB)^{T} = B^{T}A^{T}$`',
      'Invert `$2$`-by-`$2$` matrices by the adjugate over determinant formula and verify'
    ],
    concepts: [
      {
        term: 'Matrix product compatibility',
        kind: 'definition',
        statement: 'The **product** `$AB$` exists only when columns of `$A$` equal rows of `$B$`, and the `mult` entry `$(AB)_{ij}$` is the dot product of row `$i$` of `$A$` with column `$j$` of `$B$`. An `$m$`-by-`$p$` times a `$p$`-by-`$n$` yields `$m$`-by-`$n$`, so shape is known before arithmetic starts. Order matters because `$AB$` and `$BA$` may both exist yet differ, or only one may exist.',
        detail: 'Schaum 2.5 drills `$2$`-by-`$3$` times `$3$`-by-`$2$` giving `$2$`-by-`$2$`; entrywise the top-left entry is `$1(1) + 2(4) + 1(0) = 9$` in the worked block example.'
      },
      {
        term: 'Transpose and symmetry',
        kind: 'theorem',
        statement: 'The **transpose** `$A^{T}$` flips rows to columns with `$(A^{T})_{ij} = A_{ji}$`, and the `transpose` reversal `$(AB)^{T} = B^{T}A^{T}$` plus `$(A^{T})^{T} = A$` govern all flips. A square matrix is **symmetric** when `$A^{T} = A$` and **skew** when `$A^{T} = -A$` with zero diagonal. Checking `$A^{T}$` first often halves the work on symmetric products.',
        detail: 'Schaum 2.6 proves `$(A + B)^{T} = A^{T} + B^{T}$` and the product reversal, then classifies `$A + A^{T}$` as always symmetric.'
      },
      {
        term: 'Identity and invertible matrices',
        kind: 'definition',
        statement: 'A square `$A$` is **invertible** when some `$B$` satisfies `$AB = BA = I$`, written `inv` as `$B = A^{-1}$` with identity `$I$` carrying ones on the diagonal. The inverse is unique when it exists, and `$A^{-1}$` undoes `$A$` on both sides. Determinant zero will later be the fast singularity alarm for `$2$`-by-`$2$` cases.',
        detail: 'Schaum 2.9 shows `$[[1, 2], [3, 4]]$` has inverse `$[[-2, 1], [1.5, -0.5]]$` since `$\\det = -2$`, verified by `$AA^{-1} = I$`.'
      },
      {
        term: 'Adjugate shortcut for two-by-two',
        kind: 'method',
        statement: 'For **two-by-two** `$A = [[a, b], [c, d]]$` the inverse is `$\\frac{1}{ad - bc}[[d, -b], [-c, a]]$`, the `adjugate` swap-and-negate over the determinant. The pattern swaps the diagonal, negates the off-diagonal and divides by `$\\det A$`. When `$ad - bc = 0$` the shortcut halts because no inverse exists.',
        detail: 'With `$a = 4$`, `$b = 7$`, `$c = 2$`, `$d = 6$` the determinant is `$24 - 14 = 10$`, so the inverse is `$\\frac{1}{10}[[6, -7], [-2, 4]]$`.'
      },
      {
        term: 'Special square families',
        kind: 'notation',
        statement: 'Square matrices split into **triangular**, diagonal, identity and symmetric families, recognized by the `tri` zero pattern above or below the diagonal. **Triangular** means all entries on one side of the diagonal vanish, while diagonal means both sides vanish. Powers preserve triangularity, and `$A^{k}$` stays inside the same family, which speeds later determinant and eigenvalue drills.',
        detail: 'Schaum 2.7 and 2.10 drill upper-triangular products staying upper-triangular, and diagonal powers acting entrywise as `$\\operatorname{diag}(d_{i})^{k} = \\operatorname{diag}(d_{i}^{k})$`.'
      }
    ],
    figures: [
      {
        caption: 'Shapes of `$A$` (`$m$`-by-`$p$`) times `$B$` (`$p$`-by-`$n$`) giving `$AB$` (`$m$`-by-`$n$`): the shared `$p$` contracts away.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrix multiplication shape diagram"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Inner dimensions must match</text><rect x="70" y="110" width="150" height="140" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="145" y="185" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="145" y="208" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">m by p</text><rect x="260" y="80" width="120" height="170" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="320" y="160" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><text x="320" y="183" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">p by n</text><text x="240" y="180" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="currentColor">x</text><text x="410" y="180" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="currentColor">=</text><rect x="440" y="110" width="200" height="140" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="540" y="185" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">AB</text><text x="540" y="208" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">m by n</text><text x="360" y="300" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">row i of A dots column j of B for entry (i, j)</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Product sprint with shape first',
        problem: 'Let `$A = [[1, 2, 1], [3, 4, 0]]$` and `$B = [[1, 2], [4, 5], [0, 1]]$`. Find `$AB$` and confirm with a short script.',
        steps: [
          { label: 'Step 1: Check compatibility', text: '`$A$` is `$2$`-by-`$3$` and `$B$` is `$3$`-by-`$2$`, so `$AB$` must be `$2$`-by-`$2$`. The inner `$3$` contracts away and only four dot products remain.' },
          { label: 'Step 2: Dot rows into columns plus script', text: '```python\nA = [[1, 2, 1], [3, 4, 0]]\nB = [[1, 2], [4, 5], [0, 1]]\nC = [[sum(A[i][k]*B[k][j] for k in range(3)) for j in range(2)] for i in range(2)]\nprint(C)\n```\nRow one gives `$1 + 8 + 0 = 9$` and `$2 + 10 + 1 = 13$`; row two gives `$3 + 16 + 0 = 19$` and `$6 + 20 + 0 = 26$`, matching the script output `$[[9, 13], [19, 26]]$`.' },
          { label: 'Step 3: State the product', text: 'Hence `$AB = [[9, 13], [19, 26]]$`. Reversing order would need `$2$`-by-`$2$` times `$2$`-by-`$3$`, a different shape, which already shows noncommutativity.' }
        ],
        result: '`$AB = [[9, 13], [19, 26]]$`, `$2$`-by-`$2$` as predicted.'
      },
      {
        title: 'Two-by-two inverse by adjugate',
        problem: 'Invert `$A = [[4, 7], [2, 6]]$` by the adjugate shortcut and verify `$AA^{-1} = I$`.',
        steps: [
          { label: 'Step 1: Determinant first', text: 'Compute `$\\det A = 4(6) - 7(2) = 24 - 14 = 10$`. Nonzero means the inverse exists and the shortcut is licensed.' },
          { label: 'Step 2: Swap and negate', text: 'Swap the diagonal to `$[[6, 0], [0, 4]]$` positions and negate the off-diagonal to get `$[[6, -7], [-2, 4]]$`. Dividing by `$10$` gives `$[[0.6, -0.7], [-0.2, 0.4]]$`.' },
          { label: 'Step 3: One-line verification', text: 'Top-left check: `$4(0.6) + 7(-0.2) = 2.4 - 1.4 = 1$`; top-right: `$4(-0.7) + 7(0.4) = -2.8 + 2.8 = 0$`. The other two entries give `$0$` and `$1$`, so `$AA^{-1} = I$`.' }
        ],
        result: '`$A^{-1} = \\frac{1}{10}[[6, -7], [-2, 4]]$` verified by multiplication.'
      }
    ],
    keyTakeaways: [
      'Read shapes first: `$m$`-by-`$p$` times `$p$`-by-`$n$` is `$m$`-by-`$n$`.',
      '`$(AB)^{T} = B^{T}A^{T}$` with order reversal on every transpose of a product.',
      'Two-by-two inverses swap the diagonal, negate the off-diagonal and divide by `$\\det$`.',
      'Always close with `$AA^{-1} = I$` since one entry check catches sign slips.'
    ],
    quiz: [
      // PYQ-pattern: matrix mechanics drill with changed small entries (rephrased, values changed)
      {
        q: 'If `$A$` is `$2$`-by-`$3$` and `$B$` is `$3$`-by-`$2$`, what is the shape of `$AB$`?',
        options: ['`$3$`-by-`$3$`', '`$2$`-by-`$2$`', '`$2$`-by-`$3$`', 'Undefined since inner sizes differ'],
        answer: 1,
        explanation: 'Step 1: Inner sizes are both `$3$` so the product exists. Step 2: Outer sizes are `$2$` and `$2$`. Step 3: Hence the result is `$2$`-by-`$2$`. Step 4: The `$3$` contracts away in every entry sum.'
      },
      {
        q: 'Which identity holds for all compatible `$A$` and `$B$`?',
        options: ['`$(AB)^{T} = A^{T}B^{T}$`', '`$(AB)^{T} = B^{T}A^{T}$`', '`$(A + B)^{T} = A^{T}B^{T}$`', '`$(AB)^{T} = AB$`'],
        answer: 1,
        explanation: 'Step 1: Transpose swaps rows and columns. Step 2: Entry `$(i, j)$` of `$AB$` uses row `$i$` and column `$j$`. Step 3: After flipping, row becomes column, reversing factor order. Step 4: So `$(AB)^{T} = B^{T}A^{T}$`.'
      },
      {
        q: 'What is the inverse of `$[[4, 7], [2, 6]]$`?',
        options: ['`$[[6, -7], [-2, 4]]$` without division', '`$\\frac{1}{10}[[6, -2], [-7, 4]]$` with wrong placement', '`$\\frac{1}{10}[[6, -7], [-2, 4]]$`', 'No inverse since the determinant vanishes'],
        answer: 2,
        explanation: 'Step 1: Determinant is `$24 - 14 = 10$`. Step 2: Swap diagonal to `$6$` and `$4$`. Step 3: Negate off-diagonal to `$-7$` and `$-2$`. Step 4: Divide every entry by `$10$`.'
      },
      {
        q: 'Which matrix is symmetric?',
        options: ['`$[[1, 2], [3, 4]]$`', '`$[[0, 5], [5, 1]]$`', '`$[[1, 2], [0, 1]]$`', '`$[[2, 0], [3, 2]]$`'],
        answer: 1,
        explanation: 'Step 1: Symmetric needs `$A^{T} = A$`. Step 2: So off-diagonal pair must match. Step 3: Only `$[[0, 5], [5, 1]]$` has `$5$` in both off spots. Step 4: The others have mismatched pairs like `$2$` versus `$3$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.3
  {
    sectionId: 'engmath-ch21-s3',
    readingTime: 8,
    intro: 'Determinants reward pattern hunters who triangularize first and expand last. This sprint drills `$2$`-by-`$2$` and `$3$`-by-`$3$` evaluations through row factors, swaps and block triangles. Each problem asks for the determinant and the one row move that made it trivial.',
    objectives: [
      'Evaluate `$2$`-by-`$2$` and `$3$`-by-`$3$` determinants by expansion and Sarrus checks',
      'Track row swaps, scalings and additions with `$\\det$` sign and factor rules',
      'Read block-triangular and triangular determinants as products of diagonal blocks'
    ],
    concepts: [
      {
        term: 'Determinant of order two and three',
        kind: 'definition',
        statement: 'The **determinant** of `$[[a, b], [c, d]]$` is `$ad - bc$`, and the `det2` value is the signed area scale of the column parallelogram. For order three the Sarrus or cofactor route sums six triple products with `$+$` on down-diagonals and `$-$` on up-diagonals. Zero determinant later means singular, so this sprint is singularity training.',
        detail: 'Schaum 8.2 to 8.3 evaluates `$[[2, 5], [3, 6]]$` as `$12 - 15 = -3$`, and drills six-term `$3$`-by-`$3$` expansions with checkerboard signs.'
      },
      {
        term: 'Row-operation effects',
        kind: 'theorem',
        statement: 'Row operations change determinants by **fixed rules**: swapping two rows flips the sign, scaling a row by `$k$` multiplies `$\\det$` by `$k$`, and adding a multiple of one row to another leaves it unchanged, all under the `rowops` table. Factoring `$k$` out of a row therefore divides the remaining work by `$k$`. Two equal or proportional rows force `$\\det = 0$` immediately.',
        detail: 'Schaum 8.6 proves `$\\det(kA) = k^{n}\\det A$` for `$n$`-by-`$n$`, so pulling `$2$` from each of three rows contributes `$8$` overall.'
      },
      {
        term: 'Triangular shortcut',
        kind: 'method',
        statement: 'An **upper-triangular** determinant is the product of its diagonal entries, which makes the `triang` strategy of clearing below the diagonal the fastest evaluation path. One zero pivot forces a row swap and a sign flip, recorded at once. If elimination reaches a zero row, the answer is `$0$` with no back substitution needed.',
        detail: 'Reducing `$[[1, 4, -3], [0, 0, 7], [0, 11, -8]]$` exposes a zero in the `$2$`, `$2$` slot, so interchange plus triangular product finishes the Schaum-style sprint.'
      },
      {
        term: 'Cofactor expansion',
        kind: 'method',
        statement: 'Laplace **expansion** along row `$i$` writes `$\\det A = \\sum_{j}a_{ij}C_{ij}$` with cofactors `$C_{ij} = (-1)^{i+j}M_{ij}$`, the `cofactor` checkerboard of minors. Always expand along the row or column with the most zeros to minimize `$2$`-by-`$2$` minors. The checkerboard starts with `$+$` at `$a_{11}$` and alternates in both directions.',
        detail: 'Schaum 8.7 expands a sparse third column with a single `$2$` to one `$2$`-by-`$2$` minor times `$(-1)^{1+3}$`, collapsing six terms to one.'
      },
      {
        term: 'Block-triangular determinants',
        kind: 'insight',
        statement: 'A **block-triangular** matrix has determinant equal to the product of the determinants of its diagonal blocks, the `block` shortcut of Schaum 8.12. Zeros in the off-diagonal block mean the permutation expansion cannot cross blocks. Block-diagonal is the special case with both off-diagonal blocks zero, so volume factorizes cleanly.',
        detail: 'For `$U$` with `$2$`-by-`$2$` blocks `$E$` and `$G$` on the diagonal, `$\\det U = (\\det E)(\\det G)$` without expanding the full `$4$`-by-`$4$` array.'
      }
    ],
    figures: [
      {
        caption: 'Sarrus picture for a `$3$`-by-`$3$` determinant: three down-diagonals add while three up-diagonals subtract.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sarrus diagonals for three by three determinant"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Sarrus: down adds, up subtracts</text><rect x="150" y="80" width="180" height="180" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="180" y="130" font-family="sans-serif" font-size="16" fill="currentColor">a11</text><text x="240" y="130" font-family="sans-serif" font-size="16" fill="currentColor">a12</text><text x="300" y="130" font-family="sans-serif" font-size="16" fill="currentColor">a13</text><text x="180" y="175" font-family="sans-serif" font-size="16" fill="currentColor">a21</text><text x="240" y="175" font-family="sans-serif" font-size="16" fill="currentColor">a22</text><text x="300" y="175" font-family="sans-serif" font-size="16" fill="currentColor">a23</text><text x="180" y="220" font-family="sans-serif" font-size="16" fill="currentColor">a31</text><text x="240" y="220" font-family="sans-serif" font-size="16" fill="currentColor">a32</text><text x="300" y="220" font-family="sans-serif" font-size="16" fill="currentColor">a33</text><line x1="170" y1="95" x2="320" y2="235" stroke="currentColor" stroke-width="2.5"/><line x1="320" y1="95" x2="170" y2="235" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/><text x="420" y="140" font-family="sans-serif" font-size="14" fill="currentColor">down: + product</text><text x="420" y="170" font-family="sans-serif" font-size="14" fill="currentColor">up: - product</text><line x1="400" y1="150" x2="410" y2="150" stroke="currentColor" stroke-width="2.5"/><line x1="400" y1="180" x2="410" y2="180" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/><text x="360" y="300" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">six triple products with checkerboard signs</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Three-by-three expansion sprint',
        problem: 'Evaluate `$\\det [[1, 2, 1], [3, 4, 0], [0, 1, 2]]$` by expansion and confirm with a short script.',
        steps: [
          { label: 'Step 1: Expand along row one', text: 'Cofactors give `$1(8 - 0) - 2(6 - 0) + 1(3 - 0) = 8 - 12 + 3 = -1$`. Each `$2$`-by-`$2$` minor deletes one row and one column.' },
          { label: 'Step 2: Confirm by script', text: '```python\nM = [[1, 2, 1], [3, 4, 0], [0, 1, 2]]\ndet = M[0][0]*(M[1][1]*M[2][2]-M[1][2]*M[2][1]) - M[0][1]*(M[1][0]*M[2][2]-M[1][2]*M[2][0]) + M[0][2]*(M[1][0]*M[2][1]-M[1][1]*M[2][0])\nprint(det)\n```\nThe script prints `$-1$`, matching the hand expansion and ruling out sign slips.' },
          { label: 'Step 3: Name the consequence', text: 'Nonzero determinant means the matrix is invertible and its columns are independent. A zero would have signaled dependence and singularity.' }
        ],
        result: 'Determinant equals `$-1$`, hence invertible.'
      },
      {
        title: 'Factor hunt plus triangular finish',
        problem: 'Evaluate `$\\det [[2, 4, 2], [1, 3, 1], [3, 5, 4]]$` by factoring and triangularizing.',
        steps: [
          { label: 'Step 1: Hunt the common factor', text: 'Row one has factor `$2$`, so pull it out: `$\\det = 2\\det [[1, 2, 1], [1, 3, 1], [3, 5, 4]]$`. Recording the `$2$` up front keeps later numbers small.' },
          { label: 'Step 2: Clear below the pivot', text: 'Subtract row one from row two and `$3$` times row one from row three to get `$[[1, 2, 1], [0, 1, 0], [0, -1, 1]]$`. Row additions leave the determinant unchanged.' },
          { label: 'Step 3: Read the triangle', text: 'Add row two to row three for `$[[1, 2, 1], [0, 1, 0], [0, 0, 1]]$` with diagonal product `$1$`. Times the pulled `$2$` the answer is `$2$`.' }
        ],
        result: 'Determinant equals `$2$` after one factor plus two eliminations.'
      }
    ],
    keyTakeaways: [
      'Expand along the emptiest row or column to minimize `$2$`-by-`$2$` minors.',
      'Swaps flip sign, row scales factor out, and row additions cost nothing.',
      'Triangular matrices donate their determinant as the diagonal product.',
      'Block-triangular determinants multiply the diagonal-block determinants.'
    ],
    quiz: [
      // PYQ-pattern: determinant sprint with changed entries (rephrased, values changed)
      {
        q: 'What is `$\\det [[2, 5], [3, 6]]$`?',
        options: ['`$27$`', '`$-3$`', '`$3$`', '`$-27$`'],
        answer: 1,
        explanation: 'Step 1: Apply `$ad - bc$`. Step 2: So `$2(6) - 5(3)$`. Step 3: That is `$12 - 15$`. Step 4: Result `$-3$`.'
      },
      {
        q: 'Swapping two rows of a square matrix does what to `$\\det$`?',
        options: ['Leaves it unchanged', 'Multiplies it by zero', 'Flips its sign', 'Replaces it by its reciprocal'],
        answer: 2,
        explanation: 'Step 1: Recall the row-swap rule of Schaum 8.6. Step 2: Each transposition is odd. Step 3: Odd permutations contribute a minus sign. Step 4: Hence the determinant changes sign.'
      },
      {
        q: 'What is the determinant of upper-triangular `$[[2, 9, 4], [0, 3, 5], [0, 0, 7]]$`?',
        options: ['`$14$`', '`$21$`', '`$42$`', '`$0$`'],
        answer: 2,
        explanation: 'Step 1: Triangular shortcut uses the diagonal product. Step 2: Multiply `$2$` times `$3$` to get `$6$`. Step 3: Multiply `$6$` times `$7$` to get `$42$`. Step 4: No expansion is needed.'
      },
      {
        q: 'If two rows are proportional, what is `$\\det$`?',
        options: ['`$1$`', '`$-1$`', 'The product of the pivots', '`$0$`'],
        answer: 3,
        explanation: 'Step 1: Proportional rows are linearly dependent. Step 2: Dependence means zero volume. Step 3: Elimination must reach a zero row. Step 4: Hence the determinant is `$0$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.4
  {
    sectionId: 'engmath-ch21-s4',
    readingTime: 7,
    intro: 'Small systems are won by deciding consistency first and computing second. This drill pairs `$2$`-by-`$2$` Cramer solves with rank checks and homogeneous shortcuts. You will call unique, none or infinite solutions before writing full coordinates.',
    objectives: [
      'Solve `$2$`-by-`$2$` systems by `$\\det$`-division Cramer rule with verification',
      'Classify homogeneous systems through trivial versus infinite-solution tests',
      'Read consistency and rank from augmented versus coefficient matrices'
    ],
    concepts: [
      {
        term: 'Cramer rule for small systems',
        kind: 'method',
        statement: 'For **Cramer** systems `$Ax = b$` with `$\\det A \\ne 0$`, each component is `$x_{i} = \\det A_{i} \\div \\det A$` where `$A_{i}$` replaces column `$i$` by `$b$`, the `cramer` determinant division. The denominator is shared, so only one determinant plus one per variable is needed. Zero denominator disqualifies Cramer and sends the drill to elimination.',
        detail: 'Schaum 8.10 solves `$2x + 3y = 8$` with `$x - 2y = -3$` by `$\\det = -7$`, giving `$x = 1$` and `$y = 2$` after two numerator determinants.'
      },
      {
        term: 'Homogeneous systems and triviality',
        kind: 'theorem',
        statement: 'A **homogeneous** system `$Ax = 0$` always owns the zero solution, and the `homog` test says nontrivial solutions exist exactly when `$\\det A = 0$` for square `$A$`. More unknowns than equations also forces infinite solutions. The zero solution is called **trivial**, and any nonzero member is a free-direction certificate.',
        detail: 'Schaum 3.11 shows three equations in four unknowns must have nonzero solutions, since rank cannot reach the unknown count.'
      },
      {
        term: 'Consistency by rank comparison',
        kind: 'theorem',
        statement: 'A system is **consistent** exactly when the coefficient rank equals the augmented rank, the `rank` equality `$\\operatorname{rank} A = \\operatorname{rank} [A \\mid b]$`. A pivot in the augmented column means `$0 = 1$` and inconsistency. Equal ranks with full column rank give uniqueness, while a rank shortfall gives free variables.',
        detail: 'The row `$[0, 0, 0 \\mid 5]$` has augmented rank one higher, so Schaum 3.6 labels it inconsistent with no solution.'
      },
      {
        term: 'Adjugate inverse formula',
        kind: 'method',
        statement: 'Every invertible `$A$` satisfies `$A^{-1} = \\operatorname{adj} A \\div \\det A$`, the **adjugate** transpose of cofactors divided by the determinant, remembered by the `adjugate` tag. For `$2$`-by-`$2$` this collapses to swap-negate-divide. The formula also proves `$A(\\operatorname{adj} A) = (\\det A)I$` even when singular.',
        detail: 'Schaum 8.9 builds `$\\operatorname{adj} [[1, 2], [3, 4]]$` as `$[[4, -2], [-3, 1]]$`, so division by `$-2$` returns the familiar inverse.'
      },
      {
        term: 'Singular versus nonsingular calls',
        kind: 'definition',
        statement: 'A square matrix is **nonsingular** when `$\\det \\ne 0$` with a unique solution for every `$b$`, and **singular** when `$\\det = 0$` with either none or infinite, the `singular` fork. The drill habit is determinant first, then Cramer or elimination accordingly. Rank refines the singular fork into none versus infinite.',
        detail: 'Determinant `$-1$` in the previous section certified nonsingular, while `$0$` from proportional rows forces the elimination fork.'
      }
    ],
    figures: [
      {
        caption: 'Consistency in two variables: intersecting lines give one solution, parallel lines give none, and coincident lines give infinite solutions.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Intersecting parallel and coincident line pairs"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">One, none, or infinite solutions</text><line x1="60" y1="260" x2="220" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="280" x2="80" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="250" x2="200" y2="120" stroke="currentColor" stroke-width="2.5"/><line x1="90" y1="120" x2="200" y2="250" stroke="currentColor" stroke-width="2.5"/><circle cx="145" cy="185" r="5" fill="currentColor"/><text x="145" y="292" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">unique</text><line x1="280" y1="260" x2="440" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="300" y1="280" x2="300" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="310" y1="230" x2="420" y2="140" stroke="currentColor" stroke-width="2.5"/><line x1="310" y1="250" x2="420" y2="160" stroke="currentColor" stroke-width="2.5"/><text x="365" y="292" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">none</text><line x1="500" y1="260" x2="660" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="520" y1="280" x2="520" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="530" y1="230" x2="640" y2="140" stroke="currentColor" stroke-width="3.5"/><text x="585" y="292" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">infinite</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Cramer sprint on two equations',
        problem: 'Solve `$2x + 3y = 8$` with `$x - 2y = -3$` by Cramer rule and verify by substitution plus script.',
        steps: [
          { label: 'Step 1: Shared denominator', text: 'Coefficient determinant is `$2(-2) - 3(1) = -4 - 3 = -7$`. Nonzero licenses Cramer with denominator `$-7$` for both variables.' },
          { label: 'Step 2: Numerators plus script', text: '```python\nD = 2*(-2) - 3*1\nDx = 8*(-2) - 3*(-3)\nDy = 2*(-3) - 8*1\nprint(D, Dx, Dy, Dx/D, Dy/D)\n```\n`$D_{x} = -16 + 9 = -7$` so `$x = \\frac{-7}{-7} = 1$`; `$D_{y} = -6 - 8 = -14$` so `$y = \\frac{-14}{-7} = 2$`, matching the script.' },
          { label: 'Step 3: Verify in both lines', text: '`$2(1) + 3(2) = 8$` and `$1 - 2(2) = -3$`. Both equations balance, so `$(1, 2)$` is certified unique.' }
        ],
        result: 'Unique solution `$(x, y) = (1, 2)$` with `$\\det = -7$`.'
      },
      {
        title: 'Homogeneous fork with zero determinant',
        problem: 'Decide whether `$x + 2y + z = 0$`, `$3x + 4y + 0z = 0$`, `$0x + y + 2z = 0$` has only the trivial solution.',
        steps: [
          { label: 'Step 1: Determinant test', text: 'The matrix `$[[1, 2, 1], [3, 4, 0], [0, 1, 2]]$` already evaluated to `$-1$` in the previous sprint. Nonzero is the whole decision.' },
          { label: 'Step 2: Apply the homogeneous theorem', text: 'Square with `$\\det \\ne 0$` forces only `$x = y = z = 0$`. No elimination is needed once the determinant is known.' },
          { label: 'Step 3: Contrast the singular case', text: 'If the determinant had been `$0$`, free variables would generate a line or plane of solutions through the origin. Here rank is `$3$`, full, so no free direction exists.' }
        ],
        result: 'Only the trivial solution since `$\\det = -1 \\ne 0$`.'
      }
    ],
    keyTakeaways: [
      'Cramer needs `$\\det A \\ne 0$` with `$x_{i} = \\det A_{i} \\div \\det A$`.',
      'Homogeneous square systems go infinite exactly when `$\\det = 0$`.',
      'Consistency is `$\\operatorname{rank} A = \\operatorname{rank} [A \\mid b]$`.',
      'Singular means fork to elimination for none versus infinite.'
    ],
    quiz: [
      // PYQ-pattern: consistency and Cramer drill with changed constants (rephrased, values changed)
      {
        q: 'For `$2x + 3y = 8$` and `$x - 2y = -3$`, what is `$\\det$` of the coefficient matrix?',
        options: ['`$7$`', '`$-7$`', '`$-1$`', '`$10$`'],
        answer: 1,
        explanation: 'Step 1: Determinant is `$2(-2) - 3(1)$`. Step 2: That is `$-4 - 3$`. Step 3: Sum is `$-7$`. Step 4: Nonzero, so Cramer applies.'
      },
      {
        q: 'A square homogeneous system `$Ax = 0$` has a nonzero solution exactly when what holds?',
        options: ['`$\\det A = 0$`', '`$\\det A = 1$`', '`$A$` is the identity', '`$b$` is nonzero'],
        answer: 0,
        explanation: 'Step 1: Zero is always a solution. Step 2: Nontrivial needs dependence. Step 3: Dependence for square is `$\\det = 0$`. Step 4: Otherwise only the trivial solution survives.'
      },
      {
        q: 'An augmented row `$[0, 0, 0 \\mid 5]$` signals what?',
        options: ['A free variable with infinite solutions', 'Inconsistency with no solution', 'A unique solution `$z = 5$`', 'A pivot in every column'],
        answer: 1,
        explanation: 'Step 1: The row reads `$0 = 5$`. Step 2: That equation is impossible. Step 3: Augmented rank exceeds coefficient rank. Step 4: Hence no solution exists.'
      },
      {
        q: 'What is `$A^{-1}$` from `$\\operatorname{adj} A$` when `$\\det A = -2$` for `$A = [[1, 2], [3, 4]]$`?',
        options: ['`$[[4, -2], [-3, 1]]$`', '`$[[-2, 1], [1.5, -0.5]]$`', '`$[[1, 0], [0, 1]]$`', '`$[[4, 3], [2, 1]]$`'],
        answer: 1,
        explanation: 'Step 1: Adjugate is `$[[4, -2], [-3, 1]]$`. Step 2: Divide every entry by `$-2$`. Step 3: Get `$[[-2, 1], [1.5, -0.5]]$`. Step 4: Check gives `$AA^{-1} = I$`.'
      }
    ]
  }
]
