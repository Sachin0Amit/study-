import type { SectionContent } from '../library'

// ============================================================================
// Loney companion — Chapter 14: Ratios Identities and Equations
// Part I: angle measure, compound and multiple angles, general solutions.
// ============================================================================

export const jeemathsCh14Content: SectionContent[] = [
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: 'math-a7-s10',
    readingTime: 8,
    intro: 'Angles measured in radians link arc length directly to radius through $l = r\\theta$, with $\\pi$ radians equal to two right angles. Ratios of acute angles extend to all quadrants by allied angle reductions that preserve magnitude up to sign. This section fixes special values and reduction discipline.',
    objectives: [
      'Convert between degrees and radians and apply $l = r\\theta$ plus area $\\frac{1}{2}r^{2}\\theta$',
      'Evaluate ratios of $30$, $45$ and $60$ degrees from geometry',
      'Reduce allied angles such as $90 \\pm \\theta$ and $270 \\pm \\theta$ with sign rules'
    ],
    concepts: [
      {
        term: 'Radian measure',
        kind: 'definition',
        statement: 'A **radian** `radian-def` is the angle subtending arc equal to radius, so $\\pi$ radians equal $180$ degrees and $1$ radian is about $57.3$ degrees.',
        detail: 'Conversion uses $\\theta_{rad} = \\theta_{deg}\\frac{\\pi}{180}$. Arc length is $l = r\\theta$ and sector area is $\\frac{1}{2}r^{2}\\theta$ with $\\theta$ in radians.'
      },
      {
        term: 'Special acute ratios',
        kind: 'theorem',
        statement: 'Geometry of half squares and half equilateral triangles gives **special ratios** `special-ratios` $\\sin 30 = \\frac{1}{2}$ and $\\sin 60 = \\frac{\\sqrt{3}}{2}$ with $\\tan 45 = 1$.',
        detail: 'Full table: $\\sin 30 = \\frac{1}{2}$, $\\cos 30 = \\frac{\\sqrt{3}}{2}$, $\\sin 45 = \\frac{1}{\\sqrt{2}}$, $\\tan 30 = \\frac{1}{\\sqrt{3}}$ and $\\tan 60 = \\sqrt{3}$. Complementary pairs swap sine and cosine.'
      },
      {
        term: 'Allied angle reduction',
        kind: 'method',
        statement: 'An **allied reduction** `allied-reduce` writes $\\sin(90+\\theta) = \\cos\\theta$ and $\\cos(180+\\theta) = -\\cos\\theta$, changing function for odd multiples of $90$ degrees.',
        detail: 'Rule: odd $90$ multiples swap sine with cosine and tangent with cotangent, even multiples keep the function. Quadrant sign follows all silver tea cups order: sine positive in second, tangent in third, cosine in fourth.'
      },
      {
        term: 'Quadrant signs',
        kind: 'notation',
        statement: 'Signs follow the **quadrant rule** `quadrant-signs` with all ratios positive in first, sine positive in second, tangent positive in third and cosine positive in fourth.',
        detail: 'Reference angle $\\alpha$ to the $x$ axis carries the magnitude while the quadrant supplies the sign. This reduces every large angle to an acute evaluation plus sign.'
      },
      {
        term: 'Co-ratio identities',
        kind: 'theorem',
        statement: 'Complementary angles obey **co-ratio links** `co-ratio` $\\sin(90-\\theta) = \\cos\\theta$ and $\\tan(90-\\theta) = \\cot\\theta$ with $\\sec$ paired to $\\csc$.',
        detail: 'These follow from right triangle swapping of opposite and adjacent sides. They convert sums to products later and justify half angle phase shifts.'
      }
    ],
    figures: [
      {
        caption: 'Unit circle with $\\theta$ in the second quadrant: reference angle $\\alpha$ to the negative axis gives $|\\sin| = \\sin\\alpha$ while the $x$ coordinate stays negative, so $\\cos\\theta = -\\cos\\alpha$.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Unit circle with second quadrant angle"><circle cx="360" cy="180" r="120" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="200" y1="180" x2="520" y2="180" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="60" x2="360" y2="300" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="180" x2="260" y2="110" stroke="currentColor" stroke-width="1.8"/><line x1="260" y1="110" x2="260" y2="180" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.7"/><path d="M410,180 A50,50 0 0 1 395,145" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="415" y="160" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">theta</text><text x="260" y="200" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">alpha</text><text x="560" y="200" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">0 deg</text><text x="360" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">unit circle</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Allied reduction drill',
        problem: 'Evaluate $\\sin 150$ degrees, $\\cos 225$ degrees and $\\tan 300$ degrees by reduction.',
        steps: [
          { label: 'Step 1', text: 'Reduce each to acute:\n```text\n150 = 180 - 30, 225 = 180 + 45, 300 = 360 - 60\n```\nReference angles are $30$, $45$, $60$ degrees respectively.' },
          { label: 'Step 2', text: 'Apply quadrant signs: $\\sin 150 = +\\sin 30 = \\frac{1}{2}$ and $\\cos 225 = -\\cos 45 = -\\frac{1}{\\sqrt{2}}$.' },
          { label: 'Step 3', text: 'Similarly $\\tan 300 = -\\tan 60 = -\\sqrt{3}$, since tangent is negative in the fourth quadrant.' }
        ],
        result: '$\\sin 150 = \\frac{1}{2}$, $\\cos 225 = -\\frac{1}{\\sqrt{2}}$, $\\tan 300 = -\\sqrt{3}$.'
      },
      {
        title: 'Arc and sector computation',
        problem: 'A wheel of radius $35$ cm turns through $120$ degrees. Find arc travelled and sector area.',
        steps: [
          { label: 'Step 1', text: 'Convert $120$ degrees to $\\frac{2\\pi}{3}$ radians.' },
          { label: 'Step 2', text: 'Arc $l = r\\theta = 35 \\cdot \\frac{2\\pi}{3} = \\frac{70\\pi}{3} \\approx 73.3$ cm.' },
          { label: 'Step 3', text: 'Area $= \\frac{1}{2}r^{2}\\theta = \\frac{1}{2}(1225)(\\frac{2\\pi}{3}) = \\frac{1225\\pi}{3}$ square cm.' }
        ],
        result: 'Arc $\\frac{70\\pi}{3}$ cm with sector $\\frac{1225\\pi}{3}$ square cm.'
      }
    ],
    keyTakeaways: [
      'Radians give $l = r\\theta$ and area $\\frac{1}{2}r^{2}\\theta$ directly.',
      'Special $30$, $45$, $60$ values come from half square and half equilateral geometry.',
      'Odd multiples of $90$ swap function; even multiples keep it.',
      'Quadrant decides sign while reference angle decides magnitude.'
    ],
    quiz: [
      {
        q: '$\\sin 150$ degrees equals',
        options: [`$\\frac{1}{2}$`, `$-\\frac{1}{2}$`, `$\\frac{\\sqrt{3}}{2}$`, `$-\\frac{\\sqrt{3}}{2}$`],
        answer: 0,
        explanation: 'Step 1: Write $150 = 180-30$. Step 2: Sine is positive in second quadrant. Step 3: Reference value is $\\sin 30 = \\frac{1}{2}$. Step 4: Hence the first option holds.'
      },
      {
        q: '$120$ degrees in radians is',
        options: [`$\\frac{\\pi}{3}$`, `$\\frac{2\\pi}{3}$`, `$\\frac{3\\pi}{4}$`, `$\\pi$`],
        answer: 1,
        explanation: 'Step 1: Multiply by $\\frac{\\pi}{180}$. Step 2: Get $120\\frac{\\pi}{180}$. Step 3: Simplify to $\\frac{2\\pi}{3}$. Step 4: Hence the second option holds.'
      },
      // PYQ-pattern: allied angle swap rule
      {
        q: '$\\cos(270+\\theta)$ equals',
        options: [`$\\sin\\theta$`, `$-\\sin\\theta$`, `$\\cos\\theta$`, `$-\\cos\\theta$`],
        answer: 0,
        explanation: 'Step 1: Note $270 = 3 \\times 90$, odd multiple. Step 2: Cosine swaps to sine. Step 3: Fourth quadrant shifted cosine is positive sine. Step 4: Hence $\\sin\\theta$.'
      },
      {
        q: '$\\tan 45$ degrees equals',
        options: [`$0$`, `$1$`, `$\\sqrt{3}$`, `$\\frac{1}{\\sqrt{3}}$`],
        answer: 1,
        explanation: 'Step 1: Isosceles right triangle has equal legs. Step 2: Opposite over adjacent equals $1$. Step 3: Hence $\\tan 45 = 1$. Step 4: The second option matches.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.2
  {
    sectionId: 'math-a7-s11',
    readingTime: 9,
    intro: 'Compound formulas $\\sin(A\\pm B)$ and $\\cos(A\\pm B)$ generate every double, half and product identity by specialisation. Multiple angles compress powers while product to sum linearises products for integration and equations. This section proves and applies that family both ways.',
    objectives: [
      'Prove and use $\\sin(A\\pm B)$, $\\cos(A\\pm B)$ and $\\tan(A\\pm B)$',
      'Derive double and half angle forms including $\\tan 2A$ variants',
      'Convert products to sums and sums to products in both directions'
    ],
    concepts: [
      {
        term: 'Sum formulas',
        kind: 'theorem',
        statement: 'The **sum formulas** `sum-formulas` $\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$ and $\\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$ govern all shifts.',
        detail: 'Tangent follows as $\\tan(A\\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}$. Setting $B = A$ yields double angles at once.'
      },
      {
        term: 'Double angle family',
        kind: 'theorem',
        statement: 'Doubling gives **double forms** `double-forms` $\\sin 2A = 2\\sin A\\cos A$ and $\\cos 2A = \\cos^2 A-\\sin^2 A = 2\\cos^2 A-1 = 1-2\\sin^2 A$.',
        detail: 'Also $\\tan 2A = \\frac{2\\tan A}{1-\\tan^2 A}$ for $\\tan A \\ne \\pm 1$. The three cosine versions interconvert powers and are chosen to match the target expression.'
      },
      {
        term: 'Half angle family',
        kind: 'theorem',
        statement: 'Halving inverts doubling as **half forms** `half-forms` $\\sin^2\\frac{A}{2} = \\frac{1-\\cos A}{2}$ and $\\cos^2\\frac{A}{2} = \\frac{1+\\cos A}{2}$.',
        detail: 'Signs of $\\sin\\frac{A}{2}$ and $\\cos\\frac{A}{2}$ follow the quadrant of $\\frac{A}{2}$, not of $A$. Tangent half forms include $\\frac{\\sin A}{1+\\cos A}$ to avoid root signs.'
      },
      {
        term: 'Product to sum',
        kind: 'method',
        statement: 'Products linearise through **product to sum** `product-sum` $2\\sin A\\cos B = \\sin(A+B)+\\sin(A-B)$ and $2\\cos A\\cos B = \\cos(A+B)+\\cos(A-B)$.',
        detail: 'Also $2\\sin A\\sin B = \\cos(A-B)-\\cos(A+B)$. These turn integration and equation tasks from multiplicative to additive form.'
      },
      {
        term: 'Sum to product',
        kind: 'method',
        statement: 'Sums factor through **sum to product** `sum-product` $\\sin C+\\sin D = 2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}$ with matching cosine forms.',
        detail: 'Cosine versions are $\\cos C+\\cos D = 2\\cos\\frac{C+D}{2}\\cos\\frac{C-D}{2}$ and $\\cos C-\\cos D = -2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2}$. Factoring exposes zero sets for equations.'
      }
    ],
    figures: [
      {
        caption: 'Rotation by $A+B$ as successive rotations by $A$ then $B$ on the unit circle; coordinates of the final point give $\\cos(A+B)$ and $\\sin(A+B)$ directly.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Successive rotations adding angles"><circle cx="360" cy="180" r="120" fill="none" stroke="currentColor" stroke-width="1.7"/><line x1="360" y1="180" x2="480" y2="180" stroke="currentColor" stroke-width="1.4"/><line x1="360" y1="180" x2="460" y2="110" stroke="currentColor" stroke-width="1.4"/><line x1="360" y1="180" x2="400" y2="65" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4"/><path d="M400,180 A40,40 0 0 0 390,150" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M395,150 A60,60 0 0 0 385,115" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="405" y="175" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">A</text><text x="375" y="125" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">B</text><text x="490" y="195" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">start</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Double angle evaluation',
        problem: 'If $\\sin A = \\frac{3}{5}$ with $A$ acute, find $\\sin 2A$, $\\cos 2A$ and $\\tan 2A$.',
        steps: [
          { label: 'Step 1', text: 'First $\\cos A = \\frac{4}{5}$ from $3$-$4$-$5$:\n```text\nsin2A = 2 times 3 over 5 times 4 over 5 = 24 over 25\n```\nIn symbols $\\sin 2A = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}$.' },
          { label: 'Step 2', text: 'Then $\\cos 2A = 1-2\\sin^2 A = 1-2\\cdot\\frac{9}{25} = \\frac{7}{25}$, also $\\frac{16}{25}-\\frac{9}{25}$.' },
          { label: 'Step 3', text: 'Hence $\\tan 2A = \\frac{\\sin 2A}{\\cos 2A} = \\frac{24}{7}$, valid since denominator is nonzero.' }
        ],
        result: '$\\sin 2A = \\frac{24}{25}$, $\\cos 2A = \\frac{7}{25}$, $\\tan 2A = \\frac{24}{7}$.'
      },
      {
        title: 'Sum to product equation starter',
        problem: 'Simplify $\\sin 75 + \\sin 15$ to a single product and evaluate.',
        steps: [
          { label: 'Step 1', text: 'Use $\\sin C+\\sin D = 2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}$ with $C = 75$ and $D = 15$.' },
          { label: 'Step 2', text: 'Get $2\\sin 45\\cos 30 = 2\\cdot\\frac{1}{\\sqrt{2}}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{\\sqrt{2}}$.' },
          { label: 'Step 3', text: 'Rationalised value is $\\frac{\\sqrt{6}}{2}$, matching direct $\\sin 75+\\sin 15$ numeric sum.' }
        ],
        result: '$\\sin 75+\\sin 15 = \\frac{\\sqrt{6}}{2}$.'
      }
    ],
    keyTakeaways: [
      '$\\sin(A\\pm B)$ and $\\cos(A\\pm B)$ generate every later identity.',
      'Cosine double has three versions to match powers present.',
      'Half formulas carry quadrant dependent signs for $\\frac{A}{2}$.',
      'Product to sum and sum to product run in opposite directions.'
    ],
    quiz: [
      {
        q: '$\\sin 2A$ equals',
        options: [`$2\\sin A$`, `$2\\sin A\\cos A$`, `$\\sin^{2}A+\\cos^{2}A$`, `$\\tan A$`],
        answer: 1,
        explanation: 'Step 1: Put $B = A$ in $\\sin(A+B)$. Step 2: Get $\\sin A\\cos A+\\cos A\\sin A$. Step 3: Combine to $2\\sin A\\cos A$. Step 4: Hence the second option holds.'
      },
      // PYQ-pattern: triple angle style use of double
      {
        q: 'If $\\cos A = \\frac{1}{3}$ then $\\cos 2A$ equals',
        options: [`$\\frac{2}{3}$`, `$-\\frac{7}{9}$`, `$\\frac{7}{9}$`, `$0$`],
        answer: 1,
        explanation: 'Step 1: Use $\\cos 2A = 2\\cos^{2}A-1$. Step 2: Compute $2\\cdot\\frac{1}{9}-1$. Step 3: Value is $\\frac{2}{9}-1 = -\\frac{7}{9}$. Step 4: Hence the second option holds.'
      },
      {
        q: '$2\\sin A\\cos B$ equals',
        options: [`$\\sin(A+B)+\\sin(A-B)$`, `$\\cos(A+B)$ only`, `$\\sin A+\\sin B$`, `$0$`],
        answer: 0,
        explanation: 'Step 1: Add $\\sin(A+B)$ and $\\sin(A-B)$. Step 2: Cosine cross terms cancel. Step 3: Sum is $2\\sin A\\cos B$. Step 4: Hence the first option holds.'
      },
      {
        q: '$\\sin C+\\sin D$ factorises as',
        options: [`$2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}$`, `$2\\cos\\frac{C+D}{2}\\sin\\frac{C-D}{2}$ only as sum of cos`, 'cannot factor', 'sum of tangents'],
        answer: 0,
        explanation: 'Step 1: Set $C = A+B$ and $D = A-B$. Step 2: Solve $A = \\frac{C+D}{2}$. Step 3: Product form follows from sum formula. Step 4: Hence the first option holds.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Compound angle proofs and sharp triangle bounds',
        blocks: [
          {
            kind: 'theorem',
            body: 'The **compound formulas** $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$ and $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ generate the full multiple angle and product family. In particular $2\\sin A\\cos B = \\sin(A+B) + \\sin(A-B)$ and $\\sin C + \\sin D = 2\\sin((C+D)/2)\\cos((C-D)/2)$. For fixed amplitudes the sharp bound $a\\sin x + b\\cos x \\le \\sqrt{a^{2}+b^{2}}$ holds with equality at $\\tan x = a/b$ up to period. These are extremal in the sense that no smaller universal constant works for all $x$.'
          },
          {
            kind: 'proof',
            body: 'Start from $e^{i(A+B)} = e^{iA}e^{iB}$ with $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ and expand the right side; real and imaginary parts are exactly the cosine and sine addition laws. Adding the expansions for $A+B$ and $A-B$ cancels the cross terms and leaves product to sum. For sum to product set $C = A+B$ and $D = A-B$ so $A = (C+D)/2$ and $B = (C-D)/2$, then substitute into $\\sin(A+B)$ type formulas. The amplitude bound follows from $(a\\sin x + b\\cos x)^{2} + (a\\cos x - b\\sin x)^{2} = a^{2} + b^{2}$, so the first square cannot exceed the total.'
          },
          {
            kind: 'example',
            heading: 'Maximum of a harmonic combination located exactly',
            body: 'Maximize $3\\sin x + 4\\cos x$. The identity above gives $(3\\sin x + 4\\cos x)^{2} \\le 25$ with equality when $3\\cos x - 4\\sin x = 0$, namely $\\tan x = 3/4$. The maximum $5$ is attained at $x = \\arctan(3/4) + 2k\\pi$ and the minimum $-5$ half a period away. Writing $3\\sin x + 4\\cos x = 5\\sin(x + \\phi)$ with $\\cos\\phi = 3/5$ and $\\sin\\phi = 4/5$ exhibits the phase explicitly. Thus every linear combination is a single shifted sine with computable amplitude and phase, and the extremal values are read from the amplitude alone.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 14.3
  {
    sectionId: 'advmath-ch14-s3',
    readingTime: 8,
    intro: 'When $A+B+C = \\pi$, sines, cosines and tangents satisfy symmetric relations that replace angle chasing with algebra. Standard families include $\\sin 2A+\\sin 2B+\\sin 2C = 4\\sin A\\sin B\\sin C$. This section proves the core conditional identities.',
    objectives: [
      'Prove $\\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$ for $A+B+C = \\pi$',
      'Apply $\\sin 2A+\\sin 2B+\\sin 2C$ product form and cosine analogues',
      'Handle $A+B+C = \\frac{\\pi}{2}$ and sum constrained substitutions'
    ],
    concepts: [
      {
        term: 'Tangent condition',
        kind: 'theorem',
        statement: 'For $A+B+C = \\pi$, the **tangent condition** `tangent-cond` $\\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$ holds wherever defined.',
        detail: 'Proof expands $\\tan(A+B) = -\\tan C$ and clears denominators. Cases with $\\frac{\\pi}{2}$ angles are excluded since tangent blows up.'
      },
      {
        term: 'Sine double condition',
        kind: 'theorem',
        statement: 'The **sine double sum** `sine-double` $\\sin 2A+\\sin 2B+\\sin 2C = 4\\sin A\\sin B\\sin C$ holds for $A+B+C = \\pi$.',
        detail: 'Pair first two terms by sum to product, then use $C = \\pi-(A+B)$ to factor $\\cos\\frac{A-B}{2}$ style remainders into the triple product.'
      },
      {
        term: 'Cosine double condition',
        kind: 'theorem',
        statement: 'Companion **cosine relations** `cosine-cond` include $\\cos^2 A+\\cos^2 B+\\cos^2 C+2\\cos A\\cos B\\cos C = 1$ for $A+B+C = \\pi$.',
        detail: 'Derived by writing $C$ in terms of $A+B$ and applying sum formulas twice. The identity is symmetric and survives permutation of angles.'
      },
      {
        term: 'Half angle triangle form',
        kind: 'method',
        statement: 'With **half substitutions** `half-subst` $\\frac{A}{2}+\\frac{B}{2}+\\frac{C}{2} = \\frac{\\pi}{2}$, tangent products convert to $\\tan\\frac{A}{2}\\tan\\frac{B}{2}+\\cdots = 1$.',
        detail: 'This handles inradius style relations. The shift halves every angle, turning the $\\pi$ condition into a $\\frac{\\pi}{2}$ condition with complementary swaps.'
      },
      {
        term: 'Substitution families',
        kind: 'insight',
        statement: 'Conditions like $x+y+z = 1$ use **trig substitution** `trig-subst` $x = \\tan\\frac{A}{2}$ patterns to import triangle identities into algebra.',
        detail: 'If $xy+yz+zx = 1$ then $x, y, z$ match half angle tangents of a triangle. This transfers geometric identities to algebraic inequalities and equations.'
      }
    ],
    figures: [
      {
        caption: 'Triangle angles $A+B+C = \\pi$ map to points on $y = \\tan x$; the condition $\\tan(A+B) = -\\tan C$ balances the three tangents into the product sum identity.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Triangle with angles summing to pi"><polygon points="160,280 520,280 340,100" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M210,280 A50,50 0 0 0 195,240" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M470,280 A50,50 0 0 1 485,240" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M355,135 A35,35 0 0 0 325,135" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="210" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">A</text><text x="470" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">B</text><text x="340" y="90" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">C</text><text x="340" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">A plus B plus C equals pi</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Tangent condition proof use',
        problem: 'If $A+B+C = \\pi$ with no angle $\\frac{\\pi}{2}$, prove $\\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$.',
        steps: [
          { label: 'Step 1', text: 'From $A+B = \\pi-C$ take tangents:\n```text\n(tan A + tan B) over (1 - tan A tan B) = - tan C\n```\nIn symbols $\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B} = -\\tan C$.' },
          { label: 'Step 2', text: 'Clear denominators: $\\tan A+\\tan B = -\\tan C+\\tan A\\tan B\\tan C$.' },
          { label: 'Step 3', text: 'Rearrange to the required sum equals product form, valid since denominators are nonzero.' }
        ],
        result: 'Identity proved for all defined tangents with sum $\\pi$.'
      },
      {
        title: 'Sine double numeric check',
        problem: 'Verify $\\sin 2A+\\sin 2B+\\sin 2C = 4\\sin A\\sin B\\sin C$ for $A = 60$, $B = 70$, $C = 50$ degrees.',
        steps: [
          { label: 'Step 1', text: 'Left side uses $\\sin 120+\\sin 140+\\sin 100 \\approx 0.866+0.643+0.985 = 2.494$.' },
          { label: 'Step 2', text: 'Right side is $4\\sin 60\\sin 70\\sin 50 \\approx 4(0.866)(0.940)(0.766) \\approx 2.494$.' },
          { label: 'Step 3', text: 'Agreement confirms the conditional form for this triangle.' }
        ],
        result: 'Both sides about $2.49$, confirming the identity.'
      }
    ],
    keyTakeaways: [
      '$A+B+C = \\pi$ gives $\\tan$ sum equals $\\tan$ product.',
      'Sine doubles sum to $4\\sin A\\sin B\\sin C$ under the same condition.',
      'Cosine squares satisfy $\\sum\\cos^2+2\\prod\\cos = 1$.',
      'Half angle shift turns $\\pi$ into $\\frac{\\pi}{2}$ product relations.'
    ],
    quiz: [
      {
        q: 'If $A+B+C = \\pi$ then $\\tan A+\\tan B+\\tan C$ equals',
        options: [`$0$`, `$\\tan A\\tan B\\tan C$`, `$1$`, `$-1$`],
        answer: 1,
        explanation: 'Step 1: Write $A+B = \\pi-C$. Step 2: Take tangents of both sides. Step 3: Clear denominators. Step 4: Sum equals product, the second option.'
      },
      {
        q: '$\\sin 2A+\\sin 2B+\\sin 2C$ for $A+B+C = \\pi$ equals',
        options: [`$4\\sin A\\sin B\\sin C$`, `$0$`, `$1$`, `$4\\cos A\\cos B\\cos C$`],
        answer: 0,
        explanation: 'Step 1: Pair first two sines by sum to product. Step 2: Replace $C$ with $\\pi-(A+B)$. Step 3: Factor common sine terms. Step 4: Triple product emerges, the first option.'
      },
      // PYQ-pattern: cosine squares condition
      {
        q: 'For $A+B+C = \\pi$, $\\cos^{2}A+\\cos^{2}B+\\cos^{2}C+2\\cos A\\cos B\\cos C$ equals',
        options: [`$0$`, `$1$`, `$2$`, `$-1$`],
        answer: 1,
        explanation: 'Step 1: Expand $\\cos(A+B) = -\\cos C$. Step 2: Square and rearrange symmetric terms. Step 3: Cross terms collect to $2\\prod\\cos$. Step 4: Total is $1$.'
      },
      {
        q: 'If $\\frac{A}{2}+\\frac{B}{2}+\\frac{C}{2} = \\frac{\\pi}{2}$ then $\\sum\\tan\\frac{A}{2}\\tan\\frac{B}{2}$ equals',
        options: [`$0$`, `$1$`, `$2$`, 'not defined'],
        answer: 1,
        explanation: 'Step 1: Apply tangent sum for $\\frac{\\pi}{2}$ complement. Step 2: Use $\\tan(\\frac{A+B}{2}) = \\cot\\frac{C}{2}$. Step 3: Clear denominators. Step 4: Pairwise sum equals $1$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.4
  {
    sectionId: 'math-a7-s12',
    readingTime: 8,
    intro: 'Trigonometric equations admit infinite families indexed by integers, built from principal values plus period shifts. Squaring and multiplying by variable expressions can plant false candidates. This section solves standard families with domain checks.',
    objectives: [
      'Write general solutions for $\\sin x = k$, $\\cos x = k$, $\\tan x = k$',
      'Solve $a\\cos x+b\\sin x = c$ by auxiliary angle with $|c| \\le \\sqrt{a^{2}+b^{2}}$ checks',
      'Reject extraneous roots from squaring and lost roots from division'
    ],
    concepts: [
      {
        term: 'Principal value range',
        kind: 'definition',
        statement: 'Each **principal value** `principal-val` is the unique angle in $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ for sine, $[0,\\pi]$ for cosine and $(-\\frac{\\pi}{2},\\frac{\\pi}{2})$ for tangent matching the given value.',
        detail: 'Denote it $\\alpha$. All other solutions are built by adding periods or reflecting across axes from this seed.'
      },
      {
        term: 'General sine solution',
        kind: 'theorem',
        statement: 'The equation $\\sin x = k$ with $|k| \\le 1$ has **general solution** `general-sine` $x = n\\pi+(-1)^{n}\\alpha$ for integer $n$.',
        detail: 'Even $n$ gives $\\alpha$ plus full turns, odd $n$ gives $\\pi-\\alpha$ plus turns. No solution exists when $|k| > 1$.'
      },
      {
        term: 'General cosine tangent',
        kind: 'theorem',
        statement: 'Cosine and tangent have **family forms** `family-forms` $x = 2n\\pi\\pm\\alpha$ for $\\cos x = k$ and $x = n\\pi+\\alpha$ for $\\tan x = k$.',
        detail: 'Cosine uses symmetric $\\pm$ because $\\cos$ is even. Tangent has period $\\pi$, so a single shift covers all solutions with no reflection branch.'
      },
      {
        term: 'Auxiliary angle method',
        kind: 'method',
        statement: 'The **auxiliary method** `auxiliary-method` writes $a\\cos x+b\\sin x = R\\cos(x-\\phi)$ with $R = \\sqrt{a^{2}+b^{2}}$ and $\\tan\\phi = \\frac{b}{a}$.',
        detail: 'Solvability needs $|c| \\le R$. Dividing by $R$ normalises to a pure cosine equation, after which the cosine family applies.'
      },
      {
        term: 'Extraneous discipline',
        kind: 'insight',
        statement: 'Squaring introduces **false candidates** `false-candidates` while dividing by $\\sin x$ or $\\cos x$ can delete genuine roots; both need audits.',
        detail: 'Never divide by a trig factor without setting it to zero separately. After squaring, test every candidate in the original unsquared equation.'
      }
    ],
    figures: [
      {
        caption: 'Roots of $\\sin x = k$ alternate between $\\alpha+2n\\pi$ and $\\pi-\\alpha+2n\\pi$; cosine roots mirror as $\\pm\\alpha+2n\\pi$ while tangent repeats every $\\pi$.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Sine wave with solution families"><path d="M60,180 C120,80 180,80 240,180 C300,280 360,280 420,180 C480,80 540,80 600,180 C640,240 660,250 690,230" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="60" y1="140" x2="690" y2="140" stroke="currentColor" stroke-width="1.1" stroke-dasharray="6 4"/><circle cx="150" cy="140" r="4" fill="currentColor"/><circle cx="330" cy="140" r="4" fill="currentColor"/><circle cx="510" cy="140" r="4" fill="currentColor"/><text x="150" y="125" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">alpha</text><text x="330" y="125" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">pi minus alpha</text><text x="510" y="125" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">alpha plus 2 pi</text><text x="620" y="125" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">level k</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Auxiliary angle equation',
        problem: 'Solve $\\sqrt{3}\\cos x+\\sin x = 1$ for $0 \\le x < 2\\pi$.',
        steps: [
          { label: 'Step 1', text: 'Here $R = 2$:\n```text\n2 cos(x - 30 deg) = 1 so cos(x - 30 deg) = 1 over 2\n```\nIn symbols $2\\cos(x-\\frac{\\pi}{6}) = 1$.' },
          { label: 'Step 2', text: 'Hence $x-\\frac{\\pi}{6} = \\pm\\frac{\\pi}{3}+2n\\pi$, giving $x = \\frac{\\pi}{2}$ or $x = -\\frac{\\pi}{6}$ modulo $2\\pi$.' },
          { label: 'Step 3', text: 'In $[0,2\\pi)$ the solutions are $x = \\frac{\\pi}{2}$ and $x = \\frac{11\\pi}{6}$, both verified by substitution.' }
        ],
        result: '$x = \\frac{\\pi}{2}$ or $x = \\frac{11\\pi}{6}$ in the interval.'
      },
      {
        title: 'Squaring trap with check',
        problem: 'Solve $\\sin x+\\cos x = 1$ on $[0,2\\pi)$ carefully.',
        steps: [
          { label: 'Step 1', text: 'Square once: $1+\\sin 2x = 1$ so $\\sin 2x = 0$, giving $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$.' },
          { label: 'Step 2', text: 'Test each: $x = \\pi$ gives $-1 \\ne 1$ and $x = \\frac{3\\pi}{2}$ gives $-1 \\ne 1$, so both are extraneous.' },
          { label: 'Step 3', text: 'Keep $x = 0$ and $x = \\frac{\\pi}{2}$ which satisfy the original sum.' }
        ],
        result: 'Genuine solutions $0$ and $\\frac{\\pi}{2}$ only.'
      }
    ],
    keyTakeaways: [
      '$\\sin x = k$ gives $x = n\\pi+(-1)^{n}\\alpha$ for $|k| \\le 1$.',
      '$\\cos$ uses $2n\\pi\\pm\\alpha$ while $\\tan$ uses $n\\pi+\\alpha$.',
      '$a\\cos x+b\\sin x = R\\cos(x-\\phi)$ needs $|c| \\le R$.',
      'Test after squaring; set deleted factors to zero separately.'
    ],
    quiz: [
      {
        q: 'General solution of $\\sin x = 0$ is',
        options: [`$x = n\\pi$`, `$x = 2n\\pi$`, `$x = n\\pi+\\frac{\\pi}{2}$`, 'no solution'],
        answer: 0,
        explanation: 'Step 1: Zeros of sine lie at multiples of $\\pi$. Step 2: Formula $n\\pi+(-1)^{n}0$ reduces to $n\\pi$. Step 3: Even and odd branches merge. Step 4: Hence the first option holds.'
      },
      {
        q: '$\\cos x = \\frac{1}{2}$ general solution is',
        options: [`$x = n\\pi\\pm\\frac{\\pi}{3}$`, `$x = 2n\\pi\\pm\\frac{\\pi}{3}$`, `$x = n\\pi$`, 'impossible'],
        answer: 1,
        explanation: 'Step 1: Principal value is $\\frac{\\pi}{3}$. Step 2: Cosine period is $2\\pi$. Step 3: Even symmetry gives $\\pm$. Step 4: Hence $2n\\pi\\pm\\frac{\\pi}{3}$.'
      },
      // PYQ-pattern: auxiliary max bound
      {
        q: '$3\\cos x+4\\sin x = 6$ has',
        options: ['two solutions per period', 'no solution', 'one solution', 'infinite solutions'],
        answer: 1,
        explanation: 'Step 1: Compute $R = 5$. Step 2: Need $|6| \\le 5$ for solvability. Step 3: Inequality fails. Step 4: Hence no solution.'
      },
      {
        q: 'After squaring $\\sqrt{\\sin x} = \\cos x$, one must',
        options: ['accept all $x$', 'test $\\cos x \\ge 0$ plus original', 'drop all negative $x$', 'divide by $\\sin x$'],
        answer: 1,
        explanation: 'Step 1: Squaring hides sign of $\\cos x$. Step 2: Original needs $\\cos x \\ge 0$. Step 3: Also radicand needs $\\sin x \\ge 0$. Step 4: Hence test both conditions.'
      }
    ]
  }
]
