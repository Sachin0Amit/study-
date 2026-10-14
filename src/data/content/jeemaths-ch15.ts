import type { SectionContent } from '../library'

// ============================================================================
// Loney companion — Chapter 15: Inverse Triangles and Heights
// Part II: principal values, triangle solutions, heights, centres.
// ============================================================================

export const jeemathsCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: 'jeemaths-ch15-s1',
    readingTime: 8,
    intro: 'Inverse ratios undo sine, cosine and tangent only after domains are cut to principal branches where each function is one to one. Conversion chains then rewrite any inverse sum as a single value. This section builds range discipline with equation solving.',
    objectives: [
      'State principal ranges for $\\sin^{-1}$, $\\cos^{-1}$ and $\\tan^{-1}$ with branch cuts',
      'Convert sums such as $\\sin^{-1}x+\\cos^{-1}x$ and $\\tan^{-1}a+\\tan^{-1}b$',
      'Solve inverse equations with domain plus extraneous checks'
    ],
    concepts: [
      {
        term: 'Principal branches',
        kind: 'definition',
        statement: 'The **principal branches** `principal-branches` are $\\sin^{-1}:[-1,1]\\to[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ and $\\cos^{-1}:[-1,1]\\to[0,\\pi]$ with $\\tan^{-1}:\\mathbb{R}\\to(-\\frac{\\pi}{2},\\frac{\\pi}{2})$.',
        detail: 'Each branch inverts a monotone piece of the original graph. Values outside $[-1,1]$ have no real sine or cosine inverse, while tangent inverse accepts every real.'
      },
      {
        term: 'Complementary pair',
        kind: 'theorem',
        statement: 'For $|x| \\le 1$, the **complementary identity** `complement-inverse` $\\sin^{-1}x+\\cos^{-1}x = \\frac{\\pi}{2}$ links the two branches.',
        detail: 'Proof sets $\\theta = \\sin^{-1}x$ so $\\cos(\\frac{\\pi}{2}-\\theta) = x$, forcing $\\cos^{-1}x = \\frac{\\pi}{2}-\\theta$. The same idea pairs $\\tan^{-1}$ with $\\cot^{-1}$.'
      },
      {
        term: 'Tangent addition',
        kind: 'theorem',
        statement: 'Sums collapse through the **tangent addition** `arctan-add` $\\tan^{-1}a+\\tan^{-1}b = \\tan^{-1}\\frac{a+b}{1-ab}$ plus $\\pi$ correction when $ab > 1$.',
        detail: 'Take tangents of both sides and track quadrants: if $a, b > 0$ with $ab > 1$ the sum exceeds $\\frac{\\pi}{2}$, so add $\\pi$ to the principal value.'
      },
      {
        term: 'Conversion triangles',
        kind: 'method',
        statement: 'A right triangle **converts inverses** `convert-triangle` such as $\\sin^{-1}\\frac{3}{5} = \\cos^{-1}\\frac{4}{5} = \\tan^{-1}\\frac{3}{4}$ for acute values.',
        detail: 'Draw opposite $3$, hypotenuse $5$, adjacent $4$; each ratio reads a different inverse of the same angle. Signs follow the quadrant of the represented angle.'
      },
      {
        term: 'Equation discipline',
        kind: 'method',
        statement: 'Inverse equations need **domain discipline** `domain-discipline`: take sines or tangents of both sides, solve, then keep only values inside principal ranges.',
        detail: 'Taking sine of $\\sin^{-1}x+\\sin^{-1}y = \\theta$ can add solutions with wrong branch sums. Substitute every candidate into the original inverse sum before accepting.'
      }
    ],
    figures: [
      {
        caption: 'Principal branches as monotone pieces: $\\sin$ on $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, $\\cos$ on $[0,\\pi]$, $\\tan$ on $(-\\frac{\\pi}{2},\\frac{\\pi}{2})$; each horizontal level meets the kept piece exactly once.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Monotone branches of sine cosine tangent"><path d="M80,180 C140,180 150,80 210,80 C270,80 280,280 340,280" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M380,80 C420,80 430,280 480,280" fill="none" stroke="currentColor" stroke-width="1.7" stroke-dasharray="7 4"/><path d="M520,280 C550,280 560,200 580,180 C600,160 610,80 640,80" fill="none" stroke="currentColor" stroke-width="1.7"/><line x1="60" y1="180" x2="680" y2="180" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><text x="210" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">sine kept piece</text><text x="430" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">cosine kept piece</text><text x="585" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">tangent kept piece</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Tangent sum with correction',
        problem: 'Simplify $\\tan^{-1}2+\\tan^{-1}3$ to a single principal value.',
        steps: [
          { label: 'Step 1', text: 'Apply $\\tan^{-1}a+\\tan^{-1}b$:\n```text\nraw = arctan((2 + 3) over (1 - 6)) = arctan(-1)\n```\nIn symbols $\\tan^{-1}\\frac{5}{-5} = \\tan^{-1}(-1)$.' },
          { label: 'Step 2', text: 'Since $a, b > 0$ with $ab = 6 > 1$, the true sum lies in $(\\frac{\\pi}{2},\\pi)$, so add $\\pi$ to $-\\frac{\\pi}{4}$.' },
          { label: 'Step 3', text: 'Hence the sum equals $\\frac{3\\pi}{4}$, checked by $\\tan\\frac{3\\pi}{4} = -1$ in the second quadrant.' }
        ],
        result: '$\\tan^{-1}2+\\tan^{-1}3 = \\frac{3\\pi}{4}$.'
      },
      {
        title: 'Inverse equation with check',
        problem: 'Solve $\\sin^{-1}x+\\sin^{-1}(1-x) = \\frac{\\pi}{2}$ for real $x$.',
        steps: [
          { label: 'Step 1', text: 'Use complement: $\\sin^{-1}(1-x) = \\frac{\\pi}{2}-\\sin^{-1}x = \\cos^{-1}x$, so $1-x$ must equal $\\sqrt{1-x^2}$ pattern via sines.' },
          { label: 'Step 2', text: 'Take sines: $1-x = \\cos(\\sin^{-1}x) = \\sqrt{1-x^2}$, requiring $1-x \\ge 0$.' },
          { label: 'Step 3', text: 'Square to $1-2x+x^2 = 1-x^2$, giving $x = 0$ or $x = \\frac{1}{2}$, both inside $[-1,1]$ and verified in the original sum.' }
        ],
        result: 'Solutions $x = 0$ and $x = \\frac{1}{2}$.'
      }
    ],
    keyTakeaways: [
      'Principal $\\sin^{-1}$ in $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, $\\cos^{-1}$ in $[0,\\pi]$, $\\tan^{-1}$ in $(-\\frac{\\pi}{2},\\frac{\\pi}{2})$.',
      '$\\sin^{-1}x+\\cos^{-1}x = \\frac{\\pi}{2}$ for $|x| \\le 1$.',
      'Tangent sums need $+\\pi$ correction when $ab > 1$ with positive inputs.',
      'Right triangles convert $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ of one angle.'
    ],
    quiz: [
      {
        q: 'Principal value of $\\sin^{-1}(-\\frac{1}{2})$ is',
        options: [`$-\\frac{\\pi}{6}$`, `$\\frac{\\pi}{6}$`, `$\\frac{5\\pi}{6}$`, `$\\pi$`],
        answer: 0,
        explanation: 'Step 1: Range is $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$. Step 2: Sine negative means fourth quadrant branch. Step 3: Reference is $\\frac{\\pi}{6}$. Step 4: Hence $-\\frac{\\pi}{6}$.'
      },
      {
        q: '$\\sin^{-1}x+\\cos^{-1}x$ for $|x| \\le 1$ equals',
        options: [`$0$`, `$\\frac{\\pi}{2}$`, `$\\pi$`, `$2\\pi$`],
        answer: 1,
        explanation: 'Step 1: Put $\\theta = \\sin^{-1}x$. Step 2: Then $\\cos(\\frac{\\pi}{2}-\\theta) = x$. Step 3: Hence $\\cos^{-1}x = \\frac{\\pi}{2}-\\theta$. Step 4: Sum is $\\frac{\\pi}{2}$.'
      },
      // PYQ-pattern: arctan sum correction
      {
        q: '$\\tan^{-1}1+\\tan^{-1}2+\\tan^{-1}3$ equals',
        options: [`$\\frac{3\\pi}{4}$`, `$\\frac{\\pi}{2}$`, `$\\pi$`, `$0$`],
        answer: 2,
        explanation: 'Step 1: Isolate $\\tan^{-1}2+\\tan^{-1}3$; the tangent-addition formula gives $\\frac{2+3}{1-2\\cdot 3} = -1$. Step 2: Both angles are acute so their sum lies in $(\\pi/2,\\pi)$; $\\tan = -1$ there means $3\\pi/4$, not $-\\pi/4$. Step 3: Add $\\tan^{-1}1 = \\pi/4$ to get $\\pi$. Step 4: Hence the third option holds; $3\\pi/4$ forgets the first term and $0$ skips the quadrant correction.'
      },
      {
        q: 'Domain of real $\\cos^{-1}x$ is',
        options: ['all reals', `$[-1,1]$`, '$x > 1$ only', 'nonnegative only'],
        answer: 1,
        explanation: 'Step 1: Cosine attains only $[-1,1]$. Step 2: Inverse needs those inputs. Step 3: Outside no real angle works. Step 4: Hence $[-1,1]$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.2
  {
    sectionId: 'jeemaths-ch15-s2',
    readingTime: 9,
    intro: 'Any triangle is fixed by three data including one side, with sine and cosine rules translating sides to sines of angles. Half angle formulas give $\\tan\\frac{A}{2}$ from sides alone, while the ambiguous case explains zero, one or two solutions. This section solves all standard configurations.',
    objectives: [
      'Apply $\\frac{a}{\\sin A} = 2R$ and $c^{2} = a^{2}+b^{2}-2ab\\cos C$ fluently',
      'Use $\\tan\\frac{A}{2} = \\frac{\\Delta}{s(s-a)}$ style half forms from sides',
      'Resolve ambiguous $SSA$ into zero, one or two triangles'
    ],
    concepts: [
      {
        term: 'Sine rule',
        kind: 'theorem',
        statement: 'Sides obey the **sine rule** `sine-rule` $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ with circumradius $R$.',
        detail: 'Each ratio equals the diameter of the circumcircle. The rule pairs one side with two angles, or two sides with one angle up to ambiguity.'
      },
      {
        term: 'Cosine rule',
        kind: 'theorem',
        statement: 'The **cosine rule** `cosine-rule` $c^2 = a^2+b^2-2ab\\cos C$ generalises Pythagoras to every included angle.',
        detail: 'Obtuse $C$ makes $-2ab\\cos C$ positive, lengthening $c$. The rule solves $SSS$ and $SAS$ directly, giving every angle by rearrangement.'
      },
      {
        term: 'Projection formula',
        kind: 'theorem',
        statement: 'Sides project as **projection** `projection-form` $a = b\\cos C+c\\cos B$, expressing one side along the other two directions.',
        detail: 'Drop the altitude from $A$ onto $BC$: adjacent segments are $c\\cos B$ and $b\\cos C$. Summing recovers $a$ and checks sine cosine consistency.'
      },
      {
        term: 'Half angle sides form',
        kind: 'theorem',
        statement: 'Half angles come from sides via **half sides** `half-sides` $\\sin\\frac{A}{2} = \\sqrt{\\frac{(s-b)(s-c)}{bc}}$ and $\\tan\\frac{A}{2} = \\frac{\\Delta}{s(s-a)}$.',
        detail: 'Here $s = \\frac{a+b+c}{2}$ and $\\Delta$ is area. These need no angles, so $SSS$ triangles yield exact half values before full angles.'
      },
      {
        term: 'Ambiguous case',
        kind: 'insight',
        statement: 'Given $a, b, A$, the **ambiguous count** `ambiguous-count` is zero, one or two triangles according as $a$ misses, touches or cuts the ray from $B$.',
        detail: 'Compare $a$ with $b\\sin A$ and $b$: below $b\\sin A$ no triangle, equality gives one right triangle, between gives two, at or above $b$ gives one. Always test $B$ supplements.'
      }
    ],
    figures: [
      {
        caption: 'Standard notation with $a = BC$ opposite $A$; altitude $h = c\\sin B = b\\sin C$ splits $a$ into $c\\cos B+b\\sin$ projections used by sine and projection rules.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Triangle with altitude and projections"><polygon points="150,280 550,280 400,100" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="400" y1="100" x2="400" y2="280" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><text x="150" y="300" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">B</text><text x="550" y="300" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">C</text><text x="400" y="85" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">A</text><text x="300" y="265" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">c cos B</text><text x="475" y="265" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">b cos C</text><text x="415" y="200" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">h</text><text x="320" y="200" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">c</text><text x="490" y="200" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">b</text></svg>`,
        afterConcept: 2
      }
    ],
    derivations: [
      {
        title: 'Sine Rule from Equating Area Formulas',
        statement: 'Derivation of $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ from $\\Delta = \\frac{1}{2}bc\\sin A$',
        prerequisites: [
          'Triangle area $\\Delta = \\frac{1}{2}bc\\sin A$ with included angle',
          'Standard notation with side $a$ opposite angle $A$ and cyclic order',
          'Circumradius relation $a = 2R\\sin A$ via the central angle theorem',
        ],
        steps: [
          {
            label: 'Step 1: Write area three ways with each included angle',
            formula: '$$\\Delta = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ca\\sin B = \\frac{1}{2}ab\\sin C$$',
            explanation: 'Compute area using each pair of sides with its included angle, since one half times two sides times the sine between them always gives area. This works because all three expressions measure the same region, so they are equal despite looking different. Equality of areas is the engine of the whole derivation.',
          },
          {
            label: 'Step 2: Cancel the common factor to link sines and sides',
            formula: '$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$',
            explanation: 'Divide the triple equality by $\\frac{1}{2}abc$, which is nonzero for a genuine triangle. This works because dividing equals by the same positive quantity preserves equality while stripping one side letter from each term. What remains pairs each sine with the reciprocal of its opposite side.',
          },
          {
            label: 'Step 3: Invert to the side-over-sine form',
            formula: '$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$',
            explanation: 'Take reciprocals throughout, which is valid since no sine vanishes for angles strictly between $0$ and $\\pi$. This works because reciprocal is strictly decreasing on positive values, turning the sine-per-side equality into a side-per-sine equality. The common value is now a length scale of the triangle.',
          },
          {
            label: 'Step 4: Identify the common value as the circumdiameter',
            formula: '$$\\frac{a}{\\sin A} = 2R$$',
            explanation: 'Place side $a$ as a chord subtending angle $A$ on the circumcircle, so the chord-length formula gives $a = 2R\\sin A$. This works because the central angle is twice the inscribed angle, and the right triangle through the circle centre exposes the diameter $2R$. Hence every ratio equals the same diameter, completing the sine rule.',
          },
        ],
        result: 'For any triangle, $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$, meaning side lengths scale with sines of opposite angles via the circumdiameter.',
      },
    ],
    examples: [
      {
        title: 'Sine rule ambiguous pair',
        problem: 'Given $a = 10$, $b = 12$, $A = 30$ degrees, find possible $B$ values.',
        steps: [
          { label: 'Step 1', text: 'Sine rule:\n```text\nsin B = b sin A over a = 12 times 0.5 over 10 = 0.6\n```\nIn symbols $\\sin B = \\frac{12\\sin 30}{10} = 0.6$.' },
          { label: 'Step 2', text: 'Acute option $B \\approx 36.87$ degrees and supplement $B \\approx 143.13$ degrees both have sine $0.6$.' },
          { label: 'Step 3', text: 'Check sums: $30+36.87 < 180$ and $30+143.13 < 180$, so both give valid triangles with different $C$ values.' }
        ],
        result: 'Two triangles with $B \\approx 36.87$ or $143.13$ degrees.'
      },
      {
        title: 'Cosine rule SSS angle',
        problem: 'Sides $7, 8, 9$ form a triangle. Find the largest angle.',
        steps: [
          { label: 'Step 1', text: 'Largest angle opposes $9$: $\\cos C = \\frac{49+64-81}{2\\cdot 7\\cdot 8} = \\frac{32}{112} = \\frac{2}{7}$.' },
          { label: 'Step 2', text: 'Hence $C = \\cos^{-1}\\frac{2}{7} \\approx 73.4$ degrees.' },
          { label: 'Step 3', text: 'Remaining angles sum to about $106.6$ degrees, each smaller than $C$ as expected.' }
        ],
        result: 'Largest angle about $73.4$ degrees.'
      }
    ],
    keyTakeaways: [
      '$\\frac{a}{\\sin A} = 2R$ links every side to its opposite sine.',
      '$c^2 = a^2+b^2-2ab\\cos C$ solves $SSS$ and $SAS$.',
      '$a = b\\cos C+c\\cos B$ checks projections along the base.',
      '$SSA$ yields zero, one or two triangles by $a$ versus $b\\sin A$.'
    ],
    quiz: [
      {
        q: 'In any triangle $\\frac{a}{\\sin A}$ equals',
        options: [`$2R$`, `$R$`, `$4R$`, 'zero'],
        answer: 0,
        explanation: 'Step 1: Diameter subtends a right angle. Step 2: Side $a$ sees angle $A$ on the circle. Step 3: Ratio equals diameter $2R$. Step 4: Hence the first option holds.'
      },
      // PYQ-pattern: cosine rule for included angle
      {
        q: 'If $b = 5$, $c = 6$, $A = 60$ degrees, then $a^{2}$ equals',
        options: [`$31$`, `$61$`, `$11$`, `$91$`],
        answer: 0,
        explanation: 'Step 1: Use $a^2 = b^2+c^2-2bc\\cos A$. Step 2: Substitute $25+36-2(5)(6)(0.5)$. Step 3: Compute $61-30 = 31$. Step 4: Hence the first option holds.'
      },
      {
        q: '$SSA$ with $a < b\\sin A$ gives',
        options: ['one triangle', 'two triangles', 'no triangle', 'infinite triangles'],
        answer: 2,
        explanation: 'Step 1: Side $a$ is too short to reach the ray. Step 2: No meeting point exists. Step 3: Sine equation has no valid $B$. Step 4: Hence no triangle.'
      },
      {
        q: 'Projection $a = b\\cos C+c\\cos B$ comes from',
        options: ['altitude splitting $a$', 'squaring sides', 'angle bisector', 'median doubling'],
        answer: 0,
        explanation: 'Step 1: Drop altitude $h$ from $A$. Step 2: Base splits into $c\\cos B$ and $b\\cos C$. Step 3: Sum equals $a$. Step 4: Hence altitude splitting.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.3
  {
    sectionId: 'jeemaths-ch15-s3',
    readingTime: 7,
    intro: 'Heights and distances translate elevation and depression angles into right triangle equations with one unknown height or distance. Two position observations give two equations that eliminate the common height. This section models accessible and inaccessible bases.',
    objectives: [
      'Model single observations with $h = d\\tan\\theta$ relations',
      'Solve two station problems by eliminating $h$ between equations',
      'Handle depression, bearing and inaccessible foot cases'
    ],
    concepts: [
      {
        term: 'Elevation model',
        kind: 'definition',
        statement: 'An **elevation angle** `elevation-model` $\\theta$ above horizontal gives $\\tan\\theta = \\frac{h}{d}$ with height $h$ over ground distance $d$.',
        detail: 'Observer eye height adds to $h$ when the instrument is above ground. Depression from the top uses the same $\\theta$ by alternate interior angles.'
      },
      {
        term: 'Two station method',
        kind: 'method',
        statement: 'With two angles $\\theta_{1}$ and $\\theta_{2}$ a distance $L$ apart, the **two station solution** `two-station` solves $h\\cot\\theta_{1}-h\\cot\\theta_{2} = \\pm L$.',
        detail: 'Sign depends on stations on the same or opposite sides of the foot. Eliminating $d$ leaves $h$ directly without solving each triangle separately.'
      },
      {
        term: 'Inaccessible base',
        kind: 'method',
        statement: 'When the foot cannot be reached, an **auxiliary baseline** `auxiliary-base` $AB = L$ with angles at $A$ and $B$ fixes the triangle by sine rule before height.',
        detail: 'First solve $\\triangle ABP$ for $AP$ or $BP$ from two angles plus $L$, then $h = AP\\sin$ elevation. No ground distance to the foot is ever measured.'
      },
      {
        term: 'Depression symmetry',
        kind: 'insight',
        statement: 'Angles of **depression symmetry** `depression-sym` equal elevation from the ground by parallel horizontals, so top down data converts at once.',
        detail: 'From height $h$, depression $\\theta$ to an object means ground elevation $\\theta$ back up. This swaps known and unknown legs without new formulas.'
      },
      {
        term: 'Bearing triangles',
        kind: 'notation',
        statement: 'Bearings give **horizontal triangles** `bearing-triangle` whose sides come from $d = h\\cot\\theta$ legs joined by known included angles.',
        detail: 'Two objects seen from a tower form a ground triangle with sides from separate elevation equations. Cosine rule then gives the ground distance between objects.'
      }
    ],
    figures: [
      {
        caption: 'Tower of height $h$ seen under $\\theta_{1}$ and $\\theta_{2}$ from stations $L$ apart; eliminating the ground distances leaves $h$ from $L$ and the two cotangents.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Tower with two observation stations"><line x1="80" y1="300" x2="680" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="500" y1="300" x2="500" y2="120" stroke="currentColor" stroke-width="2"/><line x1="200" y1="300" x2="500" y2="120" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="300" x2="500" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="500" y="110" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">top</text><text x="200" y="320" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">station 1</text><text x="360" y="320" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">station 2</text><text x="590" y="320" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">ground</text><text x="510" y="220" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">h</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Two stations same side',
        problem: 'A tower subtends $30$ degrees at $A$ and $60$ degrees at $B$, with $B$ $40$ m nearer on the same side. Find height $h$.',
        steps: [
          { label: 'Step 1', text: 'Write $d\\tan 30 = h$ and $(d-40)\\tan 60 = h$:\n```text\nd = h cot30, d - 40 = h cot60\n```\nSubtract to $40 = h(\\sqrt{3}-\\frac{1}{\\sqrt{3}})$.' },
          { label: 'Step 2', text: 'Simplify bracket to $\\frac{2}{\\sqrt{3}}$, so $h = 20\\sqrt{3}$ m.' },
          { label: 'Step 3', text: 'Then $d = 60$ m, checked by $60\\tan 30 = 20\\sqrt{3}$.' }
        ],
        result: 'Height $20\\sqrt{3}$ m about $34.64$ m.'
      },
      {
        title: 'Depression between buildings',
        problem: 'From a $50$ m tower the depression to a house base is $45$ degrees and to its top from ground is $30$ degrees. Find house height.',
        steps: [
          { label: 'Step 1', text: 'Ground distance $d = 50\\cot 45 = 50$ m from tower triangle.' },
          { label: 'Step 2', text: 'House height $k$ satisfies $\\tan 30 = \\frac{k}{d}$, so $k = 50\\cdot\\frac{1}{\\sqrt{3}}$.' },
          { label: 'Step 3', text: 'Value about $28.87$ m, less than tower height as geometry requires.' }
        ],
        result: 'House about $28.87$ m tall.'
      }
    ],
    keyTakeaways: [
      '$\\tan\\theta = \\frac{h}{d}$ is the single station workhorse.',
      'Two stations give $h\\cot\\theta_{1}-h\\cot\\theta_{2} = \\pm L$.',
      'Inaccessible feet need sine rule on the auxiliary baseline first.',
      'Depression equals ground elevation by parallel horizontals.'
    ],
    quiz: [
      {
        q: 'Tower $h$ at distance $d$ subtends $\\theta$. Relation is',
        options: [`$h = d\\sin\\theta$`, `$h = d\\tan\\theta$`, `$h = d\\cos\\theta$`, '$h = d$'],
        answer: 1,
        explanation: 'Step 1: Opposite is $h$, adjacent is $d$. Step 2: Ratio opposite over adjacent is tangent. Step 3: Hence $\\tan\\theta = \\frac{h}{d}$. Step 4: So $h = d\\tan\\theta$.'
      },
      {
        q: 'Stations $L$ apart same side with angles $30$ and $60$ give $h$ equal to',
        options: [`$\\frac{L}{\\sqrt{3}-\\frac{1}{\\sqrt{3}}}$`, '$L$', `$2L$`, 'zero'],
        answer: 0,
        explanation: 'Step 1: Write $L = h\\cot 30-h\\cot 60$. Step 2: Solve $h = \\frac{L}{\\cot 30-\\cot 60}$. Step 3: Cotangents are $\\sqrt{3}$ and $\\frac{1}{\\sqrt{3}}$. Step 4: Hence the first option holds.'
      },
      // PYQ-pattern: inaccessible base via sine rule
      {
        q: 'Inaccessible foot problems start with',
        options: ['direct $h = d\\tan\\theta$', 'sine rule on auxiliary baseline', 'differentiation', 'log series'],
        answer: 1,
        explanation: 'Step 1: No ground distance to foot is known. Step 2: Baseline $AB$ plus two angles fixes the auxiliary triangle. Step 3: Sine rule gives slant range. Step 4: Height follows from elevation.'
      },
      {
        q: 'Depression $\\theta$ from top corresponds to ground elevation',
        options: [`$90-\\theta$`, `$\\theta$`, `$2\\theta$`, '$0$'],
        answer: 1,
        explanation: 'Step 1: Horizontals at top and ground are parallel. Step 2: Sight line is a transversal. Step 3: Alternate interior angles match. Step 4: Hence $\\theta$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.4
  {
    sectionId: 'jeemaths-ch15-s4',
    readingTime: 8,
    intro: 'Every triangle carries circumradius $R$, inradius $r$ and exradii $r_{a}, r_{b}, r_{c}$ linked by $\\Delta = rs = \\frac{abc}{4R}$. Area itself has sine, Heron and half perimeter forms. This section proves those relations with pedal and centre geometry.',
    objectives: [
      'Compute area by $\\frac{1}{2}ab\\sin C$, Heron and $rs$ forms',
      'Relate $R = \\frac{abc}{4\\Delta}$ and $r = \\frac{\\Delta}{s}$ with exradii',
      'Use $r = 4R\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$ connections'
    ],
    concepts: [
      {
        term: 'Area forms',
        kind: 'theorem',
        statement: 'Area takes **three forms** `area-forms` $\\Delta = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)} = rs$.',
        detail: 'Sine form needs two sides plus included angle, Heron needs three sides, and $rs$ needs inradius plus semiperimeter. All three agree on every triangle.'
      },
      {
        term: 'Circumradius formula',
        kind: 'theorem',
        statement: 'The **circumradius** `circumradius-form` $R = \\frac{abc}{4\\Delta}$ places all vertices on one circle of that radius.',
        detail: 'Proof combines $\\Delta = \\frac{1}{2}ab\\sin C$ with $c = 2R\\sin C$. Equilateral $a$ gives $R = \\frac{a}{\\sqrt{3}}$, double the inradius.'
      },
      {
        term: 'Inradius formula',
        kind: 'theorem',
        statement: 'The **inradius** `inradius-form` $r = \\frac{\\Delta}{s} = (s-a)\\tan\\frac{A}{2}$ touches all three sides from the angle bisector meeting point.',
        detail: 'Incentre is the intersection of bisectors at distance $r$ from each side. Splitting the triangle into three subtriangles of height $r$ gives $\\Delta = rs$.'
      },
      {
        term: 'Exradii relations',
        kind: 'theorem',
        statement: 'Exradii obey **exradius links** `exradius-links` $r_{a} = \\frac{\\Delta}{s-a}$ with $\\frac{1}{r} = \\frac{1}{r_{a}}+\\frac{1}{r_{b}}+\\frac{1}{r_{c}}$.',
        detail: 'Each excentre opposes one vertex at the meeting of two external bisectors. The reciprocal sum plus $r_{a}+r_{b}+r_{c} = 4R+r$ tie all centres together.'
      },
      {
        term: 'Euler centre distance',
        kind: 'insight',
        statement: 'Centres satisfy **Euler distance** `euler-dist` $OI^2 = R(R-2r)$, forcing $R \\ge 2r$ with equality only for equilateral triangles.',
        detail: 'Hence circumradius is at least twice inradius. The inequality is a fast check on computed $R$ and $r$ values.'
      }
    ],
    figures: [
      {
        caption: 'Incentre $I$ at distance $r$ from each side and circumcentre $O$ at distance $R$ from each vertex; $\\Delta = rs = \\frac{abc}{4R}$ ties both radii to area.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Triangle with incircle and circumcircle"><polygon points="150,280 550,280 380,90" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="380" cy="220" r="40" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="350" cy="200" r="110" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="7 4"/><circle cx="380" cy="220" r="3" fill="currentColor"/><text x="395" y="225" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">I r</text><text x="460" y="120" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">R circle</text><text x="350" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">s base</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Radii of thirteen fourteen fifteen',
        problem: 'Triangle sides $13, 14, 15$ have area $84$. Find $R$ and $r$.',
        steps: [
          { label: 'Step 1', text: 'Semiperimeter:\n```text\ns = (13 + 14 + 15) over 2 = 21\n```\nIn symbols $s = 21$ and $\\Delta = 84$.' },
          { label: 'Step 2', text: 'Inradius $r = \\frac{\\Delta}{s} = \\frac{84}{21} = 4$.' },
          { label: 'Step 3', text: 'Circumradius $R = \\frac{13\\cdot 14\\cdot 15}{4\\cdot 84} = \\frac{2730}{336} = 8.125$, satisfying $R \\ge 2r$.' }
        ],
        result: '$r = 4$ and $R = 8.125$.'
      },
      {
        title: 'Exradius check',
        problem: 'For the same triangle find $r_{a}$ opposite $13$ and verify reciprocal sums.',
        steps: [
          { label: 'Step 1', text: 'Use $r_{a} = \\frac{\\Delta}{s-a} = \\frac{84}{8} = 10.5$.' },
          { label: 'Step 2', text: 'Similarly $r_{b} = 12$ and $r_{c} = 14$, giving $\\frac{1}{10.5}+\\frac{1}{12}+\\frac{1}{14} = \\frac{1}{4}$.' },
          { label: 'Step 3', text: 'Matches $\\frac{1}{r} = \\frac{1}{4}$, confirming exradius links.' }
        ],
        result: '$r_{a} = 10.5$ with reciprocal identity verified.'
      }
    ],
    keyTakeaways: [
      '$\\Delta = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)} = rs$.',
      '$R = \\frac{abc}{4\\Delta}$ centres vertices; $r = \\frac{\\Delta}{s}$ touches sides.',
      '$r_{a} = \\frac{\\Delta}{s-a}$ with $\\sum\\frac{1}{r_{a}} = \\frac{1}{r}$.',
      '$OI^2 = R(R-2r)$ forces $R \\ge 2r$.'
    ],
    quiz: [
      {
        q: 'Area with sides $b, c$ and included $A$ is',
        options: [`$\\frac{1}{2}bc\\sin A$`, `$bc\\cos A$`, '$b+c$', `$\\frac{bc}{2}$ always`],
        answer: 0,
        explanation: 'Step 1: Height from $B$ is $c\\sin A$. Step 2: Base is $b$. Step 3: Half base times height gives the form. Step 4: Hence the first option holds.'
      },
      {
        q: 'For $\\Delta = 84$ and $s = 21$, inradius is',
        options: [`$2$`, `$8$`, `$21$`, `$4$`],
        answer: 3,
        explanation: 'Step 1: Use $r = \\frac{\\Delta}{s}$. Step 2: Substitute $84$ over $21$. Step 3: Quotient is $4$. Step 4: Hence the fourth option holds.'
      },
      // PYQ-pattern: circumradius product form
      {
        q: '$R$ in terms of sides and area equals',
        options: [`$\\frac{\\Delta}{s}$`, '$rs$', `$\\frac{abc}{4\\Delta}$`, `$2r$ always`],
        answer: 2,
        explanation: 'Step 1: Combine $\\Delta = \\frac{1}{2}ab\\sin C$. Step 2: Replace $\\sin C = \\frac{c}{2R}$. Step 3: Solve for $R$. Step 4: Get $\\frac{abc}{4\\Delta}$, the third option.'
      },
      {
        q: 'Euler inequality states',
        options: ['$R = r$', `$R \\ge 2r$`, '$r > R$', 'no relation'],
        answer: 1,
        explanation: 'Step 1: From $OI^2 = R(R-2r)$. Step 2: Square is nonnegative. Step 3: Hence $R-2r \\ge 0$. Step 4: So $R \\ge 2r$, the second option.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Euler inequality and extremal triangle geometry',
        blocks: [
          {
            kind: 'theorem',
            body: 'For any triangle with circumradius $R$, inradius $r$, area $\\Delta$ and semiperimeter $s$, the relations $\\Delta = rs = abc/(4R)$ hold, and the **Euler formula** $OI^{2} = R(R-2r)$ links the circumcentre $O$ to the incentre $I$. Hence the sharp **Euler inequality** $R \\ge 2r$ follows with equality exactly for equilateral triangles. Refined forms include $r = 4R\\sin(A/2)\\sin(B/2)\\sin(C/2)$ and $OI^{2} \\ge 0$ as the nonnegativity source. Equilateral triangles are therefore extremal: they minimize $R/r$ and maximize $r/R$ over all shapes.'
          },
          {
            kind: 'proof',
            body: 'Write $\\Delta = (1/2)ab\\sin C$ and replace $\\sin C = c/(2R)$ from the sine rule $c/\\sin C = 2R$ to get $\\Delta = abc/(4R)$. Decomposing the triangle into three subtriangles with vertex $I$ and heights $r$ gives $\\Delta = rs$. For Euler formula, extend $OI$ to meet the circumcircle and apply power of a point together with the angle bisector theorem; the product of directed segments equals $R^{2} - OI^{2}$ on one side and $2Rr$ on the other, forcing $OI^{2} = R(R-2r)$. Since a square is nonnegative, $R - 2r \\ge 0$. Equality needs $O = I$, which forces all sides equal.'
          },
          {
            kind: 'example',
            heading: 'Equilateral attains the radius ratio bound',
            body: 'For an equilateral triangle of side $a$, direct computation gives $R = a/\\sqrt{3}$ and $r = a/(2\\sqrt{3})$, so $R/r = 2$ exactly. Any deformation such as an isosceles triangle with vertex angle near $\\pi$ sends $r \\to 0$ while $R$ stays bounded away from $0$, driving $R/r$ to infinity. The product form $R = abc/(4\\Delta)$ exhibits this: flattening collapses area $\\Delta$ faster than the side product $abc$. Hence $2$ is the global minimum of $R/r$, and every non equilateral triangle pays a strict penalty measured by $OI^{2} > 0$.'
          }
        ]
      }
    ]
  }
]
