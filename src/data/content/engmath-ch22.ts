import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Schaum Lab II: Linear Systems and Vector Spaces
// Chapter 22: sections 22.1 to 22.4. Master study content.
// Source: Lipschutz Linear Algebra Schaum 6e, Chapters 3 and 4.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh22Content: SectionContent[] = [
  // ---------------------------------------------------------------- 22.1
  {
    sectionId: 'engmath-ch22-s1',
    readingTime: 9,
    intro: 'Elimination is the highest-yield drill in the Schaum systems chapter, so this workshop times every echelon sprint. You will push small augmented matrices to staircase form, name pivots and free variables, and parametrize solution sets through pairings such as `$Ax = b$`. The closing habit is a back-substitution check that certifies each answer in seconds.',
    objectives: [
      'Row-reduce small augmented matrices to echelon form and locate every pivot',
      'Separate leading variables from free variables and count solution types',
      'Parametrize infinite solution sets and verify by substitution'
    ],
    concepts: [
      {
        term: 'Echelon and reduced echelon form',
        kind: 'definition',
        statement: 'An **echelon** matrix has staircase pivots with each leading entry to the right of the one above, zeros below every pivot, and the `echelon` tag for the row form; reduced echelon adds ones at pivots with zeros above them too. Pivot columns mark leading variables while the rest signal freedom. A zero row followed by inconsistency row `$[0, 0, 0 \\mid 1]$` ends the classification instantly.',
        detail: 'Schaum 3.7 drills `$[[1, -3, 2, 6], [0, 2, 1, -4], [0, 0, 7, 14]]$` as echelon with pivots in all three variable columns, hence a unique solution after back substitution.'
      },
      {
        term: 'Elementary row operations',
        kind: 'method',
        statement: 'The three **row operations** of swapping rows, scaling a row and adding a multiple of one row to another preserve the solution set, remembered by the `rowops` triple. Gaussian elimination applies them in the order of clear-below then scale-then-clear-above. Recording each move as `$R_{2} \\to -2R_{1} + R_{2}$` keeps the sprint auditable under time.',
        detail: 'Schaum 3.6 replaces `$L_{2}$` by `$-2L_{1} + L_{2}$` and `$L_{3}$` by `$3L_{1} + L_{3}$` on the condensed tableau, reaching `$2y + z = -4$` and `$-3y + 2z = 13$` before the final `$7z = 14$`.'
      },
      {
        term: 'Free variables and solution counting',
        kind: 'theorem',
        statement: 'Each nonpivot column contributes a **free variable** that can be assigned arbitrarily, and the `free` count equals unknowns minus pivot rank. Zero free variables with consistency gives uniqueness, while one or more free variables parametrize infinite solutions. A pivot in the augmented column means `$0 = 1$` and no solution at all.',
        detail: 'Two pivots among three unknowns leave one free variable, so Schaum 3.5 writes the line `$x = 2 - t$`, `$y = 1 + t$`, `$z = t$` with `$t$` ranging over all scalars.'
      },
      {
        term: 'Parametric solution sets',
        kind: 'notation',
        statement: 'Infinite solutions are reported in **parametric** vector form as a particular point plus a combination of free directions, built by the `param` recipe of setting each free variable to `$1$` in turn. The directions span the homogeneous solution space, while the particular point anchors the affine shift. Substituting `$t = 0$` and `$t = 1$` spot-checks two distinct solutions at once.',
        detail: 'With `$z = t$` free, back substitution gives `$y = -2 - t \\div 2$` style fractions kept inside `$...$` as `$\\frac{-4 - t}{2}$`, then `$x$` follows from the top row.'
      },
      {
        term: 'Matrix equation and column view',
        kind: 'insight',
        statement: 'Every system reads as the **matrix equation** `$Ax = b$`, where solvability asks whether `$b$` is a combination of the columns of `$A$`, the `colcomb` viewpoint of Schaum 3.10. The column space is exactly the set of reachable right-hand sides. Elimination on `$[A \\mid b]$` tests membership while building the coefficients simultaneously.',
        detail: 'Schaum 3.10 writes `$x(1, 2) + y(-1, 3) = (4, 5)$` as a column combination, solved by the same elimination that tests whether `$(4, 5)$` lies in the span.'
      }
    ],
    figures: [
      {
        caption: 'Elimination staircase for `$[A \\mid b]$`: pivots `$p_{1}$`, `$p_{2}$`, `$p_{3}$` step rightward while free columns have no pivot.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Echelon staircase with pivots and free column"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Staircase decides everything</text><rect x="120" y="80" width="480" height="170" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><line x1="140" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="3"/><circle cx="150" cy="110" r="7" fill="currentColor"/><text x="150" y="140" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">p1</text><line x1="300" y1="155" x2="440" y2="155" stroke="currentColor" stroke-width="3"/><circle cx="312" cy="155" r="7" fill="currentColor"/><text x="312" y="185" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">p2</text><line x1="440" y1="200" x2="560" y2="200" stroke="currentColor" stroke-width="3"/><circle cx="452" cy="200" r="7" fill="currentColor"/><text x="452" y="230" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">p3</text><line x1="560" y1="80" x2="560" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="580" y="160" font-family="sans-serif" font-size="13" fill="currentColor">augmented</text><text x="360" y="290" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">pivot in augmented column means inconsistency</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Elimination sprint to unique solution',
        problem: 'Solve `$x - 3y + 2z = 6$`, `$2x - 4y - 3z = 8$`, `$-3x + 6y + 8z = -5$` by Gaussian elimination with a script check.',
        steps: [
          { label: 'Step 1: Clear below the first pivot', text: 'Replace `$R_{2}$` by `$-2R_{1} + R_{2}$` giving `$2y - 7z = -4$` in condensed labels, and `$R_{3}$` by `$3R_{1} + R_{3}$` giving `$-3y + 14z = 13$`. The first column now has zeros below the pivot `$1$`.' },
          { label: 'Step 2: Finish the triangle plus script', text: '```python\n# back substitution for the triangular finish 7z = 14\nz = 14 / 7\ny = (-4 + 7*z) / 2\nx = 6 + 3*y - 2*z\nprint(z, y, x)\n```\nCombining the two new rows eliminates `$y$` to `$7z = 14$`, so `$z = 2$`; the script then returns `$y = 5$` and `$x = 17$` by back substitution.' },
          { label: 'Step 3: Verify top to bottom', text: 'Check row one: `$17 - 15 + 4 = 6$`; row two: `$34 - 20 - 6 = 8$`; row three: `$-51 + 30 + 16 = -5$`. All three balance, so `$(17, 5, 2)$` is unique.' }
        ],
        result: 'Unique solution `$(x, y, z) = (17, 5, 2)$` with three pivots.'
      },
      {
        title: 'Free-variable parametrization sprint',
        problem: 'Parametrize all solutions of `$x + y + z = 3$` with `$2x - y + z = 0$` and exhibit two distinct solutions.',
        steps: [
          { label: 'Step 1: Eliminate to one free column', text: 'Subtract `$2R_{1}$` from `$R_{2}$` to get `$-3y - z = -6$`, so `$y = 2 - z \\div 3$` kept as `$y = \\frac{6 - z}{3}$`. Columns for `$x$` and `$y$` carry pivots while `$z$` is free.' },
          { label: 'Step 2: Express leading variables', text: 'Set `$z = t$`; then `$y = 2 - t \\div 3$` and `$x = 3 - y - t = 1 - 2t \\div 3$`, written with `$...$` fractions `$y = \\frac{6 - t}{3}$` and `$x = \\frac{3 - 2t}{3}$`.' },
          { label: 'Step 3: Sample the line', text: '`$t = 0$` gives `$(1, 2, 0)$` and `$t = 3$` gives `$(-1, 1, 3)$`; both satisfy the two planes, confirming the line of intersection.' }
        ],
        result: 'One-parameter line `$x = \\frac{3 - 2t}{3}$`, `$y = \\frac{6 - t}{3}$`, `$z = t$`.'
      }
    ],
    keyTakeaways: [
      'Pivots mark leading variables while nonpivot columns mark free variables.',
      'A pivot in the augmented column is the instant no-solution certificate.',
      'Infinite solutions need parametric form with one direction per free variable.',
      'Always back-substitute into every original equation before moving on.'
    ],
    quiz: [
      // PYQ-pattern: elimination drill with changed small systems (rephrased, values changed)
      {
        q: 'In `$[[1, -3, 2, 6], [0, 2, 1, -4], [0, 0, 7, 14]]$`, where are the pivots?',
        options: ['Columns one, two and three', 'Columns two, three and four', 'Only column one', 'There are no pivots'],
        answer: 0,
        explanation: 'Step 1: Row one leads in column one. Step 2: Row two leads in column two. Step 3: Row three leads in column three. Step 4: Three pivots with consistency means a unique solution.'
      },
      {
        q: 'Three unknowns with rank two and consistency give what?',
        options: ['No solution', 'A unique solution', 'A one-parameter infinite family', 'Eight isolated solutions'],
        answer: 2,
        explanation: 'Step 1: Free count is unknowns minus rank. Step 2: So `$3 - 2 = 1$` free variable. Step 3: One free variable traces a line. Step 4: Hence infinite solutions with one parameter.'
      },
      {
        q: 'What does the condensed move `$R_{2} \\to -2R_{1} + R_{2}$` achieve?',
        options: ['It scales the determinant by `$-2$`', 'It clears the `$R_{2}$` entry below the first pivot', 'It swaps rows one and two', 'It reads the solution directly'],
        answer: 1,
        explanation: 'Step 1: The multiplier `$2$` matches the `$2$` below the pivot. Step 2: Subtracting cancels that entry to `$0$`. Step 3: Solution set is preserved by row addition. Step 4: The first column is now clear below the pivot.'
      },
      {
        q: 'Which augmented row signals inconsistency?',
        options: ['`$[1, 0, 0 \\mid 5]$`', '`$[0, 1, 0 \\mid -2]$`', '`$[0, 0, 0 \\mid 1]$`', '`$[0, 0, 1 \\mid 0]$`'],
        answer: 2,
        explanation: 'Step 1: Read the row as an equation. Step 2: It says `$0 = 1$`. Step 3: That is impossible over any field. Step 4: So the system has no solution.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.2
  {
    sectionId: 'engmath-ch22-s2',
    readingTime: 8,
    intro: 'Subspace checks are pass-or-fail drills where the zero vector and closure under addition plus scaling decide everything. This sprint runs the Schaum subspace test on lines, planes, sums and intersections with explicit counterexamples. You will reject impostors such as shifted lines in under a minute each.',
    objectives: [
      'Apply the three-point subspace test with zero, addition and scaling checks',
      'Reject classic non-examples with one concrete violating pair',
      'Decide sums versus unions and intersections of subspaces'
    ],
    concepts: [
      {
        term: 'Subspace three-point test',
        kind: 'definition',
        statement: 'A nonempty subset `$W$` is a **subspace** when it contains `$0$` and stays closed under addition and scalar multiplication, the `subtest` triple of Schaum 4.5. Checking `$0$` first eliminates shifted sets instantly, since any subspace must anchor at the origin. The two closure checks then need only one generic pair `$u, v \\in W$` and one scalar `$k$`.',
        detail: 'Schaum 4.82 certifies sequences with first entry `$0$` as a subspace, while sequences with first entry `$1$` fail at `$0$` before closure is even tested.'
      },
      {
        term: 'Classic non-examples',
        kind: 'insight',
        statement: 'Shifted lines, the first quadrant and unit circles are **non-subspaces** because each breaks at least one requirement, collected under the `nonspace` gallery. A line missing the origin fails the zero test, the quadrant fails under negation, and the circle fails under scaling by `$2$`. One explicit violation beats pages of abstract argument in a sprint.',
        detail: 'Vectors `$(1, 1)$` and `$(2, 2)$` stay in the first quadrant but `$-1$` times either leaves it, so closure under scaling collapses.'
      },
      {
        term: 'Sums of subspaces',
        kind: 'theorem',
        statement: 'The **sum** `$U + W$` of all `$u + w$` is always a subspace and equals the span of the union, the `sum` construction of Schaum 4.5. Sums grow while unions usually do not, since `$u$` from one side plus `$w$` from the other escapes the union. Dimension adds with overlap subtracted through `$\\dim(U + W) = \\dim U + \\dim W - \\dim(U \\cap W)$`.',
        detail: 'The `$x$`-axis plus the `$y$`-axis sums to the whole `$xy$`-plane, while their union is just the cross and fails addition of `$(1, 0) + (0, 1)$`.'
      },
      {
        term: 'Intersections stay subspaces',
        kind: 'theorem',
        statement: 'The **intersection** `$U \\cap W$` of two subspaces is always a subspace, verified by the `intersect` closure inheritance: sums and scalings computed in either parent stay in both. Intersections shrink toward shared constraints, such as two planes through the origin meeting in a line. Arbitrary unions need not inherit anything, which is why intersections are the safe shrinking move.',
        detail: 'Schaum 4.5 intersects `$x + y = 0$` with `$x - y = 0$` inside `$\\mathbb{R}^{2}$` to get the `$0$` subspace, still a subspace despite being minimal.'
      },
      {
        term: 'Span is the smallest subspace',
        kind: 'method',
        statement: 'The **span** of any set is the smallest subspace containing it, assembled by the `span` recipe of all finite linear combinations. Testing membership means solving for coefficients, which reconnects subspaces to elimination drills. Row space, column space and null space are the three spans manufactured directly from a matrix.',
        detail: 'Schaum 4.83 asks for which `$(a, b, c)$` the vector `$w$` combines `$u = (1, 2, 3)$` with `$v = (2, 3, 1)$`, a span-membership elimination with condition `$2a - 5b + c = 0$`-style planes.'
      }
    ],
    figures: [
      {
        caption: 'Subspace versus impostor in `$\\mathbb{R}^{2}$`: a line through `$0$` against a shifted line plus the union cross versus the sum plane idea.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Subspace line through origin versus shifted line"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Through origin passes, shifted fails</text><line x1="60" y1="280" x2="340" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="300" x2="90" y2="80" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="260" x2="300" y2="100" stroke="currentColor" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="currentColor"/><text x="200" y="305" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">subspace: owns 0</text><line x1="380" y1="280" x2="660" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="410" y1="300" x2="410" y2="80" stroke="currentColor" stroke-width="1.5"/><line x1="430" y1="230" x2="630" y2="70" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/><circle cx="430" cy="260" r="5" fill="currentColor"/><text x="530" y="305" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">impostor: misses 0</text><text x="620" y="80" font-family="sans-serif" font-size="13" fill="currentColor">0 off line</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Line through origin versus shifted line',
        problem: 'Decide which of `$W_{1} = \\{(t, 2t) : t \\in \\mathbb{R}\\}$` and `$W_{2} = \\{(t, 2t + 1) : t \\in \\mathbb{R}\\}$` is a subspace of `$\\mathbb{R}^{2}$`.',
        steps: [
          { label: 'Step 1: Zero test first', text: '`$W_{1}$` contains `$(0, 0)$` at `$t = 0$`, while `$W_{2}$` gives `$(0, 1)$` at `$t = 0$` and never reaches `$(0, 0)$`. The shifted line already fails, so it is out in seconds.' },
          { label: 'Step 2: Closure sprint plus script', text: '```python\ndef in_W1(p): return abs(p[1] - 2*p[0]) < 1e-9\nu = (1, 2)\nv = (3, 6)\nprint(in_W1(u), in_W1(v), in_W1((u[0]+v[0], u[1]+v[1])))\n```\nFor `$W_{1}$`, sums stay doubling and scalings stay doubling, confirmed by the script printing three true values; `$W_{2}$` needs no script since it already missed zero.' },
          { label: 'Step 3: Verdict', text: '`$W_{1}$` passes all three points and is a subspace, while `$W_{2}$` is an affine shift and never a subspace.' }
        ],
        result: '`$W_{1}$` is a subspace, `$W_{2}$` is not since `$0 \\notin W_{2}$`.'
      },
      {
        title: 'Union fails while sum and intersection pass',
        problem: 'Let `$U$` be the `$x$`-axis and `$W$` the `$y$`-axis in `$\\mathbb{R}^{2}$`. Test `$U \\cup W$`, `$U + W$` and `$U \\cap W$`.',
        steps: [
          { label: 'Step 1: Break the union', text: '`$(1, 0) \\in U$` and `$(0, 1) \\in W$` so both lie in the union, but their sum `$(1, 1)$` lies on neither axis. One pair kills the union.' },
          { label: 'Step 2: Certify sum and intersection', text: 'Sums `$ (a, 0) + (0, b) = (a, b)$` cover the whole plane, a subspace; the intersection is `$\\{(0, 0)\\}$`, which always passes the three-point test.' },
          { label: 'Step 3: State the moral', text: 'Sums enlarge safely and intersections shrink safely, while unions do neither in general.' }
        ],
        result: 'Union is not a subspace; sum is `$\\mathbb{R}^{2}$` and intersection is `$\\{0\\}$`.'
      }
    ],
    keyTakeaways: [
      'Zero first: missing `$0$` rejects a candidate before any algebra.',
      'One violating pair is enough to fail addition or scaling closure.',
      'Sums of subspaces are subspaces while unions usually are not.',
      'Intersections of subspaces are always subspaces.'
    ],
    quiz: [
      // PYQ-pattern: subspace verification sprint with changed sets (rephrased, values changed)
      {
        q: 'Which subset of `$\\mathbb{R}^{2}$` is a subspace?',
        options: ['The line `$y = 2x + 1$`', 'The line `$y = 2x$`', 'The first quadrant `$x \\ge 0, y \\ge 0$`', 'The unit circle `$x^{2} + y^{2} = 1$`'],
        answer: 1,
        explanation: 'Step 1: Test `$0$` membership first. Step 2: Only `$y = 2x$` contains `$(0, 0)$`. Step 3: It also closes under addition and scaling. Step 4: The other three miss zero or break closure.'
      },
      {
        q: 'Why is the first quadrant not a subspace?',
        options: ['It contains `$0$` so it must be one', 'It fails closure under negative scaling', 'It has the wrong dimension', 'It is not a subset of `$\\mathbb{R}^{2}$`'],
        answer: 1,
        explanation: 'Step 1: Take `$(1, 1)$` in the quadrant. Step 2: Scale by `$-1$` to get `$(-1, -1)$`. Step 3: That point leaves the quadrant. Step 4: Hence scaling closure fails.'
      },
      {
        q: 'What is the sum of the `$x$`-axis and `$y$`-axis in `$\\mathbb{R}^{2}$`?',
        options: ['Just the union cross', 'Only the origin', 'The whole plane `$\\mathbb{R}^{2}$`', 'The line `$y = x$`'],
        answer: 2,
        explanation: 'Step 1: Sum allows `$(a, 0) + (0, b)$`. Step 2: That equals `$(a, b)$` arbitrary. Step 3: Every plane point is reached. Step 4: So the sum is the whole `$\\mathbb{R}^{2}$`.'
      },
      {
        q: 'What is always true about `$U \\cap W$` for subspaces `$U$` and `$W$`?',
        options: ['It is empty', 'It is a subspace', 'It equals the union', 'It has dimension one'],
        answer: 1,
        explanation: 'Step 1: Both contain `$0$`, so the intersection is nonempty. Step 2: Sums computed in either parent stay in both. Step 3: Scalings likewise stay in both. Step 4: Hence all three subspace points hold.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.3
  {
    sectionId: 'engmath-ch22-s3',
    readingTime: 8,
    intro: 'Basis and dimension turn spanning lists into minimal efficient toolkits. This workshop drills independence tests, span checks and dimension counts the Schaum way with `$3$`-vector determinants and exchange arguments. You will extend small independent sets to full bases and read coordinates without hesitation.',
    objectives: [
      'Test independence of short lists by determinant and elimination sprints',
      'Extend independent sets to bases and shrink spanning sets down',
      'Compute coordinates of vectors relative to tilted bases'
    ],
    concepts: [
      {
        term: 'Linear independence sprint',
        kind: 'definition',
        statement: 'Vectors are **independent** when only the trivial combination gives zero, tested by the `indep` equation `$c_{1}v_{1} + c_{2}v_{2} + c_{3}v_{3} = 0$` forcing all `$c_{i} = 0$`. For three vectors in `$\\mathbb{R}^{3}$` the determinant shortcut says nonzero determinant means independent. Anydependence relation with a nonzero coefficient is a concrete witness.',
        detail: 'Schaum 4.7 shows `$(1, 2, 3)$`, `$(2, 3, 1)$` need a third-vector condition: `$w = (1, 3, 8)$` combines them while `$w = (2, 4, 5)$` does not, exposing dependence versus independence of augmented lists.'
      },
      {
        term: 'Span and spanning sets',
        kind: 'definition',
        statement: 'The **span** is the set of all linear combinations of a list, and the list **spans** when every space vector is reachable, flagged by the `span` membership test. Spanning is existence of coefficients, while independence is uniqueness of the trivial one. Together they define a basis as spanning plus independent.',
        detail: 'Schaum 4.84 writes `$f(t) = at^{2} + bt + c$` as a combination of basis polynomials, the function-space analogue of reaching every vector.'
      },
      {
        term: 'Basis as minimal spanning toolkit',
        kind: 'theorem',
        statement: 'A **basis** is an independent spanning list, minimal for spanning and maximal for independence, under the `basis` exchange principle. Every vector expands uniquely as a combination of basis vectors. The standard basis `$e_{1}, e_{2}, e_{3}$` is one choice among infinitely many tilted alternatives.',
        detail: 'Schaum 4.8 proves any spanning set can be trimmed to a basis and any independent set extended, so bases always exist in finite dimensions.'
      },
      {
        term: 'Dimension as invariant count',
        kind: 'theorem',
        statement: 'The **dimension** `$\\dim V$` is the number of vectors in any basis, and the `dim` invariance says all bases share that size. More vectors than the dimension must be dependent, which is the fastest dependence call available. Subspace dimension never exceeds parent dimension, with equality only for the whole space.',
        detail: 'Four vectors in `$\\mathbb{R}^{3}$` are automatically dependent since `$4$` exceeds `$\\dim \\mathbb{R}^{3} = 3$`, with no computation needed.'
      },
      {
        term: 'Coordinate vectors',
        kind: 'notation',
        statement: 'Fixing a basis `$S$` assigns every `$v$` a **coordinate** column `$[v]_{S}$` of its unique expansion coefficients, the `coord` address of `$v$` in that basis. Different bases give different addresses for the same geometric vector. Coordinates turn abstract combination questions into concrete column arithmetic.',
        detail: 'Relative to `$S = \\{(1, 1), (1, -1)\\}$`, the vector `$(4, 2)$` has coordinates `$(3, 1)$` since `$3(1, 1) + 1(1, -1) = (4, 2)$`.'
      }
    ],
    figures: [
      {
        caption: 'A basis `$v_{1}, v_{2}$` spanning the plane: every `$w$` is reached by exactly one combination `$av_{1} + bv_{2}$`.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basis vectors spanning a plane with a combination"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Basis reaches every point once</text><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="320" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="280" x2="340" y2="220" stroke="currentColor" stroke-width="3"/><polygon points="340,220 328,220 333,231" fill="currentColor"/><line x1="100" y1="280" x2="220" y2="110" stroke="currentColor" stroke-width="3"/><polygon points="220,110 213,121 224,121" fill="currentColor"/><line x1="340" y1="220" x2="440" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="220" y1="110" x2="440" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><circle cx="440" cy="90" r="6" fill="currentColor"/><text x="352" y="212" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v1</text><text x="190" y="150" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v2</text><text x="452" y="82" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">w</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Independence sprint by determinant',
        problem: 'Test independence of `$(1, 2, 3)$`, `$(2, 3, 1)$`, `$(1, 0, 1)$` by determinant with a script check.',
        steps: [
          { label: 'Step 1: Form the column matrix', text: 'Stack as `$[[1, 2, 1], [2, 3, 0], [3, 1, 1]]$` with vectors as columns. Independence is exactly nonsingularity of this square.' },
          { label: 'Step 2: Determinant plus script', text: '```python\nM = [[1, 2, 1], [2, 3, 0], [3, 1, 1]]\ndet = M[0][0]*(M[1][1]*M[2][2]-M[1][2]*M[2][1]) - M[0][1]*(M[1][0]*M[2][2]-M[1][2]*M[2][0]) + M[0][2]*(M[1][0]*M[2][1]-M[1][1]*M[2][0])\nprint(det)\n```\nExpansion gives `$1(3) - 2(2) + 1(-7) = 3 - 4 - 7 = -8$`, and the script prints `$-8$`.' },
          { label: 'Step 3: Call independence', text: 'Nonzero determinant means only the trivial combination vanishes, so the three vectors are independent and form a basis of `$\\mathbb{R}^{3}$`.' }
        ],
        result: 'Determinant `$-8$`, hence independent and a basis.'
      },
      {
        title: 'Coordinate sprint in a tilted basis',
        problem: 'Find coordinates of `$(4, 2)$` relative to `$S = \\{(1, 1), (1, -1)\\}$`.',
        steps: [
          { label: 'Step 1: Set up the combination', text: 'Write `$(4, 2) = a(1, 1) + b(1, -1)$`, giving `$a + b = 4$` and `$a - b = 2$`. Coordinates are exactly this `$a, b$` pair.' },
          { label: 'Step 2: Solve the two equations', text: 'Adding gives `$2a = 6$` so `$a = 3$`; subtracting gives `$2b = 2$` so `$b = 1$`. No matrices beyond `$2$`-by-`$2$` are needed.' },
          { label: 'Step 3: Report the address', text: '`$[(4, 2)]_{S} = (3, 1)$`. The same geometric arrow has standard address `$(4, 2)$` but tilted address `$(3, 1)$`.' }
        ],
        result: 'Coordinates `$(3, 1)$` since `$3(1, 1) + 1(1, -1) = (4, 2)$`.'
      }
    ],
    keyTakeaways: [
      'Three vectors in `$\\mathbb{R}^{3}$` are independent exactly when their determinant is nonzero.',
      'More vectors than `$\\dim V$` are automatically dependent.',
      'Bases give unique expansions, hence well-defined coordinate columns.',
      'Extend independent sets and trim spanning sets to manufacture bases.'
    ],
    quiz: [
      // PYQ-pattern: basis and dimension drill with changed vectors (rephrased, values changed)
      {
        q: 'Why are any four vectors in `$\\mathbb{R}^{3}$` dependent?',
        options: ['Their determinant is always `$1$`', 'They must all be zero', 'Four exceeds `$\\dim \\mathbb{R}^{3} = 3$`', 'Spans cannot contain four vectors'],
        answer: 2,
        explanation: 'Step 1: Dimension is the basis size `$3$`. Step 2: Independent sets cannot exceed the dimension. Step 3: Four is larger than three. Step 4: Hence dependence is automatic.'
      },
      {
        q: 'What are the coordinates of `$(4, 2)$` in `$S = \\{(1, 1), (1, -1)\\}$`?',
        options: ['`$(3, 1)$`', '`$(4, 2)$`', '`$(1, 3)$`', '`$(2, 2)$`'],
        answer: 0,
        explanation: 'Step 1: Solve `$a + b = 4$` and `$a - b = 2$`. Step 2: Adding gives `$a = 3$`. Step 3: Then `$b = 1$`. Step 4: So the coordinate column is `$(3, 1)$`.'
      },
      {
        q: 'Which test certifies three vectors in `$\\mathbb{R}^{3}$` as a basis?',
        options: ['They are pairwise perpendicular', 'Their determinant is nonzero', 'They all have length one', 'Their sum is zero'],
        answer: 1,
        explanation: 'Step 1: Basis needs spanning plus independence. Step 2: For three vectors in `$3$`-space, independence suffices. Step 3: Determinant nonzero is exactly independence. Step 4: Hence they form a basis.'
      },
      {
        q: 'If `$w = (1, 3, 8)$` combines `$u = (1, 2, 3)$` and `$v = (2, 3, 1)$`, what follows?',
        options: ['`$u$` and `$v$` are dependent', '`$w$` is orthogonal to both', 'No coefficients exist', '`$w$` lies in `$\\operatorname{span}(u, v)$`'],
        answer: 3,
        explanation: 'Step 1: Combination means `$w = au + bv$` for some `$a, b$`. Step 2: That is exactly span membership. Step 3: Here `$a = 2$` and `$b = -1$` style numbers work. Step 4: So `$w$` is in the span.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.4
  {
    sectionId: 'engmath-ch22-s4',
    readingTime: 7,
    intro: 'Change of basis is the translation desk between coordinate languages. This drill builds transition matrices column by column from `$[I]_{E \\to S}$` relations and converts addresses by multiplication. Similar matrices then appear as the same map read in two bases.',
    objectives: [
      'Write coordinate vectors for tilted bases by small-system solves',
      'Build transition matrices and convert coordinates both ways',
      'Compute similar-matrix representatives with `$P^{-1}AP$`'
    ],
    concepts: [
      {
        term: 'Coordinate vectors in two bases',
        kind: 'definition',
        statement: 'Fixing bases `$E$` and `$S$` gives every vector two **addresses** `$[v]_{E}$` and `$[v]_{S}$`, linked by the `coordvec` change formula. The standard basis `$E$` reads coordinates directly, while tilted `$S$` needs a solve. Neither address is more correct; each is a language for the same arrow.',
        detail: 'Schaum 4.9 solves `$(a, b) = x(1, 1) + y(1, -1)$` to translate standard addresses into tilted ones, the prototype of every transition computation.'
      },
      {
        term: 'Transition matrix columns',
        kind: 'theorem',
        statement: 'The **transition** matrix `$P = [I]_{S \\to E}$` has columns equal to `$S$`-basis vectors expressed in `$E$` coordinates, the `transition` column rule. Conversion runs `$[v]_{E} = P[v]_{S}$` forward and `$[v]_{S} = P^{-1}[v]_{E}$` backward. Building `$P$` is therefore one basis-writing exercise, then inversion handles the return trip.',
        detail: 'For `$S = \\{(1, 1), (1, -1)\\}$` the transition is `$P = [[1, 1], [1, -1]]$`, whose inverse `$-\\frac{1}{2}[[ -1, -1], [-1, 1]]$`-style scaling converts back.'
      },
      {
        term: 'Similar matrices share a map',
        kind: 'definition',
        statement: 'Two matrices are **similar** when `$B = P^{-1}AP$` for some invertible `$P$`, the `similar` change-of-basis formula for one operator read twice. Similar matrices share determinant, trace, rank and eigenvalues. The `$P$` is exactly a transition matrix between the two bases.',
        detail: 'Schaum 6.7 derives `$[T]_{S} = P^{-1}[T]_{E}P$`, so changing the basis conjugates rather than replacing the operator.'
      },
      {
        term: 'Standard basis as reference dock',
        kind: 'notation',
        statement: 'The **standard** basis `$E = \\{e_{1}, e_{2}\\}$` serves as the reference dock where coordinates equal components, tagged `std` for every translation. All transitions route through `$E$` when direct `$S \\to S^{\\prime}$` columns look hard. The composite `$[I]_{S^{\\prime} \\to E}[I]_{E \\to S}$` pattern then chains two easy legs.',
        detail: 'Writing `$S^{\\prime}$` vectors in `$E$` and inverting once beats solving a fresh system for every vector to be converted.'
      },
      {
        term: 'Convert-and-check workflow',
        kind: 'method',
        statement: 'The sprint **workflow** is write `$P$`, invert it, multiply for the new address and remultiply to verify, the `convert` loop. Checking `$P[v]_{S} = [v]_{E}$` on the given vector catches column-order slips immediately. Under time, verify on one vector rather than re-deriving `$P^{-1}$`.',
        detail: 'Converting `$(3, 1)_{S}$` by `$P = [[1, 1], [1, -1]]$` gives `$(4, 2)_{E}$`, and `$P^{-1}(4, 2) = (3, 1)$` closes the loop.'
      }
    ],
    figures: [
      {
        caption: 'One arrow `$v$` with two addresses `$[v]_{E}$` and `$[v]_{S}$` linked by `$P$` and `$P^{-1}$`.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Same vector with two coordinate addresses linked by transition"><text x="360" y="36" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Same arrow, two addresses</text><line x1="300" y1="260" x2="420" y2="120" stroke="currentColor" stroke-width="3"/><polygon points="420,120 410,131 421,132" fill="currentColor"/><text x="430" y="150" font-family="sans-serif" font-size="15" font-weight="bold" fill="currentColor">v</text><rect x="90" y="110" width="130" height="90" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="155" y="145" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">[v]E</text><text x="155" y="170" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">(4, 2)</text><rect x="500" y="110" width="130" height="90" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="565" y="145" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">[v]S</text><text x="565" y="170" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">(3, 1)</text><line x1="220" y1="130" x2="500" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="500,130 488,125 488,135" fill="currentColor"/><text x="360" y="118" font-family="sans-serif" font-size="13" fill="currentColor">P forward</text><line x1="500" y1="180" x2="220" y2="180" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><polygon points="220,180 232,175 232,185" fill="currentColor"/><text x="360" y="205" font-family="sans-serif" font-size="13" fill="currentColor">P inverse back</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Transition sprint there and back',
        problem: 'With `$S = \\{(1, 1), (1, -1)\\}$` and `$E$` standard, build `$P = [I]_{S \\to E}$`, convert `$(3, 1)_{S}$` to `$E$`, and invert back with a script check.',
        steps: [
          { label: 'Step 1: Columns are the new basis', text: 'Place `$S$` vectors as columns: `$P = [[1, 1], [1, -1]]$`. Each column is an `$S$` basis vector read in `$E$` language.' },
          { label: 'Step 2: Multiply forward plus script', text: '```python\nP = [[1, 1], [1, -1]]\nvS = [3, 1]\nvE = [P[0][0]*vS[0]+P[0][1]*vS[1], P[1][0]*vS[0]+P[1][1]*vS[1]]\nprint(vE)\n```\n`$Pv_{S} = (3 + 1, 3 - 1) = (4, 2)$`, matching the script output `$[4, 2]$`.' },
          { label: 'Step 3: Invert and verify', text: 'Determinant `$-2$` gives `$P^{-1} = \\frac{1}{-2}[[-1, -1], [-1, 1]]$`; applying to `$(4, 2)$` returns `$(3, 1)$`, closing the loop.' }
        ],
        result: '`$P = [[1, 1], [1, -1]]$` with `$(3, 1)_{S} = (4, 2)_{E}$`.'
      },
      {
        title: 'Similarity sprint for a diagonal map',
        problem: 'Let `$A = [[3, 0], [0, 1]]$` in `$E$` and `$P = [[1, 1], [1, -1]]$`. Compute `$B = P^{-1}AP$` and check the trace.',
        steps: [
          { label: 'Step 1: Multiply `$AP$` first', text: '`$AP = [[3, 3], [1, -1]]$` by scaling the first row of `$P$` by `$3$`. Order matters: `$AP$` applies `$P$` then `$A$`.' },
          { label: 'Step 2: Premultiply by the inverse', text: 'With `$P^{-1} = [[0.5, 0.5], [0.5, -0.5]]$`, the product is `$B = [[2, 1], [1, 2]]$`. Symmetric output reflects the symmetric `$P$` choice.' },
          { label: 'Step 3: Trace check', text: 'Both `$A$` and `$B$` have trace `$4$` and determinant `$3$`, as similarity must preserve. The map stretches one tilted direction by `$3$` and fixes the other.' }
        ],
        result: '`$B = [[2, 1], [1, 2]]$` similar to `$A$` with shared trace `$4$`.'
      }
    ],
    keyTakeaways: [
      'Transition columns are the new basis vectors written in old coordinates.',
      'Forward is `$[v]_{E} = P[v]_{S}$` and back is `$[v]_{S} = P^{-1}[v]_{E}$`.',
      'Similar `$B = P^{-1}AP$` is one operator read in two bases.',
      'Similarity preserves determinant, trace, rank and eigenvalues.'
    ],
    quiz: [
      // PYQ-pattern: change-of-basis drill with changed bases (rephrased, values changed)
      {
        q: 'What are the columns of `$P = [I]_{S \\to E}$`?',
        options: ['Rows of the identity matrix', 'The `$S$`-basis vectors in `$E$` coordinates', 'The eigenvalues of `$S$`', 'Zero columns with ones on top'],
        answer: 1,
        explanation: 'Step 1: `$P$` converts `$S$` addresses to `$E$` addresses. Step 2: Image of each `$S$` basis vector is itself. Step 3: Written in `$E$` those are the basis vectors. Step 4: So they sit as columns of `$P$`.'
      },
      {
        q: 'If `$[v]_{S} = (3, 1)$` with `$P = [[1, 1], [1, -1]]$`, what is `$[v]_{E}$`?',
        options: ['`$(3, 1)$`', '`$(1, 3)$`', '`$(4, 2)$`', '`$(2, 4)$`'],
        answer: 2,
        explanation: 'Step 1: Compute `$P[v]_{S}$`. Step 2: First slot `$3 + 1 = 4$`. Step 3: Second slot `$3 - 1 = 2$`. Step 4: Hence `$(4, 2)$`.'
      },
      {
        q: 'Which quantities are preserved under `$B = P^{-1}AP$`?',
        options: ['Only the entries themselves', 'Determinant, trace, rank and eigenvalues', 'Only the first column', 'Nothing is preserved'],
        answer: 1,
        explanation: 'Step 1: Similarity is a basis change. Step 2: Basis change cannot alter the operator. Step 3: So determinant and trace persist. Step 4: Rank and eigenvalues persist as well.'
      },
      {
        q: 'What is `$P^{-1}$` for `$P = [[1, 1], [1, -1]]$`?',
        options: ['`$[[1, 0], [0, 1]]$`', '`$[[-1, -1], [-1, 1]]$` without division', '`$[[0.5, 0.5], [0.5, -0.5]]$`', 'No inverse exists'],
        answer: 2,
        explanation: 'Step 1: Determinant is `$-2$`. Step 2: Adjugate is `$[[-1, -1], [-1, 1]]$`. Step 3: Divide every entry by `$-2$`. Step 4: Get `$[[0.5, 0.5], [0.5, -0.5]]$`.'
      }
    ]
  }
]
