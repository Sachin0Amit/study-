/**
 * Knowledge Universe — Mathematics — Chapter 02: Algebra
 * 3 lessons · ~4,927 words
 * field: Algebra
 * legacy sources: x29-orphan-closure-pass.ts, x63-cengage-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Algebra]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 math-algebra-notation-manipulation — Algebraic Notation and Manipulation: The Grammar of Expressions
 *   02.2 math-quadratics-completing-square — Quadratics: Four Ways to Solve, One Formula to Rule Them
 *   02.3 math-modulus-logarithm-inequalities — Modulus and Logarithm Inequalities: The Algebra of Distance and of Growth
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh02: KnowledgeTopic[] = [
  {
    id: 'math-algebra-notation-manipulation',
    title: 'Algebraic Notation and Manipulation: The Grammar of Expressions',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Elementary Algebra',
    tier: 'core',
    concepts: [
      'Terms, coefficients, variables, degrees',
      'Collecting like terms',
      'Expanding brackets with the distributive law',
      'Factorising: common factor first',
      'Difference of squares and quadratic factor patterns',
      'Rearranging formulae: inverse operations in order',
      'Identities versus equations',
      'Substitution and evaluation',
    ],
    words: 1409,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Algebra is a written language for computation, and manipulation is its grammar: simplify, expand, factorise, rearrange. Every later technique — solving quadratics, differentiating, computing with matrices — assumes these moves are automatic. The vocabulary matters as much as the moves, because questions are phrased in it: \u201csimplify\u201d means make shorter without changing value; \u201cexpand\u201d means multiply out; \u201cfactorise\u201d means reverse that; \u201crearrange\u201d means solve for a named letter. Mixing up the commands is the most common way strong arithmetic students lose algebra marks.',
      },
      {
        kind: 'para',
        text: 'This lesson drills the grammar to fluency: reading expressions through their anatomy (terms, coefficients, degrees), the three core moves (collect, expand, factorise) and the fourth (rearranging formulae), with the identity/equation distinction drawn sharply. The quadratics lesson then puts the machinery to work solving equations.',
      },
      { kind: 'heading', text: 'The anatomy of an expression' },
      {
        kind: 'para',
        text: 'An expression like 3x\u00b2 \u2212 5x + 7 is built from terms — the pieces separated by plus and minus signs (here: 3x\u00b2, \u22125x, 7). Each term has a coefficient (the number multiplying the letters: 3, \u22125, and 7 as a constant term) and a degree (the total exponent of its variables: x\u00b2 has degree 2, x has degree 1, a constant has degree 0); the degree of the whole expression is its highest term degree. Like terms share exactly the same letters raised to exactly the same powers — 5x and \u22122x are like; 5x and 5x\u00b2 are not. This vocabulary is what exam questions test directly: \u201cstate the coefficient of x in \u2026\u201d, \u201cwhat is the degree of \u2026\u201d — one-word answers that cost marks if the language is fuzzy.',
      },
      { kind: 'heading', text: 'The core moves' },
      {
        kind: 'para',
        text: 'Collecting like terms: add or subtract the coefficients of like terms and keep the shared letter part. 7a + 3b \u2212 2a + b = 5a + 4b. The sign belongs to the term that follows it — the classic error is dropping a minus during collection, so underline terms with their signs before combining. Expanding brackets uses the distributive law: multiply the outside by everything inside. 3(2x \u2212 5) = 6x \u2212 15; double brackets produce four products: (x + 2)(x + 3) = x\u00b2 + 3x + 2x + 6 = x\u00b2 + 5x + 6 — the middle coefficient is the sum of the inner numbers, the end product their product. Two signs in a row obey minus-times-minus: (x \u2212 4)(x \u2212 3) = x\u00b2 \u2212 7x + 12.',
      },
      {
        kind: 'para',
        text: 'Factorising reverses expansion, and the order of attempts is fixed. First, take out the highest common factor: 6x\u00b2 + 9x = 3x(2x + 3) — always check for one before anything fancier. Second, recognize named patterns: the difference of squares a\u00b2 \u2212 b\u00b2 = (a \u2212 b)(a + b) — x\u00b2 \u2212 49 = (x \u2212 7)(x + 7) — and the perfect square a\u00b2 \u00b1 2ab + b\u00b2 = (a \u00b1 b)\u00b2. Third, for quadratics like x\u00b2 + bx + c, hunt a factor pair of c that sums to b: x\u00b2 \u2212 x \u2212 12 = (x \u2212 4)(x + 3) because (\u22124)(+3) = \u221212 and \u22124 + 3 = \u22121. Every factorisation can be checked instantly by expanding back — an exam habit that costs ten seconds and saves whole marks.',
      },
      { kind: 'heading', text: 'Rearranging formulae, and identities versus equations' },
      {
        kind: 'para',
        text: 'Rearranging a formula is solving with a letter as the target: undo the operations in reverse order, doing to both sides whatever you do. From A = 2\u03c0r, divide both sides by 2\u03c0: r = A/(2\u03c0). From v = u + at: subtract u, then divide by a — t = (v \u2212 u)/a. Two discipline points: keep the operations symmetric (whatever happens left happens right), and when the target letter appears in more than one term, collect those terms first and factor the letter out — from ax \u2212 bx = c, factor x(a \u2212 b) = c, then x = c/(a \u2212 b). That last maneuver — factorise to isolate — is the one examiners build \u201chard\u201d rearrangement questions from.',
      },
      {
        kind: 'para',
        text: 'Finally, keep identities and equations apart. An equation is true for particular values: 2x = 10 holds only at x = 5. An identity is true for every value: 2(x + 3) \u2261 2x + 6, and (a \u00b2 \u2212 b\u00b2) \u2261 (a \u2212 b)(a + b) — identities are marked with \u2261 and are the expansion and factorisation patterns stated as facts. The practical test: an equation you solve; an identity you verify or use. Questions of the form \u201cshow that \u2026\u201d are identity questions — expand or factorise one side into the other, no solving allowed, and saying \u201cx = 5\u201d there is a category error that costs the mark.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One expression, all four commands',
        steps: [
          'Start: 3x(2x \u2212 5) \u2212 2x(x \u2212 4) + 7x.',
          'Expand: 6x\u00b2 \u2212 15x \u2212 2x\u00b2 + 8x + 7x — each bracket product keeps its sign.',
          'Collect like terms: (6 \u2212 2)x\u00b2 + (\u221215 + 8 + 7)x = 4x\u00b2 + 0x = 4x\u00b2.',
          'Factorise the result: 4x\u00b2 = 4x \u00b7 x, so 4x\u00b2 = (2x)\u00b2 \u2212 0\u00b2 — a difference of squares with b = 0; more usefully, its highest common factor form is 4x\u00b2 = 4x(x).',
          'Rearrange practice with the same shapes: from 4x\u00b2 \u2212 k = y, add k and square-root: x = \u00b1\u221a((y + k)/4) — reverse order, symmetric operations, both roots.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the expression 5x\u00b3 \u2212 2x + 8, what is the coefficient of x and the degree of the expression?',
            options: [
              'coefficient \u22122; degree 3',
              'coefficient 2; degree 3',
              'coefficient \u22122; degree 8',
              'coefficient 5; degree 3',
            ],
            answer: 0,
            explain: 'The x-term is \u22122x, so its coefficient is \u22122 (sign included); the highest term degree is 3, which is the expression\u2019s degree.',
          },
          {
            q: 'Expand and simplify (x \u2212 3)(x + 5).',
            options: [
              'x\u00b2 + 2x \u2212 15',
              'x\u00b2 \u2212 2x \u2212 15',
              'x\u00b2 + 8x \u2212 15',
              'x\u00b2 \u2212 15',
            ],
            answer: 0,
            explain: 'Four products: x\u00b2 + 5x \u2212 3x \u2212 15 = x\u00b2 + 2x \u2212 15. Middle coefficient = 5 + (\u22123) = 2; constant = 5 \u00d7 (\u22123) = \u221215.',
          },
          {
            q: 'Factorise 4x\u00b2 \u2212 25.',
            options: [
              '(2x \u2212 5)(2x + 5)',
              '(4x \u2212 5)(x + 5)',
              '(2x \u2212 5)\u00b2',
              'cannot be factorised',
            ],
            answer: 0,
            explain: 'Difference of squares: 4x\u00b2 = (2x)\u00b2 and 25 = 5\u00b2, so a\u00b2 \u2212 b\u00b2 = (a \u2212 b)(a + b) with a = 2x, b = 5.',
          },
          {
            q: 'Rearrange p = 2(a + b) to make b the subject.',
            options: [
              'b = p \u2212 2a',
              'b = (p \u2212 2a)/2',
              'b = p/(2a)',
              'b = 2(p \u2212 a)',
            ],
            answer: 1,
            explain: 'Divide both sides by 2 first (a + b = p/2), then subtract a: b = p/2 \u2212 a, which equals (p \u2212 2a)/2. Reverse order, symmetric operations.',
          },
          {
            q: 'Which statement is an identity rather than an equation?',
            options: [
              '3x + 1 = 10',
              'x\u00b2 = 16',
              '(x + 1)\u00b2 \u2261 x\u00b2 + 2x + 1',
              '2x \u2212 4 = 0',
            ],
            answer: 2,
            explain: 'It holds for every x — an expansion pattern stated as a fact, marked with \u2261. The others hold only for specific values and are solved.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Dropping a minus while collecting or expanding — carry signs attached to their terms. Multiplying only the first inside term by the outside bracket — the distributive law hits everything inside. Forgetting the highest common factor check before fancy factorising. Announcing (a + b)\u00b2 = a\u00b2 + b\u00b2 — the middle term 2ab is the most-exploited error in algebra. Rearranging by moving symbols across without operating on both sides. Solving when the question says \u201cshow that\u201d — identity verification needs expansion or factorisation, not a solution. And treating x\u00b2 + 5x + 6 as (x + 6)(x + 1): the product 6 pairs with sum 5 via 2 and 3, not 6 and 1.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: arithmetic fluency with negatives and fractions. Follow immediately with the quadratics lesson — this lesson\u2019s factorising is that lesson\u2019s first solving method — and then with simultaneous equations and graph-sketching topics. Primary reading: OpenStax, Intermediate Algebra 2e, ch.1 \u201cThe Language of Algebra\u201d for the vocabulary and ch.9\u2019s factoring review for the patterns (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Anatomy: terms, coefficients (sign included), degrees (highest wins).',
        'Collect like terms — identical letter parts only, signs carried.',
        'Expand with the distributive law; double brackets give four products.',
        'Factorise in order: common factor, named patterns, factor pair of c summing to b.',
        'Rearrange: reverse order, symmetric operations, factor the target out when it repeats.',
        'Equations are solved; identities (\u2261) are shown — different commands entirely.',
      ] },
    ],
  },
  {
    id: 'math-quadratics-completing-square',
    title: 'Quadratics: Four Ways to Solve, One Formula to Rule Them',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Quadratic Equations',
    tier: 'core',
    concepts: [
      'Standard form ax\u00b2 + bx + c = 0',
      'Solving by factorising',
      'The square-root property',
      'Completing the square: the recipe and why it works',
      'The quadratic formula and its four-step use',
      'The discriminant and the number of solutions',
      'Choosing the fastest method',
      'Vertex form and applications',
    ],
    words: 1471,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Quadratic equations are the boundary between school arithmetic and real algebra: the first equation type whose solutions are not obvious, and the template for every higher-degree technique that follows. Projectile heights, areas, revenue curves — when one quantity is the square of another plus a linear term, a quadratic models it. The examinable skill set is compact and fixed: put the equation in standard form, choose among four solving methods, read the discriminant to know how many solutions exist, and switch to vertex form when the question asks for a maximum or minimum. This lesson covers all four moves and the decision rule between them.',
      },
      { kind: 'heading', text: 'Standard form and the first two methods' },
      {
        kind: 'para',
        text: 'Standard form is ax\u00b2 + bx + c = 0 with a \u2260 0 — everything moved to one side, zero on the other. Every method begins here, and most lost marks on quadratics are lost before any solving: a sign dropped while moving terms poisons everything downstream. Rearrange first, identify a, b and c, then solve.',
      },
      {
        kind: 'para',
        text: 'Method one, factorising, uses the algebra lesson\u2019s machinery: x\u00b2 \u2212 x \u2212 12 = 0 factorises to (x \u2212 4)(x + 3) = 0, and a product is zero only when a factor is zero — so x = 4 or x = \u22123. Fast and clean when the factor pair is friendly. Method two, the square-root property, handles the missing-middle-term shape: x\u00b2 = k gives x = \u00b1\u221ak (both roots!), and a(x \u2212 h)\u00b2 = k gives x = h \u00b1 \u221a(k/a). The habit to keep: a square root always carries a plus-or-minus — forgetting the negative root is the single most common answer-killing slip on this method.',
      },
      { kind: 'heading', text: 'Completing the square: the recipe and the reason' },
      {
        kind: 'para',
        text: 'Completing the square rewrites any quadratic so the x appears exactly once, squared: x\u00b2 + bx + c = (x + b/2)\u00b2 + (c \u2212 b\u00b2/4). The recipe, when the leading coefficient is 1: take half of b, square it, add and subtract that square, then regroup. For x\u00b2 + 6x + 2 = 0: half of 6 is 3, squared is 9, so x\u00b2 + 6x + 2 = (x + 3)\u00b2 \u2212 9 + 2 = (x + 3)\u00b2 \u2212 7; setting this to zero gives (x + 3)\u00b2 = 7 and x = \u22123 \u00b1 \u221a7. When the leading coefficient is not 1, divide the whole equation by a first — OpenStax\u2019s Intermediate Algebra makes the same point: completing the square requires a = 1, so make it so.',
      },
      {
        kind: 'para',
        text: 'Why the maneuver works: (x + b/2)\u00b2 expands to x\u00b2 + bx + b\u00b2/4 — the square of half of b is exactly the constant that completes x\u00b2 + bx into a perfect square. Adding and subtracting b\u00b2/4 changes nothing while creating that square. Beyond solving, the form pays twice: (x \u2212 h)\u00b2 + k is the vertex form of the parabola, handing over the turning point (h, k) directly, and it is the launchpad from which the quadratic formula is derived.',
      },
      { kind: 'heading', text: 'The quadratic formula and the discriminant' },
      {
        kind: 'para',
        text: 'Method four works on every quadratic: x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/(2a). OpenStax drills a four-step procedure: write the equation in standard form and identify a, b, c; write the formula; substitute; simplify — and then CHECK the solutions by substitution. Worked example from the same text: 2x\u00b2 + 9x \u2212 5 = 0 has a = 2, b = 9, c = \u22125, giving x = (\u22129 \u00b1 \u221a(81 + 40))/4 = (\u22129 \u00b1 11)/4, so x = 1/2 or x = \u22125. The formula is an equation — start every line with x =, and keep the whole numerator over the whole denominator.',
      },
      {
        kind: 'para',
        text: 'The discriminant b\u00b2 \u2212 4ac counts the solutions before any arithmetic: positive — two distinct real roots; zero — exactly one (a repeated root; the parabola touches the axis); negative — no real roots (two complex ones). So b\u00b2 \u2212 4ac = 9 \u2212 4(1)(\u22124) style questions are answered by inspection after computing one number. The method-choice strategy rounds out the toolkit, in OpenStax\u2019s order: try factorising first if the factors are easy; use the square-root property if the shape fits; otherwise the quadratic formula — and completing the square is the method you fall back on when you must SHOW the vertex or the derivation. Applications tie it together: projectile height h = \u221216t\u00b2 + v\u2080t questions ask \u201cwhen is h = 0?\u201d (solve) or \u201cwhat is the maximum height?\u201d (vertex form, or \u2212b/2a for the time).',
      },
      {
        kind: 'example',
        title: 'Worked Example — One equation, method decision live',
        steps: [
          'Solve 2x\u00b2 \u2212 4x \u2212 3 = 0. Standard form already; a = 2, b = \u22124, c = \u22123.',
          'Method check: factorising — factors of 2 \u00d7 (\u22123) summing to \u22124? \u22126 and 2 give \u22124, but 2x\u00b2 + 2x \u2212 6x \u2212 3 resists clean grouping (2x(x+1) \u2212 3(2x+1)) — not friendly. Square-root property: no isolated square. So: quadratic formula.',
          'Formula: x = (4 \u00b1 \u221a(16 + 24))/4 = (4 \u00b1 \u221a40)/4 = (4 \u00b1 2\u221a10)/4 = (2 \u00b1 \u221a10)/2.',
          'Discriminant read: b\u00b2 \u2212 4ac = 16 + 24 = 40 > 0 — two distinct real roots, as found. (If it had been 0, the equation would collapse to one root; negative, none.)',
          'Vertex bonus: x = \u2212b/2a = 4/4 = 1; f(1) = 2 \u2212 4 \u2212 3 = \u22125. Vertex (1, \u22125) — the minimum, since a > 0. The same numbers, read two ways.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Solve x\u00b2 = 49.',
            options: ['x = 7', 'x = \u00b17', 'x = \u00b124.5', 'x = 7 or x = 0'],
            answer: 1,
            explain: 'Square-root property: x = \u00b1\u221a49 = \u00b17. Every square root in solving carries both signs — the negative root is the classic dropped solution.',
          },
          {
            q: 'What number completes the square for x\u00b2 + 10x + 3?',
            options: [
              'add and subtract 100',
              'add and subtract 25',
              'add and subtract 10',
              'add and subtract 5',
            ],
            answer: 1,
            explain: 'Half of b = 5; squared = 25. x\u00b2 + 10x + 25 = (x + 5)\u00b2, so the expression becomes (x + 5)\u00b2 \u2212 22.',
          },
          {
            q: 'For 3x\u00b2 + 2x + 5 = 0, the discriminant is',
            options: ['4 \u2212 60 = \u221256: no real solutions', '4 + 60 = 64: two solutions', '9 \u2212 20 = \u221211: no real solutions', '0: one solution'],
            answer: 0,
            explain: 'b\u00b2 \u2212 4ac = 2\u00b2 \u2212 4(3)(5) = 4 \u2212 60 = \u221256. Negative discriminant means the parabola never meets the x-axis — no real roots.',
          },
          {
            q: 'According to the standard method-choice strategy, which equation is best solved by the square-root property?',
            options: [
              'x\u00b2 + 5x + 6 = 0',
              '(x \u2212 3)\u00b2 = 12',
              '2x\u00b2 + 9x \u2212 5 = 0',
              'x\u00b4 \u2212 5x\u00b2 + 6 = 0',
            ],
            answer: 1,
            explain: 'The shape (x \u2212 h)\u00b2 = k is the square-root property\u2019s home turf: x \u2212 3 = \u00b1\u221a12 directly. The others suit factorising or the formula.',
          },
          {
            q: 'A ball\u2019s height is h = \u221216t\u00b2 + 40t. What is its maximum height?',
            options: [
              'solve \u221216t\u00b2 + 40t = 0',
              'vertex: t = \u221240/(2\u00d7(\u221216)) = 1.25, h(1.25) = 25',
              'discriminant: 1600, so height 40',
              'factorise: 8t(5 \u2212 2t), maximum 5',
            ],
            answer: 1,
            explain: 'Maxima need the vertex, not the roots: t = \u2212b/2a = 1.25 s, h(1.25) = \u221216(1.5625) + 50 = 25. Solving h = 0 finds landing time, not peak.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Solving before reaching standard form — always gather to ax\u00b2 + bx + c = 0 first. Dropping the \u00b1 on square roots, in the square-root property and the formula alike. Halving b twice or forgetting to divide by a before completing the square when a \u2260 1. Writing the formula with only part of the numerator over 2a — the whole of \u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac) sits over 2a. Announcing one solution when the discriminant is negative and \u201cno real solutions\u201d was meant — complex roots still exist. Answering maximum-height questions with roots instead of the vertex. And skipping the check — substitution catches sign slips the algebra hid.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the algebraic-notation-and-manipulation lesson — factorising and rearranging are this lesson\u2019s first and third methods. Follow with function-graphing topics (the parabola as a function\u2019s picture) and, later, the derivative lesson, whose critical points generalize the vertex. Primary reading: OpenStax, Intermediate Algebra 2e \u00a79.2 \u201cSolve Quadratic Equations by Completing the Square\u201d and \u00a79.3 \u201cSolve Quadratic Equations Using the Quadratic Formula\u201d, with \u00a79.5\u2019s projectile applications (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Standard form first: ax\u00b2 + bx + c = 0, a \u2260 0; identify a, b, c.',
        'Factorise when friendly; square-root property when a square stands alone — both roots.',
        'Complete the square: half of b, squared, added and subtracted; divide by a first if needed.',
        'Formula: x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/2a — four steps, then check.',
        'Discriminant trichotomy: positive two, zero one, negative none.',
        'Vertex from \u2212b/2a: maxima and minima live there, not at the roots.',
      ] },
    ],
  },
  {
    id: 'math-modulus-logarithm-inequalities',
    title: 'Modulus and Logarithm Inequalities: The Algebra of Distance and of Growth',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Inequalities',
    tier: 'advanced',
    concepts: [
      'Modulus as distance on the number line',
      '|x| < a and |x| > a as interval statements',
      'Sum of distances |x − a| + |x − b| and its band geometry',
      'Case-splitting versus squaring — when each is legal',
      '|f(x)| < g(x) resolved as −g < f < g',
      'Logarithm inequalities: the base decides the direction',
      'Domain first: the logarithm\u2019s argument must stay positive',
      'Exponential inequalities as mirrored logarithm problems',
    ],
    words: 2047,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Two families of inequalities dominate the algebra portion of every demanding engineering-entrance syllabus and ruin more solutions than any other topic: inequalities carrying modulus signs and inequalities carrying logarithms. They fail for the same underlying reason — both hide a branch decision. The modulus |x| is defined by cases, and the logarithm\u2019s order depends on its base. Solve either family on autopilot — multiply through, square both sides, "take log of both sides" — and the branch decision silently corrupts the answer set. The standard treatment (it heads the algebra volume of the most-used advanced series, as the chapter "Inequalities, Modulus and Logarithm") builds the discipline this lesson teaches: read the modulus as distance, read the logarithm as growth, and let the geometry and the base decide the direction before any algebra begins.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Modulus inequalities describe tolerances and error bands (a machined part within ±0.05 mm of spec, a signal within a corridor); distance-sum forms are literally how facilities and routing problems are posed; logarithm inequalities govern pH thresholds, decibel limits, earthquake magnitudes, compound-interest doubling times and every "how many digits" question in computer science. The branch discipline itself — checking which case you are in — is the same discipline required wherever piecewise functions meet inequalities.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The modulus |x − a| is the distance between x and a on the number line — this single reading generates every rule. |x| < a (with a > 0) says: x is within distance a of 0, i.e. −a < x < a, one open interval. |x| > a says: x is FARTHER than a from 0, i.e. x < −a or x > a — two rays, and the word "or" is what careless solvers drop. The same two patterns apply to |x − a| < b, the points within b of a: the interval (a − b, a + b). Watch the strictness: |x − a| ≤ b closes the endpoints. And if the right side is negative, |anything| < negative has no solution while |anything| > negative is true everywhere — checking the right side\u2019s sign first costs one second and saves whole wrong answers.',
      },
      {
        kind: 'para',
        text: 'The distance reading shines on sums. The expression |x − 2| + |x − 5| is the total walking distance from x to 2 plus from x to 5 — the classic facilities question. Between the two points the sum is constant, exactly the gap 3 (one leg shrinks as the other grows); outside, each step away adds two to the sum. So |x − 2| + |x − 5| ≥ 3 always, with equality exactly on the segment [2, 5] — the triangle inequality materialised on a line. This turns inequality questions into geometry: |x − 2| + |x − 5| < 9 asks where the total distance is under 9, and the answer is a symmetric band around the segment: the distance-budget 9 exceeds the gap by 6, split evenly, giving (2 − 3, 5 + 3) = (−1, 8). No case-splitting needed — though the case method below must give the same answer, and checking both against each other is excellent practice.',
      },
      {
        kind: 'formula',
        name: 'Distance-sum bounds',
        latex: '|x-a| + |x-b| \\;\\ge\\; |a-b| \\quad\\text{(equality exactly on } [a,b]\\text{)}',
        meaning: 'The sum of distances from x to two fixed points is least between them, where it equals the gap; every unit of movement outside the segment adds two units to the sum. Read |x−a| + |x−b| < d as a band when d exceeds the gap, empty when d is smaller.',
      },
      {
        kind: 'para',
        text: 'When geometry does not finish the job, two algebraic engines exist: case-splitting and squaring. Case-splitting is universal: the modulus\u2019s zeros chop the line into intervals, on each of which every modulus opens with a known sign, and the resulting ordinary inequalities are intersected with their own intervals before the pieces union. Squaring is faster but conditional: |f(x)| < g(x) is equivalent to f² < g² (both sides were non-negative), which factorises as (f − g)(f + g) < 0. The cleanest general form worth memorising: for g(x) > 0, the chain |f(x)| < g(x) ⟺ −g(x) < f(x) < g(x), and |f(x)| > g(x) ⟺ f(x) > g(x) or f(x) < −g(x). Never split |f(x)| < g(x) into "f(x) < ±g(x)" without the conjunction discipline — the double inequality is the safe memory.',
      },
      {
        kind: 'para',
        text: 'Logarithm inequalities add the second branch. The logarithm log_b(x) is increasing when b > 1 (each doubling of x adds a fixed amount) and DECREASING when 0 < b < 1 — the base decides the direction, exactly as the modulus\u2019s argument decides the case. So log_b(f(x)) < log_b(g(x)) becomes f(x) < g(x) when b > 1 but f(x) > g(x) when 0 < b < 1, and in both cases the domain f(x) > 0, g(x) > 0 must accompany the comparison. The compound discipline is absolute: DOMAIN FIRST, then the order. The same mirror holds for exponential inequalities: b^{f(x)} > b^{g(x)} means f > g when b > 1 and f < g when 0 < b < 1 — the exponential and logarithm rules are the same fact read in opposite directions, since they are inverse functions.',
      },
      {
        kind: 'para',
        text: 'A final workhorse pattern: inequalities where the logarithm hides behind a disguise. The expression (log x)² − 4(log x) + 3 < 0 is a quadratic in the variable u = log x — solve for u first (factoring gives 1 < u < 3), then unwrap the outer inequality back through the logarithm with full base-and-domain discipline. Substitution plus branch-aware unwrapping is the complete method: treat the transcendental quantity as a letter, solve the algebra, then translate each bound back through the function\u2019s monotonicity.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — a distance-sum band, two ways',
        steps: [
          'Solve |x − 2| + |x − 5| < 4. Geometry first: the gap between 2 and 5 is 3, so the distance budget 4 exceeds it by 1, split evenly on both sides: the band is (2 − 1/2, 5 + 1/2) = (3/2, 11/2).',
          'Verify by cases. On [2, 5]: the sum is (x − 2) + (5 − x) = 3 < 4 — always true, so the whole segment [2, 5] is in (but check the ends below).',
          'For x < 2: sum = (2 − x) + (5 − x) = 7 − 2x < 4 gives x > 3/2; intersecting with x < 2 yields (3/2, 2). For x > 5: sum = (x − 2) + (x − 5) = 2x − 7 < 4 gives x < 11/2; intersecting yields (5, 11/2).',
          'Union of the three pieces: (3/2, 11/2) — matching the geometric band exactly, including strict endpoints (at x = 3/2 the sum is exactly 4, excluded).',
          'Note how each case\u2019s inequality was intersected with its own defining interval — dropping that intersection is the standard way to import phantom solutions.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — a base-aware logarithm inequality with domain',
        steps: [
          'Solve log_{1/2}(x − 1) > −2. Domain first: x − 1 > 0, so x > 1.',
          'The base is 1/2, which lies between 0 and 1 — the logarithm is DECREASING, so the inequality reverses when exponentiating: x − 1 < (1/2)^{−2} = 4.',
          'So x − 1 < 4 gives x < 5; intersect with the domain x > 1: the solution is 1 < x < 5.',
          'Sanity check at x = 3: log_{1/2}(2) = −1 > −2 ✓. At x = 6: log_{1/2}(5) ≈ −2.32, which is NOT greater than −2 ✓ (excluded).',
          'Disguise variant: solve log₂(x − 1) + log₂(x − 3) ≤ 2. Domain: x > 3 (both arguments positive). Combine: log₂((x − 1)(x − 3)) ≤ 2, base 2 > 1 so (x − 1)(x − 3) ≤ 4, i.e. x² − 4x − 1 ≤ 0, giving 2 − √5 ≤ x ≤ 2 + √5. Intersect with x > 3: the solution is 3 < x ≤ 2 + √5 (note 2 + √5 ≈ 4.24).',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Engineering tolerances: a dimension within ±δ of nominal is exactly |x − a| < δ — the interval form every quality-control chart plots',
          'Facilities and routing: total travel distance to two depots |x − a| + |x − b| ≤ D defines the serviceable corridor — the distance-sum band',
          'pH and chemistry: pH > 7 or pH < 7 thresholds are logarithm inequalities (pH = −log₁₀[H⁺]) where the base-10 direction is implicit',
          'Acoustics and seismology: decibel and magnitude scales are logarithmic, so "limit to X dB" and "above magnitude Y" translate to exponential inequalities',
          'Computer science: digit counts and bit lengths (⌊log₂ n⌋ + 1) make memory-sizing and loop-analysis questions logarithm inequalities in disguise',
          'Finance: doubling-time and compound-growth questions compare b^t against a target — exponential inequalities with base-aware unwrapping',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Reading |x| > a as a single interval: it is a UNION of two rays (x < −a or x > a) — the "or" is structural',
          'Squaring both sides of an inequality without checking signs: |f| < g squares safely (both non-negative), but f < g does not',
          'Forgetting the domain of every logarithm BEFORE comparing: solutions outside the domain are the most common wrong answers in this whole topic',
          'Keeping the inequality direction when the base is less than 1: log_{1/2} REVERSES the order — base check first, always',
          'Solving (log f(x))²-style disguises by expanding logs instead of substituting u = log f(x): treat the log as the variable, then unwrap',
          'Missing the equality check at band endpoints for ≤ versus <: distance-sum equalities land exactly on the boundary points',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Modulus', def: '|x − a|: the distance between x and a; defined by cases, which is the source of every branch decision.' },
          { term: 'Distance-sum band', def: 'The solution of |x − a| + |x − b| < d when d exceeds the gap: a symmetric interval around [a, b].' },
          { term: 'Domain-first discipline', def: 'Before comparing logarithms, enforce every argument > 0; the comparison is meaningless off the domain.' },
          { term: 'Base-aware direction', def: 'log_b comparisons keep their direction when b > 1 and reverse when 0 < b < 1; same for exponentials.' },
          { term: 'Disguised quadratic', def: 'An inequality polynomial in log f(x): substitute u = log f(x), solve the algebra in u, then unwrap with base and domain discipline.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The solution set of |x − 3| < 5 is:',
            options: [
              'x < −2 or x > 8',
              '−2 < x < 8',
              '−5 < x < 5',
              'x < 2 or x > 8',
            ],
            answer: 1,
            explain: '|x − 3| < 5 says x is within distance 5 of 3: (3 − 5, 3 + 5) = (−2, 8). The two-ray form is the trap for the > version of the question.',
          },
          {
            q: 'The minimum value of |x + 1| + |x − 4| is attained:',
            options: [
              'at x = −1 only',
              'at x = 4 only',
              'at every x in [−1, 4]',
              'nowhere — the sum grows without bound downward',
            ],
            answer: 2,
            explain: 'The sum of distances to −1 and 4 equals the gap 5 for EVERY point between them (one leg grows exactly as the other shrinks); outside the segment it exceeds 5. Equality holds on the whole closed segment.',
          },
          {
            q: 'The inequality log_{0.3}(x + 2) < log_{0.3}(6 − x) implies:',
            options: [
              'x + 2 < 6 − x, with −2 < x < 6',
              'x + 2 > 6 − x, with −2 < x < 6',
              'x + 2 > 6 − x, with x > 4',
              'x + 2 < 6 − x, with x < 4',
            ],
            answer: 1,
            explain: 'Base 0.3 lies between 0 and 1, so the decreasing logarithm REVERSES the comparison: x + 2 > 6 − x, giving x > 2. The domain needs both arguments positive: x > −2 and x < 6. Together: 2 < x < 6.',
          },
          {
            q: 'The number of integers satisfying log₂(x − 1) + log₂(x − 3) ≤ 2 is:',
            options: [
              '0',
              '1',
              '2',
              '3',
            ],
            answer: 1,
            explain: 'Domain first: x > 3. Combining the logs (base 2 > 1 keeps the direction): (x − 1)(x − 3) ≤ 4, so x² − 4x − 1 ≤ 0, giving 2 − √5 ≤ x ≤ 2 + √5 ≈ 4.24. Intersecting with x > 3: the solution is 3 < x ≤ 4.24. Checking: x = 4 gives 3·1 = 3 ≤ 4 ✓, while x = 5 gives 8 > 4 ✗. Exactly one integer, namely 4.',
          },
        ],
      },
    ],
  },
]
