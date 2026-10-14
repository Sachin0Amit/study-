import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Complex Numbers (Sections 1.1 - 1.4)
// Master study content. Argand plane, De Moivre rotations, unity roots,
// triangle bounds and loci.
// ============================================================================

export const jeemathsCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'jeemaths-ch1-s1',
    readingTime: 8,
    intro: 'Every complex number $z = x + iy$ is a point $(x, y)$ in the Argand plane, so algebra becomes geometry. The modulus $|z|$ measures distance from the origin while the argument measures direction, and the two together give the polar form. This section builds the toolkit that all later rotation and locus work rests on.',
    objectives: [
      'Compute $|z|$, $\\arg z$ and $\\bar{z}$ fluently and convert between Cartesian and polar forms',
      'Apply modulus laws such as $|z_1 z_2| = |z_1||z_2|$ and $|z|^2 = z\\bar{z}$ to simplify products and quotients',
      'Read $|z_1 - z_2|$ as distance and use conjugate symmetry to rationalise denominators'
    ],
    concepts: [
      {
        term: 'Modulus as distance',
        kind: 'definition',
        statement: 'The **modulus** $|z| = \\sqrt{x^2 + y^2}$ for `z = x + iy` is the distance from the origin to the point, and $|z_1 - z_2|$ is the distance between two points.',
        detail: 'Hence $|z| \\ge 0$ with equality only at $z = 0$, and $|-z| = |\\bar{z}| = |z|$. In polar form $z = r(\\cos\\theta + i\\sin\\theta)$ the number $r$ is exactly $|z|$, so $r \\ge 0$ is forced.'
      },
      {
        term: 'Conjugate pairing',
        kind: 'theorem',
        statement: 'The **conjugate** `conjugate of z = x + iy is x - iy` obeys $\\bar{\\bar{z}} = z$, $z + \\bar{z} = 2\\Re(z)$ and the product rule $|z|^2 = z\\bar{z}$.',
        detail: 'Conjugation reflects across the real axis, so $\\overline{z_1 + z_2} = \\bar{z}_1 + \\bar{z}_2$ and $\\overline{z_1 z_2} = \\bar{z}_1\\bar{z}_2$. The identity $z\\bar{z} = |z|^2$ turns every division into $\\frac{1}{z} = \\frac{\\bar{z}}{|z|^2}$ for nonzero $z$.'
      },
      {
        term: 'Argument and principal value',
        kind: 'definition',
        statement: 'The **argument** `arg z` is any angle $\\theta$ with $z = |z|(\\cos\\theta + i\\sin\\theta)$, while the principal value $\\mathrm{Arg}\\, z \\in (-\\pi, \\pi]$ is the single canonical choice.',
        detail: 'For $z$ in the first quadrant $\\mathrm{Arg}\\, z = \\tan^{-1}\\frac{y}{x}$, with quadrant corrections $\\pm \\pi$ elsewhere, and $\\mathrm{Arg}$ is undefined at $z = 0$. Adding $2k\\pi$ gives all values: $\\arg z = \\mathrm{Arg}\\, z + 2k\\pi$.'
      },
      {
        term: 'Modulus laws for products',
        kind: 'law',
        statement: 'Moduli **multiply and divide**: `|z1 z2| = |z1| |z2|` gives $|z_1 z_2| = |z_1||z_2|$ and $|\\frac{z_1}{z_2}| = \\frac{|z_1|}{|z_2|}$ for $z_2 \\ne 0$.',
        detail: 'Powers follow at once with $|z^n| = |z|^n$. A frequent trap is to distribute modulus over sums: $|z_1 + z_2|$ is not $|z_1| + |z_2|$ except in the positive-real-multiple case treated in Section 1.3.'
      },
      {
        term: 'Argument laws with branch care',
        kind: 'law',
        statement: 'Arguments **add and subtract modulo $2\\pi$**: `arg(z1 z2) = arg z1 + arg z2` means $\\arg(z_1 z_2) = \\arg z_1 + \\arg z_2 + 2k\\pi$ for a suitable integer $k$.',
        detail: 'Similarly $\\arg(\\frac{z_1}{z_2}) = \\arg z_1 - \\arg z_2 + 2k\\pi$ and $\\arg(\\bar{z}) = -\\arg z$. The principal value can jump by $2\\pi$: for instance $\\mathrm{Arg}$ of two second-quadrant numbers can sum past $\\pi$, so always reduce modulo $2\\pi$ into $(-\\pi, \\pi]$.'
      }
    ],
    examples: [
      {
        title: 'Modulus-argument conversion and division',
        problem: 'Let $z = 1 + i\\sqrt{3}$. Find $|z|$, $\\mathrm{Arg}\\, z$ and $\\frac{1}{z}$ in $a + ib$ form.',
        steps: [
          { label: 'Step 1', text: '```text\n|z| = sqrt(1 + 3) = 2; tan theta = sqrt(3) with x > 0, y > 0\n```\nModulus is $r = \\sqrt{1^2 + (\\sqrt{3})^2} = 2$. Since both coordinates are positive, the point lies in the first quadrant with $\\tan\\theta = \\sqrt{3}$, hence $\\theta = \\frac{\\pi}{3}$.' },
          { label: 'Step 2', text: 'Polar form is therefore $z = 2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$ and $\\mathrm{Arg}\\, z = \\frac{\\pi}{3}$. No branch correction is needed because the angle already lies in $(-\\pi, \\pi]$.' },
          { label: 'Step 3', text: 'Rationalise with the conjugate: $\\frac{1}{z} = \\frac{\\bar{z}}{|z|^2} = \\frac{1 - i\\sqrt{3}}{4} = \\frac{1}{4} - i\\frac{\\sqrt{3}}{4}$. Check by $|\\frac{1}{z}| = \\frac{1}{|z|} = \\frac{1}{2}$, which matches $\\sqrt{(\\frac{1}{4})^2 + (\\frac{\\sqrt{3}}{4})^2}$.' }
        ],
        result: '$|z| = 2$, $\\mathrm{Arg}\\, z = \\frac{\\pi}{3}$ and $\\frac{1}{z} = \\frac{1}{4} - i\\frac{\\sqrt{3}}{4}$.'
      },
      {
        title: 'Distance reading of a modulus equation',
        problem: 'Describe the set $|z - (2 + i)| = 3$ and find the maximum of $|z|$ on it.',
        steps: [
          { label: 'Step 1', text: '```text\ncentre C = (2, 1), radius 3; |z| = distance from origin O\n```\nRead $|z - z_0|$ as distance from $z_0$: this is the circle centred at $(2, 1)$ with radius $3$.' },
          { label: 'Step 2', text: 'The farthest point from the origin on a circle lies on the ray from the origin through the centre. Here $|OC| = \\sqrt{2^2 + 1^2} = \\sqrt{5}$, so the maximum is $|OC| + 3 = 3 + \\sqrt{5}$.' },
          { label: 'Step 3', text: 'It is attained at $z = (3 + \\sqrt{5})\\frac{2 + i}{\\sqrt{5}}$, the positive scalar multiple of the centre direction with that modulus. The minimum similarly is $|3 - \\sqrt{5}|$.' }
        ],
        result: 'Circle centre $(2,1)$ radius $3$; maximum of $|z|$ is $3 + \\sqrt{5}$ on the outward radial point.'
      }
    ],
    keyTakeaways: [
      'Polar form $z = r(\\cos\\theta + i\\sin\\theta)$ unites modulus $r = |z|$ with direction $\\theta = \\arg z$.',
      'Conjugate identity $z\\bar{z} = |z|^2$ handles every division via $\\frac{1}{z} = \\frac{\\bar{z}}{|z|^2}$.',
      'Moduli multiply and divide; arguments add and subtract modulo $2\\pi$ with principal value in $(-\\pi, \\pi]$.',
      'Read $|z_1 - z_2|$ as distance: modulus equations are circles and distance bounds in disguise.'
    ],
    quiz: [
      {
        q: 'If $z = -1 + i$, what is $\\mathrm{Arg}\\, z$?',
        options: [`$\\frac{\\pi}{4}$`, `$\\frac{3\\pi}{4}$`, `$-\\frac{3\\pi}{4}$`, `$-\\frac{\\pi}{4}$`],
        answer: 1,
        explanation: 'Step 1: Compute $r = \\sqrt{2}$ and note $x < 0$, $y > 0$, so the point is in the second quadrant. Step 2: The reference angle is $\\tan^{-1}|\\frac{y}{x}| = \\frac{\\pi}{4}$. Step 3: Second-quadrant principal value is $\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Step 4: The remaining options are first, third and fourth quadrant angles, so they cannot match.'
      },
      // PYQ-pattern: principal-argument quadrant drill
      {
        q: 'For nonzero $z$, which identity is always correct?',
        options: [`$|z_1 + z_2| = |z_1| + |z_2|$`, `$|z|^2 = z\\bar{z}$`, `$\\bar{z} = -z$`, `$|z_1 - z_2| = ||z_1| - |z_2||$`],
        answer: 1,
        explanation: 'Step 1: Expand $(x+iy)(x-iy) = x^2+y^2 = |z|^2$, proving the product rule. Step 2: The sum formula fails in general by the triangle inequality, with equality only for positive real multiples. Step 3: Conjugation negates only the imaginary part, not the whole number. Step 4: The last option is the reverse-triangle lower bound, not an equality in general.'
      },
      {
        q: 'If $|z| = 5$ then $|\\frac{2}{z}|$ equals',
        options: [`$10$`, `$\\frac{5}{2}$`, `$\\frac{1}{5}$`, `$\\frac{2}{5}$`],
        answer: 3,
        explanation: 'Step 1: Use $|\\frac{w}{z}| = \\frac{|w|}{|z|}$ with $w = 2$. Step 2: Numerator modulus is $|2| = 2$. Step 3: Hence the value is $\\frac{2}{5}$. Step 4: The reciprocal trap $\\frac{1}{5}$ forgets the numerator $2$.'
      },
      {
        q: 'The locus $|z - 3i| = |z + 3i|$ is',
        options: ['a circle centred at the origin', 'the real axis', 'the imaginary axis', 'a parabola'],
        answer: 1,
        explanation: 'Step 1: Equate squared distances $|x + i(y-3)|^2 = |x + i(y+3)|^2$. Step 2: Expanding gives $x^2 + (y-3)^2 = x^2 + (y+3)^2$. Step 3: Cancelling yields $-6y = 6y$, so $y = 0$. Step 4: Thus the set is the real axis, the perpendicular bisector of the two foci.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Modulus geometry and sharp triangle bounds',
        blocks: [
          {
            kind: 'theorem',
            body: 'For all $z_{1}$ and $z_{2}$ in $\\mathbb{C}$ the **triangle inequality** states $|z_{1} + z_{2}| \\le |z_{1}| + |z_{2}|$ with equality exactly when one of them is a nonnegative real multiple of the other, equivalently when $z_{1} \\bar{z}_{2}$ is a nonnegative real number. The reverse form $|z_{1} - z_{2}| \\ge |r_{1} - r_{2}|$ with $r_{1} = |z_{1}|$ and $r_{2} = |z_{2}|$ is sharp in the same collinear case. At the graduate level both are unified by the parallelogram law $|z_{1} + z_{2}|^{2} + |z_{1} - z_{2}|^{2} = 2|z_{1}|^{2} + 2|z_{2}|^{2}$, which says that the sum of squared diagonals equals twice the sum of squared adjacent sides.'
          },
          {
            kind: 'proof',
            body: 'Square the two sides to expose the real part. Since $|z_{1} + z_{2}|^{2} = (z_{1} + z_{2})(\\bar{z}_{1} + \\bar{z}_{2}) = |z_{1}|^{2} + |z_{2}|^{2} + 2\\Re(z_{1}\\bar{z}_{2})$ while $(|z_{1}| + |z_{2}|)^{2} = |z_{1}|^{2} + |z_{2}|^{2} + 2|z_{1}||z_{2}|$, the inequality is equivalent to $\\Re(z_{1}\\bar{z}_{2}) \\le |z_{1}||z_{2}|$, which holds because the real part never exceeds the modulus. Equality needs $z_{1}\\bar{z}_{2} = |z_{1}||z_{2}|$, hence equal arguments or a zero factor. Adding the expansions of $|z_{1}+z_{2}|^{2}$ and $|z_{1}-z_{2}|^{2}$ cancels the cross terms and yields the parallelogram identity.'
          },
          {
            kind: 'example',
            heading: 'Sharp bound attained on a ray',
            body: 'Fix $a$ in $\\mathbb{C}$ and $r > 0$ and maximize $|z + a|$ subject to $|z| = r$. The triangle bound gives $|z + a| \\le r + |a|$ with equality exactly for $z$ a positive real multiple of $a$, namely $z = ra/m$ where $m = |a|$ when $a \\ne 0$. The minimum equals $|m - r|$, attained at the antipodal point $z = -ra/m$. Geometrically the extremal points lie where the ray through the origin and $a$ meets the circle, so the abstract inequality becomes a statement about collinearity, and every maximum modulus problem on a circle reduces to finding this radial alignment.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'jeemaths-ch1-s2',
    readingTime: 9,
    intro: 'De Moivre theorem turns powers and roots of complex numbers into easy trigonometry: raising to $n$ multiplies the angle by $n$. The same idea rotates points in the plane and places the $n$-th roots of unity as a regular polygon. This section makes rotation-by-multiplication automatic.',
    objectives: [
      'State and apply $(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$ for integer powers and roots',
      'Rotate a point about any centre with $w = a + (z - a)e^{i\\theta}$ and read off the image',
      'List the $n$-th roots of unity and use their regular-polygon symmetry'
    ],
    concepts: [
      {
        term: 'De Moivre theorem',
        kind: 'theorem',
        statement: 'For integer $n$, **De Moivre** says `(cos t + i sin t)^n = cos nt + i sin nt`, compactly $(e^{i\\theta})^n = e^{in\\theta}$.',
        detail: 'It follows from $|e^{i\\theta}| = 1$ and argument addition: each multiplication adds $\\theta$. For negative $n$ use the reciprocal, and for rational $p/q$ it gives one value plus all branches of the $q$-th root.'
      },
      {
        term: 'Exponential polar form',
        kind: 'notation',
        statement: 'Every nonzero $z$ is **$z = re^{i\\theta}$** with `r = |z|` and $\\theta = \\arg z$, so products add exponents: $r_1e^{i\\theta_1} r_2e^{i\\theta_2} = r_1r_2e^{i(\\theta_1+\\theta_2)}$.',
        detail: 'Division subtracts exponents and conjugation negates the exponent: $\\overline{re^{i\\theta}} = re^{-i\\theta}$. This form makes rotation visible: multiplying by $e^{i\\phi}$ rotates by $\\phi$ without changing modulus.'
      },
      {
        term: 'Rotation operator',
        kind: 'method',
        statement: 'Multiplying by $e^{i\\phi}$ **rotates** by `angle phi`: $w = z_0 + (z - z_0)(\\cos\\phi + i\\sin\\phi)$ rotates $z$ about $z_0$ through $\\phi$ anticlockwise.',
        detail: 'Special cases to memorise: $\\times i$ is $+\\frac{\\pi}{2}$, $\\times (-1)$ is $\\pi$, $\\times (-i)$ is $-\\frac{\\pi}{2}$. For a right-isosceles or equilateral construction, the rotation angle is $\\pm\\frac{\\pi}{2}$ or $\\pm\\frac{\\pi}{3}$ respectively.'
      },
      {
        term: 'Roots of unity polygon',
        kind: 'theorem',
        statement: 'The $n$ roots of $z^n = 1$ are **$e^{2k\\pi i/n}$** for `k = 0, ..., n - 1`, the vertices of a regular $n$-gon on $|z| = 1$.',
        detail: 'Consecutive roots differ by $\\frac{2\\pi}{n}$, their sum is $0$ for $n > 1$, and their product is $(-1)^{n+1}$. Any equation $z^n = w_0$ is the same polygon scaled by $|w_0|^{1/n}$ and rotated by $\\frac{\\arg w_0}{n}$.'
      },
      {
        term: 'Power expansion trap',
        kind: 'insight',
        statement: 'De Moivre expands **$(\\cos\\theta + i\\sin\\theta)^n$ only**; `a + ib` with $a^2+b^2 \\ne 1$ must first be written as `r(cos t + i sin t)` before the theorem applies.',
        detail: 'Forgetting the factor $r^n$ is the standard slip: $(2e^{i\\theta})^3 = 8e^{3i\\theta}$, not $e^{3i\\theta}$. Likewise $(\\cos\\theta + i\\sin\\theta)^{p/q}$ has $q$ distinct values; quoting only the principal one loses roots.'
      }
    ],
    derivations: [
      {
        title: 'De Moivre Formula by Induction on the Exponent',
        statement: 'Derivation of $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$ for integer $n \\ge 1$',
        prerequisites: [
          'Angle-addition rules $\\cos(A+B)$ and $\\sin(A+B)$ in expanded form',
          'Principle of mathematical induction from base case to successor',
          'Modulus-one form $z = \\cos\\theta + i\\sin\\theta$ with $|z| = 1$',
        ],
        steps: [
          {
            label: 'Step 1: Verify the base case',
            formula: '$$(\\cos\\theta + i\\sin\\theta)^{1} = \\cos\\theta + i\\sin\\theta$$',
            explanation: 'For $n = 1$ both sides are literally the same expression, so the claim holds trivially. This anchor works because induction needs one verified starting rung before climbing. No trigonometry beyond identity is used here.',
          },
          {
            label: 'Step 2: State the inductive hypothesis',
            formula: '$$(\\cos\\theta + i\\sin\\theta)^{k} = \\cos k\\theta + i\\sin k\\theta$$',
            explanation: 'Assume the formula true at an arbitrary exponent $k \\ge 1$. This assumption works as the inductive lever because the next power is just one more multiplication by the same base. The goal is to deduce the $k+1$ case from it.',
          },
          {
            label: 'Step 3: Multiply once more and expand',
            formula: '$$(\\cos k\\theta + i\\sin k\\theta)(\\cos\\theta + i\\sin\\theta)$$',
            explanation: 'Write the $(k+1)$-th power as the $k$-th power times one extra factor, then substitute the hypothesis. This factorisation works because laws of exponents allow $z^{k+1} = z^{k}z$ for every nonzero $z$. Expanding gives real and imaginary parts ready for the addition rules.',
          },
          {
            label: 'Step 4: Collapse with angle addition to close induction',
            formula: '$$\\cos k\\theta\\cos\\theta - \\sin k\\theta\\sin\\theta = \\cos(k+1)\\theta$$',
            explanation: 'The real part matches $\\cos(k+1)\\theta$ and the imaginary part matches $\\sin(k+1)\\theta$ by the cosine and sine addition formulas. This identification works because those formulas are exactly the multiplication table for modulus-one numbers. Hence truth at $k$ forces truth at $k+1$, completing induction for all $n \\ge 1$.',
          },
        ],
        result: 'For integer $n \\ge 1$, $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$, meaning integer powers multiply the argument while preserving unit modulus.',
      },
    ],
    examples: [
      {
        title: 'Power via De Moivre',
        problem: 'Evaluate $(1 + i)^{12}$ in $a + ib$ form.',
        steps: [
          { label: 'Step 1', text: '```text\n1 + i = sqrt(2) e^{i pi / 4}; raise modulus and angle separately\n```\nWrite $1 + i = \\sqrt{2}(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4})$ with $r = \\sqrt{2}$ and $\\theta = \\frac{\\pi}{4}$.' },
          { label: 'Step 2', text: 'De Moivre gives $(1+i)^{12} = (\\sqrt{2})^{12}(\\cos 3\\pi + i\\sin 3\\pi)$. Since $(\\sqrt{2})^{12} = 2^6 = 64$ and $\\cos 3\\pi = -1$, $\\sin 3\\pi = 0$.' },
          { label: 'Step 3', text: 'Hence the value is $64(-1 + 0i) = -64$. As a check, $|(1+i)^{12}| = (\\sqrt{2})^{12} = 64 = |-64|$.' }
        ],
        result: '$(1+i)^{12} = -64$.'
      },
      {
        title: 'Rotation to complete a square',
        problem: '$A$ and $B$ are $1$ and $3 + i$ in the Argand plane. Point $C$ completes square $ABCD$ in order. Find $C$ and $D$.',
        steps: [
          { label: 'Step 1', text: '```text\nrotate vector AB by +90 degrees about A to get AD\n```\nVector $\\overrightarrow{AB} = (3+i) - 1 = 2 + i$. Rotating by $+\\frac{\\pi}{2}$ about $A$ gives $\\overrightarrow{AD} = i(2+i) = -1 + 2i$.' },
          { label: 'Step 2', text: 'Thus $D = A + \\overrightarrow{AD} = 1 + (-1 + 2i) = 2i$. The diagonal gives $C = B + \\overrightarrow{AD} = (3+i) + (-1+2i) = 2 + 3i$.' },
          { label: 'Step 3', text: 'Check: $|AB| = \\sqrt{5} = |AD|$ and $\\arg\\frac{\\overrightarrow{AD}}{\\overrightarrow{AB}} = \\frac{\\pi}{2}$, confirming a square. The other orientation would use $-i$ and give the square on the opposite side.' }
        ],
        result: '$D = 2i$ and $C = 2 + 3i$ for the anticlockwise square; clockwise choice swaps the sign of the rotation.'
      }
    ],
    keyTakeaways: [
      'De Moivre $(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$ converts powers to angle multiples.',
      'Always factor out $r = |z|$ first: $(re^{i\\theta})^n = r^n e^{in\\theta}$ keeps the $r^n$ factor.',
      'Multiplication by $e^{i\\phi}$ rotates by $\\phi$; $w = a + (z-a)e^{i\\phi}$ rotates about $a$.',
      'Roots of $z^n = w_0$ form a regular $n$-gon scaled by $|w_0|^{1/n}$ and rotated by $\\frac{\\arg w_0}{n}$.'
    ],
    quiz: [
      {
        q: 'Value of $(\\cos\\frac{\\pi}{8} + i\\sin\\frac{\\pi}{8})^8$ is',
        options: [`$1$`, `$-1$`, `$i$`, `$-i$`],
        answer: 2,
        explanation: 'Step 1: Apply De Moivre with $n = 8$: angle becomes $8 \\times \\frac{\\pi}{8} = \\pi$. Step 2: Hence value is $\\cos\\pi + i\\sin\\pi = -1$. Step 3: Modulus stays $1$ since $r = 1$. Step 4: Options $\\pm i$ would need angle $\\frac{\\pi}{2}$ or $\\frac{3\\pi}{2}$.'
      },
      {
        q: 'Multiplying $z$ by $i$ geometrically means',
        options: [`$\\text{reflection across real axis}$`, `$\\text{rotation by } \\frac{\\pi}{2} \\text{ anticlockwise about } 0$`, `$\\text{rotation by } \\pi$`, `$\\text{scaling by } 2$`],
        answer: 1,
        explanation: 'Step 1: Write $i = e^{i\\pi/2}$ with modulus $1$. Step 2: Multiplication adds arguments, so $\\arg(iz) = \\arg z + \\frac{\\pi}{2}$. Step 3: Modulus is unchanged since $|i| = 1$. Step 4: Thus the map is a quarter-turn about the origin, not a reflection or scaling.'
      },
      // PYQ-pattern: De Moivre integer-power computation
      {
        q: 'The three cube roots of $8i$ form',
        options: [`$\\text{an equilateral triangle on } |z| = 2$`, `$\\text{a line through the origin}$`, `$\\text{a square}$`, `$\\text{three collinear points}$`],
        answer: 0,
        explanation: 'Step 1: Write $8i = 8e^{i\\pi/2}$ so $|w|^{1/3} = 2$. Step 2: Angles are $\\frac{\\pi/2 + 2k\\pi}{3}$ for $k = 0,1,2$. Step 3: Successive angles differ by $\\frac{2\\pi}{3}$, giving an equilateral triangle. Step 4: Radius is $2$, not $1$, and three equally spaced points cannot be collinear.'
      },
      {
        q: 'If $z = 2(\\cos\\theta + i\\sin\\theta)$ then $z^3$ equals',
        options: [`$6(\\cos 3\\theta + i\\sin 3\\theta)$`, `$8(\\cos^3\\theta + i\\sin^3\\theta)$`, `$8(\\cos 3\\theta + i\\sin 3\\theta)$`, `$2(\\cos 3\\theta + i\\sin 3\\theta)$`],
        answer: 2,
        explanation: 'Step 1: Factor $r = 2$ before applying De Moivre. Step 2: Angle triples to $3\\theta$. Step 3: Modulus cubes to $2^3 = 8$. Step 4: Cubing the inside trigonometrically without tripling the angle is the trap in the second option.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'jeemaths-ch1-s3',
    readingTime: 8,
    intro: 'The cube roots of unity $1$, $\\omega$, $\\omega^2$ encode threefold symmetry and collapse many symmetric sums to zero. Alongside them, the triangle inequality controls how large or small $|z_1 + z_2|$ can be. Together they settle a large family of modulus-maximum and symmetric-algebra questions.',
    objectives: [
      'Use $\\omega^3 = 1$ and $1 + \\omega + \\omega^2 = 0$ to reduce powers and factor $a^3 + b^3 + c^3 - 3abc$',
      'Apply $|z_1 + z_2| \\le |z_1| + |z_2|$ with the positive-real-multiple equality case',
      'Bound $|z_1 - z_2|$ from below by $||z_1| - |z_2||$ and locate extremal configurations'
    ],
    concepts: [
      {
        term: 'Cube roots of unity',
        kind: 'definition',
        statement: 'The **cube roots** are `1, omega, omega^2` with $\\omega = e^{2\\pi i/3} = \\frac{-1 + i\\sqrt{3}}{2}$ and $\\omega^2 = \\bar{\\omega} = e^{4\\pi i/3}$.',
        detail: 'They are the vertices of an equilateral triangle on $|z| = 1$. Every nonreal cube root of unity is a power of $\\omega$, so $\\omega$ and $\\omega^2$ are conjugates with $|\\omega| = 1$.'
      },
      {
        term: 'Omega algebra',
        kind: 'theorem',
        statement: 'Omega obeys **$\\omega^3 = 1$** and `1 + omega + omega^2 = 0`, so $\\omega^{3k} = 1$, $\\omega^{3k+1} = \\omega$, $\\omega^{3k+2} = \\omega^2$.',
        detail: 'Reduce exponents modulo $3$ first. Useful companions: $\\omega^2 + \\omega + 1 = 0$ gives $(1-\\omega)(1-\\omega^2) = 3$ and $|1 - \\omega| = \\sqrt{3}$, handy for modulus computations.'
      },
      {
        term: 'Factorisation via unity roots',
        kind: 'method',
        statement: 'Unity roots **factor sums of cubes**: `a^3 + b^3 + c^3 - 3abc = (a+b+c)(a+bw+cw^2)(a+bw^2+cw)` with $w = \\omega$.',
        detail: 'In particular $x^3 - 1 = (x-1)(x-\\omega)(x-\\omega^2)$ and $x^3 + 1 = (x+1)(x+\\omega)(x+\\omega^2)$ up to ordering. If $a + b + c = 0$ then $a^3+b^3+c^3 = 3abc$ follows at once.'
      },
      {
        term: 'Triangle inequality',
        kind: 'theorem',
        statement: 'For any pair, **$|z_1 + z_2| \\le |z_1| + |z_2|$** with `equality iff z1 = t z2 for real t >= 0` (same direction from origin, with zero allowed).',
        detail: 'Geometrically the direct segment is shortest. Equality needs $\\arg z_1 = \\arg z_2$ (or one of them zero). The $n$-term form $|\\sum z_k| \\le \\sum |z_k|$ has equality exactly when all nonzero terms share one direction.'
      },
      {
        term: 'Reverse triangle bound',
        kind: 'theorem',
        statement: 'Differences obey **$|z_1 - z_2| \\ge ||z_1| - |z_2||$** with `equality for same-direction multiples`, and $|z_1 + z_2| \\ge ||z_1| - |z_2||$ similarly.',
        detail: 'These give sharp lower bounds: on $|z| = r$ the quantity $|z - a|$ lies between $||a| - r|$ and $|a| + r$. Mixing up which side gives upper versus lower bound is the common slip.'
      }
    ],
    examples: [
      {
        title: 'Omega reduction of a high power',
        problem: 'If $\\omega$ is a nonreal cube root of unity, simplify $(1 + \\omega - \\omega^2)^4$.',
        steps: [
          { label: 'Step 1', text: '```text\n1 + w + w^2 = 0  =>  1 + w = -w^2 ; so 1 + w - w^2 = -2 w^2\n```\nFrom $1 + \\omega + \\omega^2 = 0$ we get $1 + \\omega = -\\omega^2$. Hence $1 + \\omega - \\omega^2 = -\\omega^2 - \\omega^2 = -2\\omega^2$.' },
          { label: 'Step 2', text: 'Raise: $(-2\\omega^2)^4 = 16\\,\\omega^8$. Reduce exponent modulo $3$: $\\omega^8 = \\omega^{6}\\omega^2 = \\omega^2$.' },
          { label: 'Step 3', text: 'Answer $16\\omega^2 = 16(\\frac{-1 - i\\sqrt{3}}{2}) = -8 - 8i\\sqrt{3}$. Modulus check: $|1+\\omega-\\omega^2| = 2$, and $2^4 = 16 = |16\\omega^2|$.' }
        ],
        result: '$(1+\\omega-\\omega^2)^4 = 16\\omega^2 = -8-8i\\sqrt{3}$.'
      },
      {
        title: 'Sharp modulus bounds on a circle',
        problem: 'If $|z| = 4$, find the maximum and minimum of $|z + 3 + 4i|$.',
        steps: [
          { label: 'Step 1', text: '```text\n|z + a| <= |z| + |a| = 9; |z + a| >= ||a| - |z|| = 1\n```\nSet $a = 3 + 4i$ with $|a| = 5$. Triangle gives $|z+a| \\le 4 + 5 = 9$ and $|z+a| \\ge |5 - 4| = 1$.' },
          { label: 'Step 2', text: 'Maximum $9$ occurs when $z$ is a positive real multiple of $a$: $z = \\frac{4}{5}(3+4i)$. Minimum $1$ occurs at the opposite direction $z = -\\frac{4}{5}(3+4i)$.' },
          { label: 'Step 3', text: 'Both extremal $z$ have $|z| = 4$ as required, confirming sharpness. The trap is to quote $9$ for both bounds or to swap maximum with minimum.' }
        ],
        result: 'Maximum $9$ at $z = \\frac{12}{5} + \\frac{16}{5}i$; minimum $1$ at the antipodal point.'
      }
    ],
    keyTakeaways: [
      'Reduce $\\omega$ powers modulo $3$ and replace $1 + \\omega + \\omega^2$ by $0$ at the first opportunity.',
      '$|z_1 + z_2| \\le |z_1| + |z_2|$ with equality exactly for same-direction multiples from the origin.',
      'Lower bounds come from $||z_1| - |z_2||$: always pair the correct inequality side with maximum or minimum.',
      'Extremal $z$ on $|z| = r$ lie on the ray through $\\pm a$: check that the candidate has modulus $r$.'
    ],
    quiz: [
      {
        q: 'If $\\omega$ is nonreal with $\\omega^3 = 1$, then $1 + \\omega + \\omega^2$ equals',
        options: [`$3$`, `$0$`, `$1$`, `$-1$`],
        answer: 1,
        explanation: 'Step 1: The three cube roots of unity sum to zero by polygon symmetry. Step 2: Directly $(x^3-1) = (x-1)(x^2+x+1)$ forces the quadratic factor to vanish at $\\omega$. Step 3: Hence $1 + \\omega + \\omega^2 = 0$. Step 4: Option $3$ is $(1-\\omega)(1-\\omega^2)$, a different symmetric product.'
      },
      {
        q: 'Value of $\\omega^{25}$ is',
        options: [`$1$`, `$\\omega^2$`, `$\\omega$`, `$-\\omega$`],
        answer: 2,
        explanation: 'Step 1: Reduce the exponent modulo $3$: $25 = 3 \\times 8 + 1$. Step 2: So $\\omega^{25} = (\\omega^3)^8 \\cdot \\omega = \\omega$. Step 3: Option $\\omega^2$ corresponds to remainder $2$. Step 4: No sign appears since $|\\omega| = 1$ and $\\omega^3 = 1$ exactly.'
      },
      // PYQ-pattern: omega-power reduction drill
      {
        q: 'If $|z_1| = 2$ and $|z_2| = 7$, the largest possible $|z_1 + z_2|$ is',
        options: [`$5$`, `$9$`, `$7$`, `$2$`],
        answer: 1,
        explanation: 'Step 1: Triangle inequality gives $|z_1+z_2| \\le 2 + 7 = 9$. Step 2: Equality needs $z_1$ and $z_2$ in the same direction from the origin. Step 3: Such a pair exists, for instance $z_1 = 2$ and $z_2 = 7$. Step 4: The value $5$ is the minimum $|7 - 2|$, not the maximum.'
      },
      {
        q: 'Equality $|z_1 + z_2| = |z_1| + |z_2|$ holds exactly when',
        options: [`$z_1 = -z_2$`, '$z_1\\bar{z}_2$ is a nonnegative real number', `$|z_1| = |z_2|$`, `$z_1 + z_2 = 0$`],
        answer: 1,
        explanation: 'Step 1: Equality in triangle law means the vectors point the same way. Step 2: Algebraically $z_1\\bar{z}_2 = |z_1||z_2|e^{i(\\theta_1-\\theta_2)}$ is real and nonnegative exactly when $\\theta_1 = \\theta_2$ modulo $2\\pi$. Step 3: Opposite directions give $|z_1 - z_2| = |z_1| + |z_2|$ instead. Step 4: Equal moduli alone do not force a common direction.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Roots of unity filters and extremal modulus',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let $\\zeta = e^{2\\pi i/n}$ and let $k$ be an integer. Then the **roots of unity filter** states that $(1/n)\\sum_{j=0}^{n-1} \\zeta^{jk}$ equals $1$ when $n$ divides $k$ and equals $0$ otherwise. Consequently, for any polynomial $P(z) = \\sum c_{k} z^{k}$, the subsum over exponents divisible by $n$ is $(1/n)\\sum_{j=0}^{n-1} P(\\zeta^{j})$. For $n = 3$ with $\\omega = e^{2\\pi i/3}$ this gives $c_{0} + c_{3} + c_{6} + \\cdots = (P(1) + P(\\omega) + P(\\omega^{2}))/3$, which explains why $1 + \\omega + \\omega^{2} = 0$ collapses every symmetric triple sum.'
          },
          {
            kind: 'proof',
            body: 'When $n$ divides $k$ each term $\\zeta^{jk}$ equals $1$ and the average is $1$. Otherwise $\\zeta^{k} \\ne 1$ and the finite geometric sum gives $\\sum_{j=0}^{n-1} (\\zeta^{k})^{j} = (1 - \\zeta^{kn})/(1 - \\zeta^{k}) = 0$ since $\\zeta^{kn} = e^{2\\pi i k} = 1$ with numerator $1 - 1 = 0$. Linearity then extracts exactly those coefficients $c_{k}$ with $n$ dividing $k$, because $(1/n)\\sum_{j} \\sum_{k} c_{k} \\zeta^{jk} = \\sum_{k} c_{k} (1/n)\\sum_{j} \\zeta^{jk}$ and the inner average is the divisibility indicator. The $n = 3$ case is the backbone of all $\\omega$ reductions.'
          },
          {
            kind: 'example',
            heading: 'Every third binomial coefficient summed in closed form',
            body: 'Take $P(x) = (1+x)^{m} = \\sum C(m,k) x^{k}$ and extract exponents divisible by $3$. The filter gives $C(m,0) + C(m,3) + C(m,6) + \\cdots = ((1+1)^{m} + (1+\\omega)^{m} + (1+\\omega^{2})^{m})/3$. Since $1 + \\omega = -\\omega^{2}$ has modulus $1$ and argument $-2\\pi/3$, its powers rotate rather than grow, so the sum oscillates around $2^{m}/3$ with a bounded periodic correction. This reveals the graduate meaning of $\\omega$ algebra: it is discrete Fourier projection onto a residue class, and the extremal modulus cases occur when the three values $P(1)$, $P(\\omega)$ and $P(\\omega^{2})$ align in argument.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'jeemaths-ch1-s4',
    readingTime: 9,
    intro: 'Modulus equations draw shapes: $|z - z_0| = r$ is a circle and $|z - z_1| = |z - z_2|$ is a straight line. Argument conditions draw rays and half-lines, while quotient tests detect collinearity and perpendicularity. This section translates every locus into an equation and back.',
    objectives: [
      'Identify $|z - z_0| = r$, $|z - z_1| = |z - z_2|$ and $\\arg\\frac{z - z_1}{z - z_2} = \\pm\\frac{\\pi}{2}$ as circle, line and circle respectively',
      'Test three points for collinearity and two segments for perpendicularity with argument of a quotient',
      'Parametrise bisectors and rays and restrict arguments to the correct half-line'
    ],
    concepts: [
      {
        term: 'Circle locus',
        kind: 'theorem',
        statement: 'Equation **$|z - z_0| = r$** with `r > 0` is the circle centre $z_0$ radius $r$; $|z - z_0| \\le r$ is the closed disc.',
        detail: 'Squaring gives $(x-h)^2 + (y-k)^2 = r^2$ for $z_0 = h + ik$. Inequalities $|z - z_0| < r$ and $|z - z_0| > r$ select interior and exterior respectively.'
      },
      {
        term: 'Bisector locus',
        kind: 'theorem',
        statement: 'Equation **$|z - z_1| = |z - z_2|$** with `z1 != z2` is the perpendicular bisector of the segment joining $z_1$ and $z_2$.',
        detail: 'Squaring cancels $|z|^2$ and leaves a linear equation $2\\Re[z(\\bar{z}_2-\\bar{z}_1)] = |z_2|^2 - |z_1|^2$. With unequal coefficients $|z - z_1| = k|z - z_2|$ for $k \\ne 1$ the locus is instead a circle (Apollonius circle).'
      },
      {
        term: 'Ray by argument',
        kind: 'method',
        statement: 'Condition **$\\arg(z - z_0) = \\alpha$** with `fixed alpha` is the ray from $z_0$ at angle $\\alpha$, excluding $z_0$ itself.',
        detail: 'The full line through $z_0$ at angle $\\alpha$ needs two opposite rays $\\alpha$ and $\\alpha + \\pi$. Forgetting to exclude the endpoint or to pick the correct half is the standard locus slip.'
      },
      {
        term: 'Collinearity test',
        kind: 'method',
        statement: 'Points $a, b, c$ are **collinear iff** `(b - a)/(c - a)` is real, equivalently $\\arg\\frac{b-a}{c-a} \\in \\{0, \\pi\\}$.',
        detail: 'In coordinates this is $\\frac{z - \\bar{z}}{?}$ avoidance: use $\\frac{b-a}{c-a} - \\overline{(\\frac{b-a}{c-a})} = 0$. If the quotient is purely imaginary instead, the segments are perpendicular.'
      },
      {
        term: 'Right-angle circle',
        kind: 'theorem',
        statement: 'Condition **$\\arg\\frac{z - z_1}{z - z_2} = \\pm\\frac{\\pi}{2}$** with `z1 != z2` traces the circle with diameter $z_1z_2$, minus the endpoints.',
        detail: 'This is Thales theorem in complex form. The equation $|\\frac{z-z_1}{z-z_2}| = 1$ would instead give the bisector line, so modulus $1$ versus argument $\\pm\\frac{\\pi}{2}$ must not be confused.'
      }
    ],
    examples: [
      {
        title: 'Bisector in Cartesian form',
        problem: 'Find the Cartesian equation of $|z - 1| = |z + i|$.',
        steps: [
          { label: 'Step 1', text: '```text\n| x + iy - 1 |^2 = | x + iy + i |^2; expand both squares\n```\nPut $z = x + iy$: left side $(x-1)^2 + y^2$, right side $x^2 + (y+1)^2$.' },
          { label: 'Step 2', text: 'Equate: $(x-1)^2 + y^2 = x^2 + (y+1)^2$. Expanding gives $x^2 - 2x + 1 + y^2 = x^2 + y^2 + 2y + 1$.' },
          { label: 'Step 3', text: 'Cancel to $-2x = 2y$, so $y = -x$. This line at $135^\\circ$ is the perpendicular bisector of $(1,0)$ and $(0,-1)$, with midpoint $\\frac{1-i}{2}$ as check.' }
        ],
        result: 'The locus is the line $x + y = 0$, the perpendicular bisector of the two foci.'
      },
      {
        title: 'Right-angle locus identification',
        problem: 'Describe $\\arg\\frac{z - 2}{z + 2} = \\frac{\\pi}{2}$ and give one point on it.',
        steps: [
          { label: 'Step 1', text: '```text\nangle AZB = 90 deg with A = 2, B = -2  => circle diameter AB\n```\nThe quotient argument is the angle subtended by the segment from $-2$ to $2$ at $z$. Fixing it at $\\frac{\\pi}{2}$ forces a right angle.' },
          { label: 'Step 2', text: 'By Thales, $z$ lies on the circle with diameter joining $-2$ and $2$, i.e. $|z| = 2$, excluding $z = \\pm 2$ where the quotient is $0$ or undefined.' },
          { label: 'Step 3', text: 'Only the upper half has argument $+\\frac{\\pi}{2}$; the lower half gives $-\\frac{\\pi}{2}$. For instance $z = 2i$ gives $\\frac{2i-2}{2i+2} = i$ (up to positive real factor) with argument $\\frac{\\pi}{2}$.' }
        ],
        result: 'Upper open semicircle of $|z| = 2$ from $-2$ to $2$ through $2i$; full diameter circle minus endpoints for $\\pm\\frac{\\pi}{2}$.'
      }
    ],
    keyTakeaways: [
      '$|z - z_0| = r$ is a circle; $|z - z_1| = |z - z_2|$ is the perpendicular bisector line.',
      '$\\arg(z - z_0) = \\alpha$ is a single ray without its endpoint, not the whole line.',
      'Collinearity means $\\frac{b-a}{c-a}$ is real; perpendicularity means it is purely imaginary.',
      'Right angle $\\arg\\frac{z-z_1}{z-z_2} = \\pm\\frac{\\pi}{2}$ is the diameter circle minus its endpoints.'
    ],
    quiz: [
      {
        q: 'The locus $|z - (1 + 2i)| = 5$ is',
        options: [`$\\text{a line}$`, `$\\text{a circle centre } (1,2) \\text{ radius } 5$`, `$\\text{a parabola}$`, `$\\text{a single point}$`],
        answer: 1,
        explanation: 'Step 1: $|z - z_0|$ is distance from $z_0 = 1 + 2i$. Step 2: Fixing the distance at $5$ traces all points at that range. Step 3: Hence a circle of radius $5$ about $(1,2)$. Step 4: A line would need two foci with equal distances.'
      },
      // PYQ-pattern: bisector-versus-Apollonius identification
      {
        q: 'If $|z - 1| = 2|z + 1|$, the locus is',
        options: [`$\\text{a straight line}$`, `$\\text{a circle}$`, `$\\text{a ray}$`, `$\\text{empty}$`],
        answer: 1,
        explanation: 'Step 1: Unequal coefficients $1 \\ne 2$ rule out the bisector line. Step 2: Squaring gives a quadratic with $|z|^2$ terms surviving. Step 3: Completing the square yields a circle (Apollonius circle). Step 4: Only $k = 1$ collapses the $|z|^2$ terms to a line.'
      },
      {
        q: '$a, b, c$ distinct are collinear exactly when',
        options: [`$\\frac{b-a}{c-a} \\text{ is real}$`, `$|a| = |b| = |c|$`, `$\\arg(b - a) = \\frac{\\pi}{2}$`, `$|b - a| = |c - a|$`],
        answer: 0,
        explanation: 'Step 1: Vectors $b - a$ and $c - a$ must be real multiples. Step 2: Their quotient is then real (positive for same side, negative for opposite). Step 3: Equal moduli alone place points on one circle, not one line. Step 4: A fixed argument $\\frac{\\pi}{2}$ forces perpendicularity, not collinearity.'
      },
      {
        q: '$\\arg(z - 1) = \\frac{\\pi}{4}$ represents',
        options: [`$\\text{the full line through } 1 \\text{ at } 45^\\circ$`, `$\\text{the ray from } 1 \\text{ at } 45^\\circ \\text{ excluding } 1$`, `$\\text{the circle } |z - 1| = 1$`, `$\\text{the disc } |z - 1| \\le 1$`],
        answer: 1,
        explanation: 'Step 1: Argument fixes direction, not distance. Step 2: All points $1 + re^{i\\pi/4}$ with $r > 0$ meet the condition. Step 3: The endpoint $r = 0$ is excluded since argument is undefined there. Step 4: The opposite ray would need angle $\\frac{5\\pi}{4}$.'
      }
    ]
  }
]
