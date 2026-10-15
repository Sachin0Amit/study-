import type { SectionContent } from '../library'

// ============================================================================
// JEE (Main) 2026 Mathematics — lesson content (bookId 'math-master').
// Master study content for the opening section of ten NTA units: set algebra,
// the Argand plane, matrix algebra, the counting principle, the binomial
// theorem, real functions, anti-derivatives, plane coordinates and locus,
// points in space and trigonometrical functions. JEE Main-specific drills:
// De Morgan counting, Vieta root sums on unit-circle roots, matrix-polynomial
// reduction, FPC word problems, coefficient sums chained with AM–GM,
// domain/range hunting, standard integrals, Apollonius loci, external
// section ratios and general solutions of trigonometric equations.
// ============================================================================

export const jeemainMathContent: SectionContent[] = [
  // ---------------------------------------------------------------- Unit 1 · 1.1
  {
    sectionId: 'math-a1-s7',
    readingTime: 8,
    prerequisites: [
      'The real number system and interval notation such as $(a, b)$ and $[a, b]$',
      'Prime factorisation and divisibility for building number sets',
    ],
    intro: 'A set is any well-defined collection of objects, written either by listing (roster form) or by a rule (set-builder form). The three operations — union $A \\cup B$, intersection $A \\cap B$ and complement $A\'$ — obey an algebra of laws just as numbers do, with De Morgan\'s rules playing the role of "opening the brackets". engineering assessment tests exactly these laws alongside the power set $P(A)$, whose size doubles with every new element.',
    objectives: [
      'Translate between roster form and set-builder form and test membership with $\\in$ and $\\subseteq$',
      'Apply the union, intersection and complement laws — distributive, De Morgan and absorption — to simplify set expressions',
      'Count subsets with $|P(A)| = 2^n$ and use $|A \\cup B| = |A| + |B| - |A \\cap B|$ in survey word problems',
      'Verify set identities by shading Venn diagrams or testing small concrete sets',
    ],
    concepts: [
      {
        term: 'Set and its representations',
        kind: 'definition',
        statement: 'A **set** is a well-defined collection of distinct objects, listed in roster form $A = \\{1, 2, 3\\}$ or described by a rule in set-builder form $A = \\{x : x \\text{ is prime and } x < 10\\}$.',
        detail: 'Well-defined means every candidate object is definitely in or out — "beautiful flowers" is not a set. Order and repetition never matter: $\\{1, 2, 2\\} = \\{2, 1\\}$. The standard number sets are $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$ and $\\mathbb{R}$, each sitting inside the next.',
      },
      {
        term: 'Subset and power set',
        kind: 'definition',
        statement: '$A \\subseteq B$ iff every element of $A$ lies in $B$; the **power set** $P(A)$ is the set of all subsets of $A$, and $|P(A)| = 2^{|A|}$.',
        detail: 'Each element independently chooses "in" or "out" of a subset, giving $2^n$ subsets for $|A| = n$. For $A = \\{a, b\\}$, $P(A) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$, and even $P(\\emptyset) = \\{\\emptyset\\}$ has $2^0 = 1$ element. Proper subsets number $2^n - 1$ (all except $A$ itself).',
      },
      {
        term: 'The algebra of set operations',
        kind: 'law',
        statement: 'Union, intersection and complement satisfy the **distributive laws** $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$, **De Morgan\'s laws** $(A \\cup B)\' = A\' \\cap B\'$ and $(A \\cap B)\' = A\' \\cup B\'$, and **absorption** $A \\cup (A \\cap B) = A$.',
        detail: 'Idempotence ($A \\cup A = A$), associativity and commutativity also hold, along with the complement laws $A \\cup A\' = X$ and $A \\cap A\' = \\emptyset$ against the universal set $X$. De Morgan swaps $\\cup$ with $\\cap$ exactly when a complement crosses the bracket — the single most tested law of this unit.',
      },
      {
        term: 'Inclusion–exclusion counting',
        kind: 'theorem',
        statement: 'For finite sets, **$|A \\cup B| = |A| + |B| - |A \\cap B|$**; for three sets add all three sizes, subtract the three pairwise intersections and add back the triple intersection.',
        detail: 'Elements of $A \\cap B$ get counted twice by $|A| + |B|$, so the overlap is subtracted once. Companion facts: $|A - B| = |A| - |A \\cap B|$ and "only $A$" means $|A| - |A \\cap B|$. Every survey question in engineering assessment is this theorem in costume.',
      },
      {
        term: 'Venn diagrams as a proof tool',
        kind: 'method',
        statement: 'Every set identity can be **checked by shading**: shade the regions of each side separately on a Venn diagram and confirm the pictures coincide.',
        detail: 'In an assessment, testing a candidate identity on a small concrete universal set such as $X = \\{1, 2, 3, 4\\}$ with $A = \\{1, 2\\}$, $B = \\{2, 3\\}$ eliminates wrong options in seconds. The duality principle — swapping $\\cup \\leftrightarrow \\cap$ and $X \\leftrightarrow \\emptyset$ in any true identity gives another true identity — doubles the value of every law memorised.',
      },
    ],
    examples: [
      {
        title: 'Survey counting with inclusion–exclusion',
        problem: 'In a class of 100 students, 60 like cricket, 55 like football and 30 like both. How many like (i) at least one sport, (ii) neither sport, (iii) cricket but not football?',
        steps: [
          { label: 'Step 1', text: '```text\n|C u F| = |C| + |F| - |C n F| = 60 + 55 - 30 = 85\n```\nApply inclusion–exclusion: the 30 double-counted students are subtracted once, so $|C \\cup F| = 85$.' },
          { label: 'Step 2', text: 'Students liking neither are outside $C \\cup F$: $100 - 85 = 15$. The Venn regions must total 100, which will serve as the check.' },
          { label: 'Step 3', text: 'Cricket-only means $C - F$: $|C| - |C \\cap F| = 60 - 30 = 30$. Similarly football-only is $55 - 30 = 25$.' },
          { label: 'Step 4', text: 'Check by summing disjoint regions: $30 + 25 + 30 + 15 = 100$ ✓. Every student is placed exactly once.' }
        ],
        result: 'At least one sport: $85$; neither: $15$; cricket but not football: $30$.',
      },
      {
        title: 'Counting subsets of a prime-factor set',
        problem: 'Let $A = \\{x \\in \\mathbb{N} : x \\text{ is a prime factor of } 210\\}$. Find $|P(A)|$, the number of proper subsets of $A$, and the number of subsets that contain the element $2$.',
        steps: [
          { label: 'Step 1', text: '```text\n210 = 2 x 3 x 5 x 7  ->  |A| = 4\n```\nFactorise: $210 = 2 \\cdot 3 \\cdot 5 \\cdot 7$, so $A = \\{2, 3, 5, 7\\}$ with $|A| = 4$.' },
          { label: 'Step 2', text: 'Each of the 4 primes independently belongs or does not belong to a subset, so $|P(A)| = 2^4 = 16$.' },
          { label: 'Step 3', text: 'Proper subsets exclude $A$ itself: $16 - 1 = 15$.' },
          { label: 'Step 4', text: 'Subsets containing $2$: fix $2$ inside, then the other three primes are free, giving $2^3 = 8$. Check: subsets not containing $2$ are $2^3 = 8$, and $8 + 8 = 16$ ✓.' }
        ],
        result: '$|P(A)| = 16$, proper subsets $= 15$, and $8$ subsets contain the element $2$.',
      },
    ],
    keyTakeaways: [
      'Well-defined collections only: roster $\\{1, 2, 3\\}$ and set-builder $\\{x : P(x)\\}$ describe the same set; order and repetition never matter.',
      'A set with $n$ elements has $2^n$ subsets, so $|P(A)| = 2^n$ and proper subsets number $2^n - 1$.',
      'De Morgan pairs: $(A \\cup B)\' = A\' \\cap B\'$ and $(A \\cap B)\' = A\' \\cup B\'$ — a complement crossing the bracket swaps $\\cup$ with $\\cap$.',
      'Survey counts run on $|A \\cup B| = |A| + |B| - |A \\cap B|$, extending to three sets by subtracting pairwise intersections and adding the triple.',
    ],
    quiz: [
      {
        q: 'If $A = \\{x : x \\text{ is prime and } x < 12\\}$, then $|P(A)|$ equals',
        options: [`$25$`, `$16$`, `$32$`, `$31$`],
        answer: 2,
        explanation: 'Step 1: List the primes below 12: $2, 3, 5, 7, 11$, so $|A| = 5$. Step 2: Each element doubles the subset count, giving $2^5 = 32$. Step 3: The value $31$ is the proper-subset count $2^5 - 1$, the intended trap. Step 4: $25$ would be $5^2$, which counts nothing in set theory.',
      },
      {
        q: 'The complement of $A \\cap B$ is',
        options: [`$A' \\cap B'$`, `$A \\cup B$`, `$A' \\cup B'$`, `$A \\cap B'$`],
        answer: 2,
        explanation: 'Step 1: De Morgan\'s law states that complementation swaps $\\cap$ into $\\cup$. Step 2: Therefore $(A \\cap B)\' = A\' \\cup B\'$. Step 3: The first option is De Morgan for the union, i.e. $(A \\cup B)\'$ — a swapped trap. Step 4: Shading a Venn diagram confirms: everything outside the lens is the union of the two outside regions.',
      },
      // PYQ-pattern: survey via inclusion–exclusion
      {
        q: 'In a class of 60 students, 35 study mathematics, 30 study physics and 15 study both. How many study neither subject?',
        options: [`$50$`, `$15$`, `$5$`, `$10$`],
        answer: 3,
        explanation: 'Step 1: Inclusion–exclusion gives $|M \\cup P| = 35 + 30 - 15 = 50$. Step 2: The class has 60 students, so those outside both subjects number $60 - 50 = 10$. Step 3: The value $50$ is the union, not the complement. Step 4: Region check: maths-only $20$, physics-only $15$, both $15$, neither $10$; sum $= 60$ ✓.',
      },
      {
        q: 'If $A \\cup B = A$, then $A \\cap B$ equals',
        options: [`$A$`, `$B$`, `$A'$`, `$A \\cap B'$`],
        answer: 1,
        explanation: 'Step 1: $A \\cup B = A$ means nothing outside $A$ is in $B$, i.e. $B \\subseteq A$. Step 2: Intersecting with $A$ then changes nothing about $B$: $A \\cap B = B$. Step 3: If instead $A \\subseteq B$ the answer would be $A$ — the mirror trap. Step 4: A quick test with $A = \\{1, 2\\}, B = \\{1\\}$: $A \\cup B = \\{1, 2\\} = A$ and $A \\cap B = \\{1\\} = B$ ✓.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 2 · 2.1
  {
    sectionId: 'math-a2-s6',
    readingTime: 9,
    prerequisites: [
      'The Cartesian plane and ordered pairs $(x, y)$',
      'Square roots, surds and the quadratic discriminant $b^2 - 4ac$',
      'Expanding brackets such as $(a + b)^2$',
    ],
    intro: 'The equation $x^2 + 1 = 0$ has no real solution, so the number system is enlarged: a complex number is an ordered pair $z = (a, b)$ of reals written $z = a + ib$ with $i^2 = -1$. Plotting $z$ at the point $(a, b)$ turns algebra into geometry on the Argand diagram, where addition is vector addition and multiplication by $i$ is a quarter-turn. This section builds the algebra — equality, the four operations, conjugates — that every later complex-number question assumes.',
    objectives: [
      'Perform the four operations on numbers of the form $a + ib$ and reduce powers of $i$ using $i^2 = -1$',
      'Represent $z$, $\\bar{z}$ and $-z$ on the Argand diagram and read $|z_1 - z_2|$ as distance',
      'Rationalise denominators with conjugates via $\\frac{1}{z} = \\frac{\\bar{z}}{|z|^2}$',
      'Solve real quadratics with negative discriminant and combine roots through Vieta relations $\\alpha + \\beta$ and $\\alpha\\beta$',
    ],
    concepts: [
      {
        term: 'The imaginary unit',
        kind: 'definition',
        statement: 'The symbol **$i$** is defined by $i^2 = -1$; its powers cycle $i, -1, -i, 1$ with period 4, so $i^{4k + r} = i^r$.',
        detail: 'For a negative real under a root, $\\sqrt{-d} = i\\sqrt{d}$ for $d > 0$. Large exponents reduce modulo 4: since $2027 = 4 \\cdot 506 + 3$, $i^{2027} = i^3 = -i$. Forgetting the cycle and writing $i^{2027} = i$ is a standard engineering assessment slip.',
      },
      {
        term: 'Ordered pairs and the Argand diagram',
        kind: 'notation',
        statement: 'Writing **$z = a + ib$** identifies $z$ with the ordered pair $(a, b)$, plotted in the **Argand plane** with the real part $a$ on the horizontal axis and the imaginary part $b$ on the vertical axis.',
        detail: 'Real numbers live on the real axis, purely imaginary numbers on the imaginary axis. The conjugate $\\bar{z}$ is the mirror image across the real axis, $-z$ is the point reflection through the origin, and $z_1 + z_2$ completes the parallelogram — addition is vector addition. The distance between the points of $z_1$ and $z_2$ is $|z_1 - z_2|$.',
      },
      {
        term: 'Algebra of complex numbers',
        kind: 'law',
        statement: 'Addition is componentwise, $(a + ib) + (c + id) = (a + c) + i(b + d)$, while **multiplication** $(a + ib)(c + id) = (ac - bd) + i(ad + bc)$ treats $i^2$ as $-1$.',
        detail: 'Both operations are commutative, associative and distributive. Multiplication is not componentwise — the cross terms $ad + bc$ build the imaginary part, and $ac - bd$ can make a product of two nonzero imaginary numbers real: $(1 + i)(1 - i) = 1 - i^2 = 2$. Multiplying by $i$ rotates a point a quarter-turn anticlockwise about the origin.',
      },
      {
        term: 'Conjugate and division',
        kind: 'method',
        statement: 'The **conjugate** of $a + ib$ is $a - ib$, and division proceeds by multiplying numerator and denominator by the conjugate: $\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2}$.',
        detail: 'The engine is $z\\bar{z} = a^2 + b^2 = |z|^2$, always a nonnegative real. Also $z + \\bar{z} = 2a$ and $z - \\bar{z} = 2ib$, so a number equals its conjugate iff it is real and equals minus its conjugate iff it is purely imaginary. After any division, check the answer with $\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$.',
      },
      {
        term: 'Complex roots of real quadratics',
        kind: 'theorem',
        statement: 'If $D = b^2 - 4ac < 0$, then $ax^2 + bx + c = 0$ has the conjugate pair of roots $\\frac{-b \\pm i\\sqrt{4ac - b^2}}{2a}$, with $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$ both real.',
        detail: 'Real coefficients force complex roots to appear in conjugate pairs — replacing $i$ by $-i$ changes nothing in the equation. The Vieta sums $\\alpha + \\beta$ and $\\alpha\\beta$ staying real is what lets engineering assessment questions ask for $\\alpha^2 + \\beta^2$, $\\alpha^3 + \\beta^3$ or higher power sums without ever computing the roots individually.',
      },
    ],
    examples: [
      {
        title: 'Division by conjugate with a modulus check',
        problem: 'Express $z = \\dfrac{3 + 4i}{1 - 2i}$ in the form $a + ib$, and verify the answer using modulus laws.',
        steps: [
          { label: 'Step 1', text: '```text\nmultiply top and bottom by the conjugate 1 + 2i\n```\nRationalise: $z = \\frac{(3 + 4i)(1 + 2i)}{(1 - 2i)(1 + 2i)}$. The denominator is $1 - (2i)^2$... carefully, $(1 - 2i)(1 + 2i) = 1 + 4 = 5$.',
          },
          { label: 'Step 2', text: 'Expand the numerator: $(3 + 4i)(1 + 2i) = 3 + 6i + 4i + 8i^2 = 3 + 10i - 8 = -5 + 10i$.' },
          { label: 'Step 3', text: 'Divide by 5: $z = -1 + 2i$. The Argand point $(-1, 2)$ sits in the second quadrant.' },
          { label: 'Step 4', text: 'Check with moduli: $|3 + 4i| = 5$ and $|1 - 2i| = \\sqrt{5}$, so $|z| = \\frac{5}{\\sqrt{5}} = \\sqrt{5} = |-1 + 2i|$ ✓ — the arithmetic must be right.' }
        ],
        result: '$z = -1 + 2i$, a second-quadrant point with $|z| = \\sqrt{5}$.',
      },
      {
        title: 'Root powers via Argand geometry and Vieta',
        problem: 'Let $\\alpha, \\beta$ be the roots of $x^2 - x + 1 = 0$. Find $\\alpha^7 + \\beta^7$.',
        steps: [
          { label: 'Step 1', text: '```text\nD = 1 - 4 = -3;  roots = (1 +/- i sqrt 3)/2 = cos(pi/3) +/- i sin(pi/3)\n```\nThe discriminant is negative, so $\\alpha, \\beta = \\frac{1 \\pm i\\sqrt{3}}{2}$. Each has modulus $\\sqrt{\\frac{1}{4} + \\frac{3}{4}} = 1$ and arguments $\\pm\\frac{\\pi}{3}$ — two Argand points on the unit circle at $\\pm 60^\\circ$.' },
          { label: 'Step 2', text: 'Multiply angles when raising powers: $\\alpha^7$ has argument $7 \\cdot \\frac{\\pi}{3} = \\frac{7\\pi}{3} = 2\\pi + \\frac{\\pi}{3}$, so $\\alpha^7 = \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}$; similarly $\\beta^7 = \\cos\\frac{\\pi}{3} - i\\sin\\frac{\\pi}{3}$.' },
          { label: 'Step 3', text: 'Add: the imaginary parts cancel and $\\alpha^7 + \\beta^7 = 2\\cos\\frac{\\pi}{3} = 2 \\cdot \\frac{1}{2} = 1$.' },
          { label: 'Step 4', text: 'Independent Vieta check: $\\alpha + \\beta = 1$, $\\alpha\\beta = 1$ give power sums $p_n = p_{n-1} - p_{n-2}$ with $p_0 = 2, p_1 = 1$: the sequence runs $2, 1, -1, -2, -1, 1, 2, 1$, so $p_7 = 1$ ✓.' }
        ],
        result: '$\\alpha^7 + \\beta^7 = 1$; the roots are unit-circle points at $\\pm\\frac{\\pi}{3}$ whose seventh powers return to $\\pm\\frac{\\pi}{3}$.',
      },
    ],
    keyTakeaways: [
      'Powers of $i$ cycle with period 4 — reduce $i^k$ modulo 4 before doing anything else.',
      'On the Argand plane $z$ and $\\bar{z}$ are mirror images, addition is vector addition, and $|z_1 - z_2|$ is the distance between points.',
      'Divide by multiplying with the conjugate: $\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2}$, then audit with $\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$.',
      'Real-coefficient quadratics with $D < 0$ have conjugate roots; $\\alpha + \\beta$ and $\\alpha\\beta$ stay real, powering Vieta-style root sums.',
    ],
    quiz: [
      {
        q: 'The value of $i^{2027}$ is',
        options: [`$i$`, `$-1$`, `$-i$`, `$1$`],
        answer: 2,
        explanation: 'Step 1: Reduce the exponent modulo 4: $2027 = 4 \\cdot 506 + 3$. Step 2: So $i^{2027} = (i^4)^{506} \\cdot i^3 = i^3 = -i$. Step 3: Remainder 1 would give $i$ and remainder 2 would give $-1$. Step 4: Since $|i| = 1$, no sign or size factor appears beyond the cycle.',
      },
      {
        q: 'The value of $(1 + i)^4$ is',
        options: [`$-4$`, `$4$`, `$4i$`, `$-4i$`],
        answer: 0,
        explanation: 'Step 1: Square first: $(1 + i)^2 = 1 + 2i + i^2 = 2i$. Step 2: Square again: $(2i)^2 = 4i^2 = -4$. Step 3: Geometrically, $1 + i$ has modulus $\\sqrt{2}$ and argument $\\frac{\\pi}{4}$, so the fourth power has modulus $(\\sqrt{2})^4 = 4$ and argument $\\pi$ — the point $-4$. Step 4: The answers $\\pm 4i$ would need argument $\\pm\\frac{\\pi}{2}$.',
      },
      // PYQ-pattern: real part of a conjugate division
      {
        q: 'The real part of $\\dfrac{2 + i}{1 + i}$ is',
        options: [`$\\frac{1}{2}$`, `$\\frac{3}{2}$`, `$-\\frac{1}{2}$`, `$2$`],
        answer: 1,
        explanation: 'Step 1: Multiply by the conjugate of the denominator: $\\frac{(2 + i)(1 - i)}{(1 + i)(1 - i)}$. Step 2: Denominator: $1 + 1 = 2$; numerator: $2 - 2i + i - i^2 = 3 - i$. Step 3: So the quotient is $\\frac{3}{2} - \\frac{i}{2}$, real part $\\frac{3}{2}$. Step 4: $\\frac{1}{2}$ is the magnitude of the imaginary part — a coordinate mix-up trap.',
      },
      {
        q: 'The conjugate of the product $(1 + 2i)(3 - i)$ is',
        options: [`$5 + 5i$`, `$5 - 5i$`, `$-5 - 5i$`, `$-5 + 5i$`],
        answer: 1,
        explanation: 'Step 1: Multiply out: $(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 5 + 5i$. Step 2: Conjugation flips the sign of the imaginary part only: $5 - 5i$. Step 3: Equivalently $\\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2 = (1 - 2i)(3 + i) = 5 - 5i$ — same answer. Step 4: The options $\\pm(-5 + 5i)$ would arise from mishandling $-2i^2 = +2$.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 3 · 3.1
  {
    sectionId: 'math-a5-s7',
    readingTime: 9,
    prerequisites: [
      'Rectangular arrays of numbers and summation notation $\\sum$',
      'Expanding and collecting polynomial terms',
    ],
    intro: 'A matrix is a rectangular array of numbers arranged in rows and columns, written $A = [a_{ij}]_{m \\times n}$. Its algebra — addition, scalar multiplication and the all-important row-by-column product — differs from number algebra in two engineering assessment-critical ways: multiplication is not commutative, and the product of two nonzero matrices can be zero. Mastering the types (square, diagonal, symmetric, skew) and the transpose laws here makes determinants and linear systems mechanical later in this unit.',
    objectives: [
      'Multiply matrices row-by-column and know when $AB$ is defined: an $m \\times n$ $A$ needs an $n \\times p$ $B$, giving $m \\times p$',
      'Use the transpose laws $(AB)^T = B^T A^T$ and classify special types: diagonal, scalar, identity, symmetric $A^T = A$ and skew-symmetric $A^T = -A$',
      'Evaluate matrix polynomials such as $A^2 - 4A + I$ and exploit them to compute high powers of $A$ cheaply',
      'Explain why $AB \\ne BA$ in general and why $AB = O$ does not force $A = O$ or $B = O$',
    ],
    concepts: [
      {
        term: 'Matrix, order and equality',
        kind: 'definition',
        statement: 'An **$m \\times n$ matrix** $A = [a_{ij}]$ has $m$ rows and $n$ columns with entry $a_{ij}$ in row $i$, column $j$; two matrices are equal only when every order and every entry match.',
        detail: 'A row matrix is $1 \\times n$, a column matrix is $m \\times 1$, and a square matrix has $m = n$. Equality is entrywise: solving $[x, y]^T = [3, 5]^T$ reads off $x = 3, y = 5$ — the reason matrices can package whole systems of equations. The $1 \\times 1$ matrix behaves like a scalar in products, but $[3] \\ne 3$ as objects.',
      },
      {
        term: 'Types of matrices',
        kind: 'definition',
        statement: 'A square matrix is **diagonal** when $a_{ij} = 0$ for $i \\ne j$, **scalar** when diagonal with equal diagonal entries, the **identity** $I_n$ when those entries are 1; it is **symmetric** when $A^T = A$ and **skew-symmetric** when $A^T = -A$.',
        detail: 'A skew-symmetric matrix must have zero diagonal ($a_{ii} = -a_{ii}$). Every square matrix splits uniquely as $A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$, a symmetric plus a skew-symmetric matrix — a recurring engineering assessment question. Diagonal matrices multiply entrywise on the diagonal: $\\mathrm{diag}(a)\\mathrm{diag}(b) = \\mathrm{diag}(ab)$, which is why they behave like numbers.',
      },
      {
        term: 'Addition and scalar multiplication',
        kind: 'law',
        statement: 'Sums and scalar multiples act **entrywise**: $(A + B)_{ij} = a_{ij} + b_{ij}$ and $(cA)_{ij} = c\\,a_{ij}$, defined only for matrices of the same order.',
        detail: 'Addition is commutative and associative with the zero matrix $O$ as identity. Scalar multiplication is where a matrix polynomial like $A^2 - 4A + I$ gets its meaning: square $A$ (defined for square matrices only), scale, add. Non-square matrices cannot be added to their own transpose if... note $A + A^T$ is always defined for square $A$, which is exactly how the symmetric part above is built.',
      },
      {
        term: 'Matrix multiplication',
        kind: 'method',
        statement: 'The **row-by-column rule** gives $(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}$ — the product of row $i$ of $A$ with column $j$ of $B$ — defined only when the columns of $A$ equal the rows of $B$.',
        detail: 'An $m \\times n$ times $n \\times p$ yields $m \\times p$; the inner dimensions must match and then disappear. Multiplication is associative and distributive but not commutative — for $A = [[1,2],[3,4]]$ and $B = [[2,0],[1,1]]$, $AB = [[4,2],[10,4]]$ while $BA = [[2,4],[4,6]]$. Worse, $[[1,1],[1,1]] \\cdot [[1,1],[-1,-1]] = O$ with neither factor zero: matrices have zero divisors. Cancellation is therefore illegal: $AB = AC$ does not imply $B = C$.',
      },
      {
        term: 'Transpose laws',
        kind: 'law',
        statement: 'The transpose obeys **$(A^T)^T = A$, $(A + B)^T = A^T + B^T$, $(kA)^T = kA^T$ and the order-reversing $(AB)^T = B^T A^T$**.',
        detail: 'The reversal is the trap: $(AB)^T$ is $B^T A^T$, never $A^T B^T$. Products of symmetric matrices stay symmetric only when the factors commute. The determinant bridge used throughout this unit: $|AB| = |A||B|$, so a product is singular as soon as one factor is — e.g. every odd-order skew-symmetric matrix has $|A| = |{-A}| = (-1)^n|A| = -|A|$, forcing $|A| = 0$.',
      },
    ],
    examples: [
      {
        title: 'Matrix polynomial and a cheap fourth power',
        problem: 'If $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$, verify that $A^2 - 4A + I = O$ and use the identity to find $A^4$ without multiplying $A$ by itself four times.',
        steps: [
          { label: 'Step 1', text: '```text\nA^2 = [[2,3],[1,2]] x itself:  row-by-column\n```\nCompute $A^2$: entry (1,1) is $2\\cdot2 + 3\\cdot1 = 7$, (1,2) is $2\\cdot3 + 3\\cdot2 = 12$, (2,1) is $1\\cdot2 + 2\\cdot1 = 4$, (2,2) is $1\\cdot3 + 2\\cdot2 = 7$. So $A^2 = \\begin{bmatrix} 7 & 12 \\\\ 4 & 7 \\end{bmatrix}$.' },
          { label: 'Step 2', text: 'Check the identity: $A^2 - 4A + I = \\begin{bmatrix} 7 - 8 + 1 & 12 - 12 \\\\ 4 - 4 & 7 - 8 + 1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$ ✓, so $A^2 = 4A - I$.' },
          { label: 'Step 3', text: 'Square the identity instead of the matrix: $A^4 = (4A - I)^2 = 16A^2 - 8A + I = 16(4A - I) - 8A + I = 56A - 15I$.' },
          { label: 'Step 4', text: 'Substitute $A$: $A^4 = 56 \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix} - 15\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 97 & 168 \\\\ 56 & 97 \\end{bmatrix}$. Direct multiplication $(A^2)^2$ gives the same entries — $49 + 48 = 97$, $84 + 84 = 168$ ✓.' }
        ],
        result: '$A^2 - 4A + I = O$ and $A^4 = \\begin{bmatrix} 97 & 168 \\\\ 56 & 97 \\end{bmatrix}$ via $A^4 = 56A - 15I$.',
      },
      {
        title: 'Non-commutativity and the transpose reversal',
        problem: 'For $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 1 \\end{bmatrix}$, compute $AB$ and $BA$, and verify $(AB)^T = B^T A^T$.',
        steps: [
          { label: 'Step 1', text: '```text\nAB: row i of A dot column j of B;  BA: row i of B dot column j of A\n```\n$AB = \\begin{bmatrix} 1\\cdot2 + 2\\cdot1 & 1\\cdot0 + 2\\cdot1 \\\\ 3\\cdot2 + 4\\cdot1 & 3\\cdot0 + 4\\cdot1 \\end{bmatrix} = \\begin{bmatrix} 4 & 2 \\\\ 10 & 4 \\end{bmatrix}$.' },
          { label: 'Step 2', text: '$BA = \\begin{bmatrix} 2\\cdot1 + 0\\cdot3 & 2\\cdot2 + 0\\cdot4 \\\\ 1\\cdot1 + 1\\cdot3 & 1\\cdot2 + 1\\cdot4 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 4 & 6 \\end{bmatrix} \\ne AB$ — order matters.' },
          { label: 'Step 3', text: 'Transpose the product: $(AB)^T = \\begin{bmatrix} 4 & 10 \\\\ 2 & 4 \\end{bmatrix}$.' },
          { label: 'Step 4', text: 'Now $B^T A^T = \\begin{bmatrix} 2 & 1 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 4 & 10 \\\\ 2 & 4 \\end{bmatrix}$, identical to $(AB)^T$ ✓ — while $A^T B^T = \\begin{bmatrix} 2 & 2 \\\\ 4 & 4 \\end{bmatrix}$, confirming the order must reverse.' }
        ],
        result: '$AB = \\begin{bmatrix} 4 & 2 \\\\ 10 & 4 \\end{bmatrix}$, $BA = \\begin{bmatrix} 2 & 4 \\\\ 4 & 6 \\end{bmatrix}$, and $(AB)^T = B^T A^T$ holds entry-by-entry.',
      },
    ],
    keyTakeaways: [
      '$AB$ is defined only when the columns of $A$ match the rows of $B$; the product keeps the outer dimensions $m \\times p$.',
      'Matrix multiplication is not commutative and has zero divisors: $AB = O$ is possible with both factors nonzero.',
      'Transposition reverses products: $(AB)^T = B^T A^T$, never $A^T B^T$.',
      'Reduce matrix polynomials first — an identity like $A^2 = 4A - I$ converts high powers of $A$ into combinations of $A$ and $I$.',
    ],
    quiz: [
      {
        q: 'If $A$ is $3 \\times 4$ and $B$ is $4 \\times 2$, the order of $AB$ is',
        options: [`$4 \\times 4$`, `$3 \\times 2$`, `$2 \\times 3$`, `$AB$ is not defined`],
        answer: 1,
        explanation: 'Step 1: Check the inner dimensions: columns of $A$ = 4 = rows of $B$ ✓. Step 2: The product keeps the outer dimensions: $3 \\times 2$. Step 3: Note $BA$ is genuinely undefined since $B$ has 2 columns but $A$ needs 4 rows... the mismatch kills $BA$. Step 4: Option $4 \\times 4$ wrongly keeps the inner dimensions.',
      },
      {
        q: 'A skew-symmetric matrix of odd order is always',
        options: ['singular', 'symmetric', 'invertible', 'diagonal'],
        answer: 0,
        explanation: 'Step 1: Skew means $A^T = -A$; take determinants: $|A^T| = |-A|$. Step 2: Use $|A^T| = |A|$ and $|-A| = (-1)^n|A|$ for order $n$. Step 3: For odd $n$, $|A| = -|A|$, so $|A| = 0$ — the matrix is singular. Step 4: For even $n$ no conclusion is forced, which is why the question says "odd order".',
      },
      {
        q: 'If $A = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$, then $A^2$ equals',
        options: [`$I$`, `$O$`, `$-I$`, `$2I$`],
        answer: 2,
        explanation: 'Step 1: Apply the row-by-column rule: entry (1,1) is $0\\cdot0 + 1\\cdot(-1) = -1$, entry (1,2) is $0\\cdot1 + 1\\cdot0 = 0$. Step 2: Similarly row 2 gives $0$ and $-1$. Step 3: So $A^2 = \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix} = -I$. Step 4: Geometrically $A$ is a quarter-turn, and squaring it gives the half-turn $-I$; rotation by $180^\\circ$.',
      },
      {
        q: 'For conformable matrices, $(AB)^T$ equals',
        options: [`$A^T B^T$`, `$B^T A^T$`, `$AB^T$`, `$BA$`],
        answer: 1,
        explanation: 'Step 1: The transpose of a product reverses the order — a theorem, not a convention. Step 2: Hence $(AB)^T = B^T A^T$, verified entrywise in the worked example. Step 3: $A^T B^T$ equals $(BA)^T$ instead, a different matrix when $AB \\ne BA$. Step 4: This reversal generalises: $(ABC)^T = C^T B^T A^T$.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 4 · 4.1
  {
    sectionId: 'math-a4-s5',
    readingTime: 8,
    prerequisites: [
      'Multiplication tables and systematic listing',
      'Set language for "and"/"or" decisions (Unit 1)',
    ],
    intro: 'Every counting question in the engineering assessment syllabus — permutations, combinations, probability, even binomial coefficients — reduces to one idea: if a job splits into stages performed one after another, multiply the number of choices at each stage. That is the fundamental principle of counting; its partner, the addition principle, sums choices that are alternatives. Deciding "and $\\to$ multiply, or $\\to$ add" correctly is the single highest-leverage counting skill.',
    objectives: [
      'Apply the multiplication principle to multi-stage jobs and the addition principle to disjoint cases',
      'Translate word problems into slot diagrams, handling the most restrictive condition first',
      'Count arrangements with and without repetition and detect when order matters',
      'Use complementary counting — total minus bad — when "at least one" makes direct counting messy',
    ],
    concepts: [
      {
        term: 'Multiplication principle',
        kind: 'law',
        statement: 'If a task runs through **stages** with $n_1, n_2, \\ldots, n_k$ choices available at each stage regardless of earlier picks, the task can be done in $n_1 n_2 \\cdots n_k$ ways.',
        detail: 'Picture slots being filled left to right: 4 shirts and 3 pants give $4 \\times 3 = 12$ outfits. With repetition allowed, a slot keeps its full menu: $k$ slots over $n$ symbols give $n^k$ strings. The principle is the engine behind $P(n, r) = n(n-1)\\cdots(n-r+1)$ and $n!$ in the next section.',
      },
      {
        term: 'Addition principle',
        kind: 'law',
        statement: 'If the task is accomplished by exactly **one of several disjoint cases** offering $n_1, n_2, \\ldots$ ways, the total is $n_1 + n_2 + \\cdots$ ways.',
        detail: 'The cases must not overlap; if they do, the overlap must be subtracted — inclusion–exclusion from Unit 1 in disguise. Choosing a committee "of 1 boy or 1 girl" from 6 boys and 4 girls gives $6 + 4 = 10$; "1 boy and 1 girl" gives $6 \\times 4 = 24$. Same words, different connective, different operation.',
      },
      {
        term: 'Most restrictive slot first',
        kind: 'method',
        statement: 'Fill the slot with the **strongest constraint first** — parity, a forbidden leading digit, or a fixed position — because it shrinks the choices for all remaining slots.',
        detail: 'For even numbers, fix the units digit before anything else; for numbers without a leading zero, note that the thousands slot loses the digit 0 but later slots keep it. Never fill slots in left-to-right habit when a condition lives at the right end.',
      },
      {
        term: 'Complementary counting',
        kind: 'method',
        statement: 'When a condition says **"at least one"**, count total $-$ complement: $N(\\text{at least one}) = N(\\text{total}) - N(\\text{none})$.',
        detail: 'The complement of "at least one vowel" is "no vowels", which is usually a single clean product. The same trick handles "at least one repeated digit": total strings minus all-distinct strings. Whenever a direct count splits into many cases, ask what the leftover set looks like.',
      },
      {
        term: 'The and/or discipline',
        kind: 'insight',
        statement: '**AND joins stages — multiply; OR joins cases — add.** Reading the grammar of the question aloud before computing prevents the most common engineering assessment counting errors.',
        detail: 'Choosing a captain and a vice-captain from 11 players multiplies ($11 \\times 10 = 110$) because both selections happen; travelling from A to C through B or by one direct road adds ($5 \\times 4 + 1 = 21$) because the routes are alternatives. Mixed problems alternate the operations — exactly what the 4-digit even-number example below rehearses.',
      },
    ],
    examples: [
      {
        title: 'Even 4-digit numbers without repetition',
        problem: 'Using the digits $0, 1, 2, \\ldots, 9$ without repetition, how many 4-digit even numbers can be formed?',
        steps: [
          { label: 'Step 1', text: '```text\nstrongest constraint: units digit must be even -> split into two disjoint cases\n```\nThe parity condition lives on the units digit, so split by it. Case 1: units digit $= 0$; Case 2: units digit $\\in \\{2, 4, 6, 8\\}$. The cases are disjoint, so the answer will be a sum.' },
          { label: 'Step 2', text: 'Case 1 (units $= 0$): the thousands digit can be any of $1$–$9$ ($9$ ways), the hundreds any of the remaining $8$, the tens any of the remaining $7$: total $9 \\times 8 \\times 7 = 504$.' },
          { label: 'Step 3', text: 'Case 2 (units $\\in \\{2,4,6,8\\}$, $4$ ways): the thousands digit cannot be $0$ and cannot repeat the units digit — $8$ ways; the hundreds digit may be $0$ — $8$ ways; the tens digit — $7$ ways. Total $4 \\times 8 \\times 8 \\times 7 = 1792$.' },
          { label: 'Step 4', text: 'Add the disjoint cases: $504 + 1792 = 2296$. Note how the leading-zero trap appears only in Case 2, which is why the split was worth making.' }
        ],
        result: '$2296$ four-digit even numbers with distinct digits.',
      },
      {
        title: 'At least one vowel by complementary counting',
        problem: 'How many 4-letter codes can be formed from the 26 letters of the English alphabet if letters may repeat and the code must contain at least one vowel (there are 5 vowels)?',
        steps: [
          { label: 'Step 1', text: '```text\nrepetition allowed -> each slot keeps all 26 choices: 26^4 total\n```\nWith repetition allowed, the total number of codes is $26^4 = 456976$.' },
          { label: 'Step 2', text: 'The complement of "at least one vowel" is "no vowels", i.e. all four letters drawn from the $21$ consonants: $21^4 = 194481$ codes.' },
          { label: 'Step 3', text: 'Subtract: $456976 - 194481 = 262495$ codes contain at least one vowel.' },
          { label: 'Step 4', text: 'Direct counting would need cases "exactly 1, exactly 2, exactly 3, exactly 4 vowels" — four products and a binomial layer; the complement did it in two. Sanity: the answer is more than half the total, plausible since only $\\left(\\frac{21}{26}\\right)^4 \\approx 43\\%$ of codes are vowel-free.' }
        ],
        result: '$26^4 - 21^4 = 262495$ codes contain at least one vowel.',
      },
    ],
    keyTakeaways: [
      'Stages joined by AND multiply; disjoint cases joined by OR add — fix the connective before computing anything.',
      'Handle the most restrictive slot first: parity or a forbidden leading digit shrinks all later choices.',
      'With repetition a slot keeps its whole menu ($n^k$ totals); without it each pick removes one option ($n(n-1)\\cdots$).',
      '"At least one" signals the complement: count the total and subtract the all-bad case.',
    ],
    quiz: [
      {
        q: 'A man has 5 coats, 6 shirts and 4 trousers. The number of distinct outfits (one of each) is',
        options: [`$120$`, `$60$`, `$15$`, `$720$`],
        answer: 0,
        explanation: 'Step 1: An outfit needs a coat AND a shirt AND trousers — three stages. Step 2: Multiply the stage counts: $5 \\times 6 = 30$, then $30 \\times 4 = 120$. Step 3: The value $15$ merely adds the counts, misreading AND as OR. Step 4: The value $720 = 6!$ is a factorial with no role here.',
      },
      {
        q: 'How many 3-digit numbers are divisible by 5 if digits may repeat?',
        options: [`$90$`, `$180$`, `$200$`, `$160$`],
        answer: 1,
        explanation: 'Step 1: Divisibility by 5 fixes the units digit to $0$ or $5$ — $2$ ways, the most restrictive slot. Step 2: The hundreds digit has $9$ ways ($1$–$9$; no leading zero). Step 3: The tens digit has $10$ ways since repetition is allowed. Step 4: Multiply the stages: $2 \\times 9 \\times 10 = 180$.',
      },
      // PYQ-pattern: distinct roles -> ordered stages
      {
        q: 'From 11 players, a captain and a vice-captain are chosen. The number of ways is',
        options: [`$55$`, `$110$`, `$121$`, `$100$`],
        answer: 1,
        explanation: 'Step 1: The two roles are distinct, so this is an ordered choice: captain AND vice-captain. Step 2: The captain can be picked in $11$ ways; then $10$ players remain for vice-captain. Step 3: Multiply: $11 \\times 10 = 110$. Step 4: The value $55 = \\binom{11}{2}$ would treat the roles as identical — the classic unordered trap.',
      },
      {
        q: 'There are 5 routes from A to B, 4 routes from B to C, and 1 direct route from A to C. The number of ways to travel from A to C is',
        options: [`$9$`, `$20$`, `$25$`, `$21$`],
        answer: 3,
        explanation: 'Step 1: Split into disjoint cases: through B, or direct — an OR. Step 2: Through B is an AND of two stages: $5 \\times 4 = 20$ routes. Step 3: The direct route contributes $1$ more way. Step 4: Add the cases: $20 + 1 = 21$. Options $20$ and $9$ each forget one connective.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 5 · 5.1
  // NOTE: metadata (source of truth) titles this section 'The Binomial Theorem
  // for a Positive Integral Index' — NTA Unit 5. (The task brief's shorthand
  // label "Sequences and Series" belongs to Unit 6 and is not this section.)
  {
    sectionId: 'math-a4-s6',
    readingTime: 9,
    prerequisites: [
      'Expanding $(a + b)^2$ and $(a + b)^3$ by direct multiplication',
      'Factorial notation $n!$ and $\\binom{n}{r}$ from Unit 4',
    ],
    intro: 'Multiplying out $(a + b)^n$ by hand dies by $n = 4$; the binomial theorem does it in one line for every positive integral index: $(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$. Each term pairs a coefficient $\\binom{n}{r}$ with sliding powers of $a$ and $b$, from $a^n$ down to $b^n$. engineering assessment rewards three instant read-offs from any expansion: the number of terms $n + 1$, the symmetry $\\binom{n}{r} = \\binom{n}{n-r}$, and the coefficient sum $2^n$ obtained by setting $a = b = 1$.',
    objectives: [
      'Write the expansion of $(a + b)^n$ and name the term containing $a^{n-r}b^r$ as the $(r + 1)$-th term',
      'Exploit the symmetry $\\binom{n}{r} = \\binom{n}{n-r}$ and Pascal\'s rule $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$',
      'Evaluate sums of coefficients by substituting $a = b = 1$, and alternating sums by $a = 1, b = -1$',
      'Chain AM–GM with the coefficient sum $2^n$ to bound products of binomial coefficients',
    ],
    concepts: [
      {
        term: 'Statement of the theorem',
        kind: 'theorem',
        statement: 'For every positive integer $n$, **$(a + b)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\cdots + \\binom{n}{n}b^n$**, whose $(r + 1)$-th term is $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$.',
        detail: 'There are $n + 1$ terms, the powers of $a$ fall from $n$ to $0$ while those of $b$ rise from $0$ to $n$, and in every term the exponents sum to $n$. The counting proof: from $n$ factors of $(a+b)$, choose which $r$ contribute their $b$ — that can be done in $\\binom{n}{r}$ ways, exactly the Unit 4 principle again.',
      },
      {
        term: 'Symmetry and Pascal\'s rule',
        kind: 'law',
        statement: 'Coefficients read the same from either end: **$\\binom{n}{r} = \\binom{n}{n-r}$**, and neighbouring coefficients combine as $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$**.',
        detail: 'Symmetry pairs $T_{r+1}$ from the left with its mirror from the right, halving any symmetric computation. Pascal\'s rule is how each row of the triangle builds from the row above — and why the middle coefficient of $(1+x)^{2n}$ is the huge central $\\binom{2n}{n}$.',
      },
      {
        term: 'Substitution trick for coefficient sums',
        kind: 'method',
        statement: 'Putting **$a = b = 1$** makes every term its own coefficient, so the sum of all binomial coefficients is $2^n$; putting **$a = 1, b = -1$** gives the alternating sum $\\binom{n}{0} - \\binom{n}{1} + \\cdots = 0$ for $n \\ge 1$.',
        detail: 'The alternating zero splits the coefficients into two equal halves: the even-indexed and odd-indexed sums are each $2^{n-1}$. Careful with the phrase "sum of coefficients" — for a polynomial in $x$, that means evaluating at $x = 1$, never summing exponents or counting terms.',
      },
      {
        term: 'Reading off a specific power',
        kind: 'method',
        statement: 'To land on the term containing a chosen power, **solve the exponent equation first**: in the expansion of $(x + y)^n$ the power of $x$ in $T_{r+1}$ is $n - r$, so fix $r$ before computing any coefficient.',
        detail: 'For $(a + b)^7$, the term with $a^5 b^2$ needs $n - r = 5$, i.e. $r = 2$; its coefficient is $\\binom{7}{2} = 21$. engineering assessment questions hide this in guises like $(x^2 + \\frac{1}{x})^n$ where the exponent equation is $2(n - r) - r = k$ — always write that equation before reaching for factorials.',
      },
      {
        term: 'AM–GM on a coefficient set',
        kind: 'insight',
        statement: 'The $n + 1$ coefficients of $(1 + x)^n$ are **positive and sum to $2^n$**, so their arithmetic mean is $\\frac{2^n}{n+1}$ and AM–GM bounds their geometric mean: $\\left(\\prod_{r=0}^{n} \\binom{n}{r}\\right)^{1/(n+1)} \\le \\frac{2^n}{n+1}$.',
        detail: 'Equality in AM–GM needs all coefficients equal, which happens only for $n = 0$ and $n = 1$; for every $n \\ge 2$ the inequality is strict. This is the standard engineering assessment chain: binomial sum $2^n$ first, AM–GM second — and it previews the AM–GM machinery of Unit 6.',
      },
    ],
    examples: [
      {
        title: 'Sum of coefficients from two substitutions',
        problem: 'The sum of the binomial coefficients in the expansion of $(1 + x)^k$ is $256$. Find $k$ and the sum of the coefficients of the odd powers of $x$.',
        steps: [
          { label: 'Step 1', text: '```text\nsum of coefficients = value of the polynomial at x = 1\n```\nSubstituting $x = 1$ makes every term its own coefficient: $(1 + 1)^k = 2^k = 256$, so $k = 8$.' },
          { label: 'Step 2', text: 'Substituting $x = -1$ gives the alternating sum: $(1 - 1)^8 = 0$, i.e. (even-power sum) $-$ (odd-power sum) $= 0$. Hence the two sums are equal.' },
          { label: 'Step 3', text: 'Together with the total $2^8 = 256$, each half equals $\\frac{256}{2} = 128$. So the coefficients of $x^1, x^3, x^5, x^7$ sum to $128$.' },
          { label: 'Step 4', text: 'Mini-check with $k = 3$: $(1+x)^3 = 1 + 3x + 3x^2 + x^3$ has odd-power coefficients $3 + 1 = 4 = 2^{3-1}$ ✓ — the halving pattern holds.' }
        ],
        result: '$k = 8$ and the odd-power coefficients sum to $2^7 = 128$.',
      },
      {
        title: 'AM–GM bound on a coefficient product',
        problem: 'Use the binomial theorem and AM–GM to show that the product of all five binomial coefficients of $(1 + x)^4$ is at most $\\left(\\frac{16}{5}\\right)^5$, and check the bound numerically.',
        steps: [
          { label: 'Step 1', text: '```text\n(1+x)^4 = 1 + 4x + 6x^2 + 4x^3 + x^4;  x = 1 -> sum = 16\n```\nThe coefficients are $1, 4, 6, 4, 1$ — five positive numbers whose sum is $2^4 = 16$ by the $x = 1$ substitution.' },
          { label: 'Step 2', text: 'AM–GM for five positive numbers: $\\frac{1 + 4 + 6 + 4 + 1}{5} \\ge (1 \\cdot 4 \\cdot 6 \\cdot 4 \\cdot 1)^{1/5}$, i.e. $\\frac{16}{5} = 3.2 \\ge 96^{1/5} \\approx 2.49$.' },
          { label: 'Step 3', text: 'Raise both sides to the fifth power: the product $96 \\le \\left(\\frac{16}{5}\\right)^5 = \\frac{16^5}{5^5} = \\frac{1048576}{3125} \\approx 335.5$.' },
          { label: 'Step 4', text: 'The bound is strict because AM–GM demands all five numbers equal for equality, and $1 \\ne 4 \\ne 6$. The same argument proves $\\prod_{r=0}^{n}\\binom{n}{r} < \\left(\\frac{2^n}{n+1}\\right)^{n+1}$ for every $n \\ge 2$.' }
        ],
        result: 'The product $1 \\cdot 4 \\cdot 6 \\cdot 4 \\cdot 1 = 96$ satisfies $96 < \\left(\\frac{16}{5}\\right)^5 \\approx 335.5$, strict by the equality condition of AM–GM.',
      },
    ],
    keyTakeaways: [
      '$(a + b)^n$ has $n + 1$ terms with $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$; the exponents always sum to $n$.',
      'Coefficients are symmetric, $\\binom{n}{r} = \\binom{n}{n-r}$, and Pascal\'s rule $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$ builds each row of the triangle.',
      'Substitute $a = b = 1$ for the coefficient sum $2^n$, and $a = 1, b = -1$ to split even/odd-indexed sums as $2^{n-1}$ each.',
      'Positive quantities with a fixed sum are AM–GM material: $\\prod_{r=0}^{n}\\binom{n}{r} \\le \\left(\\frac{2^n}{n+1}\\right)^{n+1}$, strict for $n \\ge 2$.',
    ],
    quiz: [
      {
        q: 'The number of terms in the expansion of $(2x - 3y)^{12}$ is',
        options: [`$12$`, `$13$`, `$24$`, `$2^{12}$`],
        answer: 1,
        explanation: 'Step 1: The index is $n = 12$; the coefficients $\\binom{12}{r}$ run over $r = 0, 1, \\ldots, 12$. Step 2: That is $12 + 1 = 13$ values of $r$, hence 13 terms. Step 3: Neither the base nor the signs change the count — $(2x - 3y)^{12}$ is just $(a+b)^n$ with $a = 2x, b = -3y$. Step 4: $2^{12}$ is the sum of the coefficients, not their number.',
      },
      {
        q: 'The sum of the binomial coefficients in the expansion of $(1 + x)^{10}$ is',
        options: [`$1024$`, `$512$`, `$100$`, `$2^{10} - 1$`],
        answer: 0,
        explanation: 'Step 1: Sum of coefficients means evaluating at $x = 1$. Step 2: $(1 + 1)^{10} = 2^{10} = 1024$. Step 3: The value $512 = 2^9$ is only the even-indexed (or odd-indexed) half. Step 4: The value $2^{10} - 1$ counts non-empty subsets — a Unit 1 echo, wrong here.',
      },
      {
        q: 'The value of $\\binom{7}{0} + \\binom{7}{2} + \\binom{7}{4} + \\binom{7}{6}$ is',
        options: [`$128$`, `$64$`, `$32$`, `$127$`],
        answer: 1,
        explanation: 'Step 1: These are the coefficients of the even powers of $x$ in $(1 + x)^7$. Step 2: The $x = -1$ substitution shows even and odd sums are equal halves of $2^7 = 128$. Step 3: So the even-power sum is $64$. Step 4: Direct arithmetic confirms: $1 + 21 + 35 + 7 = 64$ ✓.',
      },
      // PYQ-pattern: general term read-off
      {
        q: 'In the expansion of $(a + b)^7$, the term containing $a^5 b^2$ is',
        options: [`$21\\,a^5 b^2$`, `$35\\,a^5 b^2$`, `$21\\,a^2 b^5$`, `$42\\,a^5 b^2$`],
        answer: 0,
        explanation: 'Step 1: In $T_{r+1} = \\binom{7}{r} a^{7-r} b^r$, the power of $a$ is $7 - r = 5$, so $r = 2$. Step 2: The term is $T_3 = \\binom{7}{2} a^5 b^2 = 21 a^5 b^2$. Step 3: The value $35$ is $\\binom{7}{3}$, mis-solving the exponent equation. Step 4: By symmetry $\\binom{7}{2} = \\binom{7}{5}$, which is why the $a^2 b^5$ option also carries 21.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 7 · 7.1
  {
    sectionId: 'calc-ch1-s6',
    readingTime: 10,
    prerequisites: [
      'Set-builder notation and the function concept from Unit 1',
      'Rules of exponents and logarithms',
      'Trigonometric ratios of standard angles (Unit 14)',
    ],
    intro: 'A real function $f : X \\to \\mathbb{R}$ assigns exactly one real output to each input, and its graph — the set of points $(x, f(x))$ — is the fastest way to see domain, range and behaviour at a glance. engineering assessment builds its earliest hard questions on exactly this machinery: find the domain where a formula is legal, the range it actually attains, compose or invert functions, and recognise the standard shapes — parabola, hyperbola, exponential, logarithm, sine wave. Everything in the later calculus sections of this unit stands on these families.',
    objectives: [
      'Find natural domains using the three taboos: zero denominators, negative radicands and non-positive logarithm arguments',
      'Compute ranges by solving $y = f(x)$ for $x$ and demanding real solutions',
      'Compose functions $(f \\circ g)(x) = f(g(x))$ and invert one-one functions by solving $y = f(x)$ for $x$',
      'Sketch shifted graphs $y = f(x - a) + b$ and classify even $f(-x) = f(x)$ and odd $f(-x) = -f(x)$ symmetry',
    ],
    concepts: [
      {
        term: 'Function, domain and range',
        kind: 'definition',
        statement: 'A **function** $f : A \\to B$ sends each $x \\in A$ to a single value $f(x) \\in B$; the **domain** is the set of legal inputs and the **range** is the set of outputs actually attained.',
        detail: 'The graph passes the vertical line test — one crossing per $x$. The codomain $B$ may be larger than the range: $f(x) = x^2$ with codomain $\\mathbb{R}$ still has range $[0, \\infty)$, and that gap is a favourite engineering assessment distinction. For a formula with no stated domain, the natural domain is the largest set where the formula makes sense.',
      },
      {
        term: 'Algebra of functions',
        kind: 'law',
        statement: 'Sums, products and quotients are defined pointwise — $(f + g)(x) = f(x) + g(x)$, $(fg)(x) = f(x)g(x)$, $\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$ — on the common domain minus zeros of $g$, and **composition** $(f \\circ g)(x) = f(g(x))$.',
        detail: 'The domain of $f \\circ g$ is $\\{x \\in \\mathrm{dom}(g) : g(x) \\in \\mathrm{dom}(f)\\}$ — the outputs of $g$ must be legal inputs for $f$. Composition is not commutative: with $f(x) = x^2$ and $g(x) = x + 1$, $(f \\circ g)(x) = (x+1)^2$ but $(g \\circ f)(x) = x^2 + 1$.',
      },
      {
        term: 'The standard families',
        kind: 'notation',
        statement: 'Memorise the family cards: **polynomial** $p(x)$ (domain $\\mathbb{R}$), **rational** $\\frac{p}{q}$ (exclude zeros of $q$), **$\\sin, \\cos$** (domain $\\mathbb{R}$, range $[-1, 1]$), **$\\tan$** (undefined at odd $\\frac{\\pi}{2}$), **$a^x$** (domain $\\mathbb{R}$, range $(0, \\infty)$) and **$\\log_a x$** (domain $(0, \\infty)$, range $\\mathbb{R}$).',
        detail: 'The exponential and logarithm are mirror images across $y = x$ — they swap domain with range. Rational functions like $\\frac{1}{x}$ punch holes at zeros of the denominator; $\\sqrt{x}$ cuts away the negative axis; $|x|$ gives the V-shaped graph. Together with shifts and stretches these generate every "graph of simple function" engineering assessment asks for.',
      },
      {
        term: 'Inverse functions',
        kind: 'method',
        statement: 'An inverse $f^{-1}$ exists exactly when $f$ is **one-one**, and is found by solving $y = f(x)$ for $x$; the graphs of $f$ and $f^{-1}$ are mirror images across $y = x$ with $\\mathrm{dom}(f^{-1}) = \\mathrm{range}(f)$.',
        detail: 'The horizontal line test detects one-one graphs. $f(x) = x^2$ is not invertible on $\\mathbb{R}$ but is invertible on $[0, \\infty)$, where $f^{-1}(x) = \\sqrt{x}$ — restricting the domain to force one-one-ness is the standard repair. Composition check: $f^{-1}(f(x)) = x$ on the domain of $f$.',
      },
      {
        term: 'Graph transformations and symmetry',
        kind: 'method',
        statement: '**$y = f(x - a) + b$ shifts the graph right by $a$ and up by $b$**; $y = -f(x)$ reflects in the $x$-axis, $y = f(-x)$ in the $y$-axis, and $y = |f(x)|$ flips the negative parts upward.',
        detail: 'Even functions satisfy $f(-x) = f(x)$ (symmetric about the $y$-axis — $x^2, \\cos x$), odd ones $f(-x) = -f(x)$ (symmetric about the origin — $x^3, \\sin x$); a product of two odd functions is even, which settles questions like $x \\sin x$ instantly. The greatest-integer function $[x]$, constant between consecutive integers with jumps at each, is the engineering assessment favourite step graph and reappears throughout the limits sections.',
      },
    ],
    examples: [
      {
        title: 'A three-taboo domain hunt',
        problem: 'Find the natural domain of $f(x) = \\dfrac{\\sqrt{4 - x^2}}{\\log_{10}(x - 1)}$.',
        steps: [
          { label: 'Step 1', text: '```text\ntaboo 1: radicand >= 0;  taboo 2: log argument > 0;  taboo 3: denominator != 0\n```\nThe square root needs $4 - x^2 \\ge 0$, i.e. $(2 - x)(2 + x) \\ge 0$, so $x \\in [-2, 2]$.' },
          { label: 'Step 2', text: 'The logarithm needs $x - 1 > 0$, so $x > 1$. Intersecting with Step 1 leaves $(1, 2]$.' },
          { label: 'Step 3', text: 'The denominator must be nonzero: $\\log_{10}(x - 1) = 0$ exactly when $x - 1 = 1$, i.e. $x = 2$. Remove it: $x \\in (1, 2)$.' },
          { label: 'Step 4', text: 'Note how $x = 2$ passed the radicand check ($\\sqrt{0}$ is fine) but died in the denominator — each taboo must be applied separately. Domain: $(1, 2)$, an open interval.' }
        ],
        result: 'The domain is the open interval $(1, 2)$.',
      },
      {
        title: 'Range by solving for x',
        problem: 'Find the range of $f(x) = \\dfrac{x^2 + 2}{x^2 + 1}$.',
        steps: [
          { label: 'Step 1', text: '```text\nset y = f(x) and solve for x in terms of y\n```\nWrite $y(x^2 + 1) = x^2 + 2$, valid for every real $x$ since $x^2 + 1 \\ne 0$.' },
          { label: 'Step 2', text: 'Collect: $yx^2 - x^2 = 2 - y$, so $(y - 1)x^2 = 2 - y$.' },
          { label: 'Step 3', text: 'For $y \\ne 1$: $x^2 = \\frac{2 - y}{y - 1}$ must be $\\ge 0$, which forces numerator and denominator to share a sign: $y \\in (1, 2]$. And $y = 1$ is impossible, since it would give $0 = 1$.' },
          { label: 'Step 4', text: 'Check the endpoints: $x = 0$ gives $f(0) = 2$ (the maximum, attained), while $x \\to \\infty$ sends $f(x) \\to 1$ from above (never attained). Range: $(1, 2]$.' }
        ],
        result: 'The range is $(1, 2]$ — maximum $2$ at $x = 0$, lower bound $1$ approached but never reached.',
      },
    ],
    keyTakeaways: [
      'Domains obey three taboos: no zero denominators, no negative radicands, no non-positive logarithm arguments — apply each separately.',
      'Ranges come from solving $y = f(x)$ for $x$ and demanding real solutions; sign tests or discriminants finish the job.',
      'Composition is order-sensitive, $(f \\circ g)(x) = f(g(x)) \\ne (g \\circ f)(x)$ in general, and needs $g$-outputs inside the domain of $f$.',
      'Inverses require one-one functions; $f$ and $f^{-1}$ mirror across $y = x$ and swap domain with range.',
    ],
    quiz: [
      {
        q: 'The domain of $f(x) = \\sqrt{3 - x} + \\dfrac{1}{\\sqrt{x^2 - 9}}$ is',
        options: [`$(-\\infty, -3)$`, `$(-3, 3)$`, `$(-\\infty, -3]$`, `$(3, \\infty)$`],
        answer: 0,
        explanation: 'Step 1: The first radical needs $3 - x \\ge 0$, i.e. $x \\le 3$. Step 2: The second needs $x^2 - 9 > 0$ — strictly, since it is a denominator — so $x < -3$ or $x > 3$. Step 3: Intersect: only $x < -3$ survives, the open interval $(-\\infty, -3)$. Step 4: Option $(-\\infty, -3]$ wrongly keeps $x = -3$, where $\\sqrt{0}$ sits in a denominator.',
      },
      {
        q: 'The range of $f(x) = \\dfrac{x^2}{x^2 + 1}$ is',
        options: [`$[0, 1]$`, `$[0, 1)$`, `$(0, 1)$`, `$\\mathbb{R}$`],
        answer: 1,
        explanation: 'Step 1: Set $y = \\frac{x^2}{x^2+1}$ and solve: $(y - 1)x^2 = -y$, so $x^2 = \\frac{y}{1 - y}$. Step 2: This is $\\ge 0$ precisely when $0 \\le y < 1$. Step 3: $y = 0$ is attained at $x = 0$; $y = 1$ would need $x^2 + 1 = x^2$, impossible. Step 4: Hence $[0, 1)$ — closed at 0, open at 1.',
      },
      {
        q: 'If $f(x) = x^2$ restricted to $x \\ge 0$, then $f^{-1}(x)$ is',
        options: [`$x^2$`, `$\\sqrt{x}$`, `$-\\sqrt{x}$`, `$|x|$`],
        answer: 1,
        explanation: 'Step 1: On $x \\ge 0$ the parabola is one-one, so the inverse exists. Step 2: Solve $y = x^2$ with $x \\ge 0$: $x = \\sqrt{y}$, then swap letters: $f^{-1}(x) = \\sqrt{x}$. Step 3: The domain of $f^{-1}$ is the range of $f$, namely $[0, \\infty)$. Step 4: Without the restriction, $x^2$ is two-one and no inverse exists — the whole point of the restriction.',
      },
      {
        q: 'The function $f(x) = x \\sin x$ is',
        options: ['even', 'odd', 'neither even nor odd', 'constant'],
        answer: 0,
        explanation: 'Step 1: Test $f(-x) = (-x)\\sin(-x)$. Step 2: Since $\\sin(-x) = -\\sin x$, we get $f(-x) = (-x)(-\\sin x) = x\\sin x = f(x)$. Step 3: A product of two odd functions is even — parity multiplies like signs. Step 4: Note $x \\cos x$ would instead be odd: odd times even is odd.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 8 · 8.1
  {
    sectionId: 'calc-ch5-s9',
    readingTime: 10,
    prerequisites: [
      'Derivatives of $x^n$, $\\sin x$, $\\cos x$, $e^x$ and $\\ln x$ (Unit 7)',
      'Splitting rational expressions and elementary identities',
    ],
    intro: 'Integration reverses differentiation: to evaluate $\\int f(x)\\,dx$ we search for a function $F$ with $F\'(x) = f(x)$. Because constants vanish when differentiated, every answer carries a $+C$ — a whole family of vertical translates of one curve. The method is a lookup table of reversed derivative rules for algebraic, trigonometric, exponential and logarithmic functions, plus the algebraic skill of massaging any integrand into a listed standard form before looking it up.',
    objectives: [
      'Write antiderivatives of $x^n$ (with the $n = -1$ exception), $\\sin x$, $\\cos x$, $\\sec^2 x$, $e^x$, $\\frac{1}{x}$ and $a^x$, always with $+C$',
      'Split rational and radical integrands into standard forms and integrate term by term',
      'Recover a function from its derivative and one point — initial-value problems',
      'Verify every answer by differentiating — the free self-check that catches most slips',
    ],
    concepts: [
      {
        term: 'Antiderivative and the indefinite integral',
        kind: 'definition',
        statement: '$\\int f(x)\\,dx = F(x) + C$ where **$F\' = f$**; the $+C$ records that any two antiderivatives differ by a constant.',
        detail: 'Geometrically, the integral is a family of parallel curves — one for each value of $C$ — all sharing the same slope pattern. Derivatives of $F(x) + 3$ and $F(x) - 7$ are identical. Conversely, if $G\' = F\'$ on an interval then $G - F$ is constant there, so the $+C$ is not optional bookkeeping: omitting it loses a whole family of solutions.',
      },
      {
        term: 'Power rule and the logarithmic exception',
        kind: 'law',
        statement: '**$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ for every $n \\ne -1$**, while the excluded exponent gives $\\int \\frac{dx}{x} = \\ln|x| + C$.',
        detail: 'The exception is forced: $\\frac{x^0}{0}$ is meaningless, and the true antiderivative of $x^{-1}$ is logarithmic — $\\frac{d}{dx}\\ln|x| = \\frac{1}{x}$ on both sides of the origin, since for $x < 0$, $\\ln(-x)$ differentiates to $\\frac{-1}{-x} = \\frac{1}{x}$. Fractional exponents are welcome: $\\int x^{1/2}dx = \\frac{2}{3}x^{3/2} + C$ and $\\int x^{-1/2}dx = 2\\sqrt{x} + C$.',
      },
      {
        term: 'Trigonometric standard forms',
        kind: 'law',
        statement: 'Reversing the derivative table: $\\int \\sin x\\,dx = -\\cos x + C$, $\\int \\cos x\\,dx = \\sin x + C$, **$\\int \\sec^2 x\\,dx = \\tan x + C$**, $\\int \\csc^2 x\\,dx = -\\cot x + C$, $\\int \\sec x \\tan x\\,dx = \\sec x + C$.',
        detail: 'The minus sign lives on the antiderivatives of $\\sin$ and $\\cot$-family functions — write the pair $\\pm$ carefully. Non-standard squares convert through Pythagorean identities: $\\tan^2 x = \\sec^2 x - 1$ and $\\cot^2 x = \\csc^2 x - 1$ turn $\\int \\tan^2 x\\,dx$ into $\\tan x - x + C$ instantly.',
      },
      {
        term: 'Exponential standard forms',
        kind: 'law',
        statement: '**$\\int e^x\\,dx = e^x + C$** — the function that is its own antiderivative — and for any base $a > 0, a \\ne 1$, $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$.',
        detail: 'The factor $\\frac{1}{\\ln a}$ is the forgotten factor of this unit: differentiating $\\frac{a^x}{\\ln a}$ returns $\\frac{a^x \\ln a}{\\ln a} = a^x$ ✓. Mixing bases inside one integral is fine by linearity: $\\int (e^x + 2^x)dx = e^x + \\frac{2^x}{\\ln 2} + C$.',
      },
      {
        term: 'Linearity and the massage-first habit',
        kind: 'method',
        statement: 'Integration is **linear**: $\\int (af + bg)\\,dx = a\\int f\\,dx + b\\int g\\,dx$ — so split the integrand into standard-form pieces before touching the table.',
        detail: 'Typical massages: divide first ($\\frac{x^2 + 1}{x} = x + \\frac{1}{x}$), break products into sums, replace $\\sin^2 x$ by $\\frac{1 - \\cos 2x}{2}$ or cancel common factors as in the worked example. Because differentiation is also linear, every massage can be audited by differentiating the result — the habit that makes this unit error-free.',
      },
    ],
    examples: [
      {
        title: 'Recovering a curve from its slope (initial value)',
        problem: 'A curve passes through $(1, 2)$ and its slope at every point ($x > 0$) is $6x^2 - \\dfrac{4}{\\sqrt{x}}$. Find the equation of the curve.',
        steps: [
          { label: 'Step 1', text: '```text\nf(x) = integral of (6x^2 - 4 x^{-1/2}) dx, term by term\n```\nBy linearity integrate each piece: $\\int 6x^2\\,dx = 2x^3$ and $\\int 4x^{-1/2}\\,dx = 4 \\cdot 2x^{1/2} = 8\\sqrt{x}$.' },
          { label: 'Step 2', text: 'So $f(x) = 2x^3 - 8\\sqrt{x} + C$ on $x > 0$ — the $+C$ is a whole family of parallel curves.' },
          { label: 'Step 3', text: 'The point pins $C$: $f(1) = 2 - 8 + C = 2$ gives $C = 8$. Hence $f(x) = 2x^3 - 8\\sqrt{x} + 8$.' },
          { label: 'Step 4', text: 'Check by differentiating: $f\'(x) = 6x^2 - \\frac{8}{2\\sqrt{x}} = 6x^2 - \\frac{4}{\\sqrt{x}}$ ✓, and $f(1) = 2 - 8 + 8 = 2$ ✓.' }
        ],
        result: '$f(x) = 2x^3 - 8\\sqrt{x} + 8$ for $x > 0$.',
      },
      {
        title: 'Trigonometric massage before lookup',
        problem: 'Evaluate $\\displaystyle\\int \\frac{\\sin^2 x}{1 + \\cos x}\\,dx$ on any interval where the integrand is defined.',
        steps: [
          { label: 'Step 1', text: '```text\nno standard form matches -> massage with sin^2 = 1 - cos^2\n```\nThe integrand is not in the table. Apply the Pythagorean identity: $\\sin^2 x = 1 - \\cos^2 x = (1 - \\cos x)(1 + \\cos x)$.' },
          { label: 'Step 2', text: 'Cancel the factor $1 + \\cos x$ (legitimate wherever the original denominator is nonzero, i.e. away from odd multiples of $\\pi$): the integrand collapses to $1 - \\cos x$.' },
          { label: 'Step 3', text: 'Integrate the standard forms: $\\int (1 - \\cos x)\\,dx = x - \\sin x + C$.' },
          { label: 'Step 4', text: 'Check by differentiating: $\\frac{d}{dx}(x - \\sin x) = 1 - \\cos x = \\frac{\\sin^2 x}{1 + \\cos x}$ wherever defined ✓. Note the answer is valid on each interval of the domain separately, with its own constant $C$.' }
        ],
        result: '$\\displaystyle\\int \\frac{\\sin^2 x}{1 + \\cos x}\\,dx = x - \\sin x + C$.',
      },
    ],
    keyTakeaways: [
      'Every indefinite integral ends in $+C$; two antiderivatives differ only by a constant, which an initial condition then pins down.',
      'The power rule fails only at $n = -1$: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ but $\\int \\frac{dx}{x} = \\ln|x| + C$.',
      'Exponential bases bring a factor: $\\int a^x dx = \\frac{a^x}{\\ln a} + C$ — the $\\ln a$ is the one everyone forgets.',
      'Massage first, integrate second — split fractions, deploy $\\tan^2 x = \\sec^2 x - 1$, cancel factors — then differentiate to check.',
    ],
    quiz: [
      {
        q: '$\\displaystyle\\int \\sqrt{x}\\,dx$ equals',
        options: [`$\\frac{2}{3}x^{3/2} + C$`, `$\\frac{3}{2}x^{3/2} + C$`, `$\\frac{2}{3}x^{1/2} + C$`, `$x^{3/2} + C$`],
        answer: 0,
        explanation: 'Step 1: Write $\\sqrt{x} = x^{1/2}$ so $n = \\frac{1}{2} \\ne -1$. Step 2: Apply the power rule: raise the exponent to $\\frac{3}{2}$ and divide by $\\frac{3}{2}$. Step 3: That gives $\\frac{2}{3}x^{3/2} + C$. Step 4: Differentiate to check: $\\frac{2}{3} \\cdot \\frac{3}{2} x^{1/2} = \\sqrt{x}$ ✓ — the $\\frac{3}{2}$ option inverts the factor.',
      },
      {
        q: '$\\displaystyle\\int (2^x + e^x)\\,dx$ equals',
        options: [`$2^x + e^x + C$`, `$\\frac{2^x}{\\ln 2} + e^x + C$`, `$2^x \\ln 2 + e^x + C$`, `$\\frac{2^{x+1}}{x+1} + e^x + C$`],
        answer: 1,
        explanation: 'Step 1: Split by linearity into $\\int 2^x dx + \\int e^x dx$. Step 2: The base-$2$ exponential brings the factor $\\frac{1}{\\ln 2}$: $\\frac{2^x}{\\ln 2}$. Step 3: The natural exponential is its own antiderivative: $e^x$. Step 4: Differentiate option 2 to confirm: $\\frac{2^x \\ln 2}{\\ln 2} + e^x = 2^x + e^x$ ✓.',
      },
      {
        q: '$\\displaystyle\\int \\tan^2 x\\,dx$ equals',
        options: [`$\\tan x + x + C$`, `$\\sec^2 x - x + C$`, `$\\tan x - x + C$`, `$-\\cot x - x + C$`],
        answer: 2,
        explanation: 'Step 1: $\\tan^2 x$ is not a standard form, so massage: $\\tan^2 x = \\sec^2 x - 1$. Step 2: Integrate piecewise: $\\int \\sec^2 x\\,dx = \\tan x$ and $\\int 1\\,dx = x$. Step 3: Combine: $\\tan x - x + C$. Step 4: Check: $\\frac{d}{dx}(\\tan x - x) = \\sec^2 x - 1 = \\tan^2 x$ ✓.',
      },
      // PYQ-pattern: initial-value antiderivative
      {
        q: 'If $f\'(x) = 4x - 3$ and $f(1) = 2$, then $f(0)$ equals',
        options: [`$0$`, `$2$`, `$3$`, `$5$`],
        answer: 2,
        explanation: 'Step 1: Integrate: $f(x) = 2x^2 - 3x + C$. Step 2: Use the condition: $f(1) = 2 - 3 + C = 2$, so $C = 3$. Step 3: Therefore $f(x) = 2x^2 - 3x + 3$ and $f(0) = 3$. Step 4: Sanity check the slope at $x = 1$: $f\'(1) = 4 - 3 = 1$... consistent with the given $f\'(x) = 4x - 3$ at $x = 1$ ✓.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 10 · 10.1
  {
    sectionId: 'math-a8-s11',
    readingTime: 9,
    prerequisites: [
      'Plotting points and the Pythagoras theorem',
      'Solving linear and quadratic equations, completing the square',
    ],
    intro: 'Coordinate geometry puts algebra inside geometry: a point becomes a pair $(x, y)$, and every geometric question — how far, in what ratio, along what path — becomes an equation. The two founding tools are the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, which is Pythagoras in disguise, and the section formula for a point dividing a segment in ratio $m : n$. A locus — the set of all points obeying a condition — is then found by translating the condition into an $x, y$ equation, which is precisely how circles, perpendicular bisectors and the conic sections are born.',
    objectives: [
      'Compute distances and use them to classify triangles (isoceles, right-angled) and detect collinearity via $AB + BC = AC$',
      'Divide a segment in the ratio $m : n$, internally and externally, and apply the midpoint special case',
      'Translate geometric conditions into locus equations — circles, bisectors and conic previews',
      'Identify a curve from its locus equation without plotting point by point',
    ],
    concepts: [
      {
        term: 'Rectangular coordinates in a plane',
        kind: 'notation',
        statement: 'A point $(x, y)$ is located by **signed distances** $x$ from the $y$-axis and $y$ from the $x$-axis, with the four quadrants fixed by the signs of the pair.',
        detail: 'The point $(a, b)$ sits $|a|$ from the $y$-axis and $|b|$ from the $x$-axis; the origin is $(0, 0)$. A point on the $x$-axis has $y = 0$ and vice versa. Every curve of this unit is ultimately a set of such pairs satisfying one equation.',
      },
      {
        term: 'The distance formula',
        kind: 'law',
        statement: '**$|PQ| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$** — the hypotenuse of the right triangle whose legs are the horizontal and vertical separations.',
        detail: 'Collinearity test: three points are collinear iff one of the three distances equals the sum of the other two. Triangle classification: compare squared side lengths against Pythagoras — if the largest square equals the sum of the other two, the angle between them is right; equal side lengths signal isoceles or equilateral.',
      },
      {
        term: 'The section formula',
        kind: 'law',
        statement: 'The point dividing $A(x_1, y_1)$ and $B(x_2, y_2)$ internally in ratio $m : n$ is **$P = \\left(\\frac{mx_2 + nx_1}{m + n}, \\frac{my_2 + ny_1}{m + n}\\right)$**; the midpoint ($m = n$) is the coordinatewise average, and external division replaces $n$ by $-n$.',
        detail: 'The weights attach to the opposite endpoint — the $m$ multiplies $B$\'s coordinates. External division gives $\\left(\\frac{mx_2 - nx_1}{m - n}, \\frac{my_2 - ny_1}{m - n}\\right)$, which lies outside the segment. The centroid of a triangle falls out as the average of its three vertices — a bonus used again in Section 10.3.',
      },
      {
        term: 'The locus recipe',
        kind: 'method',
        statement: 'To find a locus: (1) take a **general point $P(x, y)$**; (2) write the geometric condition as an equation in $x$ and $y$; (3) simplify — the resulting equation is the locus.',
        detail: 'The recipe converts geometry to algebra mechanically: "$P$ is at distance $r$ from a fixed point" gives a circle; "$P$ is equidistant from two fixed points" gives the perpendicular bisector line; "sum of distances constant" gives an ellipse and "equidistant from a point and a line" a parabola — the conics of Section 10.5 are all loci in exactly this sense.',
      },
      {
        term: 'The two standard distance loci',
        kind: 'theorem',
        statement: '$PA = r$ traces the **circle** $(x - h)^2 + (y - k)^2 = r^2$ about $A = (h, k)$, while $PA = PB$ traces the **perpendicular bisector** of $AB$ — a straight line, because squaring cancels the $x^2 + y^2$ terms.',
        detail: 'Squaring both sides of a distance equation is safe since distances are nonnegative. For $PA = k \\cdot PB$ with $k \\ne 1$, the $x^2 + y^2$ terms survive with unequal coefficients and the locus is a circle — the Apollonius circle the worked example builds. This is the same equation engineering assessment later disguises as $|z - z_1| = k|z - z_2|$ in complex-number form (Unit 2).',
      },
    ],
    examples: [
      {
        title: 'Classifying a triangle by distances',
        problem: 'Show that the points $A(1, 1)$, $B(4, 5)$ and $C(-3, 4)$ form an isoceles right-angled triangle, and find its area.',
        steps: [
          { label: 'Step 1', text: '```text\nAB: dx=3, dy=4  ->  5 ;  AC: dx=-4, dy=3  ->  5\n```\nDistance formula: $AB = \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9 + 16} = 5$ and $AC = \\sqrt{(-3-1)^2 + (4-1)^2} = \\sqrt{16 + 9} = 5$. Two equal sides already — isoceles.' },
          { label: 'Step 2', text: 'The third side: $BC = \\sqrt{(-3-4)^2 + (4-5)^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$.' },
          { label: 'Step 3', text: 'Pythagoras check on the largest side: $AB^2 + AC^2 = 25 + 25 = 50 = BC^2$ ✓ — the right angle is at $A$, between the two equal legs, so the triangle is isoceles right-angled (angles $45^\\circ, 45^\\circ, 90^\\circ$).' },
          { label: 'Step 4', text: 'Area $= \\frac{1}{2} \\times AB \\times AC = \\frac{1}{2} \\times 5 \\times 5 = \\frac{25}{2}$ square units.' }
        ],
        result: 'Isoceles right-angled at $A$ with legs $5, 5$ and hypotenuse $5\\sqrt{2}$; area $\\frac{25}{2}$.',
      },
      {
        title: 'A 2 : 1 distance locus (Apollonius circle)',
        problem: 'A point $P(x, y)$ moves so that its distance from $A(3, 0)$ is always twice its distance from $B(-3, 0)$. Find the equation of the locus and identify the curve.',
        steps: [
          { label: 'Step 1', text: '```text\ncondition: PA = 2 PB  ->  sqrt((x-3)^2 + y^2) = 2 sqrt((x+3)^2 + y^2)\n```\nWrite the condition with the distance formula: $\\sqrt{(x - 3)^2 + y^2} = 2\\sqrt{(x + 3)^2 + y^2}$.' },
          { label: 'Step 2', text: 'Square both sides (safe — both nonnegative): $(x - 3)^2 + y^2 = 4\\left[(x + 3)^2 + y^2\\right]$. Expand: $x^2 - 6x + 9 + y^2 = 4x^2 + 24x + 36 + 4y^2$.' },
          { label: 'Step 3', text: 'Collect everything to one side: $0 = 3x^2 + 30x + 27 + 3y^2$, and divide by 3: $x^2 + y^2 + 10x + 9 = 0$.' },
          { label: 'Step 4', text: 'Complete the square: $(x + 5)^2 + y^2 = 25 - 9 = 16$. The locus is a circle, centre $(-5, 0)$, radius $4$. Spot-check $x = -1, y = 0$: $PA = 4, PB = 2$ — ratio $2$ ✓, and $(-1 + 5)^2 = 16$ ✓.' }
        ],
        result: 'The locus is the circle $(x + 5)^2 + y^2 = 16$, centre $(-5, 0)$, radius $4$.',
      },
    ],
    keyTakeaways: [
      'Distance is Pythagoras: $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$; three points are collinear iff one distance equals the sum of the other two.',
      'Internal section: $\\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)$; a negative result ratio signals external division.',
      'Locus recipe: general point $P(x, y)$, translate the condition, simplify — the equation is the answer.',
      '$PA = k \\cdot PB$ gives a line when $k = 1$ and a circle otherwise; the conics are loci built by the same recipe.',
    ],
    quiz: [
      {
        q: 'The distance between the points $(5, -2)$ and $(-1, 6)$ is',
        options: [`$\\sqrt{68}$`, `$10$`, `$100$`, `$8$`],
        answer: 1,
        explanation: 'Step 1: Compute the separations: $\\Delta x = -1 - 5 = -6$ and $\\Delta y = 6 - (-2) = 8$. Step 2: Apply the formula: $\\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Step 3: The value $100$ is the squared distance — a common bookkeeping slip. Step 4: The $6$–$8$–$10$ triple is Pythagoras, worth recognising on sight.',
      },
      {
        q: 'The midpoint of the segment joining $(2a, 3b)$ and $(4a, -b)$ is',
        options: [`$(6a, 2b)$`, `$(3a, b)$`, `$(3a, -b)$`, `$(2a, b)$`],
        answer: 1,
        explanation: 'Step 1: The midpoint is the coordinatewise average. Step 2: $x$-coordinate: $\\frac{2a + 4a}{2} = 3a$. Step 3: $y$-coordinate: $\\frac{3b + (-b)}{2} = b$. Step 4: So the midpoint is $(3a, b)$ — option $(6a, 2b)$ adds instead of averaging.',
      },
      {
        q: 'The point dividing the segment from $(1, 2)$ to $(4, 5)$ internally in the ratio $2 : 1$ is',
        options: [`$(2, 3)$`, `$(9, 12)$`, `$(3, 4)$`, `$(5, 6)$`],
        answer: 2,
        explanation: 'Step 1: Apply $\\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)$ with $m = 2, n = 1$. Step 2: $x = \\frac{2 \\cdot 4 + 1 \\cdot 1}{3} = \\frac{9}{3} = 3$; $y = \\frac{2 \\cdot 5 + 1 \\cdot 2}{3} = \\frac{12}{3} = 4$. Step 3: So the point is $(3, 4)$; check $AP = 2\\sqrt{2}$ and $PB = \\sqrt{2}$, ratio $2 : 1$ ✓. Step 4: Option $(9, 12)$ forgets to divide by $m + n = 3$.',
      },
      {
        q: 'The locus of points $P$ with $PA = PB$, where $A = (2, 0)$ and $B = (-2, 0)$, is',
        options: [`$y = 0$`, `$x + y = 0$`, `$x^2 + y^2 = 4$`, `$x = 0$`],
        answer: 3,
        explanation: 'Step 1: Write the condition: $(x - 2)^2 + y^2 = (x + 2)^2 + y^2$. Step 2: Expand and cancel $x^2 + y^2$ from both sides: $-8x = 8x$. Step 3: Hence $x = 0$ — the $y$-axis, i.e. the perpendicular bisector of the horizontal segment $AB$. Step 4: The circle option would come from $PA = 2$ (a fixed distance), a different condition entirely.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 11 · 11.1
  {
    sectionId: 'math-a10-s6',
    readingTime: 8,
    prerequisites: [
      'Plane coordinate geometry: distance and section formulae (Unit 10)',
      'Squares, cubes and simplifying radicals',
    ],
    intro: 'Space needs one more axis: a point is now a triple $(x, y, z)$, located by three mutually perpendicular coordinate planes through the origin. The distance formula gains one squared term, $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}$, and the section formula gains one column, but the logic is identical to the plane. engineering assessment keeps this unit short and method-driven — identify the octant, compute a distance, apply a ratio — which makes these marks the fastest in the paper once the coordinate arithmetic is automatic.',
    objectives: [
      'Locate points $(x, y, z)$ in octants and compute distances to the coordinate planes and axes',
      'Apply the 3-D distance formula to classify triangles in space and detect collinearity',
      'Divide segments in the ratio $m : n$ internally and externally, and use centroid averages',
      'Recover unknown coordinates or ratios from distance and section conditions, including cuts by coordinate planes',
    ],
    concepts: [
      {
        term: 'Coordinates in space',
        kind: 'definition',
        statement: 'A point in space is a triple $(x, y, z)$; the signs of the three coordinates pick one of **eight octants**, and the coordinate planes are the sets $x = 0$, $y = 0$, $z = 0$.',
        detail: 'The point $(a, b, c)$ lies $|a|$ from the $yz$-plane, $|b|$ from the $xz$-plane and $|c|$ from the $xy$-plane; its distance from the $x$-axis is $\\sqrt{b^2 + c^2}$ (drop the coordinate along the axis) and from the origin $\\sqrt{a^2 + b^2 + c^2}$. Points like $(-2, 3, -4)$ occupy the octant with signs $(-, +, -)$ — sign reading is a free engineering assessment mark.',
      },
      {
        term: 'Distance formula in space',
        kind: 'law',
        statement: '**$|PQ| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$** — the body diagonal of the box built on the three coordinate separations.',
        detail: 'It is Pythagoras applied twice, which is why space inherits the plane\'s consequences: collinearity still means $PQ + QR = PR$, and the fixed-distance locus $PA = r$ is now the sphere $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$ centred at $A$. Triangle classification by squared sides works exactly as in Unit 10.',
      },
      {
        term: 'Section formula in space',
        kind: 'law',
        statement: 'The point dividing $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$ in the ratio $m : n$ is **$\\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}, \\frac{mz_2 + nz_1}{m+n}\\right)$** — the same recipe, run on three columns instead of two.',
        detail: 'The midpoint averages the triples, and the centroid of a triangle averages its three vertices coordinatewise. External division again replaces $n$ by $-n$. Because the formula is coordinatewise, any single coordinate can be solved for independently — the key to plane-cut problems.',
      },
      {
        term: 'Ratio hunting with k : 1',
        kind: 'method',
        statement: 'When a ratio is unknown, **call it $k : 1$** and write the section formula; each known coordinate or condition then produces one linear equation in $k$.',
        detail: 'A negative solution for $k$ means the division is external — the point lies outside the segment. This device converts "find the ratio in which the plane cuts the segment" into "set one coordinate to zero and solve", the classic engineering assessment pattern in the worked example.',
      },
      {
        term: 'Spheres, bisector planes',
        kind: 'insight',
        statement: 'Distance conditions in space upgrade the plane loci: $PA = r$ is a **sphere**, and $PA = PB$ is the **bisector plane** of $AB$ — the set of points equidistant from two fixed points.',
        detail: 'Subtracting the squared equations $PA^2 = PB^2$ cancels the quadratic terms and leaves a linear equation in $x, y, z$ — the plane. This preview is the bridge to Unit 12 vectors, where the same equidistance computation is done with dot products, and to the lines and angles of Sections 11.2 and 11.3.',
      },
    ],
    examples: [
      {
        title: 'A 5–12–13 triangle in space',
        problem: 'Show that the points $A(1, 1, 1)$, $B(4, 5, 1)$ and $C(1, 1, 13)$ form a right-angled triangle and find its area.',
        steps: [
          { label: 'Step 1', text: '```text\nAB: dx=3, dy=4, dz=0  ->  5 ;  AC: dx=0, dy=0, dz=12  ->  12\n```\n$AB = \\sqrt{(4-1)^2 + (5-1)^2 + (1-1)^2} = \\sqrt{9 + 16 + 0} = 5$ and $AC = \\sqrt{0 + 0 + 144} = 12$.' },
          { label: 'Step 2', text: 'The third side: $BC = \\sqrt{(4-1)^2 + (5-1)^2 + (1-13)^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.' },
          { label: 'Step 3', text: 'Pythagoras check on the largest side: $AB^2 + AC^2 = 25 + 144 = 169 = BC^2$ ✓. The right angle is at $A$ — one leg runs within the plane $z = 1$, the other straight up the line $x = 1, y = 1$.' },
          { label: 'Step 4', text: 'Area $= \\frac{1}{2} \\times AB \\times AC = \\frac{1}{2} \\times 5 \\times 12 = 30$ square units.' }
        ],
        result: 'Right-angled at $A$ with sides $5, 12, 13$; area $30$.',
      },
      {
        title: 'Where the xy-plane cuts a segment',
        problem: 'Find the ratio in which the $xy$-plane divides the segment joining $A(1, 2, 3)$ and $B(4, 5, 6)$, and give the coordinates of the dividing point.',
        steps: [
          { label: 'Step 1', text: '```text\nlet the ratio be k : 1;  the xy-plane means z = 0\n```\nWrite the dividing point with the section formula: $P = \\left(\\frac{4k + 1}{k+1}, \\frac{5k + 2}{k+1}, \\frac{6k + 3}{k+1}\\right)$.' },
          { label: 'Step 2', text: 'Impose the plane: $z = 0$ gives $\\frac{6k + 3}{k + 1} = 0$, so $6k + 3 = 0$ and $k = -\\frac{1}{2}$ (with $k \\ne -1$).' },
          { label: 'Step 3', text: 'A negative $k$ means external division: $k : 1 = -\\frac{1}{2} : 1 = 1 : -2$, i.e. the $xy$-plane cuts the segment externally in the ratio $1 : 2$ — the point lies beyond $A$, not between $A$ and $B$.' },
          { label: 'Step 4', text: 'Compute the point: $x = \\frac{4(-\\frac{1}{2}) + 1}{\\frac{1}{2}} = -2$ and $y = \\frac{5(-\\frac{1}{2}) + 2}{\\frac{1}{2}} = -1$, so $P(-2, -1, 0)$. Check: $AP = \\sqrt{27} = 3\\sqrt{3}$, $PB = \\sqrt{108} = 6\\sqrt{3}$ — indeed $1 : 2$ ✓.' }
        ],
        result: 'The $xy$-plane divides $AB$ externally in the ratio $1 : 2$, at the point $(-2, -1, 0)$.',
      },
    ],
    keyTakeaways: [
      'Octants are fixed by the signs of $x, y, z$; the point $(a, b, c)$ sits $|c|$ from the $xy$-plane and $\\sqrt{b^2 + c^2}$ from the $x$-axis.',
      'The 3-D distance formula adds one squared difference; $PA = r$ in space is the sphere $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$.',
      'The section formula runs coordinatewise; letting the ratio be $k : 1$ turns "find the ratio" into a single linear equation.',
      'A coordinate plane cuts a segment where that coordinate is zero; a negative $k$ means the division is external.',
    ],
    quiz: [
      {
        q: 'The distance of the point $(3, 4, 5)$ from the $xy$-plane is',
        options: [`$5$`, `$\\sqrt{50}$`, `$3$`, `$7$`],
        answer: 0,
        explanation: 'Step 1: The $xy$-plane is $z = 0$, so only the $z$-coordinate matters. Step 2: The distance is $|z| = |5| = 5$. Step 3: The value $\\sqrt{50}$ is the distance from the origin, using all three coordinates. Step 4: The value $3$ is the distance from the $yz$-plane.',
      },
      {
        q: 'The midpoint of the segment joining $(2, 3, 4)$ and $(6, 7, 8)$ is',
        options: [`$(8, 10, 12)$`, `$(4, 5, 6)$`, `$(3, 5, 7)$`, `$(5, 6, 7)$`],
        answer: 1,
        explanation: 'Step 1: The midpoint averages each coordinate. Step 2: $x = \\frac{2+6}{2} = 4$, $y = \\frac{3+7}{2} = 5$, $z = \\frac{4+8}{2} = 6$. Step 3: So the midpoint is $(4, 5, 6)$. Step 4: Option $(8, 10, 12)$ adds the coordinates instead of averaging — the plane-geometry error repeated in space.',
      },
      {
        q: 'The point that divides the segment from $A(1, 2, 3)$ to $B(7, 8, 9)$ internally in the ratio $AP : PB = 1 : 2$ is',
        options: [`$(5, 6, 7)$`, `$(4, 5, 6)$`, `$(3, 4, 5)$`, `$(9, 12, 15)$`],
        answer: 2,
        explanation: 'Step 1: With $m : n = 1 : 2$, $P = \\left(\\frac{1 \\cdot 7 + 2 \\cdot 1}{3}, \\frac{1 \\cdot 8 + 2 \\cdot 2}{3}, \\frac{1 \\cdot 9 + 2 \\cdot 3}{3}\\right)$. Step 2: Each coordinate: $\\frac{9}{3} = 3$, $\\frac{12}{3} = 4$, $\\frac{15}{3} = 5$. Step 3: So $P = (3, 4, 5)$; check $AP = 2\\sqrt{3}$, $PB = 4\\sqrt{3}$ — ratio $1 : 2$ ✓. Step 4: $(4, 5, 6)$ is the midpoint ($1 : 1$) and $(5, 6, 7)$ the $2 : 1$ point — the two mirror traps.',
      },
      {
        q: 'The distance between the points $(1, 2, 3)$ and $(4, 6, 3)$ is',
        options: [`$7$`, `$\\sqrt{34}$`, `$25$`, `$5$`],
        answer: 3,
        explanation: 'Step 1: Separations: $\\Delta x = 3$, $\\Delta y = 4$, $\\Delta z = 0$. Step 2: Distance $= \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$. Step 3: The zero $z$-separation means the segment lies in the plane $z = 3$ — the plane formula would have sufficed. Step 4: The value $25$ forgets the square root; $\\sqrt{34}$ miscomputes a separation.',
      },
    ],
  },
  // ---------------------------------------------------------------- Unit 14 · 14.1
  {
    sectionId: 'math-a7-s6',
    readingTime: 9,
    prerequisites: [
      'Right-triangle definitions of $\\sin$, $\\cos$ and $\\tan$',
      'The unit circle and radian measure',
      'Solving quadratic equations',
    ],
    intro: 'Extend the ratios $\\sin\\theta$ and $\\cos\\theta$ from a right triangle to the whole unit circle: for any angle $\\theta$, the point at arc-length $\\theta$ from $(1, 0)$ is $(\\cos\\theta, \\sin\\theta)$, and the other four functions follow. Quadrant signs — all positive in the first, only $\\sin$ in the second, only $\\tan$ in the third, only $\\cos$ in the fourth — together with periodicity $2\\pi$ (and $\\pi$ for $\\tan$) drive every engineering assessment question in this unit, from sign hunting to general solutions of trigonometric equations.',
    objectives: [
      'Place any angle in the correct quadrant, reduce it with allied-angle formulas and fix the sign',
      'Recall exact values at $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$ and shift angles by full periods',
      'State the domains and ranges of all six functions and deploy $\\sin^2\\theta + \\cos^2\\theta = 1$',
      'Write general solutions of $\\sin\\theta = k$-style equations from the unit-circle picture',
    ],
    concepts: [
      {
        term: 'Unit circle definitions',
        kind: 'definition',
        statement: 'The point on the unit circle at angle $\\theta$ is **$(\\cos\\theta, \\sin\\theta)$**; then $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cosec\\theta = \\frac{1}{\\sin\\theta}$ and $\\cot\\theta = \\frac{1}{\\tan\\theta}$.',
        detail: 'Signs by quadrant follow from the coordinates — the ASTC rule (All, Sin, Tan, Cos): Q1 all positive; Q2 only $\\sin$ (and $\\cosec$); Q3 only $\\tan$ (and $\\cot$); Q4 only $\\cos$ (and $\\sec$). A condition pair like $\\sin\\theta < 0, \\tan\\theta > 0$ pins the quadrant uniquely: Q3.',
      },
      {
        term: 'Domains, ranges and the fundamental identity',
        kind: 'law',
        statement: 'For all $\\theta$: **$-1 \\le \\sin\\theta \\le 1$ and $-1 \\le \\cos\\theta \\le 1$**, with $\\tan\\theta$ ranging over all reals but undefined at odd multiples of $\\frac{\\pi}{2}$; and $\\sin^2\\theta + \\cos^2\\theta = 1$, which implies $1 + \\tan^2\\theta = \\sec^2\\theta$ and $1 + \\cot^2\\theta = \\cosec^2\\theta$.',
        detail: 'The bounds instantly reject impossible equations: $\\sin\\theta = \\frac{3}{2}$ has no solution, a one-line elimination in engineering assessment. Also $|\\sec\\theta| \\ge 1$ and $|\\cosec\\theta| \\ge 1$ since they are reciprocals of numbers of modulus at most 1. When a quadratic in $\\sin\\theta$ produces roots, keep only those in $[-1, 1]$.',
      },
      {
        term: 'Allied angle reductions',
        kind: 'method',
        statement: 'Angles $\\frac{\\pi}{2} \\pm \\theta$ **change the function** (sin to cos and vice versa); angles $\\pi \\pm \\theta$ and $2\\pi \\pm \\theta$ **keep it** — in every case the sign is that of the original function at the quadrant of the compound angle, treating $\\theta$ as acute.',
        detail: 'Key instances: $\\sin(\\pi - \\theta) = \\sin\\theta$, $\\cos(\\pi - \\theta) = -\\cos\\theta$, $\\sin(\\pi + \\theta) = -\\sin\\theta$, $\\cos(\\pi + \\theta) = -\\cos\\theta$, $\\tan(\\pi + \\theta) = \\tan\\theta$, $\\sin(2\\pi - \\theta) = -\\sin\\theta$, $\\cos(2\\pi - \\theta) = \\cos\\theta$. Worked example: $\\cos 240^\\circ = \\cos(180^\\circ + 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.',
      },
      {
        term: 'Periodicity',
        kind: 'law',
        statement: '**$\\sin$ and $\\cos$ have period $2\\pi$; $\\tan$ and $\\cot$ have period $\\pi$** — shifting the input by a full period returns the same value: $\\sin(\\theta + 2\\pi) = \\sin\\theta$, $\\tan(\\theta + \\pi) = \\tan\\theta$.',
        detail: 'Periodicity is what makes reduction of huge angles trivial: $\\sin(-1050^\\circ) = \\sin(-1050^\\circ + 3 \\times 360^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$. It also guarantees that every solvable trigonometric equation has infinitely many solutions, spaced by the period — the reason general solutions exist.',
      },
      {
        term: 'General solutions',
        kind: 'theorem',
        statement: 'For $n \\in \\mathbb{Z}$: $\\sin\\theta = \\sin\\alpha \\Rightarrow \\theta = n\\pi + (-1)^n\\alpha$; **$\\cos\\theta = \\cos\\alpha \\Rightarrow \\theta = 2n\\pi \\pm \\alpha$**; $\\tan\\theta = \\tan\\alpha \\Rightarrow \\theta = n\\pi + \\alpha$.',
        detail: 'Each formula packages the unit-circle symmetry: a horizontal line $y = k$ meets the circle at two points whose angles are supplementary, and the sine family alternates between them (hence $(-1)^n$); a vertical line meets at angles $\\pm\\alpha$ (hence the $\\pm$); tangent repeats its value after a half-turn (hence the plain $n\\pi$). Special handy cases: $\\sin\\theta = 0 \\Rightarrow \\theta = n\\pi$ and $\\cos\\theta = 0 \\Rightarrow \\theta = (2n+1)\\frac{\\pi}{2}$.',
      },
    ],
    examples: [
      {
        title: 'Signs and reduction across quadrants',
        problem: 'Evaluate $\\dfrac{\\sin(-1050^\\circ) \\cdot \\cos 240^\\circ}{\\tan 225^\\circ}$.',
        steps: [
          { label: 'Step 1', text: '```text\n-1050 + 3 x 360 = 30;  240 = 180 + 60;  225 = 180 + 45\n```\nReduce the first angle by adding three full periods: $-1050^\\circ + 1080^\\circ = 30^\\circ$, so $\\sin(-1050^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$.' },
          { label: 'Step 2', text: 'Reduce the second: $240^\\circ = 180^\\circ + 60^\\circ$ lies in Q3 where cosine is negative, and $\\pi + \\theta$ keeps the function: $\\cos 240^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$.' },
          { label: 'Step 3', text: 'Reduce the third: $225^\\circ = 180^\\circ + 45^\\circ$, and $\\tan(\\pi + \\theta) = \\tan\\theta$, so $\\tan 225^\\circ = \\tan 45^\\circ = 1$.' },
          { label: 'Step 4', text: 'Combine: $\\frac{\\frac{1}{2} \\times (-\\frac{1}{2})}{1} = -\\frac{1}{4}$.' }
        ],
        result: 'The value is $-\\frac{1}{4}$.',
      },
      {
        title: 'General solution of a quadratic in sin θ',
        problem: 'Find the general solution of $2\\sin^2\\theta - 3\\sin\\theta + 1 = 0$.',
        steps: [
          { label: 'Step 1', text: '```text\nput u = sin(theta): 2u^2 - 3u + 1 = 0\n```\nTreat the equation as a quadratic in $u = \\sin\\theta$: the discriminant is $9 - 8 = 1$, so $u = \\frac{3 \\pm 1}{4}$, i.e. $u = 1$ or $u = \\frac{1}{2}$. Both lie in $[-1, 1]$, so both are usable.' },
          { label: 'Step 2', text: 'For $\\sin\\theta = \\frac{1}{2}$: the reference angle is $\\frac{\\pi}{6}$ (Q1) with the mirror solution $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (Q2). The general solution is $\\theta = n\\pi + (-1)^n \\frac{\\pi}{6}$, $n \\in \\mathbb{Z}$.' },
          { label: 'Step 3', text: 'For $\\sin\\theta = 1$: sine reaches its peak exactly at $\\frac{\\pi}{2}$, repeating every $2\\pi$, so $\\theta = 2n\\pi + \\frac{\\pi}{2}$.' },
          { label: 'Step 4', text: 'The full solution set is the union of both families. In $[0, 2\\pi)$ this gives $\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$ — check each in the original equation: $2 \\cdot \\frac{1}{4} - 3 \\cdot \\frac{1}{2} + 1 = 0$ ✓ and $2 - 3 + 1 = 0$ ✓.' }
        ],
        result: '$\\theta = n\\pi + (-1)^n\\frac{\\pi}{6}$ or $\\theta = 2n\\pi + \\frac{\\pi}{2}$, $n \\in \\mathbb{Z}$; within $[0, 2\\pi)$: $\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$.',
      },
    ],
    keyTakeaways: [
      'The unit-circle point at angle $\\theta$ is $(\\cos\\theta, \\sin\\theta)$; quadrant signs follow the ASTC rule.',
      'The bounds $|\\sin\\theta| \\le 1$ and $|\\cos\\theta| \\le 1$ reject impossible equations and out-of-range quadratic roots instantly.',
      'Periods: $2\\pi$ for $\\sin$ and $\\cos$, $\\pi$ for $\\tan$ — reduce large angles by whole periods before anything else.',
      'General solutions: $\\sin\\theta = \\sin\\alpha \\Rightarrow n\\pi + (-1)^n\\alpha$; $\\cos\\theta = \\cos\\alpha \\Rightarrow 2n\\pi \\pm \\alpha$; $\\tan\\theta = \\tan\\alpha \\Rightarrow n\\pi + \\alpha$.',
    ],
    quiz: [
      {
        q: 'If $\\sin\\theta < 0$ and $\\cos\\theta > 0$, then $\\theta$ lies in',
        options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
        answer: 3,
        explanation: 'Step 1: Negative sine places the angle in Q3 or Q4 (below the $x$-axis). Step 2: Positive cosine places it in Q1 or Q4 (right of the $y$-axis). Step 3: The overlap is Q4, where only cosine is positive — matching the ASTC letter C. Step 4: In Q4 the point $(\\cos\\theta, \\sin\\theta)$ has positive $x$ and negative $y$ ✓.',
      },
      {
        q: 'The value of $\\cos 330^\\circ$ is',
        options: [`$\\frac{\\sqrt{3}}{2}$`, `$-\\frac{\\sqrt{3}}{2}$`, `$\\frac{1}{2}$`, `$-\\frac{1}{2}$`],
        answer: 0,
        explanation: 'Step 1: Reduce: $330^\\circ = 360^\\circ - 30^\\circ$, and $2\\pi - \\theta$ keeps the function. Step 2: So $\\cos 330^\\circ = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$. Step 3: The angle sits in Q4, where cosine is indeed positive — sign check passes. Step 4: $-\\frac{\\sqrt{3}}{2}$ would be $\\cos 210^\\circ = \\cos(180^\\circ + 30^\\circ)$.',
      },
      {
        q: 'The general solution of $\\tan\\theta = 1$ is',
        options: [`$2n\\pi + \\frac{\\pi}{4}$`, `$n\\pi + \\frac{\\pi}{4}$`, `$n\\pi + (-1)^n\\frac{\\pi}{4}$`, `$n\\pi \\pm \\frac{\\pi}{4}$`],
        answer: 1,
        explanation: 'Step 1: The reference solution is $\\theta = \\frac{\\pi}{4}$ since $\\tan\\frac{\\pi}{4} = 1$. Step 2: Tangent has period $\\pi$, so every shift by $n\\pi$ also solves it: $\\theta = n\\pi + \\frac{\\pi}{4}$. Step 3: The $2n\\pi$ form would skip every other solution — $\\frac{5\\pi}{4}$ also works. Step 4: The $(-1)^n$ pattern belongs to sine equations; the $\\pm$ pattern to cosine.',
      },
      // PYQ-pattern: range rejection
      {
        q: 'The number of solutions of $\\sin\\theta = \\frac{3}{2}$ in $[0, 2\\pi]$ is',
        options: [`$0$`, `$1$`, `$2$`, 'infinitely many'],
        answer: 0,
        explanation: 'Step 1: On the unit circle $\\sin\\theta$ is the $y$-coordinate, which cannot leave $[-1, 1]$. Step 2: The horizontal line $y = \\frac{3}{2}$ lies entirely above the circle and never meets it. Step 3: Hence there are no solutions at all — the range bound alone settles the question. Step 4: The value $2$ would be correct for $\\sin\\theta = \\frac{1}{2}$, where the line cuts the circle twice.',
      },
    ],
  },
]
