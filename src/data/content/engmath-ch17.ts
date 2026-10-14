import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Vector Spaces Done Right
// Chapter 17: sections 17.1 to 17.4. Master study content.
// Source: Axler, Linear Algebra Done Right, 4e, Chapter 1 (Sections 1A-1C).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh17Content: SectionContent[] = [
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: 'engmath-ch17-s1',
    readingTime: 8,
    intro: 'Axler begins with coordinates before abstraction, so this section follows the same road from the concrete lists of $\\mathbb{F}^{n}$ to the abstract axioms of a vector space. Complex numbers enter first because the deepest theorems need scalars in which every polynomial splits, and the single rule $i^{2} = -1$ rebuilds all of complex arithmetic. The vector space axioms then distil the familiar rules of coordinate arithmetic into a short list of requirements shared by arrows, functions and polynomials alike.',
    objectives: [
      'Compute with complex numbers from `$i^{2} = -1$` and add and scale lists in `$\\mathbb{F}^{n}$` coordinate by coordinate',
      'State the vector space axioms and test a proposed addition and scalar multiplication against them',
      'Prove the elementary consequences `$0v = 0$`, `$a0 = 0$` and `$(-1)v = -v$` from the distributive law'
    ],
    concepts: [
      {
        term: 'Complex numbers from one rule',
        kind: 'definition',
        statement: 'A **complex number** is `$a + bi$` with `$a, b \\in \\mathbb{R}$`, and every product is rebuilt from the single rule `$i^{2} = -1$` together with the usual arithmetic laws, which is why Axler tells the reader never to memorize the product formula. The `complexpair` view keeps real and imaginary parts separate, while `$\\overline{a + bi} = a - bi$` and `$|a + bi|^{2} = a^{2} + b^{2}$` record conjugation and size. Because `$\\mathbb{R}$` sits inside `$\\mathbb{C}$` as `$a + 0i$`, real arithmetic is just the special case that never leaves the real axis.',
        detail: 'Axler 1.1 motivates `$i$` as a square root of `$-1$` obeying ordinary rules, then verifies `$i^{2} = -1$` from the product definition rather than assuming it.'
      },
      {
        term: 'Lists and the space `$\\mathbb{F}^{n}$`',
        kind: 'notation',
        statement: 'A **list** of length `$n$` is an ordered `$n$`-tuple `$(x_{1}, \\ldots, x_{n})$`, and `$\\mathbb{F}^{n}$` is the set of all such lists with entries in `$\\mathbb{F}$`, where `$\\mathbb{F}$` means `$\\mathbb{R}$` or `$\\mathbb{C}$`. Addition and scalar multiplication act **coordinate by coordinate** through the `coordwise` rule `$\\lambda(x_{1}, \\ldots, x_{n}) = (\\lambda x_{1}, \\ldots, \\lambda x_{n})$`. Coordinatewise multiplication of two lists is deliberately excluded, because experience shows it leads nowhere, while scalar multiplication carries the whole subject.',
        detail: 'Axler 1A builds `$\\mathbb{F}^{n}$` first so that every later axiom looks like a familiar coordinate fact written abstractly.'
      },
      {
        term: 'Vector space axioms',
        kind: 'definition',
        statement: 'A **vector space** is a set `$V$` with an addition and a scalar multiplication obeying commutativity, associativity, an additive identity `$0$`, additive inverses, a multiplicative identity `$1$`, and the distributive and compatibility laws, all collected in the `vspace` axioms of Axler 1B. The two distributive laws are the only bridge between addition and scaling, so every proof joining the two operations must cross them. Arrows in the plane, lists in `$\\mathbb{F}^{n}$`, functions and polynomials all satisfy the same list, which is exactly why one theory covers them all.',
        detail: 'Addition takes two vectors to a vector while scalar multiplication takes a scalar and a vector to a vector, and confusing the two roles is the most common beginner slip.'
      },
      {
        term: 'Unique zero, unique inverses and the three small laws',
        kind: 'theorem',
        statement: 'Every vector space has a **unique additive identity** and every vector a **unique additive inverse**, proved in Axler 1.26 and 1.27 by the two-identity squeeze `$0^{\\prime} = 0^{\\prime} + 0 = 0$`. From distributivity alone follow `$0v = 0$`, `$a0 = 0$` and `$(-1)v = -v$`, the `zerolaws` numbered 1.30 through 1.32. All three proofs run the same trick of expanding `$0$` as `$0 + 0$` and cancelling, so learning one proof teaches all three.',
        detail: 'In `$0v = 0$` the left zero is the scalar `$0 \\in \\mathbb{F}$` while the right zero is the vector `$0 \\in V$`, a distinction Axler flags explicitly.'
      },
      {
        term: 'Scalars are numbers, vectors are not',
        kind: 'insight',
        statement: 'In Axler’s setup `$\\mathbb{F}$` always means the scalars `$\\mathbb{R}$` or `$\\mathbb{C}$`, while elements of `$V$` are **vectors** even when they look like functions or polynomials, and the `scalarvec` discipline never multiplies two vectors together. The **dot product** of Chapter 6 will multiply two vectors to get a scalar, but that is a later structure rather than part of the axioms. Keeping the two sorts straight makes every subspace test and every linearity check mechanical.',
        detail: 'When `$\\mathbb{F}^{n}$` is later called an inner product space, Axler assumes the Euclidean product unless told otherwise, as fixed in 6.4.'
      }
    ],
    figures: [
      {
        caption: 'The vector `$x = (2, 1)$` in `$\\mathbb{R}^{2}$` with its double `$2x = (4, 2)$`: scalar multiplication stretches the arrow along its own line, while vector addition would place arrows head to tail.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate axes with a vector and its scalar double"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Scalar multiplication stretches along the same line</text><line x1="60" y1="270" x2="660" y2="270" stroke="currentColor" stroke-width="2"/><line x1="90" y1="300" x2="90" y2="30" stroke="currentColor" stroke-width="2"/><line x1="180" y1="262" x2="180" y2="278" stroke="currentColor" stroke-width="2"/><line x1="270" y1="262" x2="270" y2="278" stroke="currentColor" stroke-width="2"/><line x1="360" y1="262" x2="360" y2="278" stroke="currentColor" stroke-width="2"/><line x1="450" y1="262" x2="450" y2="278" stroke="currentColor" stroke-width="2"/><text x="180" y="296" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">1</text><text x="270" y="296" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">2</text><text x="82" y="185" font-family="sans-serif" font-size="13" text-anchor="end" fill="currentColor">1</text><text x="82" y="100" font-family="sans-serif" font-size="13" text-anchor="end" fill="currentColor">2</text><line x1="90" y1="270" x2="270" y2="180" stroke="currentColor" stroke-width="2.5"/><polygon points="270,180 256,180 262,192" fill="currentColor"/><line x1="90" y1="270" x2="450" y2="90" stroke="currentColor" stroke-width="2.5"/><polygon points="450,90 436,90 442,102" fill="currentColor"/><line x1="270" y1="180" x2="450" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><circle cx="90" cy="270" r="5" fill="currentColor"/><text x="72" y="292" font-family="sans-serif" font-size="13" text-anchor="end" fill="currentColor">0</text><text x="282" y="172" font-family="sans-serif" font-size="15" font-weight="bold" fill="currentColor">x</text><text x="462" y="82" font-family="sans-serif" font-size="15" font-weight="bold" fill="currentColor">2x</text><text x="360" y="140" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">doubling stays on the line</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Multiply complex numbers the Axler way',
        problem: 'Evaluate `$(2 + 3i)(4 + 5i)$` from the single rule `$i^{2} = -1$` together with the distributive and commutative laws, as in Axler 1.2, and confirm the real and imaginary parts with a short script.',
        steps: [
          { label: 'Step 1: Distribute over the sum', text: 'Treat `$3i$` as `$3$` times `$i$` and expand: `$(2 + 3i)(4 + 5i) = 2(4 + 5i) + 3i(4 + 5i) = 8 + 10i + 12i + 15i^{2}$`. No memorized product formula is used, only distributivity and commutativity.' },
          { label: 'Step 2: Collapse the square and check by script', text: '```python\na, b = 2, 3\nc, d = 4, 5\nreal = a*c - b*d\nimag = a*d + b*c\nprint(real, imag)  # -7 22\n```\nSince `$i^{2} = -1$`, the term `$15i^{2}$` becomes `$-15$`, and the script confirms the real part `$-7$` and the imaginary part `$22$` from the coordinate formulas.' },
          { label: 'Step 3: Read off the answer', text: 'Collecting terms gives `$(2 + 3i)(4 + 5i) = -7 + 22i$`. Setting `$a = c = 0$` with `$b = d = 1$` in the same computation yields `$i^{2} = -1$`, closing the loop Axler describes.' }
        ],
        result: 'The product equals `$-7 + 22i$`, derived from `$i^{2} = -1$` with no memorized formula.'
      },
      {
        title: 'Prove that zero times any vector is zero',
        problem: 'Starting only from the vector space axioms, prove `$0v = 0$` for every `$v \\in V$` (Axler 1.30), saying each time which zero is meant.',
        steps: [
          { label: 'Step 1: Expand the scalar zero', text: 'Write the scalar `$0$` as `$0 + 0$` and use distributivity: `$0v = (0 + 0)v = 0v + 0v$`. This step is the only place the axioms enter, since distributivity is the sole bridge between addition and scaling.' },
          { label: 'Step 2: Cancel from both sides', text: 'Add the additive inverse of `$0v$` to both sides to get `$0 = 0v$` by associativity and the inverse law. The `$0$` on the left of `$0v$` is the scalar zero, while the final `$0$` is the zero vector.' },
          { label: 'Step 3: Note the reusable pattern', text: 'The same expand-and-cancel trick proves `$a0 = 0$` by expanding the vector `$0 = 0 + 0$`, and proves `$(-1)v = -v$` by checking that `$v + (-1)v = 0$`. One trick therefore covers Axler 1.30 through 1.32.' }
        ],
        result: '`$0v = 0$` for every `$v \\in V$`, with the scalar zero on the left and the vector zero on the right.'
      }
    ],
    keyTakeaways: [
      'Complex arithmetic needs only `$i^{2} = -1$` plus ordinary laws, and `$\\mathbb{R}$` sits inside `$\\mathbb{C}$` as `$a + 0i$`.',
      '`$\\mathbb{F}^{n}$` adds and scales coordinate by coordinate, while products of two lists are deliberately excluded.',
      'The axioms bridge addition and scaling only through distributivity, so every mixed proof must use it.',
      'Unique zero, unique inverses, `$0v = 0$`, `$a0 = 0$` and `$(-1)v = -v$` all follow from expand-and-cancel.'
    ],
    quiz: [
      // PYQ-pattern: complex product drill with changed values (rephrased, values changed)
      {
        q: 'Using only `$i^{2} = -1$`, what is `$(2 + 3i)(4 + 5i)$`?',
        options: [`$-7 + 22i$`, `$8 + 15i$`, `$-7 + 10i$`, `$23 + 22i$`],
        answer: 0,
        explanation: 'Step 1: Distribute to get `$8 + 10i + 12i + 15i^{2}$`. Step 2: Replace `$i^{2}$` by `$-1$` to turn `$15i^{2}$` into `$-15$`. Step 3: Combine `$8 - 15 = -7$` with `$10i + 12i = 22i$`. Step 4: The remaining options forget the sign flip, drop the cross terms, or add coordinates instead of multiplying.'
      },
      {
        q: 'In Axler’s notation, what does `$\\mathbb{F}$` stand for?',
        options: ['Any collection of vectors whatsoever', 'Only the two-element set `$\\{0, 1\\}$`', 'Either `$\\mathbb{R}$` or `$\\mathbb{C}$`, fixed for the whole discussion', 'Only the set of integers'],
        answer: 2,
        explanation: 'Step 1: Recall Axler works over real and complex scalars side by side. Step 2: The symbol `$\\mathbb{F}$` abbreviates whichever of the two is in force. Step 3: It never means vectors, integers, or finite fields in this book. Step 4: Hence the discussion fixes `$\\mathbb{F}$` as `$\\mathbb{R}$` or `$\\mathbb{C}$`.'
      },
      {
        q: 'For `$v$` in a vector space, `$0v$` equals which vector?',
        options: [`$v$`, `$0$`, `$-v$`, 'There is no such product'],
        answer: 1,
        explanation: 'Step 1: Expand the scalar as `$0 = 0 + 0$`. Step 2: Distribute to get `$0v = 0v + 0v$`. Step 3: Cancel `$0v$` from both sides to leave `$0 = 0v$`. Step 4: The surviving zero is the vector zero, not `$v$` or `$-v$`.'
      },
      {
        q: 'Why does Axler refuse to multiply two lists of `$\\mathbb{F}^{n}$` coordinate by coordinate?',
        options: ['It contradicts commutativity of addition', 'It makes scalar multiplication impossible to define', 'It forces every vector space to be infinite-dimensional', 'Experience shows that definition is not useful for the subject'],
        answer: 3,
        explanation: 'Step 1: Nothing in the axioms forbids inventing a list product. Step 2: Axler reports that experience shows the definition leads nowhere. Step 3: Scalar multiplication, not list multiplication, drives the theory. Step 4: So the book defines only the useful operation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.2
  {
    sectionId: 'engmath-ch17-s2',
    readingTime: 8,
    intro: 'A subspace is a subset that is a vector space in its own right, inheriting addition and scaling from the parent space. The whole axiom list collapses to three quick checks, namely that the subset holds the zero vector and stays closed under addition and scalar multiplication. Sums of subspaces then replace unions, because the union of two subspaces is almost never a subspace while their sum is the smallest subspace containing both.',
    objectives: [
      'Apply the three-condition subspace test to subsets of `$\\mathbb{F}^{n}$` and to function spaces',
      'Decide shifted-hyperplane questions of the form `$x_{1} + 2x_{2} + 3x_{3} = b$` by the value of `$b$`',
      'Compute sums of subspaces and explain why unions usually fail while sums always work'
    ],
    concepts: [
      {
        term: 'Subspace',
        kind: 'definition',
        statement: 'A subset `$U$` of `$V$` is a **subspace** if it is itself a vector space with the same additive identity, addition and scalar multiplication as `$V$`, which is Axler’s `sub` definition 1.33. The empty set is never a subspace, since a vector space must contain at least an additive identity. The smallest subspace of `$V$` is `$\\{0\\}$` and the largest is `$V$` itself.',
        detail: 'Some authors say linear subspace for the same notion, and Axler notes the two terms mean exactly the same thing.'
      },
      {
        term: 'Three conditions for a subspace',
        kind: 'theorem',
        statement: 'A subset `$U$` of `$V$` is a subspace if and only if it passes the **three conditions** `$0 \\in U$`, sums stay inside so `$u, w \\in U$` implies `$u + w \\in U$`, and `$au \\in U$` for all `$a \\in \\mathbb{F}$` and `$u \\in U$`, the `subtest` numbered 1.34. The zero condition may be traded for nonemptiness, because scaling any member by `$0$` manufactures `$0$`. Associativity, commutativity and distributivity need no checking since they are inherited from `$V$`.',
        detail: 'The proof uses 1.32 to get inverses as `$(-1)u$`, so every member of `$U$` has its additive inverse inside `$U$`.'
      },
      {
        term: 'The shifted-hyperplane family',
        kind: 'theorem',
        statement: 'The set `$\\{(x_{1}, x_{2}, x_{3}, x_{4}) \\in \\mathbb{F}^{4} : x_{3} = 5x_{4} + b\\}$` is a subspace if and only if `$b = 0$`, which is Axler’s `shiftb` example 1.35 with the same verdict for `$x_{1} + 2x_{2} + 3x_{3} = b$` and `$f^{\\prime}(2) = b$`. A nonzero shift pushes `$0$` outside the set and breaks both closure laws at once. **Homogeneous** conditions pass the test while shifted ones fail it, and spotting the shift is the fastest point on the page.',
        detail: 'Continuous functions on `$[0, 1]$`, differentiable functions on `$\\mathbb{R}$`, and null sequences in `$\\mathbb{C}^{\\infty}$` pass for the same reason: limits, sums and scalings preserve the defining property.'
      },
      {
        term: 'Sum of subspaces',
        kind: 'definition',
        statement: 'The **sum** `$V_{1} + \\cdots + V_{m}$` is the set of all `$v_{1} + \\cdots + v_{m}$` with `$v_{k} \\in V_{k}$`, the `subsum` definition 1.36. It is the **smallest subspace** containing every summand: each `$V_{k}$` sits inside it by padding with zeros, and any subspace holding all summands must hold all their finite sums, which is 1.40. Sums are the vector-space analogue of unions of sets, because the smallest subspace containing given subspaces is their sum.',
        detail: 'In Axler 1.37 the `$x$`-axis plus the `$y$`-axis of `$\\mathbb{F}^{3}$` sums to the `$xy$`-plane `$\\{(x, y, 0)\\}$`.'
      },
      {
        term: 'Unions fail, trivial cases guide',
        kind: 'insight',
        statement: 'The **union** of two subspaces is rarely a subspace, since the sum of a vector from each side usually escapes both, which is why Axler works with sums rather than unions. The subspaces of `$\\mathbb{R}^{2}$` are exactly `$\\{0\\}$`, the lines through the origin, and `$\\mathbb{R}^{2}$`, with the analogous list of points, lines and planes through the origin in `$\\mathbb{R}^{3}$`. The `lineorigin` slogan is that through-the-origin is the whole test in low dimensions.',
        detail: 'Proving those low-dimensional lists are complete needs the independence tools of the next chapter, so Axler postpones the hard direction.'
      }
    ],
    figures: [
      {
        caption: 'A line through `$0$` passes the subspace test because sums and scalar multiples stay on it, while a shifted line fails at once since `$0$` is missing from the set.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line through origin versus shifted line subspace test"><text x="180" y="38" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Through 0: subspace</text><text x="540" y="38" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Shifted: not a subspace</text><line x1="70" y1="290" x2="290" y2="150" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="220" r="6" fill="currentColor"/><text x="164" y="246" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">0</text><line x1="180" y1="220" x2="235" y2="185" stroke="currentColor" stroke-width="2.5"/><polygon points="235,185 223,184 229,196" fill="currentColor"/><line x1="180" y1="220" x2="290" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="290,150 278,149 284,161" fill="currentColor"/><text x="200" y="200" font-family="sans-serif" font-size="14" fill="currentColor">u</text><text x="296" y="142" font-family="sans-serif" font-size="14" fill="currentColor">2u</text><text x="180" y="322" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">sums stay on the line</text><line x1="410" y1="180" x2="630" y2="110" stroke="currentColor" stroke-width="2"/><circle cx="520" cy="220" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="504" y="246" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">0</text><line x1="520" y1="212" x2="520" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/><text x="528" y="180" font-family="sans-serif" font-size="13" fill="currentColor">gap</text><text x="520" y="322" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">0 off the line: fails at once</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'The hyperplane test: subspace only when b is zero',
        problem: 'For `$b \\in \\mathbb{F}$`, decide for which `$b$` the set `$U_{b} = \\{(x_{1}, x_{2}, x_{3}) \\in \\mathbb{F}^{3} : x_{1} + 2x_{2} + 3x_{3} = b\\}$` is a subspace of `$\\mathbb{F}^{3}$`.',
        steps: [
          { label: 'Step 1: Test the zero vector', text: 'The zero vector `$(0, 0, 0)$` satisfies the condition only when `$b = 0$`, since `$0 + 2(0) + 3(0) = 0$`. Any nonzero `$b$` already fails the first of the three conditions, so `$U_{b}$` can be a subspace only for `$b = 0$`.' },
          { label: 'Step 2: Verify closure when b is zero, with a numeric check', text: '```python\nu = (1, -2, 1)\nv = (0, 1, 3)\ndef lhs(w):\n    return w[0] + 2*w[1] + 3*w[2]\nw = tuple(2*x + 3*y for x, y in zip(u, v))\nprint(lhs(u), lhs(v), lhs(w))  # 0 0 0\n```\nBoth `$u$` and `$v$` satisfy `$x_{1} + 2x_{2} + 3x_{3} = 0$`, and the script confirms their combination `$2u + 3v$` does too. In symbols, adding two solutions adds the left sides `$0 + 0 = 0$`, and scaling multiplies `$0$` by `$a$`.' },
          { label: 'Step 3: Conclude with the slogan', text: 'Homogeneous linear conditions pass the test while shifted ones fail it, so `$U_{b}$` is a subspace if and only if `$b = 0$`. The same argument settles Axler’s `$x_{3} = 5x_{4} + b$` and `$f^{\\prime}(2) = b$` families.' }
        ],
        result: '`$U_{b}$` is a subspace of `$\\mathbb{F}^{3}$` exactly when `$b = 0$`.'
      },
      {
        title: 'Add the x-axis and the y-axis in `$\\mathbb{F}^{3}$`',
        problem: 'Let `$U = \\{(x, 0, 0) : x \\in \\mathbb{F}\\}$` and `$W = \\{(0, y, 0) : y \\in \\mathbb{F}\\}$` in `$\\mathbb{F}^{3}$`. Describe `$U + W$` by proving both inclusions, as in Axler 1.37.',
        steps: [
          { label: 'Step 1: Guess the plane', text: 'Adding `$(x, 0, 0)$` to `$(0, y, 0)$` gives `$(x, y, 0)$`, so every sum lands in the `$xy$`-plane `$P = \\{(x, y, 0)\\}$`. Hence `$U + W \\subseteq P$`.' },
          { label: 'Step 2: Split an arbitrary point of the plane', text: 'Conversely, `$(x, y, 0) = (x, 0, 0) + (0, y, 0)$` writes each point of `$P$` as a member of `$U$` plus a member of `$W$`. Hence `$P \\subseteq U + W$`.' },
          { label: 'Step 3: Appeal to the smallest-subspace fact', text: 'Both inclusions give `$U + W = P$`, and 1.40 guarantees the sum is a subspace without further checks. The third coordinate stays `$0$` because neither summand can produce one.' }
        ],
        result: '`$U + W = \\{(x, y, 0) : x, y \\in \\mathbb{F}\\}$`, the coordinate plane of `$\\mathbb{F}^{3}$`.'
      }
    ],
    keyTakeaways: [
      'A subset is a subspace exactly when it holds `$0$` and is closed under addition and scalar multiplication.',
      'Shifted conditions such as `$x_{1} + 2x_{2} + 3x_{3} = b$` give subspaces only for `$b = 0$`.',
      '`$V_{1} + \\cdots + V_{m}$` is the smallest subspace containing every summand.',
      'Unions of subspaces are rarely subspaces, so the theory adds subspaces instead of uniting them.'
    ],
    quiz: [
      // PYQ-pattern: shifted-hyperplane subspace drill with changed values (rephrased, values changed)
      {
        q: 'Which triple is Axler’s subspace test?',
        options: ['Nonempty, finite, and bounded', 'Contains `$0$`, closed under addition, closed under scalar multiplication', 'Closed under products, quotients, and powers', 'Spans the space and is linearly independent'],
        answer: 1,
        explanation: 'Step 1: A subspace must be a vector space with the inherited operations. Step 2: The inherited laws make associativity and distributivity automatic. Step 3: Only the identity and the two closure properties need checking. Step 4: Products, finiteness and spanning are irrelevant to the test.'
      },
      {
        q: 'The set `$\\{(x_{1}, x_{2}, x_{3}) : x_{1} + 2x_{2} + 3x_{3} = 4\\}$` is a subspace of `$\\mathbb{F}^{3}$` for which reason?',
        options: ['It is, because the condition is linear', 'It is, because it contains infinitely many vectors', 'It is, because sums of solutions stay solutions', 'It is not, because `$0$` fails `$0 = 4$`'],
        answer: 3,
        explanation: 'Step 1: Test `$0$` first: `$0 + 2(0) + 3(0) = 0 \\ne 4$`. Step 2: The missing zero already disqualifies the set. Step 3: Adding two solutions would give `$4 + 4 = 8$`, breaking closure too. Step 4: Only the homogeneous version with `$0$` on the right is a subspace.'
      },
      {
        q: 'What is the union of the two coordinate axes in `$\\mathbb{R}^{2}$`?',
        options: ['Not a subspace, since `$(1, 0) + (0, 1)$` escapes both axes', 'A subspace, because each axis is a subspace', 'The whole plane `$\\mathbb{R}^{2}$`', 'A subspace of dimension two'],
        answer: 0,
        explanation: 'Step 1: Each axis alone passes the subspace test. Step 2: Form `$(1, 0) + (0, 1) = (1, 1)$` from one member of each. Step 3: The sum lies on neither axis, so closure fails. Step 4: Hence unions need not be subspaces even when both parts are.'
      },
      {
        q: 'The sum `$U + W$` of two subspaces is which subspace?',
        options: ['The largest subspace contained in both `$U$` and `$W$`', 'The union `$U \\cup W$` with extra points filled in', 'The smallest subspace containing both `$U$` and `$W$`', 'Always the whole space `$V$`'],
        answer: 2,
        explanation: 'Step 1: Padding with zeros shows `$U$` and `$W$` sit inside `$U + W$`. Step 2: Any subspace holding both must hold all their finite sums. Step 3: So every competing subspace contains `$U + W$`. Step 4: That double inclusion is exactly the smallest-containing claim of 1.40.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.3
  {
    sectionId: 'engmath-ch17-s3',
    readingTime: 9,
    intro: 'A direct sum is a sum with unique decomposition, so each vector splits into summands in exactly one way. For two subspaces the test is beautifully simple, since the sum is direct exactly when the intersection holds only the zero vector. With three or more summands pairwise trivial intersections are not enough, and only the zero-decomposition test decides.',
    objectives: [
      'State the unique-decomposition definition of a direct sum and use the `$\\oplus$` notation correctly',
      'Apply the two-subspace intersection test `$U \\cap W = \\{0\\}$` in both directions',
      'Use the zero-only test for three or more summands and reproduce the standard nonexample'
    ],
    concepts: [
      {
        term: 'Direct sum and unique decomposition',
        kind: 'definition',
        statement: 'The sum `$V_{1} + \\cdots + V_{m}$` is a **direct sum**, written `$V_{1} \\oplus \\cdots \\oplus V_{m}$`, when every element has exactly one representation `$v_{1} + \\cdots + v_{m}$` with `$v_{k} \\in V_{k}$`, which is the `dsum` definition 1.41. The circled plus serves as a certificate that uniqueness has been checked. Direct sums are the vector analogue of disjoint unions, with the zero vector shared by all parts instead of disjointness.',
        detail: 'Uniqueness for every vector is a strong demand, which is why the next two tests reduce it to checks on `$0$` alone.'
      },
      {
        term: 'Zero-only condition for a direct sum',
        kind: 'theorem',
        statement: 'A sum is **direct** if and only if the only way to write `$0$` as `$v_{1} + \\cdots + v_{m}$` is the trivial one with every `$v_{k} = 0$`, the `zerotest` numbered 1.45. Subtracting two rival decompositions of one vector produces a zero-decomposition, so triviality for `$0$` forces uniqueness everywhere. Checking one vector instead of all of them is the whole point of the result.',
        detail: 'The proof subtracts `$v = v_{1} + \\cdots + v_{m} = u_{1} + \\cdots + u_{m}$` to get `$0 = (v_{1} - u_{1}) + \\cdots + (v_{m} - u_{m})$` and concludes term by term.'
      },
      {
        term: 'Direct sum of two subspaces',
        kind: 'theorem',
        statement: 'For two subspaces the sum `$U + W$` is a **direct sum** if and only if `$U \\cap W = \\{0\\}$`, the `twotest` numbered 1.46. Forward, a shared nonzero `$v$` gives the rival zero-writing `$0 = v + (-v)$`; backward, `$0 = u + w$` forces `$u = -w$` into the intersection and hence to `$0$`. No simpler test exists, and it is the workhorse of every dimension-addition argument.',
        detail: 'Axler stresses the analogy: disjointness of sets becomes trivial intersection, because two subspaces can never be disjoint as both hold `$0$`.'
      },
      {
        term: 'Pairwise trivial meets are not enough',
        kind: 'insight',
        statement: 'With three or more summands it is **not enough** that each pair meets trivially, as Axler’s `pairwarn` nonexample 1.44 shows with `$V_{1}$` the `$xy$`-plane, `$V_{2}$` the `$z$`-axis and `$V_{3}$` the diagonal `$\\{(0, y, y)\\}$`. All three pairwise intersections equal `$\\{0\\}$`, yet `$0 = (0, 1, 0) + (0, 0, 1) + (0, -1, -1)$` is a second zero-writing alongside all zeros. The moral is to test the full sum against 1.45 rather than testing pairs.',
        detail: 'The three subspaces still sum to all of `$\\mathbb{F}^{3}$`, since `$(x, y, z) = (x, y, 0) + (0, 0, z) + (0, 0, 0)$`, so spanning does not imply directness.'
      },
      {
        term: 'Model direct sums: planes, lines and axes',
        kind: 'method',
        statement: 'The **models** to memorize are `$\\mathbb{F}^{3} = U \\oplus W$` with `$U = \\{(x, y, 0)\\}$` and `$W = \\{(0, 0, z)\\}$` from 1.42, and `$\\mathbb{F}^{n} = V_{1} \\oplus \\cdots \\oplus V_{n}$` with `$V_{k}$` nonzero only in slot `$k$` from 1.43, the `axesum` pair. Each coordinate lands in exactly one summand, which makes both the spanning and the uniqueness visible at a glance. Every abstract direct sum behaves like these coordinate models after a choice of bases.',
        detail: 'Verifying 1.42 means splitting `$(x, y, z) = (x, y, 0) + (0, 0, z)$` and noting only `$0$` lies in both parts.'
      }
    ],
    figures: [
      {
        caption: 'Every `$v$` in `$U \\oplus W$` splits uniquely as `$v = u + w$`: the intersection `$U \\cap W = \\{0\\}$` forces the parallelogram to close in only one way.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Direct sum parallelogram with unique decomposition"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Unique splitting in a direct sum</text><circle cx="120" cy="270" r="6" fill="currentColor"/><text x="104" y="296" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">0</text><line x1="120" y1="270" x2="470" y2="270" stroke="currentColor" stroke-width="2"/><line x1="120" y1="270" x2="120" y2="90" stroke="currentColor" stroke-width="2"/><line x1="470" y1="270" x2="470" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="120" y1="90" x2="470" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="120" y1="270" x2="330" y2="270" stroke="currentColor" stroke-width="3"/><polygon points="330,270 318,264 318,276" fill="currentColor"/><line x1="120" y1="270" x2="120" y2="160" stroke="currentColor" stroke-width="3"/><polygon points="120,160 114,172 126,172" fill="currentColor"/><line x1="120" y1="270" x2="330" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="330,160 318,160 323,171" fill="currentColor"/><circle cx="330" cy="160" r="6" fill="currentColor"/><text x="232" y="294" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">u in U</text><text x="60" y="208" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">w in W</text><text x="342" y="152" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v = u + w</text><text x="470" y="294" font-family="sans-serif" font-size="13" fill="currentColor">U</text><text x="136" y="82" font-family="sans-serif" font-size="13" fill="currentColor">W</text><text x="360" y="330" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">trivial intersection pins the corner: one v, one pair</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Split every vector of `$\\mathbb{F}^{3}$` along a plane and a line',
        problem: 'With `$U = \\{(x, y, 0)\\}$` and `$W = \\{(0, 0, z)\\}$` in `$\\mathbb{F}^{3}$`, prove `$\\mathbb{F}^{3} = U \\oplus W$` (Axler 1.42) and test the splitting on `$(4, 5, 6)$`.',
        steps: [
          { label: 'Step 1: Split an arbitrary vector', text: 'Write `$(x, y, z) = (x, y, 0) + (0, 0, z)$`, with the first piece in `$U$` and the second in `$W$`. Hence every vector of `$\\mathbb{F}^{3}$` is a sum, so `$\\mathbb{F}^{3} = U + W$`.' },
          { label: 'Step 2: Check the intersection and confirm by script', text: '```python\nv = (4, 5, 6)\nu = (v[0], v[1], 0)\nw = (0, 0, v[2])\nprint(u, w)  # (4, 5, 0) (0, 0, 6)\nprint(u[0]+w[0], u[1]+w[1], u[2]+w[2])  # 4 5 6\n```\nA vector in both `$U$` and `$W$` has the form `$(0, 0, 0)$` only, so `$U \\cap W = \\{0\\}$`, and the script rebuilds `$(4, 5, 6)$` from its two pieces.' },
          { label: 'Step 3: Conclude directness', text: 'By 1.46 the trivial intersection makes the sum direct, so `$\\mathbb{F}^{3} = U \\oplus W$`. The decomposition above is therefore the only one possible.' }
        ],
        result: '`$\\mathbb{F}^{3} = U \\oplus W$`, with `$(4, 5, 6) = (4, 5, 0) + (0, 0, 6)$` as the unique splitting.'
      },
      {
        title: 'Three subspaces that sum to `$\\mathbb{F}^{3}$` but not directly',
        problem: 'With `$V_{1} = \\{(x, y, 0)\\}$`, `$V_{2} = \\{(0, 0, z)\\}$` and `$V_{3} = \\{(0, y, y)\\}$` in `$\\mathbb{F}^{3}$`, show the sum is all of `$\\mathbb{F}^{3}$` yet not a direct sum (Axler 1.44).',
        steps: [
          { label: 'Step 1: Verify the spanning', text: 'Every `$(x, y, z)$` equals `$(x, y, 0) + (0, 0, z) + (0, 0, 0)$`, a sum from `$V_{1}$`, `$V_{2}$`, `$V_{3}$` in order. Hence `$V_{1} + V_{2} + V_{3} = \\mathbb{F}^{3}$`.' },
          { label: 'Step 2: Exhibit two zero-writings', text: 'The zero vector splits trivially as `$(0, 0, 0) + (0, 0, 0) + (0, 0, 0)$`, but also as `$(0, 1, 0) + (0, 0, 1) + (0, -1, -1)$`, and each piece lies in the matching subspace. Two writs of `$0$` violate 1.45.' },
          { label: 'Step 3: Draw the lesson', text: 'All three pairwise intersections are `$\\{0\\}$`, yet the triple sum is not direct. Pairwise tests never suffice beyond two summands.' }
        ],
        result: 'The sum is `$\\mathbb{F}^{3}$` but not `$V_{1} \\oplus V_{2} \\oplus V_{3}$`, since `$0$` decomposes in two ways.'
      }
    ],
    keyTakeaways: [
      'A sum is direct exactly when every vector, equivalently `$0$` alone, decomposes in only one way.',
      '`$U + W$` is direct if and only if `$U \\cap W = \\{0\\}$`.',
      'Pairwise trivial intersections do not make a triple sum direct, as Axler 1.44 shows.',
      'Coordinate planes, lines and axes are the models every direct sum imitates.'
    ],
    quiz: [
      // PYQ-pattern: direct-sum intersection test with changed subspaces (rephrased, values changed)
      {
        q: 'What does `$V_{1} \\oplus \\cdots \\oplus V_{m}$` assert beyond `$V_{1} + \\cdots + V_{m}$`?',
        options: ['The summands are pairwise disjoint as sets', 'The sum is finite-dimensional', 'Each element has exactly one representation `$v_{1} + \\cdots + v_{m}$`', 'Each summand equals the whole space'],
        answer: 2,
        explanation: 'Step 1: The plain sum only promises existence of a decomposition. Step 2: The circled plus adds uniqueness for every vector. Step 3: Disjointness is impossible since all parts share `$0$`. Step 4: So the extra content is exactly the one-way splitting.'
      },
      {
        q: 'For subspaces `$U$` and `$W$`, `$U + W$` is a direct sum exactly when which condition holds?',
        options: [`$U \\cap W = \\{0\\}$`, '`$U \\cup W$` equals `$V$', 'Both `$U$` and `$W$` are finite-dimensional', '`$U \\subseteq W$` or `$W \\subseteq U$`'],
        answer: 0,
        explanation: 'Step 1: This is the two-subspace test of 1.46. Step 2: A shared nonzero `$v$` builds the rival writing `$0 = v + (-v)$`. Step 3: Conversely `$0 = u + w$` pushes `$u$` into the intersection. Step 4: Trivial intersection is therefore equivalent to directness.'
      },
      {
        q: 'In Axler 1.44, why is `$V_{1} + V_{2} + V_{3}$` not a direct sum of `$\\mathbb{F}^{3}$`?',
        options: ['The three subspaces fail to span `$\\mathbb{F}^{3}$`', 'One of the three is not a subspace', 'The pairwise intersections are all nonzero', 'Zero has a second writing `$(0, 1, 0) + (0, 0, 1) + (0, -1, -1)$`'],
        answer: 3,
        explanation: 'Step 1: Spanning holds, so existence is not the issue. Step 2: Each piece of the displayed sum lies in its matching subspace. Step 3: Together with all zeros this gives two writings of `$0$`. Step 4: By 1.45 the sum is not direct despite trivial pairwise meets.'
      },
      {
        q: 'Axler writes `$\\mathbb{F}^{n} = V_{1} \\oplus \\cdots \\oplus V_{n}$` with `$V_{k}$` nonzero only in slot `$k$`. What makes this a direct sum?',
        options: ['Each `$V_{k}$` is infinite-dimensional', 'Each coordinate belongs to exactly one summand, fixing the splitting', 'The union of the `$V_{k}$` already equals `$\\mathbb{F}^{n}$`', 'Summation order can be rearranged freely'],
        answer: 1,
        explanation: 'Step 1: Slot `$k$` of a vector can only come from `$V_{k}$`. Step 2: That pins every summand of every decomposition. Step 3: Spanning is clear since coordinates assemble the vector. Step 4: Pinned pieces plus spanning give the unique splitting.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.4
  {
    sectionId: 'engmath-ch17-s4',
    readingTime: 7,
    intro: 'Functions and polynomials are vectors too, with addition and scaling performed pointwise and coefficient by coefficient. Classical calculus facts such as the continuity of sums become subspace statements, and a degree cap turns polynomials into finite-dimensional spaces. The section closes with a first glimpse of quotients, where a whole subspace is collapsed to a single zero.',
    objectives: [
      'Verify function subspaces such as continuous, differentiable and vanishing-at-a-point families',
      'Work inside `$\\mathcal{P}(\\mathbb{F})$` and `$\\mathcal{P}_{m}(\\mathbb{F})$` using degree arithmetic',
      'Describe cosets `$v + U$` and preview the quotient collapse of `$U$` to zero'
    ],
    concepts: [
      {
        term: 'Function spaces with pointwise operations',
        kind: 'definition',
        statement: 'For a set `$S$`, the **function space** `$\\mathbb{F}^{S}$` holds all functions `$S \\to \\mathbb{F}$`, added and scaled **pointwise** by `$(f + g)(x) = f(x) + g(x)$` and `$(af)(x) = a f(x)$`, the `funcspace` convention of Axler 1B. Pointwise rules inherit every vector axiom from `$\\mathbb{F}$` at each input separately. A function is therefore an `$S$`-tuple with possibly infinitely many coordinates.',
        detail: 'Axler writes `$\\mathbb{R}^{[0, 1]}$` for real functions on the unit interval and `$\\mathbb{R}^{\\mathbb{R}}$` for all real functions of a real variable.'
      },
      {
        term: 'Polynomial spaces and degree caps',
        kind: 'definition',
        statement: 'A **polynomial** with coefficients in `$\\mathbb{F}$` is a function `$p(z) = a_{0} + a_{1}z + \\cdots + a_{m}z^{m}$`, its **degree** is the top index with `$a_{m} \\ne 0$`, and `$\\mathcal{P}_{m}(\\mathbb{F})$` keeps degrees at most `$m$`, the `polydeg` trio of Axler 2.10 through 2.12. Sums and scalings never raise the degree, so each `$\\mathcal{P}_{m}(\\mathbb{F})$` is a subspace while the exact-degree set is not. The full `$\\mathcal{P}(\\mathbb{F})$` is infinite-dimensional, the first example at 2.14.',
        detail: 'The zero polynomial gets degree `$-\\infty$` by convention so that degree arithmetic never breaks on it.'
      },
      {
        term: 'Calculus facts as subspace statements',
        kind: 'theorem',
        statement: '**Continuous** real functions on `$[0, 1]$` form a subspace of `$\\mathbb{R}^{[0, 1]}$`, differentiable functions on `$\\mathbb{R}$` form a subspace of `$\\mathbb{R}^{\\mathbb{R}}$`, and `$\\{f : f^{\\prime}(2) = b\\}$` is a subspace only for `$b = 0$`, the `calcsub` list of Axler 1.35. Each claim reuses one calculus linearity fact: sums of continuous functions are continuous and derivatives scale by constants. Analysis supplies the closure proofs while algebra supplies the frame.',
        detail: 'Verifying the differentiable case uses that `$(cf)^{\\prime} = c f^{\\prime}$` for constants `$c$`, exactly the scaling law in disguise.'
      },
      {
        term: 'Null sequences inside all sequences',
        kind: 'notation',
        statement: 'The set of complex **null sequences**, those with limit `$0$`, is a subspace of `$\\mathbb{C}^{\\infty}$`, the `nullseq` example 1.35. Limits add and scale, so the defining property survives both operations. Sequence spaces are the natural habitat of shift operators, which return as invertibility counterexamples in Chapter 19.',
        detail: 'Convergence to `$0$` is a homogeneous condition, so the shifted family with limit `$b \\ne 0$` fails exactly like every shifted hyperplane.'
      },
      {
        term: 'Quotient preview: collapsing a subspace',
        kind: 'insight',
        statement: 'The **coset** `$v + U = \\{v + u : u \\in U\\}$` translates a subspace, and the **quotient** identifies each coset with one point, collapsing all of `$U$` to a single zero, the `coset` preview of Chapter 19. Two vectors share a coset exactly when their difference lies in `$U$`. Dimension drops by `$\\dim U$`, so quotients count what remains after ignoring `$U$`.',
        detail: 'Modulo the `$z$`-axis, the vectors `$(1, 2, 3)$` and `$(1, 2, 7)$` name the same coset since their difference `$(0, 0, -4)$` lies in the axis.'
      }
    ],
    figures: [
      {
        caption: 'Two real functions `$f$` and `$g$` with their pointwise sum `$f + g$`: addition in `$\\mathbb{R}^{[0, 1]}$` happens one input at a time, exactly like adding coordinates.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two function graphs with pointwise sum marked"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Functions add pointwise, like coordinates</text><line x1="60" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="2"/><line x1="60" y1="290" x2="60" y2="60" stroke="currentColor" stroke-width="2"/><path d="M 90 250 Q 200 240 300 190 T 480 170 T 630 90" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 90 270 Q 220 265 330 235 T 500 225 T 630 190" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 5"/><text x="620" y="78" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">f</text><text x="620" y="212" font-family="sans-serif" font-size="14" fill="currentColor">g</text><line x1="380" y1="205" x2="380" y2="248" stroke="currentColor" stroke-width="1.5"/><polygon points="380,205 375,215 385,215" fill="currentColor"/><polygon points="380,248 375,238 385,238" fill="currentColor"/><text x="392" y="232" font-family="sans-serif" font-size="13" fill="currentColor">(f+g)(x)</text><text x="380" y="312" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">x</text><text x="360" y="332" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">one input, one coordinate sum</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Functions vanishing at zero form a subspace',
        problem: 'Prove `$U = \\{f \\in \\mathbb{R}^{\\mathbb{R}} : f(0) = 0\\}$` is a subspace of `$\\mathbb{R}^{\\mathbb{R}}$` by checking the three conditions directly.',
        steps: [
          { label: 'Step 1: Check the zero function', text: 'The zero function `$z(x) = 0$` satisfies `$z(0) = 0$`, so `$z \\in U$` and `$U$` is nonempty with its identity present. The homogeneous value `$0$` on the right is doing all the work.' },
          { label: 'Step 2: Close under addition and scaling, with a numeric check', text: '```python\ndef f(x):\n    return x\ndef g(x):\n    return x * x - x\ndef h(x):\n    return 2*f(x) + 3*g(x)\nprint(h(0))  # 0\n```\nIf `$f(0) = g(0) = 0$` then `$(f + g)(0) = 0 + 0 = 0$` and `$(af)(0) = a(0) = 0$`, and the script confirms `$2f + 3g$` vanishes at `$0$` for a concrete pair.' },
          { label: 'Step 3: Conclude', text: 'All three conditions hold with the inherited operations, so `$U$` is a subspace. Replacing `$0$` by any nonzero value would break the argument at once.' }
        ],
        result: '`$U$` is a subspace of `$\\mathbb{R}^{\\mathbb{R}}$`, since vanishing at `$0$` is a homogeneous linear condition.'
      },
      {
        title: 'Degree caps are subspaces, exact degrees are not',
        problem: 'Show `$\\mathcal{P}_{2}(\\mathbb{R})$` is a subspace of `$\\mathcal{P}(\\mathbb{R})$`, but the set `$E$` of polynomials of degree exactly `$2$` is not.',
        steps: [
          { label: 'Step 1: Verify the cap', text: 'Adding two polynomials of degree at most `$2$` cannot create `$x^{3}$` terms, and scaling never raises degree. The zero polynomial qualifies, so `$\\mathcal{P}_{2}(\\mathbb{R})$` passes all three checks.' },
          { label: 'Step 2: Break the exact-degree set twice', text: 'The zero polynomial has no degree `$2$`, so `$0 \\notin E$`. Worse, `$x^{2} + x$` and `$-x^{2} + 1$` both lie in `$E$` while their sum `$x + 1$` drops to degree `$1$`, breaking closure under addition.' },
          { label: 'Step 3: Name the pattern', text: 'At-most conditions are homogeneous and survive, while exact-equality conditions shatter under addition. Degree caps behave like the `$b = 0$` hyperplanes of the previous section.' }
        ],
        result: '`$\\mathcal{P}_{2}(\\mathbb{R})$` is a subspace; the exact-degree set `$E$` fails the zero test and the sum test.'
      }
    ],
    keyTakeaways: [
      'Function spaces add and scale pointwise, making each input behave like one coordinate.',
      'Degree caps `$\\mathcal{P}_{m}(\\mathbb{F})$` are subspaces while exact-degree sets are not.',
      'Continuity, differentiability and null limits are homogeneous, hence subspace-forming, conditions.',
      'Cosets `$v + U$` preview quotients, where `$U$` collapses to zero and dimension drops.'
    ],
    quiz: [
      // PYQ-pattern: function-space subspace drill with changed conditions (rephrased, values changed)
      {
        q: 'What are the operations on the function space `$\\mathbb{R}^{[0, 1]}$`?',
        options: ['Composition of functions with itself', 'Pointwise addition and pointwise scalar multiplication', 'Convolution followed by normalization', 'Differentiation and definite integration'],
        answer: 3,
        explanation: 'Step 1: Axler defines `$(f + g)(x) = f(x) + g(x)$` for every input `$x$`. Step 2: Scaling is likewise `$(af)(x) = a f(x)$` at each point. Step 3: Composition and convolution are different operations with different theories. Step 4: So the vector structure is purely pointwise.'
      },
      {
        q: 'Which polynomial set is a subspace of `$\\mathcal{P}(\\mathbb{R})$`?',
        options: [`$\\mathcal{P}_{2}(\\mathbb{R})$`, 'Polynomials of degree exactly `$2$', 'Polynomials with leading coefficient `$1$', 'Polynomials taking value `$1$` at `$0$`'],
        answer: 0,
        explanation: 'Step 1: The cap keeps degrees at most `$2$` under sums and scalings. Step 2: Exact degree `$2$` loses `$0$` and breaks under `$x^{2} + (-x^{2}) = 0$`. Step 3: Fixed leading coefficients break under addition of two such polynomials. Step 4: The value condition at `$0$` is a nonzero shift, failing the zero test.'
      },
      {
        q: 'Why do continuous functions on `$[0, 1]$` form a subspace of `$\\mathbb{R}^{[0, 1]}$`?',
        options: ['Every continuous function is a polynomial', 'Continuity is preserved under sums and scalar multiples', 'The interval `$[0, 1]$` is finite', 'Continuous functions are all differentiable'],
        answer: 1,
        explanation: 'Step 1: Sums of continuous functions are continuous by basic analysis. Step 2: Scalar multiples preserve continuity the same way. Step 3: The zero function is continuous, completing the three checks. Step 4: Finiteness of the interval and differentiability play no role.'
      },
      {
        q: 'Two vectors share the coset `$v + U$` exactly when which relation holds?',
        options: ['Their sum lies in `$U$`', 'Both lie outside `$U$`', 'Their difference lies in `$U$`', 'One of them equals `$0$`'],
        answer: 2,
        explanation: 'Step 1: Write the cosets as `$v + U$` and `$w + U$`. Step 2: Equality means `$w = v + u$` for some `$u \\in U$`. Step 3: Rearranging gives `$w - v = u \\in U$`. Step 4: So coset membership tests differences, not sums.'
      }
    ]
  }
]
